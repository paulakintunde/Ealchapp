# Phase 5 Security Audit — Paywall Coverage Expansion & Upgrade Nudge

**Audited:** 2026-09-20
**Auditor:** Claude (gsd-security-auditor)
**ASVS Level:** 1
**Block on:** high
**Threats:** 38/38 verified — 0 open

Every threat in the 7 plans' STRIDE registers (T-05-01 through T-05-38) was independently re-verified against current source in this pass. Plan-stated evidence was treated as a claim to check, not a fact to trust — each `mitigate` disposition was grepped/read in the cited file, and each `accept` disposition's rationale (most of which lean on "the corpus is bundled" and "the real access control is server-side") was itself checked against the actual server-side code, not just the plan's prose.

## Accepted Risks Log

All `accept`-disposition threats below share one structural fact, independently confirmed against source rather than assumed: the app bundles its full content corpus inside the binary, so every client-side band/lock check in this phase is a UX and business-model boundary, not an access-control boundary. The two genuine server-side controls this phase's accept rationale leans on were verified to exist and to be untouched by Phase 5:

- **Coach turn cap** — `ealch-v2/supabase/functions/coach/index.ts`: `bumpTurn(subject, routed.freeTurnsPerDay)` runs before any provider call, fails closed on quota-plane errors (`the free cap applies, never a free unlimited`), and refuses with `reason: "turn_cap"` when exhausted (lines 396-420).
- **Exam-tier server refusal** — `ealch-v2/supabase/functions/start-exam-attempt/index.ts`: `{ allowed: false, reason: 'needs-exam-tier' }` (lines 50, 70) is computed server-side from the JWT-verified uid's entitlement mirror, never from a client-sent flag.

| Threat ID | Category | Component | Accepted Risk | Rationale Verified |
|---|---|---|---|---|
| T-05-01 | Tampering | `drillDeckGate`/`drillLevelLocked` client band gate | A device owner can bypass any client-side band check by reading the bundled corpus | Corpus is bundled by design; coach quota and exam server refusal (above) are the real boundaries and are untouched — confirmed in source |
| T-05-02 | Tampering | `roleplayNudgeDue` reading persisted `lastNudgeAt` | Tampering only suppresses an upsell banner | `useStore.ts` field is local AsyncStorage; no access/revenue path reads it |
| T-05-03 | Spoofing | New `AnalyticsEvent` members | A forged client event pollutes a dashboard only | `track()` in `src/services/analytics.ts` is outbound-only, no-ops without `ENV.posthogKey` (confirmed: `if (!ENV.posthogKey) return;`); reconciliation banner fires as a direct side effect, not an analytics listener |
| T-05-05 | Denial of service | `freeBandItems` over a large deck | One extra `Array.filter` over an already-materialised slice | Confirmed in `entitlement.logic.ts:189-192`, same order of work as existing call sites |
| T-05-06 | Tampering | Lock pill on `theme.tsx`/`*themes.tsx` rows | Purely visual; enforcement is at the destination screen | `den.tsx`/drill screens confirmed to gate independently at render time |
| T-05-08 | Repudiation | Lock-visibility plan, no new surface | No new analytics or persisted audit surface introduced | Confirmed — Plan 02 touches only pill rendering, `gate_blocked` calls pre-existing |
| T-05-09 | Elevation of privilege | Locked step stays pressable | Matches `den.tsx`'s shipped convention; press routes to a self-gating destination | Confirmed identical `onPress` shape in `den.tsx` (`tabLocked` branch tracks `gate_blocked` then routes, does not grant) |
| T-05-16 | Spoofing | Forged `?from=` on paywall | `from` only selects display copy; no branch grants entitlement | Confirmed: no `setEntitlement(` call exists anywhere in `app/paywall.tsx` |
| T-05-17 | Tampering | Forced `?from=gate:examiner` on a would-be subscriber | Self-inflicted, self-repairing UX inconvenience only | Confirmed no state write in that branch |
| T-05-19 | Elevation of privilege | Dismissing paywall to reach gated content | Every close is `router.back()`; destination re-fires its own gate | Confirmed 3 `onClose={() => router.back()}` sites, no entitlement write |
| T-05-20 | Tampering | Client exam pre-check bypass | Server's `startExamAttempt` refuses regardless of client decision | Confirmed above |
| T-05-22 | Tampering | `useUI.banner` slot edited | Not persisted, not networked; worst case is a misleading in-app banner to 3 self-gating routes | Confirmed `useUI.ts` has no persistence middleware, process-local Zustand store |
| T-05-24 | Elevation of privilege | Banner press reaching gated content | All 3 press targets (`/speak`, `/settings`, `/paywall`) are ungated or self-gating | Confirmed in `PushBanner.tsx`'s `onBannerPress`; `hideBanner()` runs before every push |
| T-05-27 | Tampering | `lastNudgeAt` edited to suppress nudge forever | Fewer upsell banners only, no access/revenue impact | Same as T-05-02 |
| T-05-28 | Tampering | Attempt log edited to fake spent allowance | Only moves the nudge earlier; the actual block is `roleplayLocked` in `start()`, untouched by the nudge path | Confirmed `roleplay.tsx` calls `roleplayLocked(...)` independently at line 101, separate from `roleplayNudgeDue` at line 235 |
| T-05-38 | Spoofing | Deep links used during device verification | Deep links used match the app's own navigation routes/params exactly | Accepted as a verification-methodology risk, not a code risk; 05-07-SUMMARY.md confirms no discrepancy found |

