// a2.10.l1 "Les verbes en -IR": the assertions that keep this lesson true.
//
// Modelled on a2-09-er-exceptions.test.ts. Everything here runs the REAL app
// function rather than a copy: an earlier a1.01 test inlined its own glossary
// lookup, copied the version that was already broken, and passed while the
// feature was dead.
//
// ── What this file is actually guarding ────────────────────────────────────
//
// This lesson authors 25 sentences and imports all ten of its verbs, so the
// failure mode is not "the word is missing". It is:
//
//   THE CONTRAST BEING SEPARATED. `il finit` and `ils finissent` are ADJACENT
//   ROWS of one tapTable, each with its own audio, and that is checked by row
//   INDEX. Two rows apart the learner scrolls between them and compares two
//   playbacks rather than two forms, which is the same defect as recording them
//   in two sessions, and no schema check would notice.
//   THE SINGULAR TRIPLE LOSING ITS IDENTITY. je finis, tu finis and il finit
//   carry respellings that are ONE STRING once the pronoun comes off. A
//   well-meaning pass that "clarified" one of them destroys the only evidence
//   that half of a2.01 is still true.
//   THE NON--iss- CLASS BEING CONJUGATED. partir, sortir, dormir and seven more
//   are named on one card and conjugated nowhere, right or wrong. Scoped to
//   PRODUCTION SURFACES, because the card that hands them over has to be able to
//   talk about them; a guard over every string fires on legitimate content and
//   gets deleted.
//   THE a2.01 BACK-REFERENCE BEING CUT, or its reframe being paraphrased. The
//   opening act rests on the two lessons saying opposite things.
//   AN EAR QUESTION BEING WRITTEN BETWEEN TWO FORMS THAT ARE ONE SOUND. No
//   recording separates finis from finit, so such a question would certify a bug.
//   THE REGULAR SET BEING SWAPPED. All ten are asserted BY NAME, not counted.
//   any of the three repaired respellings being reverted, including the one the
//   shared checker would wrongly "repair" back.
//
// Every one of those is asserted below, and every one was mutation-tested: the
// assertion was broken on purpose and confirmed to go red before it was kept.

import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { ok, strictEqual } from 'node:assert';
import { test } from 'node:test';

import type { Item, Lesson } from './schema.ts';
import { canonicalJson, quizQuestions, validateLesson, formatIssues } from './schema.ts';
import { validateDensity, formatDensity, hasPlainNasalFor } from './density.logic.ts';
import { endingPopulation } from './gender.logic.ts';
import { dicteeMode } from './dictee.logic.ts';
import { MAX_GLOSS_WORDS, glossKeys, segmentSentence } from './gloss.logic.ts';
import { matchesAccept } from './answer.logic.ts';
import { normalizeFr } from '../utils/score.ts';
import { namesUnitLabel, unitLabel } from './unit-label.ts';

const here = dirname(fileURLToPath(import.meta.url));
const seed = JSON.parse(readFileSync(resolve(here, 'seed.json'), 'utf8')) as {
  version: number; items: Item[]; lessons: Lesson[];
  units: { id: string; title?: string; sub?: string; canDo?: string; seq?: string | number; lessonIds?: string[]; prereqUnitIds?: string[] }[];
};

const L = seed.lessons.find((l) => l.id === 'a2.10.l1');
const noLesson = !L;
const byId = new Map(seed.items.map((i) => [i.id, i] as const));

/* ─── The shape of the lesson ──────────────────────────────────────────── */

const SPINE = [
  's01-scene', 's02-goals', 's03-inverted',
  's04-machine', 's05-hear', 's06-ten',
  's07-onesound', 's08-grow', 's09-ear', 's10-ear2', 's11-both', 's12-write', 's13-flash',
  's14-trap', 's15-errors', 's16-notmine',
  's17-speak', 's18-dictation', 's19-scenario', 's20-reading',
  's21-review', 's22-progress', 's23-quiz', 's24-roundup',
];

const ACTS = [
  { id: 'act1', n: 3 },
  { id: 'act2', n: 3 },
  { id: 'act3', n: 7 },
  { id: 'act4', n: 3 },
  { id: 'act5', n: 4 },
  { id: 'act6', n: 4 },
];

const REFRAME = 'The plural puts a sound on the end.';
/** NINE sections, plus the `reframe` field itself when the whole object is
 *  walked. Asserted against an explicit constant, never a figure derived from the
 *  lesson: a derived count compares the content to itself and survives any
 *  rewording. */
const REFRAME_SECTIONS = 9;
const REFRAME_APPEARANCES = 10;
const BOTH_HALVES = 'The singular hides the person. The plural announces itself.';
/** a2.01's constants, quoted verbatim. The ledger binds all twenty A2 lessons to
 *  the first; the second is quoted because this lesson inverts it on purpose. */
const NOUS_ON = 'nous parlons is what you write. on parle is what you say.';
const A201_REFRAME = 'Four of the six forms sound the same, so the pronoun carries the person.';
const A201_BACKREF = 'a2.01';

const CONTRAST_SECTION = 's05-hear';
const NOUS_ON_SECTION = 's11-both';
const BOUNDARY_SECTION = 's16-notmine';
/** THE PAIR THE LESSON TURNS ON. Both halves must be rows of CONTRAST_SECTION and
 *  they must be NEIGHBOURS. */
const CONTRAST = { singular: 'Il finit tôt.', plural: 'Ils finissent tôt.' };

/** All ten, BY NAME. A count passes after somebody quietly swaps one out. */
const THE_TEN = [
  'finir', 'choisir', 'réussir', 'réfléchir', 'remplir',
  'grandir', 'guérir', 'obéir', 'applaudir', 'ralentir',
];

/** The class that ends in -ir and takes no -iss-. Named on one card, conjugated
 *  nowhere. */
const NOT_THIS_FAMILY = [
  'partir', 'sortir', 'dormir', 'servir', 'sentir',
  'venir', 'tenir', 'ouvrir', 'offrir', 'courir',
];
/** Correct conjugations of that class: banned on a PRODUCTION SURFACE. The
 *  homograph forms (`part`, `sort`, `cours`, `sent`, `offre`) are deliberately
 *  absent; see the corpus header. */
const NOT_THIS_FAMILY_FORMS = [
  'partent', 'partons', 'partez',
  'sortent', 'sortons', 'sortez',
  'dorment', 'dormons', 'dormez', 'dors',
  'servent', 'servons', 'servez',
  'sentent', 'sentons',
  'viennent', 'venons', 'venez',
  'tiennent', 'tenons', 'tenez',
  'ouvrent', 'ouvrons', 'ouvrez',
  'offrent', 'offrons', 'offrez',
  'courent', 'courons', 'courez',
];
/** The over-generalised forms: banned EVERYWHERE, not merely on a production
 *  surface. This lesson does not print the error in order to reject it. */
const OVER_GENERALISED_FORMS = [
  'partissent', 'partissons', 'partissez',
  'sortissent', 'sortissons', 'sortissez',
  'dormissent', 'dormissons',
  'servissent', 'servissons',
  'sentissent', 'venissent', 'tenissent',
  'ouvrissent', 'offrissent', 'courissent',
];
const NOT_THIS_FAMILY_UNIT = 'a2.02';

/** THE SINGULAR TRIPLES, whose respellings are one string once the pronoun comes
 *  off. Two triples on two verbs, because one triple is a fact about finir. */
const SINGULAR_TRIPLES: string[][] = [
  ['fr.a2.verbes.181', 'fr.a2.verbes.182', 'fr.a2.verbes.183'],
  ['fr.a2.verbes.193', 'fr.a2.verbes.194', 'fr.a2.verbes.195'],
];

/** The three respellings this build repaired, with the value it wrote. Reverting
 *  any of them puts a plain n back on a nasal vowel. */
const REPAIRED: Record<string, string> = {
  'fr.a2.verbes.021': 'rahⁿ-PLEER',
  'fr.a2.famille.007': 'grahⁿ-DEER',
  'fr.a2.transports-quotidiens.043': 'rah-lahⁿ-TEER',
};

/** The WORD-INTERNAL nasals in this lesson's own rows. hasPlainNasalFor needs the
 *  n or m to END a token, so `ahⁿ-SAHNBL` would sail through it while being
 *  wrong. Invariants §3. */
const MUST_CARRY_SUPERSCRIPT: Record<string, string> = {
  'fr.a2.verbes.196': 'ahⁿ-SAHⁿBL', // ensemble
  'fr.a2.verbes.200': 'zahⁿ-fahⁿ', // les enfants
};
/** And the other side of the same checker: a row whose respelling correctly ends
 *  in a REAL n. Asserted so a later author who trusts the shared checker does not
 *  "repair" it into a nasal that is not there. */
const MUST_NOT_CARRY_SUPERSCRIPT: Record<string, string> = {
  'fr.a2.verbes.204': 'suh-MEN', // la semaine, /sə.mɛn/
};

/** Forms of one verb that are IDENTICAL out loud. A listenChoose whose options
 *  differ ONLY by a member of one group has no correct answer. */
const HOMOPHONE_FORMS: string[][] = [
  ['finis', 'finit'],
  ['choisis', 'choisit'],
  ['réussis', 'réussit'],
  ['remplis', 'remplit'],
  ['grandis', 'grandit'],
  ['guéris', 'guérit'],
  ['obéis', 'obéit'],
];

const OWNED = { from: 'fr.a2.verbes.181', to: 'fr.a2.verbes.220' };
const THEME = 'verbes';

function strings(v: unknown, out: string[] = []): string[] {
  if (typeof v === 'string') out.push(v);
  else if (Array.isArray(v)) v.forEach((x) => strings(x, out));
  else if (v && typeof v === 'object') Object.values(v).forEach((x) => strings(x, out));
  return out;
}

