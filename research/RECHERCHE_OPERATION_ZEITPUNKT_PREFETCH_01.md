# Operation: Verarbeitung vor der Bestätigung

Stand: 15. September 2026. Recherche und vorläufige Einordnung, keine
übernommene Thesisprosa oder Änderung der bestätigten Gliederung.
Provenienz: P-0153 / AI-048 / CDX-03.

**Fortschreibung P-0154 / AI-049:** Tim hat die Wiederaufnahme der Zeitlichkeit
mit Suchergebnissen vor der Bestätigung als Hauptfall beauftragt. Die
[Arbeitsnotizen](NOTIZEN_OPERATION_ZEITLICHKEIT_01.md) führen dies weiter;
Operation 2 ist dort vorläufige Platzierung. Die nachfolgende Recherche bleibt
unverändert als vorheriger Befund erhalten. Die Gmail-Erinnerung wird auf
Autorenwunsch als persönlicher Rechercheanlass bewahrt, nicht als neuer Beleg.

**Aktueller Stand P-0155 / AI-050:** Tim hat den kurzen Auftakt in Operation 2
bestätigt. Die aktive Notiz ist auf den ursprünglichen Punkt 6 plus Suchbeispiel
gekürzt; die fünfteilige Erweiterung ist nur Hintergrund. Die frühere
Platzierungsunsicherheit ist damit geschlossen, die Gmail-Beleglücke nicht.

## Ergebnis

Die erinnerte Behauptung, Gmail lade persönliche Mails bereits während der
Passworteingabe, ist durch diese Recherche **nicht belastbar belegt**. Das ist
kein Nachweis, dass sie falsch ist. Belegt sind ein verwandtes historisches
Gmail-Verhalten und ein wesentlich passenderer Texteingabefall in Chromium.

Die relevante Unterscheidung lautet: Vorladen allgemeiner Anwendungsteile,
interne serverseitige Vorbereitung, Übertragung persönlicher Nachrichten und
erfolgreiche Authentifizierung sind nicht dasselbe. Aus einem Prefetch-Beleg
folgt kein Zugriff auf persönliche Daten vor der Anmeldung.

## Ausgewählte Quellen und Aussagegrenzen

### 1. Gmail: Nachrichten vor dem Öffnen vorladen

