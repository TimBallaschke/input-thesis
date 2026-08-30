# Oulasvirta et al. 2013 - Improving Two-Thumb Text Entry

## Status und Zugriff

- Bibliografie: Antti Oulasvirta, Anna Reichel, Wenbin Li, Yan Zhang, Myroslav Bachynskyi, Keith Vertanen und Per Ola Kristensson, „Improving Two-Thumb Text Entry on Touchscreen Devices“, in *Proceedings of the SIGCHI Conference on Human Factors in Computing Systems* (ACM, 2013), S. 2765–2774. DOI: `10.1145/2470654.2481383`.
- Citation Key: `oulasvirtaImprovingTwoThumb2013`
- Quellentyp: mehrstufige HCI-Studie mit kontrollierten Tapping-Experimenten, Bewegungsmodell, Layoutoptimierung, Fehlerkorrektur und longitudinalem Training
- Gelesene Fassung: `research/source-pdfs/oulasvirta-et-al-2013-improving-two-thumb-text-entry.pdf`
- Zugriffstiefe: vollständiger zehnseitiger Artikel einschließlich Abbildungen, Tabellen und Literaturverzeichnis; alle PDF-Seiten visuell geprüft
- Gelesene Seiten: Druckseiten 2765–2774
- Noch erforderlich: Für heutige Smartphones, alltägliche freie Texteingabe, andere Geräteformate, Linkshändigkeit und übliche QWERTY-Nutzung sind gegebenenfalls neuere oder anders angelegte Studien nötig.

## Gegenstand, Methode und Evidenzart

Die Arbeit entwickelt KALQ, eine geteilte Bildschirmtastatur für die beidhändige Eingabe englischer Texte auf Tablets. Der Entwurf verbindet fünf Schritte: eine Griffstudie mit sechs rechtshändigen männlichen Studierenden, ein beidhändiges Tapping-Experiment mit zwanzig rechtshändigen männlichen Studierenden, die rechnerische Prüfung von 5,6 Millionen Buchstabenbelegungen, eine kontext- und bewegungsbasierte Fehlerkorrektur sowie ein Training von sechs rechtshändigen Studierenden über 13 bis 19 Stunden. Die Studien verwenden 7- beziehungsweise 7,7-Zoll-Samsung-Tablets. Die Evidenz reicht damit von kontrollierten motorischen Messungen über Modellierung bis zu einer kleinen longitudinalen Leistungsstudie; sie bildet keine gewöhnliche untrainierte Alltagsnutzung ab.

## Surface

KALQ besteht im Querformat aus zwei getrennten 4-mal-4-Tastenfeldern an den seitlichen Rändern des Tablets. Die 9,9 Millimeter breiten Tasten liegen in den durch den Daumenschwenk ermittelten aktiven Bereichen; Buchstaben und Leertasten sind so verteilt, dass die Arbeit beider Daumen nahezu ausgeglichen wird und häufige Wechsel zwischen den Seiten möglich sind. Die sichtbare Tastaturanordnung ist damit nicht bloße Darstellung, sondern Ergebnis anatomischer Messung und rechnerischer Optimierung. Die Quelle untersucht jedoch keine Textfeldform, Labels oder Bedeutung des eingegebenen Textes.

## Interaction

Im Zentrum stehen Griff, Reichweite, dominante und nicht dominante Hand, gleichseitige und alternierende Taps sowie visuelle Aufmerksamkeit. Bei der beobachteten „Hover-over“-Technik bewegt sich der gerade untätige Daumen bereits zum nächsten Ziel und wartet dort auf seinen Einsatz. Lange Wartezeiten können die Erinnerung an seine Position unterbrechen und einen kontrollierenden Blick erforderlich machen. Das Erlernen von KALQ verlangt ein intensives Training von durchschnittlich 16,8 Stunden, das Griff, Tastenpositionen, Leertasten, Daumenkoordination, häufige Bigramme und Wörter einübt. Die sechs Trainierten verbesserten sich von 27,7 Wörtern pro Minute bei 9,0 Prozent Zeichenfehlerrate auf QWERTY auf 37,1 Wörter pro Minute bei 5,2 Prozent Zeichenfehlerrate mit KALQ.

## Operation

Die rechnerische Layoutoptimierung übersetzt Bewegungsmodelle und ein Korpus englischer mobiler E-Mails in eine feste Buchstabenverteilung. Die Fehlerkorrektur kombiniert für jeden Touchpunkt die geschätzte Wahrscheinlichkeit einer gemeinten Taste mit einem zeichenbasierten Sprachmodell. Die online eingesetzte Version verbesserte die Fehlerrate der Trainierten nicht; mit nachträglich angepassten Parametern sank die Zeichenfehlerrate in Offlineanalysen um 1,3 Prozentpunkte. Die Quelle dokumentiert damit, dass ein sichtbarer Tastendruck nicht unmittelbar einem Zeichen entsprechen muss, sondern probabilistisch aus Touchposition und sprachlichem Kontext rekonstruiert werden kann.

## Übergänge

- **Surface -> Interaction:** Größe, Position und Teilung der Tasten bestimmen Griff, Daumenwege, Sichtverdeckung und die Möglichkeit, Bewegungen beider Hände zu koordinieren.
- **Interaction -> Operation:** Ein Touchpunkt wird mit Bewegungs- und Sprachwahrscheinlichkeiten verbunden und kann durch die Fehlerkorrektur einem anderen Zeichen als der geometrisch nächstliegenden Taste zugeordnet werden.
- **Surface -> Operation:** Die sichtbare Buchstabenverteilung ist Ergebnis einer Optimierung auf englische Zeichenfolgen und angenommene motorische Kosten; diese Grundlage ist auf der Tastatur selbst nicht erkennbar.

