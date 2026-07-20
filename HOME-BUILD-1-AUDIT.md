# Audit — Home Build Prompt 1 (as built)

**Audited:** commits `c809acc` (honesty pass) · `32c9c8b` (zero the seeds) · `20bbf0b` (progress engine)
**Against:** `HOME-BUILD-PROMPT-1.md` · **Date:** 2026-07-14
**Toolchain verified:** `npm run typecheck` clean · `npm test` **37/37 pass** (22 new in `progress.test.ts`)

---

## ⟳ Re-review — 2026-07-15 (pass 1)

Re-checked every finding against the working tree. **8 commits landed since the audit** (`c357bcb` attempt log → `4d50394` Speak), including an SRS scheduler, an attempt log, and the profile honesty pass — most of that is *later phases*, not these repairs. **Net at pass 1: 2 of 9 closed** (P1-2, P1-3).

*Pass 1's per-item table is superseded by the confirmation run below. Inline `STATUS (07-15)` notes on each finding are kept for history and re-tagged where pass 2 changed the verdict.*

---

## ✅ CONFIRMATION RUN (pass 2) — independent re-verification

Every finding re-checked against the working tree from scratch, not carried over. **The tree has moved a long way past build-1**: `npm test` now **208/208 pass** (was 37), `typecheck` clean, and the recent log is entirely new scope (`Schema 3-9`, `Phase 0`, `CC-A`, docs) — none of it these repairs.

### Status legend
**DONE** shipped & verified · **PARTIAL** some call sites done, others not · **NOT STARTED** code unchanged since the audit · **DEFERRED** deliberately parked, decision pending · **RELOCATED** the defect survived a rewrite at a new address

| # | Finding | Verdict | Evidence (current lines) |
|---|---|---|---|
| 🔴 P1-1 | Background time inflation | **NOT STARTED** | `useProgress.ts:143` `useRef(Date.now())` · `:149` `(now - startedAt.current) / 60_000` — no `AppState`, no `clampMinutes`; `:84` `Math.max(1, …)` is a **floor, not a cap** |
| 🔴 P1-2 | Review logs nothing | **DONE** *(different direction)* | `review.tsx:77` `logSession('review', total)` + `:63` `logAttempt` |
| 🔴 P1-3 | Cold-start flash | **DONE** *(exceeded)* | `_layout.tsx:73` `fontsLoaded && hydrated && progressHydrated && contentHydrated`; gate used `:83-86` |
| 🟠 P2-4 | Freeze copy contradiction | **DEFERRED** — decision pending | `strings.ts:340`/`:568` still "1 freeze per week" · `progress.logic.ts:137` `streak(…, freeze: number)` still a static grant; no ISO-week logic |
| 🟠 P2-5 | signOut leaks progress | **NOT STARTED** | `useStore.ts:219-220` — sets 5 account fields, never calls `eraseProgress()` |
| 🟠 P2-6 | Player replay never re-logs | **NOT STARTED — RELOCATED** | Player was **rewritten** (fake progress tick → real TTS `speakLine`). `trackLogged` is gone; the same guard is now `logged` (`player.tsx:66`), set at `:111-114` and **still never reset**. Same defect, new address. |
| 🟡 P3-7 | `SessionEntry.items` unread | **PARTIAL** | Values are now **honest** (`roleplay:161` passes `nTurns`, not a hardcoded `3`; `dictation`, `flashcards`, `player`, `review`, `voiceflash` all pass real counts) — but `items` (`progress.logic.ts:29`) still has **no reader**. `itemsPracticed()` reads `AttemptEntry`, not this field. |
| 🟡 P3-8 | Selectors re-run each render | **PARTIAL** | `home.tsx` **DONE** — `:100,101,113,137,142,143` all `useMemo`. `profile.tsx` **NOT DONE** — `:105` `streak()`, `:106` `weekDots()`, `:121` `minutesToday()` **×7 in a loop** still bare in the render body (`:162-163` are memoized). |
| 🟡 P3-9 | Weak spots fabricated | **DONE** | `home.tsx:137` `useMemo(() => topWeaknesses(errors, today, 7), …)`; selector real at `progress.logic.ts:459`. Profile reads the same at `:162`. |

