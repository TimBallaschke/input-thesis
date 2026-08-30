# Hearst 2009 - Search User Interfaces (lokaler Preview-Auszug)

## Status und Zugriff

- Bibliografie: Marti A. Hearst, *Search User Interfaces* (Cambridge: Cambridge University Press, 2009). ISBN `978-0-521-11379-3`.
- Citation Key: `hearstSearchUserInterfaces2009`
- Quellentyp: wissenschaftliches Fachbuch; im lokalen Zugriff nur ein unvollständiger Verlagsauszug
- Gelesene Fassung: `research/source-pdfs/hearst-2009-search-user-interfaces-preview.pdf`
- Dateiprüfung: 42-seitiges lokales PDF; SHA-256 `d5024c61f163fe57d7b3a2fceb0e267d83d3bf96601123e6ce65515b2ab9104d`
- Zugriffstiefe: vollständig gelesen wurden das Vorwort sowie der tatsächlich enthaltene Teil von Kapitel 1, Buchseiten 1–22: Abschnitte 1.1–1.7 und der vorhandene Anfang von 1.8. Der Auszug endet auf Buchseite 22 mitten im Abschnitt.
- Visuelle Prüfung: alle 42 PDF-Seiten einschließlich der Abbildungen 1.1–1.6 gerendert und geprüft.
- Nicht gelesen: Buchseiten 23–28 des ersten Kapitels, Kapitel 2–12, Bibliografie und Indizes. Inhaltsverzeichnis und Kapitelankündigungen im Vorwort gelten nicht als gelesener Kapitelinhalt.

## Gegenstand, Methode und Evidenzart

Hearst synthetisiert Forschung und damalige Praxis zur Gestaltung von Suchoberflächen. Der vorhandene Teil von Kapitel 1 verbindet historische Einordnung, Designrichtlinien, konkrete Interfacebeispiele und Zusammenfassungen publizierter Nutzer- und Logstudien. Die Autorin weist im Vorwort selbst darauf hin, dass Kapitel 1 als Best-Practice-Zusammenfassung gedacht ist und dort nicht jede Aussage unmittelbar belegt wird; die ausführlichen Begründungen sollten in späteren Kapiteln folgen, die lokal nicht vorliegen. Empirische Angaben aus zitierten Studien sind daher Sekundärberichte und keine neu geprüften Originalbefunde.

## Surface

Als typische Suchoberfläche beschreibt Hearst ein Texteingabefeld für Schlüsselwörter und eine vertikale Ergebnisliste. Diese formale Einfachheit wird mit der kognitiven Intensität der Suche, der Einbettung in größere Aufgaben und einem sehr heterogenen Publikum begründet. Sichtbare Suchhilfen umfassen kontextbezogene Ergebnisauszüge, hervorgehobene Query-Begriffe, Sortieroptionen, dynamische Vorschläge während des Tippens, verwandte Begriffe nach der Submission, Verlaufsanzeigen und Facetten. Text direkt im Eingabefeld kann außerdem mitteilen, welche Sammlung durchsucht wird. Die Abbildungen dokumentieren historische Systeme und Websites von 1997 bis 2009; sie belegen keine heutige Standarddarstellung.

## Interaction

Suche erscheint als Folge aus Informationsbedarf, Formulierung, Ergebnisprüfung und weiteren Schritten. Der Auszug berichtet, dass manche Personen Suchfeld und Adressleiste verwechselten, Schlüsselwortsyntax missverstanden oder nach einem erfolglosen ersten Versuch nicht mit iterativer Reformulierung rechneten. Vorschläge, unmittelbar sichtbare Ergebnisse, schnelle Reaktion und wiederauffindbare Query-Verläufe sollen diese Arbeit unterstützen. Die angeführten Stichproben und Nutzungszahlen stammen aus den jeweils zitierten Originalstudien und werden von Hearst nur zusammengefasst; sie dürfen ohne Primärlektüre nicht methodisch weiter verallgemeinert werden.

## Operation

