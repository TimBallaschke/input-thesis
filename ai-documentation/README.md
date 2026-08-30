# AI Collaboration Documentation

This directory documents the use of text-generating AI in the production of the Master's thesis *Input*.

## Why this exists

The HFBK guidelines require the complete communication with a text-generating AI to be submitted in a separate file when AI output is used in the thesis. Verbatim and paraphrased AI-derived passages must cite that documentation with page and line references, and the documentation must appear in the bibliography.

Official guideline: <https://hfbk-hamburg.de/media/pages/downloads/e3c1c3b7ec-1770132046/leitfaden_ai.pdf>

## Documentation layers

1. `archive/*-messages.jsonl` is the exact machine-readable record of visible user and assistant messages.
2. `archive/*-transcript.txt` is a deterministic, line-numbered presentation generated from a message archive or preserved text attachment, including externally supplied feedback when it materially influences a passage.
3. `archive/*-metrics.json` and `archive/*-metrics.txt` record a reproducible session snapshot: timestamps, visible message statistics, runtime identifiers, cumulative platform token accounting, top-level tool-call records and archive hashes.
4. `PROCESS_LOG.md` records readable, atomic production events and relevant tool data.
5. `PROCESS_METRICS.md` adds bounded elapsed-time and token deltas where reliable process boundaries are available.
6. `USAGE_REGISTER.md` records where and how AI output influenced the thesis.
7. `PASSAGE_REGISTER.md` connects stable `TXT-###` passage IDs to process, AI and source records.
8. `WORK_LOG.md` summarizes administrative, technical and research actions.
9. `documentation.tex` turns the line-numbered transcript and technical metadata into the citable PDF submitted with the thesis.

Internal reasoning, hidden system instructions and raw tool telemetry are not part of the human-AI communication and are not included. Visible progress updates from the assistant are included. Quantitative reasoning-token counts may be retained as metadata, but never the hidden reasoning content.

## Quantitative metadata rule

- Transcript timestamps are UTC; readable process records may additionally show `Europe/Berlin` local time with its UTC offset.
- Elapsed process time means wall-clock span between declared visible boundaries. It is not a measure of uninterrupted human or machine labour.
- Cached input tokens are included in input tokens.
- Reasoning output tokens are included in output tokens; only their number is retained.
- Platform token accounting includes repeated context and technical overhead and therefore cannot be equated with visible text length.
- Token counts must not be presented as monetary cost, energy use or carbon emissions without a separate, methodologically supported calculation.
- Tool calls are summarized quantitatively and described semantically in `PROCESS_LOG.md`; raw payloads remain excluded.

## Working protocol

1. Synchronize the conversation archive at the end of each substantial work session.
2. Never edit generated files in `archive/` manually; regenerate them from the Codex session log.
3. Capture reliable process start and end boundaries and add their elapsed-time and token deltas to `PROCESS_METRICS.md`.
4. Give every thesis passage derived from AI an `AI-###` entry in `USAGE_REGISTER.md`.
5. Give every substantive thesis passage a stable `TXT-###` entry in `PASSAGE_REGISTER.md`.
6. Record every materially relevant action as a `P-####` event and connect it to `TXT-###` when applicable.
7. Mark whether AI use is verbatim, paraphrase, translation, conceptual, structural, editorial or technical.
8. Verify substantive claims against primary or scholarly sources; AI documentation does not replace those sources.
9. Add `\aidocref{archive}{page}{line range}` directly after every verbatim or paraphrased AI-derived passage.
10. Rebuild the documentation PDF after archive synchronization and update page references if necessary.
11. Treat a substantial source-evaluation or drafting batch as incomplete until its `PROCESS_LOG.md` and `WORK_LOG.md` entries exist, the current Codex archive is synchronized and the documentation PDF has been rebuilt and checked.

## Standing compliance rule

From 30 August 2026 onward, documentation closure is part of the work itself,
not a deferred housekeeping step. Before the next substantive source batch or
drafting passage begins, verify that the preceding batch is represented in the
readable logs, the machine-derived communication archive and the current PDF.
If a session ends before that closure is possible, the first action on resuming
is to complete the missing documentation before continuing the research or
writing workflow.

## Finalization

Before submission, perform one final archive synchronization, build the PDF, verify every `AI-###` entry, and confirm that each page-and-line citation matches the final documentation PDF.
