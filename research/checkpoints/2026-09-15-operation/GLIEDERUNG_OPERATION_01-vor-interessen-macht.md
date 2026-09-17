# Operation - bestätigte Arbeitsgliederung

## Status

- Datum: 15. September 2026.
- Tim hat die vorgeschlagene vierteilige Struktur als Arbeitsgliederung bestätigt
  und um ihre stichpunktartige Sicherung gebeten.
- Nach den beiden Quellenrunden hat Tim die gezielte Überarbeitung bestätigt:
  vier Abschnitte und Reihenfolge bleiben erhalten; Abschnitt 2 erhält eine
  klarere innere Abfolge, Abschnitt 4 wird auf Nachvollziehbarkeit und
  Rückkopplung zugespitzt. SEO/GEO und Sycophancy werden darin eingeordnet.
- Verbindlicher Arbeitsstand für die nächste Ausarbeitung von Operation;
  noch kein ausformulierter oder quellengeprüfter Kapiteltext.
- Aktuelle Überarbeitung: Operation 2 erhält nach dem kurzen Zeitpunkt-Auftakt
  drei innere Bewegungen: Verfahren, Maßstäbe und Anpassung an Auswahlverfahren.
  SEO/GEO stehen in der dritten Bewegung; Ouyang und Sharma in der zweiten.
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
  Doppelungen `P-0156`, `AI-051`. Keine neue TXT-Kennung,
  da Gliederung und Untersuchungsfragen, keine übernommene Kapitelprosa.

## Leitfrage

Wie wird eingegebener Text technisch wirksam - und wer bestimmt die Bedingungen
und die Reichweite dieser Wirksamkeit?

## 1. Technische Rolle und Kontext der Eingabe

Verbindlich für die Ausarbeitung ist die von Tim übermittelte und bestätigte
[Abschnittsstruktur](GLIEDERUNG_OPERATION_TECHNISCHE_ROLLE_KONTEXT_01.md).
Sie ersetzt die vorherige breitere Skizze dieses Abschnitts.

Leitfrage: Was wird technisch eigentlich als Eingabe verarbeitet - und wodurch
erhält der selbst formulierte Text dabei seine jeweilige Rolle?

Die vier inneren Bewegungen sind:

1. Vom formulierten Text zur technischen Eingabe.
2. Zwei Formen technischer Einbettung: Zuordnung am Formular und Ergänzung
   beziehungsweise größerer Kontext am Promptfeld.
3. Die Formulierung legt die technische Eingabe nicht vollständig fest.
4. Zuspitzung und Übergang zur nachfolgenden Verarbeitung.

Abgrenzung: Nur Rolle, Zuordnung und Zusammensetzung untersuchen. Keine
ausführlichen Command-Line- oder Suchbeispiele, Verarbeitung während des
Tippens, Anweisungsprioritäten, Generierungsmechanismen, trainierten
Verhaltensweisen, Validierung, Ranking, SEO/GEO, Sycophancy, Speicherung oder
Datenweiterverwendung vorwegnehmen. Nicht jede mögliche Ergänzung ist eine
nachgewiesene Praxis jedes Promptfeldes. Kein Nachweis absichtlicher Verschleierung.

## 2. Verarbeitung und ihre Maßstäbe

Arbeitsargument: Ein Ergebnis folgt nicht nur einem technischen Verfahren.
In dessen Gestaltung und Bewertung werden zugleich Maßstäbe wirksam, die
nicht selbstverständlich mit dem Anliegen der eingebenden Person übereinstimmen.
Inhaltsanbieter können ihre Angebote wiederum an dokumentierten oder vermuteten
Auswahlkriterien ausrichten. Diese Anpassung ist eine eigene analytische Frage.

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
  Übermittlung verhindern. Nicht erneut die Name-Wert-Zuordnung beschreiben.
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
- **Formular - gültig:** Welche Anforderungen werden geprüft? Welche Angaben
  gelten innerhalb dieser Regeln als zulässig? Formale Gültigkeit ist kein
  Beleg sachlicher Wahrheit. Standardvorgaben und konkrete Formulargestaltung
  als unterschiedliche Ebenen der Festlegung benennen.
- **Suche - relevant:** Warum gelten bestimmte Merkmale als Hinweise auf
  Relevanz oder Qualität? Google als Betreiber sowie Entwicklungs-, Auswertungs-
  und Qualitätsteams benennen. Laut Google prüfen Menschen und Experimente
  Änderungen; einzelne Qualitätsprüfende sortieren nicht direkt die Trefferliste.
- **Generierung - wahrscheinlich:** Eine bedingte Fortsetzungswahrscheinlichkeit
  ist nicht mit einem Urteil über sachliche Richtigkeit oder Nützlichkeit identisch.
