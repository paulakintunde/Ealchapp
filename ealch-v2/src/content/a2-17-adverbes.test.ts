// a2.17.l1 "Les adverbes": the assertions that keep this lesson true.
//
// Modelled on a2-16-beau-nouveau.test.ts. Everything here runs the REAL app
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
// IT IS ALSO SCOPED TO ITS OWN ID BLOCK. Ledger §a2.16-1: a2.03's test filtered
// on `id.startsWith('fr.a2.adjectifs-essentiels.')` and meant "the rows a2.03
// authored", which was the same set only while a2.03 was alone in the namespace;
// four of its tests went red the moment a2.16's merge landed. This file opens
// `fr.a2.adverbes-essentiels` and is the only lesson in it today, so the trap is
// live here. `MY_BLOCK` below is the range, not the prefix. The duplicate-`fr`
// check is deliberately NOT scoped: flashhub-coverage counts two rows sharing an
// `fr` in one theme as one card served twice, whoever authored them.
//
// ── What this file is actually guarding ────────────────────────────────────
//
//   THE MIDDLE STEP GOING MISSING. The whole lesson is that the word for how is
//   built off the FEMININE, and the corpus proves it in respellings somebody
//   else published: the feminine is the masculine plus one consonant and the
//   long word is the feminine plus -MAHⁿ, three times over with three DIFFERENT
//   consonants. A later author who softens the chain to "adjective plus -ment"
//   has not simplified anything, they have deleted the reason the rule is
//   self-checking. Asserted as ARITHMETIC on the respellings, not as strings.
//   THE CHAIN BEING SPLIT ACROSS SECTIONS. The brief asks for it in ONE section
//   for at least three adjectives, "asserted as a chain, not as three separate
//   strings", because split up it is a vocabulary list of long words.
//   -MAHN ARRIVING BACK. 499 rows in this corpus spell the suffix with a plain
//   n and 79 with the superscript, and the sons themes are the ones that get it
//   right. This lesson repairs the ten rows it displays and settles the
//   convention for the level. Every -ment word it puts on a screen is asserted.
//   THE THREE IRREGULARS BEING REGULARISED. bien, mal and vite are the three
//   commonest adverbs in the language and the rule reaches none of them. They
//   are asserted BY NAME, and so is the absence of bonnement.
//   bon ARRIVING AFTER A VERB. English allows « he sings good » in speech and
//   French does not allow it at all, so the learner gets no signal.
//   THE TWO SPELLINGS BEING SEPARATED, OR AN EAR QUESTION BEING ASKED ABOUT
//   THEM. -emment and -amment are ONE SOUND, so a listenChoose that differed
//   only there would have no correct answer. The pair has to be on one screen
//   and the spelling has to be tested in the dictée.
//   THE GENERALISATION QUESTION QUIETLY DISAPPEARING. Two adjectives this lesson
//   never lists are built into two real French words in the exam. Both the
//   absence AND the questions are asserted: a test that only checked the absence
//   would pass on a lesson that had dropped them.
//   A COMPOUND TENSE ARRIVING FOUR LESSONS EARLY. a2.05 owns it. The one place
//   the form appears is the deferral line, which the brief asks for by name.
//   mieux ARRIVING AT ALL. It is the comparative of bien, bien is in this
//   lesson, and a2.08 is thirty seq positions away.
//   A ROLE-PLAY TURN WITH ONE ANSWER. `scenario.logic.test.ts` enforces two
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
import { dicteeMode } from './dictee.logic.ts';
import { matchesAccept } from './answer.logic.ts';
import { namesUnitLabel } from './unit-label.ts';

const here = dirname(fileURLToPath(import.meta.url));
const seed = JSON.parse(readFileSync(resolve(here, 'seed.json'), 'utf8')) as {
  version: number; items: Item[]; lessons: Lesson[];
  units: { id: string; title?: string; sub?: string; canDo?: string; seq?: string | number; lessonIds?: string[]; prereqUnitIds?: string[] }[];
};

const L = seed.lessons.find((l) => l.id === 'a2.17.l1');
const noLesson = !L;
const byId = new Map(seed.items.map((i) => [i.id, i] as const));

/** THE BLOCK, NOT THE PREFIX. Ledger §a2.16-1: a namespace filter means "my
 *  rows" only while one lesson is in the namespace, and this build opened it. */
const MY_BLOCK = { from: 'fr.a2.adverbes-essentiels.001', to: 'fr.a2.adverbes-essentiels.040' };
const isMine = (id: string) => id >= MY_BLOCK.from && id <= MY_BLOCK.to;
const myRows = () => seed.items.filter((i) => isMine(i.id));

const THEME = 'adverbes-essentiels';

/* ─── The shape of the lesson ──────────────────────────────────────────── */

const SPINE = [
  's01-scene', 's02-goals', 's03-after',
  's04-place', 's05-order', 's06-known',
  's07-chain', 's08-hear', 's09-payoff', 's10-already', 's11-unseen', 's12-reading', 's13-deck',
  's14-irregular', 's15-bonbien', 's16-amment', 's17-errors',
  's18-scenario', 's19-dictation', 's20-speak', 's21-review',
  's22-progress', 's23-quiz', 's24-roundup',
];

/** THE OWNS ACT IS THE HEAVIEST, ALONE, AND THE PARADIGM ACT IS SMALLER.
 *  Three missions on where the word goes, SEVEN on where it comes from.
 *  Placement is one fact with no internal structure and the corpus measurement
 *  is exceptionless; everything worth thirty minutes is in act 3. If that ever
 *  inverts, the position has taken the lesson over. Doctrine §B.5. */
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

/** THE REFRAME, VERBATIM, AND THE VERB IS THE POINT.
 *
 *  The brief's candidate was "Take the feminine, add -ment" and one word
 *  changed. `Take` describes an operation on the page; `say` describes one in
 *  the mouth, and the mouth is where the consonant the long word keeps actually
 *  lives. A learner who TAKES `lente` and adds the ending gets the right
 *  letters; a learner who SAYS it hears the t arrive and knows, half a second
 *  later, whether they built it off the right form. */
const REFRAME = 'Say the feminine, then add -ment.';
const REFRAME_USES = 9;
const REFRAME_SECTIONS = 7;

/** THE CHAIN, AND THE ARITHMETIC UNDER IT.
 *
 *  Written out by hand rather than imported. Two of the nine cells are rows this
 *  build authored (`lente`, `douce`) and SEVEN are somebody else's published
 *  data; for `sérieux` all three are, and the middle one is a2.03's own card. */
const CHAIN: { adj: string; masc: [string, string]; fem: [string, string]; adverb: [string, string]; consonant: string }[] = [
  { adj: 'lent', masc: ['lent', 'LAHⁿ'], fem: ['lente', 'LAHⁿT'], adverb: ['lentement', 'lahⁿt-MAHⁿ'], consonant: 'T' },
  { adj: 'doux', masc: ['doux', 'DOO'], fem: ['douce', 'DOOS'], adverb: ['doucement', 'doos-MAHⁿ'], consonant: 'S' },
  { adj: 'sérieux', masc: ['sérieux', 'say-RYUH'], fem: ['sérieuse', 'say-RYUHZ'], adverb: ['sérieusement', 'say-ryuhz-MAHⁿ'], consonant: 'Z' },
];
/** THE SUFFIX, SETTLED FOR THE LEVEL. Invariants §3 requires the superscript and
 *  499 published rows break it; the 79 that do not include every respelled
 *  SENTENCE in the sons themes, and three of them are imported by this lesson. */
const MENT = 'MAHⁿ';

const CHAIN_SECTION = 's07-chain';
const PLACE_SECTION = 's04-place';
const PAYOFF_SECTION = 's09-payoff';
const AMMENT_SECTION = 's16-amment';
const IRREGULAR_SECTION = 's14-irregular';
const BON_BIEN_SECTION = 's15-bonbien';
const ORDER_SECTION = 's05-order';
const UNSEEN_SECTION = 's11-unseen';
const QUIZ_SECTION = 's23-quiz';
const SCENE_SECTION = 's01-scene';

const IRREGULARS = ['bien', 'mal', 'vite'];
/** The two adjectives this lesson never lists, and the two real French words
 *  they build. Both adverbs exist in Postgres and neither is imported. */
