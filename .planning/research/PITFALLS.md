# Pitfalls Research

**Domain:** Hardening a shipped Expo/React Native + Supabase app (auth retrofit, entitlement migration, accessibility retrofit, cold-start fix, OTA snapshot pruning, content-drift guard) for a solo developer with no QA
**Researched:** 2026-09-19
**Confidence:** MEDIUM — synthesized from Supabase official docs (HIGH confidence on auth/JWT mechanics), RN/Expo ecosystem sources (MEDIUM), and direct extrapolation from this repo's own documented incidents in CONCERNS.md (HIGH confidence, first-party evidence)

## Critical Pitfalls

### Pitfall 1: Gating the TTS function with `verify_jwt = true` breaks the app before a single line of rate-limit code runs

**What goes wrong:**
Supabase Edge Functions ship with `verify_jwt = true` as the platform default. The instinctive first fix for "unauthenticated TTS endpoint" is to flip auth on in `config.toml` (or add a Dashboard toggle) and ship it. But `verify_jwt` checks for *any* valid JWT — including the anon key JWT every RN client sends on every request by default. If `ealch-v2/src/services/tts.ts` is calling the function with the Supabase anon key rather than a signed-in user's session JWT, turning on `verify_jwt` either (a) does nothing — anon key still passes, TTS is still open, because the anon key IS a valid JWT — or (b) breaks it for logged-out/guest users who never call `supabase.auth.signInWith...` and have no session, if the function additionally checks `ctx.userClaims.sub` and 401s on missing user identity. Teams frequently ship one of these two failure modes: either the "fix" is cosmetic (anon key still gets through, cost risk unchanged) or it 401s real users who were using the feature anonymously.

**Why it happens:**
`verify_jwt` and "is this a real authenticated user" are two different checks that look like the same checkbox. Platform-level JWT verification only proves the caller possesses *some* Supabase-issued key (anon or user); it does not by itself identify or rate-limit a specific user. The fix requires reading `ctx.userClaims.sub` (or equivalent) inside the function body, not just flipping the config flag.

**How to avoid:**
- Decide explicitly: does TTS need to work for anonymous/guest users, or only signed-in ones? Check `ealch-v2/src/services/tts.ts:274-295` and confirm what auth state the caller is in when TTS is invoked (e.g., during a lesson before login, or only in-app post-auth).
- Implement rate limiting keyed on `auth.uid()` (per-user), not per-IP — mobile carriers/NAT mean many real users share IPs, and a per-IP limit will false-positive block legitimate users on the same cell tower/campus wifi while doing nothing to stop a single attacker who simply rotates IPs.
- Test the "flip the switch" change against a real device build *before* it merges — start the app fresh (logged out), trigger a TTS call, confirm it still works or fails with an expected, handled error (not a raw 401 that crashes or silently swallows audio).
- Add a fallback path: if the authenticated/rate-limited call fails, fall back to device TTS (already the default provider per CONCERNS.md) rather than a dead silent screen.

