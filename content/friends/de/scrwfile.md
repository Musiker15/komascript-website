---
title: "scrwfile"
description: "Leitet alle \\newrite-Ausgaben über die .aux-Datei um, damit die Meldung „No room for new \\write“ praktisch nie erscheint."
order: 10
category: "spin-off"
tags: ["no-maintainer"]
---

Das Paket `scrwfile` ist ein Ableger von KOMA-Script und war bis zur Version
0.1.12 von `scrwfile` bzw. Version 3.38 von KOMA-Script Teil dieser
Sammlung. Es wurde aus KOMA-Script ausgegliedert, da es sich um ein
experimentelles Paket handelt, das nicht mehr offiziell gepflegt wird.

`scrwfile` ist ein LaTeX-Paket, das eine Möglichkeit bietet, alle
LaTeX-`\newrite`-Befehle, Inhaltsverzeichnisse und sonstige
Ausgabedaten über die LaTeX-`.aux`-Datei zu senden. Der Mechanismus
verändert die Funktionsweise von `\newrite` und sorgt dafür, dass fast nie die
Meldung „`No room for new \write`“ erscheint.

Das Paket wird auf [GitHub](https://github.com/komascript/scrwfile)
gehostet. Weitere Informationen finden Sie im
[CTAN-Katalogeintrag](https://www.ctan.org/pkg/scrwfile).
