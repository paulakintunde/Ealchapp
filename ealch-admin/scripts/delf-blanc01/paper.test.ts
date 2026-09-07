// DELF B2 blanc-01, against the format's rules.
//
// The rules moved to delf/paper-rules.ts when paper 2 was authored, which is
// precisely what the previous version of this file said should happen: "when
// paper 2 is authored, what has proved general here moves out — and what is
// specific to blanc-01 stays." All thirteen proved general, because all
// thirteen describe the FORMAT rather than this paper. Nothing stayed.
//
// What remains here is the call. The rules are exercised against deliberately
// broken input in delf/paper-rules.test.ts, because a rule proved only against
// a paper that satisfies it has been proved to do nothing.
import { ok } from 'node:assert';
import { test } from 'node:test';
import { validateExamPaper, validateExamTask } from '../../../ealch-v2/src/content/schema.ts';
import { delfPaperViolations } from '../delf/paper-rules.ts';
import * as blanc01 from './paper.ts';

test('delf blanc-01: the schema accepts every task and the paper', () => {
  for (const t of blanc01.TASKS) {
    const issues = validateExamTask(t);
    ok(issues.length === 0, `${t.id}: ${issues.map((i) => `${i.path} ${i.message}`).join(' · ')}`);
  }
  const p = validateExamPaper(blanc01.PAPER);
  ok(p.length === 0, p.map((i) => `${i.path} ${i.message}`).join(' · '));
});

test('delf blanc-01: every rule of the format', () => {
  const problems = delfPaperViolations(blanc01);
  ok(problems.length === 0, `blanc-01 breaks the format:\n  ${problems.join('\n  ')}`);
});