### Tally

| Verdict | Count | Items |
|---|---|---|
| ✅ **DONE** | **3** | P1-2, P1-3, P3-9 |
| ⚠️ **PARTIAL** | **2** | P3-7 (values honest, field unread) · P3-8 (home done, profile not) |
| ❌ **NOT STARTED** | **3** | P1-1, P2-5, P2-6 *(relocated)* |
| ⏸️ **DEFERRED** | **1** | P2-4 — needs a product decision, not code |

**Net: 3 closed, 2 partial, 4 outstanding.** Pass 1 said P3-9 was "open but now fixable" — **pass 2 confirms it shipped**, so it moves to DONE. P3-8 was called "still open"; it is actually **half done** (home memoized, profile not).

### Bonus — build-1 scope that shipped beyond the prompt

Verified incidentally and worth recording, since the audit's own scorecard predates them:

- **The `// TODO(SRS)` review count is now real** — `home.tsx:113` `reviewDueCount(attempts, today)`, backed by `dueCards`/`srsCards` (`progress.logic.ts:403,367`). The one literal the prompt deliberately left unfinished is finished.
- **Word of the day rotates** — `home.tsx:142` `wordOfDay()`, memo keyed on `today` with a comment explaining why not `[]`. The hardcoded « la flânerie » is gone from both home and the overlay.
- **Resume state exists** — `resumeIsFresh()` (`progress.logic.ts:51`) is imported by home; the hero's two-state design from the spec has landed.

### The one thing that has not moved

**P1-1 is the sole remaining blocker, and it is now the oldest open defect in the file.** Three separate work waves (SRS, schema, Phase 0) have passed over this code while `useSessionLog` kept measuring unbounded wall-clock. A backgrounded 3-hour lunch still writes a 180-minute session and still reads 1800% on the goal ring. Everything around it got more honest; this did not.

---

## Verdict

**The prompt was executed faithfully and in several places exceeded it.** Every acceptance criterion is met on paper. The engine is well-designed: the pure/shell split holds, the streak math is correct and genuinely well-tested, and the screen no longer renders a number it cannot substantiate.

**But three defects escaped the prompt entirely, and one of them re-introduces the exact class of lie the engine was built to remove.** Two of the three are my authoring failures, not the implementer's — the prompt never asked for what's missing.

The build is **not shippable as-is**, but it is close: the repairs are contained and none require redesign.

---

## Part 1 — What is genuinely good

Beyond mere compliance, these were correct decisions the prompt did not specify:

1. **The pure/shell split holds under real conditions.** `progress.logic.ts` has zero RN/zustand/AsyncStorage imports and the test runner executes it directly. The constraint that shaped the architecture actually paid off — 22 tests run in 500ms with no mocking.

2. **The test suite is better than the one I specified.** It covers cases I never asked for: a DST boundary crossing (`shiftDay`), a log full of **future-dated junk** that cannot inflate the streak, "**two freezes bridge two separate gaps, but never two days in a row**", and — the sharpest one — "**a freeze is not charged for a gap that protects nothing**", i.e. spending a freeze on the void before a user's first session would report "protected" when nothing was protected. That is a subtle correctness bug caught before it existed.

3. **The third weak spot was deleted rather than faked.** The prompt said route each weakness to its own lesson. There is no subjonctif lesson in `content/lessons.ts` (it ships `sons3`, `a1_4`, `a2_1`), so rather than point it somewhere wrong, the row was **removed**, with a comment saying it returns when its lesson does. That is exactly the right instinct and I did not ask for it.

4. **`Ring` is now honest math.** `RING_C = 2 * Math.PI * RING_R` with a comment noting it replaced a hand-tuned `18` — and `pct` is clamped `[0,1]`, so an over-goal day can't overdraw the arc.

5. **Pluralization was handled unprompted.** `freezeShort` / `freezeShortPl` exist because "2 freeze" is not English.

6. **`player.tsx` guards its own double-log** with a `trackLogged` ref, because the tick loop re-renders across `progress >= 100`. That race was real and the prompt never mentioned it.

