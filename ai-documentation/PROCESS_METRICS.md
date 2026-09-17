# Process Metrics

This register adds quantitative metadata to selected `P-####` events. It does
not replace the readable descriptions in `PROCESS_LOG.md`.

## Interpretation rules

- Start and end are visible communication boundaries in the Codex task.
- Local timestamps use `Europe/Berlin`; UTC timestamps remain canonical.
- Elapsed time is wall-clock span, not active human or machine labour time.
- Process token use is the change between the cumulative platform snapshot
  immediately before the start and the first snapshot after the end.
- Input tokens include repeated conversation context, system instructions,
  tool schemas and tool results.
- Cached input is a subset of input, not an additional amount.
- Reasoning output is a subset of output. Only its count is retained; hidden
  reasoning content remains excluded.
- Top-level `exec` records can orchestrate several semantic tool operations.
  The readable operations are documented in `PROCESS_LOG.md`.
- Token figures are not treated as visible word counts, monetary cost, energy
  consumption or carbon emissions.
- Historical processes are not assigned precise metrics when their boundaries
  overlap or cannot be reconstructed reliably.

## P-0022 — Preliminary analysis of Shneiderman (1983)

- Start UTC: `2026-07-26T14:15:59.776Z`
- End UTC: `2026-07-26T14:27:58.533Z`
- Start local: `2026-07-26T16:15:59.776+02:00`
- End local: `2026-07-26T16:27:58.533+02:00`
- Elapsed wall-clock span: `00:11:58.757`
- Boundary: user request to completed visible final answer
- Baseline token snapshot UTC: `2026-07-26T14:15:14.444Z`
- End token snapshot UTC: `2026-07-26T14:27:58.537Z`
- Input-token delta: `2,469,372`
- Cached-input subset: `2,305,792`
- Non-cached input, calculated: `163,580`
- Output-token delta: `11,352`
- Reasoning-output subset: `3,884`
- Non-reasoning output, calculated: `7,468`
- Total-token delta: `2,480,724`
- Top-level tool-call records: `20 exec`
- Visible messages in span: `1 user`, `4 assistant`
- Calculation script: `scripts/extract_process_metrics.py`

The large input figure results primarily from repeated processing of the
growing task context. It must not be read as 2.47 million newly written words.

## P-0075 — Mediated text-entry source screening

- Start UTC: `2026-08-19T08:24:23.547Z`
- End UTC: `2026-08-19T08:30:20.953Z`
- Start local: `2026-08-19T10:24:23.547+02:00`
- End local: `2026-08-19T10:30:20.953+02:00`
- Elapsed wall-clock span: `00:05:57.406`
- Boundary: user request to completed visible research and documentation update
- Baseline token snapshot UTC: `2026-08-19T08:23:24.066Z`
- End token snapshot UTC: `2026-08-19T08:30:24.773Z`
- Input-token delta: `2,567,148`
- Cached-input subset: `2,428,416`
- Non-cached input, calculated: `138,732`
- Output-token delta: `15,558`
- Reasoning-output subset: `4,125`
- Non-reasoning output, calculated: `11,433`
- Total-token delta: `2,582,706`
- Top-level tool-call records: `21 exec`
- Visible messages in span: `1 user`, `5 assistant`
- Calculation script: `scripts/extract_process_metrics.py`

The input figure includes repeated processing of the accumulated project
context, tool schemas and research results. It must not be interpreted as the
quantity of newly written source notes or as resource consumption by itself.

## P-0076 — Mediated text-entry import preparation

- Start UTC: `2026-08-19T08:37:52.629Z`
- End UTC: `2026-08-19T08:42:22.092Z`
- Start local: `2026-08-19T10:37:52.629+02:00`
- End local: `2026-08-19T10:42:22.092+02:00`
- Elapsed wall-clock span: `00:04:29.463`
- Boundary: user approval through completed bibliographic preparation
- Baseline token snapshot UTC: `2026-08-19T08:33:16.715Z`
- End token snapshot UTC: `2026-08-19T08:42:24.186Z`
- Input-token delta: `2,188,933`
- Cached-input subset: `2,130,688`
- Non-cached input, calculated: `58,245`
- Output-token delta: `10,190`
- Reasoning-output subset: `1,734`
- Non-reasoning output, calculated: `8,456`
- Total-token delta: `2,199,123`
- Top-level tool-call records: `11 exec`
- Visible messages in span: `1 user`, `5 assistant`
- Calculation script: `scripts/extract_process_metrics.py`

The input figure includes repeated processing of the accumulated project
context, tool schemas and bibliographic verification results. It must not be
interpreted as newly written content or as resource consumption by itself.

## P-0077 — C-020 Zotero import and citation verification

- Start UTC: `2026-08-19T08:49:05.230Z`
- End UTC: `2026-08-19T08:49:42.586Z`
- Start local: `2026-08-19T10:49:05.230+02:00`
- End local: `2026-08-19T10:49:42.586+02:00`
- Elapsed wall-clock span: `00:00:37.356`
- Boundary: user collection confirmation through completed import verification
- Baseline token snapshot UTC: `2026-08-19T08:45:57.225Z`
- End token snapshot UTC: `2026-08-19T08:49:44.783Z`
- Input-token delta: `422,560`
- Cached-input subset: `414,464`
- Non-cached input, calculated: `8,096`
- Output-token delta: `1,592`
- Reasoning-output subset: `473`
- Non-reasoning output, calculated: `1,119`
- Total-token delta: `424,152`
- Top-level tool-call records: `5 exec`
- Visible messages in span: `1 user`, `3 assistant`
- Calculation script: `scripts/extract_process_metrics.py`

The input figure includes repeated processing of the accumulated project
context, tool schemas and Zotero verification results. It must not be
interpreted as newly written content or as resource consumption by itself.

## P-0078 — C-021 Zotero import and citation verification

- Start UTC: `2026-08-19T08:53:19.086Z`
- End UTC: `2026-08-19T08:53:59.388Z`
- Start local: `2026-08-19T10:53:19.086+02:00`
- End local: `2026-08-19T10:53:59.388+02:00`
- Elapsed wall-clock span: `00:00:40.302`
- Boundary: user collection confirmation through completed import verification
- Baseline token snapshot UTC: `2026-08-19T08:52:47.454Z`
- End token snapshot UTC: `2026-08-19T08:54:29.728Z`
- Input-token delta: `639,564`
- Cached-input subset: `632,576`
- Non-cached input, calculated: `6,988`
- Output-token delta: `2,901`
- Reasoning-output subset: `176`
- Non-reasoning output, calculated: `2,725`
- Total-token delta: `642,465`
- Top-level tool-call records: `5 exec`
- Visible messages in span: `1 user`, `3 assistant`
- Calculation script: `scripts/extract_process_metrics.py`

The input figure includes repeated processing of the accumulated project
context, tool schemas and Zotero verification results. It must not be
interpreted as newly written content or as resource consumption by itself.

## P-0079 — C-022–C-024 Zotero import and citation verification

- Start UTC: `2026-08-19T08:57:55.852Z`
- End UTC: `2026-08-19T08:59:18.409Z`
- Start local: `2026-08-19T10:57:55.852+02:00`
- End local: `2026-08-19T10:59:18.409+02:00`
- Elapsed wall-clock span: `00:01:22.557`
- Boundary: user collection confirmation through completed three-record import verification
- Baseline token snapshot UTC: `2026-08-19T08:57:14.523Z`
- End token snapshot UTC: `2026-08-19T09:00:02.920Z`
- Input-token delta: `1,201,465`
- Cached-input subset: `1,186,304`
- Non-cached input, calculated: `15,161`
- Output-token delta: `5,180`
- Reasoning-output subset: `393`
- Non-reasoning output, calculated: `4,787`
- Total-token delta: `1,206,645`
- Top-level tool-call records: `8 exec`
- Visible messages in span: `1 user`, `3 assistant`
- Calculation script: `scripts/extract_process_metrics.py`

The input figure includes repeated processing of the accumulated project
context, tool schemas and Zotero verification results. It must not be
interpreted as newly written content or as resource consumption by itself.

## P-0080 — C-025 Zotero import and package completion

- Start UTC: `2026-08-19T09:03:02.907Z`
- End UTC: `2026-08-19T09:03:47.536Z`
- Start local: `2026-08-19T11:03:02.907+02:00`
- End local: `2026-08-19T11:03:47.536+02:00`
- Elapsed wall-clock span: `00:00:44.629`
- Boundary: user collection confirmation through completed import verification
- Baseline token snapshot UTC: `2026-08-19T09:02:33.810Z`
- End token snapshot UTC: `2026-08-19T09:03:50.159Z`
- Input-token delta: `977,680`
- Cached-input subset: `969,984`
- Non-cached input, calculated: `7,696`
- Output-token delta: `1,345`
- Reasoning-output subset: `119`
- Non-reasoning output, calculated: `1,226`
- Total-token delta: `979,025`
- Top-level tool-call records: `5 exec`
- Visible messages in span: `1 user`, `3 assistant`
- Calculation script: `scripts/extract_process_metrics.py`

The input figure includes repeated processing of the accumulated project
context, tool schemas and Zotero verification results. It must not be
interpreted as newly written content or as resource consumption by itself.

## P-0081 — Corpus audit, C-021 analysis and provisional methods framework

- Start UTC: `2026-08-19T09:07:39.547Z`
- End UTC: `2026-08-19T09:13:15.071Z`
- Start local: `2026-08-19T11:07:39.547+02:00`
- End local: `2026-08-19T11:13:15.071+02:00`
- Elapsed wall-clock span: `00:05:35.524`
- Boundary: user approval through completed visible research and methods update
- Baseline token snapshot UTC: `2026-08-19T09:06:51.781Z`
- End token snapshot UTC: `2026-08-19T09:13:17.753Z`
- Input-token delta: `2,813,037`
- Cached-input subset: `2,689,664`
- Non-cached input, calculated: `123,373`
- Output-token delta: `11,817`
- Reasoning-output subset: `1,900`
- Non-reasoning output, calculated: `9,917`
- Total-token delta: `2,824,854`
- Top-level tool-call records: `20 exec`
- Visible messages in span: `1 user`, `6 assistant`
- Calculation script: `scripts/extract_process_metrics.py`

The input figure includes repeated processing of the accumulated project
context, tool schemas, full article text and local research files. It must not
be interpreted as newly written content, monetary cost, energy use or resource
consumption by itself.

## P-0082 — C-020 analysis and browser-event methods refinement

- Start UTC: `2026-08-19T09:21:51.884Z`
- End UTC: `2026-08-19T09:26:30.365Z`
- Start local: `2026-08-19T11:21:51.884+02:00`
- End local: `2026-08-19T11:26:30.365+02:00`
- Elapsed wall-clock span: `00:04:38.481`
- Boundary: user continuation request through completed visible source and methods update
- Baseline token snapshot UTC: `2026-08-19T09:18:16.411Z`
- End token snapshot UTC: `2026-08-19T09:26:33.910Z`
- Input-token delta: `2,243,977`
- Cached-input subset: `2,187,392`
- Non-cached input, calculated: `56,585`
- Output-token delta: `13,374`
- Reasoning-output subset: `2,715`
- Non-reasoning output, calculated: `10,659`
- Total-token delta: `2,257,351`
- Top-level tool-call records: `12 exec`
- Visible messages in span: `1 user`, `4 assistant`
- Calculation script: `scripts/extract_process_metrics.py`

The input figure includes repeated processing of the accumulated project
context, tool schemas, local research files and the full W3C specification. It
must not be interpreted as newly written content, monetary cost, energy use or
resource consumption by itself.

## P-0083 — C-022 analysis and assistance-cost methods refinement

- Start UTC: `2026-08-19T09:31:19.321Z`
- End UTC: `2026-08-19T09:43:47.219Z`
- Start local: `2026-08-19T11:31:19.321+02:00`
- End local: `2026-08-19T11:43:47.219+02:00`
- Elapsed wall-clock span: `00:12:27.898`
- Boundary: user continuation request through completed visible source and methods update
- Baseline token snapshot UTC: `2026-08-19T09:30:12.269Z`
- End token snapshot UTC: `2026-08-19T09:43:50.656Z`
- Input-token delta: `6,089,344`
- Cached-input subset: `5,868,416`
- Non-cached input, calculated: `220,928`
- Output-token delta: `25,672`
- Reasoning-output subset: `5,184`
- Non-reasoning output, calculated: `20,488`
- Total-token delta: `6,115,016`
- Top-level tool-call records: `64 exec`
- Visible messages in span: `1 user`, `5 assistant`
- Calculation script: `scripts/extract_process_metrics.py`

The input figure includes repeated processing of the accumulated project
context, tool schemas, local research files, the Zotero record, official web
records and the full six-page article. It must not be interpreted as newly
written content, monetary cost, energy use or resource consumption by itself.

## P-0084 — C-023 analysis and multilingual method correction

- Start UTC: `2026-08-19T09:50:24.058Z`
- End UTC: `2026-08-19T09:57:38.321Z`
- Start local: `2026-08-19T11:50:24.058+02:00`
- End local: `2026-08-19T11:57:38.321+02:00`
- Elapsed wall-clock span: `00:07:14.263`
- Boundary: user continuation request through completed visible source and methods update
- Baseline token snapshot UTC: `2026-08-19T09:49:12.144Z`
- End token snapshot UTC: `2026-08-19T09:57:41.712Z`
- Input-token delta: `1,607,732`
- Cached-input subset: `1,479,040`
- Non-cached input, calculated: `128,692`
- Output-token delta: `17,391`
- Reasoning-output subset: `1,001`
- Non-reasoning output, calculated: `16,390`
- Total-token delta: `1,625,123`
- Top-level tool-call records: `20 exec`
- Visible messages in span: `1 user`, `5 assistant`
- Calculation script: `scripts/extract_process_metrics.py`

The input figure includes repeated processing of the accumulated project
context, tool schemas, local research files, Zotero and official web records,
the full 27-page report and rendered page images. It must not be interpreted as
newly written content, monetary cost, energy use or resource consumption by
itself.

## P-0085 — C-024 analysis and embodied/optimization method correction

- Start UTC: `2026-08-19T10:04:03.436Z`
- End UTC: `2026-08-19T10:12:30.098Z`
- Start local: `2026-08-19T12:04:03.436+02:00`
- End local: `2026-08-19T12:12:30.098+02:00`
- Elapsed wall-clock span: `00:08:26.662`
- Boundary: user continuation request through completed visible source and methods update
- Baseline token snapshot UTC: `2026-08-19T10:01:41.854Z`
- End token snapshot UTC: `2026-08-19T10:12:36.131Z`
- Input-token delta: `3,068,915`
- Cached-input subset: `2,927,744`
- Non-cached input, calculated: `141,171`
- Output-token delta: `19,712`
- Reasoning-output subset: `1,947`
- Non-reasoning output, calculated: `17,765`
- Total-token delta: `3,088,627`
- Top-level tool-call records: `24 exec`
- Visible messages in span: `1 user`, `7 assistant`
- Calculation script: `scripts/extract_process_metrics.py`

The input figure includes repeated processing of the accumulated project
context, tool schemas, local research files, Zotero and official web records,
the full ten-page paper and rendered page images. It must not be interpreted as
newly written content, monetary cost, energy use or resource consumption by
itself.

## P-0086 — C-025 analysis and consequence/labour method correction

- Start UTC: `2026-08-19T10:28:36.973Z`
- End UTC: `2026-08-19T10:39:00.508Z`
- Start local: `2026-08-19T12:28:36.973+02:00`
- End local: `2026-08-19T12:39:00.508+02:00`
- Elapsed wall-clock span: `00:10:23.535`
- Boundary: user continuation request through completed visible source and methods update
- Baseline token snapshot UTC: `2026-08-19T10:16:59.897Z`
- End token snapshot UTC: `2026-08-19T10:39:08.733Z`
- Input-token delta: `4,799,155`
- Cached-input subset: `4,680,064`
- Non-cached input, calculated: `119,091`
- Output-token delta: `27,382`
- Reasoning-output subset: `5,574`
- Non-reasoning output, calculated: `21,808`
- Total-token delta: `4,826,537`
- Top-level tool-call records: `27 exec`
- Visible messages in span: `1 user`, `7 assistant`
- Calculation script: `scripts/extract_process_metrics.py`

The input figure includes repeated processing of the accumulated project
context, tool schemas, local research files, Zotero and official/author web
records, the complete four-page report, rendered page images and the disclosure
comparison copy. It must not be interpreted as newly written content, monetary
cost, energy use or resource consumption by itself.

## P-0087 — C-020–C-025 bounded comparison and modular method audit

- Start UTC: `2026-08-19T10:46:46.848Z`
- End UTC: `2026-08-19T10:54:13.168Z`
- Start local: `2026-08-19T12:46:46.848+02:00`
- End local: `2026-08-19T12:54:13.168+02:00`
- Elapsed wall-clock span: `00:07:26.320`
- Boundary: user comparison request through completed visible matrix, method and research-status update
- Baseline token snapshot UTC: `2026-08-19T10:44:52.040Z`
- End token snapshot UTC: `2026-08-19T10:54:15.478Z`
- Input-token delta: `2,287,221`
- Cached-input subset: `2,192,896`
- Non-cached input, calculated: `94,325`
- Output-token delta: `21,857`
- Reasoning-output subset: `5,409`
- Non-reasoning output, calculated: `16,448`
- Total-token delta: `2,309,078`
- Top-level tool-call records: `21 exec`
- Visible messages in span: `1 user`, `4 assistant`
- Calculation script: `scripts/extract_process_metrics.py`

