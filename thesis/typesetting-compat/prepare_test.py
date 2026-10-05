#!/usr/bin/env python3
"""Prepare the complete final Pages manuscript for prompt-controlled typesetting."""
from pathlib import Path
import hashlib
import html
import json
import re
import shutil
import subprocess

ROOT = Path(__file__).resolve().parents[2]
WORK = ROOT / 'tmp/vivliostyle-compat'
WEB = WORK / 'web'
PLUGIN = ROOT.parent / 'web-to-print/public/auto-typeset.js'
FONT = ROOT / 'website/assets/fonts/Arketa.otf'
SHOW_SOURCES = True
CHAPTERS = ['Einleitung', 'Surface', 'Interaction', 'Operation', 'Schluss']
SUBHEADINGS = [
    'Formale Erscheinung und Einbettung', 'Die Aufforderung zur Eingabe',
    'Sichtbare Anforderungen, Hilfen und Grenzen', 'Veränderliche Oberfläche und sichtbare Zustände',
    'Eingabe als physischer Prozess', 'Erforderliche Kenntnisse und Kompetenzen',
    'Korrigieren und Bearbeiten', 'Autocomplete und Vorschläge', 'Iteration und Reformulierung',
    'Technische Rolle und Kontext der Eingabe', 'Verarbeitung und ihre Maßstäbe',
    'Übertragung, Speicherung und Weiterverwendung', 'Sichtbare Rückmeldung und operative Reichweite',
]


