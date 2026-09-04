// TCF Canada blanc-01, against the format's rules.
//
// The rules live in scripts/tcf/paper-rules.ts so papers 2-5 are checked by the
// same file rather than by five copies that drift.
import { ok } from 'node:assert';
import { test } from 'node:test';
import { validateExamPaper, validateExamTask } from '../../../ealch-v2/src/content/schema.ts';
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
