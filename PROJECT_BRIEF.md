# Project Brief: Input

## Status

This document records confirmed requirements for the Master's thesis. Items marked as open must be completed when the corresponding official information becomes available.

## Project

- Working title: **Input**
- Institution: HFBK Hamburg
- Degree programme: Bildende Künste, Master of Fine Arts (M.F.A.)
- Focus: Design, artistic focus
- Thesis language: English
- Subject: Text input as an interface and mode of human-computer interaction

## Current thematic direction

### Open research orientation

**Text input as an interface between people and computational systems.**

Open English working formulation: **How does text input operate as an interface between people and computational systems?**

Current scope decision (2026-08-30): Tim retained this formulation without a
networked-communication subquestion. Social media and interpersonal
communication are not thesis subjects. Messenger research may only serve as a
bounded contrast when it directly explains an interface convention reused in
human-system dialogue, such as a typing indicator. Precision will come from
tracing the concrete interface sequence **text entry and editing → system
interpretation or transformation → visible status, feedback, action or
consequence**. Sources are central only when they directly illuminate one or
more parts of this sequence.

On 30 August 2026, all previous active source notes, comparison matrices,
source mappings, shortlists, reading plans and source-derived method and
chapter concepts were reset. They are historical working states and no longer
constitute the thesis's evidence base. The source files, extracted source
texts, import records and bibliography were retained. Every source must be
evaluated anew under the author's new guide before it can support a thesis
claim, comparison or structural decision.

The new evaluation basis is recorded in
[`research/SOURCE_EVALUATION_GUIDE.md`](research/SOURCE_EVALUATION_GUIDE.md).
Its three-part analytical sequence is **Surface -> Interaction -> Operation**.
The initial inventory and gap assessment is recorded in
[`research/SOURCE_COVERAGE_AUDIT_01.md`](research/SOURCE_COVERAGE_AUDIT_01.md).
That audit is a reading-priority document, not source evidence; no existing or
new source is approved for thesis prose until its individual evaluation is
complete.

The first newly completed evaluation batch covers Weizenbaum's *ELIZA*,
Shneiderman's *Natural vs. Precise Concise Languages*, Black and Moran's
command-naming experiment, and the form sections of RFC 1866. Their new source
notes are the only active evaluations of these four sources; no comparison
matrix has yet been derived from them.

The second completed evaluation batch covers Seckler et al.'s controlled study
of redesigned registration forms and Cui et al.'s large-scale measurement of
web-form types and requested data categories. These notes strengthen the
Surface layer while preserving the distinction between observed user
interaction, corpus classification and actual data submission.

The third completed evaluation batch covers Subramonyam et al.'s conceptual
model of the gulf of envisioning and Zamfirescu-Pereira et al.'s qualitative
BotDesigner study. Together they connect the apparent openness of prompt
surfaces to formulation, expectation, iteration and testing work, while keeping
the conceptual model separate from the observed behavior of ten participants
and from the documented operation of one GPT-3 prototype.

The fourth completed evaluation batch covers Oulasvirta et al.'s controlled
studies of two-thumb tablet entry and van Esch et al.'s Gboard deep-
internationalization report. The first supplies direct motor, training and
touch-correction evidence; the second remains a supporting product report for
language-specific layouts, workarounds and modeling because its user studies
are presented only in aggregate.

The fifth completed evaluation batch covers von Ahn et al.'s 2008 reCAPTCHA
system and the locally dated 2026 WHATWG HTML Standard snapshots. reCAPTCHA is
retained as a historical core contrast in which one visible transcription acts
both as an access check and an aggregated OCR correction. The WHATWG sections
provide the current normative path from typed field and editing state through
API/submission values, entry-list construction and request encoding, but do not
evidence concrete browser appearance, implementation support or server-side
processing. At that stage, Input Events Level 2 remained unevaluated because
the retained corpus contained only its bibliographic record, not a secured full
text. The active newly evaluated source count was twelve.