def main():
    WEB.mkdir(parents=True, exist_ok=True)
    shutil.copy2(PLUGIN, WEB / 'auto-typeset.js')
    shutil.copy2(FONT, WEB / 'arketa.otf')
    pages = ROOT / 'presentation/261005_Master_Thesis.pages'
    before = hashlib.sha256(pages.read_bytes()).hexdigest()
    script = f'''tell application "Pages"
set currentDocument to open POSIX file "{pages}"
return body text of currentDocument
end tell'''
    raw = subprocess.run(['osascript', '-e', script], text=True, capture_output=True, check=True).stdout
    assert hashlib.sha256(pages.read_bytes()).hexdigest() == before, 'Pages source changed while reading.'
    (WORK / 'source-body.txt').write_text(raw)
    aliases = sorted(json.loads((ROOT / 'thesis/text/source/citation-aliases.json').read_text()),
                     key=lambda a: len(a['label']), reverse=True)
    notes, paragraphs, keys, chapters, sections = [], [], set(), [], []
    trace_path = ROOT / 'output/ai-documentation-web/section-provenance.json'
    trace_ids = {s['title']: s['id'] for s in json.loads(trace_path.read_text())['sections']} if trace_path.exists() else {}
    current_chapter, current_section = None, None
    marker_digits = str.maketrans('0123456789', '⁰¹²³⁴⁵⁶⁷⁸⁹')

    def finish_section():
        if not current_section or not SHOW_SOURCES or not current_section['notes']:
            return
        entries = []
        for note in current_section['notes']:
            entries.append(f'<a class="source-number section-source" id="{note["id"]}" href="#{note["call_id"]}">[{note["number"]:02d}]</a> '
                           + note['body_html'])
        current_chapter['elements'].append('<section class="section-sources" '
                                           f'data-section="{current_section["id"]}">'
                                           '<div class="source-stars" aria-hidden="true">* * *</div>'
                                           f'<div class="source-copy" id="sources-{current_section["id"]}">'
                                           + ' '.join(entries) + '</div>'
                                           '</section>')

    for line in raw.splitlines():
        line = line.strip()
        if not line:
            continue
        if line in CHAPTERS:
            finish_section()
            current_chapter = {'title': line, 'id': f'chapter-{len(chapters)+1:02d}', 'elements': []}
            chapters.append(current_chapter)
            current_section = {'title': line, 'id': f'section-{len(sections)+1:02d}', 'notes': [], 'has_heading': False}
            sections.append(current_section)
            continue
        if line in SUBHEADINGS:
            finish_section()
            current_section = {'title': line, 'id': f'section-{len(sections)+1:02d}', 'notes': [], 'has_heading': True}
            sections.append(current_section)
            heading_text = html.escape(line)
            if line in trace_ids:
                heading_text = f'<a href="ai-documentation/preview.html?section={trace_ids[line]}">{heading_text}</a>'
            current_chapter['elements'].append('<div class="heading-block">'
                                              f'<h2 id="{current_section["id"]}">{heading_text}</h2>'
                                              '<div class="heading-stars after" aria-hidden="true">* * *</div></div>')
            continue
        assert current_chapter and current_section, 'Text found before first chapter.'
        pieces, cursor, calls = [], 0, []
        pid = f'para-{len(paragraphs)+1:03d}'
        for match in re.finditer(r'\(vgl\.[^()\n]*\)', line):
            number = len(notes) + 1
            note_id, call_id = f'fn-{number:03d}', f'call-{number:03d}'
            original = match.group(0)
            reference_parts = []
            for part in original[5:-1].strip().split(';'):
                part = part.strip()
                label_part = part.removeprefix('exemplarisch ')
                alias = next((a for a in aliases if label_part == a['label'] or label_part.startswith(a['label'] + ',')), None)
                if not alias:
                    raise ValueError(f'Unmapped source: {part}')
                keys.add(alias['key'])
                reference_parts.append({'text': part, 'key': alias['key']})
            pieces.append(html.escape(line[cursor:match.start()]))
            marker = str(number).zfill(2).translate(marker_digits)
            if SHOW_SOURCES:
                pieces.append(f'<a class="note-call" id="{call_id}" href="#{note_id}" '
                              f'role="doc-noteref" aria-label="Quellenanmerkung {number}">{marker}</a>')
            note = {'number': number, 'id': note_id, 'call_id': call_id, 'marker': marker,
                    'original': original, 'body_html': 'Vgl. ' + html.escape('; '.join(p['text'] for p in reference_parts)) + '.',
                    'references': reference_parts, 'paragraph_id': pid,
                    'chapter_id': current_chapter['id'], 'section_id': current_section['id']}
            notes.append(note)
            current_section['notes'].append(note)
            calls.append(call_id)
            cursor = match.end()
        pieces.append(html.escape(line[cursor:]))
        paragraphs.append({'id': pid, 'original': line, 'calls': calls,
                           'chapter_id': current_chapter['id'], 'section_id': current_section['id']})
        current_chapter['elements'].append(f'<div class="copy" id="{pid}">' + ''.join(pieces) + '</div>')
    finish_section()
    assert [c['title'] for c in chapters] == CHAPTERS
    assert [s['title'] for s in sections if s['has_heading']] == SUBHEADINGS
    assert len(notes) == raw.count('(vgl.'), 'Not every citation group was processed.'
    assert len([line for line in raw.splitlines() if line.strip()]) == len(chapters) + len(SUBHEADINGS) + len(paragraphs), 'Unaccounted source text.'
    body = '\n'.join('<section class="chapter-title" id="' + c['id'] + '"><h1>'
                     + html.escape(c['title']) + '</h1></section>\n'
                     + '<main class="chapter-body" data-chapter="' + c['id'] + '">'
                     + '\n'.join(c['elements']) + '</main>' for c in chapters)
    document = '<!doctype html>\n<html lang="de"><head><meta charset="utf-8"><title>Input</title>'
    document += '<link rel="stylesheet" href="print.css"></head><body>' + body
    document += '<script type="module" src="/compose.js"></script></body></html>'
    (WEB / 'source.html').write_text(document)
    layout = {'sources_visible': SHOW_SOURCES, 'source_placement': 'subchapter_end', 'source_font_size_pt': 7,
              'source_width': 'full_column_width', 'source_block_width_fraction': 1.0, 'source_alignment': 'justified', 'source_flow': 'continuous_paragraph', 'source_composer': 'original_plugin', 'source_number_position': 'inline_brackets', 'source_number_format': 'decimal-leading-zero', 'source_number_gap': 'space',
              'source_after_blank_rows': 6, 'source_after_separator': 'none', 'source_vertical_alignment': 'after_text', 'subchapter_start': 'continuous', 'font_family': 'Arketa', 'font_size_pt': 10, 'columns': 2,
              'column_width_mm': 83.5, 'column_gap_mm': 5,
              'margins_mm': {'top': 8, 'right': 8, 'bottom': 8, 'left': 30},
              'baseline_rows': 61, 'headings_visible': True, 'heading_stars': '* * *', 'chapter_title_page': True,
              'paragraph_spacing': 0, 'paragraph_indent': 'four character advances, except section openings',
              'page_number': 'inside_type_area_bottom', 'footer_reserved_baselines': 3, 'footer_blank_baselines': 2,
              'page_number_bottom_mm': 8, 'page_number_format': 'decimal-leading-zero'}
    fixture = {'scope': 'complete_final_manuscript', 'paragraphs': paragraphs, 'notes': notes, 'sources': sorted(keys),
               'chapters': [{'id': c['id'], 'title': c['title']} for c in chapters],
               'sections': [{'id': s['id'], 'title': s['title'], 'trace_id': trace_ids.get(s['title']), 'has_heading': s['has_heading'],
                             'note_ids': [n['id'] for n in s['notes']]} for s in sections],
               'layout': layout, 'font_path': str(FONT), 'font_sha256': hashlib.sha256(FONT.read_bytes()).hexdigest(),
               'plugin_path': str(PLUGIN), 'plugin_sha256': hashlib.sha256(PLUGIN.read_bytes()).hexdigest(),
               'source_pages_sha256': before}
    serialized = json.dumps(fixture, ensure_ascii=False, indent=2) + '\n'
    (WEB / 'fixture.json').write_text(serialized)
    (Path(__file__).parent / 'manuscript.json').write_text(serialized)
    for name in ['compose.js', 'print.css']:
        shutil.copy2(Path(__file__).parent / name, WEB / name)
    print(json.dumps({'chapters': len(chapters), 'subheadings': len(SUBHEADINGS), 'paragraphs': len(paragraphs),
                      'notes': len(notes), 'sources': len(keys), 'original_pages_unchanged': True}, indent=2))


if __name__ == '__main__':
    main()