- **Verhaltenstraining - erwünscht:** Am InstructGPT-Beispiel Demonstrationen,
  menschliche Antwortvergleiche und deren Verwendung als Trainingssignale
  unterscheiden. Forschende, ausgewählte Bewertende und Modellanbieter konkret
  benennen; ausgewählte Urteile nicht als Maßstab aller Menschen darstellen.
- Training und Verarbeitung einer späteren Anfrage auseinanderhalten. Nicht
  behaupten, Menschen bewerteten bei jeder Anfrage erneut die Antwort.
- **Sycophancy als Konfliktfall:** Problematische Anpassung an Nutzerpositionen
  von Freundlichkeit unterscheiden. Positive Bewertung garantiert keine
  sachliche Verlässlichkeit. Sharma zeigt zugleich, dass auch Wahrhaftigkeit
  bevorzugt wird; kein pauschales „Gefallen statt Wahrheit“.
- Regeln, Kriterien und gemessene Wirkungen getrennt behandeln; keine Absicht
  zur Manipulation oder Maximierung der Verweildauer aus diesen Befunden ableiten.

Kritische Frage: Wer legt diese Kriterien fest - und wessen Vorstellung eines
guten Ergebnisses wird darin wirksam?

Belegbasis: WHATWG, Abschn. 4.10.21; Brin/Page 1998, S. 108-113;
Google, ausgewertete Ranking-/Evaluationsdokumentation; Ouyang et al. 2022,
interne PDF-S. 2, 4-10; Sharma et al. 2024, S. 5-9.

### Dritte Bewegung: Anpassung an Auswahlverfahren

- Eine neue Frage eröffnen: Was geschieht, wenn Inhaltsanbieter ihre Angebote
  an den Auswahlverfahren ausrichten?
- Drei analytische Rollen unterscheiden: Nutzer:innen stellen eine Anfrage;
  Betreiber gestalten die Such-/Antwortanwendung und deren Auswahlverfahren;
  Inhaltsanbieter bearbeiten Inhalte im Hinblick auf ihre Berücksichtigung.
  Dies ist keine Behauptung, dass stets drei getrennte Unternehmen beteiligt sind.
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
- Als eigene Synthese zuspitzen: Die Anfrage trifft auf Inhalte, die andere
  Akteure bereits im Hinblick auf ihre spätere Auswahl gestaltet haben können.

Kritische Fragen: Wessen Inhalte werden berücksichtigt? Welche Darstellungsformen
werden durch die Auswahlbedingungen begünstigt? Wie unterscheiden sich das
Informationsinteresse der suchenden Person und das Sichtbarkeitsinteresse eines
Inhaltsanbieters?

Belegbasis: Aggarwal et al. 2024, PDF-S. 2-7; methodische Grenzen S. 8-9 und 12.
Die allgemeine Akteursbeziehung ist Projektsynthese, kein universeller Effektbefund.

**Zusammenführung:** Gültigkeit, Relevanz, Wahrscheinlichkeit, Sichtbarkeit,
positive Bewertung und sachliche Verlässlichkeit nicht gleichsetzen. Zwischen
Anliegen und Ergebnis stehen Verfahren, gesetzte Maßstäbe und mögliche
Anpassungen anderer Beteiligter. Danach folgt in Operation 3 die andere Frage
nach Übertragung, Speicherung und weiterer Verwendung der Eingabe.

Umfang: Kurzer Auftakt und drei innere Bewegungen, keine neuen Hauptabschnitte.
Technische Grundlagen nur so weit ausführen, wie sie die Kriterien verständlich
machen. Nicht unter „Rückwirkung“ behaupten, dass die Plattform ihre Regeln
aufgrund der Inhaltsoptimierung verändert; das wurde nicht untersucht.
Nutzer-Rückkopplung und Cheng bleiben in Operation 4. Quellenanschlüsse und
Grenzen: [Quellenrunde](QUELLENRUNDE_OPERATION_01.md) und
[Ergänzung](QUELLENUEBERSICHT_OPERATION_GEO_SYCOPHANCY_01.md).

## 3. Übertragung, Speicherung und Weiterverwendung

Arbeitsargument: Der unmittelbar verfolgte Nutzungszweck beschreibt nicht
automatisch die gesamte Verwendung einer Eingabe. Ob weitere Verwendungen
stattfinden, muss am konkreten Fall geprüft werden.

- Wohin gelangen Eingaben, und welche Stellen sind an ihrer Verarbeitung beteiligt?
- Welche Bestandteile werden übertragen, gespeichert oder weiterverwendet?
- Unmittelbaren Nutzungszweck und mögliche zusätzliche Verwendungen unterscheiden.
- Technische, institutionelle oder wirtschaftliche Konsequenzen am konkreten
  Fall untersuchen, statt sie allgemein vorauszusetzen.
