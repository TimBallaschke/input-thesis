"""Verify both exported editions against every measured frozen browser row."""
from pathlib import Path
import hashlib
import json
import logging
import re
import unicodedata
from urllib.parse import urljoin

import pdfplumber
from pypdf import PdfReader

ROOT = Path(__file__).resolve().parents[2]
HERE = Path(__file__).resolve().parent
WORK = ROOT / 'tmp/vivliostyle-compat'
MM = 72 / 25.4
logging.getLogger('pdfminer').setLevel(logging.ERROR)


def read(path):
    return json.loads(path.read_text())


def digest(path):
    return hashlib.sha256(path.read_bytes()).hexdigest()


def normalized(text):
    # Preserve row contents/order while ignoring extraction-only whitespace.
    return re.sub(r'\s+', '', unicodedata.normalize('NFKC', text)).replace('\u00ad', '')


manifest = read(HERE / 'pdf-export-manifest.json')
fixture = read(WORK / 'web/fixture.json')
assert digest(WORK / 'web/frozen.html') == manifest['frozen_sha256']
assert digest(WORK / 'web/print.css') == manifest['css_sha256']
assert digest(ROOT / 'presentation/261005_Master_Thesis.pages') == fixture['source_pages_sha256']
assert digest(Path(fixture['plugin_path'])) == fixture['plugin_sha256']
results = []

