// The DELF rules, fired on purpose.
//
// Every rule here is exercised against input built to break it. A rule proved
// only against a paper that satisfies it has been proved to do nothing, and
// two of the rules below exist because exactly that happened during blanc-01:
// the attribution check sorted both sides before comparing and passed while the
// six items really did present four names in six different orders, and the
// audio ceiling multiplied by playCount and measured playback rather than the
// set of documents.
import { deepStrictEqual, ok, strictEqual } from 'node:assert';
import { test } from 'node:test';
import type { ExamDebate, ExamTask } from '../../../ealch-v2/src/content/schema.ts';
import {
  attributionViolations,
  audioCeilingViolations,
  debateBalanceViolations,
  debateDepthViolations,
  imageViolations,
  itemViolations,
  keyScatterViolations,
  listeningClockViolations,
  openTaskViolations,
  playCountViolations,
  sectionClockViolations,
  topicLedgerViolations,
  weightingViolations,
} from './paper-rules.ts';

/* ── fixtures ─────────────────────────────────────────────────────────────── */

const item = (correct = 0, points = 1, opts = ['a', 'b', 'c', 'd']) =>
  ({ q: 'q', opts, correct, band: 'b2' as const, points });

/**
 * Marks spread across `n` questions in HALF-POINTS that sum exactly.
 *
 * Even division does not: 9/7 seven times is 9.000000000000002, and 7/6 six
 * times is 7.000000000000001, which made the weighting rule look broken when it
 * was reporting the truth about the fixture. Real papers weight in half-points
 * for the same reason the grid does, and those sum exactly in binary.
 */
function halfPoints(n: number, marks: number): number[] {
  const halves = Math.round(marks * 2);
  const base = Math.floor(halves / n);
  const extra = halves - base * n;
  return Array.from({ length: n }, (_, i) => (base + (i < extra ? 1 : 0)) / 2);
}

/** A closed task of `n` questions worth `marks` in total. */
const closed = (id: string, n: number, marks: number, keys?: number[]): ExamTask => {
  const w = halfPoints(n, marks);
  return {
    id, format: 'delf_b2', variant: 'blanc-99', taskType: 'ce_mcq', skill: 'CE',
    level: 'b2', formatVersion: 'x', prompt: 'p', timingS: 60,
    parts: [{ label: 'L', text: 't', items: Array.from({ length: n }, (_, i) => item(keys?.[i] ?? i % 4, w[i]!)) }],
  } as ExamTask;
};

/** CO exercises worth 9/9/7 across 7/7/6 questions, keys spread over all four. */
const co = (): ExamTask[] => [
  { ...closed('co1', 7, 9, [0, 1, 2, 3, 0, 1, 2]), taskType: 'co_mcq', skill: 'CO',
    parts: [{ label: 'D1', text: 't', durationS: 180, playCount: 2, readWindowS: 60,
      items: halfPoints(7, 9).map((p, i) => item([0, 1, 2, 3, 0, 1, 2][i]!, p)) }] } as ExamTask,
  { ...closed('co2', 7, 9, [3, 2, 1, 0, 3, 2, 1]), taskType: 'co_mcq', skill: 'CO',
    parts: [{ label: 'D2', text: 't', durationS: 180, playCount: 2, readWindowS: 60,
      items: halfPoints(7, 9).map((p, i) => item([3, 2, 1, 0, 3, 2, 1][i]!, p)) }] } as ExamTask,
  { ...closed('co3', 6, 7), taskType: 'co_mcq', skill: 'CO',
    parts: [0, 1, 2].map((k) => ({ label: `S${k}`, text: 't', durationS: 60, playCount: 1, readWindowS: 20,
      items: [item(k, halfPoints(6, 7)[k * 2]!), item((k + 1) % 4, halfPoints(6, 7)[k * 2 + 1]!)] })) } as ExamTask,
];

