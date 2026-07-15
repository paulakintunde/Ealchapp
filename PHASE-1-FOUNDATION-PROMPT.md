# Phase 1 — Foundation: the canonical corpus and the attempt log

**Read `INDEPENDENT-LOOK-REVIEW.md` first.** It is the source of truth for why this phase exists. Do not read any other `.md` in this repo as authoritative; several describe plans that the code contradicts.

---

## What this phase is

Ealch has no concept of a **content item**. Every drill owns a private, differently-shaped array with no stable identity:

| Drill | Its private shape | Where |
|---|---|---|
| Flashcards | `{ fr, en, ex }` | `src/content/index.ts:7` |
| Voice Flash | `{ icon, fr, en, key, keyEn }` | `src/content/index.ts:36` |
| Sentence Builder | `{ w, t }` + a shuffle array | `src/content/index.ts:45` |
| Role Play | `{ ai, en, user }` | `src/content/index.ts:58` |
| Dictation | `{ fr, tipT, tipB }` | `src/content/drills.ts:80` |
| Smart Review | `{ type, tone, meta, prompt, hint, answer, example }` | `src/content/drills.ts:16` |
| Lessons | a 7-field object with a flat cell array | `src/content/lessons.ts:8` |

Nothing has an ID. **This is the root cause of most of the review's Tier 1 findings.** The SRS does not exist because there is nothing for a scheduler to point at. Smart Review's cards are hardcoded because there is no corpus to draw from. "Weak spots" are literals because no attempt was ever recorded against anything identifiable. Home's `'23'` is a string because there is nothing to count.

Phase 1 builds the two missing primitives that every later phase stands on:

1. **A canonical corpus** — one `Item` type with a stable, immutable ID. Every drill becomes a *view* over it.
2. **An attempt log** — every drill attempt recorded **against an item ID**, with the score and verdict the drills already compute and currently throw away.

## What this phase is NOT

Be strict about this. Scope creep here poisons every phase after it.

- ❌ **No new learning content.** Not one new lesson, card, or sentence. Content generation is Phase 2.
- ❌ **No SRS.** That is Phase 3 and it is built *on top of* what you deliver here.
- ❌ **No screen rebuilds.** Player, Downloads, Placement and Le Rapport stay exactly as they are.
- ❌ **No monetization.** No paywall, no SDK, no `premium` gating. Explicitly deferred to a separate review. Do not touch it.
- ❌ **No deleting the Tier 1 fabrications yet.** They get *replaced by derived data* in Phase 4, not deleted now. (Exception: the three Tier 2 bugs in Task 8, which are independent and block testing.)
- ❌ **No audio files.** Device TTS only. `audioRef` is a nullable field you define and leave null.

## Definition of done

**The app renders exactly what it renders today — the same 8 flashcards, the same 3 lessons, the same 5 voice-flash items — but every one of them now comes from the canonical corpus by stable ID, and every attempt against them is logged.**

If a user notices any visible change other than the Task 8 bug fixes, the phase overshot.

---

## Task 0 — Consolidate the forked repository ✅ DONE (commit `d2e602e`)

> **Complete.** One repo now holds `ealch-v2` + `ealch-admin`. `tsc` clean, 37/37 tests pass. The NativeWind removal survived; `config.ts`/`schema.sql` now default to NVIDIA Nemotron to match the inherited `coach` function. See §6.1 of the review.
>
> **It settled the Edge Function question, and the code was wrong in both directions:** `coach` and `tts` are **ACTIVE and deployed**; `stt` and **`delete-account` are NOT**. Account deletion therefore fails for every user today. `coach`/`tts` are also deployed with `verify_jwt: false` — open, unauthenticated, billable LLM proxies. These became Task 8 items 4-6.
>
> The original task text is kept below for the record.

<details>
<summary>Original Task 0 brief</summary>

### Consolidate the forked repository (BLOCKING; do this first)

There are two git repos sharing ancestor `d43e5ae`. Each holds assets the other lacks. See §6 of the review.

- **A** = `C:\Users\harki\Downloads\gitbuild appealch\Ealchapp` (branch `build/ealch-v2-expo`, HEAD `20bbf0b`) — has the honesty pass, the progress engine, `errors.ts`, `delete-account`, NativeWind removal. **Its `ealch-v2` is ahead and wins every conflict.**
- **B** = `C:\Users\harki\Ealchapp` (HEAD `193a0ae`) — has `ealch-admin/` (the **only** Ops Console) and `ealch-v2/supabase/functions/coach/` + `tts/` + `seed.sql` + `SETUP.md`. **Its `ealch-v2` is stale (still on NativeWind) and must not survive.**

