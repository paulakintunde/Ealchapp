// a2.21.l1 « Le passé composé avec être »: the assertions that keep this lesson
// true.
//
// Modelled on a2-20-participes.test.ts. Everything here runs the REAL app
// function rather than a copy: an earlier a1.01 test inlined its own glossary
// lookup, copied the version that was already broken, and passed while the
// feature was dead.
//
// THIS FILE READS seed.json AND NOTHING ELSE. It does not import the corpus, the
// terms or the lesson source, because a test that imports the same constant the
// content imports is comparing the content to itself. Every figure below is
// written out by hand, so a change in the source has to be reflected here on
// purpose. That also closes corrections §9's second hole outright: there is no
// `try { … } catch {}` around a source import here, so there is no state in
// which thirty assertions silently do not run.
//
// IT IS SCOPED TO ITS OWN ID BLOCK. Ledger §a2.16-1: a2.03's test filtered on a
// namespace prefix and meant "the rows a2.03 authored", and four of its tests
// went red the moment a2.16 landed in the same namespace. `fr.a2.verbes` holds
// 528 rows belonging to twelve lessons. The duplicate-`fr` check is deliberately
// NOT scoped: flashhub-coverage counts two rows sharing an `fr` in one theme as
// one card served twice, whoever authored them.
//
// ── What this file is actually guarding ────────────────────────────────────
//
//   THE FOUR AGREEMENT FORMS ON ONE SCREEN, asserted FORM BY FORM, with the
//   statement that they are one sound. The brief asks for exactly this.
//   a2.01's REFRAME, VERBATIM. The bookend doctrine §B.7 asks for, seventeen
//   lessons apart. Asserted as a LITERAL: a paraphrase must go red, and this is
//   the assertion most worth having in the file.
//   AN avoir SECOND WORD AND AN être SECOND WORD IN ONE SECTION, one agreeing
//   and one not, as PAIRS. A pair guard satisfied by one thing is not a pair.
//   a2.05's NEGATION WORDING, which is a2.19's, quoted verbatim through two
//   lessons. All three strings are the same string.
//   THE REAL PATTERN TAUGHT, NOT ONLY THE MNEMONIC, and the mnemonic present.
//   THE TRANSITIVE DECISION, asserted whichever way it went: it is receptive
//   only, and no transitive use with avoir appears on any production surface.
//   NO REFLEXIVE VERB ANYWHERE, reserving a2.22 and a2.23.
//   a2.11's descendre LOOP, closed FORWARD, because that lesson names neither
//   auxiliary and there is no back-reference to answer.
//   EVERY DICTÉE ITEM CARRYING THE DICTATION DRILL, and every one in LETTERS
//   mode through the real `dicteeMode`.
//   THE ONE AUDIBLE FEMININE, and the claim that number is still silent.
//   ALL FOUR CELLS OF ALL FIFTEEN VERBS STAYING DISTINCT under the real `fold`
//   and `normalizeFr`, which is what makes the whole Owns typeable.
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
import { matchesAccept, fold } from './answer.logic.ts';
import { normalizeFr } from '../utils/score.ts';
import { namesUnitLabel } from './unit-label.ts';

const here = dirname(fileURLToPath(import.meta.url));
const seed = JSON.parse(readFileSync(resolve(here, 'seed.json'), 'utf8')) as {
  version: number; items: Item[]; lessons: Lesson[];
  units: { id: string; title?: string; sub?: string; canDo?: string; seq?: string | number; lessonIds?: string[]; prereqUnitIds?: string[] }[];
};

const L = seed.lessons.find((l) => l.id === 'a2.21.l1');
const noLesson = !L;
const byIdItem = new Map(seed.items.map((i) => [i.id, i] as const));

/** THE BLOCK, NOT THE PREFIX. Eleven other lessons own `fr.a2.verbes.001..650`. */
const MY_BLOCK = { from: 651, to: 720 };
const isMine = (id: string) => {
  const m = /^fr\.a2\.verbes\.(\d{3})$/.exec(id);
  if (!m) return false;
  const n = Number(m[1]);
  return n >= MY_BLOCK.from && n <= MY_BLOCK.to;
};
const myRows = () => seed.items.filter((i) => isMine(i.id));

/** a2.20's block, so this lesson's rows can be proved to be outside it.
 *  A RESERVATION ASSERTION MUST NOT SAY "AND IT IS EMPTY" (ledger, a2.20 §0):
 *  a2.05's said so and went red the moment a2.20 filled it. */
const A220_BLOCK = { from: 591, to: 650 };
const isA220 = (id: string) => {
  const m = /^fr\.a2\.verbes\.(\d{3})$/.exec(id);
  if (!m) return false;
  const n = Number(m[1]);
  return n >= A220_BLOCK.from && n <= A220_BLOCK.to;
};

const THEME = 'verbes';
const PASSE_UNIT = 'a2.05';
const IRREGULAR_UNIT = 'a2.20';
const ER_UNIT = 'a2.01';
const ADJ_UNIT = 'a2.03';
const RE_UNIT = 'a2.11';
const IR_UNIT = 'a2.10';
const FAMILY_UNIT = 'a2.15';
const FUTUR_UNIT = 'a2.19';
const REFLEXIVE_UNIT = 'a2.22';
const REFLEXIVE_PAST_UNIT = 'a2.23';

/* ─── THE LITERALS ─────────────────────────────────────────────────────────
 *
 * Every one of these is a string this lesson quotes from a neighbour, written
 * out by hand here so a paraphrase on either side goes red. The brief asks for
 * the a2.01 one by name and says a paraphrase must fail.                      */

const A201_REFRAME = 'Four of the six forms sound the same, so the pronoun carries the person.';
const A203_REFRAME = 'The plain form tells you the other three.';
const A205_REFRAME = 'One verb, two words, and the small ones go in between.';
const A219_NEGATION = 'Wrap the verb that changed, not the one carrying the meaning.';
const A215_REFRAME = 'Cover the front of the verb. Build what is left.';
const A220_REFRAME = 'Do not build these. Reach for the group it is in.';

const REFRAME = 'After être, the second word ends like a describing word.';
const REFRAME_COUNT = 8;
const AGREEMENT_RULE = 'Add nothing for a man on his own, e for a woman, s for more than one, and es for more than one woman.';
const MNEMONIC = 'DR MRS VANDERTRAMP';

/* ─── THE SHAPE ────────────────────────────────────────────────────────────*/

const EXPECTED_SECTIONS = 25;
const EXPECTED_ACTS = 6;
const EXPECTED_QUESTIONS = 36;
const EXPECTED_AUTHORED = 46;
const EXPECTED_TERMS = 8;
const EXPECTED_TRIGGERS = 6;
const EXPECTED_DRILLS = 12;
const EXPECTED_TRAP_DRILLS = 2;
const HINT_MAX = 60;
const TERM_ROW_MAX = 37;

const SCENE = 's01-scene';
const HALVES = 's03-twohalves';
const RECAP = 's04-recap';
const PATTERN = 's05-pattern';
const CRUTCH = 's06-crutch';
const FOURFORMS = 's07-fourforms';
const BOOKEND = 's08-bookend';
const BORROWED = 's09-borrowed';
const PERSONS = 's10-persons';
const CONTRAST = 's11-contrast';
const AUDIBLE_S = 's12-audible';
const UNSEEN = 's13-unseen';
const BOUNDARY = 's14-boundary';
const WHICHFIRST = 's15-whichfirst';
const OBJECT = 's16-object';
const NOTPRESENT = 's17-notpresent';
const ERRORS = 's18-errors';
const TALK = 's19-talk';
const DICTATION = 's20-dictation';
const SPEAK = 's21-speak';
const REVIEW = 's22-review';
const QUIZ = 's24-quiz';
const ROUNDUP = 's25-roundup';

/** THE OWNS against the list. Doctrine §B.5. */
const OWNS = [FOURFORMS, BOOKEND, BORROWED, PERSONS, CONTRAST, AUDIBLE_S, UNSEEN, BOUNDARY];
const WHICH_VERBS = [RECAP, PATTERN, CRUTCH];

/** The fifteen, written out. Not derived: a count passes when one is dropped and
 *  another added, and this list is the SHAPE of the lesson. */
