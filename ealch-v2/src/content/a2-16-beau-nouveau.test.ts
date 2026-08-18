// a2.16.l1 "Beau, nouveau, vieux": the assertions that keep this lesson true.
//
// Modelled on a2-03-accord.test.ts. Everything here runs the REAL app function
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
// ── What this file is actually guarding ────────────────────────────────────
//
// The lesson's whole claim is that the form before a vowel IS the feminine, said
// the same way and spelled two letters shorter. Both prerequisites already teach
// the forms — a1.14 says `bel` 55 times and a1.16 says it 30 — so "a form is
// missing" is not the failure mode. The failure mode is:
//
//   THE ONE-SOUND CLAIM QUIETLY BECOMING FALSE. bel/belle, nouvel/nouvelle and
//   vieil/vieille each have to carry ONE respelling. Two of the three pairs are
//   published rows written by different authors in different themes and they
//   already agree; the third was brought into line by this build. A later author
//   "correcting" any of the six breaks the lesson rather than a card, and the
//   test asserts the arithmetic rather than the strings.
//   THE SHORT FORM'S CONSONANT STAYING PUT. `bel arbre` is `beh-LAHRBR`, not
//   `BEL AHRBR`. The l runs onto the front of the next word, which is what the
//   form exists to do, and a respelling that keeps the short form intact spells
//   out a pronunciation nobody uses.
//   AN s ARRIVING WHERE AN x GOES. `beaux` and `nouveaux` are asserted BY NAME.
//   The -eaux plural is claimed by no unit at any level, so nothing else in the
//   project would catch it.
//   AN s ARRIVING ON vieux AT ALL. Its masculine plural is the same word as its
//   singular. DELIBERATE: a word already ending in -x has nowhere to put one.
//   a1.14 owns the fact for this exact word and a2.03 generalised it to the
//   class, and every future author who reads the grid will want to "fix" it.
//   THE INVENTED FEMININE REACHING A TEACHING CARD. « une belle appartement » is
//   the RIGHT SOUND and the wrong word, so nobody hears it, including the person
//   writing it. It may appear in exactly two sections and both mark it wrong.
//   THE SHORT FORM STANDING AFTER A VERB. « Il est bel. » is not French: the
//   form exists to run into a following word and there is nothing following it.
//   THE TWO CONTRAST PAIRS BEING SEPARATED. The lesson is a SOUND contrast, so
//   the pairs have to be one tap apart and briefed as one take. Recorded apart,
//   the learner compares two performances instead of two sounds.
//   sons.07 OR a2.03 GOING UNNAMED. The reason the third form exists is the
//   reason elision exists, and the learner has already met it.
//   listenChoose ARRIVING ON A HOMOPHONE. Five written forms reach the ear as
//   two, so the plain-against-short contrast is the ONLY thing an ear question
//   can legally ask about in this lesson.
//   PLACEMENT OR -ment ARRIVING EARLY. a1.16 owns where the word goes and a2.17
//   is the very next lesson.
//   A ROLE-PLAY TURN WITH ONE ANSWER. `scenario.logic.test.ts` enforces two
//   across the whole seed and no document in this band mentions it; a2.03 v1
//   shipped three turns with one apiece and went red on the merge.
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

const L = seed.lessons.find((l) => l.id === 'a2.16.l1');
const noLesson = !L;
const byId = new Map(seed.items.map((i) => [i.id, i] as const));

/* ─── The shape of the lesson ──────────────────────────────────────────── */

const SPINE = [
  's01-scene', 's02-goals', 's03-front',
  's04-grid', 's05-known', 's06-hear',
  's07-pairs', 's08-borrow', 's09-why', 's10-chain', 's11-onlypair', 's12-h', 's13-reading',
  's14-which', 's15-invented', 's16-plural', 's17-errors',
  's18-scenario', 's19-dictation', 's20-speak', 's21-review',
  's22-progress', 's23-quiz', 's24-roundup',
];

/** THE OWNS ACT IS THE HEAVIEST, ALONE, AND THE PARADIGM ACT IS SMALLER.
 *  Three missions on the five-form grid, SEVEN on the short form and where it
 *  comes from. If that ever inverts, the paradigm has taken the lesson over —
 *  and here that failure is sharper than usual, because a2.03 already printed
 *  four of these five columns at seq 10 and a1.13 and a1.14 before it. Act 2's
 *  only job is to put the fifth column beside the four the learner has.
 *  Doctrine §B.5. */
const ACTS = [
  { id: 'act1', n: 3 },
  { id: 'act2', n: 3 },
  { id: 'act3', n: 7 },
  { id: 'act4', n: 4 },
  { id: 'act5', n: 4 },
  { id: 'act6', n: 3 },
];
const PARADIGM_ACT = 'act2';
const OWNS_ACT = 'act3';

/** THE REFRAME, VERBATIM. A production rule rather than a fact, because doctrine
 *  §B.4 asks for something the learner can run in the half-second between the
 *  adjective and the noun, which is exactly the half-second in which it is
 *  needed. It carries the trigger, the sound and the spelling.
 *
 *  "The extra form exists so two vowels never meet." was the brief's candidate
 *  and it is the REASON rather than the rule: it tells the learner why the form
 *  is there and nothing about how to build it. It survives as the act 3 claim,
 *  which is where a reason belongs. */
const REFRAME = 'Before a vowel, say the feminine and drop its last two letters.';
const REFRAME_USES = 9;
const REFRAME_SECTIONS = 6;
/** a2.03 §14 row 26: replacing the constant replaces it everywhere, so a count
 *  cannot see the reframe get longer. 12 words is density.logic.ts's cap on an
 *  `xl` string and this sits exactly on it. */
const REFRAME_MAX_WORDS = 12;

/* ─── THE FIFTEEN CELLS, WRITTEN OUT BY HAND ────────────────────────────────
 *
 * The brief asks for all five forms of all three adjectives to be asserted CELL
 * BY CELL, and this is that. It is deliberately not derived from anything: the
 * point is that a change in the source has to be repeated here on purpose.
 *
 * Read the `vowel` column against the `fem` column. They are the same sound in
 * every row, and that is the lesson.                                          */

const GRID: Record<string, Record<string, string>> = {
  beau: { plain: 'beau', vowel: 'bel', fem: 'belle', plainPl: 'beaux', femPl: 'belles' },
  nouveau: { plain: 'nouveau', vowel: 'nouvel', fem: 'nouvelle', plainPl: 'nouveaux', femPl: 'nouvelles' },
  vieux: { plain: 'vieux', vowel: 'vieil', fem: 'vieille', plainPl: 'vieux', femPl: 'vieilles' },
};
const RESPELL: Record<string, Record<string, string>> = {
  beau: { plain: 'BOH', vowel: 'BEL', fem: 'BEL', plainPl: 'BOH', femPl: 'BEL' },
  nouveau: { plain: 'noo-VOH', vowel: 'noo-VEL', fem: 'noo-VEL', plainPl: 'noo-VOH', femPl: 'noo-VEL' },
  vieux: { plain: 'VYUH', vowel: 'VYEY', fem: 'VYEY', plainPl: 'VYUH', femPl: 'VYEY' },
};
const ADJS = ['beau', 'nouveau', 'vieux'];
const FORMS = ['plain', 'vowel', 'fem', 'plainPl', 'femPl'];
/** The three forms that are ONE sound, and the two that are the other. */
const ONE_SOUND = ['vowel', 'fem', 'femPl'];
const OTHER_SOUND = ['plain', 'plainPl'];

