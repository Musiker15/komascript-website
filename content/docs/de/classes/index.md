---
title: "Die KOMA-Script-Klassen"
description: "Vollständige Übersicht aller Klassen, die derzeit Teil der KOMA-Script-Sammlung sind."
order: 0
category: "classes"
---

KOMA-Script stellt eine ganze Reihe von Dokumentklassen bereit, von denen
einige direkte Entsprechungen zu den Standardklassen `article`, `book` und
`report` sind. Je nach den verwendeten Drittpaketen lassen sich die
Standardklassen meist problemlos durch ihre KOMA-Script-Pendants ersetzen.

<Callout type="info">
Derzeit unterstützt keine der KOMA-Script-Klassen die Verwendung von
`\DocumentMetadata` oder das LaTeX-Tagging. Wer barrierearme PDF-Dokumente
nach PDF/UA-Standard erzeugen muss, sollte das im Auge behalten.
</Callout>

## Hauptklassen

| Klasse | Ersatz für | Zweck |
|---|---|---|
| [`scrartcl`](/de/docs/classes/scrartcl) | `article` | Artikel, kürzere Texte ohne Kapitel |
| [`scrbook`](/de/docs/classes/scrbook) | `book` | Bücher, doppelseitiger Satz, mit Kapiteln |
| [`scrreprt`](/de/docs/classes/scrreprt) | `report` | Berichte, längere Texte mit Kapiteln |
| [`scrlttr2`](/de/docs/classes/scrlttr2) | `letter` | Geschäfts- und Privatbriefe (DIN, US, SN, NF, JP …) |

## Wrapper-Klassen

Weil viele Anwender unsicher sind, wie und warum man `scrartcl` oder
`scrreprt` schreibt, gibt es zusätzlich Wrapper mit ausgeschriebenen Namen:

- **`scrarticle`** — Wrapper für `scrartcl`.
- **`scrreport`** — Wrapper für `scrreprt`.
- **`scrletter`** — Wrapper, der `scrartcl` mit dem Paket `scrletter` kombiniert.
  Nicht vollständig kompatibel mit `scrlttr2`, bietet aber einige Verbesserungen.

## Interne Klassen

Diese Klassen sollten **nicht** von Anwendern verwendet werden, da sie
jederzeit in inkompatibler Weise geändert werden können:

- **`koma-script-source-doc`** — interne Klasse für die Quelldokumentation.
- **`scrguide`** — interne Klasse für das Anwender-Handbuch von KOMA-Script.
  Das Originalprojekt beschreibt sie selbst als „echtes Durcheinander, das
  über die Jahre gewachsen ist".

<Callout type="note">
Die Klassenliste basiert auf dem offiziellen KOMA-Script-Projektüberblick
und wird hier in eigenen Worten wiedergegeben. Die Originalquelle ist
[koma-script.sourceforge.io](https://koma-script.sourceforge.io/koma-script/classes/).
</Callout>
