---
phase: 05-paywall-coverage-expansion-upgrade-nudge
verified: 2026-09-20T00:00:00Z
status: passed
score: 12/12 must-haves verified
overrides_applied: 0
---

# Phase 5: Paywall Coverage Expansion & Upgrade Nudge Verification Report

**Phase Goal:** The paywall gates a coherent, explainable slice of the catalogue, and free users see a reason to upgrade before they hit a wall.
**Verified:** 2026-09-20
**Status:** passed
**Re-verification:** No — initial verification

## Goal Achievement

### Observable Truths (ROADMAP Success Criteria, PAY-02/PAY-05)

| # | Truth | Status | Evidence |
|---|-------|--------|----------|
| 1 | One coherent, explainable gating rule is documented and applied consistently across the catalogue, replacing the single arbitrarily-gated lesson | VERIFIED | `.planning/phases/05-.../05-GATING-RULE.md` states the rule in one sentence, cites `FREE_BANDS`/`PREMIERE_FEATURES`/predicate names in `entitlement.logic.ts` rather than restating them, and inventories all 12 enforcement surfaces (den, lesson, narrated, placement, flashcards, dictation, voiceflash, sentence, chat, roleplay, exam, exam-paper). The four previously-ungated drill screens (`flashcards.tsx`, `dictation.tsx`, `voiceflash.tsx`, `sentence.tsx`) now all call `drillDeckGate(...)` — confirmed directly in source, not just cited in the doc. |
| 2 | A free user encountering gated content sees a clear paywall modal explaining what they get, with no accidental dismiss/bypass | VERIFIED | `app/paywall.tsx` has `PAYWALL_COPY` keyed on `from` (`gate:levels`/`gate:coach`/`gate:roleplay`), a dedicated `gate:examiner` explainer branch checked before the `premium` branch (`if (from === 'gate:examiner')` at line 191, before `if (premium \|\| purchased)` at line 222), and all three branches close via `onClose={() => router.back()}` (`grep -c "onClose={() => router.back()}"` = 3). No `setEntitlement(` call exists anywhere in `paywall.tsx` — dismissing never unlocks anything. Confirmed by `paywallContextWiring.test.ts` (5/5 passing). |
| 3 | A free user, at a sensible moment during normal use (not only when blocked), sees a proactive upgrade nudge | VERIFIED | `app/roleplay.tsx`'s `continueTurn` completion branch calls `roleplayNudgeDue(...)` and raises `showBanner({ kind: 'upgradeNudge', trigger: 'roleplay', copy: T.nudgeRoleplayBody })` at the moment the day's free scenario is spent, before any block occurs (the block itself is a separate, untouched `roleplayLocked` check in `start()`). Cooldown (`NUDGE_COOLDOWN_MS` = 86,400,000 ms) is unit-tested in `entitlementNudge.test.ts` and wiring-tested in `nudgeTriggerWiring.test.ts` (4/4 passing). |
| 4 | A previously-entitled user never sees the paywall reappear without an explanation/reconciliation state shown first | VERIFIED | `src/store/useEntitlement.ts`'s `setEntitlement`, inside the existing `wasDowngraded(...)` branch, calls `useUI.getState().showBanner({ kind: 'reconciliation' })` directly (not via a subscription — confirmed no `subscribe(` call exists). Inherits Phase 4's two false-positive guards (user-id change, already-inactive previous entitlement) and is never raised from `loadFor` (offline cold start), pinned by `entitlementDowngrade.test.ts` (5/5 passing, including the 3 new Phase 5 assertions). |
| 5 | The nudge shares one common interruption/nudge visual pattern with Phase 10's rating prompt, extending `PushBanner.tsx` rather than inventing a new surface | VERIFIED | `src/store/useUI.ts` exposes `banner: BannerState \| null` (tagged union: `speakReminder` \| `upgradeNudge` \| `reconciliation`), structurally guaranteeing one banner at a time. `PushBanner.tsx` derives masthead/badge/body/press-target from `banner.kind`; the union's `trigger: 'roleplay' \| 'coach'` field is explicitly pre-reserved for a future coach nudge, and the gating-rule doc names a fourth-kind extension point for Phase 10. `grep -rc "bannerVisible\|bannerAt"` across `ealch-v2/src` and `ealch-v2/app` returns 0 — the old boolean API is fully gone. |

