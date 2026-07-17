# Ealch v2 — Welcome (Home) Screen: Element-by-Element Specification

**File:** `ealch-v2/app/home.tsx` (402 lines) · **Route:** `/home` · **Also the landing target of** `_layout` after onboarding.
**Date:** 2026-07-14 · **Companion:** `HOME-FUNCTIONALITY-PLAN.md` (phase plan H1–H8). This document is the *per-element* layer beneath that plan.

---

## 🟡 BUILD STATUS — audited 2026-07-15 (against `ealch-v2/app/home.tsx`)

**Overall: 🟡 PARTIALLY BUILT — the foundation landed, the surface is half-bound.**

The hard part is done. The **progress engine exists** (`src/store/useProgress.ts` + `src/store/progress.logic.ts` + `progress.test.ts`), the **SRS scheduler exists** (`srsCards` / `dueCards` / `reviewDueCount` / `applyGrade`), the **seeded fakes are gone** (`streak` / `reviewDue` / `weekDots` deleted, persist bumped to **v5** with migrations), and **producers are wired** into every drill screen (den, dictation, flashcards, lesson, player, roleplay, sentence, speak, voiceflash all write to the log). The Today strip renders **real, honest numbers**, the **hero is bound** to a real `resume` state (falling back to a Begin recommendation), the **weak-spots section is driven by a real error log** (honest empty state, no fabrication), and **playlists are a real content model** with a working `/playlists` index and player deep-linking. What remains on the lower half: the **exam cards** (still all route to `/speak`; need `exams.ts` + an exam mode) and **Coach live** (Edge Function deploy). Everything else on the screen is now bound to real state.

**Symbol key:** ✅ done · 🟡 partial · ⬜ not started

### Systems (from §G4 build order)

| # | System | Status |
|---|---|---|
| 1 | Honesty pass (remove "4:12 left", `L`/`N` glyphs, `T.dicteeT`, `tabCoach`, `push` on avatar/Den) | ✅ done |
| 2 | Zero the seeds (`streak`/`reviewDue`/`weekDots` → deleted, persist v5) | ✅ done |
| 3 | Progress engine (`useProgress` + `logSession` producers + tests) | ✅ done |
| 4 | SRS (`reviewCard`/`dueCount` — via attempt log + `applyGrade`) | ✅ done |
| 5 | Resume state (`resume: ResumeState`) | ✅ done — store + `setResume`/`clearResume`, lesson wired, hero bound, tested |
| 6 | Error log + weak spots (`logError` + `topWeaknesses`) | ✅ engine + honest empty state + real destinations, tested; one live producer (lesson-quiz), more are content-gated (see note) |
| 7 | Playlists content model + `/playlists` | ✅ done — `content/playlists.ts` (real tracks), `Press` cards, player deep-link + playlist mode, `/playlists` index, `SectionHead.onPress` |
| 8 | Exam scripts + Speak exam mode | ⬜ not started |
| 9 | Coach live (deploy Edge Function, `.env`) | ⬜ not verified / not started |

### Elements

| Element | Status | Note |
|---|---|---|
| [1] greeting · [2] name | ✅ | still live |
| [3] FR/EN toggle | ✅ | now `setAppLang` + `accessibilityRole`/`Label`/`State` |
| [4] avatar | 🟡 | verb fixed (`push`) + a11y; no progress ring / guest state |
| [5] goal ring | ✅ | real `minutesToday`/`goalTarget`, true circumference |
| [6] streak | ✅ | real `streak()` + "Day 1 starts today" + pluralized freeze |
| [7] review | ✅ | real `reviewDueCount` from the attempt log |
| [8][9][11][12][13] hero | ✅ | three honest tiers — fresh resume → begin(review) → begin(listen); title/eyebrow/sub/CTA/route all bound; no invented time pill |
| [10] kebab | ✅ | replaced with a labeled `book`-icon "Vocab first" pill in the hero body (still opens the vocab sheet) — the ⋯ overflow affordance is gone |
| [14] "4:12 left" pill | ✅ | removed (honesty fix) |
| [15][24] SectionHead / SEE ALL | ✅ | `SectionHead` gained optional `onPress` + chevron; Playlists' SEE ALL routes to `/playlists`, other captions stay inert |
| [16] Den tile | ✅ | count derived from `curriculum.ts` via `totalUnits()` (9+26+8=43); reconciled with `trackDescs.a1`'s A1-only "26" |
| [17] Flashcards tile | ✅ | `cardsS` → `'{n} cards · due now'` fed by the real SRS due-count; badge de-concatenated into single `skillReadVocab` key |
| [18] Voice Flash · [19] Sentences | ✅ | already clean |
| [21] La Dictée | ✅ | bare `"La Dictée"` → `T.dicteeT` |
| [22] browse fold | ✅ | chevron rotates; open/closed state persists to `useStore.browseOpen` (survives remounts); reveal animates via `LayoutAnimation.easeInEaseOut` (with old-arch Android opt-in) |
| [23] word of the day | ✅ | deterministic `wordOfDay()` rotation over 8 real entries (`content/wordOfDay.ts`); `openDict(entry)` carries it; overlay renders the entry (flânerie no longer hardcoded); card's play button is a real inline `tts.speak` |
| [25] playlist cards | ✅ | now `Press` → `/player?playlist=<id>&track=0`; backed by real `content/playlists.ts`; counts are `tracks.length` (honest), not the old "15 tracks" string claims |
| [27] exam cards | ⬜ | still all → `/speak`; no `exams.ts` |
| [29] weak spots | ✅ | now driven by `topWeaknesses(errors, 7)` with real counts; serif-capital glyphs; per-skill destinations; honest "nothing yet" empty state. Producer coverage is the open edge: only skill-mapped lesson-quiz misses log today — dictation/sentence/speak producers wait on populated corpus `tags` + real STT |
| [30] TabBar | ✅ | `'COACH'` → `T.tabCoach` |

---

## 0. The one-paragraph truth

The welcome screen is a **dashboard rendering literals**. It has 30 discrete elements. **Every single number on it is a hardcoded string** — `12/15 min`, `14 days`, `23 to review`, `43 UNITS`, `4:12 left`, `8 cards`, `15 tracks`. The store (`useStore`) *already holds* `streak`, `reviewDue`, `weekDots`, `freeze`, `pace` — and home reads **none of them** except `reviewCleared`, `userName`, and `lang`. Three elements advertise interactivity they don't have (SEE ALL, playlist cards, the exam cards' distinct identities). Two render glyphs (`‿`, `ɔ̃`) that box out on fonts lacking the combining marks.

**The missing system is a progress engine** — a session/answer log. Streak, minutes, review-due, weak spots, and "resume" are all *views over a log that does not exist*. Nothing in the app writes a completion event anywhere.

**Legend used below:**
`LIVE` = bound to real state · `SEED` = store field exists but is fake/seeded · `LITERAL` = hardcoded in JSX · `DEAD` = looks interactive, isn't.

---

## 1. Layout map (top → bottom)

```
┌─ ScrollView (paddingTop: insets.top+20, paddingH: 20, paddingBottom: 130) ─┐
│  [1] greeting eyebrow      [3] FR/EN toggle  [4] avatar                    │  header, mb 22
│  [2] name / "Welcome"                                                      │
├────────────────────────────────────────────────────────────────────────────┤
│  [5] goal ring │ [6] streak │ [7] review          TODAY STRIP  h66 r20      │  mb 14
├────────────────────────────────────────────────────────────────────────────┤
│  [8]  HERO CARD  h400 r26                                    [10] ⋯ kebab   │
│       [9] • REAL-WORLD — SURVIVAL · RESUME                                  │
│       [11] Au Café  (serif italic 46)                                       │
│       [12] Order like a local · with Camille                               │
│       [13] ▶ Resume    [14] 4:12 left                                       │
├────────────────────────────────────────────────────────────────────────────┤
│  [15] Foundations                                    SONS · A1 · A2         │
│  [16] Beginners' Den    [17] Flashcards      2×2 grid, 47.5% × h148 r18     │
│  [18] Voice Flash       [19] Sentences                                      │
│  [20] Role Play row   h88 r18                                               │
│  [21] La Dictée row   h88 r18                                               │
│  [22] ⌄ Browse — playlists, exams, weak spots        h48 r24                │
│  ── fold ──────────────────────────────────────────────────────────────     │
│  [23] Word of the day  →  la flânerie                                       │
│  [24] Your playlists                                    SEE ALL   [DEAD]    │
│  [25] ← playlist cards ×4  w158 × h198 →  [DEAD — plain Views]              │
│  [26] The Examiner                                  TEF · TCF · DELF        │
│  [27] ← exam cards ×3  w224 × h118 →  (all route to /speak)                 │
│  [28] Your weak spots                               THIS WEEK               │
│  [29] weak rows ×3  h66 r16  (glyph circles ‿ ɔ̃ q)                        │
└────────────────────────────────────────────────────────────────────────────┘
   [30] TabBar — LISTEN · SPEAK · COACH · PROFILE   (absolute, bottom)
```

