// The marking surface — the guard.
//
// ── WHY THIS FILE EXISTS ────────────────────────────────────────────────────
//
// Until 2026-09-07 the exam report threw away the two things a candidate came
// for, and every test was green through it because nothing asserted a render.
//
//   `modelAnswer` is REQUIRED on every open task (schema.ts refuses to validate
//   one without) and was read in exactly one place: the request to the AI
//   grader. Measured across the corpus: 65 of 65 open tasks carry one, 0 of 65
//   were ever shown to anyone.
//
//   `aiGrade: { band, feedback }` is written onto every graded result in
//   exam-section.tsx. Its readers took `band` to compute pass or fail and
//   dropped `feedback` on the floor.
//
// So the failure was not a bug in a branch. It was a whole absent surface, and
// the only thing that could have caught it is a test that asserts the value
// REACHES the screen. That is what this file does, and why its assertions name
// the exact expressions rather than something adjacent to them: an assertion
// that `exam-report.tsx` merely mentions the word `modelAnswer` would have
// passed on the day the model answer was invisible, because the memo that
// built it was already there.
//
// Each guard below was proven by reintroducing its own defect — deleting the
// render and confirming this file goes red — because a guard that cannot fail
// is worse than no guard at all.

import { test } from 'node:test';
import { ok, strictEqual } from 'node:assert';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const here = dirname(fileURLToPath(import.meta.url));
const appDir = resolve(here, '../../app');
const i18nDir = resolve(here, '../i18n');

const report = () => readFileSync(resolve(appDir, 'exam-report.tsx'), 'utf8');

/** The body of GradedRow, so a match cannot be satisfied by the memo above it
 *  that merely COLLECTS the values. The two were the whole difference between
 *  the defect and the fix. */
function gradedRowBody(src: string): string {
  const from = src.indexOf('function GradedRow(');
  ok(from > 0, 'GradedRow must exist — the marking has no other renderer');
  const to = src.indexOf('\nfunction ', from + 1);
  return src.slice(from, to === -1 ? undefined : to);
}

test('the grader feedback is RENDERED, not just collected', () => {
  const body = gradedRowBody(report());
  // The prose itself, inside a text node. `g.feedback` appearing in a filter or
  // a memo would not put it on a screen.
  ok(/<TX[^>]*>\{g\.feedback\}<\/TX>/.test(body), 'g.feedback must be the child of a TX');
});

test('the model answer is RENDERED, not only sent to the grader', () => {
  const body = gradedRowBody(report());
  ok(/<TX[^>]*>\{g\.modelAnswer\}<\/TX>/.test(body), 'g.modelAnswer must be the child of a TX');

  // And the SITTING screen must still read it exactly once, to send to the
  // grader. A second read there would be a leak: the model answer on screen
  // mid-exam is the answer key in the candidate's hand.
  //
  // Counting `task.modelAnswer` rather than `modelAnswer`, because the single
  // existing line spells it twice (`modelAnswer: task.modelAnswer!`) and a bare
  // count reads 2 for one call site.
  const section = readFileSync(resolve(appDir, 'exam-section.tsx'), 'utf8');
  strictEqual(
    (section.match(/task\.modelAnswer/g) ?? []).length, 1,
    'exam-section.tsx reads the model answer once, to grade with',
  );
});

test('the model answer is behind a press, and says what it is when opened', () => {
  const body = gradedRowBody(report());
  // Collapsed by default: ~1,600 characters of French should not land on a
  // candidate before the reasons they were marked down.
  ok(/useState\(false\)/.test(body), 'the model answer starts closed');
  ok(/onPress=\{\(\) => setOpen/.test(body), 'opening it is a deliberate press');
  // The caveat travels WITH the answer. Without it a learner infers there was
  // one right answer they failed to produce, which is untrue of every open task.
  ok(body.includes('T.examModelNote'), 'the "not a key" note renders with the answer');
  const noteIx = body.indexOf('T.examModelNote');
  const ansIx = body.indexOf('{g.modelAnswer}');
  ok(noteIx > ansIx, 'the note sits with the answer it qualifies, not elsewhere');
});

test('marking is shown on a PASS too, not only on a failure', () => {
  const src = report();
  const from = src.indexOf('const gradings = useMemo');
  const to = src.indexOf('const due', from);
  const memo = src.slice(from, to);
  ok(from > 0 && to > from, 'the gradings memo must exist');
  // A `!r.passed` here would make this a punishment surface rather than a study
  // one, and would hide the marking on exactly the attempts worth learning from.
  ok(!/!\s*r\.passed/.test(memo), 'gradings must not filter out passed results');
  ok(/r\.aiGrade/.test(memo), 'gradings selects on the presence of a grade');
});

test('a result whose task left the corpus still shows its marking', () => {
  const src = report();
  // modelAnswer is nullable at the row, because a stored result can outlive a
  // corpus change. If that were non-null the row would crash on old data; if
  // the row required the task it would silently drop the feedback too.
  ok(/modelAnswer: task\?\.modelAnswer \?\? null/.test(src), 'the model answer degrades to null');
  const body = gradedRowBody(src);
  ok(/\{g\.modelAnswer \?/.test(body), 'the model-answer block is conditional');
  // The feedback is NOT conditional on the task: it comes off the result.
  ok(!/g\.feedback\s*\?/.test(body), 'feedback renders regardless of the task lookup');
});

test('both languages carry every new marking string', () => {
  const src = readFileSync(resolve(i18nDir, 'strings.ts'), 'utf8');
  const keys = [
    'examMarking', 'examMarkingSub', 'examGradedAt', 'examTargetBand',
    'examShowModel', 'examHideModel', 'examModelTitle', 'examModelNote',
  ];
  for (const k of keys) {
    // Once in the type, once in FR, once in EN.
    strictEqual((src.match(new RegExp(`\\b${k}\\b`, 'g')) ?? []).length, 3, `${k} declared and translated twice`);
  }
});

test('the band placeholders are substituted, never printed raw', () => {
  const body = gradedRowBody(report());
  // `{band}` reaching a screen is the classic i18n miss: it renders as literal
  // braces and reads as a broken app.
  ok(/examGradedAt\.replace\('\{band\}'/.test(body), 'examGradedAt substitutes its placeholder');
  ok(/examTargetBand\.replace\('\{band\}'/.test(body), 'examTargetBand substitutes its placeholder');
});

test('the house style holds in the new copy', () => {
  const src = readFileSync(resolve(i18nDir, 'strings.ts'), 'utf8');
  const lines = src.split('\n').filter((l) => /exam(Marking|MarkingSub|GradedAt|TargetBand|ShowModel|HideModel|ModelTitle|ModelNote)\s*:/.test(l));
  ok(lines.length >= 8, 'found the new copy lines');
  for (const l of lines) {
    ok(!l.includes('—'), `em dash in learner copy: ${l.trim()}`);
    ok(!/\bhonest/i.test(l), `banned word in learner copy: ${l.trim()}`);
  }
});
