// a2.25.l1 « Y et EN »: the assertions that keep this lesson true. Trail seq 23,
// the THIRD and last lesson of the pronoun block (21, 22, 23), so it inherits
// a2.06's position rule and a2.24's à framing and completes both.
//
// Modelled on a2-24-pronoms-indirect.test.ts.
//
// THIS FILE READS seed.json AND NOTHING ELSE. It does not import the corpus, the
// terms or the lesson source, because a test that imports the same constant the
// content imports is comparing the content to itself. Every figure and every
// quoted string below is written out BY HAND, so a change in the source has to
// be reflected here on purpose.
//
// That also closes corrections §9's second hole outright: there is no
// `try { … } catch {}` around a source import here, so there is no state in
// which thirty assertions silently do not run.
//
// IT IS SCOPED TO ITS OWN ID BLOCK. `pronoms-essentiels` holds 634 rows across
// four levels and this lesson owns 50 of them, immediately above a2.24's 50 and
// a2.06's 48.
//
// ── What this file is actually guarding ────────────────────────────────────
//
//   y AND en IN ONE SECTION WITH WHAT EACH REPLACES, the preposition VISIBLE
//   inside the pronoun, read off the CARD's own `fr` and `sub`.
//   a2.06's POSITION RULE AND a2.24's à FRAMING QUOTED VERBATIM as literals
//   here, so a paraphrase goes red. Both counted against explicit constants.
//   THE THREE ENS IN ONE SECTION, with a2.04 and a2.18 both named by unit id.
//   NO AUTHORED CORRECT SENTENCE KEEPS THE PREPOSITION AFTER THE PRONOUN, with
//   the error permitted only in the five sections that exist to show it.
//   il y a SHOWN CONTAINING y AND STATED NOT TO DECOMPOSE, asserted by section
//   and by TYPE rather than by a count, so a second teaching section cannot slip
//   in when a recap drops the line.
//   THE OBLIGATORY en TAUGHT WITH THE IMPOSSIBLE ENGLISH-SHAPED ANSWER VISIBLE.
//   OPTION 1 ON SLOT ORDER: « y en » and nothing else, anywhere.
//   THE en GUARD AS A PRONOUN CONTEXT AND NOT AS TWO LETTERS, with an English
//   sentence in MUST_NOT_FIRE and French ones in MUST_FIRE.
//   THE NEGATION STRING MATCHING a2.24's, which matches a2.06's, re-read off the
//   shipped neighbours so a drift in either place goes red.
//   THE JARGON WALK over a `display()` walk including `intro` and `overview`,
//   with the -s plural checked, ZERO exempt strings, and the RATIO guarded
//   rather than a word banned.
//   THE RESPELLING REPAIRS by name, through the real `hasPlainNasalFor`, with
//   the ONE BLIND ROW asserted as blind and the visible half of the SAME WORD
//   asserted as visible.
//   EVERY DICTÉE ITEM in LETTERS mode through the real `dicteeMode`.
//
// Every one of those was mutation-tested: the assertion was broken on purpose
// and confirmed to go red before it was kept.

import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { ok, strictEqual, deepStrictEqual } from 'node:assert';
import { test } from 'node:test';

import type { Item, Lesson, LessonSection } from './schema.ts';
import { quizQuestions, validateLesson, formatIssues, DRILL_KINDS } from './schema.ts';
import { validateDensity, formatDensity, hasPlainNasalFor } from './density.logic.ts';
import { endingPopulation } from './gender.logic.ts';
import { dicteeMode } from './dictee.logic.ts';
import { matchesAccept, fold } from './answer.logic.ts';

const here = dirname(fileURLToPath(import.meta.url));
const seed = JSON.parse(readFileSync(resolve(here, 'seed.json'), 'utf8')) as {
  version: number; items: Item[]; lessons: Lesson[];
  units: { id: string; title?: string; sub?: string; canDo?: string; seq?: string | number; lessonIds?: string[]; prereqUnitIds?: string[] }[];
};

const L = seed.lessons.find((l) => l.id === 'a2.25.l1');
const noLesson = !L;
const byIdItem = new Map(seed.items.map((i) => [i.id, i] as const));

/** THE BLOCK, NOT THE PREFIX. */
const MY_BLOCK = { from: 287, to: 336 };
const isMine = (id: string): boolean => {
  const m = /^fr\.a2\.pronoms-essentiels\.(\d{3})$/.exec(id);
  if (!m) return false;
  const n = Number(m[1]);
  return n >= MY_BLOCK.from && n <= MY_BLOCK.to;
};
const A = (n: number) => `fr.a2.pronoms-essentiels.${String(n).padStart(3, '0')}`;
const MINE: Item[] = seed.items.filter((i) => isMine(i.id));

/* ─── The strings, written out by hand ────────────────────────────────────── */

const REFRAME = 'The preposition goes inside the pronoun, so it does not get said twice.';
/** a2.06's, QUOTED AND TAUGHT NOWHERE HERE, for the third lesson running. */
const POSITION_RULE = 'The pronoun goes in front of the verb, not after it.';
/** a2.24's, and this lesson completes it. The two share their second half. */
const A_FRAMING = 'À plus a person becomes lui or leur, and the à disappears with it.';
const A_FRAMING_MINE = 'À plus a thing becomes y, and the à disappears with it.';
const DE_FRAMING = 'De plus a thing becomes en, and the de disappears with it.';
const MUST_RULE = 'French will not let you leave it out. « Oui, j\'ai. » is not a sentence.';
const MUST_RULE_Y = 'English drops the word here and French keeps it. J\'y vais is I am going.';
const EN_POSITION_RULE = 'Before a thing it is a little word. Before a verb it is the pronoun. Nothing else separates them.';
const FROZEN_RULE = 'Il y a is three words that arrived together, and they do not come apart.';
const ORDER_RULE = 'When both turn up, y comes first. Il y en a.';
const ORDER_DEFERRED = 'Two of these small words in one sentence is a further question, and it is not answered here.';
/** a2.02's name for the recurring shape. a2.06 was the fifth and a2.24 the
 *  sixth; this is the seventh and the first with three answers. */
const WHAT_FOLLOWS = 'what comes next decides';
/** a1.18, a2.19 and a2.06. THREE strings, and this lesson quotes all three and
 *  adds none, which makes the arc four lessons long. */
const A118_REFRAME = 'Wrap the verb, then ask what the verb was.';
const A219_REFRAME = 'Wrap the verb that changed, not the one carrying the meaning.';
const A206_NEGATION = 'The wrap goes round the pronoun and the verb together.';

const Y_ROW = 'y  =  à + a thing';
const EN_ROW = 'en  =  de + a thing';
const PLAIN_PHRASE = 'the little word inside';
const PLAIN_TARGET = 'the thing you already said';

