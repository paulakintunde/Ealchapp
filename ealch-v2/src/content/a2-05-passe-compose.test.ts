// a2.05.l1 « Le passé composé avec avoir »: the assertions that keep this
// lesson true.
//
// Modelled on a2-19-futur-proche.test.ts. Everything here runs the REAL app
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
// went red the moment a2.16 landed in the same namespace. `fr.a2.verbes` holds
// 439 rows belonging to ten lessons, so a prefix filter would pick up four
// hundred and three strangers on the first run. `MY_BLOCK` below is the range.
// The duplicate-`fr` check is deliberately NOT scoped: flashhub-coverage counts
// two rows sharing an `fr` in one theme as one card served twice, whoever
// authored them.
//
// ── What this file is actually guarding ────────────────────────────────────
//
//   THE LEDGER DECISION. A past form is not a corpus item, so this lesson
//   authors sentences only and a2.20 inherits the same answer. Asserted as a
//   property of every row this build owns, and as an absence across the seed
//   for the regular set.
//   `pas` BEHIND THE PAST FORM. That is the error the lesson exists to prevent
//   and the one an English speaker makes first. Permitted in the seven sections
//   where the error is the content and nowhere else, and it must APPEAR in
//   those seven, because a trap nobody sees is not a trap.
//   A NAMING FORM BEHIND avoir. « j'ai manger » is the one nobody hears
//   themselves make, and it is guarded as a LIST of real naming forms rather
//   than as letters, because « on a learner surface » is on every screen in
//   this band and a letters-only shape reads it as French.
//   A PAST FORM AGREEING WITH avoir. a2.21 says the opposite two lessons later
//   and the contrast only works if this side is stated plainly and held.
//   Scoped to this lesson: 81 published rows DO agree, and every one of them is
//   a2.06's preceding-object case.
//   être AS THE FIRST WORD. Not one verb of it. a2.21 owns the choice.
//   ANY IRREGULAR PAST FORM, by name. a2.20 owns forty and it is next.
//   THE AFFIRMATIVE AND THE NEGATIVE BEING SPLIT UP. The brief's first layout
//   claim: they belong on one screen, adjacent, with the two extra words in the
//   gap. Asserted as PAIRS, not as presence, and the `je` pair needs the
//   elision put back before it reduces.
//   THE THREE ENDINGS BEING SPLIT UP. The brief's second: one grid, one row per
//   group, and all three units named.
//   THE SOUND CONTRAST BEING A READING ONE. The brief's third: « Je vais
//   manger » and « J'ai mangé » in one section AND in one audio take.
//   a2.19's NEGATION RULE BEING PARAPHRASED. The brief says a paraphrase must
//   go red. Asserted as a LITERAL.
//   THE TWO DEFERRALS SILENTLY NOT CLOSING. a2.17's adverb and a2.18's "ago".
//   A DICTÉE TARGET IN WORD MODE, and the measurement that made `je` reachable
//   here when it was not one seq back.
//   A STACKED trapDrill, and a cards-step label that miscounts its own array.
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
import { namesUnitLabel, unitLabel } from './unit-label.ts';

const here = dirname(fileURLToPath(import.meta.url));
const seed = JSON.parse(readFileSync(resolve(here, 'seed.json'), 'utf8')) as {
  version: number; items: Item[]; lessons: Lesson[];
  units: { id: string; title?: string; sub?: string; canDo?: string; seq?: string | number; lessonIds?: string[]; prereqUnitIds?: string[] }[];
};

const L = seed.lessons.find((l) => l.id === 'a2.05.l1');
const noLesson = !L;
const byIdItem = new Map(seed.items.map((i) => [i.id, i] as const));

/** THE BLOCK, NOT THE PREFIX. Nine other lessons own `fr.a2.verbes.001..540`. */
const MY_BLOCK = { from: 541, to: 590 };
const isMine = (id: string) => {
  const m = /^fr\.a2\.verbes\.(\d{3})$/.exec(id);
  if (!m) return false;
  const n = Number(m[1]);
  return n >= MY_BLOCK.from && n <= MY_BLOCK.to;
};
const myRows = () => seed.items.filter((i) => isMine(i.id));

/** a2.20's reservation, so this lesson's own rows can be proved to be outside
 *  it and a2.20's author can find the number without reading the ledger. */
const A220_BLOCK = { from: 591, to: 650 };
const isA220 = (id: string) => {
  const m = /^fr\.a2\.verbes\.(\d{3})$/.exec(id);
  if (!m) return false;
  const n = Number(m[1]);
  return n >= A220_BLOCK.from && n <= A220_BLOCK.to;
};

const THEME = 'verbes';
const FRAME_VERB = 'manger';
const FRAME_PAST = 'mangé';
const AVOIR_UNIT = 'a1.07';
const ER_UNIT = 'a2.01';
const IR_UNIT = 'a2.10';
const RE_UNIT = 'a2.11';
const NEGATION_UNIT = 'a1.18';
const ADVERB_UNIT = 'a2.17';
const TIME_UNIT = 'a2.18';
const FUTUR_UNIT = 'a2.19';
const IRREGULAR_UNIT = 'a2.20';
const ETRE_UNIT = 'a2.21';
const PRONOUN_UNIT = 'a2.06';
const SCHOOL_UNIT = 'a2.31';

/** a2.19's negation rule and a2.17's deferral, quoted VERBATIM. Doctrine §B.7
 *  and a2.16 §3: a back-reference to another unit is not a variable, so these
 *  are literals and a paraphrase fails. THE BRIEF ASKS FOR EXACTLY THIS. */
const A219_REFRAME = 'Wrap the verb that changed, not the one carrying the meaning.';
// BUILT, NOT TYPED. a2.17 ships this sentence and now names the lesson by its
// label, so the copy that quotes it has to be built the same way.
const A217_DEFERRAL = `In a past tense the short ones move, and that rule arrives with the tense in ${unitLabel('a2.05')}.`;

const REFRAME = 'One verb, two words, and the small ones go in between.';

/** The one respelled passé-composé negative in the corpus, and the `il` row of
 *  this lesson's paradigm. */
const IL_NEGATIVE_ID = 'fr.sons.masterclass.021';

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
/** Accent-aware, and the LEFT boundary drops the apostrophe: a2.17 §3. Without
 *  that this file cannot see `j'ai`, which is the first two words of half the
 *  lesson. */
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

/** THE `je` NEGATIVE IS NOT THE `je` AFFIRMATIVE PLUS TWO WORDS, IN LETTERS.
 *  « J'ai mangé. » elides je + ai and « Je n'ai pas mangé. » does not, because
 *  the n' is between them, so a naive strip leaves « Je ai mangé. ». The
 *  elision has to go back before the pair can be compared. */
