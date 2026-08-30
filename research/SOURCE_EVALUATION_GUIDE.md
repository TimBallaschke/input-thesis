# Leitfaden für die neue Quellenauswertung

## Status und Grundlage

- Grundlage: `presentation/Struktur_Masterarbeit_Input.pages`, Stand 30. August 2026
- Leitachse: **Surface -> Interaction -> Operation**
- Zweck: Jede Quelle neu und unabhängig von früheren Source Notes oder Vergleichsmatrizen prüfen.
- Frühere Auswertungen und die historische AI-Dokumentation sind keine Evidenz für diese Neubewertung.
- Eine Quelle wird erst nach einer überprüfbaren Lektüre für eine Thesis-Behauptung freigegeben.
- Arbeitsentscheidung vom 30. August 2026: Zuerst wird der vorhandene, inhaltlich noch im Scope liegende Quellenbestand neu ausgewertet. Ausgeschlossene Bestandsquellen werden nicht close-read. Neue Quellen werden erst während des Schreibens für konkret auftretende Beleglücken gesucht.
- Scope-Entscheidung vom 30. August 2026: Social Media, zwischenmenschliche Messenger-Kommunikation als eigener Gegenstand sowie Kunstwerke, Werkdokumentation und Kunsttheorie sind ausgeschlossen. Messengerquellen sind nur als begrenzte Vergleichsevidenz für übertragbare Interfacekonventionen zulässig. Im Zentrum stehen dialogische Mensch-System-Interfaces wie ELIZA, regelbasierte Systeme und KI-/LLM-Chats.

## Leitfrage

**Wie gestaltet, ermöglicht und verarbeitet ein Texteingabefeld den Übergang zwischen menschlicher Intention und technischer Operation?**

Die drei Ebenen sind analytisch zu trennen, auch wenn eine Quelle mehrere Ebenen verbindet:

1. **Surface:** Was ist sichtbar, und was scheint eingebbar?
2. **Interaction:** Welche körperliche, sprachliche und kognitive Arbeit findet während der Eingabe statt?
3. **Operation:** Welche technische Funktion erhält die Eingabe, und was geschieht mit ihr?

## Pflichtfelder jeder Quellenauswertung

### 1. Bibliografische Identität und Zugriff

- Vollständige bibliografische Angabe und Citation Key
- Quellentyp: Standard, technische Dokumentation, Experiment, Beobachtungsstudie, Theorie, historische Primärquelle, Interface-/Produktdokumentation oder Kritik
- Exakte gelesene Fassung, URL oder lokale Datei
- Zugriffstiefe: Volltext / begrenzter Auszug / Abstract / Metadaten
- Gelesene Seiten oder Abschnitte
- Noch erforderliche Verifikation

### 2. Untersuchungsgegenstand und Methode

- Welches konkrete Objekt oder System untersucht die Quelle?
- Welche Personen, Daten, Interfaces oder Versionen wurden untersucht?
- Welche Methode wurde verwendet?
- Welche Aussagen sind empirische Ergebnisse, technische Festlegungen, historische Beschreibungen oder Interpretationen?

### 3. Surface - What can I enter?

Nur ausfüllen, wenn die Quelle direkte Evidenz liefert.

- Form, Größe, Position sowie ein- oder mehrzeilige Darstellung
- Label, Placeholder, Beispiele, Icons, Buttons und begleitender Text
- Zeitliche und animierte Zustände: Drei-Punkte-/Typing-Indikator, Spinner, Generating-Text, Streaming-Cursor, Stop-/Retry-Zustand und Fehlermeldung
- Verhältnis zu anderen Interfaceelementen und zum Seitenkontext
- Kommunizierte Funktion: Command, Formularwert, Passwort, Query, Systemdialog oder Prompt
- Kommunizierter Systemstatus: wartet, empfängt, verarbeitet, generiert, streamt, ist abgeschlossen oder ist fehlgeschlagen
- Sichtbare Erwartungen, Kategorien, Formate, Regeln und Grenzen
- Scheinbare Offenheit und unsichtbare Voraussetzungen
- Historische oder typologische Vergleichbarkeit

