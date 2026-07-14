---
title: "Thesis / Dissertation"
description: "Complete template for an academic thesis using scrbook."
order: 1
tags: ["thesis", "scrbook"]
---

## Overview

A complete template for a **master's or doctoral thesis** on A4 with clean type area,
binding correction, and conventions suitable for academic publishing.

## Main document

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

% Recommended compiler: LuaLaTeX (see note at the bottom).
% With LuaLaTeX neither inputenc nor fontenc are needed.
\usepackage[english]{babel}
\usepackage{microtype}
\usepackage{csquotes}
\usepackage{scrlayer-scrpage}
\usepackage{biblatex}
\addbibresource{references.bib}

% Optional: OpenType fonts under LuaLaTeX/XeLaTeX
% \usepackage{fontspec}
% \setmainfont{TeX Gyre Pagella}

\title{A Study on Machine Learning}
\subtitle{Applications in Medical Imaging}
\author{John Doe}
\publishers{%
  Example University\\
  Department of Computer Science
}
\date{March 12, 2026}

\begin{document}

\frontmatter
\maketitle
\tableofcontents

\mainmatter
\chapter{Introduction}
\input{chapters/01-introduction}

\chapter{Background}
\chapter{Methods}
\chapter{Results}
\chapter{Discussion}

\backmatter
\printbibliography
\end{document}
```

<Callout type="tip">
**Compile with LuaLaTeX:** `lualatex thesis.tex` (run twice and `biber` in
between for the bibliography). LuaLaTeX requires neither `inputenc` nor
`fontenc` and gives you direct access to every OpenType font installed on
your system via `fontspec`.

More ready-made templates for typical document types (German):
[KOMA-Script wiki: HowTo Template](https://sourceforge.net/p/koma-script/wiki-de/HowTo_Template/)
</Callout>
