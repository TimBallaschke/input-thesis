# Operation 1 - autorbestätigte Abschnittsstruktur

## Status

- Am 15. September 2026 von Tim als gewünschte Arbeitsstruktur übermittelt
  und bestätigt. Diese Fassung ersetzt die vorherigen Chatvorschläge und die
  breitere Abschnitt-1-Skizze für die kommende Ausarbeitung.
- Der folgende Strukturtext ist inhaltlich und sprachlich unverändert aus
  Tims Nachricht übernommen; nur HTML-Leerzeichen und Markdown-Abstände sind
  bereinigt. Die vier nummerierten Punkte sind Bewegungen dieses Abschnitts,
  keine Änderung der vier Hauptabschnitte von Operation.
- Formular und Promptfeld sind die beiden ausgewählten Beispiele. Command
  Line und Suche bleiben in der Gesamtarbeit erhalten, werden hier aber nicht
  erneut ausführlich behandelt.
- Quellenangaben sind als vorhandene Belegbasis übernommen, nicht in dieser
  Sicherung erneut geprüft. Das API-Kontextbeispiel bleibt auf die dokumentierte
  API begrenzt; über den separaten Datenverwendungsfall in Operation 3 wird
  hier nicht entschieden.
- Noch kein ausformulierter oder abschließend beleggeprüfter Kapiteltext.
  Keine Manuskriptänderung und keine neue Recherche. P-0152 / AI-047 halten
  die vorausgehende Diskussion und diese strukturelle Festlegung fest.
- Übergeordnete Gliederung: [Operation](GLIEDERUNG_OPERATION_01.md).

---

## Technische Rolle und Kontext der Eingabe

**Leitfrage:** Was wird technisch eigentlich als Eingabe verarbeitet – und wodurch erhält der selbst formulierte Text dabei seine jeweilige Rolle?

**Kernaussage:** Der sichtbare Text bildet den Ausgangspunkt einer Eingabe, legt aber weder allein seine technische Rolle noch unbedingt ihre vollständige Zusammensetzung fest. Anwendungen ordnen ihn in technische Strukturen ein und können ihn mit weiteren Bestandteilen in einen größeren Verarbeitungskontext stellen.

### 1. Ausgangspunkt: Vom formulierten Text zur technischen Eingabe

- An **Interaction** anschließen: Ein Text wurde formuliert, bearbeitet oder reformuliert.
- Mit **Operation** verschiebt sich die Perspektive: Nicht mehr die Herstellung des Textes, sondern der technische Zusammenhang seiner weiteren Verarbeitung steht im Mittelpunkt.
- Ausgangspunkt bleibt der Text, den Nutzer:innen im Eingabefeld sehen und bearbeiten.
- Diesen sichtbaren Text analytisch von der **technisch wirksamen Eingabe** unterscheiden.
- Der sichtbare Text allein bestimmt noch nicht, welche technische Rolle er erhält.
- Ebenso muss die technische Eingabe nicht auf genau diesen sichtbaren Text begrenzt sein.
- Damit entstehen zwei Fragen:
  - **Wie wird der Text technisch zugeordnet?**
  - **Welche weiteren Bestandteile können neben ihm Teil der Eingabe werden?**

**Offene Frage:** Wo verläuft die Grenze zwischen dem Text, den ich selbst verfasse, und der Eingabe, die technisch tatsächlich verarbeitet wird?

### 2. Zwei Formen technischer Einbettung: Zuordnung und Ergänzung

#### Formular – ein eingegebener Wert wird zugeordnet

- Bei einer regulären HTML-Formularübermittlung wird ein eingegebener Wert mit einem technischen Feldnamen verbunden.
- Nutzer:innen bestimmen den Wert; die Struktur des Formulars bestimmt, **welchem Feld dieser Wert zugeordnet ist**.
- Die technisch wirksame Eingabe besteht damit nicht nur aus der Zeichenfolge selbst, sondern auch aus ihrer Position innerhalb einer vorgegebenen Struktur.
- Sichtbare Beschriftung und technische Zuordnung sind dabei analytisch voneinander zu unterscheiden.
- Nur diese strukturelle Zuordnung erklären; noch keine Fragen nach Validierung, Speicherung oder späterer Datennutzung.

**Belegbasis:** WHATWG 2026, insbesondere Abschnitt 4.10.22.4.

#### Promptfeld – der selbst formulierte Text kann Teil eines größeren Kontexts sein

- Die aktuelle Nutzerformulierung kann gemeinsam mit weiteren Informationen verarbeitet werden.
- Dazu können beispielsweise frühere Gesprächsteile oder zusätzliche, von der Anwendung bereitgestellte Anweisungen gehören.
- Der sichtbare Prompt ist dann ein Bestandteil eines größeren technischen Kontexts.
- Unterscheiden zwischen:
  - dem Text, den Nutzer:innen selbst verfassen,
  - zusätzlichen Bestandteilen,
  - und der technischen Zusammenstellung dieser Bestandteile.
- Die OpenAI-API-Dokumentation kann hierfür als **begrenztes technisches Beispiel** dienen, nicht als allgemeine Beschreibung jedes Promptfeldes.
- Anweisungsprioritäten, Generierungsmechanismen und trainierte Verhaltensweisen noch ausklammern.

**Belegbasis:** OpenAI, *Text generation*, dokumentierte Nachrichtenrollen und Gesprächskontext, Snapshot 15. September 2026.

### 3. Gemeinsamer Punkt: Die Formulierung legt die Eingabe nicht vollständig fest

- Formular und Prompt zeigen zwei unterschiedliche Formen technischer Einbettung:
  - Beim Formular wird der selbst geschriebene Text **einer Struktur zugeordnet**.
  - Beim Prompt kann er **in einen größeren Kontext eingebettet** werden.
- Nutzer:innen bestimmen ihre Formulierung, aber nicht notwendigerweise die gesamte technische Konstellation, in der sie verarbeitet wird.
- Diese Konstellation entsteht auch durch Standards, Implementierungen und Anwendungskonfigurationen.
- Dabei nicht pauschal „dem System“ Handlungsmacht zuschreiben, sondern unterschiedliche Ebenen auseinanderhalten.
- Nicht jede dieser Bedingungen ist im sichtbaren Eingabefeld erkennbar.
- Daraus jedoch noch keine Absicht der Verschleierung oder bestimmte Wirkung ableiten.

### 4. Zuspitzung und Übergang

- Das Eingabefeld zeigt einen klar begrenzten Text; technisch kann die relevante Eingabe jedoch über diese sichtbare Grenze hinausreichen.
- **Den Text zu verfassen bedeutet deshalb nicht, die gesamte technische Eingabe festzulegen.**
- Damit ist zunächst nur geklärt, **was in welchem Zusammenhang als Eingabe vorliegt**.
- Erst anschließend folgt die Frage, **wie diese Eingabe verarbeitet wird und nach welchen Regeln daraus eine Handlung oder Ausgabe entsteht**.

**Nicht hier behandeln:** ausführliche Command-Line- und Suchbeispiele, Verarbeitung während des Tippens, Ranking, SEO/GEO, Sycophancy, Speicherung und Datenweiterverwendung.
