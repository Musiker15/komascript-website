---
title: "Funktionen"
description: "Was kann KOMA-Script? Eine ausführliche Übersicht der wichtigsten Klassen, Pakete und Features."
order: 2
---

## Dokumentklassen

| Klasse | Ersetzt | Verwendung |
|---|---|---|
| `scrartcl` | `article` | Kurzartikel, Aufsätze, einfache Skripte |
| `scrreprt` | `report` | Mittellange Berichte mit Kapiteln |
| `scrbook`  | `book`    | Bücher, Diplom-/Doktorarbeiten |
| `scrlttr2` | `letter`  | Geschäfts- und Privatbriefe (DIN, US, Schweiz, F, JP) |

## Pakete

KOMA-Script enthält außerdem eigenständig nutzbare Pakete:

- **`typearea`** — automatische Berechnung des Satzspiegels nach klassischer Typografie
- **`scrlayer`** / **`scrlayer-scrpage`** — vollständig in KOMA-Script integriertes
  Layer-System für Kopf- und Fußzeilen. Etablierte Alternative zu `fancyhdr`.
- **`tocbasic`** — Basis für Inhalts- und ähnliche Verzeichnisse
- **`scrbase`** — fundamentale Hilfsmittel (auch ohne KOMA-Klassen nutzbar)
- **`scrdate`**, **`scrtime`** — Datums- und Zeitformatierung mit Lokalisierung
- **`scrhack`** — Kompatibilitäts-Patches (deprecated, ersetzt durch *third-party-enhancements*)

## Konfigurierbarkeit

KOMA-Script wird über den `\KOMAoption{}`-Mechanismus konfiguriert. Beispiele:

```latex
\KOMAoption{captions=tableheading}     % Tabellenüberschrift oben
\KOMAoption{parskip=half}              % Halbzeile zwischen Absätzen
\KOMAoption{DIV=12}                    % Engerer Satzspiegel
\KOMAoption{headings=big}              % Größere Kapitelüberschriften
```

## Mehrsprachige Briefe

Die Klasse `scrlttr2` unterstützt zahlreiche Lokalisierungen mit lokalspezifischen
Adressformaten, Datum-Layouts und Anrede-Konventionen:

- **DIN** (Deutschland — A4 mit Sichtfenster)
- **DINmtext** (Deutsche Mitteltexthöhe für kurze Briefe)
- **US** (US-Letter, US-Anrede)
- **SN** (Schweizer Norm)
- **SNleft** (Schweizer Norm, linker Adressblock)
- **NF** (Französische Norm)
- **JP** (Japanisches Layout)

## Ausführliche Dokumentation

Die offizielle KOMA-Script-Dokumentation umfasst über **600 Seiten** in Deutsch (`scrguide`)
und Englisch (`scrguien`) und behandelt alle Klassen, Pakete und Optionen mit zahlreichen
Beispielen.

<Callout type="tip">
Die deutsche Dokumentation rufst Du in der Konsole mit `texdoc scrguide` auf,
die englische mit `texdoc scrguien`.
</Callout>
