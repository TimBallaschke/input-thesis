# Project Brief: Input

## Status

This document records confirmed requirements for the Master's thesis. Items marked as open must be completed when the corresponding official information becomes available.

Tim clarified that page numbers must remain 10 pt, including title and
bibliography pages. This supersedes the page-number part of the intervening
6 pt annotation update; the existing text sizes and page areas are retained.

### Current AI-documentation and chapter-leaf PDF exports — 8 October 2026

Tim requested both exports. The AI PDF contains the current 383-page HTML
edition with the initial message exclusion, 6 pt body, 10 pt footers and
duplex margins. Every numbered row, PDF link and all 686 thesis endpoint
positions pass independent PDF checks. The chapter-leaf PDF contains 16 A4
faces for eight A6 leaves with title reverse and cut marks; text, boxes and
all faces verify. Native PDF paths ensure actual 0.25 pt cut marks. Print at
100% with long-edge duplex. Files: output/pdf/input-ki-dokumentation.pdf and
output/pdf/input-a6-schnittmarken.pdf. P-0278 / W-296; main thesis unchanged.

### Two verified main-thesis PDF editions — 8 October 2026

Tim requested digital and print exports. The digital edition has 27 pages
with all six chapter/bibliography title pages; the print edition removes
those six pages and numbers its 21 content pages from 01 to 21. Separate
A6 divider sheets remain independent. All content geometry, 1,700 body,
99 source, 230 AI and 162 bibliography rows are exact in both PDFs.
All 178 internal links resolve with correctly remapped print destinations;
all AI range URLs are retained and point to the local HTML documentation.
Embedded vector Arketa glyphs, 84 native gender stars, A4 geometry and every
page number pass. All 48 pages rendered; contact sheets and detailed samples
visually checked. Canonical preview, original Pages and original plugin
unchanged. P-0277 / W-295; pdf-export-manifest.json and
pdf-variant-verification.json. Outputs: output/pdf/Input_Digital_mit_Kapitelseiten.pdf
and output/pdf/Input_Druck_ohne_Kapitelseiten.pdf.

### Native upper position for gender asterisks — 8 October 2026

Tim requested ordinary high-positioned gender asterisks instead of lowercase
x-height centring. Removed the custom vertical shift; U+002A now uses its
native Arketa position on the same text baseline, at the same size. All 84
gender stars pass independent rendered baseline/font checks. All body and
source/AI/bibliography composition remains exact; 27 pages, 1,700 body rows.
Full audits pass; pages 2, 20 and 25 visually checked. P-0276 / W-294;
native-gender-star-results.json; preview refreshed; no PDF export.

### Five single-word endings on pages 20, 22 and 25 — 8 October 2026

Tim requested more text beside isolated closing words, preferring wider
tracking; word continuations are acceptable. Local positive bases for
paragraphs 102 (+17), 105 (+6), 107 (+13), 117 (+11) and 127 (+36 InDesign
units) retain all row counts and relative ±10 variation. The endings are
now “zu unterscheiden”, “vorzugt werden”, “terschiedlich ausfiel”,
“werden können” and “gungen verfügt”. All other body breaks and all
source/AI/bibliography composition remain. Full audits pass: 27 pages,
1,700 body rows; all three pages visually checked. P-0275 / W-293;
single-word-ending-results.json; preview refreshed; no PDF export.

### Keep “erfüllt ist” in page 14's left column — 8 October 2026

Tim requested pulling paragraph 65's closing row back from the right column.
Paragraph 63 now uses −17 InDesign units with relative ±10 variation, saving
one row (10 instead of 11) while ending with the complete word “Reformulierung”.
Paragraph 65 remains unchanged and fits wholly in the left column; the right
column starts with “Bei Suchergebnissen …”. All other horizontal breaks and
all source/AI/bibliography composition remain. Full audits pass: 27 pages,
1,700 body rows; pages 14–15 visually checked. P-0274 / W-292;
erfuellt-column-results.json; preview refreshed; no PDF export.

### Authorised proofreading and six paragraph endings — 8 October 2026

Tim approved the proofreading corrections except the wording “Eine sachliche
Aufforderung …” and substantive changes to the introduction. Corrected
“digitalen Systemen” in paragraph 1, the stray closing quotation mark in
paragraph 71 and the duplicate period at paragraph 111's source call.
Six local tracking bases remove isolated word continuations at the endings
of paragraphs 6, 63, 88, 92, 110 and 111. All other body breaks and all
source/AI/bibliography lines remain. The current preview has 27 pages and
1,701 body rows. Full browser/source/bibliography/AI-reference audits pass;
pages 2, 14, 15, 18, 19 and 21 visually checked. Original Pages and plugin
unchanged. P-0273 / W-291; proofreading-results.json; no PDF export.

### Opening User message omitted from the visible AI documentation — 8 October 2026

Tim requested removing his first User message. The visible HTML/print edition
omits CGPT-01 canonical lines 7–20 and its heading; no curated thesis citation
uses those lines. Original archives and historical LaTeX/PDF remain intact.
The following System reply starts at visible line 1. All retained rows/styles
remain; documentation has 383 pages. All 343 thesis references and 686 visible
endpoints pass after numeric-label refresh. Existing body/source/bibliography
composition stays exact, with 27 thesis pages. A later quoted repetition is
unchanged pending Tim's answer. P-0272 / W-290; previews refreshed; no PDF export.

### At least one complete word at each subchapter ending — 7 October 2026

Tim additionally requested a complete word in the final body row of each
subchapter. The local adapter rejects endings consisting only of a word
fragment; a fragment accompanied by another complete word is allowed.
Source labels and punctuation do not count. The existing indent-plus-three
minimum remains. All 13 subchapter endings pass an independent check against
whole-word spans in the unbroken manuscript. Only paragraph 62 reflows,
ending with “vorschlagen” instead of “schlagen”; its 11 rows remain.
The current 27-page edition retains 1,704 body rows, all prior tracking/glyph
bounds, annotation/bibliography lines and links. Full audits and page 14 visual
check pass. P-0270 / W-288; preview refreshed; no PDF export.

### Minimum width for every paragraph ending — 7 October 2026

Tim requested a general closing-line minimum: normal paragraph indent
plus three character advances. With the current four-character indent,
this is seven loaded Arketa advances (about 60.65 CSS px at 10 pt).
It applies even where the opening indent is suppressed; small source
labels are excluded from the body-text width. The local body adapter
rejects short closing candidates, and all 127 printed paragraph endings
pass independent DOM measurement. Sixteen paragraphs reflow; the current
27-page edition has 1,704 body rows. Existing tracking bases,
variation ranges and glyph-scale bounds remain; paragraph 88 uses the
existing 40 px ragged retry. Source/AI/bibliography lines, text and links
remain, and all full audits pass. Example page 11 visually checked.
P-0269 / W-287; preview refreshed; no PDF export.

### Paragraph 109 without an isolated final word — 7 October 2026

Tim requested pulling “gilt.” into the preceding row. A −4 InDesign-unit
base with relative ±10 variation gives paragraph 109 17 instead of 18 rows,
ending “als geeignet oder erwünscht gilt.”. This is the first successful
negative integer base tested that saves a full row. Only this paragraph's
horizontal breaks changed; all other body breaks, annotation/bibliography
lines, text and links remain. The current shared 27-page edition has
1,708 body rows and passes full browser/source/bibliography checks.
Current page 21 visually checked; proof: gilt-paragraph-tracking-results.json.
P-0268 / W-286; preview refreshed; no PDF export.

### FTC paragraph with a complete final word — 7 October 2026

Tim requested a tracking adjustment to remove the isolated “den.” after
“wer-” in paragraph 116. A −16 InDesign-unit base, with the existing relative
±10 variation, produces 17 instead of 18 rows and closes with
“Daten anschließend verwendet werden.”. It is the smallest successful
negative integer adjustment tested. Source-call spacing accounts for the
row's tracking; text, font size and glyph-scale limits remain. Concurrent
paragraph 38/41 settings were retained. Current shared 27-page edition
has 1,709 body rows; full browser/source/bibliography audits pass.
Current page 22 visually checked; proof: ftc-paragraph-tracking-results.json.
P-0267 / W-285; preview refreshed; no PDF export.

### Keep thesis documentation references synchronized — 7 October 2026

