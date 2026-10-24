import { readFileSync, readdirSync, statSync, existsSync } from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { FrontmatterSchema, type Frontmatter } from "./frontmatter";
import { alternatePath, localizedSlug } from "./locale-paths";
import type { ContentItem, ContentSection, DocTreeNode } from "@/types/content";
import { SUPPORTED_LOCALES, type Locale } from "@/types/config";

const CONTENT_ROOT = path.join(process.cwd(), "content");

/**
 * Baut eine garantiert interne, relative URL für ein ContentItem.
 *
 * Jedes aus einem Dateinamen abgeleitete Slug-Segment wird durch
 * encodeURIComponent neutralisiert. Dadurch kann ein Segment niemals ein
 * anderes Schema (z. B. `javascript:`), einen protokoll-relativen Präfix
 * (`//host`) oder Steuerzeichen in ein späteres `href` einschleusen. Das
 * Ergebnis beginnt immer mit "/" und ist damit ein reiner Pfad. Für normale
 * Slugs (Kleinbuchstaben, Ziffern, Bindestriche) ist das Encoding ein No-Op,
 * die Routen bleiben also unverändert.
 */
function buildInternalUrl(locale: Locale, section: ContentSection, slug: string[]): string {
  const segments = section === "pages" ? slug : [section, ...slug];
  const encoded = segments.filter(Boolean).map((s) => encodeURIComponent(s));
  return `/${encodeURIComponent(locale)}${encoded.length ? `/${encoded.join("/")}` : ""}`;
}

/**
 * Liest eine einzelne Content-Datei aus content/<section>/<locale>/<slug…>.md
 * Bei nicht-existierender Datei → null (Caller entscheidet über notFound()).
 */
export function getContent(
  section: ContentSection,
  locale: Locale,
  slug: string[],
): ContentItem | null {
  const candidates = [
    path.join(CONTENT_ROOT, section, locale, ...slug) + ".md",
    path.join(CONTENT_ROOT, section, locale, ...slug) + ".mdx",
    path.join(CONTENT_ROOT, section, locale, ...slug, "index.md"),
    path.join(CONTENT_ROOT, section, locale, ...slug, "index.mdx"),
  ];

  for (const filePath of candidates) {
    if (!existsSync(filePath)) continue;
    const raw = readFileSync(filePath, "utf-8");
    const { data, content } = matter(raw);
    const frontmatterResult = FrontmatterSchema.safeParse(data);
    if (!frontmatterResult.success) {
      throw new Error(
        `Invalides Frontmatter in ${path.relative(process.cwd(), filePath)}:\n` +
          frontmatterResult.error.issues.map((e) => `  - ${e.path.join(".")}: ${e.message}`).join("\n"),
      );
    }
    const frontmatter: Frontmatter = frontmatterResult.data;
    if (frontmatter.draft && process.env.NODE_ENV === "production") return null;
    const stat = statSync(filePath);
    const pathStr = slug.join("/");
    return {
      section,
      locale,
      slug,
      path: section === "pages" ? pathStr : `${section}/${pathStr}`,
      url: buildInternalUrl(locale, section, slug),
      frontmatter,
      content,
      modifiedAt: stat.mtime,
    };
  }
  return null;
}

/**
 * Prüft, ob es zu einem Slug in der angegebenen Sprache eine Datei gibt.
 *
 * Bewusst ohne Parsen des Frontmatters, es geht nur um die Existenz. Einzige
 * Ausnahme ist der Draft-Fall: ein Entwurf ist in Produktion keine
 * ausspielbare Seite und darf deshalb auch nicht als Sprachvariante gelten.
 */
export function contentExists(section: ContentSection, locale: Locale, slug: string[]): boolean {
  return getContent(section, locale, slug) !== null;
}

/**
 * Liefert die Sprachen, in denen es diesen Slug tatsächlich gibt.
 *
 * Grundlage für die hreflang-Annotationen. Ein hreflang, das auf eine nicht
 * existierende Übersetzung zeigt, ist ein Fehler: Google verlangt, dass jede
 * angegebene Variante erreichbar ist und zurückverweist. Ist das nicht der
 * Fall, wird im Zweifel das ganze Cluster verworfen. Die News liegen zu 43
 * auf Deutsch, aber nur zu 7 auf Englisch vor, deshalb ist das hier kein
 * theoretischer Randfall.
 */
export function getAvailableLocales(section: ContentSection, slug: string[]): Locale[] {
  // Localized slugs (impressum/imprint, datenschutz/privacy) count as the
  // same page, see `localizedSlug`.
  return SUPPORTED_LOCALES.filter((locale) =>
    contentExists(section, locale, localizedSlug(section, slug, locale)),
  );
}

/**
 * Routes that exist in every language without a content file of their own
 * (start page and the section overviews under `app/[locale]/`).
 */
const ROUTE_PATHS = ["", "/docs", "/news", "/examples", "/friends", "/search"] as const;

const CONTENT_SECTIONS: readonly ContentSection[] = ["pages", "docs", "news", "examples", "friends"];

/** Locale-free paths of every page that exists in a language. */
function existingPaths(locale: Locale): Set<string> {
  const paths = new Set<string>(ROUTE_PATHS);
  for (const section of CONTENT_SECTIONS) {
    for (const item of listAllContentItems(section, locale)) {
      paths.add(item.url.slice(locale.length + 1));
    }
  }
  return paths;
}

const fallbackCache = new Map<Locale, Partial<Record<Locale, Record<string, string>>>>();

