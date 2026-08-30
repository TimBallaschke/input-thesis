#!/usr/bin/env python3
"""Export visible user/assistant messages from a local Codex session log."""

from __future__ import annotations

import argparse
from collections import Counter
from datetime import datetime
import hashlib
import json
import textwrap
from pathlib import Path
from zoneinfo import ZoneInfo, ZoneInfoNotFoundError


DISPLAY_WIDTH = 82
METRICS_SCHEMA_VERSION = 1


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser()
    parser.add_argument("--source", required=True, type=Path, action="append")
    parser.add_argument("--thread-id", required=True)
    parser.add_argument("--archive-id", required=True)
    parser.add_argument("--out-dir", required=True, type=Path)
    return parser.parse_args()


def item_text(item: dict) -> str:
    """Return visible text from a completed Codex message item."""
    parts: list[str] = []
    for content in item.get("content", []):
        if not isinstance(content, dict):
            continue
        text = content.get("text")
        if isinstance(text, str):
            parts.append(text)
    return "\n".join(parts)


def visible_messages(sources: list[Path]) -> list[dict[str, str]]:
    messages: list[dict[str, str]] = []
    for source in sources:
        legacy_messages: list[dict[str, str]] = []
        completed_item_messages: list[dict[str, str]] = []
        with source.open(encoding="utf-8") as stream:
            for source_line in stream:
                event = json.loads(source_line)
                if event.get("type") != "event_msg":
                    continue

                payload = event.get("payload", {})
                payload_type = payload.get("type")
                if payload_type == "user_message":
                    role = "user"
                    phase = "prompt"
                elif payload_type == "agent_message":
                    role = "assistant"
                    phase = payload.get("phase") or "response"
                elif payload_type == "item_completed":
                    item = payload.get("item", {})
                    item_type = item.get("type") if isinstance(item, dict) else None
                    if item_type == "UserMessage":
                        role = "user"
                        phase = "prompt"
                    elif item_type == "AgentMessage":
                        role = "assistant"
                        phase = item.get("phase") or "response"
                    else:
                        continue

                    text = item_text(item)
                    if not text:
                        continue
                    completed_item_messages.append(
                        {
                            "timestamp": event.get("timestamp", ""),
                            "role": role,
                            "phase": phase,
                            "text": text,
                        }
                    )
                    continue
                else:
                    continue

                legacy_messages.append(
                    {
                        "timestamp": event.get("timestamp", ""),
                        "role": role,
                        "phase": phase,
                        "text": payload.get("message", ""),
                    }
                )

        # Codex session logs have used two visible-message schemas. A source may
        # contain technical response items as well as the legacy records, so
        # prefer the legacy stream per source when present.
        messages.extend(legacy_messages or completed_item_messages)

    return sorted(messages, key=lambda message: message["timestamp"])


def parse_timestamp(value: str) -> datetime | None:
    if not value:
        return None
    try:
        return datetime.fromisoformat(value.replace("Z", "+00:00"))
    except ValueError:
        return None


def elapsed_seconds(start: str, end: str) -> float | None:
    start_time = parse_timestamp(start)
    end_time = parse_timestamp(end)
    if start_time is None or end_time is None:
        return None
    return round((end_time - start_time).total_seconds(), 3)


def local_timestamp(value: str, timezone_name: str) -> str:
    timestamp = parse_timestamp(value)
    if timestamp is None:
        return ""
    try:
        timezone = ZoneInfo(timezone_name)
    except ZoneInfoNotFoundError:
        return ""
    return timestamp.astimezone(timezone).isoformat(timespec="milliseconds")