**Score:** 5/5 ROADMAP success criteria verified. (12/12 counting the plan-level must-haves collapsed above; see artifact table below for the full breakdown.)

### Required Artifacts

| Artifact | Expected | Status | Details |
|----------|----------|--------|---------|
| `ealch-v2/src/store/entitlement.logic.ts` | `drillDeckGate`/`freeBandItems`/`drillLevelLocked`/`roleplayNudgeDue`/`NUDGE_COOLDOWN_MS` exported, zero new imports | VERIFIED | All 5 exports present; `grep -v comments \| grep -c "^import"` = 1 (unchanged, type-only). |
| `ealch-v2/app/flashcards.tsx`, `dictation.tsx`, `voiceflash.tsx`, `sentence.tsx` | Band gate via `drillDeckGate`, reactive to corpus, redirect + short-circuit | VERIFIED | All four confirmed calling `drillDeckGate(`, all four subscribe to `useContent((s) => s.corpus)` and include `corpus` in the gate's dependency array (closing CR-01 from code review), all four have the `if (bandLocked) { return <View .../> }` short-circuit before any content JSX. |
| `ealch-v2/app/lesson.tsx`, `narrated.tsx` | `setResume` gated on `!bandLocked` | VERIFIED | `if (L && !bandLocked) setResume(...)` present in both; the old unguarded form is gone. |
| `ealch-v2/app/theme.tsx`, `flashthemes.tsx`, `dictationthemes.tsx`, `voicethemes.tsx`, `sentencethemes.tsx` | PREMIÈRE lock pill on locked steps/rows, keyed on `FREE_BANDS`/`useFeature('levels.all')` | VERIFIED | `bandLocked` computed and pill rendered in `theme.tsx`; all four `*themes.tsx` screens key the row pill on `!(FREE_BANDS...).includes(r.lo)`. Rows/steps remain pressable (`onPress` unchanged, confirmed by `lockVisibilityWiring.test.ts`, 3/3 passing). |
| `ealch-v2/app/paywall.tsx` | `PAYWALL_COPY` map + `gate:examiner` explainer branch | VERIFIED | Confirmed at lines 177 (map), 182 (lookup), 191 (`gate:examiner` branch, checked before the `premium` branch at 222). |
| `ealch-v2/app/exam.tsx`, `exam-paper.tsx` | `from: 'gate:examiner'` on all 3 exam-gate pushes | VERIFIED | 1 occurrence in `exam.tsx`, 2 in `exam-paper.tsx` — matches plan spec exactly. |
| `ealch-v2/src/store/useUI.ts` | `BannerState` tagged union replacing `bannerVisible`/`bannerAt` | VERIFIED | `export type BannerState` present with 3 members; `bannerGen` token added during the review-fix cycle to prevent stale-timer collisions (WR-02 fix, confirmed present). |
| `ealch-v2/src/components/PushBanner.tsx` | Kind-driven masthead/body/badge/press-target, 10s auto-hide for new kinds, generation-gated | VERIFIED | `banner?.kind` branches confirmed for masthead, body, badge neutrality (reconciliation), press target; `bannerGen`-gated auto-hide effect present (`[banner?.kind, bannerGen]`). |
| `ealch-v2/src/store/useStore.ts` | `lastNudgeAt` persisted field | VERIFIED (via full suite + typecheck) | Referenced correctly by `roleplay.tsx` (`useStore.getState().lastNudgeAt`, `setField('lastNudgeAt', now)`), consistent with plan 06's spec. |
| Six wiring test files (`entitlementDrillGate`, `entitlementNudge`, `lockVisibilityWiring`, `drillGateWiring`, `paywallContextWiring`, `bannerSlotWiring`, `nudgeTriggerWiring`) + extended `entitlementDowngrade.test.ts` | Source-text/unit assertions pinning every wiring | VERIFIED | Ran directly: 45/45 tests pass across these files (see Behavioral Spot-Checks). |
| `.planning/phases/05-.../05-GATING-RULE.md` | Coherent gating rule document citing code | VERIFIED | Exists, cites `entitlement.logic.ts` 6+ times, inventories all 12 surfaces, states "Not a security boundary," names 5 deferred follow-ups, contains no bracketed authoring instructions, no em dash. |
| `.planning/phases/05-.../05-VALIDATION.md` | All rows resolved, `nyquist_compliant: true` | VERIFIED | 17/17 rows `green`, `wave_0_complete: true`, `status: complete`. |

### Key Link Verification

