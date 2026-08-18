// a2.19.l1 « Le futur proche »: the assertions that keep this lesson true.
//
// Modelled on a2-18-prepositions-temps.test.ts. Everything here runs the REAL
// app function rather than a copy: an earlier a1.01 test inlined its own
// glossary lookup, copied the version that was already broken, and passed while
// the feature was dead.
//
// THIS FILE READS seed.json AND NOTHING ELSE. It does not import the corpus, the
// terms or the lesson source, because a test that imports the same constant the
// content imports is comparing the content to itself. Every figure below is
// written out by hand, so a change in the source has to be reflected here on
// purpose.
//
// IT IS SCOPED TO ITS OWN ID BLOCK. Ledger §a2.16-1: a2.03's test filtered on a
// namespace prefix and meant "the rows a2.03 authored", and four of its tests
// went red the moment a2.16 landed in the same namespace. `fr.a2.verbes` holds
// 403 rows belonging to nine lessons, so a prefix filter would pick up three
// hundred and seventy-four strangers on the first run. `MY_BLOCK` below is the
// range. The duplicate-`fr` check is deliberately NOT scoped: flashhub-coverage
// counts two rows sharing an `fr` in one theme as one card served twice,
// whoever authored them.
//
// ── What this file is actually guarding ────────────────────────────────────
//
//   `pas` AFTER THE NAMING FORM. That is the error the lesson exists to prevent
//   and it is the one an English speaker makes first. It is permitted in the
//   six sections where the error is the content, and nowhere else, and it must
//   APPEAR in those six, because a trap nobody sees is not a trap. Guarded as a
//   SHAPE that requires a form of aller in front, so the English half of the
//   learner surface cannot match it.
//   THE AFFIRMATIVE AND THE NEGATIVE BEING SPLIT UP. The brief's one layout
//   claim: they belong on one screen, adjacent, with the pas visibly between
//   the form of aller and the naming form. Asserted as PAIRS, not as presence.
//   THE THIRD COLUMN OF THE GRID CHANGING. Six rows and one word: `partir`,
//   six times. The smallness is the teaching and a grid that varied it would
//   have taught the opposite of what the screen says.
//   a2.02's TERM AND a2.13's REFRAME BEING PARAPHRASED. Doctrine §B.7 tells
//   this lesson to quote them verbatim and credit the units by id. Asserted as
//   LITERALS: a2.16 §3 found that a guard looping over the constant the content
//   renders guards nothing.
//   THE ONE-WORD FUTURE ARRIVING. It is beyond A2 entirely, named once and
//   conjugated nowhere — except in the house goals heading, which is savoir in
//   that very tense and which 36 lessons ship. Bounded to one occurrence.
//   THE COMPOUND PAST ARRIVING ONE SEQ EARLY. a2.05 owns it.
//   THE DROPPED ne BECOMING A PRODUCTION SURFACE. a1.18 introduced it for
//   reception only and produces it nowhere; this lesson ships one row, one ear
//   question, and no dictée, speak target or typed answer.
//   A DICTÉE TARGET IN WORD MODE. Every row is checked through the real
//   `dicteeMode`, and the matrix that decided the frame is re-measured here.
//   A STACKED trapDrill. lesson-contract.test.ts enforces the shape seed-wide;
//   this file adds the two things that contract does not check, which are that
//   `size` comes off and that the audio step's take contains the cards' lines.
//   A ROLE-PLAY TURN WITH ONE ANSWER. scenario.logic.test.ts enforces two
//   across the whole seed and no document in this band mentions it.
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
import { namesUnitLabel } from './unit-label.ts';

const here = dirname(fileURLToPath(import.meta.url));
const seed = JSON.parse(readFileSync(resolve(here, 'seed.json'), 'utf8')) as {
  version: number; items: Item[]; lessons: Lesson[];
  units: { id: string; title?: string; sub?: string; canDo?: string; seq?: string | number; lessonIds?: string[]; prereqUnitIds?: string[] }[];
};

const L = seed.lessons.find((l) => l.id === 'a2.19.l1');
const noLesson = !L;
const byIdItem = new Map(seed.items.map((i) => [i.id, i] as const));

/** THE BLOCK, NOT THE PREFIX. Eight other lessons own `fr.a2.verbes.001..500`. */
const MY_BLOCK = { from: 501, to: 540 };
const isMine = (id: string) => {
  const m = /^fr\.a2\.verbes\.(\d{3})$/.exec(id);
  if (!m) return false;
  const n = Number(m[1]);
  return n >= MY_BLOCK.from && n <= MY_BLOCK.to;
};
const myRows = () => seed.items.filter((i) => isMine(i.id));

const THEME = 'verbes';
const FRAME_VERB = 'partir';
const PATTERN_UNIT = 'a2.02';
const MODAL_UNIT = 'a2.13';
const NEGATION_UNIT = 'a1.18';
const TIME_UNIT = 'a2.18';
const PLACE_UNIT = 'a2.04';
const PAST_UNIT = 'a2.05';

/** a2.02's term and a2.13's reframe, quoted VERBATIM. Doctrine §B.7 and a2.16
 *  §3: a back-reference to another unit is not a variable, so these are
 *  literals and a paraphrase fails. */
const WHAT_FOLLOWS = 'what comes next decides';
const A213_REFRAME = 'One verb changes for the person, and the next one never does.';
const A118_NE_DROP = 'In writing, both halves every time. In speech the ne very often goes, and you need to hear it.';

const REFRAME = 'Wrap the verb that changed, not the one carrying the meaning.';

/** The house goals heading, which is savoir in the one-word future. 36 lessons
 *  in the seed ship it and a2.14 §4 settled that it stays. It is the one place
 *  this lesson is allowed to print the tense it refuses to teach. */
const HOUSE_CHROME_FUTURE = 'Ce que vous saurez faire';

const NE_DROP_FR = 'Je vais pas sortir.';

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
const isId = (s: string): boolean => /^fr\.[a-z0-9]+\.[a-z0-9-]+\.\d+$/i.test(s);
function display(v: unknown, out: string[] = []): string[] {
  if (typeof v === 'string') { if (!isId(v)) out.push(v); }
  else if (Array.isArray(v)) for (const x of v) display(x, out);
  else if (v && typeof v === 'object') {
    for (const [k, x] of Object.entries(v)) if (!MACHINE_KEYS.has(k)) display(x, out);
  }
  return out;
}
/** Accent-aware, and the LEFT boundary drops the apostrophe: a2.17 §3. */
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

const sec = (id: string) => L?.sections.find((s) => (s as { id?: string }).id === id) as Record<string, unknown> | undefined;
const learnerText = () => [
  ...strings(L!.sections), ...strings(L!.sheets ?? []), ...strings(L!.terms ?? {}),
  L!.intro ?? '', ...strings(L!.overview ?? {}),
  ...strings(L!.acts ?? []), ...strings(L!.drills ?? []),
].join('\n');

