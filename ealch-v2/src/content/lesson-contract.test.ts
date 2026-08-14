// The lesson contract, enforced across EVERY lesson in the seed.
//
// ── Why this file exists ────────────────────────────────────────────────────
//
// sons.06 was built as the reference lesson, and building it surfaced four
// classes of failure that are invisible in a code review of the content and
// obvious within ten seconds on a device:
//
//   1. Layout GUESSED rather than measured, so a card ran past the bottom of
//      the screen and took its answer buttons with it. Three missions could not
//      be completed at all — not untidy, unusable.
//   2. A field authored, schema-validated, and rendered by nothing. The
//      inhibition drill named four practice words per routine and displayed
//      none of them, for months.
//   3. Chrome repeated. "Contrôle" three times on one screen; a group label
//      restating the mission title on four missions.
//   4. Interactive content with no verdict. A check that recoloured two rows
//      and explained nothing, at the exact moment the rule was most likely to
//      land.
//
// The per-lesson guards in subMission.logic.test.ts pin these for sons.06. This
// file lifts the ones that are CONTENT rules over the whole seed, because seven
// other lessons already ship and none of them was re-checked after the layout
// contract changed underneath them.
//
// Rule of thumb for what belongs here: if the assertion reads a lesson and
// could sensibly be asked of any lesson, it goes here. If it reads component
// source, it belongs with the component's own guards.
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { ok, strictEqual } from 'node:assert';
import { before, test } from 'node:test';
import type { Lesson, LessonSection } from './schema.ts';
import { subCount } from './subMission.logic.ts';

const here = dirname(fileURLToPath(import.meta.url));
const seed = JSON.parse(readFileSync(join(here, 'seed.json'), 'utf8')) as {
  items: { id: string }[];
  lessons: Lesson[];
};
const ITEM_IDS = new Set(seed.items.map((i) => i.id));

/** Every lesson, with a label good enough to name the failure. */
const LESSONS = seed.lessons.map((l) => ({ id: l.id, lesson: l }));

/** A section's 1-based mission number, for failure messages a human can act on. */
const missionOf = (lesson: Lesson, sec: LessonSection) => lesson.sections.indexOf(sec) + 1;
const idOf = (sec: LessonSection) => (sec as { id?: string }).id ?? '(no id)';
const where = (lessonId: string, lesson: Lesson, sec: LessonSection) =>
  `${lessonId} mission ${missionOf(lesson, sec)} (${idOf(sec)})`;

/* ─── 1. Nothing authored may go unrendered ───────────────────────────────── */

test('every practiceOn id resolves to a real corpus item', () => {
  // The failure this catches: a drill that names the words it is performed on,
  // passes the schema, and shows the learner an empty card. An id that does not
  // resolve renders as nothing at all — the section degrades silently rather
  // than erroring.
  for (const { id, lesson } of LESSONS) {
    for (const sec of lesson.sections) {
      const targets = (sec as { targets?: { label: string; practiceOn?: string[] }[] }).targets;
      if (!targets) continue;
      for (const tg of targets) {
        ok(tg.practiceOn?.length, `${where(id, lesson, sec)}: target "${tg.label}" names no practice words`);
        for (const itemId of tg.practiceOn) {
          ok(ITEM_IDS.has(itemId), `${where(id, lesson, sec)}: "${tg.label}" -> ${itemId} is not in the corpus`);
        }
      }
    }
  }
});

test('every practice and dictation section resolves its itemIds', () => {
  // Same class of failure, different field. A `practice` section whose itemIds
  // do not resolve renders a drill with nothing in it.
  for (const { id, lesson } of LESSONS) {
    for (const sec of lesson.sections) {
      if (sec.type !== 'practice' && sec.type !== 'dictation') continue;
      const ids = (sec as { itemIds?: string[] }).itemIds ?? [];
      ok(ids.length > 0, `${where(id, lesson, sec)}: a ${sec.type} section with no itemIds is an empty drill`);
      for (const itemId of ids) {
        ok(ITEM_IDS.has(itemId), `${where(id, lesson, sec)}: ${itemId} is not in the corpus`);
      }
    }
  }
});

