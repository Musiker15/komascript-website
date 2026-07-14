---
title: "The KOMA-Script Collection"
description: "An overview of the KOMA-Script collection with all its LaTeX classes and packages, plus the project resources hosted on SourceForge."
order: 10
category: "documentation"
---

KOMA-Script is a collection of LaTeX [classes](#the-koma-script-classes) and
[packages](#the-koma-script-packages). The project is hosted at
[SourceForge](https://sourceforge.net/p/koma-script/). You can find there also a
[Wiki](https://sourceforge.net/p/koma-script/_list/wiki) with lots of
information [in English](https://sourceforge.net/p/koma-script/wiki-en/) and
also [in German](https://sourceforge.net/p/koma-script/wiki-de/). Most
importent are [the English “How to”
pages](https://sourceforge.net/p/koma-script/wiki-en/HowTo/) and [the German
“Wie” pages](https://sourceforge.net/p/koma-script/wiki-de/HowTo/). Of course,
there is also an [issue
tracker](https://sourceforge.net/p/koma-script/tickets/) for bug reports and
other issues.

## The KOMA-Script Classes

Here you can find all classes, which are currently part of the KOMA-Script
collection. Some of them are only internal and should not be used directly by
users. Others have a counterpart standard class. Depending on usage of
third-party-packages, you can replace the corresponding standard class by the
KOMA-Script class. But note: Currently neither KOMA-Script class supports the
usage of `\DocumentMetadata` or tagging.

* `scrartcl`: The KOMA-Script article class. This can be uses instead of the
  standard class `article`.
* `scrbook`: The KOMA-Script book class. This can be used instead of the
  standard class `book`.
* `scrreprt`: The KOMA-Script report class. This can be uses instead of the
  standard class `report`.
* `scrlttr2`: The KOMA-Scrpt letter class. The user interface very different
  from the standard class `letter`.
* `scrarticle`: A wrapper to `scrartcl` because several users don't know how
  and why to write `scrartcl`.
* `scrreport`: A wrapper to `scrreprt` because several users don't know and why
  to write `scrreprt`.
* `scrletter`: A wrapper combining `scrartcl` with package `scrletter`. It is
  not fully compatible with `scrlttr2`, but provides some improvements.
* `koma-script-source-doc`: A internal class for source documentation. Users
  should not use it, because it can be changed incompatibely at any time.
* `scrguide`: A internal class used for the user documentation. This class is
  a real mess grown over the years. You should not use it, because it can be
  changed incompatible at any time.

## The KOMA-Script Packages

Here you can find all packages, which are currently part of the KOMA-Script
collection. Some of them are only internal and should not be used directly by
users.

* `scraddr`: Reads `.adr` files and allows accessing the fields of the entries.
* `scrbase`: Basic functions used by several KOMA-Script classes and
  packages. Users and other packages authors may find this package usefull
  too.
* `scrdate`: Formatting of today's date in language independent iso
  format. Printing the language dependent dayname of a given date. This
  package is a candidate for being split off from KOMA-Script.
* `scrextend`: Provides some of the KOMA-Script class features for users of
  other classes, namely the standard classes.
* `scrfontsizes.sty`: Generate font size files to be used with KOMA-Script
  classes or `scrextend`.
* `scrjura`: Wrapper to make package `contract` compatible with the deprecated
  `scrjura` package.
* `scrkbase`: Internal package, that provides features internally used by
  KOMA-Script classes and KOMA-Script packages. Users and other package
  authors should not uses these internal features but the official `scrbase`
  features.
* `scrlayer`: Provides layers and combines them to page styles. Completes the
  so called layer page styles by page style aliases.
* `scrlayer-notecolumn`: Proof of concept for layers with `scrlayer`. This
  package is a candidate for being split off from KOMA-Script.
* `scrlayer-scrpage`: Providing easy configurable page styles based on
  `scrlayer`. This is an alternative to `fancyhdr` not only to be used with
  KOMA-Script classes but with many other classes too.
* `scrletter`: Providing the main features of `scrlttr2` as a package that can
  be combined with others classes, namely `scrartcl`, `scrreprt`, `scrbook` or
  the standard classes `article`, `report`, `book` or derived classes.
* `scrlfile`: Load file hooks (can be replaced by generic LaTeX hooks).
* `scrlfile-hook`: Used by `scrlfile` with up-do-date LaTeX kernel.
* `scrlfile-hook-3.34`: Used by `scrlfile` with old LaTeX kernel, which
  use a different syntax for generic hooks.
* `scrlfile-patcholdlatex`: Used by `scrlfile` with old LaTeX kernel,
  which does not provide generic hooks.
* `scrlogo`: Definition of the `\KOMAScript` command.
* `scrtime`: Formatting of the current time. This package is a candidate for
  being split off from KOMA-Script.
* `tocbasic`: Provides not only management for auxiliary file extensions like
  `.lof`, `.lot` etc., but also how to write to them and read them, extra
  floating environments and corresponding non-floating environment,
  configuration of captions etc.
* `typearea`: Calculation of margins and text area based on typographical
  aspects.
