// a2.10.l2 "Les autres verbes en -IR": the assertions that keep this lesson true.
//
// ── What this file is actually guarding ────────────────────────────────────
//
// This lesson authors 26 sentences and imports all twelve of its verbs, and its
// claim is not a paradigm but a SORT. So the failure modes are:
//
//   THE TWO CONTRASTS COLLAPSING INTO ONE. `il part` / `ils partent` must be
//   audibly DIFFERENT and `il couvre` / `ils couvrent` must be IDENTICAL, each
//   adjacent in its own tapTable. If both pairs ever became the same shape the
//   lesson would be teaching one rule twice and the sort would be pointless.
//   EITHER INHERITED REFRAME BEING PARAPHRASED. The shedders run a2.10.l1's rule
//   and the -er family runs a2.01's, both quoted verbatim from those lessons'
//   own terms files. A paraphrase is how a band comes to read as a band of
//   products.
//   THE SORT LOSING ITS EVIDENCE. It is proved against a2.10.l1's ACTUAL ROWS —
//   ralentir against sentir, guérir against courir — so the contradiction is with
//   the learner's memory rather than with a fresh example built to make it.
//   THE LIAISON CASE BEING DROPPED. Two of the five -er-ending verbs begin with a
//   vowel and they are the two a learner meets first, so `ils ouvrent` IS audible
//   and the lesson has to say so or be contradicted within a week.
//   THE ERROR FORM MOVING THE WRONG WAY. `ils partissent` is banned on every
//   production surface and REQUIRED on a reject surface. a2.10.l1 banned it
//   everywhere because it could not teach the replacement; this lesson can, so
//   it must confront it.
//   a2.10.l1 BEING DAMAGED. This is the second lesson of an existing unit.
//
// Everything below was mutation-tested: broken on purpose and confirmed red.

import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { ok, strictEqual } from 'node:assert';
import { test } from 'node:test';

import type { Corpus, Item, Lesson } from './schema.ts';
import { canonicalJson, quizQuestions, validateLesson, formatIssues } from './schema.ts';
import { validateDensity, formatDensity, hasPlainNasalFor } from './density.logic.ts';
import { endingPopulation } from './gender.logic.ts';
import { dicteeMode } from './dictee.logic.ts';
import { MAX_GLOSS_WORDS, glossKeys, segmentSentence } from './gloss.logic.ts';
import { matchesAccept } from './answer.logic.ts';
import { lessonsOfUnit } from '../services/content.logic.ts';
import { normalizeFr } from '../utils/score.ts';
import { namesUnitLabel } from './unit-label.ts';

const here = dirname(fileURLToPath(import.meta.url));
const seed = JSON.parse(readFileSync(resolve(here, 'seed.json'), 'utf8')) as {
  version: number; items: Item[]; lessons: Lesson[];
  units: { id: string; title?: string; sub?: string; canDo?: string; seq?: string | number; lessonIds?: string[]; prereqUnitIds?: string[] }[];
};

const L = seed.lessons.find((l) => l.id === 'a2.10.l2');
const L1 = seed.lessons.find((l) => l.id === 'a2.10.l1');
const noLesson = !L;
const byId = new Map(seed.items.map((i) => [i.id, i] as const));

/* ─── The shape ─────────────────────────────────────────────────────────── */

const SPINE = [
  's01-scene', 's02-goals', 's03-twofamilies',
  's04-shed', 's05-shedtable',
  's06-ercase', 's07-ertable',
  's08-sort', 's09-ear', 's10-nopredict', 's11-waking', 's12-trap', 's13-flash',
  's14-errors', 's15-notmine', 's16-speak', 's17-dictation', 's18-scenario', 's19-reading',
  's20-review', 's21-progress', 's22-quiz', 's23-roundup',
];
const ACTS = [
  { id: 'act1', n: 3 }, { id: 'act2', n: 2 }, { id: 'act3', n: 2 },
  { id: 'act4', n: 6 }, { id: 'act5', n: 6 }, { id: 'act6', n: 4 },
];

const REFRAME = 'Check the family before you build.';
const REFRAME_SECTIONS = 9;
const REFRAME_APPEARANCES = 10;
const BOTH_RULES = 'Two families, and you already know both rules.';
/** The two inherited reframes, quoted verbatim from the lessons that authored
 *  them. Restated here so the test compares the seed to a literal rather than to
 *  the source it came from. */
const A210_REFRAME = 'The plural puts a sound on the end.';
const A201_REFRAME = 'Four of the six forms sound the same, so the pronoun carries the person.';

const SHED_SECTION = 's05-shedtable';
const ER_SECTION = 's07-ertable';
const WAKING_SECTION = 's11-waking';
const NOPREDICT_SECTION = 's10-nopredict';
const NOTMINE_SECTION = 's15-notmine';

/** THE TWO PAIRS, and their opposite requirements. */
const SHED_PAIR = { singular: 'Il part tôt.', plural: 'Ils partent tôt.' };
const ER_PAIR = { singular: 'Il couvre tout.', plural: 'Ils couvrent tout.' };

const SHEDDERS = ['partir', 'sortir', 'dormir', 'servir', 'sentir', 'mentir'];
const ER_ENDING = ['ouvrir', 'offrir', 'couvrir', 'découvrir', 'souffrir'];
const NEITHER = ['courir'];
const THE_TWELVE = [...SHEDDERS, ...ER_ENDING, ...NEITHER];
const VOWEL_INITIAL = ['ouvrir', 'offrir'];

/** a2.10.l1's own rows, reused here as the sort's evidence. */
const L1_ROWS = { ralentir: 'fr.a2.verbes.202', guerir: 'fr.a2.verbes.198' };

/** Three spellings one sound, and four spellings one sound. */
const SHED_TRIPLE = ['fr.a2.verbes.461', 'fr.a2.verbes.462', 'fr.a2.verbes.463'];
const ER_QUARTET = ['fr.a2.verbes.467', 'fr.a2.verbes.468', 'fr.a2.verbes.469', 'fr.a2.verbes.470'];

const REPAIRED: Record<string, string> = {
  'fr.sons.verbes-essentiels.074': 'sahⁿ-TEER',
  'fr.sons.verbes-essentiels.204': 'mahⁿ-TEER',
};
const MUST_CARRY_SUPERSCRIPT: Record<string, string> = {
  'fr.a2.verbes.486': 'see-LAHⁿS',
  'fr.a2.verbes.483': 'rar-mahⁿ',
};

/** Banned on a production surface, required on a reject surface. */
const OVER_GENERALISED = [
  'partissent', 'partissons', 'sortissent', 'sortissons',
  'dormissent', 'dormissons', 'servissent', 'sentissent', 'mentissent',
  'ouvrissent', 'offrissent', 'couvrissent', 'courissent', 'souffrissent',
];
/** venir, tenir and mourir may be NAMED and never conjugated. */
const NOT_MINE_FORMS = [
  'viens', 'vient', 'viennent', 'venons', 'venez',
  'tiens', 'tient', 'tiennent', 'tenons', 'tenez',
  'meurs', 'meurt', 'meurent', 'mourons', 'mourez',
];