## Direkt gestützte Aussagen

| ID | Aussage in eigenen Worten | Belegstelle | Evidenzart | Ebene | Einschränkung |
| --- | --- | --- | --- | --- | --- |
| OUL13-P1 | Der KALQ-Entwurf verbindet Griffstudie, Bewegungsmodell, rechnerische Layoutoptimierung, Fehlerkorrektur sowie Training und Evaluation. | S. 2765–2766 | dokumentierter Forschungsaufbau | S / I / O | Mehrere Teilstudien mit unterschiedlichen Stichproben. |
| OUL13-P2 | In der Griffstudie mit sechs rechtshändigen männlichen Studierenden beeinflusste der Griff Bewegungszeit und Treffpunktabweichung signifikant; der ausgewählte Griff war am schnellsten. | S. 2767; Abb. 2–3 | kontrolliertes Tapping-Experiment | I | Kleine, homogene Stichprobe und 7-Zoll-Tablet. |
| OUL13-P3 | Das N-Return-Experiment mit zwanzig rechtshändigen männlichen Studierenden unterscheidet gleichseitige und wechselnde Taps und dokumentiert die Hover-over-Strategie des wartenden Daumens. | S. 2768–2769; Abb. 4–6 | kontrolliertes Tapping-Experiment/Modellierung | I | Optimierte Laboraufgabe mit Zahlentasten, nicht freies Schreiben. |
| OUL13-P4 | Die rechnerische Optimierung prüfte 5,6 Millionen Belegungen; KALQ wurde auf kurze Wege, häufige Seitenwechsel und eine annähernd gleiche Arbeitsverteilung ausgelegt. | S. 2770–2771; Abb. 7–8 | rechnerische Optimierung | S / I | Optimierungsziel basiert auf repräsentativ angenommenen englischen Sätzen und Modellparametern. |
| OUL13-P5 | Sechs rechtshändige Studierende trainierten KALQ in 13 bis 19 einstündigen Sitzungen; getestet wurden getrennte Trainings- und Testsätze. | S. 2772; Tabelle 2 | longitudinale Trainingsstudie | I | Sehr kleine Stichprobe; Training enthält Anleitung, Ziele und Leistungsfeedback. |
| OUL13-P6 | Nach durchschnittlich 16,8 Trainingsstunden erreichten die Teilnehmenden 37,1 Wörter pro Minute bei 5,2 Prozent Zeichenfehlerrate gegenüber 27,7 Wörtern pro Minute und 9,0 Prozent mit ihrer untrainierten Touch-QWERTY-Baseline. | S. 2772; Abb. 9 | gemessene Leistungsdaten | I | Kein randomisierter Layoutvergleich mit gleich langem QWERTY-Training. |
| OUL13-P7 | Die online verwendete Fehlerkorrektur erhöhte die Geschwindigkeit nicht und zeigte 6,4 Prozent Zeichenfehlerrate; nachträgliche Offlineanpassung reduzierte die Rate um 1,3 Prozentpunkte. | S. 2773 | experimentelles Ergebnis plus Offlineanalyse | I / O | Offlineanalyse ist kein beobachteter Nutzungseffekt der eingesetzten Version. |
| OUL13-P8 | Die Autor:innen begrenzen die Übertragbarkeit durch Rechtshändigkeit, kleine und teilweise rein männliche Studierendenstichproben, ein Tabletformat und intensives Training. | S. 2773–2774 | ausdrückliche Quellenbegrenzung | I | Andere Handgrößen, Griffe und kleinere Geräte können andere Effekte zeigen. |

## Verhältnis zur Grundstruktur

Die Quelle liefert die bisher direkteste Evidenz für die körperliche Interaction-Ebene. Sie zeigt, dass Texteingabe nicht nur Formulierung, sondern koordinierte Bewegung, Aufmerksamkeit und erlernte motorische Routinen umfasst. Gleichzeitig verbindet sie diese Arbeit mit Operation: Touchpunkte werden durch Layout, Bewegungsmodell und sprachlichen Kontext in Zeichen übersetzt.

## Grenzen und Gegenprüfung

KALQ ist ein eigens optimiertes Forschungskeyboard für englische Zwei-Daumen-Eingabe auf Tablets. Der Leistungsgewinn folgt auf umfangreiches Training und kann weder gewöhnlichen QWERTY-Gebrauch noch spontane Nutzung repräsentieren. Die Griff- und Bewegungsmodelle beruhen vorwiegend auf rechtshändigen männlichen Studierenden. Die Studie misst Tippgeschwindigkeit und Zeichenfehler, nicht Textinhalt, Formulierungsqualität oder langfristige Adoption. Van Esch et al. 2019 können die sprach- und schriftsystembezogenen Grenzen einer einheitlichen Tastaturannahme kontextualisieren.

## Entscheidung

**Kernquelle.** Funktion: empirischer Beleg für den körperlichen und zeitlichen Aufwand mobiler Texteingabe sowie für die operative Rekonstruktion von Zeichen aus Touchposition und Sprachkontext. Verbleibende Lücke für späteres Schreiben: heutige Alltagsnutzung auf Smartphones und andere Eingabehaltungen.
