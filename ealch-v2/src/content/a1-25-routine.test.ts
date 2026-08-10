// Guards a1.25.l1 "La routine quotidienne".
//
// This lesson has one failure mode that matters more than all the others, and it
// is not a crash: it is THE FOUR TIMES THAT TAKE A LITTLE WORD AND THE TWO THAT
// DO NOT ENDING UP IN SEPARATE MISSIONS.
//
// The whole claim of the lesson is that they are one set behaving two ways. It
// is made on ONE SCREEN, s05-contrast, a tapTable whose left column takes an
// article and whose right column takes none. Split that across two sections and
// every other check in this file stays green while the lesson stops arguing
// anything: a learner reads a list of times, then a second list of times, and
// never sees that one list is marked and the other is not. The brief calls it
// "the layout the test must assert" and it is right. It is the second test
// below, and it is checked by section id and by every member of both columns
// being present in that one section, because a looser check would pass with the
// right-hand column deleted.
//
// The other three that earn their place:
//
//   THE MEASURED ZERO IS PINNED. « le midi » returns 0 rows in 27,353 published
//   sentences, and that number is on a card. A later author who "corrects" it,
//   or who softens the claim to "rare", has removed the strongest piece of
//   evidence in the lesson. LE_MIDI_ROWS_IN_CORPUS is asserted at zero and the
//   card is asserted to state it.
//
//   THE REFLEXIVE PARADIGM MUST NOT LEAK. a2.22 owns it, and the reason this
//   lesson cannot have it is a measurement rather than a preference: `vous vous
//   levez`, `ils se lèvent` and `elles se lèvent` return ZERO rows each. A
//   future author filling in "the missing persons" would be inventing three
//   quarters of them. Guarded on PRODUCTION SURFACES only, because a guard
//   written over every string fires on legitimate context and gets deleted.
//
//   THE IN-MISSION ANSWER SLOTS ARE SPREAD, AND THAT IS A SEPARATE CHECK FROM
//   THE QUIZ. The act-6 quiz is shuffled at runtime by QuizDeckView, so its
//   authored slot is invisible. The groupDrill checks and the listening
//   questions are NOT shuffled by anything: MissionRich renders q.opts.map in
//   authored order. This assertion does not exist in any other A1 test.
//
// Everything else guards the ways this project has already shipped content that
// was authored, schema-valid, and drawn by nothing.
//
// Two sources are checked, not one. The SEED is what a learner receives. The
// AUTHORED SOURCE in ealch-admin is what the next author edits. Both are read
// here and the parity tests at the bottom fail when they drift.
//
// Counts are DERIVED wherever a count is asserted. A hardcoded number fails on
// itself the first time content legitimately changes, and the fix is then to
// edit the test, which is how a test comes to certify a bug. The exceptions are
// the four articled parts, the two bare ones and the six error triggers: those
// are the SHAPE of the lesson rather than a measurement of it, and a later trim
// that quietly drops one is exactly what this file exists to stop.

import { ok, strictEqual } from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { test } from 'node:test';

import type { Item, Lesson } from './schema.ts';
import { canonicalJson, quizQuestions, validateLesson, formatIssues } from './schema.ts';
import { validateDensity, formatDensity, hasPlainNasalFor } from './density.logic.ts';
import { endingPopulation } from './gender.logic.ts';
import { dicteeMode, wordDecoys } from './dictee.logic.ts';
import { matchesAccept } from './answer.logic.ts';

const here = dirname(fileURLToPath(import.meta.url));
const seed = JSON.parse(readFileSync(resolve(here, 'seed.json'), 'utf8')) as {
  version: number; items: Item[]; lessons: Lesson[];
  units: { id: string; title?: string; sub?: string; canDo?: string; seq?: number; lessonIds?: string[]; themes?: string[] }[];
};

const L = seed.lessons.find((l) => l.id === 'a1.25.l1');
const noLesson = !L;
const ITEMS = new Map(seed.items.map((i) => [i.id, i] as const));

/** Every string anywhere inside a value, so a guard reads what a learner could
 *  possibly see rather than the fields somebody remembered to check. */
function strings(v: unknown, out: string[] = []): string[] {
  if (typeof v === 'string') out.push(v);
  else if (Array.isArray(v)) for (const x of v) strings(x, out);
  else if (v && typeof v === 'object') for (const x of Object.values(v)) strings(x, out);
  return out;
}

/** Accent-aware word-boundary search. NEVER build a regex out of a search term:
 *  `\b` is ASCII-only in JavaScript and returns zero on a trailing accent, which
 *  looks exactly like an absence. */