| From | To | Via | Status | Details |
|------|-----|-----|--------|---------|
| `entitlement.logic.ts` (`drillDeckGate`) | `FREE_BANDS` | Reuses single source of truth | WIRED | `freeBandItems`/`drillLevelLocked` both reference `FREE_BANDS as readonly string[]`, never a literal list. |
| Four drill screens | `drillDeckGate` | Render-time gate + redirect | WIRED | Confirmed call site, redirect (`router.replace(... 'gate:levels')`), and short-circuit in all four; also confirmed **reactive** to `useContent`'s corpus (closes CR-01, see Data-Flow Trace). |
| `exam.tsx`/`exam-paper.tsx` | `paywall.tsx` | `from: 'gate:examiner'` | WIRED | All 3 call sites pass the param; `paywall.tsx`'s branch consumes it ahead of the premium branch. |
| `useAlarmWatcher.ts`/`settings.tsx` | `useUI.showBanner` | `{ kind: 'speakReminder', at }` | WIRED | Both writers migrated; old boolean form fully removed tree-wide (`grep -rc` = 0). |
| `roleplay.tsx` | `useUI.showBanner` | `{ kind: 'upgradeNudge', trigger: 'roleplay', copy }` | WIRED | Confirmed at the scenario-completion branch, cooldown timestamp written before the banner is raised (double-fire guard). |
| `useEntitlement.ts` (`setEntitlement`) | `useUI.showBanner` | Second statement inside the existing `wasDowngraded` branch | WIRED | Confirmed no new listener/subscription file created; `loadFor` untouched. |

### Data-Flow Trace (Level 4)

| Artifact | Data Variable | Source | Produces Real Data | Status |
|----------|---------------|--------|---------------------|--------|
| `flashcards.tsx`/`dictation.tsx`/`voiceflash.tsx`/`sentence.tsx` gate | `gate` (`drillDeckGate` result) | `content.itemsFor(...)`, a non-reactive `getState()` read | Initially flagged as a gap (code review CR-01: memo not reactive to OTA-hydrated corpus, so a cold-start deep link could compute the gate against a not-yet-hydrated seed and silently under-gate) | FLOWING — fixed in commit `04cf755`/`fa49252`. All four screens now subscribe via `useContent((s) => s.corpus)` and include `corpus` in the `useMemo` dependency array (confirmed directly in source, not just via commit message); `flashcards.tsx` was further hardened in a follow-up commit to depend on the full `corpus` object rather than `corpus.themes` alone (closing a maintainability/fragility risk an independent recheck review flagged, WR-A). |

### Behavioral Spot-Checks

| Behavior | Command | Result | Status |
|----------|---------|--------|--------|
| Full project test suite green | `npm --prefix ealch-v2 test` | `tests 5391 / pass 5391 / fail 0` | PASS |
| Typecheck clean | `npm --prefix ealch-v2 run typecheck` | exits 0, no output | PASS |
| i18n FR/EN parity (12 new keys) | `npm --prefix ealch-v2 run test:i18n` | `tests 4 / pass 4`, including "fr and en tables have identical key sets" | PASS |
| Phase 5's 7 wiring/unit test files run directly | `node --test src/store/entitlementDrillGate.test.ts src/store/entitlementNudge.test.ts src/store/lockVisibilityWiring.test.ts src/store/drillGateWiring.test.ts src/store/paywallContextWiring.test.ts src/store/bannerSlotWiring.test.ts src/store/nudgeTriggerWiring.test.ts src/store/entitlementDowngrade.test.ts` | `tests 45 / pass 45 / fail 0` (aggregate across runs) | PASS |
| CR-01 fix (reactive corpus) present in code, not just claimed | `grep -n "useContent((s) => s.corpus)"` on all four drill screens | all 4 present | PASS |
| WR-02 fix (`bannerGen`) present in code | `grep -n "bannerGen"` on `useUI.ts`/`useAlarmWatcher.ts`/`PushBanner.tsx` | present in all 3, used to gate stale-timer clears | PASS |
| WR-03 fix (`voiceflash.tsx` div-by-zero guard) present | `grep -n "pct={total ?"` | present | PASS |
| WR-04 fix (constant-time webhook secret compare) present | `grep -n "timingSafeEqual"` | function defined and used in place of `!==` | PASS |
| No anti-pattern markers in touched files | `grep -rn "TODO\|FIXME\|PLACEHOLDER\|not yet implemented\|coming soon"` on the 13 core touched files | no matches | PASS |

