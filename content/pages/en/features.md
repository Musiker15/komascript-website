---
title: "Features"
description: "What can KOMA-Script do? A detailed overview of the most important classes, packages, and features."
order: 2
---

## Document Classes

| Class | Replaces | Use case |
|---|---|---|
| `scrartcl` | `article` | Short articles, essays, simple scripts |
| `scrreprt` | `report`  | Medium-length reports with chapters |
| `scrbook`  | `book`    | Books, theses, dissertations |
| `scrlttr2` | `letter`  | Business and private letters (DIN, US, Swiss, F, JP) |

## Packages

KOMA-Script also includes packages usable on their own:

- **`typearea`** — automatic type-area computation following classical typography
- **`scrlayer`** / **`scrlayer-scrpage`** — layer system for headers and footers,
  fully integrated into KOMA-Script. An established alternative to `fancyhdr`.
- **`tocbasic`** — base for tables of contents and similar
- **`scrbase`** — fundamental helpers (also usable without the KOMA classes)
- **`scrdate`**, **`scrtime`** — localised date and time formatting

## Configurability

KOMA-Script is configured via `\KOMAoption{}`:

```latex
\KOMAoption{captions=tableheading}     % table caption on top
\KOMAoption{parskip=half}              % half-line paragraph skip
\KOMAoption{DIV=12}                    % tighter type area
```

## Multilingual letters

The `scrlttr2` class supports many locale variants with their address formats,
date layouts, and salutation conventions.

<Callout type="tip">
Access the German manual via `texdoc scrguide`, the English one via `texdoc scrguien`.
</Callout>
