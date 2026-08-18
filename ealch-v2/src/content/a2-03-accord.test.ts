// a2.03.l1 "L'accord des adjectifs": the assertions that keep this lesson true.
//
// Modelled on a2-15-prendre-mettre.test.ts. Everything here runs the REAL app
// function rather than a copy: an earlier a1.01 test inlined its own glossary
// lookup, copied the version that was already broken, and passed while the
// feature was dead.
//
// THIS FILE READS seed.json AND NOTHING ELSE. It does not import the corpus, the
// terms or the lesson source, because a test that imports the same constant the
// content imports is comparing the content to itself. Every figure below is
// written out by hand, so a change in the source has to be reflected here on
// purpose.
//
// ── What this file is actually guarding ────────────────────────────────────
//
// a1.13 and a1.14 BOTH already print a four-form grid — a1.14 says `grands`
// twenty times and `grandes` thirteen, a1.13 says "four shapes" twelve times —
// so the grid is not what this lesson owns and "a form is wrong" is not the
// failure mode. The failure mode is:
//
//   THE -EUX MASCULINE PLURAL GETTING AN s. `sérieux` is the same word in two of
//   its four cells and it is DELIBERATE: an x has nowhere to put a plural s.
//   a1.14 owns the fact for `vieux` and `mauvais`; this lesson generalises it to
//   a class of twenty-five. Every future author who reads the grid will want to
//   "fix" the missing s, and this file is what stops them.
//   THE COLD ADJECTIVES GETTING A CARD. `courageux`, `actif` and `turquoise` may
//   appear in exactly two sections, and in no corpus row, no itemId, no deck
//   tranche and no term. A card for any of them deletes the only thing that
//   distinguishes this lesson from a table, and the five exam questions that
//   follow become recall.
//   THE INVARIABLE CLASS BEING SEPARATED FROM ITS REGULAR NEIGHBOUR. The class
//   only reads as a class when an ordinary colour sits beside it on the same
//   noun in the same number. Split them and it reads as the rule failing.
//   beau, nouveau AND vieux ARRIVING EARLY. a2.16 is seq 11, the very next
//   lesson, and BOTH prerequisites already teach those forms heavily, so the
//   only thing that keeps a2.16 worth building is this lesson staying out.
//   -ment ARRIVING EARLY. a2.17 is seq 12 and it is built on the feminine forms
//   this lesson authors.
//   THE DICTÉE LOSING THE THING IT CAN TEST. Fourteen of the sixteen cells spell
//   in LETTERS mode and two do not; the two are named rather than dropped.
//   A NASAL GOING BLIND. Twenty-nine superscripts, twenty-seven seen and TWO
//   invisible, both `GRAHⁿD`, and both asserted by name.
//   listenChoose ARRIVING ON A HOMOPHONE. Every singular/plural pair in this
//   lesson is one sound. The three ear questions ask about the FEMININE, which
//   is the one agreement the ear can genuinely do.
//   A ROLE-PLAY TURN WITH ONE ANSWER. `scenario.logic.test.ts` enforces two
//   across the whole seed and no document in this band mentions it; v1 shipped
//   three turns with one apiece.
//
// Every one of those is asserted below, and every one was mutation-tested: the
// assertion was broken on purpose and confirmed to go red before it was kept.

import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { ok, strictEqual, deepStrictEqual } from 'node:assert';
import { test } from 'node:test';

import type { Item, Lesson } from './schema.ts';
import { quizQuestions, validateLesson, formatIssues } from './schema.ts';
import { validateDensity, formatDensity, hasPlainNasalFor } from './density.logic.ts';
import { endingPopulation } from './gender.logic.ts';
import { dicteeMode } from './dictee.logic.ts';
import { matchesAccept } from './answer.logic.ts';
import { namesUnitLabel } from './unit-label.ts';

const here = dirname(fileURLToPath(import.meta.url));
const seed = JSON.parse(readFileSync(resolve(here, 'seed.json'), 'utf8')) as {
  version: number; items: Item[]; lessons: Lesson[];
  units: { id: string; title?: string; sub?: string; canDo?: string; seq?: string | number; lessonIds?: string[]; prereqUnitIds?: string[] }[];
};

const L = seed.lessons.find((l) => l.id === 'a2.03.l1');
const noLesson = !L;
const byId = new Map(seed.items.map((i) => [i.id, i] as const));

/* ─── The shape of the lesson ──────────────────────────────────────────── */

const SPINE = [
  's01-scene', 's02-goals', 's03-front',
  's04-grid', 's05-default', 's06-silent', 's07-where', 's08-check',
  's09-eux', 's10-nos', 's11-if', 's12-ear', 's13-bank', 's14-reading', 's15-cold',
  's16-never', 's17-newcolour', 's18-errors',
  's19-scenario', 's20-dictation', 's21-speak', 's22-review',
  's23-progress', 's24-quiz', 's25-roundup',
];

/** THE OWNS ACT IS THE HEAVIEST, ALONE, AND THE GRID ACT IS SMALLER.
 *  Five missions on the four-form grid, seven on the two named groups. If that
 *  ever inverts, the forms have taken the lesson over — and here that failure is
 *  sharper than usual, because a1.13 and a1.14 have already printed the grid and
 *  a third copy is the one thing this lesson must not be. Doctrine §B.5. */
const ACTS = [
  { id: 'act1', n: 3 },
  { id: 'act2', n: 5 },
  { id: 'act3', n: 7 },
  { id: 'act4', n: 3 },
  { id: 'act5', n: 4 },
  { id: 'act6', n: 3 },
];
const GRID_ACT = 'act2';
const OWNS_ACT = 'act3';

/** THE REFRAME, VERBATIM. A production rule rather than a fact, because doctrine
 *  §B.4 asks for something the learner can run in the half-second between the
 *  noun and the adjective. Eight words, so it fits an xl section's 12-word cap.
 *
 *  "The masculine tells you the other three." was the first version and it says
 *  the same thing. It was rejected on register rather than on jargon: the grid
 *  columns are `Plain form`, `A woman`, `Several`, `Several women`, and a
 *  reframe saying "the masculine" gives one idea two names on one screen. */
const REFRAME = 'The plain form tells you the other three.';
const REFRAME_SECTIONS = 6;

/* ─── The grid, cell by cell, written out by hand ───────────────────────── */

/** FOUR PATTERNS, FOUR CELLS, and the second and third columns of row 2 are the
 *  same word ON PURPOSE. See the -eux tests below. */
const GRID: Record<string, [string, string, string, string]> = {
  default: ['grand', 'grande', 'grands', 'grandes'],
  eux: ['sérieux', 'sérieuse', 'sérieux', 'sérieuses'],
  if: ['sportif', 'sportive', 'sportifs', 'sportives'],
  invariable: ['marron', 'marron', 'marron', 'marron'],
};
const PATTERNS = ['default', 'eux', 'if', 'invariable'];
const SUBJECTS = ['Il est', 'Elle est', 'Ils sont', 'Elles sont'];
/** id -> the sentence the learner is scored on. The grid occupies .001 to .016
 *  in reading order: four cells of each pattern, patterns in the order above. */
const cellId = (p: number, c: number) => `fr.a2.adjectifs-essentiels.${String(p * 4 + c + 1).padStart(3, '0')}`;

/** THE ROWS THIS BUILD OWNS, WHICH IS ITS BLOCK AND NOT THE WHOLE NAMESPACE.
 *
 *  ADDED 2026-08-13 by the a2.16 build, and it is a scope fix rather than a
 *  relaxation: every assertion below is byte-identical, and only the filter
 *  changed.
 *
 *  Four tests in this file counted `id.startsWith('fr.a2.adjectifs-essentiels.')`
 *  and meant "the rows a2.03 authored". Those are the same set only while a2.03
 *  is the only lesson in the namespace, and a2.03's OWN report reserved
 *  `.041..080` for a2.16 and `.081..120` for a2.17 — so the guards were
 *  guaranteed to break on the next lesson in the arc, and to break it in a way
 *  that reads like a defect in the new build.
 *
 *  It is ledger §a2.14-12 one level up: the row-count discipline was narrowed
 *  from "the total must not move" to "nothing may land inside MY range" for
 *  exactly this reason, and the test file never got the same treatment. a2.17
 *  will land in this namespace too; this is what stops it happening a third
 *  time.
 *
 *  What is deliberately NOT scoped is the duplicate-`fr` check below, which is
 *  theme-wide on purpose: `flashhub-coverage.test.ts` counts two rows sharing an
 *  `fr` in one theme as one card served twice, and that is true whoever authored
 *  them. */