Tim reported mismatched page/line notices. Every thesis composition now
refreshes all 15 notices from the current printed documentation, even when
using an already captured manuscript. Links include its edition identifier;
the documentation preview fetches its catalog, positions and pages without
stale cache entries. Its 383-page edition retains the existing layout.
All 343 printed labels and 686 visible start/end rows pass a direct browser
audit, including an actual thesis link to page 5, row 942. The existing
numeric labels were already current; no concrete mismatch was reproduced.
All previous line texts/breaks remain. Current shared thesis: 28 pages;
full layout/documentation/source/bibliography checks pass. P-0265 / W-283;
preview refreshed, no PDF export.

### Annotation separator only within the same column — 7 October 2026

Tim requested no stars or surrounding blank rows when annotations start in
a new physical column or page. Pagination now removes that opening separator
and preserves the observed column break, with zero leading margin. All 15
section endings pass: 14 retain their separator; Schluss begins directly
at the top of page 26’s right column. All text and horizontal breaks are
unchanged, and all 36 bibliography entries still fit on one content page.
The current shared edition has 28 pages and passes full browser/source/
bibliography checks. Visual proof: annotation-column-start-no-separator.png.
P-0266 / W-284; preview refreshed; no PDF export.

### Citation and AI notices at 1.2 leading — 7 October 2026

Tim requested 1.2 line spacing for the printed citation and AI notices. At
6 pt this is 7.2 pt (2.54 mm). Both annotation classes now share this independent
small raster; the following body text returns to the retained 59-row body
grid through the measured final gap. Sources at a new column have no leading
blank row. The 10 pt page counters remain at 8 mm from the bottom edge.
All final browser/source/bibliography checks pass in the current shared
27-page edition, including unchanged annotation words, links and horizontal
breaks. The current 10 pt body had restored the flagged lone “be.” in
paragraph 74; a −0.002 em base with relative ±0.01 em variation now closes
that paragraph with the whole word “Eingabe.”, confirmed on page 17.
P-0264 / W-282; refreshed HTML preview; no PDF export.

### Fit the complete bibliography on one content page — 7 October 2026

Tim requested tracking adjustments to fit all bibliography entries on one
page. The bibliography uses a −15/1000 em base with the existing ±10/1000 em
variation (−25 to −5 InDesign units). Closing rows and necessary short fallback
rows retain natural tracking. All 36 complete entries fit on page 27 in 162
rows; 6 pt type, leading, entry spacing and glyph scaling remain. Full text,
links, source/grid, hyphenation and bibliography checks pass; page visually
checked. Concurrent paragraph-tracking settings were retained. P-0264 / W-282;
browser updated, no PDF export.

### Let body endings finish before following annotations — 7 October 2026

Tim identified an isolated “sind.” on the following page despite an available
body row. The annotation separator had `break-before: avoid`, keeping it with
the last body line. It now uses `auto`. A controlled boundary case with the
actual paragraph reproduces the old move and confirms that the closing word
stays in the final available row while the separator and notes start on the
next page. The current combined 29-page edition passes full text/link/grid,
hyphenation, source-outline and bibliography checks; paragraph 122 closes
on page 24 in the live preview. No tracking or text change. P-0263 / W-281;
no PDF export.

### Avoid isolated final word fragments — 7 October 2026

Tim wants paragraph-level tracking adjustments for endings such as an isolated
“be.” after “Einga-”. Recompose the affected paragraph around its adjusted base
and check the ending. Paragraph 74 (“Dabei lassen sich”) already ends cleanly
with “ständigen technischen Eingabe.” in the latest edition, confirmed on page
17 in the live browser. No extra tracking or layout edit was necessary here.
P-0262 / W-280.

### Sources without a leading blank row at page or column starts — 7 October 2026

Tim requested no extra blank row before sources that begin on a new page.
Source margins are now discarded at physical page/column boundaries; the
small AI-to-source separator remains within a column. The current 28-page
edition has two checked openings on pages 5 and 11, both on the first body
baseline with zero leading margin. Full text, links, grid, source outlines,
footer, hyphenation and bibliography checks pass; the live preview agrees.
Frozen HTML versions its stylesheet URL to refresh cached print styles.
P-0260 / W-278; no PDF export.

### Tracking-based manual break correction — 7 October 2026

For an awkward page break, Tim wants to try a small increase in the page's
base tracking, recompose the ragged text around that new base, and inspect
the page and its continuation. A single-line increase is a final refinement.
Plus five is provisionally +5/1000 em; the current ±10/1000 em variation stays
relative to the base (−5 to +15/1000 em in that example). The unit was asked
for clarification. This is a manual correction workflow; no automatic
page-optimization feature or extra tracking has been applied to the current
verified edition. Vertical baseline grid and established typography remain.
P-0256 / W-274.

### Fill thesis columns before preventing a lone closing line — 7 October 2026

Tim prefers a full type area to keeping two closing paragraph lines together.
Body widows are now one; paragraph openings retain two-line protection.
Page 7 has matching column bottoms within 0.0083 mm, with only the
closing line of the paragraph continuing on page 8. All previous 1,695 body
lines and breaks are preserved; current pagination is 28 pages. Full text,
source/AI links, grid, footer, hyphenation, source and bibliography checks pass.
The preview's internal fragment navigation is verified after cache refresh.
P-0255 / W-273; no PDF export.

### Flush-left thesis column openings — 7 October 2026

Tim requested no paragraph indent at the beginning of a physical column.
The final pagination determines which opening lines become flush left;
normal paragraph indents within a column remain. All 112 positions pass
in the checked 29-page edition (four suppressed, 108 retained). The reference
paragraph on page 6 is visually verified. The browser loader now refreshes
the frozen document on each reload to avoid stale layouts.
P-0254 / W-272; no PDF export.

### Duplex AI documentation — 7 October 2026

Tim requested double-sided printing with mirrored binding margins. The AI
browser and fully loaded print editions now use 30 mm inside and 8 mm outside:
odd pages 30 mm left / 8 mm right, even pages 8 mm left / 30 mm right.
The 10 pt footer follows the mirrored frame. Global page numbers determine
parity across all archives and lazy loading. All 383 page HTML hashes and
page/line/target mappings are unchanged; text remains 6 pt in the prior two
columns. All text/archive/target checks, 66 geometries, 383 print sides and
browser navigation pass; pages 2–3 visually reviewed. P-0250 / W-268; no main
thesis edit, PDF export or physical print. Use duplex on the long edge.

### More regular long–short thesis rhythm — 7 October 2026

Tim retained the 10 percent ragged zone and requested less organic variation
around the alternating long–short rhythm. Both variances now use 1 percent
instead of 2 percent: long targets 99–100 percent, short targets 90–91 percent.
The three-division maximum and existing tracking/scaling remain. Complete
text/link/grid, source-outline and bibliography audits pass for 28 pages:
1,688 body, 99 source, 230 AI-notice and 164 bibliography rows. Only the existing
source/AI overflow exceptions use wider zones. Pages 4 and 7 visually checked;
preview refreshed. Original plugin and manuscript hashes remain unchanged.
P-0246 / W-264. No PDF export.

### Restore three consecutive word divisions — 6 October 2026

Tim reverted the maximum to three (`maxHyphens: 3`). All 163 rendered
body/bibliography paragraphs comply. The 28-page edition has 1,691 body rows,
all within the regular 10 percent zone; source/AI exceptions retain 40/36 px.
Complete text/link/grid and bibliography checks pass. Concurrent annotation
layout is retained. This supersedes the two-division setting below.
P-0242 / W-260. No PDF export.

### Two consecutive word divisions — 6 October 2026

Tim requested a maximum of two consecutive hyphen-ending lines. The thesis
embedding uses `maxHyphens: 2` and checks rendered line endings, including existing
compound hyphens, because the plugin fallback can otherwise exceed its limit.
All 163 body/bibliography paragraphs comply. Four narrow body paragraphs use
36–48 px zones to maintain the rule; one source uses 40 px and one AI notice 36 px
against overflows. The regular zone remains 10 percent; tracking/scaling and
minimum two-character prefixes/suffixes remain unchanged. The current 28-page
browser edition has 1,689 body rows and passes complete text/link/grid, source and
bibliography checks. Concurrent annotation-flow updates are preserved. Page 7
visually checked; original plugin/Pages hashes unchanged. P-0241 / W-259.
No PDF export.

### Organic thesis ragged-right profile — 6 October 2026