The input figure includes repeated processing of the accumulated project
context, tool schemas, the six complete source notes, earlier comparison
matrices, the active methods concept and research-status files. It must not be
interpreted as newly written content, monetary cost, energy use or resource
consumption by itself.

## P-0088 — bounded networked-text-input source screening

- Start UTC: `2026-08-19T11:17:22.181Z`
- End UTC: `2026-08-19T11:28:50.053Z`
- Start local: `2026-08-19T13:17:22.181+02:00`
- End local: `2026-08-19T13:28:50.053+02:00`
- Elapsed wall-clock span: `00:11:27.872`
- Boundary: user request through completed shortlist and documentation update
- Baseline token snapshot UTC: `2026-08-19T11:12:55.571Z`
- End token snapshot UTC: `2026-08-19T11:28:50.053Z`
- Input-token delta: `7,515,532`
- Cached-input subset: `7,259,008`
- Non-cached input, calculated: `256,524`
- Output-token delta: `24,355`
- Reasoning-output subset: `7,531`
- Non-reasoning output, calculated: `16,824`
- Total-token delta: `7,539,887`
- Top-level tool-call records: `53 exec`
- Visible messages in span: `1 user`, `5 assistant`
- Calculation script: `scripts/extract_process_metrics.py`

The input figure includes repeated processing of the accumulated project
context, tool schemas, local research files, Zotero and official, publisher,
standards and author web records. It must not be interpreted as newly written
content, monetary cost, energy use or resource consumption by itself.

## P-0089 — networked-source analysis and research-question workshop

- Start UTC: `2026-08-19T11:37:01.802Z`
- End UTC: `2026-08-19T11:56:22.640Z`
- Start local: `2026-08-19T13:37:01.802+02:00`
- End local: `2026-08-19T13:56:22.640+02:00`
- Elapsed wall-clock span: `00:19:20.838`
- Boundary: user corpus/import request through corrected PDF build
- Baseline token snapshot UTC: `2026-08-19T11:32:05.586Z`
- End token snapshot UTC: `2026-08-19T11:56:22.644Z`
- Input-token delta: `8,854,661`
- Cached-input subset: `8,602,240`
- Non-cached input, calculated: `252,421`
- Output-token delta: `48,830`
- Reasoning-output subset: `8,857`
- Non-reasoning output, calculated: `39,973`
- Total-token delta: `8,903,491`
- Top-level tool-call records: `62 exec`
- Visible messages in span: `1 user`, `9 assistant`
- Calculation script: `scripts/extract_process_metrics.py`

The input figure includes repeated processing of the accumulated project
context, tool schemas, Zotero and web metadata, local research files, complete
source texts and rendered page images. It must not be interpreted as newly
written content, monetary cost, energy use or resource consumption by itself.

## P-0090 — C-026–C-032 Zotero import and bibliographic verification

- Start UTC: `2026-08-19T12:05:43.015Z`
- End UTC: `2026-08-19T12:09:19.009Z`
- Start local: `2026-08-19T14:05:43.015+02:00`
- End local: `2026-08-19T14:09:19.009+02:00`
- Elapsed wall-clock span: `00:03:35.994`
- Boundary: user confirmation through verified import and records
- Baseline token snapshot UTC: `2026-08-19T12:04:37.346Z`
- End token snapshot UTC: `2026-08-19T12:09:21.010Z`
- Input-token delta: `1,545,471`
- Cached-input subset: `1,488,384`
- Non-cached input, calculated: `57,087`
- Output-token delta: `10,356`
- Reasoning-output subset: `1,246`
- Non-reasoning output, calculated: `9,110`
- Total-token delta: `1,555,827`
- Top-level tool-call records: `14 exec`
- Visible messages in span: `1 user`, `5 assistant`
- Calculation script: `scripts/extract_process_metrics.py`

The input figure includes repeated processing of the accumulated project
context, tool schemas, Zotero responses, item-level BibTeX records and local
research/documentation files. It must not be interpreted as newly written
content, monetary cost, energy use or resource consumption by itself.

## P-0091 — Option 0 scope decision and C-015 close reading

- Start UTC: `2026-08-19T12:28:43.762Z`
- End UTC: `2026-08-19T12:38:04.176Z`
- Start local: `2026-08-19T14:28:43.762+02:00`
- End local: `2026-08-19T14:38:04.176+02:00`
- Elapsed wall-clock span: `00:09:20.414`
- Boundary: user authorization to continue through visible completion of the C-015 source analysis and transition to documentation
- Baseline token snapshot UTC: `2026-08-19T12:28:01.214Z`
- End token snapshot UTC: `2026-08-19T12:38:06.023Z`
- Input-token delta: `4,786,871`
- Cached-input subset: `4,632,832`
- Non-cached input, calculated: `154,039`
- Output-token delta: `21,397`
- Reasoning-output subset: `2,838`
- Non-reasoning output, calculated: `18,559`
- Total-token delta: `4,808,268`
- Top-level tool-call records: `33 exec`
- Visible messages in span: `1 user`, `6 assistant`
- Calculation script: `scripts/extract_process_metrics.py`

The input figure includes repeated processing of the accumulated project
context, tool schemas, the official HTML snapshot, Zotero results and local
research files. The top-level `exec` count includes orchestrated read, search,
hashing, extraction and file-edit operations. The figures must not be
interpreted as newly written content, monetary cost, energy use or resource
consumption by themselves.

## P-0092 — C-016 authentication close reading

- Start UTC: `2026-08-19T12:52:29.314Z`
- End UTC: `2026-08-19T13:05:48.793Z`
- Start local: `2026-08-19T14:52:29.314+02:00`
- End local: `2026-08-19T15:05:48.793+02:00`
- Elapsed wall-clock span: `00:13:19.479`
- Boundary: user authorization to continue through visible completion of the C-016 source analysis and transition to documentation
- Baseline token snapshot UTC: `2026-08-19T12:43:07.593Z`
- End token snapshot UTC: `2026-08-19T13:05:51.411Z`
- Input-token delta: `11,143,645`
- Cached-input subset: `10,909,696`
- Non-cached input, calculated: `233,949`
- Output-token delta: `24,335`
- Reasoning-output subset: `5,448`
- Non-reasoning output, calculated: `18,887`
- Total-token delta: `11,167,980`
- Top-level tool-call records: `76 exec`
- Visible messages in span: `1 user`, `9 assistant`
- Calculation script: `scripts/extract_process_metrics.py`

The input figure includes repeated processing of the accumulated project
context, tool schemas, Zotero results, official repository and publisher
metadata, complete eReader page text, DOM snapshots, screenshots and local
research files. The top-level `exec` records orchestrated Zotero checks, web
discovery, browser navigation, page inspection, shell diagnostics, file edits,
planning and archive work; they are not equivalent to 76 independent research
decisions. The figures must not be interpreted as newly written content,
monetary cost, energy use or resource consumption by themselves.

## P-0093 — C-017 empirical web-form close reading

- Start UTC: `2026-08-19T13:15:10.000Z`
- End UTC: `2026-08-19T13:24:05.035Z`
- Start local: `2026-08-19T15:15:10.000+02:00`
- End local: `2026-08-19T15:24:05.035+02:00`
- Elapsed wall-clock span: `00:08:55.035`
- Boundary: user authorization to continue through visible completion of the C-017 source analysis and transition to documentation
- Baseline token snapshot UTC: `2026-08-19T13:11:23.800Z`
- End token snapshot UTC: `2026-08-19T13:24:07.266Z`
- Input-token delta: `5,693,570`
- Cached-input subset: `5,557,504`
- Non-cached input, calculated: `136,066`
- Output-token delta: `17,470`
- Reasoning-output subset: `3,145`
- Non-reasoning output, calculated: `14,325`
- Total-token delta: `5,711,040`
- Top-level tool-call records: `39 exec`
- Visible messages in span: `1 user`, `8 assistant`
- Calculation script: `scripts/extract_process_metrics.py`

The input figure includes repeated processing of the accumulated project
context, tool schemas, Zotero results, official Google Research and ACM/eReader
content, complete PDF text, rendered page images and local research files. The
top-level `exec` records orchestrated Zotero checks, web discovery, browser
navigation and download, PDF hashing/extraction/rendering, full-page visual
inspection, file edits, planning and archive work; they are not equivalent to
39 independent research decisions. The figures must not be interpreted as
newly written content, monetary cost, energy use or resource consumption by
themselves.

## P-0094 — C-018 contemporary web-form ecology close reading

- Start UTC: `2026-08-19T13:48:24.793Z`
- End UTC: `2026-08-19T13:56:00.004Z`
- Start local: `2026-08-19T15:48:24.793+02:00`
- End local: `2026-08-19T15:56:00.004+02:00`
- Elapsed wall-clock span: `00:07:35.211`
- Boundary: user authorization to continue through visible completion of the C-018 source analysis and transition to documentation
- Baseline token snapshot UTC: `2026-08-19T13:31:53.507Z`
- End token snapshot UTC: `2026-08-19T13:56:02.246Z`
- Input-token delta: `3,778,829`
- Cached-input subset: `3,610,752`
- Non-cached input, calculated: `168,077`
- Output-token delta: `15,523`
- Reasoning-output subset: `1,358`
- Non-reasoning output, calculated: `14,165`
- Total-token delta: `3,794,352`
- Top-level tool-call records: `28 exec`
- Visible messages in span: `1 user`, `8 assistant`
- Calculation script: `scripts/extract_process_metrics.py`

The input figure includes repeated processing of the accumulated project
context, tool schemas, Zotero results, official PoPETs metadata, complete PDF
text, rendered page images and local research files. The top-level `exec`
records orchestrated Zotero checks, official-source discovery and retrieval,
PDF hashing/extraction/rendering, full-page visual inspection, file edits,
planning and archive work; they are not equivalent to 28 independent research
decisions. The figures must not be interpreted as newly written content,
monetary cost, energy use or resource consumption by themselves.

## P-0095 — C-019 classification-infrastructure access and bounded reading

- Start UTC: `2026-08-19T14:08:41.799Z`
- End UTC: `2026-08-19T14:20:10.990Z`
- Start local: `2026-08-19T16:08:41.799+02:00`
- End local: `2026-08-19T16:20:10.990+02:00`
- Elapsed wall-clock span: `00:11:29.191`
- Boundary: user authorization to continue through visible completion of the
  C-019 source analysis and transition to documentation
- Baseline token snapshot UTC: `2026-08-19T14:04:14.131Z`
- End token snapshot UTC: `2026-08-19T14:20:14.161Z`
- Input-token delta: `7,936,981`
- Cached-input subset: `7,659,776`
- Non-cached input, calculated: `277,205`
- Output-token delta: `23,501`
- Reasoning-output subset: `4,757`
- Non-reasoning output, calculated: `18,744`
- Total-token delta: `7,960,482`
- Top-level tool-call records: `56 exec`
- Visible messages in span: `1 user`, `8 assistant`

- Calculation script: `scripts/extract_process_metrics.py`

The input figure includes repeated processing of the accumulated project
context, system and tool instructions, Zotero results, browser and library
catalogues, the authorized author page, PDF content, rendered images and local
research files. Cached input is included in input; reasoning output is included
in output, but hidden reasoning content is not recorded. The 56 top-level
`exec` records orchestrated multiple semantic operations and are not equivalent
to 56 independent research decisions. These figures are not visible word counts
and do not by themselves establish monetary cost, energy use, carbon emissions
or resource waste.

## P-0096 — C-015–C-019 forms/credentials comparison

- Start UTC: `2026-08-19T14:29:10.541Z`
- End UTC: `2026-08-19T14:35:39.688Z`
- Start local: `2026-08-19T16:29:10.541+02:00`
- End local: `2026-08-19T16:35:39.688+02:00`
- Elapsed wall-clock span: `00:06:29.147`
- Boundary: user authorization to continue with the comparison matrix through
  visible completion of the matrix and synchronized research-status files
- Baseline token snapshot UTC: `2026-08-19T14:26:05.855Z`
- End token snapshot UTC: `2026-08-19T14:35:43.431Z`
- Input-token delta: `1,305,280`
- Cached-input subset: `1,207,168`
- Non-cached input, calculated: `98,112`
- Output-token delta: `16,194`
- Reasoning-output subset: `1,311`
- Non-reasoning output, calculated: `14,883`
- Total-token delta: `1,321,474`
- Top-level tool-call records: `16 exec`
- Visible messages in span: `1 user`, `3 assistant`
- Calculation script: `scripts/extract_process_metrics.py`

The input figure includes repeated processing of the accumulated project
context, system and tool instructions, five complete source notes, existing
comparison matrices and local research/status files. Cached input is included
in input; reasoning output is included in output, but hidden reasoning content
is not recorded. The 16 top-level `exec` records include file inspection,
planning, structured edits, archive export and metrics work; they are not
equivalent to 16 independent research decisions. These figures are not visible
word counts and do not by themselves establish monetary cost, energy use,
carbon emissions or resource waste.

## P-0097 — Provisional source-based chapter architecture

- Start UTC: `2026-08-19T14:46:59.770Z`
- End UTC: `2026-08-19T14:51:15.767Z`
- Start local: `2026-08-19T16:46:59.770+02:00`
- End local: `2026-08-19T16:51:15.767+02:00`
- Elapsed wall-clock span: `00:04:15.997`
- Boundary: user authorization to create a chapter structure through visible
  completion of the structure and synchronized research-status files
- Baseline token snapshot UTC: `2026-08-19T14:42:18.354Z`
- End token snapshot UTC: `2026-08-19T14:51:21.479Z`
- Input-token delta: `2,307,672`
- Cached-input subset: `2,256,000`
- Non-cached input, calculated: `51,672`
- Output-token delta: `12,962`
- Reasoning-output subset: `3,242`
- Non-reasoning output, calculated: `9,720`
- Total-token delta: `2,320,634`
- Top-level tool-call records: `10 exec`
- Visible messages in span: `1 user`, `3 assistant`
- Calculation script: `scripts/extract_process_metrics.py`

The input figure includes repeated processing of the accumulated project
context, system and tool instructions, the LaTeX scaffold, project brief,
comparison matrices, method concept, research-question workshop and status
files. Cached input is included in input; reasoning output is included in
output, but hidden reasoning content is not recorded. The 10 top-level `exec`
records include file inspection, planning, structured edits, validation,
archive export and metrics work; they are not equivalent to 10 independent
research decisions. These figures are not visible word counts and do not by
themselves establish monetary cost, energy use, carbon emissions or resource
waste.

## P-0098 — Blind critical-agent review of chapter structure

- Start UTC: `2026-08-19T15:24:56.883Z`
- End UTC: `2026-08-19T15:28:05.599Z`
- Start local: `2026-08-19T17:24:56.883+02:00`
- End local: `2026-08-19T17:28:05.599+02:00`
- Elapsed wall-clock span: `00:03:08.716`
- Boundary: user authorization to consult a second agent step by step through
  presentation of its completed unedited blind review
- Baseline token snapshot UTC: `2026-08-19T15:23:16.114Z`
- End token snapshot UTC: `2026-08-19T15:28:05.632Z`
- Input-token delta: `174,244`
- Cached-input subset: `167,424`
- Non-cached input, calculated: `6,820`
- Output-token delta: `4,322`
- Reasoning-output subset: `778`
- Non-reasoning output, calculated: `3,544`
- Total-token delta: `178,566`
- Top-level tool-call records: `1 spawn_agent`, `1 wait_agent`
- Visible messages in span: `1 user`, `3 assistant`
- Calculation script: `scripts/extract_process_metrics.py`

The second agent received no inherited conversation turns and was constrained
to read only the chapter structure and formal project frame. No model override
was set, so the fresh view came from context isolation rather than model
diversity; the exact inherited deployment variant was not exposed. The input
figure includes repeated context and technical overhead. Cached input is
included in input; reasoning output is included in output, but hidden reasoning
content is not recorded. These figures are not visible word counts and do not
by themselves establish monetary cost, energy use, carbon emissions or
resource waste.

## P-0099 — Complete source overview and status reconciliation

- Start UTC: `2026-08-19T16:15:16.840Z`
- End UTC: `2026-08-19T16:21:04.933Z`
- Start local: `2026-08-19T18:15:16.840+02:00`
- End local: `2026-08-19T18:21:04.933+02:00`
- Elapsed wall-clock span: `00:05:48.093`
- Boundary: user request for an overview of all sources through visible
  completion, validation and correction of the Zotero inventory count
- Baseline token snapshot UTC: `2026-08-19T15:42:42.666Z`
- End token snapshot UTC: `2026-08-19T16:21:13.300Z`
- Input-token delta: `2,613,862`
- Cached-input subset: `2,523,648`
- Non-cached input, calculated: `90,214`
- Output-token delta: `17,170`
- Reasoning-output subset: `3,738`
- Non-reasoning output, calculated: `13,432`
- Total-token delta: `2,631,032`
- Top-level tool-call records: `22 exec`
- Visible messages in span: `1 user`, `5 assistant`
- Calculation script: `scripts/extract_process_metrics.py`

