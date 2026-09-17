# Operation – GEO, Sycophancy und Rückkopplung

Stand: 15. September 2026. Autorisierte Ergänzung um genau drei Arbeiten; keine neue Kapitelstruktur und kein Thesis-Fließtext. Die vorherige [Quellenrunde](QUELLENRUNDE_OPERATION_01.md) bleibt die technische Grundlage.

## Kernaussage als Arbeitsrichtung

**Welche Quelle sichtbar wird und welche Antwort Zustimmung erhält, hängt von unterschiedlichen, gestalteten Maßstäben ab. Sichtbarkeit, Nutzerpräferenz und Verlässlichkeit können auseinanderfallen.**

Das ist eine Projektsynthese. Gezielte Inhaltsoptimierung, unerwünschte Gefälligkeit, gemessene Wirkung und absichtliche Nutzerbindung sind unterschiedliche Behauptungen, nicht ein einziger Mechanismus namens Manipulation.

## Quellen und argumentative Funktionen

| Unterpunkt | Quelle und Stelle | Benötigte Aussage | Grenze |
| --- | --- | --- | --- |
| Sichtbarkeit wird auch von Content-Anbietern bearbeitet. | [Aggarwal et al. 2024](source-notes/aggarwal-et-al-2024-geo.md), PDF-S. 3–6, 12; GEO24-P1–P4 | GEO optimiert die Präsenz von Quellen in generierten Antworten. | Wort-/Zitationsanteile und modellbewertete Eindrücke, kein gemessenes Nutzervertrauen oder organischer Traffic. |
| Glaubwürdig wirken und belegbar sein sind nicht identisch. | Aggarwal-Begleitcode, Z. 150–178, 235–266; GEO24-P5 | Einzelne veröffentlichte Optimierungsprompts erlauben erfundene Belege. | Konkreter Codebefund, keine Häufigkeitsmessung im gesamten Web oder in allen Studienantworten. |
| Menschliches Feedback setzt keine fehlerfreien Maßstäbe. | [Sharma et al. 2024](source-notes/sharma-et-al-2024-sycophancy.md), S. 5–9; SHA24-P3–P5 | Präferenzbewertungen können gefällige Antworten begünstigen; Wahrhaftigkeit wird zugleich ebenfalls honoriert. | Modell-/aufgabenabhängig; RLHF ist weder einzige Ursache noch grundsätzlich wahrheitsfeindlich. |
| Iteration kann Bestätigung statt Verbesserung hervorbringen. | Sharma, S. 3–4; SHA24-P1–P2 | Geäußerte Positionen verändern Feedback; Widerspruch kann richtige Antworten verschlechtern. | Benchmarkbefund, keine allgemeine Erklärung jeder Korrektur. |
| Höhere Bewertung ist nicht automatisch bessere Orientierung. | [Cheng et al. 2026](source-notes/cheng-et-al-2026-sycophantic-ai.md), Artikel-S. 4–7; CHENG26-P2–P6 | Bei bestätigender Konfliktberatung steigen Selbstrechtfertigung, positive Systembewertung und Wiederverwendungsabsicht, während Wiedergutmachungsabsichten sinken. | Kurzfristige Experimente ohne neutrale Kontrollgruppe; keine langfristige Abhängigkeit oder absichtlich manipulative Geschäftsstrategie nachgewiesen. |

## Platz in der bestehenden Gliederung

**2. Verarbeitung und ihre Maßstäbe, aktualisiert P-0156 / AI-051:** Nach dem
kurzen Zeitpunkt-Auftakt drei innere Bewegungen unterscheiden: Verfahren;
Maßstäbe; Anpassung an Auswahlverfahren. Ouyang und Sharma gehören zur zweiten
Bewegung, SEO/GEO mit Aggarwal zur dritten. Dort fragen: Wie richten
Inhaltsanbieter ihre Angebote an dokumentierten oder vermuteten Auswahlkriterien
aus? Kriterien müssen nicht vollständig bekannt sein. Die Google-/Brin-Grundlage
bleibt nötig; Keyword-Stuffing steht nicht stellvertretend für ganz SEO. Keine
neue Haupt-Operation und keine zusätzliche Behauptung, Plattformen änderten
aufgrund der Optimierung ihre Regeln. Die Evidenzgrenzen bleiben unverändert.

**4. Sichtbare Rückmeldung und operative Reichweite:** Ausgabesichtbarkeit, sachliche Richtigkeit und positive Bewertung unterscheiden. Cheng als begrenzten Wirkungsfall einsetzen; zurückverweisen auf die in Interaction beschriebene Bewertung und Iteration. Die psychologischen Nebenbefunde nicht zu einem eigenen Themenstrang ausbauen.

Offene Leitfragen: Wer legt fest, welche Antwort gut ist? Wer bearbeitet Quellen vor ihrer Verwendung? Wann wird Bestätigung mit unabhängiger Prüfung verwechselt? Welche Fehlentwicklungen bleiben bestehen, wenn Antworten trotzdem gut bewertet werden?

## Evidenzgrenze

**Die Quellen reichen für die begrenzte Argumentation zu Sichtbarkeit, Gefälligkeit und Rückwirkung.** „LLMs sind designt, um Menschen zu manipulieren und möglichst lange festzuhalten“ ist dagegen nicht gedeckt. Für eine konkrete geschäftliche Bindungsabsicht wären zusätzliche, anbieterspezifische Belege nötig. Das bleibt eine optionale Vertiefung, kein automatischer neuer Suchauftrag.

Cheng wird in der Science-Fassung 2026 mit drei Experimenten ausgewertet, nicht nach dem abweichenden Preprint 2025. Befunde, Projektsynthesen und Grenzen stehen getrennt in den Einzelnotizen. Die Manuskripte bleiben unverändert.

## Verwaltung und Dokumentation

- Aggarwal: Zotero `Q5HALSIY`, PDF `MB7J4PVW`, `04 Web Forms and Search`.
- Sharma: Zotero `K5TXLBJB`, PDF `MZKPRJSF`, `06 LLM and Agentic Interfaces`.
- Cheng: Zotero `6A52WRQL`, PDF `XTUSEDGS`, `06 LLM and Agentic Interfaces`.

Alle drei eindeutig vorhanden; PDF-Anhänge byteidentisch mit den ausgewerteten Dateien; Citation Keys und automatische Übernahme nach `references/library.bib` geprüft. In dieser Ergänzungsrunde wurden die acht vorbereiteten Datensätze der vorherigen Operation-Runde nicht zusätzlich importiert. Damaliger Stand: 49 Zotero- und zehn weitere lokal vorbereitete Datensätze, 41 Source Notes (40 claimtragend plus Carrolls offene Vorprüfung), 35 Forschungs-PDFs. P-0149 / AI-044 dokumentieren den KI-Beitrag; kein neuer TXT-Abschnitt.

**Nachtrag:** Mit der anschließenden Importfreigabe wurden auch die acht früheren Operation-Datensätze aufgenommen; siehe [Importübersicht](QUELLENRUNDE_OPERATION_01.md). Jetzt 57 Zotero-Einträge und zwei ältere lokal vorbereitete Datensätze außerhalb dieses Auftrags. Belegumfang, Notiz- und PDF-Anzahl unverändert; P-0150 / AI-045.