function hasPhrase(hay: string, needle: string): boolean {
  const isWord = (c: string) => /[\p{L}\p{N}'’-]/u.test(c);
  const h = hay.toLowerCase();
  const n = needle.toLowerCase();
  let i = 0;
  while ((i = h.indexOf(n, i)) !== -1) {
    const before = i === 0 ? '' : h[i - 1];
    const after = h[i + n.length] ?? '';
    if (!isWord(before) && !isWord(after)) return true;
    i += 1;
  }
  return false;
}

const sectionsOf = () => (L?.sections ?? []);
const sectionById = (id: string) => sectionsOf().find((s) => (s as { id?: string }).id === id);
const sectionIds = () => sectionsOf().map((s) => (s as { id?: string }).id).filter(Boolean) as string[];
const examQuestions = () => {
  const q = sectionsOf().find((s) => s.type === 'quiz');
  return q && q.type === 'quiz' ? quizQuestions(q) : [];
};

/* ─── The authored source, self-skipping if ealch-admin is absent ──────────
 *
 * Every source-derived assertion below no-ops without it, which is the pattern
 * every other lesson test in this repo uses. The SEED assertions still run. */

type Change = { id: string; fr: string; from: string | null; to: string; why: string };
type Reused = { id: string; fr: string; en: string; respell: string | null; drills: string[] };

let SRC: Lesson | null = null;
let SRC_REFRAME = '';
let SRC_AUTHORED: Item[] = [];
let SRC_REUSED: Reused[] = [];
let SRC_GROUP_WHY: Record<string, string> = {};
let SRC_REPAIRS: Change[] = [];
let SRC_ADDITIONS: Change[] = [];
let SRC_DRILL_ADDITIONS: { id: string; fr: string; add: string }[] = [];
let SRC_TAKES_ARTICLE: { id: string; fr: string; en: string; pg: number; seed: number }[] = [];
let SRC_TAKES_NOTHING: { id: string; fr: string; en: string; withA: string; pgWithA: number; pgWithLe: number }[] = [];
let SRC_PARADIGM: string[] = [];
let SRC_JARGON: string[] = [];
let SRC_DEMONSTRATIVES: string[] = [];
let SRC_WITHDRAWN: string[] = [];
let SRC_LE_MIDI_ROWS = -1;
let SRC_CORPUS_SENTENCES = -1;
let SRC_ITEM_IDS: string[] = [];
let SRC_SPEAK: string[] = [];
let SRC_DICTATION: string[] = [];
let SRC_TRANCHES: string[][] = [];
let SRC_PART_IDS: string[] = [];
let SRC_BARE_IDS: string[] = [];
let SRC_READING_ONLY: string[] = [];
let SRC_RANGE = { from: '', to: '' };

try {
  const corpus = await import('../../../ealch-admin/scripts/data/routine-corpus.ts');
  const imported = await import('../../../ealch-admin/scripts/data/routine-imported.ts');
  const lesson = await import('../../../ealch-admin/scripts/data/routine-lesson.ts');
  SRC = lesson.ROUTINE_LESSON as Lesson;
  SRC_REFRAME = lesson.REFRAME as string;
  SRC_AUTHORED = corpus.AUTHORED_ITEMS as unknown as Item[];
  SRC_REUSED = imported.REUSED as unknown as Reused[];
  SRC_GROUP_WHY = imported.GROUP_WHY as Record<string, string>;
  SRC_REPAIRS = corpus.RESPELL_REPAIRS as unknown as Change[];
  SRC_ADDITIONS = corpus.RESPELL_ADDITIONS as unknown as Change[];
  SRC_DRILL_ADDITIONS = corpus.DRILL_ADDITIONS as unknown as typeof SRC_DRILL_ADDITIONS;
  SRC_TAKES_ARTICLE = corpus.TAKES_ARTICLE as unknown as typeof SRC_TAKES_ARTICLE;
  SRC_TAKES_NOTHING = corpus.TAKES_NOTHING as unknown as typeof SRC_TAKES_NOTHING;
  SRC_PARADIGM = corpus.PARADIGM_FORMS as string[];
  SRC_JARGON = corpus.JARGON as string[];
  SRC_DEMONSTRATIVES = corpus.NEIGHBOUR_DEMONSTRATIVES as string[];
  SRC_WITHDRAWN = corpus.WITHDRAWN_IDS as string[];
  SRC_LE_MIDI_ROWS = corpus.LE_MIDI_ROWS_IN_CORPUS as number;
  SRC_CORPUS_SENTENCES = corpus.CORPUS_SENTENCES_MEASURED as number;
  SRC_RANGE = corpus.OWNED_ID_RANGE as { from: string; to: string };
  SRC_ITEM_IDS = lesson.ROUTINE_ITEM_IDS as string[];
  SRC_SPEAK = lesson.ROUTINE_SPEAK_IDS as string[];
  SRC_DICTATION = lesson.ROUTINE_DICTATION_IDS as string[];
  SRC_TRANCHES = lesson.ROUTINE_TRANCHES as string[][];
  SRC_PART_IDS = lesson.ROUTINE_PART_IDS as string[];
  SRC_BARE_IDS = lesson.ROUTINE_BARE_IDS as string[];
  SRC_READING_ONLY = lesson.ROUTINE_READING_ONLY_IDS as string[];
} catch {
  SRC = null;
}
const noSrc = !SRC;

/* ═══ 1. The lesson exists and is well formed ═════════════════════════════ */

test('a1.25.l1 is in the seed and validates', () => {
  ok(L, 'a1.25.l1 is not in seed.json');
  const issues = validateLesson(L!, L!.id);
  strictEqual(issues.length, 0, formatIssues(issues));
  const density = validateDensity(L!, new Set(seed.items.map((i) => i.id)));
  strictEqual(density.length, 0, formatDensity(density));
});

/* ═══ 2. THE CONTRAST IS THE LESSON, AND IT IS ON ONE SCREEN ══════════════ */

test('one tapTable carries every articled part of the day AND both bare ones', { skip: noLesson }, () => {
  const hero = sectionById('s05-contrast');
  ok(hero, 's05-contrast is gone. That section IS the lesson.');
  strictEqual(hero!.type, 'tapTable', 's05-contrast is no longer a tapTable');

  const text = strings(hero).join('\n');
  // By NAME, not by count. A count passes on a swap.
  for (const fr of ['le matin', "l'après-midi", 'le soir', 'la nuit']) {
    ok(text.includes(fr), `s05-contrast no longer shows "${fr}". Both columns have to be in ONE section.`);
  }
  for (const fr of ['midi', 'minuit']) {
    ok(text.includes(fr), `s05-contrast no longer shows "${fr}", so the contrast has lost its right-hand column.`);
  }
  // And the bare ones must be shown WITH à, which is what they combine with.
  ok(text.includes('à midi'), 's05-contrast never shows "à midi", so a learner is never told what the bare form takes instead');
  ok(text.includes('à minuit'), 's05-contrast never shows "à minuit"');

  // Two columns, headed as the two behaviours rather than as two topics.
  const cols = (hero as unknown as { cols?: string[] }).cols ?? [];
  strictEqual(cols.length, 2, 's05-contrast no longer has exactly two columns');
});

test('no OTHER section teaches only half the contrast as if it were the whole rule', { skip: noLesson }, () => {
  // A section may legitimately show one column (s09-times banks them in groups).
  // What must not happen is the ONLY place both appear ceasing to be one screen.
  const withBoth = sectionsOf().filter((s) => {
    const t = strings(s).join('\n');
    return ['le matin', 'le soir'].every((f) => t.includes(f)) && ['midi', 'minuit'].every((f) => t.includes(f));
  }).map((s) => (s as { id?: string }).id);
  ok(withBoth.includes('s05-contrast'), `s05-contrast is not among the sections carrying both halves (${withBoth.join(', ') || 'none'})`);
});

/* ═══ 3. Every member of both sets is taught, BY NAME ═════════════════════ */

const ARTICLED = ['le matin', "l'après-midi", 'le soir', 'la nuit'] as const;
const BARE = ['midi', 'minuit'] as const;

for (const fr of ARTICLED) {
  test(`"${fr}" is taught somewhere a learner sees it`, { skip: noLesson }, () => {
    ok(strings(sectionsOf()).some((s) => s.includes(fr)), `"${fr}" appears on no screen`);
  });
}
for (const fr of BARE) {
  test(`"${fr}" is taught, and shown with à`, { skip: noLesson }, () => {
    const all = strings(sectionsOf()).join('\n');
    ok(all.includes(fr), `"${fr}" appears on no screen`);
    ok(all.includes(`à ${fr}`), `"à ${fr}" appears on no screen, so the bare form is never shown doing anything`);
  });
}

test('the six times of day are stored in the corpus the way the lesson teaches them', { skip: noLesson }, () => {
  // The corpus models the rule without being asked to, and that is the evidence
  // the lesson rests on. If somebody "tidies" the bare rows by giving them an
  // article, the lesson becomes an assertion with nothing behind it.
  for (const [id, fr] of [
    ['fr.a1.routines.002', 'le matin'], ['fr.a1.routines.022', "l'après-midi"],
    ['fr.a1.routines.023', 'le soir'], ['fr.a1.routines.024', 'la nuit'],
  ] as const) {
    strictEqual(ITEMS.get(id)?.fr, fr, `${id} is no longer stored as "${fr}"`);
  }
  strictEqual(ITEMS.get('fr.a1.routines.035')?.fr, 'midi', 'midi is no longer stored BARE. That storage IS the evidence.');
  strictEqual(ITEMS.get('fr.a1.routines.036')?.fr, 'minuit', 'minuit is no longer stored BARE');
});

/* ═══ 4. The measured zero, which is the strongest evidence in the lesson ══ */

test('the corpus figures behind the rule are still zero and still on a card', { skip: noLesson || noSrc }, () => {
  strictEqual(SRC_LE_MIDI_ROWS, 0, '"le midi" is no longer recorded at zero rows. If it has been re-measured, the card has to change with it.');
  ok(SRC_CORPUS_SENTENCES > 20_000, `the corpus size is recorded as ${SRC_CORPUS_SENTENCES}, which does not look like a real measurement`);
  const all = strings(sectionsOf()).join('\n');
  ok(
    /zero times|appears 0 times|appears zero/i.test(all),
    'no card states the zero. The measurement is the strongest thing this lesson has and a card that softens it to "rare" gives it away.',
  );
});

/** WHAT THE LEARNER IS ASKED TO PRODUCE, which is narrower than "a production
 *  section" and is the only scope on which the boundary guards are honest.
 *
 *  A first draft of the batch scoped these to whole sections and fired on the
 *  quiz question « What is the difference between le soir and Ce soir? », which
 *  is the lesson NAMING the boundary rather than crossing it. Four ways a
 *  content guard fires on legitimate content are documented in the invariants,
 *  and this is one of them. Scoped to the strings a learner says, types or picks
 *  as correct. */
function productionSurfaces(): string[] {
  const out: string[] = [];
  for (const s of sectionsOf()) {
    if (s.type !== 'scenario') continue;
    for (const t of s.turns ?? []) {
      out.push(t.user);
      for (const a of t.alts ?? []) out.push(a.fr);
    }
  }
  for (const q of examQuestions()) {
    if (q.answer) out.push(q.answer);
    if (q.target) out.push(q.target);
    for (const a of q.accept ?? []) out.push(a);
    if (typeof q.correct === 'number' && q.opts?.[q.correct]) out.push(q.opts[q.correct]);
  }
  for (const d of L?.drills ?? []) {
    for (const p of (d as { pairs?: [string, string][] }).pairs ?? []) out.push(p[1]);
    const o = d as { opts?: string[]; correct?: number };
    if (typeof o.correct === 'number' && o.opts?.[o.correct]) out.push(o.opts[o.correct]);
  }
  return out;
}

/* ═══ 5. The reflexive paradigm does not leak ═════════════════════════════ */

test('no reflexive person with zero corpus evidence reaches a production surface', { skip: noLesson || noSrc }, () => {
  // PRODUCTION surfaces only. A guard written over every string fires on
  // legitimate context and gets deleted, which is documented in the invariants.
  const produced = productionSurfaces();
  for (const f of SRC_PARADIGM) {
    ok(!produced.some((s) => hasPhrase(s, f)), `"${f}" reached a production surface. It has ZERO corpus sentences behind it and a2.22 owns the paradigm.`);
  }
});

test('no grammar jargon reaches a learner surface', { skip: noLesson || noSrc }, () => {
  const learner = strings([L!.sections, L!.sheets ?? [], L!.terms ?? {}]).join('\n');
  for (const j of SRC_JARGON) {
    ok(!hasPhrase(learner, j), `"${j}" reached a learner surface. grammarIntroduced may use it; a card may not.`);
  }
});

test('grammarIntroduced DOES use the precise words, so the split is real', { skip: noLesson }, () => {
  const intro = (L!.grammarIntroduced ?? []).join('\n').toLowerCase();
  ok(intro.includes('reflexive'), 'grammarIntroduced never says reflexive. It is addressed to the curriculum and should.');
  ok(intro.includes('a2.22'), 'grammarIntroduced does not name a2.22 as the owner of the paradigm');
});

/* ═══ 6. The neighbour keeps its lesson, and keeps its one line of context ═ */

test('the demonstrative is context and never something the learner produces', { skip: noLesson || noSrc }, () => {
  const produced = productionSurfaces();
  for (const f of SRC_DEMONSTRATIVES) {
    ok(!produced.some((s) => hasPhrase(s, f)), `"${f}" is an answer the learner is asked to produce. ce/cet/cette is an A2 unit.`);
  }
  const decks = sectionsOf().filter((s) => ['vocabThemes', 'flashcards', 'reviewDeck', 'dictation', 'practice'].includes(s.type));
  for (const f of SRC_DEMONSTRATIVES) {
    ok(!strings(decks).some((s) => hasPhrase(s, f)), `"${f}" reached a deck or a drill`);
  }
});

test('« Ce soir » IS present as context, because the scene turns on it', { skip: noLesson }, () => {
  // THE ASSERTION THAT STOPS A FUTURE AUTHOR "FIXING" SOMETHING CORRECT.
  // At a glance this looks like the demonstrative leaking and the obvious fix is
  // to delete it. Deleting it leaves the opening scene with no contrast to make
  // and the lesson with no reason to have opened there.
  const all = strings(sectionsOf()).join('\n');
  ok(all.includes('Ce soir'), '« Ce soir » has been removed. It is deliberate context: the scene is built on it and the errors card names it as the boundary.');
});

/* ═══ 7. The respelling work ══════════════════════════════════════════════ */

test('every taught headword passes the real nasal checker', { skip: noLesson }, () => {
  const taught = (L!.itemIds ?? []).map((id) => ITEMS.get(id)).filter(Boolean) as Item[];
  const bad = taught.filter((i) => i.kind !== 'sentence' && i.respell && hasPlainNasalFor(i.fr, i.respell));
  strictEqual(bad.length, 0, `respelling(s) closing a nasal with a plain n or m: ${bad.map((i) => `${i.id} ${i.fr} ${i.respell}`).join(', ')}`);
});

test('the three repaired rows carry their repaired value, by name', { skip: noLesson }, () => {
  strictEqual(ITEMS.get('fr.a1.routines.002')?.respell, 'luh mah-TAⁿ', 'le matin has lost its repair');
  strictEqual(ITEMS.get('fr.a1.routines.018')?.respell, 'rahⁿ-TRAY', 'rentrer has lost its repair');
  strictEqual(ITEMS.get('fr.a1.routines.041')?.respell, 'sahⁿ-dor-MEER', "s'endormir has lost its repair");
});

test('the word-internal nasal the shared checker cannot see is pinned by name', { skip: noLesson }, () => {
  // hasPlainNasalFor needs the n to END a token, so PRAHNDR passes while being
  // wrong. fr.sons.verbes-essentiels.012 ships exactly that today. Asserted by
  // name because the checker will never catch it.
  const row = ITEMS.get('fr.a1.routines.013');
  ok(row?.respell?.startsWith('PRAHⁿDR'), `prendre must open PRAHⁿDR, found ${JSON.stringify(row?.respell)}`);
  ok(
    !hasPlainNasalFor('prendre le petit déjeuner', 'PRAHNDR luh puh-tee day-zhuh-NAY'),
    'hasPlainNasalFor now catches PRAHNDR. If the checker has learned to see word-internal nasals, A1-BUILD-INVARIANTS §3 is out of date and this test can be simplified.',
  );
  strictEqual(ITEMS.get('fr.a1.routines.019')?.respell, 'suh bro-SAY lay DAHⁿ', 'the dents respelling has changed');
});

test('minuit must NOT carry a superscript, and that is the checker false-positive side', { skip: noLesson }, () => {
  // The brief listed minuit as a candidate false positive to verify by hand.
  // Measured: the checker does not flag it. Pinned so nobody "repairs" a
  // correct row into teaching a nasal vowel that is not there.
  const row = ITEMS.get('fr.a1.routines.036');
  strictEqual(row?.respell, 'mee-NWEE', 'minuit has been given a different respelling');
  ok(!row!.respell!.includes('ⁿ'), 'minuit has been given a superscript n. /minɥi/ has no nasal vowel.');
  ok(!hasPlainNasalFor('minuit', 'mee-NWEE'), 'mee-NWEE is now flagged, which would make the row above unfixable without teaching a wrong sound');
});

test('the five rows that had no respelling now have one, and it is not empty', { skip: noLesson || noSrc }, () => {
  strictEqual(SRC_ADDITIONS.length, 5, 'the respelling-addition list has changed size');
  for (const a of SRC_ADDITIONS) {
    strictEqual(a.from, null, `${a.id} is listed as an addition but records a previous value`);
    const row = ITEMS.get(a.id);
    ok(row?.respell && row.respell.length > 2, `${a.id} still has no usable respelling in the seed`);
    strictEqual(row!.respell, a.to, `${a.id} in the seed disagrees with the authored source`);
  }
});

test('the three rows that had no voiceflash now have it', { skip: noLesson || noSrc }, () => {
  for (const d of SRC_DRILL_ADDITIONS) {
    const row = ITEMS.get(d.id);
    ok((row?.drills ?? []).includes('voiceflash'), `${d.id} "${d.fr}" still has no voiceflash, so spoken practice naming it plays nothing`);
  }
});

/* ═══ 8. The one authored row ═════════════════════════════════════════════ */

test('manger is authored at the sequence\'s real next free id, with the right nasal', { skip: noLesson }, () => {
  const row = ITEMS.get('fr.a1.routines.185');
  ok(row, 'fr.a1.routines.185 is not in the seed');
  strictEqual(row!.fr, 'manger', 'fr.a1.routines.185 is no longer manger');
  // THE ASSERTION THAT STOPS A CORRECT ROW BEING "FIXED". fr.a1.cuisine.041 and
  // fr.a1.rp-repas.013 both ship mahn-ZHAY, which the real checker flags. A
  // later author normalising this row to match them introduces the defect.
  strictEqual(row!.respell, 'mahⁿ-ZHAY', 'manger must keep the superscript. cuisine and rp-repas carry the broken mahn-ZHAY and must not be copied.');
  ok(!hasPlainNasalFor('manger', row!.respell!), 'manger now fails the real checker');
  ok(!row!.gender, 'manger has been given a gender. It is a verb, and a gendered single-word noun joins a1.03\'s ending population.');
  strictEqual(row!.theme, 'routines', 'manger has moved theme');
});

test('nothing this build authored moves a1.03', { skip: noSrc }, () => {
  const joiners = endingPopulation(SRC_AUTHORED);
  strictEqual(joiners.length, 0, `authored row(s) joined a1.03's measured ending population: ${joiners.map((j) => j.fr).join(', ')}`);
});

test('the authored id sits inside the range this lesson owns', { skip: noSrc }, () => {
  for (const it of SRC_AUTHORED) {
    ok(it.id >= SRC_RANGE.from && it.id <= SRC_RANGE.to, `${it.id} is outside ${SRC_RANGE.from}..${SRC_RANGE.to}`);
  }
});

test('no two non-sentence rows in theme routines share an fr', { skip: noLesson }, () => {
  // Computed the way flashhub-coverage computes it: per theme, non-sentence.
  const seen = new Map<string, string>();
  const clash: string[] = [];
  for (const i of seed.items) {
    if (i.theme !== 'routines' || i.kind === 'sentence') continue;
    const prev = seen.get(i.fr);
    if (prev) clash.push(`"${i.fr}": ${prev} and ${i.id}`);
    else seen.set(i.fr, i.id);
  }
  strictEqual(clash.length, 0, `two rows in routines share an fr, which the flashcard hub serves as one card twice:\n  ${clash.join('\n  ')}`);
});

/* ═══ 9. The unit, and THE REBINDING ══════════════════════════════════════ */

test('a1.25 is bound to routines, not to the dead singular routine', { skip: noLesson }, () => {
  // THE PREMISE OF THE WHOLE BUILD. A future author reading
  // author-full-curriculum-spine.ts sees `themes: ['routine']` and has an
  // obvious, wrong fix available. This is what stops them.
  const unit = seed.units.find((u) => u.id === 'a1.25');
  ok(unit, 'unit a1.25 is not in the seed');
  strictEqual((unit!.themes ?? []).join(), 'routines', `unit a1.25 is bound to ${JSON.stringify(unit!.themes)}. "routine" holds ZERO rows; "routines" holds the vocabulary.`);
  ok((unit!.lessonIds ?? []).includes('a1.25.l1'), 'unit a1.25 does not list its lesson');
  strictEqual(seed.items.filter((i) => i.theme === 'routine').length, 0, 'theme "routine" now holds rows. The rebinding assumed it was empty.');
  ok(seed.items.filter((i) => i.theme === 'routines').length > 300, 'theme "routines" has lost most of its rows');
});

test('the unit title, sub and canDo are untouched, and the tag agrees with seq', { skip: noLesson }, () => {
  const unit = seed.units.find((u) => u.id === 'a1.25')!;
  strictEqual(unit.title, 'Daily Routine', 'the unit title changed. The Den advertises it.');
  strictEqual(unit.sub, 'La routine quotidienne', 'the unit sub changed');
  strictEqual(unit.canDo, 'Can describe their day from getting up to going to bed', 'the unit canDo changed');
  // missions.ts derives the eyebrow at render time from unit.seq. The stored tag
  // is a fallback and has to agree, or the two disagree the moment something
  // reads the field instead. a1.03 shipped exactly that bug.
  strictEqual(L!.tag, `A1 · LEÇON ${String(unit.seq).padStart(2, '0')}`, 'the lesson tag disagrees with what the header will compute from unit.seq');
});

/* ═══ 10. Reachability: nothing authored, valid and invisible ═════════════ */

test('every itemId resolves in the seed', { skip: noLesson }, () => {
  const missing = (L!.itemIds ?? []).filter((id) => !ITEMS.has(id));
  strictEqual(missing.length, 0, `itemId(s) resolving to nothing: ${missing.join(', ')}`);
});

test('every itemId is actually shown by some section, not merely declared', { skip: noLesson }, () => {
  // a1.08 shipped 43 ids that resolved perfectly and appeared on no screen.
  // An id is "shown" if a section names it, or if its `fr` appears in a
  // section's text, or if a tranche releases it AND the deck sections exist.
  const named = new Set<string>();
  for (const s of sectionsOf()) {
    for (const id of (s as { itemIds?: string[] }).itemIds ?? []) named.add(id);
    for (const str of strings(s)) {
      for (const id of L!.itemIds ?? []) {
        const fr = ITEMS.get(id)?.fr;
        if (fr && str.includes(fr)) named.add(id);
      }
    }
  }
  const invisible = (L!.itemIds ?? []).filter((id) => !named.has(id));
  strictEqual(invisible.length, 0, `item(s) declared and drawn by nothing: ${invisible.join(', ')}`);
});

test('the tranches release every taught item exactly once and nothing untaught', { skip: noLesson }, () => {
  const tranches = L!.deckTranche ?? [];
  strictEqual(tranches.length, (L!.acts ?? []).length, 'tranches and acts are not index-aligned');
  const flat = tranches.flat();
  const dupes = flat.filter((id, i) => flat.indexOf(id) !== i);
  strictEqual(dupes.length, 0, `item(s) released by two tranches, which takes two SRS ratings for one card: ${[...new Set(dupes)].join(', ')}`);
  const taught = new Set(L!.itemIds ?? []);
  const stray = flat.filter((id) => !taught.has(id));
  strictEqual(stray.length, 0, `tranche(s) release item(s) the lesson does not teach: ${stray.join(', ')}`);
  const never = [...taught].filter((id) => !flat.includes(id));
  strictEqual(never.length, 0, `item(s) taught but released by no tranche, so they never reach spaced repetition: ${never.join(', ')}`);
});

test('no tranche releases an item before the act that shows it', { skip: noLesson }, () => {
  const acts = L!.acts ?? [];
  const tranches = L!.deckTranche ?? [];
  for (let a = 0; a < acts.length; a++) {
    const shownByThisActOrEarlier = new Set<string>();
    for (let k = 0; k <= a; k++) {
      for (const sid of acts[k].sections) {
        const s = sectionById(sid);
        if (!s) continue;
        for (const id of (s as { itemIds?: string[] }).itemIds ?? []) shownByThisActOrEarlier.add(id);
        for (const str of strings(s)) {
          for (const id of L!.itemIds ?? []) {
            const fr = ITEMS.get(id)?.fr;
            if (fr && str.includes(fr)) shownByThisActOrEarlier.add(id);
          }
        }
      }
    }
    for (const id of tranches[a] ?? []) {
      ok(shownByThisActOrEarlier.has(id), `act ${a + 1} releases ${id} ("${ITEMS.get(id)?.fr}") before any section has shown it, so a learner is asked to rate a card they have never met`);
    }
  }
});

test('exactly one quiz section, because the pager renders exactly one', { skip: noLesson }, () => {
  strictEqual(sectionsOf().filter((s) => s.type === 'quiz').length, 1, 'a second quiz section would be authored and drawn by nothing');
});

test('every section is in exactly one act, and every act names real sections', { skip: noLesson }, () => {
  const ids = sectionIds();
  const claimed = (L!.acts ?? []).flatMap((a) => a.sections);
  const twice = claimed.filter((id, i) => claimed.indexOf(id) !== i);
  strictEqual(twice.length, 0, `section(s) claimed by two acts: ${twice.join(', ')}`);
  for (const id of ids) ok(claimed.includes(id), `section ${id} is in no act, so the journey never reaches it`);
  for (const id of claimed) ok(ids.includes(id), `an act names ${id}, which is not a section`);
});

test('the sheet is reachable and every sheet section is one the renderer draws', { skip: noLesson }, () => {
  const sheetIds = new Set((L!.sheets ?? []).map((s) => s.id));
  const referenced = sectionsOf().map((s) => (s as { sheetId?: string }).sheetId).filter(Boolean) as string[];
  for (const id of referenced) ok(sheetIds.has(id), `a section names sheetId "${id}" with no such sheet`);
  for (const id of sheetIds) ok(referenced.includes(id), `sheet "${id}" is linked from no section`);
  // ReferenceSheet.tsx draws teach, letterGrid and table. A cheatSheet inside a
  // sheet draws its TITLE AND NOTHING ELSE, which a1.13 ships today.
  const DRAWN = new Set(['teach', 'letterGrid', 'table']);
  for (const sh of L!.sheets ?? []) {
    for (const sec of sh.sections ?? []) {
      ok(DRAWN.has(sec.type), `${sh.id} carries a ${sec.type} section, which the sheet renderer does not draw`);
    }
  }
});

test('no autoplay and no imageRef are authored', { skip: noLesson }, () => {
  const blob = JSON.stringify(L);
  ok(!blob.includes('"autoplay"'), 'autoplay is declared in schema.ts and implemented in no component. Use audioFirst.');
  ok(!blob.includes('"imageRef"'), 'lesson-contract.test.ts does not check imageRef and an unregistered ref draws a blank box');
});

/* ═══ 11. The quiz ════════════════════════════════════════════════════════ */

test('the exam is at most half mcq and every question has a why and a real ref', { skip: noLesson }, () => {
  const qs = examQuestions();
  ok(qs.length > 0, 'the exam has no questions');
  const mcq = qs.filter((q) => q.format === 'mcq').length;
  ok(mcq * 2 <= qs.length, `${mcq}/${qs.length} questions are mcq, over the half limit`);
  const ids = sectionIds();
  for (const q of qs) {
    ok(q.why, `question has no why: ${q.q}`);
    ok(q.ref && ids.includes(q.ref), `question ref ${JSON.stringify(q.ref)} names no section: ${q.q}`);
  }
});

test('every free-text question accepts the answer it displays, through the REAL matcher', { skip: noLesson }, () => {
  for (const q of examQuestions()) {
    if (!['typeIn', 'errorSpot', 'speak'].includes(q.format ?? '')) continue;
    const shown = q.answer ?? '';
    ok(matchesAccept(shown, q.accept ?? []), `"${shown}" is displayed as the answer and the accept list rejects it`);
  }
});

test('no question has two identical options', { skip: noLesson }, () => {
  for (const q of examQuestions()) {
    const opts = q.opts ?? [];
    if (!opts.length) continue;
    strictEqual(new Set(opts).size, opts.length, `duplicate option in "${q.q}"`);
    ok(typeof q.correct === 'number' && q.correct < opts.length, `"${q.q}" has no valid correct index`);
  }
});

test('no correct-answer slot holds more than 40% of the closed EXAM questions', { skip: noLesson }, () => {
  // QuizDeckView shuffles these at runtime (LessonPager.tsx:839 →
  // LessonRich.tsx:1232), so the authored slot is invisible to a learner. The
  // cap is authoring hygiene and every A1 test carries it.
  const closed = examQuestions().filter((q) => typeof q.correct === 'number');
  const slots = new Map<number, number>();
  for (const q of closed) slots.set(q.correct!, (slots.get(q.correct!) ?? 0) + 1);
  for (const [s, n] of slots) {
    ok((n / closed.length) * 100 <= 40, `exam slot ${s} holds ${Math.round((n / closed.length) * 100)}% of ${closed.length} closed questions`);
  }
});

/* ═══ 12. THE IN-MISSION ANSWER SPREAD, WHICH NOTHING SHUFFLES ════════════ */

type InMission = { section: string; q: string; correct: number; opts: string[] };
function inMissionClosed(): InMission[] {
  const out: InMission[] = [];
  for (const s of sectionsOf()) {
    const sid = (s as { id?: string }).id ?? '?';
    if (s.type === 'groupDrill') {
      for (const g of s.groups) if (g.check) out.push({ section: sid, q: g.check.q, correct: g.check.correct, opts: g.check.opts });
    }
    if (s.type === 'listening') {
      for (const q of s.questions) out.push({ section: sid, q: q.q, correct: q.correct, opts: q.opts });
    }
  }
  return out;
}

test('the in-mission closed questions exist, so the spread checks are not vacuous', { skip: noLesson }, () => {
  ok(inMissionClosed().length >= 8, `only ${inMissionClosed().length} in-mission closed questions found`);
});

test('no correct-answer slot holds more than 40% of the IN-MISSION questions', { skip: noLesson }, () => {
  // THIS IS A DIFFERENT SURFACE FROM THE EXAM AND IT IS NOT SHUFFLED BY
  // ANYTHING. MissionRich.tsx renders q.opts.map in AUTHORED ORDER at :347 (the
  // groupDrill check), :732 (TrapOptions) and :1941 (listening). A learner sees
  // the position the author typed. No other A1 test checks this.
  const all = inMissionClosed();
  const slots = new Map<number, number>();
  for (const q of all) slots.set(q.correct, (slots.get(q.correct) ?? 0) + 1);
  for (const [s, n] of slots) {
    ok(
      (n / all.length) * 100 <= 40,
      `in-mission slot ${s} holds ${Math.round((n / all.length) * 100)}% of ${all.length} questions. Nothing shuffles these, so a learner can answer by position.`,
    );
  }
});

test('no two consecutive in-mission questions in one section share a slot', { skip: noLesson }, () => {
  const bySection = new Map<string, InMission[]>();
  for (const q of inMissionClosed()) {
    const list = bySection.get(q.section) ?? [];
    list.push(q);
    bySection.set(q.section, list);
  }
  for (const [sid, list] of bySection) {
    for (let k = 1; k < list.length; k++) {
      ok(list[k].correct !== list[k - 1].correct, `${sid}: questions ${k} and ${k + 1} both answer in slot ${list[k].correct}, and MissionRich does not shuffle them`);
    }
  }
});

test('every in-mission correct index is in range', { skip: noLesson }, () => {
  for (const q of inMissionClosed()) {
    ok(q.correct >= 0 && q.correct < q.opts.length, `${q.section}: correct index ${q.correct} is out of range for ${q.opts.length} options`);
  }
});

test('every in-mission groupDrill check carries a why', { skip: noLesson }, () => {
  for (const s of sectionsOf()) {
    if (s.type !== 'groupDrill') continue;
    for (const g of s.groups) {
      if (!g.check) continue;
      ok(g.check.why, `${(s as { id?: string }).id}: a control check has no why`);
    }
  }
});

/* ═══ 13. Drills are reachable ════════════════════════════════════════════ */

test('every teaching drill is the FIRST resolving target of exactly one round', { skip: noLesson }, () => {
  // drillForRound walks a round's targets and fires the drill of the first that
  // resolves, then STOPS. a1.05 shipped two drills named in second place and a
  // first draft of a1.07 a third; all three were dead content.
  const quiz = sectionsOf().find((s) => s.type === 'quiz');
  const rounds = quiz && quiz.type === 'quiz' ? quiz.rounds ?? [] : [];
  const triggers = L!.errorTriggers ?? [];
  const fired = new Set<string>();
  for (const r of rounds) {
    const t = (r.targets ?? []).find((x) => triggers.some((e) => e.id === x && e.drill));
    if (t) {
      ok(!fired.has(t), `two rounds both fire ${t}, so one of them has no remediation of its own`);
      fired.add(t);
    }
  }
  const orphans = triggers.filter((e) => e.drill && !fired.has(e.id)).map((e) => e.id);
  strictEqual(orphans.length, 0, `trigger(s) whose drill no round can fire: ${orphans.join(', ')}`);
});

test('the six error triggers are all present, by id', { skip: noLesson }, () => {
  // The SHAPE of the lesson, not a measurement of it. A trim that drops one is
  // what this asserts against.
  const ids = (L!.errorTriggers ?? []).map((e) => e.id).sort();
  strictEqual(
    ids.join(','),
    'err-bare-midi,err-dropped-se,err-habit,err-mixed,err-no-article,err-order',
    `the error triggers have changed: ${ids.join(', ')}`,
  );
});

test('err-no-article and err-bare-midi are kept apart', { skip: noLesson }, () => {
  // They look like one error and are two. The first is not having the rule. The
  // second is having it and applying it where it does not reach, which the rule
  // CREATES. A learner who fixes the first makes the second MORE often, and
  // merging them would remediate only one.
  const t = L!.errorTriggers ?? [];
  const a = t.find((e) => e.id === 'err-no-article');
  const b = t.find((e) => e.id === 'err-bare-midi');
  ok(a && b, 'one of the two article triggers has gone');
  ok(a!.drill !== b!.drill, 'the two article triggers now share a drill, so one of them is unremediated');
});

/* ═══ 14. The dictée ══════════════════════════════════════════════════════ */

test('every dictée target carries a dictation drill and is a real row', { skip: noLesson || noSrc }, () => {
  for (const id of SRC_DICTATION) {
    const row = ITEMS.get(id);
    ok(row, `dictée target ${id} is not in the seed`);
    ok((row!.drills ?? []).includes('dictation'), `dictée target ${id} carries no dictation drill`);
  }
});

test('the dictée is in word mode and word mode still tests the contrast', { skip: noLesson || noSrc }, () => {
  // ALL SEVEN of this theme's dictation-carrying sentences are over the letters
  // limit, so there was no letters-mode option and this lesson authors no
  // sentences. Word mode hands every real word over as a tile, which normally
  // means it tests order rather than choice. It tests the choice HERE because
  // wordDecoys puts exactly the wrong answer into the bank. If that generator
  // changes, this goes red rather than the dictée quietly testing nothing.
  const midday = ITEMS.get(SRC_DICTATION[0]);
  ok(midday, 'the midday dictée target has gone');
  strictEqual(dicteeMode(midday!.fr), 'words', 'the midday target is no longer in word mode; the reasoning in the header needs revisiting');
  const decoys = wordDecoys(midday!.fr).map((d) => d.toLowerCase());
  ok(decoys.includes('le'), `the midday dictée no longer offers "le" as a decoy (got ${JSON.stringify(decoys)}). Without it, word mode hands the learner every correct word and tests nothing this lesson teaches.`);
});

/* ═══ 15. Spoken practice can actually play ═══════════════════════════════ */

test('every spoken-practice item carries voiceflash', { skip: noLesson || noSrc }, () => {
  const missing = SRC_SPEAK.filter((id) => !(ITEMS.get(id)?.drills ?? []).includes('voiceflash'));
  strictEqual(missing.length, 0, `spoken practice names item(s) with no voiceflash, which play nothing: ${missing.join(', ')}`);
});

test('no reading-only row reaches a production surface', { skip: noLesson || noSrc }, () => {
  const produce = [...SRC_SPEAK, ...SRC_DICTATION];
  const leaked = SRC_READING_ONLY.filter((id) => produce.includes(id));
  strictEqual(leaked.length, 0, `third-person row(s) the learner is asked to produce: ${leaked.join(', ')}`);
});

test('no withdrawn row reaches the lesson at all', { skip: noLesson || noSrc }, () => {
  const smuggled = SRC_WITHDRAWN.filter((id) => (L!.itemIds ?? []).includes(id));
  strictEqual(smuggled.length, 0, `withdrawn row(s) in itemIds: ${smuggled.join(', ')}`);
  // fr.a1.routines.009 is a French grammar note stored as a learner sentence.
  // It must not appear anywhere a learner reads, by TEXT as well as by id.
  const note = ITEMS.get('fr.a1.routines.009');
  if (note) {
    ok(!strings(sectionsOf()).some((s) => s.includes(note.fr)), 'the French grammar note stored at fr.a1.routines.009 reached a screen');
  }
});

/* ═══ 16. The reframe ═════════════════════════════════════════════════════ */

test('the reframe is carried verbatim, and often enough to be a spine', { skip: noLesson || noSrc }, () => {
  strictEqual(L!.reframe, SRC_REFRAME, 'the seed reframe and the authored reframe disagree');
  const blob = JSON.stringify(L);
  let n = 0; let i = 0;
  while ((i = blob.indexOf(SRC_REFRAME, i)) !== -1) { n++; i += SRC_REFRAME.length; }
  // Asserted against an explicit floor, not a figure derived from the lesson. A
  // derived count compares the content to itself and passes on any rewording.
  ok(n >= 3, `the reframe appears ${n} times; the density validator needs it verbatim in at least three sections`);
  ok(n <= 12, `the reframe appears ${n} times, which is past the point where a learner stops reading it`);
});

test('the reframe still names both halves of the rule', { skip: noSrc }, () => {
  ok(/midi/i.test(SRC_REFRAME), 'the reframe no longer names midi, so it states only the half that is easy');
  ok(/\ble\b/i.test(SRC_REFRAME), 'the reframe no longer names the little word');
});

/* ═══ 17. House rules ═════════════════════════════════════════════════════ */

test('no em dash anywhere in the lesson', { skip: noLesson }, () => {
  const bad = strings(L).filter((s) => s.includes('—'));
  strictEqual(bad.length, 0, `em dash in: ${bad.slice(0, 2).join(' | ')}`);
});

test('no honest, and no AI-tell phrasing', { skip: noLesson }, () => {
  const all = strings(L).join('\n').toLowerCase();
  ok(!/\bhonest/.test(all), '"honest" is banned from authored content and the guard catches "honestly" too');
  for (const p of ['falls fast', 'trip up', 'half of everything', 'this is the big one', 'listen to the trap', 'get those two right', 'this is the part that pays', 'here is the catch']) {
    ok(!all.includes(p), `banned phrasing: "${p}"`);
  }
});

test('the reading passage is one block, because an authored newline is discarded', { skip: noLesson }, () => {
  const r = sectionsOf().find((s) => s.type === 'reading');
  ok(r, 'the reading section has gone');
  ok(!(r as unknown as { text: string }).text.includes('\n'), 'PassagePage splits on sentence ends and silently discards an authored newline');
});

test('the scene break body stays inside the band the shipped scenes use', { skip: noLesson }, () => {
  const scene = sectionsOf().find((s) => s.type === 'scene');
  ok(scene, 'the scene has gone');
  const beats = (scene as unknown as { beats: { kind: string; body?: string }[] }).beats ?? [];
  const brk = beats.find((b) => b.kind === 'break');
  ok(brk?.body, 'the scene has no break beat');
  const words = brk!.body!.trim().split(/\s+/).length;
  ok(words >= 24 && words <= 40, `the break body is ${words} words; the shipped scenes run 24 to 40`);
});

test('no groupDrill carries a size, and every control page carries items: []', { skip: noLesson }, () => {
  for (const s of sectionsOf()) {
    if (s.type !== 'groupDrill') continue;
    const sid = (s as { id?: string }).id;
    ok(!(s as { size?: string }).size, `${sid} carries a size. xl reads as a TWELVE-WORD CAP on every string in the section and every check here has a teaching why.`);
    for (const g of s.groups) {
      ok(Array.isArray(g.items), `${sid}: a group has no items array. A control page carries items: [] explicitly.`);
    }
  }
});

/* ═══ 18. Seed / source parity, every figure DERIVED ══════════════════════ */

test('the seed lesson and the authored lesson are the same object', { skip: noLesson || noSrc }, () => {
  // Canonical, not byte-for-byte: a publish rewrites the seed from Postgres and
  // reorders keys with no content change. See canonicalJson in schema.ts.
  strictEqual(canonicalJson(L), canonicalJson(SRC), 'seed.json and ealch-admin have drifted; re-run merge-routine-into-seed.ts');
});

test('the item counts agree with the authored source', { skip: noLesson || noSrc }, () => {
  strictEqual((L!.itemIds ?? []).length, SRC_ITEM_IDS.length, 'itemIds length differs from the authored source');
  strictEqual(SRC_ITEM_IDS.length, SRC_REUSED.length + SRC_AUTHORED.length, 'the lesson teaches a different number of items than the manifests hold');
});

test('the manifest still describes the rows the seed actually has', { skip: noLesson || noSrc }, () => {
  for (const r of SRC_REUSED) {
    const row = ITEMS.get(r.id);
    ok(row, `manifest row ${r.id} is not in the seed`);
    strictEqual(row!.fr, r.fr, `${r.id}: manifest says ${JSON.stringify(r.fr)}, seed says ${JSON.stringify(row!.fr)}`);
    strictEqual(row!.en, r.en, `${r.id}: en has drifted`);
  }
});

test('every manifest group carries a why', { skip: noSrc }, () => {
  const n = Object.keys(SRC_GROUP_WHY).length;
  ok(n >= 8, `only ${n} manifest groups have a why`);
  for (const [k, v] of Object.entries(SRC_GROUP_WHY)) {
    ok(v.length > 60, `the why for "${k}" is too short to be a justification`);
  }
});

test('the parts and bare id lists in the lesson match the corpus definition', { skip: noSrc }, () => {
  strictEqual(SRC_PART_IDS.join(), SRC_TAKES_ARTICLE.map((p) => p.id).join(), 'the lesson and the corpus disagree about which times take an article');
  strictEqual(SRC_BARE_IDS.join(), SRC_TAKES_NOTHING.map((p) => p.id).join(), 'the lesson and the corpus disagree about which times take none');
  strictEqual(SRC_TAKES_ARTICLE.length, 4, 'the articled set is no longer four');
  strictEqual(SRC_TAKES_NOTHING.length, 2, 'the bare set is no longer two');
});

test('the recorded corpus figures behind each time of day are still plausible', { skip: noSrc }, () => {
  for (const p of SRC_TAKES_ARTICLE) {
    ok(p.pg > 0, `${p.fr} is recorded at ${p.pg} published sentences, which cannot be right for a taught word`);
    ok(p.seed <= p.pg, `${p.fr} records more seed rows than Postgres rows, which is impossible: the seed is a CUT`);
  }
  for (const p of SRC_TAKES_NOTHING) {
    strictEqual(p.pgWithLe, 0, `${p.fr} is no longer recorded at zero with an article`);
    ok(p.pgWithA > 0, `${p.fr} records no sentences with à, so the lesson has nothing behind it`);
  }
});

test('the repair lists are the size this build recorded, and each repair was really broken', { skip: noSrc }, () => {
  strictEqual(SRC_REPAIRS.length, 3, 'the respelling-repair list has changed size');
  for (const r of SRC_REPAIRS) {
    ok(r.from, `${r.id} is listed as a repair with no previous value`);
    // A repair must fix something the REAL checker flags. A variant that merely
    // differs is not a violation and must not be in this list.
    ok(hasPlainNasalFor(r.fr, r.from!), `${r.id} "${r.fr}" is listed as a repair but its old value ${JSON.stringify(r.from)} is not flagged by hasPlainNasalFor`);
    ok(!hasPlainNasalFor(r.fr, r.to), `${r.id}: the replacement ${JSON.stringify(r.to)} is still flagged`);
  }
  strictEqual(SRC_DRILL_ADDITIONS.length, 3, 'the drill-addition list has changed size');
});
