---
title: "FAQ"
description: "Frequently asked questions about KOMA-Script."
order: 5
---

## General

### What does "KOMA-Script" stand for?

The name is simply derived from the author's name **KO**hm **MA**rkus —
combined with *Script*, the predecessor bundle from which Markus developed
today's KOMA-Script classes.

<Callout type="note">
Markus Kohm himself explains the spelling like this:

> “The pseudonym KOMA was originally written in mixed case as ‘KoMa' and is
> composed of the first two letters of my last name and first name: ‘Kohm,
> Markus.' I had been using this abbreviation in some of my software projects
> long before KOMA-Script. It seemed natural in 1993 to use it for my first
> large LaTeX 2ε project as well. The fact that the spelling was eventually
> changed to all capital letters is, incidentally, less my doing than that of
> the users. I simply adapted to conventional usage. However, I will not
> adopt the increasingly common spelling with only one capital letter at the
> beginning in the future either.”

— Source: [koma-script.sourceforge.io](https://koma-script.sourceforge.io/koma/)
</Callout>

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
