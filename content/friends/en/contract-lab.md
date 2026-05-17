---
title: "contract-lab"
description: "Experimental successor project to contract — currently private."
order: 10
tags: ["experimental"]
---

The package `contract-lab` is currently only an internal experiment. The
background is that since 2026 LaTeX behaves drastically differently when the
command `\DocumentMetadata` is set (before `\documentclass`). Increasingly,
many parts of the LaTeX kernel for class and package authors are then replaced
by the still-evolving
[`latex-lab`](https://www.ctan.org/pkg/latex-lab). The current release can
already differ substantially from the development version
[`latex-lab-dev`](https://www.ctan.org/pkg/latex-lab-dev). As long as this
remains unstable on the kernel side, it does not make sense to publish the
experiment on [CTAN](https://www.ctan.org).

Whether this will eventually result in a package with similar functionality to
[`contract`](/en/friends/contract), something entirely different, or nothing
at all cannot be said at this time. The project is currently hosted *privately*
on [Codeberg](https://codeberg.org/komascript/contract-lab). Access is
restricted to privileged users involved in the development.

<Callout type="info">
This package is experimental and not (yet) publicly available.
</Callout>