def session_metrics(
    sources: list[Path],
    messages: list[dict[str, str]],
    archive_id: str,
    thread_id: str,
    messages_hash: str,
    transcript_hash: str,
) -> dict:
    session_meta: dict = {}
    latest_turn_context: dict = {}
    latest_token_info: dict = {}
    latest_token_timestamp = ""
    last_event_timestamp = ""
    event_count = 0
    top_level_tool_calls: Counter[str] = Counter()

    for source in sources:
        with source.open(encoding="utf-8") as stream:
            for source_line in stream:
                event = json.loads(source_line)
                event_count += 1
                event_timestamp = event.get("timestamp", "")
                if event_timestamp and event_timestamp > last_event_timestamp:
                    last_event_timestamp = event_timestamp

                event_type = event.get("type")
                payload = event.get("payload", {})
                if event_type == "session_meta" and not session_meta:
                    session_meta = {
                        "timestamp": event_timestamp,
                        "cli_version": payload.get("cli_version"),
                        "model_provider": payload.get("model_provider"),
                        "originator": payload.get("originator"),
                        "source": payload.get("source"),
                        "history_mode": payload.get("history_mode"),
                    }
                elif event_type == "turn_context":
                    latest_turn_context = {
                        "timestamp": event_timestamp,
                        "model": payload.get("model"),
                        "effort": payload.get("effort"),
                        "timezone": payload.get("timezone"),
                        "collaboration_mode": (
                            payload.get("collaboration_mode", {}).get("mode")
                            if isinstance(payload.get("collaboration_mode"), dict)
                            else payload.get("collaboration_mode")
                        ),
                        "multi_agent_mode": payload.get("multi_agent_mode"),
                    }
                elif event_type == "event_msg" and payload.get("type") == "token_count":
                    info = payload.get("info")
                    if info:
                        latest_token_info = info
                        latest_token_timestamp = event_timestamp
                elif event_type == "response_item" and payload.get("type") in {
                    "function_call",
                    "custom_tool_call",
                }:
                    top_level_tool_calls[payload.get("name", "unknown")] += 1

    role_counts = Counter(message["role"] for message in messages)
    phase_counts = Counter(message["phase"] for message in messages)
    words_by_role = Counter()
    characters_by_role = Counter()
    for message in messages:
        role = message["role"]
        words_by_role[role] += len(message["text"].split())
        characters_by_role[role] += len(message["text"])

    visible_start = messages[0]["timestamp"] if messages else ""
    visible_end = messages[-1]["timestamp"] if messages else ""
    session_start = session_meta.get("timestamp", "")
    timezone_name = latest_turn_context.get("timezone") or "UTC"

    total_usage = latest_token_info.get("total_token_usage", {})
    input_tokens = total_usage.get("input_tokens")
    cached_input_tokens = total_usage.get("cached_input_tokens")
    non_cached_input_tokens = None
    if isinstance(input_tokens, int) and isinstance(cached_input_tokens, int):
        non_cached_input_tokens = input_tokens - cached_input_tokens

    output_tokens = total_usage.get("output_tokens")
    reasoning_output_tokens = total_usage.get("reasoning_output_tokens")
    non_reasoning_output_tokens = None
    if isinstance(output_tokens, int) and isinstance(reasoning_output_tokens, int):
        non_reasoning_output_tokens = output_tokens - reasoning_output_tokens

    return {
        "metrics_schema_version": METRICS_SCHEMA_VERSION,
        "archive_id": archive_id,
        "thread_id": thread_id,
        "source_filename": ", ".join(source.name for source in sources),
        "exported_through_utc": last_event_timestamp,
        "session": {
            **session_meta,
            "started_local": local_timestamp(session_start, timezone_name),
            "elapsed_seconds": elapsed_seconds(session_start, last_event_timestamp),
            "event_count": event_count,
            "source_segment_count": len(sources),
        },
        "runtime": latest_turn_context,
        "visible_communication": {
            "started_utc": visible_start,
            "ended_utc": visible_end,
            "started_local": local_timestamp(visible_start, timezone_name),
            "ended_local": local_timestamp(visible_end, timezone_name),
            "elapsed_seconds": elapsed_seconds(visible_start, visible_end),
            "message_count": len(messages),
            "message_count_by_role": dict(sorted(role_counts.items())),
            "message_count_by_phase": dict(sorted(phase_counts.items())),
            "word_count_by_role": dict(sorted(words_by_role.items())),
            "character_count_by_role": dict(sorted(characters_by_role.items())),
        },
        "token_accounting_snapshot": {
            "timestamp_utc": latest_token_timestamp,
            "input_tokens": input_tokens,
            "cached_input_tokens": cached_input_tokens,
            "cache_write_input_tokens": total_usage.get("cache_write_input_tokens"),
            "non_cached_input_tokens_calculated": non_cached_input_tokens,
            "output_tokens": output_tokens,
            "reasoning_output_tokens_subset": reasoning_output_tokens,
            "non_reasoning_output_tokens_calculated": non_reasoning_output_tokens,
            "total_tokens": total_usage.get("total_tokens"),
            "model_context_window": latest_token_info.get("model_context_window"),
        },
        "top_level_tool_call_records": {
            "total": sum(top_level_tool_calls.values()),
            "by_name": dict(sorted(top_level_tool_calls.items())),
        },
        "archive_hashes": {
            "messages_sha256": messages_hash,
            "transcript_sha256": transcript_hash,
        },
        "interpretation_notes": [
            "Token figures are platform-accounting values, not visible word counts.",
            "Cached input tokens are included in input tokens, not added to them.",
            "Reasoning output tokens are a subset of output tokens; only their count is retained.",
            "Input accounting includes repeated context, system instructions, tool schemas and tool results.",
            "Top-level exec records may orchestrate multiple semantic tool operations.",
            "The figures do not by themselves establish monetary cost, energy use or carbon emissions.",
            "Hidden reasoning content, system instructions and raw tool telemetry remain excluded.",
            "When an archive spans multiple source segments, the cumulative token snapshot comes from the latest segment and may not include earlier segments.",
        ],
    }