- Wer bestimmt Zwecke, Empfänger und Reichweite der Verarbeitung?
- Speicherung, Weitergabe und Verwendung zum Modelltraining nicht gleichsetzen;
  jeweils prüfen, welche Vorgänge tatsächlich dokumentiert sind.
- Das bereits ausgewertete historische reCAPTCHA als möglichen Fall einer
  Verbindung von Zugangskontrolle und zusätzlicher Digitalisierungsarbeit prüfen.
- Den recherchierten API-Datenfall nur mit seiner konkreten Produkt-, Zeit-
  und Konfigurationsgrenze verwenden. Seine Auswahl bleibt offen; Regeln für
  eine API nicht auf die ChatGPT-Weboberfläche übertragen.

Kernfrage: Reicht die Nutzung einer Eingabe über den Zweck hinaus, den die
eingebende Person unmittelbar verfolgt?

## 4. Sichtbare Rückmeldung und operative Reichweite

Arbeitsargument: Eine überzeugende oder positiv bewertete Rückmeldung macht
die zugrunde liegende Verarbeitung noch nicht nachvollziehbar. Zugleich
kann gerade diese Rückmeldung die weitere Eingabe orientieren.

- Welche Teile der Verarbeitung werden als Ergebnis, Fehlermeldung oder
  Vorschlag sichtbar?
- Sichtbares Ergebnis und nachvollziehbare Ursache unterscheiden.
- Quellenpräsenz, sachliche Richtigkeit, positive Bewertung und
  Nachvollziehbarkeit als unterschiedliche Eigenschaften einer Ausgabe prüfen.
- Was lässt sich aus einer Rückmeldung über die tatsächlich ausgeführte
  Verarbeitung erkennen, und was bleibt offen?
- Welche Kriterien und beteiligten Akteure aus Abschnitt 2 werden in der
  Ergebnisdarstellung erkennbar, welche lassen sich daraus nicht erschließen?
- Cheng als begrenzten Wirkungsfall einsetzen: Positive Bewertung und
  Wiederverwendungsabsicht sind nicht automatisch bessere Orientierung.
  Kurzfristige Versuchsbefunde nicht als langfristige Abhängigkeit oder als
  Nachweis absichtlich manipulativer Geschäftsstrategien darstellen.
- Welche Eingriffs- und Rücknahmemöglichkeiten bestehen technisch nach einer
  Verarbeitung oder Übermittlung?
- Bearbeitung des Textes und Rücknahme bereits ausgelöster Folgen unterscheiden.
- Wahrgenommene Handlung, operative Funktion und Konsequenz zusammenführen.
- Rückbindung an Surface und Interaction: Die technisch erzeugte Rückmeldung
  wird zur Grundlage weiterer Wahrnehmung, Bewertung und Eingabe.
- Fragen, ob erneute Eingabe tatsächlich eine Überprüfung ermöglicht oder
  vor allem an der bereits angebotenen Bestätigung ausgerichtet wird.
  Wiederholung dabei nicht mit Verbesserung gleichsetzen.

Kernfrage: Welche Reichweite der Eingabe wird sichtbar, nachvollziehbar und
noch beeinflussbar?

Abgrenzung: Interaction betrachtet die Anpassungsarbeit der Nutzer:innen;
Operation untersucht hier die Bedingungen und Grenzen der Rückmeldung,
an der sie sich orientieren. Surface betrifft deren sichtbare Gestaltung.
Diese Perspektiven greifen ineinander, werden aber nicht nochmals vollständig
erzählt. Kein eigenständiger Exkurs über KI-Psychologie; Rücknahme und
technisch ausgelöste Folgen bleiben neben der Rückkopplung erhalten.

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
- Die beiden Quellenrunden reichen für die geplante begrenzte Ausarbeitung.
  Beim Schreiben konkrete Aussagen mit den geprüften Passagen abgleichen;
  nur bei einer tatsächlich benötigten, ungedeckten Aussage gezielt nachsuchen.
  Keine neue breite Quellenrunde und keine Erweiterung der bisherigen Beleggrenzen.

## Nächster Schritt

Die drei Bewegungen von Operation 2 anhand dieser Stichpunkte ausarbeiten,
ohne die Grundlagen aus dem eingereichten Abschnitt 1 erneut zu erklären.
Belegstellen bei der Formulierung aussagenbezogen prüfen. Die vorhandenen
Quellen reichen für den begrenzten Ansatz; keine neue breite Quellenrunde.

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
