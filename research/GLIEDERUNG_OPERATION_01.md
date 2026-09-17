# Operation - überarbeitete Gesamtgliederung

## Status

- Aktuell: Gesamtüberarbeitung auf Tims Auftrag, P-0158 / AI-053. Die vier
  Hauptabschnitte und die drei Bewegungen in Abschnitt 2 bleiben erhalten.
  Neu gefasst werden die Aufgaben, Unterpunkte, Übergänge und Abgrenzungen
  aller vier Abschnitte. Diese Fassung ist die aktuelle Grundlage zur gemeinsamen
  Prüfung; der Überarbeitungsauftrag ist bestätigt, nicht bereits jede neue Formulierung.
- Diese Gesamtgliederung ersetzt für die weitere Planung auch die ältere
  gesonderte Abschnitt-1-Skizze. Jene Datei bleibt als historische Fassung
  unverändert erhalten. Der inzwischen eingereichte Abschnitt 1 (DRAFT-03)
  ist die Vergleichsbasis für Doppelungen, keine hier neu geprüfte Manuskriptfassung.
- Der unmittelbar vorherige Gliederungsstand ist byteidentisch im
  [Operation-Checkpoint](checkpoints/2026-09-15-operation/README.md) gesichert.
  Keine neue Recherche, kein Quellenimport, keine Änderung an Pages oder Fließtext.
- Die folgenden älteren Entscheidungen dokumentieren die Entwicklung;
  die aktuelle Fassung der vier Abschnitte weiter unten hat Planungsvorrang.
- Datum: 15. September 2026.
- Tim hat die vorgeschlagene vierteilige Struktur als Arbeitsgliederung bestätigt
  und um ihre stichpunktartige Sicherung gebeten.
- Nach den beiden Quellenrunden hat Tim die gezielte Überarbeitung bestätigt:
  vier Abschnitte und Reihenfolge bleiben erhalten; Abschnitt 2 erhält eine
  klarere innere Abfolge, Abschnitt 4 wird auf Nachvollziehbarkeit und
  Rückkopplung zugespitzt. SEO/GEO und Sycophancy werden darin eingeordnet.
- Frühere Bestätigung betrifft die vierteilige Arbeitsstruktur;
  weiterhin kein ausformulierter oder quellengeprüfter Kapiteltext.
- Überarbeitung P-0156: Operation 2 erhält nach dem kurzen Zeitpunkt-Auftakt
  drei innere Bewegungen: Verfahren, Maßstäbe und Anpassung an Auswahlverfahren.
  SEO/GEO stehen in der dritten Bewegung; Ouyang und Sharma in der zweiten.
- Kritische Fortschreibung P-0157 / AI-052: Mechanismen knapp halten; in Bewegung 2
  ungleiche Entscheidungsmöglichkeiten und Suchwerbung konkretisieren. Gillespie
  sowie Google/Alphabet ergänzen die Belege. Die
  [Redaktionsstruktur](REDAKTION_OPERATION_2_INTERESSEN_MACHT_01.md) hält Kürzungen,
  Anschlüsse und offene Grenzen am eingereichten Text DRAFT-04 fest.
  Die Fassung vor dieser Fortschreibung liegt im Operation-Checkpoint.
- Für die Abgrenzung von Operation 2 gilt der zuletzt eingereichte Arbeitsstand
  von Abschnitt 1 (archiviert als DRAFT-03) als Vergleichstext. Er enthält bereits
  `mkdir entwurf`, Feldzuordnung, Suchindex, Promptkontext und Prioritäten.
  Diese Grundlagen werden nicht nochmals erklärt. Die frühere gesonderte
  Abschnitt-1-Gliederung und das Manuskript werden hier nicht umgeschrieben.
- Ausgangspunkt: `presentation/Struktur_Masterarbeit_Input.pages`, im vorherigen
  Gespräch direkt über Pages gelesen. Die Datei bleibt unverändert als frühere
  Fassung erhalten. SHA-256:
  `3c5846b00db562f0dd271c874379478b737f2fc18d7af3e67982015d152015e1`.
- Der festgehaltene Interaction-Stand bleibt unverändert; siehe
  [Checkpoint vom 15. September](checkpoints/2026-09-15-interaction/README.md).
- Dokumentation: ursprüngliche Sicherung `P-0147`, `AI-042`; aktuelle
  Überarbeitung der Gesamtgliederung `P-0151`, `AI-046`; anschließende
  Eingrenzung von Abschnitt 1 `P-0152`, `AI-047`; Wiederaufnahme der
  Zeitlichkeitsnotizen `P-0154`, `AI-049`; bestätigte kompakte Platzierung in
  Operation 2 `P-0155`, `AI-050`; aktuelle Dreiteilung und Vermeidung von
  Doppelungen `P-0156`, `AI-051`; kritische Ergänzung `P-0157`, `AI-052`;
  jetzige Gesamtüberarbeitung `P-0158`, `AI-053`. Keine neue TXT-Kennung,
  da Gliederung und Untersuchungsfragen, keine übernommene Kapitelprosa.

