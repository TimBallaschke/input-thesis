# Quinn und Zhai 2016 - Text Entry Suggestion Interaction

## Status und Zugriff

- Bibliografie: Philip Quinn und Shumin Zhai, „A Cost-Benefit Study of Text Entry Suggestion Interaction“, in *Proceedings of the 2016 CHI Conference on Human Factors in Computing Systems* (ACM, 2016), S. 83–88. DOI: `10.1145/2858036.2858305`.
- Citation Key: `quinnCostBenefitStudy2016`
- Quellentyp: kontrolliertes Within-Subjects-Experiment zu Wortvervollständigung und Interface-Assertiveness
- Gelesene Fassung: vollständiger, von Shumin Zhai hochgeladener Artikeltext unter `https://www.researchgate.net/publication/301932926_A_Cost-Benefit_Study_of_Text_Entry_Suggestion_Interaction`; Metadaten und Abstract gegengeprüft über `https://research.google/pubs/a-costbenefit-study-of-text-entry-suggestion-interaction/`
- Zugriffstiefe: vollständiger Artikeltext einschließlich Abbildungen, Tabellen und Literatur
- Gelesene Seiten: S. 83–88
- Noch erforderlich: freie Komposition, Fehlerkorrektur, heutige Smartphone-Tastaturen, Langzeitlernen und generative Schreibassistenz benötigen eigene Studien.

## Gegenstand, Methode und Evidenzart

Siebzehn Personen, davon fünf Frauen, kopierten auf einem Apple iPod Touch unter iOS 5.1.1 kurze englische Phrasen. Das experimentelle Keyboard zeigte bis zu drei Wortvervollständigungen direkt über der Tastatur. In einem Within-Subjects-Design wurden drei Bedingungen verglichen: immer sichtbare Vorschläge („extraverted“), durch einen Wahrscheinlichkeitsschwellenwert gesteuerte Vorschläge („ambiverted“) und keine Vorschläge („introverted“). Die Reihenfolge war gegenbalanciert; pro Bedingung wurden 18 Phrasen eingegeben, die ersten drei verworfen und anschließend NASA-TLX erhoben. Falsche Taps wurden ohne Feedback ignoriert, damit ausschließlich die Interaktion mit Wortvervollständigungen untersucht wurde.

## Surface

Bis zu drei Vorschläge erschienen in einer Leiste unmittelbar über der Bildschirmtastatur. In der extravertierten Bedingung wurden sie nach jeder Eingabechance aktualisiert; in der ambivertierten nur bei einem Score über 0,1, andernfalls konnten bereits sichtbare Vorschläge stehen bleiben. Zwischen Wörtern wurde die Leiste geleert. Die Quelle identifiziert Ort, Anzahl, Standardverhalten und Stabilität als eigenständige Gestaltungsvariablen, die Wahrnehmung und Auswahlkosten verändern.

## Interaction

Ein Vorschlag verlangt drei Schritte: sein Erscheinen bemerken, Optionen bewerten und gegebenenfalls handeln. Mehr sichtbare Vorschläge reduzierten im Experiment die Zahl der Taps, verlangsamten aber die durchschnittliche Texteingabe. Ohne Vorschläge war die Eingabe am schnellsten, wurde jedoch als körperlich anstrengender und aufwendiger bewertet. Weniger motorische Aktionen bedeuteten damit in dieser Aufgabe weder kürzere Zeit noch automatisch bessere subjektive Erfahrung.

## Operation

Nach jedem akzeptierten Buchstabentap wurden mit dem eingegebenen Präfix übereinstimmende Wörter aus einem offenen Android-Wörterbuch bewertet. In der extravertierten Bedingung beziehungsweise oberhalb des Schwellenwerts wurden die drei höchsten Scores gezeigt. Das Antippen eines Vorschlags fügte die dadurch vervollständigten Zeichen ein. Die Quelle dokumentiert diese experimentelle Vorschlagslogik, nicht heutige Produktmodelle oder neuronale Generierung.

## Übergänge

- **Surface -> Interaction:** Ort, Zahl, Aktualisierung und Stabilität der Vorschläge bestimmen, wann Aufmerksamkeit vom Tippen zum Prüfen und Auswählen wechselt.
- **Interaction -> Operation:** Ein Tap auf einen Vorschlag ersetzt mehrere einzelne Zeichentaps und fügt die restlichen Zeichen operativ ein.
- **Surface -> Operation:** Der Schwellenwert steuert, ob Vorhersagen überhaupt sichtbar werden; seine Berechnung bleibt in der Leiste selbst unsichtbar.
- **Operation -> Surface/Interaction:** Jede Aktualisierung kann neue Optionen zeigen und eine Entscheidung anstoßen; selbst das bloße Antizipieren einer Entscheidung kann laut Diskussion dauerhafte Kosten erzeugen.