const UNSEEN = [
  { adj: 'parfait', fem: 'parfaite', adverb: 'parfaitement' },
  { adj: 'certain', fem: 'certaine', adverb: 'certainement' },
];
/** a2.08's, thirty seq positions away, and tempting because bien is here. */
const RESERVED = ['mieux', 'plus vite', 'le mieux', 'moins vite'];

const ROWS_AUTHORED = 24;
const ITEM_COUNT = 52;
const SECTION_COUNT = 24;
const QUESTION_COUNT = 30;
const ROUND_COUNT = 5;
const DICTEE_COUNT = 21;
const REPAIR_COUNT = 10;
const SUPERSCRIPTS = 54;
const SEEN_NASALS = 39;
const BLIND_NASALS = 15;

/* ─── Helpers, all boundary-aware ──────────────────────────────────────── */

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
function display(v: unknown, out: string[] = []): string[] {
  if (typeof v === 'string') out.push(v);
  else if (Array.isArray(v)) for (const x of v) display(x, out);
  else if (v && typeof v === 'object') {
    for (const [k, x] of Object.entries(v)) if (!MACHINE_KEYS.has(k)) display(x, out);
  }
  return out;
}
/** NEVER build a regex out of a search term with `\b`: it is ASCII-only in
 *  JavaScript and returns zero on a trailing accent, which looks exactly like an
 *  absence. This build's own pre-flight probe fell into it and undercounted the
 *  placement evidence by four sentences. Invariants §0. */
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
const sec = (id: string) => (L?.sections ?? []).find((s) => (s as { id?: string }).id === id);
const quiz = () => (L?.sections ?? []).find((s) => s.type === 'quiz');
const qs = () => (L ? quizQuestions(quiz()!) : []);
const learner = () => [
  ...strings(L?.sections ?? []), ...strings(L?.sheets ?? []), ...strings(L?.terms ?? {}),
  ...strings(L?.acts ?? []), ...strings(L?.drills ?? []),
  L?.intro ?? '', ...strings(L?.overview ?? {}),
];

/* ══════════════════════════════════════════════════════════════════════════
 *  THE LESSON EXISTS AND IS THE SHAPE IT CLAIMS
 * ═══════════════════════════════════════════════════════════════════════ */

test('a2.17.l1 is in the seed and validates', () => {
  ok(!noLesson, 'a2.17.l1 is not in seed.json');
  const issues = validateLesson(L!, L!.id);
  strictEqual(issues.length, 0, formatIssues(issues));
});

test('the spine is in order', () => {
  if (noLesson) return;
  deepStrictEqual(L!.sections.map((s) => (s as { id?: string }).id), SPINE);
  strictEqual(L!.sections.length, SECTION_COUNT);
});

test('the acts claim every section, once, in the sizes the doctrine asks for', () => {
  if (noLesson) return;
  const acts = L!.acts ?? [];
  deepStrictEqual(acts.map((a) => ({ id: a.id, n: a.sections.length })), ACTS);
  const claimed = acts.flatMap((a) => a.sections);
  deepStrictEqual([...claimed].sort(), [...SPINE].sort());
  strictEqual(new Set(claimed).size, claimed.length, 'a section is claimed by two acts');
});

test('the Owns act outweighs the paradigm act', () => {
  if (noLesson) return;
  const owns = (L!.acts ?? []).find((a) => a.id === OWNS_ACT)!;
  const para = (L!.acts ?? []).find((a) => a.id === PARADIGM_ACT)!;
  ok(owns.sections.length > para.sections.length,
    `the paradigm act has ${para.sections.length} missions and the Owns act has ${owns.sections.length}. `
    + 'Doctrine §B.5: if the paradigm outweighs the Owns, the wrong lesson was built.');
});

test('the reframe is verbatim, is a rule rather than a translation, and is carried', () => {
  if (noLesson) return;
  strictEqual(L!.reframe, REFRAME);
  ok(/^Say the feminine/.test(L!.reframe!),
    'the reframe must begin "Say the feminine". The brief\'s candidate said "Take", and `say` is what makes the rule '
    + 'self-checking: the learner hears the consonant arrive and knows they built it off the right form.');
  ok(REFRAME.trim().split(/\s+/).length <= 12, 'the reframe is past the 12-word xl cap');
  const text = strings(L!.sections).concat(strings(L!.sheets ?? []), strings(L!.terms ?? {})).join('\n');
  strictEqual(countPhrase(text, REFRAME), REFRAME_USES);
  strictEqual(L!.sections.filter((s) => strings(s).some((x) => x.includes(REFRAME))).length, REFRAME_SECTIONS);
});

/* ══════════════════════════════════════════════════════════════════════════
 *  THE OWNS: THE CHAIN, AND THE ARITHMETIC UNDER IT
 * ═══════════════════════════════════════════════════════════════════════ */

test('THE CHAIN IS ONE SECTION AND IT IS A CHAIN, not three separate strings', () => {
  if (noLesson) return;
  const s = sec(CHAIN_SECTION) as { type?: string; rows?: { cells: string[] }[] } | undefined;
  ok(s, `${CHAIN_SECTION} is missing`);
  strictEqual(s!.type, 'tapTable',
    'the chain has to be AUDIBLE, one tap per row: the whole finding of this build is that the middle step is a sound');
  strictEqual((s!.rows ?? []).length, CHAIN.length);
  // EVERY ROW IS THE ORDERED TRIPLE FOR ONE ADJECTIVE, and the order is the
  // order of the operation. Split across sections, or reordered, the chain is a
  // table of nine words.
  (s!.rows ?? []).forEach((r, i) => {
    deepStrictEqual(r.cells, [CHAIN[i].masc[0], CHAIN[i].fem[0], CHAIN[i].adverb[0]],
      `${CHAIN_SECTION} row ${i} is not the chain for ${CHAIN[i].adj}`);
  });
  ok(CHAIN.length >= 3, 'the brief asks for at least three adjectives in one section');
});

test('the three-column cells fit, and the ONE that does not is named', () => {
  if (noLesson) return;
  // MEASURED ON A PIXEL 6, 2026-08-13, on this lesson's own two tapTables:
  // `doucement` and `lentement` (9) set on one line and `sérieusement` (12)
  // broke as `sérieusemen|t`. So a three-column cell holds ELEVEN characters.
  // a2.16 read six at five columns; the band now has two points on the curve.
  //
  // The wrap is ACCEPTED, which is a2.16's precedent with `nouvelles`: it falls
  // on one row, it is consistent, and that row is a2.03's own card in all three
  // cells. Trading the lesson's best evidence for a line break would be the
  // wrong way round. It is named so a SECOND one cannot arrive quietly.
  const MEASURED = 11;
  const WRAPS = ['sérieusement'];
  const chain = sec(CHAIN_SECTION) as { rows?: { cells: string[] }[] } | undefined;
  const over = (chain!.rows ?? []).flatMap((r) => r.cells).filter((c) => c.length > MEASURED);
  deepStrictEqual(over, WRAPS, `cells over ${MEASURED} characters wrap mid-word on a Pixel 6`);
  const place = sec(PLACE_SECTION) as { rows?: { cells: string[] }[] } | undefined;
  const placeOver = (place!.rows ?? []).flatMap((r) => r.cells).filter((c) => c.length > MEASURED);
  strictEqual(placeOver.length, 0, `the placement table holds ${placeOver.join(', ')}, which will wrap`);
});

test('THE FEMININE IS THE MASCULINE PLUS ONE CONSONANT, three times over', () => {
  for (const c of CHAIN) {
    strictEqual(c.fem[1], c.masc[1] + c.consonant,
      `${c.adj}: the woman form ${c.fem[1]} is not the plain form ${c.masc[1]} plus ${c.consonant}. `
      + 'That relation is the whole lesson: it is what makes the mistake audible rather than orthographic.');
  }
  // THREE DIFFERENT CONSONANTS. Three rows with the same one would be a fact
  // about a letter rather than a rule about a form.
  strictEqual(new Set(CHAIN.map((c) => c.consonant)).size, CHAIN.length);
});

