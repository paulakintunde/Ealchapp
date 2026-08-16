// a2.23.l1 « Pronominaux au passé composé »: the assertions that keep this
// lesson true. seq 20, the LAST lesson of batch 2 and the capstone of the
// past-tense arc.
//
// Modelled on a2-22-pronominaux.test.ts. Everything here runs the REAL app
// function rather than a copy: an earlier a1.01 test inlined its own glossary
// lookup, copied the version that was already broken, and passed while the
// feature was dead.
//
// THIS FILE READS seed.json AND NOTHING ELSE. It does not import the corpus, the
// terms or the lesson source, because a test that imports the same constant the
// content imports is comparing the content to itself. Every figure below is
// written out by hand, so a change in the source has to be reflected here on
// purpose. That also closes corrections §9's second hole outright: there is no
// `try { … } catch {}` around a source import here, so there is no state in
// which thirty assertions silently do not run.
//
// IT IS SCOPED TO ITS OWN ID BLOCK. Ledger §a2.16-1: a2.03's test filtered on a
// namespace prefix and meant "the rows a2.03 authored", and four of its tests
// went red the moment a2.16 landed in the same namespace. `fr.a2.verbes` holds
// 602 rows belonging to fourteen lessons.
//
// ── What this file is actually guarding ────────────────────────────────────
//
//   THE SLOT DIAGRAM in ONE section, all six positions, built from a FULL
//   NEGATIVE, read cell by cell and never through `strings(section)`, which is
//   a2.21 §4.1 and the fourth time the band has found that shape.
//   « J'ai lavé la voiture. » beside « Je me suis lavé. », the auxiliary flip,
//   which is the Owns and without which the rule has no reason.
//   « Elle s'est lavée. » beside « Elle s'est lavé les mains. », the exception,
//   NAMED and never EXPLAINED, and never produced.
//   AVOIR IS NEVER THE FIRST WORD OF A REFLEXIVE except in the three places the
//   lesson shows it as the error, and the guard is proved to fire and proved
//   not to over a lesson made entirely of pronouns beside auxiliaries.
//   a2.21's AGREEMENT RULE and a2.01's REFRAME quoted VERBATIM, both as
//   LITERALS here AND re-read off the shipped neighbours, so a paraphrase in
//   either place goes red.
//   THE NEGATION ARC: a1.18's line and a2.19's line are TWO DIFFERENT STRINGS
//   and both are quoted. That is the finding this lesson was asked to make.
//   NO RECIPROCAL AND NO IMPERFECT, anywhere.
//   EVERY DICTÉE ITEM in LETTERS mode through the real `dicteeMode`, and the
//   dictée is the only surface that can test the ending at all.
//   THE FOUR CELLS STAYING DISTINCT under the real `fold`, which is what makes
//   agreement typeable and is unusual for this band, and the é NOT being
//   distinct, which is why no question turns on it.
//
// Every one of those is asserted below, and every one was mutation-tested: the
// assertion was broken on purpose and confirmed to go red before it was kept.

import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { ok, strictEqual, deepStrictEqual } from 'node:assert';
import { test } from 'node:test';

import type { Item, Lesson, LessonSection } from './schema.ts';
import { quizQuestions, validateLesson, formatIssues } from './schema.ts';
import { validateDensity, formatDensity, hasPlainNasalFor } from './density.logic.ts';
import { endingPopulation } from './gender.logic.ts';
import { dicteeMode } from './dictee.logic.ts';
import { matchesAccept, fold } from './answer.logic.ts';

const here = dirname(fileURLToPath(import.meta.url));
const seed = JSON.parse(readFileSync(resolve(here, 'seed.json'), 'utf8')) as {
  version: number; items: Item[]; lessons: Lesson[];
  units: { id: string; title?: string; sub?: string; canDo?: string; seq?: string | number; lessonIds?: string[]; prereqUnitIds?: string[]; themes?: string[] }[];
};

const L = seed.lessons.find((l) => l.id === 'a2.23.l1');
const noLesson = !L;
const byIdItem = new Map(seed.items.map((i) => [i.id, i] as const));

/** THE BLOCK, NOT THE PREFIX. Thirteen other lessons own `fr.a2.verbes.001..790`. */
const MY_BLOCK = { from: 791, to: 860 };
const inRange = (id: string, lo: number, hi: number) => {
  const m = /^fr\.a2\.verbes\.(\d{3})$/.exec(id);
  if (!m) return false;
  const n = Number(m[1]);
  return n >= lo && n <= hi;
};
const isMine = (id: string) => inRange(id, MY_BLOCK.from, MY_BLOCK.to);
const myRows = () => seed.items.filter((i) => isMine(i.id));

/** The two blocks immediately below. A RESERVATION ASSERTION MUST NOT SAY "AND
 *  IT IS EMPTY" (ledger, a2.20 §0): a2.05's did and went red the moment a2.20
 *  filled it. These say no row of a2.23 is inside them and that each still holds
 *  exactly what its lesson applied. */
const isA221 = (id: string) => inRange(id, 651, 720);
const isA222 = (id: string) => inRange(id, 721, 790);

const THEME = 'verbes';

/* ─── THE STRINGS, BY HAND ────────────────────────────────────────────────
 *
 * a2.21 §8: A REFRAME QUOTED FROM A NEIGHBOUR MUST BE READ OFF THE SHIPPED
 * LESSON. Its own quote of a2.15 was INVENTED and neither the batch nor the
 * merge could see it, because both compared the constant to itself. Every
 * quoted line below is a LITERAL here AND re-read off the seed in the tests
 * that follow, so a paraphrase in either place goes red.                      */

const REFRAME = 'If the little word is there, the first word is être.';
const REFRAME_COUNT = 9;
const THE_NEW_FACT = 'Every verb that carries the little word takes être, including the ones that take avoir without it.';
const AGREEMENT_RULE = 'Add nothing for a man on his own, e for a woman, s for more than one, and es for more than one woman.';
const A201_REFRAME = 'Four of the six forms sound the same, so the pronoun carries the person.';
const A221_REFRAME = 'After être, the second word ends like a describing word.';
const A222_REFRAME = 'The pronoun changes with the subject, because it is the subject.';
const A118_REFRAME = 'Wrap the verb, then ask what the verb was.';
const NEGATION_RULE = 'Wrap the verb that changed, not the one carrying the meaning.';
const NEGATION_EXTENSION = 'Both words changed for the subject, so both go inside the wrap.';
const NEGATION_OUTSIDE = 'The wrap goes round the little word and the first word. The second word sits outside it.';
const PRESENT_NO_AGREEMENT = 'In the present nothing on the end of the verb knows who the subject is. Only the extra word changes.';
const OBJECT_CLAIM = 'When something is named straight after the second word, the ending goes away again. You will meet this and you are not being asked to produce it.';

/** THE SIX POSITIONS, in order, and the sentence they read as. THE SHAPE OF THE
 *  LESSON, so a quiet drop is exactly what this is guarding against. */
const SLOTS: readonly { pos: string; word: string }[] = [
  { pos: 'first', word: 'Je' },
  { pos: 'then', word: 'ne' },
  { pos: 'then', word: 'me' },
  { pos: 'then', word: 'suis' },
  { pos: 'then', word: 'pas' },
  { pos: 'last', word: 'levé' },
];
const SLOT_SENTENCE = 'Je ne me suis pas levé.';

/** THE CELL BUDGET FOR THE THIRD COLUMN, AND WHY v2 EXISTS.
 *
 *  v1 put the unit-id credits inside the cells, so `job` ran to 44, 61, 63 and
 *  70 characters. The third column of a three-column `tapTable` is about eleven
 *  characters wide on a Pixel 6, so those wrapped to four, five and six lines
 *  and the six-row diagram SPANNED TWO FULL SCREENS. Nothing was lost — it
 *  scrolls — but the brief requires the six positions on ONE screen so the
 *  learner reads them down the page as a sentence, and that is the only reason
 *  the section exists.
 *
 *  Every layer asserted the six rows, the six words and the six jobs, and every
 *  one of those was true. HEIGHT IS INVISIBLE TO ALL OF THEM, and this budget
 *  is the nearest thing to seeing it that a host gate can have. */
const SLOT_CELL_MAX = 20;

