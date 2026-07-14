---
title: "standardsectioning"
description: "Reimplements the sectioning commands with the code of the standard classes so third-party packages like titlesec work with KOMA-Script classes."
order: 30
category: "other"
tags: []
---

The `standardsectioning` package was originally created as a hack module for
the then-current KOMA-Script package [`scrhack`](/en/friends/scrhack) to fix a problem
that could occur when using third-party packages such as
[`titlesec`](https://www.ctan.org/pkg/titlesec) in conjunction with KOMA-Script classes.

A long time ago KOMA-Script was more or less just a collection of replacements
for the three standard classes `article`, `book` and `report`. Replacing a
standard class with a KOMA-Script class was easy, even if users used a lot of
additional packages. Over the years, the author has added many new features
and user interfaces to the classes. This also led to completely different
implementation of the sectioning commands. But some packages depend on an
implementation similar to the standard classes.

Package `standardsectioning` implements these commands with the code of the
standard classes and also deactivates parts of the KOMA-Script user interface,
which should not be used with these changes. These are more or less all
commands to configure sectioning commands. It also reverts some internal
macros of KOMA-Script.

The package is part of the “Third Party Enhancements” hosted on
[GitHub](https://github.com/komascript/third-party-enhancements). Further
information can be found in [the CTAN catalog entry](https://www.ctan.org/pkg/standardsectioning)