/** The twelve predicate rows, by id. The `vowel` column has NO predicate cell
 *  and never can: « Il est bel. » is not French, and that absence is the
 *  masculine-only constraint stated as a fact about where the form can stand. */
const CELL: Record<string, Record<string, string>> = {
  beau: {
    plain: 'fr.a2.adjectifs-essentiels.041', fem: 'fr.a2.adjectifs-essentiels.042',
    plainPl: 'fr.a2.adjectifs-essentiels.043', femPl: 'fr.a2.adjectifs-essentiels.044',
  },
  nouveau: {
    plain: 'fr.a2.adjectifs-essentiels.045', fem: 'fr.a2.adjectifs-essentiels.046',
    plainPl: 'fr.a2.adjectifs-essentiels.047', femPl: 'fr.a2.adjectifs-essentiels.048',
  },
  vieux: {
    plain: 'fr.a2.adjectifs-essentiels.049', fem: 'fr.a2.adjectifs-essentiels.050',
    plainPl: 'fr.a2.adjectifs-essentiels.051', femPl: 'fr.a2.adjectifs-essentiels.052',
  },
};
const SUBJECT: Record<string, string> = {
  plain: 'Il est', fem: 'Elle est', plainPl: 'Ils sont', femPl: 'Elles sont',
};

/** The consonant-initial half of each contrast pair, AUTHORED, one noun across
 *  all three so the vowel-initial noun opposite is the only thing that moves. */
const PHRASE: Record<string, string> = {
  beau: 'fr.a2.adjectifs-essentiels.053',
  nouveau: 'fr.a2.adjectifs-essentiels.054',
  vieux: 'fr.a2.adjectifs-essentiels.055',
};
/** The vowel-initial half, IMPORTED. All four third-form rows in this frame were
 *  already published, in this lesson's own theme, and NONE of them had a
 *  respelling; this build supplied all four. Corrections §3 says the corpus has
 *  forms and no minimal pairs, and this is the first counterexample in the band
 *  — with the second half of §3 holding, because a row without a respelling
 *  reaches a card the learner cannot say. */
const VOWEL_ROW: Record<string, string> = {
  beau: 'fr.a1.adjectifs-essentiels.204',
  nouveau: 'fr.a1.adjectifs-essentiels.038',
  vieux: 'fr.a1.adjectifs-essentiels.214',
};
const SILENT_H_ROW = 'fr.a1.adjectifs-essentiels.026';

/** The eight forms that ALREADY EXISTED as headwords. The brief said `bel`,
 *  `nouvel` and `vieil` would all be absent and that this lesson would author
 *  its three headline forms; two of the three are published rows in the home
 *  theme and a2.03's own READ_NOT_IMPORTED already flagged them as a2.16's. */
const IMPORTED_HEADWORDS: Record<string, string> = {
  beau: 'fr.sons.adjectifs-essentiels.005',
  nouveau: 'fr.sons.adjectifs-essentiels.007',
  vieux: 'fr.sons.adjectifs-essentiels.008',
  bel: 'fr.sons.adjectifs-essentiels.314',
  vieil: 'fr.sons.adjectifs-essentiels.315',
  belle: 'fr.sons.consonnes.138',
  vieille: 'fr.sons.adjectifs-essentiels.312',
  nouvelle: 'fr.a1.rencontres.095',
};
/** The ONE that did not exist, at any status, in any theme. */
const AUTHORED_HEADWORD = { fr: 'nouvel', id: 'fr.a2.adjectifs-essentiels.056', respell: 'noo-VEL' };

const AUTHORED_COUNT = 18;
const IMPORTED_COUNT = 12;
const ITEM_COUNT = 30;
const QUESTIONS = 30;
const ROUNDS = 5;
const DICTEE_TARGETS = 16;
const SUPERSCRIPTS = 17;
const SEEN_NASALS = 17;
const BLIND_NASALS = 0;

/** The three rows too long for LETTERS mode, named rather than quietly skipped.
 *  Corrections §4: WORD mode hands every real word over pre-spelled. */
const WORD_MODE = ['Elles sont nouvelles.', 'Elles sont vieilles.', "C'est un vieil immeuble."];

/** The forms that may appear ONLY where they are marked as wrong. */
/** DERIVED, after the mutation harness found a hand list one phrase short.
 *  « une belle homme » was not on it, and a mutation that wrote it onto the
 *  silent-h teaching card walked past two of the three layers. A hand list of a
 *  PRODUCTIVE error is a list that will always be missing an entry, so this is
 *  every feminine form crossed with every vowel-initial noun the lesson prints,
 *  under both articles. */
const VOWEL_NOUNS = ['appartement', 'ami', 'homme', 'arbre', 'immeuble', 'hôtel', 'habitant'];
const INVENTED = ADJS.flatMap((a) => VOWEL_NOUNS.flatMap((n) => [`un ${GRID[a].fem} ${n}`, `une ${GRID[a].fem} ${n}`]));
const OVER_PLURALISED = ['beaus', 'nouveaus', 'vieuxs'];
const WRONG_HOMES = ['s15-invented', 's23-quiz'];

const CITED = ['sons.07', 'a1.14', 'a1.16', 'a1.17', 'a2.03', 'a2.17'];
const ELISION_REFRAME = 'Two vowels collide, the little word gives way.';

/* ─── Helpers, none of which reimplements app logic ─────────────────────── */

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
/** Keeps `sub` and drops only machine keys. a2.15 §3: `prose()` drops `sub` as
 *  notation, and on a cardDeck card `sub` holds PROSE. */
function display(v: unknown, out: string[] = []): string[] {
  if (typeof v === 'string') out.push(v);
  else if (Array.isArray(v)) for (const x of v) display(x, out);
  else if (v && typeof v === 'object') {
    for (const [k, x] of Object.entries(v)) if (!MACHINE_KEYS.has(k)) display(x, out);
  }
  return out;
}
/** Accent-aware word boundaries. `\b` is ASCII-only in JavaScript and returns
 *  zero on a trailing accent, which looks exactly like an absence. AND IT
 *  MATTERS MORE HERE THAN ANYWHERE: the short form is a PREFIX of the feminine
 *  in all three adjectives, so a substring search for `bel` fires on `belle`,
 *  which is the grid's own hero row. The batch's first version did exactly
 *  that. */
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
const sectionById = (id: string) => (L?.sections ?? []).find((s) => (s as { id?: string }).id === id);
const quiz = () => (L?.sections ?? []).find((s) => s.type === 'quiz');
const questions = () => (L ? quizQuestions(quiz()!) : []);
const production = () => (L ? [
  ...strings(L.sections), ...strings(L.sheets ?? []), ...strings(L.terms ?? {}),
  L.intro ?? '', ...strings(L.overview ?? {}), ...strings(L.acts ?? []), ...strings(L.drills ?? []),
] : []);