### 4. Interaction

Nur ausfüllen, wenn die Quelle direkte Evidenz liefert.

- Physische Eingabeform: Tastatur, Touch, Sprache, Einfügen oder alternative Technik
- Körperlicher und zeitlicher Aufwand
- Erforderliches Vokabular, Syntax-, Format- und Systemwissen
- Übersetzung von Intention in systemgeeigneten Text
- Cursor, Auswahl, Löschen, Ersetzen, Undo und weitere Bearbeitung
- Fehlererkennung, Validierung, Feedback und Korrektur
- Autocomplete, Vorschläge, Auswahl- und Bewertungskosten
- Iteration, Reformulierung und Lernen aus Systemreaktionen
- Warten, Turn-Taking, Unterbrechen und die Interpretation animierter Systemaktivität
- Veränderung von Formulierung oder Erwartung durch Latenz, Streaming und sichtbare Antwortzustände

### 5. Operation

Nur ausfüllen, wenn die Quelle direkte Evidenz liefert.

- Technische Rolle des sichtbaren Texts: Command, Query, Wert, Event, Systemdialog oder Prompt
- Unterschied zwischen sichtbarem Text, internem Wert und ausgelöster Operation
- Validierung, Ausführung, Retrieval, Klassifikation oder Modellverarbeitung
- Auslöser, Zustandsmodell und Ende eines Typing-, Generating-, Streaming-, Warte- oder Fehlerindikators
- Speicherung, Übertragung, Aggregation und Weiterverwendung
- Unmittelbare und nachgelagerte Empfänger oder Systeme
- Differenz zwischen wahrgenommener Handlung und dokumentierter Operation
- Version, Infrastruktur und Grenzen der technischen Aussage

### 6. Übergänge

- **Surface -> Interaction:** Welche sichtbare Einfachheit erzeugt welche Formulierungs-, Lern- oder Korrekturarbeit?
- **Interaction -> Operation:** Welche Handlung oder welches Ereignis macht bearbeitbaren Text technisch wirksam?
- **Surface -> Operation:** Welche operative Funktion wird sichtbar kommuniziert, und welche bleibt verborgen?
- **Operation -> Surface/Interaction:** Welcher dokumentierte Systemzustand wird wann sichtbar, wie beeinflusst seine Darstellung das weitere Handeln und welche operative Verbindung bleibt ungeprüft?

### 7. Direkt gestützte Aussagen

Für jede verwendbare Aussage:

| ID | Aussage in eigenen Worten | Belegstelle | Evidenzart | Ebene | Einschränkung |
| --- | --- | --- | --- | --- | --- |
| Qxx-P1 |  | Seite/Abschnitt | Quelle / Beobachtung | S / I / O |  |

Regeln:

- Keine Aussage nur aus Titel, Metadaten oder Suchtreffer ableiten.
- Abstracts dürfen nur Abstract-Aussagen stützen.
- Quellenbehauptung, Projektsynthese und eigene Interfacebeobachtung getrennt markieren.
- Historische Systeme nicht ohne Beleg auf heutige Produkte übertragen.
- Ein Standard beschreibt vorgeschriebenes oder erlaubtes Verhalten, nicht automatisch reale Nutzung.
- Ein Experiment belegt nur die untersuchte Aufgabe, Stichprobe, Gestaltung und Version.
- Eine Abbildung belegt sichtbare Form, aber nicht automatisch Backend, Speicherung oder Nutzerwahrnehmung.
- Eine Animation oder Statusanzeige belegt zunächst nur einen sichtbaren Interfacezustand. Sie darf nicht ohne technische Dokumentation mit Denken, Komposition, Modellinferenz oder tatsächlichem Fortschritt gleichgesetzt werden.
- Evidenz aus zwischenmenschlichen Messengern darf nur für die konkret untersuchte Interfacekonvention verwendet und nicht als Beleg für die Operation eines KI-/LLM-Systems übertragen werden.

### 8. Quellenentscheidung

Jede Auswertung endet mit genau einer Entscheidung:

