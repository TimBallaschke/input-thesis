#!/usr/bin/env python3
"""Generate an index, gap inventory and overlap report for the ten share archives."""
from collections import Counter, defaultdict
import hashlib
import html
import json
from pathlib import Path
import re

ROOT = Path(__file__).resolve().parents[1]
TOPICS = {
    "CGPT-05": "Kritisches Gesamtfeedback; Kürzungen und Formulierungen in Interaction und Operation, insbesondere Regeln, Relevanz, Sycophancy und GEO.",
    "CGPT-06": "Schrittweise Formulierung von Operation 3 und 4: Datenwege, Weiterverwendung, Rückmeldung, Prüfbarkeit und Eingriffsmöglichkeiten.",
    "CGPT-07": "Operation 3: Übertragung, Speicherung und Weiterverwendung; reCAPTCHA und Digitalisierung, BetterHelp, persönliche Rückschlüsse und Übergang.",
    "CGPT-08": "Operation 2: Verarbeitung, Maßstäbe, Interessen und SEO/GEO; Beginn von Operation 3 und Mehrfachzwecke von Eingaben.",
    "CGPT-09": "Operation 1 und 2: technische Zuordnung, Kontext, Validierung sowie Kürzung des Command-Line-/Formularvergleichs.",
    "CGPT-10": "Entwicklung von Operation 1 und 2, Zeitlichkeit und Stellung von SEO/GEO innerhalb der vierteiligen Gliederung.",
    "CGPT-11": "Sprachliche Überarbeitung der fünf Interaction-Abschnitte; Übergang zum ersten Operation-Abschnitt.",
    "CGPT-12": "Verständlichkeit und Verdichtung von Interaction; Kompetenzen, Korrektur, Vorschläge sowie Iteration und Reformulierung.",
    "CGPT-13": "Hypothetische Steyerl-informierte Kritik, Machtfragen und Verhältnis Surface/Interaction/Operation; Ausarbeitung mehrerer Interaction-Abschnitte.",
    "CGPT-14": "Frühe Formulierungshilfe für die fünf Interaction-Abschnitte aus Struktur und Quellenübersicht.",
}


def normal(text):
    return re.sub(r"\s+", " ", html.unescape(text)).strip()


