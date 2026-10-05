#!/usr/bin/env python3
"""Reproducible, loss-checked conversion of the retained Pages body to Markdown.

Does not open or modify Pages, Zotero, the shared bibliography, or AI records.
Use --force only to regenerate this initial transfer from its source snapshot.
"""
import argparse
from collections import Counter
from datetime import datetime, timezone
import hashlib
from html.parser import HTMLParser
import json
from pathlib import Path
import re
import shutil
import subprocess

HERE = Path(__file__).resolve().parent
ROOT = HERE.parent.parent
RAW = HERE / 'source/260917_Master_Thesis.body.txt'
PAGES = ROOT / 'presentation/260917_Master_Thesis.pages'
MD = HERE / 'master-thesis.md'
MAP = HERE / 'citation-map.json'
CITE = re.compile(r'\(vgl\.[^()\n]*\)')
HEADINGS = {
    'Einleitung': (1, 'einleitung'),
    'Surface': (1, 'surface'),
    'Formale Erscheinung und Einbettung': (2, 'formale-erscheinung-und-einbettung'),
    'Die Aufforderung zur Eingabe': (2, 'aufforderung-zur-eingabe'),
    'Sichtbare Anforderungen, Hilfen und Grenzen': (2, 'sichtbare-anforderungen-hilfen-grenzen'),
    'Veränderliche Oberfläche und sichtbare Zustände': (2, 'veraenderliche-oberflaeche-zustaende'),
    'Interaction': (1, 'interaction'),
    'Eingabe als physischer Prozess': (2, 'eingabe-als-physischer-prozess'),
    'Erforderliche Kenntnisse und Kompetenzen': (2, 'kenntnisse-und-kompetenzen'),
    'Korrigieren und Bearbeiten': (2, 'korrigieren-und-bearbeiten'),
    'Autocomplete und Vorschläge': (2, 'autocomplete-und-vorschlaege'),
    'Iteration und Reformulierung': (2, 'iteration-und-reformulierung'),
    'Operation': (1, 'operation'),
    'Technische Rolle und Kontext der Eingabe': (2, 'technische-rolle-und-kontext'),
    'Verarbeitung und ihre Maßstäbe': (2, 'verarbeitung-und-massstaebe'),
    'Übertragung, Speicherung und Weiterverwendung': (2, 'uebertragung-speicherung-weiterverwendung'),
    'Sichtbare Rückmeldung und operative Reichweite': (2, 'rueckmeldung-und-operative-reichweite'),
    'Schluss': (1, 'schluss'),
}
BIB_FILES = [
    ROOT / 'references/library.bib',
    ROOT / 'references/manual.bib',
    ROOT / 'research/import-records/physical-and-speech-text-entry-c041-c042.bib',
    ROOT / 'research/import-records/norman-2008-signifiers.bib',
    HERE / 'source/additional-records.bib',
]


def digest(path):
    return hashlib.sha256(path.read_bytes()).hexdigest()


def write_json(path, data):
    path.write_text(json.dumps(data, ensure_ascii=False, indent=2) + '\n')


def bibliography(keys):
    entries, origins = {}, {}
    for path in BIB_FILES:
        text = path.read_text()
        starts = list(re.finditer(r'^@\w+\{([^,]+),', text, re.M))
        for i, m in enumerate(starts):
            key = m.group(1)
            if key not in keys or key in entries:
                continue
            end = starts[i + 1].start() if i + 1 < len(starts) else len(text)
            entry = text[m.start():end].strip()
            # Website-bound metadata must not leak local Zotero attachment paths.
            entry = re.sub(r'^\s*file\s*=.*\n?', '', entry, flags=re.M)
            entries[key] = entry
            origins[key] = str(path.relative_to(ROOT))
    missing = keys - set(entries)
    if missing:
        raise ValueError(f'Missing bibliography keys: {sorted(missing)}')
    output = '% Frozen bibliography for the Pages-to-Markdown transfer.\n'
    output += '% Shared bibliography and Zotero remain unchanged.\n\n'
    output += '\n\n'.join(entries[k] for k in sorted(entries)) + '\n'
    (HERE / 'references.bib').write_text(output)
    return origins


