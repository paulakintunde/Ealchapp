// a2.02.l1 "Irréguliers 1 : aller, venir, tenir": the assertions that keep this
// lesson true.
//
// Modelled on a2-11-verbes-re.test.ts. Everything here runs the REAL app function
// rather than a copy: an earlier a1.01 test inlined its own glossary lookup,
// copied the version that was already broken, and passed while the feature was
// dead.
//
// ── What this file is actually guarding ────────────────────────────────────
//
// This lesson authors 29 sentences and imports every verb it teaches, so the
// failure mode is not "the word is missing". It is:
//
//   THE TWO JOBS BEING SEPARATED. `Je viens de Paris.` and `Je viens de manger.`
//   are the two rows of ONE tapTable with the shared prefix in the column header.
//   The brief names this as the layout the test must assert and says that
//   splitting them destroys the teaching. Checked by row INDEX, by column count,
//   by the header, and by the cells NOT restating the prefix.
//   THE FUTUR PROCHE BEING TAUGHT. This lesson conjugates `aller` in full and
//   a2.19 (seq 15, prereq a2.02) owns `aller` + an action. The guard is
//   STRUCTURAL rather than a word list, and it is scoped to PRODUCTION SURFACES
//   because the card that hands the construction over has to be able to name it.
//   THE tenir LINK BEING DROPPED. tenir is in this lesson for exactly one reason:
//   every cell of it is venir's cell with the first letter changed. That is
//   DERIVED from the paradigm rather than asserted, so a cell that stops matching
//   empties the constant. Without it the third verb is arbitrary.
//   A PARADIGM CELL DRIFTING. All three paradigms are asserted CELL BY CELL
//   against the authored source, and each verb's six rows must share one frame.
//   THE a2.10 LOOP BEING CLOSED IN PROSE INSTEAD OF IN SOUND. Six lines on one
//   frame word, four of them a2.10.l1's and a2.10.l2's OWN rows rather than
//   twins. A twin would put four performances on the screen instead of four
//   cells.
//   THE FAMILY PRINCIPLE BEING TAUGHT HERE. Three compounds are evidence that
//   tenir was worth learning; the rule that this generalises is a2.15's Owns.
//   `appartenir` is read from Postgres and must reach no screen at all.
//   THE RESPELLINGS BEING "TIDIED". hasPlainNasalFor is blind to this lesson's
//   nasals in TWO different ways and neither is the one the brief describes, so
//   the shared checker will not notice. Both are asserted by name and both
//   blindnesses are re-confirmed as negatives, with a positive control so a
//   checker that has gone quiet altogether is caught.
//   AN EAR QUESTION BEING WRITTEN BETWEEN TWO FORMS THAT ARE ONE SOUND. No
//   recording separates viens from vient, or vas from va.
//   THE QUIZ DRIFTING BACK TO THE TABLES. The Owns is the timeline; at least half
//   the questions have to touch venir de or this is the memorisation lesson the
//   brief warns about in its first paragraph.
//
// Every one of those is asserted below, and every one was mutation-tested: the
// assertion was broken on purpose and confirmed to go red before it was kept.

import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { ok, strictEqual } from 'node:assert';
import { test } from 'node:test';

import type { Item, Lesson } from './schema.ts';
import { quizQuestions, validateLesson, formatIssues } from './schema.ts';
import { validateDensity, formatDensity, hasPlainNasalFor } from './density.logic.ts';
import { endingPopulation } from './gender.logic.ts';
import { dicteeMode } from './dictee.logic.ts';
import { MAX_GLOSS_WORDS, glossKeys, segmentSentence } from './gloss.logic.ts';
import { matchesAccept } from './answer.logic.ts';
import { normalizeFr } from '../utils/score.ts';

const here = dirname(fileURLToPath(import.meta.url));
const seed = JSON.parse(readFileSync(resolve(here, 'seed.json'), 'utf8')) as {
  version: number; items: Item[]; lessons: Lesson[];
  units: { id: string; title?: string; sub?: string; canDo?: string; seq?: string | number; lessonIds?: string[]; prereqUnitIds?: string[] }[];
};

const L = seed.lessons.find((l) => l.id === 'a2.02.l1');
const noLesson = !L;
const byId = new Map(seed.items.map((i) => [i.id, i] as const));

/* ─── The shape of the lesson ──────────────────────────────────────────── */

const SPINE = [
  's01-scene', 's02-goals', 's03-three',
  's04-nostem', 's05-six', 's06-tot', 's07-three',
  's08-justdid', 's09-twojobs', 's10-build', 's11-newverb', 's12-clock', 's13-flash',
  's14-trap', 's15-errors', 's16-notmine',
  's17-speak', 's18-dictation', 's19-scenario', 's20-reading',
  's21-review', 's22-progress', 's23-quiz', 's24-roundup',
];

/** THE OWNS ACT IS THE HEAVIEST. Six missions against the paradigm act's four,
 *  and act 4 adds two more on the same construction. If that ever inverts, the
 *  paradigm has taken the lesson over, which is the failure the brief opens by
 *  warning about. */
const ACTS = [
  { id: 'act1', n: 3 },
  { id: 'act2', n: 4 },
  { id: 'act3', n: 6 },
  { id: 'act4', n: 3 },
  { id: 'act5', n: 4 },
  { id: 'act6', n: 4 },
];
const PARADIGM_ACT = 'act2';
const OWNS_ACT = 'act3';

const REFRAME = 'Coming from an action is how French says you just did it.';
/** EIGHT sections, plus the sheet and the `reframe` field itself when the whole
 *  object is walked. Asserted against an explicit constant, never a figure
 *  derived from the lesson: a derived count compares the content to itself and
 *  survives any rewording. */
const REFRAME_SECTIONS = 8;
const REFRAME_APPEARANCES = 11;

/** THE NAME THREE LATER LESSONS ARE TOLD TO QUOTE. a2.18 (seq 14), a2.19 (seq 15)
 *  and a2.15 (seq 9) each teach another instance of one form doing two jobs, and
 *  each is told to point back at this unit by id. If the name changes here, three
 *  later lessons quote something that is on no screen. */
const WHAT_FOLLOWS = 'what comes next decides';
const WHAT_FOLLOWS_UNIT = 'a2.02';

/** The claim that is the only reason a third verb is in this lesson. */
const TENIR_CLAIM = 'tenir is venir with a t on the front, cell for cell.';
/** What the Owns is worth, said to the learner rather than only meant. */
const TIMELINE = 'A past tense, 11 lessons before anybody teaches you one.';
/** a2.01's constant, quoted verbatim. The ledger binds all twenty A2 lessons to
 *  it, and on venir it lands on the singular of an irregular verb. */
const NOUS_ON = 'nous parlons is what you write. on parle is what you say.';

const TWO_JOBS_SECTION = 's09-twojobs';
const TOT_SECTION = 's06-tot';
const FAMILY_SECTION = 's07-three';
const BOUNDARY_SECTION = 's16-notmine';
const NOUS_ON_SECTION = 's10-build';
/** ONE sheet, and it is the one place in the level where the method is shown to
 *  stop. A fourth ending sheet would be worthless: these verbs have no endings to
 *  list, they have forms. */
const SHEET_ID = 'sheet.a2.02.irreguliers';
const EXPECTED_SHEETS = 1;

/** THE TWO JOBS, in the order the section must render them: the PLACE use first,
 *  because it is the one the learner already has. Measured 2026-08-12: 80
 *  published sentences hold a form of venir plus de, and they split 28 infinitive
 *  against 52 other, of which 26 are a country or a city. */
const TWO_JOBS: { after: string; job: string; fr: string; kind: 'place' | 'infinitive' }[] = [
  { after: 'a place', job: 'where you are from', fr: 'Je viens de Paris.', kind: 'place' },
  { after: 'an action', job: 'what you have just done', fr: 'Je viens de manger.', kind: 'infinitive' },
];
/** The half both sentences share, which lives in the COLUMN HEADER rather than in
 *  the cells. That is what makes two columns enough and it is the teaching
 *  rendered as a layout. */
const SHARED_PREFIX = 'Je viens de ';

/** THE THREE PARADIGMS, cell by cell, in the ledger's canonical pronoun order.
 *  Written out here rather than imported, so the seed is compared against an
 *  independent statement of what it should hold. */
const PARADIGM: { person: string; aller: string; venir: string; tenir: string }[] = [
  { person: 'je', aller: 'vais', venir: 'viens', tenir: 'tiens' },
  { person: 'tu', aller: 'vas', venir: 'viens', tenir: 'tiens' },
  { person: 'il · elle · on', aller: 'va', venir: 'vient', tenir: 'tient' },
  { person: 'nous', aller: 'allons', venir: 'venons', tenir: 'tenons' },
  { person: 'vous', aller: 'allez', venir: 'venez', tenir: 'tenez' },
  { person: 'ils · elles', aller: 'vont', venir: 'viennent', tenir: 'tiennent' },
];

/** The three verbs and the frame each one runs on. If a verb stops sharing its
 *  frame, the screen compares six objects as well as six forms. */
const FRAMES: Record<string, string> = { aller: 'au parc.', venir: 'tôt.', tenir: 'la clé.' };
/** The id range each paradigm occupies, in the ledger's pronoun order. The
 *  paradigms are identified by RANGE rather than by frame, because
 *  `Il revient tôt.` shares venir's frame and is a compound rather than a cell. */
const PARADIGM_RANGES: Record<string, [string, string]> = {
  aller: ['fr.a2.verbes.261', 'fr.a2.verbes.266'],
  venir: ['fr.a2.verbes.267', 'fr.a2.verbes.272'],
  tenir: ['fr.a2.verbes.273', 'fr.a2.verbes.278'],
};
const THE_THREE = ['aller', 'venir', 'tenir'];

/** At most three, and the brief's test list says so. The rule that this
 *  generalises is a2.15's Owns. */
const COMPOUNDS = ['revenir', 'devenir', 'obtenir'];
const MAX_COMPOUNDS = 3;
const FAMILY_UNIT = 'a2.15';
/** Read from Postgres by the manifest and named on NO screen. A fourth compound
 *  would break the ceiling. */
const READ_ONLY_VERB = 'appartenir';
const READ_ONLY_ID = 'fr.sons.verbes-essentiels.218';

const FUTUR_PROCHE_UNIT = 'a2.19';
const PREPOSITION_UNIT = 'a2.04';
const PASSE_COMPOSE_UNIT = 'a2.05';
const A210_BACKREF = 'a2.10';
const FRAME_WORD = 'tôt';