/** The same walk with TRANSCRIPTION fields left out. A word-level guard must not
 *  read IPA: it separates syllables with a full stop, so `/nu fi.ni.sɔ̃/` reads as
 *  a standalone `ni` and a2.01's aller check fired on `.va.` while its lesson was
 *  correct. */
const NOTATION_KEYS = new Set(['ipa', 'respell', 'promptSound', 'scoreSegment']);
function prose(v: unknown, out: string[] = []): string[] {
  if (typeof v === 'string') out.push(v);
  else if (Array.isArray(v)) v.forEach((x) => prose(x, out));
  else if (v && typeof v === 'object') {
    for (const [k, x] of Object.entries(v)) if (!NOTATION_KEYS.has(k)) prose(x, out);
  }
  return out;
}

/** Accent-aware word-boundary search. Never build a regex out of a search term:
 *  `\b` is ASCII-only in JavaScript and returns zero on a trailing accent, which
 *  looks exactly like an absence. */
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

function section(id: string): Record<string, unknown> | undefined {
  return (L?.sections ?? []).find((s) => (s as { id?: string }).id === id) as Record<string, unknown> | undefined;
}

const learnerText = noLesson ? '' : [
  ...strings(L!.sections),
  ...strings(L!.sheets ?? []),
  ...strings(L!.terms ?? {}),
].join('\n');

const learnerProse = noLesson ? [] : [
  ...prose(L!.sections),
  ...prose(L!.sheets ?? []),
  ...prose(L!.terms ?? {}),
];

/** What the learner is asked to PRODUCE or CHOOSE, plus the vocabulary decks.
 *  Narrower than "every string", and the only scope on which the neighbour guards
 *  are honest: s16-notmine NAMES partir and dormir in order to hand them over. */
function productionSurfaces(): string[] {
  if (noLesson) return [];
  const out: string[] = [];
  const quiz = L!.sections.find((s) => s.type === 'quiz');
  if (quiz) {
    for (const q of quizQuestions(quiz as never)) {
      if (q.answer) out.push(q.answer);
      if (q.target) out.push(q.target);
      for (const a of q.accept ?? []) out.push(a);
      // EVERY option, not only the correct one. A learner reads all four and has
      // to consider each, so a neighbour's material in a distractor is still a
      // neighbour's material put in front of them.
      for (const o of q.opts ?? []) out.push(o);
    }
  }
  for (const s of L!.sections) {
    if (s.type === 'scenario') for (const t of s.turns) out.push(t.user, ...(t.alts ?? []).map((a) => a.fr));
    if (s.type === 'groupDrill') {
      for (const g of s.groups) {
        if (g.check) out.push(...g.check.opts);
        out.push(...strings(g.items ?? []));
      }
    }
    if (s.type === 'listening') for (const q of s.questions) out.push(...q.opts);
    if (s.type === 'trapDrill') for (const d of s.drill) out.push(...d.opts);
    if (['vocabThemes', 'flashcards', 'reviewDeck', 'dictation', 'practice'].includes(s.type)) out.push(...strings(s));
  }
  for (const d of L!.drills ?? []) {
    for (const p of (d as { pairs?: [string, string][] }).pairs ?? []) out.push(p[1]);
    const o = d as { opts?: string[]; correct?: number };
    if (typeof o.correct === 'number' && o.opts) out.push(o.opts[o.correct]);
  }
  return out;
}

/* ─── The authored source, imported so the seed is compared to it ─────────
 *
 * Every figure below is DERIVED from the source rather than restated. If the
 * source is unavailable the source-derived tests no-op, and the seed-only ones
 * still run.                                                                  */

let SRC: Lesson | null = null;
let SRC_REFRAME = '';
let SRC_BOTH_HALVES = '';
let SRC_NOUS_ON = '';
let SRC_A201_REFRAME = '';
let SRC_BACKREF = '';
let SRC_AUTHORED: Item[] = [];
let SRC_IMPORTED: Item[] = [];
let SRC_TEN: readonly string[] = [];
let SRC_NOT_THIS_FAMILY: readonly string[] = [];
let SRC_NOT_THIS_FAMILY_FORMS: readonly string[] = [];
let SRC_OVER_GENERALISED: readonly string[] = [];
let SRC_ENDINGS: { person: string; ending: string; heard: string; grows: boolean }[] = [];
let SRC_GROWING: string[] = [];
let SRC_SILENT: string[] = [];
let SRC_REPAIRS: { id: string; fr: string; from: string; to: string }[] = [];
let SRC_DRILL_ADDITIONS: { id: string; add: string }[] = [];
let SRC_SPEAK: string[] = [];
let SRC_DICTATION: string[] = [];
let SRC_ITEM_IDS: string[] = [];
let SRC_NEAR_MISS: { id: string; wrong: string; scorable: boolean }[] = [];
let SRC_NUMBER_PAIRS: [string, string][] = [];
let SRC_PRONOUN_BLIND: [string, string][] = [];
let SRC_TRIPLES: string[][] = [];
let SRC_AFTER_PRONOUN: (s: string) => string = (s) => s;
let SRC_CONTRAST = { singular: '', plural: '' };
let SRC_CONTRAST_ROWS: string[] = [];
let SRC_CONTRAST_SECTION = '';
let SRC_BOUNDARY_SECTION = '';
let SRC_NOUS_ON_SECTION = '';
let SRC_RANGE = { from: '', to: '' };

try {
  const corpus = await import('../../../ealch-admin/scripts/data/verbes-ir-corpus.ts');
  const lesson = await import('../../../ealch-admin/scripts/data/verbes-ir-lesson.ts');
  const imported = await import('../../../ealch-admin/scripts/data/verbes-ir-imported.ts');
  const terms = await import('../../../ealch-admin/scripts/data/verbes-ir-terms.ts');
  SRC = lesson.VERBES_IR_LESSON as Lesson;
  SRC_REFRAME = terms.REFRAME as string;
  SRC_BOTH_HALVES = terms.BOTH_HALVES as string;
  SRC_NOUS_ON = terms.NOUS_ON as string;
  SRC_A201_REFRAME = terms.A201_REFRAME as string;
  SRC_BACKREF = terms.A201_BACKREF as string;
  SRC_AUTHORED = (corpus.VERBES_IR as unknown[]).map((s) => corpus.toItem(s as never)) as Item[];
  SRC_IMPORTED = imported.IMPORTED_ROWS as unknown as Item[];
  SRC_TEN = corpus.THE_TEN as readonly string[];
  SRC_NOT_THIS_FAMILY = corpus.NOT_THIS_FAMILY as readonly string[];
  SRC_NOT_THIS_FAMILY_FORMS = corpus.NOT_THIS_FAMILY_FORMS as readonly string[];
  SRC_OVER_GENERALISED = corpus.OVER_GENERALISED_FORMS as readonly string[];
  SRC_ENDINGS = corpus.ENDINGS as unknown as typeof SRC_ENDINGS;
  SRC_GROWING = corpus.GROWING_ENDINGS as string[];
  SRC_SILENT = corpus.SILENT_ENDINGS as string[];
  SRC_REPAIRS = corpus.RESPELL_REPAIRS as unknown as typeof SRC_REPAIRS;
  SRC_DRILL_ADDITIONS = corpus.DRILL_ADDITIONS as unknown as typeof SRC_DRILL_ADDITIONS;
  SRC_SPEAK = lesson.VERBES_IR_SPEAK_IDS as string[];
  SRC_DICTATION = lesson.VERBES_IR_DICTATION_IDS as string[];
  SRC_ITEM_IDS = lesson.VERBES_IR_ITEM_IDS as string[];
  SRC_NEAR_MISS = corpus.DICTEE_NEAR_MISS as unknown as typeof SRC_NEAR_MISS;
  SRC_NUMBER_PAIRS = corpus.NUMBER_PAIRS as [string, string][];
  SRC_PRONOUN_BLIND = corpus.PRONOUN_BLIND_PAIRS as [string, string][];
  SRC_TRIPLES = corpus.SINGULAR_TRIPLES as string[][];
  SRC_AFTER_PRONOUN = corpus.afterPronoun as (s: string) => string;
  SRC_CONTRAST = corpus.CONTRAST_PAIR as typeof SRC_CONTRAST;
  SRC_CONTRAST_ROWS = lesson.CONTRAST_ROW_IDS as string[];
  SRC_CONTRAST_SECTION = lesson.CONTRAST_SECTION_ID as string;
  SRC_BOUNDARY_SECTION = lesson.BOUNDARY_SECTION_ID as string;
  SRC_NOUS_ON_SECTION = lesson.NOUS_ON_SECTION_ID as string;
  SRC_RANGE = corpus.OWNED_ID_RANGE as typeof SRC_RANGE;
} catch {
  // Not available; the source-derived tests below no-op.
}
const noSrc = !SRC;

/* ═══ 1. The lesson exists, in the shape it claims ═══════════════════════ */

test('a2.10.l1 is in the seed', () => {
  ok(L, 'a2.10.l1 is not in seed.json');
});

test('it is a first build, and the counter only ever moves forward', { skip: noLesson }, () => {
  // Probed rather than assumed: the unit dump said `"lessons": []`, so unlike
  // a2.01 there was no pre-v2 stub to rebuild and the counter started at 1. A
  // floor rather than an equality, because a rebuild that reuses its own number
  // reads as a rollback in the log.
  ok(L!.version >= 1, `a2.10.l1 is v${L!.version}`);
  strictEqual(L!.unitId, 'a2.10');
  strictEqual(L!.level, 'a2');
  strictEqual(L!.tag, 'A2 · LEÇON 03', 'the unit sits at seq 3, so missions.ts draws LEÇON 03');
});