/* ══════════════════════════════════════════════════════════════════════════
 *  THE LESSON EXISTS AND VALIDATES
 * ═══════════════════════════════════════════════════════════════════════ */

test('a2.16.l1 is in the seed', () => {
  ok(L, 'a2.16.l1 is missing from seed.json');
});

test('the unit carries the lesson, at the seq the tag prints', () => {
  const u = seed.units.find((x) => x.id === 'a2.16');
  ok(u, 'unit a2.16 is missing');
  ok((u!.lessonIds ?? []).includes('a2.16.l1'), 'a2.16 does not list a2.16.l1');
  strictEqual(u!.title, 'Beau, Nouveau, Vieux');
  strictEqual(u!.sub, 'Beau, nouveau, vieux');
  strictEqual(u!.canDo, 'Can use bel, nouvel and vieil before a vowel and agree all three in the plural');
  deepStrictEqual(u!.prereqUnitIds, ['a2.03']);
  // missions.ts derives the eyebrow from unit.seq at render time; the stored tag
  // is a fallback and has to agree with what the renderer computes.
  strictEqual(L?.tag, `A2 · LEÇON ${String(u!.seq).padStart(2, '0')}`);
});

test('the lesson and its density validate through the real validators', () => {
  if (noLesson) return;
  const ids = new Set(seed.items.map((i) => i.id));
  strictEqual(formatIssues(validateLesson(L!, L!.id)), '');
  strictEqual(formatDensity(validateDensity(L!, ids)), '');
});

test('the spine is in order and every section is in exactly one act', () => {
  if (noLesson) return;
  deepStrictEqual(L!.sections.map((s) => (s as { id: string }).id), SPINE);
  const claimed = new Map<string, string>();
  for (const a of L!.acts ?? []) {
    for (const sid of a.sections) {
      ok(SPINE.includes(sid), `act ${a.id} names ${sid}, which is not a section`);
      ok(!claimed.has(sid), `${sid} is claimed by ${claimed.get(sid)} and by ${a.id}`);
      claimed.set(sid, a.id);
    }
  }
  for (const sid of SPINE) ok(claimed.has(sid), `${sid} is in no act`);
});

test('the Owns act outweighs the paradigm act', () => {
  if (noLesson) return;
  deepStrictEqual((L!.acts ?? []).map((a) => ({ id: a.id, n: a.sections.length })), ACTS);
  const owns = (L!.acts ?? []).find((a) => a.id === OWNS_ACT)!.sections.length;
  const para = (L!.acts ?? []).find((a) => a.id === PARADIGM_ACT)!.sections.length;
  ok(owns > para,
    `the paradigm act has ${para} missions and the Owns act has ${owns}. Doctrine §B.5: if the paradigm `
    + 'outweighs the Owns, the wrong lesson was built. a2.03 already printed four of these five columns.');
});

/* ══════════════════════════════════════════════════════════════════════════
 *  THE FIFTEEN CELLS, ASSERTED ONE AT A TIME
 *
 *  The brief asks for exactly this, and the ids are written out rather than
 *  derived so that a moved cell fails here.
 * ═══════════════════════════════════════════════════════════════════════ */

test('all twelve predicate cells exist, and each is the form the grid claims', () => {
  if (noLesson) return;
  for (const a of ADJS) {
    for (const f of ['plain', 'fem', 'plainPl', 'femPl']) {
      const row = byId.get(CELL[a][f]);
      ok(row, `${CELL[a][f]} (${a}/${f}) is not in the seed`);
      strictEqual(row!.fr, `${SUBJECT[f]} ${GRID[a][f]}.`, `${CELL[a][f]} is not the ${a}/${f} cell`);
      ok((row!.respell ?? '').endsWith(RESPELL[a][f]),
        `${CELL[a][f]} respells as ${JSON.stringify(row!.respell)} and the ${a}/${f} cell is ${RESPELL[a][f]}`);
    }
  }
});

test('all three third-form cells exist, and they are IMPORTED rather than authored', () => {
  if (noLesson) return;
  for (const a of ADJS) {
    const row = byId.get(VOWEL_ROW[a]);
    ok(row, `${VOWEL_ROW[a]} (${a}/vowel) is not in the seed`);
    ok(hasPhrase(row!.fr, GRID[a].vowel), `${VOWEL_ROW[a]} is ${JSON.stringify(row!.fr)} and does not hold ${GRID[a].vowel}`);
    ok(!row!.id.startsWith('fr.a2.adjectifs-essentiels.'),
      `${VOWEL_ROW[a]} is inside this build's own id block. All four third-form sentences were ALREADY PUBLISHED, `
      + 'in one frame, in this theme, and authoring copies of them would serve one card twice.');
  }
});

test('the one headword this build authored is the one that did not exist', () => {
  if (noLesson) return;
  const row = byId.get(AUTHORED_HEADWORD.id);
  ok(row, `${AUTHORED_HEADWORD.id} is missing`);
  strictEqual(row!.fr, AUTHORED_HEADWORD.fr);
  strictEqual(row!.respell, AUTHORED_HEADWORD.respell);
  strictEqual(row!.kind, 'word');
  ok(!(row as { gender?: string }).gender, 'the authored headword carries a gender and would join a1.03\'s ending population');
  ok(!/\s/.test(row!.fr), 'the authored headword has a space in it; bare adjectives only');
  // AND THE OTHER EIGHT WERE IMPORTED. The brief predicted three would be
  // authored; `bel` and `vieil` are published rows in this lesson's own theme.
  for (const [word, id] of Object.entries(IMPORTED_HEADWORDS)) {
    const r = byId.get(id);
    ok(r, `${id} (${word}) is not in the seed, and this lesson imports it`);
    strictEqual(r!.fr, word, `${id} is ${JSON.stringify(r!.fr)} and this lesson imports it as ${word}`);
    ok(!(r as { gender?: string }).gender, `${id} carries a gender and this build carries no gendered row`);
  }
});

/* ══════════════════════════════════════════════════════════════════════════
 *  THE OWNS: FIVE WRITTEN FORMS, TWO SOUNDS, AND THE THIRD FORM IS THE FEMININE
 * ═══════════════════════════════════════════════════════════════════════ */

