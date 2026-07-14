---
title: "makelabels"
description: "LCO file that adds a \\makelabels label page to the KOMA-Script letter class scrlttr2 and the package scrletter."
order: 40
category: "other"
tags: []
---

Project `makelabels` is the result of a support request in the former forum at
[komascript.de](https://komascript.de).  In opposite to the standard letter
class, the KOMA-Script letter class `scrlttr2` and the KOMA-Script letter
package `scrletter` do not provide generation of a label page using
`\makelabels`. But KOMA-Script provides the option to add new letter features
using LCO files. `makelabels.lco` is such a LCO file. It provides
`\makelabels` similar to the standard letter class. The new `\makelabels` has
a yet very rudimentary configurability but much more than the standard letter
class provides. However, it is also as much compatible as needed that packages
like [`envlab`](https://www.ctan.org/pkg/envlab) can be used. From version 1.0
`makelabels.lco` is implemented using the [L3 programming
layer of the LaTeX kernel](https://www.ctan.org/pkg/l3kernel)

The project is hosted on
[GitHub](https://github.com/komascript/makelabels). Further information can be
found in [the CTAN catalog entry](https://www.ctan.org/pkg/makelabels).