/* ─── THE MISSION-ROW TITLE BUDGET, AND IT IS A WIDTH ──────────────────────
 *
 * a2.13 recorded 27 and a2.14 §13 corrected it to a WIDTH. **v1 of this lesson
 * carried the number as a CHARACTER COUNT, asserted it nowhere, and two titles
 * clipped on a Pixel 6.** Measured on the device:
 *
 *     "Build It, One Word At A Time"        28 ch   13.05 em   FITS
 *     "One Word Changes The Other"          26 ch   13.46 em   FITS
 *     "Verbs You Were Never Shown"          26 ch   13.64 em   CLIPPED
 *     "You Already Have Four Of The Five"   33 ch   16.01 em   CLIPPED
 *
 * Twenty-six clips while twenty-eight fits, so a character count cannot model
 * it: `V Y W N S w` are wide glyphs and `i l t , space` are narrow.
 *
 * THE BAND IS NARROW (13.46 to 13.64) AND THAT IS AN HONEST LIMIT. The first
 * budget was 13.20 and it refused `s02-flip`, which the device renders in full;
 * the guard caught its own over-tightness on the first run. A title inside that
 * band should be checked on a device rather than trusted either way. */
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
const TITLE_MUST_FIT: readonly string[] = ['Build It, One Word At A Time', 'One Word Changes The Other'];
const TITLE_MUST_CLIP: readonly string[] = ['Verbs You Were Never Shown', 'You Already Have Four Of The Five'];

/** THE FOUR CELLS, in cell order. The agreement layout. */
const CELLS: readonly { fr: string; ending: string }[] = [
  { fr: "Il s'est lavé.", ending: '' },
  { fr: "Elle s'est lavée.", ending: 'e' },
  { fr: 'Ils se sont lavés.', ending: 's' },
  { fr: 'Elles se sont lavées.', ending: 'es' },
];

/** THE AUXILIARY FLIP, as [avoir, être]. THE OWNS. */
const FLIP_PAIRS: readonly (readonly [string, string])[] = [
  ["J'ai lavé la voiture.", 'Je me suis lavé.'],
  ["J'ai couché les enfants.", 'Je me suis couché.'],
  ["J'ai réveillé mon frère.", 'Je me suis réveillé.'],
];

/** THE EXCEPTION, as [agrees, does not]. Named receptively, produced nowhere. */
const OBJECT_PAIR: readonly (readonly [string, string])[] = [
  ["Elle s'est lavée.", "Elle s'est lavé les mains."],
  ["Elle s'est levée.", "Elle s'est brossé les dents."],
];

/** The six persons, in learner order. */
const PERSONS: readonly string[] = [
  'Je me suis levé tôt.', "Tu t'es levé tôt.", "Il s'est levé tôt.",
  'Nous nous sommes levés tôt.', 'Vous vous êtes levés tôt.', 'Ils se sont levés tôt.',
];

const AVOIR_TRAP = "Je m'ai levé.";
const POSITION_TRAP = 'Je suis me levé.';
const WRAP_TRAP = 'Je ne me suis levé pas.';

/** Every routine word this lesson names. THE BRIEF REQUIRES THESE BY ID. */
const ROUTINE_IDS: readonly string[] = [
  'fr.a1.routines.028', 'fr.a1.routines.001', 'fr.a1.routines.020',
  'fr.a1.routines.010', 'fr.a1.routines.011', 'fr.a1.routines.012',
  'fr.a1.routines.034', 'fr.a1.routines.087', 'fr.a1.routines.019',
];

/** Every verb this lesson names, as an IMPORTED id. The brief: *« Every verb and
 *  participle used is an imported id, asserted by id. »* The participles are the
 *  other half of that and they are asserted by ABSENCE: doctrine §E settled that
 *  a participle is never a corpus item, so the check is that this lesson
 *  authored no headword at all. */
const IMPORTED_HEADWORDS: readonly string[] = [
  ...ROUTINE_IDS, 'fr.a1.cuisine.183',
  'fr.sons.verbes-essentiels.001', 'fr.sons.verbes-essentiels.002',
];

/** The published sentences it leans on, which the merge had to CARRY. */
const IMPORTED_SENTENCES: readonly string[] = [
  'fr.a2.routines.032', 'fr.a2.routines.039', 'fr.a2.routines.049',
  'fr.a1.rp-recits-temps.180', 'fr.a1.rp-recits-temps.199',
  'fr.a1.rp-recits-temps.066', 'fr.a2.corps.001', 'fr.a1.corps.209',
];

/** The object system, which a2.06 and a2.24 own. NOT ONE of these may appear
 *  anywhere at all, which is wider than the brief asked and is the point of
 *  option 1: naming the pattern costs a card, explaining it costs a2.24. */
const OBJECT_TERMS: readonly string[] = [
  'direct object', 'indirect object', 'object pronoun', 'preceding object',
  'stands in for', 'replaces the noun', 'replaces a noun', 'receives the action',
  'the object comes before', 'agrees with the object',
];

/** The reciprocal, left out entirely. NARROWED after the bare phrase « each
 *  other » refused an audio brief saying « the two sit against each other »,
 *  which is corrections §14.4 running the other way round: a marker built from
 *  an ENGLISH GLOSS firing on ordinary English. */
const RECIPROCAL_MARKERS: readonly string[] = [
  'se sont parlé', 'se sont écrit', 'se sont vus', 'se sont rencontrés',
  'se sont téléphoné', 'to each other', 'to one another',
];

/** The imperfect, beyond A2's first twenty. */
const IMPERFECT_MARKERS: readonly string[] = [
  "c'était", 'était', 'étaient', 'avait', 'avaient', 'faisait', 'imperfect',
];

/* ─── String walks ────────────────────────────────────────────────────────*/

const MACHINE_KEYS = new Set([
  'id', 'ref', 'sheetId', 'itemId', 'itemIds', 'targets', 'detectOn', 'drill',
  'retest', 'accept', 'recordingId', 'audioRef', 'unitId', 'scenarioId',
  'clipIds', 'buckets', 'restPoints',
]);
const NOTATION_KEYS = new Set(['ipa', 'respell', 'promptSound', 'scoreSegment', 'sub']);
const isId = (s: string) => /^fr\.[a-z0-9]+\.[a-z0-9-]+\.\d+$/i.test(s);

function display(v: unknown, out: string[] = []): string[] {
  if (typeof v === 'string') { if (!isId(v)) out.push(v); }
  else if (Array.isArray(v)) for (const x of v) display(x, out);
  else if (v && typeof v === 'object') {
    for (const [k, x] of Object.entries(v)) if (!MACHINE_KEYS.has(k)) display(x, out);
  }
  return out;
}
function prose(v: unknown, out: string[] = []): string[] {
  if (typeof v === 'string') { if (!isId(v)) out.push(v); }
  else if (Array.isArray(v)) for (const x of v) prose(x, out);
  else if (v && typeof v === 'object') {
    for (const [k, x] of Object.entries(v)) if (!MACHINE_KEYS.has(k) && !NOTATION_KEYS.has(k)) prose(x, out);
  }
  return out;
}

/** EVERY LEARNER SURFACE. Corrections §9: the walk must read `intro` and
 *  `overview`, which are drawn on the lesson cover; a2.05 §3 added `audio`. */
const surfaceOf = (walk: (v: unknown, out?: string[]) => string[]): string[] => (noLesson ? [] : [
  ...walk(L!.sections), ...walk(L!.sheets ?? []), ...walk(L!.terms ?? {}),
  ...walk(L!.acts ?? []), ...walk(L!.drills ?? []), ...walk(L!.audio ?? {}),
  ...walk(L!.overview ?? {}), L!.intro ?? '', L!.reframe ?? '',
]);
/** NOT deduped. a2.22 §3: counting over a Set under-reports every short line. */
const RAW = surfaceOf(display);
const ALL = [...new Set([...surfaceOf(prose), ...RAW])];

/** THE HOUSE BOUNDARY, with corrections §14.3's fix: the apostrophe is dropped
 *  from the LEFT, so a shape can see `s'est`, `m'ai` and `t'es`. THIS LESSON IS
 *  THE REASON THAT FIX MATTERS MOST: two of its six persons elide and the error
 *  it exists to prevent is « je m'ai levé ». */
const bounded = (needle: string) =>
  new RegExp(`(?<![\\p{L}\\p{N}-])${needle.replace(/[.*+?^${}()|[\]\\]/gu, '\\$&')}(?![\\p{L}\\p{N}'’-])`, 'iu');
const hasPhrase = (hay: string, needle: string) => bounded(needle).test(hay);

