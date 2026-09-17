# Arnold, Chauncey und Gajos 2020 - Predictive Text Encourages Predictable Writing

## Status und Zugriff

- Bibliografie: Kenneth C. Arnold, Krysta Chauncey und Krzysztof Z. Gajos, *Predictive Text Encourages Predictable Writing*, in *Proceedings of the 25th International Conference on Intelligent User Interfaces* (IUI '20), ACM, 2020, S. 128-138. DOI: `10.1145/3377325.3377523`.
- Metadaten: Autoren-Webseite und Crossref-Verlagsdatensatz geprüft am 14. September 2026; der direkte ACM-Zugriff lieferte HTTP 403.
- Autoren-Webseite: https://www.eecs.harvard.edu/~kgajos/papers/2020/arnold20predictcive.shtml
- Volltext: https://www.eecs.harvard.edu/~kgajos/papers/2020/arnold20predictive.pdf
- Lokale Fassung: `research/source-pdfs/arnold-et-al-2020-predictive-text.pdf`; 11 Seiten; PDF-Erstellungsdatum 29. Mai 2020; SHA-256 `c0f261b988aec9a8a68f600ed02bb47c2a1cead149b886055f0e9029700bdfe7`.
- Zugriffstiefe: vollständiger Text einschließlich Literaturverzeichnis gelesen; Abbildungen 1-5 und Tabelle 1 auf PDF-S. 1, 6, 7 und 8 visuell geprüft. Textauszug unter `research/source-texts/arnold-et-al-2020-predictive-text.txt`.
- Paginierung: Die Autorenfassung zeigt keine gedruckten Seitenzahlen. Alle nachstehenden Locators sind **PDF-Seiten**, nicht ungeprüft umgerechnete Verlagsseiten.
- Citation Key: `arnoldPredictiveTextEncourages2020`, am 14. September 2026 in Zotero und im automatischen Export `references/library.bib` verifiziert; Importdatensatz unter `research/import-records/arnold-2020-predictive-text.bib`.
- Zotero: Item `XV46SD3K`, Sammlung `03 GUI and Direct Manipulation` (`NFR5JXDA`), PDF-Anhang `CJNF33NH`. Der importierte Anhang ist per SHA-256 byteidentisch mit der ausgewerteten Projektfassung. Titel-/Autorensuche ergab vor dem Import keinen Treffer und danach genau diesen Datensatz. Die bestehende Auswertung wurde beim Import geprüft, nicht dupliziert.
- Quellentyp: kontrolliertes Within-Subjects-Experiment mit freier, aufgabenbegrenzter Textproduktion; ergänzende explorative Analysen.

## Gegenstand, Methode und Evidenzart

111 englischkundige Personen aus den USA und Kanada wurden über Mechanical Turk rekrutiert; nach zwei Ausschlüssen verblieben 109 Personen und 1.308 Bildbeschreibungen. Jede Person schrieb auf dem eigenen Touchscreen-Gerät zwölf Beschreibungen, vier je Bedingung: keine Vorschläge, stets drei Vorschläge oder drei Vorschläge nur oberhalb einer Konfidenzschwelle. Die Bedingungen waren gegenbalanciert. Die Aufgabe verlangte spezifische, genaue und knappe Beschreibungen; es war keine Kopieraufgabe, aber auch kein beliebiges Alltagsschreiben.

Die Analyse berücksichtigt Personen und Bilder als Zufallseffekte. Die Autor:innen legten den allgemeinen Analyseansatz vorher fest, verfeinerten die berichteten Analysen aber nach ersten Ergebnissen. Abschnitt 6 ist ausdrücklich explorativ. Datensatz und Code werden unter https://osf.io/w7zpa/ verlinkt; hier nicht unabhängig reproduziert.

## Surface

Abbildung 1 zeigt Bild, sichtbaren Text, drei Vorschlagsschaltflächen und eine vereinfachte Bildschirmtastatur. Die Vorschlagsleiste konnte fehlen oder bei geringer Konfidenz leer bleiben. Der Text blieb vollständig sichtbar; für das Bild konnte Scrollen erforderlich sein. Nur Backspace und Neutippen erlaubten die Bearbeitung früherer Stellen; keine automatische Korrektur und kein automatisches Einfügen von Vorschlägen.

## Interaction

Nutzende konnten selbst tippen, einen Vorschlag antippen oder löschen. Die Hauptaufgabe verlangte keine Vorschlagsübernahme. Die Studie vergleicht Eigenschaften der entstandenen Texte, nicht lediglich die Zahl akzeptierter Vorschläge. Als vorhersagbar galt ein Wort, wenn es bereits vor seinem ersten Buchstaben unter den drei Modellvorhersagen lag; dieses Maß wurde auch für Texte aus der Bedingung ohne sichtbare Vorschläge berechnet.

## Operation

Ein auf COCO-Bildbeschreibungen trainiertes LSTM-Sprachmodell lieferte die drei wahrscheinlichsten Wörter beziehungsweise präfixkompatiblen Vervollständigungen. Es erhielt **keine Bildmerkmale**. Die zusätzliche Konfidenzschwelle steuerte die Sichtbarkeit, nicht eine verbindliche Eingabevorgabe. Das ist eine dokumentierte Forschungsimplementierung, kein Nachweis über heutige Suchmaschinen, Smartphone-Produkte oder LLM-Promptvorschläge.

## Übergänge

- **Operation -> Surface:** Modellvorhersagen und Schwelle entscheiden, welche Wörter als antippbare Angebote erscheinen.
- **Surface -> Interaction:** Das Angebot lässt sowohl eigenständiges Tippen als auch Übernahme zu; sichtbare Auswahl ersetzt keinen Nachweis einer vorher feststehenden Absicht.
- **Interaction -> Operation:** Die Wahl wird zu Text; neue Eingabehandlungen führen zu aktualisierten Vorhersagen.
- **Projektsynthese:** Handlungsspielraum und messbarer Einfluss auf die Formulierung können gleichzeitig bestehen. Das ist eine begrenzte Interpretation des Experiments, keine Aussage über Manipulationsabsichten eines Anbieters.

## Direkt gestützte Aussagen

| ID | Aussage in eigenen Worten | Belegstelle | Evidenzart | Ebene | Einschränkung |
| --- | --- | --- | --- | --- | --- |
| ARN20-P1 | 109 ausgewertete Personen verfassten je zwölf englische Bildbeschreibungen unter drei Vorschlagsbedingungen. | PDF-S. 3-5, Abschn. 4.1-4.5 | Versuchsdesign | S / I | 1.308 Texte sind wiederholte Beobachtungen, nicht unabhängige Personen. |
| ARN20-P2 | Vorschläge wurden nicht automatisch eingefügt; die eigene Zeicheneingabe blieb möglich. | PDF-S. 4-5, Abschn. 4.5.2-4.5.3; Abb. 1 | dokumentierte Interaktion | S / I | Vereinfachte Tastatur ohne Autokorrektur und mit eingeschränkter Bearbeitung. |
| ARN20-P3 | Vorhersagbarkeit wurde anhand der Top-3-Modellvorhersagen vor dem ersten Buchstaben bestimmt, unabhängig von tatsächlicher Anzeige oder Übernahme. | PDF-S. 3-4, Abschn. 4.3.1 | Messdefinition | I / O | Modellrelative Vorhersagbarkeit, keine allgemeine Kreativitäts- oder Qualitätsmetrik. |
| ARN20-P4 | Ohne Vorschläge enthielten Beschreibungen im Mittel 6,69 nicht vorhersagbare Wörter; bei stets sichtbaren Vorschlägen 5,55 und bei schwellenwertgesteuerten 5,83. | PDF-S. 5-6, Abschn. 5.1 und Abb. 2 | geschätzte Mittelwerte | I | Unterschiede Never minus Always: 1,14, 95%-KI [0,68; 1,60]; Never minus OnlyConfident: 0,86, KI [0,46; 1,27]. |
| ARN20-P5 | Die mittlere Textlänge betrug 14,62 Wörter ohne, 13,86 mit stets sichtbaren und 13,36 mit schwellenwertgesteuerten Vorschlägen. | PDF-S. 6, Abb. 2 | geschätzte Mittelwerte | I | Kürze allein beweist weder geringere Qualität noch eine veränderte Überzeugung. |
| ARN20-P6 | Die Studie berichtet Geschwindigkeitsvorteile mit geringerem Nutzen für schnellere Tippende; die Vorschlagsbedingungen wurden subjektiv als weniger belastend bewertet. | PDF-S. 6-7, Abschn. 5.2-5.3, Abb. 3-4 | Prozessdaten und Befragung | I | Kein allgemeiner Produktbenchmark; Präferenz und Formulierungseinfluss sind getrennte Ergebnisse. |
| ARN20-P7 | Ergänzende Analysen zeigen Hinweise auf unterschiedliche Adjektivverwendung; Überspringen und Ersetzen werden als mögliche Erklärungen diskutiert. | PDF-S. 7-8, Abschn. 6-7, Abb. 5 und Tabelle 1 | explorative Analyse / Hypothese | I | Kein direkter Nachweis, welches ursprünglich beabsichtigte Wort eine bestimmte Person ausgelassen oder ersetzt hat. |
| ARN20-P8 | Das Modell nutzt aufgabenspezifische Sprachdaten, aber keine Merkmale des gerade beschriebenen Bildes. | PDF-S. 4-5, Abschn. 4.5.2 | Implementierungsbeschreibung | O | Keine bildgestützte semantische Bewertung oder heutige LLM-Architektur. |
| ARN20-P9 | 48 Personen wurden nach ausbleibender Vorschlagsnutzung in der Übung zu deren Wiederholung angehalten; mögliche Erwartungseffekte werden diskutiert. | PDF-S. 5 und 8, Abschn. 4.5.3 und 7.1 | methodische Einschränkung | I | Nutzung in der Hauptaufgabe blieb freiwillig, war aber nicht völlig unbeeinflusst vorbereitet. |

## Verhältnis zur Grundstruktur

**Interaction -> Autocomplete und Vorschläge**: Schließt die konkrete Lücke zwischen der Untersuchung von Eingabeaufwand und der Untersuchung frei formulierter Texte. Quinn/Zhai 2016 bleibt ein Kontrast mit anderer Aufgabe, anderer Oberfläche und anderem Modell, kein direkter Widerspruch. Für Operation liefert die Studie eine begrenzte Beschreibung der Auswahl- und Sichtbarkeitslogik.

## Grenzen und Gegenprüfung

- Modellnähere Wortwahl ist nicht gleichbedeutend mit veränderten Meinungen, manipulierter Absicht oder aufgehobener Autorenschaft.
- Keine Langzeitbeobachtung, keine längeren argumentativen Texte, keine Suchanfragen oder Promptideen. Nur vier Beschreibungen je Bedingung; bezahlte englischsprachige Aufgabe und stark domänenspezifisches Modell.
- Die Autor:innen erwarten teilweise weitergehende Effekte bei kommerziellen Systemen und Wiederverwendung der Texte als Trainingsdaten. Das sind hier keine untersuchten Produktpraktiken oder nachgewiesenen Rückkopplungen.
- Der Text auf PDF-S. 6 und Abb. 2 weichen bei einzelnen gerundeten Kontrasten beziehungsweise der OnlyConfident-Anteilsangabe voneinander ab. Für die Thesis werden die robusten Wortzahl-Kontraste aus Abb. 2 verwendet, nicht diese Anteilsangabe. Die Abbildung ist keine zusätzliche unabhängige Messung.
- Akrich kann die Verteilung von Handlungsmöglichkeiten theoretisch einordnen; sie ersetzt keinen Beleg für politische oder ökonomische Lenkungsabsichten. Dafür wäre ein konkreter anderer Untersuchungsgegenstand nötig, keine automatische weitere Recherche.

## Entscheidung

**Kernquelle mit enger Evidenzgrenze.** Sie trägt die Aussage, dass Wortvorschläge in einer kontrollierten Bildbeschreibungsaufgabe die entstehende Formulierung beeinflussten, obwohl die eigene Texteingabe möglich blieb. Für den Abschnitt genügt diese eine Ergänzung; kein zusätzlicher Quellenstrang und keine Übertragung auf Überzeugungen, alle Eingabesysteme oder aktuelle Produkte. Tim prüft und entscheidet über die spätere Aufnahme in die Thesisprosa.
