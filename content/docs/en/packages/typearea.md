---
title: "typearea — Type Area"
description: "Automatic computation of typographically optimal margins."
order: 1
category: "Packages"
updated: 2026-05-09
---

## Overview

The **`typearea` package** computes the **type area** (the rectangle holding the text)
following classical typographic rules. It is automatically loaded by all KOMA classes
but can also be used on its own.

## Basic principle

Instead of specifying fixed margins, you set a **DIV factor**:

```latex
\documentclass[DIV=12]{scrartcl}
```

`typearea` splits the page into `DIV` equal strips and makes the type area `DIV - 3`
strips wide, producing harmonic proportions.

## Recommended values

| Paper | DIV recommendation |
|---|---|
| A4, 10pt | 8–10 |
| A4, 11pt | 10–12 |
| A4, 12pt | 12–15 |
| A5, 10pt | 6–8 |

## Auto

```latex
\documentclass[DIV=calc]{scrbook}
```

## Binding correction

```latex
\documentclass[BCOR=12mm,DIV=calc]{scrbook}
```

## Manual setting

```latex
\areaset[12mm]{14cm}{22cm}
```

## Standalone usage

```latex
\documentclass{article}
\usepackage[DIV=12,BCOR=10mm]{typearea}
```

<Callout type="info">
`typearea` is one of the strongest arguments *for* KOMA-Script — even if you stick
with `article` otherwise, it's worth using.
</Callout>