def main():
    archive = ROOT / "archive"
    manifests = [json.loads(p.read_text()) for p in sorted(archive.glob("cgpt-*-share-*-manifest.json"))]
    assert len(manifests) == 10
    assert len({m["share_url"] for m in manifests}) == 10
    records = {m["archive_id"]: [json.loads(x) for x in (archive / m["messages_file"]).read_text().splitlines()] for m in manifests}
    old_sources = []
    for path in sorted((ROOT / "attachments").glob("*.txt")):
        old_sources.append((str(path.relative_to(ROOT)), normal(path.read_text())))
    for path in sorted(archive.glob("cdx-*-messages.jsonl")):
        for index, line in enumerate(path.read_text().splitlines(), 1):
            message = json.loads(line)
            old_sources.append((str(path.relative_to(ROOT)) + f"#message-{index}", normal(message["text"])))
    overlaps = []
    hashes = defaultdict(list)
    for aid, rs in records.items():
        for r in rs:
            assert r["role"] in ("user", "assistant")
            assert r["phase"] in ("prompt", "response", "final", "commentary")
            assert hashlib.sha256(r["text"].encode()).hexdigest() == r["text_sha256"]
            text = normal(r["text"])
            if len(text) < 180:
                continue
            hashes[text].append([aid, r["sequence"]])
            for source, old in old_sources:
                if text in old:
                    overlaps.append({"archive_id": aid, "message": r["sequence"], "kind": "full_message_normalized_containment", "existing_source": source})
                elif len(text) >= 600 and text[:300] in old and text[-300:] in old:
                    overlaps.append({"archive_id": aid, "message": r["sequence"], "kind": "matching_start_and_end_only_not_identity", "existing_source": source})
    repeated = [x for x in hashes.values() if len({a for a, n in x}) > 1]
    allrecords = [r for rs in records.values() for r in rs]
    stats = {"archives": len(manifests), "messages": len(allrecords), "roles": dict(Counter(r["role"] for r in allrecords)),
             "phases": dict(Counter(r["phase"] for r in allrecords)),
             "missing_uploads": sum(len(r["attachments_metadata_only"]) for r in allrecords),
             "linked_artifacts_not_retrieved": sum(g["kind"] == "linked_artifact_not_retrieved" for m in manifests for g in m["missing_material"]),
             "existing_archive_overlap_records": overlaps, "cross_share_repeated_full_messages": repeated,
             "comparison_limits": "Whitespace/HTML-entity-normalized containment (minimum 180 characters), with separate two-end candidate matching for longer text. Not a semantic plagiarism or final manuscript adoption check."}
    (ROOT / "archive/shared-chat-import-2026-09-17-audit.json").write_text(json.dumps(stats, ensure_ascii=False, indent=2) + "\n")
    lines = ["# Import der zehn ChatGPT-Gespräche", "", "Stand: 17. September 2026. Auftrag: die zehn von Tim bereitgestellten Share-Links in die KI-Dokumentation aufnehmen.", "",
             "## Umfang und Grenzen", "", f"- {len(manifests)} eigenständige Share-Snapshots, {len(allrecords)} Nachrichten: {stats['roles']['user']} NutzerInnen-Nachrichten und {stats['roles']['assistant']} sichtbare KI-Nachrichten ({stats['phases']['final']} Antworten, {stats['phases']['commentary']} Zwischenmeldungen).",
             "- Die unveränderten Textinhalte stehen in JSONL; daraus werden lesbare Transkripte mit stabilen archivbezogenen Zeilennummern erzeugt. Die zehn Archive sind in der Dokumentations-PDF enthalten.",
             "- Die Abrufe stammen aus den öffentlichen Share-Seiten, ohne Anmeldung oder Browser-Zugangsdaten. Die eingebettete Gesprächsfolge wurde gezielt ausgelesen; versteckte Denkprozesse, System-/Entwicklerkontext, Modellgedächtnis und Werkzeugdaten wurden ausgeschlossen.",
             "- Share-Snapshots belegen nicht die Vollständigkeit aller ursprünglichen Chat-Verzweigungen. Die damaligen hochgeladenen Dateien sowie verlinkte Sandbox-Artefakte sind nicht durch den Textimport gesichert.",
             "- Nachrichtendaten und Modellnamen sind Anbieter-Metadaten. Das Erstellungsdatum eines Share-Links ist nicht das Datum des ursprünglichen Gesprächs. Für die externen Chats liegen keine verlässlichen Token-, Kosten- oder Arbeitszeitdaten vor.",
             "- Import bedeutet weder Übernahme aller Vorschläge in die Thesis noch Prüfung der in den Chats genannten Quellen. Die absatzgenaue Zuordnung zur aktuellen Manuskriptfassung bleibt offen.",
             "- CGPT-13 enthält eine KI-generierte hypothetische Steyerl-Lektüre, keine Äußerungen oder bestätigten Positionen Hito Steyerls.", "",
             "## Archivübersicht", "", "Reihenfolge und IDs entsprechen Tims Linkliste, nicht der zeitlichen Reihenfolge der Gespräche.", "",
             "| Archiv | Titel / Herkunft | Nachrichtenzeitraum (UTC) | Nachrichten | Bezug | Transkript |",
             "| --- | --- | --- | ---: | --- | --- |"]
    for m in manifests:
        aid = m["archive_id"]
        start = (m["messages_start_utc"] or "unbekannt")[:10]
        end = (m["messages_end_utc"] or "unbekannt")[:10]
        lines.append(f"| {aid} | [{m['title']}]({m['share_url']}) | {start} bis {end} | {m['message_count']} | {TOPICS[aid]} | [Zeilen 1–{m['transcript_lines']}](archive/{m['transcript_file']}) |")
    lines += ["", "## Nicht mitgelieferte Inhalte", "", "Die Namen werden nur als Metadaten der damaligen Uploads wiedergegeben. Ihr Inhalt wurde nicht rekonstruiert. Gleichnamige lokale Dateien werden nicht ohne Identitätsnachweis als Ersatz eingesetzt.", "",
              "| Archiv / Nachricht | Fehlender Inhalt | Umfang laut Share-Metadaten |", "| --- | --- | --- |"]
    for m in manifests:
        for r in records[m["archive_id"]]:
            for attachment in r["attachments_metadata_only"]:
                lines.append(f"| {m['archive_id']} / {r['sequence']} | {attachment.get('name', 'unbenannter Upload')} | {attachment.get('size', 'unbekannt')} Byte |")
        for gap in m["missing_material"]:
            if gap["kind"] == "linked_artifact_not_retrieved":
                seq = next(r["sequence"] for r in records[m["archive_id"]] if r["message_id"] == gap["message_id"])
                lines.append(f"| {m['archive_id']} / {seq} | `{gap['reference']}` | verlinktes Ergebnis; nicht abgerufen |")
    lines += ["", "Die vorhandenen lokalen Fassungen von `260915_Master_Thesis.pages`, `Struktur_Masterarbeit_Input.pages` und `QUELLENUEBERSICHT_INTERACTION_PHYSICAL_INPUT_COMPACT_01.md` weichen schon in der Dateigröße von den jeweiligen Upload-Metadaten ab. Sie wurden nicht als identische Anhänge eingetragen.", "",
              "## Abgleich mit vorhandenen Aufzeichnungen", "",
              "Bereits vorhandene CGPT-, FDBK-, DRAFT- und CDX-Archive bleiben erhalten. Wiederverwendete Formulierungen werden nicht aus ihrem Gesprächszusammenhang gelöscht. Die nachfolgenden Treffer sind Querverweise, keine zusätzlichen unabhängigen KI-Beiträge oder Belege einer Manuskriptübernahme.", "",
              f"Der automatisierte Vergleich fand {len(overlaps)} Übereinstimmungs-/Kandidatenverweise zu bisherigen Aufzeichnungen. Zwischen den zehn Share-Archiven wurden {len(repeated)} Gruppen identischer längerer vollständiger Nachrichten gefunden. Kurze Wiederholungen wie „weiter“ sind vom Vergleich ausgenommen.", "",
              "Verglichen wurden Leerraum und HTML-Entitäten normalisierte Texte ab 180 Zeichen; längere Nachrichten zusätzlich anhand übereinstimmender Anfangs- und Endstücke. Letzteres ist ausdrücklich kein Identitätsnachweis. Inhaltlich ähnliche Fassungen können darüber hinaus bestehen.", "",
              "| Neues Archiv / Nachricht | Vorhandene Aufzeichnung | Trefferart |", "| --- | --- | --- |"]
    for x in overlaps:
        kind = "vollständiger normalisierter Nachrichtentext enthalten" if x["kind"] == "full_message_normalized_containment" else "Anfang und Ende stimmen überein; Detailprüfung offen"
        lines.append(f"| {x['archive_id']} / {x['message']} | `{x['existing_source']}` | {kind} |")
    lines += ["", "## Integrität und Wiederherstellung", "", "Jedes Archiv hat ein Manifest mit Herkunfts-URL, Abrufzeit, Nachrichtenzahlen, Auslassungsgründen, fehlenden Materialien, SHA-256-Prüfsummen und Nachrichten-Zeilenbereichen. Die ursprünglichen Seitenkonfigurationen werden nicht archiviert. Der HTTP-Hash dokumentiert den Abruf, ersetzt aber keine aufbewahrte Rohseite.", "",
              "- Import: `scripts/import_shared_chats.py` (erneuter Netzabruf kann einen veränderten Share-Stand liefern; vorhandene abweichende Nachrichtensnapshots werden nicht überschrieben).",
              "- Darstellung aus gesicherten Nachrichten: `scripts/import_shared_chats.py --render-only`.",
              "- Index und Überschneidungsprüfung: `scripts/build_shared_chat_index.py`.",
              "- Maschineller Prüfbericht: `archive/shared-chat-import-2026-09-17-audit.json`.",
              "- [Lesbare Seitenübersicht](SHARED_CHAT_PAGE_REFERENCES_2026-09-17.md); maschinelle Zuordnung mit Zeilenbereichen je Seite: `archive/shared-chat-import-2026-09-17-pages.json`.",
              "", "Transkriptzeilen sind archivbezogen stabil; PDF-Seiten können sich beim nächsten Gesamtbuild verschieben. Frühere Seitenangaben in Abschlussnotizen beziehen sich weiterhin auf ihre datierte Ausgabe."]
    (ROOT / "SHARED_CHAT_IMPORT_2026-09-17.md").write_text("\n".join(lines) + "\n", encoding="utf-8")
    print(json.dumps({k: v for k, v in stats.items() if k not in ("existing_archive_overlap_records",)}, ensure_ascii=False))
    print("Overlap records:", len(overlaps))


if __name__ == "__main__":
    main()
