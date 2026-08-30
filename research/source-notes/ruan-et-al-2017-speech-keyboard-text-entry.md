# Ruan et al. 2017 - Speech and Keyboard Text Entry

## Status und Zugriff

- Bibliografie: Sherry Ruan, Jacob O. Wobbrock, Kenny Liou, Andrew Ng und James A. Landay, „Comparing Speech and Keyboard Text Entry for Short Messages in Two Languages on Touchscreen Phones“, *Proceedings of the ACM on Interactive, Mobile, Wearable and Ubiquitous Technologies* 1, Nr. 4, Artikel 159 (2017), 23 Seiten. DOI: `10.1145/3161187`.
- Citation Key: `ruanComparingSpeechKeyboard2017` (projektintern vorgesehen; Zotero-Import noch offen)
- Quellentyp: kontrollierte gemischte HCI-Studie mit Within-Subject-Vergleich von Sprache und Touchscreen-Tastatur, Leistungs-, Fehler-, Prozess- und Workloadmessung sowie Interviews
- Gelesene Fassung: `research/source-pdfs/ruan-et-al-2017-speech-keyboard-text-entry.pdf`, Autorenfassung über die University of Washington
- Dateiprüfung: 23 Seiten; SHA-256 `5474a2a001bb502be264e8693cf31a3ea15940a86ec5672ce897107486fecd4e`
- Zugriffstiefe: vollständiger Artikel einschließlich Abbildungen, Tabellen und Literaturverzeichnis; Text vollständig extrahiert und alle PDF-Seiten visuell geprüft
- Gelesene Seiten: Artikel 159:1–159:23
- Interessenkontext: Kenny Liou und Andrew Ng arbeiteten bei Baidu USA, als die Studie geplant, durchgeführt und dokumentiert wurde.
- Noch erforderlich: Für freie Komposition, heutige Diktier- und LLM-Interfaces, Hintergrundgeräusche, Gehen, Datenschutz beziehungsweise soziale Angemessenheit und reale Netze ist aktuelle In-the-wild-Evidenz nötig.

## Gegenstand, Methode und Evidenzart

Die Studie vergleicht Spracheingabe mit der eingebauten Apple-Touchscreen-Tastatur für kurze englische und mandarinchinesische Transkriptionsaufgaben. 48 erfahrene iPhone-Nutzer:innen – je 24 mit amerikanischem Englisch beziehungsweise Mandarin als Muttersprache – verwendeten ein iPhone 6 Plus. Die Sprachbedingung nutzte Baidus serverbasiertes Deep Speech 2; die Tastaturbedingungen nutzten Apples QWERTY- beziehungsweise Pinyin-Tastatur einschließlich Autokorrektur und Wortvervollständigung. Jede Person absolvierte beide Eingabemethoden in ihrer Sprache mit je zehn Übungs- und fünfzig Testphrasen. Die Durchführung fand sitzend in einem ruhigen Raum über ein schnelles Universitätsnetz statt und ist ausdrücklich als obere Leistungsgrenze unter Idealbedingungen angelegt.

## Surface

Die Test-App zeigt oben die zu transkribierende Phrase und darunter ein Eingabefeld. Im Tastaturmodus ist die Systemtastatur sichtbar. Im Sprachmodus wird zunächst eine Mikrofon-/Wellenformansicht mit „Done“ gezeigt; nach Abschluss erscheint die erkannte Zeichenfolge im Textfeld und die Tastatur kann zur Korrektur eingeblendet werden. Dieselbe sichtbare Textausgabe kann damit aus Tasteneingabe, automatischer Spracherkennung oder einer gemischten Korrekturfolge entstehen.

## Interaction

Unter den kontrollierten Bedingungen war Sprache für Englisch 2,93-mal und für Mandarin 2,87-mal schneller als die Touchscreen-Tastatur. Sie erzeugte während der Eingabe weniger korrigierte Fehler, ließ am Ende aber etwas mehr unkorrigierte Fehler stehen. Der Gesamtaufwand besteht nicht nur aus Sprechen: 39,2 Prozent der Zeit entfielen auf tatsächliches Sprechen, 31,5 Prozent auf Verzögerungen der Person und 22,6 Prozent auf Systemverarbeitung. Innerhalb der Sprachbedingung entstanden 91,5 Prozent der Zeit in der ersten Sprachtranskription; in der verbleibenden Korrekturzeit wurde zu 86 Prozent die Tastatur eingesetzt. Die Befragten fanden Sprache leichter zur Texterzeugung, die Tastatur aber leichter zur Fehlerkorrektur. Spracheingabe ersetzt die motorische Tastaturarbeit daher nicht einfach, sondern verändert die Folge aus Sprechen, Beenden, Prüfen, Moduswechsel und Korrigieren.

