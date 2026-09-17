# Operation – Primärquellen-Snapshots vom 15. September 2026

Roh-HTML wurde von den folgenden offiziellen Seiten abgerufen. Gleichnamige
TXT-Dateien wurden mit macOS `textutil` als Lesehilfe erzeugt; sie sind keine
zusätzlichen Quellen und können Navigationsreste, Unicode-Zeilentrenner und
Bildplatzhalter enthalten. Für Fassungsidentität und strittige Formulierungen
gilt der Roh-Snapshot. Keine Veröffentlichung oder Seitenpaginierung aus dem
Abrufdatum beziehungsweise aus der Textkonvertierung ableiten.

| Datei (.html, daneben .txt) | Abruf-URL | SHA-256 des HTML |
| --- | --- | --- |
| google-how-search-works | https://developers.google.com/search/docs/fundamentals/how-search-works | `7fdad75bd301a0471cf891e93010896d797a47578d105c34b10755cedf036bd6` |
| google-ranking-systems | https://developers.google.com/search/docs/appearance/ranking-systems-guide | `ba95562ca320c144d7b797f436516b3d1970aa317baa81a835afe0ed9dccf879` |
| google-rigorous-testing | https://www.google.com/search/howsearchworks/how-search-works/rigorous-testing/ | `5ec0db39ba784931b67f869d0fdaa9f040e4153112e9d214dcca376b2e2fa9cb` |
| openai-api-data-controls | https://developers.openai.com/api/docs/guides/your-data | `c1492ef1001a15465403385b6b9ffc9bd555ae8fb5c20ecf2e5f26a170601ee6` |
| openai-text-generation | https://developers.openai.com/api/docs/guides/text | `18f8589d4ee32b9a2d7766c74194c18db1694cf91108540dea198efeee97b0f5` |

Die drei Google-Artikeltexte wurden gelesen. Bei OpenAI wurden gezielt die
Abschnitte zu Output-Struktur, Rollen und Kontext sowie zu Datenzwecken,
Retentionskontrollen und Endpoint-Ausnahmen ausgewertet. Kein vollständiger
Read-through aller Codevarianten, verlinkter Guides oder Data-residency-Regeln.
Exakte Lesegrenzen und Claim-IDs stehen in den beiden Dokumentationsnotizen
unter `research/source-notes/`.

Der ursprüngliche Zugriff auf
`https://platform.openai.com/docs/models/default-usage-policies-by-endpoint`
leitete zur oben genannten Data-controls-Seite weiter. Der gespeicherte Inhalt
ist die neue Seite, keine historische Fassung des früheren Pfads.

Zusätzlich gesicherte Forschungs-PDFs liegen in `research/source-pdfs/`,
Layouttextextrakte eine Ebene oberhalb dieses Verzeichnisses:

| PDF | SHA-256 | Ausgewertet |
| --- | --- | --- |
| brin-page-1998-anatomy.pdf | `3a155ade395c7789876a0bc08a1842f909486438c1b1739ae531fa5c797d93f0` | vollständiger elfseitiger Artikel, nicht längere HTML-Fassung |
| radford-et-al-2019-gpt2.pdf | `d9d852e2894556e73f53cb22b7c605a9643d6f0b19bf604b429ed6192fa24f4e` | Haupttext PDF-S. 1–10 von 24 |
| ouyang-et-al-2022-instruction-following.pdf | `4ed5ef926ed5ad385d30ee4319f9b13650da29a3f015bc4e888bd669ee4670e5` | Hauptartikel PDF-S. 1–15; separates Supplement nicht gelesen |

Die gesicherten Anbietertexte sind Belege ihrer zum Abrufzeitpunkt erklärten
Verfahren und Regeln, keine unabhängige Prüfung deren Umsetzung.
