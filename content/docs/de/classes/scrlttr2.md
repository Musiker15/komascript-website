---
title: "scrlttr2 — Briefe"
description: "Die KOMA-Script-Briefklasse mit DIN-, US-, Schweizer-, französischen und japanischen Layouts."
order: 4
category: "Dokumentklassen"
updated: 2026-05-09
---

## Übersicht

`scrlttr2` ist die KOMA-Script-Klasse für **Geschäfts- und Privatbriefe** mit vollem
Layout-Support für verschiedene Länder-Konventionen.

## Minimal-Beispiel (DIN-Brief)

```latex
\documentclass[
  paper=A4,
  fontsize=11pt,
  fromalign=right,
  enlargefirstpage=true
]{scrlttr2}

\LoadLetterOption{DIN}

\setkomavar{fromname}{Max Mustermann}
\setkomavar{fromaddress}{Musterstraße 1\\68535 Edingen-Neckarhausen}
\setkomavar{signature}{Max Mustermann}

\begin{document}

\begin{letter}{%
  Frau Anna Beispiel\\
  Beispielweg 2\\
  10115 Berlin
}
  \setkomavar{subject}{Anfrage zum Produkt XY}

  \opening{Sehr geehrte Frau Beispiel,}

  vielen Dank für Ihr Interesse an unserem Produkt. \dots

  \closing{Mit freundlichen Grüßen}
\end{letter}

\end{document}
```

## Länder-Layouts

```latex
\LoadLetterOption{DIN}         % Deutsche Norm (A4, Sichtfenster)
\LoadLetterOption{DINmtext}    % Deutsche Mitteltexthöhe (kürzere Briefe)
\LoadLetterOption{US}          % US-Letter, US-Anrede
\LoadLetterOption{SN}          % Schweizer Norm
\LoadLetterOption{SNleft}      % Schweizer Norm, linker Adressblock
\LoadLetterOption{NF}          % Französische Norm
\LoadLetterOption{JP}          % Japanisches Layout
```

## Variablen

`scrlttr2` arbeitet mit benannten Variablen statt fester Befehle:

```latex
\setkomavar{fromname}{Max Mustermann}
\setkomavar{fromaddress}{Adresszeilen}
\setkomavar{fromphone}{+49 6203 123456}
\setkomavar{fromemail}{max@example.com}
\setkomavar{place}{Edingen-Neckarhausen}
\setkomavar{date}{12. März 2026}
\setkomavar{subject}{Betreff des Briefes}
\setkomavar{signature}{i.A. Max Mustermann}
```

## Mehrere Briefe in einer Datei

```latex
\begin{letter}{Empfänger A}
  \opening{Sehr geehrte\dots}
  Text \dots
  \closing{Mit freundlichen Grüßen}
\end{letter}

\begin{letter}{Empfänger B}
  \opening{Liebe \dots}
  Text \dots
  \closing{Herzliche Grüße}
\end{letter}
```

<Callout type="tip">
Eigene Brief-Layouts speicherst Du in `.lco`-Dateien (letter class option).
Diese können mit `\LoadLetterOption{meinlayout}` geladen werden.
</Callout>
