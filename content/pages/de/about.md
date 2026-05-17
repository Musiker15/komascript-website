---
title: "Über KOMA-Script"
description: "Geschichte, Ziele und Philosophie hinter KOMA-Script — der modernen Alternative zu den Standard-LaTeX-Klassen."
order: 1
---

## Was ist KOMA-Script?

**KOMA-Script** ist eine umfangreiche Sammlung von Klassen und Paketen für **LaTeX**.
Es bietet hochkonfigurierbare Ersatzklassen für die Standard-Dokumentklassen `article`,
`report` und `book`, sowie eine eigene Briefklasse `scrlttr2`.

Die Klassen orientieren sich an europäischer typografischer Tradition und folgen den
Empfehlungen klassischer Setzerei — mit modernen, an LaTeX angepassten Mitteln.

## Geschichte

Das Projekt entstand bereits **1992** — noch vor der Veröffentlichung von **LaTeX 2ε** —
als Markus Kohm die damaligen *Script2*-Stile aus LaTeX 2.09 in das neue Klassen-System
portierte. Die erste Veröffentlichung folgte **1993**. Seitdem hat sich KOMA-Script
kontinuierlich weiterentwickelt; heute gehört es zu den am häufigsten genutzten
LaTeX-Klassenpaketen weltweit.

Über die Jahre wuchsen nicht nur die Funktionen der KOMA-Script-Klassen, sondern es
entstanden auch zahlreiche Pakete im Umfeld der Sammlung. Trotz gelegentlicher
Mitwirkender — etwa bei Teilen der Dokumentation oder bei der ursprünglichen
Briefklasse — blieb KOMA-Script im Kern stets eine **Ein-Personen-Show**.

### Das Documentation Project

Teil des KOMA-Script-Ökosystems war einst das **„KOMA-Script Documentation Project"**
(`komascript.de`). Ursprünglich von Robin Kroha auf Zope ins Leben gerufen und
finanziert, war es eines der ersten deutschsprachigen LaTeX-Foren — lange vor
GitHub und Codeberg. Später wurde das Projekt auf Drupal migriert.

Die Hoffnung, die Pflege auf viele Schultern zu verteilen, erfüllte sich jedoch
nicht dauerhaft: Spam, Angriffe und administrative Arbeit landeten zunehmend beim
KOMA-Script-Autor selbst. Das Forum wurde schließlich für Community-Beiträge
geschlossen, erhaltenswerte Inhalte ins
[SourceForge-Wiki](https://sourceforge.net/p/koma-script/_list/wiki) übertragen —
verfügbar sowohl auf
[Deutsch](https://sourceforge.net/p/koma-script/wiki-de/) als auch auf
[Englisch](https://sourceforge.net/p/koma-script/wiki-en/).

### Aufteilung in kleinere Projekte

Seit **2018** wird KOMA-Script schrittweise in kleinere, eigenständige Projekte
aufgeteilt. Hauptziel ist es, die enorme Komplexität der Gesamtsammlung in
handhabbare Teile zu zerlegen — und so langfristig die Arbeit auf mehrere
Personen verteilen zu können. Viele dieser ausgegliederten Pakete findet man
heute im Bereich [Freunde](/de/friends).

<Callout type="note">
Markus Kohm beschreibt das Mission-Statement der offiziellen KOMA-Script-Seite
selbst so:

> „Der Zweck dieser Seite ist es, Informationen zu bestimmten Aspekten von
> KOMA-Script und meinen — also KOMA's — anderen Projekten bereitzustellen.
> Das Ganze hat eher den Charakter eines Blogs als eines Wikis. Darüber hinaus
> gibt es hier auch Entwürfe und Ideensammlungen. Dass diese hier nicht einfach
> von jedem öffentlich kommentiert werden können, ist Teil des Konzepts."

— Quelle: [koma-script.sourceforge.io](https://koma-script.sourceforge.io/)
</Callout>

<Callout type="info">
KOMA-Script ist Teil der meisten LaTeX-Distributionen — bei **TeX Live**, **MiKTeX**
und **MacTeX** ist es vorinstalliert. Eine manuelle Installation ist normalerweise
nicht nötig.
</Callout>

## Dokumentation

Die offizielle KOMA-Script-Anleitung ist in **LaTeX** geschrieben und mehrfach komplett
überarbeitet worden. Eine Besonderheit der Quellen: aus ihnen lassen sich **sowohl die
freie Anleitung als auch das *Deutsche KOMA-Script-Buch*** erzeugen — beim Buch
kommen lediglich einige zusätzliche Dateien hinzu. Das Buchformat führt entsprechend
zu einigen Besonderheiten im LaTeX-Quelltext.

## Philosophie

KOMA-Script verfolgt drei Leitprinzipien:

1. **Konfigurierbarkeit ohne Bruch.** Tausende Optionen erlauben individuelle Anpassungen,
   ohne dass die Dokumentstruktur leidet.
2. **Typografische Korrektheit.** Voreinstellungen folgen den Regeln klassischer Setzerei —
   nicht den Standards von Textverarbeitungen.
3. **Lokale Anpassbarkeit.** Eingebaute Unterstützung für deutsche, schweizerische,
   französische, US-amerikanische und japanische Konventionen.

## Autor

KOMA-Script wird seit über drei Jahrzehnten federführend von **Markus Kohm** entwickelt.
Beiträge der Community sind willkommen — vor allem im Rahmen der Spin-off-Projekte
auf [GitHub](https://github.com/komascript) und [Codeberg](https://codeberg.org/komascript).

## Lizenz

KOMA-Script wird unter der **LaTeX Project Public License (LPPL) 1.3c** veröffentlicht
und darf frei verwendet, weitergegeben und modifiziert werden — vorausgesetzt, die
Bedingungen der LPPL werden eingehalten.
