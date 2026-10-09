"""Check exported PDF text, page geometry and actual PDF destinations."""
from pathlib import Path
from html.parser import HTMLParser
import hashlib
import json
import re
import subprocess
import xml.etree.ElementTree as ET
from bisect import bisect_left

from pypdf import PdfReader

ROOT = Path(__file__).resolve().parents[2]
WEB = ROOT / 'output/ai-documentation-web'
PDF = ROOT / 'output/pdf/input-ki-dokumentation.pdf'
SCRATCH = ROOT / 'tmp/pdfs/ai-documentation'
POPPLER = Path('/Users/timballaschke/.cache/codex-runtimes/codex-primary-runtime/dependencies/native/poppler/poppler/bin')
MM = 72 / 25.4
NS = {'x': 'http://www.w3.org/1999/xhtml'}


def normal(text):
    return re.sub(r'\s|\u00ad|\u200b|\ufeff', '', text)


class Rows(HTMLParser):
    def __init__(self):
        super().__init__()
        self.columns = []
        self.stack = []
        self.footer = []
        self.current_row = None

    def handle_starttag(self, tag, attributes):
        attributes = dict(attributes)
        classes = attributes.get('class', '').split()
        mode = self.stack[-1] if self.stack else None
        if 'column' in classes:
            self.columns.append([])
        if 'doc-row' in classes:
            self.current_row = {'id': attributes.get('id'), 'number': [], 'body': []}
            self.columns[-1].append(self.current_row)
        if 'line-number' in classes:
            mode = 'number'
        if 'line-text' in classes:
            mode = 'body'
        if 'page-number' in classes:
            mode = 'footer'
        if tag not in ('br', 'meta', 'link', 'img', 'input', 'hr'):
            self.stack.append(mode)

    def handle_endtag(self, tag):
        if self.stack:
            self.stack.pop()

    def handle_data(self, data):
        mode = self.stack[-1] if self.stack else None
        if mode == 'footer':
            self.footer.append(data)
        elif mode in ('number', 'body'):
            self.current_row[mode].append(data)