**Warning signs:**
- QA/manual test only covers "signed-in user, TTS works" and never tests logged-out or freshly-reinstalled state.
- No test asserts the endpoint rejects a request with *no* Authorization header at all (the actual attack you're defending against).
- Rate limit constant chosen without checking what a legitimate power user's daily TTS volume looks like (risk of self-inflicted lockout).

**Phase to address:** Security/TTS-hardening phase (Active: "authenticate/rate-limit the TTS edge function")

---

### Pitfall 2: Entitlement sync migration double-grants or silently revokes access during the AsyncStorage-to-Supabase cutover

**What goes wrong:**
Moving entitlement from local-only AsyncStorage (`ealch-v2/src/store/entitlement.logic.ts:24-59`) to a Supabase-synced model is a classic "two sources of truth during migration" hazard. Two failure modes are both common and both plausible here given the existing code:
1. **Lost access on cutover:** the new code reads only from Supabase on first launch post-update, finds no row (because the sync-on-purchase write path didn't exist yet when the user originally bought), and the paying user's `coach.unlimited` etc. silently disappears the moment they update the app — with no error, just a paywall reappearing.
2. **Double-charge / phantom purchase loop:** if the reconciliation logic sees "local cache says premium, Supabase says free" and resolves it by calling `restorePurchases()` against the store (Apple/Google) instead of trusting either cache, and the store's receipt validation is slow or the device is offline, users can be shown a false "not entitled" state and pushed back into the purchase flow, risking an accidental duplicate purchase attempt (usually blocked by the store, but Android in particular has had duplicate-subscription-purchase edge cases with rapid retry).

RevenueCat's own docs (verified above) explicitly warn that client-side migration alone is not durable — it requires `syncPurchases()` on first launch of the new version to reconcile historical receipts against the new source of truth, and server-side reconciliation (posting the raw receipt to the backend) is "preferable whenever possible" precisely because client-only sync misses users who never open the updated app while their subscription is active in the background.

**Why it happens:**
The existing code path (per CONCERNS.md: "Entitlement cache is plain AsyncStorage JSON, validated by shape only, never synced to Postgres") has no historical backfill. A migration that only wires up the *forward* path (new purchases sync to Supabase) but does nothing for the population who already purchased under the old, unsynced system will strand exactly the paying users this feature is meant to protect.

**How to avoid:**
- Treat this as two separate pieces of work: (a) sync new/future purchase events to Supabase going forward, and (b) a one-time backfill that reads the local AsyncStorage entitlement cache on first app launch post-update and reconciles it *toward* Supabase (write local truth up), not the reverse — never let "Supabase has no row yet" silently downgrade a user who has a valid local cache and a still-active subscription.
- On reconciliation conflict (local says yes, server says no, or vice versa), prefer whichever is more permissive *temporarily* and re-verify against the platform receipt (`react-native-iap` / RevenueCat validation) in the background, rather than immediately locking the user out.
- Sign or checksum the local cache (HMAC, as CONCERNS.md itself recommends) so a corrupted/tampered cache doesn't get treated as legitimate during the migration window, but don't treat "no signature" alone as "no entitlement" for existing installs that predate the signing change.
- Roll this out gated behind a feature flag / staged OTA (Expo Updates channel or rollout percentage) so a bad reconciliation can be rolled back before it reaches 100% of the install base — see Pitfall 5 on why this matters for this specific app.
- Write an explicit test: "user has local entitlement cache, fresh install of Supabase-synced version, Supabase has no row, app must NOT show paywall before attempting reconciliation."

**Warning signs:**
- No test or manual check covers "existing paying user, first launch after this update, currently offline."
- The migration PR only touches the purchase-success callback and doesn't touch app-launch/cold-start entitlement resolution.
- No telemetry/logging added to detect entitlement state flips (premium→free or free→premium) after the update ships — you will not otherwise know this happened until a user emails you.

**Phase to address:** Monetization phase (Active: "sync entitlement to Supabase so purchases survive reinstall/new device")

---

### Pitfall 3: Blanket `accessibilityRole="button"` on the shared `Press` wrapper creates new TalkBack regressions elsewhere

**What goes wrong:**
CONCERNS.md correctly identifies the fix as adding `accessibilityRole="button"` to the shared `Press` component (`ealch-v2/src/components/Press.tsx`) as a default. But `Press` is a *shared* wrapper — it's very likely used for things that are not semantically buttons: list rows that navigate (should be `link` or unrole'd list items), toggle/switch controls (should be `accessibilityRole="switch"` with `accessibilityState={{checked}}`), tab bar items (`tab`), and custom draggable/swipeable elements. Setting a single hardcoded default role retrofits correctness for the majority case (plain buttons) while creating *new* TalkBack misannouncements for every non-button usage — e.g., a settings toggle row now announces "button, double tap to activate" instead of "switch, on/off, double tap to toggle," which is arguably a regression, not a fix, for screen-reader users who rely on the state cue.

A second common retrofit mistake: adding `accessibilityLabel` derived from visible text via a generic wrapper (e.g., always reading `children` as the label) breaks for icon-only buttons and for composite rows containing multiple text nodes (price + item name + "on sale" badge), producing a wall of concatenated, unpunctuated text read as one label instead of a curated one.

**Why it happens:**
Retrofitting accessibility onto 353 pre-existing interactive controls under one shared wrapper looks like a one-line fix ("add the role to the wrapper") but the wrapper was never designed with a `role` prop threaded through, so the path of least resistance is a single hardcoded default rather than a required, per-call-site prop.

**How to avoid:**
- Make `role` a required (not defaulted) prop on `Press` for new call sites going forward, but for the retrofit pass, audit call sites in batches by screen and assign the *correct* role per control type (button/link/switch/tab/checkbox), not a single blanket default. This is real per-screen work, not a one-line config change — budget accordingly (this is likely the single largest line-item in the accessibility requirement, at ~289 unaudited controls).
- Prioritize by traffic: audit home, lesson/mission flow, settings, and paywall screens first (highest-use, highest-legal-risk surfaces), defer rarely-visited screens.
- For icon-only controls, require an explicit `accessibilityLabel` prop (not derived from children) — add a lint rule or a runtime `__DEV__` warning if `Press` renders with an icon child and no `accessibilityLabel`, so future regressions are caught automatically instead of only in a manual TalkBack sweep.
- Test with TalkBack turned on, on a real device, per screen you touch — not just "does the app still render." Screen-reader focus order and double-tap behavior can't be verified from a visual screenshot.
- Watch for `position: absolute` elements (modals, overlays, floating action buttons) — TalkBack on Android can fail to reach absolutely-positioned elements outside their positioned ancestor's layout flow; this is a distinct bug class from missing roles/labels and won't be caught by a role audit alone.

**Warning signs:**
- The fix PR touches only `Press.tsx` and no individual screen files — a sign the role was defaulted rather than audited per use.
- No manual TalkBack pass distinguishes buttons from switches/tabs/links in the diff.
- Settings toggles, tab bars, or list-item-as-navigation patterns exist in the codebase but weren't explicitly checked against non-`button` roles.

**Phase to address:** Accessibility phase (Active: "finish the UDL pass — TalkBack/screen-reader roles and labels")

---

### Pitfall 4: Lazy-loading `seed.json` inside `initContent()` introduces a "screen renders before content exists" race that didn't exist under eager loading

**What goes wrong:**
Today, `seed.json` is a module-scope import (`ealch-v2/src/services/content.ts:20`) — every module that imports `content.ts` gets synchronously-available data the instant the module graph resolves, even if that's slow. Making the load lazy/async inside `initContent()` is the correct fix for cold-start time, but it changes a load-bearing invariant: any code (including code far from `content.ts`, e.g., a screen mounted via deep link, a background sync job, a notification tap handler per CONCERNS.md's dead tap-handler fix, or the exam-task screen) that currently assumes `getContent()`/similar returns populated data synchronously will now sometimes get `undefined`/`null`/empty on the first render after a lazy load is introduced, especially on:
- Deep links that skip the home screen's normal splash→initContent() sequence (Android intent, notification tap, `adb` deep link used in this project's own dev workflow per project memory).
- Fast-follow renders where React Navigation mounts the destination screen before the async `initContent()` promise resolves, if the two aren't properly gated.
- Any place currently doing `const lesson = content.lessons[id]` at render time without a loading/null guard, because it never needed one before.

