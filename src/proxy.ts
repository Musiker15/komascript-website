import createMiddleware from "next-intl/middleware";
import { SUPPORTED_LOCALES } from "@/types/config";

export default createMiddleware({
  locales: SUPPORTED_LOCALES,
  defaultLocale: "de",
  localePrefix: "always",
  localeDetection: true,
});

export const config = {
  matcher: [
    // Alle Pfade außer:
    //   /api, /_next/static, /_next/image, /favicon, /robots, /sitemap, /manifest, /og-*
    "/((?!api|_next/static|_next/image|favicon\\.ico|favicon\\.svg|robots\\.txt|sitemap\\.xml|manifest\\.webmanifest|og-.*\\.png|.*\\..*$).*)",
  ],
};
