---
phase: 05-paywall-coverage-expansion-upgrade-nudge
reviewed: 2026-09-20T00:00:00Z
depth: standard
files_reviewed: 8
files_reviewed_list:
  - ealch-v2/app/dictation.tsx
  - ealch-v2/app/flashcards.tsx
  - ealch-v2/app/sentence.tsx
  - ealch-v2/app/voiceflash.tsx
  - ealch-v2/src/components/PushBanner.tsx
  - ealch-v2/src/hooks/useAlarmWatcher.ts
  - ealch-v2/src/store/useUI.ts
  - ealch-v2/supabase/functions/adapty-webhook/index.ts
findings:
  critical: 0
  warning: 3
  info: 2
  total: 5
status: issues_found
---

# Phase 05: Code Review Recheck Report

**Reviewed:** 2026-09-20T00:00:00Z
**Depth:** standard
**Files Reviewed:** 8
**Status:** issues_found

## Summary

This is an independent recheck of commit `04cf755`, which claims to fix the 2 Critical and 4 Warning findings from `05-REVIEW.md`. I re-read every affected file from scratch rather than trusting the commit message.

**All 5 original findings are RESOLVED.** The fixes are correct: all four drill screens now subscribe to a reactive corpus signal and include it in their gate's `useMemo` dependency array, `dictation.tsx` has a proper empty-deck guard mirroring its siblings, the push-banner slot now carries a `bannerGen` token that both timer owners check before clearing, `voiceflash.tsx`'s progress bar is zero-guarded, and the Adapty webhook now does a length-check-then-XOR-accumulate comparison instead of `!==`.

No new Critical or crash-level regressions were introduced by the fixes. I did find three residual/new Warning-level concerns worth tracking — one is a fragility risk in how `flashcards.tsx` implements its CR-01 fix (it depends on an implementation detail of `mergeCorpus` rather than the corpus directly, unlike its three siblings), one is a narrower, pre-existing variant of the same corpus-hydration race that CR-01 didn't fully close (resume-to-item deep links can silently reset to the deck's start if the OTA snapshot lands after mount), and one is a dead import left behind by the `dictation.tsx` fix.

## Verdicts on the 5 Original Findings

### CR-01 — drillDeckGate memoized against non-reactive corpus read — **RESOLVED**

All four screens now subscribe to the corpus via `useContent` and include it in the gate's dependency array:

- `dictation.tsx:44,55` — `const corpus = useContent((s) => s.corpus);` ... `[theme, level, levelsAll, corpus]`
- `sentence.tsx:87,99` — same pattern, `[theme, level, levelsAll, corpus]`
- `voiceflash.tsx:58,69` — same pattern, `[theme, level, levelsAll, corpus]`
- `flashcards.tsx:58,101` — `const catThemes = useContent((s) => s.corpus.themes);` ... `[deckMode, theme, level, domain, cardType, levelsAll, catThemes]`

I verified this actually works, not just compiles: `useContent((s) => s.corpus)` is a real Zustand subscription (`content.ts`), so a `setCorpus()` call after the OTA snapshot lands forces a re-render with a new `corpus` reference, and the memo recomputes. For `flashcards.tsx`'s narrower `catThemes` dependency, I traced `mergeCorpus` (`content.logic.ts:64-82`) and confirmed `themes: overlayBy(...)` always returns a **brand-new array** on every merge call, regardless of whether any theme actually changed — so `corpus.themes` is guaranteed to change reference on every OTA landing, which is sufficient to make the memo recompute. The fix is correct in practice, not merely correct by accident.

See also WR-A below: this dependency choice for `flashcards.tsx` is a maintainability risk even though it works correctly today.

### WR-01 — dictation.tsx no empty-deck guard, crashes on `tts.speak(d.fr, ...)` — **RESOLVED**

`dictation.tsx:243-255` now has the guard, placed after the `bandLocked` early return and before the main render, structurally identical to `sentence.tsx`'s `if (!item)` guard:

