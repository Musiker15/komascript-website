---
title: "scrlttr2 — Letters"
description: "The KOMA-Script letter class with DIN, US, Swiss, French, and Japanese layouts."
order: 4
category: "Document classes"
updated: 2026-05-09
---

## Overview

`scrlttr2` is the KOMA-Script class for **business and private letters** with built-in
support for several country conventions.

## Minimal example (DIN letter)

```latex
\documentclass[
  paper=A4,
  fontsize=11pt,
  fromalign=right
]{scrlttr2}

\LoadLetterOption{DIN}

\setkomavar{fromname}{John Doe}
\setkomavar{fromaddress}{Example Street 1\\68535 City}
\setkomavar{signature}{John Doe}

\begin{document}
\begin{letter}{Recipient Name\\Address Line 1\\10115 Berlin}
  \setkomavar{subject}{Inquiry}
  \opening{Dear Madam,}

  Thank you for your interest \dots

  \closing{Sincerely,}
\end{letter}
\end{document}
```

## Country layouts

```latex
\LoadLetterOption{DIN}         % German standard
\LoadLetterOption{DINmtext}    % German short-letter layout
\LoadLetterOption{US}          % US-Letter
\LoadLetterOption{SN}          % Swiss standard
\LoadLetterOption{SNleft}
\LoadLetterOption{NF}          % French
\LoadLetterOption{JP}          % Japanese
```