test('a section that declares a reference sheet points at one that exists', () => {
  for (const { id, lesson } of LESSONS) {
    const sheetIds = new Set((lesson.sheets ?? []).map((s: { id: string }) => s.id));
    for (const sec of lesson.sections) {
      const ref = (sec as { sheetId?: string }).sheetId;
      if (!ref) continue;
      ok(sheetIds.has(ref), `${where(id, lesson, sec)}: sheetId "${ref}" matches no sheet on this lesson`);
    }
  }
});

test('a term chip names a term the lesson actually defines', () => {
  // A chip whose key is missing from the glossary renders as nothing, so the
  // mission silently loses the explanation it meant to offer.
  for (const { id, lesson } of LESSONS) {
    const defined = new Set(Object.keys(lesson.terms ?? {}));
    for (const sec of lesson.sections) {
      for (const key of (sec as { terms?: string[] }).terms ?? []) {
        ok(defined.has(key), `${where(id, lesson, sec)}: term chip "${key}" is not in this lesson's glossary`);
      }
    }
  }
});

/* ─── 2. Interactive content must give a verdict ──────────────────────────── */

test('a control page explains its answer', () => {
  // A control that only recolours two rows tells someone they were wrong
  // without telling them why — and being wrong is the moment the rule was most
  // likely to land.
  //
  // Scoped to CONTROL PAGES (a group carrying a question and no words), which
  // is the shape that exists to be a check. A drill that also teaches words
  // carries its explanation in the material around it.
  for (const { id, lesson } of LESSONS) {
    for (const sec of lesson.sections) {
      if (sec.type !== 'groupDrill') continue;
      const groups = (sec as { groups?: { items?: unknown[]; check?: { why?: string } }[] }).groups ?? [];
      if (groups.length !== 1) continue;
      const g = groups[0];
      if (!g.check || (g.items?.length ?? 0) > 0) continue;
      ok(
        typeof g.check.why === 'string' && g.check.why.trim().length > 0,
        `${where(id, lesson, sec)}: control page has no \`why\` — the learner gets a colour and no rule`,
      );
    }
  }
});

/** Lessons authored before `why` was expected on every quiz question.
 *
 *  The renderer has always supported it (QuizRoundsView draws it on answer);
 *  these four simply never authored it, so a wrong answer shows a colour and no
 *  rule. sons.01, sons.04, sons.06 and a1.01 are complete and are NOT waived —
 *  which is what makes this list a debt register rather than a permanent
 *  exemption.
 *
 *  Deleting a line here is the ticket to fix that lesson. Adding one is a
 *  decision someone has to defend in review. */
const WHY_WAIVED = new Map<string, string>([
  ['sons.02.l1', '0/12 authored'],
  ['sons.03.l1', '1/12 authored'],
  // a1.04.l1 came off this list on 2026-08-05. It was waived at "0/3 authored";
  // the rebuild to v3 replaced that three-question quiz with 22 round-based
  // questions, every one carrying a `why` and a `ref`. Taking a lesson off the
  // list is the point of the list, so the line is deleted rather than updated.
  //
  // a2.01.l1 came off it on 2026-08-11, the same way and for the same reason. It
  // was waived at "0/3 authored"; the rebuild to v3 replaced that pre-v2 stub
  // with 30 round-based questions, every one carrying a `why` and a `ref`. Two
  // of the three remaining entries are now sons lessons, which is the list doing
  // what it is for: it can only shrink.
]);

