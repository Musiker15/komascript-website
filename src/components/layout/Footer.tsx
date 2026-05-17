import Link from "next/link";
import { Github, ExternalLink } from "lucide-react";
import { useTranslations } from "next-intl";
import { siteConfig } from "@/config/site.config";
import { footerConfig } from "@/config/footer.config";
import { cn, t, isExternal } from "@/lib/utils";
import type { Locale } from "@/types/config";

interface FooterProps {
  locale: Locale;
}

export function Footer({ locale }: FooterProps) {
  const tr = useTranslations("footer");
  const year = new Date().getFullYear();
  const copyright = footerConfig.copyright[locale].replace("{year}", String(year));

  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-muted)]/30">
      <div className="container-page py-12">
        <div className="grid gap-8 lg:grid-cols-5">
          {/* Brand-Spalte */}
          <div className="lg:col-span-1">
            <Link
              href={`/${locale}`}
              className="flex items-center gap-2 font-semibold tracking-tight"
            >
              <span className="text-base">{siteConfig.name}</span>
            </Link>
            <p className="mt-3 text-sm text-[var(--color-muted-foreground)]">
              {siteConfig.tagline[locale]}
            </p>
            {footerConfig.showVersion && (
              <p className="mt-4 text-xs text-[var(--color-muted-foreground)]">
                {tr("currentVersion")}{" "}
                <span className="font-mono font-medium text-[var(--color-foreground)]">
                  {siteConfig.currentVersion}
                </span>
              </p>
            )}
          </div>

          {/* Link-Spalten */}
          {footerConfig.columns.map((col, i) => (
            <div key={i}>
              <p className="mb-3 text-sm font-semibold">{t(col.title, locale)}</p>
              <ul className="space-y-2 text-sm">
                {col.links.map((link, j) => {
                  const label = t(link.label, locale);
                  const href = link.external || isExternal(link.href)
                    ? link.href
                    : `/${locale}${link.href}`;
                  return (
                    <li key={j}>
                      <Link
                        href={href}
                        target={link.external ? "_blank" : undefined}
                        rel={link.external ? "noopener noreferrer" : undefined}
                        className={cn(
                          "inline-flex items-center gap-1 text-[var(--color-muted-foreground)]",
                          "transition-colors hover:text-[var(--color-foreground)]",
                        )}
                      >
                        {label}
                        {link.external && <ExternalLink className="h-3 w-3 opacity-60" aria-hidden />}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom-Bar */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-[var(--color-border)] pt-6 sm:flex-row">
          <p className="text-xs text-[var(--color-muted-foreground)]">{copyright}</p>
          <div className="flex items-center gap-3">
            {footerConfig.social.map((s, i) => (
              <a
                key={i}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label ?? s.platform}
                className="text-[var(--color-muted-foreground)] transition-colors hover:text-[var(--color-foreground)]"
              >
                <SocialIcon platform={s.platform} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ platform }: { platform: string }) {
  if (platform === "github") return <Github className="h-4 w-4" />;
  if (platform === "mastodon") {
    return (
      <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden>
        <path d="M21.58 13.91c-.29 1.51-2.63 3.16-5.31 3.48-1.4.17-2.77.32-4.23.25-2.39-.11-4.27-.57-4.27-.57 0 .23.01.45.04.66.31 2.37 2.34 2.51 4.27 2.58 1.94.07 3.67-.48 3.67-.48l.08 1.76s-1.36.73-3.79.86c-1.34.07-3-.04-4.94-.55C2.91 20.78 2.19 16.31 2.08 11.78c-.03-1.34-.05-2.61-.05-3.67 0-4.64 3.03-6 3.03-6C6.58 1.4 9.21 1.05 11.95 1.03h.07c2.74.02 5.37.37 6.9 1.07 0 0 3.03 1.36 3.03 6 0 0 .04 3.42-.37 5.81zm-2.93-5.32V13h-2.07V7.85c0-1.08-.45-1.63-1.36-1.63-1 0-1.5.66-1.5 1.96v2.84h-2.06V8.18c0-1.3-.5-1.96-1.5-1.96-.92 0-1.36.55-1.36 1.63V13H6.71V8.59c0-1.08.27-1.94.82-2.58.57-.64 1.31-.97 2.24-.97 1.07 0 1.88.41 2.42 1.23l.51.86.51-.86c.54-.82 1.35-1.23 2.42-1.23.92 0 1.67.33 2.24.97.55.64.82 1.5.82 2.58z"/>
      </svg>
    );
  }
  if (platform === "sourceforge") {
    return (
      <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden>
        <path d="M16 4a4 4 0 1 1 0 8 4 4 0 0 1 0-8zm-8 8a4 4 0 1 1 0 8 4 4 0 0 1 0-8zm8-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm-8 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/>
      </svg>
    );
  }
  return null;
}
