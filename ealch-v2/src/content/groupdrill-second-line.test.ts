// A `lg` group-drill card must never render as a bare French string.
//
// ── WHAT THIS EXISTS TO STOP ───────────────────────────────────────────────
//
// Until 2026-08-13, MissionRich.tsx drew `note` on the second line of a `lg`
// group-drill card and nothing else. `respell` and `en` were documented as
// XL-only lines (schema.ts:899) and were dropped in silence at this size.
//
// So a card carrying a respelling and a gloss — which is what most authors
// wrote, because the schema accepts them — showed the learner the French word,
// a play button, and NOTHING ELSE. No pronunciation. No meaning.
//
// Measured across the shipped seed the day it was found, by walking a2.13 on a
// Pixel 6:
//
//     583 of 730 lg group-drill cards, across 28 lessons
//     a1.08.l1 39 · a1.09.l1 41 · a1.10.l1 40 · a2.12.l1 39 · a2.01.l1 36 ...
//     only 10 of 50 lessons were clean
//
// Every host gate was green for all of it, because the DATA was valid and
// complete. Only the renderer was lossy. That is the same shape as the
// `cheatSheet` a1.13 still ships inside a reference sheet, which draws its
// title and no rows.
//
// ── WHY THE TEST IS HERE AND NOT IN A LESSON FILE ─────────────────────────
//
// A per-lesson assertion would have to be written 50 times and remembered by
// every future author. This asserts the CONTRACT instead: for every lg
// group-drill card in the whole corpus, something reaches the second line. It
// passes either because the card carries a `note` or because it carries
// `respell`/`en` for the renderer to join — which is exactly the choice
// MissionRich now makes.
//
// If somebody narrows that line again, this goes red for 583 cards at once.

import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { ok, strictEqual } from 'node:assert';
import { test } from 'node:test';

import type { Item, Lesson } from './schema.ts';

const here = dirname(fileURLToPath(import.meta.url));
const seed = JSON.parse(readFileSync(resolve(here, 'seed.json'), 'utf8')) as {
  version: number; items: Item[]; lessons: Lesson[];
};

/** The fields MissionRich draws on a `lg` card's second line, in the order it
 *  prefers them. Mirrors the component; if that changes, change this and say
 *  why in both places. */
const secondLine = (it: Record<string, unknown>): string =>
  String(it.note ?? [it.respell, it.en].filter(Boolean).join(' · '));

/** `ipa` is drawn on the FIRST line, beside the French, so a card carrying one
 *  is not bare even with an empty second line.
 *
 *  THE FIRST VERSION OF THIS TEST MISSED THAT and reported sons.02's eight
 *  pronunciation cards as broken. They render `le chat /ʃa/`, which is exactly
 *  what a sounds lesson should show. The corrected count of genuinely bare
 *  cards on 2026-08-13 is 583, not the 591 first reported: the other eight were
 *  always fine. */
const anythingBeyondTheWord = (it: Record<string, unknown>): boolean =>
  !!secondLine(it).trim() || !!String(it.ipa ?? '').trim();

type Card = { lesson: string; section: string; fr: string };

function bareCards(): Card[] {
  const out: Card[] = [];
  for (const L of seed.lessons) {
    for (const s of L.sections ?? []) {
      if (s.type !== 'groupDrill') continue;
      if ((s as { size?: string }).size === 'xl') continue; // the XL card draws all five lines
      for (const g of (s as { groups?: { items?: Record<string, unknown>[] }[] }).groups ?? []) {
        for (const it of g.items ?? []) {
          if (anythingBeyondTheWord(it)) continue;
          out.push({ lesson: L.id, section: String((s as { id?: string }).id ?? '?'), fr: String(it.fr) });
        }
      }
    }
  }
  return out;
}

test('NO lg GROUP-DRILL CARD RENDERS AS A BARE FRENCH STRING', () => {
  const bare = bareCards();
  const byLesson = new Map<string, number>();
  for (const c of bare) byLesson.set(c.lesson, (byLesson.get(c.lesson) ?? 0) + 1);

  strictEqual(
    bare.length, 0,
    `${bare.length} card(s) would show the learner a French word, a play button, and nothing else:\n`
    + [...byLesson.entries()].sort((a, b) => b[1] - a[1])
      .map(([id, n]) => `    ${id.padEnd(12)} ${n}`).join('\n')
    + `\n\n  Examples:\n`
    + bare.slice(0, 6).map((c) => `    ${c.lesson} ${c.section} "${c.fr}"`).join('\n')
    + `\n\n  A card needs either a \`note\`, or \`respell\`/\`en\` for MissionRich to join.\n`
    + `  583 of 730 were in this state on 2026-08-13 and every host gate was green,\n`
    + `  because the data was valid and only the renderer was lossy.`,
  );
});

test('the whole corpus is covered, so a pass is not an empty walk', () => {
  let cards = 0;
  let sections = 0;
  for (const L of seed.lessons) {
    for (const s of L.sections ?? []) {
      if (s.type !== 'groupDrill' || (s as { size?: string }).size === 'xl') continue;
      sections++;
      for (const g of (s as { groups?: { items?: unknown[] }[] }).groups ?? []) cards += (g.items ?? []).length;
    }
  }
  /* A guard that passes because it found nothing to check is worse than none.
     The corpus held 730 across 100+ sections when this was written; the floor
     is deliberately well below that so ordinary authoring does not trip it. */
  ok(cards >= 500, `only ${cards} lg group-drill cards found across ${sections} sections; the walk has stopped seeing the corpus`);
});

test('a card that carries only `en` still reaches the second line', () => {
  /* The commonest shape in the shipped seed: a1.10 and others wrote the gloss
     and no respelling. Both must render, or the fix only helps the lessons that
     happened to write both. */
  strictEqual(secondLine({ en: 'It is hot today.' }), 'It is hot today.');
  strictEqual(secondLine({ respell: '[eel feh SHOH]' }), '[eel feh SHOH]');
  strictEqual(secondLine({ respell: '[zhuh VUH pay-YAY]', en: 'I want to pay.' }), '[zhuh VUH pay-YAY] · I want to pay.');
  /* And an authored `note` still wins, because a lesson that wrote one chose
     its wording deliberately. */
  strictEqual(secondLine({ note: 'authored', respell: '[x]', en: 'y' }), 'authored');
});
