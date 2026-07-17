# Build Prompt 1 — Honesty Pass + Zero the Seeds + The Progress Engine

**Target:** `ealch-v2/` · **Branch:** `build/ealch-v2-expo`
**Covers items 1–3 of the build order in `WELCOME-SCREEN-COMPONENT-SPEC.md` §G4.**
**Effort:** ~3–4 days · **Unblocks:** SRS, resume state, weak spots, playlists, exams (items 4–9).

These three ship as one unit and cannot be separated:
- The **honesty pass** alone leaves the screen truthful but static.
- **Zeroing the seeds** alone leaves a dead screen showing `0` everywhere with no way to earn a `1`.
- The **engine** alone, without zeroed seeds, just launders the same fake `14`-day streak through a new store.

Done together, the today strip goes from *decoration* to *the first honest surface in the app*.

---

## THE PROMPT

You are working in `ealch-v2/`, an Expo + React Native app (Expo SDK 57 — read https://docs.expo.dev/versions/v57.0.0/ before writing Expo-specific code). State is zustand + AsyncStorage. Do not add dependencies; everything needed is installed.

Your job: make the welcome screen (`app/home.tsx`) stop lying, and build the system that lets it tell the truth.

---

### PART 1 — The honesty pass (do this first, it is independent and takes ~2 hours)

Every fix below is available today with no new systems. Ship it as its own commit before touching the store.

1. **Delete the false duration.** `app/home.tsx:178-182` renders a pill reading `T.left` = `"4:12 left"` to users who have never opened the player. Remove the pill entirely. It comes back in a later phase only when the player reports a real persisted position.

2. **Fix the tofu glyphs.** `app/home.tsx:62-66` defines three weak spots whose circle glyphs are `‿` (U+203F undertie), `ɔ̃` (IPA open-o + a combining tilde), and `q`. The first two fall outside the coverage of most serif display fonts and render as empty boxes; the third is a placeholder standing for nothing. Replace them with the serif capitals `L`, `N`, `S` (La liaison / voyelles Nasales / Subjonctif), rendered with the existing `TX font="serif"` inside the existing 34px `t.accA(14)` circle. Leave the `é` lead on the La Dictée row alone — it is real French and renders everywhere.

3. **Route the weak spots to their own destinations.** All three rows currently call `openSheet('grammar')` (`app/home.tsx:325`), which opens a sheet about *la liaison* — so tapping "Le subjonctif présent" teaches you about liaisons. Map each weakness to its real target: liaison → `openSheet('grammar')`, nasales → the nasal-vowels lesson in `src/content/curriculum.ts`, subjonctif → its lesson.

4. **Close the i18n holes.** `app/home.tsx:244` hardcodes `"La Dictée"` although `T.dicteeT` exists in both languages — use it. `src/components/TabBar.tsx:20` hardcodes `'COACH'` — add a `tabCoach` key to both `fr` and `en` in `src/i18n/strings.ts` (the value is `'COACH'` in both; French uses the word) and read it from the table.

5. **Fix the language toggle desync.** `app/home.tsx:86` calls `setLang(l)`, which sets only `lang`. The store also holds `appLang` (the onboarding language pick), and `setAppLang()` sets both. As written, toggling here silently desyncs Settings' "App language" row from what home displays. Call `setAppLang(l)` instead. Add an `accessibilityLabel` to each segment — right now they are two bare letters to a screen reader.

6. **Stop eroding the back stack.** `router.replace` destroys history, so the back gesture does not return to home. It is defensible for tab-to-tab switching in `src/components/TabBar.tsx:38`; it is a bug everywhere else. Change to `router.push`: `app/home.tsx:94` (avatar → `/profile`), `:108` and `:120` (today-strip segments → `/profile`), `:190` (Den tile → `/den`).

7. **Make the browse fold behave.** `app/home.tsx:254` always renders `chevronDown` regardless of state — swap to `browse ? 'chevronUp' : 'chevronDown'` (both exist in `Icon.tsx`).

**Acceptance:** no element on home claims a duration, a count, or a weakness it cannot substantiate; no glyph can render as a box; the back gesture works from every screen home links to; `npm run typecheck` clean.

---

### PART 2 — Zero the seeds

`src/store/useStore.ts:107-140` (`initialData()`) seeds fake progress:

```
streak: 14,
reviewDue: 23,
weekDots: [true, true, false, true, true, true, false],
freeze: 1,
```

These are the source of every false number on the screen. Set `streak: 0`, `reviewDue: 0`, `weekDots: [false × 7]`. Keep `freeze: 1` — one freeze available at day zero is a real, defensible starting grant, not a lie about past activity.

Bump the persist `version` from `2` to `3` (`useStore.ts:224`) and extend the existing `migrate` function (`:228-238`) so users carrying the seeded blob get it cleared rather than keeping a fabricated 14-day streak forever. Follow the comment style already there — each migration step says *why*.

**Note for Part 3:** these four fields are about to become *derived*, not stored. Leave them in the store for this part (home still reads literals until Part 3 lands), but expect to delete `streak`, `reviewDue`, and `weekDots` from `AppState` and from `partialize` (`:240-267`) at the end of Part 3. `freeze` stays — it is a grant, not a derivation.

---

### PART 3 — The progress engine

Nothing in this app records that a user did anything. No drill screen writes a completion event anywhere. Streak, minutes-today, review-due, weak spots, and "resume" are all *views over a session log that does not exist*. Build the log.

#### 3a. Critical structural constraint — read this before designing

The test runner is `node --test "src/**/*.test.ts"` (see `package.json`). It executes TypeScript directly and **cannot import React Native, AsyncStorage, or zustand middleware.** Look at `src/utils/time.test.ts` and `src/utils/score.test.ts` — they test pure modules with no RN imports, which is exactly why they run.

Therefore split the engine in two:

- **`src/store/progress.logic.ts`** — pure functions over plain data. No imports from `react-native`, `zustand`, or `@react-native-async-storage/async-storage`. All the math lives here: streak, minutes-today, week dots, goal parsing. **This is the file the tests import.**
- **`src/store/useProgress.ts`** — the zustand + AsyncStorage persist shell (mirror the pattern in `useStore.ts`: `create()(persist(...))`, `createJSONStorage(() => AsyncStorage)`, `partialize`, `onRehydrateStorage` flipping a `hydrated` flag). It holds the log and delegates every calculation to `progress.logic.ts`.

If the math ends up inside the zustand file, it becomes untestable and this whole part fails its purpose.

#### 3b. The data model

```ts
// progress.logic.ts
export type Activity =
  | 'lesson' | 'flashcards' | 'voiceflash' | 'sentence'
  | 'roleplay' | 'dictation' | 'speak' | 'player' | 'review';

export type SessionEntry = {
  date: string;      // local calendar day, 'YYYY-MM-DD' — NOT an ISO timestamp
  activity: Activity;
  minutes: number;
  items: number;
};
```

`date` is a **local calendar day string**, deliberately. Storing a UTC instant and deriving the day at read time makes the streak flicker across timezone changes and DST. Compute the local day once, at write time, and store that. Put the helper (`localDay(d: Date): string`) in `progress.logic.ts` and test it.

#### 3c. The write API (`useProgress.ts`)

```ts
logSession(activity: Activity, minutes: number, items: number): void
```

That is the only writer this part needs. (`logError` and `reviewCard` arrive in later phases — design the store so they slot in without a migration, but do not build them now.)

#### 3d. The derived selectors (`progress.logic.ts`, all pure)

- `minutesToday(sessions, today)` — sum of `minutes` for `date === today`.
- `goalTarget(pace: string)` — parse `useStore.pace` (`'10 min'` → `10`). It is a user-facing string from onboarding; handle malformed input by falling back to `10` rather than producing `NaN`.
- `weekDots(sessions, today)` — 7 booleans, Monday-first (the existing `T.dayLetters` is `['M','T','W','T','F','S','S']`), true where that day has ≥1 session.
- `streak(sessions, today, freeze)` — **the hard one.** Count consecutive days back from today with ≥1 session. A *single* missing day is bridged if a freeze is available, which consumes it. Two consecutive missing days end the streak regardless. Return `{ days: number, freezeUsed: boolean, frozenDay: string | null }` — `frozenDay` exists so `T.freezeNote` ("Wednesday was frozen ✦ — streak protected") can name the real day instead of hardcoding Wednesday.

  Decide and **document in a comment** whether a streak counts today-in-progress. Recommended: a streak of N means "N days ending today or yesterday" — so a user who practiced yesterday but not yet today still sees their streak, rather than watching it appear to reset every midnight. That is the behavior users expect and the one that avoids a support ticket.

#### 3e. Tests — `src/store/progress.test.ts`

Use `node --test` + `node:assert` exactly as `src/utils/time.test.ts` does. Cover at minimum:

- no sessions → streak 0, minutes 0, all dots false
- day one (one session today) → streak 1
- a clean 5-day run → streak 5
- yesterday-but-not-today → streak still counts (per your documented rule)
- one gap day, freeze available → bridged, freeze consumed, `frozenDay` names the gap
- one gap day, no freeze → streak resets
- two consecutive gap days, freeze available → streak resets anyway (a freeze bridges one day, not two)
- `goalTarget('10 min')` → 10 · `goalTarget('')` → 10 (no `NaN`)
- `localDay()` stability across a timezone boundary

#### 3f. Wire the producers

Every drill screen already has an obvious completion handler. Add one `logSession()` call to each — this is the wiring job, and it is the part most likely to be skipped:

| Screen | Call site |
|---|---|
| `app/flashcards.tsx` | deck-complete handler |
| `app/dictation.tsx` | check / finish |
| `app/lesson.tsx` | quiz pass or fail |
| `app/sentence.tsx` | sentence mastered |
| `app/roleplay.tsx` | scene complete |
| `app/voiceflash.tsx` | session complete |
| `app/speak.tsx` | `endSession` |
| `app/player.tsx` | track finish |

Minutes: measure real elapsed time on the screen (record a mount timestamp, diff on completion), rounded to the nearest minute with a floor of 1. Do not hardcode a per-activity duration — that would reintroduce exactly the class of lie this phase exists to remove.

#### 3g. Bind the today strip

In `app/home.tsx:107-147`, replace the literals:

- **Goal segment (`:108-118`):** target = `goalTarget(useStore.pace)`, actual = `minutesToday()`. The `Ring` component (`:18-25`) is currently a *painting* of a ring — its `strokeDashoffset={18}` is hand-tuned so that (88−18)/88 ≈ 79.5% visually matches the hardcoded "12/15". Give `Ring` a `pct: number` prop and compute `strokeDashoffset = 88 * (1 - Math.min(pct, 1))`. The `88` is the real circumference (2π·14 = 87.96) — keep it derived from `r` rather than magic.
- **Streak segment (`:120-132`):** the literal `14` (`:122`) sits four lines below `useStore.streak` being destructured and never used (`:42`) — this is the single most embarrassing line on the screen. Bind it to `streak()`. Bind the freeze sub-line to the real freeze count instead of the fixed `T.oneFreeze` string. At `streak === 0`, render an honest day-one state ("Day 1 starts today") rather than a shaming zero — add the FR/EN strings.
- **Review segment (`:134-146`):** leave the literal `'23'` for now — it needs the SRS scheduler, which is the next phase. Do **not** fake it with a session-log count; leave it and mark it with a `// TODO(SRS)` comment so it is not mistaken for done.

#### 3h. Finally, delete the dead fields

Now that `streak`, `reviewDue`, and `weekDots` are derived, remove them from `AppState`, from `initialData()`, and from `partialize` in `src/store/useStore.ts`, with a migration note. Keep `freeze` (a grant, not a derivation) and `pace` (an onboarding preference). Update `app/profile.tsx` if it reads any of the removed fields.

---

## Acceptance criteria for the whole hand-off

1. `npm run typecheck` passes.
2. `npm test` passes, including the new `src/store/progress.test.ts` streak cases.
3. A fresh install (cleared AsyncStorage) shows an honest day-one home: `0/10 min`, "Day 1 starts today", no fabricated weaknesses, no "4:12 left".
4. Completing one flashcard deck makes `minutesToday` and the goal ring move — **verify this by running the app, not by reading the code.**
5. Practicing today, then simulating a skipped day, then practicing again consumes the freeze and preserves the streak, and `T.freezeNote` names the correct day.
6. No numeric literal remains on the today strip except the `// TODO(SRS)` review count.
7. The back gesture returns to home from `/profile` and `/den`.

## The rule that governs all of it

**If a number cannot be derived from a real event the user caused, it does not render.** An empty state is not a failure — a fabricated one is. Where you cannot yet derive a value (the review count), leave it visibly marked as unfinished rather than plausibly wrong.
