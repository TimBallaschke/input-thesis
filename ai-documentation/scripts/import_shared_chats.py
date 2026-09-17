#!/usr/bin/env python3
"""Archive public shared-chat text, excluding private reasoning and tool payloads.

The explicit user-supplied URLs are fetched as public documents, with no browser
credentials. Decode only selected conversation fields from the page's serialized
route data. Never execute remote JavaScript or archive the page's configuration.
Raw message text stays unchanged in JSONL; a separate display is line wrapped.
"""
from __future__ import annotations

import argparse
from collections import Counter
from concurrent.futures import ThreadPoolExecutor
from datetime import datetime, timezone
import hashlib
import json
from pathlib import Path
import re
import textwrap
import urllib.request

SHARES = [
    "6aaba96b-9988-83eb-9711-615baf285e56",
    "6aaba9e5-5234-83eb-85db-a6995f675316",
    "6aaba9f0-205c-83ed-bea6-d4447087b0ca",
    "6aaba9fb-5bb0-83eb-b899-ad7fa232d9fd",
    "6aabaa07-d554-83ed-83d6-f96e59a14d97",
    "6aabaa12-e75c-83ed-adfc-aafc43483839",
    "6aabaa1e-a198-83eb-8c4b-c0a17958a742",
    "6aabaa29-3fec-83eb-964e-4f6a3f3d235c",
    "6aabaa3b-a970-83eb-9be9-322419c04803",
    "6aabaa4a-8af4-83eb-a267-9b3b38d924d9",
]
ROOT = Path(__file__).resolve().parents[1]


def digest(data: bytes) -> str:
    return hashlib.sha256(data).hexdigest()


def utc(value) -> str | None:
    if isinstance(value, (int, float)):
        return datetime.fromtimestamp(value, timezone.utc).isoformat()
    return None


class Graph:
    def __init__(self, values):
        self.values = values

    def fields(self, index):
        if index is None or index < 0:
            return {}
        value = self.values[index]
        if not isinstance(value, dict):
            return {}
        return {self.values[int(k[1:])]: v for k, v in value.items()}

    def field(self, index, name):
        return self.fields(index).get(name)

    def read(self, index):
        if index is None or index < 0:
            return None
        value = self.values[index]
        if isinstance(value, dict):
            return {k: self.read(v) for k, v in self.fields(index).items()}
        if isinstance(value, list):
            if value and isinstance(value[0], str):
                # Tagged route values are not ordinary text. Retain no payload.
                return {"serialization_tag": value[0]}
            return [self.read(v) for v in value]
        return value

    def get(self, index, name):
        return self.read(self.field(index, name))


def select_route(html):
    pattern = r'streamController\.enqueue\(("(?:[^"\\]|\\.)*")\)'
    for match in re.finditer(pattern, html):
        chunk = json.loads(match.group(1))
        if not chunk.startswith("["):
            continue
        graph = Graph(json.loads(chunk))
        loader = graph.field(0, "loaderData")
        for name, index in graph.fields(loader).items():
            if name.startswith("routes/share."):
                response = graph.field(index, "serverResponse")
                data = graph.field(response, "data")
                if graph.field(data, "linear_conversation") is not None:
                    return graph, data
    raise ValueError("No supported shared-conversation payload; no guessed endpoint used")


def visible_links(value):
    """Retain link identities, not underlying search results or quoted payloads."""
    found = []
    def walk(x):
        if isinstance(x, dict):
            url = x.get("url")
            if isinstance(url, str) and url.startswith(("https://", "http://")):
                found.append({"url": url, "title": x.get("title") or x.get("name")})
            for key, val in x.items():
                if key not in ("text", "snippet", "quote", "content"):
                    walk(val)
        elif isinstance(x, list):
            for val in x:
                walk(val)
    walk(value)
    return list({x["url"]: x for x in found}.values())


