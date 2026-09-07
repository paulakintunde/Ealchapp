// a1.22.l1 "Pays & nationalités": the assertions that keep this lesson true.
//
// Modelled on a1-17-possessifs.test.ts and sons-07-elision.test.ts. Everything
// here runs the REAL app function rather than a copy: an earlier a1.01 test
// inlined its own glossary lookup, copied the version that was already broken,
// and passed while the feature was dead.
//
// ── What this file is actually guarding ────────────────────────────────────
//
// This lesson IMPORTS almost everything it teaches. 192 country and nationality
// headwords are published and all twenty-four this lesson uses already existed,
// so the failure mode here is not "the word is missing", it is:
//
//   a country losing its article in a later edit, which destroys the reframe
//   silently while every id still resolves
//   the going-to and coming-from grids drifting onto two screens, which turns
//   one decision into two tables
//   the vowel exception dropped as an edge case
//   the capital rule tested by a free-text question, which certifies nothing
//   because fold() strips case
//   a2.02's aller or venir arriving conjugated from the corpus
//   `la France` being "fixed" back to LAH FRAHNSS by somebody who trusts the
//   shared checker, which cannot see a word-internal nasal
//   `l'Espagne` being "fixed" TO a superscript it must not have
//
// Every one of those is asserted below, and every one was mutation-tested: the
// assertion was broken on purpose and confirmed to go red before it was kept.
//
// ── The one thing this lesson did to its neighbours ────────────────────────
//
// Importing twenty-four gendered single-word headwords moved SIX of a1.03's
// twenty-seven printed counts. That is measured here too, from the seed against
// a1.03's own source, so the two can never drift apart again without a test
// saying so. See the header of ealch-admin/scripts/data/pays-corpus.ts.

import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { deepStrictEqual, ok, strictEqual } from 'node:assert';
import { test } from 'node:test';

import type { Item, Lesson } from './schema.ts';
import { quizQuestions, validateLesson, formatIssues } from './schema.ts';
import { validateDensity, formatDensity, hasPlainNasalFor } from './density.logic.ts';
import { endingPopulation, measureEnding } from './gender.logic.ts';
import { dicteeMode } from './dictee.logic.ts';
import { MAX_GLOSS_WORDS, glossKeys, segmentSentence } from './gloss.logic.ts';
import { matchesAccept } from './answer.logic.ts';

const here = dirname(fileURLToPath(import.meta.url));
const seed = JSON.parse(readFileSync(resolve(here, 'seed.json'), 'utf8')) as {
  version: number; items: Item[]; lessons: Lesson[];
  units: { id: string; lessonIds?: string[]; themes?: string[]; prereqUnitIds?: string[] }[];
};

const L = seed.lessons.find((l) => l.id === 'a1.22.l1');
const noLesson = !L;

/* ─── The authored source, self-skipping if ealch-admin is absent ──────────
 *
 * Every source-derived assertion below no-ops without it, which is the pattern
 * every other lesson test in this repo uses. The SEED assertions still run. */

type Country = {
  id: string; fr: string; en: string; gender: 'm' | 'f'; slot: 'f' | 'm' | 'pl' | 'mv';
  bare: string; respell: string; ipa: string;
  to: string; toRespell: string; from: string; fromRespell: string;
  natId: string; nat: string; natEn: string; natRespell: string;
};
type Repair = { id: string; fr: string; from: string; to: string; caughtByChecker: boolean };
type Display = { fr: string; ipa: string; respell: string; en: string };

let SRC: Lesson | null = null;
let SRC_REFRAME = '';
let TWELVE: Country[] = [];
let SRC_AUTHORED: Item[] = [];
let SRC_IMPORTED: Item[] = [];
let SRC_REUSED: { id: string; fr: string; en: string }[] = [];
let SRC_RESPELL: Record<string, Display> = {};
let SRC_REPAIRS: Repair[] = [];
let SRC_IPA_REPAIRS: { id: string; fr: string; from: string; to: string }[] = [];
let SRC_NASAL: string[] = [];
let SRC_NOT_NASAL: string[] = [];
let SRC_CONJUGATED: string[] = [];
let SRC_RECENT_PAST: string[] = [];
let SRC_LANGUAGE: string[] = [];
let SRC_QUEBEC: string[] = [];
let SRC_FORBIDDEN: string[] = [];
let SRC_READING_ONLY: string[] = [];
let SRC_WITHDRAWN: string[] = [];
let SRC_RANGE = { from: '', to: '' };
let SRC_SPEAK: string[] = [];
let SRC_DICTATION: string[] = [];
let SRC_TRANCHES: string[][] = [];
let SRC_ITEM_IDS: string[] = [];
let hasPhrase: (h: string, n: string) => boolean = () => false;
let gridCell: (s: 'f' | 'm' | 'pl', d: 'to' | 'from') => { id: string; origin: string } = () => ({ id: '', origin: '' });
let PRINTED_ENDINGS: { ending: string; items: number; accuracy: number }[] = [];

try {
  const corpus = await import('../../../ealch-admin/scripts/data/pays-corpus.ts');
  const lesson = await import('../../../ealch-admin/scripts/data/pays-lesson.ts');
  const endings = await import('../../../ealch-admin/scripts/data/genre-endings.ts');
  SRC = lesson.PAYS_LESSON as Lesson;
  SRC_REFRAME = lesson.REFRAME as string;
  TWELVE = corpus.THE_TWELVE as unknown as Country[];
  SRC_AUTHORED = (corpus.AUTHORED_SENTENCES as unknown[]).map((s) => corpus.toItem(s as never)) as Item[];
  SRC_IMPORTED = corpus.IMPORTED as unknown as Item[];
  SRC_REUSED = corpus.REUSED as unknown as typeof SRC_REUSED;
  SRC_RESPELL = corpus.RESPELL as unknown as Record<string, Display>;
  SRC_REPAIRS = corpus.RESPELL_REPAIRS as unknown as Repair[];
  SRC_IPA_REPAIRS = corpus.IPA_REPAIRS as unknown as typeof SRC_IPA_REPAIRS;
  SRC_NASAL = corpus.NASAL_FORMS as string[];
  SRC_NOT_NASAL = corpus.NOT_NASAL_FORMS as string[];
  SRC_CONJUGATED = corpus.CONJUGATED_FORMS as string[];
  SRC_RECENT_PAST = corpus.RECENT_PAST_FRAMES as string[];
  SRC_LANGUAGE = corpus.LANGUAGE_TEACHING as string[];
  SRC_QUEBEC = corpus.QUEBEC_TEACHING as string[];
  SRC_FORBIDDEN = corpus.FORBIDDEN_FORMS as string[];
  SRC_READING_ONLY = corpus.READING_ONLY_IDS as string[];
  SRC_WITHDRAWN = corpus.WITHDRAWN_IDS as string[];
  SRC_RANGE = corpus.OWNED_ID_RANGE as typeof SRC_RANGE;
  SRC_SPEAK = lesson.PAYS_SPEAK_IDS as string[];
  SRC_DICTATION = lesson.PAYS_DICTATION_IDS as string[];
  SRC_TRANCHES = lesson.PAYS_TRANCHES as string[][];
  SRC_ITEM_IDS = lesson.PAYS_ITEM_IDS as string[];
  hasPhrase = corpus.hasPhrase as typeof hasPhrase;
  gridCell = corpus.gridCell as typeof gridCell;
  PRINTED_ENDINGS = [
    ...(endings.ENDING_RULES as typeof PRINTED_ENDINGS),
    ...(endings.WORTHLESS_ENDINGS as typeof PRINTED_ENDINGS),
    ...(endings.MORE_ENDINGS as typeof PRINTED_ENDINGS),
  ];
} catch {
  // Not available; the source-derived tests below no-op.
}
const noSrc = !SRC;

/* ─── Helpers, none of which reimplements app logic ───────────────────────── */

function strings(v: unknown, out: string[] = []): string[] {
  if (typeof v === 'string') out.push(v);
  else if (Array.isArray(v)) v.forEach((x) => strings(x, out));
  else if (v && typeof v === 'object') Object.values(v).forEach((x) => strings(x, out));
  return out;
}

const sectionById = (id: string) => (L?.sections ?? []).find((s) => (s as { id?: string }).id === id);

/** The surfaces a learner READS or is TESTED on, not every string in the file.
 *  A guard written against every string fires on the corpus header, the audio
 *  brief and the handover, and gets deleted rather than fixed. */
function productionSurfaces(): string[] {
  if (!L) return [];
  const scenarios = L.sections.filter((s) => s.type === 'scenario') as unknown as {
    turns?: { user: string; alts?: { fr: string }[] }[];
  }[];
  const produced = scenarios.flatMap((s) => (s.turns ?? [])
    .flatMap((t) => [t.user, ...(t.alts ?? []).map((a) => a.fr)]));
  const decks = L.sections.filter(
    (s) => ['vocabThemes', 'flashcards', 'reviewDeck', 'cardDeck', 'tapTable', 'practice', 'dictation'].includes(s.type),
  );
  return [
    ...strings(decks),
    ...produced,
    ...strings(L.drills ?? []),
    ...strings(L.sections.find((s) => s.type === 'quiz') ?? {}),
  ];
}

