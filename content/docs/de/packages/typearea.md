---
title: "typearea — Satzspiegel"
description: "Automatische Berechnung typografisch optimaler Seitenränder."
order: 1
category: "Pakete"
updated: 2026-05-09
---

## Übersicht

Das **`typearea`-Paket** berechnet den **Satzspiegel** (= das Rechteck, in dem Text steht)
nach klassischen typografischen Regeln. Es ist in allen KOMA-Klassen automatisch geladen,
kann aber auch eigenständig verwendet werden.

## Grundprinzip

Anstatt feste Ränder anzugeben, definierst Du einen **DIV-Faktor**:

```latex
\documentclass[DIV=12]{scrartcl}
```

`typearea` teilt die Seite in `DIV` gleiche Streifen und macht den Satzspiegel
`DIV - 3` Streifen breit. So entstehen harmonische Verhältnisse — z. B. nach dem
**9-Felder-Schema** der Buchgestaltung.

## Empfohlene Werte

| Papier | DIV-Empfehlung | Verwendung |
|---|---|---|
| A4, 10pt | 8–10 | weite Ränder |
| A4, 11pt | 10–12 | Standard |
| A4, 12pt | 12–15 | enger Satzspiegel |
| A5, 10pt | 6–8 | Taschenbuch |

## Automatik

Mit `DIV=calc` (oder `DIV=current`) berechnet `typearea` den optimalen DIV-Wert
basierend auf Papierformat und Schriftgröße:

```latex
\documentclass[DIV=calc]{scrbook}
```

## Bindekorrektur (`BCOR`)

```latex
\documentclass[BCOR=12mm,DIV=calc]{scrbook}
```

Reserviert links (innen) zusätzlich 12 mm für die Bindung, ohne den Satzspiegel
nach rechts zu verschieben.

## Manuelles Setzen

```latex
\areaset[BCOR]{Breite}{Höhe}
\areaset[12mm]{14cm}{22cm}
```

## Eigenständige Nutzung

```latex
\documentclass{article}
\usepackage[DIV=12,BCOR=10mm]{typearea}
```

## Nachträgliche Neuberechnung

Wenn Du die Schriftgröße im Dokument änderst, kannst Du den Satzspiegel neu berechnen lassen:

```latex
\KOMAoptions{fontsize=12pt,DIV=last}
```

`DIV=last` nutzt die letzte verwendete Berechnungsmethode neu.

<Callout type="info">
`typearea` ist eines der häufigsten Argumente *für* KOMA-Script. Selbst wenn Du
sonst beim standardmäßigen `article` bleibst, lohnt es sich, dieses Paket zu nutzen.
</Callout>
