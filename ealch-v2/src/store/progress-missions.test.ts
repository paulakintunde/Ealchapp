// markMission is the single write path for per-mission completion + XP:
// dedupe on re-do, award exactly once, reset on a lesson version change so a
// re-authored (reordered) lesson can never show stale checks.
import { deepStrictEqual, strictEqual } from 'node:assert';
import { test } from 'node:test';
import { markMission, MISSION_XP, type LessonMissionRec } from './progress.logic.ts';

test('first completion creates the record and awards XP once', () => {
  const rec = markMission(undefined, 3, 4);
  deepStrictEqual(rec, { v: 3, done: [4], xp: MISSION_XP });
});

test('a second, different mission accumulates', () => {
  const rec = markMission({ v: 3, done: [4], xp: MISSION_XP }, 3, 7);
  deepStrictEqual(rec, { v: 3, done: [4, 7], xp: MISSION_XP * 2 });
});

test('re-doing a mission never double-awards', () => {
  const before: LessonMissionRec = { v: 3, done: [4, 7], xp: MISSION_XP * 2 };
  const rec = markMission(before, 3, 4);
  deepStrictEqual(rec, before);
});

test('a version change resets the record before marking', () => {
  const rec = markMission({ v: 3, done: [4, 7], xp: MISSION_XP * 2 }, 4, 1);
  deepStrictEqual(rec, { v: 4, done: [1], xp: MISSION_XP });
});

test('inputs are never mutated', () => {
  const before: LessonMissionRec = { v: 3, done: [4], xp: MISSION_XP };
  markMission(before, 3, 9);
  strictEqual(before.done.length, 1);
});