## Operation

Die App übermittelt Sprache an ein externes Deep-Speech-2-System und zeigt dessen Ersttranskription an. Tastatureingaben, Löschungen, Autokorrekturen, Wortvervollständigungen, Sprachsessions und Zeitpunkte werden protokolliert. In der Sprachbedingung kann ein kompletter erkannter String anschließend per Tastatur oder erneut per Sprache bearbeitet werden. Das Endergebnis verdeckt somit, ob Zeichen durch initiale Erkennung, Tastaturkorrektur oder erneute Spracheingabe entstanden sind. Die Quelle beschreibt keine heutige On-Device-Erkennung und keine LLM-basierte Sprachverarbeitung.

## Übergänge

- **Surface -> Interaction:** Mikrofonzustand, „Done“, sichtbare Ersttranskription und eingeblendete Tastatur strukturieren Sprechen, Abschluss, Kontrolle und Korrektur.
- **Interaction -> Operation:** Gesprochene Laute werden serverseitig in einen Textstring übersetzt; Tastatur- und Sprachkorrekturen verändern diesen String anschließend.
- **Operation -> Surface/Interaction:** Erst die angezeigte Transkription macht Erkennungsfehler sichtbar und löst gegebenenfalls eine Korrekturphase oder einen Modalitätswechsel aus.

## Direkt gestützte Aussagen

