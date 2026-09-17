# Aggarwal et al. 2024 – GEO und die Herstellung von Sichtbarkeit

## Bibliografische Identität und Zugriff

- Pranjal Aggarwal, Vishvak Murahari, Tanmay Rajpurohit, Ashwin Kalyan, Karthik Narasimhan und Ameet Deshpande: *GEO: Generative Engine Optimization*. Proceedings of the 30th ACM SIGKDD Conference on Knowledge Discovery and Data Mining, 2024, S. 5–16. [DOI: 10.1145/3637528.3671900](https://doi.org/10.1145/3637528.3671900). Identität gegen Crossref und den institutionellen Princeton-Nachweis geprüft.
- Gelesen am 15. September 2026: [Autorenfassung arXiv v3, 28. Juni 2024](https://arxiv.org/pdf/2311.09735v3), `research/source-pdfs/aggarwal-et-al-2024-geo.pdf`, 12 Seiten. Haupttext PDF-S. 1–9 und Anhänge A–C auf PDF-S. 11–12 gelesen; Literaturverzeichnis nicht einzeln nachverfolgt. Tabelle 1 sowie Tabelle 2/3 und Abb. 4 auf PDF-S. 6–7 visuell geprüft. **Alle folgenden Seitenangaben sind PDF-Seiten, nicht die publizierten Bandseiten.**
- PDF-SHA-256: `beb95332fcbc6f32078c98cd37d0b8ea44f91968d11262344cf452beecf41f41`.
- Ergänzender Primärbeleg: vom Artikel verlinkter [Begleitcode, fester Commit c9e985f](https://github.com/GEO-optim/GEO/blob/c9e985f2bc4b539a01e8e9d226ff2a3d8d29a888/src/geo_functions.py#L150). Gezielt geprüfte Promptdefinitionen, besonders Zeilen 150–178 und 235–266; kein vollständiger Codeaudit oder Nachbau der Experimente. Lokaler Snapshot: `research/source-texts/geo-code-2026-09-15/geo_functions.py`, SHA-256 `215917e99aa5c30669168130e67a8cfc4bc2200708a04b3cf5d6247d39a83811`. Repository-Stand nach Publikation; Identität mit dem tatsächlich damals ausgeführten Experimentcode ist nicht verifiziert. Als Begleitmaterial dieser Quelle archiviert, nicht als vierte neue Literaturquelle gezählt.
- Zotero: `Q5HALSIY`, PDF `MB7J4PVW`, Sammlung `04 Web Forms and Search`; Citation Key `aggarwalGEOGenerativeEngine2024`. Import und automatische Bibliografieübernahme geprüft.

## Gegenstand, Methode und Evidenzart

Methoden- und Benchmarkarbeit aus Sicht von Content-Anbietern: Webtexte werden verändert, damit eine generative Suchantwort ihnen mehr Raum und Quellenpräsenz einräumt. GEO-bench umfasst 10.000 Queries, davon 1.000 im Testsplit. Der Hauptversuch verwendet fünf Google-Treffer als festen Quellenpool und GPT-3.5-Turbo zur Antworterstellung; verschiedene Veränderungen desselben zufällig gewählten Quellentexts werden verglichen. Daneben ein Perplexity-Test mit 200 Queries und hochgeladenen Quelldateien. Das ist **kein Feldversuch zur organischen Websichtbarkeit** und keine Messung menschlichen Klickverhaltens.

## Surface, Interaction, Operation und Übergänge

- **Surface:** Abb. 3 vergleicht Listenposition mit in Antworttext eingebetteten Quellen. Konzeptionelle Darstellung, kein Nutzerexperiment zu tatsächlicher Aufmerksamkeit.
- **Interaction:** Anpassungsarbeit der Content-Anbieter, nicht unmittelbar die Formulierungsarbeit der suchenden Person. Diese Akteure nicht verwechseln.
- **Operation:** Quellenretrieval und generative Zusammenführung ermöglichen eine andere Verteilung von Quellenpräsenz. Die eingegebene Frage bestimmt die Ausgabe nicht allein.
- **Operation → Surface:** Eine zitierte, flüssig formulierte Antwort macht Auswahl sichtbar, legt aber deren Kriterien oder vorgelagerte Optimierungsarbeit nicht vollständig offen. Letzteres ist Projektsynthese.

## Direkt gestützte Aussagen

| ID | Aussage in eigenen Worten | Belegstelle | Evidenzart | Ebene | Einschränkung |
| --- | --- | --- | --- | --- | --- |
| GEO24-P1 | GEO formalisiert die Anpassung von Quelltexten an eine höhere Präsenz in generativen Antworten; Creator- und Engine-Ziele werden unterschieden. | S. 2–4, §2.2 | vorgeschlagenes Verfahren/Zielmodell | O | Kein Beleg für tatsächliche Geschäftsziele sämtlicher Anbieter. |
| GEO24-P2 | Sichtbarkeit wird über zitationsbezogene Wortanteile, deren Position und modellbewertete Eindrucksmerkmale operationalisiert. | S. 3–6, §2.2.1/3.4 | Messdefinition | O/S | „Subjective Impression“ stammt von GPT-3.5, nicht von befragten Menschen; keine Klick- oder Vertrauensmessung. |
| GEO24-P3 | Zitate, Quellenverweise und Statistiken erhöhen im untersuchten Aufbau mehrere Sichtbarkeitsmaße; Effekte hängen von Methode und Kontext ab. | S. 5–7, Tabelle 1, §3–5 | Benchmarkbefund | O | „Bis zu 40 %“ meint relative Änderungen bestimmter Metriken, keine allgemeine Reichweiten- oder Umsatzsteigerung. |
| GEO24-P4 | Der Perplexity-Test führt 200 Queries mit Quelldateien durch, statt veränderte Websites im offenen Web neu ranken zu lassen. | S. 8–9, §6; S. 12, C.1 | Methodengrenze | O | Kein Nachweis, dass Änderungen Crawling, Indexierung oder Suchranking verbessern. |
| GEO24-P5 | Der öffentlich bereitgestellte Code erlaubt in einzelnen Prompts erfundene Zitate, plausibel klingende erfundene Quellen und hypothetische Zahlen. | Code Z. 150–178, 235–266, insbesondere 158, 166, 245 | direkter Codebefund | O | Keine quantifizierte Häufigkeit falscher Aussagen; damalige Ausführungsversion nicht verifiziert. |

## Kritische Auswertung und Einsatz

**Operation 2:** Auswahl nicht nur als Antwort auf Nutzerintention, sondern als umkämpfte Sichtbarkeit betrachten. Institutionelle Akteure konkret benennen: Such-/Antwortanbieter legen das Verfahren fest; Websitebetreiber bearbeiten Inhalte; Nutzer:innen erhalten die selektierte Antwort.

**Operation 4:** Quellenpräsenz ist weder Wahrheit noch tatsächlich wahrgenommene Autorität. Besonders ergiebig ist die Spannung zwischen dem Anspruch, glaubwürdigere Inhalte sichtbar zu machen, und Promptdefinitionen, die bloß glaubwürdig klingende Belege zulassen. **Projektfrage:** Wird hier belegte Qualität bevorzugt oder teilweise deren sprachliche Erscheinungsform? Die Studie erlaubt die Frage und dokumentiert angreifbare Messmaßstäbe, beantwortet sie aber nicht vollständig.

Gegenprüfung: Verbesserte Lesbarkeit und echte Belege können nützlich sein; GEO ist nicht per Definition Täuschung. Die Gegenüberstellung mit SEO ist im Artikel teilweise überzeichnet: Der Vergleich mit Keyword-Stuffing repräsentiert nicht die gesamte Suchmaschinenoptimierung. Die behauptete Demokratisierung zugunsten kleiner Anbieter folgt nicht schon daraus, dass niedriger gerankte Quellen innerhalb eines Fünferpools profitieren. Auch Absatz über Engagement in Anhang A ist eine konzeptionelle Autorenannahme, kein gemessener Bindungseffekt.

## Entscheidung

**Kernquelle.** Trägt den gezielten Vergleich von Suchranking und Quellenpräsenz in generativen Antworten; nur mit den genannten Mess- und Versionsgrenzen, nicht als allgemeiner Nachweis manipulativer KI oder des Endes von SEO.