/** THE CROSS-LESSON SCREEN. Three lessons, one frame word, three different things
 *  happening to the plural. The first two pairs are a2.10.l1's and a2.10.l2's OWN
 *  rows and must be imported rather than twinned. */
const TOT_FRAME: { unit: string; singular: string; plural: string; mine: boolean }[] = [
  { unit: 'a2.10', singular: 'fr.a2.verbes.183', plural: 'fr.a2.verbes.186', mine: false },
  { unit: 'a2.10', singular: 'fr.a2.verbes.463', plural: 'fr.a2.verbes.464', mine: false },
  { unit: 'a2.02', singular: 'fr.a2.verbes.269', plural: 'fr.a2.verbes.272', mine: true },
];

/** THE PAIRS THE EAR CAN SETTLE. `il` and `ils` are one sound, so the verb is the
 *  whole evidence: the singular is a nasal vowel with no n released and the
 *  plural is an oral vowel with a doubled n. */
const NUMBER_PAIRS: [string, string][] = [
  ['fr.a2.verbes.269', 'fr.a2.verbes.272'],
  ['fr.a2.verbes.275', 'fr.a2.verbes.278'],
];

/** THE SINGULAR TRIPLES: three spellings whose respellings are one string once
 *  the pronoun token comes off. */
const SINGULAR_TRIPLES: string[][] = [
  ['fr.a2.verbes.267', 'fr.a2.verbes.268', 'fr.a2.verbes.269'],
  ['fr.a2.verbes.273', 'fr.a2.verbes.274', 'fr.a2.verbes.275'],
];

/** THE SPELLINGS AN EAR QUESTION MAY NEVER ASK BETWEEN. `vas` against `va` is the
 *  one somebody would miss: both are /va/ and the s is written for tu and said by
 *  nobody. */
const HOMOPHONE_FORMS: string[][] = [
  ['viens', 'vient'], ['tiens', 'tient'], ['vas', 'va'],
  ['reviens', 'revient'], ['deviens', 'devient'], ['obtiens', 'obtient'],
];

/** THE STRUCTURAL GUARDS. Both are regexes rather than word lists, because a word
 *  list misses the verb nobody thought of. */
