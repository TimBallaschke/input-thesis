# Schulzrinne 2005 - RFC 3994 isComposing

## Status und Zugriff

- Bibliografie: Henning Schulzrinne, *Indication of Message Composition for Instant Messaging*, RFC 3994 (Internet Engineering Task Force, Januar 2005). DOI: `10.17487/RFC3994`.
- Citation Key: `schulzrinneIndicationMessageComposition2005`
- Quellentyp: technischer Standards-Track-RFC für einen Instant-Messaging-Statusnachrichtentyp
- Gelesene Fassung: `research/source-texts/rfc3994.txt`
- Dateiprüfsumme: SHA-256 `2e2e02f25571282429ca3b3ec90d405ad5c796bf5e6b71fa2b2ab6f0c732243c`
- Zugriffstiefe: vollständiger lokaler Standardtext einschließlich Zustandsdiagrammen, XML-Schema, Sicherheits- und Registrierungsabschnitten
- Gelesene Abschnitte/Seiten: gesamter RFC, Abschnitte 1–10, Druckseiten 1–13
- Noch erforderlich: Der heutige Status des RFC, reale Implementierungsunterstützung und die konkrete visuelle Darstellung in Produkten wurden nicht geprüft. Für KI-/LLM-Interfaces ist separate technische Dokumentation erforderlich.

## Gegenstand, Methode und Evidenzart

RFC 3994 spezifiziert einen eigenen XML-basierten Statusnachrichtentyp `application/im-iscomposing+xml`, mit dem ein Instant-Messaging-Client einer anderen Partei mitteilt, ob eine Person gerade eine Inhaltsnachricht komponiert. Der Standard trennt ausdrücklich die eigentliche Inhaltsnachricht von der vorgelagerten Statusnachricht. Er definiert Sender- und Empfängerzustände, Timer, optionale Metadaten, Transportbedingungen und Datenschutzanforderungen. Es handelt sich um normative technische Festlegungen und begründende Protokollbeschreibung, nicht um eine Nutzungsstudie und nicht um eine Spezifikation der sichtbaren Oberfläche.

## Surface

Der RFC schreibt keine Drei-Punkte-Animation, keinen Text wie „is typing“, keine Position, Farbe, Bewegung oder Dauer der sichtbaren Anzeige vor. Er definiert ausschließlich maschinenlesbare Zustandsinformationen, aus denen ein Client eine Darstellung ableiten kann. Das optionale `contenttype`-Element kann auf Text, Audio, Video oder einen genaueren MIME-Typ hinweisen, ist aber ausdrücklich nur ein Hinweis und keine Garantie für das Format der späteren Inhaltsnachricht.

## Interaction

Der Standard motiviert den Status mit einer Turn-Taking-Unsicherheit: Wartende Personen könnten Schweigen als Verlassen der Unterhaltung oder als eigenen Gesprächszug interpretieren, wodurch Nachrichten einander kreuzen. Seine Interaktionsannahme lautet daher, dass die Kenntnis laufender Komposition Warten und Gesprächskoordination unterstützen kann. Der RFC misst diese Wirkung nicht.

Die Statusinformation kann besonders granular sein, weil sie Aktivitätsbeginn, Inaktivität und optional die letzte Bearbeitungszeit offenlegt. Der Sicherheitsabschnitt behandelt dies als schützenswerte private Information. Ein Status kann gesendet werden, obwohl die Person die Nachricht später verwirft; für Page Mode wird deshalb empfohlen, ihn nur beim Verfassen einer Antwort auf eine frühere Nachricht zu senden.

## Operation

Der Standard modelliert `idle` und `active`. Ausgangs- und Nach-Sende-Zustand ist `idle`. Beginnt die Person mit der Komposition, wechselt der sendende Client zu `active` und sendet eine Statusnachricht mit `<state>active</state>`. Solange Inhalt erzeugt wird, bleibt der Zustand aktiv.

Zwei Sender-Timer strukturieren den Zustand:

