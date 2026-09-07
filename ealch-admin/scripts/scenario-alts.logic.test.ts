// withScenarioAlts: attaching the role-play answers, and refusing to guess.
//
// The behaviour under test is what stops fourteen lesson sources from writing
// their own bare turns over the enriched ones in seed.json and Postgres.
//
// Driven off the real SCENARIO_ALTS rather than a fixture, so a change to that
// file cannot leave these tests passing against a shape nobody ships.

import { deepStrictEqual, ok, strictEqual, throws } from 'node:assert';
import { test } from 'node:test';
import { SCENARIO_ALTS } from './data/scenario-alts.ts';
import { scenarioAltsIssues, withScenarioAlts } from './scenario-alts.logic.ts';

const LESSON_ID = Object.keys(SCENARIO_ALTS)[0];
const ROWS = SCENARIO_ALTS[LESSON_ID];

/** The lesson as an author writes it BEFORE enrichment: model lines only. */
const bareLesson = () => ({
  id: LESSON_ID,
  sections: [
    { type: 'goals', id: 's01' },
    {
      type: 'scenario',
      id: 's02',
      turns: ROWS.map((r) => ({ ai: 'Bonjour ?', en: 'Hello?', user: r.user })),
    },
  ],
});

type TestTurn = { ai: string; en: string; user: string; userEn?: string; alts?: { fr: string; en: string }[] };
const scenarioOf = (l: { sections: { type: string }[] }) =>
  l.sections.find((s) => s.type === 'scenario') as unknown as { turns: TestTurn[] };

test('it attaches userEn and alts to every turn', () => {
  const out = withScenarioAlts(bareLesson());
  const turns = scenarioOf(out).turns;
  strictEqual(turns.length, ROWS.length);
  turns.forEach((t, i) => {
    strictEqual(t.userEn, ROWS[i].userEn, `turn ${i} keeps its translation`);
    strictEqual(t.alts?.length, ROWS[i].alts.length, `turn ${i} keeps every accepted answer`);
  });
});

test('it is pure: the authored lesson is a module const and must not be mutated', () => {
  // The sources export these as `const`, and the batch, the merge script and
  // the tests all read the same object. Mutating it would make the second
  // caller see the first caller's work.
  const input = bareLesson();
  const before = JSON.stringify(input);
  withScenarioAlts(input);
  strictEqual(JSON.stringify(input), before, 'the input is untouched');
});

test('a lesson with no entry in scenario-alts.ts comes back unchanged', () => {
  // Every batch calls this, including the ones for lessons with no role play.
  const other = { id: 'zz.99.l9', sections: [{ type: 'scenario', turns: [{ ai: 'a', en: 'b', user: 'c' }] }] };
  strictEqual(withScenarioAlts(other), other, 'returned by identity, not rebuilt');
});

test('it REFUSES when the model line has been re-authored underneath it', () => {
  // The checksum. Answers attached to a sentence that has since changed are
  // invisible in review and wrong on a device.
  const l = bareLesson();
  scenarioOf(l).turns[0].user = 'Une phrase que personne n a jamais écrite ici.';
  throws(() => withScenarioAlts(l), /model line has changed/);
});

test('it REFUSES when the turn count no longer matches', () => {
  const l = bareLesson();
  scenarioOf(l).turns.pop();
  throws(() => withScenarioAlts(l), /turns, scenario-alts\.ts has/);
});

test('a lesson already carrying the SAME answers is a no-op, not a conflict', () => {
  // a1.03's source was back-filled by hand after a re-render destroyed five
  // turns. That copy is correct and must survive being enriched again.
  const enriched = withScenarioAlts(bareLesson());
  deepStrictEqual(scenarioAltsIssues(enriched), [], 'no complaint about its own output');
  const twice = withScenarioAlts(enriched);
  strictEqual(JSON.stringify(twice), JSON.stringify(enriched), 'idempotent');
});

test('a lesson carrying DIFFERENT answers is a stop, and says so', () => {
  // The one case that must not be resolved by guessing: two sources of truth
  // disagree, and only a person knows which is stale. a1.07 was exactly this.
  const l = withScenarioAlts(bareLesson());
  scenarioOf(l).turns[0].alts = [{ fr: 'Une autre réponse.', en: 'A different answer.' }];
  const issues = scenarioAltsIssues(l);
  ok(issues.length > 0, 'it complains');
  ok(issues[0].includes('already carries DIFFERENT answers'), issues[0]);
  throws(() => withScenarioAlts(l), /Reconcile them by hand/);
});

test('key order alone is not a difference', () => {
  // Postgres round-trips jsonb with its own key order. Comparing raw strings
  // here reported every correct turn in a1.06 as a conflict.
  const l = withScenarioAlts(bareLesson());
  const t0 = scenarioOf(l).turns[0];
  t0.alts = t0.alts!.map((a) => ({ en: a.en, fr: a.fr }));
  deepStrictEqual(scenarioAltsIssues(l), [], 'reordered keys are the same answers');
});