for variant in manifest['variants']:
    pdf = Path(variant['pdf'])
    inspection = read(Path(variant['inspection']))
    assert digest(pdf) == variant['pdf_sha256']
    reader = PdfReader(pdf)
    assert len(reader.pages) == inspection['pageCount'] == variant['pages']
    assert all(abs(float(p.mediabox.width) - 210 * MM) < .03
               and abs(float(p.mediabox.height) - 297 * MM) < .05 for p in reader.pages)
    counts = dict(body=0, ai=0, source=0, bibliography=0)
    footer_numbers = []
    star_errors = []
    font_names = set()
    with pdfplumber.open(pdf) as document:
        for model, page in zip(inspection['pages'], document.pages):
            for line in model['lines']:
                x, y = line['x'] * MM, line['y'] * MM
                width, height = line['width'] * MM, line['height'] * MM
                # PDF character boxes include a punctuation glyph's full
                # advance, even when only its ink sits inside the column.
                chars = page.within_bbox((x - 7, y - 1.5, x + width + 7, y + height + 1.5)).chars
                chars = sorted(chars, key=lambda c: c['x0'])
                actual = ''.join(c['text'] for c in chars)
                assert normalized(actual) == normalized(line['text']), (
                    variant['id'], model['number'], line['kind'], line['text'], actual)
                assert all('Arketa' in c['fontname'] for c in chars if c['text'].strip()), 'Fallback font in PDF'
                font_names.update(c['fontname'] for c in chars)
                counts[line['kind']] += 1
                if line['kind'] == 'body':
                    ordinary = [c for c in chars if abs(c['size'] - 10) < .03]
                    assert ordinary and all(abs(c['size'] - 10) < .03 or abs(c['size'] - 6) < .03 for c in chars)
                    for index, char in enumerate(ordinary):
                        if char['text'] != '*':
                            continue
                        neighbours = [c for c in ordinary[:index] + ordinary[index+1:] if c['text'].isalpha()]
                        assert neighbours
                        nearest = min(neighbours, key=lambda c: abs(c['x0'] - char['x0']))
                        star_errors.append(abs(char['top'] - nearest['top']))
                else:
                    assert all(abs(c['size'] - 6) < .03 for c in chars if c['text'].strip())
            footer = model['pageNumber'][0]
            x, y = footer['x'] * MM, footer['y'] * MM
            footer_chars = page.within_bbox((x - 2, y - 2, x + footer['width'] * MM + 2,
                                            y + footer['height'] * MM + 2)).chars
            actual_number = normalized(''.join(c['text'] for c in sorted(footer_chars, key=lambda c: c['x0'])))
            assert actual_number == str(model['number']).zfill(2), (variant['id'], model['number'], actual_number)
            assert all(abs(c['size'] - 10) < .03 for c in footer_chars)
            footer_numbers.append(actual_number)
    assert counts == dict(body=1700, ai=230, source=99, bibliography=162), counts
    assert len(star_errors) == 84 and max(star_errors) < .03, ('Displaced PDF gender stars', star_errors)
    destinations = reader.named_destinations
    internal = external = 0
    uris = set()
    for page in reader.pages:
        for ref in page.get('/Annots', []):
            annotation = ref.get_object()
            if annotation.get('/Subtype') != '/Link':
                continue
            action = annotation.get('/A', {})
            target = annotation.get('/Dest')
            if action.get('/S') == '/GoTo':
                target = action.get('/D')
            elif action.get('/S') == '/URI':
                external += 1
                uris.add(str(action['/URI']))
            if target is not None:
                internal += 1
                assert str(target) in destinations, ('Missing PDF destination', target)
    def target_page(identifier):
        matches = [dest for key, dest in destinations.items() if str(key).endswith('0023' + identifier)]
        assert len(matches) == 1, ('Missing or duplicate target', identifier)
        return reader.get_destination_page_number(matches[0]) + 1
    source_targets = [{'number': n['number'], 'call_page': target_page(n['call_id']),
                       'source_page': target_page(n['id'])} for n in fixture['notes']]
    ai_notices = read(HERE / 'ai-notices.json')
    input_url = variant.get('input_url', 'http://127.0.0.1:8768/' + Path(variant['input']).name)
    ai_urls = {urljoin(input_url, r['href']) for section in ai_notices['sections'] for r in section['ranges']}
    assert ai_urls <= uris, ('Missing AI documentation PDF links', len(ai_urls - uris))
    fonts = {}
    for page in reader.pages:
        for reference in page['/Resources'].get('/Font', {}).values():
            font = reference.get_object()
            descendant = font.get('/DescendantFonts', [font])[0].get_object()
            descriptor = descendant.get('/FontDescriptor')
            descriptor = descriptor.get_object() if descriptor else {}
            name = str(font.get('/BaseFont') or descriptor.get('/FontName'))
            if font.get('/Subtype') == '/Type3':
                # Chromium embeds CFF glyphs as vector character programs.
                programs = font.get('/CharProcs', {}).get_object()
                embedded = bool(programs) and all(p.get_object().get_data() for p in programs.values())
                assert font.get('/ToUnicode'), 'Type 3 glyphs have no Unicode mapping'
            else:
                embedded = any(k in descriptor for k in ['/FontFile', '/FontFile2', '/FontFile3'])
            fonts[name] = fonts.get(name, True) and bool(embedded)
    assert fonts and all(fonts.values()), ('Unembedded font', fonts)
    results.append({'variant': variant['id'], 'pdf': str(pdf), 'pdf_sha256': digest(pdf),
                    'pages': len(reader.pages), 'a4_verified': True, 'rows': counts,
                    'all_browser_rows_preserved': True, 'all_page_numbers_verified': footer_numbers,
                    'gender_stars': 84, 'max_gender_star_baseline_error_pt': max(star_errors),
                    'internal_links': internal, 'external_links': external,
                    'all_internal_destinations_resolve': True, 'all_343_ai_ranges_linked': True,
                    'source_targets': source_targets, 'fonts_embedded': fonts,
                    'font_names': sorted(font_names)})

digital, printed = results
mapping = {p['digital']: p['print'] for p in manifest['print_page_mapping']}
for a, b in zip(digital['source_targets'], printed['source_targets']):
    assert a['number'] == b['number']
    assert mapping[a['call_page']] == b['call_page'] and mapping[a['source_page']] == b['source_page']
report = {'checked': '2026-10-08', 'variants': results,
          'all_source_destinations_correctly_renumbered': True,
          'canonical_preview_preserved': True, 'original_pages_unchanged': True,
          'original_plugin_unchanged': True, 'visual_qa_complete': False}
(HERE / 'pdf-variant-verification.json').write_text(json.dumps(report, ensure_ascii=False, indent=2) + '\n')
print(json.dumps([{'variant': r['variant'], 'pages': r['pages'], 'rows': r['rows'],
                   'all_rows_and_numbers_preserved': True, 'internal_links': r['internal_links']}
                  for r in results], ensure_ascii=False, indent=2))
