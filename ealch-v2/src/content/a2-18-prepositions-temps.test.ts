// a2.18.l1 « Prépositions de temps »: the assertions that keep this lesson true.
//
// Modelled on a2-04-prepositions-lieu.test.ts. Everything here runs the REAL app
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
// IT IS SCOPED TO ITS OWN ID BLOCK. Ledger §a2.16-1: a2.03's test filtered on a
// namespace prefix and meant "the rows a2.03 authored", and four of its tests
// went red the moment a2.16 landed in the same namespace. `fr.a2.prepositions-
// essentielles` now holds 182 rows, 127 of them nobody in this band authored and
// 26 of them a2.04's, so a prefix filter would pick up a hundred and fifty-three
// strangers on the first run. `MY_BLOCK` below is the range. The duplicate-`fr`
// check is deliberately NOT scoped: flashhub-coverage counts two rows sharing an
// `fr` in one theme as one card served twice, whoever authored them, and this
// lesson's v1 shipped a duplicate of exactly that shape.
//
// ── What this file is actually guarding ────────────────────────────────────
//
//   depuis ARRIVING WITH A PAST TENSE. That is the error the lesson exists to
//   prevent and it is the one an English speaker makes first. The wrong forms
//   are permitted in the nine sections where the error is the content, and
//   nowhere else, and they must APPEAR in those nine, because a trap nobody
//   sees is not a trap. Guarded as a SHAPE as well as a list, and the shape is
//   checked in both directions: its first version read `ici` as a participle
//   and fired on this lesson's own central sentence.
//   THE FIVE-WORD GRID BEING SPLIT UP. Presented as five vocabulary items the
//   learner has five things to remember; presented as one grid they have one
//   question to ask. Asserted row by row, cells, tenses and examples.
//   THE RECEPTIVE ROW BECOMING A PRODUCTION SURFACE. `il y a` for "ago" needs a
//   past tense, which is a2.05 and two lessons away. Exactly one authored row
//   holds a compound tense, it is shown once, and it is in no dictée, no drill,
//   no speak list and no quiz answer.
//   a2.02's TERM BEING PARAPHRASED. Doctrine §B.7 tells this lesson to quote it
//   verbatim and credit the unit by id. Asserted as a LITERAL: a2.16 §3 found
//   that a guard looping over the constant the content renders guards nothing.
//   THE FUTUR PROCHE ARRIVING ONE SEQ EARLY, and A PLACE SENSE OF en OR dans
//   ARRIVING ONE SEQ LATE. a2.19 owns the first and a2.04 owns the second, and
//   a2.04's own guard is the mirror of the one here.
//   pour BECOMING A SIXTH WORD. The decision is that it is named once, in the
//   sheet, and taught nowhere. Asserted as a count, so both directions fail.
//   A DICTÉE TARGET IN WORD MODE. Every row here is checked through the real
//   `dicteeMode`, and word mode hands each real word over pre-spelled.
//   A STACKED trapDrill. lesson-contract.test.ts enforces the shape seed-wide;
//   this file adds the two things that contract does not check, which are that
//   `size` comes off and that the audio step's take contains the cards' lines.
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

const L = seed.lessons.find((l) => l.id === 'a2.18.l1');
const noLesson = !L;
const byId = new Map(seed.items.map((i) => [i.id, i] as const));

/** THE BLOCK, NOT THE PREFIX. a2.04 used `.129..168` in this namespace and 127
 *  rows nobody in this band authored sit below both. */
const MY_BLOCK = { from: 'fr.a2.prepositions-essentielles.169', to: 'fr.a2.prepositions-essentielles.208' };
const isMine = (id: string) => id >= MY_BLOCK.from && id <= MY_BLOCK.to;
const myRows = () => seed.items.filter((i) => isMine(i.id));

const THEME = 'prepositions-essentielles';
const PAST_UNIT = 'a2.05';
const FUTURE_UNIT = 'a2.19';
const PLACE_UNIT = 'a2.04';
const CLOCK_UNIT = 'a1.12';
const MONTH_UNIT = 'a1.09';
const PATTERN_UNIT = 'a2.02';

/** a2.02's term, quoted VERBATIM. Doctrine §B.7 and a2.16 §3: a back-reference
 *  to another unit is not a variable, so this is a literal and a paraphrase
 *  fails. */
const WHAT_FOLLOWS = 'what comes next decides';

const REFRAME = 'If it is still happening, French keeps it in the present.';

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
 *  that the house boundary cannot see `j'ai`, which is where this lesson's
 *  central wrong form starts. */
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
const learnerText = () => [
  ...strings(L!.sections), ...strings(L!.sheets ?? []), ...strings(L!.terms ?? {}),
  L!.intro ?? '', ...strings(L!.overview ?? {}),
  ...strings(L!.acts ?? []), ...strings(L!.drills ?? []),
].join('\n');

/* ══════════════════════════════════════════════════════════════════════════
 *  THE SHAPES, WRITTEN OUT RATHER THAN IMPORTED
 *
 *  The corpus file holds the same regexes and this file does not import them,
 *  for the reason at the top: a test comparing the content to its own constant
 *  passes on any change to that constant. These are hand copies and the
 *  must-fire / must-not-fire lists below prove they still mean what they say.
 * ═══════════════════════════════════════════════════════════════════════ */

const PARTICIPLE = '(?:fini|finis|finie|finies|choisi|choisis|dormi|parti|partis|partie|parties|sorti|sortis|servi|senti|v[ée]cu|plu|attendu|vendu|entendu|r[ée]pondu|perdu|rendu|descendu|re[çc]u|aper[çc]u|voulu|pu|d[ûu]|su|connu|lu|relu|vu|revu|venu|revenu|devenu|tenu|couru|bu|cru|eu|[ée]t[ée]|mis|remis|promis|assis|pris|appris|compris|surpris|dit|redit|[ée]crit|d[ée]crit|conduit|produit|construit|fait|refait|ouvert|offert|couvert|d[ée]couvert|souffert|mort|morts|morte)';
const ER_PARTICIPLE = '[\\p{L}]{2,}(?:é|és|ée|ées)';
const AUX = '(?:j[\'’]ai|ai|as|a|avons|avez|ont|suis|es|est|sommes|êtes|sont)';
const ADV = '(?:pas\\s+|jamais\\s+|plus\\s+|bien\\s+|déjà\\s+|toujours\\s+|beaucoup\\s+)?';

const DEPUIS_PAST_SHAPE = new RegExp(
  `(?<![\\p{L}\\p{N}-])${AUX}\\s+${ADV}(?:${ER_PARTICIPLE}|${PARTICIPLE})(?![\\p{L}\\p{N}'’-])[^.!?]*(?<![\\p{L}\\p{N}-])depuis(?![\\p{L}\\p{N}'’-])`
  + `|(?<![\\p{L}\\p{N}-])depuis(?![\\p{L}\\p{N}'’-])[^.!?]*(?<![\\p{L}\\p{N}-])${AUX}\\s+${ADV}(?:${ER_PARTICIPLE}|${PARTICIPLE})(?![\\p{L}\\p{N}'’-])`,
  'iu',
);

