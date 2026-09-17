# Quellenrunde Operation 01

## Ergebnis und Status – 15. September 2026

Tim hat die gezielte Recherche zu den drei benannten Operation-Lücken beauftragt. Ergebnis: **drei wissenschaftliche Arbeiten und fünf offizielle Dokumentationsseiten**, zusammengefasst in fünf Auswertungen. Drei PDFs und fünf HTML-Snapshots sind lokal gesichert; die acht bibliografischen Datensätze wurden zunächst [lokal vorbereitet](import-records/operation-round-20260915.bib). Bei dieser Recherche erfolgte noch kein Zotero-Import und keine Manuskriptänderung.

**Importnachtrag vom 15. September 2026:** Alle acht Quellen sind nach gesonderter Freigabe jetzt einschließlich der vorhandenen PDFs beziehungsweise Roh-HTML-Dateien in Zotero. Eindeutigkeit, Sammlungen, Citation Keys, Autoren/Datumsangaben, automatische Übernahme nach `references/library.bib` und alle acht Anhang-Hashes wurden geprüft. Keine neuen Quellen gesucht oder Beleggrenzen erweitert. Die Quellenverwaltung dieser Runde ist abgeschlossen; P-0150 / AI-045.

| Quelle / Citation Key | Zotero-Eintrag | Anhang | Sammlung |
| --- | --- | --- | --- |
| `brinPage1998Anatomy` | `625RMG6A` | `E3JVJACH` | 04 Web Forms and Search |
| `googleSearchWorks2025` | `HCXNUJRW` | `FB3UW9VY` | 04 Web Forms and Search |
| `googleRankingSystems2025` | `Y8NN3GIB` | `XIIIBRC8` | 04 Web Forms and Search |
| `googleSearchTestingSnapshot2026` | `VCHTSD4L` | `VVBUNVHZ` | 04 Web Forms and Search |
| `radfordEtAl2019LanguageModels` | `PGLCEA9D` | `8VUCETQG` | 06 LLM and Agentic Interfaces |
| `ouyangEtAl2022Instructions` | `MAJMMF8N` | `9TKL6CHJ` | 06 LLM and Agentic Interfaces |
| `openaiTextGenerationSnapshot2026` | `2M35CM8S` | `Y4EKJTX7` | 06 LLM and Agentic Interfaces |
| `openaiDataControlsSnapshot2026` | `35LR2DFV` | `JQELXXGQ` | 06 LLM and Agentic Interfaces |

Gesamtbestand bei Abschluss dieses Imports: 59 triagierte Literaturdatensätze,
davon 57 in Zotero und zwei ältere lokal vorbereitete Datensätze außerhalb
dieses Auftrags; 41 Source Notes und 35 Forschungs-PDFs. Die spätere
[kritische Ergänzung](REDAKTION_OPERATION_2_INTERESSEN_MACHT_01.md) führt zu
62 Quellen, 43 Notizen und 36 PDFs, ohne Zotero zu verändern. Die kleineren
Bestandszahlen am Ende dieser Übersicht dokumentieren den früheren Rechercheabschluss.

Die Lücken sind für eine begrenzte Ausarbeitung hinreichend unterfüttert, nicht für eine vollständige Erklärung heutiger Such- oder Chatprodukte. Die aktuelle [viergliedrige Operation-Struktur](GLIEDERUNG_OPERATION_01.md) bleibt bestehen.

## 1. Suchanfrage, Index und Ranking – und wer Relevanz bestimmt

- **Brin und Page 1998**, *The anatomy of a large-scale hypertextual Web search engine*: technische Kernquelle für vorbereiteten Index, Retrieval und mehrfaktorielles Ranking. Historische Entwicklerbeschreibung; nicht heutiger Google-Algorithmus. [Auswertung](source-notes/brin-page-1998-anatomy.md), insbesondere BRIN98-P1–P4.
- **Drei Google-Dokumentationsseiten**, Snapshot 15. September 2026: aktuelle Anbieterbeschreibung zu Verarbeitung, Rankingsystemen und Evaluation durch Qualitätsprüfende und Experimente. [Auswertung](source-notes/google-2026-search-processing-ranking-evaluation.md), GSEARCH26-P1–P5.
- Tragender Anschluss: Suchergebnisse folgen ausgewählten und evaluierten Kriterien. Sichtbarkeit entsteht nicht allein aus der Übereinstimmung einer Query mit vorhandenen Wörtern. **Welche Annahmen über Relevanz werden technisch wirksam?**
- Grenze: Keine offengelegten aktuellen Gewichte, unabhängige Wirkungsmessung oder Beweise für die kommerzielle Bevorzugung bestimmter Treffer. Die Qualitätsprüfenden sortieren laut Google nicht direkt einzelne Ergebnislisten. Generative Google-Suche ist nicht untersucht.

## 2. LLM-Verarbeitung und Maßstäbe einer erwünschten Antwort

