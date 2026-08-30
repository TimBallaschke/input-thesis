# Weizenbaum 1966 - ELIZA

## Status und Zugriff

- Bibliografie: Joseph Weizenbaum, „ELIZA—A Computer Program for the Study of Natural Language Communication Between Man and Machine“, *Communications of the ACM* 9, Nr. 1 (1966), S. 36–45. DOI: `10.1145/365153.365168`.
- Citation Key: `weizenbaumELIZAComputerProgram1966`
- Quellentyp: historische technische Primärquelle mit programmtechnischer Beschreibung und psychologischer Diskussion
- Gelesene Fassung: `research/source-pdfs/weizenbaum-1966-eliza.pdf`
- Zugriffstiefe: vollständiger zehnseitiger Artikel einschließlich Abbildungen und Appendix; alle PDF-Seiten visuell geprüft
- Gelesene Seiten: Druckseiten 36–45
- Noch erforderlich: Für Aussagen über spätere ELIZA-Rezeption, heutige Chatbots oder Sprachmodelle sind eigenständige Quellen nötig.

## Gegenstand, Methode und Evidenzart

Weizenbaum beschreibt Aufbau und Ablauf des auf dem MIT-MAC-Time-Sharing-System implementierten Programms ELIZA. Die Quelle ist keine Nutzerstudie. Ihre technische Evidenz besteht aus der Programmbeschreibung, einem Dialogbeispiel, zwei Ablauf-/Datenstrukturabbildungen und einem vollständigen Beispielskript. Die psychologische Diskussion formuliert Beobachtungen und Hypothesen über Glaubwürdigkeit und zugeschriebenes Verstehen, aber keine kontrolliert gemessenen Nutzungseffekte.

## Surface

Die Interaktion erfolgt über eine entfernte Schreibmaschine beziehungsweise ein Fernschreibterminal. Person und Computer schreiben auf demselben Gerät; im publizierten Dialog sind die Systemantworten typografisch durch Großbuchstaben unterscheidbar. Die Quelle untersucht weder ein grafisches Texteingabefeld noch dessen Größe, Position, Label oder visuelles Styling. Sie belegt daher eine textuelle Dialogoberfläche, nicht die Form moderner Chat- oder Promptfelder.

## Interaction

Die Person gibt einen oder mehrere natürlichsprachliche Sätze mit gewöhnlicher Zeichensetzung und Satzstruktur ein. Ein doppelter Wagenrücklauf beendet die Eingabe und übergibt die Kontrolle an ELIZA; nach der ausgegebenen Antwort erhält die Person sie zurück. Das Fragezeichen ist wegen einer Belegung im MAC-System nicht verwendbar. Die Interaktion ist iterativ, erscheint sprachlich offen und wird durch das jeweilige Skript tatsächlich stark begrenzt. Weizenbaum zufolge trägt die Person zur Plausibilität des Gesprächs bei, indem sie knappe Antworten im Licht eigener Annahmen deutet und rationalisiert.

## Operation

ELIZA durchsucht die Eingabe von links nach rechts nach Schlüsselwörtern, priorisiert gefundene Schlüsselwörter, wählt zugehörige Zerlegungsregeln und erzeugt mit Wiederzusammensetzungsregeln eine Antwort. Substitutionen können Eingaben transformieren; `NEWKEY` wechselt zu einem anderen Schlüsselwort. Für Eingaben ohne verwertbares Schlüsselwort existieren allgemeine `NONE`-Antworten und ein `MEMORY`-Mechanismus, der ausgewählte transformierte Eingaben für eine spätere Antwort vorhält. Das Skript ist als veränderbarer Datenbestand vom Programm getrennt. Weizenbaum grenzt diese syntaktische Transformation ausdrücklich von allgemeinem Sprachverstehen ab.

## Übergänge

- **Surface -> Interaction:** Das gemeinsame Schreibgerät und die Folge aus Eingabe und Antwort rahmen die Bedienung als Gespräch. Die scheinbar freie Sprache verdeckt die Beschränkung auf das Vokabular und die Regeln des geladenen Skripts.
- **Interaction -> Operation:** Erst der doppelte Wagenrücklauf übergibt die Eingabe an das Programm. Danach wird der geschriebene Satz nicht als Bedeutungseinheit „verstanden“, sondern als Material für Schlüsselwortsuche und regelbasierte Transformation verarbeitet.
- **Surface -> Operation:** Auf der Oberfläche erscheint eine Antwort eines Gesprächspartners. Die operative Regelwahl, Rankings, Fallbacks und gespeicherten Fragmente bleiben unsichtbar.

## Direkt gestützte Aussagen

| ID | Aussage in eigenen Worten | Belegstelle | Evidenzart | Ebene | Einschränkung |
| --- | --- | --- | --- | --- | --- |
| W66-P1 | Die Person beendet ihre Texteingabe mit einem doppelten Wagenrücklauf; danach antwortet ELIZA und gibt die Kontrolle zurück. | S. 36 | technische Beschreibung | I -> O | Gilt für die MAC-/Fernschreiber-Implementierung. |
| W66-P2 | ELIZA erzeugt Antworten über priorisierte Schlüsselwörter sowie zugeordnete Zerlegungs- und Wiederzusammensetzungsregeln. | S. 36–40; Abb. 1–2 | technische Beschreibung | O | Kein Modell heutiger statistischer Sprachverarbeitung. |
| W66-P3 | Skripte sind vom Programm getrennte Daten und können während des Betriebs editiert, gespeichert und neu geladen werden. | S. 37, 42 | technische Beschreibung | O | Belegt die beschriebene ELIZA-Architektur. |
| W66-P4 | `NONE` und `MEMORY` ermöglichen Reaktionen, wenn keine passende aktuelle Schlüsselworttransformation greift. | S. 41–42 | technische Beschreibung | O | `MEMORY` ist selektiv und regelbasiert, kein allgemeines Gesprächsgedächtnis. |
| W66-P5 | Die Plausibilität des Dialogs hängt auch davon ab, dass die Person Systemantworten anhand eigener Annahmen interpretiert. | S. 42–43 | theoretische/psychologische Diskussion | I | Keine kontrollierte Nutzerstudie und kein quantifizierter Effekt. |
| W66-P6 | Weizenbaum beschreibt ELIZA als syntaktisch arbeitenden Übersetzungsprozessor und markiert Grenzen des zugeschriebenen Verstehens. | S. 43 | technische Einordnung | O | Darf nicht als allgemeine Aussage über alle dialogischen Systeme verwendet werden. |

## Verhältnis zur Grundstruktur

Die Quelle liefert eine historische Baseline für dialogische Texteingabe und zeigt besonders klar die Differenz zwischen sichtbarer Gesprächsform, iterativer Texteingabe und regelbasierter Operation. Sie stützt keinen linearen Entwicklungspfad von ELIZA zu heutigen LLMs.

## Grenzen und Gegenprüfung

Die Quelle enthält keine systematische Surface-Analyse, keine kontrollierte Nutzerstudie und keine Evidenz zu grafischen Chatfeldern. Für heutige Promptinterfaces sind aktuelle Interaktionsstudien und technische Modellquellen erforderlich. Für die Geschichte dialogischer Systeme sollte zusätzlich eine Quelle zur Rezeption und Weiterentwicklung von ELIZA herangezogen werden.

## Entscheidung

**Kernquelle.** Funktion: historische Baseline für dialogische Texteingabe und für die Trennung von wahrgenommenem Gespräch und dokumentierter Operation. Verbleibende Lücke: belastbarer Übergang von regelbasiertem Dialog zu heutigen LLM-basierten Interfaces.
