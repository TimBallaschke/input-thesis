# Koenecke et al. 2020 – Racial Disparities in Automated Speech Recognition

## Status und Zugriff

- Bibliografie: Allison Koenecke, Andrew Nam, Emily Lake, Joe Nudell, Minnie Quartey, Zion Mengesha, Connor Toups, John R. Rickford, Dan Jurafsky und Sharad Goel, „Racial Disparities in Automated Speech Recognition“, *Proceedings of the National Academy of Sciences* 117, Nr. 14 (2020), S. 7684–7689. DOI: `10.1073/pnas.1915768117`.
- Zotero: Item `P8JZY4T9`, Sammlung `05 Conversational Interfaces`, importiert am 3. September 2026
- Citation Key: `koeneckeRacialDisparitiesAutomated2020` (in Zotero und `references/library.bib` verifiziert)
- Quellentyp: vergleichende empirische Auditstudie von fünf kommerziellen automatischen Spracherkennungssystemen mit Korpus-, Fehler- und Dialektanalyse
- Gelesene Fassung: `research/source-pdfs/koenecke-et-al-2020-racial-disparities-asr.pdf`; offizieller strukturierter Volltext zusätzlich unter `research/source-texts/koenecke-et-al-2020-racial-disparities-asr.xml`
- Dateiprüfung: 6 Seiten; SHA-256 PDF `d71c4bab290bdc2bed0db769eb3fbc15f8c066d07a490ced71d0d5335830b2c2`; SHA-256 XML `ac2166f57a38020cc5ff300072b72951a8639eb4c306da0d24d707477a55a51a`
- Zugriffstiefe: vollständiger Artikel einschließlich Methoden, Abbildungen und Tabellen; Text vollständig extrahiert und alle PDF-Seiten visuell geprüft
- Gelesene Seiten: S. 7684–7689
- Noch erforderlich: Aktuelle Systeme, deutschsprachige oder andere internationale Varietäten, reale Diktierinterfaces und tatsächlich aufgewendete Korrekturarbeit benötigen eigene Evidenz.

## Gegenstand, Methode und Evidenzart

Die Studie auditiert Spracherkennungssysteme von Amazon, Apple, Google, IBM und Microsoft anhand von Ausschnitten soziolinguistischer Interviews. Nach Propensity-Score-Matching umfasst die Analyse je 2.141 Audioausschnitte von 73 Black und 42 White speakers, insgesamt 19,8 Stunden. Alter, Geschlecht und Ausschnittslänge wurden angeglichen. Menschliche Transkriptionen bilden die Referenz; bewertet werden Wortsubstitutionen, -löschungen und -einfügungen als Word Error Rate. Ergänzend analysiert das Team Dialektdichte, Modellvokabular, öffentlich verfügbare Sprachmodelle und 206 textgleiche Kurzäußerungen.

## Surface

Die Studie untersucht keine konkrete Bedienoberfläche. Für den Thesisabschnitt ist deshalb nur indirekt relevant, dass ein scheinbar gleiches Spracheingabefeld auf operative Systeme trifft, deren Erkennungsleistung nicht für alle Sprechweisen gleich ist. Aussagen über Mikrofonbuttons, Live-Transkription oder sichtbare Fehlerkorrektur bleiben bei Ruan et al.

## Interaction

Koenecke et al. messen keine Diktatsession und keine Korrekturarbeit durch Nutzer:innen. Sie zeigen jedoch, dass dieselbe Anforderung – gesprochene Sprache in Text umzusetzen – für die untersuchten Gruppen unterschiedlich zuverlässige Resultate hervorbrachte. Die Folgerung, dass höhere Fehlerraten wahrscheinlich mehr Prüfung oder Korrektur erzeugen können, ist eine plausible Projektableitung, aber kein direkt gemessener Befund dieser Quelle.

## Operation

Die fünf Systeme produzierten im untersuchten Korpus systematisch höhere Wortfehlerraten für Black speakers. Die Autor:innen prüfen Vokabular- und Sprachmodellhypothesen und führen die Hauptdifferenz auf die akustische Modellierung beziehungsweise auf phonologische, phonetische und prosodische Merkmale zurück. Da die internen kommerziellen Modelle nicht offenliegen, wird diese Erklärung durch rekonstruiertes Vokabular, öffentliche Sprachmodelle und textgleiche Äußerungen angenähert, nicht durch direkte Inspektion der Systeme.

## Übergänge

- **Surface -> Interaction:** Ein formal gleiches Spracheingabeangebot kann für verschiedene Sprechweisen ungleich verlässlich nutzbar sein; die Quelle selbst beobachtet die Oberfläche jedoch nicht.
- **Interaction -> Operation:** Akustische Merkmale werden durch kommerzielle Modelle in Wörter übersetzt, wobei die gemessene Fehlerwahrscheinlichkeit gruppen- und varietätsspezifisch differiert.
- **Operation -> Surface/Interaction:** Eine fehlerhafte Transkription würde erst im sichtbaren Ergebnis prüf- und korrigierbar; diesen Rückweg misst die Studie nicht und muss Ruan et al. belegen.