test('the spine is these missions, in this order', { skip: noLesson }, () => {
  const ids = L!.sections.map((s) => (s as { id?: string }).id);
  strictEqual(ids.join(','), SPINE.join(','));
});

test('the act structure holds, and every section belongs to exactly one act', { skip: noLesson }, () => {
  const acts = L!.acts ?? [];
  strictEqual(acts.length, ACTS.length);
  acts.forEach((a, i) => {
    strictEqual(a.id, ACTS[i].id);
    strictEqual(a.sections.length, ACTS[i].n, `${a.id} holds ${a.sections.length} sections`);
  });
  const claimed = acts.flatMap((a) => a.sections);
  strictEqual(new Set(claimed).size, claimed.length, 'a section is claimed by two acts');
  strictEqual(claimed.slice().sort().join(','), SPINE.slice().sort().join(','));
});

test('THE OWNS ACT IS HEAVIER THAN THE PARADIGM ACT', { skip: noLesson }, () => {
  const acts = L!.acts ?? [];
  const paradigm = acts.find((a) => a.id === 'act2')!;
  const owns = acts.find((a) => a.id === 'act3')!;
  ok(
    owns.sections.length > paradigm.sections.length * 2,
    `the Owns act holds ${owns.sections.length} missions and the paradigm act ${paradigm.sections.length}.`
    + ' a2.01 already taught the method; if act 2 grows, this lesson has started re-teaching last week'
    + ' instead of teaching the sound.',
  );
});

test('the mission count is inside the house range', { skip: noLesson }, () => {
  ok(L!.sections.length >= 19 && L!.sections.length <= 24, `${L!.sections.length} missions, house range is 19 to 24`);
});

test('it validates, and it passes the density validator', { skip: noLesson }, () => {
  const issues = validateLesson(L!, L!.id);
  strictEqual(issues.length, 0, formatIssues(issues));
  const ids = new Set(seed.items.map((i) => i.id));
  const d = validateDensity(L!, ids);
  strictEqual(d.length, 0, formatDensity(d));
});

test('exactly one quiz section, because the pager renders exactly one', { skip: noLesson }, () => {
  strictEqual(L!.sections.filter((s) => s.type === 'quiz').length, 1);
});

test('one tapTable in the flow, and every table is in a sheet', { skip: noLesson }, () => {
  strictEqual(L!.sections.filter((s) => s.type === 'tapTable').length, 1, 'one table, one tapTable, then stop');
  strictEqual(L!.sections.filter((s) => s.type === 'table').length, 0, 'a table at layer core is a table-in-core density failure');
  const inSheets = (L!.sheets ?? []).flatMap((sh) => sh.sections ?? []).filter((s) => s.type === 'table').length;
  ok(inSheets >= 1, 'the full paradigm belongs in a reference sheet');
});

/* ═══ 2. THE CONTRAST. Adjacent rows, one screen, one tap each. ══════════ */

test('THE CONTRAST IS TWO ADJACENT ROWS OF ONE tapTable', { skip: noLesson }, () => {
  const sec = section(CONTRAST_SECTION);
  ok(sec, `${CONTRAST_SECTION} is gone. That is the one screen the whole lesson turns on.`);
  strictEqual(sec!.type, 'tapTable', 'only a tapTable gives each row its own audio');
  const rows = sec!.rows as { cells: string[]; say?: string }[];
  strictEqual(rows.length, 6, 'tapTable is not in ownsLayout(), so a longer table runs past the fold');
  const iSing = rows.findIndex((r) => r.say === CONTRAST.singular);
  const iPlur = rows.findIndex((r) => r.say === CONTRAST.plural);
  ok(iSing >= 0, `${CONTRAST_SECTION} has no row that plays "${CONTRAST.singular}"`);
  ok(iPlur >= 0, `${CONTRAST_SECTION} has no row that plays "${CONTRAST.plural}"`);
  strictEqual(
    Math.abs(iSing - iPlur), 1,
    `"${CONTRAST.singular}" is row ${iSing + 1} and "${CONTRAST.plural}" is row ${iPlur + 1}.`
    + ' THEY MUST BE NEIGHBOURS. Two rows apart the learner scrolls between them and compares two playbacks'
    + ' rather than two forms, which is the same defect as recording them in two sessions.',
  );
});

test('and both of those rows are audible with ONE TAP each', { skip: noLesson }, () => {
  const rows = (section(CONTRAST_SECTION)!.rows as { cells: string[]; say?: string; detail?: { say?: string } }[]);
  for (const want of [CONTRAST.singular, CONTRAST.plural]) {
    const row = rows.find((r) => r.say === want);
    ok(row, `no row plays "${want}"`);
    ok(row!.say, `the row for "${want}" carries no say, so it renders as text`);
  }
});

test('the two forms differ by exactly one sound in their respellings', { skip: noLesson }, () => {
  // The claim is that the plural adds a final S and NOT a syllable. If the two
  // respellings ever differ by more than that, the card is teaching a syllable
  // the language does not have, which is what the brief's own reframe assumed.
  const sing = byId.get('fr.a2.verbes.183');
  const plur = byId.get('fr.a2.verbes.186');
  ok(sing && plur, 'the contrast rows are not in the seed');
  strictEqual(sing!.respell, 'eel fee-nee TOH');
  strictEqual(plur!.respell, 'eel fee-nees TOH');
  strictEqual(
    plur!.respell!.replace('fee-nees', 'fee-nee'), sing!.respell,
    'the plural respelling is no longer the singular plus one S. The plural adds a consonant, not a syllable.',
  );
});

test('every number pair has a longer respelling on the plural side', { skip: noLesson || noSrc }, () => {
  ok(SRC_NUMBER_PAIRS.length >= 6, `${SRC_NUMBER_PAIRS.length} number pairs`);
  for (const [sing, plur] of SRC_NUMBER_PAIRS) {
    const a = byId.get(sing);
    const b = byId.get(plur);
    ok(a && b, `${sing} / ${plur} not in the seed`);
    ok(
      (b!.respell ?? '').length > (a!.respell ?? '').length,
      `${plur} "${b!.fr}" is respelled "${b!.respell}", no longer than ${sing}'s "${a!.respell}".`
      + ' The plural puts a sound on the end and the card has to show it.',
    );
  }
});

test('the pronoun-blind pairs really are pronoun-blind', { skip: noLesson || noSrc }, () => {
  // These are the only pairs a listening question may ask "one or several?"
  // about. If the pronouns differ audibly the learner can answer from the pronoun
  // and the mission proves nothing.
  ok(SRC_PRONOUN_BLIND.length >= 4, `${SRC_PRONOUN_BLIND.length} pronoun-blind pairs`);
  for (const [sing, plur] of SRC_PRONOUN_BLIND) {
    const a = byId.get(sing)!;
    const b = byId.get(plur)!;
    strictEqual(
      (a.respell ?? '').split(' ')[0], (b.respell ?? '').split(' ')[0],
      `${sing} and ${plur} respell their pronouns differently, so the verb is not the only evidence`,
    );
    ok(SRC_NUMBER_PAIRS.some(([x, y]) => x === sing && y === plur), `${sing} / ${plur} is not in NUMBER_PAIRS`);
  }
});

/* ═══ 3. THE SINGULAR TRIPLE: three spellings, one sound ════════════════ */

test('THE SINGULAR TRIPLES ARE ONE STRING ONCE THE PRONOUN COMES OFF', { skip: noLesson }, () => {
  for (const triple of SINGULAR_TRIPLES) {
    const rows = triple.map((id) => {
      const r = byId.get(id);
      ok(r, `${id} is not in the seed`);
      return r!;
    });
    const tails = rows.map((r) => (r.respell ?? '').split(' ').slice(1).join(' '));
    strictEqual(
      new Set(tails).size, 1,
      `${triple.join(' / ')} do not sound the same: ${rows.map((r, i) => `${r.fr} -> ${tails[i]}`).join(' | ')}.`
      + ' Three spellings and one sound is the half of a2.01 this lesson keeps, and these respellings are the'
      + ' only evidence for it.',
    );
    strictEqual(new Set(rows.map((r) => r.fr)).size, 3, 'a triple does not hold three different sentences');
  }
});

test('the source and this file agree about which rows are a triple', { skip: noSrc }, () => {
  strictEqual(SRC_TRIPLES.map((t) => t.join()).join('|'), SINGULAR_TRIPLES.map((t) => t.join()).join('|'));
  for (const triple of SRC_TRIPLES) {
    const tails = triple.map((id) => SRC_AFTER_PRONOUN(SRC_AUTHORED.find((i) => i.id === id)?.respell ?? ''));
    strictEqual(new Set(tails).size, 1, `the source triple ${triple.join(' / ')} does not sound the same`);
  }
});

test('the singular triple is TAUGHT as a triple, on a screen of its own', { skip: noLesson }, () => {
  const deck = section('s07-onesound');
  ok(deck, 's07-onesound is gone, and with it the only screen that shows the three side by side');
  const text = strings(deck).join('\n');
  for (const form of ['je finis', 'tu finis', 'il finit']) {
    ok(text.includes(form), `s07-onesound no longer shows "${form}"`);
  }
  ok(text.includes('ils finissent'), 's07-onesound no longer shows the form where the sound arrives');
});

/* ═══ 4. THE a2.01 BACK-REFERENCE, AND BOTH HALVES ══════════════════════ */

test("a2.01's OWN REFRAME IS QUOTED VERBATIM", { skip: noLesson }, () => {
  ok(
    learnerText.includes(A201_REFRAME),
    "a2.01's reframe no longer appears verbatim. The opening act rests on the two lessons saying opposite"
    + ' things, and quoting the earlier one means IMPORTING THE CONSTANT: a paraphrase lets a2.01 be reworded'
    + ' and this lesson misquote a lesson the learner finished twenty minutes ago.',
  );
});