const OWNED = { from: 'fr.a2.verbes.461', to: 'fr.a2.verbes.500' };
const THEME = 'verbes';
const UNIT_CANDO = 'Can conjugate regular -ir verbs, hear where the -iss- belongs, and tell them apart from the -ir verbs that take no -iss- at all';

function strings(v: unknown, out: string[] = []): string[] {
  if (typeof v === 'string') out.push(v);
  else if (Array.isArray(v)) v.forEach((x) => strings(x, out));
  else if (v && typeof v === 'object') Object.values(v).forEach((x) => strings(x, out));
  return out;
}
const NOTATION_KEYS = new Set(['ipa', 'respell', 'promptSound', 'scoreSegment']);
function prose(v: unknown, out: string[] = []): string[] {
  if (typeof v === 'string') out.push(v);
  else if (Array.isArray(v)) v.forEach((x) => prose(x, out));
  else if (v && typeof v === 'object') {
    for (const [k, x] of Object.entries(v)) if (!NOTATION_KEYS.has(k)) prose(x, out);
  }
  return out;
}
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
function section(id: string): Record<string, unknown> | undefined {
  return (L?.sections ?? []).find((s) => (s as { id?: string }).id === id) as Record<string, unknown> | undefined;
}
const afterPronoun = (r: string) => r.split(' ').slice(1).join(' ');

const learnerText = noLesson ? '' : [...strings(L!.sections), ...strings(L!.sheets ?? []), ...strings(L!.terms ?? {})].join('\n');
const learnerProse = noLesson ? [] : [...prose(L!.sections), ...prose(L!.sheets ?? []), ...prose(L!.terms ?? {})];

/** What the learner produces or chooses. A closed-question OPTION counts: the
 *  learner reads all four and weighs each. */
