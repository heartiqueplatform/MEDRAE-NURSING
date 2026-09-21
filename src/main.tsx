import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import './index.css';

// ═══════════════════════════════════════════════════════════
// 🚀 APP VERSION — BUMP THIS ON EVERY DEPLOY
// ═══════════════════════════════════════════════════════════
// Format: MAJOR.MINOR.PATCH  (semver)
// - Bump PATCH (1.0.0 → 1.0.1) for small tweaks
// - Bump MINOR (1.0.0 → 1.1.0) for new features
// - Bump MAJOR (1.0.0 → 2.0.0) for breaking changes
//
// When this string changes, every user's browser will:
//   1. Detect the new version on next load
//   2. Wipe all caches (Cache Storage, localStorage flags)
//   3. Hard-refresh to fetch fresh assets
// ═══════════════════════════════════════════════════════════
const APP_VERSION = '1.0.1';

const STORAGE_KEY = 'medrae_app_version';
const VERSION_URL = '/version.json'; // served from /public/version.json

// ─────────────────────────────────────────────────────────────
// 1. Wipe all client-side caches (Cache Storage API)
// ─────────────────────────────────────────────────────────────
async function nukeAllCaches(): Promise<void> {
  try {
    if ('caches' in window) {
      const keys = await caches.keys();
      await Promise.all(keys.map((k) => caches.delete(k)));
      console.log(`[cache] Cleared ${keys.length} cache bucket(s)`);
    }
  } catch (err) {
    console.warn('[cache] Failed to clear caches:', err);
  }
}

// ─────────────────────────────────────────────────────────────
// 2. Unregister all service workers (if any PWA is installed)
// ─────────────────────────────────────────────────────────────
async function unregisterAllSW(): Promise<void> {
  try {
    if ('serviceWorker' in navigator) {
      const regs = await navigator.serviceWorker.getRegistrations();
      await Promise.all(regs.map((r) => r.unregister()));
      if (regs.length > 0) {
        console.log(`[sw] Unregistered ${regs.length} service worker(s)`);
      }
    }
  } catch (err) {
    console.warn('[sw] Failed to unregister service workers:', err);
  }
}

// ─────────────────────────────────────────────────────────────
// 3. Clear per-version localStorage flags (but NOT auth tokens)
//    Add keys here you want wiped on version change.
// ─────────────────────────────────────────────────────────────
const VOLATILE_KEYS = [
  'medrae_landing_cache',
  'medrae_hero_cache',
  'medrae_podcast_cache',
  // Add more non-critical keys here as you build the app.
  // ⚠️  Do NOT add 'supabase.auth.token' or any auth key.
];

function clearVolatileLocalStorage(): void {
  try {
    VOLATILE_KEYS.forEach((k) => {
      if (localStorage.getItem(k) !== null) {
        localStorage.removeItem(k);
        console.log(`[storage] Removed stale key: ${k}`);
      }
    });
  } catch (err) {
    console.warn('[storage] Failed to clear local storage:', err);
  }
}

// ─────────────────────────────────────────────────────────────
// 4. Also clear sessionStorage (safe — it dies with tab anyway)
// ─────────────────────────────────────────────────────────────
function clearSessionStorage(): void {
  try {
    sessionStorage.clear();
  } catch {
    /* noop */
  }
}

// ─────────────────────────────────────────────────────────────
// 5. Detect version change and run the full wipe + reload
// ─────────────────────────────────────────────────────────────
async function runVersionCheck(): Promise<void> {
  try {
    const storedVersion = localStorage.getItem(STORAGE_KEY);

    // ── If versions match, we're done — boot normally ──
    if (storedVersion === APP_VERSION) return;

    // ── First-ever visit: no stored version → just record it, no reload ──
    if (storedVersion === null) {
      localStorage.setItem(STORAGE_KEY, APP_VERSION);
      console.log(`[version] First load — recorded v${APP_VERSION}`);
      return;
    }

    // ── Version changed → nuke everything, then hard reload once ──
    console.log(`[version] Upgrade detected: v${storedVersion} → v${APP_VERSION}`);

    await nukeAllCaches();
    await unregisterAllSW();
    clearVolatileLocalStorage();
    clearSessionStorage();

    // Record new version BEFORE reload so we don't loop
    localStorage.setItem(STORAGE_KEY, APP_VERSION);

    // Force a hard reload bypassing the HTTP cache
    window.location.reload();
    // Note: This will reload the page. Because we've already
    // written the new version to storage, the reloaded page
    // will skip this branch and boot cleanly.
  } catch (err) {
    // Never block the app because of a version-check failure
    console.warn('[version] Check failed (non-fatal):', err);
  }
}

// ─────────────────────────────────────────────────────────────
// 6. Also verify against /public/version.json (for CDN-cached HTML)
//    This catches the case where the HTML itself is stale.
// ─────────────────────────────────────────────────────────────
async function verifyServerVersion(): Promise<void> {
  try {
    const res = await fetch(`${VERSION_URL}?t=${Date.now()}`, {
      cache: 'no-store',
      headers: { 'Cache-Control': 'no-cache' },
    });
    if (!res.ok) return;
    const data = (await res.json()) as { version?: string };
    if (data?.version && data.version !== APP_VERSION) {
      console.warn(
        `[version] Server has v${data.version}, this build is v${APP_VERSION}. ` +
        `This usually means the HTML is stale. Reloading to fetch fresh HTML…`
      );
      await nukeAllCaches();
      await unregisterAllSW();
      // Force a full reload without cache
      window.location.reload();
    }
  } catch {
    /* offline or blocked — ignore */
  }
}

// ─────────────────────────────────────────────────────────────
// 🚀 BOOTSTRAP
// ─────────────────────────────────────────────────────────────
(async () => {
  // Run synchronous-ish version check first, THEN boot the app.
  // If an upgrade is detected, this function will trigger a reload
  // and never reach createRoot — that's the intent.
  await runVersionCheck();

  // Boot the app
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StrictMode>
  );

  // After boot, do a background server-version sanity check (non-blocking)
  verifyServerVersion();
})();