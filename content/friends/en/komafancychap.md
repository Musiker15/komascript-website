---
title: "komafancychap"
description: "Experimental package that recreates the chapter styles of fncychap for the KOMA-Script classes."
order: 30
category: "other"
tags: ["experimental"]
---

The code for the `komafancychap` package was originally developed as a set of
sample files in the “KOMA-Script Documentation Project.” The goal was to
recreate the chapter styles of the
[`fncychap`](https://www.ctan.org/pkg/fncychap) package using KOMA-Script
classes. This made sense because the
[`fncychap`](https://www.ctan.org/pkg/fncychap) package is intended primarily
for use with the standard classes. This severely limits its usability with a
KOMA-Script class. Furthermore, it contains typical mistakes related to the
use of obsolete font selection commands.

The package should explicitly be used only with one of the KOMA-Script classes
`scrartcl`, `scrbook`, or `scrreprt`. It will not work with a non-KOMA-Script
class.

So far, the `fncychap` styles `Sonny`, `Lenny`, and `Glenn` have been
implemented. More may follow as needed.

The package is hosted on
[Codeberg](https://codeberg.org/komascript/komafancychap). Due to its
experimental status, it is currently not available on
[CTAN](https://www.ctan.org) or in any common TeX distribution. Users must
therefore install it themselves if needed. See the linked project page on
Codeberg for details.
