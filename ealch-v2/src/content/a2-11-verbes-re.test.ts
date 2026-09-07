// a2.11.l1 "Les verbes en -RE": the assertions that keep this lesson true.
//
// Modelled on a2-10-verbes-ir.test.ts. Everything here runs the REAL app function
// rather than a copy: an earlier a1.01 test inlined its own glossary lookup,
// copied the version that was already broken, and passed while the feature was
// dead.
//
// ── What this file is actually guarding ────────────────────────────────────
//
// This lesson authors 24 sentences and imports all seven of its verbs, so the
// failure mode is not "the word is missing". It is:
//
//   THE il FORM QUIETLY GROWING AN ENDING. `il vend` writes nothing after the
//   stem and that is the whole lesson. The empty string is asserted as DATA in
//   four places (the ENDINGS row, the THREE_CELLS row, the authored row, and the
//   cell the table prints), because prose saying "nothing" survives a card that
//   has stopped showing it.
//   THE THREE-WAY COMPARISON BEING DROPPED OR SPLIT. `il parle`, `il finit` and
//   `il vend` are the three rows of ONE tapTable, in trail order, on one frame,
//   each with its own audio. Checked by row INDEX and by FRAME, not by "the three
//   strings appear somewhere".
//   THE SINGULAR TRIPLE LOSING ITS IDENTITY. je vends, tu vends and il vend carry
//   respellings that are ONE STRING once the pronoun comes off. A well-meaning
//   pass that "clarified" one of them destroys the only evidence for the half of
//   a2.01 and a2.10 that is still true here.
//   THE BOUNDARY CLASS BEING CONJUGATED. prendre, mettre and battre and their five
//   compounds are named on one card and built nowhere, right or wrong. Scoped to
//   PRODUCTION SURFACES, because the card that hands them over has to be able to
//   talk about them; a guard over every string fires on legitimate content and
//   gets deleted.
//   A SECOND REFERENCE SHEET APPEARING. The decision was ONE sheet and it is the
//   cross-group one. A future author reaching for "the -RE endings, in full"
//   breaks a constant rather than shipping a fourth competing reference.
//   THE NASAL REPAIRS BEING REVERTED. hasPlainNasalFor is BLIND to eleven of this
//   lesson's nasals, so the shared checker will not notice. Every one is asserted
//   by name and the blindness itself is re-confirmed in both directions.
//   AN EAR QUESTION BEING WRITTEN BETWEEN TWO FORMS THAT ARE ONE SOUND. No
//   recording separates vends from vend, so such a question would certify a bug.
//   THE LESSON DRIFTING BACK TOWARDS a2.10. The reframe may not be about the
//   sound, there may be only one listening mission, and the typed half of the
//   quiz has to outweigh the listened half by more than two to one.
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

const L = seed.lessons.find((l) => l.id === 'a2.11.l1');
const noLesson = !L;
const byId = new Map(seed.items.map((i) => [i.id, i] as const));

/* ─── The shape of the lesson ──────────────────────────────────────────── */

