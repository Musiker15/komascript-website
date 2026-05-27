# Security Policy

## Reporting a Vulnerability

In order for the vulnerability reports to reach maintainers as soon as possible, the preferred way is to use the **"Report a vulnerability"** button under the "Security" tab of the associated GitHub project. This creates a private communication channel between the reporter and the maintainers.

If you are absolutely unable to or have strong reasons not to use GitHub's vulnerability reporting workflow, please reach out to the team by mailing to **info@msk-scripts.de**.

Please include the following in your report:

- Affected URL or component
- Type of issue (e.g. XSS, CSP-bypass, header-injection, dependency vulnerability)
- Step-by-step instructions to reproduce
- Impact assessment (what an attacker could do)
- Optional: suggested fix

We aim to acknowledge reports within **72 hours** and to ship a fix within **14 days** for high-severity issues. You will be credited in the release notes unless you prefer to remain anonymous.

---

## Scope

This policy covers the **website code** in this repository and the **production deployment** at `https://komascript.musiker15.de`. It does **not** cover:

- The LaTeX package **KOMA-Script** itself — that is maintained by Markus Kohm at <https://komascript.de> / <https://komascript.org>.
- Third-party services linked from the site (GitHub, Codeberg, SourceForge, CTAN, Mastodon).
- The Apache/Debian infrastructure layer beyond what's documented in `deploy/apache2/`.

---

## Current Security Posture

**Mozilla HTTP Observatory: Grade A+, Score 135 / 135** (last verified 2026-05-26).

### Transport Security

- **HTTPS-only** via wildcard certificate for `*.musiker15.de`.
- **HSTS** with `max-age=63072000; includeSubDomains; preload` (2 years).
- TLS 1.2+ only (Mozilla "intermediate" cipher profile).
- HTTP/2 enabled, OCSP stapling, SSL session tickets disabled.

### Content Security Policy

Nonce-based CSP with `'strict-dynamic'`, generated per request in [`src/proxy.ts`](src/proxy.ts):

```
default-src 'none';
script-src 'self' 'nonce-<random>' 'strict-dynamic';
style-src 'self' 'nonce-<random>';
style-src-elem 'self' 'nonce-<random>';
style-src-attr 'unsafe-inline';
img-src 'self' data: blob:;
font-src 'self' data:;
connect-src 'self';
media-src 'self';
manifest-src 'self';
worker-src 'self' blob:;
object-src 'none';
frame-src 'none';
frame-ancestors 'self';
base-uri 'self';
form-action 'self';
upgrade-insecure-requests
```

- **No `'unsafe-inline'`** in `script-src` — every `<script>` carries the per-request nonce.
- **`default-src 'none'`** — deny by default.
- **No external hosts** — `connect-src 'self'`, `img-src 'self' data: blob:`.
- `style-src-attr 'unsafe-inline'` is required by `next/image` and Radix-UI for inline style attributes; it is outside Mozilla Observatory's A+ scoring and considered low-risk for this content-only site.

### Other Security Headers

All set as single source of truth in [`next.config.ts`](next.config.ts):

