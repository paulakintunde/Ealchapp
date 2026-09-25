// The graded production task, `task`.
//
// It sat in the B1 drafts for weeks as a type in `ealch-admin`'s
// `_task-section.ts` that the schema did not know and nothing could draw. All
// fourteen lessons authored one, the validators had to be run on
// `lessonWithoutTask()`, and the dev preview flattened it into a `teach` card
// so the shape survived. This is the section becoming real.
//
// What is NOT done yet: the LLM grading path. The shipped behaviour is
// self-check against the model answer, which works offline and never blocks
// the lesson on a network call. These tests pin the pieces that exist.
import { ok, deepStrictEqual } from 'node:assert';
import { test } from 'node:test';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { SECTION_TYPES, validateSection } from './schema.ts';

const here = dirname(fileURLToPath(import.meta.url));
const read = (rel: string) => readFileSync(resolve(here, '..', rel), 'utf8');

/** A minimal valid task, so each test can break exactly one thing. */
const good = () => ({
  type: 'task' as const,
  id: 'a11-mission',
  title: 'Raconte',
  brief: 'Tu écris à un ami.',
  produce: 'Écris un message de 80 mots.',
  responseSpec: { kind: 'text' as const, minWords: 80, maxWords: 120 },
  rubric: { criteria: [{ key: 'temps', label: 'Les temps du passé', maxPoints: 4 }] },
  modelAnswer: 'Quand j’étais petit, nous allions au lac.',
  watchFor: [{ pattern: 'present tense', criterion: 'temps', feedback: 'Repasse à l’imparfait.' }],
});

test('task is a section type the schema knows', () => {
  ok((SECTION_TYPES as readonly string[]).includes('task'), 'task must be in SECTION_TYPES');
  deepStrictEqual(validateSection(good()), []);
});

test('a task without a model answer is refused: the offline self-check has no yardstick', () => {
  const s: Record<string, unknown> = { ...good() };
  delete s.modelAnswer;
  const issues = validateSection(s);
  ok(issues.some((i) => /modelAnswer/.test(i.message)), JSON.stringify(issues));
});

test('a task with no criteria is refused: nothing could be graded or checked', () => {
  const issues = validateSection({ ...good(), rubric: { criteria: [] } });
  ok(issues.some((i) => /criteria is empty/.test(i.message)), JSON.stringify(issues));
});

test('a watchFor naming no rubric key is refused', () => {
  const issues = validateSection({
    ...good(),
    watchFor: [{ pattern: 'x', criterion: 'nope', feedback: 'y' }],
  });
  ok(issues.some((i) => /names no rubric key/.test(i.message)), JSON.stringify(issues));
});

test('a repeated criterion key is refused', () => {
  const issues = validateSection({
    ...good(),
    rubric: { criteria: [
      { key: 'temps', label: 'A', maxPoints: 2 },
      { key: 'temps', label: 'B', maxPoints: 2 },
    ] },
  });
  ok(issues.some((i) => /is repeated/.test(i.message)), JSON.stringify(issues));
});

test('responseSpec must say text or audio', () => {
  const issues = validateSection({ ...good(), responseSpec: { kind: 'video' } });
  ok(issues.some((i) => /responseSpec.kind/.test(i.message)), JSON.stringify(issues));
});

test('the renderer draws a task rather than falling through to the title-only fallback', () => {
  const src = read('components/MissionSection.tsx');
  ok(/case 'task':/.test(src), 'MissionSection must handle task');
  ok(src.includes('<TaskView'), 'the task case must render TaskView');
});

test('the task view works with no network: model answer and self-check, no grader call', () => {
  const src = read('components/TaskView.tsx');
  ok(src.includes('modelAnswer'), 'the model answer is the offline yardstick');
  // Strip comments first. This guard read the whole file and failed the moment
  // the component EXPLAINED why it cannot call the Examiner's grader: the words
  // "grade-exam" and "examGrader" in a comment tripped a check meant for code.
  // A guard that forbids naming a thing stops anyone documenting it.
  const code = src.replace(/\/\*[\s\S]*?\*\//g, '').replace(/^\s*\/\/.*$/gm, '');
  ok(!/fetch\(|supabase|examGrader|grade-exam/.test(code), 'the shipped path must not depend on a network call');
  // The criteria are shown before writing. That is what makes it formative
  // rather than a test, and it is why this is not an ExamTask.
  ok(src.includes('CE QUI COMPTE'), 'the criteria must be visible before the learner writes');
});
