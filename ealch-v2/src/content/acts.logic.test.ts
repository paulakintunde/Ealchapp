import { deepStrictEqual, ok, strictEqual } from 'node:assert';
import { test } from 'node:test';
import {
  RESUME_LOOKBACK,
  WARM_BACK_DAYS,
  actForSection,
  actSectionsSoFar,
  checkpointFor,
  isActEnd,
  isRestPoint,
  releasedThrough,
  resumePlan,
  stoppingPoints,
  tranche,
  warmBackQuestions,
} from './acts.logic.ts';
import type { Lesson } from './schema.ts';

const DAY = 24 * 60 * 60 * 1000;

/** Three acts over six sections, with a quiz carrying refs back into them. */
const lesson = {
  id: 'x.01.l1',
  unitId: 'x.01',
  seq: 1,
  title: 'T',
  level: 'sons',
  tag: 'T',
  intro: 'i',
  version: 1,
  itemIds: ['fr.sons.m.001', 'fr.sons.m.002', 'fr.sons.m.003'],
  sections: [
    { type: 'teach', id: 's1', title: 'A', body: 'b' },
    { type: 'teach', id: 's2', title: 'B', body: 'b' },
    { type: 'teach', id: 's3', title: 'C', body: 'b' },
    { type: 'teach', id: 's4', title: 'D', body: 'b' },
    { type: 'teach', id: 's5', title: 'E', body: 'b' },
    {
      type: 'quiz',
      id: 's6',
      title: 'Q',
      rounds: [
        {
          id: 'r1',
          label: 'R',
          questions: [
            { q: 'q1', opts: ['a', 'b'], correct: 0, why: 'w', ref: 's1' },
            { q: 'q2', opts: ['a', 'b'], correct: 1, why: 'w', ref: 's2' },
            { q: 'q3', opts: ['a', 'b'], correct: 0, why: 'w', ref: 's1' },
            { q: 'q4', opts: ['a', 'b'], correct: 1, why: 'w', ref: 's1' },
            { q: 'q5', format: 'typeIn', accept: ['x'], why: 'w', ref: 's1' },
            { q: 'q6', opts: ['a', 'b'], correct: 0, why: 'w', ref: 's4' },
          ],
        },
      ],
    },
  ],
  acts: [
    { id: 'a1', title: 'One', sections: ['s1', 's2'], milestone: 'm1', estScreens: 10, restPoints: ['s1/mid'] },
    { id: 'a2', title: 'Two', sections: ['s3', 's4'], milestone: 'm2', estScreens: 10 },
    { id: 'a3', title: 'Three', sections: ['s5', 's6'], milestone: 'm3', estScreens: 10 },
  ],
  deckTranche: [
    ['fr.sons.m.001'],
    ['fr.sons.m.002', 'fr.sons.m.999'], // 999 is not taught: must be filtered
    ['fr.sons.m.003'],
  ],
} as unknown as Lesson;

test('a section resolves to the act that claims it', () => {
  strictEqual(actForSection(lesson, 's1')?.id, 'a1');
  strictEqual(actForSection(lesson, 's4')?.id, 'a2');
  strictEqual(actForSection(lesson, 'nope'), null);
});

test('the checkpoint is the LAST section of an act, not every section', () => {
  ok(!isActEnd(lesson, 's1'), 'mid-act');
  ok(isActEnd(lesson, 's2'), 'act 1 ends here');
  ok(!isActEnd(lesson, 's3'));
  ok(isActEnd(lesson, 's4'));
  ok(isActEnd(lesson, 's6'));
});

test('rest points are recognised by their section half', () => {
  // Authored as 's1/mid': the marker names a spot only the renderer can reach.
  ok(isRestPoint(lesson, 's1'));
  ok(!isRestPoint(lesson, 's2'));
});

test('stopping points come back in lesson order', () => {
  const stops = stoppingPoints(lesson);
  deepStrictEqual(
    stops.map((s) => `${s.sectionId}:${s.kind}`),
    ['s1:rest', 's2:checkpoint', 's4:checkpoint', 's6:checkpoint']
  );
});

test('a checkpoint carries its act, its progress and what it releases', () => {
  const cp = checkpointFor(lesson, 's2');
  ok(cp);
  strictEqual(cp!.act.id, 'a1');
  strictEqual(cp!.actIndex, 0);
  strictEqual(Math.round(cp!.progress * 100), 33);
  deepStrictEqual(cp!.releases, ['fr.sons.m.001']);
  ok(!cp!.isFinal);

  const last = checkpointFor(lesson, 's6');
  ok(last!.isFinal, 'the final act ends the lesson');

  strictEqual(checkpointFor(lesson, 's1'), null, 'mid-act is not a checkpoint');
});

test('TRANCHES RELEASE AT CHECKPOINTS, NOT ALL AT THE END', () => {
  // The rule: cards arrive as they are taught. An hour-long lesson must not
  // dump every new item into review the moment it finishes.
  deepStrictEqual(tranche(lesson, 0), ['fr.sons.m.001']);
  deepStrictEqual(tranche(lesson, 1), ['fr.sons.m.002']);
  deepStrictEqual(tranche(lesson, 2), ['fr.sons.m.003']);
  // Cumulative view: reaching act 2 means two cards are in review, not three.
  deepStrictEqual(releasedThrough(lesson, 0), ['fr.sons.m.001']);
  deepStrictEqual(releasedThrough(lesson, 1), ['fr.sons.m.001', 'fr.sons.m.002']);
  deepStrictEqual(releasedThrough(lesson, 2), ['fr.sons.m.001', 'fr.sons.m.002', 'fr.sons.m.003']);
});