/** NAMING A UNIT NEEDS A DIFFERENT BOUNDARY, AND THIS IS A NEW HOLE.
 *
 *  Corrections §14.3 records that the house boundary EXCLUDES the apostrophe on
 *  the LEFT, so a shape cannot see `j'ai` or `s'est`. **The mirror image on the
 *  RIGHT has not been recorded and it is worse**, because it makes every
 *  `hasPhrase(surface, '<unit id>')` check in this band blind to the possessive,
 *  and « a2.01's line » is how this whole band names a neighbour. Measured:
 *
 *      "That is a2.01's line."        hasPhrase(_, 'a2.01')  BLIND
 *      "That is a2.01 and nothing."   hasPhrase(_, 'a2.01')  MATCH
 *      "a2.24's lesson owns it."      hasPhrase(_, 'a2.24')  BLIND
 *
 *  A check that a unit is credited therefore passes only by accident, on
 *  whichever screen happens to name it without a possessive. This one drops the
 *  apostrophe from the RIGHT boundary and keeps it on the left, which is the
 *  exact opposite of the fix §14.3 prescribes and is right for the same reason:
 *  guard the THING. A unit id followed by `'s` is naming the unit. */
const namesUnit = (hay: string, unit: string) =>
  new RegExp(`(?<![\\p{L}\\p{N}'’-])${unit.replace(/\./gu, '\\.')}(?![\\p{L}\\p{N}-])`, 'iu').test(hay);

const sec = (id: string): LessonSection | undefined => L?.sections.find((s) => s.id === id);
const stop = (s: string) => s.replace(/\.$/u, '');

/** The three places a wrong form is allowed, and nowhere else. */
const WRONG_FORM_SECTIONS = ['s15-wrap', 's16-errors', 's23-quiz'];
/** The surfaces that make a learner WRITE or SAY one. */
const PRODUCTION_SECTIONS = ['s18-dictation', 's20-speak', 's19-talk', 's07-assembly', 's10-newverbs', 's15-wrap'];

/* ══ IDENTITY ═══════════════════════════════════════════════════════════ */

test('a2.23.l1 is in the seed at v1', { skip: noLesson }, () => {
  strictEqual(L!.version, 2, 'v2 repairs two Pixel 6 layout defects no host gate could see: the slot diagram spanning two screens, and two mission titles clipping. The counter moves rather than the body changing under v1');
  strictEqual(L!.unitId, 'a2.23');
  strictEqual(L!.title, 'Pronominaux au passé composé');
  strictEqual(L!.tag, 'A2 · LEÇON 20');
  strictEqual(L!.level, 'a2');
});

test('the unit is the one the database holds, and it lists this lesson', { skip: noLesson }, () => {
  const u = seed.units.find((x) => x.id === 'a2.23');
  ok(u, 'a2.23 is in the seed');
  strictEqual(String(u!.seq), '20');
  strictEqual(u!.title, 'Pronominal Verbs in the Passé Composé');
  strictEqual(u!.sub, 'Pronominaux au passé composé');
  strictEqual(u!.canDo, 'Can put reflexive verbs into the past with être and agree them correctly');
  deepStrictEqual(u!.prereqUnitIds, ['a2.22', 'a2.21']);
  ok((u!.lessonIds ?? []).includes('a2.23.l1'), 'the unit lists the lesson');
});

/* THE BRIEF REFUSES TO LET THIS LESSON BE BUILT AGAINST BRIEFS AND SAYS SO
 * TWICE. This is the assertion that keeps that true after the build: if either
 * prerequisite is ever removed from the seed, this lesson is standing on
 * nothing and the suite says so rather than a learner finding out. */
test('both prerequisites are SHIPPED, not briefed', { skip: noLesson }, () => {
  for (const id of ['a2.22', 'a2.21']) {
    const u = seed.units.find((x) => x.id === id);
    ok(u, `${id} is a hard prerequisite and is not in the seed`);
    ok((u!.lessonIds ?? []).length, `${id} is a hard prerequisite with no shipped lesson`);
    for (const lid of u!.lessonIds ?? []) {
      ok(seed.lessons.find((l) => l.id === lid), `${id} lists ${lid} and the seed does not hold it`);
    }
  }
});

test('the lesson validates and passes density', { skip: noLesson }, () => {
  const issues = validateLesson(L!);
  strictEqual(issues.length, 0, formatIssues(issues));
  const dens = validateDensity(L!, new Set(seed.items.map((i) => i.id)));
  strictEqual(dens.length, 0, formatDensity(dens));
});

test('the spine is 24 sections in 6 acts, and the Owns outweighs the positions', { skip: noLesson }, () => {
  strictEqual(L!.sections.length, 24);
  strictEqual((L!.acts ?? []).length, 6);
  const acts = L!.acts!;
  deepStrictEqual(acts.map((a) => a.sections.length), [4, 2, 7, 3, 4, 4]);
  ok(acts[2]!.sections.length > acts[1]!.sections.length,
    'doctrine §B.5: the positions act must not have more sections than the Owns');
  const inActs = acts.flatMap((a) => a.sections);
  strictEqual(new Set(inActs).size, inActs.length, 'no section is claimed by two acts');
  deepStrictEqual([...inActs].sort(), L!.sections.map((s) => s.id!).sort());
});

/* ══ THE ROWS ═══════════════════════════════════════════════════════════ */

test('43 rows in the block, all sentences, none a headword and none a participle', { skip: noLesson }, () => {
  const rows = myRows();
  strictEqual(rows.length, 43);
  for (const r of rows) {
    strictEqual(r.theme, THEME, `${r.id} is in ${r.theme}`);
    strictEqual(r.level, 'a2', `${r.id} is ${r.level}`);
    strictEqual(r.kind, 'sentence', `${r.id} is a ${r.kind}; this lesson authors sentences only`);
    ok(/\s/u.test(r.fr), `${r.id} « ${r.fr} » has no whitespace, so it is a headword whatever its kind says`);
    ok(!(r as { gender?: string }).gender, `${r.id} carries a gender`);
    ok(r.respell, `${r.id} has no respelling`);
    ok(r.drills.length, `${r.id} is reachable by no drill`);
  }
});

/* DOCTRINE §E, settled by a2.05, agreed by a2.20 and a2.21, inherited here. An
 * agreed cell is further from a corpus item than a bare infinitive is. */
test('no participle exists as a corpus item anywhere in this lesson', { skip: noLesson }, () => {
  const forms = ['lavé', 'lavée', 'lavés', 'lavées', 'levé', 'levée', 'levés', 'levées',
    'couché', 'couchée', 'couchés', 'couchées', 'habillé', 'habillée', 'douché', 'douchés'];
  for (const r of myRows()) {
    ok(!forms.includes(r.fr.trim()), `${r.id} is the bare form « ${r.fr} », which doctrine §E says is not a corpus item`);
  }
  const owned = new Set(L!.itemIds ?? []);
  for (const id of owned) {
    const row = byIdItem.get(id);
    if (!row || row.kind === 'sentence') continue;
    ok(!forms.includes(row.fr.trim()), `${id} is a bare participle and this lesson names it`);
  }
});

test("no row of a2.23 is inside a2.21's or a2.22's block, and both still hold what they applied", { skip: noLesson }, () => {
  for (const r of myRows()) {
    ok(!isA221(r.id), `${r.id} is inside a2.21's block`);
    ok(!isA222(r.id), `${r.id} is inside a2.22's block`);
  }
  strictEqual(seed.items.filter((i) => isA221(i.id)).length, 46, "a2.21's block");
  strictEqual(seed.items.filter((i) => isA222(i.id)).length, 31, "a2.22's block");
});

test('this lesson authors nothing in the routines theme', { skip: noLesson }, () => {
  for (const r of myRows()) ok(r.theme !== 'routines', `${r.id} is in the routines theme, which a1.25 owns`);
});

test('every respelling is clean through the real hasPlainNasalFor', { skip: noLesson }, () => {
  for (const r of myRows()) {
    ok(!hasPlainNasalFor(r.fr, r.respell ?? ''),
      `${r.id} « ${r.fr} » [${r.respell}] closes a nasal with a plain n or m`);
    ok(!(r.respell ?? '').includes('‿'), `${r.id} carries U+203F, which draws as an underscore on a Pixel 6`);
  }
});

/* THE FALSE POSITIVE, ASSERTED BY NAME AND IN THREE DIRECTIONS.
 *
 * a2.21 §3, and it is the most transferable thing that lesson found: every
 * respelling guard in this band asserts « must not be FLAGGED », and the
 * superscript form of a false positive is CLEAN AND WRONG, so it walks through
 * all of them. `sommes` is /sɔm/ with a real m and no nasal vowel in it, and the
 * repair is the doubled consonant invariants §3 prescribes for `automne`. */
