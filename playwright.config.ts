import { defineConfig, devices } from "@playwright/test";

/**
 * E2E configuration.
 *
 * Runs against the **production build**, not `next dev`: the strict nonce CSP
 * keeps `next dev` from hydrating, so a click test would hit a dead page.
 * `pnpm run start:e2e` therefore needs a finished build, in CI
 * `pnpm run build` runs right before it.
 *
 * Own port, so a `pnpm dev` (3000) running alongside does not get in the way.
 */
const PORT = 3218;

export default defineConfig({
  testDir: "./e2e",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: process.env.CI ? [["github"], ["list"]] : "list",
  use: {
    baseURL: `http://127.0.0.1:${PORT}`,
    trace: "on-first-retry",
  },
  projects: [{ name: "chromium", use: { ...devices["Desktop Chrome"] } }],
  webServer: {
    command: "pnpm run start:e2e",
    url: `http://127.0.0.1:${PORT}/de`,
    reuseExistingServer: !process.env.CI,
    timeout: 120_000,
  },
});
