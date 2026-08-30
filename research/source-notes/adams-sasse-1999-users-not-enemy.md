# Adams und Sasse 1999 - Users Are Not the Enemy

## Status und Zugriff

- Bibliografie: Anne Adams und Martina Angela Sasse, „Users Are Not the Enemy“, *Communications of the ACM* 42, Nr. 12 (1999), S. 40–46. DOI: `10.1145/322796.322806`.
- Citation Key: `adamsUsersNotEnemy1999`
- Quellentyp: gemischte Passwortstudie mit Webfragebogen, qualitativen Interviews und Grounded-Theory-Auswertung; daraus abgeleitete Gestaltungsempfehlungen
- Gelesene Fassung: `research/source-pdfs/adams-sasse-1999-users-not-enemy.pdf`, autorisierte UCL-Fassung unter `https://discovery.ucl.ac.uk/id/eprint/20247/`
- Zugriffstiefe: vollständiger Artikel einschließlich Literatur und Autorinnenangaben; Text extrahiert und ausgewählte Seiten visuell gegengeprüft
- Gelesene Seiten: veröffentlichte S. 40–46; lokale PDF-S. 1–8
- Noch erforderlich: Konkrete heutige Passwortfelder, Passwortmanager, aktuelle Authentifizierungsregeln und moderne Browser-/Betriebssystemunterstützung benötigen eigene, aktuelle Quellen.

## Gegenstand, Methode und Evidenzart

Die Studie untersucht Verhalten und Vorstellungen bei Passwortauthentifizierung. Ein Webfragebogen mit 139 Antworten erfasste unter anderem Passwortkonstruktion, Nutzungshäufigkeit, Erinnerung und Arbeitspraxis; ungefähr die Hälfte der Antworten stammte aus einem Technologieunternehmen. Darauf folgten 30 halbstrukturierte Interviews in diesem Unternehmen und einem Bauunternehmen. Offene Fragebogendaten und Interviews wurden mit Grounded Theory ausgewertet. Die Autorinnen identifizieren vier Problemfelder: mehrere Passwörter, Passwortinhalt, Vereinbarkeit mit Arbeitspraxis sowie Vorstellungen von organisatorischer Sicherheit und Informationssensibilität. Das Design ist explorativ und organisationsbezogen; es ist keine kontrollierte Interfaceevaluation.

## Surface

Die Quelle bildet kein konkretes Passwortfeld ab und beschreibt weder Maskierung noch Label, Placeholder oder Layout. Sichtbarkeit erscheint nur indirekt als Gestaltungsproblem: Nutzer:innen orientierten ihre Bedrohungseinschätzung daran, was sie sehen oder nicht sehen, und einzelne Befragte schätzten gedruckte Vertraulichkeitskennzeichnungen. Als Empfehlung fordert der Artikel konstruktives Onlinefeedback während der Passwortkonstruktion, einschließlich einer Erklärung, warum ein Passwort zurückgewiesen wird. Die Quelle begründet damit die Relevanz sichtbarer Regeln und Rückmeldungen, aber nicht deren konkrete visuelle Ausführung.

## Interaction

Passworteingabe wird als Erinnerungs-, Konstruktions- und Umgehungsarbeit sichtbar. Mehrere und häufig wechselnde Passwörter förderten nach den berichteten Daten Aufschreiben, einfache oder miteinander verwandte Passwörter und sinkende Motivation. Nutzer:innen verfügten häufig nicht über ausreichendes Wissen zu Wörterbuchangriffen, Passwortinhalt und der Trennung von Benutzerkennung und Passwort. Regeln, die mit Teamarbeit oder individueller Nutzung kollidierten, wurden geteilt oder anderweitig umgangen. Das Verhalten wird daher nicht als bloße Nachlässigkeit, sondern als Reaktion auf mentale Last, fehlende Erklärung und unpassende Arbeitsabläufe interpretiert.

## Operation

Die Einleitung trennt Identifikation durch eine Benutzerkennung von Authentifizierung durch ein geheimes Passwort. Individuelle Passwörter können technisch beziehungsweise organisatorisch Verantwortlichkeit und Audit Trails unterstützen; die Interviews zeigten jedoch, dass die meisten Befragten diese Nachverfolgbarkeit nicht bedacht hatten. Die Quelle erklärt weder Hashing noch Übertragung, Speicherung oder Serverprüfung. Ihre operative Evidenz endet bei der Rolle des Passworts als Authentifizierungsgeheimnis und bei organisatorischen Folgen wie Kontozuordnung und Auditierbarkeit.

## Übergänge