test('« sommes » carries the doubled consonant by name, and the superscript form is clean AND wrong', { skip: noLesson }, () => {
  const ids = ['fr.a2.verbes.798', 'fr.a2.verbes.814', 'fr.a2.verbes.817', 'fr.a2.verbes.826'];
  for (const id of ids) {
    const row = byIdItem.get(id);
    ok(row, `${id} is not in the seed`);
    ok((row!.respell ?? '').includes('somm'), `${id} respells sommes as [${row!.respell}] and the fixed value is « somm »`);
    ok(!(row!.respell ?? '').includes('sohⁿm'), `${id} respells sommes with a superscript, which teaches a nasal the word has not got`);
  }
  const probe = byIdItem.get(ids[0]!)!;
  ok(hasPlainNasalFor(probe.fr, (probe.respell ?? '').replace('somm', 'sohm')),
    'the plain-h-m form is no longer flagged, so a2.21 §2\'s false positive has gone');
  ok(!hasPlainNasalFor(probe.fr, (probe.respell ?? '').replace('somm', 'sohⁿm')),
    'the superscript form is now flagged, which is the checker improving: the guard can go back to asking it');
  ok(!hasPlainNasalFor(probe.fr, probe.respell ?? ''), 'and the stored value is clean');
});

test("a1.03's ending population is untouched", { skip: noLesson }, () => {
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
    endingPopulation(seed.items).length,
    endingPopulation(seed.items.filter((i) => !isMine(i.id))).length,
    'a row this lesson owns is in a1.03\'s ending population',
  );
});

/* ══ LAYOUT 1: THE SLOT DIAGRAM ═════════════════════════════════════════ */

test('the six positions are in ONE section, built from a full negative, cell by cell', { skip: noLesson }, () => {
  const s = sec('s05-slots') as unknown as { type: string; cols: string[]; rows: { cells: string[]; say?: string }[] };
  ok(s, 's05-slots exists');
  strictEqual(s.type, 'tapTable',
    'a table at layer core is a table-in-core density failure, so the diagram is a three-column tapTable');
  strictEqual(s.cols.length, 3, 'the word needs a column of its own');
  strictEqual(s.rows.length, 6, 'six positions, and six is the Pixel 6 ceiling for a tapTable');
  /* CELL BY CELL. a2.21 §4.1: a `why` naming a word satisfies an assertion that
   * the word is ON A CARD, so read `rows[].cells`, never `strings(section)`. */
  for (const [i, want] of SLOTS.entries()) {
    const cells = s.rows[i]!.cells;
    strictEqual(cells.length, 3, `row ${i} is ragged`);
    strictEqual(cells[0], want.pos, `row ${i} column 0`);
    strictEqual(cells[1], want.word, `row ${i} column 1 is the word in position ${i}`);
    ok(cells[2] && cells[2].length > 4, `row ${i} does not say what « ${want.word} » is doing`);
    strictEqual(s.rows[i]!.say, SLOT_SENTENCE,
      `row ${i} does not speak the whole sentence; a word said on its own is not the word said in place`);
  }
  /* AND THE SIX POSITIONS ARE THE SENTENCE, WITH A NEGATIVE IN IT. */
  strictEqual(`${SLOTS.map((x) => x.word).join(' ')}.`, SLOT_SENTENCE);
  ok(/\bne\b/u.test(SLOT_SENTENCE) && /\bpas\b/u.test(SLOT_SENTENCE),
    'the brief requires all the positions WITH a full negative example');
  ok(seed.items.some((i) => i.fr === SLOT_SENTENCE), 'the slot sentence is not an authored row');
  /* THE CELL BUDGET, AND THE REASON v2 EXISTS. Every assertion above was true
   * in v1 while the diagram spanned two screens: height is invisible to all of
   * them and this is the nearest a host gate gets to seeing it. */
  for (const [i, row] of s.rows.entries()) {
    ok(row.cells[2]!.length <= SLOT_CELL_MAX,
      `slot ${i} has a ${row.cells[2]!.length}-character cell and the budget is ${SLOT_CELL_MAX}; over that it wraps past two lines and the six rows stop fitting one screen`);
  }
  /* AND THE CREDIT MOVED RATHER THAN BEING THROWN AWAY: the detail body still
   * names the lesson each position came from. */
  const details = s.rows.map((r) => (r as { detail?: { body?: string } }).detail?.body ?? '');
  ok(details.some((b) => namesUnit(b, 'a1.18')), 'the ne row no longer credits a1.18');
  ok(details.some((b) => namesUnit(b, 'a2.22')), 'the little-word row no longer credits a2.22');
  ok(details.some((b) => namesUnit(b, 'a2.21')), 'the ending row no longer credits a2.21');
});

test('every mission title fits the row, and the width model matches the device', { skip: noLesson }, () => {
  /* PROVED AGAINST THE DEVICE RATHER THAN ASSERTED. All four cases were
   * observed on a Pixel 6; a change to the model or the budget that stops
   * separating them has stopped describing the phone. */
  for (const s of TITLE_MUST_FIT) {
    ok(titleWidth(s) <= TITLE_WIDTH_MAX,
      `the model says « ${s} » clips at ${titleWidth(s)} em and it was MEASURED FITTING on a Pixel 6`);
  }
  for (const s of TITLE_MUST_CLIP) {
    ok(titleWidth(s) > TITLE_WIDTH_MAX,
      `the model says « ${s} » fits at ${titleWidth(s)} em and it was MEASURED CLIPPING on a Pixel 6`);
  }
  /* AND A CHARACTER COUNT CANNOT DO THIS JOB, which is the whole finding: the
   * 26-character title clipped and the 28-character one did not. */
  ok('Verbs You Were Never Shown'.length < 'Build It, One Word At A Time'.length,
    'the two calibration titles no longer demonstrate that the cut is a width rather than a count');
  for (const s of L!.sections) {
    const t = s.title ?? '';
    ok(titleWidth(t) <= TITLE_WIDTH_MAX,
      `${s.id}'s title « ${t} » is ${titleWidth(t)} em and the mission row cuts at ${TITLE_WIDTH_MAX}; it will ship ellipsised`);
  }
});

/* ══ LAYOUT 2: THE AUXILIARY FLIP, WHICH IS THE OWNS ════════════════════ */

test('the auxiliary flip puts avoir beside être on one card, three times', { skip: noLesson }, () => {
  const cards = (sec('s02-flip') as unknown as { cards: { fr: string }[] }).cards;
  ok(cards, 's02-flip exists');
  for (const [i, [a, e]] of FLIP_PAIRS.entries()) {
    ok(a !== e, `pair ${i} is the same string twice`);
    const on = cards.filter((c) => c.fr.includes(stop(a)) && c.fr.includes(stop(e)));
    strictEqual(on.length, 1, `s02-flip does not put « ${stop(a)} » beside « ${stop(e)} » on exactly one card`);
    /* AND THE avoir HALF COMES FIRST, because it is the sentence the learner
     * already owns and the one the error is derived from. */
    ok(on[0]!.fr.indexOf(stop(a)) < on[0]!.fr.indexOf(stop(e)),
      `pair ${i} puts être first, and the teaching runs the other way`);
  }
  /* AND BOTH HALVES ARE AUTHORED ROWS rather than strings typed on a card. */
  for (const [a, e] of FLIP_PAIRS) {
    ok(myRows().some((r) => r.fr === a), `« ${a} » is not an authored row`);
    ok(myRows().some((r) => r.fr === e), `« ${e} » is not an authored row`);
  }
});

/* ══ LAYOUT 3: THE EXCEPTION, NAMED AND NOT EXPLAINED ═══════════════════ */

test('the exception pair is on one card, both pairs, receptively', { skip: noLesson }, () => {
  const cards = (sec('s11-object') as unknown as { cards: { fr: string }[] }).cards;
  ok(cards, 's11-object exists');
  for (const [i, [agrees, doesNot]] of OBJECT_PAIR.entries()) {
    ok(agrees !== doesNot, `exception pair ${i} is the same string twice`);
    const on = cards.filter((c) => c.fr.includes(stop(agrees)) && c.fr.includes(stop(doesNot)));
    strictEqual(on.length, 1,
      `s11-object does not put « ${stop(agrees)} » beside « ${stop(doesNot)} » on one card; the brief requires the pair on one screen whichever option was taken`);
  }
  ok(ALL.some((s) => s.includes(OBJECT_CLAIM)), 'the exception is named nowhere');
  /* AND THE PUBLISHED CORROBORATION IS THERE, which is why option 1 was taken:
   * the corpus already ships this unagreed and the learner can already draw it. */
  const pub = byIdItem.get('fr.a2.corps.001');
  ok(pub, 'the published unagreed row is not in the seed');
  ok(pub!.fr.includes("s'est cassé le bras"), 'the published row no longer shows the exception');
  ok(!pub!.fr.includes("s'est cassée"), 'the published row now AGREES, so the whole reason for option 1 has changed');
  ok(display(sec('s11-object')).some((s) => s.includes(pub!.fr)), 's11-object does not show the published corroboration');
});

