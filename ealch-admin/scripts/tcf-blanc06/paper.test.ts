// TCF Canada blanc-06, against the format's rules.
//
// The rules live in scripts/tcf/paper-rules.ts so every paper is checked by the
// same file rather than by six copies that drift. What is below is what must
// be true of THIS paper and of its relation to the ones already authored.
//
// The cross-paper checks compare against EVERY earlier paper, not just the
// previous one. Comparing only to your neighbour is how a chain of individually
// valid papers ends up with two non-adjacent ones sharing a key sequence.
//
// blanc-06 exists for decision 41 (C1-BUILD-LOG): a normal TCF paper whose
// tâche 3 in each open épreuve is pitched and tagged at c1, so PE@c1 and PO@c1
// route from TCF. That property is checked here so nobody "tidies" it back to
// the b2 of papers 1 to 5.
import { deepStrictEqual, ok, strictEqual } from 'node:assert';
import { test } from 'node:test';
import { validateExamPaper, validateExamTask } from '../../../ealch-v2/src/content/schema.ts';
import { weightedRaw } from '../../../ealch-v2/src/utils/nclc.logic.ts';
import { tcfPaperRules } from '../tcf/paper-rules.ts';
import { PAPER, TASKS, CO_TASKS, CE_TASKS, EE_TASKS, EO_TASKS } from './paper.ts';
import { CO_TASKS as CO1, CE_TASKS as CE1 } from '../tcf-blanc01/paper.ts';
import { CO_TASKS as CO2, CE_TASKS as CE2 } from '../tcf-blanc02/paper.ts';
import { CO_TASKS as CO3, CE_TASKS as CE3 } from '../tcf-blanc03/paper.ts';
import { CO_TASKS as CO4, CE_TASKS as CE4 } from '../tcf-blanc04/paper.ts';
import { CO_TASKS as CO5, CE_TASKS as CE5 } from '../tcf-blanc05/paper.ts';

tcfPaperRules({
  name: 'tcf blanc-06',
  paperNo: 6,
  variant: 'blanc-06',
  PAPER,
  TASKS,
  CO_TASKS,
  CE_TASKS,
  EE_TASKS,
  EO_TASKS,
});

test('tcf blanc-06: the schema accepts every task and the paper', () => {
  for (const t of TASKS) {
    const issues = validateExamTask(t);
    ok(issues.length === 0, `${t.id}: ${issues.map((i) => `${i.path} ${i.message}`).join(' · ')}`);
  }
  const p = validateExamPaper(PAPER);
  ok(p.length === 0, p.map((i) => `${i.path} ${i.message}`).join(' · '));
});

test('tcf blanc-06: each section clock matches the blueprint', () => {
  const want: Record<string, number> = { CO: 2100, CE: 3600, PE: 3600, PO: 720 };
  for (const sec of PAPER.sections) {
    ok(sec.timingS === want[sec.skill], `${sec.skill}: ${sec.timingS}s, blueprint says ${want[sec.skill]}s`);
  }
});

test('tcf blanc-06: the task budgets sum to their section clock', () => {
  // Not a paper-rules check, and blanc-01..05 all hold it: the per-task
  // timingS are a split of the section, so a task lengthened without taking
  // the time from a neighbour silently overruns the épreuve.
  for (const [skill, tasks] of [['CO', CO_TASKS], ['CE', CE_TASKS], ['PE', EE_TASKS], ['PO', EO_TASKS]] as const) {
    const sec = PAPER.sections.find((s) => s.skill === skill)!;
    strictEqual(tasks.reduce((n, t) => n + (t.timingS ?? 0), 0), sec.timingS, `${skill} budgets`);
  }
});

test('tcf blanc-06: a perfect paper indexes to exactly the weighted maximum', () => {
  const co = PAPER.sections.find((s) => s.skill === 'CO')!.scoring!;
  const ramp = { a1: 3, a2: 6, b1: 10, b2: 10, c1: 7, c2: 3 };
  strictEqual(weightedRaw(ramp, co.weights), 105);
});

/* ── Decision 41: the top open tasks are C1 ─────────────────────────────────*/

