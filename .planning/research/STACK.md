# Stack Research

**Domain:** Mobile French-learning app (Expo/React Native + Supabase) — closing 7 specific launch-readiness gaps in a mature, solo-maintained codebase
**Researched:** 2026-09-19
**Confidence:** MEDIUM-HIGH (verified against npm registry versions, official Expo/Supabase/Adapty docs, and the current codebase; two items flagged LOW where training data or a single source was the only backing)

## Ground truth checked before recommending anything

Before recommending anything, the actual code for the two most consequential gaps was read directly, not assumed from CONCERNS.md's summary:

- `ealch-v2/supabase/functions/tts/index.ts` — deployed with `supabase functions deploy tts --no-verify-jwt` (confirmed in the file's own deploy comment). It already imports `jsr:@supabase/supabase-js@2` and holds a service-role client in-function (used today only to read `system_config`). This means the auth/quota fix is a **code change to an existing import**, not a new dependency.
- `ealch-v2/app.json` — `extra.eas.projectId` and `updates.url` are already configured, and `expo-notifications` is already an installed plugin. Push token registration (gap 6) is **pure wiring**, not a new dependency.
- `ealch-v2/package.json` — confirms **zero test-rendering tooling** (no Jest, no RNTL, no ESLint at all) exists today; `node --test` is the only runner. This changes the shape of the testing recommendation (below).

This matters for a solo, budget-conscious app: two of the seven gaps need **no new package at all**, only a pattern applied to libraries already installed.

## Recommended Stack

### Core Technologies

| Technology | Version | Purpose | Why Recommended |
|------------|---------|---------|-----------------|
| `expo-sqlite` | `~57.0.3` (SDK-57-aligned; latest overall is 58.x for SDK 58, do not install that) | Local content store — replaces the single AsyncStorage JSON blob for the content snapshot | Solves gap 4 (cold start) *and* gap 5 (30 MB ceiling) with one change. First-party Expo SDK module — config-plugin autolinked, versioned in lockstep with Expo, zero native-config risk beyond a `expo prebuild`. SQLite has no practical 6 MB ceiling (routinely holds hundreds of MB on mobile) and lets `initContent()` query only the lesson rows a screen needs instead of parsing one 4.66 MB JSON file into memory at module scope. This is the one gap in this list that genuinely warrants a new dependency — everything else is a pattern fix. |
| `jest` + `jest-expo` | `jest ^29.x`, `jest-expo ~57.0.5` (installed together via `npx expo install jest jest-expo --dev`, which resolves the SDK-57-correct pin) | Test runner + Expo preset, scoped *only* to component-rendering tests | Gap 7 needs an actual render tree (JSX, RN host components, accessibility tree) to assert against. `node --test` (the existing runner for the 844 pure-logic tests) has no DOM/render environment and does not transform JSX — verified: teams that try this fall back to Jest or Vitest for component tests and keep the native runner for logic/util tests only. `jest-expo` is the Expo-maintained preset (`npm view jest-expo@57.0.5` shows `react-test-renderer: 19.2.3` pinned to match this app's `react@19.2.3` exactly) so it is the only option that won't drift from the installed React version. |
| `@testing-library/react-native` | `^14.0.1` | Component rendering + accessibility-tree queries | Peer deps (`react-native >=0.78`, `react >=19.0.0`, `jest >=29.0.0`) are all satisfied by the current stack. Critically, RNTL's `getByRole`/accessibility queries let gap-3 fixes (accessibilityRole/label on `Press`) be asserted by a real test instead of only a manual TalkBack pass — this is the load-bearing reason to add it now rather than later, since it directly tests gap 3's fix. Do **not** additionally install `@testing-library/jest-native` — its matchers were merged into `@testing-library/react-native` core as of v12.4+; the separate package is deprecated. |

### Supporting Libraries / Patterns (no new package)

| Gap | Library already installed | Pattern to add | When to Use |
|-----|---------------------------|-----------------|-------------|
| 1. TTS edge function auth/rate-limit | `@supabase/supabase-js` (already imported in `tts/index.ts`) | Remove `--no-verify-jwt` from the deploy command (or keep the function public but manually validate the `Authorization: Bearer <user JWT>` header via `supabase.auth.getUser(jwt)`), then add a `tts_usage(user_id, day, char_count)` Postgres table and an atomic upsert-and-check (`INSERT ... ON CONFLICT DO UPDATE ... RETURNING char_count`) before calling any provider. Same service-role client already in the file does the check. | Always — this is the fix, not an option |
| 2. Cross-device entitlement sync | `react-native-adapty` (already 4.0.1), `@supabase/supabase-js` | Configure an Adapty **Webhook integration** (Adapty dashboard → Integrations → Webhooks; no SDK change) pointing at a new Supabase Edge Function (`sync-entitlement`) that writes `{user_id, product_id, expires_at, is_active}` into a Postgres `entitlements` table on every purchase/renewal/refund event, verified with Adapty's webhook signature. On the client, replace "trust local AsyncStorage cache" with "query `entitlements` on login and on `AppState → active`, fall back to cache only when offline." | This is Adapty's documented pattern (server-side webhook → your DB) rather than polling Adapty's REST API from the client, and reuses the edge-function pattern already established by `tts` and `coach` |
| 3. Accessibility (TalkBack) | React Native core (`accessibilityRole`, `accessibilityLabel`, `accessibilityHint`, `accessibilityState`) — zero dependency, built into `react-native` 0.86.2 already installed | Default `accessibilityRole="button"` in the shared `Press` wrapper (`ealch-v2/src/components/Press.tsx`); audit icon-only buttons to carry `accessibilityLabel` instead of relying on `accessibilityHint` alone | This closes the actual gap (~289 of 353 controls). No library fixes this — it is a prop, applied once at the shared wrapper, that fixes most of the 289 by inheritance |
| 6. Push notifications | `expo-notifications ~57.0.8` (already installed, plugin already configured, `projectId` already present in `app.json`) | Call `Notifications.getExpoPushTokenAsync({ projectId })` on permission grant, write the token to a new Supabase `push_tokens` table, add `Notifications.addNotificationResponseReceivedListener()` in `app/_layout.tsx` to deep-link via `expo-router`'s `router.push()`, and fix the two dead toggles (`report`/`nudge`) in `useStore.ts` to actually branch | Same reasoning as gap 1 — the library is already correctly chosen and installed; only the wiring is missing |

### Development Tools

| Tool | Purpose | Notes |
|------|---------|-------|
| `jest.config.js` with `preset: "jest-expo"`, restricted to `testMatch: ["**/*.render.test.tsx"]` (or similar) | Keeps the new Jest runner scoped to component tests only | Do not migrate the existing 844 `node --test` files to Jest — that is a large, risk-bearing rewrite with zero benefit; run both runners side by side (`npm run test` = node --test for logic, `npm run test:render` = jest for components) |
| `npx expo prebuild` (already part of the existing EAS/dev-client workflow — confirmed via `eas.json` and `expo-dev-client` already installed) | Required one-time step after adding `expo-sqlite`'s native module | No new workflow — this app already builds via EAS dev client, not Expo Go, so native modules are not a blocker the way they would be for an Expo-Go-only app |

## Installation

```bash
# Core — content store (gaps 4 + 5)
cd ealch-v2
npx expo install expo-sqlite

# Component/render testing (gap 7) — scoped devDependency, does not touch node --test
npx expo install jest jest-expo --dev
npm install --save-dev @testing-library/react-native @types/jest

# Gaps 1, 2, 3, 6: no install — see Supporting Libraries / Patterns table above
```

No changes needed to `ealch-admin`'s dependency tree (Drizzle/pg already handle the new `tts_usage`, `entitlements`, `push_tokens` tables via existing migration tooling).

## Alternatives Considered

| Recommended | Alternative | Why Not (for this app, right now) |
|-------------|-------------|-------------------------|
| `expo-sqlite` for content storage (gaps 4+5) | `react-native-mmkv` (v4.3.2, ~30x faster reads than AsyncStorage, requires `react-native-nitro-modules`) | MMKV is excellent for small hot keys (settings, entitlement cache) read on every render, but it's still a key-value store — it doesn't solve "lazily query one lesson out of 27 MB," only "read/write a blob faster." It would still hit a single-value size concern and wouldn't reduce the eager-parse cost the way row-level SQLite queries do. Reconsider MMKV later, narrowly, for the entitlement/settings cache only, if AsyncStorage read latency on `AppState → active` is ever separately measured as a problem — it is not one of the seven named gaps. |
| Postgres table + service-role check for TTS rate limiting (gap 1) | Upstash Redis (Supabase's own docs example for Edge Function rate limiting) | Upstash is the *documented* Supabase pattern and is the right call at high request volume needing atomic distributed counters. This app's TTS endpoint is a fallback behind free device TTS, already has a Postgres connection open in the same function, and the whole app is intentionally cost-minimized on Supabase's free tier — adding a second paid third-party service (even on its free tier) to rate-limit an endpoint whose real fix is "require a JWT" is disproportionate. A `day + user_id` upsert-and-check in Postgres is one migration, zero new vendor, and sufficient at this app's ~5,000-user free-tier ceiling. |
| Jest + jest-expo + RNTL, scoped to component tests only (gap 7) | Vitest for component tests | Vitest's React Native support is not first-party (no equivalent of `jest-expo`'s Expo-maintained preset), and every official Expo/React Native doc as of SDK 57 still points to Jest + `jest-expo` as the supported combination. Introducing an unsupported combination for the one area (native host-component rendering) where tooling maturity matters most is the wrong trade for a solo maintainer. |
| Manual `Press.tsx` fix + RNTL accessibility-tree assertions (gap 3) | `eslint-plugin-react-native-a11y` (v3.5.1, published 2026-07-20) | Investigated and rejected for now: its `peerDependencies` cap at `eslint ^3 \|\| ... \|\| ^8`. The current `eslint` major is 10.x, and this project has **no ESLint installed at all** today. Adopting this plugin would mean standing up an entire ESLint toolchain (with likely flat-config incompatibility risk, LOW confidence — the peer range strongly suggests no ESLint 9+ flat-config support, but this was not confirmed against the plugin's actual rule-loading code) just to lint one prop. The higher-leverage fix is the one-line default on the shared `Press` wrapper plus an RNTL test asserting `getByRole('button')` resolves on key screens. Revisit this plugin only if/when the project separately decides to adopt ESLint for other reasons. |

## What NOT to Use

| Avoid | Why | Use Instead |
|-------|-----|--------------|
| A full analytics/observability platform (Sentry, Datadog RUM, etc.) to "watch" the TTS cost or cold-start numbers | None of the seven gaps ask for observability infrastructure — CONCERNS.md's own fix approach for gap 1 is "add monitoring/alerts," which Supabase's built-in dashboard (function invocation counts, Postgres row counts) already covers at this app's scale. A dedicated platform is a recurring cost and a new integration surface for a one-person team. | Supabase's own dashboard + a `SELECT sum(char_count) FROM tts_usage WHERE day = current_date` query run manually or via a scheduled Supabase cron function emailing Paul if it crosses a threshold |
| Migrating the 844 existing `node --test` tests to Jest "for consistency" | Not one of the seven gaps — it is pure churn risk on a large, currently-passing suite, for a benefit (a single test runner) that doesn't map to any Active requirement | Run Jest only for the new component-render tests; leave `node --test` as-is for logic/unit tests |
| `@testing-library/jest-native` | Deprecated; its matchers (`toHaveTextContent`, `toBeDisabled`, etc.) were merged into `@testing-library/react-native` core as of v12.4+, and the current recommended version (14.0.1) already includes them | Import matchers directly from `@testing-library/react-native` |
| A generic push-notification SaaS (OneSignal, Braze) to fix gap 6 | `expo-notifications` is already installed, already configured with a working `projectId`, and the actual bug is that `getExpoPushTokenAsync` and the response listener are simply never called — this is 100% wiring, not a missing platform | Wire the existing `expo-notifications` APIs; only reconsider a SaaS push platform if/when the "real push campaign backend" (explicitly Out of Scope for this milestone per PROJECT.md) gets scheduled |
| `react-native-mmkv` as a blanket AsyncStorage replacement | Tempting because of the "6 MB AsyncStorage ceiling" framing in CONCERNS.md, but MMKV doesn't change the shape of the data (still a monolithic blob per key) — it only makes reading/writing that blob faster. The actual gap is architectural (need row-level access to a growing dataset), which only a real embedded database (`expo-sqlite`) solves | `expo-sqlite`, scoped to the content snapshot only; leave small settings/session flags on AsyncStorage, which is fine at its current (non-content) size |

## Stack Patterns by Variant

**If the `entitlements` sync (gap 2) needs to work fully offline-first (user opens app on a plane, no network, but purchased yesterday on another device):**
- Keep a short-TTL AsyncStorage cache of the last-known `entitlements` row (existing pattern, just re-pointed at the synced table instead of the purchase-only cache)
- Because Adapty webhooks settle asynchronously after purchase, gate immediate post-purchase UI on the client SDK's own result (`react-native-adapty`'s `getProfile()`), and let the Supabase-synced copy be the source of truth for every subsequent app open — this is the standard "optimistic client, authoritative server, webhook settles the gap" pattern for subscription apps

**If `expo-sqlite`'s migration turns out to be bigger than expected (schema versioning across the 70+ published content snapshots):**
- Start with the smallest slice that unblocks both gaps: migrate only the content snapshot cache (currently in `content.logic.ts`), not the entire AsyncStorage surface (progress, settings, entitlement cache can stay on AsyncStorage — they're small and not implicated in either gap)

## Version Compatibility

| Package A | Compatible With | Notes |
|-----------|-----------------|-------|
| `expo-sqlite@~57.0.3` | `expo@~57.0.9`, `react-native@0.86.2` | Matches installed SDK exactly; do not install the `58.x` line (that's SDK 58, not yet adopted here) |
| `jest-expo@~57.0.5` | `react@19.2.3`, `react-test-renderer` pinned internally to `19.2.3` | Verified via `npm view jest-expo@57.0.5 dependencies` — exact match to this app's installed React version, so no react-test-renderer version drift |
| `@testing-library/react-native@^14.0.1` | `jest >=29.0.0`, `react-native >=0.78`, `react >=19.0.0` | All satisfied; `jest-expo`'s own dependency on `babel-jest ^29.2.1` means pinning `jest` to the 29.x line (not 30.x) avoids any preset/version mismatch — confirm with `npx expo install jest jest-expo --dev`, which resolves SDK-correct pins automatically rather than hand-picking `jest@30` |
| `react-native-adapty@^4.0.1` | Adapty Webhooks (dashboard-configured, no SDK version coupling) | Webhook integration is configured server-side on Adapty's dashboard, not through the mobile SDK — no client dependency change required for gap 2 |

## Sources

- `ealch-v2/supabase/functions/tts/index.ts` (read directly) — confirms `--no-verify-jwt` deploy and existing `@supabase/supabase-js` import, HIGH confidence
- `ealch-v2/app.json`, `ealch-v2/package.json` (read directly) — confirms EAS projectId/updates URL already present, and zero existing test-rendering tooling, HIGH confidence
- [Supabase: Rate Limiting Edge Functions](https://supabase.com/docs/guides/functions/examples/rate-limiting) — official doc, confirms Upstash is Supabase's own recommended pattern (used here to justify why a simpler Postgres approach was chosen instead, not to adopt Upstash), HIGH confidence for what the doc says, MEDIUM confidence in the "use Postgres instead" call since it's a judgment call for this app's scale
- [Expo: SQLite documentation](https://docs.expo.dev/versions/latest/sdk/sqlite/) — official docs, confirms first-party SDK status, HIGH confidence
- [Expo: Unit testing guide](https://docs.expo.dev/develop/unit-testing/) — official doc, confirms `npx expo install jest jest-expo --dev` + `@testing-library/react-native` as the supported combination, HIGH confidence
- npm registry (`npm view`) for `expo-sqlite`, `jest-expo`, `@testing-library/react-native`, `react-native-mmkv`, `eslint-plugin-react-native-a11y`, `eslint` — direct version/peerDependency checks, HIGH confidence
- [Adapty: Handle Subscription Events with Webhooks](https://adapty.io/docs/handle-webhooks-with-ai) and [Adapty: Getting Started with Server-Side API](https://adapty.io/docs/getting-started-with-server-side-api) — official docs, confirms webhook-to-backend pattern exists and is documented, MEDIUM confidence (fetched via search snippets, not a full page fetch — recommend Paul re-confirm exact webhook payload shape against Adapty's dashboard before implementing)
- [GitHub: testing-library/jest-native README](https://github.com/testing-library/jest-native) — confirms deprecation/merge into RNTL core, HIGH confidence
- [FormidableLabs: eslint-plugin-react-native-a11y](https://github.com/FormidableLabs/eslint-plugin-react-native-a11y) + npm peerDependencies — confirms rule set exists but peer range caps at eslint ^8, LOW confidence on exact flat-config incompatibility (inferred from peer range, not confirmed by reading the plugin's loader code)
- WebSearch: "node:test runner React component testing 2026" — confirms `node --test` lacks a DOM/JSX environment, MEDIUM confidence (aggregated from multiple 2026 blog sources, not a single authoritative doc, but consistent across sources)

---
*Stack research for: Ealch launch-readiness gaps (TTS security, entitlement sync, accessibility, cold start, snapshot size, push notifications, component testing)*
*Researched: 2026-09-19*