## Leitfrage

Wie wird eingegebener Text technisch wirksam - und wer bestimmt die Bedingungen
und die Reichweite dieser Wirksamkeit?

Arbeitsargument: Texteingabe gibt Nutzer:innen Einfluss auf einen Vorgang,
aber nicht notwendig gleichwertige Verfügung über dessen Kontext, Maßstäbe,
weitere Zwecke und Folgen. Diese Unterschiede an konkreten Entscheidungen
untersuchen, nicht aus dem Wort „System“ oder aus Unsichtbarkeit allein ableiten.

Argumentative Folge: Festlegung der Eingabe -> Auswahl und Bewertung ->
weitere Verwendung -> Nachvollziehbarkeit und Eingriffsmöglichkeiten.
Das ist eine analytische Ordnung, keine universelle zeitliche Prozesskette.

## 1. Technische Rolle und Kontext der Eingabe

Leitfrage: Was wird als Eingabe wirksam, und wer legt ihre technische Rolle
und Zusammensetzung fest?

Kernaussage: Den sichtbaren Text zu verfassen bedeutet nicht, den gesamten
Verarbeitungskontext festzulegen.

### 1.1 Vom selbst formulierten Text zur zugeordneten Eingabe

- An Interaction anschließen: Ein Text liegt vor; nun seinen technischen Status
  statt erneut seine Herstellung untersuchen.
- Zeichenfolge und technische Rolle unterscheiden. Den vorhandenen kurzen
  Command-Line-Kontrast `mkdir entwurf` nur hier verwenden, nicht erneut in Abschnitt 2.
- Am Formular zeigen, wie Wert und technischer Feldname verbunden werden.
- Nicht abstrakt „das System“ als Entscheider einsetzen: Standardkonvention,
  Softwareimplementierung und konkrete Formulargestaltung auseinanderhalten.
- Kritische Frage: Welchen Teil lege ich mit meiner Formulierung fest,
  und welche Zuordnung ist bereits durch die Anwendung vorgegeben?

### 1.2 Die Eingabe erhält einen Kontext, den ich nicht vollständig verfasse

- Am Promptfeld selbst verfassten Text und mögliche ergänzende Gesprächsteile
  oder Anweisungen unterscheiden.
- Konkrete Zuständigkeiten benennen: Nutzer:innen formulieren; Anwendungsentwickler
  können weitere Bestandteile zusammenstellen; die verwendete Schnittstelle
  legt deren technische Darstellung mit fest. Rollen können personell zusammenfallen.
- Die im eingereichten Text erwähnten Nachrichtenrollen hier verorten.
  Eine vorgesehene Priorität allenfalls kurz als Eigenschaft der Zuordnung nennen;
  keine erneute Erklärung in Abschnitt 2 und keine Garantie tatsächlicher Befolgung.
- Suchindex und mögliche Suchkontextdaten aus DRAFT-03 nur knapp als Umgebung
  anführen, falls für den Anschluss nötig. Ein Index ist ein Suchbestand,
  nicht allein deshalb ein zusätzlich übermittelter Bestandteil der Nutzeranfrage.
- Die API-Dokumentation bleibt ein begrenztes technisches Beispiel, keine
  Beschreibung jedes Promptfelds. Die ältere engere
  [Abschnittsskizze](GLIEDERUNG_OPERATION_TECHNISCHE_ROLLE_KONTEXT_01.md)
  dient weiterhin als Material, hat aber keinen Vorrang vor dieser Gesamtfassung.

### 1.3 Autorenschaft und Verfügung auseinanderhalten

- Eigene analytische Zuspitzung: Die Autorenschaft am eingegebenen Text und die
  Verfügung über dessen technische Einbettung sind unterschiedliche Dinge.
- Fragen, welche Ergänzungen und Zuordnungen Nutzer:innen überhaupt kennen
  oder konfigurieren können; fehlende Sichtbarkeit nicht als Täuschungsabsicht ausgeben.
- Den Konflikt festhalten, statt schon sämtliche internen Verfahren zu erklären:
  Ich kann meine Formulierung kontrollieren, ohne alle Bedingungen ihrer Verarbeitung festzulegen.

Übergang: Damit ist der Rahmen der Eingabe bestimmt; Abschnitt 2 untersucht,
wann Verarbeitung einsetzt und nach welchen Verfahren und Maßstäben sie erfolgt.

Abgrenzung: Rolle und Zusammensetzung, nicht ausführliche Syntaxlehre,
Ranking, Generierung, Verhaltenstraining oder Datennachnutzung. Die Verteilung
von Zuständigkeiten ist eine Analyse der konkreten Konfiguration, kein Beleg
für vollständige Kontrolle durch einen einzelnen Anbieter.

Beleganschlüsse: bestehende DRAFT-03-Belege, WHATWG 4.10.22.4 und die begrenzt
ausgewertete Kontextdokumentation. Kein erneutes Quellen-Sign-off des Fließtexts.

## 2. Verarbeitung und ihre Maßstäbe

