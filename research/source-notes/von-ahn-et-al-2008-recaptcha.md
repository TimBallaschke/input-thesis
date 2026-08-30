# von Ahn et al. 2008 - reCAPTCHA

## Status und Zugriff

- Bibliografie: Luis von Ahn, Benjamin Maurer, Colin McMillen, David Abraham und Manuel Blum, „reCAPTCHA: Human-Based Character Recognition via Web Security Measures“, *Science* 321, Nr. 5895 (2008), S. 1465–1468. DOI: `10.1126/science.1160379`.
- Citation Key: `vonahnReCAPTCHA2008`
- Quellentyp: technischer Forschungsbericht mit Systemevaluation
- Gelesene Fassung: `research/source-pdfs/von-ahn-et-al-2008-recaptcha.pdf`
- Dateiprüfung: vollständiges vierseitiges lokales PDF; SHA-256 `8c59a528d8bc095f140ca88b3748a83cb9e5fa56747af88fac17b4bd0df502cc`
- Zugriffstiefe: vollständiger Artikel einschließlich Abbildung, Tabellenwerten, Anmerkungen und Referenzen gelesen; alle vier Seiten gerendert und visuell geprüft.
- Nicht gelesen: das separat verlinkte Supporting Online Material.

## Gegenstand, Methode und Evidenzart

Der Artikel beschreibt das 2008 eingesetzte reCAPTCHA-System, das eine CAPTCHA-Prüfung mit der Transkription von Wörtern verbindet, an denen zwei OCR-Systeme gescheitert sind. Die Quelle kombiniert eine technische Systembeschreibung mit Deploymentzahlen, einer Transkriptionsprüfung an 24.080 Wörtern und einem Zeitvergleich zweier getrennt gezogener Gruppen von jeweils 1.000 Nutzer:innen. Sie ist weder eine aktuelle Dokumentation heutiger reCAPTCHA-Produkte noch eine Untersuchung der subjektiven Wahrnehmung des Interfaces.

## Surface

Die abgebildete Oberfläche zeigt zwei gemeinsam verzerrte Wortbilder, ein einzelnes Texteingabefeld und Bedienelemente zum Absenden beziehungsweise Anfordern eines neuen Wortpaars. Für die Person erscheint die Eingabe primär als Sicherheitsprüfung: Beide Wörter sollen entziffert und eingegeben werden, um den Zugang als Mensch zu erhalten. Abbildung 1 dokumentiert ein konkretes Beispiel, aber keine vollständige Taxonomie aller damaligen reCAPTCHA-Darstellungen oder Einbettungen auf mehr als 40.000 Websites.

## Interaction

Die Person liest zwei isolierte, verzerrte Wörter, tippt beide Antworten und kann ein neues Wortpaar anfordern, wenn ein Wort unlesbar ist. Ein Zeitvergleich auf `captcha.net` ergab für getrennte Gruppen von je 1.000 zufällig ausgewählten Personen im Mittel 13,51 Sekunden für ein konventionelles siebenstelliges CAPTCHA und 13,06 Sekunden für reCAPTCHA; der Unterschied war nicht statistisch signifikant. Erfolgsraten nach Ländern werden über IP-Adressen aggregiert und dürfen nicht als individuelle Sprachkompetenz oder universelle Nutzbarkeit interpretiert werden.

## Operation

Jede Aufgabe kombiniert in zufälliger Reihenfolge ein unbekanntes, von OCR nicht erkanntes Wort mit einem bekannten Kontrollwort. Nur die richtige Antwort auf das Kontrollwort entscheidet über das Bestehen der Sicherheitsprüfung; die zweite Antwort wird dann als plausible Transkriptionshypothese gespeichert. Das unbekannte Wort wird mehreren Personen mit wechselnder Verzerrung vorgelegt. Übereinstimmende menschliche Antworten und OCR-Vorschläge werden gewichtet, bis mindestens 2,5 Stimmen erreicht sind; nach sechs Ablehnungen ohne festgelegte Schreibweise wird ein Wort verworfen. Die Eingabe operiert somit gleichzeitig als Zugangsnachweis und als verteilte Klassifikations- beziehungsweise Transkriptionsarbeit.

## Übergänge

- **Surface -> Interaction:** Zwei verzerrte Wörter und ein einziges Texteingabefeld rahmen die Aufgabe als kurze Entzifferungsprüfung; das Interface legt nicht offen, welches Wort kontrolliert und welches neu transkribiert wird.
- **Interaction -> Operation:** Das Tippen beider Wörter erzeugt operativ zwei verschiedene Beiträge: eine prüfbare Antwort für den Zugang und, bei bestandenem Kontrollwort, eine noch unsichere Stimme zur Buchdigitalisierung.
- **Surface -> Operation:** Die sichtbare Aufforderung, die eigene Menschlichkeit zu beweisen, deckt nur eine Funktion ab. Dieselbe Eingabe wird im Hintergrund aggregiert, mit OCR-Vorschlägen kombiniert und gegebenenfalls zur Referenz für spätere Aufgaben.