const debate = (): ExamDebate => {
  const moves = (kinds: string[]) => kinds.map((kind, i) => ({ id: `m${i}`, text: 't', cues: [], covers: 'c', kind, depth: 1 }));
  const axis = (id: string, against: 'pour' | 'contre', kinds: string[]) => ({ id, against, about: 'a', moves: moves(kinds) });
  const three = (side: 'pour' | 'contre') => [
    axis(`${side}1`, side, ['counter', 'consequence', 'concession', 'retreat']),
    axis(`${side}2`, side, ['probe', 'counter-example', 'steelman']),
    axis(`${side}3`, side, ['counter', 'consequence', 'probe']),
  ];
  return {
    question: 'q',
    opening: { id: 'o', text: 't', cues: [], covers: 'c' },
    clarify: { id: 'cl', text: 't', cues: [], covers: 'c' },
    closing: { id: 'cz', text: 't', cues: [], covers: 'c' },
    sideCues: { pour: ['p'], contre: ['c'] },
    axes: [...three('pour'), ...three('contre')],
  } as ExamDebate;
};

/* ── the instrument ───────────────────────────────────────────────────────── */

test('the weighting rule catches a paper that is not 9, 9, 7 and 25', () => {
  deepStrictEqual(weightingViolations('CO', [closed('a', 7, 9), closed('b', 7, 9), closed('c', 6, 7)]), []);
  // 8/8/9 totals 25 and is still not this format.
  ok(weightingViolations('CO', [closed('a', 7, 8), closed('b', 7, 8), closed('c', 6, 9)]).some((v) => v.includes('9, 9 and 7')));
  // Right marks, wrong question counts.
  ok(weightingViolations('CO', [closed('a', 6, 9), closed('b', 8, 9), closed('c', 6, 7)]).some((v) => v.includes('7, 7 and 6')));
  // Every question weighted 1 — the equal-weighting paper the blueprint names.
  ok(weightingViolations('CO', [closed('a', 7, 7), closed('b', 7, 7), closed('c', 6, 6)]).some((v) => v.includes('totals 20')));
});

test('the item rule catches an untagged band, a missing weight and a stray decimal', () => {
  deepStrictEqual(itemViolations([closed('a', 4, 4)]), []);
  const noBand = closed('a', 1, 1);
  noBand.parts![0]!.items![0]!.band = undefined;
  ok(itemViolations([noBand]).some((v) => v.includes('one band')));

  const noPoints = closed('b', 1, 1);
  delete (noPoints.parts![0]!.items![0] as { points?: number }).points;
  ok(itemViolations([noPoints]).some((v) => v.includes('weighted 1')));

  const offGrid = closed('c', 1, 1);
  offGrid.parts![0]!.items![0]!.points = 1.3;
  ok(itemViolations([offGrid]).some((v) => v.includes('half-point grid')));
});

/* ── listening ────────────────────────────────────────────────────────────── */

test('the play-count rule holds exercises 1 and 2 to two plays', () => {
  deepStrictEqual(playCountViolations(co()), []);
  const once = co();
  once[0]!.parts![0]!.playCount = 1;
  ok(playCountViolations(once).some((v) => v.includes('plays 1, expected 2')));
});

test('the listening clock counts BOTH plays, not one', () => {
  // The rule the TCF module could not supply. Two 180s documents played twice
  // is 720s of audio before read windows and answering.
  const tasks = co();
  deepStrictEqual(listeningClockViolations(tasks, 1800), []);
  // A clock sized as though each document played once must fail.
  const onePlayBudget = 180 + 180 + 60 * 3 + 60 + 60 + 20 * 3 + 20 * 8;
  ok(listeningClockViolations(tasks, onePlayBudget).length > 0, 'a one-play clock must not pass');
});

test('the audio ceiling measures recorded documents, not playback', () => {
  // blanc-01's first version multiplied by playCount and failed at 902s on a
  // paper that was well inside the rule. 180+180+180 = 540s of documents here,
  // which is 900s of playback and must still pass.
  deepStrictEqual(audioCeilingViolations(co()), []);
  const long = co();
  long[0]!.parts![0]!.durationS = 800;
  ok(audioCeilingViolations(long).some((v) => v.includes('ceiling')));
});