const MY_BLOCK = { from: 'fr.a2.adjectifs-essentiels.001', to: 'fr.a2.adjectifs-essentiels.040' };
const isMine = (id: string) => id >= MY_BLOCK.from && id <= MY_BLOCK.to;
const myRows = () => seed.items.filter((i) => isMine(i.id));

/** The respellings, hand-written, so the sheet and the rows can be compared to
 *  something that is neither of them. a2.14 §5: if a lesson prints a respelling
 *  in more than one place, compare them. */
const RESPELL: Record<string, [string, string, string, string]> = {
  default: ['GRAHⁿ', 'GRAHⁿD', 'GRAHⁿ', 'GRAHⁿD'],
  eux: ['say-RYUH', 'say-RYUHZ', 'say-RYUH', 'say-RYUHZ'],
  if: ['spor-TEEF', 'spor-TEEV', 'spor-TEEF', 'spor-TEEV'],
  invariable: ['mah-ROHⁿ', 'mah-ROHⁿ', 'mah-ROHⁿ', 'mah-ROHⁿ'],
};

const THEME = 'adjectifs-essentiels';
const AUTHORED_COUNT = 33;
const IMPORTED_COUNT = 23;
const ITEM_COUNT = 56;
const QUESTION_COUNT = 32;
const ROUND_COUNT = 5;
const DICTEE_COUNT = 14;
const SUPERSCRIPTS = 29;
const SEEN_NASALS = 27;
const BLIND_NASALS = 2;

/** The three headwords this build authored, and the reason each had to be.
 *  Corrections §2 lists the first two as absences for the level; the THIRD is in
 *  no absence list anywhere and this build found it. */
const AUTHORED_HEADWORDS = ['sportif', 'sportive', 'sérieuse'];

/** The three the exam gives cold, and the ONLY two sections that may print any
 *  form of any of them. */
const COLD = {
  courageux: ['courageux', 'courageuse', 'courageuses'],
  actif: ['actif', 'active', 'actifs', 'actives'],
  turquoise: ['turquoise'],
};
const COLD_HOMES = ['s15-cold', 's24-quiz'];

/** a2.16's, at seq 11, the very next lesson. BOTH prerequisites already teach
 *  these forms heavily (a1.14: beau 107, vieil 120; a1.16: nouvel 21), so a2.16
 *  is a systematisation rather than a first teach, and this list is what keeps
 *  it worth building. */
const BEAU_FORMS = [
  'beau', 'belle', 'beaux', 'belles', 'bel',
  'nouveau', 'nouvelle', 'nouveaux', 'nouvelles', 'nouvel',
  'vieux', 'vieille', 'vieilles', 'vieil',
];

/** a2.08's, at seq 32. */
const COMPARATIVE_FORMS = ['plus grand', 'moins grand', 'le plus grand', 'aussi grand', 'meilleur'];

/** The pair `s16-never` must open with, IN THIS ORDER. */
const CONTRAST_PAIR = ['Ses vestes sont vertes.', 'Ses vestes sont marron.'];

/* ─── Helpers ──────────────────────────────────────────────────────────── */

const sections = () => (L?.sections ?? []) as (Record<string, unknown> & { type: string; id?: string })[];
const byIdSec = (id: string) => sections().find((s) => s.id === id);

function strings(v: unknown, out: string[] = []): string[] {
  if (typeof v === 'string') out.push(v);
  else if (Array.isArray(v)) for (const x of v) strings(x, out);
  else if (v && typeof v === 'object') for (const x of Object.values(v)) strings(x, out);
  return out;
}

/** Accent-aware word-boundary search. NEVER build a regex out of a search term:
 *  `\b` is ASCII-only in JavaScript and returns zero on a trailing accent, which
 *  looks exactly like an absence. */
