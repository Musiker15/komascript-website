---
title: "scrartcl — Artikel"
description: "Die KOMA-Script-Klasse für kurze Artikel, Aufsätze und Skripte."
order: 1
category: "Dokumentklassen"
updated: 2026-05-09
---

## Übersicht

`scrartcl` ist die KOMA-Script-Klasse für **kurze Dokumente ohne Kapitel** —
Aufsätze, wissenschaftliche Artikel, Berichte, Notizen, einseitige Skripte.

Sie ersetzt die Standardklasse `article` und bietet:

- intelligente Satzspiegel-Berechnung via `typearea`
- mehr Schriftgrößen-Optionen (8pt – 36pt)
- einheitliches Erscheinungsbild mit anderen KOMA-Klassen
- volle `\KOMAoption{}`-Konfigurierbarkeit

## Minimal-Beispiel

```latex
\documentclass{scrartcl}
\begin{document}

\section{Einleitung}
Mein Text \dots

\subsection{Hintergrund}
Weiterer Text \dots

\section{Schluss}
Fazit \dots

\end{document}
```

## Wichtige Optionen

```latex
\documentclass[
  paper=a4,           % oder a5, b5, letter, ...
  fontsize=11pt,      % 8pt – 36pt
  DIV=12,             % Satzspiegel (oder DIV=calc)
  parskip=half,       % halbe Zeile Absatzabstand
  twoside=true,       % doppelseitig
  numbers=enddot,     % Punkt nach Nummerierung (1. Einleitung)
  captions=tableheading
]{scrartcl}
```

## Verfügbare Gliederungsbefehle

```latex
\section{Abschnitt}            % nummeriert
\section*{Abschnitt}           % nicht nummeriert
\subsection{Unterabschnitt}
\subsubsection{...}
\paragraph{...}
\subparagraph{...}
```

## Titelei

```latex
\title{Mein Dokument}
\author{Max Mustermann \and Anna Beispiel}
\date{\today}
\subject{Untertitel oder Thema}
\publishers{Herausgeber, Institution}

\maketitle
```

Im Gegensatz zu `article` bietet `scrartcl` zusätzliche Felder: `\subject`, `\publishers`,
`\dedication`, `\titlehead`, `\subtitle`.

<Callout type="tip">
Für ein **Inhaltsverzeichnis ohne Tiefe** kannst Du `\setcounter{tocdepth}{1}` setzen.
Standard ist `\tocdepth = 3` (bis `\subsubsection`).
</Callout>

## Wann `scrartcl`, wann `scrreprt` oder `scrbook`?

| Kriterium | scrartcl | scrreprt | scrbook |
|---|---|---|---|
| Kapitel (`\chapter`)? | nein | ja | ja |
| Doppelseitig sinnvoll? | optional | optional | ja |
| Vor-/Hauptteil? | nein | nein | ja (`\frontmatter` ...) |
| Typische Länge | bis ~30 Seiten | 30–150 Seiten | 100+ Seiten |
