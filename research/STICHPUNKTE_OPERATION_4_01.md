# Operation 4: Sichtbare Rückmeldung und operative Reichweite

Stand: 15. September 2026. P-0164 / AI-059. Stichpunktvorschlag auf Grundlage
der bestehenden Gesamtgliederung und ausgewerteten Quellen. Keine verabschiedete
Thesisprosa; keine Änderung von Operation 1-3, Gesamtgliederung oder Manuskripten.
Die Blöcke sind Schreibschritte, keine vorgeschriebene Zahl gedruckter Unterkapitel.

**Leitfrage:** Was lässt sich von der Verarbeitung einer Eingabe erkennen,
überprüfen und noch verändern, und wer stellt die dafür nötigen Möglichkeiten bereit?

**Kernaussage:** Eine sichtbare Rückmeldung macht die ausgelösten Vorgänge
nicht automatisch nachvollziehbar oder rückgängig; entscheidend ist, welche
Informationen und Eingriffsmöglichkeiten die beteiligten Anbieter bereitstellen.

## 1. Rückmeldung: Was wird vom Ausgelösten sichtbar?

- An Operation 3 anschließen: Eine erfolgreiche Anfrage sagt noch nicht,
  ob damit sämtliche Datenverwendungen abgeschlossen sind.
- Ergebnis, Fehlermeldung und Statusanzeige als begrenzte Rückmeldungen
  betrachten, nicht als vollständiges Protokoll aller Operationen.
- Die vier Eingabeformen mit kurzen Prüffragen verbinden, nicht erneut technisch erklären:
  - Formular: Was genau bestätigt eine Annahme- oder Fehlermeldung?
  - Command Line: Welche Auswirkung eines Befehls lässt sich aus seiner
    Rückmeldung tatsächlich überprüfen?
  - Suche: Einen Treffer prüfen und seine Rangposition nachvollziehen unterscheiden.
  - Prompt: Eine Antwort lesen und ihre Entstehungsbedingungen kennen unterscheiden.
- Am konkreten Beispiel festhalten, was angezeigt wird, was dokumentiert ist
  und was Nutzer:innen daraus lediglich erschließen könnten.
- Anwendungsbetreiber als Gestalter der Rückmeldung benennen; Standards,
  eingebundene Dienste und technische Grenzen können mitbestimmen.

Kritische Frage: **Was erfahre ich über den Vorgang, und was nur über das
Ergebnis, das mir angezeigt wird?**

Belegbasis: Hearst 2009, S. 14-18, zu Suchautomation und verständlicher Kontrolle;
Seckler et al. 2014, S. 1276 und 1278-1282, zur beobachteten Formularrückmeldung;
Gillespie 2014, S. 175-177, zu Auswahlkriterien und begrenztem Zugang.
Die typübergreifende Unterscheidung ist Projektsynthese. Die Command-Line-Frage
behauptet keine konkrete Meldung, Exit-Code-Semantik oder Rücknahmefunktion.

## 2. Prüfbarkeit: Eine überzeugende Antwort ist noch keine verlässliche Grundlage

- Sichtbarkeit, Nachvollziehbarkeit, sachliche Richtigkeit und positive
  Bewertung als verschiedene Eigenschaften auseinanderhalten.
- Eine Quellenangabe kann einen Ansatzpunkt zur Prüfung geben; ihre bloße
  Anwesenheit ersetzt weder die Prüfung der Aussage noch die Erklärung ihrer Auswahl.
- Nicht Ranking, GEO oder Verhaltenstraining erneut erklären. Hier geht es um
  die Grundlage, auf der Nutzer:innen das bereits vorliegende Ergebnis beurteilen.
- Cheng et al. als begrenzten Wirkungsfall einsetzen: In den untersuchten
  Konfliktszenarien wurden bestätigende Antworten höher bewertet als missbilligende;
  in den entsprechenden Experimenten stiegen Vertrauen und berichtete Wiederverwendungsabsicht.
- Zugleich waren die Teilnehmenden stärker überzeugt, im Recht zu sein, und
  berichteten geringere Wiedergutmachungsabsichten.
