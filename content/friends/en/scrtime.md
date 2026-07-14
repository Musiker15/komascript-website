---
title: "scrtime"
description: "KOMA-Script spin-off that prints the current time of the LaTeX run in the document, useful for drafts."
order: 10
category: "spin-off"
tags: []
---

The `scrtime` package is a spin-off of KOMA-Script and was part of that
collection up to version 3.49.2 of `scrtime` and KOMA-Script. It was separated
from KOMA-Script because it tended to be overlooked within the collection and
works very well on its own.

`scrtime` is a LaTeX package that provides a way to output the current
time of the LaTeX run in the document. This can be useful for drafts,
for example.

The package is hosted on
[Codeberg](https://codeberg.org/komascript/scrtime). For more information, see
the [`scrtime`](https://www.ctan.org/pkg/scrtime).

## Usage

The package is loaded as usual using:
```latex
\usepackage[<options>]{scrtime}
```
Here, `<options>` stands for one or more of the options listed under
“[Options](#options)”. Specifying `<options>` is optional. You can also omit
`[<options>]` entirely.
As a special feature, the package can also be loaded multiple times with
different options, in which case the last settings take precedence.

## Options

**`24h`**

The `24h` option displays the time in 24-hour format. The hours
are thus counted from 0 to 23. This is the default setting. The
option is therefore only needed to undo a previous change.

**`12h`**

In contrast, `12h` uses the 12-hour format. The a.m. hours
are thus counted from 0 to 11, followed by noon at 12 and the
p.m. hours from 1 to 11. Note, that there isn't a suffix for the ante
meridiem or post meridiem hours.

In addition to setting the options directly when loading the package, as
described under “[Usage](#usage)”, you can also set them using a command:
```latex
\scrtimesetup{<options>}
```

## Displaying and Setting the Time

**`\thistime[<separator>]`**

This command displays the current time in hours and minutes, with minutes
under 10 displayed with a leading zero, for example 9:09. Without the
optional argument `[<separator>]`, a colon is placed between the hours and
minutes. This can be replaced with any character using the optional
argument. For example, you can use
```latex
\thistime[‘]’\mbox{}'
```
  to produce the output 9'09". Please also note the effects of `\settime` on
  the optional separator.

**`\thistime*[<separator>]`**

The asterisk form `\thistime*` differs from the variant without an asterisk
only in that minutes less than 10 are not prefixed with a leading zero.

**`\settime{<time>}`**

This command sets the output of the current time to exactly the value passed
as an argument. As a result, the optional `<separator>` of the `\thistime`
command no longer has any effect. At the same time, the asterisk form
and the normal form of `\thistime` are then no longer different.


## Tagging

I don't think anything in `scrtime` needs to be tagged. Therefore, I consider
the package to be completely uncritical in terms of tagging. If anyone
disagrees, please feel free to open an
[Issue](https://codeberg.org/komascript/scrtime/issues).