- **Radford et al. 2019**, *Language Models are Unsupervised Multitask Learners*: Stützquelle für Kontext, Tokenrepräsentation und bedingte Generierung am Beispiel GPT-2. [Auswertung](source-notes/radford-et-al-2019-gpt2.md), RAD19-P1–P4. Haupttext S. 1–10 gelesen; kein heutiges ChatGPT-Modell.
- **Ouyang et al. 2022**, *Training language models to follow instructions with human feedback*: Kernquelle für Demonstrationen, Antwortvergleiche, Reward-Modell und Optimierung. Nennt die ausgewählten Menschen und institutionellen Grenzen der angestrebten Ausrichtung ausdrücklich. [Auswertung](source-notes/ouyang-et-al-2022-instruction-following.md), OUY22-P1–P6.
- **OpenAI, Text generation**, datierte API-Dokumentation: zeigt Rollen, Entwickleranweisungen und verknüpften Kontext als aktuelle, produktspezifische Ergänzung. [Auswertung](source-notes/openai-2026-api-context-data-controls.md), OAI26-P1–P3.
- Tragender Anschluss: Die sichtbare Nutzerformulierung trifft auf trainierte Verhaltensmaßstäbe und konfigurierten Kontext. **Wessen Kriterien machen eine Antwort erwünscht – und wessen Anweisungen sind vorrangig?**
- Grenze: Training, Verarbeitung einer konkreten Anfrage und anschließende Datenverwendung sind verschiedene Vorgänge. Die Quellen ergeben keine vollständige aktuelle ChatGPT-Pipeline. Ouyang trägt ausdrücklich nicht „Gefallen statt Wahrheit“: menschliche Präferenz und Wahrhaftigkeit sind unterschiedliche Prüfgrößen; begrenzte Verbesserungen der Wahrhaftigkeit und fortbestehende Fehler sind gleichzeitig dokumentiert.

## 3. Übertragung, Speicherung und Weiterverwendung

- **OpenAI, Data controls in the OpenAI platform**, Snapshot 15. September 2026: begrenzter Fallvorschlag für textuelle API-/Responses-Anfragen. [Auswertung](source-notes/openai-2026-api-context-data-controls.md), OAI26-P4–P7.
- Tragender Anschluss: **Nicht für Training verwendet ist nicht gleich nicht gespeichert.** Die Anbieterbeschreibung unterscheidet Modelltraining, Missbrauchsprotokolle und gespeicherten Anwendungszustand; Regeln und Ausnahmen hängen von Endpoint und Konfiguration ab.
- Kritische Frage: **Wer bestimmt die Lebensdauer und Zwecke der Eingabe, und welche dieser Entscheidungen kann die eingebende Person erkennen oder beeinflussen?**
- Grenze: Anbieterselbstauskunft, kein unabhängiger Speicheraudit und keine Bedingungen der ChatGPT-Weboberfläche. Wenn die Thesis ausdrücklich dieses sichtbare Consumer-Interface analysiert, sind dessen eigene Bedingungen separat zu prüfen. Der API-Fall ist ein Vorschlag zur Auswahl, noch keine autorbestätigte Festlegung.
- Vorhandener Kontrast bleibt von Ahn et al. 2008: reCAPTCHAs dokumentierte operative Zweitverwendung. Nicht erneut beschafft und nicht auf heutiges reCAPTCHA übertragen.

## Zuordnung zur bestätigten Struktur

| Abschnitt | Notwendiger Beitrag dieser Runde | Bereits vorhandene Kontraste / Grenze |
| --- | --- | --- |
| 1. Technische Rolle und Kontext | Query gegen Index; Modellrepräsentation und Kontext; API-Rollen | Command-/Formularstandards bleiben wichtig; keine universelle lineare Pipeline. |
| 2. Verarbeitung und ihre Maßstäbe | Rankingmerkmale und Evaluation; ausgewählte menschliche Antwortbewertungen | Akrich sowie Bowker/Star können die vorhandene theoretische Einordnung leisten. Kein zusätzlicher allgemeiner Machttext nötig. |
| 3. Übertragung, Speicherung und Weiterverwendung | Datierter API-Fall mit getrennten Datenzwecken | WHATWG beschreibt Submission, nicht beliebige Serverpraxis; reCAPTCHA ist historischer Kontrast. |
| 4. Sichtbare Rückmeldung und operative Reichweite | Rangfolge als ausgewähltes Resultat; Textantwort als Teil einer größeren API-Operation | Konkrete Screenshots und Kopplung sichtbarer Statusanzeigen an tatsächliche Zustände bleiben separat zu prüfen. |

## Empfehlung für das weitere Vorgehen

Jetzt **keine weitere breite Quellenrunde**. Zuerst Abschnitt 1 knapp aufbauen und pro Aussage nur die notwendigen Belegstellen auswählen. Brin/Page und Ouyang tragen die neuen zentralen Mechanismen; Radford unterstützt einen kurzen technischen Grundlagenteil. Die aktuellen Dokumentationen dienen als datierte Fallbelege, nicht als unabhängige Bestätigung aller Anbieterpraktiken.

Die Gegenüberstellung darf Suche nicht als objektives Finden und LLMs als bloß subjektive Wahrscheinlichkeit darstellen: Auch Suchranking beruht auf gesetzten Maßstäben. Der Unterschied liegt in den jeweiligen Verfahren und Autoritätsverteilungen, nicht in einer einfachen Trennung von Wahrheit und Täuschung.

## Dokumentations- und Quellenstatus

- Fünf neue Source Notes mit Claim-IDs, Leseumfang und Grenzen; keine übernommene Thesisprosa.
- Drei PDFs vollständig gesichert, mit unterschiedlichem ausgewertetem Umfang: Brin/Page gesamter Kurzartikel; Radford Haupttext S. 1–10; Ouyang Hauptartikel ohne separates Supplement.
- [Snapshotmanifest](source-texts/operation-2026-09-15/README.md) dokumentiert Zugriff und Hashes.
- Projektbestand nach dieser Runde: 56 triagierte Datensätze; davon 46 zuletzt in Zotero verifiziert und zehn lokal vorbereitet. Zotero wurde in dieser Runde weder erneut inventarisiert noch verändert. 38 Source Notes: 37 mit begrenzt freigegebenen Aussagen und Carrolls offene Vorprüfung. 32 lokale Forschungs-PDFs.
- AI-Nutzung: P-0148 / AI-043; strukturelle und quellenkritische Vorbereitung, kein neuer TXT-Passagenstatus. Tim entscheidet über die spätere Auswahl und Formulierung.