test('the source imports it rather than restating it', { skip: noSrc }, () => {
  strictEqual(SRC_A201_REFRAME, A201_REFRAME);
  // The source exports the LABEL a learner reads; this file names the unit by
  // id and resolves it.
  strictEqual(SRC_BACKREF, unitLabel(A201_BACKREF, 'a2'));
});

test('THE a2.01 BACK-REFERENCE REACHES MORE THAN ONE SECTION', { skip: noLesson }, () => {
  const holders = L!.sections.filter((s) => strings(s).some((x) => namesUnitLabel(x, A201_BACKREF)));
  ok(
    holders.length >= 2,
    `${A201_BACKREF} is named by ${holders.length} section(s). This lesson inverts it and keeps half of it, and`
    + ' a learner who is not told which lesson is being contradicted has been handed a contradiction rather'
    + ' than a teaching.',
  );
});

test('BOTH HALVES ARE STATED, VERBATIM, IN AT LEAST THREE SECTIONS', { skip: noLesson }, () => {
  ok(learnerText.includes(BOTH_HALVES), `"${BOTH_HALVES}" appears on no screen`);
  const carrying = L!.sections.filter((s) => strings(s).some((x) => x.includes(BOTH_HALVES)));
  ok(
    carrying.length >= 3,
    `"${BOTH_HALVES}" reaches ${carrying.length} sections. Either half alone is a weaker teaching than the pair,`
    + ' and this is where the line between the two lessons is drawn.',
  );
});

test('the source and the seed carry the same both-halves line', { skip: noSrc }, () => {
  strictEqual(SRC_BOTH_HALVES, BOTH_HALVES);
});

test('the opening mission is the comparison, not an introduction', { skip: noLesson }, () => {
  const card = section('s03-inverted');
  ok(card, 's03-inverted is gone, and with it the only place the two lessons are put side by side');
  const text = strings(card).join('\n');
  ok(text.includes(A201_REFRAME), 's03-inverted no longer quotes a2.01');
  ok(text.includes(BOTH_HALVES), 's03-inverted no longer says where the line falls');
});

/* ═══ 5. nous / on, and the we that sounds singular ═════════════════════ */

test("a2.01's nous/on statement appears VERBATIM, in exactly one section", { skip: noLesson }, () => {
  ok(
    learnerText.includes(NOUS_ON),
    'the nous/on statement no longer appears verbatim. The ledger binds all twenty A2 lessons to a2.01\'s'
    + ' wording, and this lesson needs it: on takes the il form, so the commonest spoken plural in French'
    + ' sounds singular and this lesson\'s reframe would otherwise mislead on the first conversation.',
  );
  const holders = L!.sections.filter((s) => strings(s).some((x) => x.includes(NOUS_ON))).map((s) => (s as { id?: string }).id);
  strictEqual(holders.join(','), NOUS_ON_SECTION, `the statement is in ${JSON.stringify(holders)}; it has one home so "where is this said?" has one answer`);
});

test('the source imports the constant rather than restating it', { skip: noSrc }, () => {
  strictEqual(SRC_NOUS_ON, NOUS_ON);
  strictEqual(SRC_NOUS_ON_SECTION, NOUS_ON_SECTION);
});

test('the on caveat is a corpus row, not only prose', { skip: noLesson }, () => {
  const row = byId.get('fr.a2.verbes.205');
  ok(row, 'fr.a2.verbes.205 is not in the seed');
  strictEqual(row!.fr, 'On finit à six heures.');
  ok(row!.respell?.includes('fee-nee'), 'the on row no longer carries the SHORT form, which is the whole point of it');
  ok(!row!.respell?.includes('fee-nees'), 'the on row has grown the plural sound, and on takes the il form');
});

/* ═══ 6. The boundary: named, never conjugated ══════════════════════════ */

test('all ten of the non--iss- class are NAMED', { skip: noLesson }, () => {
  strictEqual(NOT_THIS_FAMILY.length, 10);
  for (const v of NOT_THIS_FAMILY) {
    ok(
      hasPhrase(learnerText, v),
      `${v} is named nowhere. Naming the class IS the mission: a learner who generalises the pattern onto one`
      + ' of these produces a form no French speaker says, and nothing else in this lesson stops them.',
    );
  }
});

test('and all ten are on ONE card, with a destination for the two that have one', { skip: noLesson }, () => {
  const card = section(BOUNDARY_SECTION);
  ok(card, `${BOUNDARY_SECTION} is gone, and with it the only place the boundary is named`);
  const text = strings(card).join('\n');
  for (const v of NOT_THIS_FAMILY) ok(hasPhrase(text, v), `${BOUNDARY_SECTION} does not name ${v}`);
  ok(
    namesUnitLabel(text, NOT_THIS_FAMILY_UNIT),
    `${BOUNDARY_SECTION} does not say where venir and tenir are taught. A boundary with no destination is a`
    + ' warning, not a teaching.',
  );
});

test('NOT ONE FORM OF THE CLASS REACHES A PRODUCTION SURFACE', { skip: noLesson }, () => {
  const surfaces = productionSurfaces();
  const leaked = NOT_THIS_FAMILY_FORMS.filter((f) => surfaces.some((s) => hasPhrase(s, f)));
  strictEqual(leaked.join(', '), '', 'a conjugated form of the non--iss- class reached a production surface');
});

test('and no over-generalised form appears ANYWHERE', { skip: noLesson }, () => {
  // Banned everywhere, not merely on a production surface. This lesson does not
  // print `ils partissent` in order to reject it: a commonErrors card works when
  // the learner holds the right form to replace the wrong one with, and nobody
  // here holds `ils partent` because no unit in the curriculum teaches it.
  const invented = OVER_GENERALISED_FORMS.filter((f) => learnerProse.some((s) => hasPhrase(s, f)));
  strictEqual(invented.join(', '), '', 'an over-generalised form is on a learner surface');
});

test('no verb of the class is released as an item', { skip: noLesson }, () => {
  const released = L!.itemIds.map((id) => byId.get(id)?.fr).filter(Boolean) as string[];
  for (const v of NOT_THIS_FAMILY) {
    ok(!released.includes(v), `${v} is a released item. Context is a display string, not a row in the hub.`);
  }
});

test('the source and this file guard the same forms', { skip: noSrc }, () => {
  strictEqual(SRC_NOT_THIS_FAMILY.join(','), NOT_THIS_FAMILY.join(','));
  strictEqual(SRC_NOT_THIS_FAMILY_FORMS.join(','), NOT_THIS_FAMILY_FORMS.join(','));
  strictEqual(SRC_OVER_GENERALISED.join(','), OVER_GENERALISED_FORMS.join(','));
});

test('no -RE verb and no stem-changer: a2.09 and a2.11 keep their lessons', { skip: noLesson }, () => {
  const surfaces = productionSurfaces();
  for (const v of ['vendre', 'attendre', 'répondre', 'entendre', 'descendre', 'perdre']) {
    ok(!surfaces.some((s) => hasPhrase(s, v)), `${v} reached a production surface and belongs to a2.11`);
  }
  for (const v of ['mangeons', 'commençons', 'appelle', 'achète', 'préfère', 'jette']) {
    ok(!surfaces.some((s) => hasPhrase(s, v)), `${v} reached a production surface and belongs to a2.09`);
  }
});

test('no past and no imperfect', { skip: noLesson }, () => {
  // The bare participles `fini` and `choisi` are deliberately NOT guarded:
  // `choisi` is a legitimate wrong-stem distractor in round 1, which is what a
  // distractor is for. What is guarded is the auxiliary frame and the imperfect
  // stem, neither of which has an innocent reading here.
  for (const f of ['ai fini', 'a fini', 'ai choisi', 'a choisi', 'finissais', 'finissions', 'choisissais']) {
    ok(!learnerProse.some((s) => hasPhrase(s, f)), `${f} is on a learner surface and every row here is a simple present`);
  }
});

/* ═══ 7. The ear missions, which are the Owns ═══════════════════════════ */

test('LISTENING IS THE HEAVIEST TEACHING TYPE, AND THERE ARE TWO OF THEM', { skip: noLesson }, () => {
  const ears = L!.sections.filter((s) => s.type === 'listening');
  ok(
    ears.length >= 2,
    `${ears.length} listening section(s). The canDo says "hear", and this is the only lesson in batch 1 where`
    + ' the ear can do the job at all, so the listening missions ARE the lesson rather than decoration.',
  );
});

test('AT LEAST ONE LISTENING ITEM REQUIRES DISTINGUISHING il finit FROM ils finissent', { skip: noLesson }, () => {
  const ears = L!.sections.filter((s) => s.type === 'listening');
  const lines = ears.flatMap((s) => (s.type === 'listening' ? s.lines.map((l) => l.fr) : []));
  ok(lines.includes(CONTRAST.singular), `the listening missions never play "${CONTRAST.singular}"`);
  ok(lines.includes(CONTRAST.plural), `the listening missions never play "${CONTRAST.plural}"`);
  // AND THE QUESTION IS NAMED, not counted. These two are the items that make the
  // task real, and a count would survive them being replaced by two easier ones.
  const qs = ears.flatMap((s) => (s.type === 'listening' ? s.questions : []));
  const singularQ = qs.find((q) => q.q.includes('eel fee-NEE »'));
  const pluralQ = qs.find((q) => q.q.includes('eel fee-NEES »'));
  ok(singularQ, 'the question that plays the short form and asks how many people is gone');
  ok(pluralQ, 'the question that plays the long form and asks how many people is gone');
  strictEqual(singularQ!.opts[singularQ!.correct], 'One');
  strictEqual(pluralQ!.opts[pluralQ!.correct], 'Several');
  ok(singularQ!.why && pluralQ!.why, 'a listening question has no why');
});

