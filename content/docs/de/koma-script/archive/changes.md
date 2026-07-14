---
title: "Archiv der Änderungen"
description: "Fehlerbehebungen und Änderungen in KOMA-Script-Versionen vor 3.28. Ab 3.28 stehen alle Änderungen im Wiki und im Issue-Tracker."
order: 100
category: "archive"
---

Ab KOMA-Script 3.28 finden sich alle bekannten Probleme und wichtigen
Änderungen entweder [im
Wiki](https://sourceforge.net/p/koma-script/wiki-de/Releases/) oder im
Issue-Tracker. Nachfolgend sind Fehlerbehebungen und Änderungen an früheren
Versionen aufgeführt, wobei jeweils die Version genannt wird, in der die
Änderung vorgenommen wurde:

## Version 3.20 bis 3.27

<Details title="3.27" open>

* Im `README` wurde der fehlende Hinweis auf `scrlayer-fancyhdr` ergänzt.
* Bisher waren die Quellen von KOMA-Script entweder ISO-8859-1 oder US-ASCII
  codiert. Das hatte in erster Linie historische Gründe, weil 1993 UTF-8 noch
  nicht allgemein verbreitet war und von LaTeX auch nicht unterstützt
  wurde. Schon seit einigen Jahren war geplant, die Quellen endlich auf UTF-8
  umzustellen. Allerdings war das von eher geringen Priorität, weil nicht
  zwingend notwendig und durchaus nicht mit der Umkodierung der Dateien
  erledigt. Das wird sich jetzt aber definitiv ändern. Wer KOMA-Script aus dem
  Quellcode-Repository per svn up aktualisiert und selbst erzeugt, sollte
  daher unbedingt erst `make distclean` aufrufen, um alle temporären Dateien zu
  löschen.

* **`scrarticle`, `scrreport`, `scrletter`:**
  Drei neue Wrapper-Klassen für die Jüngeren unter uns, die sich nicht mehr an
  8.3-Dateinamen erinnern können und deshalb Schwierigkeiten mit den normalen
  Klassennamen haben. Dabei verwenden die Wrapper-Klassen in `\KOMAClassName`
  weiterhin die alten Namen. Es gibt aber zusätzlich dann auch ein
  `\KOMALongClassName`, das eigentlich überflüssig ist, weil man es einfach
  aus `scr\ClassName` bilden könnte.  
  Hinweise: Diese neu verfügbaren Wrapper-Klassen, die auf Anregung eines
  langjährigen Benutzers (sic!) implementiert wurden, sollten nicht als
  Freibrief verstanden werden, diese an Stelle der echten Klassen zu
  verwenden. Offiziell dokumentiert sind weiterhin nur `scrartcl`, `scrreprt`
  und `scrlttr2`. Die Klasse `scrletter` eine Wrapper-Klasse für die
  Verwendung von Klasse `scrartcl` mit Verwendung von Paket `scrletter`. Damit
  bieten die Klasse und das gleichnamige Paket die gleichen
  Brief-Möglichkeiten, während `scrlttr2` ggf. nicht denselben Funktionsumfang
  hat.

* **`scrartcl`, `scrbook`, `scrreprt`, `scrlttr2`:**
  - Korrektur des Fehlers, dass es bei der Kombination des Pakets [`amsthm`](https://www.ctan.org/pkg/amsthm) mit einer KOMA-Script-Klasse passieren konnte, dass der Abstand
    über einer mit [`amsthm`](https://www.ctan.org/pkg/amsthm) definieren Umgebung bei Verwendung von
    Absatzabstand verschwindet. In Zusammenhang mit [`enumitem`](https://www.ctan.org/pkg/enumitem)
    geschah das auch ohne Verwendung von KOMA-Script-Option `parskip`, wenn
    diese Umgebung innerhalb einer Listenumgebung steht. Dies stellt jedoch
    nur einen Spezialfall des eigentlichen Problems dar. Das tatsächliche
    Problem ist, dass `amsthm` generell für den vertikalen Abstand nicht
    einfach `\topsep` verwendet, sondern
    `\addvspace{\topsep}\addvspace{-\parskip}` ausführt. Wird bei den
    Einstellungen für Listen ein Absatzabstand bereits berücksichtigt, führt
    dies dazu, dass der Absatzabstand doppelt berücksichtigt wird und damit
    der Abstand zu klein wird. Das war bisher beispielsweise auch bei
    Verwendung von Paket [`parskip`](https://www.ctan.org/pkg/parskip) der Fall. Der Effekt wird bei
    Verwendung von KOMA-Script-Klassen mit Paket [`enumitem`](https://www.ctan.org/pkg/enumitem) dadurch
    verstärkt, dass [`enumitem`](https://www.ctan.org/pkg/enumitem) ohne Option `ignoredisplayed` aus
    einer `trivlist`-Umgebung eine normale Listenumgebung macht.  
	Hinweis: Zur Umgehung dieses Problems, das meiner Meinung nach eigentlich
    ein Problem von [`amsthm`](https://www.ctan.org/pkg/amsthm) ist, patchen die KOMA-Script-Klassen
    nun [`amsthm`](https://www.ctan.org/pkg/amsthm) mit Hilfe von [`xpatch`](https://www.ctan.org/pkg/xpatch), um das dann
    schädliche `\addvspace{-\parskip}` zu entfernen.

* **`scrartcl`, `scrbook`, `scrreprt`:**
  - Mit `\thanks` erzeugte Fußnoten werden nun nur noch auf der korrekten
    Seite ausgegeben. Zu fehlte es bei Verwendung von Titelköpfen, wie sie bei
    `scrartcl` voreingestellt sind, teilweise aber auch bei Titelseiten in der
    Umschaltung auf neue Seiten bzw. Einspaltigkeit bzw. bei der Ausgabe des
    Titels teilweise am korrekten Zurücksetzen der mit `\thanks` erzeugten
    Fußnoten.  
	Hinweis: Das Problem wurde von Andrew D. gemeldet.
  - Der ziemlich üble Hack, der auf Kosten diverser Möglichkeiten von
    KOMA-Script und unter Nutzung diverser interner Makros von [`titlesec`](https://www.ctan.org/pkg/titlesec) die Verwendung von [`titlesec`](https://www.ctan.org/pkg/titlesec) mit
    KOMA-Script-Klassen eingeschränkt ermöglicht hat, wurde entfernt. Dies
    dient letztlich dazu, Versionsabhängigkeiten von einem Drittpaket zu
    beseitigen, das selbst die KOMA-Script-Klassen nie sauber unterstützt hat,
    und auch den Code der Klassen aufzuräumen und wartbar zu halten. Außerdem
    wird so der Irrglaube reduziert, das Paket würde KOMA-Script-Klassen
    unterstützen. Das war noch nie der Fall und in vielen Fällen ging die
    Kombination auch bisher schon schief. Wer echte Unterstützung der
    KOMA-Script-Klassen durch [`titlesec`](https://www.ctan.org/pkg/titlesec) haben will, möge sich an
    dessen Autor wenden.
  - Die Gliederungsbefehle kennen bei Verwendung des erweiterten optionalen
    Arguments (siehe `headings=optionto…`) den neuen Schalter `nonumber`, um
    die Nummerierung abzuschalten. Für Kapitel und Abschnitte entspricht das
    letztlich `\addchap` und `\addsec` (ohne Stern!).  
	Hinweis: Diese Möglichkeit wurde schon vor Jahren mit Elke diskutierte.
  - Die interne Anweisung `\bprot@dottedtocline` ist veraltet und gibt eine
    entsprechende Warnung aus. Es ist durchaus geplant, sie zukünftig aus den
    Klassen zu entfernen.  
	Hinweis: Änderung stand schon lange in der TODO-Datei.
  - Wird [`amsthm`](https://www.ctan.org/pkg/amsthm) zusammen mit einer KOMA-Script-Klasse verwendet,
    entsteht eine neue Abhängigkeit von Paket [`xpatch`](https://www.ctan.org/pkg/xpatch). Obwohl ich
    normalerweise bemüht bin, derartige Abhängigkeiten zu vermeiden bzw. in
    `scrhack` auszulagern, wurde in diesem Fall beschlossen, das Wagnis
    vorerst einzugehen. Die Entscheidung ist jedoch nicht endgültig.
  - Um zu ermöglichen, dass die Nummerierung aller Gliederungsebenen via
    `\setcounter{secnumdepth}{-\maxdimen}` abgeschaltet werden kann (was
    beispielsweise `scrartcl` unter gewissen Umständen für Kolumnentitel
    nutzt), sind bei `\DeclareSectionCommand` nur noch `level`-Werte größer
    als `-\maxdimen` erlaubt.  
	Hinweis: Diese Änderung/Klarstellung geht auf eine [Frage bei
    TeX.Stackexchange](https://tex.stackexchange.com/questions/473653/how-to-switch-off-chapter-and-section-numbering-in-the-whole-document)
    und einen Kommentar zu einer dortigen Antwort zurück.
  - Die Anweisung `\IfUseNumber{`*TRUE-Code*`}{`*FALSE-Code*`}`, kann
    innerhalb der Überschriften und nur dort dazu verwendet werden,
    festzustellen, ob die aktuell in Verarbeitung befindliche Überschrift mit
    einer Nummer versehen wird oder nicht. Das schließt die Stellung von
    `secnumdepth` ebenso wie die Verwendung einer Sternform einer
    Gliederungsüberschrift oder `\addpart`, `\addchap` oder `\addsec` und bei
    `scrbook` auch `\frontmatter`, `\mainmatter` und `\backmatter` ein. Bei
    einigen Do-Hooks (siehe unten) kann diese Anweisung ggf. nützlich
    sein. Sie ist aber nicht bei allen Do-Hooks zulässig. Bisher ist
    sichergestellt, dass sie bei `headings/begingroup/…` und
    `headings/endgroup/…` gültig ist.  
	Achtung: Im moving Argument einer Gliederungsanweisung ist der Befehl
    nicht gültig!
  - Der neue Do-Hook-Mechanismus (siehe Änderungen bei `scrbase`) wird
    verwendet. Folgende  Hook-Ausführungen mit `\ExecuteDoHook` wurden bisher
    implementiert:
	- `heading/begingroup/`*Überschriftenname*: wird zu Beginn der Gruppe
      ausgeführt, in der auch `\partlineswithprefixformat`,
      `\chapterlineswithprefixformat`, `\chapterlinesformat`,
      `\sectionlinesformat` bzw. `\sectioncatchphraseformat` ausgeführt
      werden.
	- `heading/endgroup/`*Überschriftenname*: wird am Ende der Gruppe
	  ausgeführt, in der auch `\partlineswithprefixformat`,
	  `\chapterlineswithprefixformat`, `\chapterlinesformat`,
	  `\sectionlinesformat` bzw. `\sectioncatchphraseformat` ausgeführt werden.
	- `heading/preinit/`*Überschriftenname*: wird ganz am Anfang eines
      Gliederungebefehls ausgeführt, also ggf. noch bevor der vorherige Absatz
      beendet wurde!
	- `heading/postinit/`*Überschriftenname*: wird am Ende der Initialisierung
      eines Gliederungsbefehls ausgeführt und ersetzt zukünftig
      `\At@startsection`. Die Anweisung ist jedoch nicht nur für den
      `section`-Stil, sondern auch für `chapter` und `part` verfügbar. Die
      veraltete Anweisung `\At@startsection` funktioniert weiterhin (nur für
      Überschriften im Stil `section`) wird aber auf den neuen Do-Hook
      abgebildet.
	- `heading/branch/nostar/`*Überschriftenname*: wird unmittelbar bei der
      Verzweigung zwischen Sternvarianten und Normalvarianten eines
      Gliederungsbefehls für die Normalvariante ausgeführt und ersetzt
      zukünftig `\Before@sect`. Die Anweisung ist jedoch nicht nur für den
      `section`-Stil, sondern auch für `chapter` und `part` verfügbar. Die
      veraltete Anweisung `\Before@sect` funktioniert weiterhin (nur für
      Überschriften im Stil `section`) wird aber auf den neuen Do-Hook
      abgebildet.
	- `heading/branch/star/`*Überschriftenname*: wird unmittelbar bei der
	  Verzweigung zwischen Sternvarianten und Normalvarianten eines
	  Gliederungsbefehls für die Sternvariante ausgeführt und ersetzt zukünftig
	  `\Before@ssect`. Die Anweisung ist jedoch nicht nur für den
	  `section`-Stil, sondern auch für `chapter` und `part` verfügbar. Die
	  veraltete Anweisung `\Before@ssect` funktioniert weiterhin (nur für
	  Überschriften im Stil `section`) wird aber auf den neuen Do-Hook
	  abgebildet.

    Dabei ist *Überschriftenname* jeweils der Name einer Überschrift, wie er
	auch bei `\DeclareSectionCommand` etc. angegeben wird.  
	Diese Hooks sind auf Anforderung der [`biblatex`](https://www.ctan.org/pkg/biblatex)-Autoren
    entstanden. Weitere Hooks dieser Art können je nach Notwendigkeit
    entstehen.

* **`scrartcl`, `scrreprt`:**
  - Die Optionen `abstacton` und `abstractoff` werden in der log-Datei nun
    nicht mehr fälschlich als Standardoptionen aufgeführt. Stattdessen wird
    korrekt vor der Verwendung dieser veralteten Optionen gewarnt und der
    korrekte Ersatz angegeben.
	
* **`scrbook`, `scrreprt`:**
  - Das `\relax` in der Definition von `\thefigure`, `\thetable` und
    `\theequation` wurde entfernt, weil einige Pakete damit ein Problem
    haben. Eigentlich sollten diese Pakete korrigiert werden, aber ich bin ja
    nicht so.

* **`scrlttr2`, `scrletter`:**
  - Bei Sprachumstellung auf `australien` funkioniert nun auch die Umstellung
    des Datumsformats. Der Workaround
	```latex
	\ifundefinedorrelax{dateaustralien}{}{\let\dateaustralian\dateaustralien}
	```
	in der Dokumentpräambel ist damit überflüssig.
  - Farbänderungen in Feldern der ersten Briefseite führen nun nicht mehr zu
    einem Zurücksetzen der Farbe des Briefs.  
	Hinweis: Das Problem in früheren Versionen wurde von S. C. analysiert und
    gemeldet.
  - Bei Kombination von `DINmtext` mit `fromalign=false` wird nun nicht mehr
    das erste Token nach einem `\\` in `fromaddress` weggeworfen. Da dieser
    Bug schon recht extrem und seit der ersten Version von `scrlttr2`
    vorhanden war, gehe ich davon aus, dass diese Kombination in 15 Jahren von
    absolut niemandem verwendet wurde. Daher wurde die Sonderbehandlung der
    Absenderadresse für diesen Fall, die zu dem Fehler geführt hat, nicht
    etwas korrigiert, sondern komplett entfernt.
  - Doppeseitige Briefe werden nun nicht mehr mit vertikalem Ausgleich
	(`\flushbottom`), sondern Briefe unabhängig von `twoside` entsprechen der
	Anleitung generell ohne vertikalen Ausgleich (also `\raggedbottom`)
	gesetzt.  
	Hinweis: Dieses Problem in Version 3.17 bis 3.26b wurde [auf TSX
    entdeckt](https://tex.stackexchange.com/q/477763) und von dritten an mich
    weitergeleitet.
  - Option `symbolicnames` kennt die neuen Werte `marvosym`, `fontawesome` und
    `awesome`. Der Wert `marvosym` entspricht den bisherigen Werten `true`,
    `on` und `yes`. Die beiden Werte `fontawesome` und `awesome` verwenden
    dagegen das Pakte [`fontawesome`](https://www.ctan.org/pkg/fontawesome) für die Symbole.  
  - Der neue Befehl `\foreachkomavar{`*Variable*`,`…`}{`*Code*`}` führt
    *Code*`{`*Variable*`}` für jede *Variable* aus.
  - Der neue Befehl
    `\foreachkomavarifempty{`*Variable*`,`…`}{`*True-Code*`}{`*False-Code*`}`
    führt *True-Code*`{`*Variable*`}` für jede *Variable* aus, die leer ist,
    und *False-Code*`{`*Variable*`}` für jede *Variable*, die nicht leer ist.
  - Der neue Befehl `\foreachemptykomavar{`*Variable*`,`…`}{`*Code*`}` führt
    *Code*`{`*Variable*`}` für jede *Variable* aus, die leer ist.
  - Der neue Befehl `\foreachnonemptykomavar{`*Variable*`,`…`}{`*Code*`}`
    führt *Code*`{`*Variable*`}` für jede *Variable* aus, die nicht leer ist.
  - Briefe werden generell `\raggedbottom` gesetzt. Eine Änderung ist nur noch
    mit `\flushbottom` innerhalb von `\begin{letter}…\end{letter}` bzw. über
    `\AtBeginLetter{\flushbottom}` möglich.
  - Zwar erlaubt `scrlttr2` das Setzen von Option `twocolumn`, innerhalb der
    Briefumgebung führt dies jedoch nicht zu sinnvollen Ergebnissen.

* **`scrbase`:**
  - `\FamilyOptions` (und das davon abgeleitete `\FamilyOption`) setzen
    Familienoptionen nun wirklich wie in der Anleitung angegeben als
    erstes. Zuvor wurden sie leider komplett ignoriert.
  - Das unerwünschte Leerzeichen im horizontalen Modus bei Verwendung von
    `\FamilyExecuteOptions` mit einer Option `@else@` wurde beseitigt.
  - `\FamilyOptions` und `\FamilyOption` führen nun ebenfalls
    `@else@`-Optionen (vgl. `\FamilyExecuteOptions`) sowohl der
    Familienmitglieder als auch der Familie selbst aus. Besitzt ein Mitglied
    eine `@else@`-Option, so wird diese immer dann gesetzt, wenn das Mitglied
    eine angegebene Option nicht hat. Sie wird jedoch nicht ausgeführt, wenn
    das Mitglied die angegebene Option zwar kennt, nicht jedoch den
    übergebenen Wert. Dagegen wird eine `@else@`-Option der Familie nur
    ausgeführt, wenn keines der Mitglieder die Option mit Ergebnis
    `\FamilyKeyStateProcessed` verarbeiten konnte.  
	Möglichkeit wurde aufgrund einer Nachfrage von Falk implementiert.
  - `\DefineFamilyKey` mit explizit leerem erstem, optionalem Argument liefert
    nun keine Fehlermeldung wegen unbekanntem Mitglied mehr, sondern definiert
    eine Familienoption.  
	Diese Änderung wurde im Zuge der Verarbeitung von `@else@`-Optionen durch
    `\FamilyOptions` implementiert.
  - Werden die Befehle `\defcaptionname`, `\newcaptionname`,
    `\renewcaptionname`, `\providecaptionname` in der Dokumentpräambel
    aufgerufen, so definieren sie die entsprechende Anweisung unmittelbar,
    wenn die aktuelle Sprache einer der Sprachen aus dem ersten Argument
    entspricht. Um Fehlermeldungen bei Konstrukten wie
    `\newcommand*{\Fooname}{Foo} \newcaptionname{english}{\Fooname}{Foo}` und
    damit eine wesentliche Inkompatibilität zu früheren Versionen zu
    vermeiden, definiert `\newcaptionname` den Begriff in der Dokumentpräambel
    aber nur unmittelbar, wenn er nicht bereits (sprachunabhängig) definiert
    ist. Dies stellt keinen substantiellen Nachteil dar, da die korrekte
    Umschaltung dann ggf. bei `\begin{document}` erfolgt und dort dann
    ggf. auch die entsprechende Fehlermeldung ausgegeben wird, wenn `\Fooname`
    bereits sprachabhängig definiert ist.  
	Sinn der ganzen Änderung ist, dass auch ohne Sprachumschaltung (also auch
    ohne Sprachpaket) nun sprachabhängige Ausdrücke für die aktuelle Sprache
    (vor dem Aufruf eines Sprachpakets normalerweise Englisch) bereits durch
    die genannten Befehle sprachunabhängig definiert sind und nicht zusätzlich
    per `\def` o.&nbsp;ä. explizit definiert werden müssen.
  - `\IfArgIsEmpty` ist nun `\long`.
  - Es wurde ein neuer Hook-Mechanismus namens *Do-Hook-Mechanismus*
    implementiert, der kaskadierte Hooks erlaubt. Dabei wird ein Hook durch
    einen *Spezifikator* bestimmt, der entweder ein String ist oder ein String
    gefolgt von einem mit `/` abgetrennten *Spezifikator*, also beispielsweise
    `heading`, aber auch `heading/preinit/subsection`. Zu dem Mechanismus
    gehören folgende Befehle:
    - `\ExecuteDoHook{`*Spezifikator*`}`: Diese Anweisung ist Paketautoren
      vorbehalten und dient dazu einen Do-Hook in der Implementierung eines
      Befehls zu verankern. Der *Spezifikator* darf nicht leer sein. Zunächst
      wird der erste String des Spezifikators abgetrennt. Dann wird String zum
      Hookname hinzugefügt und der Hook mit dem Rest des Spezifikators als
      angehängtes Argument ausgeführt. War der Rest nicht leer, wird er
      anschließend zum neuen *Spezifikator* und rekursiv die Ausführung von
      Code fortgesetzt, bis er leer ist.  
	  Beispiel: `\ExecuteDoHook{heading/preinit/subsection}` führt zunächst
      den Code von Hook `heading` mit dem Argument `preinit/subsection`
      aus. Dann den Code von `heading/preinit` mit Argument `subsection` und
      schließlich den Code von `heading/preinit/subsection` mit einem leeren
      Argument.
    - `\AddtoDoHook{`*Hook*`}{`*Befehl*`}`: Fügt den *Befehl* dem *Hook*
      hinzu. Zu beachten ist, dass bei Ausführung von *Befehl* immer ein
      Argument angefügt wird.
	  Beispiel: Mit `\AddtoDoHook{heading/preinit}{\typeout}` wird der Befehl
      `\typeout` dem Hook `heading/preinit` hinzugefügt. So wird
      beispielsweise `\ExecuteDoHook{heading/preinit/chapter}` die Anweisung
      `\typeout{chapter}` ausführen, `\ExecuteDoHook{heading/preinit/section}`
      wird `\typeout{section}` ausführen etc. Wird dagegen mit
      `\AddtoDoHook{heading/preinit/section}{\typeout}` derselbe Befehl dem
      Hook `heading/preinit/section` hinzugefügt, so wird lediglich
      `\ExecuteDoHook{heading/preinit/section}` die Anweisung `\typeout{}`
      ausführen, während `\ExecuteDoHook{heading/preinit/chapter}` den Befehl
      nicht ausführen wird.
    - `\AddtoOneTimeDoHook{`*Hook*`}{`*Befehl*`}` arbeitet wie
      `\AddtoDoHook{`*Hook*`}{`*Befehl*`}`, allerdings wird der Code für den
      Hook nach Ausführung gelöscht. Code für One-Time-Hooks wird
      grundsätzlich nach dem Code für dauerhafte Hooks ausgeführt.
	- `\ForDoHook{`*Spezifikator*`}{`*Code*`}`: Durchläuft, wie für
      `\ExecuteDoHook` angegeben, die Teilspezifikatoren und führt für jede
      Unterteilung einmal *Code* aus. Dem *Code* werden dabei zwei Parameter
      angehängt: das Kopfelement und der Rest des *Spezifikators*.  
	  Eigentlich ist dies eine interne Anweisung zum Zwecke der Definition von
      `\ExecuteDoHook`. Normalerweise sollten Paketautoren (und erst recht
      Anwender) diese Anweisung nicht benötigen.
	- `\SplitDoHook{`*Spezifikator*`}{`*Kopfbefehl*`}{`*Restbefehl*`}`: Der
      *Spezifikator* wird, wie bei `\ExecuteDoHook` erklärt, in den ersten
      String und den Rest-Spezifikator aufgeteilt. Der *Kopfbefehl* wird als
      der erste String und der *Restbefehl* als der Rest definiert.  
	  Beispiel: `\SplitDoHook{heading/preinit/section}{\Kopf}{\Rest}` führt zu
      `\def\Kopf{heading}\def\Rest{preinit/section}`.

    Hinweis: Die KOMA-Script-Klassen verfügen tatsächlich über die im Beispiel
    genannten Hooks.  
	Hinweis: Dieser Mechanismus wurde aufgrund der steigenden Nachfrage nach
    Hooks beispielsweise durch die [`biblatex`](https://www.ctan.org/pkg/biblatex)-Autoren
    eingeführt. Bestehende Hooks von KOMA-Script werden nach und nach
    zumindest teilweise auf den neuen Mechanismus umgestellt.

* **`scrhack`:**
  - Der *standard class sections* Hack ist neu hinzugekommen. Er muss im
    Unterschied zu allen anderen Hacks explizit mit Option `standardsections`
    aktiviert werden. In diesem Fall werden die Gliederungsbefehle `\part` bis
    `\subparagraph` und die Ausgaben der zugehörigen Zähler genau wie bei den
    Standardklassen hart definiert. Bei Klassen, die über `\mainmatter`
    verfügen, werden außerdem `\if@mainmatter`, `\frontmatter`, `\mainmatter`
    und `\backmatter` entsprechend hart definiert.  
	Achtung: Dieser Hack kann eine Menge zerstören! Es gibt keinen Support
	für Probeme bei dessen Verwendung!

* **`scrjura`:**
  - Das Paket verwendet nun (endlich) `\DeclareTOCStyleEntry` für die
    Definition der Inhaltsverzeichniseinträge.  
	Hinweis: Wer bisher den undokumentierten Zähler statt der dokumentierten
    Option zur Festlegung der Eintragsebene verwendet hat, wird mit einer
    Fehlermeldung bestraft und muss dann eben zur Option wechseln. Das ist
    kein Bug, sondern so gewollt.  
	Die Änderung war in der TODO-Datei lange angekündigt. Damit steht der Weg
    frei, um `\bprot@dottedtocline` endlich als veraltet zu kennzeichnen, was
    in TODO ebenfalls lange angekündigt ist.

* **`scrlayer-notecolumn`:**
  - Die `\catcode`-Werte der in `\dospecials` abgelegten Zeichen werden vor
    dem Einlesen der Hilfsdatei mit den Notizspalten wieder auf die Werte
    eingestellt, die sie bei `\begin{document}` hatten. Ausnahme ist der
    `\catcode` von `@`, der auf 11 (*letter*) gestellt wird. Dadurch
    funktionieren Notizspalten nun beispielsweise auch, wenn während einer
    `verbatim`-Umgebung ein Seitenumbruch erfolgt. und neue Notizen aus der
    Hilfsdatei gelesen werden müssen.
	Diese Änderung wurde zur Lösung ein von Karl gemeldetes Problem
    implementiert.
  - Bei Verwendung von LuaLaTeX oder PDFLaTeX unterstützt das
    Paket nun auch Farbänderungen mit [`color`](https://www.ctan.org/pkg/color) oder [`xcolor`](https://www.ctan.org/pkg/xcolor) innerhalb der Notizspalten. Diese Möglichkeit ist noch sehr
    experimentell. Bei Verwendung von XeLaTeX werden Farben in
    Notizspalten weiterhin nicht unterstützt, da dann keine Möglichkeit
    besteht, den aktuellen *color stack* umzuschalten.  
	Diese Änderung geht auf allerlei Anfragen zurück.

* **`scrlayer-scrpage`:**
  - Kombinationen von `scrlayer-scrpage` mit Paketen, die `\centering`,
    `\raggedright` oder `\raggedleft` umdefinieren führen immer wieder zu
    Problemen. Krassestes Beispiel ist [`tabu`](https://www.ctan.org/pkg/tabu). Aber auch [`ragged2e`](https://www.ctan.org/pkg/ragged2e) mit Verwendung von dessen Option `newcommands` oder
    `NewCommands` kann bereits dazu führen, dass die Ausrichtung nicht
    vollkommen korrekt ist. Obwohl das in meinen Augen eindeutig kein Bug von
    `scrlayer-scrpage` ist, sondern ein Misfeature der entsprechenden anderen
    Pakete, verwendet `scrlayer-scrpage` KOMA-Script die genannten Anweisungen
    nicht mehr direkt, sondern nutzt stattdessen `\LaTeXcentering`,
    `\LaTeXraggedright` und `\LaTeXraggedleft`. Sind diese Anweisungen beim
    Laden von `scrlayer-scrpage` bereits (beispielsweise von [`ragged2e`](https://www.ctan.org/pkg/ragged2e)) definiert, so bleiben sie unverändert. Anderenfalls werden
    sie mit der aktuellen Definition von `\centering`, `\raggedright` und
    `\raggedleft` versehen. Damit gibt es in `scrlayer-scrpage` nun auch einen
    Workaround für [das auf TeX.Stackexchange gemeldete Problem bei
    mehrzeiligen Kopf-/Fußzeilen während eine `longtabu` verarbeitet
    wird.](https://tex.stackexchange.com/q/49622)
	
* **`scrlfile`:**
  - Die Warnung
    ```
	LaTeX Warning: Command \InputIfFileExists has changed. Check if current package is valid
    ```
	mit LaTeX ab 2019-10-01 wurde behoben.
	
* **`scrletter`:**
  - Es gibt keine Fehlermeldung mehr bei Verwendung der Option
    `symbolicnames`.

* **`scrjura`:**
  - `\labelformat` wird genutzt, falls vorhanden und nicht `\relax`. Damit
    wird ein Problem mit LaTeX ab 2019-10-01 beseitigt, das zu einer
    Fehlermeldung entweder bezüglich eines unvollständigen `\arabic` im ersten
    LaTeX-Lauf oder wegen eines `\par` beim Einlesen der aux-Datei ab
    dem zweiten LaTeX-Lauf führte.  
	Ursache des Problems war eine Änderung von `\refstepcounter` in
    LaTeX, wodurch die Methode, die (nicht nur) von `scrjura` verwendet
    wird, damit `\thesentence` ein Argument von `\p@sentence` wird, nicht mehr
    funktioniert. Da ich selbst `scrjura` nicht verwende, ist mir das trotz
    intensiver Verwendung von `latex-dev` leider erst nach der Release von
    LaTeX 2019-10-01 aufgefallen.

* **`scrlayer-scrpage`:**
  - Die Befehle `\chead`, `\ihead` etc. erlauben nun einen Absatz in ihrem
    Argument. Das ist sowohl deshalb sinnvoll, weil die Argumente innerhalb
    einer `\parbox` verwendet werden und daher Absätze erlauben sollte, als
    auch, weil `scrpage2` das noch erlaubt hat.  
	Hinweis: Der Bug wurde bei der Suche nach einem Workaround für „[longtabu
    and scrpage2: line breaks in page header cause compilation
    errors](https://tex.stackexchange.com/q/49622/9057)“ gefunden.

* **`tocbasic`:**
  - Für Optionen, die als Wert Längen oder Zahlen erwarten, wird bei
    `\DeclareTOCStyleEntry` ein Additionsoperator `+=` unterstützt. Derzeit ist
    jedoch nicht geplant diese Möglichkeit auf die indirekte Verwendung der
    Optionen beispielsweise per `\DeclareNewTOC` auszuweiten.
  - Es gibt für `\DeclareTOCStyleEntry` einen neuen Kopieroperator `:=`. Damit
    erwarten die Optionen als Wert nicht mehr die normalerweise erwarteten
    Werte, sondern den Namen einer anderen Verzeichnisebene, dessen Wert dann
    kopiert wird. Mit `indent:=figure` kann man also beispielsweise als Wert
    für den Einzug denselben Wert wie bei `figure`-Einträgen einstellen. Ist
    der entsprechende Wert für die angebene Verzeichnisebene nicht bekannt, so
    wird ein Fehler ausgegeben. Dieser Kopieroperator funktioniert für die
    Optionen der Verzeichniseinträge mit Präfix `tocentry` auch bei
    `\DeclareNewTOC`.  
  - Es gibt einen neuen Verzeichniseintragsstil `toctext`, der alle
    aufeinanderfolgenden Einträge dieses Stils innerhalb eines Absatzes
    ausgibt. Die Optionen ähneln denen von `tocline`, allerdings werden nicht
    alle Optionen unterstützt und es gibt ein paar zusätzliche.  
	Hinweis: Dieser Stil wurde aufgrund einer von Elke an mich
    weitergeleiteten Frage auf TeX.SX implementiert. Um ihn überhaupt zu
    ermöglichen, war es u. a. notwendig, am Ende von TOC-Dateien automatisch
    ein `\par` auszuführen.
  - Der Verzeichniseintragsstil `tocline` bietet die neue Option `rightindent`
    über die `\@tocrmarg` abhängig von der Eintragsebene ersetzt werden kann.  
	Diese Änderung, die mir selbst nur in Ausnahmefällen sinnvoll erscheint,
    ist auf explizite Nachfrage entstanden.
  - Der Verzeichniseintragsstil `tocline` bietet die neue Option
    `pagenumberwidth` über die `\@pnumwidth` abhängig von der Eintragsebene
    ersetzt werden kann.  
	Diese Änderung, die mir selbst nur in Ausnahmefällen sinnvoll erscheint,
    ist auf explizite Nachfrage entstanden
  - Es gibt ein neues TOC-Feature `noindent`. Dies ermöglicht kooperierenden
    Verzeichniseintragsstilen wie `tocline` das Ignorieren der Einstellung für
    den Einzug, so dass ein komplett linksbündiges Verzeichnis entsteht
    (vlg. `listof=flat`, wobei `listof=flat` weit mehr tut!).


</Details>

<Details title="3.26b" open>

* **`scrartcl`, `scrbook`, `scrreprt`, `scrextend`:**
  - Auf Wunsch von A. D. wird von `\maketitle` eine Warnung ausgegeben, wenn
    die Argumente von `\uppertitlepage` oder `\lowertitlepage` nicht verwendet
    werden. Das ist bei `titlepage=false` oder `twoside=false` der Fall.  
	Hinweis: Natürlich kann man in einseitigen Dokumenten vor `\maketitle` auf
    `twoside=semi` umschalten, um bei `titlepage=true` die Ausgabe eines
    doppelseitigen Titels zu erzwingend. Und natürlich kann man nach
    `\maketitle` ggf. mit `twoside=false` wieder zu einem echten einseitigen
    Dokument zurückschalten.

* **`scrbase`:**
  - In den Werten von Optionen sind nun wieder Absätze möglich. Das ging
    kurzzeitig in den vorherigen Versionen nicht mehr. Ursache war eine durch
    eine Änderungsdiskussion des LaTeX-Teams angeregten Änderung in der
    Behandlung von key=value-Optionen. Damit ist der altbekannte Workaround
    der Verwendung von `\endgraf` anstelle eines Absatzes nicht mehr
    notwendig.
  - In einigen Fällen wurde bisher toleriert, wenn
    `\FamilyOption{…}{`*key=value*`}{}` oder
    `\FamilyOption{…}{`*option*`,`*option*`}{}` verwendet wurde, obwohl in
    diesen Fällen `\FamilyOptions{…}{`*key=value*`}`
    bzw. `\FamilyOptions{…}{`*option*`,`*option*`}` zu verwenden ist. In
    einigen Fällen führte die falsche Syntax aber auch zu Fehlermeldungen
    wegen unbekannten Optionen oder zu TeX-internen, wenig
    aussagekräftigen Fehlermeldungen. Fehlte das leere dritte Argument kam es
    natürlich zu Folgefehlern weil dann ggf. ein nachfolgender Befehl als
    Argument behandelt wurde. Das betrifft natürlich auch Befehle, die intern
    `\FamilyOption` verwenden, beispielsweise `\KOMAoption`.  
	Seit KOMA-Script 3.27.3055 wird dieser Fehler als Syntaxerror im
    *key*-Argument von `\FamilyOption` erkannt und gemeldet. In der
    Schnellhilfe wird auch auf `\…Options` als mögliche Lösung hingewiesen.  
	Dass die Toleranz von KOMA-Script an dieser Stelle nicht unbedingt
    wünschenswert ist, wurde übrigens von E. S. und M. S. gemeldet.

* **`scrhack`:**
  - Der `nomencl`-Hack funktioniert nun wieder. Zuvor gab es aufgrund einer
    Änderung in [`nomencl`](https://www.ctan.org/pkg/nomencl) Probleme.  
	Hinweis: Solche Probleme können mit `scrhack` jederzeit auftreten. In der
	Anleitung wird darauf auch explizit hingewiesen! Dies stellt auch kein Bug
	dar, sondern schlicht eine der Grenzen von `scrhack`. Daher würde ich auch
	bevorzugen, wenn die zuständigen Paketautoren selbst entsprechende
	Änderungen an ihren Paketen vornehmen würde, so dass die Hacks nicht
	notwendig sind. Leider ist das bisher nicht gelungen. Im Fall von [`nomencl`](https://www.ctan.org/pkg/nomencl) wurde jedoch wieder einmal [ein Versuch
	gestartet](https://github.com/borisveytsman/nomencl/issues/3). Daher
	erkennt `scrhack` nun nicht nur nomencl 5.0 und patcht dieses korrekt. Da
	nach meiner Auffassung die Änderung in [`nomencl`](https://www.ctan.org/pkg/nomencl) fehlerhaft ist,
	wurde auch gleich ein Patch für die erhoffte Änderung und ein Notfallpatch
	für eine möglicherweise anders aussehende Änderung eingefügt.

</Details>

<Details title="3.26a" open>

* **`tocbasic`:**
  - Obwohl die Verwendung von `\DeclareNewTOC` ohne optionales Argument nur
    sehr begrenzt sinnvoll ist,  wurde die Fehlermeldung wegen nicht
    definiertem `\kernel@ifnexchar`, die dann auftrat behoben. Ursache war ein
    Tippfehler.

</Details>

<Details title="3.26" open>

* **`scrartcl`, `scrbook`, `scrreprt`:**
  - Werden die Optionen `index=leveldown` oder `bibliography=leveldown`
    verwendet, folgten bisher die Kolumnentitel nicht unbedingt den
    Einstellungen von `\sectionmark` (`scrbook` und `scrreprt`)
    bzw. `\subsectionmark` (`scrartcl`). Das führte beispielsweise bei
    Dokumenten, bei denen die tiefere Ebene überhaupt nicht in den
    Kolumnentiteln verwendet wird, dort im jeweiligen Verzeichnis trotzdem
    auftaucht. Für `toc=leveldown` und `listof=leveldown` gab es ein
    vergleichbares Problem, für das aber `tocbasic` zuständig ist (siehe
    unten).  
	Deshalb wird nun möglichst auf `\addsecmark` bzw. `\subsectionmark` zurück
	gegriffen, wobei im Fall des letzteren lokal `secnumdepth` auf einen sehr
	kleinen Wert gesetzt wird.  
	Das ursprüngliche Problem wurde von Elke gemeldet.
  - `\DeclareSectionCommand` (etc.) verwendet beim Stil `chapter` einen
    negativen Wert für `afterskip` als negativen, vertikalen Abstand nach der
    Überschrift.  
	Hinweis: Diese Erweiterung geht auf eine Anregung von Ulrike.  
	Wichtiger Hinweise: Diese Änderung macht ggf. Änderungen an existierenden
    Dokumenten (oder Wrapper-Klassen oder Paketen) notwendig, soweit diese
    sich bisher darauf verlassen haben, dass stattdessen der Betrag von
    `afterskip` verwendet wird! Da diese Fälle für unwahrscheinlich gehalten
    werden und entsprechende Anpassungen einfach vorgenommen werden können,
    gibt es keine Absicherung via `version`!
  - `\DeclareSectionCommand` (etc.) kennen für den Stil `section` die neuen
    Einstellungen `runin=true`, `runin=false` und `runin=bysign`. Bei den
    beiden ersten wird die Frage Spitzmarke oder freistehende Überschrift
    allein von dieser Einstellung und nicht mehr vom Vorzeichen von
    `afterskip` bestimmt. Ein negatives Vorzeichen bei `afterskip` fügt dann
    entsprechend auch einen negativen vertikalen Abstand ein. Für den
    horizontalen Abstand wird jedoch immer der Betrag von `afterskip`
    verwendet! Die dritte Möglichkeit ist die Voreinstellung und entspricht
    dem bisherigen Verhalten.  
	Hinweis: Diese Erweiterung geht auf eine Anregung von Ulrike zurück.
  - `\DeclareSectionCommand` (etc.) kennt die neuen Einstellungen
    `afterindent=true`, `afterindent=false` und `afterindent=bysign`. Bei den
    beiden ersten wird der Absatzeinzug nach der Überschrift allein von dieser
    Einstellung und nicht mehr vom Vorzeichen von `beforeskip` bestimmt. Ein
    negatives Vorzeichen bei `beforeskip` fügt dann entsprechend auch einen
    negativen Abstand ein! Die dritte Möglichkeit ist bei den Stilen `section`
    und `chapter` die Voreinstellung und entspricht dem bisherigen
    Verhalten. Bei `scrartcl` ist beim Stil `part` die Voreinstellung
    (entsprechend dem bisherigen Verhalten) dagegen `false`. Bei `scrbook` und
    `scrreprt` ist beim Stil `part` die Voreinstellung dagegen `true`. Das
    entspricht nicht 100% dem bisherigen Verhalten, kommt dem aber am
    nächsten.  
	Hinweis: Diese Erweiterung geht auf eine Anregung von Ulrike zurück.
  - Bei den KOMA-Script-Klassen besteht die Möglichkeit, Gliederungsebenen zu
    definieren, deren numerischer Wert für die Eintragsebene (Option
    `toclevel`) um mehr als 1 von den bekannten numerischen Werten für
    Eintragsebenen abweicht. Das kann zu Meldungen der Art:
	>```
	> Package hyperref Warning: Difference (…) between bookmark levels is greater
	> (hyperref)                than one, level fixed on input line …
	>```
	führen, wenn Paket [`hyperref`](https://www.ctan.org/pkg/hyperref) verwendet wird. Eine entsprechende
    Meldung gibt es übrigens auch bei den Standardklassen, wenn man
    Gliederungsebenen, die im Inhaltsverzeichnis aufgeführt sind,
    auslässt. Dieses Problem tritt nicht auf, wenn gleichzeitig Paket [`bookmark`](https://www.ctan.org/pkg/bookmark) geladen wird, da dieses Paket mit solchen Lücken in den
    Bookmarkebenen umgehen kann. Als Workaround laden die KOMA-Script-Klassen
    ab sofort bei `\begin{document}` das Paket [`bookmark`](https://www.ctan.org/pkg/bookmark), falls
    [`hyperref`](https://www.ctan.org/pkg/hyperref) geladen wurde, [`bookmark`](https://www.ctan.org/pkg/bookmark) aber noch
    nicht. Genau genommen ist dieser Zeitpunkt zu spät und es wird empfohlen,
    das Paket selbst zu laden. Es besteht aber auch die Möglichkeit mit Option
    `bookmarkpackage=false` das automatische Laden von [`bookmark`](https://www.ctan.org/pkg/bookmark) zu
    verhindern. In diesem Fall verwenden die KOMA-Script-Klassen für alle mit
    `\DeclareSectionCommand` erzeugten Gliederungsbefehle eine Notlösung für
    das Problem, die jedoch davon ausgeht, dass die Gliederungsebene
    aufeinanderfolgenden definiert werden. Wird beispielsweise erst Ebene 10,
    dann Ebene 12 und dann Ebene 11 definiert, so führt die Notlösung zu
    falschen Ergebnissen. In diesem Fall ist die Verwendung von Paket [`bookmark`](https://www.ctan.org/pkg/bookmark) unumgänglich!  
	Hinweis: Die Änderung geht auf eine Meldung und einen Vorschlag von Heiko
    Oberdiek zurück. Die Änderung führt außerdem zu neuen Info-Meldungen und
    ggf. neuen Warnungen.

* **`scrlttr2`, `scrletter`:**
  - Weil ich die Nase voll von dem Gemaule habe, dass `\@setplength` nicht
    funktioniert, gibt es nun zusätzlich `\setplength`, `\newplength` und
    `\addtoplength`. 
  - Die neuen Anweisungen
    `\setplengthtowidth[`*Fakor*`]{`*Pseudolänge*`}{`*Inhalt*`}`,
    `\setplengthtoheight[`*Fakor*`]{`*Pseudolänge*`}{`*Inhalt*`}`,
    `\setplengthtodepth[`*Fakor*`]{`*Pseudolänge*`}{`*Inhalt*`}` und
    `\setplengthtototalheight[`*Fakor*`]{`*Pseudolänge*`}{`*Inhalt*`}` setzen
    eine *Pseudolänge* auf das Vielfache der Breite, Höhe, Tiefe oder Höhe +
    Tiefe einer Box mit dem angegebenen *Inhalt*.  
	Hinweis: Diese Erweiterung geht auf einen Bugreport von Andreas S. zurück.

* **`scrbase`:**
  - `\FamilyStringKey` und `\FamilyCSKey` funktioniert nun auch korrekt, wenn
    der optionale *Säumniswert* verwendet wird.  
	Das usprünglich Problem wurde von Elke gemeldet.
  - Die bereits seit KOMA-Script 3.20 existierenden
    Befehle `\FamilyUseLengthMacroKey` und `\FamilySetUseLengthMacro` sind
    dokumentiert.  
	Hinweis: Diese Änderung geht auf eine Anregung von Falk zurück.

* **`scrjura`:**
  - Innerhalb von `\Sentence` wird die neue Anweisung `\sentencenumberformat`
    für die Formatierung der Nummer verwendet. In der Voreinstellung ist diese
    als `\textsuperscript{\thesentence}` definiert.  
	Hinweis: Diese Anweisung geht auf eine Nachfrage von m.eik zurück.
  - Es gibt zur Font-Änderung der Satznummern von `\Sentence` das neue Element
    `sentencenumber`.  
	Hinweis: Diese Anweisung geht auf eine Nachfrage von m.eik zurück.

* **`scrlayer-notecolumn`:**
  - Das Paket kann nun auch bei Verwendung von XeLaTeX Änderungen an der
    `slnc`-Datei erkennen. Dazu wird das bisher im (zugegeben inoffiziellen
    aber einzigen) XeTeX Reference Guide vom 6. September 2017 nicht
    dokumentierte Primitiv `\mdfivesum` verwendet. Dies geschieht entgegen
    meiner Überzeugung, dass nicht dokumentierte Dinge nicht existieren.

* **`tocbasic`:**
  - Wird das Feature `leveldown` verwendet, folgten die Kolumnentitel bisher
    nicht unbedingt den Einstellungen von `\sectionmark` (`scrbook` und
    `scrreprt`) bzw. `\subsectionmark` (`scrartcl`). Das führte beispielsweise
	bei Dokumenten, bei denen die tiefere Ebene überhaupt nicht in den
	Kolumnentiteln verwendet wird, dazu, dass dort Verzeichnissen trotzdem
    auftaucht.  
	Deshalb wird nun möglichst auf `\addsecmark` oder ersatzweise auf
    `\sectionmark` bzw. `\subsectionmark` zurück gegriffen, wobei im Fall der
    letzten beiden lokal `secnumdepth` auf einen sehr kleinen Wert gesetzt
    wird.  
	Das ursprüngliche Problem wurde von Elke gemeldet.
  - Behung des Problems, bei Kombination der Features `leveldown` und `totoc`
    werden bei Klassen, bei denen sowohl `\chapter` als auch `\addsec` definiert
    sind (also in der Regel bei `scrbook` und `scrreprt`). In dem Fall wurden
    im entsprechenden Verzeichnis Seitenumbrüche verhindert, wenn über diesem
    Verzeichnis nicht zusätzlich eine Kapitelüberschrift (`\chapter`,
    `\chapter*`, `\addchap` oder `\addchap*`) gesetzt wurd, wie das eigentlich
    vorgesehen ist.  
	Das ursprüngliche Problem wurde von Elke gemeldet.
  - Gibt es Lücken in den numerischen Eintragsebenen und wird Paket [`hyperref`](https://www.ctan.org/pkg/hyperref) verwendet, so gibt es diese Lücken auch bei den numerischen
    Bookmarkebenen. Wird Paket [`bookmark`](https://www.ctan.org/pkg/bookmark) nicht verwendet, so führte
    dies zu Warnungen der Art:
	> ```
	> Package hyperref Warning: Difference (…) between bookmark levels is greater
    > (hyperref)                than one, level fixed on input line …
	> ```
	Dieselbe Meldung erhält man auch, wenn bei den Standardklassen eine
    Gliederungsebene im Dokument ausgelassen wird.  
	Da `tocbasic` die Bookmarkebene immer auf die Eintragsebene setzt, kann
    das Problem bei generellem Auslassen einer Eintragsebene durch Anpassen
    der Eintragsebenen gelöst werden.  
	Es wird empfohlen, immer das Paket [`bookmarks`](https://www.ctan.org/pkg/bookmarks) zu verwenden,
	wenn [`hyperref`](https://www.ctan.org/pkg/hyperref) mit `tocbasic` kombiniert wird. Falls dies nicht
	geschieht, verwenden die KOMA-Script-Klassen nun eine Sonderbehandlung für
	den genannten Fall, so dass die Bookmarkebene angepasst wird.
  - Die neue Anweisung
    `\DeclareTOCStyleEntries[`*Optionen*`]{`*Stil*`}{`*Liste von
    Eintragsebenen*`}` verwendet `\DeclareTOCStyleEntry`, um eine ganze *Liste
    von Eintragsebenen* statt nur einer einzigen zu
    definieren/konfigurieren. Die Eintragsebenen sind dabei durch Komma
    voneinander getrennt.  
	Hinweis: Diese Erweiterung geht auf eine Anregung von Elke zurück.
  - Features (siehe `\setuptoc` und `\unsettoc`), die per `\AtAddToTocList`
    gesetzt werden, haben keinen Vorrang mehr vor Featureeinstellung per
    Option `unset` von `\DeclareNewTOC`. Stattdessen haben die Einstellungen
    per `\DeclareNewTOC` Vorrang. Ich bin mir bewusst, dass dies
    ggf. verhindert, dass beispielsweise `listof=totoc` als Option bei
    `\documentclass` Auswirkungen auf ein Verzeichnis hat, das innerhalb eines
    Pakets per `\DeclareNewTOC[unset=totoc]{…}` definiert wird und diese
    Änderung inkompatibel ist. Trotzdem wird sie nicht per `version`-Option
    abgesichert!  
	Hinweis: Diese Änderung geht auf einen Bugreport von Elke zurück.

</Details>

<Details title="3.25" open>

* **`scrartcl`, `scrbook`, `scrreprt`, `scrlttr2`, `scrextend`, `scrletter`,
  `scrjura`, `scrlayer`, `scrlayer-scrpage`:**
 - Mit der neuen Anweisung
   `\IfIsAliaskomafont{`*Element*`}{`*Dann-Code*`}{`*Sonst-Code*`}` wird der
   *Dann-Code* genau dann ausgeführt, wenn *Element* ein mit `\aliaskomafont`
   aber kein mit `\newkomafont` definiertes Element ist.

* **`scrartcl`, `scrbook`, `scrreprt`, `scrlttr2`, `scrextend`:**
  - Die neue Option `overfullrule` macht eigentlich das gleiche wie `draft`
    aber eben ohne `draft` zu heißen und damit ohne andere Pakete zu
    beeinflussen.  
	Hinweis: Diese neue Option geht in der Tat auf einen gewissen
	Leidensdruck bei mir selbst zurück.

* **`scrartcl`, `scrbook`, `scrreprt`, `scrextend`:**
  - Die neue Anweisung `\frontispiece{`*Frontispiz*`}` kann verwendet werden,
    um die Rückseite des Schmutztitels mit einem Inhalt zu versehen.  
	Hinweis: Eine entsprechende Möglichkeit wurde in der Vergangenheit immer
    wieder nachgefragt (wurde von mir aber immer mit Verweis auf das
    `titlepage`-Projekt abgelehnt).

* **`scrartcl`, `scrbook`, `scrreprt`:**
  - Die mit `\DeclareSectionCommand`, `\ProvideSectionCommand` oder
    `\NewSectionCommand` neu definierten Überschriften des Stils `part`
    verwenden nun nicht mehr dasselbe Font-Element `part`, sondern ein 
	eigenes.  
	Hinweis: Das Problem wurde von Elke gemeldete.
  - Das letzte Wort eines mehrzeilige `\caption`-Textes kann nun ebenfalls
    getrennt werden.
  - Es gibt eine neue Anweisung
    `\setcaptionalignment[`*Gleitumgebung*`]{`*Ausrichtung*`}` mit der man die
    Ausrichtung des gesamten `\caption`-Textes einschließlich des Labels
    beeinflussen kann.  
	Hinweis: Die Erweiterung geht auf einen Vorschlag von voss zurück.
  - Es gibt eine neue Anweisung
    `\partlineswithprefixformat{`*Ebenenname*`}{`*Nummer*`}{`*Titel*`}`. Funktion
    und Parameter entsprechen denen von `\chapterlineswithprefixformat`
    allerdings für Überschriften im Stil `part`.  
	Hinweis: Diese Erweiterung geht auf einen Vorschlag von Elke zurück.
  - Die Umgebung `figure` wird mit Hilfe von `\DeclareNewTOC` definiert und
    verwendet daher den Default-Stil für die Verzeichniseinträge (also
    letztlich Stil `tocline`).
  - Die Umgebung `table` wird mit Hilfe von `\DeclareNewTOC` definiert und
    verwendet daher den Default-Stil für die Verzeichniseinträge (also
    letztlich Stil `tocline`).
  - Die Anweisungen `\@mkleft`, `\@mkright` und `\@mkdouble` werden immer
    definiert und auch verwendet. Daraus resultiert eine Code-Vereinfachung
    bei `\bib@heading` und `\idx@heading`.  
	Hinweis: Diese Änderung geht auf eine [Diskussion im Bugtracker von
    `biblatex`](https://github.com/plk/biblatex/issues/627) zurück.
  - Die interne Anweisung `\bib@heading` stützt sich nun auf die ebenfalls
    interne Anweisung `\bibliography@heading`, die ein Argument
    erwartet. Paketautoren ist die Verwendung sowohl von `\bib@heading` als
    auch `\bibliography@heading` gestattet. Umdefinieren sollten sie die
    Anweisungen allerdings nicht.  
	Hinweis: Diese Änderung geht auf eine sehr konstruktive [Diskussion im
    Bugtracker von `biblatex`](https://github.com/plk/biblatex/issues/627")
    zurück.

* **`scrjura`:**
  - Wenn man für eine mit `\DeclareNewJuraEnvironment` definierten Umgebung
    `foo` mit `\newkomafont{foo.Clause}{…}` einen neuen Font definiert, wird
    dieses nun auch verwenden. Zuvor wurde stattdessen für die Überschrift
    immer das Element `contract.Clause` verwendet.
  - Es gibt für `\DeclareNewJuraEnvironment` eine neue Option `ClauseFont`,
    mit der ein neues Font-Element *Name*`.Clause` definiert und Einstellungen
    dafür vorgenommen werden können.  
	Hinweis: Diese Erweiterung geht auf einen Fehler zurück.
  - Seit dem Entfernen von `\pdfmdfivesum` aus LuaTeX 0.85 konnte das
    Paket nicht mehr selbst feststellen, ob sich die Randnotizen im Vergleich
    zum vorherigen Lauf geändert bzw. verschoben haben, um eine entsprechende
    Rerun-Meldung zu veranlassen. Bei Verwendung von LuaLaTeX > 0.85
    wird daher nun die Prüfsumme mit Hilfe der Lua-Funktion `md5.sumhexa`
    bestimmt.  
	Hinweis: Diese Erweiterung ist Resultat einer Anfrage im „KOMA-Script
	Documentation Project“. Für XeTeX gibt es keine entsprechende
	Lösung, da dieses keinerlei	Prüfsummenberechnung bietet.

* **`scrlayer-notecolumn`:**
  - Problem mit dem Schließen einer Ausgabedatei, die dem Paket gar nicht
    gehört, am Anfang von `\end{document}` behoben. Das Problem führte
    beispielsweise bei der Verwendung von [`biblatex`](https://www.ctan.org/pkg/biblatex) unter Umständen
    dazu, dass dessen `bcf`-Datei unvollständig blieb.  
	Hinweis: Das Problem war von MoeWe gemeldet worden.

* **`scrlayer-scrpage`:**
  - Es gibt eine neue Option `autoenlargeheadfoot`, die in der Voreinstellung
    aktiv ist. Schaltet man die Option beispielsweise mit
    `autoenlargeheadfoot=false` ab, so vergrößert `scrlayer-scrpage` den
    Seitenkopf oder -fuß nicht mehr automatisch, falls der Inhalt zu groß ist,
    sondern warnt nur noch.  
	Hinweis: Diese Erweiterung geht auf eine Frage eines Anwenders zurück.

* **`tocbasic`:**
  - Anweisung `\DeclareNewTOC` kennt zwei neue Optionen `setup=`*Featureliste*
    und `unset=`*Featureliste*, mit der man Features direkt bei der Definition
    via `\setuptoc` und `\unsettoc` setzen bzw. löschen kann.  
	Hinweis: Diese Erweiterung wurde u. a. von Falk vorgeschlagen

* **`typearea`:**
  - Entsprechend dem, was seit Jahren in der KOMA-Script-Anleitung
    dokumentiert ist, verwendet `typearea` nur noch dann, vordefinierte
    `DIV`-Werte, wenn das Papierformat (annähernd) A4 entspricht. Dabei wird
    Papier, das schmaler als 207mm oder breiter als 213mm oder weniger hoch
    als 294mm oder höher als 300m ist nicht mehr als A4 akzeptiert. Es wird
    also der bei Büchern übliche Anschnitt toleriert. Allerdings gibt es
    diesen Einfluss des Papierformats nur, wenn nicht (beispielsweise mit
    `version=3.24`) explizit Kompatibilität zu früheren KOMA-Script-Versionen
    angefordert wurde. In der `log`-Datei wird über die Umschaltung auf
    `DIV=calc` ggf. informiert.  
	Hinweis: Diese Änderung des Verhaltens, das auf einen Bug-Report von Elke
    zurück

</Details>

<Details title="3.24" open>

* **`scrartcl`, `scrbook`, `scrreprt`, `scrlttr2`, `scrletter`, `scrextend`,
  `scrjura`, `scrlayer`, `scrlayer-notecolumn`:**
  - `\use…ofkomafont` wurde in `scrkbase` komplett neu
    implementiert. Dies wurde notwendig, weil die frühere Implementierung zu
    Fehlermeldungen führte, wenn die `fd`-Datei einer beteiligten Fontfamilie
    noch nicht geladen wurde, ein Font also noch nicht initialisiert
    war. Betroffen davon war beispielsweise die Klasse [`komacv`](https://www.ctan.org/pkg/komacv), die
    intensiven Gebraucht von `\usefontofkomafont` für die
    Initialisierung eigener Font-Variablen macht. Es kann keine Kompatibilität
    zu früheren missbräuchlichen Verwendungen von `\setkomafont` und
    `\addtokomafont` garantiert werden.  
	Hinweis: Genau genommen entspringt die Definition von `\usefontofkomafont`
    der Schnapsidee Anwenderfehler tolerant zu behandeln und einem (IMHO) Bug
    in [`color`](https://www.ctan.org/pkg/color) und [`xcolor`](https://www.ctan.org/pkg/xcolor), der zu Fehlern führt, wenn
    `\color` oder `\normalcolor` innerhalb von `\AtBeginDocument` aufgerufen
    wird. Aus Kompatibilitätsgründen werde ich trotzdem vorerst an den
    `\use…ofkomafont`-Befehlen festhalten.
  - Die gesamte Font-Schnittstelle wurde etwas restriktiver bezüglich des
    (leider häufig zu findenden) Missbrauchs. Entsprechend haben sich die
	dokumentierten Voreinstellungen für die mit `\addtokomafontrelaxlist`,
	`\addtokomafontonearglist` und `\addtokomafontgobblelist` konfigurierbaren
	Ausnahmelisten sowie die Funktionsweise von `\use…ofkomafont` geändert.  
	Hinweis: Diese Änderung ist Folge der Beseitigung eines von Ulrike
	gemeldeten Bugs. 

* **`scrartcl`, `scrbook`, `scrreprt`, `scrlttr2`:**
  - Die Warnung vor [`fancyhdr`](https://www.ctan.org/pkg/fancyhdr) wird durch zusätzliche Informationen
    abgeschwächt.  
	Hinweis: Diese Änderung geht auf eine Anregung von Schweinebacke zurück.
  - Es gibt eine nur in `scrkernel-miscellaneous.dtx` dokumentierte
    Möglichkeit für erfahrene Autoren von Wrapperklassen, um Warnungen vor
    einzelnen, nicht komplett kompatiblen Paketen zu deaktivieren. Sollte
    diese Möglichkeit jedoch Eingang in von DAUs erstellte und verbreitete
    Templates finden, werde ich sie wieder entfernen!  
	Hinweis: Diese Änderung geht auf eine Anregung von Ulrike zurück.

* **`scrartcl`, `scrbook`, `scrreprt`:**
  - Bei der Definition von neuen Gliederungsbefehlen im Stil `section` wird
    für fehlende Optionen `indent` und `font` kein Fehler, sondern nur noch
    eine Warnung ausgegeben. `indent` ist dann 0pt (weil das die häufigste
    gewünschte Einstellung ist) und `font` ist `\normalsize` (weil davon
    ausgegangen wird, das tiefere Ebenen implementiert werden). Es kann aber
    sein, dass sich diese Voreinstellungen noch ändern, beispielsweise bei
    `\sub`*Name* die Einstellungen von `\`*Name* übernommen werden.  
	Hinweis: Die Änderung geht auf eine Anregung von Elke zurück.
  - Bei der Definition von neuen Gliederungsbefehlen im Stil `part` werden für
    diverse fehlende Optionen nach einer entsprechenden Warnung die
    Einstellungen für den Befehl `\part` verwendet. Änderungen der
    Einstellungen für `\part` führen damit auch zu Änderungen an den neuen
    Befehlen. Das resultiert daraus, dass die Definition häufig tatsächlich
    nicht als echte neue Ebene erfolgt, sondern für einen Befehl auf gleicher
    Ebene, bei dem nur einige Einstellungen abgewandelt werden sollen.  
	Hinweis: Die Änderung geht auf eine Anregung von Elke zurück.

* **`scrbook`, `scrreprt`:**
  - Bei der Definition von neuen Gliederungsbefehlen im Stil `chapter` werden
    für diverse fehlende Optionen nach einer entsprechenden Warnung die
    Einstellungen für den Befehl `\chapter` verwendet. Änderungen der
    Einstellungen für `\chapter` führen damit auch zu Änderungen an den neuen
    Befehlen. Das resultiert daraus, dass die Definition häufig tatsächlich
    nicht als echte neue Ebene erfolgt, sondern für einen Befehl auf gleicher
    Ebene, bei dem nur einige Einstellungen abgewandelt werden sollen.  
	Hinweis: Die Änderung geht auf eine Anregung von Elke zurück.

* **`scrbase`:**
  - Es gibt eine neue Anweisung
    `\IfRTL{`*TRUE-Argument*`}{`*FALSE-Argument*`}`. Das *TRUE-Argument* wird
    genau dann expandiert, wenn `\if@RTL` definiert und `\iftrue`
    ist. Anderenfalls wird das *FALSE-Argument* expandiert.  
	Hinweis: Die Änderung ist die Folge eines Feature-Request von Behnam.
  - Es gibt eine neue Anweisung
    `\IfLTR{`*TRUE-Argument*`}{`*FALSE-Argument*`}`. Das *TRUE-Argument* wird
    expandiert, wenn `\if@RTL` nicht definiert oder nicht `\iftrue` ist. Ist
    `\if@RTL` hingegen definiert und `\iftrue`, so wird das *FALSE-Argument*
    expandiert.  
	Hinweis: Die Änderung ist die Folge eines Feature-Request von Behnam.

* **`scrlayer`, `scrlayer-scrpage`:**
  - Minimale Unterstützung für *right-to-left*-Satz mit Paketen, die in
    entsprechendem Zustand `\if@RTL` auf `\iftrue` setzen.  
	Hinweis: Die Änderung geht auf einen Feature-Request von Behnam zurück.

* **`scrlayer`:**
  - Es gibt eine neue, globale Option `singlespacing` (Typ einfacher
    Schalter), mit der Kopf und Fuß aller Ebenen-Seitenstile mit
    `\linespread{1}\selectfont` gesetzt werden. Die Option wird vor
    `oninit`-Code ausgeführt und erspart letztlich ein
    `psoninit=\linespread{1}\selectfont`.  
	Hinweis: Diese Änderung ist das Resultat diverser Fragen in verschiedenen
    Foren.
  - Die `\layerwidth`, `\layerheight`, `\layerxoffset` und `\layeryoffset`
    werden nicht mehr mit `\edef`, sondern mit `\protected@edef` definiert,
    wobei die Definition zusätzlich mit `\noexpand\dimexpr` und `\relax`
    eingeschlossen wird. Sie expandieren jetzt also immer zu `\dimexpr
    …\relax` und sind daher genau wie Längen einsetzbar.  
	Diese Änderungen geht auf einen Hinweis von Rolf zurück.

* **`scrlayer-notecolumn`:**
  - Ein `\clearpage`, das zu keiner Seitenausgabe führen soll (beispielsweise
    bei aufeinanderfolgende `\clearpage`), führt zu einer zu frühen Ausgabe
    der Notizen der nachfolgenden Seite und damit zu Seiten, die nur die
    Notizen dieser nachfolgenden Seite enthalten. Das wiederum kann zu
    indeterministischen Zuständen führen, bei denen die Randnotizen zwischen
    Seiten hin und her hüpfen.__
	Hinweis: An dieser Stelle sei noch einmal deutlich darauf hingewiesen,
    dass das Paket lediglich eine Konzeptstudie darstellt. Es handelt sich
    dabei jedoch nicht um ein fertiges Paket. Daher auch die sehr kleine
    Versionsnummer, die mit 0.1 beginnt!  
	Hinweis: Der Fehler wurde Dank der Meldung von Dominik L. gefunden.

</Details>

<Details title="3.23" open>

* **`scrartcl`, `scrbook`, `scrreprt`, `scrextend`:**
  - Umgebung `addmargin` führt nun nicht mehr zu Warnungen wegen doppelt
    definierter Label.
  - Es gibt eine neue Anweisung `\raggedfootnote`, mit der man die Ausrichtung
    der Fußnoten verändern kann (vgl. `\raggedsection`, `\raggedchapter` 
	etc.)  
	Hinweis: Diese Änderung wurde auf Nachfrage von F. H. implementiert.

* **`scrartcl`, `scrbook`, `scrreprt`:**
  - Da das Paket [`minitoc`](https://www.ctan.org/pkg/minitoc) eine unbekannte Zahl an Möglichkeiten der
    KOMA-Script-Klassen beschädigt, gibt es eine Warnung vor der Benutzung des
    Pakets.
	
* **`scrartcl`:**
  - Es gibt einen Workaround gegen die Zerstörung der `\@sect`-Erweiterung von
    KOMA-Script durch [`minitoc`](https://www.ctan.org/pkg/minitoc). Damit funktionieren nicht nur
    Optionen wie `numbers=enddot` wieder, sondern auch die Erweiterung des
    optionalen Argument von Gliederungsbefehlen.

* **`scrbase`:**
  - Der Code von `\AtEndOfFamilyOptions` verschwindet nicht mehr im Nirwana,
    wenn innerhalb einer Option sowohl `\AtEndOfFamilyOptions` verwendet als
    auch danach mit `\FamilyOption` oder `\FamilyOptions` eine weitere Option
    derselben Familie aufgerufen wird.
  - Der Code von `\AtEndOfFamilyOptions` wird nun korrekt ausgeführt, wenn
    eine Option, die `\AtEndOfFamilyOptions` verwendet, per
    `\ExecuteFamilyOptions` ausgeführt.
  - `\ifdvioutput` liefert mit LuaTeX nach Version 0.85 nun nicht mehr
    fälschlich *true* als Ergebnis, wenn nicht ausdrücklich DVI-Ausgabe
    eingestellt wurde. Es ist nun also nicht mehr notwendig
	```latex
	\usepackage{luatex85}
	```
	zu laden, um ein korrektes Ergebnis zu erzielen. Übrigens wurde
    `\ifpdfoutput` bereits vorher korrekt behandelt.
  - Es gibt von `\AtEndOfFamilyOptions` eine neue Stern-Form
    `\AtEndOfFamilyOptions*{`*Code*`}`. Während im Falle verschachtelter
    Aufrufe von `\FamilyOptions` für dieselbe Familie die Variante ohne Stern
    *Code* am Ende des Aufrufs ausführt, in dem es verwendet wurde, führt die
    Sternvariante *Code* erst am Ende des obersten Aufrufs (bis hin zum Aufruf
    von `\FamilyProcessOptions`) aus.

* **`scrhack`:**
  - Es gibt einen neuen Hack für das Paket [`nomencl`](https://www.ctan.org/pkg/nomencl). Mit diesem
    Hack wird das Paket teilweise unter die Kontrolle von Paket `tocbasic`
    gestellt, so dass es nicht nur die KOMA-Script-Option
    `toc=indentunnumbered` berücksichtigt, sondern auch lebende Kolumnentitel
    passend gesetzt werden und mit `\setuptoc` diverse Features aktiviert
    werden können, beispielsweise `numbered` oder `leveldown`. Das Paket wird
    also insgesamt (und nicht nur für die Verwendung mit KOMA-Script-Klassen)
    aufgewertet. Um dies zu erreichen wurde die Umgebung `thenomenclature` mit
    Hilfe von [`xpatch`](https://www.ctan.org/pkg/xpatch) modifiziert.

* **`scrlayer-notecolumn`:**  
  Hinweis: Da `scrlayer-notecolumn` nur eine Konzeptstudie ist, ist gar nicht
  beabsichtigt, damit alle möglichen Erwartungen zu befriedigen. Probleme
  stellen daher nicht automatisch Bugs dar.
  - `\label`, `\index` und `\glossary` funktionieren nun in Notizspalten.
  - Es gibt eine neue Sternvariante von `\makenote` mit denselben
    Argumenten. Diese verwendet jedoch `\detokenize` für das Schreiben der
    Notiz in die Hilfsdatei. Es werden also normalerweise keine Befehle
    expandiert (aber als solche erkannt). Dadurch kann man sich zwar die
    Verwendung von `\protect` sparen, dafür sollte man aber keine Befehle in
    der Notiz verwenden, die expandiert werden sollten, beispielsweise weil
    sie zu einem anderen Zeitpunkt eine andere Bedeutung haben.

* **`scrletter`:**
  - Ich weiß zwar nicht, wozu es gut sein soll, aber das Paket funktioniert
    nun auf besonderen Wunsch bis zu einem gewissen Grad auch mit den
    Standardklassen.

* **`typearea`:**
  - Bei Verwendung von Option `footsepline` wird nun korrekt `footinclude`
    angepasst. Vermutlich seit Version 3.20 wurde zuvor stattdessen fälschlich
    `headinclude` angepasst.
  - Bei Verwendung von `\activateareas` innerhalb des Dokuments, also auch bei
    Verwendung von `\typearea` und Optionen, die innerhalb des Dokuments zu
    einem solchen Aufruf führen, gibt es keine Warnung mehr, dass man dies nur
    vor `\begin{document}` tun sollte. Stattdessen zähle ich darauf, dass die
    entsprechende Neuberechnung von internen LaTeX-Längen auch weiterhin
    funktionieren wird und gebe nur noch eine Info aus, dass an der Stelle mit
    einem schmutzigen Trick gearbeitet wird.

</Details>

<Details title="3.22" open>

* Die Anleitung ist farblich neu gestaltet. An anderer Stelle in Erklärungen
  verwendete Befehle, Umgebungen, Zähler, Optionen sind direkt auf die für das
  jeweilige Kapitel relevanteste Erklärung derselben verlinkt. Dies ist ein
  Nebeneffekt davon, dass die eBook-Fassung des KOMA-Script-Buchs nun direkt
  von mir erstellt wird und mir dabei eine vollständige Verlinkung
  wünschenswert erschien.

* **`scrartcl`, `scrbook`, `scrreprt`, `scrextend`, `scrlttr2`:**
  - Listen und davon abgeleitete Umgebungen innerhalb von Fußnoten
	beeinflussen den Einzug nach der Umgebung nicht mehr in unerwarteter
	Weise.  
	Bemerkung: Ich halte wenig von Fußnotenapparaten, die derart ausufern,
    dass darin der Einsatz von Listen sinnvoll wäre. Aber die Leute, die das
    machen, interessiert das ja leider nicht.  
	Hinweis: Zur Behebung des Problems wird eine komplett neue Methode für die
    Ausgabe der Fußnoten verwendet, soweit nicht Kompatibilität zu eine
    KOMA-Script-Version kleiner 3.22 eingestellt ist (Option `version`).
  - Die `addmargin*`-Umgebung meldet bei einseitigen Dokumenten nicht mehr
    fälschlich einen Seitenumbruch innerhalb der Umgebung einschl. einer
    Warnung vor daraus entstehenden Problemen. Tatsächlich gibt es kein
    Problem, da die `addmargin*`-Umgebung bei einseitigen Dokumenten die
    Offsets genau wie `addmargin` einstellt und eben nicht nach linken und
    rechten Seiten unterscheidet. Mit der Änderung muss man nun aber nicht
    mehr darauf achten, in einseitigen Dokumenten eben nicht `addmargin*`,
    sondern ausschließlich `addmargin` zu verwenden. Das erleichtert den
    Wechsel zwischen einseitigem und doppelseitigem Satz oder umgekehrt.

* **`scrartcl`, `scrbook`, `scrreprt`:**
  - Bei Verwendung von `\printdate` aus dem Paket [`isodate`](https://www.ctan.org/pkg/isodate)
    innerhalb von `\caption` funktioniert wieder.  
	Hinweis: Das zeitwilige Problem war durch Beseitigung eines alten
    entstanden.
  - `\newline` innerhalb des Textes von `\caption` ist zwar weiterhin nicht
    empfohlen, funktioniert aber wie erwartet und schaltet auch auf
    mehrzeilige Verarbeitung. `\\` benötigt hingegen ggf. weiterhin ein
    `\protect`.

* **`scrartcl`, `scrbook`, `scrreprt`:**
  - Genau wie durch Tabelle 21.3 der Anleitung angedeutet, führen positive
    Werte für `beforeskip` bei `\DeclareSectionCommand` und Kapitelbefehle
    (`style=chapter`) zu einem Absatzeinzug beim auf die Überschrift folgenden
    Absatz.

* **`scrlttr2`, `scrletter`:**
  - Schriftänderungen für `toname` oder `toaddress` sind nun korrekt auf diese
    beiden Elemente beschränkt.
  - Ein Problem bei leerem Bezeichner für die Variable `ccseparator` bzw. bei
    leerem Separator wurde behoben.

* **`scrlayer`:**
  - Option `automark` meldet bei Klassen, die weder über `\chapter` und
    `\section` noch über `\section` und `\subsection` verfügen, keinen Fehler
    mehr. Das betraf beispielsweise `scrlttr2`. Mit Anweisung `\automark{}`
    (ja, mit einem leeren obligatorsichen Argument) trat das Problem hingegen
    nicht auf.
  - Die Layer-Einstellungen `everypage` funktioniert nun wie dokumentiert.
  - Die Layer-Einstellungen `unrestricted` funktioniert nun wie dokumentiert.

* **`scrlayer-notecolumn`:**
  - Funktioniert nun auch mit LuaTeX ab Version 0.85. Ein Workaround wie
    ```latex
	\makeatletter
	\providecommand*{\scr@lastypos}{\lastypos}
	\makeatother
	```
	oder
	```latex
	\usepackage{luatex85}
	```
	entfällt damit.

* **`tocbasic`:**
  - Einstellung `dynnumwidth` funktioniert nun zuverlässig.
  - `\removefromtoclist` funktioniert nun.

* **`typearea`:**
  - Die schon lange überholte Schreibweisen `BCOR`*Wert* und `DIV`*Wert*
    ergeben nun korrekt eine Warnung und setzen die Kompatibilität auf
    `version=first`.
  - Wird `typearea` zusammen mit dem [`preview`](https://www.ctan.org/pkg/preview)-Paket und dessen
    Option `tightpage` verwendet, so werden am Dokumentanfang keine `\special`
	für die Papiergröße mehr geschrieben, weil das [`preview`](https://www.ctan.org/pkg/preview)-Paket
    damit nicht umgehen kann, falls XeLaTeX verwendet wird. Erkannt wird
    dies über das Vorhandensein von `\pr@nextbb` und `\ifPreview` gleich
    `\iftrue`. Dies ist in erster Linie ein Zugeständnis an LyX.
  - Bei Option `paper` hängt es von der gewählten Orientierung des Papiers ab,
    ob die Semantik `paper=`*Breite*`:`*Höhe* oder `paper=`*Höhe*`:`*Breite*
    ist. Bei `paper=landscape` oder `paper=seascape` ist der kleinere Wert
    immer die Höhe und der größere die Breite. Dagegen ist bei
    `paper=portrait` (Voreinstellung) der kleinere Wert immer die Breite und
    der größere die Höhe.  
	Mit `version=3.21` kann auf das frühere Verhalten zurückgeschaltet
    werden. Es sei aber darauf hingewiesen, dass dann aus Gründen der
    Kompatibilität die Reihenfolge von Angabe der Papiergröße und Angabe der
    Ausrichtung von Bedeutung sein kann.
  - Es gibt eine neue Option, mit der Einstellungen von `typearea` 
	an [`geometry`](https://www.ctan.org/pkg/geometry) weitergereicht werden, falls das 
	Paket [`geometry`](https://www.ctan.org/pkg/geometry) geladen wird. Das ermöglicht theoretisch auch,
	das Seitenformat bzw. die Seitenausrichtung im Dokument über `typearea` zu
	ändern, die Verteilung der Ränder und die Größe des Satzspiegels dann aber
	mit `\newgeometry` zu verändern ([`geometry`](https://www.ctan.org/pkg/geometry) alleine bietet das
	nicht). Ebenso kann man mit `typearea` grundsätzliche Einstellungen
	vornehmen, aber anschließend über [`geometry`](https://www.ctan.org/pkg/geometry) beispielsweise nur
	den linken und rechten Rand ändern. Die Option gilt aber weiterhin als
	experimentell.

</Details>

<Details title="3.21" open>

* **`scrartcl`, `scrbook`, `scrreprt`:**
  - Das Problem mit dem möglichen Seitenumbruch zwischen der Farbeinstellung
    einer Überschrift aus dem individuellen Element der Überschrift und der
    Ausgabe der Überschrift bei gleichzeitigem Verschwinden der Farbe bei
    Überschriften des Stils `section` wurde behoben. Es muss nun also nicht
    mehr explizit `\nobreak` nach `\color{…}` eingefügt werden.
  - Die vertikalen Abstände über und unter `\caption` wurden korrigiert. Dafür
    extra das Paket [`caption`](https://www.ctan.org/pkg/caption) zu laden, ist also nicht mehr
    notwendig.
  - Durch die Beseitigung eines Bugs in der Ausgabe von `\caption` etc. kann
    es zu Änderungen beim Umbruch kommen. Dies kann nicht durch Wahl eines
    passenden Wertes für Option `version` verhindert werden, da es sich – wie
    gesagt – um die Beseitigung eines Bugs und nicht nur um eine
    typographische Verbesserung handelt.

* **`scrbase`:**
  - `em`, `ex` und das nur bei `pdflatex` und `lualatex` vorhandene `px`
    werden von `\ifdim` als Einheit akzeptiert. Zuvor war das leider nicht der
    Fall.
  - `\ifpdfoutput` (bzw. das interne `\scr@ifpdfoutput`) erkennen nun auch bei
    LuaLaTeX nach Version 0.85 die PDF-Ausgabe.

* **`scrlttr2`, `scrletter`:**
  - Die Spaßoption `XXXXXdoesnotlikesansseriftitles`[^egreg] wird auch von
    diesen beiden beachtet. Das Paket kennt die Option allerdings nicht
    selbst, sondern verwendet lediglich die Einstellungen der jeweiligen
    Klasse. Da die Option nicht offiziell ist, gibt es dafür keinen Support!

[^egreg]: Der ursprüngliche Name der Option wurde auf Bitten eines Anwenders
	verschleidert.

* **`scrlttr2`:**
  - Die Verwendung von `\item` innerhalb von `description`-Umgebungen führt
    nun nicht mehr zu einem Fehler:
	```
	! Undefined control sequence.
	\descfont ->\@gr@gsffamily
							  \bfseries

    ```
	Der Workaround
	```latex
	\setkomafont{descriptionlabel}{\sffamily\bfseries}
	```
	in der Dokumentpräambel entfällt damit.
	
* **`tocbasic`:**
  - In Vorbereitung auf eine eventuell geplante Möglichkeit TOC-Features
    direkt bei `\DeclareNewTOC` als Optionen angeben zu können, wurde der
    Präfix für Eintragsstiloptionen in `tocentry` geändert. Der alte Präfix
    funktioniert (mit Warnung) so lange weiter, bis das Präfix `toc` für
    Verzeichnisoptionen (statt Verzeichniseintragsoptionen) benötigt
    wird. Dies war eigentlich von Anfang an so geplant (vgl. Option
    `tocentrystyle`), wurde dann aber bei der Übernahme entsprechenden Codes
    von `\DeclareSectionCommand` leider vergessen.
  - Der Verzeichniseintragsstil `tocline` hat eine neue Eigenschaft
    `raggedentrytext`. Wird dieser einfache Schalter gesetzt, so wird der Text
    des Eintrags nicht mehr im Blocksatz, sondern im Flattersatz (nahezu ohne
    automatische Trennung) gesetzt.  
	Die Option ist kompatibel zur früher für `scrbook` und `scrreprt`
    dokumentierten Möglichkeit der Definition von `\raggedchapterentry`
    implementiert. Das Makro `\raggedchapterentry` wird aber im Gegensatz zur
    früheren Implementierung nicht mehr ausgeführt, sondern dient nur noch als
    Indikator.
  - Die Nummer der Verzeichnisebene wird automatisch auch als
    `\toclevel@`*Ebene* definiert. Dies geschieht zusätzlich zu
    `\`*Ebene*`tocdepth`, weil es u. U. mehrfach erfolgen muss, 
	weil [`hyperref`](https://www.ctan.org/pkg/hyperref) die Werte für einige Ebenen wieder überschreibt.

* **`typearea`:**
  - Fehlermeldung
    ```
    Missing number, treated as zero. 
	p l.2 \begin{document}
	```
	bei Verwendung von LuaLaTeX ohne `\usepackage{luatex85}` behoben.

</Details>

<Details title="3.20" open>

* **`scrartcl`, `scrbook`, `scrreprt`, `scrlttr2`:**
  - Die erste Schriftänderung nach `\begin{document}` erfolgt nicht mehr
    unabhängig von den Einstellungen immer mit `parskip=relative`.

* **`scrartcl`, `scrbook`, `scrreprt`:**
  - Die Änderung der Formatierung von `\caption` via
    `\KOMAoption{captions=heading}` oder `\KOMAoptions{captions=signature}`
    funktioniert nun auch innerhalb einer `figure`- oder `table`-Umgebung. Der
    Workaround der expliziten Verwendung von `\captionabove` oder
    `\captionbelow` entfällt damit.
  - Die automatische Ausführung von `\sloppy` bei Verwendung von `twocolumn`
    als Klassenoption funktioniert nun. Es wird also kein explizites `\sloppy`
    mehr benötigt.
  - Der Überschriftenstil `section` setzt `\parfillskip` nun korrekt auf `0pt
    plus 1fil` wenn `afterskip` positiv ist. Zuvor gab es fälschlich eine
    Abhängigkeit von einer negativen Einstellung für `beforeskip`.
  - Die Einstellung `counterwithin` für `\DeclareSectionCommand` definiert nun
    `\the`*Zählername* korrekt.
  - Die Absatzeinstellungen für die Titelseiten bei Verwendung von
    `titlepage=firstistcover` wurden korrigiert. Die Inhalte von
    `\uppertitleback` und `\lowertitleback` um `\parindent` werden also nicht
    mehr zu weit rechts platziert.
  - Während `\DeclareSectionCommands` etc. weiterhin alle für irgendwelche
    Stile definierten Optionen akzeptieren, melden `\DeclareSectionCommand`
    etc. Optionen, die für den aktuellen Stil nicht definiert sind, als
    Fehler.
  - Verzeichniseinträge im Stil `part` oder `section` beachten Option
    `tocindent` von `\DeclareSectionCommand` etc.
  - Wie bereits durch entsprechende Warnungen seit KOMA-Script 3.12
    angekündigt werden die seit zwanzig Jahren vom LaTeX-Kern selbst nicht
    mehr bereitgestellten veralteten Font-Anweisungen `\rm`, `\sf`, `\tt`,
    `\bf`, `\it`, `\sl`, `\sc` und `\sfb` nicht mehr angeboten bzw. melden nun
    einen Fehler. In der Hilfe zur Fehlermeldung wird ausführlich erklärt, wie
    man den Fehler ggf. los wird. Dazu gehört für Notfälle auch die
    vorübergehende Bereitstellung einer Option, die aus der Fehlermeldung
    wieder eine Warnung macht.

* **`scrartcl`:**
  - `\DeclareSectionCommand` etc. haben eine neue Option
    `tocstyle=`*Verzeichnisstil*, mit dem sich der Stil des
    Verzeichniseintrags bestimmten lässt. Derzeit gibt es folgende
    klassenspezifischen Stile:
    - `part`, ein von Stil `tocline` abgeleiteter Stil für Einträge der Ebene
      `part`,
	- `section`, ein von Stil `tocline` abgeleiteter Stil für Einträge der
      Ebene `section`,
	- `subsection`, ein von Stil `tocline` abgeleiteter Stil für Einträge der
      Ebenen `subsection` bis `subparagraph` sowie für Einträge in
      Verzeichnisse wie das Abbildungs- oder das Tabellenverzeichnis,
	- `default`, ein von Stil `subsection` abgeleiteter Stil für Einträge
      nicht vorkonfigurierter Ebenen.
    Näheres zur Definition und Verwendung von Verzeichniseintragsstilen ist
    den Erweiterungen für Paket `tocbasic` zu entnehmen. 

* **`scrbook`, `scrreprt`:**
  - `\DeclareSectionCommand` etc. haben eine neue Option
    `tocstyle=`*Verzeichnisstil*, mit dem sich der Stil des
    Verzeichniseintrags bestimmten lässt. Zunächst gibt es die folgenden
    klassenspezifischen Stile:
    - `part`, ein von Stil `tocline` abgeleiteter Stil für Einträge der Ebene
      `part`,
	- `chapter`, ein von Stil `tocline` abgeleiteter Stil für Einträge der
      Ebene `chapter`,
	- `section`, ein von Stil `tocline` abgeleiteter Stil für Einträge der
      Ebenen `section` bis `subparagraph` sowie für Einträge in Verzeichnisse
      wie das Abbildungs- oder das Tabellenverzeichnis,
	- `default`, ein von Stil `section` abgeleiteter Stil für Einträge nicht
      vorkonfigurierter Ebenen.
    Näheres zur Definition und Verwendung von Verzeichniseintragsstilen ist
    den Erweiterungen für Paket tocbasic zu entnehmen.

* **`scrbook`:**
  - Bei Verwendung der Voreinstellung `twoside` wird nun korrekt
    `\flushbottom` ausgeführt. Zuvor funktionierte das nur, wenn explizit
    `twoside` als Option bei `\documentclass` angegeben war.

* **`scrbase`:**
  - Auch bei Verwendung von [`polyglossia`](https://www.ctan.org/pkg/polyglossia) werden nun die für die
    Sprachen `ngerman`, `austrian`, `naustrian`, `swiss` oder `nswiss` in
    `\captions…` definierten Begriffe verwendet, wenn 
	bei [`polyglossia`](https://www.ctan.org/pkg/polyglossia) die Sprache `german` mit den entsprechenden
    Einstellungen für `variant` und `spelling` gewählt wird. Das hat
    beispielsweise Auswirkungen auf die Ausgabe von `\phonename` in `scrlttr2`
    oder `scrletter`.
  - Neue Anweisung
    `\ifislengthprimitiv{`*Anweisung*`}{`*Dann-Code*`}{`*Sonst-Code*`}` führt
    *Dann-Code* genau dann aus, wenn *Anweisung* eines der Primitive
    `\baselineskip`, `\parskip`, `\parindent`, `\hsize`, `\vsize`,
    `\pdfpagewidth`, `\pdfpageheight` gefolgt von beliebig vielen `\relax`
    ist. Anderenfalls wird *Sonst-Code* ausgeführt.
  - Neue Anweisung
    `\ifisdefchar{`*Anweisung*`}{`*Dann-Code*`}{`*Sonst-Code*`}` führt
    *Dann-Code* genau dann aus, wenn *Anweisung* eine mit `\chardef`
    definierte Zeichennummer ist. Anderenfalls wird *Sonst-Code* ausgeführt.
  - `\ifisdimension` wurde neu implementiert. Der Test kann nun etwas
    zuverlässiger prüfen, ob das erste Argument als Wert für ein
    `\dimen`-Register taugt. Allerdings führen viele Syntaxfehler noch immer
    zu Fehlermeldungen, da nach wie vor eine Heuristik verwendet wird. Eine
    wirklich zuverlässige Implementierung, die mit der Zuverlässigkeit von
    `\ifisinteger` vergleichbar wäre, war mir schlicht zu aufwändig.
  - `\ifisglue` wurde neu implementiert. Der Test kann nun etwas zuverlässiger
    prüfen, ob das erste Argument als Wert für eine LaTeX-Länge oder ein
    `\skip-`Register  taugt. Allerdings führen viele Syntaxfehler noch immer
    zu Fehlermeldungen, da nach wie vor eine Heuristik verwendet wird. Eine
    wirklich zuverlässige Implementierung, die mit der Zuverlässigkeit von
    `\ifisinteger` vergleichbar wäre, war mir schlicht zu aufwändig.
  - `\ifisinteger` wurde neu implementiert. Der Test kann nun sehr zuverlässig
    überprüfen, ob das erste Argument (ggf. über mehrere Stufen) genau zu
    einer ganzen Zahl gefolgt von beliebig vielen `\relax` expandiert. Die
    alte Implementierung hatte dagegen beispielsweise mit nicht voll
    expandierbaren Anweisungen im ersten Argument erhebliche Probleme. Nach
    wie vor ist die Anweisung selbst nicht voll expandierbar.
  - `\ifisnumexpr` wurde neu implementiert. Der Test kann nun sehr zuverlässig
    überprüfen, ob das erste Argument (ggf. über mehrere Stufen) genau zu
    einer `\numexpr` gefolgt von beliebig vielen `\relax` expandiert. Die alte
    Implementierung hatte dagegen beispielsweise mit nicht voll expandierbaren
    Anweisungen im ersten Argument erhebliche Probleme. Nach wie vor ist die
    Anweisung selbst nicht voll expandierbar und führt bei fehlerhaften
    Ausdrücken zu Fehlermeldungen.
  - `\ifisglueexpr` wurde neu implementiert. Der Test kann nun sehr
    zuverlässig überprüfen, ob das erste Argument (ggf. über mehrere Stufen)
    genau zu einer `\glueexpr` gefolgt von beliebig vielen `\relax`
    expandiert. Die alte Implementierung hatte dagegen beispielsweise mit
    nicht voll expandierbaren Anweisungen im ersten Argument erhebliche
    Probleme. Nach wie vor ist die Anweisung selbst nicht voll expandierbar
    und führt bei fehlerhaften Ausdrücken zu Fehlermeldungen.
  - `\ifisdimexpr` wurde neu implementiert. Der Test kann nun sehr zuverlässig
    überprüfen, ob das erste Argument (ggf. über mehrere Stufen) genau zu
    einer `\dimexpr` gefolgt von beliebig vielen `\relax` expandiert. Die alte
    Implementierung hatte dagegen beispielsweise mit nicht voll expandierbaren
    Anweisungen im ersten Argument erhebliche Probleme. Nach wie vor ist die
    Anweisung selbst nicht voll expandierbar und führt bei fehlerhaften
    Ausdrücken zu Fehlermeldungen.
  - `\ifisdimen` wurde neu implementiert. Der Test kann nun sehr zuverlässig
    überprüfen, ob das erste Argument (ggf. über mehrere Stufen) genau zu
    einem `\dimen`-Register gefolgt von beliebig vielen `\relax`
    expandiert. Die alte Implementierung hatte dagegen beispielsweise mit
    nicht voll expandierbaren Anweisungen im ersten Argument erhebliche
    Probleme. Nach wie vor ist die Anweisung selbst nicht voll expandierbar!
  - `\ifisskip` wurde neu implementiert. Der Test kann nun sehr zuverlässig
    überprüfen, ob das erste Argument (ggf. über mehrere Stufen) genau zu
    einem `\skip`-Register gefolgt von beliebig vielen `\relax`
    expandiert. Die alte Implementierung hatte dagegen beispielsweise mit
    nicht voll expandierbaren Anweisungen im ersten Argument erhebliche
    Probleme. Nach wie vor ist die Anweisung selbst nicht voll expandierbar!
    Wie angedeutet werden `\baselineskip` und `\parskip` nicht länger als
    `\skip`-Register akzeptiert.
  - `\ifiscount` wurde neu implementiert. Der Test kann nun sehr zuverlässig
    überprüfen, ob das erste Argument (ggf. über mehrere Stufen) genau zu
    einem `\count`-Register gefolgt von beliebig vielen `\relax`
    expandiert. Die alte Implementierung hatte dagegen beispielsweise mit
    nicht voll expandierbaren Anweisungen im ersten Argument erhebliche
    Probleme. Nach wie vor ist die Anweisung selbst nicht voll expandierbar!

* **`scrhack`:**
  - `scrhack` kann jetzt auch vor [`pdfpages`](https://www.ctan.org/pkg/pdfpages) geladen werden. Zuvor
    trat in diesem Fall ein obskurer Fehler während des Ladens 
	von [`xpatch`](https://www.ctan.org/pkg/xpatch) innerhalb des `lscape`-Hacks auf. Die Ursache lag
    primär darin, dass [`pdfpages`](https://www.ctan.org/pkg/pdfpages) unsauber [`pdflscape`](https://www.ctan.org/pkg/pdflscape) via
    `\AtBeginDocument` lädt, was es natürlich nicht tun sollte. Man muss jetzt
    also nicht mehr auf die Reihenfolge achten oder 
	selbst [`pdflscape`](https://www.ctan.org/pkg/pdflscape) noch vor [`pdfpages`](https://www.ctan.org/pkg/pdfpages) laden.

* **`scrjura`:**
  - Querverweise auf den ersten Satz eines Paragraphen sind nun bei
    Nummerierung dieses Satzes per `\Sentence` korrekt. Der Workaround mit:
	```latex
	\makeatletter
	\@ifpackagelater{scrjura}{2015/11/03}{}{%
	  \renewcommand*{\contract@sentence}{%
		\ifvmode
		  \leavevmode
		\else
		  \refstepcounter{sentence}%
		\fi
		\textsuperscript{\thesentence}\nobreak\hskip\z@
	  }
	}
	\makeatother
    ```
	in der Dokumentpräambel nach dem Laden von `scrjura` entfällt damit.
  - Die interne Umdefinierung von `\@doendpe` berücksichtigt die Änderungen in
    LaTeX 2015-01-01.

* **`tocbasic`:**
  Das Paket hat Unterstützung für Verzeichniseintragsstile erhalten. Es können
  sowohl neue als auch vorhandene Eintragsebenen mit einem
  Verzeichniseintragsstil versehen werden. Die Verzeichniseintragsstile bieten
  unterschiedliche Eigenschaften, die abhängig von der Ebene unterschiedliche
  Einstellungen haben können. Darüber werden dann beispielsweise Einzug und
  Nummernbreite festgelegt. Es gibt auch sehr flexible Eintragsstile, bei
  denen das Aussehen des Eintrags weitreichend über Eigenschaften beeinflusst
  werden kann. Zentral für die Verwendung von Verzeichniseintragsstilen sind
  folgende Befehle:
  - `\DeclareTOCEntryStyle{`*Stil*`}[`*Initialisierungscode*`]{`*Code*`}`
    erlaubt die Definition eines neuen Verzeichniseintragsstils.
  - `\DeclareTOCStyleEntry[`*Optionenliste*`]{`*Eintragsebene*`}{`*Stil*`}`
    erlaubt einer *Eintragsebene* einen *Stil* zuzuweisen und über die
    *Optionenliste* dabei die Eigenschaften festzulegen bzw. zu ändern.
	
  Mehrere Verzeichnisstile sind vordefiniert. Die Eigenschaften der
  Verzeichnisstile können bei Verwendung einer KOMA-Script-Klasse auch über
  `\DeclareSectionCommand` etc. gesetzt werden. Dazu sind die Eigenschaften
  der Verzeichnisstile mit dem Präfix `toc` zu versehen. Vordefiniert sind
  folgende Verzeichniseintragsstile:
  - `gobble`:
    Der einfachste Stil, der vorstellbar ist. Er tut schlicht nichts,
    vernichtet also die Einträge quasi und das unabhängig von deren Ebene.
  - `largetocline`:
    Das ist der von den Standardklassen bekannte Stil für Einträge der Ebene
    `part`. Er existiert tatsächlich nur aus Gründen der Kompatibilität und
    als Beispielimplementierung für Paketautoren. Es empfohlen, stattdessen
    den sehr viel mächtigeren Stil `tocline` entsprechend konfiguriert zu
    verwenden.
  - `undottedtocline`:
    Das ist der von den Standardklassen bekannte Stil für Einträge der Ebene
    `chapter` (Klasse book und Klasse report) bzw. `section` (Klasse
    article). Er existiert tatsächlich nur aus Gründen der Kompatibilität und
    als Beispielimplementierung für Paketautoren. Es empfohlen, stattdessen
    den sehr viel mächtigeren Stil `tocline` entsprechend konfiguriert zu
    verwenden.
  - `dottedtocline`:
    Das ist der von den Standardklassen bekannte Stil für Einträge aller
    Art. Er basiert auf der Anweisung `\@dottedtocline` und  existiert
    tatsächlich nur aus Gründen der Kompatibilität und als
    Beispielimplementierung für Paketautoren. Es empfohlen, stattdessen den
    sehr viel mächtigeren Stil `tocline` entsprechend konfiguriert zu
    verwenden.
  - `tocline`:
    Stark konfigurierbarer Stil für ein- und mehrzeilige
    Verzeichniseinträge. Davon abgeleitete Stile werden auch von den
    KOMA-Script-Klassen für sämtliche Einträge in das Inhaltsverzeichnis oder
    Gleitumgebungsverzeichnisse wie das Abbildungs- oder Tabellenverzeichnis
    verwendet.

  Näheres zu Verzeichnisstilen ist der Anleitung zu entnehmen.

* **`typearea`:**
  - Bis Version 3.18a wurden im Zusammenspiel mit den KOMA-Script-Klassen
	innerhalb des (ersten) optionalen Arguments von `\documentclass` bei
	Abfolgen der Optionen `headsepline` (nur ohne Wert oder mit den Werten für
	`true` oder `false`) und `headinclude` die Einstellungen für `headinclude`
	immer bevorzugt. Das geschah aufgrund eines Bugs. Durch Behebung des Bugs
	wirkte sich ab Version 3.18a nun ein Designfehler aus, der dazu führte,
	dass `headsepline=true` (oder entsprechendes) sich durchsetzt. Tatsächlich
	gewünscht ist, dass sich immer die letzte Einstellung durchsetzt, was nun
	auch der Fall ist.
  - Bis Version 3.18a wurden im Zusammenspiel mit den KOMA-Script-Klassen
    innerhalb des (ersten) optionalen Arguments von `\documentclass` bei
    Abfolgen der Optionen `footsepline` (nur ohne Wert oder mit den Werten
    für `true` oder `false`) und `footinclude` die Einstellungen für
    `footinclude` immer bevorzugt. Das geschah aufgrund eines Bugs. Durch
    Behebung des Bugs wirkte sich ab Version 3.18a ein Designfehler aus, der
    dazu führt, dass `footsepline=true` (oder entsprechendes) sich
    durchsetzt. Tatsächlich gewünscht ist, dass sich immer die letzte
    Einstellung durchsetzt, was nun auch der Fall ist.

</Details>

## Version 3.10 bis 3.19a

<Details title="3.19a" open>

* **`scrbook`:**
  - Kapitel werden nach `\frontmatter` (bis `\mainmatter`) und nach
    `\backmatter` nicht mehr nummeriert (schon gar nicht, ohne die Nummer
    zu erhöhen).

</Details>

<Details title="3.19" open>

* **`scrartcl`, `scrbook`, `scrreprt`, `scrlttr2`:**
  - Bei den Optionen `parskip=half*`, `parskip=half+`, `parskip=full*` und
    `parskip=full+` wird `\parfillskip` nun korrekt berechnet. Durch die zuvor
	fehlerhafte Berechnung endten alle Absätze mit einer Winzigzeile und es
    kam teilweise auch zu vielen `overfull \hbox`-Meldungen.  
	Der frühere Workaround, in der Dokumentpräambel bei Verwendung einer der
    genannten Optionen unmittelbar nach dem Laden der Klasse  bzw. nach der
    Anweisung zum Setzen der Option
    ```latex
	\makeatletter
	\ifx\par@update\default@par@update\else
	\AtBeginDocument{\par@updaterelative}
	\fi
	\makeatother
	```
	einzufügen, entfällt damit.

* **`scrartcl`, `scrbook`, `scrreprt`:**
  - `\DeclareSectionCommand` etc. kennen als Umkehrung von `counterwithin` nun
    auch eine Eigenschaft `counterwithout`.
  - Neue Anweisung
    `\sectionlinesformat{`*Ebene*`}{`*indent*`}{`*Nummer*`}{`*Text*`}` zur
    eigentlichen Formatierung von Überschriften im `section`-Stil, wenn ein-
    oder mehrzeilige Überschriften verwendet werden. Die *Ebene* ist dabei der
    Name der Gliederungsebene, also beispielsweise `section`, `subsection`
    etc. Für nicht nummerierte Überschriften ist *Nummer* ggf. leer. Bei
    Umdefinierung ist der Anwender ggf. selbst dafür verantwortlich, dass
    zwischen den Zeilen der Überschrift kein Seitenumbruch erfolgen kann. Das
    Absatzende wird hingegen nach der Formatierungsanweisung automatisch
    herbeigeführt.
  - Neue Anweisung
    `\sectioncatchphraseformat{`*Ebene*`}{`*indent*`}{`*Nummer*`}{`*Text*`}`
    zur eigentlichen Formatierung von Überschriften im `section`-Stil, wenn
    Spitzmarken verwendet werden. Die *Ebene* ist dabei der Name der
    Gliederungsebene, also beispielsweise `section`, `subsection` etc. Für
    nicht nummerierte Überschriften ist *Nummer* ggf. leer.

* **`scrbook`, `scrreprt`:**
  - Neue Anweisung `\chapterlinesformat{`*Ebenenname*`}{`*Nummer*`}{`*Text*`}`
    zur eigentlichen Formatierung von Überschriften im `chapter`-Stil, wenn
    ein- oder mehrzeilige Überschriften mit hängender Nummer verwendet
    werden. Für nicht nummerierte Überschriften ist *Nummer* ggf. leer. Bei
    Umdefinierung ist der Anwender ggf. selbst dafür verantwortlich, dass
    zwischen den Zeilen der Überschrift kein Seitenumbruch erfolgen kann. Das
    Absatzende wird hingegen nach der Formatierungsanweisung automatisch
    herbeigeführt.
  - Neue Anweisung
    `\chapterlineswithprefixformat{`*Ebenenname*`}{`*Nummer*`}{`*Text*`}` zur
    eigentlichen Formatierung von Überschriften im `chapter`-Stil, wenn
    mehrzeilige Überschriften mit Nummerpräfixzeile verwendet werden. Für
    nicht nummerierte Überschriften ist *Nummer* ggf. leer. Ansonsten
    beinhaltet *Nummer* neben den Fonteinstellungen auch das
    `\chapterheadmidvskip` für den vertikalen Abstand nach der Nummer.

* **`scrlttr2`, `scrletter`:**
  - Ist eine nicht leere Anweisung `\letterpagestyle` definiert, so legt der
    Inhalt innerhalb von `\begin{letter}` per `\pagestyle{\letterpagestyle}`
    den Seitenstil von Briefen fest. Während die Anweisung bei scrlttr2 leer
    voreingestellt ist, sorgt sie beim Paket scrletter mit dem Inhalt
    `plain.letter` dafür, dass der plain-Stil des Seitenstil-Paars `letter`
    verwendet wird.
  - Briefe werden referenzierbar nummeriert. Der Zählername dafür lautet
    konsequenter Weise `letter`, obwohl ich mir bewusst bin, dass einige
    Anwender bereits einen gleichnamigen Zähler verwenden, der nun eventuell
    doppelt erhöht wird. Das lässt sich aber auf Anwenderseite ganz einfach
    dadurch ändern, dass der eigene Zählercode deaktiviert wird. Die Nummer
    des aktuellen Briefes lässt kann mit `\thisletter` ermittelt werden. Im
    Gegensatz zu `\theletter` wird dabei auch ein eventuell definierter Präfix
    (`\p@letter`) berücksichtigt. Es ist Sorge getragen, dass auch
    `\ref{\thisletter.lastpage}` einen korrekten Wert ergibt, nämlich
    letztlich dasselbe wie `\thisletter`.
  - `\letterlastpage` gibt die letzte Seitenzahl des aktuellen Briefes
    aus. Letztlich ist das nichts anderes als ein
    `\pageref{\thisletter.lastpage}`.

* **`scrbase`:**
  - In die Ausführung des Codes von Schlüsseln ohne Säumniswert wird kein
    störendes Leerzeichen mehr am Ende eingefügt. Dieser Fehler betraft über
    `\DefineFamilyKey` auch davon abgeleitete Befehle wie `\FamilyBoolKey`,
    bei denen der Anwender keinen Einfluss auf den Code hat.
  - Obwohl `\baselineskip` und `\parskip` tatsächlich keine skip-Register
    sind, sondern Primitive mit ähnlicher Funktion, werden sie still und leise
    von `\ifisskip` als skip akzeptiert.  
	Hinweis: Diese Änderung steht bis auf weiteres zur Disposition, da sie
    genau genommen ein Verstoß gegen die Spezifikation darstellt und
    inkonsequent ist (so wird beispielsweise derzeit `\pdfpaperwidth` nicht
    als dimen behandelt, obwohl das vergleichbar wäre).

* **`scrhack`:**
  - Es gibt einen neuen Hack `lscape`, der eine Inkonsistenz und ein Problem
    mit der Behandlung von `\textheight` innerhalb der `landscape-`Umgebung
    des [`lscape`](https://www.ctan.org/pkg/lscape)-Pakets beseitigt. Dieser Hack verbessert nicht nur
    die Zusammenarbeit von [`lscape`](https://www.ctan.org/pkg/lscape) mit `scrlayer`, sondern
    beispielsweise auch mit [`showframe`](https://www.ctan.org/pkg/showframe). Bei Bedarf lässt sich die
    Wirkung des Hacks auch zur Laufzeit deaktivieren (und reaktivieren) wenn
    der Hack beim Laden von [`lscape`](https://www.ctan.org/pkg/lscape) bzw. `scrhack` nicht
    deaktiviert ist.  
	Hinweis: Selbstverständlich wurde eine Verbesserung direkt 
	in [`lscape`](https://www.ctan.org/pkg/lscape) angestrebt – leider vergeblich.

* **`scrlayer`:**
  - Das neue Ebenenattribut `mode` legt fest, auf welche Weise eine Ebene
    ausgegeben wird. Vordefiniert sind die Werte `text` und `raw`, die beide
    dem bisherigen Verfahren entsprechen und `picture` die den Inhalt
    innerhalb einer `picture-`Umgebung ausgeben, deren Ursprung in der linken
    unteren Ecke der Ebene liegt. In diesem `picture-`Modus gibt es außerdem
    die Befehle:
	- `\putLL{`*Argument*`}`:
      zur Ausgabe von *Argument* relativ zur linken, unteren Ecke der Ebene,
    - `\putUL{`*Argument*`}`:
      zur Ausgabe von *Argument* relativ zur linken, oberen Ecke der Ebene,
	- `\putLR{`*Argument*`}`:
	  zur Ausgabe von *Argument* relativ zur rechten, unteren Ecke der Ebene,
    - `\putUR{`*Argument*`}`:
      zur Ausgabe von *Argument* relativ zur rechten oberen Ecke der Ebene,
	- `\putC{`*Argument*`}`:
      zur Ausgabe von *Argument* relativ zum Zentrum der Ebene.
  - Innerhalb von Ebenen kann mit `\layerhalign` auf die horizontale
    Ausrichtung der Ebene zugegriffen werden, die bei der Definition der Ebene
    aus der Eigenschaft `align` resultiert.
  - Innerhalb von Ebenen kann mit `\layervalign` auf die vertikale Ausrichtung
    der Ebene zugegriffen werden, die bei der Definition der Ebene aus der
    Eigenschaft `align` resultiert. Diese Information wird ggf. zur Definition
    eines eigenen Ebenenmodus benötigt.

* **`typearea`:**
  - Die Fehlermeldung über einen nicht definierten Befehl
    `\set@pdftextpagesize` bei Verwendung von Option `pagesize=automedia`
    wurde beseitigt. Der Workaround mit
	```latex
	\makeatletter
	\def\set@pdftextpagesize{\set@pdftexpagesize}
	\makeatother
    ```
	in der Dokumentpräambel entfällt daher.

</Details>

<Details title="3.18" open>

* **`scrartcl`, `scrbook`, `scrreprt`:**
  - Entgegen jeglicher Überzeugung und verm. ohne jegliche Dokumentation
    werden die Optionen `index=numbered`, `index=leveldown`,
    `index=standardlevel` und `toc=indexnumbered` nun doch verstanden. Support
    gibt es dafür aber nicht!
  - `\part` und `\part*` werden per `\DeclareSectionCommand` definiert. Dazu
    wird der Stil `part` vollständig unterstützt.
  - `\addpart` wurde komplett neu implementiert und verwendet intern nun
    `\part[…]{…}`. Daher verwendet es (im Gegensatz zu `\addpart*`) auch nicht
    mehr `\addpartmark` sondern (indirekt) `\partmark` und wenn dieses
    `\@gobble` ist sogar `\@mkboth{}{}` (`\addpart*` macht das auch, aber
    verwendet derzeit überflüssiger Weise zusätzlich `\addpartmark{}`).
  - `\addsec` wurde komplett neu implementiert und verwendet intern nun
    `\section[…]{…}`. Daher verwendet es (im Gegensatz zu `\addsec*`) auch
    nicht mehr `\addsecmark` sondern (indirekt) `\sectionmark`.

* **`scrbook`, `scrreprt`:**
  - Mit der Anweisung
    `\IfChapterUsesPrefixLine{`*Dann-Code*`}{`*Sonst-Code*`}` kann Code in
    Abhängigkeit davon ausgeführt werden, ob Überschriften im Stil `chapter`
    mit einer Präfixzeile gesetzt werden oder nicht. Dabei wird auf Option
    `chapterprefix` bzw. `appendixprefix` getestet, so dass die Anweisung im
    Gegensatz zu `\IfUsePrefixLine` auch außerhalb von Gliederungsbefehlen
    gültig ist.
  - `\addchap` wurde komplett neu implementiert und verwendet intern nun
    `\chapter[…]{…}`. Daher verwendet es (im Gegensatz zu `\addchap*`) auch
    nicht mehr `\addchapmark` sondern (indirekt) `\chaptermark`.
  - `\DeclareSectionCommand` kennt für den Stil `part` zusätzlich die
    Eigenschaft `innerskip`, die den Abstand zwischen Präfixzeile und
    Überschriftentext festlegt und für die Definition von Überschriften dieses
    Stils zwingend ist.
  - `\DeclareSectionCommand` kennt für den Stil `part` zusätzlich die
    Eigenschaft `pagestyle`, die den Seitenstil der Startseite festlegt und
    für die Definition von Überschriften dieses Stils zwingend ist.
  - `\DeclareSectionCommand` kennt für den Stil `chapter` zusätzlich die
    Eigenschaft `pagestyle`, die den Seitenstil der Startseite festlegt und
    für die Definition von Überschriften dieses Stils zwingend ist.
  - Der Überschriftenstil `chapter` ist so weit vervollständigt, dass man
    beispielsweise den Stil von `\section` in `chapter` ändern kann oder eine
    umdefinierte Anweisung `\chapter` mit `\RedeclareSectionCommand{chapter}`
    wieder auf ihre ursprüngliche Definition zurück ändern kann.
  - Die `beforeskip`-Voreinstellung von `\chapter` wurde negiert. Damit
    entfällt nach `\RedeclareSectionCommand[style=section]{chapter}` der
    Einzug nach der Überschrift genau wie bei den vordefinierten Überschriften
    im Stil `section`.

* **`scrbase`:**
  - Kann bereits vor `\documentclass` geladen werden.
  - Mit der Anweisung
    `\BeforeFamilyProcessOptions[`*Mitglied*`]{`*Familie*`}{`*Code*`}` kann
    man (ggf. auch bereits bevor das Paket oder die Klasse geladen ist) *Code*
    unmittelbar vor die Ausführung von `\FamilyProcessOptions` in dem Paket
    oder der Klasse des angegebenen *Mitglied*s ausführen lassen. Ist das
    *Mitglied* leer (aber angegeben), so wird *Code* für jedes Mitglied der
    *Familie* ausgeführt.

* **`scrlayer`, `scrlayer-scrpage`:**
  - Bei Kombination mit der Klasse `scrlttr2` funktioniert deren Option
    `pagenumber` für Seitenzahlen im Fuß links oder rechts nun korrekt. Der
    Workaround, selbst mit `\lofoot{\pagemark}` oder `\rofoot{\pagemark}`
    nachzuhelfen entfällt.
  - Bei Verwendung von [`multicol`](https://www.ctan.org/pkg/multicol) sind Hintergrundebenen nun nicht
    mehr vertikal um ca. eine Zeile (bzw. `\ht\strutbox`) nach oben
    verschoben, während die `multicols`-Umgebung aktiv ist. Das Problem betraf
    beispielsweise die Kopfzeilen von `scrlayer-scrpage` (solange man sie
    nicht in den Vordergrund verschob).

* **`scrlayer`:**
  - Von `\ForEachLayerOfPageSyle` gibt es eine Sternvariante, bei der die
    eigentliche Ausführung nicht mehr innerhalb einer Gruppe erfolgt. Mit der
    Sternvariante sind dann Aufrufe wie [unlängst auf goLaTeX
    vorgeschlagen](http://golatex.de/viewtopic,p,71548.html#71548) möglich.
  - Neues Ebenenattribut `backandforeground`, das die Einschränkung auf
    Vorder- oder Hintergrund aufhebt. Dieses Attribute ist wenig sinnvoll und
    besteht nur aus Gründen der Vollständigkeit.
  - Neues Ebenenattribut `oddorevenpage`, das die Einschränkung auf gerade
    oder ungerade Seiten aufhebt.
  - Neues Ebenenattribut `floatornonfloatpage`, das die Einschränkung auf
    Gleitumgebungsseiten oder Nicht-Geitumgebungsseiten aufhebt.
  - Neues Ebenenattribut `everypage`, das `oddorevenpage` und
    `floatornonfloatpage` vereint.
  - Neues Ebenenattribute `everyside`, das die Einschränkung auf einseitige-
    oder doppelseitige Dokumente aufhebt.
  - Neues Ebenenattribut `unrestricted`, das alle einschränkenden Attribute
    aufhebt. Da dies auch die Einschränkung auf Vorder- oder Hintergrund
    einschließt, ist es sinnvoll, danach wiederum `background` oder
    `foreground` explizit zu setzen.

* **`scrlayer-scrpage`:**
  - Das erste optionale Argument von `\setheadtopline`, `\setheadsepline`,
    `\setfootsepline` und `\setfootbotline` funktioniert nun wieder wie bei
    `scrpage2`. Zuvor wurde die Linienlänge (auch bei nicht gesetztem
    optionalem Argument) immer auf die Kopf- bzw. Fußbreite gesetzt.  
	Dessen ungeachtet wird empfohlen, diese veralteten Befehle nicht mehr zu
    verwenden und stattdessen die entsprechenden Optionen von
    `scrlayer-scrpage` zu nutzen.

* **`tocbasic`:**
  - Von `\DeclareNewTOC` werden nun beim Weglassen von `name` oder `listname`
    die Einstellungen für diese Optionen korrekt erzeugt. Die zuvor
    verwendete, defekte Methode resultierte in unerwünschtem Versalsatz in
    Überschriften oder Verzeichniseinträgen und konnte auch komplett falsche
    Namen generieren.
  - Bei `\DeclareNewTOC` muss das Argument von `type` expandierbar sein. Nicht
    expandierbare Teile sind durch `\protect` zu schützen.

* **`typearea`:**
  - Mit den Anweisungen `\BeforeRestoreareas{`*Code*`}` und
    `\AfterRestoreareas{`*Code*`}` kann *Code* am Anfang bzw. Ende der mit
    `\storeareas` definierten Anweisungen ausgeführt werden. Es gibt auch
    jeweils eine Sternvariante der Befehle, die sich nur auf zukünftig per
    `\storeareas` definierte Anweisungen auswirken.

</Details>

<Details title="3.17c" open>

* **`scrlttr2`:**
  - Der Alias `title` für das neue Element `lettertitle` funktioniert nun. Es
    wird dennoch empfohlen künftig direkt `lettertitle` zu verwenden, um den
    Umstieg auf das Paket `scrletter` zu erleichtern.
  - Der Alias `subject` für das neue Element `lettersubject` funktioniert
    nun. Es wird dennoch empfohlen künftig direkt `lettersubject` zu
    verwenden, um den Umstieg auf das Paket `scrletter` zu erleichtern.

* **`typearea`:**
  - Die Meldung über eine nicht geschlossene Gruppe und die Warnung vor
    Verwendung von `\typearea` innerhalb *group level 2* bei Verwendung von
    Option `pagesize=false` beim Laden von `typearea` wurde beseitigt.
  - Mit Option `pagesize=false` kann nun wirklich verhindert werden, dass der
    (neue) Default `pagesize=auto` aktiv wird. 

</Details>

<Details title="3.17a" open>

* **`scrjura`:**
  - Will man die Paragraphen bei neu definierten juristischen Umgebungen
    automatisch nummerieren lassen, so wurde fälschlich als Nummer immer die
    des aktuell letzten Paragraphen einer `contract`-Umgebung angegeben. Dies
    wurde korrigiert.
  - Will man die Unterparagraphen bei neu definierten juristischen Umgebungen
    automatisch nummerieren lassen, so wurde als Nummer fälschlich immer die
    des aktuell letzten Unterparagraphen einer `contract`-Umgebung
    angegeben. Dies wurde korrigiert.

</Details>

<Details title="3.17" open>

* In den Anleitungen wurden die Tabellen 21.1 und 21.3 korrigiert. Diese waren
  in früheren Versionen nicht mehr korrekt. Die dort angegebenen Werte für die
  Abstände stimmten zwar, allerdings werden diese auf andere Weise
  realisiert. Wer die korrekte Definition wissen muss, kann sie übrigens
  derzeit per `\show\chapterheadendvskip` etc. abfragen. Sollen hingegen nur
  die Abstände geändert werden, so sei die Verwendung von
  `\RedeclareSectionCommand` empfohlen.

* **`scrartcl`, `scrbook`, `scrreprt`:**
  - Problem behoben, dass `\addpart`, wenn `\partmark` nicht `\@gobble` ist,
    immer `\@mkboth` mit leerem zweitem Argument verwendet hat. Dadurch konnte
	im Zusammenspiel mit `scrlayer` auch bei `\automark[part]{part}` keine zwei
	Marken für den Kolumnentitel gesetzt werden.
  - Die Absatzeinstellungen werden bei später Änderung der Grundschriftgröße
    nun korrekt angepasst. Allerdings kann dies durch Option `version=3.16`
    (oder kleiner) deaktiviert werden.
  - Die Abstände, die über `\DeclareSectionCommand` etc. für die Überschriften
    oder das Inhaltsverzeichnis eingestellt sind, ändern sich nun wenn nach
    `\documentclass` die Grundschriftgröße geändert wird.
  - Die Anweisung `\useshapeofkomafont` heißt nun wirklich so. Der Workaround
    mit der Zeile:
    ```latex
	\providecommand*\useshapeofkomafont{\useshaperofkomafont}
	```
	in die Dokumentpräambel entfällt.
  - Analog zu `\addchapmark` seit KOMA-Script 3.12 gibt es jetzt ein
    `\addpartmark`.
  - Eine späte Änderung der Grundschriftgröße über Option `fontsize` oder
    `\changefontsize` passt die über KOMA-Script-Methoden vorgenommenen
    Absatzeinstellungen an. Dies erfordert allerdings auch eine Änderung der
    Schriftgrößendateien, so dass selbst erstellte oder erzeugte
    Schriftgrößendateien diese Änderung ggf. nicht enthalten.  
	Da die Änderung die Kompatibilität beeinträchtigt, wird sie bei
    Einstellungen für `version=3.16` (oder kleiner) nicht ausgeführt.
  - `\RedeclareSectionCommand` kann über die zusätzliche Eigenschaft
    `prefixfont=`*Fonteinstellung* auch die *Fonteinstellung* der  Präfixzeile
    in Kapitelüberschriften mit Präfixzeile und der Nummer in
    Teileüberschriften verändern. (Namen könnte sich bei Teileüberschriften
    eventuell noch ändern).
  - `\RedeclareSectionCommand` kann über die zusätzliche Eigenschaft
    `innerskip=`*Abstand* auch den *Abstand* zwischen Prefixzeile und
    Textzeile in Kapitel- und Teileüberschriften mit Präfixzeile verändern.
  - `\DeclareSectionCommand` etc. expandieren Werte für Längen zwar weiterhin,
    werten diese aber in der Voreinstellung nur testweise aus. Mit der
    zusätzlichen Eigenschaft `expandtopt=`*einfacher Schalter* kann jedoch
    auch weiterhin dafür gesorgt werden, dass das Ergebnis der Auswertung
    (also der pt-Wert) an Stelle des expandierten Werts gespeichert wird.
  - Die späte Wahl von Option `twoside` verhält sich bezüglich des vertikalen
    Ausgleichs nun wie die frühe Wahl der Option.  
	Da die Änderung die Kompatibilität beeinträchtigt, wird bei Einstellungen
	für `version=3.16` (oder kleiner) stattdessen ein zu früheren Versionen
	kompatibles Verhalten gewählt.
  - Die späte Wahl von Option `twocolumn` verhält sich bezüglich des
    vertikalen Ausgleichs und `\sloppy` wie die frühe Wahl der
    Option. Allerdings führt ein Deaktivieren von `twocolumn` dabei nicht zu
    `\fussy`. Das bedeutet insbesondere, dass ein
    `\KOMAoption{twocolumn}{true,false}` einem `\sloppy` gleich kommt.  
	Da die Änderung die Kompatibilität beeinträchtigt, wird bei Einstellungen
    für `version=3.16` (oder kleiner) stattdessen ein zu früheren Versionen
    kompatibles Verhalten gewählt.
  - Bereits seit KOMA-Script 3.15 werden für alle Gliederungsebenen
    `\…format`-Anweisunen definiert. Bisher wurden aber nur `\partformat` und
    `\chapterformat` verwendet und für die anderen Ebenen stattdessen
    `\othersectionlevelsformat`. Da letztere Anweisung etwas schwer zu
    verstehen ist, wird sie künftig nur noch verwendet, wenn keine
    `\…format`-Anweisung vorhanden ist. Stattdessen werden die
    `\…format`-Anweisungen nun bei allen Ebenen auch wirklich verwendet. Das
    hat allerdings zur Konsequenz, dass einige bisherige Lösungen, die auf
    `\othersectionlevelsformat` basieren, nur noch funktionieren, wenn man
    `\sectionformat` bis `\subparagraphformat` absichtlich auf `\relax`
    setzt. Diese Änderung ist über Option `version` abgesichert. 

* **`scrfontsizes`:**
  - Die Definition von `\footnotesize` in der erzeugten Datei wurde
    korrigiert. Man muss die Datei jetzt also nicht mehr editieren, um
    in der Definition von `\footnotesize` das `\small` ganz am Anfang durch
    `\footnotesize` zu ersetzen.

* **`scrhack`:**
  - Es gibt einen neuen Hack `setspace`. Das gleichnamige 
    Paket [`setspace`](https://www.ctan.org/pkg/setspace) definiert `\onehalfspacing` und
    `\doublespacing` unter Verwendung von `\@ptsize`. Dabei geht es davon aus,
    dass das klasseninterne Makro `\@ptsize` immer definiert ist und immer zu
    einer ganzen Zahl expandiert. Schon davon auszugehen, dass `\@ptsize`
    definiert ist, ist fragwürdig, da nicht festgelegt ist, dass Klassen
    dieses Makro definieren müssen. Dann auch noch davon auszugehen, dass es
    immer zu einer ganzen Zahl expandiert, ist schlicht im Fall von
    KOMA-Script falsch. Da KOMA-Script gebrochene Schriftgrößen erlaubt, kann
    `\@ptsize` auch zu einer gebrochenen Dezimalzahl expandieren. Außerdem
    arbeitet [`setspace`](https://www.ctan.org/pkg/setspace) aufgrund der Verwendung von `\@ptsize` nie
    relativ zur tatsächlichen Schriftgröße, sondern relativ zur angeforderten
    Grundschriftgröße, die davon abweichen kann (und es bereits im Fall von
    `11pt` auch tut). Mit `scrhack` wird zumindest relativ zur aktuellen Größe
    gearbeitet und es funktioniert auch mit gebrochenen Schriftgrößen. Die
    Abhängigkeit von `\@ptsize` entfällt dabei. Eine (eigentlich notwendige)
    Anpassung an spätere Änderungen der Schriftgröße findet aber auch damit
    nicht statt. Damit ist der aktuelle Hack eine Verbesserung aber meiner
    Meinung nach noch nicht der Idealfall. Für den Idealfall müsste man das
    Paket grundlegend neu schreiben.

* **`scrlayer-scrpage`:**
  - Die nicht dokumentierte Verwendung von `headtopline=false`,
    `headsepline=false`, `footsepline=false` oder `footbotline=false` führt nun
    genau wie bisher schon bei den ebenfalls nicht dokumentierten
    `headtopline=true`, `headsepline=true`, `footsepline=true` und
    `footbotline=true` zu keiner Fehlermeldung mehr.  
	Hinweis: Obwohl die Möglichkeit dieser symbolischen Werte nicht
    dokumentiert ist, wird zukünftig auch `false` funktionieren, weil Anwender
    offenbar nicht in der Lage sind, die Funktion von globalen Optionen zu
    verstehen, sich aber andererseits genau darauf ständig verlassen.
  - Die Alias-Warnung für das Element `pagehead`, die bei Verwendung von
    `scrlayer-scrpage` zusammen mit `scrlttr2` (oder `scrletter`) auftrat,
    wurde nun korrekt deaktiviert.

* **`scrletter`, `scrlttr2`:**
  - Da `\date` eine Anweisung des LaTeX-Kerns ist, kann man die Variable
    `date` derzeit auch darüber verändern, ohne dass sich die Klasse oder das
    Paket darüber beschwert. Allerdings funktioniert das nur so lange, bis es
    jemand richtig macht und beispielsweise `\setkomavar{date}{\today}`
    aufruft. Danach kann man mit `\date` nichts mehr erreichen.  
	Hinweis: Es ist in der Anleitung ausdrücklich dokumentiert, dass man
    `\setkomavar{date}{…}` verwenden soll, um das Datum einzustellen. Daher
    ist das Verhalten kein Fehler, sondern korrekt.  
	Hinweis: Zukünftig wird die Verwendung von `\date` min. eine Warnung
    ergeben, damit die ganzen Leute, die entsprechend fehlerhafte Vorlagen
    verbreiten, den verdienten Tritt in den Hintern bekommen!
  - Da die KOMA-Script-Klassen bereits ein Element `title` kennen, kann das
    Paket `scrletter` kein eigenes solches Element definieren und verwendet
    stattdessen nun nicht mehr die Schrifteinstellung des Elements der
    KOMA-Script-Klassen. Dessen Voreinstellung entspricht nämlich nicht dem
    des gleichnamigen Elements bei `scrlttr2`. Stattdessen wird nun das
    Element `lettertitle` verwendet.
  - Da die KOMA-Script-Klassen bereits ein Element `subject` kennen, kann
    `scrletter` kein eigenes solches Element definieren und verwendet
    stattdessen nunn nicht mehr die Schrifteinstellung des Elements der
    KOMA-Script-Klassen. Dessen Voreinstellung entspricht nämlich nicht dem des
    gleichnamigen Elements bei `scrlttr2`. Stattdessen wird nun das Element
    `lettersubject` verwendet.
  - Mit der neuen Einstellung `addrfield=topaligned` wird die Anschrift nicht
    mehr vertikal im Adressfenster zentriert, sondern oben ausgerichtet.

* **`scrletter`:**
  - Da die KOMA-Script-Klassen die Paginierungsanweisung `\pagemark` bereits
    anderweitig definiert haben, kann `scrletter` diese nicht einfach neu
    vordefinieren. Daher erfolgt die Paginierung bei `scrletter` nicht mit
    „Seite *Nummer*“, sondern in der Voreinstellung der verwendeten
    KOMA-Script-Klasse.
  - Für Paginierung mit „Seite *Nummer*“ wird eine neue Paginierungsanweisung
    `\letterpagemark` bereitgestellt, die auch von den vordefinierten
    Seitenstilen verwendet wird.
  - Während bei `scrlttr2` Option `headsepline` auch eine Linie in den Kopf
    der Seiten im voreingestellten Seitenstil `plain` erzeugt, wird diese bei
    `scrletter` für `plain.letter` nur bei zusätzlicher Verwendung von
    `plainheadsepline` angezeigt. Dies ist beabsichtigt, da es konsistent mit
    dem Verhalten von Linien bei anderen Seitenstilpaaren ist.

* **`scrlttr2`:**
  - Das Element `title` ist nun nur noch ein Aliasname für das neue Element
    `lettertitle`.
  - Das Element `subject` ist nun nur noch ein Aliasname für das neue Element
    `lettersubject`.

* **`typearea`:**
  - Entsprechend der Anleitung führt ein Wechsel der Einstellung von Option
    `twoside` auf eine neue rechte Seite, wenn zuvor der doppelseitige Modus
    aber gleichzeitig `open=left` aktiv war. Der Workaround, *vor* der
    Änderung von `twoside` `\cleardoubleoddpage` aufzurufen entfällt.
  - Innerhalb von `\activateareas` – und damit auch innerhalb von
    `\recalctypearea`, `\typearea`, `\areaset` oder Änderungen von `DIV` oder
    `BCOR` – wird nun `\par@updaterelative` ausgeführt. Das bedeutet, dass die
    `parskip`- oder `\setparsizes`-Einstellungen erneut ausgeführt werden,
    vorausgesetzt niemand hat nachträglich an `\parskip`, `\parfillskip` oder
    `\parindent` gefummelt. Da die Änderung inkompatibel zu früheren Versionen
    ist, ist sie über `version` abgesichert.
  - Option `pagesize` ist Voreinstellung.  
    Hinweis: Die Änderung erfolgte nicht aus echter Überzeugung, sondern wegen
    nerviger Fragen im Support von Leuten, die nicht in der Lage sind die
    Anleitung zu lesen. Bei Verwendung von Paket [`preview`](https://www.ctan.org/pkg/preview) 
	oder [`standalone`](https://www.ctan.org/pkg/standalone) sollte man die Option auch besser explizit
    abschalten.

</Details>

<Details title="3.16" open>

* Die deutschen Anleitungen werden wieder mit deutschen Trennmustern erstellt
  und strotzt deshalb nicht mehr vor falschen Trennungen.

* **`scrbook`, `scrreprt`:**
  - Der Code für die Ausgabe der Präambel über `\chapter` wurde überarbeitet,
    weil die Warnung für zu große Präambel über `\chapter` bereits
    `\dp\strutbox` zu früh ausgegeben wurde. Dabei wurde auch die vertikale
    Platzierung einer tatsächlich übervollen Präambel verbessert.
  - Der vertikale Abstand vor der Überschrift von `\addpart` bzw. `\addpart*`
    wurde dem bei `\part*` oder bei früheren Versionen angepasst.
  - Der Fehler bei Verwendung von `\subsectionmarkformat`,
    `\subsubsectionmarkformat`, `\paragraphmarkformat` oder
	`\subparagraphmarkformat` wegen nicht definiertem `\endskip` wurde
    behoben. Damit ist der Workaround: `\newcommand*{\endskip}{\enskip}` in
    der Dokumentpräambel bzw. noch vor `\documentclass` nicht mehr
    erforderlich.

* **`scrlayer`:**
  - Die Anweisungen `\leftfirstmark`, `\lefttopmark`, `\leftbotmark`,
    `\rightfirstmark`, `\righttopmark` und `\rightbotmark` können analog zu
    `\leftmark` (entspricht `\leftbotmark`) und `\rightmark` (entspricht
    `\rightfirstmark`) verwendet werden. Dabei nutzen sie entsprechend ihrem
    Namen das linke oder rechte Element der TeX-Marken `\firstmark`,
    `\topmark` oder `\botmark`.
  - `\toplevelpagestyle` gibt den *obersten* Seitenstil an, der mit
    `\pagestyle` aktiviert wurde. Während also nach `\pagestyle{plain}`
    `\currentpagestyle` beispielsweise `plain.scrheadings` sein kann, ist
    `\toplevelpagestyle` dann `plain`.
  - Mit der Anweisung `\GetLayerContents{`*Ebene*`}` kann man auf den Inhalt
    einer Ebene zugreifen. Man muss dabei aber selbst darauf achten, keine
    unendlichen Rekursionen zu schaffen, beispielsweise durch die Verwendung
    der Anweisung bei der Definition des Inhalts derselben Ebene.
  - Es gibt neue Ebenenattribute, mit denen man den existierenden Werten eines
    Ebenenattributes einen neuen Wert hinzufügen kann. Die Attribute
    `addhoffset`, `addvoffset`, `addwidth` und `addheight` addieren dabei den
    neuen Wert zum bisherigen Wert. Das Attribute `addcontents` hängt an den
    bisherigen Inhalt der Ebene Code an, während `pretocontents` den Code dem
    bisherigen Inhalt der Ebene voranstellt.

</Details>

<Details title="3.15" open>

* In der deutschen und englischen Anleitung ist nun korrekt `\ifisinteger`
  statt fälschlich `\ifisnumber` dokumentiert.

* **`scrbase`:**
  - Die Fehlermeldung über ein nicht definiertes `\@temskipa` bei Verwendung
    von `\FamilySetLengthMacro` wurde behoben.

* **`scrartcl`:**
  - Über Option `sectionentrydots` kann gewählt werden, ob die
    Inhaltsverzeichniseinträge der Abschnittsebene ebenfalls mit Pünktchen
    versehen  werden sollen. Falls dem so ist, wird die Schrit über das
    gleichnamige Element eingestellt. Voreingestellt ist dabei
    `\normalfont`. Es existieren auch passende Werte für Option `toc`.

* **`scrartcl`, `scrbook`, `scrreprt`, `scrextend`, `scrlttr2`:**
  - Neuer Befehl
    `\IfExistskomafont{`*Element*`}{`*Dann-Code*`}{`*Sonst-Code*`}` führt den
    *Dann-Code* genau dann aus, wenn KOMA-Script für *Element* den Font über
    `\addtokomafont` und `\setkomafont` ändern kann. Anderenfalls wird der
    *Dann-Code* ausgeführt.
  
* **`scrartcl`, `scrbook`, `scrreprt`:**
  - Bei `\subparagraph` funktioniert nun der horizontale Einzug, außer man
    setzte `version=3.14` (oder kleiner).
  - Wurde der Absatzeinzug nicht über unmittelbares Setzen von `\parindent`
    statt durch die empfohlene Verwendung einer `parskip-`Option oder
    `\setparsizes` verändert, wird bei `\subparagraph` in der Voreinstellung
    ein Absatzeinzug verwendet. Da der fehlende Absatzeinzug für KOMA-Script
    vor Version 3.15 als Feature definiert wurde, gilt dies nicht, wenn über
    Option `version` eine kleinere Kompatibilitätseinstellung als 3.15 gewählt
    wurde.
  - Die Gliederungsbefehle von `\section` bis `\subparagraph` (einschließlich
    deren abhängige Befehle) werden über `\DeclareSectionCommand[…]{…}`
    definiert und können über
    `\DeclareSectionCommand[`*Eigenschaften*`]{`*Name*`}` oder
    `\RedeclareSectionCommand[`*Eigenschaften*`]{`*Name*`}` geändert
    werden. Ebenso können neue Befehle über
    `\DeclareNewSectionCommand[`*Eigenschaften*`]{`*Name*`}`
    bzw. `\ProvideSectionCommand[`*Eigenschaften*`]{`*Name*`}` definiert
    werden. Über
    `\DeclareSectionCommands[`*Eigenschaften*`]{`*Namensliste*`}`,
    `\DeclareNewSectionCommands[`*Eigenschaften*`]{`*Namensliste*`}`,
    `\RedeclareSectionCommands[`*Eigenschaften*`]{`*Namensliste*`}` oder
    `\ProvidesSectionCommands[`*Eigenschaften*`]{`*Namensliste*`}` kann
    dasselbe auch für eine ganze Reihe an Gliederungsbefehlen auf einmal
    erfolgen.

* **`scrbook`, `scrreprt`:**
  - Kein zusätzlicher Abstand mehr zwischen der Kapitelüberschrift des
    Inhaltsverzeichnisses und dem ersten Eintrag, wenn dies ein Kapiteleintrag
    oder ein Teileintrag ist. Diese Änderung ist durch Option `version=3.14`
    (oder kleiner) deaktivierbar.
  - Über Option `chapterentrydots` kann gewählt werden, ob die
    Inhaltsverzeichniseinträge der Kapitelebene ebenfalls mit Pünktchen
    versehen  werden sollen. Falls dem so ist, wird die Schrit über das
    gleichnamige Element eingestellt. Voreingestellt ist dabei
    `\normalfont`. Es existieren auch passende Werte für Option `toc`.
  - Auf vielfachen Wunsch kann man über Umdefinierung von `\raggedchapter` die
    Ausrichtung der Kapitelüberschriften und nur der Kapitelüberschriften
    ändern.

* **`scrbase`:**
  - Mit `\RelaxFamilyKey[`*Mitglied*`]{`*Familie*`}{`*Schlüssel*`}` kann ein
    *Schlüssel* für ein *Mitglied* einer *Familie* quasi undefiniert werden.
  - Die Befehle `\FamilyCounterKey`, `\FamilyCounterMacroKey`,
    `\FamilyLengthKey` und `\FamilyLengthMacroKey` unterstützen einen
    optionalen *Säumniswert*, der nach dem *Schlüssel* anzugeben ist.

* **`scrlayer`:**
  - Die beiden `underfull \hbox`-Meldungen auf jeder zweispaltigen Seite
    wurden behoben.

* **`scrjura`:**
  - Die Befehle `\Paragraph` und `\SubParagraph` werden in `\Clause` und
    `\SubClause` umbenannt. Entsprechend werden abhängige Befehle wie
    `\Paragraphmark` und `\SubParagraphmark` sowie abhängige Zähler wie
    `Paragraph` und `SubParagraph`, sowie die zu den Zählern gehörenden
    Befehle umbenannt.
  - Über den Befehl
    `\DeclareNewJuraEnvironment{`*Umgebungsname*`}[`*Optionen*`]{`*Anfangscode*`}{`*Endecode*`}`
    können neue juristische Umgebungen definiert werden. In der Voreinstellung
    entspricht eine solche Umgebung `contract`, verfügt aber über eigene
    Zähler.

* **`scrletter`:**
  Dieses Paket stellt die Funktionalität von scrlttr2 mit den
  KOMA-Script-Klassen scrartcl, scrreprt und scrbook zur Verfügung. Allerdings
  ist das Paket in der Anleitung noch als BETA eingestuft.

* **`scrsize10pt.clo`, `scrsize11pt.clo`, `scrsize12pt.cli`:**
  - Die Abstände in einigen Listen, die selbst `\@listi` nicht ausführen
    (beispielsweise das Literaturverzeichnis von biblatex) wurden
    korrigiert. Damit entfällt der Workaround, `\csname @listi\endcsname` nach
    dem Laden der Klasse und nach jeder Verwendung von Option `fontsize` in
    der Dokumentpräambel oder im Dokument einzufügen.

</Details>

<Details title="3.14" open>

* Die englische Anleitung wurde vor allem von Jana und Arndt Schubert auf
  Vermittlung von Elke Schubert gründlich unter die Lupe genommen und in
  diversen Kapiteln deutlich verbessert.

* **`scrartcl`, `scrbook`, `scrreprt`:**
  - Bei Verwendung von Option `bibliography=leveldown` wird nicht mehr
    fälschlich immer `\rightmark` verwendet. Stattdessen geschieht dies nur
    noch, wenn `\@mkboth` nicht `\@gobbletwo`, wenn also mit lebenden
    Kolumnentiteln gearbeitet wird.
  - Das optionale Argument von `\chapter`, `\section` etc. wird nicht mehr
    nach key=value-Syntax behandelt, wenn es ein kopiertes obligatorisches
    Argument ist. Zuvor führte beispielsweise
	```latex
	\documentclass[headings=optiontohead]{scrartcl}
	\usepackage[ngerman]{babel}

	\begin{document}
	\tableofcontents
	\part{rot!=gelb}
	\section{physikalisch"=naturwissenschaftlichen}
	\end{document}	
	```
	zu Fehlern. Diese Fehler konnte man übrigens durch zusätzliche
	Gruppenklammern im obligatorischen Argument umgehen.
  - `\minisec` vergrößert nun nicht mehr den Abstand nach einer Überschrift,
    wenn es direkt auf diese folgt.
  - Die Anweisung `\SecDef` kann an Stelle von `\secdef` verwendet werden, um
    Befehle zu definieren, die kompatibel mit `\part` oder `\addpart` sind.
  - Die Anweisung `\At@startsection{`*Code*`}` kann von Paketautoren verwendet
    werden, um innerhalb des KOMA-Script eigenen Ersatzes von `\@startsection`
    *Code* nach der Einstellung von `\if@afterindent` und `\@tempskipa`
    auszuführen.
  - Die Anweisung `\Before@sect{`*Code*`}` kann von Paketautoren verwendet
    werden, um innerhalb des KOMA-Script eigenen Ersatzes von `\@startsection`
    *Code* unmittelbar vor dem Aufruf von `\@sect` auszuführen.
  - Die Anweisung `\Before@ssect{`*Code*`}` kann von Paketautoren verwendet
    werden, um innerhalb des KOMA-Script eigenen Ersatzes von `\@startsection`
    *Code* unmittelbar vor dem Aufruf von `\@ssect` auszuführen.

* **`scrartcl`, `scrbook`, `scrreprt`, `scrlttr2`:**
  - Option `footsepline` führt wie bereits zuvor dokumentiert nicht mehr zu
    einer Neuberechnung des Satzspiegels.
  - Option `footsepline` führt nicht mehr fälschlich zu einer Änderung von
    `headinclude`, sondern `footinclude`.

* **`scrbase`:**
  - `\FamilyOption`, `\FamilyOptions` und `\FamilyExecuteOptions` erlauben die
    Verwendung von `\par` im Wert einer Option.

* **`scrlayer`:**
  - `\ModifyLayer` ändert nun wirklich die angegebene Ebene und nicht die
	zuletzt mit `\DeclareLayer` definierte Ebene.
  - `\RemoveLayersFromPageStyle` funktioniert nun auch für alle Ebenen eines
    Seitenstils. Zuvor konnte die letzte verbliebene Ebene nicht entfernt
    werden.

* **`scrlayer-scrpage`:**
  - Die Namen der Layer sind nun korrekt. Zuvor waren `…head.odd` und
    `…head.even` bzw. `…foot.odd` und `…foot.even` vertauscht.
  - Optionen `headwidth` und `footwidth` erlauben einen zweiten Offset. In
    diesem Fall ist der erste Offset für rechte=ungerade Seiten und der zweite
    Offset für linke=gerade Seiten.
  - Die Befehle `\ihead`, `\ohead` etc. bekommen Sternvarianten an die Seiten
    gestellt, bei denen bei einem nicht vorhandenen optionalen Argument das
    obligatorische Argument in das optionale kopiert wird. Bei vorhandenem
    optionalem Argument unterscheiden sich die Formen nicht. Man kann so
    beispielsweise `\ofoot[\pagemark]{\pagemark}` einfach als
    `\ofoot*{\pagemark}` abkürzen.

* **`scrlttr2`:**
  - LCO-Datei `DINmtext` führt mit Option `fromalign=false` wieder zu einer
    geänderten Darstellung der Absenderadresse, wie das bis Version 3.07 der
    Fall war.
  - Neue Anweisung `\LoadLetterOptions{`*LCO,…*`}`, die wie
    `\LoadLetterOption` arbeitet, aber statt nur einer LCO eine Komma
    separierte Liste von LCOs akzeptiert.

* **`tocbasic`:**
  - `\DeclareNewTOC` fügt dem Format des Zähler kein `\autodot` mehr an, wenn
    es sich um einen hierarchischen Zähler handelt.

</Details>

<Details title="3.13" open>

* **`scrartcl`, `scrbook`, `scrreprt`:**
  - Werte für Option `toc`, die auf andere Optionen abgebildet werden, können
    nun nicht nur bei `\documentclass` gesetzt werden, sondern auch bei
    `\KOMAoption` und `\KOMAoptions`.
  - Werte für Option `listof`, die auf Option `chapteratlists` abgebildet
    werden, können nun nicht nur bei `\documentclass` gesetzt werden, sondern
    auch bei `\KOMAoption` und `\KOMAoptions`.
	
* **`scrbase`:**
  - In der Sonderbehandlung für die Benutzung der Optionen-Schnittstelle nach
    der veralteten Methode ist die Ausgabe einer Warnung nun robust gegen
    Befehle, die nicht expandiert werden sollten. Zuvor konnte es
    beispielsweise zu Fehlern kommen, wenn einer Option als Wert
    `\includegraphics` übergeben wird.
	
* **`scrdate`:**
  - Unterstützung von Polnisch (`polish`), Tschechisch (`czech`), Slovakisch
    (`slovak`) und diversen zusätzlichen Dialekten von Englisch, Deutsch und
    Französisch.

* **`scrlayer-notecolumne`:**
  - Es gibt Dank Arndt Schubert eine gute englische Übersetzung der Anleitung.

* **`scrlayer-scrpage`:**
  - Option `pagestyleset` wird nun auch dann korrekt verarbeitet, wenn sie bei
    `\documentclass` oder `\usepackage` angegeben wird. Der Workaround, sie
    per `\KOMAoption` oder `\KOMAoptions` zu setzen, entfällt damit.
  - Die Optionen `standardstyle` und `komastyle` führen nicht mehr zu einer
    Fehlermeldung wegen nicht definierter Option `version`. Es bleibt bei der
    Empfehlung diese veralteten Optionen durch Option `pagestyleset` zu
    ersetzen.
  - Das Seitenstil-Paar `scrheadings` + `plain.scrheadings` führt nicht mehr
    zu Problemen mit `scrlttr2`. Die Empfehlung mit `scrlttr2` weiterhin
    `scrpage2` zu verwenden entfällt damit.
  - Die Warnung wegen des in den Klassen nicht vorhanden Elements `pagefoot`
    wurde beseitigt.

* **`scrlttr2`:**
  - Das Kompatibilitätsproblem mit `scrlayer-scrpage` wurde behoben.
  - Mit den Sprachen `ngerman`, `austrian` und `naustrian` wird nun „Telefon“
    und „Mobiltelefon“ statt „Telephon“ und und „Mobiltelephon“ verwendet. Bei
    `german` bleibt es bei der Schreibweise mit „ph“. Wer das ändern will,
    kann
	```latex
	\renewcaptionname{german}\phonename{Telefon}
	\renewcaptionname{german}\mobilephonename{Mobiltelefon}
	```
	in die Dokumentpräambel einfügen.
  - Unterstützung von Polnisch (`polish`), Tschechisch (`czech`), Slovakisch
    (`slovak`) und diversen zusätzlichen Dialekten von Englisch, Deutsch und
    Französisch.

* **`scrpage2`:**
  - Das Paket ist obsolet, bleibt aber vorerst mit eigener Anleitung (also
    nicht mehr in der KOMA-Script-Anleitung) Bestandteil von KOMA-Script.

</Details>

<Details title="3.12" open>

* **`scrartcl`:**
  - Die nicht verwendeten Anweisungen `\chapterheadstartvskip` und
    `\chapterheadendvskip` werden nicht mehr definiert.

* **`scrartcl`, `scrbook`, `scrreprt`:**
  - Die undokumentierte Option `emulatestandardclasses`, die nur beim Laden
    der Klasse angegeben werden kann, ändert diverse Voreinstellungen so, dass
    sie der Standardklasse ähneln. Diese Option benötigt außerdem das Paket
    `scrlayer-scrpage`.

* **`scrartcl`, `scrbook`, `scrreprt`, `scrlttr2`:**
  - Die Verwendung veralteter Font-Anweisungen wie `\bf` führt zu einer
    Warnung.

* **`scrartcl`, `scrbook`, `scrreprt`, `scrextend`:**
  - Fehler bei den vertikalen Abstände von `\captionabove` und `\captionbelow`
    (und damit auch von `\caption`) in `longtable` bei Verwendung von 
    [`color`](https://www.ctan.org/pkg/color) oder [`xcolor`](https://www.ctan.org/pkg/xcolor) korrigiert.
  - Option `captions=figureheading` funktioniert.
  - Verwendung von `captions=heading` innerhalb einer `figure`-Umgebung
    funktioniert.
  - Der Code für `\maketitle` wurde teilweise neu geschrieben, damit per
    `\thanks` oder `\footnote` gesetzte Fußnoten auf der korrekten Seite
    ausgegeben werden. Gleichzeitig wird nun ein `\extratitle` bei
    gleichzeitiger Verwendung der Optionen `titlepage=false` und `twocolumn`
    nicht mehr als Kopf über dem Haupttitelkopf ausgegeben.
  - Außer bei Kompatibilität zu früheren Versionen können in einem Dokument
    mehrere `\maketitle`-Anweisungen einschließlich mehrerer Titeldefinitionen
    verwendet werden.
  - Außer bei Kompatibilität zu früheren Versionen wird die Rückseite der
    Titelseite nur noch erzeugt, wenn diese einen Inhalt hat oder eine
    Widmungsseite folgt.
  - Option `titlepage=firstiscover` formatiert die erste mit `\maketitle`
    erstellte Titelseite als Umschlagseite mit abweichenden Rändern. Die
    Ränder können durch Umdefinierung von `\coverpagetopmargin`,
    `\coverpagebottommargin`, `\coverpageleftmargin` und
    `\coverpagerightmargin` verändert werden. In der Voreinstellungen
    entspricht `\coverpagestopmargin` dem oberen Rand des Dokuments ohne die
    Kopfzeile(n), `\coverpagebottommargin` ist das Doppelte davon,
    `\coverpageleftmargin` und `\coverpagerightmargin` entsprechen dem linken
    Rand einer linken Seite.
  - Neue Font-Elemente `titlehead`, `author`, `date`, `publishers`,
    `dedication`.
  - Mit `bibliography=leveldown` kann das Literaturverzeichnis eine
    Gliederungsebene nach unten verschoben werden (vgl. `listof=leveldown`).
  - Um die bekannten Probleme bezüglich der Kopfzeile bei Verwendung von
    `\addchap` oder `\addsec` zusammen mit Kopfzeilenpaketen wie `scrpage2`
    oder [`fancyhdr`](https://www.ctan.org/pkg/fancyhdr) beherrschbarer zu machen, werden auch diese
    beiden Befehle künftig `\chaptermark` bzw. `\sectionmark` aufrufen, zuvor
    aber lokal `\if@mainmatter` auf `\iffalse` setzen und `secnumdepth` auf
    -1. Wenn Anwender und Pakete bei der Umdefinierung von `\chaptermark`
    bzw. `\sectionmark` sauber gearbeitet haben, führt das zum korrekten
    Ergebnis. Anderenfalls enthält die Kopfzeile unerwünschter Weise eine
    Nummer und der Anwender muss ggf. nacharbeiten. Die Korrektur ist dann
    jedoch in jedem Fall einfach zu bewerkstelligen. Bei dieser Gelegenheit
    sei darauf hingewiesen, dass [`fancyhdr`](https://www.ctan.org/pkg/fancyhdr) in seinem vordefinierten
    `\chaptermark` `\if@mainmatter` zwar ignoriert, `secnumdepth` aber sowohl
    bei `\chaptermark` als auch `\sectionmark` durchaus beachtet.
  - Neue Optionen `toc=numberline`, `toc=nonumberline`, `listof=numberline`
    bzw. `listof=nonumberline` um das neue `tocbasic`-Feature `numberline` für
    das Inhaltsverzeichnis bzw. die Gleitumgebungsverzeichnisse zu aktivieren
    und zu deaktivieren.
  - Intern werden nun alle Verzeichniseinträge via `\addchaptertocentry`,
    `\addsectiontocentry` etc. mit `\addxcontentsline` (siehe
    `tocbasic`-Änderungen) erstellt.
  - Unterstützung für `\float@addtolists` weitgehend entfernt (wie seit Jahren
    angekündigt).
	
* **`scrartcl`, `scrbook`, `scrreprt`, `scrextend`, `scrlttr2`:**
  - Option `fontsize`: Außer bei Verwendung von Option `version=3.11b` (oder
    kleiner) werden `\intextsep`, `\floatsep` und `\dblfloatsep` bei der
    Notlösung für berechnete Schriftgrößen nun auf korrekte Werte
    gesetzt. Abstände größer 0pt und kleiner 1pt werden auf 1pt gerundet.
  - `\usesizeofkomafont{`*Element*`}`: schaltet nur auf die Schriftgröße und
    den Grundlinienabstand des angegebenen Elements um.
  - `\useencodingofkomafont{`*Element*`}`: schaltet nur auf das Font-Encoding
    des angegebenen Elements um.
  - `\usefamilyofkomafont{`*Element*`}`: schaltet nur auf die Font-Family des
    angegebenen Elements um. 
  - `\useseriesofkomafont{`*Element*`}`: schaltet nur auf die Font-Series des
    angegebenen Elements um. 
  - `\useshapeofkomafont{`*Element*`}`: schaltet nur auf die Font-Shape des
    angegebenen Elements um. 
  - `\usefontofkomafont{`*Element*`}`: schaltet nur auf die (oben genannten)
    Schriftattribute des angegebenen Elements um. Das ist insbesondere dann
    von Interesse, wenn im Element entgegen der ursprünglichen Spezifikation
    auch andere Dinge wie die Farbe festgelegt sind.

* **`scrbase`:**
  - `\ifstrstart{`*Zeichenfolge*`}{`*Zeichenfolge*`}{`*Dann-Teil*`}{`*Sonst-Teil*`}`
    expandiert die beiden Zeichenketten und führt den *Dann-Code* genau dann
    aus, wenn abgesehen von Leerzeichen die erste Zeichenkette mit der zweiten
    beginnt. 
  - `\ifisdim{`*Zeichenfolge*`}{`*Dann-Teil*`}{`*Sonst-Teil*`}` führt den
    *Dann-Code* genau dann aus, wenn die Expansion der Zeichenfolge in einem
    `\dimen`, also einem TeX-Längenregister resultiert. Anderenfalls wird der
    *Sonst-Code* ausgeführt. Die Anweisungen `\ifisskip`, `\ifiscount`,
    `\ifisdimexpr`, `\ifisglueexpr` und `\ifisnumexpr` funktionieren
    entsprechend, wobei bei den letzten drei fehlerhafte Ausdrücke zu
    Fehlermeldungen führen.
  - `\ifiscounter{`*LaTeX-Zähler*`}{`*Dann-Teil*`}{`*Sonst-Teil*`}` führt den
    *Dann-Code* genau dann aus, wenn der *LaTeX-Zähler* bereits definiert
    ist. Anderenfalls wird der *Sonst-Code* ausgeführt. 
  - Die Behandlung nicht bekannter Werte wird sich komplett ändern. Dies hat
    Auswirkungen auf die Definition eigener Optionen mit allen von `scrbase`
    dafür bereitgestellten Befehlen. Da es bisher in TeX Live kein einziges
    Paket gibt, das darauf zurückgreift, sehe ich jedoch kein großes Problem
    darin. Zur Vermeidung der gravierendsten möglichen Probleme, wird das
    bisherige eher unzureichend dokumentierte Verhalten zwar nicht adaptiert,
    aber das bisherige Vorgehen zumindest zum Teil toleriert. Trotzdem werden
    teilweise Änderungen erforderlich sein, teilweise sind sie
    ratsam. KOMA-Script selbst wird in allen Bereichen die entsprechenden,
    notwendigen Änderungen erfahren.
  - Neue Anweisung `\defcaptionname` zu unbedingten Definierung eines
    sprachabhängigen Bezeichners. 
  - Die Anweisungen `\defcaptionname`, `\newcaptionname`, `\renewcaptionname`
    und `\providecaptionname` definieren einen Begriff in `\extras`*Sprache*,
    falls der Begriff bereits darin definiert war, sonst wird weiterhin
    `\captions`*Sprache* verwendet. Zusätzlich existiert jeweils eine
    Sternvariante, die immer `\extras`*Sprache* verwendet. Dazu wurden all
    diese Befehle komplett neu implementiert.
  - Die Anweisungen `\defcaptionname`, `\newcaptionname`, `\renewcaptionname`
    und `\providecaptionname` akzeptieren in ihrem ersten Argument nun eine
    durch Komma getrennte Liste von Sprachen. Leerzeichen sind in dieser Liste
    jedoch nicht erlaubt! 
  - Die Anweisungen `\defcaptionname`, `\newcaptionname`, `\renewcaptionname`
    und `\providecaptionname` werden nun automatisch bis `\begin{document}`
    verzögert, falls sie vorher verwendet werden, was ausdrücklich erwünscht
    ist.  
	Hinweis: Die Änderungen bei `\defcaptionname` etc. werden einfach durch
	folgendes Beispiel offenbar, das nun wie gewünscht funktioniert: 
	```latex
	\documentclass{scrartcl}
	\usepackage[ngerman,naustrian,german]{babel}
	\usepackage{hyperref}
	\renewcaptionname{ngerman,naustrian}\figureautorefname{Abb.}
	\begin{document}
	\section{Test A (german)}
	Siehe dazu auch \autoref{fig:TestA}, \autoref{fig:TestB} und
	\autoref{fig:TestC}.
	\begin{figure}
	  \centering
	  \rule{1cm}{1cm}
	  \caption{Testabbildung A}
	  \label{fig:TestA}
	\end{figure}

	\selectlanguage{naustrian}
	\section{Test B (naustrian)}
	Siehe dazu auch \autoref{fig:TestA}, \autoref{fig:TestB} und
	\autoref{fig:TestC}.
	\begin{figure}
	  \centering
	  \rule{1cm}{1cm}
	  \caption{Testabbildung B}
	  \label{fig:TestB}
	\end{figure}

	\selectlanguage{ngerman}
	\section{Test B (ngerman)}
	Siehe dazu auch \autoref{fig:TestA}, \autoref{fig:TestB} und
	\autoref{fig:TestC}.
	\begin{figure}
	  \centering
	  \rule{1cm}{1cm}
	  \caption{Testabbildung C}
	  \label{fig:TestC}
	\end{figure}
	\end{document}
	```

* **`scrjura`:**
  - `\Paragraph` und `\SubParagraph` führen im horizontalen Modus zu keiner
    Fehlermeldung mehr.
  - Der hängende Einzug von Überschriften mit `\Paragraph` und `\SubParagraph`
    wurde korrigiert.
  - Die bisher nicht dokumentierte Anweisung `\paragraphformat` wurde aus
    Gründen der Konsistenz in `\Paragraphformat` umbenannt.
  - Es sind nun Paragraphen bzw. Subparagraphen mit derselben Nummer möglich.

* **`scrlayer`, `scrlayer-scrpage`:**
  - Diese Pakete werden Teil von KOMA-Script und ersetzen künftig `scrpage2`.

* **`scrlettr`:**
  - Nachdem der Support für diese Klasse bereits seit Jahren eingestellt ist
    und auch seit Jahren empfohlen wird, stattdessen `scrlttr2` zu verwenden,
    wird diese Klasse zukünftig nicht mehr Teil der Distribution von
    KOMA-Script sein. Wer die Klasse haben will, muss sie sich ggf. aus den
    Quellen selbst erzeugen, die im Repository erhalten bleiben.

* **`scrlfile`:**
  - `\ReplaceInput` ist nun entsprechend der Anleitung verfügbar.
  - `\UnPreventPackageFromLoading{`*Paketliste*`}` entfernt nur die
    aufgeführten Pakete von der Verhinderungsliste. Es existiert auch eine
    Sternvariante, die außerdem den *Stattdessencode* (siehe neues optionales
    Argument von `\PreventPackageFromLoading`) beseitigt.
  - `\PreventPackageFromLoading` und die Sternvariante haben ein neues
    optionales, erstes Argument, in dem Code angegeben werden kann, der an
    Stelle des Ladens des Pakets verwendet werden kann. Pakete oder andere
    Dateien dürfen an dieser Stelle jedoch nicht geladen werden.
  - Die undokumentierte Anweisung `\ReplaceFile` erzeugt nun eine Fehlermeldung.
  - Mit den neuen Anweisungen `UnReplaceFile{`*Dateiname*`}`,
    `UnReplacePackage{`*Paketname*`}` und `UnReplaceClass{`*Klassenname*`}`
    kann die Ersetzung einer Datei, eines Pakets oder einer Klasse wieder
    aufgehoben werden.

* **`scrlttr2`:**
  - Der Fehler bei Verwendung ohne Sprachpaket aber mit dem `hyphen.cfg` 
    aus [`babel`](https://www.ctan.org/pkg/babel) im Format wurde behoben. Es wird trotzdem empfohlen,
    auch für Englisch [`babel`](https://www.ctan.org/pkg/babel) zu laden.
  - Option `symbolicnames` schaltet für diverse Elemente des Absenders von
    sprachabhängigen Bezeichnern zu sprachunabhängigen Symbolen des Pakets
    marvosym um. Dies betrifft `fromphone`, `frommobilephone`, `fromfax` und
    `fromemail`. Gleichzeitig wird für `fromurl` der Bezeichner
    abgeschaltet. Die Trennzeichen werden entsprechend angepasst (Doppelpunkt
    entfällt).
  - Es gibt eine neue Variable `frommobilephone` und eine gleichnamige Option,
    um die Handynummer in den Briefkopf zu bekommen. Es erfolgt jedoch kein
    Test, ob der Briefkopf dadurch ggf. zu hoch wird!
  - Die Klasse funktioniert mit einem [`babel`](https://www.ctan.org/pkg/babel)-3.9f-basierten
    LaTeX-Format auch ohne dass das Paket babel geladen wird.
  - Das neue Font-Element `placeanddate` wird verwendet, wenn statt einer
    vollen Geschäftszeile nur eine Zeile mit Ort und Datum gesetzt wird.

* **`scrpage`:**
  - Nachdem der Support für dieses Paket bereits seit Jahren eingestellt ist
    und auch seit Jahren empfohlen wird, stattdessen `scrpage2` zu verwenden,
    wird das Paket zukünftig nicht mehr Teil meiner TDS-Distribution von
    KOMA-Script sein. Wer das Paket haben will, muss es sich ggf. aus den
    Quellen selbst erzeugen, die im Repository erhalten bleiben.

* **`scrpage2`:**
  - Die Erkennung, ob beim Laden des Pakets bereits automatische oder manuelle
    Kolumnentitel eingestellt sind, wurde verbessert. Es bleibt jedoch bei der
    Empfehlung, das Paket immer entweder mit Option `automark` oder
    `manualmark` zu laden, um klare Verhältnisse zu schaffen.
  - Die vertikale Position der unteren Fußlinie wurde korrigiert.
  - Die vertikale Position des Kopfes bzw. der oberen Kopflinie wurde
    korrigiert.
  - Einige Dinge dieses Pakets werden als überholt (deprecated) deklariert.

* **`scrwfile`:**
  - Der Konflikt mit `hyperref` während des ersten LaTeX-Laufs wurde
    behoben.
	
* **`tocbasic`:**
  - Option `floatpos` in `\DeclareNewTOC` korrigiert.
  - Die Werte der Optionen `atbegin` und `atend` werden nun bei
    `\DeclareNewTOC` nicht mehr unmittelbar expandiert. Dadurch entfällt der
    Workaround:
	```latex
	\makeatletter
	\@ifpackagelater{tocbasic}{2012/04/05}{}{%
	\define@key{tocbasic}{atbegin}{%
	\def\tb@nt@atbegin{#1}%
	}
	\define@key{tocbasic}{atend}{%
	\def\tb@nt@atend{#1}%
	}
	}
	\makeatother
	```
	in der Dokumentpräambel vor der ersten Verwendung von `\DeclareNewTOC`.
  - `\DeclareNewTOC` deklariert nun selbst einen Verzeichnispräfix für
    Einträge. So dass bei Verwendung von KOMA-Script-Option
    `listof=entryprefix` nicht mehr selbst ein solcher Präfix mit
	```latex
    \providecommand*{\listof{<Dateiendung>entryname}{<Präfix>}
	``` 
	definiert werden muss.
  - Es gibt ein neues Feature `numberline`, das auch bei nicht nummerierten
    Einträgen für einen Einzug des Textes wie bei nummerierten Einträgen
    sorgt. Dazu müssen diese Einträge aber entweder `\nonumberline` selbst vor
    dem Text einfügen oder mit `\addxcontentsline` erstellt worden sein.
  - Die Verwendung des neuen Befehls
    `\addxcontentsline{`*Dateierweiterung*`}{`*Eintragstyp*`}[`*Nummer*`]{`*Text*`}`
    wird an Stelle von `\addcontentsline` empfohlen. Für nummerierte Einträge
    ist dabei das optionale Argument zu verwenden, für nicht nummerierte ist
    dieses entweder weg oder leer zu lassen. Diese Anweisung ermöglicht im
    Gegensatz zu `\addcontentsline` die Berücksichtigung von `numberline`
    (s. o.).
  - Die Anweisung
    `\addxcontentslinetoeachtocfile[`*Besitzer*`]{`*Dateierweiterung*`}{`*Eintragstyp*`}[`*Nummer*`]{`*Text*`}`
    analog zu `\addcontentslinetoeachtocfile`.

* **`tocstyle`:**
  - Das Paket verwendet endlich die Font-Elemente `partentry`,
    `partentrypagenumber`, `chapterentry`, `chapterentrypagenumber`,
    `sectionentry` und `sectionentrypagenumber` wenn eine entsprechende
    KOMA-Script-Klasse geladen ist.

* **`typearea`:**
  - Option `footheight=`*Länge* kann analog zu `headheight` verwendet werden,
    um die Höhe des Fußes einzustellen (wichtig vor allem bei Option
    `footinclude`).
  - Option `footlines=`*Anzahl* kann analog zu `headlines` verwendet werden,
    um die Höhe des Fußes einzustellen (wichtig vor allem bei Option
    `footinclude`).

</Details>

<Details title="3.11b" open>

* **`scrbook`, `scrreprt`:**
  - Die vertikale Ausrichtung von `\addpart` wurde entsprechend der von
    `\part` korrigiert.

</Details>

<Details title="3.11a" open>

* **`scrbase`:**
  - Globale Optionen mit nummerischen Werten, die per `\FamilyNumericalKey`
    oder unter Verwendung von `\FamilySetNumerical` definiert wurden, werden
	nicht mehr aus der Liste der unbekannten, globalen Optionen entfernt, wenn
    ihnen ein unbekannter Wert übergeben wurde.
  - Unbekannte Werte für globale Optionen – das sind Optionen bei
    `\documentclass` – führen bei `\FamilyProcessOptions` generell nicht mehr
    zu Fehlermeldungen, sondern ggf. zu einer Info in der log-Datei und der
    Standard-LaTeX-Warnung über nicht verwendete globale Optionen.
  - Fehlermeldungen zu unbekannten Werten für boolsche Operationen
    korrigiert. Hier wurde anstelle des falschen Werts eine interne
    Information ausgegeben, die für Anwender nutzlos war.
  - Ein Problem mit neuen Werten für alte Optionen bei Verwendung von
    `\LoadClassWithOptions` wurde behoben.

* **`scrlfile`:**
  - Problem mit dem Vergessen von bisher ausgeschlossenen Paketen bei erneutem
    `\PreventPackageFromLoading` behoben. Der Workaround
	```latex
	\usepackage{etoolbox}

	\makeatletter
	\patchcmd{\PreventPackageFromLoading}{%
	\edef\scrlfile@excludedpackages{,\reserved@a}%
	}{%
	\edef\scrlfile@excludedpackages{\scrlfile@excludedpackages,\reserved@a}%
	}{\typeout{Patch done}}{\typeout{Patch not needed, not done}}
	\makeatother
    ```
	wird also nicht mehr benötigt.

</Details>

<Details title="3.11" open>

* Die englische Anleitung hatte teilweise noch den alten Aufbau und gab noch
  nicht alle neuen Möglichkeiten von KOMA-Script 3 an. Ab jetzt entspricht die
  englische Anleitung endlich der deutschen. Danke an alle Helfer!

* **`scrartcl`, `scrbook`, `scrreprt`:**
  - Meldung
    ```
	(\end occured when \ifx on line XX was incomplete)
	```
	bei Verwendung von `\addpart`,ggf. auch in Verbindung mit Fehlermeldungen,
    beispielsweise, wenn `\addpart` in einer per `\include` geladenen Datei
    steht, behoben. Ursache war ein fehlendes `\fi` in `\@addpart`.  
	Workaround war:
	```latex
	% Put this code into the preamble of your document
	\usepackage{etoolbox}
	\makeatletter
	\patchcmd{\@addpart}{%
	\ifx\scr@ds@tocentry\@empty\else
	\expandafter\addparttocentry\expandafter{\expandafter}\expandafter{%
	\scr@ds@tocentry}%
	\@spart{#2}%
	}{%
	\ifx\scr@ds@tocentry\@empty\else
	\expandafter\addparttocentry\expandafter{\expandafter}\expandafter{%
	\scr@ds@tocentry}%
	\fi
	\@spart{#2}%
	}{}{}
	\makeatother
    ```
	in der Dokumentpräambel

* **`scrartcl`, `scrbook`, `scrreprt`, `scrlttr2`:**
  - Fehlermeldung
    ```
	! Undefined control sequence.
	 \@EverySelectfont@Init
	l.144 \if@raggedtwoe@footmisc

	```
	beim Laden von [`ragged2e`](https://www.ctan.org/pkg/ragged2e) oder [`everysel`](https://www.ctan.org/pkg/everysel) innerhalb
	von `\begin{document}` behoben. Dieser trat beispielsweise bei Verwendung
	von Paket [`sidecap`](https://www.ctan.org/pkg/sidecap) auf.  
	Workaround war ein explizites `\usepackage{everysel}` vor
    `\begin{document}`.

	
* **`typeare`:**
  - `\AfterSettingArea` analog zu `\AfterCalculatingTypearea` aber für
    `\areaset` statt für `\typearea`.
  - `areasetadvanced=true` ist eine *experimentelle Option*, um die
    Randberechnung von `\areaset` weiter an die Randberechnung von `\typearea`
    anzunähern. Allerdings werden hier oberer und unterer Rand direkt
    verteilt, während bei `\typearea` bekanntlich nur der untere Rand
    angepasst wird, um die Höhe des Satzspiegels durch Zeilen teilbar zu
    erhalten. *Auf den Namen und die Funktion dieser Option sollte man sich
    noch nicht verlassen. Sie wird daher auch vorerst nicht offiziell
    dokumentiert!*

</Details>

<Details title="3.10a" open>

* **`scrartcl`, `scrbook`, `scrreprt`:**
  - Fehlermeldung
    ```
    ! Argument of \MakeMarkcase has an extra }.
    <inserted text> 
                    \par 
    l.1 \begin{theindex}
                    
    Runaway argument?
    ! Paragraph ended before \MakeMarkcase was complete.
    <to be read again> 
                       \par 
    l.1 \begin{theindex}
	```
	beim Einbinden eines Index aufgrund einer falschen Klammerung in der
	Definition von `\idx@heading` behoben.
    Workaround war: 
	```latex
	\makeatletter
	\@ifclassloaded{scrartcl}{%
	  \CheckCommand*{\idx@heading}{%
		\twocolumn[\idx@@heading{\indexname}]%
		\@mkboth{\MakeMarkcase{\indexname}}\MakeMarkcase{{\indexname}}%
	  }%
	  \renewcommand*{\idx@heading}{%
		\twocolumn[\idx@@heading{\indexname}]%
		\@mkboth{\MakeMarkcase{\indexname}}{\MakeMarkcase{\indexname}}%
	  }%
	}{%
	  \CheckCommand*{\idx@heading}{%
		\if@openright\cleardoublepage\else\clearpage\fi%
		\twocolumn[\idx@@heading{\indexname}]%
		\@mkboth{\MakeMarkcase{\indexname}}\MakeMarkcase{{\indexname}}%
	  }%
	  \renewcommand*{\idx@heading}{%
		\if@openright\cleardoublepage\else\clearpage\fi%
		\twocolumn[\idx@@heading{\indexname}]%
		\@mkboth{\MakeMarkcase{\indexname}}{\MakeMarkcase{\indexname}}%
	  }%
	}
	\makeatother
	```

</Details>

<Details title="3.10" open>

* **`scrartcl`, `scrbook`, `scrreprt`:**
  - `\MakeMarkcase` wird in allen automatisch erzeugten Kolumnentiteln
    beachtet.
  - `headings=optiontotocandhead` oder `headings=optiontoheadandtoc` aktiviert
    die Erweiterung für das optionale Argument der Gliederungsbefehle. In der
    Voreinstellung wird das optionale Argument für Kolumnentitel und
    Inhaltsverzeichniseintrag verwendet.
  - `headings=optiontotoc` aktiviert die Erweiterung für das optionale
    Argument der Gliederungsbefehle. In der  Voreinstellung wird das optionale
    Argument nur für den Inhaltsverzeichniseintrag verwendet.
  - `headings=optiontohead` aktiviert die Erweiterung für das optionale
    Argument der Gliederungsbefehle. In der  Voreinstellung wird das optionale
    Argument nur für den Kolumnentitel verwendet.
  - Ist die Erweiterung für das optionale Argument der Gliederungsbefehle
    aktiv und befindet sich ein Gleichheitszeichen im optionalen Argument eines
    Gliederungsbefehls, so wird das Argument als *Schlüssel*=*Wert* Liste mit
    folgenden Schlüsseln interpretiert:
    - `head=`*Text*:
	  Für den Kolumneneintrag wird *Text* verwendet. Es wird empfohlen *Text*
	  in geschweifte Klammern zu setzen.
	- `tocentry=`*Text*:
      Für den Inhaltsverzeichniseintrag wird *Text* verwendet. Ist *Text*
      komplett leer, so wird kein Inhaltsverzeichniseintrag erzeugt. Es wird
      empfohlen nicht leere Werte für *Text* in geschweifte Klammern zu
      setzen.
  - Ist das Argument für den Inhaltsverzeichniseintrag eines
    Gliederungsbefehls leer, so wird kein Inhaltsverzeichniseintrag erzeugt.

* **`scrartcl`, `scrbook`, `scrreprt`, `scrextend`, `scrlttr2`:**
  - Option `footnotes=multiple` funktioniert nun auch als Klassen-
    bzw. Paketoption.  
	Workaround: Verwendung von `\KOMAoptions` oder `\KOMAoption`.
  - Option `parskip` funktioniert nun auch bei Verwendung von 
    Paket [`tracefnt`](https://www.ctan.org/pkg/tracefnt).
  - Option `parskip` funktioniert bei Verwendung von 
    Paket [`everysel`](https://www.ctan.org/pkg/everysel) nun auch nach `\begin{document}`.
	
* **`scrextend`:**
  Option `footnotes=multiple` funktionierte nun auch bei Verwendung einer
  Standardklasse nicht wie dokumentiert ohne den
  Workaround: `\deffootnotemark{\textsuperscript{\thefootnotemark}}` in der
  Dokumentpräambel nach dem Laden von `scrextend`.
	
* **`scrjura`:**
  Die Nummerierung des ersten Absatzes funktioniert bei Verwendung von Option
  `number` für `\Paragraph` oder `\SubParagraph` funktioniert wieder.
  
* **`scrwfile`:**
  Neues Paket wurde integriert, nachdem sich endlich einige Tester gefunden
  haben.
  - `\TOCclone[`*Verzeichnisname*`]{`*Kürzel des
    Quellverzeichnisses*`}{`*Kürzel des Zielverzeichnisses*`}`: Kopiert alle
    Einträge für das Quellverzeichnis in das Zielverzeichnis. Mit Hilfe des
    optionalen Arguments kann außerdem ein neues Zielverzeichnis definiert
    werden.
  - `\@starttoc` benötigt kein `\newwrite` mehr, was zu einer signifikanten
    Reduzierung der Anzahl der benötigten `\newwrite` führt.

</Details>

## Version 3.00 bis 3.09a

<Details title="3.09a" open>

* **`scrbase`:**
  Die Optionen und ihre Werte werden nicht mehr vollständig
  expandiert. Dadurch bleiben Makros im Wert ggf. über das gesamte Dokument
  hinweg erhalten. In erster Linie werden dadurch aber die Fehlermeldungen:
  ```
  ! Argument of … has an extra }.
  ```
  beseitigt.  
  Ursache: Bei Verwendung von sogenannten zerbrechlichen
  Anweisungen innerhalb der Werte konnte die vollständige Expansion u. a. zu
  obiger Fehlermeldung führen. Abhilfe schafft hier normalerweise die
  Verwendung von `\protect` vor der zerbrechlichen Anweisung.
* **`tocbasic`:**
  Per `\DeclareNewTOC` implementierte Gleitumgebungen unterstützen auch das
  optionale Argument für die Gleitposition.

</Details>

<Details title="3.09" open>

* **`scrartcl`, `scrbook`, `scrreprt`:**
  - `\captionaboveof{`*Gleitumgebung*`}[`*Verzeichniseintrag*`}{`*Titel*`}`:
  fügt einen als Überschrift formatierten Gleitumgebungstitel ein und
  funktioniert im Unterschied zu `\caption` auch außerhalb einer
  Gleitumgebung.
  - `\captionbelowof{`*Gleitumgebung*`}[`*Verzeichniseintrag*`}{`*Titel*`}`:
  fügt einen als Unterschrift formatierten Gleitumgebungstitel ein und
  funktioniert im Unterschied zu `\caption` auch außerhalb einer
  Gleitumgebung.
  - `captions=(heading|above|top)`: Die Funktion von `\caption` wird auf
  `\captionabove`, die von `\captionof` auf `\captionaboveof` eingestellt.
  - `captions=(signature|below|bot|bottom)`: Die Funktion von `\caption` wird
  auf `\captionbelow`, die von `\captionof` auf `\captionbelowof`
  eingestellt.
  - `captions=(figureheading|figureabove|abovefigure|topatfigure)`: Die
  Funktion von `\caption` wird innerhalb von `figure-` und
  `figure*-`Umgebungen auf `\captionabove` eingestellt.
  - `captions=(figuresignature|figurebelow|belowfigure|bottomatfigure)`: Die
  Funktion von `\caption` wird innerhalb von `figure-` und
  `figure*-`Umgebungen auf `\captionbelow` eingestellt.
* **`scrbase`:** 
  - Anweisungen `\FamilyNumericalKey` funktioniert auch mit leerem optionalem
    Argument.
  - Anweisung `\FamilyKeyString` korrigiert.
* **`scrdate`:** 
  - Unterstützung für die bereits in Version 3.08a dokumentierte
  Sprache `austrian`.
  - Unterstützung für die Sprache `naustrian`.
* **`scrfontsizes`:**
  Neues Paket zur Generierung von Schriftgrößendateien.
  - `\generatefontfile{`*Dateinamenpreäfix*`}[`*Grundlinienabstand*`]{`*Schriftgröße*`}`: 
	Erzeugt eine neue Schriftgrößendatei. Dazu bedient es sich der Anweisung
	`\changefontsizes`. Als *Dateinamenpräfix* ist alles erlaubt außer
	`scrsize`. Die mit KOMA-Script ausgelieferten
	Schriftgrößendateien können auf diesem Weg also nicht ersetzt werden. Um
	eine der erzeugten	Dateien zu verwenden, muss man daher zunächst
	`\@fontsizefilebase` umdefinieren.__
	Ein einfaches Beispiel zur Erzeugung der Datei `test10dd.clo` wäre daher:
    ```latex
    \documentclass{minimal}
	\usepackage{scrfontsizes}
	\generatefontfile{test}{10dd}
	\begin{document}\end{document}
	```
	Danach kann man die so erzeugte Datei weiter anpassen, beispielsweise wenn
	`\small` andere Einstellungen verwenden soll. Verwenden kann man die Datei 
	dann in einem beliebigen KOMA-Script-Dokument beispielsweise so: 
    ```latex
    \makeatletter
    \renewcommand*{\@fontsizefilebase}{test}
    \makeatother
    \documentclass[fontsize=10dd]{scrartcl}
    ```
	Wie das Beispiel zeigt, ist das ganze eher etwas für Autoren von
	Wrapperklassen, die bestimmte Schriftgrößeneinstellungen vornehmen müssen,
	aber nicht alles von Hand machen wollen. Die Anweisung kann übrigens nur
	in der Dokumentpräambel verwendet werden.
* **`scrlfile`:**
  - `\AfterClass+{`*Klasse*`}{`*Anweisungen*`}`: Führt die *Anweisungen* aus,
    falls oder sobald die *Klasse* vollständig geladen wurde, aber – falls die
	Klasse zum Zeitpunkt des Aufrufs noch nicht vollständig geladen wurde –
    noch bevor `\AtEndOfClass`-Code ausgeführt wird.
  - `\AfterClass!{`*Klasse*`}{`*Anweisungen*`}`: Führt *Anweisungen* aus,
    falls oder sobald die Klasse vollständig geladen und auch
    `\AtEndOfClass`-Code ausgeführt wurde. Die Ausführung findet daher
    grundsätzlich nicht mehr im Kontext der Klasse statt.

  Der Unterschied zwischen `\AfterClass*`, `\AfterClass+` und `\AfterClass!`
  erschließt sich nur bei Betrachtung des Falls, dass *Klasse* gerade geladen
  wird, wenn die Anweisung für diese Klasse aufgerufen wird.

  - `\AfterAtEndOfClass{`*Klasse*`}{`*Anweisungen*`}`: Diese Anweisung
    arbeitet grundsätzlich wie `\AfterClass`, führt die angegebenen Anweisungen
    aber nach `\AtEndOfClass`-Anweisungen der jeweiligen Klasse und nicht mehr
    im Kontext der Klasse aus.
  - `\AfterPackage+{`*Paket*`}{`*Anweisungen*`}`: Führt die *Anweisungen* aus,
    falls oder sobald das *Paket* vollständig geladen wurde, aber – falls das
    Palet zum Zeitpunkt des Aufrufs noch nicht vollständig geladen wurde –
    noch bevor `\AtEndOfPackage`-Code ausgeführt wird.
  - `\AfterPackage!{`*Paket*`}{`*Anweisungen*`}`: Führt *Anweisungen* aus,
    falls oder sobald das Paket vollständig geladen und auch
    `\AtEndOfPackage`-Code ausgeführt wurde. Die Ausführung findet damit auch
    grundsätzlich nicht mehr in Kontext des Pakets statt. 

  Der Unterschied zwischen `\AfterPackage*`, `\AfterPackage+` und
  `\AfterPackage!` erschließt sich nur bei Betrachtung des Falls, dass *Paket*
  gerade geladen wird, wenn die entsprechende Anweisung für dieses Paket
  aufgerufen wird. So ergibt beispielsweise: 
  ```latex 
  \begin{filecontents}{requireA.sty}
  \ProvidesPackage{requireA}
  \AtEndOfPackage{\typeout{AtEndOfPackage by A}}
  \RequirePackage{requireB}
  \typeout{finish package requireA}
  \end{filecontents}
  \begin{filecontents}{requireB.sty}
  \ProvidesPackage{requireB}
  \AfterPackage+{requireA}{\typeout{>+ from B}}
  \AfterPackage!{requireA}{\typeout{>! from B}}
  \AfterPackage*{requireA}{\typeout{>* from B}}
  \AfterPackage{requireA}{\typeout{>from B}}
  \end{filecontents}
  
  \documentclass{article}
  \usepackage{scrlfile}
  \AfterPackage!{requireA}{\typeout{>! global}}
  \AfterPackage+{requireA}{\typeout{>+ global}}
  \AfterPackage*{requireA}{\typeout{>* global}}
  \AfterPackage{requireA}{\typeout{>global}}
  \usepackage{requireA}
  \begin{document}
  \end{document}
  ```
  die Ausgabe: 
  ```
  (./requireA.sty (./requireB.sty
  >* from B
  )
  finish package requireA
  )
  >+ global
  >* global
  >global
  >+ from B
  >from B
  AtEndOfPackage by A
  >! global
  >! from B
  ```
  Man beachte hier die sehr unterschiedliche Positionen der Ausgaben »`>* from
  B`«, »`>+ from B`« und »`>! from B`«.

  - `\AfterAtEndOfPackage{`*Paket*`}{`*Anweisungen*`}`: Diese Anweisung
    arbeitet grundsätzlich wie `\AfterPackage`, führt die angegebenen
    Anweisungen aber nach `\AtEndOfPackage`-Anweisungen des jeweiligen Pakets
    und nicht mehr im Kontext des Pakets aus.

* **`scrlttr2`:**
  - `refline=dateleft`: Setzt das Datum in der Geschäftszeile links.
  - `refline=dateright`: Setzt das Datum in der Geschäftszeile rechts
    (Voreinstellung). 
  - `refline=nodate`: Setzt das Datum gar nicht in der Geschäftszeile.
  - Die Sprache `naustrian` wird unterstützt.
* **`tocbasic`:**
  - `\DeclareNewTOC` kennt die neue Option `atbegin=`*Code*, um am Anfang der
	gleitenden oder nicht gleitenden Umgebung *Code* ausführen zu lassen.
  - `\DeclareNewTOC` kennt die neue Option `atend=`*Code*, um am Ende der
	gleitenden oder nicht gleitenden Umgebung *Code* ausführen zu lassen.
  - Behebung einer Endlosschleife (`\def\@currext{\@currext}`)
    bei Verwendung von `\listofeachtoc` mit optionalem Argument.

</Details>

<Details title="3.08a" open>

* **`scrlttr2`:**
  Die für Version 3.08 beschriebenen Änderungen bezüglich `\firsthead`,
  `\firstfoot`, `\nexthead` und `\nextfoot` sind in der Anleitung
  dokumentiert.
* **`scrlfile`:**
  Behebung der Fehlermeldung bei Verwendung von [`ntheorem`](https://www.ctan.org/pkg/ntheorem):
  ```
  ERROR: LaTeX Error: Command \@gobbleopt already defined.
  ```
  Ursache: Das Paket definiert diese Anweisung, die auch von `scrlfile`
  definiert wird, ebenfalls und verwendet dabei
  `\newcommand`. Denselben Fehler gibt es übrigens, wenn man bei
  Verwendung einer beliebigen Klasse das Paket `nohyperref` vor `ntheorem`
  lädt.  
  Workaround: Folgendes noch vor dem Laden von `ntheorem` sollte helfen:
  ```latex
  \makeatletter
  \BeforePackage{ntheorem}{%
    \let\@gobbleopt\relax
    \AtEndOfPackage{\renewcommand{\@gobbleopt}[1][]{}}%
  }
  \makeatother
  ```

</Details>

<Details title="3.08" open>

* **`scrartcl`, `scrbook`, `scrreprt`, `scrlttr2`:**
  - `parskip=never`: Diese neue Einstellung fügt im Gegensatz zu
    `parskip=false` auch dann keinen vertikalen Abstand zwischen den Absätzen
    ein, wenn dies für den vertikalen Ausgleich (siehe Anweisung
    `\flushbottom`) notwendig wäre.
  - `parskip=`…: Änderungen an der Absatzauszeichnung führen ein implizites
    `\selectfont` aus und sind deshalb ab dem nächsten Absatz verfügbar.
* **`scrbase`:**
  - In der Optionenliste bzw. Werteliste von `\FamilyOptions` und
    `\FamilyOption` sind leere Elemente erlaubt. Dies widerspricht
    eindeutig der Spezifikation und Dokumentation der Befehle und wurde
    entgegen meiner Überzeugung nur implementiert, damit ich endlich meine
    Ruhe vor entsprechenden Anfragen habe.
  - `\FamilyStringKey[`*Familienmitglied*`]{`*Familie*`}{`*Schlüssel*`}{\`*Makroname*`}`:
    Abkürzung für
    `\DefineFamilyKey[`*Familienmitglied*`]{`*Familie*`}{`*Schlüssel*`}{\def\`*Makroname*`{#1}}`.
  - `\FamilyStringKey[`*Familienmitglied*`]{`*Familie*`}{`*Schlüssel*`}[`*Säumniswert*`]{\`*Makroname*`}`:
    Abkürzung für
    `\DefineFamilyKey[`*Familienmitglied*`]{`*Familie*`}{`*Schlüssel*`}[`*Säumniswert*`]{\def\`*Makroname*`{#1}}`.
* **`scrbook`, `scrreprt`:** Das Font-Element `chapterprefix`, das bereits
  seit Version 2.96b existiert, wurde dokumentiert.
* **`scrlttr2`:** 
  - `visualize.lco` zeigt das Adressfeld und das Feld für die
  Absenderergänzung nun mit korrekter Höhe an.
  - Dank Benjamin Hell wird als Sprache nun auch Swedisch
  (`swedish`) und Dänisch (`danish`) unterstützt.
  - Die Anweisungen `\firsthead, \firstfoot, \nexthead` und `\nextfoot` werden
    durch die Variablen `firsthead, firstfoot, nexthead` und `nextfoot`
    ersetzt. Die alten Anweisungen funktionieren weiterhin, erzeugen aber
    entsprechende Warnungen. Die direkte Verwendung interner Anweisungen aus
    diesem Bereich funktioniert nur noch teilweise und erzeugt dann ebenfalls
    Warnungen. Die Änderungen verbessern scrlttr2 jedoch in Hinblick auf eine
    konsistente Benutzerschnittstelle. Außerdem ist damit beispielsweise
    möglich, innerhalb von `nexthead` auf den Inhalt von `firsthead`
    zuzugreifen. Das gilt auch dann, wenn der Inhalt von `firsthead` über
    Optionen automatisch festgelegt wird.
* **`scrdate`:** Dank Benjamin Hell wird als Sprache nun auch Swedisch
  (`swedish`) und Dänisch (`danish`) unterstützt.
* **`scrlfile`:**
  - Wird innerhalb von `\BeforeClosingMainAux` zum Schreiben in die aux-Datei
  auf `\protected@write` zurück gegriffen, so wird stattdessen automatisch die
  neue interne Anweisung `\protected@immediate@write` verwendet. Dadurch
  können Anweisung wie `\addcontentsline` oder `\addtocontents` in
  `\BeforeClosingMainAux` verwendet werden.
  - `\PreventPackageFromLoading{`*Paketliste*`}`: Für alle in *Paketliste*
  angegebenen Pakete wird verhindert, dass diese zukünftig geladen
  werden. Dies betrifft sowohl das Laden mit `\usepackage` als auch das Laden
  mit `\RequirePackage` also auch das Laden innerhalb von anderen Paketen, die
  zwingend auf die entsprechenden Pakete angewiesen sind! Wird die Anweisung
  mehrfach aufgerufen, so werden die neu angegebenen Pakete an die bereits
  existierende Ausnahmeliste angehängt.
  - `\ResetPreventPackageFromLoading`: Setzt die von
  `\PreventPackageFromLoading` definierte Ausnahmeliste zurück. Gleichzeitig
  werden die Umdefinierungen von `\RequirePackage` und `\usepackage`
  rückgängig gemacht.
  - `\StorePreventPackageFromLoading{`*Macro*`}`: Speichert die aktuelle
  Ausnahmeliste von `\PreventPackageFromLoading` im angegebenen Macro. Diese
  kann beispielsweise nach einem `\ResetPreventPackageFromLoading` verwendet
  werden, um die Liste mit `\PreventPackageFromLoading{`*Macro*`}`} wieder her
  zu stellen: 
    ```latex
    \PreventPackageFromLoading{foo}% Verhindere, dass Paket foo geladen wird.
    \StorePreventPackageFromLoading{\MeineListe}% Speichere die aktuelle Ausnahmeliste in \MeineListe.
    \ResetPreventPackageFromLoading% Entferne die Ausnahmeliste und deren Behandlung und ...
    \usepackage{bar}% ... erlaube bar so alle möglichen Pakete zu laden.
    \PreventPackageFromLoading{\MeineListe}% Stelle die gespeicherte Ausnahmen wieder her.
    ```

</Details>

<Details title="3.07" open>

* **`scrbook`, `scrreprt`, `scrartcl`, `scrlttr2`, `scrextend`:**
  Mit Hilfe der Anweisungen `\setkomafont` und `\addtokomafont` kann über das
  neue Element `footnoterule` die Farbe der Fußnotentrennlinie geändert
  werden. Voreingestellt ist dabei keinerlei Änderung an Schrift oder Farbe
  der Linie.

</Details>

<Details title="3.06" open>

* **`scrbase`:** Neue Rechenfunktionen für ganze Zahlen (`\numexpr`) unter
  Nutzung von e-TeX:
  - `\XdivY{`*X*`}{`*Y*`}` berechnet *X* div *Y*.
  - `\XmodY{`*X*`}{`*Y*`}` berechnet *X* mod *Y*.
* **`scrtime`:** Es wird die Optionenschnittstelle von KOMA-Script
  verwendet. Damit ist die Option `24h` obsolet, dafür ist `12h` als
  *key=value*-Schalter realisiert.
* **`scrdate`:** Das Paket wurde zu 90% neu geschrieben und bietet diverse neue Anweisungen, die allesamt voll expandierbar sind, also auch innerhalb von `\MakeUppercase` und `\MakeLowercase` verwendet werden können:
  - `\CenturyPart{`*Jahr*`}`:
    Gibt den Jahrhundertteil des angegebenen Jahres aus. Dabei ist das Jahr 10
    wirklich das Jahr 10 und nicht das Jahr 2010! Für das Jahr 2010 würde
    beispielsweise 20 zurückgegeben.  
	*ACHTUNG:* Die Rückgabe ist eine Zahl, keine Ausgabe. Will man die Zahl
    ausgeben, so muss man beispielsweise `\the` voranstellen!
  - `\DecadePart{`*Jahr*`}`:
    Gibt den Teil ohne den Jahrhundertteil des angegebenen Jahres aus. Für das
    Jahr 2010 würde beispielsweise 10 ausgegeben.  
	*ACHTUNG:* Die Rückgabe ist eine Zahl, keine Ausgabe. Will man die Zahl ausgeben, so muss man beispielsweise `\the` voranstellen!
  - `\DayName{`*Jahr*`}{`*Monat*`}{`*Tag*`}`:
    Es wird der Wochentags zu dem angegebenen Datum ausgegeben. Dabei ist es
    erlaubt, statt eines einfachen Tages auch eine einfache Rechnung mit den
    vier Grundrechenarten anzugeben, um beispielsweise den Wochentag in 4
    Tagen zu bestimmen.
  - `\DayNameByNumber{`*Nummer*`}`:
    Gibt den Namen des zur Nummer passenden Wochentags zurück (siehe
    `\DayNumber`). Dabei darf die Nummer auch eine einfache Rechnung mit den
    vier Grundrechenarten sein.
  - `\DayNumber{`*Jahr*`}{`*Monat*`}{`*Tag*`}`:
    Es wird die Nummer des Wochentags zu dem angegebenen Datum zurück
    gegeben. Dabei ist es erlaubt, statt eines einfachen Tages auch eine
    einfache Rechnung mit den vier Grundrechenarten anzugeben, um
    beispielsweise den Wochentag in 4 Tagen zu bestimmen. Die Wochentage
    werden beginnend mit Sonntag=0, Montag=1 bis Samstag=6 nummeriert.  
	*ACHTUNG:* Die Rückgabe ist eine Zahl, keine Ausgabe. Will man die Zahl
    ausgeben, so muss man beispielsweise `\the` voranstellen!
  - `\ISODayName{`*Jahr*`-`*Monat*`-`*Tag*`}`:
    Entspricht `\DayName` mit Übergabe des Datums in ISO-Schreibweise als ein
    einziges Argument. 
  - `\ISODayNumber{`*Jahr*`-`*Monat*`-`*Tag*`}`:
    Entspricht `\DayNumber` mit Übergabe des Datums in ISO-Schreibweise als
    ein einziges Argument. 
  - `\ISOToday`:
    Gibt das aktuelle ISO-Datum aus, wobei einstellige Monate und einstellige
    Tage zweistellig ausgegeben werden (2010-01-08). 
  - `\IsoToday`:
    Gibt das aktuelle ISO-Datum aus, wobei einstellige Monate und einstellige
    Tage auch einstellig ausgegeben werden (2010-1-8). 
  - `\todaysnumber`:
    Gibt die Nummer des aktuellen Wochentags zurück (siehe `\DayNumber`).
* **`typearea`:** Mit Option `pagesize=dvipdfmx` wird die Fähigkeit des
  Programms `dvipdfmx` unterstützt, das Papierformat auch innerhalb des
  Dokuments per `code>\special{papersize=...}` zu ändern.
* **`scrbook`, `scrreprt`, `scrartcl`:**
  - `listof=entryprefix`:
    Setzt bei allen Gleitungebungsverzeichnissen, für die ein
    `\listof`*Dateikürzel*`entryname` gesetzt ist, selbiges vor die Nummern
    der jeweiligen Einträge. Für die *Dateikürzel* `lot` und `lof` ist das
    jeweilige Makro als `\tablename` bzw. `\figurename` definiert. Damit kann
    man also im Tabellen- und Abbildungsverzeichnis die völlig überflüssigen
    Präfixe „Tabelle“ bzw. „Abbildung“ vor die Tabellen-
    bzw. Abbildungsnummern setzen lassen. Damit das von der Formatierung her
    auch funktioniert, wird gleichzeitig `listof=flat` aktiviert.
  - `listof=...`:
    Die Einstellungen wirken sich nicht nur auf die Verzeichnisse des
    Besitzers `float` unter Kontrolle von `tocbasic` aus, die bereits an
    `tocbasic` gemeldet wurden, sondern auch auf all jene, die `tocbasic` erst
    noch gemeldet werden. Damit werden in dem Beispiel:
	```latex
	\documentclass[listof=leveldown,listof=numbered]{scrbook}
	\usepackage{listings}
	\usepackage{scrhack}% u. a. \lstlistoflistings unter Kontrolle von tocbasic stellen

	\begin{document}
	\chapter{Verzeichnisse}
	\listoffigures
	\lstlistoflistings
	\chapter{Test}
	\begin{figure}
      \centering
  
      \caption{Erste Abbildung}
      \label{fig:test1}
	\end{figure}

	\begin{lstlisting}[caption={Erstes Listing}]
	Test
	\end{lstlisting}

	\end{document}
	```
	sowohl das Abbildungsverzeichnis als auch das Verzeichnis der Listings als
	nummerierter Abschnitt (`\section`) ausgegeben.
* **`scrbook`, `scrreprt`, `scrartcl`, `scrlttr2`:**
  - `\setfootnoterule[`*Höhe*`]{`*Länge*`}`:
    Setzt die Fußnoten-Trennlinie auf eine bestimmte Höhe und Länge. Dabei
    werden die Höhe und Länge erst beim Setzen der Linie selbst abhängig von
    `\normalsize` ausgewertet. Die Höhe kann komplett entfallen und wird dann
    nicht geändert. Ist das Argument für die Höhe oder Länge leer, so wird die
    jeweilige Größe nicht geändert. Es gibt sowohl beim Setzen als auch bei
    Verwendung der Größen für unplausible Werte eine Warnung.
* **`scrjura`:**
  - `juratitlepagebreak=`*Ein-/Auswert* (Option):
    In der Voreinstellung sind ab Version 0.5b Seitenumbrüche in
    Paragraphen-Überschriften verboten. Mit der Option können diese jedoch
    erlaubt (und auch wieder verboten) werden.
  - `ref=nopar` (Option):
    schaltet die Ausgabe des Absatzes bei `\ref` und `\refPar` ab.
  - `ref=nosentence` (Option):
    schaltet die Ausgabe des Satzes bei `\ref` und `\refSentence` ab.
  - `ref=OnlyParagraph` (Option):
    vereinigt `ref=nopar` und `ref=nosentence`.
* **`tocbasic`:**
  - Ist das Paket [`microtype`](https://www.ctan.org/pkg/microtype) geladen, so wird ab sofort innerhalb
    von Verzeichnissen *character protrusion* abgeschaltet, da dies zu
    fehlerhaften Pünktchen bei den den Einträgen führen kann. Will man dies
    nicht, soll also in einem Verzeichnis doch mit *protrusion* gearbeitet
    werden, so kann man die automatische protrusion-Behandlung per `\setuptoc`
    mit dem Feature `noprotrusion` abschalten. Das Feature bedeutet also nicht
    etwa kein *character protrusion*, sondern analog zu `nobabel` keine
    *protrusion*-Behandlung.
  - `\DeclareNewTOC[`*Optionen*`]{`*Dateierweiterung*`}`:
    Mit Hilfe dieser Anweisung, kann der gesamte Code aus dem bisherigen
    Abschnitt 12.4, „Ein komplexes Beispiel“, auf einen Schlag ausgeführt
    werden. Dazu kennt die Anweisung folgende *key*=*value*-Optionen:
    - `counterwithin=`*LaTeX-Zähler*:
      Falls eine neue Gleitumgebung oder eine nicht gleitende Umgebung
      definiert wird, so wird für diese auch ein neuer Zähler *Eintragstyp*
      (siehe Option `type`) angelegt. Dieser Zähler kann in gleicher Weise wie
      beispielsweise der Zähler `figure` bei book-Klassen von Zähler `chapter`
      abhängt von einem *LaTeX-Zähler* ahängig gemacht werden.
    - `float`:
      Es wird nicht nur ein neuer Verzeichnistyp definiert, sondern auch
      Gleitumgebungen *Eintragstyp* (siehe Option `type`) und *Eintragstyp*`*`
      (vgl. `figure` und `figure*`).
    - `floatpos=`*Gleitverhalten*:
      Jede Gleitumgebung hat ein voreingestelltes Gleitverhalten, das über das
      optionale Argument der Gleitumgebung überladen werden kann. Mit dieser
      Option wird das *Gleitverhalten* für die optional erstellbare
      Gleitumgebung (siehe Option `float`) festgelegt. Die Syntax und Semantik
      ist dabei mit der des optionalen Arguments für die Gleitumgebung
      identisch. Wird die Option nicht verwendet, so ist das voreingestellte
      *Gleitverhalten* `tbp`, also top, bottom, page.
    - `floattype=`*Gleittyp*:
      Jede Gleitumgebung hat einen numerischen Typ. Gleitumgebungen, bei denen
      im *Gleittyp* nur unterschiedliche Bits gesetzt sind, können sich
      gegenseitig überholen. Die Gleitumgebungen `figure` und `table` haben
      normalerweise die Typen 1 und 2, können sich also gegenseitig
      überholen. Es sind Typen von 1 bis 31 (alle Bits gesetzt, kann also
      keinen anderen Typ überholen und von keinem anderen Typen überholt
      werden) zulässig. Wir kein Typ angegeben, so wird mit 16 der höchst
      mögliche Ein-Bit-Typ verwendet.
    - `forcenames`:
      Siehe Option `name` und `listname`.
    - `hang=`*Einzug*:
      Mehrzeilige Verzeichniseinträge besitzen ab der zweiten Zeile einen
      *Einzug* von links. Dieser Einzug wird auch für die Position des Textes
      in der ersten Zeile eines nummerierten Eintrags verwendet. Der Wert des
      Einzugs kann über diese Option bestimmt werden. Ohne diese Option wird
      als *Einzug* 1,5 em verwendet.
    - `indent=`*Einzug*:
      In der hierarchischen Form besitzt jeder Verzeichniseintrag einen
      *Einzug* von links. Der Wert des Einzugs kann über diese Option bestimmt
      werden. Ohne diese Option wird als *Einzug* 1 em verwendet. 
    - `level=`*Gliederungsebene*:
      Jeder Eintrag in ein Verzeichnis hat eine nummerische
      *Gliederungsebene*, die über diese Option gesetzt werden kann. Ist diese
      Option nicht angegeben, so wird der Standardwert 1 verwendet. 
    - `listname=`*Verzeichnistitel*:
      Jedes Verzeichnis hat eine Überschrift, die durch diese Option bestimmt
      werden kann. Ist die Option nicht angegeben, so wir als
      *Verzeichnistitel* »`List of `*Mehrzahl des Eintragstyps*« (siehe Option
      `types`) verwendet, wobei das erste Zeichen der *Mehrzahl des
      Eintragstyps* in einen Großbuchstaben gewandelt wird. Es wird auch ein
      Makro `\list`*Eintragstyp*`name` mit diesem Wert definiert, der
      jederzeit geändert werden kann. Dieses Makro wird jedoch nur definiert,
      wenn es nicht bereits definiert ist oder zusätzlich Option `forcenames`
      gesetzt ist. 
    - `name=`*Eintragsname*:
      Sowohl als optionaler Präfix für die Einträge im Verzeichnis als auch
      für die Beschriftung in einer Gleitumgebung (siehe Option `float`) oder
      einer nicht gleitenden Umgebung (siehe Option `nonfloat`) wird ein Name
      für einen Eintrag in das Verzeichnis benötigt. Ohne diese Option wird
      als *Eintragsname* der `Eintragstyp` verwendet, bei dem das erste
      Zeichen in einen Großbuchstaben gewandelt wird. Es wird auch ein Makro
      `\`*Eintragstyp*`name` mit diesem Wert definiert, der jederzeit geändert
      werden kann. Dieses Makro wird jedoch nur definiert, wenn es nicht
      bereits definiert ist oder zusätzlich Option `forcenames` gesetzt ist. 
    - `nonfloat`:
      Es wird nicht nur ein neuer Verzeichnistyp definiert, sondern auch eine
      nicht gleitende Umgebungen *Eintragstyp*`-` (siehe Option `type`), die
      ähnlich wie eine Gleitumgebung verwendet werden kann, jedoch nicht
      gleitet und auch nicht die Grenzen der aktuell gültigen Umgebung
      durchbricht. 
    - `owner=`*Besitzer*:
      Jedes neue Verzeichnis hat bei tocbasic einen Besitzer (siehe
      Anleitung). Dieser kann hier angegeben werden. Ist kein Besitzer
      angegeben, so wird der Besitzer »`float`« verwendet. 
    - `type=`*Eintragstyp*:
      Der *Eintragstyp* gibt den Typ der Einträge in das entsprechende
      Verzeichnis an. Der Typ wird auch als Basisname für verschiedene Makros
      und ggf. Umgebungen und Zähler verwendet. Er sollte daher nur aus
      Buchstaben bestehen. Wird diese Option nicht verwendet, so wird für
      *Eintragstyp* die *Dateierweiterung* verwendet. 
    - `types=`*Mehrzahl des Eintragstyps*:
      An verschiedenen Stellen wird auch die Mehrzahlform des Eintragstyps
      verwendet, beispielsweise um eine Anweisung `\listof`*Mehrzahl des
      Eintragstyps* zu definieren. Wird diese Option nicht verwendet, so wird
      als *Mehrzahl des Eintragstyps* einfach »*Eintragstyp*s« verwendet.

    Das Beispiel aus Abschnitt 12.4, »Ein komplettes Beispiel«, schrumpft
    damit zu
	```latex
	\DeclareNewTOC[%
	  type=remarkbox,%
      types=remarkboxes,%
      float,% Es sollen Gleitumgebungen definiert werden.
      floattype=4,%
      name=Merksatz,%
      listname={Verzeichnis der Merks\"atze}%
    ]{lor}
    \setuptoc{lor}{chapteratlist}
	```
	zusammen. Anschließend sind neben den Umgebungen `remarkbox` und
    `remarkbox*` auch der Zähler `remarkbox` und die Anweisungen
    `\theremarkbox`, `\remarkboxformat`, `\remarkboxname`,
    `\listremarkboxname`, `\listofremarkboxes` und einige intern verwendete
    Anweisungen mit Bezug auf die Dateiendung `lor` definiert. Soll der
    Gleitumgebungstyp dem Paket überlassen werden, so kann Option
    `floattype` im Beispiel zusätzlich entfallen. Wird zusätzlich die Option
    `nonfloat` angegeben, so wird zusätzlich ein Umgebung `remarkbox-`
    definiert, in der ebenfalls `\caption` verwendet werden kann, die jedoch
    nicht gleitet.
* `\MakeUppercase{\todayname}` und `\MakeLowercase{\todaysname}`
    funktionierten mit `scrdate` nicht wie erwartet, sondern liefern immer
    `unkown`.  
  Ursache: Die mangelnde Expandierbarkeit von `\todaysname`. Das Problem
    existierte vermutlich schon seit `scrdate` 1.0.
* Die Umgebung `addmargin` fügte einen doppelten Absatzabstand ein, wenn sie
    unmittelbar nach einem Absatz verwendet wird.  
  Ursache: `\partopsep` war falsch gesetzt.  
  Notlösung: `\parskip` vor der Verwendung von `addmargin` lokal auf `0pt`
  setzen.

</Details>

<Details title="3.05" open>

* **`scrlttr2`:** neue Pseudolängen `firstheadhpos` und `firstfoothpos`.
* **`scrartcl`, `scrbook`, `scrreprt`:** `\captionof` wie auch von den 
  Paketen [`capt-of`](https://www.ctan.org/pkg/capt-of) und [`caption`](https://www.ctan.org/pkg/caption) bekannt.
* Die Verwendung einer obsoleten Option konnte u. U. zu einer Fehlermeldung
  statt einer reinen Warnung führen.  
  Lösung: Die obsolete Option durch ihr eine aktuelle Option ersetzen.
* In `tocbasic` gab es ein paar Fehler in Anweisungen, die von KOMA-Script
  selbst nicht verwendet werden.

</Details>

<Details title="3.04a" open>

* `\KOMAoptions{titlepage=...}` funktionierte im Gegensatz zu
  `\documentclass[titlepage=...]{...}` nicht.  
  Ursache: Die Option wurde nicht zur Laufzeit, sondern bereits beim Laden der
  Klasse ausgewertet und beeinflusste dann nur die Definition von `\maketitle`
  und `abstract`.  
  Lösung: Die Wahl bereits beim Laden der Klasse also im optionalen Argument
  von `\documentclass` treffen.
* Die Verwendung von `KOMAold` für `scrlttr2` führte zu der Fehlermeldung:
  ```
  Runaway argument?
  {\@setplength {foldmarkhpos}{3.5mm} \@setplength {tfoldmarkvpos}{103.\ETC.
  ! File ended while scanning use of \@setkomaname.
  ```
  Ursache: Die Generierung von `KOMAold.lco` aus `scrklco.dtx` war fehlerhaft.  

</Details>

<Details title="3.04" open>

* Bei Verwendung von `\addtoeachtocfile` oder `\listofeachtoc` wurde ein
  Fehler wegen nicht definiertem `\doforeachfocfile` gemeldet.  
  Ursache: Ein Tippfehler in `tocbasic.sty` bzw. `tocbasic.dtx`.  
  Notnagel: In der Präambel `\let\doforeachfocfile\doforeachtocfile` einfügen.
* Die dokumentierte Variable `addresseeimage` in `scrlttr2` funktionierte
    nicht, sondern ergab eine Fehlermeldung.  
  Ursache: Schreibfehler in der Klasse.  
  Notlösung: 
  ```latex
  \ifkomavar{addresseeimage}
    {\setkomavar{addresseeimage}{...}}
    {\setkomavar{addresseimage}{...}}
  ```
* Die Kompatibilitätseinstellungen `version=3.03` und `version=3.03a` führten
  zu demselben Ergebnis wie `version=first`.  
  Workaround: Kompatibilitätseinstellung `version=3.02c` verwenden, die mit
    `version=3.03` und `version=3.03a` identisch ist.  
  Hinweis: Die Einstellung `version=last` ist von dem Problem nicht
  betroffen. Da diese Einstellung von der Version abhängig ist, ist sie jedoch
  im Gegensatz zu `version=3.02c` kein Ersatz für `version=3.03` oder
  `version=3.03a`.

</Details>

<Details title="3.03a" open>

* Die `labeling`-Umgebung funktionierte nicht.  
  Abhilfe: Folgenden Code in die Dokumentpräambel einfügen:
  ```latex
  \makeatletter
  \ifstr{\KOMAScriptVersion}{2009/04/01 v3.03 KOMA-Script}{%
    \renewenvironment{labeling}[2][]{%
      \def\sc@septext{#1}%
      \list{}{\settowidth{\labelwidth}{%
	      {%
            \usekomafont{labelinglabel}{#2%
              \usekomafont{labelingseparator}{\sc@septext}}%
          }%
		}%
        \leftmargin\labelwidth \advance\leftmargin by \labelsep
        \let\makelabel\labelinglabel
      }%
    }{%
      \endlist
    }%
  }{}
  \makeatother
  ```
* Die Optionen `chapterprefix` and `appendixprefix` führten bei Sprachen wie
    Spanisch, bei denen `~` ein shortcut-Zeichen ist, zu Problemen.  
  Abhilfe: Folgenden Code in die Dokumentpräambel einfügen:
  ```latex
  \newcommand*{\chapterformat}{%
    \mbox{\chapappifchapterprefix{\nobreakspace}\thechapter\autodot\enskip}%
  }
  ```

</Details>

<Details title="3.03" open>

* Verwendete man die seit 3.02 neue Möglichkeit per Font-Element
    `labelinglabel` oder `labelingseparator` die Schriften in einer
    `labeling`-Umgebung einzustellen, dann stimmt die Berechnung des längsten
    Elements nicht.  
  Hintergrund: Es wurde schlicht vergessen, bei der Berechnung die
    entsprechenden Elemente bereits zur Anwendung zu bringen.  
  Notlösung: Das Font-Element `labelingseparator` nicht verwenden, sondern
  stattdessen die Schrift des optionalen Argument direkt im optionalen
  Argument von `labeling` mit angeben. Das Element `labelinglabel` konnte
  verwendet werden, die entsprechende Schriftumschaltung sollte jedoch im
  obligatorischen Argument von `labeling` zusätzlich auch angegeben werden.  
  Alternativlösung: Genau wie vor Version 3.02 arbeiten und die beiden
  Elemente bis ignorieren.

</Details>

<Details title="3.02b" open>

* Werden Verzeichnisse per Option nummeriert, fehlte die Nummer im
  Kolumnentitel.
* Bei gleichzeitiger Verwendung von [`amsmath`](https://www.ctan.org/pkg/amsmath) stimmte die vertikale
  Ausrichtung der Bildunterschriften nicht exakt.  
  Ursache: [`amsmath`](https://www.ctan.org/pkg/amsmath) definiert `\smash` inkompatibel um und
    KOMA-Script verlässt sich darauf, dass `\smash` wie im LaTeX-Kern
    definiert ist.  
  Workaround: Vor dem Laden von [`amsmath`](https://www.ctan.org/pkg/amsmath) folgende Zeilen in die
    Präambel einfügen:
  ```latex
  \makeatletter
  \let\orig@smash\smash
  \let\orig@scr@smashdp\scr@smashdp
  \renewcommand*{\scr@smashdp}{\let\smash\orig@smash\orig@scr@smashdp}
  \makeatother
  ```
  Damit wird dann an der kritischen Stelle die Originaldefinition
    verwendet. Da dies innerhalb einer Gruppe geschieht, wird ansonsten
    weiterhin die `\smash` Version von [`amsmath`](https://www.ctan.org/pkg/amsmath) verwendet.
* Wird die Schriftgröße für das Element `caption` beispielsweise per
    `\setkomafont{caption}{\footnotesize}` verkleinert, so wurden einzeilige
    `\caption`-Texte vertikal falsch (nämlich für `\normalsize`) ausgerichtet.  
  Ursache: Bei der Sonderbehandlung für einzeilige `\caption`s wurde die
    Schrift zu spät umgeschaltet.  
  Workaround: Kann man auf die Sonderbehandlung für einzeilige captions
  verzichten, so hilft die Option `captions=nooneline`, die man beim Laden der
  Klasse oder per `\KOMAoptions` bzw. `\KOMAoption` setzen kann. Anderenfalls
  halft nur, das Setzen der `\caption`s nicht der Klasse zu überlassen,
  sondern beispielsweise das Paket [`captions`](https://www.ctan.org/pkg/captions) zusätzlich zu laden.

</Details>

<Details title="3.02a" open>

* Diese Version war ein Versehen. Offiziell gibt es sie nicht.

</Details>

<Details title="3.02" open>

* Bei Verwendung von `scrpage2`, Version 2.2f konnte es bei gleichzeitiger
  Verwendung von `titlesec` zu einer eigenartigen Fehlermeldung wegen
  angeblicher *Undefined control sequence `\def@onesidehead`* kommen.  
  Ursache: Dämlicherweise hatte ich mit einem `\string\if@mainmatter` in einer
  Ausgabe die `\if...\fi-`Schachetelungserkennung von TeX ausgehebelt.

</Details>

<Details title="3.01b" open>

* `\providecaptionname, \newcaptionname` und `\renewcaptionname`
  funktionierten nur solange noch keine Sprache ausgewählt wurden
  korrekt. Wurde bereits eine Sprache ausgewählt, konnte die Entscheidung,
  ob der Begriff für diese Sprache neu ist, falsch sein. Dadurch konnte bei
  mehrsprachigen Dokumenten, bei denen Begriffe mit einer dieser Anweisungen
  definiert wurden, eine ungewollte Sprachenmischung entstehen.
* Paket `scrextend` meldete Fehler, wenn Option `extendedfeature=title` nicht
  verwendet wurde.  
  Notlösung: Die angegebenen Option verwenden und den Titel von `scrextend`
  bauen lassen.

</Details>

<Details title="3.01a" open>

* Die Verwendung von Absätzen in Fußnoten führte zu einer Fehlermeldung.  
  Ursache: Die Umdefinierung von `\@footnotetext` erfolgte leider nicht
  *long*.  
  Lösung: Die einfachste Lösung bestand darin `\endgraf` statt `\par` oder
  Leerzeile zu verwenden, weil dabei ein Absatz ausgeführt wird, ohne dass
  der Absatztest für das Argument, die erkennt.  
  Hack: Sollte die Lösung aus irgendwelchen Gründen nicht in Frage kommen,
  konnte mit
  ```latex
  \makeatletter
  \renewcommand{\@footnotetext}[1]{\scr@saved@footnotetext{#1}\csname FN@mf@prepare\endcsname}
  \makeatother
  ```
  in der Präambel die Ursache des
  Problems beseitigt werden. Nachteil dieser Methode ist, dass das Dokument
  damit von einer internen Definition und internen Macros abhängig wurde und
  damit nicht zukunftssicher ist!  
  Danke für die Problemanalyse und Meldung an: J. S.

</Details>

<Details title="3.01" open>

* Das Paket `tocbasic` enthält seit Version 1.0 die interne Anweisung
  `\@addtotoclist`. Leider definiert das Paket [`flowfram`](https://www.ctan.org/pkg/flowfram) eine
  gleichlautende Anweisung. Dadurch konnte das Paket [`flowfram`](https://www.ctan.org/pkg/flowfram)
  nicht zusammen mit `tocbasic` oder einer KOMA-Script-Klasse verwendet
  werden. Deshalb wurde `\@addtotoclist` in `\scr@addtotoclist` umbenannt.  
  Ursache: Ich hatte bei der Implementierung von `tocbasic` versäumt interne
    Anweisungen darauf abzuklopfen, dass sie nicht bereits von anderen Paketen
    definiert werden.
* Verzeichnisse im Zweispalten-Modus führten zu einer Fehlermeldung.  
  Ursache: Ein Tippfehler im Paket `tocbasic`.
  Notlösung: `\newcommand*{\twocolumne}{\twocolumn}` in der Dokumentpräambel.
* `scrartcl` schaltete bei Verzeichnissen in den Einspalten-Modus (bei den
  anderen Klassen war das schon immer so und ist dort korrekt).
  Ursache: Verzeichnisse werden ab KOMA-Script 3 mit dem Paket `tocbasic`
  gesetzt. In Version 1.0 dieses Pakets ist die Unterbindung der Umschaltung
  nicht vorgesehen. Ab Version 3.01 wird hingegen das Umschalten auf
  einspaltigen Satz als neue Eigenschaft definiert und entsprechend von den
  KOMA-Script-Klassen genutzt. Außer dass damit das alte Verhalten bei
  `scrartcl` wieder vorhanden ist, erhält der Anwender damit sozusagen als
  kleine Entschädigung eine Wahlmöglichkeit.  
  Notlösung: `\begingroup\let\onecolumn\relax\let\twocolumn\relax\tableofcontents\endgroup` (für andere Verzeichnisse entsprechend).
* Die Initialisierung von `\topsep`, `\itemsep` und `\leftmargin` fehlte in
  den Schriftgrößendateien, was beispielsweise zu Problemen mit [`amsthm`](https://www.ctan.org/pkg/amsthm) führt.  
  Notlösung: `\makeatletter\@listi\makeatother` nach dem Laden der Klasse
  einfügen.

</Details>

<Details title="3.00" open>

* Vermutlich alle Versionen von KOMA-Script erkannten bei nummerierten
  Verzeichnissen im Anhang nicht, dass diese nicht arabisch nummeriert werden
  und deshalb die Gliederungsnummern mit einem Punkt abschließen
  sollten. Dieser Fehler machte sich natürlich nur bemerkbar, wenn man außer
  Verzeichnissen keine weiteren nummerierten Kapitel oder Abschnitte im Anhang
  hat.  
  Lösung: Manuell per Option den Punkt einschalten.

</Details>

## Version 2.95 bis 2.98c

<Details title="2.98c" open>

* Es fehlte noch die Übersetzung einer kleinen Passage in der englischen
  Anleitung.
* Die Optionen `headsepline`, `noheadsepline`, `footsepline` und
  `nofootsepline` konnten nicht nach `\begin{document}` gesetzt werden.
  Notlösung: Diese Optionen vor `\begin{document}` setzen

</Details>

<Details title="2.98b" open>

* Es gab dummerweise noch immer einen Fehler beim Setzen der
  Absenderergänzung. Konkret wurde diese nicht gesetzt, wenn `\firsthead`
  verwendet wird. 

</Details>

<Details title="2.98a" open>

* Die Option `twocolumn` in `\documentclass` schalteten auch die Option
  `twoside` auf denselben Wert.  
  Lösung: Nach `twocolumn=true` oder `twocolumn=false` die Option `twoside`
    mit dem gewünschten Wert in einer eigenen `\KOMAoptions-`Anweisung setzen
    oder die Option `twocolumn` ausschließlich per `\KOMAoptions` setzen.  
  Hintergrund: Die Optionen `twocolumn` und `twoside` sind eigentlich
  Satzspiegeloptionen und daher Optionen des Pakets `typearea`. Einige wenige
  Wrapper-Klassen-Autoren wollten aber unbedingt, dass sie die Option auch an
  die Klasse schicken können. Das steht zwar im Widerspruch zu meinen eigenen
  Überzeugungen, aber ich hatte mich mal wieder breit schlagen lassen. Dabei
  hatte ich zunächst implementiert, dass die KOMA-Script-Klassen die Option
  `twoside` an `typearea` weiterreichen. Danach habe ich diese Funktion für
  die Option `twocolumn` kopiert und dabei vergessen ein `twoside` in
  `twocolumn` zu ändern. Deshalb setzten nun die KOMA-Script-Klassen bei
  Angabe der Option `twocolumn` dessen Wert für das Paket `typearea` als Wert
  für `twoside`. Der Bug war damit aus zwei Gründen besonders ärgerlich: Zum
  einen war es ein Anfängerfehler. Zum anderen hätte es ihn nicht gegeben,
  wenn ich mich nicht mal wieder gegen meinen Überzeugungen hätte breit
  schlagen lassen.
* Bei Verwendung der Option `fromalign=center` wurde der Inhalt der Variablen
  `location` von `scrlttr2` nicht ausgegeben. Eigentlich entspricht dieses
  Verhalten dem, was in der Implementierungsdoku bereits in früheren
  Versionen angegeben war. Aus der Anwenderanleitung ging das jedoch so
  nicht hervor. Daher wurde die Verhaltenänderung als Bug deklariert und
  behoben.

</Details>

<Details title="2.98" open>

* Es gab noch ein paar kleinere Fehler in der englischen Anleitung, wie
  beispielsweise zwei nicht aufgelöste Referenzen.
* In der Geschäftszeile wurden nicht nur die Bezeichner, sondern auch die
  Werte in `\sffamily\scriptsize` gesetzt.  
  Lösung: `\setkomafont{refvalue}{}`
* Wenn ein Betreff gesetzt ist, führte `scrlttr2` eine `\show-`Anweisung aus,
  die von einigen LaTeX-Shells als Fehler interpretiert werden.  
  Notlösung: Im interaktiven Modus einmal Taste Return/Enter drücken oder
  `\renewcommand*{\show}[1]{}` in die Präambel einfügen.
* Wenn man nicht `\setkomafont{refvalue}{}` verwendet, stimmte das vertikal
  spacing beim Datum nicht.  
  Notlösung: Die genannte Anweisung verwenden.

</Details>

<Details title="2.97d" open>

* Es gab noch ein paar kleinere Fehler in der englischen Anleitung.
* Leerzeichnen in `\KOMAoptions` waren
  [signifikant](https://sourceforge.net/p/koma-script/wiki-de/HowTo_AvoidSpaces/).
  Da in der Doku nicht explizit steht, dass das nicht der Fall ist, war das
  zwar kein Bug, es wurde aber dennoch behoben.

</Details>

<Details title="2.97c" open>

* Es gibt eine brauchbare englische Anleitung.
* `locfield=narrow` verhielt sich wie `locfield=wide` und umgekehrt.
* Bei Briefen lieferte `\flushbottom` teilweise unerwartete Ergebnisse.  
  Lösung: Unmittelbar vor der Ende des Briefes `\raggedbottom` einfügen.
* Unter ungünstigen Umständen führte die Verwendung des [`color`](https://www.ctan.org/pkg/color)- 
  oder [`xcolor`](https://www.ctan.org/pkg/xcolor)-Pakets zu unerwünschten Seitenumbrüchen
  beispielsweise zwischen aufeinanderfolgenden Überschriften.  
  Lösung: `\setkomafont{disposition}{\normalcolor\nobreak\sffamily\bfseries}`
  in der Präambel einfügen.

</Details>

<Details title="2.97b" open>

* Die Verwendung der Option `chapterprefix` führte bei `\chapter` zu einer
  Fehlermeldung.  
  Notlösung: `\let\endgraph\endgraf` in die Präambel einfügen.
* Die Logik bei `\ifundefined` warf einen Fehler, falls man TeX an
  Stelle von e-TeX verwendet hat.  
  Lösung: Entsprechend der Empfehlung des LaTeX-Teams e-TeX für
  LaTeX verwenden.

</Details>

<Details title="2.97a" open>

* Ein dummer Fehler in einer neuen Funktion von `scrlfile` führte zu
  Fehlermeldungen, wenn das optionale Argument beim Laden von Paketen oder
  Klassen mit `\LoadClassWithOptions` oder `\RequiresPackageWithOptions`
  verwendet wurde.

</Details>

<Details title="2.97" open>

* Kompatibilitätsprobleme mit `ifvtex.sty` behoben.  
  Notlösung: Option `internalonly=/ifvtex`.
* Option `cleardoublestandard` führte zu einer fehlerhaften Info-Ausgabe und
  einem Fehler.  
  Empfehlung: Option weglassen, da Voreinstellung.
* Das Automatische Setzen des Punktes bei Gliederungnummern (falls in der
  Gliederung auch römische Zahlen oder Buchstaben vorkommen) funktionierte
  nicht.  
  Notlösung: Den Punkt per Option erzwingen.
* In der Anleitung fehlten alle Randnotizen auf geraden Seiten (bzw. lagen
  außerhalb der sichtbaren Seite).

</Details>

<Details title="2.96" open>

* Die Klassen kammen zwar bei der nicht dokumentierten Option `fontsize` mit
  gebrochenen Größen zurecht, typearea verursachte dann aber einen Fehler.
* Option `headsepline` aktivierte nicht automatisch `headinclude`.
* Option `footsepline` aktivierte nicht automatisch `footinclude`.
* Aliasnamen für Fontelemente führten bei `\usekomafont` zur Ausgabe des Namen
  des Elements statt zu dessen Verwendung. Dies führte zu einer
  Inkompatibilität mit Paketen/Klassen/Dokumenten, in denen
  `\usekomafont{sectioning}` verwendet wird, da `sectioning` neuerdings ein
  Alias für `disposition` ist. Man konnte den Fehler auch in der Anleitung
  sehen. Ein Workaround wäre `\usekomafont{sectioning}` durch
  `\usekomafont{disposition}` zu ersetzen.
* `typearea` sollte vor `xkeyval` geladen werden.
* Für Listen wurde dummerweise `\parskip` statt `\parsep` gesetzt.
* Kompatibilitätsprobleme mit `graphicx` bei Verwendung des Treibers `pdftex`
  behoben.

</Details>

<Details title="2.95b" open>

* Die Entscheidung von `\ifthispageodd` funktionierte häufig nicht korrekt.

</Details>

<Details title="2.95a" open>

* Im Zusammenhang mit dem [`color`](https://www.ctan.org/pkg/color)- oder [`xcolor`](https://www.ctan.org/pkg/xcolor)-Paket kam
  es eventuell zu einem [Problem bei der vertikalen Ausrichtung von
  `\caption`](http://groups.google.com/group/de.comp.text.tex/msg/57efa649e48c1a19).
* Die `addmargin`-Umgebung hinterließ einen falschen Wert in `\@listdepth`.
* Die vertikale Ausrichtung von einzeiligen und mehrzeiligen `\caption`s war
  nicht gleich.

</Details>

<Details title="2.95" open>

* Die deutsche Anleitung `scrguide.pdf` präsentierte sich mit einem falschen
  Datum.  
  Hintergrund: Das Datum wurde automatisch aus den `\ProvidesFile`-,
  `\ProvidesClass`-, `\ProvidesPackage`-Anweisungen aller an der Doku
  beteiligten Dateien erzeugt. In den KOMA-Script3-Quellen, auf denen die
  PDF-Datei (und nur diese) basiert, ist in der Anleitung zu `scrpage2` ein
  falscher Datumseintrag.
* `komascript.md5` auf CTAN enthielt eine falsche Prüfsummen für
  `scrguide.pdf` und `ChangeLog`.
* Listen (und alles, was darauf basiert) reagierten nur auf
  `parskip`-Optionen, nicht jedoch auf direkte Veränderungen von `\parskip`.
* Bei `scrbook` sorgte die Option `oneside` nicht gleichzeitig für
  `\raggedbottom`, sondern es wurde weiterhin mit `\flushbottom` gearbeitet.  
  Workaround: ggf. selbst `\raggedbottom` zusätzlich zur Klassenoption
  `oneside` verwenden.
* Faltmarken in `scrlttr2` waren vom Satzspiegel abhängig.

</Details>