## Direkt gestützte Aussagen

| ID | Aussage in eigenen Worten | Belegstelle | Evidenzart | Ebene | Einschränkung |
| --- | --- | --- | --- | --- | --- |
| RECAPTCHA-P1 | Ein CAPTCHA ist eine Challenge-Response-Prüfung, bei der Menschen verzerrte Zeichen eingeben, um sich von automatisierten Programmen zu unterscheiden. | S. 1465 | technische Einordnung | S -> I | Beschreibt den damaligen textbasierten CAPTCHA-Typ, nicht alle CAPTCHA-Verfahren. |
| RECAPTCHA-P2 | reCAPTCHA zeigt ein unbekanntes OCR-Problemwort zusammen mit einem bekannten Kontrollwort in zufälliger Reihenfolge. | S. 1466, Abb. 1 | Systembeschreibung | S / O | Die konkrete Abbildung ist nur ein Beispiel. |
| RECAPTCHA-P3 | Eine korrekte Kontrollantwort lässt die Person passieren und macht ihre zweite Antwort zu einer plausiblen Transkriptionshypothese. | S. 1466 | Prozessspezifikation | I -> O | Die unbekannte Antwort gilt noch nicht unmittelbar als endgültige Transkription. |
| RECAPTCHA-P4 | Mehrere menschliche Antworten und OCR-Vorschläge werden gewichtet; bei mindestens 2,5 Stimmen wird eine Schreibweise gewählt, nach sechs Ablehnungen kann ein Wort verworfen werden. | S. 1466 | Systembeschreibung | O | Gewichtung und Schwellen gelten für das beschriebene System von 2008. |
| RECAPTCHA-P5 | In der Prüfung von 24.080 Wörtern erreichte reCAPTCHA 99,1 Prozent Wortgenauigkeit gegenüber 83,5 Prozent für das Vergleichs-OCR. | S. 1466–1467 | Systemevaluation | O | 50 Artikel aus fünf Jahrgängen des *New York Times*-Archivs; kein allgemeiner OCR-Benchmark. |
| RECAPTCHA-P6 | Nach einem Jahr waren mehr als 1,2 Milliarden CAPTCHAs gelöst und mehr als 440 Millionen verdächtige Wörter entziffert worden. | S. 1467 | Deploymentmessung | O | Historische Deploymentzahl; die Hochrechnung auf Bücher beruht auf Annahmen der Autoren. |
| RECAPTCHA-P7 | Im Vergleich zweier Gruppen von je 1.000 Personen unterschieden sich die mittleren Lösungszeiten von reCAPTCHA und konventionellem CAPTCHA nicht statistisch signifikant. | S. 1467 | Nutzungszeitvergleich | I | Getrennte Gruppen auf `captcha.net`; kein kontrollierter Within-Subjects-Vergleich und keine Wahrnehmungsstudie. |
| RECAPTCHA-P8 | Die berichtete Gesamterfolgsrate betrug 96,1 Prozent; nach Ländergruppen aggregierte IP-Daten zeigten niedrigere Werte für nicht englischsprachige Länder. | S. 1467 | Deploymentmessung | I | Länder-IP ist nur ein grober Proxy; Millionen Fälle machen kleine Unterschiede statistisch signifikant. |

## Verhältnis zur Grundstruktur

Die Quelle ist ein besonders deutlicher Fall für die Differenz zwischen sichtbarer und operativer Bedeutung von Texteingabe. Was auf der Surface als Zugangshürde erscheint und interaktiv als kurze Abschrift vollzogen wird, wird operativ zugleich als mehrfach bestätigter Datenbeitrag zur Digitalisierung wiederverwendet. Der Fall zeigt damit nicht nur eine Verarbeitung von Text, sondern eine institutionell bestimmte Umdeutung derselben Eingabe.

## Grenzen und Gegenprüfung

Der Artikel dokumentiert das ursprüngliche reCAPTCHA von 2008. Er darf nicht zur Beschreibung heutiger Bild-, Checkbox- oder risikobasierter reCAPTCHA-Systeme verwendet werden. Die Autoren berichten weniger Beschwerden und positive Blogreaktionen nur anekdotisch; daraus lässt sich keine belastbare Aussage über Akzeptanz oder Wahrnehmung ableiten. Sicherheitslage, OCR-Leistungsstand, Produktbetrieb und Datenschutzkontext benötigen bei einer gegenwartsbezogenen Verwendung eigene, datierte Quellen.

## Entscheidung

**Kernquelle als historischer Fallkontrast.** Funktion: direkte Verbindung von Surface, Eingabehandlung und einer für die Person nur teilweise sichtbaren operativen Zweitverwendung. Verbleibende Lücke: gegenwärtige CAPTCHA-Verfahren und direkte Wahrnehmung dieser doppelten Funktion.
