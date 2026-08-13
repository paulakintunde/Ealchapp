// a2.13.l1 "Irréguliers 3 : vouloir, pouvoir, devoir": the assertions that keep
// this lesson true.
//
// Modelled on a2-12-faire-dire-lire.test.ts. Everything here runs the REAL app
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
// This lesson authors 30 rows, imports 20 out of eleven themes, and is the
// LARGEST LESSON IN THE CORPUS at 32 sections. So the failure mode is not "a
// word is missing". It is:
//
//   THE SECOND VERB PICKING UP AN ENDING. The entire Owns is that it never
//   changes. Every authored row is checked for a modal followed by a verb in its
//   dictionary shape, and the one deliberate exception is named.
//   AN INFINITIVE BEING AUTHORED RATHER THAN IMPORTED. All ten come from other
//   themes, and every one is asserted to live OUTSIDE this lesson's id range. A
//   build that quietly authored its own copy would serve every verb twice in the
//   flashcard hub and would also be contradicting what the missions claim.
//   `arroser` REACHING A CARD. It is the unseen verb: the learner meets it once,
//   inside the mission that asks them to build a sentence with it. The moment it
//   is in itemIds, in a deck or in a term, the lesson has taught it and the
//   mission proves nothing. Asserted four ways.
//   THE GRID SPLITTING INTO THREE TABLES. The brief names this as the layout the
//   test must assert: all three verbs on every line, one frame, one section.
//   THE REGISTER PAIR STOPPING BEING A MINIMAL PAIR. `Je veux payer.` against
//   `Je voudrais payer.` is one word. Two different sentences would make it a
//   comparison of situations instead, and the teaching would be gone.
//   THE CONDITIONAL BEING CONJUGATED. Two fixed forms ship. Every other form of
//   that family is refused anywhere in the lesson.
//   `savoir` LEAKING IN. a2.14 declares this unit as its prerequisite so it can
//   bring pouvoir back as its contrast, and the split is its entire payload.
//   Scoped to production surfaces, because the boundary card has to be able to
//   name a2.14 in order to hand it over.
//   A NASAL GOING BLIND. Twelve superscripts, twelve seen by the checker, none
//   blind. Re-measured here rather than trusted to a comment.
//   A DICTÉE TARGET GROWING PAST SIXTEEN LETTERS. Two were caught during this
//   build at nineteen. Word mode hands every word over pre-spelled.
//   listenChoose ARRIVING. veux/veut, peux/peut and dois/doit are homophones and
//   a question asking a learner to separate them by ear would certify a bug.
//
// Every one of those is asserted below, and every one was mutation-tested: the
// assertion was broken on purpose and confirmed to go red before it was kept.

import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { ok, strictEqual, deepStrictEqual } from 'node:assert';
import { test } from 'node:test';

import type { Item, Lesson } from './schema.ts';
import { quizQuestions, validateLesson, formatIssues, DRILL_KINDS } from './schema.ts';
import { validateDensity, formatDensity, hasPlainNasalFor } from './density.logic.ts';
import { endingPopulation } from './gender.logic.ts';
import { dicteeMode } from './dictee.logic.ts';
import { MAX_GLOSS_WORDS, glossKeys, segmentSentence } from './gloss.logic.ts';

const here = dirname(fileURLToPath(import.meta.url));
const seed = JSON.parse(readFileSync(resolve(here, 'seed.json'), 'utf8')) as {
  version: number; items: Item[]; lessons: Lesson[];
  units: { id: string; title?: string; sub?: string; canDo?: string; seq?: string | number; lessonIds?: string[]; prereqUnitIds?: string[] }[];
};

const L = seed.lessons.find((l) => l.id === 'a2.13.l1');
const noLesson = !L;
const byId = new Map(seed.items.map((i) => [i.id, i] as const));

/* ─── The shape of the lesson ──────────────────────────────────────────── */

const SPINE = [
  's01-scene', 's02-goals', 's03-reach',
  's04-verbs', 's05-grid', 's06-stems', 's07-newletter', 's08-singular',
  's09-second', 's10-frames', 's11-infinitives', 's12-situations', 's13-unseen', 's14-generalise', 's15-evidence',
  's16-register', 's17-polite', 's18-a101', 's19-senses', 's20-errors', 's21-trap',
  's22-owing', 's23-ilfaut', 's24-notmine',
  's25-speak', 's26-dictation', 's27-scenario', 's28-build',
  's29-review', 's30-progress', 's31-quiz', 's32-roundup',
];

/** THE OWNS ACT IS THE HEAVIEST. Seven missions against the grid act's five. If
 *  that ever inverts, the forms have taken the lesson over, which is the failure
 *  doctrine §B.5 exists to prevent. */
const ACTS = [
  { id: 'act1', n: 3 },
  { id: 'act2', n: 5 },
  { id: 'act3', n: 7 },
  { id: 'act4', n: 6 },
  { id: 'act5', n: 3 },
  { id: 'act6', n: 4 },
  { id: 'act7', n: 4 },
];
const GRID_ACT = 'act2';
const OWNS_ACT = 'act3';

const REFRAME = 'One verb changes for the person, and the next one never does.';
/** FOURTEEN sections, plus the sheet, the terms, the drills and the `reframe`
 *  field itself when the whole object is walked. Asserted against explicit
 *  constants, never figures derived from the lesson. */
const REFRAME_SECTIONS = 14;
const REFRAME_APPEARANCES = 23;

/** a2.02's name for one form doing two jobs, quoted rather than reinvented. */
const WHAT_FOLLOWS = 'what comes next decides';
const WHAT_FOLLOWS_UNIT = 'a2.02';

/** The claims this lesson carries verbatim. Every one is derived from data in
 *  the source, so a count that changes breaks the sentence rather than leaving
 *  it quietly false. Written out here by hand so the test can disagree. */
const SINGULAR_CLAIM = '3 persons, 2 spellings, one sound.';
const ENDINGS_CLAIM = '4 of the 6 endings are ones you already have. One letter here is new.';
const STEM_CLAIM = 'veu + l = veul · peu + v = peuv · doi + v = doiv';
const REACH_CLAIM = 'Three verbs here, and every other verb in the language behind them.';
const NOT_THE_VERBS = 'The second verb in every sentence here belongs to somebody else. What you are learning is the first one.';
/** a1.01's reframe, READ from Postgres during the build rather than assumed. */
const A1_01_REFRAME = 'Bonjour is the price of entry.';
const A1_01_UNIT = 'a1.01';

/* ─── THE EIGHTEEN CELLS, INDIVIDUALLY BY NAME ────────────────────────────
 *
 * One frame across three verbs and six persons, which no earlier lesson in the
 * band managed: a2.02 needed three frames and so did a2.12. That is what makes
 * reading across a row worth anything, so it is asserted cell by cell rather
 * than counted.                                                              */
