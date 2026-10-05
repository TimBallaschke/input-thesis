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

## Public shared-chat import, 17 September 2026

Ten user-supplied share links are archived as CGPT-05 through CGPT-14. See
[`SHARED_CHAT_IMPORT_2026-09-17.md`](SHARED_CHAT_IMPORT_2026-09-17.md) for the
title/URL inventory, chapter associations, overlap cross-references and missing
uploads. Exact extracted message text is retained in `*-share-*-messages.jsonl`;
separate manifests record hashes, timestamps, message ranges and exclusions.
The line-numbered display can be regenerated without another network request
using `scripts/import_shared_chats.py --render-only`.

Unlike the earlier supplied text attachments, these records are public page
snapshots with filtered visible communication. Raw page configuration, hidden
reasoning and tool payloads are not retained. Upload metadata is not the file
itself. Import does not establish manuscript adoption or verify source claims.
The explicit import request resumes documentation work previously deferred
during section corrections; the current Codex communication is also synchronized.

## Additional shared chats, 18 September 2026

CGPT-15 (*Eingabemöglichkeit Erklären*, 42 messages) and CGPT-16
(*Einleitung formulieren*, 34 messages) add the Surface and
introduction/conclusion drafting exchanges. See
[`SHARED_CHAT_IMPORT_2026-09-18.md`](SHARED_CHAT_IMPORT_2026-09-18.md) and the
[18 September page map](SHARED_CHAT_PAGE_REFERENCES_2026-09-18.md). Earlier dated page
maps refer to their historical PDF editions. Neither new snapshot indicates
missing attachments; this does not close the previous import's material gaps.

For a later explicitly authorized batch, use repeatable `--share` arguments
and an unused `--start-id` with `scripts/import_shared_chats.py`. Existing ID/URL
assignments and changed snapshots are protected against accidental overwrite.
`scripts/index_shared_chat_batch.py --date YYYY-MM-DD --archive-id CGPT-NN`
produces a separate dated batch index; repeat the archive-ID option as needed.
Run `scripts/verify_shared_chat_pdf.py --date YYYY-MM-DD` after the two-pass PDF
build to verify all imported share lines and generate current page references.
This local import does not itself commit, push or publish the documentation.

## Additional shared chats, 5 October 2026

CGPT-17 (*Abschnitt Überarbeiten*, 4 messages), CGPT-18
(*Schluss überarbeiten*, 2 messages) and CGPT-19
(*Masterthesis umformulieren*, 214 messages) preserve the three further shares
explicitly supplied by Tim. See the
[dated import index](SHARED_CHAT_IMPORT_2026-10-05.md) for provenance, chapter
associations and overlap references and the
[current page map](SHARED_CHAT_PAGE_REFERENCES_2026-10-05.md) for citations.
These snapshots indicate no missing attachments; earlier material gaps remain.
CDX-04 preserves the visible communication for this documentation task.
Chat requests and wording selections are recorded without inferring their
adoption in the manuscript. Earlier archive contents and dated page maps remain
intact; page references must match the PDF edition actually cited.

## Additional browser typesetting edition, 5 October 2026

The [browser typesetting notes](web-typesetting/README.md) describe the separate
Arketa 7 pt/two-column A4 edition of the historical 34 archives, editorial note
and technical metadata. Original archive line numbers remain stable; generated
page positions belong to this new edition. Historical PDF page references are
not rewritten. No PDF was exported in accordance with Tim's browser-only
instruction. A fully loaded print HTML is available for a later requested export.

Thesis subchapter headings link to an initial evidence-candidate register.
Context review and complete manuscript-adoption mapping remain open. CDX-05
preserves a visible-communication snapshot of the current technical typesetting
chat separately, without hidden reasoning/system/tool content; it has not been
appended to the reproduced historical edition. P-0205 / W-223.

P-0206 / W-224 corrects the visible numbering: each actual composed line now
receives its own number without leading zeroes, sequential within each archive.

P-0207 / W-225 shortens all 2,437 visible message headers to number and sender,
for example `164 · Assistant`. Full timestamps and technical phases remain in
the original archives. Body text and plugin composition are preserved; the
593-page edition regenerates printed line numbers and link positions.

P-0208 / W-226 sets the documentation in justified paragraphs through the
unchanged original plugin. Fixed archive wrapping is joined within paragraphs;
character spans retain links to every original line. The new 522-page edition
preserves all message text and regenerates current printed line numbers and
register positions. Browser and fully loaded print HTML are checked; no PDF export.
The candidate register shows those current printed ranges and hit positions;
canonical historical line IDs are retained only as underlying identities.
