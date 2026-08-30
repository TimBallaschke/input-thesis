# Interaction – Korrigieren und Bearbeiten

## Kernaussage

Texteingabe erzeugt keinen unveränderlichen Endzustand: Der aktuelle Text kann manuell oder systemgestützt bearbeitet und auf unterschiedlichen Ebenen korrigiert werden, während der sichtbare Zustand seinen Bearbeitungsverlauf verbirgt.

## Mini-Gliederung

1. **Bearbeitbarer Textzustand:** Cursor, Auswahl, Einfügen, Löschen, Ersetzen sowie Undo und Redo erlauben schrittweise und reversible Änderungen.
2. **Bearbeiten und Korrigieren:** Editing dient nicht nur der Fehlerbeseitigung, sondern auch der Erweiterung, Umstellung und Neuformulierung.
3. **Ebenen der Korrektur:** Touchinterpretation, sichtbare Sprachtranskription und Formularvalidierung setzen an unterschiedlichen Stellen der Eingabe an.
4. **Unsichtbarer Verlauf:** Der jeweils sichtbare Text zeigt seinen aktuellen Zustand, nicht die vorausgegangene Bearbeitungsgeschichte.

## Quellenübersicht

| Unterpunkt | Quelle und Passage | Benötigte Aussage | Grenze |
| --- | --- | --- | --- |
| Bearbeitbarer Textzustand | [WHATWG 2026](source-notes/whatwg-2026-html-standard-forms-input.md), Abschn. 4.10.20; WHATWG-P5; [W3C 2026](source-notes/w3c-2026-input-events-level-2.md), Abschn. 6.1–6.2; W3CIE26-P2–P6 | Cursor, Auswahl, Ersetzung, Löschung und Undo/Redo sind unterscheidbare Bearbeitungszustände beziehungsweise Ereignisse. | normative Standards; keine konkrete Oberfläche, Nutzung oder Supportmessung |
| Sichtbarkeit und Reversibilität | [Shneiderman 1983](source-notes/shneiderman-1983-direct-manipulation.md), S. 57–59 und 64–65; SHN83-P1–P3 | Ganzseiteneditoren zeigen Cursor und unmittelbare Änderungen; Undo und Gegenoperationen machen Eingriffe reversibel. | historische Systembeschreibung und Designargument |
| Technische Touchkorrektur | [Oulasvirta et al. 2013](source-notes/oulasvirta-et-al-2013-two-thumb-text-entry.md), S. 2773; OUL13-P7 | Touchposition und Sprachkontext können probabilistisch einer Taste zugeordnet werden. | trainiertes Tablet-Keyboard; online keine verbesserte Fehlerrate |
| Sichtbare Transkription | [Ruan et al. 2017](source-notes/ruan-et-al-2017-speech-keyboard-text-entry.md), Art. 159:5 und 159:13–159:17; RUAN17-P3, P5, P7–P10 | Die Ersttranskription wird kontrolliert und bei Bedarf per Tastatur oder weiterer Sprachsession korrigiert. | kurze Transkription unter Idealbedingungen; Systemstand 2017 |
| Reaktive Formularkorrektur | [Seckler et al. 2014](source-notes/seckler-et-al-2014-usable-web-forms.md), S. 1276–1282; SE14-P2–P7 | Validierungsprobleme können Änderungen und erneute Submission verlangen. | gebündelte Redesigns; kein isolierter Effekt einzelner Hinweise |
| Verdeckter Bearbeitungsverlauf | [MacKenzie/Soukoreff 2002](source-notes/mackenzie-soukoreff-2002-mobile-text-entry.md), S. 164–165; MS02-P8–P9 | Der aktuelle Text enthält keine Information über Löschung, Navigation, Umschalten und andere vorausgegangene Bearbeitungsschritte. | historischer Review; eigene Keystroke-Beobachtung mit vier Personen |

## Entscheidung

Die vorhandenen Quellen reichen für den autorbestätigten kompakten Abschnitt aus. Die Erweiterung, Umstellung und Neuformulierung wird als analytische Funktion dokumentierter Editing-Operationen behandelt, nicht als empirisch gemessenes Nutzungsmotiv. Offen bleiben aktuelle Editing-Oberflächen, reale Browserunterstützung und empirische freie Langtextrevision. Promptrevision und erneute Eingabe folgen erst im Teilabschnitt **Iteration und Reformulierung**.
