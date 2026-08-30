#!/usr/bin/env python3
"""Calculate bounded process metrics from a local Codex session log."""

from __future__ import annotations

import argparse
from collections import Counter
from datetime import datetime
import json
from pathlib import Path
from zoneinfo import ZoneInfo


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser()
    parser.add_argument("--source", required=True, type=Path)
    parser.add_argument("--process-id", required=True)
    parser.add_argument("--start-utc", required=True)
    parser.add_argument("--end-utc", required=True)
    parser.add_argument("--timezone", default="Europe/Berlin")
    return parser.parse_args()


def timestamp(value: str) -> datetime:
    return datetime.fromisoformat(value.replace("Z", "+00:00"))


def local_timestamp(value: str, timezone_name: str) -> str:
    return timestamp(value).astimezone(ZoneInfo(timezone_name)).isoformat(
        timespec="milliseconds"
    )


def subtract_usage(end: dict, start: dict) -> dict[str, int | None]:
    fields = [
        "input_tokens",
        "cached_input_tokens",
        "cache_write_input_tokens",
        "output_tokens",
        "reasoning_output_tokens",
        "total_tokens",
    ]
    delta: dict[str, int | None] = {}
    for field in fields:
        start_value = start.get(field)
        end_value = end.get(field)
        delta[field] = (
            end_value - start_value
            if isinstance(start_value, int) and isinstance(end_value, int)
            else None
        )

    input_delta = delta["input_tokens"]
    cached_delta = delta["cached_input_tokens"]
    delta["non_cached_input_tokens_calculated"] = (
        input_delta - cached_delta
        if isinstance(input_delta, int) and isinstance(cached_delta, int)
        else None
    )
    output_delta = delta["output_tokens"]
    reasoning_delta = delta["reasoning_output_tokens"]
    delta["non_reasoning_output_tokens_calculated"] = (
        output_delta - reasoning_delta
        if isinstance(output_delta, int) and isinstance(reasoning_delta, int)
        else None
    )
    return delta


def main() -> None:
    args = parse_args()
    start = timestamp(args.start_utc)
    end = timestamp(args.end_utc)
    if end < start:
        raise ValueError("end timestamp precedes start timestamp")

    token_snapshots: list[tuple[str, datetime, dict]] = []
    tool_calls: Counter[str] = Counter()
    legacy_visible_messages: Counter[str] = Counter()
    completed_item_messages: Counter[str] = Counter()

    with args.source.open(encoding="utf-8") as stream:
        for source_line in stream:
            event = json.loads(source_line)
            event_time_text = event.get("timestamp", "")
            if not event_time_text:
                continue
            event_time = timestamp(event_time_text)
            event_type = event.get("type")
            payload = event.get("payload", {})

            if event_type == "event_msg" and payload.get("type") == "token_count":
                info = payload.get("info")
                if info and info.get("total_token_usage"):
                    token_snapshots.append(
                        (event_time_text, event_time, info["total_token_usage"])
                    )

            if start <= event_time <= end:
                if event_type == "response_item" and payload.get("type") in {
                    "function_call",
                    "custom_tool_call",
                }:
                    tool_calls[payload.get("name", "unknown")] += 1
                elif event_type == "event_msg":
                    payload_type = payload.get("type")
                    if payload_type in {"user_message", "agent_message"}:
                        legacy_visible_messages[payload_type] += 1
                    elif payload_type == "item_completed":
                        item = payload.get("item", {})
                        item_type = item.get("type") if isinstance(item, dict) else None
                        if item_type in {"UserMessage", "AgentMessage"}:
                            completed_item_messages[item_type] += 1

    baseline = next(
        (snapshot for snapshot in reversed(token_snapshots) if snapshot[1] < start),
        None,
    )
    end_snapshot = next(
        (snapshot for snapshot in token_snapshots if snapshot[1] >= end),
        None,
    )
    if baseline is None or end_snapshot is None:
        raise ValueError("token snapshots do not bracket the requested process")

    if legacy_visible_messages:
        visible_user = legacy_visible_messages.get("user_message", 0)
        visible_assistant = legacy_visible_messages.get("agent_message", 0)
    else:
        visible_user = completed_item_messages.get("UserMessage", 0)
        visible_assistant = completed_item_messages.get("AgentMessage", 0)

    result = {
        "process_id": args.process_id,
        "boundary_method": "visible start/end timestamps; cumulative token snapshots immediately before and after",
        "start_utc": args.start_utc,
        "end_utc": args.end_utc,
        "start_local": local_timestamp(args.start_utc, args.timezone),
        "end_local": local_timestamp(args.end_utc, args.timezone),
        "timezone": args.timezone,
        "elapsed_seconds": round((end - start).total_seconds(), 3),
        "baseline_token_snapshot_utc": baseline[0],
        "end_token_snapshot_utc": end_snapshot[0],
        "token_delta": subtract_usage(end_snapshot[2], baseline[2]),
        "top_level_tool_call_records": {
            "total": sum(tool_calls.values()),
            "by_name": dict(sorted(tool_calls.items())),
        },
        "visible_messages_in_span": {
            "user": visible_user,
            "assistant": visible_assistant,
        },
        "interpretation_notes": [
            "Elapsed time is wall-clock span, not active human or machine labor time.",
            "Token delta includes repeated context and technical overhead during the bounded span.",
            "Cached input is a subset of input; reasoning output is a subset of output.",
            "Only counts are retained; hidden reasoning content is excluded.",
            "Top-level exec records may contain multiple semantic tool operations.",
        ],
    }
    print(json.dumps(result, ensure_ascii=False, indent=2, sort_keys=True))


if __name__ == "__main__":
    main()
