---
title: "splitindex"
description: "The LaTeX package splitidx and the index preprocessor splitindex allow any number of indexes without running out of write registers."
order: 30
category: "other"
tags: []
---

The `splitindex` project originated years ago in response to a question about
how I manage the splitting of the index for the KOMA-Script manual. With
`makeidx`, LaTeX provides a standard package for creating an index for
each document. Sometimes, however, more than one index is needed. There are
various packages offering different solutions, each with their own problems
when creating multiple indexes. The LaTeX package `splitidx` offers
another solution to this problem. Furthermore, `splitidx` allows for the
individual customization of the typesetting and appearance of these indexes,
as well as the formatting of individual index entries. Since classical TeX, as
well as PDFTeX and XeTeX, support a maximum of 16 files open for writing at
the same time, `splitidx` also offers a solution. Instead of opening multiple
files simultaneously for the entries of the different indexes, all entries are
collected in a single file and then split using the `splitindex` program.
`splitindex` then automatically calls the desired index processor—usually
`makeindex`— for each of these files.

The project will be hosted on
[Codeberg](https://codeberg.org/komascript/splitindex). Further information
can be found in the [CTAN catalog entry](https://www.ctan.org/pkg/splitindex).
