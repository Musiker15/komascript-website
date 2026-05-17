---
title: "defoldfonts"
description: "Restores the old LaTeX-2.09 font commands (\\rm, \\sf, \\tt, …) that were dropped from the LaTeX kernel."
order: 11
tags: []
---

The package defines the old font commands `\rm`, `\sf`, `\tt`, `\bf`, `\it`,
and `\sc`, which were declared obsolete with LaTeX 2ε and have been removed
from the LaTeX kernel. It also defines the old KOMA-Script font command
`\sfb`.

This can be useful when using a class such as the KOMA-Script classes — which
do not define the old commands by default — together with an old BibTeX style
or BibTeX package that relies on them. It should however be considered a
workaround rather than a permanent solution. The recommended real solution is
to replace the obsolete commands with e.g. `\rmfamily`, `\sffamily`,
`\ttfamily`, `\bfseries`, `\itshape`, `\scshape`, or the corresponding text
commands taking an argument: `\textrm`, `\textsf`, `\texttt`, `\textbf`,
`\textit`, `\textsc`. These newer commands can also be combined or nested to
combine font attributes — something the old commands do not support.

The package is hosted on
[Codeberg](https://codeberg.org/komascript/defoldfonts). See the [CTAN
catalogue entry](https://www.ctan.org/pkg/defoldfonts) for more.
