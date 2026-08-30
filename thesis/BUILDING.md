# Building the thesis

## In Cursor

1. Open `thesis/main.tex`.
2. Save the file to trigger the default build recipe.
3. Open the LaTeX Workshop panel to inspect the build log or PDF preview.
4. If needed, run **LaTeX Workshop: Build with recipe** and choose **LuaLaTeX -> Biber -> LuaLaTeX x2**.

The PDF is written to `thesis/build/main.pdf`.

## Bibliography

Zotero and Better BibTeX keep `references/library.bib` updated automatically. Cite a source with its Zotero citation key:

```tex
\parencite{CitationKey}
```

The first verified source can be cited as:

```tex
\textcite{shneidermanDirectManipulationStep1983}
\parencite[57--69]{shneidermanDirectManipulationStep1983}
```

The isolated end-to-end test lives in `tests/citation-test.tex`; its checked PDF is `../output/pdf/Citation_pipeline_test.pdf`. The test text is not thesis prose.

The current author-year citation style is provisional until the required citation style has been confirmed.

## AI-derived passages

Before inserting verbatim, paraphrased or translated AI output, create an `AI-###` entry in `../ai-documentation/USAGE_REGISTER.md`. Add a source comment above the passage and cite the separate documentation:

```tex
% TRACE-BEGIN: TXT-### | PROCESS: P-#### | AI: AI-###
% AI-USAGE: AI-### | CDX-01 lines 1200-1226 | paraphrase
An AI-derived or AI-paraphrased passage.\aidocref{CDX-01}{48}{1200--1226}
% TRACE-END: TXT-###
```

Register the passage in `../ai-documentation/PASSAGE_REGISTER.md`, the process in `PROCESS_LOG.md` and the AI use in `USAGE_REGISTER.md`. The page number must be checked against the final documentation PDF before submission. Scholarly claims still require their own primary or academic sources.