test('a quiz question that can be got wrong says why', () => {
  for (const { id, lesson } of LESSONS) {
    if (WHY_WAIVED.has(id)) continue;
    for (const sec of lesson.sections) {
      if (sec.type !== 'quiz') continue;
      const rounds = (sec as { rounds?: { questions?: { q: string; why?: string }[] }[] }).rounds ?? [];
      const flat = (sec as { questions?: { q: string; why?: string }[] }).questions ?? [];
      const questions = rounds.length ? rounds.flatMap((r) => r.questions ?? []) : flat;
      const missing = questions.filter((q) => !q.why?.trim());
      // Reported as a count rather than one-by-one: a quiz missing every `why`
      // is one authoring decision, not thirty separate bugs.
      strictEqual(
        missing.length,
        0,
        `${id}: ${missing.length}/${questions.length} quiz questions have no \`why\` (first: "${missing[0]?.q ?? ''}")`,
      );
    }
  }
});

test('the why waiver list does not outlive the gap it documents', () => {
  // A waiver nobody removes becomes a permanent exemption, and the debt stops
  // being visible. So a lesson that has since been authored FAILS here until it
  // is taken off the list — the list can only ever shrink.
  for (const [id, note] of WHY_WAIVED) {
    const lesson = seed.lessons.find((l) => l.id === id);
    ok(lesson, `${id} is waived for quiz \`why\` but is not in the seed — remove the waiver`);
    const quiz = lesson.sections.find((s) => s.type === 'quiz') as
      | { rounds?: { questions?: { why?: string }[] }[]; questions?: { why?: string }[] }
      | undefined;
    const questions = quiz?.rounds?.length
      ? quiz.rounds.flatMap((r) => r.questions ?? [])
      : (quiz?.questions ?? []);
    const missing = questions.filter((q) => !q.why?.trim()).length;
    ok(
      missing > 0,
      `${id} now has a \`why\` on every question (waiver said "${note}") — delete it from WHY_WAIVED`,
    );
  }
});

/* ─── 3. Chrome must not repeat itself ────────────────────────────────────── */

test('a section does not restate its own title inside itself', () => {
  // sons.06 split each silent-letter family onto its own mission and named the
  // mission after the family, so the section eyebrow and the group's label were
  // the same string — drawn twice, one line under the other, on four missions.
  // The renderer suppresses it now; this pins the rule for every lesson so a
  // new one does not reintroduce it in a different section type.
  const norm = (s: string) => s.trim().toLowerCase();
  for (const { id, lesson } of LESSONS) {
    for (const sec of lesson.sections) {
      const title = (sec as { title?: string }).title ?? '';
      if (!title) continue;
      const groups = (sec as { groups?: { label: string }[] }).groups ?? [];
      // One group whose label IS the title is the case the renderer hides. More
      // than one group means the labels distinguish the groups from each other,
      // which is what they are for.
      if (groups.length !== 1) continue;
      const dup = norm(groups[0].label) === norm(title);
      // Not an assertion that it never happens — the renderer handles it. This
      // asserts the renderer is still the thing handling it, by requiring the
      // suppression to exist whenever the content relies on it.
      if (!dup) continue;
      const rich = readFileSync(join(here, '..', 'components', 'MissionRich.tsx'), 'utf8');
      ok(
        /const sameAsTitle = /.test(rich) && /hideLabel \? null : <TX/.test(rich),
        `${where(id, lesson, sec)}: label repeats the title and the renderer no longer suppresses it`,
      );
    }
  }
});

/* ─── 4. Sub-mission numbering must match what is rendered ────────────────── */

test('a sub-dividing section is one the pager gives the viewport to', () => {
  // Sub-missions are SWIPE positions. Numbering a section the pager renders in
  // a scrolling page would count cards the learner never swipes between, and
  // the header would disagree with the screen.
  //
  // The predicate is mirrored from LessonPager.ownsLayout — a .tsx file cannot
  // be imported by node --test, so the mirror is pinned separately by the
  // ownsLayout test in subMission.logic.test.ts.
  const owns = (s: LessonSection): boolean => {
    const sec = s as LessonSection & {
      swipe?: boolean;
      size?: string;
      steps?: unknown[];
      questionsInModal?: boolean;
    };
    if (sec.swipe) return true;
    if (s.type === 'reading' && sec.questionsInModal) return true;
    if (s.type === 'cardDeck') return true;
    if (s.type === 'groupDrill' && sec.size === 'xl') return true;
    if (s.type === 'trapDrill' && (sec.steps?.length ?? 0) > 0) return true;
    if (s.type === 'flashcards' || s.type === 'reviewDeck') return true;
    if (s.type === 'practice') return true;
    return false;
  };

  for (const { id, lesson } of LESSONS) {
    for (const sec of lesson.sections) {
      if (subCount(sec) <= 1) continue;
      ok(owns(sec), `${where(id, lesson, sec)}: sub-divides into ${subCount(sec)} cards but does not own its layout`);
    }
  }
});