Leitfrage: Wie entsteht aus der Eingabe ein Ergebnis, wer bestimmt seine
Bewertungsmaßstäbe und welche Interessen wirken dabei zusammen?

Arbeitsargument: Nutzer:innen beeinflussen das Ergebnis mit ihren Eingaben,
verfügen aber nicht im gleichen Maß wie Anbieter über die Bedingungen seiner
Auswahl und Erzeugung. Diese Bedingungen stehen in institutionellen und
teilweise kommerziellen Zusammenhängen. Inhaltsanbieter können ihre Angebote
an dokumentierten oder vermuteten Auswahlkriterien ausrichten. Das ist eine
eigene analytische Zuspitzung, keine Behauptung vollständiger Kontrolle oder
identischer Geschäftsmodelle aller vier Fälle.

### Kurzer Auftakt: Wann beginnt Verarbeitung?

- Bearbeitung, Übermittlung und Ausführung einer beabsichtigten Handlung unterscheiden.
- Bereits Änderungen eines Feldwerts können technische Ereignisse auslösen.
- Eine ausdrückliche Übermittlung ist deshalb ein bestimmter Verarbeitungsschritt,
  nicht der Beginn sämtlicher Operationen.
- Daraus nicht ableiten, dass jede Anwendung bereits beim Tippen Daten an einen
  Server sendet.
- Am jeweiligen Beispiel prüfen, welches Ereignis welchen Vorgang auslöst.
- Ergänzendes Suchbeispiel: In der Chrome-Suchleiste können Ergebnisse zu einer
  vorgeschlagenen Fortsetzung bereits vor deren Bestätigung vorgeladen werden.
  Vorbereitung und bestätigte Auswahl bleiben unterschiedliche Vorgänge.
- Im eingereichten Text präzisieren: Beim Prefetch findet ein Abruf bereits
  statt; noch ausstehend ist die Bestätigung der vorgeschlagenen Suchanfrage.
  Nicht behaupten, noch keine technische Operation sei ausgeführt worden.

Kritische Frage: Welche Verarbeitung habe ich bewusst ausgelöst - und welche
ist bereits Teil der Eingabesituation?

Von Tim als Platzierung bestätigt. Der ursprüngliche Punkt 6 bleibt ein kurzer
Auftakt, kein zusätzlicher großer Abschnitt. Die [kompakte Arbeitsnotiz](NOTIZEN_OPERATION_ZEITLICHKEIT_01.md)
enthält Beleganschlüsse und Grenzen. Tims Gmail-Erinnerung bleibt separat als
persönlicher Rechercheanlass, nicht als technischer Beleg. Danach folgen die
drei inneren Bewegungen:

### Erste Bewegung: Wie wird verarbeitet?

- An die technische Einbettung aus Abschnitt 1 anschließen, ohne sie erneut
  zu erklären. Jetzt geht es um Prüfung, Auswahl und Generierung.
- **Formular:** Validierung prüft einen Wert gegen festgelegte Anforderungen.
  HTML-Constraint-Validation unterscheidet ungültige Zustände und kann eine
  Übermittlung verhindern. Formale Gültigkeit ist nicht notwendig Wahrheit;
  diesen Punkt nur einmal erklären. Nicht erneut die Name-Wert-Zuordnung beschreiben.
- **Suche:** Die Ermittlung möglicher Treffer und deren Rangordnung unterscheiden.
  Am historischen Google-Beispiel die Kombination mehrerer Rankingmerkmale
  knapp erklären. Den bereits behandelten Index voraussetzen.
- **Prompt:** Das Grundprinzip autoregressiver Generierung erläutern:
  Vorangehende Tokens bedingen Wahrscheinlichkeiten möglicher Fortsetzungen.
  Tokens nicht mit Wörtern und Generierung nicht mit der stets wahrscheinlichsten
  Wortwahl gleichsetzen. Kontext und Nachrichtenrollen sind bereits eingeführt.
- Technische Beispiele begrenzen: WHATWG spezifiziert Browserverhalten, nicht
  beliebige Serverpraxis; GPT-2 und Brin/Page sind historische Mechanismusbelege,
  keine vollständigen heutigen Produktbeschreibungen.
- Keine erneute Command-Line-Erklärung. Das Beispiel `mkdir entwurf` bleibt
  in Abschnitt 1 und der Gesamtarbeit erhalten.

Belegbasis: WHATWG, Abschn. 4.10.21; Brin/Page 1998, S. 109-113;
Radford et al. 2019, PDF-S. 2, 4 und 6. Quelle und Grenze werden bei der
Ausarbeitung jeweils der konkreten Aussage zugeordnet.

### Zweite Bewegung: Nach welchen Maßstäben wird verarbeitet?

- Vom Verfahren zu den darin wirksamen Kriterien wechseln. Das sind zwei
  Betrachtungsweisen, keine getrennten technischen Phasen. Beispiele nicht
  vollständig wiederholen.
