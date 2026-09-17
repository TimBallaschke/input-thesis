# Interaction – Autocomplete und Vorschläge

## Kernaussage

Autocomplete und Vorschläge können motorische Eingaben reduzieren, ergänzen den Eingabeprozess aber um Wahrnehmung, Bewertung und Auswahl; ihre Wirkung darf nicht zwischen Wortvervollständigung, Suche und KI-Interfaces gleichgesetzt werden.

## Mini-Gliederung

1. **Zusätzliche Optionen:** Das System bietet während der Eingabe mögliche Fortsetzungen oder Formulierungen an.
2. **Veränderte Handlung:** Nutzer müssen Vorschläge wahrnehmen, prüfen, auswählen oder ignorieren.
3. **Verschobener Aufwand:** Weniger Taps bedeuten in der kontrollierten Wortvervollständigungsaufgabe nicht automatisch schnellere Eingabe.
4. **Begrenzte Übertragbarkeit:** Suchvorschläge, Wortvorhersage und Promptideen beruhen auf unterschiedlichen Daten, Modellen und Evidenzlagen.

## Quellenübersicht

| Unterpunkt | Quelle und Passage | Benötigte Aussage | Grenze |
| --- | --- | --- | --- |
| Wortvervollständigung und Auswahl | [Quinn/Zhai 2016](source-notes/quinn-zhai-2016-text-entry-suggestions.md), S. 83–86; QZ16-P1–P9 | Bis zu drei Vorschläge erschienen über der Tastatur; immer sichtbare Vorschläge reduzierten Taps, verlangsamten aber die Zeicheneingabe. | 17 Personen, historischer iPod, Textkopieren und künstlich fehlerfreie Aufgabe |
| Suchvorschläge | [Hearst 2009](source-notes/hearst-2009-search-user-interfaces-preview.md), Buch-S. 11–13; HEARST-P7 | Auf Basis eingegebener Zeichenfolgen können Vervollständigungen oder verwandte Querybegriffe erscheinen. | historisches Yahoo-Interface; Logstudie nur sekundär berichtet |
| Promptideen | [Subramonyam et al. 2024](source-notes/subramonyam-et-al-2024-gulf-of-envisioning.md), PDF-S. 11–14; SUB24-P7–P8 | Promptideen werden als Gestaltungsmuster für offene LLM-Interfaces beschrieben. | Interfaceanalyse und theoretische Musterbildung; keine Wirkungsmessung |
| Sprachliche und technische Grundlage | [van Esch et al. 2019](source-notes/van-esch-et-al-2019-gboard-internationalization.md), PDF-S. 16–18; VE19-P2, P6–P7, P10 | Wortvorhersage hängt von Korpora, Sprachmodellen, Normalisierung und unterstützter Sprachvarietät ab. | aggregierter Herstellerbericht; keine allgemeine Vorschlagswirkung |

## Entscheidung

Die vorhandenen Quellen reichen für den autorbestätigten kompakten Abschnitt aus. Die Verschiebung von unmittelbarer Zeichenerzeugung zu Wahrnehmung, Bewertung und Auswahl ist als begrenzte quellenübergreifende Synthese formuliert. Direkt gemessen ist der Kosten-Nutzen-Kontrast nur für Quinn und Zhais kontrollierte Wortvervollständigung. Offen bleiben freie Textproduktion sowie der Einfluss aktueller generativer beziehungsweise LLM-basierter Vorschläge auf Inhalt und Formulierung.

## Kritische Ergänzung vom 14. September 2026

Der vorstehende Abschnitt dokumentiert den früher bestätigten Stand; dessen Prosa bleibt unverändert. Die neu vereinbarte Perspektive fragt zusätzlich, ob Vorschläge nicht nur Eingabeaufwand, sondern auch die entstehende Formulierung beeinflussen.

Genau eine neue Quelle wurde dafür vollständig geprüft: [Arnold, Chauncey und Gajos 2020](source-notes/arnold-et-al-2020-predictive-text.md), *Predictive Text Encourages Predictable Writing*. Die Quelle ergänzt freie, aber auf kurze Bildbeschreibungen begrenzte Textproduktion; heutige LLM-Vorschläge bleiben davon ausdrücklich unberührt. Anschließend am 14. September 2026 einschließlich bytegeprüftem PDF nach Zotero importiert: `XV46SD3K`, Sammlung `03 GUI and Direct Manipulation`, Citation Key `arnoldPredictiveTextEncourages2020`.

| Argumentativer Anschluss | Quellenstelle | Beleg und Grenze |
| --- | --- | --- |
| Übernahme bleibt eine mögliche Entscheidung | ARN20-P2; PDF-S. 4-5 | Keine automatische Einfügung; 48 Personen wurden allerdings in der Übung zur Vorschlagsnutzung ermuntert. |
| Einfluss geht über das Zählen übernommener Vorschläge hinaus | ARN20-P3-P5; PDF-S. 3-6 | Vergleich mit einer Bedingung ohne angezeigte Vorschläge anhand derselben modellrelativen Metrik; kürzere Texte und weniger nicht vorhergesagte Wörter mit Vorschlägen. Kein Nachweis einer vorher feststehenden individuellen Absicht. |
| Entlastung und Formulierungseinfluss können zusammen auftreten | ARN20-P6; PDF-S. 6-7 | Subjektive Entlastung und Geschwindigkeitsbefunde getrennt von Wortwahl behandeln; Quinn/Zhai nicht auf allgemeine Ineffizienz verkürzen. |
| Auswahlbedingungen gehören zum Übergang nach Operation | ARN20-P8; PDF-S. 4-5 | Auf COCO-Beschreibungen trainiertes LSTM und Sichtbarkeitsschwelle; keine aktuelle Such- oder Promptarchitektur. |

**Provisorische Projektsynthese:** Ein Angebot kann die Formulierung beeinflussen, ohne die eigenständige Eingabe zu verbieten. Als Lenkung wird hier nur eine beobachtete Verschiebung hin zu modellnäherer Wortwahl verstanden, nicht Manipulation, Meinungsänderung oder vollständige Kontrolle des Schreibens.

**Offene Frage:** Welche sprachlichen Optionen werden leicht auswählbar, und welche müssen selbst formuliert werden? Aussagen über politische oder wirtschaftliche Motive, langfristige Vereinheitlichung oder Suchvorschläge sind damit nicht freigegeben. Für den eng gefassten Abschnitt ist keine weitere Recherche vorgesehen.
