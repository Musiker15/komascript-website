---
title: "scrbook — Buch & Diplomarbeit"
description: "Die KOMA-Script-Klasse für Bücher, Diplom- und Doktorarbeiten."
order: 3
category: "Dokumentklassen"
updated: 2026-05-09
---

## Übersicht

`scrbook` ist die KOMA-Script-Klasse für **lange, doppelseitig gedruckte Dokumente**:

- Bücher
- Diplom-, Master- und Doktorarbeiten
- Lehrbücher
- Romane und Sachbücher

Sie ersetzt die Standardklasse `book` und ist **doppelseitig per Default**.

## Strukturbereiche

`scrbook` unterstützt die klassische Buch-Strukturierung:

```latex
\begin{document}
  \frontmatter        % römische Seitenzahlen, kein Kapitel-Nummer
  \maketitle
  \tableofcontents
  \chapter*{Vorwort}

  \mainmatter         % arabische Seitenzahlen, normale Kapitel
  \chapter{Einleitung}
  \chapter{Hauptteil}
  \chapter{Schluss}

  \backmatter         % keine Kapitel-Nummerierung mehr
  \chapter{Literatur}
  \chapter{Index}
\end{document}
```

## Wichtige Optionen

```latex
\documentclass[
  paper=a4,
  fontsize=11pt,
  parskip=half,
  BCOR=12mm,           % Bindekorrektur (binding correction)
  DIV=calc,            % automatischer Satzspiegel
  twoside=true,        % Standard
  open=right,          % Kapitel rechts (Standard)
  headings=normal
]{scrbook}
```

<Callout type="tip">
**`BCOR`** ist die *Bindekorrektur*: Wert in mm, der links (innen) zusätzlich für die
Bindung reserviert wird. Bei Hardcover ca. 8–12 mm, bei Klebebindung ca. 5–8 mm.
</Callout>

## Vollständige Titelei

```latex
\title{Eine Untersuchung des Maschinellen Lernens}
\subtitle{Anwendungen in der medizinischen Bildgebung}
\author{Max Mustermann}
\publishers{Universität Beispielstadt \\ Fakultät für Informatik}
\date{12. März 2026}

\maketitle
```

## Kopf- und Fußzeilen via `scrlayer-scrpage`

```latex
\usepackage{scrlayer-scrpage}
\pagestyle{scrheadings}
\ihead{\headmark}                    % innen: aktueller Abschnitt
\ohead*{\pagemark}                   % außen: Seitenzahl (auch auf Kapitelseiten)
\ifoot{Diplomarbeit · Max Mustermann}
\ofoot{\today}
```
