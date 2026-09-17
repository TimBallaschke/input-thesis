# Google und Alphabet - Suchanfrage und Suchwerbung

## Status und Zugriff

Zwei getrennte Quellen, gemeinsam ausgewertet am 15. September 2026:

1. Google: [How ads work on Google Search](https://www.google.co.in/search/howsearchworks/our-approach/ads-on-search/).
   Kein verifiziertes Publikationsdatum; Abrufdatum nicht als Publikationsjahr
   behandeln. Provisorischer Key `googleAdsSearchSnapshot2026`.
   Artikelinhalt einschließlich Abschnitten zu Finanzierung, Kennzeichnung,
   Anzeigenkontrolle und Datenschutz gelesen. Lokaler Roh-HTML-Snapshot:
   `research/source-texts/operation-power-2026-09-15/google-ads-on-search.html`,
   SHA-256 `7871738b1d4349dfab779152351a8bc0d6bfbfdce4de0d65572c1940115bc954`.
   Die .co.in-Seite enthält den englischsprachigen Text; keine Behauptung über
   jede regionale Suchoberfläche oder einen live beobachteten Anzeigenzustand.
2. Alphabet Inc.: [Form 10-K, Geschäftsjahr bis 31. Dezember 2025](https://www.sec.gov/Archives/edgar/data/1652044/000165204426000018/goog-20251231.htm),
   veröffentlicht 2026. Provisorischer Key `alphabet2026Form10K2025`.
   **Begrenzte Lektüre über den Webzugang**, nicht ganzer Bericht:
   Item 1, How We Make Money (gedruckte S. 5); Item 7, Google Advertising und
   Monetarisierungsdefinitionen (S. 29-30); Umsatzkommentar Google Search & other
   (S. 33-34). Direkter Roh-HTML-Download scheiterte mit HTTP 403.
   Kein lokaler Volltext-Snapshot vorhanden; spätere Archivierung offen.

Noch keine Bibliografieänderung oder Zotero-Import. Die Keys sind Vorschläge.

## Gegenstand, Methode und Evidenzart

Google: öffentliche Anbieterselbstdarstellung. Alphabet: unternehmenseigener
Geschäftsbericht und Managementerläuterung. Beides sind Primärquellen für
deklarierte Abläufe und Geschäftsinteressen, keine unabhängigen Nachweise für
die Neutralität einzelner Ergebnisse oder kausale Nutzerwirkungen.

## Surface und Interaction

Google beschreibt gekennzeichnete Anzeigenbereiche, aber diese Lektüre enthält
keine eigene UI-Beobachtung oder Untersuchung ihrer Erkennbarkeit. Keine
direkte Evidenz zur körperlichen oder sprachlichen Eingabearbeit.

## Operation und direkt gestützte Aussagen

| ID | Aussage in eigenen Worten | Belegstelle | Evidenzart | Ebene | Einschränkung |
| --- | --- | --- | --- | --- | --- |
| ADS26-P1 | Google beschreibt Anzeigen als Finanzierung des kostenlosen Suchzugangs und ihre Auswahl anhand eingegebener Suchbegriffe. | Google: Ads make Search accessible to everyone | Anbieterselbstauskunft | O | Nicht jede Suche enthält Anzeigen; keine vollständige Auktionsbeschreibung. |
| ADS26-P2 | Laut Google sind Anzeigen gekennzeichnet; Zahlungen kaufen keine bessere organische Platzierung. | Google: Einleitung; Businesses count on digital ads; Maintaining transparency with ads | Anbieterselbstauskunft | S/O | Kein unabhängiger Audit; Kennzeichnung ist kein Nachweis tatsächlichen Erkennens. |
| ALP25-P1 | Google Services erzielt primär Werbeerlöse; Performance-Werbung zielt auf messbare Kontakte über Anzeigenklicks. | Alphabet: S. 5, How We Make Money | Geschäftsbericht | O | Konzernsegment, nicht jede einzelne Anfrage. |
| ALP25-P2 | Paid clicks und cost-per-click beschreiben die Monetarisierung von Google Search & other. | Alphabet: S. 29-30 | Management-Messdefinition | O | Diese Sammelkategorie umfasst weitere Angebote; nicht bloß die Suchseite. |
| ALP25-P3 | Alphabet nennt mehr Suchanfragen neben Werbeausgaben und Anzeigenänderungen als Faktoren des Umsatzwachstums. | Alphabet: S. 33-34, Google Search & other | Managementerklärung | O | Kein isolierter Kausaleffekt und kein Ziel, jede Sitzung zu verlängern. |

## Übergänge und Projektsynthese

Eine Anfrage kann Informationssuche und Anlass einer Anzeigenzuordnung sein.
Betreiber organisieren damit unterschiedliche Beziehungen: Auskunft für
Suchende und bezahlte Erreichbarkeit für Werbetreibende. Diese Interpretation
ist nicht mit dem Verkauf personenbezogener Rohdaten gleichzusetzen.

## Grenzen und Gegenprüfung

Organisches Ranking, bezahlte Platzierung und SEO/GEO getrennt halten.
Ein Anzeigenmodell belegt weder absichtlich schlechte Antworten noch
undeklarierte Werbung in LLM-Ausgaben. Eine personalisierte Anzeigenzuordnung
setzt nicht zwingend die langfristige Speicherung der aktuellen Anfrage voraus;
konkrete Speicher- und Weiterverwendungsregeln bleiben Operation 3 vorbehalten.
Keine Rechts- oder Datenschutzkonformitätsprüfung. Gillespie dient als
theoretischer Gegenblick, nicht als Audit der Selbstauskünfte.

## Entscheidung

**Fallquellen.** Beide Dokumente tragen eng begrenzte Aussagen zu Suchwerbung
und wirtschaftlicher Verwertung; Quelle 2 besitzt eine offene Archivierungslücke.