Tim approved a regular 10 percent column-relative zone, with irregular alternating
long targets at 98–100 percent and short targets at 90–92 percent. Tracking remains
−0.01 to +0.01 em and horizontal glyph scaling 98–102 percent. The embedding
converts percentages to actual column pixels before calling the unchanged plugin;
body, annotations and bibliography share the profile. One source paragraph and one
AI notice retain a 48 px feasibility fallback beyond the regular 10 percent zone.
Reflow preserves complete sources, four-row AI continuations and optically centered
star separators. The complete 28-page browser edition passes all prose/link/grid,
source-outline and bibliography checks: 1,691 body, 99 source, 229 AI-notice and
165 bibliography rows. Representative pages 2, 4 and 11 visually checked. Original
Pages/plugin hashes remain unchanged. P-0240 / W-258. No PDF export.

### Six-point thesis annotations and page numbers — 6 October 2026

Tim requested 6 pt for scholarly sources, inline bracket labels and page
numbers. Thesis AI notices also use 6 pt under the annotation scope; the
bibliography was already 6 pt. The selected 9.793 pt source/notice leading
remains three quarters of body leading (163.2 percent of the new size).
Native case brackets, measured centering and optical gaps remain; the footer
correction keeps page-number boxes 8 mm above the paper bottom. All 89 pairs,
full prose/source/notice text, links, grid/gaps and source contours pass.
The current browser edition has 31 pages, 1,696 body rows, 98 source rows and
454 AI-notice rows. P-0232 / W-250; CDX-06. No PDF export.

### Literature and source bibliography — 6 October 2026

Tim requested a bibliography after the conclusion, preceded by a separate title
page in the existing centered, tracked uppercase style. The browser edition now
includes all 35 cited works once plus the accompanying AI documentation, sorted
alphabetically, in Arketa 6 pt with the AI-documentation leading (281 mm / 102),
two 83.5 mm columns, 5 mm gap and the established A4 margins. Complete entries
come from the existing Zotero export and supplemental project records; DOI/URL
and documentation links remain clickable. Undated snapshots retain “o. J.”
and their saved date. Citation style remains a project choice, not an asserted
institutional requirement. The initial bibliography fit one page and followed its title
page with continuous numbering; its full text, unique key coverage, links and
geometry pass. P-0221 / W-239; CDX-08. Browser update only, no PDF export.

The follow-up identifies the documented AI use, ChatGPT/Codex (OpenAI), and
six exact provider/runtime model identifiers from model-register.json.
CGPT-01–04 have no preserved model metadata and are explicitly marked.
The April 2025 HFBK AI guideline requires the documentation in the bibliography;
it does not explicitly require a model list. That list adds transparency and
does not replace passage-level page/line references. The expanded bibliography
flows over two pages with the same type, columns, spacing and footer. Historical
AI archive texts and page/line numbering remain unchanged. All entries, links,
geometry and the current combined manuscript/grid audit pass. P-0233 / W-251.
No PDF export.

The bibliography title is now English, “Bibliography”, in both the main HTML
edition and the separate A6 leaf; the retained LaTeX source uses the same label. P-0236 / W-254.

### Separate A6 title and chapter leaves — 6 October 2026

Tim selected portrait A6, 105 × 148 mm, vertically centered and bound flush
left on the A4 carrier. This leaves 8.5 mm / about 10.2 percent of the first
text column visible. The separate thesis/chapter-sheets template contains
Input with Tim Ballaschke, Surface, Interaction, Operation, Conclusion,
Bibliography, KI-Dokumentation and a blank final leaf for later reverse design.
No introduction leaf. Arketa 10 pt matches the main setting. Tim defines single tracking
as one space between letters, measured as 0.65 em in Arketa. Tim removed
the trial chapter overview. INPUT now stands alone vertically centered,
aligned exactly like Surface, Interaction and Operation. It retains 2.6 em
tracking, corresponding to four Arketa spaces. Tim Ballaschke now uses normal
capitalization without tracking and stands alone at the bottom of the front.
Matr.-Nr. 2455025 stands on the reverse at exactly the same height, in the
mirrored binding-safe frame. Both line boxes end 6 mm above the lower edge;
browser verifies zero height difference. Arketa 10 pt, no tracking.
The upper MASTER THESIS line remains removed. No star rows. The crop-mark
PDF was regenerated and all 16 rendered pages checked.
The eight leaves have nine visible faces. Separate print choices retain
eight front pages or select only the two title faces for long-edge duplex.
Text, font, fit, geometry and DOM print order pass; native dialog page counts
remain unverified. P-0252 / W-270; paired proof saved; no PDF export or print job.
His university wording remains pending clarification; no university line
is added yet.
The separate chapter leaves retain single tracking and no star rows.
The main document's star rows remain independent.
Real-font, dimension and fit checks pass; the initial seven-page print preview
was checked before the eighth leaf was added. Physical A6 printing and the
precise hole scheme remain unconfirmed. Formal metadata
on the title reverse is recommended; no specific HFBK title-page checklist
was found in the checked public documents. P-0222 / W-240; CDX-09.
Main preview remains separate; the explicitly requested A6 PDF export is recorded below.

On 7 October Tim added an eighth A6 leaf for KI-Dokumentation after
Bibliography. The heading is split as KI- / DOKUMENTATION, preserving the
10 pt font, 0.65 em tracking and binding-safe frame. Since 8 October, the lower DOKUMENTATION line is centered at the same
height as the single-line chapter headings; KI- stands one baseline above.
Browser comparison to Surface differs by less than 0.001 mm.

On 7 October Tim explicitly requested a PDF with crop marks. The finished
output/pdf/input-a6-schnittmarken.pdf has 16 A4 faces for eight A6 leaves,
including the title reverse and blank other reverses. Crop marks are outside
the centered 105 × 148 mm trim area; media boxes are exact A4, trim boxes
exact A6. All text/order, embedded Arketa, font size, marks and geometry
pass; all 16 rendered pages visually reviewed. Print A4 at 100%, duplex
on the long edge, then trim to the marks. Reusable export builder and
hash-based QA record saved. P-0257 / W-275; no physical print or main-thesis edit.

### Native case-sensitive source brackets — 6 October 2026

Tim accepted Arketa's native case-sensitive brackets. Both body calls and
source labels now use OpenType case at 7 pt. Canvas measurements use an alias
of the same font with the feature active, retaining the actual glyph widths,
balanced horizontal gaps and whole-label centering. All 89 pairs pass;
maximum center error is 0.005 mm and gap difference is 0.039 mm. Body and
scholarly-source wrapping remain unchanged. Oversized AI/source blocks can
break between their parts; long AI notices continue only at four-row
boundaries to preserve the grid. The complete combined browser audit passes
on 36 pages, including parallel extended AI references and bibliography work.
P-0220 / W-238; CDX-06. No PDF export or commit.

### Balanced optical gaps around inline source calls — 6 October 2026

Tim requires the visible gap before each inline bracket label to match the
gap from the closing bracket to the following period. Arketa contour
measurements determine a per-call margin, which is reserved before line
breaking. All 89 calls pass the rendered comparison; maximum gap difference
is 0.039 mm. Their 7 pt size, vertical centering, links and the complete
manuscript/grid audit pass on 28 pages. P-0219 / W-237; CDX-06.
Browser update only; no PDF export.

### AI documentation in ragged-right setting — 6 October 2026

Tim requested the AI documentation in Flattersatz. The existing contour adapter
remains active; the original plugin now uses `mode: 'ragged'` with a 28 CSS-pixel
zone and unstretched word spaces. User/System labels and the 10% User inset
are preserved. The 383-page edition retains all 34 archive texts/checksums,
57,439 canonical references, 2,450 headers and 2,665 register candidates.
The 65-page geometry sample checks 6,496 ordinary prose edges, including
3,799 visibly inset rows, with maximum right overhang 0.039 CSS px. Browser
navigation and the fully loaded 383-page print HTML pass. The thesis's
13 AI notices now contain 789 printed ranges across 387 notice rows.
The current combined 28-page thesis passes the full prose, link and grid
audit; concurrent inline-call and source-Flattersatz changes are preserved.
P-0218 / W-236; CDX-07. Browser update only; no PDF export.

### Inline source calls without leading space — 6 October 2026

Tim requires the inline source calls to attach directly to the preceding word:
Text[01]. All 89 calls pass with no leading whitespace or detached line-start
call. The 7 pt size, glyph centering and reciprocal source links remain; full
manuscript prose and the shared baseline/gap checks pass. The current combined
browser edition has 28 pages. P-0217 / W-235; CDX-06. No PDF export.

