# MacKenzie und Soukoreff 2002 - Text Entry for Mobile Computing

## Status und Zugriff

- Bibliografie: I. Scott MacKenzie und R. William Soukoreff, „Text Entry for Mobile Computing: Models and Methods, Theory and Practice“, *Human–Computer Interaction* 17, Nr. 2–3 (2002), S. 147–198. DOI: `10.1080/07370024.2002.9667313`.
- Citation Key: `mackenzieTextEntryMobile2002`
- Quellentyp: methodischer Review, Modellierungsbeitrag und Survey mobiler Texteingabetechniken
- Gelesene Fassung: `research/source-pdfs/mackenzie-soukoreff-2002-text-entry-mobile.pdf`, offizielle Autorenfassung unter `https://www.yorku.ca/mack/hci3.html`
- Zugriffstiefe: vollständiger Artikel einschließlich Abbildungen, Tabellen und Literatur; Text extrahiert und zentrale Seiten visuell gegengeprüft
- Gelesene Seiten: S. 147–198
- Noch erforderlich: Für heutige Smartphones, aktuelle Sprachmodelle, freie Textkomposition und konkrete Produktinterfaces werden neuere Primärstudien benötigt.

## Gegenstand, Methode und Evidenzart

Der Artikel ordnet mobile Texteingabe historisch ein, diskutiert Evaluationsmethoden, beschreibt Bewegungs- und Sprachmodellierung und überblickt tastatur-, stift- und vorhersagebasierte Verfahren. Er ist überwiegend Review und methodische Argumentation, keine einzelne kontrollierte Studie. Eine kleine im Artikel neu berichtete Keystroke-Beobachtung protokollierte über zwei Monate mehr als 400.000 Tastenanschläge von vier Desktopnutzer:innen, um zu zeigen, dass Korpora den Bearbeitungsprozess unzureichend abbilden.

## Surface

Die Quelle unterscheidet physische und weiche Tastaturen, Stifteingabe, Handschrifterkennung, Telefon-Keypads und prädiktive Interfaces. Konkrete Produktoberflächen werden beschrieben und abgebildet, aber nicht als einheitlicher visueller Korpus untersucht. Relevant ist vor allem die Zahl der Aufmerksamkeitsorte: Quelltext, Eingabefläche und Ergebnisanzeige können gleichzeitig beobachtet werden müssen. Bei einer Softkeyboard-Eingabe ist die Tastatur nicht „eyes free“ bedienbar.

## Interaction

Textkopieren und Textschaffen werden methodisch getrennt. Freie Komposition ist alltagsnäher, vermischt Eingabeleistung aber mit Nachdenken, Erinnern, Rechtschreibung und Inhaltserzeugung. Kopieraufgaben kontrollieren Zieltext und Fehler, erhöhen jedoch oft die Anzahl der Aufmerksamkeitsorte. Ebenso müssen Anfänger- und Expertenleistung, Lernverlauf, Geschwindigkeit, Genauigkeit, Korrekturaufwand und subjektive Einschätzung getrennt betrachtet werden. Die Autor:innen warnen ausdrücklich davor, nur Geschwindigkeit oder nur Genauigkeit zu messen.

## Operation

Tastaturbasierte Eingabe erzeugt direkt maschinenlesbare Zeichen; nicht erkannte Handschrift bleibt zunächst digitale Tinte und ist schwieriger zu indexieren oder zu durchsuchen. Sprachvorhersage nutzt Häufigkeiten aus Korpora, um Zeichen, Wörter oder Phrasen vorzuschlagen. Ein fertiges Korpus bildet aber weder den tatsächlichen Bearbeitungsverlauf noch Shift-, Lösch-, Cursor- und andere Eingabehandlungen vollständig ab. Die Quelle fordert deshalb, nicht nur „Sprache“, sondern die „Sprache der Interaktion“ zu modellieren.

## Übergänge

- **Surface -> Interaction:** Die räumliche Trennung von Vorlage, Eingabefläche und Ergebnis erzeugt zusätzliche Aufmerksamkeitswechsel.
- **Interaction -> Operation:** Tippen, Korrigieren, Umschalten und Auswählen werden technisch zu Zeichen- und Bearbeitungsaktionen; ein fertiger Text verdeckt diesen Herstellungsweg.
- **Surface -> Operation:** Dieselbe sichtbare Textausgabe kann aus Tastendruck, Handschrifterkennung oder Vorhersage entstehen, obwohl diese Verfahren operativ verschieden sind.
- **Operation -> Surface/Interaction:** Vorhersagen reduzieren potenziell Eingabeaktionen, erzeugen aber zusätzliche Sicht- und Auswahlzustände; der Review liefert hierfür Grundbegriffe, keine einheitliche Nettoeffektmessung.

## Direkt gestützte Aussagen

