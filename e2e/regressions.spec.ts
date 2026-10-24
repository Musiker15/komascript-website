import { expect, test, type Page } from "@playwright/test";

/**
 * Regression tests for defects that only show on the running site, none of
 * them visible in the source files: dead table-of-contents anchors, soft 404s,
 * a language switch that tore down the DOM, and CSP violations from overlays.
 */

// An archive page whose headings carry umlauts ("Präfixzeile",
// "Kapitelübersicht"). Before the fix 16 of its contents links had no target.
const DOC_WITH_UMLAUTS = "/de/docs/koma-script/archive/dtk";

/** Waits until the page stays at the same position for two measurements. */
async function scrollPosition(page: Page): Promise<number> {
  let last = -1;
  for (let i = 0; i < 40; i++) {
    const now = await page.evaluate(() => Math.round(window.scrollY));
    if (now === last) return now;
    last = now;
    await page.waitForTimeout(50);
  }
  return last;
}

function tableOfContents(page: Page) {
  return page.getByRole("navigation", { name: /auf dieser seite/i });
}

test.describe("Table of contents", () => {
  test("a click scrolls to the heading, not only the address bar", async ({ page }) => {
    await page.goto(DOC_WITH_UMLAUTS);

    const entry = tableOfContents(page).getByRole("link").filter({ hasText: /Präfixzeile/ });
    const target = (await entry.getAttribute("href"))!.slice(1);

    await entry.click();
    await expect(page).toHaveURL(new RegExp(`#${target}$`));

    // The actual point: the page must have moved as well.
    expect(await scrollPosition(page)).toBeGreaterThan(0);

    // And the heading sits below the sticky header, not behind it.
    const top = await page.locator(`#${target}`).evaluate((el) => el.getBoundingClientRect().top);
    const headerBottom = await page
      .locator("header")
      .first()
      .evaluate((el) => el.getBoundingClientRect().bottom);
    expect(top).toBeGreaterThan(headerBottom);
    expect(top).toBeLessThan(headerBottom + 60);
  });

  test("every anchor in the list has a target in the document", async ({ page }) => {
    await page.goto(DOC_WITH_UMLAUTS);
    const hrefs = await tableOfContents(page)
      .getByRole("link")
      .evaluateAll((as) => as.map((a) => a.getAttribute("href")!.slice(1)));

    expect(hrefs.length).toBeGreaterThan(3);
    for (const id of hrefs) {
      await expect(page.locator(`[id="${id}"]`), `target #${id} is missing`).toHaveCount(1);
    }
  });
});

test.describe("Navigation starts at the top", () => {
  /**
   * `html { scroll-behavior: smooth }` turned Next's `scrollTop = 0` on a
   * route change into an animation. Next then measured the old position and
   * scrolled the new page into view instead, so a page reached from further
   * down opened 65px down, below the header. `data-scroll-behavior="smooth"`
   * on `<html>` lets Next turn the smooth scrolling off for that moment.
   *
   * The order matters: scroll on the start page, leave, come back.
   */
  for (const [name, link] of [
    ["Home", /^Home$/],
    ["Logo", /^KOMA-Script$/],
  ] as const) {
    test(`${name} leads to the top of the start page`, async ({ page }) => {
      await page.goto("/de");
      await page.evaluate(() => window.scrollTo({ top: 900, behavior: "instant" }));
      expect(await scrollPosition(page)).toBeGreaterThan(500);

      await page.getByRole("banner").getByRole("link", { name: /^Freunde$/ }).click();
      await expect(page).toHaveURL(/\/de\/friends$/);
      expect(await scrollPosition(page), "friends page after leaving a scrolled page").toBe(0);

      await page.evaluate(() => window.scrollTo({ top: 400, behavior: "instant" }));
      await page.getByRole("banner").getByRole("link", { name: link }).first().click();
      await expect(page).toHaveURL(/\/de$/);
      expect(await scrollPosition(page)).toBe(0);
    });
  }

  test("an anchor in the table of contents still glides", async ({ page }) => {
    await page.goto(DOC_WITH_UMLAUTS);

    // The fix must not switch off smooth scrolling for anchor jumps: shortly
    // after the click the position is still on its way.
    const entry = tableOfContents(page).getByRole("link").filter({ hasText: /Präfixzeile/ });
    const target = (await entry.getAttribute("href"))!.slice(1);

    await entry.click();
    await page.waitForTimeout(60);
    const onTheWay = await page.evaluate(() => Math.round(window.scrollY));
    const end = await scrollPosition(page);

    expect(end).toBeGreaterThan(0);
    expect(onTheWay, "jump was instant, it no longer glides").toBeLessThan(end);
    await expect(page.locator(`#${target}`)).toBeVisible();
  });
});

test.describe("Inline code", () => {
  test("renders without literal backticks around it", async ({ page }) => {
    await page.goto(DOC_WITH_UMLAUTS);
    const code = page.locator(".prose :not(pre) > code").first();
    await expect(code).toBeVisible();
    const pseudo = await code.evaluate((el) => [
      getComputedStyle(el, "::before").content,
      getComputedStyle(el, "::after").content,
    ]);
    for (const content of pseudo) expect(content).not.toContain("`");
  });
});

