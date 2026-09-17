# OpenAI-API – Kontextrollen und Datenverwendung, Snapshot 2026

## Status und Zugriff

Zwei offizielle Entwicklerseiten, abgerufen am **15. September 2026**, ohne hier verifiziertes Veröffentlichungsdatum:

1. OpenAI: [*Text generation*](https://developers.openai.com/api/docs/guides/text), Key `openaiTextGenerationSnapshot2026`.
2. OpenAI: [*Data controls in the OpenAI platform*](https://developers.openai.com/api/docs/guides/your-data), Key `openaiDataControlsSnapshot2026`.

Roh-HTML und Lesetexte unter `research/source-texts/operation-2026-09-15/`; vollständige URLs und Hashes im dortigen README. Am 15. September 2026 in `06 LLM and Agentic Interfaces` importiert: Text generation `2M35CM8S` / HTML `Y4EKJTX7`; Data controls `35LR2DFV` / HTML `JQELXXGQ`. Byteidentische Roh-HTML-Anhänge, Citation Keys und automatischer Export geprüft. Keine vollständigen Offline-Websites mit sämtlichen Assets; Abrufdatum nicht als Veröffentlichungsdatum eingetragen.

**Leseumfang:** Text generation: Erläuterung des Output-Arrays, „Prompt engineering“, „Message roles and instruction following“, Rollenvergleich und anschließende Hinweise zu mehrteiliger Konversation. Nicht sämtliche Codebeispiele oder verlinkten Zusatzguides ausgewertet. Data controls: Abschnitte ab Titel/Grundregeln bis einschließlich „Web Search“, insbesondere Datenarten, Retentionskontrollen, Endpoint-Tabelle und Responses-spezifische Details; der folgende Data-residency-Teil ist nicht Gegenstand der Auswertung. Abschnittstitel statt erfundener Seitenzahlen zitieren.

## Gegenstand, Methode und Evidenzart

**Anbieterselbstauskunft** über die API. Als überschaubarer Fall wird eine textuelle Responses-Anfrage betrachtet; kein eigener Request ausgeführt und keine Datenübertragung oder Speicherung empirisch gemessen. Die spätere Verwendung dieses konkreten Falls in der Thesis bleibt Tims Entscheidung. API-Bedingungen gelten nicht ohne weitere Prüfung für die ChatGPT-Weboberfläche.

## Surface und Interaction

Kein Beleg für die sichtbare Gestaltung oder Nutzerwahrnehmung eines bestimmten Chatinterfaces. Die Dokumentation zeigt, dass sichtbarer Nutzertext nur einen Teil einer strukturierten Anfrage oder Antwort darstellen kann; wie eine konkrete Anwendung diese Teile zeigt, bleibt gesondert zu untersuchen.

## Operation und Übergänge

Anfragen haben Rollen und zusätzlichen Kontext. Entwickleranweisungen sind laut Dokumentation gegenüber Nutzeranweisungen priorisiert. Der Output kann neben Text weitere Objekte enthalten. Datenverwendung umfasst getrennte Zwecke und Speicherarten; ein Ausschluss von Modelltraining ist keine Aussage über jegliche Speicherung.

## Direkt gestützte Aussagen

| ID | Aussage in eigenen Worten | Belegstelle | Evidenzart | Ebene | Einschränkung |
| --- | --- | --- | --- | --- | --- |
| OAI26-P1 | Die dokumentierte API priorisiert `instructions` gegenüber `input` sowie Developer- gegenüber User-Nachrichten. | Text generation: „Message roles and instruction following“ samt Rollentabelle | vorgesehene API-Semantik | O | Keine Garantie perfekter Befolgung und kein Nachweis jeder ChatGPT-Konfiguration. |
| OAI26-P2 | Frühere Dialogteile können Kontext bilden; frühere `instructions` werden beim Verknüpfen über `previous_response_id` nicht automatisch als neue Instructions übernommen. | Text generation: Hinweise vor/nach dem Rollenvergleich | dokumentierte Kontextsteuerung | O | Nicht jede Konversationsinformation hat dieselbe Rolle oder Lebensdauer. |
| OAI26-P3 | Das Output-Array kann neben Text andere Objekte enthalten; ein aggregierter Ausgabetext ist nicht das gesamte API-Antwortobjekt. | Text generation: Erläuterung von `output` und `output_text` | API-Struktur | O | Kein Einblick in sämtliche internen Berechnungsschritte. |
| OAI26-P4 | API-Eingaben und -Ausgaben werden laut Anbieter standardmäßig nicht zum Modelltraining verwendet; ausdrückliches Opt-in ist möglich. | Data controls: Einleitung | erklärte Datenpraxis | O | Nicht auf Consumer-ChatGPT oder alle Speicherzwecke übertragen. |
| OAI26-P5 | Missbrauchsprotokolle können Eingaben, Antworten und abgeleitete Metadaten enthalten und werden standardmäßig bis zu 30 Tage vorgehalten, mit benannten Ausnahmen. | Data controls: „Abuse monitoring“ | erklärte Retention | O | Kein ausnahmsloser Höchstwert: rechtliche Pflichten oder notwendige Gefahrenabwehr können längere Retention begründen. |
| OAI26-P6 | Responses-Anwendungszustand wird laut Endpoint-Details standardmäßig beziehungsweise bei `store=true` mindestens 30 Tage gespeichert, vorbehaltlich Ausnahmen. | Data controls: „Storage requirements and retention controls per endpoint“ → Responses-Details | endpointbezogene Speicherregel | O | Nicht mit Abuse-Logging verwechseln; Endpoint-Tabelle allein ist unzureichend. |
| OAI26-P7 | Zusätzliche Retentionskontrollen hängen von Freigabe, Endpoint und Ausnahmen ab; externe Dienste können eigene Regeln haben. | Data controls: ZDR/MAM und Endpoint-Details zu externen Diensten | dokumentierte Varianten | O | „Zero Data Retention“ nicht pauschal als keinerlei Speicherung, Ausnahme oder Drittpartei auslegen. |

## Verhältnis zur Grundstruktur und Gegenprüfung

Operation 1: Nutzertext ist Teil einer rollenstrukturierten Anfrage. Operation 3: Übertragung, Training, Protokollierung und Anwendungszustand getrennt betrachten. Operation 4: Sichtbarer Antworttext begrenzt nicht automatisch die operative Reichweite der Anfrage.

**Projektsynthese:** Der Mensch formuliert den sichtbaren Text, aber andere Akteure können dessen verarbeitungswirksamen Kontext und Datenlebensdauer festlegen. Kritische Fragen: **Wer darf verbindlicher instruieren? Wer kann Speicherentscheidungen treffen? Was lässt sich aus einer sichtbaren Antwort über spätere Datenverwendung überhaupt erkennen?**

Die Dokumentation ist keine unabhängige Compliance-Prüfung. Keine Aussage, jede Anfrage werde für Training, Drittanbieter oder öffentliche Publikation weiterverwendet. Der tatsächlich gewählte Dienst, Zeitpunkt und Konfiguration müssen im Manuskript genannt werden.

## Entscheidung

**Fallquelle.** Schließt eine konkrete Dokumentationslücke zu Rollen und getrennten Datenzwecken. Kein allgemeiner Beleg für alle Promptfelder und noch keine autorbestätigte Wahl der API als finales Thesisbeispiel.