**Do:**
1. Back up both trees before touching either.
2. From A: `git remote add ops "C:/Users/harki/Ealchapp"` then `git fetch ops`.
3. Merge B's history into A. `ealch-admin/` should land as a clean addition (A has no such directory, so no conflict). Every conflict inside `ealch-v2/` is resolved **in favour of A** — take A's side wholesale, do not hand-merge.
4. Bring across from B into A's `ealch-v2/supabase/`: `functions/coach/`, `functions/tts/`, `seed.sql`, `SETUP.md`. A already has `functions/delete-account/`; keep it.
5. **Verify the Edge Function claim.** `src/services/llm.ts` proxies to a `coach` function and `src/services/stt.ts:325` asserts the `stt` backstop *"is not deployed yet"*. `coach` and `tts` exist in B's source. Check what is **actually deployed** to Supabase project `ogbothupjcivwruesgsu` and report the truth. Update or delete those comments accordingly — one of them is probably lying.
6. Confirm the merged tree still passes `npx tsc --noEmit` and `npm test` (37 tests) in `ealch-v2`, and that `ealch-admin` still starts on `:4000`.

**Commit separately, before any Phase 1 code.** This must be reviewable on its own.

</details>

---

## Task 1 — The canonical schema ✅ DONE

Create `ealch-v2/src/content/schema.ts`. **This file is the single source of truth for content shape and is shared, verbatim, with `ealch-admin`.** It must have zero runtime imports (no React Native, no zustand, no Supabase) so it can be imported by the app, the Ops Console, the generator, and `node --test` alike. Follow the `progress.logic.ts` precedent exactly.

```ts
export type Level = 'sons' | 'a1' | 'a2' | 'b1' | 'b2' | 'c1' | 'c2';
export type ItemKind = 'word' | 'phrase' | 'sentence';
export type DrillKind =
  | 'flashcard' | 'voiceflash' | 'dictation'
  | 'sentence'  | 'roleplay'   | 'review';

/** An atomic corpus item. `id` is stable and immutable — it is the SRS key.
 *  Format: fr.<level>.<theme>.<seq>   e.g. 'fr.a1.cafe.001' */
export type Item = {
  id: string;
  kind: ItemKind;
  level: Level;
  theme: string;               // 'cafe' | 'marche' | 'transport' | ...
  fr: string;
  en: string;
  ipa?: string;
  gender?: 'm' | 'f';
  example?: { fr: string; en: string };
  notes?: string;              // teaching note, hack, or clue
  tags: string[];              // 'liaison' | 'nasal' | 'passe-compose' | ...
  drills: DrillKind[];         // which drills MAY select this item
  audioRef?: string | null;    // null for now (device TTS). Phase 7 fills it.
  version: number;
};
```

