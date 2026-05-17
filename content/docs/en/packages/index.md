---
title: "The KOMA-Script Packages"
description: "Complete overview of all packages currently part of the KOMA-Script bundle."
order: 0
category: "packages"
---

KOMA-Script is more than just classes — the bundle also contains a number of
packages. Some are generally useful, others are intended only for internal use
by the KOMA-Script classes.

## Generally useful packages

| Package | Purpose |
|---|---|
| [`typearea`](/en/docs/packages/typearea) | Compute margins and the type area on typographic grounds |
| `scrbase` | Foundational helpers — useful for users and other package authors |
| `scrextend` | Brings some KOMA-Script class features to other classes, especially the standard ones |
| `scrlayer` | Layer system for page styles plus page-style aliases |
| `scrlayer-scrpage` | Easy-to-configure page styles built on `scrlayer` — an alternative to `fancyhdr`, usable outside KOMA-Script too |
| `scrletter` | Core functionality of `scrlttr2` as a package, combinable with `scrartcl`, `scrreprt`, `scrbook` or the standard classes |
| `tocbasic` | Management of auxiliary file extensions (`.lof`, `.lot`, …), floats, caption configuration, and more |
| `scrdate` | ISO date formatting and locale-aware weekday names |
| `scrtime` | Formatting the current time |
| `scrfontsizes` | Generates font-size files for use with KOMA-Script classes or `scrextend` |
| `scrlogo` | Defines the command `\KOMAScript` |

## Deprecated or candidates for spinning off

The following packages are either deprecated or candidates for being moved
out of KOMA-Script:

- **`scraddr`** — access to `.adr` files.
- **`scrdate`**, **`scrtime`** — may be split out as standalone projects.
- **`scrlayer-notecolumn`** — proof of concept for layers with `scrlayer`.

## Wrappers

- **`scrjura`** — wrapper that keeps the old package name working after the
  package [`contract`](/en/friends/contract) was moved out of the bundle.

## Internal packages (not for users)

These packages are only used internally by KOMA-Script and should not be
loaded directly by users or other package authors:

- **`scrkbase`** — internal helpers.
- **`scrlfile`** — file hooks; can be replaced by generic LaTeX hooks today.
- **`scrlfile-hook`** — variant of `scrlfile` for current LaTeX kernels.
- **`scrlfile-hook-3.34`** — variant for older LaTeX kernels with a different
  hook syntax.
- **`scrlfile-patcholdlatex`** — variant for LaTeX kernels without generic
  hooks.

<Callout type="note">
The package list is based on the official KOMA-Script project overview and
is paraphrased here. The original source is
[koma-script.sourceforge.io](https://koma-script.sourceforge.io/koma-script/packages/).
</Callout>
