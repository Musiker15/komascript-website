---
title: "defoldfonts"
description: "Definiert die aus dem LaTeX-Kern entfernten alten Schriftbefehle wie \\rm, \\sf oder \\bf als Notlösung wieder."
order: 30
category: "other"
tags: []
---

Das Paket definiert die alten Schriftbefehle `\rm`, `\sf`, `\tt`, `\bf`, `\it`
und `\sc`, die mit LaTeX 2ε veraltet sind und aus dem LaTeX-Kern
entfernt wurden. Es definiert außerdem den alten KOMA-Script-Schriftbefehl
`\sfb`. Dies kann nützlich sein, wenn Sie eine Klasse wie die
KOMA-Script-Klassen verwenden, die die alten Befehle standardmäßig nicht
definieren, und zudem einen alten BibTeX-Stil oder ein altes BibTeX-Paket
nutzen, das auf diese Befehle angewiesen ist. Es sollte jedoch eher als
Notlösung und nicht als endgültige Lösung betrachtet werden. Die empfohlene
echte Lösung wäre, die veralteten Befehle durch z. B. `\rmfamily`,
`\sffamily`, `\ttfamily`, `\bfseries`, `\itshape`, `\scshape` oder die
entsprechenden Textbefehle mit Argument zu ersetzen: `\textrm`, `\textsf`,
`\texttt`, `\textbf`, `\textit`, `\textsc`. Die neuen Befehle können zudem
kombiniert bzw. verschachtelt werden, um Schriftattribute zu kombinieren, was
die alten Befehle nicht unterstützen.

Das Paket wird auf [Codeberg](https://codeberg.org/komascript/defoldfonts)
gehostet. Weitere Informationen finden Sie im
[CTAN-Katalogeintrag](https://www.ctan.org/pkg/defoldfonts).
