# Operation 2 - Interessen und ungleiche Entscheidungsmöglichkeiten

Stand: 15. September 2026. Fortsetzung auf Tims Zustimmung zur kritischen
Überarbeitung. Vergleichsbasis: eingereichter Abschnitt vom 15. September,
archiviert als DRAFT-04. **Arbeitsstruktur und Schreibentscheidungen, keine
ausformulierte oder autorbestätigte neue Manuskriptfassung.** P-0157 / AI-052.

Einordnung nach der Gesamtüberarbeitung P-0158 / AI-053: Diese Schreibhilfe
bleibt für Abschnitt 2 gültig. Aufgaben und Grenzen aller vier Abschnitte
bestimmt nun die [aktuelle Gesamtgliederung](GLIEDERUNG_OPERATION_01.md).
Keine neue Quelle oder veränderte Bewertung des eingereichten Fließtexts.

## Kernaussage

Nutzer:innen beeinflussen mit ihren Eingaben das Ergebnis, verfügen aber nicht
im gleichen Maß wie die Anbieter über die Bedingungen seiner Auswahl und
Erzeugung; diese Bedingungen stehen zudem in institutionellen und teilweise
kommerziellen Zusammenhängen.

Eigene analytische Zuspitzung, keine Behauptung vollständiger Kontrolle,
unbegrenzter Macht oder identischer Geschäftsmodelle aller vier Fälle.

## Überarbeitete argumentative Abfolge

### Kurzer Auftakt: Verarbeitung vor der Bestätigung

- Die drei bisherigen Timing-Absätze zu einem kurzen Auftakt verdichten.
- Prefetching als Vorbereitung erklären: Bestätigung der vorgeschlagenen
  Anfrage steht noch aus, der Abruf selbst findet aber bereits statt.
- Den Satz „ohne dass dieser bereits ausgeführt wurde“ präzisieren, damit
  er nicht jede technische Ausführung verneint.
- Daraus weder heimliche Datenspeicherung noch fehlende Berechtigung ableiten.

### Erste Bewegung: Verfahren nur einmal erklären

- Formularvalidierung und „formal gültig ist nicht notwendig wahr“ zusammenfassen.
- Danach knapp Retrieval/Ranking und autoregressive Generierung unterscheiden.
- Keine zweite Runde der gleichen Grundlagen; kein erneutes mkdir-Beispiel.
- Übergang: Welche Entscheidungen sind in diesen Verfahren bereits wirksam?

### Zweite Bewegung: Maßstäbe, Zuständigkeit und Interessenkonflikte

#### Formular als kurzer Kontrast

- Nicht nochmals Validierung erklären, sondern fragen, wer Bedingungen festlegt
  und welche Anpassung sie von der eingebenden Person verlangen.
- Standard, konkrete Implementierung und institutionelle Vorgaben unterscheiden.
- Keine konkrete Ausgrenzung allein aus der Existenz einer Formatprüfung ableiten.

#### Suche: Auswahl von Information und kommerzielle Erreichbarkeit

- Relevanz wird durch gewählte Merkmale angenähert; wer setzt sie um und prüft sie?
- Google und seine Entwicklungs-/Bewertungsprozesse benennen. Evaluationsmetriken
  sind keine automatische Offenlegung direkter Rankingfaktoren.
- Den Unterschied zwischen dem Ändern einer Suchanfrage und dem Ändern der
  Auswahlregeln als eigene Analyse ungleicher Entscheidungsmöglichkeiten fassen.
- Suchwerbung ergänzen: Eine Anfrage kann auch Anlass für die Auswahl einer
  bezahlten Anzeige sein. Das ist nicht dasselbe wie ein gekauftes organisches Ranking.
- Nutzeranliegen, Betreibererlös und Werbeziel getrennt benennen. Ein passendes
  Angebot kann zugleich hilfreich und kommerziell sein; kein automatischer Widerspruch.
- Konfliktfrage: Nach welchen Kriterien wird zwischen diesen Interessen vermittelt,
  und welchen Einfluss hat die suchende Person darauf?

#### Prompt: Eine vorgeprägte Form von Hilfe

- Ouyang nicht nur als Trainingsablauf nutzen: Ausgewählte Labeler und Forschende
  setzen Maßstäbe, die spätere Modellantworten mitprägen.
- Sycophancy als möglichen Konflikt zwischen bestätigender Antwort und sachlicher
  Prüfung untersuchen, nicht als bloßen Tonfall.