| ID | Aussage in eigenen Worten | Belegstelle | Evidenzart | Ebene | Einschränkung |
| --- | --- | --- | --- | --- | --- |
| RUAN17-P1 | 48 erfahrene iPhone-Nutzer:innen absolvierten in ihrer Muttersprache beide Eingabebedingungen mit je zehn Übungs- und fünfzig Testphrasen auf einem iPhone 6 Plus. | Art. 159:4–159:7 | kontrollierter Versuchsaufbau | I | Universitätsstichprobe, 19–32 Jahre; Transkription statt Komposition. |
| RUAN17-P2 | Die Sprachbedingung nutzte serverbasiertes Deep Speech 2; die Tastaturbedingung Apples QWERTY beziehungsweise Pinyin einschließlich Korrektur- und Vorschlagsfunktionen. | Art. 159:4–159:6 | Systembeschreibung | S / O | Produkt- und Modellstand 2017; keine heutige On-Device- oder LLM-Aussage. |
| RUAN17-P3 | Die App trennt Sprachaufnahme, sichtbare Ersttranskription und optionale Korrektur; korrigiert werden konnte per Tastatur oder durch eine weitere Sprachsession. | Art. 159:5; Abb. 1 | Interface- und Ablaufbeschreibung | S / I / O | Forschungstestbett, kein allgemeines Produktinterface. |
| RUAN17-P4 | Unter Idealbedingungen lag Sprache bei 152,86 WPM gegenüber 52,24 WPM für die englische Tastatur und bei 123,00 gegenüber 42,83 WPM für Mandarin. | Art. 159:12–159:13; Tabelle 3, Abb. 5 | gemessene Leistungsdaten | I | Ruhiger Raum, sitzend, schnelles Netz, kurze Phrasen ohne Satzzeichen; obere Leistungsgrenze. |
| RUAN17-P5 | Sprache erzeugte aggregiert weniger korrigierte Fehler während der Eingabe (5,30 gegenüber 11,22 Prozent), ließ aber mehr unkorrigierte Fehler im Endtext (1,30 gegenüber 0,79 Prozent). | Art. 159:13–159:15; Tabelle 3, Abb. 6–7 | Fehlerstromanalyse | I / O | Aggregation über zwei Sprachen mit signifikanter Interaktion; sprachspezifische Werte bei Detailaussagen verwenden. |
| RUAN17-P6 | In der Sprachbedingung entfielen 39,2 Prozent der Zeit auf tatsächliches Sprechen, 31,5 Prozent auf Verzögerungen der Person und 22,6 Prozent auf Systemverarbeitung. | Art. 159:15–159:16; Abb. 9 | zeitliche Prozessanalyse | I / O | Kurze Phrasen und manuelles „Done“ prägen die Verteilung. |
| RUAN17-P7 | 91,5 Prozent der Zeit in der Sprachbedingung entfielen auf die erste Sprachtranskription; von der Korrekturzeit wurden 86 Prozent mit der Tastatur und 14 Prozent mit Sprache ausgeführt. | Art. 159:16–159:17; Abb. 10 | Modalitäts- und Zeitanteilsanalyse | I / O | Gilt für dieses Testbett und dessen Korrekturoptionen. |
| RUAN17-P8 | 96,7 Prozent der finalen Zeichen stammten direkt aus der Ersttranskription, 2,7 Prozent aus Tastatur- und 0,6 Prozent aus Sprachkorrekturen. | Art. 159:17; Abb. 11 | Zeichenstromanalyse | O | Hohe Erkennungsleistung unter Idealbedingungen. |
| RUAN17-P9 | Die Teilnehmenden bewerteten Sprache in allen NASA-TLX-Kategorien beider Sprachen als weniger belastend als die Tastatur; zugleich galt die Tastatur subjektiv als leichter für Korrekturen. | Art. 159:17–159:19; Abb. 12–14 | Fragebogen und Interviews | I | Subjektive Bewertung innerhalb einer kontrollierten Transkriptionsstudie. |
| RUAN17-P10 | Der Eingabestrom protokolliert Einfügen, Löschen, Autokorrektur, Wortvervollständigung und Sprachsessions mit Zeitstempeln und unterscheidet korrigierte von im Endtext verbliebenen Fehlern. | Art. 159:7–159:10; Tabellen 1–2 | methodische Prozessmessung | I / O | Messmodell des Forschungsprototyps, keine Aussage über beliebige Apps. |
| RUAN17-P11 | Die Autor:innen bezeichnen ruhige Umgebung und schnelles Netz ausdrücklich als Idealbedingungen und fordern Untersuchungen mit Lärm, eingebetteter Erkennung, Satzzeichen und realistischeren Situationen. | Art. 159:19–159:20 | ausdrückliche Quellenbegrenzung | I / O | Keine Evidenz für unterwegs, privatheitskritische oder sozial ungeeignete Situationen. |
| RUAN17-P12 | Transkription kontrolliert Formulierungs- und Erinnerungsarbeit, bildet freie Komposition aber nicht ab und kann Sprache relativ begünstigen. | Art. 159:6–159:7 | methodische Selbstbegrenzung | I | Für das Schreiben von Prompts oder längeren eigenen Texten nicht direkt übertragbar. |

## Verhältnis zur Grundstruktur

Die Quelle erweitert „Eingabe als physischer Prozess“ um Spracheingabe, ohne sie als körperlos darzustellen. Sie belegt eine andere Interaktionskette: sprechen, Abschluss signalisieren, Erkennung abwarten, Text prüfen, gegebenenfalls zur Tastatur wechseln und korrigieren. Für die geplante kurze Passage sind vor allem RUAN17-P3–P7 und P12 relevant; die hohen WPM-Werte dürfen nur mit den Ideal- und Transkriptionsgrenzen genannt werden.

## Grenzen und Gegenprüfung

Die Studie ist von 2017, verwendet ein iPhone 6 Plus, serverbasiertes Deep Speech 2 und kurze vorgegebene Phrasen ohne Satzzeichen. Sie behandelt keine freie Promptformulierung, längere Texte, Hintergrundgeräusche, Bewegung, soziale Situationen oder Datenschutz. Die 48 Personen sind junge, erfahrene Smartphone-Nutzer:innen. MacKenzie und Soukoreff begründen die methodische Differenz zwischen Kopieren und Textschaffen; Feit et al. und Oulasvirta et al. liefern ergänzende motorische Evidenz für physische beziehungsweise Touchscreen-Tastaturen.

## Entscheidung

**Kernquelle für den geplanten Abschnitt mit enger Kontextgrenze.** Funktion: direkter Vergleich von Touchscreen-Tastatur und Spracheingabe sowie Beleg dafür, dass Diktat die Arbeit in Erkennung, Prüfung und häufig tastaturbasierte Korrektur verschiebt. Nicht als aktueller Produktbenchmark oder Beleg für freie LLM-Promptkomposition verwenden.

