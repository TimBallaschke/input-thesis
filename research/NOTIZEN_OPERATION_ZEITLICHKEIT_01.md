# Zeitlichkeit: Verarbeitung vor der Bestätigung

Stand: 15. September 2026. Wiederaufgenommene Arbeitsnotizen auf Tims Wunsch;
keine ausformulierte oder bereits ins Manuskript übernommene Passage.
Wiederaufnahme P-0154 / AI-049; Eingrenzung und bestätigte Platzierung
P-0155 / AI-050. Wiederaufnahme des früheren Punkts 6 der breiteren
Operation-1-Skizze (CDX-03, Zeilen 6096-6111), kein sechstes Hauptkapitel.

**Bestätigte Platzierung: kurzer Auftakt von Operation 2.** Die gesondert
bestätigte Struktur von Operation 1 bleibt unverändert. Tim bezog sich auf den
ursprünglichen kompakten Punkt 6, nicht auf die ausgeweitete fünfteilige
Gliederung. Nur die folgende kompakte Fassung ist die aktive Schreibvorlage.
Die frühere Ausarbeitung bleibt unten als Hintergrund erhalten. Eine mögliche
Ich-Passage ist nicht als Thesisprosa freigegeben.

**Leitfrage:** Was wird bereits verarbeitet, während ich noch formuliere und
bevor ich meine Eingabe bestätige?

**Kernaussage:** Die Bestätigung einer Eingabe muss nicht den Beginn ihrer
technischen Verarbeitung markieren; am untersuchten Beispiel kann bereits
eine erwartete Fortsetzung zum Anlass vorbereitender Verarbeitung werden.

## Aktive Fassung: Technische Verarbeitung beginnt nicht erst mit dem Absenden

- Bearbeitung, Übermittlung und Ausführung einer beabsichtigten Handlung unterscheiden.
- Bereits Änderungen eines Feldwerts können technische Ereignisse auslösen.
- Eine ausdrückliche Übermittlung ist deshalb ein bestimmter Verarbeitungsschritt, nicht der Beginn sämtlicher Operationen.
- Daraus nicht ableiten, dass jede Anwendung bereits beim Tippen Daten an einen Server sendet.
- Am jeweiligen Beispiel prüfen, welches Ereignis welchen Vorgang auslöst.
- Ergänzendes Suchbeispiel: In der Chrome-Suchleiste können Ergebnisse zu einer vorgeschlagenen Fortsetzung bereits vor deren Bestätigung vorgeladen werden. Vorbereitung und bestätigte Auswahl bleiben unterschiedliche Vorgänge.

**Kritische Frage:** Welche Verarbeitung habe ich bewusst ausgelöst - und
welche ist bereits Teil der Eingabesituation?

**Belegbasis:** Bereits ausgewertete WHATWG-Abschnitte zu Feldwerten,
Änderungsereignissen und Formularübermittlung; für den begrenzten
Such-Prefetch-Fall die Chromium-Dokumentation. Ein lokales Ereignis ist noch
kein Nachweis einer Serverübertragung. Das Omnibox-Beispiel belegt einen
bedingten Abruf, nicht das Verhalten aller Suchfelder. Keine neue Recherche.

**Innere Reihenfolge von Operation 2:** kurzer Auftakt zum Zeitpunkt, dann
Verarbeitungsverfahren, danach Maßstäbe und deren Urheber, anschließend
Anpassung von Inhaltsanbietern an Auswahlverfahren (SEO/GEO). Diese dritte
innere Bewegung ist mit P-0156 / AI-051 ergänzt; der kurze Zeitpunkt-Auftakt
bleibt unverändert.

## Frühere ausführliche Notizen: nur Hintergrund, keine weitere Untergliederung

### 1. Ausgangspunkt: Die zeitliche Grenze ist nicht selbstverständlich

- Formulieren, technische Verarbeitung und Bestätigen analytisch unterscheiden.
- Die Abfolge „erst schreiben, dann absenden, dann verarbeiten“ als zu prüfende Vorstellung behandeln, nicht als empirisch belegte Erwartung aller Nutzer:innen.
- Fragen, welche Vorgänge schon während der Eingabe stattfinden können.
- Jeweils benennen, welches Ereignis welchen Vorgang auslöst; nicht von jedem Tastendruck auf eine Serverübertragung schließen.

### 2. Konkreter Fall: Suchergebnisse vor der Bestätigung

- Hauptbeispiel ist die Such-/Adressleiste von Chrome, nicht pauschal jedes Google-Suchfeld.
- Im Chromium-Dokumentationsbeispiel steht erst `do` im Feld; der Suchanbieter liefert unter anderem den Vorschlag `Dog` und markiert ihn für das Vorladen.
- Der Browser kann bereits die Suchergebnisseite zu `Dog` abrufen, bevor dieser Vorschlag übernommen wird.
- Nicht nur ein Wortvorschlag wird erzeugt: Ergebnisse zu einer möglichen Fortsetzung werden vorbereitet.
- Aktueller Text, vorgeschlagene Fortsetzung, tatsächlicher Abruf und spätere Auswahl sind unterschiedliche Dinge.
- Die Dokumentation beschreibt Bedingungen und Ausschlussgründe; keine Behauptung über jede Nutzung und kein eigener Browserversuch.

Beleg: The Chromium Projects, *Omnibox Prefetch and Prerender for Default Search
Engines*, Abschnitte „How to recommend prefetches“ und „Things to note about
the implementation“, ausgewerteter Snapshot vom 15.09.2026.

