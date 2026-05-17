---
title: "Erste Schritte"
description: "Dein erstes Dokument mit KOMA-Script — von der leeren Datei bis zum fertigen PDF."
order: 2
category: "Getting Started"
updated: 2026-05-09
---

## Dein erstes Dokument

Erstelle eine Datei `meindokument.tex` mit folgendem Inhalt:

```latex
\documentclass[
  paper=a4,
  fontsize=11pt,
  parskip=half
]{scrartcl}

\usepackage[ngerman]{babel}
\usepackage{microtype}

\title{Mein erstes KOMA-Script-Dokument}
\author{Max Mustermann}
\date{\today}

\begin{document}
\maketitle

\section{Einleitung}
Willkommen bei KOMA-Script! Dies ist Dein erstes Dokument.

\section{Hauptteil}
KOMA-Script bietet Dir viele Vorteile gegenüber den Standardklassen \dots

\end{document}
```

<Callout type="info">
**Was hier nicht steht:** Kein `\usepackage[utf8]{inputenc}` und kein
`\usepackage[T1]{fontenc}`. Beides ist heute **nicht mehr nötig** — UTF-8 ist
seit 2018 die Standard-Eingabe-Kodierung in LaTeX. Wer auf **LuaLaTeX** oder
**XeLaTeX** setzt, hat `inputenc` ohnehin nie gebraucht und sollte `fontenc`
durch `fontspec` ersetzen, wenn überhaupt nötig.
</Callout>

## Kompilieren

Empfohlener Compiler ist **LuaLaTeX** (volle Unicode-Unterstützung, moderne Fonts):

```bash
lualatex meindokument.tex
```

`pdflatex` funktioniert genauso, ist aber etwas älter im Toolchain-Design:

```bash
pdflatex meindokument.tex
```

Das Ergebnis ist eine PDF-Datei mit professioneller Typografie.

## Häufige Anpassungen

### Andere Klassen wählen

```latex
\documentclass{scrartcl}     % Artikel
\documentclass{scrreprt}     % Bericht mit Kapiteln
\documentclass{scrbook}      % Buch / Diplomarbeit
\documentclass{scrlttr2}     % Brief
```

### Satzspiegel anpassen

```latex
\documentclass[DIV=12]{scrartcl}      % engerer Satzspiegel
\documentclass[DIV=calc]{scrartcl}    % automatisch berechnen
\documentclass[BCOR=12mm]{scrartcl}   % Bindekorrektur 12 mm
```

### Schriftarten

```latex
\setkomafont{disposition}{\rmfamily}   % Überschriften in Antiqua
\setkomafont{captionlabel}{\bfseries}  % Bildunterschriften fett
```

### Inhaltsverzeichnis-Anpassungen

```latex
\KOMAoption{toc=listof}      % Verzeichnisse ins ToC aufnehmen
\KOMAoption{toc=bibliography}% Literaturverzeichnis ins ToC
```

## Nächste Schritte

<Callout type="info">
Lies die offizielle Dokumentation für alle Details: `texdoc scrguide`.
Sie ist über 600 Seiten lang und beschreibt **jede** Option mit Beispielen.
</Callout>

<Callout type="tip">
Das KOMA-Script-Wiki enthält eine Sammlung gut gepflegter Templates für
typische Dokumentarten:
[sourceforge.net/p/koma-script/wiki-de/HowTo_Template](https://sourceforge.net/p/koma-script/wiki-de/HowTo_Template/)
</Callout>

Empfohlene weitere Lektüre:

- [Dokumentklassen-Übersicht](/de/docs/classes/scrartcl)
- [`typearea`-Paket](/de/docs/packages/typearea)
- [Beispiele](/de/examples)