The input figure includes repeated processing of the accumulated project
context, system and tool instructions, the Zotero workflow, 40-item inventory,
32-source literature map, source-note and artistic-package files, comparison
and status records. Cached input is included in input; reasoning output is
included in output, but hidden reasoning content is not recorded. The 22
top-level `exec` records include Zotero inspection, local corpus inspection,
structured edits, validation, archive export and metrics work; they are not
equivalent to 22 independent research decisions. These figures are not visible
word counts and do not by themselves establish monetary cost, energy use,
carbon emissions or resource waste.

## P-0100 — Reset to Surface / Interaction / Operation working structure

- Start UTC: `2026-08-19T18:15:03.013Z`
- End UTC: `2026-08-19T18:17:07.954Z`
- Start local: `2026-08-19T20:15:03.013+02:00`
- End local: `2026-08-19T20:17:07.954+02:00`
- Elapsed wall-clock span: `00:02:04.941`
- Boundary: user instruction to replace the current chapter structure through
  visible completion and synchronization of the live status references
- Baseline token snapshot UTC: `2026-08-19T18:06:12.309Z`
- End token snapshot UTC: `2026-08-19T18:17:14.541Z`
- Input-token delta: `1,450,240`
- Cached-input subset: `1,421,312`
- Non-cached input, calculated: `28,928`
- Output-token delta: `6,193`
- Reasoning-output subset: `1,114`
- Non-reasoning output, calculated: `5,079`
- Total-token delta: `1,456,433`
- Top-level tool-call records: `6 exec`
- Visible messages in span: `1 user`, `3 assistant`
- Calculation script: `scripts/extract_process_metrics.py`

The input figure includes repeated processing of the accumulated project
context, system and tool instructions, the complete former structure and its
live status references. Cached input is included in input; reasoning output is
included in output, but hidden reasoning content is not recorded. The six
top-level `exec` records include inspection, explicit deletion/recreation,
structured status edits, validation, archive export and metrics work; they are
not equivalent to six independent research decisions. These figures are not
visible word counts and do not by themselves establish monetary cost, energy
use, carbon emissions or resource waste.




## P-0101 — First source-to-area pass: Surface

- Start UTC: `2026-08-19T18:26:00.932Z`
- End UTC: `2026-08-19T18:30:18.649Z`
- Start local: `2026-08-19T20:26:00.932+02:00`
- End local: `2026-08-19T20:30:18.649+02:00`
- Elapsed wall-clock span: `00:04:17.717`
- Boundary: user request to assign sources to the three working areas and
  identify gaps through visible completion of the first Surface-only pass
- Baseline token snapshot UTC: `2026-08-19T18:20:54.618Z`
- End token snapshot UTC: `2026-08-19T18:30:20.477Z`
- Input-token delta: `881,411`
- Cached-input subset: `828,288`
- Non-cached input, calculated: `53,123`
- Output-token delta: `12,898`
- Reasoning-output subset: `3,022`
- Non-reasoning output, calculated: `9,876`
- Total-token delta: `894,309`
- Top-level tool-call records: `11 exec`
- Visible messages in span: `1 user`, `3 assistant`
- Calculation script: `scripts/extract_process_metrics.py`

The input figure includes repeated processing of the accumulated project
context, system and tool instructions, the Zotero workflow, the 40-item live
inventory, all 32 C-source summaries, the three artistic source packages,
working structure, comparison matrices and current status records. Cached input
is included in input; reasoning output is included in output, but hidden
reasoning content is not recorded. The eleven top-level `exec` records include
Zotero readiness and inventory checks, source/status inspection, one failed
structured patch with no resulting file change, successful structured edits,
validation, archive export and metrics work; they are not equivalent to eleven
independent source decisions. These figures are not visible word counts and do
not by themselves establish monetary cost, energy use, carbon emissions or
resource waste.

## P-0102 — Correct Surface scope and source assignment

- Start UTC: `2026-08-19T18:42:03.592Z`
- End UTC: `2026-08-19T18:45:39.937Z`
- Start local: `2026-08-19T20:42:03.592+02:00`
- End local: `2026-08-19T20:45:39.937+02:00`
- Elapsed wall-clock span: `00:03:36.345`
- Boundary: user instruction to correct the over-broad Surface assignment
  through visible completion of the narrowed mapping and status synchronization
- Baseline token snapshot UTC: `2026-08-19T18:39:58.441Z`
- End token snapshot UTC: `2026-08-19T18:45:44.530Z`
- Input-token delta: `945,725`
- Cached-input subset: `925,440`
- Non-cached input, calculated: `20,285`
- Output-token delta: `11,066`
- Reasoning-output subset: `1,675`
- Non-reasoning output, calculated: `9,391`
- Total-token delta: `956,791`
- Top-level tool-call records: `5 exec`
- Visible messages in span: `1 user`, `2 assistant`
- Calculation script: `scripts/extract_process_metrics.py`

The input figure includes repeated processing of the accumulated project
context, system and tool instructions, the earlier Surface assignment, the
working structure and current planning records. Cached input is included in
input; reasoning output is included in output, but hidden reasoning content is
not recorded. The five top-level `exec` records include inspection, one failed
combined structured patch with no resulting change, explicit deletion,
successful recreation and synchronized edits, and validation. They are not
equivalent to five independent conceptual decisions. These figures are not
visible word counts and do not by themselves establish monetary cost, energy
use, carbon emissions or resource waste.




## P-0103 — Provisionally include C-005 in Surface

- Start UTC: `2026-08-19T19:05:05.098Z`
- End UTC: `2026-08-19T19:06:07.303Z`
- Start local: `2026-08-19T21:05:05.098+02:00`
- End local: `2026-08-19T21:06:07.303+02:00`
- Elapsed wall-clock span: `00:01:02.205`
- Boundary: user decision to retain C-005 provisionally for formal analysis
  through visible completion and synchronization of the source decision
- Baseline token snapshot UTC: `2026-08-19T18:53:37.213Z`
- End token snapshot UTC: `2026-08-19T19:06:12.014Z`
- Input-token delta: `595,839`
- Cached-input subset: `588,928`
- Non-cached input, calculated: `6,911`
- Output-token delta: `3,165`
- Reasoning-output subset: `510`
- Non-reasoning output, calculated: `2,655`
- Total-token delta: `599,004`
- Top-level tool-call records: `2 exec`
- Visible messages in span: `1 user`, `2 assistant`
- Calculation script: `scripts/extract_process_metrics.py`

The input figure includes repeated processing of the accumulated project
context, system and tool instructions, the corrected Surface mapping and its
current status references. Cached input is included in input; reasoning output
is included in output, but hidden reasoning content is not recorded. The two
top-level `exec` records comprise synchronized structured edits and mechanical
validation; they are not equivalent to two independent source decisions. These
figures are not visible word counts and do not by themselves establish monetary
cost, energy use, carbon emissions or resource waste.




## P-0104 — Assign C-003 to Interaction with limited Surface support

- Start UTC: `2026-08-19T19:29:49.205Z`
- End UTC: `2026-08-19T19:31:52.242Z`
- Start local: `2026-08-19T21:29:49.205+02:00`
- End local: `2026-08-19T21:31:52.242+02:00`
- Elapsed wall-clock span: `00:02:03.037`
- Boundary: Tim's approval of the proposed C-003 assignment through visible
  completion and synchronization of the source decision
- Baseline token snapshot UTC: `2026-08-19T19:24:11.413Z`
- End token snapshot UTC: `2026-08-19T19:31:53.433Z`
- Input-token delta: `764,256`
- Cached-input subset: `717,824`
- Non-cached input, calculated: `46,432`
- Output-token delta: `5,805`
- Reasoning-output subset: `1,517`
- Non-reasoning output, calculated: `4,288`
- Total-token delta: `770,061`
- Top-level tool-call records: `8 exec`
- Visible messages in span: `1 user`, `2 assistant`
- Calculation script: `scripts/extract_process_metrics.py`

The input figure includes repeated processing of the accumulated project
context, system and tool instructions, the C-003 source note, mapping and
current status records. Cached input is included in input; reasoning output is
included in output, but hidden reasoning content is not recorded. The eight
top-level `exec` records include source and status inspection, synchronized
structured edits, validation, archive export and metrics extraction; they are
not equivalent to eight independent source decisions. These figures are not
visible word counts and do not by themselves establish monetary cost, energy
use, carbon emissions or resource waste.




## P-0105 — Add Surface theory candidates and refine the current Surface structure

- Start UTC: `2026-08-27T06:52:49.058Z`
- End UTC: `2026-08-27T06:58:49.719Z`
- Start local: `2026-08-27T08:52:49.058+02:00`
- End local: `2026-08-27T08:58:49.719+02:00`
- Elapsed wall-clock span: `00:06:00.661`
- Boundary: Tim's request to list the three proposed theory sources while
  continuing Surface with existing evidence through visible completion of the
  source-list and structure update
- Baseline token snapshot UTC: `2026-08-27T06:50:57.232Z`
- End token snapshot UTC: `2026-08-27T06:58:53.841Z`
- Input-token delta: `1,504,601`
- Cached-input subset: `1,390,080`
- Non-cached input, calculated: `114,521`
- Output-token delta: `12,228`
- Reasoning-output subset: `2,443`
- Non-reasoning output, calculated: `9,785`
- Total-token delta: `1,516,829`
- Top-level tool-call records: `18 exec`
- Visible messages in span: `1 user`, `4 assistant`
- Calculation script: `scripts/extract_process_metrics.py`

The input figure includes repeated processing of the accumulated project
context, system and tool instructions, source/status records and the revised
Surface mapping. Cached input is included in input; reasoning output is
included in output, but hidden reasoning content is not recorded. The 18
top-level `exec` records include file inspection, structured edits, validation,
archive export, metrics extraction and preparation for PDF production; they
are not equivalent to 18 independent source or structural decisions. These
figures are not visible word counts and do not by themselves establish monetary
cost, energy use, carbon emissions or resource waste.




## P-0106 — Create and verify the Surface working document

- Start UTC: `2026-08-27T07:17:53.451Z`
- End UTC: `2026-08-27T07:22:43.071Z`
- Start local: `2026-08-27T09:17:53.451+02:00`
- End local: `2026-08-27T09:22:43.071+02:00`
- Elapsed wall-clock span: `00:04:49.620`
- Boundary: Tim's request for the agreed Surface summary as a Word document
  through visible completion of the corrected render and structural QA
- Baseline token snapshot UTC: `2026-08-27T07:16:04.003Z`
- End token snapshot UTC: `2026-08-27T07:22:48.311Z`
- Input-token delta: `2,323,887`
- Cached-input subset: `2,260,992`
- Non-cached input, calculated: `62,895`
- Output-token delta: `11,963`
- Reasoning-output subset: `2,865`
- Non-reasoning output, calculated: `9,098`
- Total-token delta: `2,335,850`
- Top-level tool-call records: `13 exec`
- Visible messages in span: `1 user`, `5 assistant`
- Calculation script: `scripts/extract_process_metrics.py`

The input figure includes repeated processing of the accumulated project
context, system and tool instructions, the selected document workflow and the
complete Surface text. Cached input is included in input; reasoning output is
included in output, but hidden reasoning content is not recorded. The 13
top-level `exec` records include dependency and instruction loading, structured
builder edits, DOCX production, rendering, visual inspection, correction,
archive export and metrics extraction; they are not equivalent to 13 separate
content decisions. These figures are not visible word counts and do not by
themselves establish monetary cost, energy use, carbon emissions or resource
waste.




## P-0107 — Reset the active source-evaluation state

- Start UTC: `2026-08-30T08:37:12.188Z`
- End UTC: `2026-08-30T08:42:00.063Z`
- Start local: `2026-08-30T10:37:12.188+02:00`
- End local: `2026-08-30T10:42:00.063+02:00`
- Elapsed wall-clock span: `00:04:47.875`
- Boundary: Tim's first complete reset request through visible confirmation that
  the old source-derived state and exports were moved to recoverable Trash
- Visible messages in span: `2 user`, `11 assistant`
- Token and tool-call deltas: `unavailable`

This task began in one short source segment and continued in a second segment.
The first cumulative token snapshot in the second segment occurs after the
process start, and token accounting reset between the segments. A zero baseline
or subtraction across segments would therefore be misleading. P-0107 retains
its exact visible timestamps, archive trace and qualitative tool record but no
manufactured token or tool-call delta.


## P-0108 — Create the new evaluation guide and corpus audit

- Start UTC: `2026-08-30T08:48:16.067Z`
- End UTC: `2026-08-30T08:58:41.173Z`
- Start local: `2026-08-30T10:48:16.067+02:00`
- End local: `2026-08-30T10:58:41.173+02:00`
- Elapsed wall-clock span: `00:10:25.106`
- Boundary: Tim's Pages-based structure request through visible completion of
  the new guide, 40-record triage and first coverage audit
- Baseline token snapshot UTC: `2026-08-30T08:42:00.115Z`
- End token snapshot UTC: `2026-08-30T08:58:41.267Z`
- Input-token delta: `4,157,731`
- Cached-input subset: `3,997,056`
- Non-cached input, calculated: `160,675`
- Output-token delta: `25,031`
- Reasoning-output subset: `11,468`
- Non-reasoning output, calculated: `13,563`
- Total-token delta: `4,182,762`
- Top-level tool-call records: `33 exec`
- Visible messages in span: `1 user`, `8 assistant`
- Calculation script: `scripts/extract_process_metrics.py`

The span includes Pages extraction, PDF rendering and visual inspection,
corpus/file inventory, triage of the retained records, structured edits and
validation. Input accounting includes repeated project context, tool schemas
and extracted document/source metadata. Cached input is included in input;
reasoning output is included in output, but hidden reasoning content is not
recorded. These figures are not visible word counts and do not by themselves
establish monetary cost, energy use or carbon emissions.


## P-0109 — Remove accessibility from scope and complete the first new source batch

- Start UTC: `2026-08-30T09:02:23.863Z`
- End UTC: `2026-08-30T09:26:53.154Z`
- Start local: `2026-08-30T11:02:23.863+02:00`
- End local: `2026-08-30T11:26:53.154+02:00`
- Elapsed wall-clock span: `00:24:29.291`
- Boundary: Tim's accessibility-scope decision through visible completion and
  validation of the four historical/technical source notes
- Baseline token snapshot UTC: `2026-08-30T08:58:41.267Z`
- End token snapshot UTC: `2026-08-30T09:26:53.302Z`
- Input-token delta: `3,323,699`
- Cached-input subset: `3,181,952`
- Non-cached input, calculated: `141,747`
- Output-token delta: `21,248`
- Reasoning-output subset: `5,349`
- Non-reasoning output, calculated: `15,899`
- Total-token delta: `3,344,947`
- Top-level tool-call records: `28 exec`
- Visible messages in span: `1 user`, `11 assistant`
- Calculation script: `scripts/extract_process_metrics.py`

The elapsed span includes a long interval before the final visible handoff and
must not be read as uninterrupted labour. The top-level records cover scope
edits, complete-text inspection, PDF rendering and visual checks, creation of
four notes, audit synchronization, validation and cleanup. Token figures include
repeated context and source material; they do not represent newly written words,
cost, energy use or emissions.


## P-0110 — Adopt the corpus-first workflow and evaluate two form sources

- Start UTC: `2026-08-30T10:10:09.770Z`
- End UTC: `2026-08-30T10:15:26.027Z`
- Start local: `2026-08-30T12:10:09.770+02:00`
- End local: `2026-08-30T12:15:26.027+02:00`
- Elapsed wall-clock span: `00:05:16.257`
- Boundary: Tim's instruction to evaluate existing sources first through
  visible completion of the Seckler and Cui batch
- Baseline token snapshot UTC: `2026-08-30T09:26:53.302Z`
- End token snapshot UTC: `2026-08-30T10:15:26.098Z`
- Input-token delta: `2,563,593`
- Cached-input subset: `2,476,160`
- Non-cached input, calculated: `87,433`
- Output-token delta: `12,429`
- Reasoning-output subset: `2,722`
- Non-reasoning output, calculated: `9,707`
- Total-token delta: `2,576,022`
- Top-level tool-call records: `15 exec`
- Visible messages in span: `1 user`, `7 assistant`
- Calculation script: `scripts/extract_process_metrics.py`

The span includes the workflow decision, complete reading and visual checking
of two retained PDFs, note creation, audit/project synchronization, validation
and cleanup. The baseline precedes a long gap between visible sessions, but the
reported token delta still reflects only cumulative platform accounting and
repeated context, not active time or visible word production.


## P-0111 — Evaluate the retained prompt-interface pair

- Start UTC: `2026-08-30T10:16:50.807Z`
- End UTC: `2026-08-30T10:24:23.113Z`
- Start local: `2026-08-30T12:16:50.807+02:00`
- End local: `2026-08-30T12:24:23.113+02:00`
- Elapsed wall-clock span: `00:07:32.306`
- Boundary: Tim's continuation request through visible completion and
  validation of the Subramonyam and Zamfirescu-Pereira notes
- Baseline token snapshot UTC: `2026-08-30T10:15:26.098Z`
- End token snapshot UTC: `2026-08-30T10:24:23.205Z`
- Input-token delta: `3,147,317`
- Cached-input subset: `2,973,056`
- Non-cached input, calculated: `174,261`
- Output-token delta: `15,163`
- Reasoning-output subset: `3,644`
- Non-reasoning output, calculated: `11,519`
- Total-token delta: `3,162,480`
- Top-level tool-call records: `28 exec`
- Visible messages in span: `1 user`, `7 assistant`
- Calculation script: `scripts/extract_process_metrics.py`

