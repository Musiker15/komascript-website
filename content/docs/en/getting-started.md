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

<Callout type="info">
**What's not in there:** No `\usepackage[utf8]{inputenc}` and no
`\usepackage[T1]{fontenc}`. Both are **no longer needed** today — UTF-8 has
been the default input encoding for LaTeX since 2018. With **LuaLaTeX** or
**XeLaTeX**, `inputenc` was never needed at all, and `fontenc` should be
replaced with `fontspec` if you need to manage fonts.
</Callout>

## Compile

The recommended compiler is **LuaLaTeX** (full Unicode support, modern fonts):

```bash
lualatex mydocument.tex
```

`pdflatex` works just as well, just with an older toolchain design:

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

<Callout type="tip">
The KOMA-Script wiki maintains a collection of well-curated templates for
common document types (German):
[sourceforge.net/p/koma-script/wiki-de/HowTo_Template](https://sourceforge.net/p/koma-script/wiki-de/HowTo_Template/)
</Callout>
