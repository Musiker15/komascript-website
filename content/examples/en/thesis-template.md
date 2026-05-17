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

\usepackage[english]{babel}
\usepackage[T1]{fontenc}
\usepackage[utf8]{inputenc}
\usepackage{microtype}
\usepackage{csquotes}
\usepackage{scrlayer-scrpage}
\usepackage{biblatex}
\addbibresource{references.bib}

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
