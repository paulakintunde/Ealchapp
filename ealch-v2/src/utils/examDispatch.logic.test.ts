// The dispatch that shipped a broken paper.
//
// A DELF débat was authored, validated, rendered to twenty-nine clips and
// published, and the screen drew a plain recorder: the candidate talked and the
// examiner never raised an objection. Nothing failed anywhere, because every
// test exercised the logic module directly and none asked what would be drawn.
//
// These are the checks that would have caught it before a single credit was
// spent.
import { deepStrictEqual, ok, strictEqual } from 'node:assert';
import { readFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { test } from 'node:test';
import { EXAM_TASK_TYPES } from '../content/schema.ts';
import { SURFACE_BY_TASK_TYPE, surfaceFor, type ExamSurface } from './examDispatch.logic.ts';

const HERE = dirname(fileURLToPath(import.meta.url));
const appDir = resolve(HERE, '../../app');

test('every exam task type has a surface, with none left over', () => {
  // Totality in both directions. A missing entry is a task that draws nothing;
  // a stale extra is a type that was removed while its branch stayed, which is
  // how dead dispatch accumulates.
  deepStrictEqual(
    Object.keys(SURFACE_BY_TASK_TYPE).sort(),
    [...EXAM_TASK_TYPES].sort(),
    'the surface map and the task-type union have drifted apart'
  );
});

test('po_debate draws a debate, not a recorder', () => {
  // THE regression. `po_debate` carries skill 'PO' like the monologue, and the
  // old chain tested skill before task type — so it inherited the recorder and
  // the whole construct the task exists to measure silently disappeared.
  strictEqual(surfaceFor({ taskType: 'po_debate' }), 'debate');
  strictEqual(surfaceFor({ taskType: 'po_monologue' }), 'speak');
  strictEqual(surfaceFor({ taskType: 'po_interaction' }), 'interaction');

  // All three are skill 'PO' and all three draw something different. That is
  // the property the old dispatch could not express.
  const po: ExamSurface[] = (['po_monologue', 'po_interaction', 'po_debate'] as const).map((t) =>
    surfaceFor({ taskType: t })
  );
  strictEqual(new Set(po).size, 3, 'two PO task types collapsed onto one surface');
});

test('a listening task with no parts falls back to the closed surface', () => {
  // Honest degradation: show the questions rather than a player with nothing to
  // play. Distinct from the defect above, where the fallback hid a whole task.
  strictEqual(surfaceFor({ taskType: 'co_mcq', parts: [{ label: 'd1', items: [] }] }), 'listening');
  strictEqual(surfaceFor({ taskType: 'co_mcq' }), 'closed');
});

test('the section runner draws every surface the dispatch can return', () => {
  // The other half, and the half that was actually missing. A total map is
  // worth nothing if the screen has no branch for one of its values — which is
  // precisely the state this repo shipped in: `surfaceFor` would have said
  // 'debate' and exam-section.tsx had no such case.
  const src = readFileSync(resolve(appDir, 'exam-section.tsx'), 'utf8');
  const drawn = new Set(Object.values(SURFACE_BY_TASK_TYPE));
  for (const surface of drawn) {
    ok(
      src.includes(`case '${surface}'`) || src.includes(`'${surface}'`),
      `exam-section.tsx never mentions the "${surface}" surface, so a task that needs it draws nothing`
    );
  }
});

test('the debate surface is wired to a component that exists', () => {
  // Named explicitly rather than left to the loop above, because this is the
  // one that was missing and a generic message would not say what to do about
  // it. The pattern is on record: a component can be device-proven and imported
  // by nothing.
  const src = readFileSync(resolve(appDir, 'exam-section.tsx'), 'utf8');
  ok(src.includes('ExamDebateTask'), 'exam-section.tsx does not render ExamDebateTask');
  ok(
    readFileSync(resolve(HERE, '../components/ExamDebateTask.tsx'), 'utf8').includes('selectDebateMove'),
    'ExamDebateTask does not drive the debate state machine — it is a shell'
  );
});
