#!/usr/bin/env python3
"""Index a later share batch without rewriting earlier dated import records."""
import argparse
from collections import Counter
from difflib import SequenceMatcher
import hashlib
import html
import json
from pathlib import Path
import re

ROOT = Path(__file__).resolve().parents[1]


def normal(text):
    return re.sub(r"\s+", " ", html.unescape(text)).strip()


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--date", required=True)
    parser.add_argument("--archive-id", action="append", required=True)
    args = parser.parse_args()
    if not re.fullmatch(r"\d{4}-\d{2}-\d{2}", args.date):
        parser.error("Use YYYY-MM-DD for --date")
    ids = set(args.archive_id)
    if len(ids) != len(args.archive_id):
        parser.error("Repeated archive ID")
    archive = ROOT / "archive"
    manifests = [json.loads(p.read_text()) for p in sorted(archive.glob("cgpt-*-share-*-manifest.json"))]
    selected = [m for m in manifests if m["archive_id"] in ids]
    if {m["archive_id"] for m in selected} != ids:
        parser.error("One or more requested archives do not exist")
    excluded_files = {m["messages_file"] for m in selected}
    earlier = []
    for path in sorted(archive.glob("*-messages.jsonl")):
        if path.name in excluded_files:
            continue
        for seq, line in enumerate(path.read_text().splitlines(), 1):
            r = json.loads(line)
            earlier.append((path.name + f"#message-{seq}", normal(r["text"])))
    for path in sorted((ROOT / "attachments").glob("*.txt")):
        earlier.append((str(path.relative_to(ROOT)), normal(path.read_text())))
    records, overlaps, gaps = [], [], []
    for m in selected:
        raw = (archive / m["messages_file"]).read_bytes()
        assert hashlib.sha256(raw).hexdigest() == m["messages_sha256"]
        transcript = (archive / m["transcript_file"]).read_bytes()
        assert hashlib.sha256(transcript).hexdigest() == m["transcript_sha256"]
        current = [json.loads(line) for line in raw.decode().splitlines()]
        assert len(current) == m["message_count"]
        assert len({r["message_id"] for r in current}) == len(current)
        for r in current:
            assert r["role"] in ("user", "assistant")
            assert r["phase"] in ("prompt", "response", "final", "commentary")
            assert hashlib.sha256(r["text"].encode()).hexdigest() == r["text_sha256"]
            text = normal(r["text"])
            if len(text) >= 180:
                for source, old in earlier:
                    kind = None
                    excerpt = None
                    if text in old:
                        kind = "full_message_normalized_containment"
                    elif len(old) >= 180 and old in text:
                        kind = "existing_full_message_contained_in_new"
                    elif len(text) >= 600 and text[:300] in old and text[-300:] in old:
                        kind = "matching_start_and_end_only_not_identity"
                    elif len(old) >= 800 and any(text[i:i+800] in old for i in range(0, len(text)-799, 400)):
                        match = SequenceMatcher(None, text, old, autojunk=False).find_longest_match()
                        kind = "normalized_contiguous_excerpt_not_whole_message_identity"
                        excerpt = {"characters": match.size, "new_start": match.a, "existing_start": match.b}
                    if kind:
                        entry = {"archive_id": m["archive_id"], "message": r["sequence"],
                                 "existing_source": source, "kind": kind}
                        if excerpt:
                            entry["normalized_excerpt"] = excerpt
                        overlaps.append(entry)
        records.extend(current)
        gaps.extend({"archive_id": m["archive_id"], **g} for g in m["missing_material"])
    stats = {"date": args.date, "archives": sorted(ids), "messages": len(records),
             "roles": dict(Counter(r["role"] for r in records)),
             "phases": dict(Counter(r["phase"] for r in records)),
             "missing_material": gaps, "existing_archive_overlap_records": overlaps,
             "comparison_limits": "Whitespace and HTML-entity normalized full-message containment above 180 characters; separate matching-end candidates; sampled 800-character blocks at 400-character intervals identify candidates for a longest contiguous excerpt check. No exhaustive partial-overlap, semantic-similarity or manuscript adoption test."}
    audit_name = f"shared-chat-import-{args.date}-audit.json"
    (archive / audit_name).write_text(json.dumps(stats, ensure_ascii=False, indent=2) + "\n")
    lines = [f"# Weitere ChatGPT-Gespräche: Import {args.date}", "",
             f"{len(selected)} ausdrücklich bereitgestellte Share-Snapshots mit {len(records)} sichtbaren Nachrichten. "
             f"Davon {stats['roles'].get('user', 0)} NutzerInnen- und {stats['roles'].get('assistant', 0)} KI-Nachrichten.", "",
             "## Archivübersicht", "",
             "| Archiv | Originaltitel / Quelle | Nachrichtenzeitraum (UTC) | Nachrichten | Transkript |",
             "| --- | --- | --- | ---: | --- |"]
    for m in selected:
        lines.append(f"| {m['archive_id']} | [{m['title']}]({m['share_url']}) | {m['messages_start_utc']} bis {m['messages_end_utc']} | {m['message_count']} | [Zeilen 1-{m['transcript_lines']}](archive/{m['transcript_file']}) |")
    lines += ["", "## Umfang und Grenzen", "",
              "Die unveränderten Nachrichtentexte stehen in JSONL. Die nummerierte Lesefassung ergänzt Umbruch und lesbare Markierungen für Darstellungssteuerzeichen; sie verändert nicht das Rohtextarchiv.",
              "Abruf ohne Anmeldung oder Browser-Zugangsdaten. Versteckte Denkprozesse, System-/Entwicklerkontext, Modellgedächtnis und Werkzeugdaten bleiben ausgeschlossen.",
              "Ein Share ist ein Snapshot und kein Vollständigkeitsnachweis aller ursprünglichen Gesprächsverzweigungen. Nachrichtendaten und Modellbezeichnungen sind Anbieter-Metadaten. Aus ihnen werden weder Arbeitszeiten noch Tokenkosten abgeleitet.",
              f"In diesen Snapshots ausgewiesene fehlende Materialien: {len(gaps)}. Das bedeutet nicht, dass außerhalb der Shares keine weiteren Inhalte existieren.",
              "Der Import bestätigt weder Quellenbehauptungen noch die Übernahme von Vorschlägen in die Thesis. Die Zuordnung tatsächlich übernommener Passagen bleibt gesondert erforderlich.", "",
              "## Überschneidungen", "",
              f"{len(overlaps)} Querverweise auf bereits archivierte Kommunikation. Texte bleiben in ihrem Gesprächszusammenhang erhalten und gelten nicht als zusätzliche unabhängige Beiträge.",
              "Der Vergleich normalisiert Leerraum und HTML-Entitäten; kurze Nachrichten unter 180 Zeichen bleiben unberücksichtigt. Zusätzlich werden ausgewählte Textblöcke ab 800 Zeichen auf zusammenhängende Überschneidungen geprüft. Ein gemeinsamer Auszug belegt keine Identität der gesamten Nachricht. Übereinstimmende Anfangs-/Endstücke sind nur Kandidaten. Dies ist keine vollständige semantische oder passagebezogene Übernahmeprüfung.", "",
              "| Archiv / Nachricht | Vorhandene Aufzeichnung | Trefferart |", "| --- | --- | --- |"]
    for o in overlaps:
        lines.append(f"| {o['archive_id']} / {o['message']} | `{o['existing_source']}` | `{o['kind']}` |")
    lines += ["", "## Nachweise", "",
              f"- [Maschineller Prüfbericht](archive/{audit_name}).",
              "- Per-Archiv-Manifeste enthalten Abrufzeit, SHA-256-Prüfsummen, Filtergrenzen und Zeilenbereiche jeder Nachricht.",
              f"- [Seitenverweise der aktuellen PDF-Ausgabe](SHARED_CHAT_PAGE_REFERENCES_{args.date}.md). Frühere datierte Seitenverweise bleiben historische Ausgaben.",
              "- Kein erneuter Abruf ist für die Darstellung erforderlich: `scripts/import_shared_chats.py --render-only`.",
              "- Eine Veröffentlichung oder ein Git-Push ist mit diesem lokalen Dokumentationsimport nicht verbunden."]
    (ROOT / f"SHARED_CHAT_IMPORT_{args.date}.md").write_text("\n".join(lines) + "\n", encoding="utf-8")
    print(json.dumps({"archives": sorted(ids), "messages": len(records), "gaps": len(gaps), "overlap_records": len(overlaps)}, ensure_ascii=False))


if __name__ == "__main__":
    main()
