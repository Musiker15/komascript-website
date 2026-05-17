---
title: "standardsectioning"
description: "Re-implements the standard-class sectioning commands inside KOMA-Script classes — for compatibility with titlesec et al."
order: 21
tags: ["hak"]
---

The package `standardsectioning` was originally created as a hack module of
the then KOMA-Script package [`scrhack`](/en/friends/scrhack), to fix an
issue that can occur when using third-party packages such as
[`titlesec`](https://www.ctan.org/pkg/titlesec) together with KOMA-Script
classes.

A long time ago, KOMA-Script was more or less just a collection of replacement
classes for the three standard classes `article`, `book`, and `report`.
Replacing a standard class with a KOMA-Script class was straightforward even
when users loaded many additional packages. Over the years, many new features
and user interfaces have been added to the classes. This also led to a
completely different implementation of the sectioning commands. Some packages,
however, rely on an implementation that matches the standard classes.

`standardsectioning` implements those commands using the standard classes'
code and also disables parts of the KOMA-Script user interface that should
not be used together with these changes — essentially all commands for
configuring the sectioning commands. Several internal KOMA-Script macros are
also reset.

The package is part of the “Third Party Enhancements” hosted on
[GitHub](https://github.com/komascript/third-party-enhancements). See the
[CTAN catalogue entry](https://www.ctan.org/pkg/standardsectioning) for more.

<Callout type="info">
There is still some hope that this package will eventually become unnecessary —
namely when the original package's maintainer adopts the functionality.
</Callout>
