// a2.15.l1 "Irréguliers 5 : prendre, mettre, battre": the assertions that keep
// this lesson true.
//
// Modelled on a2-14-savoir-connaitre.test.ts. Everything here runs the REAL app
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
// ── What this file is actually guarding ────────────────────────────────────
//
// Three paradigms are worth having only if they buy verbs nobody taught, so the
// failure mode is not "a form is wrong". It is:
//
//   THE UNSEEN COMPOUNDS GETTING A CARD. `reprendre` and `admettre` may appear
//   in exactly two sections, and in no corpus row, no itemId, no deck tranche
//   and no term. A card for either deletes the only mission that distinguishes
//   this lesson from a table, and the exam questions that follow become recall.
//   THE DOUBLING PAIR BEING SPLIT. « nous prenons » and « ils prennent » belong
//   on one screen, adjacent, with a2.09 named in the same section. Separated,
//   the one genuinely hard cell in eighteen becomes a fact on a list.
//   battre BEING PADDED TO PARITY. It gets two missions, seven rows and four
//   paradigm cells where prendre gets six, fifteen and six, and the reason is
//   measured: not one published row in this corpus puts battre into any of its
//   six forms. A later author "balancing" the three breaks this file.
//   pris AND mis ARRIVING EARLY. They are a2.20's and they are among its most
//   important; 198 published rows hold `pris` and 81 hold `mis`, so the refusal
//   has to be a guard rather than an intention.
//   THE IDIOMS BEING TAKEN. The four best respelled prendre sentences in the
//   whole corpus are about a train, a bus, a metro and a bicycle, and every one
//   of them is a2.27's opening. None is here.
//   THE RESPELLINGS BEING "CORRECTED". Five carried rows are repaired and THREE
//   OF THE FIVE ARE INVISIBLE to hasPlainNasalFor in both states, so the shared
//   checker cannot guard them and the values are asserted by name.
//   A NASAL GOING BLIND. Twenty-nine superscripts, twenty-seven seen and TWO
//   invisible, both the same token in `réponse`, and both asserted by name.
//   THE DICTÉE LOSING THE THING IT CAN TEST. fold() cannot test an accent and
//   CAN test a doubled letter, so the prenons/prennent pair is in the dictée on
//   purpose. And no target may hold U+0153, which letterCount() and the letter
//   bank both strip.
//   listenChoose ARRIVING ON A HOMOPHONE. prends/prend, mets/met and bats/bat
//   are each one sound. The two this lesson ships are singular against plural,
//   which is audible on all three verbs.
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
import { fold, matchesAccept } from './answer.logic.ts';
import { namesUnitLabel, unitLabel } from './unit-label.ts';

const here = dirname(fileURLToPath(import.meta.url));
const seed = JSON.parse(readFileSync(resolve(here, 'seed.json'), 'utf8')) as {
  version: number; items: Item[]; lessons: Lesson[];
  units: { id: string; title?: string; sub?: string; canDo?: string; seq?: string | number; lessonIds?: string[]; prereqUnitIds?: string[] }[];
};

const L = seed.lessons.find((l) => l.id === 'a2.15.l1');
const noLesson = !L;
const byId = new Map(seed.items.map((i) => [i.id, i] as const));

/* ─── The shape of the lesson ──────────────────────────────────────────── */

const SPINE = [
  's01-scene', 's02-goals', 's03-families',
  's04-grid', 's05-doubled', 's06-prendre', 's07-mettre', 's08-battre',
  's09-free', 's10-identity', 's11-apprendre', 's12-remettre', 's13-which', 's14-combattre', 's15-evidence', 's16-listening',
  's17-notvendre', 's18-trap', 's19-errors',
  's20-scenario', 's21-build', 's22-dictation', 's23-speak', 's24-review',
  's25-progress', 's26-unseen', 's27-quiz', 's28-roundup',
];

/** THE FAMILY ACT IS THE HEAVIEST, ALONE, AND THE PARADIGM ACT IS SMALLER.
 *  Five missions on eighteen cells, eight on what the eighteen cells buy. If
 *  that ever inverts, the forms have taken the lesson over, which is the failure
 *  doctrine §B.5 exists to prevent. */
const ACTS = [
  { id: 'act1', n: 3 },
  { id: 'act2', n: 5 },
  { id: 'act3', n: 8 },
  { id: 'act4', n: 3 },
  { id: 'act5', n: 5 },
  { id: 'act6', n: 4 },
];
const PARADIGM_ACT = 'act2';
const OWNS_ACT = 'act3';

/** THE REFRAME, VERBATIM. A physical instruction rather than a fact, because
 *  doctrine §B.4 asks for something the learner can run in the half-second
 *  between subject and verb, and this is literally what they do when an unknown
 *  compound arrives. Ten words, so it fits an xl section's 12-word cap. */
const REFRAME = 'Cover the front of the verb. Build what is left.';
/** Asserted against explicit constants, never figures derived from the lesson.
 *
 *  THE BATCH COUNTS 16 AND THIS FILE COUNTS 17, AND BOTH ARE RIGHT. The batch
 *  walks `prose()`, which drops notation keys including `sub`; this file walks
 *  every string in the lesson. The difference is the one occurrence in a card's
 *  `sub`. Two walks, two figures, and neither is derived from the other.
 *
 *  THAT SAME GAP COST THIS LESSON A VERSION. `sub` on a cardDeck card is prose,
 *  and v1 put the banned word "honest" in one: every guard in the batch and the
 *  merge was green and sons-alphabet.test.ts, which reads the seed and walks
 *  every string, went red the moment the merge landed. See the house-rules
 *  section at the foot of this file. */
const REFRAME_SECTIONS = 10;
const REFRAME_APPEARANCES = 17;
/** What the learner does with the reframe, carried alongside it. */
const THE_MOVE = 'A verb you have never seen? Take the front off it, and what is left is one you built ten minutes ago.';

/** The units this lesson names, and why each one is named.
 *  a2.09 owns the doubling principle. a2.11 named these three and refused to
 *  build them. a2.10 met an audible plural first. a2.02 built a family without
 *  saying it was one. a2.20 takes the past forms and a2.07/a2.27 take the
 *  idioms. */
const STEM_UNIT = 'a2.09';
const A211_UNIT = 'a2.11';
const EAR_UNIT = 'a2.10';
const FAMILY_SEEN_AT = 'a2.02';
const RESERVED_FOR = 'a2.20';
const NEIGHBOUR_UNITS = ['a2.07', 'a2.27'];

/* ─── The eighteen cells, written out ──────────────────────────────────── */

const PERSONS = ['je', 'tu', 'il · elle · on', 'nous', 'vous', 'ils · elles'];
const PRENDRE_FORMS = ['prends', 'prends', 'prend', 'prenons', 'prenez', 'prennent'];
const METTRE_FORMS = ['mets', 'mets', 'met', 'mettons', 'mettez', 'mettent'];
const BATTRE_FORMS = ['bats', 'bats', 'bat', 'battons', 'battez', 'battent'];
const VERBS = ['prendre', 'mettre', 'battre'] as const;
const FORMS: Record<string, string[]> = { prendre: PRENDRE_FORMS, mettre: METTRE_FORMS, battre: BATTRE_FORMS };

/** THE STEMS, AND THE WHOLE LESSON. prendre keeps three where the other two
 *  keep two, and the third one arrives in the cell whose ending is silent. */
const STEMS: Record<string, string[]> = {
  prendre: ['prend-', 'pren-', 'prenn-'],
  mettre: ['met-', 'mett-'],
  battre: ['bat-', 'batt-'],
};

/** ONE FRAME ACROSS THE TWO HEAD VERBS, AND THIS IS THE INVERSE OF a2.14's
 *  CHECK. a2.14 asserts its two columns use DIFFERENT frames because the
 *  complement was the thing it taught. Here the stem is the teaching and the
 *  complement is noise, so the back of the sentence must not move. battre cannot
 *  join in, because you do not beat a key. */
const SHARED_FRAME = 'la clé';
const BATTRE_FRAME = 'Paul';

const PRENDRE_IDS = ['fr.a2.verbes.424', 'fr.a2.verbes.425', 'fr.a2.verbes.426', 'fr.a2.verbes.427', 'fr.a2.verbes.428', 'fr.a2.verbes.429'];
const METTRE_IDS = ['fr.a2.verbes.430', 'fr.a2.verbes.431', 'fr.a2.verbes.432', 'fr.a2.verbes.433', 'fr.a2.verbes.434', 'fr.a2.verbes.435'];
/** FOUR AND NOT SIX. The two missing are `tu bats` and `vous battez`, which the
 *  mettre shape already gives away, and battre is the small one on purpose. */