test('THE LONG WORD IS THE FEMININE PLUS THE SUFFIX, and the suffix is the house one', () => {
  for (const c of CHAIN) {
    strictEqual(c.adverb[1], `${c.fem[1].toLowerCase()}-${MENT}`,
      `${c.adj}: ${c.adverb[1]} is not ${c.fem[1].toLowerCase()} plus -${MENT}`);
    ok(c.adverb[1].endsWith(`-${MENT}`), `${c.adj}'s long word does not end in the house suffix`);
    ok(!c.adverb[1].includes('MAHN'),
      `${c.adj} respells the suffix with a plain n. 499 published rows do and 79 do not, and the 79 are right.`);
  }
});

test('the chain cells are the rows the learner is scored on, in the seed', () => {
  if (noLesson) return;
  const wanted: [string, string, string][] = [
    ['lent', 'fr.sons.adjectifs-essentiels.021', 'LAHⁿ'],
    ['lente', 'fr.a2.adverbes-essentiels.001', 'LAHⁿT'],
    ['lentement', 'fr.sons.adverbes-essentiels.001', 'lahⁿt-MAHⁿ'],
    ['doux', 'fr.sons.adjectifs-essentiels.033', 'DOO'],
    ['douce', 'fr.a2.adverbes-essentiels.002', 'DOOS'],
    ['doucement', 'fr.sons.adverbes-essentiels.003', 'doos-MAHⁿ'],
    ['sérieux', 'fr.sons.adjectifs-essentiels.037', 'say-RYUH'],
    ['sérieuse', 'fr.a2.adjectifs-essentiels.019', 'say-RYUHZ'],
    ['sérieusement', 'fr.sons.adverbes-essentiels.021', 'say-ryuhz-MAHⁿ'],
  ];
  for (const [fr, id, respell] of wanted) {
    const row = byId.get(id);
    ok(row, `${id} (${fr}) is not in the seed, and the seed is a CUT: adverbes-essentiels holds 325 rows in Postgres and had 0 here`);
    strictEqual(row!.fr, fr, `${id} holds ${JSON.stringify(row!.fr)} and the chain says ${JSON.stringify(fr)}`);
    strictEqual(row!.respell, respell, `${id} respells as ${JSON.stringify(row!.respell)} and the chain says ${JSON.stringify(respell)}`);
    ok((L!.itemIds ?? []).includes(id), `${id} is a chain cell and is not in the lesson's itemIds`);
  }
});

test('THE a2.03 PAYOFF: all three sérieux cells are somebody else\'s rows, and a2.03 is named', () => {
  if (noLesson) return;
  const s = sec(PAYOFF_SECTION);
  ok(s, `${PAYOFF_SECTION} is missing`);
  ok(strings(s).some((x) => namesUnitLabel(x, 'a2.03')),
    `${PAYOFF_SECTION} does not name a2.03 by unit id, and the brief asks for it by name`);
  ok(strings(s).some((x) => x.includes('The plain form tells you the other three.')),
    `${PAYOFF_SECTION} does not quote a2.03's reframe verbatim. A paraphrase is not the connection.`);
  // NONE of the three is inside this build's block, which is what makes the
  // payoff evidence rather than a claim about evidence.
  for (const id of ['fr.sons.adjectifs-essentiels.037', 'fr.a2.adjectifs-essentiels.019', 'fr.sons.adverbes-essentiels.021']) {
    ok(!isMine(id), `${id} is inside a2.17's own block, so the sérieux row is this build's data rather than a2.03's`);
    ok((L!.itemIds ?? []).includes(id), `${id} is one of a2.03's own rows and this lesson does not import it`);
  }
  // AND a2.03's two predicate sentences are imported, unedited.
  for (const id of ['fr.a2.adjectifs-essentiels.005', 'fr.a2.adjectifs-essentiels.006']) {
    ok((L!.itemIds ?? []).includes(id), `${id} is a2.03's own sentence and this lesson does not import it`);
  }
});

test('the consonant that comes back is on a screen, not only in a table', () => {
  if (noLesson) return;
  const hear = sec('s08-hear') as { type?: string; questions?: { opts?: string[]; correct?: number }[] } | undefined;
  ok(hear, 's08-hear is missing');
  strictEqual(hear!.type, 'listening', 'the arrival of the consonant is a SOUND and has to be heard');
  ok((hear!.questions ?? []).length >= 3, 's08-hear asks fewer than three questions about the arrival');
  // The two authored pairs are its lines: plain form then woman form, twice.
  const lines = strings(hear).join('\n');
  for (const c of CHAIN.slice(0, 2)) {
    ok(lines.includes(c.masc[0]) && lines.includes(c.fem[0]), `s08-hear does not play the ${c.adj} pair`);
  }
});

/* ══════════════════════════════════════════════════════════════════════════
 *  PLACEMENT
 * ═══════════════════════════════════════════════════════════════════════ */

test('the placement table is a tapTable whose columns ARE the word order', () => {
  if (noLesson) return;
  const s = sec(PLACE_SECTION) as { type?: string; cols?: string[]; rows?: { cells: string[] }[] } | undefined;
  ok(s, `${PLACE_SECTION} is missing`);
  strictEqual(s!.type, 'tapTable');
  strictEqual((s!.cols ?? []).length, 3, 'the word order has three positions and the columns are the picture of it');
  const rows = s!.rows ?? [];
  strictEqual(rows.length, 5);
  // THE THIRD CELL IS THE LAST WORD OF THE SENTENCE THE ROW PLAYS. If that ever
  // stops being true the screen is drawing a table rather than a rule.
  const sentences = ['fr.sons.nasales.001', 'fr.a2.verbes.477', 'fr.a2.verbes.189', 'fr.sons.nasales.014', 'fr.sons.nasales.078'];
  rows.forEach((r, i) => {
    const row = byId.get(sentences[i]);
    ok(row, `${sentences[i]} is not in the seed`);
    strictEqual(row!.fr.replace(/[.?!]$/, '').split(' ').pop(), r.cells[2],
      `${sentences[i]} does not end with ${JSON.stringify(r.cells[2])}`);
  });
});

test('the English word order appears only where it is marked wrong, and it is still there', () => {
  if (noLesson) return;
  const WRONG = ['Je souvent mange', 'Il lentement parle', 'Elle bien chante', 'Je toujours mange', 'Il vite court'];
  const legal = new Set([SCENE_SECTION, ORDER_SECTION, QUIZ_SECTION]);
  const homes: string[] = [];
  for (const s of L!.sections) {
    const sid = (s as { id?: string }).id ?? '?';
    const hit = strings(s).some((x) => WRONG.some((w) => hasPhrase(x, w)));
    if (!hit) continue;
    ok(legal.has(sid), `${sid} prints the English word order and only ${[...legal].join(', ')} may`);
    homes.push(sid);
  }
  // BOTH DIRECTIONS. A reservation list that has quietly emptied has stopped
  // guarding, and this trap is the one the scene opens on.
  strictEqual(new Set(homes).size, legal.size, `the English order is drilled in ${new Set(homes).size} of ${legal.size} sections`);
});

test('the word order is fixed in WRITING, because it is a whole-sentence error', () => {
  if (noLesson) return;
  const WRONG = ['Je souvent mange', 'Il lentement parle', 'Elle bien chante', 'Je toujours mange', 'Il vite court'];
  const fixes = qs().filter((q) => q.format === 'errorSpot' && WRONG.some((w) => hasPhrase(q.prompt ?? '', w)));
  ok(fixes.length >= 2,
    `${fixes.length} errorSpot questions rebuild the sentence, and mcq is recognition. `
    + 'The brief: free text is the only format that catches a whole-sentence error.');
});

/* ══════════════════════════════════════════════════════════════════════════
 *  THE THREE THE RULE DOES NOT REACH
 * ═══════════════════════════════════════════════════════════════════════ */