This is exactly the class of bug the "Authored but unrendered" and "practice skill never renders" memory entries describe — a working feature silently breaking because a renderer assumed data that quietly stopped being there.

**Why it happens:**
Eager imports create a false sense of "content is just always there" throughout the codebase. Converting to lazy loading is a boundary change but the boundary (who awaits the load, who doesn't) is implicit, not enforced by the type system unless deliberately added.

**How to avoid:**
- Introduce a single, explicit loading-state gate (e.g., a `contentReady` boolean/promise in the store) and make every entry point that can render before `_layout.tsx`'s normal flow (deep links, notification taps, widget/shortcut launches) route through the same gate — not just the home screen.
- Grep every direct `import` of `content.ts`'s data export and every callsite reading lesson/content data synchronously; add either a loading fallback UI or an await, don't assume "it'll be fast enough."
- Specifically test the deep-link path this project already documented as a dev workflow (`ealch-uses-usb-metro-dev`, `ealch-device-deep-link` memory) — deep-link directly into a lesson/exam screen on a cold-started app and confirm it doesn't crash or show blank/undefined content.
- Keep the splash screen visible (or show a lightweight loading state) until the lazy load resolves, rather than dismissing splash optimistically — this preserves the "looks intentional" UX goal from CONCERNS.md's fix approach while still gating correctness.
- Because Metro's `inlineRequires` only defers requires inside function bodies (not module-scope object literals per current ecosystem behavior), confirm the JSON import is moved into an actual function call (e.g., `require()` inside `initContent()`), not just re-exported through another module-scope reference that re-triggers eager evaluation.

**Warning signs:**
- A `content.lessons[x]` or similar access that used to always work now intermittently returns undefined only on cold start, only sometimes (classic race condition signature — passes in dev with fast reloads, fails on real device cold boot).
- Deep link / notification tap opens to a blank or crashed screen but normal in-app navigation works fine.
- No new loading state was added anywhere outside `_layout.tsx`/`splash.tsx`.

**Phase to address:** Performance phase (Active: "reduce cold start")

---

### Pitfall 5: Splitting/pruning the OTA content snapshot breaks Expo Updates' rollback safety net and can brick users mid-migration

**What goes wrong:**
Expo Updates' built-in crash-recovery rollback (if an update crashes on startup, it reverts to the last known-good cached update) assumes the *whole* JS bundle + assets are versioned and swapped atomically as one unit. If snapshot pruning/splitting is implemented as a separate, independently-fetched content payload (e.g., per-level snapshots fetched at runtime from the `content-snapshot` Supabase function, not bundled with the OTA update itself), you've created a second, un-versioned update axis that Expo's rollback mechanism knows nothing about. Two concrete failure modes:
1. **Rollback restores old code but not old content (or vice versa).** If the app JS bundle rolls back to a previous version after a crash, but the previously-fetched pruned/split content snapshot in AsyncStorage is the *new* format, the rolled-back JS (which expects the old snapshot shape) can crash again trying to read it — a rollback loop.
2. **Pruning is applied at publish time (server-side, in `content-snapshot/index.ts`), but a device fetches mid-prune** or fetches an older pruned snapshot that references a lesson id the current app version doesn't expect to have been removed, causing a null-reference crash on a screen that assumed the id was always populated (same risk shape as Pitfall 4).

Additionally, per CONCERNS.md, `mergeCorpus` currently overlays AsyncStorage-cached snapshot over bundled seed and favors the cache when an id exists in both — a naive prune (removing "old lesson versions") that changes which ids exist between snapshot generations can leave a stale cached snapshot on a device permanently missing content that a fresh install would have, with no cache-invalidation signal to tell the device its cached snapshot is now structurally outdated (not just content-outdated).

**Why it happens:**
OTA update versioning (Expo Updates' manifest/rollback system) and this app's own content-snapshot versioning (Postgres → snapshot function → AsyncStorage cache) are two independent versioning systems that happen to both matter for "is the user's content correct," but nothing currently keeps them in lockstep. Pruning is a natural target to optimize because it's the direct fix for the 30MB ceiling, but doing it without a compatibility/version-gate check treats it as a pure size problem when it's actually a schema-compatibility problem too.

**How to avoid:**
- Version-stamp the snapshot format itself (a `schemaVersion` or `snapshotVersion` field, separate from content version numbers already in use) and have the client refuse to adopt a snapshot whose schema version it doesn't recognize, falling back to the bundled seed instead of crashing.
- Before pruning removes an old lesson version, confirm no currently-installed app version still depends on that exact version being present — either coordinate pruning with a minimum-supported-app-version floor, or keep N-1 generations available rather than instantly hard-deleting.
- Test the actual crash-recovery path: force a bad content snapshot, confirm Expo Updates' rollback (or your own fallback-to-bundled-seed logic) actually recovers the app to a usable state rather than a rollback loop.
- Add the "refuse to publish if compressed snapshot >5MB" pre-publish check CONCERNS.md already recommends — treat this as a hard gate in the publish pipeline (Pitfall 6's guard), not a manual reminder, since it's cheap to enforce mechanically and expensive to discover via user bug reports.
- Roll out snapshot format changes gradually (staged rollout percentage, or a feature-flagged opt-in cohort) before flipping it for all users, given there's no dedicated QA to catch a bad prune before it ships broadly.

**Warning signs:**
- Pruning logic is implemented purely as "keep latest version per lesson id" with no consideration of which app versions are still in the field expecting older ids/shapes.
- No test forces a snapshot-fetch failure or malformed/pruned-incompatible snapshot and checks the app degrades gracefully instead of crashing.
- AsyncStorage cache invalidation on schema change isn't addressed — only size is.

**Phase to address:** Performance phase (Active: "implement content-snapshot pruning before it hits the AsyncStorage/OTA size ceiling")

---

### Pitfall 6: A pre-publish content-drift guard built on a single diff check will either block legitimate publishes or miss the actual hazard, because the two writers aren't symmetric

**What goes wrong:**
The stated hazard (CONCERNS.md) is specific and asymmetric: `seed.json` (git-tracked) can be *ahead* of Postgres (via seed-direct scripts), and publish always treats Postgres as source-of-truth, silently overwriting the git-ahead content. A naive drift guard implemented as "fail publish if seed.json differs from what Postgres would produce" will false-positive on *every single publish*, always, because the two are expected to differ in the normal, safe case too — Postgres has been updated with genuinely newer content than the currently-committed seed.json (the ordinary, correct-to-overwrite case), and the guard needs to distinguish "seed.json has newer real content than Postgres" (block — this is the destructive case) from "Postgres has newer real content than seed.json" (allow — this is the normal case) using version/timestamp comparison, not raw content equality.

A second, subtler failure: comparing only `content_units.body` (as the existing fix approach in CONCERNS.md suggests) misses drift in other tables/fields the seed-direct scripts also touch (overviews, section ordering, item metadata) — CONCERNS.md's own incident example includes "collapsed sons.01/02/03 + a1.04 + a2.01 *overviews*," which is a different field than `body`. A guard scoped only to `body` would have let that exact incident through.

A third failure mode specific to "two concurrent writers": if both the admin app (writing to Postgres) and a seed-direct script (writing to git) can be active in the same time window (this project's own memory notes concurrent lesson builds racing for ids), a guard that runs once at publish time and diffs against git HEAD can still race — a seed-direct script could land a commit *after* the guard's diff check but *before* the actual publish write completes, reintroducing exactly the race it was built to prevent, if the check-then-act isn't atomic.

**Why it happens:**
"Add a diff check" sounds like a simple guard, but content-drift is directional and multi-field, not a single content_units.body equality check. Teams typically build the guard around the specific incident they just had (body-only) rather than the general hazard class (any field a seed-direct script can touch), and around raw diffing (any difference = block) rather than version-aware diffing (only *regressions* = block), producing either a guard nobody can get past (so it gets bypassed/disabled under deadline pressure — the worst outcome) or a guard that passed review but doesn't actually catch the real incident shape.

**How to avoid:**
- Compare by version/timestamp, not raw equality: a lesson (or overview, or any seed-direct-writable unit) should carry a monotonic version marker; the guard blocks only when git's version for a unit is *newer* than what Postgres/publish is about to produce, not whenever they simply differ.
- Scope the guard to every table/field seed-direct scripts are known to write, not just `content_units.body` — audit `ealch-admin/scripts/author-lesson-overviews.ts`, `restore-lesson-bodies-from-seed.ts`, and any other seed-direct script for what fields they touch, and enumerate those explicitly rather than assuming `body` is the only surface (this project's own incident history proves it isn't).
- Make the check-and-publish sequence atomic or at minimum re-run the diff check immediately before the actual write within the same script invocation, not as a separate, earlier, decoupled CI step — given concurrent lesson builds are an established pattern in this project (per memory: "parallel builds now race for ids in a shared theme"), a guard with a time gap between check and act is exploitable by the exact concurrency this project already has.
- Fail loud and specific: when the guard blocks, tell the operator (you) exactly which lesson/unit/field is git-ahead and point at `restore-lesson-bodies-from-seed.ts` (the existing remediation script) rather than a generic "drift detected, publish aborted" — a guard a solo developer can't quickly act on gets `--force`d past instead of respected.
- Add an escape hatch that's auditable, not silent: an explicit `--acknowledge-overwrite <unit-id>` flag that logs the decision, rather than a blanket bypass flag that could get muscle-memory'd into every publish.

**Warning signs:**
- The guard's first real-world use blocks a normal, correct publish (Postgres genuinely ahead) — sign the directionality logic is wrong, and sign it'll get bypassed/disabled soon after if not fixed immediately.
- The guard is scoped to exactly the field(s) involved in the 2026-07-31 incident and nothing else.
- No test exists that publishes twice in a row simulating a concurrent seed-direct write landing between the guard check and the actual publish write.

**Phase to address:** Reliability phase (Active: "add a pre-publish content-drift guard")

---

## Technical Debt Patterns

| Shortcut | Immediate Benefit | Long-term Cost | When Acceptable |
|----------|-------------------|-----------------|------------------|
| Flip `verify_jwt = true` on TTS function without checking anon-key pass-through | Ships "auth added" in minutes | Cost risk unchanged, false sense of security | Never as the sole fix — always pair with per-user rate limit check inside the function body |
| Blanket `accessibilityRole="button"` default on shared `Press` wrapper | Fast, single-file fix, big jump in "controls with a role" metric | New misannouncements on switches/tabs/links; a UDL audit metric can look better while real usability for TalkBack users doesn't fully improve | Acceptable as an interim step ONLY if followed by a per-screen role audit before calling accessibility "done" |
| Raw content diff (any difference = block) for the publish drift guard | Simple to implement, catches the obvious case immediately | False-positives on every normal publish, gets disabled/bypassed under pressure, erodes trust in the guard | Never — always use directional/version-aware comparison |
| Server-fetched content snapshot decoupled from Expo Updates' own version/rollback | Solves the AsyncStorage size ceiling quickly | Breaks atomic rollback guarantees; two independent versioning systems can desync | Acceptable only with an explicit schema-version gate and fallback-to-bundled-seed on mismatch |
| Client-only entitlement migration (sync new purchases, skip backfill) | Half the engineering effort, ships faster | Strands existing paying users who don't trigger the new purchase-success path | Never for this app — it already has a paying user base per Active requirements |

## Integration Gotchas

| Integration | Common Mistake | Correct Approach |
|-------------|-----------------|-------------------|
| Supabase Edge Functions (auth) | Assuming `verify_jwt = true` means "only real logged-in users can call this" | It means "any valid Supabase JWT" — anon key included; check `ctx.userClaims.sub`/user identity explicitly inside the handler for a real per-user gate |
| Supabase Edge Functions (rate limit) | No built-in per-function rate limiting exists; teams assume Supabase provides it | Implement explicitly (e.g., Upstash Redis or a Postgres-backed counter keyed on `auth.uid()`), and pick per-user not per-IP granularity for a mobile client base |
| Expo Updates + AsyncStorage | Treating content payload versioning as independent from the OTA JS bundle version | Tag every locally-cached payload with a schema version; refuse/fallback on mismatch after any OTA JS update |
| RevenueCat / IAP entitlement sync | Assuming a client-side `syncPurchases()` call alone covers migration | Prefer server-side reconciliation (post raw receipts to backend) for historical backfill; client sync only catches users who actively open the updated app |
| React Native accessibility (TalkBack) | Applying one role to a generic shared wrapper component | Thread `role` as an explicit required prop per call site; audit real usage, don't default |

## Performance Traps

| Trap | Symptoms | Prevention | When It Breaks |
|------|----------|------------|-----------------|
| Module-scope JSON import inside `inlineRequires:false` Metro config | 2.4s+ blank screen on cold start on mid-range devices | Move the `require`/import inside a function body called from `initContent()`, gate all renders behind an explicit ready-state | Already broken today at 2.42MB bytecode; will worsen linearly as content grows |
| Unbounded append-only content snapshot growth | OTA updates silently fail once snapshot exceeds AsyncStorage's practical ~6MB or the hardcoded 30MB ceiling | Prune old lesson versions at publish time; pre-publish size check that fails the publish rather than shipping an oversized snapshot | Snapshot already at ~27MB against a 30MB ceiling — next large content batch (e.g., B1 in a future milestone) will trip it |
| 15s `setInterval` alarm watcher mounted at app root for app lifetime | Continuous battery drain even while backgrounded if audio is playing | Gate the interval behind `AppState === 'active'`, stop on background | Measurable drain accumulates over hours of background time; worsens with more concurrent app instances/users, but per-device not user-scale |

## Security Mistakes

| Mistake | Risk | Prevention |
|---------|------|------------|
| Treating `verify_jwt` toggle as sufficient auth for a cost-sensitive endpoint | Anon key still authenticates; a scripted client using the public anon key (extractable from any app binary) still gets unlimited TTS | Add explicit per-user rate limiting and consider requiring a *signed-in* (non-anonymous) session specifically for TTS, not just "has a JWT" |
| Per-IP rate limiting on a mobile-client API | Legitimate users behind carrier-grade NAT/shared wifi get blocked together; a determined abuser rotates IPs trivially and isn't slowed at all | Rate limit per authenticated user id (`auth.uid()`), with a secondary coarse IP-based limit only as a backstop against pre-auth abuse |
| Silent entitlement downgrade on migration treated as a UX bug, not a security/trust issue | Paying users lose access with no explanit; erodes trust, generates support burden, and possibly App Store review complaints (revenue not delivered as advertised) | Treat entitlement reconciliation failures as loud, logged, monitored events — same rigor as a payment failure, not a cache-miss |
| Content-drift guard escape hatch implemented as a silent bypass flag | Defeats the entire guard's purpose the first time someone (future-you, under deadline pressure) uses it without thinking | Require the bypass to name the specific unit being overwritten and log it, so there's an audit trail of every intentional overwrite |

## UX Pitfalls

| Pitfall | User Impact | Better Approach |
|---------|-------------|-------------------|
| Paywall reappearing for a previously-entitled user with no explanation | User feels cheated/scammed, may leave a negative review or request a refund | Show an explicit "restoring your purchase..." state during reconciliation rather than immediately re-showing the paywall on ambiguous entitlement state |
| TalkBack retrofit that adds roles but not correct state (e.g., switch role without `accessibilityState`) | Screen reader users get a technically-labeled but functionally confusing control (can't tell on/off state) | Always pair `accessibilityRole` with the matching `accessibilityState`/`accessibilityValue` for the control type |
| Content snapshot pruning removes a lesson version a user was mid-progress on | User's saved progress references content that silently vanishes, breaking resume | Never prune a lesson version that has active in-progress user state pointing at it; prune only fully-superseded, unreferenced versions |
| Cold-start lazy-load shows a longer perceived wait than the old fixed 2400ms splash if not paired with a real loading indicator | Users interpret an unbounded/indeterminate wait as "app is broken" more readily than a fixed splash | Replace the fixed-duration splash with a state-driven one (bundle loading → parsing → merging) so the wait always has visible progress |

## "Looks Done But Isn't" Checklist

- [ ] **TTS auth/rate-limit fix:** Often missing a test that calls the endpoint with *no* Authorization header at all (the actual threat model) — verify it 401s, and verify a logged-out app user still gets usable TTS via fallback.
- [ ] **Entitlement sync:** Often missing a backfill/reconciliation path for users who purchased *before* the sync code existed — verify by simulating an existing local cache with no matching Supabase row.
- [ ] **Accessibility (TalkBack) pass:** Often missing correct roles for non-button interactive types (switch, tab, link, header) — verify by grepping for `Switch`, `Tab`, list-row-as-navigation patterns separately from the generic `Press` audit.
- [ ] **Cold-start lazy load:** Often missing coverage for entry points other than the normal splash→home flow — verify deep links and notification-tap launches still render correctly, not just the standard cold-boot path.
- [ ] **Snapshot pruning:** Often missing a schema-version gate — verify an app on the previous JS bundle version can still safely load (or safely reject) a newly-pruned snapshot shape.
- [ ] **Content-drift guard:** Often missing directionality (blocks normal publishes) or field scope (misses non-`body` drift like overviews) — verify against the exact 2026-07-31 incident shape as a regression test.

## Recovery Strategies

| Pitfall | Recovery Cost | Recovery Steps |
|---------|----------------|-----------------|
| Entitlement migration strands paying users | MEDIUM | Ship an emergency reconciliation pass keyed on store receipt validation (call `restorePurchases()` against Apple/Google directly, bypass Supabase state) as a manual "Restore Purchases" button; backfill Supabase rows from validated receipts after |
| Content-drift guard blocks all publishes (false positive) | LOW | Revert the guard to warn-only (log, don't block) while directionality logic is fixed; never leave the team (you) unable to publish for more than a few hours |
| Snapshot pruning breaks an in-field app version | MEDIUM-HIGH | Republish the previous, unpruned snapshot generation immediately (keep N-1 generations retained specifically for this); use `eas update:rollback` on the JS side if the break is bundle-related, not just content-related |
| TalkBack retrofit regression (wrong role on a non-button) | LOW | Single-file/single-screen fix once identified; the risk is in *not noticing*, not in the fix cost — prioritize detection (real-device TalkBack sweep) over recovery planning |
| Lazy content load race crashes a deep-link/notification entry point | LOW-MEDIUM | Add the missing ready-state gate to that specific entry point; low cost per-incident but potentially high count of entry points to audit (home, deep link, notification tap, widget/shortcut if any) |

## Pitfall-to-Phase Mapping

| Pitfall | Prevention Phase | Verification |
|---------|-------------------|----------------|
| TTS auth flip is cosmetic (anon key still passes) | Security/TTS phase | Test calling the endpoint with zero auth headers and with only the anon key; confirm both are rejected or rate-limited, not just "has a JWT" |
| Entitlement migration strands existing paying users | Monetization phase | Simulate an existing local-cache-only user against the new Supabase-backed code path before shipping; confirm no downgrade without reconciliation attempt |
| Blanket button role breaks non-button controls | Accessibility phase | Real-device TalkBack sweep per screen, not just a grep-for-role-presence count; specifically test switches/tabs/links after the change |
| Lazy seed.json load breaks non-standard entry points | Performance/cold-start phase | Deep-link and notification-tap launch tests on a cold-started app, in addition to normal splash-flow testing |
| Snapshot pruning desyncs from OTA rollback | Performance/snapshot-pruning phase | Force a bad/incompatible snapshot and confirm the app falls back gracefully instead of crash-looping |
| Drift guard blocks normal publishes or misses non-body drift | Reliability phase | Regression test reproducing the exact 2026-07-31 incident shape (overview collapse, not just body); dry-run guard against a real Postgres-ahead publish to confirm it does NOT block |

## Sources

- [Rate Limiting Edge Functions — Supabase Docs](https://supabase.com/docs/guides/functions/examples/rate-limiting) — HIGH confidence, official docs
- [Securing Edge Functions — Supabase Docs](https://supabase.com/docs/guides/functions/auth) — HIGH confidence, official docs, confirms `verify_jwt` default and anon-key pass-through behavior
- [Function Configuration — Supabase Docs](https://supabase.com/docs/guides/functions/function-configuration) — HIGH confidence
- [Rate limits — Supabase Auth Docs](https://supabase.com/docs/guides/auth/rate-limits) — HIGH confidence, confirms default IP-based limiting behavior and its caveats
- [Rate Limiting on Edge Functions — Supabase GitHub Discussion #34707](https://github.com/orgs/supabase/discussions/34707) — MEDIUM confidence, community-confirmed absence of built-in per-function rate limiting
- [Importing your Historical Purchases — RevenueCat Docs](https://www.revenuecat.com/docs/migrating-to-revenuecat/migrating-existing-subscriptions) — HIGH confidence, official docs on client vs server migration tradeoffs
- [RevenueCat-Samples/entitlement-sync-python](https://github.com/RevenueCat-Samples/entitlement-sync-python) — MEDIUM confidence, reference implementation pattern
- [Accessibility Role — React Native AMA (Nearform)](https://nearform.com/open-source/react-native-ama/guidelines/accessibility-role) — MEDIUM confidence, widely-cited RN accessibility guidance
- [React Native Android Accessibility Tips — Callstack](https://www.callstack.com/blog/react-native-android-accessibility-tips) — MEDIUM confidence, covers absolute-positioning/TalkBack interaction specifically
- [Accessibility — React Native official docs](https://reactnative.dev/docs/accessibility) — HIGH confidence, official
- [React Native cold start / Hermes / lazy screens — DEV Community](https://dev.to/davekurian/react-native-cold-start-drops-when-hermes-lazy-screens-and-trim-bundles-ship-together-10pp) — LOW-MEDIUM confidence, community source, consistent with Metro's documented `inlineRequires` scoping behavior
- [The Realities of OTA Updates with Expo — Medium](https://medium.com/@biodunbio14/the-realities-of-ota-updates-with-expo-what-i-wish-i-knew-before-i-pushed-to-production-508561d7a043) — LOW-MEDIUM confidence, community post-mortem style source
- [Rollbacks — Expo Documentation](https://docs.expo.dev/eas-update/rollbacks/) — HIGH confidence, official, confirms rollback mechanism scope (JS bundle, not arbitrary app-managed caches)
- [Updates — Expo SDK Docs](https://docs.expo.dev/versions/latest/sdk/updates/) — HIGH confidence, official
- BeechCMS optimistic conflict guard (PR #431 / Issue #74) — MEDIUM confidence, real-world reference implementation of version-aware (not raw-diff) publish conflict detection, directly informs Pitfall 6's directionality argument
- `.planning/codebase/CONCERNS.md` (this repo) — HIGH confidence, first-party, all six pitfalls are grounded in this project's own documented incidents and current code structure

---
*Pitfalls research for: Ealch launch-readiness hardening milestone*
*Researched: 2026-09-19*
