// a2.09.l1 "Les verbes en -ER : exceptions": the assertions that keep this
// lesson true.
//
// Modelled on a2-01-verbes-er.test.ts. Everything here runs the REAL app function
// rather than a copy: an earlier a1.01 test inlined its own glossary lookup,
// copied the version that was already broken, and passed while the feature was
// dead.
//
// ── What this file is actually guarding ────────────────────────────────────
//
// This lesson authors 26 sentences and imports all seventeen of its verbs, so the
// failure mode is not "the word is missing". It is:
//
//   THE REASONS BEING STRIPPED AS FILLER. Every one of the four patterns is
//   taught with the sound it exists to protect. Cut those four strings and the
//   lesson still validates, still renders, and is four lists with a title over
//   it. The reason strings are asserted BY VALUE.
//   -eler AND -eter BEING SEPARATED. They are two columns of one tapTable,
//   six rows, both spellings of the open è on the screen at once. A learner who
//   meets appeler and then acheter a screen later overwrites the first with the
//   second, and no schema check would notice.
//   THE STEM SOUND DRIFTING. `Je mange ici.` and `Nous mangeons ici.` carry the
//   same stem syllable in their respellings, because the e was written SO THAT
//   THE SOUND WOULD NOT MOVE. A well-meaning pass that "clarified" one of them
//   destroys the only evidence the -ger claim has.
//   THE a2.01 BACK-REFERENCE BEING CUT. Half this lesson rests on a fact a2.01
//   taught, and naming the unit is the teaching rather than a citation.
//   THE nous/on STATEMENT BEING REWORDED. It is a2.01's constant, imported. A
//   paraphrase here is how twenty lessons come to read as twenty products.
//   THE -yer DECISION BEING QUIETLY REVERSED IN EITHER DIRECTION.
//   A TYPED QUESTION BEING WRITTEN FOR AN ACCENT OR A CEDILLA. fold() strips
//   combining marks, so such a question ACCEPTS THE MISTAKE and tells the learner
//   they spelled it right. Proved here through the real matchesAccept.
//   any of the three repaired respellings being reverted, including the ones the
//   shared checker cannot see.
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

const L = seed.lessons.find((l) => l.id === 'a2.09.l1');
const noLesson = !L;
const byId = new Map(seed.items.map((i) => [i.id, i] as const));

/* ─── The shape of the lesson ──────────────────────────────────────────── */

const SPINE = [
  's01-scene', 's02-goals', 's03-notirregular',
  's04-recap', 's05-grid',
  's06-soft', 's07-nouscell', 's08-silent', 's09-ear', 's10-pair', 's11-lists', 's12-both', 's13-flash',
  's14-trap', 's15-errors', 's16-notmine',
  's17-speak', 's18-dictation', 's19-scenario', 's20-reading',
  's21-review', 's22-progress', 's23-quiz', 's24-roundup',
];

const ACTS = [
  { id: 'act1', n: 3 },
  { id: 'act2', n: 2 },
  { id: 'act3', n: 8 },
  { id: 'act4', n: 3 },
  { id: 'act5', n: 4 },
  { id: 'act6', n: 4 },
];

const REFRAME = 'The spelling changes so the sound does not.';
/** NINE sections, plus the `reframe` field itself when the whole object is
 *  walked. Asserted against an explicit constant, never a figure derived from the
 *  lesson: a derived count compares the content to itself and survives any
 *  rewording. */
const REFRAME_SECTIONS = 9;
const REFRAME_APPEARANCES = 10;
const TWO_MECHANISMS = 'Four patterns, two reasons.';
/** a2.01's constant, quoted verbatim. The ledger binds all twenty A2 lessons. */
const NOUS_ON = 'nous parlons is what you write. on parle is what you say.';
const A201_BACKREF = 'a2.01';

const GRID_SECTION = 's05-grid';
const SPLIT_SECTION = 's10-pair';
const SPLIT_COLS = { doubles: 'appeler', accents: 'acheter' };

/** THE FOUR REASONS. These are the SHAPE of the lesson, which is the documented
 *  exception to "a hardcoded count fails on itself": a quiet drop here is exactly
 *  what this file exists to catch. Every one of them is a claim about a SOUND,
 *  and a pattern taught without its sound is a list. */
const PATTERN_REASONS = [
  'the e keeps the g soft before o',
  'the cedilla keeps the c soft before o',
  'the doubled l and the accent both write the same open è',
  'é opens to è once it is the last sound in the word',
];
const PATTERN_FORMS = ['nous mangeons', 'nous commençons', "j'appelle · j'achète", 'je préfère'];

/** All seventeen, BY NAME. A count passes after somebody quietly swaps one out. */
const SEVENTEEN = [
  'manger', 'nager', 'voyager', 'ranger', 'partager',
  'commencer', 'lancer', 'effacer',
  'appeler', 'rappeler', 'jeter',
  'acheter', 'geler',
  'préférer', 'espérer', 'répéter', 'protéger',
];
/** The only memorised list in the lesson, and every screen says it is five. */
const DOUBLERS = ['appeler', 'rappeler', 'jeter'];
const ACCENT_TAKERS = ['acheter', 'geler'];

/** -yer is NAMED as context and taught nowhere. Both halves are asserted, because
 *  the decision had to be one somebody could see. */
const YER_INFINITIVES = ['payer', 'essayer'];
const YER_FORMS = [
  'paie', 'paies', 'paient', 'paye', 'payes', 'payent',
  'essaie', 'essaies', 'essaient', 'essaye', 'essayent',
];
/** aller is a2.02. It may be NAMED once as a trap and conjugated nowhere. */
const ALLER_FORMS = ['vais', 'vas', 'va', 'allons', 'allez', 'vont'];

/** THE STEM SOUND THAT MUST NOT MOVE. The whole -ger/-cer claim is that the
 *  letter went in so the sound would not have to, and if the two respellings of a
 *  pair disagree about the stem, the lesson prints a difference it spends four
 *  missions denying. */
const SOFT_STEM_SOUND: [string, string, string][] = [
  ['fr.a2.verbes.141', 'fr.a2.verbes.142', 'mahⁿ'],
  ['fr.a2.verbes.143', 'fr.a2.verbes.144', 'koh-mahⁿ'],
  ['fr.a2.verbes.145', 'fr.a2.verbes.146', 'vwah-yah-zh'],
];

