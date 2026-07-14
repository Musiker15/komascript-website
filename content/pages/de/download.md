---
title: "Download"
description: "KOMA-Script ist Teil aller großen TeX-Distributionen und liegt auf CTAN. Gehostet wird das Projekt auf SourceForge."
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

### Vanilla TeX Live (Linux / macOS / Windows)

Wenn Du TeX Live direkt von [tug.org](https://www.tug.org/texlive/) installiert
hast (nicht über apt/dnf/brew), installierst und aktualisierst Du KOMA-Script mit
**`tlmgr`**:

```bash
# Installation
tlmgr install koma-script

# Aktualisierung
tlmgr update koma-script
```

### TeX Live aus Linux-/macOS-Paketmanagern

Wenn Du TeX Live über den Paketmanager Deines Systems installiert hast, **bleibe bei
diesem Paketmanager** für Updates. `tlmgr` und System-Paketmanager parallel zu nutzen
funktioniert nur selten zuverlässig.

```bash
# Debian / Ubuntu
sudo apt install texlive-latex-extra
sudo apt upgrade

# Fedora
sudo dnf install texlive-koma-script
sudo dnf upgrade

# Arch Linux
sudo pacman -S texlive-latexextra
sudo pacman -Syu

# macOS (Homebrew)
brew install --cask mactex
brew upgrade --cask mactex
```

### MiKTeX (Windows / macOS / Linux)

MiKTeX installiert benötigte Pakete automatisch beim ersten Aufruf. Alternativ kannst Du
die **MiKTeX Console** öffnen und `koma-script` über die Paketverwaltung installieren
und aktualisieren.

## Bezugsquellen

| Quelle | Link | Wofür |
|---|---|---|
| **CTAN** | [ctan.org/pkg/koma-script](https://ctan.org/pkg/koma-script) | Katalogeintrag der gesamten Sammlung. Die einzelnen Klassen und Pakete haben zusätzlich eigene CTAN-Einträge. |
| **SourceForge** | [sourceforge.net/p/koma-script](https://sourceforge.net/p/koma-script/) | Projekt-Hosting: Quellcode, Wiki, Issue-Tracker, Dateiarchiv |
| **Alte Versionen** | [sourceforge.net/projects/koma-script/files/KOMA-Script](https://sourceforge.net/projects/koma-script/files/KOMA-Script/) | Releases aus mehr als den letzten zehn Jahren, siehe [Alte Versionen](/de/docs/koma-script/releases) |

<Callout type="note">
KOMA-Script selbst wird auf **SourceForge** gehostet, nicht auf GitHub. Auf
[Codeberg](https://codeberg.org/komascript), [GitHub](https://github.com/komascript) und
[GitLab](https://gitlab.com/komascript) liegen die anderen Pakete des KOMA-Script-Autors,
also die [Freunde](/de/friends).
</Callout>

## Quellcode

Der Quellcode von KOMA-Script wird derzeit in einem öffentlichen
**Subversion-Repository auf SourceForge** verwaltet. Eine Umstellung auf Git ist in
Planung, im Zuge dessen ist auch ein Umzug nach Codeberg angedacht. Details dazu stehen
unter [Das Subversion-Repository](/de/docs/koma-script/code).

<Callout type="warning">
Eine manuelle Installation aus den Quellen sollte nur erfolgen, wenn Du die *neueste*
Version benötigst und die Verzeichnisstruktur Deiner TeX-Distribution kennst.
</Callout>

## Updates

Halte Deine TeX-Distribution aktuell, um die neueste Version zu erhalten, und nutze
dabei **konsistent eine Update-Methode**:

| Installiert über | Update-Befehl |
|---|---|
| Vanilla TeX Live | `tlmgr update koma-script` |
| apt / dnf / pacman / brew | dieser Paketmanager (z. B. `sudo apt upgrade`) |
| MiKTeX | `miktex update` oder MiKTeX Console |

<Callout type="warning">
**Nicht mischen!** `tlmgr` zusammen mit System-Paketmanagern (apt, dnf, brew, …)
auf derselben TeX-Live-Installation führt fast immer zu inkonsistenten
Versionen. Bleib bei der Methode, mit der Du installiert hast.
</Callout>
