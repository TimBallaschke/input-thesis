# Berners-Lee und Connolly 1995 - HTML 2.0 Forms

## Status und Zugriff

- Bibliografie: Tim Berners-Lee und Daniel Connolly, *Hypertext Markup Language - 2.0*, RFC 1866 (RFC Editor, November 1995). DOI: `10.17487/RFC1866`.
- Citation Key: `rfc1866`
- Quellentyp: historischer technischer Standard
- Gelesene Fassung: `research/source-texts/rfc1866.txt`
- Zugriffstiefe: vollständiger lokaler Standardtext verfügbar; für diese Auswertung vollständig gelesen wurden Abschnitt 1.2.3, Abschnitt 8 „Forms“ einschließlich 8.1–8.2.4 sowie Abschnitt 10 „Security Considerations“.
- Relevante Druckseiten: 5 sowie 39–48 und 68
- Noch erforderlich: Konkrete Browserdarstellungen von 1995 und tatsächliche Implementierungsunterschiede benötigen versionierte Browser- oder Screenshotquellen.

## Gegenstand, Methode und Evidenzart

RFC 1866 spezifiziert HTML 2.0. Abschnitt 8 definiert Formulare als Vorlagen für Formulardatensätze, Eingabeelemente und die Verarbeitung beim Absenden. Es handelt sich um normative und beschreibende technische Festlegungen, nicht um eine Beobachtung realer Nutzung und nicht um eine Design- oder Usability-Studie.

## Surface

Der Standard unterscheidet einzeilige Textfelder (`INPUT TYPE=TEXT`), verdeckte Passwortfelder, Checkboxen, Radiobuttons, Bild-, Hidden-, Submit- und Reset-Eingaben, Auswahllisten sowie mehrzeilige `TEXTAREA`-Felder. `SIZE`, `ROWS` und `COLS` legen sichtbaren Raum beziehungsweise typische Dimensionen fest; die konkrete Darstellung bleibt dem User Agent überlassen. Der Standard erlaubt, Formularelemente mit Dokumentstrukturen zu mischen, und beschreibt Submit/Reset „typischerweise“ als Buttons. Er belegt damit verfügbare Elementrollen und Attribute, nicht das Aussehen eines bestimmten Browsers.

## Interaction

Ein User Agent präsentiert Felder in einem Anfangszustand. Die Person kann sie im Rahmen des Feldtyps verändern, Optionen wählen und das Formular über Submit oder ein Bildelement absenden; Reset stellt die Anfangszustände wieder her. Bei einem Formular mit nur einem einzeiligen Textfeld soll Enter als Submission-Anforderung akzeptiert werden. Einzeilige Felder können bei längeren Werten scrollen; mehrzeilige Felder sollen Text über ihre sichtbaren Dimensionen hinaus durch Scrollen erlauben.

## Operation

Ein Formular ist eine Vorlage für eine Folge benannter Werte sowie eine Methode und eine Action-URI. Sichtbare oder initiale Feldwerte werden zu einem Formulardatensatz zusammengestellt und standardmäßig als `application/x-www-form-urlencoded` codiert. Bei `GET` wird der codierte Datensatz an die Action-URI angehängt; bei `POST` wird er im Request-Body übertragen. Unausgewählte Checkboxen und Radiobuttons werden nicht codiert, Hidden-Felder mit Wert dagegen schon. Der Standard unterscheidet GET für idempotente Zugriffe und POST für Vorgänge mit Seiteneffekten.

## Übergänge

- **Surface -> Interaction:** Feldtyp, Anfangswert, sichtbare Dimension und Wahlmöglichkeiten begrenzen, was geändert oder ausgewählt werden kann. Die konkrete visuelle Kommunikation dieser Regeln ist nicht standardisiert.
- **Interaction -> Operation:** Submit, ein Image-Input oder unter einer bestimmten Bedingung Enter wandelt bearbeitete Feldzustände in einen zu verarbeitenden Formulardatensatz um.
- **Surface -> Operation:** Das sichtbare Feld enthält einen bearbeitbaren Wert; operativ wird dieser unter seinem `NAME` zusammen mit anderen Feldern codiert und an eine URI übertragen. Action, Methode, Hidden-Felder und Codierung müssen für die Person nicht sichtbar sein.

