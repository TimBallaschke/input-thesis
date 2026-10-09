"""Append reviewed introduction/conclusion relations, preserving existing KIZ IDs."""
from collections import Counter
from datetime import datetime
from hashlib import sha256
import json
from pathlib import Path
import re
from zoneinfo import ZoneInfo

ROOT = Path(__file__).resolve().parents[2]
HERE = Path(__file__).resolve().parent
WEB = ROOT / 'output/ai-documentation-web'
MAPPING = HERE / 'unterkapitel-ki-zuordnung.json'

# Each entry names the actual work represented by the range. Historical plans
# and discarded formulations remain distinct from final wording or adoption.
ENTRIES = [
    ([1], 'CGPT-01', 119, 155, 'line', 'Frühe Fallauswahl und Methode',
     'Früher Aufbau für Einleitung/Methode und vergleichende Fallauswahl; Fragen nach Syntax, Handlungsspielraum, Guidance, Kontext und Feedback. Die damalige größere Fallauswahl ist nicht die endgültige Eingrenzung.', 'historisch'),
    ([1, 15], 'CGPT-01', 921, 954, 'line', 'Frühe These und Forschungsfrage',
     'Explizit für Einleitung oder Fazit vorgeschlagene These zu weicher Syntax und unsichtbarem Befehlssatz; Forschungsfragen zu Funktionen, Nutzerkontrolle und Sichtbarkeit. Historische Variante, nicht die endgültige These.', 'historisch'),
    ([1], 'CGPT-01', 1004, 1008, 'line', 'Früher Einleitungsplan',
     'Einleitungsplan mit Bedeutungsgewinn des Promptfelds, Forschungsfrage und Methode; die Full-Circle-Rahmung wurde später nicht als lineare Fortschrittsgeschichte übernommen.', 'historisch'),
    ([15], 'CGPT-01', 1035, 1038, 'line', 'Früher Fazitplan',
     'Früher Fazitgedanke zur Rückkehr textbasierter Steuerung und zum Textfeld als Meta-Interface; historische Schlussvariante.', 'historisch'),
    ([1], 'CDX-01', 9119, 9166, 'line', 'Kritik an Gegenstand und Methode',
     'Begriff, Analyseeinheit und Fallauswahl begrenzen; Theorie, Methode und historische Abgrenzung für die Einleitung verdichten. Frühe Kritik vor der heutigen Fassung.', 'historisch'),
    ([1, 15], 'CDX-01', 764, 765, 'message', 'Kapitelplan und Zusammenführung',
     'Tim fordert einen Aufbau mit Einleitung und Schluss; Antwort verbindet vier Eingabefälle und drei Perspektiven und benennt die Aufgabe des Schlussteils.', 'historisch'),
    ([1], 'CDX-01', 10301, 10340, 'line', 'Quellenzuordnung zur Einleitung',
     'Konkrete Quellenfunktionen für die Einleitung: ELIZA, UNIX, natürliche/präzise Sprache, Direct Manipulation, HTML-Formular, Suche und Prompting. Frühere Recherche- und Quellenauswahl; nicht jede Quelle erscheint im endgültigen Einleitungstext.', 'historisch'),
    ([15], 'CDX-01', 10495, 10513, 'line', 'Frühe Schlusssynthese',
     'Expliziter Schlussteilplan führt Surface/Interaction/Operation zusammen und formuliert die Eingabe als Relation zwischen sichtbarer Einladung, menschlicher Arbeit und technischer/institutioneller Transformation.', 'historisch'),
    ([1], 'CDX-02', 132, 143, 'message', 'Quellenbestand und Erkenntnisrahmen',
     'Quellenübergreifende Synthese innerhalb der bestehenden Struktur einschließlich Einleitung/historischem Rahmen; sichtbare Einfachheit, tatsächliche Eingabearbeit und technische Wirksamkeit als vorläufige Argumentlinien.', 'historisch'),
    ([1], 'CDX-03', 6, 7, 'message', 'Verhältnis der drei Perspektiven',
     'Expliziter Formulierungsvorschlag für die Einleitung: Surface, Interaction und Operation sind analytische Perspektiven und ein Rückkopplungsprozess, keine isolierten Phasen.', 'abschnittsbezug'),
    ([1, 15], 'CGPT-05', 350, 360, 'line', 'KI-Feedback zur zentralen These',
     'KI-Gesamtfeedback bündelt die zentrale Behauptung: individuelle Texteingabe und begrenzte Verfügung über ihre Bedingungen. Konkrete argumentative Vorarbeit für Problemstellung und Schluss, kein menschliches Gutachten.', 'historisch'),
    ([15], 'CDX-03', 12312, 12321, 'line', 'Beleggrenzen der Gesamtsynthese',
     'Quellen tragen Teilbefunde; die Zusammenführung von Surface, Interaction und Operation wird ausdrücklich als eigene Synthese abgegrenzt. Frühere Arbeit am Gesamtargument am Ende von Operation.', 'historisch'),
    ([1], 'CDX-03', 571, 574, 'message', 'Stichpunktstruktur der Einleitung',
     'Aus der damaligen Gesamtfassung werden Einstieg, Problemstellung, Erkenntnisinteresse, vier Fälle, Aufbau und gestalterische Perspektive der Einleitung erarbeitet.', 'abschnittsbezug'),
    ([15], 'CDX-03', 575, 576, 'message', 'Stichpunktstruktur des Schlusses',
     'Gesamtsynthese, Kontrolle über Formulierung versus Verarbeitung, gestalterische Konsequenzen und Schlussgedanke; Abgrenzung von einem erneuten Kapitelreferat.', 'abschnittsbezug'),
    ([1], 'CGPT-16', 1, 20, 'message', 'Schrittweise Textausarbeitung der Einleitung',
     'Eingespielte Stichpunkte, sechs ausformulierte Bewegungen, Rückmeldungen zu Ton und Gedankenstrichen sowie Überarbeitung von Beobachtung, Problem, These, Fallauswahl, Perspektiven und Übergang.', 'abschnittsbezug'),
    ([15], 'CGPT-16', 21, 34, 'message', 'Schrittweise Textausarbeitung des Schlusses',
     'Eingespielte Schlussstichpunkte und sechs Textbewegungen; Rückkehr zum Ausgangspunkt, Spannungsverhältnisse, Handlungsspielräume, Gestaltung, Grenzen und Schlussfrage samt sprachlicher Revision.', 'abschnittsbezug'),
    ([15], 'CGPT-18', 1, 2, 'message', 'Verdichtung zur späteren Schlussfassung',
     'Tim liefert den längeren Schlussteil und fordert Kernaussagen statt Wiederholungen. Die KI schlägt drei Kernaussagen und die fünf Absätze vor, die dem endgültigen Schluss entsprechen.', 'abschnittsbezug'),
    ([1], 'CGPT-19', 17, 38, 'message', 'Redundanzprüfung und Revision der Einleitung',
     'Gesamte Einleitung als Ausgangstext; Dopplungen prüfen und Beobachtung, Problem, zentrale These, Gegenstände, Aufbau, Verhältnis der Perspektiven und Surface-Übergang schrittweise verdichten.', 'abschnittsbezug'),
    ([15], 'CGPT-19', 189, 190, 'message', 'Abgrenzung des Gesamtschlusses von Operation',
     'Ein früher Operation-Abschluss enthält die Gesamtsynthese. Die Rückmeldung bezeichnet ihn ausdrücklich als Fazit fast der ganzen Arbeit und grenzt ihn vom eigenständigen Rückmeldungs-Unterkapitel ab.', 'historisch'),
    ([15], 'CGPT-19', 207, 214, 'message', 'Schlussrevision und Endfassungsfeedback',
     'Langer Schluss, Kritik an Dopplungen, mehrere Kürzungs- und Zuspitzungsfassungen, von Tim eingespielte endgültige fünf Absätze und abschließendes KI-Feedback mit optionalen Minimaländerungen.', 'abschnittsbezug'),
]


