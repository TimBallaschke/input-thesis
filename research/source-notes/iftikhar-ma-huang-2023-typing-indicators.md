# Iftikhar, Ma und Huang 2023 - Evaluating Typing Indicators

## Status und Zugriff

- Bibliografie: Zainab Iftikhar, Yumeng Ma und Jeff Huang, „‘Together but not together’: Evaluating Typing Indicators for Interaction-Rich Communication“, in *Proceedings of the 2023 CHI Conference on Human Factors in Computing Systems* (ACM, 2023), S. 1–12. DOI: `10.1145/3544548.3581248`.
- Citation Key: `iftikharTogetherNotTogether2023`
- Quellentyp: kontrollierte Remote-Studie im Within-Subjects-Design mit quantitativer Belastungs-/Präferenzmessung, Chat- und Ereignislogs sowie qualitativen Interviews
- Gelesene Fassung: `research/source-pdfs/iftikhar-ma-huang-2023-typing-indicators.pdf`
- Dateiprüfsumme: SHA-256 `082187959d7f4aa69155f20bea91633c478b1a248b908889614e124cee673269`
- Zugriffstiefe: vollständiger zwölfseitiger Artikel einschließlich Abbildungen, Tabellen, Diskussion, Limitationen und Literaturverzeichnis; alle PDF-Seiten visuell geprüft
- Gelesene Seiten: PDF-/Druckseiten 1–12
- Noch erforderlich: Für eine heutige Drei-Punkte-Animation in einem konkreten KI-/LLM-Produkt sind versionierte Interfacebeobachtung und technische Produktdokumentation nötig. Die Studie untersucht weder KI-Chat noch Modellgenerierung.

## Gegenstand, Methode und Evidenzart

Die Studie vergleicht vier Zustände einer eigens gebauten zwischenmenschlichen Chatoberfläche: keinen Indikator, die Textanzeige „Person X is typing“, maskiertes Live-Tippen als fortlaufende `#`-Zeichen sowie Live-Tippen mit sichtbaren Zeichen, Pausen, Löschungen und Korrekturen. Die Drei-Punkte-Animation wird im Forschungsüberblick als verbreitete Variante erwähnt, ist aber keine eigene experimentelle Bedingung.

24 erwachsene Personen zwischen 19 und 35 Jahren, die häufig Messenger nutzten, bearbeiteten in wechselnden Zweiergruppen vier kooperative Survival-Ranking-Aufgaben. Sechs Teilnehmende waren weiblich. Das Design war innerhalb der Personen vollständig gegengewichtet; Partner:innen, Aufgaben und Indikatoren wechselten. Erhoben wurden NASA-TLX-basierte Belastungswerte, Abschlussbefragungen, halbstrukturierte Einzelinterviews und client-/serverseitige Ereignislogs mit Verbindungszuständen, Tastenereignissen und UNIX-Zeitstempeln. Wegen eines No-Shows und eines Verbindungsfehlers lagen 43 statt 48 Chats vor; zwei Interviews wurden wegen Audioproblemen nicht qualitativ ausgewertet.

## Surface

Die experimentelle Oberfläche zeigt ein einzeilig wirkendes Texteingabefeld, Send- und Leave-Room-Schaltflächen sowie einen Chatverlauf. Die vier Bedingungen verändern ausschließlich die sichtbare Information über die noch nicht abgesendete Eingabe der anderen Person:

- **No indicator:** Während der Komposition ist kein Hinweis sichtbar.
- **Is typing:** Auf der Empfängerseite erscheint „Person X is typing“; Abbildung 1 zeigt keine Drei-Punkte-Animation.
- **Masked typing:** Jedes eingegebene oder bearbeitete Zeichen wird in Echtzeit als `#` sichtbar. Länge, Tempo und Korrekturen werden erkennbar, der Inhalt bleibt bis zum Senden verborgen.
- **Live typing:** Zeichen, Pausen, Löschungen und Korrekturen sind in Echtzeit sichtbar, als würde die empfangende Person auf den Bildschirm der schreibenden Person sehen.

Der Artikel nennt drei bewegte Punkte oder den Text „Person X is typing“ als verbreitete Is-Typing-Formen. Diese Aussage ist eine Literaturzusammenfassung, keine visuell oder experimentell geprüfte Aussage über die Drei-Punkte-Animation.

## Interaction

Die Bedingungen verändern, was die wartende Person während der noch laufenden Formulierung wahrnimmt und wann sie reagiert. Live-Tippen ermöglichte einzelnen Teilnehmenden, vor dem abgeschlossenen Senden zu antworten, reduzierte berichtetes Warten und machte Tippfluss, Pausen, Fehler und Revisionen zu gemeinsam sichtbaren Interaktionsereignissen. Maskiertes Tippen zeigte Aktivität, Nachrichtenlänge und Bearbeitung, ohne den Inhalt preiszugeben.

