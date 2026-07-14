---
title: "longtwocolumn"
description: "Provides \\longtwocolumn, a variant of \\twocolumn whose single-column content may span several pages."
order: 30
category: "other"
tags: []
---

The `longtwocolumn` package was created in response to a request. With the
`\longtwocolumn` command, it offers a variant of LaTeX's `\twocolumn` allowing
the single-column content of the optional argument to be splitted across
several pages. Footnotes in the optional argument are not currently supported.

The package is hosted on
[GitLab](https://gitlab.com/latex9343737/packages/longtwocolumn) under
“[KOMA-Script and Friends](https://gitlab.com/latex9343737)”. Further
information can be found in [the CTAN catalog entry](https://www.ctan.org/pkg/longtwocolumn).

## Usage

The package is loaded as usual using:
```latex
\usepackage{longtwocolumn}
```

The command `\longtwocolumn[<single-column content>]` is then available to
switch to two-column typesetting, similar to the familiar LaTeX command
`\twocolumn[<single-column content>]`. As with `\twocolumn`, the
`<single-column content>` is still typeset in a single column before the switch
occurs. However, while with `\twocolumn` the content of the optional argument
is not wrapped to the next page or, if necessary, to multiple pages even if it
is longer than one page, this is exactly what `\longtwocolumn` does.

Manual page breaks with `\pagebreak` or `\newpage` within the
`<single-column content>` are possible, but generally make little sense, since
you can simply move the section before the page break before `\longtwocolumn`
and then avoid having to deal with the [Restrictions](#restrictions).

## Example

The example shown here stems from a request I received to set the abstract and
title in a single column in an article document using the
[`scrartcl`](/en/docs/koma-script#the-koma-script-classes) class, with the text automatically
wrapping across two pages.

```latex
\documentclass[twocolumn,abstract]{scrartcl}
\usepackage{longtwocolumn}
\usepackage{lipsum}
\begin{document}

\title{Long One Column Abstract with Two Column Document}
\author{Markus Kohm}
\longtwocolumn[{%
  \maketitle
  \begin{abstract}
    \lipsum[2-8]
  \end{abstract}
  \vskip\baselineskip
}]
\section{Here we go}
\lipsum[1-7]
\end{document}
```

![Three-page document: Title + Abstract on pages 1 and 2 in a single column; the two-column text begins below the Abstract on page 2](/images/komascript/example-longtwocolumn.png)

Of course, the package also works with other classes. For example, in the code
shown, `scrartcl` can simply be replaced with `article`.

## Restrictions

There are some limitations that `\longtwocolumn` shares with `\twocolumn`,
which result from the fact that the optional argument is being packed into a
TeX box.

* Floating environments are not allowed within `<single-column content>`.
* Footnotes are not supported within `<single-column content>`. This means
  that while you can use `\footnote` and a footnote marker will be displayed,
  the footnote itself will not appear at the bottom of the page.
* Commands for setting column title marks, such as `\markboth` and
  `\markright`, have no effect within `<single-column content>`.
* `\topskip` is ignored.[^latex]

[^latex]: This long-standing issue with `\twocolumn` may be resolved
    (optionally) in a future LaTeX core.