7. **`lesson?key=sons3` is validated**, not trusted: `lessons[raw] ? raw : 'sons3'` — a bad deep-link falls back instead of crashing on `undefined.quiz`.

8. **`eraseProgress()` is wired into `eraseLocalData()`** with a comment explaining the session log dies with the account. Account deletion is genuinely complete.

9. **`goalTarget` is safe in practice** — I flagged this as a risk (onboarding writes `pace` as `p.id`), and verification confirms `paceData` ids are `'5 min' | '10 min' | '15 min' | '20 min'`. The regex parse works, and the fallback to `10` covers the malformed case.

---

## Part 2 — Findings (issues the prompt did not envisage)

### 🔴 P1-1 · Background time inflates every session — *the lie comes back*

> **STATUS (07-15): ❌ STILL OPEN — highest priority.** `useSessionLog` (now `useProgress.ts:108-121`) is unchanged: `logSession(activity, (now - startedAt.current) / 60_000, items)` with no `AppState` listener and no ceiling. `logSession` still clamps only `Math.max(1, Math.round(minutes))` — a floor, not a cap. The 3-hour-lunch scenario still writes a 180-minute session. This is the one blocker whose fix needs real work (an `AppState` subscription), which is likely why it was skipped.

**`src/store/useProgress.ts:81-93`** — `useSessionLog` starts a clock at hook mount and logs `(Date.now() - startedAt) / 60_000` on completion. There is **no ceiling and no `AppState` awareness.**

Open Flashcards, background the app, take a 3-hour lunch, come back, answer the last card:

```
logSession('flashcards', 180.4, 8)   →   minutes: 180
```

The goal ring reads **1800% of a 10-minute goal**. Profile's "hours spoken" becomes fiction. A user who leaves the app open overnight logs an 8-hour session.

This is not a rounding nit — **it re-introduces exactly the class of lie the engine exists to remove.** The prompt said "measure real elapsed time... floor of 1" and I never wrote a ceiling or considered backgrounding. My omission; the implementer built precisely what was asked.

**Repair:** subtract backgrounded time via an `AppState` listener, and clamp each session to a sane ceiling.

---

### ~~🔴 P1-2 · Smart Review logs nothing — the strip's own CTA doesn't count~~ ✅

> **STATUS (07-15): ✅ FIXED — took a different direction.** The screens were restructured rather than both patched: `smartreview.tsx` became a **scheduler preview / launcher** (shows next-due work, then `router.push('/review')` at `:137`), and `review.tsx` is now where a real review session runs — it calls both `logSession('review', total)` (`review.tsx:77`) and the new `logAttempt(...)` (`:63`) per item. So a completed review now earns minutes, a streak day, *and* feeds the SRS/weakness logs. The original prompt's "wire both screens" is satisfied by wiring the one screen that actually holds the session; `smartreview` correctly logs nothing because no practice happens there. Better than specified.

~~`Activity` includes `'review'`. **Nothing ever emits it.**~~ Neither `app/smartreview.tsx` nor `app/review.tsx` calls `logSession` (verified: zero matches in both).

The review segment is the **primary call-to-action on the today strip** — the only accent-tinted panel, the only one that `push`es. A user who taps it, completes their whole review queue, and returns to home earns **zero minutes and no streak day.** The app's most-promoted action is the one action that doesn't count as practice.

**This is a hole in my prompt.** §3f's wiring table listed eight screens and omitted both review surfaces.

**Repair:** wire `logSession('review', ...)` into the review-complete handler in both screens.

---

### ~~🔴 P1-3 · Cold-start flash: a 40-day streak renders as "Day 1 starts today"~~ ✅

> **STATUS (07-15): ✅ FIXED — exceeded.** `_layout.tsx:70-73` now gates first paint on **three** persisted stores, not the two I asked for: `fontsLoaded && hydrated && progressHydrated && contentHydrated`. The added `contentHydrated` closes the same flash for the new content store that shipped alongside the SRS work — a gap the audit didn't know about yet. Comment on `:67-69` names the exact bug this prevents.

~~`app/_layout.tsx:65-77` holds the splash screen until `useStore.hydrated`.~~ It does **not** wait for `useProgress.hydrated` — and that flag, though correctly implemented in `useProgress.ts:66-69`, **is never read anywhere in the app.**