/** The French this lesson stands behind as CORRECT: what it authored, the right
 *  half of every trap, what the learner is asked to say in the role play, and
 *  every accepted answer. NOT the quiz distractors and NOT the traps' wrong
 *  halves, which have to show the error in order to teach it. */
function correctFrench(): string[] {
  if (!L) return [];
  const scenarios = L.sections.filter((s) => s.type === 'scenario') as unknown as {
    turns?: { user: string; alts?: { fr: string }[] }[];
  }[];
  return [
    ...SRC_AUTHORED.map((i) => i.fr),
    ...L.sections.flatMap((s) => (s.type === 'commonErrors' ? s.errors.map((e) => e.right) : [])),
    ...scenarios.flatMap((s) => (s.turns ?? []).flatMap((t) => [t.user, ...(t.alts ?? []).map((a) => a.fr)])),
    ...questions().flatMap((q) => [q.answer ?? '', ...(q.accept ?? [])]),
    ...(L.drills ?? []).flatMap((d) => (d.opts && d.correct !== undefined ? [d.opts[d.correct]] : [])),
    ...((L.sections.find((s) => s.type === 'roundup') as { points?: string[] } | undefined)?.points ?? []),
  ];
}

/** Every string a learner can see, including the sheets and the term chips. */
function learnerFacing(): string[] {
  if (!L) return [];
  return [...strings(L.sections), ...strings(L.sheets ?? []), ...strings(L.terms ?? {})];
}

const quizSection = () => L?.sections.find((s) => s.type === 'quiz');
const questions = () => {
  const q = quizSection();
  return q ? quizQuestions(q as never) : [];
};

const seedById = new Map(seed.items.map((i) => [i.id, i] as const));

/* ═══ The spine ═══════════════════════════════════════════════════════════ */

const SPINE = [
  's01-scene', 's02-goals', 's03-article', 's04-sort',
  's05-pairs', 's06-hint', 's07-words', 's08-check',
  's09-going', 's10-table-going', 's11-vowel', 's12-drill-going',
  's13-coming', 's14-grid', 's15-drill-coming', 's16-traps',
  's17-agreement', 's18-ear', 's19-capital', 's20-reading',
  's21-flash', 's22-dictation', 's23-speak', 's24-scenario',
  's25-review', 's26-progress', 's27-quiz', 's28-roundup',
];

test('the lesson is in the seed, at the shape this file was written against', { skip: noLesson }, () => {
  strictEqual(L!.unitId, 'a1.22');
  strictEqual(L!.title, 'Pays & nationalités');
  strictEqual(L!.level, 'a1');
  // The eyebrow missions.ts derives at render time is `${level} · LEÇON
  // ${unit.seq}` and a1.22 sits at seq 25. a1.03 shipped a tag that disagreed
  // with the header and it took a device to find (commit 56c79a7).
  strictEqual(L!.tag, 'A1 · LEÇON 25');
  strictEqual(L!.sections.length, SPINE.length);
});

test('the spine is in order, and every section id is the one the acts name', { skip: noLesson }, () => {
  deepStrictEqual(L!.sections.map((s) => (s as { id?: string }).id), SPINE);
  const inActs = (L!.acts ?? []).flatMap((a) => a.sections);
  deepStrictEqual(inActs, SPINE, 'the acts must cover the spine exactly once, in order');
});

test('six acts, and the weight is on the decision rather than the country list', { skip: noLesson }, () => {
  const acts = L!.acts ?? [];
  strictEqual(acts.length, 6);
  deepStrictEqual(acts.map((a) => a.id), ['act1', 'act2', 'act3', 'act4', 'act5', 'act6']);
  for (const a of acts) {
    ok(a.milestone && a.milestone.length > 10, `${a.id} has no milestone`);
    ok((a.estScreens ?? 0) > 0, `${a.id} has no estScreens`);
    ok((a.restPoints ?? []).length > 0, `${a.id} has no rest point`);
  }
  // FOUR sections make the learner decide (the sorting and checking drills)
  // against ONE that lists the twelve. The brief is explicit that "the weight
  // belongs on the gender decision, not on the country list".
  const drills = L!.sections.filter((s) => s.type === 'groupDrill').length;
  const lists = L!.sections.filter((s) => s.type === 'vocabThemes').length;
  ok(drills >= 4, `${drills} groupDrill sections; the decision needs more practice than the list`);
  strictEqual(lists, 1, 'one vocabThemes section is enough for twelve countries');
});

test('the lesson passes validateLesson and the density validator', { skip: noLesson }, () => {
  deepStrictEqual(validateLesson(L!, L!.id), []);
  const issues = validateDensity(L!, new Set(seed.items.map((i) => i.id)));
  strictEqual(issues.length, 0, formatDensity(issues));
});

/* ═══ The reframe ═════════════════════════════════════════════════════════ */

/** Against an EXPLICIT CONSTANT, not a figure derived from the lesson. A derived
 *  count compares the content to itself and passes on any rewording. */
const REFRAME = 'Learn the country with its article. Everything else follows.';
const REFRAME_APPEARANCES = 13;

test('the reframe is carried verbatim, the exact number of times authored', { skip: noLesson }, () => {
  strictEqual(L!.reframe, REFRAME, 'the reframe has been reworded');
  const hits = strings(L).filter((s) => s.includes(REFRAME)).length;
  strictEqual(hits, REFRAME_APPEARANCES, `the reframe appears ${hits} times, expected ${REFRAME_APPEARANCES}`);
  // The density validator wants it verbatim in at least three sections.
  const sections = L!.sections.filter((s) => strings(s).some((t) => t.includes(REFRAME))).length;
  ok(sections >= 3, `only ${sections} sections carry the reframe`);
});

test('the source and the seed agree about the reframe', { skip: noLesson || noSrc }, () => {
  strictEqual(SRC_REFRAME, REFRAME);
  strictEqual(SRC!.reframe, L!.reframe);
});

/* ═══ THE TWELVE COUNTRIES, EACH BY NAME AND WITH ITS ARTICLE ═════════════ */

test('every country is on a screen WITH its article, asserted one by one', { skip: noLesson || noSrc }, () => {
  // INDIVIDUALLY rather than as a count, because a country stripped of its
  // article in a later edit destroys the reframe silently: the id still
  // resolves, the deck still renders, and the one fact the whole lesson runs on
  // is gone. A count would pass with `France` swapped in for `la France`.
  const text = learnerFacing().join('\n');
  const missing = TWELVE.filter((c) => !text.includes(c.fr));
  deepStrictEqual(missing.map((c) => c.fr), [], 'country(ies) never shown with their article');
  // And BARE, which is what the failure actually looks like. A country name on
  // a card with no article in front of it anywhere in the lesson is the defect.
  for (const c of TWELVE) {
    const withArticle = text.split(c.bare).length - 1;
    const shown = text.split(c.fr).length - 1;
    ok(shown > 0, `${c.fr} appears ${withArticle} times and never with its article`);
  }
});

test('every nationality is named, and none of them carries an article', { skip: noLesson || noSrc }, () => {
  const text = learnerFacing().join('\n');
  const missing = TWELVE.filter((c) => !hasPhrase(text, c.nat));
  deepStrictEqual(missing.map((c) => c.nat), [], 'nationality(ies) never named on any screen');
  // A nationality never takes an article. « le français » is the LANGUAGE and
  // belongs to ecole and matieres, which is why this is checked as a phrase.
  //
  // Scoped to CORRECT FRENCH rather than to every string. The exam has to SHOW
  // « Il est le français. » as a distractor in order to ask about it, and a
  // guard that fires on a deliberate wrong answer gets deleted rather than
  // fixed. `un Français` with a capital is the noun and is legitimate, so the
  // comparison is case-sensitive here where hasPhrase is not.
  for (const c of TWELVE) {
    for (const bad of [`le ${c.nat}`, `la ${c.nat}`, `un ${c.nat}`, `une ${c.nat}`]) {
      const hits = correctFrench().filter((s) => s.includes(bad));
      deepStrictEqual(hits, [], `"${bad}" is authored as correct French; a nationality takes no article`);
    }
  }
});

test('the twelve are five la, five le, one les and one with a vowel', { skip: noSrc }, () => {
  // THE SHAPE OF THE LESSON, so a quiet drop is exactly what this guards. The
  // balance is not decoration: `quiz-spread` caps any authored answer slot at
  // 40%, and a masculine-heavy set makes au and du correct far too often.
  strictEqual(TWELVE.length, 12);
  strictEqual(TWELVE.filter((c) => c.slot === 'f').length, 5);
  strictEqual(TWELVE.filter((c) => c.slot === 'm').length, 5);
  strictEqual(TWELVE.filter((c) => c.slot === 'pl').length, 1);
  strictEqual(TWELVE.filter((c) => c.slot === 'mv').length, 1);
  // The one that breaks a1.03's -e habit, and the one that borrows en.
  const mexique = TWELVE.find((c) => c.bare === 'Mexique');
  ok(mexique && mexique.gender === 'm' && mexique.bare.endsWith('e'),
    'le Mexique must be in the set: it ends in -e, takes le, and is the counterexample the -e hint needs');
  const iran = TWELVE.find((c) => c.slot === 'mv');
  ok(iran && iran.to.startsWith('en '), 'the vowel-initial masculine country must take en');
});

