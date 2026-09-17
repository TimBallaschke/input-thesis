# AI Usage Register

This register connects AI-assisted project decisions and thesis passages to the archived communication. It supplements, but does not replace, citations in the thesis.

## Usage categories

- **verbatim**: wording copied from an AI response; an in-text or footnote citation is required.
- **paraphrase**: an AI response has been rewritten but its substantive formulation remains; a citation is required.
- **translation**: an AI-generated translation is used; both the primary source and the AI use must be cited.
- **conceptual**: brainstorming or argument development; cite when the resulting idea or formulation enters the thesis text.
- **structural**: organization, workflow or document structure; document here even when no thesis-text citation is needed.
- **editorial**: grammar or style assistance; record the extent and preserve the before/after state when substantial.
- **technical**: software, LaTeX or file-structure work; record here, but it normally does not require a citation in the thesis prose.

## Register

| ID | Project location or passage | Category | AI contribution used | Archive reference | Documentation PDF | Verification or status | Thesis citation |
| --- | --- | --- | --- | --- | --- | --- | --- |
| AI-001 | `PROJECT_BRIEF.md`, Current thematic direction | conceptual / paraphrase | Scope from text field to text input as an interaction paradigm and the command-to-LLM trajectory | CGPT-01, lines 23-41 and 681-713 | CGPT-01: p. 2, lines 23-41; p. 11, lines 681-713 | Working project description; not yet thesis prose | Required if retained in the thesis |
| AI-002 | `PROJECT_BRIEF.md`, cultural framing and provisional research question | conceptual / near-verbatim | Text input as a cultural form; agency, authorship and control; provisional English research question | CDX-01, lines 1200-1226 | CDX-01: p. 48, lines 1200-1226 | Provisional and not independently substantiated yet | Required if retained or paraphrased in the thesis |
| AI-003 | Zotero collection structure | structural | Research clusters and recommended Zotero organization | CGPT-03, lines 7-21 and 127-160; CDX-01, lines 1169-1188 | CGPT-03: p. 28, lines 7-21 and pp. 29-30, lines 127-160; CDX-01: p. 47, lines 1169-1188 | Implemented in Zotero | No thesis-prose citation currently needed |
| AI-004 | `research/SOURCE_NOTE_TEMPLATE.md` and `research/SEARCH_LOG.md` | structural | Standardized note and search-log workflow | CDX-01, lines 1249-1266 | CDX-01: p. 48, lines 1249-1266 | Implemented as research infrastructure | No thesis-prose citation currently needed |
| AI-005 | `.vscode/settings.json` and `thesis/` scaffold | technical / structural | Cursor build recipe, LuaLaTeX/Biber setup and provisional document structure | CDX-01, lines 1277-1417 | CDX-01: pp. 49-51, lines 1277-1417 | Build and visual PDF check completed | No thesis-prose citation currently needed |
| AI-006 | `research/CORPUS_STATUS_AND_READING_PLAN_01.md`, C-021 source note and `research/METHODS_CONCEPT_01.md` | conceptual / structural | Decision to pause broad acquisition; source-critical C-021 synthesis; translation of its evaluation distinctions into a provisional formal-analysis observation sheet | CDX-01, lines 6946–6996 | CDX-01: pp. 128–129, lines 6946–6996 | Research infrastructure only; C-021 sections and printed pagination require Tim's verification before thesis use | Required if the methodological formulation or substantive synthesis is retained or paraphrased in the thesis |
| AI-007 | C-020 source note and `research/METHODS_CONCEPT_02.md` | conceptual / structural | Source-critical W3C synthesis and translation of input-event provenance, intervention and mutation into the active observation method | CDX-01, lines 7046–7084 | CDX-01: p. 130, lines 7046–7084 | Research infrastructure only; W3C sections and later implementation behaviour require Tim's verification before thesis use | Required if the methodological formulation or substantive synthesis is retained or paraphrased in the thesis |
| AI-008 | C-022 source note and `research/METHODS_CONCEPT_03.md` | conceptual / structural | Source-critical synthesis of the suggestion experiment and translation of its distinction among action savings, total time, subjective experience, attention, decision and selection into an assistance-cost observation layer | CDX-01, lines 7133–7176 | CDX-01: pp. 131–132, lines 7133–7176 | Research infrastructure only; printed pages 83–88 and the transfer limits to composition, other languages and AI co-writing require Tim's verification before thesis use | Required if the methodological formulation or substantive synthesis is retained or paraphrased in the thesis |
| AI-009 | C-023 source note and `research/METHODS_CONCEPT_04.md` | conceptual / structural | Source-critical synthesis of the Gboard product report and translation of its distinctions among language variety, orthography, script, character access, layout, transformation, language model, personalization, distribution and discoverability into a language-support observation layer | CDX-01, lines 7227–7277 | CDX-01: pp. 132–133, lines 7227–7277 | Research infrastructure only; printed pages 1–27, the historical 2019 product counts and the incompletely reported user studies require Tim's verification before thesis use | Required if the methodological formulation or substantive synthesis is retained or paraphrased in the thesis |
| AI-010 | C-024 source note and `research/METHODS_CONCEPT_05.md` | conceptual / structural | Source-critical synthesis of the KALQ study and translation of its distinctions among body/device configuration, anticipatory action, training history, optimizer objective/data/constraints, correction and bundled attribution into embodied-action, training-history and optimization-provenance observation layers | CDX-01, lines 7340–7411 | CDX-01: pp. 134–135, lines 7340–7411 | Research infrastructure only; printed pages 2765–2774, the causal boundaries of the trained comparison and all proposed method fields require Tim's verification before thesis use | Required if the methodological formulation or substantive synthesis is retained or paraphrased in the thesis |
| AI-011 | C-025 source note and `research/METHODS_CONCEPT_06.md` | conceptual / structural | Source-critical synthesis of the historical reCAPTCHA report and translation of its distinctions among visible task, control/unknown routing, gate classification, conditional qualification, aggregation, beneficiary, delayed reuse and labour interpretation into a consequence-and-labour observation layer | CDX-01, lines 7473–7545 | CDX-01, printed pp. 136–137 | Research infrastructure only; printed pages 1465–1468, the inaccessible supplement, disclosure/version discrepancy, historical product boundary and all cultural interpretations require Tim's verification before thesis use | Required if the methodological formulation or substantive synthesis is retained or paraphrased in the thesis |
| AI-012 | `research/COMPARISON_MATRIX_04.md` and modular validation of `research/METHODS_CONCEPT_06.md` | conceptual / structural | Cross-source comparison of C-020–C-025; separation of non-equivalent evidence and outcomes; formulation of S-13–S-18; reduction of the prospective observation sheet to a nine-field common trace plus five triggered modules | CDX-01, lines 7629–7666 | CDX-01, printed pp. 138–139 | Research infrastructure only; every source anchor, synthesis proposition and the project-specific modular method require Tim's verification and direct method testing before thesis use | Required if the methodological formulation or substantive synthesis is retained or paraphrased in the thesis |

| AI-013 | `research/NETWORKED_TEXT_INPUT_SOURCE_SHORTLIST_01.md`, literature-map and corpus-plan update | conceptual / structural | Bounded definition of networked text input; five-source core and two-source reserve; provisional distinction among editable draft, composing-status signal, addressed message and public post; exclusion of general social-media scope | CDX-01, lines 7874–7912 | CDX-01, printed p. 142 | Research infrastructure only; candidate selection, source readings and every project-level synthesis require Tim's verification before thesis use | Required if the cluster definition, sequence model or substantive synthesis is retained or paraphrased in the thesis |
| AI-014 | C-026–C-032 source notes, `research/COMPARISON_MATRIX_05.md` and `research/RESEARCH_QUESTION_WORKSHOP_01.md` | conceptual / structural | Source-critical separation of complete and abstract-level evidence; synthesis of draft content, revision, activity/status visibility, audience, submission and circulation; formulation of S-19–S-26; comparison of four research-question options while keeping the current question unchanged | CDX-01, lines 7977–8055 | CDX-01, printed pp. 143–144 | Research infrastructure only; all page anchors, access-limited claims, cross-source propositions and question formulations require Tim's verification and selection before thesis use | Required if a source synthesis, method field, subquestion or formulation is retained or paraphrased in the thesis |