def convert(force):
    if MD.exists() and not force:
        raise SystemExit('master-thesis.md exists. Use --check, or explicitly --force to regenerate.')
    raw = RAW.read_text()
    aliases = sorted(json.loads((HERE / 'source/citation-aliases.json').read_text()),
                     key=lambda x: len(x['label']), reverse=True)
    citations, paragraphs, headings, used = [], [], [], set()
    out = [
        '---', 'title: "Input"', 'author: "Tim Ballaschke"', 'lang: de-DE',
        'bibliography: references.bib', 'link-citations: true',
        'reference-section-title: "Quellenverzeichnis"',
        'source-document: "260917_Master_Thesis.pages"',
        'source-text-sha256: "' + digest(RAW) + '"',
        'status: "Textübertragung; keine neue inhaltliche Quellenprüfung"', '---', '',
    ]
    chapter = section = None
    for source_line, line in enumerate(raw.splitlines(), 1):
        text = line.strip()
        if not text:
            continue
        if text in HEADINGS:
            level, anchor = HEADINGS[text]
            if level == 1:
                chapter = text
            section = text
            headings.append({'title': text, 'level': level, 'id': anchor,
                             'source_line': source_line, 'markdown_line': len(out) + 1})
            out.extend(['#' * level + ' ' + text + ' {#' + anchor + '}', ''])
            continue
        pid = f'p-{len(paragraphs)+1:03d}'
        local_ids = []

        def replace(match):
            original = match.group(0)
            inner = original[len('(vgl.'): -1].strip()
            prefix = 'vgl.'
            if inner.startswith('exemplarisch '):
                prefix += ' exemplarisch'
                inner = inner[len('exemplarisch '):]
            items = []
            rendered = []
            for index, part in enumerate(inner.split(';')):
                part = part.strip()
                alias = next((a for a in aliases if part == a['label']
                              or part.startswith(a['label'] + ',')), None)
                if alias is None:
                    raise ValueError(f'Unmapped source line {source_line}: {part}')
                original_suffix = part[len(alias['label']):]
                suffix = original_suffix
                if alias.get('preserve_title'):
                    suffix = ', ' + alias['preserve_title'] + suffix
                token = ('%s ' % prefix if index == 0 else '') + '@' + alias['key'] + suffix
                rendered.append(token)
                used.add(alias['key'])
                items.append({'key': alias['key'], 'original': part,
                              'original_label': alias['label'],
                              'original_suffix': original_suffix,
                              'markdown_suffix': suffix})
            cid = f'cite-{len(citations)+1:03d}'
            replacement = '[[' + '; '.join(rendered) + ']]{#' + cid + '}'
            citations.append({'id': cid, 'paragraph_id': pid, 'chapter': chapter,
                              'section': section, 'source_line': source_line,
                              'source_column': match.start() + 1,
                              'original': original, 'markdown': replacement,
                              'items': items, 'status': 'mapped'})
            local_ids.append(cid)
            return replacement

        transformed = CITE.sub(replace, text)
        paragraphs.append({'id': pid, 'chapter': chapter, 'section': section,
                           'source_line': source_line, 'markdown_line': len(out) + 1,
                           'citations': local_ids})
        out.extend([transformed, ''])
    MD.write_text('\n'.join(out))
    origins = bibliography(used)
    manifest = {
        'created_at': datetime.now(timezone.utc).isoformat(),
        'source_pages': str(PAGES.relative_to(ROOT)), 'source_pages_sha256': digest(PAGES),
        'source_body': str(RAW.relative_to(HERE)), 'source_body_sha256': digest(RAW),
        'source_body_characters': len(raw),
        'extraction': 'Pages AppleScript: body text; terminal adds one trailing newline.',
        'format_scope': 'Body text and paragraph/heading structure only. Pages layout, character styles, comments, and embedded hyperlink attributes are not reproduced.',
        'bibliography_sources': {str(p.relative_to(ROOT)): digest(p) for p in BIB_FILES},
        'bibliography_origins': origins,
        'heading_count': len(headings), 'paragraph_count': len(paragraphs),
        'citation_group_count': len(citations),
        'citation_item_count': sum(len(c['items']) for c in citations),
        'source_count': len(used), 'unresolved': [],
    }
    write_json(HERE / 'source/transfer-manifest.json', manifest)
    write_json(MAP, {'description': 'Frozen provenance and citation mapping for the initial transfer, not a live editing index.',
                     'headings': headings, 'paragraphs': paragraphs, 'citations': citations,
                     'bibliography_origins': origins})
    return manifest


def walk(value):
    if isinstance(value, dict):
        yield value
        for v in value.values():
            yield from walk(v)
    elif isinstance(value, list):
        for v in value:
            yield from walk(v)