So on every cold start: `useStore` rehydrates → splash hides → home renders while `useProgress.sessions` is still `[]` (its AsyncStorage read is still in flight) → the strip paints **`0/10 min`, "Day 1 starts today", no streak** → a beat later the log lands and it pops to the real values.

The one state we were most careful to make emotionally kind — the day-zero message — is now flashed at the users who have earned the most. It reads as data loss.

**Repair:** gate the splash on both stores.

---

### 🟠 P2-4 · The freeze policy contradicts its own copy

> **STATUS (07-15): ❌ STILL OPEN.** `freezeIdle` is unchanged in both languages (`strings.ts:326` / `:546`): "1 freeze per week." `streak()` still takes a static `freeze` count (`progress.logic.ts:112`) with no ISO-week grant logic anywhere in the file. Copy and engine still disagree. **Decision still required** — implement the weekly grant or change the sentence.

`T.freezeIdle` (both languages) states: **"1 freeze per week, used automatically."**

The implementation grants **one freeze, full stop.** `useStore.freeze` is a static `1`, never written, and `streak()` derives `freezesLeft = freeze - spent`. During a 90-day streak the user has exactly one freeze for the entire run — not one per week. (It does silently "refill" once the streak breaks, since `spent` is recomputed over the current run only — which is elegant, but it is not what the copy promises either.)

The app is making a written promise it does not keep. Two honest exits: implement a weekly grant (freezes available = ISO weeks touched by the run, minus spent), or change the copy to "1 freeze, used automatically." **Pick one before this ships** — a streak protection that doesn't arrive when promised is the kind of thing users file support tickets about.

---

### 🟠 P2-5 · `signOut()` leaves the previous user's progress on the device

> **STATUS (07-15): ❌ STILL OPEN.** `signOut()` (now `useStore.ts:211-212`) still sets only `signedIn/onboarded/email/userName/accountType` and never touches the log. `eraseProgress()` is called from `eraseLocalData()` but not from `signOut()`. The next account to sign in on the device still inherits the previous user's streak. Note the log now also holds `attempts` — so a shared device leaks the SRS/weakness history too, not just minutes.

`src/store/useStore.ts:203-204` — `signOut()` clears `signedIn`, `email`, `userName`, `accountType`. It does **not** touch the session log. `eraseLocalData()` (account deletion) correctly does.

Sign out, hand the phone to someone else, sign in as them: **they inherit your streak, your minutes, your week dots.** Correctness and privacy, both.

**Repair:** `signOut()` calls `useProgress.getState().eraseProgress()`. (If a "your progress is waiting when you sign back in" story is wanted later, that needs server-side sync — not a local log keyed to nobody.)

---

### 🟠 P2-6 · `player.trackLogged` never resets

> **STATUS (pass 2): ❌ NOT STARTED — RELOCATED.** The player was **rewritten** since the audit: the fake `progress >= 100` tick loop is gone, replaced by real TTS line-by-line playback (`speakLine` + `onDone`). `trackLogged` no longer exists — **but the same guard was carried over as `logged`** (`player.tsx:66`), set at `:111-114` when the last line finishes and still **never reset to `false`**. Replaying a finished track still logs nothing. The defect survived the rewrite at a new address; the repair is unchanged, only the identifier and line numbers move.

`app/player.tsx:56-62` — the ref that prevents double-logging is set `true` at 100% and **never set back to `false`.** Skip back, replay the track to the end: `progress` crosses 100 again, `trackLogged.current` is still `true`, and the second listen logs nothing.

**Repair:** reset the ref when `progress` drops below 100.

---

### 🟡 P3-7 · `items` is written everywhere and read nowhere

> **STATUS (pass 2): ⚠️ PARTIAL — values fixed, field still dead.** The invented counts are gone: `roleplay:161` now passes `nTurns`, and `dictation`/`flashcards`/`player`/`review`/`voiceflash` all pass real counts (only `sentence:168` and `lesson:301` still pass a literal `1`, which is truthful for a single-item completion). But `SessionEntry.items` (`progress.logic.ts:29`) **still has no reader** — `itemsPracticed()` reads `AttemptEntry`, a different record. Recommendation stands: **drop the field.**

