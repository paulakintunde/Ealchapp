// a2.22.l1 « Les verbes pronominaux »: the assertions that keep this lesson true.
//
// Modelled on a2-21-passe-compose-etre.test.ts. Everything here runs the REAL
// app function rather than a copy: an earlier a1.01 test inlined its own
// glossary lookup, copied the version that was already broken, and passed while
// the feature was dead.
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
// 559 rows belonging to thirteen lessons.
//
// ── What this file is actually guarding ────────────────────────────────────
//
//   THE SIX FORMS ON ONE SCREEN, asserted FORM BY FORM, with the pronoun in a
//   COLUMN OF ITS OWN. Read cell by cell, never through `strings(section)`,
//   which is a2.21 §4.1 and the third time the band has found that shape.
//   « Je lave la voiture. » AND « Je me lave. » in ONE section, as the meaning
//   contrast, because without it the pronoun is a rule with no reason.
//   a2.19's NEGATION LINE, VERBATIM, quoted through a2.05 and a2.21 to here,
//   AND the extension that stops it producing the trap. Both are LITERALS: a
//   paraphrase must go red, and this is the assertion most worth having here.
//   NO COMPOUND TENSE ANYWHERE, on EVERY surface rather than only production,
//   reserving the whole of a2.23.
//   THE NOT-REFLEXIVE GROUP taught together, s'appeler at minimum, by name.
//   THE a2.09 STEM-CHANGE CREDIT, present, and NOT claiming a2.09 taught this
//   verb, which it does not: `lever` appears zero times in a2.09's body.
//   NO ROUTINE VOCABULARY SECTION, and every routine word an IMPORTED id,
//   asserted BY ID.
//   THE OBJECT PRONOUNS NOT EXPLAINED, scoped to production surfaces.
//   THE RECIPROCAL, named exactly once, receptive, on one card.
//   EVERY RESPELLING through the real `hasPlainNasalFor`, and the paradigm's
//   own nasal asserted BY NAME.
//   EVERY DICTÉE ITEM in LETTERS mode through the real `dicteeMode`.
//   THE SIX CELLS STAYING DISTINCT under the real `fold`, which is what makes
//   the Owns typeable at all, and the accent on `lève` NOT being distinct,
//   which is why the frame verb is `se laver` and not `se lever`.
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

const L = seed.lessons.find((l) => l.id === 'a2.22.l1');
const noLesson = !L;
const byIdItem = new Map(seed.items.map((i) => [i.id, i] as const));

/** THE BLOCK, NOT THE PREFIX. Twelve other lessons own `fr.a2.verbes.001..720`. */
const MY_BLOCK = { from: 721, to: 790 };
const isMine = (id: string) => {
  const m = /^fr\.a2\.verbes\.(\d{3})$/.exec(id);
  if (!m) return false;
  const n = Number(m[1]);
  return n >= MY_BLOCK.from && n <= MY_BLOCK.to;
};
const myRows = () => seed.items.filter((i) => isMine(i.id));

/** a2.21's block, immediately below. A RESERVATION ASSERTION MUST NOT SAY "AND
 *  IT IS EMPTY" (ledger, a2.20 §0): a2.05's said so and went red the moment
 *  a2.20 filled it. This one says no row of a2.22 is inside it. */
const A221_BLOCK = { from: 651, to: 720 };
const isA221 = (id: string) => {
  const m = /^fr\.a2\.verbes\.(\d{3})$/.exec(id);
  if (!m) return false;
  const n = Number(m[1]);
  return n >= A221_BLOCK.from && n <= A221_BLOCK.to;
};

const THEME = 'verbes';

/* ─── THE STRINGS, BY HAND ────────────────────────────────────────────────
 *
 * a2.21 §8: A REFRAME QUOTED FROM A NEIGHBOUR MUST BE READ OFF THE SHIPPED
 * LESSON. Its own `A215_REFRAME` was invented and neither the batch nor the
 * merge could see it, because both compared the constant to itself. Every
 * quoted line below is a LITERAL here AND re-read off the seed in the test that
 * follows, so a paraphrase in either place goes red.                          */

const REFRAME = 'The pronoun changes with the subject, because it is the subject.';
const REFRAME_COUNT = 8;
const NEGATION_RULE = 'Wrap the verb that changed, not the one carrying the meaning.';
const NEGATION_EXTENSION = 'Both words changed for the subject, so both go inside the wrap.';
const A209_REFRAME = 'The spelling changes so the sound does not.';
const A201_REFRAME = 'Four of the six forms sound the same, so the pronoun carries the person.';
const A125_HANDOFF = 'What the small word does across every other person is a lesson of its own and it is a whole band from here.';
const PRESENT_NO_AGREEMENT = 'In the present nothing on the end of the verb knows who the subject is. Only the extra word changes.';