const FIFTEEN: readonly [string, string][] = [
  ['aller', 'allé'], ['venir', 'venu'], ['arriver', 'arrivé'], ['partir', 'parti'],
  ['passer', 'passé'], ['entrer', 'entré'], ['sortir', 'sorti'], ['rentrer', 'rentré'],
  ['retourner', 'retourné'], ['monter', 'monté'], ['descendre', 'descendu'],
  ['tomber', 'tombé'], ['rester', 'resté'], ['naître', 'né'], ['mourir', 'mort'],
];
const cellsOf = (past: string): [string, string, string, string] =>
  (past === 'mort' ? ['mort', 'morte', 'morts', 'mortes'] : [past, `${past}e`, `${past}s`, `${past}es`]);

/** The four cells of aller, which are the required layout. */
const FOUR_CELLS = ['allé', 'allée', 'allés', 'allées'];

/** The one verb whose feminine is audible, and the two published respellings the
 *  claim was read off. */
const AUDIBLE = { verb: 'mourir', m: 'mort', f: 'morte', mp: 'morts', fp: 'mortes' };

/** Reflexives, which a2.22 and a2.23 own and which may not appear here. */
const REFLEXIVE_VERBS = [
  'se lever', 'se coucher', 'se laver', "s'habiller", 'se réveiller', 'se promener',
  "s'appeler", 'se souvenir', "s'asseoir", 'se dépêcher', 'se reposer',
];
const REFLEXIVE_MARKERS = [
  'je me suis', "tu t'es", "il s'est", "elle s'est", "on s'est",
  'nous nous sommes', 'vous vous êtes', 'ils se sont', 'elles se sont',
];

/** The six with a transitive twin, and the three the corpus never uses that way. */
const TRANSITIVE_VERBS = ['sortir', 'monter', 'descendre', 'passer', 'rentrer', 'retourner'];
const ZERO_TRANSITIVE_EVIDENCE = ['descendre', 'rentrer', 'retourner'];

/** The two transitive sentences with avoir. No production surface may carry one. */
const TRANSITIVE_AVOIR = ['J’ai sorti la poubelle.', 'Elle a passé un examen.'];

const PRODUCTION_SECTIONS = [DICTATION, SPEAK, QUIZ, UNSEEN, PERSONS, FOURFORMS];
const WRONG_FORM_SECTIONS = [SCENE, ERRORS, WHICHFIRST, NOTPRESENT, OBJECT, QUIZ, CONTRAST, FOURFORMS];

