# Phase 4: Entitlement Verification & Signed-Out Purchase Fix - Context

**Gathered:** 2026-09-20
**Status:** Ready for planning

<domain>
## Phase Boundary

Making sure a purchase reliably reaches the right account (whether bought signed-in or signed-out), that every server-side check of entitlement is an explicit, trustworthy decision rather than an implicit assumption, and that an already-paying user is never silently downgraded — especially mid-exam. This phase is about entitlement **integrity**, not paywall **coverage** (which content is gated is Phase 5's job, PAY-02).

**Important finding from source-read research during this discussion (not just `CONCERNS.md`, which PROJECT.md already flags as stale on this exact topic):** much of what ROADMAP.md's Phase 4 section assumes is missing already exists and works:
- `restorePurchases()` (`ealch-v2/src/services/purchases.ts`) already returns accurate `{ok, premium, message}` and is already wired into BOTH `app/settings.tsx:145-154` and `app/paywall.tsx:~128` with distinct "restored" / "no purchases found" / "unavailable" UI copy and PostHog tracking (`restore_started`/`restore_completed`).
- `syncIdentity()` (same file) already calls Adapty's `identify(userId)` on sign-in and immediately re-pulls the profile — the signed-out-purchase-merge mechanism exists in code.
- Offline reconciliation (success criterion 3) already looks handled by design: cache-first load before any network touch (`useEntitlementSync`), plus a clock-floor mechanism (`advancedFloor`/`effectiveNow` in `entitlement.logic.ts`) that stops a user from rolling back their device clock to fake an active subscription.

So this phase's real, confirmed gaps are narrower than the roadmap phrasing suggests — see Decisions below.

</domain>

<decisions>
## Implementation Decisions

### PAY-01 / signed-out-purchase-merge — verify, don't rebuild
- **D-01:** Restore Purchases UI (PAY-01) is already built in both `app/settings.tsx` and `app/paywall.tsx` with correct distinct messaging. This phase's effort here is **verification and hardening**, not new UI: confirm restore actually works end-to-end on a real device against both surfaces.
- **D-02:** `syncIdentity()`'s post-`identify()` reconciliation is the one part of the signed-out-purchase-merge path that needs active verification — confirm it actually pulls the *merged* Adapty profile immediately after `identify()`, not a stale pre-merge one, per ROADMAP's own Pitfall Watch note. This is research/testing work, not a design decision — if it's found to NOT reconcile immediately, planning should treat fixing it as in-scope, not a new gray area to re-discuss.

### grade-exam entitlement gate (new build — the confirmed gap)
- **D-03:** `grade-exam` (`ealch-v2/supabase/functions/grade-exam/index.ts`) currently has **zero** check on the `examiner` entitlement feature — only `callerUid()` for cost-limiter keying (line ~95, ~376). This phase adds a real gate.
- **D-04:** Trust source = the existing Postgres `entitlements` mirror (webhook-fed by `adapty-webhook/index.ts`, the same table `coach/index.ts`'s `hasUnlimitedCoach()` already reads at lines 202-223). **Not** a live real-time call to Adapty's server API. Accept webhook lag as a documented, known limitation — consistent with `coach`'s existing fail-closed stance, no new external dependency on the exam-start path.
- **D-05:** Authorization model: check entitlement at exam **START**, not at grade time. When an entitled user starts a premium exam, the server creates an authorized exam attempt (new construct — no existing "exam attempt" schema; the existing `attempts` table in `schema.sql:57` is lesson/drill attempts, a different concept, not to be reused/overloaded for this). Grading trusts that stored authorization rather than re-checking entitlement live at grade time.
- **D-06:** Grace window = the exam paper's own `overview.minutes` duration (existing field, `src/content/schema.ts`, integer 1-180) **+ a 60-minute buffer**, measured from attempt start. An attempt that began while entitled may complete and be graded within that window even if the subscription lapses mid-exam (cancellation, natural expiry, or a delayed downgrade webhook). New attempts are rejected once entitlement is no longer active — no grace period for starting a NEW exam, only for finishing one already in progress.
- **D-07:** Client-side gate mirrors the server gate: block starting a premium exam client-side when the user isn't entitled (defense-in-depth, same posture as Phase 3's TTS guest-gate pattern, `03-CONTEXT.md`) rather than letting someone complete a whole exam only to have grading refuse it.

### Downgrade monitoring (new build, small)
- **D-08:** Scope is **app-wide**: one general "entitlement downgraded" event fires wherever `useEntitlement` (or its callers) detects a premium→free transition — covering exams, coach, roleplay, and content gates uniformly, not just the exam-attempt-rejection path. Matches ROADMAP's Pitfall Watch wording ("any entitlement state flip... a loud, logged, monitored event"), which isn't exam-specific.

### Claude's Discretion
- Exact event name(s)/schema for the downgrade-monitoring event(s) — follow the existing `trackEvent`/`analytics.ts` `AnalyticsEvent` union pattern already used for `restore_started`/`restore_completed` in `settings.tsx`.
- Whether the new exam-attempt authorization is stored as a new Postgres table vs. a signed token passed from exam-start to grade-exam — an implementation choice, not a policy one; either must satisfy D-05/D-06's behavioral contract.
- Fix `coach/index.ts`'s `hasUnlimitedCoach()` comment (line ~203), which still says "fed by the revenuecat-webhook fn" — should say `adapty-webhook` (the 2026-07-22 vendor swap updated the function itself but missed this comment). Do this now, as a small drive-by fix, per explicit user confirmation.

</decisions>

<canonical_refs>
## Canonical References

**Downstream agents MUST read these before planning or implementing.**

### Roadmap & requirements
- `.planning/ROADMAP.md` § Phase 4 — the 4 success criteria and Pitfall Watch note this phase is scoped against; the Pitfall Watch's two-option fork ("accept webhook lag" vs "add a real-time Adapty server check") is resolved by D-04 above.
- `.planning/REQUIREMENTS.md` — PAY-01, PAY-03 (this phase's scope). PAY-02 (paywall coverage) is explicitly Phase 5's — do not fold the deferred free-diagnostic-exam idea into this phase.
- `.planning/PROJECT.md` § Validated — the entry correcting `CONCERNS.md`'s stale "AsyncStorage-only, never synced" claim about entitlement; trust this correction over `CONCERNS.md` where they conflict.

### Existing entitlement architecture (read in full before touching anything)
- `ealch-v2/src/store/entitlement.logic.ts` — pure gating logic: `hasFeature`, `isPremium`, `entitlementActive`, `entitlementFromProfile` (the only producer of a non-free `Entitlement`), and the clock-floor mechanism (`advancedFloor`/`effectiveNow`) that already defends the offline-reconciliation success criterion.
- `ealch-v2/src/services/purchases.ts` — `restorePurchases()`, `syncIdentity()`, the single `apply()` entitlement-write path, and `useEntitlementSync()`'s boot/foreground/sign-in-change wiring.
- `ealch-v2/src/store/useEntitlement.ts` — the reactive read-model store; where app-wide downgrade detection (D-08) should hang, since every entitlement write passes through `setEntitlement`/`loadFor`.
- `ealch-v2/supabase/functions/coach/index.ts` lines 202-223 (`hasUnlimitedCoach`) — the exact fail-closed, Postgres-mirror-read pattern grade-exam's new gate should mirror.
- `ealch-v2/supabase/functions/adapty-webhook/index.ts` — the Postgres `entitlements` mirror's only writer; its own header comment already documents the "advisory, never runtime authority" stance this phase's D-04 continues.
- `ealch-v2/supabase/functions/grade-exam/index.ts` — `callerUid()` (~line 95) already extracts a verified auth uid; the new gate hangs off this rather than building uid verification from scratch. No existing entitlement check anywhere in this file today.

### Precedent from a prior phase
- `.planning/phases/03-tts-security-hardening/03-CONTEXT.md` D-07 and its `03-04-SUMMARY.md` — the client-gate-plus-server-gate defense-in-depth pairing D-07 (this file) mirrors, including the "server check is the real boundary, client check is additive" framing.

</canonical_refs>

<code_context>
## Existing Code Insights

### Reusable Assets
- `entitlement.logic.ts`'s `hasFeature`/`isPremium`/`entitlementActive` — the exact predicates any new exam-start gate (client or server) should call, not reinvent.
- `coach/index.ts`'s `hasUnlimitedCoach()` — copy its fail-closed Postgres-read shape (any error/missing row/missing table → not exempt) for grade-exam's new check.
- `settings.tsx`/`paywall.tsx`'s existing `trackEvent('restore_started'/'restore_completed', ...)` calls — the established analytics pattern to extend for downgrade monitoring.

### Established Patterns
- Pure "logic file" discipline (`entitlement.logic.ts`, `tts.logic.ts` from Phase 3, `content.logic.ts`) — zero RN/Deno imports, `node --test`-able. Any new pure predicate for the exam-attempt authorization window math (`overview.minutes + 60`) should follow this shape.
- Fail-closed, advisory-mirror reads for edge-function entitlement checks (`coach`'s `hasUnlimitedCoach`) — the established codebase stance, not a new pattern to invent for `grade-exam`.
- Defense-in-depth client+server gating (Phase 3's TTS guest gate) — the precedent for D-07's client-side exam-start block.

### Integration Points
- `grade-exam/index.ts`'s existing `Deno.serve` handler, right after `callerUid()` resolves — where the new entitlement/authorization check attaches.
- Wherever the client currently initiates an exam attempt (exam-start screen/flow) — where D-07's client-side block attaches; not yet located/read in this discussion, planner/researcher should locate it.
- `useEntitlement.ts`'s `setEntitlement`/`loadFor` — where D-08's app-wide downgrade detection attaches.

</code_context>

<specifics>
## Specific Ideas

The user's own policy statement, captured near-verbatim as the behavioral contract for the exam-attempt gate:
- Check premium access before a user starts a premium exam.
- When an entitled user starts an exam, create an authorized exam attempt.
- Allow that attempt to be completed and graded within a limited window even if the subscription expires while the exam is underway (resolved as paper duration + 60 minutes, D-06).
- Reject new premium exam attempts once entitlement is no longer active.
- Treat the server's entitlement record as authoritative; never trust a client-side `isPremium` value for the actual grading decision (client-side check, D-07, is additive/UX-only, matching the Phase 3 precedent).
- Add monitoring before rollout (resolved as app-wide downgrade event, D-08).
- Test the existing purchase and restore paths instead of building more payment UI (D-01/D-02).
- Correct the stale RevenueCat reference now (Claude's Discretion).

</specifics>

<deferred>
## Deferred Ideas

- **Free diagnostic/sample exam + "let everyone browse exam info" policy** — this is a paywall-*coverage* decision (which content is gated), which is explicitly Phase 5's job (PAY-02: "The paywall gates a coherent, explainable slice of content"). Deferred there rather than decided here, per explicit user confirmation. Phase 5 planning should pick this up as a candidate policy alongside PAY-02's own scope.

</deferred>

---

*Phase: 04-entitlement-verification-signed-out-purchase-fix*
*Context gathered: 2026-09-20*
