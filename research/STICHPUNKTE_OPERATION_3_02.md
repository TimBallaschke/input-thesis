# Operation 3: Übertragung, Speicherung und Weiterverwendung

Stand: 15. September 2026. P-0163 / AI-058. Überarbeiteter Stichpunktvorschlag
nach der Gewichtungsprüfung von DRAFT-06. Diese Fassung ersetzt für die weitere
Besprechung den Vorschlag `STICHPUNKTE_OPERATION_3_01.md`; die ältere Datei bleibt
als Prozessstand erhalten. Keine verabschiedete Thesisprosa, kein Eingriff in
die vierteilige Gesamtgliederung oder die Pages-Manuskripte.

**Leitfrage:** Wohin gelangen die Daten einer Eingabe, was bleibt davon erhalten,
und wer bestimmt ihre weitere Verwendung?

**Kernaussage:** Die unmittelbare Aufgabe einer Eingabe legt weder ihre
Speicherdauer noch sämtliche Verwendungszwecke fest; diese hängen auch von
technischen, organisatorischen und wirtschaftlichen Entscheidungen der
beteiligten Akteure ab.

## 1. Ausgangspunkt: Verarbeitung, Datenwege und beteiligte Stellen

- An Operation 2 anschließen: Nun nicht erneut erklären, wie ein Ergebnis
  entsteht, sondern verfolgen, wohin die Eingabedaten gelangen und was mit ihnen bleibt.
- Übertragung, Speicherung, Verknüpfung und Nutzung für weitere Aufgaben
  unterscheiden. Der Nachweis eines Vorgangs belegt nicht automatisch die übrigen.
- Am jeweiligen Beispiel benennen, welche Verarbeitung lokal erfolgt und
  welche Daten an welche Stelle übermittelt werden. Keine allgemeine Kette
  von Textfeld zu Server zu Werbeprofil behaupten.
- Bei einer Anwendung mit eingebundenem Modellanbieter Anwendungsbetreiber
  und API-Anbieter analytisch unterscheiden; weitere Empfänger nur bei Beleg nennen.
- Eingegebenen Text, Kennungen und technisch abgeleitete Informationen
  auseinanderhalten. Beim späteren BetterHelp-Fall wird gerade ihre Verknüpfung wichtig.

Kritische Frage: **Mit wem interagiere ich sichtbar, und welche Stellen sind
an der Verarbeitung meiner Angaben beteiligt?**

Belegbasis: eigene analytische Rahmung; OpenAI, *Data controls in the OpenAI
platform*, Datenarten und dienstbezogene Regeln; FTC 2023, Complaint,
Rn. 48-54. Konkrete Datenwege sind fallbezogen zu belegen, nicht aus dem
Aussehen des Feldes abzuleiten.

## 2. Speicherung: Was bleibt erhalten und wofür?

- Eine abgeschlossene Anfrage nicht mit dem Ende sämtlicher Speicherung gleichsetzen.
- Am begrenzten OpenAI-API-Beispiel drei Fragen unterscheiden:
  - Bleiben Daten zur Bereitstellung einer Funktion als Anwendungszustand erhalten?
  - Werden Inhalte oder Metadaten zur Missbrauchserkennung protokolliert?
  - Werden Daten zur Verbesserung beziehungsweise zum Training von Modellen genutzt?
- Laut Anbieter werden API-Daten ohne ausdrückliches Opt-in nicht zum
  Modelltraining verwendet. Dennoch können Anwendungszustand oder Protokolle
  gespeichert werden: **Nicht fürs Training genutzt bedeutet nicht nicht gespeichert.**
- Aufbewahrung und Konfigurationsmöglichkeiten hängen von Funktion, Einstellung
  und dokumentierten Ausnahmen ab; keine einheitliche Speicherfrist behaupten.
- Als begrifflichen Schluss festhalten: Speicherung kann der ursprünglichen
  Aufgabe dienen. Fortgesetzte Verarbeitung ist nicht automatisch ein Zweckwechsel.

Kritische Frage: **Wer legt fest, welche Speicherung erforderlich ist, wie lange
sie dauert und wer darüber verfügen kann?**

