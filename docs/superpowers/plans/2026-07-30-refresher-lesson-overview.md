# Refresher Lesson Overview + Missions Flow Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Every Den (Refresher Course) lesson opens on an English overview page, whose "Start lesson" leads to a missions list page with free navigation into the untouched lesson pager.

**Architecture:** Two new Expo Router screens (`/lessonoverview`, `/missions`) in front of the existing `/lesson` pager. All counts/tags/stats derive at render time from the lesson's real sections via a new pure module `src/content/missions.ts`; only display copy (a new optional `Lesson.overview` block + per-section `frSub`) is authored, via an ealch-admin batch that writes seed.json directly. Per-mission completion + lesson-local XP live in the zustand progress store, marked from `lesson.tsx` using the pager's existing `onIndexChange` callback.

**Tech Stack:** Expo SDK 57 / expo-router / React Native, zustand + AsyncStorage persist, `node --test` (TS type-stripping) for tests, `pnpm tsx` for the admin batch.

**Spec:** `docs/superpowers/specs/2026-07-30-refresher-lesson-overview-design.md` (approved 2026-07-30). Read it first.

**House rules that bind every task here:**
- No em dash anywhere in NEW user-facing copy (existing older intros are grandfathered; do not copy the habit). Use commas, colons, or periods.
- The word "honest"/"honesty" is banned in authored content (a whole-seed test enforces it).
- `ealch-v2/AGENTS.md`: consult https://docs.expo.dev/versions/v57.0.0/ before writing router/screen code.
- All commands run from `ealch-v2/` unless the task says `ealch-admin/`.
- Never run `pnpm content:publish`. The authoring batch touches seed.json only.
- Commit after each task with the exact message given (all commits stay local; no push).