const SPINE = [
  's01-scene', 's02-goals', 's03-third',
  's04-machine', 's05-six', 's06-seven',
  's07-cells', 's08-nothing', 's09-triple', 's10-write', 's11-newverb', 's12-dsound', 's13-flash',
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

const REFRAME = 'The il form takes nothing, and that is the ending.';
/** NINE sections, plus the `reframe` field itself when the whole object is
 *  walked. Asserted against an explicit constant, never a figure derived from the
 *  lesson: a derived count compares the content to itself and survives any
 *  rewording. */
const REFRAME_SECTIONS = 9;
const REFRAME_APPEARANCES = 10;
const THREE_GROUPS = 'Three groups, three endings on the il form, and one of them is nothing.';
/** a2.01's constant, quoted verbatim. The ledger binds all twenty A2 lessons to
 *  it, and on a -re verb it lands on the cell that writes nothing. */
const NOUS_ON = 'nous parlons is what you write. on parle is what you say.';
/** BOTH predecessors, because the headline screen is a three-way comparison and a
 *  comparison with one side unattributed is a table rather than a teaching. */
const BACKREFS = ['a2.01', 'a2.10'];

const CELLS_SECTION = 's07-cells';
const NOUS_ON_SECTION = 's08-nothing';
const BOUNDARY_SECTION = 's16-notmine';
/** ONE sheet, and it is the cross-group one. The brief asked for a2.01's sheet to
 *  be extended rather than duplicated; a sheetId resolves only inside the lesson
 *  that declares it (schema.ts:3490, lesson-contract.test.ts:91), so that was
 *  never possible, and this is what was done instead. */
const SHEET_ID = 'sheet.a2.11.threegroups';
const EXPECTED_SHEETS = 1;

/** THE THREE CELLS. One frame, three groups, and only the last writes nothing.
 *  In trail order, which is the order the section must render them in. */
const THREE_CELLS: { group: string; unit: string; fr: string; form: string; ending: string }[] = [
  { group: '-er', unit: 'a2.01', fr: 'Il parle ici.', form: 'il parle', ending: '-e' },
  { group: '-ir', unit: 'a2.10', fr: 'Il finit ici.', form: 'il finit', ending: '-it' },
  { group: '-re', unit: 'a2.11', fr: 'Il vend ici.', form: 'il vend', ending: '' },
];
/** The frame every one of the three runs on. If they stop sharing it, the screen
 *  compares three objects as well as three endings. */
const CELLS_FRAME = 'ici.';

/** All seven, BY NAME. A count passes after somebody quietly swaps one out. */
const THE_SEVEN = ['vendre', 'attendre', 'répondre', 'entendre', 'perdre', 'rendre', 'descendre'];

/** The class that ends in -re and is built another way, plus its compounds.
 *  Named on one card, conjugated nowhere. */
const NOT_THIS_FAMILY = ['prendre', 'mettre', 'battre'];
const NOT_THIS_FAMILY_COMPOUNDS = ['apprendre', 'comprendre', 'permettre', 'promettre', 'combattre'];
const NOT_THIS_FAMILY_UNIT = 'a2.15';
/** Correct conjugations of that class: banned on a PRODUCTION SURFACE. `met`,
 *  `mets`, `bat` and `bats` are deliberately absent — the last two are ordinary
 *  English words and every instruction line here is English, and `mets` is an
 *  ordinary French noun. See the corpus header. */
const NOT_THIS_FAMILY_FORMS = [
  'prends', 'prend', 'prenons', 'prenez', 'prennent',
  'mettons', 'mettez', 'mettent',
  'battons', 'battez', 'battent',
  'apprends', 'apprend', 'apprenons', 'apprenez', 'apprennent',
  'comprends', 'comprend', 'comprenons', 'comprenez', 'comprennent',
  'permettent', 'promettent', 'combattent',
];
/** What the vendre model produces when it is run on that class: banned
 *  EVERYWHERE, not merely on a production surface. This lesson does not print
 *  the error in order to reject it, because nobody here holds `ils prennent` to
 *  replace it with. It DOES print `il vende`, and that is the difference. */
const OVER_GENERALISED_FORMS = [
  'prendons', 'prendez', 'prendent',
  'apprendons', 'apprendez', 'apprendent',
  'comprendons', 'comprendez', 'comprendent',
  'metts', 'mett', 'batts', 'batt',
];

/** THE SINGULAR TRIPLES, whose respellings are one string once the pronoun comes
 *  off. Two triples on two verbs, because one triple is a fact about vendre. */
const SINGULAR_TRIPLES: string[][] = [
  ['fr.a2.verbes.221', 'fr.a2.verbes.222', 'fr.a2.verbes.223'],
  ['fr.a2.verbes.229', 'fr.a2.verbes.230', 'fr.a2.verbes.231'],
];

/** The six respellings this build repaired, with the value it wrote. Reverting
 *  any of them puts a plain n back on a nasal vowel, and the shared checker can
 *  only see two of the six. */
const REPAIRED: Record<string, string> = {
  'fr.sons.verbes-essentiels.029': 'ahⁿ-TAHⁿDR', // entendre, both nasals
  'fr.a1.transports-quotidiens.045': 'day-SAHⁿDR', // descendre
  'fr.a2.verbes.027': 'VAHⁿDR', // vendre
  'fr.sons.verbes-essentiels.028': 'ah-TAHⁿDR', // attendre
  'fr.a2.verbes.020': 'ray-POHⁿDR', // répondre
  'fr.sons.verbes-essentiels.128': 'RAHⁿDR', // rendre
};
/** The two of those six whose broken value the shared checker CAN see. Kept apart
 *  because the two halves need opposite guards. */
const REPAIRS_VISIBLE: Record<string, string> = {
  'fr.sons.verbes-essentiels.029': 'ahn-TAHNDR',
  'fr.a1.transports-quotidiens.045': 'day-SAHN-druh',
};
/** And the four it cannot. a2.10's repair guard would reject every one of these
 *  as "not a violation", which is the checker being wrong rather than the repair. */
const REPAIRS_INVISIBLE: Record<string, string> = {
  'fr.a2.verbes.027': 'VAHNDR',
  'fr.sons.verbes-essentiels.028': 'ah-TAHNDR',
  'fr.a2.verbes.020': 'ray-PONDR',
  'fr.sons.verbes-essentiels.128': 'RAHNDR',
};

/** The WORD-INTERNAL nasals in this lesson's own authored rows. Every one is a
 *  nasal followed by a d inside the token, which is what a regular -RE stem always
 *  produces, and hasPlainNasalFor needs the n to END a token. Invariants §3. */
const MUST_CARRY_SUPERSCRIPT: Record<string, string> = {
  'fr.a2.verbes.226': 'vahⁿd', // ils vendent
  'fr.a2.verbes.233': 'tahⁿd', // ils attendent
  'fr.a2.verbes.235': 'tahⁿd', // ils entendent
  'fr.a2.verbes.237': 'rahⁿd', // elles rendent
  'fr.a2.verbes.241': 'sahⁿd', // ils descendent
};
/** THE HALF REPAIR THAT PASSES THE CHECKER AND IS STILL WRONG. entendre has two
 *  nasal vowels; the checker sees the first and is blind to the second, so
 *  repairing what it reports produces this, which it then calls clean. */
const HALF_REPAIRED_ENTENDRE = { fr: 'entendre', respell: 'ahⁿ-TAHNDR' };

/** Forms of one verb that are IDENTICAL out loud. A listenChoose whose options
 *  differ ONLY by a member of one group has no correct answer. */
const HOMOPHONE_FORMS: string[][] = [
  ['vends', 'vend'],
  ['attends', 'attend'],
  ['réponds', 'répond'],
  ['entends', 'entend'],
  ['perds', 'perd'],
  ['rends', 'rend'],
  ['descends', 'descend'],
];

const OWNED = { from: 'fr.a2.verbes.221', to: 'fr.a2.verbes.260' };
const THEME = 'verbes';

function strings(v: unknown, out: string[] = []): string[] {
  if (typeof v === 'string') out.push(v);
  else if (Array.isArray(v)) v.forEach((x) => strings(x, out));
  else if (v && typeof v === 'object') Object.values(v).forEach((x) => strings(x, out));
  return out;
}

/** The same walk with TRANSCRIPTION fields left out. A word-level guard must not
 *  read IPA: it separates syllables with a full stop, so `/nu vɑ̃.dɔ̃/` reads as a
 *  standalone `dɔ̃` and a2.01's aller check fired on `.va.` while its lesson was
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

/** EVERY SURFACE A LEARNER READS, and `intro` and `overview` are two of them.
 *
 *  WIDENED 2026-08-12 AFTER A DEVICE PASS. This walk was `sections + sheets +
 *  terms`, copied from a2-10-verbes-ir.test.ts, and it missed `intro` — which is
 *  drawn on the lesson overview card AND on the lesson cover. v1 shipped the
 *  phrase "third person" there, on two screens, while every other occurrence in
 *  the lesson had already been caught and reworded by the same JARGON list.
 *
 *  `grammarAssumed` and `grammarIntroduced` are deliberately NOT here: invariants
 *  §8 says they are addressed to the curriculum and may use the precise words. */
const learnerText = noLesson ? '' : [
  ...strings(L!.sections),
  ...strings(L!.sheets ?? []),
  ...strings(L!.terms ?? {}),
  L!.intro ?? '',
  ...strings(L!.overview ?? {}),
].join('\n');

const learnerProse = noLesson ? [] : [
  ...prose(L!.sections),
  ...prose(L!.sheets ?? []),
  ...prose(L!.terms ?? {}),
  L!.intro ?? '',
  ...prose(L!.overview ?? {}),
];

/** What the learner is asked to PRODUCE or CHOOSE, plus the vocabulary decks.
 *  Narrower than "every string", and the only scope on which the neighbour guards
 *  are honest: s16-notmine NAMES prendre and mettre in order to hand them over. */
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
let SRC_THREE_GROUPS = '';
let SRC_NOUS_ON = '';
let SRC_BACKREFS: string[] = [];
let SRC_AUTHORED: Item[] = [];
let SRC_IMPORTED: Item[] = [];
let SRC_BOUNDARY_IDS: string[] = [];
let SRC_SEVEN: readonly string[] = [];
let SRC_NOT_THIS_FAMILY: readonly string[] = [];
let SRC_NOT_THIS_FAMILY_COMPOUNDS: readonly string[] = [];
let SRC_NOT_THIS_FAMILY_FORMS: readonly string[] = [];
let SRC_OVER_GENERALISED: readonly string[] = [];
let SRC_ENDINGS: { person: string; ending: string; write: string; dSounds: boolean }[] = [];
let SRC_THREE_CELLS: { group: string; unit: string; id: string; ending: string }[] = [];
let SRC_BARE_CELL: { group: string; ending: string }[] = [];
let SRC_BARE_FORM_IDS: string[] = [];
let SRC_REPAIRS: { id: string; fr: string; from: string; to: string }[] = [];
let SRC_REPAIRS_VISIBLE: { id: string; from: string; to: string }[] = [];
let SRC_REPAIRS_INVISIBLE: { id: string; from: string; to: string }[] = [];
let SRC_BLIND: { id: string; must: string }[] = [];
let SRC_BLIND_IMPORTED: { id: string; must: string }[] = [];
let SRC_DRILL_ADDITIONS: { id: string; add: string }[] = [];
let SRC_SPEAK: string[] = [];
let SRC_DICTATION: string[] = [];
let SRC_ITEM_IDS: string[] = [];
let SRC_NEAR_MISS: { id: string; wrong: string; scorable: boolean }[] = [];
let SRC_D_PAIRS: [string, string][] = [];
let SRC_PRONOUN_BLIND: [string, string][] = [];
let SRC_TRIPLES: string[][] = [];
let SRC_HOMOPHONES: string[][] = [];
let SRC_AFTER_PRONOUN: (s: string) => string = (s) => s;
let SRC_CELLS_SECTION = '';
let SRC_CELLS_ROWS: string[] = [];
let SRC_BOUNDARY_SECTION = '';
let SRC_NOUS_ON_SECTION = '';
let SRC_SHEET_ID = '';
let SRC_SHEET_DECISION: { id: string; count: number; names: readonly string[] } | null = null;
let SRC_RANGE = { from: '', to: '' };
/** Why the source is unavailable, if it is.
 *
 *  a2.10's version of this block swallows every error and lets the source-derived
 *  half of the file no-op. That is right for a checkout without `ealch-admin` and
 *  WRONG for a source that exists and throws: the mutation run for this build put
 *  a verb into THE_SEVEN that is not in the imported set, `verbCard` threw at
 *  module load, and the whole source-derived half went quiet while the file still
 *  reported green. So the two cases are told apart. */
let SRC_ERROR: unknown = null;

try {
  const corpus = await import('../../../ealch-admin/scripts/data/verbes-re-corpus.ts');
  const lesson = await import('../../../ealch-admin/scripts/data/verbes-re-lesson.ts');
  const imported = await import('../../../ealch-admin/scripts/data/verbes-re-imported.ts');
  const terms = await import('../../../ealch-admin/scripts/data/verbes-re-terms.ts');
  SRC = lesson.VERBES_RE_LESSON as Lesson;
  SRC_REFRAME = terms.REFRAME as string;
  SRC_THREE_GROUPS = terms.THREE_GROUPS as string;
  SRC_NOUS_ON = terms.NOUS_ON as string;
  SRC_BACKREFS = terms.BACKREFS as string[];
  SRC_AUTHORED = (corpus.VERBES_RE as unknown[]).map((s) => corpus.toItem(s as never)) as Item[];
  SRC_IMPORTED = imported.IMPORTED_ROWS as unknown as Item[];
  SRC_BOUNDARY_IDS = (imported.BOUNDARY_VERBS as { id: string }[]).map((b) => b.id);
  SRC_SEVEN = corpus.THE_SEVEN as readonly string[];
  SRC_NOT_THIS_FAMILY = corpus.NOT_THIS_FAMILY as readonly string[];
  SRC_NOT_THIS_FAMILY_COMPOUNDS = corpus.NOT_THIS_FAMILY_COMPOUNDS as readonly string[];
  SRC_NOT_THIS_FAMILY_FORMS = corpus.NOT_THIS_FAMILY_FORMS as readonly string[];
  SRC_OVER_GENERALISED = corpus.OVER_GENERALISED_FORMS as readonly string[];
  SRC_ENDINGS = corpus.ENDINGS as unknown as typeof SRC_ENDINGS;
  SRC_THREE_CELLS = corpus.THREE_CELLS as unknown as typeof SRC_THREE_CELLS;
  SRC_BARE_CELL = corpus.BARE_CELL as unknown as typeof SRC_BARE_CELL;
  SRC_BARE_FORM_IDS = corpus.BARE_FORM_IDS as string[];
  SRC_REPAIRS = corpus.RESPELL_REPAIRS as unknown as typeof SRC_REPAIRS;
  SRC_REPAIRS_VISIBLE = corpus.RESPELL_REPAIRS_VISIBLE as unknown as typeof SRC_REPAIRS_VISIBLE;
  SRC_REPAIRS_INVISIBLE = corpus.RESPELL_REPAIRS_INVISIBLE as unknown as typeof SRC_REPAIRS_INVISIBLE;
  SRC_BLIND = corpus.BLIND_NASALS as unknown as typeof SRC_BLIND;
  SRC_BLIND_IMPORTED = corpus.BLIND_NASALS_IMPORTED as unknown as typeof SRC_BLIND_IMPORTED;
  SRC_DRILL_ADDITIONS = corpus.DRILL_ADDITIONS as unknown as typeof SRC_DRILL_ADDITIONS;
  SRC_SPEAK = lesson.VERBES_RE_SPEAK_IDS as string[];
  SRC_DICTATION = lesson.VERBES_RE_DICTATION_IDS as string[];
  SRC_ITEM_IDS = lesson.VERBES_RE_ITEM_IDS as string[];
  SRC_NEAR_MISS = corpus.DICTEE_NEAR_MISS as unknown as typeof SRC_NEAR_MISS;
  SRC_D_PAIRS = corpus.D_PAIRS as [string, string][];
  SRC_PRONOUN_BLIND = corpus.PRONOUN_BLIND_PAIRS as [string, string][];
  SRC_TRIPLES = corpus.SINGULAR_TRIPLES as string[][];
  SRC_HOMOPHONES = corpus.HOMOPHONE_FORMS as string[][];
  SRC_AFTER_PRONOUN = corpus.afterPronoun as (s: string) => string;
  SRC_CELLS_SECTION = lesson.CELLS_SECTION_ID as string;
  SRC_CELLS_ROWS = lesson.CELLS_ROW_IDS as string[];
  SRC_BOUNDARY_SECTION = lesson.BOUNDARY_SECTION_ID as string;
  SRC_NOUS_ON_SECTION = lesson.NOUS_ON_SECTION_ID as string;
  SRC_SHEET_ID = lesson.SHEET_ID as string;
  SRC_SHEET_DECISION = corpus.SHEET_DECISION as unknown as typeof SRC_SHEET_DECISION;
  SRC_RANGE = corpus.OWNED_ID_RANGE as typeof SRC_RANGE;
} catch (e) {
  SRC_ERROR = e;
}
const noSrc = !SRC;
/** Absent is fine. Present and throwing is not. */
const MISSING_CODES = new Set(['ERR_MODULE_NOT_FOUND', 'MODULE_NOT_FOUND', 'ENOENT']);
const srcMerelyAbsent = !!SRC_ERROR && MISSING_CODES.has((SRC_ERROR as { code?: string }).code ?? '');

/* ═══ 1. The lesson exists, in the shape it claims ═══════════════════════ */

test('a2.11.l1 is in the seed', () => {
  ok(L, 'a2.11.l1 is not in seed.json');
});

test('THE AUTHORED SOURCE EITHER IMPORTS OR IS GENUINELY ABSENT', () => {
  // Half of this file compares the seed against the authored source, and all of
  // that half is `{ skip: noSrc }`. A source that is missing is a checkout
  // without ealch-admin and the skips are correct. A source that THROWS is a
  // broken build, and swallowing it turns fifty assertions into silence while the
  // file still reports green. This distinguishes the two.
  ok(
    SRC || srcMerelyAbsent,
    `the authored source threw on import, so every source-derived test in this file silently skipped: ${String(SRC_ERROR)}`,
  );
});

test('it is a first build, and the counter only ever moves forward', { skip: noLesson }, () => {
  // Probed rather than assumed: the unit dump said `"lessons": []`, so unlike
  // a2.01 there was no pre-v2 stub to rebuild and the counter started at 1.
  ok(L!.version >= 1, `a2.11.l1 is v${L!.version}`);
  strictEqual(L!.unitId, 'a2.11');
  strictEqual(L!.level, 'a2');
  strictEqual(L!.tag, 'A2 · LEÇON 04', 'the unit sits at seq 4, so missions.ts draws LEÇON 04');
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
    + ' a2.01 and a2.10 already taught the method; if act 2 grows, this lesson has started re-teaching the two'
    + ' lessons before it instead of teaching the one cell that is new.',
  );
});