/* OPTION 1: THE PATTERN IS NAMED AND THE REASON IS NOT. Scoped WIDER than the
 * brief asked, to every surface, because half-explaining it on a reading card is
 * exactly how a2.24 loses its subject. */
test('the direct and indirect object distinction is explained NOWHERE', { skip: noLesson }, () => {
  for (const t of OBJECT_TERMS) {
    for (const s of ALL) {
      ok(!hasPhrase(s, t), `the object system is explained: « ${t} » in « ${s.slice(0, 90) }»`);
    }
  }
  ok(ALL.some((s) => namesUnit(s, 'a2.24')), 'a2.24 is named nowhere, so the exception is left to a lesson nobody is pointed at');
});

test('the exception is recognised and never produced', { skip: noLesson }, () => {
  const lines = ["Elle s'est lavé les mains.", "Elle s'est brossé les dents."];
  for (const line of lines) {
    const row = seed.items.find((i) => i.fr === line);
    ok(row, `${line} is not in the seed`);
    for (const d of ['flashcard', 'voiceflash', 'dictation']) {
      ok(!row!.drills.includes(d as never), `the exception carries the ${d} drill and it is receptive only`);
    }
    for (const id of PRODUCTION_SECTIONS) {
      const s = sec(id);
      if (!s) continue;
      for (const t of display(s)) ok(!t.includes(stop(line)), `the exception reaches ${id}: « ${t.slice(0, 90)} »`);
    }
    for (const d of L!.drills ?? []) {
      for (const t of display(d)) ok(!t.includes(stop(line)), `the exception reaches the drill ${d.id}`);
    }
  }
  /* RECOGNITION IS TESTABLE AND PRODUCTION IS NOT. `accept` is where a quiz
   * actually produces, so that is where the line falls. */
  for (const q of quizQuestions(sec('s23-quiz') as never)) {
    if (q.format !== 'typeIn' && q.format !== 'errorSpot') continue;
    for (const a of q.accept ?? []) {
      for (const line of lines) ok(!a.includes(stop(line)), `a typed question accepts the exception « ${a} »`);
    }
  }
  /* AND NOBODY AGREED IT, which is the case taught wrongly. */
  for (const s of ALL) {
    for (const bad of ["s'est lavée les mains", "s'est brossée les dents", "me suis lavée les mains"]) {
      ok(!s.toLowerCase().includes(bad.toLowerCase()), `the exception is agreed: « ${bad} »`);
    }
  }
});

/* ══ AVOIR IS NEVER THE FIRST WORD OF A REFLEXIVE ═══════════════════════ */

test('avoir never fronts a reflexive except where the lesson shows it as the error', { skip: noLesson }, () => {
  const CLITIC = "(me|m'|m’|te|t'|t’|se|s'|s’|nous|vous)";
  const AVOIR = '(ai|as|a|avons|avez|ont)';
  const RE = new RegExp(`(?<![\\p{L}\\p{N}-])(je|j'|j’|tu|il|elle|on|nous|vous|ils|elles)\\s*${CLITIC}\\s*${AVOIR}(?![\\p{L}\\p{N}'’-])`, 'iu');
  const BUILT = ["je m'ai", "j'ai me", "tu t'as", "il s'a", "elle s'a", "ils s'ont", 'nous nous avons', 'suis me levé'];
  const bad = (s: string) => RE.test(s) || BUILT.some((b) => hasPhrase(s, b));
  /* PROVED TO FIRE, over a lesson made entirely of pronouns beside auxiliaries. */
  ok(bad(AVOIR_TRAP), 'the avoir guard does not fire on the error the lesson exists to prevent');
  ok(bad("Tu t'as levé."), 'the avoir guard does not see an elided pronoun');
  ok(bad('Nous nous avons levés.'), 'the avoir guard does not see the doubled person');
  /* AND PROVED NOT TO. Corrections §14.4: a shape built from French morphology
   * reads the English half of a card as French. */
  ok(!bad('You did not stall ON A WORD YOU had not learned.'), 'the avoir guard fires on the English sentence that broke a2.17');
  ok(!bad('Je me suis levé.'), 'the avoir guard fires on the sentence this lesson teaches');
  ok(!bad("J'ai lavé la voiture."), 'the avoir guard fires on the legitimate avoir half of the flip');
  ok(!bad("Ce matin, je me suis réveillé tôt, puis j'ai pris une douche."),
    'the avoir guard fires on the published sentence carrying both first words');
  ok(!bad(NEGATION_RULE) && !bad(AGREEMENT_RULE), 'the avoir guard fires on an inherited line');
  /* AND IT IS CLEAN EVERYWHERE BUT THE THREE PLACES. */
  for (const s of L!.sections) {
    if (WRONG_FORM_SECTIONS.includes(s.id!)) continue;
    for (const t of display(s)) ok(!bad(t), `${s.id} uses avoir with a little word: « ${t.slice(0, 100)} »`);
  }
  for (const r of myRows()) ok(!bad(r.fr), `${r.id} « ${r.fr} » puts avoir in front of a little word`);
  /* AND THE TRAP DOES SHOW IT, or the lesson never names its own error. */
  ok(display(sec('s15-wrap')).some((t) => t.includes(AVOIR_TRAP)), `s15-wrap does not show « ${AVOIR_TRAP} »`);
  ok(display(sec('s16-errors')).some((t) => t.includes(AVOIR_TRAP)), `s16-errors does not show « ${AVOIR_TRAP} »`);
});

/* ══ THE INHERITED LINES ════════════════════════════════════════════════ */

test("a2.21's agreement rule is quoted VERBATIM, and it is the string a2.21 shipped", { skip: noLesson }, () => {
  ok(RAW.filter((s) => s.includes(AGREEMENT_RULE)).length >= 4,
    "a2.21's agreement rule is quoted fewer than four times and it is this lesson's inherited contract");
  const a221 = seed.lessons.find((l) => l.id === 'a2.21.l1');
  if (a221) {
    const theirs = [...display(a221.sections), ...display(a221.sheets ?? []), ...display(a221.terms ?? {})];
    ok(theirs.some((s) => s.includes(AGREEMENT_RULE)),
      'a2.21 as shipped does not carry the agreement rule this lesson quotes, so the string is a paraphrase');
    strictEqual(a221.reframe, A221_REFRAME, "read off a2.21 as shipped, not from this build's own constant");
  }
});

test("a2.01's reframe is quoted, through a2.21, because it is why nothing here can be heard", { skip: noLesson }, () => {
  ok(RAW.filter((s) => s.includes(A201_REFRAME)).length >= 2, "a2.01's reframe is quoted fewer than twice");
  const a201 = seed.lessons.find((l) => l.id === 'a2.01.l1');
  if (a201) strictEqual(a201.reframe, A201_REFRAME, 'read off a2.01 as shipped');
  const a221 = seed.lessons.find((l) => l.id === 'a2.21.l1');
  if (a221) {
    ok(display(a221.sections).some((s) => s.includes(A201_REFRAME)),
      'a2.21 does not quote a2.01, so this lesson is not quoting the same string it did and the brief asked for one version');
  }
  ok(display(sec('s09-silent')).some((s) => namesUnit(s, 'a2.01')), 's09-silent does not credit a2.01');
});

test("a2.22's reframe and its clean background are both quoted as shipped", { skip: noLesson }, () => {
  ok(ALL.some((s) => s.includes(A222_REFRAME)), "a2.22's reframe is quoted nowhere");
  ok(ALL.some((s) => s.includes(PRESENT_NO_AGREEMENT)),
    'a2.22 worded its present-tense framing so this lesson could quote it, and it reaches no screen');
  const a222 = seed.lessons.find((l) => l.id === 'a2.22.l1');
  if (a222) {
    strictEqual(a222.reframe, A222_REFRAME, 'read off a2.22 as shipped');
    ok(display(a222.sections).some((s) => s.includes(PRESENT_NO_AGREEMENT)),
      'the background sentence this lesson quotes is not the one a2.22 shipped');
  }
});