test('bien, mal and vite are each taught as irregular, BY NAME', () => {
  if (noLesson) return;
  const s = sec(IRREGULAR_SECTION);
  ok(s, `${IRREGULAR_SECTION} is missing`);
  const text = strings(s);
  for (const w of IRREGULARS) {
    ok(text.some((x) => hasPhrase(x, w)),
      `${IRREGULAR_SECTION} does not name ${JSON.stringify(w)}. All three are among the commonest words in the language `
      + 'and the rule reaches none of them, which is a thing to say out loud rather than leave to be discovered.');
  }
  // AND EACH IS A ROW THE LEARNER IS SCORED ON.
  for (const id of ['fr.sons.mots-essentiels.045', 'fr.sons.mots-essentiels.046', 'fr.sons.mots-essentiels.064']) {
    ok((L!.itemIds ?? []).includes(id), `${id} is one of the three and is not in itemIds`);
  }
});

test('and each of the three is an EXAMPLE ROW, not a word in a sentence about them', () => {
  if (noLesson) return;
  // ADDED AFTER THE MUTATION HARNESS. The first version of the by-name check
  // looked for each word anywhere in the section, and the section's `say` lists
  // all three, so swapping one of the example rows out left the check green.
  // What the learner needs is a ROW for each, with its own gloss.
  const s = sec(IRREGULAR_SECTION) as { examples?: { fr: string }[] } | undefined;
  ok(s?.examples, `${IRREGULAR_SECTION} has no examples`);
  for (const w of IRREGULARS) {
    ok((s!.examples ?? []).some((e) => hasPhrase(e.fr, w)),
      `${IRREGULAR_SECTION} mentions ${JSON.stringify(w)} but gives it no example row of its own`);
  }
});

test('every A2 trapDrill walks its jobs one screen at a time', () => {
  if (noLesson) return;
  // ADDED AFTER THE MUTATION HARNESS. `lesson-contract.test.ts` enforces this
  // across the whole seed and BOTH of this lesson's trapDrills shipped the
  // stacked shape until it caught them; the rule was written after a2.03 and
  // a2.16, which is why no document this band reads mentions it. Pinned here as
  // well so a mutation that ungates the drill fails in this file too.
  for (const s of L!.sections) {
    if (s.type !== 'trapDrill') continue;
    const t = s as { id?: string; steps?: { kind: string; gate?: boolean }[]; swipe?: boolean; audio?: unknown; say?: string };
    strictEqual((t.steps ?? []).map((x) => x.kind).join('>'), 'rule>cards>audio>drill', `${t.id}: A2 walks rule, cards, audio, drill`);
    strictEqual(t.swipe, true, `${t.id}: a stepped trapDrill must own the viewport`);
    ok(t.audio, `${t.id}: names an audio step and declares no audio`);
    ok(t.say, `${t.id}: has no say line`);
    ok((t.steps ?? []).some((x) => x.kind === 'drill' && x.gate === true),
      `${t.id}: the drill step is not gated, and a reflex the learner can swipe past is not a reflex that was tested`);
  }
  strictEqual(L!.sections.filter((s) => s.type === 'trapDrill').length, 2);
});

test('the regularised forms appear only as errors, and at least one is shown', () => {
  if (noLesson) return;
  const BAD = ['bonnement', 'mauvaisement', 'vitement', 'biennement'];
  const legal = new Set([IRREGULAR_SECTION, BON_BIEN_SECTION, 's17-errors', QUIZ_SECTION]);
  let shown = 0;
  for (const s of L!.sections) {
    const sid = (s as { id?: string }).id ?? '?';
    const hit = strings(s).some((x) => BAD.some((b) => hasPhrase(x, b)));
    if (!hit) continue;
    ok(legal.has(sid), `${sid} prints a word that does not exist in French`);
    shown += 1;
  }
  ok(shown > 0, 'nothing shows a regularised irregular as an error, so nothing is guarding against one');
});

test('THE bon/bien CONTRAST IS PRESENT, with both sides in ONE section', () => {
  if (noLesson) return;
  const s = sec(BON_BIEN_SECTION);
  ok(s, `${BON_BIEN_SECTION} is missing`);
  const text = strings(s);
  ok(text.some((x) => hasPhrase(x, 'bon')), `${BON_BIEN_SECTION} does not print "bon"`);
  ok(text.some((x) => hasPhrase(x, 'bien')), `${BON_BIEN_SECTION} does not print "bien"`);
  // The brief asks for both sides in one section, because the distinction is
  // between two words and a screen that shows one of them teaches a vocabulary
  // item rather than a contrast.
  ok(text.some((x) => hasPhrase(x, 'bon') && hasPhrase(x, 'bien')),
    `${BON_BIEN_SECTION} never puts bon and bien in the same string, so nothing on it is a contrast`);
});

test('the wrong-side forms appear only where they are marked, in both directions', () => {
  if (noLesson) return;
  const WRONG = ['chante bon', 'parle bon', 'travaille bon', 'joue bon', 'chante mauvais'];
  const legal = new Set([BON_BIEN_SECTION, QUIZ_SECTION]);
  const homes: string[] = [];
  for (const s of L!.sections) {
    const sid = (s as { id?: string }).id ?? '?';
    if (!strings(s).some((x) => WRONG.some((w) => hasPhrase(x, w)))) continue;
    ok(legal.has(sid), `${sid} puts a describing word after a verb outside the sections that mark it wrong`);
    homes.push(sid);
  }
  strictEqual(new Set(homes).size, legal.size);
});

/* ══════════════════════════════════════════════════════════════════════════
 *  TWO SPELLINGS, ONE SOUND
 * ═══════════════════════════════════════════════════════════════════════ */

test('évidemment and constamment are on ONE screen, and it is audible', () => {
  if (noLesson) return;
  const s = sec(AMMENT_SECTION) as { type?: string; questions?: unknown[] } | undefined;
  ok(s, `${AMMENT_SECTION} is missing`);
  strictEqual(s!.type, 'listening',
    'two spellings and one sound is only teachable as a pair, and only if the pair can be heard');
  const text = strings(s);
  for (const w of ['évidemment', 'constamment']) {
    ok(text.some((x) => hasPhrase(x, w)), `${AMMENT_SECTION} does not print ${JSON.stringify(w)}`);
  }
});

test('the two endings respell identically, so the claim is measurable rather than asserted', () => {
  const e = byId.get('fr.sons.adverbes-essentiels.018');
  const c = byId.get('fr.sons.adverbes-essentiels.045');
  ok(e && c, 'one of the two -emment/-amment rows is not in the seed');
  const tail = (s: string) => s.slice(-`a-${MENT}`.length);
  strictEqual(tail(e!.respell!), tail(c!.respell!),
    `évidemment respells as ${e!.respell} and constamment as ${c!.respell}, and the screen says their endings are ONE SOUND`);
  strictEqual(tail(e!.respell!), `a-${MENT}`);
  // And the SPELLINGS genuinely differ, or there is nothing to teach.
  ok(e!.fr.endsWith('emment') && c!.fr.endsWith('amment'));
});

test('NO EAR QUESTION TURNS ON THE SUFFIX, because there is nothing to hear', () => {
  if (noLesson) return;
  // Corrections §5: a listenChoose offering two options that differ only by
  // emment/amment has no correct answer, and marking one right certifies a bug.
  const PAIRS: [string, string][] = [['emment', 'amment'], ['évidemment', 'évidamment'], ['constamment', 'constemment']];
  for (const q of qs()) {
    if (q.format !== 'listenChoose') continue;
    const opts = q.opts ?? [];
    for (const [x, y] of PAIRS) {
      for (let i = 0; i < opts.length; i += 1) {
        for (let j = 0; j < opts.length; j += 1) {
          if (i === j) continue;
          ok(opts[i].split(x).join(y) !== opts[j],
            `a listenChoose offers ${JSON.stringify(opts[i])} against ${JSON.stringify(opts[j])}, which are one sound`);
        }
      }
    }
  }
});