- **Formular - Zuständigkeit:** Wer legt Anforderungen fest, und welche Anpassung
  verlangen sie von der eingebenden Person? Standard, konkrete Implementierung
  und institutionelle Vorgaben unterscheiden. Keine erneute Validierungserklärung;
  aus einer Formatprüfung allein folgt keine belegte soziale Ausgrenzung.
- **Suche - relevant:** Warum gelten bestimmte Merkmale als Hinweise auf
  Relevanz oder Qualität? Google als Betreiber sowie Entwicklungs-, Auswertungs-
  und Qualitätsteams benennen. Laut Google prüfen Menschen und Experimente
  Änderungen; einzelne Qualitätsprüfende sortieren nicht direkt die Trefferliste.
- **Suche - Entscheidungsposition:** Das Ändern einer Anfrage ist nicht dasselbe
  wie das Festlegen oder Ändern der Auswahlregeln. Mit Gillespie als Theorie
  untersuchen, wie Zugang, Wissen und Änderungsmöglichkeiten verteilt sind.
  Nutzer:innen wirken mit, sind aber nicht in gleicher Weise Betreiber.
- **Suchwerbung - kommerzielle Erreichbarkeit:** Laut Google können Suchbegriffe
  auch die Auswahl gekennzeichneter Anzeigen bestimmen. Organische Rangordnung
  und bezahlte Platzierung auseinanderhalten. Google beschreibt Anzeigen als
  Finanzierung; Alphabet benennt Anzeigenklicks als Monetarisierungsgröße.
  Anbietererklärungen sind kein unabhängiger Neutralitätsnachweis.
- Nutzeranliegen, Betreibererlös und Werbeziel gegenüberstellen. Ein Angebot kann
  hilfreich UND kommerziell sein; Konflikte nicht allein aus Kommerzialität ableiten.
  Die Machtfrage betrifft auch, wer das Verhältnis dieser Interessen gestaltet.
- **Generierung - wahrscheinlich:** Eine bedingte Fortsetzungswahrscheinlichkeit
  ist nicht mit einem Urteil über sachliche Richtigkeit oder Nützlichkeit identisch.
- **Verhaltenstraining - erwünscht:** Am InstructGPT-Beispiel Demonstrationen,
  menschliche Antwortvergleiche und deren Verwendung als Trainingssignale
  unterscheiden. Forschende, ausgewählte Bewertende und Modellanbieter konkret
  benennen; ausgewählte Urteile nicht als Maßstab aller Menschen darstellen.
- Training und Verarbeitung einer späteren Anfrage auseinanderhalten. Nicht
  behaupten, Menschen bewerteten bei jeder Anfrage erneut die Antwort.
- **Vorgeprägte Hilfe:** Ausgewählte Maßstäbe prägen die Form angebotener
  Unterstützung. Fragen, welche Vorstellung von Hilfreichsein darin wirksam wird,
  wenn Nutzer:innen Bestätigung, Rat, Kritik oder eine Prüfung anfordern.
- **Sycophancy als Konfliktfall:** Problematische Anpassung an Nutzerpositionen
  von Freundlichkeit unterscheiden. Positive Bewertung garantiert keine
  sachliche Verlässlichkeit. Sharma zeigt zugleich, dass auch Wahrhaftigkeit
  bevorzugt wird; kein pauschales „Gefallen statt Wahrheit“.
- Als normative Position prüfen: Sachliche Unterstützung kann gerade Widerspruch
  verlangen. Nicht als empirischen Befund oder als universelle Nutzerpräferenz ausgeben.
- Regeln, Kriterien und gemessene Wirkungen getrennt behandeln; keine Absicht
  zur Manipulation oder Maximierung der Verweildauer aus diesen Befunden ableiten.

Kritische Frage: Wer kann operative Bedingungen festlegen, prüfen oder verändern,
und wie werden unterschiedliche Interessen dabei gewichtet?

Belegbasis: WHATWG, Abschn. 4.10.21; Brin/Page 1998, S. 108-113;
Google, ausgewertete Ranking-/Evaluationsdokumentation; Ouyang et al. 2022,
interne PDF-S. 2, 4-10; Sharma et al. 2024, S. 5-9; Gillespie 2014,
S. 175-179 und 185-187 (Satzfahne); Google, How ads work on Google Search;
Alphabet, Form 10-K 2025, S. 5, 29-30 und 33-34.

### Dritte Bewegung: Anpassung an Auswahlverfahren

- Eine neue Frage eröffnen: Was geschieht, wenn Inhaltsanbieter ihre Angebote
  an den Auswahlverfahren ausrichten?
- Drei analytische Rollen unterscheiden: Nutzer:innen stellen eine Anfrage;
  Betreiber gestalten die Such-/Antwortanwendung und deren Auswahlverfahren;
  Inhaltsanbieter bearbeiten Inhalte im Hinblick auf ihre Berücksichtigung.
  Dies ist keine Behauptung, dass stets drei getrennte Unternehmen beteiligt sind.
