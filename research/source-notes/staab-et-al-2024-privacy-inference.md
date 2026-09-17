# Staab et al. 2024 - Persönliche Merkmale aus Texten ableiten

## Identität, Fassung und Lesetiefe

- Robin Staab, Mark Vero, Mislav Balunović und Martin Vechev (2024):
  *Beyond Memorization: Violating Privacy via Inference with Large Language Models*.
  International Conference on Learning Representations (ICLR 2024).
- [Konferenznachweis](https://proceedings.iclr.cc/paper_files/paper/2024/hash/9028b8a3ca98f58e373f0c1497a17448-Abstract-Conference.html).
  Provisorischer Citation Key: `staabEtAl2024PrivacyInference`; kein Zotero-Import.
- Gelesen: [arXiv:2310.07298v2](https://arxiv.org/pdf/2310.07298v2),
  datiert 6. Mai 2024, mit ICLR-2024-Kopf. Nicht byte-identisch mit dem
  Konferenzdownload verifiziert. OpenReview zeigte eine Browserprüfung;
  stattdessen wurden der öffentliche Konferenznachweis und arXiv verwendet.
- Lokal: `research/source-pdfs/staab-et-al-2024-privacy-inference-arxiv-v2.pdf`;
  47 Seiten; gedruckte Seiten entsprechen den PDF-Seiten. SHA-256:
  `1acb05f148494739ba962d1387b0b7da09521313458906c4911bd689a2419e2c`.
- Am 15. September 2026 gelesen: Haupttext S. 1-9, Ethik/Reproduzierbarkeit
  S. 10, Anhang B Methodentext S. 17 und C Methodentext S. 19.
  Ergebnisgrafik und Tabelle auf S. 7 visuell geprüft. Übrige Anhänge,
  Code und Rohdaten nicht ausgewertet; Literaturverweise nicht unabhängig geprüft.

## Gegenstand und Methode

Empirische Untersuchung von neun damaligen LLMs, keine Prüfung der Datenpraxis
heutiger Chatdienste. PersonalReddit enthält 520 öffentliche Profile und 5.814
Kommentare aus 2012 bis Anfang 2016. Auswahl aus 381 Subreddits, in denen
persönliche Angaben zu erwarten waren: keine repräsentative Zufallsstichprobe
aller Eingaben. Acht Merkmalskategorien; 1.184 von den Autoren annotierte Labels,
davon 1.066 mit mindestens mittlerer Gewissheit in der Hauptauswertung.
Die Referenzwerte sind menschliche Textinterpretationen, keine unabhängig
verifizierten Personenakten. Annotierende hatten zusätzliche Kontextinformationen.

GPT-4 erzielt 85,5 Prozent Top-1-Übereinstimmung über die ausgewerteten Labels,
nicht 85,5 Prozent vollständig und korrekt rekonstruierte Personenprofile.
Anhang C beschreibt unter anderem tolerierte Altersabweichungen, Textabgleich,
GPT-4-gestützte und menschliche Nachprüfung. OpenAI-Modelle: damaliger
0613-Checkpoint. Die Testbedingungen nicht als aktuellen Leistungsstand behandeln.

## Ebenen und Übergänge

- **Surface:** Keine Untersuchung eines von Menschen genutzten Textfelds.
- **Interaction:** Der aktive Chatbot-Fall ist eine Simulation: 224 Interaktionen
  mit 20 Profilen zwischen GPT-4-basierten Bots, keine Studie mit menschlichen
  Gesprächspartner:innen. Keine gemessene Unauffälligkeit gegenüber Menschen.
- **Operation:** Zusätzlich zur Textbedeutung für eine Aufgabe werden Merkmale
  über die schreibende Person abgeleitet. Dazu muss der konkrete Text nicht
  erst zum Modelltraining verwendet werden.
- **Projektübertragung:** Textinferenz ist für Operation 3 relevant. Reddit bleibt
  die methodische Herkunft des Belegs, kein neues Social-Media-Kapitel.

## Direkt gestützte Aussagen

| ID | Aussage in eigenen Worten | Belegstelle | Evidenzart | Ebene | Grenze |
| --- | --- | --- | --- | --- | --- |
| STAAB24-P1 | Vortrainierte Modelle können persönliche Merkmale aus ihnen vorgelegten Textsammlungen erschließen. | S. 4-7 | Experiment | O | Zugang zu den Texten vorausgesetzt; kein Beleg tatsächlicher Profilbildung durch jeden Chatbetreiber. |
| STAAB24-P2 | Im gewählten Datensatz stimmt GPT-4 bei 85,5 Prozent der ausgewerteten Labels im ersten Vorschlag mit den Referenzlabels überein. | S. 6-7; Bewertungsverfahren S. 19 | Experiment | O | Keine Vollständigkeit der Profile; ausgewählte Texte, ungleiche Kategorienhäufigkeit und Bewertungstoleranzen. |
| STAAB24-P3 | Das Entfernen erkannter direkter Personenangaben verhinderte im getesteten Verfahren nicht alle Rückschlüsse aus verbleibendem Kontext. | S. 8-9, Abschn. 6 | Experiment | O | Ein konkreter damaliger Anonymisierungsansatz; keine Behauptung, Anonymisierung sei grundsätzlich nutzlos. |
| STAAB24-P4 | Eine zusätzliche verdeckte Inferenzaufgabe lässt sich mit einer sichtbaren Gesprächsaufgabe kombinieren. | S. 5, Abschn. 3.2; S. 8 | Bedrohungsmodell und Bot-Simulation | I/O | Kein Nachweis verbreiteter Produktpraxis, menschlicher Täuschbarkeit oder tatsächlicher Werbenutzung. |
| STAAB24-P5 | Inferenz und Wiederholung memorisierter Trainingsdaten sind unterschiedliche Datenschutzprobleme. | S. 3-4; begrenzter Kontaminationstest S. 17 | Begriffliche Unterscheidung und Kontrollversuch | O | Der Test schließt jede denkbare Trainingskontamination nicht aus; Claude war darin nicht geprüft. |

## Grenzen und kritischer Anschluss

Ein abgeleitetes Merkmal ist keine Gewissheit über eine Person. Ein Text kann
explizite Angaben und indirekte Hinweise enthalten; nicht alle Treffer sind
verdeckte Inferenz. Keine eigenen Versuche an realen Personen durchgeführt,
keine Rohprofile heruntergeladen. Die Autoren veröffentlichen den realen
Datensatz nicht; die Beispiele des Papers sind laut Ethikerklärung synthetisch.

Eigene Anschlussfrage: Wer verfügt über Textsammlungen und entscheidet,
welche Merkmale daraus für welchen Zweck abgeleitet werden? Diese Quelle
belegt die technische Möglichkeit, nicht die Nutzung durch einen bestimmten
Anbieter, einen kommerziellen Erfolg oder psychologische Manipulationswirkung.
Für tatsächliche Zwecküberschreitung ist ein gesonderter Fall nötig;
BetterHelp bietet einen solchen behördlich dokumentierten Vorwurf, aber
keinen Nachweis gerade dieses LLM-Inferenzverfahrens.

## Entscheidung

**Stützquelle.** Enger Beitrag zu Operation 3: Eingaben können Informationen
über ihre Urheber:innen erschließbar machen. Als nächsten Schritt nur diese
Aussage in die gemeinsame Quellenübersicht übernehmen; keine Thesisprosa
oder universelle Profilierungsbehauptung freigeben.
