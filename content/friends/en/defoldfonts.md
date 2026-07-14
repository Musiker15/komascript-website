---
title: "defoldfonts"
description: "Defines the obsolete font commands \\rm, \\sf, \\tt, \\bf, \\it, \\sc and \\sfb as a stopgap for old BibTeX styles and packages."
order: 30
category: "other"
tags: []
---

This package defines the old font commands `\rm`, `\sf`, `\tt`, `\bf`, `\it`,
and `\sc`, which have become obsolete in LaTeX 2ε and have been removed
from the LaTeX core. It also defines the old KOMA-Script font command
`\sfb`. This can be useful if you are using a class such as the KOMA-Script
classes, which do not define the old commands by default, and are also using
an old BibTeX style or an old BibTeX package that relies on these
commands. However, it should be considered more of a stopgap than a permanent
solution. The recommended real solution would be to replace the deprecated
commands with, for example, `\rmfamily`, `\sffamily`, `\ttfamily`,
`\bfseries`, `\itshape`, `\scshape`, or the corresponding text commands with
arguments: `\textrm`, `\textsf`, `\texttt`, `\textbf`, `\textit`,
`\textsc`. The new commands can also be combined or nested to combine font
attributes, which the old commands do not support.

The package is hosted on
[Codeberg](https://codeberg.org/komascript/defoldfonts). Further information
can be found in [the CTAN catalog entry](https://www.ctan.org/pkg/defoldfonts).