test('every adjective has five written forms and exactly two sounds', () => {
  if (noLesson) return;
  for (const a of ADJS) {
    strictEqual(new Set(FORMS.map((f) => GRID[a][f])).size >= 4, true, `${a} has fewer than four distinct written forms`);
    const one = new Set(ONE_SOUND.map((f) => RESPELL[a][f]));
    const other = new Set(OTHER_SOUND.map((f) => RESPELL[a][f]));
    strictEqual(one.size, 1,
      `${a}: the form before a vowel, the feminine and the feminine plural must be ONE sound and they are `
      + `${[...one].join(' / ')}. THAT IS THE WHOLE LESSON. fr.sons.adjectifs-essentiels.314 and `
      + 'fr.sons.consonnes.138 are two different authors agreeing about it.');
    strictEqual(other.size, 1, `${a}: the plain form and its plural must be one sound and they are ${[...other].join(' / ')}`);
    ok([...one][0] !== [...other][0], `${a}: all five forms are one sound, so there is no contrast left to teach`);
  }
});

test('the short form is the feminine with its last two letters dropped, in all three', () => {
  if (noLesson) return;
  for (const a of ADJS) {
    strictEqual(GRID[a].fem, `${GRID[a].vowel}le`,
      `${GRID[a].fem} minus its last two letters is not ${GRID[a].vowel}. The reframe says "drop its last two `
      + 'letters" and it is exceptionless across all three, which is what makes it a rule rather than three facts.');
    strictEqual(RESPELL[a].vowel, RESPELL[a].fem, `${a}: the short form and the feminine must respell identically`);
  }
});

test('the stored rows agree that the short form and the feminine are one sound', () => {
  if (noLesson) return;
  // NOT this build's data. `bel` and `belle` were respelled by different authors
  // in different themes years apart, and so were `vieil` and `vieille`. If
  // either pair ever stops agreeing, the grid is making a claim the corpus no
  // longer supports.
  for (const [a, b] of [
    ['fr.sons.adjectifs-essentiels.314', 'fr.sons.consonnes.138'],
    ['fr.sons.adjectifs-essentiels.315', 'fr.sons.adjectifs-essentiels.312'],
  ]) {
    const x = byId.get(a); const y = byId.get(b);
    ok(x && y, `${a} or ${b} is missing`);
    strictEqual(x!.respell, y!.respell, `${a} and ${b} no longer share a respelling`);
    strictEqual(x!.ipa, y!.ipa, `${a} and ${b} no longer share an IPA`);
  }
});

test("the short form's consonant runs onto the next word rather than staying put", () => {
  if (noLesson) return;
  // `bel arbre` is `beh-LAHRBR`, not `BEL AHRBR`. The l moves, and that is what
  // the form exists to do. A respelling that keeps the short form intact spells
  // out a pronunciation nobody uses, and it is what a later author "tidying"
  // these values would produce. The batch's own grid guard was written the naive
  // way and failed on a correct row.
  for (const a of ADJS) {
    const row = byId.get(VOWEL_ROW[a]);
    const rs = (row?.respell ?? '').toUpperCase();
    const join = RESPELL[a].vowel.slice(-1).toUpperCase();
    ok(rs.includes(`-${join}`), `${VOWEL_ROW[a]} respells as ${JSON.stringify(row?.respell)} and the ${join} does not open a syllable`);
    ok(!new RegExp(`(^|[\\s-])${RESPELL[a].vowel}([\\s]|$)`, 'i').test(row?.respell ?? ''),
      `${VOWEL_ROW[a]} keeps ${RESPELL[a].vowel} as a standalone token; the consonant has to join the next word`);
  }
  // And the silent-h row does the same thing across an h.
  const h = byId.get(SILENT_H_ROW);
  ok((h?.respell ?? '').includes('-L'), `${SILENT_H_ROW} respells as ${JSON.stringify(h?.respell)} and the l must run into the silent h`);
});

/* ══════════════════════════════════════════════════════════════════════════
 *  THE TWO LAYOUT CLAIMS THE BRIEF ASKS FOR BY NAME
 * ═══════════════════════════════════════════════════════════════════════ */

test('the grid puts all five forms of all three on one screen, third form SECOND', () => {
  if (noLesson) return;
  const g = sectionById('s04-grid') as { type?: string; cols?: string[]; rows?: { cells: string[] }[] } | undefined;
  strictEqual(g?.type, 'tapTable', 'the hero grid must be a tapTable: a table at layer core is a density failure');
  strictEqual(g!.cols?.length, 5, 'the grid must have five columns, one per form');
  strictEqual(g!.rows?.length, 3, 'the grid must have three rows, one per adjective');
  g!.rows!.forEach((r, i) => {
    const a = ADJS[i];
    FORMS.forEach((f, j) => {
      strictEqual(r.cells[j], GRID[a][f], `grid row ${i} cell ${j} should be the ${a}/${f} form`);
    });
  });
  // THE THIRD FORM IS THE SECOND COLUMN, NOT THE LAST. It is built out of the
  // feminine and used in place of the plain form, so it belongs between them.
  // Putting it fifth, as an appendix, is the version of this screen that teaches
  // three exceptions instead of one rule, and it is the change a later author is
  // most likely to make on tidiness grounds.
  strictEqual(FORMS[1], 'vowel');
  g!.rows!.forEach((r, i) => strictEqual(r.cells[1], GRID[ADJS[i]].vowel, `grid row ${i} column 2 must be the form before a vowel`));
});

test('the contrast pairs sit one tap apart, consonant noun first, one noun held constant', () => {
  if (noLesson) return;
  const p = sectionById('s07-pairs') as { type?: string; rows?: { cells: string[]; detail?: { body?: string } }[] } | undefined;
  strictEqual(p?.type, 'tapTable',
    'the contrast is a SOUND contrast, so it has to be one tap per row. The brief: "it must be heard, not read."');
  strictEqual(p!.rows?.length, 3);
  p!.rows!.forEach((r, i) => {
    const a = ADJS[i];
    strictEqual(r.cells[1], GRID[a].plain, `pair row ${i} column 2 must be the plain form`);
    strictEqual(r.cells[2], GRID[a].vowel, `pair row ${i} column 3 must be the form before a vowel`);
    const body = r.detail?.body ?? '';
    ok(body.indexOf(GRID[a].plain) >= 0 && body.indexOf(GRID[a].plain) < body.indexOf(GRID[a].vowel),
      `pair row ${i} does not put the plain form before the short one; the order is the claim`);
  });
  // THE CONSONANT-INITIAL NOUN IS THE CONTROL and must not move, or the pair
  // differs by two things and the screen proves nothing.
  const tails = ADJS.map((a) => byId.get(PHRASE[a])?.fr.split(' ').pop());
  strictEqual(new Set(tails).size, 1, `the three consonant-initial phrases end in ${tails.join(', ')}`);
});

