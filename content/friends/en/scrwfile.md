---
title: "scrwfile"
description: "KOMA-Script spin-off that routes write operations through the .aux file so LaTeX almost never runs out of write registers."
order: 10
category: "spin-off"
tags: ["no-maintainer"]
---

Package `scrwfile` is a KOMA-Script spin-off and was part of that collection
up to `scrwfile` version 0.1.12 resp. KOMA-Script version 3.38. It has been
removed from KOMA-Script because it is experimental and no longer maintained
officially.

`scrwfile` is a LaTeX package, that provides a means of sending all
LaTeX `\newrite`, table of contents, and other miscellaneous output via
the LaTeX `.aux`-file. The mechanism subverts the mechanism of
`\newrite`, and means there will almost never be a “`No room for new \write`”
message.

The package is hosted on
[GitHub](https://github.com/komascript/scrwfile). Further information can be
found in [the CTAN catalog entry](https://www.ctan.org/pkg/scrwfile).