const BATTRE_IDS = ['fr.a2.verbes.436', 'fr.a2.verbes.437', 'fr.a2.verbes.438', 'fr.a2.verbes.439'];
const BATTRE_PERSONS = [0, 2, 3, 5];

/** THE THREE FAMILIES, and the compounds this lesson NAMES. */
const FAMILIES: Record<string, string[]> = {
  prendre: ['apprendre', 'comprendre', 'surprendre'],
  mettre: ['permettre', 'promettre', 'remettre'],
  battre: ['combattre', 'débattre', 'abattre'],
};

/** THE TWO THE LESSON NEVER SHOWS AND THE EXAM DEMANDS, and every form of them.
 *  They may appear in exactly two sections and nowhere else in the lesson. */
const UNSEEN = ['reprendre', 'admettre'];
const UNSEEN_FORMS = [
  'reprendre', 'reprends', 'reprend', 'reprenons', 'reprenez', 'reprennent',
  'admettre', 'admets', 'admet', 'admettons', 'admettez', 'admettent',
];
const UNSEEN_HOMES = ['s26-unseen', 's27-quiz'];
/** Four typeIn and one errorSpot, on four distinct cells. */
const UNSEEN_PRODUCTIONS = 5;

/** THE THREE INFINITIVES THIS BUILD AUTHORED. Corrections §2 says five A2 builds
 *  in a row authored none, and this is the first that had to. `battre` is in the
 *  unit title and did not exist at any status in any theme. */
const AUTHORED_INFINITIVES: [string, string][] = [
  ['battre', 'fr.a2.verbes.421'],
  ['combattre', 'fr.a2.verbes.422'],
  ['remettre', 'fr.a2.verbes.423'],
];

/** THE FIVE REPAIRS, BY NAME AND BY VALUE. Three of the five are INVISIBLE to
 *  hasPlainNasalFor in both states — corrections §6's word-internal nasal — so
 *  the shared checker cannot guard them at all and this list is the only guard
 *  they have. The brief said there were four and that all four were invisible. */
const REPAIRS: { id: string; from: string; to: string; visible: boolean }[] = [
  { id: 'fr.sons.verbes-essentiels.012', from: 'PRAHNDR', to: 'PRAHⁿDR', visible: false },
  { id: 'fr.a2.disciplines.051', from: 'a-PRAHNDR', to: 'a-PRAHⁿDR', visible: false },
  { id: 'fr.sons.verbes-essentiels.225', from: 'sür-PRAHNDR', to: 'sür-PRAHⁿDR', visible: false },
  { id: 'fr.sons.verbes-essentiels.030', from: 'kohn-PRAHNDR', to: 'kohⁿ-PRAHⁿDR', visible: true },
  { id: 'fr.a1.transports-quotidiens.041', from: 'PRAHN-druh', to: 'PRAHⁿDR', visible: true },
];
/** The one row carried and repaired and shown on NO screen. Postgres holds the
 *  repair, so the seed has to as well or the two copies disagree on a row
 *  nothing in the suite compares. */
const REPAIR_ONLY = 'fr.a1.transports-quotidiens.041';

/** THE TWO SUPERSCRIPTS THE CHECKER CANNOT SEE, and the token they sit in.
 *  Both are `ray-POHⁿS` in `réponse`: the nasal is followed by a consonant
 *  INSIDE the token, so hasPlainNasalFor never reaches it. */
const BLIND_ROWS = ['fr.a2.verbes.447', 'fr.a2.verbes.448'];
const BLIND_TOKEN = 'ray-POHⁿS';
const SUPERSCRIPTS = 29;
const BLIND = 2;

/** a2.20's, and refused by name because the corpus is full of them. */
const RESERVED = ['pris', 'mis', 'battu', 'appris', 'compris', 'permis', 'promis', 'admis', 'remis', 'surpris'];
/** a2.07's and a2.27's openings. Refused on every production surface. */
const NEIGHBOUR_NOUNS = ['le bus', 'le train', 'le métro', 'le vélo', 'un café', 'le café', 'un thé', 'le thé', 'le taxi'];
/** The form the regular -RE model produces on prendre. a2.11 refused to print it
 *  at all; six missions of paradigm later this lesson prints it once. */
const OVER_GENERALISED = 'ils prendent';

/** MEASURED ON GLASS by a2.13's device pass, corrected by a2.14's: it is a
 *  rendered WIDTH and the character count is an approximation. */
const MISSION_TITLE_MAX = 27;
const GROUPDRILLS = 8;
const GROUPDRILL_ITEMS = 52;

const AUTHORED = 34;
const IMPORTED = 12;
const ITEMS = 46;
const QUESTIONS = 36;
const ROUNDS = 6;
const DICTATION = 11;
const ID_FROM = 'fr.a2.verbes.421';
const ID_TO = 'fr.a2.verbes.454';

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
 *  guard that reads them fires on legitimate content. NOTE that `sub` is NOT a
 *  machine key: on a cardDeck card it is prose, and that is the gap that cost
 *  this lesson a version. */
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
 *  looks exactly like an absence. a2.02 shipped that bug and a2.12 found it. */
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
const mineRows = () => seed.items.filter((i) => i.id >= ID_FROM && i.id <= ID_TO);
const learnerText = () => [
  ...prose(L!.sections), ...prose(L!.sheets), ...prose(L!.terms), ...prose(L!.drills),
  L!.intro ?? '', ...prose(L!.overview), ...prose(L!.acts),
].join('  ');
const displayText = () => [
  ...display(L!.sections), ...display(L!.sheets), ...display(L!.terms), ...display(L!.drills),
  L!.intro ?? '', ...display(L!.overview), ...display(L!.acts),
].join('  ');
const skip = { skip: noLesson ? 'a2.15.l1 is not in the seed' : false };

/* ══════════════════════════════════════════════════════════════════════════
 *  1. THE LESSON EXISTS AND HAS THE SHAPE IT CLAIMS
 * ═══════════════════════════════════════════════════════════════════════ */

test('a2.15.l1 is in the seed', () => {
  ok(L, 'a2.15.l1 is missing from seed.json');
});

test('the unit is what the database says, not what the brief said', skip, () => {
  const u = seed.units.find((x) => x.id === 'a2.15');
  ok(u, 'unit a2.15 is missing');
  // Corrections §1: four A2 briefs in four had title and sub swapped and a sub
  // that is in no database. These are the values the probe returned, and a2.15's
  // corrected brief block matched them, which is a first for this band.
  strictEqual(u!.title, 'Irregular Verbs 5: Prendre, Mettre, Battre');
  strictEqual(u!.sub, 'Irréguliers 5 : prendre, mettre, battre');
  strictEqual(u!.canDo, 'Can conjugate prendre, mettre and battre and recognise their compounds');
  strictEqual(Number(u!.seq), 9);
  ok((u!.lessonIds ?? []).includes('a2.15.l1'), 'the unit does not list its lesson');
  deepStrictEqual(u!.prereqUnitIds ?? [], ['a2.02']);
});