/* ══════════════════════════════════════════════════════════════════════════
 *  THE SHAPES, WRITTEN OUT RATHER THAN IMPORTED
 *
 *  The corpus file holds the same regexes and this file does not import them:
 *  a test comparing the content to its own constant passes on any change to
 *  that constant. These are hand copies and the must-fire / must-not-fire lists
 *  below prove they still mean what they say.
 * ═══════════════════════════════════════════════════════════════════════ */

const PAS_AFTER_INFINITIVE =
  /(?<![\p{L}\p{N}-])(?:vais|vas|va|allons|allez|vont)\s+(?:ne\s+|n['’])?[\p{L}]{3,}(?:er|ir|re|oir)\s+pas(?![\p{L}\p{N}'’-])/iu;

const FUTUR_SIMPLE_SHAPE =
  /(?<![\p{L}\p{N}'’-])(?:je|j['’]|tu|il|elle|on|nous|vous|ils|elles)\s+(?!camera|cameras|opéra|extra|ultra)(?:[\p{L}]{2,}(?:rai|ras|ra|rons|rez|ront)|ira|iras|irai|irons|irez|iront)(?![\p{L}\p{N}'’-])/iu;

const PARTICIPLE = '(?:fini|finis|finie|finies|choisi|choisis|dormi|parti|partis|partie|parties|sorti|sortis|servi|senti|v[ée]cu|plu|attendu|vendu|entendu|r[ée]pondu|perdu|rendu|descendu|re[çc]u|aper[çc]u|voulu|pu|d[ûu]|su|connu|lu|relu|vu|revu|venu|revenu|devenu|tenu|couru|bu|cru|eu|[ée]t[ée]|mis|remis|promis|assis|pris|appris|compris|surpris|dit|redit|[ée]crit|d[ée]crit|conduit|produit|construit|fait|refait|ouvert|offert|couvert|d[ée]couvert|souffert|mort|morts|morte)';
const ER_PARTICIPLE = '[\\p{L}]{2,}(?:é|és|ée|ées)';
const ADV = '(?:pas\\s+|jamais\\s+|plus\\s+|bien\\s+|déjà\\s+|toujours\\s+|beaucoup\\s+)?';
const COMPOUND_SHAPE = new RegExp(
  `(?<![\\p{L}\\p{N}-])(?:j['’]ai|tu\\s+as|il\\s+a|elle\\s+a|on\\s+a|nous\\s+avons|vous\\s+avez|ils\\s+ont|elles\\s+ont`
  + `|je\\s+suis|tu\\s+es|il\\s+est|elle\\s+est|on\\s+est|nous\\s+sommes|vous\\s+êtes|ils\\s+sont|elles\\s+sont)`
  + `\\s+${ADV}(?:${ER_PARTICIPLE}|${PARTICIPLE})(?![\\p{L}\\p{N}'’-])`,
  'iu',
);

const fires = (re: RegExp, s: string): boolean => new RegExp(re.source, re.flags.replace('g', '')).test(s);

/* ══════════════════════════════════════════════════════════════════════════
 *  THE LESSON IS THERE AND IT IS THE SHAPE THE SOURCE DESCRIBES
 * ═══════════════════════════════════════════════════════════════════════ */

test('a2.19.l1 is in the seed', () => {
  ok(L, 'a2.19.l1 is missing from seed.json');
});

test('the spine, in order', { skip: noLesson }, () => {
  deepStrictEqual(L!.sections.map((s) => (s as { id: string }).id), [
    's01-scene', 's02-goals', 's03-shape',
    's04-pair', 's05-english', 's06-six', 's07-where', 's08-produce',
    's09-any', 's10-modals', 's11-errors', 's12-when',
    's13-place', 's14-twice', 's15-hear', 's16-unseen',
    's17-reading', 's18-scenario', 's19-dictation', 's20-speak', 's21-review',
    's22-progress', 's23-quiz', 's24-roundup',
  ]);
  deepStrictEqual(L!.sections.map((s) => s.type), [
    'scene', 'goals', 'tapTable',
    'examples', 'cardDeck', 'examples', 'trapDrill', 'groupDrill',
    'examples', 'cardDeck', 'commonErrors', 'examples',
    'examples', 'trapDrill', 'cardDeck', 'groupDrill',
    'reading', 'scenario', 'dictation', 'practice', 'reviewDeck',
    'progressCheck', 'quiz', 'roundup',
  ]);
});

test('six acts, and the Owns act is the heaviest', { skip: noLesson }, () => {
  const acts = L!.acts ?? [];
  strictEqual(acts.length, 6);
  deepStrictEqual(acts.map((a) => a.sections.length), [3, 5, 4, 4, 5, 3]);
  // ACT 2 IS THE NEGATIVE AND THE PARADIGM IS ONE SECTION. Doctrine §B.5.
  // Written as literals rather than derived from the acts, because a comparison
  // between two reads of the same array is always true.
  strictEqual(acts[1]!.id, 'act2');
  deepStrictEqual(acts[1]!.sections, ['s04-pair', 's05-english', 's06-six', 's07-where', 's08-produce']);
  strictEqual(L!.sections.filter((s) => s.type === 'tapTable').length, 1);
  const claimed = acts.flatMap((a) => a.sections);
  strictEqual(new Set(claimed).size, claimed.length, 'two acts claim one section');
  strictEqual(claimed.length, L!.sections.length);
});

test('the identity block, byte for byte from the unit', { skip: noLesson }, () => {
  const u = seed.units.find((x) => x.id === 'a2.19');
  ok(u, 'unit a2.19 is missing');
  strictEqual(String(u!.seq), '15');
  strictEqual(u!.title, 'The Near Future');
  strictEqual(u!.sub, 'Le futur proche');
  strictEqual(u!.canDo, 'Can say what they are going to do, and make it negative');
  deepStrictEqual(u!.prereqUnitIds, [PATTERN_UNIT]);
  ok((u!.lessonIds ?? []).includes('a2.19.l1'));
  strictEqual(L!.tag, 'A2 · LEÇON 15');
  strictEqual(L!.title, u!.sub);
  strictEqual((L!.overview as { titleEn?: string }).titleEn, u!.title);
  // v2, not v1. A Pixel 6 found the scene's break card running past the bottom
  // and the reference sheet's own title cut in its header bar, and the counter
  // moved rather than the body being corrected under v1 (ledger §10).
  strictEqual(L!.version, 5, 'the unit-label pass, which replaced every raw unit id on a learner surface with its lesson label');
});

/* ══════════════════════════════════════════════════════════════════════════
 *  THE CONSTRUCTION: ONE SCREEN, AND THE THIRD COLUMN NEVER CHANGES
 * ═══════════════════════════════════════════════════════════════════════ */

/** Written out by hand. The lesson reads these off a constant and this file
 *  does not, so an edit to the constant has to be repeated here on purpose. */
const GRID_ROWS: readonly [string, string, string][] = [
  ['je', 'vais', 'partir'],
  ['tu', 'vas', 'partir'],
  ['il', 'va', 'partir'],
  ['nous', 'allons', 'partir'],
  ['vous', 'allez', 'partir'],
  ['ils', 'vont', 'partir'],
];

test('the construction is in ONE section, six persons, and the third column is one word', { skip: noLesson }, () => {
  const g = sec('s03-shape') as { type?: string; cols?: string[]; rows?: { cells: string[]; detail?: { title?: string } }[] } | undefined;
  strictEqual(g?.type, 'tapTable', 'the construction belongs in one grid');
  strictEqual((g!.cols ?? []).length, 3, 'a2.17 measured a three-column cell at eleven characters');
  strictEqual((g!.rows ?? []).length, 6);
  GRID_ROWS.forEach(([person, aller, then], i) => {
    const row = g!.rows![i]!;
    deepStrictEqual(row.cells, [person, aller, then], `grid row ${i}`);
    for (const cell of row.cells) ok(cell.length <= 11, `cell ${JSON.stringify(cell)} is ${cell.length} characters`);
  });
  // THE ARGUMENT OF THE SCREEN, ASSERTED: one word, six times.
  strictEqual(new Set(g!.rows!.map((r) => r.cells[2])).size, 1);
  strictEqual(g!.rows![0]!.cells[2], FRAME_VERB);
  // AND NO OTHER SECTION IS A SECOND GRID.
  strictEqual(L!.sections.filter((s) => s.type === 'tapTable' || s.type === 'table').length, 1);
});

/* ══════════════════════════════════════════════════════════════════════════
 *  THE OWNS: THE AFFIRMATIVE AND THE NEGATIVE, ADJACENT, IN ONE SECTION
 *
 *  THE LAYOUT CLAIM THE BRIEF MAKES. Anything that showed the negative in a
 *  separate section would have hidden the only thing the learner needs to see.
 * ═══════════════════════════════════════════════════════════════════════ */

test('the affirmative and the negative are adjacent, in one section, as pairs', { skip: noLesson }, () => {
  const s = sec('s04-pair') as { type?: string; examples?: { fr: string; note?: string }[] } | undefined;
  strictEqual(s?.type, 'examples');
  const ex = s!.examples ?? [];
  strictEqual(ex.length % 2, 0, 'the examples are read in pairs');
  ok(ex.length >= 6, `${ex.length} examples and the pair belongs in more than one person`);
  for (let i = 0; i < ex.length; i += 2) {
    const pos = ex[i]!.fr;
    const neg = ex[i + 1]!.fr;
    ok(!/\bpas\b/i.test(pos), `example ${i} is meant to be the affirmative and holds a pas: ${pos}`);
    ok(/\bpas\b/i.test(neg), `example ${i + 1} is meant to be the negative and holds no pas: ${neg}`);
    // THE NEGATIVE IS THE AFFIRMATIVE WITH THE TWO HALVES IN IT AND NOTHING ELSE.
    const stripped = neg.replace(/\bne\s+/i, '').replace(/\bn['’]/i, '').replace(/\bpas\s+/i, '');
    strictEqual(stripped.replace(/\s+/g, ''), pos.replace(/\s+/g, ''), `examples ${i} and ${i + 1} are not the same sentence`);
    // AND THE `pas` SITS BETWEEN THE FORM OF ALLER AND THE NAMING FORM.
    const m = /(vais|vas|va|allons|allez|vont)\s+pas\s+([\p{L}]+)/iu.exec(neg);
    ok(m, `example ${i + 1} does not put pas between a form of aller and the next word: ${neg}`);
    strictEqual(m![2]!.toLowerCase(), FRAME_VERB);
  }
});

test('every person has both halves in the corpus, and only the front moved', { skip: noLesson }, () => {
  const pairs: readonly [number, number][] = [[501, 507], [502, 508], [503, 509], [504, 510], [505, 511], [506, 512]];
  for (const [pos, neg] of pairs) {
    const p = byIdItem.get(`fr.a2.verbes.${pos}`);
    const n = byIdItem.get(`fr.a2.verbes.${neg}`);
    ok(p && n, `fr.a2.verbes.${pos} / .${neg}`);
    ok(p!.fr.endsWith(`${FRAME_VERB}.`), `${p!.id} does not end on the frame verb`);
    ok(n!.fr.endsWith(`${FRAME_VERB}.`), `${n!.id} does not end on the frame verb`);
    const stripped = n!.fr.replace(/\bne\s+/i, '').replace(/\bn['’]/i, '').replace(/\bpas\s+/i, '');
    strictEqual(stripped, p!.fr, `${n!.id} is not ${p!.id} with the two halves in it`);
  }
});

/* ══════════════════════════════════════════════════════════════════════════
 *  NO CORRECT SENTENCE PUTS `pas` AFTER THE NAMING FORM
 * ═══════════════════════════════════════════════════════════════════════ */

test('the shape fires on the error and not on this lesson\'s own copy', () => {
  for (const line of [
    'Je ne vais manger pas.', 'Tu vas travailler pas demain.', 'Il ne va partir pas.',
    'Nous allons manger pas.', 'Elle ne va sortir pas ce soir.',
  ]) ok(fires(PAS_AFTER_INFINITIVE, line), `does not fire on ${line}`);
  for (const line of [
    'Je ne vais pas manger.', 'Je ne vais pas partir.', 'Tu ne vas pas travailler demain.',
    "Nous n'allons pas partir.", 'Il ne va pas venir ce soir.', 'Je vais pas sortir.',
    'Je vais partir dans dix minutes.', REFRAME,
    'The pas lands after aller and before the verb carrying the meaning.',
    'You are going to leave, and you are not going to stay.',
  ]) ok(!fires(PAS_AFTER_INFINITIVE, line), `fires on ${line}`);
});

/** The six sections where the error IS the content, written out by hand. */
const WRONG_FORM_SECTIONS = ['s07-where', 's11-errors', 's05-english', 's08-produce', 's16-unseen', 's23-quiz'];

test('pas after the naming form appears only where the error is the content', { skip: noLesson }, () => {
  const legal = new Set(WRONG_FORM_SECTIONS);
  for (const s of L!.sections) {
    const sid = (s as { id?: string }).id ?? '';
    if (legal.has(sid)) continue;
    for (const line of strings(s)) ok(!fires(PAS_AFTER_INFINITIVE, line), `${sid}: ${line}`);
  }
  for (const v of [L!.sheets ?? [], L!.terms ?? {}, [L!.intro ?? ''], L!.overview ?? {}]) {
    for (const line of strings(v)) ok(!fires(PAS_AFTER_INFINITIVE, line), `off-section: ${line}`);
  }
  // AND IT APPEARS IN THOSE SIX, because a trap nobody sees is not a trap.
  const homes = L!.sections.filter((s) => legal.has((s as { id?: string }).id ?? ''));
  const hits = homes.filter((s) => strings(s).some((x) => fires(PAS_AFTER_INFINITIVE, x)));
  ok(hits.length >= 3, `the wrong order appears in ${hits.length} of the six sections that are allowed it`);
});

test('no corpus row in this block puts pas after the naming form', { skip: noLesson }, () => {
  for (const r of myRows()) ok(!fires(PAS_AFTER_INFINITIVE, r.fr), `${r.id}: ${r.fr}`);
});

/* ══════════════════════════════════════════════════════════════════════════
 *  THE BACK-REFERENCES, AS LITERALS
 * ═══════════════════════════════════════════════════════════════════════ */

test('a2.02\'s term is quoted verbatim and the unit is credited by id', { skip: noLesson }, () => {
  const text = learnerText();
  ok(hasPhrase(text, WHAT_FOLLOWS), `the ${PATTERN_UNIT} term is not quoted`);
  ok(namesUnitLabel(text, PATTERN_UNIT), `${PATTERN_UNIT} is never named by its lesson label`);
  ok(namesUnitLabel(text, TIME_UNIT), `${TIME_UNIT} met the same shape at seq 14 and is never named by its lesson label`);
  const trap = sec('s14-twice') as { rule?: { title?: string } } | undefined;
  strictEqual(trap?.rule?.title, WHAT_FOLLOWS, 'the trap\'s rule card is not titled with the term');
});

test('a2.13\'s reframe is quoted verbatim and a1.18\'s line about the ne is too', { skip: noLesson }, () => {
  const text = learnerText();
  ok(hasPhrase(text, A213_REFRAME), 'a2.13\'s reframe is not quoted');
  ok(namesUnitLabel(text, MODAL_UNIT), 'a2.13 is never named by its lesson label');
  ok(hasPhrase(text, A118_NE_DROP), 'a1.18\'s line about the dropped ne is not quoted');
  ok(namesUnitLabel(text, NEGATION_UNIT), 'a1.18 is never named by its lesson label');
  // AND THE BACK-REFERENCE SECTION IS THE ONE THAT NAMES a2.13.
  ok(strings(sec('s10-modals')).some((s) => namesUnitLabel(s, MODAL_UNIT)), 's10-modals does not name a2.13');
});

test('this lesson\'s reframe extends a1.18\'s rather than contradicting it', { skip: noLesson }, () => {
  strictEqual(L!.reframe, REFRAME);
  ok(REFRAME.toLowerCase().startsWith('wrap the verb'), 'the reframe does not open on a1.18\'s own first three words');
  const carried = L!.sections.filter((s) => strings(s).some((x) => x.includes(REFRAME))).length;
  ok(carried >= 6, `the reframe is carried by ${carried} sections and the doctrine's good lessons use six to eight`);
  // AND IT IS PINNED WHERE THE LEARNER MEETS IT FIRST. FOUND BY MUTATION:
  // rewording it in ONE section left eight carrying it, so a threshold guard
  // let it through. A threshold is not a location.
  const scene = sec('s01-scene') as { closing?: { text?: string } } | undefined;
  strictEqual(scene?.closing?.text, REFRAME, 'the scene does not close on the reframe');
  const trap = sec('s07-where') as { rule?: { body?: string } } | undefined;
  ok(trap?.rule?.body?.includes(REFRAME), 'the Owns trap\'s rule card does not carry the reframe verbatim');
});

test('a2.04 and a2.05 are named, and the dans loop a2.18 asked for is closed', { skip: noLesson }, () => {
  const text = learnerText();
  ok(namesUnitLabel(text, PLACE_UNIT), 'a2.04 owns the place sense and is never named');
  ok(namesUnitLabel(text, PAST_UNIT), 'a2.05 is told to extend this rule and is never named');
  // THE HAND-OFF BY ITS OWN WORDING, NOT BY THE UNIT ID BEING SOMEWHERE.
  // FOUND BY MUTATION: gutting the sentence left a2.05 named on the progress
  // card, so every presence check stayed green while the hand-off was gone.
  ok(/puts a past tense in front of a second verb/i.test(text),
    'nothing says that a2.05 does this again with a past tense, and it is told to extend this rule');
  ok(/behaves exactly as it does here/i.test(text),
    'the hand-off does not say the negative behaves the same way there');
  // a2.18's OWN SENTENCE AND THIS LESSON'S ARE ON ONE SCREEN.
  const when = strings(sec('s12-when')).join('\n');
  ok(hasPhrase(when, 'Je pars dans dix minutes.'), 'a2.18\'s present-with-future sentence is not on the screen that closes its loop');
  ok(hasPhrase(when, 'Je vais partir dans dix minutes.'), 'this lesson\'s verb-in-front version is not beside it');
  ok(namesUnitLabel(when, TIME_UNIT), 'the screen that closes a2.18\'s loop does not name a2.18');
});

/* ══════════════════════════════════════════════════════════════════════════
 *  THE TENSES THIS LESSON MAY NOT CONJUGATE
 * ═══════════════════════════════════════════════════════════════════════ */

test('the Owns is stated as a literal, and its inversion appears nowhere', { skip: noLesson }, () => {
  const text = learnerText();
  // FOUND BY MUTATION. The claim lives in one constant rendered on the goals
  // card, the trap's rule card and the sheet, so inverting it changed all three
  // at once and every guard that looked for the constant kept finding it.
  // a2.16 §3: a guard looping over the constant the content renders guards
  // nothing, so the load-bearing half is asserted as a literal.
  ok(/two halves go round aller/i.test(text),
    'nothing says the two halves go round ALLER, which is the whole of what this lesson owns');
  ok(!/go round the verb carrying the meaning/i.test(text),
    'a learner surface says the halves go round the verb carrying the meaning, which is the error the lesson exists to prevent');
});

test('the one-word future shape fires on a future and not on this lesson', () => {
  for (const line of ['je partirai', 'tu partiras', 'il partira demain', 'nous partirons',
    'vous partirez', 'ils partiront', 'Elle sera là.', 'Il ira à Paris.']) {
    ok(fires(FUTUR_SIMPLE_SHAPE, line), `does not fire on ${line}`);
  }
  for (const line of ['Je vais partir.', 'Il va rester ici.', 'Nous allons partir.',
    'Vous allez payer.', 'on camera', 'il y a', 'Elle va sortir ce soir.',
    'On va manger dans une heure.', REFRAME]) {
    ok(!fires(FUTUR_SIMPLE_SHAPE, line), `fires on ${line}`);
  }
});

test('the one-word future is named, and conjugated only where meeting one is the content', { skip: noLesson }, () => {
  const HOMES = new Set(['s15-hear', 's23-quiz', 's11-errors']);
  for (const s of L!.sections) {
    const sid = (s as { id?: string }).id ?? '';
    for (const line of strings(s)) {
      if (!fires(FUTUR_SIMPLE_SHAPE, line)) continue;
      if (line === HOUSE_CHROME_FUTURE) continue;
      ok(HOMES.has(sid), `${sid} conjugates the one-word future: ${line}`);
    }
  }
  for (const v of [L!.sheets ?? [], L!.terms ?? {}, [L!.intro ?? '']]) {
    for (const line of strings(v)) {
      ok(!fires(FUTUR_SIMPLE_SHAPE, line) || line === HOUSE_CHROME_FUTURE, `off-section: ${line}`);
    }
  }
  // THE HOUSE CHROME IS THE ONE EXEMPTION AND IT IS BOUNDED TO ONE PLACE.
  const all = strings(L!.sections).concat(strings(L!.sheets ?? []), strings(L!.terms ?? {}), [L!.intro ?? '']);
  strictEqual(all.filter((l) => l === HOUSE_CHROME_FUTURE).length, 1, 'the exemption has grown');
  const goals = L!.sections.find((s) => s.type === 'goals') as { frSub?: string } | undefined;
  strictEqual(goals?.frSub, HOUSE_CHROME_FUTURE);
  // AND IT IS NAMED, which is why it is allowed to be mentioned at all.
  ok(/second future/i.test(learnerText()), 'the second future is never named');
});

test('the compound past is conjugated nowhere', { skip: noLesson }, () => {
  for (const line of ["J'ai travaillé hier.", 'Elle a fini le rapport.', 'Nous avons mangé tôt.']) {
    ok(fires(COMPOUND_SHAPE, line), `the shape does not fire on ${line}`);
  }
  for (const line of ['You did not stall on a word you had not learned.', 'Je vais partir.',
    'Elle va finir le rapport ce soir.', 'Il est midi.']) {
    ok(!fires(COMPOUND_SHAPE, line), `the shape fires on ${line}`);
  }
  for (const s of L!.sections) {
    const sid = (s as { id?: string }).id ?? '';
    for (const line of strings(s)) ok(!fires(COMPOUND_SHAPE, line), `${sid}: ${line}`);
  }
  for (const r of myRows()) ok(!fires(COMPOUND_SHAPE, r.fr), `${r.id}: ${r.fr}`);
});

/* ══════════════════════════════════════════════════════════════════════════
 *  THE DROPPED ne IS RECEPTION ONLY
 * ═══════════════════════════════════════════════════════════════════════ */

test('the dropped ne is one row, marked as speech, and on no production surface', { skip: noLesson }, () => {
  const rows = myRows().filter((r) => r.fr === NE_DROP_FR);
  strictEqual(rows.length, 1, 'exactly one row holds the dropped-ne sentence');
  const r = rows[0]!;
  ok((r.tags ?? []).includes('receptive'), `${r.id} is not tagged receptive`);
  ok(!(r.drills ?? []).includes('dictation'), `${r.id} carries a dictation drill`);
  ok(!(r.drills ?? []).includes('voiceflash'), `${r.id} carries a voiceflash drill`);
  ok(/spoken French/i.test(r.en), `${r.id}'s gloss does not mark it as spoken register`);
  const dict = sec('s19-dictation') as { itemIds?: string[] } | undefined;
  ok(!(dict?.itemIds ?? []).includes(r.id), 'the dropped-ne row is a dictée target');
  const speak = sec('s20-speak') as { itemIds?: string[] } | undefined;
  ok(!(speak?.itemIds ?? []).includes(r.id), 'the dropped-ne row is a speak target');
  const qs = quizQuestions(L!.sections.find((s) => s.type === 'quiz')!);
  for (const q of qs) {
    ok(String(q.answer ?? '') !== NE_DROP_FR, 'a question asks the learner to produce it');
    for (const a of (q.accept ?? [])) ok(a !== NE_DROP_FR, 'a question accepts it as a typed answer');
  }
});

test('the one ear question is the dropped ne, and its why marks it as speech', { skip: noLesson }, () => {
  const qs = quizQuestions(L!.sections.find((s) => s.type === 'quiz')!);
  const ear = qs.filter((q) => q.format === 'listenChoose');
  strictEqual(ear.length, 1, 'this lesson asks exactly one ear question');
  ok((ear[0]!.opts ?? []).includes(NE_DROP_FR), 'the ear question does not offer the dropped-ne sentence');
  ok(/spoken|speech/i.test(String(ear[0]!.why ?? '')), 'the ear question does not mark its answer as spoken register');
  strictEqual(ear[0]!.ref, 's15-hear');
});

/* ══════════════════════════════════════════════════════════════════════════
 *  THE IMPORTS, ASSERTED BY ID
 * ═══════════════════════════════════════════════════════════════════════ */

/** THE BRIEF ASKS FOR AT LEAST ONE INFINITIVE USED IN PRODUCTION TO BE AN
 *  IMPORTED ID FROM ANOTHER THEME, ASSERTED BY ID. These are the four published
 *  negatives, none of them in `verbes`, and one of them is a role-play answer. */
const IMPORTED_NEGATIVES = [
  'fr.a2.negation-et-restriction.107',
  'fr.a2.negation-et-restriction.152',
  'fr.a2.negation-et-restriction.158',
  'fr.a2.negation-et-restriction.164',
];

test('the published negatives are carried, respelled and outside this theme', { skip: noLesson }, () => {
  for (const id of IMPORTED_NEGATIVES) {
    const r = byIdItem.get(id);
    ok(r, `${id} is not in the seed and the cards that name it would draw blank`);
    strictEqual(r!.theme, 'negation-et-restriction', `${id} is meant to come from another theme`);
    ok(r!.respell && r!.respell.length > 0, `${id} has no respelling and a row is imported for its respelling`);
    ok((r!.drills ?? []).includes('flashcard'), `${id} cannot be released into a deck`);
    ok(!fires(PAS_AFTER_INFINITIVE, r!.fr), `${id} puts pas after the naming form`);
    ok(L!.itemIds.includes(id), `${id} is not in itemIds`);
  }
  // AND ONE OF THEM IS A ROLE-PLAY ANSWER, which is a production surface.
  const scenario = strings(sec('s18-scenario')).join('\n');
  const used = IMPORTED_NEGATIVES.filter((id) => hasPhrase(scenario, byIdItem.get(id)!.fr));
  ok(used.length >= 1, 'no imported sentence from another theme is used on a production surface');
  strictEqual(used[0], 'fr.a2.negation-et-restriction.164');
});

test('the frame naming form and the three cards the trap rests on are carried', { skip: noLesson }, () => {
  // fr.sons.consonnes.098 was ABSENT FROM THE SEED before this build carried it,
  // and the paradigm prints its word six times.
  for (const id of ['fr.sons.consonnes.098', 'fr.a2.prepositions-essentielles.130', 'fr.a2.verbes.261', 'fr.a2.verbes.347']) {
    const r = byIdItem.get(id);
    ok(r, `${id} is not in the seed`);
    ok(L!.itemIds.includes(id), `${id} is not in itemIds`);
  }
  strictEqual(byIdItem.get('fr.sons.consonnes.098')!.fr, FRAME_VERB);
  strictEqual(byIdItem.get('fr.a2.prepositions-essentielles.130')!.fr, 'Je vais à Paris.');
  strictEqual(byIdItem.get('fr.a2.verbes.347')!.fr, 'Je peux payer.');
});

test('not one row this build touches carries a gender, and a1.03 has not moved', { skip: noLesson }, () => {
  for (const r of myRows()) strictEqual((r as { gender?: string }).gender ?? null, null, `${r.id} carries a gender`);
  for (const id of [...IMPORTED_NEGATIVES, 'fr.sons.consonnes.098', 'fr.sons.muettes.037', 'fr.sons.verbes-essentiels.003']) {
    strictEqual((byIdItem.get(id) as { gender?: string } | undefined)?.gender ?? null, null, `${id} carries a gender`);
  }
  // a2.04's ledger §0: the population is measured off THE SEED and a CARRY is
  // what puts a row there.
  // MEASURED AS A DIFFERENTIAL RATHER THAN AS A CONSTANT, 2026-08-15. This read
  // 1890 until a2.07 « Au restaurant » published one gendered single-word noun
  // (fr.a1.au-restaurant.010 « le pourboire »), which joined the population on
  // the next publish and turned this assertion red in a lesson that had changed
  // nothing — along with five others exactly like it. Invariants §6: a hardcoded
  // count fails on itself the first time content legitimately changes, and
  // editing the number is how a test comes to certify a bug. The claim here is
  // "THIS LESSON did not move it", so it is asked that way and is now immune to
  // anybody else's rows.
  strictEqual(
    endingPopulation(seed.items as never).length,
    endingPopulation(seed.items.filter((i) => !isMine(i.id)) as never).length,
    'a row this lesson owns is in a1.03\'s ending population',
  );
});

/* ══════════════════════════════════════════════════════════════════════════
 *  THE CORPUS ROWS
 * ═══════════════════════════════════════════════════════════════════════ */

test('twenty-nine rows, all in the block, all a2, all in verbes', { skip: noLesson }, () => {
  const rows = myRows();
  strictEqual(rows.length, 29);
  for (const r of rows) {
    strictEqual(r.level, 'a2', `${r.id}`);
    strictEqual(r.theme, THEME, `${r.id}`);
    strictEqual(r.kind, 'sentence', `${r.id} is a headword and this lesson authors sentences only`);
  }
  const ids = rows.map((r) => r.id).sort();
  strictEqual(ids[0], 'fr.a2.verbes.501');
  strictEqual(ids[ids.length - 1], 'fr.a2.verbes.529');
});

test('no duplicate fr inside the theme, computed the way flashhub-coverage does', () => {
  const strip = (s: string) => s.replace(/^(le |la |les |l'|l’|un |une |des |du |de la )/i, '').toLowerCase().trim();
  const inTheme = seed.items.filter((i) => i.theme === THEME);
  const byFr = new Map<string, string[]>();
  for (const i of inTheme) byFr.set(strip(i.fr), [...(byFr.get(strip(i.fr)) ?? []), i.id]);
  const dupes = [...byFr.entries()].filter(([, ids]) => ids.length > 1);
  strictEqual(dupes.length, 0, dupes.slice(0, 5).map(([k, ids]) => `${k} (${ids.join(', ')})`).join('; '));
});

test('every respelling is clean, and the one blind nasal is asserted by name', { skip: noLesson }, () => {
  let seen = 0; let missed = 0;
  const missedRows: string[] = [];
  const scan = (fr: string, value: string, id: string) => {
    ok(!hasPlainNasalFor(fr, value), `${id} respelled ${value} is flagged`);
    for (let k = 0; k < value.length; k += 1) {
      if (value[k] !== 'ⁿ') continue;
      const broken = `${value.slice(0, k)}n${value.slice(k + 1)}`;
      if (hasPlainNasalFor(fr, broken)) seen += 1; else { missed += 1; missedRows.push(id); }
    }
  };
  for (const r of myRows()) scan(r.fr, r.respell ?? '', r.id);
  for (const id of IMPORTED_NEGATIVES) {
    const r = byIdItem.get(id)!;
    scan(r.fr, r.respell ?? '', id);
  }
  strictEqual(seen, 15, 'the number of nasals the checker can see has moved');
  strictEqual(missed, 1, `the checker misses ${missed}: ${missedRows.join(', ')}`);
  deepStrictEqual(missedRows, ['fr.a2.negation-et-restriction.158']);
  // THE BLINDNESS ITSELF, AS A NEGATIVE. Corrections §6: a nasal followed by a
  // consonant inside the token is invisible, so the day the checker improves
  // this goes red rather than carrying a dead by-name list.
  ok(!hasPlainNasalFor('la viande', 'zhuh nuh veh pah mahⁿ-ZHAY duh VYAHND suh SWAR'),
    'the checker now SEES VYAHND, and this by-name assertion can go');
  // AND THE FALSE-POSITIVE PATH IS NOT MET, reported as an absence.
  for (const [fr, respell] of [['samedi', 'sam-DEE'], ['la semaine prochaine', 'LAH suh-MEN proh-SHEN'],
    ['une heure', 'ün UHR'], ['la personne', 'lah pehr-SONN']] as const) {
    ok(!hasPlainNasalFor(fr, respell), `the false-positive path fires on ${fr}/${respell}`);
  }
});

/* ══════════════════════════════════════════════════════════════════════════
 *  THE DICTÉE, THROUGH THE REAL FUNCTION
 * ═══════════════════════════════════════════════════════════════════════ */

test('every dictée target is in LETTERS mode, and every WORD-mode row is out', { skip: noLesson }, () => {
  const dict = sec('s19-dictation') as { itemIds?: string[] } | undefined;
  const ids = dict?.itemIds ?? [];
  strictEqual(ids.length, 9);
  for (const id of ids) {
    const r = byIdItem.get(id);
    ok(r, `${id}`);
    strictEqual(dicteeMode(r!.fr), 'letters', `${id} "${r!.fr}" is ${letterCount(r!.fr)} letters`);
    ok((r!.drills ?? []).includes('dictation'), `${id} carries no dictation drill`);
  }
  for (const r of myRows()) {
    if (dicteeMode(r.fr) === 'words') ok(!(r.drills ?? []).includes('dictation'), `${r.id} spells in WORD mode and carries the drill`);
  }
});

/** THE MEASUREMENT THAT DECIDED THE FRAME, re-run here. `ne` and `pas` cost
 *  five letters, so the affirmative spells letter by letter in all eight
 *  persons and the negative in three, and `je` — the one a learner most wants
 *  to produce — is exactly one letter over. Corrections §4. */
test('the negative costs five letters, and that rules out five of the eight persons', () => {
  const rows: readonly [string, string, string, number, number, boolean][] = [
    ['Je', 'vais', 'ne vais pas', 12, 17, false],
    ['Tu', 'vas', 'ne vas pas', 11, 16, true],
    ['Il', 'va', 'ne va pas', 10, 15, true],
    ['On', 'va', 'ne va pas', 10, 15, true],
    ['Elle', 'va', 'ne va pas', 12, 17, false],
    ['Nous', 'allons', "n'allons pas", 16, 20, false],
    ['Vous', 'allez', "n'allez pas", 15, 19, false],
    ['Ils', 'vont', 'ne vont pas', 13, 18, false],
  ];
  let fit = 0;
  for (const [person, aller, not, affirmative, negative, negativeFits] of rows) {
    const pos = `${person} ${aller} ${FRAME_VERB}.`;
    const neg = `${person} ${not} ${FRAME_VERB}.`;
    strictEqual(letterCount(pos), affirmative, pos);
    strictEqual(letterCount(neg), negative, neg);
    strictEqual(dicteeMode(pos), 'letters', `${pos} does not fit and all eight affirmatives are meant to`);
    strictEqual(dicteeMode(neg) === 'letters', negativeFits, neg);
    if (negativeFits) fit += 1;
  }
  strictEqual(fit, 3);
  strictEqual(letterCount('Je ne vais pas partir.'), 17, 'the je negative is meant to be exactly one letter over the limit of 16');
});

/* ══════════════════════════════════════════════════════════════════════════
 *  THE TRAP DRILLS, THE SHEET AND THE ROLE PLAY
 * ═══════════════════════════════════════════════════════════════════════ */

test('both trapDrills are stepped, gated, size-free, and their takes hold their lines', { skip: noLesson }, () => {
  const traps = L!.sections.filter((s) => s.type === 'trapDrill') as unknown as {
    id?: string; swipe?: boolean; say?: string; size?: string;
    steps?: { kind: string; gate?: boolean }[]; audio?: { recordingId?: string }; cards?: { fr: string }[];
  }[];
  strictEqual(traps.length, 2);
  const recorded = new Map((L!.audio?.recorded ?? []).map((r) => [r.id, r.clipIds ?? []]));
  for (const t of traps) {
    strictEqual((t.steps ?? []).map((s) => s.kind).join('>'), 'rule>cards>audio>drill', `${t.id}`);
    ok(t.swipe, `${t.id} has no swipe`);
    ok(t.say, `${t.id} has no say`);
    // `size` COMES OFF a stepped trapDrill: the stepped branch of MissionSection
    // sizes off steps.length, and the ledger's sweep records it as the one thing
    // lesson-contract.test.ts does not check.
    strictEqual(t.size, undefined, `${t.id} carries a size`);
    ok((t.steps ?? []).some((s) => s.kind === 'drill' && s.gate), `${t.id} drill step is not gated`);
    const clips = recorded.get(t.audio?.recordingId ?? '');
    ok(clips, `${t.id} points at a recording the lesson does not brief`);
    for (const card of t.cards ?? []) ok(clips!.includes(card.fr), `${t.id}'s take does not contain ${card.fr}`);
  }
});

test('the reference sheet is three columns wide and holds no cheatSheet', { skip: noLesson }, () => {
  const sheets = L!.sheets ?? [];
  strictEqual(sheets.length, 1);
  strictEqual(sheets[0]!.id, 'sheet.a2.19.futur');
  for (const s of sheets[0]!.sections ?? []) {
    ok(s.type !== 'cheatSheet', 'a cheatSheet inside a reference sheet draws its title and nothing else');
    const cols = (s as { cols?: string[] }).cols;
    if (cols) ok(cols.length <= 3, `a table inside a sheet holds three columns and this one holds ${cols.length}`);
  }
  // THE TWO TABLES ARE THE SAME THREE COLUMNS TWICE, so the second reads as the
  // first with two words added, and the third column is the frame verb in both.
  const tables = (sheets[0]!.sections ?? []).filter((s) => s.type === 'table') as unknown as { rows?: string[][] }[];
  strictEqual(tables.length, 2);
  for (const t of tables) {
    strictEqual((t.rows ?? []).length, 6);
    strictEqual(new Set((t.rows ?? []).map((r) => r[2])).size, 1);
    strictEqual((t.rows ?? [])[0]![2], FRAME_VERB);
  }
});

test('every role-play turn has a userEn and two alternatives', { skip: noLesson }, () => {
  const s = sec('s18-scenario') as { turns?: { userEn?: string; alts?: unknown[] }[] } | undefined;
  ok((s?.turns ?? []).length >= 4);
  for (const [i, t] of (s!.turns ?? []).entries()) {
    ok(t.userEn, `turn ${i} has no userEn`);
    ok((t.alts ?? []).length >= 2, `turn ${i} has ${(t.alts ?? []).length} alts`);
  }
});

/* ══════════════════════════════════════════════════════════════════════════
 *  THE QUIZ
 * ═══════════════════════════════════════════════════════════════════════ */

test('the exam: thirty questions, at most half mcq, five errorSpot, every why present', { skip: noLesson }, () => {
  const quiz = L!.sections.find((s) => s.type === 'quiz')!;
  const qs = quizQuestions(quiz);
  strictEqual(qs.length, 30);
  const mcq = qs.filter((q) => q.format === 'mcq').length;
  ok(mcq <= 15, `${mcq} of 30 are mcq`);
  ok(qs.filter((q) => q.format === 'errorSpot').length >= 5, 'fewer than five errorSpot questions');
  const ids = L!.sections.map((s) => (s as { id?: string }).id ?? '');
  for (const q of qs) {
    ok(q.why, `no why on ${q.q}`);
    ok(q.ref && ids.includes(q.ref), `ref ${q.ref} names no section`);
  }
  const closed = qs.filter((q) => typeof q.correct === 'number');
  const slots = new Map<number, number>();
  for (const q of closed) slots.set(Number(q.correct), (slots.get(Number(q.correct)) ?? 0) + 1);
  for (const [slot, n] of slots) ok(n / closed.length <= 0.4, `slot ${slot} holds ${n} of ${closed.length}`);
  for (const q of qs) {
    if (q.format !== 'typeIn' && q.format !== 'errorSpot') continue;
    ok(q.answer, 'a free-text question has no answer');
    ok(matchesAccept(q.answer!, q.accept ?? []), `${q.q} does not accept ${q.answer}`);
    ok(!fires(PAS_AFTER_INFINITIVE, q.answer!), `${q.q} displays an answer with the pas in the wrong place`);
    for (const a of (q.accept ?? [])) ok(!fires(PAS_AFTER_INFINITIVE, a), `${q.q} accepts ${a}`);
  }
});

test('five rounds, each leading a different trigger, and every drill reachable', { skip: noLesson }, () => {
  const quiz = L!.sections.find((s) => s.type === 'quiz') as unknown as { rounds: { id: string; targets: string[] }[] };
  strictEqual(quiz.rounds.length, 5);
  const leads = quiz.rounds.map((r) => r.targets[0]);
  strictEqual(new Set(leads).size, leads.length, `two rounds lead on the same trigger: ${leads.join(', ')}`);
  const triggers = (L!.errorTriggers ?? []).map((t) => t.id);
  strictEqual(triggers.length, 5);
  for (const t of triggers) ok(leads.includes(t), `${t} leads no round, so its drill can never fire`);
  const drills = new Set((L!.drills ?? []).map((d) => d.id));
  for (const t of L!.errorTriggers ?? []) {
    ok(drills.has(t.drill), `${t.id} names an unknown drill`);
    if (t.retest) ok(drills.has(t.retest), `${t.id} names an unknown retest`);
  }
});

/* ══════════════════════════════════════════════════════════════════════════
 *  HOUSE RULES, CHIPS AND TITLES
 * ═══════════════════════════════════════════════════════════════════════ */

test('no grammar jargon, no dash, no tie, no banned word on any learner surface', { skip: noLesson }, () => {
  const houseText = display(L!.sections).concat(
    display(L!.sheets ?? []), display(L!.terms ?? {}), [L!.intro ?? ''],
    display(L!.overview ?? {}), display(L!.acts ?? []), display(L!.drills ?? []),
    myRows().flatMap((r) => [r.fr, r.en, r.notes ?? '']),
  ).join('\n');
  for (const j of ['periphrastic', 'infinitive', 'participle', 'paradigm', 'auxiliary',
    'clitic', 'morpheme', 'predicate', 'invariable', 'first person', 'second person',
    'third person', 'compound tense', 'present perfect']) {
    for (const form of [j, `${j}s`]) ok(!hasPhrase(houseText, form), `the jargon ${form} is on a learner surface`);
  }
  for (const bad of ['—', '–', '‿']) ok(!houseText.includes(bad), `${bad} is on a learner surface`);
  for (const bad of ['honest', 'honesty', 'honestly']) ok(!hasPhrase(houseText, bad), `${bad} is banned`);
  // THE PLAIN PHRASE, which is a2.02's and is what this lesson uses instead of
  // the technical one. a2.17 §8: guard the ratio rather than banning a word.
  ok(countPhrase(houseText, 'naming form') >= 10, 'the plain phrase is not carried through the lesson');
});

test('every mission title fits the hub row, and every chip row fits its width', { skip: noLesson }, () => {
  for (const s of L!.sections) {
    const t = (s as { title?: string }).title ?? '';
    ok(t.length <= 27, `${t} is ${t.length} characters and the hub row cuts at 27`);
  }
  const terms = L!.terms ?? {};
  strictEqual(Object.keys(terms).length, 8);
  for (const s of L!.sections) {
    const chips = (s as { terms?: string[] }).terms ?? [];
    ok(chips.length <= 3, `${(s as { id?: string }).id} declares ${chips.length} chips`);
    for (const name of chips) ok(terms[name], `${(s as { id?: string }).id} names an unknown term ${name}`);
    if (chips.length) {
      const w = chips.reduce((n, k) => n + (terms[k]?.term.length ?? 0), 0) + (chips.length - 1) * 2;
      ok(w <= 37, `${(s as { id?: string }).id} chip row is ${w} characters`);
    }
  }
  const used = new Set(L!.sections.flatMap((s) => (s as { terms?: string[] }).terms ?? []));
  for (const k of Object.keys(terms)) ok(used.has(k), `the term ${k} is named by no section`);
});

test('the intro is a learner surface and carries no jargon', { skip: noLesson }, () => {
  ok(L!.intro && L!.intro.length > 100, 'intro is drawn on the overview card AND the lesson cover');
  for (const j of ['infinitive', 'periphrastic', 'auxiliary', 'paradigm', 'participle']) {
    ok(!hasPhrase(L!.intro!, j), `intro holds the jargon ${j}`);
  }
  ok(!fires(PAS_AFTER_INFINITIVE, L!.intro!), 'intro puts pas after the naming form');
  ok(!fires(FUTUR_SIMPLE_SHAPE, L!.intro!), 'intro conjugates the one-word future');
});

/* ══════════════════════════════════════════════════════════════════════════
 *  REACHABILITY, THE AUDIO BRIEFS, AND THE VALIDATORS
 * ═══════════════════════════════════════════════════════════════════════ */

test('every declared item resolves and is released exactly once', { skip: noLesson }, () => {
  strictEqual(L!.itemIds.length, 46);
  for (const id of L!.itemIds) ok(byIdItem.has(id), `${id} resolves to nothing`);
  const tranches = L!.deckTranche ?? [];
  strictEqual(tranches.length, 6, 'one slice per act');
  const released = tranches.flat();
  strictEqual(new Set(released).size, released.length, 'a row is released twice');
  for (const id of released) ok(L!.itemIds.includes(id), `${id} is released and is not in itemIds`);
  for (const id of released) ok((byIdItem.get(id)!.drills ?? []).includes('flashcard'), `${id} is released with no flashcard drill`);
});

test('the audio briefs are pinned, because a constraint on a take is invisible once the clip lands', { skip: noLesson }, () => {
  const recorded = L!.audio?.recorded ?? [];
  deepStrictEqual(recorded.map((r) => r.id), [
    'rec-a2-19-six', 'rec-a2-19-pair', 'rec-a2-19-where', 'rec-a2-19-twice',
    'rec-a2-19-scene', 'rec-a2-19-dictee', 'rec-a2-19-talk',
  ]);
  const six = recorded.find((r) => r.id === 'rec-a2-19-six')!;
  ok(/ONE TAKE/.test(six.desc), 'the six-person take does not say it is one take');
  ok(/IDENTICAL/.test(six.desc), 'the six-person take does not say the last word must be identical');
  const where = recorded.find((r) => r.id === 'rec-a2-19-where')!;
  ok(/NOT AUDIBLE/i.test(where.desc), 'the trap take does not say the error is inaudible, which is the whole point of it');
  const dictee = recorded.find((r) => r.id === 'rec-a2-19-dictee')!;
  ok(/NO CONTRAST INTENT/i.test(dictee.desc), 'the dictée take does not forbid a paired reading');
});

test('the lesson validates and the density validator is clean', { skip: noLesson }, () => {
  const issues = validateLesson(L!);
  strictEqual(issues.length, 0, formatIssues(issues));
  const d = validateDensity(L!);
  strictEqual(d.length, 0, formatDensity(d));
});
