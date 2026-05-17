---
title: "Download"
description: "KOMA-Script is part of every major TeX distribution. Here's how to get it."
order: 3
---

## Already installed?

In most cases, KOMA-Script is **already installed** with your LaTeX distribution.
Check from a shell:

```bash
kpsewhich scrbook.cls
```

If a path is returned, you're ready to go.

## Via your distribution

### Vanilla TeX Live (Linux / macOS / Windows)

If you installed TeX Live directly from [tug.org](https://www.tug.org/texlive/)
(not via apt/dnf/brew), use **`tlmgr`** to install and update KOMA-Script:

```bash
tlmgr install koma-script    # install
tlmgr update koma-script     # update
```

### TeX Live from Linux / macOS package managers

If you installed TeX Live through your system's package manager, **stick with that
package manager** for updates — mixing `tlmgr` with the system package manager
rarely works reliably.

```bash
sudo apt install texlive-latex-extra && sudo apt upgrade   # Debian / Ubuntu
sudo dnf install texlive-koma-script && sudo dnf upgrade   # Fedora
sudo pacman -S texlive-latexextra && sudo pacman -Syu      # Arch Linux
brew install --cask mactex && brew upgrade --cask mactex   # macOS
```

### MiKTeX

MiKTeX installs missing packages on demand. Alternatively use the **MiKTeX Console**
to install and update `koma-script` via the package manager.

## From source

| Source | Link |
|---|---|
| **CTAN** | [ctan.org/pkg/koma-script](https://ctan.org/pkg/koma-script) |
| **SourceForge** | [sourceforge.net/projects/koma-script](https://sourceforge.net/projects/koma-script/files/) |
| **GitHub** | [github.com/komascript](https://github.com/komascript) |
