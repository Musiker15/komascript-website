---
title: "scrwfile"
description: "Experimentelles Paket zur Umleitung von \\newwrite-Schreibvorgängen über die .aux-Datei."
order: 4
category: "spin-off"
tags: ["no-maintainer"]
---

Das Paket `scrwfile` ist ein Ableger von KOMA-Script und war bis zur Version
0.1.12 von `scrwfile` bzw. Version 3.38 von KOMA-Script Teil dieser
Sammlung. Es wurde aus KOMA-Script ausgegliedert, da es sich um ein
experimentelles Paket handelt, das nicht mehr offiziell gepflegt wird.

`scrwfile` ist ein LaTeX-Paket, das eine Möglichkeit bietet, alle LaTeX-
`\newwrite`-Befehle, Inhaltsverzeichnisse und sonstige Ausgabedaten über die
LaTeX-`.aux`-Datei zu senden. Der Mechanismus verändert die Funktionsweise von
`\newwrite` und sorgt dafür, dass fast nie die Meldung „`No room for new
\write`" erscheint.

Das Paket wird auf [GitHub](https://github.com/komascript/scrwfile)
gehostet. Weitere Informationen finden sich im
[CTAN-Katalogeintrag](https://www.ctan.org/pkg/scrwfile).

<Callout type="warning">
Für dieses Paket wird ein neuer Maintainer gesucht. Bis dahin gibt es nur
sehr eingeschränkten oder gar keinen Support mehr.
</Callout>
