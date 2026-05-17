---
title: "scrwfile"
description: "Experimental package that routes \\newwrite operations through the .aux file to dodge the LaTeX write-handle limit."
order: 4
category: "spin-off"
tags: ["no-maintainer"]
---

The package `scrwfile` is a spin-off from KOMA-Script and was part of the
bundle up to `scrwfile` 0.1.12 and KOMA-Script 3.38. It was moved out of
KOMA-Script because it is an experimental package that is no longer officially
maintained.

`scrwfile` is a LaTeX package that provides a way to route all
`\newwrite`-style output (tables of contents and other auxiliary writes)
through the LaTeX `.aux` file. The mechanism changes how `\newwrite` operates
and ensures that the “`No room for new \write`” message virtually never
appears anymore.

The package is hosted on [GitHub](https://github.com/komascript/scrwfile). See
the [CTAN catalogue entry](https://www.ctan.org/pkg/scrwfile) for more.

<Callout type="warning">
This package is looking for a new maintainer. Support is very limited or no
longer available until one is found.
</Callout>
