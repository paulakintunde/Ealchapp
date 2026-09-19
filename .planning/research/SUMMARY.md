# Project Research Summary

**Project:** Ealch — launch-readiness milestone
**Domain:** Hardening a shipped mobile French-learning app (Expo/React Native + Supabase, Next.js authoring console) for public App Store/Play Store submission
**Researched:** 2026-09-19
**Confidence:** MEDIUM-HIGH

## Executive Summary

This is not a 0-to-1 build — it's closing seven named gaps in a mature, solo-maintained app that already ships a full A1/A2 curriculum, exam packs (TEF/TCF/DELF), Adapty-based purchases, and a working content pipeline (Postgres to seed.json to OTA snapshot). The single most important research finding, corroborated independently by all three non-stack research files, is that `.planning/codebase/CONCERNS.md` overstates four of the seven gaps because it was written from a static-analysis codebase map rather than a full source read. A pre-publish content-drift guard already exists and already blocks the app's one real data-loss incident class (just narrower in scope than believed). Entitlement already syncs cross-device via Adapty keyed to the Supabase auth uid (the real gap is signed-out purchases and server-side trust, not "lost forever on reinstall"). The AsyncStorage size ceiling was already fixed after a v66 incident by moving the cache to the filesystem (the remaining work is splitting the ~27-50MB blob by level, not raising a ceiling — and there is no content-snapshot edge function to modify, only a Storage bucket + manifest). And only 1 of 12+ eligible lessons is gated behind the otherwise-correct Adapty/paywall infrastructure. Net effect: four items that read as "build from scratch" in PROJECT.md's Active requirements are actually "extend/verify/narrow" work, which should make the roadmap's phases smaller and lower-risk than a naive reading would produce.

The recommended approach leans almost entirely on patterns already established in the codebase rather than new subsystems: two of seven gaps (TTS auth, push notifications) need zero new dependencies — only wiring already-installed libraries (`@supabase/supabase-js` already imported in the TTS function; `expo-notifications` already configured with a working `projectId`). One gap (accessibility) needs zero new dependencies and one shared-component default plus a per-screen audit. Only two things genuinely warrant new packages: `expo-sqlite` for the content-snapshot/cold-start work, and a scoped Jest + jest-expo + React Native Testing Library setup for component-render tests (kept separate from the existing 844 `node --test` logic tests, not a migration of them).

The key risks are less "will this be hard to build" and more "will the fix be subtly wrong in a way that looks done." PITFALLS.md's most load-bearing finding is that four of the six critical pitfalls are variants of the same shape: a fix that looks complete from a diff (flip a config flag, add a default prop, add a diff check, make an import lazy) but is either directionally wrong (a drift guard that blocks normal publishes because it isn't version-aware) or misses a whole class of callers (a lazy content load that crashes a deep-link or notification-tap entry point that bypasses the normal splash flow; a blanket `accessibilityRole="button"` default that misannounces switches/tabs as buttons; a `verify_jwt` flip that does nothing because the anon key is itself a valid JWT). Every phase in this milestone should budget for "the naive version of this fix is wrong" and test against the specific failure shape called out per pitfall, not just re-test the happy path.

## Key Findings

### Corrections to PROJECT.md / CONCERNS.md (read this first)

