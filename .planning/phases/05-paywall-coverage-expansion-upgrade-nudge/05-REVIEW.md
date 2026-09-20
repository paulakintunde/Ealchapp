---
phase: 05-paywall-coverage-expansion-upgrade-nudge
reviewed: 2026-09-20T23:36:57Z
depth: standard
files_reviewed: 25
files_reviewed_list:
  - ealch-v2/app/dictation.tsx
  - ealch-v2/app/dictationthemes.tsx
  - ealch-v2/app/exam-paper.tsx
  - ealch-v2/app/exam.tsx
  - ealch-v2/app/flashcards.tsx
  - ealch-v2/app/flashthemes.tsx
  - ealch-v2/app/lesson.tsx
  - ealch-v2/app/narrated.tsx
  - ealch-v2/app/paywall.tsx
  - ealch-v2/app/roleplay.tsx
  - ealch-v2/app/sentence.tsx
  - ealch-v2/app/sentencethemes.tsx
  - ealch-v2/app/settings.tsx
  - ealch-v2/app/theme.tsx
  - ealch-v2/app/voiceflash.tsx
  - ealch-v2/app/voicethemes.tsx
  - ealch-v2/src/components/PushBanner.tsx
  - ealch-v2/src/hooks/useAlarmWatcher.ts
  - ealch-v2/src/i18n/strings.ts
  - ealch-v2/src/services/analytics.ts
  - ealch-v2/src/store/entitlement.logic.ts
  - ealch-v2/src/store/useEntitlement.ts
  - ealch-v2/src/store/useStore.ts
  - ealch-v2/src/store/useUI.ts
  - ealch-v2/supabase/functions/adapty-webhook/index.ts
findings:
  critical: 2
  warning: 4
  info: 1
  total: 7
status: issues_found
---

# Phase 05: Code Review Report

**Reviewed:** 2026-09-20T23:36:57Z
**Depth:** standard
**Files Reviewed:** 25
**Status:** issues_found

## Summary

This phase adds the A1/A2 band gate to the four flat-deck drill screens (dictation, flashcards, sentence, voiceflash) and their sub-theme hub screens, extends the paywall with trigger-specific copy and an exam-tier explainer, and adds two new push-banner kinds (upgrade nudge, entitlement reconciliation) on top of the existing daily-reminder banner. `entitlement.logic.ts` and the Adapty webhook also carry an unrelated, already-reviewed `premiere`→`premium` access-level id fix (commit 99d1c21) which is not evaluated here per the review brief.

The gating logic itself (`drillDeckGate`, `freeBandItems`, `drillLevelLocked`, `roleplayNudgeDue`) is well-designed, pure, and consistent across all four call sites. `tsc --noEmit` is clean for the whole project, and the i18n keys this phase adds exist in both locales.

Two BLOCKER-level issues were found. The first is a straightforward missing empty-state guard that crashes `dictation.tsx`. The second is more consequential: none of the four newly-gated drill screens make their gating computation reactive to the corpus, which is the exact bug class this same codebase already diagnosed and fixed in `app/exam.tsx`/`app/exam-paper.tsx` ("THE CORPUS IS A DEPENDENCY, and it has to be a real one") — it was not applied to the screens this phase touched, so the gate this phase exists to enforce can be computed once against a not-yet-hydrated corpus and never re-evaluated. Several WARNING-level robustness issues were also found in the new push-banner plumbing and in one pre-existing div-by-zero left unguarded in `voiceflash.tsx`.

## Critical Issues

### CR-01: Gated drill screens compute their deck from a non-reactive corpus read, reproducing a bug this codebase already fixed elsewhere

**File:** `ealch-v2/app/dictation.tsx:40-51`, `ealch-v2/app/flashcards.tsx:63-96`, `ealch-v2/app/sentence.tsx:84-95`, `ealch-v2/app/voiceflash.tsx:55-67`

