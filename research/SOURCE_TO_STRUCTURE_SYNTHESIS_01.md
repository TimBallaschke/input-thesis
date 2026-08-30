# Quellen-zu-Struktur-Synthese 01

## Status und Funktion

- Datum: 30. August 2026
- Verbindliche Strukturgrundlage: `presentation/Struktur_Masterarbeit_Input.pages`
- Auswertungsgrundlage: `research/SOURCE_EVALUATION_GUIDE.md`
- Evidenzbasis: 26 freigegebene und eine abstractbegrenzt offene, nach dem neuen Leitfaden erstellte Einzelquellennotiz
- Zweck: den vorhandenen Quellenbestand innerhalb der bereits festgelegten Autorstruktur **Einleitung/Historischer Rahmen -> Surface -> Interaction -> Operation -> Schlussteil** zusammenführen
- Status: Arbeitsgrundlage für das spätere Schreiben, kein Thesistext und keine neue Kapitelgliederung

Diese Synthese ersetzt die Autorstruktur nicht. Die Zwischenüberschriften folgen den in der Pages-Datei bereits notierten Unterfragen und dienen nur dazu, Quellenbeiträge, Gegenbelege und Grenzen auffindbar zu machen. Frühere, am 30. August 2026 zurückgesetzte Quellenauswertungen und Vergleichsmatrizen wurden nicht verwendet.

Barrierefreiheit ist entsprechend der Scope-Entscheidung kein eigener Analysebereich. Social Media, zwischenmenschliche Messenger-Kommunikation als eigener Gegenstand, Kunstwerke, Werkdokumentation und Kunsttheorie bleiben ausgeschlossen. Die beiden Messengerquellen werden ausschließlich als begrenzter Kontrast für sichtbare Kompositionsaktivität und deren technische Zustandslogik verwendet. Sie belegen keine KI-/LLM-Operation.

## Verbindliche Autorstruktur

Die Pages-Datei gibt folgende Bewegung vor:

1. **Einleitung und historischer Rahmen:** Texteingabe als gestalteter Übergang zwischen menschlicher Intention und technischer Verarbeitung; verschiedene Eingabetypen werden nicht als zwangsläufig lineare Entwicklung behandelt.
2. **Surface – What can I enter?** Formale Erscheinung, kommunizierte Funktion, sichtbare Regeln und scheinbare Offenheit.
3. **Interaction:** physischer Eingabeprozess, erforderliche Kenntnisse, Bearbeitung, Vorschläge, Iteration und Reformulierung.
4. **Operation:** Übersetzung in eine technische Funktion, Verarbeitung sowie Differenz zwischen sichtbarer und operativer Bedeutung.
5. **Schlussteil:** erst nach dem Schreiben festzulegende Verdichtung; die vorliegende Synthese nimmt sie nicht vorweg.

Zeitliche und animierte Zustände wie Typing, Generating, Streaming, Stoppen und Fehler werden nicht als neues Hauptkapitel eingeführt. Sie bilden ein Querschnittsthema zwischen Surface, Interaction und Operation: Sichtbarer Zustand, menschliche Interpretation und dokumentierter technischer Auslöser müssen getrennt werden.

## Zuordnung der 26 aktiven Quellen und einer offenen Vorprüfung