const COMPOUND_SHAPE = new RegExp(
  `(?<![\\p{L}\\p{N}-])(?:j['’]ai|tu\\s+as|il\\s+a|elle\\s+a|on\\s+a|nous\\s+avons|vous\\s+avez|ils\\s+ont|elles\\s+ont`
  + `|je\\s+suis|tu\\s+es|il\\s+est|elle\\s+est|on\\s+est|nous\\s+sommes|vous\\s+êtes|ils\\s+sont|elles\\s+sont)`
  + `\\s+${ADV}(?:${ER_PARTICIPLE}|${PARTICIPLE})(?![\\p{L}\\p{N}'’-])`,
  'iu',
);

const FUTUR_PROCHE_SHAPE =
  /(?<![\p{L}\p{N}-])(?:vais|vas|va|allons|allez|vont)\s+(?:pas\s+|bientôt\s+)?[\p{L}]{3,}(?:er|ir|re|oir)(?![\p{L}\p{N}'’-])/iu;

const TIME_NOUN = 'secondes?|minutes?|heures?|jours?|semaines?|mois|ans?|années?|matins?|soirs?|soirées?|nuits?|journées?|temps|instants?|moments?';
const PLACE_SHAPE = new RegExp(
  `(?<![\\p{L}\\p{N}-])(?:en|dans)\\s+(?:le|la|les|l['’]|un|une|mon|ma|mes|ton|ta|son|sa|ce|cette)\\s*(?!(?:${TIME_NOUN})(?![\\p{L}]))[\\p{L}]{3,}`
  + `|(?<![\\p{L}\\p{N}-])en\\s+(?:France|Espagne|Italie|Belgique|Allemagne|Suisse|ville|classe|voiture)(?![\\p{L}])`,
  'iu',
);

const POUR_TIME_SHAPE =
  /(?<![\p{L}\p{N}-])pour\s+(?:un|une|deux|trois|quatre|cinq|six|sept|huit|neuf|dix|quelques|plusieurs)\s+(?:seconde|minute|heure|jour|semaine|mois|an|année)/giu;

const fires = (re: RegExp, s: string): boolean => new RegExp(re.source, re.flags.replace('g', '')).test(s);
const countShape = (re: RegExp, s: string): number =>
  (s.match(new RegExp(re.source, re.flags.includes('g') ? re.flags : `${re.flags}g`)) ?? []).length;

/* ══════════════════════════════════════════════════════════════════════════
 *  THE LESSON IS THERE AND IT IS THE SHAPE THE SOURCE DESCRIBES
 * ═══════════════════════════════════════════════════════════════════════ */

test('a2.18.l1 is in the seed', () => {
  ok(L, 'a2.18.l1 is missing from seed.json');
});

test('the spine, in order', { skip: noLesson }, () => {
  deepStrictEqual(L!.sections.map((s) => (s as { id: string }).id), [
    's01-scene', 's02-goals', 's03-grid',
    's04-depuis', 's05-english', 's06-quand', 's07-tense', 's08-produce',
    's09-pendant', 's10-pair', 's11-errors',
    's12-dans', 's13-ilya', 's14-twice', 's15-en', 's16-unseen',
    's17-reading', 's18-scenario', 's19-dictation', 's20-speak', 's21-review',
    's22-progress', 's23-quiz', 's24-roundup',
  ]);
  deepStrictEqual(L!.sections.map((s) => s.type), [
    'scene', 'goals', 'tapTable',
    'examples', 'cardDeck', 'examples', 'trapDrill', 'groupDrill',
    'examples', 'cardDeck', 'commonErrors',
    'examples', 'examples', 'trapDrill', 'examples', 'groupDrill',
    'reading', 'scenario', 'dictation', 'practice', 'reviewDeck',
    'progressCheck', 'quiz', 'roundup',
  ]);
});

test('six acts, and the Owns act is the heaviest', { skip: noLesson }, () => {
  const acts = L!.acts ?? [];
  strictEqual(acts.length, 6);
  deepStrictEqual(acts.map((a) => a.sections.length), [3, 5, 3, 5, 5, 3]);
  // ACT 2 IS depuis AND THE PARADIGM IS ONE SECTION. Doctrine §B.5: if the act
  // structure gives the paradigm more missions than the Owns, the wrong lesson
  // got built. Written as literals rather than derived from the acts, because a
  // comparison between two reads of the same array is always true.
  strictEqual(acts[1]!.id, 'act2');
  strictEqual(acts[1]!.sections.length, 5);
  deepStrictEqual(acts[1]!.sections, ['s04-depuis', 's05-english', 's06-quand', 's07-tense', 's08-produce']);
  // The paradigm is s03-grid and nothing else: ONE tapTable in the lesson.
  strictEqual(L!.sections.filter((s) => s.type === 'tapTable').length, 1);
  // Every section is claimed by exactly one act.
  const claimed = acts.flatMap((a) => a.sections);
  strictEqual(new Set(claimed).size, claimed.length, 'two acts claim one section');
  strictEqual(claimed.length, L!.sections.length);
});

test('the identity block, byte for byte from the unit', { skip: noLesson }, () => {
  const u = seed.units.find((x) => x.id === 'a2.18');
  ok(u, 'unit a2.18 is missing');
  strictEqual(String(u!.seq), '14');
  strictEqual(u!.title, 'Prepositions of Time');
  strictEqual(u!.sub, 'Prépositions de temps');
  // REWORDED 2026-08-14. The original promised "how long ago", which needs a
  // past tense this trail position does not have, and the alternative — moving
  // the unit after a2.05 — was rejected because `dans` pairs with a2.19 at
  // seq 15, one lesson AFTER. Asserted byte for byte so a silent revert fails.
  strictEqual(u!.canDo, 'Can say how long something has been going, how long it took and when it starts, with the right time preposition');
  ok(!u!.canDo.includes('how long ago'), 'the canDo promises production of "how long ago", which needs a2.05\'s past tense');
  deepStrictEqual(u!.prereqUnitIds, [CLOCK_UNIT]);
  ok((u!.lessonIds ?? []).includes('a2.18.l1'));
  strictEqual(L!.tag, 'A2 · LEÇON 14');
  strictEqual(L!.title, u!.sub);
  strictEqual((L!.overview as { titleEn?: string }).titleEn, u!.title);
});

/* ══════════════════════════════════════════════════════════════════════════
 *  THE GRID: FIVE WORDS IN ONE SECTION, WITH THEIR TENSES, ROW BY ROW
 * ═══════════════════════════════════════════════════════════════════════ */

/** Written out by hand. The lesson reads these off a constant and this file
 *  does not, so an edit to the constant has to be repeated here on purpose. */
const GRID_ROWS: readonly [string, string, string, string][] = [
  ['depuis', 'present', 'still going', 'depuis une heure'],
  ['pendant', 'any tense', 'finished', 'pendant une heure'],
  ['il y a', 'a past', 'behind you', 'il y a une heure'],
  ['dans', 'present', 'ahead', 'dans une heure'],
  ['en', 'any tense', 'how long', 'en une heure'],
];

test('the five are in ONE section, with their tenses and one example each', { skip: noLesson }, () => {
  const g = sec('s03-grid') as { type?: string; cols?: string[]; rows?: { cells: string[]; detail?: { title?: string; body?: string } }[] } | undefined;
  strictEqual(g?.type, 'tapTable', 'the five belong in one grid, not in five sections');
  strictEqual((g!.cols ?? []).length, 3, 'a2.17 measured a three-column cell at eleven characters');
  strictEqual((g!.rows ?? []).length, 5);
  GRID_ROWS.forEach(([prep, tense, measures, example], i) => {
    const row = g!.rows![i]!;
    deepStrictEqual(row.cells, [prep, tense, measures], `grid row ${i}`);
    strictEqual(row.detail?.title, example, `grid row ${i} example`);
    for (const cell of row.cells) ok(cell.length <= 11, `cell ${JSON.stringify(cell)} is ${cell.length} characters`);
  });
  // AND NO OTHER SECTION IS A SECOND GRID. Five separate rules is the lesson the
  // brief warns against.
  strictEqual(L!.sections.filter((s) => s.type === 'tapTable' || s.type === 'table').length, 1);
});

test('the il y a row names the tense it is waiting for, and nothing else does', { skip: noLesson }, () => {
  const g = sec('s03-grid') as { rows?: { cells: string[]; detail?: { body?: string } }[] };
  const ilya = g.rows!.find((r) => r.cells[0] === 'il y a')!;
  strictEqual(ilya.cells[1], 'a past');
  ok(hasPhrase(ilya.detail?.body ?? '', PAST_UNIT), `the il y a row does not name ${PAST_UNIT}`);
  for (const r of g.rows!) {
    if (r.cells[0] === 'il y a') continue;
    ok(!hasPhrase(r.detail?.body ?? '', PAST_UNIT), `${r.cells[0]} defers to ${PAST_UNIT} and it is producible today`);
  }
});

test('four of the five examples are rows somebody else published', { skip: noLesson }, () => {
  // fr.sons.jours-et-mois.080..083, four consecutive published phrase cards,
  // one duration. Corrections §3 says the corpus never holds a minimal set and
  // for this lesson it does. The fifth was authored to complete them.
  const quad = ['fr.sons.jours-et-mois.080', 'fr.sons.jours-et-mois.081', 'fr.sons.jours-et-mois.082', 'fr.sons.jours-et-mois.083'];
  for (const id of quad) {
    const row = byId.get(id);
    ok(row, `${id} is one of the four published grid examples and is not in the seed`);
    ok(!isMine(id), `${id} is a published card and this lesson claims to own it`);
    ok(GRID_ROWS.some(([, , , ex]) => ex === row!.fr), `${id} "${row!.fr}" is not a grid example`);
  }
  const authoredExample = GRID_ROWS.find(([, , , ex]) => !quad.some((id) => byId.get(id)?.fr === ex));
  ok(authoredExample, 'one of the five examples is authored and none is');
  strictEqual(authoredExample![0], 'en');
  const row = myRows().find((r) => r.fr === authoredExample![3]);
  ok(row, `the authored example ${JSON.stringify(authoredExample![3])} is not one of this lesson's rows`);
});

/* ══════════════════════════════════════════════════════════════════════════
 *  THE OWNS: depuis TAKES THE PRESENT
 * ═══════════════════════════════════════════════════════════════════════ */

test('the depuis-past shape still means what it says, in both directions', { skip: noLesson }, () => {
  for (const s of [
    "J'ai habité ici depuis trois ans.",
    'Elle a travaillé ici depuis mars.',
    'Il a plu depuis ce matin.',
    'Depuis mars, elle a travaillé ici.',
    "J'ai été ici depuis six mois.",
  ]) ok(fires(DEPUIS_PAST_SHAPE, s), `the shape does not fire on ${JSON.stringify(s)}`);
  for (const s of [
    "J'habite ici depuis trois ans.",
    'Elle travaille ici depuis mars.',
    'Il pleut depuis ce matin.',
    // THE LINE THAT BROKE THE FIRST VERSION. `ici` ends in an i and an
    // ending-based shape reads it as a participle behind `suis`. a2.17 §4 and
    // a2.14 §6: guard the thing, not the letters.
    'Je suis ici depuis six mois.',
    'Tu es ici depuis longtemps ?',
    'On travaille ici depuis mars.',
    'She has lived here for three years and she is still here.',
    REFRAME,
  ]) ok(!fires(DEPUIS_PAST_SHAPE, s), `the shape fires on ${JSON.stringify(s)}`);
});

/** The nine sections where the error is the content: the scene shows the stall,
 *  the trap and the errors screen show the wrong form, the cardDeck shows the
 *  English route, and every drill offers a past tense as its distractor. */
const WRONG_FORM_SECTIONS = [
  's01-scene', 's07-tense', 's11-errors', 's05-english', 's08-produce',
  's16-unseen', 's13-ilya', 's14-twice', 's23-quiz',
];

test('no authored correct sentence pairs depuis with a past tense', { skip: noLesson }, () => {
  for (const r of myRows()) {
    ok(!fires(DEPUIS_PAST_SHAPE, r.fr), `${r.id} "${r.fr}" pairs depuis with a past tense`);
  }
});

test('the wrong form appears only where the error is the content', { skip: noLesson }, () => {
  const legal = new Set(WRONG_FORM_SECTIONS);
  for (const s of L!.sections) {
    const sid = (s as { id?: string }).id ?? '';
    if (legal.has(sid)) continue;
    for (const line of strings(s)) {
      ok(!fires(DEPUIS_PAST_SHAPE, line), `${sid} pairs depuis with a past tense: ${JSON.stringify(line)}`);
    }
  }
  // AND IT APPEARS IN THEM, because a trap nobody sees is not a trap. The exam
  // is on the legal list and does NOT have to carry one, because the errorSpot
  // prompts are the wrong forms and they live inside the round.
  const homes = L!.sections.filter((s) => legal.has((s as { id?: string }).id ?? ''));
  const carrying = homes.filter((s) => strings(s).some((x) => fires(DEPUIS_PAST_SHAPE, x)));
  ok(carrying.length >= 4, `only ${carrying.length} of the nine permitted sections actually show the error`);
  // The sheet, the terms except one, and the intro are NOT on the list.
  for (const line of strings(L!.sheets ?? [])) ok(!fires(DEPUIS_PAST_SHAPE, line), `the sheet pairs depuis with a past tense: ${JSON.stringify(line)}`);
  ok(!fires(DEPUIS_PAST_SHAPE, L!.intro ?? ''), 'the intro pairs depuis with a past tense');
  // ONE TERM IS EXEMPT AND IT IS NAMED: its whole job is to say what a French
  // listener hears when a learner produces the wrong form.
  const terms = (L!.terms ?? {}) as Record<string, unknown>;
  const carryingTerms = Object.keys(terms).filter((k) => strings(terms[k]).some((x) => fires(DEPUIS_PAST_SHAPE, x)));
  deepStrictEqual(carryingTerms, ['presentNotPerfect']);
});

test('depuis is taught with the present, in its own act, on more than one screen', { skip: noLesson }, () => {
  const owns = sec('s04-depuis') as { type?: string; examples?: { fr: string }[] };
  strictEqual(owns.type, 'examples');
  ok((owns.examples ?? []).length >= 5, 'the Owns section shows fewer than five sentences');
  // Every French sentence on that screen is a present tense.
  for (const e of owns.examples ?? []) {
    ok(!fires(COMPOUND_SHAPE, e.fr), `${JSON.stringify(e.fr)} is a compound tense on the Owns screen`);
  }
  // And the reframe reaches it.
  ok(strings(owns).some((x) => x.includes(REFRAME)), 'the Owns section does not carry the reframe');
});

/* ══════════════════════════════════════════════════════════════════════════
 *  depuis AGAINST pendant, IN ONE SECTION
 * ═══════════════════════════════════════════════════════════════════════ */

test('depuis and pendant are contrasted in one section', { skip: noLesson }, () => {
  const pair = sec('s10-pair');
  ok(pair, 's10-pair is missing');
  const text = strings(pair).join('\n');
  ok(hasPhrase(text, 'depuis'), 'the pair section does not name depuis');
  ok(hasPhrase(text, 'pendant'), 'the pair section does not name pendant');
  // BOTH PUBLISHED CARDS, ON ONE SCREEN. .082 and .083 are consecutive ids in
  // one theme and they are the same duration with the two different words.
  ok(text.includes('depuis une heure'), 'the pair section does not show « depuis une heure »');
  ok(text.includes('pendant une heure'), 'the pair section does not show « pendant une heure »');
  // The claim the contrast rests on.
  ok(/still going|still inside/i.test(text) && /finished|other side/i.test(text),
    'the pair section does not say which of the two is still running');
});

/* ══════════════════════════════════════════════════════════════════════════
 *  THE TRAP: il y a HAS TWO JOBS, AND a2.02's TERM IS QUOTED VERBATIM
 * ═══════════════════════════════════════════════════════════════════════ */

test('the two il y a uses are contrasted in one section', { skip: noLesson }, () => {
  const trap = sec('s14-twice') as { type?: string; cards?: { promptLabel?: string; fr: string }[] };
  strictEqual(trap.type, 'trapDrill');
  const labels = (trap.cards ?? []).map((c) => c.promptLabel);
  ok(labels.includes('there is'), 'the trap does not label an existence card');
  ok(labels.includes('ago'), 'the trap does not label an ago card');
  ok(labels.filter((x) => x === 'there is').length >= 2, 'the trap shows fewer than two existence cards');
  ok(labels.filter((x) => x === 'ago').length >= 2, 'the trap shows fewer than two ago cards');
  // The four cards share their first three words, which is the whole claim.
  for (const c of trap.cards ?? []) ok(/^il y a\b/i.test(c.fr), `${JSON.stringify(c.fr)} does not start with the three words`);
});

test('a2.02\'s term is quoted verbatim and the unit is named by id', { skip: noLesson }, () => {
  const text = learnerText();
  ok(hasPhrase(text, WHAT_FOLLOWS), `the ${PATTERN_UNIT} term ${JSON.stringify(WHAT_FOLLOWS)} is not quoted anywhere. A paraphrase is not a quotation.`);
  ok(hasPhrase(text, PATTERN_UNIT), `${PATTERN_UNIT} owns the first instance of this shape and is never named by id`);
  // AND IT TITLES THE TRAP'S RULE CARD, which is the screen the recognition
  // happens on.
  const trap = sec('s14-twice') as { rule?: { title?: string } };
  strictEqual(trap.rule?.title, WHAT_FOLLOWS);
});

test('the ago rule is stated, and it is about the measurement being finished', { skip: noLesson }, () => {
  const text = learnerText();
  ok(hasPhrase(text, 'A measurement and then a full stop means ago.'),
    'the ago rule is not stated on a learner surface');
  // THE CLAUSE THAT BOUNDS IT. « il y a plusieurs jours fériés » is published
  // and means "there are", so "a time expression means ago" is not sufficient.
  ok(/still being described/i.test(text), 'the rule does not bound itself, and a published counterexample breaks it without the bound');
});

/* ══════════════════════════════════════════════════════════════════════════
 *  NO PASSÉ COMPOSÉ IN THE LESSON BODY, AND THE DEFERRAL LINE EXISTS
 * ═══════════════════════════════════════════════════════════════════════ */

test('the compound shape still means what it says, in both directions', { skip: noLesson }, () => {
  for (const s of [
    "J'ai commencé il y a trois jours.",
    'Nous avons déménagé il y a six mois.',
    'Je suis arrivé il y a une heure.',
  ]) ok(fires(COMPOUND_SHAPE, s), `the shape does not fire on ${JSON.stringify(s)}`);
  for (const s of [
    'You did not stall on a word you had not learned.',
    "J'habite ici depuis trois ans.",
    'Je suis ici depuis six mois.',
    'Elle est ici aussi.',
    'Il est midi.',
  ]) ok(!fires(COMPOUND_SHAPE, s), `the shape fires on ${JSON.stringify(s)}`);
});

test('exactly one authored row holds a compound tense, and it is asked for nowhere', { skip: noLesson }, () => {
  const compound = myRows().filter((r) => fires(COMPOUND_SHAPE, r.fr));
  strictEqual(compound.length, 1, `${compound.length} authored rows hold a compound tense: ${compound.map((r) => r.id).join(', ')}`);
  strictEqual(compound[0]!.fr, "J'ai commencé il y a trois jours.");
  const id = compound[0]!.id;
  // Not a dictée target, not spoken, not a quiz answer, not a drill answer.
  ok(!(compound[0]!.drills ?? []).includes('dictation'), `${id} carries a dictation drill`);
  const dictation = sec('s19-dictation') as { itemIds?: string[] };
  ok(!(dictation.itemIds ?? []).includes(id), `${id} is a dictée target`);
  const speak = sec('s20-speak') as { itemIds?: string[] };
  ok(!(speak.itemIds ?? []).includes(id), `${id} is a speak target`);
  for (const q of quizQuestions(L!.sections.find((s) => s.type === 'quiz')!)) {
    ok(!fires(COMPOUND_SHAPE, String(q.answer ?? '')), `a quiz question asks for ${JSON.stringify(q.answer)}`);
    for (const a of q.accept ?? []) ok(!fires(COMPOUND_SHAPE, a), `a quiz question accepts ${JSON.stringify(a)}`);
  }
  for (const d of (L!.drills ?? []) as { id: string; pairs?: [string, string][] }[]) {
    for (const [, back] of d.pairs ?? []) ok(!fires(COMPOUND_SHAPE, back), `${d.id} asks for ${JSON.stringify(back)}`);
  }
});

test('the deferral to a2.05 is on a learner surface, in its own words', { skip: noLesson }, () => {
  const text = learnerText();
  ok(hasPhrase(text, PAST_UNIT), `${PAST_UNIT} is never named and a whole row of the grid waits for it`);
  // BY ITS OWN WORDING, not by a loose match. Found by mutation: the loose
  // version was satisfied by the grid row's detail alone, so gutting the
  // deferral sentence went through this layer and through the merge, and only
  // the batch's version check noticed.
  ok(/wants a past tense, and you do not have one yet/i.test(text),
    `nothing says that il y a for ago needs a tense the learner does not have. ${PAST_UNIT} gets no hand-off.`);
});

test('« il y a » is respelled one way across the whole lesson', { skip: noLesson }, () => {
  // FOUND BY MUTATION, AND NOTHING ANYWHERE CAUGHT IT. Both published spellings
  // are CLEAN through the shared checker and a variant is not a violation, so no
  // guard in this band had a reason to compare two respellings of one phrase.
  // It matters here because the lesson's trap is that those three words have two
  // jobs: two spellings would read as marking the two jobs.
  const IL_Y_A = 'EEL EE AH';
  const holders = seed.items.filter((i) => L!.itemIds.includes(i.id) && /(?<![\p{L}\p{N}-])il y a(?![\p{L}\p{N}'’-])/iu.test(i.fr));
  ok(holders.length >= 4, `${holders.length} of this lesson's rows hold « il y a » and it is built on more than four`);
  for (const r of holders) {
    ok(r.respell, `${r.id} holds « il y a » and has no respelling`);
    ok(r.respell!.toUpperCase().includes(IL_Y_A),
      `${r.id} respells « il y a » as ${JSON.stringify(r.respell)} and this lesson uses ${IL_Y_A} everywhere`);
  }
});

test('the reading passage is one block and holds no compound tense', { skip: noLesson }, () => {
  const r = sec('s17-reading') as { text?: string; glossary?: unknown[]; questionsInModal?: boolean; questions?: unknown[] };
  ok(r.text, 's17-reading has no text');
  ok(!r.text!.includes('\n'), 'PassagePage splits on sentence boundaries and an authored newline is silently discarded');
  ok(!fires(COMPOUND_SHAPE, r.text!), 'the reading passage holds a compound tense');
  ok(!fires(FUTUR_PROCHE_SHAPE, r.text!), 'the reading passage holds a futur proche');
  ok(!fires(DEPUIS_PAST_SHAPE, r.text!), 'the reading passage pairs depuis with a past tense');
  // A glossary with no questionsInModal never reaches the glossary renderer.
  ok((r.glossary ?? []).length > 0);
  strictEqual(r.questionsInModal, true);
  ok((r.questions ?? []).length > 0);
});

/* ══════════════════════════════════════════════════════════════════════════
 *  THE NEIGHBOURS' GROUND
 * ═══════════════════════════════════════════════════════════════════════ */

test('the futur proche is not taught, and a2.19 is named', { skip: noLesson }, () => {
  for (const s of ['Je vais partir dans dix minutes.', 'On va manger dans une heure.']) {
    ok(fires(FUTUR_PROCHE_SHAPE, s), `the shape does not fire on ${JSON.stringify(s)}`);
  }
  for (const s of ['Je vais à Paris.', 'Je pars dans dix minutes.', 'On va bien.']) {
    ok(!fires(FUTUR_PROCHE_SHAPE, s), `the shape fires on ${JSON.stringify(s)}`);
  }
  for (const line of strings(L!.sections).concat(strings(L!.sheets ?? []), strings(L!.terms ?? {}), [L!.intro ?? ''])) {
    ok(!fires(FUTUR_PROCHE_SHAPE, line), `the futur proche reached a screen: ${JSON.stringify(line)}`);
  }
  ok(hasPhrase(learnerText(), FUTURE_UNIT), `${FUTURE_UNIT} is never named and this lesson teaches dans with the present instead of it`);
});

test('no place sense of en or dans on a production surface, and a2.04 is named', { skip: noLesson }, () => {
  for (const s of ['Je vais en France.', 'Le livre est dans le sac.', 'Elle habite dans cette maison.']) {
    ok(fires(PLACE_SHAPE, s), `the shape does not fire on ${JSON.stringify(s)}`);
  }
  // THE FIVE CARDS THIS LESSON DISPLAYS. The first version of this shape fired
  // on two of them, because `une` is an article and `heure` is three letters.
  for (const s of ['dans une heure', 'en une heure', 'Je pars dans dix minutes.', 'Le film commence dans une heure.', 'Il pleut pendant la nuit.']) {
    ok(!fires(PLACE_SHAPE, s), `the shape fires on ${JSON.stringify(s)}, which is this lesson's own card`);
  }
  const PRODUCTION = new Set(['cardDeck', 'flashcards', 'practice', 'dictation', 'groupDrill', 'trapDrill', 'quiz', 'reviewDeck', 'scenario']);
  for (const s of L!.sections) {
    if (!PRODUCTION.has(s.type)) continue;
    const sid = (s as { id?: string }).id ?? '';
    for (const line of display(s)) ok(!fires(PLACE_SHAPE, line), `${sid} drills a place sense: ${JSON.stringify(line)}`);
  }
  for (const r of myRows()) ok(!fires(PLACE_SHAPE, r.fr), `${r.id} carries a place sense of en or dans`);
  ok(hasPhrase(learnerText(), PLACE_UNIT), `${PLACE_UNIT} handed both temporal senses here by name and is never credited`);
});

test('the clock and the calendar are used and not re-taught', { skip: noLesson }, () => {
  const text = learnerText();
  for (const w of ['et quart', 'et demie', 'moins le quart', 'midi', 'minuit', 'Quelle heure est-il']) {
    ok(!hasPhrase(text, w), `${JSON.stringify(w)} is on a learner surface and it is ${CLOCK_UNIT}'s`);
  }
  ok(hasPhrase(text, CLOCK_UNIT), `${CLOCK_UNIT} is the prerequisite and is never named`);
  ok(hasPhrase(text, MONTH_UNIT), `${MONTH_UNIT} owns en in front of a month, a third sense of a word this lesson teaches, and is never named`);
});

/* ══════════════════════════════════════════════════════════════════════════
 *  THE pour DECISION
 * ═══════════════════════════════════════════════════════════════════════ */

test('pour is named exactly once, in the sheet, and taught nowhere', { skip: noLesson }, () => {
  for (const s of ['valide pour six mois', 'Je pars pour deux semaines.']) {
    ok(fires(POUR_TIME_SHAPE, s), `the shape does not fire on ${JSON.stringify(s)}`);
  }
  for (const s of ['Nous avons roulé pendant six heures pour arriver à la mer.', 'pour toi']) {
    ok(!fires(POUR_TIME_SHAPE, s), `the shape fires on ${JSON.stringify(s)}`);
  }
  // EXACTLY ONE, so both directions fail: dropping it and promoting it to a
  // sixth taught word are both caught.
  strictEqual(countShape(POUR_TIME_SHAPE, learnerText()), 1,
    'pour with a duration is named once, in the reference sheet, and this count has moved');
  // AND IT IS IN THE SHEET rather than in any section.
  for (const s of L!.sections) {
    const sid = (s as { id?: string }).id ?? '';
    for (const line of strings(s)) ok(!fires(POUR_TIME_SHAPE, line), `${sid} carries pour with a duration`);
  }
  ok(strings(L!.sheets ?? []).some((line) => fires(POUR_TIME_SHAPE, line)), 'the one mention of pour is not in the sheet');
  // It is not one of the five, and it is in no card.
  strictEqual(GRID_ROWS.length, 5);
  ok(!GRID_ROWS.some(([p]) => p === 'pour'));
  for (const r of myRows()) ok(!fires(POUR_TIME_SHAPE, r.fr), `${r.id} carries pour with a duration`);
});

/* ══════════════════════════════════════════════════════════════════════════
 *  THE RESPELLINGS
 * ═══════════════════════════════════════════════════════════════════════ */

test('every authored respelling is clean through the real checker', { skip: noLesson }, () => {
  for (const r of myRows()) {
    ok(r.respell, `${r.id} has no respelling`);
    ok(!hasPlainNasalFor(r.fr, r.respell!), `${r.id} "${r.fr}" respelled ${JSON.stringify(r.respell)} is flagged`);
    ok(!r.respell!.includes('‿'), `${r.id} carries U+203F, which draws as a low underscore on a Pixel 6`);
  }
});

test('the three nasals are settled, one spelling each, and asserted by name', { skip: noLesson }, () => {
  // pendant, dans and en appear constantly in this lesson and all three carry a
  // nasal. The values are asserted BY NAME as well as through the checker,
  // because invariants §3 records that the checker cannot see a word-internal
  // nasal and a build that trusts it alone ships a wrong value.
  const settled: [string, string][] = [
    ['fr.sons.mots-essentiels.028', 'pahⁿ-DAHⁿ'],
    ['fr.sons.mots-essentiels.013', 'DAHⁿ'],
    ['fr.sons.mots-essentiels.088', 'AHⁿ'],
    ['fr.sons.jours-et-mois.080', 'DAHⁿ ZÜN UHR'],
    ['fr.sons.jours-et-mois.083', 'pahⁿ-DAHⁿ TÜN UHR'],
    ['fr.sons.questions.040', 'duh-PWEE KAHⁿ'],
  ];
  for (const [id, value] of settled) {
    const row = byId.get(id);
    ok(row, `${id} is repaired by this lesson and is not in the seed`);
    strictEqual(row!.respell, value, `${id} respelling`);
    ok(!hasPlainNasalFor(row!.fr, row!.respell!), `${id} is still flagged`);
  }
  // AND THE HALF-REPAIR IS STILL FLAGGED, which is what makes the repair a
  // repair rather than a rewrite. `pendant` holds TWO nasals and the checker
  // sees BOTH, because each n is followed by a hyphen or by nothing rather than
  // by a letter — which is where corrections §14.1's `lentement` differs.
  ok(hasPlainNasalFor('pendant', 'pahn-DAHN'), 'the stored value was not flagged, so nothing needed repairing');
  ok(hasPlainNasalFor('pendant', 'pahⁿ-DAHN'), 'repairing only the first nasal leaves a clean-looking wrong value');
  ok(hasPlainNasalFor('pendant', 'pahn-DAHⁿ'), 'repairing only the second nasal leaves a clean-looking wrong value');
  ok(!hasPlainNasalFor('pendant', 'pahⁿ-DAHⁿ'), 'the repaired value is flagged');
});

test('the problème false positive, asserted as a negative', { skip: noLesson }, () => {
  // a2.04 measured that `hasPlainNasal`'s first branch has no rescue path, so a
  // real /m/ after a two-letter house vowel cannot pass, and listed five nouns
  // it expected to bite next. `problème` is not one of them and is the same
  // shape, so the predictor is the SHAPE rather than the list. The day the
  // checker improves, this goes red and the workaround can go.
  ok(hasPlainNasalFor('problème', 'proh-BLEHM'), 'the checker no longer flags proh-BLEHM and the workaround can go');
  ok(!hasPlainNasalFor('problème', 'proh-BLEM'), 'the checker now flags proh-BLEM, which is the value this lesson shipped');
  const row = myRows().find((r) => r.fr === 'Il y a un problème.');
  ok(row, 'the trap pair has lost its existence sentence');
  ok(row!.respell!.includes('proh-BLEM'), `${row!.id} does not carry the bare-vowel spelling`);
  ok(!row!.respell!.includes('BLEHM'), `${row!.id} carries the flagged spelling`);
});

/* ══════════════════════════════════════════════════════════════════════════
 *  THE DICTÉE, THE QUIZ AND THE LAYOUT BUDGETS
 * ═══════════════════════════════════════════════════════════════════════ */

test('every dictée target spells in LETTERS mode', { skip: noLesson }, () => {
  const d = sec('s19-dictation') as { itemIds?: string[] };
  const ids = d.itemIds ?? [];
  strictEqual(ids.length, 7);
  for (const id of ids) {
    const row = byId.get(id);
    ok(row, `${id} is a dictée target and resolves to nothing`);
    strictEqual(dicteeMode(row!.fr), 'letters', `${id} "${row!.fr}" is ${letterCount(row!.fr)} letters and spells in WORD mode`);
    ok((row!.drills ?? []).includes('dictation'), `${id} carries no dictation drill`);
  }
  // NO ROW IN WORD MODE CARRIES THE DRILL.
  for (const r of myRows()) {
    if (dicteeMode(r.fr) === 'words') ok(!(r.drills ?? []).includes('dictation'), `${r.id} spells in WORD mode and carries a dictation drill`);
  }
  // THE TWO SENTENCES THAT FIT ARE THE TRAP PAIR, and they are the only two.
  const sentences = ids.map((id) => byId.get(id)!).filter((r) => /[.!?]$/.test(r.fr));
  strictEqual(sentences.length, 2, 'the only two sentences short enough to spell are the trap pair');
  deepStrictEqual(sentences.map((r) => r.fr).sort(), ['Il y a deux jours.', 'Il y a un problème.']);
});

test('the exam is at most half mcq, every question has a why and a real ref', { skip: noLesson }, () => {
  const quiz = L!.sections.find((s) => s.type === 'quiz')!;
  const qs = quizQuestions(quiz);
  strictEqual(qs.length, 30);
  const mcq = qs.filter((q) => q.format === 'mcq').length;
  ok(mcq <= qs.length / 2, `${mcq} of ${qs.length} are mcq`);
  const ids = new Set(L!.sections.map((s) => (s as { id?: string }).id));
  for (const q of qs) {
    ok(q.why, `a question has no why: ${JSON.stringify(q.q)}`);
    ok(q.ref && ids.has(q.ref), `a question refs ${JSON.stringify(q.ref)}, which is no section`);
  }
  // AT MOST ONE EAR QUESTION, and its two options are nothing alike.
  const ear = qs.filter((q) => q.format === 'listenChoose');
  ok(ear.length <= 1, `${ear.length} listenChoose questions and the distinctions here are semantic`);
  for (const q of ear) {
    const opts = (q.opts ?? []) as string[];
    // `dans une heure` against `en une heure` may never be an ear question:
    // both pull an n across into the vowel and differ by one consonant.
    ok(!(opts.some((o) => hasPhrase(o, 'dans une heure')) && opts.some((o) => hasPhrase(o, 'en une heure'))),
      'an ear question offers dans une heure against en une heure');
  }
  // Every free-text question accepts the answer it displays, through the real
  // matchesAccept rather than by comparing strings.
  for (const q of qs) {
    if (q.format !== 'typeIn' && q.format !== 'errorSpot') continue;
    ok(q.answer, 'a free-text question has no answer');
    ok(matchesAccept(q.answer!, q.accept ?? []), `${JSON.stringify(q.q)} displays ${JSON.stringify(q.answer)} and does not accept it`);
  }
  // Correct answers do not cluster.
  const closed = qs.filter((q) => typeof q.correct === 'number');
  const slots = new Map<number, number>();
  for (const q of closed) slots.set(Number(q.correct), (slots.get(Number(q.correct)) ?? 0) + 1);
  for (const [slot, n] of slots) ok(n / closed.length <= 0.4, `slot ${slot} holds ${n} of ${closed.length} closed answers`);
});

test('each round leads on a different trigger, and every trigger leads one', { skip: noLesson }, () => {
  const quiz = L!.sections.find((s) => s.type === 'quiz') as unknown as { rounds: { id: string; targets: string[] }[] };
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

test('both trapDrills are stepped, and the audio step can play its own cards', { skip: noLesson }, () => {
  const traps = L!.sections.filter((s) => s.type === 'trapDrill') as unknown as {
    id: string; swipe?: boolean; say?: string; size?: string;
    steps?: { kind: string; gate?: boolean }[]; audio?: { recordingId?: string }; cards?: { fr: string }[];
  }[];
  strictEqual(traps.length, 2);
  const takes = new Map((L!.audio?.recorded ?? []).map((r) => [r.id, r.clipIds ?? []]));
  for (const t of traps) {
    deepStrictEqual((t.steps ?? []).map((s) => s.kind), ['rule', 'cards', 'audio', 'drill'], `${t.id} steps`);
    strictEqual(t.swipe, true, `${t.id} has no swipe`);
    ok(t.say, `${t.id} has no say`);
    // `size` COMES OFF a stepped trapDrill. The ledger's sweep says so and
    // lesson-contract.test.ts does not check it.
    strictEqual(t.size, undefined, `${t.id} carries a size and the stepped branch sizes off steps.length`);
    ok((t.steps ?? []).some((s) => s.kind === 'drill' && s.gate), `${t.id} drill step is not gated`);
    const clips = takes.get(t.audio?.recordingId ?? '');
    ok(clips, `${t.id} points at a take the lesson does not brief`);
    // THE CARDS STEP'S LABEL COUNTS THE CARDS. Found on a Pixel 6 and by
    // nothing else: the label read THREE CARDS over four dots, because the
    // card set grew and the label did not. Nothing in the schema, the density
    // validator or lesson-contract.test.ts compares the two.
    const WORD = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight'];
    const cardsStep = (t.steps ?? []).find((x) => x.kind === 'cards') as { label?: string } | undefined;
    const n = (t.cards ?? []).length;
    ok(cardsStep?.label && hasPhrase(cardsStep.label, WORD[n]!),
      `${t.id}'s cards step is labelled ${JSON.stringify(cardsStep?.label)} and it holds ${n} cards`);
    ok(hasPhrase(t.say ?? '', WORD[n]!), `${t.id}'s say line does not count its ${n} cards`);
    for (const c of t.cards ?? []) {
      ok(clips!.includes(c.fr), `${t.id}'s audio step plays ${JSON.stringify(c.fr)} and its take does not contain it`);
      // AND EVERY CARD'S `fr` IS FRENCH. The audio step plays it through a
      // French voice, so a card cannot use that field for an English gloss.
      ok(!/^[A-Za-z ,.'"-]+$/.test(c.fr) || /[àâäéèêëîïôöûüùçœ]/i.test(c.fr) || /\b(je|tu|il|elle|on|nous|vous|ils|depuis|pendant|dans|en)\b/i.test(c.fr),
        `${t.id} has a card whose fr looks like English: ${JSON.stringify(c.fr)}`);
    }
  }
});

test('mission titles fit the hub row, and no section shows more than three chips', { skip: noLesson }, () => {
  for (const s of L!.sections) {
    const t = (s as { title?: string }).title ?? '';
    ok(t.length <= 27, `${JSON.stringify(t)} is ${t.length} characters and the hub row cuts at 27`);
    const chips = (s as { terms?: string[] }).terms ?? [];
    ok(chips.length <= 3, `${(s as { id?: string }).id} declares ${chips.length} chips and the renderer shows three`);
    for (const c of chips) ok((L!.terms ?? {})[c], `${(s as { id?: string }).id} names an unknown term ${JSON.stringify(c)}`);
    // THE ROW IS 37 CHARACTERS WIDE, measured by a2.03 on a Pixel 6.
    const w = chips.reduce((n, c) => n + ((L!.terms ?? {})[c]?.term.length ?? 0), 0) + Math.max(0, chips.length - 1) * 2;
    ok(w <= 37, `${(s as { id?: string }).id} chip row is ${w} characters and the budget is 37`);
  }
  const used = new Set(L!.sections.flatMap((s) => (s as { terms?: string[] }).terms ?? []));
  const orphans = Object.keys(L!.terms ?? {}).filter((k) => !used.has(k));
  deepStrictEqual(orphans, [], 'terms declared and opened by no section');
});

test('the reference sheet is at most three columns and holds no cheatSheet', { skip: noLesson }, () => {
  const sheets = L!.sheets ?? [];
  strictEqual(sheets.length, 1);
  strictEqual(sheets[0]!.id, 'sheet.a2.18.temps');
  for (const s of sheets[0]!.sections ?? []) {
    ok(s.type !== 'cheatSheet', 'a cheatSheet inside a reference sheet draws its title and nothing else');
    const cols = (s as { cols?: string[] }).cols;
    if (cols) ok(cols.length <= 3, `a sheet table has ${cols.length} columns and a2.04 measured four clipping on a Pixel 6`);
  }
  // AND IT IS REACHABLE. A declared sheet nothing links is a lookup nobody opens.
  const linked = L!.sections.some((s) => (s as { sheetId?: string }).sheetId === sheets[0]!.id);
  ok(linked, 'the reference sheet is declared and no section links it');
});

/* ══════════════════════════════════════════════════════════════════════════
 *  THE CORPUS, THE SEED AND a1.03
 * ═══════════════════════════════════════════════════════════════════════ */

test('the authored rows: 29, in the block, in one theme, no headword, no gender', { skip: noLesson }, () => {
  const rows = myRows();
  strictEqual(rows.length, 29);
  for (const r of rows) {
    strictEqual(r.theme, THEME, `${r.id} is in theme ${r.theme}`);
    strictEqual(r.level, 'a2', `${r.id} is level ${r.level}`);
    ok(r.kind !== 'word', `${r.id} is a headword and this lesson authors phrases and sentences only`);
    ok(!(r as { gender?: string }).gender, `${r.id} carries a gender and would join a1.03's ending population`);
    ok(r.en && r.ipa && r.respell, `${r.id} is missing a display field`);
  }
});

test('every declared item is on a screen or in a tranche, and nothing is a ghost', { skip: noLesson }, () => {
  const drawn = new Set<string>();
  const collect = (v: unknown): void => {
    if (typeof v === 'string') { if (v.startsWith('fr.')) drawn.add(v); return; }
    if (Array.isArray(v)) { for (const x of v) collect(x); return; }
    if (v && typeof v === 'object') for (const x of Object.values(v)) collect(x);
  };
  collect(L!.sections); collect(L!.terms ?? {}); collect(L!.drills ?? []);
  const printed = strings(L!.sections).concat(strings(L!.terms ?? {})).join('\n');
  for (const id of L!.itemIds) {
    const row = byId.get(id);
    ok(row, `${id} is an itemId and resolves to nothing in the seed`);
    if (hasPhrase(printed, row!.fr)) drawn.add(id);
  }
  const released = new Set((L!.deckTranche ?? []).flat());
  const orphan = L!.itemIds.filter((id) => !drawn.has(id) && !released.has(id));
  deepStrictEqual(orphan, [], 'declared items on no screen and in no tranche');
  const ghosts = [...released].filter((id) => !L!.itemIds.includes(id));
  deepStrictEqual(ghosts, [], 'tranche ids that are not itemIds');
  // ONE TRANCHE PER ACT.
  strictEqual((L!.deckTranche ?? []).length, (L!.acts ?? []).length);
  // Every released row can be served as a flashcard.
  for (const id of released) ok((byId.get(id)!.drills ?? []).includes('flashcard'), `${id} is released to the hub with no flashcard drill`);
});

test('no duplicate fr inside the theme, computed the way flashhub-coverage does', { skip: noLesson }, () => {
  // NOT SCOPED TO THIS LESSON. Two rows sharing an fr in one theme is one card
  // served twice whoever authored them, and v1 of this lesson shipped exactly
  // that: it authored « Je suis ici depuis six mois. » twice on purpose, and
  // the merge refused it.
  const strip = (s: string) => s.replace(/^(le |la |les |l'|l’|un |une |des |du |de la )/i, '').toLowerCase().trim();
  const inTheme = seed.items.filter((i) => i.theme === THEME);
  const byFr = new Map<string, string[]>();
  for (const i of inTheme) byFr.set(strip(i.fr), [...(byFr.get(strip(i.fr)) ?? []), i.id]);
  const dupes = [...byFr.entries()].filter(([, ids]) => ids.length > 1);
  deepStrictEqual(dupes, [], `duplicate fr inside ${THEME}`);
});

test('this lesson does not move a1.03\'s ending population', { skip: noLesson }, () => {
  // a2.04's ledger amendment §0: a1.03 measures it off THE SEED and a CARRY is
  // what puts a row there, so importing a gendered noun moves a1.03's printed
  // figures even though Postgres already had the row. This lesson imports none.
  const pop = endingPopulation(seed.items as never);
  strictEqual(pop.length, 1890);
  const mine = new Set(myRows().map((r) => r.id));
  const fromHere = pop.filter((p: { id: string }) => mine.has(p.id));
  deepStrictEqual(fromHere, [], 'a row of this lesson is in a1.03\'s ending population');
});

test('the reframe is verbatim and carried by at least six sections', { skip: noLesson }, () => {
  strictEqual(L!.reframe, REFRAME);
  ok(REFRAME.trim().split(/\s+/).length <= 14, 'the reframe has to survive recall mid-utterance');
  const carrying = L!.sections.filter((s) => strings(s).some((x) => x.includes(REFRAME))).length;
  ok(carrying >= 6, `the reframe is carried by ${carrying} sections and the good lessons use six to eight`);
  ok(countPhrase(learnerText(), REFRAME) >= 7);
});

test('the scenario gives every turn a userEn and two alternatives', { skip: noLesson }, () => {
  const sc = sec('s18-scenario') as { turns?: { user?: string; userEn?: string; alts?: unknown[] }[] };
  ok((sc.turns ?? []).length >= 5);
  for (const [i, t] of (sc.turns ?? []).entries()) {
    ok(t.userEn, `turn ${i} has no userEn`);
    ok((t.alts ?? []).length >= 2, `turn ${i} has fewer than two alternatives`);
    for (const line of strings(t)) {
      ok(!fires(COMPOUND_SHAPE, line), `turn ${i} offers a compound tense: ${JSON.stringify(line)}`);
      ok(!fires(DEPUIS_PAST_SHAPE, line), `turn ${i} offers ${JSON.stringify(line)}`);
    }
  }
});

test('commonErrors carries swipe, or it draws a blank screen', { skip: noLesson }, () => {
  const e = sec('s11-errors') as { swipe?: boolean; errors?: unknown[] };
  strictEqual(e.swipe, true);
  ok((e.errors ?? []).length >= 5);
});

test('the lesson and the density validator are clean', { skip: noLesson }, () => {
  const issues = validateLesson(L!);
  strictEqual(issues.length, 0, formatIssues(issues));
  const d = validateDensity(L!);
  strictEqual(d.length, 0, formatDensity(d));
});

test('no em dash, no banned word and no tie glyph on a learner surface', { skip: noLesson }, () => {
  const text = display(L!.sections).concat(
    display(L!.sheets ?? []), display(L!.terms ?? {}), [L!.intro ?? ''],
    display(L!.overview ?? {}), display(L!.acts ?? []), display(L!.drills ?? []),
    myRows().flatMap((r) => [r.fr, r.en ?? '', r.notes ?? '']),
  ).join('\n');
  for (const bad of ['—', '–', '‿']) ok(!text.includes(bad), `${JSON.stringify(bad)} is on a learner surface`);
  for (const bad of ['honest', 'honesty', 'honestly']) ok(!hasPhrase(text, bad), `${JSON.stringify(bad)} is banned from authored content`);
  for (const j of ['participle', 'participles', 'compound tense', 'present perfect', 'third person', 'deictic', 'aspect', 'calque']) {
    ok(!hasPhrase(text, j), `the jargon ${JSON.stringify(j)} is on a learner surface`);
  }
  // THE RATIO, NOT A BAN. a2.17 §8: the plain phrase must outnumber the
  // technical one, which lets overview.titleEn stay the unit's own name.
  const plain = countPhrase(text, 'time word') + countPhrase(text, 'small word') + countPhrase(text, 'the word');
  const technical = countPhrase(text, 'preposition');
  ok(technical <= plain, `the technical word appears ${technical} times and the plain phrase ${plain}`);
});

test('intro is present, long enough to matter, and free of jargon', { skip: noLesson }, () => {
  // `intro` is drawn on the lesson overview card AND on the lesson cover, and
  // a2.11 shipped grammar jargon there in v1 because every guard in the band
  // walked sections, sheets and terms and not this.
  ok(L!.intro && L!.intro.length >= 100, 'intro is missing or too short');
  for (const j of ['participle', 'compound tense', 'present perfect', 'third person']) {
    ok(!hasPhrase(L!.intro!, j), `intro holds the jargon ${JSON.stringify(j)}`);
  }
  ok(hasPhrase(L!.intro!, 'depuis') || /still true/i.test(L!.intro!), 'intro does not name what this lesson is about');
});