- Beim Anzeigenfall kommt die Rolle der Werbetreibenden hinzu. Rollen können
  sich überschneiden. SEO/GEO sind nicht dasselbe wie Anzeigenzahlungen an den
  Betreiber; die Bezahlung einer Optimierungsdienstleistung ist wieder ein anderer Vorgang.
- Kriterien müssen nicht vollständig offengelegt sein. Dokumentierte Vorgaben,
  beobachtete Ergebnisse und daraus abgeleitete Vermutungen können Ausgangspunkte
  der Anpassung sein. Diese argumentative Rekonstruktion nicht als gemessene
  allgemeine Abfolge aller Optimierungspraktiken darstellen.
- **SEO:** Anpassung von Inhalten beziehungsweise Websites im Hinblick auf
  Auffindbarkeit und Sichtbarkeit in klassischen Suchergebnissen.
- **GEO:** Anpassung von Quellen im Hinblick auf ihre Präsenz in generierten
  Antworten. Auf Systeme beziehen, die Quellen verarbeiten, nicht auf jedes
  beliebige Promptfeld oder alle LLM-Anwendungen.
- **Aggarwal als begrenzter Fall:** Veränderungen an Quelltexten beeinflussten
  im untersuchten Aufbau deren Präsenz in generativen Antworten. Keine Messung
  organischer Webreichweite, tatsächlicher Aufmerksamkeit oder Nutzervertrauens.
- Inhaltsoptimierung durch Dritte und Verhaltenstraining durch Modellanbieter
  nicht gleichsetzen. Eine Inhaltsänderung ist nicht automatisch eine Änderung
  von Modellgewichten oder Auswahlregeln.
- Anpassung nicht grundsätzlich als Täuschung behandeln. Bessere Lesbarkeit und
  echte Belege können ebenfalls nützlich sein. Keyword-Stuffing ist nicht ganz SEO.
- Kein falsches Entweder-oder zwischen Relevanz und Optimierung: Ein Inhalt kann
  hilfreich und zugleich für Auswahlverfahren bearbeitet sein.
- Als eigene Synthese zuspitzen: Die Anfrage trifft auf Inhalte, die andere
  Akteure bereits im Hinblick auf ihre spätere Auswahl gestaltet haben können.

Kritische Fragen: Wessen Inhalte werden berücksichtigt? Welche Darstellungsformen
werden durch die Auswahlbedingungen begünstigt? Wie unterscheiden sich das
Informationsinteresse der suchenden Person und das Sichtbarkeitsinteresse eines
Inhaltsanbieters?

Belegbasis: Aggarwal et al. 2024, PDF-S. 2-7; methodische Grenzen S. 8-9 und 12;
Gillespie 2014, S. 183-187 (Satzfahne), als theoretischer Anschluss.
Die allgemeine Akteursbeziehung ist Projektsynthese, kein universeller Effektbefund.

**Zusammenführung:** Gültigkeit, Relevanz, Wahrscheinlichkeit, Sichtbarkeit,
positive Bewertung und sachliche Verlässlichkeit nicht gleichsetzen. Zwischen
Anliegen und Ergebnis stehen Verfahren, gesetzte Maßstäbe und mögliche
Anpassungen anderer Beteiligter. Macht betrifft ungleiche Verfügung über
operative Bedingungen, nicht bloß die Existenz von Regeln. Schutz vor
Ausnutzung, wirtschaftliche Interessen und Nachvollziehbarkeit können ebenfalls
in Spannung stehen. Danach folgt in Operation 3 die andere Frage
nach Übertragung, Speicherung und weiterer Verwendung der Eingabe.

Umfang: Kurzer Auftakt und drei innere Bewegungen, keine neuen Hauptabschnitte.
Technische Grundlagen nur so weit ausführen, wie sie die Kriterien verständlich
machen. Nicht unter „Rückwirkung“ behaupten, dass die Plattform ihre Regeln
aufgrund der Inhaltsoptimierung verändert; das wurde nicht untersucht.
Nutzer-Rückkopplung und Cheng bleiben in Operation 4. Quellenanschlüsse und
Grenzen: [Quellenrunde](QUELLENRUNDE_OPERATION_01.md) und
[Ergänzung](QUELLENUEBERSICHT_OPERATION_GEO_SYCOPHANCY_01.md).
Der konkrete Kürzungs- und Quellenanschluss zum eingereichten Text steht in der
[kritischen Redaktionsstruktur](REDAKTION_OPERATION_2_INTERESSEN_MACHT_01.md).

## 3. Übertragung, Speicherung und Weiterverwendung

Quellennachtrag P-0160 / AI-055: Die autorisierte
[Staab-/BetterHelp-Auswertung](QUELLENUEBERSICHT_OPERATION_PROFILE_WEITERVERWENDUNG_01.md)
ergänzt Textinferenz und dokumentierte Vorwürfe zusätzlicher Werbeverwendung.
Die folgende Binnenstruktur bleibt vorerst unverändert; eine neue Gewichtung
der Beispiele steht zur gemeinsamen Prüfung. Kein Beleg allgemeiner Manipulation.