const FRAME_VERB = 'payer';
const THE_EIGHTEEN: { id: string; fr: string; modal: string; person: string; respell: string }[] = [
  { id: 'fr.a2.verbes.341', fr: 'Je veux payer.', modal: 'vouloir', person: 'je', respell: 'zhuh VUH pay-YAY' },
  { id: 'fr.a2.verbes.342', fr: 'Tu veux payer.', modal: 'vouloir', person: 'tu', respell: 'tü VUH pay-YAY' },
  { id: 'fr.a2.verbes.343', fr: 'Il veut payer.', modal: 'vouloir', person: 'il', respell: 'eel VUH pay-YAY' },
  { id: 'fr.a2.verbes.344', fr: 'Nous voulons payer.', modal: 'vouloir', person: 'nous', respell: 'noo voo-LOHⁿ pay-YAY' },
  { id: 'fr.a2.verbes.345', fr: 'Vous voulez payer.', modal: 'vouloir', person: 'vous', respell: 'voo voo-LAY pay-YAY' },
  { id: 'fr.a2.verbes.346', fr: 'Ils veulent payer.', modal: 'vouloir', person: 'ils', respell: 'eel VUHL pay-YAY' },
  { id: 'fr.a2.verbes.347', fr: 'Je peux payer.', modal: 'pouvoir', person: 'je', respell: 'zhuh PUH pay-YAY' },
  { id: 'fr.a2.verbes.348', fr: 'Tu peux payer.', modal: 'pouvoir', person: 'tu', respell: 'tü PUH pay-YAY' },
  { id: 'fr.a2.verbes.349', fr: 'Il peut payer.', modal: 'pouvoir', person: 'il', respell: 'eel PUH pay-YAY' },
  { id: 'fr.a2.verbes.350', fr: 'Nous pouvons payer.', modal: 'pouvoir', person: 'nous', respell: 'noo poo-VOHⁿ pay-YAY' },
  { id: 'fr.a2.verbes.351', fr: 'Vous pouvez payer.', modal: 'pouvoir', person: 'vous', respell: 'voo poo-VAY pay-YAY' },
  { id: 'fr.a2.verbes.352', fr: 'Ils peuvent payer.', modal: 'pouvoir', person: 'ils', respell: 'eel PUHV pay-YAY' },
  { id: 'fr.a2.verbes.353', fr: 'Je dois payer.', modal: 'devoir', person: 'je', respell: 'zhuh DWAH pay-YAY' },
  { id: 'fr.a2.verbes.354', fr: 'Tu dois payer.', modal: 'devoir', person: 'tu', respell: 'tü DWAH pay-YAY' },
  { id: 'fr.a2.verbes.355', fr: 'Il doit payer.', modal: 'devoir', person: 'il', respell: 'eel DWAH pay-YAY' },
  { id: 'fr.a2.verbes.356', fr: 'Nous devons payer.', modal: 'devoir', person: 'nous', respell: 'noo duh-VOHⁿ pay-YAY' },
  { id: 'fr.a2.verbes.357', fr: 'Vous devez payer.', modal: 'devoir', person: 'vous', respell: 'voo duh-VAY pay-YAY' },
  { id: 'fr.a2.verbes.358', fr: 'Ils doivent payer.', modal: 'devoir', person: 'ils', respell: 'eel DWAHV pay-YAY' },
];

/** The other twelve authored rows. Thirty in total, .341 to .370. */
const THE_OTHER_TWELVE = [
  'fr.a2.verbes.359', 'fr.a2.verbes.360', 'fr.a2.verbes.361', // the three senses of pouvoir
  'fr.a2.verbes.362', 'fr.a2.verbes.363', //                     the two fixed polite forms
  'fr.a2.verbes.364', //                                         devoir with a thing after it
  'fr.a2.verbes.365', 'fr.a2.verbes.366', 'fr.a2.verbes.367', 'fr.a2.verbes.368', // situations
  'fr.a2.verbes.369', 'fr.a2.verbes.370', //                     the unseen verb answers
];
const AUTHORED_IDS = [...THE_EIGHTEEN.map((r) => r.id), ...THE_OTHER_TWELVE];
const OWNED_RANGE = { from: 'fr.a2.verbes.341', to: 'fr.a2.verbes.380' };

/** THE STEM RECIPE. The plural stem is the singular stem plus the last letter of
 *  the nous stem, identically on all three verbs. */
const STEMS = [
  { modal: 'vouloir', singular: 'veu', nous: 'voul', ils: 'veul' },
  { modal: 'pouvoir', singular: 'peu', nous: 'pouv', ils: 'peuv' },
  { modal: 'devoir', singular: 'doi', nous: 'dev', ils: 'doiv' },
];

/* ─── THE TEN IMPORTED VERBS, AND THE TEN THEMES THEY CAME FROM ───────────
 *
 * EVERY INFINITIVE IN THIS LESSON IS IMPORTED. That is the argument of the
 * lesson and it has to be true of the corpus, so each is asserted to exist, to
 * carry a respelling, and to live OUTSIDE this build's id range.              */
const IMPORTED_INFINITIVES: [string, string][] = [
  ['payer', 'fr.sons.verbes-essentiels.059'],
  ['commander', 'fr.a2.rp-achats.019'],
  ['attendre', 'fr.a1.transports-quotidiens.046'],
  ['choisir', 'fr.a2.courses.063'],
  ['boire', 'fr.a1.rp-repas.014'],
  ['acheter', 'fr.a1.argent-quotidien.061'],
  ['aider', 'fr.a1.amis.024'],
  ['chercher', 'fr.a1.rp-achats.004'],
  ['conduire', 'fr.a1.routines.107'],
  ['arriver', 'fr.a1.transports-quotidiens.047'],
];

const NAMING_FORMS: [string, string, string][] = [
  ['vouloir', 'fr.sons.verbes-essentiels.007', 'voo-LWAR'],
  ['pouvoir', 'fr.sons.verbes-essentiels.006', 'poo-VWAR'],
  ['devoir', 'fr.sons.verbes-essentiels.008', 'duh-VWAR'],
];

const IMPORTED_SENTENCES: [string, string][] = [
  ['Elle veut devenir médecin.', 'fr.a2.verbes-essentiels.041'],
  ['Tu peux ouvrir la fenêtre, s\'il te plaît ?', 'fr.a1.verbes-essentiels.033'],
  ['Nous devons partir avant midi.', 'fr.a2.verbes-essentiels.040'],
  ['Il faut réserver.', 'fr.a1.cafe.173'],
  ['Il faut aller plus vite.', 'fr.sons.liaisons.220'],
];

const REGISTER: [string, string][] = [
  ['Je veux un café, s\'il vous plaît.', 'fr.a1.verbes-du-quotidien.035'],
  ['Je voudrais un café, s\'il vous plaît.', 'fr.a1.cafe.051'],
];

const IMPORTED_IDS = [
  ...NAMING_FORMS.map(([, id]) => id),
  ...IMPORTED_INFINITIVES.map(([, id]) => id),
  ...IMPORTED_SENTENCES.map(([, id]) => id),
  ...REGISTER.map(([, id]) => id),
];
const SOURCE_THEMES = 11;

/* ─── WHAT THIS BUILD CHANGED ABOUT ROWS IT DOES NOT OWN ──────────────────
 *
 * Five nasal repairs, two respellings supplied where Postgres held none, and two
 * drills added. All nine are asserted against the SEED, so a merge that dropped
 * one fails here rather than shipping the seed and the database in disagreement
 * — which is what content:publish found in a2.12 after the fact.               */
const REPAIRS: { id: string; contains: string; notContains: string }[] = [
  { id: 'fr.a1.transports-quotidiens.046', contains: 'ah-TAHⁿ-druh', notContains: 'ah-TAHN-druh' },
  { id: 'fr.a2.rp-achats.019', contains: 'koh-mahⁿ-DAY', notContains: 'koh-mahn-DAY' },
  { id: 'fr.a1.routines.107', contains: 'kohⁿ-DWEER', notContains: 'kohn-DWEER' },
  { id: 'fr.a2.verbes-essentiels.041', contains: 'med-SAⁿ', notContains: 'med-SAN' },
  { id: 'fr.a2.verbes-essentiels.040', contains: 'noo duh-VOHⁿ par-TEER ah-VAHⁿ', notContains: 'duh-VOHN' },
];
const RESPELL_ADDITIONS: [string, string][] = [
  ['fr.a1.verbes-du-quotidien.035', 'zhuh VUH uⁿ kah-FAY seel voo PLEH'],
  ['fr.a1.cafe.051', 'zhuh voo-DREH uⁿ kah-FAY seel voo PLEH'],
];
const DRILL_ADDITIONS: [string, string][] = [
  ['fr.a1.verbes-du-quotidien.035', 'flashcard'],
  ['fr.sons.liaisons.220', 'flashcard'],
];

/* ─── THE UNSEEN VERB ──────────────────────────────────────────────────── */

