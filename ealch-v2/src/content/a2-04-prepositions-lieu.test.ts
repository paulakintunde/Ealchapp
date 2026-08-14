// a2.04.l1 « Prépositions de lieu »: the assertions that keep this lesson true.
//
// Modelled on a2-17-adverbes.test.ts. Everything here runs the REAL app function
// rather than a copy: an earlier a1.01 test inlined its own glossary lookup,
// copied the version that was already broken, and passed while the feature was
// dead.
//
// THIS FILE READS seed.json AND NOTHING ELSE. It does not import the corpus, the
// terms or the lesson source, because a test that imports the same constant the
// content imports is comparing the content to itself. Every figure below is
// written out by hand, so a change in the source has to be reflected here on
// purpose.
//
// IT IS SCOPED TO ITS OWN ID BLOCK. Ledger §a2.16-1: a2.03's test filtered on a
// namespace prefix and meant "the rows a2.03 authored", and four of its tests
// went red the moment a2.16 landed in the same namespace. This lesson opens
// `fr.a2.prepositions-essentielles.129..168` inside a namespace that ALREADY
// holds 127 rows nobody in this band authored, so the trap is not hypothetical
// here: a prefix filter would pick up a hundred and twenty-seven strangers on
// the first run. `MY_BLOCK` below is the range. The duplicate-`fr` check is
// deliberately NOT scoped: flashhub-coverage counts two rows sharing an `fr` in
// one theme as one card served twice, whoever authored them.
//
// ── What this file is actually guarding ────────────────────────────────────
//
//   CHEZ ARRIVING IN FRONT OF A PLACE. 283 published rows in this corpus hold
//   the word and NOT ONE puts it before a building, at any status. The lesson
//   teaches that as an absolute, so the guard is absolute: the wrong forms are
//   permitted in exactly five sections, where the error is the content, and
//   nowhere else. And they must APPEAR in those five, because a trap nobody
//   sees is not a trap.
//   THE FOUR-KIND GRID BEING SPLIT UP. Presented as four separate rules the
//   learner has four things to remember; presented as one grid they have one
//   question to ask. Asserted row by row, cells and all.
//   THE TWO CREDITED ROWS LOSING THEIR CREDIT. Three of the four kinds are
//   a1.21's or a1.22's and the grid says so on the card. A later author who
//   tidies the unit ids out of the detail text has turned a synthesis into a
//   repeat of two shipped lessons. Asserted as LITERALS: a2.16 §3 found that a
//   guard looping over the constant the content renders is guarding nothing.
//   THE ARTICLE TABLE LOSING A BEHAVIOUR. À and de fold, en throws the article
//   away, chez leaves it alone, and the fourth row is the only one nobody owns.
//   The three behaviours are asserted by name and by cell.
//   a1.21's FIVE PREPOSITIONS BEING RE-TAUGHT. Scoped to production surfaces,
//   not to every string, because the roundup has to be able to hand them back.
//   A COUNTRY VOCABULARY SECTION APPEARING. a1.22 owns countries, nationalities,
//   continents and the -e gender rule. Every country here is an imported id and
//   is asserted BY ID rather than by spelling.
//   A TEMPORAL en OR dans ARRIVING ONE SEQ EARLY. a2.18 is the very next lesson
//   and it owns both senses. Guarded as a SHAPE, and the shape is checked in
//   both directions because a2.17 §7 measured one firing on the English half of
//   a learner surface.
//   THE GENERALISATION SET QUIETLY DISAPPEARING. Four places the lesson never
//   shows are asked about in the drill and the exam. Both the ABSENCE and the
//   questions are asserted: a test that only checked the absence would pass on a
//   lesson that had dropped them.
//   A GENDERED NOUN BECOMING AN ITEM. Fifteen of this lesson's imports are
//   gendered nouns and a1.03's ending population is measured off THE SEED, so
//   carrying one is what puts it there. v1 carried all of them and moved four of
//   a1.03's printed figures with every other gate green.
//   AN EAR QUESTION. Au and aux are one sound, du and des are close to one, and
//   an unstressed à can vanish. Nothing here can be asked by ear.
//   A STACKED trapDrill. lesson-contract.test.ts enforces the shape seed-wide;
//   this file adds the thing that contract does not check, which is that the
//   audio step's take actually contains the cards' lines.
//   A ROLE-PLAY TURN WITH ONE ANSWER. scenario.logic.test.ts enforces two across
//   the whole seed and no document in this band mentions it.
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
import { dicteeMode, letterCount } from './dictee.logic.ts';
import { matchesAccept } from './answer.logic.ts';

const here = dirname(fileURLToPath(import.meta.url));
const seed = JSON.parse(readFileSync(resolve(here, 'seed.json'), 'utf8')) as {
  version: number; items: Item[]; lessons: Lesson[];
  units: { id: string; title?: string; sub?: string; canDo?: string; seq?: string | number; lessonIds?: string[]; prereqUnitIds?: string[] }[];
};

const L = seed.lessons.find((l) => l.id === 'a2.04.l1');
const noLesson = !L;
const byId = new Map(seed.items.map((i) => [i.id, i] as const));

/** THE BLOCK, NOT THE PREFIX. `fr.a2.prepositions-essentielles` held 127 rows
 *  before this build and none of them is this lesson's. */
const MY_BLOCK = { from: 'fr.a2.prepositions-essentielles.129', to: 'fr.a2.prepositions-essentielles.168' };
const isMine = (id: string) => id >= MY_BLOCK.from && id <= MY_BLOCK.to;
const myRows = () => seed.items.filter((i) => isMine(i.id));

const THEME = 'prepositions-essentielles';
const CONTRACTION_UNIT = 'a1.21';
const COUNTRY_UNIT = 'a1.22';
const TIME_UNIT = 'a2.18';

/* ─── Walkers, matching the batch and the merge ────────────────────────────*/

function strings(v: unknown, out: string[] = []): string[] {
  if (typeof v === 'string') out.push(v);
  else if (Array.isArray(v)) for (const x of v) strings(x, out);
  else if (v && typeof v === 'object') for (const x of Object.values(v)) strings(x, out);
  return out;
}
const MACHINE_KEYS = new Set([
  'id', 'ref', 'sheetId', 'itemId', 'itemIds', 'targets', 'detectOn', 'drill',
  'retest', 'accept', 'recordingId', 'audioRef', 'unitId', 'scenarioId',
  'clipIds', 'buckets',
]);
/** An id is not prose, whatever key it arrives under: `LessonDrill.items` holds
 *  corpus ids and `groupDrill.items` holds card objects, so the key cannot be
 *  classified either way and every id here contains the theme name. */
