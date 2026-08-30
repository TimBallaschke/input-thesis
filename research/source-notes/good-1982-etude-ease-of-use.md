# Good 1982 - Ease of Use Evaluation of Etude

## Status und Zugriff

- Bibliografie: Michael Good, „An Ease of Use Evaluation of an Integrated Document Processing System“, in *Proceedings of the 1982 Conference on Human Factors in Computing Systems* (ACM, 1982), S. 142–147. DOI: `10.1145/800049.801771`.
- Citation Key: `goodEaseUseEvaluation1982`
- Quellentyp: kontrollierter Vergleich eines interaktiven Dokumentverarbeitungssystems mit einer elektrischen Schreibmaschine
- Gelesene Fassung: vollständige autorisierte HTML-Fassung unter `research/source-texts/good-1982-ease-of-use-evaluation.html` beziehungsweise `https://michaelgood.info/publications/text-editing/an-ease-of-use-evaluation-of-an-integrated-document-processing-system/`
- Zugriffstiefe: vollständiger Artikeltext einschließlich Abbildungen, Tabelle, Literatur und Copyrightvermerk
- Gelesene Seiten/Abschnitte: veröffentlichte S. 142–147; Abschn. 1–5
- Noch erforderlich: Die vollständige technische Beschreibung von Etude und heutige Displayeditoren benötigen separate Quellen.

## Gegenstand, Methode und Evidenzart

Good evaluiert Etude, einen integrierten Editor und Formatierer mit hochauflösender Ganzseitendarstellung. 25 temporäre Bürokräfte wurden rekrutiert; nach drei Ausfällen und dem Ausschluss einer Person blieben 21 Personen ohne Textverarbeitungserfahrung. Jede Person erstellte und bearbeitete einen einseitigen Geschäftsbrief mit Etude und einer IBM Selectric II Korrekturschreibmaschine. Die Reihenfolge war randomisiert und zwischen elf beziehungsweise zehn Personen aufgeteilt. Gemessen wurden Trainings-, Tipp- und Bearbeitungszeit, Zustandsangst mit STAI sowie Einstellung mit einem Semantic Differential. Die Quelle evaluiert ein frühes Prototypsystem in einer eng definierten Büroaufgabe.

## Surface

Etude zeigt Dokumente auf einer hochauflösenden Ganzseitenanzeige während Erstellung, Bearbeitung und Formatierung. Befehle folgen einer englischähnlichen Verb-Modifikator-Objekt-Form. Häufige Begriffe liegen auf beschrifteten Sondertasten; andere können ausgeschrieben, abgekürzt oder über ein Menü gewählt werden. Für jede Taste ist Feedback vorgesehen, Hilfe ist über eine Help-Taste erreichbar. Die Quelle verbindet sichtbaren Dokumentzustand, beschriftete Tasten und sprachliche Commands, ohne die Oberfläche vollständig abzubilden.

## Interaction

Die Studie behandelt Ease of Use als mehrdimensional: Lernen, Benutzung nach dem Lernen, Angst und Einstellung. Neunzig Prozent lernten die untersuchten Etude-Aufgaben in weniger als zwei Stunden und zwanzig Minuten; die mittlere Trainingszeit betrug 1:53:25. Dennoch waren Tippen und Bearbeiten mit Etude signifikant langsamer als mit der Schreibmaschine. Die Zustandsangst unterschied sich nicht systematisch. Positive Bewertung und langsame Leistung können daher in demselben System nebeneinander bestehen.

## Operation

Etude integriert Erstellen, Editieren und Formatieren; Befehle werden durch Sondertasten, Texteingabe, Abkürzungen oder Menüs formuliert. Alle Commands sollen reversibel sein, wobei Undo den unmittelbar vorherigen Vorgang rückgängig macht. Die Quelle beschreibt keine Parserlogik, interne Dokumentrepräsentation, Speicherung oder Dateiverarbeitung. Der Prototyp lief auf einem Timesharing-DECSYSTEM-20 mit Nu-Maschine als Anzeige, was die Antwortzeit und damit die Leistungswerte beeinflusst haben kann.

## Übergänge

