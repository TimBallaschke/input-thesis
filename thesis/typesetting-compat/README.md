# Masterarbeit „Input“: Browser-Satz mit Web-to-Print und Vivliostyle

Stand: 8. Oktober 2026. Vollständiger Satz der finalen Pages-Datei.

## Aktueller Inhalt und Prüfung

Die Quelle ist `presentation/261005_Master_Thesis.pages`, ausgelesen ohne Änderung.
Enthalten sind Einleitung, Surface, Interaction, Operation und Schluss mit allen
127 Textabsätzen, 13 Unterkapiteln und 89 Quellenverweisen. `manuscript.json`
speichert den aktuellen Satztext, die ursprünglichen Ausgangsabsätze und alle
Quellenzuordnungen dauerhaft. Autorisierte Textänderungen stehen zusätzlich in
`text-revisions.json`.
35 vorhandene Bibliographieschlüssel wurden zugeordnet; „exemplarisch“ bleibt
als Zusatz im entsprechenden Kurzbeleg erhalten. Keine neue Quellenbewertung.

Die Browservorschau umfasst derzeit 27 A4-Seiten mit den fünf bisherigen Titelseiten,
der zusätzlichen Bibliographie-Titelseite und 1.700 Plugin-
Textzeilen. Der Absatztext wurde vollständig gegen die finale Pages-Fassung
mit den autorisierten Gender- und Korrekturänderungen
geprüft; alle 89 Hin- und Rückverweise sind erreichbar. Hinzu kommen 15 KI-Hinweise
mit 343 Seiten-/Zeilenbereichen aus der inhaltlich geprüften Abschnittszuordnung:
13 Unterkapitel sowie Einleitung und Schluss.
Alle Hinweise und Links, der Seitenumbruch und das gemeinsame Raster wurden
maschinell geprüft; repräsentative Seiten wurden visuell geprüft.
Zu breite Fallback-Zeilen werden durch eine größere
Flattersatz-Zone für die betreffenden Absätze behoben. Die Kontrolle misst
die sichtbaren Zeichenkonturen an beiden Spaltenkanten mit einer Toleranz von
0,15 CSS-Pixeln. `layout-results.json`
enthält die Prüfung; `audit_browser.mjs` erzeugt Seitenbilder unter `tmp/`.

Die freigegebene Korrekturrunde vom 8. Oktober behebt „digitalen Systemen“,
ein überzähliges Schlusszeichen in Absatz 71 und den doppelten Punkt am
Quellenverweis in Absatz 111. „Eine sachliche Aufforderung …“ und die übrige
Einleitung bleiben erhalten. Sechs lokale Laufweitenbasen in
`paragraph-settings.json` beheben isolierte Wortreste an den Absatzenden
6, 63, 88, 92, 110 und 111. Die relativen Spielräume und Satzregeln bleiben
erhalten; `proofreading-results.json` dokumentiert Änderungen und Prüfungen.

Die folgende Spaltenkorrektur auf Seite 14 setzt Absatz 63 mit −0,017 em
statt +0,013 em, weiterhin mit relativer Variation von ±0,01 em. Er braucht
dadurch zehn statt elf Zeilen und endet mit dem ganzen Wort „Reformulierung“.
So bleibt „erfüllt ist“ am Ende von Absatz 65 vollständig links. Der übrige
Text behält seine horizontalen Umbrüche; `erfuellt-column-results.json`
dokumentiert die aktuelle Prüfung.

Auf den anschließend markierten Seiten 20, 22 und 25 beheben fünf weitere
lokale Laufweitenbasen die isolierten Schlusswörter „unterscheiden“,
„werden“, „ausfiel“, „können“ und „verfügt“. Die Absätze 102, 105, 107,
117 und 127 verwenden +0,017, +0,006, +0,013, +0,011 und +0,036 em,
weiterhin mit relativer Variation von ±0,01 em. Alle Zeilenzahlen bleiben
erhalten; die letzte Zeile enthält jeweils zusätzlich ein Wort oder einen
Wortrest. `single-word-ending-results.json` hält die geprüften Varianten
und den aktuellen Stand fest.

## Gestaltung

