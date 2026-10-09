# Titel- und Kapitelblätter für „Input“

Separate HTML-Druckvorlage für acht A6-Blätter im Hochformat, 105 × 148 mm:
Input / Tim Ballaschke, Surface, Interaction, Operation, Conclusion,
Bibliography, KI-Dokumentation und ein leeres Schlussblatt. Dessen Rückseitengestaltung ist
noch offen. Die Matrikelnummer steht auf der Rückseite auf gleicher Höhe wie der Name vorne.
Einleitungsblatt und Seitenzahlen sind nicht enthalten; weitere formale Angaben stehen noch aus.

## Satz und Platzierung

- Arketa 10 pt wie der aktuelle Fließtext, normale Stärke; Überschriften in
  Versalien. „INPUT“ ist vierfach gesperrt: 2,6 em, entsprechend vier
  Arketa-Leerzeichen zwischen den Buchstaben und doppelt so weit wie zuvor.
  Die Kapitelüberschriften
  sind einfach gesperrt: 0,65 em, entsprechend einem Arketa-Leerzeichen.
  Der Name „Tim Ballaschke“ wird in normaler Groß- und Kleinschreibung ohne Sperrung gesetzt.
- „KI-Dokumentation“ folgt auf „Bibliography“. Die längere Überschrift wird
  zweizeilig als „KI-“ / „DOKUMENTATION“ gesetzt, damit Arketa 10 pt,
  die einfache Sperrung und die Bund- und Außenabstände erhalten bleiben.
  „DOKUMENTATION“ wird vertikal auf derselben Höhe wie die einzeiligen
  Kapitelüberschriften zentriert; „KI-“ steht eine Zeile darüber.
- „INPUT“ steht für sich vertikal mittig wie die Kapitelüberschriften.
  Die obere Zeile „MASTER THESIS“ wurde entfernt.
  „Tim Ballaschke“ steht allein unten, 6 mm über dem Blattrand.
  Auf der Rückseite steht „Matr.-Nr. 2455025“ auf exakt gleicher Höhe.
  Beide sind ungesperrt und in Arketa 10 pt gesetzt; der Rückseitenrahmen
  ist für die Bindung gespiegelt (8 mm links, 30 mm rechts).
  Sterne und Leerzeilen sind nicht enthalten.
- Der genaue Wortlaut einer zusätzlichen Hochschulzeile ist noch zu klären.
- Die Titelrückseite enthält die Matrikelnummer unten; ihre Lochmarkierungen liegen rechts.
- Der Titel wird unabhängig vom Namen vertikal auf der A6-Seite zentriert.
  Die Kapitelblätter behalten ihre
  mittigen Überschriften ohne Sterne.
  Horizontal wird im Satzbereich mit 30 mm Bundabstand und 8 mm Außenabstand
  zentriert.
- Auf dem A4-Trägerblatt wird A6 linksbündig und vertikal mittig eingelegt:
  74,5 mm Abstand oben und unten. Vom rechten Rand der ersten Textspalte
  bleiben 8,5 mm sichtbar, etwa 10,2 % ihrer 83,5 mm Breite.
- Die Vorschau nimmt zwei Löcher mit 80 mm Abstand, 6 mm Durchmesser und
  12 mm Abstand der Mittelpunkte vom linken Rand an. Ihre Mittelpunkte
  liegen auf A6 bei 34 / 114 mm von oben; Lochrandabstand oben/unten 31 mm.
  Das tatsächliche Lochschema ist noch nicht ausdrücklich bestätigt.

## Vorschau und Druck

`template.html` ist die editierbare Quelle. Die Schrift wird beim direkten
Öffnen aus `website/assets/fonts/Arketa.otf` geladen. Für die vorhandene
lokale Browservorschau:

```sh
python3 thesis/chapter-sheets/prepare_preview.py
```

Die Dateien werden ausschließlich nach `tmp/vivliostyle-compat/web/chapter-sheets/`
kopiert. Ein bereits laufender Vorschau-Server muss dafür nicht neu gestartet
werden. URL: <http://127.0.0.1:8768/chapter-sheets/template.html>.

