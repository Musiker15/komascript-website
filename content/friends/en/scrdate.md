---
title: "scrdate"
description: "KOMA-Script spin-off that determines and prints weekday names and weekday numbers for any date, with support for many languages."
order: 10
category: "spin-off"
tags: []
---

The `scrdate` package is a spin-off of KOMA-Script and was part of that
collection up to version 3.49.2 of `scrdate` and KOMA-Script. It was separated
from KOMA-Script because it tended to be overlooked within the collection and
works very well on its own.

Originally, the `scrdate` package only allowed users to display the name of
the current day, with support for multiple languages. It now also offers
various functions for determining the day of the week for any given date.

The package is hosted on
[Codeberg](https://codeberg.org/komascript/scrdate). For more information, see
the [CTAN catalog entry](https://www.ctan.org/pkg/scrdate).

## Usage

The package is loaded as usual using:
```latex
\usepackage{scrdate}
```
No options are currently supported. In particular, you do not need to
specify a language, since `scrdate` automatically uses the active language,
as long as it is configured to be compatible with
[`babel`](https://www.ctan.org/pkg/babel).

## Commands that Return Values

The following commands all return a value. This value can be assigned directly
to a counter or used within `\numexpr…\relax` or `\inteval{…}`. However, if
you want to print the result as an Arabic numeral, you must prefix it with
`\the`. The returned value is therefore comparable to what `\value{<counter>}`
returns.

**`\CenturyPart{<year>}`**

This command does not return the century name, but rather the digits of the
century for `<year>`. In the year 2026, for example, `\CenturyPart{year}`
would return the value 20. To display this in the document, you could use
the following with the [`engord` package](https://www.ctan.org/pkg/engord):
```latex
This document was created in the \engordnumber{\inteval{1+\CenturyPart{year}}} century.
```

**`\DecadePart{<year>}`**

The name of the command `\DecadePart` is also somewhat misleading, because
it does not actually output the decade, but rather the year without the
century digits. In the year 2026, `\DecadePart{year}` would therefore return
the value 26. To output this in the document, one would, for example, use
the following with the [`engord` package](https://www.ctan.org/pkg/engord):
```latex
This document was created in the year \the\DecadePart{year} of the \engordnumber{\inteval{1+\CenturyPart{year}}} century.
```

**`\DayNumber{<year>}{<month>}{<day>}`**

This command returns the weekday number for a given date. The numbers follow
the American numbering system, where 0 = Sunday, 1 = Monday, 2 = Tuesday, 3
= Wednesday, 4 = Thursday, 5 = Friday, and 6 = Saturday. For example,
```latex
May 1, 2027 has the weekday number \the\DayNumber{2027}{5}{1}.
```
  would produce the output:
> May 1, 2027 has the weekday number 6.

**`\ISODayNumber{<year>-<month>-<day>}`**

The only difference in this command is how the date is specified. Instead of
providing `<year>`, `<month>`, and `<day>` as separate arguments, the date
is specified in ISO format as a single argument. The example above becomes:
```latex
May 1, 2027 has the weekday number \the\ISODayNumber{2027-5-1}.
```

**Note:** Earlier versions of this guide stated that limited calculations are
possible within the arguments. In reality, however, this approach is so
unreliable that it should be avoided. If you do need to perform calculations,
they should be done after determining the weekday number.

**`\todaysnumber`**

This command directly returns the day-of-the-week number for the current
date. This is determined using the TeX registers `\year`, `\month`, and
`\day`.

## Name of a Weekday

While the previous section explained how to determine the day-of-the-week
number for a date, users are generally interested in the name of that day of
the week—for example, “Sunday,” “Monday,” “Tuesday,” “Wednesday,” “Thursday,”
“Friday,” or “Saturday.”

**`\DayNameByNumber{<day-of-the-week number>}`**

This command outputs the name of the numerically specified day of the week
in the current language, for example, “Saturday” for
`\DayNameByNumber{6}`. Of course, the argument can also be the result of a
previous determination of the day of the week number. For example,
`\DayNameByNumber{\ISODayNumber{2027-5-1}}` would also output “Saturday”.

**`\DayName{<year>}{<month>}{<day>}`**

This command directly outputs the name of the day of the week for a
specified date. It is equivalent to
`\DayNameByNumber{\DayNumber{<year>}{<month>}{<day>}}`, but is much shorter
and therefore easier to write.

**`\ISODayName{<year>-<month>-<day>}`**

This command differs from `\DayName` in the same way that `\DayNumber` differs from `\ISODayNumber`.

## Today

In the section [“Commands that return values”](#commands-that-return-values),
we already introduced `\todaysnumber`, a command that refers to the current
date and returns the corresponding weekday number. There are several other
commands that also refer to the current date, as represented by the TeX
registers `\year`, `\month`, and `\day`.

**`\IsoToday`**

Returns the current date in ISO format. The month and day can be one or two
digits long. For example, on May 1, 2027, the output would be “2027-5-1”.

**`\ISOToday`**

Returns the current date in ISO format, with the month and day padded with
leading zeros to two digits if necessary. For example, on May 1, 2027,
“2027-05-01” would be returned.

**`\todaysname`**

Returns the day of the week in the current language. In English, for
example, “Saturday” would be returned on May 1, 2027.

**`\nameday{<Name>}`**

Just as you can use `\date{<Date>}` to set the output of `\today` to a
specific date (or even a fictional value), you can use `\nameday{<Name>}` to
pin the output of `\todaysname` to a specific value. This does not check
whether `<Name>` is actually a valid day of the week. For example, you could
use `\nameday{Wochentag}` to force the output to be “Wochentag”.

## Language Support

By default, `scrdate` supports the following languages (the corresponding
[`babel`](https://www.ctan.org/pkg/babel) options are listed in parentheses): Croatian (`croatian`),
Czech (`czech`), Danish (`danish`), Dutch (`dutch`), English (`american`,
`australian`, `british`, `canadian`, `english`, `UKenglish`, `USenglish`),
Finnish (`finnish`), French (`french`[^deprecated]), German (`austrian`,
`german`, `naustrian`, `ngerman`, `nswissgerman`, `swissgerman`), Italian
(`italien`), Norwegian (`norsk`), Polish (`polish`), Slovak (`slovak`),
Spanish (`spanish`), Swedish (`swedish`).

[^deprecated]: For French, a few additional language options are actually
    still supported at this time. However, these were removed from
    [`babel-french`](https://www.ctan.org/pkg/babel-french) as of version 4.1a on June 6, 2026.
    Therefore, they are no longer documented for `scrdate` either. The days of
    support for `scrdate` are also numbered.

**`\newdaylanguage{<language>}{<Monday>}{<Tuesday>}{<Wednesday>}{<Thursday>}{<Friday>}{<Saturday>}{<Sunday>}`**

This command is used to define a new language. The first argument is the
language, as used by the [`babel`](https://www.ctan.org/pkg/babel) package. The remaining arguments
define the names of the seven days of the week.

##### Notes:

* Currently, it doesn't matter whether a language package such as
  [`babel`](https://www.ctan.org/pkg/babel) is loaded before or after
  `scrdate`.
* If you make a previously unsupported language available for your document
  using `\newdaylanguage`, please use the [Issue
  Tracker](https://codeberg.org/komascript/scrdate/issues) to submit a feature
  request. Simply enter “New Language Support: `<LANGUAGE>`” as the title and
  include your `\newdaylanguage` directive in the text. That’s all that’s
  required. Typically, the next version of `scrdate` will then offer your
  language contribution as a default support to all users.

## Tagging

I don't think anything in `scrdate` needs to be tagged. Therefore, I consider
the package to be completely uncritical in terms of tagging. If anyone
disagrees, please feel free to open an
[Issue](https://codeberg.org/komascript/scrdate/issues).