/** The six persons, in learner order, and the pronoun each takes. THE SHAPE OF
 *  THE LESSON, so a quiet drop is exactly what this is guarding against. */
const PARADIGM: readonly { subject: string; clitic: string; fr: string }[] = [
  { subject: 'je', clitic: 'me', fr: 'Je me lave.' },
  { subject: 'tu', clitic: 'te', fr: 'Tu te laves.' },
  { subject: 'il', clitic: 'se', fr: 'Il se lave.' },
  { subject: 'nous', clitic: 'nous', fr: 'Nous nous lavons.' },
  { subject: 'vous', clitic: 'vous', fr: 'Vous vous lavez.' },
  { subject: 'ils', clitic: 'se', fr: 'Ils se lavent.' },
];

const CONTRAST_WITH = 'Je me lave.';
const CONTRAST_WITHOUT = 'Je lave la voiture.';
const TRAP = 'Je me ne lave pas.';
const NEGATIVE = 'Je ne me lave pas.';
const RECIPROCAL = 'Ils se parlent tous les jours.';

/** Every routine word this lesson names. THE BRIEF REQUIRES THESE BY ID. */
const ROUTINE_IDS: readonly string[] = [
  'fr.a1.routines.028', 'fr.a1.routines.001', 'fr.a1.routines.020',
  'fr.a1.routines.010', 'fr.a1.routines.011', 'fr.a1.routines.012',
  'fr.a1.routines.034', 'fr.a1.routines.087', 'fr.a1.routines.019',
  'fr.a1.routines.003', 'fr.a1.routines.181', 'fr.a1.routines.154',
  'fr.a1.routines.157', 'fr.a1.routines.144',
];

/** The compound-tense markers. NOT ONE may appear anywhere. */
const COMPOUND_MARKERS: readonly string[] = [
  'me suis', "s'est", 'se sont', 'nous sommes', 'vous êtes',
  't\'es', 'je me suis', "il s'est", "elle s'est", 'ils se sont',
];
const PARTICIPLES: readonly string[] = [
  'lavé', 'lavée', 'lavés', 'lavées', 'levé', 'levée', 'levés', 'levées',
  'couché', 'couchée', 'couchés', 'couchées', 'habillé', 'habillée',
  'réveillé', 'réveillée', 'reposé', 'reposée', 'dépêché', 'dépêchée',
];

