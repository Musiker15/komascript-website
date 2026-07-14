---
title: "floatrowbytocbasic"
description: "Makes the floatrow package use KOMA-Script's tocbasic, fixing its outdated interface while keeping the floatrow user interface unchanged."
order: 20
category: "enhancement"
tags: []
---

The Package `floatrowbytocbasic` has started as hack module of the former
KOMA-Script package [`scrhack`](/en/friends/scrhack) years ago to fix an issue when
using package [`floatrow`](https://www.ctan.org/pkg/floatrow) with KOMA-Script 3. This became necessary
because package `floatrow` still depends on an interface once proposed by the
KOMA-Script author, but which has long since failed to meet
requirements. Unfortunately, this problem could not be solved in dialog with
the author of `floatrow`. Although `floatrowbytocbasic` still requires the
`floatrow` package, it then changes some internal commands to use and
optimally support the KOMA-Script package `tocbasic`. On the one hand, the
user interface of `floatrow` remains usable unchanged, but at the same time
the package benefits from many possibilities of `tocbasicrow` not only when
using a KOMA-Script class, but also when using other classes, such as the
standard classes.

The package is part of the “Third Party Enhancements” hosted on
[GitHub](https://github.com/komascript/third-party-enhancements). Further
information can be found in [the CTAN catalog entry](https://www.ctan.org/pkg/floatrowbytocbasic).