- Der Active-State-Refresh legt fest, wie oft während fortgesetzter Aktivität erneut `active` gesendet wird. Er sollte nicht kürzer als 60 Sekunden sein. Fehlt ein Refresh-Wert, nimmt der Empfänger nach 120 Sekunden Inaktivität `idle` an.
- Stoppt die Komposition länger als das konfigurierte Idle-Timeout, sendet der Client `idle`; der empfohlene Standardwert beträgt 15 Sekunden. Beginnt die Komposition erneut, folgt wieder `active`.

Wird die Inhaltsnachricht vor Ablauf des Idle-Timeouts gesendet, ist keine zusätzliche Idle-Nachricht nötig. Auf Empfängerseite endet `active`, wenn eine Idle-Statusnachricht, die eigentliche Inhaltsnachricht oder der Refresh-Timeout eintritt. Dadurch ist der sichtbare Status eine zeitlich begrenzte Interpretation von Statusnachrichten, nicht kontinuierliche Kenntnis der Komposition.

Die Statusnachricht enthält zwingend `state` und optional `lastactive`, `contenttype` und `refresh`. Sie kann im Session- oder Page-Mode transportiert werden. Gemeinsamer Transport mit Inhaltsnachrichten unterstützt Reihenfolge und Synchronisation; im Page Mode ist trotzdem eine verspätete oder vertauschte Zustellung möglich. Ein nicht unterstützender SIP-Empfänger kann mit Status 415 antworten, worauf der Sender weitere Statusnachrichten einstellen muss.

## Übergänge

- **Surface -> Interaction:** Der Standard definiert keine Oberfläche. Eine daraus erzeugte Anzeige kann laufende Aktivität kommunizieren und beeinflussen, ob eine Person wartet oder erneut schreibt; Form und Wahrnehmung bleiben außerhalb des RFC.
- **Interaction -> Operation:** Beginn und Fortsetzung menschlicher Komposition lösen `active` aus; längere Inaktivität, Senden oder Timer führen zurück zu `idle`.
- **Surface -> Operation:** Jede sichtbare Typing-Anzeige wäre eine Implementierungsentscheidung auf Basis eines empfangenen oder lokal fortgeschriebenen Zustands. Sie zeigt nicht notwendigerweise aktuellen Fortschritt, zukünftigen Versand oder konkreten Inhalt.
- **Operation -> Surface/Interaction:** Empfangene Statusnachricht und Timer können einen sichtbaren Zustand beginnen, aktualisieren oder beenden. Netzreihenfolge, Crash, ausbleibender Refresh oder verworfene Nachricht können die sichtbare Interpretation von der tatsächlichen aktuellen Aktivität trennen.

## Direkt gestützte Aussagen