test('the two contrast pairs are briefed as ONE TAKE, adjacently', () => {
  if (noLesson) return;
  // Invariants §10: a constraint on how something is recorded becomes invisible
  // the moment the clip is delivered. The brief asks for both pairs by name.
  const take = (L!.audio?.recorded ?? []).find((r) => r.id === 'rec-a2-16-pairs');
  ok(take, 'there is no rec-a2-16-pairs take, and the contrast is the lesson');
  ok(take!.desc.toUpperCase().includes('ONE TAKE'), 'rec-a2-16-pairs does not say ONE TAKE');
  ok(take!.desc.toUpperCase().includes('RECORDED APART'), 'rec-a2-16-pairs does not say what happens if they are recorded apart');
  const clips = take!.clipIds ?? [];
  for (const a of ADJS) {
    const c = byId.get(PHRASE[a])!.fr;
    const v = byId.get(VOWEL_ROW[a])!.fr;
    ok(clips.includes(c) && clips.includes(v), `rec-a2-16-pairs does not carry both halves of the ${a} pair`);
    strictEqual(clips.indexOf(c) + 1, clips.indexOf(v), `rec-a2-16-pairs lists the ${a} pair non-adjacently, and adjacency IS the instruction`);
  }
  ok(clips.includes(byId.get(SILENT_H_ROW)!.fr), 'rec-a2-16-pairs does not carry the silent-h line');
});

test('the silent-h pair is minimal and sons.07 is named beside it', () => {
  if (noLesson) return;
  const s = sectionById('s12-h') as { examples?: { fr: string }[] } | undefined;
  ok(s?.examples, 's12-h has no examples');
  const partner = byId.get(VOWEL_ROW.beau)!.fr;
  const hRow = byId.get(SILENT_H_ROW)!.fr;
  strictEqual(s!.examples![0].fr, partner, 's12-h must open with the ordinary vowel case');
  strictEqual(s!.examples![1].fr, hRow, 's12-h must follow it with the silent-h case');
  const stem = (x: string) => x.replace(/\s+\S+\.$/, '');
  strictEqual(stem(partner), stem(hRow),
    'the silent-h pair must differ by the NOUN alone. That is what makes it evidence that the rule is about sound '
    + 'and not spelling, rather than two sentences that happen to agree.');
  ok(strings(s).some((x) => namesUnitLabel(x, 'sons.07')), 's12-h does not name sons.07, which owns h muet against h aspiré');
});

/* ══════════════════════════════════════════════════════════════════════════
 *  THE TWO TRAPS
 * ═══════════════════════════════════════════════════════════════════════ */

test('beaux and nouveaux take an x, asserted BY NAME', () => {
  if (noLesson) return;
  // BY NAME, because the -eaux plural is claimed by no unit at any level, so
  // nothing else in the project would catch an s arriving here.
  strictEqual(GRID.beau.plainPl, 'beaux');
  strictEqual(GRID.nouveau.plainPl, 'nouveaux');
  strictEqual(byId.get(CELL.beau.plainPl)?.fr, 'Ils sont beaux.');
  strictEqual(byId.get(CELL.nouveau.plainPl)?.fr, 'Ils sont nouveaux.');
  for (const a of ['beau', 'nouveau']) {
    strictEqual(GRID[a].plainPl, `${GRID[a].plain}x`,
      `${a}'s plural must be its singular plus an x. beaus and nouveaus are not French, and there is no reasoning `
      + 'that gets a learner here: it is the one thing in this lesson you simply have to have seen.');
  }
});

test('the masculine plural of vieux is the same word as its singular', () => {
  if (noLesson) return;
  // DELIBERATE. A word already ending in -x has nowhere to put a plural s, so
  // `vieuxs` is not French and never has been. a1.14's grammarIntroduced owns
  // the fact for this exact word — "Invariance of the masculine plural on
  // adjectives already ending in -s or -x: vieux, mauvais" — and a2.03
  // generalised it from those two lexemes to the whole class.
  //
  // IF YOU CAME HERE TO ADD THE MISSING s, DO NOT. It is not missing.
  strictEqual(GRID.vieux.plainPl, GRID.vieux.plain, 'vieux and its masculine plural must be the same word');
  strictEqual(RESPELL.vieux.plainPl, RESPELL.vieux.plain);
  strictEqual(byId.get(CELL.vieux.plain)?.fr, 'Il est vieux.');
  strictEqual(byId.get(CELL.vieux.plainPl)?.fr, 'Ils sont vieux.');
  // And the section that teaches it names BOTH lessons that already own it,
  // rather than teaching it a third time.
  const s = sectionById('s16-plural');
  ok(s, 's16-plural is missing');
  // LITERAL ids, deliberately. The batch's first version of this looped over the
  // constant the section RENDERS, which is comparing the content to itself
  // (invariants §5): renaming it to 'the earlier lessons' passed every layer.
  for (const u of ['a1.14', 'a2.03']) {
    ok(strings(s).some((x) => namesUnitLabel(x, u)), `s16-plural does not name ${u}, which already owns two thirds of this`);
  }
});

test('the masculine-only constraint is stated, and no correct sentence invents a feminine short form', () => {
  if (noLesson) return;
  // The brief: "Make the masculine-only constraint explicit and drill the
  // rejection." It is INAUDIBLE — the short form and the feminine are one sound
  // — so only a written surface can catch it.
  const homes = new Set(WRONG_HOMES);
  for (const s of L!.sections) {
    const sid = (s as { id?: string }).id ?? '?';
    for (const bad of INVENTED) {
      if (homes.has(sid)) continue;
      ok(!strings(s).some((x) => hasPhrase(x, bad)),
        `${sid} prints ${JSON.stringify(bad)}. Only ${WRONG_HOMES.join(' and ')} may, and only as a marked error.`);
    }
  }
  // AND IT MUST STILL BE THERE, in both. A reservation list that has quietly
  // emptied has stopped guarding.
  for (const home of WRONG_HOMES) {
    const s = sectionById(home);
    ok(s, `${home} is missing`);
    ok(strings(s).some((x) => INVENTED.some((bad) => hasPhrase(x, bad))), `${home} no longer drills the invented feminine`);
  }
  // And the exam makes the learner FIX it in writing rather than recognise it,
  // because recognition is exactly what the ear already does wrongly.
  const fixes = questions().filter((q) => q.format === 'errorSpot' && INVENTED.some((bad) => hasPhrase(q.prompt ?? '', bad)));
  ok(fixes.length >= 2, `${fixes.length} errorSpot questions fix an invented feminine and at least 2 are needed`);
});

test('the short form never stands after a verb outside a marked error', () => {
  if (noLesson) return;
  // « Il est bel. » is not French: the form exists to run into a following word
  // and there is nothing following it. a1.16 got there first and called the
  // forms "position-bound"; this lesson is the other half of that sentence.
  const homes = new Set(WRONG_HOMES);
  const bad = ADJS.flatMap((a) => Object.values(SUBJECT).map((subj) => `${subj} ${GRID[a].vowel}`));
  for (const s of L!.sections) {
    const sid = (s as { id?: string }).id ?? '?';
    if (homes.has(sid)) continue;
    for (const b of bad) {
      // BOUNDARY-AWARE: `Il est bel` is a prefix of « Il est belle. », which is
      // a legitimate row, so a substring check fires on the lesson's own content.
      ok(!strings(s).some((x) => hasPhrase(x, b)), `${sid} prints ${JSON.stringify(b)}`);
    }
  }
  const drilled = L!.sections.filter((s) => homes.has((s as { id?: string }).id ?? '')
    && strings(s).some((x) => bad.some((b) => hasPhrase(x, b))));
  strictEqual(drilled.length, WRONG_HOMES.length, 'the short-form-in-a-predicate error is no longer drilled in both sections');
});