/* THE FINDING THIS LESSON WAS ASKED TO MAKE. The brief says the negation wording
 * is « the same string as a2.19 / a2.05 / a2.21 / a2.22. Five lessons, one rule.
 * Assert it. » Measured: THE ARC HOLDS TWO STRINGS. a1.18 has its own and the
 * four A2 lessons share a2.19's, and neither has drifted in five lessons. Both
 * halves are asserted, including the NEGATIVE that they are not the same. */
test('the negation arc is TWO strings, both quoted, and neither has drifted', { skip: noLesson }, () => {
  ok(A118_REFRAME !== NEGATION_RULE, 'the two negation strings are now identical, which would mean somebody reworded one');
  ok(RAW.some((s) => s.includes(A118_REFRAME)), "a1.18's line is quoted nowhere, and it is the first of the two");
  ok(RAW.filter((s) => s.includes(NEGATION_RULE)).length >= 3, "a2.19's line is quoted fewer than three times and this is the fifth lesson to carry it");
  ok(RAW.filter((s) => s.includes(NEGATION_EXTENSION)).length >= 3, "a2.22's extension is quoted fewer than three times");
  ok(RAW.filter((s) => s.includes(NEGATION_OUTSIDE)).length >= 4,
    'the third negation sentence is authored fewer than four times, and it is what stops the inherited pair producing « Je ne me suis levé pas. »');
  /* AND BOTH ARE THE STRINGS THEIR OWN LESSONS SHIPPED. */
  const a118 = seed.lessons.find((l) => l.id === 'a1.18.l1');
  const a219 = seed.lessons.find((l) => l.id === 'a2.19.l1');
  if (a118) strictEqual(a118.reframe, A118_REFRAME, "a1.18's reframe IS the line, read off the seed");
  if (a219) strictEqual(a219.reframe, NEGATION_RULE, "a2.19's reframe IS the line, read off the seed");
  for (const id of ['a2.05.l1', 'a2.21.l1', 'a2.22.l1']) {
    const n = seed.lessons.find((l) => l.id === id);
    if (!n) continue;
    ok([...display(n.sections), n.reframe ?? ''].some((s) => s.includes(NEGATION_RULE)),
      `${id} does not carry « ${NEGATION_RULE} », so the four A2 lessons are no longer one string`);
  }
});

test('the wrap error is shown as an error and nowhere a learner could take it for correct', { skip: noLesson }, () => {
  ok(display(sec('s15-wrap')).some((s) => s.includes(WRAP_TRAP)) || display(sec('s16-errors')).some((s) => s.includes(WRAP_TRAP)),
    `neither the trap nor the errors card shows « ${WRAP_TRAP} »`);
  for (const s of L!.sections) {
    if (WRONG_FORM_SECTIONS.includes(s.id!)) continue;
    ok(!display(s).some((t) => t.includes(WRAP_TRAP)), `${s.id} carries « ${WRAP_TRAP} » outside the three allowed places`);
    ok(!display(s).some((t) => t.includes(POSITION_TRAP)), `${s.id} carries « ${POSITION_TRAP} » outside the three allowed places`);
  }
});

/* ══ THE RECIPROCAL AND THE IMPERFECT ═══════════════════════════════════ */

test('no reciprocal and no imperfect appears anywhere', { skip: noLesson }, () => {
  /* PROVED TO FIRE, AND PROVED NOT TO. The first version of the reciprocal list
   * held the bare phrase « each other » and refused an audio brief saying « the
   * two sit against each other », which is corrections §14.4 running the other
   * way round: a marker built from an ENGLISH GLOSS firing on ordinary English. */
  const fires = (s: string) => RECIPROCAL_MARKERS.some((m) => hasPhrase(s, m));
  ok(fires('Ils se sont parlé tous les jours.'), 'the reciprocal guard does not fire on a reciprocal');
  ok(fires('They talked to each other every day.'), 'the reciprocal guard does not see the English gloss');
  ok(!fires('The pair is the teaching and it works when the two sit against each other.'),
    'the reciprocal guard fires on ordinary English prose, which is the shape that broke its first version');
  ok(!fires('Ils se sont levés tôt.'), 'the reciprocal guard fires on a plain reflexive past');

  for (const s of ALL) {
    for (const m of RECIPROCAL_MARKERS) ok(!hasPhrase(s, m), `a reciprocal reaches a learner surface: « ${m} » in « ${s.slice(0, 80)} »`);
    for (const m of IMPERFECT_MARKERS) ok(!hasPhrase(s, m), `the imperfect reaches a learner surface: « ${m} » in « ${s.slice(0, 80)} »`);
  }
  for (const r of myRows()) {
    for (const m of [...RECIPROCAL_MARKERS, ...IMPERFECT_MARKERS]) ok(!hasPhrase(r.fr, m), `${r.id} « ${r.fr} » carries « ${m} »`);
  }
});

/* ══ WHAT THE APP CAN AND CANNOT TEST ═══════════════════════════════════ */

/* UNUSUAL FOR THIS BAND, AND IT IS WHY THE QUIZ LOOKS THE WAY IT DOES.
 * `fold()` strips every accent, so most A2 spelling distinctions cannot be
 * typed — and it KEEPS a final -e and -s, so agreement can be. */
test('all four cells stay distinct under the real fold, which is what makes agreement typeable', { skip: noLesson }, () => {
  const forms = CELLS.map((c) => c.fr);
  for (let i = 0; i < forms.length; i += 1) {
    for (let j = i + 1; j < forms.length; j += 1) {
      ok(fold(forms[i]!) !== fold(forms[j]!), `fold cannot separate « ${forms[i]} » from « ${forms[j]} »`);
    }
  }
  /* AND EVERY PIECE OF THE COMPOSITION IS TYPEABLE. */
  ok(fold('Je me suis levé.') !== fold("J'ai levé."), 'the dropped little word would be accepted');
  ok(fold('Je me suis levé.') !== fold(AVOIR_TRAP), 'the avoir error would be accepted');
  ok(fold('Je me suis levé.') !== fold(POSITION_TRAP), 'the position error would be accepted');
  ok(fold(SLOT_SENTENCE) !== fold(WRAP_TRAP), 'the wrap error would be accepted');
  ok(fold("Elle s'est lavée.") !== fold("Elle s'est lavé les mains."), 'the exception would be indistinguishable');
});

/* AND THE ONE THING IT CANNOT. Every scored item turns on the letters AFTER the
 * é, never on the é itself. If this ever stops holding, the corpus header's §7
 * needs re-reading. */
test('fold strips the é of the second word, so no question may turn on it', { skip: noLesson }, () => {
  strictEqual(fold('Je me suis levé.'), fold('Je me suis leve.'),
    'fold now separates the accent, so §7 of the corpus header is stale');
  ok(fold("Elle s'est levée.") !== fold("Elle s'est levé."),
    'fold no longer keeps the final -e, and the whole quiz depends on it');
});

test('every dictée target is in LETTERS mode, carries the drill, and the endings are covered', { skip: noLesson }, () => {
  const d = sec('s18-dictation') as unknown as { itemIds: string[] };
  ok(d, 's18-dictation exists');
  strictEqual(d.itemIds.length, 13, 'the dictée is the heaviest production section because the ending is inaudible');
  for (const id of d.itemIds) {
    const row = byIdItem.get(id);
    ok(row, `the dictée targets ${id}, which is not in the seed`);
    strictEqual(dicteeMode(row!.fr), 'letters',
      `« ${row!.fr} » goes to WORD mode, which hands every real word over pre-spelled`);
    ok(row!.drills.includes('dictation'), `${id} is a dictée target with no dictation drill`);
  }
  /* AND EVERY ROW CARRYING THE DRILL IS TARGETED, so no dead dictation row. */
  const carriers = myRows().filter((r) => r.drills.includes('dictation')).map((r) => r.id);
  deepStrictEqual([...carriers].sort(), [...d.itemIds].sort());
  /* AND THE THREE ENDINGS IT CAN REACH ARE ALL THERE. The fourth, « -ées », is
   * seventeen letters in every frame this lesson has and cannot be dictated;
   * that is declared in DICTEE_TOO_LONG rather than hidden. */
  const frs = d.itemIds.map((id) => byIdItem.get(id)!.fr);
  ok(frs.some((f) => /é\.$/u.test(f)), 'the dictée asks for no bare ending');
  ok(frs.some((f) => /ée\.$/u.test(f)), 'the dictée asks for no -e ending, and it is the commonest one');
  ok(frs.some((f) => /és\.$/u.test(f)), 'the dictée asks for no -s ending');
  strictEqual(dicteeMode('Elles se sont lavées.'), 'words',
    'the fourth cell now fits the dictée, so the cost this build declared has gone away');
});