/**
 * Where the language switcher leads from a page that has no counterpart in
 * the other language.
 *
 * Returns, per target language, a map from the locale-free path the page
 * would have there (after `alternatePath`) to the nearest page that does
 * exist: the parent overview (`/news/2010-07-01` → `/news`,
 * `/docs/koma-script/archive/dtk` → `/docs/koma-script/archive`), at the
 * latest the start page (`""`). Pages that have a counterpart are not listed,
 * so the map stays small (about 40 entries for German → English).
 *
 * The switcher is a client component without file access and keeps its
 * state across client navigations, so it gets the whole map once from the
 * layout instead of a single href per page.
 */
export function getSwitcherFallbacks(from: Locale): Partial<Record<Locale, Record<string, string>>> {
  const cached = fallbackCache.get(from);
  if (cached) return cached;

  const result: Partial<Record<Locale, Record<string, string>>> = {};
  const own = existingPaths(from);
  for (const target of SUPPORTED_LOCALES) {
    if (target === from) continue;
    const there = existingPaths(target);
    const map: Record<string, string> = {};
    for (const path of own) {
      const counterpart = alternatePath(path, target);
      if (there.has(counterpart)) continue;
      let parent = counterpart;
      do {
        parent = parent.slice(0, Math.max(parent.lastIndexOf("/"), 0));
      } while (parent && !there.has(parent));
      map[counterpart] = parent;
    }
    result[target] = map;
  }

  // Content only changes with a deploy, which restarts the server. In
  // development a new or deleted file should show without a restart.
  if (process.env.NODE_ENV === "production") fallbackCache.set(from, result);
  return result;
}

/**
 * Listet alle Slugs (als Array von Pfad-Segmenten) einer Section/Locale auf.
 * Verschachtelte Verzeichnisse werden rekursiv aufgelöst.
 */
export function listContent(section: ContentSection, locale: Locale): string[][] {
  const root = path.join(CONTENT_ROOT, section, locale);
  if (!existsSync(root)) return [];
  return walk(root, []);
}

function walk(dir: string, prefix: string[]): string[][] {
  const out: string[][] = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    if (entry.name.startsWith(".") || entry.name.startsWith("_")) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      out.push(...walk(full, [...prefix, entry.name]));
    } else if (entry.isFile() && /\.(md|mdx)$/.test(entry.name)) {
      const base = entry.name.replace(/\.(md|mdx)$/, "");
      if (base === "index") {
        if (prefix.length > 0) out.push(prefix);
      } else {
        out.push([...prefix, base]);
      }
    }
  }
  return out;
}

/**
 * Listet alle ContentItems einer Section in der gewünschten Sprache.
 * Sortierung: frontmatter.order ASC, dann title.
 */
export function listAllContentItems(section: ContentSection, locale: Locale): ContentItem[] {
  const items: ContentItem[] = [];
  for (const slug of listContent(section, locale)) {
    const item = getContent(section, locale, slug);
    if (item) items.push(item);
  }
  items.sort((a, b) => {
    if (a.frontmatter.order !== b.frontmatter.order) return a.frontmatter.order - b.frontmatter.order;
    return a.frontmatter.title.localeCompare(b.frontmatter.title);
  });
  return items;
}

/**
 * News werden absteigend nach Datum sortiert.
 */
export function listNews(locale: Locale): ContentItem[] {
  return listAllContentItems("news", locale).sort((a, b) => {
    const da = a.frontmatter.date?.getTime() ?? 0;
    const db = b.frontmatter.date?.getTime() ?? 0;
    return db - da;
  });
}

/**
 * Erzeugt einen hierarchischen Doc-Baum für die Sidebar.
 */
export function buildDocTree(locale: Locale): DocTreeNode[] {
  const items = listAllContentItems("docs", locale);
  const root: DocTreeNode[] = [];
  const docsRoot = path.join(CONTENT_ROOT, "docs", locale);

  for (const item of items) {
    let level = root;
    for (let i = 0; i < item.slug.length; i++) {
      const segment = item.slug[i];
      if (!segment) continue;
      const isLeaf = i === item.slug.length - 1;
      const segPath = path.join(docsRoot, ...item.slug.slice(0, i + 1));
      const isFolder = existsSync(segPath) && statSync(segPath).isDirectory();

      if (isLeaf && !isFolder) {
        // Echte Seite (z. B. faq.md)
        level.push({
          type: "page",
          name: segment,
          label: item.frontmatter.title,
          href: item.url,
          description: item.frontmatter.description,
          order: item.frontmatter.order,
        });
      } else {
        // Ordner, ggf. mit eigener index.md (z. B. koma-script/index.md)
        let folder = level.find((n) => n.type === "folder" && n.name === segment);
        if (!folder) {
          folder = {
            type: "folder",
            name: segment,
            label: humanize(segment),
            order: 500,
            children: [],
          };
          level.push(folder);
        }
        if (isLeaf && isFolder) {
          // Dieses Item ist der Ordner-Index → Metadaten übernehmen,
          // statt einen zweiten (Leaf-)Knoten zu erzeugen.
          folder.label = item.frontmatter.title;
          folder.href = item.url;
          folder.description = item.frontmatter.description;
          folder.order = item.frontmatter.order;
        }
        level = folder.children ??= [];
      }
    }
  }

  const sortRec = (nodes: DocTreeNode[]) => {
    nodes.sort((a, b) => a.order - b.order || a.label.localeCompare(b.label));
    nodes.forEach((n) => n.children && sortRec(n.children));
  };
  sortRec(root);
  return root;
}

function humanize(segment: string): string {
  return segment
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}