## Threat Verification (Mitigate Disposition)

| Threat ID | Category | Component | Evidence |
|---|---|---|---|
| T-05-04 | Information disclosure | New i18n strings | `src/i18n/strings.ts:640,1090` — `reconcileBody` is a fixed string in both FR/EN, no interpolation, no cause named |
| T-05-07 | Information disclosure | Resume pointer naming a gated lesson | `app/lesson.tsx:185` and `app/narrated.tsx:102` — `if (L && !bandLocked) setResume(...)`, guarded write confirmed in both files |
| T-05-11 | Spoofing | Deep link forging `?level=a1` on an A2 theme | `entitlement.logic.ts:189-192` — `freeBandItems` filters on each item's own `level` field from the corpus, never trusts the route param as an allowlist |
| T-05-12 | Spoofing | Deep link with a garbage `?level=` value | `entitlement.logic.ts:198-201` — `drillLevelLocked` returns `true` (locked) for any value not in `FREE_BANDS`, fails closed |
| T-05-13 | Information disclosure | Gated content painted before redirect | All four drill screens (`flashcards.tsx:313-314`, `dictation.tsx:235-236`, `voiceflash.tsx:315-316`, `sentence.tsx:339-340`) short-circuit `if (bandLocked) return <View .../>` before any deck JSX |
| T-05-15 | Elevation of privilege | Gate false-blocking free content | `entitlement.logic.ts:207-215` — `drillDeckGate` returns `locked: false` for empty `raw`; confirmed by `entitlementDrillGate.test.ts` existing and passing per 05-VERIFICATION.md |
| T-05-18 | Information disclosure | Misleading purchase promise on exam gate | `app/paywall.tsx:191-218` — `gate:examiner` branch has no plan picker/purchase action, checked before the `premium \|\| purchased` branch at line 222; `gate:examiner` absent from `PAYWALL_COPY` map (line 177-181) |
| T-05-21 | Repudiation | Exam paper-list gate emitting no analytics | `app/exam.tsx:143` — `track('gate_blocked', { feature: 'examiner', from: 'exam' })` now present alongside the two pre-existing sites in `exam-paper.tsx:114,132` |
| T-05-23 | Denial of service | Banner pile-up | `useUI.ts:28` — `banner: BannerState \| null`, single nullable field, structurally cannot stack; `useAlarmWatcher.ts:27` — reminder gated on `!banner` (widened from the old `!bannerVisible`); `PushBanner.tsx:74-81` — 10s auto-hide for the two new kinds, generation-token-gated |
| T-05-25 | Information disclosure | Reconciliation banner copy | `PushBanner.tsx:49` — `bodyText` for `reconciliation` is `T.reconcileBody` verbatim, no `.replace()` interpolation (unlike the `speakReminder` branch which does interpolate) |
| T-05-26 | Repudiation | Nudge taps invisible to funnel | `PushBanner.tsx:56` — `trackEvent('upgrade_nudge_tapped', { trigger: banner.trigger })` on the press path |
| T-05-29 | Spoofing | Reconciliation banner raised on a false downgrade | `useEntitlement.ts:53-74` — banner raised only inside `wasDowngraded(prev.entitlement, entitlement, guardedNow())`; `wasDowngraded` (`entitlement.logic.ts:152-155`) returns `false` on a user-id change or an already-inactive previous entitlement |
| T-05-30 | Repudiation | Downgrade with no user notice | `useEntitlement.ts:71` — `useUI.getState().showBanner({ kind: 'reconciliation' })` called as a direct side effect inside `setEntitlement`, independent of `track()`/PostHog availability |
| T-05-31 | Information disclosure | Reconciliation copy over-claiming a cause | Same evidence as T-05-04/T-05-25; `showBanner({ kind: 'reconciliation' })` call carries no payload/props |
| T-05-32 | Elevation of privilege | Import cycle / re-entrancy `useEntitlement → useUI` | `useUI.ts:1-2` imports only `zustand` and a type-only `DictEntry`; one-way, acyclic. `showBanner` called via `useUI.getState()` outside React render, matching `useAlarmWatcher.ts`'s existing pattern. Confirmed clean by `npm run typecheck` per 05-VERIFICATION.md |
| T-05-33 | Denial of service | Nudge shown on every completed scenario | `roleplay.tsx:235-238` — 24h cooldown via `roleplayNudgeDue`; `setField('lastNudgeAt', now)` at line 236 runs BEFORE `showBanner(...)` at line 238, closing the double-fire race; single-slot `useUI.banner` also cannot stack |
| T-05-34 | Tampering | `DEV_UNLOCK_A2` accidentally `true` during device pass | `entitlement.logic.ts:242` — `const DEV_UNLOCK_A2 = false;` confirmed at time of audit; `a2LockLifted()` additionally requires `typeof __DEV__ !== 'undefined' && __DEV__`, so a release build cannot take the branch regardless |
| T-05-35 | Repudiation | Screen-level behaviour only ever asserted as source text | `05-GATING-RULE.md` + `05-07-SUMMARY.md` — the blocking device-verification checkpoint (21 items) was completed and recorded, per developer's "approved" |
| T-05-36 | Information disclosure | Gating rule documented as a security control | `05-GATING-RULE.md:70,72` — heading `## What this rule is NOT` followed by `**Not a security boundary.**`, names both server-side controls (verified to exist, see Accepted Risks Log above) |
| T-05-37 | Elevation of privilege | False-negative gate walling off content a paying user bought | `05-GATING-RULE.md` Section 8 / device pass items B5-B7 confirmed no over-blocking; `drillDeckGate`'s empty-raw-never-locked rule (T-05-15) is the code-level backstop |

