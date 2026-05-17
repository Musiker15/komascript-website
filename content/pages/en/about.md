---
title: "About KOMA-Script"
description: "History, goals and philosophy behind KOMA-Script — the modern alternative to the standard LaTeX classes."
order: 1
---

## What is KOMA-Script?

**KOMA-Script** is a comprehensive bundle of classes and packages for **LaTeX**.
It provides highly configurable replacements for the standard document classes
`article`, `report`, and `book`, plus a dedicated letter class `scrlttr2`.

The classes are rooted in European typographic tradition and follow the
recommendations of classical typesetting — adapted to modern LaTeX.

## History

The project started in **1992** — even before the release of **LaTeX 2ε** — when
Markus Kohm ported the *Script2* styles from LaTeX 2.09 to the new class system.
The first public release followed in **1993**. KOMA-Script has continuously
evolved since then, and today is one of the most widely used LaTeX class bundles
worldwide.

Over the years, not only did the features of the KOMA-Script classes grow, but
many additional packages emerged around the bundle. Despite occasional
contributors — for parts of the documentation or for the original letter class —
KOMA-Script has at its core always remained a **one-person show**.

### The Documentation Project

Part of the KOMA-Script ecosystem used to be the **“KOMA-Script Documentation
Project”** (`komascript.de`). Originally launched and funded by Robin Kroha on
Zope, it was one of the first German-language LaTeX forums — long before GitHub
or Codeberg. Later the whole project was migrated to Drupal.

The hope of distributing maintenance across many shoulders did not materialise
in the long run: spam, attacks, and administrative work increasingly landed on
the KOMA-Script author's plate. The forum was eventually closed to community
contributions, and content worth preserving was transferred to the
[SourceForge wiki](https://sourceforge.net/p/koma-script/_list/wiki) —
available in both [German](https://sourceforge.net/p/koma-script/wiki-de/) and
[English](https://sourceforge.net/p/koma-script/wiki-en/).

### Splitting into smaller projects

Since **2018**, KOMA-Script has been progressively split into smaller, standalone
projects. The main goal is to break down the bundle's significant complexity
into manageable pieces — so that, in the long term, the work can be spread
across multiple people. Many of those spin-off packages can be found in the
[Friends](/en/friends) section.

<Callout type="note">
Markus Kohm describes the mission statement of the official KOMA-Script site
in his own words like this:

> “The purpose of this site is to provide information about certain aspects of
> KOMA-Script and my — KOMA's — other projects. The whole thing has more of a
> blog-like character than a wiki. In addition, there are also drafts and
> collections of ideas. The fact that these cannot simply be publicly commented
> on by anyone here is part of the concept.”

— Source: [koma-script.sourceforge.io](https://koma-script.sourceforge.io/)
</Callout>

<Callout type="info">
KOMA-Script is part of most LaTeX distributions — it ships with **TeX Live**,
**MiKTeX**, and **MacTeX** by default. A manual install is usually not needed.
</Callout>

## Documentation

The official KOMA-Script manual is written in **LaTeX** and has been thoroughly
revised multiple times. A special feature of its sources: they produce **both the
free manual and the German *KOMA-Script-Buch*** — only a few additional files
are needed for the book. This dual-output approach leads to some peculiarities
in the LaTeX source.

## Philosophy

KOMA-Script follows three guiding principles:

1. **Configurability without breakage.** Thousands of options allow customisation
   without compromising document structure.
2. **Typographic correctness.** Defaults follow the rules of classical typesetting —
   not the conventions of word processors.
3. **Local adaptability.** Built-in support for German, Swiss, French, US, and Japanese
   conventions.

## Author

KOMA-Script has been developed primarily by **Markus Kohm** for over three decades.
Community contributions are welcome — especially via the spin-off projects on
[GitHub](https://github.com/komascript) and [Codeberg](https://codeberg.org/komascript).

## License

KOMA-Script is released under the **LaTeX Project Public License (LPPL) 1.3c**
and may be freely used, distributed, and modified — as long as the LPPL terms
are respected.