**Existing facts the plan builds on (verified 2026-07-30):**
- Den → lesson push is `app/den.tsx` line ~169: `router.push({ pathname: '/lesson', params: { key: u.lessonIds[0] } })`.
- `app/lesson.tsx` resolves `?at=` as an ANCHOR STRING (`<lessonId>#s<fullSectionIx>.0`) via `content.resolveAnchorStr`, producing `deepLinkIx` (an index over the lesson's NON-quiz sections) passed to `LessonPager` as `initialIndex`. The pager's quiz page is not anchor-addressable.
- `LessonPager` fires `onIndexChange(sectionIx | null)` on every page change (`null` on cover/image/quiz pages); `lesson.tsx`'s `onLessonIndexChange` already maps that to a FULL-sections index for resume anchors.
- `useProgress` is a zustand `persist` store, version 4; additive TOP-LEVEL keys need NO version bump (shallow merge heals them; see the comment block at its `version:` option). Pure logic lives in `src/store/progress.logic.ts` and is tested under `node --test`.
- `src/i18n/strings.ts`: `type Strings` fields end near line 247, then `export const T: Record<Lang, Strings> = { fr: {…} /* line ~250 */, en: {…} /* line ~586 */ }`. Every new key is added in three places: the type, `fr`, `en`.
- `content` service (`src/services/content.ts`): `lesson(id)`, `unit(id)`, `units(track)`, `lessonsOf(unitId)`, `resolveAnchorStr(anchor)`.
- `validateLesson` is in `src/content/schema.ts` (~line 2238), style: `const push = (m: string) => out.push({ path, message: m })` with `isStr`/`isNum`-style helpers.
- `PRACTICE_SKILLS = ['read', 'write', 'speak', 'listen']`.
- seed.json is 2-space pretty-printed JSON; tests read it with `readFileSync` + `JSON.parse`.
- Test commands: `pnpm test` (all), `node --test src/content/missions.test.ts` (one file), `pnpm typecheck`.
- The 6 Den lessons and their FULL section lists (index: type — title) are enumerated in Task 12's data; sons.01.l1 has 26 sections (quiz last), sons.02.l1 and sons.03.l1 have 20 (quiz at index 18/19 resp., roundup adjacent), a1.01.l1 6, a1.04.l1 6, a2.01.l1 7.

---

## File Structure

- **Create** `ealch-v2/src/content/missions.ts` — pure derivation: role, label, stats, CEFR display. No React imports.
- **Create** `ealch-v2/src/content/missions.test.ts` — node --test coverage for the above, incl. against the real seed.
- **Modify** `ealch-v2/src/content/schema.ts` — `Lesson.overview` type, `SectionExtras.frSub`, `validateLesson` checks.
- **Create** `ealch-v2/src/content/overview-schema.test.ts` — validator accept/reject cases.
- **Modify** `ealch-v2/src/store/progress.logic.ts` — `LessonMissionRec`, `MISSION_XP`, `markMission` (pure).
- **Create** `ealch-v2/src/store/progress-missions.test.ts` — tests for `markMission`.
- **Modify** `ealch-v2/src/store/useProgress.ts` — `lessonMissions` slice + `markMissionDone` action (+ partialize, erase).
- **Modify** `ealch-v2/src/i18n/strings.ts` — 16 new keys × (type, fr, en).
- **Modify** `ealch-v2/app/_layout.tsx` — Stack.Screen entries for the two new routes.
- **Modify** `ealch-v2/src/components/LessonPager.tsx` — optional `initialQuiz` prop (quiz-page deep entry).
- **Modify** `ealch-v2/app/lesson.tsx` — `at=quiz` handling, mission-done marking.
- **Create** `ealch-v2/app/lessonoverview.tsx` — the overview screen.
- **Create** `ealch-v2/app/missions.tsx` — the missions list screen.
- **Modify** `ealch-v2/app/den.tsx` — unit card pushes `/lessonoverview`.
- **Create** `ealch-admin/scripts/author-lesson-overviews.ts` — seed-direct authoring batch (data inline).

---

### Task 1: `missions.ts` derivation module

**Files:**
- Create: `ealch-v2/src/content/missions.ts`
- Test: `ealch-v2/src/content/missions.test.ts`

- [ ] **Step 1: Write the failing test**

Create `ealch-v2/src/content/missions.test.ts`:

```ts
// The mission-derivation contract: roles, labels, stats and the CEFR display
// band are pure functions of a lesson's real sections. Pinned here against
// both a hand fixture and the live seed so a drive-by edit to the mapping
// goes red before it ships a wrong tag to the missions page.
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { deepStrictEqual, ok, strictEqual } from 'node:assert';
import { test } from 'node:test';
import { cefrLabel, missionLabel, missionRole, missionStats } from './missions.ts';
import type { Lesson, LessonSection } from './schema.ts';

test('roles: gates, badge, milestones, required', () => {
  strictEqual(missionRole('quiz'), 'gate');
  strictEqual(missionRole('progressCheck'), 'gate');
  strictEqual(missionRole('dictation'), 'gate');
  strictEqual(missionRole('roundup'), 'badge');
  strictEqual(missionRole('story'), 'milestone');
  strictEqual(missionRole('scenario'), 'milestone');
  strictEqual(missionRole('listening'), 'milestone');
  strictEqual(missionRole('reading'), 'milestone');
  strictEqual(missionRole('teach'), 'required');
  strictEqual(missionRole('cardDeck'), 'required');
  // Future/unknown types default to required, never crash.
  strictEqual(missionRole('somethingNew' as LessonSection['type']), 'required');
});

test('labels: fixed map, practice splits by skill, unknown falls back', () => {
  strictEqual(missionLabel({ type: 'story', title: 'x' } as LessonSection), 'HISTOIRE');
  strictEqual(missionLabel({ type: 'goals', title: 'x' } as LessonSection), 'OBJECTIFS');
  strictEqual(missionLabel({ type: 'trapDrill', title: 'x' } as LessonSection), 'PIÈGES');
  strictEqual(missionLabel({ type: 'pronunciationLab', title: 'x' } as LessonSection), 'LABO');
  strictEqual(missionLabel({ type: 'roundup', title: 'x' } as LessonSection), 'BADGE');
  strictEqual(missionLabel({ type: 'practice', title: 'x', skill: 'listen', itemIds: [] } as LessonSection), 'OREILLE');
  strictEqual(missionLabel({ type: 'practice', title: 'x', skill: 'speak', itemIds: [] } as LessonSection), 'MICRO');
  strictEqual(missionLabel({ type: 'practice', title: 'x', skill: 'read', itemIds: [] } as LessonSection), 'LECTURE');
  strictEqual(missionLabel({ type: 'practice', title: 'x', skill: 'write', itemIds: [] } as LessonSection), 'ÉCRIT');
  strictEqual(missionLabel({ type: 'somethingNew', title: 'x' } as unknown as LessonSection), 'MISSION');
});

test('stats: derived over a mixed fixture', () => {
  const sections = [
    { type: 'story', title: 'a' },
    { type: 'teach', title: 'b' },
    { type: 'dictation', title: 'c' },
    { type: 'quiz', title: 'd', questions: [] },
    { type: 'roundup', title: 'e', body: '', points: [] },
  ] as unknown as LessonSection[];
  deepStrictEqual(missionStats(sections), { missions: 5, required: 1, gates: 2, milestones: 1, badge: 1 });
});

test('cefr display band', () => {
  strictEqual(cefrLabel('sons'), 'A0');
  strictEqual(cefrLabel('a1'), 'A1');
  strictEqual(cefrLabel('a2'), 'A2');
  strictEqual(cefrLabel('b1'), 'B1');
});

test('the live seed derives sane stats for sons.02.l1', () => {
  const here = dirname(fileURLToPath(import.meta.url));
  const seed = JSON.parse(readFileSync(resolve(here, 'seed.json'), 'utf8')) as { lessons: Lesson[] };
  const L = seed.lessons.find((l) => l.id === 'sons.02.l1');
  ok(L, 'sons.02.l1 present');
  const s = missionStats(L!.sections);
  strictEqual(s.missions, L!.sections.length);
  strictEqual(s.missions, s.required + s.gates + s.milestones + s.badge, 'roles partition the sections');
  strictEqual(s.badge, 1, 'roundup present');
  ok(s.gates >= 2, 'quiz + progressCheck at minimum');
});
```

- [ ] **Step 2: Run the test to verify it fails**

Run: `node --test src/content/missions.test.ts`
Expected: FAIL (Cannot find module './missions.ts').

- [ ] **Step 3: Write the implementation**

Create `ealch-v2/src/content/missions.ts`:

```ts
import type { Level, LessonSection } from './schema';

// The missions taxonomy (spec §Derivation): every count, tag and stat on the
// overview and missions pages is derived from the lesson's REAL sections at
// render time. Authoring gives copy; it never gives structure. Unknown future
// section types deliberately fall into 'required' + 'MISSION' so a new type
// ships without touching this file first.

export type MissionRole = 'required' | 'gate' | 'milestone' | 'badge';

const GATES = new Set<LessonSection['type']>(['quiz', 'progressCheck', 'dictation']);
const MILESTONES = new Set<LessonSection['type']>(['story', 'scenario', 'listening', 'reading']);

export function missionRole(type: LessonSection['type']): MissionRole {
  if (type === 'roundup') return 'badge';
  if (GATES.has(type)) return 'gate';
  if (MILESTONES.has(type)) return 'milestone';
  return 'required';
}

// The mechanic tag on a mission row. French, uppercase, one word: the same
// vocabulary the mockups use (HISTOIRE, CARTES, LABO…). Collisions between
// types are fine; the tag names the mechanic family, not the section.
const LABELS: Partial<Record<LessonSection['type'], string>> = {
  story: 'HISTOIRE',
  goals: 'OBJECTIFS',
  cardDeck: 'CARTES',
  soundGrid: 'GRILLE',
  letterGrid: 'GRILLE',
  groupDrill: 'GROUPES',
  trapDrill: 'PIÈGES',
  pronunciationLab: 'LABO',
  dictation: 'ÉCRIT',
  scenario: 'BULLES',
  listening: 'OREILLE',
  reading: 'LECTURE',
  reviewDeck: 'RÉVISION',
  progressCheck: 'BILAN',
  quiz: 'QUIZ',
  roundup: 'BADGE',
  teach: 'IDÉE',
  steps: 'ÉTAPES',
  examples: 'EXEMPLES',
  useCases: 'USAGES',
  hacks: 'ASTUCES',
  cheatSheet: 'MÉMO',
  commonErrors: 'ERREURS',
  focus: 'CIBLE',
  table: 'TABLEAU',
  tapTable: 'TABLEAU',
  audio: 'AUDIO',
  vocabThemes: 'VOCABULAIRE',
  flashcards: 'FLASH',
};

const PRACTICE_LABELS: Record<string, string> = {
  speak: 'MICRO',
  listen: 'OREILLE',
  read: 'LECTURE',
  write: 'ÉCRIT',
};

export function missionLabel(s: LessonSection): string {
  if (s.type === 'practice') return PRACTICE_LABELS[s.skill] ?? 'MICRO';
  return LABELS[s.type] ?? 'MISSION';
}

export type MissionStats = {
  missions: number;
  required: number;
  gates: number;
  milestones: number;
  badge: number;
};

export function missionStats(sections: readonly LessonSection[]): MissionStats {
  const out: MissionStats = { missions: sections.length, required: 0, gates: 0, milestones: 0, badge: 0 };
  for (const s of sections) {
    const role = missionRole(s.type);
    if (role === 'gate') out.gates += 1;
    else if (role === 'milestone') out.milestones += 1;
    else if (role === 'badge') out.badge += 1;
    else out.required += 1;
  }
  return out;
}

/** The CEFR chip on the overview/missions pages: our own 'sons' pronunciation
 *  track displays as A0 (pre-A1), every real band as itself. */
export function cefrLabel(level: Level): string {
  return level === 'sons' ? 'A0' : level.toUpperCase();
}
```

- [ ] **Step 4: Run the test to verify it passes**

Run: `node --test src/content/missions.test.ts`
Expected: PASS (5 tests).

- [ ] **Step 5: Commit**

```bash
git add src/content/missions.ts src/content/missions.test.ts
git commit -m "feat(app): mission taxonomy derivation module for the den overview flow"
```

---

### Task 2: schema — `overview`, `frSub`, validator checks

**Files:**
- Modify: `ealch-v2/src/content/schema.ts` (Lesson type ~line 746-795, SectionExtras ~line 536, validateLesson ~line 2238)
- Test: `ealch-v2/src/content/overview-schema.test.ts`

- [ ] **Step 1: Write the failing test**

Create `ealch-v2/src/content/overview-schema.test.ts`:

```ts
// The Lesson.overview contract: optional as a whole, strict when present.
// The den overview page hides what is absent and never invents numbers, so
// the validator is what keeps an authored block renderable.
import { ok, strictEqual } from 'node:assert';
import { test } from 'node:test';
import { validateLesson, type Lesson } from './schema.ts';

const base: Lesson = {
  id: 'sons.01.l1',
  unitId: 'sons.01',
  seq: 1,
  title: 'T',
  level: 'sons',
  tag: 'SONS · LEÇON 01',
  intro: 'An intro.',
  sections: [
    { type: 'teach', title: 'A', body: 'b' },
    { type: 'quiz', title: 'Q', questions: [{ q: 'q', opts: ['a', 'b'], correct: 0 }] },
  ],
  itemIds: [],
  version: 1,
};

test('a lesson without overview stays valid', () => {
  strictEqual(validateLesson(base).length, 0);
});

test('a complete overview passes', () => {
  const l = {
    ...base,
    overview: { titleEn: 'The Alphabet', subFr: "L'alphabet", introFr: 'Le vrai son de chaque lettre.', minutes: 45, difficulty: 1, glyph: 'Aa' },
  };
  strictEqual(validateLesson(l).length, 0);
});

test('overview field rules reject bad blocks', () => {
  const bad = (overview: unknown) => validateLesson({ ...base, overview } as unknown as Lesson).length > 0;
  ok(bad({ titleEn: '', introFr: 'x', minutes: 45, difficulty: 1 }), 'empty titleEn');
  ok(bad({ titleEn: 'x', introFr: '', minutes: 45, difficulty: 1 }), 'empty introFr');
  ok(bad({ titleEn: 'x', introFr: 'y', minutes: 0, difficulty: 1 }), 'minutes below 1');
  ok(bad({ titleEn: 'x', introFr: 'y', minutes: 200, difficulty: 1 }), 'minutes above 180');
  ok(bad({ titleEn: 'x', introFr: 'y', minutes: 45, difficulty: 0 }), 'difficulty below 1');
  ok(bad({ titleEn: 'x', introFr: 'y', minutes: 45, difficulty: 6 }), 'difficulty above 5');
  ok(bad({ titleEn: 'x', introFr: 'y', minutes: 45, difficulty: 1.5 }), 'difficulty not an integer');
});

test('frSub is accepted on sections', () => {
  const l = {
    ...base,
    sections: [{ type: 'teach', title: 'A', body: 'b', frSub: 'La grande idée' }, ...base.sections.slice(1)],
  } as Lesson;
  strictEqual(validateLesson(l).length, 0);
});
```

- [ ] **Step 2: Run the test to verify it fails**

Run: `node --test src/content/overview-schema.test.ts`
Expected: FAIL. (The complete-overview case may pass by structural typing, but the "field rules" test fails because no check exists yet; the `frSub` case may fail typecheck at strip time or pass loosely. A failing suite overall is what matters.)

- [ ] **Step 3: Add the types**

In `ealch-v2/src/content/schema.ts`:

(a) `SectionExtras` (line ~536) — change:

```ts
export type SectionExtras = { say?: string; imageRef?: string; audioRef?: string | null };
```

to:

```ts
export type SectionExtras = {
  say?: string;
  imageRef?: string;
  audioRef?: string | null;
  /** French sub-line under the mission row's English title on the missions
   *  page (den overview flow). Display copy only; hidden when absent. */
  frSub?: string;
};
```

(b) `Lesson` type — insert after the `provenance?: Provenance;` line (end of the type, ~line 794), before the closing `};`:

```ts
  /** The den overview page's authored copy (spec 2026-07-30). Optional as a
   *  whole: structure (mission counts, tags, stats) is always DERIVED from
   *  `sections` — see src/content/missions.ts — and the page hides whatever
   *  copy is absent rather than inventing it. */
  overview?: {
    /** English display title, the overview headline. */
    titleEn: string;
    /** French subtitle; doubles as the missions page display title. */
    subFr?: string;
    /** French translation of `intro`. Also what "Listen to the intro" speaks. */
    introFr: string;
    /** Estimated whole minutes. */
    minutes: number;
    difficulty: 1 | 2 | 3 | 4 | 5;
    /** The overview tile, e.g. "Aa". */
    glyph?: string;
  };
```

- [ ] **Step 4: Add the validator checks**

In `validateLesson` (~line 2238): find the end of the function's field checks (just before its `return out;`) and insert, using the function's existing `push`/`isStr` helpers:

```ts
  // The den overview block: optional as a whole, strict when present — the
  // overview page renders it verbatim and hides only what is absent.
  if (l.overview !== undefined) {
    const o = l.overview as Partial<NonNullable<Lesson['overview']>>;
    if (typeof o !== 'object' || o === null) push('overview must be an object');
    else {
      if (!isStr(o.titleEn)) push('overview.titleEn is required');
      if (!isStr(o.introFr)) push('overview.introFr is required');
      if (o.subFr !== undefined && !isStr(o.subFr)) push('overview.subFr must be a non-empty string when present');
      if (o.glyph !== undefined && !isStr(o.glyph)) push('overview.glyph must be a non-empty string when present');
      if (typeof o.minutes !== 'number' || !Number.isInteger(o.minutes) || o.minutes < 1 || o.minutes > 180) {
        push('overview.minutes must be an integer between 1 and 180');
      }
      if (typeof o.difficulty !== 'number' || !Number.isInteger(o.difficulty) || o.difficulty < 1 || o.difficulty > 5) {
        push('overview.difficulty must be an integer between 1 and 5');
      }
    }
  }
```

Note: `isStr` in this file means "non-empty string" (it is used as `if (!isStr(l.id)) push('id is required')`). Verify by reading its definition near the top of the validators; if it permits empty strings, use the file's actual non-empty helper instead (search for how `intro` is validated and mirror it exactly).

Two deliberate scope notes:
- The spec's "advisory: a sons/a1/a2 lesson without overview" is NOT added to `validateCorpus` (its issues are all blocking, and publish-side advisory logging lives in the blocked publish pipeline). Task 12 authors all 6 current den lessons, which closes today's gap; future lessons pick it up through the authoring standard.
- If `validateLesson` enforces invariants beyond the fields shown (the no-overview `base` fixture must yield 0 issues before any overview is added), extend `base` minimally until it passes clean. Never weaken the validator to make the fixture pass.

- [ ] **Step 5: Run the tests**

Run: `node --test src/content/overview-schema.test.ts`
Expected: PASS (4 tests).

Run: `pnpm test`
Expected: PASS — especially `seed.backcompat.test.ts` (validateCorpus over the real seed still green; the new fields are optional).

Run: `pnpm typecheck`
Expected: clean.

- [ ] **Step 6: Commit**

```bash
git add src/content/schema.ts src/content/overview-schema.test.ts
git commit -m "feat(app): Lesson.overview + Section.frSub schema and validation"
```

---

### Task 3: pure mission-progress logic

**Files:**
- Modify: `ealch-v2/src/store/progress.logic.ts` (append near the other exported helpers)
- Test: `ealch-v2/src/store/progress-missions.test.ts`

- [ ] **Step 1: Write the failing test**

Create `ealch-v2/src/store/progress-missions.test.ts`:

```ts
// markMission is the single write path for per-mission completion + XP:
// dedupe on re-do, award exactly once, reset on a lesson version change so a
// re-authored (reordered) lesson can never show stale checks.
import { deepStrictEqual, strictEqual } from 'node:assert';
import { test } from 'node:test';
import { markMission, MISSION_XP, type LessonMissionRec } from './progress.logic.ts';

test('first completion creates the record and awards XP once', () => {
  const rec = markMission(undefined, 3, 4);
  deepStrictEqual(rec, { v: 3, done: [4], xp: MISSION_XP });
});

test('a second, different mission accumulates', () => {
  const rec = markMission({ v: 3, done: [4], xp: MISSION_XP }, 3, 7);
  deepStrictEqual(rec, { v: 3, done: [4, 7], xp: MISSION_XP * 2 });
});

test('re-doing a mission never double-awards', () => {
  const before: LessonMissionRec = { v: 3, done: [4, 7], xp: MISSION_XP * 2 };
  const rec = markMission(before, 3, 4);
  deepStrictEqual(rec, before);
});

test('a version change resets the record before marking', () => {
  const rec = markMission({ v: 3, done: [4, 7], xp: MISSION_XP * 2 }, 4, 1);
  deepStrictEqual(rec, { v: 4, done: [1], xp: MISSION_XP });
});

test('inputs are never mutated', () => {
  const before: LessonMissionRec = { v: 3, done: [4], xp: MISSION_XP };
  markMission(before, 3, 9);
  strictEqual(before.done.length, 1);
});
```

- [ ] **Step 2: Run the test to verify it fails**

Run: `node --test src/store/progress-missions.test.ts`
Expected: FAIL (markMission is not exported).

- [ ] **Step 3: Implement in `progress.logic.ts`**

Append to `ealch-v2/src/store/progress.logic.ts`:

```ts
/* ─── Den mission progress (overview flow, spec 2026-07-30) ─────────────── */

/** Per-lesson mission record: which FULL-section indexes are done, and the
 *  lesson-local XP earned. `v` mirrors Lesson.version — a re-authored lesson
 *  (sections added/reordered) starts a fresh record rather than mis-checking
 *  rows by stale index. */
export type LessonMissionRec = { v: number; done: number[]; xp: number };

/** Flat award per first-time mission completion. Lesson-local; there is no
 *  global XP economy yet (spec: out of scope). */
export const MISSION_XP = 5;

/** The single write path for mission completion. Pure and idempotent: marking
 *  a done mission again returns the input unchanged (same reference), so the
 *  store can cheaply skip a set(). */
export function markMission(rec: LessonMissionRec | undefined, version: number, sectionIx: number): LessonMissionRec {
  const base: LessonMissionRec = rec && rec.v === version ? rec : { v: version, done: [], xp: 0 };
  if (base.done.includes(sectionIx)) return base;
  return { v: version, done: [...base.done, sectionIx], xp: base.xp + MISSION_XP };
}
```

- [ ] **Step 4: Run the tests**

Run: `node --test src/store/progress-missions.test.ts`
Expected: PASS (5 tests).

- [ ] **Step 5: Commit**

```bash
git add src/store/progress.logic.ts src/store/progress-missions.test.ts
git commit -m "feat(app): pure mission-completion + XP record logic"
```

---

### Task 4: `useProgress` slice

**Files:**
- Modify: `ealch-v2/src/store/useProgress.ts`

- [ ] **Step 1: Extend the state type**

In the `ProgressState` type, after the `resumeByMode: ResumeByMode;` field, add:

```ts
  /** Per-lesson den mission progress (overview flow): FULL-section indexes
   *  completed + lesson-local XP. Keyed by lesson id. Additive top-level key,
   *  so no persist version bump — shallow merge heals old blobs (see the
   *  version comment below). */
  lessonMissions: Record<string, LessonMissionRec>;
```

and after the `clearResume` declaration add:

```ts
  /** Mark one mission done (idempotent; awards XP once). `version` is the
   *  lesson's current Lesson.version — a mismatch resets that lesson's record
   *  first. Called from lesson.tsx as the learner moves past sections. */
  markMissionDone: (lessonId: string, version: number, sectionIx: number) => void;
```

Extend the `progress.logic` import list with `markMission` and `type LessonMissionRec`.

- [ ] **Step 2: Implement the slice**

In the store creator: add `lessonMissions: {},` beside the other initial fields; after the `clearResume` implementation add:

```ts
      markMissionDone: (lessonId, version, sectionIx) => {
        const cur = get().lessonMissions[lessonId];
        const next = markMission(cur, version, sectionIx);
        if (next === cur) return; // already done — markMission is idempotent
        set({ lessonMissions: { ...get().lessonMissions, [lessonId]: next } });
      },
```

In `eraseProgress`, add `lessonMissions: {}` to the wipe `set({...})`. In `partialize`, add `lessonMissions: s.lessonMissions,`. Do NOT bump `version:` (additive top-level key; the file's own comment states shallow merge covers this).

- [ ] **Step 3: Verify**

Run: `pnpm typecheck`
Expected: clean.

Run: `pnpm test`
Expected: PASS (progress-schema tests untouched; no migration change).

- [ ] **Step 4: Commit**

```bash
git add src/store/useProgress.ts
git commit -m "feat(app): lessonMissions slice with idempotent markMissionDone"
```

---

### Task 5: i18n strings

**Files:**
- Modify: `ealch-v2/src/i18n/strings.ts` (type ends ~line 247; `fr:` starts ~line 250; `en:` starts ~line 586)

- [ ] **Step 1: Add the keys to `type Strings`**

Near the den keys in the type (search `denTag:`), add:

```ts
  // Den lesson overview + missions pages (overview flow, 2026-07-30)
  ovStart: string; ovSeeAll: string; ovSeeList: string; ovMissionsWord: string;
  ovStatRequired: string; ovStatGates: string; ovStatMilestones: string; ovStatBadge: string;
  ovPrereqNone: string; ovPrereqSome: string; ovMin: string; ovDiff: string;
  moSub: string; moSubNoBadge: string; moListen: string; moXp: string;
```

- [ ] **Step 2: Add the `en` values**

Inside the `en: {` object (near its den strings, search `denTag: 'REFRESHER COURSE'`), add:

```ts
    ovStart: 'Start lesson', ovSeeAll: 'See all {n} missions', ovSeeList: 'see the list', ovMissionsWord: 'missions',
    ovStatRequired: 'required', ovStatGates: 'gates', ovStatMilestones: 'milestones', ovStatBadge: 'badge',
    ovPrereqNone: 'Prerequisites: none. This lesson starts from zero.', ovPrereqSome: 'Prerequisite: {t}',
    ovMin: '{n} min', ovDiff: 'Difficulty',
    moSub: '{n} missions, one badge at the end. Each mission has its own mechanic.',
    moSubNoBadge: '{n} missions. Each mission has its own mechanic.',
    moListen: 'Listen to the intro', moXp: '{n} XP',
```

- [ ] **Step 3: Add the `fr` values**

Inside the `fr: {` object at the mirror position, add:

```ts
    ovStart: 'Commencer la leçon', ovSeeAll: 'Voir les {n} missions', ovSeeList: 'voir la liste', ovMissionsWord: 'missions',
    ovStatRequired: 'requises', ovStatGates: 'portes', ovStatMilestones: 'jalons', ovStatBadge: 'badge',
    ovPrereqNone: 'Prérequis : aucun. Cette leçon part de zéro.', ovPrereqSome: 'Prérequis : {t}',
    ovMin: '{n} min', ovDiff: 'Difficulté',
    moSub: '{n} missions, un badge à la fin. Chaque mission a sa propre mécanique.',
    moSubNoBadge: '{n} missions. Chaque mission a sa propre mécanique.',
    moListen: "Écouter l'intro", moXp: '{n} XP',
```

(No em dash in any value. The `Prérequis :` spaced colon is correct French typography.)

- [ ] **Step 4: Verify**

Run: `pnpm test:i18n && pnpm typecheck`
Expected: PASS / clean. (The i18n test enforces locale parity; adding a key to only one locale fails it.)

- [ ] **Step 5: Commit**

```bash
git add src/i18n/strings.ts
git commit -m "feat(app): strings for the den overview and missions pages"
```

---

### Task 6: route registration

**Files:**
- Modify: `ealch-v2/app/_layout.tsx` (~line 122)

- [ ] **Step 1: Add the screens**

Directly under `<Stack.Screen name="lesson" options={{ animation: 'slide_from_right' }} />` add:

```tsx
              <Stack.Screen name="lessonoverview" options={{ animation: 'slide_from_right' }} />
              <Stack.Screen name="missions" options={{ animation: 'slide_from_right' }} />
```

- [ ] **Step 2: Verify + commit**

Run: `pnpm typecheck` — clean. Then:

```bash
git add app/_layout.tsx
git commit -m "feat(app): register lessonoverview and missions routes"
```

---

### Task 7: pager quiz entry (`initialQuiz`)

**Files:**
- Modify: `ealch-v2/src/components/LessonPager.tsx` (props ~line 59, onLayout ~line 254-268)

- [ ] **Step 1: Add the prop**

In `LessonPagerProps`, after `initialIndex?: number | null;` add:

```ts
  /** Deep-link straight to the quiz page (the missions page's quiz row —
   *  the quiz is not section-anchor-addressable, see app/lesson.tsx). No-op
   *  for a quiz-less lesson. */
  initialQuiz?: boolean;
```

Add `initialQuiz,` to the destructured props in the `LessonPager(` parameter list (next to `initialIndex,`).

- [ ] **Step 2: Use it in the one-time jump**

In `onLayout`, the current init block is:

```ts
    if (initialIndex != null && initialIndex >= 0) {
      // Land on the section's CONTENT page, never its (optional) image page.
      const found = pages.findIndex((p) => p.kind === 'section' && p.sectionIx === initialIndex);
      const target = found >= 0 ? found : Math.min(lastPage, initialIndex + 1);
      requestAnimationFrame(() => {
        ref.current?.scrollTo({ x: target * measured, animated: false });
        setPage(target);
      });
    }
```

Replace with:

```ts
    if (initialQuiz && hasQuiz) {
      requestAnimationFrame(() => {
        ref.current?.scrollTo({ x: quizPage * measured, animated: false });
        setPage(quizPage);
      });
    } else if (initialIndex != null && initialIndex >= 0) {
      // Land on the section's CONTENT page, never its (optional) image page.
      const found = pages.findIndex((p) => p.kind === 'section' && p.sectionIx === initialIndex);
      const target = found >= 0 ? found : Math.min(lastPage, initialIndex + 1);
      requestAnimationFrame(() => {
        ref.current?.scrollTo({ x: target * measured, animated: false });
        setPage(target);
      });
    }
```

- [ ] **Step 3: Verify + commit**

Run: `pnpm typecheck` — clean. Then:

```bash
git add src/components/LessonPager.tsx
git commit -m "feat(app): LessonPager initialQuiz deep entry"
```

---

### Task 8: `lesson.tsx` wiring — `at=quiz` + mission marking

**Files:**
- Modify: `ealch-v2/app/lesson.tsx`

- [ ] **Step 1: Resolve `at=quiz`**

In the `deepLinkIx` memo (~line 118), the raw param read is `const atRaw = Array.isArray(params.at) ? params.at[0] : params.at;`. Above the memo add:

```ts
  const atParam = Array.isArray(params.at) ? params.at[0] : params.at;
  // The missions page's quiz row: the quiz page has no section anchor, so it
  // rides a literal `at=quiz` instead (see LessonPager.initialQuiz).
  const wantsQuiz = atParam === 'quiz';
```

and inside the memo replace the raw read with `const atRaw = wantsQuiz ? undefined : atParam;` (keep the rest of the memo unchanged; add `wantsQuiz` to its dependency array alongside `params.at`).

- [ ] **Step 2: Mark missions as the learner moves**

Add store access next to the other `useProgress` selectors (~line 60-64):

```ts
  const markMissionDone = useProgress((s) => s.markMissionDone);
```

Add a ref next to `completedRef` (~line 83):

```ts
  // The FULL-sections index of the section page the learner is currently on;
  // leaving it (to any other page) is what marks that mission done.
  const lastFullIx = useRef<number | null>(null);
```

In the per-lesson reset effect (the one that runs on `[L?.id]` and resets `quizDone` etc., ~line 91-97), add `lastFullIx.current = null;`.

Replace the body of `onLessonIndexChange` (~line 192-198):

```ts
  const onLessonIndexChange = (sectionIx: number | null) => {
    const fullIx = sectionIx == null ? null : L.sections.indexOf(contentSections[sectionIx]);
    // Leaving a section page = that mission is done (spec: free navigation
    // marks only what was actually visited; entering at mission 7 never
    // back-fills 1-6).
    if (lastFullIx.current != null && lastFullIx.current !== fullIx) {
      markMissionDone(L.id, L.version, lastFullIx.current);
    }
    lastFullIx.current = fullIx != null && fullIx >= 0 ? fullIx : null;
    if (fullIx == null || fullIx < 0) return;
    const anchor = `${L.id}#s${fullIx}.0`;
    setResume('lesson', { route: `/lesson?key=${raw ?? id}&at=${encodeURIComponent(anchor)}`, title: L.title });
  };
```

(This preserves the existing resume behavior exactly: a null/cover/image/quiz page still does not move the resume anchor.)

In `onQuizComplete` (~line 250), after `setQuizDone(true);` add:

```ts
    const quizIx = L.sections.findIndex((s) => s.type === 'quiz');
    if (quizIx >= 0) markMissionDone(L.id, L.version, quizIx);
```

In `finish` (~line 258), at the top of the function add:

```ts
    if (lastFullIx.current != null) markMissionDone(L.id, L.version, lastFullIx.current);
```

- [ ] **Step 3: Pass `initialQuiz` to the pager**

In the `<LessonPager … />` JSX, next to `initialIndex={deepLinkIx}` add:

```tsx
        initialQuiz={wantsQuiz}
```

- [ ] **Step 4: Verify + commit**

Run: `pnpm typecheck` — clean. Then:

```bash
git add app/lesson.tsx
git commit -m "feat(app): lesson screen marks mission completion and accepts at=quiz"
```

---

### Task 9: overview screen

**Files:**
- Create: `ealch-v2/app/lessonoverview.tsx`

- [ ] **Step 1: Write the screen**

Create `ealch-v2/app/lessonoverview.tsx`. Style notes: mirror `den.tsx` (header row pattern, `t.card` panels, `TX` roles) and keep every element's data source exactly as the spec's element table says — absent copy hides its element, nothing is invented.

```tsx
import { useEffect } from 'react';
import { ScrollView, View } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { TX } from '@/components/Type';
import { Press } from '@/components/ui';
import { Icon } from '@/components/Icon';
import { useTheme } from '@/theme/useTheme';
import { useT } from '@/i18n/useT';
import { content } from '@/services/content';
import { cefrLabel, missionStats } from '@/content/missions';
import { useReadingBrightness } from '@/hooks/useReadingBrightness';

// The den lesson's front door (spec 2026-07-30): the ENGLISH overview card.
// Structure (mission counts, stats) is derived from the lesson's real
// sections; copy (overview block) is authored and optional — an element with
// no authored copy is hidden, never faked. The paywall chokepoint stays in
// lesson.tsx: this page is viewable for any lesson the den let the user tap.

export default function LessonOverview() {
  const t = useTheme();
  const T = useT();
  useReadingBrightness();
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const params = useLocalSearchParams<{ key?: string }>();
  const key = Array.isArray(params.key) ? params.key[0] : params.key;
  const L = key ? content.lesson(key) : null;

  // A dead link renders nothing useful — back to the den (spec fallback rule).
  useEffect(() => {
    if (!L) router.replace('/den');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [L]);
  if (!L) return <View style={{ flex: 1, backgroundColor: t.bg }} />;

  const ov = L.overview;
  const stats = missionStats(L.sections);
  const unit = content.unit(L.unitId);
  const prereqTitles = (unit?.prereqUnitIds ?? [])
    .map((uid) => content.unit(uid)?.title ?? uid)
    .join(', ');
  const goMissions = () => router.push({ pathname: '/missions', params: { key: L.id } });

  const statPairs: [number, string][] = [
    [stats.required, T.ovStatRequired],
    [stats.gates, T.ovStatGates],
    [stats.milestones, T.ovStatMilestones],
    [stats.badge, T.ovStatBadge],
  ];

  return (
    <View style={{ flex: 1, backgroundColor: t.bg }}>
      <ScrollView contentContainerStyle={{ paddingTop: insets.top + 8, paddingHorizontal: 24, paddingBottom: insets.bottom + 28 }} showsVerticalScrollIndicator={false}>
        {/* Header: back + eyebrow, the den pattern */}
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 22 }}>
          <Press onPress={() => router.back()} style={{ width: 44, height: 44, marginLeft: -12, alignItems: 'center', justifyContent: 'center' }}>
            <Icon name="chevronLeft" size={20} color={t.txNonText} strokeWidth={1.7} />
          </Press>
          <TX font="semi" role="meta" ls={2.2} color={t.txSecondary}>{L.tag}</TX>
          <View style={{ width: 44 }} />
        </View>

        {/* Glyph tile */}
        {ov?.glyph ? (
          <View style={{ width: 56, height: 56, borderRadius: 14, borderWidth: 1, borderColor: t.accA(45), alignItems: 'center', justifyContent: 'center', marginBottom: 18 }}>
            <TX font="serifI" role="title" color={t.accTx}>{ov.glyph}</TX>
          </View>
        ) : null}

        {/* Title + French subtitle */}
        <TX font="serifI" role="display">{ov?.titleEn ?? L.title}</TX>
        {ov?.subFr ? (
          <TX font="serifI" role="body" color={t.txMuted} style={{ marginTop: 8 }}>
            {'« ' + ov.subFr + ' »'}
          </TX>
        ) : null}

        {/* Chips: CEFR · minutes · difficulty */}
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8, marginTop: 16, flexWrap: 'wrap' }}>
          <View style={{ paddingVertical: 6, paddingHorizontal: 12, borderRadius: 14, backgroundColor: t.accA(14) }}>
            <TX font="bold" role="eyebrow" ls={1.2} color={t.accTx}>CEFR {cefrLabel(L.level)}</TX>
          </View>
          {ov ? (
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6, paddingVertical: 6, paddingHorizontal: 12, borderRadius: 14, borderWidth: 1, borderColor: t.line(10) }}>
              <Icon name="clock" size={12} color={t.txMuted} />
              <TX font="semi" role="eyebrow" color={t.txSecondary}>{T.ovMin.replace('{n}', String(ov.minutes))}</TX>
            </View>
          ) : null}
          {ov ? (
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6, paddingVertical: 6, paddingHorizontal: 12, borderRadius: 14, borderWidth: 1, borderColor: t.line(10) }}>
              <TX font="semi" role="eyebrow" color={t.txSecondary}>{T.ovDiff}</TX>
              <View style={{ flexDirection: 'row', gap: 3 }}>
                {[1, 2, 3, 4, 5].map((d) => (
                  <View key={d} style={{ width: 5, height: 5, borderRadius: 2.5, backgroundColor: d <= ov.difficulty ? t.acc : t.line(14) }} />
                ))}
              </View>
              <TX role="eyebrow" color={t.txSubtle}>{ov.difficulty}/5</TX>
            </View>
          ) : null}
        </View>

        {/* Description: EN (existing intro), then authored FR translation */}
        <TX role="body" color={t.txSecondary} style={{ marginTop: 20, lineHeight: 23 }}>{L.intro}</TX>
        {ov?.introFr ? (
          <TX font="serifI" role="label" color={t.txMuted} style={{ marginTop: 12, lineHeight: 21 }}>{ov.introFr}</TX>
        ) : null}

        {/* Missions summary card — fully derived */}
        <View style={{ borderRadius: 18, borderWidth: 1, borderColor: t.line(8), backgroundColor: t.card, padding: 18, marginTop: 24 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'baseline' }}>
            <View style={{ flexDirection: 'row', alignItems: 'baseline', gap: 8 }}>
              <TX font="serif" role="title">{String(stats.missions)}</TX>
              <TX font="semi" role="body">{T.ovMissionsWord}</TX>
            </View>
            <Press cue="tap" onPress={goMissions} hitSlop={8}>
              <TX font="semi" role="label" color={t.accTx}>{T.ovSeeList + ' →'}</TX>
            </Press>
          </View>
          <View style={{ flexDirection: 'row', gap: 22, marginTop: 14, flexWrap: 'wrap' }}>
            {statPairs.map(([n, label]) =>
              n > 0 ? (
                <View key={label}>
                  <TX font="serif" role="body" color={t.accTx}>{String(n)}</TX>
                  <TX role="eyebrow" color={t.txSubtle} style={{ marginTop: 2 }}>{label}</TX>
                </View>
              ) : null
            )}
          </View>
        </View>

        {/* Prerequisites — derived from the unit graph */}
        <TX role="label" color={t.txSubtle} style={{ marginTop: 18 }}>
          {'✓ ' + (prereqTitles ? T.ovPrereqSome.replace('{t}', prereqTitles) : T.ovPrereqNone)}
        </TX>

        {/* CTA */}
        <Press cue="tap" onPress={goMissions} style={{ marginTop: 26, height: 54, borderRadius: 27, backgroundColor: t.acc, alignItems: 'center', justifyContent: 'center' }}>
          <TX font="bold" role="body" color={t.accInk}>{T.ovStart}</TX>
        </Press>
        <Press cue={null} onPress={goMissions} style={{ marginTop: 16, alignItems: 'center' }}>
          <TX font="semi" role="label" color={t.accTx}>{T.ovSeeAll.replace('{n}', String(stats.missions))}</TX>
        </Press>
      </ScrollView>
    </View>
  );
}
```

Notes for the implementer:
- If `Icon` has no `clock` glyph (check `src/components/Icon.tsx`'s name union), drop the icon and keep the text chip; do not invent a glyph.
- If `Press` does not accept `hitSlop`, wrap with padding instead. Check its props in `src/components/ui.tsx`.
- `TX` roles used here (`display`, `title`, `body`, `label`, `meta`, `eyebrow`) and fonts (`serif`, `serifI`, `semi`, `bold`) must exist in `src/components/Type.tsx` — verify the exact role names by reading the `TX` prop types before finalizing; substitute the file's nearest equivalents if a name differs.

- [ ] **Step 2: Verify + commit**

Run: `pnpm typecheck` — clean. Then:

```bash
git add app/lessonoverview.tsx
git commit -m "feat(app): den lesson overview screen"
```

---

### Task 10: missions screen

**Files:**
- Create: `ealch-v2/app/missions.tsx`

- [ ] **Step 1: Write the screen**

Create `ealch-v2/app/missions.tsx`:

```tsx
import { useCallback, useEffect, useState } from 'react';
import { ScrollView, View } from 'react-native';
import { useRouter, useLocalSearchParams, useFocusEffect } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { TX } from '@/components/Type';
import { Press, ProgressBar } from '@/components/ui';
import { Icon } from '@/components/Icon';
import { useTheme } from '@/theme/useTheme';
import { useT } from '@/i18n/useT';
import { content } from '@/services/content';
import { useProgress } from '@/store/useProgress';
import { cefrLabel, missionLabel, missionStats } from '@/content/missions';
import { audio, sound } from '@/services';
import { useReadingBrightness } from '@/hooks/useReadingBrightness';

