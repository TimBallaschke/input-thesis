# W3C 2026 - Input Events Level 2

## Status und Zugriff

- Bibliografie: World Wide Web Consortium, *Input Events Level 2*, W3C Working Draft, 1. Mai 2026, `https://www.w3.org/TR/2026/WD-input-events-2-20260501/`.
- Citation Key: `w3cInputEventsLevel2026`
- Quellentyp: technische Webspezifikation im Recommendation Track, Status Working Draft
- Gelesene Fassung: datierter lokaler Snapshot `research/source-texts/w3c-input-events-level-2-2026-05-01.html`
- Zugriffstiefe: vollständiger Spezifikationstext einschließlich Status, Tabellen und Referenzen
- Gelesene Abschnitte: Abstract, Status sowie Abschn. 1–9
- Noch erforderlich: Test Suite und Implementation Reports sind laut Dokument in Arbeit; konkrete Browserunterstützung und reale Editorimplementierungen müssen gesondert geprüft werden.

## Gegenstand, Methode und Evidenzart

Die Spezifikation ergänzt UI Events für Text- und verwandte Eingabe. Sie definiert, wie Webanwendungen beabsichtigte Bearbeitungen vor einer Browseränderung über `beforeinput` beobachten oder teilweise verhindern und nach einer Änderung über `input` beobachten können. Sie ist normative technische Evidenz für vorgeschriebenes beziehungsweise erlaubtes Verhalten, keine Beobachtung tatsächlicher Nutzung. Als Working Draft ist sie veränderlich und ausdrücklich keine W3C-Endorsement-Erklärung.

## Surface

Die Spezifikation schreibt keine sichtbare Feldform, Animation oder Rückmeldung vor. Sie gilt für Editing Hosts, darunter `contenteditable`, `textarea` und Texteingabe erlaubende `input`-Elemente. Surface-Aussagen müssen daher aus HTML, CSS, Browser- oder Produktquellen kommen.

## Interaction

Die Spezifikation fasst Tastatur, IME, Sprache und ähnliche Mittel als Wege, eine Bearbeitungsabsicht auszudrücken. Sie unterscheidet Tippen, Ersetzen durch Rechtschreibprüfung, Autokorrektur oder Schreibvorschläge, Zeilen- und Absatzumbrüche, Paste, Drop, verschiedene Löschrichtungen, Undo/Redo und Formatierungen über `inputType`. Die sichtbare Endzeichenfolge allein verrät somit nicht, welche Handlung oder Absicht zu ihr führte.

## Operation

`beforeinput` wird synchron bei einem versuchten Nutzereingriff ausgelöst und bedeutet nicht zwingend, dass der DOM anschließend geändert wird. `input` muss unmittelbar nach einer vom Browser aufgrund der Nutzerabsicht ausgeführten DOM-Änderung ausgelöst werden; ohne DOM-Änderung darf dieses Ereignis nicht ausgelöst werden. `inputType`, `data`, `dataTransfer` und `getTargetRanges()` beschreiben Art, Inhalt und Zielbereiche der Änderung abhängig vom Editing Host. Während einer IME-Komposition sind die begleitenden `beforeinput`-/`input`-Ereignisse nicht abbrechbar und als `insertCompositionText` gekennzeichnet. Ein Paste-`beforeinput` muss von einem `paste`-Ereignis eingeleitet werden.

## Übergänge

- **Surface -> Interaction:** Ein Textfeld oder Editing Host erlaubt verschiedene Eingabemittel und Bearbeitungsabsichten, die visuell gleichartige Resultate erzeugen können.
- **Interaction -> Operation:** Die Nutzerabsicht wird in einen `inputType` und ein synchrones Ereignispaar vor beziehungsweise nach einer möglichen Änderung übersetzt.
- **Surface -> Operation:** `input`, `textarea` und `contenteditable` liefern unterschiedliche Daten- und Zielbereichsinformationen, obwohl sie alle als Texteingabeflächen erscheinen können.
- **Operation -> Surface/Interaction:** `beforeinput` erlaubt Skripten, Standardbearbeitung zu überschreiben; `input` meldet eine tatsächlich ausgeführte DOM-Änderung. Die Spezifikation legt nicht fest, wie diese Zustände sichtbar werden.

## Direkt gestützte Aussagen

