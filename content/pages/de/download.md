---
title: "Download"
description: "KOMA-Script ist Teil aller großen TeX-Distributionen. So bekommst Du es."
order: 3
---

## Schon installiert?

In den allermeisten Fällen ist KOMA-Script **bereits installiert**, sobald Du eine
LaTeX-Distribution verwendest. Prüfe es in der Konsole:

```bash
kpsewhich scrbook.cls
```

Wenn ein Pfad zurückgegeben wird, ist alles bereit.

## Über die Distribution

### TeX Live (Linux / macOS / Windows)

```bash
# Debian / Ubuntu
sudo apt install texlive-latex-extra

# Fedora
sudo dnf install texlive-koma-script

# Arch Linux
sudo pacman -S texlive-latexextra

# macOS (Homebrew)
brew install --cask mactex
```

### MiKTeX (Windows / macOS / Linux)

MiKTeX installiert benötigte Pakete automatisch beim ersten Aufruf. Alternativ kannst Du
den **MiKTeX Console** öffnen und `koma-script` über die Paketverwaltung installieren.

## Direkt von der Quelle

| Quelle | Link |
|---|---|
| **CTAN** | [ctan.org/pkg/koma-script](https://ctan.org/pkg/koma-script) |
| **SourceForge** | [sourceforge.net/projects/koma-script](https://sourceforge.net/projects/koma-script/files/) |
| **GitHub** | [github.com/komascript](https://github.com/komascript) |

<Callout type="warning">
Eine manuelle Installation aus den Quellen sollte nur erfolgen, wenn Du die *neueste*
Version benötigst und die Verzeichnisstruktur Deiner TeX-Distribution kennst.
</Callout>

## Updates

Halte Deine TeX-Distribution aktuell, um die neueste Version zu erhalten:

```bash
# TeX Live
tlmgr update koma-script

# MiKTeX
miktex update
```