## Direkt gestützte Aussagen

| ID | Aussage in eigenen Worten | Belegstelle | Evidenzart | Ebene | Einschränkung |
| --- | --- | --- | --- | --- | --- |
| KOE20-P1 | Der gematchte Datensatz umfasst je 2.141 Ausschnitte von 73 Black und 42 White speakers, 19,8 Stunden Audio, angeglichen nach Alter, Geschlecht und Ausschnittslänge. | S. 7684 und 7688 | Studiendesign | O | Sprechergruppen stammen aus unterschiedlichen Regionen; Interviews wurden zu verschiedenen Zeiten und mit unterschiedlicher Technik aufgenommen. |
| KOE20-P2 | Über fünf kommerzielle Systeme lag die mittlere WER bei 0,35 für Black und 0,19 für White speakers; der Abstand zeigte sich in jedem System. | S. 7684–7685; Abb. 1 | vergleichende Fehleranalyse | O | Produkt- und Modellstand der Studie, keine Aussage über heutige Systeme. |
| KOE20-P3 | Bei der von den Autor:innen gesetzten Schwelle WER größer 0,5 lagen 23 Prozent der Ausschnitte von Black und 1,6 Prozent der Ausschnitte von White speakers darüber. | S. 7685–7686; Abb. 2 | Verteilungsanalyse | O | Die Schwelle für „unusable“ ist eine analytische Setzung der Studie. |
| KOE20-P4 | Höhere gemessene AAVE-Dialektdichte war in der kleinen codierten Stichprobe positiv mit höherer WER verbunden. | S. 7685–7686; Abb. 3–4 | manuelle Codierung und Korrelation | O | 150 Ausschnitte; kleine Standortstichproben, keine Repräsentativität für alle Regionen oder Personen. |
| KOE20-P5 | Rekonstruierte Vokabulare deckten 98 bis 99 Prozent der gesprochenen Wörter beider Gruppen ab; Tests mit drei öffentlichen Sprachmodellen erklärten die Gesamtdifferenz nicht. | S. 7686–7687 | indirekte Modellprüfung | O | Die tatsächlichen Sprachmodelle der kommerziellen Systeme waren nicht zugänglich. |
| KOE20-P6 | Bei 206 textgleichen Kurzäußerungen lagen die WERs für Black speakers in allen fünf Systemen ungefähr doppelt so hoch; dies stützt eine Erklärung über Aussprache und Prosodie. | S. 7687–7688; Tabelle 2 | gematchter Teilvergleich | O | Kurze Phrasen, keine kontrollierte Neuaufnahme derselben Personen. |
| KOE20-P7 | Die Autor:innen lokalisieren den Hauptabstand eher in akustischen als in lexikalisch-grammatischen Modellen und fordern vielfältigere Audiodaten sowie regelmäßige Audits. | S. 7687–7688 | Ergebnissynthese | O | Erklärung bleibt indirekt, weil kommerzielle Modelle nicht inspiziert wurden. |
| KOE20-P8 | Die Studie nennt regionale Trennung der Gruppen, unterschiedliche Aufnahmejahre und -geräte als Grenzen. | S. 7687–7688 | ausdrückliche Quellenbegrenzung | O | Diese Faktoren verhindern eine einfache kausale Zuschreibung allein an Race oder AAVE. |

## Verhältnis zur Grundstruktur

Die Quelle beantwortet eine der Machtfragen zur Spracheingabe: Das System behandelt nicht jede Sprechweise mit derselben Fehlerrate. Sie verschiebt die Analyse von einer neutralen „Erkennung“ zu der Frage, welche Audiodaten und Normalfälle ein Modell tragen und wer die Folgen einer Fehlklassifikation bemerkt. Für den Rückkopplungsbogen muss sie mit Ruan et al. kombiniert werden: Koenecke et al. belegen die ungleiche Erkennung, Ruan et al. die sichtbare Prüf- und Korrekturphase.

## Grenzen und Gegenprüfung

Die Studie untersucht voraufgezeichnete US-amerikanische Interviewausschnitte, keine freie Texteingabe in einem Interface. Die Gruppen stammen aus unterschiedlichen Regionen, das Material aus den Jahren 2004 bis 2017 und teils von Kassette, teils digital. Race, Region, AAVE-Dichte, Geschlecht und Aufnahmebedingungen dürfen nicht gleichgesetzt werden. Die Systeme und ihre Versionsstände sind historisch; die Ergebnisse dürfen nicht als aktuelle Produktwerte oder auf Deutsch und andere Sprachen übertragen werden.

## Entscheidung

**Kernquelle für einen eng begrenzten Hinweis auf ungleich verteilte Spracherkennungsleistung.** Freigegeben für die dokumentierten WER-Unterschiede und die vorsichtige operative Erklärung. Nicht als direkter Beleg für Korrekturzeit, Interfacegestaltung, heutige Systeme oder eine allgemeine Aussage über alle Black speakers verwenden.