// The missions hub (spec 2026-07-30): one row per REAL section of the lesson,
// free navigation (every row tappable, always — Paul's call), checks from the
// progress store, lesson-local XP. Rows and stats are derived; only frSub and
// the intro speech are authored. Tapping a row deep-links the pager via the
// existing anchor param; the quiz row rides `at=quiz` (no section anchor).

export default function Missions() {
  const t = useTheme();
  const T = useT();
  useReadingBrightness();
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const params = useLocalSearchParams<{ key?: string }>();
  const key = Array.isArray(params.key) ? params.key[0] : params.key;
  const L = key ? content.lesson(key) : null;

  useEffect(() => {
    if (!L) router.replace('/den');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [L]);

  // Leaving this screen silences the intro speech, the lesson.tsx pattern.
  useEffect(() => () => audio.stop(), []);
  useFocusEffect(useCallback(() => () => audio.stop(), []));

  const rec = useProgress((s) => (L ? s.lessonMissions[L.id] : undefined));
  const [introPlaying, setIntroPlaying] = useState(false);

  if (!L) return <View style={{ flex: 1, backgroundColor: t.bg }} />;

  const ov = L.overview;
  const stats = missionStats(L.sections);
  // A record from an older authoring of this lesson shows nothing — the reset
  // happens on the next write (markMission), display just ignores it.
  const done = rec && rec.v === L.version ? new Set(rec.done) : new Set<number>();
  const xp = rec && rec.v === L.version ? rec.xp : 0;

  const listenIntro = () => {
    if (!ov?.introFr) return;
    sound.play('tap');
    audio.stop();
    setIntroPlaying(true);
    audio.speakItem(
      { fr: ov.introFr, audioRef: null },
      { onDone: () => setIntroPlaying(false), onError: () => setIntroPlaying(false) }
    );
  };

  const openMission = (ix: number) => {
    const s = L.sections[ix];
    sound.play('tap');
    if (s.type === 'quiz') {
      router.push({ pathname: '/lesson', params: { key: L.id, at: 'quiz' } });
    } else {
      router.push({ pathname: '/lesson', params: { key: L.id, at: `${L.id}#s${ix}.0` } });
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: t.bg }}>
      <ScrollView contentContainerStyle={{ paddingTop: insets.top + 8, paddingHorizontal: 24, paddingBottom: insets.bottom + 28 }} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
          <Press onPress={() => router.back()} style={{ width: 44, height: 44, marginLeft: -12, alignItems: 'center', justifyContent: 'center' }}>
            <Icon name="chevronLeft" size={20} color={t.txNonText} strokeWidth={1.7} />
          </Press>
          <TX font="semi" role="meta" ls={2.2} color={t.txSecondary}>{`${L.tag} · ${cefrLabel(L.level)}`}</TX>
          <View style={{ width: 44 }} />
        </View>

        {/* Title (French) + sub copy */}
        <TX font="serifI" role="display">{ov?.subFr ?? L.title}</TX>
        <TX role="label" color={t.txMuted} style={{ marginTop: 10 }}>
          {(stats.badge > 0 ? T.moSub : T.moSubNoBadge).replace('{n}', String(stats.missions))}
        </TX>

        {/* Listen to the intro — only when authored */}
        {ov?.introFr ? (
          <Press
            cue={null}
            onPress={listenIntro}
            style={{ alignSelf: 'flex-start', flexDirection: 'row', alignItems: 'center', gap: 9, marginTop: 16, height: 37, paddingHorizontal: 15, borderRadius: 18.5, borderWidth: 1, borderColor: introPlaying ? t.acc : t.accA(45), backgroundColor: introPlaying ? t.accA(12) : 'transparent' }}
          >
            <Icon name="speaker" size={16} color={t.acc} />
            <TX font="semi" role="meta" ls={1} color={t.accTx}>{T.moListen}</TX>
          </Press>
        ) : null}

        {/* Progress + XP */}
        <View style={{ marginTop: 20, marginBottom: 18 }}>
          <ProgressBar pct={(done.size / Math.max(1, stats.missions)) * 100} height={4} color={t.acc} track={t.line(10)} />
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 7 }}>
            <TX role="meta" color={t.txSubtle}>{`${done.size} / ${stats.missions}`}</TX>
            <TX font="semi" role="meta" color={t.accTx}>{T.moXp.replace('{n}', String(xp))}</TX>
          </View>
        </View>

        {/* Mission rows — the FULL sections array, quiz included */}
        <View style={{ gap: 9 }}>
          {L.sections.map((s, ix) => {
            const isDone = done.has(ix);
            return (
              <Press
                key={ix}
                cue="tap"
                scale={0.99}
                onPress={() => openMission(ix)}
                style={{ flexDirection: 'row', alignItems: 'center', gap: 13, borderRadius: 16, borderWidth: 1, borderColor: isDone ? t.accA(55) : t.line(8), backgroundColor: t.card, padding: 13, paddingHorizontal: 15 }}
              >
                <View style={{ width: 34, height: 34, borderRadius: 17, borderWidth: 1, borderColor: isDone ? t.acc : t.accA(40), backgroundColor: isDone ? t.acc : 'transparent', alignItems: 'center', justifyContent: 'center' }}>
                  {isDone ? (
                    <Icon name="check" size={15} color={t.accInk} strokeWidth={2.4} />
                  ) : (
                    <TX font="serif" role="label" color={t.accTx}>{String(ix + 1).padStart(2, '0')}</TX>
                  )}
                </View>
                <View style={{ flex: 1, minWidth: 0 }}>
                  <TX font="semi" role="body" numberOfLines={1}>{s.title}</TX>
                  {s.frSub ? (
                    <TX font="serifI" role="eyebrow" color={t.txSubtle} style={{ marginTop: 2 }} numberOfLines={1}>{s.frSub}</TX>
                  ) : null}
                </View>
                <TX font="bold" role="eyebrow" ls={1.2} color={t.accTx}>{missionLabel(s)}</TX>
              </Press>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
}
```

Implementer notes: same component-prop caveats as Task 9 (verify `TX` roles/fonts, `Icon` names, `Press` props against their source files before finalizing). `audio.speakItem` defaults to French for `fr` text (the pager passes `lang: 'en-US'` only for its English coaching scripts; pass no `lang` here).

- [ ] **Step 2: Verify + commit**

Run: `pnpm typecheck` — clean. Then:

```bash
git add app/missions.tsx
git commit -m "feat(app): den missions list screen with free navigation"
```

---

### Task 11: den points at the overview

**Files:**
- Modify: `ealch-v2/app/den.tsx` (~line 169)

- [ ] **Step 1: Change the push target**

In the unit card's `onPress`, change:

```ts
              router.push({ pathname: '/lesson', params: { key: u.lessonIds[0] } });
```

to:

```ts
              router.push({ pathname: '/lessonoverview', params: { key: u.lessonIds[0] } });
```

(The paywall row-gate lines above it stay untouched. Every other `/lesson` link in the app — weak spots, exam remediation, resume, narrated — intentionally keeps going straight to the pager; spec §Flow.)

- [ ] **Step 2: Verify + commit**

Run: `pnpm typecheck` — clean. Then:

```bash
git add app/den.tsx
git commit -m "feat(app): den lessons open the overview page first"
```

---

### Task 12: authoring batch (seed-direct)

**Files:**
- Create: `ealch-admin/scripts/author-lesson-overviews.ts`

This batch is seed.json-DIRECT (the current bulk-authoring practice; the DB catches up via the established import-seed flow). It must NOT import `./env` and must NOT touch the database. Run from `ealch-admin/`.

- [ ] **Step 1: Write the script**

Create `ealch-admin/scripts/author-lesson-overviews.ts`. The data below is the complete authored copy for all 6 lessons: an `overview` block each, and a `frSub` line for EVERY section, keyed by section index (indexes verified against the live seed on 2026-07-30 — the script hard-fails if a title at an index no longer matches, so a reordered lesson can never get mis-labeled copy).

```ts
// Content Batch — den lesson overviews + per-mission French sub-lines
// (spec docs/superpowers/specs/2026-07-30-refresher-lesson-overview-design.md).
//
// Seed-direct: reads ealch-v2/src/content/seed.json, merges each lesson's
// `overview` block and per-section `frSub`, bumps the lesson version, runs
// validateLesson on every touched lesson, and writes the file back. No DB, no
// env, no publish. Idempotent: re-running produces the same bytes (version
// bumps only when the merge actually changes the lesson).
//
// Usage (from ealch-admin/):
//   pnpm tsx scripts/author-lesson-overviews.ts --dry-run    validate + report
//   pnpm tsx scripts/author-lesson-overviews.ts              apply
//
// Copy rules: no em dash, no "honest" (seed-wide test enforces it).

import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { validateLesson, type Lesson } from '../../ealch-v2/src/content/schema.ts';

const here = dirname(fileURLToPath(import.meta.url));

type Overview = NonNullable<Lesson['overview']>;
type LessonPatch = {
  overview: Overview;
  /** sectionIx -> [expected title (guard), frSub]. Every section listed. */
  frSub: Record<number, [string, string]>;
};

const PATCHES: Record<string, LessonPatch> = {
  'sons.01.l1': {
    overview: {
      titleEn: "The French Alphabet: Every Letter's Real Sound",
      subFr: "L'alphabet : le vrai son de chaque lettre",
      introFr:
        "Apprenez le nom et le vrai son des 26 lettres, maîtrisez celles qui piègent les anglophones, et épelez votre nom et votre email à voix haute avec une confiance totale.",
      minutes: 45,
      difficulty: 1,
      glyph: 'Aa',
    },
    frSub: {
      0: ['Why this matters', 'Pourquoi ça compte'],
      1: ["What you'll master", 'Vos objectifs'],
      2: ['The core concept: name versus sound', 'Nom contre son'],
      3: ['How sounds are written here', 'Notre notation'],
      4: ['The 26 letters, name and sound', 'Les 26 lettres'],
      5: ['The letters that ambush you', 'Les lettres pièges'],
      6: ['Vowels: French versus English', 'Les voyelles comparées'],
      7: ['Worked examples', 'Exemples guidés'],
      8: ['The sound ladder', "L'échelle des sons"],
      9: ['Pattern bank', 'La banque de motifs'],
      10: ['Vocabulary bank', 'La banque de mots'],
      11: ['Spell your name like a local', 'Épelez votre nom'],
      12: ['Helper words for blurry letters', 'Les mots repères'],
      13: ['Email words you must know', "Les mots de l'email"],
      14: ['The full email, out loud', "L'email à voix haute"],
      15: ['The alphabet song', "La chanson de l'alphabet"],
      16: ['Sing along, line by line', 'Chantez ligne à ligne'],
      17: ['Common mistakes', 'Les erreurs classiques'],
      18: ['Reading practice', 'Lecture guidée'],
      19: ['Speaking drills', 'Exercices à voix haute'],
      20: ['Minimal pairs', 'Les paires minimales'],
      21: ['Shadowing', "L'ombre de la voix"],
      22: ['Memory hacks', 'Les astuces mémoire'],
      23: ['Practice flashcards', 'Les cartes de révision'],
      24: ['Round-up', 'Le grand récap'],
      25: ['Quiz', "L'examen final"],
    },
  },
  'sons.02.l1': {
    overview: {
      titleEn: 'French Vowels in Depth: Pure Sounds, No Gliding',
      subFr: 'Les voyelles, en profondeur',
      introFr:
        "En français, un mot entier peut basculer sur une seule voyelle que l'anglais ne possède même pas. Plongez dans les voyelles orales : pourquoi elles restent pures, et comment enfin réussir les deux plus difficiles.",
      minutes: 40,
      difficulty: 2,
      glyph: 'Ou',
    },
    frSub: {
      0: ['A Small Misunderstanding', 'Un petit malentendu'],
      1: ["What You'll Be Able to Do", 'Vos objectifs'],
      2: ['The Basic Idea', 'La grande idée'],
      3: ['The Eleven Oral Vowel Sounds, One by One', 'Les onze voyelles orales'],
      4: ['Grouping for Better Listening', 'Écouter par familles'],
      5: ['Trap Number One: U versus OU', 'Le piège U contre OU'],
      6: ['The Two Hardest Sounds', 'Les deux sons les plus durs'],
      7: ['Vocabulary for the Seven Vowels', 'Le vocabulaire des voyelles'],
      8: ['Ten Sentences to Reuse', 'Dix phrases à réutiliser'],
      9: ['Spell What You Hear', 'Écrivez ce que vous entendez'],
      10: ['At the Café, the Morning Order', 'Au café, le matin'],
      11: ['Speak Aloud: All the Vowels', 'Toutes les voyelles à voix haute'],
      12: ["At Marie's, the Baker", 'Chez Marie, la boulangère'],
      13: ['The Eight Classic Traps', 'Les huit pièges classiques'],
      14: ['By Ear: U or OU?', "À l'oreille : U ou OU ?"],
      15: ['A Happy Family', 'Une famille heureuse'],
      16: ['The System of Rounded Pairs', 'Le système des paires arrondies'],
      17: ['Where You Stand', 'Où vous en êtes'],
      18: ['Final Quiz: The Seven Vowels', "L'examen final"],
      19: ['Seven Vowels, One Big Step', 'Un grand pas de fait'],
    },
  },
  'sons.03.l1': {
    overview: {
      titleEn: "Nasal Vowels: The Four Sounds English Doesn't Have",
      subFr: 'Les voyelles nasales',
      introFr:
        "Quatre sons sans équivalent en anglais : l'air passe par le nez, et le n ou le m ne se prononce jamais comme une consonne. Maîtrisez-les et votre accent change immédiatement.",
      minutes: 40,
      difficulty: 3,
      glyph: 'On',
    },
    frSub: {
      0: ['The Welcome That Went Wrong', "L'accueil qui a mal tourné"],
      1: ["What you'll master", 'Vos objectifs'],
      2: ['The basic idea', 'La grande idée'],
      3: ['The four nasal vowels, and two glides', 'Les quatre nasales'],
      4: ['Sort the four families', 'Les quatre familles'],
      5: ['The anti-rule trap', "Le piège de l'anti-règle"],
      6: ['The soft palate lab', 'Le labo du voile du palais'],
      7: ['Nasal vocabulary', 'Le vocabulaire nasal'],
      8: ['Ten phrases to reuse', 'Dix phrases à réutiliser'],
      9: ['Spell the nasals', 'Écrivez les nasales'],
      10: ["Sans, son, sain, and tomorrow's breakfast", 'Sans, son, sain au petit déjeuner'],
      11: ['Out loud: the four families', 'Les familles à voix haute'],
      12: ['At the bakery: a good loaf', 'À la boulangerie'],
      13: ['The eight nasal traps', 'Les huit pièges nasals'],
      14: ['The bon/bonne trap, in writing', 'Bon ou bonne, par écrit'],
      15: ['Jean and his brown dog', 'Jean et son chien brun'],
      16: ['The four-anchor compass', 'La boussole des quatre ancres'],
      17: ['Lesson wrap-up', 'Le bilan de la leçon'],
      18: ['Final check', "L'examen final"],
      19: ['The nasals are yours', 'Les nasales sont à vous'],
    },
  },
  'a1.01.l1': {
    overview: {
      titleEn: 'Greetings: Tu or Vous, Never Wrong Again',
      subFr: 'Les salutations',
      introFr:
        "Les salutations françaises reposent sur une ligne : tu ou vous. Choisissez bien, et « bonjour », « merci » et « au revoir » vous portent dans presque toutes les situations.",
      minutes: 25,
      difficulty: 1,
      glyph: 'Bj',
    },
    frSub: {
      0: ['When to say what', 'Quand dire quoi'],
      1: ['Examples', 'Les exemples'],
      2: ["Where you'll use this", 'Où ça sert'],
      3: ['Common errors', 'Les erreurs classiques'],
      4: ['Practice', 'À voix haute'],
      5: ['Quiz', "L'examen final"],
    },
  },
  'a1.04.l1': {
    overview: {
      titleEn: "The Definite Articles: Le, La, L' and Les",
      subFr: 'Les articles définis',
      introFr:
        "Le français a quatre façons de dire « the », selon le genre, le nombre et la première lettre du nom. Aucun raccourci possible : chaque nom vit avec son article.",
      minutes: 25,
      difficulty: 2,
      glyph: 'Le',
    },
    frSub: {
      0: ['Reference', 'La référence'],
      1: ['Examples', 'Les exemples'],
      2: ['Listen', "À l'écoute"],
      3: ['Common errors', 'Les erreurs classiques'],
      4: ['Practice', 'Par écrit'],
      5: ['Quiz', "L'examen final"],
    },
  },
  'a2.01.l1': {
    overview: {
      titleEn: 'Regular -ER Verbs: One Pattern, Thousands of Verbs',
      subFr: 'Les verbes réguliers',
      introFr:
        "Environ 90% des verbes français sont des verbes réguliers en -ER. Apprenez un seul schéma de conjugaison et des milliers de verbes se débloquent d'un coup.",
      minutes: 30,
      difficulty: 2,
      glyph: 'Er',
    },
    frSub: {
      0: ['Reference', 'La référence'],
      1: ['Examples', 'Les exemples'],
      2: ['Listen', "À l'écoute"],
      3: ['Common errors', 'Les erreurs classiques'],
      4: ['In this unit', 'Dans cette unité'],
      5: ['Practice', 'Par écrit'],
      6: ['Quiz', "L'examen final"],
    },
  },
};

const DRY = process.argv.includes('--dry-run');
const SEED_PATH = resolve(here, '../../ealch-v2/src/content/seed.json');

const raw = readFileSync(SEED_PATH, 'utf8');
const seed = JSON.parse(raw) as { lessons: Lesson[] };

let touched = 0;
const problems: string[] = [];

for (const [id, patch] of Object.entries(PATCHES)) {
  const L = seed.lessons.find((l) => l.id === id);
  if (!L) {
    problems.push(`${id}: lesson not in seed`);
    continue;
  }
  // Index guard: authored frSub must line up with the REAL sections.
  if (Object.keys(patch.frSub).length !== L.sections.length) {
    problems.push(`${id}: frSub covers ${Object.keys(patch.frSub).length} sections, lesson has ${L.sections.length}`);
    continue;
  }
  let mismatch = false;
  for (const [ixStr, [expectTitle]] of Object.entries(patch.frSub)) {
    const s = L.sections[Number(ixStr)];
    if (!s || s.title !== expectTitle) {
      problems.push(`${id}[${ixStr}]: expected "${expectTitle}", found "${s?.title ?? '<missing>'}"`);
      mismatch = true;
    }
  }
  if (mismatch) continue;

  const before = JSON.stringify({ o: L.overview, f: L.sections.map((s) => (s as { frSub?: string }).frSub) });
  L.overview = patch.overview;
  for (const [ixStr, [, frSub]] of Object.entries(patch.frSub)) {
    (L.sections[Number(ixStr)] as { frSub?: string }).frSub = frSub;
  }
  const after = JSON.stringify({ o: L.overview, f: L.sections.map((s) => (s as { frSub?: string }).frSub) });
  const changed = before !== after;
  if (changed) L.version = (L.version ?? 1) + 1;

  const issues = validateLesson(L);
  if (issues.length) {
    problems.push(`${id}: ${issues.map((i) => `${i.path}: ${i.message}`).join(' | ')}`);
    continue;
  }
  if (changed) touched += 1;
  console.log(`${id}: ${changed ? 'patched' : 'already up to date'}, v${L.version}, ${L.sections.length} frSub lines, valid`);
}

if (problems.length) {
  console.error('\nBLOCKED — nothing written:');
  for (const p of problems) console.error('  - ' + p);
  process.exit(1);
}

if (DRY) {
  console.log(`\nDry run: ${touched} lesson(s) would be written. seed.json untouched.`);
} else if (touched === 0) {
  console.log('\nNothing to write: seed already carries this batch.');
} else {
  writeFileSync(SEED_PATH, JSON.stringify(seed, null, 2) + (raw.endsWith('\n') ? '\n' : ''));
  console.log(`\nWrote ${touched} lesson(s) to seed.json. Review with: git diff ealch-v2/src/content/seed.json`);
}
```

- [ ] **Step 2: Dry-run**

From `ealch-admin/`: `pnpm tsx scripts/author-lesson-overviews.ts --dry-run`
Expected: 6 lines ending "valid", then "Dry run: 6 lesson(s) would be written." Exit 0. If any index-guard line prints, the seed changed since 2026-07-30: STOP and re-derive the frSub table against the current section titles instead of forcing it.

- [ ] **Step 3: Apply + validate the whole seed**

From `ealch-admin/`: `pnpm tsx scripts/author-lesson-overviews.ts`
Then from `ealch-v2/`: `pnpm test`
Expected: all green, including `seed.backcompat.test.ts` (validateCorpus over the patched seed), `sons-alphabet.test.ts` (em dash + "honest" sweeps still pass), `missions.test.ts` (live-seed stats), `test:i18n`.

- [ ] **Step 4: Review the diff, then commit**

`git diff --stat ealch-v2/src/content/seed.json` — expect one file, additions only in the 6 lessons (overview blocks, frSub lines, version bumps). Paul reviews this diff before the commit is pushed anywhere.

```bash
git add ealch-admin/scripts/author-lesson-overviews.ts ealch-v2/src/content/seed.json
git commit -m "content: den lesson overview blocks + mission frSub lines for the 6 refresher lessons"
```

---

### Task 13: full verification + manual QA

- [ ] **Step 1: Full suite**

From `ealch-v2/`: `pnpm test && pnpm typecheck`
Expected: everything green, typecheck clean.

- [ ] **Step 2: Manual QA on the USB Pixel 6** (Metro 8082 dev-client setup; see the workspace memory: start Metro via `node .../cli start`, never `npx expo start`, never `--localhost`)

Walk this checklist and note anything off:
1. Den → tap "L'alphabet" → overview shows: SONS · LEÇON 01 eyebrow, Aa tile, English title, « subtitle », CEFR A0 + 45 min + difficulty 1/5 chips, EN intro, FR intro italic, "26 missions" card with required/gates/milestones/badge counts, prerequisites "none" line, Start lesson.
2. "Start lesson" → missions page: eyebrow with A0, "L'alphabet…" French title, sub copy with badge clause, Listen to the intro speaks French, 0/26 bar, 0 XP.
3. Tap mission 07 → pager opens ON that section (not the cover). Swipe forward one page → back out to missions → mission 07 shows the check, bar 1/26, 5 XP.
4. Re-enter mission 07, swipe again, back out → still 5 XP (no double award).
5. Quiz row tap → pager opens on the quiz page directly. Finish the quiz → quiz row checked.
6. a1 tab → "Les salutations" overview (6 missions, milestones stat hidden if 0) → missions page renders 6 rows sensibly.
7. a2 tab while signed out of Première → tap still paywalls from the den row (unchanged gate).
8. Home → resume chip for a mid-lesson exit still deep-links into `/lesson` directly (unchanged).
9. Back stack: missions → overview → den, no loops.
10. Kill the app, reopen → checks and XP persisted.

- [ ] **Step 3: Update the workspace memory**

Append the outcome (feature shipped through Task N, any deviations) to the auto-memory file `ealch-v2-progress.md` per its existing format.

---

## Out of scope (do not build)

EN⇄FR pill, rendered narration clips, sons.01 re-rig to 20 missions, global XP, retargeting "Continue"/resume links at the missions hub, `content:publish`.
