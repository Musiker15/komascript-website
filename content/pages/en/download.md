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

### TeX Live

```bash
sudo apt install texlive-latex-extra      # Debian / Ubuntu
sudo dnf install texlive-koma-script      # Fedora
brew install --cask mactex                # macOS
```

### MiKTeX

MiKTeX installs missing packages on demand. Alternatively use the **MiKTeX Console**
to install `koma-script` via the package manager.

## From source

| Source | Link |
|---|---|
| **CTAN** | [ctan.org/pkg/koma-script](https://ctan.org/pkg/koma-script) |
| **SourceForge** | [sourceforge.net/projects/koma-script](https://sourceforge.net/projects/koma-script/files/) |
| **GitHub** | [github.com/komascript](https://github.com/komascript) |