Arbeitsargument: Der unmittelbar verfolgte Nutzungszweck beschreibt nicht
automatisch die gesamte Verwendung einer Eingabe. Ob weitere Verwendungen
stattfinden, muss am konkreten Fall geprüft werden.

Leitfrage: Wohin reicht die Verwendung einer Eingabe über das unmittelbare
Anliegen hinaus, und wer entscheidet über diese Zwecke?

### 3.1 Vom unmittelbaren Anliegen zu den Datenwegen

- Den Kontrast eröffnen: Eine sichtbare Antwort oder erfolgreiche Übermittlung
  sagt für sich noch nicht, ob und wofür Daten darüber hinaus verwendet werden.
- Nur am gewählten Fall bestimmen, was lokal verarbeitet und was an welche
  beteiligten Stellen übertragen wird. Nicht pauschal jeden Eingabetext als
  serverseitig gespeichert behandeln.
- Übertragung, Speicherung, Weitergabe, Verknüpfung und erneute Nutzung
  analytisch trennen; nicht aus einem dokumentierten Vorgang alle übrigen ableiten.
- Noch keine vollständige Infrastrukturgeschichte: Den für die Zweckerweiterung
  relevanten Weg verfolgen, nicht sämtliche denkbaren Empfänger aufzählen.

### 3.2 Dieselbe Eingabe kann mehreren Zwecken dienen

- Als bereits belegten historischen Anker reCAPTCHA von 2008 vorschlagen:
  Zugangskontrolle und Beitrag zur Digitalisierung sind in einer Eingabe verbunden.
- Die zweite Antwort ist zunächst eine Transkriptionshypothese; ihre Aggregation
  knapp erläutern, damit zusätzliche Verwendung nicht bloß behauptet bleibt.
- Kritische Frage: Für welche Aufgabe leiste ich mit meiner Eingabe Arbeit,
  und wer hat diese Verbindung verschiedener Zwecke eingerichtet?
- Den Nutzen der Digitalisierung nicht bestreiten, um die Zweckverknüpfung
  untersuchen zu können. Zusätzlicher Nutzen belegt weder Ausbeutung noch Einwilligung.
- Der API-Datenfall bleibt eine optionale Ergänzung mit anderer Funktion:
  getrennte Speicherzwecke und Konfigurationsmöglichkeiten untersuchen.
  Keine Übertragung auf Consumer-Produkte, keine erneute Rollen-/Kontexterklärung.

### 3.3 Zuständigkeit, Nutzen und Entscheidungsspielräume

- Betreiber, eingebundene Dienstleister und gegebenenfalls Auftraggeber nur
  soweit unterscheiden, wie sie für den konkreten Fall belegt sind.
- Fragen, wer Zwecke, Empfänger und Aufbewahrung festlegt und wer sie verändern kann.
- Nutzen differenzieren: Zugang oder Antwort für die eingebende Person,
  weitere Daten- oder Arbeitsbeiträge für andere Beteiligte. Kommerzielle
  Verwertung nur dort behaupten, wo sie konkret belegt ist.
- Als Machtfrage untersuchen, ob die Bedingungen zusätzlicher Verwendung
  vorgegeben, wählbar oder individuell verhandelbar sind. Keine Antwort vorwegnehmen.
- Das Anzeigenbeispiel aus Abschnitt 2 belegt nicht automatisch dauerhafte
  Profilbildung, Datenverkauf oder Verwendung jeder Anfrage zum Modelltraining.

Übergang: Wenn die Verwendung über das unmittelbare Anliegen hinausreichen
kann, wird entscheidend, was davon erkennbar und noch beeinflussbar ist.

Abgrenzung: Hier Datenwege und Zwecke; in Abschnitt 2 Auswahl und
Geschäftsinteressen bei der Ergebnisbildung; in Abschnitt 4 Erkenntnis- und
Eingriffsmöglichkeiten. Rückmeldung kann einen Datenweg anzeigen, ersetzt aber
keinen Beleg für ihn. Keine neue Rechtsprüfung oder universelle Datenschutzbehauptung.

Beleganschlüsse: von Ahn et al. 2008, S. 1465-1467; optional die bereits
ausgewertete, datierte API-Datenquelle. Für den historischen Kernfall ist
Material vorhanden. Eine konkrete Behauptung gegenwärtiger Weiterverwertung
benötigt dagegen einen passenden Fallbeleg; die Struktur allein schließt diese Lücke nicht.

## 4. Sichtbare Rückmeldung und operative Reichweite

Arbeitsargument: Eine überzeugende oder positiv bewertete Rückmeldung macht
die zugrunde liegende Verarbeitung noch nicht nachvollziehbar. Zugleich
kann gerade diese Rückmeldung die weitere Eingabe orientieren.

Leitfrage: Was lässt sich von der Verarbeitung erkennen, prüfen und noch
verändern, und wer stellt die dafür nötigen Möglichkeiten bereit?

### 4.1 Das Ergebnis ist keine vollständige Auskunft über seine Entstehung

- Ergebnis, Fehlermeldung und Statusanzeige als ausgewählte Rückmeldungen
  betrachten, nicht als vollständiges Protokoll aller Operationen.
