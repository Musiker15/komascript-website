---
title: "Features"
description: "What can KOMA-Script do? An overview of the classes and packages in the collection, configuration via KOMAoption, and the letter locales of scrlttr2."
order: 2
---

KOMA-Script is not a single class but a collection of document classes and packages.
This page gives a user-oriented overview. The complete, authoritative list of everything
in the bundle lives at [The KOMA-Script Collection](/en/docs/koma-script).

<Callout type="warning">
Currently **none** of the KOMA-Script classes supports `\DocumentMetadata` or LaTeX
tagging. If you depend on tagged PDFs, the KOMA-Script classes are not the right choice
right now.
</Callout>

## Document Classes

| Class | Replaces | Use case |
|---|---|---|
| `scrartcl` | `article` | Short articles, essays, simple scripts |
| `scrreprt` | `report`  | Medium-length reports with chapters |
| `scrbook`  | `book`    | Books, theses, dissertations |
| `scrlttr2` | `letter`  | Letters. The user interface differs a lot from `letter` |

Depending on which third-party packages you use, you can simply replace the standard class
with the corresponding KOMA-Script class.

### Wrapper classes

Because the abbreviated names are hard to remember, there are also classes with a
spelled-out name:

- **`scrarticle`** is a wrapper for `scrartcl`
- **`scrreport`** is a wrapper for `scrreprt`
- **`scrletter`** is a wrapper combining `scrartcl` with the `scrletter` package. It is not
  fully compatible with `scrlttr2`, but it brings some improvements.

## Packages

Many packages in the collection can be used without the KOMA-Script classes.

### Type area and page styles

- **`typearea`** calculates margins and the text area based on typographical aspects
- **`scrlayer`** provides layers and combines them into page styles
- **`scrlayer-scrpage`** builds on that and offers easily configurable page styles for
  headers and footers. An alternative to `fancyhdr` that also works with many other classes
- **`scrlayer-notecolumn`** is a proof of concept for layers with `scrlayer` and a candidate
  for being split off from KOMA-Script

### Structure and directories

- **`tocbasic`** manages auxiliary file extensions such as `.lof` or `.lot`, handles writing
  to and reading from those files, and provides extra floating environments, their
  non-floating counterparts, and caption configuration
- **`scrbase`** contains basic functions used by several classes and packages of the
  collection. Useful for your own packages as well
- **`scrextend`** provides some of the KOMA-Script class features to users of other classes,
  namely the standard classes
- **`scrfontsizes`** generates font size files for use with KOMA-Script classes or `scrextend`
- **`scrlfile`** loads file hooks. It can nowadays be replaced by the generic LaTeX hooks
- **`scrlogo`** merely defines the `\KOMAScript` command

### Letters

- **`scrletter`** provides the main features of `scrlttr2` as a package that can be combined
  with other classes, for example `scrartcl`, `scrreprt`, `scrbook` or the standard classes
  `article`, `report` and `book`
- **`scraddr`** reads `.adr` files and gives access to the individual fields of the entries

### Contracts

- **`scrjura`** is now only a wrapper that makes the split-off package
  [`contract`](/en/friends/contract) compatible with the deprecated `scrjura`

### Candidates for being split off

The following packages still ship with KOMA-Script, but the official overview explicitly
marks them as candidates for being split off. They already exist as standalone packages
as well:

- **`scrdate`** formats today's date in the language-independent ISO format and prints the
  language-dependent day name of any given date.
  See [`scrdate`](/en/friends/scrdate)
- **`scrtime`** prints the current time of the LaTeX run.
  See [`scrtime`](/en/friends/scrtime)

<Callout type="note">
`scrhack` is **no longer** part of the KOMA-Script collection. It has been split off, is
considered deprecated, and is only kept for compatibility. Instead of `scrhack`, load
exactly those third-party-enhancement packages you actually need. Details on the
[`scrhack`](/en/friends/scrhack) page.
</Callout>

### Internal only

The collection also contains classes and packages that are only used internally and that you
should not load directly, because they may change incompatibly at any time:
`koma-script-source-doc`, `scrguide`, `scrkbase`, and the `scrlfile-hook` variants.

## Configurability

KOMA-Script is configured via `\KOMAoption{}`:

```latex
\KOMAoption{captions=tableheading}     % table caption on top
\KOMAoption{parskip=half}              % half-line paragraph skip
\KOMAoption{DIV=12}                    % tighter type area
\KOMAoption{headings=big}              % larger chapter headings
```

## Multilingual letters

The `scrlttr2` class ships with a number of locale variants, each with matching address
formats, date layouts, and salutation conventions:

- **DIN** (Germany, A4 with window envelope)
- **DINmtext** (German medium text height for short letters)
- **US** (US Letter, US salutation)
- **SN** (Swiss norm)
- **SNleft** (Swiss norm, address block on the left)
- **NF** (French norm)
- **JP** (Japanese layout)

## Comprehensive documentation

The official KOMA-Script manual spans more than **600 pages** in German (`scrguide`) and
English (`scrguien`) and covers every class, package, and option with plenty of examples.

<Callout type="tip">
Open the German manual from your console with `texdoc scrguide`, the English one with
`texdoc scrguien`.
</Callout>
