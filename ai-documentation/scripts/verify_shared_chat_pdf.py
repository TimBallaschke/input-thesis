#!/usr/bin/env python3
"""Check all imported transcript lines in the built PDF and create page locators."""
import hashlib
import json
from pathlib import Path
import re
import subprocess
import unicodedata

ROOT = Path(__file__).resolve().parents[1]
PDF = ROOT / "build/documentation.pdf"


def norm(text):
    return re.sub(r"\s+", " ", unicodedata.normalize("NFKC", text)).strip()


def main():
    extracted = subprocess.check_output(["pdftotext", "-layout", str(PDF), "-"], text=True)
    pages = extracted.split("\f")
    if not pages[-1].strip():
        pages.pop()
    entries = []
    for p in sorted((ROOT / "archive").glob("cgpt-*-share-*-manifest.json")):
        m = json.loads(p.read_text())
        aid = m["archive_id"]
        expected = (ROOT / "archive" / m["transcript_file"]).read_text().splitlines()
        assert hashlib.sha256((ROOT / "archive" / m["messages_file"]).read_bytes()).hexdigest() == m["messages_sha256"]
        assert hashlib.sha256((ROOT / "archive" / m["transcript_file"]).read_bytes()).hexdigest() == m["transcript_sha256"]
        start = next(i for i, text in enumerate(pages) if re.search(r"Archive ID:\s*" + aid + r"\b", text))
        found, per_page = [], []
        for i in range(start, len(pages)):
            page_lines = []
            for line in pages[i].splitlines():
                match = re.match(r"\s*(\d{6})\s*\|\s?(.*)$", line)
                if match:
                    page_lines.append((int(match.group(1)), match.group(2)))
            if page_lines:
                found.extend(page_lines)
                footer = re.search(r"\n\s*(\d+)\s*$", pages[i])
                per_page.append({"pdf_page": i + 1, "printed_page": int(footer.group(1)) if footer else None,
                                 "first_line": page_lines[0][0], "last_line": page_lines[-1][0]})
            if found and found[-1][0] == len(expected):
                break
        assert [n for n, text in found] == list(range(1, len(expected) + 1)), (aid, "missing/repeated transcript lines")
        differences = []
        for (n, actual), line in zip(found, expected):
            original = line.split(" | ", 1)[1]
            if norm(actual) != norm(original):
                differences.append({"line": n, "expected": original, "extracted": actual})
        if differences:
            raise ValueError(json.dumps({"archive": aid, "text_differences": differences[:10]}, ensure_ascii=False))
        entries.append({"archive_id": aid, "title": m["title"], "pdf_first_page": per_page[0]["pdf_page"],
                        "pdf_last_page": per_page[-1]["pdf_page"], "printed_first_page": per_page[0]["printed_page"],
                        "printed_last_page": per_page[-1]["printed_page"], "verified_numbered_lines": len(found),
                        "all_lines_match_after_whitespace_unicode_normalization": True, "page_line_ranges": per_page})
    result = {"pdf_file": "output/pdf/AI_Collaboration_Documentation_working.pdf",
              "pdf_sha256": hashlib.sha256(PDF.read_bytes()).hexdigest(), "pdf_pages": len(pages),
              "entries": entries, "note": "Physical PDF pages are one-based. Printed page numbers exclude the title page. Recompute after rebuilding."}
    (ROOT / "archive/shared-chat-import-2026-09-17-pages.json").write_text(json.dumps(result, ensure_ascii=False, indent=2) + "\n")
    md = ["# Seitenverweise: Share-Import vom 17. September 2026", "", f"Arbeitsausgabe: {len(pages)} PDF-Seiten. SHA-256: `{result['pdf_sha256']}`.", "",
          "Alle nummerierten Zeilen der zehn neuen Transkripte wurden auf Vollständigkeit und Textübereinstimmung mit der PDF geprüft (Leerraum und Unicode-Normalisierung ausgenommen).", "",
          "| Archiv | Gedruckte Seiten | PDF-Seiten | Archivzeilen |", "| --- | --- | --- | --- |"]
    for e in entries:
        md.append(f"| {e['archive_id']} | {e['printed_first_page']}–{e['printed_last_page']} | {e['pdf_first_page']}–{e['pdf_last_page']} | 1–{e['verified_numbered_lines']} |")
    md += ["", "Für Zitate die gedruckte Seite zusammen mit Archiv-ID und Zeilennummer verwenden. Die JSON-Datei enthält zusätzlich die Zeilenbereiche je Seite. Diese Angaben gelten nur für die hier mit SHA-256 bezeichnete Arbeitsausgabe."]
    (ROOT / "SHARED_CHAT_PAGE_REFERENCES_2026-09-17.md").write_text("\n".join(md) + "\n")
    print(json.dumps({"pages": len(pages), "verified_archives": len(entries), "verified_lines": sum(e["verified_numbered_lines"] for e in entries),
                      "ranges": [{k: e[k] for k in ("archive_id", "pdf_first_page", "pdf_last_page", "printed_first_page", "printed_last_page")} for e in entries]}, ensure_ascii=False))


if __name__ == "__main__":
    main()
