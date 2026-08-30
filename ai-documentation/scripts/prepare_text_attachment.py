#!/usr/bin/env python3
"""Create a deterministic line-numbered presentation of a text attachment."""

from __future__ import annotations

import argparse
import hashlib
import textwrap
from pathlib import Path


DISPLAY_WIDTH = 82


def sha256(path: Path) -> str:
    return hashlib.sha256(path.read_bytes()).hexdigest()


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--source", required=True, type=Path)
    parser.add_argument("--archive-id", required=True)
    parser.add_argument("--title", required=True)
    parser.add_argument("--output", required=True, type=Path)
    args = parser.parse_args()

    source_text = args.source.read_text(encoding="utf-8")
    display = [
        "AI COLLABORATION DOCUMENTATION - IMPORTED MATERIAL",
        f"Archive ID: {args.archive_id}",
        f"Title: {args.title}",
        f"Source SHA-256: {sha256(args.source)}",
        "Content: verbatim text supplied by the student; line wrapping added",
        "",
    ]

    for source_line in source_text.replace("\r\n", "\n").replace("\r", "\n").split("\n"):
        if not source_line:
            display.append("")
            continue
        display.extend(
            textwrap.wrap(
                source_line,
                width=DISPLAY_WIDTH,
                replace_whitespace=False,
                drop_whitespace=True,
                break_long_words=True,
                break_on_hyphens=False,
            )
            or [""]
        )

    args.output.parent.mkdir(parents=True, exist_ok=True)
    numbered = [
        f"{number:06d} | {line}" for number, line in enumerate(display, start=1)
    ]
    args.output.write_text("\n".join(numbered) + "\n", encoding="utf-8")
    print(f"{args.archive_id}: {len(numbered)} numbered lines")


if __name__ == "__main__":
    main()
