# Zamfirescu-Pereira et al. 2023 - Why Johnny Can't Prompt

## Status und Zugriff

- Bibliografie: J. D. Zamfirescu-Pereira, Richmond Y. Wong, Bjoern Hartmann und Qian Yang, „Why Johnny Can’t Prompt: How Non-AI Experts Try (and Fail) to Design LLM Prompts“, in *Proceedings of the 2023 CHI Conference on Human Factors in Computing Systems* (ACM, 2023), S. 1–21. DOI: `10.1145/3544548.3581388`.
- Citation Key: `zamfirescu-pereiraWhyJohnnyCant2023`
- Quellentyp: qualitative Nutzerstudie mit einem Design Probe und dokumentierter Systemimplementierung
- Gelesene Fassung: `research/source-pdfs/zamfirescu-pereira-2023-why-johnny-cant-prompt.pdf`
- Zugriffstiefe: vollständiger 21-seitiger Artikel einschließlich Appendix, Abbildungen, Tabellen und Literaturverzeichnis; alle PDF-Seiten visuell geprüft
- Gelesene Seiten: PDF-Seiten 1–21
- Noch erforderlich: Die Befunde müssen auf BotDesigner, die untersuchte Aufgabe, GPT-3 `text-davinci-002` und die kleine Stichprobe begrenzt bleiben. Andere Promptfelder und aktuelle Modelle benötigen eigene Evidenz.

## Gegenstand, Methode und Evidenzart

Die Studie untersucht, wie zehn Personen mit wenig oder keiner Erfahrung im Promptdesign einen vorhandenen GPT-3-basierten Rezeptchatbot verbessern. Die Teilnehmenden hatten unterschiedliche Programmiererfahrung, stammten aber überwiegend aus akademischen und technisch versierten Kontexten. Mit dem No-Code-Werkzeug BotDesigner sollten sie innerhalb von bis zu einer Stunde einen vorgegebenen Chatbot so verändern, dass er Eigenschaften einer professionellen Köchin aus *Back to Back Chef* nachbildet, etwa Humor, Analogien, vereinfachte Erklärungen und Rückfragen zum Abschluss einzelner Schritte. Die Sitzungen verwendeten Think-aloud, Videoaufzeichnung und gezielte, nicht für alle identische Interventionen. Zwei Autor:innen verglichen die beobachteten Vorgehensweisen und kategorisierten Schwierigkeiten mit Affinity Diagrams und einem Service Blueprint. Die Befunde sind explorativ und qualitativ, nicht repräsentativ.

## Surface

BotDesigner teilt die Oberfläche in eine Konversationsansicht und einen Prompt-Template-Editor. Der Editor enthält Felder für Preamble, First Turns und Reminder. In der Konversation können Botantworten markiert, mit frei gewählten Fehlerlabels versehen, nach einer Promptänderung erneut erzeugt oder nach Bearbeitung einer Nutzeräußerung weitergespielt werden. Ein Error Browser stellt zuvor markierte Antworten und veränderte Ausgaben nebeneinander und aggregiert Fehlerkategorien. Diese sichtbaren Elemente bieten eine Struktur für lokales und systematisches Testen. Dennoch blieb für viele Teilnehmende unklar, welche Eingabe wo und wie lange wirksam war. Die Studie analysiert die Nutzung dieser konkreten Oberfläche, nicht Promptfelder im Allgemeinen.

## Interaction

Alle Teilnehmenden konnten Prompts verändern und lokal erproben; zwei benötigten Hilfe, um damit zu beginnen. Fast alle arbeiteten ad hoc und opportunistisch: Sie reagierten auf einzelne problematische Antworten, änderten Instruktionen und erklärten einen Versuch häufig schon nach einem gelungenen Beispiel für erfolgreich. Die systematische Testfunktion wurde von niemandem eingesetzt. Teilnehmende verallgemeinerten aus einzelnen Erfolgen oder Fehlschlägen, bevorzugten direkte Instruktionen gegenüber Beispieldialogen und vermieden teils Wiederholung, emotionale Sprache oder unhöflich wirkende Formulierungen. Menschliche Gesprächserwartungen prägten damit sowohl die gewählten Prompts als auch Annahmen über Verständnis, Gedächtnis und Fähigkeiten des Systems. Alle erreichten zumindest einzelne gewünschte Verhaltensänderungen; die Studie belegt daher Schwierigkeiten beim robusten Promptdesign, nicht die Unmöglichkeit jeder wirksamen Eingabe.

