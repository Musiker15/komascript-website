---
title: "FAQ"
description: "Antworten auf häufig gestellte Fragen rund um KOMA-Script."
order: 5
---

## Allgemein

### Wofür steht „KOMA-Script"?

Der Name leitet sich schlicht vom Namen des Autors **KO**hm **MA**rkus ab —
kombiniert mit *Script*, dem Vorgänger-Paket aus dem Markus die heutigen
KOMA-Script-Klassen entwickelt hat.

### Warum sollte ich KOMA-Script statt der Standardklassen nutzen?

Standardklassen wie `article`, `report` und `book` wurden in den 1980er Jahren entworfen
und folgen primär anglo-amerikanischen Typografie-Konventionen. KOMA-Script bietet:

- besser europäisch / deutsch-typografisch eingestellte Defaults,
- deutlich mehr Konfigurationsmöglichkeiten,
- intelligentere Satzspiegel-Berechnung über `typearea`,
- moderne Briefklasse `scrlttr2`.

### Ist KOMA-Script kompatibel mit Paket X?

In den allermeisten Fällen ja. KOMA-Script ist seit über 30 Jahren ausgereift und
kompatibel zu praktisch allen verbreiteten LaTeX-Paketen.

## Technisch

### Wie wechsle ich die Schriftgröße?

```latex
\documentclass[fontsize=11pt]{scrartcl}
```

Größen von 8pt bis 36pt sind unterstützt — und werden automatisch zu konsistenten
Schriftgrößen-Abstufungen.

### Wie passe ich den Satzspiegel an?

```latex
\documentclass[DIV=12]{scrbook}    % DIV-Faktor (Zahl)
\documentclass[DIV=calc]{scrbook}  % automatisch berechnen
```

### Wie ändere ich Kapitelüberschriften?

KOMA-Script bietet umfangreiche Optionen:

```latex
\KOMAoption{headings=big}          % Standard
\KOMAoption{headings=small}        % kleinere Überschriften
\KOMAoption{numbers=enddot}        % Punkte hinter Nummerierung
\addtokomafont{chapter}{\rmfamily} % Antiqua statt Grotesk
```

## Briefe

### Welches Briefformat soll ich nutzen?

```latex
\documentclass[paper=A4,fromalign=right,fontsize=11pt]{scrlttr2}
\LoadLetterOption{DIN}             % deutsche Norm mit Sichtfenster
```

Für andere Länder: `US`, `SN` (Schweiz), `NF` (Frankreich), `JP` (Japan).

## Hilfe

### Wo finde ich die offizielle Dokumentation?

```bash
texdoc scrguide   # Deutsch
texdoc scrguien   # Englisch
```

### Wo bekomme ich Hilfe bei einem konkreten Problem?

[TeX Stack Exchange](https://tex.stackexchange.com/questions/tagged/koma-script) —
mit dem Tag `koma-script`. Vergiss nicht ein **MWE** (minimales kompilierbares Beispiel)!