- An den vorherigen Fällen prüfen, ob Kontext, Auswahlkriterien, beteiligte
  Akteure und weitere Datenzwecke aus der Rückmeldung erschließbar sind.
- Sichtbarkeit und Erklärung unterscheiden: Eine Quelle oder Anzeigenkennzeichnung
  kann Orientierung geben, legt aber nicht sämtliche Auswahlentscheidungen offen.
- Den Anwendungsbetreiber als Gestalter der Rückmeldung benennen, ohne
  auszublenden, dass Standards und technische Grenzen mitwirken.

### 4.2 Überzeugungskraft und Prüfbarkeit können auseinanderfallen

- Quellenpräsenz, sachliche Richtigkeit, positive Bewertung und
  Nachvollziehbarkeit nicht gleichsetzen; die Mechanismen aus Abschnitt 2 nicht wiederholen.
- Cheng als begrenzten Wirkungsfall verwenden: positive Bewertung und
  Wiederverwendungsabsicht von den untersuchten Orientierungs-/Konfliktwirkungen trennen.
- Fragen, welche Grundlage Nutzer:innen erhalten, um eine Antwort zu überprüfen,
  statt ihre Überzeugungskraft bereits als Bestätigung ihrer Qualität zu behandeln.
- Keine langfristige Abhängigkeit oder bewusst manipulative Geschäftsstrategie
  aus kurzfristigen Versuchsbefunden ableiten.

### 4.3 Wissen, widersprechen und rückgängig machen sind unterschiedliche Möglichkeiten

- Erkenntnis nicht mit Kontrolle gleichsetzen: Einen Vorgang zu verstehen
  bedeutet noch nicht, seine Bedingungen verändern zu können.
- Am Fall prüfen, welche technischen Eingriffs-, Korrektur- oder
  Rücknahmemöglichkeiten nach Übermittlung beziehungsweise Ausführung bestehen.
- Eine neue Eingabe, eine geänderte Ausgabe und die Rücknahme bereits
  ausgelöster Folgen unterscheiden. Keine allgemeine Rücknehmbarkeit versprechen.
- Zuständigkeit konkretisieren: Wer kann lediglich die Eingabe ändern,
  wer Kriterien, gespeicherte Daten oder bereits ausgelöste Vorgänge beeinflussen?
- Nicht automatisch unbegrenzte Betreiberkontrolle voraussetzen; Fähigkeiten
  und Grenzen müssen auch auf dieser Seite am Fall bestimmt werden.

### 4.4 Rückkopplung und Kapitelabschluss

- Die Rückmeldung wird zur Grundlage der nächsten Wahrnehmung und Eingabe.
- Zu Interaction zurückführen: Dort steht die Anpassungsarbeit im Zentrum;
  hier die Frage, welche Informationen und Eingriffsmöglichkeiten ihr zugrunde liegen.
- Wiederholung ist keine Garantie besserer Prüfung. Fragen, ob Nutzer:innen
  tatsächliche Bedingungen überprüfen oder sich an sichtbaren Ergebnissen orientieren müssen.
- Die vier Abschnitte als unterschiedliche Verteilungen von Verfügung
  zusammenführen: über Kontext, Maßstäbe, Verwendung und Folgen.
- Schlussposition: Nicht die Schlichtheit des Feldes allein ist problematisch,
  sondern mögliche Differenzen zwischen leichtem Eingeben und begrenztem
  Wissen beziehungsweise Einfluss auf das Ausgelöste.

Abgrenzung: Interaction betrachtet die Anpassungsarbeit der Nutzer:innen;
Operation untersucht hier die Bedingungen und Grenzen der Rückmeldung,
an der sie sich orientieren. Surface betrifft deren sichtbare Gestaltung.
Diese Perspektiven greifen ineinander, werden aber nicht nochmals vollständig
erzählt. Kein eigenständiger Exkurs über KI-Psychologie; Rücknahme und
technisch ausgelöste Folgen bleiben neben der Rückkopplung erhalten.

Beleganschlüsse: die zuvor untersuchten Verfahren und Fälle sowie Cheng
als begrenzter Wirkungsbeleg. Konkrete Rücknahmefunktionen sind noch am
gewählten Beispiel zu prüfen; die Fragen behaupten deren Vorhandensein nicht.

## Abgrenzung wiederkehrender Themen

- **Kontext und Anweisungen:** Zusammensetzung in 1; trainierte Kriterien in 2.
- **Suchwerbung:** Ergebnisbildung und Interessen in 2; weitere Datenverwendung
  nur mit eigenem Beleg in 3; Erkennbarkeit und Prüfung in 4.
- **SEO/GEO:** Anpassung durch Inhaltsanbieter in 2, keine zweite Erklärung in 4.
- **Sycophancy:** Verhaltensmaßstäbe und Konfliktfall in 2; begrenzte Wirkungen
  und Grundlage der Prüfung in 4.