| ID | Aussage in eigenen Worten | Belegstelle | Evidenzart | Ebene | Einschränkung |
| --- | --- | --- | --- | --- | --- |
| W3CIE26-P1 | Input Events Level 2 ist am 1. Mai 2026 ein Working Draft; Test Suite und Implementation Reports sind noch in Arbeit. | Status of This Document | Spezifikationsstatus | O | Arbeitsstand, keine Empfehlung oder Implementierungsgarantie. |
| W3CIE26-P2 | Die Spezifikation soll Standardbearbeitung vorab über `beforeinput` überschreibbar und nachträgliche DOM-Änderungen über `input` beobachtbar machen. | Abschn. 1 und 4 | nichtnormative Zielbeschreibung | O | Zielbeschreibung, keine Nutzungs- oder Supportmessung. |
| W3CIE26-P3 | Eingabeereignisse gelten unter anderem für `contenteditable`, `textarea` und texteingabefähige `input`-Elemente. | Abschn. 6 | normative/technische Festlegung | S / O | Keine Festlegung ihrer visuellen Darstellung. |
| W3CIE26-P4 | `inputType` unterscheidet Tippen, Vorschlags-/Autokorrekturersetzung, Paste, Drop, Löschung, Undo/Redo und Formatierung. | Abschn. 6.1.2 | normative Taxonomie | I / O | Eine Implementierung muss nicht jede Operation unterstützen. |
| W3CIE26-P5 | `beforeinput` markiert den versuchten Nutzereingriff, garantiert aber keine nachfolgende DOM-Änderung. | Abschn. 6.2, `beforeinput` | normative Ereignisdefinition | I -> O | Gilt für Trusted Events in den definierten Hosts. |
| W3CIE26-P6 | `input` wird nach einer browserseitig ausgeführten DOM-Änderung ausgelöst und entfällt, wenn keine DOM-Änderung stattfindet. | Abschn. 6.2, `input` | normative Ereignisdefinition | O | EditContext kann Änderungen anders behandeln. |
| W3CIE26-P7 | `data`, `dataTransfer` und Zielbereiche unterscheiden sich nach `inputType` und Editing Host; bei `input`/`textarea` bleiben Target Ranges leer. | Abschn. 6.1.1–6.1.3 | normative Datendefinition | O | Tabellen enthalten zahlreiche systemspezifische Fälle. |
| W3CIE26-P8 | IME-Komposition erzeugt `compositionstart`, wiederholte `compositionupdate` mit nicht abbrechbaren `beforeinput`-/`input`-Paaren und schließlich `compositionend`. | Abschn. 7 | normative Ereignisfolge | I / O | Beschreibt Ereignisse, nicht sichtbare Kompositionsdarstellung. |
| W3CIE26-P9 | Ein `insertFromPaste`-`beforeinput` muss von einem `paste`-Ereignis eingeleitet werden. | Abschn. 8 | normative Ereignisfolge | I / O | Keine Aussage zu Clipboard-UI oder Nutzerwahrnehmung. |
| W3CIE26-P10 | Die Spezifikation erfasst Bearbeitungsabsichten statt zwingend die konkrete Hardwarehandlung und sieht dadurch keinen zusätzlichen bekannten Datenschutz-/Sicherheitseffekt außer bestehendem Fingerprinting. | Abschn. 3 und 9 | Definition plus nichtnormative Sicherheitsanalyse | I / O | Keine empirische Datenschutzprüfung. |

## Verhältnis zur Grundstruktur

Die Spezifikation schließt eine zentrale Operation-Lücke: Zwischen bearbeitbarem Text und Submission existiert bereits eine feingranulare Ereignisebene für Tippen, Ersetzen, Löschen, Paste, Undo, Formatierung und Komposition. Sie erlaubt, sichtbaren Text, Nutzerabsicht, versuchte Änderung und tatsächlich ausgeführte DOM-Änderung analytisch zu trennen.

## Grenzen und Gegenprüfung

Der Stand ist ein Working Draft, die Implementierungsberichte sind unvollständig, und nicht jede definierte Operation muss unterstützt werden. Die Spezifikation belegt weder visuelle Browserdarstellung noch reale Eventunterstützung oder Serververarbeitung. WHATWG 2026 ergänzt Feld-, Wert- und Submissionsemantik; konkrete Browser- und Editorbeobachtungen bleiben später nötig.

## Entscheidung

**Kernquelle.** Funktion: normative technische Grundlage für den Übergang von Nutzerabsicht und Bearbeitungshandlung zu `beforeinput`/`input`, DOM-Änderung, Komposition und Paste. Verbleibende Lücke: reale Implementierung und sichtbare Rückmeldung.