### Bracketed inline source calls — 6 October 2026

Tim requested body source calls matching the source labels: [01]–[89] in
Arketa 7 pt, with glyph ink centered vertically within the fixed body row.
A local body-composer adapter reserves each complete label at its actual
7 pt width before line breaking. Original plugin and Pages files remain
unchanged; the canonical IDs and reciprocal links remain. All 89 label pairs,
font sizes, indivisible calls and links pass. Maximum center error is
0.004 mm. Current combined edition retains 28 pages (already 28 after the
parallel AI-notice addition), with 1,702 body lines, 109 source lines and
13 AI notices. Full body prose and all source/notice text pass. P-0215 /
W-233; CDX-06. Browser update only; no PDF export.

### AI documentation contour alignment — 6 October 2026

Tim requested the same Arketa contour alignment in the AI documentation.
It now reuses the thesis-source adapter with `opticalMargin: true`, measuring
all edge glyphs relative to H at 64 times the 6 pt size and retaining fractional
text width. The rebuilt edition has 368 pages (previously 369), 70,003 numbered
physical rows and 57,439 stable canonical archive-line targets. All 34 archive
checksums, texts, 2,437 compact headers and 2,665 register candidates pass.
The 64-page geometry/edge sample checks 6,515 justified prose rows with maximum
right-edge error 0.029 CSS px / 0.008 mm; the fully loaded print HTML also passes.
The thesis's 13 AI notices now contain 744 current printed ranges; its body
and scholarly-source composition remain intact on 28 pages. P-0216 / W-234,
CDX-07. Browser update only; no PDF export.

### AI documentation User inset and System labels — 6 October 2026

Tim requested all User paragraphs indented by 10% of the usable text width,
with light-grey User/System headings. User headings follow the same inset;
line numbers retain their gutter and the right edge stays aligned. System is
the display label for assistant replies; original roles and texts remain intact.
The first four supplied imports receive 13 separately documented editorial
speaker headers. Unclassified draft/feedback material remains unclassified.
The 375-page edition passes all 34 archive hashes, 57,439 canonical line
references, 2,450 headings and 2,665 candidate targets; 64 page geometries and
browser/print navigation pass. The thesis notices now use 755 current ranges.
P-0217 / W-235; CDX-08 outside the historical edition. No PDF export.

### Dynamic gap after thesis sources — 6 October 2026

Tim requires the following-subsection gap to increase only. The fractional
grid correction now sits in that gap, with six body rows as the minimum
and an added 0–0.75 row to reach the next baseline. Source leading remains
three quarters of body leading. All 13 gaps and following headings pass
the current combined-layout checks, retaining 24 pages, 1,700 body rows and
89 sources/return links. A parallel source optical-margin change is preserved;
the current source wrapping has 109 rows. P-0212 / W-230; CDX-06. No PDF export.

### Thesis source contour alignment — 6 October 2026

Tim requested a straighter visible right edge for justified Arketa sources.
A source-only plugin variant now measures actual glyph contours relative to
H's normal sidebearing, at 64 times the source size, and retains fractional
column width. The original plugin file and body composition remain unchanged.
All 13 source blocks pass the rendered contour audit: 96 justified rows,
maximum right-edge deviation 0.084 CSS px / 0.022 mm, natural paragraph endings.
This snapshot has 24 pages, 1,700 unchanged body lines and 109 source lines
(previously 108); all 89 scholarly source/return links and source text pass.
The source baseline/gap arrangement is retained. P-0213 / W-231, CDX-07.
Browser update only; no PDF export.

### Thesis source baseline grid — 6 October 2026

Tim selected source leading at three quarters of the body leading: 9.793 pt
for 7 pt sources, against unchanged Arketa 10 pt / 13.058 pt body text.
The first and every fourth source baseline align with the body grid; source
blocks occupy whole body rows through a final fractional-row adjustment,
followed by the existing six blank body rows. All 13 source blocks, 1,700 body
lines, 108 source lines and 89 links pass, with all composed line text retained
on 24 pages. The left and right last lines on page 05 now align within 0.005 mm.
Maximum displayed grid deviation is below 0.05 mm, including renderer rounding.
P-0211 / W-229. Current technical chat: CDX-06, outside the historical AI browser
edition. No PDF export.

### AI documentation grey labels - 5 October 2026

Tim requested 30% grey (70% brightness) for line numbers and message headers.
Both now use `#b3b3b3`; running text and 10 pt footer numbers stay black.
All 522 pages and text/link positions remain unchanged; grey/black computed
colors and all 2,437 header classes are checked. P-0210 / W-228. No PDF export.

### AI documentation page numbers - 5 October 2026

Tim requested 10 pt page numbers in the AI documentation. Footer numbers now
use Arketa 10 pt with their lower edge still 8 mm above the paper bottom;
body and line numbers remain 7 pt. All 522 pages and content positions remain
unchanged. Verified footer size/bottom position and refreshed the cached browser
stylesheet. P-0209 / W-227. No PDF export.

### Justified AI documentation - 5 October 2026

Tim requested the AI documentation in justified text using his original plugin.
The plugin now composes complete paragraphs with `mode: 'justified'`, joining
fixed archive wrapping within each paragraph. Blank boundaries and compact
message headers remain; paragraph endings run out normally. Character spans
map all old canonical archive-line IDs to the newly composed physical rows.
Only overfull machine-string rows are split and recomposed with the plugin;
surrounding paragraph rows retain plugin justification. All source text,
archive checksums, 84,791 physical numbers and 2,665 candidate targets pass.
The new edition has 522 pages; 73 page geometries and browser/print navigation
are checked. P-0208 / W-226. No PDF export.

### Compact AI documentation message headers - 5 October 2026

Tim requested shorter message header lines. The browser edition now displays
only number and sender, for example `164 · Assistant`, without leading zeroes.
All 2,437 message headers occupy one line. Full timestamps and technical phases
remain in the untouched archives; message bodies and their plugin composition
are preserved. Repagination produces 593 pages, and all physical line numbers,
stable links and current register ranges are verified again. P-0207 / W-225.
Browser-only change, no PDF export.

### AI documentation line numbering correction - 5 October 2026

Tim requested numbers for the actual printed lines without leading zeroes.
Each composed row, including continuations and blank separators, now has its
own sequential number within its archive. The subsection register displays
current printed line ranges and hit positions. Canonical source IDs remain
hidden, mapped to current positions so content links survive layout changes.
The 608-page layout, Arketa 7 pt, all texts and original plugin remain unchanged.
P-0206 / W-224. Browser-only change, no PDF export.

### AI documentation browser edition - 5 October 2026

Tim requested a separate AI documentation edition in the thesis grid, all in
Arketa 7 pt, without vertical rules, with left-hand line references and one
blank line between messages. He selected initial association at subchapter
level. The additional browser edition preserves the 34 communication archives,
editorial context and technical metadata from the historical documentation:
608 A4 pages, two columns, margins 30/8/8/8 mm and gap 5 mm. The original
Flattersatz plugin composes the text; stable archive line numbers are retained,
with continuation lines unnumbered. Current page/column/physical-row positions
are regenerated in a separate lookup. All original texts, exported plugin
styles and checksums pass; 73 page geometries and browser jumps are checked.

The thesis's 13 subchapter headings now link to subsection evidence registers.
The thesis retains 24 pages, 127 paragraphs, 1,700 body lines, 108 source lines
and all 89 scholarly source links. The first register contains 2,665 candidates
from literal overlap, section names and shared precise source labels, covering
the 13 subchapters plus introduction/conclusion. All are explicitly pending
context review; no complete semantic provenance or manuscript adoption is
certified. Earlier missing attachments/branches remain open. The additional
technical typesetting chat is archived separately as CDX-05; it is outside the
reproduced historical edition. No PDF export or source-verification change.
P-0205 / W-223. See `ai-documentation/web-typesetting/README.md`.

### Print typography checkpoint - 5 October 2026

The complete final `presentation/261005_Master_Thesis.pages` is now typeset in
24 A4 browser pages, including five separate centered chapter title pages:
Einleitung, Surface, Interaction, Operation and Schluss. All 127 manuscript
paragraphs, 13 subchapter headings and 89 citation groups have been transferred.
The 1,700 composed body lines match the final manuscript after citation-marker
conversion; all 89 source/return links resolve. All 24 pages were visually
reviewed. The original Pages file and original Web-to-Print plugin are unchanged.
P-0204. No new source evaluation or PDF export.

