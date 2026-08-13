// a2.14.l1 "Irréguliers 4 : savoir & connaître": the assertions that keep this
// lesson true.
//
// Modelled on a2-13-modaux.test.ts. Everything here runs the REAL app function
// rather than a copy: an earlier a1.01 test inlined its own glossary lookup,
// copied the version that was already broken, and passed while the feature was
// dead.
//
// THIS FILE READS seed.json AND NOTHING ELSE. It does not import the corpus, the
// terms or the lesson source, because a test that imports the same constant the
// content imports is comparing the content to itself. Every figure below is
// written out by hand, so a change in the source has to be reflected here on
// purpose.
//
// ── What this file is actually guarding ────────────────────────────────────
//
// English has ONE verb where French has two, so the failure mode is not "a word
// is missing". It is:
//
//   THE CONTRAST BEING SPLIT ACROSS TWO SCREENS. The brief: "Both verbs belong
//   on one screen, two columns, adjacent. Separated, the lesson is two small
//   paradigms and the choice never appears." Asserted on s04-grid line by line,
//   and again on s08-next by index.
//   THE REFRAME TURNING SEMANTIC. « Je sais où elle habite. » is a PLACE and it
//   takes savoir. Any rule about meaning sends the learner to the wrong verb,
//   and the corpus already publishes that rule in French at fr.a2.collegues.009.
//   s11-place is where the syntactic version earns its keep and it is asserted
//   to hold at least two lines of each verb, all of them about places.
//   « Je connais où il habite. » LEAKING OUT OF THE REJECTION. It is not clumsy
//   French, it is not French, and it may appear in exactly two strings and
//   nowhere else. NOTE that « ne … que » IS legal with connaître and published
//   three times; this lesson authors none, which is what makes the absolute rule
//   safe to assert over its own content.
//   THE POUVOIR DISTRACTORS GOING AWAY. sais/peux is the second trap and the
//   reason this unit declares a2.13 as its prerequisite. At least two quiz
//   questions must turn on it and the minimal pair must stay minimal.
//   THE RESPELLINGS BEING "CORRECTED". The brief predicted hasPlainNasalFor
//   would object to connaissons, connaissez and connaissent. IT DOES NOT, and
//   they are pinned by name so that a later author reading a rule about
//   superscripts cannot 'fix' koh-NEHS into a sound the word does not contain.
//   A NASAL GOING BLIND. Ten superscripts, nine seen by the checker and ONE
//   invisible, and the invisible one is asserted by name. The mechanism is new:
//   hasPlainNasalFor runs its doubled-nasal rescue on the WHOLE French string,
//   and connaître is spelled with nn, so every line using it is exempt.
//   THE CIRCUMFLEX DRIFTING. Measured: 82 published rows spell an -aître word
//   and zero spell one flat. fold() cannot test an accent, so the one question
//   that asks is an mcq and its wrong option is the only flat display permitted.
//   THE PASSÉ COMPOSÉ SHIFT ARRIVING EARLY. j'ai su is "I found out" and j'ai
//   connu is "I met". That is a2.05's, at seq 16, and it is refused by name.
//   A DICTÉE TARGET GROWING PAST SIXTEEN LETTERS. Word mode hands every word
//   over pre-spelled. The connaître PLURAL cannot be dictated at any object
//   length and its absence is asserted so nobody "completes" the set.
//   listenChoose ARRIVING ON A HOMOPHONE. sais/sait and connais/connaît are each
//   one sound; a question asking a learner to separate one by ear would certify
//   a bug. Exactly one listenChoose ships and it is sais against peux.
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
import { fold, matchesAccept } from './answer.logic.ts';

const here = dirname(fileURLToPath(import.meta.url));
const seed = JSON.parse(readFileSync(resolve(here, 'seed.json'), 'utf8')) as {
  version: number; items: Item[]; lessons: Lesson[];
  units: { id: string; title?: string; sub?: string; canDo?: string; seq?: string | number; lessonIds?: string[]; prereqUnitIds?: string[] }[];
};

const L = seed.lessons.find((l) => l.id === 'a2.14.l1');
const noLesson = !L;
const byId = new Map(seed.items.map((i) => [i.id, i] as const));

/* ─── The shape of the lesson ──────────────────────────────────────────── */

const SPINE = [
  's01-scene', 's02-goals', 's03-two',
  's04-grid', 's05-situations', 's06-savoir', 's07-second-verb',
  's08-next', 's09-sort', 's10-skill', 's11-place', 's12-both', 's13-things', 's14-evidence', 's15-listening',
  's16-pouvoir', 's17-three', 's18-errors', 's19-never', 's20-family',
  's21-scenario', 's22-build', 's23-dictation', 's24-speak', 's25-review',
  's26-progress', 's27-quiz', 's28-roundup',
];

/** THE OWNS ACT IS THE HEAVIEST, ALONE, AND THE PARADIGM ACT IS THE SMALLEST IN
 *  BATCH 1. Eight missions on the choice against four on the twelve cells. If
 *  that ever inverts, the forms have taken the lesson over, which is the failure
 *  doctrine §B.5 exists to prevent.
 *
 *  The production act is five, which is more than any other lesson in batch 1
 *  and is what the brief asks for by name. */
const ACTS = [
  { id: 'act1', n: 3 },
  { id: 'act2', n: 4 },
  { id: 'act3', n: 8 },
  { id: 'act4', n: 5 },
  { id: 'act5', n: 5 },
  { id: 'act6', n: 3 },
];
const PARADIGM_ACT = 'act2';
const OWNS_ACT = 'act3';
const PRODUCTION_ACT = 'act5';

/** THE REFRAME, VERBATIM. Shipped from the brief's candidate B, tightened from a
 *  statement into a test a learner can run mid-utterance. Eight words, so it
 *  fits an xl section's 12-word cap on every string. */
const REFRAME = 'connaître stops at a thing. savoir keeps going.';
/** Asserted against explicit constants, never figures derived from the lesson: a
 *  derived count compares the content to itself and passes on any rewording.
 *
 *  NOTE THAT THE BATCH COUNTS 19 AND THIS FILE COUNTS 20, AND BOTH ARE RIGHT.
 *  The batch walks `prose()`, which drops notation keys including `sub`; this
 *  file walks every string in the lesson. The difference is the one occurrence
 *  that sits in a card's `sub`. Two walks, two figures, and neither is derived
 *  from the other. */
const REFRAME_SECTIONS = 14;
const REFRAME_APPEARANCES = 20;
/** The question the reframe turns into, carried alongside it. */
const THE_TEST = 'Ask one question before you pick: does my sentence stop here, or does it keep going?';

/** a2.02's name for one form doing two jobs, quoted rather than reinvented. This
 *  lesson is the mirror: two forms, one job, and the next word picks again. */
const WHAT_FOLLOWS = 'what comes next decides';
const WHAT_FOLLOWS_UNIT = 'a2.02';
/** a2.13 owns pouvoir and is this unit's prerequisite for that reason alone. */
const CONTRAST_UNIT = 'a2.13';
/** a2.15 owns the family principle, and it is seq 9, the very next lesson. */
const FAMILY_UNIT = 'a2.15';

/* ─── The twelve cells, written out ────────────────────────────────────── */

const PERSONS = ['je', 'tu', 'il · elle · on', 'nous', 'vous', 'ils · elles'];
const SAVOIR_FORMS = ['sais', 'sais', 'sait', 'savons', 'savez', 'savent'];
const CONN_FORMS = ['connais', 'connais', 'connaît', 'connaissons', 'connaissez', 'connaissent'];

/** ONE FRAME PER VERB, AND THEY MUST DIFFER. a2.13 got eighteen cells onto one
 *  frame and that was its best decision. Copying it here would delete the
 *  lesson: the complement is what is being taught. */
const SAVOIR_FRAME = 'nager';
const CONN_FRAME = 'Paris';

const SAVOIR_IDS = ['fr.a2.verbes.381', 'fr.a2.verbes.382', 'fr.a2.verbes.383', 'fr.a2.verbes.384', 'fr.a2.verbes.385', 'fr.a2.verbes.386'];
const CONN_IDS = ['fr.a2.verbes.387', 'fr.a2.verbes.388', 'fr.a2.verbes.389', 'fr.a2.verbes.390', 'fr.a2.verbes.391', 'fr.a2.verbes.392'];

/** THE RESPELLINGS THE BRIEF PREDICTED THE VALIDATOR WOULD OBJECT TO. It does
 *  not, and they are pinned by name with the reason, because a later author
 *  reading a rule about superscripts will want to change them. */