---

# PART A — THE HEADER

## [1] Greeting eyebrow

**What it is:** All-caps 10px label above the name. Five time-of-day variants.
**Code:** `home.tsx:74-76` → `T.greets[greetSlot()]` · `strings.ts:11-16`
**Status:** ✅ **LIVE.** This is one of the two genuinely working data bindings on the screen.

| Property | Value |
|---|---|
| Font | `semi`, size 10, letter-spacing 3 |
| Color | `t.txA(45)` — text at 45% alpha |
| Logic | `greetSlot(hour)`: 05–12 `morning`, 12–18 `afternoon`, 18–23 `evening`, 23–02 `late`, 02–05 `early` |
| Strings | EN: GOOD MORNING / GOOD AFTERNOON / GOOD EVENING / **YOU'RE WORKING LATE** / **EARLY RISER PRACTICE** · FR: BONJOUR / BON APRÈS-MIDI / BONSOIR / VOUS TRAVAILLEZ TARD / PRATIQUE DE LÈVE-TÔT |

**What it connects to:** Nothing. Pure display.
**What it is NOT:** Not a notification, not a streak signal, not tappable.
**Needs to function:** Nothing — it works.
**Fully built:** It becomes *contextual*, not just temporal. `greetSlot` gains a second input: the session log. "GOOD EVENING" → "GOOD EVENING · DAY 15" on a streak; → "WELCOME BACK" after 3+ days absent; → "YOU'RE WORKING LATE" keeps its charm at 23:00. It computes once per mount, not per render (currently `greetSlot()` is called inline on every render — harmless but re-evaluates `new Date()`).

**Build prompt:**
> In `src/i18n/strings.ts`, extend `greetSlot()` to accept an optional `{ lastSessionDaysAgo, streak }` context and return a richer union including `'returning'` (absent ≥3 days) and `'dayN'` (streak ≥2). Add the FR/EN strings for both. In `app/home.tsx`, memoize the greeting with `useMemo` so it doesn't recompute `new Date()` each render, and pass the context from the progress store. Keep the existing five time slots as the fallback when no context exists.

---

## [2] Name / "Welcome" word

**What it is:** The 32px serif display name. The emotional anchor of the screen.
**Code:** `home.tsx:77-79` → `{userName || T.welcomeWord}`
**Status:** ✅ **LIVE.** `userName` comes from onboarding step 02 (`obNameT`: "What should Camille call you?"). Empty string is a legitimate state — falls back to `T.welcomeWord` ("Welcome" / "Bienvenue").

| Property | Value |
|---|---|
| Font | `serif`, size 32, line-height 37 |
| Color | default `t.tx` |
| Source | `useStore.userName` · settable in onboarding + profile |
| Migration | store v1→v2 wiped the hardcoded `'Maya'` placeholder (`useStore.ts:234`) |

**What it connects to:** `useStore.userName`. Not tappable (the avatar [4] is the profile entry point).
**What it is NOT:** Not the account identity — a guest can have a name; `email` and `accountType` are separate.
**Needs to function:** Works. One gap: there's a `T.guestName` ("Guest" / "Invité") string that is **never used here** — the empty-name path uses `welcomeWord` instead. Decide which is canonical and delete the other.
**Fully built:** Tapping the name opens an inline rename (the profile round-trip is heavy for a one-field edit). Long-press → "Camille calls you X" pronunciation preview via TTS.

**Build prompt:**
> In `app/home.tsx`, make the name `<TX>` a `Press` that opens a small inline rename sheet (reuse `BottomSheet` with a new `'name'` kind, or a lightweight `Modal`) writing to `useStore.setField('userName', v)`. Preserve the `userName || T.welcomeWord` fallback. Then audit `T.guestName` across the codebase — if nothing renders it, delete the key from both FR and EN in `src/i18n/strings.ts`.

---

## [3] FR / EN language toggle

**What it is:** A 32px-tall segmented pill, two segments, active one filled with the accent color.
**Code:** `home.tsx:82-93` → `setLang(l)`
**Status:** ⚠️ **LIVE but inconsistent.**

| Property | Value |
|---|---|
| Container | h32, radius 16, border 1px `t.line(14)`, `overflow: hidden` |
| Segment | paddingH 13, bg `t.acc` when active else transparent |
| Label | `semi`, size 11, ls 1, color `t.accInk` (on) / `t.txA(55)` (off) |

**The bug:** it calls `setLang()`, which sets **only** `lang`. But the store also has `appLang` (the 7-language onboarding pick), and `setAppLang()` sets *both*. So toggling here desyncs `appLang` from `lang` — Settings' "App language" row will disagree with what home is showing.

**What it connects to:** Every `useT()` consumer in the app (all 24 screens). This is a global interface-language switch living in a screen header.
**What it is NOT:** It is **not** a *learning*-language switch. It does not change what French you're taught — only the UI chrome. That distinction is invisible to the user and is a genuine confusion risk.
**Needs to function properly:**
1. Call `setAppLang(l)` instead of `setLang(l)` so `appLang` stays in sync.
2. An `accessibilityLabel` — right now it's two bare letters to a screen reader.
3. A visual hint that it changes *interface* language, not lesson language.

**Fully built:** It either (a) moves to Settings entirely and home gets the space back, or (b) becomes a proper affordance with a globe icon and a tooltip on first use. Given `appLangNote` already says "FR & EN interface complete — more languages soon", option (a) is the honest one — home is not where a global preference belongs.

**Build prompt:**
> In `app/home.tsx:82-93`, change `setLang(l)` to `setAppLang(l)` so `lang` and `appLang` never diverge. Add `accessibilityRole="button"` and `accessibilityLabel={l === 'fr' ? 'Interface en français' : 'Interface in English'}` to each segment. Then evaluate removing the toggle from home entirely: it duplicates Settings → App language, and its presence in the header implies it switches the *learning* language, which it does not.

---

## [4] Avatar button

**What it is:** 40×40 circle. Shows the user's first initial in serif, or a `user` icon when nameless.
**Code:** `home.tsx:94-102` → `router.replace('/profile')`
**Status:** ⚠️ **LIVE but wrong navigation verb.**

| Property | Value |
|---|---|
| Size | 40×40, radius 20 |
| Border | 1px `t.accA(55)` — accent at 55% |
| Fill | `t.card2` |
| Content | `userName.charAt(0).toUpperCase()` in `serif` 17 · else `Icon name="user"` size 18, `t.txA(70)`, strokeWidth 1.7 |

**The bug:** `router.replace` destroys the back stack. Tapping the avatar and pressing back does not return to home. Every tab-level nav in the app has this (`TabBar.tsx:38` too). `push` is correct for a detail screen.
**What it connects to:** `/profile` — which itself shows "14.6 hours / 38 conversations" literals.
**What it is NOT:** Not an account/auth indicator. A signed-out guest and a signed-in user look identical here.
**Needs to function properly:** `push` not `replace`; a signed-in vs guest visual distinction (a dot, or the accent ring only when signed in); an accessibility label.
**Fully built:** The avatar carries a **status ring** — the goal ring [5] duplicated at 40px, so your daily progress is legible from the header without parsing the strip. A guest sees a dashed border and a subtle "Sign in" affordance.

**Build prompt:**
> In `app/home.tsx:94`, change `router.replace('/profile')` to `router.push('/profile')` and add `accessibilityLabel`. Then render a progress ring around the avatar: reuse the `Ring` component at size 40 with the real `minutesToday / goalTarget` ratio, sitting behind the initial. When `useStore.accountType === 'guest'`, render the border as dashed (`borderStyle: 'dashed'`) so the account state is visible at a glance.

---

# PART B — THE TODAY STRIP

A single 66px-tall, 20px-radius bar with an accent border (`t.accA(28)`), split into three `Press` segments by 1px hairlines. **The whole strip is decoration.** Two of its three segments route to `/profile`, one to `/smartreview`.

## [5] Goal ring segment — "12/15 min"

**Code:** `home.tsx:108-118` + `Ring` component `home.tsx:18-25`
**Status:** ❌ **LITERAL.** Both numbers, and the ring arc itself.