- Einseitiges A4, links 30 mm, oben/rechts/unten 8 mm.
- Arketa aus `website/assets/fonts/Arketa.otf`, Fließtext 10 pt.
  Absatz `para-021` („Damit wird die Ansprache …“) hat eine lokale Laufweiten-
  korrektur von −0,003 em. `paragraph-settings.json` bindet diese Einstellung
  an den unveränderten Absatztext; der Flattersatz-Assistent berücksichtigt sie
  beim Umbruch. Der Absatz benötigt dadurch 16 statt 17 Zeilen. Im selben Abschnitt reduzieren
  −0,003 em für `para-018` und −0,020 em für `para-020` jeweils eine weitere
  Textzeile. Diese Laufweitenkorrekturen betreffen nur den Fließtext. Die KI-Angaben
  und Quellen dieses Abschnitts liegen vollständig links auf Seite 6;
  `paragraph-tracking-results.json` hält die Prüfung fest.
  Auf Seite 8 sparen `para-038` („Auch nach dem Absenden …“) mit −0,003 em
  und `para-041` („Die Oberfläche macht dabei …“) mit −0,017 em jeweils eine
  weitere Textzeile. Alle Quellen des Abschnitts stehen dadurch auf Seite 8
  in der rechten Spalte. `page8-tracking-results.json` hält die Prüfung fest.
  Absatz `para-074` („Dabei lassen sich …“) verwendet eine Basis von −0,002 em,
  damit der 10-pt-Satz mit dem ganzen Wort „Eingabe.“ statt der einzelnen
  Endsilbe „be.“ schließt. Die Variation bleibt relativ zur Basis ±0,01 em.
  Absatz `para-109` („Zwischen einer Eingabe und ihrem Ergebnis …“) verwendet
  −0,004 em (−4 InDesign-Einheiten), weiterhin mit relativem Spielraum ±10.
  Er schließt in 17 statt 18 Zeilen mit „als geeignet oder erwünscht gilt.“.
  `gilt-paragraph-tracking-results.json` hält die geprüften Varianten fest.
  Absatz `para-116` („Die FTC warf BetterHelp vor …“) verwendet −0,016 em
  (−16 InDesign-Einheiten), mit relativem Spielraum von ±10. Er schließt
  dadurch in 17 statt 18 Zeilen mit „Daten anschließend verwendet werden.“;
  die einzelne Endsilbe „den.“ entfällt. `ftc-paragraph-tracking-results.json`
  dokumentiert die kleinstmögliche Korrektur in den geprüften ganzen Einheiten.
  Quellenverweise im Fließtext als `[01]` bis `[89]`, in Arketa 6 pt wie die
  Quellenziffern. Beide verwenden die nativen Versalklammern der Schrift
  über OpenType `case`. Die CSS-Face `ArketaCase` lädt dieselbe Schriftdatei
  mit dieser Option, damit auch die Canvas-Messung die tatsächlichen Glyphen
  für Breite, Konturabstände und Zentrierung verwendet.
  Der optische Abstand vor der öffnenden Klammer entspricht
  der sichtbaren Lücke zwischen schließender Klammer und folgendem Punkt.
  Ein gemessener Außenabstand gleicht dafür die Zeichenkonturen des vorherigen
  Buchstabens aus; seine Breite wird beim Zeilenumbruch mitgerechnet.
  Der Verweis bleibt mit dem vorherigen Wort verbunden.
  Seine tatsächlichen Zeichenkonturen sind vertikal in der
  festen Textzeile zentriert. Klammern und Ziffern bleiben als Einheit zusammen;
  Quellen- und Rücksprunglinks behalten ihre bisherigen Kennungen.
- Zwei Spalten à 83,5 mm, 5 mm Abstand; Grundabstand 13,500 pt
  (135 % bei 10 pt). 59 Rasterzeilen teilen die 281 mm Satzspiegelhöhe;
  dadurch füllt das Raster den Satzspiegel bei 1,35-fachem Abstand.
- Keine Absatzleerzeilen; Einzug von etwa vier Zeichenbreiten (verdoppelt).
  Abschnittsanfänge und Absätze, die oben in einer neuen Spalte beginnen, sind
  bündig. Der tatsächliche Spaltenanfang wird nach der Paginierung geprüft;
  die gesetzten Zeilen und ihre Verknüpfungen bleiben erhalten.