The sixth completed evaluation batch covers only the locally available
42-page preview of Hearst's *Search User Interfaces* (2009): its preface and
book pages 1–22 of Chapter 1, ending mid-section. It establishes a bounded
historical basis for simple search-field surfaces, query formulation,
immediate feedback, suggestions, history, facets and the tradeoff between user
control and opaque automation. Empirical details remain secondary reports until
their original studies are read, and the preview does not supply the technical
query-to-index/retrieval pipeline or current search and omnibox evidence. The
active newly evaluated source count then rose to thirteen.

The seventh completed evaluation batch covers the retained authorized author
excerpt of Bowker and Star's *Sorting Things Out* (1999): the Introduction,
Chapters 1, 9 and 10, corresponding to book ranges 1–50 and 285–326. It is a
supporting theoretical source for classification, standards, recording
granularity, categorical work, boundary infrastructures and the invisibility
of installed information systems. It does not directly study a text input
interface, and every transfer to labels, requiredness, validation or `other`
answers remains project synthesis requiring direct interface and technical
sources. Chapters 2–8 and exact individual print-page locations are not locally
verified. The active newly evaluated source count then rose to fourteen.

The eighth completed evaluation batch covers Iftikhar, Ma and Huang's
twelve-page study of four messenger composition-visibility conditions and RFC
3994's complete `isComposing` specification. Iftikhar et al. provide only a
bounded interaction contrast: their experiment tests no indicator, the text
“Person X is typing”, masked character activity and visible live typing. Three
moving dots appear only in the literature review, not as an experimental
condition, and internally inconsistent individual statistics on article page
6 are not adopted. RFC 3994 separates content and status messages and defines
`active`/`idle`, refresh and idle timers, receiver timeouts and privacy limits,
but no visual rendering. Neither source evidences AI/LLM generation. The
active newly evaluated source count then rose to sixteen. At that stage, all
in-scope sources with a complete local text or deliberately bounded local
excerpt had been evaluated; Bak Herrie and Zacher Sørensen remained a narrowly
scoped reserve rather than an automatic next reading.

The ninth evaluation batch covers the eight previously open records Adams and
Sasse (1999), Carroll (1982), Good (1982), MacKenzie and Soukoreff (2002),
Morris (2024), Quinn and Zhai (2016), Shneiderman (1983) and W3C *Input Events
Level 2* (dated Working Draft, 1 May 2026). Seven were fully evaluated from
lawfully accessible complete texts. Carroll's publisher abstract and
bibliographic identity were verified, but no lawful full text was found; its
new note therefore remains an abstract-limited open pre-evaluation and releases
no experimental result or design rule. The corpus now contains 24 new notes:
23 active, claim-bearing evaluations and one transparent open pre-evaluation.
The batch strengthens password practice, historical editing and direct
manipulation, text-entry evaluation methods, prompt-interface criticism,
suggestion cost/benefit and normative editing-event semantics. It closes the
previous direct-evidence gaps for controlled mobile word-completion costs and
for the normative `beforeinput`/`input` event distinction, while leaving free
composition, generative suggestions, browser implementation support and
Carroll's full argument open.

The tenth, writing-driven evaluation batch closes the concrete source gap for
the planned opening subsection **Interaction -> physical process of input**.
Feit, Weir and Oulasvirta (2016) add controlled evidence on physical-keyboard
finger strategies, hand movement and gaze; the official correction to the
article's WPM-method description is recorded in the source note. Ruan et al.
(2017) add a controlled comparison of touchscreen keyboard and dictation,
including initial speech recognition, user and system delay, final errors and
the predominantly keyboard-based correction phase. Both complete PDFs were
secured and visually checked. Their claims remain limited to transcription;
Ruan et al. additionally represent quiet, seated, fast-network ideal
conditions and a 2017 system. The corpus now contains 26 new notes: 25 active,
claim-bearing evaluations and Carroll's one open pre-evaluation. No thesis
prose was produced in this batch.

