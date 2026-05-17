---
title: "Getting Started"
description: "Your first document with KOMA-Script — from blank file to finished PDF."
order: 2
category: "Getting Started"
updated: 2026-05-09
---

## Your first document

Create `mydocument.tex`:

```latex
\documentclass[
  paper=a4,
  fontsize=11pt,
  parskip=half
]{scrartcl}

\usepackage[english]{babel}
\usepackage[T1]{fontenc}
\usepackage[utf8]{inputenc}
\usepackage{microtype}

\title{My first KOMA-Script document}
\author{John Doe}
\date{\today}

\begin{document}
\maketitle

\section{Introduction}
Welcome to KOMA-Script!

\section{Main}
KOMA-Script offers many advantages over the standard classes \dots

\end{document}
```

## Compile

```bash
pdflatex mydocument.tex
```

## Common adjustments

### Choose another class

```latex
\documentclass{scrartcl}     % Article
\documentclass{scrreprt}     % Report with chapters
\documentclass{scrbook}      % Book / thesis
\documentclass{scrlttr2}     % Letter
```

### Adjust the type area

```latex
\documentclass[DIV=12]{scrartcl}
\documentclass[DIV=calc]{scrartcl}
\documentclass[BCOR=12mm]{scrartcl}
```

## Next steps

<Callout type="info">
Read the official manual for full details: `texdoc scrguien`.
</Callout>