Beleg: OpenAI, [*Data controls in the OpenAI platform*](https://developers.openai.com/api/docs/guides/your-data),
Einleitung, „Types of data stored with the OpenAI API“, „Data retention controls
for abuse monitoring“ und „Storage requirements and retention controls per endpoint“;
Abruf 15. September 2026. Vorhandene Auswertung OAI26-P4 bis P7. Anbieterselbstauskunft
zur API, keine unabhängige Praxisprüfung und keine allgemeine ChatGPT-Regel.

## 3. Mehrfachverwendung: Eine Eingabe erfüllt verschiedene Aufgaben

- Das ursprüngliche textbasierte reCAPTCHA von 2008 als kurzen historischen Fall einsetzen.
- Die Eingabe verbindet eine Sicherheitsprüfung mit der Digitalisierung gedruckter Texte.
- Das bekannte Wort dient als Kontrolle; die zweite Antwort wird als mögliche
  Transkription berücksichtigt und mit weiteren Antworten sowie OCR-Vorschlägen abgeglichen.
- Nutzer:innen leisten damit zusätzlich zur Zugangsprüfung einen Beitrag zu
  einer anderen Aufgabe. Die Entwickler haben diese Verbindung eingerichtet.
- Zusätzlichen Nutzen nicht automatisch als Missbrauch behandeln; Nutzen,
  Erkennbarkeit, Einwilligung und Verteilung der Arbeit bleiben verschiedene Fragen.

Kritische Frage: **Für welche weitere Aufgabe arbeite ich mit meiner Eingabe,
und wer hat diese Verbindung hergestellt?**

Beleg: von Ahn et al. 2008, S. 1465-1466. Historisches System; keine Aussage
über heutiges reCAPTCHA oder die Wahrnehmung der Nutzer:innen.

## 4. BetterHelp: Angaben zur Beratung werden für Werbung nutzbar

- Den ursprünglichen Zweck benennen: Aufnahmeangaben zur Vermittlung passender
  Therapeut:innen; daneben die von der FTC beschriebenen Vertraulichkeitszusagen.
- Laut FTC wurden bestimmte Aufnahmeangaben und Kennungen für Werbung
  verwendet beziehungsweise an Werbeplattformen übermittelt.
- Die Verknüpfung konkret machen: Gehashte E-Mail-Adressen ermöglichten laut
  Complaint den Abgleich mit Plattformkonten; eine Kennung ist nicht automatisch anonym.
- Den Fall „AddToWishlist“ knapp einsetzen: Die Angabe über frühere Therapie
  wurde als Werbeereignis codiert; laut FTC wurde Facebook dessen Bedeutung mitgeteilt.
- Den Zweckwechsel an erneuter Ansprache, ähnlichen Zielgruppen und
  Anzeigenoptimierung zeigen. Die Nutzerangabe erhält einen weiteren wirtschaftlichen Nutzen.

Kritische Frage: **Wer entscheidet, dass eine Angabe zur eigenen Unterstützung
zugleich zur Ansprache potenzieller Kund:innen genutzt wird?**

Belege: FTC 2023, Complaint, Rn. 11-13, 23-27 und 46-54, besonders 53b/54.
Vorwürfe als solche kennzeichnen; zur Verfahrenseinordnung Decision and Order,
S. 1-2. Bestimmte Aufnahmeangaben, Auswahlantworten und Kennungen, nicht
nachgewiesene Weitergabe vollständiger Therapiegespräche. Keine aktuelle Praxisprüfung.

## 5. Staab: Informationen ableiten, die nicht ausdrücklich abgefragt wurden

- Von mitgeteilten und verknüpften Angaben zur Ableitung persönlicher Merkmale wechseln.
- Staab et al. untersuchten, wie damalige Sprachmodelle aus ausgewählten
  Reddit-Textsammlungen Merkmale wie Wohnort, Alter oder Beruf erschließen konnten.
- Sprachliche und inhaltliche Hinweise können dabei über ausdrücklich
  formulierte Angaben zur Person hinausgehen.
- Im getesteten Anonymisierungsverfahren blieben Rückschlüsse trotz Entfernung
  erkannter direkter Personenangaben möglich; keine vollständigen oder sicher
  zutreffenden Nutzerprofile daraus ableiten.
- Als eigene Zuspitzung: Text kann nicht nur ein Anliegen ausdrücken, sondern
  auch zum Material für Aussagen über die schreibende Person werden.

Kritische Frage: **Welche Aussagen über mich können aus einem Text entstehen,
obwohl ich diese Informationen nicht ausdrücklich mitteilen wollte?**

Beleg: Staab et al. 2024, S. 4-9; Bewertungsverfahren S. 19, arXiv v2.
Fähigkeitsbeleg im untersuchten Setting, kein Nachweis allgemeiner Chatdienst-Praxis.
Nicht mit BetterHelp zu einer vermeintlich belegten LLM-Werbekette verbinden.

## 6. Gemeinsame Zuspitzung: Wer bestimmt Zwecke und Reichweite?

- An den Fällen benennen, wer speichert, Zwecke verknüpft, Informationen ableitet
  oder geschäftlichen Nutzen verfolgt. Nicht alles einem abstrakten „System“ zuschreiben.
- Unterschiedliche Entscheidungsebenen beachten: API-Konfigurationen werden
  nicht schon dadurch von Endnutzer:innen festgelegt, dass diese den Text formulieren.
- Die Machtfrage an der Verteilung von Entscheidungsmöglichkeiten festmachen:
  Wer bestimmt Empfänger, Aufbewahrung, Zuordnungen und zusätzliche Nutzungszwecke?
- Als Projektsynthese: Einen Text zu verfassen bedeutet nicht, allein über
  seine weitere Verwendung zu bestimmen. Technische Verarbeitung an sich
  belegt jedoch weder Missbrauch noch uneingeschränkte Anbietermacht.
- Die abschließende FTC-Anordnung als konkrete Begrenzung nennen: Sie untersagt
  bestimmte Weitergaben für Werbezwecke. Eine Anordnung belegt nicht bereits ihre Erfüllung.

Belegbasis: OpenAI, „Configuring data retention controls“; FTC, Complaint,
Rn. 5, 46 und 57; Decision and Order, Definitionen J/K und Provision I,
S. 5-6. Die übergreifende Machtfrage ist eigene Zusammenführung der Fälle.

## 7. Schluss und Übergang

- Speicherung, Mehrfachverwendung, kommerzielle Nutzung und personenbezogene
  Ableitung einmal gemeinsam unterscheiden, ohne alle Beispiele zu wiederholen.
- Festhalten: Die Verwendung einer Eingabe kann zeitlich und funktional über
  das unmittelbar verfolgte Anliegen hinausreichen; ob und wie, ist fallbezogen zu prüfen.
- Zu Operation 4 überleiten: **Woran können Nutzer:innen diese Vorgänge erkennen,
  und welche Möglichkeiten haben sie, darauf einzuwirken?**

Eigene Synthese aus den genannten Belegen. Die ausführliche Analyse von
Sichtbarkeit, Überprüfbarkeit, Löschung und Eingriffsmöglichkeiten bleibt Operation 4.

## Kompakter Quellenanschluss

| Unterpunkt | Quelle und Stelle | Benötigte Aussage / Grenze |
| --- | --- | --- |
| Datenwege | API-Datenarten; FTC Complaint Rn. 48-54 | Fallbezogene Beteiligte und Datenarten, keine universelle Infrastrukturkette |
| Speicherung | OpenAI, Einleitung, Datenarten und Retentionsabschnitte | Training, Protokolle, Zustand trennen; datierte Anbieterbeschreibung |
| Mehrfachverwendung | von Ahn S. 1465-1466 | Historische Zweckverknüpfung, keine Wahrnehmungsstudie |
| Werbenutzung | FTC Complaint Rn. 11-13, 23-27, 46-54 | Konkrete Vorwürfe, keine Therapiechat- oder aktuelle Praxisbehauptung |
| Ableitungen | Staab S. 4-9, 19 | Begrenzte Textinferenz, keine vollständigen Profile |
| Entscheidungsspielräume | API-Konfiguration; FTC Order S. 1-2, 5-6 | Unterschiedliche Zuständigkeit und Regulierung; Synthese gesondert markieren |

**Quellen reichen für diesen Vorschlag aus.** Keine neue Literatur oder
Zotero-Aufnahme. Keine Claim-Ausweitung auf Datenverkauf, vollständige Profile,
allgemeine Trainingsnutzung oder zuverlässig nachgewiesene Manipulation.
Command Line und Suche bleiben Teil der Arbeit, brauchen hier aber keine
zusätzlichen, unbelegten Datenverwertungsfälle. Die Blöcke sind Schreibschritte,
keine Pflicht zu sieben gedruckten Unterkapiteln oder gleich langen Beispielen.
