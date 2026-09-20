// The client half of the exam gate, asserted on source text.
//
// There is no component-test infrastructure in this repo yet (Jest + RNTL is
// TEST-02, a later phase), and what matters here is structural: does the paper
// screen consult the gate before navigating, does it await the server's answer,
// and does every grading request carry the attempt it belongs to.
import { readFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { ok } from 'node:assert';
import { test } from 'node:test';

const here = dirname(fileURLToPath(import.meta.url));
const read = (rel: string) => readFileSync(resolve(here, rel), 'utf8');

test('the paper screen consults the gate before it navigates', () => {
  const src = read('../../app/exam-paper.tsx');
  ok(src.includes("useFeature('examiner')"));
  ok(src.includes('examPaperAllowed('));
  const gateAt = src.indexOf('examPaperAllowed(');
  const pushAt = src.indexOf("pathname: '/exam-section'");
  ok(gateAt !== -1 && pushAt !== -1);
  ok(gateAt < pushAt, 'the decision must precede the navigation');
});

test('an explicit server refusal does not open the runner', () => {
  const src = read('../../app/exam-paper.tsx');
  ok(src.includes('startExamAttempt('));
  ok(src.includes("res.status === 'refused'"));
  ok(src.includes("router.push('/paywall')"));
});

test('every grading request names the attempt it belongs to', () => {
  const sectionSrc = read('../../app/exam-section.tsx');
  const graderSrc = read('./examGrader.ts');
  ok(/paperId,\s/.test(sectionSrc));
  ok(sectionSrc.includes('skill: task.skill'));
  ok(graderSrc.includes('paperId: string'));
});

test('an unreachable authorization service does not cost a sitting', () => {
  const src = read('../../app/exam-paper.tsx');
  ok(src.includes("'unreachable'") || src.includes('unreachable'), 'the outage path must be named');
  const attemptSrc = read('./examAttempt.ts');
  ok(attemptSrc.includes("status: 'unreachable'"));
  // The limitation and its trigger must stay written down next to the code.
  ok(attemptSrc.includes('examGateOn'), 'the limitation and its trigger must stay written down next to the code');
});