- **Surface -> Interaction:** Fehlende sichtbare Begründung und unzureichendes konstruktives Feedback lassen Nutzer:innen eigene Regeln für Passwortsicherheit bilden.
- **Interaction -> Operation:** Die eingegebene Zeichenfolge dient der Authentifizierung; die für Nutzer:innen wahrnehmbare Gedächtnisarbeit und die organisatorische Kontozuordnung sind jedoch nicht dasselbe.
- **Surface -> Operation:** Benutzerkennung und Passwort besitzen unterschiedliche operative Rollen, können aber ohne klare Gestaltung als zwei gleichermaßen geheime Erinnerungsobjekte erscheinen.
- **Operation -> Surface/Interaction:** Passwortregeln und Zurückweisungen können als Feedback sichtbar werden; der Artikel empfiehlt Erklärungen, evaluiert aber keine konkrete Umsetzung.

## Direkt gestützte Aussagen

| ID | Aussage in eigenen Worten | Belegstelle | Evidenzart | Ebene | Einschränkung |
| --- | --- | --- | --- | --- | --- |
| ADAMS99-P1 | Die Studie kombiniert 139 Webfragebögen mit 30 halbstrukturierten Interviews in zwei Organisationen und wertet offene Daten mit Grounded Theory aus. | lokale PDF-S. 2 | Studiendesign | I | Explorative, nicht repräsentative Organisationsstichprobe. |
| ADAMS99-P2 | Mehrere Passwörter und häufige Wechsel wurden mit Aufschreiben, vereinfachten oder verwandten Passwörtern und geringerer Sicherheitsmotivation verbunden. | lokale PDF-S. 2 und 4–6 | berichtete Befunde und Interpretation | I | Die 50-Prozent-Angaben besitzen wegen vieler unbeantworteter Fragen einen unklaren Nenner. |
| ADAMS99-P3 | Fehlendes Wissen über Passwortangriffe und sicheren Passwortinhalt führte dazu, dass Nutzer:innen eigene, teils unsichere Konstruktionsregeln bildeten. | lokale PDF-S. 2–4 | qualitative Befunde | I | Historischer Organisationskontext von 1999. |
| ADAMS99-P4 | Nutzer:innen verwechselten Identifikation durch Benutzerkennung und Authentifizierung durch Passwort, was die wahrgenommene Erinnerungsbelastung erhöhte. | lokale PDF-S. 4 | qualitative Befunde plus Systemunterscheidung | S / I / O | Keine Messung eines konkreten Feldlayouts. |
| ADAMS99-P5 | Mechanismen, die mit Team- oder Individualarbeit unvereinbar erschienen, wurden geteilt oder umgangen. | lokale PDF-S. 3 und 5–6 | qualitative Befunde | I | Bezieht sich auf zwei konkrete Organisationen und damalige Richtlinien. |
| ADAMS99-P6 | Die Autorinnen empfehlen proaktives Training und konstruktives Onlinefeedback mit Begründung, wenn ein Passwort als unsicher zurückgewiesen wird. | lokale PDF-S. 6–7 | Designempfehlung | S / I | Empfehlung wurde im Artikel nicht experimentell getestet. |
| ADAMS99-P7 | Individuelle Passwortkonten können Audit Trails ermöglichen, doch die meisten Befragten hatten diese Nachverfolgbarkeit nicht bedacht. | lokale PDF-S. 3 und 5 | Systembeschreibung plus Interviewbefund | O / I | Belegt keine konkrete Implementierung oder tatsächliche Auditnutzung. |

## Verhältnis zur Grundstruktur

Die Quelle stützt den Bereich Credentials als Beispiel dafür, dass ein scheinbar kleines Feld umfangreiche Erinnerungs-, Regel- und Organisationsarbeit voraussetzt. Sie ist besonders relevant für die Differenz zwischen sichtbarer Eingabe, verstandenem Zweck und operativer Kontozuordnung. Für Form, Maskierung und technische Verarbeitung des heutigen Passwortfelds reicht sie nicht aus.

## Grenzen und Gegenprüfung

Die Datenerhebung stammt aus den 1990er Jahren, behandelt zwei Organisationen und berichtet mehrere Fragebogenergebnisse ohne vollständig klaren Antwortnenner. Die Quelle dokumentiert kein konkretes Interface und keine aktuelle Authentifizierungsarchitektur. WHATWG 2026 kann die heutige normative Feldrolle ergänzen; aktuelle Security- und Passwortmanagerquellen wären erst beim Schreiben konkreter Gegenwartsaussagen nötig.

## Entscheidung

**Stützquelle.** Funktion: empirischer Beleg für Erinnerungs-, Regel- und Umgehungsarbeit bei Credentials sowie für die mögliche Differenz zwischen sichtbarer Passwortanforderung und operativer Authentifizierungs-/Auditrolle. Verbleibende Lücke: heutige Passwortoberflächen und technische Verarbeitung.
