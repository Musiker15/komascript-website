---
title: "Frequently Asked Questions and Their Answers"
description: "Answers to questions that come up again and again about KOMA-Script: minimal working examples, the manual, the KOMA-Script book, default settings and font sizes."
order: 5
category: "faq"
---

Below are, in no particular order, some questions I’ve been asked
repeatedly. Many of them come from the former KOMA-Script Documentation
Project. Please note that questions about how to solve specific LaTeX
problems using KOMA-Script are usually not posted here, but rather in the
[How-To section of the
Wiki](https://sourceforge.net/p/koma-script/wiki-en/HowTo/).

## General Information

<Details title="What's the deal with the minimal working example (MWE)?">

<div id="MWE"></div>

There is an entire page dedicated to the topic of [minimal working
examples](http://www.minimalbeispiel.de/mini-en.html). The relevant
LaTeX forums also often provide detailed information on how to create a
minimal example. For example, [on
TeX.SX](https://tex.meta.stackexchange.com/q/228), there is a detailed
explanation of what even a beginner should keep in mind when creating a
minimal working example. Despite the effort required of the user, it’s
important to remember that this not only significantly improves the chances of
receiving effective help, but minimal examples also prevent unnecessary
discussions and frustration.

A minimal working example for a LaTeX problem is the smallest
possible LaTeX document in which the problem occurs or that can be used
to illustrate the problem. The attribute *working* is important here. A
document preamble is *not* a working example. A main file that includes
various other files or graphics is not working without those other files and
graphics. It is best to embed subfiles directly into the main file. For
`\includegraphics` commands, it is recommended to use one of the example
images from the [`mwe`](https://www.ctan.org/pkg/mwe) package. A file that requires modifications
before the problem becomes apparent is also *not* a working example of the
problem. To avoid long placeholder texts, feel free to use packages such as
[`blindtext`](https://www.ctan.org/pkg/blindtext) or [`lipsum`](https://www.ctan.org/pkg/lipsum). These are available from all
LaTeX distributions via their package managers. In some cases, you can
also replace text with `\vspace` commands.

Although the name “minimal working example” actually implies that it is the
smallest LaTeX document for this purpose, I am deliberately putting this
into perspective. The smallest document is not necessarily the best
one. Furthermore, a less experienced beginner might not necessarily find the
smallest possible document that demonstrates this problem, even with the best
of efforts. Nevertheless, they should strive for *the smallest possible
LaTeX document*.

It’s important to me that I can work with the minimal example without having
to worry about dozens of irrelevant definitions and packages. I also
appreciate it when someone provides a minimal example in response to a
question that seemingly cannot be demonstrated with one. I can then conduct my
own tests using that exact example and use it to illustrate my proposed
solutions. A minimal example often also helps me gauge how advanced the user
is—and thus how detailed my answers should be. Beginners, in particular, often
have underlying issues where the question only reveals a symptom. With a
minimal example, I can potentially identify this and provide much better
assistance. For me, the absence of a minimal example means the user only needs
a minimal answer.

Ultimately, a minimal example signals to me that a question is important,
while at the same time allowing me to provide my best possible answer. Without
a minimal example, my best possible answer might simply be, “I don’t
understand; I can’t answer it this way.” This also applies when the person
asking the question has clearly spent little effort on the minimal example, or
when multiple problems have been confusingly mixed together in a single
example in a way that makes them difficult to distinguish. Whenever possible,
each individual problem should be isolated in a separate minimal example (and,
if possible, in its own post). A single minimal example makes sense only if it
becomes clear that the problems are inextricably linked—that is, if they are
sub-aspects of a larger problem. In that case, however, the sub-problems and
their interdependencies should also be clearly stated.

</Details>

## User Guides

<Details title="Do I actually have to read all 500-plus pages of the KOMA-Script manual?">

No, you can skip the title page, the table of contents, the list of tables,
the appendix, the bibliography, and the index. That alone saves you almost 100
pages. What else you read in the manual depends on what you want to use
KOMA-Script for and what LaTeX knowledge you already have. If you’re a
LaTeX beginner, you’ll actually need to read even more.  That’s because
the KOMA-Script manual isn’t an introduction to LaTeX. If you’re already
a long-time LaTeX user, you’ll already be familiar with a lot of it,
since the manual also explains features that are available exactly the same
way in the standard classes. Nevertheless, it’s worth getting an overview of
what KOMA-Script has to offer. If you have specific questions, the index will
help you find the answers.

By the way, the manual isn’t so thick because the authors want to annoy
users. It’s so thick because KOMA-Script offers a great deal. In the first few
years, there was a much thinner manual (fewer than 100 pages). However, it
only described the differences from the standard classes. The descriptions
were also kept so brief that almost only long-time LaTeX users could
understand them.

If you only want to use KOMA-Script as a replacement for the standard classes,
without taking advantage of the additional features, you really only need
Table 3.1. Everything else is just supplementary information. However, if you
want to write letters using KOMA-Script, you must at least read Chapter 4 in
its entirety.

</Details>

<Details title="Do I actually have to print out all 500-plus pages myself?">

If you don’t understand German, unfortunately that’s currently the case. The
main reason is that so far, neither a publisher nor a sufficient number of
users with an interest in the book in English have contacted me. They would
also need to provide proofreading for the English version.

On the other hand, anyone who is satisfied with a manual in German is in the
fortunate position of having access to an expanded book version of the manual
in German. You can find more details in the [German
translation of this page](/de/faq#komascriptbuch).

But let’s be honest—these days, fewer and fewer books are actually being
printed. Most users skim through manuals either online or on a screen. This is
also reflected in the declining sales figures for the [print version of the
German KOMA-Script
book](https://www.lehmanns.de/shop/mathematik-informatik/51375541-9783965430976-koma-script).

</Details>

<Details title="Why do I get an error message when I run the command … from the guide?">

You’ve probably taken the instruction from a KOMA-Script guide that is
newer—or, in rare cases, older—than the class or package you’re using. As a
general rule, you should use at least the same version of the classes and
packages as the one specified in the guide you’re following.

The guide is usually installed along with KOMA-Script and can be accessed, for
example, via `texdoc scrguide-de` on the command line. Searching for
`scrguide-de.pdf` using your operating system’s search function can also help
you find the guide that matches your version of KOMA-Script.

Usually, the easiest way to solve the problem is to update
KOMA-Script. However, sometimes the problem is actually caused by an
update—specifically, when you start using the new documentation but an older
version of KOMA-Script still exists on your system, which LaTeX finds
and uses by default.

The version information for all packages and classes can be found in the
document’s log file. It’s even easier if you insert the `\listfiles`
command—preferably before `\documentclass`. Then, at the end of the
LaTeX run, a list of all files, including version information, is
written to the log file.

</Details>

## Classes and Packages

<Details title="Why are the default settings set this way?">

There are always users who believe that the default settings do not meet user
expectations or, for other reasons, were not chosen optimally. Some of these
comments are indeed well-founded.

As mentioned in the introduction to the manual, KOMA-Script was developed in
the early 1990s from the LaTeX 2.09 package Script 2.0. Although I had
already contributed a few minor features to Script 2.0, overall it was a
package created by Frank Neukam, who also made all the design and
implementation decisions. In 1993, I decided to design KOMA-Script to be as
compatible as possible with Script 2.0. This applied in particular to the
default settings.

At the same time, KOMA-Script still had to grow in terms of its range of
functions. In 1994, KOMA-Script offered only a fraction of the capabilities it
provides today. So some features only became possible over time. The default
settings were then based on what had previously been set as fixed values—that
is, on the state prior to the introduction of the new feature. For features
that hadn’t even existed as fixed settings before, I based my decisions on
user requests from support, on the overall appearance of the default settings,
and, in exceptional cases, on third-party packages.

Compatibility has always been important to me. As far as possible, a document
should still look exactly the same years later when opened with the latest
version of KOMA-Script as it did when opened with the version in which it was
originally created. Up through version 3.00, the only restriction here was
that compatibility should not hinder bug fixes and improvements.

While the results of my compatibility survey tend to argue against moving away
from the compatibility rule, I noticed during the transition from KOMA-Script
2.9 to the source code base of KOMA-Script 3.00 that other package authors
themselves attach little importance to compatibility. Several of my older
documents were reformatted—in some cases quite significantly—even though I
experimentally used not only the compatibility setting `version=first` but
even an older version of KOMA-Script. So in reality, it’s of little use if
KOMA-Script itself could reformat documents in a highly compatible way. To
achieve this, you have to archive all the packages used anyway. In this case,
KOMA-Script can of course be included as well.

However, this experience does not mean that all default settings will now be
reviewed and changed across the board. Some default settings have already been
changed (for example, the default page style for white pages). For others, we
are considering changes in this direction.

Incidentally, I already ran into trouble back in the 1990s while attempting to
change a default setting: Because italic fonts—in LaTeX `\slshape`—are
generally frowned upon in typography, I wanted to change the header preset to
italic—in LaTeX `\itshape`. The protests after the release were so
intense that I reversed the change by the very next release—and back then,
releases were much more frequent than they are today. After that experience, I
think twice before implementing even well-founded change requests.

Nevertheless, anyone with a well-reasoned suggestion for a change can submit
it as a feature request in the [Issue
Tracker](https://sourceforge.net/p/koma-script/tickets/). However, whenever
possible, you should also consider potential side effects. This includes the
question of whether the user can easily revert to the old default setting. For
example, I would rarely change the size or font of a single heading level.

</Details>

<Details title="Does it make a difference whether fontsize=… is set directly in \documentclass or later using \KOMAoptions?">

This makes a difference in two respects. First, `size<size>.clo` files are
loaded only when used in `\documentclass`, since KOMA-Script has no control
over the exact contents of these files from external sources, and they often
cannot be loaded without errors at a later time. When using `\KOMAoptions` or
`\KOMAoption`, a calculation of the font size settings is therefore also used
in some cases where a configuration file is used to set the base font size via
the optional argument of `\documentclass`.

Furthermore, changing the base font size after the class has been loaded does
not adjust all lengths used by the class—or even by previously loaded
packages—to the new base font size. This is also technically nearly
impossible. The information regarding whether a length depends on the base
font size or not is not even unambiguous when the length is set. Once the
length is set, this information is no longer available at all. Therefore, even
with KOMA-Script, the document’s actual base font size should always be
specified when loading the class. Any subsequent changes should really be
limited to exceptional cases. For example, the documentation mentions the case
of a (rather short) appendix in a different font size.

</Details>