Auf A6, Hochformat, mit 100 % Maßstab und ohne Browser-Kopf-/Fußzeilen
drucken. Die blaue Papierfarbe, Lochmarkierungen und Vorschau-Beschriftungen
werden nicht mitgedruckt. Es entstehen schwarze Vorderseiten für farbiges
Papier und ein leeres Schlussblatt. Für spätere Duplex-Ausgabe müssen die
weiteren Rückseiten noch festgelegt werden.

„Vorderseiten drucken“ gibt weiterhin die acht Blattvorderseiten aus.
„Titel beidseitig drucken“ gibt nur Titelvorderseite und Titelrückseite
in dieser Reihenfolge aus: A6, 100 %, Duplex an der langen Kante.
Die neun sichtbaren Seitenflächen entsprechen weiterhin acht physischen Blättern.
Für einen vollständigen Satz das Titelpaar separat beidseitig drucken;
im Vorderseitendruck anschließend nur Seiten 2–8 einseitig drucken.

Die Hauptvorschau der Masterarbeit bleibt unabhängig von dieser Vorlage.
Ein PDF-Export erfolgt erst auf ausdrücklichen Wunsch.

## PDF mit Schnittmarken

Der am 8. Oktober 2026 aktualisierte Export liegt unter
`output/pdf/input-a6-schnittmarken.pdf`. Er enthält 16 A4-Seitenflächen für
acht physische A6-Blätter: Titelvorderseite mit Name und Matrikelnummer auf der
Rückseite, anschließend die Kapitelblätter mit leeren Rückseiten und das
leere Schlussblatt. Jede A6-Fläche liegt mittig auf einem A4-Bogen.

Auf A4 mit 100 % / tatsächlicher Größe und Duplex an der langen Kante drucken.
An den Schnittmarken auf 105 × 148 mm zuschneiden. Die Markierungen liegen
2 mm außerhalb des Endformats, sind 5 mm lang und 0,25 pt stark. Papierfarbe
und Lochmarkierungen werden nicht gedruckt. Die Schnittmarken werden direkt als PDF-Pfade mit geprüften 0,25 pt
Strichstärke gesetzt, damit der Browser sie nicht zu Gerätehaarlinien rundet.
Schrift und Schnittmarken sind als Vektoren enthalten; die PDF besitzt exakte A4-MediaBoxen und A6-TrimBoxen.

`export_pdf.py` erzeugt den Export aus der aktuellen HTML-/CSS-Vorlage.
Es benötigt Python mit `pypdf` und Chrome/Chromium als isolierten lokalen
Dateirenderer; die bestehende Browser-Sitzung wird nicht verwendet.
Nach Vorlagenänderungen muss der PDF-Export ausdrücklich neu angefordert
werden. Geometrie, Text, eingebettete Schrift und alle 16 gerenderten Seiten
sind geprüft; `pdf-export-results.json` enthält die Prüfdaten und Quell-Hashes.

## Formale Titelangaben

Vorderseite: „Input“ und „Tim Ballaschke“;
Rückseite: „Matr.-Nr. 2455025“.
Für eine spätere Erweiterung der Titelrückseite
empfiehlt sich die Zuordnung als Masterarbeit/Master of Fine Arts, Hochschule,
Studienschwerpunkt, Matrikelnummer, Erst- und Zweitprüfung sowie Abgabedatum.
Dies ist eine Gestaltungsempfehlung, keine bestätigte Pflichtangabenliste.
Die öffentlich verlinkte HFBK-Master-Prüfungsordnung (22. April 2021, §§ 20–21)
und das Anmeldeformular enthalten keine eigene Titelblatt-Checkliste:

- <https://hfbk-hamburg.de/media/pages/downloads/b42d48bf3f-1761912734/pruefungsordnung_master_bildende_kuenste_2021.pdf>
- <https://hfbk-hamburg.de/media/pages/downloads/19ba42e027-1762786918/master_anmeldeformular_abschlusspruefung_deutsch.pdf>

Besondere Vorgaben aus dem Zulassungsschreiben bleiben zu prüfen.
