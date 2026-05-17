---
title: "floatbytocbasic"
description: "Eigenständige Nachfolge des scrhack-Moduls für das Paket float — bessere Integration mit tocbasic."
order: 12
tags: ["hak"]
---

Das Paket `floatbytocbasic` entstand vor Jahren als Hack-Modul des damaligen
KOMA-Script-Pakets [`scrhack`](/de/friends/scrhack), um ein Problem zu
beheben, das bei der Verwendung des Pakets
[`float`](https://www.ctan.org/pkg/float) mit KOMA-Script 3 auftrat. Dies
wurde notwendig, da `float` immer noch von einer Schnittstelle abhängt, die
einst vom KOMA-Script-Autor vorgeschlagen wurde, die aber längst nicht mehr
den Anforderungen entspricht. Leider konnte dieses Problem im Dialog mit dem
Autor von `float` nicht gelöst werden.

Obwohl `floatbytocbasic` weiterhin das `float`-Paket benötigt, ändert es
einige interne Befehle, um das KOMA-Script-Paket `tocbasic` zu nutzen und
optimal zu unterstützen. Einerseits bleibt die Benutzeroberfläche von `float`
unverändert nutzbar, gleichzeitig profitiert das Paket jedoch von vielen
Möglichkeiten von `tocbasic`, nicht nur bei der Verwendung einer KOMA-Script-
Klasse, sondern auch bei der Verwendung anderer Klassen, beispielsweise der
Standardklassen.

Das Paket ist Teil der „Third Party Enhancements", die auf
[GitHub](https://github.com/komascript/third-party-enhancements) gehostet
werden. Weitere Informationen finden sich im
[CTAN-Katalogeintrag](https://www.ctan.org/pkg/floatbytocbasic).

<Callout type="info">
Es besteht noch immer eine gewisse Hoffnung, dass dieses Paket irgendwann
überflüssig wird — nämlich dann, wenn die Funktionalität vom Maintainer des
jeweiligen Ursprungspakets übernommen wird.
</Callout>