```tsx
if (!d) {
  return (
    <View style={{ flex: 1, backgroundColor: t.bg }}>
      ...
      <TX role="body" color={t.txMuted} center>{T.lessonSoon}</TX>
    </View>
  );
}
```

`play()` (which dereferences `d.fr`) is only reachable from JSX inside the code path that executes after this guard, so the crash path is closed. All hooks are called unconditionally before this early return, so there's no hook-order violation either.

### WR-02 — stale banner auto-hide timer clears a different, newer banner — **RESOLVED**

`useUI.ts` now has a `bannerGen: number` field, incremented on every `showBanner()` call (`showBanner: (banner) => set((s) => ({ banner, bannerGen: s.bannerGen + 1 }))`). Both timer owners check it before clearing:

- `useAlarmWatcher.ts:35-39` — captures `gen` right after calling `showBanner`, and its 12s timeout only calls `hideBanner()` if `useUI.getState().bannerGen === gen`.
- `PushBanner.tsx:74-81` — owns its own 10s auto-hide effect for `upgradeNudge`/`reconciliation`, keyed on `[banner?.kind, bannerGen]` (not just `kind`, closing the "two same-kind banners back-to-back" gap called out in the original WR-02 too), with the same generation check before calling `hideBanner()`.

I traced the two writers that don't own a timer (`roleplay.tsx:238`, `useEntitlement.ts:71`) and confirmed neither schedules a duplicate auto-hide — `PushBanner`'s own effect is the sole timer owner for those two kinds, so there's exactly one timer per banner kind-family, each correctly gated on generation. The race described in the original finding (an alarm's leftover 12s timer wiping out a newer upgrade-nudge banner) is closed: the stale timer still fires, but no-ops because `bannerGen` no longer matches.

### WR-03 — voiceflash.tsx progress bar divides by zero — **RESOLVED**

`voiceflash.tsx:337`: `pct={total ? Math.min(100, (vfIx / total) * 100) : 0}` — now guarded identically to `flashcards.tsx`'s pre-existing pattern. Confirmed `total` is `entries.length`, which is `0` whenever `items` (post-gate) is empty, and the guard short-circuits to `0` before the division.

### WR-04 — Adapty webhook secret check not constant-time — **RESOLVED**

`index.ts:71-76,84` replaces `auth !== secret` with:

```ts
function timingSafeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}
```

This accumulates over every byte via XOR-OR rather than short-circuiting on the first mismatch, closing the per-character timing oracle the original `!==` had. The length-mismatch early return is a theoretical residual timing signal (reveals whether the guessed length is correct), but this is the same trade-off `crypto.timingSafeEqual` itself makes (it throws on length mismatch) and is standard practice — not a live concern here since the secret is a fixed, operator-configured value, not something an attacker can iteratively narrow down without already knowing the byte-comparison loop reveals nothing further. Resolved to the standard expected of this fix.

## Warnings

### WR-A: `flashcards.tsx`'s CR-01 fix depends on an implementation detail of `mergeCorpus`, not the corpus itself

**File:** `ealch-v2/app/flashcards.tsx:58,101`

**Issue:** The other three fixed screens (`dictation.tsx`, `sentence.tsx`, `voiceflash.tsx`) all subscribe to the full `corpus` object and put it directly in their gate's dependency array. `flashcards.tsx` instead subscribes to `corpus.themes` (`catThemes`) and uses that as the reactivity trigger — including for the `deck`/item content itself, not just for the theme catalogue it's ostensibly there for.

This happens to work today only because `mergeCorpus`'s `overlayBy` helper (`content.logic.ts:44-49`) unconditionally rebuilds the `themes` array into a brand-new `Map`/array on every call, so `corpus.themes` changes reference on every OTA landing even when no theme actually changed. If `overlayBy` (or `mergeCorpus`) is ever changed to skip work when nothing changed — a very natural-looking future optimization, given the module's own comments about avoiding full-corpus re-serialization — `catThemes` would stop changing reference on unrelated `items`-only updates, and the exact CR-01 bug (gate frozen against a stale corpus) would silently reappear in this one screen while its three siblings remained fixed.

