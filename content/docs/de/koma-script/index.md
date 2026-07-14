---
title: "Die KOMA-Script-Sammlung"
description: "Überblick über die KOMA-Script-Sammlung mit allen enthaltenen LaTeX-Klassen und -Paketen sowie den Projektressourcen auf SourceForge."
order: 10
category: "documentation"
---

KOMA-Script ist eine Sammlung von LaTeX-[Klassen](#die-koma-script-klassen)
und [Paketen](#die-koma-script-pakete). Das Projekt wird auf
[SourceForge](https://sourceforge.net/p/koma-script/)
gehostet. Dort finden Sie auch ein
[Wiki](https://sourceforge.net/p/koma-script/_list/wiki) mit vielen
Informationen [auf Englisch](https://sourceforge.net/p/koma-script/wiki-en/)
sowie [auf Deutsch](https://sourceforge.net/p/koma-script/wiki-de/). Am
wichtigsten sind [die englischen „How
to“-Seiten](https://sourceforge.net/p/koma-script/wiki-en/HowTo/) und [die
deutschen „Wie“-Seiten](https://sourceforge.net/p/koma-script/wiki-de/HowTo/)
mit vielen Anwendungsbeispielen.  Selbstverständlich gibt es auch einen
[Issue-Tracker](https://sourceforge.net/p/koma-script/tickets/) für
Bug-Reports und andere Probleme.

## Die KOMA-Script-Klassen

Hier finden Sie alle Klassen, die derzeit Teil der KOMA-Script-Sammlung sind.
Einige davon sind nur für den internen Gebrauch bestimmt und sollten nicht
direkt von Benutzern verwendet werden. Einige davon haben eine Entsprechung
unter den Standardklasse. Je nach Verwendung von Paketen von Drittanbietern
können Sie die entsprechende Standardklasse durch die KOMA-Script-Klasse
ersetzen. Beachten Sie jedoch: Derzeit unterstützt keine der
KOMA-Script-Klassen die Verwendung von `\DocumentMetadata` oder Tagging.

* `scrartcl`: Die KOMA-Script-Artikelklasse. Diese kann anstelle der
  Standardklasse `article` verwendet werden.
* `scrbook`: Die KOMA-Script-Buchklasse. Diese kann anstelle der
  Standardklasse `book` verwendet werden.
* `scrreprt`: Die KOMA-Script-Berichtsklasse. Diese kann anstelle der
  Standardklasse `report` verwendet werden.
* `scrlttr2`: Die KOMA-Script-Briefklasse. Die Benutzerschnittstelle
  unterscheidet sich stark von der Standardklasse `letter`.
* `scrarticle`: Ein Wrapper für `scrartcl`, da viele Benutzer nicht wissen, wie
  und warum man `scrartcl` schreibt.
* `scrreport`: Ein Wrapper für `scrreprt`, da viele Benutzer nicht wissen, wie
  und warum man `scrreprt` schreibt.
* `scrletter`: Ein Wrapper, der `scrartcl` mit dem Paket `scrletter`
  kombiniert. Er ist nicht vollständig kompatibel mit `scrlttr2`, bietet aber
  einige Verbesserungen.
* `koma-script-source-doc`: Eine interne Klasse für die
  Quelldokumentation. Benutzer sollten sie nicht verwenden, da sie jederzeit
  in inkompatibler Weise geändert werden kann.
* `scrguide`: Eine interne Klasse, die für die Benutzerdokumentation verwendet
  wird. Diese Klasse ist ein echtes Durcheinander, das über die Jahre
  gewachsen ist. Sie sollten sie nicht verwenden, da sie jederzeit in
  inkompatibler Weise geändert werden kann.

## Die KOMA-Script-Pakete

Hier finden Sie alle Pakete, die derzeit Teil der KOMA-Script-Sammlung sind.
Einige davon sind nur für den internen Gebrauch bestimmt und sollten nicht
direkt von Benutzern verwendet werden.

* `scraddr`: Liest `.adr`-Dateien und erlaubt den Zugriff auf die einzelnen
  Felder der Einträge.
* `scrbase`: Grundlegende Funktionen, die von mehreren KOMA-Script-Klassen und
  Paketen verwendet werden. Auch für Benutzer und andere Paketautoren kann
  dieses Paket nützlich sein.
* `scrdate`: Formatierung des heutigen Datums im sprachunabhängigen
  ISO-Format; Ausgabe des sprachabhängigen Wochentagsnamens eines bestimmten
  Datums. Dieses Paket ist ein Kandidat für die Ausgliederung aus KOMA-Script.
* `scrextend`: Stellt einige der KOMA-Script-Klassenfunktionen für Benutzer
  anderer Klassen bereit, nämlich der Standardklassen.
* `scrfontsizes`: Erzeugt Schriftgrößen-Dateien zur Verwendung mit KOMA-Script-
  Klassen oder `scrextend`.
* `scrjura`: Wrapper, um das Paket `contract` mit dem veralteten Paket
  `scrjura` kompatibel zu machen.
* `scrkbase`: Internes Paket, das Funktionen bereitstellt, die intern von
  KOMA-Script-Klassen und KOMA-Script-Paketen verwendet werden. Benutzer und
  andere Paketautoren sollten diese internen Funktionen nicht verwenden,
  sondern die offiziellen `scrbase`-Funktionen.
* `scrlayer`: Stellt Ebenen bereit und kombiniert diese zu
  Seitenstilen. Ergänzt werden die sogenannten Ebenen-Seitenstile durch
  Seitenstil-Aliase.
* `scrlayer-notecolumn`: Proof of Concept für Ebenen mit `scrlayer`. Dieses
  Paket ist ein Kandidat für eine Ausgliederung aus KOMA-Script.
* `scrlayer-scrpage`: Bietet einfach konfigurierbare Seitenstile auf Basis von
  `scrlayer`. Dies ist eine Alternative zu `fancyhdr`, die nicht nur mit
  KOMA-Script-Klassen, sondern auch mit vielen anderen Klassen verwendet
  werden kann.
* `scrletter`: Bietet die Hauptfunktionen von `scrlttr2` als Paket, das mit
  anderen Klassen kombiniert werden kann, insbesondere mit `scrartcl`,
  `scrreprt`, `scrbook` oder den Standardklassen `article`, `report`, `book`
  oder abgeleiteten Klassen.
* `scrlfile`: Datei-Hooks laden (können durch generische LaTeX-Hooks
  ersetzt werden).
* `scrlfile-hook`: Wird von `scrlfile` mit einem aktuellen LaTeX-Kernel
  verwendet.
* `scrlfile-hook-3.34`: Wird von `scrlfile` mit einem alten LaTeX-Kernel
  verwendet, der eine andere Syntax für generische Hooks verwendet.
* `scrlfile-patcholdlatex`: Wird von `scrlfile` mit einem alten
  LaTeX-Kernel verwendet, der keine generischen Hooks bereitstellt.
* `scrlogo`: Definition des Befehls `\KOMAScript`.
* `scrtime`: Formatierung der aktuellen Uhrzeit. Dieses Paket ist ein Kandidat
  für eine Ausgliederung aus KOMA-Script.
* `tocbasic`: Bietet nicht nur die Verwaltung von Hilfsdateiendungen wie
  `.lof`, `.lot` usw., sondern auch Funktionen zum Schreiben in und Lesen aus
  diesen Dateien, zusätzliche Gleitumgebungen und entsprechende nicht
  gleitende Umgebungen, die Konfiguration von Bildunterschriften usw.
* `typearea`: Berechnung von Rändern und Textbereichen auf der Grundlage
  typografischer Aspekte.
