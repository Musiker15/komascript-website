---
title: "Häufige Fragen und ihre Antworten"
description: "Antworten auf oft gestellte Fragen zu KOMA-Script: vollständige Minimalbeispiele, die Anleitung, das KOMA-Script-Buch, Voreinstellungen und Schriftgrößen."
order: 5
category: "faq"
---

Nachfolgend finden sich in loser Folge einige Fragen, die mir schon mehrfach
gestellt wurden. Viele davon stammen aus dem ehemaligen KOMA-Script
Documentation Project. Es sei darauf hingewiesen, dass Fragen dazu, wie man
bestimmte LaTeX-Probleme mit KOMA-Script lösen kann, in der Regel nicht
hier aufgeführt werden, sondern im [HowTo-Bereich des
Wiki](https://sourceforge.net/p/koma-script/wiki-de/HowTo/).

## Allgemeines

<Details title="Was hat es mit dem vollständigen Minimalbeispiel auf sich?">

<div id="MWE"></div>

Es gibt eine ganze Seite, die sich mit dem Thema [vollständiges
Minimalbeispiel](http://www.minimalbeispiel.de/) beschäftigt. Auch die
einschlägigen LaTeX-Foren bieten häufig ausführliche Informationen zur
Erstellung eines Minimalbeispiels. Beispielsweise ist [auf
TeXwelt](https://texwelt.de/wissen/fragen/569/) ausführlich erklärt, wie
selbst ein Anfänger aus einem Dokument mit einem realen Problem ein
vollständiges Minimalbeispiel erstellen kann. Bei aller Mühe, die der Anwender
hat, sei daran erinnert, dass so nicht nur die Möglichkeiten zu effektiver
Hilfe deutlich verbessert werden, Minimalbeispiele ersparen auch unnötige
Diskussionen und Ärger.

Ein vollständiges Minimalbeispiel zu einem LaTeX-Problem ist ein
möglichst kleines LaTeX-Dokument, bei dem das entsprechende Problem
auftritt bzw. mit dem das Problem verdeutlicht werden kann. Das Attribut
*vollständig* ist dabei wichtig. Eine Dokumentpräambel ist *kein*
vollständiges Beispiel. Eine Hauptdatei, die diverse andere Dateien oder
Grafiken lädt ist ohne diese anderen Dateien und Grafiken nicht
vollständig. Am besten werden Unterdateien direkt in die Hauptdatei
eingefügt. Bei `\includegraphics`-Anweisungen empfiehlt sich die Verwendung
eines der Beispielbilder aus dem Paket [`mwe`](https://www.ctan.org/pkg/mwe). Auch eine Datei, an
der erst Änderungen vorgenommen werden müssen, damit man das Problem sieht,
sind *kein* vollständiges Beispiel für das Problem. Zur Vermeidung langer
Fülltexte können gerne Pakete wie [`blindtext`](https://www.ctan.org/pkg/blindtext) oder [`lipsum`](https://www.ctan.org/pkg/lipsum)
verwendet werden. Diese werden von allen LaTeX-Distributionen über deren
Paketmanager angeboten. Teilweise kann man Text auch durch
`\vspace`-Anweisungen ersetzen.

Obwohl der Name „vollständiges Minimalbeispiel“ eigentlich impliziert, das es
das kleinste LaTeX-Dokument für diesen Zweck ist, relativiere ich dies
bewusst. Das kleinste Dokument muss nicht unbedingt auch das beste sein. Auch
wird ein weniger versierter Anfänger eventuell bei optimaler Anstrengung nicht
unbedingt das kleinst mögliche Dokument finden, das dieses Problem zeigt. Er
sollte sich dennoch um *ein möglichst kleines LaTeX-Dokument* bemühen.

Mir ist wichtig, dass ich mit dem Minimalbeispiel arbeiten kann, ohne mir um
Dutzende unerheblicher Definitionen und Pakete Gedanken machen zu müssen. Ich
mag es auch, wenn mir jemand bei einer Frage, die scheinbar nicht an einem
Minimalbeispiel gezeigt werden kann, ein solches mitliefert. Ich kann dann
genau an diesem Beispiel meine eigenen Tests vornehmen und das Beispiel für
meine Lösungsvorschläge verwenden. An einem Minimalbeispiel kann ich oft auch
erkennen, wie fortgeschritten der Anwender ist, wie ausführlich ich also bei
Antworten sein sollte. Gerade Anfänger haben oft Probleme, für die eine Frage
dann nur ein Symptom zeigt. Mit einem Minimalbeispiel kann ich das eventuell
erkennen und so wesentlich bessere Hilfe leisten. Kein Minimalbeispiel,
bedeutet für mich, dass der Anwender auch nur eine minimale Antwort benötigt.

Im Endeffekt signalisiert mir ein Minimalbeispiel, dass eine Frage wichtig
ist, und ermöglicht mir gleichzeitig, meine best mögliche Antwort zu
geben. Ohne Minimalbeispiel lautet meine best mögliche Antwort eventuell nur
„verstehe ich nicht, kann ich so nicht beantworten.“ Das gilt ebenso, wenn
sich der Fragesteller erkennbar wenig Mühe mit dem Minimalbeispiel gegeben hat
oder in unübersichtlicher Weise mehrere Probleme schwer erkennbar in einem
Beispiel miteinander vermischt wurden. Nach Möglichkeit sollte jedes einzelne
Problem in einem einzelnen Minimalbeispiel (und möglichst einem eigenen
Beitrag) eingegrenzt werden. Nur, wenn sich dabei zeigt, dass Probleme
untrennbar zusammen gehören, also dass es sich um Teilaspekte eines größeren
Problems handelt, ist ein einziges Minimalbeispiel sinnvoll. Die Teilprobleme
und deren Abhängigkeiten sollten dann aber auch deutlich genannt werden.

</Details>

## Anleitungen

<Details title="Muss ich eigentlich die über 500 Seiten der KOMA-Script-Anleitung alle lesen?">

Nein, du kannst die Titelei, das Inhalts- und das Tabellenverzeichnis, den
Anhang, das Literaturverzeichnis und den Index weglassen. Das spart dir schon
einmal fast 100 Seiten. Was du von der Anleitung ansonsten liest, hängt davon
ab, wozu du KOMA-Script einsetzen willst, und welches LaTeX-Wissen du
bereits hast. Wenn du LaTeX-Anfänger bist, musst du sogar noch mehr
lesen. Denn die KOMA-Script-Anleitung ist keine LaTeX-Einführung. Wenn
du schon langjähriger LaTeX-Anwender bist, wirst du vieles schon kennen,
denn in der Anleitung sind auch die Features erklärt, die genau gleich in den
Standardklassen vorhanden sind. Trotzdem, es lohnt sich, sich einen Überblick
über die Möglichkeiten von KOMA-Script zu verschaffen. Bei Einzelfragen hilft
dann wieder der Index weiter.

Die Anleitung ist übrigens nicht deshalb so dick, weil die Autoren die
Anwender ärgern wollen. Die Anleitung ist deshalb so dick, weil KOMA-Script
sehr viel bietet. In den ersten paar Jahren gab es eine sehr viel dünnere
Anleitung (weniger als 100 Seiten). Darin waren aber nur die Unterschiede zu
den Standardklassen beschrieben. Die Beschreibungen waren auch so kurz
gehalten, dass fast nur langjährige LaTeX-Anwender sie verstehen
konnten.

Wer KOMA-Script nur als Ersatz für die Standardklassen verwenden will, ohne
die zusätzlichen Möglichkeiten zu nutzen, der benötigt eigentlich nur Tabelle
3.1. Alles andere ist dann Zusatzinformation. Wer allerdings Briefe mit
KOMA-Script schreiben will, muss zumindest Kapitel 4 komplett lesen.

</Details>

<Details title="Muss ich mir eigentlich die mehr als 500 Seiten selbst ausdrucken?">

Es ist genau genommen nicht empfehlenswert die frei KOMA-Script-Anleitung,
[`scrguide-de.pdf`](https://mirrors.ctan.org/macros/latex/contrib/koma-script/doc/scrguide-de.pdf),
selbst auszudrucken. Bei Druck- und Papierkosten von nur 5 Ct/Seite – die
realen Kosten liegen bei vielen Druckern höher – kommt man dabei schon ohne
das Binden auf über 25 € Druckkosten. Mit Bindung oder den Kosten für einen
Ordner landet man dann irgendwo jenseits des Preises der offiziellen
Buchfassung der Anleitung:

<div id="komascriptbuch"></div>

<Callout type="note">

Markus Kohm:  
**KOMA-Script**  
*Eine Sammlung von Klassen und Paketen für LaTeX2e*  
7., überarbeitete und erweiterte Auflage für KOMA-Script 3  
[Lehmanns Media](https://www.lob.de/), Berlin, [Edition
dante](https://www.dante.de/publikationen-medien-shop/#dante-edition), 728
Seiten, 2020  
ISBN:
[978-3-96543-097-6](https://www.lehmanns.de/shop/mathematik-informatik/51375541-9783965430976-koma-script)
(Printausgabe)  
ISBN:
[978-3-96543-103-4](https://www.lehmanns.de/shop/mathematik-informatik/51374682-9783965431034-koma-script)
(eBook)

</Callout>

Die eBook-Version wurde nur der Vollständigkeit halber aufgeführt. Die nützt
natürlich wenig, wenn man ein gedrucktes Exemplar haben will.

Dieses Buch ist ein vollständige Dokumentation von KOMA-Script 3.28. Alle
Änderungen gegenüber dieser Version sind mit Hilfe des Änderungsverzeichnisses
in der freien Anleitung,
[`scrguide-de.pdf`](https://mirrors.ctan.org/macros/latex/contrib/koma-script/doc/scrguide-de.pdf),
leicht zu ermitteln.

Wie man an der Seitenzahl erkennen kann, enthält das KOMA-Script-Buch aber
nicht nur die Teile, die auch in der freien KOMA-Script-Anleitung,
[`scrguide-de.pdf`](https://mirrors.ctan.org/macros/latex/contrib/koma-script/doc/scrguide-de.pdf),
zu finden sind. Darüber hinaus gibt es weiterreichende Informationen in Teil
II der Anleitung, sowie mehrere Kapitel im Anhang, die sich noch weitergehend
mit Grundlagen aber auch mit Anwendungsbeispielen von Kapitelmarken am Rand
bis hin zu einem professionellen Brieflayout und dem Design eigener Pakete
befassen.

Um die Beispiele nachzuvollziehen, muss man übrigens insbesondere die
komplexeren Beispiele nicht selbst abtippen. Es gibt sie hier zum
herunterladen.

Normalerweise können Mitglieder von DANTE e.V. das Buch auch [zu
Sonderkonditionen über den Verein
bestellen](https://www.dante.de/publikationen-medien-shop/#dante-edition-bestellen). Achten
Sie dabei auf die korrekte Auflage!

</Details>

<Details title="Kann man die Beispiele aus dem KOMA-Script Buch irgendwo herunterladen?">

Die [vollständigen Beispiele](#MWE) gibt es tatsächlich auf
[CTAN](https://www.ctan.org) und auch hier. Sortiert nach Auflagen:

* 3. Auflage: [CTAN](https://www.ctan.org/pkg/koma-script-examples-3),
  [hier](/files/KOMA-Script-3-Buch-Beispielcode.zip),
* 4. Auflage: [CTAN](https://www.ctan.org/pkg/koma-script-examples-4),
  [hier](/files/KOMA-Script-4-Buch-Beispielcode.zip),
* 5. Auflage: [CTAN](https://www.ctan.org/pkg/koma-script-examples-5),
  [hier](/files/KOMA-Script-5-Buch-Beispielcode.zip),
* 6. Auflage: [CTAN](https://www.ctan.org/pkg/koma-script-examples),
  [hier](/files/KOMA-Script-6-Buch-Beispielcode.zip),
* 7. Auflage: [hier](/files/KOMA-Script-7-Buch-Beispielcode.zip).

Allerdings sind die Beispiele in den Archiven praktisch ohne Anleitung, so
dass sie wirklich nur für Leser der Bücher sinnvoll sind.

Dass es die Beispiele der 7. Auflage nicht auf CTAN gibt, liegt daran, dass
sie sich meiner Meinung nach zu wenig von denen der 6. Auflage
unterscheiden.

</Details>

<Details title="Wann wird es eine neue Auflage des KOMA-Script Buches geben?">

Ob es überhaupt eine neue Auflage des [KOMA-Script-Buchs](#komascriptbuch) geben wird, ist in
erster Linie eine Entscheidung des Verlags und hängt natürlich sehr stark von
der Nachfrage ab. Verständlicherweise will der Verlag vor so einer
Entscheidung zunächst die aktuelle Auflage möglichst abverkauft haben. Bevor
der Verlag bei mir keine entsprechende Nachfrage signalisiert hat, kann ich
also nicht einmal sagen, ob es eine Neuauflage geben wird.

Falls es eine Neuauflage geben sollte, muss diese von mir dann erst erstellt
werden. Dieser entscheidet auch darüber, wann diese genau erscheinen
soll. Teilweise sind dafür externe Ereignisse relevant, die weder etwas mit
den Erscheinungszyklen von KOMA-Script-Releases noch mit der tatsächlichen
Fertigstellung der Druckvorlagen zu tun haben. Ebenso entscheidet der Verlag,
ob und wann er Neuerscheinungen ankündigt.

Anfragen an mich, ob und wann es eine Neuauflage geben wird, kann ich daher in
aller Regel nicht beantworten.

</Details>

<Details title="Warum erhalte ich bei Befehl … aus der Anleitung eine Fehlermeldung?">

Vermutlich hast du die Anweisung aus einer KOMA-Script-Anleitung, die neuer –
in seltenen Fällen auch älter – ist als die verwendete Klasse oder das
verwendete Paket. Du solltest in der Regel min. die Version der Klassen und
Pakete verwenden, die zu der verwendeten Anleitung gehört.

Die Anleitung wird normalerweise zusammen mit KOMA-Script installiert und ist
beispielsweise per `texdoc scrguide-de` auf der Befehlszeile erreichbar. Auch
die Suche nach `scrguide-de.pdf` über die Suchfunktion deines Betriebssystems
kann helfen, die zu deiner Version von KOMA-Script passende Anleitung zu
finden.

In der Regel lässt sich das Problem am einfachsten durch ein Update von
KOMA-Script lösen. Manchmal entsteht das Problem aber auch erst durch ein
Update, nämlich dann, wenn man anschließend die neue Anleitung verwendet, aber
im System noch eine alte KOMA-Script-Version existiert, die von LaTeX
vorrangig gefunden und verwendet wird.

In der log-Datei des Dokuments ist zu allen Paketen und Klassen die Version zu
finden. Noch einfacher wird es, wenn man – vorzugsweise vor `\documentclass` –
die Anweisung `\listfiles` einfügt. Dann wird am Ende des LaTeX-Laufs
eine Liste aller Dateien einschließlich der Versionsinformationen in die
log-Datei geschrieben.

</Details>

## Klassen und Pakete

<Details title="Warum sind die Voreinstellungen so gewählt?">

Es gibt immer wieder Anwender, die der Meinung sind, dass die Voreinstellungen
nicht den Benutzererwartungen entsprechen oder aus sonstigen Gründen nicht
optimal gewählt wurden. Manche dieser Einwürfe sind dabei durchaus gut
begründet.

KOMA-Script wurde, wie in der Einleitung zur Anleitung erwähnt ist, Anfang der
90er Jahre des vorigen Jahrhunderts aus dem LaTeX-2.09-Paket Script 2.0
entwickelt. Zwar hatte ich bereits zu Script 2.0 ein paar Kleinigkeiten
beigetragen, insgesamt handelte es sich dabei jedoch um ein Paket von Frank
Neukam, der auch alle Design- und Implementierungsentscheidungen traf. Ich
selbst traf 1993 die Entscheidung, KOMA-Script möglichst kompatibel zu Script
2.0 zu entwerfen. Das betraf insbesondere auch die Voreinstellungen.

Gleichzeitig musste KOMA-Script bezüglich des Funktionsumfangs erst noch
wachsen. 1994 hatte KOMA-Script einen Bruchteil der Möglichkeiten, die es
heute bietet. Einige Dinge wurden also erst im Laufe der Zeit möglich. Die
Voreinstellung richtete sich dann nach dem, was zuvor fest eingestellt war,
also nach dem Zustand vor Einführung der neuen Möglichkeit. Bei Dingen, die
zuvor nicht einmal als Festeinstellung vorhanden waren, habe ich mich an den
Benutzeranfragen aus dem Support, am Gesamtbild der Voreinstellungen und in
Ausnahmefällen auch an fremden Paketen orientiert.

Kompatibilität war mir immer wichtig. Soweit möglich sollte ein Dokument nach
Jahren mit der dann aktuellen Version von KOMA-Script noch genauso aussehen,
wie mit der Version, mit der es ursprünglich erstellt wurde. Bis Version 3.00
galt hier lediglich die Einschränkung, dass die Kompatibilität nicht die
Fehlerbeseitigung und Verbesserung behindern sollte.

Während mein Umfrage zur Kompatibilität eher gegen eine Abkehr von der
Kompatibilitätsregel sprechen, habe ich während des Wechsels von KOMA-Script
2.9 zur Quellcode-Basis von KOMA-Script 3.00 festgestellt, dass andere
Paketautoren selbst der Kompatibilität wenig Bedeutung beimessen. Mehrere
meiner älteren Dokumente wurden teils erheblich neu umbrochen, obwohl ich
versuchsweise nicht nur die Kompatibilitätseinstellung `version=first`,
sondern sogar eine alte KOMA-Script-Version verwendet habe. Damit nützt es
also in der Realität wenig, wenn KOMA-Script selbst Dokumente sehr kompatibel
umbrechen könnte. Man muss zu diesem Zweck ohnehin alle verwendeten Pakete
archivieren. In diesem Fall kann natürlich auch KOMA-Script eingeschlossen
werden.

Diese Erfahrung kann jedoch nicht bedeuten, dass nun alle Voreinstellungen auf
einen Schlag auf den Prüfstand gestellt und generell geändert werden. Einzelne
Voreinstellungen wurden aber bereits geändert (beispielsweise der
voreingestellte Seitenstil von Vakatseiten). Bei anderen gibt es Überlegungen
in diese Richtung.

Übrigens habe ich bereits in den 90er-Jahren des vorigen Jahrhunderts beim
Versuch, eine Voreinstellung zu ändern, Schiffbruch erlitten: Weil verschrägte
Schriften – in LaTeX `\slshape` – in der Typografie eher verpönt sind,
wollte ich die Kopfzeilenvoreinstellung in kursiv – in LaTeX `\itshape`
– ändern. Die Protestwelle war nach der Release so groß, dass ich die Änderung
bereits zur nächsten Release zurückgenommen habe – und damals gab es Releases
wesentlich häufiger als heute. Nach dieser Erfahrung überlege ich selbst bei
gut begründeten Änderungswünschen zweimal, ob ich diese umsetze.

Trotzdem: Wer einen wohlbegründeten Änderungsvorschlag hat, der kann den im
[Issue-Tracker](https://sourceforge.net/p/koma-script/tickets/) gerne als
Vorschlag unterbreiten. Nach Möglichkeit sollte man sich aber auch Gedanken
über mögliche Nebenwirkungen machen. Dazu gehört auch die Frage, ob der
Anwender einfach zur alten Voreinstellung zurückkehren kann. So würde ich
beispielsweise kaum die Größe oder Schrift einer einzelnen Überschriftenebene
ändern.

</Details>

<Details title="Macht es einen Unterschied, ob fontsize=… direkt bei \documentclass oder erst später per \KOMAoptions gesetzt wird?">

Das macht zweilerlei Hinsicht einen Unterschied. Zum einen werden
`size<Größe>.clo`-Dateien nur bei Verwendung in `\documentclass` geladen, da
KOMA-Script keine Kontrolle darüber hat, was genau diese aus fremden Quellen
stammenden Dateien enthalten und sie häufig zu einem späteren Zeitpunkg nicht
mehr fehlerfrei geladen werden können. Bei Verwendung von `\KOMAoptions` oder
`\KOMAoption` wird also auch in einigen Fällen eine Berechnung der
Schriftgrößeneinstellungen verwendet, in denen beim Setzen der
Grundschriftgröße über das optionale Argument von `\documentclass` eine
Einstellungsdatei verwendet wird.

Zum anderen passt eine Änderung der Grundschriftgröße nach dem Laden der
Klasse keineswegs alle Längen, die von der Klasse oder gar von zuvor geladenen
Paketen verwendet werden, an die neue Grundschriftgröße an. Das ist auch
technisch kaum möglich. Die Information ob eine Länge von der
Grundschriftgröße abhängt oder nicht, ist nicht einmal beim Setzen der Länge
eindeutig. Nach dem Setzen der Länge ist sie überhaupt nicht mehr
verfügbar. Daher sollte die eigentliche Grundschriftgröße des Dokument auch
bei KOMA-Script immer beim Laden der Klasse angegeben werden. Eine spätere
Änderung sollte sich wirklich nur auf Ausnahmefälle beschränken. In der
Anleitung wird beispielsweise der Fall eines (eher kurzen) Anhangs in anderer
Schriftgröße genannt.

</Details>