test('no ear question separates two options that are one sound', { skip: noLesson }, () => {
  /* §7: the ending is inaudible on EVERY verb in this lesson without exception,
   * so this list is longer than any earlier lesson's. a2.21 §10 handed that
   * forward: its own audible feminine was `mourir` and no reflexive has one. */
  const GROUPS = [
    ["Il s'est lavé.", 'Ils se sont lavés.'],
    ["Elle s'est lavée.", 'Elles se sont lavées.'],
    ["Il s'est levé tôt.", 'Ils se sont levés tôt.'],
    ["Il s'est douché.", 'Ils se sont douchés.'],
    ["Elle s'est levée.", "Elle s'est lavée.", "Elle s'est lavé les mains."],
    ["Il ne s'est pas levé.", 'Ils ne se sont pas levés.'],
  ];
  const qs = quizQuestions(sec('s23-quiz') as never);
  let ear = 0;
  for (const q of qs) {
    if (q.format !== 'listenChoose' || !q.opts) continue;
    ear += 1;
    for (const g of GROUPS) {
      ok(q.opts.filter((o) => g.includes(o)).length <= 1,
        `an ear question offers two options that are one sound: ${q.q}`);
    }
  }
  ok(ear > 0, 'no ear question at all, so this assertion guards nothing');
});

/* ══ THE EXAM ═══════════════════════════════════════════════════════════ */

test('30 questions, at most half mcq, every one with a why and a resolving ref', { skip: noLesson }, () => {
  const qs = quizQuestions(sec('s23-quiz') as never);
  strictEqual(qs.length, 30);
  const mcq = qs.filter((q) => q.format === 'mcq').length;
  ok(mcq <= qs.length / 2, `${mcq} of ${qs.length} are mcq`);
  const ids = new Set(L!.sections.map((s) => s.id));
  for (const q of qs) {
    ok(q.why, `no why: ${q.q}`);
    ok(q.ref && ids.has(q.ref), `ref ${q.ref} is not a section: ${q.q}`);
  }
  /* THE BRIEF: typeIn for the whole form is the only format that tests
   * composition, and every recognition format tests one piece. */
  const typed = qs.filter((q) => q.format === 'typeIn' || q.format === 'errorSpot').length;
  ok(typed >= 14, `only ${typed} typed questions, and composition is the whole claim of this lesson`);
});

/* FOUND BY MUTATION IN a2.22, AND EVERY LESSON FROM a2.01 TO a2.21 CARRIES THE
 * HOLE. The guard the band runs is `for (const a of q.accept) matchesAccept(a,
 * q.accept)`, which asks whether the accept list accepts ITSELF. It is a
 * tautology and cannot fail for any value. The check with content is that a
 * multi-word answer is a sentence THIS LESSON OWNS. */
test('every free-text answer is a sentence this lesson owns, not merely one its own list accepts', { skip: noLesson }, () => {
  const answerable = new Set<string>([...myRows().map((r) => r.fr), 'Je me suis levé.']);
  let checked = 0;
  for (const q of quizQuestions(sec('s23-quiz') as never)) {
    if (!q.accept) continue;
    for (const a of q.accept) {
      ok(matchesAccept(a, q.accept), `« ${a} » is not accepted by its own accept list`);
      if (!/\s/u.test(a)) continue;
      checked += 1;
      ok(answerable.has(a), `« ${a} » is offered as a free-text answer and is not a sentence this lesson owns`);
    }
    const shown = (q as { answer?: string }).answer;
    if (shown) ok(matchesAccept(shown, q.accept), `the displayed answer « ${shown} » is not accepted`);
  }
  ok(checked >= 12, `only ${checked} multi-word answers were checked, so this assertion guards almost nothing`);
});

test('every produced question names a subject, because three decisions depend on it', { skip: noLesson }, () => {
  const RE = /(?<![\p{L}\p{N}-])(je|j'|j’|tu|il|elle|on|nous|vous|ils|elles|speaking to|she|he|they|you|i)(?![\p{L}\p{N}'’-])/iu;
  for (const q of quizQuestions(sec('s23-quiz') as never)) {
    if (q.format !== 'typeIn' && q.format !== 'errorSpot') continue;
    ok(RE.test(`${q.q} ${(q.accept ?? []).join(' ')}`), `no subject: ${q.q}`);
  }
});

/* ══ REACHABILITY AND HOUSE COPY ════════════════════════════════════════ */

test('every itemId resolves, every owned item is released exactly once', { skip: noLesson }, () => {
  const named = new Set<string>();
  const walk = (o: unknown): void => {
    if (!o || typeof o !== 'object') return;
    if (Array.isArray(o)) { o.forEach(walk); return; }
    const r = o as Record<string, unknown>;
    if (Array.isArray(r.itemIds)) r.itemIds.forEach((i) => named.add(String(i)));
    if (typeof r.practiceOn === 'string') named.add(r.practiceOn);
    Object.values(r).forEach(walk);
  };
  walk(L!.sections);
  for (const id of named) ok(byIdItem.has(id), `a section names ${id}, which is not in the seed`);
  const tranche = (L!.deckTranche ?? []).flat();
  strictEqual(new Set(tranche).size, tranche.length, 'an item is released by two tranches');
  deepStrictEqual([...tranche].sort(), [...(L!.itemIds ?? [])].sort(), 'itemIds and the tranche union disagree');
  strictEqual((L!.deckTranche ?? []).length, 6, 'one tranche per act');
});

test('every verb the lesson names is an IMPORTED id, asserted by id', { skip: noLesson }, () => {
  const owned = new Set(L!.itemIds ?? []);
  for (const id of [...IMPORTED_HEADWORDS, ...IMPORTED_SENTENCES]) {
    ok(byIdItem.has(id), `${id} does not resolve in the seed, so its card draws blank`);
    ok(!isMine(id), `${id} is inside this lesson's own block, so it was authored rather than imported`);
    ok(owned.has(id), `${id} is an import the lesson does not own`);
  }
  for (const id of IMPORTED_HEADWORDS) {
    ok(byIdItem.get(id)!.kind !== 'sentence', `${id} is claimed as a headword and is a sentence`);
  }
  /* AND NO VOCABULARY SECTION EXISTS: a1.25 owns the routine theme. */
  for (const s of L!.sections) ok(s.type !== 'vocabThemes', `${s.id} is a vocabThemes section`);
  for (const r of myRows()) ok(r.theme !== 'routines', `${r.id} is authored into a1.25's theme`);
});