const reduceNegative = (neg: string): string =>
  neg
    .replace(/\bn['’]/i, '')
    .replace(/\bne\s+/i, '')
    .replace(/\bpas\s+/i, '')
    .replace(/\bJe ai\b/, "J'ai")
    .replace(/\bje ai\b/, "j'ai")
    .replace(/\s+/g, ' ')
    .trim();

/* ══════════════════════════════════════════════════════════════════════════
 *  THE SHAPES, WRITTEN OUT RATHER THAN IMPORTED
 *
 *  The corpus file holds the same regexes and this file does not import them:
 *  a test comparing the content to its own constant passes on any change to
 *  that constant. These are hand copies and the must-fire / must-not-fire lists
 *  below prove they still mean what they say.
 * ═══════════════════════════════════════════════════════════════════════ */

const AUX = "(?:j['’]ai|tu\\s+as|il\\s+a|elle\\s+a|on\\s+a|nous\\s+avons|vous\\s+avez|ils\\s+ont|elles\\s+ont)";
const NEG_AUX = "(?:je\\s+n['’]ai|tu\\s+n['’]as|il\\s+n['’]a|elle\\s+n['’]a|on\\s+n['’]a|nous\\s+n['’]avons|vous\\s+n['’]avez|ils\\s+n['’]ont|elles\\s+n['’]ont)";
const PAST = '[\\p{L}]{2,}(?:é|i|u)';
const SHORT_ADV = '(?:bien|mal|déjà|encore|toujours|jamais|beaucoup|trop|assez|vite|presque|enfin)';
const NAMING_FORMS = '(?:manger|parler|travailler|finir|choisir|vendre|répondre|attendre|regarder|chercher|trouver|payer|visiter|danser|écouter|jouer|chanter|acheter|oublier|fermer|remplir|grandir|perdre|entendre|rendre|descendre|commencer|préparer|laisser|insister|ranger|réussir)';
const AGREED_FORMS = '(?:[\\p{L}]{2,}(?:ée|és|ées)|finie|finies|finis|choisie|choisies|choisis|vendue|vendues|vendus|répondue|répondues|répondus|attendue|attendues|attendus)';
const ETRE_AUX = "(?:je\\s+suis|tu\\s+es|il\\s+est|elle\\s+est|on\\s+est|nous\\s+sommes|vous\\s+êtes|ils\\s+sont|elles\\s+sont|je\\s+ne\\s+suis|il\\s+n['’]est|elle\\s+n['’]est)";
const ETRE_PAST = '(?:allé|allée|allés|allées|parti|partie|partis|parties|sorti|sortie|sortis|sorties|venu|venue|venus|venues|arrivé|arrivée|arrivés|arrivées|resté|restée|restés|restées|entré|entrée|monté|montée|descendu|descendue|tombé|tombée|né|née|mort|morte|rentré|rentrée|retourné|retournée|devenu|devenue|revenu|revenue)';

const PAS_AFTER_PAST = new RegExp(`(?<![\\p{L}\\p{N}-])${NEG_AUX}\\s+${PAST}\\s+pas(?![\\p{L}\\p{N}'’-])`, 'iu');
const INFINITIVE_AFTER_AVOIR = new RegExp(`(?<![\\p{L}\\p{N}-])(?:${AUX}|${NEG_AUX})\\s+(?:pas\\s+|${SHORT_ADV}\\s+)?${NAMING_FORMS}(?![\\p{L}\\p{N}'’-])`, 'iu');
const AGREED_AFTER_AVOIR = new RegExp(`(?<![\\p{L}\\p{N}-])(?:${AUX}|${NEG_AUX})\\s+(?:pas\\s+|${SHORT_ADV}\\s+)?${AGREED_FORMS}(?![\\p{L}\\p{N}'’-])`, 'iu');
const ETRE_AUXILIARY = new RegExp(`(?<![\\p{L}\\p{N}-])${ETRE_AUX}\\s+(?:pas\\s+|${SHORT_ADV}\\s+)?${ETRE_PAST}(?![\\p{L}\\p{N}'’-])`, 'iu');

const fires = (re: RegExp, s: string): boolean => new RegExp(re.source, re.flags.replace('g', '')).test(s);

/** a2.20 owns forty of them and it is the very next lesson. Written out here so
 *  a change to the source list cannot quietly drop one. */
const IRREGULAR_PAST = [
  'fait', 'dit', 'pris', 'mis', 'vu', 'lu', 'bu', 'su', 'pu', 'eu', 'été',
  'voulu', 'dû', 'connu', 'venu', 'tenu', 'écrit', 'ouvert', 'offert',
  'appris', 'compris', 'assis', 'conduit', 'construit', 'couvert', 'souffert',
  'né', 'mort', 'remis', 'promis', 'refait', 'reçu', 'aperçu', 'cru', 'couru',
];
/** The five the brief asks to be asserted individually. */
const IRREGULAR_BY_NAME = ['fait', 'pris', 'mis', 'vu', 'dit'];

/** THE REGULAR PAST FORMS, WHICH MUST NOT EXIST AS HEADWORDS ANYWHERE IN THE
 *  SEED. This is the ledger decision made visible: a past form is a conjugated
 *  form and a2.01 settled that a conjugated form is never a corpus item. */
const REGULAR_PAST_FORMS = [
  'parlé', 'mangé', 'travaillé', 'regardé', 'écouté', 'joué', 'chanté', 'dansé',
  'visité', 'cherché', 'trouvé', 'donné', 'oublié', 'commencé',
  'fini', 'choisi', 'grandi', 'rempli',
  'vendu', 'attendu', 'entendu', 'répondu', 'perdu', 'rendu',
];

/* ══════════════════════════════════════════════════════════════════════════
 *  THE LESSON IS THERE AND IT IS THE SHAPE THE SOURCE DESCRIBES
 * ═══════════════════════════════════════════════════════════════════════ */

test('a2.05.l1 is in the seed', () => {
  ok(L, 'a2.05.l1 is missing from seed.json');
});

test('the spine, in order', { skip: noLesson }, () => {
  deepStrictEqual(L!.sections.map((s) => (s as { id: string }).id), [
    's01-scene', 's02-goals', 's03-endings',
    's04-pair', 's05-english', 's06-six', 's07-where', 's08-produce',
    's09-avoir', 's10-groups', 's11-noagree', 's12-errors',
    's13-listen', 's14-which', 's15-nothear', 's16-unseen',
    's17-inside', 's18-ago',
    's19-reading', 's20-scenario', 's21-dictation', 's22-speak', 's23-review',
    's24-progress', 's25-quiz', 's26-roundup',
  ]);
  deepStrictEqual(L!.sections.map((s) => s.type), [
    'scene', 'goals', 'tapTable',
    'examples', 'cardDeck', 'examples', 'trapDrill', 'groupDrill',
    'examples', 'examples', 'cardDeck', 'commonErrors',
    'examples', 'trapDrill', 'cardDeck', 'groupDrill',
    'examples', 'examples',
    'reading', 'scenario', 'dictation', 'practice', 'reviewDeck',
    'progressCheck', 'quiz', 'roundup',
  ]);
});

/** THE MISSION COUNT IS ABOVE THE CONVENTION AND THE BUILD SAYS SO.
 *
 *  Doctrine §F gives 19 to 24 and the brief repeats it. Ledger §a2.13-0 measured
 *  that the 24-section shape came from a2.01, was copied six times and was never
 *  checked against a subject; there is no ceiling in schema.ts and a2.13 shipped
 *  32. THREE deferrals close in this lesson and each of them is a screen or it
 *  is nothing. Asserted as an exact number so a later author who trims it back
 *  has to decide which closure to drop. */
test('twenty-six sections and seven acts, which is a declared overrun of the convention', { skip: noLesson }, () => {
  strictEqual(L!.sections.length, 26);
  const acts = L!.acts ?? [];
  strictEqual(acts.length, 7);
  deepStrictEqual(acts.map((a) => a.sections.length), [3, 5, 4, 4, 2, 5, 3]);
  // ACT 2 IS THE OWNS AND THE PARADIGM IS THREE SECTIONS. Doctrine §B.5.
  // Written as literals rather than derived from the acts, because a comparison
  // between two reads of the same array is always true.
  strictEqual(acts[1]!.id, 'act2');
  deepStrictEqual(acts[1]!.sections, ['s04-pair', 's05-english', 's06-six', 's07-where', 's08-produce']);
  // AND ACT 5 IS THE TWO CLOSURES, which is what the overrun buys.
  deepStrictEqual(acts[4]!.sections, ['s17-inside', 's18-ago']);
  const claimed = acts.flatMap((a) => a.sections);
  strictEqual(new Set(claimed).size, claimed.length, 'two acts claim one section');
  strictEqual(claimed.length, L!.sections.length);
});

test('the identity block, byte for byte from the unit', { skip: noLesson }, () => {
  const u = seed.units.find((x) => x.id === 'a2.05');
  ok(u, 'unit a2.05 is missing');
  strictEqual(String(u!.seq), '16');
  strictEqual(u!.title, 'The Passé Composé with Avoir');
  strictEqual(u!.sub, 'Le passé composé avec avoir');
  strictEqual(u!.canDo, 'Can talk about the past with avoir and place the negation around the auxiliary');
  deepStrictEqual(u!.prereqUnitIds, [ER_UNIT, AVOIR_UNIT]);
  ok((u!.lessonIds ?? []).includes('a2.05.l1'));
  strictEqual(L!.tag, 'A2 · LEÇON 16');
  strictEqual(L!.title, u!.sub);
  strictEqual((L!.overview as { titleEn?: string }).titleEn, u!.title);
  // v5. Five versions, and every bump is a defect a layer below it could not
  // see:
  //   v2  two SEED-WIDE tests: a glossary entry that underlined nothing, and
  //       the banned word "honestly" inside an audio brief, which no
  //       house-copy walk in this band reads.
  //   v3  a PIXEL 6: the intro named a unit id on the lesson cover, and a
  //       scene bubble silently lost its own tail.
  //   v4  the v3 fix for that bubble DID NOT WORK and the device said so. The
  //       theory was that the bubble hugs its widest child.
  //   v5  NOR DID v4. The "spaced exclamation mark" reading was an artifact of
  //       one sample; a bench of five markups showed the same string clipping
  //       in one position and not another. The APP was fixed instead, the
  //       content workaround was reverted, and the guard was deleted rather
  //       than rewritten.
  //   v6  the reading answer said "a little word you conjugate", and `conjugate`
  //       is grammar jargon on a drawn surface. a2.35 swept the whole band for
  //       these and found five across four lessons; this was one. Reworded to
  //       "a little word that changes for the person". Nothing else moved.
  strictEqual(L!.version, 7);
});

/* ══════════════════════════════════════════════════════════════════════════
 *  THE LEDGER DECISION: A PAST FORM IS NOT A CORPUS ITEM
 *
 *  Doctrine §E listed it as undecided and the brief said sixty rows or zero.
 *  The answer is ZERO on both sides, and a2.20 inherits it. This is the
 *  assertion that keeps it true.
 * ═══════════════════════════════════════════════════════════════════════ */

test('this lesson authors sentences only, and no bare past form exists as a headword', { skip: noLesson }, () => {
  const rows = myRows();
  strictEqual(rows.length, 36);
  for (const r of rows) {
    strictEqual(r.kind, 'sentence', `${r.id} is a headword and this lesson authors sentences only`);
    // AND `kind` ALONE CANNOT SEE A BARE PAST FORM. Found by mutation: the
    // corpus helper writes `kind: 'sentence'` on every row it makes, so an `fr`
    // changed from « J'ai parlé. » to « parlé » is a headword in everything but
    // the field the guard was reading. A row with no whitespace is a bare word
    // whatever it calls itself.
    ok(/\s/.test(r.fr), `${r.id} holds the single word ${JSON.stringify(r.fr)}, which is a headword whatever its kind says`);
    strictEqual(r.level, 'a2', `${r.id}`);
    strictEqual(r.theme, THEME, `${r.id}`);
    ok(!isA220(r.id), `${r.id} is inside the block reserved for ${IRREGULAR_UNIT}`);
  }
  const ids = rows.map((r) => r.id).sort();
  strictEqual(ids[0], 'fr.a2.verbes.541');
  strictEqual(ids[ids.length - 1], 'fr.a2.verbes.576');
  // AND THE DECISION, AS AN ABSENCE ACROSS THE WHOLE SEED. Not one regular past
  // form is a headword anywhere, which is what makes the split with a2.20 hold
  // and what makes a hundred colliding rows in one theme impossible.
  const bare = seed.items.filter((i) => i.kind === 'word' && REGULAR_PAST_FORMS.includes(i.fr));
  deepStrictEqual(bare.map((i) => `${i.fr} (${i.id})`), []);
});

test(`${IRREGULAR_UNIT}'s block belongs to ${IRREGULAR_UNIT} and holds nothing of this lesson's`, { skip: noLesson }, () => {
  // a2.20 is the next lesson and it had to agree the split. Its range is
  // recorded here so its author finds the number without reading the ledger.
  //
  // AMENDED BY THE a2.20 BUILD, 2026-08-14. This assertion read « the block is
  // reserved and EMPTY » and it went red the moment a2.20 applied its
  // forty-three rows into it, which is the reservation working rather than
  // failing. The durable claim is the one this lesson can actually make: NOT ONE
  // ROW OF a2.05 IS INSIDE a2.20's BLOCK. Whether that block is empty is a2.20's
  // business and it is asserted in a2-20-participes.test.ts.
  const mineInA220 = myRows().filter((r) => isA220(r.id));
  deepStrictEqual(mineInA220.map((r) => r.id), []);
  strictEqual(A220_BLOCK.from, 591);
  strictEqual(A220_BLOCK.to, 650);
  // And every row that IS in there belongs to the lesson the block was reserved
  // for, so a third party landing inside it is still caught here.
  const occupants = seed.items.filter((i) => isA220(i.id));
  const a220Lesson = seed.lessons.find((l) => l.id === 'a2.20.l1');
  if (a220Lesson) {
    const owned = new Set(a220Lesson.itemIds ?? []);
    deepStrictEqual(occupants.map((i) => i.id).filter((id) => !owned.has(id)), []);
  } else {
    deepStrictEqual(occupants.map((i) => i.id), []);
  }
});

/* ══════════════════════════════════════════════════════════════════════════
 *  THE ENDINGS: ONE GRID, ONE ROW PER GROUP, ALL THREE UNITS NAMED
 * ═══════════════════════════════════════════════════════════════════════ */

/** Written out by hand. The lesson reads these off a constant and this file
 *  does not, so an edit to the constant has to be repeated here on purpose. */
const GRID_ROWS: readonly [string, string, string][] = [
  ['-ER', 'parler', 'parlé'],
  ['-IR', 'finir', 'fini'],
  ['-RE', 'vendre', 'vendu'],
];

test('the three endings are in ONE grid, one row per group, and every ending differs', { skip: noLesson }, () => {
  const g = sec('s03-endings') as { type?: string; cols?: string[]; rows?: { cells: string[] }[] } | undefined;
  strictEqual(g?.type, 'tapTable', 'the three endings belong in one grid');
  strictEqual((g!.cols ?? []).length, 3, 'a2.17 measured a three-column cell at eleven characters');
  strictEqual((g!.rows ?? []).length, 3);
  GRID_ROWS.forEach(([group, verb, past], i) => {
    const row = g!.rows![i]!;
    deepStrictEqual(row.cells, [group, verb, past], `grid row ${i}`);
    for (const cell of row.cells) ok(cell.length <= 11, `cell ${JSON.stringify(cell)} is ${cell.length} characters`);
  });
  // THE ARGUMENT OF THE SCREEN: three groups, three different endings.
  strictEqual(new Set(GRID_ROWS.map((r) => r[2].slice(-1))).size, 3);
  // AND NO OTHER SECTION IS A SECOND GRID.
  strictEqual(L!.sections.filter((s) => s.type === 'tapTable' || s.type === 'table').length, 1);
});

test('all three units that taught a group are named, and named on the payoff screen', { skip: noLesson }, () => {
  const text = learnerText();
  for (const u of [ER_UNIT, IR_UNIT, RE_UNIT]) ok(namesUnitLabel(text, u), `${u} taught one of the three groups and is never named by its lesson label`);
  const groups = strings(sec('s10-groups')).join('\n');
  for (const u of [ER_UNIT, IR_UNIT, RE_UNIT]) ok(namesUnitLabel(groups, u), `s10-groups is the payoff screen and does not name ${u}`);
});

/* ══════════════════════════════════════════════════════════════════════════
 *  THE OWNS: THE AFFIRMATIVE AND THE NEGATIVE, ADJACENT, IN ONE SECTION
 *
 *  THE LAYOUT CLAIM THE BRIEF MAKES FIRST. Anything that showed the negative in
 *  a separate section would have hidden the only thing the learner needs to see.
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
    // THE NEGATIVE IS THE AFFIRMATIVE WITH THE TWO WORDS IN IT, once the je
    // elision is put back.
    strictEqual(reduceNegative(neg).replace(/\s+/g, ''), pos.replace(/\s+/g, ''), `examples ${i} and ${i + 1} are not the same sentence`);
    // AND THE `pas` SITS IN THE GAP, between avoir and the past form.
    const m = /(ai|as|a|avons|avez|ont)\s+pas\s+([\p{L}]+)/iu.exec(neg);
    ok(m, `example ${i + 1} does not put pas between a form of avoir and the next word: ${neg}`);
    strictEqual(m![2]!.toLowerCase(), FRAME_PAST);
  }
});

test('every person has both halves in the corpus, and the il negative is a published card', { skip: noLesson }, () => {
  const pairs: readonly [string, string][] = [
    ['fr.a2.verbes.541', 'fr.a2.verbes.547'],
    ['fr.a2.verbes.542', 'fr.a2.verbes.548'],
    ['fr.a2.verbes.543', IL_NEGATIVE_ID],
    ['fr.a2.verbes.544', 'fr.a2.verbes.549'],
    ['fr.a2.verbes.545', 'fr.a2.verbes.550'],
    ['fr.a2.verbes.546', 'fr.a2.verbes.551'],
  ];
  for (const [pos, neg] of pairs) {
    const p = byIdItem.get(pos);
    const n = byIdItem.get(neg);
    ok(p && n, `${pos} / ${neg}`);
    ok(p!.fr.endsWith(`${FRAME_PAST}.`), `${p!.id} does not end on the frame's past form`);
    ok(n!.fr.endsWith(`${FRAME_PAST}.`), `${n!.id} does not end on the frame's past form`);
    strictEqual(reduceNegative(n!.fr), p!.fr, `${n!.id} is not ${p!.id} with the two words in it`);
  }
  // EXACTLY ONE OF THE SIX NEGATIVES IS AN IMPORT, and it is the one respelled
  // passé-composé negative in the whole database.
  strictEqual(pairs.filter(([, neg]) => !isMine(neg)).length, 1);
  strictEqual(pairs[2]![1], IL_NEGATIVE_ID);
  strictEqual(byIdItem.get(IL_NEGATIVE_ID)!.fr, "Il n'a pas mangé.");
  strictEqual(byIdItem.get(IL_NEGATIVE_ID)!.theme, 'masterclass');
});

/** THE `je` ELISION, WHICH THE FIRST DRY RUN FOUND. « J'ai mangé. » elides
 *  je + ai and « Je n'ai pas mangé. » does not, because the n' is between them.
 *  The negative is not just the sentence with two words added: the first word
 *  changes shape too, and only in this person. */
test('the je pair needs the elision put back before it reduces', { skip: noLesson }, () => {
  const pos = byIdItem.get('fr.a2.verbes.541')!.fr;
  const neg = byIdItem.get('fr.a2.verbes.547')!.fr;
  strictEqual(pos, "J'ai mangé.");
  strictEqual(neg, "Je n'ai pas mangé.");
  // The naive strip every other lesson in this band uses leaves « Je ai mangé. »
  const naive = neg.replace(/\bne\s+/i, '').replace(/\bn['’]/i, '').replace(/\bpas\s+/i, '');
  strictEqual(naive.trim(), 'Je ai mangé.');
  strictEqual(reduceNegative(neg), pos);
  // AND THE LESSON SAYS SO ON THE SCREEN WHERE THE SIX PERSONS LINE UP.
  const six = strings(sec('s06-six')).join('\n');
  ok(/shorten/i.test(six), 's06-six does not say the ne shortens');
});

/* ══════════════════════════════════════════════════════════════════════════
 *  THE FOUR SHAPES
 * ═══════════════════════════════════════════════════════════════════════ */

test('the shapes fire on the errors and not on this lesson\'s own English', () => {
  for (const line of ["Je n'ai mangé pas.", "Il n'a fini pas.", "Nous n'avons parlé pas.", "Elle n'a répondu pas hier."]) {
    ok(fires(PAS_AFTER_PAST, line), `PAS_AFTER_PAST does not fire on ${line}`);
  }
  for (const line of ["Je n'ai pas mangé.", "Il n'a pas mangé.", "Nous n'avons pas fini.", REFRAME,
    'You did not stall on a word you had not learned.', "J'ai mangé une pomme."]) {
    ok(!fires(PAS_AFTER_PAST, line), `PAS_AFTER_PAST fires on ${line}`);
  }
  for (const line of ["J'ai manger.", "Il a parler à sa mère.", "Nous avons finir le rapport.", "Je n'ai pas manger."]) {
    ok(fires(INFINITIVE_AFTER_AVOIR, line), `INFINITIVE_AFTER_AVOIR does not fire on ${line}`);
  }
  // a2.17 §4: half a learner surface is English by design, and « on a » is a
  // French subject plus an auxiliary. A letters-only shape fires on every one
  // of these, which is why the second half of the shape is a LIST.
  for (const line of ["J'ai mangé.", 'Il a fini.', 'Il a vendu.', 'Je vais manger.',
    'You did not stall on a word you had not learned.', 'The jargon is on a learner surface.',
    'a2.19 measured it on a Pixel 6.', 'Everything on a card comes from the corpus.']) {
    ok(!fires(INFINITIVE_AFTER_AVOIR, line), `INFINITIVE_AFTER_AVOIR fires on ${line}`);
  }
  for (const line of ["J'ai mangée.", 'Elle a mangée une pomme.', 'Nous avons visitées.', "Je n'ai pas mangée."]) {
    ok(fires(AGREED_AFTER_AVOIR, line), `AGREED_AFTER_AVOIR does not fire on ${line}`);
  }
  for (const line of ["J'ai mangé une pomme.", 'Elle a mangé une pomme.', 'Nous avons beaucoup travaillé.',
    'Elle est allée.', 'on a issues', 'il a values']) {
    ok(!fires(AGREED_AFTER_AVOIR, line), `AGREED_AFTER_AVOIR fires on ${line}`);
  }
  for (const line of ['Je suis allé à Paris.', 'Elle est partie hier.', 'Ils sont venus samedi.']) {
    ok(fires(ETRE_AUXILIARY, line), `ETRE_AUXILIARY does not fire on ${line}`);
  }
  for (const line of ['Il est midi.', 'On est prêt.', "J'ai mangé.", 'Je vais partir.']) {
    ok(!fires(ETRE_AUXILIARY, line), `ETRE_AUXILIARY fires on ${line}`);
  }
});

/** The seven sections where the error IS the content, written out by hand. */
const WRONG_FORM_SECTIONS = ['s07-where', 's12-errors', 's05-english', 's08-produce', 's16-unseen', 's11-noagree', 's25-quiz'];

test('the three error shapes appear only where the error is the content', { skip: noLesson }, () => {
  const legal = new Set(WRONG_FORM_SECTIONS);
  const SHAPES: readonly [string, RegExp][] = [
    ['PAS_AFTER_PAST', PAS_AFTER_PAST],
    ['INFINITIVE_AFTER_AVOIR', INFINITIVE_AFTER_AVOIR],
    ['AGREED_AFTER_AVOIR', AGREED_AFTER_AVOIR],
  ];
  for (const s of L!.sections) {
    const sid = (s as { id?: string }).id ?? '';
    if (legal.has(sid)) continue;
    for (const line of strings(s)) {
      for (const [name, re] of SHAPES) ok(!fires(re, line), `${sid} matches ${name}: ${line}`);
    }
  }
  for (const v of [L!.sheets ?? [], L!.terms ?? {}, [L!.intro ?? ''], L!.overview ?? {}]) {
    for (const line of strings(v)) {
      for (const [name, re] of SHAPES) ok(!fires(re, line), `off-section matches ${name}: ${line}`);
    }
  }
  // AND THEY APPEAR IN THOSE SEVEN, because a trap nobody sees is not a trap.
  const homes = L!.sections.filter((s) => legal.has((s as { id?: string }).id ?? ''));
  const hits = homes.filter((s) => strings(s).some((x) => SHAPES.some(([, re]) => fires(re, x))));
  ok(hits.length >= 4, `the errors appear in ${hits.length} of the seven sections that are allowed them`);
});

test('être is never the first word, anywhere, in any section or row', { skip: noLesson }, () => {
  for (const s of L!.sections) {
    const sid = (s as { id?: string }).id ?? '';
    for (const line of strings(s)) ok(!fires(ETRE_AUXILIARY, line), `${sid}: ${line}`);
  }
  for (const r of myRows()) ok(!fires(ETRE_AUXILIARY, r.fr), `${r.id}: ${r.fr}`);
  // AND THE FACT THAT IT EXISTS IS NAMED, so a learner who meets « je suis allé »
  // tomorrow does not conclude they were taught a simplification.
  ok(namesUnitLabel(learnerText(), ETRE_UNIT), `${ETRE_UNIT} is never named and it says the opposite of this lesson`);
});

test('no corpus row in this block matches any of the four shapes', { skip: noLesson }, () => {
  for (const r of myRows()) {
    ok(!fires(PAS_AFTER_PAST, r.fr), `${r.id}: ${r.fr}`);
    ok(!fires(INFINITIVE_AFTER_AVOIR, r.fr), `${r.id}: ${r.fr}`);
    ok(!fires(AGREED_AFTER_AVOIR, r.fr), `${r.id}: ${r.fr}`);
  }
});

/* ══════════════════════════════════════════════════════════════════════════
 *  NOT ONE IRREGULAR PAST FORM
 * ═══════════════════════════════════════════════════════════════════════ */

test('no irregular past form appears anywhere, and the five frequent ones are asserted by name', { skip: noLesson }, () => {
  const surfaces = display(L!.sections).concat(
    display(L!.sheets ?? []), display(L!.terms ?? {}), [L!.intro ?? ''],
    display(L!.overview ?? {}), display(L!.acts ?? []), display(L!.drills ?? []),
  ).join('\n');
  for (const w of IRREGULAR_PAST) ok(!hasPhrase(surfaces, w), `the irregular past form "${w}" is on a learner surface`);
  for (const w of IRREGULAR_BY_NAME) {
    ok(IRREGULAR_PAST.includes(w), `"${w}" is one of the five the brief names and is not in the list`);
    ok(!hasPhrase(surfaces, w), `"${w}" is on a learner surface`);
  }
  for (const r of myRows()) for (const w of IRREGULAR_PAST) ok(!hasPhrase(r.fr, w), `${r.id} holds "${w}"`);
  // AND THE FACT THAT THEY EXIST IS SAID, with a2.20 named.
  ok(/past form you could not have guessed/i.test(learnerText()),
    'nothing says that some past forms cannot be built from the naming form');
  ok(namesUnitLabel(learnerText(), IRREGULAR_UNIT), `${IRREGULAR_UNIT} owns them and is never named by its lesson label`);
});

/* ══════════════════════════════════════════════════════════════════════════
 *  NO AGREEMENT WITH AVOIR, AND THE ONE CASE THAT IS a2.06's
 * ═══════════════════════════════════════════════════════════════════════ */

test('the no-agreement claim is stated as a literal, and its inversion appears nowhere', { skip: noLesson }, () => {
  const text = learnerText();
  // FOUND BY MUTATION on a2.19: the claim lives in one constant rendered on
  // three screens, so inverting it changed all three at once and every guard
  // that looked for the constant kept finding it. a2.16 §3.
  ok(/does not agree with anybody|does not change for anybody|it is one shape/i.test(text),
    'nothing says the past form does not agree after avoir, and a2.21 depends on this side of it');
  ok(!/agrees with the subject after avoir|the past form agrees with avoir/i.test(text),
    'a learner surface says the past form agrees after avoir');
  // AND THE ONE CASE THAT DOES IS HANDED TO a2.06 RATHER THAN DENIED.
  ok(namesUnitLabel(text, PRONOUN_UNIT), `${PRONOUN_UNIT} owns the one case where a past form agrees with avoir and is never named`);
  // THE FALSE RULE IS NAMED IN EXACTLY ONE PLACE AND IT MUST BE THERE: the deck
  // that shows « J'ai mangé une pomme. » names it in order to break it. A guard
  // that banned it outright would have removed the card that makes the reframe
  // true, which is why the brief's own reframe candidate was rejected.
  const FALSE_RULE = /everything else goes between|everything goes in the gap/i;
  for (const s of L!.sections) {
    const sid = (s as { id?: string }).id ?? '';
    if (sid === 's11-noagree') continue;
    for (const line of strings(s)) ok(!FALSE_RULE.test(line), `${sid} says everything goes in the gap`);
  }
  // AND OFF THE SECTIONS. Found by mutation: the false rule went into a TERM
  // body, which is a learner surface this walk did not read.
  for (const v of [L!.sheets ?? [], L!.terms ?? {}, [L!.intro ?? ''], L!.overview ?? {}]) {
    for (const line of strings(v)) ok(!FALSE_RULE.test(line), `an off-section surface says everything goes in the gap: ${line}`);
  }
  const noagree = strings(sec('s11-noagree')).join('\n');
  ok(FALSE_RULE.test(noagree), 's11-noagree is where the false rule is named and broken, and it does not name it');
  ok(hasPhrase(noagree, "J'ai mangé une pomme."), 's11-noagree does not show the sentence that breaks it');
});

/* ══════════════════════════════════════════════════════════════════════════
 *  THE BACK-REFERENCES, AS LITERALS, AND THE TWO CLOSURES
 * ═══════════════════════════════════════════════════════════════════════ */

test(`${FUTUR_UNIT}'s negation rule is quoted verbatim and never paraphrased`, { skip: noLesson }, () => {
  const text = learnerText();
  // THE BRIEF ASKS FOR THE EXACT WORDING AND SAYS A PARAPHRASE MUST GO RED.
  ok(hasPhrase(text, A219_REFRAME), `${FUTUR_UNIT}'s rule is not quoted verbatim`);
  ok(namesUnitLabel(text, FUTUR_UNIT), `${FUTUR_UNIT} is never named by its lesson label`);
  // AND IT IS ON THE SCREEN WHERE THE NEGATIVE ARRIVES, not only in a term.
  const english = strings(sec('s05-english')).join('\n');
  ok(hasPhrase(english, A219_REFRAME), 's05-english is where the negative arrives and does not carry the wording');
  ok(namesUnitLabel(english, FUTUR_UNIT), 's05-english quotes the rule and does not credit it');
  // AND THIS LESSON HAS NOT WRITTEN A SECOND VERSION OF IT.
  ok(!/wrap the (?:auxiliary|first word|verb that moved)/i.test(text),
    'a learner surface carries a second wording of the rule the brief said to quote');
});

test(`${ADVERB_UNIT}'s adverb deferral is closed, with its own wording`, { skip: noLesson }, () => {
  const inside = strings(sec('s17-inside')).join('\n');
  ok(hasPhrase(inside, A217_DEFERRAL), 's17-inside closes the deferral and does not quote its own wording');
  ok(namesUnitLabel(inside, ADVERB_UNIT), 's17-inside does not name a2.17');
  // AND THE TWO PUBLISHED CARDS THAT PROVE THE SHAPE ARE ON IT. Three of the
  // 177 sentences that put a short adverb in the gap carry a respelling and two
  // of the three are here.
  for (const id of ['fr.sons.alphabet.402', 'fr.sons.voyelles.355']) {
    const r = byIdItem.get(id);
    ok(r, `${id} is not in the seed`);
    ok(hasPhrase(inside, r!.fr), `s17-inside does not draw ${id}`);
    ok(L!.itemIds.includes(id), `${id} is not in itemIds`);
  }
});

test(`${TIME_UNIT}'s "ago" deferral is closed, with its own sentence beside this lesson's`, { skip: noLesson }, () => {
  const ago = strings(sec('s18-ago')).join('\n');
  ok(hasPhrase(ago, "J'ai commencé il y a trois jours."), `${TIME_UNIT}'s own sentence is not on the screen that closes its loop`);
  ok(hasPhrase(ago, 'il y a trois jours'), `${TIME_UNIT}'s phrase card is not beside it`);
  ok(namesUnitLabel(ago, TIME_UNIT), 's18-ago does not name a2.18');
  ok(/how long ago/i.test(ago), 's18-ago does not say what it is for, and a2.18\'s canDo was reworded because this lesson owns it');
  for (const id of ['fr.a2.prepositions-essentielles.174', 'fr.a2.prepositions-essentielles.186']) {
    ok(byIdItem.has(id), `${id} is not in the seed`);
    ok(L!.itemIds.includes(id), `${id} is not in itemIds`);
  }
});

test('every unit this lesson leans on is named by its lesson label, including the third dependent', { skip: noLesson }, () => {
  const text = learnerText();
  for (const u of [AVOIR_UNIT, NEGATION_UNIT, ER_UNIT, IR_UNIT, RE_UNIT, ADVERB_UNIT,
    TIME_UNIT, FUTUR_UNIT, IRREGULAR_UNIT, ETRE_UNIT, PRONOUN_UNIT, SCHOOL_UNIT]) {
    ok(namesUnitLabel(text, u), `${u} is never named on a learner surface`);
  }
  // THE BRIEF SAID FOUR UNITS DEPEND ON THIS ONE AND THERE ARE THREE. a2.31 is
  // the one no document in this band mentions.
  const dependents = seed.units.filter((u) => (u.prereqUnitIds ?? []).includes('a2.05')).map((u) => u.id).sort();
  deepStrictEqual(dependents, [IRREGULAR_UNIT, ETRE_UNIT, SCHOOL_UNIT].sort());
});

test('this lesson\'s reframe is carried, and pinned where the learner meets it', { skip: noLesson }, () => {
  strictEqual(L!.reframe, REFRAME);
  ok(REFRAME.trim().split(/\s+/).length <= 14, 'the reframe has to survive recall mid-utterance');
  const carried = L!.sections.filter((s) => strings(s).some((x) => x.includes(REFRAME))).length;
  ok(carried >= 6, `the reframe is carried by ${carried} sections and the doctrine's good lessons use six to eight`);
  // A THRESHOLD IS NOT A LOCATION. a2.19 §7: rewording it in ONE section left
  // eight carrying it, so a count guard let it through.
  const scene = sec('s01-scene') as { closing?: { text?: string } } | undefined;
  strictEqual(scene?.closing?.text, REFRAME, 'the scene does not close on the reframe');
  const trap = sec('s07-where') as { rule?: { body?: string } } | undefined;
  ok(trap?.rule?.body?.includes(REFRAME), 'the Owns trap\'s rule card does not carry the reframe verbatim');
  const sheetGap = (L!.sheets ?? [])[0]!.sections!.find((s) => (s as { id?: string }).id === 'sheet-gap') as { body?: string } | undefined;
  ok(sheetGap?.body?.includes(REFRAME), 'the reference sheet\'s gap card does not carry the reframe verbatim');
});

/* ══════════════════════════════════════════════════════════════════════════
 *  THE SOUND CONTRAST, AND WHAT NO EAR MAY BE ASKED
 * ═══════════════════════════════════════════════════════════════════════ */

/** The pairs that are ONE SOUND. No ear question may offer two members of one
 *  of these, because there is no correct answer between them and marking one
 *  right certifies a bug. The brief asks for this to be said in a report; a
 *  sentence in a report cannot fail. */
const NO_EAR_QUESTION: readonly (readonly [string, string])[] = [
  ['manger', 'mangé'], ['parler', 'parlé'], ['travailler', 'travaillé'],
  ['payer', 'payé'], ['visiter', 'visité'], ['danser', 'dansé'],
];

test('the tense contrast is side by side AND in one audio take', { skip: noLesson }, () => {
  const listen = strings(sec('s13-listen')).join('\n');
  const which = sec('s14-which') as { cards?: { fr: string }[]; audio?: { recordingId?: string } } | undefined;
  const FOUR = ['Je vais manger.', "J'ai mangé.", 'Je vais manger avec des amis.', "J'ai mangé avec des amis."];
  for (const f of FOUR) {
    ok(hasPhrase(listen, f), `s13-listen does not hold ${f}`);
    ok((which?.cards ?? []).some((c) => c.fr === f), `the tense trap does not carry ${f} as a card`);
  }
  // THE BRIEF ASKS FOR A SOUND CONTRAST RATHER THAN A READING ONE, and an audio
  // step plays each card's own `fr` at the section's speeds, which is what makes
  // it one take with one voice.
  strictEqual(which?.audio?.recordingId, 'rec-a2-05-tense');
  const take = (L!.audio?.recorded ?? []).find((r) => r.id === 'rec-a2-05-tense');
  ok(take, 'the tense take is not briefed');
  for (const f of FOUR) ok((take!.clipIds ?? []).includes(f), `the tense take does not contain ${f}`);
  ok(/ONE TAKE/.test(take!.desc), 'the tense take does not say it is one take');
  ok(/SAME SOUND/i.test(take!.desc), 'the tense take does not say the last word is the same sound either way');
  // AND a2.19's OWN PUBLISHED CARD IS ONE OF THE FOUR.
  strictEqual(byIdItem.get('fr.a2.verbes.527')!.fr, 'Je vais manger avec des amis.');
  ok(L!.itemIds.includes('fr.a2.verbes.527'));
});

test('exactly one ear question, and it asks about the little word in front', { skip: noLesson }, () => {
  const qs = quizQuestions(L!.sections.find((s) => s.type === 'quiz')!);
  const ear = qs.filter((q) => q.format === 'listenChoose');
  strictEqual(ear.length, 1, 'this lesson asks exactly one ear question');
  strictEqual(ear[0]!.ref, 's14-which');
  // NO EAR QUESTION MAY OFFER TWO OPTIONS THAT ARE ONE SOUND. That is the point
  // of the lesson and any question pretending otherwise certifies a bug.
  for (const q of qs) {
    const opts = (q.opts ?? []) as string[];
    for (let i = 0; i < opts.length; i += 1) {
      for (let j = i + 1; j < opts.length; j += 1) {
        for (const [x, y] of NO_EAR_QUESTION) {
          ok(!(x !== y && opts[i]!.replace(x, y) === opts[j]),
            `${q.format} options ${opts[i]} and ${opts[j]} differ only by ${x}/${y}, which is one sound`);
        }
      }
    }
  }
  // AND THE LESSON SAYS SO OUT LOUD.
  ok(/same sound|one sound/i.test(strings(sec('s15-nothear')).join('\n')),
    's15-nothear does not say that the pair is one sound');
});

/* ══════════════════════════════════════════════════════════════════════════
 *  THE IMPORTS, ASSERTED BY ID
 * ═══════════════════════════════════════════════════════════════════════ */

const IMPORTED_NEGATIVES = [
  'fr.a2.negation-et-restriction.113',
  'fr.a2.negation-et-restriction.114',
  'fr.a2.negation-et-restriction.117',
  'fr.a2.negation-et-restriction.142',
];

test('the published negatives are carried, respelled and outside this theme', { skip: noLesson }, () => {
  for (const id of IMPORTED_NEGATIVES) {
    const r = byIdItem.get(id);
    ok(r, `${id} is not in the seed and the cards that name it would draw blank`);
    strictEqual(r!.theme, 'negation-et-restriction', `${id} is meant to come from another theme`);
    ok(r!.respell && r!.respell.length > 0, `${id} has no respelling and a row is imported for its respelling`);
    ok((r!.drills ?? []).includes('flashcard'), `${id} cannot be released into a deck`);
    ok((r!.drills ?? []).includes('voiceflash'), `${id} cannot be spoken`);
    ok(!fires(PAS_AFTER_PAST, r!.fr), `${id} puts pas behind the past form`);
    ok(L!.itemIds.includes(id), `${id} is not in itemIds`);
  }
  // AND AT LEAST ONE IS A ROLE-PLAY ANSWER, which is a production surface.
  const scenario = strings(sec('s20-scenario')).join('\n');
  const used = IMPORTED_NEGATIVES.filter((id) => hasPhrase(scenario, byIdItem.get(id)!.fr));
  ok(used.length >= 1, 'no imported sentence from another theme is used on a production surface');
});

/** avoir IS ABSENT FROM THE SEED CUT AND THE MERGE CARRIES IT.
 *
 *  Corrections §10 and a2.11's finding in its sharpest form: the headword the
 *  whole construction runs on, the first word of every sentence in the lesson,
 *  was not in the cut. Act 1's tranche releases it, so without the carry the
 *  deck opens on a blank card. */
test('the headword avoir and the frame verb resolve, and so do the cards the traps rest on', { skip: noLesson }, () => {
  for (const id of ['fr.sons.verbes-essentiels.002', 'fr.sons.muettes.037', 'fr.sons.mots-essentiels.053',
    IL_NEGATIVE_ID, 'fr.a2.verbes.027', 'fr.sons.jours-et-mois.027']) {
    const r = byIdItem.get(id);
    ok(r, `${id} is not in the seed`);
    ok(L!.itemIds.includes(id), `${id} is not in itemIds`);
  }
  strictEqual(byIdItem.get('fr.sons.verbes-essentiels.002')!.fr, 'avoir');
  strictEqual(byIdItem.get('fr.sons.muettes.037')!.fr, FRAME_VERB);
  // AND THE ONE REPAIR THIS BUILD MAKES LANDED. a2.18 §1: a hyphen after the n
  // leaves the nasal VISIBLE, so the checker flagged the stored value and the
  // minimal repair is the house one.
  strictEqual(byIdItem.get('fr.sons.jours-et-mois.027')!.respell, 'ah-vahⁿ-TYEHR');
  ok(hasPlainNasalFor('avant-hier', 'ah-vahn-TYEHR'), 'the repaired row was not flagged before the repair');
  ok(!hasPlainNasalFor('avant-hier', 'ah-vahⁿ-TYEHR'), 'the repaired value is still flagged');
});

test('not one row this build touches carries a gender, and a1.03 has not moved', { skip: noLesson }, () => {
  for (const r of myRows()) strictEqual((r as { gender?: string }).gender ?? null, null, `${r.id} carries a gender`);
  for (const id of [...IMPORTED_NEGATIVES, 'fr.sons.verbes-essentiels.002', 'fr.sons.muettes.037',
    'fr.sons.jours-et-mois.025', 'fr.sons.jours-et-mois.027', IL_NEGATIVE_ID]) {
    strictEqual((byIdItem.get(id) as { gender?: string } | undefined)?.gender ?? null, null, `${id} carries a gender`);
  }
  // a2.04's ledger §0: the population is measured off THE SEED and a CARRY is
  // what puts a row there. THE ONE ROW THIS BUILD WANTED AND COULD NOT TAKE is
  // fr.sons.jours-et-mois.036 « la semaine dernière », which carries gender=f;
  // its VALUE is read off for two respellings, which does not carry it.
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

test('no duplicate fr inside the theme, computed the way flashhub-coverage does', () => {
  const strip = (s: string) => s.replace(/^(le |la |les |l'|l’|un |une |des |du |de la )/i, '').toLowerCase().trim();
  const inTheme = seed.items.filter((i) => i.theme === THEME);
  const byFr = new Map<string, string[]>();
  for (const i of inTheme) byFr.set(strip(i.fr), [...(byFr.get(strip(i.fr)) ?? []), i.id]);
  const dupes = [...byFr.entries()].filter(([, ids]) => ids.length > 1);
  strictEqual(dupes.length, 0, dupes.slice(0, 5).map(([k, ids]) => `${k} (${ids.join(', ')})`).join('; '));
});

/* ══════════════════════════════════════════════════════════════════════════
 *  THE RESPELLINGS
 * ═══════════════════════════════════════════════════════════════════════ */

test('every respelling is clean, and every nasal in the lesson is one the checker can see', { skip: noLesson }, () => {
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
  strictEqual(seen, 39, 'the number of nasals the checker can see has moved');
  strictEqual(missed, 0, `the checker misses ${missed}: ${missedRows.join(', ')}`);
  // a2.18 §1: a nasal is invisible when a LETTER follows the n or m inside the
  // token. Every nasal this lesson writes closes at a token boundary or in front
  // of a hyphen, which is why both repair tables are empty of blind entries.
});

/** a2.14 §1 NAMED THIS LESSON'S SHAPE AS THE NEXT VICTIM OF THE DOUBLED-NASAL
 *  BLIND SPOT AND IT IS NOT.
 *
 *  Its third blind spot is `if (/(?:nn|mm)/i.test(fr)) return false` running on
 *  the WHOLE French string, so one doubled nasal switches the check off for
 *  every other word in the line. Its own prediction named `pomme`, and this
 *  lesson authors two rows holding it. Measured clear, for the reason a2.14
 *  itself gave: `hasPlainNasal`'s first branch catches the two-letter house
 *  spellings before the French is ever consulted, and `mahⁿ` is one of them. */
test('the pomme rows hold a doubled nasal and the checker still sees their mahⁿ', { skip: noLesson }, () => {
  for (const fr of ["J'ai mangé une pomme.", 'Elle a mangé une pomme.']) {
    const r = myRows().find((x) => x.fr === fr);
    ok(r, `${fr} is not authored`);
    ok(/(?:nn|mm)/i.test(r!.fr), `${r!.id} is named as a doubled-nasal row and holds no nn or mm`);
    ok(r!.respell!.includes('mahⁿ'), `${r!.id} does not carry mahⁿ`);
    ok(hasPlainNasalFor(r!.fr, r!.respell!.replace('mahⁿ', 'mahn')),
      `${r!.id} holds a doubled nasal AND the checker cannot see its mahⁿ. a2.14 §1 has bitten.`);
  }
});

/** THE FALSE-POSITIVE PATH, ASSERTED IN BOTH DIRECTIONS, WHICH IS A FIRST IN
 *  THIS BAND. a2.04 §2 measured that `hasPlainNasal`'s first branch has no
 *  rescue path; a2.18 §2 sharpened the predictor to a real /m/ or /n/ after a
 *  two-letter house vowel. Six candidates from this lesson do not fire and a
 *  CONTROL does, so if the checker ever gains a rescue path the six stop being
 *  a silence and this goes red. */
test('the false-positive path is not met by this lesson, and the control still fires', () => {
  for (const [fr, respell] of [['une pomme', 'ün POM'], ['la pomme', 'lah POM'],
    ['la semaine dernière', 'lah suh-MEN dehr-NYEHR'], ['samedi', 'sam-DEE'],
    ['une heure', 'ün UHR'], ['la personne', 'lah pehr-SONN']] as const) {
    ok(!hasPlainNasalFor(fr, respell), `the false-positive path fires on ${fr}/${respell}`);
  }
  ok(hasPlainNasalFor('le problème', 'luh proh-BLEHM'),
    'the false-positive CONTROL no longer fires, so the six negatives above prove nothing');
});

/** A PUBLISHED ROW THIS LESSON DISPLAYS AND THE CHECKER IS WRONG ABOUT.
 *
 *  `fr.sons.alphabet.402` holds « deuxième », which is /dø.zjɛm/ with a real /m/
 *  after the two-letter house vowel EH. It is a2.18 §2's shape and the SEVENTH
 *  instance of it, and the first found on a row a lesson displays rather than on
 *  one it authored. Invariants §9: a false positive is not a violation, so the
 *  row is NOT repaired. Exempted by name, and the firing asserted, so a checker
 *  fix goes red here rather than leaving a dead exemption. */
test('the one imported row the checker is wrong about is exempted by name', { skip: noLesson }, () => {
  const r = byIdItem.get('fr.sons.alphabet.402');
  ok(r, 'fr.sons.alphabet.402 is not in the seed');
  strictEqual(r!.respell, 'ZHAY MAL ahⁿ-tahⁿ-DÜ LA deu-ZYEHM LEHTR');
  ok(r!.respell!.includes('ZYEHM'), 'the token the exemption is about has gone');
  ok(hasPlainNasalFor(r!.fr, r!.respell!),
    'fr.sons.alphabet.402 no longer fires. hasPlainNasal has gained a rescue path and this exemption can go.');
  // AND EVERY OTHER CARRIED ROW THIS LESSON DISPLAYS IS CLEAN.
  for (const id of [...IMPORTED_NEGATIVES, IL_NEGATIVE_ID, 'fr.a2.prepositions-essentielles.174',
    'fr.sons.voyelles.355', 'fr.sons.voyelles.445', 'fr.a2.verbes.527', 'fr.a2.verbes.027']) {
    const x = byIdItem.get(id)!;
    ok(!hasPlainNasalFor(x.fr, x.respell ?? ''), `${id} displays a flagged respelling`);
    ok(!(x.respell ?? '').includes('‿'), `${id} carries U+203F, which draws as an underscore on a Pixel 6`);
  }
});

/* ══════════════════════════════════════════════════════════════════════════
 *  THE DICTÉE, THROUGH THE REAL FUNCTION
 * ═══════════════════════════════════════════════════════════════════════ */

test('every dictée target is in LETTERS mode, and every WORD-mode row is out', { skip: noLesson }, () => {
  const dict = sec('s21-dictation') as { itemIds?: string[] } | undefined;
  const ids = dict?.itemIds ?? [];
  strictEqual(ids.length, 10);
  for (const id of ids) {
    const r = byIdItem.get(id);
    ok(r, `${id}`);
    strictEqual(dicteeMode(r!.fr), 'letters', `${id} "${r!.fr}" is ${letterCount(r!.fr)} letters`);
    ok((r!.drills ?? []).includes('dictation'), `${id} carries no dictation drill`);
  }
  for (const r of myRows()) {
    if (dicteeMode(r.fr) === 'words') ok(!(r.drills ?? []).includes('dictation'), `${r.id} spells in WORD mode and carries the drill`);
  }
  // THREE OF THE TEN ARE NEGATIVES, and they are the three pairs the dictée
  // runs: je, il and ils. The je one is the finding, because a2.19 could not
  // reach that person at all; the il one is the published card.
  const negatives = ids.filter((id) => /\bpas\b/i.test(byIdItem.get(id)!.fr));
  strictEqual(negatives.length, 3);
  ok(negatives.includes('fr.a2.verbes.547'), 'the je negative is the finding and it is not in the dictée');
  ok(negatives.includes(IL_NEGATIVE_ID), 'the published card is not in the dictée');
  // AND EACH OF THE THREE HAS ITS AFFIRMATIVE IN THE SAME MISSION, so the
  // learner spells the two extra words into a sentence they have just spelled
  // without them.
  for (const [pos, neg] of [['fr.a2.verbes.541', 'fr.a2.verbes.547'],
    ['fr.a2.verbes.543', IL_NEGATIVE_ID], ['fr.a2.verbes.546', 'fr.a2.verbes.551']] as const) {
    ok(ids.includes(pos) && ids.includes(neg), `${pos} / ${neg} are not both dictée targets`);
  }
});

/** THE MEASUREMENT THAT MADE `je` REACHABLE HERE AND NOT ONE SEQ BACK.
 *
 *  a2.19 §6 measured that `ne` and `pas` cost five letters, that its negative
 *  fits `dicteeMode`'s sixteen-letter LETTERS window in only three of eight
 *  persons, and that `je` is one letter over. It closed with *"a2.05's auxiliary
 *  plus participle will be longer still; budget for the frame before the
 *  content."*
 *
 *  Measured through the real function, that is FALSE and by four letters: `ne`
 *  elides to `n'` in front of every form of avoir, so the affirmative fits in
 *  all eight persons and the negative in SIX. The person a2.19 could not test is
 *  the first one this lesson tests. */
test('the elision buys four letters, and six of the eight negatives fit where a2.19 fitted three', () => {
  const rows: readonly [string, string, string, number, number, boolean][] = [
    ['je', "J'ai", "Je n'ai pas", 8, 13, true],
    ['tu', 'Tu as', "Tu n'as pas", 9, 13, true],
    ['il', 'Il a', "Il n'a pas", 8, 12, true],
    ['on', 'On a', "On n'a pas", 8, 12, true],
    ['elle', 'Elle a', "Elle n'a pas", 10, 14, true],
    ['nous', 'Nous avons', "Nous n'avons pas", 14, 18, false],
    ['vous', 'Vous avez', "Vous n'avez pas", 13, 17, false],
    ['ils', 'Ils ont', "Ils n'ont pas", 11, 15, true],
  ];
  let fit = 0;
  for (const [, aff, neg, affirmative, negative, negativeFits] of rows) {
    const pos = `${aff} ${FRAME_PAST}.`;
    const negS = `${neg} ${FRAME_PAST}.`;
    strictEqual(letterCount(pos), affirmative, pos);
    strictEqual(letterCount(negS), negative, negS);
    strictEqual(dicteeMode(pos), 'letters', `${pos} does not fit and all eight affirmatives are meant to`);
    strictEqual(dicteeMode(negS) === 'letters', negativeFits, negS);
    if (negativeFits) fit += 1;
  }
  strictEqual(fit, 6);
  // AND a2.19's OWN SENTENCE, AS A LITERAL. a2.16 §3: a constant whose job is to
  // remember another lesson's value has to be one.
  strictEqual(letterCount('Je ne vais pas partir.'), 17, 'a2.19\'s je negative is meant to be one letter over the limit of 16');
  strictEqual(dicteeMode('Je ne vais pas partir.'), 'words');
  strictEqual(dicteeMode("Je n'ai pas mangé."), 'letters');
  strictEqual(letterCount('Je ne vais pas partir.') - letterCount("Je n'ai pas mangé."), 4);
});

/* ══════════════════════════════════════════════════════════════════════════
 *  THE TRAP DRILLS, THE SHEET AND THE ROLE PLAY
 * ═══════════════════════════════════════════════════════════════════════ */

test('both trapDrills are stepped, gated, size-free, and their labels count their own cards', { skip: noLesson }, () => {
  const traps = L!.sections.filter((s) => s.type === 'trapDrill') as unknown as {
    id?: string; swipe?: boolean; say?: string; size?: string;
    steps?: { kind: string; gate?: boolean; label?: string }[]; audio?: { recordingId?: string }; cards?: { fr: string }[];
  }[];
  strictEqual(traps.length, 2);
  const recorded = new Map((L!.audio?.recorded ?? []).map((r) => [r.id, r.clipIds ?? []]));
  const WORD = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight'];
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
    // a2.18 §3: THE CARDS STEP'S LABEL COUNTS ITS OWN ARRAY and the pager draws
    // one dot per card directly under it. Found on a Pixel 6 and by nothing else.
    const cardsStep = (t.steps ?? []).find((s) => s.kind === 'cards');
    const want = WORD[(t.cards ?? []).length];
    ok(cardsStep?.label && want && hasPhrase(cardsStep.label, want),
      `${t.id}'s cards step is labelled ${cardsStep?.label} and it holds ${(t.cards ?? []).length} cards`);
    ok(want && hasPhrase(t.say ?? '', want), `${t.id}'s say does not count its cards`);
  }
});

test('the reference sheet is three columns wide, holds no cheatSheet, and its title fits the header bar', { skip: noLesson }, () => {
  const sheets = L!.sheets ?? [];
  strictEqual(sheets.length, 1);
  strictEqual(sheets[0]!.id, 'sheet.a2.05.passe');
  // a2.19 §3: the sheet's own title is drawn in the HEADER BAR and ellipsises
  // there while rendering in full on the card that opens it.
  ok((sheets[0]!.title ?? '').length <= 37, `the sheet title is ${(sheets[0]!.title ?? '').length} characters`);
  for (const s of sheets[0]!.sections ?? []) {
    ok(s.type !== 'cheatSheet', 'a cheatSheet inside a reference sheet draws its title and nothing else');
    const cols = (s as { cols?: string[] }).cols;
    if (cols) ok(cols.length <= 3, `a table inside a sheet holds three columns and this one holds ${cols.length}`);
    for (const r of ((s as { rows?: string[][] }).rows ?? [])) {
      for (const cell of r) ok(cell.length <= 12, `the sheet cell ${cell} is ${cell.length} characters`);
    }
  }
  // THE THREE TABLES: the six persons, the six negatives, and the three groups.
  // The brief calls this the most returned-to sheet in A2 because a2.20, a2.21
  // and a2.23 all lean on it; cross-lesson sheets do not exist, so what they
  // inherit is the rule, and this sheet holds everything the three of them
  // assume.
  const tables = (sheets[0]!.sections ?? []).filter((s) => s.type === 'table') as unknown as { rows?: string[][] }[];
  strictEqual(tables.length, 3);
  strictEqual((tables[0]!.rows ?? []).length, 6);
  strictEqual((tables[1]!.rows ?? []).length, 6);
  strictEqual((tables[2]!.rows ?? []).length, 3);
  // The third column of the two paradigm tables is the past form, six times.
  for (const t of tables.slice(0, 2)) {
    strictEqual(new Set((t.rows ?? []).map((r) => r[2])).size, 1);
    strictEqual((t.rows ?? [])[0]![2], FRAME_PAST);
  }
  deepStrictEqual(tables[2]!.rows, GRID_ROWS.map((r) => [...r]));
});

/** THE SCENE BUBBLE THAT CLIPPED, AND WHY THERE IS NO CONTENT RULE HERE.
 *
 *  fr.a2.verbes.572 was authored « Ah, ce soir alors ! » and the bubble rendered
 *  « Ah, ce soir » on a Pixel 6 while the gloss still read "Ah, tonight then!".
 *  This file previously carried a test banning a spaced exclamation mark on any
 *  scene bubble. THAT TEST WAS WRONG AND HAS BEEN DELETED.
 *
 *  A bench of five markups against the same strings (ealch-v2/app/bubblelab.tsx,
 *  since removed) rendered the identical string whole in one position and
 *  clipped in another on the same screen, and clipped all four punctuations
 *  alike. The exclamation mark was an artifact of a single sample. The real
 *  trigger is any sibling in a row beside the French, and ScenePlayer now keeps
 *  the speaker icon off that row.
 *
 *  No test in this file can catch that class: Node does not lay out. What is
 *  asserted instead is only that the string is back to what the author wrote,
 *  so the workaround cannot survive the bug it was working around. */
test('the scene bubble carries the line its author wrote', { skip: noLesson }, () => {
  const scene = sec('s01-scene') as { beats?: { kind?: string; from?: string; fr?: string; en?: string }[] } | undefined;
  const bubbles = (scene?.beats ?? []).filter((b) => b.kind === 'bubble');
  ok(bubbles.length >= 3, `${bubbles.length} bubbles in the scene`);
  const row = byIdItem.get('fr.a2.verbes.572');
  ok(row, 'fr.a2.verbes.572 is not in the seed');
  strictEqual(row!.fr, 'Ah, ce soir alors !');
  strictEqual(row!.en, 'Ah, tonight then!');
  ok(bubbles.some((b) => b.fr === 'Ah, ce soir alors !'),
    'the scene no longer carries the repaired line as a bubble');
});

test('every role-play turn has a userEn and two alternatives', { skip: noLesson }, () => {
  const s = sec('s20-scenario') as { turns?: { userEn?: string; alts?: unknown[] }[] } | undefined;
  ok((s?.turns ?? []).length >= 4);
  for (const [i, t] of (s!.turns ?? []).entries()) {
    ok(t.userEn, `turn ${i} has no userEn`);
    ok((t.alts ?? []).length >= 2, `turn ${i} has ${(t.alts ?? []).length} alts`);
  }
});

/* ══════════════════════════════════════════════════════════════════════════
 *  THE QUIZ
 * ═══════════════════════════════════════════════════════════════════════ */

test('the exam: thirty-six questions, at most half mcq, and production is the majority', { skip: noLesson }, () => {
  const quiz = L!.sections.find((s) => s.type === 'quiz')!;
  const qs = quizQuestions(quiz);
  strictEqual(qs.length, 36);
  const mcq = qs.filter((q) => q.format === 'mcq').length;
  ok(mcq <= 18, `${mcq} of 36 are mcq`);
  // THE BRIEF ASKS FOR typeIn ON FORMATION AND errorSpot ON POSITION, and the
  // canDo is production, so the typed formats have to outnumber the picked ones.
  const typeIn = qs.filter((q) => q.format === 'typeIn').length;
  const errorSpot = qs.filter((q) => q.format === 'errorSpot').length;
  ok(typeIn >= 10, `${typeIn} typeIn questions`);
  ok(errorSpot >= 5, `${errorSpot} errorSpot questions`);
  ok(typeIn + errorSpot > mcq, 'the picked formats outnumber the typed ones and the canDo is production');
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
    for (const v of [q.answer!, ...(q.accept ?? [])]) {
      ok(!fires(PAS_AFTER_PAST, v), `${q.q} accepts ${v}, which puts the pas behind the past form`);
      ok(!fires(AGREED_AFTER_AVOIR, v), `${q.q} accepts ${v}, which agrees the past form`);
      for (const w of IRREGULAR_PAST) ok(!hasPhrase(v, w), `${q.q} accepts ${v}, which holds the irregular past form "${w}"`);
    }
  }
});

/** THE GENERALISATION TEST, WHICH IS THE DIFFERENCE BETWEEN TEACHING THE SYSTEM
 *  AND TEACHING A LIST. Doctrine §B.1 and the brief by name: typeIn for past
 *  form from a naming form, including verbs the lesson never lists. */
test('at least one typed question asks for a past form the lesson never printed', { skip: noLesson }, () => {
  const qs = quizQuestions(L!.sections.find((s) => s.type === 'quiz')!);
  const printed = new Set(myRows().flatMap((r) => r.fr.toLowerCase().split(/[^\p{L}]+/u)));
  const unseen = qs.filter((q) => q.format === 'typeIn'
    && typeof q.answer === 'string'
    && /^[\p{L}]+$/u.test(q.answer)
    && /(é|i|u)$/.test(q.answer)
    && !printed.has(q.answer.toLowerCase()));
  ok(unseen.length >= 1, 'no typed question asks for a past form the lesson never printed');
  ok(unseen.some((q) => q.answer === 'grandi'), 'the unseen-verb question has changed and the assertion has not');
});

test('six rounds, each leading a different trigger, and every drill reachable', { skip: noLesson }, () => {
  const quiz = L!.sections.find((s) => s.type === 'quiz') as unknown as { rounds: { id: string; targets: string[] }[] };
  strictEqual(quiz.rounds.length, 6);
  const leads = quiz.rounds.map((r) => r.targets[0]);
  strictEqual(new Set(leads).size, leads.length, `two rounds lead on the same trigger: ${leads.join(', ')}`);
  const triggers = (L!.errorTriggers ?? []).map((t) => t.id);
  strictEqual(triggers.length, 6);
  for (const t of triggers) ok(leads.includes(t), `${t} leads no round, so its drill can never fire`);
  const drills = new Set((L!.drills ?? []).map((d) => d.id));
  for (const t of L!.errorTriggers ?? []) {
    ok(drills.has(t.drill), `${t.id} names an unknown drill`);
    if (t.retest) ok(drills.has(t.retest), `${t.id} names an unknown retest`);
  }
  // AND EVERY DRILL'S CORRECT ANSWER IS CLEAN. Its distractors may hold the
  // error; that is what a retest is for.
  for (const d of L!.drills ?? []) {
    const opts = (d as { opts?: string[]; correct?: number }).opts;
    const correct = (d as { correct?: number }).correct;
    if (opts && typeof correct === 'number') {
      const right = opts[correct] ?? '';
      ok(!fires(PAS_AFTER_PAST, right), `${d.id} marks ${right} correct and it puts the pas behind the past form`);
      ok(!fires(AGREED_AFTER_AVOIR, right), `${d.id} marks ${right} correct and it agrees the past form`);
      strictEqual(new Set(opts).size, opts.length, `${d.id} offers the same option twice`);
    }
    for (const [, back] of (d as { pairs?: [string, string][] }).pairs ?? []) {
      ok(!fires(PAS_AFTER_PAST, back), `${d.id} asks the learner to produce ${back}`);
      ok(!fires(ETRE_AUXILIARY, back), `${d.id} asks the learner to produce an être compound`);
    }
  }
});

/* ══════════════════════════════════════════════════════════════════════════
 *  HOUSE RULES, CHIPS AND TITLES
 * ═══════════════════════════════════════════════════════════════════════ */

test('no grammar jargon, no dash, no tie, no banned word on any authored surface', { skip: noLesson }, () => {
  const houseText = display(L!.sections).concat(
    display(L!.sheets ?? []), display(L!.terms ?? {}), [L!.intro ?? ''],
    display(L!.overview ?? {}), display(L!.acts ?? []), display(L!.drills ?? []),
    myRows().flatMap((r) => [r.fr, r.en, r.notes ?? '']),
  ).join('\n');
  for (const j of ['participle', 'auxiliary', 'periphrastic', 'compound tense', 'present perfect',
    'infinitive', 'paradigm', 'morpheme', 'predicate', 'invariable', 'direct object',
    'first person', 'second person', 'third person']) {
    for (const form of [j, `${j}s`]) ok(!hasPhrase(houseText, form), `the jargon ${form} is on a learner surface`);
  }
  // THE PLAIN PHRASES, which is what the house does instead of banning a word.
  // a2.17 §8: guard the ratio rather than the term.
  ok(countPhrase(houseText, 'past form') >= 20, 'the plain phrase for the banned word is not carried through the lesson');
  ok(countPhrase(houseText, 'naming form') >= 4, 'a2.02\'s phrase for the thing the past form is contrasted with is not carried');
  // THE HOUSE-COPY WALK INCLUDES `audio`, AND THE ONE EVERY LESSON IN THIS BAND
  // COPIES DOES NOT. Found by the seed-wide sons-alphabet.test.ts after all
  // three of this build's layers were green: `audio.recorded[].desc` is authored
  // prose that ships in the lesson body, and v1 put "honestly" in one of them.
  const authored = [houseText, ...strings(L!.audio ?? {})].join('\n');
  for (const bad of ['—', '–', '‿']) ok(!authored.includes(bad), `${bad} is on an authored surface`);
  for (const bad of ['honest', 'honesty', 'honestly']) ok(!hasPhrase(authored, bad), `${bad} is banned, and that includes the audio briefs`);
});

test('every mission title fits the hub row, and every chip row fits its width', { skip: noLesson }, () => {
  for (const s of L!.sections) {
    const t = (s as { title?: string }).title ?? '';
    ok(t.length <= 27, `${t} is ${t.length} characters and the hub row cuts at 27`);
  }
  const terms = L!.terms ?? {};
  strictEqual(Object.keys(terms).length, 9);
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
  // AND NO CHIP LABEL IS A GRAMMAR WORD.
  for (const [k, t] of Object.entries(terms)) {
    for (const j of ['participle', 'auxiliary', 'infinitive']) ok(!hasPhrase(t.term, j), `the chip label for ${k} holds ${j}`);
  }
});

test('the intro is a learner surface and carries no jargon', { skip: noLesson }, () => {
  ok(L!.intro && L!.intro.length > 100, 'intro is drawn on the overview card AND the lesson cover');
  // AND IT NAMES NO UNIT ID. Found on a Pixel 6: `intro` is drawn on the lesson
  // COVER, before any card has credited anything, and v1 read "...avoir, which
  // you have had since a1.07". Measured across the seed, a2.05 was the ONLY one
  // of 58 lessons that did it. Doctrine §B.7 asks for unit ids in the teaching
  // BODY, where the reference has context, and this lesson credits eleven there.
  ok(!/(?:sons|a1|a2|b1|b2|c1)\.\d{2}/i.test(L!.intro!),
    `the intro names a unit id: ${(L!.intro ?? '').match(/(?:sons|a1|a2|b1|b2|c1)\.\d{2}/i)?.[0]}`);
  for (const j of ['participle', 'auxiliary', 'infinitive', 'paradigm', 'compound tense']) {
    ok(!hasPhrase(L!.intro!, j), `intro holds the jargon ${j}`);
  }
  ok(!fires(PAS_AFTER_PAST, L!.intro!), 'intro puts the pas behind the past form');
  ok(!fires(ETRE_AUXILIARY, L!.intro!), 'intro uses être as the first word');
});

/* ══════════════════════════════════════════════════════════════════════════
 *  REACHABILITY, THE AUDIO BRIEFS, AND THE VALIDATORS
 * ═══════════════════════════════════════════════════════════════════════ */

test('every declared item resolves and is released exactly once', { skip: noLesson }, () => {
  strictEqual(L!.itemIds.length, 59);
  for (const id of L!.itemIds) ok(byIdItem.has(id), `${id} resolves to nothing`);
  const tranches = L!.deckTranche ?? [];
  strictEqual(tranches.length, 7, 'one slice per act');
  const released = tranches.flat();
  strictEqual(new Set(released).size, released.length, 'a row is released twice');
  strictEqual(released.length, 59, 'every item is released');
  for (const id of released) ok(L!.itemIds.includes(id), `${id} is released and is not in itemIds`);
  for (const id of released) ok((byIdItem.get(id)!.drills ?? []).includes('flashcard'), `${id} is released with no flashcard drill`);
  // AND EVERY SPEAK TARGET CAN BE SCORED BY THE MIC.
  const speak = sec('s22-speak') as { itemIds?: string[] } | undefined;
  for (const id of speak?.itemIds ?? []) {
    ok((byIdItem.get(id)!.drills ?? []).includes('voiceflash'), `${id} is a speak target with no voiceflash`);
  }
});

/** THE BRIEF NAMES TWO TAKES THAT MUST BE SINGLE, and a constraint on how
 *  something is recorded becomes invisible the moment the clip is delivered. */
test('the audio briefs are pinned, and the two contrast takes say they are one take', { skip: noLesson }, () => {
  const recorded = L!.audio?.recorded ?? [];
  deepStrictEqual(recorded.map((r) => r.id), [
    'rec-a2-05-six', 'rec-a2-05-pair', 'rec-a2-05-tense', 'rec-a2-05-where',
    'rec-a2-05-endings', 'rec-a2-05-scene', 'rec-a2-05-dictee', 'rec-a2-05-talk',
  ]);
  const pair = recorded.find((r) => r.id === 'rec-a2-05-pair')!;
  ok(/ONE TAKE/.test(pair.desc), 'the affirmative/negative take does not say it is one take');
  ok(/ADJACENT/i.test(pair.desc), 'the affirmative/negative take does not say the two are adjacent');
  ok(/TWO PERFORMANCES/i.test(pair.desc), 'the take does not say what recording them apart would cost');
  const tense = recorded.find((r) => r.id === 'rec-a2-05-tense')!;
  ok(/ONE TAKE/.test(tense.desc), 'the tense take does not say it is one take');
  ok(/TWO PERFORMANCES/i.test(tense.desc), 'the tense take does not say what recording them apart would cost');
  const endings = recorded.find((r) => r.id === 'rec-a2-05-endings')!;
  ok(/SAME SOUND/i.test(endings.desc), 'the endings take does not say parler and parlé are the same sound');
  const dictee = recorded.find((r) => r.id === 'rec-a2-05-dictee')!;
  ok(/NO CONTRAST INTENT/i.test(dictee.desc), 'the dictée take does not forbid a paired reading');
});

test('the lesson validates and the density validator is clean', { skip: noLesson }, () => {
  const issues = validateLesson(L!);
  strictEqual(issues.length, 0, formatIssues(issues));
  const d = validateDensity(L!);
  strictEqual(d.length, 0, formatDensity(d));
});