/** The three respellings this build repaired, with the value it wrote. Reverting
 *  any of them puts a plain n back on a nasal vowel. */
const REPAIRED: Record<string, string> = {
  'fr.sons.verbes-essentiels.036': 'koh-mahⁿ-SAY',
  'fr.sons.verbes-essentiels.132': 'lahⁿ-SAY',
  'fr.a1.routines.033': 'rahⁿ-ZHAY',
};

/** The WORD-INTERNAL nasals in this lesson's own rows. hasPlainNasalFor needs the
 *  n or m to END a token, so KOH-MAHNS, lahns and mahnzh would all sail through
 *  it while being wrong. Invariants §3, and it bites five rows here. */
const MUST_CARRY_SUPERSCRIPT: Record<string, string> = {
  'fr.a2.verbes.143': 'koh-MAHⁿS',
  'fr.a2.verbes.160': 'koh-MAHⁿS',
  'fr.a2.verbes.165': 'koh-MAHⁿS',
  'fr.a2.verbes.164': 'lahⁿs',
  'fr.a2.verbes.141': 'mahⁿzh',
};

/** A row whose respelling correctly ends in a REAL n. Asserted so a later author
 *  who trusts the shared checker does not "repair" it into a nasal that is not
 *  there. */
const MUST_NOT_CARRY_SUPERSCRIPT = ['fr.a2.verbes.166']; // cuisine, /kɥi.zin/

const OWNED = { from: 'fr.a2.verbes.141', to: 'fr.a2.verbes.180' };
const THEME = 'verbes';

function strings(v: unknown, out: string[] = []): string[] {
  if (typeof v === 'string') out.push(v);
  else if (Array.isArray(v)) v.forEach((x) => strings(x, out));
  else if (v && typeof v === 'object') Object.values(v).forEach((x) => strings(x, out));
  return out;
}

/** The same walk with TRANSCRIPTION fields left out. A word-level guard must not
 *  read IPA: it separates syllables with a full stop, so `/nu vwa.ja.ʒɔ̃/` reads
 *  as a standalone `ja` and a2.01's aller check fired on `.va.` while its lesson
 *  was correct. A guard that fires on legitimate content is a guard the next
 *  author deletes. */
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
 *  are honest: s16-notmine NAMES payer and aller in order to hand them over. */
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
let SRC_TWO_MECHANISMS = '';
let SRC_NOUS_ON = '';
let SRC_BACKREF = '';
let SRC_AUTHORED: Item[] = [];
let SRC_IMPORTED: Item[] = [];
let SRC_SEVENTEEN: readonly string[] = [];
let SRC_DOUBLERS: readonly string[] = [];
let SRC_ACCENT_TAKERS: readonly string[] = [];
let SRC_PATTERNS: { key: string; label: string; form: string; reason: string; where: string; mechanism: string }[] = [];
let SRC_MECHANISMS: string[] = [];
let SRC_REPAIRS: { id: string; fr: string; from: string; to: string }[] = [];
let SRC_SPEAK: string[] = [];
let SRC_DICTATION: string[] = [];
let SRC_ITEM_IDS: string[] = [];
let SRC_NEAR_MISS: { id: string; wrong: string; scorable: boolean }[] = [];
let SRC_SOFT_PAIRS: { still: string; moving: string; sound: string }[] = [];
let SRC_MINIMAL_PAIRS: { moving: string; still: string; what: string }[] = [];
let SRC_CHANGED_FORMS: readonly string[] = [];
let SRC_YER: readonly string[] = [];
let SRC_YER_FORMS: readonly string[] = [];
let SRC_ALLER: readonly string[] = [];
let SRC_RANGE = { from: '', to: '' };

try {
  const corpus = await import('../../../ealch-admin/scripts/data/verbes-er-exceptions-corpus.ts');
  const lesson = await import('../../../ealch-admin/scripts/data/verbes-er-exceptions-lesson.ts');
  const imported = await import('../../../ealch-admin/scripts/data/verbes-er-exceptions-imported.ts');
  const terms = await import('../../../ealch-admin/scripts/data/verbes-er-exceptions-terms.ts');
  SRC = lesson.VERBES_ER_EXC_LESSON as Lesson;
  SRC_REFRAME = terms.REFRAME as string;
  SRC_TWO_MECHANISMS = terms.TWO_MECHANISMS as string;
  SRC_NOUS_ON = terms.NOUS_ON as string;
  SRC_BACKREF = terms.A201_BACKREF as string;
  SRC_AUTHORED = (corpus.VERBES_ER_EXC as unknown[]).map((s) => corpus.toItem(s as never)) as Item[];
  SRC_IMPORTED = imported.IMPORTED_ROWS as unknown as Item[];
  SRC_SEVENTEEN = corpus.THE_SEVENTEEN as readonly string[];
  SRC_DOUBLERS = corpus.DOUBLERS as readonly string[];
  SRC_ACCENT_TAKERS = corpus.ACCENT_TAKERS as readonly string[];
  SRC_PATTERNS = corpus.PATTERNS as unknown as typeof SRC_PATTERNS;
  SRC_MECHANISMS = corpus.MECHANISMS as string[];
  SRC_REPAIRS = corpus.RESPELL_REPAIRS as unknown as typeof SRC_REPAIRS;
  SRC_SPEAK = lesson.VERBES_ER_EXC_SPEAK_IDS as string[];
  SRC_DICTATION = lesson.VERBES_ER_EXC_DICTATION_IDS as string[];
  SRC_ITEM_IDS = lesson.VERBES_ER_EXC_ITEM_IDS as string[];
  SRC_NEAR_MISS = corpus.DICTEE_NEAR_MISS as unknown as typeof SRC_NEAR_MISS;
  SRC_SOFT_PAIRS = corpus.SOFT_STEM_SOUND as unknown as typeof SRC_SOFT_PAIRS;
  SRC_MINIMAL_PAIRS = corpus.MINIMAL_PAIRS as unknown as typeof SRC_MINIMAL_PAIRS;
  SRC_CHANGED_FORMS = corpus.CHANGED_FORMS as readonly string[];
  SRC_YER = corpus.YER_INFINITIVES as readonly string[];
  SRC_YER_FORMS = corpus.YER_FORMS as readonly string[];
  SRC_ALLER = corpus.ALLER_FORMS as readonly string[];
  SRC_RANGE = corpus.OWNED_ID_RANGE as typeof SRC_RANGE;
} catch {
  // Not available; the source-derived tests below no-op.
}
const noSrc = !SRC;

