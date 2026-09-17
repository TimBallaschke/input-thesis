# Sharma et al. 2024 – Präferenztraining und Sycophancy

## Bibliografische Identität und Zugriff

- Mrinank Sharma, Meg Tong, Tomasz Korbak, David Duvenaud, Amanda Askell, Samuel R. Bowman, Newton Cheng, Esin Durmus, Zac Hatfield-Dodds, Scott R. Johnston, Shauna Kravec, Timothy Maxwell, Sam McCandlish, Kamal Ndousse, Oliver Rausch, Nicholas Schiefer, Da Yan, Miranda Zhang und Ethan Perez: *Towards Understanding Sycophancy in Language Models*. ICLR 2024. [Offizieller Konferenzdatensatz](https://openreview.net/forum?id=tvhaxkMKAn).
- [Offizielles Proceedings-PDF](https://proceedings.iclr.cc/paper_files/paper/2024/file/0105f7972202c1d4fb817da9f21a9663-Paper-Conference.pdf), abgerufen 15. September 2026, 35 Seiten einschließlich Anhängen. Vollständige Autorenliste gegen den PDF-Kopf geprüft; verkürzte/abweichende Venue-Metadaten nicht übernommen. Publikationsjahr 2024, nicht das Jahr des ersten arXiv-Uploads 2023; keine unbelegte Konferenz-DOI ergänzt.
- Lokal `research/source-pdfs/sharma-et-al-2024-sycophancy.pdf`; SHA-256 `263f0d66b8847563e6dda987376b8928aae8fabd8bab3542cb260518edc9e381`.
- Gelesen: Haupttext S. 1–9, Danksagung/Autorenrollen S. 10; ergänzend A.1–A.3 auf S. 13–15 sowie D.3 auf S. 33. Abbildungen 5–7 und Ergebnisse auf S. 6–8 visuell geprüft. **Keine vollständige Lektüre sämtlicher Anhänge**, kein Experimentnachbau. Seitenangaben folgen der internen Paginierung.
- Zotero `K5TXLBJB`, PDF `MZKPRJSF`, `06 LLM and Agentic Interfaces`; Citation Key `sharmaUnderstandingSycophancyLanguage2024`. Import und automatische Bibliografieübernahme geprüft.

## Gegenstand, Methode und Evidenzart

Empirische Benchmark- und Trainingsanalyse. Fünf damalige Assistenten: Claude 1.3, Claude 2.0, GPT-3.5-Turbo, GPT-4 und Llama-2-70B-Chat. Vier Aufgabentypen: bewertendes Feedback, Reaktion auf Widerspruch, faktische Antworten und Übernahme falscher Gedichtzuschreibungen. Zusätzlich 15.000 menschlich bewertete Antwortpaare aus Anthropic hh-rlhf; GPT-4-generierte Merkmale und bayesianische logistische Regression. Untersuchungen des Claude-2-Präferenzmodells mit Best-of-N und RL sowie ein Proof-of-Concept mit 266 Fehlvorstellungen und fünf menschlichen Vergleichen je Paar.

Die Arbeit stammt aus dem Umfeld von Anthropic und umfasst direkten Zugang zu eigenen Trainingskomponenten. Das ist wertvolle Primärevidenz, aber keine unabhängige Prüfung aller Anbieter oder heutiger Produkte.

## Surface, Interaction, Operation und Übergänge

- **Surface:** Keine direkte Untersuchung der Gestaltung eines öffentlichen Eingabefeldes.
- **Interaction:** Bereits mitgeteilte Vorlieben oder bloßer Widerspruch können das folgende Feedback verändern. Eine neue Antwort ist deshalb nicht automatisch eine sachliche Verbesserung.
- **Operation:** Menschliche Präferenzlabels und ihre Modellierung setzen Verhaltensanreize im Training. Nicht so beschreiben, als würden bei jeder späteren Eingabe erneut Menschen die Antwort auswählen.
- **Operation → Interaction:** Als Projektanschluss kann Bestätigung fälschlich als unabhängige Prüfung behandelt werden. Ob Nutzer:innen das tatsächlich so wahrnehmen, untersucht diese Arbeit nicht direkt.

## Direkt gestützte Aussagen

| ID | Aussage in eigenen Worten | Belegstelle | Evidenzart | Ebene | Einschränkung |
| --- | --- | --- | --- | --- | --- |
| SHA24-P1 | Die untersuchten Assistenten verändern ihr Feedback abhängig davon, ob Nutzer:innen den bewerteten Text mögen oder ablehnen. | S. 3, §3.1, Abb. 1; A.3 S. 14–15 | kontrollierter Benchmark | I/O | Feedbackpositivität überwiegend modellbewertet; keine generelle Wahrheitsmessung bei Gedichten. |
| SHA24-P2 | Nach bloßem Widerspruch wechseln Assistenten teilweise von richtigen zu falschen Antworten oder räumen nicht begangene Fehler ein. | S. 3–4, §3.2, Abb. 2 | kontrollierter Benchmark | I/O | Ein Widerspruch kann auch berechtigt sein; untersucht ist speziell der unbegründete Wechsel. |
| SHA24-P3 | Übereinstimmung mit Nutzerüberzeugungen sagt menschliche Präferenzurteile mit voraus; Wahrhaftigkeit wird zugleich ebenfalls bevorzugt. | S. 5–6, §4.1, Abb. 5 | statistische Datenauswertung | O | Kein isolierter Kausalnachweis; modellgenerierte Merkmale; Rangfolge abhängig von Analysebedingungen. |
| SHA24-P4 | Stärkere Optimierung gegen ein Präferenzmodell erhöht einige Formen von Sycophancy, vermindert andere; Methode und Ausgangsmodell spielen eine Rolle. | S. 6–7, §4.2, Abb. 6 | Optimierungs-/Trainingsbefund | O | Nicht „RLHF macht Modelle grundsätzlich unehrlicher“. Vortraining/SFT können ebenfalls beitragen. |
| SHA24-P5 | Menschen bevorzugen meist hilfreiche richtige Antworten, aber nicht zuverlässig gegenüber überzeugend formulierten falschen Bestätigungen. | S. 7–9, §4.3, Abb. 7; D.3 S. 33 | begrenztes menschliches Experiment | O/I | 266 Fehlvorstellungen; kein externes Fact-Checking erlaubt; bewertende Personen sind nicht die Nutzer:innen mit der Fehlüberzeugung. |

## Kritische Auswertung und Einsatz

**Operation 2:** Als direkte Ergänzung zu Ouyang: Eine menschlich hoch bewertete Antwort ist nicht notwendig eine sachlich richtige Antwort. Entscheidend sind die ausgewählten Bewertungsaufgaben, Personen, Datensätze und Optimierungsverfahren. Aus „menschlichem Feedback“ folgt kein einheitlicher menschlicher Maßstab.

**Operation 4 und Rückbezug auf Iteration:** Antworten reagieren auf die Position der fragenden Person; damit kann eine Korrekturschleife auch eine richtige Antwort verschlechtern. **Projektfrage:** Woran lässt sich erkennen, ob ein Modell einen Fehler berichtigt oder lediglich dem Widerspruch nachgibt?

Begrifflich ist Sycophancy mehr als ein freundlicher Ton: Gemeint ist hier unerwünschte Anpassung an Zustimmung, auch auf Kosten richtiger Auskunft. „Unauthentisch“ bleibt eine interpretative Zuschreibung, denn untersucht wird kein inneres Empfinden des Modells. Weder absichtliche Täuschung noch ein Geschäftsmodell zur Maximierung der Verweildauer werden nachgewiesen. Pauschales „Gefallen statt Wahrheit“ würde die positiven Wahrhaftigkeitsbefunde unterschlagen.

## Entscheidung

**Kernquelle.** Liefert die benötigte empirische Verbindung zwischen Bewertungsmaßstäben, Anpassung an Nutzerpositionen und begrenzter Verlässlichkeit der Ausgabe, einschließlich wichtiger Gegenbefunde.