def checksum(path):
    return sha256(path.read_bytes()).hexdigest()


def main():
    mapping = json.loads(MAPPING.read_text())
    catalog = {a['id']: a for a in json.loads((WEB / 'catalog.json').read_text())}
    locations = json.loads((WEB / 'locations.json').read_text())['canonical_lines']
    edition = json.loads((WEB / 'edition.json').read_text())
    manuscript = json.loads((ROOT / 'thesis/typesetting-compat/manuscript.json').read_text())
    refs = mapping['references']
    existing = {(r['archive_id'], r['first'], r['last'], r['unit'], r['stage']): r for r in refs}
    for sections, archive, first, last, unit, stage, contribution, relation in ENTRIES:
        key = (archive, first, last, unit, stage)
        section_ids = [f'SEC-{n:03d}' for n in sections]
        if key in existing:
            assert existing[key]['section_ids'] == section_ids
            continue
        payload = json.loads((WEB / f'{archive}.json').read_text())
        lines = [line for line in payload['lines'] if isinstance(line.get('number'), int)]
        if unit == 'message':
            mids = [f'{archive}-M{n:04d}' for n in range(first, last + 1)]
            selected = [line for line in lines if line['message_id'] in mids]
            assert set(mids) == {line['message_id'] for line in selected}
        else:
            selected = [line for line in lines if first <= line['number'] <= last]
            assert selected[0]['number'] == first and selected[-1]['number'] == last
            mids = list(dict.fromkeys(line['message_id'] for line in selected if line['message_id']))
        start, end = selected[0], selected[-1]
        assert start['id'] in locations and end['id'] in locations
        useful = [line for line in selected if len(line['text'].strip()) > 60
                  and not re.match(r'^(MESSAGE|# Files|## My request|\[|<)', line['text'])]
        anchor = (useful[0] if useful else start)['id']
        ref = {'id': f'KIZ-{max(int(r["id"].split("-")[1]) for r in refs) + 1:03d}',
               'section_ids': section_ids, 'archive_id': archive, 'first': first, 'last': last,
               'unit': unit, 'stage': stage, 'contribution': contribution, 'relation': relation,
               'canonical_start': start['id'], 'canonical_end': end['id'],
               'canonical_start_line': start['number'], 'canonical_end_line': end['number'],
               'anchor': anchor, 'message_ids': mids, 'archive_transcript': catalog[archive]['transcript'],
               'archive_sha256': checksum(ROOT / catalog[archive]['transcript']),
               'review_status': 'inhaltlicher_bezug_kontextgeprueft',
               'adoption_status': 'keine_einzeltextuebernahme_behauptet'}
        refs.append(ref)
    for ref in refs:
        ref['locator_snapshot'] = {'start': locations[ref['canonical_start']]['start'],
                                   'end': locations[ref['canonical_end']]['end']}
    for title in ['Einleitung', 'Schluss']:
        section = next(s for s in manuscript['sections'] if s['title'] == title)
        sid = section['trace_id']
        new = {'id': sid, 'section_id': section['id'], 'title': title, 'earlier_titles': [],
               'reference_ids': [r['id'] for r in refs if sid in r['section_ids']]}
        mapping['sections'] = [s for s in mapping['sections'] if s['id'] != sid] + [new]
    mapping['sections'].sort(key=lambda s: s['id'])
    mapping['scope'] = 'curated_all_subchapters_plus_introduction_and_conclusion'
    mapping['updated_at'] = datetime.now(ZoneInfo('Europe/Berlin')).isoformat(timespec='seconds')
    mapping['scope_notes'][0] = 'Zuordnung aller 13 aktuellen Unterkapitel sowie Einleitung und Schluss, insgesamt 15 Abschnitte.'
    mapping['scope_notes'][-1] = ('Das automatische Kandidatenregister bleibt unverändert. Die kuratierte Liste ersetzt keine '
                                  'Quellenprüfung; ihre stabilen Kennungen werden für die gedruckten KI-Hinweise verwendet.')
    state = mapping['source_state']
    for key, path in [('manuscript_sha256', ROOT / 'thesis/typesetting-compat/manuscript.json'),
                      ('locations_sha256', WEB / 'locations.json'), ('edition_sha256', WEB / 'edition.json')]:
        state[key] = checksum(path)
    state['edition_pipeline_hash'] = edition['pipelineHash']
    state['edition_pages'] = len(edition['pages'])
    counts = Counter(r['archive_id'] for r in refs)
    for archive in mapping['archive_audit']:
        archive['assigned_ranges'] = counts[archive['id']]
        if archive['id'] in ['CGPT-16', 'CGPT-18']:
            archive['note'] = 'Explizite Einleitungs- und/oder Schlussarbeit in der erweiterten Zuordnung erfasst.'
    mapping['totals'].update({'subchapters': 13, 'introduction_and_conclusion': 2,
                             'sections': len(mapping['sections']), 'distinct_ranges': len(refs),
                             'section_range_relations': sum(len(r['section_ids']) for r in refs),
                             'archives_with_direct_references': len(counts)})
    MAPPING.write_text(json.dumps(mapping, ensure_ascii=False, indent=2) + '\n')
    update_note(mapping)
    print(json.dumps(mapping['totals'], ensure_ascii=False))


