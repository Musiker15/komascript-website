---
title: "marginnote"
description: "Provides \\marginnote, a non-floating alternative to \\marginpar that also works inside floats and footnotes."
order: 30
category: "other"
tags: ["no-maintainer"]
---

In LaTeX the command `\marginpar[⟨left⟩]{⟨right⟩}` can be used to create
a note in the margin. But there is a problem with this command: It creates a
special kind of float. So it cannot be used on floats or footnotes. The
marginnote package supports another command `\marginnote` to create notes in
the margin. This does not use any kind of float and therefore does not have
the disadvantage of `\marginpar`. But there are other disadvantages, which are
either noted in the user manual or in the issue tracker.

The `marginnote` package originated from a question on the
[TeX-D-L](https://www.listserv.dfn.de/sympa/info/tex-d-l) mailing list and a
few macros that I had created shortly before for a book project. The package
was marked as experimental from the start. A new maintainer is being sought,
so there is currently very limited to no support. An alternative would be, for
example, the package [`marginalia`](https://www.ctan.org/pkg/marginalia).

Thanks to the contribution of Ulrike Fischer, `marginnote` now supports
**PDF tagging** starting with version 1.5.

The package is hosted on
[Codeberg](https://codeberg.org/komascript/marginnote). Further information
can be found in [the CTAN catalog entry](https://www.ctan.org/pkg/marginnote).
