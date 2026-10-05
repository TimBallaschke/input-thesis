# AI-Dokumentation im Browser

Zusätzliche Satzfassung der bestehenden `ai-documentation/documentation.tex`:
34 Archive mit Nachrichtenverläufen, übernommenen Textentwürfen und externem
Feedback. Die Satzfassung enthält keine redaktionellen Hinweise, technischen
Metadaten oder generierten Archivvorspänne.
Der historische LaTeX-/PDF-Bestand und die Originalarchive werden nicht geändert.
Der aktuelle technische Satz-Chat ist separat als CDX-05 archiviert; er ist noch
nicht Teil dieser übernommenen historischen Dokumentationsausgabe.

Vorschau: http://127.0.0.1:8768/ai-documentation/preview.html

369 A4-Seiten, Arketa 6 pt, zwei 83,5-mm-Spalten, 5 mm Spaltenabstand;
links 30 mm, oben/rechts/unten 8 mm. Grundlinie 281/102 mm, etwa 130,2 %; 99 Zeilen je Spalte.
Zeilenziffern stehen links in einer sechs Zeichen breiten Gasse mit einem
Zeichen Abstand zum Text. Keine Trennlinien, eine Leerzeile zwischen Nachrichten.
Die Seitenzahl steht mit 10 pt im Satzspiegel, ihre Unterkante 8 mm über dem
Papierboden. Der Text und die Zeilennummern bleiben bei 6 pt.
Zeilennummern und Nachrichtenköpfe sind in 30 % Grau (`#b3b3b3`) gesetzt;
Fließtext und Seitenzahlen bleiben schwarz. P-0210 / W-228.
User-Nachrichten verwenden die volle normale Textbreite ohne zusätzlichen
Einzug. Das Plugin setzt User- und Assistant-Nachrichten in derselben Breite;
die Absenderrollen bleiben im Archiv erhalten.
Bearbeitung erfolgt über Prompts und die Quelldateien, ohne Bearbeitungsinterface.

Nachrichtenköpfe zeigen nur den Absender: `Assistant` oder `User`.
Nachrichtennummern bleiben ausschließlich als interne Archivkennungen erhalten. Alle 2.437 Köpfe stehen in einer Zeile,
ohne führende Nullen. Vollständige Zeitstempel und technische Statusangaben
bleiben unverändert in den Originalarchiven. Nachrichtentexte bleiben erhalten;
nur die Anzeige der Köpfe wird ersetzt.

Seit P-0208 setzt das unveränderte Originalplugin die Dokumentation mit
`mode: 'justified'` im Blocksatz. Zusammenhängende Archivzeilen werden innerhalb
eines Absatzes verbunden und neu umbrochen; Leerzeilen und Nachrichtenköpfe
bleiben Absatzgrenzen. Die letzte Absatzzeile läuft normal aus. Lange
Maschinenzeichenfolgen, die über die Textspalte hinauslaufen, werden ausschließlich
in der betroffenen Druckzeile quellenerhaltend geteilt und erneut vom Plugin
gesetzt. Der umgebende Absatz bleibt im Plugin-Blocksatz.

## Stabile Verknüpfung

Die Ziffern links bezeichnen seit P-0206 die **tatsächlich gesetzten Zeilen**:
1, 2, 3 usw., fortlaufend pro Archiv, zuerst die linke, dann die rechte Spalte.
Jede Fortsetzungszeile erhält eine eigene Nummer. Leere Trennzeilen zählen mit;
unbenutzte Bereiche am Archivende und die Fußzeile werden nicht nummeriert.
Die Zeilennummern haben keine führenden Nullen.

Die bisherigen kanonischen Archivkennungen bleiben im Hintergrund erhalten,
beispielsweise `CGPT-15-L000122`. Eine solche Archivzeile kann mehrere aktuelle
Druckzeilen umfassen. `locations.json` übersetzt die festen Kennungen in die
aktuellen sichtbaren Zeilennummern und Seitenpositionen. Deshalb sind ältere
Zeilenkennungen weiterhin verwendbare Linkziele, obwohl sichtbare Nummern bei
Satzänderungen neu berechnet werden.

`section-provenance.json` vergibt SEC-Kennungen zunächst für die 13 Unterkapitel,
zusätzlich für Einleitung und Schluss. Jeder Abschnitt enthält mehrere
Nachrichtenbeziehungen mit Archiv-/Nachrichtenkennung, ursprünglichem
Zeilenbereich, Trefferzeile und Linkziel. Im Browser werden daraus die aktuellen
gesetzten Zeilenbereiche und Trefferpositionen angezeigt. Die 13 Unterkapitelüberschriften der
Masterarbeit führen direkt zum jeweiligen Register. Der Satz selbst erhält
dadurch keine zusätzlichen sichtbaren Verweiszeichen.

Die Kennung verbindet Inhalt mit Inhalt. `locations.json` wird beim Satz neu
erzeugt und enthält dazu aktuelle Seite, Spalte und physische Druckzeile.
Seitenzahlen werden weder als Identität noch als manuell gepflegte Linkziele
verwendet. Vor dem Export werden Positionen neu erzeugt und geprüft.
SEC-Kennungen werden aus dem dauerhaften Register beibehalten; Umbenennungen
sind ausdrücklich mit derselben Kennung zu pflegen. Neue Abschnitte erhalten
eine neue Kennung. Die bisherige TXT-001-Registrierung bleibt bestehen.