test('an A2 trapDrill walks its jobs one screen at a time', () => {
  // THE STACKED SHAPE IS THE DEFECT STEPPING WAS INTRODUCED TO REMOVE, and the
  // schema comment on TRAP_STEP_KINDS says so in as many words: stacking the
  // three jobs "made the cards a column and left the drill permanently below
  // the fold". Two A2 lessons kept shipping it anyway — a2.03 mission 8 and
  // a2.16 mission 14 — because nothing anywhere asserted the shape, and both
  // were authored from a neighbour's structure rather than a neighbour's trap.
  //
  // What the learner lost, on both: the reflex check sat under six flip cards
  // in a scrolling page instead of owning a screen, there was no gate holding
  // them until they had answered it, the section's declared audio played
  // nowhere, and the pager's header stayed frozen on one mission number for the
  // whole section because subCount() returns 1 without `steps`.
  //
  // SCOPED TO A2 DELIBERATELY. The sons band authors the same type in shapes
  // this rule would be wrong about: sons.02 and sons.05 have no audio step at
  // all, and sons.10 has no rule step, both of which are right for what those
  // sections do. A2 has one shape, thirteen times, and that is what is pinned.
  const A2 = /^a2\./;
  for (const { id, lesson } of LESSONS) {
    if (!A2.test(id)) continue;
    for (const sec of lesson.sections) {
      if (sec.type !== 'trapDrill') continue;
      const s = sec as LessonSection & {
        steps?: { kind: string; gate?: boolean }[];
        swipe?: boolean;
        audio?: unknown;
        say?: string;
      };
      const w = where(id, lesson, sec);
      const kinds = (s.steps ?? []).map((st) => st.kind).join('>');
      strictEqual(kinds, 'rule>cards>audio>drill', `${w}: trapDrill steps are ${JSON.stringify(kinds)}, and A2 walks rule, cards, audio, drill`);
      // Without `swipe` the pager hands this a scrolling page, the cards step
      // measures nothing and the Continuer button lands below the fold.
      ok(s.swipe === true, `${w}: a stepped trapDrill must set swipe, or it does not own the viewport`);
      // An audio step with no spec renders play buttons that resolve to
      // nothing but bare TTS, with no take for the studio to deliver against.
      ok(s.audio, `${w}: names an audio step and declares no audio`);
      ok(s.say, `${w}: has no say line, so the mission opens with no lead-in`);
      // A reflex the learner can swipe past is not a reflex that was tested.
      ok((s.steps ?? []).some((st) => st.kind === 'drill' && st.gate === true), `${w}: the drill step is not gated`);
    }
  }
});

/* ─── 5. Structural integrity ─────────────────────────────────────────────── */

test('every act names sections that exist, and every section belongs to at most one act', () => {
  // Folding a section into another one (sons.06's -er rule) leaves an act
  // naming a section that is gone. The act boundary is what releases that act's
  // SRS tranche, so a dangling name is a tranche that never fires.
  for (const { id, lesson } of LESSONS) {
    const acts = (lesson as Lesson & { acts?: { id: string; sections: string[] }[] }).acts ?? [];
    if (!acts.length) continue;
    const present = new Set(lesson.sections.map((s) => idOf(s)));
    const seen = new Map<string, string>();
    for (const act of acts) {
      for (const sid of act.sections) {
        ok(present.has(sid), `${id}: act ${act.id} names "${sid}", which is not a section of this lesson`);
        const prev = seen.get(sid);
        ok(!prev, `${id}: "${sid}" is claimed by both ${prev} and ${act.id}`);
        seen.set(sid, act.id);
      }
    }
  }
});