Independently confirmed by ARCHITECTURE.md and FEATURES.md (and consistent with STACK.md's own direct code reads):

1. **Content-publish drift guard already exists.** `ealch-admin/scripts/publish-content.ts` step "4.0 RULE no-silent-regression" (lines ~560-655) already diffs git-committed seed.json lesson bodies against Postgres and **refuses to publish** (`process.exit(1)`) if a committed lesson would be deleted/reverted — it already prevents a repeat of the 2026-07-31 incident, for lesson bodies. The real remaining gap: it only covers `content_units` of kind `lesson`, not `curriculum_unit`, `scenario`, `playlist`, or `speak_stage` — those are just as vulnerable to silent seed-direct overwrite today, with zero guard.
2. **Entitlement already syncs cross-device.** `purchases.ts` activates Adapty with `customerUserId: <Supabase auth uid>` and reconciles on every foreground and sign-in. A signed-in user reinstalling/switching devices already gets their entitlement back — this is not "lost forever." The real gaps are narrower: (a) purchases made while signed *out* are stranded on an anonymous Adapty profile pending verification of `identify()`'s merge behavior, and (b) there's no trustworthy server-side entitlement check for edge functions (`grade-exam`/`coach`) beyond an explicitly-advisory Postgres mirror.
3. **The AsyncStorage size-ceiling problem is already fixed.** After a v66 incident (27MB vs a 6MB budget), the snapshot cache moved to the filesystem; the current ceiling is `MAX_SNAPSHOT_BYTES = 50 * 1024 * 1024` (not 30MB as CONCERNS.md states), and downloads are already streamed to disk, not buffered in memory. There is **no content-snapshot Supabase Edge Function anywhere in the repo** — the snapshot is a static file in a public Storage bucket (`snapshots/v{n}.json` + `manifest.json`), fetched directly by the client. Any "content-snapshot function" work must be understood as Storage bucket layout + manifest schema + client fetch logic changes, not an edge function to modify. The real remaining problem is a first-run learner downloading the full 50MB blob (all levels + exams) even if they only touch A1 — an argument for level-splitting the OTA snapshot (extending the seed-cut pattern that already exists), not for raising any ceiling.
4. **Entitlement/restore-purchase infrastructure is mostly already correct.** `restorePurchases()` already exists and works in `purchases.ts`; the actual gap is that only 1 of 12+ eligible lessons is gated, so the paywall barely matters yet — this is a paywall-coverage decision, not an entitlement-infrastructure build.

**Roadmap implication:** phases for these four areas should be scoped as "extend a narrow, specific gap in working code" (verification, generalization, wider gating) — not "design an entitlement/publish-safety/snapshot-storage system." This meaningfully shrinks estimated effort and risk for roughly half of PROJECT.md's Active requirements list.

### Recommended Stack

Only two genuinely new dependencies are warranted; everything else is a pattern applied to libraries already installed (see STACK.md for full detail and version pins).

**Core technologies:**
- `expo-sqlite` (~57.0.3, SDK-57-aligned) — replaces the single AsyncStorage/filesystem JSON blob as the content store; solves both cold-start (query only what a screen needs instead of eager-parsing 4.66MB) and snapshot-splitting (row-level access instead of monolithic blobs) with one change. First-party Expo SDK module, no native-config risk beyond `expo prebuild` (already part of this app's EAS/dev-client workflow).
- `jest` + `jest-expo` (~57.0.5) + `@testing-library/react-native` (^14.0.1) — scoped *only* to new component-render tests (gap: zero test-rendering tooling exists today, only `node --test` for 844 logic tests). Do not migrate existing tests; run both runners side by side.
- No new package for: TTS auth/rate-limit (reuse existing `@supabase/supabase-js` import + a new Postgres `tts_usage` table), entitlement sync (reuse `react-native-adapty` + an Adapty webhook integration), accessibility (React Native core `accessibilityRole`/`accessibilityLabel`/`accessibilityState`), push notifications (`expo-notifications`, already installed and configured with a working `projectId`).

### Expected Features

Derived from industry patterns for freemium/subscription language apps, filtered to this milestone's four launch-readiness domains (monetization, retention notifications, accessibility, content-publish safety) — see FEATURES.md for full detail.

**Must have (table stakes):**
- Visible, working "Restore Purchases" control — App Store Guideline 3.1.2; mostly already implemented, verify UI wiring
- Entitlement survives reinstall/new device for a signed-in user — mostly already implemented via Adapty
- Paywall gates a coherent, explainable slice of content (e.g., "A1 free, A2+/exams gated"), not one arbitrary lesson
- Paywall modal behaves correctly (no accidental dismiss/bypass)
- Notification toggles that actually toggle; notification tap deep-links to the right screen; notification body has no unfilled template placeholders
- Dark mode "automatic" setting actually follows the OS (currently a visible lie in `app.json` vs. behavior)
- Interactive controls are screen-reader operable (role + label on every actionable control) — not full WCAG AA certification, but the functional bar
- Font scaling / Dynamic Type doesn't drop text (known defect on flashcards)
- Publishing content can never silently destroy unreviewed work — the highest-leverage single fix in this pass, given a proven prior incident

**Should have (differentiators, not launch-blocking):**
- Finish the already-partially-built streak-freeze writer (logic exists, "no writer, so always returns 0 frozen days")
- Personalized notification copy beyond basic template filling
- Tune the paywall gating boundary using real conversion data once gating is live
- Automated pre-publish report (human-readable diff + snapshot-size trend), not just pass/fail

**Defer (explicitly out of scope for this milestone, per PROJECT.md and FEATURES.md's anti-features analysis):**
- Custom receipt-validation backend (Adapty already does this — don't rebuild it)
- Real server-dispatched push-campaign backend (token registration + segmentation + win-back sequences)
- Acoustic/phoneme pronunciation scoring (~2-3 month effort, separate milestone)
- Formal WCAG AA certification/VPAT
- ML-driven notification send-time optimization
- Real-time multi-editor content locking (solo-plus-AI-agent authoring doesn't need a full CMS review workflow — the pre-publish diff guard is the right-sized equivalent)

### Architecture Approach

The fix-relevant slice of the system is: `ealch-admin` (Next.js) writes content to Postgres and runs `publish-content.ts`, which already contains a drift guard, writes a Storage-bucket snapshot + manifest, and regenerates the git-tracked seed.json; `ealch-v2` (Expo/React Native) boots through `app/_layout.tsx`, which gates first paint on `fontsLoaded && hydrated && progressHydrated && contentHydrated`, and today eagerly imports seed.json at module scope before that gate can even take effect. See ARCHITECTURE.md for the full annotated system diagram and per-fix integration points.

**Major components (fix-relevant):**
1. `ealch-admin/scripts/publish-content.ts` — content publish pipeline; owns the drift guard (Fix 1), the snapshot-split work (Fix 3), and reads/writes seed.json
2. `ealch-v2/src/services/content.ts` / `content.logic.ts` — three-tier content loading (seed to filesystem cache to remote snapshot), owns the eager-import cold-start problem (Fix 4) and the snapshot-merge logic that Fix 3's splitting depends on
3. `ealch-v2/src/services/purchases.ts` + `store/useEntitlement.ts` + `services/entitlement.ts` — Adapty-backed entitlement sync, already largely correct; owns the signed-out-purchase and server-trust gaps (Fix 2)
4. `ealch-v2/src/services/notifications.ts` + `app/_layout.tsx` + `store/useStore.ts` — notification scheduling/display (partially working), owns the missing push-token registration, tap-handler, and dead toggle wiring (Fix 5)
5. `ealch-v2/src/components/Press.tsx` — shared interactive-control wrapper; single highest-leverage integration point for the accessibility retrofit, but requires a per-call-site role audit, not a single hardcoded default (see Pitfall 3)

**Cross-fix dependency to plan around:** Fix 4 (lazy content load) changes when `useContent`'s corpus becomes available; any notification-tap deep-link handler (Fix 5) or other non-standard entry point must route through the same readiness gate or it will crash/render blank on exactly the kind of launch this milestone is trying to make trustworthy. ARCHITECTURE.md's suggested phase order sequences Fix 5's tap-handler after Fix 4 for this reason.

### Critical Pitfalls

Full detail (6 critical pitfalls, technical debt table, "looks done but isn't" checklist) in PITFALLS.md. The five most load-bearing for phase planning:

1. **Flipping `verify_jwt = true` on the TTS function is likely cosmetic** — it accepts any valid Supabase JWT, including the anon key every client sends by default, so it can either do nothing (anon key still passes, cost risk unchanged) or 401 real logged-out users, depending on what else the function checks. Avoid by reading `ctx.userClaims.sub` explicitly inside the function body and rate-limiting per authenticated user id, not per IP (mobile NAT makes per-IP limits both leaky and prone to false-positive-blocking legitimate shared-network users).
2. **A drift guard built on raw content diffing will either block every normal publish or miss the actual hazard**, because the two writers (Postgres via admin, git via seed-direct scripts) are asymmetric: Postgres-ahead-of-git is the normal, safe case (always true on a healthy publish) and must be allowed; git-ahead-of-Postgres is the one destructive case and must be blocked. The existing guard already gets this right for lesson bodies (version/timestamp-aware, not raw-diff) — any extension to units/scenarios/playlists/speak stages must preserve that same directional asymmetry, or the extension will get bypassed under deadline pressure the first time it blocks a legitimate publish.
3. **A blanket `accessibilityRole="button"` default on the shared `Press` wrapper will create new TalkBack regressions** on every non-button usage (list-row navigation, toggle switches, tab bar items) even as it fixes the majority-case plain buttons — budget for a per-screen audit assigning the correct role per control type, not a one-line default, and prioritize high-traffic/high-legal-risk screens (home, lesson flow, settings, paywall) first.
4. **Lazy-loading seed.json inside `initContent()` introduces a race that didn't exist under eager loading** — any entry point that bypasses the normal splash to `_layout.tsx` flow (deep links, a future notification tap handler, background sync) can now render before content exists. Every non-standard entry point must route through the same readiness gate that `app/_layout.tsx` already uses for its normal render tree.
5. **Client-only entitlement migration work will strand already-paying users** if it only wires the forward path (new purchases sync) without a backfill/reconciliation check for users whose entitlement predates any sync code — test explicitly for "existing paying user, first launch after this update, currently offline" before shipping any entitlement-touching change.

## Implications for Roadmap

Combining ARCHITECTURE.md's dependency analysis, FEATURES.md's prioritization, and the corrections above, the suggested phase structure narrows and reorders several of PROJECT.md's Active requirement areas:

### Phase 1: Content-publish drift guard extension
**Rationale:** Isolated (touches only `ealch-admin/scripts/publish-content.ts`), zero mobile-app surface, no dependency on any other fix, and addresses the app's one actual proven data-loss incident. Front-loading it de-risks every other seed-direct content authoring that happens during the rest of the milestone.
**Delivers:** Generalizes the existing version-aware "4.0 RULE" comparator from lesson bodies to `curriculum_unit`, `scenario`, `playlist`, and `speak_stage` content, preserving the existing asymmetric (git-ahead-blocks, Postgres-ahead-allows) directionality.
**Addresses:** FEATURES.md's highest-leverage table-stakes item ("publishing can never silently destroy unreviewed work").
**Avoids:** Pitfall 6 (raw-diff guard blocks normal publishes or misses non-body drift) — must extend the existing version-aware pattern, not build a new raw-diff check.

### Phase 2: Entitlement verification + signed-out-purchase fix
**Rationale:** Independent of every other fix, mostly confirms already-correct Adapty behavior (`identify()`/merge semantics) rather than building anything new, and unblocks confident paywall-coverage expansion.
**Delivers:** Verified/hardened `syncIdentity()` flow (post-identify `refreshEntitlement()` call), confirmed working "Restore Purchases" UI wiring, and a documented decision on server-side entitlement trust for `coach`/`grade-exam` edge functions.
**Addresses:** FEATURES.md table-stakes items (restore purchases, cross-device entitlement) and unblocks the differentiator (level-boundary paywall gating).
**Avoids:** Pitfall 2 (migration strands existing paying users) and Pitfall 5's UX corollary (paywall reappearing without explanation).

### Phase 3: Paywall coverage expansion
**Rationale:** Depends on Phase 2's restore-flow verification landing first — expanding what's gated before confirming the escape hatch works turns a low-stakes bug (near-empty paywall) into a high-stakes one (users pay, can't recover access).
**Delivers:** A single, explainable gating rule applied consistently across the A1/A2/exam catalogue (e.g., A1 free, A2+exams gated), replacing the current single arbitrarily-gated lesson.
**Addresses:** FEATURES.md's monetization table-stakes item.
**Uses:** Existing Adapty/`useEntitlement` infrastructure — no new stack elements.

### Phase 4: Notification body-format fix + toggle scope decision
**Rationale:** Cheap, independent of everything, can run in parallel with Phases 1-3.
**Delivers:** A single shared body-formatting function (fixing unfilled `{name}` placeholders), and an explicit product decision on `report`/`nudge` dead toggles (wire them for real, or remove from UI — flagged as a call for Paul, not silently resolved).
**Addresses:** FEATURES.md's notification trust table-stakes items.

### Phase 5: Accessibility retrofit
**Rationale:** High user/legal value, but real per-screen work, not a one-line fix — budget accordingly rather than treating it as a quick default-prop change.
**Delivers:** `Press` component role threaded as an explicit prop per call site (not a hardcoded default), audited in batches by screen (home, lesson flow, settings, paywall first), plus the font-scale layout fix on flashcards and the dark-mode OS-sync fix.
**Avoids:** Pitfall 3 (blanket role default creates new regressions on switches/tabs/links).
**Uses:** React Native core accessibility APIs only — no new stack dependency.

### Phase 6: Content snapshot split — design spike
**Rationale:** ARCHITECTURE.md explicitly flags this as needing dedicated research before implementation — the manifest-shape backward-compatibility approach and `mergeCorpus`'s multi-overlay behavior are both unresolved by this research pass.
**Delivers:** A resolved design for (a) a versioned manifest schema that old app binaries fail closed against rather than crash on, and (b) confirmation that sequential `mergeCorpus` calls (seed to split A to split B) behave correctly.
**Research Flag:** YES — flag for `/gsd-research-phase` during planning.

### Phase 7: Content snapshot split — implementation
**Rationale:** Depends on Phase 6's spike; the largest, riskiest, most dependency-heavy fix in the milestone (touches publish pipeline, manifest contract, and mobile fetch/cache/merge layer simultaneously). Land after Phase 1 (same publish-pipeline file) so it isn't restructured twice in flight.
**Delivers:** Per-level OTA snapshots (starting with exam content as the natural first split, since it's already excluded from the bundled seed cut for the same reason), each independently validated/checksummed/uploaded.
**Uses:** `expo-sqlite` (STACK.md) for the mobile-side row-level content store this split ultimately wants; existing `seed-cut.config.ts` filter machinery as the pattern to generalize.
**Avoids:** Pitfall 5 (snapshot pruning/splitting desyncs from Expo Updates' rollback safety net) — requires a schema-version gate and staged rollout, not a flag-day cutover.

### Phase 8: Cold-start lazy-load
**Rationale:** Should land after Phase 7's design is settled (same `initContent()` function being restructured twice otherwise) if both are in this milestone; can land standalone anytime if snapshot-splitting is deferred to a later milestone.
**Delivers:** seed.json import moved from module-scope to inside `initContent()`, with every non-standard entry point (deep links, notification taps, background sync) audited to route through the existing `contentHydrated` gate.
**Uses:** `expo-sqlite` (STACK.md) as the replacement content store, which structurally solves both cold-start and snapshot-size at once.
**Avoids:** Pitfall 4 (lazy load creates a race for entry points that bypass the normal splash flow) — explicitly test deep-link and notification-tap launches on a cold-started app, not just the standard boot path.

### Phase 9: Notification tap-handler + push token registration
**Rationale:** Depends on Phase 8 (`ready`/`contentHydrated` must be a trustworthy gate before a tap-handler resolves a session). Push-token registration alone is low-value without a real dispatch backend (explicitly out of scope per PROJECT.md) — flag as a scope decision for the roadmap, not an assumed build.
**Delivers:** `addNotificationResponseReceivedListener` wired at app root with deep-link resolution gated on content readiness; push-token registration only if the milestone's notification goal extends beyond "make the toggle honest."
**Avoids:** The cross-fix risk called out in ARCHITECTURE.md Fix 4/Fix 5 interaction (tap handler firing before content is ready).

### Phase 10: TTS security hardening
**Rationale:** Not sequence-dependent on the other phases (isolated to `ealch-v2/supabase/functions/tts/index.ts` and a new Postgres table); can run in parallel with any phase above. Placed late here only because it's a self-contained unit, not because it's low priority — the roadmapper may choose to pull it earlier given it's an active unmetered-cost exposure.
**Delivers:** Per-user JWT validation (`ctx.userClaims.sub`, not just `verify_jwt=true`) plus a `tts_usage` Postgres table with an atomic upsert-and-check rate limit, and a device-TTS fallback path if the check fails.
**Avoids:** Pitfall 1 (verify_jwt flip is cosmetic because the anon key is itself a valid JWT) — explicitly test calling the endpoint with zero auth headers and with only the anon key.

### Phase 11: Component test coverage
**Rationale:** Lowest urgency of the technical phases (doesn't fix a user-facing gap directly) but directly supports trusting the other phases' changes, especially the accessibility retrofit (Phase 5) and the TTS/entitlement auth changes (Phases 2, 10).
**Delivers:** Scoped Jest + jest-expo + RNTL setup for component-render tests only (existing `node --test` suite untouched), starting with `getByRole` assertions on the screens touched by Phase 5's accessibility audit.
**Uses:** `jest`, `jest-expo`, `@testing-library/react-native` (STACK.md).

### Phase Ordering Rationale

- Phases 1, 2/3, 4, and 10 have no shared files/state and can run in parallel with each other — sequencing above is one reasonable linear path, not a hard dependency chain, except where explicitly noted (Phase 3 after Phase 2; Phase 9 after Phase 8; Phase 8 after Phase 7 if both are in-milestone; Phase 7 after Phase 6's spike; Phase 7 after Phase 1 to avoid restructuring the same publish-pipeline file twice).
- The snapshot-split work (Phases 6-7) is deliberately isolated as its own multi-phase arc rather than folded into a single "performance" phase, because ARCHITECTURE.md identifies it as the single largest risk concentration in the milestone — a manifest-shape change is a wire-format break between old app binaries and new publishes, and needs its own design-then-build-then-verify sequence.
- Content-gap-closing work within A1/A2/exams (PROJECT.md's first Active bullet) isn't given its own numbered phase here because it's orthogonal to all seven technical gaps this research covers — the roadmapper should treat it as parallel-track content work, sequenced independently using the existing lesson-build patterns documented in project memory, not blocked on any phase above.
- "Fix known bugs blocking normal use" (audio pause on background, exam response lost on process death, STT continuous-mode regression) wasn't covered by this research pass in file-level detail and should get its own scoping pass during roadmap creation — flagged as a gap below.

### Research Flags

Needs deeper research during planning (`/gsd-research-phase`):
- **Phase 6/7 (content snapshot split):** manifest backward-compatibility design and `mergeCorpus` multi-overlay behavior are explicitly unresolved by this research pass; ARCHITECTURE.md recommends a dedicated spike before implementation.
- **Phase 2 (entitlement), sub-piece "server-side gating consistency":** whether promoting the advisory Postgres `entitlements` mirror to a trusted server-side check (or calling Adapty's server API directly from an edge function) is worth the cost/risk tradeoff is a product decision as much as an engineering one — flagged in ARCHITECTURE.md as "worth a roadmap phase of its own if pursued."

Phases with standard, already-scoped patterns (safe to skip research-phase):
- **Phase 1 (drift guard extension):** generalizing an existing, already-understood comparator pattern.
- **Phase 4 (notification formatting/toggles):** small, well-understood bug fixes with an existing correct reference implementation (`PushBanner.tsx`) to copy from.
- **Phase 10 (TTS hardening):** Supabase's own docs plus this project's existing code (service-role client already imported) make this a well-documented pattern, not an open design question.
- **Phase 11 (component testing):** Expo's official unit-testing guide directly specifies the exact package combination and setup.

## Confidence Assessment

| Area | Confidence | Notes |
|------|------------|-------|
| Stack | MEDIUM-HIGH | Verified against npm registry versions and official Expo/Supabase/Adapty docs, plus direct reads of the actual TTS function, app.json, and package.json. Two items (ESLint a11y plugin compatibility, Adapty webhook payload shape) flagged LOW/MEDIUM in STACK.md pending direct confirmation. |
| Features | MEDIUM-HIGH | Industry patterns (paywall design, notification best practices, accessibility baseline) are HIGH confidence via multiple corroborating vendor/framework sources; the specific judgment of "what's enough for a solo dev at this stage" is MEDIUM — a reasoned call, not a documented industry standard. |
| Architecture | HIGH | Every finding, including all five corrections to CONCERNS.md, is grounded in direct reads of the actual current source files (publish pipeline, content service, purchases service, entitlement store, edge functions, app boot sequence) — not the prior static codebase map. |
| Pitfalls | MEDIUM | Supabase auth/JWT mechanics are HIGH confidence (official docs); RN/Expo ecosystem sources (cold-start, OTA rollback interaction) are MEDIUM; extrapolation from this repo's own documented incidents (CONCERNS.md, project memory) is HIGH confidence as first-party evidence. |

**Overall confidence:** MEDIUM-HIGH

### Gaps to Address

- **"Fix known bugs blocking normal use" (PROJECT.md Active bullet)** — audio pause on backgrounding, exam response lost on process death, STT continuous-mode regression risk — was not scoped in file-level detail by any of the four research files. Needs its own investigation pass during roadmap/phase planning; do not assume it's covered by the phases above.
- **Content gap-closing within A1/A2/exams** — explicitly out of scope for this technical research pass (FEATURES.md's Scope Note); the roadmapper should treat it as a separate, parallel content-authoring track using existing lesson-build patterns from project memory, not derive phases for it from this document.
- **Adapty webhook payload shape** — STACK.md flags this as fetched via search snippets, not a full page fetch; recommend confirming the exact payload against Adapty's dashboard before implementing Phase 2's server-trust sub-piece.
- **`mergeCorpus` multi-overlay behavior** — ARCHITECTURE.md flags this as needing direct code confirmation before committing to the Phase 6/7 snapshot-split design; not resolved by this research pass.
- **Test coverage priorities beyond component rendering** — PROJECT.md's Active bullet also names "exam grading E2E" and "notification delivery" as coverage gaps; only the component-rendering gap (Phase 11) was scoped in stack/architecture detail here.

## Sources

### Primary (HIGH confidence)
- Direct reads: `ealch-v2/supabase/functions/tts/index.ts`, `ealch-v2/app.json`, `ealch-v2/package.json`, `ealch-admin/scripts/publish-content.ts` (full, ~1248 lines), `ealch-admin/scripts/seed-cut.config.ts`, `ealch-v2/src/services/content.ts` (full), `ealch-v2/src/services/content.logic.ts`, `ealch-v2/src/services/sync.ts` (full), `ealch-v2/src/services/purchases.ts` (full), `ealch-v2/src/services/entitlement.ts`, `ealch-v2/src/store/useEntitlement.ts`, `ealch-v2/src/store/entitlement.logic.ts`, `ealch-v2/supabase/functions/adapty-webhook/index.ts` (full), `ealch-v2/app/_layout.tsx` (full), `ealch-v2/app/splash.tsx` (full), `ealch-v2/src/services/notifications.ts` (full), `ealch-v2/src/store/useStore.ts`, `ealch-v2/src/hooks/useAlarmWatcher.ts` (full)
- [Supabase: Rate Limiting Edge Functions](https://supabase.com/docs/guides/functions/examples/rate-limiting), [Supabase: Securing Edge Functions](https://supabase.com/docs/guides/functions/auth), [Supabase: Function Configuration](https://supabase.com/docs/guides/functions/function-configuration), [Supabase Auth: Rate Limits](https://supabase.com/docs/guides/auth/rate-limits)
- [Expo: SQLite documentation](https://docs.expo.dev/versions/latest/sdk/sqlite/), [Expo: Unit testing guide](https://docs.expo.dev/develop/unit-testing/), [Expo: Notifications](https://docs.expo.dev/versions/latest/sdk/notifications/), [Expo push notifications setup](https://docs.expo.dev/push-notifications/push-notifications-setup/), [Expo: Rollbacks](https://docs.expo.dev/eas-update/rollbacks/), [Expo: Updates SDK](https://docs.expo.dev/versions/latest/sdk/updates/)
- [RevenueCat: Importing your Historical Purchases](https://www.revenuecat.com/docs/migrating-to-revenuecat/migrating-existing-subscriptions), [RevenueCat: Hard Paywalls docs](https://www.revenuecat.com/docs/playbooks/guides/hard-paywall)
- [React Native: Accessibility docs](https://reactnative.dev/docs/accessibility)
- npm registry direct version/peerDependency checks for `expo-sqlite`, `jest-expo`, `@testing-library/react-native`, `react-native-mmkv`, `eslint-plugin-react-native-a11y`, `eslint`

### Secondary (MEDIUM confidence)
- [Adapty: Handle Subscription Events with Webhooks](https://adapty.io/docs/handle-webhooks-with-ai), [Adapty: Getting Started with Server-Side API](https://adapty.io/docs/getting-started-with-server-side-api) — fetched via search snippets, recommend re-confirming exact payload shape
- [The essential guide to mobile paywalls — RevenueCat](https://www.revenuecat.com/blog/growth/guide-to-mobile-paywalls-subscription-apps), [Hard paywall vs. freemium — RevenueCat/Sub Club](https://www.revenuecat.com/blog/growth/hard-paywall-vs-freemium)
- [Duolingo notifications/streak analyses — Medium, Digia](https://medium.com/@ar_o_ra/duolingo-has-cracked-the-notifications-game-45050e53242f) and related secondary breakdowns
- [React Native Accessibility Guide 2026 — BuildWithAccess](https://buildwithaccess.com/blog/react-native-accessibility-guide-2026) — regulatory deadline claims need independent verification before treating as a compliance requirement
- [Nearform: React Native AMA accessibility-role guideline](https://nearform.com/open-source/react-native-ama/guidelines/accessibility-role), [Callstack: React Native Android Accessibility Tips](https://www.callstack.com/blog/react-native-android-accessibility-tips)
- [GitHub: Supabase Discussion #34707 on Edge Function rate limiting](https://github.com/orgs/supabase/discussions/34707)

### Tertiary (LOW confidence)
- [FormidableLabs eslint-plugin-react-native-a11y](https://github.com/FormidableLabs/eslint-plugin-react-native-a11y) — peer-range-inferred flat-config incompatibility, not confirmed against loader code
- [DEV Community: React Native cold start / Hermes](https://dev.to/davekurian/react-native-cold-start-drops-when-hermes-lazy-screens-and-trim-bundles-ship-together-10pp), [Medium: Realities of OTA Updates with Expo](https://medium.com/@biodunbio14/the-realities-of-ota-updates-with-expo-what-i-wish-i-knew-before-i-pushed-to-production-508561d7a043) — community post-mortem style, single-source

---
*Research completed: 2026-09-19*
*Ready for roadmap: yes*