function productionSurfaces(): string[] {
  if (noLesson) return [];
  const out: string[] = [];
  const quiz = L!.sections.find((s) => s.type === 'quiz');
  if (quiz) {
    for (const q of quizQuestions(quiz as never)) {
      if (q.answer) out.push(q.answer);
      if (q.target) out.push(q.target);
      for (const a of q.accept ?? []) out.push(a);
      for (const o of q.opts ?? []) out.push(o);
    }
  }
  for (const s of L!.sections) {
    if (s.type === 'scenario') for (const t of s.turns) out.push(t.user, ...(t.alts ?? []).map((a) => a.fr));
    if (s.type === 'groupDrill') for (const g of s.groups) { if (g.check) out.push(...g.check.opts); out.push(...strings(g.items ?? [])); }
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
/** And the surfaces whose whole job is to show a thing and reject it. */
function rejectSurfaces(): string[] {
  if (noLesson) return [];
  const out: string[] = [];
  for (const s of L!.sections) {
    if (s.type === 'commonErrors') for (const e of s.errors) out.push(e.wrong);
    if (s.type === 'scene') for (const b of s.beats) {
      const anyB = b as { wrong?: { fr?: string }; options?: { fr: string; outcome?: string }[] };
      if (anyB.wrong?.fr) out.push(anyB.wrong.fr);
      for (const o of anyB.options ?? []) if (o.outcome === 'breaks') out.push(o.fr);
    }
  }
  const quiz = L!.sections.find((s) => s.type === 'quiz');
  if (quiz) for (const q of quizQuestions(quiz as never)) if (q.format === 'errorSpot') out.push(q.q);
  return out;
}

/* ─── The authored source ────────────────────────────────────────────────── */

let SRC: Lesson | null = null;
let SRC_REFRAME = '';
let SRC_BOTH_RULES = '';
let SRC_A201 = '';
let SRC_A210 = '';
let SRC_AUTHORED: Item[] = [];
let SRC_IMPORTED: Item[] = [];
let SRC_TWELVE: readonly string[] = [];
let SRC_SHEDDERS: readonly string[] = [];
let SRC_ER: readonly string[] = [];
let SRC_REPAIRS: { id: string; fr: string; from: string; to: string }[] = [];
let SRC_NEAR_MISS: { id: string; wrong: string; scorable: boolean }[] = [];
let SRC_PAIRS: { singular: string; plural: string; audible: boolean }[] = [];
let SRC_SPEAK: string[] = [];
let SRC_DICTATION: string[] = [];
let SRC_ITEM_IDS: string[] = [];
let SRC_RANGE = { from: '', to: '' };
let SRC_OVER: readonly string[] = [];

try {
  const corpus = await import('../../../ealch-admin/scripts/data/verbes-ir-familles-corpus.ts');
  const lesson = await import('../../../ealch-admin/scripts/data/verbes-ir-familles-lesson.ts');
  const imported = await import('../../../ealch-admin/scripts/data/verbes-ir-familles-imported.ts');
  const terms = await import('../../../ealch-admin/scripts/data/verbes-ir-familles-terms.ts');
  SRC = lesson.VERBES_IR_FAM_LESSON as Lesson;
  SRC_REFRAME = terms.REFRAME as string;
  SRC_BOTH_RULES = terms.BOTH_RULES as string;
  SRC_A201 = terms.A201_REFRAME as string;
  SRC_A210 = terms.A210_REFRAME as string;
  SRC_AUTHORED = (corpus.VERBES_IR_FAM as unknown[]).map((s) => corpus.toItem(s as never)) as Item[];
  SRC_IMPORTED = imported.IMPORTED_ROWS as unknown as Item[];
  SRC_TWELVE = corpus.THE_TWELVE as readonly string[];
  SRC_SHEDDERS = corpus.SHEDDERS as readonly string[];
  SRC_ER = corpus.ER_ENDING as readonly string[];
  SRC_REPAIRS = corpus.RESPELL_REPAIRS as unknown as typeof SRC_REPAIRS;
  SRC_NEAR_MISS = corpus.DICTEE_NEAR_MISS as unknown as typeof SRC_NEAR_MISS;
  SRC_PAIRS = corpus.NUMBER_PAIRS as unknown as typeof SRC_PAIRS;
  SRC_SPEAK = lesson.VERBES_IR_FAM_SPEAK_IDS as string[];
  SRC_DICTATION = lesson.VERBES_IR_FAM_DICTATION_IDS as string[];
  SRC_ITEM_IDS = lesson.VERBES_IR_FAM_ITEM_IDS as string[];
  SRC_RANGE = corpus.OWNED_ID_RANGE as typeof SRC_RANGE;
  SRC_OVER = corpus.OVER_GENERALISED_FORMS as readonly string[];
} catch { /* source-derived tests no-op */ }
const noSrc = !SRC;

/* ═══ 1. It is the SECOND lesson of an existing unit ═════════════════════ */

test('a2.10.l2 is in the seed', () => { ok(L, 'a2.10.l2 is not in seed.json'); });

test('and a2.10.l1 is still there, untouched by it', () => {
  ok(L1, 'a2.10.l1 has gone; this lesson goes behind it, not instead of it');
});

test('THE UNIT CARRIES BOTH, AND THE REAL lessonsOfUnit ORDERS THEM l1 THEN l2', { skip: noLesson }, () => {
  // The whole design rests on this: `lessonsOfUnit` sorts by Lesson.seq and
  // lesson.tsx's nextL walks that order, which is what hands a learner from l1
  // into l2. Run through the REAL function rather than re-deriving it.
  const got = lessonsOfUnit(seed as unknown as Corpus, 'a2.10');
  strictEqual(got.map((l) => l.id).join(','), 'a2.10.l1,a2.10.l2', 'the unit does not resolve its two lessons in seq order');
  strictEqual(got[0].seq, 1);
  strictEqual(got[1].seq, 2);
});

test('den.tsx opens lessonIds[0], so l1 must be first in the array too', { skip: noLesson }, () => {
  // Belt and braces on top of the seq sort: the Den does not sort, it indexes.
  // If l2 ever became lessonIds[0] the Den would open the second lesson first.
  const u = seed.units.find((x) => x.id === 'a2.10')!;
  strictEqual((u.lessonIds ?? [])[0], 'a2.10.l1');
  strictEqual((u.lessonIds ?? []).length, 2);
});

test('its tag differs from l1’s and still starts with the computed eyebrow', { skip: noLesson }, () => {
  // lessonEyebrow draws the same string for both lessons of a unit and that is
  // correct. lesson.tsx uses the raw tag for the in-lesson header, which is where
  // they must differ. a1.30.l2 is the precedent.
  const u = seed.units.find((x) => x.id === 'a2.10')!;
  const eyebrow = `A2 · LEÇON ${String(u.seq).padStart(2, '0')}`;
  ok(L!.tag.startsWith(eyebrow), `the tag ${JSON.stringify(L!.tag)} does not start with ${JSON.stringify(eyebrow)}`);
  ok(L!.tag !== L1!.tag, 'both lessons of this unit carry the same tag, so the in-lesson header cannot tell them apart');
  strictEqual(L!.unitId, 'a2.10');
  strictEqual(L!.seq, 2);
});

test('the unit’s canDo was widened to cover both lessons', { skip: noLesson }, () => {
  const u = seed.units.find((x) => x.id === 'a2.10')!;
  strictEqual(u.canDo, UNIT_CANDO, 'the unit still promises only what l1 delivers');
  strictEqual(u.title, 'Regular -IR Verbs');
  strictEqual(u.sub, 'Les verbes en -IR');
});

test('the spine is these missions, in this order', { skip: noLesson }, () => {
  strictEqual(L!.sections.map((s) => (s as { id?: string }).id).join(','), SPINE.join(','));
});

test('the act structure holds, and every section belongs to exactly one act', { skip: noLesson }, () => {
  const acts = L!.acts ?? [];
  strictEqual(acts.length, ACTS.length);
  acts.forEach((a, i) => { strictEqual(a.id, ACTS[i].id); strictEqual(a.sections.length, ACTS[i].n, `${a.id}`); });
  const claimed = acts.flatMap((a) => a.sections);
  strictEqual(new Set(claimed).size, claimed.length, 'a section is claimed by two acts');
  strictEqual(claimed.slice().sort().join(','), SPINE.slice().sort().join(','));
});

test('THE SORT ACT IS HEAVIER THAN BOTH PARADIGM ACTS TOGETHER', { skip: noLesson }, () => {
  const acts = L!.acts ?? [];
  const paradigms = acts.find((a) => a.id === 'act2')!.sections.length + acts.find((a) => a.id === 'act3')!.sections.length;
  const owns = acts.find((a) => a.id === 'act4')!.sections.length;
  ok(owns > paradigms, `the sort act holds ${owns} missions and the two paradigm acts ${paradigms}. Neither paradigm is new; the sort is.`);
});

test('the mission count is inside the house range', { skip: noLesson }, () => {
  ok(L!.sections.length >= 19 && L!.sections.length <= 24, `${L!.sections.length} missions`);
});

test('it validates, and it passes the density validator', { skip: noLesson }, () => {
  const issues = validateLesson(L!, L!.id);
  strictEqual(issues.length, 0, formatIssues(issues));
  const d = validateDensity(L!, new Set(seed.items.map((i) => i.id)));
  strictEqual(d.length, 0, formatDensity(d));
});

test('exactly one quiz, and two tapTables because there are two paradigms', { skip: noLesson }, () => {
  strictEqual(L!.sections.filter((s) => s.type === 'quiz').length, 1);
  strictEqual(L!.sections.filter((s) => s.type === 'tapTable').length, 2, 'one per family: their difference is the lesson');
  strictEqual(L!.sections.filter((s) => s.type === 'table').length, 0, 'a table at layer core is a density failure');
});

/* ═══ 2. THE TWO CONTRASTS, WITH OPPOSITE REQUIREMENTS ═══════════════════ */

test('THE SHEDDER PAIR IS ADJACENT AND AUDIBLY DIFFERENT', { skip: noLesson }, () => {
  const sec = section(SHED_SECTION);
  ok(sec, `${SHED_SECTION} is gone`);
  strictEqual(sec!.type, 'tapTable');
  const rows = sec!.rows as { cells: string[]; say?: string }[];
  strictEqual(rows.length, 6, 'tapTable is not in ownsLayout(), so a longer table runs past the fold');
  const iS = rows.findIndex((r) => r.say === SHED_PAIR.singular);
  const iP = rows.findIndex((r) => r.say === SHED_PAIR.plural);
  ok(iS >= 0 && iP >= 0, 'the shedder pair is not both in the table');
  strictEqual(Math.abs(iS - iP), 1, `rows ${iS + 1} and ${iP + 1}: they must be neighbours or the learner compares two playbacks`);
  const a = byId.get('fr.a2.verbes.463')!;
  const b = byId.get('fr.a2.verbes.464')!;
  ok(a.respell !== b.respell, 'the shedder pair carries one respelling; its plural is audible and that is the family');
  strictEqual(b.respell!.replace('part', 'par'), a.respell, 'the plural is no longer the singular plus one consonant');
});

test('THE -ER PAIR IS ADJACENT AND EXACTLY IDENTICAL', { skip: noLesson }, () => {
  const sec = section(ER_SECTION);
  ok(sec, `${ER_SECTION} is gone`);
  strictEqual(sec!.type, 'tapTable');
  const rows = sec!.rows as { cells: string[]; say?: string }[];
  strictEqual(rows.length, 6);
  const iS = rows.findIndex((r) => r.say === ER_PAIR.singular);
  const iP = rows.findIndex((r) => r.say === ER_PAIR.plural);
  ok(iS >= 0 && iP >= 0, 'the -er pair is not both in the table');
  strictEqual(Math.abs(iS - iP), 1, `rows ${iS + 1} and ${iP + 1}: they must be neighbours`);
  const a = byId.get('fr.a2.verbes.469')!;
  const b = byId.get('fr.a2.verbes.470')!;
  strictEqual(a.respell, b.respell, 'the -er pair must carry ONE respelling; the whole family is a pair the ear cannot separate');
  ok(a.fr !== b.fr, 'they are two different sentences that sound the same, not one sentence');
});

test('and the two families are not the same shape as each other', { skip: noLesson }, () => {
  // The one assertion that would catch the whole lesson collapsing into a single
  // rule taught twice.
  const shedDiffers = byId.get('fr.a2.verbes.463')!.respell !== byId.get('fr.a2.verbes.464')!.respell;
  const erDiffers = byId.get('fr.a2.verbes.469')!.respell !== byId.get('fr.a2.verbes.470')!.respell;
  ok(shedDiffers && !erDiffers, 'one pair must be audible and the other silent; if they match, the sort has nothing to sort');
});

test('THE SHEDDERS’ SINGULAR TRIPLE IS ONE STRING AFTER THE PRONOUN', { skip: noLesson }, () => {
  const tails = SHED_TRIPLE.map((id) => afterPronoun(byId.get(id)!.respell ?? ''));
  strictEqual(new Set(tails).size, 1, `je pars / tu pars / il part must be one sound: ${tails.join(' | ')}`);
  strictEqual(new Set(SHED_TRIPLE.map((id) => byId.get(id)!.fr)).size, 3);
});

test('AND THE -ER FAMILY’S QUARTET IS TOO', { skip: noLesson }, () => {
  const tails = ER_QUARTET.map((id) => afterPronoun(byId.get(id)!.respell ?? ''));
  strictEqual(new Set(tails).size, 1, `four spellings, one sound: ${tails.join(' | ')}`);
  strictEqual(new Set(ER_QUARTET.map((id) => byId.get(id)!.fr)).size, 4);
});

test('every number pair agrees with its own audible flag', { skip: noLesson || noSrc }, () => {
  ok(SRC_PAIRS.length >= 5);
  for (const p of SRC_PAIRS) {
    const a = byId.get(p.singular);
    const b = byId.get(p.plural);
    ok(a && b, `${p.singular} / ${p.plural} not in the seed`);
    strictEqual(a!.respell !== b!.respell, p.audible, `${p.singular} / ${p.plural} is marked audible: ${p.audible} and its respellings say otherwise`);
  }
});

/* ═══ 3. BOTH INHERITED REFRAMES, QUOTED ════════════════════════════════ */

test('a2.10.l1’s reframe is quoted VERBATIM, because the shedders are its rule', { skip: noLesson }, () => {
  ok(learnerText.includes(A210_REFRAME), 'the shedders run a2.10.l1’s rule and this lesson no longer says so in its words');
});

test('a2.01’s reframe is quoted VERBATIM, because the -er family is its rule', { skip: noLesson }, () => {
  ok(learnerText.includes(A201_REFRAME), 'the -er-ending family runs a2.01’s rule and this lesson no longer says so in its words');
});

test('AND BOTH ARE ON THE OPENING CARD, WHERE THE COMPARISON IS MADE', { skip: noLesson }, () => {
  // The two assertions above were weaker than they looked: both reframes are also
  // quoted in the reference sheet, so paraphrasing them on the opening card left
  // the seed-wide check green. Mutation-testing caught it. The opening card is
  // where the learner is told the two lessons disagree and where the line is
  // drawn, so that is where the quotes have to be.
  const card = section('s03-twofamilies');
  ok(card, 's03-twofamilies is gone, and with it the only place the two rules are put side by side');
  const text = strings(card).join('\n');
  ok(text.includes(A210_REFRAME), 'the opening card no longer quotes a2.10.l1 verbatim');
  ok(text.includes(A201_REFRAME), 'the opening card no longer quotes a2.01 verbatim');
  ok(text.includes(BOTH_RULES), 'the opening card no longer states the thesis');
});

test('the source imports both rather than restating them', { skip: noSrc }, () => {
  strictEqual(SRC_A210, A210_REFRAME);
  strictEqual(SRC_A201, A201_REFRAME);
});

test('both units are named by a section', { skip: noLesson }, () => {
  for (const ref of ['a2.10', 'a2.01']) {
    ok(L!.sections.some((s) => strings(s).some((x) => namesUnitLabel(x, ref))), `${ref} is named by no section`);
  }
});

test('THE THESIS IS CARRIED IN AT LEAST THREE SECTIONS', { skip: noLesson }, () => {
  ok(learnerText.includes(BOTH_RULES), `"${BOTH_RULES}" appears on no screen`);
  const carrying = L!.sections.filter((s) => strings(s).some((x) => x.includes(BOTH_RULES)));
  ok(carrying.length >= 3, `"${BOTH_RULES}" reaches ${carrying.length} sections; it is what makes this one lesson rather than two paradigms`);
});

test('the reframe is this line, verbatim, in exactly nine sections', { skip: noLesson }, () => {
  strictEqual(L!.reframe, REFRAME);
  strictEqual(L!.sections.filter((s) => strings(s).some((x) => x.includes(REFRAME))).length, REFRAME_SECTIONS);
  strictEqual(strings(L!).filter((s) => s.includes(REFRAME)).length, REFRAME_APPEARANCES);
});

test('the reframe is an instruction, not the thesis', { skip: noLesson }, () => {
  ok(!/families|rules/.test(REFRAME), 'a reframe that states the thesis is not something the learner can run');
  ok(REFRAME.trim().split(/\s+/).length <= 10, 'a reframe has to survive recall mid-sentence');
});

test('the source and the seed agree on both constants', { skip: noSrc }, () => {
  strictEqual(SRC_REFRAME, REFRAME);
  strictEqual(SRC_BOTH_RULES, BOTH_RULES);
});

/* ═══ 4. THE SORT, PROVED AGAINST a2.10.l1's OWN ROWS ═══════════════════ */

test('THE ENDING-PROVES-NOTHING MISSION USES l1’s ACTUAL SENTENCES', { skip: noLesson }, () => {
  const sec = section(NOPREDICT_SECTION);
  ok(sec, `${NOPREDICT_SECTION} is gone, and it is the only place the sort is shown to be unpredictable`);
  const text = strings(sec).join('\n');
  for (const [, id] of Object.entries(L1_ROWS)) {
    const row = byId.get(id);
    ok(row, `${id} is not in the seed`);
    ok(text.includes(row!.fr), `${NOPREDICT_SECTION} does not show a2.10.l1's own row ${id} ("${row!.fr}"). Reusing it is what makes the contradiction the learner's own.`);
  }
  for (const v of ['ralentir', 'sentir', 'guérir', 'courir']) ok(hasPhrase(text, v), `${NOPREDICT_SECTION} does not name ${v}`);
});

test('the one ending that DOES predict is named', { skip: noLesson }, () => {
  for (const e of ['-vrir', '-frir']) ok(hasPhrase(learnerText, e), `${e} is named nowhere, and it is the only reliable tell in the lesson`);
});

test('all twelve verbs are named individually and released by id', { skip: noLesson }, () => {
  strictEqual(THE_TWELVE.length, 12);
  for (const v of THE_TWELVE) ok(hasPhrase(learnerText, v), `${v} is named by no screen`);
  const released = new Set(L!.itemIds.map((id) => byId.get(id)?.fr));
  for (const v of THE_TWELVE) ok(released.has(v), `${v} is on a screen and not in itemIds`);
});

test('the three family lists are the sizes every screen states', { skip: noSrc }, () => {
  strictEqual(SRC_SHEDDERS.join(','), SHEDDERS.join(','));
  strictEqual(SRC_ER.join(','), ER_ENDING.join(','));
  strictEqual(SRC_TWELVE.join(','), THE_TWELVE.join(','));
  strictEqual(SRC_SHEDDERS.length, 6);
  strictEqual(SRC_ER.length, 5);
});

test('not one of the twelve was authored: every one is imported', { skip: noSrc }, () => {
  const authoredFr = new Set(SRC_AUTHORED.map((i) => i.fr));
  for (const v of THE_TWELVE) ok(!authoredFr.has(v), `${v} was authored; all twelve already existed`);
  strictEqual(SRC_IMPORTED.length, 14, '12 infinitives plus a2.10.l1’s two reused sentences');
});

/* ═══ 5. THE LIAISON CASE ═══════════════════════════════════════════════ */

test('THE VOWEL-INITIAL CASE HAS ITS OWN MISSION', { skip: noLesson }, () => {
  const sec = section(WAKING_SECTION);
  ok(sec, `${WAKING_SECTION} is gone. Two of the five -er-ending verbs begin with a vowel and they are the two a learner meets first.`);
  const text = strings(sec).join('\n');
  for (const v of VOWEL_INITIAL) ok(hasPhrase(text, v), `${WAKING_SECTION} does not name ${v}`);
});

test('and its pair really is audible, with the z in the respelling', { skip: noLesson }, () => {
  const a = byId.get('fr.a2.verbes.473');
  const b = byId.get('fr.a2.verbes.474');
  ok(a && b, 'the liaison pair is not in the seed');
  ok(a!.respell !== b!.respell, 'the liaison pair carries one respelling; the whole point is that this one IS audible');
  ok(b!.respell!.includes('z'), `the plural does not show the z: "${b!.respell}". That z is the entire teaching of the mission.`);
  ok(!a!.respell!.includes('z'), 'the singular has a z in it, and it should not: il ouvre links with the l, not an s');
});

test('the -er table deliberately uses a CONSONANT-initial verb', { skip: noLesson }, () => {
  // If the paradigm ran on ouvrir, the four-spellings-one-sound claim would be
  // false, because liaison makes ils ouvrent audible. That is why it runs on
  // couvrir, and this pins the decision.
  const sec = section(ER_SECTION)!;
  const cols = sec.cols as string[];
  strictEqual(cols[1], 'couvrir', 'the -er paradigm has moved to another verb; if it is vowel-initial its identity claim is false');
});

/* ═══ 6. THE ERROR FORM: BOTH DIRECTIONS ════════════════════════════════ */

test('NO OVER-GENERALISED FORM REACHES A PRODUCTION SURFACE', { skip: noLesson }, () => {
  const surfaces = productionSurfaces();
  const leaked = OVER_GENERALISED.filter((f) => surfaces.some((s) => hasPhrase(s, f)));
  strictEqual(leaked.join(', '), '', 'these are not words; a learner who weighs one four times starts to find it plausible');
});

test('BUT AT LEAST ONE IS CONFRONTED ON A REJECT SURFACE', { skip: noLesson }, () => {
  // a2.10.l1 banned these everywhere because it could not teach the form that
  // replaces them. This lesson can, so it has to show the error where an error
  // belongs rather than only describing it.
  const confronted = OVER_GENERALISED.filter((f) => rejectSurfaces().some((s) => hasPhrase(s, f)));
  ok(confronted.length > 0, 'the lesson exists to stop `ils partissent` and never shows it');
});

test('the source and this file guard the same forms', { skip: noSrc }, () => {
  strictEqual(SRC_OVER.join(','), OVER_GENERALISED.join(','));
});

test('venir, tenir and mourir are named and conjugated nowhere', { skip: noLesson }, () => {
  const surfaces = productionSurfaces();
  const leaked = NOT_MINE_FORMS.filter((f) => surfaces.some((s) => hasPhrase(s, f)));
  strictEqual(leaked.join(', '), '', 'a form of venir, tenir or mourir reached a production surface');
  for (const v of ['venir', 'tenir', 'mourir']) ok(hasPhrase(learnerText, v), `${v} is named nowhere; the lesson has to say where each one goes`);
});

test('and the hand-over card says WHERE each one goes', { skip: noLesson }, () => {
  const card = section(NOTMINE_SECTION);
  ok(card, `${NOTMINE_SECTION} is gone`);
  const text = strings(card).join('\n');
  for (const ref of ['a2.02', 'a2.11']) ok(namesUnitLabel(text, ref), `${NOTMINE_SECTION} does not name ${ref}; a boundary with no destination is a warning`);
  ok(hasPhrase(text, 'mourir'), 'mourir is not on the hand-over card, and it is the one with no unit at all');
});

test('no conjugated -RE verb: a2.11 keeps its lesson', { skip: noLesson }, () => {
  const surfaces = productionSurfaces();
  for (const v of ['vendent', 'attendent', 'répondent', 'vendons']) {
    ok(!surfaces.some((s) => hasPhrase(s, v)), `${v} reached a production surface and belongs to a2.11`);
  }
});

test('no past and no imperfect', { skip: noLesson }, () => {
  for (const f of ['ai parti', 'est parti', 'partais', 'partions', 'couvrais']) {
    ok(!learnerProse.some((s) => hasPhrase(s, f)), `${f} is on a learner surface and every row here is a simple present`);
  }
});

/* ═══ 7. Dictée, respellings, items ═════════════════════════════════════ */

test('the dictée spells from LETTERS and leans on the family the ear cannot settle', { skip: noLesson }, () => {
  const d = L!.sections.find((s) => s.type === 'dictation');
  ok(d && d.type === 'dictation', 'no dictation section');
  strictEqual(d!.itemIds.length, 8);
  for (const id of d!.itemIds) {
    const it = byId.get(id);
    ok(it, `dictée target ${id} is not in the seed`);
    strictEqual(dicteeMode(it!.fr), 'letters', `"${it!.fr}" is in word mode and cannot test a spelling`);
    ok((it!.drills ?? []).includes('dictation'), `${id} carries no dictation drill`);
  }
  const erTargets = d!.itemIds.filter((id) => ER_QUARTET.includes(id) || id === 'fr.a2.verbes.471');
  ok(erTargets.length >= 4, `only ${erTargets.length} targets are from the family whose forms are one sound; that family is the reason the dictée exists here`);
});

test('the dictée grades what the source says, through the real normalizeFr', { skip: noLesson || noSrc }, () => {
  for (const d of SRC_NEAR_MISS) {
    const row = byId.get(d.id);
    ok(row, `DICTEE_NEAR_MISS names ${d.id}, not in the seed`);
    strictEqual(normalizeFr(row!.fr) !== normalizeFr(d.wrong), d.scorable, `${d.id} is marked scorable: ${d.scorable} ("${row!.fr}" against "${d.wrong}")`);
  }
  ok(SRC_NEAR_MISS.filter((d) => d.scorable).length >= 7, 'too few targets are graded on the distinction they teach');
});

test('no respelling this lesson displays closes a nasal with a plain n or m', { skip: noLesson }, () => {
  const bad = [...new Set(L!.itemIds)]
    .map((id) => byId.get(id))
    .filter((it): it is Item => !!it && !!it.respell)
    .filter((it) => hasPlainNasalFor(it.fr, it.respell!))
    .map((it) => `${it.id} "${it.fr}" ${it.respell}`);
  strictEqual(bad.join('\n'), '');
});

test('the two repairs landed', { skip: noLesson }, () => {
  for (const [id, to] of Object.entries(REPAIRED)) {
    const row = byId.get(id);
    ok(row, `${id} is not in the seed`);
    strictEqual(row!.respell, to, `${id} "${row!.fr}" reverted`);
  }
});

test('every repair replaced something that really was a violation', { skip: noSrc }, () => {
  strictEqual(SRC_REPAIRS.length, Object.keys(REPAIRED).length);
  for (const r of SRC_REPAIRS) {
    ok(hasPlainNasalFor(r.fr, r.from), `${r.id}: "${r.from}" was not a violation (invariants §9)`);
    ok(!hasPlainNasalFor(r.fr, r.to), `${r.id}: "${r.to}" is still flagged`);
    strictEqual(REPAIRED[r.id], r.to);
  }
});

test('the word-internal nasals are checked by name, because the checker cannot see them', { skip: noLesson }, () => {
  ok(!hasPlainNasalFor('On souffre en silence.', 'ohⁿ soofr ahⁿ see-LAHNS'), 'hasPlainNasalFor now catches a word-internal nasal; invariants §3 needs updating');
  for (const [id, must] of Object.entries(MUST_CARRY_SUPERSCRIPT)) {
    const row = byId.get(id);
    ok(row, `${id} is not in the seed`);
    ok(row!.respell?.includes(must), `${id} "${row!.fr}" must respell with "${must}", found "${row!.respell}"`);
  }
});

test('every itemId resolves and is on a screen', { skip: noLesson }, () => {
  strictEqual(L!.itemIds.filter((id) => !byId.has(id)).join(', '), '', 'an unresolved itemId renders an empty card');
  const shown = new Set<string>();
  for (const s of L!.sections) {
    if (s.type === 'groupDrill') for (const g of s.groups) for (const it of g.items ?? []) if (it.itemId) shown.add(it.itemId);
    if (s.type === 'practice') for (const id of s.itemIds ?? []) shown.add(id);
    if (s.type === 'dictation') for (const id of s.itemIds ?? []) shown.add(id);
  }
  for (const d of L!.drills ?? []) for (const it of (d as { items?: string[] }).items ?? []) shown.add(it);
  strictEqual(L!.itemIds.filter((id) => !shown.has(id)).join(', '), '', 'item(s) declared, resolvable and drawn by nothing');
});

test('the tranches release every taught item exactly once', { skip: noLesson }, () => {
  const tranche = L!.deckTranche ?? [];
  strictEqual(tranche.length, (L!.acts ?? []).length);
  const seen = new Set<string>();
  for (const slice of tranche) for (const id of slice) {
    ok(!seen.has(id), `${id} released twice`);
    seen.add(id);
    ok(L!.itemIds.includes(id), `${id} released but not in itemIds`);
  }
  strictEqual(L!.itemIds.filter((id) => !seen.has(id)).join(', '), '');
});

test('every authored id is inside the block, and nothing joins a1.03', { skip: noSrc }, () => {
  strictEqual(SRC_RANGE.from, OWNED.from);
  strictEqual(SRC_RANGE.to, OWNED.to);
  for (const it of SRC_AUTHORED) {
    ok(it.id >= OWNED.from && it.id <= OWNED.to, `${it.id} is outside ${OWNED.from}..${OWNED.to}`);
    strictEqual(it.theme, THEME);
    strictEqual(it.level, 'a2');
    strictEqual(it.kind, 'sentence');
    const words = it.fr.trim().split(/\s+/).filter((w) => /[\p{L}\p{N}]/u.test(w)).length;
    ok(words <= 14, `${it.id} runs to ${words} words`);
  }
  strictEqual(SRC_AUTHORED.length, 26);
  strictEqual(endingPopulation([...SRC_AUTHORED, ...SRC_IMPORTED]).length, 0);
});

test('the seed lesson is the authored lesson', { skip: noLesson || noSrc }, () => {
  strictEqual(canonicalJson(L), canonicalJson(SRC), 'seed.json and the source have drifted; re-run the merge');
});

test('the speak and dictation lists agree between source and seed', { skip: noLesson || noSrc }, () => {
  const p = L!.sections.find((s) => s.type === 'practice') as { itemIds?: string[] } | undefined;
  strictEqual((p?.itemIds ?? []).join(','), SRC_SPEAK.join(','));
  const d = L!.sections.find((s) => s.type === 'dictation') as { itemIds?: string[] } | undefined;
  strictEqual((d?.itemIds ?? []).join(','), SRC_DICTATION.join(','));
  strictEqual(L!.itemIds.join(','), SRC_ITEM_IDS.join(','));
});

test('the speak mission only names rows the mic can score', { skip: noLesson }, () => {
  const p = L!.sections.find((s) => s.type === 'practice');
  ok(p && p.type === 'practice');
  for (const id of p!.itemIds ?? []) {
    ok((byId.get(id)?.drills ?? []).includes('voiceflash'), `${id} carries no voiceflash`);
  }
});

/* ═══ 8. The quiz ═══════════════════════════════════════════════════════ */

test('five rounds, thirty questions, every one with a why and a live ref', { skip: noLesson }, () => {
  const quiz = L!.sections.find((s) => s.type === 'quiz')!;
  strictEqual((quiz as { rounds?: unknown[] }).rounds?.length, 5);
  const qs = quizQuestions(quiz as never);
  strictEqual(qs.length, 30);
  const ids = new Set(L!.sections.map((s) => (s as { id?: string }).id));
  for (const q of qs) {
    ok(q.why, `no why: ${q.q}`);
    ok(q.ref && ids.has(q.ref), `ref "${q.ref}" names no section: ${q.q}`);
  }
});

test('at most half mcq, and both halves of the lesson are tested in the right format', { skip: noLesson }, () => {
  const qs = quizQuestions(L!.sections.find((s) => s.type === 'quiz') as never);
  const mcq = qs.filter((q) => q.format === 'mcq').length;
  ok(mcq * 2 <= qs.length, `${mcq}/${qs.length} are mcq`);
  const listen = qs.filter((q) => q.format === 'listenChoose').length;
  const typed = qs.filter((q) => ['typeIn', 'errorSpot'].includes(q.format ?? '')).length;
  ok(listen >= 4, `${listen} listenChoose; the shedders ARE settleable by ear and that half should be tested that way`);
  ok(typed >= 10, `${typed} typed; the -er family is settleable only on the page`);
});

test('NO EAR QUESTION ASKS BETWEEN TWO FORMS OF THE -ER FAMILY', { skip: noLesson }, () => {
  // Those four are one sound, so such a question has no answer. The shedders are
  // fair game, and that asymmetry is exactly what the lesson teaches.
  const HOM = ['couvre', 'couvres', 'couvrent', 'offre', 'offres', 'offrent', 'découvre', 'découvres', 'découvrent', 'souffre', 'souffres', 'souffrent'];
  const bad: string[] = [];
  for (const q of quizQuestions(L!.sections.find((s) => s.type === 'quiz') as never)) {
    if (q.format !== 'listenChoose') continue;
    const opts = q.opts ?? [];
    for (let i = 0; i < opts.length; i++) for (let j = i + 1; j < opts.length; j++) {
      for (const x of HOM) for (const y of HOM) if (x !== y && opts[i].replace(x, y) === opts[j]) bad.push(`"${q.q}": ${opts[i]} / ${opts[j]}`);
    }
  }
  strictEqual([...new Set(bad)].join('; '), '', 'no recording can separate these');
});

test('every free-text question accepts the answer it displays', { skip: noLesson }, () => {
  for (const q of quizQuestions(L!.sections.find((s) => s.type === 'quiz') as never)) {
    if (!['typeIn', 'errorSpot'].includes(q.format ?? '')) continue;
    ok(matchesAccept(q.answer ?? '', q.accept ?? []), `does not accept its own answer: ${q.answer}`);
  }
});

test('every gap question fixes the number and names the verb', { skip: noLesson }, () => {
  const gap = quizQuestions(L!.sections.find((s) => s.type === 'quiz') as never).filter((q) => q.q.includes('___'));
  ok(gap.length >= 6, `only ${gap.length} gap questions`);
  const SUBJECTS = ['je', 'tu', 'il', 'elle', 'on', 'nous', 'vous', 'ils', 'elles', 'le', 'la', 'les'];
  for (const q of gap) {
    ok(/\([a-zà-ÿ]+ir\)/i.test(q.q), `no -ir naming form: ${q.q}`);
    ok(SUBJECTS.includes(q.q.trim().split(/\s+/)[0].toLowerCase()), `no subject fixing the number: ${q.q}`);
  }
});

test('answer slots do not cluster, on either surface', { skip: noLesson }, () => {
  const closed = quizQuestions(L!.sections.find((s) => s.type === 'quiz') as never)
    .filter((q): q is never => typeof (q as { correct?: unknown }).correct === 'number') as unknown as { correct: number }[];
  const slots = new Map<number, number>();
  for (const q of closed) slots.set(q.correct, (slots.get(q.correct) ?? 0) + 1);
  for (const [s, c] of slots) ok((c / closed.length) * 100 <= 40, `quiz slot ${s} holds ${Math.round((c / closed.length) * 100)}%`);
  const inMission: { section: string; correct: number }[] = [];
  for (const s of L!.sections) {
    const sid = (s as { id?: string }).id ?? '?';
    if (s.type === 'groupDrill') for (const g of s.groups) if (g.check) inMission.push({ section: sid, correct: g.check.correct });
    if (s.type === 'listening') for (const q of s.questions) inMission.push({ section: sid, correct: q.correct });
    if (s.type === 'trapDrill') for (const d of s.drill) inMission.push({ section: sid, correct: d.correct });
  }
  const m = new Map<number, number>();
  for (const q of inMission) m.set(q.correct, (m.get(q.correct) ?? 0) + 1);
  for (const [s, c] of m) ok((c / inMission.length) * 100 <= 40, `in-mission slot ${s} holds ${Math.round((c / inMission.length) * 100)}%`);
  let prev: { section: string; correct: number } | null = null;
  for (const q of inMission) {
    ok(!(prev && prev.section === q.section && prev.correct === q.correct), `${q.section}: consecutive questions share slot ${q.correct}`);
    prev = q;
  }
});

test('every remediation drill can fire, and every drill item resolves', { skip: noLesson }, () => {
  const rounds = (L!.sections.find((s) => s.type === 'quiz') as { rounds?: { targets?: string[] }[] }).rounds ?? [];
  const triggers = L!.errorTriggers ?? [];
  strictEqual(triggers.length, 5);
  const fired = new Set<string>();
  for (const r of rounds) {
    const t = (r.targets ?? []).find((x) => triggers.some((e) => e.id === x && e.drill));
    if (t) fired.add(t);
  }
  strictEqual(triggers.filter((e) => e.drill && !fired.has(e.id)).map((e) => e.id).join(', '), '', 'drillForRound stops at the first resolving target');
  const drills = new Map((L!.drills ?? []).map((d) => [d.id, d] as const));
  for (const t of triggers) {
    if (t.drill) ok(drills.has(t.drill), `${t.id} names a drill that does not exist`);
    if (t.retest) ok(drills.has(t.retest), `${t.id} names a retest that does not exist`);
  }
  for (const d of L!.drills ?? []) for (const id of (d as { items?: string[] }).items ?? []) ok(byId.has(id), `${d.id} names item ${id}, not in the seed`);
});

/* ═══ 9. Sheets, reading, layout, house rules ═══════════════════════════ */

test('every sheetId names a sheet and every sheet is reachable', { skip: noLesson }, () => {
  const sheetIds = new Set((L!.sheets ?? []).map((s) => s.id));
  const named = L!.sections.map((s) => (s as { sheetId?: string }).sheetId).filter((x): x is string => !!x);
  for (const id of named) ok(sheetIds.has(id), `sheetId ${id} names no sheet`);
  for (const id of sheetIds) ok(named.includes(id), `sheet ${id} is linked from no section`);
  const DRAWS = new Set(['teach', 'letterGrid', 'table']);
  const dead = (L!.sheets ?? []).flatMap((sh) => (sh.sections ?? []).filter((s) => !DRAWS.has(s.type)).map((s) => `${sh.id}: ${s.type}`));
  strictEqual(dead.join(', '), '', 'ReferenceSheet.tsx draws teach, letterGrid and table and nothing else');
});

test('both nine-pronoun tables use the CANONICAL order', { skip: noLesson }, () => {
  // The in-flow tables are ordered by sound so their pairs can be adjacent. That
  // is only defensible because the ordinary order is one tap away.
  const EXPECTED = ["je / j'", 'tu', 'il', 'elle', 'on', 'nous', 'vous', 'ils', 'elles'];
  for (const id of ['sheet-fam-shed', 'sheet-fam-er']) {
    const t = (L!.sheets ?? []).flatMap((sh) => sh.sections ?? []).find((s) => (s as { id?: string }).id === id);
    ok(t && t.type === 'table', `${id} is missing`);
    strictEqual((t as { rows: string[][] }).rows.map((r) => r[0]).join(','), EXPECTED.join(','));
  }
});

test('the reading glossary can actually match, through the real segmenter', { skip: noLesson }, () => {
  const r = L!.sections.find((s) => s.type === 'reading');
  ok(r && r.type === 'reading', 'no reading section');
  ok(r!.questionsInModal && (r!.questions ?? []).length > 0, 'a reading without questionsInModal AND questions never reaches the glossary renderer');
  const g = r!.glossary ?? [];
  ok(g.length > 0);
  for (const e of g) ok(e.word.trim().split(/\s+/).length <= MAX_GLOSS_WORDS, `"${e.word}" is too long`);
  const keySet = new Set(g.flatMap((e) => glossKeys(e.word)));
  const matched = new Set<string>();
  for (const seg of segmentSentence(r!.text, keySet)) if (seg.key) matched.add(seg.key);
  strictEqual(g.filter((e) => !glossKeys(e.word).some((k) => matched.has(k))).map((e) => e.word).join(', '), '', 'glossary entries that underline nothing');
  ok(!r!.text.includes('\n'), 'PassagePage splits on sentence boundaries, so an authored newline is discarded');
});

test('commonErrors sets swipe, chips are capped, and no practice at skill write', { skip: noLesson }, () => {
  for (const s of L!.sections) {
    if (s.type === 'commonErrors') ok((s as { swipe?: boolean }).swipe, `${(s as { id?: string }).id} has no swipe; a1.01 mission 5 drew a blank screen this way`);
    if (s.type === 'practice') ok(s.skill !== 'write', 'practice at skill write renders nothing a learner can produce into');
    const terms = (s as { terms?: string[] }).terms ?? [];
    ok(terms.length <= 3, `${(s as { id?: string }).id} declares ${terms.length} chips; the renderer shows three`);
    for (const t of terms) ok(L!.terms?.[t], `${(s as { id?: string }).id} names undefined term "${t}"`);
  }
});

test('the break card stays inside the measured budget', { skip: noLesson }, () => {
  const scene = L!.sections.find((s) => s.type === 'scene');
  ok(scene && scene.type === 'scene');
  const br = (scene!.beats ?? []).find((b) => b.kind === 'break') as
    | { heading?: string; body?: string; coach?: string; wrong?: { en?: string }; right?: { en?: string } } | undefined;
  ok(br, 'the scene has no break card');
  ok((br!.heading ?? '').length <= 13, `heading is ${(br!.heading ?? '').length} characters`);
  const words = (br!.body ?? '').trim().split(/\s+/).length;
  ok(words >= 24 && words <= 30, `the break body is ${words} words`);
  ok((br!.coach ?? '').trim().split(/\s+/).length <= 9);
  ok((br!.wrong?.en ?? '').length <= 24, `the wrong gloss is ${(br!.wrong?.en ?? '').length} characters`);
  ok((br!.right?.en ?? '').length <= 24);
});

test('the scene is a non-word, and nobody is corrected', { skip: noLesson }, () => {
  const scene = L!.sections.find((s) => s.type === 'scene')!;
  const text = strings(scene).join('\n').toLowerCase();
  ok(text.includes('not a word') || text.includes('does not have'), 'the A2 register here is a correct rule producing a word that does not exist');
  ok(!text.includes('corrects you'), 'nobody is corrected');
  const choice = (scene as { beats?: unknown[] }).beats?.find((b) => (b as { kind?: string }).kind === 'choice') as { options?: { fr: string; outcome?: string }[] } | undefined;
  ok(choice, 'the scene has no choice beat');
  ok(choice!.options?.find((o) => o.outcome === 'breaks')?.fr.includes('partissent'), 'the failing option is no longer the over-generalised form');
  ok(choice!.options?.find((o) => o.outcome === 'works')?.fr.includes('partent'), 'the working option is no longer the real plural');
});

test('no autoplay, no imageRef, no em dash', { skip: noLesson }, () => {
  const json = JSON.stringify(L);
  ok(!json.includes('"autoplay"'), 'autoplay is read by no component');
  ok(!json.includes('"imageRef"'), 'nothing validates imageRef');
  strictEqual(strings(L!).filter((s) => s.includes('—')).join('\n'), '', 'em dashes are banned in authored content');
});

test('no grammar jargon on a learner surface', { skip: noLesson }, () => {
  const JARGON = ['conjugation', 'conjugate', 'conjugated', 'indicative', 'morpheme', 'inflection', 'paradigm', 'orthography', 'phoneme'];
  strictEqual(JARGON.filter((j) => hasPhrase(learnerText, j)).join(', '), '');
});

test('the lesson declares what it assumes, including both earlier units', { skip: noLesson }, () => {
  const assumed = (L!.grammarAssumed ?? []).join(' ');
  ok(assumed.includes('a2.01'), 'grammarAssumed does not name a2.01');
  ok(assumed.includes('a2.10'), 'grammarAssumed does not name a2.10');
  ok((L!.grammarIntroduced ?? []).length >= 4);
});

/* ═══ 10. Audio briefs ══════════════════════════════════════════════════ */

test('the shedder pair is briefed as ONE TAKE, recorded adjacently', { skip: noLesson }, () => {
  const rec = (L!.audio?.recorded ?? []).find((r) => r.id === 'rec-a2-10l2-shed');
  ok(rec, 'rec-a2-10l2-shed is gone');
  const d = rec!.desc.toLowerCase();
  ok(d.includes('one continuous take'), 'the one-take instruction is gone');
  ok(d.includes('adjacent'), 'the desc no longer says they must be recorded next to each other');
  ok(d.includes('ordinary'), 'the desc no longer forbids a taught, lengthened T');
});

test('and the -er quartet is briefed as INDISTINGUISHABLE', { skip: noLesson }, () => {
  const rec = (L!.audio?.recorded ?? []).find((r) => r.id === 'rec-a2-10l2-er');
  ok(rec, 'rec-a2-10l2-er is gone');
  const d = rec!.desc.toLowerCase();
  ok(d.includes('indistinguishable'), 'the desc no longer says the four must sound the same, which is the whole claim');
  ok(d.includes('do not help') || d.includes('do not differentiate'), 'the desc no longer forbids the studio clarifying them');
});

test('and the liaison pair is briefed as differing ONLY in the link', { skip: noLesson }, () => {
  const rec = (L!.audio?.recorded ?? []).find((r) => r.id === 'rec-a2-10l2-liaison');
  ok(rec, 'rec-a2-10l2-liaison is gone');
  const d = rec!.desc.toLowerCase();
  ok(d.includes('identical in both'), 'the desc no longer says the verb itself must be identical');
  ok(d.includes('pause'), 'the desc no longer warns that a pause destroys the liaison');
});

test('every recordingId a section names is declared', { skip: noLesson }, () => {
  const declared = new Set((L!.audio?.recorded ?? []).map((r) => r.id));
  const used = new Set<string>();
  const walk = (v: unknown) => {
    if (Array.isArray(v)) v.forEach(walk);
    else if (v && typeof v === 'object') for (const [k, x] of Object.entries(v)) {
      if (k === 'recordingId' && typeof x === 'string') used.add(x); else walk(x);
    }
  };
  walk(L!.sections);
  for (const id of used) ok(declared.has(id), `a section names recordingId "${id}", which is not declared`);
});
