import { describe, expect, it } from "vitest";
import { alternatePath, localizedPath, localizedPathTable, localizedSlug } from "./locale-paths";
import { contentExists, getAvailableLocales, getSwitcherFallbacks } from "./content";
import { SUPPORTED_LOCALES } from "@/types/config";

describe("alternatePath", () => {
  it("maps legal pages to their counterpart in both directions", () => {
    expect(alternatePath("/de/impressum", "en")).toBe("/imprint");
    expect(alternatePath("/en/imprint", "de")).toBe("/impressum");
    expect(alternatePath("/de/datenschutz", "en")).toBe("/privacy");
    expect(alternatePath("/en/privacy", "de")).toBe("/datenschutz");
  });

  it("keeps the slug when the target is the own language", () => {
    expect(alternatePath("/de/impressum", "de")).toBe("/impressum");
    expect(alternatePath("/en/privacy", "en")).toBe("/privacy");
  });

  it("leaves pages with the same slug in both languages alone", () => {
    expect(alternatePath("/de/docs/koma-script", "en")).toBe("/docs/koma-script");
    expect(alternatePath("/en/news/2026-01-01", "de")).toBe("/news/2026-01-01");
  });

  it("treats the start page as an empty rest", () => {
    expect(alternatePath("/de", "en")).toBe("");
    expect(localizedPath("/de", "en")).toBe("/en");
  });

  it("only strips a real locale segment", () => {
    expect(alternatePath("/denkmal", "en")).toBe("/denkmal");
    expect(alternatePath("/de/docs/impressum", "en")).toBe("/docs/impressum");
  });

  it("accepts locale-free paths, as the footer config has them", () => {
    expect(localizedPath("/impressum", "en")).toBe("/en/imprint");
    expect(localizedPath("/datenschutz", "de")).toBe("/de/datenschutz");
  });
});

describe("localizedSlug", () => {
  it("maps page slugs and leaves other sections alone", () => {
    expect(localizedSlug("pages", ["impressum"], "en")).toEqual(["imprint"]);
    expect(localizedSlug("pages", ["about"], "en")).toEqual(["about"]);
    expect(localizedSlug("docs", ["koma-script", "archive"], "en")).toEqual([
      "koma-script",
      "archive",
    ]);
  });
});

describe("localized path table", () => {
  it("names pages that really exist in every language", () => {
    for (const entry of localizedPathTable) {
      for (const locale of SUPPORTED_LOCALES) {
        const slug = entry[locale].slice(1).split("/");
        expect(contentExists("pages", locale, slug), `${locale}${entry[locale]}`).toBe(true);
      }
    }
  });
});

describe("getAvailableLocales", () => {
  it("pairs the legal pages across their different slugs", () => {
    expect(getAvailableLocales("pages", ["impressum"])).toEqual(["de", "en"]);
    expect(getAvailableLocales("pages", ["privacy"])).toEqual(["de", "en"]);
  });

  it("still reports German-only pages as German-only", () => {
    expect(getAvailableLocales("docs", ["koma-script", "archive", "dtk"])).toEqual(["de"]);
  });
});

describe("getSwitcherFallbacks", () => {
  const toEnglish = getSwitcherFallbacks("de").en ?? {};

  it("sends German-only archive pages to the archive overview", () => {
    expect(toEnglish["/docs/koma-script/archive/dtk"]).toBe("/docs/koma-script/archive");
  });

  it("sends German-only news posts to the news overview", () => {
    expect(toEnglish["/news/2008-10-13"]).toBe("/news");
  });

  it("lists no page that has a counterpart", () => {
    expect(toEnglish["/imprint"]).toBeUndefined();
    expect(toEnglish["/docs/koma-script"]).toBeUndefined();
    expect(toEnglish[""]).toBeUndefined();
  });

  it("only points at pages that exist in the target language", () => {
    for (const fallback of Object.values(toEnglish)) {
      if (fallback === "") continue;
      const [section, ...slug] = fallback.slice(1).split("/");
      const exists =
        slug.length === 0 ||
        contentExists(section as "docs" | "news" | "examples" | "friends", "en", slug);
      expect(exists, fallback).toBe(true);
    }
  });
});