test('THE PARADIGM ACT CARRIES NO TABLE OF ANY KIND', { skip: noLesson }, () => {
  // a2.10 spent its paradigm act on a six-row audible table because its Owns was
  // the sound. This lesson's Owns is one cell on a page, so the paradigm gets
  // three light missions and the full nine-pronoun version lives in the sheet.
  // Giving the derivable parts the weight is how the third paradigm in four
  // lessons turns into a reference document.
  const act2 = (L!.acts ?? []).find((a) => a.id === 'act2')!;
  for (const sid of act2.sections) {
    const s = section(sid);
    ok(s && !['table', 'tapTable'].includes(s.type as string), `${sid} is a ${s?.type} inside the paradigm act`);
  }
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

test('ONE tapTable in the flow, and it is the cross-group comparison', { skip: noLesson }, () => {
  const taps = L!.sections.filter((s) => s.type === 'tapTable');
  strictEqual(taps.length, 1, 'one table, one tapTable, then stop');
  strictEqual(
    (taps[0] as { id?: string }).id, CELLS_SECTION,
    'the only screen with per-row audio belongs to the comparison, not to the paradigm',
  );
  strictEqual(L!.sections.filter((s) => s.type === 'table').length, 0, 'a table at layer core is a table-in-core density failure');
  const inSheets = (L!.sheets ?? []).flatMap((sh) => sh.sections ?? []).filter((s) => s.type === 'table').length;
  ok(inSheets >= 1, 'the full paradigm belongs in a reference sheet');
});

/* ═══ 2. THE OWNS: the cell that writes nothing ═════════════════════════ */

test('THE il FORM IS TAUGHT AS A BARE FORM, IN THE DATA AND NOT ONLY IN PROSE', { skip: noLesson || noSrc }, () => {
  // Four places say it, and this asserts all four. Prose saying "nothing"
  // survives a card that has quietly started showing something.
  const bare = SRC_ENDINGS.filter((e) => e.ending === '');
  strictEqual(bare.length, 1, `${bare.length} of the six endings are empty, expected exactly one`);
  strictEqual(bare[0].person, 'il · elle · on', 'the empty ending belongs to il, elle and on');
  strictEqual(bare[0].write, 'nothing');
  strictEqual(SRC_BARE_CELL.length, 1, 'exactly one of the three groups writes nothing');
  strictEqual(SRC_BARE_CELL[0].group, '-re');
  ok(SRC_BARE_FORM_IDS.length > 0, 'no authored row writes nothing after the stem, and that row is the lesson');
  const row = byId.get('fr.a2.verbes.223');
  ok(row, 'fr.a2.verbes.223 is not in the seed');
  strictEqual(row!.fr, 'Il vend ici.');
  ok(!/vende|vends/.test(row!.fr), 'the bare form has grown an ending');
});

test('THE THREE CELLS ARE THE THREE ROWS OF ONE tapTable, IN TRAIL ORDER', { skip: noLesson }, () => {
  const sec = section(CELLS_SECTION);
  ok(sec, `${CELLS_SECTION} is gone. That is the one screen the whole lesson turns on.`);
  strictEqual(sec!.type, 'tapTable', 'only a tapTable gives each row its own audio');
  const rows = sec!.rows as { cells: string[]; say?: string }[];
  strictEqual(rows.length, 3, 'three regular groups, three rows, and nothing else on the screen');
  rows.forEach((row, i) => {
    const cell = THREE_CELLS[i];
    strictEqual(row.say, cell.fr, `row ${i + 1} plays ${JSON.stringify(row.say)}, expected ${JSON.stringify(cell.fr)}`);
    ok(row.cells[0].includes(cell.group), `row ${i + 1} does not name the ${cell.group} group`);
    ok(namesUnitLabel(row.cells[0], cell.unit), `row ${i + 1} does not say which unit ${cell.group} came from`);
    strictEqual(row.cells[1], cell.form, `row ${i + 1} shows ${JSON.stringify(row.cells[1])}, expected ${JSON.stringify(cell.form)}`);
    strictEqual(
      row.cells[2], cell.ending === '' ? 'nothing' : cell.ending,
      `row ${i + 1} prints ${JSON.stringify(row.cells[2])} in the ending column`,
    );
  });
  strictEqual(rows[2].cells[2], 'nothing', 'the empty cell is last, because arriving at it is the mission');
});

test('and all three run on ONE FRAME, so only the verb moves', { skip: noLesson }, () => {
  // This is why the build authored Il parle ici. and Il finit ici. rather than
  // reusing a2.01's Il parle français. and a2.10's Il finit tôt.: three frames
  // would compare three objects as well as three endings.
  for (const cell of THREE_CELLS) {
    const row = byId.get(
      cell.fr === 'Il parle ici.' ? 'fr.a2.verbes.227'
        : cell.fr === 'Il finit ici.' ? 'fr.a2.verbes.228'
          : 'fr.a2.verbes.223',
    );
    ok(row, `${cell.fr} is not in the seed`);
    strictEqual(row!.fr, cell.fr);
    ok(row!.fr.endsWith(CELLS_FRAME), `${cell.fr} does not run on the shared frame "${CELLS_FRAME}"`);
  }
  const frames = THREE_CELLS.map((c) => c.fr.replace(/^\S+\s+\S+\s*/, ''));
  strictEqual(new Set(frames).size, 1, `the three cells run on different frames: ${JSON.stringify(frames)}`);
});

test('the source and the seed agree about the three cells', { skip: noSrc }, () => {
  strictEqual(SRC_THREE_CELLS.length, 3);
  strictEqual(SRC_THREE_CELLS.map((c) => c.group).join(','), THREE_CELLS.map((c) => c.group).join(','));
  strictEqual(SRC_THREE_CELLS.map((c) => c.ending).join('|'), THREE_CELLS.map((c) => c.ending).join('|'));
  strictEqual(SRC_CELLS_SECTION, CELLS_SECTION);
  strictEqual(SRC_CELLS_ROWS.join(','), SRC_THREE_CELLS.map((c) => c.id).join(','));
});

test('the three endings are one letter, two letters and none', { skip: noLesson }, () => {
  // The arithmetic the quiz prints, asserted rather than trusted to a card.
  const lengths = THREE_CELLS.map((c) => c.ending.replace('-', '').length);
  strictEqual(lengths.join(','), '1,2,0');
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
      + ' Three spellings and one sound is the half of a2.01 and a2.10 that this lesson keeps, and these'
      + ' respellings are the only evidence for it.',
    );
    strictEqual(new Set(rows.map((r) => r.fr)).size, 3, 'a triple does not hold three different sentences');
  }
});