/* ═══ 1. The lesson exists, in the shape it claims ═══════════════════════ */

test('a2.09.l1 is in the seed', () => {
  ok(L, 'a2.09.l1 is not in seed.json');
});

test('it is a first build, and the counter only ever moves forward', { skip: noLesson }, () => {
  // a2.09 was probed as a greenfield unit (`"lessons": []`), unlike a2.01, so the
  // counter STARTED at 1 rather than picking up a stub's number. It has moved
  // once since: see the note at the version field. The assertion is a floor
  // rather than an equality, because a rebuild that reuses its own number reads
  // as a rollback in the log.
  ok(L!.version >= 2, `a2.09.l1 is v${L!.version}; the counter moves forward, never back`);
  strictEqual(L!.unitId, 'a2.09');
  strictEqual(L!.level, 'a2');
  strictEqual(L!.tag, 'A2 · LEÇON 02', 'the unit sits at seq "2", so missions.ts draws LEÇON 02');
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
    + ' The base paradigm is a2.01\'s and gets one recap mission; if act 2 grows, this lesson has started'
    + ' re-teaching last week instead of teaching the spelling.',
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
  strictEqual(L!.sections.filter((s) => s.type === 'tapTable').length, 1);
  strictEqual(L!.sections.filter((s) => s.type === 'table').length, 0, 'a table at layer core is a table-in-core density failure');
  const inSheets = (L!.sheets ?? []).flatMap((sh) => sh.sections ?? []).filter((s) => s.type === 'table').length;
  ok(inSheets >= 1, 'the full four-pattern grid belongs in a reference sheet');
});

/* ═══ 2. THE REASONS. Four patterns, and the sound each one protects ═════ */

test('every pattern is taught WITH its sound-preservation reason', { skip: noLesson }, () => {
  for (const reason of PATTERN_REASONS) {
    ok(learnerText.includes(reason), `no screen carries the reason "${reason}". A pattern taught as a form is a list.`);
  }
});

test('every pattern form is on a screen too', { skip: noLesson }, () => {
  for (const form of PATTERN_FORMS) ok(learnerText.includes(form), `${form} appears on no screen`);
});

test('THE GRID PUTS ALL FOUR REASONS ON ONE SCREEN', { skip: noLesson }, () => {
  const grid = section(GRID_SECTION);
  ok(grid, `${GRID_SECTION} is gone. That is where "two reasons, not four" becomes visible.`);
  strictEqual(grid!.type, 'cheatSheet', 'a table at layer core is refused by density; the in-flow grid is a cheatSheet');
  const rows = grid!.rows as unknown[];
  strictEqual(rows.length, PATTERN_REASONS.length);
  const text = strings(grid).join('\n');
  for (const reason of PATTERN_REASONS) {
    ok(text.includes(reason), `${GRID_SECTION} does not carry "${reason}". Split across four screens the claim is invisible.`);
  }
});

test('the grid is a section type a renderer actually draws', { skip: noLesson }, () => {
  // a1.13 ships a cheatSheet INSIDE a reference sheet, where ReferenceSheet.tsx
  // draws teach/letterGrid/table and nothing else, so it renders its title and no
  // rows. This one is in the FLOW, where LessonSection.tsx routes it to
  // CheatSheetView. Pinned against the real component source.
  const src = readFileSync(resolve(here, '../components/LessonSection.tsx'), 'utf8');
  ok(src.includes("case 'cheatSheet':"), 'LessonSection no longer renders cheatSheet');
  ok(src.includes('CheatSheetView'), 'the cheatSheet case no longer reaches CheatSheetView');
  const sheetSrc = readFileSync(resolve(here, '../components/ReferenceSheet.tsx'), 'utf8');
  ok(!sheetSrc.includes("case 'cheatSheet':"), 'ReferenceSheet now draws cheatSheet, so the grid could move into a sheet');
});

test('"two reasons" is a claim the data supports, not just prose', { skip: noSrc }, () => {
  strictEqual(SRC_MECHANISMS.length, 2, `PATTERNS declares ${SRC_MECHANISMS.length} mechanisms: ${SRC_MECHANISMS.join(', ')}`);
  strictEqual(SRC_PATTERNS.length, 4);
  const perMechanism = new Map<string, number>();
  for (const p of SRC_PATTERNS) perMechanism.set(p.mechanism, (perMechanism.get(p.mechanism) ?? 0) + 1);
  for (const [m, n] of perMechanism) strictEqual(n, 2, `mechanism "${m}" covers ${n} patterns, expected 2`);
});

test('the two-mechanisms line is carried, not merely implied', { skip: noLesson }, () => {
  const carrying = L!.sections.filter((s) => strings(s).some((x) => x.includes(TWO_MECHANISMS)));
  ok(carrying.length >= 3, `"${TWO_MECHANISMS}" reaches ${carrying.length} sections; it is the claim the lesson is built on`);
});

test('the source and the seed carry the same two-mechanisms line', { skip: noSrc }, () => {
  strictEqual(SRC_TWO_MECHANISMS, TWO_MECHANISMS);
});

test('one verb runs both mechanisms, and it is on a screen', { skip: noLesson }, () => {
  const both = section('s12-both');
  ok(both, 's12-both is gone. protéger is the proof that the mechanisms are two rather than four.');
  const text = strings(both).join('\n');
  ok(text.includes('protège'), 's12-both no longer shows the silent-ending half');
  ok(text.includes('protégeons'), 's12-both no longer shows the soft-consonant half');
});

/* ═══ 3. -eler AGAINST -eter: two columns, one screen ════════════════════ */