**Issue:** All four screens this phase gated compute their `gate` (`drillDeckGate(...)`) inside a `useMemo` that calls `content.itemsFor(...)` — an explicitly **non-reactive** accessor. `src/services/content.ts` documents this directly:

```ts
/**
 * Imperative, non-reactive accessors. Read the current corpus once — the shape a
 * drill wants when it mounts. For reactive reads (re-render when an OTA update
 * lands mid-session) subscribe with `useContent((s) => s.corpus)` and derive
 * with the same logic functions.
 */
export const content = {
  itemsFor: (drill, q) => selectItems(useContent.getState().corpus, drill, q),
  ...
```

None of the four gate `useMemo` dependency arrays include the corpus:
- `dictation.tsx`: `[theme, level, levelsAll]`
- `flashcards.tsx`: `[deckMode, theme, level, domain, cardType, levelsAll]` (also reads `useContent.getState().corpus.themes` imperatively inside the memo for the domain branch)
- `sentence.tsx`: `[theme, level, levelsAll]`
- `voiceflash.tsx`: `[theme, level, levelsAll]`

This is the identical anti-pattern that `app/exam.tsx` and `app/exam-paper.tsx` already diagnosed and fixed in this same phase window — their in-code comments spell it out verbatim: *"THE CORPUS IS A DEPENDENCY, and it has to be a real one… nothing here re-ran when the corpus changed — and the corpus ALWAYS changes after this screen can mount: exam content ships only in the OTA snapshot… Every exam screen had this same shape."* The developer's own project memory (`ealch-seed-is-a-cut-of-the-db`) confirms the seed bundled with the app is only a partial cut of the real corpus, with the rest arriving via OTA a few seconds into launch — so this is not a theoretical race.

Concretely: a screen mounted (cold start, or a deep link/notification landing directly on `/dictation`, `/flashcards`, `/sentence`, or `/voiceflash`) before the OTA snapshot lands will memoize `gate` against whatever the seed alone contains for that theme/level. Because `drillDeckGate` only reports `locked: true` when `raw.length > 0 && items.length === 0`, a corpus that is empty *at memo time* (`raw.length === 0`) reports `locked: false` — the exact case this phase exists to prevent. The memo then never recomputes once the real corpus (and its true level composition) arrives, because the corpus isn't in the dependency array. The learner is stuck on a stale, possibly wrongly-ungated, deck for the rest of that screen's lifetime — recoverable only by leaving and re-entering, which is how the identical bug was found on the exam screens.

**Fix:** Subscribe to the corpus and add it to the dependency array in all four screens, exactly as `exam.tsx`/`exam-paper.tsx` now do:

```ts
const corpus = useContent((s) => s.corpus);
const gate = useMemo(
  () => drillDeckGate(content.itemsFor('dictation', ...), level, levelsAll),
  [theme, level, levelsAll, corpus]
);
```

## Warnings

### WR-01: `dictation.tsx` has no empty-deck guard and crashes on the first tap when the deck resolves empty

**File:** `ealch-v2/app/dictation.tsx:92, 122-145`

**Issue:** `flashcards.tsx` (`deckLen === 0`), `voiceflash.tsx` (`total === 0`) and `sentence.tsx` (`if (!item) { return <...lessonSoon.../> }`) all render a dedicated empty-state screen when their deck resolves to zero items. `dictation.tsx` has no equivalent check:

```ts
const d = sentences[Math.min(dcIx, sentences.length - 1)];
```

When `sentences.length === 0`, `Math.min(dcIx, -1)` is `-1`, so `d` is `undefined`. The resume-tracking effect already guards this (`if (dcDone || !d) return;`), showing the author was aware `d` can be undefined — but the render path does not guard it. The "Play" button — the first and most prominent control on the screen — is rendered unconditionally, and its handler dereferences `d` immediately:

```ts
const play = () => {
  ...
  tts.speak(d.fr, { ... }); // throws if d is undefined
```

