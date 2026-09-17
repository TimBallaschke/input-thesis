# Interaction – Erforderliche Kenntnisse und Kompetenzen

## Kernaussage

Texteingabe setzt je nach Interface unterschiedliche Formen von Wissen und kognitiver Arbeit voraus: Explizite Syntax, freie Formulierung und vorstrukturierte Felder beseitigen diese Arbeit nicht, sondern verschieben sie.

## Mini-Gliederung

1. **Befehl und Syntax:** Command-Namen, Operanden und ihre Anordnung müssen bekannt sein; Routine kann diese erlernte Konvention selbstverständlich erscheinen lassen.
2. **Freie Texteingabe:** Such- und Promptfelder verzichten auf eine vollständig sichtbare Syntax, verlangen aber die Übersetzung einer Intention in eine bearbeitbare Anfrage.
3. **Iteration:** Bei Suche und besonders beim Prompting entsteht ein Teil des benötigten Wissens erst durch Ergebnisse, Ausgaben und Reformulierung.
4. **Formular als Kontrast:** Beschriftete Felder können erwartete Inhalte und Formate teilweise sichtbar machen; die Arbeit verlagert sich auf das Bereitstellen der verlangten Daten.
5. **Vergleich:** Unterschiedliche Interfaces reduzieren Wissensarbeit nicht einfach, sondern verteilen sie zwischen Regelwissen, Formulierung, Systemeinschätzung und Informationsbereitstellung.

## Quellenübersicht

| Unterpunkt | Quelle und Passage | Benötigte Aussage | Grenze |
| --- | --- | --- | --- |
| Konkrete Befehlssyntax | [IEEE/The Open Group 2024](source-notes/ieee-open-group-2024-posix-mkdir.md), NAME, SYNOPSIS, DESCRIPTION und OPERANDS; POSIX24-P1–P4 | `mkdir entwurf` konkretisiert Utility-Name und Verzeichnisoperand innerhalb der normativen Syntax. | `entwurf` ist ein Projektbeispiel; keine Shell-, Surface- oder Nutzerstudie |
| Lernen von Befehlen | [Black/Moran 1982](source-notes/black-moran-1982-command-names.md), S. 8–10; BM82-P3–P5; [Shneiderman 1983](source-notes/shneiderman-1983-direct-manipulation.md), S. 64–66; SHN83-P4–P7 | Befehlsnamen und erinnerte Syntax sind erlernte Konventionen; Vertrautheit macht sie nicht voraussetzungslos. | papierbasierte Lernaufgabe plus historische konzeptionelle Synthese |
| Frei formulierte Eingabe | [Shneiderman 1980](source-notes/shneiderman-1980-natural-vs-precise.md), S. 139–141; S80-P2–P4 | Natürliche Sprache reduziert sichtbare Syntax, kann aber Mehrdeutigkeit und Erwartungen an Systemfähigkeiten erzeugen. | historischer Positions- und Methodenbeitrag |
| Intention als Suchanfrage | [Hearst 2009](source-notes/hearst-2009-search-user-interfaces-preview.md), Buch-S. 1–3; HEARST-P1, P3–P4 | Ein Informationsbedarf muss in eine Query übersetzt und über Ergebnisse sowie Reformulierungen schrittweise präzisiert werden. | begrenzter Buchauszug und Sekundärsynthese |
| Intention als Prompt | [Subramonyam et al. 2024](source-notes/subramonyam-et-al-2024-gulf-of-envisioning.md), PDF-S. 2–3 und 6–8; SUB24-P2–P5; [Zamfirescu-Pereira et al. 2023](source-notes/zamfirescu-pereira-et-al-2023-why-johnny-cant-prompt.md), PDF-S. 9–13; ZP23-P3–P7 | Prompting verlangt Annahmen über Fähigkeiten, Instruktionswirkung, Kontext und gewünschte Ausgabe; ein Teil dieses Wissens entsteht durch Prüfen und Reformulieren. | theoretisches Modell plus kleine, auf BotDesigner begrenzte Studie |
| Formulare und verlangte Daten | [Cui et al. 2025](source-notes/cui-et-al-2025-privacy-norms-web-forms.md), S. 9 und 12–14; CUI25-P3, P6–P7; [Seckler et al. 2014](source-notes/seckler-et-al-2014-usable-web-forms.md), S. 1276–1282; SE14-P2–P7 | Beschriftete Felder und Formatvorgaben können Erwartungen teilweise externalisieren; verschiedene Formulartypen verlangen unterschiedliche Datenarten. | Cui beobachtet keine Nutzung; Seckler testet Redesignbündel; konkrete Abrufwege sind Projektsynthese |

## Entscheidung

Die vorhandenen Quellen und die gezielt ergänzte POSIX-Spezifikation reichen für den autorbestätigten kurzen Vergleich aus. Offen bleibt ein kontrollierter Direktvergleich von Command, Suche, Prompt und Formular bei derselben Aufgabe; keine Eingabeform darf pauschal als leichter bezeichnet werden. Die Hinweise auf Gedächtnis, Unterlagen und andere Systeme sind als Projektsynthese aus der Bereitstellung verlangter Formulardaten markiert, nicht als direkt beobachteter Befund.

## Kritische Ergänzung vom 14. September 2026

Die obige Entscheidung bezieht sich auf den bisherigen beschreibenden Arbeitsabschnitt. Für die nun gewünschte kritische Erweiterung wurden genau zwei neue Quellen ausgewertet und einschließlich PDF nach Zotero importiert. Der bestätigte Rumpftext bleibt unverändert.

**Vorgeschlagene zusätzliche Leitfrage:** Wie entstehen die verlangten Kenntnisse, und welche Unterschiede bestehen darin, sie wirksam einzusetzen?

| Anschluss an die Mini-Gliederung | Quelle und Fundstelle | Benötigte Aussage | Grenze |
| --- | --- | --- | --- |
| Nach Befehl und Syntax | [Ritchie 1984](source-notes/ritchie-1984-evolution-unix.md), PDF-S. 7-9, RI84-P2-P4 | Konkrete Unix-Konventionen können als historisch entstandene Entscheidungen untersucht werden. | Beteiligtenbericht; organisatorische Erklärung ausdrücklich Vermutung; keine empirische Sprachbarriere. |
| Nach Suchanfrage und Formulierung | [Hargittai 2002](source-notes/hargittai-2002-second-level-digital-divide.md), PDF-S. 3-5, 7-10 und 16-17, H02-P1-P3, P5 | Technischen Zugang von beobachteter erfolgreicher Informationssuche unterscheiden. | 54 Personen, Erhebung 2001; keine heutige algorithmische Kompetenz oder isolierte Suchfeldwirkung. |

**Eigene offene Fragen für Interaction:** Wessen Gewohnheiten muss ich lernen? Welche Kenntnisse setzt das Feld voraus, und welche Unterstützung gibt es dafür? Die technische Ausführung beziehungsweise das Ranking kann Operation untersuchen; diese Anschlussfragen sind keine vorweggenommenen Beweise eines Ausschlussmechanismus.

**Quellen reichen für diese begrenzte Erweiterung aus.** Nicht geschlossen sind die sprachpolitische Frage nach englischen Befehlen, heutige Verteilungen algorithmischer Kompetenz und ein kontrollierter Vergleich aller vier Eingabesituationen. Diese Themen nicht als beantwortet darstellen und nicht automatisch zum Anlass für weitere Literatur machen.
