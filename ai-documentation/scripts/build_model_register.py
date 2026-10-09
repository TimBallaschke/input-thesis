#!/usr/bin/env python3
"""Record model metadata for the communication archives in the browser edition.

Only provider model labels / Codex turn_context model fields are retained.
No message text, hidden reasoning or system/developer content is exported.
The saved register remains usable without the local Codex session files.
"""
import hashlib
import json
from collections import Counter
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
ARCHIVE = ROOT / 'ai-documentation/archive'


def sha(path):
    return hashlib.sha256(path.read_bytes()).hexdigest()


def build():
    catalog = json.loads((ROOT / 'output/ai-documentation-web/catalog.json').read_text())
    archives = []
    models = {'ChatGPT': set(), 'OpenAI Codex': set()}
    for item in catalog:
        archive_id = item['id']
        if not archive_id.startswith(('CGPT-', 'CDX-')):
            continue  # Drafts and external feedback do not identify an AI model.
        entry = {'archive_id': archive_id, 'transcript': item['transcript'],
                 'transcript_sha256': item['sha256']}
        assert sha(ROOT / item['transcript']) == item['sha256'], f'Stale browser archive: {archive_id}'
        counts = Counter()
        if archive_id.startswith('CGPT-'):
            entry['tool'] = 'ChatGPT'
            paths = list(ARCHIVE.glob(archive_id.lower() + '*-messages.jsonl'))
            assert len(paths) <= 1, f'Ambiguous message export: {archive_id}'
            if paths:
                path = paths[0]
                unknown = 0
                for line in path.read_text().splitlines():
                    message = json.loads(line)
                    if message.get('role') == 'assistant':
                        model = message.get('model_reported')
                        if model:
                            counts[model] += 1
                        else:
                            unknown += 1
                entry.update(evidence='visible assistant message model_reported provider metadata',
                             messages_file=str(path.relative_to(ROOT)), messages_sha256=sha(path),
                             assistant_messages_without_model=unknown)
            else:
                entry['evidence'] = 'supplied text import; no preserved model metadata'
        else:
            entry['tool'] = 'OpenAI Codex'
            paths = list(ARCHIVE.glob(archive_id.lower() + '*-manifest.json'))
            assert len(paths) == 1, f'Missing/ambiguous Codex manifest: {archive_id}'
            manifest_path = paths[0]
            manifest = json.loads(manifest_path.read_text())
            cutoff = manifest['exported_through_utc']
            evidence = []
            periods = {}
            for name in manifest['source_filename'].split(', '):
                candidates = []
                for base in [Path.home() / '.codex/sessions', Path.home() / '.codex/archived_sessions']:
                    candidates.extend(base.rglob(name))
                assert len(candidates) == 1, f'Missing/ambiguous local session: {name}'
                path = candidates[0]
                # Hash only the metadata retained here; later session events
                # cannot alter the model record of the exported transcript.
                observed = []
                with path.open() as stream:
                    for line in stream:
                        event = json.loads(line)
                        timestamp = event.get('timestamp', '')
                        if event.get('type') != 'turn_context' or timestamp > cutoff:
                            continue
                        model = event.get('payload', {}).get('model')
                        if not model:
                            continue
                        observed.append({'timestamp': timestamp, 'model': model})
                        counts[model] += 1
                        period = periods.setdefault(model, {'first_utc': timestamp, 'last_utc': timestamp})
                        period['first_utc'] = min(period['first_utc'], timestamp)
                        period['last_utc'] = max(period['last_utc'], timestamp)
                evidence.append({'source_filename': name, 'model_contexts': observed,
                                 'model_metadata_sha256': hashlib.sha256(json.dumps(observed, sort_keys=True).encode()).hexdigest()})
            assert counts, f'No model contexts found: {archive_id}'
            entry.update(evidence='local Codex turn_context model fields through exported transcript cutoff',
                         manifest=str(manifest_path.relative_to(ROOT)), manifest_sha256=sha(manifest_path),
                         exported_through_utc=cutoff, model_periods=periods, source_metadata=evidence)
        entry['model_observations'] = dict(sorted(counts.items()))
        models[entry['tool']].update(counts)
        archives.append(entry)
    return {'schema_version': 1,
            'scope': 'ChatGPT and Codex communication archives included in the historical AI browser edition; later technical chats are separate',
            'models': {tool: sorted(values) for tool, values in models.items()},
            'unknown_model_archives': [e['archive_id'] for e in archives if not e['model_observations']],
            'limits': ['Provider and local runtime identifiers are preserved verbatim, without inferred commercial model names.',
                       'Model metadata does not independently verify the actual backend or prove manuscript adoption.',
                       'Codex observations count turn_context records; ChatGPT observations count visible assistant messages.'],
            'archives': archives}


if __name__ == '__main__':
    report = build()
    destination = ROOT / 'ai-documentation/model-register.json'
    destination.write_text(json.dumps(report, ensure_ascii=False, indent=2) + '\n')
    print(json.dumps({key: report[key] for key in ['models', 'unknown_model_archives']}, ensure_ascii=False))
