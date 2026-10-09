#!/usr/bin/env python3
"""Prepare the complete final Pages manuscript for prompt-controlled typesetting."""
from pathlib import Path
import hashlib
import html
import json
import re
import shutil
import subprocess
from source_plugin_adapter import adapt_plugin
from inline_call_adapter import adapt_inline_calls
from ai_notices import resolve_notices
from bibliography import build_bibliography, adapt_bibliography_plugin

ROOT = Path(__file__).resolve().parents[2]
WORK = ROOT / 'tmp/vivliostyle-compat'
WEB = WORK / 'web'
PLUGIN = ROOT.parent / 'web-to-print/public/auto-typeset.js'
FONT = ROOT / 'website/assets/fonts/Arketa.otf'
SHOW_SOURCES = True
BASELINE_ROWS = 59
BODY_LEADING_PT = 281 / BASELINE_ROWS * 72 / 25.4
SOURCE_LEADING_RATIO = 2 / 3
SOURCE_LEADING_PT = BODY_LEADING_PT * SOURCE_LEADING_RATIO
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
    (WEB / 'body-auto-typeset.js').write_text(adapt_inline_calls(PLUGIN.read_bytes()))
    (WEB / 'source-auto-typeset.js').write_text(adapt_plugin(PLUGIN.read_bytes()))
    (WEB / 'bibliography-auto-typeset.js').write_text(adapt_bibliography_plugin(PLUGIN.read_bytes()))
    shutil.copy2(FONT, WEB / 'arketa.otf')
    pages = ROOT / 'presentation/261005_Master_Thesis.pages'
    before = hashlib.sha256(pages.read_bytes()).hexdigest()
    ai_manifest = resolve_notices(ROOT, before)
    ai_by_title = {s['title']: s for s in ai_manifest['sections']}
    script = f'''tell application "Pages"
set currentDocument to open POSIX file "{pages}"
return body text of currentDocument
end tell'''
    raw = subprocess.run(['osascript', '-e', script], text=True, capture_output=True, check=True).stdout
    assert hashlib.sha256(pages.read_bytes()).hexdigest() == before, 'Pages source changed while reading.'
    (WORK / 'source-body.txt').write_text(raw)
    revision_path = Path(__file__).parent / 'text-revisions.json'
    revision_manifest = json.loads(revision_path.read_text()) if revision_path.exists() else None
    if revision_manifest:
        assert revision_manifest['source_pages_sha256'] == before, 'Text revisions refer to a different Pages source.'
    revisions = {r['paragraph_id']: r for r in revision_manifest['revisions']} if revision_manifest else {}
    applied_revisions = set()
    setting_path = Path(__file__).parent / 'paragraph-settings.json'
    settings = json.loads(setting_path.read_text()) if setting_path.exists() else {'paragraphs': []}
    if settings['paragraphs']:
        assert settings['source_pages_sha256'] == before, 'Paragraph settings refer to a different manuscript.'
    paragraph_settings = {s['paragraph_id']: s for s in settings['paragraphs']}
    applied_settings = set()
    aliases = sorted(json.loads((ROOT / 'thesis/text/source/citation-aliases.json').read_text()),
                     key=lambda a: len(a['label']), reverse=True)
    notes, paragraphs, keys, chapters, sections = [], [], set(), [], []
    trace_path = ROOT / 'output/ai-documentation-web/section-provenance.json'
    trace_ids = {s['title']: s['id'] for s in json.loads(trace_path.read_text())['sections']} if trace_path.exists() else {}
    current_chapter, current_section = None, None

    def finish_section():
        if not current_section:
            return
        entries = []
        for note in current_section['notes'] if SHOW_SOURCES else []:
            entries.append(f'<a class="source-number section-source" id="{note["id"]}" href="#{note["call_id"]}">[{note["number"]:02d}]</a> '
                           + note['body_html'])
        ai_notice = ''
        if current_section['title'] in ai_by_title:
            notice = ai_by_title[current_section['title']]
            assert notice['section_id'] == current_section['id']
            ai_notice = (f'<div class="ai-copy" id="ai-notice-{current_section["id"]}" '
                         f'data-note-block="ai-notice-{current_section["id"]}" '
                         f'data-trace-section="{notice["trace_id"]}">{notice["html"]}</div>')
        if not ai_notice and not entries:
            return
        source_copy = (f'<div class="source-copy" id="sources-{current_section["id"]}" '
                       f'data-note-block="sources-{current_section["id"]}">'
                       + ' '.join(entries) + '</div>') if entries else ''
        group_class = 'section-sources has-ai-notice' if ai_notice else 'section-sources'
        current_chapter['elements'].append(f'<section class="{group_class}" '
                                           f'data-section="{current_section["id"]}" '
                                           f'data-preceding-paragraph="{paragraphs[-1]["id"]}">'
                                           f'<div class="source-stars" id="separator-{current_section["id"]}" '
                                           'aria-hidden="true">* * *</div>'
                                           + ai_notice + source_copy +
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
        source_line = line
        if pid in revisions:
            revision = revisions[pid]
            assert line == revision['before'], f'Text revision source differs in {pid}.'
            line = revision['after']
            assert re.findall(r'\(vgl\.[^()\n]*\)', source_line) == re.findall(r'\(vgl\.[^()\n]*\)', line), 'A text revision changed a citation.'
            applied_revisions.add(pid)
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
            pieces.append(html.escape(line[cursor:match.start()].rstrip()))
            marker = f'[{number:02d}]'
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
        paragraphs.append({'id': pid, 'original': line, 'source_original': source_line, 'calls': calls,
                           'chapter_id': current_chapter['id'], 'section_id': current_section['id']})
        tracking_attribute = ''
        if pid in paragraph_settings:
            setting = paragraph_settings[pid]
            assert hashlib.sha256(line.encode()).hexdigest() == setting['text_sha256'], 'Paragraph setting text changed: ' + pid
            base_tracking = setting['base_tracking_em']
            assert isinstance(base_tracking, (int, float)) and -.05 <= base_tracking <= .05
            tracking_attribute = f' data-base-tracking-em="{base_tracking}"'
            applied_settings.add(pid)
        current_chapter['elements'].append(f'<div class="copy" id="{pid}" data-paragraph-id="{pid}" data-section-id="{current_section["id"]}"{tracking_attribute}>' + ''.join(pieces) + '</div>')
    finish_section()
    assert applied_revisions == set(revisions), 'Not all authorised text revisions were applied.'
    assert applied_settings == set(paragraph_settings), 'Not all paragraph settings were applied.'
    assert [c['title'] for c in chapters] == CHAPTERS
    assert [s['title'] for s in sections if s['has_heading']] == SUBHEADINGS
    assert set(ai_by_title) == set(SUBHEADINGS + ['Einleitung', 'Schluss']), 'AI notices must cover all requested sections.'
    assert len(notes) == raw.count('(vgl.'), 'Not every citation group was processed.'
    assert len([line for line in raw.splitlines() if line.strip()]) == len(chapters) + len(SUBHEADINGS) + len(paragraphs), 'Unaccounted source text.'
    body = '\n'.join('<section class="chapter-title" id="' + c['id'] + '"><h1>'
                     + html.escape(c['title']) + '</h1></section>\n'
                     + '<main class="chapter-body" data-chapter="' + c['id'] + '">'
                     + '\n'.join(c['elements']) + '</main>' for c in chapters)
    bibliography_html, bibliography = build_bibliography(ROOT, keys)
    body += '\n' + bibliography_html
    (Path(__file__).parent / 'bibliography.json').write_text(json.dumps(bibliography, ensure_ascii=False, indent=2) + '\n')
    document = '<!doctype html>\n<html lang="de"><head><meta charset="utf-8"><title>Input</title>'
    document += '<link rel="stylesheet" href="print.css"></head><body>' + body
    document += '<script type="module" src="/compose.js"></script></body></html>'
    (WEB / 'source.html').write_text(document)
    layout = {'sources_visible': SHOW_SOURCES, 'source_placement': 'subchapter_end', 'source_font_size_pt': 6,
              'body_call_format': 'inline_brackets_decimal_leading_zero', 'body_call_font_size_pt': 6,
              'body_optical_margin': 'font_contours_relative_to_H',
              'body_frame_width': 'fractional_bounding_rect',
              'body_call_leading_space': False,
              'body_call_optical_spacing': 'match_closing_bracket_to_body_period',
              'source_label_font_feature': 'case',
              'body_call_vertical_alignment': 'glyph_center_of_body_line', 'body_call_composition': 'atomic_actual_font_width',
              'ai_notice_placement': 'section_end_before_sources_when_present', 'ai_notice_font_size_pt': 6,
              'ai_notice_alignment': 'ragged', 'ai_notice_hyphenation': False, 'ai_notice_scope': 'all_curated_relations',
              'ai_notice_reference_wrapping': 'normal_text_flow',
              'ai_notice_reference_labels': 'page_and_line_terms_written_out',
              'ai_notice_range_merging': ai_manifest['range_merging'],
              'ai_notice_numbering': 'current_documentation_pages_and_printed_rows',
              'ai_documentation_edition_sha256': ai_manifest['edition_sha256'],
              'body_leading_pt': 281 / BASELINE_ROWS * 72 / 25.4, 'body_leading_target_ratio': 1.35,
              'body_leading_actual_ratio': 281 / BASELINE_ROWS * 72 / 25.4 / 10,
              'source_leading_body_ratio': SOURCE_LEADING_RATIO,
              'source_leading_font_ratio': SOURCE_LEADING_PT / 6, 'source_leading_pt': SOURCE_LEADING_PT,
              'ai_notice_leading_font_ratio': SOURCE_LEADING_PT / 6, 'ai_notice_leading_pt': SOURCE_LEADING_PT,
              'source_baseline_alignment': 'shared_annotation_leading', 'source_block_grid': 'annotation_sequence_plus_gap_whole_body_rows',
              'source_after_gap': 'expand_to_next_body_row', 'source_after_blank_rows_min': 6,
              'source_width': 'full_column_width', 'source_block_width_fraction': 1.0, 'source_alignment': 'ragged', 'source_flow': 'continuous_paragraph', 'source_composer': 'original_plugin', 'source_number_position': 'inline_brackets', 'source_number_format': 'decimal-leading-zero', 'source_number_gap': 'space',
              'source_optical_margin': 'font_contours_relative_to_H',
              'source_hyphenation': False,
              'source_separator_vertical_alignment': 'equal_visible_ink_gaps',
              'body_note_separator': 'only_within_same_physical_column',
              'annotation_pagination': 'continuous_line_flow',
              'ai_notice_minimum_fragment_rows': 2,
              'ai_notice_singleton_separator': 'omit_at_body_note_column_boundary',
              'annotation_continuation_alignment': 'last_body_baseline',
              'ai_source_separator': 'one_annotation_blank_row',
              'source_opening_margin_at_column_start': 'discard',
              'source_after_blank_rows': 6, 'source_after_separator': 'none', 'source_vertical_alignment': 'after_text', 'subchapter_start': 'continuous', 'font_family': 'Arketa', 'font_size_pt': 10, 'columns': 2,
              'column_width_mm': 83.5, 'column_gap_mm': 5,
              'margins_mm': {'top': 8, 'right': 8, 'bottom': 8, 'left': 30},
              'baseline_rows': BASELINE_ROWS, 'headings_visible': True, 'heading_stars': '* * *', 'chapter_title_page': True,
              'paragraph_spacing': 0, 'paragraph_indent': 'four character advances, except section and column openings',
              'paragraph_indent_at_column_start': False,
              'paragraph_orphans': 2, 'paragraph_widows': 1,
              'paragraph_closing_line_after_break': 'allowed_to_fill_type_area',
              'paragraph_closing_line_minimum': 'normal_indent_plus_three_character_advances',
              'paragraph_closing_line_reference_character': 'M',
              'paragraph_closing_line_excludes_source_calls': True,
              'subchapter_closing_line_minimum_whole_words': 1,
              'gender_style': 'asterisk', 'gender_star_glyph': '*',
              'gender_star_vertical_alignment': 'native_font_baseline',
              'page_number': 'inside_type_area_bottom', 'footer_reserved_baselines': 3, 'footer_blank_baselines': 2,
              'page_number_bottom_mm': 8, 'page_number_font_size_pt': 10, 'page_number_format': 'decimal-leading-zero',
              'page_number_tracking': 'match_subheadings',
              'page_number_tracking_compensation': 'padding_left_to_balance_trailing_spacing'}
    fixture = {'scope': 'complete_final_manuscript', 'paragraphs': paragraphs, 'notes': notes, 'sources': sorted(keys),
               'chapters': [{'id': c['id'], 'title': c['title']} for c in chapters],
               'sections': [{'id': s['id'], 'title': s['title'], 'trace_id': trace_ids.get(s['title']), 'has_heading': s['has_heading'],
                             'note_ids': [n['id'] for n in s['notes']]} for s in sections],
               'layout': layout, 'font_path': str(FONT), 'font_sha256': hashlib.sha256(FONT.read_bytes()).hexdigest(),
               'plugin_path': str(PLUGIN), 'plugin_sha256': hashlib.sha256(PLUGIN.read_bytes()).hexdigest(),
               'source_pages_sha256': before}
    if revision_manifest:
        fixture['text_revision'] = {'path': str(revision_path),
                                    'paragraphs': len(applied_revisions),
                                    'source_pages_unchanged': True,
                                    'gender_stars': sum(p['original'].count('*') for p in paragraphs)}
    fixture['ai_notices'] = [{key: value for key, value in notice.items() if key != 'html'}
                             for notice in ai_manifest['sections']]
    fixture['paragraph_settings'] = settings['paragraphs']
    fixture['bibliography'] = {key: value for key, value in bibliography.items() if key != 'entries'}
    fixture['bibliography']['entries'] = [{key: value for key, value in entry.items() if key not in ['html', 'record']}
                                         for entry in bibliography['entries']]
    serialized = json.dumps(fixture, ensure_ascii=False, indent=2) + '\n'
    (WEB / 'fixture.json').write_text(serialized)
    (Path(__file__).parent / 'manuscript.json').write_text(serialized)
    (Path(__file__).parent / 'ai-notices.json').write_text(json.dumps(ai_manifest, ensure_ascii=False, indent=2) + '\n')
    for name in ['compose.js', 'print.css']:
        shutil.copy2(Path(__file__).parent / name, WEB / name)
    print(json.dumps({'chapters': len(chapters), 'subheadings': len(SUBHEADINGS), 'paragraphs': len(paragraphs),
                      'notes': len(notes), 'sources': len(keys), 'ai_notices': len(ai_manifest['sections']),
                      'bibliography_entries': len(bibliography['entries']),
                      'original_pages_unchanged': True}, indent=2))


if __name__ == '__main__':
    main()
