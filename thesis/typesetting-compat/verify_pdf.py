#!/usr/bin/env python3
"""Check exported body lines and all PDF destinations against the fixture."""
from pathlib import Path
import hashlib
import json
import logging
import re
import sys
import pdfplumber
from pypdf import PdfReader

ROOT = Path(__file__).resolve().parents[2]
WORK = ROOT / 'tmp/vivliostyle-compat'
PDF = Path(sys.argv[1]).resolve() if len(sys.argv) > 1 else ROOT / 'output/pdf/Input_Arketa_Zweispaltig.pdf'
composition = json.loads((WORK / 'composition.json').read_text())
fixture = json.loads((WORK / 'web/fixture.json').read_text())
expected = [line['text'] for p in composition['manifest'] for line in p['lines']]
actual = []
layout = fixture.get('layout', {})
font_family = layout.get('font_family', 'Garamond')
font_size = layout.get('font_size_pt', 12)
inspection = json.loads((WORK / 'frozen-inspection.json').read_text())
logging.getLogger('pdfminer').setLevel(logging.ERROR)
with pdfplumber.open(PDF) as doc:
    for model, page in zip(inspection['pages'], doc.pages):
        body = page.filter(lambda o: o.get('object_type') == 'char'
                           and font_family in o.get('fontname', '')
                           and abs(o.get('size', 0) - font_size) < 0.03)
        if layout.get('columns') == 2:
            # Read the measured plugin lines in column flow order. Full glyph
            # advances include punctuation overhang, so leave horizontal room.
            for line in model['geometry']['bodyLines']:
                factor = 72 / 25.4
                x, y = line['x'] * factor, line['y'] * factor
                width, height = line['width'] * factor, line['height'] * factor
                area = body.within_bbox((x - 7, y - 2, x + width + 7, y + height + 2))
                actual.append(area.extract_text(x_tolerance=1.5, y_tolerance=2) or '')
        else:
            actual.extend((body.extract_text(x_tolerance=1.5, y_tolerance=2) or '').splitlines())


def normalized(text):
    # Vivliostyle renders the semantic note call in its own small-font run.
    return re.sub(r'[⁰¹²³⁴⁵⁶⁷⁸⁹]', '', text).replace(' .', '.').replace(' ,', ',').strip()


assert len(actual) == len(expected), (len(actual), len(expected))
assert [normalized(t) for t in actual] == [normalized(t) for t in expected], 'PDF changed body lines.'
reader = PdfReader(PDF)
destinations = reader.named_destinations
internal, external = 0, 0
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
        if target is not None:
            internal += 1
            assert str(target) in destinations, ('Missing PDF destination', target)


def target_page(suffix):
    matching = [value for key, value in destinations.items() if key.endswith('0023' + suffix)]
    assert len(matching) == 1, suffix
    return reader.get_destination_page_number(matching[0]) + 1


note_pages = []
for note in fixture['notes'] if layout.get('sources_visible', True) else []:
    call_page, note_page = target_page(note['call_id']), target_page(note['id'])
    if layout.get('source_placement') != 'subchapter_end':
        assert call_page == note_page, (note['number'], call_page, note_page)
    note_pages.append({'number': note['number'], 'page': note_page})
for key in fixture['sources'] if layout.get('sources_visible', True) and layout.get('source_placement') != 'subchapter_end' else []:
    target_page('ref-' + key)
if layout.get('sources_visible') is False:
    assert internal == external == 0
    assert all(not page['notes'] and not page['noteCalls'] for page in inspection['pages'])
assert hashlib.sha256(Path(fixture['plugin_path']).read_bytes()).hexdigest() == fixture['plugin_sha256'], 'Original plugin was changed.'
assert hashlib.sha256((ROOT/'presentation/261005_Master_Thesis.pages').read_bytes()).hexdigest() == fixture['source_pages_sha256'], 'Pages manuscript was changed.'
if layout.get('paragraph_spacing') == 0:
    frozen = (WORK / 'web/frozen.html').read_text()
    assert frozen.count('data-paragraph-indent="true"') == len(fixture['paragraphs']) - (len(set(p['section_id'] for p in fixture['paragraphs'])) if fixture.get('scope') == 'complete_final_manuscript' else (2 if layout.get('headings_visible') else 1))
    if not layout.get('headings_visible'):
        assert not any(page['geometry']['headings'] for page in inspection['pages'])
if layout.get('columns') == 2:
    assert all(abs(float(page.mediabox.width) - 595.2756) < 0.02 and
               abs(float(page.mediabox.height) - 841.8898) < 0.05 for page in reader.pages)
    for page in inspection['pages']:
        number = page['geometry']['pageNumber']
        assert len(number) == 1 and number[0]['text'] == str(page['number']).zfill(2)
        number_center = 105 if layout.get('chapter_title_page') and not page['geometry']['bodyLines'] and not page['notes'] else (layout['margins_mm']['left'] + (210 - layout['margins_mm']['left'] - layout['margins_mm']['right']) / 2)
        assert abs(number[0]['x'] + number[0]['width']/2 - number_center) < 0.02
        assert all(h['align'] == 'center' and h['transform'] == 'uppercase'
                   for h in page['geometry']['headings'])
result = {'pdf': str(PDF.relative_to(ROOT)), 'pages': len(reader.pages),
          'body_lines': len(actual), 'body_line_text_preserved': True,
          'internal_links': internal, 'external_links': external,
          'all_internal_destinations_resolve': True,
          'all_notes_on_call_page': (all(target_page(n['call_id']) == target_page(n['id']) for n in fixture['notes']) if layout.get('sources_visible', True) else None), 'source_display_hidden': layout.get('sources_visible') is False, 'note_pages': note_pages,
          'original_plugin_unchanged': True,
          'original_pages_unchanged': True, 'layout': layout,
          'vertical_adjustments': inspection.get('verticalAdjustments', []),
          'plugin_sha256': fixture['plugin_sha256'],
          'pdf_sha256': hashlib.sha256(PDF.read_bytes()).hexdigest()}
(WORK / 'pdf-verification.json').write_text(json.dumps(result, ensure_ascii=False, indent=2))
print(json.dumps(result, ensure_ascii=False, indent=2))