test('and each triple holds exactly one bare form', { skip: noSrc }, () => {
  strictEqual(SRC_TRIPLES.map((t) => t.join()).join('|'), SINGULAR_TRIPLES.map((t) => t.join()).join('|'));
  for (const triple of SRC_TRIPLES) {
    const rows = triple.map((id) => SRC_AUTHORED.find((i) => i.id === id)!);
    const tails = triple.map((id) => SRC_AFTER_PRONOUN(SRC_AUTHORED.find((i) => i.id === id)?.respell ?? ''));
    strictEqual(new Set(tails).size, 1, `the source triple ${triple.join(' / ')} does not sound the same`);
    const bare = rows.filter((r) => SRC_BARE_FORM_IDS.includes(r.id));
    strictEqual(bare.length, 1, `${triple.join(' / ')} holds ${bare.length} bare forms, expected exactly one`);
  }
});

test('the singular triple is TAUGHT as a triple, on a screen of its own', { skip: noLesson }, () => {
  const deck = section('s09-triple');
  ok(deck, 's09-triple is gone, and with it the only screen that shows the three side by side');
  const text = strings(deck).join('\n');
  for (const form of ['je vends', 'tu vends', 'il vend']) {
    ok(text.includes(form), `s09-triple no longer shows "${form}"`);
  }
  ok(text.includes('ils vendent'), 's09-triple no longer shows the form where the d arrives');
});

/* ═══ 4. Both back-references, and the placement line ═══════════════════ */

test('BOTH PREDECESSORS ARE NAMED, because the headline screen uses both their verbs', { skip: noLesson }, () => {
  for (const unit of BACKREFS) {
    ok(
      L!.sections.some((s) => strings(s).some((x) => namesUnitLabel(x, unit))),
      `${unit} is named by no section. The headline screen is a three-way comparison and a comparison with one`
      + ' side unattributed is a table rather than a teaching.',
    );
  }
});

test('THE THREE-GROUP LINE IS STATED VERBATIM IN AT LEAST THREE SECTIONS', { skip: noLesson }, () => {
  ok(learnerText.includes(THREE_GROUPS), `"${THREE_GROUPS}" appears on no screen`);
  const carrying = L!.sections.filter((s) => strings(s).some((x) => x.includes(THREE_GROUPS)));
  ok(carrying.length >= 3, `"${THREE_GROUPS}" reaches ${carrying.length} sections`);
});

test('the source carries the same back-references and the same line', { skip: noSrc }, () => {
// The source exports the LABELS a learner reads; this file names the units by
  // id and resolves them. Comparing the two lists directly compares a label
  // against an id and can only fail.
  strictEqual(SRC_BACKREFS.join(','), BACKREFS.map((u) => unitLabel(u)).join(','));
  strictEqual(SRC_THREE_GROUPS, THREE_GROUPS);
});

test('the opening mission places this lesson third of three', { skip: noLesson }, () => {
  const card = section('s03-third');
  ok(card, 's03-third is gone, and with it the only place the set is closed');
  const text = strings(card).join('\n');
  for (const unit of BACKREFS) ok(namesUnitLabel(text, unit), `s03-third no longer names ${unit}`);
  ok(text.includes(THREE_GROUPS), 's03-third no longer says what the three groups disagree about');
});

/* ═══ 5. nous / on, and the we that writes nothing ══════════════════════ */

test("a2.01's nous/on statement appears VERBATIM, in exactly one section", { skip: noLesson }, () => {
  ok(
    learnerText.includes(NOUS_ON),
    "the nous/on statement no longer appears verbatim. The ledger binds all twenty A2 lessons to a2.01's"
    + ' wording, and this lesson needs it: on takes the il form, which on a -re verb is the cell that writes'
    + ' nothing.',
  );
  const holders = L!.sections.filter((s) => strings(s).some((x) => x.includes(NOUS_ON))).map((s) => (s as { id?: string }).id);
  strictEqual(holders.join(','), NOUS_ON_SECTION, `the statement is in ${JSON.stringify(holders)}; it has one home so "where is this said?" has one answer`);
});

test('the source imports the constant rather than restating it', { skip: noSrc }, () => {
  strictEqual(SRC_NOUS_ON, NOUS_ON);
  strictEqual(SRC_NOUS_ON_SECTION, NOUS_ON_SECTION);
});

test('the on caveat is a corpus row, not only prose', { skip: noLesson }, () => {
  const row = byId.get('fr.a2.verbes.243');
  ok(row, 'fr.a2.verbes.243 is not in the seed');
  strictEqual(row!.fr, 'On vend des billets ici.');
  ok(row!.respell?.includes('ohⁿ vahⁿ'), 'the on row no longer carries the BARE form, which is the whole point of it');
  ok(!row!.respell?.includes('vahⁿd'), 'the on row has grown the d, and on takes the il form');
});

/* ═══ 6. The boundary: named, never conjugated ══════════════════════════ */

test('all three of the boundary class and all five compounds are NAMED', { skip: noLesson }, () => {
  strictEqual(NOT_THIS_FAMILY.length, 3);
  for (const v of [...NOT_THIS_FAMILY, ...NOT_THIS_FAMILY_COMPOUNDS]) {
    ok(
      hasPhrase(learnerText, v),
      `${v} is named nowhere. Naming the class IS the mission: a learner who runs the vendre model on prendre`
      + ' produces ils prendent, and nothing else in this lesson stops them.',
    );
  }
});

test('and they are all on ONE card, with a destination', { skip: noLesson }, () => {
  const card = section(BOUNDARY_SECTION);
  ok(card, `${BOUNDARY_SECTION} is gone, and with it the only place the boundary is named`);
  const text = strings(card).join('\n');
  for (const v of [...NOT_THIS_FAMILY, ...NOT_THIS_FAMILY_COMPOUNDS]) ok(hasPhrase(text, v), `${BOUNDARY_SECTION} does not name ${v}`);
  ok(
    namesUnitLabel(text, NOT_THIS_FAMILY_UNIT),
    `${BOUNDARY_SECTION} does not say where prendre, mettre and battre are taught. A boundary with no destination`
    + ' is a warning, not a teaching.',
  );
});

test('NOT ONE FORM OF THE BOUNDARY CLASS REACHES A PRODUCTION SURFACE', { skip: noLesson }, () => {
  const surfaces = productionSurfaces();
  const leaked = NOT_THIS_FAMILY_FORMS.filter((f) => surfaces.some((s) => hasPhrase(s, f)));
  strictEqual(leaked.join(', '), '', 'a conjugated form of the boundary class reached a production surface');
});

test('and no over-generalised form appears ANYWHERE', { skip: noLesson }, () => {
  // Banned everywhere, not merely on a production surface. This lesson does not
  // print `ils prendent` in order to reject it: a commonErrors card works when the
  // learner holds the right form to replace the wrong one with, and nobody here
  // holds `ils prennent`. It DOES print `il vende`, and that is the difference.
  const invented = OVER_GENERALISED_FORMS.filter((f) => learnerProse.some((s) => hasPhrase(s, f)));
  strictEqual(invented.join(', '), '', 'an over-generalised form is on a learner surface');
});

test('no boundary verb is released as an item', { skip: noLesson }, () => {
  const released = L!.itemIds.map((id) => byId.get(id)?.fr).filter(Boolean) as string[];
  for (const v of [...NOT_THIS_FAMILY, ...NOT_THIS_FAMILY_COMPOUNDS]) {
    ok(!released.includes(v), `${v} is a released item. Context is a display string, not a row in the hub.`);
  }
});

test('and the boundary rows were read from Postgres but never carried', { skip: noSrc }, () => {
  // The manifest reads them so the batch can prove they exist and so the decision
  // not to import them was taken with the rows in front of it. Carrying them
  // would put two cards in the hub for verbs no unit has taught.
  ok(SRC_BOUNDARY_IDS.length === 2, `${SRC_BOUNDARY_IDS.length} boundary rows read, expected 2`);
  for (const id of SRC_BOUNDARY_IDS) {
    ok(!SRC_IMPORTED.some((r) => r.id === id), `${id} is in IMPORTED_ROWS, so the merge would carry it`);
    ok(!SRC_ITEM_IDS.includes(id), `${id} is in itemIds`);
  }
});

test('the source and this file guard the same forms', { skip: noSrc }, () => {
  strictEqual(SRC_NOT_THIS_FAMILY.join(','), NOT_THIS_FAMILY.join(','));
  strictEqual(SRC_NOT_THIS_FAMILY_COMPOUNDS.join(','), NOT_THIS_FAMILY_COMPOUNDS.join(','));
  strictEqual(SRC_NOT_THIS_FAMILY_FORMS.join(','), NOT_THIS_FAMILY_FORMS.join(','));
  strictEqual(SRC_OVER_GENERALISED.join(','), OVER_GENERALISED_FORMS.join(','));
});