test('THE SPLIT IS A PAIR IN ONE SECTION, IN TWO COLUMNS', { skip: noLesson }, () => {
  const pair = section(SPLIT_SECTION);
  ok(pair, `${SPLIT_SECTION} is gone`);
  strictEqual(pair!.type, 'tapTable');
  const cols = pair!.cols as string[];
  strictEqual(cols.length, 3);
  strictEqual(cols[1], SPLIT_COLS.doubles);
  strictEqual(cols[2], SPLIT_COLS.accents);
  const rows = pair!.rows as { cells: string[] }[];
  strictEqual(rows.length, 6, 'tapTable is not in ownsLayout(), so a longer table runs past the fold');
});

test('both spellings of the open è are on that one screen', { skip: noLesson }, () => {
  const rows = (section(SPLIT_SECTION)!.rows as { cells: string[] }[]);
  const cells = rows.flatMap((r) => r.cells);
  ok(cells.some((c) => /ll|tt/.test(c)), 'no doubled consonant on the split screen: only half the contrast is there');
  ok(cells.some((c) => /è/.test(c)), 'no accented form on the split screen: only half the contrast is there');
});

test('and the two cells that never move are on it too', { skip: noLesson }, () => {
  const rows = (section(SPLIT_SECTION)!.rows as { cells: string[] }[]);
  for (const person of ['nous', 'vous']) {
    const row = rows.find((r) => r.cells[0] === person);
    ok(row, `the ${person} row is missing from the split screen`);
    ok(
      !/ll|tt|è/.test(`${row!.cells[1]}${row!.cells[2]}`),
      `the ${person} row shows a changed stem. Two of the six cells never move and that is half the rule.`,
    );
  }
});

test('the split has corpus rows behind it, not only display strings', { skip: noLesson }, () => {
  for (const id of ['fr.a2.verbes.153', 'fr.a2.verbes.155']) {
    const row = byId.get(id);
    ok(row, `${id} is not in the seed, so the drills and the dictée cannot score the contrast the table shows`);
  }
  strictEqual(byId.get('fr.a2.verbes.153')!.fr, 'Tu appelles Marie.');
  strictEqual(byId.get('fr.a2.verbes.155')!.fr, 'Tu achètes du pain.');
});

test('the memorised list is five verbs and every one is named', { skip: noLesson }, () => {
  strictEqual(DOUBLERS.length + ACCENT_TAKERS.length, 5);
  for (const v of [...DOUBLERS, ...ACCENT_TAKERS]) {
    ok(hasPhrase(learnerText, v), `${v} is on the memorised list and named by no screen`);
  }
});

test('the lesson SAYS the split has to be learnt rather than derived', { skip: noLesson }, () => {
  const trap = section('s14-trap');
  ok(trap, 's14-trap is gone');
  const text = strings(trap).join('\n').toLowerCase();
  ok(
    text.includes('nothing in the ending predicts') || text.includes('nothing in either'),
    'the trapDrill no longer says the ending does not predict the spelling. A rule that pretends to be'
    + ' complete and is not is how a learner decides the language is arbitrary.',
  );
  ok(text.includes('five verbs') || text.includes('five'), 'the trapDrill no longer bounds the exception list');
});

test('the source and this file agree about who doubles and who accents', { skip: noSrc }, () => {
  strictEqual(SRC_DOUBLERS.join(','), DOUBLERS.join(','));
  strictEqual(SRC_ACCENT_TAKERS.join(','), ACCENT_TAKERS.join(','));
});

/* ═══ 4. -ger AND -cer: the nous cell, and the sound that did not move ═══ */

test('nous mangeons and nous commençons are BOTH present', { skip: noLesson }, () => {
  for (const form of ['nous mangeons', 'nous commençons']) {
    ok(learnerText.toLowerCase().includes(form), `"${form}" appears on no screen; the nous cell is the entire teaching`);
  }
});

test('THE STEM SOUND DOES NOT MOVE ACROSS A SOFT PAIR', { skip: noLesson }, () => {
  for (const [still, moving, sound] of SOFT_STEM_SOUND) {
    const a = byId.get(still);
    const b = byId.get(moving);
    ok(a && b, `${still} / ${moving} not in the seed`);
    ok(
      (a!.respell ?? '').toLowerCase().includes(sound.toLowerCase()),
      `${still} is respelled "${a!.respell}" and must carry "${sound}"`,
    );
    ok(
      (b!.respell ?? '').toLowerCase().includes(sound.toLowerCase()),
      `${moving} is respelled "${b!.respell}" and must carry "${sound}".`
      + ' The letter in it exists SO THAT THE SOUND DOES NOT CHANGE; two respellings that disagree teach'
      + ' a difference that is not there.',
    );
  }
});

test('the change is stated as one cell in six', { skip: noLesson }, () => {
  const cell = section('s07-nouscell');
  ok(cell, 's07-nouscell is gone');
  const text = strings(cell).join('\n').toLowerCase();
  ok(text.includes('one cell in six') || text.includes('one cell out of six'), 'the nous-only claim is no longer stated');
});

test('and it is connected to a2.01\'s nous/on statement, VERBATIM', { skip: noLesson }, () => {
  ok(
    learnerText.includes(NOUS_ON),
    'the nous/on statement no longer appears verbatim. The ledger binds all twenty A2 lessons to a2.01\'s'
    + ' wording and this lesson has the strongest reason to quote it, because the -ger/-cer change lives in'
    + ' the nous cell. Import the constant; do not reword it.',
  );
  const holders = L!.sections.filter((s) => strings(s).some((x) => x.includes(NOUS_ON)));
  ok(holders.length >= 1, 'no section carries it');
});

test('the source imports a2.01\'s constant rather than restating it', { skip: noSrc }, () => {
  strictEqual(SRC_NOUS_ON, NOUS_ON);
});

test('THE a2.01 BACK-REFERENCE EXISTS', { skip: noLesson }, () => {
  const holders = L!.sections.filter((s) => strings(s).some((x) => x.includes(A201_BACKREF)));
  ok(
    holders.length > 0,
    `${A201_BACKREF} is named by no section. This is seq 2 of 32 and the second half of the lesson rests on a`
    + ' fact a2.01 taught last lesson. Naming the unit is the teaching, not a citation.',
  );
});