### 3. Kritischer Punkt: Eine Prognose löst Vorarbeit aus

- Untersuchen, wie eine noch nicht bestätigte Möglichkeit technisch wirksam wird.
- Zuständigkeiten konkret benennen: Der Suchanbieter markiert einen Vorschlag; der Browser entscheidet unter seinen Implementierungsbedingungen über dessen Vorladen.
- Möglicher Nutzen: Inhalte stehen bei der späteren Auswahl früher bereit.
- Spannung: Die vorbereitete Möglichkeit muss nicht der später gewählten Handlung entsprechen.
- Fragen: Wer wählt die vorbereitete Fortsetzung? Was bleibt davon unsichtbar? Welche Vorarbeit bleibt ungenutzt, wenn ich anders weiterschreibe?
- Den dokumentierten Mechanismus nicht ohne weitere Belege zu einer Behauptung über Manipulation, Einwilligung, Datenschutzverstöße oder bestimmte Ressourcenmengen ausweiten.

### 4. Die Unterscheidung beibehalten: Vorbereitung ist nicht Bestätigung

- Vorladen von Ergebnissen bedeutet nicht, dass Nutzer:innen die betreffende Suchanfrage bereits gewählt haben.
- Abruf, Vorrendern, sichtbare Anzeige und autorisierte Handlung nicht gleichsetzen.
- Nicht behaupten, der Browser wisse die menschliche Absicht; vorbereitet wird eine ausgewählte Möglichkeit.
- Für dieses Hauptbeispiel genügt Prefetch; Prerender und Google Instant bleiben Reservevergleiche und müssen nicht zusätzlich ausgeführt werden.

### 5. Anschluss an die Dreiteilung

- Surface: Welche zeitliche Grenze oder Aktivität wird sichtbar?
- Interaction: Die Person formuliert, zögert, verändert und bestätigt ihre Eingabe.
- Operation: Währenddessen können bereits technische Anfragen und Vorbereitungen stattfinden.
- Daraus als eigene analytische Ableitung: Die drei Perspektiven sind keine strikt nacheinander ablaufenden Zeitphasen.
- Übergang: Vom Zeitpunkt der Verarbeitung zur Frage, nach welchen Verfahren und Maßstäben sie erfolgt; Ranking, SEO/GEO und Datennutzung hier noch nicht ausführen.

## Separate Autoren-Erinnerungsnotiz: Gmail

Tim möchte seine Erinnerung an ein Gmail-Beispiel behalten: Persönliche Mails
sollen bereits während der Passworteingabe im Hintergrund vorbereitet oder
abgerufen worden sein. Diese Erinnerung gab den Anlass zur Zeitpunkt-Recherche.

- Status: persönliche Erinnerung an ein Beispiel; dessen Quelle, genaue technische Variante und eigener Beobachtungsstatus sind bislang ungeklärt.
- Nicht als gesichertes Implementierungsdetail oder als dokumentierte eigene Beobachtung ausgeben.
- Eine schnelle Anzeige nach dem Login würde für sich genommen nicht belegen, dass persönliche Mails schon vor abgeschlossener Anmeldung abgerufen wurden.
- Als persönlich markierter Rechercheanlass oder optionale Randnotiz bewahren; nicht in die Belegkette des Chromium-Falls einsetzen.
- Falls später eine Ich-Passage gewünscht ist, muss ihre Formulierung dem tatsächlichen Erinnerungsstatus entsprechen. Keine Erinnerung, Wahrnehmung oder Gewissheit stellvertretend für den Autor erfinden.
- Das belegte Gmail-Prefetch von 2007 betrifft Nachrichten vor ihrem Öffnen innerhalb der Mailansicht und bestätigt nicht nachträglich die Passwortgeschichte.

## Schlanke Quellenzuordnung

| Verwendung | Beleg | Grenze |
| --- | --- | --- |
| Feldänderung, Ereignis und ausdrückliche Übermittlung unterscheiden | Bereits ausgewertete WHATWG-Abschnitte; ursprünglicher Punkt 6 in CDX-03, Zeilen 6096-6111 | Standardbeschreibung, kein Nachweis automatischer Serverübertragung jeder Anwendung |
| Hauptfall vor der Suchbestätigung | [Chromium-Dokumentation](https://www.chromium.org/developers/design-documents/omnibox-prefetch-for-default-search-engines/), zwei oben benannte Abschnitte | Bedingter Mechanismus und Dokumentationsbeispiel, keine Messung aller Browser |
| Bei Bedarf: Prefetch/Prerender abgrenzen | [Pollard: Prerender pages in Chrome](https://developer.chrome.com/docs/web-platform/prerender-pages), bereits ausgewertete Abschnitte zu Auslösern und Aktivierung | Nur unterstützende Begriffsklärung, kein zusätzlicher Exkurs nötig |
| Gmail-Erinnerung als Rechercheanlass | Tims eigene Chatäußerungen | Keine Quelle für die technische Tatsachenbehauptung |

**Quellen reichen für die begrenzte Ausarbeitung aus.** Die konkrete
Gmail-Passwortbehauptung bleibt unbelegt. Keine neue Recherche oder
Zotero-Aufnahme erforderlich, solange sie nicht zur Tatsachenbehauptung wird.
Quellenprüfung, weitere Vergleichsfälle und Snapshot-Provenienz stehen in der
[Rechercheübersicht](RECHERCHE_OPERATION_ZEITPUNKT_PREFETCH_01.md).
