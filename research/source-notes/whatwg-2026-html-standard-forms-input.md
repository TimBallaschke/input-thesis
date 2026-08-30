# WHATWG 2026 - HTML Standard: Textfelder und Form Submission

## Status und Zugriff

- Bibliografie: WHATWG, *HTML Standard*, Living Standard, Stand 18. August 2026, `https://html.spec.whatwg.org/multipage/` (lokaler Zugriff: 19. August 2026).
- Citation Key: `whatwgHTMLStandard2026`
- Quellentyp: gegenwärtiger normativer technischer Standard
- Gelesene Fassungen:
  - `research/source-texts/whatwg-html-standard-2026-08-19/input.html`, SHA-256 `d29efe2a7fa2251ea101b5851a688238d41da8630604fcb1c73441fb4d280a5c`
  - `research/source-texts/whatwg-html-standard-2026-08-19/form-elements.html`, SHA-256 `e1f47e8ec42067b33795f7025e4d42f4ecbdd41efe07a5b5858eab989a9`
  - `research/source-texts/whatwg-html-standard-2026-08-19/form-control-infrastructure.html`, SHA-256 `07b8e194bcaf0d057b42471da776d3d7efa52b93a7c64b1cad05913ee719fb5d`
- Zugriffstiefe: vollständig gelesen wurden die für ein- und mehrzeilige Texteingabe, Feldzustand, Mutability, Namen, Längenbegrenzung, Deaktivierung, Autofill, Auswahl, Constraint Validation, Submission und Reset relevanten Abschnitte 4.10.5, 4.10.11 sowie 4.10.18–4.10.23. Der übrige HTML-Standard wurde nicht ausgewertet.
- Versionsgrenze: datierter lokaler Snapshot eines Living Standards; spätere Änderungen sind nicht abgedeckt.

## Gegenstand, Methode und Evidenzart

Der HTML Standard definiert semantische Zustände, interne Werte, APIs und Algorithmen für Form Controls. Er spezifiziert Soll- und Muss-Verhalten von konformen Implementierungen; er beobachtet weder reale Browserdarstellungen noch Nutzer:innen und beschreibt keine serverseitige Weiterverarbeitung nach der Übertragung. Normative Regeln, nicht empirische Häufigkeit oder Wirkung, bilden daher die Evidenz.

## Surface

`input` ist ein typisiertes Datenfeld, dessen `type`-Zustand Datenart und zugehöriges Control bestimmt; bei fehlendem oder ungültigem Typ gilt Text als Standard. Text und Search sind einzeilige Klartextfelder, Password ist ein einzeiliges Feld mit visuell zu verdeckendem Wert, und `textarea` erlaubt mehrzeiligen Klartext. `rows` und `cols` geben zeichenbezogene Darstellungshinweise, aber keine exakten Pixelmaße vor. Der Standard grenzt damit semantische und einige sichtbare Eigenschaften ein, belegt jedoch nicht das konkrete Aussehen in einem bestimmten Browser, Betriebssystem oder CSS-Zustand.

## Interaction

Bearbeitbare Controls besitzen Cursor- und Auswahlzustände, können Textbereiche ersetzen und lösen bei benutzergesteuerten Änderungen Ereignisse aus. Enter kann je nach Plattform eine implizite Submission über den Standardbutton auslösen. Constraint Validation kann eine Submission stoppen, ungültige Felder melden, fokussieren und in den sichtbaren Bereich scrollen. Autofill kann Werte so setzen, als wären sie von der Person geändert worden; Reset stellt controlspezifische Ausgangszustände wieder her, ohne diese Änderung als Nutzereingabe oder `input`-Ereignis zu behandeln.

## Operation

Der Standard unterscheidet bei Controls mehrere operative Repräsentationen. Ein `input` besitzt unter anderem aktuellen Wert, Standardwert und Dirty-Value-Flag; Typwechsel und Sanitization können den Wert verändern. Bei `textarea` sind Raw Value, normalisierter API Value und ein für Submission gegebenenfalls erneut transformierter Wert getrennt. Bei der Submission wird aus erfolgreichen, benannten Controls eine geordnete Entry List erzeugt. Deaktivierte, unbenannte, nicht ausgewählte Checkbox-/Radiobutton- und nicht auslösende Button-Controls werden dabei ausgelassen. Methode, Action, Encoding und Enctype bestimmen anschließend, ob die Name-Wert-Daten etwa in einer GET-URL oder im Body eines POST-Requests übertragen werden. Ein `formdata`-Ereignis erlaubt Skriptänderungen an den zu sendenden Daten.

## Übergänge

- **Surface -> Interaction:** Der Feldtyp rahmt erwartete Daten und verfügbare Bearbeitung; sichtbare Dimensionen, Verdeckung und Browserdarstellung können diese Rolle kommunizieren, ohne die interne Wertlogik vollständig zu zeigen.
- **Interaction -> Operation:** Tippen, Auswählen, Ersetzen, Autofill, Validieren, Submit und Reset verändern beziehungsweise prüfen interne Zustände nach jeweils eigenen Regeln. Der auf dem Bildschirm bearbeitete Text ist deshalb nicht automatisch identisch mit API- oder Submission-Wert.
- **Surface -> Operation:** Ein sichtbares Feld wird operativ erst durch Name, Formzuordnung, Status, Typ, Submission-Button, Methode, Action und Encoding zu einem Eintrag oder Request. Mehrere dieser Bedingungen können für die Person unsichtbar bleiben.

## Direkt gestützte Aussagen