def fetch(spec):
    number, share = spec
    archive_id = f"CGPT-{number:02d}"
    url = f"https://chatgpt.com/share/{share}"
    request = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
    with urllib.request.urlopen(request, timeout=45) as response:
        payload = response.read()
        final_url = response.url
    graph, data = select_route(payload.decode("utf-8"))
    if graph.get(data, "conversation_id") != share:
        raise ValueError(f"Share identity mismatch for {url}")
    node_indices = graph.values[graph.field(data, "linear_conversation")]
    records, excluded, gaps = [], Counter(), []
    seen_ids = set()
    for source_index, ni in enumerate(node_indices, 1):
        mi = graph.field(ni, "message")
        if mi is None:
            excluded["empty_node"] += 1
            continue
        role = graph.get(graph.field(mi, "author"), "role")
        channel = graph.get(mi, "channel")
        recipient = graph.get(mi, "recipient")
        metadata = graph.field(mi, "metadata")
        content = graph.field(mi, "content")
        content_type = graph.get(content, "content_type")
        if role not in ("user", "assistant"):
            excluded["non_conversation_role"] += 1
            continue
        if graph.get(metadata, "is_visually_hidden_from_conversation"):
            excluded["hidden"] += 1
            continue
        if recipient not in (None, "all"):
            excluded["tool_routed"] += 1
            continue
        if channel not in (None, "final", "commentary"):
            excluded["non_visible_channel"] += 1
            continue
        if content_type not in ("text", "multimodal_text"):
            excluded[f"non_text_content:{content_type}"] += 1
            # Thoughts, recaps and model contexts are deliberately not decoded.
            if content_type not in ("thoughts", "reasoning_recap", "model_editable_context", "code"):
                gaps.append({"source_index": source_index, "kind": "unsupported_visible_content", "content_type": content_type})
            continue
        parts = graph.get(content, "parts") or []
        texts = [p for p in parts if isinstance(p, str)]
        nontext = [p.get("content_type", "unknown") for p in parts if isinstance(p, dict)]
        attachments = graph.get(metadata, "attachments") or []
        att = [{k: x[k] for k in ("name", "mime_type", "size", "id") if k in x}
               for x in attachments if isinstance(x, dict)]
        text = "\n".join(texts)
        message_id = graph.get(mi, "id") or graph.get(ni, "id")
        if message_id in seen_ids:
            excluded["repeated_message_id"] += 1
            continue
        seen_ids.add(message_id)
        if not text and not att and not nontext:
            excluded["empty_text"] += 1
            continue
        records.append({
            "archive_id": archive_id, "sequence": len(records) + 1,
            "source_node_index": source_index, "message_id": message_id,
            "role": role, "phase": channel or ("prompt" if role == "user" else "response"),
            "timestamp_utc": utc(graph.get(mi, "create_time")),
            "text": text, "text_sha256": digest(text.encode()),
            "model_reported": graph.get(metadata, "model_slug") if role == "assistant" else None,
            "attachments_metadata_only": att, "nontext_part_types": nontext,
            "public_reference_links": visible_links(graph.get(metadata, "content_references")),
        })
        if att or nontext:
            gaps.append({"message_id": message_id, "kind": "attachment_content_unavailable", "attachments": att, "nontext_types": nontext})
        for linked in re.findall(r'(?:sandbox:|file:)[^\s)\]>]+', text):
            gaps.append({"message_id": message_id, "kind": "linked_artifact_not_retrieved", "reference": linked})
    if not records:
        raise ValueError(f"No conversation messages extracted for {url}")
    manifest = {
        "archive_id": archive_id, "share_url": url, "retrieved_url": final_url,
        "title": graph.get(data, "title"), "retrieved_at_utc": datetime.now(timezone.utc).isoformat(),
        "share_created_at_utc": utc(graph.get(data, "create_time")),
        "share_updated_at_utc": utc(graph.get(data, "update_time")),
        "source_http_response_sha256": digest(payload),
        "raw_http_response_retained": False,
        "extraction": "Public share HTML route data; selected linear conversation; visible user/assistant text only",
        "message_count": len(records), "roles": dict(Counter(r["role"] for r in records)),
        "phases": dict(Counter(r["phase"] for r in records)),
        "source_node_count": len(node_indices), "excluded_counts": dict(excluded),
        "messages_start_utc": next((r["timestamp_utc"] for r in records if r["timestamp_utc"]), None),
        "messages_end_utc": next((r["timestamp_utc"] for r in reversed(records) if r["timestamp_utc"]), None),
        "missing_material": gaps,
        "limits": ["Share is a snapshot, not a guarantee of the complete original chat or all branches.",
                   "Attached files/images and linked sandbox artifacts are not archived unless separately supplied.",
                   "Share creation timestamps are not original conversation timestamps.",
                   "Model labels and timestamps are provider metadata, not independently verified.",
                   "No token/cost/time-of-work figures are inferred; no source validation or manuscript adoption implied.",
                   "Hidden reasoning, system/developer context, model memory and tool payloads excluded."],
    }
    return manifest, records