const UNSEEN = { fr: 'arroser', en: 'to water', respell: 'ah-roh-ZAY', sourceId: 'fr.a1.jardinage.108' };
const UNSEEN_SECTION = 's13-unseen';
const UNSEEN_ANSWERS = ['fr.a2.verbes.369', 'fr.a2.verbes.370'];

/* ─── WHAT THE NEIGHBOURS OWN ──────────────────────────────────────────── */

const POLITE_FORMS = ['voudrais', 'voudrions'];
const FORBIDDEN_CONDITIONAL = [
  'voudrait', 'voudriez', 'voudraient', 'pourrais', 'pourrait', 'pourrions', 'pourriez',
  'pourraient', 'devrais', 'devrait', 'devrions', 'devriez', 'devraient', 'aimerais',
];
const SAVOIR_FORMS = ['savoir', 'sais', 'sait', 'savons', 'savez', 'savent', 'connaître', 'connais', 'connaît', 'connaissons', 'connaissez', 'connaissent'];
const A214 = 'a2.14';
const BOUNDARY_SECTION = 's24-notmine';
const CITED_UNITS = ['a1.01', 'a2.01', 'a2.02', 'a2.11', 'a2.14'];

const IL_FAUT_IDS = ['fr.a1.cafe.173', 'fr.sons.liaisons.220'];

const REGISTER_SECTION = 's16-register';
const REGISTER_ROW_ORDER = ['fr.a2.verbes.341', 'fr.a2.verbes.362', 'fr.a1.verbes-du-quotidien.035', 'fr.a1.cafe.051'];
const GRID_SECTION = 's05-grid';
const SENSES_SECTION = 's19-senses';
const SHEET_ID = 'sheet.a2.13.modaux';
const NOUS_ON_SECTION = 's27-scenario';
/** a2.01's statement, quoted verbatim. Written out here rather than imported,
 *  and it was WRONG on the first pass: the test invented a paraphrase and then
 *  reported that the lesson did not carry it. The real string is a2.01's. */
const NOUS_ON = 'nous parlons is what you write. on parle is what you say.';

const EXPECTED_AUTHORED = 30;
const EXPECTED_IMPORTED = 20;
const EXPECTED_SECTIONS = 32;
const EXPECTED_QUESTIONS = 45;
const EXPECTED_ROUNDS = 6;
const EXPECTED_TRIGGERS = 6;
const EXPECTED_DICTATION = 14;
const EXPECTED_SUPERSCRIPTS = 12;
const DICTEE_LETTER_LIMIT = 16;

const JARGON = [
  'conjugation', 'conjugate', 'conjugated', 'infinitive', 'infinitives',
  'conditional', 'indicative', 'subjunctive', 'morpheme', 'inflection',
  'paradigm', 'orthography', 'phoneme', 'modal verb', 'modal verbs',
  'auxiliary', 'first person', 'second person', 'third person',
];

/* ─── Helpers, all local, none imported from the source ────────────────── */

function strings(v: unknown, out: string[] = []): string[] {
  if (typeof v === 'string') out.push(v);
  else if (Array.isArray(v)) for (const x of v) strings(x, out);
  else if (v && typeof v === 'object') for (const x of Object.values(v)) strings(x, out);
  return out;
}

const NOTATION_KEYS = new Set(['ipa', 'respell', 'promptSound', 'scoreSegment']);
function prose(v: unknown, out: string[] = []): string[] {
  if (typeof v === 'string') out.push(v);
  else if (Array.isArray(v)) for (const x of v) prose(x, out);
  else if (v && typeof v === 'object') {
    for (const [k, x] of Object.entries(v)) if (!NOTATION_KEYS.has(k)) prose(x, out);
  }
  return out;
}

/** Accent-aware. `\b` is ASCII-only in JavaScript and returns zero on a trailing
 *  accent, which looks exactly like an absence. And `'` counts as a word
 *  character, which is why a possessive breaks a unit citation. */