## Direkt gestützte Aussagen

| ID | Aussage in eigenen Worten | Belegstelle | Evidenzart | Ebene | Einschränkung |
| --- | --- | --- | --- | --- | --- |
| RFC1866-P1 | HTML 2.0 definiert ein Formular als Vorlage für einen Datensatz aus Name-Wert-Paaren mit zugehöriger Methode und Action-URI. | Abschn. 8, S. 39–40 | technische Festlegung | O | Standarddefinition, kein Beleg für eine konkrete Implementierung. |
| RFC1866-P2 | `INPUT TYPE=TEXT` ist ein einzeiliges Textfeld; `TEXTAREA` ist für mehrzeiligen Text vorgesehen. | Abschn. 8.1.2.1 und 8.1.4, S. 40 und 44 | technische Festlegung | S / O | Keine Aussage über natives Browserstyling. |
| RFC1866-P3 | `SIZE`, `ROWS` und `COLS` beschreiben sichtbaren Raum, während die genaue Darstellung vom User Agent abhängt. | Abschn. 8.1.2.1 und 8.1.4, S. 40 und 44 | technische Festlegung | S | „Typisch“ ist keine Garantie gleicher Darstellung. |
| RFC1866-P4 | Der User Agent präsentiert Anfangszustände, erlaubt typabhängige Änderungen und verarbeitet den Datensatz nach einer Submission anhand von Methode, Action und Encoding. | Abschn. 8.2, S. 45 | Prozessspezifikation | I -> O | Tatsächliche Serververarbeitung liegt außerhalb dieser Beschreibung. |
| RFC1866-P5 | Bei einem Formular mit genau einem einzeiligen Textfeld soll Enter als Submission-Anforderung gelten. | Abschn. 8.2, S. 45 | Interaktionsfestlegung | I -> O | Gilt nur für diese Formkonstellation und als „should“. |
| RFC1866-P6 | Die Standardcodierung bildet Feldnamen und Werte als geordnete, maskierte Paare ab; unausgewählte Wahlfelder können fehlen, Hidden-Werte können enthalten sein. | Abschn. 8.2.1, S. 45–46 | technische Festlegung | O | Beschreibt `application/x-www-form-urlencoded` in HTML 2.0. |
| RFC1866-P7 | GET ist für idempotente Abfragen, POST für Dienste mit Seiteneffekten vorgesehen. | Abschn. 8.2.2–8.2.3, S. 46–47 | technische Festlegung | O | Historische HTTP-/HTML-2.0-Konvention; aktuelle Standards separat prüfen. |
| RFC1866-P8 | Das Verdecken eines Passwortwerts bei der Eingabe bedeutet laut Sicherheitsabschnitt keine Vertraulichkeit der Übertragung. | Abschn. 8.1.2.2 und 10, S. 41 und 68 | technische Festlegung/Warnung | S -> O | Gilt für die im RFC beschriebenen damaligen Übertragungsbedingungen. |

## Verhältnis zur Grundstruktur

Die Quelle ist die stärkste historische Baseline für die Differenz zwischen sichtbarem Eingabeelement, bearbeitetem Feldzustand und übertragenem Datenwert. Sie zeigt, dass die scheinbar einzelne Eingabe operativ Teil eines benannten, codierten Datensatzes und einer durch Methode und URI bestimmten Aktion ist.

## Grenzen und Gegenprüfung

RFC 1866 belegt weder, dass HTML-Formulare 1995 erfunden wurden, noch eine einheitliche Browserdarstellung oder tatsächliche Nutzungspraxis. Für den historischen Übergang sind frühere HTML+-/Browserquellen und HTML 4.01 nötig; für die Gegenwart der WHATWG-Standard und konkrete Browserbeobachtungen.

## Entscheidung

**Kernquelle.** Funktion: historische technische Grundlage für Webformular-Surface, Submission und die operative Übersetzung sichtbarer Eingaben in Name-Wert-Daten. Verbleibende Lücke: konkrete historische Darstellung und Implementierung sowie der Übergang zu aktuellen Standards.