> ~~**STATUS (07-15): ❌ STILL OPEN — and the risk it warned about has partly arrived.**~~ `SessionEntry.items` still has no consumer (no `.items` read in `progress.logic.ts` or `profile.tsx`). Note: the new **attempt log** (`logAttempt`, separate from `SessionEntry`) is what SRS and weaknesses actually read — so the team correctly built a *new, truthful* record rather than start reading the invented `items`. That leaves `SessionEntry.items` as dead weight carrying values like `roleplay`'s hardcoded `3`. Cleanest fix now: **drop `items` from `SessionEntry`** — the attempt log supersedes its intended purpose.

Every call site passes an `items` count, and **no selector consumes it.** Worse, some values are invented to fill the parameter: `roleplay` hardcodes `3`, `player` passes `1`, `sentence` passes `1`.

Harmless today. But the moment SRS or profile stats start reading `items`, those invented numbers become wrong data with a real consumer. Either make each call site pass a truthful count now, or drop the field until something needs it.

---

### 🟡 P3-8 · The math re-runs on every render

> **STATUS (pass 2): ⚠️ PARTIAL — home done, profile not.** `home.tsx` is fully memoized (`:100,101,113,137,142,143`). `profile.tsx` is **half done**: `:162-163` memoize the weakness selectors, but `:105` `streak()`, `:106` `weekDots()` and `:121` `minutesToday()` **seven times in a loop** still run bare in the render body. Finish profile. Pass 1's note below is stale on home.

> ~~**STATUS (07-15): ❌ STILL OPEN — and slightly worse.** No `useMemo` in either file.~~ `home.tsx:71-72` still calls `minutesToday()` + `streak()` in the render body, and `profile.tsx:103-119` now calls `streak()`, `weekDots()` **and `minutesToday()` seven times** in a loop building the week chart — every one rebuilding a `Set` over the full log per render. Still not a bug at current log sizes; still free to fix with a `useMemo`.

`home.tsx:68-71` and `profile.tsx:100-101` call `streak()` / `minutesToday()` / `weekDots()` directly in the render body. Each rebuilds a `Set` over the whole log (bounded at 4000 entries) on every render — including every keystroke of a re-render from an unrelated store slice.

Not a bug at today's log sizes; it is free to fix. **Repair:** `useMemo` keyed on `[sessions, today, freeze]`.

---

### ~~🟡 P3-9 · The weak spots are still fabricated — and now *more* convincing~~ ✅

> **STATUS (pass 2): ✅ DONE — CLOSED.** Superseded by the confirmation run. `home.tsx:137` now reads `useMemo(() => topWeaknesses(errors, today, 7), [errors, today])` against the real `topWeaknesses` selector (`progress.logic.ts:459`), and profile reads the same at `:162`. The hardcoded `L`/`N` array is gone. Pass 1's "open but cheap" call below is **stale — the wiring shipped.**

> ~~**STATUS (07-15): ⚠️ STILL OPEN — but the fix is now cheap.**~~ `home.tsx:107-109` still renders the hardcoded two-item `weak` array (`L` / `N`) under the "THIS WEEK" header. **However**, the infrastructure the audit said was "a later phase" has since shipped: the attempt log exists and `progress.logic.ts` now has a ranking selector (`topWeaknesses`-style, `:246` / `:385`) plus `logAttempt` recording per-item correctness. So home is now the *only* place still asserting fabricated weaknesses while a real source sits one import away. This dropped from "needs a system built" to "wire home to `topWeaknesses()` and render the honest empty state when it's short." Promote accordingly.

The honesty pass fixed the tofu glyphs and the mis-routing. It did not — and was not asked to — fix the fact that the two remaining weaknesses are **hardcoded assertions about a user who has done nothing**, sitting under a header that claims "THIS WEEK".

Before, they were obviously broken (boxes in circles). Now they are clean, well-typeset, and route correctly to real lessons. **A polished lie is worse than an obvious one.** The error log is a later phase and that's fine — but until it lands, consider hiding the section behind the same rule everything else now follows: *if it can't be derived from a real event, it doesn't render.*

