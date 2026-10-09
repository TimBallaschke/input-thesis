#!/usr/bin/env python3
"""Refresh documentation references in the captured HTML before composition."""
from hashlib import sha256
import json
from pathlib import Path
import re

from ai_notices import resolve_notices


def main():
    root = Path(__file__).resolve().parents[2]
    web = root / 'tmp/vivliostyle-compat/web'
    fixture_path = web / 'fixture.json'
    source_path = web / 'source.html'
    fixture = json.loads(fixture_path.read_text())
    pages = root / 'presentation/261005_Master_Thesis.pages'
    if sha256(pages.read_bytes()).hexdigest() != fixture['source_pages_sha256']:
        raise ValueError('Manuscript changed; capture its current text before composing.')
    manifest = resolve_notices(root, fixture['source_pages_sha256'])
    source = source_path.read_text()
    for notice in manifest['sections']:
        block = re.escape('ai-notice-' + notice['section_id'])
        pattern = rf'(<div\b[^>]*data-note-block="{block}"[^>]*>).*?(</div>)'
        source, count = re.subn(pattern, lambda m: m[1] + notice['html'] + m[2], source, flags=re.S)
        if count != 1:
            raise ValueError(f'Expected one captured notice: {notice["section_id"]}')
    fixture['ai_notices'] = [{k: v for k, v in n.items() if k != 'html'}
                             for n in manifest['sections']]
    fixture['layout']['ai_documentation_edition_sha256'] = manifest['edition_sha256']
    fixture['layout']['ai_notice_range_merging'] = manifest['range_merging']
    # Validate every block before replacing any captured or canonical output.
    source_path.write_text(source)
    fixture_path.write_text(json.dumps(fixture, ensure_ascii=False, indent=2) + '\n')
    (Path(__file__).parent / 'ai-notices.json').write_text(
        json.dumps(manifest, ensure_ascii=False, indent=2) + '\n')
    print(json.dumps({'stage': 'ai_reference_refresh', 'sections': len(manifest['sections']),
                      'ranges': sum(len(n['ranges']) for n in manifest['sections']),
                      'edition': manifest['edition_sha256'][:16]}))


if __name__ == '__main__':
    main()
