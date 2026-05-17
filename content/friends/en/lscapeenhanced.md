---
title: "lscapeenhanced"
description: "Standalone successor of the scrhack module for the lscape package — fixes \\textheight/\\textwidth on landscape pages."
order: 16
tags: ["hak"]
---

The package `lscapeenhanced` was originally created years ago as a hack module
of the then KOMA-Script package [`scrhack`](/en/friends/scrhack), to fix an
issue that appeared when using [`lscape`](https://www.ctan.org/pkg/lscape)
together with the KOMA-Script packages `scrlayer` or `scrlayer-scrpage`. The
underlying reason is `lscape`'s somewhat unfortunate handling of `\textheight`
and `\textwidth` on landscape pages. This causes problems not only with
KOMA-Script but also with other packages, e.g.
[`showframe`](https://www.ctan.org/pkg/showframe).

`lscapeenhanced` fixes this. It is really a very small change, and it would be
best if the author of `lscape` adopted it — at least as an option — in their
own package. The user interface of `lscape` itself remains unchanged.

In addition, `lscapeenhanced` offers an option to load `pdflscape` instead of
`lscape`. With it, you only need to load `lscapeenhanced` with the `pdflscape`
option rather than both `lscapeenhanced` and `pdflscape`.

The package is part of the “Third Party Enhancements” hosted on
[GitHub](https://github.com/komascript/third-party-enhancements). See the
[CTAN catalogue entry](https://www.ctan.org/pkg/lscapeenhanced) for more.

<Callout type="info">
There is still some hope that this package will eventually become unnecessary —
namely when the original package's maintainer adopts the functionality.
</Callout>
