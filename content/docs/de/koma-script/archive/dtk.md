---
title: "Bisher erschienene DTK-Artikel mit Beteiligung des KOMA-Script-Autors"
description: "Chronologische Liste aller Artikel in „Die TeXnische Komödie“, an denen der KOMA-Script-Autor beteiligt war, jeweils mit Abstract oder Kurzbeschreibung."
order: 90
category: "archive"
---

In „[Die TeXnische
Komödie](https://www.dante.de/publikationen-medien-shop/#dtk)“ sind über die
Jahre einige Artikel mit direkter Beteiligung des KOMA-Script-Autors
erschienen. Nicht alle handeln von KOMA-Script, dennoch seien sie hier
vollständig aufgeführt.

Die nachfolgende Liste ist umgekehrt chronologisch sortiert. Der neuste
Artikel steht also jeweils oben. Da derzeit nicht auf einzelne Artikel auf dem
DANTE-Server verlinkt werden kann, sind stattdessen die jeweiligen Ausgaben
der TeXnischen Komödie verlinkt. Außerdem führt die Liste auch entweder den
Original-Abstract des jeweiligen Artikels oder – falls der Artikel nicht über
einen Abstract verfügt – eine Kurzbeschreibung auf.

### KOMA-Script für Paketautoren am Beispiel `tocbasic`

[4/2018](http://archiv.dante.de/DTK/PDF/komoedie_2018_4.pdf)  
KOMA-Script war nie nur als Werkzeug für Anwender, sondern immer auch als
Werkzeug für Entwickler gedacht. Ab KOMA-Script 3 wurde dies dadurch forciert,
dass viele integrale Bestandteile von KOMA-Script in eigene Pakete ausgelagert
wurden. In diesem Artikel soll am Beispiel von [`tocbasic`](https://www.ctan.org/pkg/tocbasic) und
[`nomencl`](https://www.ctan.org/pkg/nomencl) gezeigt werden, dass andere Entwickler von deren
Verwendung profitieren könnten.

*Nachsatz: In dem Artikel wird u.&nbsp;a. darauf hingewiesen, dass die
Maintainerschaft von [`nomencl`](https://www.ctan.org/pkg/nomencl) derzeit ungeklärt und deshalb Kontakt
zu einem Verantwortlichen schwierig ist. Das hat sich inzwischen
geändert. Seit Ende 2018 wird [`nomencl`](https://www.ctan.org/pkg/nomencl) auf github gepflegt und es
besteht auch ein Kontakt zum neuen Maintainer. Leider konnte der bisher nicht
von der generellen Verwendung von [`tocbasic`](https://www.ctan.org/pkg/tocbasic) überzeugt
werden. Stattdessen setzt er noch immer primär auf eigenen Code, mit dem er
das Rad immer wieder neu erfinden muss, was zu Problemen führte, die bei
[`tocbasic`](https://www.ctan.org/pkg/tocbasic) längst gelöst sind. Immerhin unterstützt er
[`tocbasic`](https://www.ctan.org/pkg/tocbasic) inzwischen, wenn es anderweitig geladen wird. Damit verschwanden
dann auch einige Probleme, die es mit früheren Versionen noch gab.*

### `fancyhdr` und `scrlayer` in trauter Zweisamkeit

[4/2018](http://archiv.dante.de/DTK/PDF/komoedie_2018_4.pdf)  
Auf CTAN gibt es diverse Pakete, mit denen man den Seitenstil eines Dokuments
verändern kann. Eines der beliebtesten dürfte dabei [`fancyhdr`](https://www.ctan.org/pkg/fancyhdr)
sein. Ein anderes, eher grundlegendes Paket ist das KOMA-Script-Paket [`scrlayer`](https://www.ctan.org/pkg/scrlayer).
Dieses Paket geht mit seinem Ebenenmodell weit über das hinaus,
was ein Seitenstilpaket üblicherweise leistet. Daher wurde schon bald nach
Veröffentlichung von [`scrlayer`](https://www.ctan.org/pkg/scrlayer) der Wunsch geäußert, die Ebenen von
[`scrlayer`](https://www.ctan.org/pkg/scrlayer) zusammen mit den Seitenstilen von [`fancyhdr`](https://www.ctan.org/pkg/fancyhdr)
verwenden zu können. Mit dem experimentellen Paket [`scrlayer-fancyhdr`](https://www.ctan.org/pkg/scrlayer-fancyhdr)
ist dies nun möglich.

### Spezielle Kapitel mit einer Präfixzeile

[4/2017](http://archiv.dante.de/DTK/PDF/komoedie_2017_4.pdf)  
Kürzlich wünschte ein LaTeX-Anwender Kapitelüberschriften mit Präfixzeile
ähnlich denen der Standard-Klasse `book`. Allerdings sollte in einem Teil
seines Dokuments dabei nicht »Kapitel« gefolgt von einer Nummer, sondern eine
andere Bezeichnung ohne Nummer verwendet werden. Auf TeX.StackExchange.com
wurden dafür zwei  mögliche Lösungen mit Hilfe von KOMA-Script gezeigt. Eine
davon will ich im Folgenden etwas verallgemeinern.

### Verzeichnisse ohne neue Umgebung

[3/2017](http://archiv.dante.de/DTK/PDF/komoedie_2017_3.pdf)  
Schon seit vielen Jahren bietet das KOMA-Script-Paket [`tocbasic`](https://www.ctan.org/pkg/tocbasic) die
Möglichkeit, neue Verzeichnisse anzulegen und zu verwalten. Seit Mitte 2006
wurde dies ab Version 3.06 mit `\DeclareNewTOC` sukzessive ausgebaut. Durch
eine kleine Änderung bei den KOMA-Script-Klassen ab Version 3.23 kann damit
auch die alte Frage nach getrennten Verzeichnissen für den Anhang neu
beantwortet werden.

### Firmenlogo mit `scrlayer`

[3/2015](http://archiv.dante.de/DTK/PDF/komoedie_2015_3.pdf)  
In diesem Beitrag wird gezeigt, wie man mit Hilfe von scrlayer, das seit
KOMA-Script 3.12 fester Bestandteil der Sammlung ist, abhängig von
verschiedenen Kriterien ein Firmenlogo auf den Seiten eines Dokuments
platzieren kann.

### Dokumentversion mit `scrlayer`

[3/2015](http://archiv.dante.de/DTK/PDF/komoedie_2015_3.pdf)  
Dieser Beitrag zeigt, wie man mit Hilfe von scrlayer, das seit KOMA-Script 3.12
fester Bestandteil der Sammlung ist, Versionsinformationen zu einem Dokument
platzieren kann.

### Farbige, kleine Kapitelmarken am Rand mit `scrlayer`

[3/2015](http://archiv.dante.de/DTK/PDF/komoedie_2015_3.pdf)  
Dieser Beitrag zeigt, wie man mit Hilfe von [`scrlayer`](https://www.ctan.org/pkg/scrlayer) , das seit
KOMA-Script 3.12 fester Bestandteil der Sammlung ist, abhängig von
verschiedenen Kriterien farbige, kleine Kapitelmarken am Rand der Seiten
anbringen kann.

### Kapitelübersicht mit Kurzbeschreibung

[3/2015](http://archiv.dante.de/DTK/PDF/komoedie_2015_3.pdf)  
Dieser Beitrag zeigt, wie man mit Hilfe der Anweisung `\addchaptertocentry`
als zusätzliches Verzeichnis eine Kapitelübersicht mit Kurzbeschreibung der
Kapitelinhalte erstellen kann. Diese Anweisung ist Bestandteil von KOMA-Script
seit Version 3.08.

### Kombination von Kapitelmarken mit einer Kapitelübersicht

[3/2015](http://archiv.dante.de/DTK/PDF/komoedie_2015_3.pdf)  
Dieser Beitrag ist in gewisser Weise eine Kombination der beiden
vorhergehenden, bringt also Kapitelmarken und Kapitelübersicht zusammen, wobei
in der Kapitelübersicht die Markierungen der Kapitelmarken übernommen werden
sollen.

### Anhangsverzeichnis

[3/2015](http://archiv.dante.de/DTK/PDF/komoedie_2015_3.pdf)  
Das Thema Anhangsverzeichnis verfolgt mich im Support seit Jahren oder sogar
schon seit Jahrzehnten. Dabei geht es darum, dass vor allem Studenten und
Doktoranden in ihrer Abschlussarbeit vor dem Anhang ein eigenes Verzeichnis
wünschen. In der Regel sollen dann die Überschriften des Anhangs nicht mehr im
Hauptinhaltsverzeichnis aufgeführt werden, sondern nur noch im
Anhangsverzeichnis. Dieses wiederum soll selbst noch einen Eintrag im
Inhaltsverzeichnis des Dokuments erhalten.

### Beschränkung von `chapteratlists=entry` auf Kapitel mit Verzeichniseinträgen

[3/2015](http://archiv.dante.de/DTK/PDF/komoedie_2015_3.pdf)  
Es geht darum, dass ein Anwender die Kapiteleinträge auch in den
Gleitumgebungsverzeichnissen – namentlich dem Abbildungsverzeichnis – haben
will. Allerdings soll dies auf die Kapiteleinträge von Kapiteln beschränkt
bleiben, die auch mindestens eine entsprechende Gleitumgebung – namentlich
eine Abbildung – haben. Die Frage ist dabei, ob man diese Anforderung manuell
oder sogar automatisch umsetzen kann.

### Was ist eigentlich: die Besonderheit des `@`-Zeichens in Befehlsnamen?

[3/2013](http://archiv.dante.de/DTK/PDF/komoedie_2013_3.pdf)  
Heutzutage finden viele Anwender ihre Informationen zu TeX und
LaTeX nicht mehr nur in Büchern, sondern irgendwo im Internet. Dabei
werden oftmals von den Helfern Begriffe und Dinge verwendet, bei denen das
Wissen um deren Bedeutung einfach vorausgesetzt wird. »Was ist eigentlich«
soll in lockerer Folge ein paar Erklärungen liefern. Dieses Mal geht es um das
Zeichen `@` innerhalb von Befehlsnamen.

Gerade bei Fragen, deren Lösung nicht in einer einfachen Verwendung der von
einer Klasse oder einem Paket bereitgestellten Möglichkeiten besteht, wird der
Leser von Internetforen häufig mit Befehlen konfrontiert, die ein `@` im Namen
haben. Dabei drängt sich der Verdacht auf, dass diese nicht wie andere Befehle
zu verwenden sind.

Dieser Artikel wird den Verdacht nur teilweise bestätigen.

### Briefpapier mit KOMA-Script nachbauen

[4/2012](http://archiv.dante.de/DTK/PDF/komoedie_2012_4.pdf)  
Seit meinem Artikel über moderne Briefe mit KOMA-Script in 2/2003 ist viel
Zeit vergangen. Die Briefklasse hat seither einige Verbesserungen und
Erweiterungen erfahren. Noch immer gehören Fragen zur Anpassung von `scrlttr2`
an ein bestimmtes, gewünschtes Brieflayout zu den häufigsten im Support. In
diesem Artikel soll deshalb am Beispiel des Briefpapiers der Washington State
University gezeigt werden, wie man einen solchen Briefbogen mit Hilfe von
KOMA-Script und scrlttr2 nachbauen kann.

### KOMA-Script wird volljährig

[3/2012](http://archiv.dante.de/DTK/PDF/komoedie_2012_3.pdf)  
1994 hat nicht nur LaTeX 2ε, sondern auch KOMA-Script das Licht der Welt
erblickt und wurde damit in diesem Jahr 18 Jahre alt. Im Unterschied zu
LaTeX 2ε, das bei seinem offiziellen Erscheinen bereits voll entwickelt
war, musste KOMA-Script in den vergangenen 18 Jahren erst noch
wachsen. Angefangen hat es als Baby, das nicht nur bei jeder Kleinigkeit
geschrien hat, sondern auch sein Umfeld und mich, seinen Vater, einige Nerven
kostete. Der will die Gelegenheit für einen kleinen Rückblick nutzen.

### Kopfzeilentricks mit `scrpage2`

[3/2012](http://archiv.dante.de/DTK/PDF/komoedie_2012_3.pdf)  
Für die 4. Auflage des KOMA-Script-Buchs habe ich eine spezielle Form der
Kopfzeile verwendet, bei der die Seitenzahl durch einen kleinen schwarzen
Balken vom Kolumnentitel getrennt wird. Dabei ragt die Seitenzahl weit in den
Randbereich. Realisiert wurde dies mit Hilfe des KOMA-Script-Pakets
`scrpage2`.

*Nachsatz: Das im Artitkel verwendete Paket `scrpage2` ist inzwischen nicht
nur überholt, es wurde aus KOMA-Script entfernt. Allerdings kann man in den
Beispielen `scrpage2` einfach durch [`scrlayer-scrpage`](https://www.ctan.org/pkg/scrlayer-scrpage) ersetzen.*

### Alles in einem – Texte und Tabellen mit LuaLaTeX

[2/2011](http://archiv.dante.de/DTK/PDF/komoedie_2011_2.pdf)  
Der Artikel zeigt am Beispiel einer per Brief zu versendenden Rechnung, wie
man mit Lua Werte in einer Tabelle erfasst, verschiedene Berechnungen
durchführt (beispielsweise die Umsatzsteuer ermittelt) und die Werte nebst den
berechneten Ergebnissen dann in einer LaTeX-Tabelle ausgibt. Der Vorteil
dieser Herangehensweise besteht in größerer Transparenz der Berechnungen und
dem Wegfall des fehleranfälligen Imports von Werten aus anderen Dateien,
namentlich aus Tabellenkalkulationen.

### Das »große scharfe S« wurde normiert

[3/2008](http://archiv.dante.de/DTK/PDF/komoedie_2008_3.pdf)  
Darüber, ob die Normierung des großen Scharf-S eine Bedeutung für dessen
Anwendung hat und wie die Einbindung mit LaTeX ggf. möglich ist.

### Inhalt einer KOMA-Script-Variable als Makro verarbeiten

[4/2007](http://archiv.dante.de/DTK/PDF/komoedie_2007_4.pdf)  
Manchmal wäre es praktisch, wenn man KOMA-Script Variablen direkt wie Makros
verarbeiten könnte. Insbesondere wäre es wünschenswert sie vollständig zu
expandieren. Der Artikel zeigt, wie das zu bewerkstelligen ist.

### Marginalien, da wo man sie haben will!

[3/2006](http://archiv.dante.de/DTK/PDF/komoedie_2006_3.pdf)  
In Mailinglisten und Newsgroups liest man immer von dem Problem, dass
Marginalien nicht an der Stelle stehen, an der man sie haben will oder dass
diese die Fußnoten so beeinflussen, dass diese auf einer anderen Seite landen,
oder dass Marginalien an Stellen benötigt werden, an denen sie nicht möglich
sind. Das Paket [`marginnote`](https://www.ctan.org/pkg/marginnote) schafft hier Abhilfe.

### Farbig hinterlegte Kopfzeilen mit KOMA-Script

[1/2006](http://archiv.dante.de/DTK/PDF/komoedie_2006_1.pdf)  
Nachdem im Juli 2005 in scrpage2 die Möglichkeit eingebaut wurde, die
horizontalen Linien im Kopf und Fuß der Seite einzufärben, war die logische
nächste Frage der Anwender: »Kann man auch den ganzen Kopf mit einer Farbe
hinterlegen?« Auch wenn der Autor dieses Artikels der Meinung ist, dass Linien
und Farben im Kopf diesem ein zu hohes Gewicht geben, so lautet die Anwort:
»Selbstverständlich!«

### Ausgleich des Bindeverlusts bei Büchern

[1/2004](http://archiv.dante.de/DTK/PDF/komoedie_2004_1.pdf)  
Bei der Bindung von Büchern geht immer ein Teil des inneren Randes in der
Bindung selbst sowie durch Falz und Biegung der Seiten verloren. Dieser
Verlust muss bei der Einrichtung der Seite berücksichtigt werden. Da viele
Druckereien heutzutage PDF-Dateien im Seitenformat des Buchblocks haben
wollen, bleibt diese Aufgabe häufig am Autor hängen. Wie für vieles im Leben
gibt es auch zur Lösung dieses Problems einfache und trickreiche
Lösungen. Dieser Artikel befasst sich mit beiden.

### »Jetzt lerne ich LaTeX2ε« Thomas Demmig

[1/2004](http://archiv.dante.de/DTK/PDF/komoedie_2004_1.pdf)  
Buchbesprechung

### Moderne Briefe mit KOMAScript

[2/2003](http://archiv.dante.de/DTK/PDF/komoedie_2003_2.pdf)  
Einige KOMA-Script-Anwender haben den falschen Eindruck gewonnen, der
Satzspiegel wäre bei Briefen gegenüber der Anschrift und dem übrigen Briefkopf
eingerückt. Dieser Eindruck entsteht insbesondere dann sehr leicht, wenn die
Anleitung zu KOMA-Script und insbesondere das Kapitel über scrlttr2 nicht
gründlich genug studiert wird. In Wirklichkeit sind Satzspiegel und Briefkopf
oder Anschrift einfach nur voneinander losgelöst. In diesem Artikel wird nun
nicht nur gezeigt, wie man diese wieder aneinander koppeln kann. Es soll dabei
auch ein sinnvoller Satzspiegel und ein modernes Layout entstehen.

### εXTeX - ein Überblick

[4/2003](http://archiv.dante.de/DTK/PDF/komoedie_2003_4.pdf)  
Im Dezember 2002 fand sich eine kleine Gruppe von Ideenträgern und Entwicklern
zusammen, um basierend auf NTS eine Weiterentwicklung von TeX auf den
Weg zu bringen. Am Anfang standen dabei einige kaum in Worte gefasste Ideen
und die Notwendigkeit, sich in vorhandene Quellen und TeX-Erweiterungen
einzuarbeiten. Bereits bevor die Gruppe vom 3. bis 5. Oktober 2003 erstmalig
zu einer Klausurtagung zusammenfand, stand nach vielen Experimenten und
Begutachtungen fest, dass hochgesteckte Ziele nur zu erreichen sind, wenn
große Teile von TeX und damit von NTS ersetzt werden. Daraus ergab sich der
Beschluss, auf Basis der Erfahrungen von NTS, ε-TeX, pdfTeX und Ω
(Omega) ein in großen Teilen neues Java-System zu entwickeln – εXTeX. Im
Folgenden wird der aktuelle Stand der Arbeiten und der Planung
wiedergegeben. Gleichzeitig bitten wir um zusätzliche Anregungen und
Diskussion des Konzepts.

### Satzspiegelkonstruktionen im Vergleich

[4/2002](http://archiv.dante.de/DTK/PDF/komoedie_2002_4.pdf)  
Die Konstruktion von Satzspiegeln, also die Bestimmung des Textbereichs auf
der Seite, ist eine Kunst, die seit dem Mittelalter von Profis gepflegt
wird. Im Laufe der Zeit wurden viele unterschiedliche Verfahren ersonnen,
verworfen, vergessen, aber auch weiterentwickelt und dokumentiert. Einige
dieser Verfahren sind mit Schlagworten belegt, die sie legendär machen. Obwohl
angeblich an jeder Legende auch etwas Wahres ist, birgt die Legendenbildung
auch Gefahren. Es gilt daher, Legende und Wirklichkeit miteinander zu
vergleichen.

*Nachsatz: Dieser Artikel wurde für den Anhang des
[KOMA-Script-Buchs](/de/faq#komascriptbuch) überarbeitet. Dort sind auch
die im Artikel noch enthaltenen Ungenauigkeiten korrigiert.*

### Briefköpfe mit KOMAScript

[2/2001](http://archiv.dante.de/DTK/PDF/komoedie_2001_2.pdf)  
Wer eben mal rasch einen Brief schreiben will, stört sich häufig daran, dass
er erst eine große Präambel zusammenbasteln oder seine Standardpräambel aus
einem alten Brief kopieren muss. Soll dann je nach Brief eine Angabe mehr oder
weniger im Briefkopf gesetzt werden, muss man zudem jedesmal von neuem
überlegen, wie dies oder jenes am besten erreicht wird. Der folgende Artikel
soll zeigen, dass es auch anders geht: mit einem Paket, das einmal alle
Varianten implementiert und durch Optionen auswählbar macht.

### Verkleinerte und vergrößerte Ausgaben mit LaTeX

[1/1999](http://archiv.dante.de/DTK/PDF/komoedie_1999_1.pdf)  
Eine immer wiederkehrende Frage zu LaTeX betrifft die korrekte
Vorgehensweise zur Vergrößerung oder Verkleinerung von Dokumenten. Da diese
Frage unterschiedlich motiviert sein kann und der Fragesteller sich oftmals
über seine Motive nicht vollständig klar ist, fällt es den Experten häufig
nicht leicht, die Frage in der Hinsicht korrekt zu beantworten, daß der
tatsächlich gewünschte Effekt erzielt wird.

Im Artikel werden deshalb ausgehend von einem häufig anzutreffenden
Fallbeispiel verschiedene Möglichkeiten vorgestellt und gegeneinander
abgewogen. Aufmerksame Leser der deutschsprachigen DE-TeX-/DANTE-FAQ wird es
nicht verwundern, zumindest eine der hier empfohlenen Lösungen auch dort in
Kurzform wiederzufinden.

### Es ist nicht alles Gold was glänzt

[2/1998](http://archiv.dante.de/DTK/PDF/komoedie_1998_2.pdf)  
Leserbrief mit Stellungnahme zum Editorial 4/1997

### KOMA-Script – Eine Alternative zu den Standardklassen?

[2/1996](http://archiv.dante.de/DTK/PDF/komoedie_1996_2.pdf)  
Wer Newsgroups wie de.comp.tex aufmerksam verfolgt, wird immer wieder Verweise
auf KOMA-Script finden. Selbst in der DE-TeX-/DANTE-FAQ sind inzwischen
mehrere Hinweise auf dieses Paket zu lesen. Auf den folgenden Seiten soll
daher die Entstehung, die Motivation, die Grundzüge und die Verwendung von
KOMA-Script eräutert werden. Um den Rahmen nicht zu sprengen, werden nur die
Klassen scrartcl, scrreprt und scrbook sowie das Satzspiegelpaket typearea
erläutert. Die Briefklasse scrlettr und die ergänzenden Pakete scrpage,
scrtime, scrdate, scraddr und die zu scrlettr gehörenden Beispieldokumente
phone und dir werden hier ausgeklammert. Für die Installation sei auf die
Anleitungen, die zum Paket gehören, verwiesen.
