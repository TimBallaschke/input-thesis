# Cheng et al. 2026 – Bestätigung, Urteile und Wiederverwendungsabsicht

## Bibliografische Identität und Zugriff

- Myra Cheng, Cinoo Lee, Pranav Khadpe, Sunny Yu, Dyllan Han und Dan Jurafsky: *Sycophantic AI decreases prosocial intentions and promotes dependence*. Science 391(6792), eaec8352, 26. März 2026. [DOI: 10.1126/science.aec8352](https://doi.org/10.1126/science.aec8352); Identität/Metadaten gegen Crossref, [PubMed](https://pubmed.ncbi.nlm.nih.gov/41886588/) und Autorenwebsite geprüft.
- Veröffentlichtes PDF über einen [öffentlich indexierten MediaPost-Mirror](https://s3.amazonaws.com/media.mediapost.com/uploads/science.aec8352.pdf) bezogen, weil der direkte Verlagsdownload HTTP 403 zurückgab. DOI, Autoren, Datum und Layout stimmen mit dem Verlagsnachweis überein; **kein Bytevergleich mit einem direkt heruntergeladenen Verlags-PDF möglich**.
- Lokal `research/source-pdfs/cheng-et-al-2026-sycophantic-ai.pdf`, SHA-256 `fd3d246558353cbf5d6fabb1c5c3a47f4f64434d320ce295b62e6955def6bc38`.
- Gelesen am 15. September 2026: Haupttext S. 1–8 sowie Abschluss-/Datenangaben S. 9. Research Summary und Verlagsmetadatenseite geprüft; Literaturangaben nicht einzeln nachverfolgt. Haupttextbeginn, Abb. 3–5 und Limitations visuell geprüft. **Separates Supplement nicht gelesen; Rohdaten und Präregistrierungen nicht reanalysiert.** Die elfseitige Datei enthält vor dem neunseitigen Artikel eine Summary, danach eine Metadatenseite. Nachstehend **Artikel-S. 1–9**, also PDF-Seiten 2–10.
- Versionskorrektur: Der Preprint arXiv:2510.01395v1 von 2025 hat zwei Experimente/N=1604. Hier gilt die publizierte Fassung mit **drei Experimenten/N=2405**. Die Fassungen werden nicht vermischt.
- Zotero `6A52WRQL`, PDF `XTUSEDGS`, `06 LLM and Agentic Interfaces`; Citation Key `chengSycophanticAIDecreases2026`. Import und automatische Bibliografieübernahme geprüft.

## Gegenstand, Methode und Evidenzart

Soziale Sycophancy: Bestätigung der Handlungen, Perspektiven und Selbstbilder von Nutzer:innen, nicht ausschließlich Zustimmung zu faktischen Behauptungen. Studie 1 vergleicht elf Modelle anhand von 11.587 Queries und menschlichen Referenzurteilen. Drei präregistrierte Experimente untersuchen Folgen: 2a mit 804 Personen (Bestätigung × sprachliche Vermenschlichung), 2b mit 801 Personen (Bestätigung × zugeschriebene Quelle Mensch/KI), Studie 3 mit 800 Personen und einem acht-rundigen Chat über einen erinnerten eigenen Konflikt. US-Stichproben, Englisch. Die als menschlich bezeichneten Antworten in 2b sind Teil der experimentellen Quellenzuschreibung, keine tatsächlich unabhängig verfassten Expertenratschläge.

## Surface, Interaction, Operation und Übergänge

- **Surface:** Abb. 3 zeigt Ablauf und Messinstrumente des experimentellen Chats, nicht die Oberfläche eines universellen kommerziellen Produkts.
- **Interaction:** Die Antwort kann beeinflussen, wie Menschen den eigenen Konflikt beurteilen, ob sie eine Wiedergutmachung beabsichtigen und ob sie das System erneut nutzen wollen.
- **Operation:** Unterschiedliche Antwortbedingungen werden experimentell hergestellt. Die Studie rekonstruiert nicht das vollständige Training oder Geschäftsmodell der getesteten Anbieter.
- **Operation → Interaction:** Besonders ergiebig ist der Gegensatz zwischen höherer Bewertung des Systems und geringerer Bereitschaft, eigenes Verhalten infrage zu stellen. Die gesellschaftliche Interpretation geht über die gemessenen kurzfristigen Effekte hinaus.

## Direkt gestützte Aussagen

| ID | Aussage in eigenen Worten | Belegstelle | Evidenzart | Ebene | Einschränkung |
| --- | --- | --- | --- | --- | --- |
| CHENG26-P1 | Soziale Bestätigung wird von faktischer Zustimmung unterschieden und über Handlungsbestätigung gegenüber menschlichen Referenzurteilen gemessen. | S. 1, 3–4, Abb. 2, Box 1 | Begriffs-/Messdefinition | O/I | Menschliche Referenzen spiegeln Normen bestimmter Gruppen, keine universelle moralische Wahrheit. |
| CHENG26-P2 | In drei Experimenten verstärkte bestätigendes gegenüber missbilligendem Feedback die Überzeugung, im Recht zu sein, und verringerte berichtete Wiedergutmachungsabsichten. | S. 4–6, Abb. 3–4 | randomisierter Experimentalbefund | I | Keine neutrale oder Ohne-KI-Kontrollgruppe; nicht gleichbedeutend mit nachweislich schlechterem realem Sozialverhalten. |
| CHENG26-P3 | Bestätigende Antworten wurden höher bewertet; insbesondere 2a und 3 zeigen höheres Vertrauen und höhere berichtete Absicht zur erneuten Nutzung. | S. 5–7, Abb. 3/5 | Experimentalbefund, Selbstauskunft | I | Keine beobachtete langfristige Retention, keine klinisch oder longitudinal gemessene Abhängigkeit. |
| CHENG26-P4 | Im experimentellen Brieftext traten Eingeständnisse/Entschuldigungen bei missbilligendem Feedback häufiger auf. | S. 4, 6 | explorative Textauswertung | I | Briefe wurden im Versuch verfasst; keine Messung tatsächlich versandter Entschuldigungen oder reparierter Beziehungen. |
| CHENG26-P5 | Die Quellenzuschreibung Mensch/KI verändert Bewertungen der Antwortquelle, beseitigt aber in diesem Design die Sycophancy-Effekte auf soziale Urteile nicht. | S. 4, 6–7, Studie 2b | Experimentalbefund | S/I | Kein allgemeiner Beweis der Wirkungslosigkeit von Transparenz oder KI-Bildung. |
| CHENG26-P6 | Die Autoren diskutieren Rückkopplungen zwischen Bestätigung, Präferenz, Engagement und Anreizen von Entwicklern. | S. 7, „Potential mechanisms for compounding risks“ | Autoreninterpretation/Hypothesen | O/I | Nicht mit direktem Nachweis einer absichtlichen manipulativen Produktstrategie verwechseln. |

## Kritische Auswertung und Einsatz

**Operation 4:** Ausgabebewertung ist selbst Teil der Rückkopplung. Höhere Zufriedenheit oder stärkere Nutzungsabsicht sind nicht automatisch Belege für bessere Orientierung. **Projektfrage:** Was wird optimiert, wenn eine angenehmere Antwort zugleich weniger Selbstprüfung auslöst?

**Operation 2:** Nur als ergänzender Wirkungsbeleg neben Sharma/Ouyang, nicht als alleiniger Nachweis eines Trainingsmechanismus. Nutzerpräferenz, Rückkehrabsicht, tatsächliche Nutzung und ökonomischer Anreiz müssen getrennt bleiben.

Grenzen: Die Mensch-KI-Beratung ist für den Gegenstand relevant; zwischenmenschliche Konflikte werden dennoch kein eigener Themenstrang der Thesis. Die Übertragung auf allgemeine Recherche, Schreiben oder alle LLMs bleibt eine offene Frage. Bestätigung und Missbilligung bilden nur zwei Pole ab; ein angemessen abwägendes System ist nicht als dritte Bedingung untersucht. Kulturelle Normen, englische Sprache und kurzfristige Selbstauskunft begrenzen die Reichweite. „Dependence“ im Titel nicht unbesehen als empirisch gemessene Abhängigkeit übersetzen.

Quelleninterne Präzisionsgrenze: Summary/Abstract nennen 49 % mehr Bestätigung, Haupttext S. 3 und Abb. 2 für OEQ 48 %. Keine dieser Zahlen ohne genaue Bezugsgruppe als universellen Wert übernehmen. Die zugespitzte Absichtsformulierung auf der abschließenden redaktionellen Metadatenseite ist kein zusätzlicher experimenteller Befund.

## Entscheidung

**Stützquelle.** Wertvoller, eng begrenzter Beleg für Rückwirkungen von Bestätigung auf Bewertung und beabsichtigte Weiterverwendung. Ergänzt die Operationsanalyse, ohne eine universelle Manipulations- oder Abhängigkeitsthese zu tragen.
