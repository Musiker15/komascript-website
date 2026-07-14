---
title: "komafancychap"
description: "Bildet die Kapitelstile des Pakets fncychap mit den Mitteln der KOMA-Script-Klassen nach."
order: 30
category: "other"
tags: ["experimental"]
---

Ursprünglich entstand der Code des Pakets `komafancychap` als mehrere
Beispieldateien im „KOMA-Script Documentation Project“. Ziel war dabei, die
Kapitelstile des Pakets [`fncychap`](https://www.ctan.org/pkg/fncychap) mit
den Mitteln der KOMA-Script-Klassen nachzubilden. Sinnvoll war das deshalb,
weil das Paket [`fncychap`](https://www.ctan.org/pkg/fncychap) eher zur
Verwendung mit den Standardklassen gedacht ist. Das schränkt die
Verwendbarkeit mit einer KOMA-Script-Klasse stark ein. Darüber hinaus enthält
es typische Fehler im Umgang mit veralteten Schriftauswahlbefehlen.

Das Paket sollte ausdrücklich nur mit einer der KOMA-Script-Klassen
`scrartcl`, `scrbook` oder `scrreprt` verwendet werden. Mit einer
Nicht-KOMA-Script-Klasse verweigert es den Dienst.

Bisher sind die `fncychap` Stile `Sonny`, `Lenny` und `Glenn`
implementiert. Weitere könnten bei Bedarf folgen.

Das Paket wird auf [Codeberg](https://codeberg.org/komascript/komafancychap)
gehosted. Aufgrund seines experimentellen Status findet es sich derzeit wedern
auf [CTAN](https://www.ctan.org) noch in einer gängigen
TeX-Distributionen. Der Anwender muss es also bei Bedarf selbst
installieren. Siehe dazu die verlinkte Projektseite auf Codeberg.