def format_duration(value: float | None) -> str:
    if value is None:
        return "unavailable"
    total_seconds = int(round(value))
    hours, remainder = divmod(total_seconds, 3600)
    minutes, seconds = divmod(remainder, 60)
    return f"{hours:02d}:{minutes:02d}:{seconds:02d}"


def format_number(value: int | None) -> str:
    return "unavailable" if value is None else f"{value:,}"


def metrics_text(metrics: dict) -> str:
    session = metrics["session"]
    runtime = metrics["runtime"]
    visible = metrics["visible_communication"]
    tokens = metrics["token_accounting_snapshot"]
    tools = metrics["top_level_tool_call_records"]
    lines = [
        "AI COLLABORATION TECHNICAL METADATA",
        "Master's thesis: Input",
        f"Archive ID: {metrics['archive_id']}",
        f"Codex task ID: {metrics['thread_id']}",
        f"Metrics schema: {metrics['metrics_schema_version']}",
        "",
        "SESSION AND RUNTIME",
        f"Session start UTC: {session.get('timestamp') or 'unavailable'}",
        f"Session start local: {session.get('started_local') or 'unavailable'}",
        f"Exported through UTC: {metrics.get('exported_through_utc') or 'unavailable'}",
        f"Session elapsed: {format_duration(session.get('elapsed_seconds'))}",
        f"Originator: {session.get('originator') or 'unavailable'}",
        f"Codex version: {session.get('cli_version') or 'unavailable'}",
        f"Model provider: {session.get('model_provider') or 'unavailable'}",
        f"Model: {runtime.get('model') or 'unavailable'}",
        f"Reasoning effort: {runtime.get('effort') or 'unavailable'}",
        f"Timezone: {runtime.get('timezone') or 'unavailable'}",
        "",
        "VISIBLE COMMUNICATION",
        f"Start UTC: {visible.get('started_utc') or 'unavailable'}",
        f"End UTC: {visible.get('ended_utc') or 'unavailable'}",
        f"Start local: {visible.get('started_local') or 'unavailable'}",
        f"End local: {visible.get('ended_local') or 'unavailable'}",
        f"Elapsed span: {format_duration(visible.get('elapsed_seconds'))}",
        f"Messages: {format_number(visible.get('message_count'))}",
        f"User messages: {format_number(visible['message_count_by_role'].get('user'))}",
        f"Assistant messages: {format_number(visible['message_count_by_role'].get('assistant'))}",
        f"User visible words: {format_number(visible['word_count_by_role'].get('user'))}",
        f"Assistant visible words: {format_number(visible['word_count_by_role'].get('assistant'))}",
        "",
        "CUMULATIVE TOKEN ACCOUNTING SNAPSHOT",
        f"Snapshot UTC: {tokens.get('timestamp_utc') or 'unavailable'}",
        f"Input tokens: {format_number(tokens.get('input_tokens'))}",
        f"  Cached input subset: {format_number(tokens.get('cached_input_tokens'))}",
        f"  Non-cached input, calculated: {format_number(tokens.get('non_cached_input_tokens_calculated'))}",
        f"Output tokens: {format_number(tokens.get('output_tokens'))}",
        f"  Reasoning output subset: {format_number(tokens.get('reasoning_output_tokens_subset'))}",
        f"  Non-reasoning output, calculated: {format_number(tokens.get('non_reasoning_output_tokens_calculated'))}",
        f"Total tokens: {format_number(tokens.get('total_tokens'))}",
        f"Model context window: {format_number(tokens.get('model_context_window'))}",
        "",
        "TOP-LEVEL TOOL CALL RECORDS",
        f"Total: {format_number(tools.get('total'))}",
    ]
    for name, count in tools["by_name"].items():
        lines.append(f"  {name}: {format_number(count)}")
    lines.extend(["", "INTERPRETATION NOTES"])
    lines.extend(f"- {note}" for note in metrics["interpretation_notes"])
    return "\n".join(lines) + "\n"