test('a quiz question that references a section points at a real one', () => {
  // A wrong answer offers "see this again". A stale ref sends the learner
  // nowhere, which is worse than not offering it.
  for (const { id, lesson } of LESSONS) {
    const present = new Set(lesson.sections.map((s) => idOf(s)));
    for (const sec of lesson.sections) {
      if (sec.type !== 'quiz') continue;
      const rounds = (sec as { rounds?: { questions?: { ref?: string }[] }[] }).rounds ?? [];
      const flat = (sec as { questions?: { ref?: string }[] }).questions ?? [];
      for (const q of rounds.length ? rounds.flatMap((r) => r.questions ?? []) : flat) {
        if (!q.ref) continue;
        ok(present.has(q.ref), `${id}: a quiz question refs "${q.ref}", which is not a section of this lesson`);
      }
    }
  }
});

test('every authored quiz question is reachable by a learner', () => {
  // Failure class 2 above, in its most expensive form: content that is
  // authored, schema-valid, and rendered by nothing.
  //
  // lessonPager.logic.ts strips EVERY quiz section in contentSections(), then
  // appends exactly ONE quiz page in buildPages(), resolved with
  // `sections.find(s => s.type === 'quiz')`. That is the first one. A second
  // quiz section is therefore a set of questions no learner can ever reach.
  //
  // a1.01.l1 shipped this way: a 3-question "Quick Check" at position 9 and a
  // 12-question final exam at position 19. The exam was never reachable, and
  // the lesson's own test asserted it was "substantial and every question
  // teaches" — reading the data and never asking whether the data renders.
  //
  // Fix by folding the extra check into the mission it follows, which is what
  // every v2 lesson does. If a lesson ever genuinely needs a mid-flow exam,
  // this test is the thing to change, and buildPages / quizSection /
  // app/lesson.tsx / acts.logic.ts all have to learn WHICH quiz at the same
  // time. Changing the test alone would restore the bug.
  for (const { id, lesson } of LESSONS) {
    const quizzes = lesson.sections.filter((s) => s.type === 'quiz');
    if (!quizzes.length) continue;
    const count = (sec: LessonSection) => {
      const rounds = (sec as { rounds?: { questions?: unknown[] }[] }).rounds ?? [];
      if (rounds.length) return rounds.reduce((n, r) => n + (r.questions?.length ?? 0), 0);
      return ((sec as { questions?: unknown[] }).questions ?? []).length;
    };
    const authored = quizzes.reduce((n, q) => n + count(q), 0);
    const reachable = count(quizzes[0]);
    strictEqual(
      reachable,
      authored,
      `${id}: ${authored - reachable} authored quiz question(s) are unreachable. ` +
      `This lesson has ${quizzes.length} quiz sections and the pager renders only the first.`
    );
  }
});

test('a reading glossary is only authored where something renders it', () => {
  // Failure class 2 again. MissionSection routes `reading` to ReadingMission —
  // the only path that reaches PassagePage, and so the only path that draws the
  // glossary underlines — when `questionsInModal` is set and the section has
  // questions. The fallback path never mentions `glossary`: grep MissionRich.
  //
  // a1.01.l1 shipped five entries down that fallback. The passage rendered, the
  // questions rendered, and the glossary was invisible. Nothing failed, because
  // the entries were all valid; they were just never asked for.
  for (const { id, lesson } of LESSONS) {
    for (const sec of lesson.sections) {
      if (sec.type !== 'reading') continue;
      const s = sec as { glossary?: unknown[]; questionsInModal?: boolean; questions?: unknown[] };
      if (!s.glossary?.length) continue;
      ok(
        s.questionsInModal && s.questions?.length,
        `${where(id, lesson, sec)}: authors ${s.glossary.length} glossary entries but does not set ` +
        `questionsInModal with questions, so nothing renders them`
      );
    }
  }
});