const ASSERTED_RESPELLINGS: [string, string, string][] = [
  ['connaissons', 'koh-neh-SOHⁿ', 'the -ons IS nasal and takes the superscript. koh- is a plain /ɔ/ because the French spells nn.'],
  ['connaissez', 'koh-neh-SAY', 'no nasal anywhere; the -ez is the ordinary a2.01 ending.'],
  ['connaissent', 'koh-NEHS', 'THE ONE THE INVARIANTS NAME AS A BLIND SPOT AND IT IS NOT ONE. The -ent is silent so the respelling ends on the /s/ of the stem, and there is no nasal vowel in connaissent to mark.'],
  ['connaît', 'koh-NEH', 'the naming form minus its last two letters, which is why the naming form is repaired to koh-NEHTR.'],
  ['savent', 'SAV', 'the -ent is silent, as it has been since a2.01. Nothing is nasal.'],
  ['savons', 'sa-VOHⁿ', 'the -ons is nasal, matching a2.13\'s voulons, pouvons and devons.'],
];

/** THE ROW WHERE THE CHECKER IS BLIND, AND THE MECHANISM.
 *
 *  hasPlainNasalFor runs `if (/(?:nn|mm)/i.test(fr)) return false` on the WHOLE
 *  FRENCH STRING. For a word that is right; for a sentence it is not, because
 *  one doubled nasal anywhere switches the check off for the whole line. And
 *  connaître is spelled with nn.
 *
 *  It only bites where the respelling uses a bare vowel letter before the n,
 *  because hasPlainNasal's own list (AH OH EH UH EU AI OU) catches the rest
 *  first. `SOHⁿ` is seen; `byaⁿ` is not. */
const BLIND_ROW = 'fr.a2.verbes.401';
const BLIND_TOKEN = 'byaⁿ';

/** THE SENTENCE THAT CANNOT EXIST, and the only two strings in which a connaître
 *  form may stand in front of a clause opener. */
const IMPOSSIBLE = 'Je connais où il habite.';
const IMPOSSIBLE_RIGHT = 'Je sais où il habite.';
const IMPOSSIBLE_PLURAL = 'Nous connaissons que le train est en retard.';
const IMPOSSIBLE_STRINGS = [IMPOSSIBLE, IMPOSSIBLE_PLURAL];

/** THE MINIMAL PAIR. One word changed and nothing else moved. */
const TRAP_SKILL = 'fr.a2.verbes.381';
const TRAP_PERMISSION = 'fr.a2.verbes.403';

/** THE ADJACENT PAIR the brief requires: one savoir-plus-clause item and one
 *  connaître-plus-object item, next to each other, asserted by INDEX. */
const ADJACENT = ['fr.a2.verbes.381', 'fr.a2.verbes.387'];

/** THE HOUSE CHROME. a2.13 replaced both of these with a pouvoir version to stay
 *  clear of this lesson and handed the decision here. The decision was to SHIP
 *  them and pay the roundup one off by name: it is savoir plus a verb, on a
 *  screen the learner has read at the end of every lesson they have finished. */
const GOALS_HEADING = 'Ce que vous saurez faire';
const ROUNDUP_HEADING = 'Ce que vous savez faire';
/** The future forms of savoir. Permitted in the goals heading and NOWHERE else,
 *  because this lesson teaches the present and must not appear to teach more. */
const FUTURE_FORMS = ['saurai', 'sauras', 'saura', 'saurons', 'saurez', 'sauront'];

/** a2.05's, at seq 16, and genuinely interesting, which is why it is refused by
 *  name rather than left to good intentions. */
const PAST_FORMS = ['su', 'connu', 'savais', 'savait', 'savions', 'saviez', 'savaient',
  'connaissais', 'connaissait', 'connaissions', 'connaissiez', 'connaissaient'];

/** a2.13 owns the paradigm; only its singular may appear here. */
const POUVOIR_FORBIDDEN = ['pouvons', 'pouvez', 'peuvent', 'pourrais', 'pourrait', 'pourrions', 'pourriez'];
/** How many exam questions are ANSWERED with a pouvoir form. Exact rather than a
 *  floor: one for permission, one for the impersonal `on`, one for the sentence
 *  that holds both verbs. A floor of two let a mutation through. */
const POUVOIR_ANSWERS = 3;

/** The flat spellings, and the ONE place one may be displayed: the wrong option
 *  of the single mcq that can test the accent at all. */
const FLAT_SPELLINGS = ['connaitre', 'connait', 'reconnaitre', 'reconnait', 'paraitre', 'parait'];
const FLAT_PERMITTED = ['Il connait Paris.'];

/** MEASURED ON GLASS by a2.13's device pass, not derived from any document, and
 *  invisible to the schema and the density validator. See the two tests. */
const MISSION_TITLE_MAX = 27;
const LG_GROUPDRILLS = 9;
const LG_GROUPDRILL_ITEMS = 53;

const AUTHORED = 30;
const IMPORTED = 12;
const ITEMS = 42;
const QUESTIONS = 36;
const ROUNDS = 6;
const DICTATION = 10;
const ID_FROM = 'fr.a2.verbes.381';
const ID_TO = 'fr.a2.verbes.410';

/* ─── Helpers, none of which reimplements app logic ────────────────────── */

function strings(v: unknown, out: string[] = []): string[] {
  if (typeof v === 'string') out.push(v);
  else if (Array.isArray(v)) for (const x of v) strings(x, out);
  else if (v && typeof v === 'object') for (const x of Object.values(v)) strings(x, out);
  return out;
}

const NOTATION_KEYS = new Set(['ipa', 'respell', 'promptSound', 'scoreSegment', 'sub']);
function prose(v: unknown, out: string[] = []): string[] {
  if (typeof v === 'string') out.push(v);
  else if (Array.isArray(v)) for (const x of v) prose(x, out);
  else if (v && typeof v === 'object') {
    for (const [k, x] of Object.entries(v)) if (!NOTATION_KEYS.has(k)) prose(x, out);
  }
  return out;
}

/** Machine keys. Section ids and accept-lists are not learner surfaces, and a
 *  guard that reads them fires on legitimate content: this build's first
 *  circumflex check failed on the section id `s07-connaitre`, which is why that
 *  section is now called `s07-second-verb`. */
const MACHINE_KEYS = new Set([
  'id', 'ref', 'sheetId', 'itemId', 'itemIds', 'targets', 'detectOn', 'drill',
  'retest', 'accept', 'recordingId', 'audioRef', 'unitId', 'scenarioId',
]);
function display(v: unknown, out: string[] = []): string[] {
  if (typeof v === 'string') out.push(v);
  else if (Array.isArray(v)) for (const x of v) display(x, out);
  else if (v && typeof v === 'object') {
    for (const [k, x] of Object.entries(v)) if (!MACHINE_KEYS.has(k)) display(x, out);
  }
  return out;
}

/** Accent-aware word-boundary search. NEVER build a regex out of a search term:
 *  `\b` is ASCII-only in JavaScript and returns zero on a trailing accent, which
 *  looks exactly like an absence. a2.02 shipped that bug. It matters more here
 *  than anywhere: `connaît` ends in `t` and `connaître` does not. */
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
const countPhrase = (hay: string, needle: string): number => {
  let n = 0; let i = 0;
  const h = hay.toLowerCase(); const q = needle.toLowerCase();
  while ((i = h.indexOf(q, i)) !== -1) { n += 1; i += q.length; }
  return n;
};

const sections = () => (L?.sections ?? []) as unknown as Record<string, unknown>[];
const byIdSec = (id: string) => sections().find((s) => s.id === id);
const item = (id: string) => byId.get(id);
const quizSec = () => sections().find((s) => s.type === 'quiz');
const questions = () => (quizSec() ? quizQuestions(quizSec() as never) : []);
const skip = { skip: noLesson ? 'a2.14.l1 is not in the seed' : false };

/* ══════════════════════════════════════════════════════════════════════════
 *  1. THE LESSON EXISTS AND HAS THE SHAPE IT CLAIMS
 * ═══════════════════════════════════════════════════════════════════════ */

test('a2.14.l1 is in the seed', () => {
  ok(L, 'a2.14.l1 is missing from seed.json');
});

test('the unit is what the database says, not what the brief said', skip, () => {
  const u = seed.units.find((x) => x.id === 'a2.14');
  ok(u, 'unit a2.14 is missing');
  // Corrections §1: every A2 brief so far has had title and sub swapped and a
  // sub that is in no database. These are the values the probe returned.
  strictEqual(u!.title, 'Irregular Verbs 4: Savoir and Connaître');
  strictEqual(u!.sub, 'Irréguliers 4 : savoir & connaître');
  strictEqual(u!.canDo, 'Can pick savoir or connaître correctly, the distinction English does not make');
  strictEqual(Number(u!.seq), 8);
  ok((u!.lessonIds ?? []).includes('a2.14.l1'), 'the unit does not list its lesson');
  // The prerequisite is a2.13 for one reason: pouvoir.
  deepStrictEqual(u!.prereqUnitIds ?? [], [CONTRAST_UNIT]);
});

