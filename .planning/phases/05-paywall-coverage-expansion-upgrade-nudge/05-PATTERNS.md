# Phase 5: Paywall Coverage Expansion & Upgrade Nudge - Pattern Map

**Mapped:** 2026-09-20
**Files analyzed:** 15 (4 new gates, 2 resume-leak fixes, 1 paywall rewrite, 2 exam call sites, 1 store generalization, 1 component generalization, 1 entitlement-store addition, 1 hook migration, 1 settings call-site migration, upstream browse-chain screens)
**Analogs found:** 15 / 15 (every touched file has an exact or near-exact analog already in the repo; this phase is 100% "extend an existing pattern," per RESEARCH.md's own framing)

## File Classification

| New/Modified File | Role | Data Flow | Closest Analog | Match Quality |
|---|---|---|---|---|
| `ealch-v2/app/flashcards.tsx` | screen (drill) | request-response (render-time gate) | `ealch-v2/app/narrated.tsx` | exact (gate pattern; screen shape differs, deck vs. narration steps) |
| `ealch-v2/app/dictation.tsx` | screen (drill) | request-response (render-time gate) | `ealch-v2/app/narrated.tsx` | exact (gate pattern) |
| `ealch-v2/app/voiceflash.tsx` | screen (drill) | request-response (render-time gate) | `ealch-v2/app/narrated.tsx` | exact (gate pattern) |
| `ealch-v2/app/sentence.tsx` | screen (drill) | request-response (render-time gate) | `ealch-v2/app/narrated.tsx` | exact (gate pattern) |
| `ealch-v2/app/lesson.tsx` (fix) | screen (controller-ish) | request-response | itself + `narrated.tsx` (identical bug) | exact (same fix, same file) |
| `ealch-v2/app/narrated.tsx` (fix) | screen | request-response | `lesson.tsx` (identical bug, same fix) | exact |
| `ealch-v2/app/paywall.tsx` (contextual copy) | screen | request-response, route-param-driven | itself (existing `from`-read stub at line 77) | exact — the file already declares the param, this phase makes it load-bearing |
| `ealch-v2/app/exam.tsx` (add `from` param) | screen | request-response | `ealch-v2/app/roleplay.tsx`'s `start()` gate call | role-match (same `router.push('/paywall', {params:{from}})` shape) |
| `ealch-v2/app/exam-paper.tsx` (add `from` param) | screen | request-response | `ealch-v2/app/roleplay.tsx`'s `start()` gate call | role-match |
| `ealch-v2/src/store/useUI.ts` (generalize banner) | store (Zustand slice) | event-driven (ephemeral UI state) | itself (current `bannerVisible`/`bannerAt` shape being replaced) | exact — pure refactor of the same file |
| `ealch-v2/src/components/PushBanner.tsx` (generalize) | component | event-driven | itself (current single-kind render) | exact — pure refactor of the same file |
| `ealch-v2/src/hooks/useAlarmWatcher.ts` (migrate call) | hook | event-driven | itself | exact — one call-site signature change |
| `ealch-v2/app/settings.tsx` (migrate `testAlarm` call) | screen (settings row) | event-driven | `useAlarmWatcher.ts`'s same-shape call | exact |
| `ealch-v2/src/store/useEntitlement.ts` (add reconciliation trigger) | store (Zustand slice) | event-driven | itself (existing `track(...)` call in the same `wasDowngraded` branch) | exact — same file, same branch, one more statement |
| `ealch-v2/app/roleplay.tsx` (add nudge trigger) | screen | event-driven (usage-signal trigger) | itself (existing `capLocked`/`roleplayLocked` read + `logAttempt` call site) | exact — same file, new call after an existing write |
| `ealch-v2/app/theme.tsx` + `flashthemes.tsx`/`dictationthemes.tsx`/`voicethemes.tsx`/`sentencethemes.tsx` (lock tag) | screen (browse/list) | request-response (visual only, non-enforcing) | `ealch-v2/app/den.tsx`'s row lock tag (lines 233-239) | exact — UI-SPEC mandates reusing this literal JSX |
| `ealch-v2/src/i18n/strings.ts` (new keys) | i18n data | — | existing `pwFeat*`/`bannerText` keys in the same file | exact |

## Pattern Assignments

### `ealch-v2/app/flashcards.tsx`, `dictation.tsx`, `voiceflash.tsx`, `sentence.tsx` (screen, request-response gate)

**Analog:** `ealch-v2/app/narrated.tsx` (lines 39-63, 213-216) — the render-time-redirect gate, the exact pattern UI-SPEC §5 mandates reusing verbatim (no new "locked" placeholder screen).

**Imports pattern to add** (matches `narrated.tsx` lines 17-20):
```typescript
import { FREE_BANDS } from '@/store/entitlement.logic';
import { useFeature } from '@/store/useEntitlement';
import { track as trackEvent } from '@/services/analytics';
```

**Gate + redirect pattern** (from `narrated.tsx` lines 54-63, adapted per RESEARCH Pattern 1 — these four screens key off the `level` route param directly, not `unitBand`, since they have no `unitId`):
```typescript
// narrated.tsx's actual gate (unitBand-keyed — do not copy the unitBand call
// itself into the drill screens, only the shape):
const levelsAll = useFeature('levels.all');
const bandLocked =
  !!L && !levelsAll && !(FREE_BANDS as readonly string[]).includes(unitBand(L.unitId) ?? 'a1');
useEffect(() => {
  if (bandLocked) {
    trackEvent('gate_blocked', { feature: 'levels.all', from: 'narrated' });
    router.replace({ pathname: '/paywall', params: { from: 'gate:levels' } });
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps
}, [bandLocked]);

// Adapted for the four drill screens (level-param-keyed, per RESEARCH Pattern 1):
const levelsAll = useFeature('levels.all');
const bandLocked = !!level && !FREE_BANDS.includes(level as any) && !levelsAll;
useEffect(() => {
  if (bandLocked) {
    trackEvent('gate_blocked', { feature: 'levels.all', from: '<screen-name>' }); // 'flashcards' | 'dictation' | 'voiceflash' | 'sentence'
    router.replace({ pathname: '/paywall', params: { from: 'gate:levels' } });
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps
}, [bandLocked]);
```

**Render-time short-circuit** (from `narrated.tsx` lines 213-216, and `lesson.tsx` lines 350-354 — identical bare placeholder, no spinner/lock icon per UI-SPEC §5):
```typescript
// Redirecting to the paywall (effect above) — never flash gated content.
if (bandLocked) {
  return <View style={{ flex: 1, backgroundColor: t.bg }} />;
}
```
Place this check immediately after the existing `!L`/`!item`/`deckLen===0` early-return blocks in each of the four screens, before any deck/card JSX.

**Caveat — each screen's `level` param already narrows content but is untyped as `Level` at the top of the file.** `flashcards.tsx` line 51 already does `LEVELS.includes(level as Level)` style narrowing nearby — reuse that same `LEVELS.includes(...)` guard shape (imported from `@/content/schema`) rather than a raw string compare, so a garbage `level` value never accidentally reads as "free."

**Domain-deck edge case (flashcards.tsx only):** `flashcards.tsx` also supports a `domain`/`ctype` hub-deck query (no explicit `level` — see lines 56-82) which can mix multiple levels via `LEVELS.indexOf` sort. For a domain deck with no single `level` param, the gate should key off whether ANY resolved item in `all` (the computed deck) falls outside `FREE_BANDS`, not the absent `level` param — flag this as a decision point for the planner rather than assuming the single-`level`-param shape covers 100% of flashcards.tsx's entry points.

---

### `ealch-v2/app/lesson.tsx` and `ealch-v2/app/narrated.tsx` (fix, setResume leak)

**Analog:** the bug and the fix are the same file pair; there is no external analog needed — see RESEARCH Common Pitfall #2 for the full diagnosis.

**Current leak** (`lesson.tsx` lines 180-182):
```typescript
useEffect(() => {
  if (L) setResume('lesson', { route: `/lesson?key=${raw ?? id}`, title: L.title });
}, [L?.id]); // eslint-disable-line react-hooks/exhaustive-deps
```

**Current leak** (`narrated.tsx` lines 99-101):
```typescript
useEffect(() => {
  if (L) setResume('narrated', { route: `/narrated?key=${id}&step=${stepIx}`, title: L.title });
}, [L?.id, stepIx]); // eslint-disable-line react-hooks/exhaustive-deps
```

**Fix (both files, minimal diff):** add `&& !bandLocked` to the existing condition — `bandLocked` is already computed above both effects in both files (lesson.tsx line 57-58, narrated.tsx line 55-56), so this needs no new state:
```typescript
if (L && !bandLocked) setResume('lesson', { route: `/lesson?key=${raw ?? id}`, title: L.title });
```
```typescript
if (L && !bandLocked) setResume('narrated', { route: `/narrated?key=${id}&step=${stepIx}`, title: L.title });
```

---

### `ealch-v2/app/paywall.tsx` (contextual copy, D-08)

**Analog:** the file itself — it already destructures `from` (line 58) and already has a second, structurally-identical "already premium" branch (lines 174-199) whose exact layout UI-SPEC §Copywriting item 2 mandates reusing for the new `gate:examiner` branch.

**Current unused-for-copy read** (line 58, 77):
```typescript
const { from } = useLocalSearchParams<{ from?: string }>();
// ...
track('paywall_viewed', { from: from ?? 'direct' });
```

**Existing three-entry feature list to extend** (lines 142-146) — do NOT add a fourth `audio.packs` row; D-03/Pitfall 1 confirms there is nothing to remove and nothing to add here:
```typescript
const featureRows = [
  { icon: 'book' as const, title: T.pwFeatLevels, sub: T.pwFeatLevelsS },
  { icon: 'star' as const, title: T.pwFeatCoach, sub: T.pwFeatCoachS },
  { icon: 'mic' as const, title: T.pwFeatRoleplay, sub: T.pwFeatRoleplayS },
];
```

**New copy map** (RESEARCH Pattern 3 / UI-SPEC table, insert above the `premium || purchased` branch, keyed on the `gate:` prefix already produced by every gate site):
```typescript
const PAYWALL_COPY: Record<string, { title: string; lead: string }> = {
  'gate:levels': { title: T.pwTitleLevels, lead: T.pwLeadLevels },
  'gate:coach': { title: T.pwTitleCoach, lead: T.pwLeadCoach },
  'gate:roleplay': { title: T.pwTitleRoleplay, lead: T.pwLeadRoleplay },
};
const copy = PAYWALL_COPY[from ?? ''] ?? { title: T.pwTitle, lead: T.pwLead };
```
Use `copy.title`/`copy.lead` in place of the literal `T.pwTitle`/`T.pwLead` at lines 213-217.

**`gate:examiner` third render branch** — copy the exact JSX shape of the existing "already premium" branch (lines 174-199: `FocusHeader` → centered icon badge (56×56, `t.accA(14)` bg) → `TX font="serif" role="display" size={28}` headline → one `bodySm`/`txMuted` body line → one full-width `t.acc` CTA), swapping:
- icon `check` → `lock`, badge bg `t.accA(14)` → neutral `t.line(10)`, icon color `t.acc` → `t.txSubtle` (per UI-SPEC Color section — this is an explainer, not a success state)
- CTA `onPress={() => router.back()}`, label "Got it" (`T.pwExamGotIt` or similar new key) — dismiss only, no purchase action
```typescript
// Structural analog — ealch-v2/app/paywall.tsx lines 176-198 (the "already premium" branch)
return (
  <View style={{ flex: 1, backgroundColor: t.bg }}>
    <View style={{ paddingTop: insets.top }}>
      <FocusHeader onClose={() => router.back()} onSettings={() => router.push('/settings')} />
    </View>
    <View style={{ flex: 1, paddingHorizontal: 24, alignItems: 'center', justifyContent: 'center', gap: 10 }}>
      <View style={{ width: 56, height: 56, borderRadius: 28, backgroundColor: t.line(10), alignItems: 'center', justifyContent: 'center', marginBottom: 6 }}>
        <Icon name="lock" size={26} color={t.txSubtle} strokeWidth={2.4} />
      </View>
      <TX font="serif" role="display" size={28} style={{ textAlign: 'center' }}>{T.pwExamTitle}</TX>
      <TX role="bodySm" color={t.txMuted} style={{ textAlign: 'center', maxWidth: 300 }}>{T.pwExamBody}</TX>
      <Press onPress={() => router.back()} style={{ marginTop: 18, minHeight: 52, paddingVertical: 8, paddingHorizontal: 40, borderRadius: 26, backgroundColor: t.acc, alignItems: 'center', justifyContent: 'center' }}>
        <TX font="semi" role="body" color={t.accInk}>{T.pwExamGotIt}</TX>
      </Press>
    </View>
  </View>
);
```
Branch condition: `if (from === 'gate:examiner')` — must be checked before the normal sell-screen return, and can sit either before or after the `premium || purchased` branch (an already-Première user hitting an exam gate still needs this explainer, not the generic "you're already subscribed" message, since Première never grants `examiner`).

---

### `ealch-v2/app/exam.tsx`, `ealch-v2/app/exam-paper.tsx` (add `from` param, D-08 prerequisite)

**Analog:** `ealch-v2/app/roleplay.tsx`'s `start()` (lines 139-142) — the existing `router.push({ pathname: '/paywall', params: { from: 'gate:...' } })` shape already used by three other gate sites.

**Current call sites with no context** (confirmed, `exam.tsx` line 142; `exam-paper.tsx` lines 114-116, 132-134):
```typescript
// exam.tsx line 142 (paper-list gate) — CURRENT
: router.push('/paywall')

// exam-paper.tsx lines 113-116 (pre-check gate) — CURRENT
if (!decision.allowed) {
  track('gate_blocked', { feature: 'examiner', from: 'exam-paper' });
  router.push('/paywall');
  return;
}

// exam-paper.tsx lines 131-134 (server refusal) — CURRENT
if (res.reason === 'needs-exam-tier') {
  track('gate_blocked', { feature: 'examiner', from: 'exam-paper-server' });
  router.push('/paywall');
  return;
}
```

**Fix, matching roleplay.tsx's shape exactly** — add `params: { from: 'gate:examiner' }` to all three call sites:
```typescript
router.push({ pathname: '/paywall', params: { from: 'gate:examiner' } });
```

---

### `ealch-v2/src/store/useUI.ts` (generalize banner slot, D-14)

**Analog:** the file itself, before/after — RESEARCH Pattern 2 already specifies the exact target shape.

**Current shape** (full file, lines 1-51 — already read in full above):
```typescript
type UIState = {
  // ...
  bannerVisible: boolean;
  bannerAt: string;
  // ...
  showBanner: (at: string) => void;
  hideBanner: () => void;
};
export const useUI = create<UIState>((set) => ({
  // ...
  bannerVisible: false,
  bannerAt: '19:00',
  // ...
  showBanner: (bannerAt) => set({ bannerVisible: true, bannerAt }),
  hideBanner: () => set({ bannerVisible: false }),
}));
```

**Target shape** (RESEARCH Pattern 2, verbatim):
```typescript
export type BannerState =
  | { kind: 'speakReminder'; at: string }
  | { kind: 'upgradeNudge'; trigger: 'roleplay' | 'coach'; copy: string }
  | { kind: 'reconciliation' };
  // Phase 10 will add `| { kind: 'rating' }` — leave room, do not build it here.

type UIState = {
  // ...unchanged sheet/dict fields...
  banner: BannerState | null;
  showBanner: (b: BannerState) => void;
  hideBanner: () => void;
};

export const useUI = create<UIState>((set) => ({
  // ...
  banner: null,
  showBanner: (banner) => set({ banner }),
  hideBanner: () => set({ banner: null }),
}));
```
Every other field/method in the file (`sheet`, `vocabItems`, `dictOpen`, `dictEntry`, `dictSaved` and their setters) is untouched — this is a surgical replacement of exactly the four `banner*` lines.

**Call sites that must migrate in the same change** (both confirmed):
- `ealch-v2/src/hooks/useAlarmWatcher.ts` line 21 (`const { bannerVisible, showBanner, hideBanner } = useUI.getState();`) and line 27-29 (`if (hm === alarmTime && lastFired.current !== day && !bannerVisible) { ...; showBanner(alarmTime); ...}`) → `!useUI.getState().banner` and `showBanner({ kind: 'speakReminder', at: alarmTime })`.
- `ealch-v2/app/settings.tsx` line 114/118 (`const showBanner = useUI((u) => u.showBanner); ... showBanner(alarmTime);`) → `showBanner({ kind: 'speakReminder', at: alarmTime })`.

---

### `ealch-v2/src/components/PushBanner.tsx` (generalize render switch, D-14)

**Analog:** the file itself (full file, lines 1-100, already read above) — the `speakReminder` branch becomes one of three `switch(banner.kind)` cases; the outer `Animated.View` shell, slide timing (500ms), and card chrome (`t.card2`, `t.line(12)` border, shadow) are unchanged for every kind per UI-SPEC's Interaction Contract table.

**Current single-kind render** (lines 18, 25, 31, 45-51, 85-96):
```typescript
const { bannerVisible, bannerAt, hideBanner } = useUI();
// ...
Animated.timing(y, { toValue: bannerVisible ? 0 : -140, duration: 500, useNativeDriver: true }).start();
// ...
const text = T.bannerText.replace('{t}', formatTime(bannerAt, clock24)).replace('{name}', coachName);
// ...
<Press cue={null} scale={0.98} onPress={() => { hideBanner(); router.push('/speak'); }} ...>
  ...
  <TX font="bold" role="label" ls={0.4}>EALCH</TX>
  <TX role="meta" color={t.txSubtle}>{T.now}</TX>
  ...
  <TX role="label" color={t.txSecondary} style={{ marginTop: 2 }}>{text}</TX>
</Press>
```

**Target shape** (per UI-SPEC Interaction Contract table — masthead label, press target and top-right-meta all vary by `banner?.kind`; badge glyph/animation/simultaneity stay identical across kinds):
```typescript
const { banner, hideBanner } = useUI();
const visible = banner !== null;
// ...
Animated.timing(y, { toValue: visible ? 0 : -140, duration: 500, useNativeDriver: true }).start();

const masthead = banner?.kind === 'upgradeNudge' ? T.pwTag /* "EALCH PREMIÈRE" */
  : banner?.kind === 'reconciliation' ? T.acctTag /* "ACCOUNT"/"COMPTE", new key */
  : 'EALCH';
const badgeBg = banner?.kind === 'reconciliation' ? t.card2 : t.acc;
const badgeBorder = banner?.kind === 'reconciliation' ? t.line(20) : undefined;
const badgeTextColor = banner?.kind === 'reconciliation' ? t.txSubtle : t.accInk;
const bodyText =
  banner?.kind === 'speakReminder' ? T.bannerText.replace('{t}', formatTime(banner.at, clock24)).replace('{name}', coachName)
  : banner?.kind === 'upgradeNudge' ? banner.copy
  : banner?.kind === 'reconciliation' ? T.reconcileBody /* new key */
  : '';
const onBannerPress = () => {
  hideBanner();
  if (banner?.kind === 'upgradeNudge') router.push({ pathname: '/paywall', params: { from: 'gate:roleplay' } });
  else if (banner?.kind === 'reconciliation') router.push('/settings');
  else router.push('/speak');
};
// Auto-dismiss: unchanged for speakReminder (useAlarmWatcher.ts's own 12000ms
// timer, external to this component); add a local 10000ms auto-hide effect
// for upgradeNudge/reconciliation per UI-SPEC's Interaction Contract table —
// this is new logic, not present in any existing file, since speakReminder's
// timer lives in the CALLER (useAlarmWatcher.ts), not in PushBanner itself.
```
Note the asymmetry the last comment calls out: `speakReminder`'s auto-hide is driven externally by `useAlarmWatcher.ts`'s own `setTimeout(hideBanner, 12000)` (line 32), not by PushBanner. The two new kinds need their own auto-hide effect inside PushBanner.tsx itself (or wherever `showBanner({kind:'upgradeNudge'|...})` is called) — there is no existing in-component timer pattern to copy; treat this as new, minimal logic guarded by `banner?.kind`.

---

### `ealch-v2/src/store/useEntitlement.ts` (reconciliation trigger, D-15)

**Analog:** the file itself — RESEARCH Common Pitfall #3 already pins the exact insertion point.

**Current branch** (lines 52-62):
```typescript
setEntitlement: (entitlement) =>
  set((prev) => {
    if (wasDowngraded(prev.entitlement, entitlement, guardedNow())) {
      track('entitlement_downgraded', {
        fromPlan: prev.entitlement.plan,
        toPlan: entitlement.plan,
        hadExpiry: prev.entitlement.expiry != null,
      });
    }
    return { entitlement };
  }),
```

**Fix — add a second statement in the same `if`, no new import beyond `useUI`:**
```typescript
import { useUI } from './useUI'; // new import

// ...inside the same if (wasDowngraded(...)) block, right after track(...):
useUI.getState().showBanner({ kind: 'reconciliation' });
```
Do NOT create a new listener/subscription file — see RESEARCH Pitfall 3's explicit warning against this.

---

### `ealch-v2/app/roleplay.tsx` (upgrade nudge trigger, D-11/D-12)

**Analog:** the file itself — the existing `capLocked`/`roleplayLocked` read (lines 97-101) and `logAttempt` call site (lines 184-199) are the two pieces to compose; `scenariosPlayedOn`/`FREE_SCENARIOS_PER_DAY` from `entitlement.logic.ts` (lines 205-225) are the exact reusable predicates RESEARCH's Code Examples section names.

**Existing cap-check** (lines 97-101):
```typescript
const entitlement = useEntitlement((s) => s.entitlement);
const attempts = useProgress((s) => s.attempts);
const capLocked = scenario
  ? roleplayLocked(entitlement, attempts, localDay(new Date()), scenario.id, guardedNow())
  : false;
```

**Trigger point (proposed, per RESEARCH Code Examples):** in `continueTurn`'s finishing branch (lines 220-225, where `logSession('roleplay')` already fires on scenario completion), check whether this scenario's completion just consumed the day's free allowance and the user is NOT already entitled:
```typescript
} else {
  setIx(nTurns);
  sound.play('success');
  logSession('roleplay');
  clearResume('roleplay');
  // D-11 nudge: fires only when this was the day's FREE scenario (not
  // entitled, and today's played-set now meets the cap) — the "brushed the
  // limit, not blocked" moment, using the exact predicate roleplay's own gate
  // already imports.
  if (!hasFeature(entitlement, 'roleplay.unlimited', guardedNow())) {
    const playedNow = scenariosPlayedOn(useProgress.getState().attempts, localDay(new Date()));
    if (playedNow.size >= FREE_SCENARIOS_PER_DAY) {
      useUI.getState().showBanner({ kind: 'upgradeNudge', trigger: 'roleplay', copy: T.nudgeRoleplayBody });
    }
  }
}
```
`hasFeature`/`FREE_SCENARIOS_PER_DAY`/`scenariosPlayedOn` all come from `@/store/entitlement.logic` (already partially imported in this file as `roleplayLocked`); `useUI` needs a new import. Frequency-cap enforcement (D-13, once/24h per UI-SPEC) is a separate concern — check it before calling `showBanner`, not inside `entitlement.logic.ts` (which stays a pure predicate file per the "Don't Hand-Roll" table — no RN/timestamp-storage imports there).

---

### `ealch-v2/app/theme.tsx`, `flashthemes.tsx`, `dictationthemes.tsx`, `voicethemes.tsx`, `sentencethemes.tsx` (upstream lock tag, D-06/UI-SPEC §Copywriting item 6)

**Analog:** `ealch-v2/app/den.tsx`'s row lock tag (lines 233-239) — UI-SPEC mandates reusing this literal JSX, not inventing a second lock visual.

**Analog source** (`den.tsx` lines 233-239):
```typescript
{tabLocked ? (
  <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5, paddingVertical: 5, paddingHorizontal: 9, borderRadius: 11, backgroundColor: t.accA(12) }}>
    <Icon name="lock" size={11} color={t.accTx} strokeWidth={2} />
    <TX font="bold" role="eyebrow" ls={1.2} color={t.accTx}>
      {T.premLockTag}
    </TX>
  </View>
) : (
  <Icon name="chevronRight" size={13} color={t.accTx} strokeWidth={1.6} />
)}
```
`den.tsx`'s `tabLocked` computation (lines 39-40) is the reusable predicate shape:
```typescript
const levelsAll = useFeature('levels.all');
const tabLocked = !levelsAll && !(FREE_BANDS as readonly string[]).includes(denTab);
```

**Where this attaches in `theme.tsx`:** `theme.tsx`'s existing step row (lines 116-148) already computes a THREE-STATE lock (`open`/`done`/progression-locked, via `T.lockedTag`, line 130) that is entirely about sequential unlock order and has ZERO entitlement awareness today — `stepRoute` (lines 22-31) pushes straight into `/flashcards`, `/dictation`, `/voiceflash`, `/sentence` with no gate anywhere in the chain. This phase's addition is a SECOND, independent lock condition layered on top: a step whose resolved `band` is outside `FREE_BANDS` and the user lacks `levels.all` should render the `den.tsx`-style Première pill (`Icon name="lock"` + `T.premLockTag`) in place of (or alongside) the existing progression `rightTag`, even when the step's own progression state would otherwise mark it `open`. Import `FREE_BANDS`/`useFeature` into `theme.tsx` exactly as `den.tsx` does (den.tsx line 16, this pattern file's entitlement imports section above).

