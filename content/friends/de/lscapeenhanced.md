---
title: "lscapeenhanced"
description: "Eigenständige Nachfolge des scrhack-Moduls für das Paket lscape — Fix für \\textheight/\\textwidth auf Querseiten."
order: 16
tags: ["hak"]
---

Das Paket `lscapeenhanced` entstand vor Jahren als Hack-Modul des damaligen
KOMA-Script-Pakets [`scrhack`](/de/friends/scrhack), um ein Problem zu
beheben, das bei der Verwendung des Pakets
[`lscape`](https://www.ctan.org/pkg/lscape) mit den KOMA-Script-Paketen
`scrlayer` oder `scrlayer-scrpage` auftrat. Hintergrund ist eine etwas
ungünstige Handhabung von `\textheight` bzw. `\textwidth` auf Landscape-Seiten
durch `lscape`. Das führt nicht nur zu Problemen mit KOMA-Script, sondern auch
mit anderen Paketen, beispielsweise
[`showframe`](https://www.ctan.org/pkg/showframe).

Das Paket `lscapeenhanced` löst dieses Problem. Es handelt sich um eine sehr
kleine Änderung, die idealerweise vom Autor von `lscape` selbst — zumindest
optional — in sein Paket eingebaut würde. Die Benutzerschnittstelle von
`lscape` bleibt dabei unverändert.

Zusätzlich bietet `lscapeenhanced` eine Option, um `pdflscape` statt `lscape`
zu laden. Dadurch muss zur Verwendung der Funktionalität von `pdflscape` nicht
sowohl `lscapeenhanced` als auch `pdflscape` geladen werden, sondern nur noch
`lscapeenhanced` mit Option `pdflscape`.

Das Paket ist Teil der „Third Party Enhancements", die auf
[GitHub](https://github.com/komascript/third-party-enhancements) gehostet
werden. Weitere Informationen finden sich im
[CTAN-Katalogeintrag](https://www.ctan.org/pkg/lscapeenhanced).

<Callout type="info">
Es besteht noch immer eine gewisse Hoffnung, dass dieses Paket irgendwann
überflüssig wird — nämlich dann, wenn die Funktionalität vom Maintainer des
jeweiligen Ursprungspakets übernommen wird.
</Callout>