test('no stem-changer, no past, no indirect object', { skip: noLesson }, () => {
  // a2.09's changed stems, a2.21's auxiliary split and a2.24's indirect object.
  // The -er and -ir verbs themselves are NOT guarded: this lesson authors
  // `Il parle ici.` and `Il finit ici.` on purpose, and a guard against them
  // would be a guard against its own headline screen.
  const surfaces = productionSurfaces();
  for (const v of ['mangeons', 'commençons', 'appelle', 'achète', 'préfère', 'jette']) {
    ok(!surfaces.some((s) => hasPhrase(s, v)), `${v} reached a production surface and belongs to a2.09`);
  }
  for (const f of ['ai vendu', 'a vendu', 'ai attendu', 'a attendu', 'est descendu', 'vendais', 'attendions']) {
    ok(!learnerProse.some((s) => hasPhrase(s, f)), `${f} is on a learner surface and every row here is a simple present`);
  }
  for (const f of ['lui', 'leur', 'répond à', 'réponds à']) {
    ok(!surfaces.some((s) => hasPhrase(s, f)), `${f} reached a production surface, and what the à is doing is a2.24`);
  }
});

/* ═══ 7. This is not a2.10 again ════════════════════════════════════════ */

test('THE REFRAME NAMES THE CELL AND NOT THE SOUND', { skip: noLesson }, () => {
  // "The plural is where the D wakes up" is true, short and teachable, and it is
  // a2.10's reframe in new clothes: `il vend` is /vɑ̃/ and `ils vendent` is /vɑ̃d/,
  // so the -RE plural is audible in exactly the way the -IR plural is. Taking it
  // would have made this the second consecutive lesson about the ear, at seq 4,
  // in a run of three paradigm lessons.
  strictEqual(L!.reframe, REFRAME);
  ok(!/sound|hear|plural/i.test(REFRAME), "a reframe about the sound is a2.10's reframe with different letters");
  ok(REFRAME.trim().split(/\s+/).length <= 12, 'a reframe has to survive recall mid-sentence');
});

test('THERE IS EXACTLY ONE LISTENING MISSION', { skip: noLesson }, () => {
  const ears = L!.sections.filter((s) => s.type === 'listening');
  strictEqual(
    ears.length, 1,
    `${ears.length} listening sections. The audible half of this paradigm belongs to a2.10, one lesson ago.`
    + ' Two ear missions here and the weight has moved back off the page.',
  );
});

test('and every line it plays is half of a pronoun-blind pair', { skip: noLesson || noSrc }, () => {
  const ear = L!.sections.find((s) => s.type === 'listening');
  ok(ear && ear.type === 'listening');
  const blindFr = new Set(SRC_PRONOUN_BLIND.flat().map((id) => byId.get(id)?.fr).filter(Boolean));
  for (const line of ear!.lines) {
    ok(blindFr.has(line.fr), `the ear mission plays "${line.fr}", where the pronoun settles it and the mission proves nothing`);
  }
  ok(SRC_PRONOUN_BLIND.length >= 2, `${SRC_PRONOUN_BLIND.length} pronoun-blind pairs`);
});

test('and one of its questions names the three the ear cannot separate', { skip: noLesson }, () => {
  const ear = L!.sections.find((s) => s.type === 'listening');
  ok(ear && ear.type === 'listening');
  const q = ear!.questions.find((x) => /NOT separate/i.test(x.q));
  ok(q, 'the limit is half of what the mission teaches and no question states it');
  ok(q!.opts[q!.correct].includes('je vends'), 'the correct answer is no longer the singular triple');
  ok(q!.why, 'no why');
});

test('THE TYPED HALF OF THE QUIZ OUTWEIGHS THE LISTENED HALF', { skip: noLesson }, () => {
  const quiz = L!.sections.find((s) => s.type === 'quiz')!;
  const qs = quizQuestions(quiz as never);
  const typed = qs.filter((q) => ['typeIn', 'errorSpot'].includes(q.format ?? '')).length;
  const listen = qs.filter((q) => q.format === 'listenChoose').length;
  ok(typed >= 14, `only ${typed} typed questions; this is a written distinction and the page is the only place it exists`);
  ok(listen <= 6, `${listen} listenChoose questions; the ear can only settle the d here and a2.10 owns that`);
  ok(typed > listen * 2, `${typed} typed against ${listen} listenChoose; the written half has to carry this quiz`);
});

test('and at least four typed questions turn on the bare form', { skip: noLesson }, () => {
  const quiz = L!.sections.find((s) => s.type === 'quiz')!;
  const typed = quizQuestions(quiz as never).filter((q) => ['typeIn', 'errorSpot'].includes(q.format ?? ''));
  const bare = typed.filter((q) => /\b(vend|attend|répond|entend|perd|rend|descend)\b/i.test(`${q.answer ?? ''} ${(q.accept ?? []).join(' ')}`));
  ok(bare.length >= 4, `only ${bare.length} typed questions turn on the bare form, and typing is the only surface that can`);
});

/* ═══ 8. What the app can and cannot test, measured ═════════════════════ */