const MUST_RIGHT = "Oui, j'en ai.";
/** AN AUXILIARY AND A PARTICIPLE, not the word « ai ». See the dictée test. */
const PAST_SHAPE = /(?<![\p{L}\p{N}'’-])(ai|as|a|avons|avez|ont)\s+(parlé|pensé|bu|pris|vu|écrit|dit|eu)(?![\p{L}])/u;
const MUST_WRONG = "Oui, j'ai.";
const KEEPS_A_ERROR = "J'y vais à Paris.";
const KEEPS_DE_ERROR = "J'en veux du café.";
const PERSON_ERROR = "J'y parle.";
const FROZEN_ERROR = 'Il en a.';

const REFRAME_COUNT = 15;
const POSITION_RULE_COUNT = 6;
const A_FRAMING_COUNT = 5;

/* ─── String walks, matching the batch's ──────────────────────────────────── */

/** a2.24 §7.1's fifth hole, kept closed: `drill` and `retest` are blanket
 *  machine keys in every other lesson in this band, and on a stepped
 *  `trapDrill` `drill` is THE ARRAY OF GATED OPTIONS the learner is scored on.
 *  Skipped here only when they hold a STRING. */
const MACHINE_KEYS = new Set([
  'id', 'ref', 'sheetId', 'itemId', 'itemIds', 'targets', 'detectOn',
  'accept', 'recordingId', 'audioRef', 'unitId', 'scenarioId',
  'clipIds', 'restPoints',
]);
const ID_WHEN_STRING = new Set(['drill', 'retest']);
const isId = (s: string): boolean => /^fr\.[a-z0-9]+\.[a-z0-9-]+\.\d+$/i.test(s);

/** Keeps `sub`, drops only machine keys. Corrections §13: `prose()` drops `sub`
 *  as notation, and THIS LESSON'S REQUIRED LAYOUT 1 LIVES HALF IN `sub`. */
function display(v: unknown, out: string[] = []): string[] {
  if (typeof v === 'string') { if (!isId(v)) out.push(v); }
  else if (Array.isArray(v)) for (const x of v) display(x, out);
  else if (v && typeof v === 'object') {
    for (const [k, x] of Object.entries(v)) {
      if (MACHINE_KEYS.has(k)) continue;
      if (ID_WHEN_STRING.has(k) && typeof x === 'string') continue;
      display(x, out);
    }
  }
  return out;
}

/** THE HOUSE BOUNDARY WITH CORRECTIONS §14.3's FIX, and the brief says it
 *  « matters more here than in any other lesson in the band »: `j'y`, `j'en`,
 *  `n'y` and `n'en` are most of the content and the band's boundary cannot see
 *  any of them. Dropped from the LEFT, kept on the right. */
const bounded = (needle: string): RegExp =>
  new RegExp(`(?<![\\p{L}\\p{N}-])${needle.replace(/[.*+?^${}()|[\]\\]/gu, '\\$&')}(?![\\p{L}\\p{N}'’-])`, 'iu');
const hasPhrase = (hay: string, needle: string): boolean => bounded(needle).test(hay);

/** a2.23 §9.1: naming a unit needs the OPPOSITE boundary. */
const namesUnit = (hay: string, unit: string): boolean =>
  new RegExp(`(?<![\\p{L}\\p{N}'’-])${unit.replace(/\./gu, '\\.')}(?![\\p{L}\\p{N}-])`, 'iu').test(hay);

/** EVERY LEARNER SURFACE. Corrections §9: the walk must read `intro` and
 *  `overview`, both drawn on the lesson overview card AND the lesson cover.
 *  `grammarAssumed` and `grammarIntroduced` are DELIBERATELY EXCLUDED. */
const surface = (): string[] => (noLesson ? [] : [
  ...display(L!.sections),
  ...display(L!.sheets ?? []),
  ...display(L!.terms ?? {}),
  ...display(L!.acts ?? []),
  ...display(L!.drills ?? []),
  ...display(L!.errorTriggers ?? []),
  ...display(L!.audio ?? {}),
  ...display(L!.overview ?? {}),
  L!.intro ?? '',
  L!.reframe ?? '',
]);
/** NOT deduped. a2.22 §3: a Set collapses a short line authored twice. */
const ALL = surface();
const UNIQUE = [...new Set(ALL)];

const sec = (id: string): LessonSection => {
  const s = L!.sections.find((x) => x.id === id);
  ok(s, `no section ${id}`);
  return s!;
};
type Card = { head?: string; label?: string; fr?: string; sub?: string; body?: string };
const cardsOf = (id: string): Card[] => ((sec(id) as { cards?: Card[] }).cards ?? []);
const quiz = () => L!.sections.find((s) => s.type === 'quiz') as never;

/* ══════════════════════════════════════════════════════════════════════════
 *  0. THE LESSON IS THERE, AND IT IS THE SHAPE IT CLAIMS
 * ═══════════════════════════════════════════════════════════════════════ */

test('a2.25.l1 is in the seed', () => {
  ok(L, 'a2.25.l1 is not in seed.json');
});

test('the lesson validates and passes density against the shipped item set', { skip: noLesson }, () => {
  const issues = validateLesson(L!);
  strictEqual(issues.length, 0, formatIssues(issues));
  const dens = validateDensity(L!, new Set(seed.items.map((i) => i.id)));
  strictEqual(dens.length, 0, formatDensity(dens));
});

test('the identity block matches the unit, byte for byte', { skip: noLesson }, () => {
  const u = seed.units.find((x) => x.id === 'a2.25');
  ok(u, 'a2.25 is not in the seed');
  strictEqual(String(u!.seq), '23');
  strictEqual(u!.title, 'The Pronouns Y and EN');
  strictEqual(u!.sub, 'Y et EN');
  strictEqual(u!.canDo, 'Can replace a place or a quantity with y and en in the right slot');
  ok((u!.lessonIds ?? []).includes('a2.25.l1'), 'the unit does not list a2.25.l1');
  deepStrictEqual(u!.prereqUnitIds ?? [], ['a2.24']);
  /* CORRECTIONS §1: the spine's `sub` — « the two neutral pronouns — à + thing,
   * de + thing » — exists nowhere in the database and carries an em dash. */
  ok(!/neutral pronouns/i.test(u!.sub ?? ''), "the spine's discarded sub has come back");
  ok(!/[—–]/u.test(`${u!.title} ${u!.sub} ${u!.canDo}`), 'an em dash is in the identity block');
  /* AND THE `sub` IS STILL THREE CHARACTERS WITH NO DESCRIPTIVE TAIL, which is
   * true of no other unit in the band and which a later author will be tempted
   * to "improve" into a sentence. */
  strictEqual(u!.sub, 'Y et EN', 'the sub has grown a descriptive tail');
});

test('the shape is 24 sections, 6 acts, one quiz of 30', { skip: noLesson }, () => {
  strictEqual(L!.sections.length, 24);
  strictEqual((L!.acts ?? []).length, 6);
  strictEqual(L!.sections.filter((s) => s.type === 'quiz').length, 1, 'a second quiz section is silently never rendered');
  strictEqual(quizQuestions(quiz()).length, 30);
  strictEqual(L!.version, 1,
    'v1 is the first build. Corrections §10: if this body ever needs correcting the COUNTER MOVES, '
    + 'because two different bodies under one number is the drift this project has lost work to twice');
});

test('BOTH PREREQUISITES ARE SHIPPED, which the brief says to stop over', { skip: noLesson }, () => {
  /* « Whether a2.06 and a2.24 are shipped. Both are hard prerequisites. If
   * either is not, stop and say so. » Both are: a2.06.l1 v3 and a2.24.l1 v3,
   * applied and merged. */
  for (const [unitId, lessonId, minVersion] of [['a2.06', 'a2.06.l1', 3], ['a2.24', 'a2.24.l1', 3]] as const) {
    const p = seed.units.find((u) => u.id === unitId);
    ok(p, `${unitId} is not in the seed`);
    ok((p!.lessonIds ?? []).includes(lessonId), `${unitId} is a hard prerequisite and has no shipped lesson`);
    const prereq = seed.lessons.find((l) => l.id === lessonId);
    ok(prereq, `${unitId} lists ${lessonId} and the seed does not hold it`);
    ok((prereq!.version ?? 0) >= minVersion, `${lessonId} is v${prereq!.version} and it shipped at v${minVersion}`);
  }
});

test('NO CARD JOINS TWO SENTENCES ON ONE fr LINE', { skip: noLesson }, () => {
  /* a2.24's v1 did and it CLIPPED on a Pixel 6 at 36 characters with every host
   * gate green, losing its last word while the respelling underneath still
   * printed it. This build starts from the repaired two-row shape. */
  for (const s of L!.sections) {
    for (const c of ((s as { cards?: Card[] }).cards ?? [])) {
      const f = c.fr ?? '';
      ok(!(f.includes(' · ') && /[.?!]\s*·/u.test(f)),
        `${s.id} joins two sentences on one \`fr\` line: « ${f} »`);
    }
  }
  /* AND THE TWO-ROW SHAPE IS ACTUALLY IN USE, so this is not vacuous. */
  const tworow = L!.sections.flatMap((s) => ((s as { cards?: Card[] }).cards ?? []))
    .filter((c) => /[.?!]$/u.test(c.fr ?? '') && /[.?!]$/u.test(c.sub ?? ''));
  ok(tworow.length >= 10, `${tworow.length} cards use the two-row shape`);
});

/* ══════════════════════════════════════════════════════════════════════════
 *  1. THE CORPUS
 * ═══════════════════════════════════════════════════════════════════════ */

test('50 rows in the claimed block, and nobody else is inside it', { skip: noLesson }, () => {
  strictEqual(MINE.length, 50, `${MINE.length} rows inside ${MY_BLOCK.from}..${MY_BLOCK.to}`);
  /* THE BLOCK IS A SET OF IDS, NOT AN ARRAY POSITION. The first version asserted
   * `MINE[0].id === A(287)`, which reads the ORDER `seed.items` happens to be in
   * — and `content:publish` regenerates the seed from the database in its own
   * order, so the assertion went red on a publish that had changed nothing about
   * this lesson. A test that fails on a legitimate change is how a test comes to
   * certify a bug (invariants §6). Sorted, so it asserts the block. */
  const ids = MINE.map((i) => i.id).sort();
  strictEqual(ids[0], A(287));
  strictEqual(ids[ids.length - 1], A(336));
  strictEqual(new Set(ids).size, 50, 'an id inside the block appears twice');
  /* AND THE TWO BLOCKS BELOW ARE UNTOUCHED. */
  const a206 = seed.items.filter((i) => /^fr\.a2\.pronoms-essentiels\.(1[89]\d|2[0-3]\d)$/.test(i.id));
  ok(a206.length >= 48, `a2.06's block holds ${a206.length} rows and it applied 48`);
  const a224 = seed.items.filter((i) => {
    const m = /^fr\.a2\.pronoms-essentiels\.(\d{3})$/.exec(i.id);
    return m ? Number(m[1]) >= 237 && Number(m[1]) <= 286 : false;
  });
  strictEqual(a224.length, 50, `a2.24's block holds ${a224.length} rows and it applied 50`);
});

test('every row in the block is in this theme and at this level', { skip: noLesson }, () => {
  /* a2.24's MUTATION-FOUND HOLE, kept closed: `MINE` is selected by ID, so a row
   * that quietly left `pronoms-essentiels` while keeping its id would drop out
   * of the duplicate-fr check and the flashcard hub would serve it from wherever
   * it had gone. */
  for (const i of MINE) {
    strictEqual(i.theme, 'pronoms-essentiels', `${i.id} is in theme « ${i.theme} »`);
    strictEqual(i.level, 'a2', `${i.id} is level « ${i.level} »`);
  }
});

test('NOT ONE HEADWORD IS AUTHORED, for the tenth build running', { skip: noLesson }, () => {
  for (const i of MINE) {
    strictEqual(i.kind, 'sentence', `${i.id} is kind ${i.kind}`);
    ok(/\s/u.test(i.fr), `${i.id} « ${i.fr} » has no whitespace, so it is a headword whatever its kind says`);
    ok(!(i as { gender?: string }).gender, `${i.id} carries gender and would join a1.03's ending population`);
  }
});

test('every authored row carries a respelling and none closes a nasal with a plain n', { skip: noLesson }, () => {
  for (const i of MINE) {
    ok(i.respell, `${i.id} has no respelling`);
    ok(!hasPlainNasalFor(i.fr, i.respell!), `${i.id} « ${i.fr} » [${i.respell}] closes a nasal with a plain n or m`);
    ok(!i.respell!.includes('‿'), `${i.id} carries U+203F, which draws as a low underscore on a Pixel 6`);
    ok(i.ipa && /^\/.*\/$/u.test(i.ipa), `${i.id} has no slash-wrapped ipa`);
    ok(i.fr.trim().split(/\s+/u).length <= 14, `${i.id} is over the 14-word A2 budget`);
  }
});

test('the drill arrays are in DRILL_KINDS order, which is what keeps seed and Postgres agreeing', { skip: noLesson }, () => {
  for (const i of MINE) {
    const sorted = [...i.drills].sort((a, b) => DRILL_KINDS.indexOf(a) - DRILL_KINDS.indexOf(b));
    deepStrictEqual([...i.drills], sorted, `${i.id} declares drills out of DRILL_KINDS order`);
  }
});

test('no duplicate fr inside pronoms-essentiels, computed the way flashhub-coverage computes it', { skip: noLesson }, () => {
  /* IT BIT THIS BUILD. The first draft authored « J'y pense. » and the theme
   * already publishes it as a phrase card at fr.a2.pronoms-essentiels.028, so
   * the flashcard hub would have served one card twice. The manifest refused it
   * and the row became « J'y pense souvent. » */
  const strip = (s: string) => s.replace(/^(le |la |les |l'|l’|un |une |des |du |de la )/iu, '').toLowerCase().replace(/[.,!?;:«»"]/gu, '').trim();
  const inTheme = seed.items.filter((i) => i.theme === 'pronoms-essentiels');
  const byFr = new Map<string, string[]>();
  for (const i of inTheme) byFr.set(strip(i.fr), [...(byFr.get(strip(i.fr)) ?? []), i.id]);
  const dupes = [...byFr.entries()].filter(([, ids]) => ids.length > 1);
  strictEqual(dupes.length, 0, `duplicate fr: ${dupes.slice(0, 4).map(([k, ids]) => `${k} (${ids.join(', ')})`).join('; ')}`);
});

test("this lesson does not move a1.03's ending population", { skip: noLesson }, () => {
  const withMine = endingPopulation(seed.items as never).length;
  const withoutMine = endingPopulation(seed.items.filter((i) => !isMine(i.id)) as never).length;
  strictEqual(withMine, withoutMine, 'an authored row joined the measured ending population');
});

/* ══════════════════════════════════════════════════════════════════════════
 *  2. THE FOUR REQUIRED LAYOUTS
 * ═══════════════════════════════════════════════════════════════════════ */

test('LAYOUT 1: both words on one card, with the preposition VISIBLE inside each', { skip: noLesson }, () => {
  const cards = cardsOf('s02-two');
  ok(cards.length >= 3, 's02-two has under three cards');
  const both = cards.find((c) => c.fr === Y_ROW && c.sub === EN_ROW);
  ok(both, `no card carries « ${Y_ROW} » in fr and « ${EN_ROW} » in sub`);
  /* THE PREPOSITION IS VISIBLE IN EACH ROW, which is the whole claim of the
   * layout and the thing a row reading « y = a place » would lose. */
  ok(both!.fr!.includes('à'), `the y row « ${both!.fr} » does not show the à inside it`);
  ok(hasPhrase(both!.sub!, 'de'), `the en row « ${both!.sub} » does not show the de inside it`);
  ok(hasPhrase(both!.fr!, 'y') && hasPhrase(both!.sub!, 'en'), 'a row does not carry its own pronoun');
  const s = display(sec('s02-two'));
  ok(s.some((x) => x.includes(POSITION_RULE)), `s02-two does not quote a2.06's « ${POSITION_RULE} » verbatim`);
  ok(s.some((x) => namesUnit(x, 'a2.06')), 'the position rule is quoted and a2.06 is not named beside it');
  ok(s.some((x) => x.includes(A_FRAMING_MINE)), 's02-two does not state what y replaces');
  ok(s.some((x) => x.includes(DE_FRAMING)), 's02-two does not state what en replaces');
});

test("LAYOUT 2: à + a person beside à + a place, built out of a2.24's own rows", { skip: noLesson }, () => {
  const cards = cardsOf('s04-person');
  const named = cards.find((c) => c.fr === 'Je parle à Marie.' && c.sub === 'Tu vas à Paris ?');
  ok(named, 's04-person has no card carrying one preposition with a person behind it and a place behind it');
  const answers = cards.find((c) => c.fr === 'Je lui parle.' && c.sub === "J'y vais.");
  ok(answers, 's04-person has no card carrying the two answers side by side');
  const s = display(sec('s04-person'));
  ok(s.some((x) => x.includes(A_FRAMING)), `s04-person does not quote a2.24's « ${A_FRAMING} » verbatim`);
  ok(s.some((x) => x.includes(A_FRAMING_MINE)), "s04-person does not state this lesson's half of the same sentence");
  ok(s.some((x) => namesUnit(x, 'a2.24')), 's04-person does not name a2.24 beside the sentence it borrows');
  /* AND THE TWO STRINGS ARE THE SAME SENTENCE WITH ONE PHRASE CHANGED, which is
   * what makes this a pattern being completed rather than a new rule. a2.24's
   * report says it wrote the line to survive exactly this substitution. */
  const tail = ', and the à disappears with it.';
  ok(A_FRAMING.endsWith(tail) && A_FRAMING_MINE.endsWith(tail),
    'the two framings no longer share their second half, so the substitution is not visible');
  /* AND THE TWO ROWS REALLY ARE a2.24's, not copies. */
  strictEqual(byIdItem.get('fr.a2.pronoms-essentiels.237')!.fr, 'Je parle à Marie.');
  strictEqual(byIdItem.get('fr.a2.pronoms-essentiels.238')!.fr, 'Je lui parle.');
});

test('LAYOUT 3: the three ens in ONE tapTable, with a2.04 and a2.18 named by id', { skip: noLesson }, () => {
  /* Corrections §8: a `table` at layer core is a density failure, and `tapTable`
   * renders inside a scrolling page with six rows the Pixel 6 ceiling. */
  const tt = sec('s11-threeens') as { type: string; rows?: { cells?: string[] }[] };
  strictEqual(tt.type, 'tapTable');
  strictEqual((tt.rows ?? []).length, 3, 'the tapTable is not exactly the three jobs');
  for (const s of L!.sections) ok(s.type !== 'table', `${s.id} is a table at layer core, which is a density failure`);
  const s = display(sec('s11-threeens'));
  for (const u of ['a2.04', 'a2.18']) {
    ok(s.some((x) => namesUnit(x, u)), `s11-threeens does not name ${u}, and the brief asks for both by unit id`);
  }
  ok(s.some((x) => x.includes(EN_POSITION_RULE)), 's11-threeens does not state the distinguisher, which is position');
  /* AND THE TWO NEIGHBOURS' EXAMPLE LINES ARE THEIR OWN PUBLISHED ROWS. */
  for (const id of ['fr.a2.prepositions-essentielles.131', 'fr.a2.prepositions-essentielles.173']) {
    const f = byIdItem.get(id);
    ok(f, `${id} is a neighbour's row this lesson leans on and it is not in the seed`);
    ok(s.some((x) => x.includes(f!.fr.replace(/\s*[.]$/u, ''))), `s11-threeens does not show « ${f!.fr} »`);
  }
  /* AND THREE DIFFERENT SENTENCES, not three glosses of one. */
  const rows = tt.rows ?? [];
  const lines = rows.map((r) => (r.cells ?? [])[0] ?? '');
  strictEqual(new Set(lines).size, 3, 'the three en rows do not carry three different sentences');
  /* ── THREE MUTATION-FOUND HOLES, ALL THE SAME SHAPE ────────────────────
   *
   * The checks above are on the section's PROSE, and the say names both
   * neighbours. So the table could name the wrong unit in its own cells, carry
   * the same job twice with three different sentences, or lose its middle
   * column outright, and all three passed. The claim of this screen is the
   * TABLE, so the table is what is asserted. */
  deepStrictEqual((tt as { cols?: string[] }).cols, ['French', 'what comes next', 'whose lesson'],
    'the tapTable has lost a column, and the middle one IS the distinguisher');
  for (const r of rows) strictEqual((r.cells ?? []).length, 3, 'a tapTable row does not fill all three columns');
  deepStrictEqual([...rows.map((r) => r.cells![2])].sort(), ['a2.04', 'a2.18', 'a2.25'],
    'the three rows are not owned one each by a2.04, a2.18 and this lesson');
  const jobs = rows.map((r) => r.cells![1]);
  strictEqual(new Set(jobs).size, 3, 'the three rows do not carry three different jobs');
  strictEqual(jobs.filter((j) => /verb/i.test(j)).length, 1,
    'more or fewer than one of the three rows has a verb after it, and that is the only one that is the pronoun');
});

test('LAYOUT 4: the obligatory answer beside the impossible one', { skip: noLesson }, () => {
  const both = cardsOf('s08-must').find((c) => c.fr === MUST_RIGHT && c.sub === MUST_WRONG);
  ok(both, `s08-must has no card carrying « ${MUST_RIGHT} » in fr and « ${MUST_WRONG} » in sub`);
  ok(display(sec('s08-must')).some((s) => s.includes(MUST_RULE)), 's08-must does not state that the word cannot be left out');
  /* THE CLAIM THE WHOLE EXAM SHAPE RESTS ON, MEASURED THROUGH THE REAL fold(). */
  ok(fold(MUST_RIGHT) !== fold(MUST_WRONG),
    'fold() collapses the right answer and the impossible one, so the central claim of this lesson is not testable in writing');
  ok(fold("J'y vais.") !== fold('Je vais.'),
    'fold() collapses the y sentence with the one without it, so the replacement is not typeable either');
});

/* ══════════════════════════════════════════════════════════════════════════
 *  3. THE OWNS, THE WEIGHTING AND THE THREE RULES
 * ═══════════════════════════════════════════════════════════════════════ */

test('the Owns outweighs the paradigm, 7 sections to 3', { skip: noLesson }, () => {
  const owns = ['s02-two', 's04-person', 's07-de', 's08-must', 's09-quantity', 's10-unseen', 's14-errors'];
  const paradigm = ['s05-there', 's06-listening', 's15-negation'];
  for (const id of [...owns, ...paradigm]) sec(id);
  ok(owns.length > paradigm.length, 'the paradigm has at least as many sections as the Owns, which is the wrong lesson');
  strictEqual(owns.length, 7);
  strictEqual(paradigm.length, 3);
});

test('the obligatory en outweighs y, 5 sections to 3', { skip: noLesson }, () => {
  /* The brief: it « deserves more weight than the y half, because y has an
   * English analogue in "there" and en has none ». */
  const enSections = ['s07-de', 's08-must', 's09-quantity', 's11-threeens', 's12-trap'];
  const ySections = ['s04-person', 's05-there', 's13-frozen'];
  for (const id of [...enSections, ...ySections]) sec(id);
  ok(enSections.length > ySections.length, 'the y half has at least as many sections as the en half');
});

test('the reframe is authored 15 times, and the two borrowed rules are quieter', { skip: noLesson }, () => {
  strictEqual(L!.reframe, REFRAME);
  strictEqual(ALL.filter((s) => s.includes(REFRAME)).length, REFRAME_COUNT);
  strictEqual(ALL.filter((s) => s.includes(POSITION_RULE)).length, POSITION_RULE_COUNT);
  strictEqual(ALL.filter((s) => s.includes(A_FRAMING)).length, A_FRAMING_COUNT);
  /* THREE RULES ON ONE SURFACE. a2.06 ran one at 17 and its own report says 23
   * read as a slogan; three at seventeen each would put one on every screen
   * twice over. */
  ok(POSITION_RULE_COUNT < REFRAME_COUNT && A_FRAMING_COUNT < REFRAME_COUNT,
    "a borrowed rule is louder than this lesson's own");
});

test('a2.06, a2.24, a2.04, a2.18 and a1.29 are all named by unit id', { skip: noLesson }, () => {
  for (const u of ['a2.06', 'a2.24', 'a2.04', 'a2.18', 'a1.29', 'a2.02']) {
    ok(ALL.some((s) => namesUnit(s, u)), `${u} is named nowhere`);
  }
  /* AND NEITHER NEIGHBOUR'S OWN MACHINERY IS RE-TAUGHT. */
  for (const s of UNIQUE) {
    for (const w of ['contraction', 'contracts with', 'partitive']) {
      ok(!hasPhrase(s, w), `a neighbour's own material appears: « ${w} » in « ${s.slice(0, 70)} »`);
    }
  }
});

/* ══════════════════════════════════════════════════════════════════════════
 *  4. THE PRONOUN GUARDS, AS THE THING AND NOT THE LETTERS
 * ═══════════════════════════════════════════════════════════════════════ */

/** CORRECTIONS §14.4, and the brief calls this the hardest guard in the block:
 *  `en` is a preposition in a very large number of corpus sentences, so a shape
 *  built on the two letters fires constantly. The pronoun is either ELIDED or it
 *  sits IMMEDIATELY IN FRONT OF A CONJUGATED VERB, and the preposition never
 *  does either. The verb list holds no form that is also a common noun:
 *  `avance` and `retard` are out, because « en avance » and « en retard » are
 *  prepositional phrases. */
const EN_VERBS = [
  'ai', 'as', 'a', 'avons', 'avez', 'ont',
  'veux', 'veut', 'voulons', 'voulez', 'veulent',
  'prends', 'prend', 'prenons', 'prenez', 'prennent',
  'bois', 'boit', 'buvons', 'buvez', 'boivent',
  'parle', 'parles', 'parlons', 'parlez', 'parlent',
  'rêve', 'rêves', 'rêvent',
  'reviens', 'revient', 'revenons', 'revenez', 'reviennent',
];
const Y_VERBS = [
  'vais', 'vas', 'va', 'allons', 'allez', 'vont',
  'pense', 'penses', 'pensons', 'pensez', 'pensent', 'pensé',
  'joue', 'joues', 'jouons', 'jouez', 'jouent',
  'réponds', 'répond', 'répondons', 'répondez', 'répondent',
  'suis', 'es', 'est', 'sommes', 'êtes', 'sont',
  'ai', 'as', 'a', 'avons', 'avez', 'ont',
];
const EN_ELIDED = /(?<![\p{L}\p{N}-])(j|n|m|t|s|qu)['’]en(?![\p{L}\p{N}'’-])/iu;
const Y_ELIDED = /(?<![\p{L}\p{N}-])(j|n|m|t|s)['’]y(?![\p{L}\p{N}'’-])/iu;
const EN_BEFORE_VERB = new RegExp(`(?<![\\p{L}\\p{N}'’-])en\\s+(${EN_VERBS.join('|')})(?![\\p{L}\\p{N}'’-])`, 'iu');
const Y_BEFORE_VERB = new RegExp(`(?<![\\p{L}\\p{N}'’-])y\\s+(${Y_VERBS.join('|')})(?![\\p{L}\\p{N}'’-])`, 'iu');
const usesEnPronoun = (s: string): boolean => EN_ELIDED.test(s) || EN_BEFORE_VERB.test(s);
const usesYPronoun = (s: string): boolean => Y_ELIDED.test(s) || Y_BEFORE_VERB.test(s);

/** `en` AS THE PREPOSITION. The two are the same string and the same sound, so a
 *  HOMOPHONE_FORMS list cannot express the difference and a CLASSIFIER can. */
const EN_NOUNS = ['France', 'Espagne', 'Italie', 'Belgique', 'Allemagne', 'Suisse',
  'deux', 'trois', 'une', 'train', 'avion', 'retard', 'avance', 'français', 'anglais'];
const EN_PREPOSITION = new RegExp(`(?<![\\p{L}\\p{N}'’-])en\\s+(${EN_NOUNS.join('|')})(?![\\p{L}\\p{N}'’-])`, 'iu');
const enJob = (s: string): 'pronoun' | 'preposition' | null => {
  if (usesEnPronoun(s)) return 'pronoun';
  if (EN_PREPOSITION.test(s)) return 'preposition';
  return null;
};

/** THE PHRASE THAT DOES NOT COME APART, TREATED AS ONE WORD BY THE GUARDS. It is
 *  the same claim the lesson makes on a card, and without it « Il y a du pain. »
 *  reads as a y-pronoun followed by a surviving de. */
const stripFrozen = (s: string): string => s.replace(/(?<![\p{L}\p{N}'’-])il y (en )?a(?![\p{L}\p{N}'’-])/giu, ' ');

/** THE ERROR THE REFRAME PREDICTS. Scoped to one clause with `[^.!?»]*?` so a
 *  preposition in the NEXT sentence of the same string cannot trip it. */
const Y_KEEPS_A = new RegExp(
  `(?<![\\p{L}\\p{N}-])((j|n|m|t|s)['’]y|y\\s+(${Y_VERBS.join('|')}))[^.!?»]*?(?<![\\p{L}\\p{N}'’-])(à|au|aux)(?![\\p{L}\\p{N}'’-])`, 'iu');
const EN_KEEPS_DE = new RegExp(
  `(?<![\\p{L}\\p{N}-])((j|n|m|t|s|qu)['’]en|en\\s+(${EN_VERBS.join('|')}))[^.!?»]*?(?<![\\p{L}\\p{N}'’-])(de|du|des)(?![\\p{L}\\p{N}'’-])`, 'iu');
const keepsPreposition = (s: string): boolean => {
  const t = stripFrozen(s);
  return Y_KEEPS_A.test(t) || EN_KEEPS_DE.test(t);
};

test('the en guard fires on a pronoun context and NOT on the preposition or the English', () => {
  for (const s of ["J'en ai.", "J'en parle.", 'Tu en as ?', "Je n'en veux pas.", 'Elle en parle.',
    'Nous en prenons.', 'Il y en a.', "J'en bois.", 'Vous en voulez ?']) {
    ok(usesEnPronoun(s), `the en-pronoun guard does not fire on « ${s} », so it is not a guard`);
  }
  for (const s of [
    /* `en` AS A PREPOSITION, which is what makes the two letters useless. */
    'Elle habite en France.', 'Je vais en France.', 'Je finis en deux heures.',
    'en deux heures', 'en France', 'Elle est en retard.', 'Il arrive toujours en avance.',
    'Nous voyageons en train.', 'Je leur parle en français.',
    /* AND THE ENGLISH. The brief asks for one by name, and this is the exact
     * sentence a2.17's compound-tense guard matched. */
    'You did not stall on a word you had not learned.',
    'The preposition goes inside the pronoun, so it does not get said twice.',
    'Yes, I do.', 'One word, three jobs, three lessons.',
  ]) {
    ok(!usesEnPronoun(s), `the en-pronoun guard fires on « ${s} », which it must not. Corrections §14.4`);
  }
  /* AND THE CLASSIFIER SEPARATES THE TWO JOBS. */
  strictEqual(enJob('Elle en parle.'), 'pronoun');
  strictEqual(enJob('Elle habite en France.'), 'preposition');
  strictEqual(enJob('Je vais à Paris.'), null);
});

test('the y guard fires on the pronoun and not on the frozen phrase or the English', () => {
  for (const s of ["J'y vais.", "Je n'y vais pas.", 'Tu y vas souvent ?', 'Elle y répond.', "J'y ai pensé."]) {
    ok(usesYPronoun(s), `the y-pronoun guard does not fire on « ${s} »`);
  }
  for (const s of ['Il y a du pain.', 'Je vais à Paris.', 'Tu vas au marché ?',
    'You already know where the word goes.', 'Look at the word straight after it.', Y_ROW]) {
    ok(!usesYPronoun(stripFrozen(s)), `the y-pronoun guard fires on « ${s} », which it must not`);
  }
});

test('the surviving-preposition guard fires on the error and on nothing else', () => {
  for (const s of [KEEPS_A_ERROR, KEEPS_DE_ERROR, "J'en ai des.", "J'en parle de mon travail.",
    "Je n'y vais pas à Paris.", "Oui, j'y vais au marché.", 'Nous en revenons de Paris.',
    "J'en ai des enfants.", 'Il en rêve de cette maison.']) {
    ok(keepsPreposition(s), `the surviving-preposition guard does not fire on « ${s} », so it is not a guard`);
  }
  for (const s of [
    "J'y vais.", "J'en ai.", "J'en parle.", "J'en bois.", 'Nous en revenons.',
    "J'en ai trois.", "J'en ai beaucoup.", "J'en veux un peu.", "J'en ai assez.",
    "J'y pense souvent.", 'Elle y répond.', 'Elle en parle.', 'Elle habite en France.',
    'Je vais à Paris.', 'Je bois du café.', 'Je parle de mon travail.',
    'Tu as du sucre ?', MUST_RIGHT, "J'en ai besoin.",
    /* THE FROZEN PHRASE, which holds a y and a de and comes apart for nobody. */
    'Il y a du pain.', 'Il y en a.', 'Il y en a trois.',
    'Il y en a un à quatorze heures, quai trois.', 'il y en a encore',
    "Je vais à Paris ; j'y vais en train.",
    "Tu penses à ton examen ? Oui, j'y pense souvent.",
    "Tu veux du café ? Oui, j'en veux bien.",
    /* AND THE ENGLISH. */
    'The little word is already inside the pronoun, so saying it again says it twice.',
    'Say the verb, then say à, then the person.', 'de plus a thing',
  ]) {
    ok(!keepsPreposition(s), `the surviving-preposition guard fires on « ${s} », which it must not`);
  }
  /* AND STRIPPING THE FROZEN PHRASE DOES NOT DISARM THE GUARD ON ANYTHING ELSE. */
  ok(keepsPreposition("Il y a du pain. Et j'y vais à Paris."),
    'stripping « il y a » disarms the guard on a different sentence, so the exemption is wider than it looks');
});

/** The five sections where a wrong form is deliberately shown. `s10-unseen` is
 *  on it because its two checks offer the doubled preposition as a distractor on
 *  verbs the lesson never listed. */
const WRONG_FORM_SECTIONS = new Set(['s01-scene', 's10-unseen', 's12-trap', 's14-errors', 's23-quiz']);

test('NO CORRECT SURFACE keeps the little word after the pronoun', { skip: noLesson }, () => {
  strictEqual(L!.sections.length - WRONG_FORM_SECTIONS.size, 19,
    'the allowlist has changed size, which weakens this guard');
  for (const s of L!.sections) {
    if (WRONG_FORM_SECTIONS.has(s.id!)) continue;
    for (const str of display(s)) {
      ok(!keepsPreposition(str), `${s.id} keeps the little word after the pronoun: « ${str.slice(0, 80)} »`);
    }
  }
  /* AND EVERY OTHER SURFACE, NOT JUST THE SECTIONS. a2.24 §7.2: an audio brief
   * is a string the STUDIO READS AND RECORDS, so a wrong sentence in one gets
   * spoken into a clip and nothing on the host would ever have said so. */
  const permitted = new Set<string>([
    ...[...WRONG_FORM_SECTIONS].flatMap((id) => display(sec(id))),
    ...display(L!.errorTriggers ?? []),
    ...display(L!.drills ?? []),
  ]);
  const trapCards = ((sec('s12-trap') as { cards?: { fr?: string }[] }).cards ?? []).map((c) => c.fr ?? '');
  const withoutTrapCards = (str: string): string => trapCards.reduce((acc, f) => (f ? acc.split(f).join(' ') : acc), str);
  for (const str of ALL) {
    if (permitted.has(str)) continue;
    ok(!keepsPreposition(withoutTrapCards(str)),
      `a surface outside the five permitted sections keeps the little word: « ${str.slice(0, 80)} »`);
  }
  /* AND THE EXEMPTION IS NARROW. */
  ok(keepsPreposition(withoutTrapCards("Some brief. J'en parle de mon travail. More brief.")),
    'stripping the trap cards disarms the guard on a different error');
});

test('inside the permitted sections an error is NEVER the correct option', { skip: noLesson }, () => {
  const choices: { opts?: string[]; correct?: number | string }[] = [];
  const collect = (v: unknown): void => {
    if (Array.isArray(v)) { for (const x of v) collect(x); return; }
    if (!v || typeof v !== 'object') return;
    const o = v as Record<string, unknown>;
    if (Array.isArray(o.opts)) choices.push(o as { opts?: string[]; correct?: number | string });
    for (const x of Object.values(o)) collect(x);
  };
  for (const id of WRONG_FORM_SECTIONS) collect(sec(id));
  for (const d of L!.drills ?? []) collect(d);
  ok(choices.length >= 12, `only ${choices.length} option sets found, so this guard is not reaching the content`);
  for (const ch of choices) {
    if (typeof ch.correct !== 'number') continue;
    const answer = ch.opts![ch.correct];
    ok(!(answer && (keepsPreposition(answer) || answer === MUST_WRONG || answer === PERSON_ERROR || answer === FROZEN_ERROR)),
      `an error is offered as the CORRECT option: « ${answer} »`);
  }
});

test('the lesson shows the errors it exists to prevent, WHERE THE LEARNER MEETS THEM', { skip: noLesson }, () => {
  for (const e of [MUST_WRONG, KEEPS_A_ERROR, KEEPS_DE_ERROR, PERSON_ERROR, FROZEN_ERROR]) {
    ok(ALL.some((s) => s.includes(e)), `the lesson never shows « ${e} »`);
  }
  /* ── MUTATION-FOUND HOLE. a2.24's HOLE 3 in a new place ────────────────
   *
   * The check above walks the WHOLE surface, so an error could leave the screen
   * that teaches it and survive only as a quiz distractor and still pass. That
   * is an assertion that something EXISTS rather than that this claim is made.
   * The four production errors belong on the commonErrors deck, one per screen,
   * and the frozen one belongs on the frozen screen. */
  const wrongs = ((sec('s14-errors') as { errors?: { wrong: string }[] }).errors ?? []).map((e) => e.wrong);
  for (const e of [MUST_WRONG, KEEPS_A_ERROR, KEEPS_DE_ERROR, PERSON_ERROR]) {
    ok(wrongs.includes(e), `« ${e} » is not on the commonErrors deck, so the learner meets it only as a distractor`);
  }
  /* AND THE TRAP'S OWN FIRST CARD IS THE ERROR. a2.24's HOLE 2: the cards are
   * the teaching and the drill is the check, and it is the CARDS the audio step
   * reads aloud, so being satisfied by a gated option is not enough. */
  const cards = (sec('s12-trap') as { cards?: { fr?: string }[] }).cards ?? [];
  strictEqual(cards[0]!.fr, KEEPS_A_ERROR, `the trap's first card is « ${cards[0]!.fr} » and it should open on the error`);
  ok(cards.some((c) => keepsPreposition(c.fr ?? '')), 'no trapDrill CARD shows the error');
});

test('THE SCENE stops on the impossible answer and never marks it right', { skip: noLesson }, () => {
  /* a2.06's scene trails off and a2.24's finishes and means something else.
   * THIS ONE STOPS: « Oui, j'ai. » is two words with nowhere to go. */
  const beats = (sec('s01-scene') as {
    beats?: { kind?: string; from?: string; fr?: string; body?: string; wrong?: { fr?: string }; right?: { fr?: string }; options?: { fr?: string; outcome?: string }[] }[];
  }).beats ?? [];
  const said = beats.find((b) => b.kind === 'bubble' && b.from === 'you');
  strictEqual(said?.fr, MUST_WRONG, "the scene's learner line is not the two-word answer that is not a sentence");
  const brk = beats.find((b) => b.kind === 'break');
  ok(brk, 'the scene has no break beat');
  strictEqual(brk!.wrong?.fr, MUST_WRONG, "the break's wrong half is not the error");
  strictEqual(brk!.right?.fr, MUST_RIGHT, "the break's right half is not the sentence that closes");
  const choice = beats.find((b) => b.kind === 'choice');
  ok(choice, 'the scene has no choice beat');
  for (const o of choice!.options ?? []) {
    ok(!(o.outcome === 'works' && o.fr === MUST_WRONG), 'the scene marks the impossible answer as the one that works');
  }
  ok((choice!.options ?? []).some((o) => o.outcome === 'breaks' && o.fr === MUST_WRONG),
    'the scene never offers the impossible answer as the option that breaks');
  const words = String(brk!.body ?? '').trim().split(/\s+/u).length;
  ok(words >= 24 && words <= 40, `the break body is ${words} words and the budget is 24 to 40`);
});

test('no authored row carries an error', { skip: noLesson }, () => {
  for (const i of MINE) {
    ok(!keepsPreposition(i.fr), `${i.id} « ${i.fr} » keeps the little word after the pronoun`);
    ok(![MUST_WRONG, PERSON_ERROR, FROZEN_ERROR].includes(i.fr), `${i.id} is an error and it is an authored row`);
  }
});

/* ══════════════════════════════════════════════════════════════════════════
 *  5. THE SLOT-ORDER DECISION, AND THE CURRICULUM GAP
 * ═══════════════════════════════════════════════════════════════════════ */

/** `nous` and `vous` are DELIBERATELY ABSENT from the first set, because they
 *  are subject and object with the same spelling and a version holding them
 *  fires on « Nous en prenons. », which carries exactly one pronoun. a2.24
 *  shipped that defect for one run.
 *
 *  `y en` is ALSO absent, because option 1 teaches exactly that one order. */
const TWO_PRONOUNS =
  /(?<![\p{L}\p{N}'’-])((le|la|les)\s+(lui|leur)|(me|te|se)\s+(le|la|les|y|en)|(le|la|les|lui|leur)\s+(y|en))(?![\p{L}\p{N}'’-])\s+\p{L}/iu;

test('the two-pronoun guard fires on the real thing and not on « y en » or a subject nous', () => {
  for (const s of ['Tu le lui donnes tout de suite.', 'Je ne le lui ai pas encore donné.',
    'Nous allons le leur expliquer calmement.', 'Il me le donne demain.',
    'Je lui en parle demain.', 'Elle me le dit souvent.']) {
    ok(TWO_PRONOUNS.test(s), `the two-pronoun guard does not fire on « ${s} »`);
  }
  for (const s of ['Il y en a.', 'Il y en a trois.', 'il y en a encore',
    'Il y en a un à quatorze heures, quai trois.',
    'Nous en prenons.', 'Vous en voulez ?', 'Nous en revenons.', 'Nous y allons ensemble.',
    'Je leur montre la photo.', 'Je lui parle.']) {
    ok(!TWO_PRONOUNS.test(s), `the two-pronoun guard fires on « ${s} », which it must not`);
  }
});

test('OPTION 1: y before en is taught, and no other pair appears anywhere', { skip: noLesson }, () => {
  /* Corpus §7, and the brief: « Whichever slot-order option you took is
   * asserted, and if you took option 1, no multiple-pronoun sentence beyond
   * y en appears anywhere. » */
  ok(ALL.some((s) => s.includes(ORDER_RULE)), `the order rule « ${ORDER_RULE} » is stated nowhere, and the canDo says "in the right slot"`);
  ok(display(sec('s16-order')).some((s) => s.includes(ORDER_RULE)), 's16-order does not state the order it exists for');
  for (const s of UNIQUE) ok(!TWO_PRONOUNS.test(s), `two object pronouns other than « y en »: « ${s.slice(0, 80)} »`);
  for (const i of MINE) ok(!TWO_PRONOUNS.test(i.fr), `${i.id} « ${i.fr} » carries two object pronouns other than « y en »`);
  /* AND THE ONE ORDER IT DOES TEACH IS ACTUALLY THERE. */
  const YEN = /(?<![\p{L}\p{N}'’-])y\s+en(?![\p{L}\p{N}'’-])/iu;
  ok(MINE.some((i) => YEN.test(i.fr)), 'no authored row carries « y en », so option 1 teaches nothing');
});

test('MULTIPLE-PRONOUN ORDER IS NAMED AS SOMEBODY ELSE\'S, on a learner surface', { skip: noLesson }, () => {
  /* This is the curriculum gap the brief asks to be reported rather than
   * resolved: no A2 unit's title, sub or canDo names pronoun order, and no brief
   * file exists for a2.26 to a2.35. The learner is told the question exists and
   * is given none of its answer. */
  ok(ALL.some((s) => s.includes(ORDER_DEFERRED)), 'the reserved question is stated nowhere verbatim');
  ok(ALL.some((s) => /further question|belongs to a later lesson|not answered/iu.test(s)),
    'multiple-pronoun order is reserved and no surface says so, so the learner is left with a system that looks finished');
  /* AND NO LATER A2 UNIT HAS QUIETLY TAKEN IT SINCE. If one does, this lesson's
   * hand-off is out of date and the next author should find out here. */
  const owners = seed.units.filter((u) => /ordre des pronoms|pronoun order|two pronouns/i.test(`${u.title} ${u.sub} ${u.canDo}`));
  strictEqual(owners.length, 0,
    `${owners.map((u) => u.id).join(', ')} now names pronoun order, so a2.25's hand-off should point at it`);
});

/* ══════════════════════════════════════════════════════════════════════════
 *  6. il y a: SHOWN CONTAINING y, AND STATED NOT TO DECOMPOSE
 * ═══════════════════════════════════════════════════════════════════════ */

test('il y a is shown containing y and stated not to come apart, in ONE teaching section', { skip: noLesson }, () => {
  const s13 = display(sec('s13-frozen'));
  ok(s13.some((s) => s.includes(FROZEN_RULE)), 's13-frozen does not state that the phrase does not come apart');
  ok(s13.some((s) => namesUnit(s, 'a2.18')), 's13-frozen does not name a2.18, which owns the phrase in both its senses');
  ok(s13.some((s) => s.includes(FROZEN_ERROR)), `s13-frozen does not show « ${FROZEN_ERROR} », which is what taking the phrase apart gives you`);
  ok(s13.some((s) => s.includes('Il y a du pain.')), 's13-frozen does not show the phrase itself');
  /* ONE MISSION, ENFORCED BY TYPE RATHER THAN BY A COUNT. A bare count would let
   * a second teaching section in as soon as a recap dropped the line. */
  const RECAP = new Set(['reviewDeck', 'roundup', 'progressCheck', 'quiz']);
  const teaching = L!.sections.filter((s) => !RECAP.has(s.type) && display(s).some((x) => x.includes(FROZEN_RULE)));
  strictEqual(teaching.length, 1, `${teaching.map((s) => s.id).join(', ')} teach the frozen rule and the brief asks for one mission`);
  strictEqual(teaching[0]!.id, 's13-frozen');
});

test("the frozen phrase is spelled a2.18's way on every row that carries it", { skip: noLesson }, () => {
  /* a2.18 shipped a one-spelling-per-lesson guard scoped to its OWN rows, so it
   * cannot reach here; that was checked rather than assumed, and this lesson
   * follows the convention anyway. Three words with two jobs should not also
   * have two spellings. */
  for (const i of MINE) {
    /* MUTATION-FOUND. The first version matched « il y a » boundary-exactly,
     * which CANNOT SEE « il y en a » — the one place the phrase takes a
     * passenger, and two of this lesson's own rows. Both got a second spelling
     * and the test passed. */
    if (!/(?<![\p{L}\p{N}'’-])il y (en )?a(?![\p{L}\p{N}'’-])/iu.test(i.fr)) continue;
    ok(i.respell!.toUpperCase().includes('EEL EE AH'),
      `${i.id} « ${i.fr} » holds « ${i.respell} » and a2.18 spells the phrase EEL EE AH on both of its own rows`);
  }
  /* AND a2.18's TWO OWN CARDS ARE CARRIED, so the claim is that lesson's rows. */
  for (const id of ['fr.a2.prepositions-essentielles.186', 'fr.sons.jours-et-mois.081']) {
    const r = byIdItem.get(id);
    ok(r, `${id} is a2.18's card and is not in the seed`);
    ok(r!.respell!.toUpperCase().includes('EEL EE AH'), `${id} no longer holds a2.18's spelling`);
  }
});

/* ══════════════════════════════════════════════════════════════════════════
 *  7. THE NEGATION ARC, AND THE SEVENTH OCCURRENCE
 * ═══════════════════════════════════════════════════════════════════════ */

test("the negation string matches a2.24's, which matches a2.06's, and the three lines are still three", { skip: noLesson }, () => {
  ok(A118_REFRAME !== A219_REFRAME, 'a1.18 and a2.19 have been harmonised into one line');
  ok(A219_REFRAME !== A206_NEGATION, "a2.19's line and a2.06's extension have been harmonised");
  ok(ALL.some((s) => s.includes(A219_REFRAME)), "a2.19's line is not quoted verbatim");
  ok(ALL.some((s) => s.includes(A118_REFRAME)), "a1.18's line is not quoted verbatim");
  ok(ALL.some((s) => s.includes(A206_NEGATION)), "a2.06's extension is not quoted verbatim");
  /* AND a2.06 IS NAMED BESIDE IT, IN THE SECTION THAT TEACHES IT. a2.24's HOLE
   * 3: an assertion satisfied by a glossary entry asserts that something exists
   * rather than that this claim is made where the learner meets the rule. */
  const negation = display(sec('s15-negation'));
  ok(negation.some((s) => s.includes(A206_NEGATION)), 's15-negation does not carry the sentence it borrows');
  ok(negation.filter((s) => s.includes(A206_NEGATION)).some((s) => namesUnit(s, 'a2.06')),
    "the negation deck quotes a2.06's sentence and does not name a2.06 beside it");
});

test('the inherited strings still match the SHIPPED neighbours', { skip: noLesson }, () => {
  const bodyOf = (id: string) => {
    const l = seed.lessons.find((x) => x.id === id);
    return l ? display(l).join('\n') : '';
  };
  const direct = bodyOf('a2.06.l1');
  const indirect = bodyOf('a2.24.l1');
  if (direct) {
    ok(direct.includes(A206_NEGATION), 'a2.06 no longer carries the extension this lesson quotes');
    ok(direct.includes(POSITION_RULE), 'a2.06 no longer carries the position rule this lesson quotes six times');
  }
  if (indirect) {
    ok(indirect.includes(A_FRAMING), 'a2.24 no longer carries the à framing this lesson completes');
    ok(indirect.includes(POSITION_RULE), 'a2.24 no longer quotes the position rule, so the three-lesson claim is down to two');
    /* AND a2.24 STILL POINTS FORWARD AT THIS LESSON. */
    ok(indirect.includes('a2.25'), 'a2.24 no longer names a2.25, so its hand-off is gone');
  }
  const futur = bodyOf('a2.19.l1');
  if (futur) ok(futur.includes(A219_REFRAME), 'a2.19 no longer carries the line this lesson quotes');
  const neg = bodyOf('a1.18.l1');
  if (neg) ok(neg.includes(A118_REFRAME), 'a1.18 no longer carries the line this lesson quotes');
});

test("a2.02's term is verbatim, this instance is marked as the seventh, and the earlier ones are credited", { skip: noLesson }, () => {
  const quoting = ALL.filter((s) => s.includes(WHAT_FOLLOWS));
  ok(quoting.length >= 1, `a2.02's « ${WHAT_FOLLOWS} » is quoted nowhere`);
  ok(quoting.some((s) => namesUnit(s, 'a2.02')), 'the shape is quoted and a2.02 is not named beside it');
  ok(ALL.some((s) => /seventh/iu.test(s)), 'the lesson does not say this is the seventh occurrence');
  ok(ALL.some((s) => /six times|sixth/iu.test(s)), 'the earlier instances are not credited, which doctrine §B.7 asks for');
  /* AND THIS ONE IS MARKED AS DIFFERENT: it is the first with THREE answers
   * rather than two, which is what makes it the largest instance in the level. */
  ok(ALL.some((s) => /three answers|three jobs/iu.test(s)),
    'the lesson does not say this instance has three readings rather than two');
});

/* ══════════════════════════════════════════════════════════════════════════
 *  8. THE QUIZ
 * ═══════════════════════════════════════════════════════════════════════ */

test('every question has a why and a ref that resolves', { skip: noLesson }, () => {
  for (const q of quizQuestions(quiz())) {
    ok(q.why, `no why: ${q.q}`);
    ok(q.ref, `no ref: ${q.q}`);
    ok(L!.sections.some((s) => s.id === q.ref), `refs ${q.ref}, which is not a section`);
  }
});

test('at most half mcq, and free text is the backbone because BOTH halves are typeable', { skip: noLesson }, () => {
  const qs = quizQuestions(quiz());
  const mcq = qs.filter((q) => q.format === 'mcq').length;
  ok(mcq <= qs.length / 2, `${mcq} of ${qs.length} are mcq`);
  const free = qs.filter((q) => q.format === 'typeIn' || q.format === 'errorSpot').length;
  ok(free >= 12, `only ${free} free-text questions, and both of the things this lesson turns on can be written down`);
});

test('no typed question quotes its own answer', { skip: noLesson }, () => {
  /* Added after a wave-2 mutation turned out to be weak rather than revealing:
   * `matchesAccept(a, accept)` is true by construction for every member of its
   * own list, so that check is a control against a fold() change and not a
   * guard on the content. This is the guard the content actually needs — every
   * typeIn here quotes the SOURCE sentence and asks for the replacement, and a
   * question that quoted the answer would be free. */
  for (const q of quizQuestions(quiz())) {
    if (q.format !== 'typeIn') continue;
    for (const a of q.accept ?? []) ok(!q.q.includes(a), `a typed question quotes its own answer: ${q.q}`);
  }
});

test('every free-text question accepts the answer it displays', { skip: noLesson }, () => {
  const owned = new Set([...MINE.map((i) => i.fr), ...seed.items.map((i) => i.fr)]);
  for (const q of quizQuestions(quiz())) {
    for (const a of q.accept ?? []) {
      ok(matchesAccept(a, q.accept!), `« ${a} » is not accepted by its own accept list: ${q.q}`);
      if (/\s/u.test(a)) ok(owned.has(a), `« ${a} » is a free-text answer and is not a sentence in the corpus`);
    }
  }
});

test('the accent is asked as an mcq, because no typed surface can test it', { skip: noLesson }, () => {
  /* Corrections §5. Measured through the real function rather than believed, and
   * BOTH of this lesson's live diacritics collapse. */
  ok(fold('Je vais à Paris.') === fold('Je vais a Paris.'), 'fold() no longer collapses the grave on à');
  ok(fold('Où vas-tu ?') === fold('Ou vas-tu ?'), 'fold() no longer collapses où against ou');
  const qs = quizQuestions(quiz());
  const accent = qs.find((q) => /the little word here is à/iu.test(q.q));
  ok(accent, 'the accent limit is never put to the learner');
  strictEqual(accent!.format, 'mcq', 'only an mcq can test a diacritic');
  const opts = accent!.opts ?? [];
  ok(opts.some((o) => o.includes('à')) && opts.some((o) => /(?<![\p{L}])a\s/u.test(o)),
    'the accent question does not offer both the accented and the unaccented form');
  /* AND NO TYPED QUESTION TURNS ON ONE ANYWHERE. */
  for (const q of qs) {
    if (q.format !== 'typeIn' && q.format !== 'errorSpot') continue;
    ok(!/accent|grave/iu.test(q.q), `a typed question turns on a diacritic: ${q.q}`);
  }
});

/** THE ORDINARY GROUPS, AND THE CHECK IS THE SWAP RATHER THAN THE COUNT.
 *  a2.10, a2.11 and a2.24 all ship the counting shape, and it works for them
 *  because their groups never both appear in one legal pair. It does NOT work
 *  here: « J'y vais. » against « Je vais. » is this lesson's most useful ear
 *  question, both options carry `vais`, and a counting check refuses it.
 *  Corrections §5 gives the right shape in its own code sample. */
const HOMOPHONE_FORMS: readonly (readonly string[])[] = [
  ['pense', 'penses', 'pensent'],
  ['parle', 'parles', 'parlent'],
  ['joue', 'joues', 'jouent'],
  ['répond', 'réponds', 'répondent'],
  ['va', 'vas'],
  ['bois', 'boit'],
  ['veux', 'veut'],
  ['prend', 'prends'],
  ['a', 'à'],
  ['ou', 'où'],
];
const swapWord = (s: string, x: string, y: string): string =>
  s.replace(new RegExp(`(?<![\\p{L}\\p{N}-])${x}(?![\\p{L}\\p{N}'’-])`, 'giu'), y);
const earClash = (opts: string[]): string | null => {
  for (const g of HOMOPHONE_FORMS) {
    for (const x of g) for (const y of g) {
      if (x === y) continue;
      for (let i = 0; i < opts.length; i += 1) {
        for (let j = 0; j < opts.length; j += 1) {
          if (i !== j && swapWord(opts[i]!, x, y) === opts[j]) return `${opts[i]} » and « ${opts[j]}`;
        }
      }
    }
  }
  return null;
};

test('the ear-clash check catches a real swap and permits the contrast this lesson turns on', () => {
  ok(earClash(['Tu prends du sucre ?', 'Tu prend du sucre ?']), 'the ear-clash check does not catch a real homophone swap');
  ok(earClash(['Ils y pensent.', 'Ils y pense.']), 'the ear-clash check misses a swap in the middle of a sentence');
  ok(!earClash(["J'y vais.", 'Je vais.']), "the ear-clash check refuses the one contrast the ear can settle here");
  ok(!earClash([MUST_RIGHT, MUST_WRONG]), 'the ear-clash check refuses the obligatory pair, which is audible');
});

test('NO ear question offers two options that are one sound, in EITHER shape', { skip: noLesson }, () => {
  const exam = quizQuestions(quiz()).filter((q) => q.format === 'listenChoose');
  ok(exam.length >= 1, 'the exam has no ear question, and whether the word is there is genuinely audible');
  ok(exam.length <= 2, `${exam.length} ear questions, and the brief allows two at most`);
  /* ── MUTATION-FOUND HOLE, AND IT IS THE THING THE BRIEF NAMES ──────────
   *
   * The first version ran over the QUIZ only. The LISTENING section has its own
   * `questions` with their own `opts`, it is audioFirst, and the learner is
   * answering about audio there too, so a question asking which en is which by
   * ear could sit in it and pass. That is exactly what the brief says must not
   * be built, so both surfaces are walked. */
  const listening = ((sec('s06-listening') as { questions?: { q: string; opts?: string[] }[] }).questions ?? []);
  const ear = [...exam.map((q) => ({ q: q.q, opts: q.opts ?? [] })), ...listening.map((q) => ({ q: q.q, opts: q.opts ?? [] }))];
  for (const q of ear) {
    const clash = earClash(q.opts ?? []);
    ok(!clash, `an ear question offers « ${clash} », which differ only by a homophone swap`);
    /* AND THE ONE THE BRIEF NAMES, WHICH A WORD LIST CANNOT EXPRESS: the two ens
     * are THE SAME STRING, so the check is on the JOB rather than on the
     * spelling. « Do not build a round on distinguishing en the preposition from
     * en the pronoun by ear — they are the same sound and the question would
     * have no correct answer. » */
    const jobs = new Set((q.opts ?? []).map(enJob).filter(Boolean));
    ok(jobs.size <= 1, `an ear question offers both jobs of « en », which are one sound: ${q.q}`);
  }
});

test('the correct answers do not cluster in one slot', { skip: noLesson }, () => {
  const closed = quizQuestions(quiz()).filter((q) => typeof q.correct === 'number');
  const bySlot = new Map<number, number>();
  for (const q of closed) bySlot.set(q.correct as number, (bySlot.get(q.correct as number) ?? 0) + 1);
  for (const [slot, n] of bySlot) {
    ok(n / closed.length <= 0.4, `slot ${slot} holds ${n} of ${closed.length} closed answers, over the 40% cap`);
  }
});

test('every drill is the FIRST resolving target of at least one round', { skip: noLesson }, () => {
  const q = quiz() as unknown as { rounds?: { id: string; targets?: string[] }[] };
  const triggers = new Map((L!.errorTriggers ?? []).map((t) => [t.id, t]));
  strictEqual(triggers.size, 4, `${triggers.size} error triggers`);
  const leads = new Set<string>();
  for (const r of q.rounds ?? []) {
    const first = (r.targets ?? []).find((t) => triggers.has(t));
    ok(first, `round ${r.id} names no target that resolves`);
    leads.add(first!);
  }
  for (const id of triggers.keys()) {
    ok(leads.has(id), `${id} is never the FIRST resolving target of any round, so its drill is dead content`);
  }
  for (const t of triggers.values()) {
    ok((L!.drills ?? []).some((d) => d.id === t.drill), `${t.id} names drill ${t.drill}, which does not exist`);
    ok((L!.drills ?? []).some((d) => d.id === t.retest), `${t.id} names retest ${t.retest}, which does not exist`);
  }
});

/* ══════════════════════════════════════════════════════════════════════════
 *  9. THE DICTÉE, THE SPEAK LIST AND THE ROLE PLAY
 * ═══════════════════════════════════════════════════════════════════════ */

test('every dictée line is in LETTERS mode through the real dicteeMode', { skip: noLesson }, () => {
  const ids = (sec('s18-dictation') as { itemIds?: string[] }).itemIds ?? [];
  ok(ids.length >= 12, `the dictée targets ${ids.length} lines`);
  for (const id of ids) {
    const r = byIdItem.get(id);
    ok(r, `the dictée targets ${id}, which is not in the seed`);
    strictEqual(dicteeMode(r!.fr), 'letters',
      `« ${r!.fr} » is in WORD mode, which hands every word over pre-spelled`);
    ok(r!.drills.includes('dictation'), `${id} is a dictée target with no dictation drill`);
    ok(r!.fr.replace(/[^A-Za-zÀ-ÿ]/gu, '').length <= 16, `« ${r!.fr} » is over 16 letters`);
  }
});

test('the dictée covers both words, the obligatory answer, the order and a negative', { skip: noLesson }, () => {
  const frs = ((sec('s18-dictation') as { itemIds?: string[] }).itemIds ?? []).map((id) => byIdItem.get(id)!.fr);
  ok(frs.some((f) => Y_ELIDED.test(f) || Y_BEFORE_VERB.test(stripFrozen(f))), 'the dictée asks for no « y »');
  ok(frs.some((f) => usesEnPronoun(f)), 'the dictée asks for no « en »');
  ok(frs.includes(MUST_RIGHT), 'the dictée never asks for the obligatory answer, which is the half English gives no help with');
  ok(frs.some((f) => /(?<![\p{L}\p{N}'’-])y\s+en(?![\p{L}\p{N}'’-])/iu.test(f)), 'the dictée never asks for « y en »');
  ok(frs.some((f) => /^Je n['’]/u.test(f)), 'the dictée asks for no negative');
  /* ── MUTATION-FOUND HOLE, AND IT IS a2.24's HOLE 1 IN A NEW PLACE ──────
   *
   * The first version asked for a row matching /\bai\b/ and called that "the
   * past". IT IS NOT: « Oui, j'en ai. » — the OBLIGATORY ANSWER, and the whole
   * point of the lesson — satisfies it exactly. So a mutation that removed both
   * real past rows from the dictée passed, and the test claimed coverage it did
   * not have. The past is an auxiliary AND a participle, so that is what the
   * assertion looks for. */
  ok(frs.some((f) => PAST_SHAPE.test(f)), 'the dictée asks for no past');
  ok(!PAST_SHAPE.test(MUST_RIGHT), 'the past shape matches the obligatory answer, which is the hole this replaced');
});

test('every speak item carries voiceflash, and every role-play turn has two alts', { skip: noLesson }, () => {
  for (const id of (sec('s20-speak') as { itemIds?: string[] }).itemIds ?? []) {
    const r = byIdItem.get(id);
    ok(r, `the speak surface names ${id}, which is not in the seed`);
    ok(r!.drills.includes('voiceflash'), `${id} is on the speak surface with no voiceflash drill`);
  }
  const turns = (sec('s19-talk') as { turns?: { user: string; userEn?: string; alts?: unknown[] }[] }).turns ?? [];
  ok(turns.length >= 5, `${turns.length} role-play turns`);
  for (const t of turns) {
    ok(t.userEn, `a turn has no userEn: « ${t.user} »`);
    ok((t.alts ?? []).length >= 2, `a turn has under two alts: « ${t.user} »`);
    const r = MINE.find((i) => i.fr === t.user);
    ok(r, `a turn says « ${t.user} », which is not an authored row`);
    ok(r!.drills.includes('roleplay'), `${r!.id} is a role-play turn with no roleplay drill`);
  }
});

/* ══════════════════════════════════════════════════════════════════════════
 *  10. TRANCHES, ITEMS, AND EVERY ITEM ON A SCREEN
 * ═══════════════════════════════════════════════════════════════════════ */

test('the tranches release every item exactly once and nothing untaught', { skip: noLesson }, () => {
  const tranches = L!.deckTranche ?? [];
  strictEqual(tranches.length, (L!.acts ?? []).length, 'there is not one tranche per act');
  const flat = tranches.flat();
  strictEqual(new Set(flat).size, flat.length, 'an item is released by two tranches');
  const declared = new Set(L!.itemIds ?? []);
  for (const id of flat) {
    ok(declared.has(id), `${id} is released by a tranche and is not in itemIds`);
    ok(byIdItem.has(id), `${id} is released by a tranche and is not in the seed`);
  }
  for (const id of declared) ok(flat.includes(id), `${id} is in itemIds and no tranche releases it`);
});

test('no tranche releases an item the acts before it have not shown', { skip: noLesson }, () => {
  /* A faithful port of the batch's walk rather than a looser version of it,
   * because a looser one would pass on exactly the case it is for. It caught two
   * real misplacements in this build: « Tu vas à Paris ? », which does not reach
   * a screen until act 2 because act 1's à half is a2.04's imported row, and
   * « il y en a encore », which is not shown until the order screen in act 5. */
  const tranches = L!.deckTranche ?? [];
  const acts = L!.acts ?? [];
  const known = new Set(seed.items.map((i) => i.id));
  const shown = new Set<string>();
  for (let i = 0; i < acts.length; i += 1) {
    for (const sid of acts[i]!.sections) {
      const s = sec(sid);
      const strings = display(s);
      for (const str of strings) {
        for (const id of known) if (str.includes(id)) shown.add(id);
      }
      for (const id of (s as { itemIds?: string[] }).itemIds ?? []) shown.add(id);
      for (const str of strings) {
        for (const id of L!.itemIds ?? []) {
          const r = byIdItem.get(id);
          if (r && str.includes(r.fr)) shown.add(id);
        }
      }
    }
    for (const id of tranches[i]!) {
      ok(shown.has(id), `tranche ${i + 1} releases ${id} « ${byIdItem.get(id)?.fr} » and no act up to and including act ${i + 1} put it on a screen`);
    }
  }
});

test('every declared itemId reaches a screen, and nothing authored is dead', { skip: noLesson }, () => {
  const declared = new Set(L!.itemIds ?? []);
  for (const r of MINE) ok(declared.has(r.id), `${r.id} is authored and no section names it`);
  for (const s of L!.sections) {
    for (const id of (s as { itemIds?: string[] }).itemIds ?? []) {
      ok(byIdItem.has(id), `${s.id} names ${id}, which is not in the seed. The card would draw blank`);
    }
  }
});

test('the seed carries every imported row this lesson leans on', { skip: noLesson }, () => {
  /* Corrections §10: `pronoms-essentiels` holds 634 rows in Postgres and TEN of
   * this lesson's 27 imports were outside the cut, including all six of the
   * published rows its paradigm is built on. */
  for (const id of [
    /* The seven verbs. */
    'fr.sons.verbes-essentiels.003', 'fr.sons.verbes-essentiels.020',
    'fr.sons.verbes-essentiels.023', 'fr.sons.verbes-essentiels.007',
    'fr.sons.verbes-essentiels.002', 'fr.a1.cuisine.042', 'fr.sons.verbes-essentiels.012',
    /* THE SIX-ROW SET this lesson's paradigm is built on. */
    'fr.a2.pronoms-essentiels.028', 'fr.a2.pronoms-essentiels.029',
    'fr.a2.pronoms-essentiels.030', 'fr.a2.pronoms-essentiels.031',
    'fr.a2.pronoms-essentiels.032', 'fr.a2.pronoms-essentiels.033',
    /* The neighbours' own rows. */
    'fr.a2.pronoms-essentiels.190', 'fr.a2.pronoms-essentiels.237', 'fr.a2.pronoms-essentiels.238',
    'fr.a2.prepositions-essentielles.130', 'fr.a2.prepositions-essentielles.131',
    'fr.a2.prepositions-essentielles.173', 'fr.a2.prepositions-essentielles.185',
    'fr.a2.prepositions-essentielles.186', 'fr.sons.jours-et-mois.081',
    /* And the rest. */
    'fr.sons.expressions-utiles.158', 'fr.a2.rp-voyage.007', 'fr.a1.cuisine.268',
    'fr.a1.cafe.151', 'fr.a1.expressions-de-quantite.001',
  ]) {
    ok(byIdItem.has(id), `${id} is imported by this lesson and is not in the seed. Its card would draw blank`);
  }
  /* AND THE SIX-ROW FIND IS STILL WHAT THE HEADER SAYS IT IS. It is the reason
   * this lesson imports its paradigm rather than authoring it, and if one of the
   * six has moved the whole argument has. */
  strictEqual(byIdItem.get('fr.a2.pronoms-essentiels.028')!.fr, "j'y pense");
  strictEqual(byIdItem.get('fr.a2.pronoms-essentiels.029')!.fr, "Je vais à Paris ; j'y vais en train.");
  strictEqual(byIdItem.get('fr.a2.pronoms-essentiels.031')!.fr, "j'en veux");
  strictEqual(byIdItem.get('fr.a2.pronoms-essentiels.033')!.fr, 'Elle a trois frères ; elle en parle souvent.');
});

/* ══════════════════════════════════════════════════════════════════════════
 *  11. THE RESPELLING REPAIRS
 * ═══════════════════════════════════════════════════════════════════════ */

/** ONE TABLE, corrections §14.1, with the two reasons for `half !== to` kept
 *  SEPARATE. Written out by hand here rather than imported.
 *
 *  ONE BLIND ROW, AND IT IS THE SAME FRENCH WORD AS THE TWO VISIBLE ONES. That
 *  is the finding: `pahn-SAY` is FLAGGED and `zhee PAHNSS` is not, and only the
 *  respelling differs. §14.1 says the split is by NASAL rather than by ROW; this
 *  is the sharpest case in the band so far, because it is by nasal WITHIN ONE
 *  WORD FAMILY. */
const REPAIRS = [
  { id: 'fr.sons.verbes-essentiels.020', fr: 'penser', from: 'pahn-SAY', half: 'pahⁿ-SAY', to: 'pahⁿ-SAY', blind: false, house: false },
  { id: 'fr.b1.verbes.083', fr: 'penser', from: 'pahn-SAY', half: 'pahⁿ-SAY', to: 'pahⁿ-SAY', blind: false, house: false },
  { id: 'fr.a2.pronoms-essentiels.028', fr: "j'y pense", from: 'zhee PAHNSS', half: 'zhee PAHNSS', to: 'zhee PAHⁿSS', blind: true, house: false },
  { id: 'fr.a2.pronoms-essentiels.031', fr: "j'en veux", from: 'zhahn VUH', half: 'zhahⁿ VUH', to: 'zhahⁿ VUH', blind: false, house: false },
  { id: 'fr.sons.expressions-utiles.158', fr: 'il y en a encore', from: 'EEL YAHN NAH ahn-KOR', half: 'EEL YAHⁿ NAH ahⁿ-KOR', to: 'EEL YAHⁿ NAH ahⁿ-KOR', blind: false, house: false },
] as const;

test('every repair is measured through the real function, by name', () => {
  strictEqual(REPAIRS.length, 5, 'the repair table is not five rows');
  for (const r of REPAIRS) {
    ok(!hasPlainNasalFor(r.fr, r.to), `${r.id}: the repair target « ${r.to} » is still flagged`);
    ok(!hasPlainNasalFor(r.fr, r.half), `${r.id}: the minimal repair « ${r.half} » is still flagged`);
    strictEqual(r.half !== r.to, r.blind || r.house,
      `${r.id}: half !== to is ${r.half !== r.to} and (blind || house) is ${r.blind || r.house}`);
    if (r.blind) {
      ok(!hasPlainNasalFor(r.fr, r.from), `${r.id} is filed as blind and the checker flags its stored value`);
      strictEqual(r.half, r.from, `${r.id} is blind, so repairing what the checker reports changes nothing`);
    }
    if (!r.blind && !r.house) {
      ok(hasPlainNasalFor(r.fr, r.from), `${r.id} is filed as neither blind nor house and its stored value is not flagged`);
    }
  }
});

test('ONE row is blind, and the same word is VISIBLE in another respelling', () => {
  const blind = REPAIRS.filter((r) => r.blind);
  strictEqual(blind.length, 1, 'the blind count has moved. Re-measure rather than editing it');
  strictEqual(blind[0]!.id, 'fr.a2.pronoms-essentiels.028');
  /* THE TWO MEASUREMENTS THE FINDING RESTS ON, and they are the same French word.
   * If either changes, corpus §11 needs rewriting rather than this relaxing. */
  ok(!hasPlainNasalFor("j'y pense", 'zhee PAHNSS'),
    '« zhee PAHNSS » is now FLAGGED, so it is not blind and corrections §6 has been fixed');
  ok(hasPlainNasalFor('penser', 'pahn-SAY'),
    '« pahn-SAY » is no longer flagged, so the visible half of the same word family is gone');
});

test('there is NO real-/n/ false positive in this import, and the shape still exists', () => {
  /* Corrections §6 asks every build to look and to report the ABSENCE if it
   * finds none. a2.06 found none, a2.24 found two. This build found none, and
   * the absence is only a finding if the checker still has the defect. */
  for (const [w, re] of [['une', 'ÜN'], ['bureau', 'bü-ROH'], ['tennis', 'tay-NEESS'],
    ['personne', 'pehr-SON'], ['téléphone', 'tay-lay-FON'], ['marché', 'mar-SHAY']] as const) {
    ok(!hasPlainNasalFor(w, re), `${w}: « ${re} » is FLAGGED, so this import does carry a false positive after all`);
  }
  ok(hasPlainNasalFor('la semaine', 'suh-MEHN'),
    'the real-/n/ false positive has been fixed in hasPlainNasalFor, so reporting ZERO for this import is no longer the finding it is');
});

test('the repaired rows that are IN the seed hold the repaired value', { skip: noLesson }, () => {
  /* FOUR of the five repairs are rows this lesson IMPORTS, so they arrive
   * repaired by the CARRY path. a2.24 had ONE and called it the case with no
   * precedent in the band. The fifth, fr.b1.verbes.083, is a second `penser` row
   * this lesson does not import and is repaired in Postgres only. */
  const inSeed = REPAIRS.filter((r) => byIdItem.has(r.id));
  strictEqual(inSeed.length, 4, `${inSeed.length} repair targets are in the seed cut`);
  for (const r of inSeed) {
    strictEqual(byIdItem.get(r.id)!.respell, r.to, `${r.id} holds the unrepaired value`);
    ok(!hasPlainNasalFor(r.fr, byIdItem.get(r.id)!.respell!), `${r.id} is still flagged in the seed`);
  }
  ok(!byIdItem.has('fr.b1.verbes.083'), 'fr.b1.verbes.083 is now in the seed cut and the merge should carry its repair');
});

test('the authored rows use the values this build read off the corpus', { skip: noLesson }, () => {
  /* `zhee` is read off fr.a2.pronoms-essentiels.028 and `zhahⁿ` off .031, both
   * of which this build also repairs. a2.15's precedent: probe for the word
   * inside a phrase before concluding a respelling has to be made up. */
  const zhee = MINE.filter((i) => i.respell!.startsWith('zhee'));
  ok(zhee.length >= 4, `${zhee.length} rows print zhee, so the value was invented rather than read off`);
  const zhahn = MINE.filter((i) => i.respell!.includes('zhahⁿ'));
  ok(zhahn.length >= 10, `${zhahn.length} rows print zhahⁿ`);
  /* AND THE PREPOSITION IS SPELLED THE SAME WAY AS THE PRONOUN, which is the
   * point: the two are one sound and spelling them apart would claim a
   * difference that is not there. a2.04 settled `ahⁿ` and this follows it. */
  const prep = MINE.find((i) => i.fr === 'Elle habite en France.');
  ok(prep, 'the preposition row is gone');
  ok(prep!.respell!.includes('ahⁿ'), `the preposition row holds « ${prep!.respell} » and a2.04's value is ahⁿ`);
});

/* ══════════════════════════════════════════════════════════════════════════
 *  12. HOUSE COPY AND THE JARGON LINE
 * ═══════════════════════════════════════════════════════════════════════ */

const JARGON_NOUNS = [
  'adverbial pronoun', 'adverbial pronouns', 'neutral pronoun', 'neutral pronouns',
  'prepositional object', 'prepositional objects', 'partitive article', 'partitive articles',
  'direct object', 'direct objects', 'indirect object', 'indirect objects',
  'object pronoun', 'object pronouns', 'clitic', 'clitics',
  'antecedent', 'antecedents', 'anaphora', 'anaphoras',
];
const JARGON_ADJECTIVES = [
  'locative', 'genitive', 'partitive', 'dative', 'accusative', 'nominative',
  'oblique', 'proclitic', 'enclitic', 'adverbial', 'anaphoric', 'deictic',
  'pronominalisation', 'pronominalization', 'syntax', 'syntactic', 'valency',
];
const JARGON = [...JARGON_NOUNS, ...JARGON_ADJECTIVES];

test('every countable jargon noun carries its -s plural', () => {
  /* Corrections §13, and a2.06 §7.2 measured that the rule cannot be applied to
   * every entry — « accusatives » is not English — so there are two lists. */
  for (const j of JARGON_NOUNS) {
    if (j.endsWith('s')) continue;
    ok(JARGON_NOUNS.includes(`${j}s`), `JARGON_NOUNS holds « ${j} » and not « ${j}s »`);
  }
  for (const j of JARGON_ADJECTIVES) ok(!JARGON_NOUNS.includes(j), `« ${j} » is on both lists`);
});

test('no grammar jargon on any learner surface, and ZERO exempt strings', { skip: noLesson }, () => {
  /* THIS UNIT NEEDS NO EXEMPTION AT ALL, WHICH IS NEW IN THIS BLOCK. a2.06's
   * English name is « Direct Object Pronouns » and a2.24's is « Indirect Object
   * Pronouns », so both had to exempt `overview.titleEn` and a2.24's had to
   * exempt BOTH compounds at once. This one is « The Pronouns Y and EN ». */
  const titleEn = L!.overview?.titleEn ?? '';
  strictEqual(titleEn, 'The Pronouns Y and EN', 'overview.titleEn is not the unit name');
  for (const j of JARGON) ok(!hasPhrase(titleEn, j), `the unit's own English name contains « ${j} », so an exemption is needed after all`);
  for (const s of UNIQUE) {
    for (const j of JARGON) ok(!hasPhrase(s, j), `grammar jargon on a learner surface: « ${j} » in « ${s.slice(0, 80)} »`);
  }
});

test('the PLAIN phrase does the work, which is §14.5 method not a ban', { skip: noLesson }, () => {
  const plain = ALL.filter((s) => hasPhrase(s, PLAIN_PHRASE) || hasPhrase(s, PLAIN_TARGET)).length;
  ok(plain >= 2, `the plain phrase appears ${plain} times, which is not enough for the ratio to mean anything`);
  /* `pronoun` IS HOUSE VOCABULARY, measured by a2.06 at 233 uses across the
   * shipped seed. Banning it would be the build inventing a rule. */
  ok(ALL.some((s) => hasPhrase(s, 'pronoun')), '« pronoun » appears nowhere, and it is house vocabulary on 233 shipped cards');
  /* AND SO ARE `adjective` AND `adverb` (§14.5), so the guard is the RATIO
   * rather than a ban: the plain phrase must outnumber the technical names. */
  const partOfSpeech = ALL.filter((s) => hasPhrase(s, 'adjective') || hasPhrase(s, 'adjectives')
    || hasPhrase(s, 'adverb') || hasPhrase(s, 'adverbs')).length;
  ok(partOfSpeech <= plain, `the part-of-speech names appear ${partOfSpeech} times against the plain phrase's ${plain}`);
});

test('no em dash, no banned word, no double stop, no lowercase sentence start', { skip: noLesson }, () => {
  for (const s of UNIQUE) {
    ok(!/[—–]/u.test(s), `em dash: « ${s.slice(0, 80)} »`);
    /* SUBSTRING, NOT A WORD BOUNDARY. a2.06 §7.1: the band's `\bhonest` cannot
     * see `dishonest` and only the seed-wide test caught it. */
    ok(!/honest/i.test(s), `banned word: « ${s.slice(0, 80)} »`);
    ok(!/[.]\s*[.!?,;:]/u.test(s), `double stop: « ${s.slice(0, 80)} »`);
  }
  /* a2.24 v3 shipped four sentences opening on a lowercase word and they were
   * found on glass. THIS BUILD'S OWN CASE WAS DIFFERENT AND WORSE: a FRENCH
   * SENTENCE with its own full stop quoted inside an English one. The rule now
   * carries « » round it. */
  const SENTENCE_START = /[.!?]\s+([a-z][a-z0-9.']*)/gu;
  for (const s of UNIQUE) {
    for (const m of s.matchAll(SENTENCE_START)) {
      const w = m[1]!;
      if (/^(a\d|b\d|sons)/u.test(w)) continue;
      if (s.slice(0, m.index).endsWith('«')) continue;
      if (s.slice((m.index ?? 0) + m[0].length).startsWith('·')) continue;
      ok(false, `a sentence starts on a lowercase word « ${w} … »: « ${s.slice(0, 100) } »`);
    }
  }
});

test('the intro is present, names what goes inside, and says it cannot be dropped', { skip: noLesson }, () => {
  /* CORRECTIONS §9: `intro` is drawn on the lesson overview card AND the lesson
   * cover, and a2.11 shipped « third person » there in v1 with every host gate
   * green, because the walk read sections + sheets + terms and not this. */
  const intro = L!.intro ?? '';
  ok(intro.length > 100, 'the lesson has no intro, and it is drawn on two screens');
  ok(/little word/iu.test(intro), 'the intro does not name the thing that goes inside');
  ok(/leave these words out|cannot be left out|will not let you leave/iu.test(intro),
    'the intro does not say the words cannot be left out');
  for (const j of JARGON) ok(!hasPhrase(intro, j), `grammar jargon in the intro: « ${j} »`);
});

test('three term chips per section, every chip defined, every term used', { skip: noLesson }, () => {
  const terms = L!.terms ?? {};
  for (const s of L!.sections) {
    const t = (s as { terms?: string[] }).terms ?? [];
    ok(t.length <= 3, `${s.id} declares ${t.length} term chips and the renderer shows 3`);
    for (const k of t) ok(terms[k], `${s.id} names term « ${k} », which is not defined`);
  }
  for (const k of Object.keys(terms)) {
    ok(L!.sections.some((s) => ((s as { terms?: string[] }).terms ?? []).includes(k)), `term « ${k} » is defined and no section surfaces it`);
  }
});

/* ══════════════════════════════════════════════════════════════════════════
 *  13. THE SEED-WIDE CONTRACTS AND THE LAYOUT TRAPS
 * ═══════════════════════════════════════════════════════════════════════ */

test('commonErrors carries swipe, or it draws a blank screen', { skip: noLesson }, () => {
  const ce = sec('s14-errors') as { swipe?: boolean; errors?: { wrong: string; right: string; why: string }[] };
  strictEqual(ce.swipe, true, 'commonErrors without swipe hit a break that fell out of the switch and returned undefined');
  ok((ce.errors ?? []).length >= 3, 'commonErrors has under three errors');
  for (const e of ce.errors ?? []) {
    ok(e.why, `a common error has no why: « ${e.wrong} »`);
    ok(e.wrong !== e.right, 'a common error has the same wrong and right');
    ok(!keepsPreposition(e.right) && e.right !== MUST_WRONG, `a common error offers « ${e.right} » as the right answer and it is an error`);
  }
});

test('the trapDrill walks rule > cards > audio > drill with a gated drill step', { skip: noLesson }, () => {
  /* Corrections §14.6: `lesson-contract.test.ts` has enforced this since
   * 2026-08-13. `size` comes OFF a stepped one. */
  const td = sec('s12-trap') as {
    swipe?: boolean; size?: string; audio?: { recordingId?: string }; say?: string;
    rule?: unknown; steps?: { kind: string; gate?: boolean }[]; cards?: { fr?: string }[]; drill?: unknown[];
  };
  strictEqual(td.swipe, true, 'the trapDrill has no swipe');
  ok(!td.size, 'the trapDrill carries a size, and size comes OFF a stepped trapDrill');
  ok(td.audio, 'the trapDrill has no audio spec');
  ok(td.say, 'the trapDrill has no say');
  ok(td.rule, 'the trapDrill has no rule block');
  deepStrictEqual((td.steps ?? []).map((s) => s.kind), ['rule', 'cards', 'audio', 'drill']);
  ok((td.steps ?? []).find((s) => s.kind === 'drill')?.gate, "the trapDrill's drill step is not gated");
  ok((td.cards ?? []).length >= 3 && (td.drill ?? []).length >= 4, 'the trapDrill is thin');
  /* THE AUDIO STEP PLAYS EACH CARD's `fr`, so the take must contain those lines.
   * The ledger sweep flags this and the contract test does not check it. */
  const brief = (L!.audio?.recorded ?? []).find((r) => r.id === td.audio?.recordingId);
  ok(brief, `the trapDrill points at ${td.audio?.recordingId} and no audio brief declares it`);
  for (const c of td.cards ?? []) {
    ok(brief!.desc.includes(c.fr ?? ''), `the audio step plays « ${c.fr} » and the brief does not name that line`);
  }
});

test("the widened walk reaches the trapDrill's gated drill, which the band's does not", { skip: noLesson }, () => {
  const td = sec('s12-trap') as { drill?: { opts?: string[] }[] };
  const first = td.drill?.[0]?.opts?.[0];
  ok(first, 'the trapDrill has no drill options');
  ok(display(td).includes(first!), `the walk still cannot see the gated drill: « ${first} » is on a screen and not in display()`);
  const trigger = (L!.errorTriggers ?? [])[0];
  ok(trigger, 'there are no error triggers');
  ok(!display(trigger).includes(trigger!.drill), `« ${trigger!.drill} » is an id and it reached the learner-surface walk`);
});

test('the reference sheet holds the thing neither neighbour could hold', { skip: noLesson }, () => {
  /* Corrections §8: a `sheetId` resolves ONLY inside the lesson that declares
   * it, so this cannot extend a2.06's or a2.24's. The brief asks what it holds
   * that theirs could not: THE TWO PREPOSITIONS AND THE SLOT ORDER. Neither
   * neighbour's sheet has a preposition in it anywhere, because for both of them
   * the pronoun replaced a noun phrase and the question did not arise. */
  const sheets = L!.sheets ?? [];
  strictEqual(sheets.length, 1, `${sheets.length} reference sheets`);
  for (const ss of sheets[0]!.sections ?? []) {
    ok(ss.type !== 'cheatSheet', 'a cheatSheet inside a reference sheet draws its title and nothing else');
  }
  const tables = (sheets[0]!.sections ?? []).filter((ss) => ss.type === 'table');
  ok(tables.length >= 2, `the sheet holds ${tables.length} tables and it exists to hold two`);
  const sheetText = JSON.stringify(sheets[0]);
  for (const w of ['à plus', 'de plus']) {
    ok(sheetText.includes(w), `the sheet does not carry « ${w} », and the preposition is the thing the neighbours' sheets could not hold`);
  }
  ok(sheetText.includes(ORDER_RULE), 'the sheet does not carry the order, which is the second thing it is for');
  /* AND EVERY sheetId RESOLVES INSIDE THIS LESSON. */
  const declared = new Set(sheets.map((s) => s.id));
  for (const s of L!.sections) {
    const id = (s as { sheetId?: string }).sheetId;
    if (id) ok(declared.has(id), `${s.id} names sheet ${id}, which this lesson does not declare`);
  }
  for (const id of declared) {
    ok(L!.sections.some((s) => (s as { sheetId?: string }).sheetId === id), `sheet ${id} is declared and no section reaches it`);
  }
});

test('every act names sections that exist, and no section is claimed twice', { skip: noLesson }, () => {
  const seen = new Set<string>();
  for (const a of L!.acts ?? []) {
    for (const id of a.sections) {
      sec(id);
      ok(!seen.has(id), `${id} is claimed by two acts`);
      seen.add(id);
    }
  }
  strictEqual(seen.size, L!.sections.length, 'a section belongs to no act');
});

/* ══════════════════════════════════════════════════════════════════════════
 *  14. THE MISSION-ROW TITLE WIDTH
 *
 *  a2.06 shipped a clipped title at v2 with every host gate green, because it
 *  asserted a great deal about every section and NOTHING about how wide its
 *  title draws. The model is a2.23's, restated here as a LITERAL because this
 *  file imports no source (see the header).
 * ═══════════════════════════════════════════════════════════════════════ */

const EM: Readonly<Record<string, number>> = {
  i: 0.28, l: 0.28, j: 0.28, I: 0.28, '.': 0.28, ',': 0.28, "'": 0.2, '’': 0.2, ' ': 0.28,
  t: 0.35, f: 0.35, r: 0.35,
  m: 0.85, w: 0.85, W: 0.9, M: 0.9,
  O: 0.72, N: 0.72, Q: 0.72, G: 0.72,
  v: 0.5, s: 0.5, y: 0.5, z: 0.5, c: 0.5, x: 0.5,
};
const titleWidth = (s: string): number => {
  let w = 0;
  for (const ch of s) w += EM[ch] ?? (ch >= 'A' && ch <= 'Z' ? 0.65 : 0.55);
  return Math.round(w * 100) / 100;
};
const TITLE_WIDTH_MAX = 13.55;
const TITLE_MUST_FIT = ['Build It, One Word At A Time', 'One Word Changes The Other', 'What You Will Be Able To Do'];
const TITLE_MUST_CLIP = ['Verbs You Were Never Shown', 'You Already Have Four Of The Five', 'The Word With Nowhere To Go'];

test('the width model still separates the cases measured on a device', () => {
  for (const s of TITLE_MUST_FIT) ok(titleWidth(s) <= TITLE_WIDTH_MAX, `« ${s} » fits on a device and the model says ${titleWidth(s)}`);
  for (const s of TITLE_MUST_CLIP) ok(titleWidth(s) > TITLE_WIDTH_MAX, `« ${s} » clips on a device and the model says ${titleWidth(s)}`);
});

test('no mission title clips on the row', { skip: noLesson }, () => {
  for (const s of L!.sections) {
    const w = titleWidth(s.title ?? '');
    ok(w <= TITLE_WIDTH_MAX, `${s.id} title « ${s.title} » is ${w} em against the row's ${TITLE_WIDTH_MAX}`);
  }
});