Hearst beschreibt Ranking, Query-Transformationen, Stopwortbehandlung, leichte morphologische Normalisierung und automatische Rechtschreibvorschläge als teilweise opake Eingriffe zwischen Eingabe und Ergebnis. Die zentrale Gestaltungsfrage ist, wie viel Kontrolle das System übernimmt und wie verständlich seine Eingriffe bleiben. Der Auszug erläutert aber weder Indexaufbau noch Retrieval-, Ranking- oder Routingalgorithmen technisch. Die Autorin erklärt im Vorwort sogar ausdrücklich, dass das Buch technische Suchgrundlagen voraussetzt und Rankingalgorithmen nicht behandelt. Für die operative Kette `Query -> Index -> Retrieval -> Ranking` bleibt daher eine technische Primärquelle notwendig.

## Übergänge

- **Surface -> Interaction:** Ein einfaches Feld senkt zunächst die sichtbare Komplexität, kommuniziert aber allein weder Schlüsselwortlogik noch Iteration. Hinweise im Feld, Vorschläge und Ergebnisdarstellung können erwartete Eingaben und nächste Schritte konkretisieren.
- **Interaction -> Operation:** Eine eingegebene Query kann normalisiert, ergänzt, korrigiert oder beim Ranking anders gewichtet werden. Diese Eingriffe können helfen, aber auch die Intention übergehen, wenn sie intransparent oder nicht umkehrbar sind.
- **Operation -> Surface/Interaction:** Ergebnisse, Snippets, Hervorhebungen, Vorschläge, Verlaufsanzeigen und Reaktionszeit machen Teile der Verarbeitung als Feedback erfahrbar und geben Material für Reformulierung.

## Direkt gestützte Aussagen

| ID | Aussage in eigenen Worten | Belegstelle | Evidenzart | Ebene | Einschränkung |
| --- | --- | --- | --- | --- | --- |
| HEARST-P1 | Die Suchoberfläche soll beim Ausdrücken eines Informationsbedarfs, Formulieren einer Query, Verstehen der Ergebnisse und Nachverfolgen des Suchfortschritts helfen. | Buch-S. 1 | konzeptionelle Funktionsbeschreibung | S -> I | Kapitel-1-Synthese, keine einzelne Messung. |
| HEARST-P2 | Die typische Websuche bestand 2009 aus einem Schlüsselwortfeld und einer vertikalen Ergebnisliste; Hearst erklärt die Einfachheit mit Aufgabe, kognitiver Belastung und heterogenem Publikum. | Buch-S. 1–2, Abb. 1.1 | historische/designbezogene Synthese | S | Zeitgebundene Einordnung; Abbildung vergleicht nur Infoseek 1997 und Google 2007. |
| HEARST-P3 | Hearst berichtet aus Hargittais Studie mit 100 Personen, dass manche Teilnehmende Adressleiste und Suchfeld sowie URL- und Querysyntax verwechselten. | Buch-S. 2 | Sekundärbericht einer Studie | S / I | Originalstudie nicht neu gelesen; Stichprobe bezieht sich auf ein County in New Jersey. |
| HEARST-P4 | Noviz:innen mussten laut den zusammengefassten Studien lernen, dass Suche Ergebnisprüfung und iterative weitere Versuche erfordert. | Buch-S. 3 | Sekundärsynthese | I | Mehrere ältere Studien; keine direkte aktuelle Beobachtung durch Hearst. |
| HEARST-P5 | Hearst ordnet den Übergang von spezialisierten, kostenpflichtigen, command- und Boolean-basierten Systemen zur öffentlichen Websuche als Wechsel von Zielgruppe, Korpus, Display und Marktstruktur ein. | Buch-S. 3–5 | historische Synthese | S / I / O | Breite Typisierung; kein lückenloser technischer Verlauf aller Suchsysteme. |
| HEARST-P6 | Unmittelbar sichtbare erste Ergebnisse sollen Richtung und mögliche Reformulierungsbegriffe anzeigen; reine Hilfs- oder Visualisierungsansichten können diese Rückmeldung verdecken. | Buch-S. 7–8 | Designrichtlinie mit Sekundärbelegen | I | Die zugrunde liegenden Studien wurden nicht einzeln geprüft. |
| HEARST-P7 | Queryvorschläge können während des Tippens Präfixe oder semantisch verwandte Begriffe anzeigen; ein berichteter Yahoo-Logdatensatz umfasste 100.000 Besucher:innen über 17 Wochen. | Buch-S. 11–13, Abb. 1.4 | Systembeispiel und Sekundärbericht | S / I | Historisches Yahoo-Interface; Expositions- und Interaktionsdefinitionen aus Originalstudie nicht geprüft. |
| HEARST-P8 | Kurze Reaktionszeiten unterstützen schnelle Queryvarianten; lange Verzögerungen können sorgfältigere, weniger iterative Strategien erzwingen. | Buch-S. 14 | Designrichtlinie mit Sekundärbeispiel | I | Kontext- und infrastrukturspezifisch, keine allgemeine Latenzschwelle. |
| HEARST-P9 | Automatische Ranking- und Querytransformationen erzeugen einen Konflikt zwischen hilfreicher Systemleistung und verständlicher Kontrolle. | Buch-S. 14–18 | konzeptionelle/technische Synthese | I -> O | Keine vollständige Algorithmusbeschreibung oder aktuelle Suchmaschinenprüfung. |
| HEARST-P10 | Text im noch leeren Suchfeld kann die auszulösende Aktion oder den durchsuchten Teilbestand benennen und verschwindet beim Beginn der Eingabe. | Buch-S. 18–19 | Designbeispiel | S -> I | Historische Interfacekonvention, keine Wirkungsmessung im Auszug. |
| HEARST-P11 | Einfache History-Anzeigen können frühere Queries und gewählte Dokumente erneut zugänglich machen. | Buch-S. 19–20, Abb. 1.5 | Designrichtlinie mit Sekundärbelegen | I | Speicherung setzt Produktfunktion und gegebenenfalls Zustimmung voraus. |
| HEARST-P12 | Suche und Navigation können so integriert werden, dass Queries auf einen navigierten Teilbestand wirken und Ergebnisse durch Kategorien oder Facetten weiter eingegrenzt werden. | Buch-S. 19–22, Abb. 1.6 | Interfacekonzept und Sekundärsynthese | S / I / O | Der lokale Auszug endet unmittelbar nach diesem Abschnittsblock; spätere Vertiefung fehlt. |