---

## Part 3 — Repair plan

**Ship P1-1, P1-2, P1-3 before this build is considered done.** They are ~half a day together. P2s follow in the same pass if there's room; P3s can ride with the next phase.

> **07-15 UPDATE — items 2 and 3 are DONE (see finding statuses).** The remaining open work is items **1, 4, 5, 6, 7, 8**. Item 1 (P1-1) is the only true blocker left. Per-item status tags added below.

### Repair prompt (open items only — hand off as-is)

> You are repairing the progress engine in `ealch-v2/` (commits `c809acc`, `32c9c8b`, `20bbf0b`, and the SRS/attempt-log work through `4d50394`). The engine is sound — do not redesign it. Fix the following, keeping `src/store/progress.logic.ts` free of react-native / zustand / AsyncStorage imports so it stays testable under `node --test`.
>
> **1 — Stop background time inflating sessions (critical). — ❌ OPEN, do first.**
> `src/store/useProgress.ts:81-93` — `useSessionLog` measures wall-clock from mount to completion with no ceiling and no `AppState` awareness. A user who backgrounds the app mid-drill for three hours and then finishes logs a 180-minute session, and the goal ring reads 1800%. Fix it in two layers:
> (a) Subscribe to `AppState` in `useSessionLog`; when the app goes to `background`/`inactive`, bank the elapsed time so far and stop the clock; when it returns to `active`, restart the clock. Log the *sum of foreground intervals*, never the wall-clock span.
> (b) Add a defensive ceiling as a pure function in `progress.logic.ts` — e.g. `clampMinutes(minutes: number): number` capping a single session at 60 — so that a missed `AppState` edge (or a device clock jump) can never write an absurd entry. Apply it inside `logSession` alongside the existing `Math.max(1, Math.round(...))`. Unit-test `clampMinutes`, including a negative input from a backwards clock change.
>
> **2 — Make Smart Review count as practice (critical). — ✅ DONE (07-15).** `review.tsx` now logs `logSession('review', total)` + `logAttempt`; `smartreview` became the launcher. No action.
>
> **3 — Stop the cold-start flash of "Day 1 starts today" (critical). — ✅ DONE (07-15).** `_layout.tsx` gates on `fontsLoaded && hydrated && progressHydrated && contentHydrated`. No action.
>
> **4 — Resolve the freeze-policy contradiction. — ❌ OPEN.**
> `T.freezeIdle` promises "1 freeze per week, used automatically." The engine grants exactly one freeze per streak run (`useStore.freeze` is a static `1`; `streak()` derives `freezesLeft = freeze - spent`). Pick one and make them agree: either implement a weekly grant in `progress.logic.ts` (freezes earned = ISO weeks the run spans, capped, minus spent — with tests) or change `freezeIdle` in both FR and EN to "1 freeze, used automatically." Do not ship the app promising a weekly freeze it does not give.
>
> **5 — Clear the session log on sign-out. — ❌ OPEN.**
> `src/store/useStore.ts:211` — `signOut()` leaves the log on the device, so the next person to sign in on that phone inherits the previous user's streak, minutes **and now their `attempts` (SRS/weakness history)**. Call `useProgress.getState().eraseProgress()` from `signOut()`, exactly as `eraseLocalData()` already does.
>
> **6 — Reset `player.trackLogged` when the track rewinds. — ❌ OPEN.**
> `app/player.tsx:56-59` — the double-log guard is set `true` at 100% and never cleared, so replaying a finished track logs nothing. Set it back to `false` when `progress` drops below 100.
>
> **7 — Memoize the selectors. — ❌ OPEN (now covers profile's 7× week loop too).**
> `app/home.tsx:71-72` and `app/profile.tsx:103-119` call `streak()`, `minutesToday()` and `weekDots()` in the render body — profile now also calls `minutesToday()` seven times in a loop. Each rebuilds a `Set` over the full log. Wrap in `useMemo` keyed on `[sessions, today, freeze]`.
>
> **8 — Make `items` honest or remove it. — ❌ OPEN; prefer REMOVE now.**
> `SessionEntry.items` still has no reader, and the new attempt log has taken over its intended job (SRS/weaknesses read `attempts`, not `items`). Drop `items` from `SessionEntry` and its call sites rather than backfilling truthful counts — the field is now redundant, not just unread.
>
> **Bonus (07-15) — wire the weak-spots section (was P3-9, previously a "later phase").**
> The attempt log + `topWeaknesses` selector now exist. Replace the hardcoded `weak` array in `home.tsx:107-109` with `topWeaknesses(7)`, render real counts in the meta line, route each to its own lesson, and show an honest "not enough data yet" state when fewer than the shown count have data.
>
> **Acceptance:** `npm run typecheck` clean; `npm test` green including new `clampMinutes` and (if implemented) weekly-freeze cases; backgrounding the app for 5 minutes mid-drill and then finishing logs only the foreground minutes — **verify this by running the app, not by reading the code**; completing a Smart Review moves the goal ring; a cold start with an existing streak never renders "Day 1 starts today"; signing out and back in as a different account shows a zero streak.

---

## Part 4 — Scorecard

| Prompt requirement | Status |
|---|---|
| Honesty pass (7 items) | ✅ all landed |
| Seeds zeroed, persist v3 | ✅ (shipped as v4 — a migration had already taken v3) |
| Pure/shell split, testable | ✅ verified under `node --test` |
| Streak math + tests | ✅ **exceeded** — 22 tests, incl. cases not asked for |
| Producers wired | ~~⚠️ 8 of 10~~ → ✅ **fixed 07-15** — review now logs via `review.tsx` |
| Today strip bound | ✅ ring, streak, day-one state all live |
| Review count left `// TODO(SRS)` | ✅ correctly left unfinished, not faked (now superseded by real SRS) |
| Dead fields deleted from `useStore` | ✅ |
| Minutes measured, not assumed | ⚠️ measured — still **unbounded** (P1-1 open) |
| Hydration | ~~❌ flag built, never read~~ → ✅ **fixed 07-15** — gates on 3 stores (P1-3) |

**Three P1s, three P2s, three P3s.** Two of the three P1s trace directly to gaps in the prompt I wrote, not to the execution.

---

## Part 5 — Roll-up

### ~~Pass 1 (2026-07-15)~~ — superseded by the confirmation run

> ~~**Closed: 2 of 9.** Open: 7 of 9, including P3-9 "now cheaply fixable" and P3-8 "still open".~~ Both calls were **overtaken by pass 2**: P3-9 had already shipped, and P3-8 was half done. Kept for history.

### Confirmation run (pass 2) — current

**✅ DONE (3):** P1-2 review logging · P1-3 cold-start hydration *(exceeded — 3-store gate)* · P3-9 weak spots *(now `topWeaknesses`)*
**⚠️ PARTIAL (2):** P3-7 `items` *(values honest, field unread — drop it)* · P3-8 memoization *(home done, profile not)*
**❌ NOT STARTED (3):** P1-1 background inflation · P2-5 sign-out leak · P2-6 player replay *(relocated to `logged`)*
**⏸️ DEFERRED (1):** P2-4 freeze copy — **needs a product decision, not code**

### Recommended order for the next pass

1. **P1-1 — the blocker.** Unchanged through three work waves (SRS, Schema, Phase 0) and now the oldest open defect in the file. `AppState` listener + `clampMinutes`.
2. **P2-5 — one line.** Privacy; now leaks attempt/SRS history, not just minutes.
3. **P2-4 — a decision.** Implement the weekly grant or reword `freezeIdle`. Blocked on you, not on code.
4. **P2-6 / P3-7 / P3-8-profile — cleanups.** Each is a few lines: reset `logged`, drop `items`, memoize profile.

### On the wider tree

The 200+ tests and the Schema/Phase-0/CC-A commits are **additive scope, not regressions**. Build-1's engine survived them intact — the pure/shell split still holds, `progress.logic.ts` grew from 4 selectors to 20 and is still RN-free and still fully tested (208/208). Three items the original prompt deliberately left unfinished (the `TODO(SRS)` review count, word-of-day rotation, resume state) have since shipped for real.

**The engine was the right call. The one thing it still gets wrong is the thing it was built to prevent: an unbounded number reaching the UI.**
