// Guards D-31 (phase 07.1): sons.01.l1, sons.02.l1, sons.03.l1 and sons.04.l1
// each carry a non-empty `acts` array, a matching `deckTranche`, and every
// section they carry an id claimed by exactly one act. Before this lesson
// build these four had zero acts each; the Concept C trail needs one row
// vocabulary across the whole seed, not four unrendered units.
//
// This file also pins the four lessons' `Lesson.version` (D-25): the acts
// build that patches these lessons must NOT bump them, because `version`
// keys a learner's stored mission checkmarks and lesson XP
// (`lessonMissions[id].v` at `app/missions.tsx`). If this test starts failing
// because a version moved, that is the regression, not the fixture.
import { deepStrictEqual, ok, strictEqual } from 'node:assert';
import { test } from 'node:test';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import type { Lesson, LessonAct } from './schema.ts';

const here = dirname(fileURLToPath(import.meta.url));
const seed = JSON.parse(readFileSync(resolve(here, 'seed.json'), 'utf8')) as {
  lessons: Lesson[];
};

const SECTION_ID_RE = /^s\d\d-[a-z0-9-]+$/;
const EM_DASH = '—';

/** Pinned by value, not read from the seed: a version bump fails THIS
 *  assertion rather than silently passing because the fixture moved with it. */
const PINNED_VERSIONS: Record<string, number> = {
  'sons.01.l1': 3,
  'sons.02.l1': 5,
  'sons.03.l1': 5,
  'sons.04.l1': 2,
};

const LESSON_IDS = Object.keys(PINNED_VERSIONS);

function lesson(id: string): Lesson {
  const l = seed.lessons.find((x) => x.id === id);
  ok(l, `${id} is in the seed`);
  return l!;
}

for (const id of LESSON_IDS) {
  test(`${id}: version is pinned at ${PINNED_VERSIONS[id]} (D-25)`, () => {
    strictEqual(lesson(id).version, PINNED_VERSIONS[id]);
  });

  test(`${id}: every section carries a unique id shaped s\\d\\d-slug`, () => {
    const l = lesson(id);
    const ids = l.sections.map((s) => (s as { id?: string }).id);
    for (const sid of ids) {
      ok(typeof sid === 'string' && SECTION_ID_RE.test(sid), `section id "${String(sid)}" does not match s\\d\\d-slug`);
    }
    strictEqual(new Set(ids).size, ids.length, 'a section id is duplicated');
    strictEqual(ids.length, l.sections.length, 'not every section carries an id');
  });

  test(`${id}: acts is a non-empty array of 4 to 6 acts`, () => {
    const l = lesson(id);
    ok(Array.isArray(l.acts) && l.acts.length > 0, 'acts is missing or empty');
    ok(l.acts!.length >= 4 && l.acts!.length <= 6, `${l.acts!.length} acts, expected 4 to 6`);
  });

  test(`${id}: every act has 3 to 7 sections, a title, a milestone and a positive estScreens`, () => {
    const l = lesson(id);
    for (const a of l.acts ?? []) {
      ok(a.sections.length >= 3 && a.sections.length <= 7, `act "${a.id}" has ${a.sections.length} sections, expected 3 to 7`);
      ok(typeof a.title === 'string' && a.title.length > 0, `act "${a.id}" has no title`);
      ok(typeof a.milestone === 'string' && a.milestone.length > 0, `act "${a.id}" has no milestone`);
      ok(Number.isInteger(a.estScreens) && a.estScreens >= 1, `act "${a.id}".estScreens is not a positive integer`);
    }
  });

  test(`${id}: every section belongs to exactly one act`, () => {
    const l = lesson(id);
    const sectionIds = new Set(l.sections.map((s) => (s as { id?: string }).id).filter(Boolean) as string[]);
    const acts = (l.acts ?? []) as LessonAct[];
    const claimed = acts.flatMap((a) => a.sections);
    strictEqual(new Set(claimed).size, claimed.length, 'a section is claimed by more than one act');
    for (const sid of sectionIds) {
      ok(claimed.includes(sid), `section "${sid}" is not claimed by any act`);
    }
    for (const cid of claimed) {
      ok(sectionIds.has(cid), `act names section "${cid}", which is not one of this lesson's sections`);
    }
  });

  test(`${id}: deckTranche is index-aligned with acts and only releases this lesson's own items`, () => {
    const l = lesson(id);
    const acts = l.acts ?? [];
    ok(Array.isArray(l.deckTranche), 'deckTranche is missing');
    strictEqual(l.deckTranche!.length, acts.length, 'deckTranche has one slice per act');
    const own = new Set(l.itemIds);
    const flat: string[] = [];
    for (const slice of l.deckTranche!) {
      ok(Array.isArray(slice), 'a deckTranche slice is not an array');
      for (const itemId of slice) {
        ok(own.has(itemId), `deckTranche releases "${itemId}", which is not in this lesson's itemIds`);
        flat.push(itemId);
      }
    }
    strictEqual(new Set(flat).size, flat.length, 'the same item is released in more than one tranche slice');
    const empties = l.deckTranche!.filter((slice) => slice.length === 0).length;
    ok(empties <= 1, `${empties} empty deckTranche slices, at most one allowed`);
  });

  test(`${id}: act copy carries no em dash and never says "honest"`, () => {
    const l = lesson(id);
    for (const a of l.acts ?? []) {
      ok(!a.title.includes(EM_DASH), `act "${a.id}" title carries an em dash`);
      ok(!a.milestone.includes(EM_DASH), `act "${a.id}" milestone carries an em dash`);
      ok(!/honest/i.test(a.title), `act "${a.id}" title says "honest"`);
      ok(!/honest/i.test(a.milestone), `act "${a.id}" milestone says "honest"`);
      for (const rp of a.restPoints ?? []) {
        ok(!rp.includes(EM_DASH), `act "${a.id}" restPoint "${rp}" carries an em dash`);
        ok(!/honest/i.test(rp), `act "${a.id}" restPoint "${rp}" says "honest"`);
      }
    }
  });
}

// The union of the four pinned versions, asserted once so a drive-by edit to
// PINNED_VERSIONS above cannot silently drop a lesson from coverage.
test('all four act-less sons lessons are covered by this guard', () => {
  deepStrictEqual([...LESSON_IDS].sort(), ['sons.01.l1', 'sons.02.l1', 'sons.03.l1', 'sons.04.l1']);
});