def display_text(text):
    # Readable representation; the exact original remains in messages.jsonl.
    text = re.sub(r'\ue200(.*?)\ue201', lambda m: "[" + m.group(1).replace("\ue202", ": ") + "]", text, flags=re.S)
    text = text.replace("\r\n", "\n").replace("\r", "\n").replace("\u2028", "\n").replace("\u2029", "\n\n")
    text = re.sub(r'^:::writing[^\n]*\n', "[Text block]\n", text, flags=re.M)
    text = re.sub(r'^:::\s*$', "[End text block]", text, flags=re.M)
    # Preserve unsupported symbols explicitly rather than printing empty glyphs.
    substitutions = {"✅": "[check]", "❌": "[cross]", "⚠": "[warning]", "👉": "[point]", "📌": "[pin]", "⭐": "[star]", "🟢": "[green]", "🔴": "[red]", "🟡": "[yellow]", "📄": "[document]", "📚": "[books]", "🧠": "[brain]", "🔍": "[search]", "💡": "[idea]", "🎯": "[target]", "📍": "[pin]", "✍": "[writing]", "✔": "[check]", "✗": "[cross]", "✘": "[cross]", "❗": "[exclamation]"}
    for char, replacement in substitutions.items():
        text = text.replace(char, replacement)
    text = text.replace("\ufe0f", "").replace("\u200d", "").replace("\u00ad", "")
    return text


def render(manifest, records, archive_dir):
    stem = manifest["archive_id"].lower() + "-share-" + manifest["share_url"].rsplit("/", 1)[-1]
    mp = archive_dir / f"{stem}-messages.jsonl"
    tp = archive_dir / f"{stem}-transcript.txt"
    jp = archive_dir / f"{stem}-manifest.json"
    raw = "".join(json.dumps(r, ensure_ascii=False, sort_keys=True) + "\n" for r in records)
    if mp.exists() and mp.read_text() != raw:
        raise ValueError(f"Refusing to overwrite changed existing snapshot: {mp}")
    mp.write_text(raw, encoding="utf-8")
    lines = []
    def add(text):
        for line in display_text(text).split("\n"):
            lines.extend(textwrap.wrap(line, width=82, replace_whitespace=False, break_long_words=True, break_on_hyphens=False) or [""])
    add("AI COLLABORATION DOCUMENTATION - SHARED CHAT SNAPSHOT")
    add(f"Archive ID: {manifest['archive_id']}\nTitle: {manifest['title']}\nSource: {manifest['share_url']}")
    add(f"Retrieved UTC: {manifest['retrieved_at_utc']}\nMessages SHA-256: {digest(raw.encode())}")
    add("Scope: public shared text; attachments and linked artifacts may be missing.\nExact message text is preserved in JSONL. Display adds wrapping and labels\nfor citation controls, writing blocks and unsupported symbols.\nMessage timestamps are provider metadata. Share timestamps are separate.\nHidden reasoning, system instructions and tool payloads are excluded.\n")
    ranges = []
    for record in records:
        start = len(lines) + 1
        add(f"MESSAGE {record['sequence']:04d} | {record['timestamp_utc'] or 'time unavailable'} | {record['role'].upper()} | {record['phase'].upper()}")
        add(record["text"])
        for attachment in record["attachments_metadata_only"]:
            add("[ATTACHMENT: " + (attachment.get("name") or "unnamed") + "; content unavailable]")
        if record["nontext_part_types"]:
            add("[NON-TEXT PARTS: " + ", ".join(record["nontext_part_types"]) + "; not transcribed]")
        for link in record["public_reference_links"]:
            add("[REFERENCE LINK] " + (link.get("title") or "") + " " + link["url"])
        ranges.append({"sequence": record["sequence"], "message_id": record["message_id"], "start_line": start, "end_line": len(lines)})
        add("")
    tp.write_text("\n".join(f"{i:06d} | {x}" for i, x in enumerate(lines, 1)) + "\n", encoding="utf-8")
    manifest.update({"messages_file": mp.name, "messages_sha256": digest(mp.read_bytes()),
                     "transcript_file": tp.name, "transcript_sha256": digest(tp.read_bytes()),
                     "transcript_lines": len(lines), "message_line_ranges": ranges})
    jp.write_text(json.dumps(manifest, ensure_ascii=False, indent=2, sort_keys=True) + "\n", encoding="utf-8")
    return manifest


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--render-only", action="store_true")
    args = parser.parse_args()
    archive = ROOT / "archive"
    if args.render_only:
        snapshots = []
        for p in sorted(archive.glob("cgpt-*-share-*-manifest.json")):
            m = json.loads(p.read_text())
            r = [json.loads(x) for x in (archive / m["messages_file"]).read_text().splitlines()]
            snapshots.append((m, r))
    else:
        with ThreadPoolExecutor(max_workers=3) as pool:
            snapshots = list(pool.map(fetch, enumerate(SHARES, 5)))
    for m, records in snapshots:
        result = render(m, records, archive)
        print(json.dumps({k: result[k] for k in ("archive_id", "title", "message_count", "roles", "transcript_lines", "messages_start_utc", "messages_end_utc")}, ensure_ascii=False))


if __name__ == "__main__":
    main()
