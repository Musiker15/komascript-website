---
title: "longtwocolumn"
description: "Bietet mit \\longtwocolumn eine Variante von \\twocolumn, deren einspaltiger Inhalt über mehrere Seiten umbrochen werden darf."
order: 30
category: "other"
tags: []
---

Das Paket `longtwocolumn` entstand als Ergebnis einer Anfrage. Es bietet mit
der Anweisung `\longtwocolumn` eine Variante von LaTeX's `\twocolumn`, die es
erlaubt, dass der einspaltige Inhalt des optionalen Arguments über
mehrere Seiten umbrochen wird. Entstanden ist es quasi auf Zuruf eines
langjährigen KOMA-Script-Anwenders.

Das Paket wird auf
[GitLab](https://gitlab.com/latex9343737/packages/longtwocolumn) unter
„[KOMA-Script and Friends](https://gitlab.com/latex9343737)“ gehostet. Weitere
Informationen finden sich im
[CTAN-Katalogeintrag](https://www.ctan.org/pkg/longtwocolumn).

## Verwendung

Geladen wird das Paket wie üblich per:
```latex
\usepackage{longtwocolumn}
```

Anschließend steht die Anweisung `\longtwocolumn[<einspaltiger Inhalt>]` zur
Verfügung, um vergleichbar zur bekannten LaTeX-Anweisung
`\twocolum[<einspaltiger Inhalt>]` auf zweispaltigen Satz
umzuschalten. Wie bei `\twocolumn` wird dabei `<einspaltiger Inhalt>` noch
einspaltig gesetzt, bevor die Umschaltung erfolgt. Während bei `\twocolumn`
der Inhalt des optionalen Arguments aber auch dann nicht auf die nächste oder
ggf. auf mehrere Seiten umbrochen wird, wenn er länger als eine Seite ist,
wird genau das bei `\longtwocolumn` getan.

Manuelle Seitenumbrüche innerhal von `<einspaltiger Inhalt>` mit `\pagebreak`
und `\newpage` sind zwar möglich, ergeben in der Regel aber wenig Sinn, da man
dann auch einfach den Teil vor dem Seitenumbruch vor `\longtwocolumn`
verschieben kann und dann nicht mit den [Einschränkungen](#einschränkungen)
leben muss.

## Beispiel

Das hier gezeigte Beispiel geht auf die an mich gerichtete Anfrage zurück, bei
der in einem Artikel-Dokument mit der Klasse
[`scrartcl`](/de/docs/koma-script#die-koma-script-klassen) die Zusammenfassung zusammen mit dem
Titel einspaltig gesetzt werden und automatisch über zwei Seiten umbrochen
werden sollte.

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

![Dokument mit drei Seiten: Titel + Abstract auf Seite 1&2 einspaltig, Unter dem Abstract beginnt auf Seite 2 der zweispaltige Text](/images/komascript/example-longtwocolumn.png)

Selbstverständlich funktioniert das Paket auch mit anderen Klassen. So kann
beispielsweise im gezeigten Code `scrartcl` auch einfach durch `article`
ersetzt werden.

## Einschränkungen

Es gibt einige Einschränkungen, die `\longtwocolumn` mit `\twocolumn`
gemeinsam hat und die daraus resultieren, dass das optionale Argument in eine
TeX-Box verpackt wird.

* Es sind keine Gleitumgebungen in `<einspaltiger Inhalt>` möglich.
* Es werden keine Fußnoten innerhalb von `<einspaltiger Inhalt>`
  unterstützt. Das bedeutet, dass man zwar `\footnote` verwenden kann, auch
  eine Fußnotenmarkierung angezeigt wird, die Fußnote aber nicht am Ende der
  Seite angezeigt wird.
* Anweisungen zum Setzen der Marken für die Kolumnentitel wie `\markboth` und
  `\markright` haben innerhalb von `<einspaltiger Inhalt>` keine Wirkung.
* `\topskip` wird ignoriert.[^latex]

[^latex]: Dieses lange bekannte Problem von `\twocolumn` wird möglicherweise
    in einem zukünftigen LaTeX-Kern (optional) beseitigt.