test('one listening question names the pair a2.01 could NOT settle', { skip: noLesson }, () => {
  const ears = L!.sections.filter((s) => s.type === 'listening');
  const qs = ears.flatMap((s) => (s.type === 'listening' ? s.questions : []));
  const q = qs.find((x) => x.q.includes('Elle choisit') && x.q.includes('Elles choisissent'));
  ok(q, 'the elle/elles question is gone. In a2.01 that pronoun pair was undecidable and here the verb decides it.');
  ok(namesUnitLabel(q!.why ?? '', A201_BACKREF), 'the elle/elles question no longer says which lesson it is inverting');
});

test('every listening question has a why', { skip: noLesson }, () => {
  for (const s of L!.sections) {
    if (s.type !== 'listening') continue;
    for (const q of s.questions) ok(q.why, `no why: ${q.q}`);
  }
});

/* ═══ 8. What the app can and cannot test, measured ═════════════════════ */

test('NO EAR QUESTION ASKS BETWEEN TWO FORMS THAT ARE ONE SOUND', { skip: noLesson }, () => {
  // je finis, tu finis and il finit are identical out loud, so a listenChoose
  // offering two of them has no correct answer and marking one right would
  // certify a bug. Checked as "these two options differ ONLY by a member of one
  // homophone group", not as "two options mention homophones": a question
  // offering « Il finit tôt. » against « Je finis tôt. » is legitimate, because
  // the PRONOUNS are audibly different and that is what is being tested.
  const quiz = L!.sections.find((s) => s.type === 'quiz')!;
  const bad: string[] = [];
  for (const q of quizQuestions(quiz as never)) {
    if (q.format !== 'listenChoose') continue;
    const opts = q.opts ?? [];
    for (let i = 0; i < opts.length; i++) {
      for (let j = i + 1; j < opts.length; j++) {
        for (const group of HOMOPHONE_FORMS) {
          for (const x of group) {
            for (const y of group) {
              if (x !== y && opts[i].replace(x, y) === opts[j]) bad.push(`"${q.q}": ${opts[i]} / ${opts[j]}`);
            }
          }
        }
      }
    }
  }
  strictEqual([...new Set(bad)].join('; '), '', 'no recording can separate these, so the question has no answer');
});

test('the singular triple IS tested, typed, where it can be', { skip: noLesson }, () => {
  const quiz = L!.sections.find((s) => s.type === 'quiz')!;
  const qs = quizQuestions(quiz as never);
  const typed = qs.filter((q) => ['typeIn', 'errorSpot'].includes(q.format ?? ''));
  ok(typed.length >= 10, `only ${typed.length} typed questions`);
  const singular = typed.filter((q) => /\b(finis|finit|remplis|remplit|choisis|choisit)\b/i.test(`${q.answer ?? ''} ${(q.accept ?? []).join(' ')}`));
  ok(singular.length >= 4, `only ${singular.length} typed questions turn on the singular triple, and typing is the only surface that can`);
});

test('listenChoose carries real weight here, which it cannot anywhere else in the batch', { skip: noLesson }, () => {
  const quiz = L!.sections.find((s) => s.type === 'quiz')!;
  const lc = quizQuestions(quiz as never).filter((q) => q.format === 'listenChoose');
  ok(lc.length >= 5, `${lc.length} listenChoose questions; a2.09 could justify one and this lesson can justify six`);
  for (const q of lc) ok(q.say, 'a listenChoose without a say makes ListenChooseCard speak opts[correct]');
});

test('every gap question fixes the number with a subject and a naming form', { skip: noLesson }, () => {
  const quiz = L!.sections.find((s) => s.type === 'quiz')!;
  const gap = quizQuestions(quiz as never).filter((q) => q.q.includes('___'));
  ok(gap.length >= 6, `only ${gap.length} gap questions`);
  const SUBJECTS = ['je', 'tu', 'il', 'elle', 'on', 'nous', 'vous', 'ils', 'elles', 'le', 'la', 'les'];
  for (const q of gap) {
    ok(/\([a-zà-ÿ]+ir\)/i.test(q.q), `no -ir naming form in the stem, so the question has no single answer: ${q.q}`);
    ok(SUBJECTS.includes(q.q.trim().split(/\s+/)[0].toLowerCase()), `no subject fixing the number: ${q.q}`);
  }
});

test('the dictée grades what the source says it grades, through the real normalizeFr', { skip: noLesson || noSrc }, () => {
  for (const d of SRC_NEAR_MISS) {
    const row = byId.get(d.id);
    ok(row, `DICTEE_NEAR_MISS names ${d.id}, which is not in the seed`);
    const distinguishable = normalizeFr(row!.fr) !== normalizeFr(d.wrong);
    strictEqual(
      distinguishable, d.scorable,
      `${d.id} is marked scorable: ${d.scorable} and normalizeFr says ${distinguishable}`
      + ` ("${row!.fr}" against "${d.wrong}"). If normalizeFr has learned to keep diacritics, the circumflex row`
      + ' can move and the corpus header needs rewriting.',
    );
  }
  const scorable = SRC_NEAR_MISS.filter((d) => d.scorable).length;
  ok(scorable >= 7, `only ${scorable} dictée targets are graded on the distinction they teach; -IS against -IT is letters all the way down`);
});

test('the dictée spells from LETTERS, which is the only mode that can test a spelling', { skip: noLesson }, () => {
  const d = L!.sections.find((s) => s.type === 'dictation');
  ok(d && d.type === 'dictation', 'no dictation section');
  ok(d!.itemIds.length >= 8, `${d!.itemIds.length} dictée targets`);
  for (const id of d!.itemIds) {
    const it = byId.get(id);
    ok(it, `dictée target ${id} is not in the seed`);
    strictEqual(
      dicteeMode(it!.fr), 'letters',
      `"${it!.fr}" is in word mode. Word tiles hand every real word over pre-spelled, so they cannot test a`
      + ' spelling. The paradigm frame is "tôt" for exactly this reason.',
    );
    ok((it!.drills ?? []).includes('dictation'), `${id} carries no dictation drill`);
  }
});

/* ═══ 9. Respellings ════════════════════════════════════════════════════ */

test('no respelling this lesson displays closes a nasal with a plain n or m', { skip: noLesson }, () => {
  const ids = new Set(L!.itemIds);
  const bad = [...ids]
    .map((id) => byId.get(id))
    .filter((it): it is Item => !!it && !!it.respell)
    .filter((it) => hasPlainNasalFor(it.fr, it.respell!))
    .map((it) => `${it.id} "${it.fr}" ${it.respell}`);
  strictEqual(bad.join('\n'), '');
});

test('the three repairs landed in the seed', { skip: noLesson }, () => {
  for (const [id, to] of Object.entries(REPAIRED)) {
    const row = byId.get(id);
    ok(row, `${id} is not in the seed`);
    strictEqual(row!.respell, to, `${id} "${row!.fr}" reverted to ${row!.respell}`);
  }
});

test('every repair replaced something that really was a violation', { skip: noSrc }, () => {
  strictEqual(SRC_REPAIRS.length, Object.keys(REPAIRED).length);
  for (const r of SRC_REPAIRS) {
    ok(hasPlainNasalFor(r.fr, r.from), `${r.id} "${r.fr}": the stored value "${r.from}" was not a violation. A variant is not a violation (invariants §9).`);
    ok(!hasPlainNasalFor(r.fr, r.to), `${r.id}: the replacement "${r.to}" is still flagged`);
    strictEqual(REPAIRED[r.id], r.to, `${r.id}: the source writes ${r.to} and this file expects ${REPAIRED[r.id]}`);
  }
});

test('the word-internal blind spot is still a blind spot, so these are checked by name', { skip: noLesson }, () => {
  // hasPlainNasalFor needs the n or m to END a token. If it ever learns to see a
  // word-internal one, invariants §3 needs updating and these by-name checks can
  // go; until then a broken respelling here would pass the shared checker.
  ok(
    !hasPlainNasalFor('Nous réfléchissons ensemble.', 'noo ray-flay-shee-sohⁿ ahⁿ-SAHNBL'),
    'hasPlainNasalFor now catches a word-internal nasal. Update invariants §3.',
  );
  for (const [id, must] of Object.entries(MUST_CARRY_SUPERSCRIPT)) {
    const row = byId.get(id);
    ok(row, `${id} is not in the seed`);
    ok(row!.respell?.includes(must), `${id} "${row!.fr}" must respell with "${must}", found "${row!.respell}"`);
  }
});

test('and a real n is not "repaired" into a nasal that is not there', { skip: noLesson }, () => {
  // The brief predicted this false positive would land on `finissent`. It does
  // not: `fee-NEES` has no n or m in it at all. It lands on `la semaine`, whose
  // /n/ is genuinely pronounced and which survives the checker only through the
  // [vowel][nm]e escape hatch in the French spelling.
  for (const [id, must] of Object.entries(MUST_NOT_CARRY_SUPERSCRIPT)) {
    const row = byId.get(id);
    ok(row, `${id} is not in the seed`);
    ok(row!.respell?.includes(must), `${id} "${row!.fr}" should keep a plain N: /sə.mɛn/ is a real n, found "${row!.respell}"`);
    ok(!hasPlainNasalFor(row!.fr, row!.respell!), 'the checker now flags this correct respelling');
  }
});

/* ═══ 10. Items, tranches, corpus hygiene ═══════════════════════════════ */