test('the recap mission prints a2.01\'s endings and does not restate them', { skip: noLesson }, () => {
  const recap = section('s04-recap');
  ok(recap, 's04-recap is gone');
  const text = strings(recap).join('\n');
  ok(text.includes(A201_BACKREF), 'the recap no longer names the unit it is recapping');
  for (const ending of ['-e', '-es', '-ons', '-ez', '-ent']) {
    ok(text.includes(ending), `the recap no longer prints ${ending}`);
  }
});

test('the source back-reference constant matches', { skip: noSrc }, () => {
  strictEqual(SRC_BACKREF, A201_BACKREF);
});

/* ═══ 5. THE -yer DECISION, ASSERTED BOTH WAYS ══════════════════════════ */

test('-yer is NAMED as context', { skip: noLesson }, () => {
  for (const v of YER_INFINITIVES) {
    ok(
      hasPhrase(learnerText, v),
      `${v} is named nowhere. The decision was to NAME the pattern and not teach it: a learner who meets`
      + ' je paie in the wild with no place to put it concludes the system is unreliable.',
    );
  }
});

test('and taught nowhere: no -yer form reaches a production surface', { skip: noLesson }, () => {
  const surfaces = productionSurfaces();
  const leaked = YER_FORMS.filter((f) => surfaces.some((s) => hasPhrase(s, f)));
  strictEqual(
    leaked.join(', '), '',
    'a -yer form reached a production surface. -yer is context because payer has two accepted spellings'
    + ' (je paie and je paye) and this lesson\'s hardest screen insists there is one right answer.',
  );
});

test('no -yer verb is released as an item', { skip: noLesson }, () => {
  const released = L!.itemIds.map((id) => byId.get(id)?.fr).filter(Boolean) as string[];
  for (const v of YER_INFINITIVES) {
    ok(!released.includes(v), `${v} is a released item. Context is a display string, not a row in the hub.`);
  }
});

test('the reason for the decision is on the card', { skip: noLesson }, () => {
  const card = section('s16-notmine');
  ok(card, 's16-notmine is gone');
  const text = strings(card).join('\n').toLowerCase();
  ok(text.includes('both spellings are accepted'), 'the -yer card no longer says WHY it was left out');
  ok(text.includes('same four cells') || text.includes('same reason'), 'the -yer card no longer places it in the same mechanism');
});

test('the source and this file guard the same -yer forms', { skip: noSrc }, () => {
  strictEqual(SRC_YER.join(','), YER_INFINITIVES.join(','));
  strictEqual(SRC_YER_FORMS.join(','), YER_FORMS.join(','));
});

/* ═══ 6. The other neighbours ═══════════════════════════════════════════ */

test('aller is never conjugated', { skip: noLesson }, () => {
  const bad = ALLER_FORMS.filter((f) => learnerProse.some((s) => hasPhrase(s, f)));
  strictEqual(bad.join(', '), '', 'a form of aller reached a learner surface. aller is a2.02.');
});

test('aller IS named once, as the trap', { skip: noLesson }, () => {
  ok(hasPhrase(learnerText, 'aller'), 'aller is named nowhere. One line naming it is the ceiling and the floor.');
});

test('the source and this file guard the same forms of aller', { skip: noSrc }, () => {
  strictEqual(SRC_ALLER.join(','), ALLER_FORMS.join(','));
});

test('no -IR or -RE verb: a2.10 and a2.11 keep their lessons', { skip: noLesson }, () => {
  const surfaces = productionSurfaces();
  for (const v of ['finir', 'choisir', 'vendre', 'attendre', 'répondre']) {
    ok(!surfaces.some((s) => hasPhrase(s, v)), `${v} reached a production surface and belongs to a2.10 or a2.11`);
  }
});

test('no imperfect: nous mangions and je préférais are a later unit', { skip: noLesson }, () => {
  for (const f of ['mangions', 'préférais', 'commencions', 'appelais']) {
    const onScreen = L!.sections.some((s) => strings(s).some((x) => hasPhrase(x, f)));
    ok(!onScreen, `${f} is on a mission screen and the imperfect is not on this trail yet`);
  }
});

/* ═══ 7. What the app can and cannot test, measured ═════════════════════ */

test('NO TYPED QUESTION TURNS ON AN ACCENT OR A CEDILLA', { skip: noLesson }, () => {
  // fold() normalises to NFD and strips every combining mark, so a typeIn whose
  // answer differs from the learner's likely error only by a diacritic ACCEPTS
  // THE ERROR and tells them they spelled it right. Run through the real
  // matchesAccept rather than by inspection.
  const DIACRITIC_ERRORS: [string, string][] = [
    ['commençons', 'commencons'],
    ['achètes', 'achetes'],
    ['achète', 'achete'],
    ['préfère', 'prefere'],
    ['répètent', 'repetent'],
    ['gèle', 'gele'],
    ['protégeons', 'protegeons'],
  ];
  const quiz = L!.sections.find((s) => s.type === 'quiz')!;
  const bad: string[] = [];
  for (const q of quizQuestions(quiz as never)) {
    if (!['typeIn', 'errorSpot'].includes(q.format ?? '')) continue;
    for (const [right, wrong] of DIACRITIC_ERRORS) {
      if (!(q.accept ?? []).some((a) => a.includes(right))) continue;
      if (matchesAccept(wrong, q.accept ?? [])) bad.push(`"${q.q}" accepts ${wrong}`);
    }
  }
  strictEqual(bad.join('; '), '', 'typed question(s) that accept the mistake they are testing');
});

test('the accent and the cedilla ARE tested, as mcq, with the wrong spelling offered', { skip: noLesson }, () => {
  const quiz = L!.sections.find((s) => s.type === 'quiz')!;
  const qs = quizQuestions(quiz as never);
  const cedilla = qs.some((q) => q.format === 'mcq'
    && (q.opts ?? []).some((o) => o.includes('commencons'))
    && (q.opts ?? []).some((o) => o.includes('commençons')));
  ok(cedilla, 'no mcq puts commencons and commençons side by side, and no other format can ask it');
  const accent = qs.some((q) => q.format === 'mcq'
    && (q.opts ?? []).includes('achete')
    && (q.opts ?? []).includes('achète'));
  ok(accent, 'no mcq puts achete and achète side by side, for the same reason');
});