def verify():
    edition_bytes = (WEB / 'edition.json').read_bytes()
    edition = json.loads(edition_bytes)
    inspection = json.loads((SCRATCH / 'print-inspection.json').read_text())
    assert inspection['edition_sha256'] == hashlib.sha256(edition_bytes).hexdigest()
    assert inspection['pdf_sha256'] == hashlib.sha256(PDF.read_bytes()).hexdigest()
    subprocess.run([str(POPPLER / 'pdftotext'), '-bbox-layout', str(PDF), str(SCRATCH / 'bbox.html')], check=True)
    pages = ET.parse(SCRATCH / 'bbox.html').findall('.//x:page', NS)
    reader = PdfReader(PDF)
    assert len(reader.pages) == len(pages) == len(edition['pages'])
    failures = []
    checked_rows = 0
    page_geometry = []
    row_positions = {}
    for index, (pdf_page, bbox_page) in enumerate(zip(reader.pages, pages)):
        number = index + 1
        expected = Rows()
        expected.feed((WEB / 'pages' / f'{number:04d}.html').read_text())
        width, height = float(pdf_page.mediabox.width), float(pdf_page.mediabox.height)
        assert abs(width / MM - 210) < .2 and abs(height / MM - 297) < .2
        words = bbox_page.findall('.//x:word', NS)
        footer_words = [word for word in words if float(word.get('yMin')) > 800]
        assert normal(''.join(word.text or '' for word in footer_words)) == normal(''.join(expected.footer))
        starts = [30 * MM, 118.5 * MM] if number % 2 else [8 * MM, 96.5 * MM]
        body_words = [word for word in words if float(word.get('yMin')) <= 800]
        for column, (rows, left) in enumerate(zip(expected.columns, starts)):
            selected = [word for word in body_words if (float(word.get('xMin')) >= starts[1] - 2) == bool(column)]
            number_words = sorted([word for word in selected if abs(float(word.get('xMin')) - left) < 1.0], key=lambda word: float(word.get('yMin')))
            assert len(number_words) == len(rows), (number, column, len(number_words), len(rows))
            bottoms = [float(word.get('yMax')) for word in number_words]
            for row_index, word in enumerate(number_words, 1):
                row_positions[(number, column + 1, row_index)] = {
                    'number': word.text, 'left': float(word.get('xMin')),
                    'top': float(word.get('yMin')), 'height': height,
                }
            grouped = [[] for _ in rows]
            for word in selected:
                # Type 3 fallback fonts have taller ascent boxes than Arketa.
                # Their lower bounds stay on the correct printed row.
                bottom = float(word.get('yMax'))
                insertion = bisect_left(bottoms, bottom)
                candidates = [row for row in (insertion - 1, insertion) if 0 <= row < len(rows)]
                closest = min(candidates, key=lambda row: abs(bottom - bottoms[row]))
                grouped[closest].append(word)
            for row, printed_words in zip(rows, grouped):
                checked_rows += 1
                actual = ''.join(word.text or '' for word in sorted(printed_words, key=lambda word: float(word.get('xMin'))))
                wanted = ''.join(row['number']) + ''.join(row['body'])
                if normal(actual) != normal(wanted):
                    failures.append({'page': number, 'column': column + 1, 'id': row['id'], 'expected_length': len(normal(wanted)), 'actual_length': len(normal(actual))})
        page_geometry.append({'page': number, 'size_mm': [width / MM, height / MM], 'column_starts_mm': [left / MM for left in starts]})
    destinations = {key.lstrip('/'): value for key, value in reader.named_destinations.items()}
    endpoint_failures = []
    checked_endpoints = 0
    notices = json.loads((ROOT / 'thesis/typesetting-compat/ai-notices.json').read_text())
    for section in notices['sections']:
        for item in section['ranges']:
            for key in ('anchor', 'end_anchor'):
                anchor = item[key]
                dest = destinations.get(anchor)
                target = edition['targets'][anchor]
                checked_endpoints += 1
                if dest is None or reader.get_destination_page_number(dest) + 1 != target['page']:
                    endpoint_failures.append({'anchor': anchor, 'expected_page': target['page']})
                else:
                    position = row_positions[(target['page'], target['column'], target['physical_row'])]
                    if (position['number'] != str(target['line_number'])
                            or abs(float(dest.left) - position['left']) > 1
                            or abs(position['height'] - float(dest.top) - position['top']) > 2.2):
                        endpoint_failures.append({'anchor': anchor, 'wrong_pdf_row_position': True})
    internal_links = 0
    unresolved = []
    for number, pdf_page in enumerate(reader.pages, 1):
        for annotation in pdf_page.get('/Annots', []):
            annotation = annotation.get_object()
            if '/Dest' in annotation:
                internal_links += 1
                name = str(annotation['/Dest']).lstrip('/')
                if name not in destinations:
                    unresolved.append({'page': number, 'destination': name})
    assert 'CGPT-01-H000007' not in destinations
    result = {
        'date': '2026-10-08', 'pdf': str(PDF.relative_to(ROOT)),
        'pdf_sha256': hashlib.sha256(PDF.read_bytes()).hexdigest(),
        'edition_sha256': hashlib.sha256(edition_bytes).hexdigest(),
        'locations_sha256': hashlib.sha256((WEB / 'locations.json').read_bytes()).hexdigest(),
        'pages': len(pages), 'numbered_rows_checked': checked_rows,
        'text_failures': failures, 'checked_reference_endpoints': checked_endpoints,
        'reference_endpoint_failures': endpoint_failures,
        'reference_destination_rows_checked_in_pdf': True,
        'named_pdf_destinations': len(destinations), 'internal_pdf_links': internal_links,
        'unresolved_internal_pdf_links': unresolved, 'opening_message_omitted': True,
        'all_pdf_page_boxes_a4': True, 'page_geometry': page_geometry,
    }
    (ROOT / 'ai-documentation/web-typesetting/pdf-export-results.json').write_text(json.dumps(result, ensure_ascii=False, indent=2) + '\n')
    print(json.dumps({key: value for key, value in result.items() if key not in ('page_geometry', 'text_failures', 'reference_endpoint_failures', 'unresolved_internal_pdf_links')}, ensure_ascii=False))
    print(json.dumps({'text_failures': len(failures), 'endpoint_failures': len(endpoint_failures), 'unresolved_links': len(unresolved)}))
    assert not failures and not endpoint_failures and not unresolved


if __name__ == '__main__':
    verify()
