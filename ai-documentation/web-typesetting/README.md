# AI-Dokumentation im Browser

Zusätzliche Satzfassung der bestehenden `ai-documentation/documentation.tex`:
34 Archive mit Nachrichtenverläufen, übernommenen Textentwürfen und externem
Feedback. Die Satzfassung enthält keine redaktionellen Hinweise, technischen
Metadaten oder generierten Archivvorspänne.
Der historische LaTeX-/PDF-Bestand und die Originalarchive werden nicht geändert.
Der aktuelle technische Satz-Chat ist separat als CDX-05 archiviert; er ist noch
nicht Teil dieser übernommenen historischen Dokumentationsausgabe.

Vorschau: http://127.0.0.1:8768/ai-documentation/preview.html

383 A4-Seiten, Arketa 6 pt, zwei 83,5-mm-Spalten, 5 mm Spaltenabstand;
für doppelseitigen Druck mit linker Bindung: innen 30 mm, außen 8 mm,
oben/unten 8 mm. Auf ungeraden Seiten liegt der breite Rand links, auf
geraden rechts. Die erste Seite ist die Vorderseite; der Wechsel richtet
sich nach der fortlaufenden Seitenzahl, auch bei Archivwechseln.
Grundlinie 281/102 mm, etwa 130,2 %; 99 Zeilen je Spalte.
Zeilenziffern stehen links in einer sechs Zeichen breiten Gasse mit einem
Zeichen Abstand zum Text. Keine Trennlinien, eine Leerzeile zwischen Nachrichten.
Die Seitenzahl steht mit 10 pt im Satzspiegel, ihre Unterkante 8 mm über dem
Papierboden und wandert mit dem gespiegelten Satzspiegel.
Der Text und die Zeilennummern bleiben bei 6 pt.
Zeilennummern und Nachrichtenköpfe sind in 30 % Grau (`#b3b3b3`) gesetzt;
Fließtext und Seitenzahlen bleiben schwarz. P-0210 / W-228.
Alle Zeilen der User-Nachrichten einschließlich ihrer Überschrift sind um
10 % der nutzbaren Textbreite nach rechts eingerückt. Das Plugin setzt diese
Absätze vor der Seiteneinteilung in 90 % der normalen Textbreite; der rechte
Rand bleibt gleich. Die Zeilennummern bleiben an ihrer bisherigen Position.
Bearbeitung erfolgt über Prompts und die Quelldateien, ohne Bearbeitungsinterface.

Nachrichtenköpfe zeigen nur den Absender: `System` oder `User`, in `#b3b3b3`.
`System` bezeichnet hier die sichtbaren Antworten des Assistenten; die
ursprüngliche Rolle `assistant` bleibt im Archiv erhalten.
Nachrichtennummern bleiben ausschließlich als interne Archivkennungen erhalten. Alle 2.449 Köpfe stehen in einer Zeile,
ohne führende Nullen. Vollständige Zeitstempel und technische Statusangaben
bleiben unverändert in den Originalarchiven. Nachrichtentexte bleiben erhalten;
nur die Anzeige der Köpfe wird ersetzt, abgesehen von den unten dokumentierten
Auslassungen auf Wunsch des Autors.

Die früheren Textimporte CGPT-01 bis CGPT-04 enthalten keine maschinenlesbaren
Absenderrollen. `imported-message-roles.json` dokumentiert 13 aus dem erhaltenen
Text gelesene Sprecherabschnitte mit Archiv-Prüfsummen und Anfangszeilen.
Ihre Rollenüberschriften werden nur für die Anzeige ergänzt. Es handelt sich
um redaktionelle Zuordnungen, nicht um ursprüngliche Plattform-Metadaten.
Der übrige gelieferte Text bleibt erhalten; fehlende Nachrichten werden
nicht rekonstruiert. Separate Entwürfe und Feedbackdateien ohne eindeutigen
Sprecherwechsel erhalten keine erfundenen Nachrichtenrollen.

## Ausgelassene Nachrichten

`display-exclusions.json` hält genau bezeichnete Auslassungen für die sichtbare
Vorschau und Druckfassung fest. Auf Tims Wunsch vom 8. Oktober 2026 entfällt
die erste User-Nachricht aus CGPT-01, einschließlich ihres User-Kopfes.
Sie ist in der geprüften Thesis-Zuordnung nicht referenziert. Die folgende
System-Antwort bildet jetzt den Anfang; es bleibt keine leere Trennzeile davor.
Die Originalarchive und die historischen LaTeX-/PDF-Dateien bleiben unverändert.
Jede Auslassung ist an Archiv-Prüfsumme, Nachrichtenkennung und ursprüngliche
Zeilen gebunden. Ein Satzlauf lehnt die Auslassung ab, wenn dieser Bereich
später in der geprüften Thesis-Zuordnung referenziert wird. Die übrigen Inhalte
und Plugin-Zeilen werden vollständig geprüft; Seiten- und Zeilenverweise
in der Thesis werden anschließend neu erzeugt.

