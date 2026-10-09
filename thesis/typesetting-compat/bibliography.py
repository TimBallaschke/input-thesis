"""Render only the manuscript's cited BibLaTeX records; never alter the library."""
import hashlib
import html
import json
import re
import unicodedata
from source_plugin_adapter import adapt_plugin


def adapt_bibliography_plugin(original):
    """Enable existing zero-width URL break segments in the local composer."""
    source = adapt_plugin(original)
    replacements = [
        ('\t\tQr(r) && n + 1 < e.length && t.push({',
         '\t\tif (r === "\\u200b" && n + 1 < e.length) { t.push({segmentIndex:n+1, kind:"zero-width-break"}); continue; }\n\t\tQr(r) && n + 1 < e.length && t.push({'),
        ('s = o === q, c = Qr(o)', 's = o === q || o === "\\u200b", c = Qr(o)'),
        ('t !== q && r.push(t);', 't !== q && t !== "\\u200b" && r.push(t);'),
        ('if (t !== q) {', 'if (t !== q && t !== "\\u200b") {'),
        ('if (t === q) continue;', 'if (t === q || t === "\\u200b") continue;'),
    ]
    for old, new in replacements:
        assert source.count(old) == 1, f'Unexpected bibliography plugin structure: {old}'
        source = source.replace(old, new)
    return source


def records(path):
    text = path.read_text()
    for start in re.finditer(r'^@(\w+)\{([^,]+),', text, re.M):
        position, fields = start.end(), {}
        while True:
            whitespace = re.match(r'\s*,?\s*', text[position:])
            position += whitespace.end()
            if text[position] == '}':
                break
            field = re.match(r'(\w+)\s*=\s*', text[position:])
            if not field:
                raise ValueError(f'Unsupported BibLaTeX field in {path}: {text[position:position+40]}')
            name = field[1].lower()
            position += field.end()
            opening = text[position]
            if opening in '{"':
                position += 1
                beginning, depth = position, 1
                while depth:
                    char = text[position]
                    if char == '\\':
                        position += 2
                        continue
                    if opening == '{':
                        depth += (char == '{') - (char == '}')
                    elif char == '"':
                        depth = 0
                    position += 1
                value = text[beginning:position-1]
            else:
                value = re.match(r'[^,}\n]+', text[position:])[0].strip()
                position += len(value)
            fields[name] = value
        yield start[2], {'type': start[1].lower(), 'fields': fields}


def plain(value):
    value = value.replace('\\&', '&').replace('\\_', '_').replace('\\%', '%')
    value = value.replace('{', '').replace('}', '').replace('~', ' ').replace('--', '–')
    if '\\' in value:
        raise ValueError(f'Unresolved TeX command in bibliography: {value}')
    return re.sub(r'\s+', ' ', value).strip()


def names(value):
    result = []
    # Corporate names keep their literal spelling. Extended BibLaTeX names
    # retain prefixes (van Esch, von Ahn) rather than printing field syntax.
    for name in re.split(r'\s+and\s+', value):
        if 'family=' in name:
            parts = dict(part.strip().split('=', 1) for part in name.split(','))
            family = ' '.join(filter(None, [parts.get('prefix'), parts['family']]))
            name = f'{family}, {parts.get("given", "")}'.rstrip(', ')
        result.append(plain(name))
    return '; '.join(result)


def date_de(value):
    parts = value.split('-')
    return '.'.join(reversed(parts)) if len(parts) == 3 else value


def link(url, label=None):
    label = label or url
    # Invisible break opportunities also prevent linguistic hyphenation of
    # URL components; the immutable href and the printed URL remain complete.
    if label == url:
        label = '\u200b'.join(label)
    return f'<a class="bibliography-link" href="{html.escape(url, quote=True)}">{html.escape(label)}</a>'