- **reCAPTCHA:** zusätzliche Funktion und Datenbeitrag in 3; in 4 höchstens
  kurzer Rückverweis auf das Verhältnis von Rückmeldung und operativer Funktion.
- **Zeitlichkeit:** kurzer Auftakt in 2; keine Wiederholung als Kontextkapitel.

## Verhältnis zur bisherigen Struktur

- „Übersetzung in eine technische Funktion“ wird zu Abschnitt 1 präzisiert.
- „Verarbeitung“ wird als Abschnitt 2 durch die Frage nach Maßstäben strukturiert.
- Übertragung, Speicherung und Weiterverwendung werden als Abschnitt 3 aus
  der bisherigen Verarbeitungsliste herausgelöst.
- „Kontext und Konsequenz“ entfällt als separate Überschrift: funktionaler
  Kontext geht in Abschnitt 1 ein, zusätzliche Verwendungen in Abschnitt 3,
  operative Reichweite und sichtbare Rückmeldung in Abschnitt 4.
- „Sichtbare und operative Bedeutung“ wird als abschließender Abschnitt 4
  beibehalten und auf Nachvollziehbarkeit und Eingriffsmöglichkeiten zugespitzt.

## Schreib- und Evidenzgrenzen

- Die Abschnitte bilden eine analytische Ordnung, keine für alle Systeme
  identische zeitliche Verarbeitungskette. Operation beginnt nicht grundsätzlich
  erst nach dem Absenden.
- Command Line, Formular, Suchfeld und Promptfeld bleiben erhalten. Suche und
  Prompting tragen den Schwerpunkt; die anderen Fälle dienen als Kontraste.
- Nicht jedes Beispiel muss in jedem Abschnitt gleich ausführlich erscheinen.
- Regeln, Zuständigkeiten und Interessen dort benennen, wo ein konkreter
  Mechanismus untersucht wird; kein zusätzliches allgemeines Machtkapitel.
- Technische Komponenten, menschliche Entscheidungen und institutionelle
  Verantwortlichkeiten nicht als austauschbare Akteure behandeln.
- SEO/GEO und Sycophancy innerhalb der untersuchten Mechanismen behandeln;
  kein zusätzliches SEO-, GEO- oder Manipulationskapitel. Suche nicht als
  objektives Finden und Prompting nicht als bloße Täuschung gegenüberstellen.
- Belegte Abläufe und Wirkungen, eigene Interpretationen und offene Fragen
  voneinander trennen. Unsichtbarkeit belegt keine Absicht zur Verschleierung.
- Die bisherigen Quellenrunden tragen die vorhandenen begrenzten Fälle,
  nicht automatisch jede neue kritische Behauptung. Beim Schreiben konkrete
  Aussagen mit den geprüften Passagen abgleichen;
  nur bei einer tatsächlich benötigten, ungedeckten Aussage gezielt nachsuchen.
  Keine neue breite Quellenrunde und keine Erweiterung der bisherigen Beleggrenzen.

## Nächster Schritt

Diese Gesamtgliederung gemeinsam prüfen; danach abschnittsweise die
notwendigen Quellenstellen zuordnen und vorhandene Prosa gezielt bearbeiten.
Nicht den gesamten Rumpftext ersetzen. Die konkrete
Operation-2-Redaktionsstruktur bleibt als untergeordnete Schreibhilfe gültig.
Für Abschnitt 3 ist der historische Fall vorbereitet, der zusätzliche
API-Fall weiterhin optional; für Abschnitt 4 konkrete Eingriffsmöglichkeiten
nicht ohne Prüfung ausformulieren. Keine neue breite Quellenrunde.

## Bisherige Quellenfortschreibungen

Die folgenden Schritte gingen der jetzigen Gliederungsüberarbeitung voraus.

**Fortschreibung vom 15. September 2026:** Tim hat anschließend die drei
konkreten Lücken priorisiert und eine Recherche beauftragt. Die
[Quellenrunde Operation 01](QUELLENRUNDE_OPERATION_01.md) ergänzt Suche/Ranking,
LLM-Verarbeitung/Verhaltensmaßstäbe und einen begrenzten API-Datenfall, ohne
die viergliedrige Struktur zu ändern. Anbieterbeschreibung und unabhängige
Evidenz sowie API und ChatGPT-Weboberfläche bleiben getrennt. Kein
Operation-Fließtext geschrieben; Auswahl des API-Beispiels noch offen.

**Weitere Quellenfortschreibung:** Die autorisierte
[GEO-/Sycophancy-Ergänzung](QUELLENUEBERSICHT_OPERATION_GEO_SYCOPHANCY_01.md)
ordnet drei neue Arbeiten den Abschnitten 2 und 4 zu. Sie behandelt
Quellenpräsenz, Präferenzmaßstäbe und kurzfristige Antwortwirkungen, nicht
pauschal absichtliche Manipulation. Die vier Überschriften bleiben auch nach
der aktuellen Überarbeitung unverändert. Die innere Argumentationsfolge ist
oben präzisiert; die genaue Absatzformulierung bleibt der Ausarbeitung vorbehalten.