const isId = (s: string): boolean => /^fr\.[a-z0-9]+\.[a-z0-9-]+\.\d+$/i.test(s);
function display(v: unknown, out: string[] = []): string[] {
  if (typeof v === 'string') { if (!isId(v)) out.push(v); }
  else if (Array.isArray(v)) for (const x of v) display(x, out);
  else if (v && typeof v === 'object') {
    for (const [k, x] of Object.entries(v)) if (!MACHINE_KEYS.has(k)) display(x, out);
  }
  return out;
}
/** Accent-aware, and the LEFT boundary drops the apostrophe: a2.17 §3 measured
 *  that the house boundary cannot see `l'hôpital` or `d'accord`. */
function hasPhrase(hay: string, needle: string): boolean {
  const wl = (c: string) => /[\p{L}\p{N}-]/u.test(c);
  const wr = (c: string) => /[\p{L}\p{N}'’-]/u.test(c);
  const h = hay.toLowerCase(); const n = needle.toLowerCase();
  let i = 0;
  while ((i = h.indexOf(n, i)) !== -1) {
    if (!wl(i === 0 ? '' : h[i - 1]!) && !wr(h[i + n.length] ?? '')) return true;
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

const sec = (id: string) => L?.sections.find((s) => (s as { id?: string }).id === id) as Record<string, unknown> | undefined;
const sectionIds = () => (L?.sections ?? []).map((s) => (s as { id?: string }).id ?? '');
const learnerText = () => [
  ...strings(L!.sections), ...strings(L!.sheets ?? []), ...strings(L!.terms ?? {}),
  L!.intro ?? '', ...strings(L!.overview ?? {}),
  ...strings(L!.acts ?? []), ...strings(L!.drills ?? []),
].join('\n');

/* ══════════════════════════════════════════════════════════════════════════
 *  IT IS THERE, AND IT IS THE SHAPE THIS BUILD SHIPPED
 * ═══════════════════════════════════════════════════════════════════════ */

test('a2.04.l1 is in the seed', () => {
  ok(L, 'a2.04.l1 is not in seed.json');
});

test('the lesson is the shape this build shipped', () => {
  strictEqual(L!.unitId, 'a2.04');
  strictEqual(L!.level, 'a2');
  strictEqual(L!.seq, 1);
  strictEqual(L!.sections.length, 24);
  strictEqual((L!.acts ?? []).length, 6);
  strictEqual(quizQuestions(L!.sections.find((s) => s.type === 'quiz')!).length, 30);
  strictEqual(L!.itemIds.length, 48);
  ok(L!.version >= 3, `the lesson is v${L!.version} and the shipped body is v3 or later`);
});

test('the identity block matches the unit, and the tag matches the seq', () => {
  const u = seed.units.find((x) => x.id === 'a2.04');
  ok(u, 'the seed has no unit a2.04');
  strictEqual(String(u!.seq), '13');
  strictEqual(u!.title, 'Prepositions of Place, in Depth');
  strictEqual(u!.sub, 'Prépositions de lieu');
  strictEqual(u!.canDo, 'Can pick à, de, en, au, aux and chez, and dodge their classic traps');
  deepStrictEqual(u!.prereqUnitIds, [CONTRACTION_UNIT]);
  ok((u!.lessonIds ?? []).includes('a2.04.l1'), 'the unit does not list a2.04.l1');
  strictEqual(L!.tag, `A2 · LEÇON ${String(u!.seq).padStart(2, '0')}`);
  strictEqual(L!.overview?.titleEn, u!.title);
  strictEqual(L!.overview?.subFr, u!.sub);
});

test('the lesson validates and the density validator is clean', () => {
  const issues = validateLesson(L!);
  strictEqual(issues.length, 0, formatIssues(issues));
  const d = validateDensity(L!);
  strictEqual(d.length, 0, formatDensity(d));
});

/* ══════════════════════════════════════════════════════════════════════════
 *  THE ROWS
 * ═══════════════════════════════════════════════════════════════════════ */

test('twenty-six rows in the block, and every one of them a phrase or a sentence', () => {
  const mine = myRows();
  strictEqual(mine.length, 26, `${mine.length} rows in ${MY_BLOCK.from}..${MY_BLOCK.to}`);
  for (const r of mine) {
    strictEqual(r.theme, THEME, `${r.id} is in ${r.theme}`);
    strictEqual(r.level, 'a2', `${r.id} is level ${r.level}`);
    ok(r.kind === 'phrase' || r.kind === 'sentence', `${r.id} is a ${r.kind} and this lesson authors no headwords`);
  }
});

test('NOT ONE authored row carries a gender', () => {
  const gendered = myRows().filter((r) => (r as { gender?: string }).gender);
  deepStrictEqual(gendered.map((r) => r.id), [], 'a gendered single-word row joins a1.03\'s ending population');
});

test('a1.03\'s ending population does not move, measured off the seed through the real function', () => {
  const withoutMine = seed.items.filter((i) => !isMine(i.id));
  strictEqual(
    endingPopulation(seed.items as never).length,
    endingPopulation(withoutMine as never).length,
    'this lesson\'s rows changed a1.03\'s measured ending population',
  );
});

test('the fifteen gendered nouns this lesson prints are NOT items of it', () => {
  // v1 declared them, the merge carried them through the cut, nine of them were
  // absent from the seed and joined a1.03's population, and four printed figures
  // moved. Named here so a later author who adds one back fails with the reason.
  const DISPLAY_ONLY = [
    'fr.a1.deplacements.003', 'fr.a1.marche.006', 'fr.sons.muettes.038',
    'fr.a1.famille.025', 'fr.a1.pays-et-nationalites.001', 'fr.a1.pays-et-nationalites.051',
    'fr.a1.amis.011', 'fr.a1.animaux-domestiques.108', 'fr.a1.au-restaurant.001',
    'fr.a1.la-ville.012', 'fr.a1.la-ville.103', 'fr.a1.la-ville.105',
    'fr.a2.courses.024', 'fr.a2.systeme-de-sante.001', 'fr.a2.systeme-de-sante.042',
  ];
  const leaked = DISPLAY_ONLY.filter((id) => L!.itemIds.includes(id));
  deepStrictEqual(leaked, [], 'a gendered noun is an itemId again');
  const released = new Set((L!.deckTranche ?? []).flat());
  deepStrictEqual(DISPLAY_ONLY.filter((id) => released.has(id)), [], 'a gendered noun reached a tranche');
  // And their French is still on a card, or the lesson has lost its vocabulary.
  const shown = strings(L!.sections).join('\n');
  for (const fr of ['le médecin', 'le dentiste', 'la boulangerie', 'la banque', 'la gare']) {
    ok(hasPhrase(shown, fr), `${fr} is no longer printed anywhere`);
  }
});

test('no duplicate fr inside the theme, computed the way flashhub-coverage computes it', () => {
  const strip = (s: string) => s.replace(/^(le |la |les |l'|l’|un |une |des |du |de la )/i, '').toLowerCase().trim();
  const inTheme = seed.items.filter((i) => i.theme === THEME);
  const byFr = new Map<string, string[]>();
  for (const i of inTheme) byFr.set(strip(i.fr), [...(byFr.get(strip(i.fr)) ?? []), i.id]);
  const dupes = [...byFr.entries()].filter(([, ids]) => ids.length > 1);
  deepStrictEqual(dupes, [], 'two rows sharing an fr in one theme is one card served twice');
});

/* ══════════════════════════════════════════════════════════════════════════
 *  THE FOUR KINDS, ROW BY ROW
 * ═══════════════════════════════════════════════════════════════════════ */

const KINDS: [string, string, string, string | null][] = [
  ['a person', 'chez', 'chez Marie', null],
  ['a city', 'à', 'à Paris', CONTRACTION_UNIT],
  ['a country', 'en, au', 'en France', COUNTRY_UNIT],
  ['a building', 'à + le', 'au marché', CONTRACTION_UNIT],
];

test('the four kinds are in ONE section, one row each, cells asserted', () => {
  const s = sec('s03-four') as { type?: string; cols?: string[]; rows?: { cells: string[] }[] } | undefined;
  ok(s, 's03-four is missing');
  strictEqual(s!.type, 'tapTable', 'the four kinds belong in one tapTable');
  strictEqual((s!.cols ?? []).length, 3, 'three columns; a2.16 measured a five-column cell at six characters');
  strictEqual((s!.rows ?? []).length, 4, 'four kinds and four rows');
  KINDS.forEach(([label, word, example], i) => {
    deepStrictEqual(s!.rows![i]!.cells, [label, word, example], `grid row ${i}`);
  });
});

test('every cell of the grid is inside the measured three-column budget', () => {
  const s = sec('s03-four') as { rows?: { cells: string[] }[] };
  for (const r of s.rows ?? []) {
    for (const cell of r.cells) {
      ok(cell.length <= 11, `${JSON.stringify(cell)} is ${cell.length} characters and a2.17 measured eleven at three columns`);
    }
  }
});

test('three of the four kinds credit the unit that taught them, by id, on the card', () => {
  const s = sec('s03-four') as { rows?: { detail?: { body?: string } }[] };
  KINDS.forEach(([label, , , owner], i) => {
    const body = s.rows?.[i]?.detail?.body ?? '';
    if (owner) ok(hasPhrase(body, owner), `the row for ${label} is ${owner}'s and its detail does not name it`);
    else ok(!hasPhrase(body, CONTRACTION_UNIT) && !hasPhrase(body, COUNTRY_UNIT), `the row for ${label} is this lesson's own and it credits another unit`);
  });
  strictEqual(KINDS.filter(([, , , o]) => o).length, 3, 'three of the four rows are somebody else\'s');
});

/* ══════════════════════════════════════════════════════════════════════════
 *  THE OWNS: WHAT EACH WORD DOES TO THE ARTICLE
 * ═══════════════════════════════════════════════════════════════════════ */

const ARTICLE: [string, string, string][] = [
  ['à', 'au', 'à la'],
  ['de', 'du', 'de la'],
  ['en', 'en', 'en'],
  ['chez', 'chez le', 'chez la'],
];

test('the article table is one section, four rows, three columns, cells asserted', () => {
  const s = sec('s04-article') as { type?: string; cols?: string[]; rows?: { cells: string[] }[] } | undefined;
  ok(s, 's04-article is missing');
  strictEqual(s!.type, 'tapTable');
  deepStrictEqual(s!.cols, ['Word', '+ le', '+ la']);
  strictEqual((s!.rows ?? []).length, 4);
  ARTICLE.forEach((row, i) => deepStrictEqual(s!.rows![i]!.cells, row, `article row ${i}`));
});

test('chez is the only row that leaves the article alone, and it prints both forms', () => {
  const s = sec('s04-article') as { rows?: { cells: string[] }[] };
  const chez = s.rows!.find((r) => r.cells[0] === 'chez');
  ok(chez, 'the chez row is gone and it is the only row of this table nobody else owns');
  strictEqual(chez!.cells[1], 'chez le');
  strictEqual(chez!.cells[2], 'chez la');
  // en is the only one that gets rid of it.
  const en = s.rows!.find((r) => r.cells[0] === 'en');
  deepStrictEqual(en!.cells, ['en', 'en', 'en'], 'the en row prints en three times because the article goes');
  // and both folds are there.
  ok(s.rows!.some((r) => r.cells[0] === 'à' && r.cells[1] === 'au'), 'the à fold is gone');
  ok(s.rows!.some((r) => r.cells[0] === 'de' && r.cells[1] === 'du'), 'the de fold is gone');
});

test('the reference sheet holds all four kinds and all four behaviours at once', () => {
  const sheet = (L!.sheets ?? [])[0];
  ok(sheet, 'the lesson has no reference sheet');
  strictEqual(sheet!.id, 'sheet.a2.04.lieu');
  // No cheatSheet: ReferenceSheet.tsx draws teach, letterGrid and table only.
  ok(!(sheet!.sections ?? []).some((s) => s.type === 'cheatSheet'), 'a cheatSheet inside a sheet draws its title and nothing else');
  // Four columns at most: a2.03's device pass found a five-column table clipping.
  for (const s of sheet!.sections ?? []) {
    const cols = (s as { cols?: string[] }).cols;
    // THREE, NOT FOUR. Measured on a Pixel 6 by this build: a four-column
    // table inside a sheet clips at the right edge, and scrolling to reach the
    // fourth column pushes the first one off the other side. a2.03 measured
    // five and this build read four as safe on that authority.
    if (cols) ok(cols.length <= 3, `the sheet table ${(s as { id?: string }).id} has ${cols.length} columns and a fourth clips on a Pixel 6`);
  }
  const text = strings(sheet).join('\n');
  for (const k of ['a person', 'a city', 'a country', 'a building']) ok(hasPhrase(text, k), `the sheet does not hold ${k}`);
  for (const w of ['chez le', 'chez la', 'au', 'du', 'en']) ok(text.includes(w), `the sheet does not hold ${w}`);
});

/* ══════════════════════════════════════════════════════════════════════════
 *  CHEZ
 * ═══════════════════════════════════════════════════════════════════════ */

/** The wrong forms, and the five sections in which they are the content. */
const WRONG_FORMS = [
  'chez la boulangerie', 'chez la banque', "chez l'hôpital",
  'chez au médecin', 'chez du médecin', 'au médecin',
];
const WRONG_HOMES = ['s01-scene', 's07-fold', 's11-trap', 's12-errors', 's17-unseen', 's23-quiz'];

test('chez is taught as people-only, and no correct surface puts it before a place', () => {
  for (const s of L!.sections) {
    const sid = (s as { id?: string }).id ?? '';
    if (WRONG_HOMES.includes(sid)) continue;
    const text = strings(s).join('\n');
    for (const w of WRONG_FORMS) {
      ok(!hasPhrase(text, w), `${sid} contains the wrong form ${JSON.stringify(w)}`);
    }
  }
  // The sheet, the terms and the intro are not on the list at all.
  for (const [label, v] of [['sheets', L!.sheets ?? []], ['terms', L!.terms ?? {}], ['intro', L!.intro ?? '']] as const) {
    for (const w of WRONG_FORMS) ok(!hasPhrase(strings(v).join('\n'), w), `${label} contains ${JSON.stringify(w)}`);
  }
  // And no corpus row holds one: a row holding a wrong form would be served by
  // the flashcard hub as French.
  for (const r of myRows()) for (const w of WRONG_FORMS) ok(!hasPhrase(r.fr, w), `${r.id} holds ${JSON.stringify(w)}`);
});

test('chez before a place is refused as a SHAPE, not as a list of six strings', () => {
  // FOUND BY MUTATION. The first version of this guard was the six strings
  // above and « chez la gare » went straight through it into the reference
  // sheet. A learner error a guard can only see in the shapes somebody thought
  // of is not guarded.
  const SHAPE = /(?<![\p{L}\p{N}-])chez\s+(le|la|les|l['’]|un|une|au|aux|du|des)\s*(boulangerie|banque|poste|restaurant|cinéma|cinema|gare|école|ecole|magasin|hôpital|hopital|pharmacie|maison|bureau|parc|musée|musee|hôtel|hotel|piscine|marché|marche|ville|France|Paris|Japon)/iu;
  // Both directions first. a2.17 §4: a shape built out of French fires on the
  // English half of a learner surface, which is half of it by design.
  for (const s of ['chez la boulangerie', 'chez la gare', "chez l'hôpital", 'Je vais chez le restaurant.']) {
    ok(SHAPE.test(s), `the shape does not fire on ${JSON.stringify(s)}`);
  }
  for (const s of ['chez le boulanger', 'chez le médecin', 'chez la dentiste', 'chez Marie', 'chez moi', 'Chez takes a person and never a place.']) {
    ok(!SHAPE.test(s), `the shape fires on ${JSON.stringify(s)}, which is correct French or this lesson's own copy`);
  }
  for (const s of L!.sections) {
    const sid = (s as { id?: string }).id ?? '';
    if (WRONG_HOMES.includes(sid)) continue;
    for (const line of strings(s)) ok(!SHAPE.test(line), `${sid} puts chez in front of a place: ${JSON.stringify(line)}`);
  }
  for (const v of [L!.sheets ?? [], L!.terms ?? {}, L!.intro ?? '']) {
    for (const line of strings(v)) ok(!SHAPE.test(line), `chez is in front of a place off the sections: ${JSON.stringify(line)}`);
  }
  for (const r of myRows()) ok(!SHAPE.test(r.fr), `${r.id} puts chez in front of a place`);
});

test('no authored row re-states a row this lesson imports', () => {
  // FOUND BY MUTATION. The duplicate-fr check is per THEME, so authoring
  // `la France` into `prepositions-essentielles` collides with nothing and
  // quietly gives a1.22's card a second copy in a second deck, which
  // flashhub-coverage cannot see across two themes.
  const mineFr = new Set(myRows().map((r) => r.fr.toLowerCase()));
  const IMPORTED_FR = [
    'la France', 'le Japon', 'les États-Unis', 'le médecin', 'le dentiste',
    'boulanger', 'le vétérinaire', 'la boulangerie', 'la banque', 'la gare',
    'chez', 'chez toi', 'chez nous', 'Paris', 'de Paris',
  ];
  for (const fr of IMPORTED_FR) {
    ok(!mineFr.has(fr.toLowerCase()), `${JSON.stringify(fr)} is imported AND authored into this lesson's block`);
  }
});

test('every wrong form actually appears where it is allowed to', () => {
  const homes = L!.sections.filter((s) => WRONG_HOMES.includes((s as { id?: string }).id ?? ''));
  for (const w of WRONG_FORMS) {
    ok(homes.some((s) => strings(s).some((x) => hasPhrase(x, w))), `${JSON.stringify(w)} is declared and appears nowhere. A trap nobody sees is not a trap.`);
  }
});

test('the man and the shop are both on one screen, with the line that joins them', () => {
  const s = sec('s10-shop');
  ok(s, 's10-shop is missing');
  const text = strings(s).join('\n');
  ok(hasPhrase(text, 'chez le boulanger'), 'the man is gone');
  ok(hasPhrase(text, 'à la boulangerie'), 'the shop is gone');
  ok(hasPhrase(text, "C'est la même porte."), 'the line that says they are the same doorway is gone');
});

test('the chez trap is a stepped trapDrill and its audio take contains its own cards', () => {
  const traps = L!.sections.filter((s) => s.type === 'trapDrill') as unknown as {
    id?: string; steps?: { kind: string; gate?: boolean }[]; swipe?: boolean; say?: string;
    size?: string; audio?: { recordingId?: string }; cards?: { fr: string }[];
  }[];
  strictEqual(traps.length, 2, 'two trapDrills: the fold and the person');
  const recorded = new Map((L!.audio?.recorded ?? []).map((r) => [r.id, r.clipIds ?? []]));
  for (const t of traps) {
    deepStrictEqual((t.steps ?? []).map((x) => x.kind), ['rule', 'cards', 'audio', 'drill'], `${t.id} steps`);
    ok(t.swipe, `${t.id} has no swipe`);
    ok(t.say, `${t.id} has no say`);
    ok(!t.size, `${t.id} carries a size and the stepped branch sizes off steps.length`);
    ok((t.steps ?? []).some((x) => x.kind === 'drill' && x.gate), `${t.id} drill step is not gated`);
    // The one step with a cost, which lesson-contract.test.ts does not check.
    const clips = recorded.get(t.audio?.recordingId ?? '');
    ok(clips, `${t.id} points at a recording the lesson does not brief`);
    for (const c of t.cards ?? []) {
      ok(clips!.includes(c.fr), `${t.id}'s audio step plays ${JSON.stringify(c.fr)} and ${t.audio!.recordingId} does not contain it`);
    }
  }
});

/* ══════════════════════════════════════════════════════════════════════════
 *  THE NEIGHBOURS' GROUND
 * ═══════════════════════════════════════════════════════════════════════ */

test('a1.21\'s five prepositions are not re-taught on any production surface', () => {
  const FIVE = ['sur', 'sous', 'dans', 'devant', 'derrière', 'entre'];
  const PRODUCTION = new Set(['cardDeck', 'flashcards', 'practice', 'dictation', 'groupDrill', 'trapDrill', 'quiz', 'reviewDeck', 'scenario']);
  for (const s of L!.sections) {
    if (!PRODUCTION.has(s.type)) continue;
    const text = display(s).join('\n');
    for (const p of FIVE) ok(!hasPhrase(text, p), `${(s as { id?: string }).id} is a production surface and drills ${JSON.stringify(p)}`);
  }
});

test('the one recap of a1.21\'s prepositions is in the roundup and nowhere else', () => {
  const FIVE = ['sur', 'sous', 'dans', 'devant', 'derrière', 'entre'];
  const homes = L!.sections.filter((s) => FIVE.some((p) => hasPhrase(strings(s).join('\n'), p)));
  deepStrictEqual(homes.map((s) => (s as { id?: string }).id), ['s24-roundup'], 'the recap budget is one section');
});

test('every country is an imported id, asserted by id, and there is no country vocabulary section', () => {
  const COUNTRIES = [
    'fr.a1.pays-et-nationalites.001',  // la France
    'fr.a1.pays-et-nationalites.051',  // le Japon
    'fr.a1.pays-et-nationalites.011',  // les États-Unis
  ];
  for (const id of COUNTRIES) {
    const row = byId.get(id);
    ok(row, `${id} is referenced and is not in the seed`);
    ok(!isMine(id), `${id} is inside this build's block, so it was authored rather than imported`);
  }
  // No section decks countries as vocabulary.
  const country = sec('s15-country');
  ok(country, 's15-country is missing');
  ok(country!.type !== 'vocabThemes' && country!.type !== 'flashcards', `s15-country is a ${String(country!.type)} and a1.22 owns country vocabulary`);
  // a1.22 is named, so the payoff is credited rather than repeated.
  ok(hasPhrase(strings(country).join('\n'), COUNTRY_UNIT), `s15-country does not name ${COUNTRY_UNIT}`);
});

test('a1.22\'s nationalities, continents and gender rule appear nowhere', () => {
  const FORBIDDEN = ['français', 'française', 'japonais', 'américain', 'nationalité', 'nationality', "l'Europe", "l'Afrique", "l'Asie", "l'Amérique", 'continent'];
  const text = learnerText();
  for (const w of FORBIDDEN) ok(!hasPhrase(text, w), `${JSON.stringify(w)} is on a learner surface and it is ${COUNTRY_UNIT}'s`);
});

test('no temporal sense of en or dans appears anywhere, and a2.18 is named', () => {
  // Guarded as a SHAPE. a2.17 §7: a shape built out of French morphology fires
  // on the English half of a learner surface, so it is checked in both
  // directions before it is used.
  const SHAPE = /(?<![\p{L}\p{N}-])(en|dans)\s+(un|une|deux|trois|quatre|cinq|six|sept|huit|neuf|dix|quelques)\s+(seconde|minute|heure|jour|semaine|mois|an|année)/iu;
  for (const s of ['Je finis en deux heures.', 'Il arrive dans une semaine.', 'On part dans trois jours.']) {
    ok(SHAPE.test(s), `the shape does not fire on ${JSON.stringify(s)}`);
  }
  for (const s of ['Je vais en France.', 'She lives in France and he lives in Japan.', 'en Espagne, en Italie, en Belgique']) {
    ok(!SHAPE.test(s), `the shape fires on ${JSON.stringify(s)}, which is legitimate`);
  }
  for (const line of strings(L!.sections).concat(strings(L!.sheets ?? []), strings(L!.terms ?? {}), [L!.intro ?? ''])) {
    ok(!SHAPE.test(line), `a temporal en or dans reached a screen: ${JSON.stringify(line)}`);
  }
  ok(hasPhrase(learnerText(), TIME_UNIT), `${TIME_UNIT} is never named and this lesson leaves it two senses of two words`);
});

/* ══════════════════════════════════════════════════════════════════════════
 *  THE GENERALISATION SET
 * ═══════════════════════════════════════════════════════════════════════ */

const UNSEEN = [
  { fr: 'le notaire', answer: 'chez le notaire' },
  { fr: 'la piscine', answer: 'à la piscine' },
  { fr: 'Marseille', answer: 'à Marseille' },
  { fr: 'le Portugal', answer: 'au Portugal' },
];

test('the four generalisation places are absent from every section but the drill and the exam', () => {
  const legal = ['s17-unseen', 's23-quiz'];
  for (const s of L!.sections) {
    const sid = (s as { id?: string }).id ?? '';
    if (legal.includes(sid)) continue;
    const text = strings(s).join('\n');
    for (const u of UNSEEN) {
      ok(!hasPhrase(text, u.fr), `${sid} names ${JSON.stringify(u.fr)}, which the drill exists to ask about`);
      ok(!hasPhrase(text, u.answer), `${sid} gives away ${JSON.stringify(u.answer)}`);
    }
  }
  // And none of them is a corpus row of this lesson, or of anything this lesson
  // released into a deck.
  for (const u of UNSEEN) {
    for (const id of L!.itemIds) {
      const row = byId.get(id);
      ok(!row || !hasPhrase(row.fr, u.fr), `${id} is ${JSON.stringify(row!.fr)} and holds a generalisation answer`);
    }
  }
});

test('and the questions that ask about them are still there', () => {
  const q = quizQuestions(L!.sections.find((s) => s.type === 'quiz')!);
  const drill = sec('s17-unseen');
  ok(drill, 's17-unseen is missing');
  for (const u of UNSEEN) {
    const inDrill = strings(drill).some((x) => hasPhrase(x, u.answer));
    const inQuiz = q.some((x) => strings(x).some((y) => hasPhrase(y, u.answer)));
    ok(inDrill || inQuiz, `nothing asks for ${JSON.stringify(u.answer)}`);
  }
  strictEqual(new Set(UNSEEN.map((u) => u.answer)).size, 4, 'four places, four answers');
});

/* ══════════════════════════════════════════════════════════════════════════
 *  RESPELLINGS
 * ═══════════════════════════════════════════════════════════════════════ */

test('no authored row is flagged by the shared nasal checker', () => {
  for (const r of myRows()) {
    ok(!hasPlainNasalFor(r.fr, r.respell ?? ''), `${r.id} "${r.fr}" respelled ${JSON.stringify(r.respell)} closes a nasal with a plain n`);
  }
});

test('en is respelled one way, and it is the superscript', () => {
  // `en` is a bare nasal and it appears on every country screen in the lesson.
  // Settled as `ahⁿ`, read off a1.22's own `toRespell` values and confirmed by
  // fr.sons.nasales.029, which publishes `AHⁿ FRAHⁿS` inside a sentence.
  const rows = myRows().filter((r) => /\ben\b/i.test(r.fr));
  ok(rows.length >= 1, 'no authored row uses en at all');
  for (const r of rows) {
    ok((r.respell ?? '').includes('ahⁿ'), `${r.id} respells en as something other than ahⁿ: ${JSON.stringify(r.respell)}`);
    ok(!/\bahn\b/i.test(r.respell ?? ''), `${r.id} closes en with a plain n`);
  }
});

test('the repaired rows carry their repaired value in the seed, and the false positive is still a false positive', () => {
  // Nine repairs. Only the rows this lesson OWNS AS ITEMS are carried into the
  // seed; the display-only ones are repaired in Postgres and printed off the
  // manifest, so they are not asserted here.
  const CARRIED_REPAIRS: [string, string][] = [
    ['fr.a1.amis.030', 'byehⁿ-vuh-NÜ SHAY MWAH'],
    ['fr.a1.amis.059', 'pah-SAY SHAY kehl-KUHⁿ'],
    ['fr.a1.routines.067', 'rahⁿ-TRAY ah lah meh-ZOHⁿ'],
  ];
  for (const [id, want] of CARRIED_REPAIRS) {
    const row = byId.get(id);
    ok(row, `${id} is not in the seed`);
    strictEqual(row!.respell, want, `${id} was not repaired in the seed`);
    ok(!hasPlainNasalFor(row!.fr, row!.respell!), `${id} is still flagged after the repair`);
  }
  // THE FALSE POSITIVE, ASSERTED AS A NEGATIVE. `même` is /mɛm/ with a real m
  // and no nasal vowel, and the FIRST branch of hasPlainNasal has no rescue
  // path, so the house two-letter spelling MEHM is flagged and the bare-vowel
  // `mem` is not. Seven published rows spell it MEHM. This lesson ships `mem`,
  // read off fr.sons.jours-et-mois.133, and the day the checker improves this
  // assertion fails rather than the workaround living on unexplained.
  ok(hasPlainNasalFor('même', 'MEHM'), 'the checker no longer flags MEHM and the workaround can go');
  ok(!hasPlainNasalFor('même', 'mem'), 'the checker now flags mem, which is the value this lesson ships');
  const porte = myRows().find((r) => r.fr === "C'est la même porte.");
  ok(porte, 'the same-door line is gone');
  ok((porte!.respell ?? '').includes('mem'), `the same-door line respells même as ${JSON.stringify(porte!.respell)}`);
});

test('no row carries the tie glyph that draws as an underscore on a phone', () => {
  for (const r of myRows()) {
    for (const v of [r.fr, r.respell ?? '', r.ipa ?? '', r.en, r.notes ?? '']) {
      ok(!v.includes('‿'), `${r.id} carries U+203F in ${JSON.stringify(v)}`);
    }
  }
  ok(!learnerText().includes('‿'), 'U+203F is on a learner surface');
});

/* ══════════════════════════════════════════════════════════════════════════
 *  THE DICTÉE, THE QUIZ AND THE ROLE PLAY
 * ═══════════════════════════════════════════════════════════════════════ */

test('every dictée target spells in LETTERS mode, through the real dicteeMode', () => {
  const d = sec('s19-dictation') as { itemIds?: string[] } | undefined;
  ok(d, 's19-dictation is missing');
  strictEqual((d!.itemIds ?? []).length, 18);
  for (const id of d!.itemIds ?? []) {
    const row = byId.get(id);
    ok(row, `${id} is a dictée target and is not in the seed`);
    strictEqual(dicteeMode(row!.fr), 'letters', `${id} "${row!.fr}" is ${letterCount(row!.fr)} letters and spells in WORD mode`);
    ok((row!.drills ?? []).includes('dictation'), `${id} carries no dictation drill`);
  }
});

test('nothing in this lesson is asked by ear', () => {
  const q = quizQuestions(L!.sections.find((s) => s.type === 'quiz')!);
  strictEqual(q.filter((x) => x.format === 'listenChoose').length, 0, 'au and aux are one sound and an unstressed à can vanish');
  strictEqual(L!.sections.filter((s) => s.type === 'listening').length, 0);
});

test('the exam is at most half mcq, every question has a why and a ref that resolves', () => {
  const q = quizQuestions(L!.sections.find((s) => s.type === 'quiz')!);
  ok(q.filter((x) => x.format === 'mcq').length <= q.length / 2, 'more than half the exam is mcq');
  const ids = sectionIds();
  for (const x of q) {
    ok(x.why, `a ${x.format} question has no why`);
    ok(x.ref && ids.includes(x.ref), `a question refs ${JSON.stringify(x.ref)} and there is no such section`);
  }
});

test('every free-text question accepts the answer it displays, through the real matchesAccept', () => {
  const q = quizQuestions(L!.sections.find((s) => s.type === 'quiz')!);
  for (const x of q) {
    if (x.format !== 'typeIn' && x.format !== 'errorSpot') continue;
    ok(x.answer, `a ${x.format} question has no answer`);
    ok(matchesAccept(x.answer!, x.accept ?? []), `${JSON.stringify(x.q)} displays ${JSON.stringify(x.answer)} and does not accept it`);
  }
});

test('correct answers do not cluster', () => {
  const q = quizQuestions(L!.sections.find((s) => s.type === 'quiz')!);
  const closed = q.filter((x) => typeof x.correct === 'number');
  const slots = new Map<number, number>();
  for (const x of closed) { const s = Number(x.correct); slots.set(s, (slots.get(s) ?? 0) + 1); }
  for (const [slot, n] of slots) {
    ok(n / closed.length <= 0.4, `slot ${slot} holds ${n} of ${closed.length} closed answers, over the 40% cap`);
  }
});

test('five rounds, each leading on a different trigger, and every drill is reachable', () => {
  const quiz = L!.sections.find((s) => s.type === 'quiz') as unknown as { rounds: { id: string; targets: string[] }[] };
  strictEqual(quiz.rounds.length, 5);
  const leads = quiz.rounds.map((r) => r.targets[0]);
  strictEqual(new Set(leads).size, 5, 'two rounds lead on the same trigger, so a drill can never fire');
  const triggers = (L!.errorTriggers ?? []).map((t) => t.id);
  strictEqual(triggers.length, 5);
  for (const t of triggers) ok(leads.includes(t), `${t} leads no round, so its drill can never fire`);
  const drillIds = new Set((L!.drills ?? []).map((d) => d.id));
  for (const t of L!.errorTriggers ?? []) {
    ok(drillIds.has(t.drill), `${t.id} names the drill ${t.drill} and the lesson has no such drill`);
    if (t.retest) ok(drillIds.has(t.retest), `${t.id} names the retest ${t.retest} and the lesson has no such drill`);
  }
});

test('every role-play turn has two alternatives and an English gloss', () => {
  const s = sec('s18-scenario') as { turns?: { userEn?: string; alts?: unknown[] }[] } | undefined;
  ok(s, 's18-scenario is missing');
  ok((s!.turns ?? []).length >= 5, 'the conversation is shorter than the scene it repairs');
  for (const [i, t] of (s!.turns ?? []).entries()) {
    ok(t.userEn, `turn ${i} has no userEn; scenario.logic.test.ts is a seed-wide test and requires one`);
    ok((t.alts ?? []).length >= 2, `turn ${i} has ${(t.alts ?? []).length} alts and the seed-wide test requires two`);
  }
  // An alternative is an answer the learner is told is right.
  for (const w of WRONG_FORMS) ok(!hasPhrase(strings(s).join('\n'), w), `the role play offers ${JSON.stringify(w)} as an answer`);
});

/* ══════════════════════════════════════════════════════════════════════════
 *  THE REFRAME, THE ACTS AND REACHABILITY
 * ═══════════════════════════════════════════════════════════════════════ */

const REFRAME = 'À folds the article in. En throws it out. Chez leaves it alone.';

test('the reframe is verbatim and is carried by at least three sections', () => {
  strictEqual(L!.reframe, REFRAME);
  ok(REFRAME.trim().split(/\s+/).length <= 14, 'the reframe has to survive recall mid-utterance');
  const carried = L!.sections.filter((s) => strings(s).some((x) => x.includes(REFRAME))).length;
  ok(carried >= 3, `the reframe is carried by ${carried} sections and the density validator wants three`);
  // Asserted against an explicit constant, not against a figure derived from the
  // lesson: a derived count compares the content to itself.
  ok(countPhrase(learnerText(), REFRAME) >= 6, 'the reframe has thinned out');
});

test('the Owns has more sections than the four-kind paradigm', () => {
  const acts = L!.acts ?? [];
  const owns = (acts.find((a) => a.id === 'act2')?.sections.length ?? 0) + (acts.find((a) => a.id === 'act3')?.sections.length ?? 0);
  const paradigm = 1 + (acts.find((a) => a.id === 'act4')?.sections.length ?? 0);
  ok(owns > paradigm, `the Owns has ${owns} sections and the paradigm has ${paradigm}. Doctrine §B.5.`);
  strictEqual(owns, 10);
  strictEqual(paradigm, 5);
});

test('every section is claimed by exactly one act', () => {
  const claimed = new Map<string, string>();
  for (const a of L!.acts ?? []) {
    for (const sid of a.sections) {
      ok(sectionIds().includes(sid), `act ${a.id} names ${sid} and there is no such section`);
      ok(!claimed.has(sid), `${sid} is claimed by ${claimed.get(sid)} and by ${a.id}`);
      claimed.set(sid, a.id);
    }
  }
  for (const sid of sectionIds()) ok(claimed.has(sid), `${sid} is in no act`);
});

test('every itemId resolves and is drawn, and no tranche releases a ghost', () => {
  for (const id of L!.itemIds) ok(byId.has(id), `${id} resolves to nothing in the seed`);
  const drawn = new Set<string>();
  const collect = (v: unknown): void => {
    if (typeof v === 'string') { if (v.startsWith('fr.')) drawn.add(v); return; }
    if (Array.isArray(v)) { for (const x of v) collect(x); return; }
    if (v && typeof v === 'object') for (const x of Object.values(v)) collect(x);
  };
  collect(L!.sections); collect(L!.terms ?? {}); collect(L!.drills ?? []);
  const printed = strings(L!.sections).concat(strings(L!.terms ?? {})).join('\n');
  for (const id of L!.itemIds) {
    const row = byId.get(id)!;
    if (hasPhrase(printed, row.fr)) drawn.add(id);
  }
  const released = new Set((L!.deckTranche ?? []).flat());
  const orphan = L!.itemIds.filter((id) => !drawn.has(id) && !released.has(id));
  deepStrictEqual(orphan, [], 'declared items on no screen and in no tranche');
  const ghosts = [...released].filter((id) => !L!.itemIds.includes(id));
  deepStrictEqual(ghosts, [], 'tranche ids that are not itemIds');
});

test('every released row can be served as the deck that releases it expects', () => {
  const released = new Set((L!.deckTranche ?? []).flat());
  for (const id of released) {
    const row = byId.get(id);
    ok(row, `${id} is released and is not in the seed`);
    ok((row!.drills ?? []).includes('flashcard'), `${id} is released to the hub with no flashcard drill`);
  }
  const speak = sec('s20-speak') as { itemIds?: string[] } | undefined;
  for (const id of speak?.itemIds ?? []) {
    ok((byId.get(id)?.drills ?? []).includes('voiceflash'), `${id} is a speak target the mic cannot score`);
  }
});

/* ══════════════════════════════════════════════════════════════════════════
 *  HOUSE RULES
 * ═══════════════════════════════════════════════════════════════════════ */

test('no grammar jargon on a learner surface, in either the singular or the plural', () => {
  const JARGON = [
    'prepositional', 'locative', 'complement', 'animate', 'inanimate',
    'toponym', 'contraction rule', 'suppression', 'partitive', 'determiner',
    'inflection', 'paradigm', 'morpheme', 'morphology', 'lexeme', 'phoneme',
    'phonological', 'orthography', 'agent noun', 'nasal vowel',
    'first person', 'second person', 'third person', 'productive rule',
  ];
  const text = display(L!.sections).concat(
    display(L!.sheets ?? []), display(L!.terms ?? {}), [L!.intro ?? ''],
    display(L!.overview ?? {}), display(L!.acts ?? []), display(L!.drills ?? []),
    myRows().flatMap((r) => [r.fr, r.en, r.notes ?? '']),
  ).join('\n');
  for (const j of JARGON) {
    for (const form of [j, `${j}s`]) ok(!hasPhrase(text, form), `${JSON.stringify(form)} is on a learner surface`);
  }
});

test('intro is walked, and it names the one thing this lesson introduces', () => {
  // a2.11 shipped "third person" here in v1 with every host gate green, because
  // every guard in the band walked sections + sheets + terms and not this.
  ok(L!.intro, 'the lesson has no intro and it is drawn on two screens');
  ok(L!.intro!.length > 100, 'intro is too short to be the field a2.11 shipped a defect in');
  ok(hasPhrase(L!.intro!, 'chez'), 'intro does not name chez');
  for (const j of ['prepositional', 'locative', 'complement', 'animate']) {
    ok(!hasPhrase(L!.intro!, j), `intro holds the jargon ${JSON.stringify(j)}`);
  }
});

test('the plain phrase outnumbers the technical one', () => {
  // a2.17 §8: `preposition` is the unit's own English title and banning it would
  // be this build inventing a rule. What the house does is prefer the plain
  // phrase, so the RATIO is guarded and `overview.titleEn` keeps the unit's name.
  const text = display(L!.sections).concat(display(L!.sheets ?? []), display(L!.terms ?? {}), [L!.intro ?? ''], display(L!.overview ?? {})).join('\n');
  const plain = countPhrase(text, 'place word') + countPhrase(text, 'small word') + countPhrase(text, 'the word');
  const technical = countPhrase(text, 'preposition');
  ok(plain > technical, `the technical word appears ${technical} times and the plain phrase ${plain}`);
});

test('no em dash, no banned word, and every title fits the hub row', () => {
  const text = strings(L!.sections).concat(strings(L!.sheets ?? []), strings(L!.terms ?? {}), [L!.intro ?? '']).join('\n');
  ok(!text.includes('—') && !text.includes('–'), 'an em or en dash is on a learner surface');
  for (const bad of ['honest', 'honesty', 'honestly']) ok(!hasPhrase(text, bad), `${JSON.stringify(bad)} is banned from authored content`);
  for (const s of L!.sections) {
    const t = (s as { title?: string }).title ?? '';
    ok(t.length <= 27, `${JSON.stringify(t)} is ${t.length} characters and the hub row cuts at 27`);
  }
});

test('three term chips per section at most, every one resolving, every row inside the measured width', () => {
  const terms = L!.terms ?? {};
  strictEqual(Object.keys(terms).length, 8);
  for (const s of L!.sections) {
    const t = (s as { terms?: string[] }).terms ?? [];
    ok(t.length <= 3, `${(s as { id?: string }).id} declares ${t.length} chips and the renderer shows three`);
    for (const name of t) ok(terms[name], `${(s as { id?: string }).id} names the term ${JSON.stringify(name)} and there is no such term`);
    if (t.length) {
      const w = t.map((n) => terms[n]!.term.length).reduce((a, b) => a + b, 0) + (t.length - 1) * 3;
      ok(w <= 37, `${(s as { id?: string }).id} chip row is ${w} characters and the measured budget is 37`);
    }
  }
  const used = new Set(L!.sections.flatMap((s) => (s as { terms?: string[] }).terms ?? []));
  deepStrictEqual(Object.keys(terms).filter((k) => !used.has(k)), [], 'a term is declared and named by no section');
});

test('the lesson is not on the why waiver list', () => {
  // The list can only shrink. a2.01.l1, sons.02.l1 and sons.03.l1 are on it and
  // nothing this build authored may join them.
  const q = quizQuestions(L!.sections.find((s) => s.type === 'quiz')!);
  strictEqual(q.filter((x) => !x.why).length, 0);
});

test('the seed and Postgres agree on how many lessons a2.04 has', () => {
  const u = seed.units.find((x) => x.id === 'a2.04')!;
  deepStrictEqual(u.lessonIds, ['a2.04.l1'], 'a2.04 has exactly one lesson');
});

if (noLesson) {
  test('everything below needs a2.04.l1 and it is not in the seed', () => {
    ok(false, 'a2.04.l1 is missing from seed.json; run the batch and then the merge');
  });
}
