# Google – Suchverarbeitung, Ranking und Evaluation, Snapshot 2026

## Status und Zugriff

Drei offizielle Dokumentationsseiten, am **15. September 2026** abgerufen. Die Datumsangabe im Dateinamen ist der Recherchezeitpunkt, nicht ein behauptetes Publikationsjahr.

1. Google: [*In-depth guide to how Google Search works*](https://developers.google.com/search/docs/fundamentals/how-search-works), letzter ausgewiesener Stand 18. Dezember 2025. Key `googleSearchWorks2025`.
2. Google: [*A guide to Google Search ranking systems*](https://developers.google.com/search/docs/appearance/ranking-systems-guide), letzter ausgewiesener Stand 10. Dezember 2025. Key `googleRankingSystems2025`.
3. Google: [*Improving Search with rigorous testing*](https://www.google.com/search/howsearchworks/how-search-works/rigorous-testing/), kein verifiziertes Veröffentlichungsdatum. Key `googleSearchTestingSnapshot2026`.

Die jeweiligen Artikeltexte wurden gelesen; Navigation ist keine Evidenz. Roh-HTML und daraus erzeugte Lesetexte liegen unter `research/source-texts/operation-2026-09-15/`; URLs, Hashes und Lesegrenzen stehen im dortigen README. Keine PDF-Paginierung; mit Abschnittstiteln zitieren. Am 15. September 2026 einschließlich byteidentischer Roh-HTML-Anhänge in `04 Web Forms and Search` importiert; Citation Keys und automatischer Export geprüft. Die HTML-Dateien sind archivierte Quelltexte, keine vollständigen Offline-Websites mit sämtlichen Assets.

| Dokument | Zotero-Eintrag | HTML-Anhang |
| --- | --- | --- |
| Search works | `HCXNUJRW` | `FB3UW9VY` |
| Ranking systems | `Y8NN3GIB` | `XIIIBRC8` |
| Rigorous testing | `VCHTSD4L` | `VVBUNVHZ` |

## Gegenstand, Methode und Evidenzart

**Anbieterselbstauskunft**, keine unabhängige Studie, kein Quellcode und keine Offenlegung sämtlicher Rankinggewichte. Die Seiten beschreiben Verarbeitungsstufen, ausgewählte Rankingverfahren und die Erprobung von Suchänderungen. Auf der Testseite genannte Zahlen für 2023 nicht zu aktuellen Jahreszahlen umdeuten.

## Surface und Interaction

Die Dokumentation nennt sichtbare Suchresultate und Interaktionsmetriken. Sie untersucht hier weder konkrete Feldgestaltung noch die Wahrnehmung oder Kompetenz bestimmter Nutzergruppen. Evaluation mit Interaktionsdaten ist nicht gleichbedeutend mit einer empirischen Studie der These dieser Arbeit.

## Operation und Übergänge

Die drei Seiten verbinden technische Verarbeitung mit Anbieterentscheidungen über Relevanz und Nützlichkeit. Die Suchantwort nutzt einen vorbereiteten Index; verschiedene Systeme und Signale ordnen Ergebnisse. Änderungen werden mit menschlichen Beurteilungen und Experimenten evaluiert.

## Direkt gestützte Aussagen

| ID | Aussage in eigenen Worten | Belegstelle | Evidenzart | Ebene | Einschränkung |
| --- | --- | --- | --- | --- | --- |
| GSEARCH26-P1 | Google unterscheidet Crawling, Indexierung und Auslieferung von Suchergebnissen; nicht jede Seite wird indexiert oder angezeigt. | Search works: „Introducing the three stages“, „Indexing“, „Serving search results“ | Anbieterbeschreibung | O | Kein Beleg für den konkreten Weg einer einzelnen Anfrage. |
| GSEARCH26-P2 | Bei der Ergebnisbereitstellung können unter anderem Standort, Sprache und Gerät berücksichtigt werden. | Search works: „Serving search results“ | Anbieterbeschreibung | O | Keine Angaben über exakte Gewichtung oder zwingende Personalisierung jeder Anfrage. |
| GSEARCH26-P3 | Mehrere Rankingsysteme und Signale wirken zusammen; PageRank bleibt laut Google in veränderter Form beteiligt. | Ranking systems: Einleitung; „Link analysis systems and PageRank“; „Neural matching“ | Anbieterbeschreibung | O | Historisches PageRank nicht mit dem aktuellen Gesamtranking gleichsetzen. |
| GSEARCH26-P4 | Externe Qualitätsprüfende beurteilen Ergebnisse anhand von Vorgaben; ihre Einzelbewertungen wirken laut Google nicht direkt auf Rankings. | Rigorous testing: „Testing for usefulness“, „Search quality tests“ | deklarierter Evaluationsprozess | O | Nicht behaupten, einzelne Rater sortierten unmittelbar die aktuelle Trefferliste. |
| GSEARCH26-P5 | Live-Experimente verwenden unter anderem Klicks, Anfragezahlen und Abbrüche; erfahrene Engineers und Data Scientists prüfen vorgeschlagene Änderungen. | Rigorous testing: „Live traffic experiments“, „Analyzing metrics“ und vorangestellte Freigabebeschreibung | deklarierter Evaluations-/Freigabeprozess | O | Experimentmetriken sind nicht automatisch offengelegte direkte Rankingfaktoren; Side-by-side-Vergleiche durch Rater sind ein gesondertes Verfahren. |

## Verhältnis zur Grundstruktur und Gegenprüfung

Operation 1–2: Query, vorbereitete Datenbasis und gesetzte Maßstäbe. Operation 4: Ergebnisreihenfolge und Feedback zur Verbesserung des Angebots. **Projektsynthese:** „Nützlichkeit“ muss in Kriterien und Verfahren übersetzt werden; die Auswahl dieser Kriterien liegt nicht ausschließlich bei der suchenden Person.

Konkrete Akteure: Google als Betreiber, Entwicklungs- und Auswertungsteams, interne Prüfinstanzen und externe Qualitätsprüfende. Ihre Rollen nicht mit Index, Rankingmodell oder einzelnen Messgrößen vermischen.

Die [historische Architekturquelle](brin-page-1998-anatomy.md) erklärt Mechanismen; beide Quellenarten sind beteiligtennah. Unabhängige soziale Wirkung, kommerzielle Motive bestimmter Platzierungen und vollständige aktuelle Sucharchitektur bleiben offen. Diese Runde untersucht insbesondere **nicht** Googles generative Suchantworten.

## Entscheidung

**Fallquelle.** Liefert die datierte aktuelle Gegenwartsseite für klassische Google-Suche und eine nachvollziehbare Stelle für die Frage, wer Relevanz und Nützlichkeit operationalisiert.
