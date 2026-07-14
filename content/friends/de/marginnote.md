---
title: "marginnote"
description: "Bietet mit \\marginnote eine Randnotiz ohne Float und unterstützt ab Version 1.5 auch PDF-Tagging."
order: 30
category: "other"
tags: ["no-maintainer"]
---

In LaTeX kann der Befehl `\marginpar[⟨left⟩]{⟨right⟩}` verwendet werden,
um eine Randnotiz zu erstellen. Dieser Befehl hat jedoch einen Nachteil: Er
erzeugt eine spezielle Art von *float*. Daher kann er nicht für
Gleitumgebungen oder Fußnoten verwendet werden. Das Paket `marginnote` bietet
einen weiteren Befehl `\marginnote` zum Erstellen von Anmerkungen am
Rand. Dieser verwendet keinerlei *floats* und weist daher nicht die Nachteile
von `\marginpar` auf. Es gibt jedoch andere Nachteile, die entweder im
Benutzerhandbuch oder im Issue-Tracker aufgeführt sind.

Das Paket `marginnote` hat seinen Ursprung in einer Frage auf der Mailingliste
[TeX-D-L](https://www.listserv.dfn.de/sympa/info/tex-d-l) und einigen Makros,
die ich kurz zuvor für ein Buchprojekt erstellt hatte. Das Paket war von
Anfang an als experimentell gekennzeichnet. Es wird ein neuer Maintainer
gesucht, daher gibt es derzeit nur sehr eingeschränkten bis gar keinen
Support. Eine Alternative wäre beispielsweise das Paket
[`marginalia`](https://www.ctan.org/pkg/marginalia).

Dank der Mitwirkung von Ulrike Fischer unterstützt `marginnote` ab Version 1.5
auch **PDF-Tagging**.

Das Paket wird auf [Codeberg](https://codeberg.org/komascript/marginnote)
gehostet. Weitere Informationen finden Sie im
[CTAN-Katalogeintrag](https://www.ctan.org/pkg/marginnote).