test('an over-pluralised form appears only where it is marked wrong', () => {
  if (noLesson) return;
  const legal = new Set(['s15-invented', 's23-quiz', 's17-errors', 's21-review', 's16-plural']);
  let seen = 0;
  for (const s of L!.sections) {
    const sid = (s as { id?: string }).id ?? '?';
    const hit = strings(s).some((x) => OVER_PLURALISED.some((o) => hasPhrase(x, o)));
    if (hit) seen += 1;
    ok(!hit || legal.has(sid), `${sid} prints an over-pluralised form outside the sections that mark it wrong`);
  }
  ok(seen > 0, 'nothing anywhere prints beaus or vieuxs as an error, so the guard is guarding nothing');
});

/* ══════════════════════════════════════════════════════════════════════════
 *  THE BACK-REFERENCES
 * ═══════════════════════════════════════════════════════════════════════ */

test("sons.07's reframe is quoted verbatim, by unit id", () => {
  if (noLesson) return;
  const s = sectionById('s09-why');
  ok(s, 's09-why is missing and it is where the reason lives');
  ok(strings(s).some((x) => namesUnitLabel(x, 'sons.07')), 's09-why does not name sons.07 by unit id');
  ok(strings(s).some((x) => x.includes(ELISION_REFRAME)),
    `s09-why does not quote ${JSON.stringify(ELISION_REFRAME)} verbatim. A paraphrase is not the connection: the `
    + 'value is that the learner recognises a sentence they have already read in a pronunciation lesson.');
});

test('a2.03 and a1.17 are both named, and every cited unit exists and is on a screen', () => {
  if (noLesson) return;
  const surfaces = production();
  for (const u of CITED) {
    ok(seed.units.some((x) => x.id === u), `this lesson names ${u} and no such unit is in the seed`);
    ok(surfaces.some((s) => namesUnitLabel(s, u)), `${u} is cited and named on no learner surface`);
  }
  // a1.17 is the one that matters: its `ma` to `mon` is a form swapped ACROSS
  // GENDER to get a consonant in front of a vowel, which is what these three do
  // in the other direction. It is what turns three exceptions into a family.
  ok(strings(sectionById('s10-chain')).some((x) => namesUnitLabel(x, 'a1.17')), 's10-chain does not name a1.17');
});

test('placement is not taught, and no -ment adverb appears anywhere', () => {
  if (noLesson) return;
  // SCOPED TO PRODUCTION SURFACES, as the brief asks: a1.16 IS named in one line
  // and the naming is required. What may not happen is a screen that teaches
  // where the word goes.
  const PRODUCTION = ['s04-grid', 's07-pairs', 's08-borrow', 's16-plural', 's15-invented'];
  const TEACHING = ['goes after the noun', 'goes before the noun', 'comes after the noun', 'des becomes de'];
  for (const sid of PRODUCTION) {
    const s = sectionById(sid);
    for (const p of TEACHING) ok(!strings(s).some((x) => hasPhrase(x, p)), `${sid} teaches placement, which is a1.16's`);
  }
  // -ment IS GUARDED BY THE THING RATHER THAN THE LETTERS. A suffix guard fires
  // on `appartement`, `immeuble`... and this lesson PRINTS `appartement` in its
  // scene and four -ment nouns in its reading passage. a2.03 §ADVERB_SHAPE.
  const STEMS = ['belle', 'nouvelle', 'vieille', 'grande', 'sérieuse', 'active', 'seule', 'exacte', 'certaine', 'vrai'];
  const shape = new RegExp(`(?<![\\p{L}\\p{N}'’-])(?:${STEMS.join('|')})ment(?![\\p{L}\\p{N}'’-])`, 'iu');
  ok(shape.test('bellement') && shape.test('exactement'), 'the -ment shape does not fire on a real adverb, so it is guarding nothing');
  ok(!shape.test('appartement') && !shape.test('moment') && !shape.test('comment'), 'the -ment shape fires on a noun');
  for (const s of production()) {
    ok(!shape.test(s), `a learner surface prints a -ment adverb, which is a2.17's: ${JSON.stringify(s.slice(0, 90))}`);
  }
});

/* ══════════════════════════════════════════════════════════════════════════
 *  THE REFRAME AND THE COPY RULES
 * ═══════════════════════════════════════════════════════════════════════ */

test('the reframe is verbatim, short enough to run, and carried across six sections', () => {
  if (noLesson) return;
  strictEqual(L!.reframe, REFRAME);
  ok(REFRAME.trim().split(/\s+/).length <= REFRAME_MAX_WORDS,
    `the reframe is ${REFRAME.trim().split(/\s+/).length} words and the ceiling is ${REFRAME_MAX_WORDS}. `
    + 'Doctrine §B.4: could the learner run it in the half-second before the noun? A count guard cannot see it grow.');
  const uses = production().reduce((n, s) => n + countPhrase(s, REFRAME), 0);
  strictEqual(uses, REFRAME_USES);
  strictEqual(L!.sections.filter((s) => strings(s).some((x) => x.includes(REFRAME))).length, REFRAME_SECTIONS);
});

test('no em dash, no "honest", and no grammar jargon on a learner surface', () => {
  if (noLesson) return;
  const JARGON = [
    'anti-hiatus', 'hiatus', 'elision', 'proclitic', 'enchaînement', 'liaison',
    'pre-vocalic', 'allomorph', 'suppletion', 'inflection', 'paradigm',
    'declension', 'morpheme', 'attributive', 'predicative', 'prenominal',
    'phoneme', 'lexeme', 'geminate', 'epenthetic', 'third person',
  ];
  const surfaces = [
    ...display(L!.sections), ...display(L!.sheets ?? []), ...display(L!.terms ?? {}),
    L!.intro ?? '', ...display(L!.acts ?? []), ...display(L!.drills ?? []),
  ];
  for (const s of surfaces) {
    ok(!s.includes('—'), `an em dash on a learner surface: ${JSON.stringify(s.slice(0, 80))}`);
    ok(!/honest/i.test(s), `"honest" on a learner surface: ${JSON.stringify(s.slice(0, 80))}`);
    for (const j of JARGON) {
      // The -s plural too: `hasPhrase` is boundary-exact and a2.15 shipped
      // "paradigms" past a list holding "paradigm", on an act title, which is
      // drawn on the resume interstitial.
      ok(!hasPhrase(s, j) && !hasPhrase(s, `${j}s`), `grammar jargon ${JSON.stringify(j)} on a learner surface: ${JSON.stringify(s.slice(0, 80))}`);
    }
  }
  // `anti-hiatus` is the exact name for what act 3 teaches and a1.20's
  // grammarIntroduced uses it. Invariants §8: the curriculum may, a card may not.
  ok((L!.grammarIntroduced ?? []).some((g) => /anti-hiatus/i.test(g)),
    'grammarIntroduced does not claim anti-hiatus, and that is what act 3 is');
});