test('the dictée grades what the source says it grades, through the real normalizeFr', { skip: noLesson || noSrc }, () => {
  for (const d of SRC_NEAR_MISS) {
    const row = byId.get(d.id);
    ok(row, `DICTEE_NEAR_MISS names ${d.id}, which is not in the seed`);
    const distinguishable = normalizeFr(row!.fr) !== normalizeFr(d.wrong);
    strictEqual(
      distinguishable, d.scorable,
      `${d.id} is marked scorable: ${d.scorable} and normalizeFr says ${distinguishable}`
      + ` ("${row!.fr}" against "${d.wrong}"). If normalizeFr has learned to keep diacritics, this lesson can`
      + ' move its accent questions out of mcq and the corpus header needs rewriting.',
    );
  }
  const scorable = SRC_NEAR_MISS.filter((d) => d.scorable).length;
  ok(scorable >= 6, `only ${scorable} dictée targets are graded on the distinction they teach`);
});

test('the dictée spells from LETTERS, which is the only mode that can test a spelling', { skip: noLesson }, () => {
  const d = L!.sections.find((s) => s.type === 'dictation');
  ok(d && d.type === 'dictation', 'no dictation section');
  ok(d!.itemIds.length >= 7, `${d!.itemIds.length} dictée targets`);
  for (const id of d!.itemIds) {
    const it = byId.get(id);
    ok(it, `dictée target ${id} is not in the seed`);
    strictEqual(
      dicteeMode(it!.fr), 'letters',
      `"${it!.fr}" is in word mode. Word tiles hand every real word over pre-spelled, so they cannot test a spelling.`,
    );
    ok((it!.drills ?? []).includes('dictation'), `${id} carries no dictation drill`);
  }
});

/* ═══ 8. Respellings ════════════════════════════════════════════════════ */

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
    !hasPlainNasalFor('Il commence ici.', 'eel koh-MAHNS ee-SEE'),
    'hasPlainNasalFor now catches a word-internal nasal. Update invariants §3.',
  );
  for (const [id, must] of Object.entries(MUST_CARRY_SUPERSCRIPT)) {
    const row = byId.get(id);
    ok(row, `${id} is not in the seed`);
    ok(row!.respell?.includes(must), `${id} "${row!.fr}" must respell with "${must}", found "${row!.respell}"`);
  }
});

test('and a real n is not "repaired" into a nasal that is not there', { skip: noLesson }, () => {
  for (const id of MUST_NOT_CARRY_SUPERSCRIPT) {
    const row = byId.get(id);
    ok(row, `${id} is not in the seed`);
    ok(row!.respell?.includes('ZEEN'), `${id} "${row!.fr}" should keep a plain N: /kɥi.zin/ is a real n`);
  }
});

/* ═══ 9. Items, tranches, corpus hygiene ════════════════════════════════ */

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
  // dictation resolve their itemIds against the corpus). The first half is
  // stronger than an id lookup, because it asks whether the learner saw the
  // sentence; the second is needed because a mic-scored deck holds ids and no
  // text at all.
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

test('all seventeen verbs are named individually and released by id', { skip: noLesson }, () => {
  strictEqual(SEVENTEEN.length, 17);
  for (const v of SEVENTEEN) ok(hasPhrase(learnerText, v), `${v} is named by no screen`);
  const released = new Set(L!.itemIds.map((id) => byId.get(id)?.fr));
  for (const v of SEVENTEEN) ok(released.has(v), `${v} is on a screen and not in itemIds`);
});

test('not one of the seventeen was authored: every one is imported', { skip: noSrc }, () => {
  strictEqual(SRC_SEVENTEEN.join(','), SEVENTEEN.join(','));
  const authoredFr = new Set(SRC_AUTHORED.map((i) => i.fr));
  for (const v of SEVENTEEN) ok(!authoredFr.has(v), `${v} was authored; twelve of the thirteen the brief named already existed`);
  strictEqual(SRC_IMPORTED.length, 17);
});

test('no imported verb row carries a gender', { skip: noLesson }, () => {
  const released = L!.itemIds.map((id) => byId.get(id)).filter((i): i is Item => !!i);
  const gendered = released.filter((i) => i.gender && SEVENTEEN.includes(i.fr));
  strictEqual(gendered.map((i) => `${i.fr} (${i.id})`).join(', '), '', 'an infinitive is not a noun, and a gendered single-word row joins a1.03\'s population');
});

test('nothing this lesson writes joins a1.03\'s measured ending population', { skip: noSrc }, () => {
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
    const key = `${i.theme}${strip(i.fr)}`;
    const prev = seen.get(key);
    if (prev) clashes.push(`${i.theme} "${i.fr}": ${prev} and ${i.id}`);
    else seen.set(key, i.id);
  }
  strictEqual(clashes.join('\n'), '', 'flashhub-coverage treats two rows sharing an fr in one theme as one card served twice');
});

test('the seed lesson is the authored lesson', { skip: noLesson || noSrc }, () => {
  strictEqual(JSON.stringify(L), JSON.stringify(SRC), 'seed.json and the source have drifted; re-run the merge');
});

test('every authored row is in the seed and says what the source says', { skip: noLesson || noSrc }, () => {
  for (const it of SRC_AUTHORED) {
    const row = byId.get(it.id);
    ok(row, `${it.id} is not in the seed`);
    strictEqual(row!.fr, it.fr);
    strictEqual(row!.respell ?? null, it.respell ?? null);
    strictEqual(row!.en, it.en);
  }
  strictEqual(SRC_AUTHORED.length, 26);
});

test('every imported row was CARRIED through the seed cut', { skip: noLesson || noSrc }, () => {
  for (const it of SRC_IMPORTED) ok(byId.has(it.id), `${it.id} was not carried, so its card would draw empty`);
});

test('the unit advertises this lesson and its own copy is unchanged', { skip: noLesson }, () => {
  const u = seed.units.find((x) => x.id === 'a2.09');
  ok(u, 'unit a2.09 is not in the seed');
  ok((u!.lessonIds ?? []).includes('a2.09.l1'));
  // Copied byte for byte from the probe's unit dump. The brief has title and sub
  // SWAPPED and its sub is not in the database at all.
  strictEqual(u!.title, '-ER Verbs: The Exceptions');
  strictEqual(u!.sub, 'Les verbes en -ER : exceptions');
  strictEqual(u!.canDo, 'Can spell the stem changes in manger, commencer, appeler and préférer without guessing');
  ok((u!.prereqUnitIds ?? []).includes('a2.01'), 'the unit no longer declares a2.01 as its prerequisite');
  strictEqual(`A2 · LEÇON ${String(u!.seq).padStart(2, '0')}`, L!.tag);
});

