---
title: "Installation"
description: "So installierst Du KOMA-Script auf jedem System."
order: 1
category: "Getting Started"
updated: 2026-05-09
---

## Voraussetzungen

KOMA-Script setzt eine funktionierende LaTeX-Distribution voraus:

- **TeX Live** ≥ 2020 (Linux / macOS / Windows)
- **MiKTeX** ≥ 21 (Windows / macOS / Linux)
- **MacTeX** ≥ 2020 (macOS)

## TeX Live über Paketmanager

### Debian / Ubuntu

```bash
sudo apt update
sudo apt install texlive-latex-extra
```

KOMA-Script ist Teil des `texlive-latex-extra`-Pakets.

### Fedora

```bash
sudo dnf install texlive-koma-script
```

### Arch Linux

```bash
sudo pacman -S texlive-latexextra
```

<Callout type="warning">
Wenn Du TeX Live so installierst, halte es **ausschließlich über Deinen
Paketmanager** aktuell — `tlmgr` parallel zu nutzen führt zu inkonsistenten
Zuständen.
</Callout>

## Vanilla TeX Live (direkt von tug.org)

```bash
wget https://mirror.ctan.org/systems/texlive/tlnet/install-tl-unx.tar.gz
tar -xzf install-tl-unx.tar.gz
cd install-tl-*
sudo ./install-tl
```

Bei einer Vanilla-Installation nutzt Du `tlmgr` zur Paketverwaltung:

```bash
tlmgr install koma-script    # falls noch nicht enthalten
tlmgr update koma-script
```

## MiKTeX (Windows / macOS)

1. **MiKTeX** von [miktex.org](https://miktex.org) herunterladen und installieren.
2. Bei der ersten Verwendung wird KOMA-Script automatisch nachinstalliert.
3. Alternativ: **MiKTeX Console** → *Packages* → `koma-script` markieren → installieren.

## MacTeX

```bash
brew install --cask mactex
```

oder das Paket von [tug.org/mactex](https://www.tug.org/mactex/) herunterladen.

## Versions-Check

Nach der Installation kannst Du die Version prüfen:

```bash
kpsewhich scrbook.cls
```

Im Dokument:

```latex
\listfiles
\documentclass{scrbook}
\begin{document}
\end{document}
```

Nach dem Kompilieren listet die `.log`-Datei alle geladenen Pakete inklusive Versionen.

## Update

| Wie installiert? | Update-Befehl |
|---|---|
| Vanilla TeX Live | `tlmgr update koma-script` |
| apt / dnf / pacman | derselbe Paketmanager (z. B. `sudo apt upgrade`) |
| MacTeX über Homebrew | `brew upgrade --cask mactex` |
| MiKTeX | `miktex update` oder MiKTeX Console |

<Callout type="warning">
Halte Dich an **eine Update-Methode** für Deine TeX-Installation. `tlmgr`
zusammen mit System-Paketmanagern (apt, dnf, brew …) führt fast immer zu
inkonsistenten Zuständen.
</Callout>

<Callout type="tip">
Aktualisiere Deine TeX-Distribution mindestens einmal pro Jahr, um Sicherheits-Updates
und neue KOMA-Script-Features zu erhalten.
</Callout>