const FUTUR_PROCHE_SHAPE = /\b(vais|vas|va|allons|allez|vont)\s+(?:ne\s+|n['’]\s*)?[a-zà-ÿ]{3,}(?:er|ir|re|oir)\b/i;
/** RESTRICTED TO THE ACCENTED PARTICIPLE. The obvious version also matches -i,
 *  -is, -it, -u and -us, and `as a bit`, `a visit` and `is a unit` all match that
 *  while being ordinary English, which every instruction line in this lesson is. */
/** AND IT DOES NOT USE `\b` AT EITHER END. Found by mutation-testing on
 *  2026-08-12: the first version ended `(?:é|és|ée|ées)\b` and NEVER FIRED on any
 *  real participle, because `\b` in JavaScript is ASCII-only and `é` is not an
 *  ASCII word character. `Il a mangé.` sailed straight through it. Invariants §0
 *  records exactly this trap and this guard walked into it anyway. */
const PASSE_COMPOSE_SHAPE = /(^|[^a-zà-ÿ])(ai|as|a|avons|avez|ont|suis|est|sommes|sont)\s+[a-zà-ÿ]{2,}(é|és|ée|ées)(?![a-zà-ÿ])/i;
const PASSE_COMPOSE_PHRASES = [
  'ai fini', 'a fini', 'ont fini', 'ai vendu', 'a vendu',
  'est parti', 'sont partis', 'est arrivé', 'est venu', 'est allé',
];

/** THE WORD-INTERNAL NASAL, which is the a2.11 shape and the ONLY instance here.
 *  `NAHnT` sails through hasPlainNasalFor while being wrong. */
const BLIND_NASALS = [
  { id: 'fr.a2.verbes.286', must: 'NAHⁿT', broken: 'NAHnT' },
];
/** THE DOUBLED N, which is a DIFFERENT blindness and the one the brief mistakes
 *  for the first. `viennent` /vjɛn/ and `tiennent` /tjɛn/ have NO nasal vowel at
 *  all, and the checker short-circuits on the `nn` in the French spelling
 *  (density.logic.ts:215), so it would not catch a single-n respelling either. */
const DOUBLE_N = [
  { id: 'fr.a2.verbes.272', must: 'vyenn', singleN: 'vyen' },
  { id: 'fr.a2.verbes.278', must: 'tyenn', singleN: 'tyen' },
  { id: 'fr.a2.verbes.284', must: 'vyenn', singleN: 'vyen' },
  { id: 'fr.a2.verbes.287', must: 'vyenn', singleN: 'vyen' },
];

const EXPECTED_AUTHORED = 29;
const EXPECTED_ITEMS = 39;
const EXPECTED_DICTATION = 15;
const EXPECTED_QUESTIONS = 30;
const EXPECTED_ROUNDS = 5;
const EXPECTED_TRIGGERS = 5;
const OWNED_FROM = 'fr.a2.verbes.261';
const OWNED_TO = 'fr.a2.verbes.300';

const UNIT_ID = 'a2.02';
const UNIT_TITLE = 'Irregular Verbs 1: Aller, Venir, Tenir';
const UNIT_SUB = 'Irréguliers 1 : aller, venir, tenir';
const UNIT_CANDO = 'Can use aller, venir and tenir in the present, including venir de for the recent past';

const JARGON = ['conjugation', 'conjugate', 'conjugated', 'indicative', 'morpheme', 'inflection', 'paradigm', 'orthography', 'phoneme', 'first person', 'second person', 'third person'];

/* ─── Helpers, none of which reimplements app logic ─────────────────────── */

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
/** Accent-aware word-boundary search. `\b` is ASCII-only in JavaScript and
 *  returns zero on a trailing accent, which looks exactly like an absence. */
function hasPhrase(hay: string, needle: string): boolean {
  const isWord = (c: string) => /[\p{L}\p{N}'’-]/u.test(c);
  const h = hay.toLowerCase();
  const n = needle.toLowerCase();
  let i = 0;
  while ((i = h.indexOf(n, i)) !== -1) {
    const before = i === 0 ? '' : h[i - 1];
    const after = h[i + n.length] ?? '';
    if (!isWord(before) && !isWord(after)) return true;
    i += 1;
  }
  return false;
}
const sec = (id: string) => L?.sections.find((s) => (s as { id?: string }).id === id);
const afterPronoun = (r: string) => r.split(' ').slice(1).join(' ');

/** EVERY SURFACE A LEARNER READS, and `intro` and `overview` are two of them.
 *  a2.11 shipped "third person" in `intro` at v1 because every guard in the band
 *  walked sections + sheets + terms and nothing looked at it. Ledger §0. */
const learnerText = L
  ? [
    ...strings(L.sections), ...strings(L.sheets ?? []), ...strings(L.terms ?? {}),
    L.intro ?? '', ...strings(L.overview ?? {}),
  ].join('\n')
  : '';
const learnerProse = L
  ? [
    ...prose(L.sections), ...prose(L.sheets ?? []), ...prose(L.terms ?? {}),
    L.intro ?? '', ...prose(L.overview ?? {}),
  ]
  : [];

/** WHAT THE LEARNER IS ASKED TO PRODUCE OR CHOOSE, plus the vocabulary decks.
 *  Narrower than "a section", and the only scope on which the neighbour guards
 *  are honest: s16-notmine NAMES what aller does next in order to hand it over. */
function productionSurfaces(): string[] {
  if (!L) return [];
  const out: string[] = [];
  const quiz = L.sections.find((s) => s.type === 'quiz');
  if (quiz && quiz.type === 'quiz') {
    for (const q of quizQuestions(quiz)) {
      if (q.answer) out.push(q.answer);
      if (q.target) out.push(q.target);
      for (const a of q.accept ?? []) out.push(a);
      for (const o of q.opts ?? []) out.push(o);
    }
  }
  for (const s of L.sections) {
    if (s.type === 'scenario') for (const t of s.turns) out.push(t.user, ...(t.alts ?? []).map((a) => a.fr));
    if (s.type === 'groupDrill') for (const g of s.groups) { if (g.check) out.push(...g.check.opts); out.push(...strings(g.items ?? [])); }
    if (s.type === 'listening') for (const q of s.questions) out.push(...q.opts);
    if (s.type === 'trapDrill') for (const d of s.drill) out.push(...d.opts);
    if (['vocabThemes', 'flashcards', 'reviewDeck', 'dictation', 'practice'].includes(s.type)) out.push(...strings(s));
  }
  for (const d of L.drills ?? []) {
    for (const p of (d as { pairs?: [string, string][] }).pairs ?? []) out.push(p[1]);
    const o = d as { opts?: string[]; correct?: number };
    if (typeof o.correct === 'number' && o.opts) out.push(o.opts[o.correct]);
  }
  return out;
}
const PRODUCTION = productionSurfaces();

/* ─── The authored source, for the seed-against-source half ─────────────── */

let SRC: Lesson | null = null;
let SRC_REFRAME = '';
let SRC_WHAT_FOLLOWS = '';
let SRC_TENIR_CLAIM = '';
let SRC_TIMELINE = '';
let SRC_NOUS_ON = '';
let SRC_AUTHORED: Item[] = [];
let SRC_IMPORTED: Item[] = [];
let SRC_READ_ONLY_IDS: string[] = [];
let SRC_PARADIGM: typeof PARADIGM = [];
let SRC_TENIR_FOLLOWS: string[] = [];
let SRC_TWO_JOBS: { after: string; job: string; id: string; kind: string }[] = [];
let SRC_COMPOUNDS: readonly string[] = [];
let SRC_THREE: readonly string[] = [];
let SRC_DICTATION: string[] = [];
let SRC_SPEAK: string[] = [];
let SRC_ITEM_IDS: string[] = [];
let SRC_NEAR_MISS: { id: string; wrong: string; scorable: boolean }[] = [];
let SRC_REPAIRS: unknown[] = [];
let SRC_ERROR: unknown = null;

try {
  const corpus = await import('../../../ealch-admin/scripts/data/aller-venir-corpus.ts');
  const lesson = await import('../../../ealch-admin/scripts/data/aller-venir-lesson.ts');
  const imported = await import('../../../ealch-admin/scripts/data/aller-venir-imported.ts');
  const terms = await import('../../../ealch-admin/scripts/data/aller-venir-terms.ts');
  SRC = lesson.ALLER_VENIR_LESSON as Lesson;
  SRC_REFRAME = terms.REFRAME as string;
  SRC_WHAT_FOLLOWS = terms.WHAT_FOLLOWS as string;
  SRC_TENIR_CLAIM = terms.TENIR_CLAIM as string;
  SRC_TIMELINE = terms.TIMELINE as string;
  SRC_NOUS_ON = terms.NOUS_ON as string;
  SRC_AUTHORED = (corpus.ALLER_VENIR as unknown[]).map((s) => corpus.toItem(s as never)) as Item[];
  SRC_IMPORTED = imported.IMPORTED_ROWS as unknown as Item[];
  SRC_READ_ONLY_IDS = (imported.READ_ONLY_VERBS as { id: string }[]).map((b) => b.id);
  SRC_PARADIGM = corpus.PARADIGM as unknown as typeof PARADIGM;
  SRC_TENIR_FOLLOWS = corpus.TENIR_FOLLOWS_VENIR as string[];
  SRC_TWO_JOBS = corpus.TWO_JOBS as unknown as typeof SRC_TWO_JOBS;
  SRC_COMPOUNDS = corpus.COMPOUNDS as readonly string[];
  SRC_THREE = corpus.THE_THREE as readonly string[];
  SRC_DICTATION = lesson.ALLER_VENIR_DICTATION_IDS as string[];
  SRC_SPEAK = lesson.ALLER_VENIR_SPEAK_IDS as string[];
  SRC_ITEM_IDS = lesson.ALLER_VENIR_ITEM_IDS as string[];
  SRC_NEAR_MISS = corpus.DICTEE_NEAR_MISS as unknown as typeof SRC_NEAR_MISS;
  SRC_REPAIRS = corpus.RESPELL_REPAIRS as unknown[];
} catch (e) {
  SRC_ERROR = e;
}
const noSrc = !SRC;
/** Absent is fine. Present and throwing is not. */
const MISSING_CODES = new Set(['ERR_MODULE_NOT_FOUND', 'MODULE_NOT_FOUND', 'ENOENT']);
const srcMerelyAbsent = !!SRC_ERROR && MISSING_CODES.has((SRC_ERROR as { code?: string }).code ?? '');

/* ═══ 1. The lesson exists, in the shape it claims ═══════════════════════ */

test('a2.02.l1 is in the seed', () => {
  ok(L, 'a2.02.l1 is not in seed.json');
});

test('THE AUTHORED SOURCE EITHER IMPORTS OR IS GENUINELY ABSENT', () => {
  // Half of this file compares the seed against the authored source, and all of
  // that half is `{ skip: noSrc }`. A source that is missing is a checkout
  // without ealch-admin and the skips are correct. A source that THROWS is a
  // broken build, and swallowing it turns forty assertions into silence while the
  // file still reports green. This distinguishes the two.
  ok(
    SRC || srcMerelyAbsent,
    `the authored source threw on import, so every source-derived test in this file silently skipped: ${String(SRC_ERROR)}`,
  );
});

test('the lesson validates and its density is legal', { skip: noLesson }, () => {
  const issues = validateLesson(L!, L!.id);
  strictEqual(issues.length, 0, formatIssues(issues));
  const d = validateDensity(L!, new Set(seed.items.map((i) => i.id)));
  strictEqual(d.length, 0, formatDensity(d));
});

test('the spine is in order', { skip: noLesson }, () => {
  strictEqual(L!.sections.map((s) => (s as { id?: string }).id).join(','), SPINE.join(','));
});

test('the acts hold the sections they claim, and the Owns act is the heaviest', { skip: noLesson }, () => {
  const acts = L!.acts ?? [];
  strictEqual(acts.length, ACTS.length);
  acts.forEach((a, i) => {
    strictEqual(a.id, ACTS[i].id);
    strictEqual(a.sections.length, ACTS[i].n, `${a.id} holds ${a.sections.length} sections, expected ${ACTS[i].n}`);
    for (const s of a.sections) ok(SPINE.includes(s), `${a.id} names ${s}, which is not in the spine`);
  });
  const owns = acts.find((a) => a.id === OWNS_ACT)!;
  const para = acts.find((a) => a.id === PARADIGM_ACT)!;
  ok(
    owns.sections.length > para.sections.length,
    `the Owns act holds ${owns.sections.length} missions and the paradigm act holds ${para.sections.length}.\n`
    + `  The doctrine is explicit: if the act structure gives the paradigm more missions than the Owns, the wrong\n`
    + `  lesson was built. Three irregular paradigms with no argument for them is a memorisation task.`,
  );
  // Every section belongs to exactly one act.
  const claimed = acts.flatMap((a) => a.sections);
  strictEqual(new Set(claimed).size, claimed.length, 'a section is claimed by two acts');
  strictEqual(claimed.length, SPINE.length, 'a section belongs to no act');
});

test('the unit carries the lesson, byte for byte from the database', { skip: noLesson }, () => {
  const u = seed.units.find((x) => x.id === UNIT_ID);
  ok(u, `unit ${UNIT_ID} is not in the seed`);
  strictEqual(u!.title, UNIT_TITLE);
  strictEqual(u!.sub, UNIT_SUB);
  strictEqual(u!.canDo, UNIT_CANDO);
  ok((u!.lessonIds ?? []).includes('a2.02.l1'), `unit ${UNIT_ID} does not list its lesson`);
  ok((u!.prereqUnitIds ?? []).includes('a2.01'), `unit ${UNIT_ID} does not rest on a2.01`);
  // The eyebrow missions.ts computes at render time, against the stored fallback.
  strictEqual(L!.tag, `A2 · LEÇON ${String(u!.seq).padStart(2, '0')}`);
});

/* ═══ 2. THE OWNS: the two jobs, on one screen ═══════════════════════════ */

test('THE TWO USES OF venir de ARE ON ONE SCREEN, BOTH SIDES PRESENT', { skip: noLesson }, () => {
  const s = sec(TWO_JOBS_SECTION);
  ok(s, `${TWO_JOBS_SECTION} is gone, and it is the screen the trap lives on`);
  strictEqual(s!.type, 'tapTable', `${TWO_JOBS_SECTION} must be a tapTable: only a tapTable gives each row its own audio, and a table at layer core is a density failure`);
  const t = s as unknown as { cols: string[]; rows: { cells: string[]; say?: string }[] };
  strictEqual(
    t.rows.length, TWO_JOBS.length,
    `${TWO_JOBS_SECTION} has ${t.rows.length} rows.\n`
    + `  BOTH USES BELONG ON ONE SCREEN. The brief is explicit that separating them destroys the teaching.`,
  );
  strictEqual(t.cols.length, 2, 'the two-job table is two columns');
  // THE SHARED PREFIX IS IN THE HEADER, not in the cells. That is what makes two
  // columns enough, and it is the teaching rendered as a layout.
  ok(t.cols[0].startsWith(SHARED_PREFIX.trim()), `the first column reads ${JSON.stringify(t.cols[0])} and must lead with ${JSON.stringify(SHARED_PREFIX.trim())}`);
  t.rows.forEach((row, i) => {
    strictEqual(row.say, TWO_JOBS[i].fr, `row ${i + 1} plays ${JSON.stringify(row.say)}, expected ${JSON.stringify(TWO_JOBS[i].fr)}`);
    ok(row.cells[0].includes(TWO_JOBS[i].after), `row ${i + 1} does not say what follows de: ${JSON.stringify(row.cells[0])}`);
    ok(row.cells[1].includes(TWO_JOBS[i].job), `row ${i + 1} does not say what the sentence means: ${JSON.stringify(row.cells[1])}`);
    ok(!row.cells[0].includes(SHARED_PREFIX), `row ${i + 1} restates the shared prefix in its cell, which puts the identical half on the screen twice`);
  });
  // AND BOTH KINDS ARE REALLY THERE. A table with two rows of the same job is a
  // table, not a contrast.
  const kinds = new Set(TWO_JOBS.map((j) => j.kind));
  ok(kinds.has('place') && kinds.has('infinitive'), 'both jobs must be present or there is no contrast');
});

test('the two sentences are identical up to de, in the seed', { skip: noLesson }, () => {
  for (const j of TWO_JOBS) {
    const row = seed.items.find((i) => i.fr === j.fr);
    ok(row, `${j.fr} is not in the seed`);
    ok(
      row!.fr.startsWith(SHARED_PREFIX),
      `${JSON.stringify(row!.fr)} does not start with ${JSON.stringify(SHARED_PREFIX)}.\n`
      + `  The whole trap is that the two sentences are the SAME until the word after de. Two rows with different\n`
      + `  subjects compare two subjects as well as two jobs.`,
    );
  }
  // And their respellings agree up to the same point, or the recording teaches a
  // difference the page denies.
  const [a, b] = TWO_JOBS.map((j) => seed.items.find((i) => i.fr === j.fr)!);
  const pre = (r: string) => r.split(' ').slice(0, 3).join(' ');
  strictEqual(pre(a.respell ?? ''), pre(b.respell ?? ''), 'the two jobs respell their shared half differently');
});

test('THE PATTERN HAS A QUOTABLE NAME AND THE UNIT ID IS ON A SCREEN', { skip: noLesson }, () => {
  ok(
    hasPhrase(learnerText, WHAT_FOLLOWS),
    `"${WHAT_FOLLOWS}" appears on no screen.\n`
    + `  a2.18, a2.19 and a2.15 are each told to quote this name and point back at ${WHAT_FOLLOWS_UNIT}. A name that\n`
    + `  lives only in a source file is a name three later lessons will each invent differently.`,
  );
  const carrying = L!.sections.filter((s) => strings(s).some((x) => hasPhrase(x, WHAT_FOLLOWS)));
  ok(carrying.length >= 3, `the pattern name reaches ${carrying.length} sections, expected at least 3`);
  const b = sec(BOUNDARY_SECTION);
  ok(b && strings(b).join('\n').includes(WHAT_FOLLOWS_UNIT), `${BOUNDARY_SECTION} does not carry the unit id ${WHAT_FOLLOWS_UNIT}`);
});

test('the reframe is carried verbatim and is about the construction', { skip: noLesson }, () => {
  const carrying = L!.sections.filter((s) => strings(s).some((x) => x.includes(REFRAME)));
  strictEqual(carrying.length, REFRAME_SECTIONS, `the reframe reaches ${carrying.length} sections, expected ${REFRAME_SECTIONS}`);
  strictEqual(strings(L!).filter((s) => s.includes(REFRAME)).length, REFRAME_APPEARANCES);
  strictEqual(L!.reframe, REFRAME);
  // A reframe naming a verb form would make this three tables with a slogan on
  // top, which is the failure the brief opens by warning about.
  ok(
    !/\b(vais|vas|vont|viens|vient|viennent|tiens|tient|tiennent|allons|allez|venons|venez|tenons|tenez)\b/i.test(REFRAME),
    'the reframe names a verb form, which makes this a memorisation lesson with a slogan on it',
  );
  ok(REFRAME.trim().split(/\s+/).length <= 12, 'a reframe has to survive recall mid-sentence');
});

test('what the Owns is worth is said to the learner', { skip: noLesson }, () => {
  ok(learnerText.includes(TIMELINE), `"${TIMELINE}" appears on no screen, so "a past tense, early" is a claim with nothing behind it`);
  ok(hasPhrase(learnerText, PASSE_COMPOSE_UNIT), `${PASSE_COMPOSE_UNIT} is named nowhere, so the learner is not told where the full past tense is`);
});

/* ═══ 3. THE FUTUR PROCHE IS NOT TAUGHT ═════════════════════════════════ */

test('NO PRODUCTION SURFACE HOLDS aller PLUS AN ACTION', { skip: noLesson }, () => {
  const leaked = PRODUCTION.filter((s) => FUTUR_PROCHE_SHAPE.test(s));
  strictEqual(
    leaked.length, 0,
    `the futur proche reached a production surface: ${[...new Set(leaked)].slice(0, 4).map((s) => JSON.stringify(s)).join(', ')}\n`
    + `  aller followed by an action is ${FUTUR_PROCHE_UNIT}, seq 15, whose prereqUnitIds is ['${UNIT_ID}']. This lesson\n`
    + `  conjugates aller in full, so the temptation is total; if it teaches it, that unit has no lesson.`,
  );
  ok(PRODUCTION.length > 200, 'the production-surface scope collapsed, so the check above passed vacuously');
});

test('no authored aller row puts an action after the verb', { skip: noLesson }, () => {
  const rows = seed.items.filter((i) => i.id >= OWNED_FROM && i.id <= OWNED_TO);
  for (const r of rows) {
    ok(!FUTUR_PROCHE_SHAPE.test(r.fr), `${r.id} "${r.fr}" is a futur proche, and a corpus row is drilled for weeks before ${FUTUR_PROCHE_UNIT} explains it`);
  }
});

test('the boundary is acknowledged by unit id, with no example of it', { skip: noLesson }, () => {
  const b = sec(BOUNDARY_SECTION);
  ok(b, `${BOUNDARY_SECTION} is gone, and with it the acknowledgement that aller has a second job`);
  const t = strings(b).join('\n');
  ok(t.includes(FUTUR_PROCHE_UNIT), `${BOUNDARY_SECTION} does not name ${FUTUR_PROCHE_UNIT}`);
  ok(t.includes(PREPOSITION_UNIT), `${BOUNDARY_SECTION} does not name ${PREPOSITION_UNIT}, so which small word follows aller is left as a rumour`);
  ok(
    !FUTUR_PROCHE_SHAPE.test(t),
    `${BOUNDARY_SECTION} shows the futur proche in order to defer it. One line acknowledging it exists is the ceiling; an example is teaching it.`,
  );
});

test('no passé composé is on a learner surface', { skip: noLesson }, () => {
  const shaped = learnerProse.filter((s) => PASSE_COMPOSE_SHAPE.test(s));
  const phrased = PASSE_COMPOSE_PHRASES.filter((p) => learnerProse.some((s) => hasPhrase(s, p)));
  strictEqual(
    shaped.length + phrased.length, 0,
    `a passé composé is on a learner surface: ${[...shaped.slice(0, 2).map((s) => JSON.stringify(s)), ...phrased].join(', ')}\n`
    + `  This lesson hands the learner a past WITHOUT one, and the full past tense is ${PASSE_COMPOSE_UNIT}.`,
  );
});

/* ═══ 4. THE THREE PARADIGMS, CELL BY CELL ══════════════════════════════ */

test('ALL THREE PARADIGMS ARE IN THE SEED, EVERY CELL', { skip: noLesson }, () => {
  for (const verb of THE_THREE) {
    const frame = FRAMES[verb];
    // BY ID RANGE, not by frame. `Il revient tôt.` shares venir's frame and is a
    // COMPOUND row rather than a paradigm cell, so a filter on the frame alone
    // picks up seven rows for venir and quietly compares the wrong six.
    const [from, to] = PARADIGM_RANGES[verb];
    const rows = seed.items.filter((i) => i.id >= from && i.id <= to).sort((a, b) => a.id.localeCompare(b.id));
    strictEqual(rows.length, PARADIGM.length, `${verb} has ${rows.length} rows in ${from}..${to}, expected ${PARADIGM.length}`);
    for (const r of rows) ok(r.fr.endsWith(frame), `${r.id} "${r.fr}" is not on ${verb}'s frame "${frame}"`);
    PARADIGM.forEach((p, i) => {
      const want = p[verb as 'aller' | 'venir' | 'tenir'];
      ok(
        hasPhrase(rows[i].fr, want),
        `${rows[i].id} "${rows[i].fr}" does not contain the ${verb} form "${want}" for ${p.person}`,
      );
    });
    // AND THE SIX RUN ON ONE FRAME. If they do not, the screen compares six
    // objects as well as six forms.
    strictEqual(new Set(rows.map((r) => r.fr.replace(/^\S+\s+\S+\s*/, ''))).size, 1, `${verb} runs on more than one frame`);
  }
});

test('THE tenir LINK IS REAL, AND IT IS THE ONLY REASON THE VERB IS HERE', { skip: noLesson }, () => {
  // Derived from the paradigm rather than asserted: for every cell, tenir's form
  // is venir's form with its first letter replaced by a t.
  const matches = PARADIGM.filter((r) => r.tenir === `t${r.venir.slice(1)}`);
  strictEqual(
    matches.length, PARADIGM.length,
    `tenir follows venir in ${matches.length} of ${PARADIGM.length} cells.\n`
    + `  Missing: ${PARADIGM.filter((r) => r.tenir !== `t${r.venir.slice(1)}`).map((r) => `${r.person} (${r.venir}/${r.tenir})`).join(', ')}\n`
    + `  If that link is missing, tenir is an arbitrary third verb and the brief says so in its test list.`,
  );
  // AND THE CLAIM IS ON A SCREEN, not only in the data.
  ok(learnerText.includes(TENIR_CLAIM), `"${TENIR_CLAIM}" appears on no screen`);
  const carrying = L!.sections.filter((s) => strings(s).some((x) => x.includes(TENIR_CLAIM)));
  ok(carrying.length >= 2, `the tenir claim reaches ${carrying.length} sections, expected at least 2`);
});

test('aller matches neither of the other two, which is the whole of act 2', { skip: noLesson }, () => {
  const matches = PARADIGM.filter((r) => r.aller === `${r.aller[0]}${r.venir.slice(1)}`);
  strictEqual(matches.length, 0, `aller matches venir's shape in ${matches.map((r) => r.person).join(', ')}, and the lesson says it matches in none`);
  // Four cells from v-, two from all-, and no rule joins them.
  strictEqual(PARADIGM.filter((r) => r.aller.startsWith('v')).length, 4);
  strictEqual(PARADIGM.filter((r) => r.aller.startsWith('all')).length, 2);
});

test('the singular triples are one sound after the pronoun', { skip: noLesson }, () => {
  for (const triple of SINGULAR_TRIPLES) {
    const rows = triple.map((id) => byId.get(id));
    for (const [i, r] of rows.entries()) ok(r, `${triple[i]} is not in the seed`);
    const tails = rows.map((r) => afterPronoun(r!.respell ?? ''));
    strictEqual(
      new Set(tails).size, 1,
      `the singular triple ${triple.join(' / ')} does not sound the same: ${tails.join(' | ')}\n`
      + `  Three spellings and one sound is what makes the dictée the only surface that can test the singular.`,
    );
    strictEqual(new Set(rows.map((r) => r!.fr)).size, 3, 'the triple does not hold three different sentences');
  }
});

test('THE NUMBER PAIRS ARE AUDIBLE, AND ONLY THE VERB MOVES', { skip: noLesson }, () => {
  for (const [sing, plur] of NUMBER_PAIRS) {
    const a = byId.get(sing);
    const b = byId.get(plur);
    ok(a && b, `${sing} / ${plur} does not resolve against the seed`);
    const pa = (a!.respell ?? '').split(' ');
    const pb = (b!.respell ?? '').split(' ');
    strictEqual(pa[0], pb[0], `${sing} and ${plur} respell their pronoun differently, so the learner can answer from the pronoun`);
    ok(pa[1].includes('ⁿ'), `${sing} respells its verb "${pa[1]}" with no nasal; the singular is a nasal vowel with no n released`);
    ok(!pb[1].includes('ⁿ'), `${plur} respells its verb "${pb[1]}" with a nasal; the plural is an ORAL vowel and a real n`);
    ok(pb[1].endsWith('nn'), `${plur} respells its verb "${pb[1]}" without the doubled n`);
    strictEqual(pa.slice(2).join(' '), pb.slice(2).join(' '), `${sing} and ${plur} differ after the verb; only the verb may move`);
  }
  ok(NUMBER_PAIRS.length >= 2, 'the ear mission needs one pair per verb');
});

/* ═══ 5. THE a2.10 LOOP, CLOSED BY SHOWING THE MECHANISM ════════════════ */

test('THE a2.10 BACK-REFERENCE EXISTS AND IS SHOWN, NOT MENTIONED', { skip: noLesson }, () => {
  ok(
    hasPhrase(learnerText, A210_BACKREF),
    `${A210_BACKREF} is named by no section.\n`
    + `  a2.10.l1 named venir and tenir as -ir verbs taking no -iss- and conjugated neither; a2.10.l2 named the\n`
    + `  MECHANISM and handed it here by unit id. This lesson is the payoff of both.`,
  );
  const s = sec(TOT_SECTION);
  ok(s, `${TOT_SECTION} is gone, and with it the screen that closes the loop`);
  strictEqual(s!.type, 'listening', 'the loop is closed by hearing the three plurals, not by reading about them');
  const lines = (s as unknown as { lines: { fr: string }[] }).lines;
  strictEqual(lines.length, TOT_FRAME.length * 2, `${TOT_SECTION} plays ${lines.length} lines, expected three pairs`);
  // EVERY LINE IS ON THE SHARED FRAME WORD. That is the whole reason the screen
  // works, and it is only possible because two neighbours chose the word
  // deliberately so a later lesson could do this.
  for (const l of lines) ok(hasPhrase(l.fr, FRAME_WORD), `${JSON.stringify(l.fr)} is not on the ${FRAME_WORD} frame`);
  // Singular then plural, three times: the ORDER is the mission, because a
  // learner comparing across a gap compares two memories.
  TOT_FRAME.forEach((p, i) => {
    const s1 = byId.get(p.singular);
    const p1 = byId.get(p.plural);
    ok(s1 && p1, `${p.singular} / ${p.plural} is not in the seed`);
    strictEqual(lines[i * 2].fr, s1!.fr, `line ${i * 2 + 1} is not the singular of pair ${i + 1}`);
    strictEqual(lines[i * 2 + 1].fr, p1!.fr, `line ${i * 2 + 2} is not the plural of pair ${i + 1}`);
  });
});

test("the neighbours' four rows are theirs, not twins of theirs", { skip: noLesson }, () => {
  const theirs = TOT_FRAME.filter((p) => !p.mine).flatMap((p) => [p.singular, p.plural]);
  strictEqual(theirs.length, 4);
  for (const id of theirs) {
    const row = byId.get(id);
    ok(row, `${id} is not in the seed, so the cross-lesson screen would draw an empty card`);
    ok(
      !(id >= OWNED_FROM && id <= OWNED_TO),
      `${id} is inside this lesson's own id range, which means a twin was authored rather than the neighbour's row imported.\n`
      + `  A twin puts four performances on the screen instead of four cells.`,
    );
  }
  // And this lesson's own pair really is its own.
  for (const p of TOT_FRAME.filter((x) => x.mine)) {
    ok(p.singular >= OWNED_FROM && p.singular <= OWNED_TO, `${p.singular} is not in this lesson's range`);
    ok(p.plural >= OWNED_FROM && p.plural <= OWNED_TO, `${p.plural} is not in this lesson's range`);
  }
});

/* ═══ 6. THE FAMILY: EVIDENCE HERE, PRINCIPLE AT a2.15 ══════════════════ */

test('AT MOST THREE COMPOUNDS APPEAR, AND THE PRINCIPLE IS NOT TAUGHT', { skip: noLesson }, () => {
  const named = COMPOUNDS.filter((v) => hasPhrase(learnerText, v));
  strictEqual(named.length, COMPOUNDS.length, `compound(s) named by no screen: ${COMPOUNDS.filter((v) => !named.includes(v)).join(', ')}`);
  ok(named.length <= MAX_COMPOUNDS, `${named.length} compounds on a screen, and the brief's ceiling is ${MAX_COMPOUNDS}`);
  // THE FOURTH IS READ AND NAMED NOWHERE.
  ok(
    !hasPhrase(learnerText, READ_ONLY_VERB),
    `"${READ_ONLY_VERB}" is on a learner surface, making a fourth compound against a ceiling of ${MAX_COMPOUNDS}`,
  );
  ok(!L!.itemIds.includes(READ_ONLY_ID), `${READ_ONLY_ID} (${READ_ONLY_VERB}) is in itemIds and is released to nothing`);
  // AND THE PRINCIPLE ITSELF IS NOT STATED.
  const PRINCIPLE = ['every compound', 'all compounds', 'any compound', 'compounds always', 'the rule is that compounds'];
  const stated = PRINCIPLE.filter((p) => hasPhrase(learnerText, p));
  strictEqual(stated.length, 0, `the family principle is stated: ${stated.join(', ')}. That is ${FAMILY_UNIT}'s Owns; here the compounds are evidence only.`);
  const card = sec(FAMILY_SECTION);
  ok(card && strings(card).join('\n').includes(FAMILY_UNIT), `${FAMILY_SECTION} does not say where the family principle is taught`);
});

/* ═══ 7. The respellings the shared checker cannot see ══════════════════ */

test('every authored respelling passes the shared nasal checker', { skip: noLesson }, () => {
  for (const i of seed.items) {
    if (i.id < OWNED_FROM || i.id > OWNED_TO) continue;
    if (!i.respell) continue;
    ok(!hasPlainNasalFor(i.fr, i.respell), `${i.id} "${i.fr}" closes a nasal with a plain n or m: ${i.respell}`);
  }
});

test('THE WORD-INTERNAL NASAL IS ASSERTED BY NAME, AND THE BLINDNESS RE-CONFIRMED', { skip: noLesson }, () => {
  for (const b of BLIND_NASALS) {
    const row = byId.get(b.id);
    ok(row, `${b.id} is not in the seed`);
    ok(row!.respell?.includes(b.must), `${b.id} must respell with "${b.must}"; the checker cannot see this one`);
    // The blindness itself, so the day the checker improves this fails rather
    // than carrying a dead by-name list.
    const broken = row!.respell!.replace(b.must, b.broken);
    ok(
      !hasPlainNasalFor(row!.fr, broken),
      `hasPlainNasalFor now catches the word-internal nasal in ${b.id} ("${broken}"). Update invariants §3 and drop the by-name list.`,
    );
  }
});

test('THE DOUBLED N IS A REAL CONSONANT, AND THAT BLINDNESS IS DIFFERENT', { skip: noLesson }, () => {
  // `viennent` /vjɛn/ and `tiennent` /tjɛn/ have NO nasal vowel at all. The
  // checker short-circuits on the `nn` in the FRENCH spelling
  // (density.logic.ts:215), so it returns false for any respelling of them,
  // including a single-n one that reads as a nasal to an English eye. The brief
  // describes this as the word-internal case and it is not.
  for (const d of DOUBLE_N) {
    const row = byId.get(d.id);
    ok(row, `${d.id} is not in the seed`);
    ok(row!.respell?.includes(d.must), `${d.id} must respell with "${d.must}"`);
    ok(/(?:nn|mm)/i.test(row!.fr), `${d.id} "${row!.fr}" carries no doubled n in the FRENCH spelling, so this is not what is hiding it`);
    const single = row!.respell!.replace(d.must, d.singleN);
    ok(
      !hasPlainNasalFor(row!.fr, single),
      `hasPlainNasalFor now flags the single-n "${single}" for ${d.id}. The doubled-n short-circuit has changed and the by-name list can go.`,
    );
  }
});

test('the nasal checker has not gone quiet altogether', () => {
  // A POSITIVE CONTROL. Every "not flagged" result above is worthless if the
  // checker no longer flags anything.
  ok(hasPlainNasalFor('bon', 'BOHN'), 'hasPlainNasalFor no longer flags a plain-n nasal, so every negative result in this file is meaningless');
});

test('this build repairs nothing, and that was measured', { skip: noSrc }, () => {
  // Not one of the six naming forms carries a nasal vowel: ah-LAY, vuh-NEER,
  // tuh-NEER, ruh-vuh-NEER, duh-vuh-NEER, ohb-tuh-NEER. This is the first build
  // in the band that can say so, and it is asserted rather than left as a note.
  strictEqual(SRC_REPAIRS.length, 0, 'a respelling repair has appeared; the corpus header says none of the six naming forms carries a nasal vowel');
  for (const r of SRC_IMPORTED) {
    if (r.kind === 'sentence' || !r.respell) continue;
    ok(!/[ⁿ]/.test(r.respell), `${r.id} "${r.fr}" carries a superscript, so the "no naming form has a nasal" claim needs re-measuring`);
  }
});

/* ═══ 8. a1.03 does not move ════════════════════════════════════════════ */

test('NOTHING THIS LESSON WRITES JOINS a1.03 ENDING POPULATION', { skip: noLesson }, () => {
  const mine = seed.items.filter((i) => i.id >= OWNED_FROM && i.id <= OWNED_TO);
  strictEqual(endingPopulation(mine).length, 0, 'an authored row joins a1.03 ending population');
  // AND THE CARRIED ROWS TOO. `devenir` has a gendered twin at
  // fr.b2.philosophie.136 which is `le devenir`, a NOUN; importing that row
  // instead would have moved twenty printed figures in a1-03-genre.test.ts.
  const carried = ['fr.sons.verbes-essentiels.003', 'fr.sons.verbes-essentiels.010', 'fr.sons.verbes-essentiels.052',
    'fr.sons.verbes-essentiels.084', 'fr.sons.verbes-essentiels.083', 'fr.a2.examens-et-diplomes.038']
    .map((id) => byId.get(id)).filter(Boolean) as Item[];
  strictEqual(carried.length, 6, 'a carried naming form is not in the seed, so its card would draw empty');
  strictEqual(endingPopulation(carried).length, 0, 'a carried row joins a1.03 ending population');
  for (const r of carried) ok(!r.gender, `${r.id} "${r.fr}" carries a gender. A naming form is not a noun.`);
});

/* ═══ 9. The dictée ═════════════════════════════════════════════════════ */

test('every dictée target spells from LETTERS, through the real dicteeMode', { skip: noLesson }, () => {
  const d = L!.sections.find((s) => s.type === 'dictation');
  ok(d, 'no dictation section');
  const ids = (d as unknown as { itemIds: string[] }).itemIds;
  strictEqual(ids.length, EXPECTED_DICTATION);
  for (const id of ids) {
    const it = byId.get(id);
    ok(it, `dictée target ${id} is not in the seed`);
    strictEqual(
      dicteeMode(it!.fr), 'letters',
      `${id} "${it!.fr}" is in word mode, which hands every real word over pre-spelled and so cannot test a spelling`,
    );
    ok((it!.drills ?? []).includes('dictation'), `${id} carries no dictation drill`);
  }
});

test('THE DICTÉE GRADES THE DROPPED de, AND NAMES WHAT IT CANNOT GRADE', { skip: noSrc }, () => {
  // Run through the REAL normalizeFr in both directions, so that if fold is ever
  // fixed this fails instead of quietly going stale. a2.09's shape, copied.
  const d = L!.sections.find((s) => s.type === 'dictation');
  const ids = (d as unknown as { itemIds: string[] }).itemIds;
  strictEqual(SRC_NEAR_MISS.length, ids.length, 'every target needs the error a learner would actually make against it');
  for (const n of SRC_NEAR_MISS) {
    const it = byId.get(n.id);
    ok(it, `DICTEE_NEAR_MISS names ${n.id}, which is not in the seed`);
    strictEqual(
      normalizeFr(it!.fr) !== normalizeFr(n.wrong), n.scorable,
      `${n.id} is marked scorable: ${n.scorable} and normalizeFr says otherwise ("${it!.fr}" vs "${n.wrong}")`,
    );
  }
  const theOne = SRC_NEAR_MISS.find((n) => n.wrong === 'Je viens manger.');
  ok(theOne?.scorable, 'the dictée no longer grades the dropped de, and that is the error the lesson exists to stop');
  // AND THE LIMIT IS NAMED. fold() strips case, so a capital cannot be tested by
  // any typed surface. Both a1.08 and a1.09 recommended one before it was
  // measured.
  const unscorable = SRC_NEAR_MISS.filter((n) => !n.scorable);
  strictEqual(unscorable.length, 1, 'expected exactly one unscorable target, the capital on Paris');
  strictEqual(normalizeFr('Je viens de Paris.'), normalizeFr('Je viens de paris.'), 'fold no longer strips case, so the capital could now be tested');
});

/* ═══ 10. The quiz ══════════════════════════════════════════════════════ */

test('the quiz is one section, five rounds, thirty questions, every one with a why', { skip: noLesson }, () => {
  strictEqual(L!.sections.filter((s) => s.type === 'quiz').length, 1, 'the pager renders exactly one quiz');
  const quiz = L!.sections.find((s) => s.type === 'quiz')!;
  strictEqual((quiz as unknown as { rounds: unknown[] }).rounds.length, EXPECTED_ROUNDS);
  const qs = quizQuestions(quiz as never);
  strictEqual(qs.length, EXPECTED_QUESTIONS);
  const ids = new Set(SPINE);
  for (const q of qs) {
    ok(q.why, `question has no why: ${q.q}`);
    ok(q.ref && ids.has(q.ref), `question ref "${q.ref}" names no section: ${q.q}`);
    if (q.opts) strictEqual(new Set(q.opts).size, q.opts.length, `duplicate option in: ${q.q}`);
  }
  strictEqual(qs.filter((q) => q.format === 'mcq').length * 2 <= qs.length, true, 'over half the questions are mcq');
});

test('every free-text question accepts the answer it displays', { skip: noLesson }, () => {
  const quiz = L!.sections.find((s) => s.type === 'quiz')!;
  for (const q of quizQuestions(quiz as never)) {
    if (!['typeIn', 'errorSpot'].includes(q.format ?? '')) continue;
    ok(matchesAccept(q.answer ?? '', q.accept ?? []), `free-text question does not accept its own answer: ${q.answer}`);
  }
});

test('THE QUIZ WEIGHT IS ON THE OWNS, NOT ON THE TABLES', { skip: noLesson }, () => {
  const quiz = L!.sections.find((s) => s.type === 'quiz')!;
  const qs = quizQuestions(quiz as never);
  const owns = qs.filter((q) => {
    // `target` is in here because a `speak` question carries its French there and
    // nowhere else.
    const t = `${q.q} ${q.answer ?? ''} ${q.target ?? ''} ${(q.accept ?? []).join(' ')} ${(q.opts ?? []).join(' ')}`;
    return /\b(vien|ven)\w*\s+(de|d['’])/i.test(t) || /___\s+(de|d['’])\b/i.test(t) || /\b(after|follows|following)\s+de\b/i.test(t);
  });
  ok(
    owns.length * 2 >= qs.length,
    `only ${owns.length} of ${qs.length} quiz questions touch venir de.\n`
    + `  The Owns is the timeline and the paradigms are the scaffolding. A quiz weighted the other way is the\n`
    + `  memorisation lesson the brief opens by warning about.`,
  );
  // AND THE TRAP IS TESTED WHERE IT CAN BE. The brief is explicit: errorSpot and
  // typeIn, because an mcq shows the learner the answer.
  const typed = qs.filter((q) => ['typeIn', 'errorSpot'].includes(q.format ?? ''));
  const typedOwns = typed.filter((q) => /\bde\b/i.test(`${q.answer ?? ''} ${(q.accept ?? []).join(' ')}`));
  ok(typedOwns.length >= 3, `only ${typedOwns.length} typed questions make the learner supply or keep the de`);
  const listen = qs.filter((q) => q.format === 'listenChoose').length;
  ok(listen >= 2 && listen <= 5, `${listen} listenChoose questions; the brief asks for one or two and the ear settles only the number here`);
  ok(typed.length > listen * 2, `${typed.length} typed against ${listen} listenChoose; the written half has to carry this quiz`);
});

test('NO EAR QUESTION ASKS BETWEEN TWO FORMS THAT ARE ONE SOUND', { skip: noLesson }, () => {
  const quiz = L!.sections.find((s) => s.type === 'quiz')!;
  const bad: string[] = [];
  for (const q of quizQuestions(quiz as never)) {
    if (q.format !== 'listenChoose') continue;
    ok(q.say, `listenChoose without a say, so ListenChooseCard speaks opts[correct]: ${q.q}`);
    const opts = q.opts ?? [];
    for (let i = 0; i < opts.length; i++) {
      for (let j = i + 1; j < opts.length; j++) {
        for (const group of HOMOPHONE_FORMS) {
          for (const x of group) for (const y of group) {
            if (x !== y && opts[i].replace(x, y) === opts[j]) bad.push(`"${q.q}" offers ${JSON.stringify(opts[i])} against ${JSON.stringify(opts[j])}`);
          }
        }
      }
    }
  }
  strictEqual(bad.length, 0, `ear question(s) whose options are the same sound:\n    ${[...new Set(bad)].join('\n    ')}\n  No recording separates viens from vient, or vas from va.`);
});

test('every gap question fixes the person, and every venir de gap fixes the use', { skip: noLesson }, () => {
  const SUBJECTS = ['je', 'tu', 'il', 'elle', 'on', 'nous', 'vous', 'ils', 'elles', 'le', 'la', 'les'];
  const quiz = L!.sections.find((s) => s.type === 'quiz')!;
  const gap = quizQuestions(quiz as never).filter((q) => q.q.includes('___'));
  ok(gap.length >= 6, `only ${gap.length} gap questions`);
  for (const q of gap) {
    ok(/\([a-zà-ÿ]+(er|ir|re|oir)\)/i.test(q.q), `no naming form in the stem, so the question has no single answer: ${q.q}`);
    ok(SUBJECTS.includes(q.q.trim().split(/\s+/)[0].toLowerCase()), `no subject at the head of the stem: ${q.q}`);
  }
  // "Je viens de ___" with no further context has two valid completions and no
  // single answer. The brief says so explicitly.
  const ambiguous = quizQuestions(quiz as never).filter((q) => /\bde\s+___/i.test(q.q) && !/\([a-zà-ÿ]+(er|ir|re|oir)\)/i.test(q.q));
  strictEqual(ambiguous.length, 0, `question(s) whose gap follows de with nothing to fix which use is meant: ${ambiguous.map((q) => q.q).join(' | ')}`);
});

test('the in-mission answer slots are spread, and nothing shuffles them', { skip: noLesson }, () => {
  // MissionRich renders q.opts.map in AUTHORED order.
  const inMission: { section: string; correct: number }[] = [];
  for (const s of L!.sections) {
    const sid = (s as { id?: string }).id ?? '?';
    if (s.type === 'groupDrill') for (const g of s.groups) if (g.check) inMission.push({ section: sid, correct: g.check.correct });
    if (s.type === 'listening') for (const q of s.questions) inMission.push({ section: sid, correct: q.correct });
    if (s.type === 'trapDrill') for (const d of s.drill) inMission.push({ section: sid, correct: d.correct });
  }
  ok(inMission.length > 10, 'the in-mission scope collapsed, so the spread check passed vacuously');
  const slots = new Map<number, number>();
  for (const q of inMission) slots.set(q.correct, (slots.get(q.correct) ?? 0) + 1);
  for (const [s, c] of slots) ok((c / inMission.length) * 100 <= 40, `in-mission slot ${s} holds ${Math.round((c / inMission.length) * 100)}%, over 40`);
  let prev: { section: string; correct: number } | null = null;
  for (const q of inMission) {
    ok(!(prev && prev.section === q.section && prev.correct === q.correct), `${q.section}: consecutive in-mission questions share slot ${q.correct}`);
    prev = q;
  }
});

test('every drill is reachable: drillForRound stops at the first resolving target', { skip: noLesson }, () => {
  const quiz = L!.sections.find((s) => s.type === 'quiz')!;
  const rounds = (quiz as unknown as { rounds: { targets?: string[] }[] }).rounds;
  const triggers = L!.errorTriggers ?? [];
  strictEqual(triggers.length, EXPECTED_TRIGGERS);
  const fired = new Set<string>();
  for (const r of rounds) {
    const t = (r.targets ?? []).find((x) => triggers.some((e) => e.id === x && e.drill));
    if (t) fired.add(t);
  }
  const orphans = triggers.filter((e) => e.drill && !fired.has(e.id)).map((e) => e.id);
  strictEqual(orphans.length, 0, `trigger(s) whose drill no round can fire: ${orphans.join(', ')}`);
  // Every drill and retest a trigger names really exists.
  const drillIds = new Set((L!.drills ?? []).map((d) => d.id));
  for (const t of triggers) {
    if (t.drill) ok(drillIds.has(t.drill), `${t.id} names drill ${t.drill}, which does not exist`);
    if (t.retest) ok(drillIds.has(t.retest), `${t.id} names retest ${t.retest}, which does not exist`);
  }
});

/* ═══ 11. Items, tranches and screens ═══════════════════════════════════ */

test('every itemId resolves, and 29 of them are this lesson own', { skip: noLesson }, () => {
  strictEqual(L!.itemIds.length, EXPECTED_ITEMS);
  for (const id of L!.itemIds) ok(byId.get(id), `itemId ${id} does not resolve against the seed, so its card draws empty`);
  const mine = L!.itemIds.filter((id) => id >= OWNED_FROM && id <= OWNED_TO);
  strictEqual(mine.length, EXPECTED_AUTHORED);
});

test('tranches release every item exactly once, and nothing untaught', { skip: noLesson }, () => {
  const tranche = L!.deckTranche ?? [];
  strictEqual(tranche.length, (L!.acts ?? []).length, 'tranches and acts are index-aligned');
  const seen = new Set<string>();
  for (const [i, slice] of tranche.entries()) {
    for (const id of slice) {
      ok(!seen.has(id), `${id} is released twice, in tranche ${i}`);
      seen.add(id);
      ok(L!.itemIds.includes(id), `tranche ${i} releases ${id}, which is not in itemIds`);
    }
  }
  const never = L!.itemIds.filter((id) => !seen.has(id));
  strictEqual(never.length, 0, `item(s) no tranche releases: ${never.join(', ')}`);
});

test('EVERY ITEM IS ON A SCREEN, not merely resolvable', { skip: noLesson }, () => {
  // a1.08 declared 43 itemIds that resolved perfectly and were drawn by nothing.
  const shown = new Set<string>();
  for (const s of L!.sections) {
    if (s.type === 'groupDrill') for (const g of s.groups) for (const it of g.items ?? []) if (it.itemId) shown.add(it.itemId);
    if (s.type === 'practice') for (const id of s.itemIds ?? []) shown.add(id);
    if (s.type === 'dictation') for (const id of s.itemIds ?? []) shown.add(id);
  }
  for (const d of L!.drills ?? []) for (const it of (d as { items?: string[] }).items ?? []) shown.add(it);
  const orphan = L!.itemIds.filter((id) => !shown.has(id));
  strictEqual(orphan.length, 0, `item(s) declared, resolvable and drawn by nothing: ${orphan.join(', ')}`);
});

test('every speak target carries voiceflash', { skip: noLesson }, () => {
  const p = L!.sections.find((s) => s.type === 'practice');
  ok(p, 'no practice section');
  for (const id of (p as unknown as { itemIds: string[] }).itemIds) {
    const it = byId.get(id);
    ok(it, `speak target ${id} is not in the seed`);
    ok((it!.drills ?? []).includes('voiceflash'), `speak target ${id} carries no voiceflash, so the mic-scored deck cannot score it`);
  }
});

test('no duplicate fr among non-sentence rows in the themes this lesson carries', { skip: noLesson }, () => {
  // flashhub-coverage treats two rows sharing an `fr` in one theme as one card
  // served twice. Every authored row here is a sentence, so the risk is in the
  // carried naming forms.
  const themes = new Set(['verbes', 'verbes-essentiels', 'examens-et-diplomes']);
  const seen = new Map<string, string>();
  for (const i of seed.items) {
    if (i.kind === 'sentence' || !themes.has(i.theme)) continue;
    const key = `${i.theme}${i.fr}`;
    const prev = seen.get(key);
    ok(!prev, `${i.theme} "${i.fr}": ${prev} and ${i.id}`);
    seen.set(key, i.id);
  }
});

/* ═══ 12. The layout traps and the house rules ══════════════════════════ */

test('ONE table, ONE tapTable, and the tapTable is the Owns', { skip: noLesson }, () => {
  const taps = L!.sections.filter((s) => s.type === 'tapTable');
  strictEqual(taps.length, 1, 'one tapTable in the flow');
  strictEqual((taps[0] as { id?: string }).id, TWO_JOBS_SECTION, 'the per-row audio belongs to the Owns');
  strictEqual(L!.sections.filter((s) => s.type === 'table').length, 0, 'a table at layer core is a table-in-core density failure');
});

test('ONE reference sheet, and it holds the single grid the brief asked for', { skip: noLesson }, () => {
  const sheets = L!.sheets ?? [];
  strictEqual(sheets.length, EXPECTED_SHEETS);
  const sh = sheets.find((s) => s.id === SHEET_ID);
  ok(sh, `${SHEET_ID} is gone`);
  // ReferenceSheet.tsx draws teach, letterGrid and table and NOTHING else. A
  // cheatSheet in here would draw its title and no rows, which a1.13 ships today.
  const RENDERS = new Set(['teach', 'letterGrid', 'table']);
  for (const s of sh!.sections ?? []) ok(RENDERS.has(s.type), `${SHEET_ID} holds a ${s.type} section, which the sheet renderer does not draw`);
  // THE SINGLE GRID: all three verbs side by side rather than three tables,
  // because the point is that two are one shape and one is not.
  const grid = (sh!.sections ?? []).find((s) => (s as { id?: string }).id === 'sheet-three-verbs');
  ok(grid && grid.type === 'table', `${SHEET_ID} no longer holds the three-verb grid`);
  const g = grid as unknown as { cols: string[]; rows: string[][] };
  strictEqual(g.cols.length, THE_THREE.length + 1, 'a pronoun column and one per verb');
  strictEqual(g.rows.length, PARADIGM.length);
  PARADIGM.forEach((r, i) => {
    strictEqual(g.rows[i].join('|'), [r.person, r.aller, r.venir, r.tenir].join('|'), `grid row ${i + 1} has drifted from the paradigm`);
  });
  // And the sheet is reachable.
  ok(L!.sections.some((s) => (s as { sheetId?: string }).sheetId === SHEET_ID), 'no section links to the sheet');
});

test('commonErrors carries swipe, or it draws a blank screen', { skip: noLesson }, () => {
  const e = L!.sections.find((s) => s.type === 'commonErrors');
  ok(e, 'no commonErrors section');
  strictEqual((e as unknown as { swipe?: boolean }).swipe, true, 'a1.01 mission 5 drew a blank screen for exactly this reason');
});

test('the reading glossary keys really match, through the real segmenter', { skip: noLesson }, () => {
  const r = L!.sections.find((s) => s.type === 'reading');
  ok(r, 'no reading section');
  const rr = r as unknown as { text: string; glossary?: { word: string }[]; questionsInModal?: boolean; questions?: unknown[] };
  // A reading section reaches the glossary renderer ONLY with this flag AND
  // questions.
  strictEqual(rr.questionsInModal, true, 'reading without questionsInModal never reaches the glossary renderer');
  ok((rr.questions ?? []).length > 0, 'reading with questionsInModal and no questions renders nothing');
  // PassagePage splits on sentence boundaries, so an authored newline is
  // swallowed. One block.
  ok(!rr.text.includes('\n'), 'the passage carries a newline, which PassagePage discards');
  // The REAL matcher, comparing matched KEYS rather than matched text. A key of
  // five or more words can never match (MAX_GLOSS_WORDS is four), and
  // longest-match-first means a short entry inside a longer one underlines
  // nothing.
  const keySet = new Set((rr.glossary ?? []).flatMap((g) => glossKeys(g.word)));
  const matched = new Set<string>();
  for (const seg of segmentSentence(rr.text, keySet)) if (seg.key) matched.add(seg.key);
  for (const g of rr.glossary ?? []) {
    ok(g.word.trim().split(/\s+/).length <= MAX_GLOSS_WORDS, `glossary key "${g.word}" is longer than MAX_GLOSS_WORDS`);
    ok(glossKeys(g.word).some((k) => matched.has(k)), `glossary key "${g.word}" underlines nothing in the passage`);
  }
});

test('no grammar vocabulary on any learner surface, INCLUDING intro and overview', { skip: noLesson }, () => {
  // a2.11 shipped "third person" in `intro` at v1, drawn on the lesson overview
  // card AND the lesson cover, because every guard in the band walked
  // sections + sheets + terms and nothing looked at it. Ledger §0.
  const hits = JARGON.filter((j) => hasPhrase(learnerText, j));
  strictEqual(hits.length, 0, `grammar vocabulary reached a learner surface: ${hits.join(', ')}`);
  ok(L!.intro, 'the lesson has no intro, and it is drawn on two learner surfaces');
  const inIntro = JARGON.filter((j) => hasPhrase(L!.intro ?? '', j));
  strictEqual(inIntro.length, 0, `grammar vocabulary in Lesson.intro: ${inIntro.join(', ')}`);
  ok(/past/i.test(L!.intro ?? ''), 'Lesson.intro does not mention the past, and the Owns is the reason to start this lesson');
});

test('the house copy rules hold', { skip: noLesson }, () => {
  for (const s of strings(L!)) {
    ok(!s.includes('—'), `em dash in ${JSON.stringify(s.slice(0, 60))}`);
    ok(!/\bhonest(y|ly)?\b/i.test(s), `"honest" in ${JSON.stringify(s.slice(0, 60))}`);
    ok(!s.includes('‿'), 'U+203F renders as a low underscore on a Pixel 6');
  }
  ok(!JSON.stringify(L!).includes('"autoplay"'), 'autoplay is declared in schema.ts and implemented in no component');
  ok(!JSON.stringify(L!).includes('"imageRef"'), 'lesson-contract.test.ts does not check imageRef and an unregistered ref draws a blank box');
});

test('at most three term chips per section', { skip: noLesson }, () => {
  for (const s of L!.sections) {
    const t = (s as { terms?: string[] }).terms ?? [];
    ok(t.length <= 3, `${(s as { id?: string }).id} declares ${t.length} term chips and the renderer shows three`);
    for (const k of t) ok(L!.terms?.[k], `${(s as { id?: string }).id} names term "${k}", which is not declared`);
  }
});

test('the nous/on statement is a2.01 constant and has exactly one home', { skip: noLesson }, () => {
  ok(learnerText.includes(NOUS_ON), 'the nous/on statement no longer appears verbatim; the ledger binds all twenty A2 lessons to a2.01 wording');
  const holders = L!.sections.filter((s) => strings(s).some((x) => x.includes(NOUS_ON))).map((s) => (s as { id?: string }).id);
  strictEqual(holders.join(','), NOUS_ON_SECTION, `the nous/on statement is in ${JSON.stringify(holders)}, expected exactly [${NOUS_ON_SECTION}]`);
});

test('the scene break card fits a Pixel 6', { skip: noLesson }, () => {
  // BUDGETED, not chosen. `scene` is absent from ownsLayout(), so the card cannot
  // size itself, and a2.01 took three device passes to establish what fits.
  // Ledger §7.
  const s = L!.sections.find((x) => x.type === 'scene');
  ok(s, 'no scene section');
  const beats = (s as unknown as { beats: Record<string, unknown>[] }).beats;
  const brk = beats.find((b) => b.kind === 'break') as {
    heading?: string; body?: string; coach?: string;
    wrong?: { en?: string }; right?: { en?: string };
  } | undefined;
  ok(brk, 'the scene has no break card');
  ok((brk!.heading ?? '').length <= 16, `the break heading is ${(brk!.heading ?? '').length} characters; it wraps at about twelve and every wrapped line costs about 85px`);
  // 26 WORDS, TIGHTENED FROM 34 AFTER A DEVICE PASS. At 33 words, with an `ipa`
  // on the right row as well as a respell, the card's own Continue sat below the
  // fold on first paint. The looser figure passed and the card was still wrong.
  const words = (brk!.body ?? '').trim().split(/\s+/).length;
  ok(words <= 26, `the break body is ${words} words; the measured budget is about 26 and Continue drops below the fold past it`);
  ok((brk!.coach ?? '').trim().split(/\s+/).length <= 9, 'the coach line is over nine words');
  ok((brk!.wrong?.en ?? '').length <= 26, `the wrong gloss is ${(brk!.wrong?.en ?? '').length} characters; over about 24 it takes two lines`);
  ok((brk!.right?.en ?? '').length <= 26, `the right gloss is ${(brk!.right?.en ?? '').length} characters`);
  // AND THE READING ROWS CARRY THE VERB PHRASE ONLY. Ledger §7: a right-hand row
  // with both `ipa` and `respell` is four lines on its own, and `ipa` is REQUIRED
  // by the schema, so the sentence was the only line left to save. With the
  // shared « Non merci, » in front, both rows wrapped to two lines each and the
  // card's own Continue sat below the fold on first paint.
  for (const side of ['wrong', 'right'] as const) {
    const row = brk![side] as { fr?: string } | undefined;
    const n = (row?.fr ?? '').length;
    ok(n > 0 && n <= 22, `the ${side} reading row is ${n} characters and wraps past about 22, which costs a line the card does not have`);
  }
});

/* ═══ 13. Seed against authored source ══════════════════════════════════ */

test('the seed lesson matches the authored source', { skip: noSrc || noLesson }, () => {
  strictEqual(L!.version, SRC!.version);
  strictEqual(L!.sections.length, SRC!.sections.length);
  strictEqual(L!.itemIds.length, SRC!.itemIds.length);
  strictEqual(L!.reframe, SRC_REFRAME);
  strictEqual(REFRAME, SRC_REFRAME, 'this test file and the source disagree about the reframe');
  strictEqual(WHAT_FOLLOWS, SRC_WHAT_FOLLOWS, 'this test file and the source disagree about the pattern name');
  strictEqual(TENIR_CLAIM, SRC_TENIR_CLAIM, 'this test file and the source disagree about the tenir claim');
  strictEqual(TIMELINE, SRC_TIMELINE, 'this test file and the source disagree about what the Owns is worth');
  strictEqual(NOUS_ON, SRC_NOUS_ON, "this test file and a2.01's constant disagree");
});

test('every authored row reached the seed unchanged', { skip: noSrc }, () => {
  strictEqual(SRC_AUTHORED.length, EXPECTED_AUTHORED);
  for (const a of SRC_AUTHORED) {
    const s = byId.get(a.id);
    ok(s, `${a.id} was authored and is not in the seed`);
    strictEqual(s!.fr, a.fr, `${a.id} fr differs between source and seed`);
    strictEqual(s!.respell ?? null, a.respell ?? null, `${a.id} respell differs between source and seed`);
    strictEqual(s!.en, a.en, `${a.id} en differs between source and seed`);
    strictEqual((s!.drills ?? []).slice().sort().join(), (a.drills ?? []).slice().sort().join(), `${a.id} drills differ`);
    strictEqual(s!.theme, 'verbes');
    strictEqual(s!.level, 'a2', 'doctrine §C: everything authored here is a2');
    strictEqual(s!.kind, 'sentence', 'only sentences and naming forms are corpus rows; a bare conjugated form is a card with no subject');
    ok(!s!.gender, `${a.id} carries a gender`);
    // ≤ 14 words, doctrine §C.
    ok(a.fr.trim().split(/\s+/).length <= 14, `${a.id} runs over the A2 sentence budget: "${a.fr}"`);
  }
});

test('every imported row was carried into the seed', { skip: noSrc }, () => {
  // The seed is a CUT. a2.11 found that NEITHER of the two rows its lesson leaned
  // on hardest was in it, and a lesson whose itemIds resolve to nothing renders
  // empty cards on a device.
  strictEqual(SRC_IMPORTED.length, 10, 'six naming forms and four sentences');
  for (const r of SRC_IMPORTED) {
    const s = byId.get(r.id);
    ok(s, `${r.id} is imported and was not carried into the seed`);
    strictEqual(s!.fr, r.fr, `${r.id} fr differs between the manifest and the seed`);
  }
  // AND THE READ-ONLY ROW WAS NOT CARRIED BY THIS BUILD.
  strictEqual(SRC_READ_ONLY_IDS.length, 1);
  for (const id of SRC_READ_ONLY_IDS) ok(!L!.itemIds.includes(id), `${id} is read-only and is in itemIds`);
});

test('the source lists agree with the seed', { skip: noSrc || noLesson }, () => {
  strictEqual(SRC_PARADIGM.map((r) => [r.person, r.aller, r.venir, r.tenir].join('|')).join(','),
    PARADIGM.map((r) => [r.person, r.aller, r.venir, r.tenir].join('|')).join(','),
    'this test file and the source disagree about the paradigm');
  strictEqual(SRC_TENIR_FOLLOWS.length, PARADIGM.length, 'the source no longer derives the tenir link for every cell');
  strictEqual(SRC_TWO_JOBS.map((j) => j.kind).join(','), TWO_JOBS.map((j) => j.kind).join(','));
  strictEqual(SRC_COMPOUNDS.join(','), COMPOUNDS.join(','));
  strictEqual(SRC_THREE.join(','), THE_THREE.join(','));
  strictEqual(SRC_ITEM_IDS.length, L!.itemIds.length);
  strictEqual(SRC_DICTATION.length, EXPECTED_DICTATION);
  ok(SRC_SPEAK.length > 0);
});

test('BOTH STRUCTURAL GUARDS ACTUALLY FIRE', () => {
  // A regex that matches nothing passes every scan silently. The passé composé
  // one SHIPPED BROKEN and was found by mutation-testing: it ended with `\b`
  // after `é`, and `\b` in JavaScript is ASCII-only, so it never fired on a real
  // participle. Invariants §0 records that exact trap. Both are now pinned
  // against known positives AND known negatives, because the negatives are what
  // stop the next author from deleting a guard that shouts at ordinary English.
  for (const x of ['Il a mangé.', 'Elle a parlé au voisin', 'ils ont regardé', "j'ai regardé la télé"]) {
    ok(PASSE_COMPOSE_SHAPE.test(x), `PASSE_COMPOSE_SHAPE does not match ${JSON.stringify(x)}, so the guard using it scans for nothing`);
  }
  for (const x of ['as a bit of it', 'a visit to the shop', 'Nous venons de manger.', 'a naming form']) {
    ok(!PASSE_COMPOSE_SHAPE.test(x), `PASSE_COMPOSE_SHAPE fires on ${JSON.stringify(x)}, which is ordinary English`);
  }
  for (const x of ['Je vais manger.', 'ils vont partir', 'nous allons vendre la maison']) {
    ok(FUTUR_PROCHE_SHAPE.test(x), `FUTUR_PROCHE_SHAPE does not match ${JSON.stringify(x)}`);
  }
  for (const x of ['Je vais au parc.', 'Nous allons au parc.', 'il va bien']) {
    ok(!FUTUR_PROCHE_SHAPE.test(x), `FUTUR_PROCHE_SHAPE fires on ${JSON.stringify(x)}, which is this lesson own content`);
  }
});

test('EVERY HAND-TYPED promptSound IS A REAL ROW RESPELLING', { skip: noLesson }, () => {
  // FOUND BY MUTATION-TESTING. A trapDrill card's promptSound is the sound of the
  // sentence the learner is being tempted towards, which is a DIFFERENT row from
  // the card's own fr, so it cannot be derived and all four are typed by hand.
  // Nothing checked them, and a drifted value taught a respelling the corpus does
  // not hold while every other gate stayed green.
  const respells = new Set(
    seed.items.filter((i) => i.id >= OWNED_FROM && i.id <= OWNED_TO).map((i) => i.respell).filter(Boolean) as string[],
  );
  let n = 0;
  for (const s of L!.sections) {
    if (s.type !== 'trapDrill') continue;
    for (const [i, card] of (s.cards ?? []).entries()) {
      const c = card as { promptSound?: string; fr?: string };
      if (!c.promptSound) continue;
      n += 1;
      ok(respells.has(c.promptSound), `trapDrill card ${i + 1} carries promptSound ${JSON.stringify(c.promptSound)}, which is not any authored row respelling`);
      const own = seed.items.find((x) => x.fr === c.fr);
      ok(!own || own.respell !== c.promptSound, `trapDrill card ${i + 1} plays its own sound as the prompt, so there is nothing to choose between`);
    }
  }
  ok(n > 0, 'no promptSound found, so the check above passed vacuously');
});

test('no question stem quotes a sentence and doubles its full stop', { skip: noLesson }, () => {
  // Found by mutation-testing rather than by any guard: `${fr(id)}. What did the
  // plural do?` renders as "Il finit tôt.. What did the plural do?" and shipped
  // to the seed that way before it was noticed.
  //
  // EXACTLY TWO DOTS, with a lookbehind as well as a lookahead. The first draft
  // was `/\.\.(?!\.)/` and it fired on the scene's own « Ah, non, merci... »,
  // which is a deliberate trailing-off and the whole register of an A2 scene. A
  // guard that fires on legitimate content is a guard the next author deletes,
  // and invariants §1 records four ways that has already happened here.
  for (const x of strings(L!.sections)) {
    ok(!/(?<!\.)\.\.(?!\.)/.test(x), `a doubled full stop on a learner surface: ${JSON.stringify(x.slice(0, 70))}`);
  }
});

/* ═══ 14. The audio decisions that cannot be recovered later ════════════ */

test('the recording instructions that pull in opposite directions are pinned', { skip: noLesson }, () => {
  // A constraint on how something is recorded becomes invisible the moment the
  // clip is delivered. These two are the most important instructions in the
  // lesson and they say OPPOSITE things, which is why they are separate clips.
  const recorded = L!.audio?.recorded ?? [];
  const two = recorded.find((r) => r.id === 'rec-a2-02-twojobs');
  ok(two, 'the two-jobs clip is gone');
  ok(/INDISTINGUISHABLE/i.test(two!.desc ?? ''), 'the two-jobs clip no longer says the first four words must be indistinguishable, which is the whole screen');
  const tot = recorded.find((r) => r.id === 'rec-a2-02-tot');
  ok(tot, 'the tôt clip is gone');
  ok(/audible/i.test(tot!.desc ?? ''), 'the tôt clip no longer says the difference must be audible, which is the opposite instruction and the reason the two are separate');
  // Every recordingId a section names really exists.
  const ids = new Set(recorded.map((r) => r.id));
  for (const s of strings(L!.sections)) void s;
  const used = new Set<string>();
  const walk = (v: unknown): void => {
    if (Array.isArray(v)) { for (const x of v) walk(x); return; }
    if (v && typeof v === 'object') {
      for (const [k, x] of Object.entries(v)) {
        if (k === 'recordingId' && typeof x === 'string') used.add(x);
        else walk(x);
      }
    }
  };
  walk(L!.sections);
  for (const u of used) ok(ids.has(u), `a section names recordingId "${u}", which is not declared`);
});
