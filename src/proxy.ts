import createMiddleware from "next-intl/middleware";
import type { NextRequest } from "next/server";
import { SUPPORTED_LOCALES } from "@/types/config";

const intlMiddleware = createMiddleware({
  locales: SUPPORTED_LOCALES,
  defaultLocale: "de",
  localePrefix: "always",
  localeDetection: true,
  // NEXT_LOCALE Cookie absichern (Mozilla Observatory: Cookies-Check):
  // • secure   → nur über HTTPS übertragen
  // • sameSite → "lax" reicht für Locale-Persistenz
  // • maxAge   → 1 Jahr, gleicher Wert wie next-intl Default
  // (`httpOnly` unterstützt next-intl im Typ nicht — wir setzen es danach
  //  manuell über die Response, siehe unten.)
  localeCookie: {
    secure: true,
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 365,
    path: "/",
  },
});

export default function middleware(request: NextRequest) {
  const response = intlMiddleware(request);

  // next-intl setzt NEXT_LOCALE via response.cookies — wir patchen es danach
  // mit HttpOnly nach, damit das Cookie nicht via document.cookie lesbar ist
  // (XSS-Schutz). Der LocaleSwitcher liest das Cookie nicht client-seitig,
  // sondern triggert lediglich router.push() — daher ist HttpOnly sicher.
  const localeCookie = response.cookies.get("NEXT_LOCALE");
  if (localeCookie) {
    response.cookies.set("NEXT_LOCALE", localeCookie.value, {
      secure: true,
      httpOnly: true,
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 365,
      path: "/",
    });
  }
  return response;
}

export const config = {
  matcher: [
    // Alle Pfade außer:
    //   /api, /_next/static, /_next/image, /favicon, /robots, /sitemap, /manifest, /og-*
    "/((?!api|_next/static|_next/image|favicon\\.ico|favicon\\.svg|robots\\.txt|sitemap\\.xml|manifest\\.webmanifest|og-.*\\.png|.*\\..*$).*)",
  ],
};