/* ─── Walks ────────────────────────────────────────────────────────────────*/

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
const isId = (s: string): boolean => /^fr\.[a-z0-9]+\.[a-z0-9-]+\.\d+$/i.test(s);
function display(v: unknown, out: string[] = []): string[] {
  if (typeof v === 'string') { if (!isId(v)) out.push(v); }
  else if (Array.isArray(v)) for (const x of v) display(x, out);
  else if (v && typeof v === 'object') {
    for (const [k, x] of Object.entries(v)) if (!MACHINE_KEYS.has(k)) display(x, out);
  }
  return out;
}
function hasPhrase(hay: string, needle: string): boolean {
  const isWordL = (c: string) => /[\p{L}\p{N}-]/u.test(c);
  const isWordR = (c: string) => /[\p{L}\p{N}'’-]/u.test(c);
  const h = hay.toLowerCase();
  const n = needle.toLowerCase();
  let i = 0;
  while ((i = h.indexOf(n, i)) !== -1) {
    if (!isWordL(i === 0 ? '' : h[i - 1]!) && !isWordR(h[i + n.length] ?? '')) return true;
    i += 1;
  }
  return false;
}
/** A LEARNER SURFACE NAMES A LESSON BY ITS LABEL, NOT BY ITS ID. Resolved
 *  through the shipped `unit.seq`, never by slicing the id: 31 of 35 A2 units
 *  disagree with their own id number. It does not also accept the raw id, or it
 *  would pass on exactly the thing this change removed. */
const namesUnit = (hay: string, id: string): boolean => namesUnitLabel(hay, id);
const countPhrase = (hay: string, needle: string): number => {
  let n = 0; let i = 0;
  const h = hay.toLowerCase(); const q = needle.toLowerCase();
  while ((i = h.indexOf(q, i)) !== -1) { n += 1; i += q.length; }
  return n;
};

const sec = (id: string) => (L?.sections ?? []).find((s) => (s as { id?: string }).id === id);
const secText = (id: string) => strings(sec(id)).join('\n');
const learnerAll = () => [
  ...strings(L?.sections ?? []), ...strings(L?.sheets ?? []), ...strings(L?.terms ?? {}),
  L?.intro ?? '', ...strings(L?.overview ?? {}), ...strings(L?.acts ?? []),
  ...strings(L?.drills ?? []),
].join('\n');

/* ══════════════════════════════════════════════════════════════════════════
 *  1. THE LESSON IS THERE, AND SO IS ITS UNIT
 * ═══════════════════════════════════════════════════════════════════════ */

test('a2.21.l1 is in the seed', () => {
  ok(L, 'a2.21.l1 is not in seed.json. Run the batch, then the merge.');
});

test('the unit is a2.21 at seq 18, and it names this lesson', { skip: noLesson }, () => {
  const u = seed.units.find((x) => x.id === 'a2.21');
  ok(u, 'a2.21 is not in the seed units');
  strictEqual(String(u!.seq), '18');
  strictEqual(u!.title, 'The Passé Composé with Être');
  strictEqual(u!.sub, 'Le passé composé avec être');
  strictEqual(u!.canDo, 'Can pick être as the auxiliary where French requires it and agree the participle');
  deepStrictEqual(u!.prereqUnitIds, [PASSE_UNIT]);
  ok((u!.lessonIds ?? []).includes('a2.21.l1'), 'the unit does not name a2.21.l1');
});

test('a2.23 declares this lesson as a prerequisite and inherits its rule', { skip: noLesson }, () => {
  const u = seed.units.find((x) => x.id === REFLEXIVE_PAST_UNIT);
  ok(u, 'a2.23 is not in the seed units');
  ok((u!.prereqUnitIds ?? []).includes('a2.21'), 'a2.23 does not declare a2.21 as a prerequisite');
});

test('the lesson passes validateLesson and validateDensity', { skip: noLesson }, () => {
  const issues = validateLesson(L!);
  strictEqual(issues.length, 0, formatIssues(issues));
  const density = validateDensity(L!);
  strictEqual(density.length, 0, formatDensity(density));
});

test('the shape: 25 sections, 6 acts, 36 questions, 8 terms', { skip: noLesson }, () => {
  strictEqual(L!.sections.length, EXPECTED_SECTIONS);
  strictEqual((L!.acts ?? []).length, EXPECTED_ACTS);
  strictEqual(quizQuestions(L!.sections.find((s) => s.type === 'quiz')!).length, EXPECTED_QUESTIONS);
  strictEqual(Object.keys(L!.terms ?? {}).length, EXPECTED_TERMS);
  strictEqual((L!.errorTriggers ?? []).length, EXPECTED_TRIGGERS);
  strictEqual((L!.drills ?? []).length, EXPECTED_DRILLS);
  strictEqual(L!.sections.filter((s) => s.type === 'trapDrill').length, EXPECTED_TRAP_DRILLS);
});

test('one quiz section, because a second is silently never rendered', { skip: noLesson }, () => {
  strictEqual(L!.sections.filter((s) => s.type === 'quiz').length, 1);
});

test('the spine is in order and every section is in exactly one act', { skip: noLesson }, () => {
  const ids = L!.sections.map((s) => (s as { id: string }).id);
  deepStrictEqual(ids, [
    SCENE, 's02-goals', HALVES, RECAP, PATTERN, CRUTCH, FOURFORMS, BOOKEND,
    BORROWED, PERSONS, CONTRAST, AUDIBLE_S, UNSEEN, BOUNDARY, WHICHFIRST,
    OBJECT, NOTPRESENT, ERRORS, TALK, DICTATION, SPEAK, REVIEW, 's23-progress',
    QUIZ, ROUNDUP,
  ]);
  const claimed = (L!.acts ?? []).flatMap((a) => a.sections);
  strictEqual(new Set(claimed).size, claimed.length, 'two acts claim one section');
  deepStrictEqual([...claimed].sort(), [...ids].sort());
});

/* ══════════════════════════════════════════════════════════════════════════
 *  2. THE OWNS IS THE HEAVIEST ACT
 * ═══════════════════════════════════════════════════════════════════════ */

test('the Owns has eight sections against the list\'s three', { skip: noLesson }, () => {
  const act3 = (L!.acts ?? []).find((a) => a.id === 'act3');
  ok(act3, 'act3 is missing');
  deepStrictEqual([...act3!.sections], OWNS);
  const act2 = (L!.acts ?? []).find((a) => a.id === 'act2');
  deepStrictEqual([...act2!.sections], WHICH_VERBS);
  ok(OWNS.length > WHICH_VERBS.length,
    'doctrine §B.5: if the paradigm gets more missions than the Owns, the wrong lesson got built');
});

/* ══════════════════════════════════════════════════════════════════════════
 *  3. THE FOUR AGREEMENT FORMS, ON ONE SCREEN, FORM BY FORM
 *
 *  THE BRIEF ASKS FOR EXACTLY THIS AND SAYS THE TEST MUST ASSERT IT.
 * ═══════════════════════════════════════════════════════════════════════ */

test('all four forms of aller are on s07-fourforms, asserted one at a time', { skip: noLesson }, () => {
  const text = secText(FOURFORMS);
  for (const cell of FOUR_CELLS) {
    ok(hasPhrase(text, cell), `${FOURFORMS} does not name « ${cell} ». All four belong on one screen.`);
  }
});

test('and that screen says they are one sound', { skip: noLesson }, () => {
  const text = secText(FOURFORMS);
  ok(/one sound|identical|nothing at all/i.test(text),
    'the four spellings are shown and never called one sound. The layout without the claim is a table.');
});

test('all four respell their second word identically, which is the evidence', { skip: noLesson }, () => {
  const rows = [651, 652, 653, 654].map((n) => byIdItem.get(`fr.a2.verbes.${n}`));
  for (const r of rows) ok(r, 'one of the four cell rows is not in the seed');
  const tails = rows.map((r) => r!.respell!.split(' ').pop());
  strictEqual(new Set(tails).size, 1,
    `the four cells respell their second word as ${tails.join(', ')} and the screen claims they are one sound`);
});

test('the four cells differ only in their first two words', { skip: noLesson }, () => {
  const frs = [651, 652, 653, 654].map((n) => byIdItem.get(`fr.a2.verbes.${n}`)!.fr);
  deepStrictEqual(frs, ['Il est allé.', 'Elle est allée.', 'Ils sont allés.', 'Elles sont allées.']);
});

/* ══════════════════════════════════════════════════════════════════════════
 *  4. THE BOOKEND. a2.01's REFRAME, VERBATIM.
 *
 *  Doctrine §B.7, seventeen lessons apart. THE BRIEF SAYS A PARAPHRASE MUST GO
 *  RED and calls this the assertion most worth having.
 * ═══════════════════════════════════════════════════════════════════════ */

test('a2.01 shipped the reframe this lesson quotes', { skip: noLesson }, () => {
  const a201 = seed.lessons.find((l) => l.id === 'a2.01.l1');
  ok(a201, 'a2.01.l1 is not in the seed and this lesson quotes it');
  strictEqual(a201!.reframe, A201_REFRAME,
    'a2.01 has changed its reframe. Quote what it actually shipped.');
});

test('s08-bookend carries a2.01\'s reframe VERBATIM', { skip: noLesson }, () => {
  ok(secText(BOOKEND).includes(A201_REFRAME),
    `s08-bookend does not carry the literal:\n  « ${A201_REFRAME} »\nA paraphrase must go red.`);
});

test('and it names a2.01 and says how far apart the two lessons are', { skip: noLesson }, () => {
  const text = secText(BOOKEND);
  ok(namesUnitLabel(text, 'a2.01'), 's08-bookend quotes a2.01 and does not name it');
  ok(/seventeen/i.test(text), 's08-bookend does not say how far apart they are, which is the whole bookend');
});

/* ══════════════════════════════════════════════════════════════════════════
 *  5. THE OTHER THREE QUOTES, AS LITERALS
 * ═══════════════════════════════════════════════════════════════════════ */

test('a2.03\'s rule is borrowed verbatim and a2.03 is credited', { skip: noLesson }, () => {
  const a203 = seed.lessons.find((l) => l.id === 'a2.03.l1');
  ok(a203, 'a2.03.l1 is not in the seed');
  strictEqual(a203!.reframe, A203_REFRAME, 'a2.03 has changed its reframe');
  ok(learnerAll().includes(A203_REFRAME), 'a2.03\'s reframe appears nowhere and the endings are borrowed');
  ok(namesUnitLabel(learnerAll(), 'a2.03'), 'a2.03 is never named');
});

test('THE NEGATION STRING IS IDENTICAL ACROSS a2.19, a2.05 AND THIS LESSON', { skip: noLesson }, () => {
  const a219 = seed.lessons.find((l) => l.id === 'a2.19.l1');
  const a205 = seed.lessons.find((l) => l.id === 'a2.05.l1');
  ok(a219 && a205, 'a2.19.l1 or a2.05.l1 is missing from the seed');
  strictEqual(a219!.reframe, A219_NEGATION, 'a2.19 has changed the rule this lesson quotes');
  const a205Text = strings(a205!.sections).join('\n');
  ok(a205Text.includes(A219_NEGATION), 'a2.05 no longer carries a2.19\'s wording');
  ok(learnerAll().includes(A219_NEGATION), 'a2.21 does not carry a2.19\'s wording');
});

test('a2.05\'s reframe is quoted and a2.05 is credited on the recap', { skip: noLesson }, () => {
  const a205 = seed.lessons.find((l) => l.id === 'a2.05.l1');
  strictEqual(a205!.reframe, A205_REFRAME, 'a2.05 has changed its reframe');
  ok(learnerAll().includes(A205_REFRAME), 'a2.05\'s reframe appears nowhere and this lesson stands on it');
  ok(namesUnitLabel(secText(RECAP), 'a2.05'), 's04-recap recaps a2.05 and does not name it');
});

test('a2.15\'s and a2.20\'s lines are quoted verbatim too', { skip: noLesson }, () => {
  const a215 = seed.lessons.find((l) => l.id === 'a2.15.l1');
  const a220 = seed.lessons.find((l) => l.id === 'a2.20.l1');
  ok(a215 && a220, 'a2.15.l1 or a2.20.l1 is missing from the seed');
  strictEqual(a215!.reframe, A215_REFRAME);
  strictEqual(a220!.reframe, A220_REFRAME);
  ok(learnerAll().includes(A215_REFRAME), 'a2.15\'s move is extended here and its line is not quoted');
  ok(learnerAll().includes(A220_REFRAME), 'a2.20 handed three forms forward and its line is not quoted');
});

test('every unit this lesson stands on or hands to is named by its lesson label', { skip: noLesson }, () => {
  const text = learnerAll();
  for (const id of [ER_UNIT, ADJ_UNIT, PASSE_UNIT, RE_UNIT, IR_UNIT, FAMILY_UNIT, FUTUR_UNIT, IRREGULAR_UNIT, REFLEXIVE_UNIT, REFLEXIVE_PAST_UNIT]) {
    ok(namesUnit(text, id), `${id} is never named on a learner surface`);
  }
});

test('the intro names NO unit id, because the cover is the first screen', { skip: noLesson }, () => {
  const intro = L!.intro ?? '';
  ok(intro.length > 0, 'the lesson has no intro');
  for (const id of ['a2.01', 'a2.03', 'a2.05', 'a2.10', 'a2.11', 'a2.15', 'a2.19', 'a2.20', 'a2.22', 'a2.23']) {
    ok(!namesUnit(intro, id), `the intro names ${id}, and a2.05 measured that a bare unit id on the cover has no referent yet`);
  }
});

/* ══════════════════════════════════════════════════════════════════════════
 *  6. THE CONTRAST WITH avoir: ONE AGREEING AND ONE NOT, IN ONE SECTION
 * ═══════════════════════════════════════════════════════════════════════ */

test('an avoir second word and an être second word sit in one section, as PAIRS', { skip: noLesson }, () => {
  const text = secText(CONTRAST);
  const pairs: [string, string][] = [
    ['Elle a mangé au restaurant.', 'Elle est allée au restaurant.'],
    ['Ils ont mangé au restaurant.', 'Ils sont allés au restaurant.'],
  ];
  for (const [av, et] of pairs) {
    ok(av !== et, 'a pair of one thing is not a pair');
    ok(text.includes(av), `s11-contrast does not carry the avoir half « ${av} »`);
    ok(text.includes(et), `s11-contrast does not carry the être half « ${et} »`);
  }
});

test('the avoir half really does not agree and the être half really does', { skip: noLesson }, () => {
  const av = byIdItem.get('fr.a2.verbes.661');
  const et = byIdItem.get('fr.a2.verbes.662');
  ok(av && et, 'the contrast rows are not in the seed');
  // NOT `\b`. It is ASCII-only in JavaScript, so `/\bmangé\b/` matches nothing:
  // the trailing é is not a word character, so there is no boundary after it.
  // Invariants §0, and this assertion walked straight into it on its first run.
  ok(hasPhrase(av!.fr, 'mangé') && !hasPhrase(av!.fr, 'mangée'), 'the avoir half has an ending on it');
  ok(hasPhrase(et!.fr, 'allée'), 'the être half has no ending on it');
});

/* ══════════════════════════════════════════════════════════════════════════
 *  7. NO ENDING AFTER avoir OUTSIDE THE SECTIONS THAT TEACH THE ERROR
 * ═══════════════════════════════════════════════════════════════════════ */

const AGREED_AFTER_AVOIR = new RegExp(
  '(?<![\\p{L}\\p{N}-])'
  + "(j'|n'|qu'il |qu'elle |il |elle |on |ils |elles |nous |vous |tu |je )"
  + '(ai|as|a|avons|avez|ont) +'
  + '(pas +|bien +|mal +|déjà +|encore +|toujours +|jamais +|beaucoup +|trop +|tout +)?'
  + '[\\p{L}]+(ée|ées|és)(?![\\p{L}\\p{N}\'’-])',
  'iu',
);

test('the avoir-agreement pattern fires on the error and not on correct French', () => {
  for (const s of ['Elle a mangée au marché.', "J'ai mangée.", 'Ils ont allés au marché.', "Elle n'a pas mangée."]) {
    ok(AGREED_AFTER_AVOIR.test(s), `the pattern does not fire on « ${s} »`);
  }
  for (const s of ['Elle a mangé au marché.', 'Elle est allée au marché.', 'Elles sont allées au bureau.',
    'You have already learned the ending, and it goes on after être.']) {
    ok(!AGREED_AFTER_AVOIR.test(s), `the pattern fires on « ${s} », which is correct`);
  }
});

test('nothing agrees after avoir outside the sections where the error is the content', { skip: noLesson }, () => {
  const offenders: string[] = [];
  for (const s of L!.sections) {
    const id = (s as { id: string }).id;
    if (WRONG_FORM_SECTIONS.includes(id)) continue;
    for (const t of strings(s)) if (AGREED_AFTER_AVOIR.test(t)) offenders.push(`${id}: ${t}`);
  }
  for (const t of [...strings(L!.sheets ?? []), ...strings(L!.terms ?? {}), L!.intro ?? '', ...strings(L!.drills ?? [])]) {
    if (AGREED_AFTER_AVOIR.test(t)) offenders.push(`outside the sections: ${t}`);
  }
  deepStrictEqual(offenders, []);
});

test('and no authored row agrees after avoir', { skip: noLesson }, () => {
  const bad = myRows().filter((r) => AGREED_AFTER_AVOIR.test(r.fr) && r.id !== 'fr.a2.verbes.682');
  deepStrictEqual(bad.map((r) => r.fr), []);
});

/* ══════════════════════════════════════════════════════════════════════════
 *  8. THE TRANSITIVE DECISION, ASSERTED WHICHEVER WAY IT WENT
 *
 *  It went receptive-only, so: it is NAMED, it is shown on ONE section, and no
 *  transitive use with avoir appears on any production surface. The brief asks
 *  for exactly this if the rule is deferred.
 * ═══════════════════════════════════════════════════════════════════════ */

test('the split is named, on one section, with both halves of both pairs', { skip: noLesson }, () => {
  const text = secText(OBJECT);
  for (const v of ['sortir', 'passer']) ok(hasPhrase(text, v), `s16-object does not name ${v}`);
  for (const pair of [
    ['Je suis sorti hier soir.', 'J’ai sorti la poubelle.'],
    ['Elle est passée devant la gare.', 'Elle a passé un examen.'],
  ]) {
    ok(pair[0] !== pair[1], 'a pair of one thing is not a pair');
    for (const s of pair) ok(text.includes(s), `s16-object does not carry « ${s} »`);
  }
});

test('NO transitive use with avoir appears on any production surface', { skip: noLesson }, () => {
  const offenders: string[] = [];
  for (const id of PRODUCTION_SECTIONS) {
    const text = secText(id);
    for (const f of TRANSITIVE_AVOIR) if (text.includes(f)) offenders.push(`${id}: ${f}`);
  }
  deepStrictEqual(offenders, [],
    'the decision is receptive-only and the canDo asks for être where French REQUIRES it');
});

test('the four transitive rows carry no dictation drill', { skip: noLesson }, () => {
  for (const n of [665, 666, 667, 668]) {
    const r = byIdItem.get(`fr.a2.verbes.${n}`);
    ok(r, `fr.a2.verbes.${n} is not in the seed`);
    ok(!(r!.drills ?? []).includes('dictation'),
      `fr.a2.verbes.${n} is a transitive row and a dictée line is a production surface`);
  }
});

test('a2.11\'s descendre loop is closed FORWARD, by its lesson label', { skip: noLesson }, () => {
  const text = secText(OBJECT);
  ok(hasPhrase(text, 'descendre'), 's16-object does not name descendre and a2.11 handed it forward');
  ok(namesUnitLabel(text, 'a2.11'), 's16-object owns descendre\'s split and does not name a2.11');
});

test('a2.11 names neither auxiliary, so there is no back-reference to answer', { skip: noLesson }, () => {
  const a211 = seed.lessons.find((l) => l.id === 'a2.11.l1');
  ok(a211, 'a2.11.l1 is not in the seed');
  const body = JSON.stringify(a211);
  ok(body.includes('descendre'), 'a2.11 no longer teaches descendre');
  ok(!namesUnitLabel(body, 'a2.21'),
    'a2.11 now names a2.21. The brief asked for the loop to be closed by BACK-reference and this build closed it forward because that lesson opened nothing; if it opens one now, close it both ways.');
});

test('the six transitive candidates are named and the three with no evidence are not drilled', { skip: noLesson }, () => {
  const text = learnerAll();
  for (const v of TRANSITIVE_VERBS) ok(hasPhrase(text, v), `the lesson never names ${v}`);
  for (const v of ZERO_TRANSITIVE_EVIDENCE) {
    for (const id of PRODUCTION_SECTIONS) {
      const t = secText(id);
      ok(!new RegExp(`\\b(ai|as|a|avons|avez|ont)\\s+${v.replace(/re$/, 'du')}`, 'i').test(t),
        `${id} asks for a transitive ${v}, which occurs zero times in the published corpus`);
    }
  }
});

/* ══════════════════════════════════════════════════════════════════════════
 *  9. NO REFLEXIVE, ANYWHERE. a2.22 AND a2.23 OWN THEM.
 * ═══════════════════════════════════════════════════════════════════════ */

test('no reflexive verb and no reflexive marker reaches a learner surface', { skip: noLesson }, () => {
  const offenders: string[] = [];
  const surfaces = [
    ...display(L!.sections), ...display(L!.sheets ?? []), ...display(L!.terms ?? {}),
    L!.intro ?? '', ...display(L!.drills ?? []),
  ];
  for (const s of surfaces) {
    for (const v of REFLEXIVE_VERBS) if (hasPhrase(s, v)) offenders.push(`${v} in « ${s} »`);
    for (const m of REFLEXIVE_MARKERS) if (s.toLowerCase().includes(m.toLowerCase())) offenders.push(`${m} in « ${s} »`);
  }
  deepStrictEqual(offenders.slice(0, 4), []);
});

test('and no authored row is one', { skip: noLesson }, () => {
  const bad = myRows().filter((r) =>
    REFLEXIVE_VERBS.some((v) => hasPhrase(r.fr, v))
    || REFLEXIVE_MARKERS.some((m) => r.fr.toLowerCase().includes(m.toLowerCase())));
  deepStrictEqual(bad.map((r) => r.id), []);
});

test('the boundary card names a2.22 and a2.23 by id', { skip: noLesson }, () => {
  const text = secText(BOUNDARY);
  ok(namesUnitLabel(text, 'a2.22'), 's14-boundary does not name a2.22');
  ok(namesUnitLabel(text, 'a2.23'), 's14-boundary does not name a2.23');
  ok(namesUnitLabel(text, 'a2.06'), 's14-boundary does not name a2.06, which owns agreement after avoir');
});

/* ══════════════════════════════════════════════════════════════════════════
 * 10. WHAT THE EAR CAN AND CANNOT DO
 * ═══════════════════════════════════════════════════════════════════════ */

test('all four cells of all fifteen verbs stay distinct through fold', { skip: noLesson }, () => {
  for (const [verb, past] of FIFTEEN) {
    const cells = cellsOf(past);
    const folded = new Set(cells.map(fold));
    strictEqual(folded.size, 4,
      `${verb}'s cells fold together: ${cells.join(', ')}. The whole Owns is typed and a typed surface could not tell them apart.`);
  }
});

test('and through normalizeFr, which is what the dictée compares with', { skip: noLesson }, () => {
  for (const [verb, past] of FIFTEEN) {
    const cells = cellsOf(past);
    strictEqual(new Set(cells.map(normalizeFr)).size, 4, `normalizeFr collapses ${verb}'s cells`);
  }
});

test('NO EAR QUESTION offers two options that are one sound apart', { skip: noLesson }, () => {
  /* Fourteen of the fifteen have all four cells in one sound group. mourir does
     not, which is why it is the one ear question the lesson asks. */
  const forbidden: [string, string][] = [];
  for (const [, past] of FIFTEEN) {
    const [m, f, mp, fp] = cellsOf(past);
    forbidden.push([m, mp], [f, fp]);
    if (past !== AUDIBLE.m) forbidden.push([m, f], [m, fp], [f, mp], [mp, fp]);
  }
  const qs = quizQuestions(L!.sections.find((s) => s.type === 'quiz')!);
  const offenders: string[] = [];
  for (const q of qs) {
    if (q.format !== 'listenChoose') continue;
    const opts = q.opts ?? [];
    for (let i = 0; i < opts.length; i += 1) {
      for (let j = i + 1; j < opts.length; j += 1) {
        for (const [x, y] of forbidden) {
          if (x !== y && opts[i]!.replace(x, y) === opts[j]) offenders.push(`${opts[i]} / ${opts[j]}`);
        }
      }
    }
  }
  deepStrictEqual(offenders, [],
    'a listenChoose offering two members of one homophone group has no correct answer and marking one right certifies a bug');
});

test('there is exactly ONE ear question and it is mort against morte', { skip: noLesson }, () => {
  const qs = quizQuestions(L!.sections.find((s) => s.type === 'quiz')!);
  const ear = qs.filter((q) => q.format === 'listenChoose');
  strictEqual(ear.length, 1, 'exactly one ear question is legal in this lesson');
  const opts = (ear[0]!.opts ?? []).join('|');
  ok(opts.includes(AUDIBLE.m) && opts.includes(AUDIBLE.f), 'the ear question does not offer mort against morte');
  ok((ear[0] as { say?: string }).say, 'the ear question has no `say`, so the card speaks the correct option aloud');
});

test('the audible feminine has its own section, with all four cells named', { skip: noLesson }, () => {
  const text = secText(AUDIBLE_S);
  for (const w of [AUDIBLE.m, AUDIBLE.f, AUDIBLE.mp, AUDIBLE.fp]) {
    ok(hasPhrase(text, w), `s12-audible does not name « ${w} »`);
  }
  ok(/silent|still|inaudible|hear/i.test(text), 's12-audible never says what can and cannot be heard');
});

test('mort ends on the r and morte on the t, in the respellings', { skip: noLesson }, () => {
  const m = byIdItem.get('fr.a2.verbes.669');
  const f = byIdItem.get('fr.a2.verbes.670');
  ok(m && f, 'the audible pair rows are not in the seed');
  ok(m!.respell!.includes('MOR') && !m!.respell!.includes('MORT'), `the masculine is respelled « ${m!.respell} »`);
  ok(f!.respell!.includes('MORT'), `the feminine is respelled « ${f!.respell} » and the t is the whole mission`);
});

/* ══════════════════════════════════════════════════════════════════════════
 * 11. THE DICTÉE, THROUGH THE REAL dicteeMode
 * ═══════════════════════════════════════════════════════════════════════ */

test('every dictée item is in LETTERS mode and carries the dictation drill', { skip: noLesson }, () => {
  const d = sec(DICTATION) as { itemIds?: string[] } | undefined;
  ok(d?.itemIds?.length, 'the dictée names no items');
  for (const id of d!.itemIds!) {
    const r = byIdItem.get(id);
    ok(r, `${id} is a dictée target and is not in the seed`);
    strictEqual(dicteeMode(r!.fr), 'letters',
      `${id} « ${r!.fr} » is in word mode, and word mode hands every real word over pre-spelled`);
    ok((r!.drills ?? []).includes('dictation'), `${id} is a dictée target and carries no dictation drill`);
  }
});

test('the dictée holds all four cells, because agreement is inaudible', { skip: noLesson }, () => {
  const d = sec(DICTATION) as { itemIds?: string[] } | undefined;
  for (const n of [651, 652, 653, 654]) {
    ok(d!.itemIds!.includes(`fr.a2.verbes.${n}`),
      `fr.a2.verbes.${n} is one of the four cells and it is not in the dictée. No other surface in this app can ask for the ending.`);
  }
});

test('the frames that do not fit still do not fit', { skip: noLesson }, () => {
  for (const fr of ['Elles sont allées tôt.', 'Elles ne sont pas allées.', 'Nous sommes partis tôt.', 'Elle est morte en mars.']) {
    strictEqual(dicteeMode(fr), 'words', `« ${fr} » now fits the LETTERS window; re-measure before trusting the recorded list`);
  }
});

/* ══════════════════════════════════════════════════════════════════════════
 * 12. THE PATTERN, THE MNEMONIC, AND THE FIFTEEN
 * ═══════════════════════════════════════════════════════════════════════ */

test('all fifteen verbs and all fifteen past forms are on the pattern table', { skip: noLesson }, () => {
  const text = secText(PATTERN);
  for (const [verb, past] of FIFTEEN) {
    ok(hasPhrase(text, verb), `the pattern table does not name ${verb}`);
    ok(hasPhrase(text, past), `the pattern table names ${verb} without its past form ${past}`);
  }
});

test('the real pattern is taught, not only the mnemonic', { skip: noLesson }, () => {
  const text = learnerAll();
  ok(text.includes(MNEMONIC), 'the mnemonic is absent and the brief asks for it as a memory aid');
  const patternCount = ['movement', 'move', 'moves', 'moving']
    .reduce((n, w) => n + (hasPhrase(text, w) ? countPhrase(text, w) : 0), 0);
  ok(patternCount > 0, 'the mnemonic is present and the real pattern is not');
  ok(countPhrase(text, MNEMONIC) < patternCount,
    'the crutch outnumbers the pattern, which means the lesson is teaching a list of initials');
});

test('the two verbs the mnemonic misses and the one the pattern misses are named', { skip: noLesson }, () => {
  const text = learnerAll();
  ok(hasPhrase(text, 'passer'), 'passer is the verb the mnemonic has no letter for and it is never named');
  ok(hasPhrase(text, 'rester'), 'rester is the verb the pattern does not cover and it is never named');
  ok(hasPhrase(secText(CRUTCH), 'rester') || hasPhrase(secText(HALVES), 'rester'),
    'the wrinkle in the pattern is never stated where the pattern is taught');
});

test('the generalisation mission uses verbs the lesson never lists', { skip: noLesson }, () => {
  const text = secText(UNSEEN);
  for (const v of ['devenir', 'revenir', 'repartir']) {
    ok(hasPhrase(text, v), `s13-unseen does not name ${v}`);
    ok(!FIFTEEN.some(([f]) => f === v), `${v} is in the list of fifteen and cannot be a generalisation target`);
  }
  ok(text.includes(A215_REFRAME), 's13-unseen extends a2.15\'s move and does not quote its line');
});

/* ══════════════════════════════════════════════════════════════════════════
 * 13. THE REFRAME AND THE AGREEMENT RULE
 * ═══════════════════════════════════════════════════════════════════════ */

test('the reframe is the authored one and appears exactly eight times', { skip: noLesson }, () => {
  strictEqual(L!.reframe, REFRAME);
  strictEqual(countPhrase(learnerAll(), REFRAME), REFRAME_COUNT,
    'invariants §5: the count is an explicit constant, never derived, because a derived count compares the content to itself');
});

test('the agreement rule is worded once and authored, because a2.23 inherits it', { skip: noLesson }, () => {
  ok(learnerAll().includes(AGREEMENT_RULE),
    `the rule a2.23 is told to inherit appears nowhere:\n  « ${AGREEMENT_RULE} »`);
});

/* ══════════════════════════════════════════════════════════════════════════
 * 14. THE ROWS
 * ═══════════════════════════════════════════════════════════════════════ */

test('forty-six rows authored, all inside the block, none inside a2.20\'s', { skip: noLesson }, () => {
  const rows = myRows();
  strictEqual(rows.length, EXPECTED_AUTHORED);
  for (const r of rows) {
    ok(!isA220(r.id), `${r.id} is inside a2.20's block`);
    strictEqual(r.theme, THEME);
    strictEqual(r.level, 'a2');
    ok(/\s/.test(r.fr), `${r.id} authors « ${r.fr} », which is a BARE WORD whatever its kind says`);
    ok(r.respell, `${r.id} has no respelling`);
    ok(r.ipa, `${r.id} has no ipa`);
    ok(!(r as { gender?: string }).gender, `${r.id} carries a gender`);
  }
});

test('a2.20\'s block still belongs to a2.20 and holds nothing of this lesson\'s', { skip: noLesson }, () => {
  const mineInA220 = myRows().filter((r) => isA220(r.id));
  deepStrictEqual(mineInA220.map((r) => r.id), []);
  const occupants = seed.items.filter((i) => isA220(i.id));
  const a220 = seed.lessons.find((l) => l.id === 'a2.20.l1');
  if (a220) {
    const owned = new Set(a220.itemIds ?? []);
    deepStrictEqual(occupants.map((i) => i.id).filter((id) => !owned.has(id)), []);
  }
});

test('no authored row joins a1.03\'s ending population', { skip: noLesson }, () => {
  deepStrictEqual(endingPopulation(myRows() as never).map((r) => (r as { id: string }).id), []);
});

test('no duplicate fr inside the theme, computed the way flashhub-coverage does', { skip: noLesson }, () => {
  const strip = (s: string) => s.replace(/^(le |la |les |l'|l’|un |une |des |du |de la )/i, '').toLowerCase().trim();
  const byFr = new Map<string, string[]>();
  for (const i of seed.items.filter((x) => x.theme === THEME)) {
    byFr.set(strip(i.fr), [...(byFr.get(strip(i.fr)) ?? []), i.id]);
  }
  deepStrictEqual([...byFr.entries()].filter(([, ids]) => ids.length > 1).map(([k]) => k), []);
});

test('every itemId resolves and every authored row is released exactly once', { skip: noLesson }, () => {
  const missing = (L!.itemIds ?? []).filter((id) => !byIdItem.has(id));
  deepStrictEqual(missing, []);
  const released = (L!.deckTranche ?? []).flat();
  strictEqual(new Set(released).size, released.length, 'a tranche releases an item twice');
  const unreleased = (L!.itemIds ?? []).filter((id) => !released.includes(id));
  deepStrictEqual(unreleased, []);
  strictEqual((L!.deckTranche ?? []).length, EXPECTED_ACTS, 'one tranche per act');
});

test('the nine carried rows are in the seed, so no card draws blank', { skip: noLesson }, () => {
  for (const id of [
    'fr.a1.transports-quotidiens.044', 'fr.sons.verbes-essentiels.021',
    'fr.sons.verbes-essentiels.044', 'fr.sons.verbes-essentiels.085',
    'fr.sons.verbes-essentiels.017', 'fr.sons.verbes-essentiels.086',
    'fr.sons.verbes-essentiels.083', 'fr.sons.verbes-essentiels.084',
    'fr.a2.maison.022',
  ]) {
    ok(byIdItem.has(id), `${id} is named by this lesson and is not in the seed cut`);
  }
});

/* ══════════════════════════════════════════════════════════════════════════
 * 15. THE RESPELLINGS
 * ═══════════════════════════════════════════════════════════════════════ */

test('the two repairs landed and neither is flagged any more', { skip: noLesson }, () => {
  for (const [id, fr, to] of [
    ['fr.a1.transports-quotidiens.044', 'monter', 'mohⁿ-TAY'],
    ['fr.sons.verbes-essentiels.044', 'tomber', 'tohⁿ-BAY'],
  ] as [string, string, string][]) {
    const r = byIdItem.get(id);
    ok(r, `${id} is not in the seed`);
    strictEqual(r!.respell, to, `${id} is respelled « ${r!.respell} »`);
    ok(!hasPlainNasalFor(fr, to), `${id} is still flagged after the repair`);
  }
});

test('BOTH repairs were VISIBLE, against a brief that calls them invisible', { skip: noLesson }, () => {
  /* Corpus file §8: the brief and corrections §11 both list `monter mohn-TAY`
     and `tomber tohn-BAY` as nasals the checker cannot see, and all five
     candidates are FLAGGED. The n ends its token because a hyphen follows it,
     which is the opposite of the PRAHNDR shape a2.11 measured. */
  ok(hasPlainNasalFor('monter', 'mohn-TAY'), 'hasPlainNasalFor no longer sees « mohn-TAY »; the brief may be right now');
  ok(hasPlainNasalFor('tomber', 'tohn-BAY'), 'hasPlainNasalFor no longer sees « tohn-BAY »');
  ok(hasPlainNasalFor('descendre', 'day-SAHN-druh'), 'hasPlainNasalFor no longer sees « day-SAHN-druh »');
  ok(hasPlainNasalFor('entrer', 'ahn-TRAY'), 'hasPlainNasalFor no longer sees « ahn-TRAY »');
  ok(hasPlainNasalFor('rentrer', 'rahn-TRAY'), 'hasPlainNasalFor no longer sees « rahn-TRAY »');
});

test('the three the brief says need repairing already held the house value', { skip: noLesson }, () => {
  for (const [id, want] of [
    ['fr.a1.transports-quotidiens.045', 'day-SAHⁿDR'],
    ['fr.sons.verbes-essentiels.043', 'ahⁿ-TRAY'],
    ['fr.a2.verbes.016', 'rahⁿ-TRAY'],
  ] as [string, string][]) {
    const r = byIdItem.get(id);
    ok(r, `${id} is not in the seed`);
    strictEqual(r!.respell, want);
  }
});

test('every authored respelling is clean except the one blind nasal, by name', { skip: noLesson }, () => {
  const BLIND = 'fr.a2.verbes.686';
  const flagged = myRows().filter((r) => hasPlainNasalFor(r.fr, r.respell ?? ''));
  deepStrictEqual(flagged.map((r) => r.id), []);
  const b = byIdItem.get(BLIND);
  ok(b, `${BLIND} is not in the seed`);
  strictEqual(b!.respell, 'voo zeht zah-ree-VAY ahⁿ-SAHⁿBL');
  ok(!hasPlainNasalFor(b!.fr, 'voo zeht zah-ree-VAY ahⁿ-SAHNBL'),
    'hasPlainNasalFor now SEES a nasal followed by a consonant inside a token. The by-name blind list can be retired.');
});

test('THE FALSE POSITIVE: sommes is a real m and the checker reads it as a nasal', { skip: noLesson }, () => {
  /* Invariants §3 records jaune, automne and la saison; corrections §6 says the
     shape is real but rarer and asks builds to look for it. This one met it. */
  ok(hasPlainNasalFor('Nous sommes partis tôt.', 'noo sohm pahr-TEE TOH'),
    'hasPlainNasalFor no longer flags « sohm ». The false positive this build worked around has been fixed.');
  ok(!hasPlainNasalFor('Nous sommes partis tôt.', 'noo somm pahr-TEE TOH'),
    'the doubled consonant is flagged too, and invariants §3 prescribes it for automne');
  const r = byIdItem.get('fr.a2.verbes.658');
  ok(r, 'fr.a2.verbes.658 is not in the seed');
  ok(r!.respell!.includes('somm'), `« sommes » is respelled « ${r!.respell} » and it has no nasal vowel in it at all`);
  ok(!/sohⁿm|sohm/.test(r!.respell!), 'a superscript there would teach a sound the word does not have');
});

/* ══════════════════════════════════════════════════════════════════════════
 * 16. THE EXAM
 * ═══════════════════════════════════════════════════════════════════════ */

test('every question has a why and a ref that resolves', { skip: noLesson }, () => {
  const ids = new Set(L!.sections.map((s) => (s as { id: string }).id));
  for (const q of quizQuestions(L!.sections.find((s) => s.type === 'quiz')!)) {
    ok(q.why, `no why: « ${q.q} »`);
    const ref = (q as { ref?: string }).ref;
    ok(ref && ids.has(ref), `ref ${ref} is not a section in this lesson: « ${q.q} »`);
  }
});

test('at most half the exam is mcq, and every free-text question accepts its own answer', { skip: noLesson }, () => {
  const qs = quizQuestions(L!.sections.find((s) => s.type === 'quiz')!);
  const mcq = qs.filter((q) => q.format === 'mcq').length;
  ok(mcq * 2 <= qs.length, `${mcq} of ${qs.length} are mcq`);
  for (const q of qs) {
    if (!['typeIn', 'errorSpot'].includes(q.format ?? '')) continue;
    const answer = (q as { answer?: string }).answer;
    ok(answer, `a ${q.format} question has no answer: « ${q.q} »`);
    ok(matchesAccept(answer!, (q as { accept?: string[] }).accept),
      `a ${q.format} question does not accept its own answer « ${answer} »`);
  }
});

test('THE OWNS IS TESTED BY typeIn, which is the only format that can', { skip: noLesson }, () => {
  const qs = quizQuestions(L!.sections.find((s) => s.type === 'quiz')!);
  const typed = qs.filter((q) => q.format === 'typeIn');
  ok(typed.length >= 12, `only ${typed.length} of ${qs.length} questions are typed, and the canDo says produce`);
  /* And the subject's gender and number are determinable in every agreement
     question, or there is no single answer. */
  const agreement = typed.filter((q) => /(allée|allés|allées|parties|partis|descendues|restée|arrivées|mortes|devenue|repassées|rentrée)/.test((q as { answer?: string }).answer ?? ''));
  ok(agreement.length >= 8, `only ${agreement.length} typed questions turn on an ending`);
  for (const q of agreement) {
    ok(/\b(a woman|women|men|man|Elle|Elles|Ils|Il|Nous|Vous|Tu|Je)\b/.test(q.q ?? ''),
      `an agreement question does not fix the subject in the stem: « ${q.q} »`);
  }
});

test('correct answers do not cluster in one option slot', { skip: noLesson }, () => {
  const qs = quizQuestions(L!.sections.find((s) => s.type === 'quiz')!);
  const closed = qs.filter((q) => typeof (q as { correct?: number }).correct === 'number');
  const slots: Record<number, number> = {};
  for (const q of closed) { const i = (q as { correct: number }).correct; slots[i] = (slots[i] ?? 0) + 1; }
  for (const [slot, n] of Object.entries(slots)) {
    ok(n / closed.length <= 0.4, `option slot ${slot} holds ${n} of ${closed.length} closed answers`);
  }
});

test('each round leads on a different trigger, so all six drills are reachable', { skip: noLesson }, () => {
  const quiz = L!.sections.find((s) => s.type === 'quiz') as { rounds?: { id: string; targets?: string[] }[] };
  const leads = (quiz.rounds ?? []).map((r) => r.targets?.[0]);
  strictEqual(new Set(leads).size, leads.length, `two rounds lead on the same trigger: ${leads.join(', ')}`);
  const drills = new Set((L!.drills ?? []).map((d) => (d as { id: string }).id));
  for (const t of L!.errorTriggers ?? []) {
    ok(leads.includes(t.id), `${t.id} leads no round, so its drill never fires`);
    ok(drills.has(t.drill), `${t.id} names drill ${t.drill}, which does not exist`);
    ok(drills.has(t.retest), `${t.id} names retest ${t.retest}, which does not exist`);
  }
});

/* ══════════════════════════════════════════════════════════════════════════
 * 17. HOUSE COPY AND THE THINGS A PIXEL 6 FOUND
 * ═══════════════════════════════════════════════════════════════════════ */

test('no em dash, no banned word, no U+203F, no doubled full stop', { skip: noLesson }, () => {
  const offenders: string[] = [];
  const surfaces = [
    ...display(L!.sections), ...display(L!.sheets ?? []), ...display(L!.terms ?? {}),
    L!.intro ?? '', ...display(L!.overview ?? {}), ...display(L!.acts ?? []),
    ...display(L!.drills ?? []), ...display(L!.audio ?? {}),
  ];
  for (const s of surfaces) {
    if (s.includes('—') || s.includes('–')) offenders.push(`em dash: ${s}`);
    if (/\bhonest(y|ly)?\b/i.test(s)) offenders.push(`banned word: ${s}`);
    if (s.includes('‿')) offenders.push(`U+203F: ${s}`);
    if (/(?<!\.)\.\.(?!\.)/.test(s)) offenders.push(`doubled stop: ${s}`);
  }
  deepStrictEqual(offenders.slice(0, 3), []);
});

test('no grammar jargon on a learner surface', { skip: noLesson }, () => {
  const JARGON = [
    'participle', 'auxiliary', 'agreement', 'periphrastic', 'intransitive',
    'transitive', 'infinitive', 'inflection', 'paradigm', 'morpheme',
    'orthography', 'predicate', 'copula', 'invariable', 'direct object',
    'first person', 'second person', 'third person',
  ];
  const titleEn = (L!.overview as { titleEn?: string } | undefined)?.titleEn ?? '';
  const offenders: string[] = [];
  for (const s of [...display(L!.sections), ...display(L!.sheets ?? []), ...display(L!.terms ?? {}), L!.intro ?? '', ...display(L!.drills ?? [])]) {
    if (s === titleEn) continue;
    for (const j of JARGON) if (hasPhrase(s, j) || hasPhrase(s, `${j}s`)) offenders.push(`${j} in « ${s} »`);
  }
  deepStrictEqual(offenders.slice(0, 3), []);
});

test('the plain phrase outnumbers the technical one', { skip: noLesson }, () => {
  const text = learnerAll();
  const plain = countPhrase(text, 'describing word');
  const technical = countPhrase(text, 'adjective');
  ok(plain >= technical, `« adjective » ${technical} against « describing word » ${plain}`);
});

test('no cardDeck hint is over sixty characters', { skip: noLesson }, () => {
  /* FOUND ON A PIXEL 6 BY a2.20: a hint is ONE LINE and ellipsises, measured at
     64 shown of 71. No host gate could have found it. */
  for (const s of L!.sections) {
    const hint = (s as { hint?: string }).hint;
    if (!hint) continue;
    ok(hint.length <= HINT_MAX, `${(s as { id: string }).id}'s hint is ${hint.length} characters: « ${hint} »`);
  }
});

test('three term chips per section, and the row fits thirty-seven characters', { skip: noLesson }, () => {
  const terms = L!.terms ?? {};
  for (const s of L!.sections) {
    const chips = (s as { terms?: string[] }).terms ?? [];
    ok(chips.length <= 3, `${(s as { id: string }).id} declares ${chips.length} chips and the renderer shows three`);
    for (const t of chips) ok(terms[t], `${(s as { id: string }).id} names term ${t}, which does not exist`);
    if (!chips.length) continue;
    const width = chips.reduce((n, k) => n + (terms[k]?.term.length ?? 0), 0) + (chips.length - 1) * 2;
    ok(width <= TERM_ROW_MAX, `${(s as { id: string }).id}'s chip row is ${width} characters`);
  }
});

test('no term label is a grammar word', { skip: noLesson }, () => {
  for (const t of Object.values(L!.terms ?? {})) {
    for (const j of ['participle', 'auxiliary', 'agreement', 'subject', 'object pronoun']) {
      ok(!hasPhrase(t.term, j), `the chip « ${t.term} » is a grammar word`);
    }
  }
});

test('no scene bubble carries a spaced exclamation mark', { skip: noLesson }, () => {
  /* a2.05 §11.2, found on a Pixel 6: the bubble loses its last word while the
     gloss under it still translates it. */
  const scene = sec(SCENE) as { beats?: { fr?: string }[] } | undefined;
  ok(scene?.beats?.length, 's01-scene has no beats');
  const offenders = scene!.beats!.filter((b) => typeof b.fr === 'string' && b.fr.includes(' !'));
  deepStrictEqual(offenders.map((b) => b.fr), []);
});

test('the scene SPEAKS the wrong sentence rather than describing it', { skip: noLesson }, () => {
  /* a2.20 §5.3: a scene guard walking every string passes on a repaired scene,
     because the English gloss still names the error. */
  const scene = sec(SCENE) as {
    beats?: { fr?: string; options?: { fr?: string }[]; wrong?: { fr?: string }; right?: { fr?: string } }[];
  } | undefined;
  const spoken: string[] = [];
  for (const b of scene?.beats ?? []) {
    if (typeof b.fr === 'string') spoken.push(b.fr);
    for (const o of b.options ?? []) if (typeof o.fr === 'string') spoken.push(o.fr);
    if (typeof b.wrong?.fr === 'string') spoken.push(b.wrong.fr);
    if (typeof b.right?.fr === 'string') spoken.push(b.right.fr);
  }
  ok(spoken.join('\n').includes('J’ai sorti avec des amis.'),
    'the scene never speaks the sentence that goes wrong. A failure only described in English is a scene that did not happen.');
});

test('every trapDrill is stepped rule > cards > audio > drill with a gated drill', { skip: noLesson }, () => {
  const traps = L!.sections.filter((s) => s.type === 'trapDrill') as unknown as {
    id: string; swipe?: boolean; size?: string; steps?: { kind: string; label?: string; gate?: boolean }[];
    cards?: { fr?: string }[]; audio?: { recordingId?: string };
  }[];
  strictEqual(traps.length, EXPECTED_TRAP_DRILLS);
  for (const t of traps) {
    ok(t.swipe, `${t.id} has no swipe`);
    ok(!t.size, `${t.id} carries a size, and size comes OFF a stepped trapDrill`);
    strictEqual((t.steps ?? []).map((s) => s.kind).join('>'), 'rule>cards>audio>drill', `${t.id}`);
    ok((t.steps ?? []).find((s) => s.kind === 'drill')?.gate, `${t.id}'s drill step is not gated`);
    const label = (t.steps ?? []).find((s) => s.kind === 'cards')?.label ?? '';
    const n = t.cards?.length ?? 0;
    const words = ['zero', 'one', 'two', 'three', 'four', 'five', 'six'];
    ok(label.toLowerCase().includes(words[n] ?? '@@') || label.includes(String(n)),
      `${t.id}'s cards step is labelled « ${label} » and holds ${n} cards`);
    const rec = (L!.audio?.recorded ?? []).find((r) => r.id === t.audio?.recordingId);
    ok(rec, `${t.id} names a recording no brief declares`);
    for (const c of t.cards ?? []) {
      ok((rec!.clipIds ?? []).includes(c.fr!) || (rec!.desc ?? '').includes(c.fr!),
        `${t.id}'s card « ${c.fr} » is not in recording ${rec!.id}, and the audio step plays it`);
    }
  }
});

test('commonErrors carries swipe, or it draws a blank screen', { skip: noLesson }, () => {
  const e = sec(ERRORS) as { swipe?: boolean; errors?: unknown[] } | undefined;
  ok(e, 's18-errors is missing');
  ok(e!.swipe, 'commonErrors without swipe hits a break that falls out of the switch and returns undefined');
  strictEqual((e!.errors ?? []).length, 5);
});

test('every role-play turn has two alternatives and a userEn', { skip: noLesson }, () => {
  /* scenario.logic.test.ts is a SEED-WIDE test requiring both, and a2.03 shipped
     three turns with one alt each with every gate green. */
  const t = sec(TALK) as { turns?: { alts?: unknown[]; userEn?: string }[] } | undefined;
  ok(t?.turns?.length, 's19-talk has no turns');
  for (const turn of t!.turns!) {
    ok((turn.alts ?? []).length >= 2, 'a role-play turn has fewer than two alternatives');
    ok(turn.userEn, 'a role-play turn has no userEn');
  }
});

test('the reference sheet is reachable and holds only what ReferenceSheet draws', { skip: noLesson }, () => {
  const sheets = L!.sheets ?? [];
  strictEqual(sheets.length, 1);
  const sheet = sheets[0]!;
  strictEqual(sheet.id, 'sheet-a2-21-etre');
  ok(sheet.title.length <= 37, `the sheet title is ${sheet.title.length} characters`);
  const named = L!.sections.some((s) => (s as { sheetId?: string }).sheetId === sheet.id);
  ok(named, 'the sheet is declared and no section names it');
  for (const s of sheet.sections ?? []) {
    ok(['table', 'teach', 'letterGrid'].includes(s.type),
      `sheet section ${(s as { id: string }).id} is a ${s.type}, and cheatSheet draws its title and nothing else`);
    const t = s as unknown as { cols?: string[]; rows?: string[][] };
    if (s.type === 'table') {
      ok((t.cols ?? []).length <= 3, 'a sheet table is four columns wide and a2.04 measured one clipping');
      for (const row of t.rows ?? []) for (const cell of row) {
        ok(cell.length <= 12, `sheet cell « ${cell} » is ${cell.length} characters against a2.19's measured 12`);
      }
    }
  }
});

test('the six-person table shows all six persons with the ending visible', { skip: noLesson }, () => {
  const sheet = (L!.sheets ?? [])[0]!;
  const table = (sheet.sections ?? []).find((s) => (s as { id: string }).id === 'sheet-persons') as unknown as { rows?: string[][] };
  ok(table?.rows?.length, 'the six-person table is missing');
  strictEqual(table!.rows!.length, 6);
  const persons = table!.rows!.map((r) => r[0]);
  deepStrictEqual(persons, ['je', 'tu', 'il · elle', 'nous', 'vous', 'ils · elles']);
  for (const r of table!.rows!) ok(/nothing|e|s|es/.test(r[2] ?? ''), `the ending column is empty on ${r[0]}`);
});

/* ══════════════════════════════════════════════════════════════════════════
 * 18. THE VERSION AND THE SEED
 * ═══════════════════════════════════════════════════════════════════════ */

test('the lesson is at least v2 and its tag matches the unit seq', { skip: noLesson }, () => {
  ok((L!.version ?? 0) >= 2, `the lesson is v${L!.version} and the width corrections moved it to v2`);
  strictEqual(L!.tag, 'A2 · LEÇON 18');
  strictEqual(L!.unitId, 'a2.21');
  strictEqual(L!.title, 'Le passé composé avec être');
  strictEqual((L!.overview as { titleEn?: string } | undefined)?.titleEn, 'The Passé Composé with Être');
});

test('grammarIntroduced records what this lesson claims and what it reserves', { skip: noLesson }, () => {
  const gi = (L!.grammarIntroduced ?? []).join('\n');
  ok(/être as the auxiliary/i.test(gi), 'grammarIntroduced does not claim the auxiliary');
  ok(/agreement with the subject/i.test(gi), 'grammarIntroduced does not claim the agreement');
  ok(/mourir/i.test(gi), 'grammarIntroduced does not record the one audible feminine');
  ok(/RECEPTION ONLY/i.test(gi), 'grammarIntroduced does not record the transitive decision');
  ok(/a2\.22 and a2\.23/i.test(gi), 'grammarIntroduced does not reserve the reflexives');
});
