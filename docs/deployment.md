# Betrieb und Deployment

Einrichtung des Servers (Debian, Apache2, systemd) und der automatische Deploy
über GitHub Actions. Zurück zur [README](../README.md).

## Voraussetzungen auf dem Server (einmalig)

```bash
# Dedizierter Run-User (system, no-login)
sudo useradd -r -m -s /usr/sbin/nologin komascript

# Verzeichnis
sudo mkdir -p /opt/komascript
sudo chown komascript:komascript /opt/komascript

# Node 24 (via NodeSource)
curl -fsSL https://deb.nodesource.com/setup_24.x | sudo bash -
sudo apt install nodejs

# pnpm global (optional: der Deploy liefert node_modules fertig mit,
# der Server selbst führt kein pnpm aus)
sudo npm install -g pnpm

# systemd-Service registrieren
sudo cp deploy/systemd/komascript.service /etc/systemd/system/
sudo systemctl daemon-reload
sudo systemctl enable komascript.service

# Apache vHost
sudo cp deploy/apache2/komascript.de.conf \
  /etc/apache2/sites-available/komascript.musiker15.de.conf
sudo a2enmod proxy proxy_http proxy_wstunnel rewrite headers ssl http2 deflate expires
sudo a2ensite komascript.musiker15.de.conf
sudo apache2ctl configtest
sudo systemctl reload apache2

# Basic-Auth-Datei (Pre-Launch)
sudo htpasswd -c /etc/apache2/komascript.htpasswd <username>
sudo chown root:www-data /etc/apache2/komascript.htpasswd
sudo chmod 640 /etc/apache2/komascript.htpasswd
```

> SSL-Zertifikat: **eigenes Wildcard-Zertifikat** für `*.musiker15.de`, **kein**
> Let's Encrypt. Die Pfade sind im vHost konfiguriert
> (`/etc/apache2/ssl/fullchain.cer` + `_.musiker15.de_private_key.key`).

Die Konfigurationsdateien liegen unter [deploy/](../deploy/):
[Apache2-vHost](../deploy/apache2/komascript.de.conf) und
[systemd-Service](../deploy/systemd/komascript.service).

## GitHub-Actions

Setze folgende Secrets im Repo:

| Secret | Inhalt |
|---|---|
| `DEPLOY_HOST` | Server-IP oder Hostname |
| `DEPLOY_USER` | SSH-User (mit `sudo` für `chown` & `systemctl restart komascript`) |
| `DEPLOY_KEY` | Privater SSH-Key (key-only Auth, kein Passwort) |
| `DEPLOY_PORT` | (optional) SSH-Port, default 22 |

Push auf `main` triggert automatisch das Deployment. Der Workflow validiert
Content, baut Type-Check / Lint / Build / Search-Index, packt ein Release-
Tarball und führt auf dem Server einen atomischen Symlink-Swap aus mit
Fallback auf die letzten 5 Releases unter `/opt/komascript/releases/`.

Änderungen nur an Doku-Dateien (`README.md`, `AUTHORING.md`, `docs/`), an
`deploy/` oder an `.github/` lösen keinen Deploy aus, außer an
`deploy.yml` selbst. Die Liste steht unter `paths-ignore` in
[deploy.yml](../.github/workflows/deploy.yml).