- Dan Pupius, Gmail engineer (29.10.2007): [Code changes to prepare Gmail for the future](https://gmail.googleblog.com/2007/10/code-changes-to-prepare-gmail-for.html).
- Gelesen: vollständiger Artikeltext einschließlich Nachtrag, nicht die Blognavigation.
- Fundstelle: Absatz beginnend mit „For instance“.
- Befund: Nachrichten der aktuellen Ansicht werden vorgeladen; beim anschließenden Öffnen kann der Browser sie unmittelbar anzeigen.
- Grenze: Vorbereitung vor dem Öffnen einer Nachricht innerhalb der Mailansicht, **nicht** belegtes Abrufen während der Passworteingabe. Historischer Anbieterbericht, keine aktuelle unabhängige Messung.

### 2. Chromium: Suchergebnisse zu einer vorgeschlagenen Eingabe vorladen

- The Chromium Projects (o. J., Abruf 15.09.2026): [Omnibox Prefetch and Prerender for Default Search Engines](https://www.chromium.org/developers/design-documents/omnibox-prefetch-for-default-search-engines/).
- Gelesen: vollständiges Dokument; besonders „How to recommend prefetches“ und „Things to note about the implementation“.
- Befund: Der Suchanbieter kann einen Vorschlag für das Vorladen markieren. Das Dokumentationsbeispiel verbindet die Eingabe `do` mit einem Prefetch der **Suchergebnisseite zu `Dog`**, nicht einer darin gelisteten Website.
- Grenze: bedingter Mechanismus mit Ausschlussgründen, kein eigener Browserversuch und keine Aussage über jede Chrome-Nutzung.
- Eignung: stärkster Hauptbeleg, weil eine noch nicht übernommene Formulierung bereits zum Anlass einer technischen Anfrage wird.

### 3. Chrome: Vorladen und Vorrendern unterscheiden

- Barry Pollard (02.12.2022; aktualisiert 23.01.2026): [Prerender pages in Chrome for instant page navigations](https://developer.chrome.com/docs/web-platform/prerender-pages).
- Gelesen: ausgewählte Abschnitte zu Auslösern, Aktivierung, Einstellungen, Einschränkungen, JavaScript/Analytics und Ressourcen; keine vollständige Evaluation aller Codebeispiele und verlinkten Spezifikationen.
- Befund: Während der Adressleisten-Eingabe kann eine wahrscheinliche Zielseite vorbereitet werden. Prefetch beschafft Inhalte; Prerender bereitet zusätzlich eine Seite im Hintergrund vor. Einstellungen und Ressourcen begrenzen das Verhalten, bestimmte Seiteneffekte bleiben bis zur Aktivierung zurückgestellt.
- Grenze: Vorbereitung nicht mit uneingeschränkter Ausführung oder einer bestätigten Nutzerentscheidung gleichsetzen.

Ergänzende Produktangabe: Barry Pollard / Oleksiy Busaryev (12.02.2025),
[How Google Search uses speculation rules](https://developer.chrome.com/blog/search-speculation-rules),
vollständiger Artikel gelesen. Abschnitt „Further use of speculation rules“
beschreibt die Einführung des Vorrenderns von Suchergebnisseiten beim Tippen.
Der Artikel behandelt außerdem Prefetch von Zielseiten vor einem Ergebnisklick;
dies ist ein anderer Zeitpunkt und nicht mit Eingabe vor dem Suchabschluss zu
vermischen. Anbieterbericht, keine unabhängige Wirkungsevaluation.

### 4. Google Instant: Ergebnisse während der Formulierung sichtbar machen

- Marissa Mayer (08.09.2010): [Search: now faster than the speed of type](https://googleblog.blogspot.com/2010/09/search-now-faster-than-speed-of-type.html).
- Gelesen: vollständiger Artikeltext, nicht Blognavigation.
- Befund: Google Instant aktualisierte während des Tippens bereits Suchergebnisse anhand einer prognostizierten Vervollständigung, nicht nur Wortvorschläge.
- Grenze: historisches Produktbeispiel; keine Aussage über identisches Verhalten der heutigen Google-Oberfläche. Anders als verborgenes Vorladen machte es die fortlaufende Verarbeitung unmittelbar sichtbar.

### 5. Gegenprüfung der konkreten Login-Erinnerung

Wiltse Carpenter (13.05.2008):
[A need for speed: the path to a faster loading sequence](https://gmail.googleblog.com/2008/05/need-for-speed-path-to-faster-loading.html),
vollständiger Artikeltext gelesen. Die dort untersuchte Ladefolge beginnt
ausdrücklich mit dem Betätigen von Sign in. Der Text behandelt
Ladeoptimierungen, belegt aber nicht den erinnerten Passwort-Zeitpunkt.

## Rechercheweg und Quellenkritik

Gesucht wurden englische und deutsche Kombinationen aus Gmail/Google,
password typing/login/authentication, prefetch/preload/predictive loading
sowie dokumentierte Alternativen zu Suchanfragen vor Enter. Anschließend
wurden die offiziellen Gmail-/Google-Blogs und Chromium-/Chrome-Dokumente
geprüft. Unbelegte Wiederholungen auf Drittseiten wurden nicht als Bestätigung
gewertet. Zusätzliche historische Texte zu Google Instant und Gmail-iOS-
Hintergrundaktualisierung dienten der Orientierung; für den empfohlenen
Hauptfall sind sie nicht erforderlich. Keine Behauptung einer erschöpfenden
Suche in unveröffentlichten Implementierungsunterlagen.

## Argumentative Verwendung: eigene Ableitung, nicht Quellenzitat

- Ein Bestätigungsakt muss nicht den Beginn sämtlicher Verarbeitung markieren.
- Zu unterscheiden sind aktueller Text, prognostizierte Fortsetzung, dadurch ausgelöste Vorbereitung und später tatsächlich gewählte Handlung.
- Nicht pauschal „das System“: Im Omnibox-Beispiel markiert der Suchanbieter einen Vorschlag; der Browser setzt das Vorladen unter seinen Bedingungen um.
- Kritische Spannung: weniger Wartezeit durch Vorarbeit, aber keine notwendige Übereinstimmung zwischen erwarteter und später gewählter Handlung.
- Offene Fragen: Was wird bereits verarbeitet, solange ich noch formuliere? Wer wählt die vorbereitete Möglichkeit? Welche Vorarbeit war unnötig, wenn ich mich anders entscheide? Welche davon wird sichtbar?
- Daraus folgen ohne weitere Belege weder Manipulationsabsicht noch eine bestimmte Energiemenge, ein Datenschutzverstoß oder eine abgeschlossene Autorisierung.

**Platzierungsvorschlag zum Rechercheabschluss P-0153:** kurzer Einstieg „Wann beginnt
Verarbeitung?“ in Operation 2. Operation 1 kann bei Rolle, Zuordnung und
Zusammensetzung bleiben. Das Beispiel zeigt zugleich, warum Interaction und
Operation analytische Perspektiven und keine strikt aufeinanderfolgenden
Zeitphasen sind. Das Hauptbeispiel genügt; Gmail und Instant sind mögliche
Vergleiche, kein Bedarf für drei ausführliche Exkurse.

**Quellenstatus:** Für den eng gefassten Omnibox-Mechanismus reichen die
Primärbelege aus. Die spezifische Gmail-Passwortbehauptung bleibt offen und
sollte vorerst nicht als Tatsache in den Text eingehen. Keine Zotero-Importe,
neuen Bibliographieeinträge oder Änderungen der bisherigen Korpuszählung.
Die sechs Roh-HTML-Snapshots und ihre Hashes liegen im unten verlinkten
Verzeichnis; sie sind keine vollständigen Offline-Websites.

[Snapshot-Provenienz](source-texts/prefetch-2026-09-15/README.md)