test('the eyebrow the renderer computes matches the stored tag', skip, () => {
  const u = seed.units.find((x) => x.id === 'a2.15')!;
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

test('THE FAMILY ACT IS THE HEAVIEST, ALONE', skip, () => {
  const acts = (L!.acts ?? []) as { id: string; sections: string[] }[];
  const sizes = acts.map((a) => a.sections.length);
  const owns = acts.find((a) => a.id === OWNS_ACT)!.sections.length;
  const max = Math.max(...sizes);
  strictEqual(owns, max, 'the Owns act is not the largest');
  strictEqual(sizes.filter((n) => n === max).length, 1, 'the Owns act ties with another');
});

test('the paradigm act is smaller than the family act', skip, () => {
  // Eighteen cells with a story attached is not a lesson. Doctrine §B.5.
  const acts = (L!.acts ?? []) as { id: string; sections: string[] }[];
  const par = acts.find((a) => a.id === PARADIGM_ACT)!.sections.length;
  const owns = acts.find((a) => a.id === OWNS_ACT)!.sections.length;
  ok(par < owns, `the paradigm act has ${par} missions and the family act ${owns}`);
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
  strictEqual(countPhrase(strings(L).join('\n'), REFRAME), REFRAME_APPEARANCES);
});

test('the reframe is a MOVE the learner makes, not a fact they recall', skip, () => {
  // The brief's candidate was "Learn the head of the family and the rest come
  // free", which is a promise about the payoff and cannot be run mid-sentence.
  // What ships is an instruction, and the instruction is carried too.
  ok(strings(L).some((s) => s.includes(THE_MOVE)), 'the move the reframe turns into is missing');
  ok(REFRAME.split(/\s+/).length <= 12, 'the reframe is past the xl 12-word cap');
  ok(/^cover/i.test(REFRAME), 'the reframe no longer opens on the thing the learner does');
});

/* ══════════════════════════════════════════════════════════════════════════
 *  3. THE FAMILY RULE, WHICH IS THE WHOLE LESSON
 * ═══════════════════════════════════════════════════════════════════════ */

test('EVERY COMPOUND FORM REDUCES TO ITS HEAD VERB, CHARACTER FOR CHARACTER', skip, () => {
  // The one assertion this lesson exists for. Strip the front off a compound and
  // what is left must be the head's form for the same person.
  for (const v of VERBS) {
    for (const compound of FAMILIES[v]) {
      ok(compound.endsWith(v), `${compound} is in the ${v} family and does not end in it`);
      const front = compound.slice(0, compound.length - v.length);
      ok(front.length > 0, `${compound} has nothing in front of it`);
      for (let i = 0; i < 6; i += 1) {
        const built = front + FORMS[v][i];
        strictEqual(built.slice(front.length), FORMS[v][i], `${compound} at person ${i} does not reduce`);
      }
    }
  }
});

test('EACH OF THE THREE HEADS IS TAUGHT WITH AT LEAST TWO COMPOUNDS NAMED', skip, () => {
  // Asserted BY NAME rather than by count, which is what the brief asks for: a
  // count passes on any three words and this does not.
  const text = displayText();
  for (const v of VERBS) {
    ok(hasPhrase(text, v), `the head verb ${v} is never named`);
    const named = FAMILIES[v].filter((c) => hasPhrase(text, c));
    ok(named.length >= 2, `${v} is taught with ${named.length} compound(s) named: ${named.join(', ')}`);
  }
  // and the specific ones, so a swap for three easier words goes red.
  for (const c of ['apprendre', 'comprendre', 'permettre', 'promettre', 'remettre', 'combattre']) {
    ok(hasPhrase(text, c), `${c} is named nowhere`);
  }
});

test('THE IDENTITY GRID PUTS A HEAD VERB AND TWO COMPOUNDS ON EVERY LINE', skip, () => {
  // The brief: "One grid showing a head verb and two of its compounds in the
  // same conjugation, so the identity is visible rather than asserted. Told that
  // compounds follow, the learner believes it; shown three identical rows, they
  // know it."
  const g = byIdSec('s10-identity') as { type?: string; examples?: { fr: string }[] } | undefined;
  ok(g, 's10-identity is missing');
  strictEqual(g!.type, 'examples', 'a table at layer core is a table-in-core density failure');
  strictEqual((g!.examples ?? []).length, 6);
  (g!.examples ?? []).forEach((ex, i) => {
    for (const front of ['', 'ap', 'com']) {
      const form = front + PRENDRE_FORMS[i];
      // `j'apprends` elides and hasPhrase treats the apostrophe as a word
      // character, so the bare form is not findable on the je line.
      ok(hasPhrase(ex.fr, form) || hasPhrase(ex.fr, `j'${form}`),
        `identity line ${i} is missing ${JSON.stringify(form)}: ${JSON.stringify(ex.fr)}`);
    }
  });
});

test('the paradigm grid carries all three verbs on every line', skip, () => {
  const g = byIdSec('s04-grid') as { type?: string; examples?: { fr: string }[] } | undefined;
  ok(g, 's04-grid is missing');
  strictEqual((g!.examples ?? []).length, 6);
  (g!.examples ?? []).forEach((ex, i) => {
    for (const v of VERBS) ok(hasPhrase(ex.fr, FORMS[v][i]), `grid line ${i} is missing ${FORMS[v][i]}`);
  });
});

test('every grid cell on screen is the row the learner is scored on', skip, () => {
  // a2.13 §6.2: changing its paradigm table from veulent to voulent was caught
  // by the batch and the merge and sailed through the test file, because the
  // grid renders from its own table and nothing compared it to the cards.
  PRENDRE_IDS.forEach((id, i) => ok(hasPhrase(item(id)!.fr, PRENDRE_FORMS[i]), `${id} does not carry ${PRENDRE_FORMS[i]}`));
  METTRE_IDS.forEach((id, i) => ok(hasPhrase(item(id)!.fr, METTRE_FORMS[i]), `${id} does not carry ${METTRE_FORMS[i]}`));
  BATTRE_IDS.forEach((id, j) => ok(hasPhrase(item(id)!.fr, BATTRE_FORMS[BATTRE_PERSONS[j]]), `${id} does not carry ${BATTRE_FORMS[BATTRE_PERSONS[j]]}`));
});

test('the two head verbs SHARE a frame and battre does not', skip, () => {
  // THE INVERSE OF a2.14's CHECK, and copying that one here would fail a correct
  // build. a2.14's complement was the teaching, so its two frames had to differ.
  // Here the stem is the teaching and the back of the sentence must not move.
  for (const [ids, frame] of [[PRENDRE_IDS, SHARED_FRAME], [METTRE_IDS, SHARED_FRAME], [BATTRE_IDS, BATTRE_FRAME]] as const) {
    for (const id of ids) {
      const r = item(id);
      ok(r, `${id} is not in the seed`);
      const words = frame.split(/\s+/u).length;
      const tail = r!.fr.replace(/[.!?…]\s*$/u, '').trim().split(/\s+/u).slice(-words).join(' ');
      strictEqual(tail, frame, `${id} does not end on ${frame}: ${JSON.stringify(r!.fr)}`);
    }
  }
  ok(SHARED_FRAME !== BATTRE_FRAME, 'battre shares the frame of the other two; you do not beat a key');
});

/* ══════════════════════════════════════════════════════════════════════════
 *  4. THE DOUBLING, AND THE TWO BACK-REFERENCES
 * ═══════════════════════════════════════════════════════════════════════ */

test('THE DOUBLED PLURAL IS TAUGHT WITH THE SINGLE ONE DIRECTLY ABOVE IT', skip, () => {
  // The brief: "nous prenons and ils prennent belong on one screen, adjacent,
  // with the a2.09 back-reference visible in the same section. THIS IS THE
  // LAYOUT THE TEST MUST ASSERT."
  const d = byIdSec('s05-doubled') as { examples?: { fr: string }[] } | undefined;
  ok(d, 's05-doubled is missing');
  const frs = (d!.examples ?? []).map((e) => e.fr);
  const ia = frs.indexOf(item('fr.a2.verbes.427')!.fr);
  const ib = frs.indexOf(item('fr.a2.verbes.429')!.fr);
  ok(ia >= 0 && ib >= 0, 'one half of the doubling pair is not on the screen');
  strictEqual(ib - ia, 1, `they sit at ${ia} and ${ib}; the single n must be directly above the doubled one`);
  ok(hasPhrase(frs[ia], 'prenons') && hasPhrase(frs[ib], 'prennent'), 'the pair is not one n against two');
});

test('THE a2.09 BACK-REFERENCE IS IN THE SAME SECTION AS THE PAIR', skip, () => {
  // The brief: "Point back at a2.09 by unit id. A learner who sees two lessons
  // connect stops believing French is arbitrary, and this is the clearest
  // connection available in batch 1." An edit that cuts it goes red here.
  const d = byIdSec('s05-doubled');
  ok(namesUnitLabel(prose(d).join('  '), STEM_UNIT), `s05-doubled does not name ${STEM_UNIT}`);
  // and the mechanism is stated, not just the unit number.
  const text = displayText();
  ok(/silent/i.test(text) && namesUnitLabel(text, STEM_UNIT), 'the doubling is not tied to the silent ending anywhere');
});

test('THE a2.11 LOOP IS CLOSED, BY UNIT ID', skip, () => {
  // a2.11 named prendre, mettre and battre on one card, refused to build them,
  // and said where they were taught. This is that place and it says so.
  const n = byIdSec('s17-notvendre');
  ok(n, 's17-notvendre is missing');
  ok(namesUnitLabel(prose(n).join('  '), A211_UNIT), `s17-notvendre does not name ${A211_UNIT}`);
  ok(hasPhrase(displayText(), 'vendre'), 'the regular verb the trap contrasts against is never named');
});

test('the over-generalised form is printed ONCE, where it is rejected', skip, () => {
  // a2.11 refused to print `ils prendent` at all, on the argument that a learner
  // with nothing to overwrite it with keeps it. Six missions of paradigm later
  // that argument no longer applies, and this is the a2.01 `je parles` shape.
  const homes = sections().filter((s) => strings(s).some((x) => /(^|[^a-zà-ÿ])(prendent|prendons|prendez)(?![a-zà-ÿ])/i.test(x)));
  deepStrictEqual(homes.map((s) => s.id), ['s19-errors', 's27-quiz']);
  ok(strings(byIdSec('s19-errors')).some((s) => s.includes(OVER_GENERALISED)),
    's19-errors no longer rejects the form the regular pattern produces');
});

test('the other two verbs keep ONE plural stem and prendre does not', skip, () => {
  for (const v of VERBS) {
    const plural = [3, 4, 5].map((i) => FORMS[v][i].replace(/(ons|ez|ent)$/, ''));
    const distinct = new Set(plural).size;
    if (v === 'prendre') strictEqual(distinct, 2, 'prendre no longer changes stem inside the plural');
    else strictEqual(distinct, 1, `${v} no longer keeps one plural stem, so it has stopped being the control`);
    strictEqual(STEMS[v].length, v === 'prendre' ? 3 : 2);
  }
  // and the doubling is in exactly one cell of one verb.
  strictEqual(PRENDRE_FORMS.filter((f) => /(\w)\1/.test(f)).length, 1);
  strictEqual(PRENDRE_FORMS.findIndex((f) => /(\w)\1/.test(f)), 5);
});

/* ══════════════════════════════════════════════════════════════════════════
 *  5. THE MISSION THE LESSON EXISTS FOR
 * ═══════════════════════════════════════════════════════════════════════ */

test('THE UNSEEN COMPOUNDS APPEAR IN EXACTLY TWO SECTIONS', skip, () => {
  // Doctrine §B.1: "a pattern that generalises to items the lesson never taught
  // is the only thing that distinguishes A2 from a table."
  const shape = new RegExp(`(^|[^a-zà-ÿ])(${UNSEEN_FORMS.join('|')})(?![a-zà-ÿ])`, 'i');
  const homes = sections().filter((s) => strings(s).some((x) => shape.test(x))).map((s) => s.id);
  deepStrictEqual(homes, UNSEEN_HOMES);
});

test('AND THEY ARE IN NO ROW, NO itemId, NO DECK AND NO TERM', skip, () => {
  const shape = new RegExp(`(^|[^a-zà-ÿ])(${UNSEEN_FORMS.join('|')})(?![a-zà-ÿ])`, 'i');
  for (const r of mineRows()) ok(!shape.test(r.fr), `${r.id} authors ${JSON.stringify(r.fr)}, which the exam gives cold`);
  for (const id of L!.itemIds ?? []) {
    const r = item(id);
    ok(!r || !shape.test(r.fr), `${id} is in itemIds and carries an unseen compound`);
  }
  for (const tranche of (L!.deckTranche ?? []) as string[][]) {
    for (const id of tranche) {
      const r = item(id);
      ok(!r || !shape.test(r.fr), `${id} is released into a deck and carries an unseen compound`);
    }
  }
  ok(!shape.test(strings(L!.terms ?? {}).join('  ')), 'a term names one of the two the exam gives cold');
  // `admettre` EXISTS in the corpus as fr.b1.verbes.086 and is deliberately not
  // imported: a card for it would delete this mission.
  ok(!(L!.itemIds ?? []).includes('fr.b1.verbes.086'), 'the lesson imports admettre, which the exam gives cold');
});

test('THE EXAM MAKES THE LEARNER PRODUCE THEM, IN FREE TEXT', skip, () => {
  // A groupDrill `check` is an mcq, so the MISSION cannot be the production
  // surface here and the exam is. Four typeIn and one errorSpot, on four
  // distinct cells: one memorised answer would clear a count of one.
  const shape = new RegExp(`(^|[^a-zà-ÿ])(${UNSEEN_FORMS.join('|')})(?![a-zà-ÿ])`, 'i');
  const produced = questions().filter((q) => {
    const qq = q as { format?: string; answer?: string };
    return (qq.format === 'typeIn' || qq.format === 'errorSpot') && shape.test(String(qq.answer ?? ''));
  });
  strictEqual(produced.length, UNSEEN_PRODUCTIONS, 'the number of free-text productions of an unseen compound has moved');
  const cells = new Set(produced.map((q) => String((q as { answer?: string }).answer ?? '').match(shape)![2].toLowerCase()));
  ok(cells.size >= 4, `${cells.size} distinct unseen forms are produced; four is what proves a pattern rather than a memory`);
  for (const q of produced) {
    const qq = q as { answer?: string; accept?: string[] };
    ok(matchesAccept(qq.answer ?? '', qq.accept ?? []), `a production question displays ${JSON.stringify(qq.answer)} and does not accept it`);
  }
});

test('BOTH unseen compounds are in the cold mission, not just one', skip, () => {
  // Found by the mutation harness: dropping `reprendre` out of ONE of the three
  // checks left the other two naming it, so the homes assertion was unchanged
  // and the claim was still true. a2.14 §8: a claim made in three strings needs
  // three anchors, and a guard on the SET rather than on the section is what
  // makes one anchor enough.
  const cold = strings(byIdSec('s26-unseen')).join('  ');
  for (const u of UNSEEN) ok(namesUnitLabel(cold, u), `s26-unseen does not name ${u}; one cold verb is an example and two is a pattern`);
});

test('THE MECHANISM IS STATED, NOT JUST THE UNIT NUMBER', skip, () => {
  // Also found by the mutation harness: cutting a2.09 out of the sentence that
  // explains the doubling left the section's own `say` still naming the unit, so
  // the by-id check passed on a lesson that no longer said WHY. The sentence is
  // asserted verbatim, and it has to carry the unit id itself.
  // BUILT, NOT TYPED. The sentence names a2.09 by its lesson label now, and it
  // was trimmed at the same time because the label is longer than the id and the
  // card it sits on runs to the 45-word core cap.
  const PRINCIPLE = `${unitLabel('a2.09', 'a2').replace(/^l/, 'L')} doubled the l of appeler where the ending went silent. prennent doubles its n for the same reason: the -ent makes no sound, so the stem must end in one.`;
  ok(strings(L).some((x) => x.includes(PRINCIPLE)),
    'the sentence tying the doubled n to the silent ending appears nowhere. Naming a2.09 without it is a citation, not a connection.');
  ok(namesUnitLabel(PRINCIPLE, STEM_UNIT), 'the principle sentence no longer names the unit it comes from');
});

test('the unseen mission is the LAST one before the exam', skip, () => {
  // The brief asks for it by name. The progress card sits before it, not after.
  strictEqual(SPINE.indexOf('s27-quiz') - SPINE.indexOf('s26-unseen'), 1);
  const u = byIdSec('s26-unseen') as { type?: string; groups?: unknown[] };
  strictEqual(u.type, 'groupDrill');
  ok((u.groups ?? []).length >= 3, 'the cold mission has fewer than three groups');
});

/* ══════════════════════════════════════════════════════════════════════════
 *  6. battre IS THE SMALL ONE, AND IT STAYS SMALL
 * ═══════════════════════════════════════════════════════════════════════ */

test('BATTRE HAS STRICTLY FEWER MISSIONS THAN PRENDRE', skip, () => {
  // The brief: "Do not pad battre to make the three verbs look equal. A lesson
  // that spends equal time on an unequal set is teaching the learner that
  // frequency does not matter, which is false and expensive."
  //
  // Derived rather than declared: a mission belongs to one verb when it names
  // that verb's forms and neither of the others'. Sections that carry all three
  // — the grid, the sorting table, the exam, the roundup — belong to none.
  const shapeFor = (v: string) => {
    // `bat` and `bats` are ordinary English words and every instruction line in
    // this lesson is English, so the battre shape uses the doubled-t forms and
    // the infinitives. a2.11 recorded the same exclusion.
    const words = v === 'battre'
      ? ['battre', 'combattre', 'débattre', 'abattre', 'battons', 'battez', 'battent', 'combattent']
      : [v, ...FAMILIES[v], ...FORMS[v], ...FAMILIES[v].flatMap((c) => FORMS[v].map((f) => c.slice(0, c.length - v.length) + f))];
    return new RegExp(`(^|[^a-zà-ÿ])(${words.join('|')})(?![a-zà-ÿ])`, 'i');
  };
  const only = (v: string) => sections().filter((s) => {
    const txt = strings(s);
    const mine = txt.some((x) => shapeFor(v).test(x));
    const others = VERBS.filter((o) => o !== v).some((o) => txt.some((x) => shapeFor(o).test(x)));
    return mine && !others;
  }).map((s) => s.id as string);

  const battreOnly = only('battre');
  const prendreOnly = only('prendre');
  ok(battreOnly.length < prendreOnly.length,
    `battre owns ${battreOnly.length} mission(s) of its own and prendre ${prendreOnly.length}`);
  ok(prendreOnly.length >= 4, `prendre owns only ${prendreOnly.length} missions of its own`);

  // AND THE FIGURE IS ONE, NOT TWO, WHICH IS THE DESIGN RATHER THAN A SHORTFALL.
  // battre has two missions and only ONE of them is about battre alone: s08
  // teaches it by pointing at mettre, which it copies exactly, so the section
  // names a mettre form and drops out of a verb-exclusive count. That is the
  // cheapest way to teach the small one and the measure should not punish it.
  strictEqual(battreOnly.length, 1, `battre owns ${battreOnly.join(', ')}`);
  deepStrictEqual(battreOnly, ['s14-combattre']);
  // so the two missions are asserted BY ID as well, and both must name it.
  for (const id of ['s08-battre', 's14-combattre']) {
    const sec = byIdSec(id);
    ok(sec, `${id} is missing`);
    ok(strings(sec).some((x) => shapeFor('battre').test(x)), `${id} names no form of battre`);
  }
});

test('and strictly fewer rows and fewer paradigm cells', skip, () => {
  // Derived from the seed rather than declared. battre also has no published
  // evidence anywhere in the corpus, which is why it is the small one.
  const rows = mineRows();
  const inFamily = (v: string) => {
    const words = [v, ...FAMILIES[v], ...FORMS[v], ...FAMILIES[v].flatMap((c) => FORMS[v].map((f) => c.slice(0, c.length - v.length) + f))];
    const re = new RegExp(`(^|[^a-zà-ÿ])(${words.join('|')})(?![a-zà-ÿ])`, 'i');
    return rows.filter((r) => re.test(r.fr) || re.test(`j'${r.fr}`)).length;
  };
  ok(inFamily('battre') < inFamily('mettre'), `battre has ${inFamily('battre')} rows and mettre ${inFamily('mettre')}`);
  ok(inFamily('mettre') < inFamily('prendre'), `mettre has ${inFamily('mettre')} rows and prendre ${inFamily('prendre')}`);
  strictEqual(BATTRE_IDS.length, 4, 'battre no longer has four paradigm cells');
  ok(BATTRE_IDS.length < PRENDRE_IDS.length, 'battre no longer has fewer cells than prendre');
});

test('battre still names its family, so the canDo is met', skip, () => {
  // The canDo asks only that the learner RECOGNISE the compounds, and that is
  // what the two missions deliver. Smaller is not absent.
  const text = displayText();
  for (const c of FAMILIES.battre) ok(hasPhrase(text, c), `${c} is named nowhere and the canDo asks for recognition`);
});

/* ══════════════════════════════════════════════════════════════════════════
 *  7. WHAT THIS LESSON MUST NOT TEACH
 * ═══════════════════════════════════════════════════════════════════════ */

test('pris AND mis APPEAR NOWHERE, RESERVED FOR a2.20', skip, () => {
  // 198 published rows hold `pris` and 81 hold `mis`, so this has to be a guard
  // rather than an intention. The corpus header flags both as deliberately left,
  // so a2.20 knows the omission was a decision.
  const all = strings(L).join('\n');
  for (const f of RESERVED) ok(!hasPhrase(all, f), `${f} reached a surface; the past of these three is ${RESERVED_FOR}'s`);
  for (const r of mineRows()) {
    for (const f of RESERVED) ok(!hasPhrase(r.fr, f), `${r.id} authors ${f}`);
  }
  // and the unit that takes them is named, so the learner is not left wondering.
  ok(namesUnitLabel(displayText(), RESERVED_FOR), `${RESERVED_FOR} is never named, so the omission reads as a gap`);
});

test('NO TRANSPORT OR RESTAURANT VOCABULARY IS TAUGHT', skip, () => {
  // Scoped to PRODUCTION surfaces rather than to every string, because the
  // roundup has to be able to say where the idioms are taught. A guard written
  // over every string fires on legitimate context and gets deleted by the next
  // author; invariants §1 records four ways that has already happened here.
  const PRODUCTION = new Set(['s04-grid', 's05-doubled', 's06-prendre', 's07-mettre', 's08-battre',
    's10-identity', 's11-apprendre', 's12-remettre', 's13-which', 's14-combattre', 's16-listening',
    's20-scenario', 's21-build', 's22-dictation', 's23-speak', 's24-review', 's26-unseen', 's27-quiz']);
  const shape = new RegExp(`(^|[^a-zà-ÿ])(${NEIGHBOUR_NOUNS.join('|')})(?![a-zà-ÿ])`, 'i');
  for (const s of sections()) {
    if (!PRODUCTION.has(s.id as string)) continue;
    const hit = display(s).find((x) => shape.test(x));
    ok(!hit, `${s.id} is a production surface and names ${JSON.stringify(String(hit).slice(0, 80))}`);
  }
  for (const r of mineRows()) ok(!shape.test(r.fr), `${r.id} authors ${JSON.stringify(r.fr)}, which belongs to a2.07 or a2.27`);
  // and both neighbours are named, so the learner knows where they went.
  for (const u of NEIGHBOUR_UNITS) ok(namesUnitLabel(displayText(), u), `${u} is never named`);
});

/* ══════════════════════════════════════════════════════════════════════════
 *  8. THE RESPELLINGS
 * ═══════════════════════════════════════════════════════════════════════ */

test('every authored respelling passes the REAL nasal checker', skip, () => {
  const mine = mineRows();
  strictEqual(mine.length, AUTHORED);
  for (const r of mine) {
    ok(r.respell, `${r.id} has no respelling; a card the learner cannot say is not a card`);
    ok(!hasPlainNasalFor(r.fr, r.respell!), `${r.id} closes a nasal with a plain n: ${JSON.stringify(r.respell)}`);
    ok(!r.respell!.includes('‿'), `${r.id} respells with U+203F, which renders as a low underscore on a Pixel 6`);
  }
});

test('THE TWO NASALS THE CHECKER CANNOT SEE ARE ASSERTED BY NAME', skip, () => {
  // Corrections §6's shape, and this lesson meets it twice on the same token:
  // `ray-POHⁿS` in `réponse` puts a consonant after the nasal INSIDE the token,
  // and hasPlainNasalFor needs the n to end a space-delimited token.
  for (const id of BLIND_ROWS) {
    const row = item(id);
    ok(row, `${id} is not in the seed`);
    ok(row!.respell!.includes(BLIND_TOKEN),
      `${id} no longer carries ${JSON.stringify(BLIND_TOKEN)}: ${JSON.stringify(row!.respell)}. `
      + 'The shared checker cannot see this one, so this assertion is the only guard on it.');
    // and the blindness itself, as a negative, so the day the checker improves
    // this goes red rather than carrying a dead by-name list.
    const broken = row!.respell!.replace(BLIND_TOKEN, BLIND_TOKEN.replace('ⁿ', 'n'));
    ok(!hasPlainNasalFor(row!.fr, broken),
      'hasPlainNasalFor now SEES this one. The checker has been improved; drop the by-name assertion and say so.');
  }
});

test('the superscript sweep finds exactly this many, and this many blind', skip, () => {
  const mine = mineRows();
  let sup = 0;
  const blind: string[] = [];
  for (const r of mine) {
    const re = r.respell ?? '';
    for (let i = 0; i < re.length; i += 1) {
      if (re[i] !== 'ⁿ') continue;
      sup += 1;
      if (!hasPlainNasalFor(r.fr, re.slice(0, i) + 'n' + re.slice(i + 1))) blind.push(r.id);
    }
  }
  strictEqual(sup, SUPERSCRIPTS);
  strictEqual(blind.length, BLIND, `${blind.length} superscripts are invisible to the checker`);
  deepStrictEqual([...new Set(blind)], BLIND_ROWS);
});

test('a2.14 doubled-nasal blind spot does NOT bite this lesson, and here is why', skip, () => {
  // a2.14 §1: hasPlainNasalFor runs its doubled-nasal rescue on the WHOLE French
  // string, so one `nn` anywhere switches the check off for every other word in
  // the line. Six of this lesson's sentences hold `prennent` or `apprennent`.
  // They are still seen, because `AHⁿ` and `OHⁿ` are two-letter house spellings
  // that hasPlainNasal catches on its FIRST branch, before the French is ever
  // consulted. a2.14 predicted exactly that and it is measured here.
  ok(hasPlainNasalFor('Ils apprennent le français.', 'eel-za-PREN luh frahn-SEH'),
    'a line holding apprennent is no longer seen, so a2.14 prediction has stopped holding');
  ok(!hasPlainNasalFor('Ils apprennent le français.', 'eel-za-PREN luh frahⁿ-SEH'),
    'the repaired form is flagged, which would mean the checker has changed');
  // and the bare-vowel spelling a2.14 met IS still invisible on an nn line,
  // which is the control that proves the mechanism has not moved.
  ok(!hasPlainNasalFor('Il connaît bien la ville.', 'eel koh-NEH byan la VEEL'),
    'the a2.14 control case is now seen; the doubled-nasal rescue has changed');
});

test('the false-positive path is looked for and correctly NOT met', skip, () => {
  // Corrections §6 asks every build to look for a real /n/ the checker reads as
  // an unmarked nasal, and to report the absence if it finds none. This lesson
  // finds none, and `PREN` is the candidate that looks like it should fire:
  // a vowel, a plain N, at the end of a token. It does not, because
  // hasPlainNasal own list is (AH OH EH UH EU AI OU) and EN is not in it.
  ok(!hasPlainNasalFor('Ils prennent la clé.', 'eel PREN la KLAY'), 'PREN is now flagged');
  ok(!hasPlainNasalFor('Ils mettent la clé.', 'eel MET la KLAY'), 'MET is now flagged');
  // and the checker still works, or the two above would pass on a dead function.
  ok(hasPlainNasalFor('le pain', 'PAN'), 'the checker no longer flags a genuine unmarked nasal');
});

test('THE FIVE REPAIRED ROWS CARRY THE REPAIRED VALUE IN THE SEED', skip, () => {
  // Postgres and the seed are two copies. Three of these five are invisible to
  // the shared checker in BOTH states, so nothing but this list would notice if
  // the carry silently shipped the pre-batch value.
  for (const { id, from, to, visible } of REPAIRS) {
    const r = item(id);
    // FOUR OF THE FIVE ARE REFERENCED BY itemIds, so they are always in the cut.
    // The fifth is the repair-only row, which no lesson references and which
    // `content:publish` correctly drops when it regenerates the seed from the
    // database. Its presence is not asserted; its VALUE is, if it is here.
    if (id === REPAIR_ONLY) {
      if (!r) continue;
    } else {
      ok(r, `${id} was not carried through the seed cut`);
    }
    strictEqual(r!.respell, to, `${id} carries ${JSON.stringify(r!.respell)}`);
    ok(!hasPlainNasalFor(r!.fr, r!.respell!), `${id} is still flagged after the repair`);
    // AND THE SPLIT THE CORPUS DECLARES IS THE SPLIT THE CHECKER MAKES, on the
    // value that was actually STORED. Corrections §6: a2.10's repair guard
    // demands the stored value be flagged before it accepts a repair, which
    // would have rejected the first three of these five.
    strictEqual(hasPlainNasalFor(r!.fr, from), visible,
      `${id} stored ${JSON.stringify(from)} and this build records it as ${visible ? 'visible' : 'invisible'} to hasPlainNasalFor`);
  }
  const invisible = REPAIRS.filter((r) => !r.visible).length;
  strictEqual(invisible, 3, 'the number of repairs the shared checker cannot see has moved; the brief said four and all four invisible');
});

test('the repair-only row is in NO itemId, and holds the repair if it is here at all', skip, () => {
  // fr.a1.transports-quotidiens.041 is repaired in Postgres and shown on no
  // screen. The merge carries it so the two copies agree on the repair between
  // the apply and the next publish.
  //
  // ITS PRESENCE IS NOT PERMANENT AND MUST NOT BE ASSERTED. `content:publish`
  // regenerates the seed FROM the database and this row is outside
  // SEED_CUT.themes and referenced by no lesson, so a publish correctly drops
  // it. The first version of this test asserted it was there and would have gone
  // red the moment anybody published — a guard that turns a routine operation
  // into a failure is worse than no guard. What is asserted is the part that
  // stays true: it is in no itemId, and if it IS in the seed it carries the
  // repaired value rather than the broken one.
  ok(!(L!.itemIds ?? []).includes(REPAIR_ONLY), `${REPAIR_ONLY} is in itemIds and this lesson shows it nowhere`);
  const r = item(REPAIR_ONLY);
  if (r) strictEqual(r.respell, 'PRAHⁿDR', `${REPAIR_ONLY} is in the seed carrying the pre-repair value`);
});

/* ══════════════════════════════════════════════════════════════════════════
 *  9. THE DICTÉE, AND THE LIGATURE IT CANNOT SEE
 * ═══════════════════════════════════════════════════════════════════════ */

test('every dictée target spells in LETTERS mode', skip, () => {
  const d = byIdSec('s22-dictation') as { itemIds?: string[] } | undefined;
  ok(d, 's22-dictation is missing');
  strictEqual((d!.itemIds ?? []).length, DICTATION);
  for (const id of d!.itemIds ?? []) {
    const r = item(id);
    ok(r, `${id} is a dictée target and is not in the seed`);
    strictEqual(dicteeMode(r!.fr), 'letters',
      `${id} ${JSON.stringify(r!.fr)} spells in WORD mode, which hands every word over pre-spelled`);
    ok((r!.drills ?? []).includes('dictation'), `${id} is a dictée target with no dictation drill`);
  }
});

test('THE DOUBLED CONSONANT IS IN THE DICTÉE, WHICH IS WHAT IT CAN TEST', skip, () => {
  // fold() strips combining marks, so no typed surface can test an accent, and
  // it KEEPS a doubled letter. The doubled n is the one thing in this lesson a
  // typed surface can genuinely score, so it belongs here. Corrections §5.
  const d = byIdSec('s22-dictation') as { itemIds?: string[] };
  ok((d.itemIds ?? []).includes('fr.a2.verbes.427'), 'the single-n half of the pair is not in the dictée');
  ok((d.itemIds ?? []).includes('fr.a2.verbes.429'), 'the doubled-n half of the pair is not in the dictée');
  strictEqual(fold('prennent') === fold('prenent'), false, 'fold no longer tells a doubled letter apart');
  strictEqual(fold('connaît') === fold('connait'), true, 'fold now tells an accent apart; the mcq-only rule can be revisited');
});

test('NO DICTÉE TARGET HOLDS U+0153, WHICH THE BANK AND THE TARGET BOTH DROP', skip, () => {
  // MEASURED, AND NOBODY HAS RECORDED IT. letterCount() strips everything
  // outside [A-Za-zÀ-ÿ] and U+0153 is outside it, and so is the letter bank in
  // MissionRich.tsx:1343 and the target it is compared against. So a dictée on
  // « Je bats les œufs. » builds a bank reading `Jebatslesufs`, compares the
  // answer against `JEBATSLESUFS`, and tells a learner who never spelled the
  // ligature that they got it right.
  //
  // `battre les œufs` was the natural frame for this lesson. This is why it is
  // not used, and why the frame is `Paul`.
  const d = byIdSec('s22-dictation') as { itemIds?: string[] };
  for (const id of d.itemIds ?? []) {
    ok(!/[œŒ]/u.test(item(id)!.fr), `${id} holds the ligature the dictée cannot see`);
  }
  strictEqual(letterCount('Je bats les œufs.'), 12);
  strictEqual('Je bats les œufs.'.replace(/[^\p{L}]/gu, '').length, 13);
  strictEqual('Je bats les œufs.'.replace(/[^A-Za-zÀ-ÿ]/gu, ''), 'Jebatslesufs');
  // and the mode is decided on the short count, so a 17-letter line reads as 16.
  strictEqual(letterCount('Vous battez les œufs.'), 16);
  strictEqual(dicteeMode('Vous battez les œufs.'), 'letters');
});

test('no authored row holds the ligature either', skip, () => {
  for (const r of mineRows()) ok(!/[œŒ]/u.test(r.fr), `${r.id} holds U+0153`);
  deepStrictEqual(strings(L).filter((s) => /[œŒ]/u.test(s)), []);
});

/* ══════════════════════════════════════════════════════════════════════════
 *  10. THE QUIZ
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
  for (const q of questions()) {
    const qq = q as { format?: string; q: string; answer?: string; accept?: string[] };
    if (qq.format !== 'typeIn' && qq.format !== 'errorSpot') continue;
    ok(matchesAccept(qq.answer ?? '', qq.accept ?? []),
      `a ${qq.format} displays ${JSON.stringify(qq.answer)} and does not accept it: ${JSON.stringify(qq.q)}`);
  }
});

test('EVERY TYPED QUESTION FIXES PERSON AND NUMBER', skip, () => {
  // The brief asks for it by name, and on a paradigm whose three singular
  // persons are one sound it is the difference between a question and a coin
  // toss: `___ la clé` has three right answers.
  for (const q of questions()) {
    const qq = q as { format?: string; q: string };
    if (qq.format !== 'typeIn') continue;
    ok(/(^|[^a-zà-ÿ])(je|j'|tu|il|elle|on|nous|vous|ils|elles)(?![a-zà-ÿ])/i.test(qq.q),
      `a typeIn fixes no person: ${JSON.stringify(qq.q)}`);
  }
});

test('NO EAR QUESTION ASKS BETWEEN TWO MEMBERS OF ONE HOMOPHONE GROUP', skip, () => {
  // THREE groups here, one per verb: the three singular persons of each are one
  // sound. A listenChoose offering two members of one group has no correct
  // answer and marking one right certifies a bug.
  const GROUPS = [['prends', 'prend'], ['mets', 'met'], ['bats', 'bat']];
  const ears = questions().filter((q) => (q as { format?: string }).format === 'listenChoose');
  strictEqual(ears.length, 2, 'the lesson ships two listenChoose, both singular against plural');
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
    ok((q as { say?: string }).say, 'the listenChoose has no "say" and would speak the correct option aloud');
  }
  // and the ear screen points at the unit that met an audible plural first.
  ok(namesUnitLabel(prose(byIdSec('s16-listening')).join('  '), EAR_UNIT), `s16-listening does not name ${EAR_UNIT}`);
});

test('each round leads on a different trigger, so every drill can fire', skip, () => {
  // `drillForRound` returns the FIRST target that has a drill and then stops.
  // a1.05 ships two drills that can never fire and its own test fails on them.
  const rounds = ((quizSec() as { rounds?: { id: string; targets?: string[] }[] }).rounds ?? []);
  const triggers = new Map(((L!.errorTriggers ?? []) as { id: string; drill?: string }[]).map((t) => [t.id, t]));
  const leads = rounds.map((r) => (r.targets ?? []).find((t) => triggers.get(t)?.drill));
  ok(leads.every(Boolean), 'a round has no target with a drill');
  strictEqual(new Set(leads).size, leads.length, 'two rounds lead on the same trigger');
  for (const t of triggers.values()) ok(leads.includes(t.id), `${t.id} is never a round first resolving target`);
});

/* ══════════════════════════════════════════════════════════════════════════
 *  11. REACHABILITY AND THE DECK
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
  // by nothing at all. This build had two, both scene rows, and the fix was to
  // give them a home in a term rather than to drop the guard.
  const ids = new Set(L!.itemIds ?? []);
  const drawn = new Set<string>();
  for (const s of [...sections(), ...(L!.drills ?? []), ...Object.values(L!.terms ?? {})]) {
    for (const str of strings(s)) if (ids.has(str)) drawn.add(str);
  }
  deepStrictEqual([...ids].filter((id) => !drawn.has(id)), [], 'items in itemIds that no section, drill or term draws');
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
  const speak = byIdSec('s23-speak') as { itemIds?: string[] };
  for (const id of speak.itemIds ?? []) {
    ok((item(id)!.drills ?? []).includes('voiceflash'), `${id} is a speak target the mic cannot score`);
  }
});

test('THE THREE AUTHORED INFINITIVES ARE BARE AND UNGENDERED', skip, () => {
  // a2.15 is the FIRST A2 build to author an infinitive; corrections §2 records
  // five in a row that authored none. A gendered single-word row joins a1.03's
  // measured ending population and moves twenty printed figures.
  for (const [word, id] of AUTHORED_INFINITIVES) {
    const r = item(id);
    ok(r, `${id} is missing from the seed`);
    strictEqual(r!.fr, word);
    strictEqual(r!.kind, 'word');
    strictEqual((r as { gender?: string }).gender, undefined, `${id} carries a gender; infinitives are not nouns`);
    ok(!/\s/.test(r!.fr), `${id} is not a bare infinitive`);
    ok(r!.respell, `${id} has no respelling`);
  }
});

test('no authored row joins a1.03 ending population', skip, () => {
  // Through the REAL endingPopulation. a1.08 shipped a hand-rolled copy carrying
  // a level filter the real one does not have, let four rows through, and moved
  // two of a1.03's printed cards.
  deepStrictEqual(endingPopulation(mineRows()).map((r) => (r as { id?: string }).id ?? '?'), []);
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

test('the four published evidence rows are drawn and carry a flashcard drill', skip, () => {
  // 330 published sentences hold a present-tense form of one of these three
  // verbs or their compounds. Four survived every refusal: the best prendre ones
  // are a2.27's, the best apprennent one carries U+203F, and all three published
  // battre sentences hold U+0153.
  for (const id of ['fr.sons.nasales.027', 'fr.sons.nasales.020', 'fr.sons.voyelles.448', 'fr.sons.voyelles.386']) {
    const r = item(id);
    ok(r, `${id} was not carried through the seed cut`);
    ok((r!.drills ?? []).includes('flashcard'), `${id} is released with no flashcard drill`);
    ok(r!.respell, `${id} has no respelling`);
    ok(!r!.respell!.includes('‿'), `${id} carries U+203F`);
    ok(strings(byIdSec('s15-evidence')).some((s) => s.includes(r!.fr)), `${id} is not drawn by s15-evidence`);
  }
  // and the rows that were refused are still not here.
  for (const id of ['fr.sons.nasales.143', 'fr.sons.voyelles.407', 'fr.b1.cuisine.009', 'fr.a1.cuisine.166']) {
    ok(!(L!.itemIds ?? []).includes(id), `${id} was refused and is imported`);
  }
});

/* ══════════════════════════════════════════════════════════════════════════
 *  12. HOUSE RULES AND THE RENDERER
 * ═══════════════════════════════════════════════════════════════════════ */

test('no grammar jargon on a learner surface, INCLUDING intro and overview', skip, () => {
  // a2.11 shipped "third person" on the lesson cover in v1 because every guard
  // in the band walked sections, sheets and terms and not `intro`. Ledger §0.
  // grammarAssumed and grammarIntroduced are deliberately excluded: invariants
  // §8 says those are addressed to the curriculum and may use the precise words,
  // and this lesson grammarIntroduced uses several of them.
  const JARGON = [
    'conjugation', 'conjugate', 'conjugated', 'infinitive', 'infinitives',
    'conditional', 'indicative', 'subjunctive', 'paradigm', 'orthography',
    'auxiliary', 'first person', 'second person', 'third person',
    'prefix', 'prefixes', 'prefixed', 'derivation', 'geminate', 'participle',
  ];
  // AND THE MATCH COVERS THE PLURAL, WHICH IS WHAT v2 SHIPPED PAST.
  // `hasPhrase` is boundary-exact, so `paradigm` does not match `paradigms`, and
  // v2's act 2 was titled "Three paradigms, eighteen cells". Every host gate was
  // green; it was read off the resume interstitial on a Pixel 6. a2.14's list
  // works round this one word at a time (`infinitive`, `infinitives`); this
  // closes the class for anybody who copies the file.
  const hasJargon = (hay: string, j: string) => hasPhrase(hay, j) || hasPhrase(hay, `${j}s`);
  const found = JARGON.filter((j) => hasJargon(learnerText(), j) || hasJargon(displayText(), j));
  deepStrictEqual(found, []);
  // the singular-only match would NOT have caught it, which is the point.
  ok(!hasPhrase('Three paradigms, eighteen cells', 'paradigm'), 'hasPhrase now matches a plural on its own; this widening can be dropped');
  ok(hasJargon('Three paradigms, eighteen cells', 'paradigm'), 'the widened match no longer catches the plural');
});

test('Lesson.intro is present and clean, pinned in its own right', skip, () => {
  ok(L!.intro && L!.intro.length >= 40, 'intro is missing or too short for the cover');
  ok(!L!.intro!.includes('—'), 'an em dash on the lesson cover');
  ok(!hasPhrase(L!.intro!, 'paradigm'), 'jargon on the lesson cover');
  ok(/never shows you/i.test(L!.intro!), 'the cover no longer promises the thing the lesson is for');
});

test('no em dash, no "honest", no U+203F anywhere, ON THE WIDER WALK', skip, () => {
  // THIS IS THE ASSERTION THAT COST THIS LESSON A VERSION, AND IT IS WHY IT
  // WALKS `display()` RATHER THAN `prose()`.
  //
  // `prose()` drops NOTATION_KEYS and `sub` is on that list, because on most
  // cards it holds a respelling. On a cardDeck card it holds PROSE, and v1 put
  // "honest" in one: the batch and the merge were both green and
  // sons-alphabet.test.ts, which reads the seed and walks every string, went red
  // the moment the merge landed. Every A2 lesson before this one has the same
  // gap in its own guards.
  const text = displayText();
  ok(!text.includes('—'), 'an em dash reached a learner surface');
  ok(!hasPhrase(text, 'honest') && !hasPhrase(text, 'honesty'), '"honest" is banned from authored content');
  deepStrictEqual(strings(L).filter((s) => s.includes('‿')), [], 'U+203F renders as a low underscore on a Pixel 6');
  // AND THE NARROWER WALK WOULD NOT HAVE CAUGHT IT, WHICH IS THE POINT. At least
  // one card `sub` in this lesson is a string `prose()` never sees, so a guard
  // built on prose alone has a hole in exactly the place v1 fell through.
  const subs = sections()
    .flatMap((s) => ((s.cards ?? []) as { sub?: string }[]).map((c) => c.sub))
    .filter((x): x is string => typeof x === 'string');
  ok(subs.length > 0, 'no card carries a sub, so this assertion has nothing to demonstrate on');
  const seenByProse = new Set(prose(L));
  ok(subs.some((x) => !seenByProse.has(x)),
    'every card sub is now visible to prose(), so the gap that cost v1 has closed and this walk can be simplified');
});

test('the units this lesson cites are all findable', skip, () => {
  const text = displayText();
  // RESERVED_FOR AND THE NEIGHBOUR_UNITS ARE NOT ON THIS LIST, and never were
  // on a screen. Measured against the shipped body: a2.20 is the id block
  // reserved for the participles, and a2.07 and a2.27 are the themes that lend
  // rows. All three are recorded for an author in a corpus note, which is not a
  // learner surface, and this assertion walks the lesson.
  for (const u of ['a2.01', STEM_UNIT, EAR_UNIT, A211_UNIT, FAMILY_SEEN_AT]) {
    ok(namesUnitLabel(text, u), `${u} is cited by this build and appears nowhere a search can see`);
  }
});

test('every groupDrill item puts SOMETHING under the French', skip, () => {
  // a2.13 shipped 59 cards and a2.14 built 53 that carried `respell` and `en` at
  // a size where the renderer drew neither. e584bd8 fixed that in MissionRich
  // rather than in the content, across 583 cards in 28 lessons, so the two
  // fields are legal again. What survives the fix is the defect itself: a card
  // carrying none of the four renders as a word and a play button.
  let drills = 0;
  let items = 0;
  for (const s of sections()) {
    if (s.type !== 'groupDrill') continue;
    drills += 1;
    for (const g of ((s.groups ?? []) as { items?: Record<string, unknown>[] }[])) {
      for (const it of (g.items ?? [])) {
        items += 1;
        ok(it.note || it.ipa || it.respell || it.en,
          `${s.id} has a groupDrill item with no note, ipa, respell or en: ${JSON.stringify(it.fr)}`);
      }
    }
  }
  strictEqual(drills, GROUPDRILLS);
  strictEqual(items, GROUPDRILL_ITEMS);
});

test('NO MISSION TITLE RUNS PAST THE HUB ROW', skip, () => {
  // The missions hub draws the title and a TYPE CHIP on one row and the chip
  // wins, so a longer title ellipsises. Ledger §a2.14-13: the budget is a
  // rendered WIDTH and the character count is an approximation, so 26 to 27 with
  // wide glyphs stays unverified until it has been read off the hub.
  const over = sections()
    .map((s) => ({ id: s.id as string, title: (s.title ?? '') as string }))
    .filter((s) => s.title.length > MISSION_TITLE_MAX);
  deepStrictEqual(over, [], `mission title(s) past ${MISSION_TITLE_MAX} characters`);
});

test('the renderer rules that have shipped blank screens', skip, () => {
  for (const s of sections()) {
    if (s.type === 'commonErrors') ok(s.swipe, `${s.id} is a commonErrors without swipe, which draws a blank screen`);
    if (s.type === 'practice') ok(s.skill !== 'write', `${s.id} uses practice skill 'write', which draws no writing surface`);
    if (s.type === 'tapTable') ok(((s.rows ?? []) as unknown[]).length <= 6, `${s.id} has more rows than a Pixel 6 shows`);
    const chips = (s.terms ?? []) as string[];
    ok(chips.length <= 3, `${s.id} declares ${chips.length} term chips; the renderer shows three`);
    for (const t of chips) ok(L!.terms?.[t], `${s.id} names undefined term ${t}`);
  }
  strictEqual(sections().filter((s) => s.type === 'tapTable').length, 1, 'the brief asks for one tapTable, then stop');
});

test('the sheet draws only what ReferenceSheet.tsx can draw', skip, () => {
  // It draws `teach`, `letterGrid` and `table` and NOTHING else. A cheatSheet in
  // here draws its title and no rows, which a1.13 ships today.
  const DRAWABLE = new Set(['teach', 'letterGrid', 'table']);
  const sheets = (L!.sheets ?? []) as { id: string; sections?: { type?: string; layer?: string; id?: string }[] }[];
  strictEqual(sheets.length, 1);
  strictEqual(sheets[0].id, 'sheet.a2.15.familles');
  for (const s of sheets[0].sections ?? []) {
    ok(DRAWABLE.has(s.type ?? ''), `the sheet holds a "${s.type}" section`);
    strictEqual(s.layer, 'deep', `sheet section ${s.id} is not at layer deep`);
  }
  const declared = new Set(sheets.map((s) => s.id));
  for (const s of sections()) {
    if (s.sheetId) ok(declared.has(s.sheetId as string), `${s.id} names sheet ${s.sheetId}`);
  }
});

test('THE SHEET LEADS ON STEMS, WHICH NO SHEET IN THIS BAND HAS NEEDED', skip, () => {
  // a2.11's precedent: a sheet has to justify itself against the sheets before
  // it. Every reference sheet in this band lists ENDINGS. This one leads with
  // STEMS, because no verb before these three changed its stem more than once,
  // and its second table maps a head verb to the verbs it buys, which no
  // paradigm sheet can hold at all.
  const sheets = (L!.sheets ?? []) as { sections?: { id?: string; type?: string; cols?: string[]; rows?: string[][] }[] }[];
  const first = (sheets[0].sections ?? [])[0];
  strictEqual(first?.id, 'sheet-stems');
  strictEqual(first?.type, 'table');
  strictEqual((first?.rows ?? []).length, 3);
  (first?.rows ?? []).forEach((row, i) => {
    strictEqual(row[0], VERBS[i]);
    strictEqual(row[4], String(STEMS[VERBS[i]].length), `${VERBS[i]} stem count on the sheet has drifted`);
  });
  ok((sheets[0].sections ?? []).some((s) => s.id === 'sheet-families'), 'the sheet does not map a head verb to its family');
});

test('THE SHEET RESPELLS AGREE WITH THE ROWS THE LEARNER IS SCORED ON', skip, () => {
  // a2.13 §6.2 in the respelling dimension, which a2.14 §5 found: two
  // independent copies of the same values in different files, and nothing
  // comparing them. "Correct" one of the sheet's respellings and the learner
  // reads one pronunciation and is scored on another, with every other gate
  // green.
  const sheets = (L!.sheets ?? []) as { sections?: { id?: string; rows?: string[][] }[] }[];
  const say = (sheets[0].sections ?? []).find((s) => s.id === 'sheet-say');
  ok(say, 'sheet-say is missing');
  strictEqual((say!.rows ?? []).length, 6);
  (say!.rows ?? []).forEach((row, i) => {
    strictEqual(row[0], PERSONS[i], `sheet-say row ${i} is not ${PERSONS[i]}`);
    ok(item(PRENDRE_IDS[i])!.respell!.includes(row[1]),
      `sheet-say says ${JSON.stringify(row[1])} for prendre at ${PERSONS[i]} and the card says ${JSON.stringify(item(PRENDRE_IDS[i])!.respell)}`);
    ok(item(METTRE_IDS[i])!.respell!.includes(row[2]),
      `sheet-say says ${JSON.stringify(row[2])} for mettre at ${PERSONS[i]} and the card says ${JSON.stringify(item(METTRE_IDS[i])!.respell)}`);
  });
  // battre has four cells and six respellings on the sheet, which is the weight
  // decision showing in the data rather than a gap.
  BATTRE_IDS.forEach((id, j) => {
    ok(item(id)!.respell!.includes((say!.rows ?? [])[BATTRE_PERSONS[j]][3]),
      `sheet-say and ${id} disagree on the battre respelling`);
  });
});