test('every itemId resolves in the seed', { skip: noLesson }, () => {
  const missing = L!.itemIds.filter((id) => !byId.has(id));
  strictEqual(missing.join(', '), '', 'a lesson whose itemIds resolve to nothing renders empty cards');
});

test('every itemId is on a screen, not merely resolvable', { skip: noLesson }, () => {
  const shown = new Set<string>();
  for (const s of L!.sections) {
    if (s.type === 'groupDrill') for (const g of s.groups) for (const it of g.items ?? []) if (it.itemId) shown.add(it.itemId);
    if (s.type === 'practice') for (const id of s.itemIds ?? []) shown.add(id);
    if (s.type === 'dictation') for (const id of s.itemIds ?? []) shown.add(id);
  }
  for (const d of L!.drills ?? []) for (const it of (d as { items?: string[] }).items ?? []) shown.add(it);
  const orphan = L!.itemIds.filter((id) => !shown.has(id));
  strictEqual(orphan.join(', '), '', 'a1.08 declared 43 itemIds that resolved perfectly and were drawn by nothing');
});

test('the tranches release every taught item exactly once and nothing untaught', { skip: noLesson }, () => {
  const tranche = L!.deckTranche ?? [];
  strictEqual(tranche.length, (L!.acts ?? []).length, 'tranches are index-aligned with acts');
  const seen = new Set<string>();
  for (const slice of tranche) {
    for (const id of slice) {
      ok(!seen.has(id), `${id} released twice`);
      seen.add(id);
      ok(L!.itemIds.includes(id), `${id} released but not in itemIds`);
    }
  }
  strictEqual(L!.itemIds.filter((id) => !seen.has(id)).join(', '), '', 'item(s) no tranche releases');
});

test('no tranche releases an item the acts before it have not SHOWN', { skip: noLesson }, () => {
  // "Shown" is the row's `fr` string on a screen in an earlier or the same act,
  // OR its id named by a section that renders the row itself (practice and
  // dictation resolve their itemIds against the corpus).
  const acts = L!.acts ?? [];
  const tranche = L!.deckTranche ?? [];
  const early: string[] = [];
  for (const [i, slice] of tranche.entries()) {
    const shownBy = acts.slice(0, i + 1)
      .flatMap((a) => a.sections)
      .flatMap((sid) => strings(section(sid) ?? {}))
      .join('\n');
    for (const id of slice) {
      const row = byId.get(id);
      if (!row) continue;
      if (!shownBy.includes(row.fr) && !shownBy.includes(id)) early.push(`${id} "${row.fr}" released in tranche ${i}`);
    }
  }
  strictEqual(early.join('\n'), '', 'releasing a card before the lesson shows it turns the hub into a wall');
});

test('ALL TEN VERBS ARE NAMED INDIVIDUALLY and released by id', { skip: noLesson }, () => {
  strictEqual(THE_TEN.length, 10);
  for (const v of THE_TEN) ok(hasPhrase(learnerText, v), `${v} is named by no screen`);
  const released = new Set(L!.itemIds.map((id) => byId.get(id)?.fr));
  for (const v of THE_TEN) ok(released.has(v), `${v} is on a screen and not in itemIds`);
});

test('not one of the ten was authored: every one is imported', { skip: noSrc }, () => {
  strictEqual(SRC_TEN.join(','), THE_TEN.join(','));
  const authoredFr = new Set(SRC_AUTHORED.map((i) => i.fr));
  for (const v of THE_TEN) ok(!authoredFr.has(v), `${v} was authored; the brief said to probe first and all ten existed`);
  strictEqual(SRC_IMPORTED.length, 10);
});

test('every one of the ten carries a flashcard drill, because every one is a hub card', { skip: noLesson || noSrc }, () => {
  // Two of the ten arrive from Postgres with {voiceflash, review} and no
  // flashcard, and DRILL_ADDITIONS is what fixes that. A released row with no
  // flashcard drill is a card the hub never serves.
  strictEqual(SRC_DRILL_ADDITIONS.length, 2);
  for (const row of SRC_IMPORTED) {
    const seedRow = byId.get(row.id);
    ok(seedRow, `${row.id} was not carried through the seed cut`);
    ok((seedRow!.drills ?? []).includes('flashcard'), `${row.id} "${seedRow!.fr}" is released to the hub with no flashcard drill`);
  }
});

test('no imported verb row carries a gender', { skip: noLesson }, () => {
  const released = L!.itemIds.map((id) => byId.get(id)).filter((i): i is Item => !!i);
  const gendered = released.filter((i) => i.gender && THE_TEN.includes(i.fr));
  strictEqual(gendered.map((i) => `${i.fr} (${i.id})`).join(', '), '', "an infinitive is not a noun, and a gendered single-word row joins a1.03's population");
});

test("nothing this lesson writes joins a1.03's measured ending population", { skip: noSrc }, () => {
  const joiners = endingPopulation([...SRC_AUTHORED, ...SRC_IMPORTED]);
  strictEqual(joiners.length, 0, `${joiners.map((j) => j.fr).join(', ')} would move twenty printed figures in a1-03-genre.test.ts`);
});

test('every authored id is inside the ledger block', { skip: noSrc }, () => {
  strictEqual(SRC_RANGE.from, OWNED.from);
  strictEqual(SRC_RANGE.to, OWNED.to);
  for (const it of SRC_AUTHORED) {
    ok(it.id >= OWNED.from && it.id <= OWNED.to, `${it.id} is outside ${OWNED.from}..${OWNED.to}`);
    strictEqual(it.theme, THEME);
    strictEqual(it.level, 'a2');
    strictEqual(it.kind, 'sentence', 'the ledger settled it: only infinitives and full sentences are corpus rows');
  }
  strictEqual(SRC_AUTHORED.length, 25);
});

test('no authored sentence runs over the A2 word budget', { skip: noSrc }, () => {
  for (const it of SRC_AUTHORED) {
    const words = it.fr.trim().split(/\s+/).filter((w) => /[\p{L}\p{N}]/u.test(w)).length;
    ok(words <= 14, `${it.id} runs to ${words} words: "${it.fr}"`);
  }
});

