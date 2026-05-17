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

## TeX Live

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

### Vollständige TeX Live aus dem Netz

```bash
wget https://mirror.ctan.org/systems/texlive/tlnet/install-tl-unx.tar.gz
tar -xzf install-tl-unx.tar.gz
cd install-tl-*
sudo ./install-tl
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

```bash
# TeX Live
sudo tlmgr update koma-script

# MiKTeX
miktex update
```

<Callout type="tip">
Aktualisiere Deine TeX-Distribution mindestens einmal pro Jahr, um Sicherheits-Updates
und neue KOMA-Script-Features zu erhalten.
</Callout>
