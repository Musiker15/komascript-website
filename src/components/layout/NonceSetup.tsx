"use client";

import { setNonce } from "get-nonce";

/**
 * Passes the CSP nonce on to `react-style-singleton`.
 *
 * Radix locks background scrolling behind modal overlays (search dialog,
 * mobile menu). `react-remove-scroll` does that by appending a `<style>` to
 * `<head>` at runtime. Without a nonce, `style-src-elem 'self' 'nonce-...'`
 * blocks that tag: every opening logged a CSP violation, and the page kept
 * scrolling behind the open dialog.
 *
 * `react-style-singleton` asks `get-nonce` for the nonce, so one `setNonce()`
 * is enough for the injected tag to carry it and pass the policy.
 *
 * The call sits in render on purpose, not in an effect: a dialog appends its
 * tag on first open, which can happen before an effect has run. `setNonce`
 * only writes a module variable, calling it again with the same value is free.
 */
export function NonceSetup({ nonce }: { nonce?: string }) {
  if (nonce) setNonce(nonce);
  return null;
}
