# Ouyang et al. 2022 – Instruktionsbefolgung und gesetzte Verhaltensmaßstäbe

## Status und Zugriff

- Long Ouyang, Jeffrey Wu, Xu Jiang, Diogo Almeida, Carroll Wainwright, Pamela Mishkin, Chong Zhang, Sandhini Agarwal, Katarina Slama, Alex Ray, John Schulman, Jacob Hilton, Fraser Kelton, Luke Miller, Maddie Simens, Amanda Askell, Peter Welinder, Paul F. Christiano, Jan Leike und Ryan Lowe: *Training language models to follow instructions with human feedback*. Advances in Neural Information Processing Systems 35, 2022, S. 27730–27744. DOI: [10.52202/068431-2011](https://doi.org/10.52202/068431-2011). Die zuvor in dieser Notiz vertauschten Vornamen von Kelton und Miller wurden beim Import gegen den PDF-Kopf korrigiert; der vorbereitete BibTeX-Datensatz war bereits richtig.
- [Offizieller Konferenznachweis](https://proceedings.neurips.cc/paper/2022/hash/b1efde53be364a73914f58805a001731-Abstract-Conference.html); Metadaten einschließlich DOI, Seiten und Autorenliste gegen den dortigen BibTeX-Datensatz geprüft.
- [Offizielles PDF](https://papers.neurips.cc/paper_files/paper/2022/file/b1efde53be364a73914f58805a001731-Paper-Conference.pdf); lokal `research/source-pdfs/ouyang-et-al-2022-instruction-following.pdf`; Layouttext in `research/source-texts/`.
- Am 15. September 2026 alle 15 Seiten des Hauptartikels gelesen; **separates Supplement nicht gelesen**. Abb. 1–5 und zugehörige Ergebnis-/Diskussionsseiten auf PDF-S. 2, 4, 7–9 visuell geprüft. Nachstehend die interne Paginierung 1–15, nicht die Bandseiten.
- SHA-256: `4ed5ef926ed5ad385d30ee4319f9b13650da29a3f015bc4e888bd669ee4670e5`.
- Citation Key: `ouyangEtAl2022Instructions`; Zotero `MAJMMF8N`, PDF `9TKL6CHJ`, Sammlung `06 LLM and Agentic Interfaces`. Import, Bibliografieexport und byteidentischer Anhang am 15. September 2026 geprüft.

## Gegenstand, Methode und Evidenzart

Die Entwickler untersuchen InstructGPT auf Basis damaliger GPT-3-Modelle. Demonstrationen, menschlich gerankte Antworten, ein gelerntes Reward-Modell und weitere Optimierung werden mit menschlichen Bewertungen und gesonderten Benchmarks geprüft. Trainingsverfahren, Bewertungsdefinitionen und Ergebnisse sind getrennt zu behandeln. Die Studie ist keine unabhängige Prüfung heutiger ChatGPT-Produkte.

## Surface und Interaction

Keine direkte Untersuchung eines öffentlichen Chat-Promptfelds. Menschliche Arbeit ist dagegen im Herstellungs- und Bewertungsprozess dokumentiert: Demonstrationen schreiben, Antworten vergleichen und Kriterien anwenden. Nicht mit der Interaktion späterer Endnutzer:innen gleichsetzen.

## Operation und Übergänge

Aus gewählten menschlichen Bewertungen werden Trainingssignale. Damit kann die Ausgabe nicht allein über das Basistraining zur Textfortsetzung erklärt werden. **Das ist ein vorgelagertes Training, kein menschlicher Rankingdurchlauf bei jeder späteren Anfrage.**

## Direkt gestützte Aussagen

| ID | Aussage in eigenen Worten | Belegstelle | Evidenzart | Ebene | Einschränkung |
| --- | --- | --- | --- | --- | --- |
| OUY22-P1 | Das Verfahren verbindet Demonstrationen/Supervised Fine-Tuning, Antwortvergleiche/Reward-Modell und PPO-Optimierung. | S. 2, 4–6, Abb. 2, §3.1–3.4 | Trainingsbeschreibung | O | Historisches InstructGPT; nicht die vollständige Inferenz heutiger Produkte. |
| OUY22-P2 | Die Autoren begrenzen die Ausrichtung ausdrücklich auf ihre ausgewählten Labeler und Forschenden statt universelle menschliche Werte. | S. 2; S. 9–10, §5.2–5.3 | institutionelle Selbstbeschreibung / Einschränkung | O | Kein Beleg dafür, dass jede Einzelentscheidung absichtlich politisch lenkt. |
| OUY22-P3 | Rund 40 über Upwork und Scale AI rekrutierte Auftragnehmende wurden ausgewählt; über 96 Prozent der erfassten Eingaben waren englisch. | S. 5, §3.2–3.3 | Stichproben-/Datensatzbeschreibung | O | Nicht die heutige Belegschaft oder heutige Sprachverteilung. |
| OUY22-P4 | Menschliche Präferenz und faktische Richtigkeit wurden über unterschiedliche Evaluationsverfahren untersucht. | S. 6–8, §3.4, §4.1–4.2 | Messdefinitionen / Befunde | O | Präferenz ist kein Wahrheitsnachweis; Wahrheit wird dennoch ausdrücklich geprüft. |
| OUY22-P5 | Bei TruthfulQA verbesserten mehrere trainierte Varianten den Anteil zugleich wahrer und informativer Antworten; Fehler blieben bestehen. | S. 8, §4.2, Abb. 5 | Benchmarkbefund | O | Kleine signifikante Verbesserungen mit Ausnahme von 1.3B PPO-ptx; keine generelle Wahrheitsgarantie. |
| OUY22-P6 | Die Labeler repräsentieren nicht alle von den Modellen betroffenen Menschen; kulturelle und soziale Hintergründe können Werturteile beeinflussen. | S. 9, §5.2 | methodische Selbstkritik | O | Möglicher Einfluss, keine vollständige Messung seiner gesellschaftlichen Verteilung. |

## Verhältnis zur Grundstruktur und Gegenprüfung

Operation 2: Wer legt die Maßstäbe einer „guten“ Antwort fest? Operation 1: menschliche Eingabe trifft auf bereits trainierte Verhaltensbedingungen. Operation 4: überzeugende Ausgabe und verlässliche sachliche Auskunft unterscheiden.

**Projektsynthese:** Urteile einzelner ausgewählter Menschen werden technisch vervielfältigt. Zu fragen ist, wessen Kriterien dafür institutionell wirksam werden. Die Studie trägt **nicht** die pauschale These „auf Gefallen statt Wahrheit ausgelegt“: Sie zeigt sowohl begrenzte Verbesserungen der Wahrhaftigkeit als auch Probleme der Repräsentation und fortbestehende Fehler. Auch die Erklärung für stärkeres sprachliches Absichern auf S. 9 bleibt eine Autorenhypothese.

Supplementdetails, vollständige Reproduzierbarkeit und aktuelle Produkte bleiben ungeprüft. Für gegenwärtige API-Rollen nur die gesonderte datierte Dokumentation verwenden.

## Entscheidung

**Kernquelle.** Verbindet ein nachvollziehbares Trainingsverfahren mit expliziten Fragen nach den Personen, Institutionen und Bewertungsmaßstäben hinter dem Modellverhalten.