## Operation

BotDesigner erzeugt für jede Botantwort einen Prompt aus Preamble, dem Verlauf der aktuellen Konversation, einem optionalen Reminder und einem abschließenden Rollenpräfix. Dieser Text wird als eine Anfrage an GPT-3 `text-davinci-002` gesendet; für konsistentere Tests war die Temperatur auf 0 gesetzt. Frühere Konversationen werden nicht übernommen. Fehlerlabels dienen ausschließlich den menschlichen Designer:innen und werden nicht vom Modell verarbeitet. Die Retry-Funktion erzeugt nach einer Templateänderung eine neue Antwort im bisherigen lokalen Kontext; der Error Browser kann geänderte Templates gegen zuvor markierte Antworten prüfen. Diese Angaben dokumentieren die Operation von BotDesigner, nicht die interne Verarbeitung des Sprachmodells.

## Übergänge

- **Surface -> Interaction:** Die natürliche Sprache und der No-Code-Editor senken die formale Einstiegshürde, verlangen aber weiterhin Wissen über Rollen, Templatebestandteile, Geltungsdauer, Beispiele und Teststrategien.
- **Interaction -> Operation:** Änderungen in Preamble, aktuellem Dialog oder Reminder werden unterschiedlich in den zusammengesetzten Modellprompt aufgenommen; Retry und neue Konversation lösen neue Modellanfragen mit jeweils anderem Kontext aus.
- **Surface -> Operation:** Sichtbare Fehlerlabels und Testfunktionen haben unterschiedliche operative Rollen. Dass einige Teilnehmende Labels zunächst als Modellfeedback verstanden, zeigt eine konkrete Differenz zwischen sichtbarer Handlung und tatsächlicher Systemwirkung.

## Direkt gestützte Aussagen

| ID | Aussage in eigenen Worten | Belegstelle | Evidenzart | Ebene | Einschränkung |
| --- | --- | --- | --- | --- | --- |
| ZP23-P1 | BotDesigner verbindet einen natürlichsprachigen Template-Editor mit Konversation, Fehlerkennzeichnung, lokalem Retry und einem Error Browser für breitere Tests. | Abschn. 3.1–3.2; Abb. 1–2, S. 4–6 (PDF) | dokumentierte Design-Probe | S / I / O | Prototypische Forschungsoberfläche, kein allgemeines Promptfeld. |
| ZP23-P2 | Die Studie beobachtete zehn Personen mit wenig oder keiner Promptdesignerfahrung bei der Verbesserung eines vorgegebenen Rezeptchatbots; die Aufgabe dauerte bis zu eine Stunde. | Abschn. 3.3; Tabelle 3, S. 7–8 (PDF) | Studiendesign | I | Kleine, überwiegend akademisch und technisch geprägte Stichprobe. |
| ZP23-P3 | Alle Teilnehmenden betrieben lokale, ad-hoc Promptiteration; zwei benötigten Hilfe, um damit zu beginnen. | Abschn. 4 und 4.1, S. 9–10 (PDF) | qualitative Beobachtung | I | Interviewerhilfe und vorgegebene Ausgangsvorlage beeinflussten den Verlauf. |
| ZP23-P4 | Zentrale Schwierigkeiten entstanden durch Verallgemeinerung aus einzelnen Beobachtungen und durch Erwartungen aus menschlicher Kommunikation. | Abschn. 4.2, S. 10 (PDF) | qualitative Interpretation | I | Von den Autor:innen aus dieser konkreten Aufgabe abgeleitet. |
| ZP23-P5 | Die Teilnehmenden bevorzugten direkte Instruktionen gegenüber Beispieldialogen; Beispiele zeigten Wirkung, wurden aber kaum wiederverwendet. | Abschn. 4.2–4.3.1, S. 10–11 (PDF) | qualitative Beobachtung/Interpretation | I | Die Ausgangsvorlage bestand selbst nur aus Instruktionen und kann die Präferenz mitgeprägt haben. |
| ZP23-P6 | Niemand verwendete in der Hauptaufgabe die systematische Testoberfläche; häufig genügte eine einzelne verbesserte Antwort, um eine Änderung als erfolgreich zu behandeln. | Abschn. 4.3.2, S. 11–12 (PDF) | qualitative Beobachtung | I -> O | Belegt Nichtnutzung im untersuchten Workflow, nicht generelle Unfähigkeit zu systematischem Testen. |
| ZP23-P7 | Mehrere Teilnehmende verwechselten Rollen, Geltungsdauer und Gedächtnis der Eingaben; frühere Konversationen wirkten im System nicht auf neue Konversationen fort. | Abschn. 4.3.1 und 5.1, S. 10–13 (PDF) | Beobachtung plus Systembeschreibung | I / O | Spezifisch für die Promptzusammensetzung von BotDesigner. |
| ZP23-P8 | BotDesigner setzt Preamble, aktuelle Konversation, optionalen Reminder und Rollenpräfix zu einer einzelnen Anfrage an `text-davinci-002` zusammen; die Temperatur war auf 0 gesetzt. | Appendix A.1; Abb. 4, S. 17–18 (PDF) | technische Implementierungsbeschreibung | O | Dokumentiert weder Modelltraining noch interne Inferenz. |
| ZP23-P9 | Fehlerlabels waren nur für menschliche Tests bestimmt, wurden aber von einzelnen Teilnehmenden zunächst als vom Chatbot verwendetes Feedback interpretiert. | Abschn. 4.3.2, S. 11–12 (PDF) | qualitative Beobachtung plus Systembeschreibung | S -> O | Betrifft die spezifische Labelgestaltung des Prototyps. |
| ZP23-P10 | Die Autor:innen schlagen unter anderem auffindbare Beispiele, sichtbare Ursache-Wirkungs-Vergleiche und stärkere Unterstützung robuster Tests vor. | Abschn. 5.1–5.2, S. 13–14 (PDF) | Designimplikation | S / I | Vorschläge wurden in dieser Studie nicht vergleichend evaluiert. |
| ZP23-P11 | Die Autor:innen beanspruchen weder universelle Gültigkeit noch eine vollständige Beschreibung aller Fehlvorstellungen und verweisen auf Stichproben-, Zeit-, Aufgaben- und Domänengrenzen. | Abschn. 5.3–5.4, S. 14–15 (PDF) | ausdrückliche Quellenbegrenzung | I | Übertragung auf andere Bevölkerungen, Aufgaben und Modelle bleibt offen. |

