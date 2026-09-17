# Ritchie 1984 - Entstehung von Unix-Konventionen

## Status und Zugriff

- Bibliografie: Dennis M. Ritchie, „The UNIX System: The Evolution of the UNIX Time-sharing System“, *AT&T Bell Laboratories Technical Journal* 63(8), Oktober 1984, S. 1577-1593. DOI: `10.1002/j.1538-7305.1984.tb00054.x`.
- Zotero: `YUN5WHUF`, Sammlung `02 Command Line`; PDF-Anhang `UKWAQ5V5`; importiert und verifiziert am 14. September 2026.
- Citation Key: `ritchieEvolutionUnixTimesharing1984`, im automatischen Export `references/library.bib` geprüft.
- Quellentyp: historische Primärquelle in Form eines rückblickenden Beteiligtenberichts; kein Experiment zur Befehlsnutzung.
- Gelesene Fassung: vollständiger [Autorenvolltext bei Bell Labs](https://www.nokia.com/bell-labs/about/dennis-m-ritchie/hist.html) und [11-seitige PDF-Fassung im Universitätsarchiv](https://www.cis.upenn.edu/~lee/07cis505/Papers/ritchie-bstj84.pdf).
- Lokales PDF: `research/source-pdfs/ritchie-1984-evolution-unix.pdf`; vollständige Extraktion unter `research/source-texts/ritchie-1984-evolution-unix.txt`.
- SHA-256: `d4db4394a831c540309dfe6155e434297b9690735769d8d4aa3b6986d4dac9d9`; Zotero-Kopie byteidentisch.
- Zugriff: Volltext einschließlich Schluss und Literaturverzeichnis; relevante PDF-Seiten 7-9 zusätzlich visuell geprüft.
- Versionsgrenze: Vortrag 1979, Erstveröffentlichung 1980, hier bibliografisch der Nachdruck von 1984. Die Fußnote der Autorenfassung nennt abweichend Heft 6, Teil 2; für den Datensatz gilt die [Verlagsangabe Heft 8](https://onlinelibrary.wiley.com/doi/abs/10.1002/j.1538-7305.1984.tb00054.x). Die PDF-Seiten 1-11 sind **nicht** die Druckseiten 1577-1593; keine rechnerische Umrechnung.

## Gegenstand, Methode und Evidenzart

Frühes Unix bei Bell Labs, besonders Dateisystem, Prozesssteuerung, Ein-/Ausgabeumleitung und Pipes. Ritchie rekonstruiert technische Entscheidungen aus eigener Beteiligung und Erinnerung. Seine organisatorische Erklärung in RI84-P2 ist ausdrücklich eine Vermutung. Der Beitrag darf deshalb nicht wie eine unabhängige Untersuchung institutioneller Ursachen behandelt werden.

## Surface

Für die Gestaltung eines heutigen Terminalfensters, Feldgrößen, Labels oder sichtbare Hilfen liefert die Quelle keine direkte Evidenz. Die abgedruckten Befehle belegen Notation, keine vollständig beobachtete Interfaceoberfläche. Siehe RI84-P1 und P3.

## Interaction

Relevanter Anker ist RI84-P3: Vertrautheit mit einer vorhandenen Konvention beeinflusst die Bewertung einer Alternative. Für Lernleistung, Fehlerquoten oder Kompetenzen späterer NutzerInnen sind weiterhin Black/Moran und Shneiderman zuständig. Aus diesem Entwicklerbericht folgt kein allgemeines Urteil über die Schwierigkeit der Command Line.

## Operation

RI84-P1 und P4 verbinden Schreibweise und Verarbeitung: Die Unterscheidung von Datei und auszuführendem Befehl gehört zur Semantik der Notation. Für aktuelle Shells bleibt eine gegenwärtige Spezifikation nötig. Die Quelle ersetzt insbesondere nicht die POSIX-Definition von `mkdir`.

## Übergänge

- **Surface -> Interaction:** Keine direkte Wirkungsstudie einer sichtbaren Oberfläche; die Übertragung von Entwicklergewohnheiten auf Lernanforderungen ist eine Projektsynthese.
- **Interaction -> Operation:** RI84-P1/P4 liefern einen historischen Anker für die Frage, welche Notation welche Verarbeitung adressiert.
- **Surface -> Operation:** Befehlsbeispiele allein belegen nicht, ob ihre Funktion im tatsächlichen Interface erkennbar war.
- **Operation -> Interaction:** Eine technische Änderung kann neue Konventionen nötig machen; ihr Lernaufwand ist hier nicht gemessen.

## Direkt gestützte Aussagen

| ID | Aussage in eigenen Worten | Belegstelle | Evidenzart | Ebene | Einschränkung |
| --- | --- | --- | --- | --- | --- |
| RI84-P1 | Ritchie kontrastiert die Unix-Ausgabeumleitung `ls >xx` mit einer längeren Multics-Befehlsfolge. | PDF-S. 6-7, „IO redirection“ | technische historische Beschreibung | I / O | Kein kontrollierter Aufwandvergleich. |
| RI84-P2 | Er vermutet, dass getrennte Zuständigkeiten bei Multics eine Vereinfachung erschwerten; bei Unix lagen Shell und I/O unter Thompsons Kontrolle. | PDF-S. 7, „IO redirection“ | Beteiligteninterpretation | O / institutioneller Kontext | Vermutung, kein unabhängig belegter Kausalzusammenhang. |
| RI84-P3 | Gegen eine vorgeschlagene Infixnotation sprachen gewohnte `cp x y`-Syntax sowie Probleme mit Parametern und dem Ein-/Ausgabemodell. | PDF-S. 8, „Pipes“ | historische Selbstbeschreibung | I / O | Gewohnheit war nicht der einzige Einwand. |
| RI84-P4 | Eine frühe Pipe-Notation wurde wegen Notationsproblemen überarbeitet. | PDF-S. 8-9, „Pipes“ | technische historische Beschreibung | I / O | Keine allgemeine Behauptung, alle Konventionen seien beliebig. |
| RI84-P5 | Drei Schreibkräfte der Patentabteilung nutzten das System 1971 zur Textbearbeitung. | PDF-S. 8, „The first PDP-11 system“ | Beteiligtenbericht | I | Gegen eine ausschließlich programmierende Nutzerschaft; keine Zugänglichkeitsstudie. |

## Verhältnis zur Grundstruktur

**Eigene Projektsynthese, keine Quellenbehauptung:** Das erforderliche Regelwissen lässt sich als Anpassung an historisch bestimmte Konventionen untersuchen. Der Ort dafür ist primär *Interaction -> erforderliche Kenntnisse und Kompetenzen*. Die konkrete Verarbeitung einer Befehlsfolge kann in *Operation* vertieft werden, ohne die historische Passage dort zu wiederholen.

Offene Frage für Interaction: **Wessen erlernte Gewohnheiten werden zur Voraussetzung späterer Eingaben?** Sie ist eine Untersuchungsrichtung, kein bereits nachgewiesener Ausschlussmechanismus.

## Grenzen und Gegenprüfung

Nicht freigegeben: englische Sprache als nachgewiesene Ausschlussursache; absichtliche Machtsicherung durch kryptische Befehle; alle Command-Sprachen als einheitliche Kategorie; Gleichsetzung von Shell-Befehlen und der im Beitrag ebenfalls behandelten Programmiersprache B. Ritchies eigene Retrospektivitätswarnung im Schluss, PDF-S. 10, bleibt maßgeblich. Für die Frage nach tatsächlichem Erlernen die vorhandenen HCI-Quellen hinzunehmen; für einen längeren institutionellen oder sprachpolitischen Exkurs wären unabhängige historische Quellen erforderlich.

## Entscheidung

**Stützquelle.** Ein knapper historischer Kontrast zu scheinbar selbstverständlichem Syntaxwissen ist freigegeben. Kein Ersatz für eine empirische Untersuchung von Sprachbarrieren. Keine Thesisprosa übernommen.