test('no lesson ships an empty section', () => {
  // A section that renders nothing is a page the learner swipes past wondering
  // what they missed.
  for (const { id, lesson } of LESSONS) {
    for (const sec of lesson.sections) {
      const s = sec as Record<string, unknown>;
      const hasBody =
        typeof s.body === 'string' ||
        typeof s.text === 'string' ||
        Array.isArray(s.cards) ||
        Array.isArray(s.bubbles) ||
        Array.isArray(s.groups) ||
        Array.isArray(s.items) ||
        Array.isArray(s.errors) ||
        Array.isArray(s.examples) ||
        Array.isArray(s.letters) ||
        Array.isArray(s.targets) ||
        Array.isArray(s.itemIds) ||
        Array.isArray(s.beats) ||
        Array.isArray(s.turns) ||
        Array.isArray(s.lines) ||
        Array.isArray(s.goals) ||
        Array.isArray(s.points) ||
        Array.isArray(s.questions) ||
        Array.isArray(s.rounds) ||
        Array.isArray(s.stats) ||
        Array.isArray(s.sounds) ||
        Array.isArray(s.cols) ||
        Array.isArray(s.themes) ||
        Array.isArray(s.hacks) ||
        Array.isArray(s.cases) ||
        Array.isArray(s.steps) ||
        Array.isArray(s.rows);
      ok(hasBody, `${where(id, lesson, sec)}: a ${sec.type} section with no content to render`);
    }
  }
});

test('an xl group drill never stacks words and a check in one group', () => {
  // GroupDrillView renders an xl group as a filling SwipeDeck. A group that
  // ALSO carries a check stacks the check under that deck, and its own comments
  // say what happens: "two competing floors ... the four-option check take[s]
  // what it wanted and squeeze[s] the deck to nothing". The check lands below
  // the fold, so the learner never answers it, and the hero card the mission
  // exists to show renders short.
  //
  // The schema already states the rule ("at that size the words and their check
  // are separate pages, so a group carries EITHER items OR a check"), and the
  // component repeats it, and nothing enforced it. a1.07.l1's s10-eleven shipped
  // the shape at v3 and was found by looking at a phone, not by any test here.
  //
  // The house pattern is a words mission followed by its own control page:
  // sons.05, sons.06, sons.10, a1.03, a1.11 and a1.29 all do it. sons.07 and
  // sons.09 use the other legal shape, a multi-group xl drill whose check is its
  // OWN group. Both keep one thing per screen, which is the point.
  for (const { id, lesson } of LESSONS) {
    for (const sec of lesson.sections) {
      if (sec.type !== 'groupDrill') continue;
      if ((sec as { size?: string }).size !== 'xl') continue;
      for (const [i, g] of sec.groups.entries()) {
        const words = g.items?.length ?? 0;
        if (words > 0 && g.check) {
          ok(
            false,
            `${where(id, lesson, sec)}: groups[${i}] carries ${words} words AND a check at size xl. ` +
            `Split them into a words mission and a control page, or give the check its own group.`,
          );
        }
      }
    }
  }
});

/* ─── 5. Teaching lessons feed the SRS; assessment lessons declare that they
        do not ──────────────────────────────────────────────────────────────
   These three mirror the `lesson-has-practice` gate in
   ealch-admin/scripts/publish-content.ts. They are duplicated here on purpose.
   That gate only speaks at publish time, against Postgres, and on 2026-08-09 it
   was the thing that discovered — after the content was authored, applied and
   committed — that the A1 capstone could not ship at all. `pnpm test` runs in
   ten seconds and should have been able to say so first.

   ealch-admin has no unit-test harness (Playwright only), so the rule cannot be
   tested where it lives. Testing its CONSEQUENCE on the seed is the next best
   thing, and the seed is what the gate is protecting. */