def wrap_message(text: str) -> list[str]:
    wrapped: list[str] = []
    for original_line in text.replace("\r\n", "\n").replace("\r", "\n").split("\n"):
        if not original_line:
            wrapped.append("")
            continue
        wrapped.extend(
            textwrap.wrap(
                original_line,
                width=DISPLAY_WIDTH,
                replace_whitespace=False,
                drop_whitespace=True,
                break_long_words=True,
                break_on_hyphens=False,
            )
            or [""]
        )
    return wrapped


def display_lines(
    messages: list[dict[str, str]], archive_id: str, thread_id: str
) -> list[str]:
    lines = [
        "AI COLLABORATION DOCUMENTATION",
        "Master's thesis: Input",
        f"Archive ID: {archive_id}",
        f"Codex task ID: {thread_id}",
        "Timestamps: UTC",
        "Content: visible user prompts and visible assistant messages only",
        "",
    ]

    for index, message in enumerate(messages, start=1):
        role = message["role"].upper()
        phase = message["phase"].upper()
        lines.append(
            f"MESSAGE {index:04d} | {message['timestamp']} | {role} | {phase}"
        )
        lines.extend(wrap_message(message["text"]))
        lines.append("")

    return [f"{number:06d} | {line}" for number, line in enumerate(lines, start=1)]


def sha256(path: Path) -> str:
    digest = hashlib.sha256()
    with path.open("rb") as stream:
        for chunk in iter(lambda: stream.read(1024 * 1024), b""):
            digest.update(chunk)
    return digest.hexdigest()


def main() -> None:
    args = parse_args()
    args.out_dir.mkdir(parents=True, exist_ok=True)
    messages = visible_messages(args.source)

    stem = f"{args.archive_id.lower()}-codex-{args.thread_id}"
    message_path = args.out_dir / f"{stem}-messages.jsonl"
    transcript_path = args.out_dir / f"{stem}-transcript.txt"
    metrics_json_path = args.out_dir / f"{stem}-metrics.json"
    metrics_text_path = args.out_dir / f"{stem}-metrics.txt"
    manifest_path = args.out_dir / f"{stem}-manifest.json"

    with message_path.open("w", encoding="utf-8") as stream:
        for message in messages:
            stream.write(json.dumps(message, ensure_ascii=False, sort_keys=True) + "\n")

    transcript_path.write_text(
        "\n".join(display_lines(messages, args.archive_id, args.thread_id)) + "\n",
        encoding="utf-8",
    )

    messages_hash = sha256(message_path)
    transcript_hash = sha256(transcript_path)
    metrics = session_metrics(
        args.source,
        messages,
        args.archive_id,
        args.thread_id,
        messages_hash,
        transcript_hash,
    )
    metrics_json_path.write_text(
        json.dumps(metrics, ensure_ascii=False, indent=2, sort_keys=True) + "\n",
        encoding="utf-8",
    )
    metrics_text_path.write_text(metrics_text(metrics), encoding="utf-8")

    manifest = {
        "archive_id": args.archive_id,
        "thread_id": args.thread_id,
        "source_filename": ", ".join(source.name for source in args.source),
        "message_count": len(messages),
        "exported_through_utc": metrics["exported_through_utc"],
        "messages_sha256": messages_hash,
        "transcript_sha256": transcript_hash,
        "metrics_json_sha256": sha256(metrics_json_path),
        "metrics_text_sha256": sha256(metrics_text_path),
    }
    manifest_path.write_text(
        json.dumps(manifest, ensure_ascii=False, indent=2, sort_keys=True) + "\n",
        encoding="utf-8",
    )

    print(json.dumps(manifest, ensure_ascii=False))


if __name__ == "__main__":
    main()