The top-level records include full-text/PDF inspection, visual QA, source-note
creation, audit/project synchronization, mechanical checks and temporary-file
cleanup. Counts include repeated context, tool instructions and source content;
hidden reasoning content is excluded and the figures do not measure monetary or
environmental impact.


## P-0112 — Evaluate physical and multilingual keyboard input

- Start UTC: `2026-08-30T10:25:05.120Z`
- End UTC: `2026-08-30T10:31:07.846Z`
- Start local: `2026-08-30T12:25:05.120+02:00`
- End local: `2026-08-30T12:31:07.846+02:00`
- Elapsed wall-clock span: `00:06:02.726`
- Boundary: Tim's continuation request through visible completion and
  validation of the Oulasvirta and van Esch notes
- Baseline token snapshot UTC: `2026-08-30T10:24:23.205Z`
- End token snapshot UTC: `2026-08-30T10:31:07.921Z`
- Input-token delta: `3,806,384`
- Cached-input subset: `3,707,392`
- Non-cached input, calculated: `98,992`
- Output-token delta: `13,184`
- Reasoning-output subset: `2,885`
- Non-reasoning output, calculated: `10,299`
- Total-token delta: `3,819,568`
- Top-level tool-call records: `22 exec`
- Visible messages in span: `1 user`, `5 assistant`
- Calculation script: `scripts/extract_process_metrics.py`

The span covers complete source/PDF inspection, visual checks, two new notes,
audit and project-brief synchronization, validation and cleanup. Platform token
counts include repeated context and technical overhead. They are not visible
word counts and do not by themselves establish cost, energy use or emissions.


## P-0113 — Backfill and enforce AI-documentation closure

- Start UTC: `2026-08-30T10:33:19.761Z`
- End UTC: `2026-08-30T10:45:21.929Z`
- Start local: `2026-08-30T12:33:19.761+02:00`
- End local: `2026-08-30T12:45:21.929+02:00`
- Elapsed wall-clock span: `00:12:02.168`
- Boundary: Tim's documentation-audit question through visible confirmation of
  the successful 219-page LuaLaTeX build and visual QA
- Baseline token snapshot UTC: `2026-08-30T10:31:07.921Z`
- End token snapshot UTC: `2026-08-30T10:45:30.369Z`
- Input-token delta: `3,638,909`
- Cached-input subset: `3,464,832`
- Non-cached input, calculated: `174,077`
- Output-token delta: `28,681`
- Reasoning-output subset: `9,351`
- Non-reasoning output, calculated: `19,330`
- Total-token delta: `3,667,590`
- Top-level tool-call records: `33 exec`
- Visible messages in span: `2 user`, `9 assistant`
- Calculation script: `scripts/extract_process_metrics.py`

The records include the compliance audit, task-source inspection, exporter and
metrics-script updates, archive generation, backfilled logs and project rules,
LaTeX integration, one failed XeTeX attempt that produced no PDF, the successful
LuaLaTeX build, metadata/text checks, rendering and visual inspection of every
newly relevant page. A final deterministic archive sync and rebuild follows the
measurement boundary so that the visible completion message and these metrics
are included. Token figures include repeated context, source logs, tool schemas
and rendered images; they are not visible word counts or measures of cost,
energy use or emissions.


## P-0114 — Evaluate reCAPTCHA and the current HTML form pipeline

- Start UTC: `2026-08-30T10:49:41.722Z`
- End UTC: `2026-08-30T10:57:32.660Z`
- Start local: `2026-08-30T12:49:41.722+02:00`
- End local: `2026-08-30T12:57:32.660+02:00`
- Elapsed wall-clock span: `00:07:50.938`
- Boundary: Tim's continuation request through visible completion and
  consistency validation of the reCAPTCHA and WHATWG notes
- Baseline token snapshot UTC: `2026-08-30T10:48:30.481Z`
- End token snapshot UTC: `2026-08-30T10:57:36.178Z`
- Input-token delta: `3,769,059`
- Cached-input subset: `3,603,968`
- Non-cached input, calculated: `165,091`
- Output-token delta: `18,871`
- Reasoning-output subset: `4,871`
- Non-reasoning output, calculated: `14,000`
- Total-token delta: `3,787,930`
- Top-level tool-call records: `28 exec`
- Visible messages in span: `1 user`, `8 assistant`
- Calculation script: `scripts/extract_process_metrics.py`

The span includes corpus-access checking, complete reading and visual inspection
of the four-page reCAPTCHA article, targeted complete reading of the relevant
archived WHATWG form sections, two new source notes, audit/project
synchronization and mechanical validation. It also records the decision not to
use *Input Events Level 2* without a secured local full text. Token counts
include repeated context, tool instructions and source content; they do not
measure visible words, monetary cost, energy use or emissions. A final archive
synchronization and PDF rebuild follows this measurement boundary.


## P-0115 — Evaluate the available Hearst search-interface preview

- Start UTC: `2026-08-30T11:03:06.709Z`
- End UTC: `2026-08-30T11:07:19.430Z`
- Start local: `2026-08-30T13:03:06.709+02:00`
- End local: `2026-08-30T13:07:19.430+02:00`
- Elapsed wall-clock span: `00:04:12.721`
- Boundary: Tim's continuation request through visible completion and
  consistency validation of the bounded Hearst evaluation
- Baseline token snapshot UTC: `2026-08-30T11:02:08.574Z`
- End token snapshot UTC: `2026-08-30T11:07:23.114Z`
- Input-token delta: `3,076,356`
- Cached-input subset: `3,008,512`
- Non-cached input, calculated: `67,844`
- Output-token delta: `11,183`
- Reasoning-output subset: `3,432`
- Non-reasoning output, calculated: `7,751`
- Total-token delta: `3,087,539`
- Top-level tool-call records: `16 exec`
- Visible messages in span: `1 user`, `6 assistant`
- Calculation script: `scripts/extract_process_metrics.py`

The span includes exact preview-scope determination and correction, complete
reading of the available preface and Chapter 1 pages 1–22, rendering and visual
inspection of all 42 PDF pages, a new access-limited source note, audit/project
synchronization and mechanical validation. The missing book content was not
reconstructed from old analyses or newly acquired material. Token counts
include repeated context, tool instructions, source text and rendered-image
handling; they do not measure visible words, monetary cost, energy use or
emissions. A final archive synchronization and PDF rebuild follows this
measurement boundary.


## P-0116 — Evaluate the authorized Bowker and Star excerpt

- Start UTC: `2026-08-30T11:14:15.767Z`
- End UTC: `2026-08-30T11:20:29.785Z`
- Start local: `2026-08-30T13:14:15.767+02:00`
- End local: `2026-08-30T13:20:29.785+02:00`
- Elapsed wall-clock span: `00:06:14.018`
- Boundary: Tim's continuation request through visible completion and
  consistency validation of the bounded Bowker and Star evaluation
- Baseline token snapshot UTC: `2026-08-30T11:11:59.567Z`
- End token snapshot UTC: `2026-08-30T11:20:33.527Z`
- Input-token delta: `2,972,706`
- Cached-input subset: `2,836,480`
- Non-cached input, calculated: `136,226`
- Output-token delta: `15,787`
- Reasoning-output subset: `4,665`
- Non-reasoning output, calculated: `11,122`
- Total-token delta: `2,988,493`
- Top-level tool-call records: `29 exec`
- Visible messages in span: `1 user`, `7 assistant`
- Calculation script: `scripts/extract_process_metrics.py`

The span includes scope and hash verification of the authorized local HTML
snapshot and two-page contents scan, visual inspection of both contents pages,
complete fresh reading of the available Introduction and Chapters 1, 9 and 10,
a new access-limited source note, audit/project synchronization and mechanical
validation. Chapters 2–8 and exact individual print pages were not represented
as read. A historical record was consulted only to restore the snapshot's
canonical provenance URL after the substantive reading; no prior claims or note
were reused. Token counts include repeated context, tool instructions, full
source text and image handling; they do not measure visible words, monetary
cost, energy use or emissions. A final archive synchronization and PDF rebuild
follows this measurement boundary.


## P-0117 — Resolve social-media, messenger-animation and art scope

- Start UTC: `2026-08-30T11:30:16.169Z`
- End UTC: `2026-08-30T11:34:31.289Z`
- Start local: `2026-08-30T13:30:16.169+02:00`
- End local: `2026-08-30T13:34:31.289+02:00`
- Elapsed wall-clock span: `00:04:15.120`
- Boundary: Tim's scope instruction through visible completion and consistency
  validation of the project brief, evaluation guide and corpus audit
- Baseline token snapshot UTC: `2026-08-30T11:24:27.211Z`
- End token snapshot UTC: `2026-08-30T11:34:34.176Z`
- Input-token delta: `2,540,279`
- Cached-input subset: `2,496,512`
- Non-cached input, calculated: `43,767`
- Output-token delta: `12,273`
- Reasoning-output subset: `3,668`
- Non-reasoning output, calculated: `8,605`
- Total-token delta: `2,552,552`
- Top-level tool-call records: `11 exec`
- Visible messages in span: `1 user`, `4 assistant`
- Calculation script: `scripts/extract_process_metrics.py`

The span includes interpretation of the three-dot animation as a visible
typing or answer-status indicator, scope synchronization across the project
brief, mandatory guide and coverage audit, and a complete retriage of the
retained 40-record corpus. Social media, interpersonal messaging as an
independent topic and the artistic corpus are excluded; dialogic human-system
interaction remains in scope. Fourteen completed active evaluations remain
unchanged, while Iftikhar et al. and RFC 3994 are the next bounded comparison
pair. An exact post-boundary check corrected the initially stated exclusion
count from twelve to fifteen; the correction is part of the visible CDX-02
trace and does not alter the scope decision. Token counts include repeated
context and tool instructions; they do not measure visible words, monetary
cost, energy use or emissions. Final log synchronization and PDF rebuilding
follow this measurement boundary.


## P-0118 — Evaluate typing and composition states as a bounded contrast

- Start UTC: `2026-08-30T11:41:23.252Z`
- End UTC: `2026-08-30T11:47:54.985Z`
- Start local: `2026-08-30T13:41:23.252+02:00`
- End local: `2026-08-30T13:47:54.985+02:00`
- Elapsed wall-clock span: `00:06:31.733`
- Boundary: Tim's continuation request through visible completion and
  consistency validation of the two source notes, audit and project brief
- Baseline token snapshot UTC: `2026-08-30T11:39:43.072Z`
- End token snapshot UTC: `2026-08-30T11:48:00.995Z`
- Input-token delta: `3,000,481`
- Cached-input subset: `2,885,760`
- Non-cached input, calculated: `114,721`
- Output-token delta: `17,564`
- Reasoning-output subset: `4,390`
- Non-reasoning output, calculated: `13,174`
- Total-token delta: `3,018,045`
- Top-level tool-call records: `21 exec`
- Visible messages in span: `1 user`, `6 assistant`
- Calculation script: `scripts/extract_process_metrics.py`

The span includes bibliographic and hash verification, complete reading and
visual inspection of all twelve Iftikhar article pages, complete reading of
RFC 3994, two new source notes, audit/project synchronization and mechanical
validation. It records that the three-dot animation was not an experimental
condition, that internally conflicting individual statistics on article page
6 were not adopted, and that RFC 3994 specifies status messages and timers but
no visual rendering. Sixteen active evaluations are now complete; fifteen
scope exclusions remain and Bak Herrie and Zacher Sørensen stay reserve.
Token counts include repeated context, tool instructions, source text and
rendered-image handling; they do not measure visible words, monetary cost,
energy use or emissions. Final archive synchronization and PDF rebuilding
follow this measurement boundary.


## P-0119 — Synthesize the active sources within the existing author structure

- Start UTC: `2026-08-30T11:55:53.778Z`
- End UTC: `2026-08-30T12:04:12.142Z`
- Start local: `2026-08-30T13:55:53.778+02:00`
- End local: `2026-08-30T14:04:12.142+02:00`
- Elapsed wall-clock span: `00:08:18.364`
- Boundary: Tim's approval of the source-to-structure task through visible
  completion and consistency validation of the synthesis, audit and project
  brief
- Baseline token snapshot UTC: `2026-08-30T11:55:24.277Z`
- End token snapshot UTC: `2026-08-30T12:04:13.772Z`
- Input-token delta: `1,882,010`
- Cached-input subset: `1,772,032`
- Non-cached input, calculated: `109,978`
- Output-token delta: `18,796`
- Reasoning-output subset: `4,423`
- Non-reasoning output, calculated: `14,373`
- Total-token delta: `1,900,806`
- Top-level tool-call records: `24 exec`
- Visible messages in span: `1 user`, `5 assistant`
- Calculation script: `scripts/extract_process_metrics.py`

The span includes complete structural extraction of the four-page Pages file,
review of all sixteen active source notes, creation of the source-to-structure
synthesis, synchronization of the coverage audit and project brief, and
mechanical validation of all sixteen note links and cited claim IDs. The
synthesis preserves Tim's existing introduction, historical frame, Surface,
Interaction and Operation structure; it does not reactivate accessibility,
social media, interpersonal messaging as an independent subject or art. Its
twelve cross-source statements remain project syntheses rather than thesis
prose, and weaker claims retain explicit limits. Token counts include repeated
context, tool instructions and full local files; they do not measure visible
words, monetary cost, energy use or emissions. A final archive synchronization
and PDF rebuild follows this measurement boundary.


## P-0120 — Evaluate and integrate the eight previously open sources

- Start UTC: `2026-08-30T12:19:16.641Z`
- End UTC: `2026-08-30T12:42:38.397Z`
- Start local: `2026-08-30T14:19:16.641+02:00`
- End local: `2026-08-30T14:42:38.397+02:00`
- Elapsed wall-clock span: `00:23:21.756`
- Boundary: Tim's instruction to evaluate all eight remaining sources through
  the visible confirmation that the eight notes and integrated research files
  were complete and documentation closure had begun
- Baseline token snapshot UTC: `2026-08-30T12:16:27.108Z`
- End token snapshot UTC: `2026-08-30T12:42:44.681Z`
- Input-token delta: `10,576,163`
- Cached-input subset: `10,174,720`
- Non-cached input, calculated: `401,443`
- Output-token delta: `50,377`
- Reasoning-output subset: `8,499`
- Non-reasoning output, calculated: `41,878`
- Total-token delta: `10,626,540`
- Top-level tool-call records: `89 exec`
- Visible messages in span: `1 user`, `9 assistant`
- Calculation script: `scripts/extract_process_metrics.py`

The span includes lawful-access checks, complete reading and source-note
production for seven sources, an abstract-limited open pre-evaluation for
Carroll, integration into the existing synthesis, audit and project brief, and
the start of mandatory documentation closure. It includes browser-assisted
reading where automated ACM access failed, PDF/text extraction, selected visual
checks and repeated source-status validation. Three author/repository PDFs and
two official or authorized HTML snapshots were retained locally. The source
base now consists of 23 active claim-bearing notes plus Carroll's open note.
Quinn and Zhai close the direct controlled-word-completion evidence gap and the
W3C draft closes the normative editing-event gap only within their stated
limits. Token counts include repeated context, tool instructions and full local
files; they do not measure visible words, monetary cost, energy use or
emissions. Final archive synchronization and PDF production/QA follow this
measurement boundary.


## P-0121 — Add physical-keyboard and dictation evidence for the first Interaction writing test

- Start UTC: `2026-08-30T12:56:29.996Z`
- End UTC: `2026-08-30T13:09:05.546Z`
- Start local: `2026-08-30T14:56:29.996+02:00`
- End local: `2026-08-30T15:09:05.546+02:00`
- Elapsed wall-clock span: `00:12:35.550`
- Boundary: Tim's approval of the two-source addition through completed source
  evaluation, structural integration, validation and the start of final
  documentation production
- Baseline token snapshot UTC: `2026-08-30T12:54:25.914Z`
- End token snapshot UTC: `2026-08-30T13:09:05.576Z`
- Input-token delta: `6,845,816`
- Cached-input subset: `6,619,520`
- Non-cached input, calculated: `226,296`
- Output-token delta: `28,000`
- Reasoning-output subset: `4,266`
- Non-reasoning output, calculated: `23,734`
- Total-token delta: `6,873,816`
- Top-level tool-call records: `55 exec`
- Visible messages in span: `1 user`, `6 assistant`
- Calculation script: `scripts/extract_process_metrics.py`

The span includes official-access and metadata verification, complete reading
of the 12-page Feit et al. and 23-page Ruan et al. articles, full-page PDF
rendering and visual inspection, source hashing, the Feit WPM erratum, two new
source notes with twenty-two bounded claims, one prepared two-record BibTeX
import file, and integration into the synthesis, audit and project brief.
Zotero readiness and duplicate absence were checked, but no library write was
performed because the currently selected collection was unsuitable. The
concrete writing gap is closed for a concise comparison of physical keyboard,
touch and dictation under the documented conditions; free composition and
current in-the-wild dictation remain deferred. No thesis prose was drafted.
Token counts include repeated context, tool instructions, full source text,
rendered images and technical overhead; they do not measure visible words,
monetary cost, energy use or emissions. Final archive synchronization and PDF
production/QA follow this measurement boundary.


## P-0122 — Draft the physical-input section in German

