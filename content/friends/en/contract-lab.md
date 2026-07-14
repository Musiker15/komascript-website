---
title: "contract-lab"
description: "Internal experiment exploring what a contract package could look like on top of the still-evolving latex-lab code."
order: 30
category: "other"
tags: ["experimental"]
---

The `contract-lab` package is currently just an internal experiment. The
reason for this experiment is that, starting in 2026, LaTeX works very
differently when the `\DocumentMetadata` command (placed before
`\documentclass`) is set. An increasing number of parts of the LaTeX
core for class and package authors is then replaced by the
still-under-development [`latex-lab`](https://www.ctan.org/pkg/latex-lab). The current version may already
differ significantly from the current developer version [`latex-lab-dev`](https://www.ctan.org/pkg/latex-lab-dev). As long as the whole thing on the LaTeX core side is
not at least somewhat stable, it seems to make little sense to make the
experiment itself available on [CTAN](https://www.ctan.org).

Whether this will ultimately result in a package with functionality similar to
[`contract`](/en/friends/contract), something completely different, or even nothing at
all, is also impossible to say at this point. Currently the project is hosted
*privately* at
[Codeberg](https://codeberg.org/komascript/contract-lab). Currently, only
privileged users involved in the development have access permission.
