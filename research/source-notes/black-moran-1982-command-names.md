# Black und Moran 1982 - Learning and Remembering Command Names

## Status und Zugriff

- Bibliografie: John B. Black und Thomas P. Moran, „Learning and Remembering Command Names“, in *Proceedings of the 1982 Conference on Human Factors in Computing Systems* (ACM, 1982), S. 8–11. DOI: `10.1145/800049.801745`.
- Citation Key: `blackLearningRememberingCommand1982`
- Quellentyp: kontrolliertes HCI-Experiment mit methodischer Diskussion
- Gelesene Fassung: `research/source-pdfs/black-moran-1982-learning-remembering-command-names.pdf`
- Zugriffstiefe: vollständiger vierseitiger Artikel einschließlich Abbildung; alle PDF-Seiten visuell geprüft
- Gelesene Seiten: Druckseiten 8–11
- Noch erforderlich: Die Autoren berichten in diesem Kurzbeitrag keine vollständige statistische Analyse; spätere Modellarbeiten wären für eine präzisere Vorhersage von Benennungsqualität zu prüfen.

## Gegenstand, Methode und Evidenzart

Die Quelle untersucht ausschließlich, wie Namen von Texteditorbefehlen gelernt und erinnert werden. Nach einer Vorstudie vergleichen Black und Moran in einem Experiment sieben Benennungsbedingungen. Insgesamt 84 Personen werden auf sieben Gruppen mit je zwölf Personen verteilt. Jede Gruppe lernt acht Namen für acht Textoperationen anhand von Vorher-Nachher-Paaren. Gemessen werden Lernversuche bis 80 Prozent Korrektheit, freier Abruf nach einer Woche und die spätere Zuordnung der Namen zu Operationen.

## Surface

Die Studie untersucht keine reale Command-Line-Oberfläche und kein sichtbares Eingabefeld. Das Material besteht aus Karten mit Vorher-Nachher-Textpaaren und dem passenden Namen auf der Rückseite. Aussagen zur visuellen Gestalt, zum Prompt, zur Position oder zur tatsächlichen Eingabe eines Befehls sind daher nicht gestützt.

## Interaction

Die zentrale Interaktionsarbeit ist das Lernen, Erinnern und operationale Zuordnen eines Namens. Eine erste Gegenüberstellung ergab keinen Erinnerungsunterschied zwischen spontan von Versuchspersonen erzeugten Verben und üblichen Designerbezeichnungen. Das Hauptexperiment zeigt, dass nicht einfach „natürliche“ oder häufige Wörter besser sind. Entscheidend ist unter den untersuchten Bedingungen vor allem, wie trennscharf ein Wort innerhalb des gesamten Befehlssets auf eine bestimmte Operation verweist.

## Operation

Die technischen Textoperationen dienen als Referenten der Namen: Einfügen, Löschen, Ersetzen, Verschieben, Vertauschen, Großschreiben, Löschen ohne Lückenschluss und Leerzeichen einfügen. Ein Parser, eine Syntax, Argumente oder tatsächliche Ausführung werden nicht untersucht. Die Quelle belegt daher die kognitive Zuordnung Name -> Operation, nicht die technische Verarbeitung einer eingegebenen Command-Zeile.

## Übergänge

- **Surface -> Interaction:** Nicht untersucht; die Karten sind Versuchsmaterial und keine Systemoberfläche.
- **Interaction -> Operation:** Ein Name muss innerhalb eines Sets eindeutig genug auf die beabsichtigte Textoperation verweisen. Die Studie misst diese Zuordnung, aber nicht die spätere technische Ausführung.
- **Surface -> Operation:** Nicht untersucht.

## Direkt gestützte Aussagen

| ID | Aussage in eigenen Worten | Belegstelle | Evidenzart | Ebene | Einschränkung |
| --- | --- | --- | --- | --- | --- |
| BM82-P1 | In der Vorstudie unterschieden sich spontan erzeugte und übliche Designer-Befehlsnamen nicht in der späteren Erinnerungsleistung. | S. 8–9 | experimentelles Ergebnis | I | Kleiner Vorvergleich; genaue Stichprobengröße wird im Kurzbeitrag nicht genannt. |
| BM82-P2 | Das Hauptexperiment verglich sieben Benennungsbedingungen mit insgesamt 84 Personen und acht Texteditoroperationen. | S. 9 | Versuchsdesign | I | Papierbasierte Aufgabe, kein reales Softwaresystem. |
| BM82-P3 | Seltene, trennscharfe Wörter erzielten in Lernen, freiem Abruf und Zuordnung die beste Leistung der untersuchten Bedingungen. | S. 10; Abb. 1 S. 11 | experimentelles Ergebnis | I | Der Beitrag enthält keine vollständige statistische Analyse. |
| BM82-P4 | Trennscharfe Wörter waren beim Lernen und bei der späteren Zuordnung besser als nicht trennscharfe Wörter, nicht jedoch beim freien Abruf ohne sichtbare Referenzoperation. | S. 10 | experimentelles Ergebnis | I | Effekt hängt von der konkreten Aufgabe ab. |
| BM82-P5 | Wörter waren nicht grundsätzlich besser: Nicht trennscharfe Wörter konnten bei Lernen und Zuordnung schlechter abschneiden als Nichtwörter. | S. 10 | experimentelles Ergebnis | I | Gilt für die getesteten Namen und Operationen. |
| BM82-P6 | Die Autoren fordern repräsentative Aufgaben und eine Prüfung der Ergebnisse in realistischeren Nutzungssituationen. | S. 10 | methodische Schlussfolgerung | I | Die Studie selbst bleibt papierbasiert und klassenraumartig. |

## Verhältnis zur Grundstruktur

Die Quelle liefert präzise Evidenz für einen Teil der Interaction-Ebene: Die Übersetzung einer beabsichtigten Operation in ein erinnerbares und unterscheidbares Befehlswort. Sie begrenzt die verbreitete Annahme, alltagssprachlichere oder häufigere Bezeichnungen seien automatisch leichter.

## Grenzen und Gegenprüfung

Die Untersuchung behandelt weder Befehlsargumente noch Syntax, Parser, Ausführung, Fehlermeldungen oder visuelle Command-Line-Gestaltung. Für die Operationsebene ist eine Primärquelle zur UNIX-Shell nötig; für realistische Nutzung eine Studie in einem tatsächlichen Command-Interface.

## Entscheidung

**Kernquelle.** Funktion: empirische Grundlage für Vokabularlernen und die semantische Trennschärfe von Befehlsnamen. Verbleibende Lücke: technische Command-Verarbeitung und Nutzung im realen Interface.