test('intro is a learner surface and is guarded as one', () => {
  if (noLesson) return;
  // a2.11 shipped "third person" here in v1 while every host gate was green,
  // because every guard in the band walked sections, sheets and terms and not
  // this. It is drawn on the lesson overview card AND the lesson cover.
  ok(L!.intro && L!.intro.length > 80, 'Lesson.intro is missing or too short to be the surface it is');
  ok(!L!.intro!.includes('—'), 'an em dash in intro');
  for (const j of ['paradigm', 'inflection', 'elision', 'pre-vocalic', 'third person']) {
    ok(!hasPhrase(L!.intro!, j), `intro holds the jargon ${JSON.stringify(j)}, and it is drawn on two screens`);
  }
});

/* ══════════════════════════════════════════════════════════════════════════
 *  THE QUIZ, THE DICTÉE AND THE EAR
 * ═══════════════════════════════════════════════════════════════════════ */

test('the exam is one quiz, five rounds, thirty questions, every one with a why and a ref', () => {
  if (noLesson) return;
  strictEqual(L!.sections.filter((s) => s.type === 'quiz').length, 1, 'a second quiz section is silently never rendered');
  const qs = questions();
  strictEqual(qs.length, QUESTIONS);
  strictEqual((quiz() as { rounds: unknown[] }).rounds.length, ROUNDS);
  const mcq = qs.filter((q) => q.format === 'mcq').length;
  ok(mcq * 2 <= qs.length, `${mcq} of ${qs.length} questions are mcq and at most half may be`);
  for (const q of qs) {
    ok(q.why, `a question has no why: ${JSON.stringify(q.q).slice(0, 70)}`);
    ok(q.ref && SPINE.includes(q.ref), `a question refs ${q.ref}, which is not a section`);
    if (q.format === 'typeIn' || q.format === 'errorSpot') {
      ok(matchesAccept(q.answer ?? '', q.accept ?? []), `a free-text question does not accept the answer it displays: ${JSON.stringify(q.answer)}`);
    }
  }
});

test('each round leads on a different trigger, and every drill can fire', () => {
  if (noLesson) return;
  // drillForRound returns the FIRST resolving target and then stops, so a drill
  // that is never named first can never fire. a1.05 ships two such drills.
  const rounds = (quiz() as { rounds: { id: string; targets: string[] }[] }).rounds;
  const leads = rounds.map((r) => r.targets[0]);
  strictEqual(new Set(leads).size, leads.length, `two rounds lead on the same trigger: ${leads.join(', ')}`);
  const triggers = (L!.errorTriggers ?? []).map((t) => t.id);
  for (const t of triggers) ok(leads.includes(t), `${t} leads no round, so its drill can never fire`);
  const drills = new Set((L!.drills ?? []).map((d) => d.id));
  for (const t of L!.errorTriggers ?? []) {
    ok(drills.has(t.drill), `trigger ${t.id} names a drill that does not exist`);
    ok(t.retest && drills.has(t.retest), `trigger ${t.id} names a retest that does not exist`);
  }
});

test('no ear question asks between two forms that are one sound', () => {
  if (noLesson) return;
  // THIS LESSON HAS MORE HOMOPHONE GROUPS THAN ANY IN THE BAND, because five
  // written forms collapse into two sounds. Corrections §5: a listenChoose
  // offering two members of one group has no correct answer, and marking one
  // right certifies a bug.
  const groups = ADJS.map((a) => ONE_SOUND.map((f) => GRID[a][f]))
    .concat(ADJS.map((a) => OTHER_SOUND.map((f) => GRID[a][f])));
  for (const q of questions()) {
    if (q.format !== 'listenChoose') continue;
    const opts = q.opts ?? [];
    for (const g of groups) {
      for (const x of g) for (const y of g) {
        if (x === y) continue;
        for (let i = 0; i < opts.length; i += 1) for (let j = 0; j < opts.length; j += 1) {
          // Fires only when two options differ ONLY by a homophone, so an option
          // pair that also differs by its noun stays legal.
          ok(i === j || opts[i].replace(x, y) !== opts[j],
            `a listenChoose offers ${JSON.stringify(opts[i])} against ${JSON.stringify(opts[j])}, which are one sound`);
        }
      }
    }
  }
});

test('every ear question turns on the one contrast that is audible', () => {
  if (noLesson) return;
  // Refusing the illegal ones is not enough: an ear question that asks something
  // trivial passes the check above and teaches nothing. The plain form against
  // the short form is the ONLY audible distinction in this lesson.
  const ear = questions().filter((q) => q.format === 'listenChoose');
  ok(ear.length >= 2, `${ear.length} listenChoose questions, and the one audible contrast deserves at least two`);
  for (const q of ear) {
    const opts = q.opts ?? [];
    ok(ADJS.some((a) => opts.some((o) => hasPhrase(o, GRID[a].plain)) && opts.some((o) => hasPhrase(o, GRID[a].vowel))),
      'a listenChoose does not contrast the plain form against the short one');
  }
});

test('the dictée spells sixteen rows in LETTERS mode, and the three it cannot reach are named', () => {
  if (noLesson) return;
  const d = sectionById('s19-dictation') as { itemIds?: string[] } | undefined;
  ok(d?.itemIds, 's19-dictation has no itemIds');
  strictEqual(d!.itemIds!.length, DICTEE_TARGETS);
  for (const id of d!.itemIds!) {
    const row = byId.get(id);
    ok(row, `${id} is a dictée target and is not in the seed`);
    strictEqual(dicteeMode(row!.fr), 'letters',
      `${id} ${JSON.stringify(row!.fr)} spells in WORD mode, where every real word is handed over pre-spelled`);
    ok((row!.drills ?? []).includes('dictation'), `${id} is a dictée target with no dictation drill`);
  }
  // AND THE THREE THAT CANNOT BE REACHED GENUINELY CANNOT BE, so the claim is a
  // measurement rather than an excuse.
  for (const text of WORD_MODE) {
    ok(dicteeMode(text) !== 'letters', `${JSON.stringify(text)} is recorded as too long and dicteeMode puts it in LETTERS`);
  }
  // THE SHORT FORM IS IN THE DICTÉE. A dictée that could not spell it would test
  // everything in this lesson except its subject.
  const short = ADJS.filter((a) => d!.itemIds!.includes(VOWEL_ROW[a]));
  ok(short.length >= 2, `only ${short.length} short form(s) are dictée targets`);
});