## Inhaltlicher Stand der Zuordnung

Das erste Register enthält 2.665 **Fundstellenkandidaten**. Erfasst werden
identische Folgen von zwölf Wörtern, ausdrückliche Abschnittsnennungen und
gemeinsame präzise Literaturangaben. Ein Sprung führt nach Möglichkeit zur
konkreten Trefferzeile, zusätzlich bleibt die ganze Nachricht referenziert.
Recherche und Formulierung sind beide im Kandidatenbestand vertreten.

Alle Kandidaten sind als `located_evidence_pending_context_review` markiert.
Gemeinsame Literatur beweist weder einen Abschnittsbezug noch die Übernahme
einer Formulierung. Zitate bereits gelieferter Texte sind von Vorschlägen des
Assistenten zu unterscheiden. Indirekte konzeptionelle Einflüsse können mit
diesen Suchregeln übersehen werden. Die Kontextprüfung und abschließende
Zuordnung sind daher noch offen; dieses Register ist keine vollständige,
geprüfte Entstehungsgeschichte und kein zusätzlicher wissenschaftlicher Beleg.
Die früher dokumentierten fehlenden Uploads und möglichen Chat-Zweige bleiben
als Archivlücken bestehen.

## Satzlauf und Prüfung

Beim vorhandenen lokalen Vorschau-Server:

```sh
python3 ai-documentation/web-typesetting/prepare.py
node ai-documentation/web-typesetting/build.mjs
python3 ai-documentation/web-typesetting/build_trace.py
node ai-documentation/web-typesetting/verify.mjs
```

Node/Playwright-Pfade in den Skripten entsprechen der lokalen Codex-Laufzeit.
Nach Änderungen des Registers sind die Unterkapitelverweise mit dem bestehenden
`thesis/typesetting-compat/prepare_test.py` und Browser-Satzlauf zu aktualisieren.

Der Satzkern des Originalplugins setzt den Text vor der Seiteneinteilung.
Der optische Randausgleich ist mit `opticalMargin: false` ausgeschaltet.
Satzzeichen und Bindestriche erhalten keine zusätzliche Randkorrektur.
`plugin_adapter.py` enthält weiterhin die vorbereitete Arketa-Anpassung;
sie ist bei dieser Einstellung deaktiviert. Die Prüfung kontrolliert die
Plugin-Einstellung und die gesetzten Zeilen ohne optischen Randausgleich.
Die Ursprungsdatei im Web-to-Print-Projekt bleibt unverändert und wird per
Prüfsumme kontrolliert.
Die AI-Dokumentation verwendet feste A4-Seiten mit einer eigenen Zeilenzuordnung;
die Masterarbeit behält ihren bestehenden Vivliostyle-Satz. Lange Maschinen-
zeichenfolgen werden bei Bedarf quellenerhaltend geteilt und ebenfalls vom
Plugin gesetzt. Der Textvergleich erlaubt sichtbare Trennstriche, normale
Leerraumdarstellung und unsichtbare weiche Trennzeichen. Bei Nachrichtenköpfen
prüft er ausdrücklich die gekürzte Darstellung; alle übrigen Zeilen und ihre
Plugin-Styles werden gegen den aktuellen vollständigen Plugin-Satz
verglichen. Zeichenbereiche jedes Absatzes ordnen seine Druckzeilen den
ursprünglichen Archivzeilen zu; auch eine Druckzeile mit mehreren Archivzeilen
behält sämtliche zugehörigen Linkziele. `*-composition.json` enthält den Satz der Originaltexte,
`*-display-composition.json` den Satz mit den gekürzten Nachrichtenköpfen.

`verification.json` prüft sämtliche Nachrichtentexte, die 2.437 gekürzten Köpfe,
exportierte Zeilen und Plugin-Styles, Archiv-Prüfsummen, alle Registerziele
und den Browser-Sprung.
Jede sichtbare Zeilennummer wird gegen die tatsächliche Druckzeile geprüft;
Registeranzeige und angesprungene Zeilennummer müssen übereinstimmen.
64 repräsentative Seiten wurden auf Schrift, Ränder, Spalten, optischen
Randausgleich, Trennlinienfreiheit und Fußzeile geprüft. Fünf aktuelle Seiten sind unter
`output/ai-documentation-web/qa/` bildlich geprüft.

## PDF-Ausgabe

Die schnelle Vorschau lädt Seiten bei Bedarf. Für einen späteren PDF-Export
gibt es eine vollständig ladende Druckfassung:
http://127.0.0.1:8768/ai-documentation/print.html

Nach Verschwinden des Ladehinweises sind sämtliche Seiten verfügbar.
Kein PDF wurde bei dieser Änderung exportiert. Der spätere PDF-Export muss
zusätzlich die tatsächlichen PDF-Linkziele prüfen; Browser-Linkprüfungen
ersetzen diesen Nachweis nicht. Für eine Website-Veröffentlichung sind die
lokalen Vorschauadressen durch die veröffentlichte Adresse zu ersetzen.
