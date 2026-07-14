---
title: "Kritik zum YouTube Channel: LaTeXTutorial"
description: "Eine ausführliche Kritik der ersten zehn Teile des YouTube-Channels LaTeXTutorial aus dem Jahr 2015, Teil für Teil kommentiert."
order: 100
category: "archive"
---

Fr, 2015-07-03 17:34

Auf YouTube gibt es einen video-technisch gut gemachten [Channel
LaTeXTutorial](https://www.youtube.com/channel/UCC-3dzj6dfbWwGzQzhkUS5A). Der
Kanal hat mit rund eineinhalbtausend Abonnenten und dreihundertausend Abrufen
in zwei Jahren für einen Kanal zu LaTeX auch einen recht hohen
Zuspruch. Leider bringt hier offenbar ein Einäugiger den Blinden LaTeX
bei. Anders gesagt: Es wäre für viele Anfänger und für sehr viele Helfer in
den Foren besser, wenn es dieses Tutorium so nicht gäbe. Es wäre ein großer
Gewinn, wenn der Autor das Tutorium inhaltlich ganz erheblich überarbeiten
würde. Dann könnte es wirklich nützlich sein. Auf den weiteren Seiten werde
ich auf einige Teile näher eingehen.

## Teil 1: Einführung

Fr, 2015-07-03 17:45

[Teil 1 des LaTeX-Tutorials](https://www.youtube.com/watch?v=hRwUjJYeHjw) ist
eine Einführung, in der in zweieinhalb Minuten erzählt und gezeigt wird, was
LaTeX ist und was für Ergebnisse man damit erzielen kann. Video-technisch ist
bereits dieser Teil sehr ansprechend gemacht. Viel gezeigt wird tatsächlich
nicht. Schon nach zehn Sekunden fällt auf, dass der Anwender offenbar nie
etwas über die Geschichte von LaTeX gelesen hat. Zwar weiß er, dass man das
Ding nicht wie den Gummibaumsaft ausspricht, der uns früher in den
Usenet-Gruppen und frühen Internet-Foren immer die lustigen fehlgeleiteten
Fragen brachte. »Latek« [ˈlaːtɛk] ist allerdings auch nicht viel besser. Die
korrekte Aussprache wäre [[ˈlaːtɛç] oder
[ˈlaːtɛχ]](https://upload.wikimedia.org/wikipedia/commons/f/f5/De-LaTeX.ogg),
wie man bereits korrekt mit einem kurzen Ausflug auf Wikimedia erfährt. Das
ständige »Latex« des Videokünstlers tat mir physisch so weh, dass ich Mühe
hatte, den ganzen Teil durchzustehen.

Bei Minute 1 fällt dann auf, dass im gezeigten Beispiel der zweite Absatz mit
Absatzabstand und Absatzeinzug ausgegeben wird. Da daneben scheinbar der
Quelltext angezeigt wird, wollte ich sehen, wie der Autor diese normalerweise
wenig sinnvolle kombinierte Absatzauszeichnung gemacht hat. Der Quelltext
führt allerdings gar nicht zu dem gezeigten Ergebnis, sondern enthält
tatsächlich den Text aus dem gezeigten Ergebnis ganz ohne Absatz. Ich finde es
nicht gut, wenn der gezeigte Quelltext nicht zum gezeigten Ergebnis
führt. Gerade wenn man einen ersten Eindruck verschaffen will, sollte man
einen falschen Eindruck vermeiden.

Kurz darauf wird dann hervorgehoben, »Latek« sei für »Arbeiten mit hohem[^1]
typographischen Ansprüchen« bestens geeignet. Die vorherige Absatzauszeichnung
mit Abstand und Einzug ist dafür dann auch eher kein optimales Beispiel und
das Leerzeichen vor dem Fragezeichen am Anfang der Seite auch nicht unbedingt.

[^1]: Der Fehler könnte glatt von mir sein.

## Teil 2: Programme und Installation

Fr, 2015-07-03 18:13

In [Teil 2 des LaTeX-Tutorials](https://www.youtube.com/watch?v=avZXLroHr28)
wird »MiKTe**X**« (ja, mit gesprochenem »x«) und
»Te**X**maker« (natürlich genauso gesprochen) für »Latek«
installiert. Zwar wird neben MiKTeX auch korrekt TeX Live im Bild
aufgeführt, aber behauptet, dass aufgrund der Verwendung von Windows natürlich
»MiKTeX« zu installieren ist. Ich kann ja verstehen, dass der Autor sich für
eine Distribution entscheiden musste und seine persönliche Entscheidung auf
MiKTeX gefallen ist. Dass er aber im gesprochenen Wort quasi so tut als wäre
das die einzige Möglichkeit, gefällt mir persönlich nicht. Ich könnte daraus
genauso schließen, dass er die Anwender anderer Betriebssystem gar nicht
will. Tue ich aber nicht. Er verwendet eben Windows und er verwendet
MiKTeX. Nichts dagegen.

Allerdings ändert er bei der Installation die Standardpfade für die
Installation, ohne zu erklären, warum er das tut. Überhaupt handelt er die
ganze Installation in knapp 30 Sekunden Schnelldurchlauf ab. Für erfahrene
Computeranwender sicher ausreichend, für ein Tutorial eher etwas wenig. Hier
wäre es gut gewesen bei MiKTeX auf die Möglichkeit der Installation für einen
Anwender oder für alle Anwender eines Rechners hinzuweisen und nach
Möglichkeit die Installation nur für den einzelnen Anwender zu empfehlen, da
deren Wartung für den wenig erfahrenen Anwender schlicht einfacher ist.

Achja: Er behauptet jetzt auch, dass wir »Te**X**« – wieder mit
»x« – richtig lernen wollen, macht also den typischen Fehler der Vermischung
von TeX und LaTeX, die so manchen Anfänger verwirrt. Darüber ein
Wort zu verlieren, statt die Verwirrung selbst zu provozieren, wäre sicher
eine gute Idee gewesen.

Nicht zu vergessen: Die Behauptung, dass LyX für Leute geeignet wäre, die gar
kein LaTeX lernen wollen, steht dem entgegen, was die LyX-Autoren selbst
erklären.

Warum man TeXmaker von Chip runterladen soll, statt von der
[TeXmaker-Homepage](http://www.xm1math.net/texmaker/) ist für mich auch nicht
ersichtlich. Oder kennt der Autor diese etwa nicht?

## Teil 3: Das erste Dokument

Fr, 2015-07-03 18:30 mit Ergänzung von 2020

In [Teil 3 des LaTeX Tutorials](https://www.youtube.com/watch?v=LmVfB0UkJo0)
geht es mit einem ersten »Latek[^latek]«-Dokument los. Die ersten zwei Minuten
sind bis auf die Aussprache von LaTeX nicht zu beanstanden. Dann wird jedoch
gleich einmal konstatiert, dass »wenn man ein deutsches Dokument schreibt, wie
wir jetzt, scrartcl« statt article verwendet wird. Hey! `scrartcl` ist keine
Frage von Deutsch, Slowenisch oder Englisch! Die Voreinstellung ist sogar
Englisch!  In Wirklichkeit ist der Punkt, dass `scrartcl` sehr viel flexibler
ist als die Standardklasse article! Leute, vielleicht könnt ihr euch das
endlich mal merken!

Der Autor weiß auch nicht, warum `scrartcl` »auf Deutsch jetzt genau so
heißt«. Das muss man tatsächlich nicht unbedingt wissen. Ich hätte es ihm aber
verraten können und in früheren Anleitungen stand es sogar noch drin, ist dann
aber irgendwann der Kürzung zum Opfer gefallen, weil ich niemanden mit der
Story langweilen wollte.

Außerdem behauptet der Autor, Option `a4paper` sei quasi der Standard. Da hat
er nicht ganz Unrecht. Bei `scrartcl` ist diese Option in der Tat Standard,
also Voreinstellung, weshalb er sie sich hätte sparen können.

An seiner Erklärung zu `\usepackage[utf8]{inputenc}` amüsiert sich der Autor
selbst. Ich auch. Wenn man nicht die technischen Grundlagen erklären will,
sondern sich mehr an der Anwenderpragmatik orientiert, ist die Erklärung aber
gar nicht so schlecht, so in etwa: »Macht das, es ist besser, wenn ihr
bestimmte Zeichen eingeben können wollt.« Hoffen wir, dass nicht gleich jemand
das dabei erwähnte »€« ausprobiert. Außerdem hätte er vielleicht nicht den
Bezug Windows → `utf8` herstellen sollen. Der ist auch nicht besser als der
vollkommen falsche Bezug Windows → `latin1` oder Windows → `ansinew`, den ich
bei anderen oft noch immer lesen muss. Überhaupt ist die Behauptung, das hinge
oft vom Betriebssystem ab, schlicht falsch. Es hängt vom Editor und dessen
Einstellung ab, von sonst nichts. Die Verwendung von `inputenc` selbst hängt
außerdem davon ab, ob man PDFLaTeX oder LuaLaTeX oder XeLaTeX verwendet. Bei
einer wirklich aktuellen LaTeX-Distribution kann man sich bei Verwendung von
UTF8 als Eingabecodierung das ganze `\usepackage[utf8]{inputenc}` übrigens
auch einfach sparen. Mit LaTeX 2018/04/01 wurde UTF8 nämlich die
Standardcodierung auch für PDFLaTeX. Wie man sieht, kann so ein Tutorium auch
von der Entwicklung überholt werden, so dass Teile davon überflüssig werden.

Die Erklärung zu `babel` ist auch nicht schlecht. Nur mit der Sortierung des
Inhaltsverzeichnisses hat das nichts zu tun.

Achja: Es heißt weder »inpu-tenc« noch »font-tenc«!

Bei mir dauert auch die Auswahl der korrekten Pakete nicht am allerlängsten,
weshalb sich LaTeX auch keineswegs nur für lange Dokumente eignet.

In Minute 7 werden dann `\section` als »Überkapitel« und `\subsection` als
»Unterkapitel« erklärt. Jetzt wird mir klar, warum die Leute immer glauben,
dass scrartcl Kapitel habe. Warum nicht einfach »Abschnitt« und
»Unterabschnitt«? Das wäre eine deutlich bessere Idee!

Bei allen Dingen, die der Autor nicht so recht erklären will, erwähnt er, das
sei quasi der Standard. Überhaupt verwendet er »quasi« quasi noch viel lieber
als ich.

Gut: Er erklärt, dass man für Referenzen und das Inhaltsverzeichnis mehr als
einen LaTeX-Lauf benötigt.

Alles in allem sind in diesem Teil von »Latek« und »Tex« abgesehen keine
echten Fehler. Er dürfte für Anfänger durchaus nützlich sein.

[^latek]: Darüber komme ich wohl über alle Teile nicht hinweg.

## Teil 4: Bilder einfügen & referenzieren

Fr, 2015-07-03 19:08 mit Ergänzung von 2020

In [Teil 4 des LaTeX Tutorials](https://www.youtube.com/watch?v=pgwRBpxcaYA)
geht es um die Einbindung von Bildern. Dabei wird gleich einmal behauptet,
dass man bei Verwendung von LaTeX (ja, jetzt spricht er es zum ersten Mal
richtig aus) nur eps-Bilder einbinden könne. Das stimmt zwar nicht, aber da er
dann ohnehin gleich zu PDFLaTeX weitergeht, soll es mir egal sein. Was mir
hingegen nicht egal ist, dass er in der allerersten Grafikeinbindung eine
Gleitumgebung: 
```latex
\begin{figure}[h]
\begin{center}
\includegraphics[width=4cm]{Latex.png}
\caption{Latexlogo}
\label{latex_logo}
\end{center}
\end{figure}
```
angibt. Da sind gleich zwei dicke Hunde drin:

* Gleitumgebungen nur mit der Gleitoption `h` sind wenig sinnvoll. Das sieht
  auch LaTeX selbst so und erweitert die Angabe um ein `t`. Es ist also auf
  den ersten Blick kein dramatischer Fehler. Allerdings führt er dazu, dass
  von den einunddreißigtausend Abrufern sich so mancher gefragt haben dürfte,
  warum das in seinem Dokument trotzdem nicht hier erscheint.
* Die `center-`Umgebung zentriert nicht nur, sondern fügt als
  heimliche Listenumgebung zusätzlichen vertikalen Abstand oben und unten
  ein. Das will und braucht man in Gleitumgebungen mit nur einer Abbildung
  nicht. Deshalb verwendet man statt der Umgebung besser die Anweisung
  `\centering`.
  
Mit den beiden Fehlern hat der Autor in meinen Augen bereits das Ziel
verfehlt. Außerdem hätte ich es besser gefunden, wenn er erst einmal eine
Abbildung ohne Gleitumgebung gezeigt hätte. So entsteht leicht der Eindruck,
`\includegraphics` könne nur in einer `figure-`Umgebung verwendet werden.

Als nächstes erklärt er dann, wie man Bilder aus Unterordnern einbindet. Dabei
fällt er wieder auf »Latek« zurück. Bevor er das macht, springt er aber darauf
zurück das kurz gezeigte Beispiel in das Beispieldokument einzufügen und dort
zu erklären, dass man auch noch das Paket `graphicx` laden muss. Und jetzt
erwähnt er doch noch den Gummibaumsaft. Es war fast zu erwarten.

Oh toll, er verschiebt die Gleitumgebung unmittelbar hinter die
Überschrift. Kleiner Hinweis am Rande: Das ist nicht empfehlenswert. Besser
ist, erst den Absatz mit dem Text zum Bild, dann das Bild.

Und jetzt dürft ihr raten, wie er das mit den Unterordnern macht: Er setzt die
Pfadangabe direkt im `\includegraphics-`Befehl. Ich bin gespannt, ob er noch
auf `\graphicspath` kommt … nö. Stattdessen erklärt er `\ref`. Gut, dass er
das erklärt. Leider erklärt er nicht, dass man beispielsweise keine Umlaute
für `\label` und `\ref` verwenden sollte, solange man noch kompatibel zu
(PDF)LaTeX-Versionen bleiben will, bei denen das von ihm verwendete
`\usepackage[utf8]{inputenc}` sinnvoll ist. Wer ein wirklich aktuelles LaTeX
einsetzt, hat das Problem aber in der Tat nicht mehr.

Für mich ist dieser Teil mit der verkorksten Gleitumgebung und der
unzureichenden Erklärung der Platzierungs-/Gleitoptionen ein erster Tiefpunkt
des Tutoriums. Schon hier lautet mein Fazit: Nicht nachmachen! Es werden Dinge
gezeigt, von denen abgeraten werden muss.

## Teil 5: Gliederung & Gliederungstiefe

Fr, 2015-07-03 20:13

In [Teil 5 des LaTeX Tutorials](https://www.youtube.com/watch?v=Hb7CYSsrL8s)
geht es um Gliederung und Gliederungstiefe, so der Autor. Dabei behauptet er,
die Befehle `\part`, `\chapter`, `\section` und `\subsection` wären bei LaTeX
»von Grund auf dabei«. Werter Herr, das ist mit Nichten so. Sämtliche
Gliederungsbefehle werden von den LaTeX-Klassen – in Ausnahmefällen auch von
LaTeX-Paketen – bereitgestellt und es hängt von diesen ab, welche es gibt. So
haben beispielsweise article und scrartcl kein `\chapter`.

Als nächstes versteigt er sich in die Behauptung, dass man ggf. mit 
```latex
\setcounter{secnumdepth}{5}
\setcounter{tocdepth}{5}
``` 
bei Bedarf auch noch `\subsubsection` bekommt und das die fünfte
Gliederungsebene wäre. Das ist schlicht Unfug! Über keinen der beiden Zähler
erhält man zusätzliche Gliederungsebenen. Der erste bestimmt hingegen, welche
der ohnehin verfügbaren Gliederungsebenen nummeriert werden sollen, der
zweite, welche ins Inhaltsverzeichnis eingetragen werden. Außerdem ist
`\subsubsection` weder für `secnumdepth` noch für `tocdepth` Ebene 5, sondern
Ebene 3.

Als nächstes erzählt er dann, dass insbesondere `\part` abhängig von der
Dokumentklasse verfügbar sei oder nicht und bei `article` oder `scrartcl` gäbe
es sie nicht. Das erklärt mir nun, warum so viele Anwender auf dem schwachen
Brett stehen, `article` und `scrartcl` hätten kein `\part`. Auch das ist
falsch!

Auch würde ich eine Abschlussarbeit eher nicht mit einem `\part{Hauptteil}`
und `\part{Anhang}` versehen. Das ist doch etwas übertriebene
Zergliederung. Kein vernünftiges Buch macht das so.

Jetzt erklärt er, die Standardgliederungstiefe von »Latek«[^latek2] sei 4. Auch das
ist Unsinn. Falls er hier wieder die genannten Zähler meint, bei der von ihm
verwendeten Klasse scrreprt ist der voreingestellte Wert beider Zähler 2.

Ah, jetzt widerspricht er sich ein wenig und zeigt, dass `\subsubsection` doch
auch ohne Zähleränderung verwendet werden kann, erklärt dann aber gleich
wieder, dass man dazu die Zähler ändern muss. Alles ein wenig konfus.

Auch für diesen Teil gilt daher: Teilweise falsch und insgesamt wenig
erhellend und zielführend. Besser die Finger davon lassen.

[^latek2]: Er lernt es wohl doch nicht mehr.

## Teil 6: Schriftsatzbefehle und Schriftgrößen

Fr, 2015-07-03 20:34

In [Teil 6 des LaTeX Tutorials](https://www.youtube.com/watch?v=qJeteYp0Irs)
wird es nun wirklich grausam! Schon in den ersten Sekunden erklärt der Autor,
dass `\\` ein sehr häufig verwendeter Befehl für den Zeilenumbruch und
`\\[0.5cm]` oder `\par` ein Absatz wäre. Als unbedarfter Anwender würde ich
daraus schließen, dass `\\[0.5cm]` und `\par` gleichbedeutend wären und für
Absätze eines von beiden benötigt wird. Das ist natürlich Unfug. `\\` sollte
man im Fließtext nahezu niemals verwenden und `\\[0.5cm]` oder mit irgend
einer anderen Länge im optionalen Argument schon gar nicht. Die Verwendung
kann zu allerlei Grausamkeiten führen, beispielsweise Verschlechterung des
Absatzumbruchs, wenn TeX die letzte Zeile eines Absatzes nicht mehr erkennt,
oder vertikaler Abstand am Anfang einer Seite. In manchen Umgebungen kann es
bei unbedachter Anwendung sogar zu Fehlermeldungen führen.

Achja: Genau genommen macht `\newpage` auch keinen Seitenumbruch – das wäre
`\pagebreak` –, sondern beendet die Seite. Mit dem nächsten Absatz wird dann
eine neue Seite begonnen. Aber das ist natürlich etwas haarspalterisch. Ohne
die Fehler bei `\\` hätte ich das wohl nicht einmal erwähnt. Allerdings fehlen
die wichtigeren Anweisungen `\clearpage` und `\cleardoublepage` an dieser
Stelle.

Noch immer in der ersten Minute wird es jetzt abschreckend. So wird erklärt,
dass man Wörter mit `\glqq{}Beispiel\grqq{}` in Anführungszeichen setzt. Davon
abgesehen, dass mit den Gruppenklammern nach `\glqq` ggf. das Kerning zwischen
Anführungszeichen und Buchstaben gestört wird, ist das natürlich unnötig
umständlich. Hier hätte er besser die `babel`-Eingabe mit ```"`Beispiel'"```
oder noch besser die Verwendung von Paket `csquotes` erklärt.

Den Unterschied von `\textit` und `\emph` hat der Autor entweder nicht
verstanden oder hält ihn für nicht erwähnenswert. Und statt geschweiften
Klammern spricht er leider von eckigen Klammern. Leider führt er auch
`\underline` als Schriftbefehl auf, ohne seine ggf. negativen Auswirkungen zu
erklären. Da macht er es sich wirklich etwas leicht.

Ganz schlimm wird es nun mit den Schriftgrößen. Die üblichen Befehle `\Huge`
etc. zeigt er – es war leider bereits zu befürchten – mit Argument statt als
Umschalter. Das ist in jeder Hinsicht falsch und irreführend. Zwar kommt noch
ein Satz, dass die Schriftgrößen gelten, bis sie mit einem anderen
Schriftgrößenbefehl wieder geändert werden. Aber das hätte man auch so zeigen
sollen und ist natürlich nur die halbe Wahrheit.

Auch diesen Teil des Tutorials sollten Anfänger besser nicht lesen. Danach
wundert mich kaum noch, dass wir in den Foren immer so grausamen Code mit eben
diesen Fehlern vorgesetzt bekommen.

## Teil 7: Kopf- und Fußzeilen

Fr, 2015-07-03 20:47

In [Teil 7 des LaTeX Tutoriums](https://www.youtube.com/watch?v=2qH-z1vcW-0)
geht es um Kopf- und Fußzeilen. Die ersten zwei Minuten sind ganz
OK. Letztlich wird der Unterschied zwischen der `scrreprt`-Voreinstellung mit
Seitenstil `plain` und Seitenstil `headings` gezeigt.

Dann geht er dazu über `scrreprt` mit `fancyhdr` zu kombinieren. Schon 2013
stand in der KOMA-Script-Anleitung, dass das nicht empfohlen werden kann. Aber
gut, damit kann man notfalls leben. Schade nur, dass er nur die ganz einfachen
Befehle aber nicht `\fanyhead` und `\fancyfoot` erklärt. Als nächstes tut er
aber leider so, als bräuchte man bereits für Linien im Kopf und einen
beliebigen Text dieses Paket. Das kann aber KOMA-Script auch ganz alleine.

Zwischendurch wird behauptet `\slshape` wäre sans-serif. Nein, ist es
nicht. Es ist verschrägte Schrift (*slanted*) und hat mit sans-serif nichts zu
tun.

Immerhin erklärt er `\leftmark` und `\rightmark` für die Voreinstellung von
`fancyhdr` durchaus korrekt.

Diesen Teil kann man durchaus stehen lassen, auch wenn ich mir wünschen würde,
dass mit KOMA-Script-Klassen `scrpage-scrlayer` oder – 2013 – zumindest das
inzwischen nicht mehr in KOMA-Script enthaltene `scrpage2` erklärt
würde. Vielleicht sehe ich das aber bei allen Vorteilen dieser Kombinationen
auch etwas eng.

## Teil 8: Literaturverzeichnis

Fr, 2015-07-03 20:57

In [Teil 8 des LaTeX Tutoriums](https://www.youtube.com/watch?v=4vM5j8-ULqI)
geht es um das Literaturverzeichnis. Dabei wird zunächst sehr schön auf die
Literaturverwaltung mit JabRef eingegangen. Das hat der Autor wirklich gut
gemacht. Deshalb will ich mich über das gesprochene »x« in BibTeX auch gar
nicht wieder aufregen.

Einen kleinen Fehler hat er aber gemacht. Er kombiniert UTF8-codierte
BibTeX-Dateien mit `bibtex`. BibTeX kann bekanntlich nur mit US-ASCII korrekt
umgehen und benötigt für Sonderzeichen für wirklich korrekte Verarbeitung
gruppierte TeX-Befehle. Dass ich das nicht so tragisch sehe liegt vor
allem daran, dass ich die Verwendung von BibTeX ohnehin für überholt
halte. Wer die JabRef-Erklärung mit `biblatex` und `biber` kombiniert, fährt
mit UTF8-codierten BibTeX-Dateien tatsächlich gut. Daher hat dieses Fehlerchen
hier sogar Vorteile. Schade nur, dass `biblatex` und `biber` nicht erklärt
werden.

## Teil 9: Aufzählungen und Tabellen

Fr, 2015-07-03 21:13

[Teil 9 des LaTeX Tutoriums](https://www.youtube.com/watch?v=NyvreXQUSxk)
beginnt mit Aufzählungen, also Listenumgebungen. Das macht der Autor richtig
gut und erklärt auch grob einige Möglichkeiten des Pakets `paralist`. Zwar
bevorzuge ich selbst inzwischen eher `enumitem`, aber das Paket `paralist` ist
sicher keine schlechte Idee. Auch die Unterschiede zwischen den
unterschiedlichen nummerierten und nicht nummerierten Listen und deren
Schachtelung werden sehr schön gezeigt.

Ab Minute 3 geht es dann mit Tabellen weiter. Warum er dafür keinen eigenen
Teil gemacht hat, ist mir ein Rätsel. Aber das ist seine Entscheidung.

Hier beginnt er im Gegensatz zu Abbildungen tatsächlich mit der Tabelle nicht
mit der Gleitumgebung. Das ist gut. Auch die Erklärung, was passiert, wenn man
eine Spalte mehr verwendet als deklariert ist, ist angemessen.

Witzig finde ich den Satz »und genauso sieht das Ergebnis dann auch aus«
nachdem er gezeigt hat wie man eine oder auch eine doppelte vertikale Linie in
einer Tabelle erzeugt. ;-) Leider erklärt er nicht, warum ich das witzig
finde: Es sieht schlecht aus. Man sollte vertikale Linien besser bleiben
lassen.

Die Erklärung zu horizontalen Linien ist bezüglich der Grundfähigkeiten von
LaTeX ebenfalls recht erschöpfend. `booktabs` wird leider nicht erwähnt.

Am Beispiel von zu langem Text in einer letzten Spalte erklärt er dann auch
noch den Sinn von `p-`Spalten.

Erst jetzt kommt er zur `table-`Umgebung. Das ist gut. Das gefällt mir. Dass
er allerdings mal wieder die Positionierungsoptionen verwendet, gefällt mir
nicht so. Das erweckt für mich den Eindruck, man solle diese immer
angeben. Eigentlich ist es eher so, dass man sie nur verwenden sollte, wenn
man die Default-Platzierung in Einzelfällen verändern muss. Auch wäre es schön
zu erwähnen, dass man bei Tabellen besser Überschriften verwendet und wie das
mit `\captionabove` oder Option `captions=tableheading` zu machen ist.

Das ist in meinen Augen bisher der beste Teil der Reihe. Zwar behandelt er
tatsächlich nur Grundlagen, die aber wirklich korrekt und nutzbringend. Damit
kann der Anfänger etwas anfangen und lernt auch nichts falsches. Streng
genommen ist die Kritik daran im Kuriositätenkabinett daher nicht angemessen.

## Teil 10: Vorlage Abschlussarbeit

Sa, 2015-07-04 12:00

In [Teil 10 des LaTeX Tutorials](https://www.youtube.com/watch?v=wIjaZ34yOhE)
geht es um eine Vorlage für Abschlussarbeiten. Wer mich kennt, weiß, [dass ich
bereits bei dem Wort »Vorlage« zusammengezuckt
bin](https://sourceforge.net/p/koma-script/wiki-de/HowTo_Template/). Aber
trotzdem habe ich mich bemüht, vorurteilsfrei an die Sache zu
gehen. Vielleicht, hat da ja mal jemand wirklich eine gute Vorlage erstellt?
Ich sage es gleich: Hat er leider nicht – im Gegenteil!

In Minute 3 erklärt der Vortragende, dass er mit
`\setlength{\parindent}{0pt}`[^parindent] die Einrückung am Anfang jedes
Absatzes entfernt hat, weil er die nicht haben will. Er erklärt an der Stelle
aber nicht, wie er Absätze stattdessen markiert. Nach [Teil
6](#teil-6-schriftsatzbefehle-und-schriftgrößen) schwant mir zwar
finsteres, aber halt, halt bemühen wir uns um Neutralität. Korrekt wäre
natürlich, dann Absatzabstand einzuschalten. Und korrekt würde man das bei der
verwendeten KOMA-Script-Klasse mit einem passenden Wert für Option `parskip`
oder notfalls Anweisung `\setparsizes` (die bitte möglichst unmittelbar nach
dem Laden der Klasse und ggf. nach der genannten Option) erledigen. Ein Sprung
dreißig Sekunden zurück offenbart aber, dass er Option `parskip` bisher nicht
verwendet. Ich verrate es gleich, er wird es auch bis zum Ende des Teils
nicht.

Der Sprung zurück offenbart noch mehr. So lädt er das Beispiel Paket
`graphicx` überflüssiger Weise gleich zwei Mal, was die Übersicht nicht gerade
erhöht und den Anwender leicht irre führen kann. Außerdem wird das bereits
Ende 2013 stark veraltete Paket `subfigure` geladen. Dessen offizieller
Nachfolger `subfig` wird gar nicht erwähnt und es wird auch nicht begründet,
warum stattdessen das veraltete Paket verwendet wird. Ich tippe auf:
Unkenntnis. Empfehlen würde ich übrigens das Paket `subcaption`, da dies im
Gegensatz zu den vorgenannten optimal mit `caption` zusammenarbeitet.

Außerdem bedient sich der Vortragende der leider weit verbreiteten Unsitte,
Links nicht einzurahmen und nicht zu unterstreichen, sondern einzufärben und
zwar schwarz. Leute, wenn ihr keine Links wollt, dann verwendet keine oder
nehmt Option `hidelinks` für `hyperref`. Wenn ihr keine Farbe im Ausdruck
wollt, dann verwendet umrandete oder unterstrichene Links. Beides verschwindet
im Ausdruck. Links, die ich erst mit der Maus suchen muss, sind grober Unfug!
Außerdem macht er den typischen Fehler, alle Optionen beim Laden von
`hyperref` anzugeben. Solange alle Strings aus US-ASCII-Zeichen bestehen, mag
das noch funktionieren. Sobald aber `hyperref` die Codierung der Strings für
irgendwelche Sonderzeichen wechseln muss, kann es in die Hose gehen. Deshalb
sei dringend empfohlen, min. die String-Optionen per `\hypersetup` zu
setzen. In einem Tutorium sollte man das am besten von Anfang an so machen!
Und natürlich wird auch wieder einmal `pdftex=true` gesetzt. Leute! `hyperref`
weiß selbst, dass es bei Verwendung von `pdflatex` das `pdftex`-Backend
verwenden muss. Das braucht man ihm nicht erst zu sagen und damit den Wechsel
zu einer anderen Engine zu erschweren.

Dass der Vortragende `color` statt `xcolor` verwendet, sei ihm
gegönnt. Persönlich würde ich zwar `xcolor` immer den Vorzug geben. Aber
darüber kann man streiten – solange man keine Farbe in Tabellen verwendet.

Ich weiß jetzt aber auch, warum neuerdings jedes zweite Beispiel in den Foren
Paket `transparent` lädt, obwohl ich selbst es noch nie benötigt habe und
ernste Zweifel habe, dass das wirklich so viele Leute benötigen. Der Herr
bezeichnet es als eines der Pakete, die man als Standard lädt. Nö, tut man
nicht! Lädt man nur, wenn man wirklich Bedarf dafür hat. Hat man eher
selten. Lässt man in Minimalbeispielen und den meisten Tutorien einfach weg.

Kopf und Fuß werden natürlich wie in [Teil
7](#teil-7-kopf--und-fußzeilen) trotz KOMA-Script-Klasse mit `fancyhdr`
statt mit `scrlayer-scrpage` gemacht. Interessant, dass die dort gewählten
Einstellungen den KOMA-Script-Einstellungen für doppelseitige Dokumente
weitgehend entsprechen – natürlich werden die Fonteinstellungen von
KOMA-Script und andere Optionen aber nicht beachtet und natürlich wird
`fancyhdr`-typisch der miserable automatische Versaliensatz mit
`\MakeUppercase` verwendet, den man ggf. zumindest mit `microtype` ein wenig
verbessern sollte, wenn man gar nicht die Finger davon lassen kann.

Sehr schön eigentlich, dass `\hyphenation` erklärt wird. Allerdings ist
`St-rei-fen-licht-scan-nern` auch nicht viel besser als das, was TeX
selbst liefert.

Und ich weiß jetzt endlich, woher dieses
`\newcommand{\RM}[1]{\MakeUppercase{\romannumeral #1}}` kommt, das ich so oft
sehe, dessen Verwendung ich aber praktisch nie sehe. Angeblich braucht man das
für römisch nummerierte Aufzählungen. Nö, braucht man nicht. Pakete wie
enumerate können das auch ohne diesen Befehl. Den braucht man ohnehin nur,
wenn man die Nummerierung von Hand macht, und dann kann man natürlich auch
gleich die römische Zahl schreiben – wenn man das nicht kann, sollte man
besser auf römische Zahlen verzichten.

Schön, dass er erklärt, dass er in einer Datei nur die Einstellungen und in
anderen (per `\include`) nur den Text hat. Schlecht aber, dass er
Einstellungen, die er gar nicht erst erklärt, nach `\begin{document}` vornimmt
und dabei auch noch das zu `\makeatletter` gehörende `\makeatother` vergisst.

Bei den Einstellungen wird dann auch noch ungeschickt mit `\pagenumbering` auf
große römische Seitenzahlen umgeschaltet. Ungeschickt nicht, weil er sich
dabei auf die neue Seite von `\include` verlässt, sondern weil er es an
falscher Stelle macht. Wenn man den Vorderteil anders als den Rest des
Dokuments nummeriert – obwohl die technische Notwendigkeit dafür durch die
Verwendung von LaTeX hinfällig ist und es daher für den Leser besser wäre, es
nicht zu tun – dann muss man das natürlich *vor der Titelseite* machen und
nicht erst danach. Wer das nicht glaubt, soll mal ein paar Bücher aus dem
Regel nehmen, bei denen tatsächlich noch römische Seitenzahlen im Vorderteil
verwendet werden. Erste Seite Schmutztitel, zweite Seite Frontispiz, dritte
Seite Titel, vierte Seite Verlagsangaben, fünfte Seite Vorwort, sechste Seite
frei, siebte Seite Inhaltsverzeichnis. Meist ist das Inhaltsverzeichnis die
erste Seite, die eine Seitenzahl trägt, aber eben nicht i oder I oder 1!
Natürlich können einzelne Seiten (mit ihren Rückseiten), beispielsweise das
Vorwort mit der nachfolgenden Vakatseite auch wegfallen. Die grundsätzliche
Tatsache, dass von der ersten Seite des Buchblocks (zunächst unsichtbar)
gezählt wird, bleibt aber.

Da der Vortragende empfiehlt, all diese Einstellungen einfach zu übernehmen,
dürfen wir uns nicht wundern, dass die Anfänger genau das tun und sich damit
ungewollt der berechtigten Kritik und leider auch dem weniger schönen Hohn
anderer aussetzen. Bedankt euch bei dem Lehrer, der so tut, als wüsste er es,
tatsächlich aber offensichtlich wenig Ahnung hat. 

Kurz darauf verlässt er sich dann übrigens nicht mehr auf die neue Seite von
`\include` und fügt selbst `\newpage` ein. Hm. Theoretisch könnten (ohne das
`\include`, das `\newpage` ohnehin überflüssig macht) danach dann noch
restliche Gleitumgebungen ausgegeben werden. Also sollte man in der Regel
besser `\clearpage` verwenden. In einem Tutorium könnte man das als
allgemeinen Grundsatz anwenden. Und eigentlich gehört vor ein `\pagestyle`
immer `\cleardoubleoddpage`, weil die neue Seite eine rechte Seite werden muss
und man davor ggf. eine Vakatseite benötigt. Anderenfalls kommt man beim Druck
in Teufels Küche! Auch in einem einseitigen Beispiel stört die Verwendung von
`\cleardoubleoddpage` nicht.

Wie schon in [Teil 8](#teil-8-literaturverzeichnis) wird natürlich für das
Literaturverzeichnis wieder `bibtex` verwendet. In meinen Augen ist das
überholt und eher von Nachteil. `biblatex` und `biber` ist nicht wirklich
schwerer zu bedienen. Ein mit `unsrtdin` vergleichbares Ergebnis ist damit
sehr leicht zu erreichen und besitzt dann sogar noch diverse Erweiterungen wie
die Möglichkeit der Verwendung von URLs für alle Datensätze.

Interessant wird es dann wieder in Minute 6. Dort zeigt sich am gezeigten
Inhaltsverzeichnis, dass der Vortragende seine als recht selbstverständlich
abgehandelte Änderungen an den `\part-`Einträgen ins Inhaltsverzeichnis selbst
gar nicht verwendet. Offenbar benutzt er `\part` nicht. Also hätte schon er
die Änderung wohl besser weggelassen.

Klar geworden ist mir dann auch noch, warum ich seit einiger Zeit wieder
verstärkt das Abbildungsverzeichnis am Ende des Dokument finde. Er macht das
so und zeigt das so. Nun, man kann das machen. Üblich ist aber meist,
Abbildungs- und Tabellenverzeichnis nach dem Inhaltsverzeichnis. Wenn man das
Abbildungsverzeichnis hinten macht, dann bitte auch das
Tabellenverzeichnis. Kürzlich habe ich da bei einem Anwender eine ungute
Verteilung gesehen. Aber nicht missverstehen: Den Fehler hat der Anwender
gemacht, nicht der Ersteller dieser Vorlage.

Anmerken möchte ich noch, dass die Verwendung der Auto-Vervollständigung in
einem Anfänger-Tutorium wie Magie anmutet. Leider wurde auch in den früheren
Teilen nicht so richtig erklärt, wie diese Magie funktioniert. Da die meist
ungeduldigen Anfänger vermutlich recht häufig mit diesem Teil beginnen, würde
mich wirklich interessieren, ob die das selbst herausfinden.

Dass der Vortragende mit diesem Teil den Grundlagenkurs beendet, finde ich
nach dem Studium der ersten zehn Teile eine sehr gute Idee. Bitte, bitte,
diese Vorlage nicht verwenden! Nein, die übrigen, im Tutorium nicht im Detail
behandelten Dateien habe ich mir nicht näher angeschaut. Das wollte ich mir
ersparen. Ich befürchte, dass insbesondere die Titeldatei ebenfalls nicht zu
empfehlen ist. Schon die Hauptdatei ist einfach nur schlecht und man sollte
sie ganz schnell in den Müll werfen – oder grundlegend überarbeiten. Lieber
"LaTeXTutorial" bitte, bitte lerne aus Deinen Fehlern und ersetze die ganzen
schlechten Videos durch gute. Du kannst Dich auch gerne vor der
Veröffentlichung eines Teils oder mit Deinem Beispiel oder Drehbuch an mich
wenden, um vorab Verbesserungsvorschläge zu erhalten.

Allerdings könnte es sein, dass ich mich zu früh gefreut habe. Denn es gibt
tatsächlich auch noch Teil 11 bis 16. Mal sehen, ob ich mir davon noch den
einen oder anderen anschaue, soweit ich dabei nicht selbst der Einäugige oder
Blinde wäre, wie das bei Tikz beispielsweise eindeutig der Fall ist.

[^parindent]: Siehe auch: [Wie der Absatzeinzug korrekt verhindert
    wird](https://sourceforge.net/p/koma-script/wiki-de/HowTo_NoParIndent/)
