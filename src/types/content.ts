import type { Frontmatter } from "@/lib/frontmatter";
import type { Locale } from "./config";

export type ContentSection = "pages" | "docs" | "news" | "examples" | "friends";

export interface ContentItem {
  section: ContentSection;
  locale: Locale;
  slug: string[];
  /** URL-Pfad ohne Locale-Prefix, z.B. "docs/classes/scrartcl" */
  path: string;
  /** Vollständige URL inkl. Locale, z.B. "/de/docs/classes/scrartcl" */
  url: string;
  frontmatter: Frontmatter;
  content: string;
  /** Letzte Änderung (mtime der Datei) */
  modifiedAt: Date;
}

export interface DocTreeNode {
  type: "folder" | "page";
  name: string;
  label: string;
  href?: string;
  order: number;
  children?: DocTreeNode[];
}

export interface SearchIndexEntry {
  id: string;
  url: string;
  title: string;
  description: string;
  section: ContentSection;
  locale: Locale;
  headings: string[];
  body: string;
}