- Daraus als eigene Einordnung ableiten: Eine positive Bewertung kann mit
  problematischen Orientierungswirkungen zusammenfallen; sie ist kein
  hinreichender Maßstab für die Qualität der Unterstützung.

Kritische Frage: **Welche überprüfbaren Gründe liefert eine Antwort, und
welchen Anteil hat bloße Bestätigung an ihrer Überzeugungskraft?**

Belege: Cheng et al. 2026, Artikel-S. 4-7, insbesondere Abb. 3-5;
Gillespie 2014, S. 175, zur Unterscheidung von Zufriedenheit und Relevanz.
Cheng untersucht kurzfristige Urteile und Absichten in englischsprachigen
US-Konfliktszenarien; keine neutrale Vergleichsgruppe, keine allgemeine Prüfung
von Faktenrecherche. Keine langfristige Abhängigkeit, tatsächlich gemessene
Kundenbindung oder absichtliche Geschäftsstrategie daraus ableiten.

## 3. Eingriffsmöglichkeiten: Eine neue Eingabe nimmt frühere Folgen nicht automatisch zurück

- Verstehen, widersprechen, korrigieren und rückgängig machen unterscheiden.
- Reversibilität als Gestaltungsfrage behandeln, nicht als selbstverständliche
  Eigenschaft von Texteingabe. Shneidermans reversible Operationen dienen als
  historischer Designmaßstab, nicht als Beleg heutiger Produktfunktionen.
- Eine bearbeitete Formulierung, eine neu erzeugte Antwort und die Rücknahme
  bereits ausgelöster Vorgänge sind unterschiedliche Eingriffe.
- Am BotDesigner-Beispiel die Reichweite einer Rückmeldung konkretisieren:
  Fehlerlabels dienten menschlichen Tests und wurden nicht vom Modell verarbeitet;
  einzelne Teilnehmende interpretierten sie zunächst als wirksames Modellfeedback.
- Aus Operation 3 nur einen neuen BetterHelp-Aspekt aufnehmen: Laut FTC
  entfernte BetterHelps Löschung bestimmter Angaben aus Werbeplattformen diese
  nicht aus deren zugrunde liegenden Datenbanken (Complaint Rn. 58).
- Daraus keine generelle Unmöglichkeit von Löschung ableiten. Fragen, auf welche
  Datenbestände und Folgen sich ein Eingriff tatsächlich bezieht.
- Zuständigkeiten unterscheiden: Wer kann den Eingabetext ändern, wer technische
  Funktionen oder gespeicherte Daten verändern, und welche weiteren Stellen sind nötig?

Kritische Frage: **Was verändert mein Eingriff tatsächlich, und was bleibt davon unberührt?**

Belege: Shneiderman 1983, S. 64-65, als Designargument;
Zamfirescu-Pereira et al. 2023, S. 4-6 und 11-12, zum konkreten BotDesigner;
FTC 2023, Complaint, Rn. 57-58, S. 13. FTC-Darstellung bleibt ein behördlicher
Vorwurf; keine beobachtete Endnutzer-Löschfunktion. Keine pauschale Aussage
über heutige Stop-, Undo-, Feedback- oder Löschbuttons anderer Produkte.

## 4. Rückkopplung: Rückmeldungen strukturieren die nächste Eingabe

- Die Ausgabe ist nicht nur ein Abschluss, sondern kann Material für die
  nächste Formulierung, Bewertung oder Entscheidung liefern.
- Bei der Suche können Ergebnisse neue Begriffe und weitere Suchrichtungen
  nahelegen; beim Prompting können einzelne Antworten die nächste Änderung anleiten.
- Zu Interaction zurückführen, ohne den Iterationsabschnitt zu wiederholen:
  Dort stand die Anpassungsarbeit im Mittelpunkt; hier die Informationsgrundlage,
  auf der diese Anpassung stattfindet.
- Aus einer einzelnen verbesserten Antwort keine robuste Verbesserung ableiten;
  sichtbare Erfolge und systematische Überprüfung bleiben unterscheidbar.
- Als offene Frage untersuchen, ob Nutzer:innen die Bedingungen des Verfahrens
  prüfen können oder sich an ausgewählten Ergebnissen orientieren müssen.
