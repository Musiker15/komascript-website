---
title: "Funktionen"
description: "Was kann KOMA-Script? Überblick über die Klassen und Pakete der Sammlung, die Konfiguration per KOMAoption und die Briefvorlagen von scrlttr2."
order: 2
---

KOMA-Script ist keine einzelne Klasse, sondern eine Sammlung aus Dokumentklassen und
Paketen. Diese Seite gibt einen anwenderorientierten Überblick. Die vollständige,
maßgebliche Liste aller Bestandteile findest Du unter
[Die KOMA-Script-Sammlung](/de/docs/koma-script).

<Callout type="warning">
Derzeit unterstützt **keine** der KOMA-Script-Klassen die Verwendung von
`\DocumentMetadata` oder das LaTeX-Tagging. Wenn Du auf getaggte PDFs angewiesen bist,
sind die KOMA-Script-Klassen aktuell nicht die richtige Wahl.
</Callout>

## Dokumentklassen

| Klasse | Ersetzt | Verwendung |
|---|---|---|
| `scrartcl` | `article` | Kurzartikel, Aufsätze, einfache Skripte |
| `scrreprt` | `report` | Mittellange Berichte mit Kapiteln |
| `scrbook`  | `book`    | Bücher, Abschlussarbeiten, Dissertationen |
| `scrlttr2` | `letter`  | Briefe. Die Benutzerschnittstelle unterscheidet sich stark von `letter` |

Je nachdem, welche Drittanbieter-Pakete Du einsetzt, kannst Du die Standardklasse
einfach durch die entsprechende KOMA-Script-Klasse ersetzen.

### Wrapper-Klassen

Weil sich die abgekürzten Namen schlecht merken lassen, gibt es zusätzlich Klassen mit
ausgeschriebenem Namen:

- **`scrarticle`** ist ein Wrapper für `scrartcl`
- **`scrreport`** ist ein Wrapper für `scrreprt`
- **`scrletter`** ist ein Wrapper, der `scrartcl` mit dem Paket `scrletter` kombiniert.
  Sie ist nicht vollständig kompatibel mit `scrlttr2`, bringt aber einige Verbesserungen mit.

## Pakete

Viele Pakete der Sammlung lassen sich auch ohne die KOMA-Script-Klassen verwenden.

### Satzspiegel und Seitenstile

- **`typearea`** berechnet Ränder und Textbereich nach typografischen Gesichtspunkten
- **`scrlayer`** stellt Ebenen bereit und kombiniert sie zu Seitenstilen
- **`scrlayer-scrpage`** bietet darauf aufbauend einfach konfigurierbare Seitenstile für
  Kopf- und Fußzeilen. Eine Alternative zu `fancyhdr`, die auch mit vielen anderen
  Klassen funktioniert
- **`scrlayer-notecolumn`** ist ein Proof of Concept für Ebenen mit `scrlayer` und ein
  Kandidat für die Ausgliederung aus KOMA-Script

### Struktur und Verzeichnisse

- **`tocbasic`** verwaltet Hilfsdateiendungen wie `.lof` oder `.lot`, kümmert sich um das
  Schreiben und Lesen dieser Dateien und stellt zusätzliche Gleitumgebungen,
  nicht gleitende Gegenstücke sowie die Konfiguration von Bildunterschriften bereit
- **`scrbase`** enthält grundlegende Funktionen, die von mehreren Klassen und Paketen der
  Sammlung genutzt werden. Auch für eigene Pakete nützlich
- **`scrextend`** stellt einen Teil der KOMA-Script-Klassenfunktionen für Anwender anderer
  Klassen bereit, insbesondere für die Standardklassen
- **`scrfontsizes`** erzeugt Schriftgrößen-Dateien für KOMA-Script-Klassen oder `scrextend`
- **`scrlfile`** lädt Datei-Hooks. Es kann inzwischen durch die generischen LaTeX-Hooks
  ersetzt werden
- **`scrlogo`** definiert lediglich den Befehl `\KOMAScript`

### Briefe

- **`scrletter`** bietet die Hauptfunktionen von `scrlttr2` als Paket an, das sich mit
  anderen Klassen kombinieren lässt, etwa mit `scrartcl`, `scrreprt`, `scrbook` oder den
  Standardklassen `article`, `report` und `book`
- **`scraddr`** liest `.adr`-Dateien und erlaubt den Zugriff auf die einzelnen Felder der
  Einträge

### Verträge

- **`scrjura`** ist nur noch ein Wrapper, der das ausgegliederte Paket
  [`contract`](/de/friends/contract) mit dem veralteten `scrjura` kompatibel macht

### Kandidaten für die Ausgliederung

Die folgenden Pakete werden noch mit KOMA-Script ausgeliefert, sind in der offiziellen
Übersicht aber ausdrücklich als Kandidaten für die Ausgliederung markiert. Sie existieren
zusätzlich bereits als eigenständige Pakete:

- **`scrdate`** formatiert das heutige Datum im sprachunabhängigen ISO-Format und gibt den
  sprachabhängigen Wochentagsnamen eines beliebigen Datums aus.
  Siehe [`scrdate`](/de/friends/scrdate)
- **`scrtime`** gibt die aktuelle Uhrzeit des LaTeX-Laufs aus.
  Siehe [`scrtime`](/de/friends/scrtime)

<Callout type="note">
`scrhack` ist **kein** Teil der KOMA-Script-Sammlung mehr. Es wurde ausgegliedert, gilt als
veraltet und wird nur noch aus Kompatibilitätsgründen gepflegt. Statt `scrhack` lädst Du
heute gezielt die einzelnen Third-Party-Enhancement-Pakete, die Du wirklich brauchst.
Details dazu auf der Seite [`scrhack`](/de/friends/scrhack).
</Callout>

### Nur intern

Die Sammlung enthält außerdem Klassen und Pakete, die ausschließlich intern verwendet
werden und die Du nicht direkt laden solltest, weil sie sich jederzeit inkompatibel ändern
können: `koma-script-source-doc`, `scrguide`, `scrkbase` sowie die `scrlfile-hook`-Varianten.

## Konfigurierbarkeit

KOMA-Script wird über den `\KOMAoption{}`-Mechanismus konfiguriert. Beispiele:

```latex
\KOMAoption{captions=tableheading}     % Tabellenüberschrift oben
\KOMAoption{parskip=half}              % Halbzeile zwischen Absätzen
\KOMAoption{DIV=12}                    % Engerer Satzspiegel
\KOMAoption{headings=big}              % Größere Kapitelüberschriften
```

## Mehrsprachige Briefe

Die Klasse `scrlttr2` bringt zahlreiche Lokalisierungen mit, jeweils mit passenden
Adressformaten, Datums-Layouts und Anrede-Konventionen:

- **DIN** (Deutschland, A4 mit Sichtfenster)
- **DINmtext** (deutsche Mitteltexthöhe für kurze Briefe)
- **US** (US-Letter, US-Anrede)
- **SN** (Schweizer Norm)
- **SNleft** (Schweizer Norm, linker Adressblock)
- **NF** (französische Norm)
- **JP** (japanisches Layout)

## Ausführliche Dokumentation

Die offizielle KOMA-Script-Dokumentation umfasst über **600 Seiten** in Deutsch (`scrguide`)
und Englisch (`scrguien`) und behandelt alle Klassen, Pakete und Optionen mit zahlreichen
Beispielen.

<Callout type="tip">
Die deutsche Dokumentation rufst Du in der Konsole mit `texdoc scrguide` auf,
die englische mit `texdoc scrguien`.
</Callout>
