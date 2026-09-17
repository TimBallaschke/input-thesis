# Passage Register

This register gives every substantive thesis passage a stable identifier independent of its current file location or page number. It will later provide the data source for footnotes, margin information or another visual process layer.

Since 15 September 2026, the author's retained Interaction chapter has a
chapter-level checkpoint ID. This does not certify final wording, source
coverage or paragraph-level AI provenance. Earlier unregistered drafting
records remain historical; finer passage IDs can be introduced when the
checkpoint is mapped to individual arguments.

## Register

| Passage ID | Thesis file and section | Draft status | Related process IDs | AI usage IDs | Scholarly source keys | Notes |
| --- | --- | --- | --- | --- | --- | --- |
| TXT-001 | `research/checkpoints/2026-09-15-interaction/260914d_Master_Thesis.pages`, Interaction chapter | author-confirmed interim checkpoint | P-0145, P-0146; earlier linked drafting history | AI-040: recent editorial history, exact adopted wording pending; AI-041: technical checkpoint | Pending passage-level reconciliation against the frozen Pages chapter; existing source evaluations retain their limits | Full manuscript preserved byte-identically, only Interaction retained by this decision. No new text extraction, source audit, final AI-citation mapping or LaTeX insertion. See checkpoint README |

## Entry template

Documentation checkpoint, 17 September 2026: CGPT-05-CGPT-14 and the deferred
CDX-03 corrections are now represented in the communication archive and usage
register. Their import does not establish which formulations survive in
`presentation/260917_Master_Thesis.pages`. No new TXT ID is assigned merely
because an external chat was archived. Paragraph-level reconciliation of the
current author-selected manuscript, AI wording and source citations remains open.

| TXT-### | `thesis/chapters/...tex`, section and paragraph | outline / draft / author-revised / final | P-####, P-#### | AI-### or none | Zotero citation keys | Scope, changes or verification notes |

## LaTeX boundary markers

Place stable comments around each registered passage:

```tex
% TRACE-BEGIN: TXT-### | PROCESS: P-####, P-#### | AI: AI-###
The thesis passage goes here.
% TRACE-END: TXT-###
```

These comments do not appear in the PDF. They allow a passage to move between files without losing its process history.

## Rules

1. Assign an ID when substantive prose first enters a chapter file, not during loose brainstorming.
2. Keep an ID when a passage is revised or moved.
3. When one passage is split into independent arguments, retain the original ID for one part and create a new ID for the other.
4. Link every content-affecting process event and AI use to the passage.
5. Record the scholarly citation keys that verify factual or theoretical claims.
6. Mark a passage `final` only after author review, source verification and AI-reference verification.
