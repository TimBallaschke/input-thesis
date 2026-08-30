# Cui et al. 2025 - Understanding Privacy Norms through Web Forms

## Status und Zugriff

- Bibliografie: Hao Cui, Rahmadi Trimananda und Athina Markopoulou, „Understanding Privacy Norms through Web Forms“, *Proceedings on Privacy Enhancing Technologies* 2025, Nr. 1 (2025), S. 5–22. DOI: `10.56553/popets-2025-0002`.
- Citation Key: `cuiUnderstandingPrivacyNorms2025`
- Quellentyp: großskalige Webmessung mit Browser-Crawling, maschineller Klassifikation und manueller Validierung
- Gelesene Fassung: `research/source-pdfs/cui-et-al-2025-understanding-privacy-norms-through-web-forms.pdf`
- Zugriffstiefe: vollständiger 18-seitiger Artikel einschließlich Appendix, Tabellen und Abbildungen; alle PDF-Seiten visuell geprüft
- Gelesene Seiten: Druckseiten 5–22
- Noch erforderlich: Für tatsächliche Nutzerwahrnehmung, Submission, Serververarbeitung oder spätere Datennutzung sind andere Quellen nötig.

## Gegenstand, Methode und Evidenzart

Die Studie untersucht, welche Arten personenbezogener Informationen Webformulare in unterschiedlichen Website- und Funktionskontexten anfordern. Ein Playwright-basierter Crawler durchsuchte 11.500 populäre englischsprachige Websites. Aus zunächst rund 938.000 gespeicherten Formularen entstand nach Bereinigung ein analysierter Datensatz von 292.655 Formularen. Formfunktionen und angeforderte Informationstypen wurden mit GPT-gestützter Trainingsdatenerstellung sowie spezialisierten Klassifikatoren annotiert und anhand manueller Stichproben validiert. Die Formtypklassifikation erreicht im Mittel 85,6 Prozent Präzision, die Informationstypklassifikation 93,5 Prozent; einzelne Kategorien liegen darunter.

## Surface

Für die Klassifikation werden sichtbarer Text, Labels und ausgewählte HTML-Merkmale wie `name`, `placeholder`, `id`, Feldtyp und ARIA-Attribute herangezogen. Fehlt ein explizites Label, nutzt der Crawler benachbarten sichtbaren Text vor dem Feld. Abbildung 7 dokumentiert sichtbare Beispiele für Login, Recovery, Registrierung, Kontakt, Content Submission, Finanzantrag, Zahlung, Reservierung, Bewerbung und Subscription. Die Quelle zeigt damit, wie Feldbeschriftung, Feldkombination und Seitenkontext eine erwartete Informationsart und Formularfunktion kommunizieren können. Sie misst jedoch nicht, ob Menschen diese Funktion ebenso wahrnehmen.

## Interaction

Es werden keine menschlichen Eingabehandlungen beobachtet. Der Crawler kann Seiten öffnen und klickbare Elemente aktivieren, füllt Formulare aber nicht aus, sendet sie nicht ab und umgeht keine Authentifizierung. Die Quelle liefert deshalb keine Evidenz zu Formulierungsaufwand, Fehlern, Korrektur, Abbruch oder tatsächlicher Preisgabe von Informationen.

## Operation

Operativ werden Formular-HTML und Kontextinformationen in Kategorien übersetzt: Websitekategorie, Formtyp und angeforderte personenbezogene Informationstypen. Die Studie unterscheidet unter anderem Account Registration, Login, Recovery, Payment, Contact, Content Submission und Subscription sowie 16 zentrale Informationstypen. Sie misst das Vorhandensein solcher Anforderungen auf Websites, nicht die Übertragung eingegebener Werte. Ein zusätzlicher Vergleich mit Privacy Policies zeigt, dass sichtbare Formularanforderungen und allgemeine Richtlinientexte häufig nicht eng übereinstimmen.

## Übergänge

- **Surface -> Interaction:** Die Kombination aus Label, Placeholder, Feldtyp und benachbarten Feldern kommuniziert eine erwartete Datenkategorie. Ob diese Signale für Menschen eindeutig oder akzeptabel sind, bleibt ungeprüft.
- **Interaction -> Operation:** Nicht untersucht, weil der Crawler keine Werte eingibt oder Formulare absendet.
- **Surface -> Operation:** Sichtbare und semantische Feldmerkmale werden durch die Forschungspipeline als Formfunktion und Informationstyp klassifiziert. Das belegt eine analytische Zuordnung, nicht die tatsächliche Backendverarbeitung der Website.

## Direkt gestützte Aussagen