def update_note(mapping):
    path = HERE / 'unterkapitel-ki-zuordnung.md'
    text = path.read_text()
    text = text.replace('# Unterkapitel und KI-Dokumentationsstellen', '# Abschnitte und KI-Dokumentationsstellen', 1)
    text = text.replace('**13 Unterkapiteln der finalen Masterarbeit**', '**13 Unterkapiteln sowie Einleitung und Schluss der finalen Masterarbeit**', 1)
    text = text.replace('| Unterkapitel | ID | Fundstellenbereiche |', '| Abschnitt | ID | Fundstellenbereiche |', 1)
    text = re.sub(r'Stand: .*?Abschnitt–Fundstelle-Bezüge\.',
                  f'Stand: {mapping["updated_at"][:10]} · {len(mapping["references"])} unterschiedliche Fundstellenbereiche · '
                  f'{mapping["totals"]["section_range_relations"]} Abschnitt–Fundstelle-Bezüge.', text, count=1)
    overview = ['| Abschnitt | ID | Fundstellenbereiche |', '|---|---|---:|']
    overview += [f'| {section["title"]} | {section["id"]} | {len(section["reference_ids"])} |'
                 for section in mapping['sections']]
    text = re.sub(r'(?<=## Übersicht\n\n).*?(?=\n## Zuordnung)',
                  '\n'.join(overview) + '\n', text, count=1, flags=re.S)
    # Replace only our appendix; the original 13 detailed tables remain intact.
    text = re.sub(r'\n## Ergänzung: Einleitung und Schluss\n.*', '', text, flags=re.S)
    appendix = ['## Ergänzung: Einleitung und Schluss', '',
                'Die folgenden Bezüge wurden im Gesprächskontext geprüft. Recherche- und Strukturvorarbeiten, '
                'auch verworfene Varianten, bleiben auffindbar. Schlussabsätze anderer Unterkapitel und bloße '
                'Wortüberschneidungen wurden nicht pauschal dem Gesamtschluss zugeschrieben.', '']
    for section in mapping['sections']:
        if section['id'] not in ['SEC-001', 'SEC-015']:
            continue
        appendix += [f'### {section["id"]} · {section["title"]}', '',
                     '| Phase | Fundstelle | Bezug und Status |', '|---|---|---|']
        for ref in mapping['references']:
            if ref['id'] not in section['reference_ids']:
                continue
            label = (f'{ref["archive_id"]} · M{ref["first"]:04d}–M{ref["last"]:04d}' if ref['unit'] == 'message'
                     else f'{ref["archive_id"]} · Z. {ref["first"]}–{ref["last"]}')
            url = f'http://127.0.0.1:8768/ai-documentation/preview.html#{ref["anchor"]}'
            original = ROOT / ref['archive_transcript']
            link = f'[{label}]({url})<br>[Original Z. {ref["canonical_start_line"]}–{ref["canonical_end_line"]}](<{original}:{ref["canonical_start_line"]}>)'
            status = ' **Frühere Vorarbeit.**' if ref['relation'] == 'historisch' else ''
            appendix.append(f'| {ref["stage"]} | {link} | {ref["contribution"]}{status} |')
        appendix += ['']
    for archive in mapping['archive_audit']:
        count = str(archive['assigned_ranges']) if archive['assigned_ranges'] else archive['note']
        row = (f'| [{archive["id"]}](<{ROOT / archive["transcript"]}:7>) | {archive["title"]} | {count} |')
        text = re.sub(r'^\| \[' + re.escape(archive['id']) + r'\][^\n]*$', lambda _: row, text, flags=re.M)
    text = re.sub(r'Der Satz-Snapshot stammt aus der aktuellen \d+-seitigen Dokumentation\.',
                  f'Der Satz-Snapshot stammt aus der aktuellen {mapping["source_state"]["edition_pages"]}-seitigen Dokumentation.', text)
    path.write_text(text.rstrip() + '\n\n' + '\n'.join(appendix))


if __name__ == '__main__':
    main()