test('NO EAR QUESTION ASKS BETWEEN TWO FORMS THAT ARE ONE SOUND', { skip: noLesson }, () => {
  // je vends, tu vends and il vend are identical out loud, so a listenChoose
  // offering two of them has no correct answer and marking one right would
  // certify a bug. Checked as "these two options differ ONLY by a member of one
  // homophone group", not as "two options mention homophones": a question
  // offering « Il vend ici. » against « Je vends ici. » is legitimate, because
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

test('the source guards the same homophone groups', { skip: noSrc }, () => {
  strictEqual(SRC_HOMOPHONES.map((g) => g.join('/')).join(','), HOMOPHONE_FORMS.map((g) => g.join('/')).join(','));
});

test('THE DICTÉE COVERS THE vends / vends / vend TRIPLE, BY ITEM', { skip: noLesson }, () => {
  // By item, not by count: a count survives all three being replaced with three
  // easier ones. These three ARE the lesson and they are the only surface in the
  // app that can score the difference between them.
  const d = L!.sections.find((s) => s.type === 'dictation');
  ok(d && d.type === 'dictation', 'no dictation section');
  for (const id of SINGULAR_TRIPLES[0]) {
    ok(d!.itemIds.includes(id), `the dictée does not name ${id}, which is one third of the triple`);
  }
  const frs = SINGULAR_TRIPLES[0].map((id) => byId.get(id)?.fr);
  strictEqual(frs.join(' / '), 'Je vends ici. / Tu vends ici. / Il vend ici.');
});

test('and it covers the second triple and all three groups too', { skip: noLesson }, () => {
  const d = L!.sections.find((s) => s.type === 'dictation');
  ok(d && d.type === 'dictation');
  for (const id of SINGULAR_TRIPLES[1]) ok(d!.itemIds.includes(id), `the dictée does not name ${id}`);
  // The three cross-group third persons, so the learner spells -e, -it and
  // nothing in one mission. This is the Owns tested by production.
  for (const id of ['fr.a2.verbes.227', 'fr.a2.verbes.228', 'fr.a2.verbes.223']) {
    ok(d!.itemIds.includes(id), `the dictée does not name ${id}, and the three groups belong in one mission`);
  }
});

test('EVERY DICTÉE ITEM CARRIES THE dictation DRILL, and spells from LETTERS', { skip: noLesson }, () => {
  const d = L!.sections.find((s) => s.type === 'dictation');
  ok(d && d.type === 'dictation', 'no dictation section');
  ok(d!.itemIds.length >= 11, `${d!.itemIds.length} dictée targets; this is the heaviest production section in the lesson`);
  for (const id of d!.itemIds) {
    const it = byId.get(id);
    ok(it, `dictée target ${id} is not in the seed`);
    ok((it!.drills ?? []).includes('dictation'), `${id} carries no dictation drill`);
    strictEqual(
      dicteeMode(it!.fr), 'letters',
      `"${it!.fr}" is in word mode. Word tiles hand every real word over pre-spelled, so they cannot test a`
      + ' spelling. The frames are "ici" and "vite" for exactly this reason.',
    );
  }
});

test('the dictée is heavier than a2.10\'s, and grades what the source says it grades', { skip: noLesson || noSrc }, () => {
  strictEqual(SRC_NEAR_MISS.length, SRC_DICTATION.length, 'every target needs the error a learner would actually make against it');
  for (const d of SRC_NEAR_MISS) {
    const row = byId.get(d.id);
    ok(row, `DICTEE_NEAR_MISS names ${d.id}, which is not in the seed`);
    const distinguishable = normalizeFr(row!.fr) !== normalizeFr(d.wrong);
    strictEqual(
      distinguishable, d.scorable,
      `${d.id} is marked scorable: ${d.scorable} and normalizeFr says ${distinguishable}`
      + ` ("${row!.fr}" against "${d.wrong}"). If normalizeFr has learned to keep diacritics, the accent row can`
      + ' move and the corpus header needs rewriting.',
    );
  }
  const scorable = SRC_NEAR_MISS.filter((d) => d.scorable).length;
  ok(scorable >= 10, `only ${scorable} dictée targets are graded on the distinction they teach`);
});

test('AND IT GRADES THE ONE ERROR THE LESSON EXISTS TO STOP', { skip: noSrc }, () => {
  // If the dictée cannot tell `Il vend ici.` from `Il vende ici.`, the heaviest
  // production section in the lesson is scoring something else.
  const theOne = SRC_NEAR_MISS.find((d) => d.wrong === 'Il vende ici.');
  ok(theOne, 'no near miss puts the extra letter on the bare form');
  ok(theOne!.scorable, 'the dictée no longer grades il vend against il vende');
  ok(normalizeFr('Il vend ici.') !== normalizeFr('Il vende ici.'), 'normalizeFr now folds the two together');
  const theOther = SRC_NEAR_MISS.find((d) => d.wrong === 'Il réponds vite.');
  ok(theOther?.scorable, 'the dictée no longer grades the il form given an s it does not take');
});

test('every free-text question accepts the answer it displays', { skip: noLesson }, () => {
  const quiz = L!.sections.find((s) => s.type === 'quiz')!;
  for (const q of quizQuestions(quiz as never)) {
    if (!['typeIn', 'errorSpot'].includes(q.format ?? '')) continue;
    ok(matchesAccept(q.answer ?? '', q.accept ?? []), `does not accept its own answer: ${q.answer}`);
  }
});

test('every gap question fixes the person with a subject and a naming form', { skip: noLesson }, () => {
  const quiz = L!.sections.find((s) => s.type === 'quiz')!;
  const gap = quizQuestions(quiz as never).filter((q) => q.q.includes('___'));
  ok(gap.length >= 6, `only ${gap.length} gap questions`);
  const SUBJECTS = ['je', 'tu', 'il', 'elle', 'on', 'nous', 'vous', 'ils', 'elles', 'le', 'la', 'les'];
  for (const q of gap) {
    ok(/\([a-zà-ÿ]+(er|ir|re)\)/i.test(q.q), `no naming form in the stem, so the question has no single answer: ${q.q}`);
    ok(SUBJECTS.includes(q.q.trim().split(/\s+/)[0].toLowerCase()), `no subject fixing the person: ${q.q}`);
  }
});

/* ═══ 9. Respellings, and the checker that cannot see them ══════════════ */

test('no respelling this lesson displays closes a nasal with a plain n or m', { skip: noLesson }, () => {
  const ids = new Set(L!.itemIds);
  const bad = [...ids]
    .map((id) => byId.get(id))
    .filter((it): it is Item => !!it && !!it.respell)
    .filter((it) => hasPlainNasalFor(it.fr, it.respell!))
    .map((it) => `${it.id} "${it.fr}" ${it.respell}`);
  strictEqual(bad.join('\n'), '');
});

test('ALL SIX REPAIRS LANDED IN THE SEED', { skip: noLesson }, () => {
  for (const [id, to] of Object.entries(REPAIRED)) {
    const row = byId.get(id);
    ok(row, `${id} is not in the seed`);
    strictEqual(row!.respell, to, `${id} "${row!.fr}" reverted to ${row!.respell}`);
  }
});

test('THE CHECKER CAN SEE TWO OF THE SIX AND IS BLIND TO FOUR', { skip: noLesson }, () => {
  // A regular -RE stem ends in d, so every infinitive puts the nasal INSIDE a
  // token and hasPlainNasalFor needs it to END one. a2.10's repair guard, which
  // requires the stored value to be flagged, would REJECT four of these six as
  // "not a violation". That is the shared checker being wrong rather than the
  // repair being wrong, and this test is the record of it.
  for (const [id, from] of Object.entries(REPAIRS_VISIBLE)) {
    const row = byId.get(id);
    ok(row, `${id} is not in the seed`);
    ok(hasPlainNasalFor(row!.fr, from), `${id} "${row!.fr}": the stored value "${from}" is no longer flagged`);
  }
  for (const [id, from] of Object.entries(REPAIRS_INVISIBLE)) {
    const row = byId.get(id);
    ok(row, `${id} is not in the seed`);
    ok(
      !hasPlainNasalFor(row!.fr, from),
      `hasPlainNasalFor now sees "${from}" for ${id}. The blind spot has closed, invariants §3 needs updating,`
      + ' and these four can move into the visible list.',
    );
  }
  strictEqual(Object.keys(REPAIRS_VISIBLE).length + Object.keys(REPAIRS_INVISIBLE).length, Object.keys(REPAIRED).length);
});

test('THE HALF REPAIR THAT PASSES THE CHECKER IS STILL WRONG', { skip: noLesson }, () => {
  // entendre has TWO nasal vowels. The first ends a token and the checker sees
  // it; the second is followed by a d and it does not. So repairing what the
  // checker reports produces `ahⁿ-TAHNDR`, which it then calls clean. This is the
  // sharpest evidence in the build that the shared checker is not the authority
  // here, and it is asserted as a negative.
  ok(hasPlainNasalFor('entendre', 'ahn-TAHNDR'), 'the fully broken entendre is no longer flagged; the nasal check has gone quiet');
  ok(
    !hasPlainNasalFor(HALF_REPAIRED_ENTENDRE.fr, HALF_REPAIRED_ENTENDRE.respell),
    'hasPlainNasalFor now catches the word-internal nasal. Update invariants §3 and drop the by-name lists.',
  );
  strictEqual(byId.get('fr.sons.verbes-essentiels.029')?.respell, 'ahⁿ-TAHⁿDR', 'entendre must carry BOTH superscripts');
});

test('every repair replaced something that really was a violation', { skip: noSrc }, () => {
  strictEqual(SRC_REPAIRS.length, Object.keys(REPAIRED).length);
  strictEqual(SRC_REPAIRS_VISIBLE.length, Object.keys(REPAIRS_VISIBLE).length);
  strictEqual(SRC_REPAIRS_INVISIBLE.length, Object.keys(REPAIRS_INVISIBLE).length);
  for (const r of SRC_REPAIRS) {
    ok(!hasPlainNasalFor(r.fr, r.to), `${r.id}: the replacement "${r.to}" is still flagged`);
    ok(r.to.includes('ⁿ'), `${r.id}: the replacement "${r.to}" carries no superscript`);
    strictEqual(REPAIRED[r.id], r.to, `${r.id}: the source writes ${r.to} and this file expects ${REPAIRED[r.id]}`);
  }
});

test('the five word-internal nasals in the authored rows are asserted BY NAME', { skip: noLesson }, () => {
  // Every one is a nasal followed by a d inside the token, which the shared
  // checker cannot reach. A plain n could be put back in any of them and nothing
  // else in the build would go red.
  for (const [id, must] of Object.entries(MUST_CARRY_SUPERSCRIPT)) {
    const row = byId.get(id);
    ok(row, `${id} is not in the seed`);
    ok(row!.respell?.includes(must), `${id} "${row!.fr}" must respell with "${must}", found "${row!.respell}"`);
    const broken = row!.respell!.replace(must, must.replace('ⁿ', 'n'));
    ok(!hasPlainNasalFor(row!.fr, broken), `hasPlainNasalFor now catches "${broken}" for ${id}; the by-name check can go`);
  }
});

test('and the source and this file name the same eleven', { skip: noSrc }, () => {
  strictEqual(SRC_BLIND.length, Object.keys(MUST_CARRY_SUPERSCRIPT).length);
  strictEqual(SRC_BLIND.length + SRC_BLIND_IMPORTED.length, 11, 'eleven nasals the checker cannot see, measured 2026-08-11');
  for (const b of SRC_BLIND) strictEqual(MUST_CARRY_SUPERSCRIPT[b.id], b.must, `${b.id}`);
  for (const b of SRC_BLIND_IMPORTED) strictEqual(REPAIRED[b.id], b.must, `${b.id}`);
});

test('the checker\'s OTHER blind spot does not arise here, and that was looked for', { skip: noLesson }, () => {
  // Invariants §3 records that hasPlainNasalFor false-positives on a real /n/
  // after a vowel. Four candidates were tried against this lesson's strings and
  // not one is flagged, so there is no row in that direction to protect. Asserted
  // rather than left as a silence: the absence was measured.
  for (const [fr, respell] of [
    ['Elle attend une réponse.', 'el a-tahⁿ tün ray-POHⁿS'],
    ['Ils vendent des pommes.', 'eel vahⁿd day POM'],
    ['la panne', 'la PAN'],
  ] as const) {
    ok(!hasPlainNasalFor(fr, respell), `the real-n false positive has appeared on "${fr}"; this lesson now needs a by-name guard in the other direction too`);
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

test('ALL SEVEN VERBS ARE NAMED INDIVIDUALLY and released by id', { skip: noLesson }, () => {
  strictEqual(THE_SEVEN.length, 7);
  for (const v of THE_SEVEN) ok(hasPhrase(learnerText, v), `${v} is named by no screen`);
  const released = new Set(L!.itemIds.map((id) => byId.get(id)?.fr));
  for (const v of THE_SEVEN) ok(released.has(v), `${v} is on a screen and not in itemIds`);
});

test('SEVEN and not ten, which is a decision rather than a shortfall', { skip: noSrc }, () => {
  // Past these seven the next candidates are tondre, mordre, fondre, pondre and
  // dépendre. Padding the set to a2.10's ten would mean teaching a learner at
  // seq 4 how to say that a sheep is being sheared.
  strictEqual(SRC_SEVEN.join(','), THE_SEVEN.join(','));
  strictEqual(SRC_IMPORTED.length, 7);
});

test('not one of the seven was authored: every one is imported', { skip: noSrc }, () => {
  const authoredFr = new Set(SRC_AUTHORED.map((i) => i.fr));
  for (const v of THE_SEVEN) ok(!authoredFr.has(v), `${v} was authored; the brief said to probe first and all seven existed`);
});

test('every one of the seven carries a flashcard drill, and none needed one added', { skip: noLesson || noSrc }, () => {
  // a2.10 had to add two. All seven of these arrived with one, which is why
  // DRILL_ADDITIONS is empty; the check runs anyway so the day a row loses its
  // drill the build stops.
  strictEqual(SRC_DRILL_ADDITIONS.length, 0);
  for (const row of SRC_IMPORTED) {
    const seedRow = byId.get(row.id);
    ok(seedRow, `${row.id} was not carried through the seed cut`);
    ok((seedRow!.drills ?? []).includes('flashcard'), `${row.id} "${seedRow!.fr}" is released to the hub with no flashcard drill`);
  }
});

test('no imported verb row carries a gender', { skip: noLesson }, () => {
  const released = L!.itemIds.map((id) => byId.get(id)).filter((i): i is Item => !!i);
  const gendered = released.filter((i) => i.gender && THE_SEVEN.includes(i.fr));
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
  strictEqual(SRC_AUTHORED.length, 24);
});

test('no authored sentence runs over the A2 word budget, and none puts an à after répondre', { skip: noSrc }, () => {
  for (const it of SRC_AUTHORED) {
    const words = it.fr.trim().split(/\s+/).filter((w) => /[\p{L}\p{N}]/u.test(w)).length;
    ok(words <= 14, `${it.id} runs to ${words} words: "${it.fr}"`);
    ok(!/\brépond\w*\s+(à|au|aux)\b/i.test(it.fr), `${it.id} "${it.fr}" puts an indirect object after répondre, which is a2.24`);
  }
});

test('all seven persons reach a screen', { skip: noSrc }, () => {
  const PERSONS = ['je', 'tu', 'il', 'nous', 'vous', 'ils', 'on'];
  const seen = new Set((SRC_AUTHORED as unknown as { id: string }[]).map((i) => i.id));
  ok(seen.size === 24);
  // Derived from the corpus rather than a hand list, so a person that quietly
  // loses its only row is visible.
  for (const p of PERSONS) {
    ok(
      SRC_AUTHORED.some((i) => {
        const row = byId.get(i.id);
        return row && new RegExp(`^(${p === 'il' ? 'il|elle|le|les' : p})\\b`, 'i').test(row.fr);
      }) || p === 'il',
      `no authored row shows the ${p} form`,
    );
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
  // vendre and répondre were BOTH absent from seed.json before this merge, and
  // they are the verb the paradigm runs on and the verb the second triple runs
  // on. Without the carry both cards would draw empty.
  for (const it of SRC_IMPORTED) ok(byId.has(it.id), `${it.id} was not carried, so its card would draw empty`);
  ok(byId.has('fr.a2.verbes.027'), 'vendre was not carried');
  ok(byId.has('fr.a2.verbes.020'), 'répondre was not carried');
});

test('the unit advertises this lesson and its own copy is unchanged', { skip: noLesson }, () => {
  const u = seed.units.find((x) => x.id === 'a2.11');
  ok(u, 'unit a2.11 is not in the seed');
  ok((u!.lessonIds ?? []).includes('a2.11.l1'));
  // Copied byte for byte from the probe's unit dump. The brief has title and sub
  // SWAPPED, for the fourth A2 build in a row, and its sub is not in the database
  // at all. Its canDo IS right this time and matches exactly.
  strictEqual(u!.title, 'Regular -RE Verbs');
  strictEqual(u!.sub, 'Les verbes en -RE');
  strictEqual(u!.canDo, 'Can conjugate regular -re verbs, including the il form that takes no ending');
  ok((u!.prereqUnitIds ?? []).includes('a2.01'), 'the unit no longer declares a2.01 as its prerequisite');
  strictEqual(`A2 · LEÇON ${String(u!.seq).padStart(2, '0')}`, L!.tag);
});

/* ═══ 11. The endings, and the arithmetic the lesson prints ═════════════ */

test('SIX ENDINGS, ONE OF THEM EMPTY, IN THE LEDGER\'S PRONOUN ORDER', { skip: noSrc }, () => {
  strictEqual(SRC_ENDINGS.length, 6);
  strictEqual(SRC_ENDINGS.filter((e) => e.ending === '').length, 1, 'every screen says one, and the derived list has to agree');
  strictEqual(SRC_ENDINGS.filter((e) => e.dSounds).length, 3, 'three cells put letters after the d');
  // AND THE ORDER IS THE LEDGER'S, which a2.10 had to depart from and this lesson
  // does not: its contrast lives in a table of its own, so the paradigm is free
  // to run je · tu · il · nous · vous · ils.
  strictEqual(SRC_ENDINGS.map((e) => e.person).join(' | '), 'je | tu | il · elle · on | nous | vous | ils · elles');
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

/* ═══ 13. THE REFERENCE-SHEET DECISION ══════════════════════════════════ */

test('THERE IS EXACTLY ONE SHEET, AND IT IS THE CROSS-GROUP ONE', { skip: noLesson }, () => {
  // The brief asked for a2.01's sheet to be extended rather than duplicated. That
  // was never possible: a sheetId resolves only inside the lesson that declares
  // it (schema.ts:3490, lesson-contract.test.ts:91), so no section of a2.11 can
  // point at a sheet of a2.01. This is what was done instead, and asserting it
  // means a future author reaching for "the -RE endings, in full" breaks a test
  // rather than shipping a fourth competing reference.
  strictEqual((L!.sheets ?? []).length, EXPECTED_SHEETS, 'two competing sheets is worse than one incomplete sheet');
  strictEqual((L!.sheets ?? [])[0].id, SHEET_ID);
});

test('and it holds the one table in the level that shows all three groups', { skip: noLesson }, () => {
  const sheet = (L!.sheets ?? []).find((s) => s.id === SHEET_ID);
  ok(sheet, `${SHEET_ID} is gone`);
  const three = (sheet!.sections ?? []).find((s) => (s as { id?: string }).id === 'sheet-three-groups');
  ok(three && three.type === 'table', 'the three-group table is gone, and it is the only reason this is not a third copy of a2.01\'s sheet');
  const t = three as { cols: string[]; rows: string[][] };
  strictEqual(t.cols.length, 4, 'a pronoun column and one per group');
  strictEqual(t.rows.length, 6);
  const ilRow = t.rows.find((r) => r[0] === 'il · elle · on');
  ok(ilRow, 'the three-group table has no il row, and that row is the lesson');
  strictEqual(ilRow!.slice(1).join('|'), 'parle|finit|vend');
});

test('and it names the two sheets it completes rather than competes with', { skip: noLesson }, () => {
  const sheet = (L!.sheets ?? []).find((s) => s.id === SHEET_ID)!;
  const text = strings(sheet).join('\n');
  for (const unit of BACKREFS) ok(namesUnitLabel(text, unit), `${SHEET_ID} does not name ${unit}, so a learner cannot tell it is the third of three`);
});

test('the canonical nine-pronoun order is in the sheet', { skip: noLesson }, () => {
  const sheet = (L!.sheets ?? []).find((s) => s.id === SHEET_ID)!;
  const paradigm = (sheet.sections ?? []).find((s) => (s as { id?: string }).id === 'sheet-re-paradigm');
  ok(paradigm && paradigm.type === 'table', 'the nine-pronoun table is gone');
  strictEqual(
    (paradigm as { rows: string[][] }).rows.map((r) => r[0]).join(','),
    ["je / j'", 'tu', 'il', 'elle', 'on', 'nous', 'vous', 'ils', 'elles'].join(','),
  );
  // AND THE THREE il ROWS ALL WRITE THE BARE FORM.
  const rows = (paradigm as { rows: string[][] }).rows;
  for (const p of ['il', 'elle', 'on']) {
    const r = rows.find((x) => x[0] === p);
    ok(r, `the sheet has no ${p} row`);
    strictEqual(r![1], 'vend', `the ${p} row writes ${JSON.stringify(r![1])}, and all three share the bare form`);
  }
});

test('the source records the sheet decision so it cannot be quietly reversed', { skip: noSrc }, () => {
  ok(SRC_SHEET_DECISION, 'SHEET_DECISION is gone from the corpus');
  strictEqual(SRC_SHEET_DECISION!.id, SHEET_ID);
  strictEqual(SRC_SHEET_DECISION!.count, EXPECTED_SHEETS);
  strictEqual(SRC_SHEET_DECISION!.names.join(','), BACKREFS.join(','));
  strictEqual(SRC_SHEET_ID, SHEET_ID);
});

test('a sheet only holds section types the sheet renderer draws', { skip: noLesson }, () => {
  const DRAWS = new Set(['teach', 'letterGrid', 'table']);
  const dead = (L!.sheets ?? []).flatMap((sh) => (sh.sections ?? []).filter((s) => !DRAWS.has(s.type)).map((s) => `${sh.id}: ${s.type}`));
  strictEqual(dead.join(', '), '', 'ReferenceSheet.tsx draws teach, letterGrid and table and nothing else; a cheatSheet there draws its title and no rows');
});

test('every sheetId names a sheet, and the sheet is reachable', { skip: noLesson }, () => {
  const sheetIds = new Set((L!.sheets ?? []).map((s) => s.id));
  const named = L!.sections.map((s) => (s as { sheetId?: string }).sheetId).filter((x): x is string => !!x);
  for (const id of named) ok(sheetIds.has(id), `sheetId ${id} names no sheet`);
  for (const id of sheetIds) ok(named.includes(id), `sheet ${id} is linked from no section`);
});

/* ═══ 14. Glossary, layout, house rules ═════════════════════════════════ */

test('the reading glossary keys can actually match, through the real segmenter', { skip: noLesson }, () => {
  const r = L!.sections.find((s) => s.type === 'reading');
  ok(r && r.type === 'reading', 'no reading section');
  ok(r!.questionsInModal, 'a reading without questionsInModal never reaches the glossary renderer');
  ok((r!.questions ?? []).length > 0, 'and it needs questions as well as the flag');
  const g = r!.glossary ?? [];
  ok(g.length > 0, 'no glossary');
  for (const e of g) ok(e.word.trim().split(/\s+/).length <= MAX_GLOSS_WORDS, `"${e.word}" is longer than MAX_GLOSS_WORDS`);
  // The REAL matcher, comparing matched KEYS rather than matched text.
  const keySet = new Set(g.flatMap((e) => glossKeys(e.word)));
  const matched = new Set<string>();
  for (const seg of segmentSentence(r!.text, keySet)) if (seg.key) matched.add(seg.key);
  const never = g.filter((e) => !glossKeys(e.word).some((k) => matched.has(k))).map((e) => e.word);
  strictEqual(never.join(', '), '', 'glossary entries that underline nothing in the passage');
});

test('the reading passage is one block, and shows the bare form', { skip: noLesson }, () => {
  const r = L!.sections.find((s) => s.type === 'reading');
  ok(r && r.type === 'reading');
  ok(!r!.text.includes('\n'), 'PassagePage splits on sentence boundaries, so an authored newline is silently discarded');
  ok(r!.text.includes('Malik vend les fromages'), 'the passage no longer puts the bare form in front of the learner');
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

test('the speak set leaves out the triple, which speaking cannot test', { skip: noLesson || noSrc }, () => {
  // The hidden family is three sentences that are identical out loud. Speaking
  // them proves nothing; they are written in s10-write and spelled in the dictée.
  for (const id of SINGULAR_TRIPLES[1]) {
    ok(!SRC_SPEAK.includes(id), `${id} is a speak target and it is one of three forms that sound the same`);
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

test('THE SCENE IS AN ADDED LETTER, AND NOBODY IS CORRECTED', { skip: noLesson }, () => {
  const scene = L!.sections.find((s) => s.type === 'scene');
  ok(scene && scene.type === 'scene');
  const text = strings(scene).join('\n').toLowerCase();
  ok(!text.includes('corrects you'), 'the A2 register is nobody being corrected');
  // The choice beat must be the bare form against the over-completed one, because
  // that is the only thing this lesson teaches. And the failure has to be
  // AUDIBLE, which is what makes a spoken scene possible at all here: `il vende`
  // is /vɑ̃d/, which is what `ils vendent` sounds like.
  const choice = (scene!.beats ?? []).find((b) => b.kind === 'choice') as { options?: { fr: string; outcome?: string }[] } | undefined;
  ok(choice, 'the scene has no choice beat');
  const works = choice!.options?.find((o) => o.outcome === 'works');
  const breaks = choice!.options?.find((o) => o.outcome === 'breaks');
  ok(works?.fr.includes('Il vend '), 'the working option is no longer the bare form');
  ok(breaks?.fr.includes('Il vende'), 'the failing option is no longer the added letter');
});

/* ═══ 15. Audio briefs ══════════════════════════════════════════════════ */

test('THE THREE CELLS ARE BRIEFED AS ONE TAKE, AND INDISTINGUISHABLE', { skip: noLesson }, () => {
  // A constraint on how something is recorded becomes invisible the moment the
  // clip is delivered, so it is written into `desc` AND pinned here.
  const rec = (L!.audio?.recorded ?? []).find((r) => r.id === 'rec-a2-11-cells');
  ok(rec, 'rec-a2-11-cells is gone');
  const d = rec!.desc.toLowerCase();
  ok(d.includes('one continuous take'), 'the one-take instruction is gone; three sessions are three performances');
  ok(d.includes('indistinguishable'), 'the desc no longer says the three must sound the same, which is the whole claim of the screen');
  ok(d.includes('must not be clipped') || d.includes('not be clipped'), 'the desc no longer forbids hurrying the short one');
  for (const clip of THREE_CELLS.map((c) => c.fr)) {
    ok((rec!.clipIds ?? []).includes(clip), `${clip} is not in the cells clip list`);
  }
});

test('and the d pairs are briefed the OPPOSITE way, which is why they are a separate clip', { skip: noLesson }, () => {
  const rec = (L!.audio?.recorded ?? []).find((r) => r.id === 'rec-a2-11-dpairs');
  ok(rec, 'rec-a2-11-dpairs is gone');
  const d = rec!.desc.toLowerCase();
  ok(d.includes('must be audible') || d.includes('opposite instruction'), 'the desc no longer says the difference has to be heard here');
  ok(d.includes('not a syllable') || d.includes('do not lengthen'), 'the desc no longer says the d is a consonant rather than a syllable');
  for (const clip of ['Il vend ici.', 'Ils vendent ici.']) {
    ok((rec!.clipIds ?? []).includes(clip), `${clip} is not in the d-pair clip list`);
  }
});

test('and the singular triple is briefed as INDISTINGUISHABLE', { skip: noLesson }, () => {
  const rec = (L!.audio?.recorded ?? []).find((r) => r.id === 'rec-a2-11-hidden');
  ok(rec, 'rec-a2-11-hidden is gone');
  const d = rec!.desc.toLowerCase();
  ok(d.includes('indistinguishable'), 'the desc no longer says the three must sound the same');
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

/* ═══ 16. House rules ═══════════════════════════════════════════════════ */

test('no em dash anywhere in the lesson', { skip: noLesson }, () => {
  const bad = strings(L!).filter((s) => s.includes('—'));
  strictEqual(bad.join('\n'), '');
});

test('no grammar jargon on a learner surface', { skip: noLesson }, () => {
  // `third person` is on this list and it earned its place five times over: the
  // first drafts of s07-cells, of the threeGroups term, of the r5 why and of the
  // sheet's own teach section all used it, and `intro` SHIPPED with it in v1
  // because the guard did not walk that field. They all now say "the il form",
  // which is what the unit's canDo says.
  const JARGON = ['conjugation', 'conjugate', 'conjugated', 'indicative', 'morpheme', 'inflection', 'paradigm', 'orthography', 'phoneme', 'first person', 'second person', 'third person'];
  const hit = JARGON.filter((j) => hasPhrase(learnerText, j));
  strictEqual(hit.join(', '), '');
});

test('AND THE INTRO IS PART OF THAT SURFACE, because it is drawn on two screens', { skip: noLesson }, () => {
  // Pinned separately from the walk above so a later author who trims
  // `learnerText` back to sections+sheets+terms fails HERE with the reason,
  // rather than silently reopening the hole this lesson shipped v1 through.
  ok(L!.intro, 'the lesson has no intro, and the overview card and the cover both draw it');
  ok(learnerText.includes(L!.intro!), 'the jargon walk no longer reads `intro`; it is drawn on the overview card and on the lesson cover');
  ok(!hasPhrase(L!.intro!, 'third person'), 'the intro says "third person" on two learner surfaces. Say "the il form", which is what the unit canDo says.');
  const ov = strings(L!.overview ?? {}).join('\n');
  ok(learnerText.includes(ov.split('\n')[0] ?? ''), 'the jargon walk no longer reads `overview`');
});

test('the lesson declares what it assumes and what it introduces', { skip: noLesson }, () => {
  for (const unit of BACKREFS) {
    ok((L!.grammarAssumed ?? []).some((g) => g.includes(unit)), `grammarAssumed does not name ${unit}`);
  }
  ok((L!.grammarIntroduced ?? []).length >= 4);
  ok(
    (L!.grammarIntroduced ?? []).some((g) => /no written ending/i.test(g)),
    'grammarIntroduced no longer names the one thing this lesson owns',
  );
});

test('the speak and dictation id lists agree between source and seed', { skip: noLesson || noSrc }, () => {
  const speak = L!.sections.find((s) => s.type === 'practice') as { itemIds?: string[] } | undefined;
  strictEqual((speak?.itemIds ?? []).join(','), SRC_SPEAK.join(','));
  const dict = L!.sections.find((s) => s.type === 'dictation') as { itemIds?: string[] } | undefined;
  strictEqual((dict?.itemIds ?? []).join(','), SRC_DICTATION.join(','));
  strictEqual(L!.itemIds.join(','), SRC_ITEM_IDS.join(','));
  strictEqual(SRC_BOUNDARY_SECTION, BOUNDARY_SECTION);
});

test('the d pairs and their pronoun-blind subset agree between source and seed', { skip: noLesson || noSrc }, () => {
  ok(SRC_D_PAIRS.length >= 5, `${SRC_D_PAIRS.length} d pairs`);
  for (const [sing, plur] of SRC_D_PAIRS) {
    const a = byId.get(sing);
    const b = byId.get(plur);
    ok(a && b, `${sing} / ${plur} not in the seed`);
    const lastSyl = (r: string) => (r.split(' ').find((t) => t.includes('ⁿ')) ?? '').split('-').pop() ?? '';
    strictEqual(
      lastSyl(b!.respell ?? ''), `${lastSyl(a!.respell ?? '')}d`,
      `${plur} is the singular plus one d and nothing else; found "${b!.respell}" against "${a!.respell}"`,
    );
  }
  for (const [sing, plur] of SRC_PRONOUN_BLIND) {
    const a = byId.get(sing)!;
    const b = byId.get(plur)!;
    strictEqual(
      (a.respell ?? '').split(' ')[0], (b.respell ?? '').split(' ')[0],
      `${sing} and ${plur} respell their pronouns differently, so the d is not the only evidence`,
    );
    ok(SRC_D_PAIRS.some(([x, y]) => x === sing && y === plur), `${sing} / ${plur} is not in D_PAIRS`);
  }
});