/* ── the attribution ──────────────────────────────────────────────────────── */

const attribution = (opts: string[][], correct: number[]): ExamTask =>
  ({
    id: 'ce3', format: 'delf_b2', variant: 'blanc-99', taskType: 'ce_mcq', skill: 'CE',
    level: 'b2', formatVersion: 'x', prompt: 'p', timingS: 60,
    parts: [{ label: 'L', text: 't', items: opts.map((o, i) => ({ q: 'q', opts: o, correct: correct[i]!, band: 'b2' as const, points: 1 })) }],
  }) as ExamTask;

test('the attribution rule catches names presented in a different order', () => {
  // THE defect blanc-01's first version could not see, because it sorted both
  // sides before comparing. A candidate scanning the page sees six lists.
  const names = ['Awa', 'Bruno', 'Claire', 'Diego'];
  const same = attribution([names, names, names, names, names, names], [0, 1, 2, 3, 0, 1]);
  deepStrictEqual(attributionViolations(same), []);

  const shuffled = [...names].reverse();
  const mixed = attribution([names, shuffled, names, names, names, names], [0, 1, 2, 3, 0, 1]);
  ok(attributionViolations(mixed).some((v) => v.includes('different order')));
});

test('the attribution rule catches a decorative speaker and a dominating one', () => {
  const names = ['Awa', 'Bruno', 'Claire', 'Diego'];
  const rows = Array.from({ length: 6 }, () => names);
  // Diego answers nothing.
  ok(attributionViolations(attribution(rows, [0, 1, 2, 0, 1, 2])).some((v) => v.includes('decoration')));
  // Awa answers four of six.
  ok(attributionViolations(attribution(rows, [0, 0, 0, 0, 1, 2])).some((v) => v.includes('of 6 items')));
});

/* ── the key ──────────────────────────────────────────────────────────────── */

test('the key rule catches an unused option and a dominant one', () => {
  deepStrictEqual(keyScatterViolations('CO', co()), []);
  // Every answer is A: the unscattered draft.
  const flat = [closed('a', 7, 9, [0, 0, 0, 0, 0, 0, 0]), closed('b', 7, 9, [0, 0, 0, 0, 0, 0, 0]), closed('c', 6, 7, [0, 0, 0, 0, 0, 0])];
  const v = keyScatterViolations('CO', flat);
  ok(v.some((x) => x.includes('option 1 is never the answer')));
  ok(v.some((x) => x.includes('guessing it throughout')));
});

/* ── the débat ────────────────────────────────────────────────────────────── */

test('the débat rules catch a bank that can only attack one side', () => {
  deepStrictEqual(debateBalanceViolations(debate()), []);
  const oneSided = debate();
  oneSided.axes = oneSided.axes.filter((a) => a.against === 'pour');
  const v = debateBalanceViolations(oneSided);
  ok(v.some((x) => x.includes('attack "contre"')));
});

test('the débat rules catch a missing concession and a missing retreat', () => {
  const noConcession = debate();
  for (const a of noConcession.axes) a.moves = a.moves.filter((m) => m.kind !== 'concession');
  ok(debateBalanceViolations(noConcession).some((v) => v.includes('concession probe')));

  const noRetreat = debate();
  for (const a of noRetreat.axes) a.moves = a.moves.filter((m) => m.kind !== 'retreat');
  ok(debateBalanceViolations(noRetreat).some((v) => v.includes('retreat move')));
});

test('the débat depth rule catches a bank that runs dry before the clock', () => {
  // The failure the whole design exists for: a TEF-shaped bank of seven answers
  // closes in three minutes and leaves the examiner silent for ten.
  deepStrictEqual(debateDepthViolations(debate()), []);
  const thin = debate();
  for (const a of thin.axes) a.moves = a.moves.slice(0, 1);
  ok(debateDepthViolations(thin).some((v) => v.includes('non-retreat moves')));
});