| Header | Value |
|---|---|
| `X-Frame-Options` | `SAMEORIGIN` |
| `X-Content-Type-Options` | `nosniff` |
| `Referrer-Policy` | `strict-origin-when-cross-origin` (HTTP header **and** `<meta name="referrer">` synchronized — see [Mozilla Observatory Issue #278](https://github.com/mozilla/http-observatory/issues/278)) |
| `Permissions-Policy` | `camera=(), microphone=(), geolocation=(), interest-cohort=()` |
| `Cross-Origin-Opener-Policy` | `same-origin` |
| `Cross-Origin-Resource-Policy` | `same-origin` |
| `Cross-Origin-Embedder-Policy` | `credentialless` |
| `X-Permitted-Cross-Domain-Policies` | `none` |
| `X-DNS-Prefetch-Control` | `off` |
| `X-XSS-Protection` | **removed** (deprecated, replaced by CSP) — actively unset in the Apache vHost from both `mod_headers` tables |

The Apache vHost ([`deploy/apache2/komascript.de.conf`](deploy/apache2/komascript.de.conf)) sets **no security headers of its own**. It actively unsets the headers that `/etc/apache2/conf-enabled/security.conf` injects globally, to prevent duplicate values (the leading cause of the earlier Observatory `B−` rating).

### Cookies

- The only cookie set by the application is `NEXT_LOCALE`.
- Flags: `Secure`, `HttpOnly`, `SameSite=Lax`, `Path=/`, `Max-Age=1y`.
- No tracking cookies, no third-party cookies, no session identifiers in cookies.

### Privacy / Third-Party Communication

- **No analytics** (no Google Analytics, Plausible, Matomo, etc.).
- **No tracking pixels**, no embedded social-media widgets.
- **No CDN scripts** (jQuery, Bootstrap, FontAwesome via CDN, etc.).
- **No external fonts** — Inter and JetBrains Mono are bundled locally via `@fontsource-variable/*`.
- **No external images** — `next.config.ts` `remotePatterns` is empty.
- Strict CSP `connect-src 'self'` prevents accidental fetches to third parties.

The site initiates **zero** outbound requests to external hosts on page load. External hosts are only contacted when the user explicitly clicks a link (GitHub, Codeberg, Mastodon, SourceForge, CTAN, etc.) — which is expected behavior, not tracking.

### Pre-Launch Lockdown

Until the public launch, the entire site is protected by an Apache `<Location />`-level HTTP-Basic-Auth block (`/etc/apache2/komascript.htpasswd`). Apache returns `401 Unauthorized` **before** any HTML/JS/CSS/image leaves the server, so no content is exposed without valid credentials.

### Backend Hardening

- Next.js runs as a dedicated system user `komascript:komascript` (no shell, no login).
- Bound to **loopback only** (`127.0.0.1:3100`), reachable only through the Apache reverse proxy.
- systemd service ([`deploy/systemd/komascript.service`](deploy/systemd/komascript.service)) hardened with `NoNewPrivileges`, `ProtectSystem=strict`, `ProtectHome=true`, `PrivateTmp=true`, `SystemCallFilter`.
- Apache: SSH key-only auth, root-login disabled, Fail2Ban, unattended-upgrades.
- Deploy user has `sudo` only for `chown` and `systemctl restart komascript`.

### Supply Chain

- **Dependabot** with grouped updates (security-patches, next-react, radix-ui, mdx-toolchain, lint-tools).
- pnpm with `packageManager` pin in `package.json`.
- Frontmatter validation (`pnpm validate:content`) before every build.
- `pnpm audit` runs as part of CI.

### Content Sanitization

- All Markdown/MDX content is compiled **at build time**, never at runtime.
- No user-submitted content is accepted (no comments, no contact form processing, no search results from a user-controlled database).
- The client-side search index is read-only and built from validated Markdown.

---

## Known Trade-offs

- **All app routes are server-rendered on demand** (`ƒ Dynamic` in the Next.js build output) instead of statically generated. This is a deliberate trade-off — a nonce-based CSP requires a fresh nonce per request, which is incompatible with static generation. The performance impact is acceptable because the MDX content is pre-compiled (no filesystem round-trip per request).
- **`style-src-attr 'unsafe-inline'`** is allowed because `next/image` and Radix-UI emit style attributes (`color:transparent`, `position:relative`). The XSS risk via style attributes is significantly lower than via scripts, and Mozilla Observatory does not penalize it.

---

## Verification

You can re-verify the security posture at any time:

```bash
# Mozilla HTTP Observatory (grade + score + raw headers)
curl -sk -X POST -H "Content-Length: 0" \
  "https://observatory-api.mdn.mozilla.net/api/v2/scan?host=komascript.musiker15.de"

# Direct header inspection
curl -skI https://komascript.musiker15.de/de

# CSP evaluator
# https://csp-evaluator.withgoogle.com/  → paste the live URL

# SSL/TLS configuration
# https://www.ssllabs.com/ssltest/analyze.html?d=komascript.musiker15.de
```

Detailed audit log in [`CLAUDE.md` → §16 Sicherheit](CLAUDE.md) and the *Datenschutz-Audit* section.
