# Radford et al. 2019 – Sprachmodell, Kontext und Generierung

## Status und Zugriff

- Alec Radford, Jeffrey Wu, Rewon Child, David Luan, Dario Amodei und Ilya Sutskever: *Language Models are Unsupervised Multitask Learners*. OpenAI, technischer Bericht, 2019. Kein hier verifizierter DOI oder Zeitschriftenband.
- [Original-PDF](https://cdn.openai.com/better-language-models/language_models_are_unsupervised_multitask_learners.pdf); lokal `research/source-pdfs/radford-et-al-2019-gpt2.pdf`, entsprechender Layouttext in `research/source-texts/`.
- Zugriff am 15. September 2026. Das PDF umfasst 24 Seiten. **Haupttext S. 1–10 vollständig gelesen**; anschließende Literatur und Beispieltabellen S. 11–24 nicht ausgewertet. Gleichung und Tokenrepräsentation auf PDF-S. 2 und 4 visuell geprüft. Nachstehende Seiten beziehen sich auf die PDF-Fassung.
- SHA-256: `d9d852e2894556e73f53cb22b7c605a9643d6f0b19bf604b429ed6192fa24f4e`.
- Citation Key: `radfordEtAl2019LanguageModels`; Zotero `PGLCEA9D`, PDF `8VUCETQG`, Sammlung `06 LLM and Agentic Interfaces`. Import, Bibliografieexport und byteidentischer Anhang am 15. September 2026 geprüft; keine Erweiterung des ausgewerteten Umfangs.

## Gegenstand, Methode und Evidenzart

Entwicklerbericht über GPT-2: autoregressives Sprachmodell, WebText-Korpus, Repräsentation und aufgabenübergreifende Evaluation ohne aufgabenspezifisches Fine-Tuning. Technische Beschreibung und Benchmarkbefunde sind voneinander zu unterscheiden. Kein aktuelles ChatGPT-System und keine Studie eines sichtbaren Promptfelds.

## Surface und Interaction

Keine direkte Untersuchung einer Eingabeoberfläche oder gewöhnlicher Nutzung. Beschriebene Aufgabenhinweise und Beispiele im Kontext dokumentieren eine technische Konditionierung, nicht bereits menschliche Promptkompetenz oder die tatsächliche Interpretation eines Chatinterfaces.

## Operation und Übergänge

Vorangehende Symbole bilden den Kontext einer Wahrscheinlichkeitsverteilung über die Fortsetzung. Die Zeichenfolge erhält eine modellinterne Tokenrepräsentation. Aufgabenhinweise, Beispiele und Auswahlverfahren beeinflussen die Generierung; die Quelle dokumentiert dabei unterschiedliche Decodierverfahren.

**Projektsynthese:** Die sprachliche Offenheit einer Eingabe hebt weder Repräsentationsentscheidungen noch begrenzten Kontext oder die Auswahl der Trainingsdaten auf. Ein technisch wahrscheinlicher Text ist nicht allein deshalb eine sachlich richtige Antwort.

## Direkt gestützte Aussagen

| ID | Aussage in eigenen Worten | Belegstelle | Evidenzart | Ebene | Einschränkung |
| --- | --- | --- | --- | --- | --- |
| RAD19-P1 | Sprachmodellierung zerlegt eine Sequenzwahrscheinlichkeit in bedingte Wahrscheinlichkeiten unter Einbezug vorangehender Symbole. | S. 2, §2 | Modellbeschreibung | O | Erklärt das Grundprinzip, nicht jede Stufe eines aktuellen Assistenzsystems. |
| RAD19-P2 | WebText wurde anhand ausgehender Reddit-Links mit mindestens drei Karma-Punkten ausgewählt und weiter aufbereitet. | S. 3, §2.1 | Korpusbeschreibung | O | Historische Auswahlheuristik; keine Repräsentativität aller Sprache oder aktueller Trainingsdaten. |
| RAD19-P3 | GPT-2 verwendet eine bytebasierte BPE-Repräsentation mit Beschränkungen der Zusammenführung. | S. 4, §2.2 | Implementierung | O | Tokens nicht einfach mit Wörtern gleichsetzen; kein Nachweis heutiger Tokenizer. |
| RAD19-P4 | Aufgabenformat, Kontextbeispiele und Decodierung sind unterscheidbare Bedingungen der Ausgabe. | S. 6, §3.5–3.7 | Versuchs-/Generierungsverfahren | O | Greedy Decoding und Top-k-Sampling nicht zu „immer das wahrscheinlichste nächste Wort“ vereinheitlichen. |
| RAD19-P5 | Die gezeigten hochwahrscheinlichen Antworten enthalten auch sachliche Fehler; die praktische Zero-shot-Leistung bleibt begrenzt. | S. 7, §3.8, Tabelle 5; S. 8–10 | Beispiele / Benchmarkgrenzen | O | Keine allgemeine Kalibrierungsstudie und kein aktueller Produktvergleich. |

## Verhältnis zur Grundstruktur und Gegenprüfung

Operation 1–2: technische Repräsentation, Kontext und Generierung. Kontext ist keine unmittelbare Übertragung einer stabilen menschlichen Absicht. Kritische Frage: **Welche Sprache und welche Aufgabenform werden durch Korpus, Repräsentation und Training zum verarbeitbaren Normalfall?**

Für Verhaltenstraining ist [Ouyang et al.](ouyang-et-al-2022-instruction-following.md) nötig; für heutige, konkret dokumentierte API-Rollen die [API-Fallquelle](openai-2026-api-context-data-controls.md). Weder zusammen noch einzeln legen diese Quellen eine vollständige heutige ChatGPT-Pipeline offen. Keine Aussagen zu aktueller Kontextgröße, internem Reasoning, Retrieval oder Speicherpolitik aus GPT-2 ableiten.

## Entscheidung

**Stützquelle.** Geeignet für einen kurzen, historisch ausgewiesenen Mechanismusabschnitt, nicht als alleinige Quelle über gegenwärtige LLM-Produkte.
