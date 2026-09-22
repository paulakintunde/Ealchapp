import { deepStrictEqual, ok, strictEqual } from 'node:assert';
import { test } from 'node:test';
import type { ExamSection, ExamTask } from '../content/schema.ts';
import { pinSitting, pinnedTasksOf, type SittingPin } from './examSitting.logic.ts';

function section(skill: ExamSection['skill'], taskIds: string[]): ExamSection {
  return { skill, taskIds, timingS: 2100, blueprintId: 'tcf-canada-2026.01' };
}

function task(id: string, prompt: string): ExamTask {
  return {
    id,
    format: 'tcf_canada',
    variant: '2024a',
    taskType: 'co_mcq',
    skill: 'CO',
    level: 'a1',
    formatVersion: 'v1',
    prompt,
    timingS: 60,
  };
}

test('pinSitting(null, null, []) resolves nothing yet', () => {
  strictEqual(pinSitting(null, null, []), null);
});

test('pinSitting freezes the first section and each task the first time it resolves', () => {
  const sectionA = section('CO', ['t1', 't2']);
  const t1v1 = task('t1', 'v1');

  // First resolution: only t1 has arrived so far.
  const pin1 = pinSitting(null, sectionA, [t1v1]);
  ok(pin1, 'a live section with at least one resolved task must produce a pin');
  strictEqual(pin1.section, sectionA);
  strictEqual(pin1.tasks.size, 1);
  strictEqual(pin1.tasks.get('t1'), t1v1);

  // t1 resolves again with a DIFFERENT object (a later corpus refresh) and t2
  // resolves for the first time (a legitimately late-resolving task, the case
  // the live tasks memo underneath this pin must keep supporting).
  const t1v2 = task('t1', 'v2');
  const t2v1 = task('t2', 'v1');
  const pin2 = pinSitting(pin1, sectionA, [t1v2, t2v1]);
  ok(pin2);
  strictEqual(pin2.section, sectionA, 'section stays frozen to the first one pinned');
  strictEqual(pin2.tasks.get('t1'), t1v1, 't1 must stay frozen at its first-resolved value, not the refreshed one');
  strictEqual(pin2.tasks.get('t2'), t2v1, 't2 must be added now that it has resolved for the first time');
  strictEqual(pin2.tasks.size, 2);

  // A refreshed paper (sectionB) swaps in a task (t3) not in the pinned
  // roster, and t1 resolves again with yet another object. Nothing new
  // resolves relative to what is already pinned, so pinSitting must return
  // the SAME reference — no new task in this section's roster resolved.
  const sectionB = section('CO', ['t1', 't3']);
  const t3v1 = task('t3', 'v1');
  const pin3 = pinSitting(pin2, sectionB, [task('t1', 'v3'), t3v1]);
  strictEqual(pin3, pin2, 'nothing new resolved in the pinned roster, so the same pin object must be returned');
  strictEqual(pin3?.section, sectionA, 'the refreshed paper must not replace the frozen section');
  ok(!pin3?.tasks.has('t3'), 't3 is not in sectionA\'s pinned roster and must never be added');
});

test('pinSitting(pin, sameSection, sameTasksAlreadyPinned) returns the same object reference', () => {
  const sectionA = section('CO', ['t1']);
  const t1 = task('t1', 'v1');
  const pin1 = pinSitting(null, sectionA, [t1]);
  ok(pin1);
  const pin2 = pinSitting(pin1, sectionA, [t1]);
  strictEqual(pin2, pin1, 'a reading that resolves nothing new must keep the same reference so React deps stay stable');
});

test('pinnedTasksOf orders by the pinned section\'s taskIds, skipping unresolved ids, and [] for null', () => {
  deepStrictEqual(pinnedTasksOf(null), []);

  const sectionA = section('CO', ['t1', 't2', 't3']);
  const t1 = task('t1', 'v1');
  const t3 = task('t3', 'v1');
  // t2 never resolves — the pin only ever saw t1 and t3.
  const pin: SittingPin = { section: sectionA, tasks: new Map([['t1', t1], ['t3', t3]]) };

  const ordered = pinnedTasksOf(pin);
  deepStrictEqual(
    ordered.map((t) => t.id),
    ['t1', 't3'],
    'must follow the section taskIds order and skip the unresolved t2'
  );
});