| AI-015 | C-026–C-032 Zotero records and synchronized research statuses | bibliographic / structural | Duplicate-safe import of seven previously approved records into collection 05; verification of item keys, citation keys, collection identity, item-level BibTeX and automatic Better BibLaTeX export; replacement of stale import-pending statuses without changing source analysis | CDX-01, lines 8093–8127 | CDX-01, printed p. 145 | Research infrastructure only; C-027 and C-031 remain abstract-level despite bibliographic inclusion, and all substantive source claims still require Tim's verification | No thesis prose produced; cite the original sources if retained |

| AI-016 | Option 0 scope records and `research/source-notes/whatwg-2026-html-standard-forms-input.md` | conceptual / structural | Scope decision formalization; source-critical synthesis of the current HTML text-input path; distinction among visible control, editable/default/internal/API/submission value, event, validity feedback, entry-list inclusion, transformation and consequence; formulation of C015-P1–P8 and the C-005/C-015 technical comparison | CDX-01, lines 8247–8295 | CDX-01, printed p. 147 | Research infrastructure only; the current Living Standard sections, normative strength and all project-level propositions require Tim's verification before thesis use | Required if the scope sequence, technical synthesis or propositions are retained or paraphrased in thesis prose; cite C-015 for substantive HTML claims |

| AI-017 | `research/source-notes/adams-sasse-1999-users-not-enemy.md` and connected forms/credentials status records | conceptual / structural | Source-critical synthesis of C-016; distinction between identification and authentication; relation among credential entry, mental model, memory, policy, feedback, work practice, access and accountability; formulation of C016-P1–P8, C016-V1–V6 and the C-015/C-016 technical-versus-organizational comparison | CDX-01, lines 8339–8408 | CDX-01, printed pp. 148–149 | Research infrastructure only; printed pp. 41–46, the missing-response caveat, historical scope and every project-level inference require Tim's verification before thesis use | Required if the synthesis or propositions are retained or paraphrased in thesis prose; cite C-016 for substantive authentication claims and C-015 separately for HTML mechanics |

| AI-018 | `research/source-notes/seckler-et-al-2014-designing-usable-web-forms.md` and connected forms/credentials status records | conceptual / structural | Source-critical synthesis of C-017; process model from rule/field presentation through text entry and submission to validation, error feedback and correction; separation of form-level, aggregate, qualitative and project-inference evidence; formulation of C017-P1–P9, C017-V1–V8 and the C-015/C-016/C-017 comparison | CDX-01, lines 8448–8507 | CDX-01, printed p. 150 | Research infrastructure only; printed pp. 1275–1284, all statistics, bundled-redesign boundary and every project-level inference require Tim's verification before thesis use | Required if the synthesis or propositions are retained or paraphrased in thesis prose; cite C-017 for substantive form-study claims and C-015/C-016 separately for their technical or authentication claims |

## Entry template

| ID | Project location or passage | Category | AI contribution used | Archive reference | Documentation PDF | Verification or status | Thesis citation |
| --- | --- | --- | --- | --- | --- | --- | --- |
| AI-019 | `research/source-notes/cui-et-al-2025-understanding-privacy-norms-through-web-forms.md` and connected forms/credentials status records | conceptual / structural | Source-critical synthesis of C-018; distinction among website-side request, field/form classification, descriptive frequency, proposed privacy norm, user expectation and actual disclosure; formulation of C018-P1–P11, C018-V1–V9 and the C-015/C-016/C-017/C-018 comparison | CDX-01, lines 8565–8626 | CDX-01, printed pp. 151–152 | Research infrastructure only; printed pp. 5–22, all classifier/statistical results, the norm/frequency boundary and every project-level inference require Tim's verification before thesis use | Required if the synthesis or propositions are retained or paraphrased in thesis prose; cite C-018 for substantive form-ecology claims and C-015–C-017 separately for their technical, authentication or form-use claims |
| AI-020 | `research/source-notes/bowker-star-1999-sorting-things-out.md` and connected forms/credentials status records | conceptual / structural | Bounded source-critical synthesis of C-019; lawful-access and chapter-scope decision; formulation of C019-P1–P11 and C019-V1–V4; distinction among direct classification/infrastructure claims, the book's limits and the project's transfer to labels, requiredness, validation, residual answers and downstream attachment | CDX-01, lines 8671–8730 | CDX-01, printed pp. 153–154; P-0095 metrics printed p. 164 | Research infrastructure only; exact print pages inside the Introduction and Chapters 1, 9 and 10, every project-level transfer and any claim dependent on empirical Chapters 2–8 require Tim's verification before thesis use | Required if the synthesis or propositions are retained or paraphrased in thesis prose; cite C-019 for classification/infrastructure claims and C-015–C-018 separately for technical, authentication, form-use and form-ecology evidence |

| AI-021 | `research/COMPARISON_MATRIX_06.md` and synchronized C-015–C-019 status records | conceptual / structural | Cross-source comparison of five non-equivalent evidence roles; construction of the composite form trace; separation of validity, acceptance, completion, authentication, website request, disclosure and classification fit; formulation of S-27–S-36 and a compact later observation record while retaining the current research question and deferred method-test decision | CDX-01, lines 8769–8796 | CDX-01, printed pp. 154–155; P-0096 metrics printed pp. 165–166 | Research infrastructure only; all source anchors, cross-source propositions and the project-specific observation trace require Tim's verification and selection before thesis use | Required if any synthesis proposition, operational trace or observation field is retained or paraphrased in thesis prose; cite C-015–C-019 separately for their respective technical, authentication, form-use, form-ecology and classification claims |

| AI-022 | `research/CHAPTER_STRUCTURE_01.md` and synchronized planning records | conceptual / structural | Selection of an operational-trajectory architecture over a linear interface history; seven-part/20-page allocation; chapter purposes, subsection logic, source routing, evidence-readiness assessment, exclusions and drafting order; provisional relational-apparatus argument and four author decisions | CDX-01, lines 8850–8875 | CDX-01, printed pp. 155–156; P-0097 metrics printed p. 167 | Research planning only; Tim must approve the chapter logic and wording, select the formal-analysis and artistic-case scope, and verify all source passages before any structure-derived formulation enters thesis prose | Required if the organizing argument, chapter logic or AI-documentation interpretation is retained or paraphrased in the thesis; substantive claims still require citations to the original C/A sources |

| AI-023 | Read-only critical assessment of `research/CHAPTER_STRUCTURE_01.md` | conceptual / critical / structural | Isolated-agent critique of research-question fit, implicit thesis, sequence, overlap, text-input focus, technical/cultural/artistic balance, 20-page feasibility, terms, evidence risks and author decisions; report reproduced without adoption | CDX-01, lines 8986–9219 | CDX-01, printed pp. 157–160; P-0098 metrics printed p. 174 | Advisory review only; it did not inspect the source matrices, used the same inherited model family rather than a different model and changed no project file. Tim and the primary AI must test each criticism against the actual evidence before revising the structure | Required only if specific wording or recommendations from the critical report are retained or paraphrased in thesis prose; otherwise process documentation only |

| AI-024 | `research/SOURCE_OVERVIEW_01.md` and synchronized corpus-navigation records | conceptual / structural / editorial | Full-corpus reconciliation and concise German summaries for C-001–C-032 and eleven unique artistic records; separation of content, thesis role, Zotero inclusion, reading depth, access, reserve and author-verification status; transparent correction of the initial 39-item quick count to the exact 40-item Zotero inventory | CDX-01, lines 9319–9363 | CDX-01, printed p. 162; P-0099 metrics printed p. 175 | Research navigation only; summaries derive from existing source notes and status files and do not replace original-source reading or Tim's passage verification | Required if any overview wording or classification is retained or paraphrased in thesis prose; substantive claims require citation to the original C/A source |