- Start UTC: `2026-08-30T13:13:09.141Z`
- End UTC: `2026-08-30T13:15:36.163Z`
- Start local: `2026-08-30T15:13:09.141+02:00`
- End local: `2026-08-30T15:15:36.163+02:00`
- Elapsed wall-clock span: `00:02:27.022`
- Boundary: Tim's instruction to develop the compact section in German through
  completed drafting, source-limit review, exact word count and integration
  into the current research status
- Baseline token snapshot UTC: `2026-08-30T13:11:46.314Z`
- End token snapshot UTC: `2026-08-30T13:15:36.217Z`
- Input-token delta: `2,682,711`
- Cached-input subset: `2,660,352`
- Non-cached input, calculated: `22,359`
- Output-token delta: `6,108`
- Reasoning-output subset: `2,043`
- Non-reasoning output, calculated: `4,065`
- Total-token delta: `2,688,819`
- Top-level tool-call records: `13 exec`
- Visible messages in span: `1 user`, `2 assistant`
- Calculation script: `scripts/extract_process_metrics.py`

The span includes composition of a 417-word German working draft, mechanical
word counting, verification of all quantitative statements against the active
Feit, Oulasvirta and Ruan notes, an explicit methodological limit from the
MacKenzie/Soukoreff framework, and links from the synthesis and project brief.
The draft remains outside the thesis LaTeX files and has not been translated
or registered as an adopted thesis passage. It introduces no new literature
or claims about free composition, current dictation or LLM operation. Token
counts include repeated context, tool instructions and local source material;
they do not measure visible words, monetary cost, energy use or emissions.
Final archive synchronization and PDF production/QA follow this measurement
boundary.


## P-0123 — Replace immediate drafting with a physical-input source overview

- Start UTC: `2026-08-30T13:23:54.304Z`
- End UTC: `2026-08-30T13:28:43.875Z`
- Start local: `2026-08-30T15:23:54.304+02:00`
- End local: `2026-08-30T15:28:43.875+02:00`
- Elapsed wall-clock span: `00:04:49.571`
- Boundary: Tim's instruction to provide notes and source sections instead of
  immediate prose through completed overview creation, status integration and
  the start of final documentation production
- Baseline token snapshot UTC: `2026-08-30T13:17:58.668Z`
- End token snapshot UTC: `2026-08-30T13:28:52.875Z`
- Input-token delta: `846,903`
- Cached-input subset: `761,984`
- Non-cached input, calculated: `84,919`
- Output-token delta: `11,467`
- Reasoning-output subset: `1,985`
- Non-reasoning output, calculated: `9,482`
- Total-token delta: `858,370`
- Top-level tool-call records: `10 exec`
- Visible messages in span: `1 user`, `3 assistant`
- Calculation script: `scripts/extract_process_metrics.py`

The span includes re-reading the seven relevant evaluated notes, organizing
the four-source core, multilingual context and two transition sources, and
creating a linked overview with exact page/section ranges, paraphrased notes,
Claim IDs, argumentative functions, non-inferences and gap-activation rules.
It also marks the earlier German draft as a superseded historical working
state and updates the synthesis and project brief. No new source, direct
quotation, thesis prose, translation or LaTeX insertion was added. Token
counts include repeated context, tool instructions and local source material;
they do not measure visible words, monetary cost, energy use or emissions.
Final archive synchronization and PDF production/QA follow this measurement
boundary.


## P-0124 — Establish the concise subsection workflow

- Start UTC: `2026-08-30T13:36:32.373Z`
- End UTC: `2026-08-30T13:38:53.053Z`
- Start local: `2026-08-30T15:36:32.373+02:00`
- End local: `2026-08-30T15:38:53.053+02:00`
- Elapsed wall-clock span: `00:02:20.680`
- Boundary: Tim's workflow instruction through completed workflow and compact
  model creation, reference updates, word-count/link validation and the start
  of final documentation production
- Baseline token snapshot UTC: `2026-08-30T13:32:39.148Z`
- End token snapshot UTC: `2026-08-30T13:38:59.090Z`
- Input-token delta: `841,670`
- Cached-input subset: `819,200`
- Non-cached input, calculated: `22,470`
- Output-token delta: `7,135`
- Reasoning-output subset: `2,463`
- Non-reasoning output, calculated: `4,672`
- Total-token delta: `848,805`
- Top-level tool-call records: `5 exec`
- Visible messages in span: `1 user`, `3 assistant`
- Calculation script: `scripts/extract_process_metrics.py`

The span includes formalizing the five-step subsection workflow, creating a
161-word reusable instruction file and a 300-word compact physical-input
model, demoting the earlier detailed overview to background status, and
updating the evaluation guide, synthesis, project brief and draft status.
The workflow limits each subsection overview to three to five movements, one
core statement, one or two necessary source passages per movement and one
explicit source boundary, with a one-page target and author review before
prose. No new source, thesis prose, translation or LaTeX insertion was added.
Token counts include repeated context, tool instructions and local source
material; they do not measure visible words, monetary cost, energy use or
emissions. Final archive synchronization and PDF production/QA follow this
measurement boundary.


## P-0125 — Remove fixed numerical quotas from the subsection workflow

- Start UTC: `2026-08-30T13:57:39.778Z`
- End UTC: `2026-08-30T13:59:02.884Z`
- Start local: `2026-08-30T15:57:39.778+02:00`
- End local: `2026-08-30T15:59:02.884+02:00`
- Elapsed wall-clock span: `00:01:23.106`
- Boundary: Tim's prospective workflow correction through completed rule,
  guide, synthesis and project-brief updates, validation and the start of
  final documentation production
- Baseline token snapshot UTC: `2026-08-30T13:41:28.250Z`
- End token snapshot UTC: `2026-08-30T13:59:10.918Z`
- Input-token delta: `679,810`
- Cached-input subset: `671,744`
- Non-cached input, calculated: `8,066`
- Output-token delta: `2,530`
- Reasoning-output subset: `391`
- Non-reasoning output, calculated: `2,139`
- Total-token delta: `682,340`
- Top-level tool-call records: `3 exec`
- Visible messages in span: `1 user`, `2 assistant`
- Calculation script: `scripts/extract_process_metrics.py`

The span includes replacing fixed movement, passage and page quotas with the
rule that each future overview uses only what its argument and evidence need,
while remaining as short as useful. The workflow, evaluation guide, synthesis
and project brief were synchronized; the completed five-part physical-input
overview was intentionally left unchanged. No source, thesis prose,
translation or LaTeX file was changed. Token counts include repeated context,
tool instructions and local source material; they do not measure visible
words, monetary cost, energy use or emissions. Final archive synchronization
and PDF production/QA follow this measurement boundary.


## P-0126 — Draft the first stepwise Interaction opening

- Start UTC: `2026-08-30T14:05:55.157Z`
- End UTC: `2026-08-30T14:07:16.555Z`
- Start local: `2026-08-30T16:05:55.157+02:00`
- End local: `2026-08-30T16:07:16.555+02:00`
- Elapsed wall-clock span: `00:01:21.398`
- Boundary: Tim's instruction to begin with the `Voraussetzung` row through
  completed three-sentence drafting, source-limit review, word count,
  integration and the start of final documentation production
- Baseline token snapshot UTC: `2026-08-30T14:02:06.757Z`
- End token snapshot UTC: `2026-08-30T14:07:24.273Z`
- Input-token delta: `828,891`
- Cached-input subset: `814,080`
- Non-cached input, calculated: `14,811`
- Output-token delta: `4,326`
- Reasoning-output subset: `1,743`
- Non-reasoning output, calculated: `2,583`
- Total-token delta: `833,217`
- Top-level tool-call records: `3 exec`
- Visible messages in span: `1 user`, `3 assistant`
- Calculation script: `scripts/extract_process_metrics.py`

The span includes re-reading the two bounded source evaluations, drafting a
79-word German opening and recording its exact references, Claim IDs and
limits. The unit establishes physical-mechanical production, visual checking
and correction before separating controlled transcription from free
composition. It is stored in a new stepwise file, linked from the compact
overview, synthesis and project brief, and remains outside the thesis LaTeX
files pending author review. No performance number, new source, translation
or thesis insertion was added. Token counts include repeated context, tool
instructions and local source material; they do not measure visible words,
monetary cost, energy use or emissions. Final archive synchronization and PDF
production/QA follow this measurement boundary.


## P-0127 — Prepare the required-knowledge subsection overview

- Start UTC: `2026-08-30T14:20:42.006Z`
- End UTC: `2026-08-30T14:23:54.346Z`
- Start local: `2026-08-30T16:20:42.006+02:00`
- End local: `2026-08-30T16:23:54.346+02:00`
- Elapsed wall-clock span: `00:03:12.340`
- Boundary: Tim's request for the next subsection overview through completed
  source selection, file validation, integration and the start of final
  documentation production
- Baseline token snapshot UTC: `2026-08-30T14:09:51.024Z`
- End token snapshot UTC: `2026-08-30T14:23:57.921Z`
- Input-token delta: `568,488`
- Cached-input subset: `507,776`
- Non-cached input, calculated: `60,712`
- Output-token delta: `6,455`
- Reasoning-output subset: `1,964`
- Non-reasoning output, calculated: `4,491`
- Total-token delta: `574,943`
- Top-level tool-call records: `7 exec`
- Visible messages in span: `1 user`, `3 assistant`
- Calculation script: `scripts/extract_process_metrics.py`

The span includes re-reading seven evaluated source notes and reducing the next
Interaction subsection to one core claim, six flexible movements and six
compact source rows. The overview links command naming, learned interface
representations, password memory, natural-language ambiguity, query
formulation and prompting while preserving page ranges, Claim IDs and evidence
limits. It concludes that the existing corpus is sufficient for a short
comparison but not for a general ease ranking across input forms. The synthesis
and project brief were synchronized. No new source search, thesis prose,
translation or LaTeX insertion was added. Token counts include repeated
context, tool instructions and local source material; they do not measure
visible words, monetary cost, energy use or emissions. Final archive
synchronization and PDF production/QA follow this measurement boundary.


## P-0128 — Record the authorial writing style

- Start UTC: `2026-08-30T14:35:12.134Z`
- End UTC: `2026-08-30T14:35:50.116Z`
- Start local: `2026-08-30T16:35:12.134+02:00`
- End local: `2026-08-30T16:35:50.116+02:00`
- Elapsed wall-clock span: `00:00:37.982`
- Boundary: Tim's instruction to make the agreed style rules permanent through
  their verified addition to the project brief and the start of final
  documentation production
- Baseline token snapshot UTC: `2026-08-30T14:32:07.581Z`
- End token snapshot UTC: `2026-08-30T14:35:56.815Z`
- Input-token delta: `455,444`
- Cached-input subset: `364,416`
- Non-cached input, calculated: `91,028`
- Output-token delta: `1,802`
- Reasoning-output subset: `549`
- Non-reasoning output, calculated: `1,253`
- Total-token delta: `457,246`
- Top-level tool-call records: `4 exec`
- Visible messages in span: `1 user`, `2 assistant`
- Calculation script: `scripts/extract_process_metrics.py`

The span includes adding a durable authorial-style section to the project
brief. It records sentence length, one-statement focus, concrete description
before interpretation, paragraph movement, verb choice, terminology,
`Text`/technical `String` usage and evidence-bounded generalization. Tim's
physical-input test paragraph remains unchanged as the initial style reference.
No thesis paragraph, source evaluation, translation or LaTeX file was changed.
Token counts include repeated context, tool instructions and local project
material; they do not measure visible words, monetary cost, energy use or
emissions. Final archive synchronization and PDF production/QA follow this
measurement boundary.


## P-0129 — Establish Draft Mode

- Start UTC: `2026-08-30T14:47:34.385Z`
- End UTC: `2026-08-30T14:48:15.235Z`
- Start local: `2026-08-30T16:47:34.385+02:00`
- End local: `2026-08-30T16:48:15.235+02:00`
- Elapsed wall-clock span: `00:00:40.850`
- Boundary: Tim's approval to make Draft Mode permanent through its verified
  addition to the project brief, explicit reactivation and the start of final
  documentation production
- Baseline token snapshot UTC: `2026-08-30T14:47:16.788Z`
- End token snapshot UTC: `2026-08-30T14:48:22.755Z`
- Input-token delta: `610,872`
- Cached-input subset: `603,008`
- Non-cached input, calculated: `7,864`
- Output-token delta: `1,979`
- Reasoning-output subset: `623`
- Non-reasoning output, calculated: `1,356`
- Total-token delta: `612,851`
- Top-level tool-call records: `4 exec`
- Visible messages in span: `1 user`, `2 assistant`
- Calculation script: `scripts/extract_process_metrics.py`

The span includes adding a permanent Draft Mode to the project brief. It
defines activation, deactivation and finalization; keeps rapid wording variants
in chat; suspends per-variant file, research and PDF work; requires advance
notice before operations outside that boundary; and consolidates source checks,
saving, project records, archive export and PDF rebuild when a passage is
finalized. Visible draft exchanges remain available for the later transcript.
The physical-input subsection returned to active Draft Mode after setup. No
thesis prose, source record, translation or thesis LaTeX file was changed.
Token counts include repeated context, tool instructions and local project
material; they do not measure visible words, monetary cost, energy use or
emissions. Final archive synchronization and PDF production/QA follow this
measurement boundary.


## P-0130 — Complete the first Draft Mode text cycle

- Start UTC: `2026-08-30T14:54:09.329Z`
- End UTC: `2026-08-30T15:16:40.839Z`
- Start local: `2026-08-30T16:54:09.329+02:00`
- End local: `2026-08-30T17:16:40.839+02:00`
- Elapsed wall-clock span: `00:22:31.510`
- Boundary: the first wording request after permanent Draft Mode activation
  through author selection, consolidated source checking, saving, project
  integration and the start of final documentation production
- Baseline token snapshot UTC: `2026-08-30T14:50:28.970Z`
- End token snapshot UTC: `2026-08-30T15:16:45.986Z`
- Input-token delta: `2,313,174`
- Cached-input subset: `2,281,472`
- Non-cached input, calculated: `31,702`
- Output-token delta: `11,528`
- Reasoning-output subset: `3,834`
- Non-reasoning output, calculated: `7,694`
- Total-token delta: `2,324,702`
- Top-level tool-call records: `6 exec`
- Visible messages in span: `9 user`, `11 assistant`
- Calculation script: `scripts/extract_process_metrics.py`

The span covers the complete first Draft Mode text cycle. Keyboard,
touchscreen and speech paragraphs were shortened and connected through rapid
chat-only variants without per-variant file or PDF work. A proposed claim about
comparable typing performance was discussed and then removed in favor of the
author's narrower statement about differing strategies. On finalization, the
four source records and their limits were checked in one batch. The only
evidence-driven wording correction changed a broad reference to corrections
into the measured share of correction time in Ruan et al. The resulting
203-word German passage was saved with exact Claim IDs and boundary notes,
linked from the overview, synthesis and project brief, and kept outside the
thesis LaTeX files. Draft Mode is inactive. No new source, translation,
performance number or thesis-LaTeX insertion was added. Token counts include
repeated context, tool instructions and local project material; they do not
measure visible words, monetary cost, energy use or emissions. Final archive
synchronization and PDF production/QA follow this measurement boundary.


## P-0131 — Complete the second Draft Mode text cycle

- Start UTC: `2026-08-30T15:28:46.140Z`
- End UTC: `2026-08-30T16:26:15.518Z`
- Start local: `2026-08-30T17:28:46.140+02:00`
- End local: `2026-08-30T18:26:15.518+02:00`
- Elapsed wall-clock span: `00:57:29.378`
- Boundary: the first request to resume the knowledge-and-competencies
  subsection through author selection, targeted source acquisition,
  consolidated source checking, saving, project integration and the start of
  final documentation production
- Baseline token snapshot UTC: `2026-08-30T15:22:39.372Z`
- End token snapshot UTC: `2026-08-30T16:26:21.947Z`
- Input-token delta: `7,125,557`
- Cached-input subset: `6,908,160`
- Non-cached input, calculated: `217,397`
- Output-token delta: `50,427`
- Reasoning-output subset: `19,147`
- Non-reasoning output, calculated: `31,280`
- Total-token delta: `7,175,984`
- Top-level tool-call records: `37 exec`
- Visible messages in span: `16 user`, `24 assistant`
- Calculation script: `scripts/extract_process_metrics.py`

The span covers the complete second Draft Mode text cycle and its consolidated
closure. It includes author-led revision, discarded variants, source placement,
the narrow POSIX search for a concrete command example, the form contrast and
the author-approved response to external feedback. The supplied feedback was
preserved separately as FDBK-01 with 145 numbered lines. Finalization saved a
433-word German working passage that compares command and syntax knowledge,
query formulation, iterative prompt knowledge and the provision of form data.
The official POSIX HTML was preserved and evaluated only for the `mkdir`
utility syntax and operand. Retrieval of form data from memory, documents or
other systems is explicitly marked as project synthesis rather than a measured
finding. The passage remains outside the thesis LaTeX files, so no `AI-###` or
`TXT-###` entry was assigned. Draft Mode is inactive. Token counts include
repeated context, tool instructions and local project material; they do not
measure visible words, monetary cost, energy use or emissions. Final archive
synchronization and PDF production/QA follow this measurement boundary.


## P-0132 — Complete the third Draft Mode text cycle