- Die ersten beiden Absatzzeilen bleiben zusammen. Eine einzelne Schlusszeile
  nach einem Spalten- oder Seitenumbruch ist erlaubt, damit die Vermeidung
  solcher Zeilen keine freie Grundzeile im Satzspiegel erzeugt.
  Die Schlusszeile jedes Haupttextabsatzes muss mindestens den normalen
  Vier-Zeichen-Einzug plus drei Zeichenbreiten erreichen. Maßstab sind die
  gemessenen Schriftbreiten, auch bei bündigen Abschnitts-/Spaltenanfängen.
  Kleine Quellenziffern zählen nicht zur Haupttextbreite. Der lokale
  Plugin-Adapter verwirft zu kurze Abschlusskandidaten; Wortlaut und bisherige
  Laufweiten-/Glyphenskalierungsgrenzen bleiben erhalten. Der Browser-Audit
  misst alle 127 tatsächlich paginierten Absatzenden unabhängig nach.
  `paragraph-ending-rule-results.json` enthält die Prüfung und die Änderungen.
  Zusätzlich enthält die letzte Haupttextzeile jedes der 13 Unterkapitel
  mindestens ein vollständiges Wort. Ein über die Zeilengrenze getrennter
  Wortrest zählt nicht; ein weiteres vollständiges Wort in derselben Zeile
  reicht aus. Quellenziffern und Satzzeichen gelten ebenfalls nicht als Wort.
  Nur die jeweiligen Schlussabsätze erhalten diese zusätzliche Umbruchgrenze.
  `subchapter-ending-rule-results.json` hält die unabhängige Prüfung anhand
  vollständiger Wörter im ungetrennten Manuskript fest.
  Die Sternreihe vor den Anmerkungen zieht eine noch passende Schlusszeile
  nicht mit (`break-before: auto`). Beginnen die Anmerkungen tatsächlich in
  einer neuen Spalte oder Seite, entfallen diese Sternreihe und die beiden
  umgebenden Leerzeilen. Der beobachtete Spaltenumbruch bleibt erhalten;
  die Anmerkungen beginnen direkt oben. `body-note-separator-results.json`
  prüft alle 15 Abschnittsenden. `body-note-break-results.json` hält
  die gezielte Prüfung mit „sind.“ in der letzten verfügbaren Grundzeile fest.
- Quellenangaben am Anfang einer neuen Seite oder Spalte beginnen ohne
  zusätzliche Leerzeile. Der Abstand zwischen KI-Hinweis und Quellen bleibt
  innerhalb derselben Spalte eine kleine Grundzeile.
- Personenbezeichnungen mit Gendersternchen, einschließlich der bisherigen
  Binnen-I-Formen. Das Sternchen ist wie in den Trennreihen U+002A in Arketa;
  es steht auf seiner normalen oberen Schriftposition ohne zusätzliche
  vertikale Verschiebung. Alle 84 Sterne teilen die Grundlinie und Schriftgröße
  ihres Textes; `native-gender-star-results.json` dokumentiert die Prüfung.
  `text-revisions.json` hält die autorisierten Wortlautänderungen mit dem
  jeweiligen Ausgangsabsatz fest; die Pages-Datei bleibt als Quelle erhalten.
- KI-Hinweise hinterlassen keine einzelne Zeile in einer Spalte. Ein solcher
  Anfang oder eine einzelne Fortsetzungszeile wandert in die folgende Spalte;
  eine einzelne Schlusszeile nimmt ihre vorherige Zeile mit. Haupttext und
  Anmerkungen bleiben unabhängig voneinander im normalen Fluss. Die
  Sternreihe entfällt auch dann, wenn eine solche Korrektur den gesamten
  Anmerkungsanfang in die nächste Spalte verschiebt.
- Hauptkapitel allein auf eigener Seite, in der Blattmitte.
- Unterkapitel in Versalien, zentriert und um eine zusätzliche Zeichenbreite gesperrt;
  Fortlaufender Satz über die Spalten; Leerzeile, zentriert `* * *`, Leerzeile, Text.