def render_record(record):
    raw = record['fields']
    f = {key: plain(value) for key, value in raw.items() if key not in ['author', 'editor', 'file', 'abstract', 'keywords']}
    author = names(raw.get('author', raw.get('organization', '')))
    assert author and f.get('title'), f'Incomplete bibliography record: {record}'
    year = f.get('date', f.get('year', 'o. J.'))[:4] if f.get('date', f.get('year')) else 'o. J.'
    if record['type'] == 'online' and year == 'o. J.':
        # The manuscript explicitly cites these undated web pages as snapshots.
        year = f'o. J.; Stand {date_de(f["urldate"])}'
    parts = [f'{html.escape(author)} ({year}). {html.escape(f["title"])}.']
    if f.get('titleaddon'):
        parts.append(html.escape(f['titleaddon']) + '.')
    if f.get('journaltitle', f.get('journal')):
        venue = f.get('journaltitle', f.get('journal'))
        if f.get('volume'):
            venue += ', ' + f['volume']
        if f.get('number'):
            venue += ' (' + f['number'] + ')'
        if f.get('pages'):
            venue += ', S. ' + f['pages']
        parts.append(html.escape(venue) + '.')
    elif f.get('booktitle'):
        venue = 'In: '
        if raw.get('editor'):
            venue += names(raw['editor']) + ' (Hg.), '
        venue += f['booktitle']
        if f.get('volume'):
            venue += ', Bd. ' + f['volume']
        if f.get('pages'):
            venue += ', S. ' + f['pages']
        parts.append(html.escape(venue) + '.')
    elif f.get('number'):
        parts.append(html.escape(f['number']) + '.')
    publisher = f.get('publisher', f.get('institution', ''))
    if publisher and publisher != author and not f.get('journaltitle', f.get('journal')):
        publication = (f.get('location', f.get('address', '')) + ': ' if f.get('location', f.get('address')) else '') + publisher
        parts.append(html.escape(publication).rstrip('.') + '.')
    if record['type'] == 'online' and len(f.get('date', '')) > 4:
        parts.append('Stand: ' + date_de(f['date']) + '.')
    if f.get('doi'):
        parts.append('DOI: ' + link('https://doi.org/' + f['doi'], f['doi']) + '.')
    elif f.get('url'):
        parts.append(link(f['url']) + '.')
    if f.get('url') and f.get('urldate') and not f.get('doi'):
        parts.append('Zugriff: ' + date_de(f['urldate']) + '.')
    return ' '.join(parts), author, year


def build_bibliography(root, keys):
    paths = [root / path for path in [
        'references/library.bib', 'references/manual.bib',
        'research/import-records/physical-and-speech-text-entry-c041-c042.bib',
        'research/import-records/norman-2008-signifiers.bib',
        'thesis/text/source/additional-records.bib',
    ]]
    found, origins = {}, {}
    for path in paths:
        for key, record in records(path):
            if key in keys and key not in found:
                record['fields'] = {name: value for name, value in record['fields'].items()
                                    if name not in ['file', 'abstract', 'keywords']}
                found[key] = record
                origins[key] = str(path.relative_to(root))
    assert set(found) == keys, f'Missing bibliography keys: {keys - set(found)}'
    entries = []
    for key, record in found.items():
        markup, author, year = render_record(record)
        entries.append({'key': key, 'author': author, 'year': year, 'html': markup,
                        'origin': origins[key], 'record': record})
    model_path = root / 'ai-documentation/model-register.json'
    model_register = json.loads(model_path.read_text())
    # Preserve provider/runtime identifiers instead of guessing public names.
    model_labels = '; '.join(html.escape(tool.removeprefix('OpenAI ')) + ': ' + ', '.join(html.escape(model)
                             for model in identifiers)
                             for tool, identifiers in model_register['models'].items())
    unknown_labels = ', '.join(model_register['unknown_model_archives'])
    entries.append({'key': 'aiCollaborationDocumentation2026', 'author': 'Ballaschke, Tim', 'year': '2026',
        'html': 'Ballaschke, Tim (2026). ' + link('ai-documentation/preview.html', 'Input: KI-Dokumentation')
                + '. Begleitdokumentation mit Seiten- und Zeilennummern. '
                + 'KI-Einsatz: Recherche, Textauswahl, Ausarbeitung, Überarbeitung. '
                + 'OpenAI-Werkzeuge und Modellkennungen: ' + model_labels + '. '
                + 'Fehlende Modellangaben: ' + html.escape(unknown_labels) + '.',
        'origin': 'editorial description of output/ai-documentation-web/edition.json and ai-documentation/model-register.json',
        'model_register': 'ai-documentation/model-register.json'})
    def sort_key(entry):
        return unicodedata.normalize('NFKD', entry['author']).casefold(), entry['year'], entry['key']
    entries.sort(key=sort_key)
    for entry in entries:
        entry['id'] = 'bib-' + entry['key']
        entry['text'] = html.unescape(re.sub(r'<[^>]+>', '', entry['html'])).replace('\u200b', '')
    manifest = {'title': 'Bibliography', 'cited_keys': sorted(keys),
                'entries': entries, 'font_size_pt': 6, 'baseline_rows': 102,
                'style': 'author-year, complete names, German labels; project style, not a mandated CSL style',
                'inputs': {str(path.relative_to(root)): hashlib.sha256(path.read_bytes()).hexdigest() for path in paths + [model_path]}}
    body = '<section class="chapter-title bibliography-title" id="bibliography-title"><h1 lang="en">Bibliography</h1></section>\n'
    body += '<main class="bibliography" role="doc-bibliography">' + '\n'.join(
        f'<div class="bibliography-entry csl-entry" id="{entry["id"]}" data-bib-key="{entry["key"]}">{entry["html"]}</div>' for entry in entries) + '</main>'
    return body, manifest