| Quelle | Primärer Beitrag in der Autorstruktur | Sekundärer Beitrag | Zentrale Grenze |
| --- | --- | --- | --- |
| [Weizenbaum 1966 – ELIZA](source-notes/weizenbaum-1966-eliza.md) | Historischer Rahmen; Operation eines regelbasierten Dialogsystems | scheinbar offene dialogische Surface; iterative Interaction | Fernschreiber statt grafischem Feld; keine Nutzerstudie und kein LLM |
| [Shneiderman 1980 – Natural vs. Precise](source-notes/shneiderman-1980-natural-vs-precise.md) | Historischer Rahmen; Kenntnisse und scheinbare Offenheit | methodische Begrenzung von Vergleichen | programmatische Position; keine konkrete Surface oder Operation |
| [Black und Moran 1982 – Command Names](source-notes/black-moran-1982-command-names.md) | Interaction: Lernen und Trennschärfe von Befehlsnamen | historischer Command-Kontrast | papierbasierte Aufgabe; keine Syntax, Shell oder Ausführung |
| [IEEE/The Open Group 2024 – POSIX `mkdir`](source-notes/ieee-open-group-2024-posix-mkdir.md) | konkrete normative Command-Syntax und Verzeichnisoperand | begrenzte Operation der Utility | keine Terminal-Surface, Nutzerstudie, vollständige Shellgrammatik oder Implementierung |
| [RFC 1866 – HTML 2.0 Forms](source-notes/rfc1866-html2-forms.md) | historische Surface-/Operation-Baseline für Formulare | Submission als Interaction -> Operation | Standard statt Browserbeobachtung; keine Serververarbeitung |
| [Seckler et al. 2014 – Usable Web Forms](source-notes/seckler-et-al-2014-usable-web-forms.md) | Surface -> Interaction: sichtbare Regeln, Orientierung und Korrektur | Validierungs- und Submissionfolge | gebündeltes Redesign; keine isolierten Einzeleffekte und kein Backend |
| [Cui et al. 2025 – Privacy Norms through Web Forms](source-notes/cui-et-al-2025-privacy-norms-web-forms.md) | Surface: Feldrollen, Labels und Seitenkontext | Klassifikation angeforderter Datenarten | Crawler tippt und sendet nicht; keine tatsächliche Datennutzung |
| [Subramonyam et al. 2024 – Gulf of Envisioning](source-notes/subramonyam-et-al-2024-gulf-of-envisioning.md) | Surface -> Interaction bei offenen Promptfeldern | konzeptioneller Kontrast zu festgelegten Operationen | theoretische Synthese; keine eigene Nutzerstudie oder Modellpipeline |
| [Zamfirescu-Pereira et al. 2023 – Why Johnny Can't Prompt](source-notes/zamfirescu-pereira-et-al-2023-why-johnny-cant-prompt.md) | Interaction: Promptwissen, Iteration und Testen | konkrete operative Rollen in BotDesigner | zehn Personen, eine Aufgabe, historisches GPT-3 und Forschungsprototyp |
| [Oulasvirta et al. 2013 – Two-Thumb Text Entry](source-notes/oulasvirta-et-al-2013-two-thumb-text-entry.md) | Interaction als körperlicher und erlernter Prozess | Touchpunkt -> Zeichen als operative Übersetzung | KALQ, Tablet, kleine homogene Stichproben und intensives Training |
| [Feit, Weir und Oulasvirta 2016 – How We Type](source-notes/feit-weir-oulasvirta-2016-how-we-type.md) | Interaction: physische Tastatur, Fingerstrategien und Blicksteuerung | Keypress-Verlauf gegenüber fertigem Text | 30 Personen, kontrollierte Transkription, finnische QWERTY-Tastatur und offizielles WPM-Erratum |
| [Ruan et al. 2017 – Speech and Keyboard Text Entry](source-notes/ruan-et-al-2017-speech-keyboard-text-entry.md) | Interaction: Touchscreen-Tastatur und Spracheingabe | Spracherkennung, sichtbare Ersttranskription und multimodale Korrektur | Idealbedingungen, kurze Transkription, Produktstand 2017 und keine freie Komposition |
| [van Esch et al. 2019 – Gboard Internationalization](source-notes/van-esch-et-al-2019-gboard-internationalization.md) | sprach- und schriftspezifische Surface/Interaction | Modelle und institutionelle Priorisierung | Herstellerbericht; aggregierte Methoden und Produktstand 2019 |
| [von Ahn et al. 2008 – reCAPTCHA](source-notes/von-ahn-et-al-2008-recaptcha.md) | sichtbare versus operative Bedeutung | Surface -> Interaction eines historischen Zugangstests | historisches System; keine gegenwärtige reCAPTCHA-Aussage |
| [WHATWG 2026 – HTML Standard](source-notes/whatwg-2026-html-standard-forms-input.md) | Operation: Feldzustände, Werte, Validierung und Submission | normative Surface- und Bearbeitungsrollen | Standard statt Browserpraxis; keine Serveroperation |
| [Hearst 2009 – Search User Interfaces](source-notes/hearst-2009-search-user-interfaces-preview.md) | Surface/Interaction von Suchfeldern, Feedback und Reformulierung | opake Querytransformation als Operationsfrage | unvollständiger Buchauszug, historische Beispiele und keine Retrievaltechnik |
| [Bowker und Star 1999 – Sorting Things Out](source-notes/bowker-star-1999-sorting-things-out-author-excerpts.md) | Operation als Klassifikations- und Informationsinfrastruktur | kategoriale Arbeit und Workarounds | Teilauszug; kein konkretes Texteingabefeld und keine technische Pipeline |
| [Iftikhar, Ma und Huang 2023 – Typing Indicators](source-notes/iftikhar-ma-huang-2023-typing-indicators.md) | enger Surface-/Interaction-Kontrast für sichtbare Aktivität und Warten | einzelne Tastenereignisse versus allgemeiner Status | Messenger; keine separat getestete Drei-Punkte-Animation und kein LLM |
| [RFC 3994 – isComposing](source-notes/rfc3994-iscomposing.md) | operative Baseline für diskrete Composition-Zustände und Timer | Operation -> Surface/Interaction als offene Implementierungsfrage | keine visuelle Form, reale Implementierung oder KI-/LLM-Kopplung |
| [Adams und Sasse 1999 – Users Are Not the Enemy](source-notes/adams-sasse-1999-users-not-enemy.md) | Interaction: Passwortwissen, Gedächtnis und organisationale Praxis | konstruktives Onlinefeedback als Surface-Frage | zwei historische Organisationen; keine konkrete Feld- oder Systempipeline |
| [Carroll 1982 – Filenames and Command Paradigms](source-notes/carroll-1982-filenames-command-paradigms.md) | **offene Vorprüfung**, noch keine aktive Evidenzrolle | mögliche Verbindung von sprachlicher Form und funktionalen Beziehungen | nur Abstract und Metadaten; keine Versuchsergebnisse oder Designregeln freigegeben |
| [Good 1982 – Ease of Use of Etude](source-notes/good-1982-etude-ease-of-use.md) | historischer Rahmen; Interaction eines frühen Ganzseiteneditors | Surface, Feedback und Undo | 21 unerfahrene Bürokräfte, enge Briefaufgabe und langsamer Timesharing-Prototyp |
| [MacKenzie und Soukoreff 2002 – Mobile Text Entry](source-notes/mackenzie-soukoreff-2002-mobile-text-entry.md) | Interaction: Messmethoden, Aufmerksamkeit, Lernen und Bearbeitung | Korpus-/Vorhersagemodelle als Operationsfrage | Reviewstand 2002; einzelne Keystroke-Beobachtung mit vier Desktopnutzer:innen |
| [Morris 2024 – Prompting Considered Harmful](source-notes/morris-2024-prompting-considered-harmful.md) | Surface/Interaction offener Prompts und strukturierter Alternativen | sichtbarer gegenüber intern umgeschriebenem Prompt | Positionsbeitrag; keine eigene Nutzerstudie oder konkrete technische Pipeline |
| [Quinn und Zhai 2016 – Text Entry Suggestions](source-notes/quinn-zhai-2016-text-entry-suggestions.md) | Interaction: Zeit-, Tap- und Aufwandskosten von Wortvorschlägen | Vorschlagsdarstellung und experimentelle Scorelogik | 17 Personen, Kopieraufgabe, historische Wortvervollständigung und keine reale Fehlerkorrektur |
| [Shneiderman 1983 – Direct Manipulation](source-notes/shneiderman-1983-direct-manipulation.md) | historischer Rahmen; sichtbare, inkrementelle und reversible Interaction | Syntax-zu-Handlungs-Übersetzung | konzeptionelle Synthese historischer Systeme; keine universelle Überlegenheitsstudie |
| [W3C 2026 – Input Events Level 2](source-notes/w3c-2026-input-events-level-2.md) | Interaction -> Operation von Bearbeitungsabsicht und DOM-Änderung | Vorschläge, Paste, Undo/Redo und IME-Komposition | Working Draft; keine visuelle Form oder Implementierungsunterstützung belegt |

Damit ist jede aktive Einzelnotiz mindestens einem vorgesehenen Abschnitt zugeordnet. Carroll ist nur als offene Vorprüfung sichtbar und trägt bis zur Volltextprüfung keine Syntheseaussage. Eine Quelle muss nicht in jedem Kapitel erscheinen; ihre Zuordnung folgt der stärksten direkt belegten Funktion.

## Einleitung und historischer Rahmen

### Forschungsthema und Typen von Texteingabe

Der Bestand stützt die Betrachtung von Texteingabe als **gestaltetem und technischem Übergang**, nicht als neutralem Behälter für bereits fertigen Text. Die untersuchten Fälle umfassen Command-Vokabular, historische und aktuelle Webformulare, Suche, Touch-Tastaturen, regelbasierten Dialog und ein LLM-basiertes Promptwerkzeug. Sie unterscheiden sich darin,

- was die Oberfläche als mögliche Eingabe kommuniziert,
- welche körperliche, sprachliche und kognitive Arbeit erforderlich wird,
- welches Ereignis den Text technisch wirksam macht,
- und welche Transformation, Übertragung oder Weiterverwendung folgt.

Die Typen sind deshalb als Vergleichsfälle und nicht als einheitliche Klasse zu behandeln. Ein Commandname, ein Formularwert, eine Query, ein Dialogzug und ein Prompt können ähnlich als sichtbarer Text erscheinen, besitzen aber unterschiedliche Eingaberegeln, Auslöser und operative Reichweiten.

### Historischer Rahmen

Der vorhandene Bestand erlaubt einen **selektiven historischen Kontrast**, aber noch keine lückenlose Entwicklungsgeschichte:

- ELIZA verbindet eine dialogische Surface mit einer klar dokumentierten, regelbasierten Operation; ein doppelter Wagenrücklauf übergibt die Eingabe an das Programm (W66-P1–P2, W66-P6).
- Shneiderman problematisiert bereits 1980, dass natürlichsprachliche Interfaces einen größeren Fähigkeitsraum erwarten lassen können, als ein System unterstützt; präzise Syntax kann Grenzen sichtbarer machen, verlangt aber Lernen (S80-P2–P4).
- Black und Moran zeigen für historische Texteditorbefehle, dass alltagssprachliche oder häufige Wörter nicht automatisch leichter sind; innerhalb des Sets ist semantische Trennschärfe zentral (BM82-P3–P5).
- POSIX.1-2024 liefert für `mkdir` eine konkrete Syntax aus Utility-Name, optionalen Optionen und einem oder mehreren Verzeichnisoperanden. Das Projektbeispiel `mkdir entwurf` konkretisiert diese Struktur, ohne Shell-Parsing oder reale Terminalnutzung zu belegen (POSIX24-P1–P4).
- Good dokumentiert einen frühen Ganzseiteneditor, in dem englischähnliche Befehle, beschriftete Tasten, Menü, Hilfe, Feedback und Undo kombiniert werden. Lernen, Zeitperformance, Angst und Einstellung fallen dabei nicht zu einem einzigen Ease-of-Use-Wert zusammen (GOOD82-P1–P7).
- Shneiderman fasst Ganzseiteneditoren und andere Systeme als Direct Manipulation: sichtbare Objekte, physische oder beschriftete Aktionen sowie schnelle, inkrementelle und reversible Effekte sollen Syntaxübersetzung verringern, ohne Repräsentationen automatisch überlegen zu machen (SHN83-P1–P8).
- RFC 1866 dokumentiert 1995 die technische Trennung von Feldrolle, bearbeitetem Zustand und übertragenen Name-Wert-Daten (RFC1866-P1–P6).
- Hearst beschreibt die Websuche von 2009 als historisch einfache Feld-Ergebnis-Konstellation, hinter der erlernte Querykonventionen und automatische Eingriffe liegen (HEARST-P2–P5, HEARST-P9).
- Subramonyam sowie Zamfirescu-Pereira et al. verschieben den Vergleich auf offene LLM-Promptinteraktion, belegen aber weder einen direkten Entwicklungspfad aus früheren Systemen noch eine aktuelle allgemeine Modelloperation (SUB24-P1–P4; ZP23-P1, ZP23-P8).

**Historische Grenze:** Zwischen diesen Punkten fehlen operative Primärquellen zur Shell, technische Zwischenstufen der Websuche und Formulare sowie ein belastbarer technischer Übergang zu heutigen LLMs. Carrolls möglicher Beitrag zu Dateinamen und Command-Paradigmen bleibt mangels Volltext offen. Die vorhandenen Fälle dürfen deshalb nicht als lineare Evolution „vom Command zur Konversation“ ausgegeben werden.

## Surface – What can I enter?

### Formale Erscheinung

Die Quellen zeigen vier unterschiedlich belastbare Formen von Surface-Evidenz:

1. **Normativ definierte Feldrollen:** RFC 1866 und WHATWG unterscheiden ein- und mehrzeilige Textfelder, verdeckte Passwortfelder, Search- und weitere typisierte Controls sowie sichtbare Dimensionshinweise. Beide Standards lassen die konkrete Browserdarstellung offen (RFC1866-P2–P3; WHATWG-P1–P2).
2. **Beobachtete beziehungsweise experimentell variierte Interfaces:** Seckler et al. dokumentieren konkrete Registrierungsformulare und kombinierte Änderungen an Layout, Feldtypen, Formatregeln und Fehlermeldungen (SE14-P1–P2). Iftikhar et al. dokumentieren vier Zustände eines Forschungs-Chats, darunter Textstatus, maskiertes und sichtbares Live-Tippen (IFT23-P1–P2).
3. **Historische Fallabbildungen:** reCAPTCHA zeigt zwei verzerrte Wörter, ein Feld und Bedienelemente; Hearst zeigt historische Suchfelder, Ergebnislisten, Vorschläge und History (RECAPTCHA-P1–P2; HEARST-P2, HEARST-P7, HEARST-P11).
4. **Gestaltete Eingabeinfrastruktur:** Oulasvirtas KALQ und van Eschs Gboard-Bericht zeigen, dass sichtbare Tastenpositionen, Seiten, Long Press und dynamische Tasten aus körperlichen, sprachlichen und technischen Entscheidungen hervorgehen (OUL13-P1, OUL13-P4; VE19-P4–P5).
5. **Historische Editor- und Vorschlagselemente:** Good dokumentiert Ganzseitenanzeige, beschriftete Tasten, Menü, Hilfe, Feedback und Undo; Shneiderman ordnet kontinuierliche Repräsentation und sichtbare reversible Effekte konzeptionell; Quinn und Zhai zeigen bis zu drei Vorschläge über der mobilen Tastatur (GOOD82-P1; SHN83-P1–P3; QZ16-P2–P3).

Der Bestand reicht damit aus, um **formale Varianten und ihre technische Bedingtheit** zu begründen. Er reicht nicht für eine gegenwärtige typübergreifende Bildanalyse. Dafür fehlt weiterhin ein eigener, datierter visueller Korpus konkreter Browser-, Betriebssystem- und Produktzustände.

### Kommunizierte Funktion

Ein Feld kommuniziert seine Funktion nicht allein durch seine rechteckige Form. Direkte Hinweise entstehen aus Feldtyp, Label, Placeholder, Begleittext, benachbarten Feldern, Buttons, Seitenkontext und Antwortdarstellung:

- Cui et al. zeigen auf Korpusebene, dass Labels, Feldattribute, benachbarter Text, Feldkombinationen und Websitekontext für die Zuordnung zu Formularfunktion und erwarteter Datenart verwendet werden können (CUI25-P2–P4, CUI25-P7). Dies ist eine Klassifikation durch die Forschungspipeline, keine gemessene menschliche Wahrnehmung.
- Seckler et al. verbinden vorab sichtbare Formatregeln und klarere Pflichtfeldrollen mit weniger Such-, Fehler- und Korrekturarbeit innerhalb der getesteten Redesignbündel (SE14-P3–P7).
- Hearst beschreibt Feldtext und Ergebnisdarstellung als Mittel, Suchraum, Aktion und nächste Schritte zu kommunizieren (HEARST-P1, HEARST-P6, HEARST-P10).
- BotDesigner zeigt, dass mehrere ähnlich wirkende Texteingaben – Preamble, Dialog und Reminder – operativ verschieden gelten, obwohl ihre unterschiedliche Reichweite nicht für alle Teilnehmenden verständlich war (ZP23-P1, ZP23-P7–P9).
- Morris argumentiert, dass ein leeres Promptfeld mögliche Aktionen kaum sichtbar macht und Menüs, Templates, Direct Manipulation oder Mixed Initiative Alternativen beziehungsweise Ergänzungen sein können; der Beitrag evaluiert diese Vorschläge nicht vergleichend (MOR24-P3–P4).

**Arbeitsfolgerung:** Die kommunizierte Funktion entsteht relational zwischen Feld und Kontext. Diese Aussage ist quer über Formular, Suche und Promptwerkzeug gestützt; ihre visuelle Ausprägung muss im späteren Schreiben jeweils am konkreten Interface belegt werden.

### Erwartungen und sichtbare Grenzen

Sichtbare Regeln können Eingabearbeit vorverlagern und Fehler vermeiden, während unsichtbare Regeln erst durch Systemreaktionen erfahrbar werden:

- Feldtypen und Attribute begrenzen mögliche Zustände normativ, zeigen aber nicht alle Bedingungen der Entry List, Methode, Action oder Codierung (RFC1866-P4–P6; WHATWG-P3, WHATWG-P8–P10).
- Secklers verbesserte Formulare machen Regeln und Feldrollen früher sichtbar; die Wirkung ist für das gesamte Redesign, nicht für jedes Merkmal einzeln, belegt (SE14-P2–P7).
- Sprach- und schriftspezifische Tastaturlayouts bestimmen, welche Zeichen direkt verfügbar, verborgen oder nur über Workarounds erreichbar sind (VE19-P2, VE19-P4, VE19-P9).
- Ein Composition- oder Typing-Zustand kommuniziert Aktivität, aber nicht notwendig Fortschritt, späteren Versand oder Inhalt (IFT23-P10; RFC3994-P3–P8).

**Gegenbegrenzung:** Ein Standard belegt Sollverhalten, eine Abbildung sichtbare Form und ein Experiment die getestete Variante. Keiner dieser Belegtypen darf allein als allgemeine Aussage über alle Interfaces oder alle Nutzenden behandelt werden.

### Scheinbare Offenheit

Die stärkste quellenübergreifende Surface-Frage ist die Differenz zwischen sichtbarer Offenheit und tatsächlicher Systembegrenzung:

- ELIZAs Gesprächsform wirkt sprachlich offen, während das System Schlüsselwörter und Skriptregeln verarbeitet (W66-P2–P6).
- Shneiderman warnt vor überhöhten Fähigkeitserwartungen an natürlichsprachliche Systeme und davor, natürliche Sprache grundsätzlich als leichter anzusehen (S80-P2–P4).
- Subramonyam et al. fassen die beim offenen Promptfeld schwer sichtbare Arbeit als Capability, Instruction und Intentionality Gaps (SUB24-P2–P5).
- Zamfirescu-Pereira et al. beobachten konkret, dass natürliche Sprache zwar Änderungen ermöglicht, robustes Promptdesign aber Rollen-, Kontext- und Testwissen verlangt (ZP23-P3–P7).
- Auch das einfache Suchfeld setzt Schlüsselwortkonventionen, Ergebnisprüfung und Reformulierung voraus (HEARST-P3–P4).
- Morris verschärft diese Kritik für generative KI: Prompting sei nicht einfach mit menschlicher natürlicher Sprache gleichzusetzen, könne ungewöhnliche Formulierungen verlangen und auf kleine Änderungen empfindlich reagieren (MOR24-P1–P3).

Diese Quellen stützen keine allgemeine These, offene Felder seien schlechter. Sie stützen die präzisere Frage, **welche Begrenzungen die Oberfläche vor der Eingabe zeigt und welche Arbeit sie an die Person verlagert**.

### Übergang zu Interaction

Der Übergang wird besonders dort sichtbar, wo ein Feld wenig erklärt, die erfolgreiche Eingabe aber umfangreiche Kompetenzen verlangt. Das Spektrum reicht von trennscharfen Befehlsnamen über Format- und Querykonventionen bis zur Einschätzung von LLM-Fähigkeiten und Promptwirkung. Surface und Interaction sollen deshalb nicht über ein allgemeines Usability-Urteil verbunden werden, sondern über konkrete Formen von Orientierungs-, Lern-, Formulierungs- und Korrekturarbeit.

## Interaction

### Eingabe als physischer Prozess

Feit, Weir und Oulasvirta liefern die direkteste Evidenz für alltägliches Schreiben auf einer physischen Tastatur. Dreißig Personen erreichten mit unterschiedlichen, teils selbst gelernten Fingerstrategien 34 bis 79 WPM. Hohe Leistung hing nicht einfach von der Zahl eingesetzter Finger ab, sondern von konsistenter Finger-zu-Taste-Zuordnung, Vorbereitung kommender Anschläge und geringer globaler Handbewegung. Selbst gelernte Personen kontrollierten die Tastatur zugleich häufiger visuell (FEIT16-P1–P8). Der Fall macht motorische Routine und Blicksteuerung sichtbar, bildet aber nur kontrollierte Transkription ab; die WPM-Methodenbeschreibung wird entsprechend dem offiziellen Erratum gelesen.

Oulasvirta et al. ergänzen die physische Tastatur um Touchscreen-Eingabe. Griff, Daumenwege, alternierende Taps und die Hover-over-Strategie beeinflussen die Eingabe; die KALQ-Leistung folgt erst nach durchschnittlich 16,8 Trainingsstunden (OUL13-P2–P6). Der Fall belegt keine allgemeine Smartphonepraxis, macht aber die verkürzende Gleichsetzung von „Text formulieren“ und „Text erscheint im Feld“ ebenfalls unhaltbar.

Ruan et al. erweitern das Spektrum auf Diktat. Unter ausdrücklich idealen Bedingungen war die Spracheingabe für kurze englische und mandarinchinesische Transkriptionen knapp dreimal schneller als die Touchscreen-Tastatur, erzeugte während der Eingabe weniger korrigierte Fehler, ließ aber mehr unkorrigierte Fehler im Endtext. Entscheidend für den Abschnitt ist nicht nur der Geschwindigkeitswert: Sprechen, manuelles Beenden, Systemverarbeitung, Prüfen und Korrigieren bilden eine eigene Handlungskette; 86 Prozent der Korrekturzeit in der Sprachbedingung wurden wieder mit der Tastatur ausgeführt (RUAN17-P3–P7, RUAN17-P12). Die Studie belegt weder freie Promptkomposition noch heutige Alltagsbedingungen.

Van Esch et al. ergänzen, dass physische Erreichbarkeit und Eingaberoutine sprach- und schriftsystemspezifisch sind. Long Press, Seitenwechsel, dynamische Tasten, Layoutwechsel und Workarounds verteilen die Eingabearbeit unterschiedlich (VE19-P2, VE19-P4, VE19-P7). Wegen der aggregierten Herstellerdarstellung dient diese Quelle nur als Kontextualisierung.

MacKenzie und Soukoreff liefern dafür den methodischen Rahmen: Textschaffen und Textkopieren verlangen unterschiedliche Aufmerksamkeitsverteilungen, Anfänger- und Expertenleistung dürfen nicht gleichgesetzt werden, und Geschwindigkeit muss gemeinsam mit Genauigkeit betrachtet werden (MS02-P3–P6). Diese Quelle liefert keine aktuellen Leistungswerte, verhindert aber, verschieden erhobene Text-Entry-Zahlen unkritisch zu vergleichen.

### Erforderliche Kenntnisse und Kompetenzen

Der autorbestätigte Arbeitsabschnitt unterscheidet mehrere Formen von Wissen und kognitiver Arbeit, statt sie vollständig unter „Systemwissen“ zu fassen:

- POSIX trennt im konkreten Beispiel Utility-Name und Verzeichnisoperand; Black und Moran sowie Shneiderman liefern die begrenzte Grundlage dafür, Befehlsnamen und erinnerte Syntax als erlernte Konventionen zu behandeln (POSIX24-P1–P4; BM82-P3–P5; SHN83-P4–P7).
- Natürlichsprachliche Eingabe kann sichtbare Syntax reduzieren, ohne Mehrdeutigkeit und Erwartungen an Systemfähigkeiten zu beseitigen (S80-P2–P4).
- Suchfelder setzen die Übersetzung eines Informationsbedarfs in eine Query und die Prüfung beziehungsweise Reformulierung anhand von Ergebnissen voraus (HEARST-P1, HEARST-P3–P4).
- Bei Promptfeldern sind Fähigkeiten, benötigter Kontext und erwartbare Ausgaben nicht vollständig vorgegeben. Theoretisches Modell und BotDesigner-Studie stützen, dass ein Teil des für weitere Eingaben nötigen Wissens erst durch Ausgabeprüfung und Iteration entsteht (SUB24-P2–P5; ZP23-P3–P7).
- Formulare können erwartete Datenarten und Formatregeln durch Labels und begleitende Angaben teilweise externalisieren. Cui dokumentiert unterschiedliche angeforderte Datenarten, Seckler sichtbare Regeln und Bearbeitungsfolgen; konkrete Wege des Erinnerns oder Nachschlagens sind Projektsynthese und wurden von beiden Studien nicht beobachtet (CUI25-P3, CUI25-P6–P7; SE14-P2–P7).

**Arbeitsfolgerung:** Weniger explizite Syntax reduziert Wissensarbeit nicht automatisch. Commands verlagern sie in Befehls- und Syntaxwissen, Suche und Prompting in Formulierung, Systemeinschätzung und Iteration, Formulare teilweise in die Bereitstellung vorgegebener Informationen. Der Bestand erlaubt keinen kontrollierten Direktvergleich derselben Aufgabe und keine allgemeine Rangfolge der Eingabeformen.

### Korrigieren und Bearbeiten

Der autorbestätigte Arbeitsabschnitt unterscheidet Bearbeitung von Fehlerkorrektur und verbindet beide über den jeweils sichtbaren Textzustand:

- WHATWG unterscheidet Cursor, Auswahl, Ersetzung, interne Wertzustände, Validierung, Submission und Reset; diese Schritte können verschiedene Ereignisse auslösen oder gerade nicht auslösen (WHATWG-P3–P6, WHATWG-P10–P11).
- Seckler et al. beobachten Fehler, sichtbare Meldungen, Korrektur und erneute Submission und zeigen weniger Versuche in den verbesserten Formularen (SE14-P3–P7).
- Oulasvirta et al. zeigen, dass Touchpunkte probabilistisch korrigiert werden können, wobei die online eingesetzte Version nicht den erhofften Effekt erzielte (OUL13-P7).
- Ruan et al. zeigen für Spracheingabe eine nachgelagerte Kontroll- und Korrekturphase; im getesteten System wurde der weitaus größte Teil der Korrekturzeit mit der Tastatur ausgeführt (RUAN17-P3, RUAN17-P5–P10).
- In BotDesigner werden Eingaben verändert, erneut erprobt und gegen einzelne Antworten bewertet; die systematische Testfunktion blieb in der Studie ungenutzt (ZP23-P3, ZP23-P6).
- Good und Shneiderman dokumentieren Undo, sichtbare Cursorposition sowie schnelle inkrementelle und reversible Operationen als zentrale Eigenschaften historischer Editoren (GOOD82-P1; SHN83-P1–P3).
- MacKenzie und Soukoreff zeigen, dass fertiger Text Navigation, Löschung, Umschalten und andere Bearbeitungsschritte nicht erkennen lässt; in ihrer kleinen Keystroke-Beobachtung zählen Backspace, Cursor- und Shift-Tasten zu den häufigsten Aktionen (MS02-P8–P9).
- *Input Events Level 2* trennt normative Bearbeitungsabsichten über `inputType`: Tippen, Vorschlags- und Autokorrekturersetzung, Paste, Drop, Löschung, Undo/Redo und Formatierung sind technisch unterscheidbar. `beforeinput` bezeichnet den versuchten Eingriff, `input` folgt einer tatsächlich ausgeführten DOM-Änderung (W3CIE26-P2–P7).

**Arbeitsfolgerung:** Text bleibt während der Eingabe ein veränderbarer Zustand. Bearbeitung kann Inhalt erweitern oder umstellen, während Korrektur bei der technischen Interpretation einer Handlung, am erzeugten Text oder als Reaktion auf Systemfeedback ansetzen kann. Der jeweils sichtbare Text enthält diese Prozessgeschichte nicht. Die funktionale Unterscheidung ist quellenübergreifende Projektsynthese; die Quellen beobachten keine allgemeine Verteilung dieser Motive. Offen bleiben reale Browserunterstützung, `EditContext`-Sonderfälle, aktuelle sichtbare Editing-Interfaces und empirische freie Langtextrevision.

### Autocomplete und Vorschläge

Der autorbestätigte Arbeitsabschnitt nutzt den Bestand, um die zusätzliche Wahrnehmungs-, Prüf- und Auswahlhandlung bei Vorschlägen zu beschreiben. Direkt belegt ist dabei nur der begrenzte Kostenkontrast einer kontrollierten mobilen Wortvervollständigungsaufgabe:

- Hearst dokumentiert historische Queryvorschläge, verwandte Begriffe und automatische Querytransformationen (HEARST-P7, HEARST-P9).
- Van Esch beschreibt Wortvorhersage und Autokorrektur als sprachmodellabhängige Eingriffe, die bei unpassender Unterstützung zurückgesetzt oder ausgeschaltet werden (VE19-P2, VE19-P6–P7).
- Subramonyam et al. führen Vorschläge, mehrere Ausgaben und manuelle Kontrolle als Gestaltungsmuster auf, ohne ihre Wirksamkeit selbst zu messen (SUB24-P7–P8).
- Quinn und Zhai messen bei 17 Personen: Immer sichtbare Wortvorschläge reduzieren Taps und subjektive körperliche Belastung, verlangsamen in der getesteten Kopieraufgabe jedoch die Zeicheneingabe. Der Vorteil hängt damit davon ab, ob motorische Aktionen, Zeit, Aufmerksamkeit oder subjektiver Aufwand bewertet werden (QZ16-P1–P8).

**Arbeitsfolgerung und Evidenzgrenze:** Vorschläge können Eingabearbeit von der unmittelbaren Zeichenerzeugung zum Wahrnehmen, Bewerten und Auswählen verschieben. Die Aussage „weniger Taps bedeuten nicht automatisch weniger Zeit“ ist nur für Quinn und Zhais konkrete Wortvervollständigung direkt belegt. Hearsts Suchvorschläge und Subramonyams Promptideen erweitern die Formenübersicht, belegen aber keinen entsprechenden Nutzungseffekt. Freie Komposition, Unsicherheit, Rechtschreibung, Fehlerkorrektur und generative beziehungsweise LLM-basierte Vorschläge wurden in Quinn und Zhais Studie nicht untersucht (QZ16-P9).

### Iteration und Reformulierung

Der autorbestätigte Arbeitsabschnitt trennt Bearbeitung des aktuellen Textes von Iteration nach einer Systemreaktion und definiert Reformulierung als zusätzliche Veränderung von Formulierung, Umfang oder inhaltlicher Ausrichtung. Diese Begriffe und ihr typübergreifender Vergleich sind Projektsynthese:

- Validierung und Fehlermeldungen führen bei den untersuchten Registrierungsformularen zu Korrektur und erneuter Submission; die verbesserte Bündelgestaltung verringert die Zahl nötiger Versuche (SE14-P1–P7).
- Suchergebnisse geben Rückmeldung zur bisherigen Query und können Begriffe oder Richtungen für eine Präzisierung beziehungsweise Neuausrichtung liefern (HEARST-P1, HEARST-P4, HEARST-P6).
- ELIZA bildet historisch einen wiederholbaren Wechsel aus Eingabe und Antwort, belegt aber keine tatsächliche Reformulierung und keine operative Gleichheit mit heutigen LLMs (W66-P1–P2).
- BotDesigner zeigt bei zehn Personen lokale, opportunistische Promptiteration und die Nichtnutzung systematischer Tests; Subramonyam et al. ordnen Iterationskosten und mögliche Fixierung theoretisch ein (ZP23-P2–P6, ZP23-P11; SUB24-P4–P5, SUB24-P8).

**Arbeitsfolgerung und Evidenzgrenze:** Systemreaktionen können zu Bedingungen der nächsten Eingabe werden. Iteration ist damit ein Prozessmerkmal, aber kein automatischer Beleg für Reformulierung, Lernen oder Qualitätssteigerung. Die Quellen stützen weder einen einheitlichen Iterationsmechanismus noch eine allgemeine Lernwirkung über Formular, Suche und LLM-Dialog hinweg. Offen bleiben aktuelle freie Suchsessions und vergleichbare heutige LLM-Chatverläufe.

### Warten, Turn-Taking und sichtbare Aktivität

Dieser Unterpunkt ist Material für Interaction und den Übergang zu Operation, kein eigenständiges Messengerkapitel:

- Iftikhar et al. zeigen in einer engen kooperativen Messengeraufgabe, dass keine Anzeige, allgemeiner Typing-Text, maskierte Zeichenaktivität und sichtbares Live-Tippen unterschiedlich viel Kompositionsinformation offenlegen und Warten, Turn-Taking und wahrgenommene Exposition beeinflussen (IFT23-P1–P8).
- Die Drei-Punkte-Animation wird dort nicht separat getestet. Einzelne statistische Werte des Artikels sind intern widersprüchlich und werden nicht übernommen (IFT23-P5, IFT23-P10).
- RFC 3994 zeigt als technische Gegenquelle, dass ein scheinbar kontinuierlicher Status aus diskreten `active`-/`idle`-Nachrichten, Refresh- und Idle-Timern sowie mehreren Endereignissen entstehen kann (RFC3994-P1–P8).

Für KI-/LLM-Interfaces folgt daraus nur eine Prüfregel: Ein sichtbarer Generating-, Streaming- oder Drei-Punkte-Zustand darf erst dann mit Modellaktivität oder Fortschritt verbunden werden, wenn eine konkrete Produkt- oder Entwicklerquelle die operative Kopplung dokumentiert.

## Operation

### Übersetzung in eine technische Funktion

Der zentrale Operationsbefund ist, dass „der eingegebene Text“ technisch kein einheitlicher Gegenstand ist. Seine Rolle hängt von Feldtyp, Kontext, auslösendem Ereignis und nachgelagerter Verarbeitung ab:

- Bei ELIZA wird die Eingabe durch doppelten Wagenrücklauf übergeben und als Material für Schlüsselwort- und Transformationsregeln behandelt (W66-P1–P4).
- In HTML-Formularen wird ein Feldzustand erst durch Name, Formzuordnung, Submission, Entry-List-Regeln, Methode, Action und Encoding zu übertragbaren Daten (RFC1866-P1, RFC1866-P4–P7; WHATWG-P3–P4, WHATWG-P8–P10).
- Bei KALQ kann ein Touchpunkt probabilistisch einem Zeichen zugeordnet werden; sichtbare Taste, Berührung und resultierendes Zeichen sind nicht notwendig identisch (OUL13-P7).
- Bei der Spracheingabe wird eine Äußerung serverseitig in einen sichtbaren Erststring übersetzt, der anschließend per Tastatur oder durch eine weitere Sprachsession verändert werden kann (RUAN17-P2–P3, RUAN17-P7–P10).
- In BotDesigner besitzen Preamble, aktueller Dialog, Reminder und Fehlerlabels unterschiedliche operative Rollen, obwohl sie als sichtbare Texte beziehungsweise Annotationen ähnlich zugänglich erscheinen (ZP23-P7–P9).
- Beim Composition-Status bleiben eigentliche Inhaltsnachricht und Statusnachricht technisch getrennt (RFC3994-P1–P5).
- Bei Web-Editing bezeichnet `beforeinput` eine versuchte Bearbeitungsabsicht, während `input` erst nach der ausgeführten DOM-Änderung ausgelöst wird; der sichtbare Endtext allein enthält diese Ereignisfolge nicht (W3CIE26-P4–P7; MS02-P8–P9).

### Verarbeitung

Die 26 freigegebenen Quellen decken einzelne Verarbeitungsformen ungleichmäßig ab:

- **Regelbasierte Dialogtransformation:** ELIZA ist technisch direkt dokumentiert (W66-P2–P4).
- **Formularwert, Validierung und Übertragung:** RFC 1866 und WHATWG liefern historische und aktuelle normative Baselines (RFC1866-P4–P7; WHATWG-P3–P11).
- **Klassifikation:** Cui et al. dokumentieren die Forschungspipeline zur Klassifikation von Formularen und angeforderten Datenarten; Bowker und Star liefern den theoretischen Infrastrukturrahmen. Beides ist von der tatsächlichen Websiteverarbeitung zu trennen (CUI25-P3–P7; BOWKER-P1–P11).
- **Probabilistische Zeichenrekonstruktion:** Oulasvirta et al. dokumentieren die Verbindung von Touchwahrscheinlichkeit und Sprachkontext (OUL13-P7).
- **Spracherkennung und multimodale Korrektur:** Ruan et al. dokumentieren für ihr Testbett den Weg von der serverbasierten Ersttranskription über sichtbare Kontrolle bis zu tastatur- oder sprachbasierter Korrektur. Die interne Deep-Speech-2-Inferenz bleibt außerhalb der Interfaceanalyse (RUAN17-P2–P3, RUAN17-P6–P10).
- **Verteilte Weiterverarbeitung:** reCAPTCHA dokumentiert die Aggregation mehrerer menschlicher Transkriptionen mit OCR-Vorschlägen (RECAPTCHA-P3–P6).
- **Promptzusammensetzung:** Zamfirescu-Pereira et al. dokumentieren eine Anfrage an `text-davinci-002` aus Preamble, lokalem Verlauf, Reminder und Rollenpräfix; die interne Modellinferenz bleibt offen (ZP23-P8).
- **Bearbeitungsereignisse:** *Input Events Level 2* ordnet Editing-Absichten und Daten technischen Ereignistypen und -folgen zu, einschließlich Vorschlagsersetzung, Undo/Redo, Paste und IME-Komposition. Der Working Draft belegt keine Implementierungsunterstützung (W3CIE26-P1–P9).
- **Wortvorhersage:** MacKenzie und Soukoreff beschreiben die korpusabhängige statistische Grundlage historischer Vorhersage; Quinn und Zhai dokumentieren die experimentelle Score- und Aktualisierungslogik ihres konkreten Systems. Beides ist von heutigen generativen Modellen zu trennen (MS02-P7; QZ16-P3).
- **Suche:** Hearst benennt Querytransformation, Ranking und automatische Korrektur, liefert aber keine technische Query-Index-Retrieval-Pipeline (HEARST-P9).
- **Command-Utility:** POSIX dokumentiert für `mkdir` die normative Zuordnung von Utility-Name und `dir`-Operand zur Verzeichniserzeugung. Shell-Parsing, Prozessstart und konkrete Implementierung bleiben offen (POSIX24-P1–P4).

Damit ist Operation nicht allgemein, sondern nur für bestimmte Fälle belastbar. Shell-Parsing und -Ausführung jenseits der einen Utility-Spezifikation, aktuelle Suche/Omnibox, Serververarbeitung und heutige LLM-Inferenz bleiben schreibbezogene Lücken.

### Sichtbare und operative Bedeutung

Der deutlichste Fall einer operativen Mehrfachbedeutung ist reCAPTCHA: Eine sichtbare Sicherheitsprüfung erzeugt zugleich eine Stimme für die Digitalisierung eines unbekannten Worts (RECAPTCHA-P2–P4). HTML-Standards zeigen eine weniger spektakuläre, aber systematische Differenz zwischen sichtbarem beziehungsweise bearbeitetem Text, internem Wert, Submission-Wert und übertragenem Datensatz (RFC1866-P4–P6; WHATWG-P3–P4, WHATWG-P8–P10).

Bowker und Star erweitern diese Differenz vorsichtig auf die infrastrukturelle Ebene: Kategorien, Formulare und Aufzeichnungsmedien strukturieren, was als vergleichbarer Wert weitergeführt werden kann; lokale Bedeutungs- und Zuordnungsarbeit kann in nachgelagerten Daten unsichtbar werden (BOWKER-P5–P11). Da sie kein konkretes Interface untersuchen, muss jede Anwendung dieses Rahmens auf ein Texteingabefeld zusätzlich durch direkte Surface-, Interaction- und technische Quellen belegt werden.

Für zeitliche Zustände gilt dieselbe Trennung: Eine sichtbare Aktivitätsanzeige ist zunächst eine Darstellung eines protokollierten oder lokal fortgeschriebenen Zustands. Sie belegt weder Inhalt noch späteren Versand und erst recht keine LLM-interne Aktivität (IFT23-P10; RFC3994-P5, RFC3994-P8, RFC3994-P10).

Morris nennt einen weiteren, bislang nur positionsartig belegten Fall: Systeme können sichtbare Prompts intern umschreiben, sodass eingegebener und verarbeiteter Text auseinanderfallen (MOR24-P5). Ohne versionierte Produkt- und Entwicklerquelle darf daraus keine Aussage über ein konkretes heutiges System abgeleitet werden.

## Übergänge zwischen den drei Ebenen

### Surface -> Interaction

Sichtbare Einfachheit reduziert nicht automatisch die erforderliche Arbeit. Klare Feldrollen und vorab sichtbare Regeln können Orientierung und Korrektur unterstützen; scheinbar offene Such- und Promptfelder verlagern einen Teil der Begrenzung dagegen in Query-, Fähigkeits-, Instruktions- und Bewertungswissen. Tastaturlayouts machen einige Zeichen leicht und andere nur über zusätzliche Gesten oder Workarounds erreichbar. Bei Spracheingabe strukturieren Mikrofonzustand, Abschlussaktion und sichtbare Ersttranskription die Folge aus Sprechen, Prüfen und Korrigieren. Direct Manipulation verlagert Handeln von erinnerter Syntax zu sichtbaren, inkrementellen Operationen, kann aber durch ungeeignete Repräsentationen neue Lern- und Deutungsprobleme erzeugen.

### Interaction -> Operation

Bearbeitbarer Text wird nicht allein dadurch operativ, dass er sichtbar im Feld steht. Je nach System braucht es doppelten Wagenrücklauf, Enter, Submit, einen Sendeschritt, ein bestimmtes Bearbeitungsereignis oder eine neue Modellanfrage. Autofill, Reset, Validierung, `beforeinput`/`input`, IME-Komposition, Statusnachrichten und Retry verändern technische Zustände nach unterschiedlichen Regeln.

### Surface -> Operation

Ein Feld zeigt nur einen Ausschnitt seiner operativen Bedingungen. Namen, Hidden-Werte, Methode, Action, Bearbeitungsereignisse, Promptkontext oder -umschreibung, Klassifikationsschema, Aggregation und Timer können ganz oder teilweise unsichtbar bleiben. Die Surface kann deshalb eine Funktion richtig kommunizieren und dennoch nachgelagerte Funktionen oder Reichweiten auslassen.

### Operation -> Surface/Interaction

Ergebnisse, Fehlermeldungen, Vorschläge, History, Retry-Ausgaben und Statusindikatoren machen Teile der Verarbeitung wieder sichtbar und liefern Material für weitere Eingaben. Dabei muss jede konkrete Rückmeldung getrennt geprüft werden: Was wurde tatsächlich dokumentiert, was nur dargestellt und was von der Person daraus geschlossen?

## Vorläufige quellenübergreifende Synthesen

Die folgenden Aussagen sind **Projektsynthesen**. Sie stehen nicht wörtlich in einer einzelnen Quelle und dürfen erst nach Auswahl des jeweiligen Kapitelfalls in Thesisprosa überführt werden.

| ID | Vorläufige Synthese | Quellenanker | Gegenbeleg oder Grenze | Status |
| --- | --- | --- | --- | --- |
| SYN-01 | Die formale Surface rahmt eine Eingaberolle, ohne deren operative Bedingungen vollständig offenzulegen. | RFC1866-P2–P6; WHATWG-P1–P4; CUI25-P2–P4 | Standards belegen keine Wahrnehmung; Cuis Klassifikation ist keine Nutzerstudie. | stark für Formulare |
| SYN-02 | Feldfunktion entsteht aus Feld, Label, benachbarten Elementen und Seiten- beziehungsweise Dialogkontext. | CUI25-P2–P7; HEARST-P10; ZP23-P1, ZP23-P7–P9 | Direkte Wahrnehmung nur punktuell untersucht. | mittel bis stark |
| SYN-03 | Scheinbar natürliche oder offene Eingabe kann Systemgrenzen unsichtbarer machen und zusätzliche Formulierungs- und Bewertungsarbeit erzeugen. | W66-P2–P6; S80-P2–P4; SUB24-P2–P5; ZP23-P3–P7; MOR24-P1–P4 | Keine allgemeine Überlegenheit geschlossener oder formaler Felder; Morris ist ein Positionsbeitrag. | stark als Fragestellung |
| SYN-04 | Texteingabe ist zugleich sprachliche, wahrnehmungsbezogene und körperlich erlernte Handlung. | FEIT16-P1–P8; OUL13-P2–P6; VE19-P2, VE19-P4; MS02-P3–P6 | Die direkten Studien nutzen kontrollierte Transkription und unterschiedliche Hardware; MacKenzie/Soukoreff liefern primär Methodik. | stark für physische Tastatur und kontrollierte Touch-Eingabe |
| SYN-05 | Weniger explizite Syntax beseitigt vorausgesetzte Wissensarbeit nicht; Commands, Suche, Prompting und Formulare verteilen sie unterschiedlich zwischen Regelwissen, Formulierung, Systemeinschätzung, Iteration und Informationsbereitstellung. | POSIX24-P1–P4; BM82-P3–P5; S80-P2–P4; SHN83-P4–P7; HEARST-P3–P4; SUB24-P2–P5; ZP23-P3–P7; CUI25-P3, CUI25-P6–P7; SE14-P2–P7 | Kein kontrollierter Direktvergleich derselben Aufgabe; Abrufwege für Formulardaten sind Projektsynthese; Carroll bleibt ohne Volltext. | stark als Vergleichsfrage |
| SYN-06 | Korrektur und Iteration sind konstitutive Teile der Eingabe, keine bloßen Ausnahmezustände. | SE14-P3–P7; WHATWG-P5–P6, WHATWG-P10–P11; W3CIE26-P4–P9; MS02-P8–P9; RUAN17-P5–P10; HEARST-P4, HEARST-P6, HEARST-P11; ZP23-P3–P6 | Normative Events, protokollierte Tasten, Sprachkorrektur und beobachtete Iteration sind unterschiedliche Evidenztypen. | stark |
| SYN-07 | Vorschläge verschieben Arbeit vom Schreiben teilweise zum Wahrnehmen, Prüfen und Auswählen; weniger Taps bedeuten nicht automatisch weniger Zeit. | HEARST-P7, HEARST-P9; VE19-P2, VE19-P6; SUB24-P7; QZ16-P4–P8 | Direkt gemessen nur für kontrollierte mobile Wortvervollständigung; keine freie oder generative Komposition. | stark im Quinn-Zhai-Fall |
| SYN-08 | Erst ein systemspezifisches Ereignis und sein Kontext machen bearbeitbaren Text technisch wirksam. | W66-P1; RFC1866-P4–P5; WHATWG-P6, WHATWG-P8–P10; W3CIE26-P4–P9; ZP23-P8; RFC3994-P2 | Auslöser und Ereignisfolgen sind nicht zwischen Systemen austauschbar. | stark |
| SYN-09 | Sichtbarer Text, interner Wert, Ereignisverlauf, übertragene Daten und ausgelöste Operation können auseinanderfallen. | RFC1866-P1, RFC1866-P6; WHATWG-P3–P4, WHATWG-P8–P10; W3CIE26-P5–P7; MS02-P8–P9; FEIT16-P9; OUL13-P7; RUAN17-P8–P10; ZP23-P9; MOR24-P5 | Für jeden Feldtyp ist eine eigene technische Quelle nötig; Morris dokumentiert keine konkrete Umschreibepipeline. | stark, mit fallbezogenen Grenzen |
| SYN-10 | Dieselbe Eingabe kann mehrere operative Funktionen oder Empfänger besitzen. | RECAPTCHA-P3–P6; RFC1866-P6; BOWKER-P8–P11 | Direkt und vollständig ist dies vor allem für das historische reCAPTCHA belegt. | stark im Fall, vorsichtig allgemein |
| SYN-11 | Ein sichtbarer Aktivitätszustand repräsentiert einen technisch erzeugten Zustand, nicht automatisch kontinuierlichen Fortschritt oder interne Berechnung. | IFT23-P1–P2, IFT23-P10; RFC3994-P1–P8, RFC3994-P10 | Messengerbelege dürfen nicht auf KI-/LLM-Operation übertragen werden. | stark als Begrenzungsregel |
| SYN-12 | Systemfeedback führt Operation zurück an Surface und Interaction und kann die nächste Eingabe strukturieren. | SE14-P3–P7; GOOD82-P1; HEARST-P6, HEARST-P8–P11; SUB24-P5, SUB24-P7; ZP23-P3, ZP23-P6; ADAMS99-P6 | Sichtbarkeit und tatsächliche Ursache des Feedbacks bleiben jeweils getrennt zu prüfen; Adams' Empfehlung ist nicht evaluiert. | stark |
| SYN-13 | „Ease of use“ ist kein einzelner Wert: Lernzeit, Geschwindigkeit, Genauigkeit, körperlicher Aufwand, Korrektur, Angst, Workload und Einstellung können unterschiedlich ausfallen. | GOOD82-P2–P7; MS02-P5–P6; FEIT16-P2–P7; RUAN17-P4–P9; QZ16-P4–P7 | Metriken, Modalitäten und Aufgaben unterscheiden sich; keine gemeinsame Metaanalyse. | stark als methodische Regel |
| SYN-14 | Direct Manipulation kann erinnerte Syntax durch sichtbare, inkrementelle und reversible Handlungen ersetzen, erzeugt aber eigene Repräsentations- und Lernanforderungen. | SHN83-P1–P8; GOOD82-P1; MOR24-P3–P4 | Historisches Konzept; Morris nennt es nur als nicht evaluierte Alternative für generative KI. | stark historisch, offen für aktuelle KI |
| SYN-15 | Ein fertiger Text zeigt nicht, wie er entstanden ist; Anschläge, Blick- und Bewegungsverlauf, Spracherkennung, Korrektur, Vorschlagsannahme, Paste, Undo/Redo und IME-Komposition benötigen Prozess- oder Ereignisdaten. | MS02-P8–P9; FEIT16-P1, FEIT16-P9; RUAN17-P8–P10; W3CIE26-P4–P9; QZ16-P5–P6 | Kontrollierte Prozessstudien plus normativer Working Draft; keine allgemeine reale Browser-, Alltags- oder Langtextstudie. | stark als methodische/technische Unterscheidung |
| SYN-16 | Ein Wechsel der Eingabemodalität beseitigt Interaktionsarbeit nicht, sondern verteilt sie neu zwischen Motorik, Sprechen, Aufmerksamkeit, Erkennung, Kontrolle und Korrektur. | FEIT16-P3–P8; OUL13-P2–P7; RUAN17-P3–P10; MS02-P3–P6 | Der direkte Sprachvergleich gilt nur für kurze Transkription unter Idealbedingungen; keine freie LLM-Promptkomposition. | stark für die untersuchten Eingabesituationen |

## Was der Bestand für die vorhandenen Kapitel bereits leistet

| Vorhandener Abschnitt | Bereits tragfähige Funktion | Noch nicht ausreichend gedeckt |
| --- | --- | --- |
| Einleitung/Historischer Rahmen | Typen als unterschiedliche Mensch-System-Übergänge; selektive Kontraste zwischen Command, Ganzseiteneditor, Direct Manipulation, Formular, Suche und Dialog | lückenlose Geschichte; Shell-Operation jenseits der `mkdir`-Utility; Carroll-Volltext; Übergang zu heutigen LLMs |
| Surface | Feldrollen, sichtbare Regeln, Editor-/Vorschlagselemente, Kontext, scheinbare Offenheit und begrenzte zeitliche Statusformen | eigener aktueller visueller Korpus; aktuelle native Browser- und KI-Produktzustände |
| Interaction | Physische Tastatur, Touchscreen und kontrolliertes Diktat; Körper, Lernen, Systemwissen, mehrdimensionale Evaluation, Korrektur, Wortvorschläge, Iteration, Warten und Feedback | freie Komposition und Langtextrevision; aktuelle In-the-wild-Diktier-, Such- und LLM-Prozessdaten |
| Operation | `mkdir`-Utility-Syntax, Formwerte und Submission, ELIZA-Regeln, Touchkorrektur, serverbasierte Ersttranskription, Editing-Events, reCAPTCHA-Aggregation, BotDesigner-Promptzusammensetzung und Composition-Timer | vollständiges Shell-Parsing und Prozessausführung, Query/Index/Retrieval, Omnibox-Routing, reale Editing-Unterstützung, heutige Spracherkennung und LLM-Inferenz |
| Sichtbare/operative Bedeutung | starke Fallkontraste durch reCAPTCHA, HTML-Wertstufen, BotDesigner-Rollen und RFC-Statuslogik | dokumentierte Kopplung konkreter KI-Statusanzeigen an Backendzustände |

## Schreibbezogene Lücken

Die Lücken lösen weiterhin keine pauschale Literaturrecherche aus. Sie werden erst aktiviert, wenn ein konkreter Absatz sie benötigt:

1. **Command Line:** POSIX deckt nun das konkrete `mkdir`-Beispiel mit Utility-Name, Syntax und Operand. Eine technische Primärquelle für vollständiges Shell-Parsing, Expansion, Prozessstart und sichtbares Feedback bleibt bei entsprechendem Schreibbedarf offen.
2. **Historische und aktuelle Surface:** datierter visueller Korpus konkreter Terminal-, Browser-, Such-, Formular- und KI-Zustände.
3. **Suche und Omnibox:** aktuelle Interfacebeobachtung sowie technische Query-, Index-, Retrieval-, Ranking- und Routingquelle.
4. **Editing:** reale Browserunterstützung des Working Drafts, `EditContext`, sichtbare Editing-Interfaces und empirische freie Langtextrevision, falls dies zentral wird.
5. **Vorschläge:** direkte Studie zu freier Komposition, Fehlerkorrektur, Inhaltsbeeinflussung und generativen beziehungsweise LLM-basierten Vorschlägen, falls SYN-07 über kontrollierte Wortvervollständigung hinausgeht.
6. **Formulardaten:** konkrete Backend- oder Implementierungsquelle, falls Speicherung oder institutionelle Weiterverwendung über die vorhandenen Fallkontraste hinaus behauptet wird.
7. **LLM-Operation:** aktuelle technische Primärquelle zu Promptkontext und Inferenz, sobald interne Modellverarbeitung erklärt werden soll.
8. **KI-/LLM-Statusanzeigen:** datierte Produkt- und Entwicklerquellen, die sichtbare Drei-Punkte-, Generating-, Streaming-, Stop- und Fehlerzustände mit tatsächlichen technischen Auslösern und Enden verbinden.
9. **Carroll 1982:** legal zugänglicher Volltext, falls Dateinamen und Command-Paradigmen über die eine Abstractaussage hinaus verwendet werden sollen.
10. **Freie Spracheingabe:** aktuelle In-the-wild-Studie zu eigener Text- oder Promptkomposition, Lärm, Bewegung, sozialem Kontext, Satzzeichen und Korrektur, falls der Abschnitt über die kontrollierte 2017er Transkription hinausgeht.

## Nächster Schreibschritt

**Interaction -> Eingabe als physischer Prozess** liegt nun in [`DRAFT_INTERACTION_STEPWISE_01.md`](DRAFT_INTERACTION_STEPWISE_01.md) als autorbestätigter und gegen die ausgewerteten Source Notes geprüfter deutscher Arbeitsstand vor. Die Fassung verbindet physische Tastatur, trainierte Zweidaumeneingabe, Spracheingabe und die methodische Grenze zur freien Formulierung. Bei Ruan et al. wurde die Formulierung auf den belegten Anteil der Korrekturzeit präzisiert. Der Abschnitt bleibt außerhalb der Thesis-LaTeX-Dateien; sein Draft-Modus ist abgeschlossen.

**Interaction -> Erforderliche Kenntnisse und Kompetenzen** ist nun ebenfalls in [`DRAFT_INTERACTION_STEPWISE_01.md`](DRAFT_INTERACTION_STEPWISE_01.md) als autorbestätigter und gegen die ausgewerteten Source Notes geprüfter deutscher Arbeitsstand festgehalten. Die Fassung vergleicht explizites Befehls- und Syntaxwissen, Queryformulierung, iterativ entstehendes Promptwissen und die teilweise Externalisierung erwarteter Daten durch Formulare. Die gezielt ergänzte POSIX-Quelle stützt nur das konkrete `mkdir`-Beispiel. Abrufwege für Formulardaten bleiben als Projektsynthese markiert. Der Abschnitt bleibt außerhalb der Thesis-LaTeX-Dateien; sein Draft-Modus ist abgeschlossen.

**Interaction -> Korrigieren und Bearbeiten** ist nun in derselben Datei als autorbestätigter und quellengeprüfter deutscher Arbeitsstand festgehalten. Die kompakte Übersicht unter [`QUELLENUEBERSICHT_INTERACTION_CORRECTION_EDITING_01.md`](QUELLENUEBERSICHT_INTERACTION_CORRECTION_EDITING_01.md) trennt allgemeine Textbearbeitung von Fehlerkorrektur, ordnet Touchinterpretation, Sprachtranskription und Formularvalidierung unterschiedlichen Korrekturebenen zu und begrenzt die Schlussfolgerung auf den jeweils sichtbaren Textzustand. Der Abschnitt bleibt außerhalb der Thesis-LaTeX-Dateien; sein Draft-Modus ist abgeschlossen.

**Interaction -> Autocomplete und Vorschläge** ist nun ebenfalls in derselben Datei als autorbestätigter und quellengeprüfter deutscher Arbeitsstand festgehalten. Die kompakte Übersicht unter [`QUELLENUEBERSICHT_INTERACTION_AUTOCOMPLETE_SUGGESTIONS_01.md`](QUELLENUEBERSICHT_INTERACTION_AUTOCOMPLETE_SUGGESTIONS_01.md) verbindet den direkt gemessenen Quinn-Zhai-Kontrast mit eng begrenzten Beispielen für Suchvorschläge, Promptideen und die Sprachabhängigkeit von Wortvorhersagen. Der Abschnitt bleibt außerhalb der Thesis-LaTeX-Dateien; sein Draft-Modus ist abgeschlossen.

**Interaction -> Iteration und Reformulierung** ist nun ebenfalls in derselben Datei als autorbestätigter und quellengeprüfter deutscher Arbeitsstand festgehalten. Die kompakte Übersicht unter [`QUELLENUEBERSICHT_INTERACTION_ITERATION_REFORMULATION_01.md`](QUELLENUEBERSICHT_INTERACTION_ITERATION_REFORMULATION_01.md) trennt Korrekturschleife, Suchreformulierung, dialogische Turn-Struktur und begrenzte Promptiteration. Die gemeinsamen Definitionen und die zeitliche Synthese sind als Projektargument markiert. Der Abschnitt bleibt außerhalb der Thesis-LaTeX-Dateien; sein Draft-Modus ist abgeschlossen.

Der nächste Teilabschnitt ist noch nicht als kompakte Schreibübersicht vorbereitet. Nach der bestehenden Autorstruktur folgt **Warten, Turn-Taking und sichtbare Aktivität**; seine Auswahl und Gewichtung beginnt erst nach ausdrücklicher Fortsetzung durch den Autor.

Der zuvor erstellte 417-Wörter-Entwurf unter [`DRAFT_INTERACTION_PHYSICAL_INPUT_01.md`](DRAFT_INTERACTION_PHYSICAL_INPUT_01.md) bleibt als historischer, zurückgestellter Arbeitsstand erhalten und wird nicht fortgeschrieben. Für alle weiteren Teilabschnitte gilt [`WORKFLOW_TEILABSCHNITTE.md`](WORKFLOW_TEILABSCHNITTE.md). Anzahl der Unterpunkte und Quellenpassagen sind nicht festgelegt, sondern folgen dem jeweiligen Argument. Eine weitere Literatursuche wird erst ausgelöst, wenn die Kurzübersicht eine konkrete Beleglücke zeigt.