- Seitenzahl 01–09, dann 10 usw., in Arketa 10 pt innerhalb des Satzspiegels, Unterkante 8 mm
  über der Blattunterkante. Zwei freie Grundzeilen darüber.
  Ihre Laufweite entspricht den Unterkapiteltiteln (`--heading-tracking`);
  ein gleich großer linker Innenabstand gleicht die zusätzliche Endlaufweite
  aus und hält die Ziffern zentriert zwischen den Spalten.
- Fließtext linksbündig. Quellen am Unterkapitelende als ein zusammenhängender
  Absatz mit 6 pt über die volle Spaltenbreite: `[01] Quelle [02] Quelle …`.
  Quellen- und KI-Hinweise in der Masterarbeit: zwei Drittel des Fließtextabstands,
  also 9 pt bei 6 pt Schriftgröße. Drei Anmerkungsabstände entsprechen
  zwei Fließtextabständen. Die separate KI-Dokumentation hat ihre eigenen
  Einstellungen; deren Zeilenabstand wird nicht auf die Masterarbeit übertragen. Die erste
  Quellenzeile folgt nach genau einer kleinen Leerzeile auf den KI-Hinweis,
  ohne zusätzlichen Ausgleich auf eine ganze Fließtextzeile. Der Abstand zum folgenden Unterkapitel beträgt mindestens
  sechs Fließtextrasterzeilen. Er wird dynamisch um weniger als eine
  Rasterzeile vergrößert, bis die nächste Überschrift wieder auf dem Raster liegt.
  Der Rasterausgleich liegt ausschließlich im Abstand nach den Quellen;
  der Mindestabstand wird nie verkleinert.
  Der Plugin-Satzkern setzt diese Absätze mit `mode: 'ragged'` linksbündig im Flattersatz
  ohne Worttrennungen, möglichst abwechselnd mit längeren und kürzeren Zeilen;
  eine lokale Quellenvariante misst den optischen Randausgleich anhand der
  tatsächlichen Arketa-Konturen. Der linke sichtbare Rand orientiert sich am
  normalen Innenabstand des „H“; der rechte Rand flattert.
  reguläre Leerzeichen trennen Nummern und Angaben sowie aufeinanderfolgende Belege.
  Nummern bleiben klickbar, Textverweise ebenfalls zweistellig.
  Leerzeile / `* * *` / Leerzeile vor den Anmerkungen nur bei direktem Anschluss
  an den Haupttext innerhalb derselben physischen Spalte; nach den Quellen mindestens
  sechs Leerzeilen bis zum nächsten Unterkapitel, ohne weitere Sterne.
  Haupttext, Sternreihen, KI-Hinweise und Quellen bilden keine zusammengehaltene
  Gruppe. KI-Hinweise und Quellen dürfen zwischen jeder gesetzten Zeile auf der
  nächsten Spalte oder Seite fortgesetzt werden. Die normalen Regeln für einzelne
  Fließtext-Witwen und -Waisen bleiben unabhängig davon erhalten.
  Die Sternreihen werden anhand der geladenen Arketa-Konturen zwischen ihren
  sichtbaren Textnachbarn vertikal zentriert, wenn beide in derselben Spalte liegen.
  Die optische Verschiebung betrifft nur die Sterne innerhalb ihrer Zeile.
  Eine Sternreihe verbindet ihre Nachbarn nicht über einen Spaltenumbruch hinweg.
