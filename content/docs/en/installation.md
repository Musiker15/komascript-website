---
title: "Installation"
description: "How to install KOMA-Script on any system."
order: 1
category: "Getting Started"
updated: 2026-05-09
---

## Prerequisites

KOMA-Script requires a working LaTeX distribution:

- **TeX Live** ≥ 2020 (Linux / macOS / Windows)
- **MiKTeX** ≥ 21 (Windows / macOS / Linux)
- **MacTeX** ≥ 2020 (macOS)

## TeX Live

```bash
sudo apt install texlive-latex-extra      # Debian / Ubuntu
sudo dnf install texlive-koma-script      # Fedora
sudo pacman -S texlive-latexextra         # Arch Linux
```

## MiKTeX

Install MiKTeX from [miktex.org](https://miktex.org). KOMA-Script will be installed
automatically on first use, or manually via the MiKTeX Console.

## MacTeX

```bash
brew install --cask mactex
```

## Verify

```bash
kpsewhich scrbook.cls
```

A path means: ready to go.

## Update

```bash
sudo tlmgr update koma-script    # TeX Live
miktex update                    # MiKTeX
```

<Callout type="tip">
Update your TeX distribution at least once a year for security fixes and new features.
</Callout>