| ID | Aussage in eigenen Worten | Belegstelle | Evidenzart | Ebene | Einschränkung |
| --- | --- | --- | --- | --- | --- |
| CUI25-P1 | Der bereinigte Datensatz umfasst 292.655 Webformulare von 11.500 populären englischsprachigen Websites. | S. 5–6, 12 | Messdatensatz | S / O | U.S.-zentrierte Infrastruktur und ausgeschlossene nichtenglische Websites. |
| CUI25-P2 | Der Crawler speichert Formular-HTML und nutzt Felder, Labels sowie ersatzweise benachbarten sichtbaren Text; er füllt oder sendet Formulare nicht ab. | Abschn. 3.1, S. 7–8; Abschn. 7.2, S. 17 | technische Methode | S / O | Dynamische Folgeseiten hinter Submission oder Login fehlen. |
| CUI25-P3 | Formfunktionen werden in zehn Typen wie Registrierung, Login, Zahlung, Kontakt und Content Submission plus `Unknown` klassifiziert. | Tabelle 2, S. 9; Abb. 7, S. 22 | Taxonomie/Klassifikation | S / O | Grobe, datensatzbezogene Taxonomie; nicht alle Webformtypen enthalten. |
| CUI25-P4 | Die Informationstypklassifikation verwendet unter anderem Labels, `name`, `placeholder`, `id`, Feldtyp und ARIA-Attribute. | Abschn. 4.2, S. 11 | technische Methode | S -> O | Belegt die Forschungspipeline, nicht die Websiteverarbeitung. |
| CUI25-P5 | Die Formtypklassifikation erreichte 85,6 Prozent mittlere Präzision, die Klassifikation personenbezogener Informationstypen 93,5 Prozent. | Tabelle 3, S. 11–12 | manuelle Validierung | O | Präzision variiert nach Kategorie; Recall wird nicht berichtet. |
| CUI25-P6 | E-Mail-Adresse, Personenname und Telefonnummer gehören zu den am weitesten verbreiteten angeforderten Informationstypen im untersuchten Korpus. | Tabelle 4, S. 12 | Korpusbefund | S / O | Misst Formulare auf Websites, nicht ausgefüllte oder abgesendete Werte. |
| CUI25-P7 | Welche Informationstypen angefordert werden, variiert deutlich mit Websitekategorie und Formularfunktion. | Abb. 4–5, S. 13–14 | statistische Korpusanalyse | S / O | Kontext wird grob als Websitekategorie plus Formtyp modelliert. |
| CUI25-P8 | Weniger als die Hälfte der untersuchten Formulare enthielt einen Privacy-Policy-Link direkt im Formularkontext. | Tabelle 6, S. 15 | Korpusbefund | S | Ein Link außerhalb des Formulars kann dennoch vorhanden sein. |
| CUI25-P9 | Die Studie misst keine Nutzerwahrnehmung und versteht ihre Ergebnisse eher als Perspektive der Websites auf übliche Datenerhebung. | Abschn. 7.3, S. 17 | ausdrückliche Quellenbegrenzung | I | Keine Aussage über Akzeptanz oder Interpretation durch Nutzende. |

## Verhältnis zur Grundstruktur

Die Quelle stärkt die Verbindung von Surface und Operation: Sichtbare Feldtexte und HTML-Merkmale lassen sich als erwartete Informationskategorien und Formularfunktionen analysieren. Zugleich zeigt sie exemplarisch, dass ein ähnlich aussehendes Textfeld je nach benachbarten Feldern und Seitenkontext eine andere operative Rolle erhält.

## Grenzen und Gegenprüfung

Der Datensatz bildet nur erreichbare englischsprachige Formulare ab, enthält Duplikate und erreicht keine Zustände hinter Submission oder Authentifizierung. Die Klassifikationen sind probabilistisch und unterschiedlich präzise; Recall wird nicht angegeben. „Privacy norms“ sind aus Häufigkeiten abgeleitete Muster und dürfen nicht mit Nutzererwartungen, moralischer Angemessenheit oder rechtlicher Zulässigkeit gleichgesetzt werden. Angeforderte Felder belegen weder tatsächliche Eingabe noch Speicherung und Nutzung.

## Entscheidung

**Kernquelle.** Funktion: großskalige Evidenz dafür, wie Labels, Feldattribute, Feldkombinationen und Seitenkontext erwartete Datenarten und Formularfunktionen strukturieren. Verbleibende Lücke für späteres Schreiben: Nutzerwahrnehmung und tatsächlicher Datenfluss müssen nur dann ergänzt werden, wenn sie für eine konkrete Passage benötigt werden.