- Am Ende jedes der 13 Unterkapitel sowie von Einleitung und Schluss steht der KI-Hinweis in 6 pt,
  ebenfalls über die volle Spaltenbreite und mit demselben Plugin-Satzkern im
  Flattersatz ohne Worttrennungen, möglichst abwechselnd lang und kurz.
  Er umfasst Recherche, Textauswahl, Ausarbeitung und Überarbeitung;
  anschließend folgt eine gemeinsame Liste mit ausgeschriebenen Angaben:
  `Seite …, Zeilen …` beziehungsweise `Seite …, Zeile …` bei einer einzelnen Zeile.
  Überlappende oder direkt anschließende Zeilenbereiche werden zusammengefasst,
  auch über Seitengrenzen: etwa `Seiten 29–32, Zeilen 1939–2549`. Dazu muss die
  ausgewählte Stelle bis zur letzten gedruckten Zeile einer Seite reichen und
  auf der nächsten Seite lückenlos weitergehen. Getrennte Stellen und Archive
  mit neu beginnender Zeilennummerierung bleiben getrennt. Die genaue Abdeckung
  jeder Seite sowie alle zugehörigen Recherche- und Textbezüge bleiben im
  Satzprotokoll erhalten. Die Angaben laufen als normaler Absatz mit freien Umbrüchen;
  auch innerhalb von `Seite 7, Zeilen 1304–1332` darf umbrochen werden. Alle
  Teile einer über mehrere Zeilen verteilten Fundstelle bleiben anklickbar und
  öffnen dasselbe Dokumentationsziel. Der Browser-Audit prüft den vollständigen
  Text jeder Fundstelle und die zugehörigen Links über alle Zeilenfragmente.
  In den Unterkapiteln steht der Hinweis vor den Quellen, getrennt durch genau
  eine Leerzeile mit dem Zeilenabstand des 6-pt-Anmerkungstextes (9 pt).
  Zwischen diesen beiden Blöcken steht keine Sternreihe. Einleitung und Schluss
  erhalten einen eigenen Hinweisblock ohne leeren Quellenabsatz.
  Der Rasterausgleich wird nach der tatsächlichen Paginierung berechnet:
  Spaltenfortsetzungen beginnen wieder im kleinen Anmerkungsraster; nach dem letzten
  tatsächlich gedruckten Fragment ergänzt ein Abstand von null bis weniger als
  einer Grundzeile den nachfolgenden Text auf das Raster. Es gibt keine
  Vierergruppen als Umbruchbedingung und keine zusammengehaltenen Quellenabsätze.
  Wenn die Anmerkungsfolge in die nächste Spalte oder Seite weiterläuft, wird
  ihr auslaufendes Teilstück unten ausgerichtet: Die letzte kleine Textgrundlinie
  trifft auf die letzte verfügbare Fließtext-Grundlinie. Alle Zeilen dieses
  Teilstücks werden um denselben Betrag verschoben; ihr Zeilenabstand und
  die kleine Leerzeile zwischen KI-Hinweis und Quellen bleiben erhalten.
  Der zusätzliche Raum liegt oberhalb des Teilstücks. Die Sternreihe zwischen
  Haupttext und KI-Hinweis wird anschließend erneut optisch zentriert.
  Abschließende Teilstücke bleiben im normalen Textfluss.
  `paginated-flow.mjs` prüft einzelne Anmerkungszeilen am unteren Satzspiegelrand
  und korrigiert nur die betroffene Zeile, falls ihr verschobener Zeilenkasten
  darüber hinausreichen würde. `audit_browser.mjs` prüft Text und Verknüpfungen
  über alle physischen Fortsetzungen eines logischen Anmerkungsabsatzes hinweg.
- Nach dem Schluss folgt eine eigene Titelseite „Bibliography“
  mit derselben mittigen, gesperrten Gestaltung. Anschließend erscheinen die
  35 tatsächlich zitierten Werke und die separate KI-Dokumentation jeweils einmal,
  alphabetisch nach Verfasser oder Körperschaft. Arketa 6 pt, Flattersatz, zwei
  volle 83,5-mm-Spalten mit 5 mm Abstand, Grundraster 281 mm / 102 wie in der
  KI-Dokumentation. Eine Leerzeile trennt die Einträge; ein Eintrag bleibt zusammen.
  Vollständige Verfasser, Titel, Publikationsangaben und DOI beziehungsweise URL;
  undatierte Webquellen tragen „o. J.“ und den gesicherten Stand. DOI, URLs und
  der Eintrag zur KI-Dokumentation sind anklickbar. Seitenzahlen laufen fort.
  Der Stil ist eine einheitliche projektbezogene Verfasser-Jahr-Darstellung;
  ein verbindlicher Zitierstil ist weiterhin offen.
  `bibliography.py` liest ausschließlich die bereits vorhandenen BibLaTeX-Daten;
  `bibliography.json` hält die Metadatenherkunft und Eingangsprüfsummen fest.
  Der KI-Eintrag nennt Einsatz, Werkzeuge und die belegten Modellkennungen aus
  `ai-documentation/model-register.json`; fehlende Angaben für CGPT-01–04
  bleiben ausdrücklich offen. Der HFBK-Leitfaden vom April 2025 verlangt den
  Dokumentationseintrag, schreibt aber keine Modellliste vor. Die Liste ist
  eine zusätzliche Transparenzangabe und ersetzt keine Seiten-/Zeilenbelege.
  Die Bibliographie verwendet eine Grundlaufweite von −15/1000 em mit dem
  bisherigen Spielraum von ±10/1000 em, also −25 bis −5 in InDesign-Einheiten.
  Absatzschlusszeilen laufen weiterhin natürlich mit Laufweite null aus;
  kurze Ausweichzeilen bleiben bei Bedarf ebenfalls natürlich.
  Schriftgröße, Zeilenraster und Abstände zwischen den Einträgen bleiben erhalten.
  Der erweiterte Eintrag bleibt vollständig zusammen; das gesamte Verzeichnis
  passt auf eine Inhaltsseite. `bibliography-fit-results.json` hält die
  Anpassung und die Seitenprüfung fest. Alle 36 Einträge, Modellkennungen, Links und
  Seitengeometrien sind in `bibliography-results.json` geprüft.
  Ein zusätzlicher lokaler Plugin-Adapter aktiviert unsichtbare URL-Umbruchstellen
  ohne eingefügte Trennstriche. Die Originalbibliotheken werden nicht verändert.