/* ── the paper ────────────────────────────────────────────────────────────── */

const paperOf = (clocks: Record<string, number>) =>
  ({ sections: (['CO', 'CE', 'PE', 'PO'] as const).map((skill) => ({ skill, timingS: clocks[skill]!, taskIds: [], blueprintId: 'b' })) }) as never;

const mono = (prepS: number): ExamTask =>
  ({ id: 'po1', taskType: 'po_monologue', skill: 'PO', prepS } as ExamTask);

test('the clock rule catches a section and a preparation that drifted', () => {
  const ok4 = { CO: 1800, CE: 3600, PE: 3600, PO: 1200 };
  deepStrictEqual(sectionClockViolations(paperOf(ok4), [mono(1800)]), []);
  ok(sectionClockViolations(paperOf({ ...ok4, CO: 1500 }), [mono(1800)]).some((v) => v.includes('CO')));
  ok(sectionClockViolations(paperOf(ok4), [mono(600)]).some((v) => v.includes('thirty minutes')));
});

test('the image rule refuses a stimulus this format never has', () => {
  const clean = closed('a', 2, 2);
  deepStrictEqual(imageViolations([clean]), []);
  const withImage = closed('b', 2, 2);
  withImage.parts![0]!.imageRef = 'img/x.png';
  ok(imageViolations([withImage]).some((v) => v.includes('text and audio')));
});

test('the open-task rule catches a thin rubric and an unmarkable model answer', () => {
  const good = {
    label: 'PE', rubric: { criteria: [{ key: 'a', label: 'A', maxPoints: 4, descriptors: ['x'] }, { key: 'b', label: 'B', maxPoints: 4, descriptors: ['x'] }, { key: 'c', label: 'C', maxPoints: 4, descriptors: ['x'] }] },
    modelAnswer: 'x'.repeat(250), responseSpec: { kind: 'text', minWords: 250 },
  } as unknown as ExamTask;
  deepStrictEqual(openTaskViolations([good], []), []);

  const thin = { ...good, rubric: { criteria: [{ key: 'a', label: 'A', maxPoints: 4, descriptors: ['x'] }] } } as ExamTask;
  ok(openTaskViolations([thin], []).some((v) => v.includes('three rubric criteria')));

  const short = { ...good, modelAnswer: 'too short' } as ExamTask;
  ok(openTaskViolations([short], []).some((v) => v.includes('too short to mark against')));
});

/* ── the ledger ───────────────────────────────────────────────────────────── */

test('the topic ledger catches a row spent by two papers', () => {
  // TOPICS-delf-b2 rule 1, and the reason it is data rather than a comment: at
  // 124 rows against five papers spending 55, a collision is not visible by eye.
  const eleven = (n: number) => Array.from({ length: 11 }, (_, i) => `DELF-${n + i}`);
  deepStrictEqual(
    topicLedgerViolations([
      { variant: 'blanc-01', topics: eleven(1) },
      { variant: 'blanc-02', topics: eleven(20) },
    ]),
    []
  );

  const clash = topicLedgerViolations([
    { variant: 'blanc-01', topics: eleven(1) },
    { variant: 'blanc-02', topics: [...eleven(20).slice(0, 10), 'DELF-5'] },
  ]);
  ok(clash.some((v) => v.includes('DELF-5 is spent by both blanc-01 and blanc-02')));
});

test('the topic ledger catches a short draw and a row spent twice in one paper', () => {
  const ten = Array.from({ length: 10 }, (_, i) => `DELF-${i + 1}`);
  ok(topicLedgerViolations([{ variant: 'blanc-02', topics: ten }]).some((v) => v.includes('spends 10 topics')));
  // Eleven entries, ten distinct: a slot authored twice from one row, which the
  // count alone would not catch.
  ok(
    topicLedgerViolations([{ variant: 'blanc-02', topics: [...ten, 'DELF-3'] }])
      .some((v) => v.includes('spends DELF-3 twice'))
  );
});
