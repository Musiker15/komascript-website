---
title: "scrtime"
description: "Gibt die aktuelle Uhrzeit des LaTeX-Laufs im Dokument aus, wahlweise im 24- oder 12-Stunden-Format."
order: 10
category: "spin-off"
tags: []
---

Das Paket `scrtime` ist ein Ableger von KOMA-Script und war bis zur Version
3.49.2 von `scrtime` bzw. KOMA-Script Teil dieser Sammlung. Es wurde aus
KOMA-Script ausgegliedert, da es in der Sammlung eher ein Schattendasein führte
und sehr gut unabhängig davon genutzt werden kann.

`scrtime` ist ein LaTeX-Paket, das eine Möglichkeit bietet, um die
aktuelle Uhrzeit des LaTeX-Laufs im Dokument auszugeben. Dies kann
beispielsweise für drafts nützlich sein.

Das Paket wird auf [Codeberg](https://codeberg.org/komascript/scrtime)
gehostet. Weitere Informationen finden Sie im
[CTAN-Katalogeintrag](https://www.ctan.org/pkg/scrtime).

## Verwendung

Geladen wird das Paket wie üblich per:
```latex
\usepackage[<Optionen>]{scrtime}
```
Dabei steht `<Optionen>` für eine oder mehrere der unter
„[Optionen](#optionen)” genannte Option. Die Angabe von `<Optionen>` ist
optional. Man kann `[<Optionen>]` auch komplett weglassen.
Als Besonderheit, kann das Paket auch mit unterschiedlichen Optionen mehrfach
geladen werden, wobei die letzten Einstellungen gewinnen.

## Optionen

**`24h`**

Mit Option `24h` wird die Zeit im 24-Stunden-Format ausgegeben. Die Stunden
werden also von 0 bis 23 Uhr gezählt. Dies ist die Voreinstellung. Die
Option wird also nur benötigt, um eine vorherige Änderung rückgängig zu
machen.

**`12h`**

Dagegen wird bei `12h` das 12-Stunden-Format verwenden. Die Morgenstunden
werden also von 0 bis 11 Uhr, gefolgt von der Mittagsstunde 12 Uhr und den
Nachmittagsstunden von 1 bis 11 Uhr gezählt. Ein Postfix für die
Nachmittagsstunden wird nicht verwendet.

Außer direkt beim Laden des Pakets, wie unter „[Verwendung](#verwendung)”
angegeben, kann man die Optionen auch per Anweisung setzen:
```latex
\scrtimesetup{<Optionen>}
```

## Ausgeben und Setzen der Zeit

**`\thistime[<Trennzeichen>]`**

Die Anweisung gibt die aktuelle Uhrzeit in Stunden und Minuten aus, wobei
Minuten kleine 10 mit einer führenden Null ausgegeben werden, also
beispielsweise 9:09. Ohne das optionale Argument `[<Trennzeichen>]` wird
zwischen den Stunden und Minuten ein Doppelpunkt gesetzt. Dieser kann mit
dem optionalen Argument beliebig ersetzt werden. Beispielsweise kann man mit

```latex
\thistime[']'\mbox{}'
```

die Augabe 9'09" erreichen. Bitte beachten Sie auch die Auswirkungen von
`\settime` auf das optionale Trennzeichen.

**`\thistime*[<Trennzeichen>]`**

Die Sternform `\thistime*` unterscheidet sich von der Variante ohne Stern
lediglich darin, dass Minuten kleiner 10 nicht mit einer führenden Null
versehen werden.

**`\settime{<Zeit>}`**

Die Anweisung setzt die aktuelle Zeit auf genau die als Argument übergebe
Ausgabe. Damit hat das optionale `<Trennzeichen>` der Anweisung
`\thistime` keine Wirkung mehr. Gleichzeitig unterscheiden sich Sternform
und Normalform von `\thistime` dann nicht mehr.

## Tagging

Ich wüsste nicht, was bei `scrtime` getaggt werden sollte. Daher betrachte ich
das Paket bezüglich Tagging als vollkommen unkritisch. Sollte jemand anderer
Meinung sein, so kann dazu gerne ein
[Issue](https://codeberg.org/komascript/scrtime/issues) eröffnet werden.
