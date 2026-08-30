# Passage Register

This register gives every substantive thesis passage a stable identifier independent of its current file location or page number. It will later provide the data source for footnotes, margin information or another visual process layer.

No substantive thesis prose exists yet, so no `TXT-###` entry has been assigned.

## Register

| Passage ID | Thesis file and section | Draft status | Related process IDs | AI usage IDs | Scholarly source keys | Notes |
| --- | --- | --- | --- | --- | --- | --- |

## Entry template

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