Tim's current typography: prompt-based authoring with a read-only browser
preview; original Flattersatz plugin; Arketa 10 pt; single-sided A4; left 30 mm,
top/right/bottom 8 mm; two 83.5 mm columns with 5 mm gap. Baseline 13.058 pt
(130.6%); no paragraph blank lines, subsequent paragraphs indented by about
four character advances (double the previous indent). Section-opening paragraphs start flush.
Subchapter headings are centered/tracked uppercase; then blank line, * * *,
blank line and body. Subchapters flow continuously across columns.
Main chapter titles are alone at the physical page center.
Page numbers use 01–09, then 10 onward, inside the type area with lower edge
8 mm above paper bottom and two blank baseline rows above.

Body text remains left aligned. Each subsection's 7 pt source notes now form
one continuous justified paragraph, composed by the unchanged original plugin
with mode `justified`: [01] source [02] source, with ordinary spaces and clickable
labels. Source paragraphs use the full column width. Body calls also use leading
zeroes. Above each list: blank baseline, * * *, blank baseline. Below each list:
six blank baselines before the next subheading, without a trailing star row. Each complete source
paragraph stays together with at least the final two body lines. Full sources
retain 35 keys; no separate bibliography is shown.
Two paragraphs use a 48 px ragged zone to avoid an overfull plugin fallback;
the others retain 36 px. Plugin word/glyph limits remain unchanged.

`thesis/typesetting-compat/manuscript.json` preserves the full structured text,
headings and citation mappings; `layout-results.json` records the current audit.
The browser at http://127.0.0.1:8768/preview.html shows the complete work.
Browser-only updates remain the default; PDF export only when requested.
The existing PDF is an older excerpt and does not represent the full manuscript.

### Shared revision-chat documentation checkpoint - 5 October 2026

Tim explicitly supplied three further ChatGPT shares for the AI documentation:
CGPT-17, *Abschnitt Überarbeiten*; CGPT-18, *Schluss überarbeiten*; and
CGPT-19, *Masterthesis umformulieren*. The
[dated import index](ai-documentation/SHARED_CHAT_IMPORT_2026-10-05.md)
records 220 visible messages, chapter associations, provenance and overlaps.
The snapshots indicate no missing attachments; earlier documented gaps remain.

The short chats concern a Surface passage and the conclusion. The longer chat
contains stepwise revisions across the introduction, Surface, Interaction,
Operation and conclusion, including explicit user wording selections. This
archival import does not verify source claims or establish which formulations
entered the current manuscript. Passage-level adoption remains to be mapped.
CDX-04 records the current documentation task. P-0173; AI-081-AI-084.

### Drafting and documentation checkpoint - 18 September 2026

Two further shares explicitly supplied by Tim are preserved as CGPT-15,
*Eingabemöglichkeit Erklären*, and CGPT-16, *Einleitung formulieren*.
The [dated import index](ai-documentation/SHARED_CHAT_IMPORT_2026-09-18.md)
records 76 messages, provenance and overlaps with the existing communication.
Neither snapshot indicates unavailable attachments; earlier documented gaps
remain open. Archiving does not establish adoption or verify cited claims.

The intervening Codex conversation developed bullets for the four Surface
sections, local wording changes and introduction/conclusion outlines. It also
contains the separately requested Git backup of 17 September, commit
`94630287374a44f34bc9700b7962db2875f0ba3b`. This import does not authorize
another publication. CDX-03 is synchronized as part of the documentation
closure; usage records distinguish Codex outlines from subsequent ChatGPT prose.

The four-part Surface structure remains the working organization. Its earlier
section-2 title was questioned and alternatives discussed; the supplied current
manuscript uses *Die Aufforderung zur Eingabe*. Introduction and conclusion
proposals are not treated as a newly confirmed research question or final prose.
The current Pages file is preserved without editing. Passage-level adoption and
the dated interface-capture corpus still require separate verification.
P-0171/P-0172; AI-076-AI-080.

### Surface trust and steering sources - 17 September 2026

Tim explicitly selected all three proposed sources: Chen et al. 2024,
John/Acquisti/Loewenstein 2011 and Luguri/Strahilevitz 2021. All three are
now in Zotero with verified PDF attachments and automatic bibliography entries.
The [bounded source map](research/QUELLENUEBERSICHT_SURFACE_VERTRAUEN_LENKUNG_01.md)
links the three notes, reading scope, provenance and import identities.
Admission does not commit to using all three in the thesis. Trust judgments,
disclosure and experimental choices remain distinct; no current-product
manipulation claim is established. No manuscript or four-part outline change.

The subsequent case discussion accepted Terminal, Google, ChatGPT and the
public Wikipedia account-creation form as examples. This is case selection,
not a completed dated screenshot corpus or permission to create accounts.
The earlier checkpoint below records the pre-selection state. P-0170 / AI-075.

### Surface source checkpoint - 17 September 2026

Following Tim's approval of the targeted next step, Norman's 2008
*Signifiers, not affordances* was evaluated from the complete unpaginated author
version. The [source note](research/source-notes/norman-2008-signifiers-not-affordances.md)
retains bibliographic checks, bounded claims and the distinction between a
conceptual design argument and measured user effects. Original HTML, metadata,
hashes and a prepared BibTeX record are retained; no Zotero import or active
bibliography change. The [Surface source map](research/QUELLENUEBERSICHT_SURFACE_01.md)
maps existing evidence to the four retained sections and proposes a small
current-interface corpus. These cases are not yet captured or author-approved.
The earlier word “Opaque” does not identify a verified service; Tim's follow-up
asked what it meant. It is therefore not treated as a selected login example.
No further effects study, manuscript change or revised overall outline.

### Shared-chat documentation checkpoint - 17 September 2026

Tim explicitly requested import of ten ChatGPT share links into the project AI
documentation. They are retained as CGPT-05 through CGPT-14, with exact extracted
message text, line-numbered transcripts, provenance/hash manifests and an
[import index](ai-documentation/SHARED_CHAT_IMPORT_2026-09-17.md). The snapshots
contain 407 visible messages. Thirteen uploaded files and one linked Word
artifact are not included in the share-text archive and remain identified gaps.
Existing overlaps are cross-referenced, not treated as independent contributions.

This request resumes the previously deferred documentation work. The CDX-03
communication archive is synchronized to include the correction exchanges and
Surface planning. Transcript preservation does not complete paragraph-level
adoption/citation mapping or recover every missing original attachment. No
manuscript, scholarly bibliography, source interpretation or Zotero record is
changed by this documentation import.

### Current Surface working structure - 17 September 2026

Tim supplied `presentation/260917_Master_Thesis.pages` as the current manuscript
and asked to retain the revised Surface structure after comparing it with
`presentation/Struktur_Masterarbeit_Input.pages`. The agreed working outline is
[`research/GLIEDERUNG_SURFACE_01.md`](research/GLIEDERUNG_SURFACE_01.md).
Surface precedes Interaction and Operation and examines the designed invitation
to enter text through four sections:

1. Formale Erscheinung und Einbettung
2. Kommunizierte Funktion und Ansprache
3. Sichtbare Anforderungen, Hilfen und Grenzen
4. Veränderliche Oberfläche und sichtbare Zustände

“Scheinbare Offenheit” becomes a short synthesis and transition to Interaction,
not a fifth full section. Command Line, form, search and prompt remain recurring
examples. The outline records boundaries between visible design, interaction
work and technical operations; these are analytical perspectives, not a strict
temporal sequence.

For further Surface planning this outline takes precedence over the older
Surface structure. The supplied 17 September manuscript is the current textual
reference for that planning; older checkpoints below remain historical records.
Neither Pages file was edited. This decision adopts a working structure, not
final prose or a final source/layout sign-off. No new source round or bibliography
change was made. The collective AI-documentation update remains deferred in
accordance with Tim's instruction to update it after the section corrections.

### Current editorial checkpoint - 15 September 2026