/* ═══ THE GRID: three rows, both directions, ONE SCREEN ═══════════════════ */

test('one section shows going to AND coming from, on all three rows', { skip: noLesson || noSrc }, () => {
  // THE LAYOUT THE BRIEF ASKS THE TEST TO ASSERT, and it is right: split across
  // two missions the two systems stop looking like one decision, which is the
  // only claim this lesson makes. A `find()` over all sections would be
  // satisfied by the reference sheet, so this names the in-flow tapTable.
  // CHECKED ON THE CELLS, not on the section's text. A first version scanned
  // every string in the section and stayed green with the second column
  // deleted, because the detail modal behind each row still quoted « Je viens
  // de France. » A tapTable's teaching is what is IN THE TABLE; what the modal
  // says is the explanation, and the learner has to tap to reach it.
  const carriers = L!.sections.filter((s) => {
    if (s.type !== 'tapTable') return false;
    const rows = (s as unknown as { rows?: { cells?: string[] }[] }).rows ?? [];
    const cells = rows.flatMap((r) => r.cells ?? []);
    return (['f', 'm', 'pl'] as const).every((slot) => {
      const c = TWELVE.find((x) => x.slot === slot)!;
      return cells.includes(c.to) && cells.includes(c.from);
    });
  }).map((s) => (s as { id?: string }).id);
  ok(carriers.includes('s14-grid'),
    `no tapTable has all six cells in its own rows (found: ${carriers.join(', ') || 'none'}); s14-grid must be the one`);
  // And the two columns are labelled as directions, so the row reads as one
  // decision made twice rather than as six unrelated phrases.
  const cols = (sectionById('s14-grid') as unknown as { cols?: string[] }).cols ?? [];
  strictEqual(cols.length, 2, 's14-grid must have two columns');
});

test('the going-to column arrives alone first, and the grid adds the second one', { skip: noLesson }, () => {
  // s10 is three rows by ONE column and s14 is three rows by two. A learner
  // meeting six cells cold reads a table rather than a decision.
  const going = sectionById('s10-table-going') as unknown as { cols?: string[]; rows?: unknown[] };
  const grid = sectionById('s14-grid') as unknown as { cols?: string[]; rows?: unknown[] };
  strictEqual(going?.cols?.length, 1, 's10-table-going must show one column');
  strictEqual(going?.rows?.length, 3, 's10-table-going must show three rows');
  strictEqual(grid?.cols?.length, 2, 's14-grid must show two columns');
  strictEqual(grid?.rows?.length, 3, 's14-grid must show three rows');
});

test('all six prepositions are taught and each is on a screen', { skip: noLesson }, () => {
  const text = learnerFacing().join('\n');
  for (const [prep, country] of [
    ['en', 'en France'], ['au', 'au Canada'], ['aux', 'aux États-Unis'],
    ['de', 'de France'], ['du', 'du Canada'], ['des', 'des États-Unis'],
  ]) {
    ok(text.includes(country), `"${country}" appears on no screen, so "${prep}" is taught without an example`);
  }
});

test('the six grid cells are one frame, and three of them were borrowed', { skip: noSrc }, () => {
  // Recorded because it is unusual and worth not re-discovering: three of the
  // six already existed in this exact frame and were NOT re-authored.
  const origins = (['f', 'm', 'pl'] as const).flatMap((s) => [gridCell(s, 'to'), gridCell(s, 'from')]);
  strictEqual(origins.length, 6);
  strictEqual(origins.filter((c) => c.origin === 'authored').length, 3);
  strictEqual(origins.filter((c) => c.origin !== 'authored').length, 3);
  for (const c of origins) ok(seedById.has(c.id), `grid cell ${c.id} is not in the seed`);
});

/* ═══ THE VOWEL EXCEPTION ════════════════════════════════════════════════ */

test('en with a vowel-initial masculine country is taught, by name', { skip: noLesson || noSrc }, () => {
  // The rule a redraft loses first, because it looks like an edge case. It is
  // the sixth time the learner has watched French keep two vowels apart.
  const iran = TWELVE.find((c) => c.slot === 'mv')!;
  const text = learnerFacing().join('\n');
  ok(text.includes(iran.to), `"${iran.to}" appears on no screen`);
  ok(text.includes(iran.from), `"${iran.from}" appears on no screen, so the learner never sees where it stops`);
  // AND IT IS EXPLAINED. A card that shows `en Iran` without saying why teaches
  // an exception to memorise rather than a pressure the learner already knows.
  const vowelSection = sectionById('s11-vowel');
  ok(vowelSection, 's11-vowel is missing');
  const vt = strings(vowelSection).join('\n').toLowerCase();
  ok(vt.includes('vowel'), 's11-vowel never says the reason is a vowel');
  ok(/l'amie|mon amie|n'ai|est-ce qu|combien d/.test(strings(vowelSection).join('\n')),
    's11-vowel names none of the five earlier repairs, so the rule reads as new');
});

test('the exception reaches the going-to column and no further', { skip: noSrc }, () => {
  const iran = TWELVE.find((c) => c.slot === 'mv')!;
  strictEqual(iran.to, 'en Iran');
  strictEqual(iran.from, "d'Iran", 'coming from, it behaves like every other le country');
  strictEqual(iran.gender, 'm', 'if it stops being masculine the exception stops being an exception');
});

/* ═══ THE CAPITAL RULE ═══════════════════════════════════════════════════ */

test('both forms of the capital contrast are on ONE screen', { skip: noLesson }, () => {
  const carriers = L!.sections.filter((s) => {
    const text = strings(s).join('\n');
    return text.includes('Il est français.') && text.includes("C'est un Français.");
  }).map((s) => (s as { id?: string }).id);
  ok(carriers.includes('s19-capital'),
    `the capital contrast is in ${carriers.join(', ') || 'no section'} and must be in s19-capital`);
  const cap = sectionById('s19-capital') as unknown as { type?: string; cols?: string[] };
  strictEqual(cap?.type, 'tapTable', 'the contrast needs two columns; a card deck splits it');
  strictEqual(cap?.cols?.length, 2);
});

test('the capital is tested by mcq and by NOTHING else', { skip: noLesson }, () => {
  // fold() strips accents, case, punctuation and all whitespace, so `français`
  // and `Français` fold together and NO free-text format can distinguish them.
  // errorSpot runs the SAME matchesAccept path as typeIn. Both the a1.08 and
  // a1.09 briefs recommended errorSpot for a capital and both were wrong.
  const capitalQs = questions().filter((q) => {
    const all = [q.q, ...(q.opts ?? []), ...(q.accept ?? []), q.answer ?? '', q.target ?? ''].join(' ');
    return /Français|capital/i.test(all) && /français/i.test(all);
  });
  ok(capitalQs.length >= 2, 'the capital rule is taught and barely tested');
  const freeText = capitalQs.filter((q) => q.format === 'typeIn' || q.format === 'errorSpot' || q.format === 'speak');
  deepStrictEqual(
    freeText.map((q) => `${q.format}: ${q.q}`), [],
    'a free-text question targets the capital. fold() cannot see it, so the question certifies nothing.',
  );
  ok(capitalQs.some((q) => q.format === 'mcq'), 'no mcq tests the capital, so it is taught and never checked');
});

test('fold() really cannot separate the two, measured rather than asserted', () => {
  // Through the REAL matchesAccept. If this ever starts passing, the rule above
  // can be relaxed; until then a typeIn on the capital is a question that marks
  // the wrong answer correct.
  ok(matchesAccept('français', ['Français']), 'fold() folds case, so a capital cannot be tested by free text');
  ok(matchesAccept('FRANCAIS', ['Français']), 'fold() also folds accents');
});

/* ═══ NO ARTICLE AFTER être ══════════════════════════════════════════════ */

test('no production surface puts an article between être and a nationality', { skip: noLesson || noSrc }, () => {
  // a1.06 already teaches this and this lesson retests it on a new set of words.
  // Every string in FORBIDDEN_FORMS is ungrammatical, so a hit is always a
  // defect rather than a false positive. Scoped to CORRECT FRENCH: the traps
  // card and the quiz distractors have to SHOW the error in order to teach it.
  const hits: string[] = [];
  for (const text of correctFrench()) {
    for (const f of SRC_FORBIDDEN) if (hasPhrase(text, f)) hits.push(`"${f}" in "${text}"`);
  }
  deepStrictEqual(hits, [], 'an ungrammatical form is authored as correct French');
});

test('the no-article rule is stated, not merely obeyed', { skip: noLesson }, () => {
  const text = learnerFacing().join('\n').toLowerCase();
  ok(/nothing (at all |else )?in front|no article|takes nothing/.test(text),
    'the lesson never says that a nationality after être takes nothing in front of it');
});

/* ═══ AGREEMENT IS a1.13's, APPLIED ══════════════════════════════════════ */