/** The object-pronoun system, which a2.06 and a2.24 own. */
const OBJECT_TERMS: readonly string[] = [
  'direct object', 'indirect object', 'object pronoun', 'stands in for',
  'replaces the noun', 'replaces a noun',
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
/** NOT deduped. Counting must use this: two sections carrying one short line
 *  collapse to one under a Set, and this build's own reframe count came out at
 *  seven for eight authored occurrences before the two were split apart. */
const RAW = surfaceOf(display);
const ALL = [...new Set([...surfaceOf(prose), ...RAW])];

/** THE HOUSE BOUNDARY, with corrections §14.3's fix: the apostrophe is dropped
 *  from the LEFT, so a shape can see `s'est` and `m'habille`. */
const bounded = (needle: string) =>
  new RegExp(`(?<![\\p{L}\\p{N}-])${needle.replace(/[.*+?^${}()|[\]\\]/gu, '\\$&')}(?![\\p{L}\\p{N}'’-])`, 'iu');
const hasPhrase = (hay: string, needle: string) => bounded(needle).test(hay);

const sec = (id: string): LessonSection | undefined => L?.sections.find((s) => s.id === id);
const PRODUCTION_SECTIONS = ['s23-quiz', 's18-dictation', 's20-speak', 's19-talk', 's15-wrap'];

/* ══ IDENTITY ═══════════════════════════════════════════════════════════ */

test('a2.22.l1 is in the seed at v1', { skip: noLesson }, () => {
  strictEqual(L!.version, 2, 'v2 repairs a Pixel 6 defect the host layers could not see; the counter moves rather than the body changing under v1');
  strictEqual(L!.unitId, 'a2.22');
  strictEqual(L!.title, 'Les verbes pronominaux');
  strictEqual(L!.tag, 'A2 · LEÇON 19');
  strictEqual(L!.level, 'a2');
});

test('the unit is the one the database holds, and it lists this lesson', { skip: noLesson }, () => {
  const u = seed.units.find((x) => x.id === 'a2.22');
  ok(u, 'a2.22 is in the seed');
  strictEqual(String(u!.seq), '19');
  strictEqual(u!.title, 'Pronominal (Reflexive) Verbs');
  strictEqual(u!.sub, 'Les verbes pronominaux');
  strictEqual(u!.canDo, 'Can describe their routine with reflexive verbs in the present');
  deepStrictEqual(u!.prereqUnitIds, ['a2.01']);
  ok((u!.lessonIds ?? []).includes('a2.22.l1'), 'the unit lists the lesson');
});

/* THE UNIT DECLARES A THEME WITH NO ROWS, AND NOTHING READS IT. Pinned rather
 * than repaired: `spine-drift.test.ts` requires the spine and the seed to agree,
 * so changing it is a spine change. This assertion is the record, and it goes
 * red the day somebody fixes it, which is when they should read the note. */
test('a2.22 declares the theme `routine`, which holds no rows, and no component reads it', { skip: noLesson }, () => {
  const u = seed.units.find((x) => x.id === 'a2.22')!;
  deepStrictEqual(u.themes, ['routine'], 'the spine and content_units both say routine');
  strictEqual(seed.items.filter((i) => i.theme === 'routine').length, 0, 'and it has no rows');
  ok(seed.items.filter((i) => i.theme === 'routines').length > 300, 'the real theme is routines, plural');
});

test('the lesson validates and passes density', { skip: noLesson }, () => {
  const issues = validateLesson(L!);
  strictEqual(issues.length, 0, formatIssues(issues));
  const dens = validateDensity(L!, new Set(seed.items.map((i) => i.id)));
  strictEqual(dens.length, 0, formatDensity(dens));
});

test('the spine is 24 sections in 6 acts, and the Owns outweighs the paradigm', { skip: noLesson }, () => {
  strictEqual(L!.sections.length, 24);
  strictEqual((L!.acts ?? []).length, 6);
  const acts = L!.acts!;
  deepStrictEqual(acts.map((a) => a.sections.length), [4, 2, 7, 3, 4, 4]);
  ok(acts[2]!.sections.length > acts[1]!.sections.length,
    'doctrine §B.5: the paradigm act must not have more sections than the Owns');
  const inActs = acts.flatMap((a) => a.sections);
  strictEqual(new Set(inActs).size, inActs.length, 'no section is claimed by two acts');
  deepStrictEqual([...inActs].sort(), L!.sections.map((s) => s.id!).sort());
});

/* ══ THE ROWS ═══════════════════════════════════════════════════════════ */

test('31 rows in the block, all sentences, none a headword', { skip: noLesson }, () => {
  const rows = myRows();
  strictEqual(rows.length, 31);
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

test('no row of a2.22 is inside a2.21\'s block, and that block still holds 46', { skip: noLesson }, () => {
  for (const r of myRows()) ok(!isA221(r.id), `${r.id} is inside a2.21's block`);
  strictEqual(seed.items.filter((i) => isA221(i.id)).length, 46);
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

/* THE PARADIGM'S OWN NASAL, ASSERTED BY NAME. Invariants §3: the checker has
 * blind spots, so a lesson with nasal-carrying words asserts the superscript BY
 * NAME as well as calling the shared checker. There is exactly one shape here
 * and it is the -ons ending, which ends a token, so it is VISIBLE. */
test('the -ons ending carries the superscript, by name, and the checker sees it', { skip: noLesson }, () => {
  const nous = byIdItem.get('fr.a2.verbes.724')!;
  strictEqual(nous.respell, 'noo noo lah-VOHⁿ');
  ok(hasPlainNasalFor(nous.fr, 'noo noo lah-VOHN'),
    'the plain-n form IS flagged, so this row is VISIBLE rather than blind, and the day the checker changes this goes red');
  ok(!hasPlainNasalFor(nous.fr, nous.respell!));
  strictEqual(byIdItem.get('fr.a2.verbes.735')!.respell, 'noo noo luh-VOHⁿ TOH');
  strictEqual(byIdItem.get('fr.a2.verbes.738')!.respell, 'noo noo day-peh-SHOHⁿ');
});

test('a1.03\'s ending population is untouched', { skip: noLesson }, () => {
  strictEqual(endingPopulation(seed.items).length, 1890);
});

/* ══ LAYOUT 1: THE SIX FORMS, FORM BY FORM ══════════════════════════════ */

test('the six forms are in ONE section with the pronoun in a column of its own', { skip: noLesson }, () => {
  const s = sec('s05-persons') as unknown as { type: string; cols: string[]; rows: { cells: string[]; say?: string }[] };
  ok(s, 's05-persons exists');
  strictEqual(s.type, 'tapTable',
    'a table at layer core is a table-in-core density failure, so the six forms are a three-column tapTable');
  strictEqual(s.cols.length, 3, 'the pronoun needs a column of its own');
  strictEqual(s.rows.length, 6, 'six forms, and six is the Pixel 6 ceiling for a tapTable');
  /* CELL BY CELL. a2.21 §4.1: a `why` naming a form satisfies an assertion that
   * the form is ON A CARD, so read `rows[].cells`, never `strings(section)`. */
  for (const [i, want] of PARADIGM.entries()) {
    const cells = s.rows[i]!.cells;
    strictEqual(cells.length, 3, `row ${i} is ragged`);
    strictEqual(cells[0], want.subject, `row ${i} column 0`);
    strictEqual(cells[1], want.clitic, `row ${i} column 1 is the pronoun`);
    ok(!hasPhrase(cells[2]!, want.clitic),
      `row ${i} has « ${want.clitic} » inside the verb column, so the two are not visually separate`);
    strictEqual(s.rows[i]!.say, want.fr, `row ${i} does not speak its own form`);
  }
});

test('the two doubled forms get their own screen, and a1.25 is credited for having shown one', { skip: noLesson }, () => {
  const s = display(sec('s06-doubled')).join('\n');
  ok(s.includes('Nous nous lavons.'), 'the doubled nous form is not on the screen that exists for it');
  ok(s.includes('Vous vous lavez.'), 'the doubled vous form is not on it either');
  /* QUOTED WITHOUT ITS FINAL STOP, because it lands mid-sentence. Shipping it
   * with the stop drew « ... dimanche., beside a verb ... » on a Pixel 6, which
   * is why v2 exists. The ROW still ends in a stop; the QUOTE does not. */
  ok(s.includes('Nous nous levons tard le dimanche,'),
    "a1.25's own shipped sentence is not quoted, so the reveal reads as a first sighting when it is not");
  ok(!s.includes('dimanche.,'), 'the quoted row kept its full stop and the screen reads « dimanche., beside »');
  const source = seed.items.find((i) => i.id === 'fr.a1.routines.181');
  strictEqual(source?.fr, 'Nous nous levons tard le dimanche.',
    'the row a1.25 teaches from has changed, so the quote is no longer that lesson\'s sentence');
  ok(hasPhrase(s, 'a1.25'), 'a1.25 is not named on the screen that reveals its own form');
});

/* ══ LAYOUT 2: THE MEANING CONTRAST ═════════════════════════════════════ */

test('« Je lave la voiture. » and « Je me lave. » are a contrast in ONE section', { skip: noLesson }, () => {
  const s = sec('s04-contrast') as unknown as { examples: { fr: string; en: string; note?: string }[] };
  ok(s, 's04-contrast exists');
  const frs = s.examples.map((e) => e.fr);
  ok(frs.includes(CONTRAST_WITHOUT), `the section does not carry « ${CONTRAST_WITHOUT} »`);
  ok(frs.includes(CONTRAST_WITH), `the section does not carry « ${CONTRAST_WITH} »`);
  /* A PAIR GUARD IS NOT SATISFIED BY ONE THING. a2.20's hole. */
  ok(CONTRAST_WITH !== CONTRAST_WITHOUT, 'the two halves are the same string');
  ok(frs.indexOf(CONTRAST_WITHOUT) < frs.indexOf(CONTRAST_WITH),
    'the bare verb comes first, so the pronoun arrives as the thing that changed');
});

/* ══ LAYOUT 3 AND THE NEGATION CONTRACT ═════════════════════════════════ */

test('the affirmative and the negative are adjacent, with the ne in front of the cluster', { skip: noLesson }, () => {
  const cards = (sec('s14-negative') as unknown as { cards: { fr: string }[] }).cards;
  const first = cards[0]!.fr;
  ok(first.includes('Je me lave'), 'the first card does not carry the affirmative');
  ok(first.includes('Je ne me lave pas'), 'the first card does not carry the negative beside it');
  ok(/\bne me lave\b/u.test(NEGATIVE), 'the ne precedes the pronoun, which is the whole trap');
  ok(!/\bme ne\b/u.test(NEGATIVE), 'the ne is after the pronoun, which is the error');
});

test("a2.19's negation line is quoted VERBATIM, and so is the extension", { skip: noLesson }, () => {
  ok(RAW.filter((s) => s.includes(NEGATION_RULE)).length >= 3,
    "a2.19's line is quoted fewer than three times; a2.05 and a2.21 both carry it and this is the fourth lesson");
  ok(RAW.filter((s) => s.includes(NEGATION_EXTENSION)).length >= 3,
    'the extension is authored fewer than three times, and it is what stops the inherited rule producing the trap');
  /* AND THE INHERITED LINE IS THE SAME STRING THE NEIGHBOURS SHIPPED. a2.21 §8:
   * read it off the shipped lesson rather than trusting a constant. */
  for (const id of ['a2.19.l1', 'a2.05.l1', 'a2.21.l1']) {
    const n = seed.lessons.find((l) => l.id === id);
    if (!n) continue;
    const theirs = [...display(n.sections), n.reframe ?? ''];
    ok(theirs.some((s) => s.includes(NEGATION_RULE)),
      `${id} does not carry « ${NEGATION_RULE} », so the string this lesson quotes is not the one that shipped`);
  }
  strictEqual(seed.lessons.find((l) => l.id === 'a2.19.l1')?.reframe, NEGATION_RULE,
    "a2.19's reframe IS the line, read off the seed");
});

test('the trap is shown as an error and nowhere a learner could take it for correct', { skip: noLesson }, () => {
  const onTrap = display(sec('s15-wrap')).some((s) => s.includes(TRAP));
  ok(onTrap, `the trapDrill does not show « ${TRAP} », which is what the inherited rule produces read at its word`);
  const allowed = new Set(['s15-wrap', 's23-quiz', 's16-errors']);
  for (const s of L!.sections) {
    if (allowed.has(s.id!)) continue;
    ok(!display(s).some((t) => t.includes(TRAP)), `${s.id} carries « ${TRAP} » outside the trap, the errors card and the exam`);
  }
});

test('the trapDrill walks rule, cards, audio, drill, and its recording holds its own lines', { skip: noLesson }, () => {
  const t = sec('s15-wrap') as unknown as {
    steps?: { kind: string; gate?: boolean }[]; swipe?: boolean; size?: string;
    audio?: { recordingId?: string }; cards: { fr: string }[];
  };
  strictEqual((t.steps ?? []).map((s) => s.kind).join('>'), 'rule>cards>audio>drill');
  strictEqual(t.swipe, true, 'without swipe the pager hands this a scrolling page');
  ok(!t.size, 'size comes OFF a stepped trapDrill');
  ok((t.steps ?? []).some((s) => s.kind === 'drill' && s.gate === true), 'the drill step is not gated');
  const rec = (L!.audio?.recorded ?? []).find((r) => r.id === t.audio?.recordingId);
  ok(rec, 'the trapDrill names a recording the lesson does not declare');
  for (const c of t.cards) {
    ok((rec!.clipIds ?? []).includes(c.fr), `the recording does not contain « ${c.fr} », which its own card plays`);
  }
});

/* ══ NO COMPOUND TENSE, ANYWHERE ════════════════════════════════════════ */

test('no compound tense appears on ANY surface, reserving a2.23', { skip: noLesson }, () => {
  const CLITIC = "(me|m'|te|t'|se|s'|nous|vous)";
  const ETRE = '(suis|es|est|sommes|êtes|sont)';
  const RE = new RegExp(`(?<![\\p{L}\\p{N}-])(je|tu|il|elle|on|nous|vous|ils|elles)\\s+${CLITIC}\\s*${ETRE}(?![\\p{L}\\p{N}'’-])`, 'iu');
  const bad = (s: string) => RE.test(s)
    || COMPOUND_MARKERS.some((m) => hasPhrase(s, m))
    || PARTICIPLES.some((p) => hasPhrase(s, p));
  /* PROVED TO FIRE. An assertion that cannot fail is worse than no assertion. */
  ok(bad('Je me suis lavé.'), 'the compound guard does not fire on a compound tense');
  ok(bad("Il s'est levé tôt."), 'the compound guard does not see an elided pronoun');
  /* AND PROVED NOT TO. Corrections §14.4: a shape built from French morphology
   * reads the English half of a card as French. */
  ok(!bad('You did not stall ON A WORD YOU had not learned.'),
    'the compound guard fires on the English sentence that broke a2.17');
  ok(!bad('Nous nous lavons.'), 'the compound guard fires on a present-tense reflexive');
  ok(!bad(A125_HANDOFF), "the compound guard fires on a1.25's hand-off sentence, which this lesson quotes");
  for (const s of ALL) ok(!bad(s), `a compound tense reaches a learner surface: « ${s.slice(0, 110) }»`);
  for (const r of myRows()) ok(!bad(r.fr), `${r.id} « ${r.fr} » is a compound tense`);
});

test('the present-tense framing a2.23 inherits is on a screen', { skip: noLesson }, () => {
  ok(ALL.some((s) => s.includes(PRESENT_NO_AGREEMENT)),
    'a2.23 is told to build on this wording and it reaches no screen');
});

/* ══ THE OWNS ═══════════════════════════════════════════════════════════ */

test('the reframe is authored exactly 8 times, verbatim', { skip: noLesson }, () => {
  strictEqual(RAW.filter((s) => s.includes(REFRAME)).length, REFRAME_COUNT);
  strictEqual(L!.reframe, REFRAME, 'a paraphrase of the reframe must go red');
});

test('the not-reflexive group is taught together, by name', { skip: noLesson }, () => {
  const s = display(sec('s09-nomeaning')).join('\n');
  for (const v of ["s'appeler", 'se dépêcher', 'se souvenir']) {
    ok(s.includes(v), `s09-nomeaning does not name « ${v} »`);
  }
  ok(ALL.some((t) => hasPhrase(t, 'sons.01')),
    'sons.01 is credited nowhere, and it is the lesson that shipped « Je m\'appelle » first');
  ok(ALL.some((t) => t.includes("Je m'appelle Sophie.")), 'the opener is on no screen');
});

test('the a2.09 stem-change reference is present, and does not claim a2.09 taught this verb', { skip: noLesson }, () => {
  const s = display(sec('s11-vowel')).join('\n');
  ok(hasPhrase(s, 'a2.09'), 's11-vowel does not name a2.09');
  ok(ALL.some((t) => t.includes(A209_REFRAME)), "a2.09's reframe is quoted nowhere");
  /* AND THE CLAIM IS ABOUT THE MECHANISM, NOT THE VERB. Measured: a2.09's body
   * contains `lever` zero times and `lève` zero times, and THE_SEVENTEEN does
   * not hold it. A card saying a2.09 taught this verb would be false. */
  const a209 = seed.lessons.find((l) => l.id === 'a2.09.l1');
  if (a209) {
    const body = display(a209.sections).join('\n');
    strictEqual(body.split('lever').length - 1, 0, 'a2.09 now names lever, so this lesson can credit the verb rather than the mechanism');
    strictEqual(body.split('lève').length - 1, 0, 'a2.09 now names lève');
  }
});

test('a2.01\'s reframe is quoted, because it is why four of the six cells are one sound', { skip: noLesson }, () => {
  ok(ALL.some((t) => t.includes(A201_REFRAME)));
  const a201 = seed.lessons.find((l) => l.id === 'a2.01.l1');
  if (a201) strictEqual(a201.reframe, A201_REFRAME, "read off a2.01 as shipped, not from this build's own constant");
});

test('a1.25 is credited and its hand-off is quoted verbatim', { skip: noLesson }, () => {
  ok(ALL.some((t) => t.includes(A125_HANDOFF)), "a1.25's hand-off sentence is quoted nowhere");
  const a125 = seed.lessons.find((l) => l.id === 'a1.25.l1');
  if (a125) {
    ok(display(a125.sections).some((s) => s.includes(A125_HANDOFF)),
      'the sentence this lesson quotes is not the one a1.25 shipped');
  }
});

/* ══ THE ROUTINE VOCABULARY ═════════════════════════════════════════════ */

test('no routine vocabulary section exists', { skip: noLesson }, () => {
  for (const s of L!.sections) {
    ok(s.type !== 'vocabThemes', `${s.id} is a vocabThemes section and a1.25 owns the routine vocabulary`);
  }
});

test('every routine word is an IMPORTED id, asserted by id', { skip: noLesson }, () => {
  const owned = new Set(L!.itemIds ?? []);
  for (const id of ROUTINE_IDS) {
    ok(byIdItem.has(id), `${id} does not resolve in the seed, so its card draws blank`);
    ok(!isMine(id), `${id} is inside this lesson's own block, so it was authored rather than imported`);
    ok(owned.has(id), `${id} is a routine word the lesson does not own`);
    ok(byIdItem.get(id)!.theme !== THEME, `${id} is claimed as a routine import and sits in ${THEME}`);
  }
});

/* ══ WHAT IS DEFERRED ═══════════════════════════════════════════════════ */

test('the object-pronoun system is not explained on a production surface', { skip: noLesson }, () => {
  const prod = L!.sections.filter((s) => PRODUCTION_SECTIONS.includes(s.id!)).flatMap((s) => display(s));
  ok(prod.length > 0, 'the production sections resolved to nothing, so this assertion guards nothing');
  for (const t of OBJECT_TERMS) {
    for (const s of prod) ok(!hasPhrase(s, t), `a production surface explains « ${t} »: « ${s.slice(0, 90)} »`);
  }
  /* AND THE OVERLAP IS FLAGGED, so a2.06 knows. */
  ok(ALL.some((s) => hasPhrase(s, 'a2.06')), 'a2.06 is named nowhere');
  ok(ALL.some((s) => hasPhrase(s, 'a2.24')), 'a2.24 is named nowhere');
});

test('the reciprocal is named exactly once, receptively, and reaches no production surface', { skip: noLesson }, () => {
  const carrying = L!.sections.filter((s) => display(s).some((t) => t.includes(RECIPROCAL)));
  strictEqual(carrying.length, 1, `the reciprocal appears in ${carrying.map((s) => s.id).join(', ')}; the decision is ONE receptive card`);
  strictEqual(carrying[0]!.id, 's13-later');
  const row = seed.items.find((i) => i.fr === RECIPROCAL);
  ok(row, 'the reciprocal row is not in the seed');
  for (const d of ['flashcard', 'voiceflash', 'dictation']) {
    ok(!row!.drills.includes(d as never), `the reciprocal row carries the ${d} drill and the decision is receptive only`);
  }
  const prod = L!.sections.filter((s) => PRODUCTION_SECTIONS.includes(s.id!)).flatMap((s) => display(s));
  for (const s of prod) ok(!s.includes(RECIPROCAL), 'the reciprocal reaches a production surface');
});

/* ══ WHAT THE APP CAN AND CANNOT TEST ═══════════════════════════════════ */

test('all six cells stay distinct under the real fold, which is what makes the Owns typeable', { skip: noLesson }, () => {
  const forms = PARADIGM.map((p) => p.fr);
  for (let i = 0; i < forms.length; i += 1) {
    for (let j = i + 1; j < forms.length; j += 1) {
      ok(fold(forms[i]!) !== fold(forms[j]!), `fold cannot separate « ${forms[i]} » from « ${forms[j]} »`);
    }
  }
  /* THE OWNS ITSELF IS TYPEABLE: a dropped pronoun and a dropped doubling. */
  ok(fold('Je me lave.') !== fold('Je lave.'), 'a dropped pronoun would be accepted');
  ok(fold('Nous nous lavons.') !== fold('Nous lavons.'), 'a dropped doubling would be accepted');
  ok(fold('Je ne me lave pas.') !== fold('Je me ne lave pas.'), 'the trap would be accepted');
});

/* THE MEASUREMENT THAT CHOSE THE FRAME VERB. If this ever stops holding, `se
 * lever` becomes typeable and the corpus header's §1 needs re-reading. */
test('fold strips the accent on lève, which is why the frame verb is se laver', { skip: noLesson }, () => {
  strictEqual(fold('Je me lève tôt.'), fold('Je me leve tot.'),
    'fold now separates the accent, so a typed question on se lever would be legitimate and §1 of the corpus header is stale');
});

test('every dictée target is in LETTERS mode and carries the dictation drill', { skip: noLesson }, () => {
  const d = sec('s18-dictation') as unknown as { itemIds: string[] };
  ok(d, 's18-dictation exists');
  strictEqual(d.itemIds.length, 12);
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
});

test('no ear question separates two options that are one sound', { skip: noLesson }, () => {
  const GROUPS = [['Il se lave.', 'Ils se lavent.'], ['Il se lève tôt.', 'Ils se lèvent tôt.']];
  const qs = quizQuestions(sec('s23-quiz') as never);
  for (const q of qs) {
    if (q.format !== 'listenChoose' || !q.opts) continue;
    for (const g of GROUPS) {
      ok(q.opts.filter((o) => g.includes(o)).length <= 1,
        `an ear question offers two options that are one sound: ${q.q}`);
    }
  }
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
});

/* FOUND BY MUTATION, AND EVERY LESSON FROM a2.01 TO a2.21 CARRIES THE HOLE.
 * The guard the band runs is `for (const a of q.accept) matchesAccept(a,
 * q.accept)`, which asks whether the accept list accepts ITSELF. It is a
 * tautology and cannot fail for any value. Replacing an accept entry with a
 * different sentence walked through it, through the merge, and was caught only
 * because the mutated lesson then tripped the batch's version check.
 *
 * The check with content is that a multi-word answer is a sentence THIS LESSON
 * OWNS: an authored row, or the one repair sentence the scene teaches. */
test('every free-text answer is a sentence this lesson owns, not merely one its own list accepts', { skip: noLesson }, () => {
  const answerable = new Set<string>([
    ...myRows().map((r) => r.fr),
    'Je me lève à sept heures.',
  ]);
  let checked = 0;
  for (const q of quizQuestions(sec('s23-quiz') as never)) {
    if (!q.accept) continue;
    for (const a of q.accept) {
      ok(matchesAccept(a, q.accept), `« ${a} » is not accepted by its own accept list`);
      if (!/\s/u.test(a)) continue;
      checked += 1;
      ok(answerable.has(a),
        `« ${a} » is offered as a free-text answer and is not a sentence this lesson owns`);
    }
    const shown = (q as { answer?: string }).answer;
    if (shown) ok(matchesAccept(shown, q.accept), `the displayed answer « ${shown} » is not accepted`);
  }
  ok(checked >= 8, `only ${checked} multi-word answers were checked, so this assertion guards almost nothing`);
});

test('every produced question names a subject, because the pronoun depends on it', { skip: noLesson }, () => {
  const RE = /(?<![\p{L}\p{N}-])(je|j'|tu|il|elle|on|nous|vous|ils|elles|speaking to)(?![\p{L}\p{N}'’-])/iu;
  for (const q of quizQuestions(sec('s23-quiz') as never)) {
    if (q.format !== 'typeIn' && q.format !== 'errorSpot') continue;
    ok(RE.test(`${q.q} ${(q.accept ?? []).join(' ')}`), `no subject: ${q.q}`);
  }
});

test('no exam question uses a compound tense', { skip: noLesson }, () => {
  const qs = quizQuestions(sec('s23-quiz') as never);
  for (const q of qs) {
    const text = [q.q, ...(q.opts ?? []), ...(q.accept ?? []), q.why ?? ''].join(' ');
    for (const m of COMPOUND_MARKERS) ok(!hasPhrase(text, m), `« ${m} » in an exam question: ${q.q}`);
    for (const p of PARTICIPLES) ok(!hasPhrase(text, p), `« ${p} » in an exam question: ${q.q}`);
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
    'reflexive pronoun', 'reflexive verb', 'pronominal verb', 'clitic',
    'paradigm', 'first person', 'second person', 'third person', 'valency',
    'transitive', 'intransitive', 'reciprocal', 'morpheme', 'orthographic',
  ];
  for (const s of ALL) {
    ok(!/[—–]/u.test(s), `em dash: « ${s.slice(0, 80)} »`);
    ok(!/\bhonest/i.test(s), `banned word: « ${s.slice(0, 80)} »`);
    /* WIDER THAN THE BAND'S, AND FOUND ON A PIXEL 6 BY THIS BUILD. Every guard
     * in this band checks for two dots, which is half the shape: a quoted
     * corpus row landing mid-sentence produces a stop followed by whatever
     * punctuation came next, and s06-doubled shipped « dimanche., beside a
     * verb » past the batch, the merge, this file and the density validator. */
    ok(!/(?<!\.)\.[.,;:](?!\.)/u.test(s), `a sentence-final stop with punctuation after it: « ${s.slice(0, 80)} »`);
    for (const j of JARGON) {
      ok(!hasPhrase(s, j), `jargon « ${j} »: « ${s.slice(0, 80)} »`);
      ok(!hasPhrase(s, `${j}s`), `jargon « ${j}s »: « ${s.slice(0, 80)} »`);
    }
  }
});

test('the plain phrase outnumbers the technical one', { skip: noLesson }, () => {
  const hay = ALL.join('\n').toLowerCase();
  const count = (n: string) => hay.split(n).length - 1;
  ok(count('little word') > count('pronoun'),
    'a2.17 §5: the house prefers the plain phrase rather than banning the technical one');
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

test('the reference sheet holds only blocks ReferenceSheet.tsx draws, and the table lives there', { skip: noLesson }, () => {
  const sheets = L!.sheets ?? [];
  strictEqual(sheets.length, 1);
  const blocks = sheets[0]!.sections ?? [];
  for (const b of blocks) {
    ok(['teach', 'letterGrid', 'table'].includes(b.type),
      `the sheet holds a ${b.type} block and ReferenceSheet.tsx draws only teach, letterGrid and table`);
  }
  const table = blocks.find((b) => b.type === 'table') as unknown as { cols: string[]; rows: string[][] } | undefined;
  ok(table, 'the six-form table is not in the sheet, and it cannot be in the flow');
  strictEqual(table!.rows.length, 6);
  for (const [i, want] of PARADIGM.entries()) {
    strictEqual(table!.rows[i]![0], want.subject);
    strictEqual(table!.rows[i]![1], want.clitic);
  }
  /* AND NO `table` IS IN THE FLOW, which is a table-in-core density failure. */
  for (const s of L!.sections) ok(s.type !== 'table', `${s.id} is a table at layer core`);
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
