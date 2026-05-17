---
title: "scrreprt — Bericht"
description: "Die KOMA-Script-Klasse für Berichte mit Kapiteln."
order: 2
category: "Dokumentklassen"
updated: 2026-05-09
---

## Übersicht

`scrreprt` ist die KOMA-Script-Klasse für **mittellange Berichte mit Kapiteln**.
Sie ersetzt die Standardklasse `report` und ist die richtige Wahl für:

- wissenschaftliche Berichte
- Projektarbeiten
- Praktikumsberichte
- Technische Dokumentationen

## Minimal-Beispiel

```latex
\documentclass{scrreprt}
\usepackage[ngerman]{babel}

\begin{document}

\chapter{Einleitung}
\section{Motivation}
\section{Ziele}

\chapter{Methoden}
\section{Vorgehensweise}

\chapter{Ergebnisse}

\end{document}
```

## Unterschied zu `scrartcl`

`scrreprt` führt die Befehle `\chapter{}` und `\part{}` zusätzlich zur normalen Gliederung
ein. Kapitel beginnen standardmäßig **immer auf einer neuen Seite**.

## Wichtige Optionen

```latex
\documentclass[
  paper=a4,
  fontsize=11pt,
  parskip=half,
  open=right,           % Kapitel beginnen rechts (twoside)
  twoside=true,
  numbers=enddot,
  headings=normal       % small | normal | big
]{scrreprt}
```

## Titelseite (Standard)

Die `\maketitle`-Titelseite ist bei `scrreprt` **eine eigene Seite** mit Titel,
Autor, Datum und optionalen Zusatzfeldern (siehe scrartcl).

## Eigene Titelseite via `titlepage`

```latex
\begin{titlepage}
  \centering
  \vspace*{2cm}
  {\Huge\bfseries Titel meines Berichts\par}
  \vspace{1cm}
  {\Large Untertitel\par}
  \vfill
  {\Large Max Mustermann\par}
  \vspace{1cm}
  {\large \today\par}
\end{titlepage}
```