/* ═══ 10. The quiz ══════════════════════════════════════════════════════ */

test('the quiz is five rounds, and every question has a why and a live ref', { skip: noLesson }, () => {
  const quiz = L!.sections.find((s) => s.type === 'quiz')!;
  strictEqual((quiz as { rounds?: unknown[] }).rounds?.length, 5);
  const ids = new Set(L!.sections.map((s) => (s as { id?: string }).id));
  for (const q of quizQuestions(quiz as never)) {
    ok(q.why, `no why: ${q.q}`);
    ok(q.ref && ids.has(q.ref), `ref "${q.ref}" names no section: ${q.q}`);
  }
});

test('at most half the questions are mcq, and the reason the share is high is real', { skip: noLesson }, () => {
  const quiz = L!.sections.find((s) => s.type === 'quiz')!;
  const qs = quizQuestions(quiz as never);
  const mcq = qs.filter((q) => q.format === 'mcq').length;
  ok(mcq * 2 <= qs.length, `${mcq}/${qs.length} are mcq`);
  // The brief said typeIn is the format. It is for two of the four patterns and
  // cannot be for the other two, so typed formats still have to carry weight.
  const typed = qs.filter((q) => ['typeIn', 'errorSpot'].includes(q.format ?? '')).length;
  ok(typed >= 12, `only ${typed} typed questions; the lesson's testable half is a spelling the learner produces`);
});

test('listenChoose is used once, where the ear genuinely decides', { skip: noLesson }, () => {
  const quiz = L!.sections.find((s) => s.type === 'quiz')!;
  const lc = quizQuestions(quiz as never).filter((q) => q.format === 'listenChoose');
  strictEqual(lc.length, 1, 'the -ger/-cer change is inaudible by design; padding listenChoose here tests nothing');
  const text = `${lc[0].q} ${(lc[0].opts ?? []).join(' ')} ${lc[0].why ?? ''}`;
  ok(text.includes('préfère') || text.includes('préférons'), 'the one listenChoose must be the vowel pair, which is the only audible change');
  ok(lc[0].say, 'a listenChoose without a say makes ListenChooseCard speak opts[correct]');
});