test('tcf blanc-06: tâche 3 of each open épreuve is c1, tâches 1 and 2 are not', () => {
  // The whole reason this paper exists. PE@c1 and PO@c1 route a failed
  // attempt to c1.10 and c1.09 only if a task is tagged c1.
  const levels = (tasks: typeof EE_TASKS) => tasks.map((t) => t.level);
  deepStrictEqual(levels(EE_TASKS), ['a2', 'b1', 'c1']);
  deepStrictEqual(levels(EO_TASKS), ['a2', 'b1', 'c1']);
});

test('tcf blanc-06: the C1 tâches keep the real format, only the demand moves', () => {
  const t3 = EE_TASKS[2]!;
  const spec = t3.responseSpec as { minWords?: number; maxWords?: number };
  strictEqual(spec.minWords, 120, 'EE tâche 3 floor is the format’s 120 words');
  strictEqual(spec.maxWords, 180, 'EE tâche 3 ceiling is the format’s 180 words');
  const words = (s: string) => s.split(/\s+/).filter(Boolean).length;
  const model = words(t3.modelAnswer ?? '');
  ok(model >= 120 && model <= 180, `EE tâche 3 model answer is ${model} words, outside 120-180`);
  // Both source documents written, each inside STANDARD-tcf §5's 90-140.
  for (const m of (t3.prompt ?? '').matchAll(/TEXTE [AB] · « ([^»]+) »/g)) {
    const n = words(m[1]!);
    ok(n >= 90 && n <= 140, `a source document is ${n} words, outside 90-140`);
  }
  strictEqual([...(t3.prompt ?? '').matchAll(/TEXTE [AB] · «/g)].length, 2, 'two source documents');

  const eo3 = EO_TASKS[2]!;
  strictEqual(eo3.timingS, 270, 'EO tâche 3 is the format’s 4 min 30');
  strictEqual(eo3.prepS, undefined, 'EO tâche 3 has no preparation');
  for (const t of [t3, eo3]) {
    ok((t.rubric?.criteria ?? []).length >= 4, `${t.label}: a C1 rubric needs four criteria or more`);
    ok(
      (t.rubric?.criteria ?? []).some((c) => /C1/.test(c.label)),
      `${t.label}: no criterion says it is marking at C1`
    );
    ok((t.examinerNotes ?? []).some((n) => /C1/.test(n)), `${t.label}: examiner notes do not flag C1`);
  }
});

test('tcf blanc-06: every model answer sits inside its own word bounds', () => {
  const words = (s: string) => s.split(/\s+/).filter(Boolean).length;
  for (const t of EE_TASKS) {
    const spec = t.responseSpec as { minWords: number; maxWords: number };
    const n = words(t.modelAnswer ?? '');
    ok(n >= spec.minWords && n <= spec.maxWords, `${t.label}: model answer ${n} words, bounds ${spec.minWords}-${spec.maxWords}`);
  }
});

/* ── Against every earlier paper ───────────────────────────────────────────*/

const EARLIER: [string, typeof CO_TASKS, typeof CE_TASKS][] = [
  ['blanc-01', CO1, CE1],
  ['blanc-02', CO2, CE2],
  ['blanc-03', CO3, CE3],
  ['blanc-04', CO4, CE4],
  ['blanc-05', CO5, CE5],
];

const idsOf = (tasks: typeof CO_TASKS) => tasks.map((t) => t.id);
const keySeq = (tasks: typeof CO_TASKS): number[] =>
  tasks.flatMap((t) => (t.parts ? t.parts.flatMap((p) => p.items) : (t.items ?? []))).map((i) => i.correct);
const textOf = (tasks: typeof CO_TASKS): string[] =>
  tasks.flatMap((t) => (t.parts ?? []).map((p) => p.text ?? '')).filter(Boolean);

test('tcf blanc-06: no task id collides with an earlier paper', () => {
  const mine = new Set([...idsOf(CO_TASKS), ...idsOf(CE_TASKS)]);
  for (const [name, co, ce] of EARLIER) {
    for (const id of [...idsOf(co), ...idsOf(ce)]) {
      ok(!mine.has(id), `${id} belongs to both blanc-06 and ${name}`);
    }
  }
});

test('tcf blanc-06: the answer key differs from every earlier paper', () => {
  for (const [name, co, ce] of EARLIER) {
    for (const [ep, mine, theirs] of [
      ['CO', keySeq(CO_TASKS), keySeq(co)],
      ['CE', keySeq(CE_TASKS), keySeq(ce)],
    ] as const) {
      strictEqual(mine.length, theirs.length, `${ep}: blanc-06 and ${name} have different item counts`);
      const same = mine.filter((k, i) => k === theirs[i]).length;
      ok(same < mine.length, `${ep}: blanc-06 has ${name}'s exact key sequence`);
      ok(same / mine.length < 0.5, `${ep}: ${same} of ${mine.length} keys sit where ${name}'s do`);
    }
  }
});