| AI-025 | `research/CHAPTER_STRUCTURE_01.md` and synchronized current-status records | conceptual / structural / editorial | Replacement of the previous seven-part architecture with an incremental Surface / Interaction / Operation working note; editorial condensation of Tim's ideas into working questions, bullet summaries, cross-area relations, explicit non-decisions and one next small gate | CDX-01, lines 9657–9687 | CDX-01, printed p. 167; P-0100 metrics printed p. 179 | Research planning only; the three areas are not adopted final chapters, and every theoretical term, source relation, method, case and scope boundary remains subject to Tim's later decision and source verification | Required only if specific AI-edited wording from the working note is retained or paraphrased in thesis prose; substantive claims require original sources |

| AI-026 | `research/SOURCE_AREA_MAPPING_01.md` and synchronized current-status records | conceptual / structural / editorial | Surface-only classification of all C-source identifiers and the three artistic cases into provisional core, supporting, boundary, artistic-object, reserve and no-current-Surface roles; explicit evidence boundaries; seven gap categories; one next author decision | CDX-01, lines 9735–9767 | CDX-01, printed p. 168; P-0101 metrics printed p. 181 | Research routing only; Interaction and Operation remain unmapped, the proposed roles are not adopted chapter assignments, and source-note summaries do not replace Tim's verification of original passages | Required only if specific AI-edited classifications or gap formulations are retained or paraphrased in thesis prose; substantive claims require citations to the original C/A sources |

| AI-027 | Corrected `research/SOURCE_AREA_MAPPING_01.md` and synchronized current-status records | conceptual / structural / editorial / corrective | Narrow definition of Surface as formal analysis plus communicated expectations, limits and possibilities; separation of direct objects from literature support; removal of C-003 and prompt/learning sources from the Surface core; conditional rather than automatic treatment of design history; revised gaps and next source gate | CDX-01, lines 9863–9887 | CDX-01, printed p. 170; P-0102 metrics printed p. 183 | Supersedes AI-026's proposed Surface core. The mapping remains planning material; Interaction and Operation are unmapped, the formal corpus is unselected and all source claims still require Tim's original-source verification | Required only if specific AI-edited classification or scope wording is retained or paraphrased in thesis prose; substantive claims require original C/A sources |

| AI-028 | C-005 decision entry in `research/SOURCE_AREA_MAPPING_01.md` and synchronized next-step records | conceptual / structural / editorial | Provisional inclusion of RFC 1866 in Surface as historical technical support for formal analysis; explicit rendering limit; retained possible Operation role; next source advanced to C-015 | CDX-01, lines 9972–9993 | CDX-01, printed p. 171; P-0103 metrics printed p. 185 | Selection record only. C-005 is not approved thesis prose, visual claims require a concrete implementation and Tim must verify the priority RFC passages before substantive use | Required only if the AI-edited role wording is retained or paraphrased in thesis prose; source claims require citation to C-005 itself |

| AI-029 | C-003 decision entry in `research/SOURCE_AREA_MAPPING_01.md`, C-003 source note and synchronized status records | conceptual / structural / editorial | Assignment of C-003 to Interaction as its primary area and limitation of Surface to a supporting comparison role; explicit separation of formulation/capability evidence from formal observation of a concrete field; next disputed case advanced to C-004 | CDX-01, lines 10137–10190 | CDX-01, printed pp. 173–174; P-0104 metrics printed p. 188 | Selection record only. Tim approved the area assignment, but exact source passages remain author-verification pending and any visual Surface claim requires a documented interface object | Required only if the AI-edited role wording is retained or paraphrased in thesis prose; substantive claims require citation to C-003 itself |

| AI-030 | C-033–C-035 entries and the revised Surface sequence in `research/CHAPTER_STRUCTURE_01.md`, `research/SOURCE_AREA_MAPPING_01.md` and synchronized status records | conceptual / structural / editorial / bibliographic | Candidate-only registration of three targeted design-theory sources; five-part Surface structure using existing analysed evidence; separation of formal presentation, communicated expectation, visible guidance, missing guidance and the transition to Interaction; explicit source and evidence boundaries | CDX-01, lines 10848–10881 | CDX-01, printed pp. 183–184; P-0105 metrics printed pp. 198–199 | Research planning only. C-033–C-035 are unread, not in Zotero and not yet argumentative sources. The formal corpus and final subsection structure remain unselected, and all existing source propositions retain their recorded author-verification limits | Required only if specific AI-edited structure or wording is retained or paraphrased in thesis prose; substantive claims require citations to the original C/A sources |

| AI-031 | `output/docx/Surface_working_structure_and_sources.docx` | editorial / structural / document production | Transformation of the agreed five-part Surface summary into an editable A4 Word working document; source-name expansion, relevance-block formatting, explicit pre-interaction boundary and two-pass render correction | CDX-01, lines 11256–11291 | CDX-01, printed pp. 189–190; P-0106 metrics printed p. 205 | Research-planning artifact only; not thesis prose. Source claims and proposed roles retain their existing verification limits, while dynamic autocomplete, validation, error messages and reactive feedback remain assigned to Interaction | Required only if specific wording or structure from the Word file is retained or paraphrased in thesis prose; substantive claims require citations to the original C/A sources |

| AI-032 | `research/REDAKTIONELLE_NEUAUSRICHTUNG_MACHTFRAGEN_01.md` and the 3 September 2026 current-direction note in `PROJECT_BRIEF.md` | conceptual / structural / editorial | Critical reframing of the current factual Interaction draft through questions of agency, validity, visibility and infrastructure; retention of Command Line and form as contrast cases with search/prompt emphasis; provisional research questions and working thesis; layer-specific power questions; treatment of `Surface -> Interaction -> Operation` as a feedback loop; cross-layer placement rule, four-case matrix, transitions and insertable German draft passages | CDX-03, lines 8–558; CGPT-04, lines 1–418 | CDX-03: printed pp. 271–278; CGPT-04: printed pp. 31–37; P-0136 metrics: printed p. 311 | Planning and draft material only, not source-verified or adopted thesis prose. The supplied conversation's authorship is unverified and it is not evidence for Hito Steyerl. Claims about ranking, current AI optimization, data use, language history and technical operation require primary or scholarly support before adoption. No `TXT-###` assigned | Required if any wording, research question, working thesis, organizing argument or transition is retained or paraphrased in the thesis; substantive claims require citations to the original sources |

| AI-033 | `research/GLIEDERUNG_INTERACTION_PHYSISCHER_PROZESS_MACHTFRAGEN_01.md`, revised compact physical-input overview and current physical-process note in `PROJECT_BRIEF.md` | conceptual / structural / editorial | Reorganization of the supplied physical-process bullets into empirical cores, analytical extensions, power questions and evidence boundaries; working claim that bodily activity becomes input through technical capture and interpretation; assignment of Surface as action space, Interaction as bodily adaptation and Operation as event classification; treatment of language and writing systems as a cross-cutting limit; closing formulation on the disappearance of bodily work and technical co-decisions in the visible string | CDX-03, lines 586–720 | CDX-03: printed pp. 279–281; P-0137 metrics: printed p. 312 | Planning material only, not adopted thesis prose. Existing HCI claims retain their recorded study limits. Standardization, body norms, accessibility, Unicode, accent, privacy, contemporary speech recognition and political or economic explanations require additional sources. No `TXT-###` assigned | Required if any wording, organizing argument, question or transition is retained or paraphrased in the thesis; substantive claims require citations to the original sources |

| AI-034 | `research/source-notes/galbraith-kay-2025-qwerty-ip-complementarity.md`, `research/source-notes/akrich-1992-de-scription-technical-objects.md`, `research/source-notes/koenecke-et-al-2020-racial-disparities-asr.md` and the synchronized physical-input structure/source records | conceptual / structural / editorial / bibliographic | Source-critical selection and synthesis of three targeted additions: historically bounded QWERTY materiality/standardization/IP complementarity; Akrich's script, projected/real user, delegation and blackboxing vocabulary; Koenecke et al.'s empirical ASR disparity findings. Separation of direct claims, theory transfer and project inference; integration into the physical-process outline, source overviews, synthesis, audit and project brief | CDX-03, lines 809–869 | CDX-03: printed pp. 282–283; P-0138 metrics: printed p. 312 | Research infrastructure only, not adopted thesis prose. Galbraith/Kay do not settle optimality or path dependence; Akrich is not a text-input study; Koenecke et al. do not measure interface use or correction effort. The three Zotero records were added and verified under P-0139; Tim's passage-level verification remains open. No `TXT-###` assigned | Required if any AI-edited synthesis, source-role wording or cross-source inference is retained or paraphrased in the thesis; substantive claims require citations to the original three sources and, for correction work, Ruan et al. separately |