| ID | Aussage in eigenen Worten | Belegstelle | Evidenzart | Ebene | Einschränkung |
| --- | --- | --- | --- | --- | --- |
| MS02-P1 | Der Artikel behandelt Evaluationsmethoden, Bewegungs- und Sprachmodelle sowie tastatur-, stift- und vorhersagebasierte mobile Texteingabe. | Abstract; Inhaltsübersicht, S. 147–148 | Reviewrahmen | S / I / O | Stand von 2002. |
| MS02-P2 | Maschinenlesbare Zeichen lassen sich direkt indexieren, suchen und weiterverarbeiten; digitale Tinte benötigt dafür Erkennung oder andere spezielle Verfahren. | Abschn. 1.2, S. 152–153 | technische Einordnung | O | Vereinfachte historische Gegenüberstellung. |
| MS02-P3 | Die Zahl der Aufmerksamkeitsorte steigt, wenn Vorlage, Eingabefläche und Ergebnis separat überwacht werden müssen. | Abschn. 2.2, S. 154–156 | methodische Analyse | S / I | Beispielhaft für Kopieraufgaben; keine universelle Messzahl. |
| MS02-P4 | Textschaffen ist alltagsnäher, vermischt Eingabe aber mit Formulieren und Erinnern; Textkopieren kontrolliert Zieltext und Fehler, kann jedoch zusätzliche Aufmerksamkeit verlangen. | Abschn. 2.2, S. 154–156 | methodische Analyse | I | Gilt für Evaluationsdesign, nicht als Werturteil über reale Nutzung. |
| MS02-P5 | Anfänger-, Experten- und Lernleistung müssen getrennt untersucht werden, weil unmittelbare Nutzbarkeit und langfristiges Potenzial auseinanderfallen können. | Abschn. 2.3, S. 156–157 | methodische Argumentation | I | Reviewaussage, kein einzelner Effekt. |
| MS02-P6 | Geschwindigkeit und Genauigkeit bilden einen Trade-off; die Messung nur einer Seite kann die Bewertung eines Eingabeverfahrens verzerren. | Abschn. 2.5–2.6, S. 158–160 | methodische Festlegung | I | Konkrete Kennzahlen bleiben auf jeweilige Studien begrenzt. |
| MS02-P7 | Sprachvorhersage leitet Vorschläge aus statistischen Eigenschaften eines Korpus ab, dessen Passung zu Domäne, Zeichenbestand und Nutzertext geprüft werden muss. | Abschn. 3.2, S. 163–164 | technische/methodische Einordnung | I / O | Keine Beschreibung heutiger neuronaler Sprachmodelle. |
| MS02-P8 | Ein fertiges Textkorpus enthält keine Information über Löschung, Navigation, Umschalten und andere Bearbeitungsschritte; der Eingabeprozess ist daher reicher als lineare Zeicheneingabe. | Abschn. 3.2, S. 164–165; Abb. 4 | Argument plus Keystroke-Beobachtung | I / O | Die neu berichtete Beobachtung umfasst nur vier Desktopnutzer:innen. |
| MS02-P9 | In der protokollierten Vier-Personen-Stichprobe gehörten Leerzeichen, Backspace, Cursor- und Shift-Tasten zu den häufigsten Aktionen. | Abb. 4, S. 165 | deskriptive Keystroke-Daten | I | Desktopnutzung über zwei Monate, nicht mobile Nutzung. |
| MS02-P10 | Der Review kritisiert zahlreiche damalige Eingabeverfahren, weil empirisch gemessene Geschwindigkeits- und Genauigkeitsdaten fehlen. | Abschn. 5, S. 192–193 | Reviewschluss | I | Aussage über damaligen Forschungsstand. |

## Verhältnis zur Grundstruktur

Die Quelle liefert die methodische Basis für den Interaction-Teil: physische Handlung, Aufmerksamkeit, Lernen, Fehler, Korrektur und Vorhersage dürfen nicht auf eine einzige Effizienzkennzahl reduziert werden. Operativ ist besonders wichtig, dass der fertige sichtbare Text seinen Erstellungs- und Bearbeitungsweg nicht enthält.

## Grenzen und Gegenprüfung

Der Artikel ist ein historischer Review mit Schwerpunkt auf englischer mobiler Eingabe um 2002. Viele Produkt- und Leistungsangaben stammen aus referierten Drittstudien und sind ohne deren Neulektüre nur Sekundärevidenz. Oulasvirta et al. 2013 liefern einen engeren kontrollierten Fall; Quinn und Zhai 2016 prüfen Vorschlagskosten direkt; van Esch et al. 2019 begrenzen die Anglophonie.

## Entscheidung

**Kernquelle.** Funktion: methodische und begriffliche Grundlage für Text Entry als körperliche, aufmerksame, fehler- und korrekturbehaftete Interaktion sowie für die Trennung zwischen fertigem Text und operativem Eingabeverlauf.