**`flashthemes.tsx`/`dictationthemes.tsx`/`voicethemes.tsx`/`sentencethemes.tsx`** were not read in full this session (out of the 3-5-analog budget — their row-rendering shape was not required to establish the pattern, since `theme.tsx`'s step list is the primary parcours entry point per RESEARCH's Assumption A1). Apply the identical `den.tsx` lock-pill JSX to whatever per-theme-row list these four files render, gated on the same `FREE_BANDS`/`useFeature('levels.all')` check against each row's resolved level — confirm each file's exact row-loop variable names at implementation time rather than assuming `theme.tsx`'s shape transfers verbatim.

---

## Shared Patterns

### Entitlement gate predicate (single source of truth)
**Source:** `ealch-v2/src/store/entitlement.logic.ts` — `hasFeature`, `FREE_BANDS`, `levelLocked`, `roleplayLocked`, `scenariosPlayedOn`, `FREE_SCENARIOS_PER_DAY`, `wasDowngraded`
**Apply to:** every gate this phase adds or fixes (flashcards/dictation/voiceflash/sentence, the roleplay nudge, the reconciliation trigger, theme.tsx's lock pill). Never re-derive a gate boolean from `entitlement.plan` or `entitlement.features.includes(...)` directly in a screen — always go through one of these named predicates.
```typescript
// ealch-v2/src/store/entitlement.logic.ts lines 124-126, 160-166
export function hasFeature(e: Entitlement, feature: Feature, nowMs: number): boolean {
  return entitlementActive(e, nowMs) && e.features.includes(feature);
}
export const FREE_BANDS = ['sons', 'a1'] as const;
export function levelLocked(e: Entitlement, band: string, nowMs: number): boolean {
  return !(FREE_BANDS as readonly string[]).includes(band) && !hasFeature(e, 'levels.all', nowMs);
}
```

### Render-time gate + redirect (the chokepoint shape)
**Source:** `ealch-v2/app/narrated.tsx` lines 54-63, 213-216 (also `lesson.tsx` lines 56-65, 350-354)
**Apply to:** `flashcards.tsx`, `dictation.tsx`, `voiceflash.tsx`, `sentence.tsx`
```typescript
const levelsAll = useFeature('levels.all');
const bandLocked = /* per-screen predicate, see Pattern Assignments above */;
useEffect(() => {
  if (bandLocked) {
    trackEvent('gate_blocked', { feature: 'levels.all', from: '<screen>' });
    router.replace({ pathname: '/paywall', params: { from: 'gate:levels' } });
  }
}, [bandLocked]);
// ...
if (bandLocked) return <View style={{ flex: 1, backgroundColor: t.bg }} />;
```

### Analytics event shape (`gate_blocked`, `paywall_viewed`, new nudge/reconciliation events)
**Source:** `ealch-v2/src/services/analytics.ts` lines 20-31, 53-78
**Apply to:** every new gate site and the nudge/reconciliation triggers
```typescript
export type AnalyticsEvent =
  | 'paywall_viewed' // props: from
  | 'gate_blocked' // props: feature, from
  | 'entitlement_downgraded' // props: fromPlan, toPlan, hadExpiry
  // ... this phase's planner should add, e.g.:
  // | 'upgrade_nudge_shown' // props: trigger
  // | 'reconciliation_shown'
export function track(event: AnalyticsEvent, props: Props = {}): void {
  if (!ENV.posthogKey) return;
  void send(event, props);
}
```
New `AnalyticsEvent` union members must be added here (a closed union — a string not in this list is a compile error, which is the intended guardrail).

### Zustand ephemeral-UI-slot shape
**Source:** `ealch-v2/src/store/useUI.ts` (current `sheet`/`dictOpen` fields, unaffected by this phase, are the sibling pattern the new `banner` field matches)
**Apply to:** `useUI.ts`'s generalized `banner` field, read by `PushBanner.tsx`, written by `useAlarmWatcher.ts`/`settings.tsx`/`roleplay.tsx`/`useEntitlement.ts`.

### i18n string-pair convention
**Source:** `ealch-v2/src/i18n/strings.ts` lines 252, 257-259, 628-633, 1072-1077 (FR block first, EN block ~420 lines later, same key names)
**Apply to:** every new copy string (`pwTitleLevels`/`pwLeadLevels`/etc., `pwExamTitle`/`pwExamBody`/`pwExamGotIt`, `nudgeRoleplayBody`, `reconcileBody`, `acctTag`). Add each key to BOTH the FR object (~line 600-650 range) and the EN object (~line 1040-1095 range), matching the existing `pwFeatLevels: 'string', pwFeatLevelsS: 'string'` two-per-line grouping style at lines 257-259.

## No Analog Found

None. Every file this phase touches has a same-file-history analog (RESEARCH.md's own framing: "this phase does not need new libraries, patterns, or architecture"). The two items requiring the most net-new logic — the `upgradeNudge`/`reconciliation` auto-dismiss timer inside `PushBanner.tsx`, and the 24h frequency-cap storage for the nudge (D-13) — have no existing in-repo precedent (Phase 10's rating-prompt cap doesn't exist yet); flag both for the planner as "new, minimal, no analog" rather than a gap requiring further search.

## Metadata

**Analog search scope:** `ealch-v2/app/*.tsx` (den.tsx, lesson.tsx, narrated.tsx, placement.tsx, chat.tsx, roleplay.tsx, exam.tsx, exam-paper.tsx, paywall.tsx, theme.tsx, flashcards.tsx, dictation.tsx, voiceflash.tsx, sentence.tsx, settings.tsx), `ealch-v2/src/store/*.ts` (entitlement.logic.ts, useEntitlement.ts, useUI.ts, useStore.ts), `ealch-v2/src/components/PushBanner.tsx`, `ealch-v2/src/hooks/useAlarmWatcher.ts`, `ealch-v2/src/services/analytics.ts`, `ealch-v2/src/i18n/strings.ts`
**Files scanned:** 20 read in full or targeted sections; `flashthemes.tsx`/`dictationthemes.tsx`/`voicethemes.tsx`/`sentencethemes.tsx` intentionally not opened this session (theme.tsx's step-list analog already establishes the pattern; RESEARCH's own Assumption A1 flags these as the same shape, to confirm at implementation time)
**Pattern extraction date:** 2026-09-20
