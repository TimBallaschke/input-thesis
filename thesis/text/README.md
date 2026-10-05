# Websitefähige Textfassung der Masterarbeit

Übertragen am 18. September 2026 aus `presentation/260917_Master_Thesis.pages`.
Dies ist eine Text- und Quellenübertragung, keine sprachliche Überarbeitung,
kein Layoutentwurf und keine erneute inhaltliche Quellenprüfung.

## Die Arbeitsdateien

- **`master-thesis.md`**: vollständiger Haupttext in Pandoc-Markdown, einschließlich
  Einleitung, Surface, Interaction, Operation und Schluss.
- **`references.bib`**: lokale, eingefrorene Literaturdatenbank ausschließlich für
  die in dieser Fassung zitierten Quellen. Keine automatischen Änderungen an
  Zotero oder an `references/library.bib`.
- **`citation-map.json`**: Zuordnung jeder ursprünglichen Belegklammer zu
  Literaturdatensätzen, Kapitel, Abschnitt und einer eindeutigen Textstellen-ID.
  Die originalen Seiten-, PDF-Seiten-, Artikel-, Abschnitts- und Randnummernangaben
  sind dort zusätzlich unverändert festgehalten.
- **`TRANSFER_REPORT.md`**: Umfang, Prüfungen und Grenzen der Übertragung.

`source/` enthält den aus Pages gelesenen Haupttext, die Zuordnungsregeln,
ergänzende Literaturdatensätze, Dateiprüfsummen und das Prüfergebnis. Diese Dateien
sind eine Sicherung des Übertragungsschritts, keine zweite laufende Textfassung.

## Quellenverweise bearbeiten

Beispiel aus der Arbeitsfassung:

```markdown
... [[vgl. @normanSignifiersNotAffordances2008]]{#cite-001}.
```

- `@normanSignifiersNotAffordances2008` bezeichnet den Eintrag in `references.bib`.
- Ergänzungen wie `S. 18–19`, `PDF-S. 4–5` oder `Abschn. …` stehen direkt beim
  jeweiligen Quellenverweis, nicht beim allgemeinen Literaturdatensatz.
- `{#cite-001}` ist die eindeutige Sprungmarke dieser Textstelle für die Website.
  Bestehende IDs beim Bearbeiten beibehalten; neue IDs dürfen nicht doppelt vorkommen.
- Die doppelten Klammern bilden einen Pandoc-Quellenverweis innerhalb einer
  benannten Textstelle. Sie werden bei der HTML-Ausgabe nicht sichtbar gedruckt.

Pandoc ergänzt das Quellenverzeichnis beim Export. Es wird nicht ein zweites Mal
von Hand im Manuskript gepflegt. Die Darstellungsweise der Belege kann später
über einen Zitierstil festgelegt werden, ohne die Quellenzuordnung zu ändern.

## HTML erzeugen

Mit installiertem Pandoc, im Ordner `thesis/text`:

```sh
pandoc master-thesis.md --from=markdown-smart --standalone --citeproc --to=html5 --output=master-thesis.html
```

Die Metadaten `link-citations: true` verlinken die Quellenangaben mit den
Literatureinträgen. Die Ziele heißen beispielsweise `#ref-normanSignifiersNotAffordances2008`.
Die zusätzlichen `#cite-…`-Sprungmarken und `citation-map.json` ermöglichen später
gezielte Rückverweise vom Literaturverzeichnis auf einzelne Textstellen.

Das ergibt eine schlichte lokale HTML-Datei, noch keine gestaltete oder
veröffentlichte Website. Zitierstil, Websitegestaltung, Rückverweis-Oberfläche und
eine mögliche Umstellung auf Fußnoten sind gesonderte nächste Schritte.

## Initiale Übertragung prüfen

```sh
python3 build_text.py --check --pandoc /absoluter/pfad/zu/pandoc
```

Der Test stellt den Ausgangstext aus der Markdown-Datei und den gespeicherten
Belegklammern wieder her und vergleicht ihn absatzweise. Außerdem prüft er
Literaturschlüssel, Pandoc-Erkennung und sämtliche internen HTML-Quellenlinks.
Pandoc 3.9 wurde für diese Übertragung lokal unter
`tmp/text-conversion-tools/pypandoc/files/pandoc` bereitgestellt; die Laufzeit ist
nicht Bestandteil der Textdateien und nicht global installiert.

**Wichtig:** `build_text.py --force` erstellt die ursprüngliche Übertragung erneut
aus der Sicherung und überschreibt `master-thesis.md`, `references.bib` und die
Zuordnungsdatei. Nicht nach eigenen Textänderungen verwenden. Künftige redaktionelle
Änderungen gehören in `master-thesis.md`; die initiale Zuordnungsdatei ist ein
Übertragungsprotokoll und aktualisiert sich nicht automatisch bei späteren Änderungen.

Die Pages-Datei bleibt unverändert erhalten. Die KI-Dokumentation wurde für
diesen Schritt weder eingebaut noch neu nummeriert oder neu ausgegeben.