An empty deck is reachable today via a stale/garbage `theme` deep link, and is made substantially more likely by CR-01 above (a corpus not yet hydrated at mount time yields `sentences.length === 0` without `bandLocked` catching it).

**Fix:** Mirror `sentence.tsx`'s pattern — add a guard between the `bandLocked` early return and the main render:

```tsx
if (!d) {
  return (
    <View style={{ flex: 1, backgroundColor: t.bg, paddingTop: insets.top }}>
      <FocusHeader onClose={() => (theme ? router.back() : router.replace('/home'))} onSettings={() => router.push('/settings')} />
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 30 }}>
        <TX role="body" color={t.txMuted} center>{T.lessonSoon}</TX>
      </View>
    </View>
  );
}
```

### WR-02: New push-banner kinds can be prematurely dismissed by a stale timer left over from a different banner

**File:** `ealch-v2/src/hooks/useAlarmWatcher.ts:27-33`, `ealch-v2/src/store/useUI.ts:56-57`, `ealch-v2/app/roleplay.tsx:234-239`, `ealch-v2/src/store/useEntitlement.ts:70-71`

**Issue:** Before this phase, `useUI`'s banner slot was a single boolean (`bannerVisible`), so `useAlarmWatcher.ts`'s own `hideBanner()` call — fired unconditionally 12s after *it* showed the reminder — was harmless even if stale, because there was only ever one kind of banner and calling `hideBanner()` on an already-hidden banner was a no-op.

This phase generalizes the slot to a tagged union (`BannerState`) that three independent, uncoordinated call sites can now write to — `useAlarmWatcher.ts` (`speakReminder`), `roleplay.tsx`'s `continueTurn` (`upgradeNudge`), and `useEntitlement.ts`'s `setEntitlement` (`reconciliation`) — via `showBanner()`, which unconditionally overwrites whatever is currently shown with no "is a banner already up" check and no shared identity between a banner and the timer that will eventually clear it:

```ts
// useAlarmWatcher.ts — fires 12s after ITS OWN trigger, regardless of what is
// currently in the slot:
hideTimer.current = setTimeout(() => hideBanner(), 12000);
```
```ts
// useUI.ts — unconditional overwrite, no coordination with any pending timer:
showBanner: (banner) => set({ banner }),
```

