---
title: "scrhack"
description: "Loader package for the standalone successors of the former KOMA-Script hack collection."
order: 2
category: "spin-off"
tags: ["deprecated"]
---

The package `scrhack` is a spin-off from KOMA-Script and was part of that
bundle up to `scrhack` 3.41 and KOMA-Script 3.41. It has been removed from
KOMA-Script because it is outdated and only kept around for backward
compatibility.

Originally `scrhack` was developed not only to improve the compatibility of
third-party packages with KOMA-Script classes, but also to optimise these
packages in general. The package consisted not only of the package file
`scrhack.sty`, but also of several so-called hacks as separate files with the
extension `.hak`.

As part of moving former KOMA-Script packages out of the bundle, the decision
was made to turn the individual hacks into standalone packages. These new
standalone packages then serve as replacements for the original packages they
were meant to improve. To preserve the functionality of loading the
enhancements only when the corresponding original package is loaded, a new
`scrhack` was created that does exactly that. The new `scrhack` requires
[`floatbytocbasic`](/en/friends/floatbytocbasic),
[`floatrowbytocbasic`](/en/friends/floatrowbytocbasic),
[`lscapeenhanced`](/en/friends/lscapeenhanced),
[`setspaceenhanced`](/en/friends/setspaceenhanced), and
[`standardsectioning`](/en/friends/standardsectioning).

For new documents it is recommended to load only those of the above packages
that are actually needed, instead of `scrhack`.

The package is part of the “Third Party Enhancements” hosted on
[GitHub](https://github.com/komascript/third-party-enhancements). See the
[CTAN catalogue entry](https://www.ctan.org/pkg/scrhack) for more.

<Callout type="warning">
This package is deprecated. Support is very limited or no longer available.
</Callout>
