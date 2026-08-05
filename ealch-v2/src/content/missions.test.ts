// The mission-derivation contract: roles, labels, stats and the CEFR display
// band are pure functions of a lesson's real sections. Pinned here against
// both a hand fixture and the live seed so a drive-by edit to the mapping
// goes red before it ships a wrong tag to the missions page.
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { deepStrictEqual, ok, strictEqual } from 'node:assert';
import { test } from 'node:test';
import { cefrLabel, lessonEyebrow, missionLabel, missionRole, missionStats } from './missions.ts';
import type { Lesson, LessonSection, Unit } from './schema.ts';

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

test('the eyebrow numbers a lesson by its unit seq, not by its id', () => {
  // sons.10 IS the liaison unit but sits at seq 7, and sons.07 (elision) sits
  // at seq 8. The eyebrow must follow the walk order, not the id.
  strictEqual(lessonEyebrow({ level: 'sons', tag: 'SONS · LEÇON 10' }, { seq: 7 }), 'SONS · LEÇON 07');
  strictEqual(lessonEyebrow({ level: 'sons', tag: 'SONS · LEÇON 07' }, { seq: 8 }), 'SONS · LEÇON 08');
  strictEqual(lessonEyebrow({ level: 'a1', tag: 'A1 · LEÇON 04' }, { seq: 6 }), 'A1 · LEÇON 06');
  // A missing unit is not a blank eyebrow: fall back to what was authored.
  strictEqual(lessonEyebrow({ level: 'sons', tag: 'SONS · LEÇON 03' }, null), 'SONS · LEÇON 03');
});

test('every seed lesson gets an eyebrow matching its position in its track', () => {
  const here = dirname(fileURLToPath(import.meta.url));
  const seed = JSON.parse(readFileSync(resolve(here, 'seed.json'), 'utf8')) as {
    lessons: Lesson[];
    units: Unit[];
  };
  const byId = new Map(seed.units.map((u) => [u.id, u]));
  for (const L of seed.lessons) {
    const unit = byId.get(L.unitId);
    ok(unit, `${L.id} resolves its unit ${L.unitId}`);
    const eyebrow = lessonEyebrow(L, unit);
    // The number in the eyebrow is the unit's rank among its own track, which
    // is what the Den sorts on and what the learner counts through.
    const rank = seed.units
      .filter((u) => u.track === unit!.track)
      .sort((a, b) => a.seq - b.seq)
      .findIndex((u) => u.id === unit!.id) + 1;
    strictEqual(
      eyebrow,
      `${L.level.toUpperCase()} · LEÇON ${String(rank).padStart(2, '0')}`,
      `${L.id} should be numbered ${rank} in the ${unit!.track} track, got "${eyebrow}"`
    );
  }
});
