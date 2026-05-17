---
title: "marginnote"
description: "Marginal notes without the float behaviour of \\marginpar — usable inside floats and footnotes."
order: 18
tags: ["no-maintainer"]
---

In LaTeX, the command `\marginpar[⟨left⟩]{⟨right⟩}` can be used to create a
marginal note. It has one drawback though: it creates a special kind of
*float*. As a result, it cannot be used inside floats or footnotes.

The package `marginnote` provides an additional command `\marginnote` for
creating margin notes. It does not use any floats and therefore avoids the
disadvantages of `\marginpar`. There are however other drawbacks listed
either in the user manual or in the issue tracker.

`marginnote` originated from a question on the
[TeX-D-L](https://www.listserv.dfn.de/sympa/info/tex-d-l) mailing list and
some macros that had been written shortly before for a book project. The
package was flagged as experimental from the start. An alternative is, for
example, the package
[`marginalia`](https://www.ctan.org/pkg/marginalia).

The package is hosted on
[Codeberg](https://codeberg.org/komascript/marginnote). See the
[CTAN catalogue entry](https://www.ctan.org/pkg/marginnote) for more.

<Callout type="warning">
This package is looking for a new maintainer. Support is very limited or no
longer available until one is found.
</Callout>