test('a tranche can never release a word the lesson does not teach', () => {
  // fr.sons.m.999 is in the tranche and not in itemIds: it must be dropped,
  // or the SRS schedules a card the learner has never seen.
  ok(!tranche(lesson, 1).includes('fr.sons.m.999'));
});

test('resume lands two screens back', () => {
  const plan = resumePlan(lesson, 4, 0);
  strictEqual(plan.sectionIx, 4 - RESUME_LOOKBACK);
  ok(plan.showRecap);
  strictEqual(plan.act?.id, 'a3');
});

test('resume never goes below the first section, and skips the recap early on', () => {
  // Two screens in, there is nothing to back up to and nothing to recap.
  const early = resumePlan(lesson, 1, 0);
  strictEqual(early.sectionIx, 0);
  ok(!early.showRecap);

  const first = resumePlan(lesson, 0, 0);
  strictEqual(first.sectionIx, 0);
  ok(!first.showRecap);
});

test('an out-of-range position is clamped rather than trusted', () => {
  const plan = resumePlan(lesson, 999, 0);
  strictEqual(plan.sectionIx, lesson.sections.length - 1 - RESUME_LOOKBACK);
});

test('a warm-back fires only after more than three days away', () => {
  strictEqual(resumePlan(lesson, 4, 0).warmBack, null, 'same sitting');
  strictEqual(resumePlan(lesson, 4, 2 * DAY).warmBack, null, 'two days');
  strictEqual(resumePlan(lesson, 4, WARM_BACK_DAYS * DAY).warmBack, null, 'exactly three days is not MORE than three');
  const long = resumePlan(lesson, 4, 4 * DAY).warmBack;
  ok(long, 'four days away');
  strictEqual(long!.questions, 3);
});

test('the warm-back covers the act just COMPLETED, not the one in progress', () => {
  // Returning mid-act-3, the material that has faded is act 2's.
  const plan = resumePlan(lesson, 4, 5 * DAY);
  strictEqual(plan.warmBack?.act.id, 'a2');
});

test('there is no warm-back during the first act', () => {
  // Nothing has been completed yet, so there is nothing to warm back over.
  const plan = resumePlan(lesson, 1, 30 * DAY);
  strictEqual(plan.warmBack, null);
});

test('warm-back questions come from the completed act and are answerable', () => {
  const act = lesson.acts![0];
  const qs = warmBackQuestions(lesson, act);
  strictEqual(qs.length, 3, 'capped at three');
  for (const q of qs) {
    ok(act.sections.includes(q.ref!), `"${q.q}" refers to this act`);
    // Closed formats only: a way back in, not a typing test.
    ok(Array.isArray(q.opts) && typeof q.correct === 'number');
  }
});

test('an act short of its own questions tops up from what came before', () => {
  // A quiz `ref` points at where a rule was TAUGHT, and teaching clusters in
  // the middle acts, so a later act often refers to few of its own sections.
  // Rather than show a one-question warm-back, the pool widens to everything
  // already seen — which is still, by definition, material this learner has
  // been taught.
  const act3 = lesson.acts![2];
  const own = ['s5', 's6'];
  const qs = warmBackQuestions(lesson, act3);
  ok(qs.length > 0, 'act 3 gets a warm-back even though few questions name its sections');
  const seen = new Set(lesson.acts!.slice(0, 3).flatMap((a) => a.sections));
  for (const q of qs) ok(seen.has(q.ref!), `"${q.q}" refers to something already taught`);
  ok(!qs.some((q) => !seen.has(q.ref!)), 'nothing from a future act leaks in');
  void own;
});

test('the first act has nothing to warm back over', () => {
  // Nothing precedes it, so the pool is genuinely empty. resumePlan never
  // offers a warm-back there either, so this is consistent rather than a gap.
  const qs = warmBackQuestions(lesson, lesson.acts![0], 3);
  strictEqual(qs.filter((q) => !lesson.acts![0].sections.includes(q.ref!)).length, 0);
});

test('the recap covers the act up to where the learner stopped', () => {
  const soFar = actSectionsSoFar(lesson, 's4');
  deepStrictEqual(soFar.map((s) => (s as { id: string }).id), ['s3', 's4']);
  const partial = actSectionsSoFar(lesson, 's3');
  deepStrictEqual(partial.map((s) => (s as { id: string }).id), ['s3']);
});

test('a pre-v2 lesson has no acts and no checkpoints', () => {
  const flat = { ...lesson, acts: undefined, deckTranche: undefined } as unknown as Lesson;
  strictEqual(actForSection(flat, 's1'), null);
  strictEqual(checkpointFor(flat, 's2'), null);
  deepStrictEqual(stoppingPoints(flat), []);
  deepStrictEqual(tranche(flat, 0), []);
  // Resume still works: it just never shows an act name.
  strictEqual(resumePlan(flat, 4, 0).sectionIx, 2);
});
