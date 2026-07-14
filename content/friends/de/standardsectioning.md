---
title: "standardsectioning"
description: "Implementiert die Gliederungsbefehle mit dem Code der Standardklassen, damit Pakete wie titlesec auch mit KOMA-Script-Klassen funktionieren."
order: 20
category: "other"
tags: []
---

Das Paket `standardsectioning` entstand ursprünglich als Hack-Modul des
damaligen KOMA-Script-Pakets [`scrhack`](/de/friends/scrhack), um ein Problem zu
beheben, das bei der Verwendung von Drittpakete wie [`titlesec`](https://www.ctan.org/pkg/titlesec)
zusammen mit KOMA-Script-Klassen auftreten kann.

Vor langer Zeit war KOMA-Script mehr oder weniger nur eine Sammlung von
Ersatzklassen für die drei Standardklassen `article`, `book` und `report`. Das
Ersetzen einer Standardklasse durch eine KOMA-Script-Klasse war einfach,
selbst wenn Benutzer viele zusätzliche Pakete verwendeten. Im Laufe der Jahre
hat der Autor den Klassen viele neue Funktionen und Benutzerschnittstellen
hinzugefügt. Dies führte auch zu einer völlig anderen Implementierung der
Abschnittsbefehle. Einige Pakete sind jedoch auf eine Implementierung
angewiesen, die den Standardklassen entspricht.

Das Paket `standardsectioning` implementiert diese Befehle mit dem Code der
Standardklassen und deaktiviert zudem Teile der
KOMA-Script-Benutzeroberfläche, die bei diesen Änderungen nicht verwendet
werden sollten. Dabei handelt es sich mehr oder weniger um alle Befehle zur
Konfiguration der Abschnittsbefehle. Außerdem werden einige interne Makros von
KOMA-Script zurückgesetzt.

Das Paket ist Teil der „Third Party Enhancements“, die auf
[GitHub](https://github.com/komascript/third-party-enhancements) gehosted
werden. Weitere Informationen finden sich im
[CTAN-Katalogeintrag](https://www.ctan.org/pkg/standardsectioning).