- Den Anbieteranteil benennen: Die Gestaltung verfügbarer Hinweise und Tests
  beeinflusst, welche Prüfung möglich ist. Nicht jede Schwierigkeit der Prüfung
  als individuelles Kompetenzdefizit behandeln.

Kritische Frage: **Lerne ich durch erneute Eingaben mehr über die Verarbeitung,
oder passe ich mich vor allem an ihre sichtbaren Ergebnisse an?**

Belege: Hearst 2009, S. 3 und 7-8; Zamfirescu-Pereira et al. 2023,
S. 9-12 und 13-14. Historische Suchsynthese und kleine qualitative BotDesigner-Studie;
Designimplikationen nicht als vergleichend bewiesene Verbesserungen ausgeben.
Die Frage nach Anpassung ist Projektsynthese, keine universelle Lerndiagnose.

## 5. Kapitelabschluss: Eingeben können ist nicht gleich verfügen können

- Die vier Operation-Abschnitte einmal zusammenführen:
  - Kontext: Wer bestimmt, was als technische Eingabe wirksam wird?
  - Maßstäbe: Wer legt fest, wie Ergebnisse ausgewählt und bewertet werden?
  - Verwendung: Wer bestimmt Datenwege, Speicherung und zusätzliche Zwecke?
  - Rückmeldung: Was können Nutzer:innen davon erkennen, prüfen und verändern?
- Als eigene Schlussposition formulieren: Die Möglichkeit, einen Text frei
  einzugeben, ist nicht identisch mit der Verfügung über das dadurch Ausgelöste.
- Keine vollständige Kontrolle auf einer Seite und völlige Ohnmacht auf der
  anderen behaupten. Entscheidungsspielräume sind technisch und institutionell verteilt.
- Surface, Interaction und Operation abschließend verbinden: Die sichtbare
  Rückmeldung gehört zur Oberfläche, orientiert weitere Interaktion und
  repräsentiert ausgewählte Aspekte der Operation.
- Das Problem nicht allein in der Schlichtheit des Feldes suchen, sondern in
  möglichen Differenzen zwischen leichtem Eingeben und begrenzter Nachvollziehbarkeit
  beziehungsweise Einflussnahme.

Belegbasis: eigene Zusammenführung der Kapitelbefunde; ergänzend Gillespie
2014, S. 183 und 186-187, zu ungleichen Einfluss- und Gestaltungsmöglichkeiten.
Kein neuer empirischer Befund und keine universelle Manipulationsbehauptung.

## Quellenanschluss und verbleibende Grenze

| Bewegung | Benötigte Quellenstellen | Funktion / Grenze |
| --- | --- | --- |
| Rückmeldung und Vorgang | Hearst S. 14-18; Seckler S. 1276, 1278-1282; Gillespie S. 175-177 | Begrenzte Rückmeldungen, keine konkrete aktuelle CLI-/Statusanalyse |
| Positive Bewertung und Orientierung | Cheng Artikel-S. 4-7; Gillespie S. 175 | Kurzfristiger begrenzter Wirkungsfall, keine Abhängigkeits-/Absichtsthese |
| Reichweite des Eingriffs | Shneiderman S. 64-65; Zamfirescu-Pereira S. 4-6, 11-12; FTC Rn. 57-58 | Designmaßstab plus zwei konkrete Fälle; kein universelles Undo |
| Rückkopplung | Hearst S. 3, 7-8; Zamfirescu-Pereira S. 9-14 | Nicht mit systematischer Optimierung gleichsetzen |
| Kapitelabschluss | Vorangehende Fallbelege; Gillespie S. 183, 186-187 | Eigene Synthese, Einfluss nicht totale Kontrolle |

**Für diese begrenzten Stichpunkte reicht die vorhandene Quellenlage.**
Offen bleibt ein genauer Funktionsbeleg, falls ein heutiger Command-Line-,
Stop-, Undo- oder Löschfall konkret beschrieben werden soll. Dies ist keine
jetzt notwendige breite Quellenrunde. Keine neuen Quellen, Imports oder
Manuskriptänderungen. Keine erneute Erklärung von Ranking, SEO/GEO,
Verhaltenstraining, Profilableitung oder Speicherregeln; keine zweite
ausführliche Darstellung der Interaction-Iteration.
