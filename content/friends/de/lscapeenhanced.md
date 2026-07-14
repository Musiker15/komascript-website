---
title: "lscapeenhanced"
description: "Korrigiert die Handhabung von \\textheight und \\textwidth des Pakets lscape auf Landscape-Seiten und kann optional pdflscape laden."
order: 20
category: "enhancement"
tags: []
---

Das Paket `lscapeenhanced` entstand vor Jahren als Hack-Modul des damaligen
KOMA-Script-Pakets [`scrhack`](/de/friends/scrhack), um ein Problem zu beheben, das bei
der Verwendung des Pakets [`lscape`](https://www.ctan.org/pkg/lscape) mit den KOMA-Script-Paketen
`scrlayer` oder `scrlayer-scrpage` auftrat. Dies wurde notwendig, da das Paket
`lscape` eine etwas ungünstige Handhabung von `\textheight` bzw. `\textwidth`
auf Landscape-Seiten an den Tag legt. Das führt nicht zur zu Problemen mit
KOMA-Script sondern auch mit anderen Paketen, beispielsweise
[`showframe`](https://www.ctan.org/pkg/showframe). Das Paket `lscapeenhanced` löst dieses Problem. Das ist eine
wirklich sehr kleine Änderung und es wäre am besten, wenn der Autor von
`lscape` diese zumindest optional in sein Paket einbauen würde. Die
Benutzerschnittstelle von `lscape` bleibt dabei unverändert.

Zusätzlich bietet `lscapeenhanced` eine Option, um `pdflscape` statt `lscape`
zu laden. Dadurch muss zur Verwendung der Funktionalität von `pdflscape` nicht
sowohl das Paket `lscapeenhanced` als auch Paket `pdflscape` geladen werden,
sondern nur noch das Paket `lscapeenhanced` mit Option `pdflscape`.

Das Paket ist Teil der „Third Party Enhancements“, die auf
[GitHub](https://github.com/komascript/third-party-enhancements) gehosted
werden. Weitere Informationen finden sich im
[CTAN-Katalogeintrag](https://www.ctan.org/pkg/lscapeenhanced).