## Verhältnis zur Grundstruktur

Die Quelle verbindet alle drei Ebenen an einem eng dokumentierten Fall. Sie zeigt, wie die sichtbare Einfachheit eines natürlichsprachigen Editors tatsächliche Formulierungs-, Rollen- und Testarbeit verdecken kann. Besonders stark ist die Differenz zwischen bearbeitetem Text und operativer Wirksamkeit: Preamble, Dialog und Reminder sehen wie Texteingabe aus, besitzen aber verschiedene Kontext- und Geltungsrollen; Labels sehen nach Feedback aus, verändern das Modell jedoch nicht.

## Grenzen und Gegenprüfung

Die Stichprobe umfasst zehn wahrscheinlich frühe Anwender:innen, die Aufgabe ist ein angeleiteter Rezeptchatbot und die Laufzeit begrenzt. Die Ausgangsvorlage, die Erläuterung der Oberfläche und spätere Interviewerhinweise beeinflussten die beobachteten Strategien; nicht alle erhielten dieselben Hinweise. Das System verwendete eine historische GPT-3-Version und eine eigens entwickelte Oberfläche. Die Befunde dürfen daher nicht auf alle Nicht-Expert:innen, heutige Chatprodukte oder jedes Prompting übertragen werden. Subramonyam et al. 2024 bieten einen breiteren theoretischen Rahmen; aktuelle Produkt- und Modelloperationen benötigen bei Bedarf eigene Primärquellen.

## Entscheidung

**Kernquelle.** Funktion: empirische Evidenz für Formulierungs-, Erwartungs-, Iterations- und Testprobleme von Nicht-KI-Expert:innen sowie ein konkreter Beleg dafür, dass ähnlich sichtbare Texteingaben innerhalb eines Promptwerkzeugs unterschiedliche operative Rollen haben. Verbleibende Lücke für späteres Schreiben: Reichweite über BotDesigner, GPT-3 und den Rezeptchatbot hinaus.
