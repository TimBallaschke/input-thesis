# Masterarbeit „Input“: Browser-Satz mit Web-to-Print und Vivliostyle

Stand: 5. Oktober 2026. Vollständiger Satz der finalen Pages-Datei.

## Aktueller Inhalt und Prüfung

Die Quelle ist `presentation/261005_Master_Thesis.pages`, ausgelesen ohne Änderung.
Enthalten sind Einleitung, Surface, Interaction, Operation und Schluss mit allen
127 Textabsätzen, 13 Unterkapiteln und 89 Quellenverweisen. `manuscript.json`
speichert den strukturierten Originaltext und alle Quellenzuordnungen dauerhaft.
35 vorhandene Bibliographieschlüssel wurden zugeordnet; „exemplarisch“ bleibt
als Zusatz im entsprechenden Kurzbeleg erhalten. Keine neue Quellenbewertung.

Die Browserfassung umfasst 24 A4-Seiten mit fünf Titelseiten und 1.700 Plugin-
Textzeilen. Der Absatztext wurde vollständig gegen die finale Pages-Fassung
geprüft; alle 89 Hin- und Rückverweise sind erreichbar. Alle 24 Seiten wurden
visuell geprüft. Zwei zu breite Fallback-Zeilen wurden durch eine größere
Flattersatz-Zone für die betreffenden Absätze behoben. `layout-results.json`
enthält die Prüfung; `audit_browser.mjs` erzeugt Seitenbilder unter `tmp/`.

## Gestaltung

- Einseitiges A4, links 30 mm, oben/rechts/unten 8 mm.
- Arketa aus `website/assets/fonts/Arketa.otf`, Fließtext 10 pt.
- Zwei Spalten à 83,5 mm, 5 mm Abstand; Grundabstand 13,058 pt (130,6%).
- Keine Absatzleerzeilen; Einzug von etwa vier Zeichenbreiten (verdoppelt). Abschnittsanfänge bündig.
- Hauptkapitel allein auf eigener Seite, in der Blattmitte.
- Unterkapitel in Versalien, zentriert und um eine zusätzliche Zeichenbreite gesperrt;
  Fortlaufender Satz über die Spalten; Leerzeile, zentriert `* * *`, Leerzeile, Text.
- Seitenzahl 01–09, dann 10 usw., innerhalb des Satzspiegels, Unterkante 8 mm
  über der Blattunterkante. Zwei freie Grundzeilen darüber.
- Fließtext linksbündig. Quellen am Unterkapitelende als ein zusammenhängender
  Absatz mit 7 pt über die volle Spaltenbreite: `[01] Quelle [02] Quelle …`.
  Das ursprüngliche Plugin setzt diese Absätze mit `mode: 'justified'` im Blocksatz;
  reguläre Leerzeichen trennen Nummern und Angaben sowie aufeinanderfolgende Belege.
  Nummern bleiben klickbar, Textverweise ebenfalls zweistellig.
  Leerzeile / `* * *` / Leerzeile vor den Quellen; nach den Quellen sechs
  Leerzeilen bis zum nächsten Unterkapitel, ohne weitere Sterne. Quellenabsätze bleiben zusammen und mit den
  letzten beiden Textzeilen verbunden.

Die Schrift- und Glyphenoptionen des ursprünglichen Plugins bleiben erhalten.
Der Exportadapter reserviert den Einzug vor dem Satz mit einem temporären Präfix
und entfernt es vor der Quellenverknüpfung. Die Flattersatz-Zone ist grundsätzlich
36 px; bei zwei Absätzen automatisch 48 px, um einen übervollen Fallback zu vermeiden.
Der ursprüngliche Plugin-Code bleibt unverändert. Der Adapter stellt sowohl
Fließtextverweise als auch die Quellen-Rückverweise nach dem Plugin-Satz wieder
her und speichert die Quellenzeilen separat im Satzprotokoll. Bei Abschnittsendnoten erfolgt
keine nachträgliche Streckung des Fließtextes oder Verschiebung der Quellen
an den Spaltenboden. Quellen und Separatoren bleiben im normalen Textfluss.

## Bearbeitung und Vorschau

Bearbeitung erfolgt über Prompts; der Browser ist eine reine Vorschau mit
klickbaren Quellenverweisen. Keine eigene Bearbeitungsoberfläche.

Die 13 Unterkapitelüberschriften öffnen zusätzlich das jeweilige vorläufige
Fundstellenregister der AI-Dokumentation. Der zusätzliche Dokumentationssatz
und seine stabilen Kennungen sind in `ai-documentation/web-typesetting/README.md`
beschrieben. Die Quellenziffern im Fließtext bleiben wissenschaftliche
Quellenverweise; das AI-Register ist zunächst eine noch zu prüfende Zuordnung.

```sh
python3 thesis/typesetting-compat/serve_preview.py
```

Adresse: http://127.0.0.1:8768/preview.html. Aktualisieren nach einem neuen Satzlauf.
Der Server bindet ausschließlich an localhost. Die Schriftdateien bleiben lokal.

Bei laufendem Server:

```sh
python3 thesis/typesetting-compat/prepare_test.py
node thesis/typesetting-compat/check_browser.mjs
node thesis/typesetting-compat/audit_browser.mjs
```