test('the listening screen says the ending is NOT what the ear gets, and the dictée tests it', () => {
  if (noLesson) return;
  // THE BRIEF ASKS FOR "at least one listening item [that] requires
  // distinguishing them by spelling rather than by sound", and as literally
  // worded that is a question with no correct answer, which corrections §5
  // forbids. What is possible, and what is here, is a question whose ANSWER is
  // that the ear cannot supply the ending, plus a dictée that makes the learner
  // produce the letter anyway.
  const s = sec(AMMENT_SECTION) as { questions?: { q?: string; opts?: string[]; correct?: number; why?: string }[] } | undefined;
  const asked = (s!.questions ?? []).some((q) => /ear (can )?tell|which describing word/i.test(q.q ?? '')
    || /not audible|does not get the ending|cannot supply/i.test(q.why ?? ''));
  ok(asked, `${AMMENT_SECTION} never asks what the ear can and cannot supply`);
  const dictation = sec('s19-dictation') as { itemIds?: string[] } | undefined;
  for (const id of ['fr.sons.adverbes-essentiels.018', 'fr.sons.adverbes-essentiels.045']) {
    ok((dictation!.itemIds ?? []).includes(id),
      `${id} is not a dictée target, and the dictée is the only surface that can make a learner produce a spelling the sound cannot give them`);
    ok((byId.get(id)!.drills ?? []).includes('dictation'), `${id} has no dictation drill, so the dictée cannot serve it`);
  }
});

test('neither of the two is built from a woman form, and the invented ones appear nowhere', () => {
  if (noLesson) return;
  const BAD = ['évidente', 'constante', 'évidentement', 'constantement'];
  for (const s of L!.sections) {
    const sid = (s as { id?: string }).id ?? '?';
    if (sid === QUIZ_SECTION) continue;
    for (const b of BAD) {
      ok(!strings(s).some((x) => hasPhrase(x, b)),
        `${sid} prints ${JSON.stringify(b)}. These two replace their ending rather than adding to a woman form, `
        + 'so printing a woman form here teaches the rule exactly where it does not apply.');
    }
  }
  const s = sec(AMMENT_SECTION);
  ok(strings(s).some((x) => /do not use the woman form|not the answer|taken off and replaced/i.test(x)),
    `${AMMENT_SECTION} says the two endings are one sound and never says that neither is built from the woman form. `
    + 'Saying the first without the second leaves the learner applying the rule they have just been given.');
});

/* ══════════════════════════════════════════════════════════════════════════
 *  THE GENERALISATION TEST, IN BOTH DIRECTIONS
 * ═══════════════════════════════════════════════════════════════════════ */

test('THE UNSEEN ADJECTIVES ARE ABSENT from the lesson\'s vocabulary', () => {
  if (noLesson) return;
  const vocab = (L!.itemIds ?? []).map((id) => byId.get(id)?.fr ?? '');
  for (const u of UNSEEN) {
    for (const w of [u.adj, u.fem, u.adverb]) {
      ok(!vocab.some((f) => hasPhrase(f, w)),
        `the lesson's vocabulary holds ${JSON.stringify(w)}. It is the answer to a generalisation question, `
        + 'and importing it deletes the question.');
    }
  }
});

test('and from every screen except the two that ask for them', () => {
  if (noLesson) return;
  const legal = new Set([UNSEEN_SECTION, QUIZ_SECTION]);
  const words = UNSEEN.flatMap((u) => [u.adj, u.fem, u.adverb]);
  for (const s of L!.sections) {
    const sid = (s as { id?: string }).id ?? '?';
    if (!strings(s).some((x) => words.some((w) => hasPhrase(x, w)))) continue;
    ok(legal.has(sid), `${sid} prints one of ${words.join(', ')} and only ${[...legal].join(' and ')} may`);
  }
});

test('AND THE PRODUCTION ITEMS STILL EXIST, with the woman form in the stem', () => {
  if (noLesson) return;
  // A test that only asserted the absence would pass on a lesson that had
  // quietly dropped the questions, which is the shape a2.16 §10 found twice.
  const asked = qs().filter((q) => (q.format === 'typeIn' || q.format === 'errorSpot')
    && UNSEEN.some((u) => (q.answer ?? '') === u.adverb));
  strictEqual(asked.length, UNSEEN.length,
    `${asked.length} free-text questions build a word from an adjective the lesson never lists, and there are ${UNSEEN.length}`);
  for (const q of asked) {
    const u = UNSEEN.find((x) => x.adverb === q.answer)!;
    ok(hasPhrase(q.q ?? '', u.fem),
      `the question asking for ${u.adverb} does not give ${u.fem} in the stem, and without the woman form the learner cannot run the rule`);
    ok(matchesAccept(q.answer!, q.accept ?? []), `the question asking for ${u.adverb} does not accept it`);
  }
  // AND THE IN-FLOW DRILL ASKS TOO, so the exam is not the first sight of it.
  ok(strings(sec(UNSEEN_SECTION)).some((x) => UNSEEN.some((u) => hasPhrase(x, u.adverb))),
    `${UNSEEN_SECTION} does not build any of the unseen words, so the exam is the first time the learner meets one`);
});

/* ══════════════════════════════════════════════════════════════════════════
 *  WHAT IS LEFT TO NEIGHBOURS
 * ═══════════════════════════════════════════════════════════════════════ */

test('NO COMPOUND TENSE IS CONJUGATED, except inside the deferral line', () => {
  if (noLesson) return;
  // A SHAPE rather than a word list for the participle, and a French subject
  // pronoun in front of the auxiliary. Without the pronoun it fires on English
  // prose: `on a word you had not learned` is a French pronoun, a French
  // auxiliary and a word ending in a u.
  const PARTICIPLES = ['mangé', 'travaillé', 'chanté', 'parlé', 'dormi', 'fini', 'pris', 'mis', 'vu', 'fait',
    'dit', 'lu', 'compris', 'appris', 'été', 'eu', 'allé', 'venu', 'sorti', 'parti', 'arrivé', 'entendu',
    'attendu', 'vendu', 'répondu', 'réussi', 'couru', 'écouté', 'regardé', 'joué', 'marché', 'aimé'];
  const SHAPE = new RegExp(
    `(?<![\\p{L}\\p{N}-])(?:j['’]|(?:je|tu|il|elle|on|nous|vous|ils|elles)\\s+)`
    + `(?:ai|as|a|avons|avez|ont|suis|es|est|sommes|êtes|sont)\\s+(?:\\p{L}+\\s+)?`
    + `(?:${PARTICIPLES.join('|')})(?:e|s|es)?(?![\\p{L}\\p{N}'’-])`, 'iu');
  ok(SHAPE.test("j'ai bien mangé"), 'the compound shape does not fire on the phrase the brief names');
  ok(SHAPE.test('elle est bien arrivée'), 'the compound shape misses an agreed participle');
  ok(!SHAPE.test('Il est lent.'), "the compound shape fires on this lesson's own hero row");
  ok(!SHAPE.test('You did not stall on a word you had not learned.'), 'the compound shape fires on English prose');

  const DEFERRAL = /in a past tense the short ones move/i;
  const stray = learner().filter((s) => SHAPE.test(s) && !DEFERRAL.test(s));
  strictEqual(stray.length, 0,
    `a compound tense is conjugated outside the deferral line: ${JSON.stringify((stray[0] ?? '').slice(0, 100))}. `
    + 'The passé composé is a2.05 at seq 16, four lessons after this one.');
});

