// TCF Canada blanc-02, against the format's rules.
//
// The rules live in scripts/tcf/paper-rules.ts so papers 2-5 are checked by the
// same file rather than by five copies that drift. Everything below this line
// is what is TRUE OF THIS PAPER ALONE; anything true of the format belongs
// next door, and the scoring tables have already moved there for that reason.
import { deepStrictEqual, ok, strictEqual } from 'node:assert';
import { test } from 'node:test';
import { validateExamPaper, validateExamTask } from '../../../ealch-v2/src/content/schema.ts';
import { weightedRaw } from '../../../ealch-v2/src/utils/nclc.logic.ts';
import { tcfPaperRules } from '../tcf/paper-rules.ts';
import { PAPER, TASKS, CO_TASKS, CE_TASKS, EE_TASKS, EO_TASKS } from './paper.ts';
import { CO_TASKS as CO1, CE_TASKS as CE1 } from '../tcf-blanc01/paper.ts';

tcfPaperRules({
  name: 'tcf blanc-02',
  paperNo: 2,
  variant: 'blanc-02',
  PAPER,
  TASKS,
  CO_TASKS,
  CE_TASKS,
  EE_TASKS,
  EO_TASKS,
});

test('tcf blanc-02: the schema accepts every task and the paper', () => {
  // The rules above are OUR standard. This is the model's, and a paper has to
  // pass both — apply-paper validates with exactly this before it writes.
  for (const t of TASKS) {
    const issues = validateExamTask(t);
    ok(issues.length === 0, `${t.id}: ${issues.map((i) => `${i.path} ${i.message}`).join(' · ')}`);
  }
  const p = validateExamPaper(PAPER);
  ok(p.length === 0, p.map((i) => `${i.path} ${i.message}`).join(' · '));
});

test('tcf blanc-02: each section clock matches the blueprint', () => {
  // Keyed by SKILL: ExamSection has no key field, and the EE section carries
  // skill 'PE' — the one place where the épreuve's name and its skill differ.
  const want: Record<string, number> = { CO: 2100, CE: 3600, PE: 3600, PO: 720 };
  for (const sec of PAPER.sections) {
    ok(sec.timingS === want[sec.skill], `${sec.skill}: ${sec.timingS}s, blueprint says ${want[sec.skill]}s`);
  }
});

test('tcf blanc-02: a perfect paper indexes to exactly the weighted maximum', () => {
  // The scoring tables are now shared with blanc-01, so this is no longer a
  // check on THIS paper's numbers. It is a check that the shared table and the
  // ramp still agree, which is what would break if either moved.
  const co = PAPER.sections.find((s) => s.skill === 'CO')!.scoring!;
  const ramp = { a1: 3, a2: 6, b1: 10, b2: 10, c1: 7, c2: 3 };
  strictEqual(weightedRaw(ramp, co.weights), 105);
});

/* ── Against blanc-01, not against itself ──────────────────────────────────
 *
 * The failure this pack has already shipped once: five TEF papers, each
 * individually valid, sharing one answer key across all 80 questions, because
 * nothing ever compared two of them. These are the comparisons.
 */

const idsOf = (tasks: typeof CO_TASKS) => tasks.map((t) => t.id);
const keySeq = (tasks: typeof CO_TASKS): number[] =>
  tasks.flatMap((t) => (t.parts ? t.parts.flatMap((p) => p.items) : (t.items ?? []))).map((i) => i.correct);
const textOf = (tasks: typeof CO_TASKS): string[] =>
  tasks.flatMap((t) => (t.parts ?? []).map((p) => p.text ?? '')).filter(Boolean);

test('tcf blanc-02: no task id collides with blanc-01', () => {
  const mine = new Set([...idsOf(CO_TASKS), ...idsOf(CE_TASKS)]);
  for (const id of [...idsOf(CO1), ...idsOf(CE1)]) {
    ok(!mine.has(id), `${id} belongs to both papers`);
  }
});

test('tcf blanc-02: the answer key differs from blanc-01', () => {
  // scatterKeys seeds on format AND variant, so this should hold by
  // construction. It is asserted anyway, because it held by construction on TEF
  // too until the seed turned out to be the question's index.
  for (const [name, mine, theirs] of [
    ['CO', keySeq(CO_TASKS), keySeq(CO1)],
    ['CE', keySeq(CE_TASKS), keySeq(CE1)],
  ] as const) {
    strictEqual(mine.length, theirs.length, `${name}: the two papers have different item counts`);
    const same = mine.filter((k, i) => k === theirs[i]).length;
    ok(same < mine.length, `${name}: blanc-02 has blanc-01's exact key sequence`);
    ok(
      same / mine.length < 0.5,
      `${name}: ${same} of ${mine.length} keys sit in the same position as blanc-01`
    );
  }
});

test('tcf blanc-02: no document is reused from blanc-01', () => {
  // Topics are guaranteed distinct by the planner. Document TEXT is not: two
  // papers drawing different situations could still be written into the same
  // sentences by an author working from the same template.
  const mine = new Set(textOf([...CO_TASKS, ...CE_TASKS]).map((t) => t.slice(0, 80)));
  for (const t of textOf([...CO1, ...CE1])) {
    ok(!mine.has(t.slice(0, 80)), `a document opens identically in both papers: ${t.slice(0, 60)}`);
  }
});

test('tcf blanc-02: every open task carries a rubric and a model answer', () => {
  // reviewTier.ts puts every open task in the full-review tier, and a reviewer
  // with no model answer is being asked to invent the standard they mark to.
  for (const t of [...EE_TASKS, ...EO_TASKS]) {
    ok((t.rubric?.criteria ?? []).length >= 3, `${t.label}: fewer than three criteria`);
    ok((t.modelAnswer ?? '').length > 200, `${t.label}: model answer is too short to mark against`);
    deepStrictEqual(t.targetItemIds, undefined, `${t.label}: an open task has no atoms to route to`);
  }
});

test('tcf blanc-02: the interaction task can answer what the document invites', () => {
  // The recorded interlocutor is only as good as its coverage: a candidate who
  // asks the obvious question and gets the catch-all has met a broken exam.
  const t = EO_TASKS.find((x) => x.taskType === 'po_interaction')!;
  const bank = t.interlocutor!;
  ok(bank.answers.length >= 6, `only ${bank.answers.length} answers in the bank`);
  for (const a of bank.answers) {
    ok(a.cues.length > 0, `${a.id}: no cues, so it can never be selected`);
    ok(a.covers.length > 0, `${a.id}: no description of what it covers`);
  }
  // Every figure the prompt puts in front of the candidate must be REACHABLE,
  // which is a question about cues rather than about ids. Matching on the id
  // was the first version of this and it failed on `ajeun` while the bank was
  // perfectly correct: an id is a label for us, a cue is what the candidate
  // actually says.
  for (const needle of ['jeun', 'duree', 'horaire', 'cout', 'apporter', 'annul']) {
    ok(
      bank.answers.some((a) => a.cues.some((c) => c.includes(needle)) || a.id.includes(needle)),
      `no cue in the bank would reach an answer about "${needle}"`
    );
  }
  ok(t.prepS !== undefined && t.prepS > 0, 'tâche 2 prep is clocked separately and must be set');
});