| AI-035 | Zotero library, `references/library.bib`, the three new source notes and the synchronized corpus-status records | bibliographic / structural / technical | Duplicate check, collection-specific import and verification of the Galbraith/Kay, Akrich and Koenecke et al. records; preservation of the three planned Better BibTeX keys; update of Zotero item keys and current corpus counts | CDX-03, lines 915–942 | CDX-03: printed pp. 283–284; P-0139 metrics: printed pp. 312–313 | Implemented source-management action. The three bibliographic records and collection memberships were re-read from Zotero's local API and the keys were confirmed in the automatic bibliography export. No PDF attachment, thesis prose or `TXT-###` passage was added | No thesis-prose citation currently needed; if source-derived claims enter the thesis, cite the scholarly sources rather than this import action |

| AI-036 | Two Ritchie/Hargittai source notes, critical supplement in `research/QUELLENUEBERSICHT_INTERACTION_KNOWLEDGE_COMPETENCE_01.md`, corpus-status records and Zotero import | conceptual / structural / editorial / bibliographic / technical | Select and evaluate two bounded additions; distinguish historical developer conventions, participant speculation and observed search performance from project questions about required knowledge and unequal prerequisites; import bibliographic records and PDF attachments and verify the automatic bibliography export | CDX-03, lines 2526-2619 and current turn beginning at 2621; P-0140/P-0141 | Current working PDF; exact page range verified at closure; recheck at submission | Research infrastructure and provisional critical questions only. No adopted thesis prose or TXT ID. Ritchie does not establish English-language exclusion; Hargittai does not establish current algorithmic literacy or causal inequality mechanisms. Source notes contain exact version-specific locators | Required if AI-derived wording or synthesis is retained or paraphrased in the thesis; substantive claims also require the two original sources. The import action alone is not a thesis argument |

| AI-037 | Chat-only critical outlines for knowledge/competence, correction/editing and autocomplete | conceptual / structural / editorial | Distinguish intended outcome from formal acceptance, editing from correction, correction standards and distributed repair work; formulate questions about suggestion selection and possible effects on writing; retain Interaction/Operation boundaries and a narrow source gap | CDX-03, lines 2659-3762; P-0142 | Working-edition locators to be checked before adoption | Provisional outlines and questions only; no adopted prose or TXT ID. Existing findings retain their original evidence limits | Required if AI-derived wording or synthesis is retained or paraphrased in the thesis; substantive findings also require their original sources |

| AI-038 | `research/source-notes/arnold-et-al-2020-predictive-text.md` and the critical autocomplete overview supplement | conceptual / structural / bibliographic | Selected and evaluated one composition study; separated model-relative predictability and text length from acceptance counts, quality, intention and beliefs; framed influence despite retained manual entry as a provisional project interpretation | CDX-03, lines 3764-3807; P-0143 | Working-edition locators verified at closure; recheck at adoption | Full text and figures checked, not a replication; no Zotero import, adopted prose or TXT ID. Source-specific claims require Tim's verification before thesis use | Required if AI-derived wording or analytical framing is used or paraphrased; empirical claims also require Arnold et al. 2020 |

| AI-039 | Zotero Arnold record, automatic bibliography export and source-status records | bibliographic / technical / structural | Duplicate check, collection selection based on Quinn/Zhai, one-record import with PDF, exact metadata and hash verification, and linkage to the already completed source evaluation | Current CDX-03 import turn; P-0144 | Working-edition locators checked at closure | Imported XV46SD3K with attachment CJNF33NH; source interpretation unchanged, no manuscript insertion or TXT ID | Import alone needs no substantive thesis citation; source-derived claims retain the original-source and AI-038 documentation requirements |

| AI-### | `thesis/chapters/...tex`, paragraph or lines | verbatim / paraphrase / translation / conceptual / structural / editorial / technical | Concise description | CDX-## or CGPT-##, lines ####-#### | p. ##, lines ####-#### | Sources checked and author review | `\aidocref{ARCHIVE}{page}{line range}` or not required |

## Consolidated Interaction checkpoint entries

| AI ID | Location | Use | Description | Provenance | Verification and citation status |
| --- | --- | --- | --- | --- | --- |
| AI-040 | Chat-only Interaction outlines, critical review, correction/editing variant and image concepts; DRAFT-01/DRAFT-02 are supplied review inputs | conceptual / structural / editorial | Distinguish feedback from causal understanding, local success from reliable improvement, rule application from rule-setting, and editing from reversal of an operation; propose limited edits and documentary illustrations | CDX-03 after P-0144 through image-ideas reply; P-0145 | Proposal history, not proof that every suggestion was adopted. TXT-001 preserves the later author-designated manuscript; paragraph-level mapping remains open. Retained AI wording/synthesis needs documentation citation and substantive findings need original sources. No images produced or new source approved |
| AI-041 | Dated Interaction checkpoint and synchronized records | technical / editorial administration | Preserve the designated Pages file byte-identically, limit the approval scope, retain prior review inputs and record Operation as the next author-led structure review | Current CDX-03 checkpoint turn; P-0146 | Interim checkpoint only, not a new source audit, text extraction or final citation sign-off. Original unchanged; no Operation draft/research. Copying alone needs no substantive thesis citation; earlier AI contributions still need passage-level reconciliation |

## Operation working structure

| AI ID | Location | Use | Description | Provenance | Verification and citation status |
| --- | --- | --- | --- | --- | --- |
| AI-042 | research/GLIEDERUNG_OPERATION_01.md and current project-status records | conceptual / structural / editorial | Retain four sections; foreground processing criteria, separate reuse from immediate function, and reconnect feedback to operative scope; redistribute context/consequence and retain four input cases with search/prompt emphasis | CDX-03 Operation review and adoption; P-0147 | Author-confirmed working structure only, not source-checked prose. Original Pages file and Interaction checkpoint unchanged. If wording or organizing argument is retained/paraphrased in the thesis, cite AI documentation; substantive claims require original sources. No new TXT ID |

## Operation source round

| AI ID | Location | Use | Description | Provenance | Verification and citation status |
| --- | --- | --- | --- | --- | --- |
| AI-043 | research/QUELLENRUNDE_OPERATION_01.md; five linked source notes and current source/status records | research / conceptual / structural | Select and evaluate evidence for search/ranking, LLM mechanisms and institutionally selected criteria, and a dated API storage/reuse example; map bounded claims to the four approved sections and distinguish source statements from critical project inferences | CDX-03 source-priority discussion and authorized research round; P-0148 | Original primary research and selected provider documentation checked with explicit page/section and version limits. No Zotero import, no manuscript prose or new TXT ID. API case not yet author-selected for the thesis. Any retained or paraphrased AI synthesis requires documentation citation at adoption; original sources remain necessary for factual claims |

## GEO and sycophancy supplement

| AI ID | Location | Use | Description | Provenance | Verification and citation status |
| --- | --- | --- | --- | --- | --- |
| AI-044 | research/QUELLENUEBERSICHT_OPERATION_GEO_SYCOPHANCY_01.md; three linked source notes and current project records | research / conceptual / structural / technical | Critically distinguish visibility optimization, preference-derived sycophancy, experimentally observed effects and provider intention; identify the GEO companion-code allowance for invented evidence; map three bounded sources to Operation 2/4 and import them into Zotero | CDX-03 preceding advisory turn and authorized three-source import/evaluation; P-0149 | Primary texts, selected methods and figures checked; explicit reading/version limits retained. Cheng's published version used, not earlier preprint; long-term dependence and deliberate manipulation not established. No new adopted thesis passage or TXT ID. Local notes are AI-analysis artifacts, not automatically thesis prose. Original sources support facts; any adopted or paraphrased synthesis still requires AI-documentation attribution |

## Operation bibliography import

