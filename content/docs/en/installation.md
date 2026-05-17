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

## TeX Live via package manager

```bash
sudo apt install texlive-latex-extra      # Debian / Ubuntu
sudo dnf install texlive-koma-script      # Fedora
sudo pacman -S texlive-latexextra         # Arch Linux
```

<Callout type="warning">
If you install TeX Live this way, keep it updated **only** via the same package
manager — using `tlmgr` in parallel leads to inconsistent states.
</Callout>

## Vanilla TeX Live (from tug.org)

If you installed TeX Live directly from [tug.org](https://www.tug.org/texlive/),
use `tlmgr`:

```bash
tlmgr install koma-script
tlmgr update koma-script
```

## MiKTeX

Install MiKTeX from [miktex.org](https://miktex.org). KOMA-Script will be installed
automatically on first use, or manually via the MiKTeX Console.

## MacTeX

```bash
brew install --cask mactex
brew upgrade --cask mactex
```

## Verify

```bash
kpsewhich scrbook.cls
```

A path means: ready to go.

## Update

| Installed via | Update command |
|---|---|
| Vanilla TeX Live | `tlmgr update koma-script` |
| apt / dnf / pacman | the same package manager (e.g. `sudo apt upgrade`) |
| MacTeX via Homebrew | `brew upgrade --cask mactex` |
| MiKTeX | `miktex update` or the MiKTeX Console |

<Callout type="warning">
Stick with **one** update method per TeX installation. Mixing `tlmgr` with
system package managers (apt, dnf, brew …) almost always leads to inconsistent
package versions.
</Callout>

<Callout type="tip">
Update your TeX distribution at least once a year for security fixes and new features.
</Callout>
