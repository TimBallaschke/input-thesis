# Morris 2024 - Prompting Considered Harmful

## Status und Zugriff

- Bibliografie: Meredith Ringel Morris, „Prompting Considered Harmful“, *Communications of the ACM* 67, Nr. 12 (2024), S. 28–30. DOI: `10.1145/3673861`.
- Citation Key: `morrisPromptingConsideredHarmful2024`
- Quellentyp: fachlicher Meinungs- und Positionsbeitrag an der Schnittstelle von HCI und KI
- Gelesene Fassung: vollständiger Artikel unter `https://cacm.acm.org/opinion/prompting-considered-harmful/`, bibliografisch gegengeprüft über `https://deepmind.google/research/publications/90773/`
- Zugriffstiefe: vollständiger Onlineartikel einschließlich Abschnitte, Fußnoten und Literatur
- Gelesene Seiten/Abschnitte: veröffentlichte S. 28–30; „Limitations of Prompting as an End-User Interface“ und „Limitations of Prompting as an Expert Interface for ML Researchers and Engineers“
- Noch erforderlich: Empirische Einzelbehauptungen des Beitrags müssen über die jeweils zitierten Originalstudien geprüft werden; heutige Produktinterfaces und Modelloperation benötigen eigene Primärdokumentation.

## Gegenstand, Methode und Evidenzart

Morris argumentiert aus professioneller HCI-/KI-Perspektive, dass Prompting von einer Test- und Debuggingoberfläche für ML-Fachleute zum faktischen Endnutzerparadigma generativer KI geworden sei und als Interface abgelöst werden sollte. Der Beitrag entwickelt zwei Argumentlinien: Nachteile für Endnutzer:innen und Risiken für Forschung und Evaluation durch empfindliche, schlecht dokumentierte Promptvariation. Es handelt sich nicht um eine eigene Nutzerstudie oder ein technisches Modellpaper.

## Surface

Das Promptfeld erscheint als freie sprachliche Eingabe, kommuniziert aber weder die empfindlichen Formulierungsbedingungen noch einen klaren Aktionsraum. Morris stellt ihm mögliche Alternativen gegenüber: echte dialogische natürliche Sprache, Gesten, Direct Manipulation, multimodale Formen sowie begrenzende grafische Oberflächen wie Menüs und Templates. Begrenzte GUIs können verfügbare Handlungen sichtbar machen und Wiedererkennen statt Erinnern unterstützen; zugleich können völlig offene Eingaben gerade durch ihre Offenheit Barrieren erzeugen.

## Interaction

Prompting wird ausdrücklich nicht mit menschlicher natürlicher Konversation gleichgesetzt. Erfolgreiche Prompts können ungewöhnliche oder arkane Formulierungen verlangen und empfindlich auf Wortwahl, Schreibweise, Interpunktion und Abstände reagieren. Nutzer:innen müssen daher Absicht in modellgeeigneten Text übersetzen, Ergebnisse prüfen und Varianten ausprobieren. Morris schlägt außerdem Mixed-Initiative-Systeme vor, die Präferenzen aktiver erfragen, statt die gesamte Spezifikationslast auf die Nutzer:innen zu legen.

## Operation

Der Beitrag beschreibt generative Systeme als stochastisch und promptempfindlich; gleiche Eingabe garantiert daher nicht dasselbe Ergebnis. Einige Produkte schreiben Prompts im Hintergrund um, was für Nutzer:innen möglicherweise nicht transparent oder kontrollierbar ist. Für Forschung führt Morris den Begriff „prompt-hacking“ ein: viele Varianten ausprobieren, Fehlschläge nicht berichten, Robustheit gegen kleine Änderungen, Modelle oder Wiederholungen nicht prüfen. Dies sind methodische Risiken, keine Erklärung interner Modellinferenz.

## Übergänge

- **Surface -> Interaction:** Die freie Form des Promptfelds verbirgt, welche Formulierungen funktionieren und welche Systemfähigkeiten verfügbar sind, wodurch Erkundungs- und Bewertungsarbeit entsteht.
- **Interaction -> Operation:** Kleine sprachliche Änderungen können neue Modellanfragen mit stark anderen Ausgaben erzeugen; der genaue interne Mechanismus wird nicht erklärt.
- **Surface -> Operation:** Hintergründiges Prompt-Rewriting kann den operativ verarbeiteten Text vom sichtbar eingegebenen Text entfernen.
- **Operation -> Surface/Interaction:** Stochastische und versionsabhängige Antworten erschweren Lernen aus einem einzelnen Versuch und die Reproduzierbarkeit von Forschungsergebnissen.