The eleventh, narrowly writing-driven evaluation adds the official POSIX.1-2024
`mkdir` utility specification after the concrete command example exposed a
syntax gap. The new note is limited to the utility name, synopsis, directory
operand and normatively described directory creation. It does not evidence a
terminal surface, human learning, shell parsing or implementation behavior.
The example `mkdir entwurf` is explicitly recorded as a project illustration
of the standard's syntax rather than a verbatim source example. The corpus now
contains 27 new notes: 26 active, claim-bearing evaluations and Carroll's one
open pre-evaluation.

The first source-to-structure synthesis is recorded in
[`research/SOURCE_TO_STRUCTURE_SYNTHESIS_01.md`](research/SOURCE_TO_STRUCTURE_SYNTHESIS_01.md).
It maps all 26 active evaluations and Carroll's open pre-evaluation into the
author's existing introduction, historical frame, Surface, Interaction and
Operation structure without creating a replacement chapter outline or drafting
thesis prose. Its sixteen cross-source statements are explicitly marked as
provisional project syntheses, retain their source-note claim anchors and
counterlimits, and will be adopted only where a specific written passage can
support them. The remaining evidence gaps stay deferred until the corresponding
section is written.

The first writing test is now fixed as **Interaction -> physical process of
input**. Its narrow evidence core is Feit et al. (physical keyboard),
Oulasvirta et al. (two-thumb touchscreen entry), Ruan et al. (touchscreen
keyboard and dictation), and MacKenzie and Soukoreff (evaluation-method
limits). Van Esch et al. may provide multilingual context. The intended
passage must remain short because the thesis is capped by the author's current
working maximum of 30 pages. A newer in-the-wild dictation source will be
added only if the drafted passage requires claims beyond controlled
transcription under the documented conditions.

The author has replaced the immediate drafting step with the compact
source-and-notes overview at
[`research/QUELLENUEBERSICHT_INTERACTION_PHYSICAL_INPUT_COMPACT_01.md`](research/QUELLENUEBERSICHT_INTERACTION_PHYSICAL_INPUT_COMPACT_01.md).
It fixes one core statement, five small movements and only the necessary
source passages and limits. The earlier detailed overview remains background
material, not the active writing step. The existing German
417-word draft at
[`research/DRAFT_INTERACTION_PHYSICAL_INPUT_01.md`](research/DRAFT_INTERACTION_PHYSICAL_INPUT_01.md)
is retained only as a transparent, superseded working state. It remains
outside the thesis LaTeX files and is no longer the active next step. New
prose will be developed only after the author has selected and weighted the
source notes.

A German working draft is now recorded at
[`research/DRAFT_INTERACTION_STEPWISE_01.md`](research/DRAFT_INTERACTION_STEPWISE_01.md).
The author-confirmed and source-checked passage now covers physical keyboard,
the bounded trained two-thumb touchscreen case, speech input and the
methodological distinction between input execution and free composition. It
uses Feit et al. (2016), Oulasvirta et al. (2013), Ruan et al. (2017), and
MacKenzie and Soukoreff (2002). One source-check correction specifies that
Ruan et al. report the proportion of correction time spent using the keyboard,
not the number of corrections. The passage remains outside the thesis LaTeX
files and is not yet adopted submission prose. Its Draft Mode is closed.

The subsection **Interaction -> required knowledge and competencies** is now
recorded in the same stepwise German working draft and supported by the
updated overview at
[`research/QUELLENUEBERSICHT_INTERACTION_KNOWLEDGE_COMPETENCE_01.md`](research/QUELLENUEBERSICHT_INTERACTION_KNOWLEDGE_COMPETENCE_01.md).
Its author-confirmed comparison distinguishes explicit command and syntax
knowledge, query formulation, partially interaction-generated prompt knowledge
and forms that can externalize expected data types while shifting work toward
information provision. The concrete `mkdir entwurf` example is grounded in the
new POSIX note; the claim that the convention must be learned remains grounded
in the HCI sources. References to retrieving form data from memory, documents
or other systems are marked as project synthesis because Cui and Seckler do not
observe those retrieval paths. The passage remains outside the thesis LaTeX
files and is not yet adopted submission prose. Its Draft Mode is closed. The
sources do not provide a controlled same-task comparison, so the passage makes
no general ease ranking across command, search, prompt and form interfaces.