| AI ID | Location | Use | Description | Provenance | Verification and citation status |
| --- | --- | --- | --- | --- | --- |
| AI-045 | research/import-records/operation-round-20260915.bib; five source-note status sections; source/project records and Zotero bibliography | technical / bibliographic | Import eight already evaluated records into the intended collections with existing PDF/HTML attachments; preserve source dates, reading bounds and citations; clarify research readiness without asserting universal evidence closure | CDX-03 preceding status question and explicit import request; P-0150 | Exact records, attachments, hash identity, metadata, collection membership and automatic bibliography export checked. One local author-name correction; no substantive source reinterpretation or adopted prose. No new TXT ID. Existing research provenance remains AI-043; this record documents its subsequent source-management step |

## Operation outline refinement after the source rounds

| AI ID | Location | Use | Description | Provenance | Verification and citation status |
| --- | --- | --- | --- | --- | --- |
| AI-046 | research/GLIEDERUNG_OPERATION_01.md; PROJECT_BRIEF.md | structural / conceptual / editorial | Retain the four-part outline, differentiate processing from evaluation criteria within section 2, and strengthen traceability, bounded effects and feedback in section 4; place the new source topics without an additional chapter or expanded evidence claims | CDX-03 preceding structural review and explicit request to adapt the outline; P-0151 | Author-authorized working outline, not adopted thesis prose. Existing source evaluations remain the evidence basis; no new research or empirical verification. Local outline contains the detailed structural artifact; transcript records the discussion and implementation updates. No new TXT ID; later adopted AI wording or synthesis still requires passage-level attribution |

## Operation 1 - author-supplied working outline

| AI ID | Location | Use | Description | Provenance | Verification and citation status |
| --- | --- | --- | --- | --- | --- |
| AI-047 | research/GLIEDERUNG_OPERATION_TECHNISCHE_ROLLE_KONTEXT_01.md; main Operation outline and PROJECT_BRIEF.md | structural / conceptual / editorial | Develop a subsection outline in chat, narrow it after the author's objection to repetition and triviality, respect the boundary with later chapters, and retain the author's supplied four-movement version without rewriting | CDX-03 initial outline, critical discussion, bounded revision and author-supplied adoption; P-0152 | Author-confirmed structure, not finalized or newly source-checked thesis prose. Existing WHATWG/API source bases retained with their limits. The supplied message contains the full adopted outline and is included in the conversation archive; only formatting whitespace was normalized in the working file. No new TXT ID. Earlier AI proposals are developmental provenance, not automatically adopted wording; later prose requires passage-level source and AI attribution |

## Operation timing and anticipatory loading research

| AI ID | Location | Use | Description | Provenance | Verification and citation status |
| --- | --- | --- | --- | --- | --- |
| AI-048 | research/RECHERCHE_OPERATION_ZEITPUNKT_PREFETCH_01.md; snapshot provenance; PROJECT_BRIEF.md | research / conceptual | Investigate the remembered Gmail-password example, identify primary-source alternatives and distinguish anticipated input from confirmation and preparation from authorization | CDX-03 current timing-research request; P-0153 | Specific anecdote remains unsubstantiated. Bounded primary-source evidence supports Gmail message prefetch, Chromium suggestion-result prefetch and historical Google Instant. Six raw HTML snapshots retained; no independent browser test. Placement in Operation 2 is a proposal, not an approved outline change. No Zotero import, new TXT ID or adopted thesis prose; subsequent use needs source and AI attribution |

## Resumed timing notes and personal-memory evidence boundary

| AI ID | Location | Use | Description | Provenance | Verification and citation status |
| --- | --- | --- | --- | --- | --- |
| AI-049 | research/NOTIZEN_OPERATION_ZEITLICHKEIT_01.md; overall outline; research/project status | structural / conceptual / editorial | Resume the earlier timing point, structure the already researched pre-confirmation search case and retain Tim's Gmail memory as a separate research stimulus | CDX-03 current request; earlier point 6 at lines 6096-6111; P-0154, with source research from P-0153 / AI-048 | Working notes, no adopted thesis prose or new TXT ID. Operation 2 placement is provisional; Operation 1 preserved. Technical evidence and memory are explicitly separated; no invented first-hand observation or autobiographical draft. No new research or source verification beyond consulting the preceding evaluation |

## Confirmed compact timing opening in Operation 2

| AI ID | Location | Use | Description | Provenance | Verification and citation status |
| --- | --- | --- | --- | --- | --- |
| AI-050 | research/GLIEDERUNG_OPERATION_01.md; NOTIZEN_OPERATION_ZEITLICHKEIT_01.md; research/project status | structural / editorial | Correct the earlier scope expansion, restore the original timing point with the search-prefetch supplement and confirm its placement at the opening of Operation 2 | CDX-03 intervening note repetition, author's clarification, placement discussion and adoption; P-0155 | Author-approved placement and compact scope, not adopted thesis prose. Earlier five-movement notes retained as background only. Existing evaluated sources reused without new verification. Operation 1 and sections 3-4 remain unchanged; Gmail memory remains outside the technical evidence. No new TXT ID |

## Operation 2 - methods, criteria and adaptation to selection procedures

| AI ID | Location | Use | Description | Provenance | Verification and citation status |
| --- | --- | --- | --- | --- | --- |
| AI-051 | research/GLIEDERUNG_OPERATION_01.md; timing/source/project pointers; DRAFT-03 archive | structural / editorial / conceptual | Refine the initial outline after overlap review, evaluate externally supplied feedback and adopt SEO/GEO as a third internal movement while retaining four main Operation sections | CDX-03 intervening outline proposals, supplied Operation 1 review, user-pasted external feedback and current adoption; DRAFT-03; P-0156 | Author-authorized working structure, not thesis prose. Supplied section 1 is preserved verbatim as the overlap baseline, not source-checked approval. Feedback authorship unverified; arguments assessed independently. Existing evidence limits retained; no new source research or TXT ID. Full structural artifact is in the local outline; visible chat preserves its development and summaries |

## Operation 2 - commercial interests and decision asymmetry

| AI ID | Location | Use | Description | Provenance | Verification and citation status |
| --- | --- | --- | --- | --- | --- |
| AI-052 | REDAKTION_OPERATION_2_INTERESSEN_MACHT_01.md; overall outline; source notes; project/audit pointers | structural / editorial / conceptual / source evaluation | Reduce repeated mechanisms, articulate unequal scope to change criteria, add a bounded search-advertising case and connect provider interests with trained helpfulness and content adaptation | CDX-03 preceding critical review and authorized continuation; DRAFT-04; P-0157 | Working structure, not adopted thesis prose. Gillespie limited to specified pages in a proof copy; Google self-description and Alphabet management reporting are not independent neutral-ranking audits. SEC original archival capture remains open. No intentional LLM-retention claim, bibliography or Zotero import; no TXT ID |

## Operation - full critical outline revision

| AI ID | Location | Use | Description | Provenance | Verification and citation status |
| --- | --- | --- | --- | --- | --- |
| AI-053 | GLIEDERUNG_OPERATION_01.md; project authority; checkpoint and research pointers | structural / editorial / conceptual | Differentiate the four sections as input constitution, selection/evaluation, multiple data purposes and traceability/intervention; give each its own critical task, subpoints, transitions and limits without replacing author prose | CDX-03 two preceding whole-outline advisory turns and authorized continuation; P-0158; prior outline retained byte-identically | Revised working proposal for joint review, not adopted thesis prose or new source verification. Previous separate Operation 1 sketch becomes historical planning material; DRAFT-03 stays the overlap baseline. Optional API data case remains open. No new research, source/import/bibliography change or TXT ID. Full structural artifact retained locally; visible discussion and summary retained in CDX-03 |

## Operation - subsection drafting and preliminary profile-source discussion

| AI ID | Location | Use | Description | Provenance | Verification and citation status |
| --- | --- | --- | --- | --- | --- |
| AI-054 | CDX-03 chat variants; DRAFT-05; PROJECT_BRIEF | structural / editorial / conceptual / preliminary research | Restore all four input cases, add evidence lines, distinguish operators' criteria from content-provider adaptation, remove premature SEO paragraphs, and identify the limited existing evidence for personal inference and secondary advertising uses | P-0159; CDX-03 lines 8338-9508; DRAFT-05 | Proposed wording only, not manuscript adoption. The original attachment is unchanged. Shell/permissions evidence remains incomplete; no new close-read source admission. Search-advertising omission follows an explicit interpretation of ambiguous speech. Staab, FTC and Matz were preliminary candidates; only the first two were then selected for evaluation |

