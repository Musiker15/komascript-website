---
title: "Download"
description: "KOMA-Script is part of every major TeX distribution and available on CTAN. The project itself is hosted on SourceForge."
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
package manager** for updates. Mixing `tlmgr` with the system package manager
rarely works reliably.

```bash
sudo apt install texlive-latex-extra && sudo apt upgrade   # Debian / Ubuntu
sudo dnf install texlive-koma-script && sudo dnf upgrade   # Fedora
sudo pacman -S texlive-latexextra && sudo pacman -Syu      # Arch Linux
brew install --cask mactex && brew upgrade --cask mactex   # macOS
```

### MiKTeX (Windows / macOS / Linux)

MiKTeX installs missing packages on demand. Alternatively use the **MiKTeX Console**
to install and update `koma-script` via the package manager.

## Where to get it

| Source | Link | What for |
|---|---|---|
| **CTAN** | [ctan.org/pkg/koma-script](https://ctan.org/pkg/koma-script) | Catalogue entry for the whole collection. The individual classes and packages also have their own CTAN entries. |
| **SourceForge** | [sourceforge.net/p/koma-script](https://sourceforge.net/p/koma-script/) | Project hosting: source code, wiki, issue tracker, file archive |
| **Old versions** | [sourceforge.net/projects/koma-script/files/KOMA-Script](https://sourceforge.net/projects/koma-script/files/KOMA-Script/) | Releases covering more than the last ten years, see [Old Versions](/en/docs/koma-script/releases) |

<Callout type="note">
KOMA-Script itself is hosted on **SourceForge**, not on GitHub.
[Codeberg](https://codeberg.org/komascript), [GitHub](https://github.com/komascript) and
[GitLab](https://gitlab.com/komascript) host the other packages of the KOMA-Script author,
the so-called [friends](/en/friends).
</Callout>

## Source code

The source code of KOMA-Script is currently maintained in a public **Subversion
repository on SourceForge**. A switch to Git is planned, and a move to Codeberg is being
considered as part of that. Details are on [The Subversion
Repository](/en/docs/koma-script/code).

<Callout type="warning">
Install manually from source only if you need the *latest* version and know the
directory layout of your TeX distribution.
</Callout>

## Updates

Keep your TeX distribution up to date to get the latest version, and **stick to one
update method**:

| Installed via | Update command |
|---|---|
| Vanilla TeX Live | `tlmgr update koma-script` |
| apt / dnf / pacman / brew | that package manager (e.g. `sudo apt upgrade`) |
| MiKTeX | `miktex update` or MiKTeX Console |

<Callout type="warning">
**Do not mix!** Using `tlmgr` together with a system package manager (apt, dnf, brew, …)
on the same TeX Live installation almost always leads to inconsistent versions. Stay with
the method you installed with.
</Callout>