test('THE DEFERRAL LINE EXISTS, names a2.05, and still holds the example', () => {
  if (noLesson) return;
  const line = learner().find((s) => /in a past tense the short ones move/i.test(s));
  ok(line, 'the deferral line appears on no learner surface. The brief asks for it in one line so a learner who '
    + "meets j'ai bien mangé in the wild is not confused.");
  ok(namesUnitLabel(line!, 'a2.05'), 'the deferral line does not name a2.05 by unit id');
  ok(/j['’]ai bien mangé/i.test(line!),
    'the deferral line no longer holds the compound-tense example, which is the only thing the learner needs it for');
});

test('negation is NOT re-taught, scoped to production surfaces, and a1.18 is named', () => {
  if (noLesson) return;
  const PRODUCTION = new Set([CHAIN_SECTION, PLACE_SECTION, 's08-hear', AMMENT_SECTION, IRREGULAR_SECTION, 's17-errors']);
  const TEACHING = ['ne goes in front', 'pas goes behind', 'wrap the verb', 'either side of the verb', 'ne wraps'];
  for (const s of L!.sections) {
    const sid = (s as { id?: string }).id ?? '?';
    if (!PRODUCTION.has(sid)) continue;
    for (const p of TEACHING) {
      ok(!strings(s).some((x) => hasPhrase(x, p)), `${sid} teaches negation (${JSON.stringify(p)}), which is a1.18's`);
    }
  }
  ok(learner().some((x) => namesUnitLabel(x, 'a1.18')), 'a1.18 is named on no learner surface, and the interaction is real');
  // AND THE ONE NEGATIVE SENTENCE IS THE ONE THE LESSON DECLARES, so "show it if
  // you need it" cannot quietly become a second negation lesson.
  const negatives = learner().filter((s) => /\bne\s+\S+\s+pas\b|\bn'\S+\s+pas\b/i.test(s));
  ok(negatives.length > 0, 'the interaction with a1.18 is shown nowhere');
  for (const n of negatives) {
    ok(n.includes('Je ne mange pas souvent.'),
      `a learner surface builds a negative sentence that is not the declared one: ${JSON.stringify(n.slice(0, 90))}`);
  }
});

test('mieux appears NOWHERE, reserving a2.08', () => {
  if (noLesson) return;
  for (const w of RESERVED) {
    const hit = learner().find((s) => hasPhrase(s, w));
    ok(!hit, `${JSON.stringify(w)} is on a learner surface and comparatives are a2.08's (seq 32): ${JSON.stringify((hit ?? '').slice(0, 80))}`);
  }
  // AND NOT IN THE VOCABULARY EITHER. `le mieux` is fr.sons.voyelles.174, it is
  // gendered, and it is the row this lesson's subject matter would have reached
  // for first.
  ok(!(L!.itemIds ?? []).includes('fr.sons.voyelles.174'), 'the lesson imports `le mieux`, which is a2.08\'s and is gendered');
});

test('a2.08, a2.05, a2.03, a1.18 and a2.16 all exist and are all named', () => {
  if (noLesson) return;
  const cited = ['a1.18', 'a2.03', 'a2.05', 'a2.08', 'a2.16'];
  const units = new Set(seed.units.map((u) => u.id));
  for (const u of cited) {
    ok(units.has(u), `this lesson names ${u} and no such unit is in the seed`);
    ok(learner().some((s) => namesUnitLabel(s, u)), `${u} is named on no learner surface`);
  }
});

/* ══════════════════════════════════════════════════════════════════════════
 *  THE RESPELLINGS
 * ═══════════════════════════════════════════════════════════════════════ */

test('THE -ment CONVENTION HOLDS on every word this lesson puts on a screen', () => {
  if (noLesson) return;
  const words = (L!.itemIds ?? []).map((id) => byId.get(id)!).filter((r) => r && /^\p{L}+ment$/u.test(r.fr));
  ok(words.length >= 7, `only ${words.length} -ment headwords are in this lesson and it teaches seven`);
  for (const r of words) {
    ok(r.respell?.endsWith(`-${MENT}`),
      `${r.id} ${JSON.stringify(r.fr)} respells as ${JSON.stringify(r.respell)} and the house suffix is -${MENT}. `
      + '499 published rows in this corpus use a plain n and 79 use the superscript; the 79 include every respelled '
      + 'SENTENCE in the sons themes, three of which this lesson imports.');
    ok(!r.respell!.includes('MAHN'), `${r.id} still spells the suffix with a plain n`);
  }
});

test('the nasal checker flags nothing this lesson displays', () => {
  if (noLesson) return;
  const rows = (L!.itemIds ?? []).map((id) => byId.get(id)!).filter(Boolean);
  for (const r of rows) {
    if (!r.respell) continue;
    ok(!hasPlainNasalFor(r.fr, r.respell), `hasPlainNasalFor flags ${r.id}: ${JSON.stringify(r.fr)} / ${JSON.stringify(r.respell)}`);
  }
});

test('AND FIFTEEN OF ITS SUPERSCRIPTS ARE INVISIBLE TO THE CHECKER, measured', () => {
  if (noLesson) return;
  // Corrections §6, and the figure is asserted in BOTH directions so the day the
  // checker improves the build fails rather than carrying a stale claim.
  const rows = (L!.itemIds ?? []).map((id) => byId.get(id)!).filter(Boolean);
  let superscripts = 0; let seen = 0; let blind = 0;
  for (const r of rows) {
    const rs = r.respell ?? '';
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

test('THE SPLIT IS PER-NASAL, NOT PER-ROW, and two rows prove it', () => {
  // Corrections §6 splits the repair table by ROW, which assumes one nasal per
  // row. A -ment word on a nasal stem carries TWO and the checker sees one:
  // repairing what it reports produces a value it calls clean and which is still
  // wrong. These are the two rows in this lesson where that happens.
  const cases: [string, string, string][] = [
    ['lentement', 'lahnt-MAHⁿ', 'lahⁿt-MAHⁿ'],
    ['constamment', 'kohns-ta-MAHⁿ', 'kohⁿs-ta-MAHⁿ'],
  ];
  for (const [fr, half, full] of cases) {
    ok(!hasPlainNasalFor(fr, half),
      `the half-repaired ${JSON.stringify(half)} IS flagged, so it is not what repairing the checker's report gives you`);
    ok(half !== full, `${fr}'s half-repaired value equals the correct one, so nothing is blind about it`);
    ok(!hasPlainNasalFor(fr, full), `the fully repaired ${JSON.stringify(full)} is flagged`);
    const row = seed.items.find((i) => i.fr === fr && i.theme === THEME);
    ok(row, `${fr} is not in the seed`);
    strictEqual(row!.respell, full, `${fr} carries ${JSON.stringify(row!.respell)} and the correct value is ${JSON.stringify(full)}`);
  }
});

test('the three repairs read off published rows still agree with the rows they were read off', () => {
  // Every repaired value in this build was read off a row somebody else
  // published, and the SENTENCE half of the corpus is the half that was right.
  const cases: [string, string, string][] = [
    ['fr.sons.adverbes-essentiels.001', 'fr.sons.nasales.013', 'lahⁿt-MAHⁿ'],
    ['fr.sons.adverbes-essentiels.003', 'fr.sons.nasales.014', 'doos-MAHⁿ'],
    ['fr.sons.mots-essentiels.045', 'fr.sons.nasales.078', 'BYEHⁿ'],
  ];
  for (const [headword, sentence, value] of cases) {
    const h = byId.get(headword); const s = byId.get(sentence);
    ok(h && s, `${headword} or ${sentence} is not in the seed`);
    strictEqual(h!.respell, value, `${headword} carries ${JSON.stringify(h!.respell)} and the repair says ${JSON.stringify(value)}`);
    ok(s!.respell!.includes(value),
      `${headword} was repaired to ${JSON.stringify(value)} because ${sentence} already published it, and ${sentence} now holds ${JSON.stringify(s!.respell)}`);
  }
});

/* ══════════════════════════════════════════════════════════════════════════
 *  THE CORPUS
 * ═══════════════════════════════════════════════════════════════════════ */

test('twenty-four rows are authored, all inside the block, and NONE is an adverb', () => {
  const mine = myRows();
  strictEqual(mine.length, ROWS_AUTHORED);
  for (const r of mine) {
    strictEqual(r.theme, THEME);
    strictEqual(r.level, 'a2');
    ok(!(r as { gender?: string }).gender, `${r.id} carries a gender and would join a1.03's ending population`);
  }
  const words = mine.filter((r) => r.kind === 'word');
  strictEqual(words.length, 4, 'the four headwords this build authors are four ADJECTIVES');
  deepStrictEqual(words.map((r) => r.fr).sort(), ['constant', 'douce', 'lente', 'évident'].sort());
  for (const r of words) {
    ok(!/ment$/i.test(r.fr),
      `${r.id} authors ${JSON.stringify(r.fr)}. adverbes-essentiels holds 120 adverb headwords and every one this lesson teaches is imported.`);
  }
});

test('no duplicate fr inside the theme, computed the way flashhub-coverage does', () => {
  // DELIBERATELY NOT SCOPED to this build's block: two rows sharing an `fr` in
  // one theme are one card served twice, whoever authored them.
  const strip = (s: string) => s.replace(/^(le |la |les |l'|un |une |des |du |de la )/i, '').toLowerCase().trim();
  const byFr = new Map<string, string[]>();
  for (const i of seed.items.filter((x) => x.theme === THEME)) byFr.set(strip(i.fr), [...(byFr.get(strip(i.fr)) ?? []), i.id]);
  const dupes = [...byFr.entries()].filter(([, ids]) => ids.length > 1);
  strictEqual(dupes.length, 0, dupes.map(([k, ids]) => `${k}: ${ids.join(', ')}`).join('; '));
});

test('every itemId resolves, and the carry brought the theme through the cut', () => {
  if (noLesson) return;
  strictEqual((L!.itemIds ?? []).length, ITEM_COUNT);
  const missing = (L!.itemIds ?? []).filter((id) => !byId.has(id));
  strictEqual(missing.length, 0, `${missing.length} itemIds do not resolve: ${missing.slice(0, 5).join(', ')}`);
  // adverbes-essentiels held ZERO rows in the seed before this build. Every
  // derived word it teaches came through the carry, and without it most of the
  // lesson would render blank cards.
  const inTheme = (L!.itemIds ?? []).filter((id) => byId.get(id)!.theme === THEME);
  ok(inTheme.length >= 30, `only ${inTheme.length} of this lesson's items are in its own theme`);
});

test('every itemId is drawn by a section or released by a tranche', () => {
  if (noLesson) return;
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
  const orphan = (L!.itemIds ?? []).filter((id) => !drawn.has(id) && !released.has(id));
  strictEqual(orphan.length, 0, `${orphan.length} itemIds are neither drawn nor released: ${orphan.slice(0, 5).join(', ')}`);
  const ghosts = [...released].filter((id) => !(L!.itemIds ?? []).includes(id));
  strictEqual(ghosts.length, 0, `a tranche releases ids the lesson does not declare: ${ghosts.join(', ')}`);
  strictEqual((L!.deckTranche ?? []).length, ACTS.length);
});

test('a1.03\'s ending population is untouched by this theme', () => {
  // Adverbs are invariable and are not nouns, and neither are the four
  // adjectives this build authored, so the figure should be zero and the check
  // is the proof rather than the argument. It runs the REAL function: a1.08
  // shipped a hand-rolled copy carrying a filter the real one lacks.
  const inTheme = seed.items.filter((i) => i.theme === THEME);
  const pop = endingPopulation(inTheme as never);
  strictEqual(pop.length, 0, `${pop.length} rows from ${THEME} are in a1.03's ending population`);
});

/* ══════════════════════════════════════════════════════════════════════════
 *  THE EXAM AND THE PRODUCTION SURFACES
 * ═══════════════════════════════════════════════════════════════════════ */

test('one quiz, five rounds, thirty questions, at most half mcq', () => {
  if (noLesson) return;
  strictEqual(L!.sections.filter((s) => s.type === 'quiz').length, 1, 'a second quiz section is silently never rendered');
  strictEqual((quiz() as { rounds?: unknown[] }).rounds?.length, ROUND_COUNT);
  const q = qs();
  strictEqual(q.length, QUESTION_COUNT);
  const mcq = q.filter((x) => x.format === 'mcq').length;
  ok(mcq * 2 <= q.length, `${mcq} of ${q.length} are mcq and at most half may be`);
});

test('every question has a why and a ref that names a real section', () => {
  if (noLesson) return;
  const ids = L!.sections.map((s) => (s as { id: string }).id);
  for (const q of qs()) {
    ok(q.why, `a question has no why: ${JSON.stringify(q.q).slice(0, 60)}`);
    ok(q.ref && ids.includes(q.ref), `a question refs ${q.ref}, which is not a section`);
  }
});

test('every free-text question accepts the answer it displays, through the real matchesAccept', () => {
  if (noLesson) return;
  for (const q of qs()) {
    if (q.format !== 'typeIn' && q.format !== 'errorSpot') continue;
    ok(q.answer, 'a free-text question has no answer');
    ok(matchesAccept(q.answer!, q.accept ?? []),
      `${JSON.stringify(q.q).slice(0, 50)} displays ${JSON.stringify(q.answer)} and its accept list does not take it`);
    if (q.format === 'errorSpot') ok(q.prompt, 'an errorSpot has no prompt');
  }
});

test('each round leads on a different trigger, and every trigger leads one', () => {
  if (noLesson) return;
  const rounds = (quiz() as { rounds: { id: string; targets: string[] }[] }).rounds;
  const leads = rounds.map((r) => r.targets[0]);
  strictEqual(new Set(leads).size, leads.length, `two rounds lead on the same trigger: ${leads.join(', ')}`);
  const triggers = (L!.errorTriggers ?? []).map((t) => t.id);
  strictEqual(triggers.length, 5);
  // drillForRound fires the drill of the FIRST resolving target only and then
  // stops, so a drill never named first can never fire. a1.05 ships two.
  for (const t of triggers) ok(leads.includes(t), `${t} leads no round, so its drill can never fire`);
  const drills = new Set((L!.drills ?? []).map((d) => d.id));
  for (const t of L!.errorTriggers ?? []) {
    ok(drills.has(t.drill), `trigger ${t.id} names a drill that does not exist`);
    ok(t.retest && drills.has(t.retest), `trigger ${t.id} names a retest that does not exist`);
  }
});

test('the correct answers do not cluster', () => {
  if (noLesson) return;
  const closed = qs().filter((q) => typeof q.correct === 'number');
  const slots = new Map<number, number>();
  for (const q of closed) slots.set(q.correct as number, (slots.get(q.correct as number) ?? 0) + 1);
  for (const [slot, n] of slots) {
    ok(n / closed.length <= 0.4, `option slot ${slot} holds ${n} of ${closed.length} closed questions`);
  }
});

test('every dictée target spells in LETTERS mode, through the real dicteeMode', () => {
  if (noLesson) return;
  const d = sec('s19-dictation') as { itemIds?: string[] } | undefined;
  strictEqual((d!.itemIds ?? []).length, DICTEE_COUNT);
  for (const id of d!.itemIds ?? []) {
    const row = byId.get(id);
    ok(row, `${id} is a dictée target and is not in the seed`);
    strictEqual(dicteeMode(row!.fr), 'letters',
      `${id} ${JSON.stringify(row!.fr)} spells in WORD mode, where every real word is handed over pre-spelled`);
    ok((row!.drills ?? []).includes('dictation'), `${id} has no dictation drill`);
  }
  // AND THE FOUR ROWS THIS BUILD SAYS IT CANNOT REACH GENUINELY CANNOT BE.
  for (const text of ['Il travaille sérieusement.', "C'est évidemment vrai.", 'Il travaille constamment.']) {
    strictEqual(dicteeMode(text), 'words', `${JSON.stringify(text)} is recorded as too long and dicteeMode puts it in LETTERS`);
  }
});

test('the two woman forms this build authored are dictée targets', () => {
  if (noLesson) return;
  // A dictée that could not spell the middle step would test everything in this
  // lesson except its subject.
  const d = sec('s19-dictation') as { itemIds?: string[] } | undefined;
  for (const id of ['fr.a2.adverbes-essentiels.001', 'fr.a2.adverbes-essentiels.002']) {
    ok((d!.itemIds ?? []).includes(id), `${id} is a woman form and is not a dictée target`);
  }
});

test('every speak target carries voiceflash and every released row carries flashcard', () => {
  if (noLesson) return;
  const speak = sec('s20-speak') as { skill?: string; itemIds?: string[] } | undefined;
  strictEqual(speak!.skill, 'speak', "practice with skill 'write' draws no writing surface at all");
  for (const id of speak!.itemIds ?? []) {
    ok((byId.get(id)?.drills ?? []).includes('voiceflash'), `${id} is a speak target with no voiceflash drill`);
  }
  for (const id of L!.itemIds ?? []) {
    ok((byId.get(id)?.drills ?? []).includes('flashcard'), `${id} is released to the hub with no flashcard drill`);
  }
});

test('every role-play turn offers two ways to answer and a userEn', () => {
  if (noLesson) return;
  const s = sec('s18-scenario') as { turns?: { alts?: unknown[]; userEn?: string }[] } | undefined;
  ok((s!.turns ?? []).length >= 5, 'the scenario has fewer than five turns');
  (s!.turns ?? []).forEach((t, i) => {
    ok((t.alts ?? []).length >= 2, `turn ${i} offers fewer than two alternatives`);
    ok(t.userEn?.trim(), `turn ${i} has no userEn`);
  });
});

/* ══════════════════════════════════════════════════════════════════════════
 *  HOUSE RULES AND THE UNIT
 * ═══════════════════════════════════════════════════════════════════════ */

test('no grammar jargon, no em dash and no "honest" on any learner surface', () => {
  if (noLesson) return;
  const JARGON = [
    'adverbial', 'derivation', 'derivational', 'suffixation', 'affix', 'stem',
    'inflection', 'inflected', 'paradigm', 'morpheme', 'morphology', 'allomorph',
    'suppletion', 'suppletive', 'lexeme', 'phoneme', 'phonological', 'orthography',
    'attributive', 'predicative', 'first person', 'second person', 'third person',
  ];
  const text = display(L!.sections).concat(display(L!.sheets ?? []), display(L!.terms ?? {}),
    display(L!.acts ?? []), display(L!.drills ?? []), [L!.intro ?? '']);
  for (const j of JARGON) {
    for (const term of [j, `${j}s`]) {
      const hit = text.find((s) => hasPhrase(s, term));
      ok(!hit, `grammar jargon on a learner surface: ${JSON.stringify(term)} in ${JSON.stringify((hit ?? '').slice(0, 80))}`);
    }
  }
  for (const s of text) {
    ok(!s.includes('—'), `an em dash on a learner surface: ${JSON.stringify(s.slice(0, 80))}`);
    ok(!/honest/i.test(s), `the word "honest" on a learner surface: ${JSON.stringify(s.slice(0, 80))}`);
  }
});

test('the plain phrase outnumbers the technical one, which is the house ratio', () => {
  if (noLesson) return;
  // `adverb` is NOT banned: measured across all 53 shipped lessons' learner
  // surfaces, `adjective` appears 147 times and `describing word` 137, so the
  // technical word is house vocabulary. What the house DOES is prefer the plain
  // phrase, and a1.16 runs 12 against 74.
  const text = display(L!.sections).concat(display(L!.sheets ?? []), display(L!.terms ?? {}),
    display(L!.acts ?? []), display(L!.drills ?? []), [L!.intro ?? '']);
  const technical = text.reduce((n, s) => n + countPhrase(s, 'adverb') + countPhrase(s, 'adverbs'), 0);
  const plain = text.reduce((n, s) => n + countPhrase(s, 'word for how') + countPhrase(s, 'the long word'), 0);
  ok(plain > 0, 'no learner surface uses the plain phrase');
  ok(technical <= plain, `the learner surfaces say "adverb" ${technical} times against ${plain} uses of the plain phrase`);
});

test('every mission title fits the hub, and every chip row fits its line', () => {
  if (noLesson) return;
  for (const s of L!.sections) {
    const t = (s as { title?: string }).title ?? '';
    ok(t.length <= 27, `the mission title ${JSON.stringify(t)} is ${t.length} characters`);
    const chips = ((s as { terms?: string[] }).terms ?? []).map((k) => (L!.terms ?? {})[k]?.term ?? k);
    ok(chips.length <= 3, `${(s as { id?: string }).id} declares ${chips.length} term chips and the renderer shows 3`);
    const w = chips.join('').length + Math.max(0, chips.length - 1);
    ok(w <= 37, `${(s as { id?: string }).id}'s chips total ${w} characters and the measured row budget is 37`);
  }
});

test('commonErrors carries swipe, and the density validator is clean', () => {
  if (noLesson) return;
  for (const s of L!.sections) {
    if (s.type !== 'commonErrors') continue;
    strictEqual((s as { swipe?: boolean }).swipe, true, 'commonErrors without swipe renders a blank screen');
  }
  const issues = validateDensity(L!, new Set(seed.items.map((i) => i.id)));
  strictEqual(issues.length, 0, formatDensity(issues));
});

test('the unit is attached, the tag matches its seq, and the overview matches the unit', () => {
  if (noLesson) return;
  const u = seed.units.find((x) => x.id === 'a2.17');
  ok(u, 'unit a2.17 is not in the seed');
  strictEqual(u!.title, 'Adverbs');
  strictEqual(u!.sub, 'Les adverbes');
  strictEqual(u!.canDo, 'Can build -ment adverbs, use the irregular ones, and place them correctly');
  deepStrictEqual(u!.prereqUnitIds, ['a2.03']);
  ok((u!.lessonIds ?? []).includes('a2.17.l1'), 'the unit does not list a2.17.l1');
  strictEqual(L!.tag, `A2 · LEÇON ${String(u!.seq).padStart(2, '0')}`);
  strictEqual(L!.overview?.titleEn, u!.title);
  strictEqual(L!.overview?.subFr, u!.sub);
  strictEqual(L!.version, 3, 'v2 stepped both trapDrills; v3 took the size off them, which the ledger sweep requires and no gate checks; v5 is the unit-label pass, which replaced every raw unit id on a learner surface with its lesson label. The unit-label pass and other text-only edits do NOT move this: the runtime reads Lesson.version to decide whether to DISCARD a learner mission record and its XP, and that reset is only warranted when the SECTION LIST changes. Those bumps were withdrawn across 45 lessons and the edits they carried were kept. Corrections §16.7 supersedes §10 on this; check with `pnpm content:versions`.');
});

test('the audio brief still says ONE TAKE for the two takes whose value is a contrast', () => {
  if (noLesson) return;
  // Invariants §10: a constraint on how something is recorded becomes invisible
  // the moment the clip is delivered.
  const recorded = (L!.audio?.recorded ?? []) as { id: string; desc: string; clipIds?: string[] }[];
  for (const [id, phrases] of [
    ['rec-a2-17-chain', ['ONE TAKE', 'RECORDED APART']],
    ['rec-a2-17-amment', ['ONE TAKE', 'INDISTINGUISHABLE']],
  ] as [string, string[]][]) {
    const take = recorded.find((r) => r.id === id);
    ok(take, `there is no ${id} take`);
    for (const p of phrases) ok(take!.desc.toUpperCase().includes(p), `${id} does not say ${JSON.stringify(p)}`);
  }
  // AND THE PAIRS ARE ADJACENT, because adjacency IS the instruction.
  const clips = recorded.find((r) => r.id === 'rec-a2-17-chain')!.clipIds ?? [];
  for (const [m, f] of [['Il est lent.', 'Elle est lente.'], ['Il est doux.', 'Elle est douce.']] as [string, string][]) {
    strictEqual(clips.indexOf(m) + 1, clips.indexOf(f), `rec-a2-17-chain lists ${m} and ${f} non-adjacently`);
  }
});

test('the ten repairs landed and the theme now holds the rows the lesson needs', () => {
  if (noLesson) return;
  const repaired: [string, string][] = [
    ['fr.sons.adverbes-essentiels.001', 'lahⁿt-MAHⁿ'],
    ['fr.sons.adverbes-essentiels.002', 'ra-peed-MAHⁿ'],
    ['fr.sons.adverbes-essentiels.003', 'doos-MAHⁿ'],
    ['fr.sons.adverbes-essentiels.004', 'fa-seel-MAHⁿ'],
    ['fr.sons.adverbes-essentiels.018', 'ay-vee-da-MAHⁿ'],
    ['fr.sons.adverbes-essentiels.021', 'say-ryuhz-MAHⁿ'],
    ['fr.sons.adverbes-essentiels.045', 'kohⁿs-ta-MAHⁿ'],
    ['fr.sons.mots-essentiels.045', 'BYEHⁿ'],
    ['fr.sons.mots-essentiels.056', 'soo-VAHⁿ'],
    ['fr.sons.adjectifs-essentiels.021', 'LAHⁿ'],
  ];
  strictEqual(repaired.length, REPAIR_COUNT);
  for (const [id, value] of repaired) {
    const row = byId.get(id);
    ok(row, `${id} is not in the seed, and the carry is what brings this theme through the cut`);
    strictEqual(row!.respell, value, `${id} carries ${JSON.stringify(row!.respell)} and this build repaired it to ${JSON.stringify(value)}`);
  }
});