Die Dokumentation steht auf Tims Wunsch wieder im Flattersatz
(`mode: 'ragged'`). Das Plugin verwendet eine 28-CSS-Pixel-Flatterzone,
0 Pixel Varianz an der langen Kante und 8 Pixel an der kurzen Kante.
Wortabstände werden nicht gedehnt. Zusammenhängende Archivzeilen werden
innerhalb eines Absatzes verbunden und neu umbrochen; Leerzeilen und
Nachrichtenköpfe bleiben Absatzgrenzen. Die letzte Absatzzeile läuft normal aus.
Lange Maschinenzeichenfolgen, die über die Textspalte hinauslaufen, werden
in der betroffenen Druckzeile quellenerhaltend geteilt und erneut vom Plugin
gesetzt. Der umgebende Absatz bleibt im Plugin-Flattersatz.

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
Die Thesis berechnet ihre Hinweise vor jedem Satzlauf aus dieser aktuellen
Zuordnung. Ihre Links enthalten eine Versionskennung; die Dokumentationsvorschau
lädt Katalog, Register, Zeilenpositionen und Seiten ohne zwischengespeicherte
Fassungen. `thesis/typesetting-compat/audit_ai_references.mjs` folgt einem
gedruckten Thesis-Link und prüft Anfang und Ende aller 343 Bereiche in der
tatsächlich angezeigten Dokumentation.
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
Der optische Randausgleich ist mit `opticalMargin: true` eingeschaltet.
`plugin_adapter.py` verwendet dieselbe Konturmessung wie die Thesis-Quellen
aus `thesis/typesetting-compat/source_plugin_adapter.py`. Alle Randzeichen
orientieren sich am normalen sichtbaren Innenabstand des „H“. Die Konturen
werden bei 64-facher Schriftgröße gemessen und auf 6 pt zurückgerechnet;
die Satzbreite behält ihren Bruchteil eines CSS-Pixels. Satzzeichen und
Trennstriche erhalten keine pauschal verstärkte Korrektur.
Die Prüfung kontrolliert den Flattersatz, ungedehnte Wortabstände und die
eingeschaltete Konturkorrektur. Im Browser werden die unterschiedlichen
rechten Einzüge und mögliche Überläufe anhand tatsächlicher Schriftkonturen
gemessen. Eine gemeinsame rechte Textkante wird im Flattersatz nicht verlangt.
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

`verification.json` prüft sämtliche Nachrichtentexte, die gekürzten Köpfe,
exportierte Zeilen und Plugin-Styles, Archiv-Prüfsummen, alle Registerziele
und den Browser-Sprung.
Jede sichtbare Zeilennummer wird gegen die tatsächliche Druckzeile geprüft;
Registeranzeige und angesprungene Zeilennummer müssen übereinstimmen.
66 repräsentative Seiten wurden auf Schrift, Ränder, Spalten, optischen
Randausgleich, Trennlinienfreiheit und Fußzeile geprüft. Fünf aktuelle Seiten sind unter
`output/ai-documentation-web/qa/` bildlich geprüft.

## PDF-Ausgabe

Die schnelle Vorschau lädt Seiten bei Bedarf. Der PDF-Export verwendet die
vollständig ladende Druckfassung:
http://127.0.0.1:8768/ai-documentation/print.html

Nach Verschwinden des Ladehinweises sind sämtliche Seiten verfügbar.
Der aktuelle Export vom 8. Oktober 2026 liegt unter
`output/pdf/input-ki-dokumentation.pdf`: 383 A4-Seiten aus der aktuellen
Satzfassung, einschließlich der dokumentierten Auslassung am Anfang.
`export_pdf.mjs` rendert die Druckfassung; `finalize_pdf.py` ergänzt die
unsichtbaren Archivanker und leeren Zeilen als tatsächliche PDF-Ziele.
`verify_pdf.py` prüft alle 72.664 nummerierten Druckzeilen, Seitenzahlen,
A4-Seiten, 62.169 internen Links und die Seiten-/Zeilenpositionen aller
686 Thesis-Verweisendpunkte im PDF. Alle Prüfungen sind bestanden.
Schrift, Duplex-Ränder und Beispiele am Anfang und Ende wurden geprüft;
`pdf-export-results.json` enthält Quell- und PDF-Prüfsummen.
Zum erneuten Export `node ai-documentation/web-typesetting/export_pdf.mjs`
ausführen und anschließend `verify_pdf.py` mit dem gebündelten Python starten.
Browser-Linkprüfungen ersetzen diesen PDF-Nachweis nicht. Für eine Website-Veröffentlichung sind die
lokalen Vorschauadressen durch die veröffentlichte Adresse zu ersetzen.

Für den doppelseitigen Ausdruck die vollständig geladene Druckfassung
verwenden: A4, 100 % Skalierung, beidseitig mit Wenden an der langen Kante,
ohne Browser-Kopf-/Fußzeilen. `duplex.css` verschiebt nur den Satzspiegel
und die Seitenzahl auf Rückseiten; Spaltenbreiten und Zeilenumbrüche bleiben
gleich. Vorschau und Druckfassung erhalten die Seitenseite ausdrücklich
aus der fortlaufenden Seitenzahl, unabhängig von nachgeladenen Seiten.