Die Schrift- und Glyphenoptionen des ursprünglichen Plugins bleiben erhalten:
Wortabstände 90–110 % als erlaubter Bereich (im Flattersatz normal), Laufweite
−0,01 bis +0,01 em und horizontale Glyphenskalierung 98–102 %.
Im Fließtext und in der Bibliographie dürfen höchstens drei aufeinanderfolgende
Zeilen auf einen Trennstrich enden (`maxHyphens: 3`). Die Einbettung prüft auch
den tatsächlichen Satz, einschließlich bestehender Bindestriche zusammengesetzter
Wörter. Der Ausweichsatz des Plugins darf die Grenze nicht übergehen; betroffene
Absätze werden bei Bedarf mit einer etwas größeren Flatterzone erneut gesetzt.
Der Exportadapter reserviert den Einzug vor dem Satz mit einem temporären Präfix
und entfernt es vor der Quellenverknüpfung. Die reguläre Flattersatz-Zone beträgt
10 % der jeweiligen Spaltenbreite. Die lange Zielzeile variiert zwischen 99–100 %,
die kurze zwischen 90–91 %. Die Varianz beträgt jeweils 1 % statt zuvor 2 %:
Der Lang–kurz-Wechsel bleibt mit kleinen, reproduzierbaren Schwankungen erhalten.
Es sind Optimierungsziele; Wortumbruch und
optischer Randausgleich beeinflussen die sichtbaren Kanten, Absatzschlusszeilen
laufen natürlich aus. Die Einbettung rechnet Prozentwerte vor dem Plugin-Aufruf
in Pixel der tatsächlichen Spalte um, weil die absolut positionierte CSS-Messprobe
des Plugins Prozentwerte sonst auf das Browserfenster beziehen würde.
Der Fließtext nutzt durchgehend die reguläre Zone. Ein Quellenabsatz erhält
40 px und ein KI-Hinweis 36 px gegen Überläufe. Dort ist die Zone
ausnahmsweise größer als 10 %. Laufweite und Glyphenskalierung behalten ihre Grenzen.
Die KI-Hinweise und Quellenangaben verwenden den dynamischen Flattersatz-Komponisten
des Plugins mit ausgeschalteter Silbentrennung. Auch die Bibliographie nutzt
das neue prozentuale Flatterprofil. Der Komponist
strebt längere und kürzere Zeilen im Wechsel an, mit normalen Wortabständen.
Fundstellen dürfen an Leerzeichen umbrechen. Quellen und KI-Hinweise laufen
zeilenweise über Spalten und Seiten weiter; Sternreihen halten ihre Nachbarn
nicht zusammen. Der vollständige neue Satz besteht
die Manuskript-, Quellen-, KI-Verweis-, Bibliographie- und Rasterprüfungen.
Die ursprüngliche Plugin-Datei bleibt unverändert. `source_plugin_adapter.py`
erzeugt für die Quellen eine Variante mit Konturmessung bei 64-facher Größe
und ungerundeter Spaltenbreite. Diese Variante reicht außerdem den bestehenden
Schalter `hyphenate` an den Satzkern weiter; KI-Hinweise und Quellen setzen ihn auf `false`.
`inline_call_adapter.py` erzeugt eine
Fließtextvariante, die wie die Quellenvariante die tatsächlichen Zeichenkonturen
bei 64-facher Größe und die ungerundete Spaltenbreite misst. Dadurch werden die
pauschalen Überhänge für Kommas und Trennstriche durch zur Arketa passende
Korrekturen ersetzt; die sichtbaren Zeichen bleiben im Satzspiegel. Sie misst
kleine Quellenverweise vor dem Umbruch als unteilbare
Zeichen mit ihrer tatsächlichen 6-pt-Breite plus optischem Abstand misst. Die sichtbaren Klammerlabels
werden anschließend wiederhergestellt; der übrige Satzkern bleibt erhalten.
Der Quellenkanten-Test prüft die tatsächlich geladene Schrift im paginierten
Browser und berücksichtigt deren umbenannte Vivliostyle-Schriftfamilie.
Der Adapter stellt sowohl
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

