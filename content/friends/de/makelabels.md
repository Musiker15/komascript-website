---
title: "makelabels"
description: "LCO-Datei, die scrlttr2 und scrletter um \\makelabels für Adress-Etiketten erweitert."
order: 17
tags: []
---

Das Projekt `makelabels` ist das Ergebnis einer Supportanfrage im ehemaligen
Forum unter [komascript.de](https://komascript.de). Im Gegensatz zur
Standard-Brief-Klasse `letter` bieten die KOMA-Script-Brief-Klasse `scrlttr2`
und das KOMA-Script-Brief-Paket `scrletter` keine Erstellung einer
Beschriftungsseite mit `\makelabels`.

KOMA-Script bietet jedoch die Möglichkeit, neue Brief-Funktionen mithilfe von
LCO-Dateien hinzuzufügen. `makelabels.lco` ist eine solche LCO-Datei. Sie
stellt `\makelabels` ähnlich wie die Standard-Brief-Klasse bereit. Das neue
`\makelabels` verfügt über eine noch sehr rudimentäre Konfigurierbarkeit,
bietet jedoch weit mehr als die Standard-Brief-Klasse. Es ist jedoch auch so
weit kompatibel, dass Pakete wie [`envlab`](https://www.ctan.org/pkg/envlab)
verwendet werden können.

Ab Version 1.0 wird `makelabels.lco` unter Verwendung der [L3-Programmierschicht
des LaTeX-Kernels](https://www.ctan.org/pkg/l3kernel) implementiert.

Das Projekt wird auf [GitHub](https://github.com/komascript/makelabels)
gehostet. Weitere Informationen finden sich im
[CTAN-Katalogeintrag](https://www.ctan.org/pkg/makelabels).