Die Composer-Zeilen werden vor der Vivliostyle-Pagination eingefroren. Der Browser
zeigt eine fortlaufende Kopie aller Seiten; Verweisziele bleiben anklickbar.
Die Vorschau verwendet Core 2.45.2. Node/Playwright/Python-Pfade in den Skripten
sind lokale Laufzeitpfade und bei einem Maschinenwechsel anzupassen.

## PDF nur auf Anfrage

Die vorhandene `output/pdf/Input_Arketa_Zweispaltig.pdf` zeigt einen älteren
Ausschnitt. Beim vollständigen Manuskripttransfer wurde kein PDF exportiert.
Ein ausdrücklich angeforderter Export erfolgt aus demselben eingefrorenen Satz:

```sh
cp tmp/vivliostyle-compat/web/frozen.html tmp/vivliostyle-compat/web/p.html
tmp/vivliostyle-compat/runtime/node_modules/.bin/vivliostyle build http://localhost:8768/p.html --single-doc --no-vite-config-file --executable-browser '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome' --timeout 60 --output output/pdf/Input_Arketa_Zweispaltig.pdf
/Users/timballaschke/.cache/codex-runtimes/codex-primary-runtime/dependencies/python/bin/python3 thesis/typesetting-compat/verify_pdf.py
```

PDF-Renderer: CLI 11.3.3 mit Viewer/Renderer 2.45.1 und lokalem Chrome. Die
fertige PDF ist zusätzlich visuell zu prüfen. Die aktuelle Browserprüfung ist
kein Nachweis einer noch nicht exportierten vollständigen PDF.

## Historischer Kompatibilitätsnachweis

### Erster Test: Garamond

Das vorhandene Flattersatz-Plugin kann mit Vivliostyle kombiniert werden, wenn
der Text **vor** der Seiteneinteilung gesetzt wird. Im geprüften Ablauf bleiben
alle 100 Zeilen des Plugins einschließlich ihrer Trennungen erhalten. Vivliostyle
übernimmt anschließend Seiten, Fußnoten und PDF-Ausgabe.

Das einfache Einbinden des Moduls als Script im von Vivliostyle geladenen HTML
funktioniert in dieser Testkonfiguration nicht zuverlässig: Das Script läuft im
Viewer-Dokument, sieht bereits fragmentierte Absätze und setzt nur die sichtbare
erste Seite. Dieser Befund betrifft die getestete Einbindung, nicht jede denkbare
Integration über die Core-API.

### Damaliger Testablauf

1. Feste Satzbreite von 166 mm und vollständig geladene Testschrift.
2. Unverändertes `web-to-print/public/auto-typeset.js` setzt die Absätze im Browser.
3. Ein separater Exportadapter ergänzt die Quellenlinks in den bereits gesetzten
   Zeilen und hält die ersten und letzten zwei Absatzzeilen zusammen. Er verändert
   weder den Zeileninhalt noch die Satzberechnung des Plugins.
4. Der Adapter friert den fertigen Satz ein, entfernt die doppelte, verborgene
   Textfassung des Plugins und beendet dessen Größenbeobachtung.
5. Vivliostyle verarbeitet dieses HTML und platziert die semantisch markierten
   Fußnoten mit `footnote-policy: line`.

Der Adapter bleibt hier im Testverzeichnis. Am ursprünglichen Plugin wurde nichts
geändert. Seine SHA-256 lautet
`39afa960ba2c1d0cedde9295650845fdf2820cbc0d822543217b7fa62ec832c0`.

## Nachgewiesene Prüfungen

- Auszug aus `presentation/261005_Master_Thesis.pages`: 15 Absätze, acht
  Quellenanmerkungen, sieben zitierte Quellen.
- 100 gesetzte Zeilen vor und nach Vivliostyle, in derselben Reihenfolge.
- Der aus dem PDF extrahierte Haupttext enthält dieselben 100 Zeilen. Die vom
  Renderer separat gesetzten Fußnotenziffern werden beim Textvergleich ausgenommen.
- Glyphenskalierung bleibt gleich; Laufweite, Wortabstand und optischer Randausgleich
  bleiben erhalten. Die größte gemessene Breitenabweichung beträgt 0,024 CSS-Pixel;
  Schriftgröße und Zeilenabstand unterscheiden sich durch die Renderer-Präzision
  um maximal 0,002 CSS-Pixel. Unterschiedliche Serialisierung von `em`, `px` und
  `calc()` ist deshalb kein verlorener Satzparameter.
- Alle acht Fußnoten haben ihre Ziele auf der Seite ihres Verweises.
- Alle 26 internen PDF-Links haben ein vorhandenes Ziel; sechs externe Quellenlinks
  sind ebenfalls vorhanden. Die sieben Bibliographieziele sind erreichbar.
- Alle fünf A4-Seiten wurden gerendert und visuell geprüft.
- Vivliostyle CLI 11.3.3; Viewer/Renderer 2.45.1; PDF-Export mit lokalem Chrome.
- Testschrift: lokal vorhandene ITC Garamond Book. Keine Entscheidung über die
  endgültige Schrift oder den Zitierstil.

Das geprüfte PDF liegt unter `output/pdf/Input_Plugin_Vivliostyle_Test.pdf`.
Maschinelle Ergebnisse dieser Ausgabe stehen in `results.json`.
