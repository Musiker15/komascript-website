---
title: "makelabels"
description: "LCO file that extends scrlttr2 and scrletter with a \\makelabels facility for address labels."
order: 17
tags: []
---

The project `makelabels` is the result of a support request in the former
forum at [komascript.de](https://komascript.de). Unlike the standard letter
class `letter`, the KOMA-Script letter class `scrlttr2` and the KOMA-Script
letter package `scrletter` do not provide a way to create a labelling page
with `\makelabels`.

KOMA-Script does however offer a way to add new letter features via LCO
files. `makelabels.lco` is such an LCO file. It provides `\makelabels`
similarly to the standard letter class. The new `\makelabels` has only very
rudimentary configurability so far but already offers far more than the
standard letter class. It is also compatible enough that packages such as
[`envlab`](https://www.ctan.org/pkg/envlab) can be used.

From version 1.0 onwards, `makelabels.lco` is implemented using the
[L3 programming layer of the LaTeX
kernel](https://www.ctan.org/pkg/l3kernel).

The project is hosted on
[GitHub](https://github.com/komascript/makelabels). See the [CTAN catalogue
entry](https://www.ctan.org/pkg/makelabels) for more.