| AI-055 | Operation 3 source notes and compact writing map; project/audit pointers | research / conceptual / structural | Evaluate personal inference from texts and secondary advertising use using Staab and two FTC BetterHelp primary documents, with separate limits for each | P-0160; CDX-03 selection and subsequent updates; STAAB24-P1-P5 and FTC23-P1-P7 | Primary passages verified within declared reading bounds. No complete-profile, current-product or psychological-manipulation claim; no proof that BetterHelp used LLM inference. Suggested example weighting remains for joint review; no manuscript adoption or import |

| AI-056 | Operation 3 bullet proposal and project checkpoint | structural / conceptual / editorial | Organize the existing evidence around additional data uses, a historical contrast, the BetterHelp case, separate text inference and unequal decision scope; include source locators and a boundary to Operation 4 | P-0161; STICHPUNKTE_OPERATION_3_01.md; existing von Ahn, FTC and Staab notes | Writing proposal, not adopted thesis prose. No new source claims beyond declared evidence bounds; no current retention details, complete profiles or manipulation effects. Main outline and manuscripts remain unchanged |

| AI-057 | Operation 3 review, exact supplied draft and project checkpoint | structural / editorial / conceptual | Compare current prose to original scope; recommend restoring storage and data-route distinctions using the existing API case while retaining selected critical examples and reducing repeated syntheses | P-0162; PRUEFUNG_OPERATION_3_GEWICHTUNG_01.md; DRAFT-06; CDX-03 | Review recommendations only, not adopted prose. No manuscript or overall-outline edit; API documentation is a bounded provider statement, not an empirical audit or consumer ChatGPT policy |

| AI-058 | Revised Operation 3 bullet sequence, version 02 | structural / conceptual / editorial | Restore data routes and storage purposes, distinguish training from other data use, retain bounded critical examples, consolidate decision-scope synthesis and reserve intervention for Operation 4 | P-0163; STICHPUNKTE_OPERATION_3_02.md; CDX-03 | Writing proposal requested by author, not manuscript adoption. Previous bullets preserved; no new source round or bibliography/Zotero mutation. API and case-evidence boundaries remain explicit |

| AI-059 | Operation 4 bullet proposal | structural / conceptual / editorial | Distinguish visibility, verification and intervention; connect bounded feedback effects and intervention cases to the chapter's closing synthesis without repeating Operations 2/3 or Interaction | P-0164; STICHPUNKTE_OPERATION_4_01.md; CDX-03 | Writing proposal only. No current product-function verification, source admission or manuscript change. Author retains selection and wording decisions; empirical claims retain source-specific limits |

| AI-060 | Physical-input marked revision following supplied annotations 02-05 | editorial / conceptual / citation placement | Shorten opening, preserve paragraph structure, remove repetition, correct wording, distinguish Koenecke's error measurements from possible extra work and clarify source attachment | P-0165; DRAFT-07; research/revisions/2026-09-16-physische-eingabe-korrekturen.md; CDX-03 | Proposal only, not author-adopted manuscript or full source audit. Bold shows additions/replacements; deletions separately listed. Existing Pages checkpoint is unchanged; no new source admission or import |

## Consolidated corrections, Surface planning and shared-chat provenance

Recorded on 17 September 2026. The external conversation entries below register
available provenance and possible influence, not confirmed use of every proposed
sentence. Their topics overlap with earlier structural/editorial entries; the
import index supplies cross-references instead of treating repeated text as an
independent contribution. Exact manuscript adoption and final citation placement
remain to be mapped against the author-selected passages.

| AI ID | Location / scope | Category | Contribution or provenance | Archive reference | Status |
| --- | --- | --- | --- | --- | --- |
| AI-061 | Interaction and Operation correction exchanges | editorial / conceptual / citation-placement | Targeted revisions and citation-placement proposals following P-0165, consolidated after Tim's deferral request | CDX-03 lines 10503-14020; P-0166 | Chat proposals preserved; no new source audit, manuscript rewrite or blanket adoption in this documentation step |
| AI-062 | Surface working structure | structural / conceptual | Four sections addressing form, communicated function, visible requirements and changing states; short synthesis and boundaries with Interaction/Operation | CDX-03 lines 14021-14194; research/GLIEDERUNG_SURFACE_01.md; P-0167 | Working structure adopted; not finished thesis prose |
| AI-063 | Documentation import and generation | technical / structural | Filtered share-message importer, integrity/gap manifests, overlap index and refreshed PDF | CGPT-05-CGPT-14 manifests; CDX-03 current import request; P-0168 | Implemented archival work; does not itself require a substantive thesis-prose citation |
| AI-064 | Critical thesis review; Interaction/Operation revisions | conceptual / editorial | External AI review plus revisions concerning rules, relevance, sycophancy and GEO | CGPT-05, lines 1-1185 | Imported snapshot; two uploads and one Word artifact missing; exact adoption pending |
| AI-065 | Operation 3 and 4 | conceptual / editorial / structural | Stepwise wording for data routes/reuse, feedback, evaluation and intervention scope | CGPT-06, lines 1-856 | Imported snapshot; one upload missing; exact adoption pending |
| AI-066 | Operation 3 | conceptual / editorial | Drafting data reuse, reCAPTCHA, BetterHelp and personal-attribute inference | CGPT-07, lines 1-453 | Imported snapshot; one upload missing; source claims not newly checked |
| AI-067 | Operation 2 and opening of Operation 3 | conceptual / editorial / structural | Drafting processing criteria, interests, SEO/GEO and additional purposes | CGPT-08, lines 1-1382 | Imported snapshot; one upload missing; exact adoption pending |
| AI-068 | Operation 1 and 2 | conceptual / editorial | Technical context and concise comparison of command/form requirements | CGPT-09, lines 1-946 | Imported snapshot; one upload missing; exact adoption pending |
| AI-069 | Operation 1 and 2 structure/prose | conceptual / structural / editorial | Development of technical context, timing and the placement of SEO/GEO | CGPT-10, lines 1-2318 | Imported snapshot; two uploads missing; overlaps with earlier Operation planning records do not imply separate adoption |
| AI-070 | Interaction and transition to Operation | editorial / conceptual | Sentence-level revisions across the five Interaction sections | CGPT-11, lines 1-1260 | Imported snapshot; matching passages in DRAFT-01/02 and CDX-03 cross-referenced in import index |
| AI-071 | Interaction | editorial / structural | Clarity, compression, correction, suggestions and iteration/reformulation | CGPT-12, lines 1-1391 | Imported snapshot; one upload missing; exact adoption pending |
| AI-072 | Critical perspective and Interaction drafting | conceptual / structural / editorial | Hypothetical Steyerl-informed reading and development of power questions across the three analytical perspectives | CGPT-13, lines 1-4619; relation to CGPT-04 and earlier conceptual records | AI interpretation, not Hito Steyerl's own statements or a scholarly source; two uploads missing; exact adoption pending |
| AI-073 | Early Interaction drafting | editorial / conceptual | Initial formulations for the five Interaction sections from supplied structure and notes | CGPT-14, lines 1-502 | Imported snapshot; two uploads missing; exact adoption pending |
| AI-074 | Surface source basis and case planning | research / conceptual / structural | Existing-source audit, bounded Norman 2008 evaluation, four-section source mapping and proposed dated interface observations; corrected the unsupported assumption that Opaque was a selected service | research/QUELLENUEBERSICHT_SURFACE_01.md; Norman source note; P-0169; current CDX-03 source discussion | Source evaluated; case selection and thesis wording not adopted; no Zotero import |

| AI-075 | Surface trust and behavioral steering | research / conceptual / technical | Proposed three bounded sources, distinguished perceived trust from reliability, disclosure and choice; admitted all three after author approval and retained selected-reading notes and verified Zotero records | research/QUELLENUEBERSICHT_SURFACE_VERTRAUEN_LENKUNG_01.md; three linked source notes; P-0170; CDX-03 | All three sources accepted into the available pool. No particular finding or wording adopted into the manuscript; no manipulation claim about current cases |

