# Ealch v2 — Home Page Functionality Audit & Wiring Plan

**Date:** 2026-07-12 · **Scope:** `app/home.tsx` and every surface it links to — today strip, hero/resume, foundations tiles, drill rows, word of the day, playlists, the Examiner, weak spots, Speak, Coach, Profile, Settings.
**Companion docs:** `AUDIT-AND-COMPLETION-PLAN.md` (master audit) · `ONBOARDING-LOGIC-FIX-PLAN.md` (Phases L/A/G/N/M). This plan is the *feature-functionality* layer on top of both.

---

## 1. The whole picture — what's actually missing

The home page is a **dashboard over data that nothing in the app produces**. Three layers exist today:

1. **Content layer** (`src/content/*`) — static but well-structured lesson/drill/review tables. Fine as v1 content.
2. **Service layer** (`src/services/*`) — real halves exist (LLM coach via Edge Function, TTS via expo-speech, Supabase auth/config) with offline fallbacks.
3. **UI layer** — beautiful, and **hardwired to prototype literals**, sometimes even ignoring store fields that already exist (home shows streak `'14'` as a string literal while `useStore.streak` sits unused next to it).

**The missing piece is a fourth layer: a progress engine.** Streaks, goal minutes, review-due counts, weak spots, "resume", profile stats — every one of these is a *view over a session/answer log*, and no such log exists. No drill completion writes anything anywhere. Until that engine exists, every number on home is decoration. That is Phase H2 below, and phases H3–H8 are consumers of it.

```
content (static tables)          ──┐
services (llm/tts/auth/config)   ──┤→  progress engine (NEW: session log,     →  home / profile /
store (prefs + seeded fake stats)──┘   SRS scheduler, error log, resume state)    smartreview / feedback
```

---

## 2. Hardcoded-feature inventory (file:line — verified in code)

### Home (`app/home.tsx`)
| Widget | What's hardcoded | Working system beneath? |
|---|---|---|
| Goal ring "12/15 min" | Literal `12`/`15 min` (L107); ring arc is a fixed `strokeDashoffset={18}` (L21) | None. Goal target should come from onboarding's `pace` pick (already in store); minutes-today needs the engine |
| Streak "14 days · 1 freeze" | Literals (L117, L124) | `useStore.streak` / `freeze` exist (seeded 14/1) but are **not even read** |
| Review "23 to review · 6 min" | Literal `'23'` (L46), `'6 min'` (L48) | `useStore.reviewDue` exists, unused; real count needs SRS (H3) |
| Hero "Au Café · Resume · 4:12 left" | Fixed scenario, `T.left` static; always routes to the same `/player` | No "current activity" concept exists anywhere |
| Foundations "43 UNITS" | Literal (L186); flashcards "8 cards · café recall" static | Curriculum tables exist in `content/curriculum.ts` — count can be derived |
| Word of the day "la flânerie" | Fixed word (L262); `openDict` opens one fixed dictionary entry | Vocab exists in content; needs a date-keyed rotation |
| Playlists | Local array (L54-59); **cards are `View`, not pressable** (L278); "SEE ALL" is plain text — `SectionHead` has no `onPress` (L275, 346-357) | Player screen exists; no playlist/track model |
| The Examiner (TEF Canada / DELF B2 / TCF) | `exams` string array (L60); all three cards push generic `/speak` (L302) — no exam identity, no exam behavior | Speak Mode exists; no exam scripts/timing |
| Weak spots | Hardcoded 3-item array with glyph circles `‿`, `ɔ̃`, `q` (L61-65) — these are the "unknown characters in circles"; every tap opens the same generic grammar sheet (L320) | Nothing records errors, so nothing to aggregate |
| Tab bar | `'COACH'` label not i18n (`TabBar.tsx:20`); tabs use `router.replace` (back-stack erosion, audit C3) | — |