Correction workflow update, 16 September 2026, P-0165 / AI-060: Tim asked for
targeted incorporation of supplied annotations while retaining structure and
wording, with edits marked in bold. The current physical-input section and
annotations 02-05 are preserved exactly as DRAFT-07. The marked proposal is
[`research/revisions/2026-09-16-physische-eingabe-korrekturen.md`](research/revisions/2026-09-16-physische-eingabe-korrekturen.md).
It shortens the opening, removes one repeated synthesis, fixes local language,
introduces Koenecke's study categories and distinguishes measured errors from
possible additional work. Existing source locators are adjusted; no new source
or import. This proposal does not replace the retained Pages checkpoint or
constitute final author adoption. Later editing/correction prose should not
repeat the general production-trace conclusion in full.

Tim has designated `presentation/260914d_Master_Thesis.pages` as the current
Interaction working chapter and asked to retain it for now before moving to
Operation. A byte-identical, dated snapshot and scope note are retained in
[`research/checkpoints/2026-09-15-interaction/README.md`](research/checkpoints/2026-09-15-interaction/README.md).
The original Pages document was not edited. This is an author-confirmed interim
baseline, not a final source, language, layout or AI-citation sign-off. Only
Interaction is covered by this decision; other parts of the full manuscript
are not thereby approved. The checkpoint has chapter-level ID `TXT-001`;
paragraph-level source and AI-provenance mapping remains to be completed.

For current Interaction wording this checkpoint takes precedence over the
older `DRAFT_INTERACTION_STEPWISE_01.md`, its reading copy and chat proposals.
The older records below describe historical working states. Earlier AI
revision proposals are not presumed to have been adopted verbatim.

### Current Operation working structure - 15 September 2026

Operation 4 bullet checkpoint P-0164 / AI-059: Tim requested the final
Operation section's bullet sequence. The proposal is retained in
[`research/STICHPUNKTE_OPERATION_4_01.md`](research/STICHPUNKTE_OPERATION_4_01.md).
It separates displayed feedback, grounds for evaluation, intervention scope,
feedback into later input and the chapter synthesis. Existing Cheng evidence
remains limited to short-term experimental judgments/intentions. BotDesigner
labels and FTC Complaint paragraph 58 provide concrete intervention-scope
contrasts; neither establishes current general product behavior. Exact current
CLI/stop/undo/delete functionality remains unverified if later selected.
No new sources, imports, overall-outline or manuscript changes. Bullets remain
a proposal, not adopted prose; preceding sections are not rewritten.

Revised bullet checkpoint P-0163 / AI-058: Tim requested a new Operation 3
bullet sequence following the scope review. The current discussion proposal is
[`research/STICHPUNKTE_OPERATION_3_02.md`](research/STICHPUNKTE_OPERATION_3_02.md).
It restores data routes and storage as explicit opening blocks, activates the
already evaluated bounded API case, retains historical reCAPTCHA, BetterHelp
and Staab, and ends with one synthesis of decision scope and the transition to
Operation 4. Block-level source references and limits are retained. Version 01
remains historical; no manuscript or overall-outline change, new source admission,
bibliography write or Zotero import. These are writing bullets, not approved prose.

Review checkpoint P-0162 / AI-057: Tim supplied the current Operation 3 prose
to assess whether the latest sources displaced earlier questions. The exact
attachment is retained as DRAFT-06. The review recommends restoring concrete
data routes and storage purposes through the already evaluated, bounded API
case while keeping reCAPTCHA, BetterHelp and Staab and merging repeated
purpose-expansion syntheses. The last bullet proposal contributed to this
imbalance. See
[`research/PRUEFUNG_OPERATION_3_GEWICHTUNG_01.md`](research/PRUEFUNG_OPERATION_3_GEWICHTUNG_01.md).
Recommendations are pending author review; no manuscript, outline, bullet-file,
bibliography or Zotero change. A narrow official API-documentation recheck is
not a new source round. The preceding interrupted continuation did not produce
an Operation 4 draft.

Drafting checkpoint P-0161 / AI-056: Tim requested the Operation 3 bullet
sequence after the Staab/BetterHelp evaluation. The proposal is retained in
[`research/STICHPUNKTE_OPERATION_3_01.md`](research/STICHPUNKTE_OPERATION_3_01.md):
data-route distinctions, short historical reCAPTCHA contrast, BetterHelp as
the commercial-use case, Staab as a separate inference supplement, unequal
decision scope and a transition to visibility/intervention. Source locators
and limits accompany each block. No new research or import; no manuscript
or overall-outline replacement. This is a writing proposal for joint review,
not finalized prose or a universal sequence of data processing.

Source checkpoint P-0160 / AI-055: the authorized Staab/BetterHelp evaluation
is retained in
[`research/QUELLENUEBERSICHT_OPERATION_PROFILE_WEITERVERWENDUNG_01.md`](research/QUELLENUEBERSICHT_OPERATION_PROFILE_WEITERVERWENDUNG_01.md).
Staab supports bounded personal-attribute inference from selected Reddit text
collections; its adversarial chatbot experiment is simulated, not a human
behavior study. The FTC final complaint describes specified intake-data and
identifier uses for advertising; the consent order does not generally admit
the allegations. Neither source proves complete profiles, present-day product
practice or reliable psychological manipulation. Two notes cover three primary
documents, all PDFs secured: 65 triaged records, 45 notes, 39 research PDFs.
Zotero remains at its last verified 57; no new import or bibliography change.
The existing four-part outline is retained. Stronger weighting of BetterHelp
within section 3 is a proposal for joint review, not approved thesis prose.

Subsequent chat-based drafting checkpoint, P-0159 / AI-054: Command Line was
restored as a processing case in Operation 2; its general shell/permissions
evidence remains open. The supplied fuller draft is preserved as DRAFT-05.
The minimal revision removes five premature SEO paragraphs and moves the
finding/being-found sentence to the later SEO/GEO passage. The spoken request
to omit a Suchergebnisfall was explicitly interpreted as omitting the previously
proposed search-advertising case, not prefetch or organic search. No Pages or
manuscript file was edited and no full source sign-off or final prose adoption
is implied. Older outline details do not override these later chat decisions.
The next source-status discussion identified personal inference and secondary
advertising uses as gaps; Tim selected Staab and BetterHelp for evaluation,
not Matz and not an automatic Zotero import.

Planning precedence update, P-0158 / AI-053: following the two intervening
whole-chapter discussions, Tim authorized a revision of all four sections.
The current GLIEDERUNG_OPERATION_01.md now differentiates input constitution,
selection/evaluation, data purposes, and traceability/intervention. The four
headings, order, short timing opening in section 2 and its three movements stay.
This replaces the older separate Operation 1 sketch as planning authority;
that file remains unchanged historical material. DRAFT-03 remains the comparison
baseline, not source-checked final prose. The revised detailed outline is for
joint review; authorization to revise does not pre-approve every new formulation.

Section 1 now groups technical assignment, added context and the distinction
between authorship and control. Section 3 moves from data routes to multiple
purposes and decision scope, proposing historical reCAPTCHA as the documented
anchor; the extra API case remains optional. Section 4 separates visibility,
verification and intervention, retaining operative consequences and feedback.
Commercial use, intention and reversibility are not presumed. Detailed
cross-topic boundaries prevent repeating ranking, roles, SEO/GEO or sycophancy.
The former whole-outline version is checkpointed. No new research, source
evaluation, Zotero/bibliography writes, manuscript rewrite or Pages change.
Earlier checkpoints below record historical decisions, not competing authority.

After review of `presentation/Struktur_Masterarbeit_Input.pages`, Tim confirmed
the revised four-part Operation outline and asked to retain it. The active
working structure is now
[`research/GLIEDERUNG_OPERATION_01.md`](research/GLIEDERUNG_OPERATION_01.md):

1. Technische Rolle und Kontext der Eingabe.
2. Verarbeitung und ihre Maßstäbe.
3. Übertragung, Speicherung und Weiterverwendung.
4. Sichtbare Rückmeldung und operative Reichweite.

This replaces the earlier Operation outline for future drafting, not the
overall Surface / Interaction / Operation framework. The original Pages
structure remains unchanged as the earlier version; the Interaction checkpoint
is unaffected. Context and consequence are redistributed across the four
sections rather than removed. Search/prompt remain the emphasis and command/form
the contrasts. The headings are analytical, not a universal temporal pipeline.
Rules, classifications, selection criteria and responsibilities are examined
within each mechanism; there is no separate generic power chapter.