test('no duplicate fr within a theme, computed the way flashhub-coverage computes it', { skip: noLesson }, () => {
  const strip = (s: string) => s.replace(/^(le |la |les |l'|un |une |des |du |de la )/i, '').trim().toLowerCase();
  const seen = new Map<string, string>();
  const clashes: string[] = [];
  for (const i of seed.items) {
    if (i.kind === 'sentence') continue;
    if (i.theme !== THEME) continue;
    const key = `${i.theme}${strip(i.fr)}`;
    const prev = seen.get(key);
    if (prev) clashes.push(`${i.theme} "${i.fr}": ${prev} and ${i.id}`);
    else seen.set(key, i.id);
  }
  strictEqual(clashes.join('\n'), '', 'flashhub-coverage treats two rows sharing an fr in one theme as one card served twice');
});

test('the seed lesson is the authored lesson', { skip: noLesson || noSrc }, () => {
  // canonicalJson, NOT JSON.stringify. `content:publish` regenerates seed.json
  // FROM the database with sorted keys, and Postgres `jsonb` normalises key order
  // on write, so a byte comparison against the authored object fails the first
  // time this lesson is published while the content is identical.
  strictEqual(canonicalJson(L), canonicalJson(SRC), 'seed.json and the source have drifted; re-run the merge');
});

test('every authored row is in the seed and says what the source says', { skip: noLesson || noSrc }, () => {
  for (const it of SRC_AUTHORED) {
    const row = byId.get(it.id);
    ok(row, `${it.id} is not in the seed`);
    strictEqual(row!.fr, it.fr);
    strictEqual(row!.respell ?? null, it.respell ?? null);
    strictEqual(row!.en, it.en);
  }
});

test('every imported row was CARRIED through the seed cut', { skip: noLesson || noSrc }, () => {
  for (const it of SRC_IMPORTED) ok(byId.has(it.id), `${it.id} was not carried, so its card would draw empty`);
});

test('the unit advertises this lesson and its own copy is unchanged', { skip: noLesson }, () => {
  const u = seed.units.find((x) => x.id === 'a2.10');
  ok(u, 'unit a2.10 is not in the seed');
  ok((u!.lessonIds ?? []).includes('a2.10.l1'));
  // Copied byte for byte from the probe's unit dump. The brief has title and sub
  // SWAPPED and its sub is not in the database at all.
  strictEqual(u!.title, 'Regular -IR Verbs');
  strictEqual(u!.sub, 'Les verbes en -IR');
  // WIDENED by a2.10.l2, which added a second lesson to this unit about the
  // -ir verbs l1 excludes. The unit's promise had to grow to cover both.
  strictEqual(u!.canDo, 'Can conjugate regular -ir verbs, hear where the -iss- belongs, and tell them apart from the -ir verbs that take no -iss- at all');
  ok((u!.prereqUnitIds ?? []).includes('a2.01'), 'the unit no longer declares a2.01 as its prerequisite');
  strictEqual(`A2 · LEÇON ${String(u!.seq).padStart(2, '0')}`, L!.tag);
});

/* ═══ 11. The endings, and the arithmetic the lesson prints ═════════════ */

test('THREE of the six endings put a sound on the end, and the data says so', { skip: noSrc }, () => {
  strictEqual(SRC_ENDINGS.length, 6);
  strictEqual(SRC_GROWING.length, 3, 'every screen says three, and the derived list has to agree');
  strictEqual(SRC_SILENT.length, 3);
  // AND THE ORDER IS THE SOUND ORDER, which is what lets the contrast pair be
  // adjacent in the in-flow table. The canonical pronoun order lives in the sheet.
  strictEqual(SRC_ENDINGS.map((e) => e.person).join(' | '), 'je | tu | il · elle · on | ils · elles | nous | vous');
});

test('the in-flow table is index-aligned with those endings', { skip: noLesson || noSrc }, () => {
  const rows = (section(CONTRAST_SECTION)!.rows as { cells: string[] }[]);
  strictEqual(rows.map((r) => r.cells[0]).join(' | '), SRC_ENDINGS.map((e) => e.person).join(' | '));
  strictEqual(rows.map((r) => r.cells[2]).join(' | '), SRC_ENDINGS.map((e) => e.heard).join(' | '));
});

test('THE CANONICAL PRONOUN ORDER IS IN THE SHEET', { skip: noLesson }, () => {
  // The in-flow table departs from the ledger's order so the contrast pair can be
  // adjacent. That is only defensible because the ordinary order is one tap away.
  const sheet = (L!.sheets ?? []).find((s) => s.id === 'sheet.a2.10.endings');
  ok(sheet, 'sheet.a2.10.endings is gone');
  const paradigm = (sheet!.sections ?? []).find((s) => (s as { id?: string }).id === 'sheet-endings-paradigm');
  ok(paradigm && paradigm.type === 'table', 'the nine-pronoun table is gone');
  strictEqual(
    (paradigm as { rows: string[][] }).rows.map((r) => r[0]).join(','),
    ["je / j'", 'tu', 'il', 'elle', 'on', 'nous', 'vous', 'ils', 'elles'].join(','),
    'the in-flow table departs from the usual order, so this one may not',
  );
});

test('the source and the seed carry the same reframe, in exactly nine sections', { skip: noLesson }, () => {
  strictEqual(L!.reframe, REFRAME);
  const carrying = L!.sections.filter((s) => strings(s).some((x) => x.includes(REFRAME)));
  strictEqual(carrying.length, REFRAME_SECTIONS, `the reframe reaches ${carrying.length} sections`);
  strictEqual(strings(L!).filter((s) => s.includes(REFRAME)).length, REFRAME_APPEARANCES);
});

test('the reframe matches the source', { skip: noSrc }, () => {
  strictEqual(SRC_REFRAME, REFRAME);
});

test('the reframe is about the sound, not about the spelling', { skip: noLesson }, () => {
  // "-ir verbs add -iss- in the plural" is the same fact stated as a spelling
  // rule, and a learner cannot act on it while listening. And "grows a syllable"
  // is false for ils finissent, which is two syllables exactly like il finit.
  ok(!/iss/.test(REFRAME), 'a reframe that names the spelling is a rule the ear cannot run');
  ok(!/syllable/i.test(REFRAME), 'ils finissent adds a consonant, not a syllable; the syllable claim is false for the headline pair');
  ok(REFRAME.trim().split(/\s+/).length <= 10, 'a reframe has to survive recall mid-sentence');
});

/* ═══ 12. The quiz machinery ════════════════════════════════════════════ */

test('the quiz is five rounds, and every question has a why and a live ref', { skip: noLesson }, () => {
  const quiz = L!.sections.find((s) => s.type === 'quiz')!;
  strictEqual((quiz as { rounds?: unknown[] }).rounds?.length, 5);
  const ids = new Set(L!.sections.map((s) => (s as { id?: string }).id));
  for (const q of quizQuestions(quiz as never)) {
    ok(q.why, `no why: ${q.q}`);
    ok(q.ref && ids.has(q.ref), `ref "${q.ref}" names no section: ${q.q}`);
  }
});

test('at most half the questions are mcq', { skip: noLesson }, () => {
  const quiz = L!.sections.find((s) => s.type === 'quiz')!;
  const qs = quizQuestions(quiz as never);
  const mcq = qs.filter((q) => q.format === 'mcq').length;
  ok(mcq * 2 <= qs.length, `${mcq}/${qs.length} are mcq`);
  strictEqual(qs.length, 30);
});

test('every free-text question accepts the answer it displays', { skip: noLesson }, () => {
  const quiz = L!.sections.find((s) => s.type === 'quiz')!;
  for (const q of quizQuestions(quiz as never)) {
    if (!['typeIn', 'errorSpot'].includes(q.format ?? '')) continue;
    ok(matchesAccept(q.answer ?? '', q.accept ?? []), `does not accept its own answer: ${q.answer}`);
  }
});

test('the quiz answer slots do not cluster', { skip: noLesson }, () => {
  const quiz = L!.sections.find((s) => s.type === 'quiz')!;
  const closed = quizQuestions(quiz as never).filter((q): q is never => typeof (q as { correct?: unknown }).correct === 'number') as unknown as { correct: number }[];
  const slots = new Map<number, number>();
  for (const q of closed) slots.set(q.correct, (slots.get(q.correct) ?? 0) + 1);
  for (const [s, c] of slots) ok((c / closed.length) * 100 <= 40, `slot ${s} holds ${Math.round((c / closed.length) * 100)}%`);
});

test('the in-mission questions do not cluster either, and nothing shuffles them', { skip: noLesson }, () => {
  const inMission: { section: string; correct: number }[] = [];
  for (const s of L!.sections) {
    const sid = (s as { id?: string }).id ?? '?';
    if (s.type === 'groupDrill') for (const g of s.groups) if (g.check) inMission.push({ section: sid, correct: g.check.correct });
    if (s.type === 'listening') for (const q of s.questions) inMission.push({ section: sid, correct: q.correct });
    if (s.type === 'trapDrill') for (const d of s.drill) inMission.push({ section: sid, correct: d.correct });
  }
  ok(inMission.length > 0);
  const slots = new Map<number, number>();
  for (const q of inMission) slots.set(q.correct, (slots.get(q.correct) ?? 0) + 1);
  for (const [s, c] of slots) ok((c / inMission.length) * 100 <= 40, `in-mission slot ${s} holds ${Math.round((c / inMission.length) * 100)}%`);
  let prev: { section: string; correct: number } | null = null;
  for (const q of inMission) {
    ok(!(prev && prev.section === q.section && prev.correct === q.correct), `${q.section}: consecutive questions share slot ${q.correct}`);
    prev = q;
  }
});

test('every remediation drill can actually fire', { skip: noLesson }, () => {
  const quiz = L!.sections.find((s) => s.type === 'quiz')!;
  const rounds = (quiz as { rounds?: { targets?: string[] }[] }).rounds ?? [];
  const triggers = L!.errorTriggers ?? [];
  const fired = new Set<string>();
  for (const r of rounds) {
    const t = (r.targets ?? []).find((x) => triggers.some((e) => e.id === x && e.drill));
    if (t) fired.add(t);
  }
  const orphans = triggers.filter((e) => e.drill && !fired.has(e.id)).map((e) => e.id);
  strictEqual(orphans.join(', '), '', 'drillForRound stops at the first resolving target, so a drill never named first is dead content');
  strictEqual(triggers.length, 5);
});

test('every drill named by a trigger exists, and every drill item resolves', { skip: noLesson }, () => {
  const drills = new Map((L!.drills ?? []).map((d) => [d.id, d] as const));
  for (const t of L!.errorTriggers ?? []) {
    if (t.drill) ok(drills.has(t.drill), `${t.id} names a drill that does not exist: ${t.drill}`);
    if (t.retest) ok(drills.has(t.retest), `${t.id} names a retest that does not exist: ${t.retest}`);
  }
  for (const d of L!.drills ?? []) {
    for (const id of (d as { items?: string[] }).items ?? []) ok(byId.has(id), `${d.id} names item ${id}, which is not in the seed`);
  }
});

/* ═══ 13. Sheets, glossary, layout ══════════════════════════════════════ */

test('every sheetId names a sheet, and every sheet is reachable', { skip: noLesson }, () => {
  const sheetIds = new Set((L!.sheets ?? []).map((s) => s.id));
  const named = L!.sections.map((s) => (s as { sheetId?: string }).sheetId).filter((x): x is string => !!x);
  for (const id of named) ok(sheetIds.has(id), `sheetId ${id} names no sheet`);
  for (const id of sheetIds) ok(named.includes(id), `sheet ${id} is linked from no section`);
});

test('a sheet only holds section types the sheet renderer draws', { skip: noLesson }, () => {
  const DRAWS = new Set(['teach', 'letterGrid', 'table']);
  const dead = (L!.sheets ?? []).flatMap((sh) => (sh.sections ?? []).filter((s) => !DRAWS.has(s.type)).map((s) => `${sh.id}: ${s.type}`));
  strictEqual(dead.join(', '), '', 'ReferenceSheet.tsx draws teach, letterGrid and table and nothing else; a cheatSheet there draws its title and no rows');
});

test('the verb sheet lists all ten with their stem, and names the class that is not here', { skip: noLesson }, () => {
  const sheet = (L!.sheets ?? []).find((s) => s.id === 'sheet.a2.10.ten');
  ok(sheet, 'the verb sheet is gone. A learner genuinely returns to this one.');
  const text = strings(sheet).join('\n');
  for (const v of THE_TEN) ok(text.includes(v), `${v} is not in the verb sheet`);
  for (const v of NOT_THIS_FAMILY) ok(text.includes(v), `${v} is not named in the verb sheet`);
});

test('the reading glossary keys can actually match, through the real segmenter', { skip: noLesson }, () => {
  const r = L!.sections.find((s) => s.type === 'reading');
  ok(r && r.type === 'reading', 'no reading section');
  ok(r!.questionsInModal, 'a reading without questionsInModal never reaches the glossary renderer');
  ok((r!.questions ?? []).length > 0, 'and it needs questions as well as the flag');
  const g = r!.glossary ?? [];
  ok(g.length > 0, 'no glossary');
  for (const e of g) ok(e.word.trim().split(/\s+/).length <= MAX_GLOSS_WORDS, `"${e.word}" is longer than MAX_GLOSS_WORDS`);
  // The REAL matcher, comparing matched KEYS rather than matched text. An earlier
  // a1.01 test inlined its own lookup, copied the version that was already
  // broken, and passed while the feature was dead.
  const keySet = new Set(g.flatMap((e) => glossKeys(e.word)));
  const matched = new Set<string>();
  for (const seg of segmentSentence(r!.text, keySet)) if (seg.key) matched.add(seg.key);
  const never = g.filter((e) => !glossKeys(e.word).some((k) => matched.has(k))).map((e) => e.word);
  strictEqual(never.join(', '), '', 'glossary entries that underline nothing in the passage');
});

test('the reading passage is one block', { skip: noLesson }, () => {
  const r = L!.sections.find((s) => s.type === 'reading');
  ok(r && r.type === 'reading');
  ok(!r!.text.includes('\n'), 'PassagePage splits on sentence boundaries, so an authored newline is silently discarded');
});

test('commonErrors sections set swipe, or they render a blank screen', { skip: noLesson }, () => {
  for (const s of L!.sections) {
    if (s.type !== 'commonErrors') continue;
    ok((s as { swipe?: boolean }).swipe, `${(s as { id?: string }).id} has no swipe; a1.01 mission 5 drew a blank screen this way`);
  }
});

test('no section declares more than three term chips', { skip: noLesson }, () => {
  for (const s of L!.sections) {
    const terms = (s as { terms?: string[] }).terms ?? [];
    ok(terms.length <= 3, `${(s as { id?: string }).id} declares ${terms.length} chips; the renderer shows three`);
    for (const t of terms) ok(L!.terms?.[t], `${(s as { id?: string }).id} names term "${t}", which is not defined`);
  }
});

test('no practice at skill write, which draws no writing surface', { skip: noLesson }, () => {
  for (const s of L!.sections) {
    if (s.type !== 'practice') continue;
    ok(s.skill !== 'write', 'practice at skill write renders nothing a learner can produce into');
  }
});

test('the speak mission only names rows the mic can score', { skip: noLesson }, () => {
  const p = L!.sections.find((s) => s.type === 'practice');
  ok(p && p.type === 'practice');
  for (const id of p!.itemIds ?? []) {
    const it = byId.get(id);
    ok(it, `${id} is not in the seed`);
    ok((it!.drills ?? []).includes('voiceflash'), `${id} carries no voiceflash, so the mic-scored deck cannot score it`);
  }
});

test('no autoplay and no imageRef, both of which are read by nothing', { skip: noLesson }, () => {
  const json = JSON.stringify(L);
  ok(!json.includes('"autoplay"'), 'autoplay is declared in schema.ts and implemented in no component');
  ok(!json.includes('"imageRef"'), 'lesson-contract.test.ts does not check imageRef and an unregistered ref draws a blank box');
});

test('the break card stays inside the measured budget', { skip: noLesson }, () => {
  // a2.01 took three device passes on a Pixel 6 to establish these, and they are
  // in the ledger §7. `scene` is not in ownsLayout(), so the card cannot size
  // itself and every wrapped line costs about 85px.
  const scene = L!.sections.find((s) => s.type === 'scene');
  ok(scene && scene.type === 'scene');
  const br = (scene!.beats ?? []).find((b) => b.kind === 'break') as
    | { heading?: string; body?: string; coach?: string; wrong?: { en?: string }; right?: { en?: string } }
    | undefined;
  ok(br, 'the scene has no break card');
  ok((br!.heading ?? '').length <= 13, `the break heading is ${(br!.heading ?? '').length} characters; it wraps at about twelve and the second line pushes Continue below the fold`);
  const words = (br!.body ?? '').trim().split(/\s+/).length;
  ok(words >= 24 && words <= 30, `the break body is ${words} words; a1.06's proven configuration is 26`);
  ok((br!.coach ?? '').trim().split(/\s+/).length <= 9, 'the coach line is over the measured budget');
  ok((br!.wrong?.en ?? '').length <= 24, `the wrong gloss is ${(br!.wrong?.en ?? '').length} characters; over about 24 it wraps to two lines`);
  ok((br!.right?.en ?? '').length <= 24, `the right gloss is ${(br!.right?.en ?? '').length} characters`);
});

test('the scene is a NUMBER failure, and nobody is corrected', { skip: noLesson }, () => {
  const scene = L!.sections.find((s) => s.type === 'scene');
  ok(scene && scene.type === 'scene');
  const text = strings(scene).join('\n').toLowerCase();
  ok(
    text.includes('one seat') || text.includes('one person'),
    'the A2 register here is a sentence that was perfect French and said the wrong number; the scene has stopped'
    + ' being about that',
  );
  ok(!text.includes('corrects you'), 'the A2 register is nobody being corrected');
  // The choice beat must be the singular against the plural of the SAME verb,
  // because that is the only thing the lesson teaches.
  const choice = (scene!.beats ?? []).find((b) => b.kind === 'choice') as { options?: { fr: string; outcome?: string }[] } | undefined;
  ok(choice, 'the scene has no choice beat');
  const breaks = choice!.options?.find((o) => o.outcome === 'breaks');
  const works = choice!.options?.find((o) => o.outcome === 'works');
  ok(breaks?.fr.includes('Je finis'), 'the failing option is no longer the singular');
  ok(works?.fr.includes('Nous finissons'), 'the working option is no longer the plural');
});

/* ═══ 14. Audio briefs ══════════════════════════════════════════════════ */

test('THE CONTRAST PAIR IS BRIEFED AS ONE TAKE, RECORDED ADJACENTLY', { skip: noLesson }, () => {
  // A constraint on how something is recorded becomes invisible the moment the
  // clip is delivered, so it is written into `desc` AND pinned here.
  const rec = (L!.audio?.recorded ?? []).find((r) => r.id === 'rec-a2-10-contrast');
  ok(rec, 'rec-a2-10-contrast is gone');
  const d = rec!.desc.toLowerCase();
  ok(d.includes('one continuous take'), 'the one-take instruction is gone; two sessions are two performances');
  ok(d.includes('adjacent'), 'the desc no longer says the two must be recorded next to each other');
  ok(d.includes('not a syllable') || d.includes('final s'), 'the desc no longer says what the difference actually is');
  ok(d.includes('do not lengthen') || d.includes('do not lean'), 'the desc no longer forbids exaggerating the plural');
  for (const clip of ['Il finit tôt.', 'Ils finissent tôt.']) {
    ok((rec!.clipIds ?? []).includes(clip), `${clip} is not in the contrast clip list`);
  }
});

test('and the singular triple is briefed as INDISTINGUISHABLE', { skip: noLesson }, () => {
  const rec = (L!.audio?.recorded ?? []).find((r) => r.id === 'rec-a2-10-hidden');
  ok(rec, 'rec-a2-10-hidden is gone');
  const d = rec!.desc.toLowerCase();
  ok(d.includes('indistinguishable'), 'the desc no longer says the three must sound the same, which is the whole claim');
  ok(d.includes('do not help') || d.includes('do not differentiate'), 'the desc no longer forbids the studio clarifying them');
});

test('every recordingId a section names is declared', { skip: noLesson }, () => {
  const declared = new Set((L!.audio?.recorded ?? []).map((r) => r.id));
  const used = new Set<string>();
  const walk = (v: unknown) => {
    if (Array.isArray(v)) v.forEach(walk);
    else if (v && typeof v === 'object') {
      for (const [k, x] of Object.entries(v)) {
        if (k === 'recordingId' && typeof x === 'string') used.add(x);
        else walk(x);
      }
    }
  };
  walk(L!.sections);
  for (const id of used) ok(declared.has(id), `a section names recordingId "${id}", which is not declared`);
});

/* ═══ 15. House rules ═══════════════════════════════════════════════════ */

test('no em dash anywhere in the lesson', { skip: noLesson }, () => {
  const bad = strings(L!).filter((s) => s.includes('—'));
  strictEqual(bad.join('\n'), '');
});

test('no grammar jargon on a learner surface', { skip: noLesson }, () => {
  const JARGON = ['conjugation', 'conjugate', 'conjugated', 'indicative', 'morpheme', 'inflection', 'paradigm', 'orthography', 'phoneme'];
  const hit = JARGON.filter((j) => hasPhrase(learnerText, j));
  strictEqual(hit.join(', '), '');
});

test('the lesson declares what it assumes and what it introduces', { skip: noLesson }, () => {
  ok((L!.grammarAssumed ?? []).some((g) => g.includes('a2.01')), 'grammarAssumed does not name a2.01');
  ok((L!.grammarIntroduced ?? []).length >= 4);
});

test('the speak and dictation id lists agree between source and seed', { skip: noLesson || noSrc }, () => {
  const speak = L!.sections.find((s) => s.type === 'practice') as { itemIds?: string[] } | undefined;
  strictEqual((speak?.itemIds ?? []).join(','), SRC_SPEAK.join(','));
  const dict = L!.sections.find((s) => s.type === 'dictation') as { itemIds?: string[] } | undefined;
  strictEqual((dict?.itemIds ?? []).join(','), SRC_DICTATION.join(','));
  strictEqual(L!.itemIds.join(','), SRC_ITEM_IDS.join(','));
  strictEqual(SRC_CONTRAST_SECTION, CONTRAST_SECTION);
  strictEqual(SRC_BOUNDARY_SECTION, BOUNDARY_SECTION);
  strictEqual(SRC_CONTRAST_ROWS.indexOf(SRC_CONTRAST.singular) + 1, SRC_CONTRAST_ROWS.indexOf(SRC_CONTRAST.plural));
});
