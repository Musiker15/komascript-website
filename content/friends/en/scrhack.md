---
title: "scrhack"
description: "Deprecated KOMA-Script spin-off that now only loads the separate third-party enhancement packages when the corresponding original package is used."
order: 10
category: "spin-off"
tags: ["deprecated"]
---

Package `scrhack` is a KOMA-Script spin-off and was part of that collection up
to version 3.41 of `scrhack` resp. KOMA-Script. It has been removed from
KOMA-Script because it is deprecated and available only for compatibility
reasons.

Originally `scrhack` has been made not only to improve the compatibility of
third-party packages with KOMA-Script classes, but also to generally improve
third-party packages. The package consisted not only in the package file
`scrhack.sty` but also in several so called hacks as separate files with
extension `.hak`. In the course of splitting off former KOMA-Script packages
from the KOMA-Script collection, it was decided to create independent packages
from the individual hacks. These new independent packages then serve as
replacements for the original packages they were intended to improve. In
addition, to preserve the functionality of loading the enhancements only when
the corresponding original package is loaded, a new `scrhack` was created to
do just that. The new `scrhack` now requires the packages
[`floatbytocbasic`](/en/friends/floatbytocbasic),
[`floatrowbytocbasic`](/en/friends/floatrowbytocbasic),
[`lscapeenhanced`](/en/friends/lscapeenhanced),
[`setspaceenhanced`](/en/friends/setspaceenhanced),
[`standardsectioning`](/en/friends/standardsectioning). For new documents, it is
recommended to load only those of the listed packages that are actually used,
rather than `scrhack`.

The package is part of the “Third Party Enhancements” hosted on
[GitHub](https://github.com/komascript/third-party-enhancements). Further
information can be found in [the CTAN catalog entry](https://www.ctan.org/pkg/scrhack).
