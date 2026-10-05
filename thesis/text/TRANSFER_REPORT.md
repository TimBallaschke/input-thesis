# Übertragungsprüfung

Stand: 18. September 2026. Ausgangsdatei: `260917_Master_Thesis.pages`.

## Umfang

- 5 Hauptkapitel und 13 Unterabschnitte, insgesamt 18 Überschriften.
- 173 Textabsätze.
- 99 Belegklammern mit insgesamt 118 einzelnen Quellenverweisen.
- 36 unterschiedliche zitierte Quellen, alle mit Literaturdatensatz verknüpft.
- 99 eindeutige Textstellen-IDs für die spätere Website.

## Nachgewiesene technische Prüfungen

- Der Ausgangstext lässt sich aus der Markdown-Fassung und den gespeicherten
  Originalbelegen wiederherstellen: keine Wortlautänderung. Ausgenommen sind
  Leerzeilen und Leerraum an Absatzanfang und -ende.
- Jeder Quellenverweis hat einen vorhandenen, eindeutigen Literaturschlüssel.
- Alle 99 Beleggruppen und alle 118 Einzelverweise werden von Pandoc 3.9 erkannt.
- Alle 36 Literaturdatensätze lassen sich als strukturierte Literaturdaten lesen.
- Probeweise HTML-Verarbeitung im Arbeitsspeicher: 118 interne Quellenlinks,
  36 Literaturziele, 99 Textstellen-Sprungmarken, keine fehlenden Linkziele und
  keine doppelten IDs. Es wurde keine Website veröffentlicht.
- Lokale Zotero-Anhangspfade wurden aus der separaten Literaturdatei entfernt.
- Maschinelles Prüfergebnis: `source/validation.json`.

## Herkunft der Literaturdaten

27 Einträge stammen aus `references/library.bib`, der mkdir-Eintrag aus
`references/manual.bib`. Feit, Ruan und Norman wurden aus bereits vorhandenen
BibTeX-Importdatensätzen übernommen. Die bereits in der Pages-Fassung zitierten
Quellen Gillespie, Staab, FTC Complaint und Chromium wurden anhand der bestehenden
Projekt-Quellennotizen als lokale Datensätze ergänzt. Für „Refine Google searches“
wurden Titel, URL und der Abschnitt „Operators“ auf der offiziellen Seite am
18. September 2026 bestätigt:
https://support.google.com/websearch/answer/2466433?hl=en

Einzelne Herkunftsdateien und Prüfsummen stehen in
`source/transfer-manifest.json` und `citation-map.json`. Kein neuer Zotero-Import,
keine Änderung des gemeinsamen Literaturbestands.

## Grenzen und bewusst beibehaltene Punkte

- Geprüft ist die technische Zuordnung, nicht erneut die sachliche Tragfähigkeit
  sämtlicher Aussagen oder die Richtigkeit sämtlicher Seitenangaben.
- Haupttext und Überschriften wurden aus Pages gelesen. Seitenlayout,
  Zeichenformatierungen, Kommentare und ursprüngliche eingebettete Linkattribute
  sind nicht Gegenstand dieser Textübertragung. Quellenlinks werden aus den
  strukturierten Literaturdatensätzen neu erzeugt.
- Die sichtbare Form der Quellenangaben kann sich beim Export durch den Zitierstil
  ändern (z. B. Autorentrennung, „et al.“, Sortierung oder Jahreszusätze).
  Der Originalbeleg bleibt vollständig in `citation-map.json` erhalten.
- Die im Manuskript angegebenen Sicherungsdaten von Onlinequellen bleiben in den
  Quellenverweisen erhalten. Ein Abrufdatum wurde nicht zum Publikationsjahr gemacht.
- Bereits bekannte Versionsgrenzen bleiben bestehen: Die gelesene Gillespie-Datei
  ist eine Satzfahne; Staab ist die dokumentierte arXiv-v2-Fassung. Die Übertragung
  stellt keinen neuen Versionsabgleich mit Verlagsdateien dar.
- Vorhandene sprachliche Unebenheiten wurden nicht still korrigiert, beispielsweise
  die fehlende Leerstelle in „bleiben.Für“ im Abschnitt zur Speicherung.
- Keine KI-Nachweise, Fußnotennummern oder endgültige Zitierstilentscheidung ergänzt.
- Die Pages-Datei, die bestehende LaTeX-Fassung und die KI-Dokumentation bleiben
  unverändert. Keine Veröffentlichung, kein Commit und kein Push.