test('tcf blanc-06: no visible A-B-C or C-B-A run inside a document', () => {
  // The rule the DALF scatter enforces (67d7205), checked here on the TCF
  // scatter's output. Inside one document is where a candidate SEES it: three
  // questions on one recording keyed A, B, C read as a pattern, not a paper.
  for (const t of [...CO_TASKS, ...CE_TASKS]) {
    for (const p of t.parts ?? []) {
      const k = p.items.map((i) => i.correct);
      for (let i = 2; i < k.length; i += 1) {
        const up = k[i - 2]! + 1 === k[i - 1]! && k[i - 1]! + 1 === k[i]!;
        const down = k[i - 2]! - 1 === k[i - 1]! && k[i - 1]! - 1 === k[i]!;
        ok(!up && !down, `${t.label} / ${p.label}: keys ${k.join(' ')} hold a run`);
      }
    }
  }
});

test('tcf blanc-06: no document is reused from an earlier paper', () => {
  const mine = new Set(textOf([...CO_TASKS, ...CE_TASKS]).map((t) => t.slice(0, 80)));
  for (const [name, co, ce] of EARLIER) {
    for (const t of textOf([...co, ...ce])) {
      ok(!mine.has(t.slice(0, 80)), `a document opens identically in blanc-06 and ${name}: ${t.slice(0, 50)}`);
    }
  }
});

test('tcf blanc-06: every open task carries a rubric and a model answer', () => {
  for (const t of [...EE_TASKS, ...EO_TASKS]) {
    ok((t.rubric?.criteria ?? []).length >= 3, `${t.label}: fewer than three criteria`);
    ok((t.modelAnswer ?? '').length > 200, `${t.label}: model answer is too short to mark against`);
    deepStrictEqual(t.targetItemIds, undefined, `${t.label}: an open task has no atoms to route to`);
  }
});

test('tcf blanc-06: the interaction task can answer what the document invites', () => {
  const t = EO_TASKS.find((x) => x.taskType === 'po_interaction')!;
  const bank = t.interlocutor!;
  ok(bank.answers.length >= 6, `only ${bank.answers.length} answers in the bank`);
  for (const a of bank.answers) {
    ok(a.cues.length > 0, `${a.id}: no cues, so it can never be selected`);
    ok(a.covers.length > 0, `${a.id}: no description of what it covers`);
  }
  // Reachability is about CUES, not ids. The listing is deliberately silent on
  // price, dates, heating, winter access, deposit and cancellation, so each of
  // those has to be answerable or the exchange stalls on our gap.
  for (const needle of ['prix', 'disponible', 'chauffage', 'acces', 'caution', 'annulation', 'chien']) {
    ok(
      bank.answers.some((a) => a.cues.some((c) => c.includes(needle)) || a.id.includes(needle)),
      `no cue would reach an answer about "${needle}"`
    );
  }
  ok(t.prepS !== undefined && t.prepS > 0, 'tâche 2 prep is clocked separately and must be set');
});

/* ── The pack, six papers ──────────────────────────────────────────────────*/

test('tcf: six papers, and no two of them share a single listening document', () => {
  // Restated from blanc-05 with the sixth paper in it: each paper checks
  // itself against its predecessors, and this is the one place all six are
  // visible together.
  const packs: [string, typeof CO_TASKS][] = [
    ['blanc-01', CO1],
    ['blanc-02', CO2],
    ['blanc-03', CO3],
    ['blanc-04', CO4],
    ['blanc-05', CO5],
    ['blanc-06', CO_TASKS],
  ];
  const seen = new Map<string, string>();
  for (const [name, co] of packs) {
    for (const t of textOf(co)) {
      const head = t.slice(0, 80);
      const owner = seen.get(head);
      ok(!owner, `a listening document is shared by ${owner} and ${name}: ${t.slice(0, 50)}`);
      seen.set(head, name);
    }
  }
  strictEqual(seen.size, 24 * 6, 'six papers should hold 144 distinct listening documents');
});