The subsection **Interaction -> correction and editing** is now recorded in
the same stepwise German working draft and supported by
[`research/QUELLENUEBERSICHT_INTERACTION_CORRECTION_EDITING_01.md`](research/QUELLENUEBERSICHT_INTERACTION_CORRECTION_EDITING_01.md).
Its author-confirmed passage distinguishes editing as extension, rearrangement
or reformulation from correction of a perceived or system-detected deviation.
It then locates correction at three bounded levels: probabilistic
interpretation of a touch action, user inspection and correction of a visible
speech transcription, and changes following form validation. The final
synthesis states only that the current visible text hides this editing history.
The content-level editing distinction is a project synthesis from documented
editing operations, not a measured distribution of user motives. The passage
remains outside the thesis LaTeX files and is not yet adopted submission prose.
Its Draft Mode is closed. Prompt revision and renewed input are treated
separately in the subsequent subsection on iteration and reformulation.

The subsection **Interaction -> autocomplete and suggestions** is now recorded
in the same stepwise German working draft and supported by
[`research/QUELLENUEBERSICHT_INTERACTION_AUTOCOMPLETE_SUGGESTIONS_01.md`](research/QUELLENUEBERSICHT_INTERACTION_AUTOCOMPLETE_SUGGESTIONS_01.md).
Its 205-word author-confirmed passage uses Quinn and Zhai for the direct,
controlled contrast between fewer taps and slower character entry. Hearst
supports only the historical search-suggestion example, Subramonyam et al.
support prompt ideas as a design pattern without an effect study, and van Esch
et al. delimit word prediction by corpus, language-model and language-variety
conditions. The passage therefore does not claim an empirically demonstrated
effect on free formulation or current generative suggestions. It remains
outside the thesis LaTeX files and is not yet adopted submission prose. Its
Draft Mode is closed.

The subsection **Interaction -> iteration and reformulation** is now recorded
in the same stepwise German working draft and supported by
[`research/QUELLENUEBERSICHT_INTERACTION_ITERATION_REFORMULATION_01.md`](research/QUELLENUEBERSICHT_INTERACTION_ITERATION_REFORMULATION_01.md).
Its author-confirmed passage defines iteration as renewed input after a system
reaction and reformulation as an additional change in wording, scope or
direction. It distinguishes form correction against a preset requirement from
search-result-led query reformulation, treats ELIZA only as a historical turn
structure and bounds prompt iteration to the BotDesigner observation plus
Subramonyam et al.'s theoretical account. The comparison among these loops and
the final temporal-interaction statement are project synthesis, not a common
empirically tested model. The passage remains outside the thesis LaTeX files
and is not yet adopted submission prose. Its Draft Mode is closed.

A continuous reading copy of all five author-confirmed Interaction passages is
available as the native Pages document
[`output/documents/Interaction_Arbeitsabschnitte.pages`](output/documents/Interaction_Arbeitsabschnitte.pages).
It contains the 1,403 words of working prose and their visible source
references on five A4 pages. Internal source and boundary notes are omitted so
that the passages can be read consecutively. The source of truth remains the
stepwise Markdown draft; the Pages file is a reading copy and does not place
the passages in the thesis LaTeX files. Both the intermediate DOCX render and
the PDF exported by Pages were inspected page by page.

## Authorial writing style

Writing-style decision (30 August 2026): German thesis prose should use a
concise, analytical and concrete style. The physical-input test paragraph
written by the author is the initial stylistic reference. Future drafting and
revision follow these rules:

- Use short to medium-length sentences.
- Give each sentence one primary statement wherever possible.
- Describe the concrete process or observable distinction before offering its
  theoretical interpretation.
- Structure short analytical paragraphs as process or observation,
  differentiation or example, and concluding interpretation.
- Prefer active, precise verbs and avoid unnecessary nominal constructions.
- Introduce specialist terminology only where it performs an analytical
  function, then use it consistently.
- Use `Text` for the visible or readable result by default; reserve `String`
  for a technically intended character sequence.
- Keep every generalization within the evidential limits of its sources.

These rules guide style but do not override source accuracy. In particular,
different input modalities must still be described precisely: typing produces
characters through learned movements, whereas speech input first requires
technical recognition and subsequent inspection of the recognized text.

## Draft mode for collaborative text revision

Draft-mode decision (30 August 2026): rapid sentence and paragraph revision
may be handled as one continuous chat-based drafting phase instead of a series
of separately documented micro-batches.

- `Draft-Modus an` starts the mode. Text is developed and compared directly in
  the chat, using the already evaluated source material where relevant.
- While the mode is active, individual wording iterations do not trigger
  project-file edits, new source acquisition, process-log entries, transcript
  exports or rebuilds of the AI-documentation PDF.
- Draft variants may be labelled V1, V2 and so forth. They remain working text
  and are not treated as adopted thesis prose.
- If a requested change requires new research, source re-evaluation or a file
  operation, this requirement is identified before leaving or pausing the mode.
- `Draft-Modus aus` ends the rapid drafting phase without adopting or saving a
  final passage.
- `Abschnitt finalisieren` ends the mode and starts one consolidated closure:
  the selected passage is checked against its sources and evidence limits,
  saved in the appropriate project file, linked to the project records and
  documented through one process-log, transcript and PDF update.
- The visible drafting conversation remains part of the machine session and is
  included in the later consolidated transcript export. Skipping PDF rebuilds
  between wording variants therefore does not remove the drafting history.

After a temporary pause for workflow or documentation maintenance, the mode
may be activated again explicitly. The Draft Mode cycles for physical input,
required knowledge and competencies, correction and editing, autocomplete and
suggestions, and iteration and reformulation were closed when their
author-confirmed working passages were finalized; Draft Mode is now inactive
until the author activates it for another passage.

Section workflow decision (30 August 2026): every thesis subsection is first
reduced to the number of short movements its argument actually needs and one
core statement. The evaluated corpus is then used to select only the passages
actually needed for each movement, recorded in a compact source table with an
explicit limit where relevant. Neither the number of movements nor the number
of passages is fixed in advance. New literature is sought only for a concrete
remaining gap. Prose begins only after the author has reviewed that overview.
The operative template is
[`research/WORKFLOW_TEILABSCHNITTE.md`](research/WORKFLOW_TEILABSCHNITTE.md).

Workflow decision (30 August 2026): the existing in-scope source corpus will
be evaluated first. Records now marked as excluded are retained only to
document the scope decision and will not be close-read. The current gap list is
a deferred writing aid, not an active acquisition plan. Additional literature
will be sought step by step only when drafting reveals a concrete claim that
the evaluated corpus cannot adequately support.

Author scope decision (30 August 2026): inclusion and accessibility are not a
separate analytical area of the thesis. They are excluded to keep the project
within scope; this does not convert the remaining analysis into a claim about
universal users or universally accessible interfaces.

Author scope decision (30 August 2026): social media, interpersonal messaging
as an independent subject, artworks, art documentation and art theory are
excluded from the thesis corpus. Dialogic interfaces remain central only as
human-system interaction: ELIZA and other rule-based systems, AI/LLM chat,
prompt fields and visible temporal states such as the three-dot typing
indicator, generating or streaming feedback, waiting, stopping and errors.
Messenger studies may be used only to establish the design or interpretation
of such a convention. A visible animation must not be treated as evidence that
a model is thinking, composing or generating unless the system's documented
operation establishes that connection.
This content-scope decision does not alter the formal degree-programme and
artistic-project requirements recorded below.