The expanded lesson model. **A Unit contains N Lessons** (today's `subs[]` are titles with nothing behind them — that is what this replaces). A Lesson is an **ordered list of typed sections**, so a lesson can be as deep as the content demands without the renderer changing.

```ts
export type LessonSection =
  | { type: 'teach';        title: string; body: string }
  | { type: 'steps';        title: string; steps: string[] }
  | { type: 'examples';     title: string; examples: { fr: string; en: string; note?: string }[] }
  | { type: 'useCases';     title: string; cases: { situation: string; fr: string; en: string }[] }
  | { type: 'hacks';        title: string; hacks: { hack: string; why: string }[] }
  | { type: 'cheatSheet';   title: string; rows: { k: string; v: string }[] }
  | { type: 'commonErrors'; title: string; errors: { wrong: string; right: string; why: string }[] }
  | { type: 'focus';        title: string; points: string[] }
  | { type: 'table';        title: string; cols: string[]; rows: string[][] }
  | { type: 'audio';        title: string; lines: string[] }
  | { type: 'practice';     title: string; skill: 'read' | 'write' | 'speak' | 'listen'; itemIds: string[] }
  | { type: 'quiz';         title: string; questions: { q: string; opts: string[]; correct: number; why?: string }[] };

export type Lesson = {
  id: string;          // 'sons.03.l1'
  unitId: string;      // 'sons.03'
  seq: number;
  title: string;
  level: Level;
  tag: string;         // 'SONS · LEÇON 03'
  intro: string;
  sections: LessonSection[];
  itemIds: string[];   // corpus items this lesson teaches
  version: number;
};

export type Unit = {
  id: string;          // 'sons.03'
  track: 'sons' | 'a1' | 'a2';
  seq: number;
  title: string;
  sub: string;
  lessonIds: string[];
};

export type Corpus = {
  version: number;
  units: Unit[];
  lessons: Lesson[];
  items: Item[];
};
```

**Also write `schema.test.ts`** — validators (`isValidItem`, `isValidLesson`, ID-format check, referential integrity: every `itemId` in a lesson resolves, every `lessonId` in a unit resolves) with tests under `node --test`. The generator, the Ops Console and the app will all lean on these.

> **Design note — why `content_items` is separate from `content_units`.** The Ops Console's existing `content_units` table holds **documents**: a lesson, a scenario, a dictée set. Those are what a human reviews as one unit of work, and the existing `draft → in_review → published` machine is exactly right for them. The ~8000 atomic vocabulary and sentence rows are **not documents** — nobody reviews 8000 rows one at a time. They live in a new `content_items` table and are reviewed in themed batches. Do not flatten these two things together.

---

## Task 2 — Database ✅ DONE

Migrate Supabase project `ogbothupjcivwruesgsu` (via `ealch-admin`'s Drizzle setup, so the console and the DB stay in step).

1. **New table `content_items`** mirroring the `Item` type, plus workflow and provenance columns:
   - workflow: `status` (reuse the existing `content_status` enum: `draft | in_review | published | archived`), `version`, `published_at`
   - provenance: `generated_by` (`human` | `llm`), `model`, `prompt_version`, `source_refs jsonb` (the pedagogical sources backing it), `reviewed_by`, `reviewed_at`
   - a `theme` column, indexed — items are reviewed and shipped in themed batches
   - `id` is a **text primary key** in the `fr.<level>.<theme>.<seq>` format, not a uuid. It is a stable public key that must survive regeneration.
2. **Extend the `content_kind` enum** with `lesson` and `vocabulary`. It currently has `scenario | drill | dictation | curriculum_unit`.
3. **Add the same provenance columns to `content_units`.** Once content is LLM-generated, "which model produced this and against which prompt" is not optional.
4. **Do NOT add an RLS read policy for the app.** The app never reads these tables directly — it reads a snapshot artifact (Task 3). `content_units` currently has RLS enabled with zero policies; leave it that way. The Ops Console connects as a raw Postgres role and bypasses RLS anyway.
5. **Create a public Supabase Storage bucket `content`** for the published snapshots.

---

## Task 3 — The publish pipeline (DB → snapshot → git) ✅ DONE

**The DB is canonical. Git is a mirror, never a rival writer.** This is the mechanism that makes both review paths (Ops Console *and* PR) operate on one truth.

Write a script (in `ealch-admin/scripts/`, run via `pnpm`):

```
publish-content.ts
  1. SELECT everything WHERE status = 'published'
     (content_units of kind lesson/curriculum_unit + all content_items)
  2. Assemble a Corpus object (Task 1 shape)
  3. Validate it against schema.ts — referential integrity, ID format.
     ANY failure aborts the publish. Never ship a corpus with a dangling itemId.
  4. Bump corpus version
  5. Write snapshots/v{n}.json  → Storage bucket `content`
  6. Write manifest.json        → Storage bucket `content`
       { version, snapshotPath, publishedAt, counts: { units, lessons, items } }
  7. Write the SEED CUT to ealch-v2/src/content/seed.json  (see below)
  8. Print a summary diff vs the previous version
```

**The seed cut** is what ships inside the app binary. It must contain: the complete Sons track, A1 lessons 1-4, A2 lessons 1-4, and every `Item` those lessons reference, plus the core themed vocabulary subset. Everything else reaches users over the air. Make the cut rule **declarative and inspectable** (a config listing the unit IDs and themes to bundle), not hardcoded logic buried in the script.

`seed.json` is **committed to git**. That committed diff is the artifact a human reviews in a PR. Because it is *generated from the published DB rows*, it cannot diverge from what the Ops Console approved.

---

## Task 4 — The app's content service ✅ DONE

Create `ealch-v2/src/services/content.ts`.

```
load():
  1. Start from the bundled seed.json           (always present → works offline, zero-config first run)
  2. Merge the cached snapshot from AsyncStorage (if any)
  3. Fire-and-forget: fetch manifest.json from Storage
       remote version > cached version?
         → download the snapshot, validate it, cache it, merge
       → next launch sees it
  4. Expose typed selectors:
       itemsFor(drill: DrillKind, opts?: { level?, theme?, ids? }): Item[]
       item(id: string): Item | null
       lesson(id: string): Lesson | null
       unit(id: string): Unit | null
       units(track): Unit[]
```

Non-negotiables, and each mirrors a lesson the existing services already learned the hard way:

- **Never blocks first paint.** The seed is bundled; the network is a background upgrade. Follow `refreshConfig()`'s pattern in `config.ts`.
- **Never throws.** A corrupt cache, a 404 manifest, malformed JSON — all degrade to the seed. Follow the `onRehydrateStorage` precedent in `useProgress.ts:66`: a corrupt store must never brick startup.
- **Validates before merging.** A snapshot that fails `schema.ts` validation is discarded and the seed stands. Never render a dangling `itemId`.
- **Fix the hydration race while you are here** (review §3, `2.11`). `_layout.tsx:65` gates render on `useStore.hydrated` only; `useProgress` rehydrates independently and is never awaited. Content will be a *third* async store. Gate first paint on all three.

---

## Task 5 — Migrate the existing content into the corpus ✅ DONE

This is the proof that the rails work. **Port, do not author.** Every existing item keeps its exact French and English text.

Map into `content_items` / `content_units`, assigning stable IDs:

| From | To |
|---|---|
| `content/index.ts` `deck` (8 cards) | `Item[]`, `kind: 'word' \| 'phrase'`, `drills: ['flashcard', 'review']`, theme `cafe` |
| `content/index.ts` `vfItems` (5) | `Item[]`, `drills: ['voiceflash']` (the `icon` field is presentational — keep it as a tag or drop it) |
| `content/index.ts` `sbWords` / `sbTarget` | **one** `Item`, `kind: 'sentence'`, `drills: ['sentence']`. Sentence Builder must derive its word tiles and its pass condition **from the item**, not from a hardcoded string (see review `sentence.tsx:132` — the current pass check does not even require `s'il vous plaît`). |
| `content/index.ts` `rpLines` (4 levels × 3) | `content_units`, `kind: 'scenario'` |
| `content/drills.ts` `dictationSentences` (3) | `Item[]`, `kind: 'sentence'`, `drills: ['dictation']`, carrying the why-tip in `notes` |
| `content/lessons.ts` (3 lessons) | `Lesson[]` in the **new sectioned shape**. `intro` → `teach`; `table` → `table`; `examples` → `examples`; `errors` → `commonErrors`; `audio` → `audio`; `quiz` → `quiz`. The `unique: 'nasal'` flag and its `NASAL_PADS` become a `practice` section with `skill: 'listen'`. |
| `content/curriculum.ts` (43 units) | `Unit[]`. **Units with no lesson keep zero `lessonIds`.** Do not invent lessons. The Den must render what exists. |
| `content/drills.ts` `reviewSession` (4 cards) | **Leave alone for now.** Smart Review's deck becomes SRS-derived in Phase 3. Do not port fabricated "missed 2× in Role Play" metadata into the corpus — it would launder a lie into the source of truth. |

Load these rows into Supabase as `published`, then run Task 3's publish script to produce `seed.json`. **The seed pack must round-trip: the app loading `seed.json` must render byte-identically to the app loading today's TypeScript arrays.**

---

## Task 6 — Refactor the drills to read from the corpus ✅ DONE

Each drill stops owning content and starts *selecting* it.

- `app/flashcards.tsx` — `content.itemsFor('flashcard', { level })` instead of importing `deck`.
- `app/voiceflash.tsx` — `itemsFor('voiceflash')`. Also **fix the substring bug** (`:107`): `vfTyped.includes(key)` scores "I want a café to go" as correct. Compare against the item properly (reuse `normalizeFr` from `utils/score.ts`).
- `app/sentence.tsx` — `itemsFor('sentence')`. **Stop hardcoding the pass condition.** Derive tiles and the target from the `Item`. Also **render the SAY step's result** — `said` / `saidPartial` are captured and silently discarded (`:121`), which hides every mic failure.
- `app/dictation.tsx` — `itemsFor('dictation')`.
- `app/lesson.tsx` — render `Lesson.sections` as an ordered typed section list. This is the one screen whose renderer genuinely changes: a `switch` over `section.type`. Every section type in Task 1 must render, because Phase 2's content will use all of them.
- `app/den.tsx` — read `units()` from the corpus. **Delete the hardcoded `{done: 2, active: 2}` progress and `pct={55}`** (review `1.8`); derive completion from the attempt log (Task 7). A unit with no lessons must say so rather than falling through to a generic player.
- `app/roleplay.tsx` — load its scenario from the corpus. **Leave the fake mic alone for now** — that is Phase 4's job and it needs the attempt log to do it honestly. Do not half-fix it.

Delete `src/content/index.ts`, `curriculum.ts`, `lessons.ts` and the corpus half of `drills.ts` once nothing imports them. Leave `themeColors`, `langs`, `speeds` and `cannedReplies` where they are: those are app configuration, not learning content.

---

## Task 7 — The attempt log ✅ DONE (commit `c357bcb`)

Today `useProgress` records that a user **showed up** (`activity`, `minutes`, `items`). It cannot record **what they got wrong** — which is why nothing in the app can be personalized.

Extend `src/store/useProgress.ts` and `src/store/progress.logic.ts`:

```ts
export type Attempt = {
  at: string;                 // ISO instant
  day: string;                // local 'YYYY-MM-DD', stamped at WRITE time
                              //   — keep the existing timezone reasoning in
                              //     progress.logic.ts, it is correct
  itemId: string | null;      // null only for lesson-level quiz attempts
  lessonId?: string;
  activity: Activity;
  expected?: string;
  heard?: string;             // the real transcript. Never a placeholder.
  score: number;              // 0..1
  verdict: Verdict;           // 'good' | 'close' | 'off' | 'none'
  correct: boolean;
};
```

**Every drill already computes `score` and `verdict` via `scoreUtterance` and then discards them.** You are connecting two things that already exist.

- Keep `SessionEntry` and the existing streak/minutes/week-dot math **exactly as they are.** They are correct and tested. Attempts are an *additional*, finer-grained log, not a replacement. Do not regress the honesty pass.
- Wire `logAttempt` into: flashcards (`known`/`again`), voiceflash (STT result **and** the self-assessment path), sentence (arrange, **say**, write), dictation (per sentence), lesson (per quiz question), speak (per utterance). 
- **`review.tsx` currently logs nothing at all** (review §3, Tier 2). Wire it.
- **A mic failure is not a score.** When `SttResult.ok === false`, log the attempt with `verdict: 'none'` and `score: 0`, and mark it distinctly. `stt.ts` already draws this line carefully — do not blur it. An attempt where the recognizer never ran must never be counted as a wrong answer, or Phase 3's SRS will punish users for a broken microphone.
- Cap and prune like `MAX_SESSIONS` already does.
- **Test the pure logic under `node --test`**, alongside `progress.test.ts`.

This table is what Phase 3's SRS schedules against, what Phase 4's Le Rapport computes from, and what makes "weak spots" real. Get the shape right; everything downstream inherits it.

---

## Task 8 — Three Tier 2 bug fixes (independent, do them because they block testing) ⏳ NOT DONE (onboarding 2.2/2.3 + deletion 2.4 still open)

You will run onboarding dozens of times this phase. Two of these bugs make that impossible, and the third is a compliance failure.

1. **`app/onboarding.tsx:158`** — `submitAccount` returns on the step-guard *before* resetting `acctPending`. Navigate away mid-signup and back: Continue is disabled forever. **Reset the pending flag before the guard, or in a `finally`.**
2. **`app/onboarding.tsx:205`** — identical shape in `doCalib`: leave step 9 mid-recording and the UI is stuck on "recording" with a mic button that can never restart.
3. **`src/services/auth.ts:31-33`** — with Supabase email confirmation on, `signUp` returns a **null session** but `attempt()` reports `ok: true`. The user is marked signed in and can then **never delete their account** (`deleteAccount` → `DELETE_NO_SESSION`; `delete-account.tsx:61-72` refuses to fall through to local erase for non-guests). This is an **Apple 5.1.1(v) failure in the screen written to satisfy it.** Detect the null-session signup and handle it explicitly.

### Uncovered by Task 0

4. ✅ **`delete-account` deployed** (v1, ACTIVE, `verify_jwt: true`) and verified against the live project. The infrastructure half of the Apple 5.1.1(v) failure is closed. **Item 3 above is the remaining half and is still open.**

5. **Remove the guest path.** *(Decided with Paul.)* This is the highest-leverage change in Task 8 and it is not cosmetic — one gap causes three problems:
   - `completeOnboarding` sets `signedIn: true` for a user who exists nowhere on the server (`useStore.ts:225`).
   - Therefore `coach` **cannot** demand a real user JWT, so it runs as a fully open, unauthenticated LLM proxy with a service-role client and no rate limit (review `1.14`). **Note: `verify_jwt: true` does NOT fix this — the anon key is itself a valid JWT and ships in the app bundle (review `1.15`).** Only a real per-user identity does.
   - Therefore nothing can sync, and Phase 6 has no precondition.

   Removing guests is simultaneously a **security fix**, a **sync prerequisite**, and a **simplification**. Do it here, in Task 8, alongside item 3 — they share a root cause (the local `signedIn` flag is never reconciled with the actual Supabase session). Once done, add a `getUser()` check to `coach`, exactly as `delete-account` already does.

6. **Test whether `coach` actually works.** It is `ACTIVE` (v7), so `llm.ts`'s silent fallback to 3 rotating canned strings may be masking a *fixable integration bug*, not an absent backend. If it does work, chat is closer to real than the review assumed — and the fallback should say so rather than pretending to be the coach while the header reads "online · UNLIMITED".

7. **`tts` stays deployed** *(Paul's decision — it is wanted for Phase 7)*, but it currently has **zero callers**: `tts.ts:21-24` is a dead `if (provider !== 'device')` branch containing only a comment. **One thing to check:** Supabase → Edge Functions → Secrets. If `ELEVENLABS_API_KEY` or `FISH_AUDIO_API_KEY` is set, it is a live billable ElevenLabs/Fish proxy with no auth and no callers. If neither is set, it 502s harmlessly.

8. **`DISABLE_TOTP=true` in `ealch-admin/.env`.** Fine locally. Must not reach production.

---

## Acceptance criteria

Phase 1 is done when **all** of these hold:

- [ ] One repository containing `ealch-v2` (A's lineage) and `ealch-admin`. `ealch-admin` starts on `:4000`. The `coach` / `tts` deployment status is verified and the stale comments in `llm.ts` / `stt.ts:325` tell the truth.
- [ ] `npx tsc --noEmit` passes. `npm test` passes, with **new tests** for `schema.ts` validators and the attempt log.
- [ ] `src/content/index.ts`, `curriculum.ts` and `lessons.ts` no longer exist. No screen imports a hardcoded content array.
- [ ] Every drill selects from the corpus by stable ID. Every item in the app has an ID that survives a regeneration.
- [ ] `seed.json` is generated **by the publish script from published DB rows** and committed. It is not hand-edited. Regenerating it from an unchanged DB produces no diff.
- [ ] The app runs with the network **off** and with `EXPO_PUBLIC_SUPABASE_URL` **unset**, rendering the full seed. This property exists today and must survive.
- [ ] Publishing a change in the Ops Console → running the publish script → relaunching the app shows the change. **Demonstrate this end to end with a one-word edit.** This is the whole phase in one test.
- [ ] Every drill attempt writes an `Attempt` with a real `itemId`, a real `score`, and the **real transcript** in `heard`. A denied or unavailable mic logs `verdict: 'none'` and is distinguishable from a wrong answer.
- [ ] Streak, minutes, and week dots are **unchanged** — the honesty pass is not regressed.
- [ ] The three Task 8 bugs are fixed.
- [ ] **Visually, the app is identical to today**, apart from those bug fixes.

## Commit shape

One reviewable commit per task. Task 0 lands and is reviewed **before** any Phase 1 code.

## When you are done

Report: the true deployment status of the `coach` / `tts` / `stt` Edge Functions; the final corpus counts (units / lessons / items ported); and anything in the review's §10 Open Questions that building this forced you to decide, so it can be confirmed rather than assumed.
