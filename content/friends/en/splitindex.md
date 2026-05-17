---
title: "splitindex"
description: "The LaTeX package splitidx plus the splitindex program for producing multiple indexes without hitting TeX's file handle limit."
order: 20
tags: []
---

The project `splitindex` came about years ago because someone asked how the
KOMA-Script manual splits its index across several indexes. `makeidx` is the
standard LaTeX package for producing a single index per document. Sometimes,
however, more than one index is needed. Various packages exist with different
approaches and different drawbacks for multi-index production.

The LaTeX package `splitidx` is one more solution to this problem. In
addition, `splitidx` allows individual customisation of the typesetting and
appearance of each index, as well as of the formatting of individual index
entries.

Because classical TeX, PDFTeX, and XeTeX support at most 16 simultaneously
open write streams, `splitidx` also offers a solution for that. Instead of
opening multiple files at the same time for the entries of the different
indexes, all entries are collected into a single file and then split up using
the `splitindex` program. `splitindex` also automatically invokes the desired
index processor — typically `makeindex` — for each of those files.

The project is hosted on
[Codeberg](https://codeberg.org/komascript/splitindex). See the [CTAN
catalogue entry](https://www.ctan.org/pkg/splitindex) for more.
