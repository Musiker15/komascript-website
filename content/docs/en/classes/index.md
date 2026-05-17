---
title: "The KOMA-Script Classes"
description: "Complete overview of all classes currently part of the KOMA-Script bundle."
order: 0
category: "classes"
---

KOMA-Script provides a number of document classes, some of which correspond
directly to the standard classes `article`, `book`, and `report`. Depending
on which third-party packages are involved, the standard classes can usually
be swapped out for their KOMA-Script counterparts without further changes.

<Callout type="info">
None of the KOMA-Script classes currently support `\DocumentMetadata` or
LaTeX tagging. If you need accessible PDFs to PDF/UA standard, keep this in
mind.
</Callout>

## Main classes

| Class | Replaces | Purpose |
|---|---|---|
| [`scrartcl`](/en/docs/classes/scrartcl) | `article` | Articles, shorter texts without chapters |
| [`scrbook`](/en/docs/classes/scrbook) | `book` | Books, two-sided layout, with chapters |
| [`scrreprt`](/en/docs/classes/scrreprt) | `report` | Reports, longer texts with chapters |
| [`scrlttr2`](/en/docs/classes/scrlttr2) | `letter` | Business and private letters (DIN, US, SN, NF, JP …) |

## Wrapper classes

Because many users are unsure how and why to write `scrartcl` or `scrreprt`,
there are wrappers with spelled-out names:

- **`scrarticle`** — wrapper for `scrartcl`.
- **`scrreport`** — wrapper for `scrreprt`.
- **`scrletter`** — wrapper that combines `scrartcl` with the `scrletter`
  package. Not fully compatible with `scrlttr2`, but offers some improvements.

## Internal classes

These classes should **not** be used by end users; they can change in
incompatible ways at any time:

- **`koma-script-source-doc`** — internal class used for the source code
  documentation.
- **`scrguide`** — internal class used for the KOMA-Script user manual. The
  upstream project itself describes it as “a real mess that has grown over
  the years”.

<Callout type="note">
The class list is based on the official KOMA-Script project overview and is
paraphrased here. The original source is
[koma-script.sourceforge.io](https://koma-script.sourceforge.io/koma-script/classes/).
</Callout>
