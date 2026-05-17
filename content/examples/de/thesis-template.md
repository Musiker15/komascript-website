---
title: "Diplomarbeit / Masterarbeit"
description: "Vollständige Vorlage für eine wissenschaftliche Abschlussarbeit mit scrbook."
order: 1
tags: ["thesis", "scrbook", "deutsch"]
---

## Übersicht

Eine vollständige Vorlage für eine **Master- oder Doktorarbeit** auf A4 mit
typografisch sauberem Satzspiegel, korrekter Bindekorrektur und Anpassungen für die
deutsche Wissenschaftstradition.

## Hauptdokument

```latex
\documentclass[
  paper=a4,
  fontsize=11pt,
  parskip=half,
  twoside=true,
  open=right,
  numbers=enddot,
  BCOR=12mm,
  DIV=calc,
  bibliography=totoc,
  listof=totoc,
  captions=tableheading
]{scrbook}

% Empfohlener Compiler: LuaLaTeX (siehe Hinweis unten).
% Mit LuaLaTeX werden weder inputenc noch fontenc benötigt.
\usepackage[ngerman]{babel}
\usepackage{microtype}
\usepackage{csquotes}
\usepackage{scrlayer-scrpage}
\usepackage{biblatex}
\addbibresource{literatur.bib}

% Optional: OpenType-Fonts unter LuaLaTeX/XeLaTeX
% \usepackage{fontspec}
% \setmainfont{TeX Gyre Pagella}
% \setsansfont{TeX Gyre Heros}
% \setmonofont{TeX Gyre Cursor}

\setkomafont{disposition}{\rmfamily\bfseries}
\pagestyle{scrheadings}

\title{Eine Untersuchung zum Maschinellen Lernen}
\subtitle{Anwendungen in der medizinischen Bildverarbeitung}
\author{Max Mustermann}
\publishers{%
  Universität Beispielstadt\\
  Fakultät für Informatik\\
  Lehrstuhl für KI
}
\date{12. März 2026}

\begin{document}

\frontmatter
\maketitle

\chapter*{Eidesstattliche Erklärung}
Hiermit erkläre ich \dots

\chapter*{Danksagung}
Mein Dank gilt \dots

\tableofcontents
\listoffigures
\listoftables

\mainmatter
\chapter{Einleitung}
\input{kapitel/01-einleitung}

\chapter{Theoretische Grundlagen}
\input{kapitel/02-grundlagen}

\chapter{Methoden}
\input{kapitel/03-methoden}

\chapter{Ergebnisse}
\input{kapitel/04-ergebnisse}

\chapter{Diskussion}
\input{kapitel/05-diskussion}

\backmatter
\printbibliography

\end{document}
```

## Kopfzeilen mit `scrlayer-scrpage`

```latex
\pagestyle{scrheadings}
\automark[section]{chapter}
\ihead{\headmark}
\ohead*{\pagemark}
\ifoot{Masterarbeit · Max Mustermann}
\ofoot{}
\setkomafont{pageheadfoot}{\small\itshape}
```

## Verzeichnisstruktur

```
masterarbeit/
├── masterarbeit.tex      ← Hauptdokument
├── literatur.bib
├── kapitel/
│   ├── 01-einleitung.tex
│   ├── 02-grundlagen.tex
│   ├── 03-methoden.tex
│   ├── 04-ergebnisse.tex
│   └── 05-diskussion.tex
└── bilder/
    └── *.pdf
```

<Callout type="tip">
**Kompilieren mit LuaLaTeX:** `lualatex masterarbeit.tex` (zweimal aufrufen plus
`biber` zwischendurch für die Bibliographie). LuaLaTeX braucht weder `inputenc`
noch `fontenc` und gibt Dir mit `fontspec` Zugriff auf jeden auf Deinem System
installierten OpenType-Font.

Weitere fertige Templates für typische Dokumentarten:
[KOMA-Script-Wiki — HowTo Template](https://sourceforge.net/p/koma-script/wiki-de/HowTo_Template/)
</Callout>