Current refinement, confirmed after both source rounds: the four headings and
their order remain unchanged. Section 2 now moves from processing mechanisms
to criteria and their authors; SEO/GEO address source visibility, while human
feedback and sycophancy address answer-evaluation criteria. These are distinct
mechanisms, not a single claim of manipulation. Section 4 foregrounds the
difference between convincing output and traceable processing, bounded effects
and feedback into the next input, while retaining technical consequences and
possibilities of intervention. Interaction remains the perspective on user
adaptation, Surface on visible presentation. Section 3 retains a separate
data-use question; the API case is still optional. No additional main chapter,
new research, evidence expansion or manuscript edit. P-0151 / AI-046 document
the preceding review and this authorized outline revision.

### Confirmed Operation 1 subsection structure - 15 September 2026

After finding the first proposed subsection too broad and repetitive, Tim
supplied and confirmed a narrower working structure, preserved with wording
unchanged apart from whitespace/Markdown cleanup in
[`research/GLIEDERUNG_OPERATION_TECHNISCHE_ROLLE_KONTEXT_01.md`](research/GLIEDERUNG_OPERATION_TECHNISCHE_ROLLE_KONTEXT_01.md).
It takes precedence over the earlier section-1 sketch and chat variants:

1. From formulated text to technical input.
2. Assignment in a form and additional context in a prompt as two examples.
3. Formulating the text does not fully determine the technical input.
4. Sharpening the point and transitioning to processing.

Only technical role, assignment and composition belong here. Detailed command
and search examples, processing while typing, validation, instruction priority,
generation, trained behavior, ranking, SEO/GEO, sycophancy, storage and reuse
are not anticipated. The documented API context is a bounded possible example,
not a description of every prompt interface. This does not select the separate
API data-use case for section 3. Four overall Operation sections remain;
sections 2-4 and manuscripts are unchanged. P-0152 / AI-047 document the
intervening outline discussion and author-supplied adoption; no thesis prose
has been finalized and no additional research was undertaken.

### Operation timing research - 15 September 2026

Tim reopened the question of processing during input and requested evidence
for a remembered Gmail/password-prefetch example or a documented alternative.
The bounded result is retained in
[`research/RECHERCHE_OPERATION_ZEITPUNKT_PREFETCH_01.md`](research/RECHERCHE_OPERATION_ZEITPUNKT_PREFETCH_01.md):
the specific password anecdote is not substantiated; primary sources document
historical Gmail message prefetch before opening a mail and Chromium search
results prefetch for an unconfirmed suggestion. Google Instant supplies a
historical visible-processing contrast. Six raw HTML snapshots are retained
with reading limits and hashes. A short timing opening in Operation 2 is a
proposal only: both approved outline files and manuscripts remain unchanged.
Preparation is not equated with authorization or a final action. No Zotero
import, bibliography write or new formal corpus admission. P-0153 / AI-048.

Subsequent author request: resume the earlier timing point (point 6 of the
initial broader subsection sketch) with unconfirmed-search-result prefetch as
the main example. The new
[`research/NOTIZEN_OPERATION_ZEITLICHKEIT_01.md`](research/NOTIZEN_OPERATION_ZEITLICHKEIT_01.md)
retains a compact five-movement note sequence, provisionally placed at the
opening of Operation 2 in the overall outline. Operation 1 remains unchanged;
there is no sixth main chapter. Tim's Gmail memory is retained separately as
a personal research stimulus, not a verified implementation or established
first-hand observation. No invented autobiographical prose, new research,
Zotero write or manuscript edit. P-0154 / AI-049.

Current author-confirmed refinement, P-0155 / AI-050: the original compact
timing point, supplemented by search-result prefetch, is now placed at the
opening of Operation 2. The intervening discussion clarified that the earlier
five-movement expansion was not the requested scope; it is retained only as
background in the note file. The active outline now moves from a short timing
opening to processing methods and then criteria. Both existing main movements
of Operation 2 remain. Operation 1, sections 3-4 and manuscripts are unchanged;
Gmail remains a separate unverified memory, not evidence or adopted prose.
No new research, source acquisition, bibliography or Zotero changes.

### Current Operation 2: three internal movements - 15 September 2026

Tim approved the revision following the supplied feedback and the intervening
overlap review. Operation 2 now has a short timing opening, followed by:

1. Processing methods: form validation, search retrieval/ranking and generation.
2. Processing criteria: validity, relevance, probability, desired behavior and
   sycophancy as a conflict between positive evaluation and reliability.
3. Adaptation to selection procedures: SEO/GEO as cases of content providers
   responding to documented or inferred criteria.

This is the active structure in GLIEDERUNG_OPERATION_01.md; earlier two-movement
descriptions above are historical. Ouyang/Sharma remain in movement 2 and
Aggarwal now supports movement 3. Criteria need not be fully disclosed. The
sequence is analytical, not a universal temporal pipeline or evidence that
platforms change their rules in response to content optimization. Four overall
Operation headings, the short timing opening, and sections 3-4 remain intact.

The latest supplied Operation 1 text (attachment 69d8b488, preserved verbatim
as DRAFT-03) is the comparison baseline for avoiding duplication, not a new
source-checked or submission-approved manuscript checkpoint. It already covers
mkdir, field assignment, index and prompt context/priority; Operation 2 does
not repeat these. The older section-1 outline is retained unmodified as its
earlier planning authority; no chapter prose is rewritten by this revision.
P-0156 / AI-051 consolidate the intervening outline proposals, overlap review,
external feedback (authorship unverified) and current authorized revision.
No new research, evidence expansion, bibliography or Zotero writes.

### Current Operation 2: interests and decision asymmetry - 15 September 2026

After supplying his current prose (6ed94918, preserved as DRAFT-04), Tim asked
for stronger criticism of commercial interests and provider power, then
authorized continuing that revision. Three movements remain, but repeated
mechanism descriptions are reduced; movement 2 now addresses unequal scope to
set or change criteria and search advertising. The concrete writing map is
[`research/REDAKTION_OPERATION_2_INTERESSEN_MACHT_01.md`](research/REDAKTION_OPERATION_2_INTERESSEN_MACHT_01.md).
This is working structure for discussion, not a new approved prose passage.

The targeted source supplement evaluates selected passages of Gillespie 2014
(institutional proof copy, final-version comparison open), Google's search-ad
description and selected sections of Alphabet's 2025 Form 10-K. The latter was
read via the web; direct HTML acquisition failed with 403 and archival capture
remains open. Two new notes cover three records; one PDF and one HTML snapshot
were secured. Current local inventory: 62 triaged sources, 43 notes and
36 research PDFs. Last verified Zotero inventory remains 57, not rechecked or
changed. No bibliography or Zotero import in this step.

Distinguish organic ranking, paid placement and SEO/GEO; useful and commercial
are not mutually exclusive. Preference training is not evidence of deliberately
false agreement for retention. Data storage/reuse remains section 3, visibility
and accountability section 4; cross-references are allowed. Four main sections
and sections 1, 3 and 4 remain unchanged. Pages files and author prose are
untouched. The prior outline is retained in the Operation checkpoint.
P-0157 / AI-052 include the preceding review and current implementation.

### Earlier Operation source and import checkpoints

Status: author-confirmed working structure, not source-checked thesis prose.
P-0147 / AI-042 record this decision. Tim subsequently prioritized three
specific evidence gaps and authorized a targeted source round. Its result is
[`research/QUELLENRUNDE_OPERATION_01.md`](research/QUELLENRUNDE_OPERATION_01.md):
historical search architecture plus current Google descriptions; GPT-2 context
and generation plus InstructGPT's human-feedback criteria; and a dated OpenAI
API case separating roles, training, abuse logging and application state.
Three research papers and five documentation pages are retained in five new
source notes with explicit reading bounds. Provider documentation is not an
independent audit, and API rules are not consumer ChatGPT rules. The API case
is a proposal for author selection, not an adopted manuscript example.