function hasPhrase(hay: string, needle: string): boolean {
  const isWord = (c: string) => /[\p{L}\p{N}'’-]/u.test(c);
  const h = hay.toLowerCase(); const n = needle.toLowerCase();
  let i = 0;
  while ((i = h.indexOf(n, i)) !== -1) {
    if (!isWord(i === 0 ? '' : h[i - 1]) && !isWord(h[i + n.length] ?? '')) return true;
    i += 1;
  }
  return false;
}
const countPhrase = (hay: string, needle: string): number => {
  let n = 0; let i = 0;
  const h = hay.toLowerCase(); const q = needle.toLowerCase();
  while ((i = h.indexOf(q, i)) !== -1) { n += 1; i += q.length; }
  return n;
};

/** Every learner surface, INCLUDING intro and overview. Ledger §0: a2.11 shipped
 *  jargon in `intro`, which is drawn on the overview card and the lesson cover,
 *  while every guard in the band walked sections, sheets and terms and not that.
 *  grammarAssumed and grammarIntroduced are DELIBERATELY absent: invariants §8
 *  says those are addressed to the curriculum and may use the precise words. */
const production = () => [
  ...strings(L?.sections), ...strings(L?.sheets ?? []), ...strings(L?.terms ?? {}),
  L?.intro ?? '', ...strings(L?.overview ?? {}), ...strings(L?.acts ?? []),
  ...strings(L?.drills ?? []),
  // AND THE AUTHORED CORPUS ROWS. The mutation harness wrote a2.17's `-ment`
  // adverb and a2.08's comparative into an authored row's `notes` and all three
  // layers missed them; they were the only two blind spots in twenty-six.
  // `Item.notes` reaches no component today — it is referenced by
  // density.logic.ts, schema.ts and content.logic.ts and by nothing in
  // src/components — so nothing shipped to a learner, and it was still a hole,
  // because the claim these guards make is about what this lesson TEACHES and
  // the notes are content this build authored.
  // SCOPED TO THIS BUILD'S BLOCK. It walked the whole namespace, which from
  // a2.16 onward includes another lesson's rows, and this walk is the one that
  // checks a2.16's forms are absent — so it would have reported a2.16's own
  // corpus as a leak in a2.03.
  ...myRows().flatMap((i) => [i.fr, i.en ?? '', i.notes ?? '']),
];

const quizSection = () => sections().find((s) => s.type === 'quiz');
const questions = () => (quizSection() ? quizQuestions(quizSection() as never) : []);

/* ══════════════════════════════════════════════════════════════════════════
 *  THE SPINE
 * ═══════════════════════════════════════════════════════════════════════ */

test('a2.03.l1 is in the seed, attached to its unit, at the seq the eyebrow draws from', () => {
  ok(L, 'a2.03.l1 is not in seed.json');
  const unit = seed.units.find((u) => u.id === 'a2.03');
  ok(unit, 'the a2.03 unit is not in the seed');
  ok((unit!.lessonIds ?? []).includes('a2.03.l1'), 'the unit does not list the lesson');
  // Corrections §1: the identity block comes from the database, never from the
  // brief, and the brief's `sub` for all sixteen remaining units does not exist
  // anywhere in it.
  strictEqual(unit!.title, 'Adjective Agreement');
  strictEqual(unit!.sub, "L'accord des adjectifs");
  strictEqual(unit!.canDo, 'Can agree any adjective in all four forms and spot the invariable ones');
  deepStrictEqual(unit!.prereqUnitIds, ['a1.14', 'a1.16']);
  strictEqual(Number(unit!.seq), 10);
  strictEqual(L!.tag, `A2 · LEÇON ${String(unit!.seq).padStart(2, '0')}`);
});

test('the spine is these 25 sections in this order', { skip: noLesson }, () => {
  deepStrictEqual(sections().map((s) => s.id), SPINE);
});

test('the acts claim every section exactly once, and the Owns outweighs the grid', { skip: noLesson }, () => {
  const acts = (L!.acts ?? []);
  deepStrictEqual(acts.map((a) => ({ id: a.id, n: a.sections.length })), ACTS);
  const claimed = acts.flatMap((a) => a.sections);
  deepStrictEqual([...claimed].sort(), [...SPINE].sort());
  strictEqual(new Set(claimed).size, claimed.length, 'a section is claimed by two acts');
  const owns = acts.find((a) => a.id === OWNS_ACT)!;
  const grid = acts.find((a) => a.id === GRID_ACT)!;
  ok(owns.sections.length > grid.sections.length,
    'the grid act has as many missions as the Owns. a1.13 and a1.14 both already print a four-form grid; '
    + 'the two named groups are the only thing this lesson has that they do not.');
});

test('the lesson and the density validator are clean against the seed', { skip: noLesson }, () => {
  const issues = validateLesson(L!, L!.id);
  strictEqual(issues.length, 0, formatIssues(issues));
  const density = validateDensity(L!, new Set(seed.items.map((i) => i.id)));
  strictEqual(density.length, 0, formatDensity(density));
});

test('the reframe is verbatim in six sections and short enough to run mid-sentence', { skip: noLesson }, () => {
  strictEqual(L!.reframe, REFRAME);
  const n = sections().filter((s) => strings(s).some((x) => x.includes(REFRAME))).length;
  strictEqual(n, REFRAME_SECTIONS,
    'the density validator wants three and the good lessons use six to eight');
  // Doctrine §B.4: an A2 reframe is a rule the learner runs while the sentence
  // is already moving. A COUNT GUARD CANNOT SEE IT GET LONGER — replacing the
  // constant replaces it everywhere and the count does not move — which the
  // mutation harness found. Twelve words is the cap density.logic.ts puts on
  // every string in an xl section, and it is the right ceiling for the same
  // reason.
  ok(REFRAME.trim().split(/\s+/).length <= 12, 'the reframe is too long to apply between the noun and the adjective');
});

/* ══════════════════════════════════════════════════════════════════════════
 *  THE GRID, CELL BY CELL
 * ═══════════════════════════════════════════════════════════════════════ */

test('all four forms exist for every pattern, cell by cell, as the row the learner is scored on', { skip: noLesson }, () => {
  PATTERNS.forEach((p, pi) => {
    GRID[p].forEach((adj, ci) => {
      const id = cellId(pi, ci);
      const row = byId.get(id);
      ok(row, `${id} (${p}/${SUBJECTS[ci]}) is not in the seed`);
      strictEqual(row!.fr, `${SUBJECTS[ci]} ${adj}.`, `${id} is the wrong sentence`);
      ok((row!.respell ?? '').endsWith(RESPELL[p][ci]),
        `${id} respells as ${JSON.stringify(row!.respell)} and should end in ${JSON.stringify(RESPELL[p][ci])}`);
      strictEqual(row!.theme, THEME);
      strictEqual(row!.level, 'a2');
    });
  });
});

test('the grid on screen prints the same sixteen cells as the rows', { skip: noLesson }, () => {
  // a2.13 §6.2: a grid rendered from its own table can disagree with the cards
  // the learner is scored on, and both the batch and the merge missed it.
  const grid = byIdSec('s04-grid') as { rows: { cells: string[] }[] };
  ok(grid, 's04-grid is missing');
  strictEqual(grid.rows.length, 4);
  PATTERNS.forEach((p, pi) => deepStrictEqual(grid.rows[pi].cells, GRID[p], `s04-grid row ${pi}`));
});

test('the reference sheet prints the same sixteen cells and the same sixteen respellings', { skip: noLesson }, () => {
  // a2.14 §5: the same shape as above, one file apart, and the two mutations
  // that "corrected" a2.14's sheet were caught by the batch and MISSED by its
  // test, which was looking at the cards.
  const sheet = (L!.sheets ?? [])[0];
  ok(sheet, 'the lesson has no reference sheet');
  const grid = sheet.sections?.find((s) => (s as { id?: string }).id === 'sheet-grid') as { rows: string[][] };
  const say = sheet.sections?.find((s) => (s as { id?: string }).id === 'sheet-say') as { rows: string[][] };
  ok(grid && say, 'the sheet is missing sheet-grid or sheet-say');
  PATTERNS.forEach((p, pi) => {
    deepStrictEqual(grid.rows[pi].slice(1), GRID[p], `sheet-grid row ${pi}`);
    deepStrictEqual(say.rows[pi].slice(1), RESPELL[p], `sheet-say row ${pi}`);
  });
});

test('the reference sheet renders only what ReferenceSheet.tsx draws', { skip: noLesson }, () => {
  // teach, letterGrid and table, and nothing else. a1.13 ships a `cheatSheet`
  // inside a sheet today and it draws its title and nothing under it.
  const sheet = (L!.sheets ?? [])[0];
  const kinds = new Set((sheet.sections ?? []).map((s) => s.type));
  for (const k of kinds) ok(['teach', 'letterGrid', 'table'].includes(k), `the sheet holds a ${k}, which the sheet renderer does not draw`);
  ok(kinds.has('table') && kinds.has('teach'), 'the sheet should hold both tables and prose');
});

/* ══════════════════════════════════════════════════════════════════════════
 *  THE -EUX MASCULINE PLURAL. THIS IS THE ONE THAT MATTERS MOST.
 * ═══════════════════════════════════════════════════════════════════════ */

test('the -eux masculine plural is IDENTICAL to the masculine singular, and it is DELIBERATE', { skip: noLesson }, () => {
  // DO NOT "FIX" THIS BY ADDING AN s.
  //
  // An adjective already ending in -x has nowhere to put a plural s, so
  // `sérieuxs` is not French and never has been. a1.14 teaches the fact for two
  // specific words — its grammarIntroduced says "Invariance of the masculine
  // plural on adjectives already ending in -s or -x: vieux, mauvais" — and this
  // lesson generalises it from two words to a class of twenty-five. That
  // generalisation is the single largest thing a2.03 adds to a1.14, and the
  // repeated word on the grid is what makes it visible.
  const [mSg, , mPl] = GRID.eux;
  strictEqual(mSg, mPl, 'the -eux masculine singular and plural must be the same word');
  strictEqual(RESPELL.eux[0], RESPELL.eux[2], 'and they must respell the same way');
  const sg = byId.get(cellId(1, 0))!;
  const pl = byId.get(cellId(1, 2))!;
  strictEqual(sg.fr.split(' ').pop(), pl.fr.split(' ').pop(), 'the two seed rows disagree');
  // And the section that teaches it names a1.14, because pointing at the earlier
  // instance IS the teaching. Doctrine §B.7.
  const s = byIdSec('s10-nos');
  ok(s, 's10-nos is missing and it is the section that teaches the identical cell');
  ok(strings(s).some((x) => namesUnitLabel(x, 'a1.14')), 's10-nos does not name a1.14');
});

test('the over-pluralised form appears only where it is marked as wrong', { skip: noLesson }, () => {
  const LEGAL = new Set(['s18-errors', 's24-quiz', 's15-cold', 's22-review']);
  const shape = /(?<![\p{L}\p{N}'’-])(?:sérieuxs|sérieuxes|marrons|kakis|turquoises|sportifves)(?![\p{L}\p{N}'’-])/iu;
  const offenders = sections().filter((s) => strings(s).some((x) => shape.test(x))).map((s) => s.id);
  for (const id of offenders) ok(LEGAL.has(id!), `${id} prints an over-pluralised form outside the sections that mark it wrong`);
  ok(offenders.length > 0, 'nothing anywhere prints the wrong form as an error, so the guard guards nothing');
});

/* ══════════════════════════════════════════════════════════════════════════
 *  THE INVARIABLE CLASS
 * ═══════════════════════════════════════════════════════════════════════ */

test('the invariable class is taught as a class, with a regular adjective in the SAME section', { skip: noLesson }, () => {
  // The brief's second layout claim, and the reason it matters: the learner has
  // just spent twenty screens learning that describing words change shape, so a
  // word that refuses reads as the rule failing unless an ordinary one is on the
  // same screen doing the opposite to the same noun.
  const s = byIdSec('s16-never') as { examples: { fr: string }[] };
  ok(s, 's16-never is missing');
  deepStrictEqual(s.examples.slice(0, 2).map((e) => e.fr), CONTRAST_PAIR,
    's16-never must open with the regular colour and then the invariable one, in that order');
  // A MINIMAL PAIR: same noun, same number, one word apart.
  const stem = (x: string) => x.replace(/\s+\S+\.$/, '');
  strictEqual(stem(CONTRAST_PAIR[0]), stem(CONTRAST_PAIR[1]), 'the two are not a minimal pair');
  // Both are real rows.
  for (const fr of CONTRAST_PAIR) ok(seed.items.some((i) => i.fr === fr), `${fr} is not a seed row`);
  // And the section names a1.13, which owns the invariable colours and says so
  // 176 times. Restating it without naming it would be the third telling.
  ok(strings(s).some((x) => namesUnitLabel(x, 'a1.13')), 's16-never does not name a1.13');
});

test('the invariable pattern is one word in all four cells', { skip: noLesson }, () => {
  const forms = new Set(GRID.invariable);
  strictEqual(forms.size, 1, 'the invariable pattern has more than one form');
  for (let c = 0; c < 4; c += 1) {
    const row = byId.get(cellId(3, c))!;
    strictEqual(row.fr.split(' ').pop(), 'marron.', `${cellId(3, c)} does not end in the same word`);
  }
});

test('act 4 extends the class past the two colours a1.13 released', { skip: noLesson }, () => {
  // a1.13's 53 itemIds release `marron`, `orange`, `vert foncé` and `vert pomme`
  // and none of the four below. That is what makes this act new rather than a
  // third telling of a1.13's.
  const s = byIdSec('s17-newcolour');
  ok(s, 's17-newcolour is missing');
  const text = strings(s).join('\n');
  for (const w of ['kaki', 'crème', 'bleu marine', 'bleu clair']) {
    ok(hasPhrase(text, w), `s17-newcolour does not use ${w}`);
  }
});

/* ══════════════════════════════════════════════════════════════════════════
 *  THE SOUND CHANGE, BY ITEM
 * ═══════════════════════════════════════════════════════════════════════ */

test('the -eux and -if sound changes are each covered by a listening item, by item', { skip: noLesson }, () => {
  const ear = questions().filter((q) => q.format === 'listenChoose');
  strictEqual(ear.length, 3, 'three ear questions');
  const eux = byId.get(cellId(1, 1))!.fr;
  const iff = byId.get(cellId(2, 1))!.fr;
  ok(ear.some((q) => q.say === eux), `no listenChoose plays ${JSON.stringify(eux)}, and the -eux feminine is the one agreement the ear can genuinely do`);
  ok(ear.some((q) => q.say === iff), `no listenChoose plays ${JSON.stringify(iff)}`);
});

test('no ear question offers two forms that are one sound', { skip: noLesson }, () => {
  // Corrections §5. Every singular/plural pair in this lesson is one sound, and
  // that is the POINT of the listening act, so an ear question offering two
  // members of one pair would have no correct answer.
  const groups = PATTERNS.flatMap((p) => [[GRID[p][0], GRID[p][2]], [GRID[p][1], GRID[p][3]]])
    .filter(([a, b]) => a !== b);
  for (const q of questions()) {
    if (q.format !== 'listenChoose') continue;
    const opts = q.opts ?? [];
    for (const [x, y] of groups) {
      for (let i = 0; i < opts.length; i += 1) {
        for (let j = 0; j < opts.length; j += 1) {
          if (i === j) continue;
          // Fires only when two options differ ONLY by a member of one group.
          ok(opts[i].replace(x, y) !== opts[j],
            `a listenChoose offers ${JSON.stringify(opts[i])} against ${JSON.stringify(opts[j])}, which are one sound`);
        }
      }
    }
  }
});

test('the listening section says the feminine is audible and the plural is not', { skip: noLesson }, () => {
  const s = byIdSec('s06-silent') as { lines: unknown[]; questions: unknown[] };
  ok(s, 's06-silent is missing');
  ok(s.lines.length >= 4 && s.questions.length >= 3, 's06-silent has lines and questions');
  const ear = byIdSec('s12-ear') as { rows: { cells: string[] }[] };
  ok(ear, 's12-ear is missing');
  strictEqual(ear.rows.length, 3, 'the ear table covers the three groups whose feminine is audible');
  ok(ear.rows.length <= 6, 'tapTable is not in ownsLayout() and six rows is the Pixel 6 ceiling');
  for (const p of ['default', 'eux', 'if']) {
    const row = ear.rows.find((r) => r.cells[0] === GRID[p][0]);
    ok(row, `s12-ear has no row for the ${p} group`);
    strictEqual(row!.cells[1], GRID[p][1], `s12-ear shows the wrong feminine for ${p}`);
  }
});

/* ══════════════════════════════════════════════════════════════════════════
 *  THE THREE COLD ADJECTIVES
 * ═══════════════════════════════════════════════════════════════════════ */

test('the cold adjectives appear in exactly two sections and nowhere else', { skip: noLesson }, () => {
  const forms = Object.values(COLD).flat();
  const shape = new RegExp(`(?<![\\p{L}\\p{N}'’-])(?:${forms.join('|')})(?![\\p{L}\\p{N}'’-])`, 'iu');
  for (const s of sections()) {
    const hit = strings(s).find((x) => shape.test(x));
    if (hit) ok(COLD_HOMES.includes(s.id!), `${s.id} prints a cold adjective: ${JSON.stringify(hit.slice(0, 80))}`);
  }
  // AND THEY MUST STILL BE THERE. A guard whose reservation list has quietly
  // emptied is a guard that has stopped guarding.
  for (const home of COLD_HOMES) {
    const s = byIdSec(home);
    ok(s, `${home} is missing`);
    for (const head of Object.keys(COLD)) {
      ok(strings(s).some((x) => hasPhrase(x, head)), `${home} does not name ${head}`);
    }
  }
});

test('no cold adjective is a corpus row, an itemId, a deck release, a term or a drill', { skip: noLesson }, () => {
  const forms = Object.values(COLD).flat();
  for (const id of L!.itemIds) {
    const row = byId.get(id);
    if (!row) continue;
    for (const f of forms) ok(!hasPhrase(row.fr, f), `${id} ${JSON.stringify(row.fr)} holds the cold form ${f}`);
  }
  for (const f of forms) {
    ok(!strings(L!.terms ?? {}).some((x) => hasPhrase(x, f)), `a term names ${f}`);
    ok(!strings(L!.drills ?? []).some((x) => hasPhrase(x, f)), `a drill names ${f}`);
    ok(!strings(L!.sheets ?? []).some((x) => hasPhrase(x, f)), `the sheet names ${f}`);
  }
  // The rows they live in elsewhere are NOT carried into this lesson.
  for (const id of ['fr.sons.couleurs.013', 'fr.sons.adjectifs-essentiels.094', 'fr.sons.muettes.027']) {
    ok(!L!.itemIds.includes(id), `${id} is a cold adjective's row and it is in itemIds`);
  }
});

test('the exam makes the learner PRODUCE the cold forms, in free text', { skip: noLesson }, () => {
  // a2.15 §6: a groupDrill `check` is an mcq, so a mission cannot be the
  // production surface. The only surfaces in this app that make a learner
  // produce free text are the quiz's typeIn and errorSpot, and the dictée, and
  // a dictée can only name a corpus row — which these three deliberately are
  // not. So the exam is the production and it has to be.
  const forms = Object.values(COLD).flat();
  const produced = questions().filter((q) => (q.format === 'typeIn' || q.format === 'errorSpot')
    && forms.some((f) => hasPhrase(q.answer ?? '', f)));
  ok(produced.length >= 5, `only ${produced.length} free-text questions produce a cold form`);
  // And every one of the three is covered, not just the easy one.
  for (const head of Object.keys(COLD)) {
    const mine = COLD[head as keyof typeof COLD];
    ok(produced.some((q) => mine.some((f) => hasPhrase(q.answer ?? '', f))), `nothing makes the learner produce a form of ${head}`);
  }
});

/* ══════════════════════════════════════════════════════════════════════════
 *  THE NEIGHBOURS
 * ═══════════════════════════════════════════════════════════════════════ */

test('no form of beau, nouveau or vieux is taught on any production surface', { skip: noLesson }, () => {
  // a2.16 is seq 11, the very next lesson on the trail. Both prerequisites
  // already teach these forms heavily, so a2.16 is a systematisation rather than
  // a first teach, and this list is the only thing that keeps it worth building.
  const shape = new RegExp(`(?<![\\p{L}\\p{N}'’-])(?:${BEAU_FORMS.join('|')})(?![\\p{L}\\p{N}'’-])`, 'iu');
  for (const s of production()) {
    const m = shape.exec(s);
    ok(!m, `a production surface prints ${JSON.stringify(m?.[0])}: ${JSON.stringify(s.slice(0, 90))}`);
  }
  // AND THE GUARD MUST BE ABLE TO FIRE. `beaucoup` contains `beau`; if the
  // boundary ever regresses to a substring check, this proves it immediately.
  ok(!shape.test('beaucoup'), 'the shape fires on "beaucoup", so every use of it is a false positive');
  ok(shape.test('un beau jardin'), 'the shape does not fire on a real leak');
});

test('no -ment adverb is taught, and the guard cannot fire on a noun or on English', { skip: noLesson }, () => {
  // a2.17 is seq 12 and it is BUILT on the feminine forms this lesson authors.
  //
  // THE SUFFIX IS NOT GUARDABLE AS A SUFFIX. `arrondissement`, `appartement`,
  // `moment`, `comment` and — the one that actually caught this build — the unit
  // title `Agreement` all end in those letters and none is an adverb. The shape
  // is built from FEMININE STEMS instead, which is the thing a2.17 owns.
  const stems = ['grande', 'sérieuse', 'sportive', 'heureuse', 'curieuse', 'généreuse',
    'joyeuse', 'dangereuse', 'nombreuse', 'impulsive', 'naïve', 'active', 'courageuse',
    'verte', 'petite', 'douce', 'lente', 'rapide', 'simple',
    'vrai', 'évidem', 'constam', 'seule', 'égale', 'directe', 'exacte',
    'certaine', 'probable', 'normale', 'finale', 'facile'];
  const shape = new RegExp(`(?<![\\p{L}\\p{N}'’-])(?:${stems.join('|')})ment(?![\\p{L}\\p{N}'’-])`, 'iu');
  for (const s of production()) {
    const m = shape.exec(s);
    ok(!m, `a production surface prints the adverb ${JSON.stringify(m?.[0])}: ${JSON.stringify(s.slice(0, 90))}`);
  }
  for (const w of ['sérieusement', 'heureusement', 'vraiment', 'activement']) {
    ok(shape.test(w), `the shape does not fire on ${w}, so it would not catch a real leak into a2.17`);
  }
  for (const w of ['Agreement', 'arrondissement', 'appartement', 'moment', 'comment']) {
    ok(!shape.test(w), `the shape fires on ${JSON.stringify(w)}, which is a noun or an English word`);
  }
});

test('no comparative is taught', { skip: noLesson }, () => {
  const shape = new RegExp(`(?<![\\p{L}\\p{N}'’-])(?:${COMPARATIVE_FORMS.join('|')})(?![\\p{L}\\p{N}'’-])`, 'iu');
  for (const s of production()) ok(!shape.test(s), `a production surface prints a comparative: ${JSON.stringify(s.slice(0, 90))}`);
});

test('every neighbouring unit this lesson hands off to is named on a learner surface', { skip: noLesson }, () => {
  const text = production().join('\n');
  for (const u of ['a1.13', 'a1.14', 'a1.16', 'a2.01', 'a2.16', 'a2.17', 'a2.08']) {
    ok(namesUnitLabel(text, u), `${u} is named nowhere, so the hand-off has quietly been dropped`);
    ok(seed.units.some((x) => x.id === u), `${u} is named and no such unit is in the seed`);
  }
});

/* ══════════════════════════════════════════════════════════════════════════
 *  a1.03's ENDING POPULATION
 * ═══════════════════════════════════════════════════════════════════════ */

test('nothing this lesson authored or imported joins a1.03\'s measured ending population', { skip: noLesson }, () => {
  // Three A1 builds broke on this and the brief predicted this one would, on the
  // grounds that "every orange row carries gender". It does not: fr.sons
  // .couleurs.009 and .011 both carry gender NULL, and the gendered `orange`
  // rows are the FRUIT. Measured with the REAL function: a1.08 shipped a
  // hand-rolled copy carrying a filter the real one does not have, let four rows
  // through and moved two of a1.03's printed cards.
  const mine = L!.itemIds.map((id) => byId.get(id)).filter(Boolean) as Item[];
  for (const r of mine) {
    strictEqual((r as { gender?: string }).gender ?? null, null,
      `${r.id} ${JSON.stringify(r.fr)} carries a gender and would join the ending population`);
  }
  const pop = endingPopulation(seed.items);
  const contributed = pop.filter((r) => L!.itemIds.includes((r as { id: string }).id));
  strictEqual(contributed.length, 0, 'this lesson contributes rows to a1.03\'s ending population');
});

/* ══════════════════════════════════════════════════════════════════════════
 *  IMPORTED, NOT RE-AUTHORED
 * ═══════════════════════════════════════════════════════════════════════ */

test('every adjective this lesson imports is imported, by id, and not re-authored', { skip: noLesson }, () => {
  // Corrections §2: five A2 builds in a row authored NOT ONE headword, and every
  // brief said "probe whether these exist" when the answer was always yes. This
  // build authors three and imports twenty-three, and the ids are asserted so a
  // later author cannot quietly duplicate one.
  const IMPORTED: [string, string][] = [
    ['grand', 'fr.sons.adjectifs-essentiels.001'],
    ['grande', 'fr.sons.muettes.047'],
    ['sérieux', 'fr.sons.adjectifs-essentiels.037'],
    ['heureux', 'fr.a1.emotions.001'],
    ['heureuse', 'fr.sons.muettes.053'],
    ['joyeux', 'fr.sons.adjectifs-essentiels.266'],
    ['curieux', 'fr.sons.adjectifs-essentiels.096'],
    ['généreux', 'fr.sons.adjectifs-essentiels.234'],
    ['dangereux', 'fr.sons.adjectifs-essentiels.052'],
    ['nombreux', 'fr.sons.adjectifs-essentiels.118'],
    ['impulsif', 'fr.sons.adjectifs-essentiels.261'],
    ['naïf', 'fr.sons.adjectifs-essentiels.256'],
    ['marron', 'fr.sons.couleurs.011'],
    ['orange', 'fr.sons.couleurs.009'],
    ['kaki', 'fr.sons.couleurs.030'],
    ['crème', 'fr.sons.couleurs.032'],
    ['bleu marine', 'fr.sons.couleurs.026'],
    ['bleu clair', 'fr.sons.couleurs.019'],
    ['vert foncé', 'fr.sons.couleurs.022'],
    ['vert', 'fr.sons.consonnes.127'],
    ['verte', 'fr.sons.muettes.049'],
    ['Les jumeaux sont sportifs.', 'fr.a2.description-personnes-objets.003'],
    ['Les jumelles sont sportives.', 'fr.a2.description-personnes-objets.004'],
  ];
  strictEqual(IMPORTED.length, IMPORTED_COUNT);
  for (const [word, id] of IMPORTED) {
    const row = byId.get(id);
    ok(row, `${id} (${word}) was not carried into the seed, so its card would draw blank`);
    strictEqual(row!.fr, word, `${id} is not ${word}`);
    ok(L!.itemIds.includes(id), `${id} is carried and not in itemIds`);
    ok(!id.startsWith('fr.a2.adjectifs-essentiels.'), `${id} looks re-authored rather than imported`);
  }
});

test('this build authored exactly three headwords, bare and ungendered', { skip: noLesson }, () => {
  // sportif and sportive are two of the six absences corrections §2 lists for
  // the whole level. `sérieuse` is a THIRD and it is in NO absence list
  // anywhere: 0 rows at any status, against `sérieux`'s three.
  const authored = myRows().filter((i) => i.kind === 'word');
  deepStrictEqual(authored.map((r) => r.fr).sort(), [...AUTHORED_HEADWORDS].sort());
  for (const r of authored) {
    strictEqual((r as { gender?: string }).gender ?? null, null, `${r.id} carries a gender; adjectives are not nouns`);
    ok(!/\s/.test(r.fr), `${r.id} is a headword with a space in it`);
    ok(r.respell, `${r.id} has no respelling, so its card is one the learner cannot say`);
  }
});

test('the whole authored set is 33 rows in one theme, and the lesson holds 56 items', { skip: noLesson }, () => {
  const authored = myRows();
  strictEqual(authored.length, AUTHORED_COUNT);
  for (const r of authored) strictEqual(r.theme, THEME);
  strictEqual(L!.itemIds.length, ITEM_COUNT);
});

test('no two rows in this theme share an fr, the way flashhub-coverage counts it', { skip: noLesson }, () => {
  const strip = (s: string) => s.replace(/^(le |la |les |l'|un |une |des |du |de la )/i, '').toLowerCase().trim();
  const inTheme = seed.items.filter((i) => i.theme === THEME);
  const byFr = new Map<string, string[]>();
  for (const i of inTheme) byFr.set(strip(i.fr), [...(byFr.get(strip(i.fr)) ?? []), i.id]);
  const dupes = [...byFr.entries()].filter(([, ids]) => ids.length > 1);
  deepStrictEqual(dupes, [], 'two rows sharing an fr in one theme is one card served twice');
});

/* ══════════════════════════════════════════════════════════════════════════
 *  THE NASALS AND THE REPAIRS
 * ═══════════════════════════════════════════════════════════════════════ */

test('29 superscripts, 27 the checker sees and 2 it cannot, both asserted by name', { skip: noLesson }, () => {
  // Corrections §6, measured through the REAL checker by breaking each
  // superscript back to a plain n one at a time.
  const authored = myRows();
  let seen = 0; let missed = 0;
  const blind: string[] = [];
  for (const r of authored) {
    const respell = r.respell ?? '';
    for (let i = 0; i < respell.length; i += 1) {
      if (respell[i] !== 'ⁿ') continue;
      const broken = respell.slice(0, i) + 'n' + respell.slice(i + 1);
      if (hasPlainNasalFor(r.fr, broken)) seen += 1;
      else { missed += 1; blind.push(r.id); }
    }
    ok(!hasPlainNasalFor(r.fr, respell), `${r.id} ${JSON.stringify(respell)} is flagged as authored`);
  }
  strictEqual(seen + missed, SUPERSCRIPTS);
  strictEqual(seen, SEEN_NASALS);
  strictEqual(missed, BLIND_NASALS);
  // BY NAME. `GRAHⁿD` in `Elle est grande.` is the pure case: one nasal and the
  // checker cannot see it. In `Elles sont grandes.` the row IS flagged when you
  // break it, but on `sohⁿ` — so breaking only the GRAHⁿD leaves the checker
  // quiet. That is a2.11's `entendre` on this lesson's own hero row.
  deepStrictEqual(blind.sort(), ['fr.a2.adjectifs-essentiels.002', 'fr.a2.adjectifs-essentiels.004']);
  for (const id of blind) ok((byId.get(id)!.respell ?? '').includes('GRAHⁿD'), `${id} no longer holds GRAHⁿD`);
});

test('the four invisible repairs landed in the seed, and the false positive did NOT gain a superscript', { skip: noLesson }, () => {
  // Four real plain-n violations the checker cannot see, all the same shape: a
  // nasal followed by a consonant inside the token.
  const REPAIRED: [string, string][] = [
    ['fr.sons.adjectifs-essentiels.052', 'dahⁿ-zhuh-RUH'],
    ['fr.sons.adjectifs-essentiels.118', 'nohⁿ-BRUH'],
    ['fr.sons.adjectifs-essentiels.261', 'aⁿ-pewl-SEEF'],
    ['fr.sons.couleurs.022', 'VEHR fohⁿ-SAY'],
  ];
  for (const [id, value] of REPAIRED) {
    const row = byId.get(id);
    ok(row, `${id} was not carried into the seed`);
    strictEqual(row!.respell, value, `${id} did not get its repair`);
    ok(!hasPlainNasalFor(row!.fr, row!.respell!), `${id} is flagged after the repair`);
  }
  // AND THE ONE THE CHECKER DOES SEE, which is a FALSE POSITIVE. `crème` is
  // /kʁɛm/ with a real /m/ and no nasal vowel at all; the checker reads `EHM` at
  // the end of a token as one. Invariants §3 measured `jaune`/`ZHOHN` as exactly
  // this and said the fix is to DROP THE H, never to add a superscript. A later
  // author "completing" the repair set with a ⁿ here would teach a sound that is
  // not in the word.
  const creme = byId.get('fr.sons.couleurs.032');
  ok(creme, 'crème was not carried into the seed');
  strictEqual(creme!.respell, 'KREM');
  ok(!creme!.respell!.includes('ⁿ'), 'crème has gained a superscript and there is no nasal vowel in it');
  ok(hasPlainNasalFor('crème', 'KREHM'), 'the checker no longer fires on KREHM, so the false positive has been fixed upstream');
  ok(!hasPlainNasalFor('crème', 'KREM'), 'KREM is flagged, so the recorded fix no longer works');
});

test('the house-convention repair put heureuse on the same stem as heureux', { skip: noLesson }, () => {
  // Not a nasal at all. `heureux` is `uh-RUH` and `heureuse` was `eu-REUZ`: two
  // spellings of /ø/ in one word, sitting one above the other on the family
  // screen, where a learner would read the STEM as changing when only the ending
  // does. Ledger a2.13 §9 measured that the shipped corpus writes /ø œ/ as `UH`.
  strictEqual(byId.get('fr.a1.emotions.001')?.respell, 'uh-RUH');
  strictEqual(byId.get('fr.sons.muettes.053')?.respell, 'uh-REUZ');
});

test('the two sportif sentences gained the respelling and the drill they never had', { skip: noLesson }, () => {
  // a2.13 §1: a row without a respelling reaches a card the learner cannot say.
  // These two are the ONLY published evidence of sportif and sportive anywhere
  // in 27,600 rows, and neither had one. a2.15 §1's "absent is not nowhere",
  // again.
  const pairs: [string, string][] = [
    ['fr.a2.description-personnes-objets.003', 'lay zhü-MOH sohⁿ spor-TEEF'],
    ['fr.a2.description-personnes-objets.004', 'lay zhü-MEL sohⁿ spor-TEEV'],
  ];
  for (const [id, value] of pairs) {
    const row = byId.get(id);
    ok(row, `${id} was not carried into the seed`);
    strictEqual(row!.respell, value);
    ok((row!.drills ?? []).includes('flashcard'), `${id} carries no flashcard drill, so a deck release has nothing to draw`);
    ok((row!.drills ?? []).includes('dictation'), `${id} lost the dictation drill it arrived with`);
  }
});

/* ══════════════════════════════════════════════════════════════════════════
 *  THE DICTÉE
 * ═══════════════════════════════════════════════════════════════════════ */

test('the dictée spells in LETTERS mode, and the two cells that cannot are named', { skip: noLesson }, () => {
  // Corrections §4: WORD mode hands every real word over pre-spelled, so a
  // lesson about a spelling tested in word mode is testing nothing.
  const d = sections().find((s) => s.type === 'dictation') as { itemIds: string[] };
  ok(d, 'the lesson has no dictation section');
  strictEqual(d.itemIds.length, DICTEE_COUNT);
  for (const id of d.itemIds) {
    const row = byId.get(id);
    ok(row, `${id} is a dictée target and is not in the seed`);
    strictEqual(dicteeMode(row!.fr), 'letters', `${id} ${JSON.stringify(row!.fr)} spells in WORD mode and tests nothing`);
    ok((row!.drills ?? []).includes('dictation'), `${id} has no dictation drill`);
    ok(!/[œŒ]/u.test(row!.fr), `${id} holds U+0153, which the letter bank and the target both drop`);
  }
  // THE TWO THAT CANNOT BE TESTED, BY NAME. `Elles sont sérieuses.` and
  // `Elles sont sportives.` are both eighteen letters, and there is no subject
  // shorter than `Elles sont`. Naming them is the point: a gap you name costs an
  // hour and a gap you paper over costs a session.
  const TOO_LONG = ['Elles sont sérieuses.', 'Elles sont sportives.'];
  for (const fr of TOO_LONG) {
    strictEqual(dicteeMode(fr), 'words', `${fr} now spells in letters mode; the dictée should take it`);
    const row = seed.items.find((i) => i.fr === fr)!;
    ok(!d.itemIds.includes(row.id), `${row.id} is in WORD mode and is a dictée target`);
    ok(!(row.drills ?? []).includes('dictation'), `${row.id} carries a dictation drill it cannot honour`);
  }
  // And every OTHER grid cell is in.
  const gridIds = PATTERNS.flatMap((_, pi) => [0, 1, 2, 3].map((ci) => cellId(pi, ci)));
  for (const id of gridIds) {
    const row = byId.get(id)!;
    strictEqual(d.itemIds.includes(id), dicteeMode(row.fr) === 'letters',
      `${id} is ${dicteeMode(row.fr)} mode and its dictée membership disagrees`);
  }
});

/* ══════════════════════════════════════════════════════════════════════════
 *  THE EXAM
 * ═══════════════════════════════════════════════════════════════════════ */

test('one quiz, five rounds, 32 questions, at most half mcq, every question with a why and a ref', { skip: noLesson }, () => {
  strictEqual(sections().filter((s) => s.type === 'quiz').length, 1, 'a second quiz section is silently never rendered');
  const q = quizSection() as { rounds: { id: string; targets?: string[] }[] };
  strictEqual(q.rounds.length, ROUND_COUNT);
  const qs = questions();
  strictEqual(qs.length, QUESTION_COUNT);
  const mcq = qs.filter((x) => (x.format ?? 'mcq') === 'mcq').length;
  ok(mcq * 2 <= qs.length, `${mcq} of ${qs.length} are mcq and at most half may be`);
  const ids = new Set(SPINE);
  for (const [i, x] of qs.entries()) {
    ok(x.why, `question ${i + 1} has no why`);
    ok(x.ref && ids.has(x.ref), `question ${i + 1} has no valid ref`);
  }
});

test('every free-text question accepts the answer it displays, and every errorSpot shows what to fix', { skip: noLesson }, () => {
  for (const [i, q] of questions().entries()) {
    if (q.format !== 'typeIn' && q.format !== 'errorSpot') continue;
    ok(q.answer, `question ${i + 1} is ${q.format} with no answer`);
    ok(matchesAccept(q.answer!, q.accept ?? []),
      `question ${i + 1} does not accept ${JSON.stringify(q.answer)}`);
    // a1.16 authored two questions whose phrase lived only in `prompt` and
    // ErrorSpotCard rendered `q` alone, so the learner was asked to fix a phrase
    // that never appeared on screen.
    if (q.format === 'errorSpot') ok(q.prompt, `question ${i + 1} is an errorSpot with no prompt`);
  }
});

test('each round leads on a DIFFERENT trigger, so every drill can fire', { skip: noLesson }, () => {
  // `drillForRound` returns the FIRST target that has a drill and then stops, so
  // a drill named only in second place is dead content. a1.05 ships two such
  // drills and its own test fails on them today.
  const q = quizSection() as { rounds: { id: string; targets?: string[] }[] };
  const leads = q.rounds.map((r) => r.targets?.[0]);
  strictEqual(new Set(leads).size, leads.length, `two rounds lead on the same trigger: ${leads.join(', ')}`);
  const triggers = (L!.errorTriggers ?? []).map((t) => t.id);
  strictEqual(triggers.length, 5);
  for (const t of triggers) ok(leads.includes(t), `${t} is never a first target, so its drill can never fire`);
  const drills = new Set((L!.drills ?? []).map((d) => d.id));
  strictEqual(drills.size, 10, 'five drills and five retests');
  for (const t of L!.errorTriggers ?? []) {
    ok(drills.has(t.drill), `${t.id} names a drill that does not exist`);
    ok(!t.retest || drills.has(t.retest), `${t.id} names a retest that does not exist`);
  }
});

test('a sort drill names corpus ids rather than display strings', { skip: noLesson }, () => {
  for (const d of L!.drills ?? []) {
    if (d.format !== 'sort') continue;
    for (const item of d.items ?? []) ok(byId.has(item), `drill ${d.id} names ${JSON.stringify(item)}, which is not a corpus id`);
  }
});

/* ══════════════════════════════════════════════════════════════════════════
 *  REACHABILITY AND LAYOUT
 * ═══════════════════════════════════════════════════════════════════════ */

test('every itemId resolves and is either drawn by a section or released with a flashcard drill', { skip: noLesson }, () => {
  // a1.08 shipped forty-three ids that resolved perfectly and were rendered by
  // nothing. Being in itemIds makes a row available; it does not put it on a
  // screen.
  const drawn = new Set<string>();
  const walk = (v: unknown) => {
    if (Array.isArray(v)) { for (const x of v) walk(x); return; }
    if (!v || typeof v !== 'object') return;
    const o = v as Record<string, unknown>;
    for (const k of ['itemId', 'practiceOn']) {
      if (typeof o[k] === 'string') drawn.add(o[k] as string);
      if (Array.isArray(o[k])) for (const x of o[k] as unknown[]) if (typeof x === 'string') drawn.add(x);
    }
    for (const k of ['itemIds', 'items']) {
      if (Array.isArray(o[k])) for (const x of o[k] as unknown[]) if (typeof x === 'string' && x.startsWith('fr.')) drawn.add(x);
    }
    for (const x of Object.values(o)) walk(x);
  };
  walk(L!.sections); walk(L!.drills ?? []); walk(L!.terms ?? {});
  const released = new Set((L!.deckTranche ?? []).flat());
  for (const id of L!.itemIds) {
    const row = byId.get(id);
    ok(row, `${id} is an itemId and does not resolve, so its card renders blank`);
    ok(drawn.has(id) || (released.has(id) && (row!.drills ?? []).includes('flashcard')),
      `${id} is neither drawn by a section nor released with a flashcard drill`);
  }
});

test('the deck tranches are index-aligned with the acts and release nothing twice', { skip: noLesson }, () => {
  const tranches = L!.deckTranche ?? [];
  strictEqual(tranches.length, (L!.acts ?? []).length);
  const seen = new Set<string>();
  for (const t of tranches) {
    for (const id of t) {
      ok(L!.itemIds.includes(id), `a tranche releases ${id}, which is not an itemId`);
      ok(!seen.has(id), `${id} is released by two tranches`);
      seen.add(id);
    }
  }
});

test('every speak target carries voiceflash, which is what the mic scores against', { skip: noLesson }, () => {
  const p = sections().find((s) => s.type === 'practice') as { skill: string; itemIds: string[] };
  ok(p, 'the lesson has no practice section');
  // `practice` with skill 'write' draws no writing surface at all.
  strictEqual(p.skill, 'speak');
  for (const id of p.itemIds) {
    ok((byId.get(id)?.drills ?? []).includes('voiceflash'), `${id} is a speak target with no voiceflash drill`);
  }
});

test('the layout rules that are bugs rather than preferences', { skip: noLesson }, () => {
  for (const s of sections()) {
    ok(s.id, 'a section has no id');
    if (s.type === 'commonErrors') ok((s as { swipe?: boolean }).swipe, `${s.id} is a commonErrors without swipe, which draws a blank screen`);
    if (s.type === 'tapTable') ok(((s as { rows: unknown[] }).rows).length <= 6, `${s.id} has more than six tapTable rows`);
    const terms = (s as { terms?: string[] }).terms ?? [];
    ok(terms.length <= 3, `${s.id} declares ${terms.length} term chips and the renderer shows three`);
    for (const t of terms) ok((L!.terms ?? {})[t], `${s.id} names a term the lesson does not declare`);
    // AND THE CHIPS ON ONE ROW MUST FIT ON IT. Found on a Pixel 6: `words ending
    // in -eux` and `words ending in -if` share a row on s13-bank and the second
    // was drawn as "words ending in", losing the two characters that name the
    // group. Every host gate was green — the strings are valid and both chips
    // render — and only the WIDTH was wrong. Read off three hub screens on the
    // same pass: 37 ("the ones that never change" + "four shapes") renders in
    // FULL, 39 ("words ending in -eux" + "words ending in -if") is cut. A first
    // version of this guard set at 32 failed two screens that are demonstrably
    // fine. Like the title ceiling it is a width, so it is necessary and not
    // sufficient and anything from 34 up wants a look at the phone.
    const chipWidth = terms.reduce((n, t) => n + ((L!.terms ?? {})[t]?.term.length ?? 0), 0);
    ok(chipWidth <= 37, `${s.id}'s term chips total ${chipWidth} characters and the row budget is 37; the overflow is truncated`);
    // Ledger §a2.14-13: the ceiling is a WIDTH and not a count, so 27 is
    // necessary and not sufficient. It is kept at 27 because the house goals
    // heading is exactly 27 and demonstrably fits.
    ok(((s as { title?: string }).title ?? '').length <= 27, `${s.id} title is over 27 characters`);
    // `frSub` is the one field that is deliberately French. a2.14 §14 put an
    // English constant in one and nothing in the band could see it.
    const frSub = (s as { frSub?: string }).frSub ?? '';
    ok(frSub, `${s.id} has no frSub`);
    const french = /[àâçéèêëîïôûùüÿœ’]/i.test(frSub) || frSub.includes("'")
      || ['la', 'le', 'les', 'un', 'une', 'des', 'du', 'de', 'en', 'dans', 'ce', 'ces', 'que',
        'qui', 'ne', 'pas', 'vous', 'quel', 'trois', 'quatre', 'cinq', 'tout', 'et', 'sur',
        'avec', 'pour', 'au', 'aux', 'mots', 'faire'].some((w) => hasPhrase(frSub, w));
    ok(french, `${s.id} has an frSub that does not look French: ${JSON.stringify(frSub)}`);
  }
  // No `table` in the flow: a table at layer core is a density failure, and the
  // full grid belongs in the sheet.
  ok(!sections().some((s) => s.type === 'table'), 'a table in the flow is a table-in-core density failure');
  // No `cheatSheet` anywhere: inside a reference sheet it draws its title and
  // nothing under it, and a1.13 ships exactly that today.
  ok(!sections().some((s) => s.type === 'cheatSheet'), 'a cheatSheet draws its title and nothing else');
});

test('the reading passage is one block, and every glossary key can match', { skip: noLesson }, () => {
  const r = byIdSec('s14-reading') as { text: string; glossary?: { word: string }[]; questions?: unknown[]; questionsInModal?: boolean };
  ok(r, 's14-reading is missing');
  ok(!/\n/.test(r.text), 'PassagePage splits on sentence ends and an authored newline is silently discarded');
  ok(r.questionsInModal && (r.questions ?? []).length > 0,
    'a reading glossary needs questionsInModal AND questions, or nothing reaches the glossary renderer');
  for (const g of r.glossary ?? []) {
    ok(g.word.trim().split(/\s+/).length < 5, `${g.word} is five or more words and MAX_GLOSS_WORDS is four`);
    ok(r.text.includes(g.word), `${g.word} does not appear in the passage`);
  }
});

/* ══════════════════════════════════════════════════════════════════════════
 *  THE ROLE PLAY
 * ═══════════════════════════════════════════════════════════════════════ */

test('every role-play turn offers at least two ways to answer and says what the model means', { skip: noLesson }, () => {
  // `scenario.logic.test.ts` enforces both across the WHOLE SEED and nothing in
  // the doctrine, the invariants, the corrections or the ledger mentions either.
  // a2.03 v1 shipped three turns with one alternative apiece; every gate in the
  // build was green and the suite went red the moment the merge landed.
  const s = byIdSec('s19-scenario') as { turns: { user: string; userEn?: string; alts?: { fr: string }[] }[] };
  ok(s, 's19-scenario is missing');
  ok(s.turns.length >= 6, 'the conversation is at least six turns');
  for (const [i, t] of s.turns.entries()) {
    ok((t.alts?.length ?? 0) >= 2, `turn ${i} offers fewer than two alternatives`);
    ok(t.userEn?.trim(), `turn ${i} has no userEn, so the reveal shows a sentence the learner cannot read`);
    const all = [t.user, ...(t.alts ?? []).map((a) => a.fr)];
    strictEqual(new Set(all).size, all.length, `turn ${i} repeats an answer`);
  }
});

/* ══════════════════════════════════════════════════════════════════════════
 *  HOUSE COPY AND THE SECTION MIX
 * ═══════════════════════════════════════════════════════════════════════ */

test('no em dash, no banned word, and no jargon this arc avoids', { skip: noLesson }, () => {
  const text = production().join('\n');
  ok(!text.includes('—'), 'an em dash reached a learner surface');
  ok(!/honest/i.test(text), '"honest" reached a learner surface');
  // THE LINE IS MEASURED. a1.13 uses `feminine` 71 times on its learner surfaces
  // and `plural` 40, so those are house vocabulary for this arc rather than
  // jargon. What none of a1.13, a1.14, a1.16, a2.01 or a2.15 uses even once is
  // the list below, and that is the real line.
  const JARGON = ['inflection', 'inflected', 'paradigm', 'declension', 'morpheme',
    'morphology', 'attributive', 'predicative', 'prenominal', 'postnominal',
    'suffix', 'suffixation', 'orthography', 'phoneme', 'lexeme', 'denominal',
    'first person', 'second person', 'third person', 'conjugation', 'conjugate'];
  for (const j of JARGON) {
    for (const w of [j, `${j}s`]) {
      ok(!hasPhrase(text, w), `grammar jargon on a learner surface: ${w}`);
    }
  }
  // `intro` in its own assertion. It is drawn on the overview card AND the
  // lesson cover, and a2.11 shipped jargon there while every other gate passed.
  for (const j of JARGON) ok(!hasPhrase(L!.intro, j), `Lesson.intro holds jargon: ${j}`);
  ok(L!.intro.length > 80, 'intro is too short to be the learner surface it is');
});

test('the section mix is deliberately not the verb band\'s', { skip: noLesson }, () => {
  // Measured across all ten shipped A2 lesson bodies on 2026-08-13:
  //   groupDrill 45 and cardDeck 42 out of 255 sections, 34% between them
  //   useCases 0 and vocabThemes 0 in ALL TEN
  // This lesson ships one groupDrill against an average of 4.5, and is the first
  // in the band to use either of the two the verb lessons never reached for.
  const mix: Record<string, number> = {};
  for (const s of sections()) mix[s.type] = (mix[s.type] ?? 0) + 1;
  strictEqual(mix.groupDrill ?? 0, 1, 'the band averages 4.5 groupDrills and leaning on it is what makes a lesson feel like the ten before it');
  strictEqual(mix.cardDeck ?? 0, 3);
  strictEqual(mix.tapTable ?? 0, 2);
  strictEqual(mix.useCases ?? 0, 2, 'useCases is 0 in all ten shipped A2 lessons');
  strictEqual(mix.vocabThemes ?? 0, 1, 'vocabThemes is 0 in all ten shipped A2 lessons');
  strictEqual(mix.quiz ?? 0, 1);
});

test('useCases and vocabThemes are drawn by something', { skip: noLesson }, () => {
  // Invariants §1: a field with no reader is worse than an absent one, because
  // it looks like the job is done. MissionSection.tsx has no `case` for either;
  // its shared fallback — which lives AFTER the switch precisely so a `break`
  // lands on it — hands both to SectionView, which draws `situation`/`fr`/`en`
  // for a useCases card and VocabThemesView for a vocabThemes hub. That is a
  // source fact and it is checked here as a content fact: every card carries
  // exactly the fields those two components read.
  const uc = sections().filter((s) => s.type === 'useCases') as { cases: { situation: string; fr: string; en: string }[] }[];
  for (const s of uc) for (const c of s.cases) {
    ok(c.situation && c.fr && c.en, 'a useCases card is missing one of the three lines the renderer draws');
  }
  const vt = sections().filter((s) => s.type === 'vocabThemes') as { themes: { title: string; cards: { fr: string; en: string }[] }[] }[];
  for (const s of vt) for (const t of s.themes) {
    ok(t.title && t.cards.length > 0, 'a vocabThemes theme has no title or no cards');
    for (const c of t.cards) ok(c.fr && c.en, 'a vocabThemes card is missing fr or en');
  }
});

/* ══════════════════════════════════════════════════════════════════════════
 *  THE AUDIO BRIEFS
 * ═══════════════════════════════════════════════════════════════════════ */

test('every recordingId a section names is briefed, and the contrast takes say they are one take', { skip: noLesson }, () => {
  // Invariants §10: a constraint on how something is recorded becomes invisible
  // the moment the clip is delivered, so the briefs are pinned here.
  const briefed = new Map((L!.audio?.recorded ?? []).map((r) => [r.id, r] as const));
  const named = new Set<string>();
  const walk = (v: unknown) => {
    if (Array.isArray(v)) { for (const x of v) walk(x); return; }
    if (!v || typeof v !== 'object') return;
    const o = v as Record<string, unknown>;
    if (typeof o.recordingId === 'string') named.add(o.recordingId);
    for (const x of Object.values(o)) walk(x);
  };
  walk(L!.sections);
  for (const id of named) ok(briefed.has(id), `${id} is named by a section and briefed nowhere`);
  ok(briefed.size >= 8, 'the audio brief has thinned out');
  // The three takes whose whole value is that they are ONE take.
  for (const id of ['rec-a2-03-grid', 'rec-a2-03-ear', 'rec-a2-03-break']) {
    const r = briefed.get(id);
    ok(r, `${id} is not briefed`);
    ok(/one take|ONE take|one breath/i.test(r!.desc), `${id} does not say it is one take, which is the only thing that makes it a contrast rather than two performances`);
  }
  // And the marron take says the opposite thing, because its value is that
  // nothing happens in it.
  const inv = briefed.get('rec-a2-03-invariable');
  ok(inv && /identical/i.test(inv.desc), 'the invariable take does not require its four lines to be identical');
});
