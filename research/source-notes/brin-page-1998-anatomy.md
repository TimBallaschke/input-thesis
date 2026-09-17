# Brin und Page 1998 – Suchindex, Auswahl und Ranking

## Status und Zugriff

- Sergey Brin und Lawrence Page: *The anatomy of a large-scale hypertextual Web search engine*. Computer Networks and ISDN Systems 30(1–7), 1998, S. 107–117. DOI: [10.1016/S0169-7552(98)00110-X](https://doi.org/10.1016/S0169-7552(98)00110-X). Metadaten am 15. September 2026 bei Crossref und Google Research geprüft.
- [Institutionelles Volltext-PDF](https://snap.stanford.edu/class/cs224w-readings/Brin98Anatomy.pdf); lokal: `research/source-pdfs/brin-page-1998-anatomy.pdf`; Layouttext unter `research/source-texts/brin-page-1998-anatomy.txt`.
- Vollständige **elfseitige Zeitschriftenfassung**, gedruckte S. 107–117, gelesen. Architektur und Ergebnisdarstellung auf PDF-S. 5, 7–8 visuell geprüft. PDF-Seite 1 entspricht gedruckter S. 107; nachstehend gedruckte Seiten.
- SHA-256: `3a155ade395c7789876a0bc08a1842f909486438c1b1739ae531fa5c797d93f0`.
- Citation Key: `brinPage1998Anatomy`; Zotero `625RMG6A`, PDF `E3JVJACH`, Sammlung `04 Web Forms and Search`. Import, Bibliografieexport und byteidentischer Anhang am 15. September 2026 geprüft. Die längere HTML-Fassung war nicht zugänglich und wurde nicht ausgewertet. Ihr häufig zitierter Anhang über Werbung ist **nicht Bestandteil dieses PDFs** und hier nicht freigegeben.

## Gegenstand, Methode und Evidenzart

Historische technische Primärquelle der Entwickler des damaligen Google-Prototyps. Sie beschreibt Architektur, Indexstrukturen, Ranking und Beispielresultate. Die Qualitätsbewertung ist wesentlich eine Selbsteinschätzung der Entwickler, keine umfassende unabhängige Nutzerstudie und kein Dokument heutiger Google-Verarbeitung.

## Surface und Interaction

Abbildung 2 zeigt eine historische Ergebnisliste. Die Quelle untersucht weder die Wahrnehmung des Suchfelds noch die körperliche oder kognitive Sucharbeit direkt. Aussagen zur Nutzerkompetenz benötigen weiterhin beispielsweise Hearst oder Hargittai.

## Operation und Übergänge

Gesammelte Dokumente werden aufbereitet und indexiert; die Suchanfrage wird gegen diese Infrastruktur verarbeitet. Ranking verwendet mehrere Merkmale, darunter Linkstruktur, Ankertexte und Eigenschaften der Worttreffer. Das Ergebnis ist keine unvermittelte Abbildung des Webs.

**Projektsynthese:** Zwischen menschlicher Suchabsicht und sichtbarer Reihenfolge liegen ausgewählte Stellvertreter für Relevanz und Wichtigkeit. Dass diese gestaltet sind, belegt noch keine konkrete Benachteiligung oder kommerzielle Manipulation.

## Direkt gestützte Aussagen

| ID | Aussage in eigenen Worten | Belegstelle | Evidenzart | Ebene | Einschränkung |
| --- | --- | --- | --- | --- | --- |
| BRIN98-P1 | Das Entwurfsziel gewichtet gute frühe Treffer stärker als vollständige Erfassung aller relevanten Dokumente. | S. 108–109, §1.3.1 | erklärtes Entwurfsziel | O | Kein allgemeines Gesetz menschlichen Suchverhaltens. |
| BRIN98-P2 | PageRank gewichtet Verlinkungen; Ankertext kann der Beschreibung der verlinkten Seite dienen. | S. 109–110, §2.1–2.2 | historische Implementierungsbeschreibung | O | Von den Autoren behauptete Wichtigkeit ist kein objektives Qualitätsmaß. |
| BRIN98-P3 | Crawler, gespeicherte Seiten, Wortvorkommen, invertierter Index und Suchkomponente haben unterschiedliche Funktionen. | S. 111–112, §4.1–4.2, Abb. 1 | historische Architektur | O | Nicht jede Anfrage löst einen neuen Crawl des gesamten Webs aus. |
| BRIN98-P4 | Die Rangfolge kombiniert mehrere Treffermerkmale mit weiteren Signalen und abstimmbaren Parametern. | S. 113, §4.4 | historische Rankingbeschreibung | O | Weder bloßes Wortmatching noch PageRank allein; keine aktuellen Gewichte. |
| BRIN98-P5 | Die Autoren illustrieren die Ergebnisqualität anhand von Beispielen und benennen weitere Evaluationsarbeit. | S. 113–114, §5; S. 116, §6.2 | Demonstration / Selbstbewertung | S / O | Keine umfassend belegte Überlegenheit gegenüber heutigen oder damaligen Angeboten. |

## Verhältnis zur Grundstruktur und Gegenprüfung

Operation 1: Text erhält die Rolle einer Query. Operation 2: Index, Retrieval und Ranking unterscheiden; Relevanzmaßstäbe werden operationalisiert. Operation 4: Sichtbare Reihenfolge ist ein Resultat dieser Auswahl.

Aktuelle, aber anbietergebundene Gegenprüfung: [Google-Dokumentationsauswertung](google-2026-search-processing-ranking-evaluation.md). Offen bleiben proprietäre Gewichte, aktuelle Einzelanfragen und messbare soziale Folgen. Kritische Frage: **Welche Eigenschaften eines Dokuments werden zu Gründen seiner Sichtbarkeit – und wer bestimmt diese Eigenschaften?**

## Entscheidung

**Kernquelle**, historisch begrenzt. Trägt die technische Grundunterscheidung und die Analyse gestalteter Rankingmaßstäbe; nicht als vollständige Beschreibung heutiger Suche verwenden.