const isAssessment = (l: Lesson) => l.features?.includes('assessment') === true;
const practicesOf = (l: Lesson) => l.sections.filter((s) => s.type === 'practice');

test('every teaching lesson ships resolvable practice, as the publish gate demands', () => {
  // The gate's reason, verbatim: a lesson referencing no items feeds the SRS
  // nothing and the Den's progress bars divide by zero. Catching it here means
  // catching it before the content is applied to Postgres, not after.
  for (const { id, lesson } of LESSONS) {
    if (isAssessment(lesson)) continue;
    const practices = practicesOf(lesson);
    ok(practices.length > 0, `${id}: no practice section. Author one, or mark the lesson features: ['assessment'].`);
    for (const p of practices) {
      const ids = (p as { itemIds?: string[] }).itemIds ?? [];
      ok(ids.length > 0, `${id} (${idOf(p)}): practice section with an empty itemIds`);
      for (const itemId of ids) ok(ITEM_IDS.has(itemId), `${id} (${idOf(p)}): itemIds -> ${itemId} is not in the corpus`);
    }
    ok(lesson.itemIds.length > 0, `${id}: Lesson.itemIds is empty, so the lesson releases no SRS cards`);
  }
});

test('an assessment lesson owns no corpus rows and carries no practice', () => {
  // The marker is a claim about what the lesson IS, and this is the claim being
  // checked. A lesson that says 'assessment' while owning rows is either
  // mislabelled or is a teaching lesson exempting itself from the gate — which
  // is exactly the hole a negative test (infer 'assessment' from missing
  // practice) would have left open.
  for (const { id, lesson } of LESSONS) {
    if (!isAssessment(lesson)) continue;
    strictEqual(lesson.itemIds.length, 0, `${id}: claims 'assessment' but owns ${lesson.itemIds.length} corpus rows`);
    strictEqual(practicesOf(lesson).length, 0, `${id}: claims 'assessment' but carries a practice section`);
  }
});

/* ─── 6. An authored source may not be poorer than what ships ─────────────
   The drift this catches is silent in every direction that matters. A lesson's
   body has three copies — the authored source in ealch-admin, the row in
   Postgres, and seed.json — and only the last two are ever compared. A source
   that has fallen behind looks fine, validates fine, and does nothing at all
   until somebody re-runs its batch, at which point the poorer copy is written
   over the richer one and the loss is discovered later, by hand, if at all. */

const ADMIN_DATA = join(here, '../../../ealch-admin/scripts/data');
const scenarioOf = (l: Lesson | undefined) =>
  (l?.sections ?? []).find((s) => s.type === 'scenario') as { turns?: { userEn?: string; alts?: unknown[] }[] } | undefined;
/** A turn is "rich" when it carries the two fields the role-play rebuild added.
 *  Counting them is enough: the failure mode is always losing them wholesale. */
const richTurns = (l: Lesson | undefined) =>
  (scenarioOf(l)?.turns ?? []).filter((t) => t.alts || t.userEn).length;

let SOURCES: { id: string; file: string; lesson: Lesson }[] = [];
let adminPresent = false;

before(async () => {
  // ealch-admin is a sibling package and a checkout may not have it. Absent is
  // a skip, never a failure — the same self-skipping the per-lesson tests use.
  adminPresent = existsSync(ADMIN_DATA);
  if (!adminPresent) return;
  const seen = new Set<string>();
  for (const f of readdirSync(ADMIN_DATA).filter((x) => x.endsWith('-lesson.ts'))) {
    let mod: Record<string, unknown>;
    try {
      mod = (await import(`../../../ealch-admin/scripts/data/${f}`)) as Record<string, unknown>;
    } catch {
      continue; // a source that cannot even load is another test's problem
    }
    for (const v of Object.values(mod)) {
      const l = v as Lesson;
      if (!l || typeof l !== 'object' || Array.isArray(l) || typeof l.id !== 'string' || !Array.isArray(l.sections)) continue;
      if (seen.has(l.id)) continue;
      seen.add(l.id);
      SOURCES.push({ id: l.id, file: f, lesson: l });
    }
  }
});

