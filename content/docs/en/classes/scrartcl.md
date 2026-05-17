---
title: "scrartcl — Article"
description: "The KOMA-Script class for short articles, essays, and scripts."
order: 1
category: "Document classes"
updated: 2026-05-09
---

## Overview

`scrartcl` is the KOMA-Script class for **short documents without chapters** — essays,
research articles, reports, one-pagers.

It replaces the standard `article` class with:

- smart type-area calculation via `typearea`
- more font-size options (8pt – 36pt)
- consistent look with other KOMA-Script classes

## Minimal example

```latex
\documentclass{scrartcl}
\begin{document}

\section{Introduction}
My text \dots

\section{Conclusion}

\end{document}
```

## Key options

```latex
\documentclass[
  paper=a4,
  fontsize=11pt,
  DIV=12,
  parskip=half,
  twoside=true,
  numbers=enddot,
  captions=tableheading
]{scrartcl}
```

## Title area

```latex
\title{My document}
\author{John Doe \and Anna Example}
\date{\today}
\subject{Subtitle or topic}
\publishers{Publisher, institution}

\maketitle
```