## Direkt gestützte Aussagen

| ID | Aussage in eigenen Worten | Belegstelle | Evidenzart | Ebene | Einschränkung |
| --- | --- | --- | --- | --- | --- |
| QZ16-P1 | Die Studie verglich bei 17 mobilen Keyboardnutzer:innen immer sichtbare, schwellenwertgesteuerte und keine Wortvervollständigungen in einem gegenbalancierten Within-Subjects-Design. | S. 84 | Studiendesign | I | Kleine Stichprobe und historisches iPod-/iOS-System. |
| QZ16-P2 | Bis zu drei Vorschläge erschienen über der Tastatur; falsche Taps wurden ohne Feedback ignoriert, sodass die Eingabe künstlich fehlerfrei blieb. | S. 84; Abb. 1 | Interface- und Versuchsdesign | S / I | Keine reale Fehlerkorrektur oder freie Texteingabe. |
| QZ16-P3 | Die schwellenwertgesteuerte Bedingung zeigte neue Vorschläge nur oberhalb eines Scores von 0,1; die immer sichtbare Bedingung aktualisierte nach jeder Gelegenheit. | S. 84 | Implementierungsbeschreibung | S / O | Experimentelle Scorefunktion, nicht heutige Produktlogik. |
| QZ16-P4 | Ohne Vorschläge war die Eingabe mit 3,09 Zeichen pro Sekunde schneller als mit schwellenwertgesteuerten 2,81 oder immer sichtbaren 2,66 Zeichen pro Sekunde. | S. 84–85; Abb. 2a | gemessene Leistungsdaten | I | Kopieraufgabe mit erzwungen korrekter Eingabe. |
| QZ16-P5 | Immer sichtbare Vorschläge reduzierten die Taps pro Zeichen auf 0,93 gegenüber 0,96 beziehungsweise 1,0, obwohl sie die Zeitperformance verschlechterten. | S. 84–85; Abb. 2a–b | gemessene Leistungsdaten | I | Kleine absolute Einsparung in dieser Konfiguration. |
| QZ16-P6 | Potenzielle und realisierte Tapeinsparung lagen bei immer sichtbaren Vorschlägen höher als bei der Schwellenwertbedingung; realisiert wurden 9,44 gegenüber 4,66 Prozent. | S. 84–85; Abb. 2d | gemessene Nutzungsdaten | I / O | Theoretische und realisierte Einsparung sind getrennte Größen. |
| QZ16-P7 | Keine Vorschläge wurden im NASA-TLX als körperlich anstrengender und aufwendiger bewertet; Kommentare zeigten eine starke Abneigung gegen diese Bedingung. | S. 84–86; Tabelle 1 | subjektive Messung und Kommentare | I | Andere TLX-Dimensionen unterschieden sich nicht entsprechend. |
| QZ16-P8 | Der Artikel trennt Ort, Anzahl, Standardverhalten und Stabilität der Vorschläge als Faktoren, die Aufmerksamkeit, Bewertung und Interaktion beeinflussen. | S. 83–84 | Designanalyse | S / I | Nicht jeder Faktor wurde experimentell variiert. |
| QZ16-P9 | Die Autor:innen begrenzen die Ergebnisse auf Wortvervollständigung und Textkopieren; freie Komposition, Unsicherheit, Rechtschreibung und Fehlerkorrektur können die Bilanz verändern. | S. 85–86 | ausdrückliche Quellenbegrenzung | I | Keine Aussage über generative Schreibassistenz oder LLM-Vorschläge. |

## Verhältnis zur Grundstruktur

Die Quelle schließt die bisherige Lücke zu Auswahl- und Bewertungskosten von Vorschlägen. Sie liefert einen direkten Gegenbeleg gegen die Gleichsetzung von weniger Taps mit weniger Gesamtaufwand und zeigt, dass objektive Geschwindigkeit und subjektiv empfundene Anstrengung auseinanderfallen können.

## Grenzen und Gegenprüfung

Die Aufgabe war das Kopieren kurzer, kleingeschriebener und interpunktionsfreier Phrasen; falsche Taps wurden ignoriert. Das System testete nur Wortvervollständigung auf einem historischen iPod Touch. MacKenzie und Soukoreff 2002 erklären die methodische Differenz zwischen Kopie und Komposition; aktuelle generative Vorschläge müssen gesondert untersucht werden.

## Entscheidung

**Kernquelle.** Funktion: direkte experimentelle Evidenz für den Trade-off zwischen motorischer Einsparung, visueller/kognitiver Bewertung, Zeitperformance und subjektiver Präferenz bei Texteingabevorschlägen.