Die gedruckten KI-Hinweise nutzen die separate, inhaltlich geprüfte Zuordnung
`ai-documentation/zuordnung/unterkapitel-ki-zuordnung.json`. `ai_notices.py`
übersetzt deren stabile Kennungen bei jedem Satzlauf in die aktuellen Seiten
und tatsächlich gedruckten Zeilennummern aus `output/ai-documentation-web/`.
`ai-notices.json` hält die daraus erzeugten Druckverweise und Versionsprüfsummen
fest. Die sichtbaren Angaben sind anklickbar und öffnen die jeweilige Zeile
in der Dokumentationsvorschau. `check_browser.mjs` aktualisiert vor jedem
Satzlauf sämtliche Hinweise über `refresh_ai_notices.py`, auch wenn die
bereits erfasste Thesis nicht nochmals aus Pages eingelesen wird. Anfang und
Ende jedes Bereichs werden gegen die tatsächlich gedruckten Zeilennummern
geprüft. Jeder Link enthält die Kennung der zugehörigen Dokumentationsfassung;
deren Vorschau lädt Register, Zeilenpositionen und Seiten ohne alte Cache-Daten.
Eine Änderung der Dokumentationsgestaltung
erfordert einen neuen Satzlauf der Dokumentation und anschließend der Arbeit;
die Zahlen werden dann neu berechnet. Die Zuordnung erfasst den gesamten
abschnittsbezogenen Arbeitsprozess und behauptet keine einzelne Textübernahme.
Die Ergänzung für Einleitung und Schluss umfasst 20 weitere geprüfte
Arbeitsphasen mit 23 Abschnittsbezügen. Frühere Struktur- und Quellenpläne,
Entwürfe, Feedback und spätere Revisionen bleiben in der Zuordnungsnotiz
unterscheidbar; `extend_intro_conclusion.py` ergänzt sie ohne neue KIZ-Kennungen
für bereits erfasste Bereiche zu erzeugen.

```sh
python3 thesis/typesetting-compat/serve_preview.py
```

Adresse: http://127.0.0.1:8768/preview.html. Aktualisieren nach einem neuen Satzlauf.
Jedes Neuladen verwendet eine frische Dokument-URL, damit die eingebettete
Vorschau keine ältere Satzfassung aus dem Zwischenspeicher anzeigt.
Der Server bindet ausschließlich an localhost. Die Schriftdateien bleiben lokal.

Bei laufendem Server:

```sh
python3 thesis/typesetting-compat/prepare_test.py
node thesis/typesetting-compat/check_browser.mjs
node thesis/typesetting-compat/audit_browser.mjs
node thesis/typesetting-compat/audit_source_edges.mjs
node thesis/typesetting-compat/audit_bibliography.mjs
node thesis/typesetting-compat/audit_ai_references.mjs
```