- **Surface -> Interaction:** Ganzseitige Anzeige, beschriftete Tasten, englischähnliche Commands, Hilfe und Feedback reduzieren die Einstiegshürde, beseitigen aber weder Training noch Zeitkosten.
- **Interaction -> Operation:** Nutzer:innen lösen Bearbeitungsoperationen über Tasten, Menüs oder sprachliche Befehlsformen aus; Undo macht den unmittelbar vorherigen Vorgang reversibel.
- **Surface -> Operation:** Die Anzeige zeigt das formatierte Dokument während der Arbeit, doch die technische Übersetzung der sichtbaren Commandform bleibt undokumentiert.
- **Operation -> Surface/Interaction:** Jede Taste soll Feedback erzeugen; langsame Prototypantworten werden als mögliche Ursache der schlechteren Zeitwerte diskutiert.

## Direkt gestützte Aussagen

| ID | Aussage in eigenen Worten | Belegstelle | Evidenzart | Ebene | Einschränkung |
| --- | --- | --- | --- | --- | --- |
| GOOD82-P1 | Etude verband eine Ganzseitenanzeige mit englischähnlichen Verb-Modifikator-Objekt-Befehlen, beschrifteten Tasten, Menüauswahl, Hilfe, Feedback und Undo. | Abschn. 2, S. 142–143 | Systembeschreibung | S / I / O | Früher Prototyp; keine vollständige Interface- oder Parserdokumentation. |
| GOOD82-P2 | Ease of Use wurde in Lernen, Benutzung nach dem Lernen, Angst und Einstellung aufgeteilt und jeweils operationalisiert. | Abschn. 3, S. 143–144 | methodische Festlegung | I | Kriterien sind auf Etudes Bürokontext zugeschnitten. |
| GOOD82-P3 | Die auswertbare Stichprobe umfasste 21 Personen ohne Textverarbeitungserfahrung; alle nutzten Etude und Schreibmaschine in randomisierter Reihenfolge. | Abschn. 4, S. 144 | Studiendesign | I | Temporäre Bürokräfte im Boston der frühen 1980er Jahre. |
| GOOD82-P4 | Neunzig Prozent lernten die untersuchten Etude-Aufgaben in weniger als 2:20 Stunden; die mittlere Trainingszeit lag bei 1:53:25. | Abschn. 5; Tabelle 1, S. 145–146 | gemessene Leistungsdaten | I | Lernen umfasst Tutorial und Übungsbriefe für eine enge Aufgabe. |
| GOOD82-P5 | Tippen und Bearbeiten waren mit Etude signifikant langsamer als mit der Schreibmaschine. | Abschn. 5; Tabelle 1, S. 145–146 | kontrollierter Vergleich | I | Der Timesharing-Prototyp hatte langsame Antwortzeiten. |
| GOOD82-P6 | Zwischen Etude und Schreibmaschine wurde kein systematischer Unterschied der Zustandsangst gefunden; Einstellungen gegenüber Etude waren positiv. | Abschn. 5; Tabelle 1, S. 145–146 | Fragebogenmessung | I | Nullergebnis zur Angst vorsichtig interpretieren; Bewertungsunterschied war bei `p = 0.08` nicht konventionell signifikant. |
| GOOD82-P7 | Die Studie zeigt, dass positive Einstellung, relativ kurze Lernzeit und schlechtere Zeitperformance gleichzeitig auftreten können. | Abschn. 5, S. 145–147 | quellennaher Ergebnisvergleich | I | Projektsynthese aus mehreren berichteten Messungen, kein universelles Usabilitygesetz. |

## Verhältnis zur Grundstruktur

Good stärkt den historischen Übergang von Commandform zu sichtbarer Dokumentmanipulation. Besonders wichtig ist die Trennung von Lernbarkeit, Leistung, Angst und Einstellung: Eine Oberfläche kann verständlich und angenehm erscheinen, ohne in der untersuchten Version schneller zu sein. Die Quelle verbindet Surface, Feedback und reversible Bearbeitung, bleibt aber vor Shneidermans späterer systematischer Direct-Manipulation-Typologie.

## Grenzen und Gegenprüfung

Etude war ein Prototyp mit langsamer Timesharing-Infrastruktur, die Aufgabe beschränkte sich auf einen Geschäftsbrief, und es gab keine Expert:innen für den Produktiveinsatz. Die Schreibmaschine ist nur für diese historische Aufgabe eine Baseline. Shneiderman 1983 bietet die konzeptionelle Gegenprüfung der Displayeditor-Merkmale; aktuelle Editoren benötigen eigene Evidenz.

## Entscheidung

**Kernquelle.** Funktion: historische empirische Evidenz dafür, dass sichtbare Dokumentdarstellung, Feedback, Hilfe und Undo Lernbarkeit und Einstellung unterstützen können, während tatsächliche Eingabe- und Bearbeitungsleistung separat gemessen werden muss.
