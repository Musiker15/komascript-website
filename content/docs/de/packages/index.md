---
title: "Die KOMA-Script-Pakete"
description: "Vollständige Übersicht aller Pakete, die derzeit Teil der KOMA-Script-Sammlung sind."
order: 0
category: "packages"
---

KOMA-Script bringt nicht nur Klassen mit — die Sammlung enthält zudem eine
ganze Reihe von Paketen. Einige davon sind allgemein nützlich, andere nur für
den internen Gebrauch durch die KOMA-Script-Klassen vorgesehen.

## Allgemein nutzbare Pakete

| Paket | Zweck |
|---|---|
| [`typearea`](/de/docs/packages/typearea) | Berechnung von Rändern und Textbereichen auf typografischer Grundlage |
| `scrbase` | Grundlegende Funktionen, die auch für Anwender und andere Paketautoren nützlich sind |
| `scrextend` | Stellt einige KOMA-Script-Klassenfunktionen Anwendern anderer Klassen — vor allem der Standardklassen — bereit |
| `scrlayer` | Ebenen-System für Seitenstile und Seitenstil-Aliase |
| `scrlayer-scrpage` | Einfach konfigurierbare Seitenstile auf Basis von `scrlayer` — Alternative zu `fancyhdr`, auch außerhalb von KOMA-Script |
| `scrletter` | Hauptfunktionen von `scrlttr2` als Paket, kombinierbar mit `scrartcl`, `scrreprt`, `scrbook` oder den Standardklassen |
| `tocbasic` | Verwaltung von Hilfsdateiendungen (`.lof`, `.lot`, …), Gleitumgebungen, Bildunterschriften-Konfiguration und mehr |
| `scrdate` | ISO-Datumsformatierung und sprachabhängige Wochentagsnamen |
| `scrtime` | Formatierung der aktuellen Uhrzeit |
| `scrfontsizes` | Erzeugen von Schriftgrößen-Dateien für KOMA-Script-Klassen oder `scrextend` |
| `scrlogo` | Definition des Befehls `\KOMAScript` |

## Veraltete oder Ausgliederungs-Kandidaten

Die folgenden Pakete sind entweder veraltet oder werden als Kandidaten für
eine Ausgliederung aus KOMA-Script gehandelt:

- **`scraddr`** — Zugriff auf `.adr`-Dateien.
- **`scrdate`**, **`scrtime`** — könnten künftig als eigenständige Projekte
  geführt werden.
- **`scrlayer-notecolumn`** — Proof of Concept für Ebenen mit `scrlayer`.

## Wrapper

- **`scrjura`** — Wrapper, der das ausgegliederte Paket
  [`contract`](/de/friends/contract) mit dem alten Paketnamen kompatibel macht.

## Interne Pakete (nicht für Anwender)

Diese Pakete werden ausschließlich von KOMA-Script intern verwendet und
sollten weder von Anwendern noch von anderen Paketautoren direkt aufgerufen
werden:

- **`scrkbase`** — interne Hilfsfunktionen.
- **`scrlfile`** — Datei-Hooks; kann inzwischen durch generische LaTeX-Hooks
  ersetzt werden.
- **`scrlfile-hook`** — Variante von `scrlfile` für aktuelle LaTeX-Kernel.
- **`scrlfile-hook-3.34`** — Variante für ältere LaTeX-Kernel mit anderer
  Hook-Syntax.
- **`scrlfile-patcholdlatex`** — Variante für LaTeX-Kernel ohne generische
  Hooks.

<Callout type="note">
Die Paketliste basiert auf dem offiziellen KOMA-Script-Projektüberblick und
wird hier in eigenen Worten wiedergegeben. Die Originalquelle ist
[koma-script.sourceforge.io](https://koma-script.sourceforge.io/koma-script/packages/).
</Callout>