At the initial source-round checkpoint, eight local bibliography records were
prepared but not imported. The historical
count: 56 triaged records (46 last verified in Zotero, ten locally prepared),
38 source notes (37 claim-bearing plus Carroll's open pre-evaluation), and
32 local research PDFs. Zotero was not re-inventoried or changed in this round.
P-0148 / AI-043 record this source work; no thesis prose was changed. Next step:
a bounded source-and-argument outline for section 1 using the now evaluated
passages, rather than another broad search. Earlier corpus counts below are
historical snapshots.

Subsequent authorized supplement: exactly three papers on GEO and sycophancy
have been evaluated and imported into Zotero with hash-verified PDFs:
Aggarwal et al. (2024), Sharma et al. (2024), and the published Science version
of Cheng et al. (2026), not its earlier two-experiment preprint. See
[`research/QUELLENUEBERSICHT_OPERATION_GEO_SYCOPHANCY_01.md`](research/QUELLENUEBERSICHT_OPERATION_GEO_SYCOPHANCY_01.md).
The suggested placement is in Operation 2 and 4; the approved four-part outline
and manuscripts remain unchanged. Distinguish source visibility, preference
training, short-term measured effects and deliberate provider intent. GEO's
released companion prompts permit invented evidence in some methods; this is
a bounded code finding, not a universal characterization of optimization.
Cheng measures reported future-use intention, not longitudinal dependence.
At the supplement checkpoint: 59 triaged records, including 49 in Zotero and ten
locally prepared; 41 notes (40 claim-bearing plus Carroll's open pre-evaluation)
and 35 local research PDFs. The previous eight Operation records remain
prepared only. P-0149 / AI-044 document the supplement and critical synthesis.

Following the next explicit import request, all eight earlier Operation records
are now in Zotero: four in `04 Web Forms and Search`, four in
`06 LLM and Agentic Interfaces`. Their three PDF and five raw-HTML attachments
match the evaluated local files byte for byte. Exact item/attachment keys and
verified citation keys are in the import addendum to the source-round overview.
Current corpus: 59 triaged records, 57 in Zotero and two older locally prepared
records outside this request; unchanged 41 source notes and 35 research PDFs.
The five source notes now reflect the import; a swapped pair of first names
in the Ouyang note was corrected against its PDF (the bibliography was already
correct). No source interpretation, manuscript or chapter structure changed.
P-0150 / AI-045 record the import and preceding source-readiness clarification.

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

Current editorial direction (2026-09-03): the four selected situations remain
Command Line, form, search field and prompt field. Search and prompt carry the
present-day emphasis; Command Line and form act as contrast cases rather than
equal parts of a complete taxonomy. The provisional critical axis asks how
interface, standards, validation, ranking, model and institution distribute
agency around a human-authored input. `Surface`, `Interaction` and `Operation`
are treated as analytical perspectives within a feedback loop: Surface frames
possible action, Interaction makes the mutual but asymmetric adjustment between
person and system observable, and Operation processes the input and returns as
result, suggestion, error or ranking to condition the next interaction. The
editorial working note, questions, draft formulations and evidence cautions are
recorded in
[`research/REDAKTIONELLE_NEUAUSRICHTUNG_MACHTFRAGEN_01.md`](research/REDAKTIONELLE_NEUAUSRICHTUNG_MACHTFRAGEN_01.md).
They are provisional planning material, not source-verified or adopted thesis
prose. The 30 August exclusion of artworks and art theory is reopened only to
the extent that an artistic or Steyerl-informed position may become a bounded
critical lens; no artistic or theoretical source is thereby approved, and the
previous artistic case-study corpus is not automatically restored. The current
Pages manuscript remains unchanged.

The physical-process subsection has now been restructured under this critical
axis in
[`research/GLIEDERUNG_INTERACTION_PHYSISCHER_PROZESS_MACHTFRAGEN_01.md`](research/GLIEDERUNG_INTERACTION_PHYSISCHER_PROZESS_MACHTFRAGEN_01.md).
It keeps the existing empirical findings on physical keyboard, trained
touchscreen input and dictation, but separates them from project-level
questions about normalization, assumed bodies and languages, technical
interpretation and hidden production traces. Language and writing systems are
retained as a cross-cutting limit rather than a fourth input modality. The
subsection remains assigned primarily to Interaction; Surface supplies the
available and visible action space, while Operation names the classification
of a keystroke, touch or acoustic event as a character. Claims about body norms,
accessibility, Unicode and current speech recognition still require additional
sources. Three narrower gaps are now covered: the historical coupling of
QWERTY, mechanics, standardization and economic strategy; a bounded US audit of
unequal speech-recognition error rates; and Akrich's theoretical account of
technical scripts, delegation and blackboxing. These sources do not establish
universal keyboard optimality, current product performance or directly measured
correction work. The author-confirmed prose in
`DRAFT_INTERACTION_STEPWISE_01.md` has not yet been rewritten.

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

The twelfth, critically framed evaluation batch closes three concrete gaps
opened by the revised physical-process outline. Galbraith and Kay (2025)
reconstruct QWERTY through archival material, early typebasket mechanics,
standardization and an inferred complementary patent/trade-secret strategy; the
source is used as a historically bounded counterposition, not as proof that
QWERTY is universally optimal. Akrich (1992) supplies the theoretical concepts
of script, projected and real users, delegation and blackboxing, while remaining
an infrastructure and technology-transfer source rather than direct HCI
evidence. Koenecke et al. (2020) document unequal word error rates across five
then-commercial ASR systems in a matched US interview corpus; they do not study
an input interface or user correction. All three full texts were secured, read
completely and visually checked. Their source notes and a retained BibTeX import
record are available locally. All three records were imported into Zotero on
3 September 2026 and verified in the automatic bibliography export. The corpus now contains 30
new notes: 29 active, claim-bearing evaluations and Carroll's one open
pre-evaluation. No thesis prose was produced in this batch.

The thirteenth, writing-driven evaluation batch (14 September 2026) adds
Ritchie (1984) and Hargittai (2002) for the critical extension of **Interaction
-> required knowledge and competencies**. Ritchie is a historical supporting
source for the emergence of specific Unix notations, not empirical evidence of
English-language exclusion; his institutional explanation remains explicitly
speculative. Hargittai is a core source for observed differences in search-task
success and time among 54 users in 2001, not for contemporary algorithmic
literacy or a causal account of those differences. Both source notes record
direct claims, PDF-version locators, methodological limits and project-level
questions separately. Both records and byte-verified PDF attachments were
imported into Zotero in `02 Command Line` and `04 Web Forms and Search`; their
citation keys are verified in the automatic bibliography export. There are now
32 source notes: 31 claim-bearing evaluations and Carroll's open pre-evaluation.
The two additions are integrated into the knowledge/competence subsection
overview, not yet into the earlier cross-chapter synthesis or confirmed prose.
Neither the Pages manuscript nor the thesis LaTeX files were changed.

The fourteenth, narrowly writing-driven evaluation (14 September 2026) adds
Arnold, Chauncey and Gajos (2020) for **Interaction -> autocomplete and
suggestions**. Their counterbalanced experiment with 109 participants and
1,308 English image captions supplies bounded evidence that predictive word
suggestions affect the wording produced, not only the number of keystrokes.
Model-relative predictability, text length, subjective assistance and
exploratory mechanism explanations remain distinct. The study does not
establish changed beliefs, provider manipulation, effects on search/prompt
suggestions or present-day product behavior. The full author PDF, text extract,
prepared BibTeX record and source note are retained. The subsequent authorized
Zotero import on 14 September 2026 is verified: item `XV46SD3K` in
`03 GUI and Direct Manipulation`, byte-identical PDF attachment `CJNF33NH`,
and citation key `arnoldPredictiveTextEncourages2020` in the automatic export.
Zotero now contains 46 bibliographic records. There are still 33 source notes:
32 claim-bearing evaluations and Carroll's
open pre-evaluation. The autocomplete overview contains a provisional critical
supplement; confirmed working prose and the manuscripts remain unchanged.

The first source-to-structure synthesis is recorded in
[`research/SOURCE_TO_STRUCTURE_SYNTHESIS_01.md`](research/SOURCE_TO_STRUCTURE_SYNTHESIS_01.md).
It maps all 29 active evaluations and Carroll's open pre-evaluation into the
author's existing introduction, historical frame, Surface, Interaction and
Operation structure without creating a replacement chapter outline or drafting
thesis prose. Its seventeen cross-source statements are explicitly marked as
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
material, not the active writing step. The author-confirmed German working
passage at
[`research/DRAFT_INTERACTION_STEPWISE_01.md`](research/DRAFT_INTERACTION_STEPWISE_01.md)
remains outside the thesis LaTeX files. The new critical outline and its three
additional sources have not yet been folded into that prose. New prose will be
developed only after the author has selected and weighted the source notes.

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
- The April 2025 HFBK guideline does not explicitly require model/version metadata; the project additionally records the preserved model identifiers and their limits.
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