test('no authored lesson source has fewer role-play answers than the seed', () => {
  if (!adminPresent) return;
  ok(SOURCES.length > 0, 'ealch-admin is present but no lesson source could be loaded');
  const bySeedId = new Map(seed.lessons.map((l) => [l.id, l]));
  for (const { id, file, lesson } of SOURCES) {
    const shipped = bySeedId.get(id);
    if (!shipped) continue; // authored but not merged yet: not this guard's business
    const src = richTurns(lesson);
    const shp = richTurns(shipped);
    ok(
      src >= shp,
      `${id} (${file}): the source has ${src} enriched turns and the seed has ${shp}. ` +
      `Running this lesson's batch would overwrite ${shp - src} turn(s) of authored answers. ` +
      `The answers live in ealch-admin/scripts/data/scenario-alts.ts — wrap the export in withScenarioAlts().`,
    );
  }
});

/* ─── 7. A quiz question may not carry a field nothing renders ────────────
   The third instance of "authored, valid, invisible" this file has had to
   answer for, and the most expensive: a1.25 authored `say` on two listening
   questions and a1.16 authored `prompt` on two errorSpot questions, both
   passed the schema, both shipped in v22, and neither field was read by any
   card. The listening questions played the English option instead of the
   French sentence — which is also the correct answer, said out loud. The
   errorSpot questions asked the learner to correct a phrase that appeared
   nowhere on screen.

   Both fields are wired now. This is the guard for the next one, and it is
   written as an ALLOWLIST because the failure is always a field nobody thought
   to look for: an unknown key fails until somebody either renders it or
   deletes it. */
const QUESTION_FIELDS = new Set([
  'q', 'format', 'opts', 'correct', 'accept', 'answer', 'word',
  'target', 'ipa', 'scoreSegment', 'audio', 'say', 'prompt', 'why', 'ref',
]);

test('no quiz question carries a field the cards do not read', () => {
  const seen = new Map<string, string[]>();
  for (const { id, lesson } of LESSONS) {
    for (const sec of lesson.sections) {
      if (sec.type !== 'quiz') continue;
      const qs = [
        ...((sec as { questions?: unknown[] }).questions ?? []),
        ...(((sec as { rounds?: { questions?: unknown[] }[] }).rounds ?? []).flatMap((r) => r.questions ?? [])),
      ] as Record<string, unknown>[];
      for (const q of qs) {
        for (const k of Object.keys(q)) {
          if (QUESTION_FIELDS.has(k)) continue;
          const where = seen.get(k) ?? [];
          if (!where.includes(id)) where.push(id);
          seen.set(k, where);
        }
      }
    }
  }
  const unknown = [...seen.entries()].map(([k, ids]) => `"${k}" in ${ids.join(', ')}`);
  strictEqual(
    unknown.join(' | '),
    '',
    `quiz question field(s) no card reads, so a learner never sees them: ${unknown.join(' | ')}. ` +
    `Render it, delete it, or add it to QUESTION_FIELDS once QuizQuestion and a card both know about it.`,
  );
});

test("only the A1 capstone claims 'assessment'", () => {
  // Not a style rule. The flag is the one way past lesson-has-practice, so its
  // spread is worth noticing: a third lesson acquiring it should be a decision
  // somebody makes, not a line that arrives inside a large diff. Widen this
  // list deliberately when a B1 or B2 bilan lands.
  const marked = LESSONS.filter(({ lesson }) => isAssessment(lesson)).map(({ id }) => id).sort();
  ok(
    marked.length > 0,
    "no lesson claims 'assessment'. If the A1 capstone lost the flag it can no longer be published — see bilan-lesson.ts.",
  );
  strictEqual(marked.join(', '), 'a1.30.l1, a1.30.l2', `unexpected assessment lessons: ${marked.join(', ')}`);
});
