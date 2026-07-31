// The mission-derivation contract: roles, labels, stats and the CEFR display
// band are pure functions of a lesson's real sections. Pinned here against
// both a hand fixture and the live seed so a drive-by edit to the mapping
// goes red before it ships a wrong tag to the missions page.
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { deepStrictEqual, ok, strictEqual } from 'node:assert';
import { test } from 'node:test';
import { cefrLabel, missionLabel, missionRole, missionStats } from './missions.ts';
import type { Lesson, LessonSection } from './schema.ts';

test('roles: gates, badge, milestones, required', () => {
  strictEqual(missionRole('quiz'), 'gate');
  strictEqual(missionRole('progressCheck'), 'gate');
  strictEqual(missionRole('dictation'), 'gate');
  strictEqual(missionRole('roundup'), 'badge');
  strictEqual(missionRole('story'), 'milestone');
  strictEqual(missionRole('scenario'), 'milestone');
  strictEqual(missionRole('listening'), 'milestone');
  strictEqual(missionRole('reading'), 'milestone');
  strictEqual(missionRole('teach'), 'required');
  strictEqual(missionRole('cardDeck'), 'required');
  // Future/unknown types default to required, never crash.
  strictEqual(missionRole('somethingNew' as LessonSection['type']), 'required');
});

test('labels: fixed map, practice splits by skill, unknown falls back', () => {
  strictEqual(missionLabel({ type: 'story', title: 'x' } as LessonSection), 'HISTOIRE');
  strictEqual(missionLabel({ type: 'goals', title: 'x' } as LessonSection), 'OBJECTIFS');
  strictEqual(missionLabel({ type: 'trapDrill', title: 'x' } as LessonSection), 'PIÈGES');
  strictEqual(missionLabel({ type: 'pronunciationLab', title: 'x' } as LessonSection), 'LABO');
  strictEqual(missionLabel({ type: 'roundup', title: 'x' } as LessonSection), 'BADGE');
  strictEqual(missionLabel({ type: 'practice', title: 'x', skill: 'listen', itemIds: [] } as LessonSection), 'OREILLE');
  strictEqual(missionLabel({ type: 'practice', title: 'x', skill: 'speak', itemIds: [] } as LessonSection), 'MICRO');
  strictEqual(missionLabel({ type: 'practice', title: 'x', skill: 'read', itemIds: [] } as LessonSection), 'LECTURE');
  strictEqual(missionLabel({ type: 'practice', title: 'x', skill: 'write', itemIds: [] } as LessonSection), 'ÉCRIT');
  strictEqual(missionLabel({ type: 'somethingNew', title: 'x' } as unknown as LessonSection), 'MISSION');
});

test('stats: derived over a mixed fixture', () => {
  const sections = [
    { type: 'story', title: 'a' },
    { type: 'teach', title: 'b' },
    { type: 'dictation', title: 'c' },
    { type: 'quiz', title: 'd', questions: [] },
    { type: 'roundup', title: 'e', body: '', points: [] },
  ] as unknown as LessonSection[];
  deepStrictEqual(missionStats(sections), { missions: 5, required: 1, gates: 2, milestones: 1, badge: 1 });
});

test('cefr display band', () => {
  strictEqual(cefrLabel('sons'), 'A0');
  strictEqual(cefrLabel('a1'), 'A1');
  strictEqual(cefrLabel('a2'), 'A2');
  strictEqual(cefrLabel('b1'), 'B1');
});

test('the live seed derives sane stats for sons.02.l1', () => {
  const here = dirname(fileURLToPath(import.meta.url));
  const seed = JSON.parse(readFileSync(resolve(here, 'seed.json'), 'utf8')) as { lessons: Lesson[] };
  const L = seed.lessons.find((l) => l.id === 'sons.02.l1');
  ok(L, 'sons.02.l1 present');
  const s = missionStats(L!.sections);
  strictEqual(s.missions, L!.sections.length);
  strictEqual(s.missions, s.required + s.gates + s.milestones + s.badge, 'roles partition the sections');
  strictEqual(s.badge, 1, 'roundup present');
  ok(s.gates >= 2, 'quiz + progressCheck at minimum');
});
