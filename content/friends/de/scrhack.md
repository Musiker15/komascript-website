---
title: "scrhack"
description: "Loader-Paket für die einzeln ausgelagerten Hacks der ehemaligen KOMA-Script-Erweiterung."
order: 2
category: "spin-off"
tags: ["deprecated"]
---

Das Paket `scrhack` ist ein Ableger von KOMA-Script und war bis zur Version
3.41 von `scrhack` bzw. KOMA-Script Teil dieser Sammlung. Es wurde aus
KOMA-Script entfernt, da es veraltet ist und nur noch aus
Kompatibilitätsgründen verfügbar ist.

Ursprünglich wurde `scrhack` nicht nur entwickelt, um die Kompatibilität von
Drittanbieter-Paketen mit KOMA-Script-Klassen zu verbessern, sondern auch, um
Drittanbieter-Pakete generell zu optimieren. Das Paket bestand nicht nur aus
der Paketdatei `scrhack.sty`, sondern auch aus mehreren sogenannten Hacks als
separate Dateien mit der Endung `.hak`.

Im Zuge der Ausgliederung ehemaliger KOMA-Script-Pakete aus der KOMA-Script-
Sammlung wurde beschlossen, aus den einzelnen Hacks eigenständige Pakete zu
erstellen. Diese neuen eigenständigen Pakete dienen dann als Ersatz für die
ursprünglichen Pakete, die sie verbessern sollten. Um darüber hinaus die
Funktionalität beizubehalten, die Erweiterungen nur dann zu laden, wenn das
entsprechende Originalpaket geladen ist, wurde ein neues `scrhack` erstellt,
das genau dies bewirkt. Der neue `scrhack` benötigt die Pakete
[`floatbytocbasic`](/de/friends/floatbytocbasic),
[`floatrowbytocbasic`](/de/friends/floatrowbytocbasic),
[`lscapeenhanced`](/de/friends/lscapeenhanced),
[`setspaceenhanced`](/de/friends/setspaceenhanced) und
[`standardsectioning`](/de/friends/standardsectioning).

Für neue Dokumente wird empfohlen, nur diejenigen der aufgeführten Pakete zu
laden, die tatsächlich verwendet werden, anstatt `scrhack`.

Das Paket ist Teil der „Third Party Enhancements", die auf
[GitHub](https://github.com/komascript/third-party-enhancements) gehostet
werden. Weitere Informationen finden sich im
[CTAN-Katalogeintrag](https://www.ctan.org/pkg/scrhack).

<Callout type="warning">
Dieses Paket ist veraltet. Es gibt nur noch sehr eingeschränkten oder gar
keinen Support mehr.
</Callout>