| Property | Value |
|---|---|
| Flex | 1 |
| Ring | SVG 36×36, `r=14`, track `t.line(10)` sw 4, arc `t.acc` sw 4 round cap |
| Arc math | `strokeDasharray={88}` `strokeDashoffset={18}` → circumference = 2π·14 = **87.96** ≈ 88, so the arc shows (88−18)/88 = **79.5%** |
| Numbers | `12` bold 13 + `/15 min` at `t.txA(45)` |
| Label | `T.goalWord` — "goal" / "objectif", semi 9.5, `t.txA(50)` |

**The tell:** `strokeDashoffset={18}` is *hand-tuned* to 79.5% so it visually matches the literal "12/15" (= 80%). It is a painting of a ring, not a ring.

**What it connects to:** `/profile` (via `replace` — same back-stack bug). **Not** to `useStore.pace`, which already holds the user's onboarding answer ("10 min" / "20 min" etc.).
**What it is NOT:** Not a timer, not a live counter, not connected to any session.
**Needs to function properly:**
1. **A progress engine** (`minutesToday()`), which does not exist. This is the blocker.
2. Goal target parsed from `useStore.pace` (`'10 min'` → `10`).
3. `strokeDashoffset` computed: `88 * (1 - clamp(minutes/target, 0, 1))`.
4. A **zero state**: `0/10 min` on day one, honestly.

**Fully built:** The ring fills in real time as you complete a drill, animating from its previous value with `react-native-reanimated`. At 100% it turns solid and a `✦` appears. Tapping it opens today's session breakdown (which drills, how long), not the whole profile.