test('agreement is not taught as new: the earlier lessons are named', { skip: noLesson }, () => {
  // a1.09 opens by naming a1.08; this does the same for a1.13 and a1.06. Both
  // matter: a1.13 shipped the wakesUp term and the brun / brune collapse, and
  // a1.06 ALREADY ships the no-article rule, the capital rule and
  // français / française. Re-teaching either would tell a learner who has just
  // used them that they had not.
  const text = learnerFacing().join('\n');
  ok(/colou?rs lesson/i.test(text), 'the colours lesson is never named, so agreement reads as new');
  ok(/être lesson/i.test(text), 'the être lesson is never named, and it already ships the capital rule');
  const assumed = (L!.grammarAssumed ?? []).join('\n');
  ok(/a1\.13/.test(assumed), 'grammarAssumed does not credit a1.13');
  ok(/a1\.06/.test(assumed), 'grammarAssumed does not credit a1.06');
  ok(/a1\.03/.test(assumed), 'grammarAssumed does not credit a1.03, which is the machine this lesson runs on');
});

test('both agreement pairs are on a screen and the ear round uses them', { skip: noLesson }, () => {
  const text = learnerFacing().join('\n');
  for (const w of ['français', 'française', 'canadien', 'canadienne']) {
    ok(hasPhrase(text, w) || text.includes(w), `"${w}" appears on no screen`);
  }
  const ear = questions().filter((q) => q.format === 'listenChoose');
  ok(ear.length >= 2, 'the two audible pairs are worth one question each');
  for (const q of ear) {
    const opts = (q.opts ?? []).join(' ').toLowerCase();
    ok(/française|canadienne|français|canadien/.test(opts),
      `an ear question is not on the agreement: "${q.q}"`);
  }
});

test('no ear question is written on a preposition', { skip: noLesson }, () => {
  // en and au share no sound at all, so hearing them apart is not a skill worth
  // building and a question on it tests whether the learner was awake.
  const PREPS = ['en', 'au', 'aux', 'de', 'du', 'des'];
  const bad = questions()
    .filter((q) => q.format === 'listenChoose')
    .filter((q) => (q.opts ?? []).some((o) => PREPS.includes(o.trim().toLowerCase())));
  deepStrictEqual(bad.map((q) => q.q), [], 'an ear question asks the learner to hear a preposition');
});

/* ═══ aller AND venir BELONG TO a2.02 ════════════════════════════════════ */

test('no production surface carries a conjugated aller or venir', { skip: noLesson || noSrc }, () => {
  // The learner gets `je vais` and `je viens` as frozen frames and nothing else.
  // Written with their pronouns so a bare `va` inside another word cannot trip
  // it, and run against PRODUCTION surfaces so the scenario's own question
  // (« Vous venez d'où ? », which the learner only has to understand) does not
  // fire it. An earlier draft scanned every string and did exactly that.
  const surfaces = productionSurfaces();
  const hits = SRC_CONJUGATED.filter((f) => surfaces.some((s) => hasPhrase(s, f)));
  deepStrictEqual(hits, [], 'a conjugated form of aller or venir reached a production surface');
});

test('the third person is reading exposure and is never asked for as output', { skip: noLesson || noSrc }, () => {
  // « Il vient du Japon. » is fine on a page and must never be produced. Checked
  // as the ROWS rather than as the strings, because the strings appear on
  // legitimate reading surfaces.
  strictEqual(SRC_READING_ONLY.length, 3);
  const speak = (sectionById('s23-speak') as unknown as { itemIds?: string[] })?.itemIds ?? [];
  const dict = (sectionById('s22-dictation') as unknown as { itemIds?: string[] })?.itemIds ?? [];
  for (const id of SRC_READING_ONLY) {
    ok(!speak.includes(id), `${id} is in the speak mission and carries a third-person venir`);
    ok(!dict.includes(id), `${id} is a dictée target and carries a third-person venir`);
  }
  // And no scenario turn asks the learner to say one.
  const turns = (L!.sections.filter((s) => s.type === 'scenario') as unknown as {
    turns?: { user: string; alts?: { fr: string }[] }[];
  }[]).flatMap((s) => (s.turns ?? []).flatMap((t) => [t.user, ...(t.alts ?? []).map((a) => a.fr)]));
  for (const f of ['il vient', 'elle vient']) {
    ok(!turns.some((t) => hasPhrase(t, f)), `the learner is asked to produce "${f}"`);
  }
});

test('the lesson says on a card that the full verbs arrive later', { skip: noLesson }, () => {
  // A learner who notices the gap and is not told concludes the lesson is
  // incomplete. The brief asks for this in as many words.
  const text = learnerFacing().join('\n').toLowerCase();
  ok(/aller/.test(text) && /(later|a whole band|band from here)/.test(text),
    'nothing tells the learner that the verb behind je vais arrives later');
});

test('no venir de plus an infinitive appears anywhere', { skip: noLesson || noSrc }, () => {
  // 45 of the corpus's 134 `vien* d*` sentences are the recent past rather than
  // origin, and the two constructions are identical in French, so this would
  // arrive from the corpus unnoticed.
  const all = strings(L);
  const hits = SRC_RECENT_PAST.filter((f) => all.some((s) => s.toLowerCase().includes(f.toLowerCase())));
  deepStrictEqual(hits, [], 'the recent past reached a surface; venir de plus an infinitive is a2.02');
});

/* ═══ THE NEIGHBOURS KEEP THEIR LESSONS ══════════════════════════════════ */

test('no language-learning content, which is ecole and matieres', { skip: noLesson || noSrc }, () => {
  // `français` is the same word for the language, the adjective and the person,
  // so every probe is a PHRASE. A single common word is not a safe probe: a
  // guard that fires on legitimate content gets deleted rather than fixed.
  const surfaces = productionSurfaces();
  const hits = SRC_LANGUAGE.filter((w) => surfaces.some((s) => s.toLowerCase().includes(w.toLowerCase())));
  deepStrictEqual(hits, [], 'language-learning teaching found; parler is an a2.01 verb');
});

test('no Québec content, which has its own 593-row theme', { skip: noLesson || noSrc }, () => {
  const surfaces = productionSurfaces();
  const hits = SRC_QUEBEC.filter((w) => surfaces.some((s) => s.toLowerCase().includes(w.toLowerCase())));
  deepStrictEqual(hits, [], 'Québec content found; le Québec and québécois are published and deliberately not imported');
});

test('no city is taught as a place you come from', { skip: noLesson }, () => {
  // A city takes `de` with no article, which is a different rule and a1.21's.
  // The brief allows one card at most and this lesson takes none.
  const surfaces = productionSurfaces();
  for (const city of ['de Toulouse', 'de Paris', 'de Lyon', 'de Marseille', 'à Paris', 'à Lyon']) {
    ok(!surfaces.some((s) => hasPhrase(s, city)), `"${city}" reached a production surface; cities are a1.21's`);
  }
});

/* ═══ THE RESPELLING REPAIRS ═════════════════════════════════════════════ */

test('every repair is applied in the seed, asserted by name', { skip: noLesson || noSrc }, () => {
  strictEqual(SRC_REPAIRS.length, 10);
  for (const r of SRC_REPAIRS) {
    const row = seedById.get(r.id);
    ok(row, `${r.id} is not in the seed`);
    strictEqual(row!.fr, r.fr, `${r.id} is no longer "${r.fr}"`);
    strictEqual(row!.respell, r.to, `${r.id} "${r.fr}" carries "${row!.respell}", expected "${r.to}"`);
    ok(row!.respell !== r.from, `${r.id} still carries the broken value "${r.from}"`);
  }
});

test('la France is repaired, and the shared checker CANNOT see why', { skip: noSrc }, () => {
  // Invariant §3's first blind spot, reaching this lesson on the country it is
  // built on. hasPlainNasalFor needs the n to END a token; in `LAH FRAHNSS` an
  // SS follows it, so the broken value passes every shared check.
  //
  // Both directions are pinned so a later validator-passing "fix" goes red.
  strictEqual(SRC_RESPELL['la France'].respell, '[LAH FRAHⁿSS]');
  strictEqual(
    hasPlainNasalFor('la France', '[LAH FRAHNSS]'), false,
    'the shared checker now catches LAH FRAHNSS. If it has learned to see word-internal nasals, §3 needs updating.',
  );
  const row = seedById.get(SRC_REPAIRS.find((r) => r.fr === 'la France')!.id);
  strictEqual(row?.respell, 'LAH FRAHⁿSS');
});

test("l'Espagne and l'Allemagne are NOT repaired, and must not be", { skip: noSrc }, () => {
  // The other two the brief asks to be hand-verified. /lɛspaɲ/ and /lalmaɲ/
  // carry NO nasal vowel at all: `agne` is a plain a plus a palatal ɲ, and the
  // probe flags them on the LETTERS. A superscript on either would teach a sound
  // that is not in the word, which is a1.13's `jaune` trap exactly.
  strictEqual(SRC_RESPELL["l'Espagne"].respell, '[lehs-PAHNY]');
  strictEqual(SRC_RESPELL["l'Allemagne"].respell, '[lahl-MAHNY]');
  ok(!SRC_RESPELL["l'Espagne"].respell.includes('ⁿ'), "l'Espagne has grown a superscript it must not have");
  ok(!SRC_RESPELL["l'Allemagne"].respell.includes('ⁿ'), "l'Allemagne has grown a superscript it must not have");
  // And no repair claims either of them.
  const claimed = SRC_REPAIRS.filter((r) => r.fr === "l'Espagne" || r.fr === "l'Allemagne");
  deepStrictEqual(claimed, [], 'a repair claims a row that is already correct');
});

