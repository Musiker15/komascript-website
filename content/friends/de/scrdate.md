---
title: "scrdate"
description: "Liefert den Wochentag eines beliebigen Datums, gibt Wochentagsnamen in vielen Sprachen aus und stellt Anweisungen rund um das aktuelle Datum bereit."
order: 10
category: "spin-off"
tags: []
---

Das Paket `scrdate` ist ein Ableger von KOMA-Script und war bis zur Version
3.49.2 von `scrdate` bzw. KOMA-Script Teil dieser Sammlung. Es wurde aus
KOMA-Script ausgegliedert, da es in der Sammlung eher ein Schattendasein führte
und sehr gut unabhängig davon genutzt werden kann.

Ursprünglich bot das Paket `scrdate` nur die Möglichkeit den Namen des
aktuellen Tages auszugeben, wobei unterschiedliche Sprachen unterstützt
werden. Inwischen bietet es darüber hinaus verschiedene Operationen zur
Bestimmung des Wochentags eines beliebigen Datums.

Das Paket wird auf [Codeberg](https://codeberg.org/komascript/scrdate)
gehostet. Weitere Informationen finden Sie im
[CTAN-Katalogeintrag](https://www.ctan.org/pkg/scrdate).

## Verwendung

Geladen wird das Paket wie üblich per:
```latex
\usepackage{scrdate}
```
Optionen werden dabei derzeit keine unterstützt. Insbesondere muss man keine
Sprache angeben, da `scrdate` automatisch die aktive Sprache verwendet,
solange diese kompatibel zu [`babel`](https://www.ctan.org/pkg/babel) konfiguriert wird.

## Anweisungen, die Werte zurückliefern

Die folgenden Anweisungen liefern alle einen Wert zurück. Diesen
Wert kann direkt einem Zähler zugewiesen oder innerhalb von
`\numexpr…\relax` oder `\inteval{…}` verwendet werden kann. Will man das
Ergebnis hingegen als arabische Zahl ausdrucken, so muss `\the` vorangestellt
werden. Der zurückgelieferte Wert ist also vergleichbar zu dem, was
`\value{<Zähler>}` zurückliefert.

**`\CenturyPart{<Jahr>}`**

Diese Anweisung liefert nicht das Jahrhundert, sondern die
Jahrhundertziffern von `<Jahr>`. Im Jahr 2026 würde `\CenturyPart{\year}`
also beispielsweise den Wert 20 ergeben. Um diesen im Dokument auszugeben,
würde man beispielsweise verwenden: `Dieses Dokument wurde im
\inteval{1+\CenturyPart{year}}. Jahrhundert erstellt.`

**`\DecadePart{<Jahr>}`**

Der Name der Anweisung `\DecadePart` ist ebenfalls etwas irreführend, denn
tatsächlich wird nicht das Jahrzehnt ausgegeben, sondern das Jahr ohne die
Jahrhundertziffern. Im Jahr 2026 würde `\DecarePart{\year}` also den Wert 26
ergeben. Um diesen im Dokument auszugeben, würde man beispielsweise
verwenden: `Dieses Dokument wurde im Jahr \the\DecadePart{year} des
\inteval{1+\CenturyPart{year}}. Jahrhunderts erstellt.`

**`\DayNumber{<Jahr>}{<Monat>}{<Tag>}`**

Die Anweisung liefert die Wochentagsnummer eines Datums zurück. Die Nummern
orientieren sich dabei an der amerikanischen Zählweise, also 0=Sonntag,
1=Montag, 2=Dienstag, 3=Mittwoch, 4=Donnerstag, 5=Freitag, 6=Samstag. So
würde beispielsweise

```latex
Der 1. Mai 2027 hat die Wochentagsnummer \the\DayNumber{2027}{5}{1}.
```

die Ausgabe

> Der 1. Mai 2027 hat die Wochentagsnummer 6.

ergeben.

**`\ISODayNumber{<Jahr>-<Monat>-<Tag>}`**

Die Anweisung unterscheidet sich nur dadurch, wie das Datum angegeben
wird. Statt `<Jahr>`, `<Monat>` und `<Tag>` als getrennte Argumente
anzugeben, wird das Datum im ISO-Format als ein einziges Argument
angegeben. Obiges Beispiel wird damit zu:

```latex
Der 1. Mai 2027 hat die Wochentagsnummer \the\ISODayNumber{2027-5-1}.
```

**Hinweis:** In früheren Ausgaben der Anleitung wurde behauptet, dass
innerhalb der Argumente Berechnungen in begrenztem Umfang möglich
sind. Tatsächlich ist dies jedoch so fragil, dass man davon Abstand nehmen
sollte. Will man tatsächlich Berechnungen anstellen, so sollte man diese im
Anschluss an die Ermittlung der Wochentagsnummer vornehmen.

**`\todaysnumber`**

Die Anweisung gibt direkt die Wochentagsnummer des aktuellen Datums
zurück. Dieses wird anhand der TeX-Register `\year`, `\month` und `\day`
ermittelt.

## Wochentage als Namen

Während im vorherigen Abschnitt erklärt wurde, wie man an die Wochentagsnummer
eines Datums gelangt, interessieren sich Anwender in der Regel an den Namen
dieses Wochentags, also beispielsweise „Sonntag”, „Montag“, „Dienstag”,
„Mittwoch“, „Donnerstag”, „Freitag“ oder „Samstag“.

**`\DayNameByNumber{<Wochentagsnummer>}`**

Die Anweisung gibt den Namen des nummerisch angegebenen Wochentags in der
aktuellen Sprache aus, also beispielsweise „Samstag“ für
`\DayNameByNumber{6}`. Natürlich kann das Argument auch das Ergebnis einer
früheren Ermittlung der Wochentagsnummer sein. Beispielsweise würde
`\DayNameByNumber{\ISODayNumber{2027-5-1}}` ebenfalls „Samstag“ ausgeben.

**`\DayName{<Jahr>}{<Monat>}{<Tag>}`**

Die Anweisung gibt direkt den Namen des Wochentags zu einem angegeben Datum
aus. Dies entspricht also
`\DayNameByNumber{\DayNumber{<Jahr>}{<Monat>}{<Tag>}}`, ist aber wesentlich
kürzer und damit angenehmer zu schreiben.

**`\ISODayName{<Jahr>-<Monat>-<Tag>}`**

Die Anweisung unterscheidet sich von `\DayName` in derselben Weise wie sich
`\DayNumber` von `\ISODayNumber` unterscheidet.

## Heute

Mit `\todaysnumber` wurde im Abschnitt [„Anweisungen, die Werte
zurückliefern“](#anweisungen-die-werte-zurückliefern) bereits eine Anweisung
vorgestellt, die sich auf das aktuelle Datum bezieht und die zugehörige
Wochentagsnummer liefert. Es gibt einige weitere Anweisungen, die sich
ebenfalls auf das durch the TeX-Register `\year`, `\month` und `\day`
repräsentierte aktuelle Datum beziehen.

**`\IsoToday`**

Liefert das aktuelle Datum im ISO-Format. Monat und Tag können dabei ein-
oder zweistellig sein. Am 1. Mai 2027 würde also beispielsweise „2027-5-1“
ausgegeben werden.

**`\ISOToday`**

Liefert das aktuelle Datum im ISO-Format, wobei Monat und Tag ggf. durch
führende Nullen auf zwei Ziffern erweitert werden. Am 1. Mai 2027 würde also
beispielsweise „2027-05-01” ausgegeben werden.

**`\todaysname`**

Liefert den Wochentag in der aktuellen Sprache. In Deutsch würde am 1. Mai
2027 also „Samstag” ausgegeben werden.

**`\nameday{<Name>}`**

Genau wie man mit `\date{<Datum>}` die Ausgabe von `\today` auf einen festes
Datum (oder auch einen Fantasiewert) setzen kann, kann man mit
`\nameday{<Name>}` die Ausgabe von `\todaysname` auf eine bestimmte Ausgabe
festnageln. Dabei wird nicht geprüft, ob `<Name>` wirklich ein gültiger
Wochentag ist. So könnte man beispielsweise mit `\nameday{Wochentag}` die
Ausgabe „Wochentag“ erzwingen.

## Sprachen

In der Voreinstellung unterstützt `scrdate` die folgenden Sprachen (in
Klammern sind jeweils die entsprechenden [`babel`](https://www.ctan.org/pkg/babel)-Optionen
angegeben):
Kroatisch (`croatian`), Tschechisch (`czech`), Dänisch (`danish`),
Niederländisch (`dutch`), Englisch (`american`, `australian`, `british`,
`canadian`, `english`, `UKenglish`, `USenglish`), Finnisch (`finnish`),
Französisch (`french`[^deprecated]), Deutsch (`austrian`, `german`,
`naustrian`, `ngerman`, `nswissgerman`, `swissgerman`), Italienisch
(`italien`), Norwegisch (`norsk`), Polnisch (`polish`), Slowakisch (`slovak`),
Spanisch (`spanish`), Schwedisch (`swedish`).

[^deprecated]: Für Französisch werden tatsächlich derzeit noch einige weitere
    Sprachoptionen unterstützt. Zumindest aus [`babel-french`](https://www.ctan.org/pkg/babel-french) wurden
    diese mit Version 4.1a vom 6. Juni 2026 jedoch entfernt. Daher werden sie
    auch für `scrdate` nicht mehr dokumentiert. Die Tage der Unterstützung
    durch `scrdate` sind ebenfalls gezählt.

**`\newdaylanguage{<Sprache>}{<Montag>}{<Dienstag>}{<Mittwoch>}{<Donnerstag>}{<Freitag>}{<Samstag>}{<Sonntag>}`**

Die Anweisung dient der Definition einer neuen Sprache. Das erste Argument
ist dabei die Sprache, wie sie auch vom [`babel`](https://www.ctan.org/pkg/babel)-Paket verwendet
wird. Die restlichen Argument definieren die Namen der sieben Wochentage.

##### Hinweise:

* Derzeit spielt es keine Rolle, ob ein Sprachpaket wie [`babel`](https://www.ctan.org/pkg/babel) vor
  oder nach `scrdate` geladen wird.
* Wenn Sie eine bisher nicht unterstützte Sprache mit Hilfe von
  `\newdaylanguage` für Ihr Dokument verfügbar machen, nutzen Sie bitte den
  [Issue-Tracker](https://codeberg.org/komascript/scrdate/issues) für einen
  Feature-Request. Geben Sie dabei als Titel einfach „New Language Support:
  `<LANGUAGE>`“ und im Text ihre `\newdaylanguage`-Anweisung an. Mehr ist nicht
  erforderlich. In der Regel wird dann bereits die nächste Version von
  `scrdate` allen Anwendern ihren Sprachbeitrag als voreingestellte
  Unterstützung bieten.

## Tagging

Ich wüsste nicht, was bei `scrdate` getaggt werden sollte. Daher betrachte ich
das Paket bezüglich Tagging als vollkommen unkritisch. Sollte jemand anderer
Meinung sein, so kann dazu gerne ein
[Issue](https://codeberg.org/komascript/scrdate/issues) eröffnet werden.
