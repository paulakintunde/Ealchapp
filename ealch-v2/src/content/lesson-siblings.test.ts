// The route to the SECOND lesson of a unit.
//
// Before this, app/den.tsx:169 pushed u.lessonIds[0] and there was no other
// door. A unit's second lesson was reachable only by playing the first one to
// its result card, which meant a1.30.l2 — the A1 exam — could not be retaken,
// and a2.10.l2 could not be reopened once finished.
//
// The fix is a sibling row on app/lessonoverview.tsx. This file guards the
// three things that can silently undo it:
//
//   1. the DATA still supports it (every multi-lesson unit resolves its
//      lessons, in seq order, through the real lessonsOfUnit),
//   2. the SCREEN still draws it (a component can be authored, valid and
//      rendered by nothing — invariants §1),
//   3. the fix has not drifted into changing lessonEyebrow, which looks like a
//      bug from here and is not (A2-10-L2-DEN-ROUTE-PROPOSAL.md §2).
//
// Deliberately written against the SEED, not against a2.10: a1.30 is covered by
// the same assertions, and so is the next two-lesson unit nobody has built yet.
//
// Mutation-tested: each assertion below was broken on purpose and confirmed red.

import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { ok, strictEqual, deepStrictEqual } from 'node:assert';
import { test } from 'node:test';

import type { Corpus, Lesson } from './schema.ts';
import { lessonsOfUnit } from '../services/content.logic.ts';
import { lessonEyebrow } from './missions.ts';
import { T } from '../i18n/strings.ts';

const here = dirname(fileURLToPath(import.meta.url));
const seed = JSON.parse(readFileSync(resolve(here, 'seed.json'), 'utf8')) as {
  lessons: Lesson[];
  units: { id: string; seq?: string | number; lessonIds?: string[] }[];
};
const screen = readFileSync(resolve(here, '../../app/lessonoverview.tsx'), 'utf8');

const multi = seed.units.filter((u) => (u.lessonIds ?? []).length > 1);
const single = seed.units.filter((u) => (u.lessonIds ?? []).length === 1);

// ── 1. The data ────────────────────────────────────────────────────────────

test('the seed still has a unit with more than one lesson', () => {
  // Without this the whole file is vacuously green: every assertion below
  // iterates `multi`, so an empty `multi` would pass them all while the route
  // it guards had quietly stopped mattering.
  ok(multi.length > 0, 'no multi-lesson unit in the seed, so nothing here is being tested');
  ok(
    multi.some((u) => u.id === 'a1.30'),
    'a1.30 (review + exam) is no longer a two-lesson unit; if that was deliberate, update this file',
  );
});

test('every lesson a multi-lesson unit names is actually in the seed', () => {
  for (const u of multi) {
    for (const id of u.lessonIds ?? []) {
      ok(
        seed.lessons.some((l) => l.id === id),
        `${u.id} names ${id}, which is not in the seed — the sibling row would render a dead tap`,
      );
    }
  }
});

test('the real lessonsOfUnit resolves every sibling, in seq order', () => {
  // The screen calls content.lessonsOf, which IS this function. If it stopped
  // sorting, the exam would list above the review it comes after.
  for (const u of multi) {
    const got = lessonsOfUnit(seed as unknown as Corpus, u.id);
    strictEqual(got.length, (u.lessonIds ?? []).length, `${u.id} does not resolve all of its lessons`);
    const seqs = got.map((l) => l.seq);
    deepStrictEqual(seqs, [...seqs].sort((a, b) => a - b), `${u.id} resolves its lessons out of seq order`);
  }
});

test('filtering out the current lesson leaves exactly the others', () => {
  // This is the screen's one line of logic, run on real data.
  for (const u of multi) {
    const all = lessonsOfUnit(seed as unknown as Corpus, u.id);
    for (const l of all) {
      const siblings = all.filter((x) => x.id !== l.id);
      strictEqual(siblings.length, all.length - 1, `${l.id} does not exclude itself from its own siblings`);
      ok(!siblings.some((x) => x.id === l.id), `${l.id} lists itself as its own sibling`);
    }
  }
});

test('a one-lesson unit produces no siblings, so the row stays inert', () => {
  // The regression that would go unnoticed: 73 of 75 units must look untouched.
  ok(single.length > 0, 'expected the curriculum to still have one-lesson units');
  for (const u of single) {
    const all = lessonsOfUnit(seed as unknown as Corpus, u.id);
    if (all.length === 0) continue; // unit names a lesson the seed cut; other tests own that
    strictEqual(all.filter((x) => x.id !== all[0].id).length, 0, `${u.id} would draw a sibling row`);
  }
});

