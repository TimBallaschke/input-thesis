# FTC 2023 - BetterHelp: Formularangaben und Werbenutzung

## Identität, Zugriff und Evidenzstatus

Zwei Primärdokumente derselben Fallquelle, nicht zwei unabhängige Bestätigungen:

1. Federal Trade Commission (2023): *In the Matter of BetterHelp, Inc.
   Complaint*. Docket C-4796, File 2023169, ausgestellt 7. Juli 2023,
   19 PDF-Seiten. Provisorischer Key: `ftc2023BetterHelpComplaint`.
   [Offizielles PDF](https://www.ftc.gov/system/files/ftc_gov/pdf/2023169betterhelpcomplaintfinal.pdf).
2. Federal Trade Commission (2023): *In the Matter of BetterHelp, Inc.
   Decision and Order*. Docket C-4796, File 2023169, ausgestellt
   7. Juli 2023, 23 Seiten. Key: `ftc2023BetterHelpOrder`.
   [Offizielles PDF](https://www.ftc.gov/system/files/ftc_gov/pdf/2023169betterhelpfinalorder.pdf).

Der [FTC-Fallindex](https://www.ftc.gov/legal-library/browse/cases-proceedings/2023169-betterhelp-inc-matter)
führt beide finalen Dokumente unter 14. Juli 2023. Ausstellungsdatum nicht
mit dem Veröffentlichungs-/Ankündigungsdatum verwechseln. Keine Prüfung
heutiger BetterHelp-Praktiken oder späterer Erfüllung sämtlicher Auflagen.

Lokal am 15. September 2026 gesichert über die gleichnamigen PDF-Pfade des
offiziellen Hosts `search.ftc.gov`: direkte `www`-Downloads scheiterten mit 403,
die Web-PDF-Ansicht war lesbar. Lokale Dateien und SHA-256:

- `research/source-pdfs/ftc-2023-betterhelp-complaint.pdf`:
  `d4d40b9ffae9f4e2ad76e66daafb87363aaf6884eb674341ef563282a0408bc5`.
- `research/source-pdfs/ftc-2023-betterhelp-final-order.pdf`:
  `f57edb08ff5f1340bae51b9d6a44d4854ff613f0eb2064beb3bb46ebfec6c96f`.

Gelesen: Complaint vollständig, S. 1-19; Order S. 1-9, XI und XII.A-D
S. 15, XVIII samt Ausstellungsvermerk S. 21. Sonstige Kontroll-, Berichts-
und Abwicklungsbestimmungen sowie Anlage nicht vollständig ausgewertet.
Complaint S. 5 und 12 sowie Order S. 6 visuell geprüft. Keine Zotero- oder
Bibliografieänderung. Juristische Fallauswertung, keine Rechtsberatung.

## Was diese Dokumente belegen

Die Complaint enthält die Vorwürfe und Rekonstruktion der FTC, nicht ein
streitig ergangenes Sachurteil. Die Order beruht auf einem Consent Agreement:
BetterHelp bestätigt oder bestreitet die Vorwürfe grundsätzlich nicht;
Zuständigkeitsfragen werden anerkannt (S. 1-2). Die begrenzte Sonderregel
zur Behandlung der Vorwürfe bei späterer Vollstreckung der Zahlung in
XII.B-C ersetzt keine allgemeine Tatsachenanerkennung.

Untersucht sind historische Praktiken, vor allem 2013 bis Dezember 2020,
sowie spätere Angaben zu Hinweisen und organisatorischen Maßnahmen.
Vorwürfe deshalb mit „laut FTC“, „die FTC warf vor“ oder „die Complaint
beschreibt“ kennzeichnen. Die endgültigen Anordnungen dagegen als solche benennen.

## Surface, Interaction und Operation

- **Surface:** Die Complaint zeigt Aufnahmefragen und Datenschutzzusicherungen,
  unter anderem S. 5. Das ist behördlich reproduzierte historische Oberfläche,
  keine aktuelle eigene Interfacebeobachtung.
- **Interaction:** Beschrieben ist die Folge Fragebogen, Kontoanlage und
  Bezahlung (Rn. 11-13). Keine unabhängige Usability-/Wahrnehmungsstudie.
- **Operation:** Bestimmte Antworten und Ereignisse wurden laut Vorwurf mit
  E-Mail-Adressen oder anderen Kennungen verknüpft, übermittelt und für
  Werbezielgruppen verwendet. Freitext, Auswahlantwort, Kennung und
  abgeleitetes Ereignis sind nicht identisch.
- **Übergang:** Angegebener Beratungs-/Zuordnungszweck versus weiterer
  Werbezweck. Keine neue Wiederholung der allgemeinen Formularvalidierung.

## Direkt gestützte Aussagen

| ID | Aussage in eigenen Worten | Belegstelle | Evidenzart | Ebene | Grenze |
| --- | --- | --- | --- | --- | --- |
| FTC23-P1 | Fragebogenangaben dienten laut Fallbeschreibung der Zuordnung zu Therapeut:innen; dabei wurden Vertraulichkeitszusagen gemacht. | Complaint Rn. 11-13, 23-27, S. 3, 5 | Behördliche Fallbeschreibung/Vorwurf | S/I/O | Historischer Ablauf; Bildschirmabbildung zeigt unter anderem Auswahlbuttons, nicht nur Texteingabefelder. |
| FTC23-P2 | Die FTC beschreibt Werbenutzung von Kennungen, Anmeldedaten und bestimmten Fragebogenantworten für erneute Ansprache, ähnliche Zielgruppen und Anzeigenoptimierung. | Rn. 44-53, S. 9-12 | Behördlicher Vorwurf | O | Nicht alle Antworten, nicht vollständige Therapiegespräche; keine Prüfung aktueller Praxis. |
| FTC23-P3 | Das Merkmal frühere Therapie wurde als Ereignis übertragen; die FTC beschreibt auch die Offenlegung der Bedeutung des Codes AddToWishlist gegenüber Facebook. | Rn. 53b und 54, S. 12 | Behördlicher Vorwurf | O | Nicht als allgemeine technische Notwendigkeit darstellen; keine Behauptung, jeder Formularwert werde so verarbeitet. |
| FTC23-P4 | Gehashte E-Mail-Adressen ermöglichten laut Complaint den Abgleich mit Facebook-Konten; auch der Kontext der Konto-/Dienstzugehörigkeit war aussagekräftig. | Rn. 48-52, S. 10-11 | Behördlicher Vorwurf und Mechanismenbeschreibung | O | Hashing nicht pauschal als umkehrbare Verschlüsselung erklären; hier geht es um Zuordenbarkeit. |
| FTC23-P5 | Vertragsbedingungen erlaubten teilweise weitere Empfängerzwecke; eine Löschung aus Werbeoberflächen entfernte laut FTC nicht automatisch Daten aus zugrunde liegenden Datenbanken. | Rn. 57-58, S. 13 | Behördlicher Vorwurf | O | Keine pauschale Aussage, Daten seien niemals löschbar. Detail zu Eingriffsgrenzen eher in Operation 4. |
| FTC23-P6 | Die finale Order untersagt die Weitergabe von Treatment Information an definierte Dritte für Werbezwecke sowie bestimmte weitere Weitergaben zum individuellen Targeting. | Order Definitionen J/K und I, S. 5-6 | Fallbezogene verbindliche Anordnung | O | Definitionen und Ausnahmen beachten; kein generelles gesetzliches Verbot aller Datenverarbeitung. |
| FTC23-P7 | Die Order verlangt unter anderem ausdrückliche Einwilligung für weitere erfasste Weitergaben und Löschanweisungen an bestimmte Empfänger. | Order II, IV, S. 7-9 | Anordnung | O | Einwilligung hebt das Verbot aus I nicht auf; Verpflichtung nicht mit nachgewiesener Erfüllung gleichsetzen. |

## Kritische Funktion und Grenzen

Der Fall konkretisiert Akteure: BetterHelp legt Erhebung und Werbenutzung an,
Werbeplattformen ermöglichen den Datenabgleich und die Zielgruppenansprache,
die FTC greift regulierend ein. Nach der FTC-Rekonstruktion profitiert
BetterHelp durch Neukundengewinnung (Rn. 5, 46). Nicht aus Vorwürfen eine
unabhängige kausale Wirkungsmessung machen. Der Dienst war kostenpflichtig
(Rn. 11): zusätzliche Datenverwertung ist nicht auf Gratisdienste beschränkt.

Nicht schreiben: BetterHelp habe sämtliche Chattexte verkauft oder LLMs zur
Profilbildung eingesetzt. Keine Weitergabe von Therapiegesprächsinhalten aus
den hier geprüften Vorwürfen ableiten. Auswahlantworten erweitern den Fall
über reine Texteingabe; die direkte Textfeldanbindung liegt insbesondere in
den eingegebenen Kennungen und ihrer Verknüpfung mit Angaben/Ereignissen.

Die FTC nennt wirtschaftlichen Nutzen und mögliche Schäden; das ist kein
experimenteller Nachweis gezielter psychologischer Manipulation einzelner
Personen. Zahlung von 7,8 Mio. USD: Monetary Relief für unter anderem
Verbraucherentschädigung (XI-XII, S. 15), nicht unpräzise als Strafzahlung ausgeben.

## Entscheidung

**Fallquelle.** Für Operation 3 zur Unterscheidung von erbetener Angabe,
Zuordnung und zusätzlicher Werbeverwendung. Die Order begrenzt zugleich die
Erzählung uneingeschränkter Anbietermacht. Staab ergänzt technische Inferenz,
belegt jedoch nicht BetterHelps Verfahren. Tatsächliche Manipulationswirkung,
vollständige Nutzerprofile und aktuelle Praxis bleiben unbelegt.