Für die kooperative Aufgabe berichtet der Artikel einen niedrigeren gesamten NASA-TLX-Wert für Live-Tippen als für keinen Indikator sowie niedrigere Belastungsrichtungen in Tabelle 3. Gleichzeitig wurden keine signifikanten Unterschiede in der Zahl der ausgetauschten Nachrichten oder Wörter gefunden. Qualitativ verbanden viele Teilnehmende sichtbare Aktivität mit Beteiligung, Validierung und besserem Turn-Taking; andere empfanden insbesondere Live-Tippen als Überwachung, Verletzlichkeit oder Einschränkung selektiver Selbstdarstellung. Nur zehn Personen gaben an, Live-Tippen im persönlichen Alltag verwenden zu wollen, obwohl es für die Studienaufgabe häufig bevorzugt wurde.

Die Zahlenberichterstattung auf Seite 6 ist intern nicht vollständig konsistent. Im Fließtext werden für Live-Tippen bei Aufwand und Frustration dieselben Mittelwerte wie für die No-Indicator-Bedingung genannt, während Tabelle 3 deutlich niedrigere Werte ausweist. Auch einzelne Prozentangaben variieren zwischen den Seiten 6 und 7. Deshalb werden die Richtung der Ergebnisse, der berichtete Gesamtvergleich und die qualitativen Befunde verwendet, nicht die widersprüchlichen Einzelprozente oder Mittelwerte.

## Operation

Die Studie dokumentiert, dass die Forschungsanwendung Verbindungs-, Trennungs- und Tastenereignisse zwischen Client und Server mit Zeitstempeln protokollierte. Für maskiertes und sichtbares Live-Tippen wurden Bearbeitungsereignisse fortlaufend an die andere Oberfläche übertragen; die klassische Is-Typing-Bedingung zeigte stattdessen einen allgemeinen Aktivitätsstatus. Der Artikel legt jedoch weder einen vollständigen Trigger-/Timer-Algorithmus der Is-Typing-Anzeige noch die zugrunde liegenden Protokollnachrichten offen.

Die sichtbaren Zustände beziehen sich auf menschliche Tastaturereignisse in einer Messengeranwendung. Sie belegen keine automatisierte Antwortgenerierung, Modellinferenz, Fortschrittsmessung oder interne Aktivität eines KI-/LLM-Systems.

## Übergänge

- **Surface -> Interaction:** Kein Hinweis, eine allgemeine Aktivitätsanzeige, maskierte Zeichen oder sichtbare Zeichen erzeugen unterschiedliche Informationen über Anwesenheit, Fortschritt und Überarbeitung; diese Unterschiede beeinflussen Warten, Turn-Taking, Aufmerksamkeit und wahrgenommene Verletzlichkeit.
- **Interaction -> Operation:** Einzelne Tastenereignisse werden in der Forschungsanwendung geloggt und je nach Bedingung als Status, Maskierungszeichen oder Klartext an die andere Oberfläche übertragen. Das Absenden bleibt ein eigener Schritt.
- **Surface -> Operation:** Die Anzeige „Person X is typing“ kommuniziert allgemeine Aktivität, legt aber weder Zeichenfolge noch verlässlichen Fortschritt offen. Maskiertes und sichtbares Live-Tippen sind enger an einzelne Bearbeitungsereignisse gekoppelt.
- **Operation -> Surface/Interaction:** Übertragene Tastenereignisse werden sofort als `#` oder Klartext sichtbar und können Reaktionen vor dem Senden auslösen. Für den allgemeinen Is-Typing-Status bleiben Auslöser und Ende technisch unterdokumentiert.

## Direkt gestützte Aussagen