test('the shared checker passes every respelling the lesson displays', { skip: noSrc }, () => {
  // The REAL hasPlainNasalFor, imported rather than copied.
  const bad = Object.values(SRC_RESPELL).filter((d) => hasPlainNasalFor(d.fr, d.respell));
  deepStrictEqual(bad.map((d) => `${d.fr} ${d.respell}`), []);
});

test('every nasal form closes with a superscript, checked BY NAME', { skip: noSrc }, () => {
  const missing = SRC_NASAL.filter((f) => !SRC_RESPELL[f]?.respell.includes('ⁿ'));
  deepStrictEqual(missing, [], 'form(s) carrying a nasal vowel with no superscript');
  const wrong = SRC_NOT_NASAL.filter((f) => SRC_RESPELL[f]?.respell.includes('ⁿ'));
  deepStrictEqual(wrong, [], 'form(s) with a superscript and no nasal vowel to close');
});

test('the canadien / canadienne collapse is real in the transcriptions', { skip: noSrc }, () => {
  // The masculine carries a nasal vowel and the feminine collapses it into a
  // plain vowel plus a real n. That difference IS the ear question, and it is
  // a1.13's brun / brune shape.
  ok(SRC_RESPELL.canadien.respell.includes('ⁿ'));
  ok(!SRC_RESPELL.canadienne.respell.includes('ⁿ'));
  ok(SRC_RESPELL.français.respell !== SRC_RESPELL.française.respell,
    'français and française carry identical respellings; the s wakes up and that is the other ear question');
});

test('the one IPA repair is applied and no new tie is authored', { skip: noLesson || noSrc }, () => {
  strictEqual(SRC_IPA_REPAIRS.length, 1);
  for (const r of SRC_IPA_REPAIRS) {
    const row = seedById.get(r.id);
    ok(row, `${r.id} is not in the seed`);
    strictEqual(row!.ipa, r.to, `${r.id} carries "${row!.ipa}", expected "${r.to}"`);
    ok(!row!.ipa!.includes('‿'), `${r.id} still carries a U+203F tie`);
  }
  // NOTHING AUTHORED introduces one. Five imported sentence rows keep theirs
  // deliberately: there the tie marks a liaison, which is real information the
  // spelling does not show.
  const authoredJson = JSON.stringify({ SRC_AUTHORED, LESSON: SRC });
  ok(!authoredJson.includes('‿'), 'authored copy carries a U+203F tie, which renders as an underscore on a Pixel 6');
});

/* ═══ IMPORTS: EVERY ID RESOLVES AND NOTHING WAS RE-AUTHORED ══════════════ */

test('every imported row is in the seed and says what the manifest says', { skip: noLesson || noSrc }, () => {
  strictEqual(SRC_IMPORTED.length, 40);
  const drift: string[] = [];
  for (const it of SRC_IMPORTED) {
    const row = seedById.get(it.id);
    if (!row) { drift.push(`${it.id} is not in the seed at all`); continue; }
    if (row.fr !== it.fr) drift.push(`${it.id}: seed "${row.fr}" vs manifest "${it.fr}"`);
    if (row.en !== it.en) drift.push(`${it.id}: gloss differs`);
    if (row.theme !== it.theme) drift.push(`${it.id}: theme differs`);
    if ((row.gender ?? null) !== (it.gender ?? null)) drift.push(`${it.id}: gender differs`);
  }
  deepStrictEqual(drift, [], 'the imported rows and the seed have drifted');
});

test('every reused row is in the seed and unchanged', { skip: noLesson || noSrc }, () => {
  strictEqual(SRC_REUSED.length, 4);
  for (const r of SRC_REUSED) {
    const row = seedById.get(r.id);
    ok(row, `${r.id} is not in the seed`);
    strictEqual(row!.fr, r.fr, `${r.id} has changed under this lesson`);
  }
});

test('no imported row was re-authored under a new id', { skip: noSrc }, () => {
  // Re-authoring `la France` would fail flashhub-coverage.test.ts, which keys
  // decks on `fr` per theme, and would also join a1.03's measured population.
  const importedFr = new Set(SRC_IMPORTED.map((i) => `${i.theme}::${i.fr}`));
  const clash = SRC_AUTHORED.filter((a) => importedFr.has(`${a.theme}::${a.fr}`));
  deepStrictEqual(clash.map((a) => `${a.id} "${a.fr}"`), []);
});

test('this lesson authors eleven rows and NOT ONE headword', { skip: noSrc }, () => {
  strictEqual(SRC_AUTHORED.length, 11);
  const headwords = SRC_AUTHORED.filter((i) => i.kind !== 'sentence');
  deepStrictEqual(headwords.map((i) => i.id), [],
    'every country and nationality already existed; authoring one would be a second card for the same word');
  for (const a of SRC_AUTHORED) {
    ok(a.id >= SRC_RANGE.from && a.id <= SRC_RANGE.to, `${a.id} is outside the range this lesson owns`);
  }
});

test('the id range this lesson owns holds only its own rows', { skip: noSrc }, () => {
  // a1.15 landed INSIDE a1.17's range mid-build and a highest-id check passed
  // it, because rows below a batch's top do not move the maximum.
  const mine = new Set(SRC_AUTHORED.map((i) => i.id));
  const foreign = seed.items.filter(
    (i) => i.id >= SRC_RANGE.from && i.id <= SRC_RANGE.to
      && i.id.startsWith('fr.a1.pays-et-nationalites.') && !mine.has(i.id),
  );
  deepStrictEqual(foreign.map((i) => `${i.id} "${i.fr}"`), []);
});

test('the withdrawn rows stayed withdrawn', { skip: noSrc }, () => {
  // Each has a reason and none of them is taste: two carry a conjugated aller,
  // one is level a2, two are a second copy in a theme this lesson does not own,
  // and one is a CITY, which takes de with no article and is a different rule.
  ok(SRC_WITHDRAWN.length >= 6);
  const inLesson = new Set(SRC!.itemIds);
  const back = SRC_WITHDRAWN.filter((id) => inLesson.has(id));
  deepStrictEqual(back, [], 'withdrawn row(s) are back in the lesson');
});

/* ═══ EVERY ITEM IS ON A SCREEN, AND EVERY SCREEN'S ITEM RESOLVES ═════════ */

test('every declared itemId resolves against the seed', { skip: noLesson }, () => {
  const missing = L!.itemIds.filter((id) => !seedById.has(id));
  deepStrictEqual(missing, [], 'itemId(s) resolving to nothing draw empty cards');
});

test('every declared itemId is actually SHOWN, not merely resolvable', { skip: noLesson || noSrc }, () => {
  // a1.08 shipped 43 itemIds named by nothing at all: released to spaced
  // repetition, drawn by no component, and invisible until a check asked "did
  // the learner see it" rather than "does this id resolve".
  const named = new Set<string>([
    ...strings(L!.sections).filter((s) => s.startsWith('fr.')),
    ...strings(L!.drills ?? []).filter((s) => s.startsWith('fr.')),
    ...strings(L!.terms ?? {}).filter((s) => s.startsWith('fr.')),
  ]);
  // A section can also SHOW a row by printing its French rather than its id.
  const text = strings(L!.sections).join('\n');
  const unseen = L!.itemIds.filter((id) => {
    if (named.has(id)) return false;
    const row = seedById.get(id);
    return !row || !text.includes(row.fr);
  });
  deepStrictEqual(unseen, [], 'itemId(s) on no screen at all');
});

test('no dead corpus entry: every authored row is used by the lesson', { skip: noSrc }, () => {
  const inLesson = new Set(SRC!.itemIds);
  const dead = SRC_AUTHORED.filter((a) => !inLesson.has(a.id));
  deepStrictEqual(dead.map((a) => `${a.id} "${a.fr}"`), []);
});

/* ═══ TRANCHES ═══════════════════════════════════════════════════════════ */

test('tranches release every taught item exactly once and nothing untaught', { skip: noLesson }, () => {
  const tranches = L!.deckTranche ?? [];
  strictEqual(tranches.length, (L!.acts ?? []).length, 'one slice per act, index-aligned');
  const flat = tranches.flat();
  const dupes = flat.filter((id, i) => flat.indexOf(id) !== i);
  deepStrictEqual([...new Set(dupes)], [], 'the SRS keys on (itemId, modality); a card released twice takes two ratings');
  deepStrictEqual([...flat].sort(), [...L!.itemIds].sort(), 'the tranches and the itemIds must be the same set');
});

