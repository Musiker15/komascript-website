---
title: "floatrowbytocbasic"
description: "Standalone successor of the scrhack module for the floatrow package — better integration with tocbasic."
order: 13
tags: ["hak"]
---

The package `floatrowbytocbasic` was originally created years ago as a hack
module of the then KOMA-Script package [`scrhack`](/en/friends/scrhack), to
fix an issue that appeared when using
[`floatrow`](https://www.ctan.org/pkg/floatrow) with KOMA-Script 3. This was
necessary because `floatrow` still depends on an interface once proposed by
the KOMA-Script author that no longer meets requirements. Unfortunately, the
problem could not be resolved in dialogue with the author of `floatrow`.

Although `floatrowbytocbasic` still requires the `floatrow` package, it
modifies some internal commands so the KOMA-Script package `tocbasic` is used
and fully supported. The user interface of `floatrow` remains unchanged, while
the package benefits from many capabilities of `tocbasic` — not only with
KOMA-Script classes but also with other classes such as the standard classes.

The package is part of the “Third Party Enhancements” hosted on
[GitHub](https://github.com/komascript/third-party-enhancements). See the
[CTAN catalogue entry](https://www.ctan.org/pkg/floatrowbytocbasic) for more.

<Callout type="info">
There is still some hope that this package will eventually become unnecessary —
namely when the original package's maintainer adopts the functionality.
</Callout>