test.describe("Status codes", () => {
  const missing = [
    "/de/gibtsnicht",
    "/en/nope",
    "/de/docs/gibtsnicht",
    "/de/docs/koma-script/nope",
    "/de/news/nope",
  ];

  for (const path of missing) {
    test(`${path} answers 404, not 200`, async ({ page }) => {
      const response = await page.goto(path);
      expect(response?.status()).toBe(404);
      await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
    });
  }

  test("existing pages still answer 200", async ({ page }) => {
    for (const path of ["/de", "/en", "/de/docs", "/de/impressum", "/en/privacy", DOC_WITH_UMLAUTS]) {
      const response = await page.goto(path);
      expect(response?.status(), path).toBe(200);
    }
  });
});

test.describe("Language switch", () => {
  test("loads a new document and starts at the top", async ({ page }) => {
    await page.goto("/de");
    await page.evaluate(() => {
      (window as unknown as { __marker?: string }).__marker = "old-page";
      window.scrollTo({ top: 600, behavior: "instant" });
    });

    await page.getByRole("button", { name: /sprache/i }).click();
    await page.getByRole("menuitem", { name: /English/ }).click();
    await page.waitForURL("**/en");

    // A real navigation: the marker in the old document did not survive it.
    const markerGone = await page.evaluate(
      () => (window as unknown as { __marker?: string }).__marker === undefined,
    );
    expect(markerGone).toBe(true);
    expect(await scrollPosition(page)).toBe(0);
    await expect(page.locator("html")).toHaveAttribute("lang", "en");
  });

  /**
   * Before the fix the switcher only swapped the locale prefix: 46 of the 150
   * sitemap pages linked to a 404, the legal pages (their slug differs per
   * language) and every page that exists only in German.
   */
  const cases = [
    // Legal pages go to their counterpart with the other slug.
    { from: "/de/impressum", menu: /English/, href: "/en/imprint" },
    { from: "/de/datenschutz", menu: /English/, href: "/en/privacy" },
    { from: "/en/imprint", menu: /Deutsch/, href: "/de/impressum" },
    { from: "/en/privacy", menu: /Deutsch/, href: "/de/datenschutz" },
    // German-only pages go to the nearest overview that exists in English.
    {
      from: "/de/docs/koma-script/archive/dtk",
      menu: /English/,
      href: "/en/docs/koma-script/archive",
      fallback: true,
    },
    { from: "/de/news/2008-10-13", menu: /English/, href: "/en/news", fallback: true },
  ];

  for (const { from, menu, href, fallback } of cases) {
    test(`from ${from} the other language leads to ${href}, not to a 404`, async ({ page }) => {
      await page.goto(from);
      await page.getByRole("button", { name: /sprache|language/i }).click();
      const entry = page.getByRole("menuitem", { name: menu });
      await expect(entry).toHaveAttribute("href", href);
      // A page without counterpart says so instead of pretending.
      await expect(entry.getByText(/nicht übersetzt|not translated/i)).toHaveCount(fallback ? 1 : 0);

      await entry.click();
      await page.waitForURL(`**${href}`);
      const response = await page.request.get(href);
      expect(response.status()).toBe(200);
    });
  }

  test("the English footer links to the English legal pages", async ({ page }) => {
    await page.goto("/en");
    const footer = page.getByRole("contentinfo");
    await expect(footer.getByRole("link", { name: "Imprint" })).toHaveAttribute("href", "/en/imprint");
    await expect(footer.getByRole("link", { name: "Privacy" })).toHaveAttribute("href", "/en/privacy");
  });

  test("the entries are links to the same page in the other language", async ({ page }) => {
    await page.goto("/de/docs/koma-script");
    await page.getByRole("button", { name: /sprache/i }).click();
    const english = page.getByRole("menuitem", { name: /English/ });
    await expect(english).toHaveAttribute("href", "/en/docs/koma-script");
    await expect(english.getByText(/nicht übersetzt/i)).toHaveCount(0);
  });
});

test.describe("Content Security Policy", () => {
  /**
   * The listener goes in through `addInitScript`, before the page runs any
   * code of its own. Registered after `page.goto`, violations during load
   * would happen before anything listens, and the test would pass or fail
   * depending on timing.
   */
  test("no violation on load or when opening menus and the search dialog", async ({ page }) => {
    await page.addInitScript(() => {
      const w = window as unknown as { __csp: string[] };
      w.__csp = [];
      document.addEventListener("securitypolicyviolation", (e) =>
        w.__csp.push(`${e.violatedDirective} ${e.blockedURI} ${e.sourceFile ?? ""}`),
      );
    });
    await page.goto("/de");
    expect(
      await page.evaluate(() => (window as unknown as { __csp: string[] }).__csp),
      "already on plain load",
    ).toEqual([]);

    await page.getByRole("button", { name: /sprache/i }).click();
    await page.keyboard.press("Escape");
    await page.getByRole("button", { name: /^theme$/i }).click();
    await page.keyboard.press("Escape");
    await page.keyboard.press("Control+k");
    await expect(page.getByRole("dialog")).toBeVisible();

    // Radix locks the background through a `<style>` that react-remove-scroll
    // appends after the dialog is already visible. Without the nonce the CSP
    // blocks it, so the lock taking effect is both the visible symptom and
    // the moment to look for violations.
    await expect
      .poll(() => page.evaluate(() => getComputedStyle(document.body).overflow), {
        message: "background still scrolls behind the search dialog",
      })
      .toBe("hidden");

    const violations = await page.evaluate(() => (window as unknown as { __csp: string[] }).__csp);
    expect(violations).toEqual([]);
  });
});
