// A reference sheet a learner can never open.
//
// A lesson's `sheets` are only reachable through a mission carrying the
// matching `sheetId`. Author a sheet and link nothing to it and it ships:
// every validator passes, the lesson renders, and the sheet is dead weight
// nobody can see. b1.01 shipped four of them and it went unnoticed from the
// pilot until 2026-09-24, because nothing tested for it.
//
// Measured on the published seed the same day: 17 of 101 sheets are
// unreachable, across 12 lessons. They are baselined below so the number can
// only go down. A new unreachable sheet fails this test.
//
// Do NOT "fix" a line here by deleting it unless the sheet really is linked —
// run the count and shrink the list for real.
import { ok } from 'node:assert';
import { test } from 'node:test';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const here = dirname(fileURLToPath(import.meta.url));
const SEED_PATH = resolve(here, 'seed.json');

/** `lessonId sheetId` pairs that ship unreachable today. Shrink, never grow.
 *  Measured 2026-09-24 against the published seed. */
const KNOWN_UNREACHABLE = new Set([
  'a2.03.l1 sheet.a2.03.patterns',
  'a2.04.l1 sheet.a2.04.lieu',
  'a2.16.l1 sheet.a2.16.forms',
  'a2.17.l1 sheet.a2.17.adverbes',
  'a2.22.l1 sheet-a2-22-pronominaux',
  'a2.30.l1 sheet.a2.30.parcours',
  'a2.33.l1 sheet-huit',
  'a2.34.l1 sheet-six',
  'sons.05.l1 sheet.sons.05.circonflexe',
  'sons.05.l1 sheet.sons.05.notation',
  'sons.05.l1 sheet.sons.05.pairs',
  'sons.06.l1 sheet.sons.06.h',
  'sons.06.l1 sheet.sons.06.notation',
  'sons.06.l1 sheet.sons.06.why',
  'sons.08.l1 sheet-rhythm',
  'sons.10.l1 sheet.sons.10.sounds',
  'sons.10.l1 sheet.sons.10.states',
]);

type Lesson = {
  id: string;
  sheets?: { id: string }[];
  sections?: { sheetId?: string }[];
};

function unreachable(): { pairs: string[]; sheets: number } {
  const seed = JSON.parse(readFileSync(SEED_PATH, 'utf8')) as { lessons?: Lesson[] };
  const pairs: string[] = [];
  let sheets = 0;
  for (const l of seed.lessons ?? []) {
    const ids = (l.sheets ?? []).map((s) => s.id);
    sheets += ids.length;
    if (!ids.length) continue;
    const linked = new Set((l.sections ?? []).map((s) => s.sheetId).filter(Boolean));
    for (const id of ids) if (!linked.has(id)) pairs.push(`${l.id} ${id}`);
  }
  return { pairs, sheets };
}

test('no NEW published reference sheet is unreachable', () => {
  const { pairs, sheets } = unreachable();
  ok(sheets > 50, `only ${sheets} sheets found in the seed, the walk is probably broken`);
  const fresh = pairs.filter((p) => !KNOWN_UNREACHABLE.has(p));
  ok(
    fresh.length === 0,
    `these sheets have no mission linking to them, so a learner can never open them ` +
    `(${fresh.length}). Add a sheetId to the missions each one belongs to:\n  ${fresh.join('\n  ')}`,
  );
});

test('the unreachable baseline has not gone stale', () => {
  const { pairs } = unreachable();
  const live = new Set(pairs);
  const fixed = [...KNOWN_UNREACHABLE].filter((p) => !live.has(p));
  ok(
    fixed.length === 0,
    `these are reachable now, so the debt list overstates the problem. Delete them from ` +
    `KNOWN_UNREACHABLE:\n  ${fixed.join('\n  ')}`,
  );
});

test('every sheetId in a mission names a sheet that exists', () => {
  const seed = JSON.parse(readFileSync(SEED_PATH, 'utf8')) as { lessons?: Lesson[] };
  const dangling: string[] = [];
  for (const l of seed.lessons ?? []) {
    const ids = new Set((l.sheets ?? []).map((s) => s.id));
    for (const s of l.sections ?? []) {
      if (s.sheetId && !ids.has(s.sheetId)) dangling.push(`${l.id} -> ${s.sheetId}`);
    }
  }
  ok(dangling.length === 0, `a mission opens a sheet that does not exist:\n  ${dangling.join('\n  ')}`);
});