- Kritische Frage: Wessen Vorstellung von hilfreicher Unterstützung begegnet mir,
  wenn ich Rat, Kritik oder eine Überprüfung anfordere?
- Die richtige Antwort kann dem Anliegen dienen, gerade indem sie widerspricht.
  Dies als normative Position der Arbeit markieren, nicht als Messbefund.
- Wirtschaftliche Ziele von LLM-Anbietern nicht aus dem Anzeigenmodell von Google
  oder allein aus Sharma ableiten. Gezielte Bindung durch falsche Bestätigung offenlassen.

### Dritte Bewegung: Anpassung und Konkurrenz um Berücksichtigung

- Den im eingereichten Text noch fehlenden SEO-/GEO-Teil ergänzen.
- Inhaltsanbieter orientieren sich an dokumentierten oder vermuteten Bedingungen
  ihrer Berücksichtigung; Wissen über diese Bedingungen ist selbst eine Ressource.
- Nutzer:innen, Betreiber und Inhaltsanbieter unterscheiden; Werbetreibende sind
  beim Anzeigenfall eine weitere, gegebenenfalls überlappende Rolle.
- SEO/GEO sind nicht bezahlte Platzierung beim Betreiber. Dienstleistungsgebühren
  für Optimierung wären ebenfalls von Anzeigenzahlungen zu unterscheiden.
- Aggarwal als begrenzten Nachweis veränderter Quellenpräsenz verwenden.
- Kein falsches Entweder-oder: Ein Inhalt kann sachlich hilfreich UND optimiert sein.
- Leitfrage: Wie wirken Informationsinteresse, Sichtbarkeitsinteresse und die
  Bedingungen des Betreibers bei der Zusammenstellung des Angebots zusammen?

### Schluss und Anschluss

- Macht als ungleiche Möglichkeiten zur Festlegung, Prüfung und Veränderung
  operativer Bedingungen beschreiben, nicht als willkürliche Allmacht.
- Auch Geheimhaltung hat konkurrierende Gründe: Nachvollziehbarkeit einerseits,
  Schutz vor Ausnutzung und Wettbewerb andererseits. Deren Gewichtung kritisch prüfen.
- Operation 3: Speicherung, Verknüpfung und weitere Zwecke der Anfrage konkret prüfen.
- Operation 4: Erkennbarkeit der Interessen und Möglichkeiten der Prüfung behandeln.
- Diese Grenzen sind analytisch; Querverweise sind erlaubt, vollständige Wiederholung nicht.

## Kompakte Belegzuordnung

| Punkt | Quelle / Stelle | Beitrag und Grenze |
| --- | --- | --- |
| Zeitlicher Auftakt | bestehende Timing-Notiz, WHATWG / Chromium | Vorbereitung und Bestätigung unterscheiden; keine neue Speicherbehauptung |
| Mechanismen | WHATWG 4.10.21; Brin/Page S. 109-113; Radford PDF-S. 2, 4, 6 | Vorhandene technische Basis, historische Grenzen erhalten |
| Institutionelle Kriterien | Gillespie S. 175-179, 185-187 | Theorie; keine Messung heutiger Einzelantworten |
| Suchwerbung | Google: Ads make Search accessible to everyone; Alphabet S. 5, 29-30, 33-34 | Anbieterbeschreibung und Geschäftsbericht; organisch/bezahlt trennen |
| Trainierte Hilfe | Ouyang interne S. 2, 9-10; Sharma S. 5-9 | Maßstäbe ausgewählter Personen; kein Nachweis manipulativer Kundenbindung |
| Anpassung | Gillespie S. 183-187; Aggarwal PDF-S. 2-7 | Theorie plus begrenzter GEO-Befund; keine allgemeine Traffic-/Täuschungswirkung |

Auswertungen: [Gillespie](source-notes/gillespie-2014-relevance-algorithms.md),
[Google/Alphabet](source-notes/google-alphabet-2026-search-advertising.md).

## Quellenstatus und nächster Schritt

Die begrenzte wirtschaftliche Ergänzung ist belegbar. Offen bleiben bewusste
Manipulation zur LLM-Kundenbindung und konkrete Datenweiterverwendung; beides
wird hier nicht behauptet. Gillespies Satzfahne muss vor Abgabe gegen die
Endfassung geprüft werden; Alphabets Originaldownload ist noch offen.

Die Übersicht dient der gemeinsamen Prüfung vor einer neuen Fließtextfassung.
Keine breite Literaturausweitung, kein automatischer Zotero-Import, keine Änderung
an Pages oder den festgehaltenen Interaction-/Operation-1-Texten.