- Start UTC: `2026-08-30T16:48:18.761Z`
- End UTC: `2026-08-30T17:14:35.000Z`
- Start local: `2026-08-30T18:48:18.761+02:00`
- End local: `2026-08-30T19:14:35.000+02:00`
- Elapsed wall-clock span: `00:26:16.239`
- Boundary: the first request to continue with correction and editing through
  author selection, consolidated source checking, saving, project integration
  and the start of final documentation production
- Baseline token snapshot UTC: `2026-08-30T16:47:25.555Z`
- End token snapshot UTC: `2026-08-30T17:14:35.880Z`
- Input-token delta: `3,298,790`
- Cached-input subset: `3,165,312`
- Non-cached input, calculated: `133,478`
- Output-token delta: `24,305`
- Reasoning-output subset: `7,783`
- Non-reasoning output, calculated: `16,522`
- Total-token delta: `3,323,095`
- Top-level tool-call records: `26 exec`
- Visible messages in span: `5 user`, `8 assistant`
- Calculation script: `scripts/extract_process_metrics.py`

The span covers the complete third Draft Mode text cycle and its consolidated
closure. It includes the compact source overview, the author's initial draft,
one discarded longer expansion, the return to the established concise style
and the author-approved response to external feedback. The supplied feedback
was preserved byte-identically as FDBK-02 with 140 numbered lines. Finalization
saved a 227-word German working passage that distinguishes content editing from
error correction, locates correction at touch interpretation, visible speech
transcription and form validation, and describes the visible text as a current
state that hides its editing history. The possible use of editing operations to
extend, rearrange or reformulate content is explicitly marked as project
synthesis rather than an empirically measured motive. No new source was added.
The passage remains outside the thesis LaTeX files, so no `AI-###` or `TXT-###`
entry was assigned. Draft Mode is inactive. Token counts include repeated
context, tool instructions and local project material; they do not measure
visible words, monetary cost, energy use or emissions. Final archive
synchronization and PDF production/QA follow this measurement boundary.


## P-0133 — Complete the fourth Draft Mode text cycle

- Start UTC: `2026-08-30T17:21:08.794Z`
- End UTC: `2026-08-30T17:38:00.349Z`
- Start local: `2026-08-30T19:21:08.794+02:00`
- End local: `2026-08-30T19:38:00.349+02:00`
- Elapsed wall-clock span: `00:16:51.555`
- Boundary: the first request to continue with autocomplete and suggestions
  through author selection, consolidated source checking, saving, project
  integration and the start of final documentation production
- Baseline token snapshot UTC: `2026-08-30T17:20:23.458Z`
- End token snapshot UTC: `2026-08-30T17:38:04.114Z`
- Input-token delta: `3,318,833`
- Cached-input subset: `3,031,552`
- Non-cached input, calculated: `287,281`
- Output-token delta: `14,561`
- Reasoning-output subset: `4,225`
- Non-reasoning output, calculated: `10,336`
- Total-token delta: `3,333,394`
- Top-level tool-call records: `18 exec`
- Visible messages in span: `4 user`, `8 assistant`
- Calculation script: `scripts/extract_process_metrics.py`

The span covers the complete fourth Draft Mode text cycle and its consolidated
closure. It includes the compact source overview, the author's initial draft,
the concise source-led expansion and the author-approved response to external
feedback. The supplied feedback was preserved byte-identically as FDBK-03 with
151 numbered lines. Finalization saved a 205-word German working passage. It
uses the controlled Quinn-Zhai task as the only direct effect evidence and
keeps search suggestions, prompt ideas and word-prediction conditions within
their narrower source limits. The proposed stronger claim about intervention
in free formulation was not adopted because the current evidence does not
support it. No new source was added. The passage remains outside the thesis
LaTeX files, so no `AI-###` or `TXT-###` entry was assigned. Draft Mode is
inactive. Token counts include repeated context, tool instructions and local
project material; they do not measure visible words, monetary cost, energy use
or emissions. Final archive synchronization and PDF production/QA follow this
measurement boundary.


## P-0134 — Complete the fifth Draft Mode text cycle

- Start UTC: `2026-08-30T17:43:49.737Z`
- End UTC: `2026-08-30T18:03:48.551Z`
- Start local: `2026-08-30T19:43:49.737+02:00`
- End local: `2026-08-30T20:03:48.551+02:00`
- Elapsed wall-clock span: `00:19:58.814`
- Boundary: the first request to continue with iteration and reformulation
  through author selection, consolidated source checking, saving, project
  integration and the start of final documentation production
- Baseline token snapshot UTC: `2026-08-30T17:42:20.032Z`
- End token snapshot UTC: `2026-08-30T18:03:51.838Z`
- Input-token delta: `4,787,953`
- Cached-input subset: `4,679,680`
- Non-cached input, calculated: `108,273`
- Output-token delta: `23,153`
- Reasoning-output subset: `7,137`
- Non-reasoning output, calculated: `16,016`
- Total-token delta: `4,811,106`
- Top-level tool-call records: `24 exec`
- Visible messages in span: `5 user`, `9 assistant`
- Calculation script: `scripts/extract_process_metrics.py`

The span covers the complete fifth Draft Mode text cycle and its consolidated
closure. It includes the source-led overview, the author's initial draft, the
explicit recovery of Hearst's result-led query refinement, the source-based
expansion and the author-approved response to external feedback. The supplied
feedback was preserved byte-identically as FDBK-04 with 244 numbered lines.
Finalization saved a 337-word German working passage. It distinguishes
iteration from reformulation, separates form correction from search and prompt
reorientation, limits ELIZA to a turn structure and treats local prompt
iteration as a process that does not automatically constitute systematic
improvement. The final source check narrowed the ELIZA page and attached both
the empirical and theoretical sources to the local/few-output conclusion. No
new source was added. The passage remains outside the thesis LaTeX files, so no
`AI-###` or `TXT-###` entry was assigned. Draft Mode is inactive. Token counts
include repeated context, tool instructions and local project material; they
do not measure visible words, monetary cost, energy use or emissions. Final
archive synchronization and PDF production/QA follow this measurement
boundary.


## P-0135 — Create a continuous Pages reading copy

- Start UTC: `2026-08-30T18:11:20.018Z`
- End UTC: `2026-08-30T18:17:35.376Z`
- Start local: `2026-08-30T20:11:20.018+02:00`
- End local: `2026-08-30T20:17:35.376+02:00`
- Elapsed wall-clock span: `00:06:15.358`
- Boundary: the author's request for one continuous Pages document through
  creation, dual-format render inspection and the start of project-record
  maintenance
- Baseline token snapshot UTC: `2026-08-30T18:09:02.821Z`
- End token snapshot UTC: `2026-08-30T18:17:37.163Z`
- Input-token delta: `2,457,914`
- Cached-input subset: `2,346,368`
- Non-cached input, calculated: `111,546`
- Output-token delta: `12,972`
- Reasoning-output subset: `5,651`
- Non-reasoning output, calculated: `7,321`
- Total-token delta: `2,470,886`
- Top-level tool-call records: `35 exec`
- Visible messages in span: `1 user`, `4 assistant`
- Calculation script: `scripts/extract_process_metrics.py`

The span covers extraction of the five author-confirmed Interaction passages,
creation of a neutral A4 reading document, native Pages conversion and complete
visual inspection of both the intermediate DOCX render and the PDF exported by
Pages. The first layout pass exposed an inconsistent running-header treatment;
the header was removed and both formats were regenerated and checked again.
The final file contains the existing 1,403 words of working prose and their
visible citations on five pages while omitting internal source and boundary
notes. No prose, source record, claim status, translation or thesis LaTeX file
was changed. The Pages artifact is a derivative reading copy, so no `AI-###` or
`TXT-###` entry was assigned. Token counts include repeated context, tool
instructions and local project material; they do not measure visible words,
monetary cost, energy use or emissions. Final archive synchronization and PDF
production/QA follow this measurement boundary.


## P-0136 — Critical reframing and three-layer feedback structure

- Start UTC: `2026-09-03T09:41:03.373Z`
- End UTC: `2026-09-03T12:40:01.488Z`
- Start local: `2026-09-03T11:41:03.373+02:00`
- End local: `2026-09-03T14:40:01.488+02:00`
- Elapsed wall-clock span: `02:58:58.115`
- Boundary: the author's initial current-manuscript and critique request through
  visible confirmation that the editorial note, imported conversation and
  readable documentation registers had been updated, before final archive and
  PDF regeneration
- Visible messages in span: `4 user`, `9 assistant`
- Top-level tool-call records: `36 exec`
- Token delta: `unavailable`

The elapsed span includes long intervals between the author's follow-up
messages and is not uninterrupted human or machine labour. The session starts
with the first visible user message before any cumulative token snapshot, so no
valid baseline exists for the complete process. Assigning zero or subtracting
from the first later snapshot would be misleading. The exact timestamps,
visible-message count, archive trace and qualitative tool record are retained
without manufacturing a token delta.

The span covers read-only extraction of the current Pages manuscript, review of
the supplied professor notes and earlier AI conversation, creation and later
expansion of the separate editorial working note, preservation of all four
input cases, and integration of Surface, Interaction and Operation as a
feedback loop. It also covers the byte-identical CGPT-04 preservation, CDX-03
export and project-register updates. The Pages manuscript and thesis LaTeX
files were not changed. The new text remains provisional planning and draft
material, so no `TXT-###` identifier was assigned. Final deterministic archive
synchronization and documentation-PDF production follow this measurement
boundary.


## P-0137 — Critical revision of the physical-input outline

- Start UTC: `2026-09-03T12:51:25.205Z`
- End UTC: `2026-09-03T12:54:37.456Z`
- Start local: `2026-09-03T14:51:25.205+02:00`
- End local: `2026-09-03T14:54:37.456+02:00`
- Elapsed wall-clock span: `00:03:12.251`
- Boundary: user-supplied outline through the visible documentation-workflow
  update after the revised structure and evidence-boundary check
- Baseline token snapshot UTC: `2026-09-03T12:50:32.333Z`
- End token snapshot UTC: `2026-09-03T12:54:39.373Z`
- Input-token delta: `577,678`
- Cached-input subset: `519,296`
- Non-cached input, calculated: `58,382`
- Output-token delta: `7,204`
- Reasoning-output subset: `857`
- Non-reasoning output, calculated: `6,347`
- Total-token delta: `584,882`
- Top-level tool-call records: `7 exec`
- Visible messages in span: `1 user`, `4 assistant`
- Calculation script: `scripts/extract_process_metrics.py`

The token delta includes repeated processing of the accumulated task context,
source-overview material, tool schemas and the new outline. It must not be read
as newly written prose or as resource consumption by itself. The
author-confirmed draft and the Pages manuscript remained unchanged, so no
`TXT-###` identifier was assigned.

## P-0138 — Targeted critical source completion for physical input

- Start UTC: `2026-09-03T13:05:22.110Z`
- End UTC: `2026-09-03T13:24:48.796Z`
- Start local: `2026-09-03T15:05:22.110+02:00`
- End local: `2026-09-03T15:24:48.796+02:00`
- Elapsed wall-clock span: `00:19:26.686`
- Boundary: the author's instruction to obtain the three recommended sources
  through the visible confirmation that they had been critically evaluated,
  integrated into the source/structure records and were ready for final
  documentation closure
- Baseline token snapshot UTC: `2026-09-03T13:03:31.725Z`
- End token snapshot UTC: `2026-09-03T13:24:51.222Z`
- Input-token delta: `12,445,900`
- Cached-input subset: `12,117,504`
- Non-cached input, calculated: `328,396`
- Output-token delta: `41,675`
- Reasoning-output subset: `11,289`
- Non-reasoning output, calculated: `30,386`
- Total-token delta: `12,487,575`
- Top-level tool-call records: `77 exec`
- Visible messages in span: `1 user`, `7 assistant`
- Calculation script: `scripts/extract_process_metrics.py`

The bounded span includes scholarly and institutional web discovery, correction
of one mismatched QWERTY full text, acquisition and hashing of three source
PDFs plus one official XML record, complete text reading, OCR where required,
rendered-page inspection, source-note and BibTeX preparation, and integration
into the project-wide evidence records. Galbraith and Kay are used as a bounded
historical counterposition, Akrich as theory rather than direct HCI evidence,
and Koenecke et al. as evidence of unequal ASR error rates rather than measured
correction work. The token figures include repeated context, tool schemas,
full source texts, OCR and rendered-page data. They do not measure newly written
prose, monetary cost, energy use or emissions. The confirmed Interaction draft
and Pages manuscript remained unchanged, and no `TXT-###` identifier was
assigned.

## P-0139 — Import three evaluated sources into Zotero

- Start UTC: `2026-09-03T13:33:09.408Z`
- End UTC: `2026-09-03T13:36:44.180Z`
- Start local: `2026-09-03T15:33:09.408+02:00`
- End local: `2026-09-03T15:36:44.180+02:00`
- Elapsed wall-clock span: `00:03:34.772`
- Boundary: the author's Zotero-import instruction through the visible
  confirmation that item keys, collection membership, Better BibTeX keys,
  automatic export and source-status records had been verified
- Baseline token snapshot UTC: `2026-09-03T13:32:17.793Z`
- End token snapshot UTC: `2026-09-03T13:36:48.482Z`
- Input-token delta: `3,036,037`
- Cached-input subset: `2,998,400`
- Non-cached input, calculated: `37,637`
- Output-token delta: `8,586`
- Reasoning-output subset: `3,655`
- Non-reasoning output, calculated: `4,931`
- Total-token delta: `3,044,623`
- Top-level tool-call records: `21 exec`
- Visible messages in span: `1 user`, `4 assistant`
- Calculation script: `scripts/extract_process_metrics.py`

The span covers Zotero workflow loading, local API and connector readiness,
duplicate searches, selected-target verification, mechanical splitting of the
prepared BibTeX batch, three separately targeted connector imports, direct
item verification, automatic Better BibTeX export checking and project-status
updates. It created three bibliographic records but no PDF attachments, source
interpretation, thesis prose or `TXT-###` passage. Token figures include
repeated project context, tool schemas and Zotero inventory data; they do not
measure visible prose, monetary cost, energy use or emissions. Final archive
synchronization and documentation-PDF production follow this boundary.

## P-0140 - Two-source selection, recorded retrospectively

- Start UTC: `2026-09-14T08:33:43.003Z`
- End UTC: `2026-09-14T08:39:47.605Z`
- Local span: `10:33:43.003-10:39:47.605`, Europe/Berlin (+02:00)
- Elapsed wall-clock span: `00:06:04.602`
- Baseline token snapshot UTC: `2026-09-14T08:33:34.117Z`
- End token snapshot UTC: `2026-09-14T08:39:47.689Z`
- Input-token delta: `1,588,836`; cached-input subset: `1,498,368`
- Non-cached input, calculated: `90,468`
- Output-token delta: `6,049`; reasoning-output subset: `3,260`
- Non-reasoning output, calculated: `2,789`
- Total-token delta: `1,594,885`
- Top-level tool-call records: `10 exec`
- Visible messages: `1 user`, `4 assistant`
- Calculation script: `scripts/extract_process_metrics.py`

Boundary: source-search instruction through the two-source recommendation.
The later retrospective archive/PDF closure is outside this selection span.
Token accounting is not a measure of visible prose, money or energy.

## P-0141 - Zotero import and knowledge/competence source evaluation

- Start UTC: `2026-09-14T08:46:34.427Z`
- End UTC: `2026-09-14T08:56:19.246Z`
- Local span: `10:46:34.427-10:56:19.246`, Europe/Berlin (+02:00)
- Elapsed wall-clock span: `00:09:44.819`
- Baseline token snapshot UTC: `2026-09-14T08:39:47.689Z`
- End token snapshot UTC: `2026-09-14T08:56:30.440Z`
- Input-token delta: `2,534,508`; cached-input subset: `2,344,832`
- Non-cached input, calculated: `189,676`
- Output-token delta: `16,478`; reasoning-output subset: `2,880`
- Non-reasoning output, calculated: `13,598`
- Total-token delta: `2,550,986`
- Top-level tool-call records: `22 exec`
- Visible messages: `1 user`, `5 assistant`
- Calculation script: `scripts/extract_process_metrics.py`

Boundary: import/evaluation instruction through the saved-results update.
Includes closing the preceding documentation gap, Zotero startup and two
collection-specific imports with PDF attachment checks, formal notes and
project-record updates. Final archive synchronization and PDF production
follow this boundary. Token counts include repeated context and tool output;
they are not visible text length, monetary cost, energy use or emissions.

## P-0142 - Critical subsection discussions (retrospective closure)

- Source: CDX-03 machine session; `scripts/extract_process_metrics.py`
- Visible boundary: `2026-09-14T09:02:01.215Z` to `2026-09-14T10:03:58.197Z`
- Elapsed wall-clock span: `3716.982` seconds, including time between turns
- Input tokens: `2,325,850`; cached-input subset: `1,825,920`
- Non-cached input, calculated: `499,930`
- Output tokens: `18,869`; reasoning-output subset: `7,861`
- Non-reasoning output, calculated: `11,008`; total tokens: `2,344,719`
- Top-level tool records: `11 exec`; visible messages: `6 user`, `12 assistant`

Boundary covers the intervening chat-based outlines and source-gap discussions,
not just one editing operation. It is not active work duration. Documentation
closure itself occurs in the next measured span. Tokens include repeated
context and tools, not just visible prose; they do not measure cost or energy.