| ID | Aussage in eigenen Worten | Belegstelle | Evidenzart | Ebene | Einschränkung |
| --- | --- | --- | --- | --- | --- |
| WHATWG-P1 | `input` ist ein typisiertes Datenfeld; fehlende oder ungültige `type`-Werte fallen auf den Textzustand zurück. | Abschn. 4.10.5 und 4.10.5.1.2 | technische Festlegung | S / O | Keine Aussage zur Häufigkeit bestimmter Feldtypen. |
| WHATWG-P2 | Text und Search sind einzeilige Klartextfelder, Password wird visuell verdeckt, und `textarea` ist mehrzeilig. | Abschn. 4.10.5.1.2, 4.10.5.1.6 und 4.10.11 | technische Festlegung | S | Exakte Browserdarstellung und CSS liegen außerhalb dieses Belegs. |
| WHATWG-P3 | Ein `input` führt aktuellen Wert, Standardwert und Dirty-Value-Flag; Sanitization und Typwechsel können den aktuellen Wert transformieren. | Abschn. 4.10.18.1 sowie 4.10.5.3–4.10.5.4 | Prozessspezifikation | I -> O | Die konkrete Transformation hängt vom Feldtyp ab. |
| WHATWG-P4 | `textarea` unterscheidet Raw Value, normalisierten API Value und Submission Value, sodass sichtbarer beziehungsweise editierter Text und übermittelter String auseinanderfallen können. | Abschn. 4.10.11 | Prozessspezifikation | I -> O | Betrifft insbesondere Zeilenenden und optionales Wrapping. |
| WHATWG-P5 | Textrelevante Controls besitzen Cursor-, Auswahl- und Ersetzungs-APIs; Auswahlzustände können existieren, auch wenn sie nicht gerendert werden. | Abschn. 4.10.20 | technische Festlegung | I / O | API-Möglichkeit ist kein Beleg für konkrete Nutzung oder sichtbare Rückmeldung. |
| WHATWG-P6 | Constraint Validation unterscheidet mehrere Fehlerzustände und kann eine interaktive Submission stoppen und problematische Controls melden. | Abschn. 4.10.21 | Prozessspezifikation | I -> O | Clientseitige Prüfung ersetzt keine serverseitige Sicherheitsprüfung. |
| WHATWG-P7 | Autofill darf Werte entsprechend semantischen Tokens einsetzen und behandelt das Setzen operativ so, als habe die Person den Wert geändert. | Abschn. 4.10.19.7 | Prozessspezifikation | I -> O | Standardvorgabe, keine Messung konkreter Browserunterstützung oder tatsächlicher Vorschläge. |
| WHATWG-P8 | Die Entry List enthält geordnete Name-Wert-Einträge und lässt unter anderem deaktivierte, unbenannte und nicht ausgewählte Controls aus. | Abschn. 4.10.22.4 | Prozessspezifikation | O | Sonderfälle für Files, Images, Custom Elements und Richtung bleiben controlspezifisch. |
| WHATWG-P9 | Bei GET werden codierte Paare in die Action-URL geschrieben; bei POST werden sie abhängig vom Enctype als Request-Body übertragen. | Abschn. 4.10.22.1 und 4.10.22.3 | Prozessspezifikation | O | Serverannahme, Speicherung und Folgewirkung sind nicht spezifiziert. |
| WHATWG-P10 | Submission umfasst Validierung, ein abbrechbares `submit`-Ereignis, Entry-List-Konstruktion und ein `formdata`-Ereignis, über das Skript die zu sendenden Daten verändern kann. | Abschn. 4.10.22.3–4.10.22.4 und 4.10.22.11 | Prozessspezifikation | I -> O | Skriptmöglichkeiten belegen keine konkrete Websiteimplementierung. |
| WHATWG-P11 | Reset ruft controlspezifische Reset-Algorithmen auf; diese Änderungen gelten nicht als Nutzereingabe und lösen daher keine `input`-Ereignisse aus. | Abschn. 4.10.23 | Prozessspezifikation | I / O | Tatsächliche zusätzliche Skriptreaktionen sind separat zu beobachten. |

## Verhältnis zur Grundstruktur

Die Quelle ist die aktuelle normative Basis für die gesamte Kette vom sichtbaren Feldtyp über Bearbeitung und Validierung bis zur operativen Bildung und Übertragung von Formulardaten. Besonders wichtig ist, dass sie nicht nur Surface und Submission trennt, sondern mehrere Zwischenwerte und Ereignisschritte ausweist. Dadurch lässt sich präzise beschreiben, warum „der eingegebene Text“ technisch kein einzelner, unveränderter Gegenstand ist.

## Grenzen und Gegenprüfung

Der Standard definiert Konformität, nicht tatsächliche Browserpraxis. Für sichtbare Form, Plattformunterschiede, Styling, Browserunterstützung und wahrgenommene Funktion sind versionierte Interfacebeobachtungen erforderlich. Für Serververarbeitung, Speicherung und institutionelle Datennutzung werden zusätzlich Implementierungs- oder Backendquellen benötigt. Der historische Übergang von HTML 2.0 zum aktuellen Modell ist mit diesem Snapshot allein nicht geschlossen; insbesondere HTML 4 und konkrete Browserstände bleiben offen.

Für *Input Events Level 2* liegt im lokalen Bestand nur ein bibliografischer Datensatz, kein gesicherter Volltext vor. Deshalb wurden daraus keine Aussagen übernommen. Der WHATWG-Snapshot deckt Auswahl-, Bearbeitungs- und Formereignisse in seinem geprüften Umfang ab, ersetzt aber keine spätere, versionsgenaue Auswertung dieses separaten Standards.

## Entscheidung

**Kernquelle.** Funktion: gegenwärtige technische Grundlage für Feldsemantik, Bearbeitungszustände, Werttransformation, Validierung und Submission. Verbleibende Lücken: konkrete Browseroberflächen und -unterstützung, Serveroperation sowie historische Zwischenstufen.
