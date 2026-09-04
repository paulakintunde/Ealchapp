// TCF Canada blanc-01, against the format's rules.
//
// The rules live in scripts/tcf/paper-rules.ts so papers 2-5 are checked by the
// same file rather than by five copies that drift.
import { ok, strictEqual } from 'node:assert';
import { test } from 'node:test';
import { validateExamPaper, validateExamTask } from '../../../ealch-v2/src/content/schema.ts';
import { weightedRaw } from '../../../ealch-v2/src/utils/nclc.logic.ts';
import { tcfPaperRules } from '../tcf/paper-rules.ts';
import { PAPER, TASKS, CO_TASKS, CE_TASKS, EE_TASKS, EO_TASKS } from './paper.ts';

tcfPaperRules({
  name: 'tcf blanc-01',
  paperNo: 1,
  variant: 'blanc-01',
  PAPER,
  TASKS,
  CO_TASKS,
  CE_TASKS,
  EE_TASKS,
  EO_TASKS,
});

test('tcf blanc-01: the schema accepts every task and the paper', () => {
  // The rules above are OUR standard. This is the model's, and a paper has to
  // pass both — apply-paper validates with exactly this before it writes.
  for (const t of TASKS) {
    const issues = validateExamTask(t);
    ok(issues.length === 0, `${t.id}: ${issues.map((i) => `${i.path} ${i.message}`).join(' · ')}`);
  }
  const p = validateExamPaper(PAPER);
  ok(p.length === 0, p.map((i) => `${i.path} ${i.message}`).join(' · '));
});

test('tcf blanc-01: each section clock matches the blueprint', () => {
  // Keyed by SKILL: ExamSection has no key field, and the EE section carries
  // skill 'PE' — the one place where the épreuve's name and its skill differ.
  const want: Record<string, number> = { CO: 2100, CE: 3600, PE: 3600, PO: 720 };
  for (const sec of PAPER.sections) {
    ok(sec.timingS === want[sec.skill], `${sec.skill}: ${sec.timingS}s, blueprint says ${want[sec.skill]}s`);
  }
});

test('tcf blanc-01: the two comprehension épreuves score by band, separately', () => {
  const co = PAPER.sections.find((s) => s.skill === 'CO')?.scoring;
  const ce = PAPER.sections.find((s) => s.skill === 'CE')?.scoring;
  ok(co?.weights && ce?.weights, 'a ramp that scores by raw count is not a TCF score');

  // §7: CO and CE do NOT share boundaries. Identical tables would mean the
  // reading and listening épreuves are equally hard at every point, which is
  // an assertion nobody made.
  ok(JSON.stringify(co!.nclc) !== JSON.stringify(ce!.nclc), 'CO and CE share an NCLC table');

  for (const s of [co!, ce!]) {
    // Ascending, non-overlapping, and reaching the top of the weighted range.
    let prev = -1;
    for (const r of s.nclc) {
      ok(r.minRaw === prev + 1, `gap or overlap at ${r.minRaw}`);
      ok(r.maxRaw >= r.minRaw, `inverted span at ${r.minRaw}`);
      // Every reported band is a RANGE or a deliberate single value, never
      // outside what the boards will put on paper.
      ok(r.nclcLow >= 4 && r.nclcHigh <= 10, `NCLC ${r.nclcLow}-${r.nclcHigh} is not reportable`);
      ok(r.nclcHigh >= r.nclcLow, `inverted NCLC at ${r.minRaw}`);
      prev = r.maxRaw;
    }
    strictEqual(prev, 105, 'the table must cover the whole weighted range');
    // The map rises and lands on the published maximum.
    const pts = [...s.map].sort((a, b) => a.raw - b.raw);
    strictEqual(pts[pts.length - 1]!.scaled, s.scale);
    for (let i = 1; i < pts.length; i += 1) ok(pts[i]!.scaled > pts[i - 1]!.scaled, 'the map must rise');
  }
});

test('tcf blanc-01: a perfect paper indexes to exactly the weighted maximum', () => {
  // The arithmetic that ties the weights to the ramp. If either changes without
  // the other, this is what says so.
  const co = PAPER.sections.find((s) => s.skill === 'CO')!.scoring!;
  const ramp = { a1: 3, a2: 6, b1: 10, b2: 10, c1: 7, c2: 3 };
  strictEqual(weightedRaw(ramp, co.weights), 105);
});
