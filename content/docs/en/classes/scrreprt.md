---
title: "scrreprt — Report"
description: "The KOMA-Script class for reports with chapters."
order: 2
category: "Document classes"
updated: 2026-05-09
---

## Overview

`scrreprt` is the KOMA-Script class for **medium-length reports with chapters**.
It replaces the standard `report` class.

## Minimal example

```latex
\documentclass{scrreprt}

\begin{document}
\chapter{Introduction}
\section{Motivation}

\chapter{Methods}
\chapter{Results}
\end{document}
```

## Key options

```latex
\documentclass[
  paper=a4,
  fontsize=11pt,
  parskip=half,
  open=right,
  twoside=true,
  numbers=enddot
]{scrreprt}
```
