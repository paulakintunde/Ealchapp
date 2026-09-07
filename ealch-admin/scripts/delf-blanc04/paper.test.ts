// DELF B2 blanc-04, against the format's rules.
//
// The rules live in delf/paper-rules.ts and are exercised on deliberately
// broken input in its own test. What runs here is the call: this paper, every
// rule, one list of violations rather than a death on the first.
import { ok } from 'node:assert';
import { test } from 'node:test';
import { validateExamPaper, validateExamTask } from '../../../ealch-v2/src/content/schema.ts';
import { delfPaperViolations } from '../delf/paper-rules.ts';
import * as blanc04 from './paper.ts';

test('delf blanc-04: the schema accepts every task and the paper', () => {
  for (const t of blanc04.TASKS) {
    const issues = validateExamTask(t);
    ok(issues.length === 0, `${t.id}: ${issues.map((i) => `${i.path} ${i.message}`).join(' · ')}`);
  }
  const p = validateExamPaper(blanc04.PAPER);
  ok(p.length === 0, p.map((i) => `${i.path} ${i.message}`).join(' · '));
});

test('delf blanc-04: every rule of the format', () => {
  const problems = delfPaperViolations(blanc04);
  ok(problems.length === 0, `blanc-04 breaks the format:\n  ${problems.join('\n  ')}`);
});