- **Kernquelle:** trägt eine zentrale Aussage der Grundstruktur direkt.
- **Stützquelle:** erklärt, kontextualisiert oder begrenzt eine Kernaussage.
- **Fallquelle:** dokumentiert ein konkretes Mensch-System-Interface.
- **Reserve:** nur relevant, falls der zugehörige Typ oder Unterabschnitt erhalten bleibt.
- **Ausschließen:** liefert für die aktuelle Struktur keine hinreichende Evidenz.
- **Offen:** Volltext oder notwendige Prüfung fehlt.

Zusätzlich festhalten:

- Strukturbereich und geplante Funktion
- Welche andere Quelle zur Gegenprüfung nötig ist
- Welche Evidenzlücke trotz der Quelle bestehen bleibt

## Vergleichsregeln

Vergleiche werden erst nach den Einzelprüfungen erstellt.

- Nur Quellen mit kompatiblen Gegenständen oder explizit begründeter Kontrastfunktion vergleichen.
- Surface-, Interaction- und Operation-Aussagen nicht zu einem allgemeinen Usability-Urteil verdichten.
- Command Line, Formular, Suche, Omnibox, Systemdialog und Prompt nicht als lineare Entwicklungsstufen voraussetzen.
- Messenger-Typing-Indikator, KI-Generating-Zustand und tatsächliche Modellverarbeitung nicht ohne direkten Beleg gleichsetzen.
- Offenheit als Interfacewirkung getrennt von technischer Beschränkung behandeln.
- Weniger Tastenanschläge nicht automatisch mit weniger Aufwand gleichsetzen.
- Eingabe, Submission, Annahme, Speicherung und Weiterverwendung als getrennte Ereignisse behandeln.

## Workflow für Teilabschnitte

Für jeden späteren Teilabschnitt gilt der kurze Workflow unter
[`WORKFLOW_TEILABSCHNITTE.md`](WORKFLOW_TEILABSCHNITTE.md):

1. die inhaltlich notwendigen kleinen Unterpunkte festlegen;
2. eine Kernaussage in einem Satz formulieren;
3. pro Unterpunkt nur die tatsächlich notwendigen Quellenstellen auswählen;
4. eine möglichst kurze Übersicht mit Aussage und Grenze erstellen;
5. erst nach gemeinsamer Prüfung den Textabschnitt schreiben.

Neue Literatur wird nur gesucht, wenn in dieser Übersicht eine konkrete
Beleglücke sichtbar wird. Die Übersicht wiederholt nicht die vollständigen
Source Notes. Weder die Zahl der Unterpunkte noch die Zahl der Quellenpassagen
ist vorab festgelegt; beides folgt dem jeweiligen Argument.

## Vorlage für neue Source Notes

```markdown
# [Autor Jahr] - [Kurztitel]

## Status und Zugriff

## Gegenstand, Methode und Evidenzart

## Surface

## Interaction

## Operation

## Übergänge

## Direkt gestützte Aussagen

| ID | Aussage in eigenen Worten | Belegstelle | Evidenzart | Ebene | Einschränkung |
| --- | --- | --- | --- | --- | --- |

## Verhältnis zur Grundstruktur

## Grenzen und Gegenprüfung

## Entscheidung
```

## Reihenfolge der Neubewertung

1. Historische und technische Baselines: Command Line, HTML-Formular und Direct Manipulation
2. Surface: sichtbare Form, Labels, Grenzen und scheinbare Offenheit
3. Interaction: physische Eingabe, Lernen, Bearbeiten, Vorschläge und Iteration
4. Operation: Command, Query, Formularwert, Event, Systemdialog und Prompt
5. Zeitliche Systemzustände und Animation: Typing, Generating, Streaming, Warten, Stoppen und Fehler
6. Dialogische Mensch-System-Interfaces und konkrete Systemfälle
7. Erst danach strukturbezogene Vergleichsmatrizen
8. Zusätzliche Literatur nur für Lücken beschaffen, die beim Schreiben einer konkreten Passage tatsächlich relevant werden
