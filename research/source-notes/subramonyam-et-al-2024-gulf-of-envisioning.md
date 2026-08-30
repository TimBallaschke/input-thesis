# Subramonyam et al. 2024 - Bridging the Gulf of Envisioning

## Status und Zugriff

- Bibliografie: Hari Subramonyam, Roy Pea, Christopher Lawrence Pondoc, Maneesh Agrawala und Colleen Seifert, „Bridging the Gulf of Envisioning: Cognitive Challenges in Prompt Based Interactions with LLMs“, in *Proceedings of the CHI Conference on Human Factors in Computing Systems* (ACM, 2024), S. 1–19. DOI: `10.1145/3613904.3642754`.
- Citation Key: `subramonyamBridgingGulfEnvisioning2024`
- Quellentyp: theoretische HCI-Arbeit mit Literatur- und Interfaceanalyse; keine neue Nutzerstudie
- Gelesene Fassung: `research/source-pdfs/subramonyam-2024-bridging-gulf-envisioning.pdf` (arXiv v2 vom 18. März 2024 mit übereinstimmender CHI-Zitation und DOI)
- Zugriffstiefe: vollständiger 19-seitiger Artikel einschließlich Abbildungen und Literaturverzeichnis; alle PDF-Seiten visuell geprüft
- Gelesene Seiten: PDF-Seiten 1–19
- Noch erforderlich: Die vorgeschlagenen Begriffe, Pfade und Gestaltungsmuster benötigen empirische Gegenprüfung. Für Modellarchitektur, Tokenverarbeitung oder konkrete Produktversionen sind technische Primärquellen nötig.

## Gegenstand, Methode und Evidenzart

Die Arbeit entwickelt ein konzeptionelles Modell dafür, wie Menschen Ziele in Prompts für Large Language Models übersetzen. Sie verbindet HCI-Modelle menschlicher Handlung mit Forschung zu kognitiven Prozessen bei generativen Aufgaben. Abbildung 1 ordnet LLM-Interaktionen entlang der Dimensionen Intent Specificity, Functional Flexibility und Output Determinacy ein. Abbildung 3 erweitert Normans Handlungsmodell um kognitive Aufgabenprozesse und drei mögliche Interaktionspfade. Anschließend analysieren die Autor:innen ChatGPT für Schreiben, Spellburst für Creative Coding und Cursor für Softwareentwicklung. Aus einer qualitativen Analyse von zwölf zugänglichen oder dokumentierten Systemen leiten sie sechs Gestaltungsmuster ab. Diese Schritte bilden eine theoretische Synthese und Interfaceanalyse, keine Beobachtung tatsächlicher Nutzung.

## Surface

Die offene natürlichsprachige Eingabe von LLM-Interfaces kommuniziert nur schwach, welche Aufgaben das System beherrscht, welche Angaben ein Prompt enthalten sollte und welche Ausgabequalität zu erwarten ist. Die Autor:innen beschreiben diese scheinbar uneingeschränkte Eingabe als „anything goes“-Situation. Gleichzeitig zeigen die analysierten Interfaces sichtbare Hilfen: Beispielprompts, Vorschläge und Autocomplete, editierbare oder regenerierbare Prompts, alternative Ausgaben und Verzweigungen, Referenzen auf Code oder Dokumentation, Erklärungen und manuelle Nachbearbeitung. Die Quelle eignet sich damit zur Analyse kommunizierter Möglichkeiten und fehlender Orientierung. Sie untersucht jedoch weder Feldgeometrie noch die Wahrnehmung dieser Oberfläche in einer Nutzerstudie.

## Interaction

Der zentrale Begriff „Envisioning“ bezeichnet die kognitive Arbeit, ein anfängliches Ziel so in eine Intention und einen Prompt zu überführen, dass Fähigkeiten und erwartbares Verhalten des LLM vorausgedacht werden. Die Autor:innen unterscheiden drei Probleme: den Capability Gap bei der Bestimmung dessen, was das System für eine Aufgabe leisten kann, den Instruction Gap bei der sprachlichen Spezifikation und den Intentionality Gap bei der Vorstellung und Bewertung eines noch nicht erzeugten Ergebnisses. Nutzer:innen können ein Ziel direkt formulieren, ihre Intention ausführlicher entwickeln oder das erzeugte Material in ein spezialisiertes Werkzeug überführen. Iteration ist möglich, verursacht aber Lese- und Reformulierungsaufwand und kann zur Fixierung auf frühe Ausgaben und lokale Verbesserungen führen. Diese Aussagen sind theoretisch aus vorhandener Forschung entwickelt; die Arbeit misst ihre Häufigkeit oder Stärke nicht selbst.

## Operation

Die Arbeit charakterisiert LLM-basierte Systeme als funktional flexibel und ihre Ausgaben als probabilistisch beziehungsweise wenig determiniert. Prompttext spezifiziert keine fest vorgegebene Operation wie bei einem konventionellen Werkzeug, sondern konditioniert eine dynamische Generierung. Geringfügige sprachliche Änderungen können nach Darstellung der Autor:innen deutlich andere Ausgaben erzeugen, während der Zusammenhang zwischen Eingabe und Ausgabe für Nutzende schwer vorherzusagen bleibt. Die Quelle dokumentiert damit eine operative Differenz auf konzeptioneller Ebene. Sie liefert keine technische Rekonstruktion von Tokenisierung, Kontextfenster, Modellarchitektur, Training, Inferenz oder konkreten Backendabläufen.

## Übergänge

