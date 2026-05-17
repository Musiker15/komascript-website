---
title: "FAQ"
description: "Frequently asked questions about KOMA-Script."
order: 5
---

## General

### What does "KOMA-Script" stand for?

The name derives from the author's nickname: **KO**hm's **MA**cros.

### Why should I use KOMA-Script over the standard classes?

The standard classes `article`, `report`, and `book` were designed in the 1980s with
US-American typography in mind. KOMA-Script offers:

- better European / German typographic defaults
- significantly more configuration options
- smarter type-area calculation via `typearea`
- the modern letter class `scrlttr2`

## Technical

### How do I change the font size?

```latex
\documentclass[fontsize=11pt]{scrartcl}
```

Sizes from 8pt to 36pt are supported.

### How do I adjust the type area?

```latex
\documentclass[DIV=12]{scrbook}
\documentclass[DIV=calc]{scrbook}
```

## Help

### Where do I find the manual?

```bash
texdoc scrguide   # German
texdoc scrguien   # English
```

### Where do I get help with a specific issue?

[TeX Stack Exchange](https://tex.stackexchange.com/questions/tagged/koma-script) — tag
`koma-script`. Always include a **MWE**!
