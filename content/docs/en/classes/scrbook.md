---
title: "scrbook — Book & Thesis"
description: "The KOMA-Script class for books, theses, and dissertations."
order: 3
category: "Document classes"
updated: 2026-05-09
---

## Overview

`scrbook` is the KOMA-Script class for **long, double-sided documents** — books, theses,
textbooks, novels.

## Document structure

```latex
\begin{document}
  \frontmatter
  \maketitle
  \tableofcontents
  \chapter*{Preface}

  \mainmatter
  \chapter{Introduction}
  \chapter{Main part}

  \backmatter
  \chapter{Bibliography}
\end{document}
```

## Key options

```latex
\documentclass[
  paper=a4,
  fontsize=11pt,
  parskip=half,
  BCOR=12mm,
  DIV=calc,
  twoside=true,
  open=right
]{scrbook}
```

<Callout type="tip">
**`BCOR`** is the *binding correction* — extra space on the inside of pages reserved
for binding. ~8–12 mm for hardcover, ~5–8 mm for perfect binding.
</Callout>