## P-0143 - One predictive-text source

- Source: CDX-03 machine session; `scripts/extract_process_metrics.py`
- Visible boundary: `2026-09-14T10:06:15.927Z` to `2026-09-14T10:12:48Z`
- Elapsed wall-clock span: `392.073` seconds
- Input tokens: `1,789,017`; cached-input subset: `1,706,624`
- Non-cached input, calculated: `82,393`
- Output tokens: `10,897`; reasoning-output subset: `2,793`
- Non-reasoning output, calculated: `8,104`; total tokens: `1,799,914`
- Top-level tool records: `14 exec`; visible messages: `1 user`, `5 assistant`

Boundary covers the targeted search, previous-discussion archive closure,
full-text/figure evaluation, source package and overview supplement through the
saved-results update. Final documentation synchronization and PDF verification
follow this boundary. No Zotero write occurred. These accounting values include
repeated context and tool output; they are not word counts, costs or emissions.

## P-0144 - Arnold Zotero integration

- Source: CDX-03 machine session; `scripts/extract_process_metrics.py`
- Visible boundary: `2026-09-14T10:38:29.523Z` to `2026-09-14T10:41:50.208Z`
- Elapsed wall-clock span: `200.685` seconds
- Input tokens: `2,125,088`; cached-input subset: `1,985,152`
- Non-cached input, calculated: `139,936`
- Output tokens: `5,376`; reasoning-output subset: `793`
- Non-reasoning output, calculated: `4,583`; total tokens: `2,130,464`
- Top-level tool records: `10 exec`; visible messages: `1 user`, `4 assistant`

Boundary covers source-note recheck, duplicate/destination checks, one Zotero
import with PDF, metadata and attachment-hash verification, automatic export
and project-status updates. Final PDF production and visual verification follow
this boundary. No new source interpretation or thesis text was produced.
Accounting includes repeated context and tools; it is not visible word count,
monetary cost, energy use or emissions. Elapsed time is not active labor time.

## P-0145 - Interaction editorial and image-idea phase

- Source: CDX-03 machine session; `scripts/extract_process_metrics.py`
- Visible boundary: `2026-09-14T10:49:55.492Z` to `2026-09-14T14:27:30.839Z`
- Elapsed wall-clock span: `13055.347` seconds
- Input tokens: `2,147,341`; cached-input subset: `1,925,248`
- Non-cached input, calculated: `222,093`
- Output tokens: `18,343`; reasoning-output subset: `7,456`
- Non-reasoning output, calculated: `10,887`; total tokens: `2,165,684`
- Top-level tool records: `10 exec`; visible messages: `8 user`, `14 assistant`

This multi-turn boundary includes user pauses between outlines, critical
review, a marked correction variant and image ideas. It is not active work
duration. Attachment preservation and documentation closure occurred on
15 September under P-0146. Token accounting includes repeated context and
technical overhead; it is not visible word count, cost or energy use.

## P-0146 - Author-designated Interaction checkpoint

- Source: CDX-03 machine session; `scripts/extract_process_metrics.py`
- Boundary: `2026-09-15T05:59:52.739Z` to `2026-09-15T06:06:51.170Z`
- Elapsed wall-clock span: `418.431` seconds
- Input tokens: `1,184,399`; cached-input subset: `1,053,184`
- Non-cached input, calculated: `131,215`
- Output tokens: `11,683`; reasoning-output subset: `2,359`
- Non-reasoning output, calculated: `9,324`; total tokens: `1,196,082`
- Top-level tool records: `9 exec`; visible messages: `1 user`, `3 assistant`

Boundary runs from the author's request through checkpoint/status recording
and the first archive export. It includes integrity and hash checks, immutable
copies, scope/authority notes and consolidated documentation records. The
first combined patch failed verification and made no changes; smaller verified
patches were then applied. Final metrics insertion, archive refresh and PDF
production/QA follow this boundary. No manuscript content or Operation
structure was changed. Time is wall-clock span, not active labor; tokens
include context and tools and do not quantify money, energy or emissions.

## P-0147 - Operation structure review and adoption

- Source: CDX-03 machine session; `scripts/extract_process_metrics.py`
- Boundary: `2026-09-15T06:13:08.296Z` to `2026-09-15T06:22:06.768Z`
- Elapsed wall-clock span: `538.472` seconds
- Input tokens: `1,635,881`; cached-input subset: `1,595,648`
- Non-cached input, calculated: `40,233`
- Output tokens: `9,975`; reasoning-output subset: `4,072`
- Non-reasoning output, calculated: `5,903`; total tokens: `1,645,856`
- Top-level tool records: `7 exec`; visible messages: `2 user`, `5 assistant`

The boundary covers the advisory review and the author's subsequent request
to save the four-section outline, through file/status recording and the first
archive export. It includes time between turns, not uninterrupted work. Final
documentation production and verification follow this boundary. No new source
research, scholarly claim evaluation or manuscript edit occurred. Accounting
includes repeated context and technical overhead, not just written text; it
does not measure monetary cost, energy use or emissions.

## P-0148 - Targeted Operation source round

- Source: the resumed CDX-03 machine segment dated 15 September 2026;
  `scripts/extract_process_metrics.py`
- Boundary: `2026-09-15T07:27:13.628Z` to `2026-09-15T07:45:18.623Z`
- Elapsed wall-clock span: `1,084.995` seconds
- Input tokens: `4,253,690`; cached-input subset: `4,029,824`
- Non-cached input, calculated: `223,866`
- Output tokens: `23,879`; reasoning-output subset: `4,438`
- Non-reasoning output, calculated: `19,441`; total tokens: `4,277,569`
- Top-level tool records: `30 exec`; visible messages: `1 user`, `8 assistant`
- Bracketing token snapshots: `2026-09-15T07:26:42.040Z` and
  `2026-09-15T07:45:21.825Z`

This boundary covers the authorized research request through the saved-results
update. Source selection, verified reading, local source packages, five notes,
bibliographic preparation and project/outline/audit changes are included.
The preceding advisory turn is archived and included qualitatively in P-0148,
but excluded from this token delta: the resumed segment has no token snapshot
before that earlier request. The first attempted larger boundary therefore
failed and was not estimated. The complete visible archive combines the old
and resumed session segments using the existing multi-source exporter.
Documentation closure, export checks and PDF build/QA follow the boundary.
Accounting includes repeated context and tools, not just written prose; it is
not a measure of money, energy, emissions or uninterrupted labor.

## P-0149 - GEO and sycophancy: discussion, evaluation and import

- Source: resumed CDX-03 machine segment dated 15 September 2026;
  `scripts/extract_process_metrics.py`
- Boundary: `2026-09-15T07:55:02.181Z` to `2026-09-15T08:15:45.819Z`
- Elapsed wall-clock span: `1,243.638` seconds
- Input tokens: `6,252,810`; cached-input subset: `5,986,304`
- Non-cached input, calculated: `266,506`
- Output tokens: `27,780`; reasoning-output subset: `5,392`
- Non-reasoning output, calculated: `22,388`; total tokens: `6,280,590`
- Top-level tool records: `43 exec`, `1 js`, `1 request_user_input_async`;
  visible messages: `2 user`, `11 assistant`
- Bracketing snapshots: `2026-09-15T07:50:16.624Z` and
  `2026-09-15T08:15:56.235Z`

The boundary covers the preceding advisory question, targeted source checks,
the authorized three-source evaluation/import, source and status files, and
the saved-analysis update. It includes time between turns, not uninterrupted
labor. A narrower import-only boundary was first calculated diagnostically;
the figures above replace it and include the advisory discussion. It includes
source retrieval, bounded reading and figure checks, version reconciliation,
the released GEO prompt-code check and verified local Zotero imports.
The locked-Mac UI path was unnecessary after inspecting and using the normal
local connector session update. No security setting was changed. Final metrics
insertion and PDF build/QA follow this boundary. Accounting includes repeated
context and tools; it measures neither money, energy nor emissions. The archive
contains visible conversation, not the full contents of local AI-analysis
notes; adoption of their wording requires an explicit provenance step.

## P-0150 - Operation bibliography import and readiness clarification

- Source: resumed CDX-03 machine segment dated 15 September 2026;
  `scripts/extract_process_metrics.py`
- Boundary: `2026-09-15T09:15:56.297Z` to `2026-09-15T09:24:25.107Z`
- Elapsed wall-clock span: `508.810` seconds
- Input tokens: `2,554,738`; cached-input subset: `2,406,400`
- Non-cached input, calculated: `148,338`
- Output tokens: `12,663`; reasoning-output subset: `3,447`
- Non-reasoning output, calculated: `9,216`; total tokens: `2,567,401`
- Top-level tool records: `10 exec`; visible messages: `2 user`, `6 assistant`
- Bracketing snapshots: `2026-09-15T08:19:11.258Z` and
  `2026-09-15T09:24:37.014Z`

The boundary includes the preceding readiness discussion and the subsequent
authorized import of eight existing source records. It covers duplicate and
metadata checks, adding existing PDF/HTML attachments, two collection-scoped
import sessions, verifying hashes and automatic export, correcting local
source-management status and one transposed pair of author first names.
The gap between requests is included in elapsed time, not treated as active
labor. No new research or thesis prose was produced. Documentation metrics
insertion and final PDF build/QA follow this boundary. Token counts include
repeated context and tool overhead and do not quantify money, energy or
emissions. The transcript records visible conversation, not all local note
contents or raw tool payloads.

## P-0151 - Operation outline refinement after the source rounds

- Source: resumed CDX-03 machine segment dated 15 September 2026;
  `scripts/extract_process_metrics.py`
- Boundary: `2026-09-15T09:29:58.124Z` to `2026-09-15T09:35:22.414Z`
- Elapsed wall-clock span: `324.290` seconds
- Input tokens: `632,118`; cached-input subset: `594,432`
- Non-cached input, calculated: `37,686`
- Output tokens: `6,874`; reasoning-output subset: `1,106`
- Non-reasoning output, calculated: `5,768`; total tokens: `638,992`
- Top-level tool records: `6 exec`; visible messages: `2 user`, `5 assistant`
- Bracketing snapshots: `2026-09-15T09:29:24.594Z` and
  `2026-09-15T09:35:33.785Z`

This boundary combines the structural review with the authorized saved-outline
revision. It includes time between requests, not uninterrupted labor. Existing
source mappings, project authority and manuscript/bibliography hashes were
checked; no new research or source interpretation was undertaken. A process-log
patch failed context verification without writing and was then corrected.
The saved outline and qualitative documentation updates are inside the boundary;
archive synchronization, metrics insertion and final PDF build/QA follow it.
Accounting includes repeated context and technical overhead and does not quantify
money, energy or emissions. The transcript preserves visible discussion and
progress, not the full local outline artifact or hidden reasoning.

## P-0152 - Operation 1 discussion and author-supplied outline adoption

- Source: resumed CDX-03 machine segment dated 15 September 2026;
  `scripts/extract_process_metrics.py`
- Boundary: `2026-09-15T09:37:49.091Z` to `2026-09-15T10:15:46.410Z`
- Elapsed wall-clock span: `2,277.319` seconds
- Input tokens: `1,343,601`; cached-input subset: `1,299,328`
- Non-cached input, calculated: `44,273`
- Output tokens: `11,697`; reasoning-output subset: `2,993`
- Non-reasoning output, calculated: `8,704`; total tokens: `1,355,298`
- Top-level tool records: `6 exec`; visible messages: `4 user`, `7 assistant`
- Bracketing snapshots: `2026-09-15T09:37:24.336Z` and
  `2026-09-15T10:15:58.978Z`

This boundary includes the initial subsection proposal, the author's criticism
of repetition/triviality, the narrower revision, the supplied final structure
and its verified saving. Waiting between four user turns is included; this is
not uninterrupted labor. Existing source notes were consulted for the initial
outline, but no new research or full-text re-evaluation was undertaken. A
normalized comparison confirmed exact wording of the supplied outline in the
working file, apart from HTML spaces and Markdown whitespace. Project authority
and qualitative logs were updated; source and manuscript hashes are unchanged.
Final archive refresh, metric insertion and PDF build/QA follow the boundary.
The full adopted outline is present in the visible user message, unlike earlier
local-only artifacts. Counts include repeated context and technical overhead;
they do not measure monetary cost, energy use or emissions.

## P-0153 - Research on processing before confirmation

- Source: resumed CDX-03 machine segment dated 15 September 2026;
  `scripts/extract_process_metrics.py`
- Boundary: `2026-09-15T10:39:49.127Z` to `2026-09-15T10:47:42.106Z`
- Elapsed wall-clock span: `472.979` seconds
- Input tokens: `1,798,029`; cached-input subset: `1,683,072`
- Non-cached input, calculated: `114,957`
- Output tokens: `8,356`; reasoning-output subset: `1,743`
- Non-reasoning output, calculated: `6,613`; total tokens: `1,806,385`
- Top-level tool records: `13 exec`; visible messages: `1 user`, `5 assistant`
- Bracketing snapshots: `2026-09-15T10:18:18.417Z` and
  `2026-09-15T10:47:54.676Z`

This boundary covers the current research request, primary-source checking,
six raw-HTML acquisitions, the bounded research memo, project checkpoint and
qualitative logs. The remembered Gmail/password anecdote remains unsubstantiated;
documented alternatives support earlier processing without proving that claim.
The earlier baseline snapshot is the last token record before the new request,
not an extension of the measured wall-clock boundary. Both approved outlines,
the structure Pages document, Interaction checkpoint and bibliography retain
their previous hashes. No Zotero write, manuscript passage or formal corpus
admission. Archive synchronization, metric insertion and PDF build/QA follow
the visible boundary. Counts include repeated context and technical overhead;
they do not measure monetary cost, energy use or emissions.

## P-0154 - Resume timing notes and distinguish personal memory from evidence

- Source: resumed CDX-03 machine segment dated 15 September 2026;
  `scripts/extract_process_metrics.py`
- Boundary: `2026-09-15T10:58:52.543Z` to `2026-09-15T11:01:34.460Z`
- Elapsed wall-clock span: `161.917` seconds
- Input tokens: `431,110`; cached-input subset: `369,408`
- Non-cached input, calculated: `61,702`
- Output tokens: `5,210`; reasoning-output subset: `749`
- Non-reasoning output, calculated: `4,461`; total tokens: `436,320`
- Top-level tool records: `3 exec`; visible messages: `1 user`, `3 assistant`
- Bracketing snapshots: `2026-09-15T10:50:16.704Z` and
  `2026-09-15T11:01:46.963Z`

The boundary covers the request, recovery of the earlier point 6, consultation
of existing research and outlines, saved timing notes, provisional Operation 2
placement and qualitative logs. It does not include new source research,
Zotero changes or adopted prose. The Gmail memory remains a personal research
stimulus, not proof of a technical mechanism or an asserted first-hand
observation. The prior baseline snapshot is the last token record before the
new request and does not extend the wall-clock boundary. Archive sync, metric
insertion and PDF build/QA follow the visible saved-state boundary. Token counts
include repeated context and overhead, not money, energy or emissions.

## P-0155 - Clarify compact scope and confirm timing in Operation 2

- Source: resumed CDX-03 machine segment dated 15 September 2026;
  `scripts/extract_process_metrics.py`
- Boundary: `2026-09-15T11:30:55.149Z` to `2026-09-15T11:38:28.965Z`
- Elapsed wall-clock span: `453.816` seconds
- Input tokens: `845,498`; cached-input subset: `828,416`
- Non-cached input, calculated: `17,082`
- Output tokens: `7,106`; reasoning-output subset: `1,605`
- Non-reasoning output, calculated: `5,501`; total tokens: `852,604`
- Top-level tool records: `2 exec`; visible messages: `4 user`, `6 assistant`
- Bracketing snapshots: `2026-09-15T11:03:57.710Z` and
  `2026-09-15T11:38:44.195Z`

This multi-turn boundary includes the repeated expanded note sequence, the
author's clarification that he meant the original compact point 6, the restored
version, placement advice and authorized saving in Operation 2. It includes
waiting between user turns, not uninterrupted labor. The five-movement variant
is retained only as background. Operation 1, manuscripts and bibliography are
unchanged; no new source research or verification was performed. The earlier
baseline snapshot is the last token record before the boundary, not additional
elapsed working time. Archive sync, metric insertion and PDF build/QA follow
the saved-state boundary. Counts include repeated context and overhead and
must not be interpreted as monetary cost, energy use or emissions.

## P-0156 - Three internal movements and overlap-aware Operation 2 outline

- Source: resumed CDX-03 machine segment dated 15 September 2026;
  `scripts/extract_process_metrics.py`
- Boundary: `2026-09-15T11:42:48.136Z` to `2026-09-15T12:16:38.945Z`
- Elapsed wall-clock span: `2030.809` seconds
- Input tokens: `2,856,445`; cached-input subset: `2,477,184`
- Non-cached input, calculated: `379,261`
- Output tokens: `20,379`; reasoning-output subset: `6,352`
- Non-reasoning output, calculated: `14,027`; total tokens: `2,876,824`
- Top-level tool records: `12 exec`; visible messages: `5 user`, `9 assistant`
- Bracketing snapshots: `2026-09-15T11:40:52.500Z` and
  `2026-09-15T12:16:48.156Z`

