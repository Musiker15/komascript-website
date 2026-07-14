---
title: "DIN letter with letterhead"
description: "Complete DIN letter with a custom letterhead, logo and signature."
order: 2
tags: ["letter", "scrlttr2", "DIN"]
---

## Overview

A complete **DIN letter** with a letterhead graphic, a sender block on the right,
and a signature.

The DIN layout follows the German standard DIN 5008, which defines where the
address field, the fold marks and the reference line sit on the page. `scrlttr2`
ships with several other letter class options as well, so you are not tied to it:
`SN` and `SNleft` (Swiss standard), `NF` (French standard), `US` (US letter
conventions) and `JP` (Japanese conventions). Load the one that matches your
country with `\LoadLetterOption`, everything else in the example stays the same.

## Main document

<LatexExample title="Complete DIN letter" filename="letter.tex">

```latex
\documentclass[
  paper=A4,
  fontsize=11pt,
  fromalign=right,
  fromphone=true,
  fromemail=true,
  fromurl=false,
  enlargefirstpage=true,
  parskip=half
]{scrlttr2}

\LoadLetterOption{DIN}   % other options: US, SN, SNleft, NF, JP

% Recommended compiler: LuaLaTeX, then you need neither inputenc nor fontenc.
\usepackage[english]{babel}
\usepackage{graphicx}

% Sender
\setkomavar{fromname}{John Doe}
\setkomavar{fromaddress}{%
  1 Example Street\\
  68535 Edingen-Neckarhausen
}
\setkomavar{fromphone}{+49 6203 123456}
\setkomavar{fromemail}{john@example.com}
\setkomavar{signature}{John Doe}

% Letterhead with logo (optional)
\setkomavar{firsthead}{%
  \begin{minipage}{0.6\textwidth}
    \includegraphics[width=4cm]{logo.pdf}
  \end{minipage}%
  \begin{minipage}{0.4\textwidth}
    \raggedleft
    \usekomavar{fromname}\\
    \usekomavar{fromaddress}
  \end{minipage}
}

\begin{document}

\begin{letter}{%
  Example Ltd.\\
  Ms Jane Example\\
  2 Sample Road\\
  10115 Berlin
}

  \setkomavar{subject}{Questions about quotation 2026-042}
  \setkomavar{date}{March 12, 2026}

  \opening{Dear Ms Example,}

  thank you for your quotation of March 5. I have reviewed the document and
  would like to ask a few questions:

  \begin{enumerate}
    \item Are the terms of item 3 negotiable?
    \item What delivery time is realistic?
    \item Do you offer volume discounts?
  \end{enumerate}

  I would be glad to receive your reply by the end of the week.

  \closing{Kind regards}

  \ps{P.S.: Please find our order confirmation attached.}

  \encl{Order confirmation\\Terms and conditions}

\end{letter}

\end{document}
```

</LatexExample>

<Callout type="note">
`\LoadLetterOption` reads a letter class option file (`.lco`). Beside the
country layouts you can also write your own `.lco` file, put your letterhead,
your fonts and all `\setkomavar` definitions in there, and reuse it in every
letter. The `fromlogo` variable is handy for that: set it with
`\setkomavar{fromlogo}{\includegraphics[width=4cm]{logo.pdf}}` and the
predefined heads will place it for you, without a custom `firsthead`.
</Callout>

<Callout type="tip">
For **mail merges** with several recipients you can use several `letter`
environments in one document, they all share sender, layout and letterhead.
</Callout>

<Callout type="info">
The `backaddress` option controls the small return address printed above the
recipient in the address window. It is switched on by default in the DIN layout
and can be turned off with `backaddress=false`, or set explicitly with
`\setkomavar{backaddress}`.
</Callout>

<Callout type="info">
More carefully crafted letter templates, including custom letterhead layouts
(`.lco`), can be found in the official KOMA-Script wiki (German):
[sourceforge.net/p/koma-script/wiki-de/HowTo_Template](https://sourceforge.net/p/koma-script/wiki-de/HowTo_Template/)
</Callout>