**Fix:** Subscribe to the full corpus for consistency and correctness-by-construction, matching the other three screens:
```ts
const corpus = useContent((s) => s.corpus);
// ... catThemes can still be derived from corpus.themes for the theme-catalogue lookups ...
}, [deckMode, theme, level, domain, cardType, levelsAll, corpus]);
```

### WR-B: Resume-to-item deep links can still land on the wrong card if the corpus is still hydrating at mount

**File:** `ealch-v2/app/dictation.tsx:77-82`, `ealch-v2/app/sentence.tsx:113-118`

**Issue:** CR-01's fix makes the *gate* (`locked`/`items`) reactive to the corpus, but the initial resume-index lookup is still a `useState` functional initializer that runs exactly once, against whichever `sentences`/`deck` value the **first** render produced:

```ts
const [dcIx, setDcIx] = useState(() => {
  const raw = Array.isArray(resumeItem) ? resumeItem[0] : resumeItem;
  if (!raw) return 0;
  const found = sentences.findIndex((s) => s.id === raw);
  return found >= 0 ? found : 0;
});
```

If a resumed session deep-links to an item that only exists in the OTA snapshot (not yet landed at mount — the exact race CR-01 was written to describe, "a few seconds after mount"), `sentences.findIndex` returns `-1` on that first render and `dcIx` silently falls back to `0`. Once the corpus lands a moment later and the gate's `useMemo` recomputes with the real `sentences`/`deck` array (now containing the target item), `dcIx` is *not* re-derived — the `useState` initializer never runs again — so the learner is left on card 1 instead of the sentence they resumed to, with no visible indication anything went wrong. `sentence.tsx` has the identical pattern (`deckIx` at lines 113-118); `voiceflash.tsx`'s `vfIx` lookup has the same shape.

This is not something the CR-01 fix introduced — it is a narrower pre-existing variant of the same corpus-hydration race, left over because the fix (correctly) targeted the gate's lock/unlock correctness rather than resume-position fidelity. Flagging it here because it lives in the same three lines that were touched and is easy to mistake as "also fixed" by the CR-01 change.

**Fix:** Re-run the resume lookup once the corpus updates, e.g. with a `useEffect` keyed on the corpus/gate that corrects `dcIx` if the initial guess was a fallback-to-zero and the id is now findable, or defer rendering behind a "corpus ready" flag for deep-link entries specifically.

## Info

### IN-01: Unused `Icon` import left over in `dictation.tsx`

**File:** `ealch-v2/app/dictation.tsx:9`

**Issue:** `import { Icon } from '@/components/Icon';` — `Icon` is never referenced anywhere else in the file. Likely a leftover from drafting the WR-01 empty-state guard against `sentence.tsx`'s pattern (which also doesn't use `Icon`) or an earlier iteration of the guard.

**Fix:** Remove the unused import.

### IN-02: Adapty webhook's UUID check accepts non-UUID strings

**File:** `ealch-v2/supabase/functions/adapty-webhook/index.ts:105`

**Issue:** `/^[0-9a-f-]{36}$/i.test(uid)` only checks length (36) and character class (hex digits and hyphens), not hyphen position or the 8-4-4-4-12 grouping — a string of 36 hyphens, for instance, passes this check. Not a security issue (the value is only ever used as an equality filter in a parameterized Supabase query, so no injection risk), but it's weaker than the "non-uuid customer_user_id" comment implies, and could let a genuinely malformed id slip through to the upsert instead of being skipped.

**Fix:** Use a proper UUID regex, e.g. `/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i`.

---

_Reviewed: 2026-09-20T00:00:00Z_
_Reviewer: Claude (gsd-code-reviewer)_
_Depth: standard_
