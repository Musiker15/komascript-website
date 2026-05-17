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
\usepackage[T1]{fontenc}
\usepackage[utf8]{inputenc}
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

## Kompilieren

```bash
pdflatex meindokument.tex
# oder
lualatex meindokument.tex
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

Empfohlene weitere Lektüre:

- [Dokumentklassen-Übersicht](/de/docs/classes/scrartcl)
- [`typearea`-Paket](/de/docs/packages/typearea)
- [Beispiele](/de/examples)