**Build prompt:**
> Create `src/store/useProgress.ts` (zustand + AsyncStorage persist, mirroring `useStore`'s pattern) with `SessionEntry = { date: string; activity: string; minutes: number; items: number }`, a `logSession()` writer, and pure derived selectors `minutesToday()`, `streak()`, `weekDots()`. In `app/home.tsx`, bind the goal segment: target = `parseInt(useStore.pace)`, actual = `minutesToday()`, and compute `strokeDashoffset = 88 * (1 - Math.min(actual / target, 1))` in the `Ring` component (accept `pct` as a prop). Show `0/N min` honestly on day one. Then wire `logSession()` into the completion handler of every drill screen: flashcards deck-done, dictation check, lesson quiz, sentence, roleplay, voiceflash, speak `endSession`, player finish.

## [6] Streak segment — "14 days ✦ · 1 freeze"

**Code:** `home.tsx:120-132`
**Status:** ❌ **LITERAL — and this is the worst offender.** `useStore.streak` (seeded `14`) and `useStore.freeze` (seeded `1`) **exist in the store and sit unread directly next to a hardcoded `14`.**

| Property | Value |
|---|---|
| Flex | 0.9 |
| Number | `serif` 25, `t.acc`, lh 25 — literal `14` |
| Label | `T.daysWord` ("days"/"jours") + `✦` in accent |
| Sub | `T.oneFreeze` — literal string "1 freeze" / "1 gel" |

**What it connects to:** `/profile`. Nothing else.
**What it is NOT:** Not a streak. There is no day-boundary logic, no gap detection, no freeze consumption anywhere in the codebase.
**Needs to function properly:** The progress engine + **streak math with real edge cases**: consecutive-day detection across timezone changes, the single freeze consuming one gap day and decrementing, and the day-boundary definition (local midnight? 4am?). This is exactly the pure logic that belongs in a unit test — there are already `score.test.ts` and `time.test.ts` to model it on.
**Fully built:** `0` on day one reading **"Day 1 starts today"** rather than a shameful zero. The `✦` freeze glyph becomes tappable, explaining the freeze rule (`T.freezeNote` already exists: "Wednesday was frozen ✦ — streak protected. 1 freeze per week, used automatically."). Streak milestones (7/30/100) fire a one-time celebration.

**Build prompt:**
> In `src/store/useProgress.ts`, implement `streak()` as a pure function over the session log: count consecutive days back from today with ≥1 session; a single missing day is bridged if `freeze > 0` (decrement it, and record which day was frozen so `T.freezeNote` can name it). Write `src/store/progress.test.ts` covering: no sessions, day-one, a gap with a freeze available, a gap with no freeze, two consecutive gaps, and a local-midnight boundary crossing. Then in `app/home.tsx:120-132` replace the literal `14` and `T.oneFreeze` with `streak()` and a real freeze count, and add the day-one empty state ("Day 1 starts today").
> Finally, in `src/store/useStore.ts`, delete the seeded `streak: 14`, `reviewDue: 23`, `weekDots: [...]` defaults (bump persist `version` to 3 with a migration that zeroes them) — they are the source of the fake data.

## [7] Review segment — "23 · to review · 6 min →"

**Code:** `home.tsx:46-49, 134-146`
**Status:** ⚠️ **Half-live.** `reviewCleared` (a real store flag) drives the ✓ state — this is the *only* conditional data on the whole screen. The number `'23'` and the estimate `'6 min →'` are literals.

| Property | Value |
|---|---|
| Flex | 1.1 (widest segment) |
| Background | `t.accA(8)` — subtly tinted to mark it as the CTA |
| Number | `serif` 25 accent — `reviewCleared ? '✓' : '23'` |
| Label | `T.reviewShort` → `T.caughtUpShort` when cleared |
| Sub | `'6 min →'` literal → `T.tomorrow` ("tomorrow →") when cleared |

**What it connects to:** `/smartreview` — the only `push` in the strip (correct verb!). That screen reads `reviewOverview(lang)`, a **static table** in `content/drills.ts:51`, and its "+14 tomorrow / +9 in 3 days" chips are fixed too.
**What it is NOT:** Not a spaced-repetition queue. No card has a due date. `clearReview()` just flips a boolean.
**Needs to function properly:** **An SRS scheduler.** Per-item `{ itemId, due, interval, lapses }`. Flashcards' existing **Again / Got it** buttons (`T.again` / `T.know`) are the natural write path — Again → due tomorrow, interval reset; Got it → interval × 2.5, capped. `reviewDue` becomes derived: `count(due <= today)`. The "6 min" estimate = `count × 15s`.
**Fully built:** The number is real, the estimate is real, and the segment turns accent-filled (not just tinted) when items are overdue — a genuine pull.

**Build prompt:**
> Add an SRS layer to `src/store/useProgress.ts`: `cards: Record<itemId, { due: string; interval: number; lapses: number }>`, with `reviewCard(itemId, grade: 'again' | 'know')` implementing FSRS-lite (again → interval 1d, lapses++; know → interval × 2.5, capped at 180d) and a derived `dueCount()` = cards with `due <= today`. Seed the deck from `reviewSession(lang)` in `src/content/drills.ts` on first run, and enqueue vocab from completed lessons. Wire `app/flashcards.tsx`'s existing Again/Got it buttons to `reviewCard()`. Then in `app/home.tsx:46-49`, replace `'23'` with `dueCount()` and `'6 min →'` with `Math.ceil(dueCount() * 15 / 60) + ' min →'`. Update `app/smartreview.tsx`'s header and its "+N tomorrow" chips to read the same selectors.

---

# PART C — THE HERO

## [8] The hero card

**What it is:** The single biggest object on the screen — a 400px-tall, 26px-radius card with two crossed `LinearGradient`s over a near-black base (`#1B1712` in dark).
**Code:** `home.tsx:150-185` → `router.push('/player')`
**Status:** ❌ **LITERAL.** Fixed scenario, fixed route, fixed time remaining.

| Property | Value |
|---|---|
| Height | 400, radius 26, border 1px `t.line(7)` |
| Base | dark: `#1B1712` · light: `t.card` |
| Gradient 1 | `rgba(214,160,96,0.24→0.35)` → transparent, from `{x:0.72,y:0}` to `{x:0.3,y:0.55}` — the warm top-right wash |
| Gradient 2 | transparent → `t.accA(22)`, vertical bottom bloom `{x:0.15,y:0.4}`→`{x:0.15,y:1}` |
| Press scale | 0.99 |

**The gap:** there is **no "current activity" concept anywhere in the app.** The hero always says "Au Café", always routes to `/player`, always claims 4:12 remain — for a brand-new user who has opened nothing.

**What it connects to:** `/player`.
**What it is NOT:** Not a resume. Not personalized. Not aware of what you last did.
**Needs to function properly:** A `ResumeState = { route, title, startedAt, positionSec } | null` in the progress store. Every drill/lesson/player sets it on entry and clears it on completion.
**Fully built:** Two states.
- **Resume state** (`ResumeState != null`): real title ("Leçon 4 — Les nasales"), real remaining time from the player's persisted position, routes to the stored route.
- **Start state** (`null`): becomes a **recommendation card** — first due review if any, else the next uncompleted curriculum unit. Copy changes from "Resume" to "Begin". This is the honest day-one hero.

**Build prompt:**
> Add `resume: { route: string; title: string; startedAt: string; positionSec?: number } | null` to `src/store/useProgress.ts` with `setResume()` / `clearResume()`. Call `setResume()` on mount in `app/player.tsx`, `app/lesson.tsx`, `app/roleplay.tsx`, `app/speak.tsx`, `app/dictation.tsx`; call `clearResume()` in each completion handler. Persist the player's playback position on unmount. Then rewrite the hero in `app/home.tsx:150-185` as two states: when `resume` exists show its real title, real remaining time, and route to `resume.route`; when null, render a "Begin" card recommending the first due review, falling back to the next incomplete unit from `src/content/curriculum.ts`. Never show a time-remaining pill unless a real position exists.

## [9] Hero eyebrow — "• REAL-WORLD — SURVIVAL · RESUME"

**Code:** `home.tsx:153-158` → `T.heroTag`
**Status:** ❌ LITERAL string, though correctly i18n'd.

| Property | Value |
|---|---|
| Dot | 6×6 circle, `t.acc` |
| Text | `semi` 10, ls **2.6**, `t.txA(75)` |
| EN | `REAL-WORLD — SURVIVAL · RESUME` |
| FR | `RÉEL — SURVIE · REPRENDRE` |

**What it is NOT:** The word "RESUME" in the eyebrow is a *claim* — it must be swapped to "BEGIN" when there's nothing to resume. It's part of the hero's two-state rewrite [8].
**Fully built:** Composed from the resume state: `{contentType} — {level} · {RESUME|BEGIN}`.

## [10] The kebab (⋯) — vocab sheet

**What it is:** Three 3.5px dots in a 40×40 tap target, top-right of the hero. Opens the **vocabulary bottom sheet**.
**Code:** `home.tsx:159-163` → `openSheet('vocab')` → `BottomSheet.tsx:83-173`
**Status:** ⚠️ **Works — but is the single most undiscoverable element on the screen.**

**What it connects to:** `useUI.openSheet('vocab')` → a genuinely good sheet: "Le vocabulaire du café", 4 checkable vocab items (`un café allongé`, `une carafe d'eau`, `l'addition`, `sur place ou à emporter`), a REGISTER note ("Always say « je voudrais » — « je veux » sounds like a demand. Waiters notice."), and a "Let's go →" CTA that routes to `/speak`.

**The problem:** a "⋯" is universally read as an **overflow menu** (share, hide, report). Here it opens a *pre-lesson vocabulary injector* — a core learning surface, arguably the best-written content in the app, hidden behind the least appropriate icon in the icon set. The sheet's own checkbox state (`done`) is also local `useState`, seeded `{0: true}`, and resets every open.

**What it is NOT:** Not a menu. Not a settings affordance.
**Needs to function properly:**
1. **A different affordance.** The vocab sheet deserves a labeled pill inside the hero: `📖 4 words first` — not a kebab.
2. The sheet's vocab must come from the scenario, not the hardcoded `VOCAB` array in `BottomSheet.tsx:12-17`.
3. Checkbox state must persist (and the `{0: true}` seed removed — it pretends you've already done one).

**Fully built:** The hero shows a "Prime yourself — 4 words" pill; the sheet's items are the actual scenario vocab; ticking them all enqueues them into the SRS deck and unlocks the "Let's go →" CTA.

**Build prompt:**
> In `app/home.tsx:159-163`, replace the three-dot kebab with a labeled pill inside the hero body reading `T.vocabTag`-derived copy (e.g. "4 words first →") with the `book` icon, still calling `openSheet('vocab')`. In `src/components/BottomSheet.tsx`, delete the hardcoded `VOCAB` array and accept the word list from the active scenario in `src/content/`; remove the `{0: true}` seed from the `done` state and persist ticks to the progress store; on all-ticked, enqueue each word into the SRS deck.

## [11] Hero title — "Au Café"

**Code:** `home.tsx:165-167` — `serif italic` **46px**, lh 46, mb 8. The largest type in the app.
**Status:** ❌ LITERAL. Not even in the strings table — it's a bare JSX string, so it can't be localized (though as a French scenario name it arguably shouldn't be).
**Fully built:** Bound to the resume/recommendation state's title.

## [12] Hero subtitle

**Code:** `home.tsx:168-170` → `T.heroSub` — size 14, `t.txA(65)`, mb 18.
**EN:** "Order like a local · with Camille" · **FR:** "Commandez comme un vrai Parisien · avec Camille"
**Status:** ❌ LITERAL (i18n'd). Introduces **Camille**, the AI coach persona — the only place on home she's named.
**Fully built:** Scenario-derived. Keep the Camille mention — it's the persona hook.

## [13] "Resume" pill

**Code:** `home.tsx:172-177` — h46, paddingH 22, radius 23, bg `t.acc`, `play` icon 13px in `t.accInk`, label `T.resume`.
**Status:** ⚠️ **It is not a button.** It's a `View` inside the hero's `Press`. Tapping anywhere on the 400px card does the same thing. That's *acceptable* (the whole card is the target) but it means the pill can never have its own action — and in the fully-built two-state hero, "Resume" vs "Begin" need to be distinct labels, and possibly the card body and the pill need different destinations (card → detail, pill → straight into playback).
**Fully built:** A real `Press` with `T.resume` / a new `T.begin`, routing to the resume route.

## [14] "4:12 left" pill

**Code:** `home.tsx:178-182` → `T.left` — h46, paddingH 18, radius 23, 1px `t.line(20)` border, size 13 `t.txA(85)`.
**Status:** ❌ **LITERAL — and the most dishonest element on the screen.** It tells a user who has never opened the player that they have 4 minutes 12 seconds remaining in something.
**What it is NOT:** Not a duration. Not a progress indicator.
**Needs to function properly:** The player must persist its playback position. **Until it does, this pill must not render at all.** That's a one-line honesty fix available today.

**Build prompt:**
> Immediate: in `app/home.tsx:178-182`, conditionally render the "4:12 left" pill only when a real persisted player position exists; until the progress store lands, remove it. Then persist `positionSec` from `app/player.tsx` on unmount into the resume state, and render the pill as `formatTime(duration - positionSec)` using the existing `src/utils/time.ts` helpers.

---

# PART D — FOUNDATIONS (the 2×2 grid)

## [15] "Foundations" section head

**Code:** `SectionHead` component, `home.tsx:351-363`. Title `T.found` (`serif` 22) + right caption `"SONS · A1 · A2"` (`semi` 11, ls 1.8, `t.txA(40)`).
**Status:** ⚠️ The right-hand caption **looks like a control and isn't** — `SectionHead` takes a `right: string` and has **no `onPress`**. This affects three section heads: Foundations, Playlists (where it literally reads "SEE ALL"), and Weak spots.
**Fully built:** `SectionHead` gains optional `onPress` + a chevron; captions that aren't actions stay plain text.

**Build prompt:**
> In `app/home.tsx:351-363`, extend `SectionHead` with an optional `onPress?: () => void`. When provided, wrap the right caption in a `Press` and append a `chevronRight` icon at 12px / `t.txA(40)`. When absent, render it as today (inert text). Then audit the three call sites: Foundations' "SONS · A1 · A2" is descriptive (leave inert), Playlists' "SEE ALL" **must** get an `onPress` (→ new `/playlists` screen), and Weak spots' "THIS WEEK" is descriptive (leave inert).

---

The four tiles share the **`GlowTile`** wrapper (`home.tsx:27-35`): radius 18, 1px `t.line(7)` border, `overflow: hidden`, a per-tile dark base color, and a diagonal `LinearGradient` glow from `{x:0.85,y:0}` → `{x:0.2,y:0.7}`. Each is `47.5%` wide × **148px** tall, 16px padding, laid out with `flexWrap` + 12px gap. Each has a `TileHead` (badge left, optional right caption) and a bottom-anchored (`marginTop: 'auto'`) `serif italic` 23px title + 11px `t.txA(50)` subtitle.

## [16] Tile — Beginners' Den

| | |
|---|---|
| **Route** | `/den` — via **`router.replace`** ⚠️ (back-stack bug; should be `push`) |
| **Base / glow** | `#1A140E` / `rgba(214,160,96,0.28)` — warm gold |
| **Badge** | `T.skillCourse` = "COURSE" / "COURS", colored `t.tag('gold')` |
| **Right caption** | **`43 ${T.unitsWord}`** — ❌ LITERAL "43 UNITS" |
| **Title** | `T.denT` — "Beginners' Den" / "Le coin des débutants" |
| **Sub** | `T.denS` — "Sounds · A1 · A2 — the full curriculum" |

**What it connects to:** `/den`, the curriculum spine. The real content exists: `src/content/curriculum.ts` with three tracks (`sons`, `a1`, `a2`) — and `T.trackDescs.a1` even says "**the 26 units** of level Découverte", which **contradicts the tile's "43 UNITS"**. One of those two numbers is wrong and neither is computed.
**What it is NOT:** Not progress-aware. It doesn't know you've completed anything.
**Needs to function properly:** Derive the count from `curriculum.ts` (`tracks.flatMap(t => t.units).length`) instead of the literal. Add a progress meta ("12/43 done").
**Fully built:** Shows real completion — a thin `ProgressBar` (the primitive already exists in `ui.tsx:123`) along the tile's bottom edge, and the right caption reads `12/43`.

**Build prompt:**
> In `app/home.tsx:190`, change `router.replace('/den')` to `router.push('/den')` and replace the literal `43 ${T.unitsWord}` with a count derived from `src/content/curriculum.ts`. Reconcile it with `T.trackDescs.a1`'s claim of "26 units" — make both read from the same source. Add a 2px `ProgressBar` pinned to the tile's bottom edge showing completed units from the progress store, and change the right caption to `${done}/${total}`.

## [17] Tile — Flashcards

| | |
|---|---|
| **Route** | `/flashcards` — `push` ✅ |
| **Base / glow** | `#0F1413` / `t.accA(30)` |
| **Badge** | `T.skillRead + ' · ' + T.skillVocab` = "READ · VOCAB" — ⚠️ two skills concatenated with a `·` in JSX rather than one string key; will read oddly in languages with different separators |
| **Title** | `T.cardsT` — "Flashcards" / "Cartes mémoire" |
| **Sub** | `T.cardsS` — ❌ **"8 cards · café recall"** — a literal count baked into a *translation string* |

**The subtle rot:** `cardsS` puts data ("8 cards") inside an i18n string. Every translator now has to maintain a number. This is the pattern to break.
**What it connects to:** `/flashcards`, which has real Again/Got it buttons — **the natural SRS write path** (see [7]).
**Needs to function properly:** `cardsS` split into a static descriptor + an interpolated count from the SRS deck (`{n} cards · due now`). The `T.deckSub` string already promises the SRS behavior that doesn't exist: *"Missed cards return tomorrow — right before you'd forget them."* That's a promise the app currently breaks.
**Fully built:** Live due-count on the tile; the deck-done screen actually schedules the misses.

**Build prompt:**
> In `src/i18n/strings.ts`, change `cardsS` from `'8 cards · café recall'` to an interpolatable `'{n} cards · due now'` (FR: `'{n} cartes · à réviser'`) and render it in `app/home.tsx:204` with the real SRS due count. Split the concatenated badge `T.skillRead + ' · ' + T.skillVocab` into a single `skillReadVocab` key so the separator is translatable. Then make `T.deckSub`'s promise true by wiring `app/flashcards.tsx`'s Again/Got it to the SRS scheduler from [7].

## [18] Tile — Voice Flash

| | |
|---|---|
| **Route** | `/voiceflash` — `push` ✅ |
| **Base / glow** | `#0E1116` / `rgba(96,126,160,0.30)` — cool blue |
| **Badge** | `T.skillSpeak` = "SPEAK", accent-colored (`t.acc` / `t.accA(16)`) |
| **Title** | `T.voiceT` — "Voice Flash" / "Flash vocal" |
| **Sub** | `T.voiceS` — "image → voice · translation" ✅ (no fake data) |

**What it connects to:** `/voiceflash` — which uses the five 52px Voice Flash glyph icons (`cup`, `house`, `vfBook`, `vfSun`, `car`) defined in `Icon.tsx:113-117`.
**The honesty issue:** this tile is badged **SPEAK**, but the app's speech recognition is **fake** (`services/stt.ts`). The screen self-scores via `T.vfSelfT` ("THE ANSWER — HOW DID YOU DO?" with "I said it right" / "Not quite" buttons) — which *is* the honest design. The badge is fine; the tile is one of the cleanest on the screen.
**Fully built:** Unchanged in structure; gains a due-count when Voice Flash items enter the SRS deck.

## [19] Tile — Sentences

| | |
|---|---|
| **Route** | `/sentence` — `push` ✅ |
| **Base / glow** | `#0D0B12` / `rgba(139,116,190,0.28)` — purple |
| **Badge** | `T.skillWrite` = "WRITE", `t.tag('grammar')` purple |
| **Title** | `T.sbT` — "Sentences" / "Phrases" |
| **Sub** | `T.sbS` — "learn · say · write" ✅ |

**What it connects to:** `/sentence` — a 4-stage drill (`T.learnT` → `T.arrangeT` → `T.sayItT` → `T.writeItT`). Clean, honest, no fake data.
**Fully built:** Wrong arrangements feed `logError('grammar', ...)` into the weak-spots engine [29].

---

## [20] Drill row — Role Play

**What it is:** An 88px-tall full-width row: a 44px accent-tinted circle with the `mic` icon, a serif-italic 21px title, a badge, and a 11px subtitle, with a `chevronRight` at the end. Shares the `DrillRow` component (`home.tsx:379-401`) with [21].
**Code:** `home.tsx:229-237` → `/roleplay` (`push` ✅)

| Property | Value |
|---|---|
| Height / radius | 88 / 18, bg `t.card2`, 1px `t.line(7)` |
| Glow | `t.accA(24)`, diagonal `{x:0.9,y:0}` → `{x:0.3,y:0.8}` |
| Lead | 44px circle, bg `t.accA(14)`, `Icon name="mic"` size 20 in `t.acc` |
| Badge | `T.skillSpeak` — "SPEAK" |
| Title | `T.rpT` — "Role Play" / "Jeu de rôle" |
| Sub | `T.rpS` — **"AI conversation · A1 → B2"** |

**The claim to check:** "AI conversation". The LLM service (`services/llm.ts`) is **real** — it proxies through a Supabase Edge Function — but with no `.env` and no deployed function it **always falls back to canned replies**. So the subtitle is a promise the current build doesn't keep. It becomes true the moment [Phase H7] ships (deploy the `coach` function, set `EXPO_PUBLIC_SUPABASE_URL/ANON_KEY`).
**Fully built:** Real LLM dialogue at the chosen level; each scene logs a session and its liaison/register errors feed the weak-spots engine.

## [21] Drill row — La Dictée

**Code:** `home.tsx:239-247` → `/dictation` (`push` ✅)

| Property | Value |
|---|---|
| Glow | `rgba(214,160,96,0.22)` gold |
| Lead | 44px circle, bg `rgba(214,160,96,0.14)`, containing the character **`é`** in `serif italic` 19 — a *typographic* lead, not an icon |
| Badge | `T.skillListen + ' · ' + T.skillWrite` = "LISTEN · WRITE", `t.tag('info')` blue |
| Title | **`"La Dictée"`** — ❌ a bare JSX literal, **not** `T.dicteeT` (which exists!) |
| Sub | `T.dictRowSub` — "Hear it, type it — accents included" ✅ |

**Two defects:**
1. The title bypasses the strings table even though `T.dicteeT` is defined in both languages. Harmless (the name is French either way) but it's an i18n hole.
2. The `é` lead is *fine* — it's real French, renders everywhere. Contrast with the weak-spot glyphs [29], which are not.

**What it connects to:** `/dictation` — which has real diff logic (`normDict` computes accent vs word-order vs gender differences). **This is the richest untapped error source in the app** — those diffs are exactly what the weak-spots engine needs.
**Fully built:** Each dictation diff calls `logError(kind, source)`, populating [29] with real data.

**Build prompt:**
> In `app/home.tsx:244`, replace the bare `"La Dictée"` string with `T.dicteeT`. In `app/dictation.tsx`, find the `normDict` diff computation and, for each mismatch, call `logError()` with a classified kind (`'accent' | 'agreement' | 'homophone' | 'word-order'`) — this is the highest-signal error source in the app and it is currently discarded.

## [22] The Browse fold

**What it is:** A 48px-tall, 24px-radius outlined pill that toggles the bottom half of the screen open. Local `useState`, not persisted.
**Code:** `home.tsx:250-255` → `setBrowse(b => !b)`

| Property | Value |
|---|---|
| Border | 1px `t.line(12)` |
| Label | `browse ? T.browseLess : T.browseOpen` — "Browse — playlists, exams, weak spots" / "Show less" |
| Icon | `chevronDown` 14px, `t.txA(55)`, sw 1.6 |

**Defects:**
1. **The chevron never rotates.** It points down whether the fold is open or closed — the icon set has `chevronUp` and it isn't used.
2. The open/closed state resets on every mount. A user who prefers the expanded view re-opens it every session.
3. No animation — the content pops in.

**What it is NOT:** Not a navigation control. It reveals in-place.
**Fully built:** Chevron rotates (or swaps to `chevronUp`), state persists to the store, and the reveal animates with `LayoutAnimation` / Reanimated. Better still: **the fold shouldn't exist** — if the content below is valuable, it should be reachable; if it isn't, it should be cut. A fold is a decision deferred.

**Build prompt:**
> In `app/home.tsx:250-255`, swap the icon to `browse ? 'chevronUp' : 'chevronDown'`, persist the `browse` flag to `useStore` so the preference survives remounts, and wrap the revealed `<View>` in a `LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)` transition. Separately, question the fold itself: consider promoting Weak Spots above it (it's the most personal content on the screen and is currently hidden two taps deep) and leaving only Playlists and the Examiner behind the fold.

---

# PART E — BEHIND THE FOLD

## [23] Word of the Day — "la flânerie"

**Code:** `home.tsx:260-277` → `openDict()` → `DictionaryOverlay.tsx`
**Status:** ❌ **LITERAL — hardcoded in two places.**

| Property | Value |
|---|---|
| Card | radius 18, 1px `t.line(7)`, `t.card`, padding 14/18 |
| Eyebrow | `T.wordOfDay` — "WORD OF THE DAY", semi 9, ls 2.4 |
| Word | **`la flânerie`** — bare literal, `serif` 21 |
| Meta | `T.nounFem` — "feminine noun" |
| Play button | 34px circle, 1px `t.accA(50)` border, `play` icon 13px accent |

**The overlay it opens** (`DictionaryOverlay.tsx`) hardcodes the *same word again*: `flânerie`, the IPA `/fla.nʁi/`, the definition, and the example sentence "On a passé l'après-midi en pleine flânerie le long de la Seine." It has a working TTS button (`tts.speak('la flânerie')` ✅) and a "Save to carnet" button whose state (`dictSaved`) lives in `useUI` — **not persisted, and saves nothing anywhere.**

**What it is NOT:** Not a word *of the day*. It is the same word every day, forever.
**What it connects to:** `useUI.openDict` → the overlay. The **play button on the card does nothing** — it's a `View` inside the card's `Press`, so tapping it opens the overlay rather than speaking the word. Two different affordances, one action.
**Needs to function properly:**
1. A vocabulary table to rotate over — `src/content/` has vocab; a deterministic `vocab[dayOfYear % vocab.length]` gives a real daily word with zero backend.
2. `openDict(word)` must take a parameter.
3. "Save to carnet" must write to the SRS deck — that's what a carnet *is*.

**Fully built:** A date-keyed rotation; the card's play button speaks the word inline (`tts.speak`) without opening the overlay; saving enqueues the word into tomorrow's review and the button state persists.

**Build prompt:**
> Build a word-of-the-day rotation: in `src/content/`, expose a flat vocab array; in `app/home.tsx`, select `vocab[dayOfYear() % vocab.length]` (deterministic — same word for everyone on a given day, no backend). Change `useUI.openDict` to `openDict(entry: VocabEntry)` and store the entry, then delete the hardcoded `flânerie`, its IPA, definition, and example from `src/components/DictionaryOverlay.tsx` and render the passed entry instead. Make the card's 34px play button a real `Press` calling `tts.speak(word)` with `e.stopPropagation()`-equivalent so it doesn't also open the overlay. Finally, make "Save to carnet" enqueue the word into the SRS deck from [7] and persist `dictSaved` per-word rather than as one global boolean.

## [24] "Your playlists" section head + SEE ALL

**Code:** `home.tsx:280` → `<SectionHead title={T.playlists} right={T.seeAll} />`
**Status:** ❌ **DEAD.** `T.seeAll` renders the words "SEE ALL" / "TOUT VOIR" in a section head that has **no `onPress` prop**. It is a label costumed as a link. This is the clearest broken promise on the screen.
**Needs:** the `SectionHead` `onPress` extension from [15], plus a `/playlists` screen to route to.

## [25] Playlist cards ×4

**What they are:** A horizontal scroll of four 158px-wide cards, each a 198px-tall gradient tile with a tag and a serif-italic French word, plus a label and meta line below.
**Code:** `home.tsx:55-60` (data), `281-301` (render)
**Status:** ❌ **DEAD — the cards are plain `View`s, not `Press`.** Nothing happens when you tap them.

| # | Word (in-card) | Tag | Glow | Label (below) | Meta (below) |
|---|---|---|---|---|---|
| 1 | `La Voix` | DEEP-DIVE | `t.accA(28)` | Pronunciation Deep-Dives | 15 tracks · nasal vowels |
| 2 | `Argot` | PARIS | `rgba(199,106,92,0.30)` terracotta | Casual Parisian Slang | 9 tracks · B1+ |
| 3 | `L'Argent` | BUSINESS | `rgba(96,126,160,0.32)` blue | French for Business | 12 tracks · B1 |
| 4 | `L'Oreille` | IMMERSION | `rgba(139,116,190,0.28)` purple | Audio Degradation · Métro | 6 tracks · with noise |

Card: radius 18, 1px `t.line(7)`, base `#12100E` (dark), diagonal glow `{x:0.8,y:0}`→`{x:0.2,y:0.7}`. Tag: `semi` 9, ls 2.2, absolutely positioned top-14/left-16. Word: `serifI` 27, absolute left-16/bottom-14. Label below: `semi` 13. Meta: 11px `t.txA(45)`.

**Note the track counts (15/9/12/6) live in `T.playlistMeta`** — data inside translation strings again, same rot as `cardsS`.

**What they connect to:** **Nothing.** `/player` exists and plays a track, but there is no playlist model, no `/playlists` screen, and no way to reach a specific playlist.
**What they are NOT:** Not playlists. Four decorative gradients with French nouns on them.
**Needs to function properly:** A content model. `src/content/playlists.ts` — `{ id, title, tag, glow, tracks: [{ id, title, lines: {fr,en}[], durationSec }] }`. The four current entries become real. `/player?playlist=<id>&track=<n>` via `useLocalSearchParams`.
**Fully built:** Cards are `Press`, route into the player at the right track, show real progress ("3/15 tracks") derived from the session log, and "SEE ALL" opens a `/playlists` index. The `L'Oreille` "audio degradation · Métro" concept (listening practice with background noise) is genuinely novel — it deserves to be real.

**Build prompt:**
> Create `src/content/playlists.ts` exporting the four playlists as real data — `{ id, title, tag, glow, tracks: [{ id, title, lines: { fr, en }[], durationSec }] }` — with the track counts (15/9/12/6) as *actual tracks*, not string claims; the lines feed TTS exactly as the current player track does. Move the counts out of `T.playlistMeta` and interpolate them. In `app/home.tsx:282-300`, change the playlist card `<View>` to a `<Press>` routing to `/player?playlist=${p.id}&track=0`. In `app/player.tsx`, read `useLocalSearchParams()` for `playlist`/`track`, make skip-forward/back move within the playlist, and log a session on track completion. Create `app/playlists.tsx` as the "SEE ALL" index listing all playlists with per-playlist progress.

## [26] "The Examiner" section head

**Code:** `home.tsx:304` — title `T.examiner` ("The Examiner" / "L'Examinateur"), right caption `"TEF · TCF · DELF"` (a bare literal, inert).
**Status:** Caption is inert text — acceptable here (3 items = the complete list, nothing to "see all").

## [27] Exam cards ×3

**Code:** `home.tsx:61` (data), `305-319` (render) → **all three `router.push('/speak')`**
**Status:** ❌ **All three cards route to the identical generic screen.** The exam has no identity, no timing, no format.

| Card | `examMeta` (EN) | `examMeta` (FR) |
|---|---|---|
| **TEF Canada** | Speaking · 15 min · timed | Expression orale · 15 min · chrono |
| **DELF B2** | The examiner interrupts you | L'examinateur vous interrompt |
| **TCF** | Listening · single play | Compréhension · une seule écoute |

Card: 224×118, radius 18, 1px `t.line(9)`, `t.card`. Eyebrow `"SIMULATION"` (bare literal, `semi` 9, ls 2.2, accent). Name: `serif` 23. Meta: 11.5px `t.txA(50)`.

**What they are NOT:** Not exam simulations. The metas describe three *completely different mechanics* — a countdown timer, scripted interruptions, a single-play listening test — **none of which exist.** Tapping any of them lands you in the same generic Speak screen.

**This is the largest gap between promise and delivery on the entire screen.** These are named, real-world, high-stakes exams (TEF Canada gates immigration applications). Shipping a card that says "TEF Canada · Speaking · 15 min · timed" and delivering a generic mic screen is a credibility risk, not just a feature gap.

**Needs to function properly:**
1. `src/content/exams.ts` — exam scripts as content: `{ id, name, sections: [{ kind, prompt, timeLimitSec, interrupts? }] }` modeled on each exam's real oral format. **This is a content-writing task, not an engineering one.**
2. Exam mode in Speak: `/speak?exam=tef` — countdown chip, Camille reads section prompts via TTS, scripted interjections at timed offsets for DELF.
3. **The honesty rule (non-negotiable):** without real STT, results are **completion-based, never scored**. "Section complete — 4 min speaking time", never "You scored B2". Claiming to score a TEF is the single worst thing this app could do.

**Fully built:** Each card routes to its own exam, shows last-attempt date from the session log, runs the real format, and ends in a per-section recap. If real STT lands, add transcript + LLM feedback through the existing coach Edge Function.

**Build prompt:**
> Create `src/content/exams.ts` with three entries — `tef`, `delf-b2`, `tcf` — each `{ id, name, sections: [{ kind: 'speak' | 'listen', prompt: { fr, en }, timeLimitSec, interrupts?: { atSec: number; line: string }[] }] }`, written to each exam's real oral format (TEF Canada Expression orale A/B, DELF B2 monologue + débat, TCF entretien). In `app/speak.tsx`, accept `?exam=<id>` via `useLocalSearchParams`: render a countdown chip per section, have Camille read prompts through the existing TTS service, and fire DELF's scripted interruptions at their offsets. **Results must be completion-based only** — report speaking time and sections completed, never a score or a level, because `services/stt.ts` is not real speech recognition. In `app/home.tsx:307`, route each card to its own exam id and show last-attempt date from the session log.

## [28] "Your weak spots" section head

**Code:** `home.tsx:322` — title `T.weak`, right `T.week` ("THIS WEEK" / "CETTE SEMAINE").
**Status:** The caption **claims a time window** ("this week") over data that has no timestamps. Inert text, but it's asserting a fact.

## [29] Weak spot rows ×3 — the glyph circles

**What they are:** Three 66px rows, each with a 34px accent circle containing a **typographic glyph**, a title, a meta line, and a chevron.
**Code:** `home.tsx:62-66` (data), `324-341` (render) → **all three `openSheet('grammar')`**
**Status:** ❌ **LITERAL data + a rendering hazard + all three lead to the same sheet.**

| # | Glyph | Title | `weakMeta` (EN) |
|---|---|---|---|
| 1 | **`‿`** (U+203F undertie) | La liaison obligatoire | the classic trap — drill it |
| 2 | **`ɔ̃`** (IPA + combining tilde) | Voyelles nasales — on / en | pronunciation · on / en / an |
| 3 | **`q`** | Le subjonctif présent | triggered after « il faut que » |

Row: h66, radius 16, 1px `t.line(7)`, `t.card`. Circle: 34px, `t.accA(14)`. Glyph: `serifI` 16, accent. Title: `semi` 14. Meta: 11.5 `t.txA(45)`. Trailing `chevronRight` 14px.

**Three separate defects:**

1. **The glyphs don't render reliably.** `‿` (undertie) and `ɔ̃` (open-o + combining tilde) are outside the coverage of most serif display fonts. On a device whose font lacks them, the user sees **tofu boxes (□)** in accent-colored circles. The third glyph is just the letter **`q`** — which stands for *nothing*; it appears to be a placeholder that was never replaced. **This is the "unknown characters in circles" problem.**

2. **The data is fabricated.** Nothing in the app records an error. These three weaknesses are asserted about a user who has done nothing.

3. **All three rows open the same generic grammar sheet** (`openSheet('grammar')` → the liaison sheet in `BottomSheet.tsx:175-231`). Tapping "Le subjonctif présent" teaches you about **liaisons**. That's a straightforward mis-wire.

**What they connect to:** `useUI.openSheet('grammar')` — a well-written sheet on *la liaison obligatoire* only, with three examples (`un‿allongé`, `les‿amis`, `vous‿avez` — note the undertie again) and an "Ask Camille why →" CTA to `/chat`.

**What they are NOT:** Not weaknesses. Not measured. Not yours.

**Needs to function properly:**
1. **Replace the glyphs.** Either first-letter serif capitals (**L** / **N** / **S**) in the accent circle — which always render — or add real icons to `Icon.tsx` (`link`, `speaker`, `book`). Do not ship a combining diacritic as an icon.
2. **An error log.** `logError(skill, source)` with a small fixed taxonomy (start with six: `liaison`, `nasales`, `subjonctif`, `genre`, `register`, `passé-composé`). Producers already exist and are throwing their data away: lesson quiz wrong answers, **dictation diffs** (`normDict` already computes them — see [21]), sentence-builder wrong arrangements, roleplay/speak liaison chips.
3. **Real destinations.** Each skill maps to its own target: liaison → the grammar sheet; nasales → the nasales lesson in the Den; subjonctif → its lesson.
4. **An empty state.** Fewer than 3 skills with errors → show fewer cards + "not enough data yet". **Never fabricate a weakness.**

**Fully built:** Top-3 skills by error count over a trailing 7 days, with real counts in the meta ("7 errors this week" — which finally makes the "THIS WEEK" caption true), each routing to its own remediation. Profile's "weakness engine" section reads the same aggregation.

**Build prompt:**
> Immediate (no new systems): in `app/home.tsx:62-66`, replace the glyph strings `‿`, `ɔ̃`, `q` with serif capitals `L`, `N`, `S` rendered as `TX font="serif"` in the existing accent circle — the current glyphs are a combining-diacritic and an undertie that render as tofu boxes on fonts lacking them, and `q` stands for nothing at all.
> Then build it for real: add `ErrorEvent = { date, skill, source }` and `logError(skill, source)` to `src/store/useProgress.ts` with the taxonomy `'liaison' | 'nasales' | 'subjonctif' | 'genre' | 'register' | 'passe-compose'`. Wire the producers that are currently discarding data: `app/lesson.tsx` quiz wrong answers, `app/dictation.tsx`'s `normDict` diffs, `app/sentence.tsx` wrong arrangements, `app/roleplay.tsx` and `app/speak.tsx` liaison chips. Add a `topWeaknesses(days = 7)` selector returning the top 3 by count. In `app/home.tsx:324-341`, render from that selector with real counts in the meta line, route each skill to its own destination (liaison → `openSheet('grammar')`, nasales → the nasales lesson in `src/content/curriculum.ts`, subjonctif → its lesson) instead of all three opening the same liaison sheet, and render an honest "not enough data yet" state when fewer than 3 skills have errors.

---

# PART F — THE TAB BAR

## [30] TabBar — LISTEN · SPEAK · COACH · PROFILE

**Code:** `src/components/TabBar.tsx` — absolutely positioned, a `LinearGradient` scrim (`transparent` → `t.alpha(t.bg, 92)`, locations `[0, 0.34]`), paddingTop 14 / paddingBottom 30.

| Tab | Label | Route | Status |
|---|---|---|---|
| home | `T.tabListen` — "LISTEN" / "ÉCOUTE" | `/home` | ✅ |
| speak | `T.tabSpeak` — "SPEAK" / "PARLE" | `/speak` | ✅ |
| coach | **`'COACH'`** — ❌ **bare literal, not i18n'd** (`TabBar.tsx:20`) | `/chat` | ⚠️ |
| profile | `T.tabProfile` — "PROFILE" / "PROFIL" | `/profile` | ✅ |

Active indicator: a 4px dot above the label (`t.acc` when active, transparent otherwise) + label color `t.tx` vs `t.txA(45)`. Label: `semi` 10.5, ls 2.2. Press scale 0.92.

**Two defects:**
1. `'COACH'` is the **only un-i18n'd tab label**. In French it should be "COACH" too (the word is used in French), but it must come from the strings table for consistency and future languages.
2. **All four tabs use `router.replace`** — the app-wide back-stack erosion. For tab-to-tab switching `replace` is defensible; the bug is that drill screens use it too ([16] Den).

**Naming question worth raising:** the home tab is labeled **"LISTEN"**, but home is a *dashboard*, not a listening surface. A user looking for their progress will not look under "LISTEN". Consider "TODAY" / "AUJOURD'HUI".

**Build prompt:**
> In `src/i18n/strings.ts`, add `tabCoach: 'COACH'` to both FR and EN, and use it in `src/components/TabBar.tsx:20` in place of the bare literal. Then reconsider `tabListen`: the home tab is a dashboard, not a listening surface — "TODAY" / "AUJOURD'HUI" describes it accurately. Finally, audit `router.replace` usage app-wide: keep it for tab-to-tab switching, but change every drill/detail navigation (`app/home.tsx:190` `/den`, `app/home.tsx:94` `/profile`, `app/home.tsx:108,120` `/profile`) to `router.push` so the back gesture works.

---

# PART G — SUMMARY TABLES

## G1. Every element, by honesty

| Status | Count | Elements |
|---|---|---|
| ✅ **Genuinely live** | 4 | [1] greeting · [2] name · [3] FR/EN toggle (with a desync bug) · [7] review ✓-state (half) |
| ⚠️ **Works, wrong verb/affordance** | 5 | [4] avatar (`replace`) · [10] kebab (undiscoverable) · [16] Den tile (`replace`) · [22] browse fold (chevron never rotates) · [30] tab bar (`'COACH'` literal) |
| ❌ **Pure literal** | 12 | [5] 12/15 min · [6] 14 days/1 freeze · [7] 23/6 min · [8][9][11][12][13][14] the whole hero · [16] 43 UNITS · [17] 8 cards · [23] la flânerie |
| ❌ **Dead — looks interactive, isn't** | 3 | [24] SEE ALL · [25] playlist cards (plain `View`s) · [27] exam cards (all → same screen) |
| ❌ **Fabricated + broken rendering** | 1 | [29] weak spots (`‿` `ɔ̃` `q` tofu glyphs, invented data, all → same sheet) |

## G2. Store fields that exist and are ignored by home

| Field | Seeded value | Where it should drive |
|---|---|---|
| `streak` | `14` | [6] — sits **unread next to a hardcoded `14`** |
| `reviewDue` | `23` | [7] — sits unread next to a hardcoded `'23'` |
| `freeze` | `1` | [6] |
| `weekDots` | `[t,t,f,t,t,t,f]` | profile calendar |
| `pace` | `'10 min'` | [5] — the goal target |
| `level` | `'B1'` | hero recommendation |

**All of these are seeded fakes and must be zeroed** (persist version bump v2→v3) before they're bound — otherwise binding them just launders the same lies through the store.

## G3. Data hiding inside translation strings (the pattern to break)

| Key | Value | Should be |
|---|---|---|
| `cardsS` | `'8 cards · café recall'` | `'{n} cards · due now'` |
| `playlistMeta` | `['15 tracks · nasal vowels', ...]` | `'{n} tracks · {topic}'` |
| `left` | `'4:12 left'` | computed from player position |
| `oneFreeze` | `'1 freeze'` | `'{n} freeze'` |
| `denS` / `trackDescs.a1` | "43 UNITS" (tile) vs "the 26 units" (string) — **they contradict each other** | derived from `curriculum.ts` |

## G4. Build order

| # | Work | Blocks | Effort |
|---|---|---|---|
| 1 | **Honesty pass** — remove [14] "4:12 left", fix [29] glyphs → `L`/`N`/`S`, `T.dicteeT` for [21], `tabCoach` for [30], `push` not `replace` | nothing | ~2 h |
| 2 | **Zero the seeds** — `streak/reviewDue/weekDots` → 0, persist v3 | everything downstream | ~1 h |
| 3 | **Progress engine** (`useProgress.ts` + `logSession` call sites + tests) | [5][6] and all of §4–8 | 2–3 d |
| 4 | **SRS** (`reviewCard`, `dueCount`) | [7][17][23] | 2 d |
| 5 | **Resume state** | [8][9][11][13][14] | 1 d |
| 6 | **Error log + weak spots** | [29] | 1–1.5 d |
| 7 | **Playlists content model + `/playlists`** | [24][25] | 2 d |
| 8 | **Exam scripts + Speak exam mode** | [27] | 2–3 d |
| 9 | **Coach live** (deploy Edge Function, `.env`) | [20]'s "AI conversation" claim | 1 d |

---

# PART H — THE MASTER BUILD PROMPT

*One prompt that builds the whole screen honestly. Use this if you want a single hand-off rather than the per-element prompts above.*

> Rebuild the Ealch v2 welcome screen (`ealch-v2/app/home.tsx`) so that **no element on it lies**.
>
> **Step 1 — Zero the fakes.** In `src/store/useStore.ts`, change the seeded defaults `streak: 14`, `reviewDue: 23`, `weekDots: [true,true,false,true,true,true,false]` to zero/empty, bumping persist `version` to 3 with a migration that clears them. These seeds are the source of every false number.
>
> **Step 2 — Build the progress engine.** Create `src/store/useProgress.ts` (zustand + AsyncStorage persist, mirroring `useStore`) holding three logs — `sessions: SessionEntry[]`, `errors: ErrorEvent[]`, `cards: Record<string, SrsCard>` — plus `resume: ResumeState | null`. Writers: `logSession(activity, minutes, items)`, `logError(skill, source)`, `reviewCard(itemId, grade)`, `setResume()` / `clearResume()`. Pure derived selectors: `minutesToday()`, `streak()` (consecutive days, one gap bridged by a freeze), `weekDots()`, `dueCount()`, `topWeaknesses(days)`. Unit-test the streak and SRS math in `src/store/progress.test.ts` — gap days, freeze consumption, local-midnight boundaries — following the pattern in `src/utils/time.test.ts`.
>
> **Step 3 — Wire the producers.** Every drill screen already has an obvious completion handler; add one line to each: `app/flashcards.tsx` (deck done → `logSession` + Again/Got it → `reviewCard`), `app/dictation.tsx` (check → `logSession`, and each `normDict` diff → `logError`), `app/lesson.tsx` (quiz pass/fail → `logSession` / `logError`), `app/sentence.tsx`, `app/roleplay.tsx`, `app/voiceflash.tsx`, `app/speak.tsx` (`endSession`), `app/player.tsx` (track finish, and persist playback position into `resume`).
>
> **Step 4 — Bind the screen.** Today strip: goal target from `parseInt(useStore.pace)`, minutes from `minutesToday()`, ring `strokeDashoffset = 88 * (1 - pct)`; streak from `streak()` with a "Day 1 starts today" zero state; review from `dueCount()` with a `count × 15s` estimate. Hero: two states — resume (real title, real remaining, real route) or begin (recommend first due review, else next incomplete curriculum unit); **never render a time-remaining pill without a real position**. Den tile: unit count derived from `src/content/curriculum.ts` (reconcile the tile's "43" against `T.trackDescs.a1`'s "26"). Flashcards tile: due count interpolated into a reworded `cardsS`. Word of the day: `vocab[dayOfYear % len]`, passed into `openDict(entry)` so `DictionaryOverlay` stops hardcoding *flânerie*; "Save to carnet" enqueues into SRS.
>
> **Step 5 — Fix the dead controls.** Give `SectionHead` an optional `onPress` + chevron and wire "SEE ALL" to a new `app/playlists.tsx`. Make playlist cards `Press` (they are plain `View`s) routing to `/player?playlist=<id>&track=0`, backed by a new `src/content/playlists.ts`. Give each exam card its own identity via `src/content/exams.ts` and a `?exam=<id>` mode in `app/speak.tsx` — **completion-based results only, never a score**, because `services/stt.ts` is not real speech recognition.
>
> **Step 6 — Fix the rendering hazards.** Replace the weak-spot glyphs `‿` (undertie), `ɔ̃` (IPA + combining tilde) and `q` (a placeholder standing for nothing) with serif capitals `L` / `N` / `S`, and populate the rows from `topWeaknesses(7)` with real counts, each routing to its own remediation rather than all three opening the same liaison sheet. Show an honest "not enough data yet" state when there aren't three weaknesses to report.
>
> **Step 7 — Sweep the small things.** `'COACH'` → `T.tabCoach`. `"La Dictée"` → `T.dicteeT`. `setLang` → `setAppLang` in the header toggle. `router.replace` → `router.push` for every non-tab navigation. Browse-fold chevron rotates and its state persists. The hero kebab (⋯) becomes a labeled "4 words first" pill — a three-dot overflow icon is the wrong affordance for the vocabulary injector, which is the best-written content in the app and is currently hidden behind it.
>
> **The rule that governs all of it:** if a number cannot be derived from a real event the user caused, it does not render. An empty state is not a failure — a fabricated one is.