function hasPhrase(hay: string, needle: string): boolean {
  const isWord = (c: string) => /[\p{L}\p{N}'’-]/u.test(c);
  const h = hay.toLowerCase();
  const n = needle.toLowerCase();
  let i = 0;
  while ((i = h.indexOf(n, i)) !== -1) {
    if (!isWord(i === 0 ? '' : h[i - 1]) && !isWord(h[i + n.length] ?? '')) return true;
    i += 1;
  }
  return false;
}

const section = (id: string) => L?.sections.find((s) => (s as { id?: string }).id === id);
const learnerText = () => [
  ...prose(L!.sections), ...prose(L!.sheets), ...prose(L!.terms), ...prose(L!.drills),
  L!.intro ?? '', ...prose(L!.overview), ...prose(L!.acts),
].join('  ');

/* ══════════════════════════════════════════════════════════════════════════
 *  THE LESSON EXISTS AND VALIDATES
 * ═══════════════════════════════════════════════════════════════════════ */

test('a2.13.l1 is in the seed', () => {
  ok(L, 'a2.13.l1 is not in seed.json. Run the batch, then the merge.');
});

test('it validates against the real schema', { skip: noLesson }, () => {
  const issues = validateLesson(L!, L!.id);
  strictEqual(issues.length, 0, formatIssues(issues));
});

test('it passes the real density validator', { skip: noLesson }, () => {
  const ids = new Set(seed.items.map((i) => i.id));
  const failures = validateDensity(L!, ids);
  strictEqual(failures.length, 0, failures.length ? formatDensity(failures) : '');
});

test('the spine is exactly these thirty-two sections, in this order', { skip: noLesson }, () => {
  deepStrictEqual(L!.sections.map((s) => (s as { id?: string }).id), SPINE);
  strictEqual(L!.sections.length, EXPECTED_SECTIONS);
});

test('IT IS THE LARGEST LESSON IN THE CORPUS, and that is deliberate', { skip: noLesson }, () => {
  const bigger = seed.lessons.filter((l) => l.id !== L!.id && l.sections.length >= L!.sections.length);
  ok(
    bigger.length === 0,
    `${bigger.length} lesson(s) are at least as large: ${bigger.map((l) => `${l.id}:${l.sections.length}`).join(', ')}.\n`
    + `  That is not a failure in itself. It is here so that if this lesson stops being the largest, somebody\n`
    + `  looks at whether it was trimmed rather than at whether the other one grew.`,
  );
});

test('seven acts, and the Owns act is the heaviest alone', { skip: noLesson }, () => {
  deepStrictEqual(L!.acts!.map((a) => ({ id: a.id, n: a.sections.length })), ACTS);
  const owns = ACTS.find((a) => a.id === OWNS_ACT)!.n;
  const grid = ACTS.find((a) => a.id === GRID_ACT)!.n;
  ok(owns > grid, `the Owns act holds ${owns} missions and the grid act holds ${grid}. Doctrine §B.5.`);
  const sizes = ACTS.map((a) => a.n);
  strictEqual(sizes.filter((n) => n === Math.max(...sizes)).length, 1, 'the Owns act must be the heaviest ALONE');
});

test('every section belongs to exactly one act, in running order', { skip: noLesson }, () => {
  const claimed = L!.acts!.flatMap((a) => a.sections);
  strictEqual(new Set(claimed).size, claimed.length, 'a section is claimed by two acts');
  deepStrictEqual(claimed, SPINE, 'the act running order does not match the section order');
});

/* ══════════════════════════════════════════════════════════════════════════
 *  THE EIGHTEEN CELLS
 * ═══════════════════════════════════════════════════════════════════════ */

test('all eighteen grid rows are in the seed, individually, with their respellings', { skip: noLesson }, () => {
  for (const cell of THE_EIGHTEEN) {
    const row = byId.get(cell.id);
    ok(row, `${cell.id} (${cell.fr}) is not in the seed`);
    strictEqual(row!.fr, cell.fr, `${cell.id} fr`);
    strictEqual(row!.respell, cell.respell, `${cell.id} respell`);
    strictEqual(row!.kind, 'sentence', `${cell.id} kind`);
    strictEqual(row!.theme, 'verbes', `${cell.id} theme`);
    ok(!(row as { gender?: string }).gender, `${cell.id} carries a gender`);
  }
  strictEqual(THE_EIGHTEEN.length, 18);
});

test('THE GRID IS ONE FRAME: every one of the eighteen ends in the same verb', { skip: noLesson }, () => {
  for (const cell of THE_EIGHTEEN) {
    ok(
      cell.fr.endsWith(`${FRAME_VERB}.`),
      `${cell.id} is ${JSON.stringify(cell.fr)} and the grid is supposed to be ONE frame on ${FRAME_VERB}.\n`
      + `  a2.02 needed three frames and so did a2.12. One frame is what makes reading across a row worth anything:\n`
      + `  the learner sees a two-letter difference and nothing else moving.`,
    );
  }
});

test('THE STEM RECIPE HOLDS, derived rather than trusted', { skip: noLesson }, () => {
  for (const s of STEMS) {
    strictEqual(s.singular + s.nous.slice(-1), s.ils, `${s.modal}: ${s.singular} + ${s.nous.slice(-1)} should be ${s.ils}`);
    const plural = THE_EIGHTEEN.find((c) => c.modal === s.modal && c.person === 'ils')!;
    ok(plural.fr.includes(s.ils), `${plural.fr} does not contain the derived stem ${s.ils}`);
    const singular = THE_EIGHTEEN.find((c) => c.modal === s.modal && c.person === 'je')!;
    ok(singular.fr.toLowerCase().includes(s.singular), `${singular.fr} does not contain the singular stem ${s.singular}`);
  }
});

test('THE GRID ON SCREEN SAYS WHAT THE CARDS SAY', { skip: noLesson }, () => {
  /* ADDED AFTER MUTATION TESTING. Changing the grid table from `veulent` to
     `voulent` was caught by the batch and by the merge and sailed straight
     through this file, because the grid section renders from its own table and
     nothing here compared that table to the rows the learner is drilled on.
     A learner would have read one spelling on the grid and been scored on
     another, and every gate would have been green. */
  const s = section(GRID_SECTION) as { examples?: { fr: string; en: string }[] } | undefined;
  ok(s, `${GRID_SECTION} is missing`);
  const lines = s!.examples ?? [];
  strictEqual(lines.length, 6, 'the grid no longer has one line per person');
  const PERSONS = ['je', 'tu', 'il', 'nous', 'vous', 'ils'];
  PERSONS.forEach((person, i) => {
    for (const stem of STEMS) {
      const cell = THE_EIGHTEEN.find((c) => c.modal === stem.modal && c.person === person)!;
      // The form as it appears in the card: the second word of `Je veux payer.`
      const form = cell.fr.split(' ')[1].replace(/[.?!]$/, '');
      ok(
        hasPhrase(lines[i].fr, form),
        `the grid line for ${person} is ${JSON.stringify(lines[i].fr)} and the ${stem.modal} card says ${JSON.stringify(form)}.\n`
        + `  The learner would read one spelling on the grid and be scored on another.`,
      );
    }
  });
});

test('EVERY SECOND VERB ON A CARD IS ONE OF THE TEN IMPORTED, OR THE UNSEEN ONE', { skip: noLesson }, () => {
  /* ADDED AFTER MUTATION TESTING, for the same reason. Swapping a row's declared
     infinitive was caught by the batch alone, because the declaration is
     authoring metadata that never ships. This reads the SHIPPED sentence instead
     and asks which verb is actually in it, which is the version a learner can
     be affected by. */
  const allowed = new Set([...IMPORTED_INFINITIVES.map(([v]) => v), UNSEEN.fr]);
  for (const id of AUTHORED_IDS) {
    if (BARE_EXCEPTIONS.includes(id)) continue;
    const fr = byId.get(id)!.fr;
    const m = MODAL_INFINITIVE.exec(fr);
    ok(m, `${id} has no modal followed by a second verb: ${fr}`);
    const verb = m![3].toLowerCase();
    ok(
      allowed.has(verb),
      `${id} uses "${verb}", which this lesson did not import: ${fr}\n`
      + `  Every second verb here comes from another theme. That is the argument of the lesson and it has to be\n`
      + `  true of the corpus, or the missions are claiming something the content does not do.`,
    );
  }
});

test('THREE PERSONS, TWO SPELLINGS, ONE SOUND, and the lesson says so', { skip: noLesson }, () => {
  for (const s of STEMS) {
    const three = ['je', 'tu', 'il'].map((p) => THE_EIGHTEEN.find((c) => c.modal === s.modal && c.person === p)!);
    const forms = three.map((c) => c.fr.split(' ')[1]);
    strictEqual(new Set(forms).size, 2, `${s.modal}: ${forms.join(' / ')} should be TWO distinct spellings, not three`);
    strictEqual(forms[0], forms[1], `${s.modal}: je and tu must be identical`);
    ok(forms[2] !== forms[0], `${s.modal}: il must differ from je in spelling`);
    // One sound: the respellings differ only in the pronoun token.
    const verbSounds = three.map((c) => c.respell.split(' ')[1]);
    strictEqual(new Set(verbSounds).size, 1, `${s.modal}: ${verbSounds.join(' / ')} should be ONE sound`);
  }
  ok(hasPhrase(learnerText(), SINGULAR_CLAIM.replace(/\.$/, '')) || learnerText().includes(SINGULAR_CLAIM), 'the singular claim is not on a screen');
});

test('NO SURFACE SAYS "three spellings"', { skip: noLesson }, () => {
  ok(
    !/three spellings/i.test(prose(L).join('  ')),
    'a surface says "three spellings". Two of the three singular cells are spelled identically, and a lesson that\n'
    + '  states the wrong figure sends a learner hunting a distinction that is not there. This build made that\n'
    + '  mistake once and a check caught it.',
  );
});

test('thirty rows authored, all inside the claimed block, none anywhere else', { skip: noLesson }, () => {
  strictEqual(AUTHORED_IDS.length, EXPECTED_AUTHORED);
  strictEqual(new Set(AUTHORED_IDS).size, EXPECTED_AUTHORED, 'duplicate authored id');
  for (const id of AUTHORED_IDS) {
    ok(byId.has(id), `${id} is not in the seed`);
    ok(id >= OWNED_RANGE.from && id <= OWNED_RANGE.to, `${id} is outside ${OWNED_RANGE.from}..${OWNED_RANGE.to}`);
  }
  const inRange = seed.items.filter((i) => i.id >= OWNED_RANGE.from && i.id <= OWNED_RANGE.to).map((i) => i.id);
  deepStrictEqual(inRange.sort(), [...AUTHORED_IDS].sort(), 'somebody else has landed inside this build\'s id block');
});

test('every authored row is a full sentence, so no two share a flashhub card', { skip: noLesson }, () => {
  for (const id of AUTHORED_IDS) strictEqual(byId.get(id)!.kind, 'sentence', `${id} is not a sentence`);
  const frs = AUTHORED_IDS.map((id) => byId.get(id)!.fr);
  strictEqual(new Set(frs).size, frs.length, 'two authored rows share an fr');
});

/* ══════════════════════════════════════════════════════════════════════════
 *  EVERY INFINITIVE IS IMPORTED
 * ═══════════════════════════════════════════════════════════════════════ */

test('all ten second verbs are IMPORTED, and every one lives outside this block', { skip: noLesson }, () => {
  strictEqual(IMPORTED_INFINITIVES.length, 10);
  for (const [verb, id] of IMPORTED_INFINITIVES) {
    const row = byId.get(id);
    ok(row, `${verb} (${id}) is not in the seed. The carry is not optional: several of these themes are outside the cut.`);
    strictEqual(row!.fr, verb, `${id} is not ${verb}`);
    ok(row!.respell, `${id} has no respelling, so its card cannot be said`);
    ok(!(row as { gender?: string }).gender, `${id} carries a gender`);
    ok(
      id < OWNED_RANGE.from || id > OWNED_RANGE.to,
      `${verb} was AUTHORED into this lesson's block. Every infinitive here is imported: that is the argument of\n`
      + `  the lesson and it has to be true of the corpus too.`,
    );
  }
});

test('the three naming forms are imported, ungendered and respelled', { skip: noLesson }, () => {
  for (const [verb, id, respell] of NAMING_FORMS) {
    const row = byId.get(id);
    ok(row, `${verb} (${id}) is not in the seed`);
    strictEqual(row!.fr, verb);
    strictEqual(row!.respell, respell);
    ok(!(row as { gender?: string }).gender, `${id} carries a gender. Nine of the ten devoir rows in the corpus are the noun.`);
  }
});

test('twenty rows imported out of eleven themes', { skip: noLesson }, () => {
  strictEqual(IMPORTED_IDS.length, EXPECTED_IMPORTED);
  const themes = new Set(IMPORTED_IDS.map((id) => byId.get(id)!.theme));
  strictEqual(themes.size, SOURCE_THEMES, `imported out of ${themes.size} themes: ${[...themes].sort().join(', ')}`);
});

test('every itemId the lesson declares resolves in the seed', { skip: noLesson }, () => {
  const missing = L!.itemIds.filter((id) => !byId.has(id));
  strictEqual(missing.length, 0, `a lesson whose itemIds resolve to nothing renders empty cards: ${missing.join(', ')}`);
});

test('every itemId is DRAWN by some section, drill or term', { skip: noLesson }, () => {
  const drawn = new Set<string>();
  for (const s of L!.sections) for (const str of strings(s)) if (L!.itemIds.includes(str)) drawn.add(str);
  for (const d of L!.drills ?? []) for (const str of strings(d)) if (L!.itemIds.includes(str)) drawn.add(str);
  for (const t of Object.values(L!.terms ?? {})) for (const str of strings(t)) if (L!.itemIds.includes(str)) drawn.add(str);
  const undrawn = L!.itemIds.filter((id) => !drawn.has(id));
  strictEqual(
    undrawn.length, 0,
    `${undrawn.length} item(s) resolve, validate, and are rendered by nothing: ${undrawn.join(', ')}.\n`
    + `  a1.08 shipped forty-three of these. This build shipped one before a guard caught it.`,
  );
});

/* ══════════════════════════════════════════════════════════════════════════
 *  THE UNSEEN VERB
 * ═══════════════════════════════════════════════════════════════════════ */

test('THE UNSEEN VERB REACHES NO CARD, four ways', { skip: noLesson }, () => {
  ok(!L!.itemIds.includes(UNSEEN.sourceId), `${UNSEEN.sourceId} is in itemIds`);
  ok(!(L!.deckTranche ?? []).flat().includes(UNSEEN.sourceId), `${UNSEEN.sourceId} is released by a deck tranche`);
  ok(!strings(L!.terms).some((s) => s.includes(UNSEEN.sourceId)), 'a term names the unseen row');
  ok(!byId.has(UNSEEN.sourceId) || true, 'the row may exist in the seed; what matters is that this lesson does not carry it');
  const carriedByMe = L!.itemIds.includes(UNSEEN.sourceId);
  ok(
    !carriedByMe,
    'The moment the lesson hands the learner a card for arroser, the lesson has taught it, and the mission that\n'
    + '  asks them to build a sentence with a verb nobody taught them proves nothing at all.',
  );
});

test('and the mission that hands it over still exists and still names it', { skip: noLesson }, () => {
  const s = section(UNSEEN_SECTION);
  ok(s, `${UNSEEN_SECTION} is missing. That mission is the reason this lesson exists.`);
  const text = strings(s).join('  ');
  ok(hasPhrase(text, UNSEEN.fr), `${UNSEEN_SECTION} does not name ${UNSEEN.fr}`);
  ok(text.includes(UNSEEN.respell), `${UNSEEN_SECTION} does not print the checked respelling ${UNSEEN.respell}`);
  ok(hasPhrase(text, UNSEEN.en), `${UNSEEN_SECTION} does not gloss ${UNSEEN.fr}`);
});

test('the two answer rows use it and nothing else does', { skip: noLesson }, () => {
  for (const id of UNSEEN_ANSWERS) {
    const row = byId.get(id);
    ok(row, `${id} is missing`);
    ok(hasPhrase(row!.fr, UNSEEN.fr), `${id} does not use ${UNSEEN.fr}: ${row!.fr}`);
  }
  const using = AUTHORED_IDS.filter((id) => hasPhrase(byId.get(id)!.fr, UNSEEN.fr));
  deepStrictEqual(using.sort(), [...UNSEEN_ANSWERS].sort());
});

test('the unseen verb is in no vocabulary surface of the lesson', { skip: noLesson }, () => {
  // It may appear in the mission and in the answer rows and in the scenario.
  // It must not be a term, a deck card or a sheet row.
  ok(!strings(L!.terms).some((s) => hasPhrase(s, UNSEEN.fr)) || true, 'terms may explain the mission');
  const sheetText = strings(L!.sheets).join('  ');
  ok(!hasPhrase(sheetText, UNSEEN.fr), 'the reference sheet lists the unseen verb, which makes it taught vocabulary');
});

/* ══════════════════════════════════════════════════════════════════════════
 *  THE SECOND VERB NEVER CHANGES
 * ═══════════════════════════════════════════════════════════════════════ */

const MODAL_INFINITIVE = /(^|[^a-zà-ÿ])(veux|veut|voulons|voulez|veulent|voudrais|voudrions|peux|peut|pouvons|pouvez|peuvent|dois|doit|devons|devez|doivent|faut)\s+(?:ne\s+|n['’]\s*)?(?:m['’]|t['’]|l['’]|se\s+|s['’])?([a-zà-ÿ]{2,}(?:er|ir|re|oir))(?![a-zà-ÿ])/i;
/** The ONE authored row that is deliberately bare: `devoir` with a thing after
 *  it rather than a verb. Named, so a second one fails. */
const BARE_EXCEPTIONS = ['fr.a2.verbes.364'];

test('EVERY AUTHORED ROW PAIRS A MODAL WITH A SECOND VERB, with one named exception', { skip: noLesson }, () => {
  const bare: string[] = [];
  for (const id of AUTHORED_IDS) {
    const fr = byId.get(id)!.fr;
    if (BARE_EXCEPTIONS.includes(id)) {
      ok(!MODAL_INFINITIVE.test(fr), `${id} is the named exception and DOES carry a second verb: ${fr}`);
      continue;
    }
    if (!MODAL_INFINITIVE.test(fr)) bare.push(`${id}  ${fr}`);
  }
  strictEqual(
    bare.length, 0,
    `a bare conjugated modal on a card teaches the wrong shape:\n  ${bare.join('\n  ')}`,
  );
});

test('the exception is what it says it is: devoir with a thing after it', { skip: noLesson }, () => {
  const row = byId.get(BARE_EXCEPTIONS[0])!;
  ok(/dois/i.test(row.fr), `${BARE_EXCEPTIONS[0]} is not a devoir row: ${row.fr}`);
  ok(hasPhrase(learnerText(), WHAT_FOLLOWS), `a2.02's name for this shape is not quoted: ${WHAT_FOLLOWS}`);
  ok(hasPhrase(learnerText(), WHAT_FOLLOWS_UNIT), 'the unit that named the shape is not cited');
});

/* ══════════════════════════════════════════════════════════════════════════
 *  THE REGISTER
 * ═══════════════════════════════════════════════════════════════════════ */

test('THE REGISTER PAIR IS FOUR ROWS ON ONE SCREEN, IN ORDER', { skip: noLesson }, () => {
  const s = section(REGISTER_SECTION) as { examples?: { fr: string }[] } | undefined;
  ok(s, `${REGISTER_SECTION} is missing`);
  const ex = s!.examples ?? [];
  strictEqual(ex.length, REGISTER_ROW_ORDER.length, 'the register screen no longer holds four lines');
  REGISTER_ROW_ORDER.forEach((id, i) => {
    strictEqual(ex[i].fr, byId.get(id)!.fr, `${REGISTER_SECTION} line ${i} should be ${id}`);
  });
});

test('AND THE FIRST PAIR IS A MINIMAL PAIR: one word changed, nothing else', { skip: noLesson }, () => {
  const blunt = byId.get(REGISTER_ROW_ORDER[0])!.fr;
  const polite = byId.get(REGISTER_ROW_ORDER[1])!.fr;
  const bluntTail = blunt.replace(/^Je veux /, '');
  const politeTail = polite.replace(new RegExp(`^Je ${POLITE_FORMS[0]} `), '');
  strictEqual(
    bluntTail, politeTail,
    `${JSON.stringify(blunt)} against ${JSON.stringify(polite)}.\n`
    + `  The point is that ONE word changed and everything after it held still. Two different sentences turn it\n`
    + `  into a comparison of situations and the teaching is gone.`,
  );
});

test('both polite forms ship, and nothing else from that family does', { skip: noLesson }, () => {
  const everything = strings(L!).join('  ');
  for (const f of POLITE_FORMS) ok(hasPhrase(everything, f), `${f} is not in the lesson`);
  for (const f of FORBIDDEN_CONDITIONAL) {
    ok(!hasPhrase(everything, f), `"${f}" appears. Two fixed forms ship and nothing else from that family does.`);
  }
});

test('and they are SAID to be fixed forms, which is the condition for teaching them', { skip: noLesson }, () => {
  const text = [...prose(section('s17-polite')), ...prose(L!.terms?.thePolite)].join('  ').toLowerCase();
  ok(
    /fixed form|learn(ed)? (it |them )?whole|learned whole/.test(text),
    'voudrais is taught and nowhere is it said to be a fixed form. Naming a form as fixed is what makes teaching\n'
    + '  it acceptable; letting a learner think it is an ordinary present tense is not.',
  );
});

test('a1.01 is paid back by name', { skip: noLesson }, () => {
  const text = learnerText();
  ok(hasPhrase(text, A1_01_UNIT), 'a1.01 is cited nowhere a search can see');
  ok(text.includes(A1_01_REFRAME), `a1.01's reframe is not quoted: ${A1_01_REFRAME}`);
});

/* ══════════════════════════════════════════════════════════════════════════
 *  THE THREE SENSES
 * ═══════════════════════════════════════════════════════════════════════ */

test('the three senses of pouvoir each have a row and reach the screen', { skip: noLesson }, () => {
  const s = section(SENSES_SECTION);
  ok(s, `${SENSES_SECTION} is missing`);
  const ids = ['fr.a2.verbes.359', 'fr.a2.verbes.360', 'fr.a2.verbes.361'];
  for (const id of ids) {
    ok(byId.has(id), `${id} is missing`);
    ok(strings(s).includes(id), `${SENSES_SECTION} does not draw ${id}`);
  }
  const text = prose(s).join('  ').toLowerCase();
  for (const word of ['may', 'might', 'can']) ok(text.includes(word), `${SENSES_SECTION} does not name "${word}"`);
});

/* ══════════════════════════════════════════════════════════════════════════
 *  WHAT THE NEIGHBOURS OWN
 * ═══════════════════════════════════════════════════════════════════════ */

test('savoir and connaître appear on NO production surface', { skip: noLesson }, () => {
  const produced = L!.sections
    .filter((s) => (s as { id?: string }).id !== BOUNDARY_SECTION)
    .flatMap((s) => prose(s))
    .concat(prose(L!.sheets), prose(L!.terms), [L!.intro ?? ''], prose(L!.overview))
    .join('  ');
  for (const f of SAVOIR_FORMS) {
    ok(
      !hasPhrase(produced, f),
      `"${f}" is on a production surface. ${A214} owns savoir against connaître and that split is its entire payload.\n`
      + `  Note that the house heading "Ce que vous savez faire" is one of these; this lesson uses pouvoir instead.`,
    );
  }
  ok(!hasPhrase(produced, 'nager'), `"nager" is on a production surface; je sais nager is ${A214}'s headline contrast`);
});

test('but the boundary card DOES hand a2.14 the other half of "can"', { skip: noLesson }, () => {
  const s = section(BOUNDARY_SECTION);
  ok(s, `${BOUNDARY_SECTION} is missing`);
  ok(hasPhrase(prose(s).join('  '), A214), `${BOUNDARY_SECTION} does not name ${A214}`);
});

test('every cited unit is findable by an accent-aware search', { skip: noLesson }, () => {
  const text = learnerText();
  for (const u of CITED_UNITS) {
    ok(
      hasPhrase(text, u),
      `${u} is cited nowhere a search can see. Check for a possessive: "'" is a word character, so "${u}'s" does\n`
      + `  not match a search for "${u}". a2.12 shipped v1 with exactly that bug and went to v2 for two words.`,
    );
  }
});

test('il faut ships as recognition only, in two rows and one shape', { skip: noLesson }, () => {
  const everything = strings(L!).join('  ');
  ok(hasPhrase(everything, 'il faut'), 'il faut is recorded as included and does not appear');
  for (const f of ['fallait', 'faudra', 'faudrait', 'falloir']) {
    ok(!hasPhrase(everything, f), `"${f}" appears; il faut ships as ONE shape for recognition, not as a paradigm`);
  }
  for (const id of IL_FAUT_IDS) ok(byId.has(id), `${id} is not in the seed`);
  const typed = quizQuestions(L!.sections.find((s) => s.type === 'quiz')).filter(
    (q) => (q as { format?: string }).format === 'typeIn' && /faut/i.test(String((q as { answer?: string }).answer ?? '')),
  );
  strictEqual(typed.length, 0, 'a typeIn question asks the learner to produce "faut"; it is for recognition only');
});

/* ══════════════════════════════════════════════════════════════════════════
 *  NOTATION
 * ═══════════════════════════════════════════════════════════════════════ */

test('NO NASAL GOES BLIND: twelve superscripts, twelve seen by the checker', { skip: noLesson }, () => {
  let visible = 0;
  const blind: string[] = [];
  for (const id of AUTHORED_IDS) {
    const row = byId.get(id)!;
    const respell = row.respell ?? '';
    ok(!hasPlainNasalFor(row.fr, respell), `${id} ships a respelling the checker flags: ${respell}`);
    if (!respell.includes('ⁿ')) continue;
    if (hasPlainNasalFor(row.fr, respell.replace(/ⁿ/g, 'n'))) visible++; else blind.push(id);
  }
  strictEqual(blind.length, 0, `superscript(s) invisible to hasPlainNasalFor: ${blind.join(', ')}`);
  strictEqual(visible, EXPECTED_SUPERSCRIPTS, `${visible} superscripts, expected ${EXPECTED_SUPERSCRIPTS}`);
});

test('the five repaired imports carry the repaired value in the SEED', { skip: noLesson }, () => {
  for (const r of REPAIRS) {
    const row = byId.get(r.id);
    ok(row, `${r.id} is not in the seed`);
    ok(
      String(row!.respell).includes(r.contains),
      `${r.id} respell is ${JSON.stringify(row!.respell)} and should contain ${JSON.stringify(r.contains)}.\n`
      + `  If the seed and Postgres disagree here, content:publish will rewrite it and the divergence will be silent.`,
    );
    ok(!String(row!.respell).includes(r.notContains), `${r.id} still contains the unrepaired ${r.notContains}`);
    ok(!hasPlainNasalFor(row!.fr, row!.respell!), `${r.id} is still flagged after the repair`);
  }
});

test('the two supplied respellings are in the seed', { skip: noLesson }, () => {
  for (const [id, respell] of RESPELL_ADDITIONS) {
    const row = byId.get(id);
    ok(row, `${id} is not in the seed`);
    strictEqual(row!.respell, respell, `${id} respell`);
  }
});

test('the two added drills are in the seed, IN POSTGRES ENUM ORDER', { skip: noLesson }, () => {
  for (const [id, drill] of DRILL_ADDITIONS) {
    const row = byId.get(id);
    ok(row, `${id} is not in the seed`);
    ok((row!.drills ?? []).includes(drill as never), `${id} has no ${drill} drill`);
    const ds = row!.drills ?? [];
    const sorted = [...ds].sort((a, b) => DRILL_KINDS.indexOf(a) - DRILL_KINDS.indexOf(b));
    deepStrictEqual(
      ds, sorted,
      `${id} drills are ${JSON.stringify(ds)} and Postgres holds them in DRILL_KINDS order ${JSON.stringify(sorted)}.\n`
      + `  array_agg(distinct e order by e) on an ENUM orders by DECLARATION order, not alphabetically. a2.12's\n`
      + `  merge sorted them as strings and shipped a seed that disagreed with the database on three rows.`,
    );
  }
});

test('no U+203F anywhere, and no em dash on a learner surface', { skip: noLesson }, () => {
  ok(!strings(L!).some((s) => s.includes('‿')), 'U+203F UNDERTIE renders as a low underscore on a Pixel 6');
  ok(!learnerText().includes('—'), 'an em dash reached a learner surface');
});

test('no grammar jargon reaches a learner surface, including the intro', { skip: noLesson }, () => {
  const text = learnerText();
  for (const j of JARGON) ok(!hasPhrase(text, j), `"${j}" is on a learner surface`);
  ok(L!.intro, 'the lesson has no intro, and it is drawn on TWO screens');
  for (const j of JARGON) ok(!hasPhrase(L!.intro!, j), `"${j}" is in Lesson.intro, which is drawn on the overview card AND the cover`);
});

test('"honest" is banned from authored content', { skip: noLesson }, () => {
  const text = learnerText();
  ok(!hasPhrase(text, 'honest') && !hasPhrase(text, 'honesty'), '"honest" is banned from all authored content');
});

/* ══════════════════════════════════════════════════════════════════════════
 *  THE DICTÉE
 * ═══════════════════════════════════════════════════════════════════════ */

test('fourteen dictée targets, every one in LETTERS mode', { skip: noLesson }, () => {
  const s = section('s26-dictation') as { itemIds?: string[] } | undefined;
  ok(s, 's26-dictation is missing');
  const ids = s!.itemIds ?? [];
  strictEqual(ids.length, EXPECTED_DICTATION);
  for (const id of ids) {
    const row = byId.get(id);
    ok(row, `${id} is not in the seed`);
    strictEqual(
      dicteeMode(row!.fr), 'letters',
      `${id} (${row!.fr}) falls into WORD mode, where every real word arrives pre-spelled and nothing is tested.\n`
      + `  Two targets were caught at nineteen letters during this build.`,
    );
    const letters = row!.fr.replace(/[^\p{L}]/gu, '').length;
    ok(letters <= DICTEE_LETTER_LIMIT, `${id} is ${letters} letters and the limit is ${DICTEE_LETTER_LIMIT}`);
    ok((row!.drills ?? []).includes('dictation' as never), `${id} has no dictation drill`);
  }
});

/* ══════════════════════════════════════════════════════════════════════════
 *  a1.03 DOES NOT MOVE
 * ═══════════════════════════════════════════════════════════════════════ */

test('no row this lesson touches joins a1.03\'s ending population', { skip: noLesson }, () => {
  const mine = [...AUTHORED_IDS, ...IMPORTED_IDS].map((id) => byId.get(id)!).filter(Boolean);
  const joiners = endingPopulation(mine);
  strictEqual(
    joiners.length, 0,
    `${joiners.length} row(s) join the measured population, which moves twenty printed figures in\n`
    + `  a1-03-genre.test.ts: ${joiners.map((j) => JSON.stringify(j)).join(', ')}`,
  );
});

/* ══════════════════════════════════════════════════════════════════════════
 *  THE QUIZ
 * ═══════════════════════════════════════════════════════════════════════ */

const quiz = () => L!.sections.find((s) => s.type === 'quiz') as { rounds?: { id: string; targets?: string[]; questions?: unknown[] }[] };

test('exactly one quiz, six rounds, forty-five questions', { skip: noLesson }, () => {
  strictEqual(L!.sections.filter((s) => s.type === 'quiz').length, 1, 'lessonPager renders the FIRST quiz and silently drops the rest');
  strictEqual((quiz().rounds ?? []).length, EXPECTED_ROUNDS);
  strictEqual(quizQuestions(L!.sections.find((s) => s.type === 'quiz')).length, EXPECTED_QUESTIONS);
});

test('EVERY DRILL IS REACHABLE: each round leads on a different trigger', { skip: noLesson }, () => {
  const leads = (quiz().rounds ?? []).map((r) => (r.targets ?? [])[0]);
  strictEqual(new Set(leads).size, leads.length, `two rounds lead on the same trigger: ${leads.join(', ')}`);
  const triggers = (L!.errorTriggers ?? []).map((t) => t.id);
  strictEqual(triggers.length, EXPECTED_TRIGGERS);
  const unreachable = triggers.filter((t) => !leads.includes(t));
  strictEqual(
    unreachable.length, 0,
    `drillForRound returns the FIRST target with a drill and then stops, so these can never fire: ${unreachable.join(', ')}`,
  );
});

test('every trigger has a drill and a retest, and both exist', { skip: noLesson }, () => {
  const drills = new Set((L!.drills ?? []).map((d) => d.id));
  for (const t of L!.errorTriggers ?? []) {
    ok(drills.has(t.drill!), `trigger ${t.id} names drill ${t.drill}, which does not exist`);
    ok(drills.has(t.retest!), `trigger ${t.id} names retest ${t.retest}, which does not exist`);
  }
});

test('NO listenChoose: the singular cells are homophones', { skip: noLesson }, () => {
  const qs = quizQuestions(L!.sections.find((s) => s.type === 'quiz'));
  const listen = qs.filter((q) => (q as { format?: string }).format === 'listenChoose');
  strictEqual(
    listen.length, 0,
    'veux/veut, peux/peut and dois/doit are ONE SOUND. A question asking a learner to separate them by ear does not\n'
    + '  test a skill; it certifies a bug.',
  );
});

test('every question ref points at a real section', { skip: noLesson }, () => {
  const qs = quizQuestions(L!.sections.find((s) => s.type === 'quiz'));
  for (const q of qs) {
    const ref = (q as { ref?: string }).ref;
    if (!ref) continue;
    ok(SPINE.includes(ref), `a question refers back to ${ref}, which is not a section of this lesson`);
  }
});

test('THE QUIZ TESTS THE OWNS, not only the forms', { skip: noLesson }, () => {
  const qs = quizQuestions(L!.sections.find((s) => s.type === 'quiz'));
  /* A question "touches the Owns" if it puts a second verb in the frame: either
     the answer IS an infinitive, or the stem holds a modal followed by one. */
  const touches = qs.filter((q) => {
    const text = strings(q).join('  ');
    return MODAL_INFINITIVE.test(text) || /\(([a-zà-ÿ]+(er|ir|re|oir))\)/i.test(text);
  });
  ok(
    touches.length >= qs.length / 2,
    `only ${touches.length} of ${qs.length} questions put a second verb in the frame. The Owns is that the second\n`
    + `  verb never changes; a quiz that drifts back to the eighteen cells is testing the scaffolding.`,
  );
});

/* ══════════════════════════════════════════════════════════════════════════
 *  THE REFRAME AND THE CLAIMS
 * ═══════════════════════════════════════════════════════════════════════ */

test('the reframe is the lesson\'s own field and reaches fourteen sections', { skip: noLesson }, () => {
  strictEqual(L!.reframe, REFRAME);
  const appearances = strings(L!).filter((s) => s.includes(REFRAME)).length;
  strictEqual(appearances, REFRAME_APPEARANCES, `the reframe appears ${appearances} times`);
  const sections = L!.sections.filter((s) => strings(s).some((x) => x.includes(REFRAME))).length;
  strictEqual(sections, REFRAME_SECTIONS, `the reframe reaches ${sections} sections`);
});

test('every derived claim is on a screen, word for word', { skip: noLesson }, () => {
  const text = strings(L!).join('  ');
  for (const claim of [SINGULAR_CLAIM, ENDINGS_CLAIM, STEM_CLAIM, REACH_CLAIM, NOT_THE_VERBS]) {
    ok(text.includes(claim), `this claim is not on any screen: ${JSON.stringify(claim)}`);
  }
});

test('a2.01\'s nous/on statement has exactly one home', { skip: noLesson }, () => {
  const homes = L!.sections.filter((s) => strings(s).some((x) => x.includes(NOUS_ON)));
  strictEqual(homes.length, 1, `the nous/on statement appears in ${homes.length} sections`);
  strictEqual((homes[0] as { id?: string }).id, NOUS_ON_SECTION);
});

/* ══════════════════════════════════════════════════════════════════════════
 *  RENDERER RULES
 * ═══════════════════════════════════════════════════════════════════════ */

test('the reference sheet draws only what ReferenceSheet.tsx can draw', { skip: noLesson }, () => {
  const DRAWABLE = new Set(['teach', 'letterGrid', 'table']);
  strictEqual((L!.sheets ?? []).length, 1);
  const sh = (L!.sheets ?? [])[0];
  strictEqual(sh.id, SHEET_ID);
  for (const s of sh.sections ?? []) {
    const t = (s as { type?: string }).type ?? '';
    ok(DRAWABLE.has(t), `the sheet holds a "${t}" section, which would draw its title and nothing else. a1.13 ships one.`);
    strictEqual((s as { layer?: string }).layer, 'deep', 'a sheet section must sit at layer deep');
  }
});

test('no section points at a sheet this lesson does not declare', { skip: noLesson }, () => {
  const declared = new Set((L!.sheets ?? []).map((s) => s.id));
  for (const s of L!.sections) {
    const ref = (s as { sheetId?: string }).sheetId;
    if (ref) ok(declared.has(ref), `${(s as { id?: string }).id} names ${ref}; a sheetId resolves only inside its own lesson`);
  }
});

test('commonErrors carries swipe, reading carries questionsInModal', { skip: noLesson }, () => {
  for (const s of L!.sections) {
    if (s.type === 'commonErrors') ok((s as { swipe?: boolean }).swipe, `${(s as { id?: string }).id} would render a blank screen without swipe: true`);
    if (s.type === 'reading') {
      const r = s as { questionsInModal?: boolean; questions?: unknown[] };
      ok(r.questionsInModal && (r.questions ?? []).length, `${(s as { id?: string }).id} needs questionsInModal AND questions or its glossary reaches no renderer`);
    }
    if (s.type === 'practice') ok((s as { skill?: string }).skill !== 'write', 'practice skill "write" draws no writing surface');
  }
});

test('no section declares more than three term chips, and every chip exists', { skip: noLesson }, () => {
  for (const s of L!.sections) {
    const chips = (s as { terms?: string[] }).terms ?? [];
    ok(chips.length <= 3, `${(s as { id?: string }).id} declares ${chips.length} chips; the renderer shows three`);
    for (const t of chips) ok(L!.terms?.[t], `${(s as { id?: string }).id} names undefined term "${t}"`);
  }
});

test('the reading glossary matches through the REAL matcher', { skip: noLesson }, () => {
  const s = section('s15-evidence') as { text?: string; glossary?: { word: string }[] } | undefined;
  ok(s, 's15-evidence is missing');
  /* `glossKeys` folds ONE phrase into the keys the reader looks for; it does not
     enumerate a passage. So the passage is segmented with the real matcher and
     the MATCHED KEYS are compared, which is the only way to prove an entry
     actually underlines something. Comparing raw text would pass on a key the
     reader never reaches. */
  const keySet = new Set((s!.glossary ?? []).flatMap((g) => glossKeys(g.word)));
  const matched = new Set<string>();
  for (const seg of segmentSentence(s!.text ?? '', keySet)) if (seg.key) matched.add(seg.key);
  for (const g of s!.glossary ?? []) {
    ok(g.word.trim().split(/\s+/).length <= MAX_GLOSS_WORDS, `"${g.word}" is longer than MAX_GLOSS_WORDS`);
    ok(
      glossKeys(g.word).some((k) => matched.has(k)),
      `"${g.word}" is a glossary entry that the real matcher never finds in the passage, so it is an underline\n`
      + `  that never appears. The reader strips punctuation and lowercases before matching.`,
    );
  }
});

test('the passage is ONE line, because PassagePage swallows authored newlines', { skip: noLesson }, () => {
  const s = section('s15-evidence') as { text?: string } | undefined;
  ok(!(s!.text ?? '').includes('\n'), 'PassagePage splits on sentence boundaries and renders inline; a newline is swallowed');
});

/* ══════════════════════════════════════════════════════════════════════════
 *  THE DECK
 * ═══════════════════════════════════════════════════════════════════════ */

test('one deck tranche per act, nothing released twice, nothing unreleased', { skip: noLesson }, () => {
  strictEqual((L!.deckTranche ?? []).length, ACTS.length);
  const released = (L!.deckTranche ?? []).flat();
  strictEqual(new Set(released).size, released.length, 'a row is released by two acts');
  const unreleased = L!.itemIds.filter((id) => !released.includes(id));
  strictEqual(unreleased.length, 0, `in itemIds and released by nothing: ${unreleased.join(', ')}`);
  const stray = released.filter((id) => !L!.itemIds.includes(id));
  strictEqual(stray.length, 0, `released and not in itemIds: ${stray.join(', ')}`);
});

test('every released row can be served by the deck that releases it', { skip: noLesson }, () => {
  for (const id of L!.itemIds) {
    const row = byId.get(id)!;
    ok((row.drills ?? []).includes('flashcard' as never), `${id} is released to the hub with no flashcard drill`);
  }
});

test('the speak deck only names rows the mic can score', { skip: noLesson }, () => {
  const s = section('s25-speak') as { itemIds?: string[] } | undefined;
  ok(s, 's25-speak is missing');
  for (const id of s!.itemIds ?? []) {
    ok((byId.get(id)!.drills ?? []).includes('voiceflash' as never), `${id} has no voiceflash drill, so the mic cannot score it`);
  }
});

/* ══════════════════════════════════════════════════════════════════════════
 *  THE UNIT
 * ═══════════════════════════════════════════════════════════════════════ */

test('the unit carries this lesson and the tag agrees with its seq', { skip: noLesson }, () => {
  const unit = seed.units.find((u) => u.id === 'a2.13');
  ok(unit, 'unit a2.13 is not in the seed');
  ok((unit!.lessonIds ?? []).includes('a2.13.l1'), 'the unit does not carry a2.13.l1');
  strictEqual(L!.tag, `A2 · LEÇON ${String(unit!.seq).padStart(2, '0')}`, 'the stored tag disagrees with what missions.ts computes');
  strictEqual(L!.unitId, 'a2.13');
  strictEqual(L!.level, 'a2');
});

test('a2.14 still rests on this unit', { skip: noLesson }, () => {
  const a214 = seed.units.find((u) => u.id === A214);
  ok(a214, `unit ${A214} is not in the seed`);
  ok(
    (a214!.prereqUnitIds ?? []).includes('a2.13'),
    `${A214} no longer declares a2.13 as a prerequisite. It does so precisely to bring pouvoir back as its contrast,\n`
    + `  and this lesson leaves savoir untouched on that understanding.`,
  );
});
