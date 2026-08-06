# Graph Report - homepage  (2026-08-06)

## Corpus Check
- 220 files · ~136,110 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 1186 nodes · 1810 edges · 147 communities (101 shown, 46 thin omitted)
- Extraction: 92% EXTRACTED · 7% INFERRED · 0% AMBIGUOUS · INFERRED: 133 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `45fda3b5`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- utils.ts
- Deploy Job (scp release, ssh extract, atomic swap, restart, verify)
- compilerOptions
- devDependencies
- [...slug]/page.tsx
- DANTE-Projektförderung für KOMA-Script
- Inoffizielles KOMA-Script-Team
- scripts
- docs/page.tsx
- seo.ts
- config.ts
- 20 Jahre KOMA-Script: Gestern - Heute - Morgen (DANTE 2014 talk)
- lib/content.ts
- Locale
- scrhack (Lader der ehemaligen Hack-Module)
- build-search-index.ts
- DIN-Brief mit Briefkopf (German letter template)
- KOMA-Script collection
- Hero.tsx
- Latentes Gefühl der Überlastung
- Archiv der Änderungen vor KOMA-Script 3.28
- The KOMA-Script Collection
- Diplomarbeit / Masterarbeit (German thesis template)
- komafancychap (fncychap-Kapitelstile für KOMA-Script)
- scrhack (deprecated spin-off, now only a loader for the enhancement packages)
- Push to Codeberg Job (force --prune mirror of all refs)
- Die KOMA-Script-Sammlung
- makelabels (LCO-Datei für \makelabels)
- GitHub (Hosting der komascript-Projekte)
- KOMA-Script
- komascript.de
- Ende der Feature-Entwicklung in KOMA-Script
- scrartcl (KOMA-Script-Artikelklasse)
- DTK-Artikel mit Beteiligung des KOMA-Script-Autors
- gridset (experimenteller registerhaltiger Satz)
- Ende des KOMA-Script Documentation Project
- Splitting the bundle into smaller projects (since 2018)
- wsu (example LCO file implementing the Washington State University letterhead)
- gridset
- komascript.de (Online-Start 23. April 2004)
- MetaPost
- Script2e (Vorläufer von KOMA-Script)
- Download (EN)
- scrletter (Wrapper-Klasse)
- Thanks to All My Supporters
- komafancychap (fncychap chapter styles for KOMA-Script classes)
- Markus Kohm
- komascript.de
- BerliOS
- Englische KOMA-Script-Anleitung
- komascript.de (21 Jahre)
- scrartcl
- Community (EN)
- dependencies
- Documentation (EN section index)
- scrlttr2 (KOMA-Script letter class)
- Codeberg (Hosting der komascript-Projekte)
- contract (KOMA-Script spin-off, formerly scrjura)
- KOMA-Script bundle
- KOMA-Script
- Schließung von BerliOS zum 31. Dezember 2011
- Features (EN)
- lscapeenhanced (fixes lscape \textheight/\textwidth, can load pdflscape)
- KOMA-Script 3
- SplitIndex
- LCO-Dateien (letter class options)
- No cookies, no tracking, no external resources
- KOMA-Script book (7th edition, Lehmanns Media / Edition DANTE)
- LaTeX Project Public License 1.3c
- proxy.ts
- scrlayer (Ebenenmodell für Seitenstile)
- SourceForge-Projekt koma-script
- Split-off candidates from the KOMA-Script bundle
- Header.tsx
- marginnote (non-floating \marginnote alternative to \marginpar)
- scrwfile (routes writes through the .aux file to avoid write-register exhaustion)
- Nächste Auflage des KOMA-Script-Buchs
- titlepage-Paket
- Migration der KOMA-Script-Quellen nach SourceForge
- MlBibTeX
- scrlfile (Datei-Hooks)
- KOMA-Script project hosting on SourceForge
- scrlfile (load file hooks)
- KOMA-Script-Buch (3. Auflage)
- Voreinstellungen von KOMA-Script
- KOMA-Script-Buch, dritte Auflage
- KOMA-Script 3.02b
- KOMA-Script Documentation Project
- Blockierte KOMA-Script-Release
- Weihnachtsgruß 2015
- Altes Sarovar-CVS-Repository
- scrlayer
- codeberg-nobg.svg - Codeberg badge, transparent background
- No External Image URLs (CSP img-src 'self' data: blob:)
- Original-Quote Convention for komascript.sourceforge.io Text
- contract (Vertragspaket)
- koma-script-source-doc (interne Klasse)
- scrdate (Datumsformatierung)
- komascript.de-Forum (Anmeldung mit Klarnamen)
- caption2 / caption3 / caption
- Dr. Ingeborg Syllm-Rapoport
- Button.tsx
- @fontsource-variable/inter
- @fontsource-variable/jetbrains-mono
- gray-matter
- lucide-react
- next
- next-intl
- next-mdx-remote
- @radix-ui/react-dialog
- @radix-ui/react-dropdown-menu
- @radix-ui/react-navigation-menu
- @radix-ui/react-slot
- react
- react-dom
- rehype-autolink-headings
- rehype-pretty-code
- rehype-slug
- remark-gfm
- remark-toc
- shiki
- tailwind-merge
- zod
- postcss.config.mjs
- Wildcard Certificate *.musiker15.de (no Let's Encrypt)
- scraddr (Adressdateien lesen)
- scrlogo (Befehl \KOMAScript)
- Fehldeutung des Namens KOMA-Script
- NEXT_LOCALE Cookie Hardening
- cn
- package.json
- Footer.tsx
- next.config.ts
- eslint
- next-themes
- @playwright/test
- postcss
- prettier
- prettier-plugin-tailwindcss
- tailwindcss
- @tailwindcss/postcss
- tsx
- vitest
- favicon.svg - blue rounded square with white K

## God Nodes (most connected - your core abstractions)
1. `Locale` - 60 edges
2. `cn()` - 29 edges
3. `getContent()` - 22 edges
4. `compilerOptions` - 21 edges
5. `The KOMA-Script Collection` - 21 edges
6. `KOMA-Script collection` - 20 edges
7. `SUPPORTED_LOCALES` - 18 edges
8. `t()` - 17 edges
9. `siteConfig` - 16 edges
10. `Die KOMA-Script-Sammlung` - 15 edges

## Surprising Connections (you probably didn't know these)
- `Pre-Commit Checks (validate:content, lint, type-check, build, build:search)` --semantically_similar_to--> `CI Validate Job (install, validate:content, lint, type-check, build, vitest)`  [INFERRED] [semantically similar]
  AUTHORING.md → .github/workflows/ci.yml
- `Zero Outbound Third-Party Requests (no analytics, CDN, external fonts or images)` --semantically_similar_to--> `No External Image URLs (CSP img-src 'self' data: blob:)`  [INFERRED] [semantically similar]
  SECURITY.md → AUTHORING.md
- `CodeQL Advanced Workflow` --conceptually_related_to--> `Security Policy / Vulnerability Reporting`  [INFERRED]
  .github/workflows/codeql.yml → SECURITY.md
- `Security Policy / Vulnerability Reporting` --conceptually_related_to--> `Bug Report Issue Template`  [AMBIGUOUS]
  SECURITY.md → .github/ISSUE_TEMPLATE/bug_report.md
- `SemiHollow.jpg - photo of a sunburst semi-hollow electric guitar on a stand` --conceptually_related_to--> `Markus Kohm (author and maintainer of KOMA-Script)`  [AMBIGUOUS]
  public/images/komascript/SemiHollow.jpg → public/files/20Jahre_KOMA-Script.pdf

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Wanderung des KOMA-Script-Repositories über Hoster hinweg** — content_news_de_2010_07_01_cvs, content_news_de_2010_07_01_subversion, content_news_de_2011_09_30_berlios_schliessung, content_news_de_2014_01_30_berlios, content_news_de_2014_02_04_migration_sourceforge, content_news_de_2014_04_08_sarovar [INFERRED 0.85]
- **Lizenzkonflikt zwischen Entwickler und Distributoren** — content_news_de_2008_10_13_lppl, content_news_de_2008_10_13_distributoren, content_news_de_2008_10_13_vollstaendige_verteilung, content_news_de_2013_12_24_distributoren_anforderungen, content_news_de_2013_12_24_release_verzoegerung [INFERRED 0.85]
- **Privat finanzierter Betrieb von komascript.de** — content_news_de_2010_02_01_komascript_de, content_news_de_2010_02_01_robin, content_news_de_2010_02_01_raymond, content_news_de_2010_02_01_tohserver, content_news_de_2011_02_10_werbefreiheit [EXTRACTED 1.00]
- **Inoffizieller Helferkreis um KOMA-Script** — content_news_de_2015_02_19_inoffizielles_team, content_news_de_2015_02_19_elke, content_news_de_2015_02_19_uwe, content_news_de_2015_02_19_falk, content_news_de_2020_01_07_mitstreiter, content_news_de_2018_03_27_karl_hagen [EXTRACTED 1.00]
- **Reduktion des Projektumfangs: Entwicklungsstopp, Forenrückzug, Paketausgliederung** — content_news_de_2016_06_12_hobby_wird_arbeit, content_news_de_2020_01_07_entwicklungsstopp, content_news_de_2020_01_07_ueberlastung, content_news_de_2023_03_27_abschied_auf_raten, content_news_de_2023_03_27_rueckzug_forenarbeit, content_news_de_2023_03_27_paket_ausgliederung [INFERRED 0.85]
- **Migration von komascript.de zu statischen Seiten** — content_news_de_2025_04_29_drupal, content_news_de_2025_04_29_documentation_project_ende, content_news_de_2026_06_26_hugo_book, content_news_de_2026_07_07_hugo, content_news_de_2026_07_07_fuse_js, content_news_de_2026_07_07_sourceforge_spiegelung [EXTRACTED 1.00]
- **Ausgliederung der scrhack-Hack-Module in eigenständige Third-Party-Enhancement-Pakete** — content_friends_de_scrhack_scrhack, content_friends_de_floatbytocbasic_floatbytocbasic, content_friends_de_floatrowbytocbasic_floatrowbytocbasic, content_friends_de_lscapeenhanced_lscapeenhanced, content_friends_de_setspaceenhanced_setspaceenhanced, content_friends_de_standardsectioning_standardsectioning, content_friends_de_floatbytocbasic_third_party_enhancements [EXTRACTED 1.00]
- **Aus KOMA-Script ausgegliederte Spin-Off-Pakete** — content_friends_de_contract_contract, content_friends_de_scrdate_scrdate, content_friends_de_scrtime_scrtime, content_friends_de_scrwfile_scrwfile, content_friends_de_scrhack_scrhack, content_friends_de_scrlayer_fancyhdr_scrlayer_fancyhdr, content_friends_de_contract_koma_script [EXTRACTED 1.00]
- **LCO-basierte Briefprojekte für scrlttr2 und scrletter** — content_friends_de_briefdemo2005_briefdemo2005, content_friends_de_makelabels_makelabels, content_friends_de_wsu_wsu, content_friends_de_briefdemo2005_lco_datei, content_friends_de_makelabels_scrlttr2 [INFERRED 0.85]
- **scrhack replaced by five independent third-party enhancement packages** — content_friends_en_scrhack_scrhack, content_friends_en_floatbytocbasic_floatbytocbasic, content_friends_en_floatrowbytocbasic_floatrowbytocbasic, content_friends_en_lscapeenhanced_lscapeenhanced, content_friends_en_setspaceenhanced_setspaceenhanced, content_friends_en_standardsectioning_standardsectioning [EXTRACTED 1.00]
- **KOMA-Script spin-offs separated from the bundle into independent projects** — content_friends_en_contract_contract, content_friends_en_scrdate_scrdate, content_friends_en_scrtime_scrtime, content_friends_en_scrwfile_scrwfile, content_friends_en_scrhack_scrhack, content_friends_en_scrlayer_fancyhdr_scrlayer_fancyhdr, content_friends_en_contract_koma_script [EXTRACTED 1.00]
- **LCO-file based letter customization for scrlttr2 and scrletter** — content_friends_en_briefdemo2005_lco_file, content_friends_en_makelabels_makelabels, content_friends_en_wsu_wsu, content_friends_en_briefdemo2005_briefdemo2005, content_friends_en_makelabels_scrlttr2, content_friends_en_makelabels_scrletter [INFERRED 0.85]
- **KOMA-Script-Klassen als Ersatz der LaTeX-Standardklassen** — content_docs_de_koma_script_index_scrartcl, content_docs_de_koma_script_index_scrbook, content_docs_de_koma_script_index_scrreprt, content_docs_de_koma_script_index_scrlttr2, content_docs_de_koma_script_index_article, content_docs_de_koma_script_index_book, content_docs_de_koma_script_index_report, content_docs_de_koma_script_index_letter [EXTRACTED 1.00]
- **scrlfile mit kernelabhängigen Hook-Varianten** — content_docs_de_koma_script_index_scrlfile, content_docs_de_koma_script_index_scrlfile_hook, content_docs_de_koma_script_index_scrlfile_hook_3_34, content_docs_de_koma_script_index_scrlfile_patcholdlatex [EXTRACTED 1.00]
- **Projektressourcen von KOMA-Script auf SourceForge** — content_docs_de_koma_script_index_sourceforge_projekt, content_docs_de_koma_script_code_subversion_repository, content_docs_de_koma_script_issues_issue_tracker, content_docs_de_koma_script_releases_alte_versionen, content_docs_de_koma_script_wiki_koma_script_wiki [EXTRACTED 1.00]
- **KOMA-Script bundle: classes, packages and project infrastructure** — content_docs_en_koma_script_index_koma_script_collection, content_docs_en_koma_script_index_sourceforge_project, content_docs_en_koma_script_issues_issue_tracker, content_docs_en_koma_script_wiki_koma_script_wiki, content_docs_en_koma_script_ctan_catalog_entry, content_docs_en_koma_script_code_subversion_repository, content_docs_en_koma_script_releases_old_releases [EXTRACTED 1.00]
- **Thesis template stack: scrbook plus type area, page style and bibliography setup** — content_examples_de_thesis_template_scrbook, content_examples_de_thesis_template_bcor_div_options, content_examples_de_thesis_template_scrlayer_scrpage, content_examples_de_thesis_template_biblatex, content_examples_de_thesis_template_microtype, content_examples_en_thesis_template_frontmatter_structure [EXTRACTED 1.00]
- **Letter template pattern: scrlttr2 with .lco layout files and KOMA variables** — content_examples_en_letter_template_scrlttr2, content_examples_en_letter_template_lco_options, content_examples_de_letter_template_setkomavar, content_examples_en_letter_template_fromlogo, content_examples_en_letter_template_backaddress, content_examples_de_letter_template_letter_environment [EXTRACTED 1.00]
- **KOMA-Script document classes replacing the standard classes** — content_pages_en_features_scrartcl, content_pages_en_features_scrreprt, content_pages_en_features_scrbook, content_pages_en_features_scrlttr2, content_pages_en_features_koma_script [EXTRACTED 1.00]
- **Distribution and hosting channels for KOMA-Script** — content_pages_en_download_ctan, content_pages_en_download_texlive, content_pages_en_download_miktex, content_pages_en_download_sourceforge [EXTRACTED 1.00]
- **One-man-show burden driving splitting, release caution and the static rewrite** — content_pages_en_about_markus_kohm, content_pages_en_about_splitting_strategy, content_news_en_2013_07_24_release_delay, content_news_en_2026_07_07_static_site_migration, content_pages_en_about_koma_script_documentation_project [INFERRED 0.85]
- **Push-to-Production Pipeline** — _github_workflows_deploy_build_job, _github_workflows_deploy_deploy_job, _github_workflows_deploy_atomic_symlink_swap, _github_workflows_deploy_systemd_service, _github_workflows_deploy_health_check [EXTRACTED 1.00]
- **Mozilla Observatory A+ Security Posture** — security_nonce_based_csp, security_security_headers_single_source, security_apache_header_unset, security_transport_security, security_next_locale_cookie, security_observatory_grade [EXTRACTED 1.00]
- **Supply-Chain Defense Layer** — _github_dependabot_update_groups, pnpm_workspace_security_overrides, pnpm_workspace_allow_builds, _github_workflows_codeql_analyze_job, security_supply_chain [INFERRED 0.85]

## Communities (147 total, 46 thin omitted)

### Community 0 - "utils.ts"
Cohesion: 0.14
Nodes (12): Callout(), CalloutProps, CalloutType, config, Details(), DetailsProps, LatexExample(), LatexExampleProps (+4 more)

### Community 1 - "Deploy Job (scp release, ssh extract, atomic swap, restart, verify)"
Cohesion: 0.05
Nodes (47): Bug Report Issue Template, Feature Request Issue Template, CI Workflow, Concurrency Deduplication of push/pull_request Runs, Least-Privilege Workflow Permissions (contents: read), CI Validate Job (install, validate:content, lint, type-check, build, vitest), CodeQL Analyze Job (actions + javascript-typescript matrix, build-mode none), CodeQL Advanced Workflow (+39 more)

### Community 2 - "compilerOptions"
Cohesion: 0.05
Nodes (39): ./config/*, config/**/*.ts, ./content/*, dom, dom.iterable, esnext, .next/dev/types/**/*.ts, next-env.d.ts (+31 more)

### Community 3 - "devDependencies"
Cohesion: 0.12
Nodes (17): @eslint/js, devDependencies, @eslint/js, @tailwindcss/typography, @types/mdx, @types/node, @types/react, @types/react-dom (+9 more)

### Community 4 - "[...slug]/page.tsx"
Cohesion: 0.15
Nodes (32): DocPage(), generateMetadata(), generateStaticParams(), Props, ExamplePage(), generateMetadata(), generateStaticParams(), Props (+24 more)

### Community 5 - "DANTE-Projektförderung für KOMA-Script"
Cohesion: 0.08
Nodes (29): DANTE e.V., DTK (Die TeXnische Komödie), Hardware- und Geldspenden für die Entwicklungsumgebung, KOMA-Script soll Hobby und keine Verpflichtung werden, Vortrag zum zehnjährigen Jubiläum von KOMA-Script (1994 bis 2004), DANTE-Projektförderung für KOMA-Script, eso-pic, hyperref (+21 more)

### Community 6 - "Inoffizielles KOMA-Script-Team"
Cohesion: 0.08
Nodes (28): CTAN (Comprehensive TeX Archive Network), CTAN-Paketkatalog, CTAN als Puffer zwischen Anwendern, Paketautoren und Distributoren, DANTE e.V., DANTE-Ehrenpreis 2014, Joachim (CTAN-Team), MiKTeX, TeX Live (+20 more)

### Community 7 - "scripts"
Cohesion: 0.14
Nodes (14): scripts, build, build:search, dev, format, format:check, lint, lint:fix (+6 more)

### Community 8 - "docs/page.tsx"
Cohesion: 0.26
Nodes (13): generateMetadata(), generateMetadata(), generateMetadata(), generateMetadata(), Breadcrumbs(), Card, CardContent, CardDescription (+5 more)

### Community 9 - "seo.ts"
Cohesion: 0.09
Nodes (18): siteConfig, .next, LocaleLayout(), viewport, dynamic, GET(), revalidate, xml() (+10 more)

### Community 10 - "config.ts"
Cohesion: 0.10
Nodes (21): featuresConfig, footerConfig, Feature, FeatureSchema, FeaturesConfig, FeaturesConfigSchema, FooterColumn, FooterColumnSchema (+13 more)

### Community 11 - "20 Jahre KOMA-Script: Gestern - Heute - Morgen (DANTE 2014 talk)"
Cohesion: 0.13
Nodes (18): Contributors and helpers named in the talk (Jens-Uwe Morawski, Torsten Krueger, Klaus Hoeppner, Christoph Kaeder, Werner Lemberg, translators), Frank Neukam's Script package for LaTeX 2.09 (predecessor of KOMA-Script), Outlook: LaTeX3 and LuaTeX as open questions for the future of KOMA-Script, License change from nosell to LPPL (around 2000, credited to Thomas Esser), Markus Kohm (author and maintainer of KOMA-Script), New KOMA-Script manual from 2001 (over 200 pages, replaced the ~60-page guide), KOMA-Script 1994: first release with scrbook, scrreprt, scrartcl and typearea, KOMA-Script 3: restructuring started 2002, modularisation, keyval interface, version 3.00 on 2008-11-03 (+10 more)

### Community 12 - "lib/content.ts"
Cohesion: 0.15
Nodes (21): DocsIndexPage(), ExamplesIndexPage(), FriendsIndexPage(), alternatesFor(), latestChange(), LOCALE_TAG, sitemap(), swapLocale() (+13 more)

### Community 13 - "Locale"
Cohesion: 0.11
Nodes (20): Props, Props, Props, Props, HomePage(), Props, generateMetadata(), Props (+12 more)

### Community 14 - "scrhack (Lader der ehemaligen Hack-Module)"
Cohesion: 0.19
Nodes (15): float (Drittanbieter-Paket), floatbytocbasic (float mit tocbasic-Unterstützung), Third Party Enhancements (GitHub-Sammelrepo), tocbasic (KOMA-Script-Paket), Prinzip: Benutzeroberfläche des Originalpakets unverändert lassen, floatrow (Drittanbieter-Paket), floatrowbytocbasic (floatrow mit tocbasic-Unterstützung), lscape (Drittanbieter-Paket) (+7 more)

### Community 15 - "build-search-index.ts"
Cohesion: 0.16
Nodes (16): buildInternalUrl(), CONTENT_ROOT, extractHeadings(), LOCALES, main(), OUT_FILE, PUBLIC_DIR, SECTIONS (+8 more)

### Community 16 - "DIN-Brief mit Briefkopf (German letter template)"
Cohesion: 0.15
Nodes (14): babel with ngerman (German letter template), DIN-Brief mit Briefkopf (German letter template), graphicx (letterhead logo), letter environment (multiple letters for mail merge), \LoadLetterOption{DIN} (DIN letter class option), LuaLaTeX as recommended compiler (no inputenc/fontenc), \setkomavar / \usekomavar variable interface, backaddress option (return address in the address window) (+6 more)

### Community 17 - "KOMA-Script collection"
Cohesion: 0.13
Nodes (17): Script2 (LaTeX 2.09 styles), KOMA-Script issue tracker, Why the default settings are what they are, Frank Neukam, Internal-only classes and packages, KOMA-Script collection, scrbase, scrbook (+9 more)

### Community 18 - "Hero.tsx"
Cohesion: 0.22
Nodes (9): NewsIndexPage(), Hero(), HeroProps, LatestNews(), Badge, BadgeProps, Variant, variants (+1 more)

### Community 19 - "Latentes Gefühl der Überlastung"
Cohesion: 0.13
Nodes (16): Virale Verbreitung schlechten LaTeX-Codes, Vorlage für Abschlussarbeiten (kritisiert), Angeblicher Microsoft-Support-Anruf (Scam), Ständige Unterbrechung von Entwicklungsarbeit durch Support, Waschtag als Allegorie auf die KOMA-Script-Entwicklung, Wenn ein Hobby zum Stressfaktor wird, ist es Arbeit, Eingriffe in LaTeX-Interna durch KOMA-Script 3, Allgemeiner LaTeX-Support in Foren (+8 more)

### Community 20 - "Archiv der Änderungen vor KOMA-Script 3.28"
Cohesion: 0.14
Nodes (15): KOMA-Script Documentation Project, Archiv der Änderungen vor KOMA-Script 3.28, Umstellung der KOMA-Script-Quellen auf UTF-8, Version 2.95 bis 2.98c, Version 3.00 bis 3.09a, Version 3.10 bis 3.19a, Version 3.20 bis 3.27, Archiv älterer KOMA-Script-Artikel (+7 more)

### Community 21 - "The KOMA-Script Collection"
Cohesion: 0.13
Nodes (15): CTAN catalog entry for the KOMA-Script collection, The KOMA-Script Collection, koma-script-source-doc (internal source documentation class), scraddr (reads .adr address files), scrbase (basic functions for classes and packages), scrguide (internal user-documentation class), scrjura (deprecated, wrapper to the contract package), scrkbase (internal features package) (+7 more)

### Community 22 - "Diplomarbeit / Masterarbeit (German thesis template)"
Cohesion: 0.18
Nodes (14): scrbook (KOMA-Script book class), scrlayer-scrpage (configurable page styles, fancyhdr alternative), typearea (typographical calculation of margins and text area), BCOR=12mm and DIV=calc (binding correction and type area), biblatex + biber bibliography workflow, LuaLaTeX with fontspec (German thesis template), microtype (micro-typography in the thesis template), scrbook (used by the German thesis template) (+6 more)

### Community 23 - "komafancychap (fncychap-Kapitelstile für KOMA-Script)"
Cohesion: 0.15
Nodes (15): defoldfonts (alte Schriftbefehle als Notlösung), Veraltete Schriftbefehle (\rm, \sf, \bf, \it, \sc, \tt, \sfb), fncychap (Kapitelstile für Standardklassen), KOMA-Script Documentation Project, KOMA-Script-Klassen scrartcl / scrbook / scrreprt, komafancychap (fncychap-Kapitelstile für KOMA-Script), GitLab-Gruppe „KOMA-Script and Friends“, longtwocolumn (\longtwocolumn statt \twocolumn) (+7 more)

### Community 24 - "scrhack (deprecated spin-off, now only a loader for the enhancement packages)"
Cohesion: 0.23
Nodes (13): float (third-party LaTeX package), floatbytocbasic (makes float use tocbasic), Third Party Enhancements (GitHub collection komascript/third-party-enhancements), tocbasic (KOMA-Script package for table-of-contents-like lists), floatrow (third-party LaTeX package), floatrowbytocbasic (makes floatrow use tocbasic), Hack modules (.hak files) split into independent packages, scrhack (deprecated spin-off, now only a loader for the enhancement packages) (+5 more)

### Community 25 - "Push to Codeberg Job (force --prune mirror of all refs)"
Cohesion: 0.18
Nodes (12): Dependabot Configuration, Dependabot Update Groups (security-patches, next-react, radix-ui, mdx-toolchain, lint-tools), Codeberg Secrets (CODEBERG_TOKEN, CODEBERG_USER, CODEBERG_REPO), Skip Mirror on Dependabot Pushes, GitHub as Single Source of Truth, Codeberg as Exact Mirror, Push to Codeberg Job (force --prune mirror of all refs), Mirror to Codeberg Workflow, git remote set-head --delete before Mirroring (+4 more)

### Community 26 - "Die KOMA-Script-Sammlung"
Cohesion: 0.18
Nodes (12): Dokumentationsbereich der KOMA-Script-Homepage, Häufige Fragen (FAQ), Markus Kohm, Das Pseudonym KOMA, Errata zu den KOMA-Script-Büchern, Das KOMA-Script-Buch, CTAN-Katalogeintrag der KOMA-Script-Sammlung, Fehlende \DocumentMetadata- und Tagging-Unterstützung (+4 more)

### Community 27 - "makelabels (LCO-Datei für \makelabels)"
Cohesion: 0.20
Nodes (12): beamer (LaTeX-Präsentationsklasse), briefdemo2005 (Brieflayout-Präsentation LinuxTag 2005), LCO-Datei (Letter Configuration Option), Trennung von Form und Inhalt (LaTeX-Prinzip), envlab, L3-Programmierschicht (l3kernel), makelabels (LCO-Datei für \makelabels), scrletter (KOMA-Script-Briefpaket) (+4 more)

### Community 28 - "GitHub (Hosting der komascript-Projekte)"
Cohesion: 0.18
Nodes (11): GitHub (Hosting der komascript-Projekte), scrlayer-scrpage (KOMA-Script-Paket), fancyhdr (Drittanbieter-Paket), scrlayer (KOMA-Script-Paket), scrlayer-fancyhdr (fancyhdr-Seitenstile über scrlayer), Problem „No room for new \write“ (16-Schreibdatei-Limit), scrwfile (\newrite-Umleitung über die .aux-Datei), makeidx (LaTeX-Standardpaket) (+3 more)

### Community 29 - "KOMA-Script"
Cohesion: 0.18
Nodes (12): KOMA-Script, KOMA-Script 3.15, scrletter, scrlttr2, Sponsoren und Zuwendungen 2014, KOMA-Script 3.22 (keine Weihnachtsrelease), Danke an unbekannte Spender, Geschenke als Motivation, mehr für sich selbst zu tun (+4 more)

### Community 30 - "komascript.de"
Cohesion: 0.23
Nodes (12): How much does komascript.de cost? (2010-02-01), The new Blog is online (2026-06-26), Fuse.js search, Hugo (static site generator), Everything's new in … July (2026-07-07), Move from dynamic CMS to static pages, Über KOMA-Script und Freunde (DE), GitLab (komascript) (+4 more)

### Community 31 - "Ende der Feature-Entwicklung in KOMA-Script"
Cohesion: 0.20
Nodes (11): scrlayer (Paketfamilie), Alte Zöpfe abschneiden, Entscheidung gegen eine Umstellung auf l3, Kompatibilitätsoption version, Veraltete Font-Befehle mit Fehlermeldung, Neuerungen nur noch auf explizite Nachfrage, Ende der Feature-Entwicklung in KOMA-Script, KOMA-Script 3.28 (+3 more)

### Community 32 - "scrartcl (KOMA-Script-Artikelklasse)"
Cohesion: 0.22
Nodes (10): Entfernung des titlesec-Hacks aus den KOMA-Script-Klassen, Einführung der Wrapper-Klassen in 3.27, article (LaTeX-Standardklasse), report (LaTeX-Standardklasse), scrartcl (KOMA-Script-Artikelklasse), scrarticle (Wrapper-Klasse), scrextend (KOMA-Script-Funktionen für Standardklassen), scrfontsizes (Schriftgrößen-Dateien) (+2 more)

### Community 33 - "DTK-Artikel mit Beteiligung des KOMA-Script-Autors"
Cohesion: 0.22
Nodes (10): Vortrag „20 Jahre KOMA-Script“ (DANTE 2014 Heidelberg), Nutzungsbedingungen der Vortragsbeispiele, Vortrag „Tipps und Tricks mit KOMA-Script“ (DANTE-Herbsttagung 2014 Karlsruhe), Die TeXnische Komödie (DANTE-Zeitschrift), DTK-Artikel mit Beteiligung des KOMA-Script-Autors, KOMA-Script als Werkzeug für Paketautoren, nomencl (Nomenklaturpaket), scrbase (Grundfunktionen) (+2 more)

### Community 34 - "gridset (experimenteller registerhaltiger Satz)"
Cohesion: 0.22
Nodes (10): gridset (experimenteller registerhaltiger Satz), Ehemaliges Forum komascript.de, Maintainer gesucht / kein Support, Registerhaltiger Satz, Mailingliste TeX-D-L, marginalia (Alternativpaket), marginnote (Randnotiz ohne Float), \marginpar (LaTeX-Kernanweisung, float-basiert) (+2 more)

### Community 35 - "Ende des KOMA-Script Documentation Project"
Cohesion: 0.22
Nodes (10): KOMA-Script Documentation Project, Eigene Minimalvorlage im SourceForge-Wiki, Kritik am YouTube-LaTeX-Tutorial, Ende des KOMA-Script Documentation Project, Selektive Migration alter Blog-Beiträge, hugo-book Theme, KOMA-Script and Friends, Fuse.js (statische Suche) (+2 more)

### Community 36 - "Splitting the bundle into smaller projects (since 2018)"
Cohesion: 0.24
Nodes (10): Why hasn't there been a new KOMA-Script in a year? (2013-07-24), Release delay through lack of beta testers, Häufige Fragen und ihre Antworten (DE), Splitting the bundle into smaller projects (since 2018), Minimal working example (MWE), Frequently Asked Questions (EN), scrdate, scrhack (+2 more)

### Community 37 - "wsu (example LCO file implementing the Washington State University letterhead)"
Cohesion: 0.31
Nodes (9): beamer (LaTeX presentation class), briefdemo2005 (LinuxTag 2005 presentation on separation of form and content), LCO file (Letter Configuration Option), L3 programming layer of the LaTeX kernel, makelabels (LCO file providing \makelabels for scrlttr2 and scrletter), scrletter (KOMA-Script letter package), scrlttr2 (KOMA-Script letter class), Die TeXnische Komoedie 4/2012, pages 58-73 (article by Markus Kohm) (+1 more)

### Community 38 - "gridset"
Cohesion: 0.22
Nodes (9): Alexander (Anforderungsgeber für scrjura), gridset, KOMA-Script, Neue Ideen statt Redesign als Entwicklungsmotivation, scrjura, tocstyle, Dominik Wagenführ, gridset (+1 more)

### Community 39 - "komascript.de (Online-Start 23. April 2004)"
Cohesion: 0.22
Nodes (9): Colin (Mitumsetzer von komascript.de), CTAN, Drupal (CMS von komascript.de), komascript.de (Online-Start 23. April 2004), Luzia (Disketten-Verteilung früher Versionen), Erste KOMA-Script-Mailingliste (Dezember 2000), Raymond (Mitumsetzer von komascript.de), Robin (Mailingliste, CVS, Zope-Wiki) (+1 more)

### Community 40 - "MetaPost"
Cohesion: 0.22
Nodes (9): docstrip, Jens-Uwe (Anleitung, MetaPost-Grafiken), luamplib, MetaPost, LaTeX picture-Umgebung, PSTricks, TikZ, Mitstreiter über die Jahrzehnte (Luzia, Axel, Jens-Uwe, Torsten, Elke, Falk, Uwe, Gernot, Krickette, Karl) (+1 more)

### Community 41 - "Script2e (Vorläufer von KOMA-Script)"
Cohesion: 0.22
Nodes (9): Buchgestaltung und Satzqualität, Das gedruckte Buch als Erlebnis, Eigene Diplomarbeit gegen formale Vorgaben gesetzt, E-Book-Reader, Jan Tschichold, LaTeX 2e, MausNet und UseNet, Script2e (Vorläufer von KOMA-Script) (+1 more)

### Community 42 - "Download (EN)"
Cohesion: 0.25
Nodes (9): SourceForge mirror of the site, Download (DE), Codeberg (komascript), MiKTeX, Download (EN), SourceForge project hosting, Subversion repository (planned move to Git), TeX Live (+1 more)

### Community 43 - "scrletter (Wrapper-Klasse)"
Cohesion: 0.29
Nodes (8): amsthm-Patch gegen doppelten Absatzabstand, book (LaTeX-Standardklasse), letter (LaTeX-Standardklasse), scrbook (KOMA-Script-Buchklasse), scrletter (Wrapper-Klasse), scrletter (Paket), scrlttr2 (KOMA-Script-Briefklasse), Axel Kielhorn (ursprüngliche Briefklasse scrletter)

### Community 44 - "Thanks to All My Supporters"
Cohesion: 0.25
Nodes (8): KOMA (the pseudonym of Kohm, Markus), Markus Kohm (KOMA-Script author), No \DocumentMetadata / tagging support in KOMA-Script classes, Frank Neukam (Script 1 and Script 2.0 for LaTeX 2.09), Thanks to All My Supporters, Ulrike Fischer (tagging code, bug fixes), Best thanks is sharing knowledge in forums and issue trackers, KOMA's Wishlist

### Community 45 - "komafancychap (fncychap chapter styles for KOMA-Script classes)"
Cohesion: 0.25
Nodes (8): fncychap (chapter style package for standard classes), KOMA-Script Documentation Project, komafancychap (fncychap chapter styles for KOMA-Script classes), longtwocolumn (\longtwocolumn spanning several pages), scrartcl (KOMA-Script article class), \twocolumn (LaTeX core command), The Title Page Project (2009, part of the KOMA-Script Documentation Project), uni-titlepage (real-world title pages behind a defined interface)

### Community 46 - "Markus Kohm"
Cohesion: 0.25
Nodes (8): goLaTeX-Forum, komascript.de, Markus Kohm, OpenSource-Motivation als Freizeitentwickler, Weinlieferung als Anwender-Aufmerksamkeit, Ehrenamtliches Engagement von Markus Kohm, komascript.de, Amazon-Wunschliste

### Community 47 - "komascript.de"
Cohesion: 0.25
Nodes (8): komascript.de, Raymond (Administrator und Finanzierungsträger), Robin (Domain-Sponsor von komascript.de), tohserver.com (Hosting-Projekt), komascript.de, Raymond (Betreiber, Serverkapazität), Sponsoren-Liste, Werbe- und Trackingfreiheit von komascript.de

### Community 48 - "BerliOS"
Cohesion: 0.25
Nodes (8): BerliOS, Fraunhofer (Finanzier von BerliOS), Anerkennung der LPPL als freie Lizenz durch BerliOS, Projekt koma-script3 auf BerliOS, Release-Datenbank aller KOMA-Script-Versionen seit 2006, Verlust der Repository-Historie von splitindex, Sarovar.org, splitindex

### Community 49 - "Englische KOMA-Script-Anleitung"
Cohesion: 0.25
Nodes (8): KOMA-Script-Buch, 5. Auflage, Englische KOMA-Script-Anleitung, Karl Hagen (Neuübersetzung der englischen Anleitung), KOMA-Script 3.24, KOMA-Script 3.25, KOMA-Script-Buch, 6. Auflage, TeX Live 2018, Zweisprachigkeit (Deutsch und Englisch)

### Community 50 - "komascript.de (21 Jahre)"
Cohesion: 0.25
Nodes (8): komascript.de, Serverumzug und Release-Erzeugung auf dem Server, Drupal (CMS von komascript.de), komascript.de (21 Jahre), Robin (Domain-Sponsor), Hugo (Static Site Generator), Spiegelung auf SourceForge, Statische Seiten statt CMS

### Community 51 - "scrartcl"
Cohesion: 0.29
Nodes (8): luaindex, MakeIndex, Where on the page was the index entry created? (2011-05-28), scraddr, scrartcl, scrarticle (wrapper), scrletter, scrlttr2

### Community 52 - "Community (EN)"
Cohesion: 0.29
Nodes (8): Am I crazy? (2013-04-22), KOMA wish list, Community (DE), KOMA-Script wiki on SourceForge, Mastodon @koma@mastodontech.de, Community (EN), TeX Stack Exchange (koma-script tag), TeXwelt (German LaTeX forum)

### Community 53 - "dependencies"
Cohesion: 0.29
Nodes (7): clsx, flexsearch, dependencies, clsx, flexsearch, @radix-ui/react-tooltip, @radix-ui/react-tooltip

### Community 54 - "Documentation (EN section index)"
Cohesion: 0.29
Nodes (7): Documentation (EN section index), FAQ page (/en/faq), Original-quote convention for migrated Markus Kohm content, English KOMA-Script Wiki HowTo pages on SourceForge, KOMA-Script Archive (older material), KOMA-Script Documentation Project, German-only policy for archive articles

### Community 55 - "scrlttr2 (KOMA-Script letter class)"
Cohesion: 0.20
Nodes (10): scrartcl (KOMA-Script article class), scrarticle (wrapper around scrartcl), scrextend (KOMA-Script class features for other classes), scrfontsizes.sty (generate font size files), scrletter (class combining scrartcl with the scrletter package), scrletter (package providing scrlttr2 features to other classes), scrlttr2 (KOMA-Script letter class), Axel Kielhorn (original scrletter letter class) (+2 more)

### Community 56 - "Codeberg (Hosting der komascript-Projekte)"
Cohesion: 0.18
Nodes (15): Aufteilung von KOMA-Script in kleinere Projekte, Codeberg (Hosting der komascript-Projekte), contract (Vertrags-Paket, Spin-Off), CTAN (Comprehensive TeX Archive Network), KOMA-Script (Sammlung), contract-lab (experimentelles Vertrags-Paket), \DocumentMetadata (LaTeX-Kern seit 2026), latex-lab (+7 more)

### Community 57 - "contract (KOMA-Script spin-off, formerly scrjura)"
Cohesion: 0.29
Nodes (7): Breaking KOMA-Script down into smaller independent projects, contract (KOMA-Script spin-off, formerly scrjura), contract-lab (experimental contract package on latex-lab), \DocumentMetadata (2026 LaTeX mode switch), latex-lab (evolving LaTeX core replacement under \DocumentMetadata), scrjura (former name of contract inside KOMA-Script), PDF tagging support (contributed by Ulrike Fischer, since v1.5)

### Community 58 - "KOMA-Script bundle"
Cohesion: 0.33
Nodes (7): KOMA-Script bundle, defoldfonts (restores obsolete font commands \rm, \sf, \tt, \bf, \it, \sc, \sfb), Obsolete two-letter font commands as stopgap for old BibTeX styles, babel (LaTeX language support), \newdaylanguage (user-defined weekday language support), scrdate (weekday names and numbers for any date), scrtime (prints the time of the LaTeX run)

### Community 59 - "KOMA-Script"
Cohesion: 0.29
Nodes (7): Distributoren von LaTeX-Paketen, KOMA-Script, LaTeX, LPPL (LaTeX Project Public License), TDS-Hierarchie, Lizenz mit Verkaufsverbot (Vorgänger der LPPL-Nutzung), Forderung nach vollständiger KOMA-Script-Verteilung

### Community 60 - "Schließung von BerliOS zum 31. Dezember 2011"
Cohesion: 0.29
Nodes (7): BerliOS, CVS-Repository für KOMA-Script, Subversion-Repository für KOMA-Script, Schließung von BerliOS zum 31. Dezember 2011, Erwogene Umstellung auf git, Halbautomatische Release-Erzeugung, SVN-Repository von KOMA-Script

### Community 61 - "Features (EN)"
Cohesion: 0.29
Nodes (7): Funktionen (DE), fontsize in \documentclass vs. \KOMAoptions, \KOMAoption configuration mechanism, scrlttr2 letter locales (DIN, DINmtext, US, SN, SNleft, NF, JP), Features (EN), scrguide (German manual), scrguien (English manual)

### Community 62 - "lscapeenhanced (fixes lscape \textheight/\textwidth, can load pdflscape)"
Cohesion: 0.33
Nodes (6): lscape (third-party landscape package), lscapeenhanced (fixes lscape \textheight/\textwidth, can load pdflscape), scrlayer-scrpage (KOMA-Script page style package), fancyhdr (third-party page style package), scrlayer (KOMA-Script layer-based page style engine), scrlayer-fancyhdr (redefines fancyhdr page styles using scrlayer)

### Community 63 - "KOMA-Script 3"
Cohesion: 0.33
Nodes (6): Irrtum: KOMA-Script sei kompliziert, KOMA-Script 3, LaTeX, Neues Benutzerinterface von KOMA-Script 3, scrlttr2, LaTeX-Standardklassen

### Community 64 - "SplitIndex"
Cohesion: 0.40
Nodes (6): CTAN, Daniel (CTAN- und TeX-Live-Release-Betreuer), marginnote, SplitIndex, Support-Philosophie: Erklärung statt bloßer Lösung, TeX Live

### Community 65 - "LCO-Dateien (letter class options)"
Cohesion: 0.40
Nodes (6): LCOs für amerikanische Briefe, Anwendermitarbeit als Entwicklungstreiber, LCO für französische Briefe, LCO-Dateien (letter class options), scrlttr2, visualize.lco

### Community 66 - "No cookies, no tracking, no external resources"
Cohesion: 0.40
Nodes (6): netcup GmbH (hosting processor), Datenschutz (DE), GitHub (komascript), No cookies, no tracking, no external resources, Privacy (EN), Pre-launch HTTP Basic authentication

### Community 67 - "KOMA-Script book (7th edition, Lehmanns Media / Edition DANTE)"
Cohesion: 0.33
Nodes (6): KOMA-Script book example code archives, DANTE e.V., KOMA-Script book (7th edition, Lehmanns Media / Edition DANTE), Markus Kohm, CTAN, LPPL maintainer role

### Community 68 - "LaTeX Project Public License 1.3c"
Cohesion: 0.47
Nodes (6): Impressum (DE), Lizenz (DE), Moritz Kohm (site provider), Imprint (EN), LaTeX Project Public License 1.3c, License (EN)

### Community 69 - "proxy.ts"
Cohesion: 0.53
Nodes (5): buildCsp(), config, intlMiddleware, middleware(), patchLocaleCookie()

### Community 70 - "scrlayer (Ebenenmodell für Seitenstile)"
Cohesion: 0.50
Nodes (5): scrlayer-fancyhdr (experimentelle Brücke), fancyhdr (Seitenstilpaket eines Drittanbieters), scrlayer (Ebenenmodell für Seitenstile), scrlayer-notecolumn (Proof of Concept für Ebenen), scrlayer-scrpage (konfigurierbare Seitenstile)

### Community 71 - "SourceForge-Projekt koma-script"
Cohesion: 0.40
Nodes (5): Subversion-Repository auf SourceForge, Geplante Umstellung auf Git und Umzug nach Codeberg, SourceForge-Projekt koma-script, Archiv alter KOMA-Script-Releases, KOMA-Script-Wiki auf SourceForge

### Community 72 - "Split-off candidates from the KOMA-Script bundle"
Cohesion: 0.40
Nodes (5): scrdate (language independent date formatting), scrlayer (layers combined into page styles), scrlayer-notecolumn (proof of concept for scrlayer layers), scrtime (formatting of the current time), Split-off candidates from the KOMA-Script bundle

### Community 73 - "Header.tsx"
Cohesion: 0.20
Nodes (12): navigationConfig, HeaderProps, ICONS, MobileItem(), MobileMenu(), Props, isActive(), Navbar() (+4 more)

### Community 74 - "marginnote (non-floating \marginnote alternative to \marginpar)"
Cohesion: 0.50
Nodes (5): gridset (experimental grid typesetting, unmaintained), TeX-D-L mailing list, marginalia (suggested alternative package), marginnote (non-floating \marginnote alternative to \marginpar), \marginpar (LaTeX core margin note, float-based)

### Community 75 - "scrwfile (routes writes through the .aux file to avoid write-register exhaustion)"
Cohesion: 0.50
Nodes (5): scrwfile (routes writes through the .aux file to avoid write-register exhaustion), TeX write-register limit ("No room for new \write"), makeidx / makeindex (standard index tooling), splitidx (LaTeX package for multiple indexes), splitindex (index preprocessor plus the splitidx LaTeX package)

### Community 76 - "Nächste Auflage des KOMA-Script-Buchs"
Cohesion: 0.40
Nodes (5): Nächste Auflage des KOMA-Script-Buchs, OpenSource versus kostenlos, scrjura, tocstyle, Zeitenwandel der Software-Weitergabe

### Community 77 - "titlepage-Paket"
Cohesion: 0.40
Nodes (5): Wechselnde Anforderungen der Distributoren an Release-Archive, KOMA-Script Documentation Project, Verzögerung von Releases durch Bürokratie, titlepage-Paket, uni-titlepage

### Community 78 - "Migration der KOMA-Script-Quellen nach SourceForge"
Cohesion: 0.40
Nodes (5): SourceForge, Automatisierte Paket- und Release-Erstellung, BerliOS, Migration der KOMA-Script-Quellen nach SourceForge, SourceForge-Repository von KOMA-Script

### Community 79 - "MlBibTeX"
Cohesion: 0.40
Nodes (5): biber, biblatex, Jean-Michel Hufflen, MlBibTeX, Ulrike Fischer

### Community 80 - "scrlfile (Datei-Hooks)"
Cohesion: 0.50
Nodes (4): scrlfile (Datei-Hooks), scrlfile-hook (generische Hooks, aktueller Kernel), scrlfile-hook-3.34 (alter Kernel, alte Hook-Syntax), scrlfile-patcholdlatex (Kernel ohne generische Hooks)

### Community 81 - "KOMA-Script project hosting on SourceForge"
Cohesion: 0.50
Nodes (4): Planned migration from Subversion to Git / Codeberg, KOMA-Script Subversion repository on SourceForge, KOMA-Script project hosting on SourceForge, Old KOMA-Script releases on SourceForge

### Community 82 - "scrlfile (load file hooks)"
Cohesion: 0.50
Nodes (4): scrlfile (load file hooks), scrlfile-hook (generic hooks for current LaTeX kernel), scrlfile-hook-3.34 (generic hooks for older LaTeX kernel syntax), scrlfile-patcholdlatex (patches kernels without generic hooks)

### Community 83 - "KOMA-Script-Buch (3. Auflage)"
Cohesion: 0.50
Nodes (4): KOMA-Script-Buch (3. Auflage), Lehmanns Fachbuchhandlung (Herr Kaeder, Hamburg), Markus Kohm, Testleser des KOMA-Script-Buches

### Community 84 - "Voreinstellungen von KOMA-Script"
Cohesion: 0.50
Nodes (4): Errata-Seite des KOMA-Script-Buches, Option `version` zur Kompatibilitätssicherung, Script 2.0 für LaTeX 2.09, Voreinstellungen von KOMA-Script

### Community 85 - "KOMA-Script-Buch, dritte Auflage"
Cohesion: 0.67
Nodes (3): KOMA-Script-Buch, dritte Auflage, LaTeX-Einführung der Niedermairs, Typografische Hintergründe in der Anleitung

### Community 86 - "KOMA-Script 3.02b"
Cohesion: 0.67
Nodes (3): BerliOS, KOMA-Script 3.02a (versehentliche Bezeichnung), KOMA-Script 3.02b

### Community 87 - "KOMA-Script Documentation Project"
Cohesion: 0.67
Nodes (3): KOMA-Script and Friends (Nachfolgeprojekt), KOMA-Script Documentation Project, Spam-Filter des Forums

### Community 88 - "Blockierte KOMA-Script-Release"
Cohesion: 0.67
Nodes (3): Mangel an Beta-Testern und Testlesern, KOMA-Script, Blockierte KOMA-Script-Release

### Community 89 - "Weihnachtsgruß 2015"
Cohesion: 0.67
Nodes (3): Dr. Ingeborg Syllm-Rapoport, Weihnachtsgruß 2015, Frieden beginnt im Kleinen

### Community 90 - "Altes Sarovar-CVS-Repository"
Cohesion: 0.67
Nodes (3): Altes Sarovar-CVS-Repository, Migration der Historie in ein Subversion-Repository, Zugriff auf alte Revisionen über das Web-Frontend

### Community 91 - "scrlayer"
Cohesion: 0.67
Nodes (3): scrlayer, scrlayer-notecolumn, scrlayer-scrpage

### Community 92 - "codeberg-nobg.svg - Codeberg badge, transparent background"
Cohesion: 0.67
Nodes (3): codeberg-nobg.svg - Codeberg badge, transparent background, github.png - GitHub wordmark and Octocat, gitlab.svg - GitLab tanuki logo and wordmark

### Community 101 - "Button.tsx"
Cohesion: 0.16
Nodes (9): Props, SearchDialog(), SearchTrigger(), Button, ButtonProps, ButtonSize, ButtonVariant, sizeClasses (+1 more)

### Community 132 - "cn"
Cohesion: 0.21
Nodes (10): CodeBlock(), CodeBlockProps, Props, TableOfContents(), LocaleSwitcher(), NAMES, ThemeItem(), ThemeToggle() (+2 more)

### Community 133 - "package.json"
Cohesion: 0.17
Nodes (11): author, description, engines, node, pnpm, license, name, packageManager (+3 more)

### Community 134 - "Footer.tsx"
Cohesion: 0.29
Nodes (7): Footer(), FooterProps, CodebergIcon(), GitHubIcon(), IconProps, isExternal(), t()

### Community 135 - "next.config.ts"
Cohesion: 0.50
Nodes (3): nextConfig, securityHeaders, withNextIntl

## Ambiguous Edges - Review These
- `contract-lab (experimental contract package on latex-lab)` → `PDF tagging support (contributed by Ulrike Fischer, since v1.5)`  [AMBIGUOUS]
  content/friends/en/contract-lab.md · relation: conceptually_related_to
- `Bug Report Issue Template` → `Security Policy / Vulnerability Reporting`  [AMBIGUOUS]
  SECURITY.md · relation: conceptually_related_to
- `SemiHollow.jpg - photo of a sunburst semi-hollow electric guitar on a stand` → `Markus Kohm (author and maintainer of KOMA-Script)`  [AMBIGUOUS]
  public/images/komascript/SemiHollow.jpg · relation: conceptually_related_to

## Knowledge Gaps
- **400 isolated node(s):** `withNextIntl`, `securityHeaders`, `nextConfig`, `name`, `version` (+395 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **46 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **What is the exact relationship between `contract-lab (experimental contract package on latex-lab)` and `PDF tagging support (contributed by Ulrike Fischer, since v1.5)`?**
  _Edge tagged AMBIGUOUS (relation: conceptually_related_to) - confidence is low._
- **What is the exact relationship between `Bug Report Issue Template` and `Security Policy / Vulnerability Reporting`?**
  _Edge tagged AMBIGUOUS (relation: conceptually_related_to) - confidence is low._
- **What is the exact relationship between `SemiHollow.jpg - photo of a sunburst semi-hollow electric guitar on a stand` and `Markus Kohm (author and maintainer of KOMA-Script)`?**
  _Edge tagged AMBIGUOUS (relation: conceptually_related_to) - confidence is low._
- **Why does `Locale` connect `Locale` to `utils.ts`, `[...slug]/page.tsx`, `Button.tsx`, `Footer.tsx`, `cn`, `docs/page.tsx`, `seo.ts`, `Header.tsx`, `config.ts`, `lib/content.ts`, `build-search-index.ts`, `Hero.tsx`?**
  _High betweenness centrality (0.023) - this node is a cross-community bridge._
- **Why does `.next` connect `seo.ts` to `compilerOptions`, `[...slug]/page.tsx`, `lib/content.ts`, `next.config.ts`?**
  _High betweenness centrality (0.022) - this node is a cross-community bridge._
- **Why does `exclude` connect `compilerOptions` to `seo.ts`?**
  _High betweenness centrality (0.021) - this node is a cross-community bridge._
- **What connects `withNextIntl`, `securityHeaders`, `nextConfig` to the rest of the system?**
  _400 weakly-connected nodes found - possible documentation gaps or missing edges._