Concretely: the daily alarm reminder fires and schedules its own 12s auto-hide. If, within that 12s window, a roleplay session completes and the upgrade-nudge banner fires (overwriting the slot — `roleplayNudgeDue`'s 24h cooldown does not protect against this since it only throttles *repeats* of the same nudge, not collisions with a different banner kind), the alarm's leftover 12s timer will still fire and call the shared `hideBanner()`, wiping out the upgrade-nudge banner early — undermining the very feature (D-11 upgrade nudge) this phase is delivering. The same applies symmetrically to the `reconciliation` banner.

PushBanner's own per-kind auto-dismiss effect (`useEffect(..., [banner?.kind])`, added this phase) has a related but narrower issue: because it keys off `banner?.kind` rather than a per-instance identity, two same-kind banners shown back-to-back (e.g. if a future coach-triggered nudge is added, per the `trigger: 'roleplay' | 'coach'` union member already present) would not get the dependency change needed to reset the 10s timer for the second occurrence.

**Fix:** Give each shown banner a monotonically increasing token/generation id (or capture the exact banner reference) and only let a scheduled dismiss clear the slot if it still matches:
```ts
// useUI.ts
banner: BannerState | null;
bannerGen: number;
showBanner: (banner) => set((s) => ({ banner, bannerGen: s.bannerGen + 1 })),
```
```ts
// useAlarmWatcher.ts
const gen = useUI.getState().bannerGen;
showBanner({ kind: 'speakReminder', at: alarmTime });
hideTimer.current = setTimeout(() => {
  if (useUI.getState().bannerGen === gen) hideBanner();
}, 12000);
```
(and the same guard in `PushBanner.tsx`'s own effect for `upgradeNudge`/`reconciliation`).

### WR-03: `voiceflash.tsx`'s progress bar divides by zero when the deck resolves empty

**File:** `ealch-v2/app/voiceflash.tsx:333`

**Issue:** `flashcards.tsx` explicitly guards the zero-deck case for its progress bar:
```ts
pct={deckLen ? Math.min(100, (cardIx / deckLen) * 100) : 0}
```
`voiceflash.tsx` renders the same kind of bar for `total` (the deck size after both drill directions are expanded) without the guard:
```ts
<ProgressBar pct={Math.min(100, (vfIx / total) * 100)} .../>
```
When `total === 0` (the file's own `total === 0` branch, rendered a few lines below, exists precisely to handle this case), `(vfIx / total) * 100` is `NaN`, and `Math.min(100, NaN)` is still `NaN`. `ProgressBar` (`src/components/ui.tsx`) does `Math.max(0, Math.min(100, pct))` and feeds the result straight into `Animated.Value`/a `width` style, so an empty deck produces an invalid `NaN` width on a component that is rendered unconditionally above the honest empty-state message.

**Fix:**
```ts
pct={total ? Math.min(100, (vfIx / total) * 100) : 0}
```

### WR-04: Adapty webhook secret check is not constant-time

**File:** `ealch-v2/supabase/functions/adapty-webhook/index.ts:71-75`

**Issue:**
```ts
const secret = Deno.env.get("ADAPTY_WEBHOOK_SECRET") ?? "";
const auth = req.headers.get("authorization") ?? "";
if (!secret || auth !== secret) {
  return new Response("unauthorized", { status: 401, headers: cors });
}
```
`!==` on strings short-circuits on the first differing byte, which is a classic timing side-channel for guessing a shared secret one character at a time. This is a public, unauthenticated edge function endpoint (Deno.serve with no other auth), so it is a real (if narrow, given network jitter) attack surface for forging entitlement-mirror webhook calls.

**Fix:** Use a constant-time comparison, e.g. compare via `crypto.subtle` digest equality or a manual XOR-accumulate over equal-length buffers, and reject early only after the comparison completes:
```ts
function timingSafeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}
```

## Info

### IN-01: `examPaperAllowed(...)` is computed twice with identical arguments per row

**File:** `ealch-v2/app/exam.tsx:127-145`

**Issue:** `PaperRow`'s `locked` prop and its `onPress` handler each independently call `examPaperAllowed({ gateOn: cfg.examGateOn, entitled, freePapers: cfg.examFreePapers, paperNo: p.paperNo })` with the same arguments. This is redundant, and — more importantly — a DRY risk: if the gating rule is ever extended with an additional input in one call site and not the other, the row's visual lock state and its actual tap behavior can silently disagree.

**Fix:**
```ts
const allowed = examPaperAllowed({ gateOn: cfg.examGateOn, entitled, freePapers: cfg.examFreePapers, paperNo: p.paperNo }).allowed;
// ...
<PaperRow
  locked={!allowed}
  onPress={() => (allowed
    ? router.push({ pathname: '/exam-paper', params: { paperId: p.id } })
    : (track('gate_blocked', { feature: 'examiner', from: 'exam' }),
       router.push({ pathname: '/paywall', params: { from: 'gate:examiner' } })))}
/>
```

Also note: the same ~9-line "premium lock badge" JSX block (`lock` icon + `premLockTag`) was pasted independently into five files this phase touches (`dictationthemes.tsx`, `flashthemes.tsx`, `sentencethemes.tsx`, `voicethemes.tsx`, `theme.tsx`). Each copy is currently identical; extracting a small shared `<PremiumLockBadge/>` component would remove the risk of the five copies drifting as the design evolves.

---

_Reviewed: 2026-09-20T23:36:57Z_
_Reviewer: Claude (gsd-code-reviewer)_
_Depth: standard_
