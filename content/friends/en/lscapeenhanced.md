---
title: "lscapeenhanced"
description: "Fixes the handling of \\textheight and \\textwidth on landscape pages in lscape and can load pdflscape via an option."
order: 20
category: "enhancement"
tags: []
---

The Package `lscapeenhanced` has started as hack module of the former
KOMA-Script package [`scrhack`](/en/friends/scrhack) years ago to fix an issue when
using package [`lscape`](https://www.ctan.org/pkg/lscape) with KOMA-Script packages `scrlayer` or
`scrlayer-scrpage`. This became necessary because package `lscape` has a
somehow strange handling of `\textheight` resp. `\textwidth` at landscape
pages. This is not only an issue with KOMA-Script but also other packages,
e.g., [`showframe`](https://www.ctan.org/pkg/showframe). Package `lscapeenhanced` solves this issue. This
is a really small change and best would be, if the `lscape` author would at
least include this change optionally. The user interface of `lscape` remains
usable unchanged.

Additionally `lscapeenhanced` provides an option to not only load package
`lscape` but `pdflscape`. So if you want the functionality of `pdflscape` you
don't need to load `lscapeenhanced` and `pdflscape` but only `lscapeenhanced`
with option `pdflscape`.

The package is part of the “Third Party Enhancements” hosted on
[GitHub](https://github.com/komascript/third-party-enhancements). Further
information can be found in [the CTAN catalog entry](https://www.ctan.org/pkg/lscapeenhanced).
