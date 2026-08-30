# IEEE/The Open Group 2024 - POSIX `mkdir`

## Status und Zugriff

- Bibliografie: IEEE und The Open Group, „mkdir“, in *The Open Group Base Specifications Issue 8 / IEEE Std 1003.1-2024* (2024).
- Citation Key: `ieeeOpenGroupMkdir2024`
- Quellentyp: normativer technischer Standardabschnitt
- Gelesene Fassung: offizielle Onlinefassung unter `https://pubs.opengroup.org/onlinepubs/9799919799.2024edition/utilities/mkdir.html`; unveränderter lokaler Snapshot `research/source-texts/posix-2024-mkdir.html`
- SHA-256 des lokalen Snapshots: `7d37d11b3829422919fbc928cf3e4e0e2c9ba3d0eaba2e2e36362e80f4086576`
- Zugriffstiefe: Abschnitte NAME, SYNOPSIS, DESCRIPTION und OPERANDS vollständig gelesen
- Gelesene Abschnitte: NAME, SYNOPSIS, DESCRIPTION und OPERANDS
- Noch erforderlich: Eine Shell- oder Implementierungsquelle bleibt nötig, falls Parsing, Prozessstart, Fehlermeldungen oder konkrete Terminaldarstellung erklärt werden sollen.

## Gegenstand, Methode und Evidenzart

Der Standardabschnitt legt Name, Syntax, Operanden und vorgeschriebenes Verhalten der POSIX-Utility `mkdir` fest. Er ist keine Beobachtung eines konkreten Terminals und keine Nutzerstudie. Seine Aussagen sind normative technische Festlegungen für konforme Implementierungen.

## Surface

Der Abschnitt beschreibt keine sichtbare Terminaloberfläche, keinen Prompt, Cursor oder Eingabezustand. Die Synopsis ist eine formale Syntaxdarstellung und kein Screenshot einer realen Command Line.

## Interaction

Der Standard beobachtet weder Lernen noch Erinnern oder die Eingabe eines Befehls. Der im Arbeitsabschnitt verwendete Text `mkdir entwurf` ist ein didaktisches Projektbeispiel, das die dokumentierte Struktur `mkdir ... dir...` mit dem frei gewählten Verzeichnisnamen `entwurf` konkretisiert. Es ist kein wörtliches Beispiel aus der Quelle.

## Operation

`mkdir` ist als Utility zum Erzeugen von Verzeichnissen definiert. Die Synopsis ordnet optionale Optionen vor einem oder mehreren `dir`-Operanden an. Laut Beschreibung erzeugt die Utility die durch ihre Operanden bezeichneten Verzeichnisse in der angegebenen Reihenfolge; der Operand `dir` ist ein Pfadname des zu erzeugenden Verzeichnisses.

## Übergänge

- **Surface -> Interaction:** Nicht untersucht; die Synopsis kommuniziert Syntax, aber keine konkrete Interfacegestaltung oder Nutzung.
- **Interaction -> Operation:** Die dokumentierte Utility-Syntax verbindet den Namen `mkdir` und einen `dir`-Operanden mit der normativ beschriebenen Verzeichniserzeugung. Der Standard misst nicht, wie Nutzende diese Zuordnung lernen.
- **Surface -> Operation:** Die formale Synopsis macht einen Teil der operativen Struktur sichtbar; Shell-Parsing, Prozessstart und konkrete Implementierung bleiben außerhalb des gelesenen Abschnitts.

## Direkt gestützte Aussagen

| ID | Aussage in eigenen Worten | Belegstelle | Evidenzart | Ebene | Einschränkung |
| --- | --- | --- | --- | --- | --- |
| POSIX24-P1 | Der Standard bezeichnet `mkdir` als Utility zum Erzeugen von Verzeichnissen. | NAME | normative Festlegung | O | Keine Aussage über konkrete Terminaldarstellung oder Nutzung. |
| POSIX24-P2 | Die Synopsis lautet `mkdir [-p] [-m mode] dir...` und ordnet damit Utility-Name, optionale Optionen und einen oder mehrere Verzeichnisoperanden. | SYNOPSIS | normative Syntax | S / O | Formale Darstellung, kein beobachtetes Interface. |
| POSIX24-P3 | `mkdir` erzeugt die durch die Operanden bezeichneten Verzeichnisse in der angegebenen Reihenfolge. | DESCRIPTION | normative Festlegung | O | Belegt keine bestimmte Shell-Implementierung. |
| POSIX24-P4 | Der Operand `dir` bezeichnet einen Pfadnamen des zu erzeugenden Verzeichnisses. | DESCRIPTION; OPERANDS | normative Festlegung | O | Der Projektname `entwurf` steht nicht in der Quelle. |

## Verhältnis zur Grundstruktur

Die Quelle schließt eine eng begrenzte Lücke im Abschnitt **Interaction -> Erforderliche Kenntnisse und Kompetenzen**. Sie liefert die technische Grundlage für ein konkretes Command-Beispiel und trennt Befehlsname, Optionen und Operand. Die kognitive Aussage, dass diese Zuordnung und Syntax erlernt werden müssen, stammt weiterhin aus den HCI-Quellen und der Projektsynthese.

## Grenzen und Gegenprüfung

Ein Standard beschreibt vorgeschriebenes Verhalten und keine tatsächliche Implementierung oder Nutzung. Der Abschnitt dokumentiert weder eine vollständige Shellgrammatik noch Tokenisierung, Expansion, Prozessausführung, Rechtefehler oder sichtbares Feedback. Black und Moran (1982) sowie Shneiderman (1983) bleiben für Lernen und erinnerte Syntax erforderlich.

## Entscheidung

**Stützquelle.** Funktion: normative Grundlage für das konkrete Beispiel `mkdir entwurf`, begrenzt auf Utility-Name, Syntax, Operand und die beschriebene Verzeichniserzeugung. Verbleibende Lücke: Shell-Parsing, Ausführung und konkrete Terminalinteraktion.