Die Composer-Zeilen werden vor der Vivliostyle-Pagination eingefroren. Der Browser
zeigt eine fortlaufende Kopie aller Seiten; Verweisziele bleiben anklickbar.
Die Vorschau verwendet Core 2.45.2. Node/Playwright/Python-Pfade in den Skripten
sind lokale Laufzeitpfade und bei einem Maschinenwechsel anzupassen.
Die Vorschau gleicht die abweichende Inline-Zeilenbox der geklonten Seitenzahl
nach dem Laden der Schrift aus. Ihr unterer Abstand bleibt wie im Satzexport
bei 8 mm; die Korrektur verändert keine Textzeilen oder Seitenumbrüche.

## Manuelle Korrektur ungünstiger Umbrüche

Bei einer ungünstigen Absatzverteilung zunächst die Grundlaufweite der
betroffenen Seite geringfügig erhöhen und den Flattersatz vollständig neu
berechnen. Tims „plus 5“ wird vorläufig als +5/1000 em (+0,005 em) verstanden.
Die bisherige Variation von ±10/1000 em läuft um diese neue Basis: bei +5
also insgesamt −5 bis +15/1000 em, bei +10 insgesamt 0 bis +20/1000 em.
Die Grundlaufweite muss in Messung und Komposition vor dem Umbruch eingehen.

Nach jedem Versuch die betroffene Seite und ihre Folgeseite auf Zeilenfall,
Spaltenfüllung und einzelne Schlusszeilen prüfen; die Seitenzuordnung kann
sich dabei verschieben. Eine einzelne Zeile nur als letzte Feinjustierung
behandeln und ebenfalls neu berechnen. Grundlinienraster, Schriftgröße,
Spaltenbreiten und das bisherige Flatterprofil bleiben die Vorgaben.

Bei einem einzelnen problematischen Absatzschluss wird zunächst nur die
Grundlaufweite dieses Absatzes variiert und sein Flattersatz neu berechnet.
Die letzte Zeile soll nicht allein aus dem Rest eines getrennten Schlusswortes
bestehen, etwa „be.“ nach „Einga-“. Ein bereits sauberer Absatzschluss wird
für diese Korrektur nicht zusätzlich verändert.

Das ist das vereinbarte Vorgehen für gezielte Satzkorrekturen, keine
automatische Seitenoptimierung des derzeitigen Composers. Im aktuellen
28-seitigen Satz wurde dafür keine zusätzliche Laufweite angewendet.

## PDF-Export auf Anfrage

Am 8. Oktober wurden zwei vollständige Fassungen aus dem aktuellen
eingefrorenen Satz exportiert:

- `output/pdf/Input_Digital_mit_Kapitelseiten.pdf`: 27 Seiten mit den fünf
  Kapiteltitelseiten und der Bibliographie-Titelseite.
- `output/pdf/Input_Druck_ohne_Kapitelseiten.pdf`: 21 Inhaltsseiten ohne diese
  sechs Titelseiten, neu nummeriert von 01 bis 21. Die separaten A6-Divider
  bleiben eine eigene Datei.

`export_pdf_variants.mjs` erstellt beide Varianten neben der unveränderten
Preview und prüft die Inhaltsgeometrie vor dem Export. `verify_pdf_variants.py`
vergleicht anschließend alle 2.191 Textzeilen je PDF mit dem Browser-Satz,
prüft sämtliche Seitenzahlen, Schrifteinbettung, Gendersterne und Linkziele.
Alle 178 internen Verweise funktionieren; die KI-Dokumentationslinks behalten
ihre bisherigen lokalen HTML-Ziele. `pdf-export-manifest.json` hält Quell- und
PDF-Prüfsummen sowie die Seitenzuordnung fest; `pdf-variant-verification.json`
enthält den aktuellen Nachweis. Alle 48 exportierten Seiten wurden gerendert
und anhand von Kontaktbögen und Detailseiten visuell geprüft.

```sh
/Users/timballaschke/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin/node thesis/typesetting-compat/export_pdf_variants.mjs
/Users/timballaschke/.cache/codex-runtimes/codex-primary-runtime/dependencies/python/bin/python3 thesis/typesetting-compat/verify_pdf_variants.py
```

PDF-Renderer: CLI 11.3.3, Viewer/Renderer 2.45.1 und isolierter lokaler Chrome.
Die fertigen PDFs sind nach einem erneuten Export wieder visuell zu prüfen.
`Input_Arketa_Zweispaltig.pdf` bleibt ein historischer Ausschnitt.

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
