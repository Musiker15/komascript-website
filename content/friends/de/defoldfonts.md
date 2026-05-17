---
title: "defoldfonts"
description: "Stellt die alten LaTeX-2.09-Schriftbefehle (\\rm, \\sf, \\tt, …) wieder bereit."
order: 11
tags: []
---

Das Paket definiert die alten Schriftbefehle `\rm`, `\sf`, `\tt`, `\bf`, `\it`
und `\sc`, die mit LaTeX 2ε veraltet sind und aus dem LaTeX-Kern entfernt
wurden. Es definiert außerdem den alten KOMA-Script-Schriftbefehl `\sfb`.

Dies kann nützlich sein, wenn eine Klasse wie die KOMA-Script-Klassen genutzt
wird, die die alten Befehle standardmäßig nicht definieren, und zudem ein
alter BibTeX-Stil oder ein altes BibTeX-Paket verwendet wird, das auf diese
Befehle angewiesen ist. Es sollte jedoch eher als Notlösung und nicht als
endgültige Lösung betrachtet werden. Die empfohlene Lösung ist, die veralteten
Befehle durch z. B. `\rmfamily`, `\sffamily`, `\ttfamily`, `\bfseries`,
`\itshape`, `\scshape` oder die entsprechenden Textbefehle mit Argument zu
ersetzen: `\textrm`, `\textsf`, `\texttt`, `\textbf`, `\textit`, `\textsc`.
Die neuen Befehle können zudem kombiniert bzw. verschachtelt werden, um
Schriftattribute zu kombinieren, was die alten Befehle nicht unterstützen.

Das Paket wird auf [Codeberg](https://codeberg.org/komascript/defoldfonts)
gehostet. Weitere Informationen finden sich im
[CTAN-Katalogeintrag](https://www.ctan.org/pkg/defoldfonts).