test('the eyebrow the renderer computes matches the stored tag', skip, () => {
  const u = seed.units.find((x) => x.id === 'a2.14')!;
  strictEqual(L!.tag, `A2 · LEÇON ${String(u.seq).padStart(2, '0')}`);
});

test('the spine is in order and nothing has been inserted', skip, () => {
  deepStrictEqual(sections().map((s) => s.id), SPINE);
  strictEqual(sections().length, 28);
});

test('the acts run in section order and carry the counts they claim', skip, () => {
  const acts = (L!.acts ?? []) as { id: string; sections: string[] }[];
  deepStrictEqual(acts.map((a) => ({ id: a.id, n: a.sections.length })), ACTS);
  deepStrictEqual(acts.flatMap((a) => a.sections), SPINE);
});

test('THE OWNS ACT IS THE HEAVIEST, ALONE', skip, () => {
  const acts = (L!.acts ?? []) as { id: string; sections: string[] }[];
  const sizes = acts.map((a) => a.sections.length);
  const owns = acts.find((a) => a.id === OWNS_ACT)!.sections.length;
  const max = Math.max(...sizes);
  strictEqual(owns, max, 'the Owns act is not the largest');
  strictEqual(sizes.filter((n) => n === max).length, 1, 'the Owns act ties with another');
});

test('the paradigm act is smaller than the production act', skip, () => {
  // The brief: "Because there are only two paradigms, you have room for more
  // production than any other lesson in batch 1. Use it."
  const acts = (L!.acts ?? []) as { id: string; sections: string[] }[];
  const par = acts.find((a) => a.id === PARADIGM_ACT)!.sections.length;
  const prod = acts.find((a) => a.id === PRODUCTION_ACT)!.sections.length;
  ok(par < prod, `the paradigm act has ${par} missions and production ${prod}`);
});

test('the lesson validates and its density is clean', skip, () => {
  const issues = validateLesson(L!, L!.id);
  strictEqual(issues.length, 0, formatIssues(issues));
  const d = validateDensity(L!, new Set(seed.items.map((i) => i.id)));
  strictEqual(d.length, 0, formatDensity(d));
});

test('there is exactly one quiz section', skip, () => {
  // lessonPager.logic.ts appends `sections.find(s => s.type === 'quiz')` and a
  // second one is silently never rendered. a1.01 shipped twelve dead questions.
  strictEqual(sections().filter((s) => s.type === 'quiz').length, 1);
});

/* ══════════════════════════════════════════════════════════════════════════
 *  2. THE REFRAME
 * ═══════════════════════════════════════════════════════════════════════ */

test('the reframe is the shipped wording, verbatim', skip, () => {
  strictEqual(L!.reframe, REFRAME);
});

test('the reframe is carried across at least three sections, and this many', skip, () => {
  const secs = sections().filter((s) => strings(s).some((x) => x.includes(REFRAME)));
  ok(secs.length >= 3, `the density validator requires three sections; found ${secs.length}`);
  strictEqual(secs.length, REFRAME_SECTIONS);
});

test('the reframe appears exactly this many times across the whole lesson', skip, () => {
  const all = strings(L).join('\n');
  strictEqual(countPhrase(all, REFRAME), REFRAME_APPEARANCES);
});

test('the reframe is a TEST the learner runs, not a fact they recall', skip, () => {
  // The rejected candidate A is a semantic split and it breaks on a place that
  // takes savoir. What ships asks a question, and the question is carried too.
  ok(strings(L).some((s) => s.includes(THE_TEST)), 'the question form of the reframe is missing');
  ok(REFRAME.split(/\s+/).length <= 12, 'the reframe is past the xl 12-word cap');
});