test('every stem-change question carries the infinitive and a subject', { skip: noLesson }, () => {
  const quiz = L!.sections.find((s) => s.type === 'quiz')!;
  const gap = quizQuestions(quiz as never).filter((q) => q.q.includes('___'));
  ok(gap.length >= 8, `only ${gap.length} gap questions`);
  const PRONOUNS = ['je', 'tu', 'il', 'elle', 'on', 'nous', 'vous', 'ils', 'elles'];
  for (const q of gap) {
    ok(/\([a-zà-ÿ]+er\)/i.test(q.q), `no infinitive in the stem, so the question has no single answer: ${q.q}`);
    const first = q.q.trim().split(/\s+/)[0].toLowerCase();
    ok(PRONOUNS.includes(first), `no subject pronoun in the stem: ${q.q}`);
  }
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

/* ═══ 11. Sheets, glossary, layout, house rules ═════════════════════════ */

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

test('the lookup sheet lists which verbs double and which take the accent', { skip: noLesson }, () => {
  const sheet = (L!.sheets ?? []).find((s) => s.id === 'sheet.a2.09.lists');
  ok(sheet, 'the lookup sheet is gone. A learner genuinely returns to this one.');
  const text = strings(sheet).join('\n');
  for (const v of [...DOUBLERS, ...ACCENT_TAKERS]) ok(text.includes(v), `${v} is not in the lookup sheet`);
  ok(text.includes('doubles') && text.includes('accent'), 'the sheet no longer says which is which');
});

test('the pattern sheet holds all four patterns with their reason', { skip: noLesson }, () => {
  const sheet = (L!.sheets ?? []).find((s) => s.id === 'sheet.a2.09.patterns');
  ok(sheet, 'the pattern sheet is gone');
  const text = strings(sheet).join('\n');
  for (const reason of PATTERN_REASONS) ok(text.includes(reason), `the sheet no longer carries "${reason}"`);
});

test('the reading glossary keys can actually match, through the real segmenter', { skip: noLesson }, () => {
  const r = L!.sections.find((s) => s.type === 'reading');
  ok(r && r.type === 'reading', 'no reading section');
  ok(r!.questionsInModal, 'a reading without questionsInModal never reaches the glossary renderer');
  ok((r!.questions ?? []).length > 0, 'and it needs questions as well as the flag');
  const g = r!.glossary ?? [];
  ok(g.length > 0, 'no glossary');
  for (const e of g) {
    ok(e.word.trim().split(/\s+/).length <= MAX_GLOSS_WORDS, `"${e.word}" is longer than MAX_GLOSS_WORDS`);
  }
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

test('the scene is a writing failure, not a speaking one', { skip: noLesson }, () => {
  const scene = L!.sections.find((s) => s.type === 'scene');
  ok(scene && scene.type === 'scene');
  const text = strings(scene).join('\n').toLowerCase();
  ok(
    text.includes('write') || text.includes('note') || text.includes('board'),
    'this is the one lesson in batch 1 where the failure is on the page, and the scene has stopped being about writing',
  );
  ok(!text.includes('corrects you'), 'the A2 register is nobody being corrected');
});

/* ═══ 12. Audio briefs ══════════════════════════════════════════════════ */

test('the -ger and -cer pairs are recorded as ONE take and must sound identical', { skip: noLesson }, () => {
  const rec = (L!.audio?.recorded ?? []).find((r) => r.id === 'rec-a2-09-soft');
  ok(rec, 'rec-a2-09-soft is gone');
  const d = rec!.desc.toLowerCase();
  ok(d.includes('one continuous take'), 'the one-take instruction is gone; two sessions are two performances');
  ok(d.includes('identical'), 'the desc no longer says the verb must sound identical in both halves, which is the whole claim');
  ok(d.includes('do not lean'), 'the desc no longer forbids helping the learner hear a difference that is not there');
});

test('and the vowel pairs are recorded so the difference IS audible', { skip: noLesson }, () => {
  const rec = (L!.audio?.recorded ?? []).find((r) => r.id === 'rec-a2-09-open');
  ok(rec, 'rec-a2-09-open is gone');
  const d = rec!.desc.toLowerCase();
  ok(d.includes('audible') || d.includes('real'), 'the desc no longer says this difference is real, which is the opposite of the soft one');
  ok(d.includes('do not exaggerate') || d.includes('ordinary'), 'the desc no longer bounds the contrast');
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

/* ═══ 13. House rules ═══════════════════════════════════════════════════ */

test('no em dash anywhere in the lesson', { skip: noLesson }, () => {
  const bad = strings(L!).filter((s) => s.includes('—'));
  strictEqual(bad.join('\n'), '');
});

test('no grammar jargon on a learner surface', { skip: noLesson }, () => {
  const JARGON = ['conjugation', 'conjugate', 'conjugated', 'indicative', 'morpheme', 'inflection', 'paradigm', 'orthography', 'phoneme'];
  const hit = JARGON.filter((j) => hasPhrase(learnerText, j));
  strictEqual(hit.join(', '), '');
});

test('the word irregular is used ONLY to say these verbs are not', { skip: noLesson }, () => {
  // A quiz or check OPTION is allowed to state the misconception: that is what a
  // distractor is for, and the `why` beside it is where it gets denied. What must
  // never happen is a teaching string asserting it. So the scope is prose with
  // the option lists taken out, and there is a separate assertion that the
  // denial is actually made.
  const options = new Set<string>();
  for (const s of L!.sections) {
    if (s.type === 'quiz') for (const q of quizQuestions(s as never)) for (const o of q.opts ?? []) options.add(o);
    if (s.type === 'groupDrill') for (const g of s.groups) for (const o of g.check?.opts ?? []) options.add(o);
    if (s.type === 'listening') for (const q of s.questions) for (const o of q.opts) options.add(o);
  }
  for (const d of L!.drills ?? []) for (const o of (d as { opts?: string[] }).opts ?? []) options.add(o);
  const uses = learnerProse.filter((s) => hasPhrase(s, 'irregular') && !options.has(s));
  ok(uses.length > 0, 'the lesson no longer names "irregular" as the wrong word, which the brief asked for explicitly');
  for (const s of uses) {
    ok(
      /\b(not|none|never|nor|wrong word)\b/i.test(s),
      `"irregular" is asserted rather than denied: "${s.slice(0, 90)}". Not one verb in this lesson is irregular.`,
    );
  }
  const deny = section('s03-notirregular');
  ok(deny, 's03-notirregular is gone, and with it the only place the false framing is named as false');
});

test('the reframe is this line, verbatim, in exactly nine sections', { skip: noLesson }, () => {
  strictEqual(L!.reframe, REFRAME);
  const carrying = L!.sections.filter((s) => strings(s).some((x) => x.includes(REFRAME)));
  strictEqual(carrying.length, REFRAME_SECTIONS, `the reframe reaches ${carrying.length} sections`);
  strictEqual(strings(L!).filter((s) => s.includes(REFRAME)).length, REFRAME_APPEARANCES);
});

test('the source and the seed carry the same reframe', { skip: noSrc }, () => {
  strictEqual(SRC_REFRAME, REFRAME);
});

test('the reframe is about the reason, not about the four patterns', { skip: noLesson }, () => {
  ok(!/-ger|-cer|-eler/.test(REFRAME), 'a reframe that lists the patterns is a table of contents');
  ok(REFRAME.trim().split(/\s+/).length <= 10, 'a reframe has to survive recall mid-sentence');
});

test('the lesson declares what it assumes and what it introduces', { skip: noLesson }, () => {
  ok((L!.grammarAssumed ?? []).some((g) => g.includes('a2.01')), 'grammarAssumed does not name a2.01');
  ok((L!.grammarIntroduced ?? []).length >= 4);
});

/* ═══ 14. The source's own claims, checked against it ═══════════════════ */

test('every minimal pair really is one moving row against one still row', { skip: noSrc }, () => {
  const by = new Map((SRC ? [] : []).concat());
  ok(SRC_MINIMAL_PAIRS.length >= 8, `${SRC_MINIMAL_PAIRS.length} minimal pairs`);
  strictEqual(SRC_SOFT_PAIRS.length, 3);
  for (const p of SRC_SOFT_PAIRS) {
    ok(SRC_MINIMAL_PAIRS.some((m) => m.moving === p.moving && m.still === p.still), `${p.moving}/${p.still} is not in MINIMAL_PAIRS`);
  }
  ok(by.size === 0);
});

test('the changed forms this lesson owns actually arrive', { skip: noLesson || noSrc }, () => {
  // a2.01 proved none of these reached one of ITS production surfaces. This is
  // the other half: they have to reach one of these. A guard written only over
  // infinitives sees none of them, because `mangeons` does not contain `manger`.
  const surfaces = productionSurfaces();
  const arrived = SRC_CHANGED_FORMS.filter((f) => surfaces.some((s) => hasPhrase(s, f)));
  ok(arrived.length >= 12, `only ${arrived.length} of ${SRC_CHANGED_FORMS.length} changed forms reach a production surface`);
  for (const f of ['mangeons', 'commençons', 'appelle', 'achète', 'préfère', 'jette']) {
    ok(hasPhrase(learnerText, f), `${f} appears on no screen and it is one of the four headline forms`);
  }
});

test('the speak and dictation id lists agree between source and seed', { skip: noLesson || noSrc }, () => {
  const speak = L!.sections.find((s) => s.type === 'practice') as { itemIds?: string[] } | undefined;
  strictEqual((speak?.itemIds ?? []).join(','), SRC_SPEAK.join(','));
  const dict = L!.sections.find((s) => s.type === 'dictation') as { itemIds?: string[] } | undefined;
  strictEqual((dict?.itemIds ?? []).join(','), SRC_DICTATION.join(','));
  strictEqual(L!.itemIds.join(','), SRC_ITEM_IDS.join(','));
});