## Direkt gestützte Aussagen

| ID | Aussage in eigenen Worten | Belegstelle | Evidenzart | Ebene | Einschränkung |
| --- | --- | --- | --- | --- | --- |
| MOR24-P1 | Morris charakterisiert Prompting als ehemalige Test-/Debuggingoberfläche, die zum faktischen Endnutzerinterface generativer KI geworden ist. | Einleitung, S. 28 | fachliche Position | S / O | Kein historischer Vollnachweis im Beitrag selbst. |
| MOR24-P2 | Prompting ist nach Morris nicht mit menschlicher natürlicher Sprache gleichzusetzen, weil erfolgreiche Eingaben ungewöhnliche Formen verlangen und auf kleine Variationen empfindlich reagieren können. | „Limitations … End-User Interface“, S. 28–29 | Argument mit Literaturverweisen | I / O | Einzelbelege müssen in Originalstudien gegengeprüft werden. |
| MOR24-P3 | Offene natürliche Eingabe kann durch fehlende Affordanzen selbst eine Barriere sein; Menüs und Templates können Aktionsmöglichkeiten sichtbar machen und Wissen stützen. | „Limitations … End-User Interface“, S. 29 | Designargument | S / I | Nicht im Beitrag vergleichend evaluiert. |
| MOR24-P4 | Als Alternativen nennt der Beitrag unter anderem Direct Manipulation, Gesten, multimodale und Mixed-Initiative-Interaktion. | „Limitations … End-User Interface“, S. 29 | Interface-Typologie | S / I | Vorschläge, keine gemessene Rangfolge. |
| MOR24-P5 | Einige generative Systeme schreiben Nutzereingaben im Hintergrund um, wodurch verarbeiteter und sichtbar eingegebener Prompt auseinanderfallen können. | „Limitations … End-User Interface“, S. 29 | Produktbeobachtung im Beitrag | S / O | Keine konkrete Version oder technische Pipeline dokumentiert. |
| MOR24-P6 | Morris definiert „prompt-hacking“ als methodisches Risiko, wenn viele Varianten, Fehlschläge und Robustheitsprüfungen unvollständig berichtet werden. | „Limitations … Expert Interface“, S. 29–30 | methodische Kritik | I / O | Analogie und Position, keine gemessene Prävalenz. |
| MOR24-P7 | Der Beitrag fordert für Forschung die Dokumentation genauer Prompts, ihres Entstehungswegs, verworfener Varianten und Robustheitsprüfungen. | „Limitations … Expert Interface“, S. 30 | methodische Empfehlung | I / O | Empfehlung wurde hier nicht evaluiert. |

## Verhältnis zur Grundstruktur

Die Quelle artikuliert präzise die für die Arbeit zentrale Spannung zwischen offen wirkender Prompt-Surface, tatsächlicher Formulierungsarbeit und opaker beziehungsweise variabler Systemoperation. Sie erweitert die historische Command-/Natural-Language-Frage um Menüs, Templates, Direct Manipulation und Mixed Initiative. Ihre Stärke ist die Problemformulierung, nicht empirische Beweisführung.

## Grenzen und Gegenprüfung

Der Text ist ein kurzer Positionsbeitrag. Aussagen zu Endnutzerproblemen, Promptempfindlichkeit, Produkt-Rewriting und Evaluation beruhen auf Literatur oder professioneller Einschätzung. Zamfirescu-Pereira et al. 2023 liefern direkte Beobachtung von Promptarbeit; Subramonyam et al. 2024 einen konzeptionellen Rahmen; technische LLM- und Produktquellen bleiben für Operation und aktuelle Interfaces erforderlich.

## Entscheidung

**Stützquelle.** Funktion: zugespitzte HCI-Kritik an Prompting als Surface und methodischer Rahmen für die Differenz zwischen offenem Eingabefeld, Formulierungsarbeit und operativ verarbeitetem Prompt. Nicht als alleiniger empirischer Beleg verwenden.