### Requirements Coverage

| Requirement | Source Plan | Description | Status | Evidence |
|-------------|------------|-------------|--------|----------|
| PAY-02 | 05-01, 05-02, 05-03, 05-04, 05-06, 05-07 | The paywall gates a coherent, explainable slice of content instead of one arbitrary lesson | SATISFIED | `05-GATING-RULE.md` + all four drill screens gated + lock visibility + contextual paywall copy + reconciliation notice, all confirmed in code and tests. REQUIREMENTS.md marks PAY-02 `[x]` complete, mapped to Phase 5. |
| PAY-05 | 05-01, 05-05, 05-06, 05-07 | Free users see a proactive upgrade nudge at a sensible moment, not only the reactive paywall | SATISFIED | Roleplay-completion nudge with 24h cooldown, shared banner slot, confirmed wired and unit-tested. REQUIREMENTS.md marks PAY-05 `[x]` complete, mapped to Phase 5. |

No orphaned requirements: REQUIREMENTS.md's Phase 5 mapping table lists exactly PAY-02 and PAY-05, matching this phase's declared requirement IDs across all plan frontmatters.

### Anti-Patterns Found

None blocking. Two low-severity, explicitly-documented non-blocking follow-ups remain from the second review pass (05-REVIEW-RECHECK.md), both accepted as known, tracked items rather than gaps:
- **WR-B** (`ealch-v2/app/dictation.tsx:77-82`, `sentence.tsx:113-118`): a resume-to-item deep link can land on the wrong card if the corpus is still hydrating at mount (the initial `useState` resume-index lookup runs once and isn't re-derived when the corpus updates). This is a narrower, pre-existing variant of the corpus-hydration race, distinct from and not reintroducing CR-01 (which is fully closed). Unrelated to the phase's gating logic itself — the gate is correct; only resume-position fidelity is affected in an edge case.
- **IN-02** (`ealch-v2/supabase/functions/adapty-webhook/index.ts:105`): the UUID regex checks length and character class but not hyphen grouping. Not a security issue (used only as an equality filter in a parameterized query), just weaker validation than the comment implies.

Both are pre-existing/adjacent to this phase's scope rather than caused by it, are explicitly named in the review recheck, and do not block any of the phase's 5 success criteria.

### Human Verification Required

None outstanding. Plan 07's Task 2 was a blocking `checkpoint:human-verify` gate requiring the developer to walk a 21-item device checklist and type "approved" before the phase could close. Per `05-07-SUMMARY.md` and `05-VALIDATION.md`'s row `05-07-T2`, this was completed: 3 automated preconditions passed (`DEV_UNLOCK_A2 = false`, full suite green, exactly one adb device attached), and all 21 items were reported — 9 verified directly by the developer in-app on a physical Pixel 9, 10 verified by the orchestrator via adb with the developer present, and items 20/21 (the genuine-downgrade and offline-cold-start cases, which require Play Billing states not reproducible in this environment) verified by a targeted production-code-path trigger and a structural/test-suite argument respectively, both explicitly disclosed as distinct in kind from an ordinary tap rather than folded into a blanket "all verified" claim. The developer's own "approved" is authoritative for this interactive, in-session gate — unlike an autonomous agent's self-report, a human explicitly participated in and closed this checkpoint per its own `<resume-signal>` contract.

### Gaps Summary

No gaps found. Two rounds of independent code review (05-REVIEW.md finding 2 Critical + 4 Warning issues; 05-REVIEW-RECHECK.md independently re-reading every affected file from scratch, confirming all 5 original findings resolved, with 2 of 3 residual minor items also fixed in a follow-up commit) were verified directly against current source in this pass rather than trusted from commit messages: the reactive-corpus fix (CR-01), the empty-deck guard (WR-01), the banner-generation race fix (WR-02), the divide-by-zero guard (WR-03), the constant-time webhook comparison (WR-04), the `flashcards.tsx` fragility fix (WR-A), and the unused-import cleanup (IN-01) were all independently confirmed present in the current codebase, not merely claimed. The full test suite (5391/5391) and typecheck are green. The phase's only blocking human checkpoint was closed with explicit developer approval, item-by-item, with method transparently disclosed for the two items that could not be tested via an ordinary tap.

---

_Verified: 2026-09-20_
_Verifier: Claude (gsd-verifier)_
