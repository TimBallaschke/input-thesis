# Operation 3: Prüfung von Abdeckung und Gewichtung

Stand: 15. September 2026. P-0162 / AI-057. Gegenstand ist der unveränderte
Nutzerentwurf DRAFT-06. Dies ist eine redaktionelle Empfehlung, keine übernommene
Gliederungsänderung und keine vollständige Quellenprüfung des Entwurfs.

## Befund

Die Sorge ist teilweise berechtigt: Nicht die neuen Quellen selbst sind das
Problem, sondern die Gewichtung. Der Text führt zusätzliche Verwendungszwecke
ausführlich aus; Übertragung bleibt abstrakt und Speicherung wird fast nur
genannt. Die letzte KI-Stichpunktfassung hat diese Verschiebung mit begünstigt,
indem sie den bereits ausgewerteten API-Fall ungenutzt ließ.

| Ursprüngliche Frage | Im vorliegenden Text | Empfehlung |
| --- | --- | --- |
| Wohin gelangen Eingaben, welche Stellen verarbeiten sie? | Im Auftakt allgemein; konkret vor allem bei der Weitergabe für Werbung | Datenweg und beteiligte Stellen vor den Fällen kurz konkretisieren; keine universelle Verarbeitungskette behaupten |
| Was bleibt nach der unmittelbaren Verarbeitung gespeichert? | Begrifflich genannt, aber ohne ausgeführten Fall | Speicherung, Zweck und Dauer als eigenständige Fragen wieder aufnehmen |
| Welche Zwecke sind zu unterscheiden? | Schwerpunkt auf zusätzlicher Nutzung, Werbung und Ableitung | Aufgabenbezogene Speicherung, Sicherheitsprotokollierung und mögliches Training auseinanderhalten |
| Wem kommt eine Mehrfachverwendung zugute? | reCAPTCHA und BetterHelp tragen diese Frage | Beibehalten; nicht jede Mehrfachverwendung als Missbrauch behandeln |
| Welche Informationen entstehen über ausdrücklich Mitgeteiltes hinaus? | Durch Staab ergänzt | Beibehalten, aber Reddit-Befunde nicht als Nachweis aktueller Promptdienst-Praxis ausgeben |
| Wer verfügt über Zwecke und Reichweite? | Deutlich vorhanden; mehrere ähnliche Synthesen | Einmal bündeln, nicht weitere allgemeine Machtabsätze hinzufügen |

## Minimale Ergänzung

Nach dem zweiten Absatz ein bis zwei kurze Absätze zu Datenwegen und Speicherung
einfügen. Ein begrenztes API-Beispiel kann beide Fragen verbinden: Eine Anwendung
kann einen Modellanbieter einbeziehen; welche Daten erhalten bleiben, hängt von
der dokumentierten Funktion und Konfiguration ab. Technisch mögliche weitere
Stellen sind nicht ohne Fallbeleg als tatsächliche Empfänger zu behandeln.

Die vorhandene OpenAI-Auswertung unterscheidet bereits die Nutzung fürs Training,
Missbrauchsprotokolle und gespeicherten Anwendungszustand. Die offizielle
[API-Dokumentation](https://developers.openai.com/api/docs/guides/your-data)
bestätigt beim erneuten Abruf am 15. September 2026 diese Unterscheidung:
API-Daten werden nach Anbieterangabe ohne ausdrückliches Opt-in nicht fürs
Training genutzt; dennoch können Protokolle oder aufgabenbezogener Zustand
gespeichert werden. **Nicht fürs Training genutzt bedeutet nicht automatisch
nicht gespeichert.** Dies betrifft die API, nicht pauschal ChatGPT oder alle
Promptfelder. Es ist eine Anbieterbeschreibung, kein unabhängiger Praxisaudit.
Beleganschluss: `source-notes/openai-2026-api-context-data-controls.md`,
OAI26-P4 bis P7. Keine neue Quelle oder Import erforderlich.

Die kritische Anschlussfrage lautet: Wer bestimmt, welche Speicherung für einen
Zweck erforderlich ist, wie lange sie dauert und wer darüber verfügen kann?
Die Optionen und ihre Sichtbarkeit im Interface gehören anschließend in
Operation 4. Auch die Abgrenzung ist wichtig: Weiterverarbeitung oder Speicherung
ist nicht automatisch ein Wechsel des ursprünglichen Zwecks.

## Platz durch Straffung

Die Aussagen zum erweiterten Zweck wiederholen sich im dritten Absatz, nach
BetterHelp und in den beiden zusammenfassenden Absätzen vor dem Übergang.
Diese Synthesen zusammenführen, statt den Gesamttext deutlich zu verlängern.
reCAPTCHA als kurzen historischen Kontrast behalten; BetterHelp als konkreten
kommerziellen Fall und Staab als begrenzte Ergänzung anschließen.

Empfohlene Bewegung: Datenwege und Speicherung → unterschiedliche Zwecke →
reCAPTCHA → BetterHelp → personenbezogene Ableitungen → eine gemeinsame
Zuspitzung und Übergang zur Erkennbarkeit/Einwirkung. Nicht jede der vier
Eingabeformen muss hier einen eigenen Fall erhalten. Die bestehende Gliederung,
Stichpunktdatei und Manuskripte wurden nicht geändert.