| ID | Aussage in eigenen Worten | Belegstelle | Evidenzart | Ebene | Einschränkung |
| --- | --- | --- | --- | --- | --- |
| IFT23-P1 | Der Artikel unterscheidet keinen Indikator, „Person X is typing“, maskiertes Live-Tippen und sichtbares Live-Tippen als vier experimentelle Zustände. | S. 3, Abb. 1–3; Abschn. 3 | dokumentierter Versuchsaufbau/Interfaceabbildung | S | Die Drei-Punkte-Animation wird nicht als eigene Bedingung getestet. |
| IFT23-P2 | Maskiertes Tippen überträgt Zeichenaktivität, Tempo, Länge und Bearbeitung als `#`, während Live-Tippen tatsächliche Zeichen, Pausen und Korrekturen vor dem Senden zeigt. | S. 3, Abschn. 3; Abb. 2–3 | dokumentierte Interfacefunktion | S / I / O | Forschungsprototyp, keine Aussage über verbreitete Produktimplementierungen. |
| IFT23-P3 | Die Remote-Studie verwendete ein gegengewichtiges Within-Subjects-Design mit 24 häufigen Messenger-Nutzenden, vier kooperativen Aufgaben und wechselnden Partner:innen. | S. 4–5, Abschn. 4–4.3; Tab. 1–2 | Methodendokumentation | I | Alter 19–35, sechs Frauen; künstliche zeitlich begrenzte Aufgaben. |
| IFT23-P4 | Die Anwendung protokollierte 43 Chats einschließlich Verbindungs-, Trennungs- und Tastenereignissen mit UNIX-Zeitstempeln; fünf Chats fehlten. | S. 5, Abschn. 4.4 | technische Methodendokumentation | O | Kein vollständiger Protokoll- oder Triggeralgorithmus veröffentlicht. |
| IFT23-P5 | Für Live-Tippen berichtet die Studie einen niedrigeren gesamten NASA-TLX-Wert als für keinen Indikator. | S. 6, Abschn. 5.1; Abb. 6; Tab. 3 | quantitatives Studienergebnis | I | Einzelmittelwerte und Prozentangaben im Fließtext sind intern widersprüchlich; nur der Gesamtvergleich und die konsistente Richtung verwenden. |
| IFT23-P6 | Zwischen den vier Bedingungen wurden keine signifikanten Unterschiede in der Zahl der Nachrichten oder Wörter gefunden. | S. 6–7, Abschn. 5.1; Tab. 4–5 | quantitatives Studienergebnis | I | Kleine, aufgabenbezogene Stichprobe; Varianzen unterscheiden sich. |
| IFT23-P7 | Sichtbare Aktivität wurde qualitativ mit Beteiligung, Validierung und natürlicherem Turn-Taking verbunden, konnte aber auch Überwachung, Verletzlichkeit und eingeschränkte Selbstdarstellung erzeugen. | S. 7–10, Abschn. 5.2–6.2 | qualitative Interviewbefunde | I | Kontextsensitive, teils widersprüchliche Reaktionen; keine allgemeine Präferenzregel. |
| IFT23-P8 | Nur zehn der 24 Teilnehmenden wollten Live-Tippen im persönlichen Alltag verwenden, obwohl es für die kooperative Aufgabe häufig als effektiv bewertet wurde. | S. 8–9, Abschn. 5.3.1–5.3.2 | Befragungs-/Interviewbefund | I | Reflexive Einschätzung nach dem Experiment, keine Feldnutzung. |
| IFT23-P9 | Die Autor:innen nennen künstliche Interfacebedingungen, Ausfälle, unkontrollierte Remote-Faktoren und eine überwiegend männliche Stichprobe als Grenzen. | S. 3 und 10–11, Abschn. 3 und 6.3 | ausdrückliche Quellenbegrenzung | S / I | Keine Langzeit-, Alltags- oder KI-Chat-Evaluation. |
| IFT23-P10 | Drei bewegte Punkte werden nur im Forschungsüberblick als mögliche Form eines Is-Typing-Indikators beschrieben; der Artikel verweist zugleich darauf, dass solche Anzeigen den Fortschritt einer Nachricht nicht zuverlässig abbilden. | S. 2–3, Abschn. 2.4 | sekundäre Literaturzusammenfassung | S / O | Kein eigener Drei-Punkte-Test; die Fortschrittsaussage stützt sich auf zitierte Vorarbeit. |

## Verhältnis zur Grundstruktur

Die Quelle ist ein eng begrenzter empirischer Kontrast für die Frage, wie viel noch nicht abgesendete Aktivität eine Oberfläche sichtbar macht und wie dies Warten, Turn-Taking, Belastung und Selbstpräsentation verändert. Besonders wichtig ist die Staffelung von keiner Information über einen allgemeinen Status bis zur Anzeige einzelner Bearbeitungsereignisse. Für KI-/LLM-Interfaces liefert sie ausschließlich Vergleichsbegriffe und Wahrnehmungsrisiken, keine operative Evidenz.

## Grenzen und Gegenprüfung

Der Gegenstand ist zwischenmenschliche Messenger-Kommunikation und damit außerhalb des eigentlichen Thesisgegenstands; zulässig ist nur die konkrete Interfacekonvention. Die verbreitete Drei-Punkte-Animation wurde nicht separat getestet. Die Studie nutzt eine künstliche Chatoberfläche, kooperative Survival-Aufgaben, eine kleine überwiegend männliche Stichprobe und kurze Sitzungen. Die qualitative Codierung wird beschrieben, aber kein formales Interrater-Maß berichtet. Statistische Einzelwerte auf Seite 6 widersprechen teilweise Tabelle 3. RFC 3994 kann den technischen Composition-Status gegenprüfen; für KI-/LLM-Statusanzeigen bleiben datierte Produkt- und Entwicklerquellen erforderlich.

## Entscheidung

**Stützquelle mit enger Scope-Grenze.** Funktion: empirischer Messenger-Kontrast für sichtbare Kompositionsaktivität, Warten, Turn-Taking und den Konflikt zwischen Rückversicherung und Exposition. Nicht verwenden als Beleg für LLM-Generierung, interne Modellaktivität oder eine allgemeine Wirkung der Drei-Punkte-Animation. Verbleibende Lücke: direkte Evidenz zu sichtbaren Generating-, Streaming-, Stop- und Fehlerzuständen in konkreten Mensch-KI-Systemen.