| ID | Aussage in eigenen Worten | Belegstelle | Evidenzart | Ebene | Einschränkung |
| --- | --- | --- | --- | --- | --- |
| RFC3994-P1 | RFC 3994 trennt die eigentliche Inhaltsnachricht von einer eigenen Statusnachricht über den aktuellen Kompositionszustand. | Abschn. 2–3.1, S. 3 | technische Festlegung | O | Instant Messaging; keine Aussage über KI-Antworten. |
| RFC3994-P2 | Das Zustandsmodell umfasst `idle` und `active`; Beginn der Komposition löst `active` aus, der Ausgangs- und Nach-Sende-Zustand ist `idle`. | Abschn. 3.1–3.2, S. 3–4; Abb. 1 | technische Festlegung | I -> O | Der Client muss Aktivität erkennen; konkrete Eingabegeräte sind nicht festgelegt. |
| RFC3994-P3 | Fortgesetztes `active` kann durch Refresh-Nachrichten erneuert werden; der Refresh sollte mindestens 60 Sekunden betragen, ohne Angabe nimmt der Empfänger nach 120 Sekunden `idle` an. | Abschn. 3.2–3.3, S. 4–5 | normative Timerregel | O | `SHOULD`/Default, keine Garantie jeder Implementierung. |
| RFC3994-P4 | Nach längerer Inaktivität soll der Sender `idle` senden; der empfohlene Standardwert des Idle-Timeouts ist 15 Sekunden. | Abschn. 3.2, S. 4 | normative Zustandsregel | I -> O | Konfigurierbar und daher nicht gleichbedeutend mit sofortigem Tippende. |
| RFC3994-P5 | Auf Empfängerseite endet `active` durch eine Idle-Statusnachricht, die Inhaltsnachricht oder den Ablauf des Refresh-Timers. | Abschn. 3.3, S. 5; Abb. 2 | technische Festlegung | O | Empfangszustand kann der tatsächlichen Senderaktivität zeitlich hinterherlaufen. |
| RFC3994-P6 | `contenttype` ist nur ein Hinweis auf das wahrscheinliche Medium und keine Garantie für die spätere Inhaltsnachricht. | Abschn. 3.5, S. 7 | ausdrückliche Protokollgrenze | O | Optionales Feld. |
| RFC3994-P7 | Gemeinsamer Session-Transport soll Reihenfolge und Synchronisation von Status- und Inhaltsnachrichten unterstützen; im Page Mode bleibt vertauschte Zustellung möglich. | Abschn. 4, S. 7–8 | technische Begründung/Transportgrenze | O | Protokollabhängig, keine reale Implementierungsevaluation. |
| RFC3994-P8 | Der Status kann gesendet werden, obwohl die Person die Nachricht später verwirft. | Abschn. 7, S. 9 | ausdrückliche Sicherheits-/Datenschutzgrenze | I / O | Aktivitätsstatus belegt weder Versand noch Inhalt. |
| RFC3994-P9 | Der RFC behandelt Kompositionsaktivität als schützenswerte private Information und empfiehlt im Page Mode Statusanzeigen nur für Antworten auf frühere Nachrichten. | Abschn. 7, S. 9 | normative Sicherheitsbetrachtung | I / O | Der RFC schreibt keine konkrete Erkennung einer Antwort vor. |
| RFC3994-P10 | Der Standard legt keine visuelle Form des Indikators fest; die Drei-Punkte-Animation ist keine Protokollanforderung. | gesamter RFC, insbesondere Abschn. 3–6 | Abwesenheit einer UI-Festlegung/Protokollgrenze | S / O | Aussage gilt für den Inhalt dieses RFC, nicht für andere Produktstandards. |

## Verhältnis zur Grundstruktur

RFC 3994 ist die operative Gegenquelle zum sichtbaren Typing-Indikator. Er zeigt, dass ein scheinbar kontinuierlicher Interfacezustand aus diskreten Statusnachrichten, lokal gesetzten Timern und mehreren möglichen Endereignissen entsteht. Damit lässt sich präzise zwischen menschlicher Komposition, protokollierter Aktivität, empfangsseitigem Zustand und visueller Darstellung unterscheiden.

## Grenzen und Gegenprüfung

Der RFC betrifft zwischenmenschliches Instant Messaging und spezifiziert weder reale Produktumsetzung noch Nutzerwahrnehmung. Seine Veröffentlichung von 2005 wird nicht als Beleg für heutige Implementierung oder aktuellen Standardstatus verwendet. Iftikhar et al. liefern einen begrenzten Wahrnehmungs- und Interaktionskontrast, testen aber keine RFC-3994-Implementierung und keine Drei-Punkte-Bedingung. Weder Quelle verbindet einen Statusindikator mit KI-/LLM-Inferenz, Token-Streaming, Modellfortschritt oder Antwortabbruch.

## Entscheidung

**Stützquelle mit enger Scope-Grenze.** Funktion: technische Baseline für einen vom Inhalt getrennten Composition-Status, seine Timer, Übergänge, Unsicherheiten und Datenschutzfolgen. Nicht verwenden als Beleg für konkrete Drei-Punkte-Darstellung, reale Messengerimplementierung oder KI-/LLM-Generierung. Verbleibende Lücke: dokumentierte technische Kopplung sichtbarer Generating-/Streaming-/Stop-/Fehlerzustände an ein konkretes Mensch-KI-System.