test('no duplicate fr among non-sentence rows in the theme', { skip: noLesson }, () => {
  const strip = (s: string) => s.replace(/^(le |la |les |l'|l’|un |une |des |du |de la )/i, '').toLowerCase().trim();
  const byFr = new Map<string, string[]>();
  for (const i of seed.items) {
    if (i.theme !== THEME || i.kind === 'sentence') continue;
    byFr.set(strip(i.fr), [...(byFr.get(strip(i.fr)) ?? []), i.id]);
  }
  const dupes = [...byFr.entries()].filter(([, ids]) => ids.length > 1);
  strictEqual(dupes.length, 0, dupes.map(([k, ids]) => `${k}: ${ids.join(', ')}`).join('; '));
});

test('no em dash, no banned word, no doubled stop, and no grammar jargon', { skip: noLesson }, () => {
  const JARGON = [
    'past participle', 'participle', 'auxiliary', 'compound tense', 'perfect tense',
    'reflexive pronoun', 'reflexive verb', 'pronominal verb', 'clitic', 'paradigm',
    'first person', 'second person', 'third person', 'valency', 'transitive',
    'intransitive', 'reciprocal', 'morpheme', 'orthographic', 'imperfect',
  ];
  /* THE UNIT'S OWN ENGLISH TITLE IS THE ONE EXEMPTION, AND IT IS NARROW.
   * `content_units` requires `overview.titleEn` to be the unit's English name
   * and a2.23's is « Pronominal Verbs in the Passé Composé ». a2.17 §5 says to
   * guard the RATIO so that field can stay what the database says it is, and
   * that answer works when the technical word is avoidable elsewhere. It is not
   * here: the phrase is unambiguously jargon on a card and contractually fixed
   * in that one field. So the exemption is ONE STRING, checked to BE the unit's
   * title, and every other occurrence still fails. */
  const unit = seed.units.find((x) => x.id === 'a2.23')!;
  const titleEn = (L!.overview as { titleEn?: string } | undefined)?.titleEn ?? '';
  strictEqual(titleEn, unit.title, 'the jargon exemption is only defensible while overview.titleEn IS the unit title');
  for (const s of ALL) {
    ok(!/[—–]/u.test(s), `em dash: « ${s.slice(0, 80)} »`);
    ok(!/\bhonest/i.test(s), `banned word: « ${s.slice(0, 80)} »`);
    /* a2.20 found the `..` half on a Pixel 6 and a2.22 §4 found the rest: the
     * general defect is a sentence-final stop with punctuation after it. a2.22
     * §10 asked the next build to widen this BEFORE authoring, and it did. */
    ok(!/(?<!\.)\.[.,;:](?!\.)/u.test(s), `a sentence-final stop with punctuation after it: « ${s.slice(0, 80)} »`);
    if (s === titleEn) continue;
    for (const j of JARGON) {
      ok(!hasPhrase(s, j), `jargon « ${j} »: « ${s.slice(0, 80)} »`);
      ok(!hasPhrase(s, `${j}s`), `jargon « ${j}s »: « ${s.slice(0, 80)} »`);
    }
  }
  /* AND THE EXEMPTION IS NOT A LOOPHOLE. */
  const elsewhere = ALL.filter((s) => s !== titleEn && (hasPhrase(s, 'pronominal verb') || hasPhrase(s, 'pronominal verbs')));
  strictEqual(elsewhere.length, 0, `« pronominal verb » is exempt only inside the title and also appears in: « ${elsewhere[0]?.slice(0, 80)} »`);
});

test('the plain phrase outnumbers the technical one', { skip: noLesson }, () => {
  const hay = ALL.join('\n').toLowerCase();
  const count = (n: string) => hay.split(n).length - 1;
  ok(count('first word') > count('auxiliary'), 'a2.17 §5: the house prefers the plain phrase');
  ok(count('second word') > count('participle'), 'a2.17 §5: the house prefers the plain phrase');
  ok(count('little word') > count('pronoun'), 'a2.17 §5: the house prefers the plain phrase');
});

test('the reframe is authored exactly 9 times, verbatim', { skip: noLesson }, () => {
  strictEqual(RAW.filter((s) => s.includes(REFRAME)).length, REFRAME_COUNT);
  strictEqual(L!.reframe, REFRAME, 'a paraphrase of the reframe must go red');
  /* AND THE ONE NEW FACT IS ON A SCREEN, because it is what the reframe is a
   * procedure for and the roundup's whole claim. */
  ok(RAW.filter((s) => s.includes(THE_NEW_FACT)).length >= 4, 'the one new fact is authored fewer than four times');
});

test('three term chips per section at most, and every term is surfaced', { skip: noLesson }, () => {
  const terms = L!.terms ?? {};
  const used = new Set<string>();
  for (const s of L!.sections) {
    const chips = (s as { terms?: string[] }).terms ?? [];
    ok(chips.length <= 3, `${s.id} declares ${chips.length} chips and the renderer shows three`);
    for (const c of chips) { ok(terms[c], `${s.id} names the undefined term "${c}"`); used.add(c); }
    const width = chips.reduce((n, c) => n + (terms[c]?.term.length ?? 0), 0) + Math.max(0, chips.length - 1) * 3;
    ok(width <= 37, `${s.id}'s chip row is ${width} characters and the Pixel 6 budget is 37`);
  }
  for (const k of Object.keys(terms)) ok(used.has(k), `the term "${k}" is defined and surfaced by no section`);
});

test('ONE table, in the sheet, and none in the flow', { skip: noLesson }, () => {
  const sheets = L!.sheets ?? [];
  strictEqual(sheets.length, 1);
  const blocks = sheets[0]!.sections ?? [];
  for (const b of blocks) {
    ok(['teach', 'letterGrid', 'table'].includes(b.type),
      `the sheet holds a ${b.type} block and ReferenceSheet.tsx draws only teach, letterGrid and table`);
  }
  const tables = blocks.filter((b) => b.type === 'table');
  strictEqual(tables.length, 1, 'the brief asks for one table and restraint matters most in the fourth compound-tense lesson in five');
  const table = tables[0] as unknown as { cols: string[]; rows: string[][] };
  strictEqual(table.rows.length, 6);
  for (const [i, want] of SLOTS.entries()) {
    strictEqual(table.rows[i]![0], want.pos);
    strictEqual(table.rows[i]![1], want.word);
  }
  /* AND NO `table` IS IN THE FLOW, which is a table-in-core density failure. */
  for (const s of L!.sections) ok(s.type !== 'table', `${s.id} is a table at layer core`);
  /* AND THE SHEET IS REACHABLE. */
  const named = new Set(L!.sections.map((s) => (s as { sheetId?: string }).sheetId).filter(Boolean));
  ok(named.has(sheets[0]!.id), 'the sheet is declared and reachable from no section');
});

test('the four cells and the six persons are each on one screen', { skip: noLesson }, () => {
  const cellSurface = display(sec('s08-agreement')).join('\n');
  for (const c of CELLS) ok(cellSurface.includes(c.fr), `s08-agreement does not carry « ${c.fr} »`);
  ok(cellSurface.includes('Elle a lavé la voiture.'),
    's08-agreement does not carry the avoir half, and without it the rule has no contrast');
  const personSurface = display(sec('s06-persons')).join('\n');
  for (const p of PERSONS) ok(personSurface.includes(stop(p)), `s06-persons does not carry « ${p} »`);
});

test('no scene bubble carries an exclamation mark', { skip: noLesson }, () => {
  const scene = sec('s01-scene') as unknown as { beats: { kind: string; fr?: string }[] };
  ok(scene, 's01-scene exists');
  for (const b of scene.beats) {
    if (b.kind !== 'bubble') continue;
    ok(!b.fr!.includes('!'), `« ${b.fr} » clips on a Pixel 6 (a2.05 §11.2)`);
  }
});

test('the role play gives every turn two alternatives and a userEn', { skip: noLesson }, () => {
  const t = sec('s19-talk') as unknown as { turns: { user: string; userEn?: string; alts?: { fr: string; en: string }[] }[] };
  ok(t, 's19-talk exists');
  strictEqual(t.turns.length, 5);
  for (const [i, turn] of t.turns.entries()) {
    ok(turn.userEn, `turn ${i} has no userEn`);
    strictEqual((turn.alts ?? []).length, 2, `turn ${i} has ${(turn.alts ?? []).length} alternatives`);
    for (const a of turn.alts ?? []) ok(a.fr !== turn.user, `turn ${i} offers its own answer as an alternative`);
  }
});

test('the trapDrill walks rule, cards, audio, drill, and its recording holds its own lines', { skip: noLesson }, () => {
  const t = sec('s15-wrap') as unknown as {
    steps?: { kind: string; gate?: boolean }[]; swipe?: boolean; size?: string;
    audio?: { recordingId?: string }; cards: { fr: string }[]; rule?: unknown;
  };
  strictEqual((t.steps ?? []).map((s) => s.kind).join('>'), 'rule>cards>audio>drill');
  strictEqual(t.swipe, true, 'without swipe the pager hands this a scrolling page');
  ok(!t.size, 'size comes OFF a stepped trapDrill');
  ok(t.rule, 'the trapDrill has no rule block and its first step is a rule');
  ok((t.steps ?? []).some((s) => s.kind === 'drill' && s.gate === true), 'the drill step is not gated');
  const rec = (L!.audio?.recorded ?? []).find((r) => r.id === t.audio?.recordingId);
  ok(rec, 'the trapDrill names a recording the lesson does not declare');
  for (const c of t.cards) {
    ok((rec!.clipIds ?? []).includes(c.fr), `the recording does not contain « ${c.fr} », which its own card plays`);
  }
  strictEqual(t.cards[0]!.fr, AVOIR_TRAP, 'the trap does not open on the error it exists to prevent');
});

test('each drill is the first resolving target of some round', { skip: noLesson }, () => {
  const trigger = new Map((L!.errorTriggers ?? []).map((x) => [x.id, x.drill] as const));
  const rounds = (sec('s23-quiz') as unknown as { rounds: { id: string; targets?: string[] }[] }).rounds;
  const fired = new Set<string>();
  for (const r of rounds) {
    const first = (r.targets ?? []).find((x) => trigger.has(x));
    ok(first, `round ${r.id} names no target that resolves to a drill`);
    fired.add(trigger.get(first!)!);
  }
  for (const d of L!.drills ?? []) {
    if (d.id.startsWith('retest-')) continue;
    ok(fired.has(d.id), `${d.id} is the first resolving target of no round, so it is dead content`);
  }
});