The source-research phase will initially map different functions and forms of text input without fixing a final research question. Possible contexts include command-line interaction, graphical text fields, web forms, search interfaces, rule-based conversational systems and LLM-based interfaces. This sequence is a field to investigate, not an assumed linear history.

Text input is approached as a technical and designed interface between people and computational systems. Visual form, temporal feedback, agency, authorship and control remain possible analytical directions whose importance must emerge from the source material. Of particular interest is how an interface represents system activity before, during and after a response without conflating the representation with the underlying computation.

### Earlier hypothesis retained for evaluation

**How has text input evolved from command to conversation, and how does its visual form shape users' sense of agency, authorship and control?**

This earlier formulation is not the current working research question. It is retained so that the research process can later show which parts were supported, revised or rejected. The wording retained above remains a working question rather than the final submission formulation; its exact language may still be edited after the cases and chapter structure are fixed.
Within the current scope, `conversation` refers to dialogue between a person and
a computational system, not to social-media or interpersonal messenger
communication.

## Formal requirements confirmed by HFBK

- Scope for an artistic focus: generally 20 DIN A4 pages
- Typography: 12 point
- Line spacing: 1.5
- Permitted thesis language: German or English
- Individual choice: English
- Processing period: three months from admission
- Submission: three printed copies and one electronic copy, unless the admission letter specifies otherwise
- A statutory declaration must accompany the thesis
- Two reviewers are required
- At least one reviewer must belong to Theory and History
- Weighting of the final grade:
  - Master's thesis: 30 percent
  - Artistic project, presentation and colloquium: 70 percent

## AI documentation requirements

- Thesis-related communication with text-generating AI must be documented in a separate file when AI results are used in or incorporated into the thesis.
- The documentation must be submitted with the thesis.
- Text adopted verbatim or in paraphrase from an AI tool must be cited with page and line references to the documentation.
- The AI documentation must be included in the bibliography.
- AI-assisted translations must identify both the primary source and the AI tool and its use.
- Responsibility for arguments, statements, translations, quotations and references remains with the author.

Standing workflow decision (30 August 2026): every substantial AI-assisted
source-evaluation or drafting batch must be entered in `PROCESS_LOG.md` and
`WORK_LOG.md`, synchronized to the current machine-derived Codex archive and
included in a rebuilt, checked AI-documentation PDF before the next substantial
batch begins. Any missing closure is the first task when work resumes.

## Open requirements

- Exact submission date stated in the admission letter
- Names of both reviewers
- Final title
- Final research question and thesis
- Required citation style
- Typeface and page margins
- Definition of which components count towards the 20-page scope
- Requirements for title page, abstract, table of contents, list of figures, bibliography and appendices
- Requirements for the relationship between the written thesis and the artistic project

## Official sources

- HFBK examination information: https://hfbk-hamburg.de/de/informationen/studierenden-service/information-und-anmeldung-zu-pruefungen
- M.F.A. examination regulations: https://hfbk-hamburg.de/media/pages/downloads/b42d48bf3f-1761912734/pruefungsordnung_master_bildende_kuenste_2021.pdf
- M.F.A. registration form: https://hfbk-hamburg.de/media/pages/downloads/19ba42e027-1762786918/master_anmeldeformular_abschlusspruefung_deutsch.pdf
- HFBK guidelines for the use of AI tools: https://hfbk-hamburg.de/media/pages/downloads/e3c1c3b7ec-1770132046/leitfaden_ai.pdf
- Statutory declaration: https://hfbk-hamburg.de/media/pages/downloads/e722b9cd75-1762786965/erklaerung_ma-thesis_de_engl_9p17j1m.pdf