## Verhältnis zur Grundstruktur

Die Quelle stärkt erstmals den Suchfeldtyp als eigene Surface- und Interaction-Konstellation. Das scheinbar einfache Feld verbirgt sowohl erlernte Konventionen der Queryformulierung als auch automatische Eingriffe und einen iterativen Suchprozess. Besonders produktiv ist die Frage, wie sichtbare Hilfen einen Teil dieser Operationen zurück an die Oberfläche holen, ohne das Feld mit Komplexität zu überladen.

## Grenzen und Gegenprüfung

Der lokale Zugriff ist unvollständig und endet mitten in Abschnitt 1.8. Gerade die laut Inhaltsverzeichnis zentralen Kapitel über Evaluation, Query Specification, Reformulation und Suchprozess wurden nicht gelesen und dürfen nicht zitiert werden. Kapitel 1 ist eine zusammenfassende Designperspektive von 2009; genaue empirische Angaben müssen bei Bedarf in den genannten Originalstudien geprüft werden. Die gezeigten Produkte, Oberflächen und Nutzungspraktiken sind historisch. Aktuelle Suchfelder, Browser-Omniboxen, sprachmodellbasierte Suche und gegenwärtige Vorschlagssysteme benötigen datierte Primärbeobachtungen. Für Index, Retrieval und Ranking ist zusätzlich eine technische Quelle erforderlich.

## Entscheidung

**Kernquelle mit Zugriffsbeschränkung.** Funktion: historische und konzeptionelle Grundlage für Suchfeld-Surface, Queryformulierung, Feedback, Vorschläge, Reformulation und den Konflikt zwischen einfacher Oberfläche und opaker Automation. Verbleibende Lücken: fehlende Buchseiten und Originalstudien, aktuelle Interfaces sowie technische Query-/Retrieval-Operation.