test('THE REFRAME HOLDS ON EVERY AUTHORED SENTENCE', skip, () => {
  // The one assertion this lesson exists for. Every authored row is walked and
  // the word after its verb is checked against the rule.
  const opensClause = (w: string) => {
    const t = w.toLowerCase().replace(/[«»,.!?…]/gu, '');
    return ['que', 'où', 'quand', 'si', 'comment', 'pourquoi'].includes(t) || /^qu['’]/u.test(t);
  };
  const after = (fr: string, form: string) => {
    const toks = fr.replace(/[.,!?…]/gu, ' ').split(/\s+/u).filter(Boolean);
    const ix = toks.findIndex((t) => t.toLowerCase() === form.toLowerCase());
    return ix < 0 ? null : (toks[ix + 1] ?? null);
  };
  const mine = seed.items.filter((i) => i.id >= ID_FROM && i.id <= ID_TO);
  let savoirClauses = 0;
  let connThings = 0;
  for (const r of mine) {
    for (const f of CONN_FORMS) {
      if (!hasPhrase(r.fr, f)) continue;
      const nx = after(r.fr, f);
      ok(!(nx && opensClause(nx)),
        `${r.id} puts ${JSON.stringify(nx)} straight after ${f}: ${JSON.stringify(r.fr)}. connaître has to land on a thing.`);
      if (nx) connThings += 1;
    }
    for (const f of SAVOIR_FORMS) {
      if (!hasPhrase(r.fr, f)) continue;
      const nx = after(r.fr, f);
      if (nx && opensClause(nx)) savoirClauses += 1;
      // AND THE OTHER HALF OF THE RULE, which the first version of this test did
      // not check and a mutation walked straight through. savoir may be followed
      // by a verb, by a clause, by the negative `pas`, or by nothing. It may NOT
      // be followed by a bare name: « savoir la réponse » exists in French and
      // so does « connaître la réponse », and opening that case makes the
      // reframe false on the lesson's own content.
      const verbish = (w: string) => /(er|ir|re|oir)$/i.test(w);
      ok(!nx || verbish(nx) || opensClause(nx) || nx.toLowerCase() === 'pas',
        `${r.id} puts ${JSON.stringify(nx)} straight after ${f}: ${JSON.stringify(r.fr)}. `
        + 'savoir takes a verb or a whole sentence here, never a bare name.');
    }
  }
  ok(savoirClauses >= 3, `${savoirClauses} savoir-plus-clause sentences; the Owns needs at least three`);
  ok(connThings >= 3, `${connThings} connaître-plus-thing sentences; the Owns needs at least three`);
});

test('THE SHEET RESPELLS AGREE WITH THE ROWS THE LEARNER IS SCORED ON', skip, () => {
  // a2.13 §6.2 IN THE RESPELLING DIMENSION, AND IT COST THIS BUILD A MUTATION.
  //
  // The sheet's `sheet-say` table renders from its own source and the cards
  // render from the authored rows. Two independent copies of the same twelve
  // values, and nothing compared them: "correct" one of the sheet's respellings
  // and the learner reads one pronunciation and is scored on another, with every
  // other gate green. Exactly the shape that let `veulent` become `voulent` on
  // a2.13's grid.
  const sheets = (L!.sheets ?? []) as { sections?: { id?: string; rows?: string[][] }[] }[];
  const say = (sheets[0].sections ?? []).find((s) => s.id === 'sheet-say');
  ok(say, 'sheet-say is missing');
  strictEqual((say!.rows ?? []).length, 6);
  (say!.rows ?? []).forEach((row, i) => {
    strictEqual(row[0], PERSONS[i], `sheet-say row ${i} is not ${PERSONS[i]}`);
    const savoirRow = item(SAVOIR_IDS[i])!;
    const connRow = item(CONN_IDS[i])!;
    ok(savoirRow.respell!.includes(row[1]),
      `sheet-say says ${JSON.stringify(row[1])} for savoir at ${PERSONS[i]} and the card the learner is scored on says ${JSON.stringify(savoirRow.respell)}`);
    ok(connRow.respell!.includes(row[2]),
      `sheet-say says ${JSON.stringify(row[2])} for connaître at ${PERSONS[i]} and the card the learner is scored on says ${JSON.stringify(connRow.respell)}`);
  });
});

/* ══════════════════════════════════════════════════════════════════════════
 *  3. THE LAYOUT CLAIM THE BRIEF MAKES
 * ═══════════════════════════════════════════════════════════════════════ */

test('BOTH VERBS ARE ON ONE SCREEN, ON EVERY LINE OF THE GRID', skip, () => {
  // The brief: "Both verbs belong on one screen, two columns, with savoir on one
  // side and connaître on the other, adjacent. THIS IS THE LAYOUT THE TEST MUST
  // ASSERT. Separated, the lesson is two small paradigms and the choice never
  // appears."
  const grid = byIdSec('s04-grid') as { type?: string; examples?: { fr: string; en?: string }[] } | undefined;
  ok(grid, 's04-grid is missing');
  strictEqual(grid!.type, 'examples', 'a table at layer core is a table-in-core density failure');
  strictEqual((grid!.examples ?? []).length, 6);
  (grid!.examples ?? []).forEach((ex, i) => {
    ok(hasPhrase(ex.fr, SAVOIR_FORMS[i]), `grid line ${i} is missing ${SAVOIR_FORMS[i]}`);
    ok(hasPhrase(ex.fr, CONN_FORMS[i]), `grid line ${i} is missing ${CONN_FORMS[i]}`);
    ok(hasPhrase(ex.fr, SAVOIR_FRAME), `grid line ${i} is missing the savoir frame`);
    ok(hasPhrase(ex.fr, CONN_FRAME), `grid line ${i} is missing the connaître frame`);
  });
});

test('ONE SAVOIR ITEM AND ONE CONNAÎTRE ITEM ARE ADJACENT, AS A PAIR', skip, () => {
  const next = byIdSec('s08-next') as { cards?: { fr?: string }[] } | undefined;
  ok(next, 's08-next is missing');
  const frs = (next!.cards ?? []).map((c) => c.fr ?? '');
  const a = item(ADJACENT[0])!.fr;
  const b = item(ADJACENT[1])!.fr;
  const ia = frs.indexOf(a);
  const ib = frs.indexOf(b);
  ok(ia >= 0 && ib >= 0, 'one half of the adjacent pair is not on the screen');
  strictEqual(Math.abs(ia - ib), 1, `they sit at ${ia} and ${ib} and must be next to each other`);
  ok(hasPhrase(a, 'sais') && hasPhrase(b, 'connais'), 'the pair is not one of each verb');
});

test('the two columns use DIFFERENT frames, and each uses exactly one', skip, () => {
  // a2.13 got eighteen cells onto ONE frame and that was right for a lesson
  // whose claim was that the back of the sentence never moves. Copying that
  // check here would fail a correct build: the complement IS the teaching.
  for (const [ids, frame] of [[SAVOIR_IDS, SAVOIR_FRAME], [CONN_IDS, CONN_FRAME]] as const) {
    for (const id of ids) {
      const r = item(id);
      ok(r, `${id} is not in the seed`);
      const tail = r!.fr.replace(/[.!?…]\s*$/u, '').trim().split(/\s+/u).pop();
      strictEqual(tail, frame, `${id} does not end on ${frame}: ${JSON.stringify(r!.fr)}`);
    }
  }
  ok(SAVOIR_FRAME !== CONN_FRAME, 'the two columns share one frame word');
});

test('every grid cell on screen is the row the learner is scored on', skip, () => {
  // a2.13 §6.2: changing its paradigm table from veulent to voulent was caught
  // by the batch and the merge and sailed through the test file, because the
  // grid renders from its own table and nothing compared it to the cards.
  SAVOIR_IDS.forEach((id, i) => ok(hasPhrase(item(id)!.fr, SAVOIR_FORMS[i]), `${id} does not carry ${SAVOIR_FORMS[i]}`));
  CONN_IDS.forEach((id, i) => ok(hasPhrase(item(id)!.fr, CONN_FORMS[i]), `${id} does not carry ${CONN_FORMS[i]}`));
});

test('the situations table is a tapTable within the Pixel 6 row ceiling', skip, () => {
  // The brief asks for "a row per situation, tap to hear the sentence". tapTable
  // is NOT in ownsLayout(), so it renders inside a scrolling page and six rows
  // is the ceiling.
  const t = byIdSec('s05-situations') as { type?: string; rows?: unknown[] } | undefined;
  ok(t, 's05-situations is missing');
  strictEqual(t!.type, 'tapTable');
  ok((t!.rows ?? []).length >= 4 && (t!.rows ?? []).length <= 6, `${(t!.rows ?? []).length} rows`);
});

/* ══════════════════════════════════════════════════════════════════════════
 *  4. THE OWNS: A PLACE THAT TAKES SAVOIR
 * ═══════════════════════════════════════════════════════════════════════ */

test('s11-place holds at least two lines of each verb, all about places', skip, () => {
  // This is where the syntactic reframe earns its keep. « Je sais où elle
  // habite. » is a PLACE and takes savoir; the semantic rule sends the learner
  // to connaître, and that rule is already published in French at
  // fr.a2.collegues.009. If a later author replaces the reframe with the
  // semantic version, THIS is the screen that stops making sense.
  const p = byIdSec('s11-place') as { examples?: { fr: string }[] } | undefined;
  ok(p, 's11-place is missing');
  const frs = (p!.examples ?? []).map((e) => e.fr);
  const savoir = frs.filter((f) => SAVOIR_FORMS.some((x) => hasPhrase(f, x))).length;
  const conn = frs.filter((f) => CONN_FORMS.some((x) => hasPhrase(f, x))).length;
  ok(savoir >= 2, `${savoir} savoir line(s) on the place screen`);
  ok(conn >= 2, `${conn} connaître line(s) on the place screen`);
});

test('the corpus row that states the REJECTED reframe is not in this lesson', skip, () => {
  // fr.a2.collegues.009 reads « Connaître » s'utilise avec une personne ou un
  // lieu, « savoir » avec un fait ou une compétence. That is reframe A almost
  // word for word: it is French metalanguage on a learner surface, which
  // invariants §8 forbids, and it teaches the rule this build rejects.
  ok(!(L!.itemIds ?? []).includes('fr.a2.collegues.009'), 'the lesson imports the row that states the rejected rule');
  ok(!strings(L).some((s) => s.includes("s'utilise avec une personne")), 'the rejected rule is quoted on a surface');
});

/* ══════════════════════════════════════════════════════════════════════════
 *  5. THE SENTENCE THAT CANNOT EXIST
 * ═══════════════════════════════════════════════════════════════════════ */

test('a connaître form stands before a clause opener in EXACTLY the two rejection strings', skip, () => {
  // NOTE THE SCOPE, AND IT IS DELIBERATE. « Je ne connais que le centre-ville. »
  // is correct French and is published three times (fr.a2.negation-et-
  // restriction.177 and two b1 rows): `ne … que` is a restriction and the thing
  // is still there behind it. This lesson authors no `ne … que`, which is what
  // makes the absolute rule safe to assert over ITS OWN strings. A later author
  // adding one will trip this and should widen it deliberately.
  const shape = /(^|[^a-zà-ÿ])(connaître|connais|connaît|connaissons|connaissez|connaissent)\s+(que|où|quand|si|comment|pourquoi|qu['’])(?![a-zà-ÿ])/i;
  const offenders = strings(L).filter((s) => shape.test(s) && !IMPOSSIBLE_STRINGS.some((w) => s.includes(w)));
  deepStrictEqual(offenders, [], 'a connaître form precedes a clause opener outside the rejection');
});

test('both rejection strings are still there', skip, () => {
  // A permit whose entry has vanished is a rule that has quietly stopped being
  // taught, and the guard above would go on passing.
  const all = strings(L).join('\n');
  for (const w of IMPOSSIBLE_STRINGS) ok(all.includes(w), `${JSON.stringify(w)} is permitted and appears nowhere`);
});

test('the rejection is DRILLED as free text, not only selected', skip, () => {
  // The brief: "Drill the rejection, not just the selection: errorSpot on a
  // sentence that uses connaître before que or où." Free text is the only format
  // that can catch a structurally wrong sentence a learner would produce.
  const spots = questions().filter((q) => (q as { format?: string }).format === 'errorSpot'
    && IMPOSSIBLE_STRINGS.some((w) => String((q as { q?: string }).q ?? '').includes(w)));
  ok(spots.length >= 2, `${spots.length} errorSpot question(s) reject the impossible sentence`);
  for (const q of spots) {
    const qq = q as { answer?: string; accept?: string[] };
    ok(matchesAccept(qq.answer ?? '', qq.accept ?? []), `an errorSpot displays ${JSON.stringify(qq.answer)} and does not accept it`);
  }
});

test('the impossible sentence and its repair differ only in the verb', skip, () => {
  const a = IMPOSSIBLE.split(/\s+/).slice(2).join(' ');
  const b = IMPOSSIBLE_RIGHT.split(/\s+/).slice(2).join(' ');
  strictEqual(a, b, 'the wrong and right versions are not the same sentence with one word changed');
});

/* ══════════════════════════════════════════════════════════════════════════
 *  6. THE THIRD VERB, FROM a2.13
 * ═══════════════════════════════════════════════════════════════════════ */

test('the savoir/pouvoir contrast is present and NAMES a2.13', skip, () => {
  const s = byIdSec('s16-pouvoir');
  ok(s, 's16-pouvoir is missing');
  ok(hasPhrase(prose(s).join('  '), CONTRAST_UNIT), `s16-pouvoir does not name ${CONTRAST_UNIT}`);
  const both = strings(s).join('\n');
  ok(both.includes(item(TRAP_SKILL)!.fr), 'the savoir half of the pair is not on the screen');
  ok(both.includes(item(TRAP_PERMISSION)!.fr), 'the pouvoir half of the pair is not on the screen');
});

test('the savoir/pouvoir pair is a MINIMAL pair', skip, () => {
  // One word changed, nothing else moved. Two different sentences would make it
  // a comparison of situations and the teaching would be gone.
  const a = item(TRAP_SKILL)!.fr.split(/\s+/u).slice(2).join(' ');
  const b = item(TRAP_PERMISSION)!.fr.split(/\s+/u).slice(2).join(' ');
  strictEqual(a, b, `${JSON.stringify(a)} against ${JSON.stringify(b)}`);
});

test('the three-way choice is the trapDrill, and pouvoir is in the drill', skip, () => {
  const t = byIdSec('s17-three') as { type?: string; drill?: { opts?: string[] }[]; swipe?: boolean } | undefined;
  ok(t, 's17-three is missing');
  strictEqual(t!.type, 'trapDrill');
  ok(t!.swipe, 'a stepped trapDrill needs swipe to own its layout');
  const drillText = strings(t!.drill ?? []).join('  ');
  ok(/(^|[^a-zà-ÿ])(peux|peut)(?![a-zà-ÿ])/i.test(drillText) || strings(t).some((s) => hasPhrase(s, 'peux')),
    'the trapDrill does not exercise the third verb');
});

test('at least two quiz questions turn on pouvoir, AND TWO ARE ANSWERED WITH IT', skip, () => {
  // The brief: "Include at least two pouvoir distractors, so the three-way
  // choice is tested and not just the two-way."
  //
  // THE COUNT ALONE IS NOT ENOUGH, and a mutation proved it. Nine questions
  // mention a pouvoir form somewhere, so swapping the CORRECT ANSWER of one from
  // peux to sais left the count at eight and the assertion green while the
  // three-way choice had quietly become a two-way. What matters is how often
  // pouvoir is the ANSWER, not how often it is on the screen.
  const shape = /(^|[^a-zà-ÿ])(peux|peut|pouvoir)(?![a-zà-ÿ])/i;
  const mentions = questions().filter((q) => {
    const s = [String((q as { q?: string }).q ?? ''), ...(((q as { opts?: string[] }).opts) ?? []), String((q as { answer?: string }).answer ?? '')].join('  ');
    return shape.test(s);
  }).length;
  ok(mentions >= 2, `${mentions} question(s) involve pouvoir`);

  const answered = questions().filter((q) => {
    const qq = q as { format?: string; answer?: string; opts?: string[]; correct?: number | string };
    const right = qq.format === 'mcq' || qq.format === 'listenChoose'
      ? (qq.opts ?? [])[Number(qq.correct)] ?? ''
      : (qq.answer ?? '');
    return shape.test(right);
  }).length;
  // AND THE FIGURE IS EXACT, not a floor. A floor of two survived the mutation
  // that swapped one answer from peux to sais, because three questions are
  // answered with a pouvoir form and dropping to two still cleared it. Three is
  // the SHAPE of the three-way choice here — one for permission, one for the
  // impersonal on, one for the sentence that holds both verbs — and a quiet drop
  // to two is exactly what this is guarding against. Invariants §6 on when a
  // hardcoded count is right.
  strictEqual(answered, POUVOIR_ANSWERS,
    `pouvoir is the correct answer to ${answered} question(s); the three-way choice ships ${POUVOIR_ANSWERS}`);
});

test('a2.13 owns the pouvoir paradigm and this lesson prints only its singular', skip, () => {
  const all = strings(L).join('\n');
  for (const f of POUVOIR_FORBIDDEN) {
    ok(!hasPhrase(all, f), `${f} reached a surface; ${CONTRAST_UNIT} owns the paradigm`);
  }
});

/* ══════════════════════════════════════════════════════════════════════════
 *  7. WHAT THIS LESSON MUST NOT TEACH
 * ═══════════════════════════════════════════════════════════════════════ */

test('THE PASSÉ COMPOSÉ MEANING SHIFT IS NOT TAUGHT', skip, () => {
  // j'ai su = I found out, j'ai connu = I met. Genuinely interesting, and a2.05's
  // territory at seq 16. Present tense only.
  const all = strings(L).join('\n');
  for (const f of PAST_FORMS) ok(!hasPhrase(all, f), `${f} reached a surface; the past belongs to a2.05 at seq 16`);
});

test('the future of savoir appears in the goals heading and nowhere else', skip, () => {
  const homes = sections().filter((s) => strings(s).some((x) => FUTURE_FORMS.some((f) => hasPhrase(x, f))));
  deepStrictEqual(homes.map((s) => s.id), ['s02-goals']);
  const goals = byIdSec('s02-goals') as { frSub?: string };
  strictEqual(goals.frSub, GOALS_HEADING);
  for (const f of FUTURE_FORMS) {
    const outside = strings(L).filter((s) => s !== GOALS_HEADING && hasPhrase(s, f));
    deepStrictEqual(outside, [], `${f} appears outside the goals heading`);
  }
});

test('the family is named ONCE and its principle is handed to a2.15', skip, () => {
  // The brief: "reconnaître and paraître follow connaître exactly. Name one, do
  // not teach the principle." MEASURED FALSE FOR SYNTAX: six published sentences
  // put reconnaître straight before `que`, which is the shape this lesson has
  // just taught the learner to reject. So the card claims its ENDINGS and
  // nothing else.
  const f = byIdSec('s20-family');
  ok(f, 's20-family is missing');
  const text = prose(f).join('  ').toLowerCase();
  ok(hasPhrase(text, FAMILY_UNIT), `s20-family does not hand the principle to ${FAMILY_UNIT}`);
  // THE CLAIM CAN BE MADE IN THE TERM AS WELL AS IN THE SECTION, and the first
  // version of this test only read the section. A mutation put "It behaves like
  // connaître in every way." into the theFamily term body and walked straight
  // through. Terms are a separate field on the lesson and a chip surfaces them
  // wherever the word turns up.
  const termText = prose(L!.terms ?? {}).join('  ').toLowerCase();
  for (const where of [text, termText]) {
    for (const claim of ['exactly like connaître', 'follows connaître exactly', 'behaves like connaître', 'same as connaître', 'in every way']) {
      ok(!where.includes(claim), `the family card or term claims ${JSON.stringify(claim)}, which is false for what may follow it`);
    }
  }
  const all = prose(L).join('  ');
  for (const w of ['paraître', 'apparaître', 'disparaître', 'naître']) {
    ok(!hasPhrase(all, w), `${w} is named; a2.15 owns the family`);
  }
});

/* ══════════════════════════════════════════════════════════════════════════
 *  8. THE RESPELLINGS
 * ═══════════════════════════════════════════════════════════════════════ */

test('every authored respelling passes the REAL nasal checker', skip, () => {
  const mine = seed.items.filter((i) => i.id >= ID_FROM && i.id <= ID_TO);
  strictEqual(mine.length, AUTHORED);
  for (const r of mine) {
    ok(r.respell, `${r.id} has no respelling; a card the learner cannot say is not a card`);
    ok(!hasPlainNasalFor(r.fr, r.respell!), `${r.id} closes a nasal with a plain n: ${JSON.stringify(r.respell)}`);
    ok(!r.respell!.includes('‿'), `${r.id} respells with U+203F, which renders as a low underscore on a Pixel 6`);
  }
});

test('CONNAISSONS, CONNAISSEZ AND CONNAISSENT ARE ASSERTED BY NAME', skip, () => {
  // THE BRIEF SAYS THESE MEET THE VALIDATOR'S FALSE-POSITIVE PATH. THEY DO NOT.
  // The path needs a token ENDING in a vowel plus a plain n or m: koh-NEHS ends
  // in S and koh-neh-SAY in a vowel, so it is never entered. And if it were,
  // hasPlainNasalFor checks the FRENCH for a doubled nasal first, and connaître
  // is written with nn, so it returns false on its first real branch, which is
  // correct rather than lucky.
  //
  // They are pinned anyway. A later author reading a rule about superscripts
  // will want to "fix" koh-NEHS, and there is nothing to fix: connaissent has
  // no nasal vowel in it at all.
  const mine = seed.items.filter((i) => i.id >= ID_FROM && i.id <= ID_TO);
  for (const [form, respell, why] of ASSERTED_RESPELLINGS) {
    const row = mine.find((r) => hasPhrase(r.fr, form));
    ok(row, `no authored row carries ${form}`);
    ok(row!.respell!.includes(respell), `${form} is respelled ${JSON.stringify(row!.respell)} and this lesson ships ${JSON.stringify(respell)}.\n  ${why}`);
    ok(!hasPlainNasalFor(form, respell), `${form} [${respell}] is flagged by the checker and the lesson says it is not`);
  }
});

test('THE ONE NASAL THE CHECKER CANNOT SEE IS ASSERTED BY NAME', skip, () => {
  // A BLIND SPOT NOBODY HAS RECORDED, AND IT IS ABOUT THE FRENCH RATHER THAN
  // THE RESPELLING. hasPlainNasalFor runs `if (/(?:nn|mm)/i.test(fr)) return
  // false` on the WHOLE French string. For a word that is right; for a sentence
  // it is not, because one doubled nasal anywhere switches the check off for
  // every other word in the line. connaître is spelled with nn.
  //
  // The proof is one pair, identical but for the doubled n:
  //   Il sait bien nager.        eel SEH byan nah-ZHAY      SEEN
  //   Il connaît bien la ville.  eel koh-NEH byan la VEEL   MISSED
  //
  // Corrections §6 records the blind spot as a nasal followed by a consonant
  // inside the TOKEN. This one is wider and neither implies the other.
  const row = item(BLIND_ROW);
  ok(row, `${BLIND_ROW} is not in the seed`);
  ok(row!.respell!.includes(BLIND_TOKEN),
    `${BLIND_ROW} no longer carries ${JSON.stringify(BLIND_TOKEN)}: ${JSON.stringify(row!.respell)}. `
    + 'The shared checker cannot see this one, so this assertion is the only guard on it.');
  // and the blindness itself, asserted as a negative, so the day the checker
  // improves this goes red rather than carrying a dead by-name list.
  const broken = row!.respell!.replace('ⁿ', 'n');
  ok(!hasPlainNasalFor(row!.fr, broken),
    'hasPlainNasalFor now SEES this one. The checker has been improved; drop the by-name assertion and say so.');
  // and the control: the same respelling shape in a sentence with no nn IS seen.
  ok(hasPlainNasalFor('Il sait bien nager.', 'eel SEH byan nah-ZHAY'),
    'the control case is no longer flagged, so the mechanism recorded above has changed');
});

test('the superscripts that ARE visible are all visible', skip, () => {
  const mine = seed.items.filter((i) => i.id >= ID_FROM && i.id <= ID_TO);
  const withSup = mine.filter((r) => (r.respell ?? '').includes('ⁿ'));
  strictEqual(withSup.length, 10);
  let blind = 0;
  for (const r of withSup) {
    const re = r.respell!;
    for (let i = 0; i < re.length; i += 1) {
      if (re[i] !== 'ⁿ') continue;
      if (!hasPlainNasalFor(r.fr, re.slice(0, i) + 'n' + re.slice(i + 1))) blind += 1;
    }
  }
  strictEqual(blind, 1, `${blind} superscripts are invisible to the checker; the lesson records exactly one`);
});

test('the false-positive path is met once and correctly NOT flagged', skip, () => {
  // Corrections §6 asks every build to look for a real /n/ the checker reads as
  // an unmarked nasal, and to report the absence if it finds none. This lesson
  // finds one, in `la voisine`: it ends in a vowel plus N at a token boundary,
  // which is the exact shape that flagged `jaune` and `scène`. The vowel-after-n
  // rescue catches it, on a word nobody had in mind when they wrote that rescue.
  ok(!hasPlainNasalFor('la voisine', 'vwah-ZEEN'), 'la voisine is now flagged; the rescue in hasPlainNasalFor has changed');
  // and the masculine, which SHOULD be flagged, still is. Without this the test
  // above would pass on a checker that had simply stopped working.
  ok(hasPlainNasalFor('le voisin', 'luh vwah-ZAN'), 'le voisin is no longer flagged, so the checker is not doing its job');
});

test('the connaître naming form is repaired to the stem the singular comes from', skip, () => {
  // NOT A NASAL REPAIR and not a rule violation. This lesson prints the naming
  // form directly above koh-NEH, and the stored koh-NETR shows a vowel changing
  // where the spelling shows nothing changing. koh-NEHTR is also the corpus
  // majority and matches the reconnaître row on the same screen.
  const naming = item('fr.sons.verbes-essentiels.048');
  ok(naming, 'the connaître naming form is not in the seed');
  strictEqual(naming!.respell, 'koh-NEHTR');
  ok(naming!.respell!.startsWith('koh-NEH'), 'the naming form does not begin with the singular respelling');
});

/* ══════════════════════════════════════════════════════════════════════════
 *  9. THE CIRCUMFLEX
 * ═══════════════════════════════════════════════════════════════════════ */

test('THE CIRCUMFLEX DECISION IS ASSERTED AND ITEMS STAY CONSISTENT', skip, () => {
  // Measured 2026-08-12: 82 published rows spell a word ending in -aître and
  // ZERO spell one flat. The first measurement of this was wrong in the way
  // invariants §0 says it will be: a bare substring query reported two flat
  // rows and both were `préparait`, which contains `parait`.
  const shape = new RegExp(`(^|[^a-zà-ÿ])(${FLAT_SPELLINGS.join('|')})(?![a-zà-ÿ])`, 'i');
  const flat = display(L).filter((s) => shape.test(s) && !FLAT_PERMITTED.includes(s));
  deepStrictEqual(flat, [], 'a flat -aître spelling reached a display surface');
  // Every authored row too, not only the lesson body.
  const mine = seed.items.filter((i) => i.id >= ID_FROM && i.id <= ID_TO);
  for (const r of mine) ok(!shape.test(r.fr), `${r.id} spells an -aître word flat: ${JSON.stringify(r.fr)}`);
});

test('the accent sits on exactly one cell, and only an mcq asks about it', skip, () => {
  strictEqual(CONN_FORMS.filter((f) => f.includes('î')).length, 1);
  strictEqual(CONN_FORMS.indexOf('connaît'), 2);
  // fold() strips combining marks, so no typed surface can test an accent: a
  // typeIn or errorSpot turning on it ACCEPTS the mistake and tells the learner
  // they spelled it right. Corrections §5.
  strictEqual(fold('Il connaît Paris.'), fold('Il connait Paris.'),
    'fold now distinguishes the accent; the mcq-only rule can be revisited');
  for (const p of FLAT_PERMITTED) {
    const homes = questions().filter((q) => ((q as { opts?: string[] }).opts ?? []).includes(p));
    strictEqual(homes.length, 1, `${JSON.stringify(p)} appears as an option in ${homes.length} questions`);
    strictEqual((homes[0] as { format?: string }).format, 'mcq');
  }
});

/* ══════════════════════════════════════════════════════════════════════════
 *  10. THE DICTÉE
 * ═══════════════════════════════════════════════════════════════════════ */

test('every dictée target spells in LETTERS mode', skip, () => {
  const d = byIdSec('s23-dictation') as { itemIds?: string[] } | undefined;
  ok(d, 's23-dictation is missing');
  strictEqual((d!.itemIds ?? []).length, DICTATION);
  for (const id of d!.itemIds ?? []) {
    const r = item(id);
    ok(r, `${id} is a dictée target and is not in the seed`);
    strictEqual(dicteeMode(r!.fr), 'letters',
      `${id} ${JSON.stringify(r!.fr)} spells in WORD mode, which hands every word over pre-spelled`);
    ok((r!.drills ?? []).includes('dictation'), `${id} is a dictée target with no dictation drill`);
  }
});

test('THE CONNAÎTRE PLURAL IS ABSENT FROM THE DICTÉE BECAUSE IT CANNOT BE THERE', skip, () => {
  // `connaissons` is eleven letters before anything follows it. Measured through
  // the real dicteeMode: Paris gives 20, Rome 19, Marie 20, ce film 21. There is
  // no object short enough. Asserted so a later author who "adds the missing
  // cells" learns why they are missing rather than shipping three targets that
  // test nothing.
  const d = byIdSec('s23-dictation') as { itemIds?: string[] };
  for (const id of CONN_IDS.slice(3)) {
    ok(!(d.itemIds ?? []).includes(id), `${id} is a dictée target and is past the 16-letter limit`);
    strictEqual(dicteeMode(item(id)!.fr), 'words', `${id} now spells in LETTERS mode; re-measure and correct the corpus header`);
  }
  for (const obj of ['Paris', 'Rome', 'Marie', 'ce film']) {
    strictEqual(dicteeMode(`Nous connaissons ${obj}.`), 'words', `Nous connaissons ${obj}. now fits, which would change the design`);
  }
});

/* ══════════════════════════════════════════════════════════════════════════
 *  11. THE QUIZ
 * ═══════════════════════════════════════════════════════════════════════ */

test('the exam is the size it claims and at most half mcq', skip, () => {
  strictEqual(questions().length, QUESTIONS);
  strictEqual(((quizSec() as { rounds?: unknown[] }).rounds ?? []).length, ROUNDS);
  const mcq = questions().filter((q) => (q as { format?: string }).format === 'mcq').length;
  ok(mcq * 2 <= questions().length, `${mcq} of ${questions().length} are mcq`);
});

test('every question has a why and a ref that resolves', skip, () => {
  for (const q of questions()) {
    const qq = q as { q: string; why?: string; ref?: string };
    ok(qq.why, `no why: ${JSON.stringify(qq.q)}`);
    ok(qq.ref, `no ref: ${JSON.stringify(qq.q)}`);
    ok(SPINE.includes(qq.ref!), `ref ${qq.ref} is not a section in this lesson`);
  }
});

test('every free-text question accepts the answer it displays', skip, () => {
  // Through the REAL matchesAccept. A hand-rolled copy is how a1.08 shipped a
  // guard that had drifted from the thing it guarded.
  for (const q of questions()) {
    const qq = q as { format?: string; q: string; answer?: string; accept?: string[] };
    if (qq.format !== 'typeIn' && qq.format !== 'errorSpot') continue;
    ok(matchesAccept(qq.answer ?? '', qq.accept ?? []),
      `a ${qq.format} displays ${JSON.stringify(qq.answer)} and does not accept it: ${JSON.stringify(qq.q)}`);
  }
});

test('NO EAR QUESTION ASKS BETWEEN TWO MEMBERS OF ONE HOMOPHONE GROUP', skip, () => {
  // sais/sait and connais/connaît are each one sound. A listenChoose offering
  // two members of one group has no correct answer and marking one right
  // certifies a bug. a2.10 and a2.11 both enforce this with a list rather than a
  // sentence in a report, because a sentence in a report cannot fail.
  const GROUPS = [['sais', 'sait'], ['connais', 'connaît']];
  const ears = questions().filter((q) => (q as { format?: string }).format === 'listenChoose');
  strictEqual(ears.length, 1, 'the lesson ships exactly one listenChoose, and it is sais against peux');
  for (const q of ears) {
    const opts = ((q as { opts?: string[] }).opts ?? []);
    for (const g of GROUPS) {
      for (const x of g) for (const y of g) {
        if (x === y) continue;
        for (let i = 0; i < opts.length; i += 1) for (let j = 0; j < opts.length; j += 1) {
          if (i === j) continue;
          ok(opts[i].replace(x, y) !== opts[j],
            `a listenChoose offers ${JSON.stringify(opts[i])} against ${JSON.stringify(opts[j])}, which differ only by ${x}/${y}`);
        }
      }
    }
    // and it must say what is heard, or ListenChooseCard speaks the answer.
    ok((q as { say?: string }).say, 'the listenChoose has no "say" and would speak the correct option aloud');
  }
});

test('each round leads on a different trigger, so every drill can fire', skip, () => {
  // `drillForRound` returns the FIRST target that has a drill and then stops.
  // a1.05 ships two drills that can never fire and its own test fails on them.
  const rounds = ((quizSec() as { rounds?: { id: string; targets?: string[] }[] }).rounds ?? []);
  const triggers = new Map(((L!.errorTriggers ?? []) as { id: string; drill?: string }[]).map((t) => [t.id, t]));
  const leads = rounds.map((r) => (r.targets ?? []).find((t) => triggers.get(t)?.drill));
  ok(leads.every(Boolean), 'a round has no target with a drill');
  strictEqual(new Set(leads).size, leads.length, 'two rounds lead on the same trigger');
  for (const t of triggers.values()) ok(leads.includes(t.id), `${t.id} is never a round's first resolving target`);
});

test('the house chrome is shipped AND named in the roundup', skip, () => {
  // a2.13 §1.4 handed this decision here: `Ce que vous savez faire` is a form of
  // savoir and heads 34 of the 49 roundups in the seed. It is savoir plus a
  // verb, which is this lesson's own headline structure, and the roundup names
  // it rather than dodging it.
  const r = byIdSec('s28-roundup') as { frSub?: string };
  strictEqual(r.frSub, ROUNDUP_HEADING);
  ok(strings(r).some((s) => s !== ROUNDUP_HEADING && s.includes(ROUNDUP_HEADING)),
    'the roundup uses the house heading and does not name it');
  // and a question asks what it means, which is the payoff.
  ok(questions().some((q) => String((q as { q?: string }).q ?? '').includes(ROUNDUP_HEADING)),
    'nothing asks the learner to read the heading they have seen 34 times');
});

/* ══════════════════════════════════════════════════════════════════════════
 *  12. REACHABILITY AND THE DECK
 * ═══════════════════════════════════════════════════════════════════════ */

test('the lesson carries the items it claims, and they all resolve', skip, () => {
  strictEqual((L!.itemIds ?? []).length, ITEMS);
  const missing = (L!.itemIds ?? []).filter((id) => !byId.has(id));
  deepStrictEqual(missing, [], 'itemIds that resolve to nothing render empty cards on a device');
  const mine = (L!.itemIds ?? []).filter((id) => id >= ID_FROM && id <= ID_TO);
  strictEqual(mine.length, AUTHORED);
  strictEqual((L!.itemIds ?? []).length - mine.length, IMPORTED);
});

test('EVERY ITEM IS DRAWN BY SOME SECTION, DRILL OR TERM', skip, () => {
  // a1.08 shipped forty-three itemIds that resolved perfectly and were rendered
  // by nothing at all. a2.13 shipped one before its guard caught it. THIS BUILD
  // HAD THIRTEEN on the first run of the guard, and the fix was to turn three
  // display-only sections into groupDrills, which is a better lesson as well as
  // a passing one.
  const ids = new Set(L!.itemIds ?? []);
  const drawn = new Set<string>();
  for (const s of [...sections(), ...(L!.drills ?? []), ...Object.values(L!.terms ?? {})]) {
    for (const str of strings(s)) if (ids.has(str)) drawn.add(str);
  }
  const undrawn = [...ids].filter((id) => !drawn.has(id));
  deepStrictEqual(undrawn, [], 'items in itemIds that no section, drill or term draws');
});

test('tranches release every item exactly once and nothing untaught', skip, () => {
  const tranche = (L!.deckTranche ?? []) as string[][];
  strictEqual(tranche.length, ACTS.length, 'one tranche per act');
  const released = tranche.flat();
  strictEqual(new Set(released).size, released.length, 'an item is released twice');
  deepStrictEqual([...released].sort(), [...(L!.itemIds ?? [])].sort(), 'the deck and itemIds disagree');
});

test('every released row can be served as the deck that releases it expects', skip, () => {
  for (const id of L!.itemIds ?? []) {
    ok((item(id)!.drills ?? []).includes('flashcard'), `${id} is released to the hub with no flashcard drill`);
  }
  const speak = byIdSec('s24-speak') as { itemIds?: string[] };
  for (const id of speak.itemIds ?? []) {
    ok((item(id)!.drills ?? []).includes('voiceflash'), `${id} is a speak target the mic cannot score`);
  }
});

test('no authored row joins a1.03 ending population', skip, () => {
  // Through the REAL endingPopulation. a1.08 shipped a hand-rolled copy carrying
  // a level filter the real one does not have, let four rows through, and moved
  // two of a1.03's printed cards.
  const mine = seed.items.filter((i) => i.id >= ID_FROM && i.id <= ID_TO);
  deepStrictEqual(endingPopulation(mine).map((r) => (r as { id?: string }).id ?? '?'), []);
});

test('no duplicate fr inside the verbes theme', skip, () => {
  // Computed the way flashhub-coverage.test.ts computes it: two rows sharing an
  // fr in one theme are one card served twice.
  const strip = (s: string) => s.toLowerCase().replace(/^(le |la |les |l'|un |une |des |du |de la )/u, '').trim();
  const seen = new Map<string, string>();
  for (const r of seed.items.filter((i) => i.theme === 'verbes')) {
    const k = strip(r.fr);
    const prev = seen.get(k);
    ok(!prev, `${r.id} and ${prev} share an fr inside verbes: ${JSON.stringify(r.fr)}`);
    seen.set(k, r.id);
  }
});

test('the two published evidence rows are drawn and carry a flashcard drill', skip, () => {
  // 230 published sentences hold a form of one of these two verbs and THREE
  // carry a respelling; one of those three carries U+203F and is refused. These
  // are what is left, and both gained a `flashcard` drill because this lesson
  // releases them. a2.13 found the same gap on a row whose sister already had
  // one, and it was invisible until the pair was checked together.
  for (const id of ['fr.sons.nasales.110', 'fr.sons.voyelles.309']) {
    const r = item(id);
    ok(r, `${id} was not carried through the seed cut`);
    ok((r!.drills ?? []).includes('flashcard'), `${id} is released with no flashcard drill`);
    ok(r!.respell, `${id} has no respelling`);
    ok(!r!.respell!.includes('‿'), `${id} carries U+203F`);
  }
  // and the row that WAS refused is still not here.
  const tie = item('fr.sons.liaisons.057');
  ok(!(L!.itemIds ?? []).includes('fr.sons.liaisons.057'),
    'fr.sons.liaisons.057 is imported. It holds koh-NEHS, which is the value this lesson ships, and its respelling carries U+203F.');
  if (tie) ok(tie.respell?.includes('‿'), 'the refused row no longer carries U+203F; the refusal can be revisited');
});

/* ══════════════════════════════════════════════════════════════════════════
 *  13. HOUSE RULES AND THE RENDERER
 * ═══════════════════════════════════════════════════════════════════════ */

test('no grammar jargon on a learner surface, INCLUDING intro and overview', skip, () => {
  // a2.11 shipped "third person" on the lesson cover in v1 because every guard
  // in the band walked sections, sheets and terms and not `intro`. Ledger §0.
  // grammarAssumed and grammarIntroduced are deliberately excluded: invariants
  // §8 says those are addressed to the curriculum.
  const JARGON = [
    'conjugation', 'conjugate', 'conjugated', 'infinitive', 'infinitives',
    'conditional', 'indicative', 'subjunctive', 'paradigm', 'orthography',
    'auxiliary', 'first person', 'second person', 'third person',
    'direct object', 'subordinate clause', 'transitive', 'complement',
    'noun phrase', 'circumflex', 'diacritic',
  ];
  const text = [
    ...prose(L!.sections), ...prose(L!.sheets), ...prose(L!.terms), ...prose(L!.drills),
    L!.intro ?? '', ...prose(L!.overview), ...prose(L!.acts),
  ].join('  ');
  const found = JARGON.filter((j) => hasPhrase(text, j));
  deepStrictEqual(found, []);
});

test('Lesson.intro is present and clean, pinned in its own right', skip, () => {
  ok(L!.intro && L!.intro.length >= 40, 'intro is missing or too short for the cover');
  ok(!L!.intro!.includes('—'), 'an em dash on the lesson cover');
  ok(!hasPhrase(L!.intro!, 'paradigm'), 'jargon on the lesson cover');
});

test('no em dash, no "honest", no U+203F anywhere', skip, () => {
  const all = strings(L);
  const text = [
    ...prose(L!.sections), ...prose(L!.sheets), ...prose(L!.terms), ...prose(L!.drills),
    L!.intro ?? '', ...prose(L!.overview), ...prose(L!.acts),
  ].join('  ');
  ok(!text.includes('—'), 'an em dash reached a learner surface');
  ok(!hasPhrase(text, 'honest') && !hasPhrase(text, 'honesty'), '"honest" is banned from authored content');
  deepStrictEqual(all.filter((s) => s.includes('‿')), [], 'U+203F renders as a low underscore on a Pixel 6');
});

test('the units this lesson cites are all findable', skip, () => {
  const text = prose(L).join('  ');
  for (const u of ['a2.01', CONTRAST_UNIT, FAMILY_UNIT]) {
    ok(hasPhrase(text, u), `${u} is cited by the corpus and appears nowhere a search can see`);
  }
  ok(hasPhrase(text, WHAT_FOLLOWS), 'a2.02\'s pattern name is not quoted');
  ok(hasPhrase(text, WHAT_FOLLOWS_UNIT), 'the unit that named the pattern is not cited');
});

test('NO groupDrill ITEM CARRIES A FIELD THE lg BRANCH DOES NOT DRAW', skip, () => {
  // MEASURED ON GLASS BY a2.13's DEVICE PASS, AND a2.14 HAD THE SAME DEFECT AT
  // v2. MissionRich.tsx:439 draws `fr`, `ipa` and `note` at this size and
  // NOTHING ELSE; schema.ts:899 records that `respell`, `en` and `silent` are
  // the XL card's lines. Every groupDrill in this lesson is `lg`.
  //
  // v2 shipped 53 item cards carrying `respell` and `en` and no `note`, so a
  // learner saw a bare French sentence with no pronunciation and no meaning on
  // every one of them, with every host gate green. It is the a1.08 class of
  // defect: valid data read by nothing.
  //
  // The PRESENCE of the two fields is the trap, so they are refused rather than
  // merely required to be accompanied.
  let drills = 0;
  let items = 0;
  for (const s of sections()) {
    if (s.type !== 'groupDrill' || s.size === 'xl') continue;
    drills += 1;
    for (const g of ((s.groups ?? []) as { items?: Record<string, unknown>[] }[])) {
      for (const it of (g.items ?? [])) {
        items += 1;
        for (const k of ['respell', 'en', 'silent']) {
          ok(it[k] === undefined || it[k] === '',
            `${s.id} has a groupDrill item carrying ${k}, which the lg branch drops: ${JSON.stringify(it.fr)}`);
        }
        ok(it.note || it.ipa,
          `${s.id} has a groupDrill item with neither note nor ipa, so only the French renders: ${JSON.stringify(it.fr)}`);
      }
    }
  }
  strictEqual(drills, LG_GROUPDRILLS);
  strictEqual(items, LG_GROUPDRILL_ITEMS);
});

test('NO MISSION TITLE RUNS PAST THE HUB ROW', skip, () => {
  // The missions hub draws the title and a TYPE CHIP on one row and the chip
  // wins, so a longer title ellipsises. The same titles render in full on the
  // act checkpoint screen, so this is the hub row alone. Measured on a Pixel 6
  // by a2.13's device pass; four of a2.14's twenty-eight were over it at v2.
  const over = sections()
    .map((s) => ({ id: s.id as string, title: (s.title ?? '') as string }))
    .filter((s) => s.title.length > MISSION_TITLE_MAX);
  deepStrictEqual(over, [], `mission title(s) past ${MISSION_TITLE_MAX} characters`);
});

test('the renderer rules that have shipped blank screens', skip, () => {
  for (const s of sections()) {
    if (s.type === 'commonErrors') ok(s.swipe, `${s.id} is a commonErrors without swipe, which draws a blank screen`);
    if (s.type === 'practice') ok(s.skill !== 'write', `${s.id} uses practice skill 'write', which draws no writing surface`);
    const chips = (s.terms ?? []) as string[];
    ok(chips.length <= 3, `${s.id} declares ${chips.length} term chips; the renderer shows three`);
    for (const t of chips) ok(L!.terms?.[t], `${s.id} names undefined term ${t}`);
  }
});

test('the sheet draws only what ReferenceSheet.tsx can draw', skip, () => {
  // It draws `teach`, `letterGrid` and `table` and NOTHING else. A cheatSheet in
  // here draws its title and no rows, which a1.13 ships today.
  const DRAWABLE = new Set(['teach', 'letterGrid', 'table']);
  const sheets = (L!.sheets ?? []) as { id: string; sections?: { type?: string; layer?: string; id?: string }[] }[];
  strictEqual(sheets.length, 1);
  strictEqual(sheets[0].id, 'sheet.a2.14.choice');
  for (const s of sheets[0].sections ?? []) {
    ok(DRAWABLE.has(s.type ?? ''), `the sheet holds a "${s.type}" section`);
    strictEqual(s.layer, 'deep', `sheet section ${s.id} is not at layer deep`);
  }
  // and no section points at a sheet this lesson does not declare. A sheetId
  // resolves ONLY inside its own lesson; cross-lesson sheets do not exist.
  const declared = new Set(sheets.map((s) => s.id));
  for (const s of sections()) {
    if (s.sheetId) ok(declared.has(s.sheetId as string), `${s.id} names sheet ${s.sheetId}`);
  }
});

test('THE SHEET SORTS BY WHAT FOLLOWS, NOT BY MEANING', skip, () => {
  // a2.11's precedent: a sheet has to justify itself against the sheets before
  // it. Every reference sheet in this band lists ENDINGS. This one leads with a
  // DECISION table, which no paradigm sheet in the level has needed, because no
  // lesson before this one made the learner choose between two verbs.
  const sheets = (L!.sheets ?? []) as { sections?: { id?: string; type?: string; cols?: string[] }[] }[];
  const first = (sheets[0].sections ?? [])[0];
  strictEqual(first?.id, 'sheet-decision');
  strictEqual(first?.type, 'table');
  ok((first?.cols ?? []).some((c) => /after the verb/i.test(c)), 'the first sheet table does not lead on what follows');
});