## Threat Verification (Not Directly Code-Gated, Doc-Anchored)

T-05-35, T-05-36, T-05-37 (Plan 07's gating-rule/device-pass threats) are classified `mitigate` in the register but their mitigation is a documentation-and-verification artifact rather than a runtime code path; each was independently confirmed present in `05-GATING-RULE.md` and `05-07-SUMMARY.md` rather than accepted on the plan's own say-so.

## Unregistered Flags

None. No SUMMARY.md in this phase reported a `## Threat Flags` entry without a mapping to an existing threat ID. `05-07-SUMMARY.md` explicitly confirms T-05-34 through T-05-38 closed by the device pass, with no new attack surface flagged.

## Corroborating, Non-Register Finding (noted, not counted toward the 38)

Two independent code-review passes (`05-REVIEW.md`, `05-REVIEW-RECHECK.md`) found and fixed a non-constant-time secret comparison in the Adapty webhook handler (WR-04), which was not an authored threat in any of the 7 plans' registers because it was found during implementation review, not planning. Independently re-confirmed present in this audit:

- `ealch-v2/supabase/functions/adapty-webhook/index.ts:71` — `timingSafeEqual` function defined
- `ealch-v2/supabase/functions/adapty-webhook/index.ts:84` — `if (!secret || !timingSafeEqual(auth, secret))` replaces the prior `!==` comparison

This is closed. It is out of scope for this phase's own threat register (Phase 4/webhook code, not Phase 5), but is recorded here since it is genuine, verified, security-relevant code in a file adjacent to this phase's entitlement-write path.

## Verification Method Note

This audit did not re-run the project's test suite or typecheck; it independently re-derived each mitigation claim by reading the cited source files directly (line numbers above are current as of audit time) rather than trusting `05-VERIFICATION.md`'s or the plans' own grep output. Where `05-VERIFICATION.md`'s claims matched what this audit found directly in source, that is noted as corroboration, not as the evidence itself.
