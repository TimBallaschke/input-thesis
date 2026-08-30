# Interaction – Iteration und Reformulierung

## Kernaussage

Texteingabe kann Teil einer zeitlichen Folge aus Eingabe, Systemreaktion, Bewertung und erneuter Eingabe werden; Reformulierung verändert dabei zusätzlich Form, Umfang oder inhaltliche Ausrichtung der folgenden Eingabe.

## Mini-Gliederung

1. **Begriffe:** Bearbeitung verändert den aktuellen Text, Iteration folgt auf eine Systemreaktion und Reformulierung verändert die nächste Eingabe.
2. **Unterschiedliche Schleifen:** Formularvalidierung zielt auf eine bestehende Anforderung, während Suchergebnisse neue Begriffe oder Richtungen für eine Query liefern können.
3. **Dialogische Folge:** ELIZA belegt historisch die wiederholbare Eingabe-Antwort-Struktur, nicht die Reformulierung selbst.
4. **Promptiteration:** LLM-Ausgaben können neue Prompts auslösen; im untersuchten BotDesigner-Fall blieb diese Arbeit häufig lokal und wenig systematisch.
5. **Zeitlichkeit:** Systemreaktionen können zu Bedingungen der nächsten Eingabe werden, ohne automatisch Lernen oder Verbesserung zu erzeugen.

## Quellenübersicht

| Unterpunkt | Quelle und Passage | Benötigte Aussage | Grenze |
| --- | --- | --- | --- |
| Formularschleife | [Seckler et al. 2014](source-notes/seckler-et-al-2014-usable-web-forms.md), S. 1279–1282; SE14-P1–P7 | Nicht akzeptierte Eingaben können Korrektur und erneute Submission erfordern; verbesserte Fassungen benötigten weniger Versuche. | drei Registrierungsformulare; gebündelte Verbesserungen; Formatbefund vor allem NZZ |
| Suchreformulierung | [Hearst 2009](source-notes/hearst-2009-search-user-interfaces-preview.md), Buch-S. 3 und 7–8; HEARST-P1, P4, P6 | Ergebnisse geben Rückmeldung zur Query und können Begriffe oder Richtungen für eine weitere Präzisierung liefern. | historischer unvollständiger Buchauszug; zugrunde liegende Studien sekundär berichtet |
| Dialogische Struktur | [Weizenbaum 1966](source-notes/weizenbaum-1966-eliza.md), S. 36; W66-P1–P2 | Nach abgeschlossener Eingabe antwortet ELIZA und gibt die Kontrolle für eine weitere Eingabe zurück. | Fernschreiberimplementierung; keine Reformulierungsstudie und kein heutiges LLM |
| Beobachtete Promptiteration | [Zamfirescu-Pereira et al. 2023](source-notes/zamfirescu-pereira-et-al-2023-why-johnny-cant-prompt.md), PDF-S. 9–12; ZP23-P2–P6, P11 | Zehn Teilnehmende iterierten lokal und ad hoc; systematische Tests blieben ungenutzt und einzelne verbesserte Antworten galten häufig als Erfolg. | angeleiteter Rezeptchatbot, kleine Stichprobe, BotDesigner und `text-davinci-002` |
| Iterationskosten | [Subramonyam et al. 2024](source-notes/subramonyam-et-al-2024-gulf-of-envisioning.md), PDF-S. 2 und 6–7; SUB24-P4–P5, P8 | Lesen und Reformulieren verursacht Aufwand und kann frühe Ausgaben sowie lokale Verbesserungen begünstigen. | theoretische Synthese und Interfaceanalyse; keine eigene Wirkungsmessung |

## Entscheidung

Die vorhandenen Quellen reichen für den autorbestätigten kompakten Abschnitt aus. Die funktionalen Definitionen und der Vergleich der Schleifen bleiben als Projektsynthese gekennzeichnet. Direkt beobachtet sind nur die jeweiligen begrenzten Formular- und BotDesigner-Fälle; aktuelle freie Suchsessions und allgemeine heutige LLM-Chatverläufe bleiben offen.