/* ══════════════════════════════════════════════════════════════════════════
 *  REACHABILITY, ROWS AND THE NASALS
 * ═══════════════════════════════════════════════════════════════════════ */

test('every itemId resolves, is drawn or released, and can be served as its deck expects', () => {
  if (noLesson) return;
  strictEqual(L!.itemIds.length, ITEM_COUNT);
  for (const id of L!.itemIds) ok(byId.has(id), `${id} is an itemId and is not in the seed; the card would draw blank`);
  const drawn = new Set<string>();
  const walk = (v: unknown): void => {
    if (Array.isArray(v)) { for (const x of v) walk(x); return; }
    if (!v || typeof v !== 'object') return;
    const o = v as Record<string, unknown>;
    if (typeof o.itemId === 'string') drawn.add(o.itemId);
    if (Array.isArray(o.itemIds)) for (const x of o.itemIds) if (typeof x === 'string') drawn.add(x);
    if (Array.isArray(o.items)) for (const x of o.items) if (typeof x === 'string') drawn.add(x);
    for (const x of Object.values(o)) walk(x);
  };
  walk(L!.sections); walk(L!.drills ?? []); walk(L!.terms ?? {});
  const released = new Set((L!.deckTranche ?? []).flat());
  for (const id of L!.itemIds) {
    ok(drawn.has(id) || released.has(id), `${id} is neither drawn by a section nor released by a tranche; a1.08 shipped 43 of these`);
    ok((byId.get(id)!.drills ?? []).includes('flashcard'), `${id} is released to the hub with no flashcard drill`);
  }
  const speak = sectionById('s20-speak') as { itemIds?: string[] } | undefined;
  for (const id of speak?.itemIds ?? []) {
    ok((byId.get(id)?.drills ?? []).includes('voiceflash'), `${id} is a speak target with no voiceflash; the mic cannot score it`);
  }
});

test('this build carries no gendered row, so a1.03\'s ending population is untouched', () => {
  if (noLesson) return;
  // Every noun this lesson needs — appartement, immeuble, arbre, ami, homme,
  // sac — exists as a gendered single-word row, and every one of them is
  // refused. The nouns appear INSIDE sentences instead. Invariants §5: a
  // gendered single-word row joins a1.03's measured ending population and moves
  // twenty printed figures in a1-03-genre.test.ts.
  const mine = [...L!.itemIds].map((id) => byId.get(id)!);
  const gendered = mine.filter((r) => (r as { gender?: string }).gender);
  deepStrictEqual(gendered.map((r) => r.id), [], 'this lesson carries a gendered row');
  // And the real function agrees, run over the theme rather than a copy of it.
  const theme = seed.items.filter((i) => i.theme === 'adjectifs-essentiels');
  const withoutMine = theme.filter((i) => !L!.itemIds.includes(i.id));
  strictEqual(endingPopulation(theme as never).length, endingPopulation(withoutMine as never).length,
    'this lesson changes the ending population of adjectifs-essentiels');
});

test('the nasals are all visible to the checker, and the count is asserted', () => {
  if (noLesson) return;
  // Corrections §6, measured by breaking every superscript back to a plain n.
  // 17 seen and 0 missed is a first in this band — a2.11 missed 11 of 25, a2.03
  // 2 of 29 — and it is not luck: every nasal here is `uhⁿ` or `sohⁿ` and both
  // END a token, which is the one shape the checker CAN see.
  //
  // BOTH FIGURES ARE ASSERTED, so the day the checker changes this fails rather
  // than carrying a stale claim.
  const rows = [...new Set([...L!.itemIds])].map((id) => byId.get(id)!);
  let superscripts = 0; let seen = 0; let blind = 0;
  for (const r of rows) {
    const rs = r.respell ?? '';
    ok(!hasPlainNasalFor(r.fr, rs), `${r.id} ${JSON.stringify(rs)} is flagged by the nasal checker`);
    for (let i = 0; i < rs.length; i += 1) {
      if (rs[i] !== 'ⁿ') continue;
      superscripts += 1;
      if (hasPlainNasalFor(r.fr, `${rs.slice(0, i)}n${rs.slice(i + 1)}`)) seen += 1; else blind += 1;
    }
  }
  strictEqual(superscripts, SUPERSCRIPTS);
  strictEqual(seen, SEEN_NASALS);
  strictEqual(blind, BLIND_NASALS);
});

test('the counts the build claims are the counts in the seed', () => {
  if (noLesson) return;
  const authored = seed.items.filter((i) => i.id.startsWith('fr.a2.adjectifs-essentiels.')
    && i.id >= 'fr.a2.adjectifs-essentiels.041' && i.id <= 'fr.a2.adjectifs-essentiels.080');
  strictEqual(authored.length, AUTHORED_COUNT, 'the id block does not hold what this build authored');
  const imported = new Set(Object.values(IMPORTED_HEADWORDS).concat(Object.values(VOWEL_ROW), [SILENT_H_ROW]));
  strictEqual(imported.size, IMPORTED_COUNT);
  for (const id of imported) ok(byId.has(id), `${id} is imported and is not in the seed; the seed is a CUT and the carry is not optional`);
});

test('every role-play turn offers two ways to answer and a userEn', () => {
  if (noLesson) return;
  // `scenario.logic.test.ts` enforces this across the whole seed and nothing in
  // this band's documentation mentions it. a2.03 v1 shipped three turns with one
  // alt apiece; its batch and merge were both green and the suite went red the
  // moment the merge landed.
  const s = sectionById('s18-scenario') as { turns?: { alts?: unknown[]; userEn?: string }[] } | undefined;
  ok(s?.turns?.length, 's18-scenario has no turns');
  s!.turns!.forEach((t, i) => {
    ok((t.alts?.length ?? 0) >= 2, `turn ${i} offers fewer than two alternatives`);
    ok(t.userEn?.trim(), `turn ${i} has no userEn`);
  });
});

test('every mission title fits the hub row, and every term chip row fits beside it', () => {
  if (noLesson) return;
  // Both are WIDTHS rather than counts (ledger §a2.14-13 and §a2.03-3), so both
  // are necessary and not sufficient: 27 characters of narrow glyphs fits and 27
  // of wide ones does not, and anything from 34 up on a chip row wants a look at
  // the phone.
  for (const s of L!.sections) {
    const t = (s as { title?: string }).title ?? '';
    ok(t.length <= 27, `the mission title ${JSON.stringify(t)} is ${t.length} characters and the hub ceiling is 27`);
    const chips = ((s as { terms?: string[] }).terms ?? []).map((k) => (L!.terms ?? {})[k]?.term ?? k);
    ok(chips.length <= 3, `${(s as { id?: string }).id} declares ${chips.length} term chips and the renderer shows 3`);
    const w = chips.join('').length + Math.max(0, chips.length - 1);
    ok(w <= 37, `${(s as { id?: string }).id}'s chips total ${w} characters and the measured row budget is 37`);
  }
});
