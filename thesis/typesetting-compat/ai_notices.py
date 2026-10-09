"""Resolve the curated subsection mapping against the current printed AI edition."""
from hashlib import sha256
from html import escape
from html.parser import HTMLParser
import json


NOTICE = ('Dieser Abschnitt wurde mit Unterstützung von KI erarbeitet. '
          'Die zugehörige Recherche, Textauswahl, Ausarbeitung und Überarbeitung '
          'sind in der KI-Dokumentation dokumentiert: ')


class PrintedRows(HTMLParser):
    def __init__(self):
        super().__init__()
        self.rows = {}

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if tag == 'div' and 'doc-row' in attrs.get('class', '').split():
            self.rows[int(attrs['data-line-number'])] = attrs['id']


def merge_continuous_pages(page_ranges, page_rows, page_archives):
    """Join selected rows across pages without filling gaps or archive resets."""
    ranges = []
    for page_range in page_ranges:
        page = page_range['page']
        segment = {key: page_range[key] for key in
                   ('page', 'start_line', 'end_line', 'reference_ids')}
        previous = ranges[-1] if ranges else None
        if (previous and page == previous['end_page'] + 1
                and page_archives[page] == previous['archive_id']
                and previous['end_line'] == max(page_rows[previous['end_page']])
                and page_range['start_line'] == min(page_rows[page])
                and page_range['start_line'] == previous['end_line'] + 1):
            previous['end_page'] = page
            previous['end_line'] = page_range['end_line']
            previous['end_anchor'] = page_rows[page][page_range['end_line']]
            previous['segments'].append(segment)
            previous['reference_ids'] = list(dict.fromkeys(
                previous['reference_ids'] + page_range['reference_ids']))
        else:
            ranges.append({**page_range, 'end_page': page,
                           'archive_id': page_archives[page],
                           'end_anchor': page_rows[page][page_range['end_line']],
                           'segments': [segment]})
    return ranges


def resolve_notices(root, pages_sha256):
    mapping_path = root / 'ai-documentation/zuordnung/unterkapitel-ki-zuordnung.json'
    edition_path = root / 'output/ai-documentation-web/edition.json'
    locations_path = edition_path.parent / 'locations.json'
    mapping = json.loads(mapping_path.read_text())
    edition = json.loads(edition_path.read_text())
    edition_sha256 = sha256(edition_path.read_bytes()).hexdigest()
    locations = json.loads(locations_path.read_text())['canonical_lines']
    if mapping['source_state']['source_pages_sha256'] != pages_sha256:
        raise ValueError('The curated AI mapping belongs to a different manuscript.')
    archives = {a['id']: a for a in edition['archives']}
    page_rows, archive_locations = {}, {}
    page_archives = {page['number']: page['archive'] for page in edition['pages']}
    for page in edition['pages']:
        parser = PrintedRows()
        parser.feed((edition_path.parent / f'pages/{page["number"]:04d}.html').read_text())
        page_rows[page['number']] = parser.rows
    for canonical, position in locations.items():
        archive, number = canonical.rsplit('-L', 1)
        archive_locations.setdefault(archive, []).append((int(number), position))
    for rows in archive_locations.values():
        rows.sort(key=lambda row: row[0])
    resolved = {}
    for reference in mapping['references']:
        archive_id = reference['archive_id']
        if archives[archive_id]['sha256'] != reference['archive_sha256']:
            raise ValueError(f'Archive changed: {archive_id}')
        positions = [pos for number, pos in archive_locations[archive_id]
                     if reference['canonical_start_line'] <= number <= reference['canonical_end_line']]
        if not positions or reference['canonical_start'] not in locations or reference['canonical_end'] not in locations:
            raise ValueError(f'Missing printed reference: {reference["id"]}')
        intervals = []
        for position in positions:
            start, end = position['start'], position['end']
            for page_number in range(start['page'], end['page'] + 1):
                rows = page_rows[page_number]
                first = start['line_number'] if page_number == start['page'] else min(rows)
                last = end['line_number'] if page_number == end['page'] else max(rows)
                if first not in rows or last not in rows:
                    raise ValueError(f'Printed row missing: {reference["id"]}, page {page_number}')
                intervals.append((page_number, first, last))
        resolved[reference['id']] = intervals
    notices = []
    for section in mapping['sections']:
        intervals = sorted((page, first, last, reference_id)
                           for reference_id in section['reference_ids']
                           for page, first, last in resolved[reference_id])
        ranges = []
        for page, first, last, reference_id in intervals:
            if ranges and ranges[-1]['page'] == page and first <= ranges[-1]['end_line'] + 1:
                entry = ranges[-1]
                entry['end_line'] = max(entry['end_line'], last)
                if reference_id not in entry['reference_ids']:
                    entry['reference_ids'].append(reference_id)
            else:
                anchor = page_rows[page][first]
                if edition['targets'].get(anchor, {}).get('page') != page:
                    raise ValueError(f'Missing browser target: {anchor}')
                ranges.append({'page': page, 'start_line': first, 'end_line': last,
                               'anchor': anchor, 'href': f'ai-documentation/preview.html?edition={edition_sha256[:16]}#{anchor}',
                               'reference_ids': [reference_id]})
        ranges = merge_continuous_pages(ranges, page_rows, page_archives)
        labels = []
        for entry in ranges:
            lines = str(entry['start_line'])
            if entry['end_line'] != entry['start_line']:
                lines += f'–{entry["end_line"]}'
            line_term = 'Zeile' if entry['end_line'] == entry['start_line'] else 'Zeilen'
            pages = (f'Seite {entry["page"]}' if entry['page'] == entry['end_page']
                     else f'Seiten {entry["page"]}–{entry["end_page"]}')
            entry['label'] = f'{pages}, {line_term} {lines}'
            if edition['targets'].get(entry['end_anchor'], {}).get('page') != entry['end_page']:
                raise ValueError(f'Missing browser range end: {entry["end_anchor"]}')
            for anchor, page, line in ((entry['anchor'], entry['page'], entry['start_line']),
                                      (entry['end_anchor'], entry['end_page'], entry['end_line'])):
                target = edition['targets'][anchor]
                if target['line_number'] != line or page_rows[page].get(line) != anchor:
                    raise ValueError(f'Printed/browser reference differs: {anchor}')
            labels.append(f'<a class="ai-documentation-ref" href="{escape(entry["href"], quote=True)}">'
                          + escape(entry['label']) + '</a>')
        text = NOTICE + '; '.join(entry['label'] for entry in ranges) + '.'
        notices.append({'trace_id': section['id'], 'section_id': section['section_id'],
                        'title': section['title'], 'reference_ids': section['reference_ids'],
                        'ranges': ranges, 'text': text,
                        'html': escape(NOTICE) + '; '.join(labels) + '.'})
    manifest = {'schema_version': 2, 'scope': 'all_curated_section_relations',
                'mapping_sha256': sha256(mapping_path.read_bytes()).hexdigest(),
                'edition_sha256': edition_sha256,
                'locations_sha256': sha256(locations_path.read_bytes()).hexdigest(),
                'source_pages_sha256': pages_sha256,
                'line_numbers': 'current_printed_rows_including_headers_and_blank_rows',
                'reference_labels': 'page_and_line_terms_written_out',
                'reference_wrapping': 'normal_text_flow',
                'range_merging': 'overlap_or_immediate_adjacency_including_contiguous_pages_within_one_archive',
                'sections': notices}
    return manifest