### Linked surfaces
| Screen | Findings |
|---|---|
| **Speak** (`app/speak.tsx`) | Aura circle behind the tutor is a **LinearGradient faking a radial** (L138-143) — same defect class fixed elsewhere on 2026-07-12; swap to `RadialGlow`. "Analysis" transcript is a fixed sentence (L213-215) with a fixed liaison chip; mic is the fake STT (`services/stt.ts`) |
| **Coach / chat** (`app/chat.tsx`) | The real system beneath **exists and is good**: `services/llm.ts` proxies through a Supabase Edge Function with model/prompt config, falling back to `cannedReplies` rotation when unconfigured. Today it always falls back (no `.env`, no deployed function). Also: messages render in a ScrollView (audit E4), "ILLIMITÉ ✦" chip implies a paid tier (audit §6) |
| **Smart review** (`app/smartreview.tsx`) | Reads `reviewOverview(lang)` — a static table (`content/drills.ts:51`); "+14 tomorrow / +9 in 3 days" chips fixed; `reviewCleared` store flag is the only live bit. `app/review.tsx` session cards are static too |
| **Profile** (`app/profile.tsx`) | "14,6 hours / 38 conversations" literals (L201-202); week dots from seeded `weekDots`; frozen-Wednesday copy hardcoded (L103); sign-out only local (audit B2) |
| **Settings** (`app/settings.tsx`) | Fully covered by existing plans: fake billing (audit §6 — remove), free-text alarm (onboarding plan N3 — TimeWheel), notification toggles dead (N2), languages picker honesty (G1) |

---

## 3. Phase H1 — Truthful bindings & visual fixes (≈ 1 day, no new systems)

*Everything here is achievable today with existing store fields + components. It makes home honest even before the engine exists.*