For any wording or substantive synthesis actually retained or paraphrased in the
thesis, cite the relevant AI archive/page/lines as required by the project rules;
factual claims still require their scholarly or primary sources. Current PDF
section/page ranges are generated in
`archive/shared-chat-import-2026-09-17-pages.json`. Older closure locators below
refer to their dated working editions, not automatically to the rebuilt edition.

## Closure locators

Closure locator for AI-075 (17 September 2026): CDX-03 lines 14537-14809,
printed pp. 477-481 of the 756-page working edition. Effects-source request
starts at line 14645; three-source approval at line 14769. P-0170 metrics
appear on printed p. 755. PDF hash and QA are retained in P-0170 / W-186.
Import is confirmed; later paragraph-level adoption remains undecided.

Closure locator for AI-074 (17 September 2026): CDX-03 lines 14304-14499,
printed pp. 474-477 of the 752-page working edition (hash in P-0169 closure).
Inventory precedes approval at line 14437; Opaque clarification is at
lines 14465-14480. Proposed examples are not actual captures or adopted prose.

Closure locator for AI-060 (16 September 2026): CDX-03 lines 10386-10427,
printed p. 418, contain the current request and saved-result updates; the
agreed correction workflow is at lines 10372-10384 on the same page. Exact
DRAFT-07 occupies printed pp. 438-439, lines 1-103. P-0165 metrics appear on
printed p. 475 of the checked 476-page working PDF. The 351-message archive
includes visible communication through 05:58:12.640 UTC; the final marked
revision enters the next sync. No author adoption is implied.

Closure locator for AI-059 (15 September 2026): current request and saved-result
updates are CDX-03 lines 10162-10196, printed p. 415. P-0164 metrics appear on
printed p. 470 of the checked 471-page working edition. The archive contains
342 visible messages through 16:16:20.156 UTC. Subsequent commentary and final
bullets enter the next synchronization; this is not manuscript adoption.

Closure locator for AI-058 (15 September 2026): CDX-03 lines 9967-9989,
printed p. 412, preserve the request and saved-result updates. P-0163 metrics
are on printed p. 466 of the checked 468-page working edition. The archive
contains 336 visible messages through 15:54:10.756 UTC; the final bullet answer
enters the next synchronization. Version 02 remains a proposal, not adopted prose.

Closure locator for AI-057 (15 September 2026): current request and saved-result
updates are CDX-03 lines 9814-9867, printed pp. 410-411. The exact DRAFT-06
occupies printed pp. 429-430, lines 1-130; P-0162 metrics appear on printed
p. 465. The checked 466-page working PDF includes visible communication through
15:48:07.483 UTC. Later commentary and the final response enter the next sync;
no manuscript adoption is implied by this review record.

Closure locator for AI-056 (15 September 2026): CDX-03 request and result
updates at lines 9628-9652 appear on printed pp. 407-408. P-0161 metrics
are on p. 460. Checked PDF: 461 A4 pages, SHA-256
`859e1406fbf32505571decf00baab513591b2e60208666d6b3bf0cfde359beaf`.
320 visible messages, 9,652 transcript lines; latest included update
15:18:00.076 UTC. Subsequent commentary and final bullets enter the next sync.
The complete bullet proposal is a local research artifact, not adopted prose.
Working-edition locators must be rechecked before submission.

Closure locator for AI-055 (15 September 2026): CDX-03 selection and result
updates at lines 9510-9557 appear on printed p. 406. P-0160 metrics are on
pp. 457-458. Checked PDF: 459 A4 pages, SHA-256
`a3a968ff5b547661603ae304fe34eec18ded2beea48911fd02aada090bede590`.
314 visible messages, 9,557 transcript lines; latest included update
15:11:23.242 UTC. Later QA commentary and final handoff enter the next sync.
Source notes and the writing map are research artifacts, not adopted prose.
Working-edition locators must be rechecked before submission.

Closure locator for AI-054 (15 September 2026): CDX-03 lines 8338-9508
appear on printed pp. 389-406; revision request p. 401. DRAFT-05 appears on
pp. 421-423; P-0159 metrics p. 457. Checked PDF: 458 A4 pages, SHA-256
`e497a8cdf71cbb9b5431f236ad994e7de1eecab6da05bfaaa8dc7d2ac8ad8ab9`.
310 visible messages, 9,527 transcript lines; latest included update
14:57:19.194 UTC. Later research and closure enter P-0160 and the next sync.
These are working-edition locators, not final submission pagination.

Closure locator for AI-053 (15 September 2026): CDX-03 whole-outline discussion
at lines 8080-8194 appears on printed pp. 385-387; authorization and saved-state
updates at lines 8196-8223 appear on p. 387. P-0158 metrics are on p. 435.
The checked working PDF contains 436 A4 pages, SHA-256
`3162830e516177cdbebef02cffa63cc505932fc1d739d9d7f7acc9f239754ec9`.
The archive contains 275 visible messages, with the latest included update at
13:18:25.477 UTC. Later boundary commentary, QA and the final outline summary
enter the next synchronization. The complete revised outline is retained as
a local structural artifact, not adopted thesis prose; current outline SHA-256
`ebebe04c7e4bc700b365472aa1ee186aa040da37cb6dd025136fe73dd31fb213`.
These are working-edition locators, to be verified again before submission.

Closure locator for AI-052 (15 September 2026): CDX-03 supplied-draft review and
advice at lines 7748-7926 appear on printed pp. 381-383; authorized continuation
and saved-state updates at lines 7928-7974 appear on pp. 383-384. DRAFT-04
lines 1-95 are on pp. 397-398. P-0157 metrics are on pp. 431-432. The checked
PDF has 433 A4 pages, SHA-256
`e39f6753e35fdb52d9db8259bb95e80c83ed5dbe2273f5c62f45b96c73b44c2f`.
The archive contains 265 visible messages; latest included visible update
13:03:05.161 UTC. Later QA commentary and final handoff enter the next sync.
The full writing map and source notes remain local structural/research artifacts,
not adopted thesis passages. Source-version and archival limits remain open.

Closure locator for AI-051 (15 September 2026): CDX-03 initial outline,
overlap review, revised proposal and external-feedback discussion at lines
6865-7538 appear on printed pp. 368-378. The current adoption and saved-state
updates at lines 7540-7566 appear on p. 378. DRAFT-03 lines 1-90 are on
pp. 389-390; P-0156 metrics are on p. 423. The checked PDF has 424 A4 pages,
SHA-256 `576ab18a6a03e0664f78ed70ea5ae451b2fac184c58c1ac37e57bf0761b620ec`.
The archive contains 253 visible messages; latest included visible update is
12:16:38.945 UTC. Later QA commentary and final bullet outline enter the next
synchronization. These working-edition locators document structural use, not
adopted thesis prose. The full current structural artifact is retained locally.

Closure locator for AI-050 (15 September 2026): CDX-03 note repetition,
clarification and placement discussion at lines 6630-6820 appear on printed
pp. 365-368. The adoption and save updates at lines 6822-6845 are on p. 368.
P-0155 metrics are on p. 411. The checked PDF has 412 A4 pages, SHA-256
`5646ee4b3edd31f196d2fbcb34bdc7582eac4f136c712345714c6c15ef6a5957`.
The archive contains 237 visible messages; latest included update is
11:38:28.965 UTC. Later QA commentary and final handoff enter the next sync.
These are working-edition structural locators, not adopted thesis-prose citations.

Closure locator for AI-049 (15 September 2026): CDX-03 lines 6567-6599 appear
on printed pp. 364-365 of the 409-page A4 working PDF. P-0154 metrics appear
on printed pp. 407-408. The archive contains 226 visible messages, latest
included update at 11:01:34.460 UTC. PDF SHA-256:
`f56a0cd401598e2e9ba870d5446e2a5030e1a2e94eb0457f84124ebfbb3dde68`.
The local note file retains the full outline; the archive contains the request
and saved-state summaries. Final handoff enters the next synchronization.
These are provisional research/structure locators, not thesis-prose citations.