test('every sibling has something to put on its row', () => {
  // The row shows overview.titleEn ?? title, and a mission count.
  for (const u of multi) {
    for (const l of lessonsOfUnit(seed as unknown as Corpus, u.id)) {
      const label = l.overview?.titleEn ?? l.title;
      ok(label && label.trim().length > 0, `${l.id} has no title for the sibling row`);
      ok(l.sections.length > 0, `${l.id} has no missions, so its row would read "0 missions"`);
    }
  }
});

test('two lessons of one unit do not share a row label', () => {
  // Both rows saying "Regular -IR Verbs" is worse than no row at all.
  for (const u of multi) {
    const labels = lessonsOfUnit(seed as unknown as Corpus, u.id).map((l) => l.overview?.titleEn ?? l.title);
    strictEqual(new Set(labels).size, labels.length, `${u.id}'s lessons are indistinguishable on the overview: ${labels.join(' / ')}`);
  }
});

// ── 2. The screen ──────────────────────────────────────────────────────────

test('lessonoverview computes its siblings from the unit, minus itself', () => {
  ok(
    /const siblings = content\.lessonsOf\(L\.unitId\)\.filter\(\(x\) => x\.id !== L\.id\)/.test(screen),
    'app/lessonoverview.tsx no longer derives `siblings` from the unit; the route may be gone',
  );
});

test('lessonoverview renders the sibling rows and they navigate', () => {
  ok(/siblings\.length \?/.test(screen), 'the sibling block is not guarded on siblings.length, so it is not conditional');
  ok(/siblings\.map\(/.test(screen), 'siblings is computed but never mapped — authored and drawn by nothing');
  ok(
    /pathname: '\/lessonoverview', params: \{ key: s\.id \}/.test(screen),
    'the sibling row does not push the sibling lesson id; the tap goes nowhere useful',
  );
  ok(/T\.ovAlsoHere/.test(screen), 'the sibling block has no header string');
});

test('the sibling header exists in both language tables', () => {
  for (const lang of ['fr', 'en'] as const) {
    ok(T[lang].ovAlsoHere?.length > 0, `${lang}.ovAlsoHere is missing, so the header renders blank`);
  }
});

test('the den tap is unchanged', () => {
  // The proposal explicitly rejected making the den open the first INCOMPLETE
  // lesson: a learner who had finished the unit could then never reopen l1.
  const den = readFileSync(resolve(here, '../../app/den.tsx'), 'utf8');
  ok(
    /params: \{ key: u\.lessonIds\[0\] \}/.test(den),
    'den.tsx no longer opens lessonIds[0]; if that was deliberate, re-read the proposal §3 before keeping it',
  );
});

// ── 3. The thing not to fix ────────────────────────────────────────────────

test('lessonEyebrow still answers "where am I in the track", not "which lesson"', () => {
  // Both lessons of a unit SHOULD read the same here. The eyebrow is derived
  // from unit.seq precisely because ids and seq disagree across this
  // curriculum. Telling the two lessons apart is lesson.tsx's job, and it uses
  // the raw Lesson.tag. If this goes red the sibling-row work has drifted.
  for (const u of multi) {
    const all = lessonsOfUnit(seed as unknown as Corpus, u.id);
    const unit = { seq: Number(u.seq) };
    const eyebrows = all.map((l) => lessonEyebrow(l, unit));
    strictEqual(new Set(eyebrows).size, 1, `${u.id}'s lessons now get different eyebrows; see A2-10-L2-DEN-ROUTE-PROPOSAL.md §2`);
    ok(/ · LEÇON \d\d$/.test(eyebrows[0]), `${u.id}'s eyebrow is no longer computed from unit.seq: ${eyebrows[0]}`);
  }
});

test('the two lessons of a unit are still distinguishable in the lesson header', () => {
  // The counterpart to the test above: the eyebrow is allowed to collide only
  // because Lesson.tag does not.
  for (const u of multi) {
    const tags = lessonsOfUnit(seed as unknown as Corpus, u.id).map((l) => l.tag);
    strictEqual(new Set(tags).size, tags.length, `${u.id}'s lessons share a tag, so lesson.tsx's header cannot tell them apart`);
  }
});
