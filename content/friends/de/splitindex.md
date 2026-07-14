---
title: "splitindex"
description: "LaTeX-Paket splitidx und Programm splitindex zur Erzeugung mehrerer Indizes ohne die Beschränkung auf 16 offene Schreibdateien."
order: 20
category: "other"
tags: []
---

Das Projekt `splitindex` entstand vor Jahren aufgrund einer Anfrage, wie ich
die Aufteilung des Index der KOMA-Script-Anleitung bewerkstellige. Mit
`makeidx` gibt es in LaTeX ein Standardpaket, um für jedes Dokument
einen Index zu erstellen. Manchmal wird jedoch mehr als ein Index benötigt. Es
gibt verschiedene Pakete mit unterschiedlichen Lösungen und unterschiedlichen
Problemen bei der Erstellung mehrerer Indizes. Das LaTeX Paket
`splitidx` bietet eine weitere Lösung für dieses Problem. Darüber hinaus
ermöglicht `splitidx` die individuelle Anpassung des Satzes und des
Erscheinungsbildes dieser Indixe sowie der Formatierung einzelner
Indexeinträge. Da das klassische TeX, ebenso wie PDFTeX und XeTeX maximal 16
gleichzeitig zum Schreiben geöffnete Dateien unterstützen, bietet `splitidx`
auch dafür eine Lösung. Statt mehrere Dateien gleichzeitig für die Einträge
der unterschiedlichen Indexe zu öffenen, werden alle Einträge in einer Datei
gesammelt und diese dann mit Hilfe des Programms `splitindex`
aufgeteilt. `splitindex` ruft dann auch automatisch für jede dieser Dateien
den gewünschten Index-Prozessor – in der Regel `makeindex` – auf.

Das Project wird auf [Codeberg](https://codeberg.org/komascript/splitindex)
gehosted werden. Weitere Informationen finden sich im
[CTAN-Katalogeintrag](https://www.ctan.org/pkg/splitindex).