- **Surface -> Interaction:** Ein scheinbar frei formulierbares Feld verlagert die Begrenzung von sichtbaren Auswahlmöglichkeiten in die kognitive Arbeit, Fähigkeiten, Instruktionen und gewünschte Ergebnisse selbst zu bestimmen.
- **Interaction -> Operation:** Der formulierte Prompt konditioniert eine probabilistische Generierung; die Ausgabe wird wahrgenommen, bewertet und gegebenenfalls durch weitere Prompts oder ein spezialisiertes Werkzeug überarbeitet.
- **Surface -> Operation:** Die Oberfläche zeigt die dynamische operative Reichweite nur teilweise. Beispiele, Verläufe, alternative Ausgaben, Erklärungen und manuelle Eingriffe können diese Reichweite strukturieren, belegen aber nicht automatisch bessere Ergebnisse.

## Direkt gestützte Aussagen

| ID | Aussage in eigenen Worten | Belegstelle | Evidenzart | Ebene | Einschränkung |
| --- | --- | --- | --- | --- | --- |
| SUB24-P1 | Die Arbeit charakterisiert LLM-Interaktionen entlang von Intent Specificity, Functional Flexibility und Output Determinacy. | Abb. 1; S. 1–2 (PDF) | theoretisches Rahmenmodell | S / I / O | Keine empirisch validierten Skalen. |
| SUB24-P2 | Der „Gulf of Envisioning“ bezeichnet die Distanz zwischen anfänglicher Intention und einem Prompt, der LLM-Fähigkeiten und Trainingsgrundlage hinreichend antizipiert, um eine gewünschte Ausgabe zu erzeugen. | Abschn. 1, S. 2–3 (PDF) | Begriffsdefinition/theoretische Synthese | S -> I | Von den Autor:innen vorgeschlagener Begriff. |
| SUB24-P3 | Die Autor:innen unterscheiden Capability Gap, Instruction Gap und Intentionality Gap. | Abschn. 1 und 3.2.1–3.2.3, S. 2 sowie 6–8 (PDF) | theoretische Differenzierung | I | Die Arbeit misst weder Verbreitung noch Effektstärke der drei Lücken. |
| SUB24-P4 | Das erweiterte Handlungsmodell zeigt drei Pfade: direkte Zielformulierung, ausgearbeitete Intention im Prompt und Übergang mit LLM-Ausgabe in ein spezialisiertes System. | Abb. 3; Abschn. 3.2–3.3, S. 6–8 (PDF) | konzeptionelles Modell | I -> O | Die Pfade sind analytische Vorschläge, keine beobachteten Häufigkeiten. |
| SUB24-P5 | Iteratives Lesen und Reformulieren verursacht Aufwand und kann Nutzende auf frühe Ausgaben beziehungsweise lokale Verbesserungen fixieren. | Abschn. 1 und 3.2.1, S. 2 und 6–7 (PDF) | theoriegestützte Interpretation | I | Nicht in einer eigenen Promptstudie getestet. |
| SUB24-P6 | Die Fallanalyse behandelt ChatGPT, Spellburst und Cursor als unterschiedliche Oberflächen für Schreiben, Creative Coding und Softwareentwicklung. | Abschn. 4, S. 9–11 (PDF) | qualitative Interfaceanalyse | S / I | Produktstände von 2023/2024; keine vergleichende Nutzerstudie. |
| SUB24-P7 | Aus zwölf Systemen werden sechs Gestaltungsmuster abgeleitet: Prompts und Ausgaben visuell verfolgen, Promptideen vorschlagen, mehrere Ausgaben anbieten, Ausgaben erklärbarer machen, domänenspezifische Promptstrategien verwenden und manuelle Kontrolle ermöglichen. | Abschn. 5, S. 11–12 (PDF) | qualitative Musterbildung | S / I | Nicht umfassende Auswahl; Wirksamkeit der Muster nicht empirisch geprüft. |
| SUB24-P8 | Die Arbeit beschreibt Unterschiede zwischen Personen und generativen Aufgaben als Grenze ihres Modells und fordert empirische Prüfung der vorgeschlagenen Unterstützungen. | Abschn. 6.2, S. 14 (PDF) | ausdrückliche Quellenbegrenzung | I | Schränkt verallgemeinernde Aussagen über alle Nutzer:innen und Aufgaben ein. |

## Verhältnis zur Grundstruktur

Die Quelle ist besonders stark am Übergang von Surface zu Interaction. Sie erklärt, warum ein äußerlich offenes und sprachlich niedrigschwelliges Promptfeld nicht voraussetzungslos ist: Die sichtbare Freiheit lässt Aufgabenbestimmung, Spezifikation und Bewertung weitgehend bei den Nutzenden. Für Operation liefert sie nur ein abstraktes Gegenmodell zu festgelegten, determinierten Funktionen.

## Grenzen und Gegenprüfung

Die Arbeit ist eine theoretische Synthese mit exemplarischer Interfaceanalyse. Ihre Begriffe dürfen nicht als direkt beobachtete Nutzerprobleme oder als vollständiges technisches Modell heutiger LLMs ausgegeben werden. Produktbeispiele und Modellbezeichnungen sind zeitgebunden. Zamfirescu-Pereira et al. 2023 können die Interaktionsprobleme für eine konkrete Nicht-Expert:innen-Aufgabe empirisch gegenprüfen. Eine technische Primärquelle wird erst benötigt, wenn der Thesistext Token-, Kontext- oder Inferenzprozesse erklärt.

## Entscheidung

**Kernquelle.** Funktion: theoretischer Rahmen für die schwer sichtbare Übersetzungsarbeit zwischen offenem Promptfeld, menschlicher Intention und probabilistischer Ausgabe. Verbleibende Lücke für späteres Schreiben: empirische Reichweite und technische Modelloperation müssen bei konkretem Bedarf separat belegt werden.