Closure locator for AI-048 (15 September 2026): the research request and result
updates at CDX-03 lines 6437-6491 appear on printed pp. 362-363. The archive
contains 220 visible messages, latest included update at 10:47:42.106 UTC.
P-0153 metrics are on printed p. 405. The checked working PDF has 407 A4 pages,
SHA-256 `a4c82de2975f745ebec2d2a48efe0839733e2167f234d4e9811156ef53cd80da`.
The local research memo retains the full source analysis; the visible archive
contains the request and progress/result summaries, not the full local artifact.
Later QA commentary and the final handoff enter the next synchronization.
These are working-edition research locators, not adopted thesis-prose citations.

Closure locator for AI-047 (15 September 2026): CDX-03 subsection development
at lines 5970-6283 appears on printed pp. 356-360. The author-supplied working
outline and adoption at lines 6284-6394 appear on pp. 360-362; saved-state
updates at lines 6397-6416 appear on p. 362. The synchronized archive contains
212 visible messages, latest included update at 10:15:46.410 UTC. P-0152
metrics are on printed p. 404. The checked working PDF has 405 A4 pages,
SHA-256 `87b829ca4d8fb91d97c8bd31c4680afc1b55cbb1b108fe6b7dcb66a2e0d22427`.
The working subsection outline has SHA-256
`ed3ecab80228c20e0060ed0f4a9134181a955c2e7d716c43cc11d218713c0fb9`.
Its wording matches the archived user message after whitespace normalization.
Later QA commentary and final handoff enter the next synchronization; this
structural adoption is not a final thesis-prose or source-citation sign-off.

Closure locator for AI-046 (15 September 2026): the structural review at
CDX-03 lines 5854-5926 appears on printed pp. 354-355; the authorized outline
refinement and saved-state updates at lines 5928-5954 appear on p. 355.
The synchronized archive contains 200 visible messages, latest visible update
at 09:35:22.414 UTC. P-0151 metrics are on printed p. 397. The checked working
PDF has 398 A4 pages, SHA-256
`c5036d238f2f4b811f524a91fe4319526195baac4e469ada5a0a8cb475925a37`.
The detailed local outline has SHA-256
`35965ccd5e870c18b2773528c81530f0022a33708432f6e43cc4197e7e206a18`.
Transcript locators record discussion and adoption, not the full outline text.
Final handoff enters the next synchronization; thesis adoption still requires
passage-level source and AI-provenance mapping.

Closure locator for AI-045 (15 September 2026): CDX-03 readiness clarification
at lines 5783–5815, printed pp. 353–354; authorized eight-record import and
saved-result updates at lines 5817–5842, printed p. 354. The synchronized
archive contains 192 visible messages, latest visible update at
09:24:25.107 UTC. P-0150 metrics are on printed p. 395. The checked working
PDF has 397 A4 pages, SHA-256
`405fff996557fe78d3b88a284da7288cc49d71abf2008bf9ec0509a3a0cf3bd2`.
These locators document the import and readiness discussion, not the full
wording of the existing source notes. Final handoff enters the next synchronization.

Closure locator for AI-044 (15 September 2026): CDX-03 advisory discussion
at lines 5566–5685, printed pp. 350–352; authorized evaluation/import and
saved-result updates at lines 5687–5744, printed p. 352. The synchronized
archive contains 183 visible messages, latest visible update at
08:15:45.819 UTC. P-0149 metrics are on printed p. 394. The checked working
PDF has 395 A4 pages, SHA-256
`992cd4a88557927b3ec29fec99147798e37b29753b0192cccc6404b40e7e2806`.
These locators document the conversation and work, not the complete wording
of the three local source notes. Final handoff enters the next synchronization.

Closure locator for AI-043 (15 September 2026): the research request and
progress/results, CDX-03 lines 5437–5502, appear on printed pp. 348–349 of the
391-page working PDF. The preceding source-priority discussion is at lines
5371–5435. P-0148 metrics are on printed p. 390. PDF SHA-256:
`9cad6c81d4f0905092a79c1a20694ae7839268c9be48c2c10c4c55f1dcdbefee`.
Both machine-session segments are included, with 168 visible messages through
the 07:45:18.623 UTC saved-results update. Later closure commentary and the
final handoff enter the next synchronization. Source notes are retained local
AI-analysis artifacts; these progress locators do not pretend to contain their
full wording. Reconcile adopted passages and refresh locators before submission.

Closure locator for AI-042 (15 September 2026): CDX-03 lines 5070-5258
appear on printed pp. 343-346 of the 388-page working PDF. The adoption
request is at lines 5236-5238 on p. 345; P-0147 metrics are on p. 386.
PDF SHA-256:
`98ae97b4a76e9db4cc83fbb77e2e5de9db789d353fefbcc9ca5ab93164ba5988`.
The archive includes 153 visible messages through the 06:22:20.035 UTC
saved-state update. Later closure commentary and the final handoff enter
the next synchronization. These are working-edition locators for the
structural proposal and adoption, not citations for finished chapter prose.

Closure locator for AI-040/AI-041 (15 September 2026): the 384-page working
PDF contains CDX-03 through line 5055 (144 visible messages). The editorial
phase, lines 3897-5011, appears on printed pp. 326-342; the checkpoint request
and saved-state updates, lines 5013-5053, on pp. 342-343. DRAFT-01 is on
pp. 344-348 and DRAFT-02 on pp. 349-353. Both new process metrics appear on
p. 383. PDF SHA-256:
`6ccc31367c1873813bd6403516281333e70e378c80ceee2d54c4549c73172307`.
These are working-edition locators, not completed paragraph-level citations
for TXT-001. The archive includes the 06:08:25.981 UTC update; the final
handoff enters the next synchronization.

Closure locator for AI-039 (14 September 2026): CDX-03 lines 3850-3878 appear
on printed p. 325 of the 356-page working PDF. P-0144 metrics are on printed
p. 355. PDF SHA-256:
`f199d84c1385f5a810d8c0ab1fb956ce6c002300dd9db6536aced69cf468759f`.
The archive includes the result update at 10:41:50.208 UTC; the final handoff
enters the next synchronization. Recheck working-edition locators at adoption.

Closure locator for AI-037/AI-038 (14 September 2026): the 355-page working
PDF includes CDX-03 through line 3807. The source-search/evaluation turn,
lines 3764-3807, appears on printed p. 324; P-0142/P-0143 metrics are on
printed pp. 353-354. PDF SHA-256:
`5d1acce58d7cf96072400b47c43714de529b1a7b92988af4c6f18e3e636bbc6f`.
The latest included visible update is 10:12:44.901 UTC. Subsequent closure
commentary and the final handoff enter the next sync. These locators refer
to this working edition and must be checked again before thesis adoption.

Closure locator for AI-036: CDX-03 lines 2526-2619 appear on printed pages 306-307, and lines 2621-2657 on printed page 308 of the 338-page working PDF dated 14 September 2026. Process metrics P-0140/P-0141 appear on printed page 337. These are working-edition locators; verify them again before submission. The two Markdown source notes remain the retained AI-generated analysis artifacts, not adopted thesis text. The final handoff enters the next transcript export.

1. Assign the passage a stable `TXT-###` identifier in `PASSAGE_REGISTER.md`.
2. Assign the next unused `AI-###` identifier before inserting AI-derived wording or argumentation.
3. Add boundary and source comments around the passage in the `.tex` file:

   ```tex
   % TRACE-BEGIN: TXT-### | PROCESS: P-#### | AI: AI-###
   % AI-USAGE: AI-### | CDX-## lines ####-#### | paraphrase
   The thesis passage goes here.
   % TRACE-END: TXT-###
   ```

4. Add the documentation citation after the relevant sentence or paragraph:

   ```tex
   \aidocref{CDX-##}{page}{####--####}
   ```

5. Link all relevant `P-####` events and scholarly citation keys to the `TXT-###` entry.
6. Record the external sources used to verify the claim. AI documentation never replaces the scholarly citation supporting the claim.
7. Recheck page and line references against the final documentation PDF before submission.
