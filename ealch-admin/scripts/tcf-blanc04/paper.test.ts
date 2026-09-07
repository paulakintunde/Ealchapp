// TCF Canada blanc-04, against the format's rules.
//
// The rules live in scripts/tcf/paper-rules.ts so every paper is checked by the
// same file rather than by five copies that drift. What is below is what must
// be true of THIS paper and of its relation to the ones already authored.
//
// The cross-paper checks compare against EVERY earlier paper, not just the
// previous one. Comparing only to your neighbour is how a chain of individually
// valid papers ends up with two non-adjacent ones sharing a key sequence.
import { deepStrictEqual, ok, strictEqual } from 'node:assert';
import { test } from 'node:test';
import { validateExamPaper, validateExamTask } from '../../../ealch-v2/src/content/schema.ts';
import { weightedRaw } from '../../../ealch-v2/src/utils/nclc.logic.ts';
import { tcfPaperRules } from '../tcf/paper-rules.ts';
import { PAPER, TASKS, CO_TASKS, CE_TASKS, EE_TASKS, EO_TASKS } from './paper.ts';
import { CO_TASKS as CO1, CE_TASKS as CE1 } from '../tcf-blanc01/paper.ts';
import { CO_TASKS as CO2, CE_TASKS as CE2 } from '../tcf-blanc02/paper.ts';
import { CO_TASKS as CO3, CE_TASKS as CE3 } from '../tcf-blanc03/paper.ts';

tcfPaperRules({
  name: 'tcf blanc-04',
  paperNo: 4,
  variant: 'blanc-04',
  PAPER,
  TASKS,
  CO_TASKS,
  CE_TASKS,
  EE_TASKS,
  EO_TASKS,
});

test('tcf blanc-04: the schema accepts every task and the paper', () => {
  for (const t of TASKS) {
    const issues = validateExamTask(t);
    ok(issues.length === 0, `${t.id}: ${issues.map((i) => `${i.path} ${i.message}`).join(' · ')}`);
  }
  const p = validateExamPaper(PAPER);
  ok(p.length === 0, p.map((i) => `${i.path} ${i.message}`).join(' · '));
});

test('tcf blanc-04: each section clock matches the blueprint', () => {
  const want: Record<string, number> = { CO: 2100, CE: 3600, PE: 3600, PO: 720 };
  for (const sec of PAPER.sections) {
    ok(sec.timingS === want[sec.skill], `${sec.skill}: ${sec.timingS}s, blueprint says ${want[sec.skill]}s`);
  }
});

test('tcf blanc-04: a perfect paper indexes to exactly the weighted maximum', () => {
  const co = PAPER.sections.find((s) => s.skill === 'CO')!.scoring!;
  const ramp = { a1: 3, a2: 6, b1: 10, b2: 10, c1: 7, c2: 3 };
  strictEqual(weightedRaw(ramp, co.weights), 105);
});

/* ── Against every earlier paper ───────────────────────────────────────────*/

const EARLIER: [string, typeof CO_TASKS, typeof CE_TASKS][] = [
  ['blanc-01', CO1, CE1],
  ['blanc-02', CO2, CE2],
  ['blanc-03', CO3, CE3],
];

const idsOf = (tasks: typeof CO_TASKS) => tasks.map((t) => t.id);
const keySeq = (tasks: typeof CO_TASKS): number[] =>
  tasks.flatMap((t) => (t.parts ? t.parts.flatMap((p) => p.items) : (t.items ?? []))).map((i) => i.correct);
const textOf = (tasks: typeof CO_TASKS): string[] =>
  tasks.flatMap((t) => (t.parts ?? []).map((p) => p.text ?? '')).filter(Boolean);

test('tcf blanc-04: no task id collides with an earlier paper', () => {
  const mine = new Set([...idsOf(CO_TASKS), ...idsOf(CE_TASKS)]);
  for (const [name, co, ce] of EARLIER) {
    for (const id of [...idsOf(co), ...idsOf(ce)]) {
      ok(!mine.has(id), `${id} belongs to both blanc-04 and ${name}`);
    }
  }
});

test('tcf blanc-04: the answer key differs from every earlier paper', () => {
  for (const [name, co, ce] of EARLIER) {
    for (const [ep, mine, theirs] of [
      ['CO', keySeq(CO_TASKS), keySeq(co)],
      ['CE', keySeq(CE_TASKS), keySeq(ce)],
    ] as const) {
      strictEqual(mine.length, theirs.length, `${ep}: blanc-04 and ${name} have different item counts`);
      const same = mine.filter((k, i) => k === theirs[i]).length;
      ok(same < mine.length, `${ep}: blanc-04 has ${name}'s exact key sequence`);
      ok(
        same / mine.length < 0.5,
        `${ep}: ${same} of ${mine.length} keys sit where ${name}'s do`
      );
    }
  }
});

test('tcf blanc-04: no document is reused from an earlier paper', () => {
  const mine = new Set(textOf([...CO_TASKS, ...CE_TASKS]).map((t) => t.slice(0, 80)));
  for (const [name, co, ce] of EARLIER) {
    for (const t of textOf([...co, ...ce])) {
      ok(!mine.has(t.slice(0, 80)), `a document opens identically in blanc-04 and ${name}: ${t.slice(0, 50)}`);
    }
  }
});

test('tcf blanc-04: every open task carries a rubric and a model answer', () => {
  for (const t of [...EE_TASKS, ...EO_TASKS]) {
    ok((t.rubric?.criteria ?? []).length >= 3, `${t.label}: fewer than three criteria`);
    ok((t.modelAnswer ?? '').length > 200, `${t.label}: model answer is too short to mark against`);
    deepStrictEqual(t.targetItemIds, undefined, `${t.label}: an open task has no atoms to route to`);
  }
});

test('tcf blanc-04: the interaction task can answer what the document invites', () => {
  const t = EO_TASKS.find((x) => x.taskType === 'po_interaction')!;
  const bank = t.interlocutor!;
  ok(bank.answers.length >= 6, `only ${bank.answers.length} answers in the bank`);
  for (const a of bank.answers) {
    ok(a.cues.length > 0, `${a.id}: no cues, so it can never be selected`);
    ok(a.covers.length > 0, `${a.id}: no description of what it covers`);
  }
  // Reachability is about CUES, not ids: an id is a label for us, a cue is what
  // the candidate actually says. Matching on ids failed on blanc-02 while its
  // bank was perfectly correct.
  for (const needle of ['correspondance', 'indemnisation', 'hotel', 'bagage', 'refus']) {
    ok(
      bank.answers.some((a) => a.cues.some((c) => c.includes(needle)) || a.id.includes(needle)),
      `no cue would reach an answer about "${needle}"`
    );
  }
  ok(t.prepS !== undefined && t.prepS > 0, 'tâche 2 prep is clocked separately and must be set');
});