1. **Bind the today strip to the store:** streak → `s.streak`, freeze → `s.freeze`, review count → `s.reviewDue` (respecting `reviewCleared`), goal target → parse `s.pace` ("10 min" → 10). Minutes-today = 0 until H2 (show `0/10 min` honestly). Ring arc: compute `strokeDashoffset` from the ratio.
2. **Zero the seed data** (audit B3): defaults `streak: 0, reviewDue: 0, weekDots: all false, freeze: 1`, `userName: ''` (ask in onboarding). Add proper **empty/first-day states**: streak 0 → "Day 1 starts today"; nothing due → reuse the caught-up state.
3. **Replace the glyph circles with meaningful marks** (user request): weak spots get first-letter/semantic avatars — `L` (La liaison), `N` (voyelles Nasales), `S` (Subjonctif) — rendered as `TX font="serif"` capital in the accent circle, or proper icons (`link`, `speaker`, `book`) added to `Icon.tsx`. Same treatment anywhere else a decorative glyph can fail to render (`é` lead in La Dictée row is fine — it's real French; the IPA `ɔ̃`/undertie `‿` are the ones that box out).
4. **Make every "SEE ALL" a real control:** give `SectionHead` an optional `onPress` + chevron; wire playlists → `/playlists` (H5 screen), examiner → keeps inline scroll (3 items = complete list; either drop its "TEF · TCF · DELF" caption action or route to a `/exams` index), weak spots → profile's weakness section.
5. **Make playlist cards pressable** (they're plain `View`s) → `/player?playlist=<id>` (H5 defines params; until then, `/player`).
6. **Speak-page radial:** replace the aura LinearGradient circle (`speak.tsx:137-144`) with `RadialGlow` (`cx 50% / cy 35% / rx≈ry 50%`), matching the splash fix.
7. **Tab bar:** `'COACH'` → `T.tabCoach` (add EN/FR strings); switch tab navigation to `router.replace` only between tabs but `push` for drills (audit C3 partial).

**Exit criteria:** no numeric literal on home that claims to be user data; all advertised controls respond; no un-renderable glyphs.

---

## 4. Phase H2 — The progress engine (≈ 2–3 days) ← everything else depends on this

New module `src/store/useProgress.ts` (zustand + AsyncStorage persist, same pattern as `useStore`):

```ts
type SessionEntry = { date: string; activity: 'lesson'|'flashcards'|'voiceflash'|'sentence'|'roleplay'|'dictation'|'speak'|'player'|'review'; minutes: number; items: number };
type ErrorEvent  = { date: string; skill: 'liaison'|'nasales'|'subjonctif'|'genre'|'register'|...; source: string };
type ResumeState = { route: string; title: string; startedAt: string } | null;
```

- **Write API:** `logSession(activity, minutes, items)`, `logError(skill, source)`, `setResume(route, title)` / `clearResume()`.
- **Call sites (the wiring job):** flashcards deck-done, dictation check, lesson quiz pass/fail (fail → `logError`), sentence/roleplay/voiceflash completion, speak `endSession`, player finish. Each screen already has an obvious completion handler — one line each.
- **Derived selectors (pure functions over the log):** `minutesToday()`, `streak()` (consecutive days with ≥1 session; consume a freeze for a single gap day, decrement `freeze`), `weekDots()`, `hoursTotal()`, `conversationCount()`.
- **Migrate:** delete seeded `streak/reviewDue/weekDots` from `useStore` (persist-version bump v1→v2), derive them instead.
- **Consumers switched in this phase:** today strip (live minutes + streak), profile stats + week calendar + frozen-day copy, feedback screen's "6 min spoken · 14 phrases".
- **Tests:** streak math (gap, freeze consumption, timezone/day boundary), goal parsing — this is exactly the pure-logic testing the audit §8-1 called for.

---

## 5. Phase H3 — SRS, smart review, resume & word of the day (≈ 2 days)

- **Card scheduling:** per-item record `{itemId, due: date, interval, lapses}` in `useProgress`. Flashcards' existing **Again/Know** buttons write back (Again → due now+1d, interval reset; Know → interval ×2.5, capped) — a deliberate FSRS-lite; the audit's Phase 4 "FSRS sync to Supabase" replaces internals later behind the same API.
- **Seeding:** first review session seeds from `reviewSession(lang)` content items; completing lessons/drills enqueues their vocab.
- **`reviewDue` becomes derived** (`count(due <= today)`); home strip, smart-review header and its chips ("+N tomorrow / +M in 3 days") all read it. The "6 min" estimate = `count × 15s`, rounded.
- **Resume/current activity:** hero binds to `ResumeState` — any drill/lesson/player sets it on entry, clears on completion. Hero shows the real title ("Reprendre · Leçon 4 — Les nasales"), routes to the stored route; when null, hero becomes a **start** card for the recommended next activity (first due review, else next curriculum unit). "4:12 left" only shown when the player reports a real position (player already tracks progress state — persist it).
- **Word of the day:** deterministic rotation `vocabTable[dayOfYear % len]` from content vocab; `openDict` receives the word instead of always showing "la flânerie". Save button (already in the overlay) enqueues the word into SRS.

---

## 6. Phase H4 — Weak spots for real (≈ 1–1.5 days)

- **Producers:** lesson quiz wrong answers, dictation diffs (accent vs word-order vs gender — `normDict` already computes diffs), sentence-builder wrong arrangements, roleplay/speak liaison chips → `logError(skill, source)` with a small fixed skill taxonomy (start with 6: liaison, nasales, subjonctif, genre, register, passé-composé).
- **Aggregation:** top-3 skills by count over trailing 7 days → home's weak-spots list, with real counts in the meta line ("7 errors this week"). Fewer than 3 skills with errors → show fewer cards + a friendly "not enough data yet" state (never fake).
- **Targeted destinations:** each skill maps to a real destination — liaison → grammar sheet (exists), nasales → the nasales lesson in the Den (`content/curriculum.ts`), subjonctif → its lesson — instead of one generic sheet.
- Profile's "weakness engine" section reads the same aggregation (removes its hardcoded copy).

---

## 7. Phase H5 — Playlists & player library (≈ 2 days)

- **Content model:** `content/playlists.ts` — `{id, title, tag, glow, tracks: [{id, title, lines: {fr, en}[], durationSec}]}` (the 4 current playlists become real entries; lines drive TTS exactly like the current player track).
- **Player params:** `/player?playlist=<id>&track=<n>` via expo-router `useLocalSearchParams`; skip-forward/back move within the playlist; finishing a track logs a session (H2) and advances.
- **New `/playlists` screen:** simple list of all playlists (title, meta, progress = tracks completed from session log) — the "SEE ALL" target from H1.
- **Home cards** show per-playlist progress ("3/15 tracks"). Downloads screen ties in later (audit Phase 4 — real offline assets).

---

## 8. Phase H6 — The Examiner (≈ 2–3 days, after H2 + M-phase STT decision)

- **Exam scripts as content:** `content/exams.ts` — `{id: 'tef'|'delf-b2'|'tcf', name, sections: [{kind: 'speak'|'listen', prompt fr/en, timeLimitSec, interrupts?: string[]}]}` modeled on each exam's real oral format (TEF Canada Expression orale A/B, DELF B2 monologue+débat, TCF entretien). Content-writing task, not engineering.
- **Exam mode in Speak:** `/speak?exam=tef` — timer chip counts down per section; Camille reads section prompts (TTS exists); "the examiner interrupts you" = scripted interjections at timed offsets. End → feedback screen with per-section recap.
- **Honesty rule (store-critical, audit §5-4):** without real STT, results are **completion-based, never scored** ("Section complete — 4 min speaking time") . If M-phase Option 2 (real STT) landed, add transcript + LLM feedback via the existing coach Edge Function.
- Home exam cards route to their own exam; card meta shows last-attempt date from the session log.

---

## 9. Phase H7 — Coach live (≈ 1 day, mostly ops)

- The client code is already production-shaped. To make it real: create the Supabase project `.env` (`EXPO_PUBLIC_SUPABASE_URL/ANON_KEY`), deploy the `coach` Edge Function (name from `ENV.coachFunction`) holding the provider key server-side, seed `system_prompts` + fix its RLS to `active = true` (audit C7).
- Client polish while there: inverted `FlatList` (audit E4), remove the "ILLIMITÉ ✦" chip (audit §6), quick-reply chips generated from the last assistant message topic (simple keyword map, or ask the function to return 2 suggestions), keep canned fallback for offline.
- Coach becomes the **feedback consumer** too: "Why?" from Speak passes the actual error context (from H4's error event) instead of a canned question.

---

## 10. Phase H8 — Profile & Settings functionalization (≈ 1 day + items owned by other plans)

**Profile:** stats/calendar/weakness all become H2/H4 selectors (done in those phases); remaining here — accent-region picker persists (works) ✓, real sign-out + state clear (onboarding plan A4), level card binds to placement/`level` history, remove fake trajectory copy until enough sessions exist ("trajectory unlocks after 7 active days").

**Settings:** the remaining dead controls are each owned by an existing phase — billing block **removed** (audit §6), alarm → TimeWheel + real scheduling (N2/N3), sound toggle → real audio (M1), languages honesty (G1), account deletion (A-phase/store item). This phase is just executing that checklist on the settings screen and deleting the "Restore purchases" row (audit B5).

---

## 11. Sequencing & dependency map

| Order | Phase | Depends on | Effort |
|---|---|---|---|
| 1 | **H1** truthful bindings, icons, radial, see-all | — (do immediately) | 1 d |
| 2 | **H2** progress engine | H1's zeroed defaults | 2–3 d |
| 3 | **H3** SRS + resume + word of day | H2 | 2 d |
| 4 | **H4** weak spots | H2 (error log) | 1–1.5 d |
| 5 | **H5** playlists/player library | none hard (H2 for progress meta) | 2 d |
| 6 | **H7** coach live | Supabase project (A-phase) | 1 d |
| 7 | **H6** the Examiner | H2; STT decision from plan-M | 2–3 d |
| 8 | **H8** profile/settings sweep | H2/H4 + plans A/G/N/M | 1 d |

Total ≈ 2–2.5 focused weeks. H1 is pure quick-wins; H2 is the keystone — nothing after it is speculative once the log exists. Phases run parallel to the onboarding-logic plan (L/A/G are independent; N/M share the dev-build cycle H6 may also want).

*Investigated: `app/home.tsx` (full), `app/speak.tsx`, `app/smartreview.tsx`, `app/chat.tsx` context, `app/profile.tsx`, `app/settings.tsx`, `src/components/TabBar.tsx`, `src/services/{llm,stt,tts}.ts`, `src/content/drills.ts`, `src/store/useStore.ts`, plus prior-session audits of player/review/feedback.*