class Links(HTMLParser):
    def __init__(self):
        super().__init__()
        self.ids, self.hrefs = [], []

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if 'id' in attrs:
            self.ids.append(attrs['id'])
        if tag == 'a' and attrs.get('href', '').startswith('#'):
            self.hrefs.append(attrs['href'][1:])


def check(pandoc=None):
    mapping = json.loads(MAP.read_text())
    manifest = json.loads((HERE / 'source/transfer-manifest.json').read_text())
    raw = RAW.read_text()
    md = MD.read_text()
    assert digest(RAW) == manifest['source_body_sha256'], 'Source snapshot changed.'
    restored = md.split('---\n', 2)[2]
    for cite in mapping['citations']:
        assert restored.count(cite['markdown']) == 1, cite['id']
        restored = restored.replace(cite['markdown'], cite['original'])
    for h in mapping['headings']:
        restored = restored.replace('#' * h['level'] + ' ' + h['title'] + ' {#' + h['id'] + '}', h['title'])
    source_lines = [l.strip() for l in raw.splitlines() if l.strip()]
    restored_lines = [l.strip() for l in restored.splitlines() if l.strip()]
    assert source_lines == restored_lines, 'Body differs beyond structural/citation markup.'
    assert len(CITE.findall(raw)) == manifest['citation_group_count']
    cited = [i['key'] for c in mapping['citations'] for i in c['items']]
    bib_keys = re.findall(r'^@\w+\{([^,]+),', (HERE / 'references.bib').read_text(), re.M)
    assert set(cited) == set(bib_keys), 'Bibliography and text do not match.'
    assert len(bib_keys) == len(set(bib_keys)), 'Duplicate bibliography keys.'
    assert '/Users/' not in (HERE / 'references.bib').read_text(), 'Private local path in bibliography.'
    result = {'roundtrip_text_exact_except_blank_lines_and_edge_whitespace': True,
              'citation_groups': len(mapping['citations']), 'citation_items': len(cited),
              'sources': len(bib_keys), 'unresolved': [], 'pandoc_checked': False}
    if pandoc:
        def run(args):
            proc = subprocess.run([pandoc] + args, cwd=HERE, text=True, capture_output=True, check=True)
            if proc.stderr.strip():
                raise ValueError('Pandoc diagnostic: ' + proc.stderr)
            return proc.stdout
        ast = json.loads(run(['master-thesis.md', '-f', 'markdown-smart', '-t', 'json']))
        nodes = [n for n in walk(ast['blocks']) if n.get('t') == 'Cite']
        ast_keys = [c['citationId'] for n in nodes for c in n['c'][0]]
        assert len(nodes) == len(mapping['citations'])
        assert Counter(ast_keys) == Counter(cited)
        csl = json.loads(run(['references.bib', '-f', 'biblatex', '-t', 'csljson']))
        assert {x['id'] for x in csl} == set(bib_keys)
        assert all(x.get('title') for x in csl), 'Missing bibliography title.'
        # Test HTML in memory, without creating/publishing a website.
        html = run(['master-thesis.md', '-f', 'markdown-smart', '-s', '--citeproc', '-t', 'html5'])
        links = Links()
        links.feed(html)
        missing = set(links.hrefs) - set(links.ids)
        assert not missing, f'Unresolved HTML anchors: {missing}'
        assert all('ref-' + key in links.ids for key in set(cited))
        assert all('ref-' + key in links.hrefs for key in set(cited))
        assert all(c['id'] in links.ids for c in mapping['citations'])
        assert len(links.ids) == len(set(links.ids)), 'Duplicate HTML IDs.'
        result.update({'pandoc_checked': True, 'pandoc_version': run(['--version']).splitlines()[0],
                       'html_reference_targets': len(set(cited)),
                       'html_citation_occurrence_anchors': len(mapping['citations']),
                       'broken_internal_html_links': len(missing),
                       'html_internal_link_count': len(links.hrefs)})
    write_json(HERE / 'source/validation.json', result)
    print(json.dumps(result, ensure_ascii=False, indent=2))


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--force', action='store_true')
    parser.add_argument('--check', action='store_true', help='Check existing files, do not regenerate.')
    parser.add_argument('--pandoc', default=shutil.which('pandoc'))
    args = parser.parse_args()
    if not args.check:
        convert(args.force)
    check(args.pandoc)


if __name__ == '__main__':
    main()