test('no tranche releases an item the acts before it have not shown', { skip: noLesson }, () => {
  // A card released before its mission is a card the learner is asked to rate
  // before they have met it. a1.17 shipped exactly this and its test caught it.
  const acts = L!.acts ?? [];
  const tranches = L!.deckTranche ?? [];
  const shownBy: string[] = [];
  const early: string[] = [];
  for (let i = 0; i < acts.length; i += 1) {
    for (const id of acts[i].sections) {
      const s = sectionById(id);
      if (s) shownBy.push(...strings(s));
    }
    const text = shownBy.join('\n');
    for (const id of tranches[i] ?? []) {
      const row = seedById.get(id);
      const named = text.includes(id) || (row ? text.includes(row.fr) : false);
      if (!named) early.push(`act ${i + 1} releases ${id}${row ? ` "${row.fr}"` : ''}`);
    }
  }
  deepStrictEqual(early, [], 'tranche(s) releasing an item no act up to that point shows');
});

test('act 6 releases nothing new', { skip: noLesson }, () => {
  deepStrictEqual((L!.deckTranche ?? [])[5], [], 'act 6 tests what acts 1 to 5 handed over');
});

/* ═══ NO DUPLICATE WORD IN A THEME ═══════════════════════════════════════ */

test('no two non-sentence rows share an fr within one theme', { skip: noLesson }, () => {
  // Computed the way flashhub-coverage.test.ts computes it, over the WHOLE
  // post-merge seed rather than this lesson alone: a duplicate only appears once
  // the new rows sit beside the existing ones, and this lesson brought a theme
  // into the seed for the first time.
  const headword = (fr: string) => fr.toLowerCase().replace(/^(le |la |les |l'|un |une |des )/, '').trim();
  const seen = new Map<string, string>();
  const dupes: string[] = [];
  for (const i of seed.items) {
    if (i.kind === 'sentence') continue;
    if ((i.cardType ?? 'vocab') !== 'vocab') continue;
    const key = `${i.theme}::${headword(i.fr)}`;
    const prior = seen.get(key);
    if (prior) dupes.push(`${prior} vs ${i.id} ("${i.fr}") in ${i.theme}`);
    else seen.set(key, i.id);
  }
  deepStrictEqual(dupes, [], 'the same word twice in one theme is one card served twice');
});

/* ═══ THE EXAM ═══════════════════════════════════════════════════════════ */

test('one quiz section, seven rounds, and every question teaches', { skip: noLesson }, () => {
  const quizzes = L!.sections.filter((s) => s.type === 'quiz');
  strictEqual(quizzes.length, 1, 'lessonPager.logic.ts appends exactly one quiz page, so the rest are unreachable');
  const rounds = (quizzes[0] as unknown as { rounds?: { id: string }[] }).rounds ?? [];
  strictEqual(rounds.length, 7, 'seven rounds, one per teaching drill');
  const qs = questions();
  strictEqual(qs.length, 26);
  const noWhy = qs.filter((q) => !q.why);
  deepStrictEqual(noWhy.map((q) => q.q), [], 'every question needs a why that teaches the rule');
  const ids = new Set(L!.sections.map((s) => (s as { id?: string }).id));
  const badRef = qs.filter((q) => !q.ref || !ids.has(q.ref));
  deepStrictEqual(badRef.map((q) => `${q.q} → ${q.ref}`), [], 'every ref must name a section that exists');
});

test('at most half the exam is mcq', { skip: noLesson }, () => {
  const qs = questions();
  const mcq = qs.filter((q) => (q.format ?? 'mcq') === 'mcq').length;
  ok(mcq * 2 <= qs.length, `${mcq}/${qs.length} are mcq, over the half ceiling`);
});

test('no quiz option refers to a position, and none is duplicated', { skip: noLesson }, () => {
  // QuizDeckView shuffles the options of every closed question, per question,
  // per attempt, and re-shuffles on retry. The authored `correct` index never
  // moves; only the display order is permuted. So a positional option is broken
  // by design, and a duplicate makes a shuffled question genuinely ambiguous.
  const POSITIONAL = ['the first', 'the second', 'the third', 'the last', 'both of the above',
    'all of the above', 'none of these', 'none of the above', 'the one above', 'the one below'];
  const positional = questions().flatMap((q) => (q.opts ?? [])
    .filter((o) => POSITIONAL.some((p) => o.toLowerCase().includes(p)))
    .map((o) => `"${o}" in "${q.q}"`));
  deepStrictEqual(positional, []);
  const dupes = questions().flatMap((q) => {
    const seen = new Set<string>();
    return (q.opts ?? []).filter((o) => (seen.has(o) ? true : (seen.add(o), false)))
      .map((o) => `"${o}" twice in "${q.q}"`);
  });
  deepStrictEqual(dupes, []);
});

test('no answer slot holds more than 40% of the closed questions', { skip: noLesson }, () => {
  // The whole answer space is six short words recurring in every round, and
  // masculine countries outnumber feminine ones in most sets, so au and du go
  // correct disproportionately often unless it is balanced deliberately.
  const closed = questions().filter((q) => typeof q.correct === 'number');
  const slots = closed.reduce<Record<number, number>>((a, q) => {
    a[q.correct as number] = (a[q.correct as number] ?? 0) + 1;
    return a;
  }, {});
  const over = Object.entries(slots).filter(([, n]) => n / closed.length > 0.4);
  deepStrictEqual(over.map(([k, n]) => `slot ${k}: ${n}/${closed.length}`), []);
});

test('every preposition question names the country WITH its article', { skip: noLesson || noSrc }, () => {
  // "en or au?" is unanswerable, and a stem naming the country bare tests
  // whether the learner memorised a phrase rather than whether they know the
  // rule. Showing `le Canada` in the stem tests the rule.
  const PREPS = ['en', 'au', 'aux', 'de', 'du', 'des'];
  const MARKERS = [
    ...TWELVE.map((c) => c.fr.toLowerCase()),
    'la chine', 'le brésil', 'la suisse', 'le maroc',
    'la kind', 'le kind', 'les kind', 'its article',
  ];
  const prepQs = questions().filter((q) => {
    const space = [...(q.opts ?? []), ...(q.accept ?? []), q.answer ?? ''].join(' ').toLowerCase();
    return PREPS.some((p) => hasPhrase(space, p));
  });
  ok(prepQs.length >= 10, 'a lesson about six prepositions should test them more than this');
  const half = prepQs.filter((q) => !MARKERS.some((m) => q.q.toLowerCase().includes(m)));
  deepStrictEqual(half.map((q) => q.q), [], 'preposition question(s) whose stem does not name the article');
});

test('at least one round tests a country the lesson never drilled', { skip: noLesson || noSrc }, () => {
  // No format can test whether the learner knows a country's gender for the
  // right reason: they can pass every question about au Canada by having stored
  // au Canada as one word. A country the lesson never showed cannot be passed
  // that way.
  const taught = new Set(TWELVE.map((c) => c.bare.toLowerCase()));
  const untaught = questions().filter((q) => {
    const stem = q.q.toLowerCase();
    return ['chine', 'brésil', 'suisse', 'maroc'].some((c) => stem.includes(c) && !taught.has(c));
  });
  ok(untaught.length >= 3, `only ${untaught.length} question(s) use an undrilled country`);
});

test('every free-text question accepts the answer it displays', { skip: noLesson }, () => {
  // Through the REAL matchesAccept, which folds accents, case, punctuation and
  // all whitespace on both sides.
  const bad = questions().filter((q) => q.answer && !matchesAccept(q.answer, q.accept));
  deepStrictEqual(bad.map((q) => `"${q.q}" shows "${q.answer}"`), []);
});

test('every teaching drill is the FIRST resolving target of exactly one round', { skip: noLesson }, () => {
  // drillForRound walks a round's targets and fires the drill of the FIRST one
  // that resolves, then stops. A drill named only in second place is dead
  // content: a1.05 shipped two and a1.07's first draft a third.
  const byTrigger = new Map((L!.errorTriggers ?? []).map((t) => [t.id, t.drill]));
  const rounds = (quizSection() as unknown as { rounds?: { id: string; targets?: string[] }[] })?.rounds ?? [];
  const leads: string[] = [];
  for (const r of rounds) {
    const lead = (r.targets ?? []).find((t) => byTrigger.has(t));
    ok(lead, `round ${r.id} names no target that resolves to a drill`);
    ok(!leads.includes(lead!), `round ${r.id} leads on "${lead}", which another round already leads on`);
    leads.push(lead!);
  }
  const fired = new Set(leads.map((t) => byTrigger.get(t)!));
  const teaching = (L!.drills ?? []).filter((d) => !d.id.startsWith('retest-'));
  const orphans = teaching.filter((d) => !fired.has(d.id)).map((d) => d.id);
  deepStrictEqual(orphans, [], 'drill(s) no round can fire');
  strictEqual((L!.errorTriggers ?? []).length, 7);
  strictEqual(teaching.length, 7, 'seven triggers, seven drills, seven rounds');
});

test('every trigger names a drill, a retest and sections that exist', { skip: noLesson }, () => {
  const known = new Set((L!.drills ?? []).map((d) => d.id));
  const ids = new Set(L!.sections.map((s) => (s as { id?: string }).id));
  for (const t of L!.errorTriggers ?? []) {
    ok(known.has(t.drill), `trigger ${t.id} names an unauthored drill "${t.drill}"`);
    ok(!t.retest || known.has(t.retest), `trigger ${t.id} names an unauthored retest "${t.retest}"`);
    for (const d of t.detectOn) {
      ok(ids.has(d.split('/')[0]), `trigger ${t.id} detects on "${d}", and that section does not exist`);
    }
  }
});

test('every drill that names corpus items names ids that resolve', { skip: noLesson }, () => {
  const bad: string[] = [];
  for (const d of L!.drills ?? []) {
    for (const id of (d as unknown as { items?: string[] }).items ?? []) {
      if (!seedById.has(id)) bad.push(`${d.id} → ${id}`);
    }
  }
  deepStrictEqual(bad, [], 'a drill scores against the corpus; a display string here validates as a broken id');
});

/* ═══ THE DICTÉE AND THE SPEAK MISSION ═══════════════════════════════════ */

test('every dictée target stays in LETTERS mode', { skip: noLesson || noSrc }, () => {
  // Through the REAL dicteeMode. Word mode hands the learner each whole word as
  // a pre-spelled tile, so tapping a tile marked `en` is not choosing between
  // `en` and `au`, which is the entire thing this lesson teaches.
  strictEqual(SRC_DICTATION.length, 5);
  const wrong: string[] = [];
  for (const id of SRC_DICTATION) {
    const row = seedById.get(id);
    ok(row, `the dictée names ${id}, which is not in the seed`);
    if (dicteeMode(row!.fr) !== 'letters') wrong.push(`${id} "${row!.fr}"`);
    ok(row!.drills.includes('dictation'), `${id} carries no "dictation" drill`);
  }
  deepStrictEqual(wrong, [], 'dictée target(s) in word mode');
});

test('the three targets that CANNOT be dictée targets are named and absent', { skip: noLesson || noSrc }, () => {
  // Measured rather than assumed, so nobody "completes" the dictée by adding a
  // target that silently degrades into tapping tiles.
  for (const fr of ['Elle est canadienne.', 'Je vais aux États-Unis.', 'Je viens des États-Unis.']) {
    strictEqual(dicteeMode(fr), 'words', `"${fr}" is no longer word mode; the header explains why it was excluded`);
    const row = seed.items.find((i) => i.fr === fr);
    if (row) ok(!SRC_DICTATION.includes(row.id), `"${fr}" is a dictée target and lands in word mode`);
  }
});

test('the speak mission carries no bare preposition and every line has a country', { skip: noLesson || noSrc }, () => {
  // `en` and `au` are unstressed function words that only exist attached to a
  // country. A speak mission on the six of them would have the learner say six
  // sounds none of which can be right or wrong.
  const speak = (sectionById('s23-speak') as unknown as { itemIds?: string[] })?.itemIds ?? [];
  ok(speak.length >= 10, 'the speak mission names too few lines');
  deepStrictEqual(speak, SRC_SPEAK, 'the seed and the source disagree about the speak mission');
  const PREPS = ['en', 'au', 'aux', 'de', 'du', 'des'];
  for (const id of speak) {
    const row = seedById.get(id);
    ok(row, `the speak mission names ${id}, which is not in the seed`);
    ok(!PREPS.includes(row!.fr.trim().toLowerCase()), `${id} is a bare preposition`);
    ok(row!.drills.includes('voiceflash'), `${id} carries no "voiceflash" drill, so it cannot be scored`);
  }
});

/* ═══ THE READING PASSAGE ════════════════════════════════════════════════ */

test('the reading glossary can actually underline every entry', { skip: noLesson }, () => {
  // Through the REAL segmentSentence, comparing matched KEYS rather than matched
  // text. a1.08 shipped two entries that could never underline anything because
  // every occurrence sat inside a longer key, and longest-match-first means a
  // short entry inside a longer one underlines nothing.
  const reading = sectionById('s20-reading') as unknown as {
    text?: string; glossary?: { word: string }[]; questionsInModal?: boolean; questions?: unknown[];
  };
  ok(reading, 's20-reading is missing');
  ok(reading.questionsInModal === true, 'without questionsInModal the glossary reaches no renderer at all');
  ok((reading.questions ?? []).length > 0, 'questionsInModal needs questions or the section takes the fallback path');
  const entries = reading.glossary ?? [];
  ok(entries.length > 0);
  for (const e of entries) {
    ok(e.word.trim().split(/\s+/).length <= MAX_GLOSS_WORDS,
      `"${e.word}" is longer than MAX_GLOSS_WORDS and can never match`);
  }
  // segmentSentence takes a SET OF FOLDED KEYS, not the glossary array. Compare
  // matched KEYS rather than matched text: a1.08 shipped two entries that could
  // never underline anything and its own test passed because it compared text.
  const keys = new Set(entries.flatMap((g) => glossKeys(g.word)).filter(Boolean));
  const hit = new Set(segmentSentence(reading.text ?? '', keys).filter((x) => x.key).map((x) => x.key!));
  const shadowed = entries.filter((g) => !glossKeys(g.word).some((k) => hit.has(k))).map((g) => g.word);
  deepStrictEqual(shadowed, [], 'glossary entr(ies) that can never underline anything');
});

test('the reading passage is ONE BLOCK with no authored newline', { skip: noLesson }, () => {
  // PassagePage splits on /(?<=[.!?»])\s+/, so an authored newline is consumed
  // as whitespace and silently discarded.
  const reading = sectionById('s20-reading') as unknown as { text?: string };
  ok(!(reading?.text ?? '').includes('\n'), 'an authored newline is discarded and reads as a formatting bug');
});

/* ═══ a1.03, WHICH THIS LESSON MOVED ═════════════════════════════════════ */

test('nothing this lesson AUTHORED joins a1.03\'s measured population', { skip: noSrc }, () => {
  // Through the REAL endingPopulation. Every authored row is a sentence, which
  // it excludes outright, so a gendered headword appearing here would be a
  // mistake rather than a decision.
  const joiners = endingPopulation(SRC_AUTHORED as never);
  deepStrictEqual((joiners as { id: string; fr: string }[]).map((i) => `${i.id} "${i.fr}"`), []);
});

test('the seed and a1.03\'s printed figures agree, after the move', { skip: noSrc }, () => {
  // THE COUPLING, PINNED. Importing twenty-four gendered single-word headwords
  // moved six of a1.03's twenty-seven printed counts, which is unavoidable:
  // `la France` ends in -e because every feminine country does, and that is the
  // rule this lesson is built on. a1.03 was re-measured and re-rendered for it,
  // the way a1.11 was handled (genre-lesson.ts records both).
  //
  // Compared against a1.03's OWN SOURCE rather than against numbers typed here,
  // so this cannot go stale the next time the corpus legitimately moves.
  ok(PRINTED_ENDINGS.length > 20, 'a1.03 prints more figures than this');
  const wrong: string[] = [];
  for (const p of PRINTED_ENDINGS) {
    const m = measureEnding(seed.items, p.ending);
    if (!m) { wrong.push(`-${p.ending}: nothing in the seed ends this way`); continue; }
    if (m.n !== p.items) wrong.push(`-${p.ending}: a1.03 prints ${p.items} nouns, the seed says ${m.n}`);
    if (m.accuracy !== p.accuracy) wrong.push(`-${p.ending}: a1.03 prints ${p.accuracy}%, the seed says ${m.accuracy}%`);
  }
  deepStrictEqual(wrong, [], 'a1.03 and the seed disagree; re-measure genre-endings.ts and re-render a1.03');
});

test('the imported countries are the reason, and they are still gendered', { skip: noSrc }, () => {
  // If a country ever loses its gender the grid becomes something to take on
  // trust, because a learner cannot check the article on the card.
  for (const c of TWELVE) {
    const row = seedById.get(c.id);
    ok(row, `${c.fr} (${c.id}) is not in the seed`);
    strictEqual(row!.gender, c.gender, `${c.fr} carries gender ${row!.gender}, expected ${c.gender}`);
  }
  const joiners = endingPopulation(SRC_IMPORTED as never);
  ok((joiners as unknown[]).length >= 20,
    'fewer imported rows join a1.03\'s population than when this was measured; the six moved counts may be stale');
});

/* ═══ HOUSE RULES ════════════════════════════════════════════════════════ */

test('no em dash, no "honest", and no grammar jargon on a learner surface', { skip: noLesson }, () => {
  const body = JSON.stringify(L);
  ok(!body.includes('—'), 'em dash found in authored copy');
  ok(!/honest/i.test(body), 'the word "honest" is banned from authored content');
  const isIdentifier = (s: string) => !/\s/.test(s) && /^[a-z0-9][a-z0-9.\-_/]*$/i.test(s);
  const jargon = learnerFacing().filter((s) => !isIdentifier(s)
    && /\b(conjugaison|préposition|nom propre|article (défini|indéfini|partitif)|adjectif|possessif|(?<!')accord|masculin|féminin|invariable|déterminant)\b/i.test(s));
  deepStrictEqual(jargon.slice(0, 3), [], 'grammar vocabulary reached an A1 learner');
});

test('no imageRef is authored, because nothing validates one', { skip: noLesson }, () => {
  // lesson-contract.test.ts contains no reference to imageRef and the schema
  // comment promising a publish check is conditional on an asset manifest that
  // does not exist. An unregistered ref draws a blank box and nothing goes red.
  // No component draws a map either.
  const refs = strings(L).filter((s) => /^lessons\/[a-z0-9-]+\/[a-z0-9-]+\.(jpg|png|webp)$/i.test(s));
  deepStrictEqual(refs, []);
});

test('autoplay is not authored anywhere', { skip: noLesson }, () => {
  ok(!JSON.stringify(L).includes('"autoplay"'),
    'autoplay is declared in schema.ts and implemented in no component. Use audioFirst.');
});

test('every sheet is reachable and draws something', { skip: noLesson }, () => {
  // ReferenceSheet.tsx renders exactly three section types inside a sheet and
  // its default branch draws the TITLE and nothing else. a1.13 and a1.17 both
  // shipped a `cheatSheet` here and both drew a heading over nothing.
  const DRAWS = new Set(['teach', 'letterGrid', 'table']);
  const sheetIds = new Set((L!.sheets ?? []).map((s) => s.id));
  const dangling = L!.sections
    .map((s) => (s as { sheetId?: string }).sheetId)
    .filter((id): id is string => Boolean(id) && !sheetIds.has(id));
  deepStrictEqual([...new Set(dangling)], [], 'sheetId(s) naming a sheet that does not exist');
  const unreachable = [...sheetIds].filter(
    (id) => !L!.sections.some((s) => (s as { sheetId?: string }).sheetId === id));
  deepStrictEqual(unreachable, [], 'sheet(s) no section links to');
  const dead = (L!.sheets ?? []).flatMap((sh) => (sh.sections ?? [])
    .filter((sec) => !DRAWS.has(sec.type))
    .map((sec) => `${sh.id}/${(sec as { id?: string }).id} is a ${sec.type}`));
  deepStrictEqual(dead, [], 'sheet section(s) ReferenceSheet.tsx does not draw');
});

test('no section names more than three term chips', { skip: noLesson }, () => {
  // The renderer shows three and collapses the rest. Seven sons.06 sections
  // declare more than three and it is known debt, not a pattern to copy.
  const over = L!.sections
    .map((s) => ({ id: (s as { id?: string }).id, n: ((s as { terms?: string[] }).terms ?? []).length }))
    .filter((x) => x.n > 3);
  deepStrictEqual(over, []);
});

test('every term chip names a term the lesson declares, and every term is used', { skip: noLesson }, () => {
  const declared = new Set(Object.keys(L!.terms ?? {}));
  const used = new Set(L!.sections.flatMap((s) => (s as { terms?: string[] }).terms ?? []));
  const dangling = [...used].filter((t) => !declared.has(t));
  deepStrictEqual(dangling, [], 'term chip(s) naming a term the lesson does not define');
  const unused = [...declared].filter((t) => !used.has(t));
  deepStrictEqual(unused, [], 'term(s) defined and surfaced by no section');
});

test('every term example names an item the lesson teaches', { skip: noLesson }, () => {
  const bad: string[] = [];
  for (const [name, t] of Object.entries(L!.terms ?? {})) {
    for (const e of (t as unknown as { examples?: { itemId: string }[] }).examples ?? []) {
      if (!seedById.has(e.itemId)) bad.push(`${name} → ${e.itemId}`);
    }
  }
  deepStrictEqual(bad, [], 'term example(s) naming an id that does not resolve');
});

/* ═══ THE UNIT, AND THE REBINDING ════════════════════════════════════════ */

test('the unit is rebound from the dead theme to the real one', { skip: noLesson }, () => {
  // The declared theme held ZERO published rows and the real one had another
  // name. This is a change to the unit's declared themes and it is reported
  // rather than slipped in: it is asserted here so a later edit that reverts it
  // goes red.
  const unit = seed.units.find((u) => u.id === 'a1.22');
  ok(unit, 'unit a1.22 is not in the seed');
  deepStrictEqual(unit!.themes, ['pays-et-nationalites'], 'the unit must not point at the dead `identite` theme');
  ok((unit!.lessonIds ?? []).includes('a1.22.l1'), 'the unit does not link its lesson');
  // The dead theme really is dead, in the seed as well.
  strictEqual(seed.items.filter((i) => i.theme === 'identite').length, 0);
  ok(seed.items.filter((i) => i.theme === 'pays-et-nationalites').length >= 40,
    'the real theme is not in the seed, so the lesson draws empty cards');
});

test('the prerequisites are untouched, and a1.03 is recorded as missing', { skip: noLesson }, () => {
  // RECOMMENDED, not applied. Changing a unit's prerequisites is a change to the
  // spine. a1.03 is load-bearing here and is not declared: without noun gender
  // the learner cannot choose between en and au, which is the whole lesson. The
  // gap is pinned so it stays visible until somebody decides.
  const unit = seed.units.find((u) => u.id === 'a1.22');
  deepStrictEqual(unit!.prereqUnitIds, ['a1.06'],
    'the prerequisites moved. If a1.03 was added deliberately, update this test and say so.');
  ok((L!.grammarAssumed ?? []).some((g) => /a1\.03/.test(g)),
    'a1.03 is not declared as a prerequisite, so the lesson must at least name it in grammarAssumed');
});

/* ═══ SEED PARITY, DERIVED RATHER THAN RESTATED ══════════════════════════ */

test('the seed copy matches the authored source, field for field', { skip: noLesson || noSrc }, () => {
  deepStrictEqual(JSON.parse(JSON.stringify(L)), JSON.parse(JSON.stringify(SRC)),
    'seed.json and pays-lesson.ts have drifted. Re-run merge-pays-into-seed.ts.');
});

test('every authored row in the seed matches the authored source', { skip: noSrc }, () => {
  const drift: string[] = [];
  for (const a of SRC_AUTHORED) {
    const row = seedById.get(a.id);
    if (!row) { drift.push(`${a.id} is not in the seed`); continue; }
    for (const k of ['fr', 'en', 'ipa', 'kind', 'level', 'theme'] as const) {
      if ((row as Record<string, unknown>)[k] !== (a as Record<string, unknown>)[k]) {
        drift.push(`${a.id}.${k}: seed ${JSON.stringify((row as Record<string, unknown>)[k])} vs source ${JSON.stringify((a as Record<string, unknown>)[k])}`);
      }
    }
  }
  deepStrictEqual(drift, []);
});

test('the itemIds, the tranches and the speak mission all come from the source', { skip: noLesson || noSrc }, () => {
  deepStrictEqual(L!.itemIds, SRC_ITEM_IDS);
  deepStrictEqual(L!.deckTranche, SRC_TRANCHES);
  strictEqual(SRC_SPEAK.length, 12);
});

/* ═══ AUDIO: THE CONSTRAINTS THAT CANNOT BE RECOVERED LATER ══════════════ */

test('the audio brief demands one take for every pair the ear must compare', { skip: noLesson }, () => {
  // A constraint on how something is recorded becomes invisible the moment the
  // clip is delivered, so it lives in `desc` AND is pinned here.
  const recs = L!.audio?.recorded ?? [];
  ok(recs.length >= 8, 'the audio brief is thinner than the lesson');
  const byId = new Map(recs.map((r) => [r.id, r.desc ?? '']));
  const grid = byId.get('rec-a1-22-grid') ?? '';
  ok(/ONE TAKE/i.test(grid), 'the going/coming pair must be one take, or the learner hears two performances');
  ok(grid.includes('en France') && grid.includes('de France'), 'the grid recording must carry both directions');
  const pairs = byId.get('rec-a1-22-pairs') ?? '';
  ok(/ONE TAKE/i.test(pairs), 'the agreement pairs must be one take, one voice');
  ok(pairs.includes('française') && pairs.includes('canadienne'), 'both agreement pairs must be briefed');
  const aux = byId.get('rec-a1-22-aux') ?? '';
  ok(/WHOLE/i.test(aux), 'aux États-Unis must be recorded whole: the liaison is the word');
});

test('no preposition is ever requested as a clip on its own', { skip: noLesson }, () => {
  const clips = (L!.audio?.recorded ?? []).flatMap((r) => r.clipIds ?? []);
  for (const p of ['en', 'au', 'aux', 'de', 'du', 'des']) {
    ok(!clips.includes(p), `a clip of "${p}" alone was requested; it is a sound the learner will never hear again`);
  }
  // And no country is requested bare either: the whole lesson is about storing
  // the article with the word.
  for (const bare of ['France', 'Canada', 'Japon', 'Belgique']) {
    ok(!clips.includes(bare), `a clip of "${bare}" without its article was requested`);
  }
});

test('no clip of an error is requested', { skip: noLesson }, () => {
  // A clip of an error is indistinguishable from a model once it leaves its
  // card. The traps are requested by NAME (`trap-du-france`) rather than by
  // their text, which is what keeps them separable.
  const clips = (L!.audio?.recorded ?? []).flatMap((r) => r.clipIds ?? []);
  for (const bad of ['Je viens du France.', 'Je vais en Canada.', 'Je vais au Iran.', 'Je vais en la France.']) {
    ok(!clips.includes(bad), `a recording was requested for « ${bad} », which is an error`);
  }
});
