---
title: "DIN-Brief mit Briefkopf"
description: "Vollständiger DIN-Brief mit eigenem Briefkopf, Logo und Signatur."
order: 2
tags: ["letter", "scrlttr2", "DIN"]
---

## Übersicht

Ein vollständiger **DIN-Brief** mit Briefkopf-Grafik, Absender-Block rechts und
einer Signatur.

## Hauptdokument

<LatexExample title="Vollständiger DIN-Brief" filename="brief.tex">

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

\LoadLetterOption{DIN}

% Empfohlener Compiler: LuaLaTeX — dann brauchst Du weder inputenc noch fontenc.
\usepackage[ngerman]{babel}
\usepackage{graphicx}

% Absender
\setkomavar{fromname}{Max Mustermann}
\setkomavar{fromaddress}{%
  Musterstraße 1\\
  68535 Edingen-Neckarhausen
}
\setkomavar{fromphone}{+49 6203 123456}
\setkomavar{fromemail}{max@example.com}
\setkomavar{signature}{Max Mustermann}

% Briefkopf-Logo (optional)
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
  Anna Beispiel GmbH\\
  Frau Anna Beispiel\\
  Beispielweg 2\\
  10115 Berlin
}

  \setkomavar{subject}{Anfrage zum Angebot 2026-042}
  \setkomavar{date}{12.~März 2026}

  \opening{Sehr geehrte Frau Beispiel,}

  vielen Dank für Ihr Angebot vom 5.~März. Ich habe das Dokument geprüft und
  habe folgende Rückfragen:

  \begin{enumerate}
    \item Sind die Konditionen aus Position 3 verhandelbar?
    \item Welche Lieferzeit ist realistisch?
    \item Gibt es Mengenrabatte?
  \end{enumerate}

  Über eine Antwort bis Ende der Woche würde ich mich freuen.

  \closing{Mit freundlichen Grüßen}

  \ps{P.S.: Anbei finden Sie unsere Auftragsbestätigung.}

  \encl{Auftragsbestätigung\\AGB}

\end{letter}

\end{document}
```

</LatexExample>

<Callout type="tip">
Für **Serienbriefe** mit mehreren Empfängern kannst Du mehrere `letter`-Umgebungen
in einem Dokument verwenden — alle teilen sich Absender, Layout und Briefkopf.
</Callout>

<Callout type="info">
Weitere durchdachte Brief-Vorlagen — inklusive eigener Briefkopf-Layouts (`.lco`) —
findest Du im offiziellen KOMA-Script-Wiki:
[sourceforge.net/p/koma-script/wiki-de/HowTo_Template](https://sourceforge.net/p/koma-script/wiki-de/HowTo_Template/)
</Callout>