This multi-turn boundary covers the first Operation 2 bullet outline, the
author-supplied Operation 1 comparison, the overlap review and revised bullets,
external structural feedback and its authorized adoption. It includes waiting
between user turns, not uninterrupted labor. The current editing turn uses
existing evaluated sources without a new source round or import. The supplied
text is preserved verbatim as DRAFT-03, not approved as source-checked thesis
prose. Hashes confirm unchanged overall-outline sections 1, 3 and 4, separate
Operation 1 outline, structure Pages file, Interaction checkpoint and bibliography.
The prior baseline is the last token snapshot before the boundary, not an
extension of elapsed time. Archive synchronization, metric insertion and PDF
build/QA follow the saved-state boundary. Counts include repeated context and
technical overhead and do not measure monetary cost, energy or emissions.

## P-0157 - Critical Operation 2 revision: interests and decision asymmetry

- Source: resumed CDX-03 machine segment dated 15 September 2026;
  `scripts/extract_process_metrics.py`
- Boundary: `2026-09-15T12:48:23.151Z` to `2026-09-15T13:03:05.161Z`
- Elapsed wall-clock span: `882.010` seconds
- Input tokens: `3,624,828`; cached-input subset: `3,501,696`
- Non-cached input, calculated: `123,132`
- Output tokens: `24,186`; reasoning-output subset: `4,591`
- Non-reasoning output, calculated: `19,595`; total tokens: `3,649,014`
- Top-level tool records: `21 exec`; visible messages: `2 user`, `8 assistant`
- Bracketing snapshots: `2026-09-15T12:20:08.851Z` and
  `2026-09-15T13:03:16.606Z`

This two-turn boundary includes the supplied prose, critical advice and initial
web checks, followed by authorized source evaluation and structural refinement.
It includes the interval between user turns, not uninterrupted labor. Only
specified Gillespie and Alphabet passages were evaluated; the Google article
was read. The proof-copy and missing SEC raw-snapshot limits remain explicit.
Two new notes cover three sources. The unchanged author text is preserved as
DRAFT-04; the earlier outline is retained separately. Hashes confirm unchanged
overall-outline sections 1, 3 and 4, structure Pages, Interaction checkpoint and
bibliography. Zotero was neither re-inventoried nor modified. The prior snapshot
is the last token record before the boundary and does not extend elapsed time.
Archive synchronization, metric insertion and PDF build/QA follow the saved-state
boundary. Counts include repeated context and technical overhead, not monetary
cost, energy use or emissions.

## P-0158 - Whole Operation outline: distinct critical tasks and boundaries

- Source: resumed CDX-03 machine segment dated 15 September 2026;
  `scripts/extract_process_metrics.py`
- Boundary: `2026-09-15T13:07:52.592Z` to `2026-09-15T13:18:25.477Z`
- Elapsed wall-clock span: `632.885` seconds
- Input tokens: `1,186,853`; cached-input subset: `1,116,416`
- Non-cached input, calculated: `70,437`
- Output tokens: `9,117`; reasoning-output subset: `1,642`
- Non-reasoning output, calculated: `7,475`; total tokens: `1,195,970`
- Top-level tool records: `8 exec`; visible messages: `3 user`, `5 assistant`
- Bracketing snapshots: `2026-09-15T13:07:10.019Z` and
  `2026-09-15T13:18:29.253Z`

This three-turn boundary covers the two whole-structure advisory discussions
and the authorized revision through its first saved-state update. The span
includes waiting between user turns, not uninterrupted labor. Four headings,
the short timing opening and three Operation 2 movements remain; sections 1,
3 and 4 receive distinct substructures and cross-topic boundaries. The prior
outline is checkpointed byte-identically. Existing source notes were consulted,
not newly evaluated. Manuscripts, the older separate Operation 1 outline and
bibliography remain unchanged; Zotero was not accessed. Minor status cleanup,
log registration, archive synchronization, metrics and PDF build/QA follow
the boundary. A mistyped source-segment path caused a read-only export failure;
the corrected two-segment command completed. The baseline token snapshot does
not extend elapsed time. Counts include repeated context and technical overhead,
not monetary cost, energy use or emissions.

## P-0159 - Operation drafting, evidence references and preliminary profiles

- Source: resumed CDX-03 machine segment dated 15 September 2026;
  `scripts/extract_process_metrics.py`
- Boundary: `2026-09-15T13:23:55.246Z` to `2026-09-15T14:55:25.373Z`
- Elapsed wall-clock span: `5490.127` seconds
- Input tokens: `4,096,859`; cached-input subset: `3,702,528`
- Non-cached input, calculated: `394,331`
- Output tokens: `23,508`; reasoning-output subset: `10,300`
- Non-reasoning output, calculated: `13,208`; total tokens: `4,120,367`
- Top-level tool records: `17 exec`; visible messages: `10 user`, `20 assistant`
- Bracketing snapshots: `2026-09-15T13:22:35.062Z` and
  `2026-09-15T14:55:25.578Z`

This multi-turn span includes subsection outlines, clarification of the omitted
Command Line and missing citation lines, supplied text and minimal SEO-overlap
revision, then a preliminary source-status discussion about personal inference
and advertising uses. Waiting between user turns is included; elapsed time is
not active labor. Preliminary web records are not a completed source evaluation.
The source-selection request and new close reading belong to P-0160. DRAFT-05
preservation, logs, archive synchronization and PDF closure take place after
this boundary. Manuscripts and bibliography are unchanged. Counts include
repeated context and technical overhead, not monetary cost, energy or emissions.

## P-0160 - Operation 3: personal inference and secondary advertising use

- Source: resumed CDX-03 machine segment dated 15 September 2026;
  `scripts/extract_process_metrics.py`.
- Boundary: `2026-09-15T14:56:44.745Z` to `2026-09-15T15:11:23.242Z`.
- Elapsed wall-clock span: `878.497` seconds.
- Input tokens: `3,785,378`; cached-input subset: `3,560,192`.
- Non-cached input, calculated: `225,186`.
- Output tokens: `18,635`; reasoning-output subset: `2,368`.
- Non-reasoning output, calculated: `16,267`; total tokens: `3,804,013`.
- Top-level tool records: `31 exec`; visible messages: `1 user`, `6 assistant`.
- Bracketing snapshots: `2026-09-15T14:55:25.578Z` and
  `2026-09-15T15:11:33.907Z`.

Boundary includes the required closure of the preceding drafting phase, then
the authorized source acquisition, bounded close reading, evidence mapping
and saved-result update. Staab's real-text experiment and bot simulation are
separate; the FTC complaint and consent order have distinct evidentiary roles.
The public official search.ftc.gov PDFs supplied the local files after www
downloads returned 403. No verification challenge was bypassed. Two notes
cover three primary records, with no bibliography, Zotero or manuscript edits.
Small closure-locator and whitespace corrections are technical overhead.
Later archive synchronization, this metric insertion and final PDF QA follow
the saved-result boundary. The span is not uninterrupted labor; token counts
include repeated context and cannot represent cost, energy or emissions.

## P-0161 - Operation 3 source-backed bullet sequence

- Source: resumed CDX-03 machine segment dated 15 September 2026;
  `scripts/extract_process_metrics.py`.
- Boundary: `2026-09-15T15:14:56.129Z` to `2026-09-15T15:18:00.076Z`.
- Elapsed wall-clock span: `183.947` seconds.
- Input tokens: `1,018,720`; cached-input subset: `852,736`.
- Non-cached input, calculated: `165,984`.
- Output tokens: `6,064`; reasoning-output subset: `1,554`.
- Non-reasoning output, calculated: `4,510`; total tokens: `1,024,784`.
- Top-level tool records: `5 exec`; visible messages: `1 user`, `3 assistant`.
- Bracketing snapshots: `2026-09-15T15:14:19.122Z` and
  `2026-09-15T15:18:31.007Z`.

The boundary covers the request, consultation of existing source notes and
creation of the bullet proposal through the saved-result update. No new
close reading or source admission occurred. Main outline, manuscripts and
bibliography remain unchanged. The API retention case is not activated.
Read-only filename searches returned no matches; this did not affect the
available source notes. Documentation logging, archive synchronization,
metrics insertion and final PDF QA follow the saved-result boundary.
Elapsed time is not uninterrupted labor. Token counts include repeated
context and technical overhead, not monetary cost, energy or emissions.

## P-0162 - Operation 3 scope and balance review

- Source: resumed CDX-03 machine segment dated 15 September 2026;
  `scripts/extract_process_metrics.py`.
- Boundary: `2026-09-15T15:40:28.910Z` to `2026-09-15T15:48:07.483Z`.
- Elapsed wall-clock span: `458.573` seconds.
- Input tokens: `2,120,831`; cached-input subset: `1,997,952`.
- Non-cached input, calculated: `122,879`.
- Output tokens: `8,618`; reasoning-output subset: `2,031`.
- Non-reasoning output, calculated: `6,587`; total tokens: `2,129,449`.
- Top-level tool records: `14 exec`; visible messages: `1 user`, `5 assistant`.
- Bracketing snapshots: `2026-09-15T15:38:49.144Z` and
  `2026-09-15T15:48:16.125Z`.

The span covers the review request through the saved-result update. It includes
comparison with earlier plans, narrow official API-documentation verification,
preservation of DRAFT-06 and creation of the review memo and readable logs.
It does not include an Operation 4 draft. The prior continuation was interrupted
after commentary. A wrong script-name lookup, a failed patch and truncated broad
log searches caused no manuscript or source changes. No new source admission,
Zotero import or approved outline revision occurred. The initial metrics run
used export time; the record above instead uses the actual visible message
boundaries. Archive synchronization, metric insertion and final PDF build/QA
follow the saved-result boundary. Elapsed time is not uninterrupted labor;
token counts include repeated context and overhead, not monetary cost, energy
or emissions.

## P-0163 - Revised Operation 3 bullet sequence

- Source: resumed CDX-03 machine segment dated 15 September 2026;
  `scripts/extract_process_metrics.py`.
- Boundary: `2026-09-15T15:51:11.333Z` to `2026-09-15T15:54:10.756Z`.
- Elapsed wall-clock span: `179.423` seconds.
- Input tokens: `674,291`; cached-input subset: `631,808`.
- Non-cached input, calculated: `42,483`.
- Output tokens: `5,433`; reasoning-output subset: `659`.
- Non-reasoning output, calculated: `4,774`; total tokens: `679,724`.
- Top-level tool records: `5 exec`; visible messages: `1 user`, `3 assistant`.
- Bracketing snapshots: `2026-09-15T15:50:56.080Z` and
  `2026-09-15T15:54:19.262Z`.

The span covers the revised-bullets request through the saved-result update.
It includes consultation of prior plans and source notes, narrow official
API-documentation rechecking, creation of version 02 and readable log updates.
The API storage distinction is activated without a new source admission.
No source import, manuscript edit or overall-outline replacement occurred.
An initially truncated combined note output was followed by a dedicated API
note read. Archive synchronization, metrics insertion and PDF build/QA follow
the saved-result boundary. Elapsed time is not uninterrupted labor; token
counts include repeated context and overhead, not cost, energy or emissions.

## P-0164 - Operation 4 source-backed bullet sequence

- Source: resumed CDX-03 machine segment dated 15 September 2026;
  `scripts/extract_process_metrics.py`.
- Boundary: `2026-09-15T16:12:33.794Z` to `2026-09-15T16:16:20.156Z`.
- Elapsed wall-clock span: `226.362` seconds.
- Input tokens: `967,459`; cached-input subset: `933,376`.
- Non-cached input, calculated: `34,083`.
- Output tokens: `6,596`; reasoning-output subset: `1,532`.
- Non-reasoning output, calculated: `5,064`; total tokens: `974,055`.
- Top-level tool records: `5 exec`; visible messages: `1 user`, `4 assistant`.
- Bracketing snapshots: `2026-09-15T15:57:04.156Z` and
  `2026-09-15T16:16:28.616Z`.

The boundary covers the Operation 4 request through the saved-result update.
It includes consultation of existing source notes, targeted revisiting of
stored FTC/Cheng primary-source text, the five-movement proposal and readable
log updates. No new source admission, product-function verification, import,
manuscript edit or overall-outline replacement occurred. A combined note
output was truncated; the needed Zamfirescu-Pereira note was reread separately.
Archive synchronization, metric insertion and final PDF build/QA follow the
saved-result boundary. Elapsed time is not uninterrupted labor; token counts
include repeated context and overhead, not monetary cost, energy or emissions.

## P-0165 - Targeted physical-input corrections

- Source: resumed CDX-03 machine segment dated 15 September 2026, continuing
  into 16 September; `scripts/extract_process_metrics.py`.
- Boundary: `2026-09-16T05:54:13.374Z` to `2026-09-16T05:58:12.640Z`.
- Elapsed wall-clock span: `239.266` seconds.
- Input tokens: `1,423,867`; cached-input subset: `1,393,024`.
- Non-cached input, calculated: `30,843`.
- Output tokens: `7,326`; reasoning-output subset: `2,900`.
- Non-reasoning output, calculated: `4,426`; total tokens: `1,431,193`.
- Top-level tool records: `6 exec`; visible messages: `1 user`, `4 assistant`.
- Bracketing snapshots: `2026-09-16T05:53:08.111Z` and
  `2026-09-16T05:58:21.940Z`.

The boundary covers the annotated-section request through the saved-result
update. Existing source evaluations informed citation placement; this was not
a new source round or comprehensive audit of all retained claims. The exact
input and annotations were preserved as DRAFT-07 and the five-paragraph marked
proposal retained separately. No Pages, bibliography or Zotero changes occurred.
A search for a date-specific session directory returned no directory; the
existing resumed source segment contains the turn. Combined note output was
partly truncated; needed source rows were retrieved separately. Archive sync,
metric insertion and final PDF build/QA follow the saved-result boundary.
Elapsed time is not uninterrupted labor; token counts include repeated context
and overhead, not monetary cost, energy or emissions.

## P-0166 to P-0168 - Deferred corrections and external-share import

- Recorded on 17 September 2026; current CDX-03 synchronization extends the
  prior 351-message archive without changing those earlier message records.
- P-0166 documents the correction exchanges of 16 September retrospectively.
  Their multi-hour communication span is not presented as active work time.
- P-0167 records the Surface planning/retention exchange on 17 September.
- P-0168 adds 10 separate external share snapshots with 407 visible messages:
  193 user, 191 final assistant and 23 visible assistant progress messages.
- External archive IDs: CGPT-05 through CGPT-14. Source-reported message
  timestamps, retrieval times, counts, omissions and hashes are in each manifest.
- Missing external materials: 13 uploaded files and one linked Word artifact.
- No external token, cost or active work-time figures are available or inferred.
  Provider share-creation dates are not treated as original chat dates.
- The import combines public-page retrieval, deterministic extraction,
  overlap checks, local record updates and PDF generation. The cumulative
  Codex snapshot is retained; no precise cross-chat process-token attribution
  is claimed for this consolidated batch.
- Source: `archive/shared-chat-import-2026-09-17-audit.json` and the associated
  manifests. Model labels are provider metadata, not independently verified.

## Historical coverage note

### P-0169 - Surface audit and Norman evaluation

- Visible boundary: 17 September 2026, 09:32:54.975-09:50:46.242 UTC;
  11:32:54.975-11:50:46.242 Europe/Berlin (UTC+02:00).
- Wall-clock span: 1071.267 seconds, including the interval between advisory
  and approval turns; not active human or machine labour time.
- Three visible user messages and eleven visible assistant messages in this
  span; twenty-one top-level tool-call records (twenty exec, one user question).
- Token-snapshot bounds: 09:12:20.731 and 09:50:59.828 UTC. Delta:
  2,893,821 input, including 2,733,312 cached; 21,662 output, including 5,646
  reasoning tokens; 2,915,483 total. Non-cached input by subtraction: 160,509.
- Counts include repeated context/technical overhead and do not measure
  visible text length, cost, energy use or labour. Hidden reasoning is excluded.
- Source: extract_process_metrics.py, resumed CDX-03 session. Later archive,
  PDF generation and QA are outside this bounded research span.

### P-0170 - Surface effects sources and verified import

- Recorded on 17 September 2026. The associated discussion includes the
  example-selection request at 09:57:02.698 UTC, the effects-source request
  at 10:05:12.917 UTC and the three-source approval at 10:22:14.439 UTC.
- Zotero recorded the three imports at 10:27:04-10:27:24 UTC. The task was
  interrupted before notes/documentation closure. Tim's status question at
  12:36:47.574 UTC resumed work; the saved-notes update is at 12:39:48.197 UTC.
- The gap is not treated as active work. No single uninterrupted labour
  duration or precise process-specific token cost is claimed. The generated
  CDX-03 metrics retain the cumulative session accounting and message counts.
- Snapshot: 541 visible messages, preserving the previous 521 as a prefix.
  The supplied realtime handoff is preserved as received, not represented as
  a complete independently recovered voice transcript.
- Three new bibliographic records and three PDF attachments were verified;
  import hashes match the local source PDFs. No manuscript passage was adopted.
- Later PDF compilation and QA occur after this research/result boundary.

## Historical instrumentation coverage

Quantitative process instrumentation was introduced after `P-0022`. `P-0022`
was backfilled because it has clear single-turn start and end boundaries.
Earlier events retain their dates, archive traces and qualitative tool records;
they will only be backfilled where reliable boundaries can be established.
P-0107 is the first explicit exception recorded after instrumentation: its
visible elapsed boundary is reliable, but a cross-segment token delta is not.
