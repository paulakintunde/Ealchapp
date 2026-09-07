// Guards a1.14.l1 "Les adjectifs de base".
//
// This lesson has one failure mode that matters more than all the others, and it
// is not a crash: it is THE PLACEMENT CONTRAST DECAYING INTO A WORD LIST.
//
// a1.13 shipped one lesson earlier and taught, on every screen, that a describing
// word follows the noun. That is true of every colour and FALSE OF ALL SIX WORDS
// TAUGHT HERE. So a learner arrives holding a pattern that is about to fail on
// the six most frequent describing words in the language, and the failure is
// SILENT: « une maison grande » is understood perfectly, nobody corrects it, and
// it marks a beginner in every sentence they will ever say.
//
// A rewrite that keeps all six words, all their feminines and all their examples
// but stops showing the two orders TOGETHER would read fine in review, ship, and
// leave the learner with a vocabulary list and a habit that still misfires. So
// the assertion that earns its place here is "ONE section carries a post-noun
// colour and a pre-noun word from these six", and it is the one below worth the
// most. The brief asks for exactly it: "The placement contrast is a PAIR, so give
// it two columns on one screen. This is the layout the test must assert, and it
// is the single screen that stops the a1.13 pattern from misfiring."
//
// The second-most-valuable assertions are the two cheapest. NOTHING THIS LESSON
// AUTHORS AS CORRECT FRENCH MAY CARRY `vieuxs` OR `mauvaiss`, which is the error
// a learner makes the week after being taught to add an -s. And BEL AND VIEIL
// MUST EACH BE TAUGHT IN FRONT OF A VOWEL-INITIAL NOUN, because that is the one
// piece of content in this lesson no other A1 lesson covers and the easiest thing
// to lose in a rewrite.
//
// Everything else guards the ways this project has already shipped content that
// was authored, schema-valid, and drawn by nothing.
//
// Two sources are checked, not one. The SEED is what a learner receives. The
// AUTHORED SOURCE in ealch-admin is what the next author edits. Both are read
// here, and the parity tests at the bottom fail when they drift, which is the
// failure mode that has twice cost this project real work.
//
// Counts are DERIVED wherever a count is asserted. A hardcoded number fails on
// itself the first time content legitimately changes, and the fix is then to edit
// the test, which is how a test comes to certify a bug. The exceptions are the
// six words, the four forms, the three families and the six triggers: those are
// the SHAPE of the lesson rather than a measurement of it, and a later trim that
// quietly drops one is exactly what this file exists to stop.
//
// Nothing here reimplements app logic. `matchesAccept`, `dicteeMode`,
// `glossKeys`, `segmentSentence`, `hasPlainNasalFor`, `endingPopulation` and
// `validateDensity` are all imported from the modules the app itself runs. An
// earlier version of a1.01's test inlined its own glossary lookup, copied the
// version that was already broken, and passed while the feature was dead.
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { ok, strictEqual, deepStrictEqual } from 'node:assert';
import { test } from 'node:test';
import { quizQuestions, validateLesson, type Lesson, type LessonSection } from './schema.ts';
import { hasPlainNasalFor, validateDensity, formatDensity } from './density.logic.ts';
import { endingPopulation } from './gender.logic.ts';
import { glossKeys, segmentSentence } from './gloss.logic.ts';
import { dicteeMode } from './dictee.logic.ts';
import { matchesAccept } from './answer.logic.ts';

const here = dirname(fileURLToPath(import.meta.url));
const seed = JSON.parse(readFileSync(resolve(here, 'seed.json'), 'utf8')) as {
  units: { id: string; seq: number; lessonIds: string[]; themes?: string[]; canDo?: string; sub?: string; title?: string }[];
  lessons: Lesson[];
  items: { id: string; kind: string; level: string; theme: string; fr: string; en: string; respell?: string; ipa?: string; drills: string[]; cardType?: string; gender?: string; tags?: string[] }[];
};

const L = seed.lessons.find((l) => l.id === 'a1.14.l1');
// Before the batch and the merge have run, the seed has no a1.14.l1 and every
// seed-derived assertion below would fail for a reason that is not a content
// bug. Skip cleanly rather than reporting a build failure as a content failure.
const noSeed = !L;

const ITEMS = new Map(seed.items.map((i) => [i.id, i]));

/* ── The shape of the lesson, stated once ─────────────────────────────────────
 *
 * These are the SHAPE, not a measurement, which is why they are literals. A
 * rewrite that quietly drops a word, a form, a family or a trigger is exactly
 * what this file exists to catch, so deriving them from the content would
 * compare the lesson to itself and pass on any trim. */
const THE_SIX = ['grand', 'petit', 'beau', 'vieux', 'bon', 'mauvais'] as const;
const FOUR_FORMS = 4;
const THREE_FAMILIES = 3;
const SIX_TRIGGERS = 6;

/** Every written form of each, so a sentence carrying `grandes` counts as
 *  evidence for `grand`. beau and vieux need theirs listed rather than derived,
 *  because belle, bel, vieille and vieil share no stem with them. That is the
 *  lesson. */
const FORMS: Record<string, string[]> = {
  grand: ['grand', 'grande', 'grands', 'grandes'],
  petit: ['petit', 'petite', 'petits', 'petites'],
  beau: ['beau', 'beaux', 'bel', 'belle', 'belles'],
  vieux: ['vieux', 'vieil', 'vieille', 'vieilles'],
  bon: ['bon', 'bons', 'bonne', 'bonnes'],
  mauvais: ['mauvais', 'mauvaise', 'mauvaises'],
};

/** The reframe, VERBATIM. Restated here rather than imported from the source, so
 *  the seed and the source have to agree about it rather than agreeing with
 *  themselves. The count is asserted against an explicit constant for the same
 *  reason: a derived figure passes on any rewording. */
const REFRAME = 'Colours follow the noun. These six come first.';
const REFRAME_APPEARANCES = 9;

/** Forms that have never been French words. The plural over-correction is the
 *  one the brief asks for by name; the rest are what a learner produces by
 *  applying a1.13's rule to the half of this set it does not reach. */
const FORBIDDEN_FORMS = ['vieuxs', 'mauvaiss', 'beaus', 'vieuxe', 'beaue', 'bone', 'bele', 'vieile'];

/** The placement error. Every one of these is understood perfectly by a French
 *  listener, which is exactly why it survives and why it can never appear in
 *  anything this lesson calls correct. */
const FORBIDDEN_ORDERS = [
  'une maison grande', 'une voiture petite', 'un jardin beau',
  'un château vieux', 'un repas bon', 'un film mauvais',
  'une robe petite', 'un chien petit',
];

/** The vowel error, which is what a learner says before they have met bel and
 *  vieil. */
const FORBIDDEN_VOWEL = [
  'un beau homme', 'un beau arbre', 'un vieux ami', 'un vieux immeuble', 'un vieux homme',
];

/** Adjectives published in the same theme that this lesson does not teach.
 *  `nouveau`, `nouvel` and `nouvelle` are deliberately ABSENT from this list and
 *  are guarded by id instead: fr.a1.adjectifs-essentiels.218 is "Les nouvelles
 *  sont bonnes.", where « les nouvelles » is the NEWS, and it is this lesson's
 *  own bon paradigm row. A word guard would fire on it and be deleted. */
const OTHER_ADJECTIVES = [
  'joli', 'jolie', 'jolis', 'jolies', 'jeune', 'jeunes',
  'gros', 'grosse', 'longue', 'court', 'courte', 'haut', 'haute', 'basse',
];

/** Ids this lesson must not teach. `.007` and `.209` are `nouveau` and "C'est un
 *  nouvel hôtel.", which is the THIRD three-form adjective in A1 and the one the
 *  brief says does not exist. */
const NOT_TAUGHT_IDS = [
  'fr.sons.adjectifs-essentiels.006', 'fr.sons.adjectifs-essentiels.007',
  'fr.sons.adjectifs-essentiels.009', 'fr.sons.adjectifs-essentiels.010',
  'fr.sons.adjectifs-essentiels.014',
  'fr.a1.adjectifs-essentiels.205', 'fr.a1.adjectifs-essentiels.206',
  'fr.a1.adjectifs-essentiels.208', 'fr.a1.adjectifs-essentiels.209',
];

/** Placement TEACHING, which belongs to a1.16. MULTI-WORD PHRASES ONLY: a single
 *  common word is not a safe probe for a teaching concept, and an earlier draft
 *  of a1.13's equivalent guard used the BAGS mnemonic as a bare word and fired
 *  immediately on that lesson's own gloss "My bags are green."
 *
 *  The reframe itself is deliberately not here: "Colours follow the noun. These
 *  six come first." is the one statement this lesson is FOR, and a guard that
 *  forbade it would forbid the lesson. */
const PLACEMENT_SYSTEM = [
  'bags mnemonic', 'bangs mnemonic', 'beauty age goodness size',
  'adjectives of size', 'adjectives of age', 'adjectives of beauty',
  'which adjectives go before', 'which adjectives come before',
  'most adjectives go after', 'most adjectives come after',
  'changes meaning depending on', 'changes its meaning depending',
  'ancien professeur', 'professeur ancien',
  'two adjectives at once', 'more than one describing word',
];

/** Family vocabulary is a1.15's and possessives are a1.17's. Both guards are on
 *  TEACHING rather than on the words: « Mon grand-père est vieux » is an imported
 *  corpus row and the best evidence in the lesson for the vieux/vieille pair, and
 *  `mon`, `ma` and `mes` are in almost every noun phrase the corpus offers. */
const FAMILY_TEACHING = [
  'the family words', 'family vocabulary', 'members of the family',
  'talking about your family', 'your whole family', 'the words for family',
];
const POSSESSIVE_TEACHING = [
  'mon, ma and mes', 'ton, ta and tes', 'son, sa and ses',
  'agrees with the thing owned', 'not with the owner',
  'which one to use before a', 'the word for my changes',
];

function strings(v: unknown, out: string[] = []): string[] {
  if (typeof v === 'string') out.push(v);
  else if (Array.isArray(v)) v.forEach((x) => strings(x, out));
  else if (v && typeof v === 'object') Object.values(v).forEach((x) => strings(x, out));
  return out;
}

/** Walks the string and checks neighbours against an accent-aware class. NEVER
 *  builds a regex out of the search term: `\b` is ASCII-only in JavaScript, so
 *  /\bgrand\b/ matches nothing when the neighbour is accented, and a regex that
 *  returns zero looks exactly like an absence. */
function hasWord(haystack: string, needle: string): boolean {
  const h = haystack.toLowerCase();
  const n = needle.toLowerCase();
  let from = 0;
  for (;;) {
    const i = h.indexOf(n, from);
    if (i < 0) return false;
    const before = i === 0 ? ' ' : h[i - 1];
    const after = h[i + n.length] ?? ' ';
    if (!/[a-zà-ÿ]/i.test(before) && !/[a-zà-ÿ]/i.test(after)) return true;
    from = i + 1;
  }
}

const sectionsOf = (l: Lesson): LessonSection[] => l.sections;
const sectionId = (s: LessonSection): string => (s as { id?: string }).id ?? '';
const quizOf = (l: Lesson) => l.sections.find((s) => s.type === 'quiz');
const quizTextOf = (l: Lesson) => strings(quizOf(l) ?? {}).join('\n');
const screenText = (l: Lesson) => strings(l.sections).join('\n');

/* ═══ The unit, the rebind, and the lesson reaching a learner at all ═══════ */

test('unit a1.14 links this lesson and keeps its shipped strings', () => {
  const u = seed.units.find((x) => x.id === 'a1.14');
  ok(u, 'unit a1.14 is not in the seed');
  strictEqual(u!.title, 'Basic Adjectives');
  strictEqual(u!.sub, 'Adjectifs de base');
  strictEqual(u!.canDo, 'Can describe people and things with common adjectives, agreed for gender');
  ok(u!.lessonIds.includes('a1.14.l1'), 'unit a1.14 does not link a1.14.l1, so nothing routes to it');
});

test('the unit was REBOUND off famille, and no neighbour moved with it', () => {
  // a1.14 was declared on `famille`, which holds 331 published rows of family
  // vocabulary and is a1.15's and a1.17's theme. An adjective deck filed under it
  // would serve the wrong cards in the flashcard hub. This is the first rebind
  // any lesson build has performed, so both halves are asserted: that a1.14
  // moved, and that nothing else did.
  const u = seed.units.find((x) => x.id === 'a1.14')!;
  deepStrictEqual(u.themes, ['adjectifs-essentiels'],
    'a1.14 must be bound to adjectifs-essentiels, not to famille');
  deepStrictEqual(seed.units.find((x) => x.id === 'a1.15')?.themes, ['famille'],
    'a1.15 keeps famille: it is Family Vocabulary and the theme is populated and inside the seed cut');
  deepStrictEqual(seed.units.find((x) => x.id === 'a1.17')?.themes, ['famille'],
    'a1.17 keeps famille: possessives are taught on family members everywhere');
  // a1.16 is NOT asserted to be themeless. It was when this test was written,
  // and the assertion over-reached the principle stated three lines above it:
  // rebinding a unit is that unit's own build's decision, so pinning a1.16's
  // theme here made a1.14's test the thing that had to change when a1.16 made
  // its own. a1.16 bound itself to adjectifs-essentiels on 2026-08-06, which is
  // the same theme and keeps the adjective family together.
  //
  // What this test actually means to protect is that a1.14's rebind did not drag
  // a neighbour with it, so that is what is checked: a1.16 is not on famille.
  const t16 = seed.units.find((x) => x.id === 'a1.16')?.themes;
  ok(t16 === undefined || !(t16 as string[]).includes('famille'),
    'a1.16 must not be on famille: that theme is a1.15\'s and a1.17\'s and holds family vocabulary');
  deepStrictEqual(seed.units.find((x) => x.id === 'a1.13')?.themes, ['couleurs'],
    'a1.13 keeps couleurs');
});

test('the lesson is in the seed and passes its own schema validator', { skip: noSeed }, () => {
  const issues = validateLesson(L!, L!.id);
  strictEqual(issues.length, 0, issues.map((i) => `${i.path}: ${i.msg}`).join('\n'));
});

test('the header eyebrow agrees with the unit seq the renderer reads', { skip: noSeed }, () => {
  const u = seed.units.find((x) => x.id === 'a1.14')!;
  // missions.ts derives the eyebrow from unit.seq at render time. A stored tag
  // that disagrees is a bug the moment anything reads the field instead, which
  // a1.03 shipped (commit 56c79a7).
  strictEqual(L!.tag, `A1 · LEÇON ${String(u.seq).padStart(2, '0')}`);
});

test('exactly one quiz section, because the pager appends exactly one', { skip: noSeed }, () => {
  strictEqual(L!.sections.filter((s) => s.type === 'quiz').length, 1);
});

test('no autoplay is authored anywhere', { skip: noSeed }, () => {
  ok(!JSON.stringify(L!).includes('"autoplay"'),
    'autoplay is declared in schema.ts and implemented in no component. Use audioFirst.');
});

test('the lesson passes the real density validator', { skip: noSeed }, () => {
  const issues = validateDensity(L!, new Set(seed.items.map((i) => i.id)));
  strictEqual(issues.length, 0, formatDensity(issues));
});

/* ═══ The spine, the acts and the tranches ════════════════════════════════ */

test('every act names sections that exist, in order, and no section is orphaned', { skip: noSeed }, () => {
  const ids = sectionsOf(L!).map(sectionId);
  const named = (L!.acts ?? []).flatMap((a) => a.sections);
  for (const s of named) ok(ids.includes(s), `act names "${s}", which is not a section`);
  const claimed = new Map<string, string>();
  for (const a of L!.acts ?? []) {
    for (const s of a.sections) {
      const prior = claimed.get(s);
      ok(!prior, `section "${s}" is claimed by both ${prior} and ${a.id}`);
      claimed.set(s, a.id);
    }
  }
  for (const id of ids) ok(claimed.has(id), `section "${id}" belongs to no act, so nothing routes a learner to it`);
  deepStrictEqual(named, ids, 'the acts do not walk the sections in the order they are authored');
});

test('the six acts weight the lesson the way the brief weights it', { skip: noSeed }, () => {
  const acts = L!.acts ?? [];
  strictEqual(acts.length, 6, `${acts.length} acts, expected 6`);
  // The FIRST act must be about word order and the LAST must test. The brief:
  // "the weight belongs on placement and the irregular feminines, not on the six
  // words. If naming the six takes two missions, that is correct."
  ok(/side of the thing|where|order/i.test(acts[0].title),
    `act 1 is "${acts[0].title}", expected it to be about which side of the noun`);
  ok(/prove/i.test(acts[5].title), `act 6 is "${acts[5].title}"`);
  const namingAct = acts.find((a) => /the six words/i.test(a.title));
  ok(namingAct, 'no act names the six words');
  strictEqual(namingAct!.sections.length, 2,
    'naming six words takes two missions. The brief: "If naming the six takes two missions, that is correct."');
  const feminineAct = acts.find((a) => /her form|feminine/i.test(a.title));
  ok(feminineAct, 'no act is about the feminine');
  ok(feminineAct!.sections.length >= acts[1].sections.length,
    'the feminine act must carry more weight than the naming act, or the lesson is a word list');
});

test('the lesson sits in the 22 to 26 section band the brief sets', { skip: noSeed }, () => {
  const n = L!.sections.length;
  ok(n >= 22 && n <= 26, `${n} sections, outside the 22 to 26 band`);
});

test('tranches release every taught item exactly once and nothing untaught', { skip: noSeed }, () => {
  const tranches = L!.deckTranche ?? [];
  const flat = tranches.flat();
  const dupes = flat.filter((id, i) => flat.indexOf(id) !== i);
  strictEqual(dupes.length, 0,
    `released twice, so the SRS takes two ratings for one card: ${[...new Set(dupes)].join(', ')}`);
  const taught = new Set(L!.itemIds);
  for (const id of flat) ok(taught.has(id), `tranche releases ${id}, which the lesson does not teach`);
  for (const id of taught) ok(flat.includes(id), `${id} is taught and released by no tranche, so it never reaches spaced repetition`);
});

test('one tranche per act, and no tranche releases an item its act has not shown', { skip: noSeed }, () => {
  const tranches = L!.deckTranche ?? [];
  const acts = L!.acts ?? [];
  strictEqual(tranches.length, acts.length, 'tranches and acts must be index-aligned');
  // An item released in act N must appear on a screen in act N or earlier. A card
  // released before its mission is a card the learner is asked to rate before
  // they have met it. a1.08 shipped exactly that and had to move five.
  for (let i = 0; i < tranches.length; i++) {
    if (!tranches[i].length) continue;
    const soFar = acts.slice(0, i + 1)
      .flatMap((a) => a.sections)
      .map((sid) => sectionsOf(L!).find((s) => sectionId(s) === sid))
      .filter(Boolean);
    for (const id of tranches[i]) {
      ok(isShownIn(soFar, id),
        `act ${i + 1} releases ${id} "${ITEMS.get(id)?.fr}", which no section up to and including act ${i + 1} shows`);
    }
  }
});

/** Did the learner actually SEE this item, anywhere in `scope`?
 *
 *  Two routes count, and both are real:
 *
 *    BY ID    a dictation, practice or sort drill names the id and the renderer
 *             resolves it.
 *    BY TEXT  a scene beat, a card or a table cell carries the row's French
 *             VERBATIM, read out of the corpus through frOf(). The learner sees
 *             exactly the same string; the id simply is not in the JSON.
 *
 *  Only checking ids reports every scene-carried and deck-carried row as undrawn,
 *  which is the opposite of the bug this guard exists for. The question the
 *  invariants ask is "did the learner see it", not "is the id present". */
function isShownIn(scope: unknown, id: string): boolean {
  const all = strings(scope);
  if (all.some((s) => s === id)) return true;
  const row = ITEMS.get(id);
  if (!row) return false;
  const text = all.join('\n');
  // A one-word headword needs a boundary check: 'bel' must not match inside
  // 'belle'. A sentence is long enough that a substring match is unambiguous.
  return row.fr.includes(' ') ? text.includes(row.fr) : hasWord(text, row.fr);
}

test('every declared itemId resolves AND is on a screen', { skip: noSeed }, () => {
  const scope = [L!.sections, L!.drills ?? [], L!.terms ?? {}];
  for (const id of L!.itemIds) {
    ok(ITEMS.has(id), `itemId ${id} does not resolve in the seed, so it renders as an empty card`);
    ok(isShownIn(scope, id),
      `${id} "${ITEMS.get(id)?.fr}" resolves but is on no screen, by id or by text. `
      + 'a1.08 shipped 43 such ids, released to spaced repetition and drawn by nothing.');
  }
});

test('no id named anywhere in the lesson fails to resolve', { skip: noSeed }, () => {
  const all = new Set(strings(L!).filter((s) => /^fr\.[a-z0-9]+\.[a-z0-9-]+\.\d{3,}$/.test(s)));
  for (const id of all) ok(ITEMS.has(id), `${id} is named in the lesson and is not in the seed`);
});

/* ═══ The reframe ═════════════════════════════════════════════════════════ */

test('the reframe is authored verbatim, the exact number of times', { skip: noSeed }, () => {
  strictEqual(L!.reframe, REFRAME);
  const hits = strings(L!).filter((s) => s.includes(REFRAME)).length;
  strictEqual(hits, REFRAME_APPEARANCES,
    `the reframe appears ${hits} times, expected ${REFRAME_APPEARANCES}. It must be REFERENCED, never retyped.`);
});

test('the reframe reaches at least three separate sections', { skip: noSeed }, () => {
  const carrying = sectionsOf(L!).filter((s) => strings(s).some((x) => x.includes(REFRAME)));
  ok(carrying.length >= 3,
    `the reframe is in ${carrying.length} section(s); the density validator wants at least three`);
});

/* ═══ THE ASSERTION WORTH THE MOST: the placement contrast is SHOWN ═══════ */

test('ONE section carries a post-noun colour and a pre-noun word together', { skip: noSeed }, () => {
  // The single most valuable assertion in this file. See the header.
  //
  // a1.13's own row is the colour half, and it is already in the seed because
  // a1.13 imported it. « Elle porte une jupe verte. » sits in the SAME FRAME as
  // this lesson's « Elle porte une petite robe rouge. », so the two orders can be
  // set beside each other with exactly one thing different between them.
  const colour = 'Elle porte une jupe verte.';
  const bothOrders = [
    'Elle porte une petite robe rouge.',
    'Elle porte une belle robe bleue.',
    'J\'ai un petit chien blanc.',
  ];
  const carrying = sectionsOf(L!).filter((s) => {
    const t = strings(s).join('\n');
    return t.includes(colour) && bothOrders.some((b) => t.includes(b));
  });
  ok(carrying.length >= 1,
    'no single section shows a colour behind its noun beside one of these six in front of it. '
    + 'Split across two screens, the contrast decays into a word list and the pattern the learner '
    + 'carries in from a1.13 survives untouched, which is the failure this lesson exists to prevent.');
});

test('a phrase carrying BOTH orders at once is on a screen', { skip: noSeed }, () => {
  // One published sentence proving both orders is worth more than any number of
  // side-by-side claims: it makes the contrast a fact about a sentence rather
  // than an assertion about two.
  const text = screenText(L!);
  const bothOrders = [
    'Elle porte une petite robe rouge.',   // size in front, colour behind
    'Elle porte une belle robe bleue.',
    'J\'ai un petit chien blanc.',
  ];
  const found = bothOrders.filter((b) => text.includes(b));
  ok(found.length >= 2,
    `only ${found.length} phrase(s) carrying both orders are on a screen. These are published corpus rows, `
    + 'not invented examples, which is what makes them worth the space.');
});

test('the learner is told the placement error is never corrected', { skip: noSeed }, () => {
  // The whole cost of this error is that it is invisible to the speaker. A lesson
  // that teaches the rule and never says nobody will mention it leaves the
  // learner assuming their French is being corrected when it is not.
  const text = screenText(L!).toLowerCase();
  ok(/nobody will (ever )?(mention|correct)|never corrects|nobody corrected|will ever tell you|nobody will ever/.test(text),
    'no screen tells the learner that this error is understood perfectly and never corrected');
});

/* ═══ All six taught, and every one tested ═══════════════════════════════ */

test('all six are named on a screen AND reached by the exam, individually', { skip: noSeed }, () => {
  // Asserted one at a time rather than as a count. The brief: "mauvais is the one
  // most likely to be dropped, because it is the least frequent and the only one
  // with no positive use."
  const text = screenText(L!);
  const quiz = quizTextOf(L!);
  for (const a of THE_SIX) {
    ok(FORMS[a].some((f) => hasWord(text, f)), `"${a}" is never named on any screen`);
    ok(FORMS[a].some((f) => hasWord(quiz, f)), `"${a}" is taught and never tested. The exam has to reach all six.`);
  }
});

test('each of the six is taught rather than mentioned once', { skip: noSeed }, () => {
  for (const a of THE_SIX) {
    const carrying = sectionsOf(L!).filter((s) => FORMS[a].some((f) => hasWord(strings(s).join('\n'), f)));
    ok(carrying.length >= 3,
      `"${a}" appears in ${carrying.length} section(s). It needs teaching, not a deck entry.`);
  }
});

test('all four forms of all six are on a screen, from published corpus rows', { skip: noSeed }, () => {
  // The brief told this author to AUTHOR a paradigm. It was already published,
  // for all six, and for `grand` it was already minimal: one noun pair held
  // constant across four cells. Not one of these 24 rows is authored.
  const text = screenText(L!);
  const paradigm: Record<string, string[]> = {
    grand: ['fr.a1.adjectifs-essentiels.192', 'fr.a1.adjectifs-essentiels.193', 'fr.a1.adjectifs-essentiels.194', 'fr.a1.adjectifs-essentiels.195'],
    petit: ['fr.a1.adjectifs-essentiels.197', 'fr.a1.adjectifs-essentiels.196', 'fr.a1.adjectifs-essentiels.198', 'fr.a1.adjectifs-essentiels.199'],
    beau: ['fr.a1.adjectifs-essentiels.025', 'fr.a1.adjectifs-essentiels.201', 'fr.a1.adjectifs-essentiels.202', 'fr.a1.adjectifs-essentiels.203'],
    vieux: ['fr.a1.adjectifs-essentiels.210', 'fr.a1.adjectifs-essentiels.211', 'fr.a1.adjectifs-essentiels.212', 'fr.a1.adjectifs-essentiels.213'],
    bon: ['fr.a1.adjectifs-essentiels.215', 'fr.a1.adjectifs-essentiels.216', 'fr.a1.adjectifs-essentiels.217', 'fr.a1.adjectifs-essentiels.218'],
    mauvais: ['fr.a1.adjectifs-essentiels.219', 'fr.a1.adjectifs-essentiels.220', 'fr.a1.adjectifs-essentiels.221', 'fr.a1.adjectifs-essentiels.222'],
  };
  for (const [word, ids] of Object.entries(paradigm)) {
    strictEqual(ids.length, FOUR_FORMS);
    for (const id of ids) {
      const row = ITEMS.get(id);
      ok(row, `${id} (${word}) is not in the seed`);
      ok(text.includes(row!.fr), `${word}: "${row!.fr}" (${id}) is on no screen`);
      ok(L!.itemIds.includes(id), `${id} is shown and not taught`);
    }
  }
});

test('grand\'s paradigm is the MINIMAL one, on one noun pair', { skip: noSeed }, () => {
  // The teaching card uses grand because its four published cells hold garcon and
  // fille constant, so exactly one thing moves between any two of them. The other
  // five vary their noun, which is why they live in the table and the drills
  // rather than on the card that introduces the idea.
  deepStrictEqual(
    ['fr.a1.adjectifs-essentiels.192', 'fr.a1.adjectifs-essentiels.193', 'fr.a1.adjectifs-essentiels.194', 'fr.a1.adjectifs-essentiels.195']
      .map((id) => ITEMS.get(id)?.fr),
    ['Ce garçon est très grand.', 'Cette fille est très grande.', 'Les garçons sont grands.', 'Les filles sont grandes.'],
    'the minimal paradigm has drifted; the whole point is that only one thing moves between cells'
  );
});

test('the three feminine families are taught as three, not as a list of six', { skip: noSeed }, () => {
  // a1.13's split was four (already ends in -e, adds -e, changes more, never
  // changes) and two of them are EMPTY for this set: not one of these six already
  // ends in -e and not one refuses to change. Three is the honest count here.
  const drill = sectionsOf(L!).find((s) => s.type === 'groupDrill' && /famil/i.test(strings(s).join(' ')));
  ok(drill, 'no section groups the six by what the feminine does');
  const groups = (drill as { groups?: unknown[] }).groups ?? [];
  strictEqual(groups.length, THREE_FAMILIES,
    `${groups.length} families, expected ${THREE_FAMILIES}: adds an -e, doubles a letter, turns into a different word`);
});

/* ═══ bel and vieil: the content nothing else in A1 covers ════════════════ */

test('bel and vieil are each taught in front of a VOWEL-INITIAL noun', { skip: noSeed }, () => {
  // The brief: "This is the content nothing else in A1 covers and the easiest to
  // lose in a rewrite." Asserted by name, and the CONSONANT PARTNER is asserted
  // too: without it the change is told rather than shown.
  const text = screenText(L!);
  const pairs: [string, string, string][] = [
    ['bel', "C'est un beau jardin.", "C'est un bel arbre."],
    ['vieil', "C'est un vieux château.", "C'est un vieil immeuble."],
  ];
  for (const [word, consonant, vowel] of pairs) {
    ok(text.includes(vowel), `${word} is not shown in front of a vowel: "${vowel}" is on no screen`);
    ok(text.includes(consonant),
      `${word}'s consonant partner "${consonant}" is on no screen, so the change is asserted rather than shown`);
  }
  ok(hasWord(text, 'bel'), '"bel" is never named on a screen');
  ok(hasWord(text, 'vieil'), '"vieil" is never named on a screen');
  const quiz = quizTextOf(L!);
  ok(hasWord(quiz, 'bel'), '"bel" is taught and never tested');
  ok(hasWord(quiz, 'vieil'), '"vieil" is taught and never tested');
});

test('bel and vieil exist as authored corpus rows, in the right prefix', { skip: noSeed }, () => {
  // THE PREFIX IS THE THING a1.13's BRIEF GOT WRONG for its own theme. Measured
  // by kind: fr.a1.adjectifs-essentiels holds 321 rows and every one is a
  // sentence; fr.sons.adjectifs-essentiels holds the headwords. A headword at
  // fr.a1.adjectifs-essentiels.332 would have been the only non-sentence under
  // that prefix in the theme's history.
  const authored: [string, string][] = [
    ['fr.sons.adjectifs-essentiels.312', 'vieille'],
    ['fr.sons.adjectifs-essentiels.313', 'mauvaise'],
    ['fr.sons.adjectifs-essentiels.314', 'bel'],
    ['fr.sons.adjectifs-essentiels.315', 'vieil'],
  ];
  for (const [id, fr] of authored) {
    const row = ITEMS.get(id);
    ok(row, `${id} (${fr}) is not in the seed`);
    strictEqual(row!.fr, fr);
    strictEqual(row!.theme, 'adjectifs-essentiels');
    strictEqual(row!.kind, 'word');
    ok(row!.drills.includes('voiceflash'), `${id} carries no voiceflash, so the speak mission cannot score it`);
    ok(!row!.gender, `${id} carries a gender field, which puts it in a1.03's measured ending population`);
  }
});

test('every fr.a1 row this lesson names is a SENTENCE, and every headword is fr.sons', { skip: noSeed }, () => {
  // The two-prefix split, asserted over the lesson's own item set rather than
  // trusted. This is what a1.13's brief got wrong and what its corpus header
  // flagged as the highest-value finding on the track.
  for (const id of L!.itemIds) {
    const row = ITEMS.get(id);
    if (!row || row.theme !== 'adjectifs-essentiels') continue;
    if (id.startsWith('fr.a1.')) {
      strictEqual(row.kind, 'sentence', `${id} is under fr.a1 and is kind=${row.kind}, not a sentence`);
    }
    if (id.startsWith('fr.sons.')) {
      ok(row.kind !== 'sentence', `${id} is under fr.sons and is a sentence`);
    }
  }
});

/* ═══ THE CHEAPEST HIGH-VALUE ASSERTIONS ═════════════════════════════════ */

test('nothing authored as CORRECT French carries vieuxs, mauvaiss or a wrong feminine', { skip: noSeed }, () => {
  // The brief asks for this by name: "vieux and mauvais are never authored with a
  // plural -s. Cheap, and it stops a future author fixing a correct form."
  //
  // Scoped to content authored as correct French: the rows this lesson owns, quiz
  // answer keys, the `right` side of every trap card, drill answers and sheet
  // headwords. NOT every string: the scene, the trap cards and the reading all
  // have to SHOW the error in order to teach it, and a guard that fired on those
  // would be deleted within a week rather than fixed.
  const q = quizOf(L!);
  const questions = q && q.type === 'quiz' ? quizQuestions(q) : [];
  const correctFrench: string[] = [
    ...seed.items.filter((i) => /^fr\.sons\.adjectifs-essentiels\.31[2-5]$/.test(i.id)).map((i) => i.fr),
    ...L!.sections.flatMap((s) => (s.type === 'commonErrors' ? s.errors.map((e) => e.right) : [])),
    ...(L!.sheets ?? []).flatMap((sh) => (sh.sections ?? []).flatMap((sec) =>
      sec.type === 'cheatSheet' ? sec.rows.flatMap((r) => [r.k, r.say ?? '']) : [])),
    ...questions.flatMap((x) => [x.answer ?? '', ...(x.accept ?? [])]),
    ...(L!.drills ?? []).flatMap((d) => (d.opts && d.correct !== undefined ? [d.opts[d.correct]] : [])),
    ...(L!.drills ?? []).flatMap((d) => (d.pairs ?? []).map((p) => p[1])),
    ...((L!.sections.find((s) => s.type === 'roundup') as { points?: string[] } | undefined)?.points ?? []),
  ];
  ok(correctFrench.length > 40, 'the correct-French scope collapsed, so this assertion is checking nothing');
  for (const text of correctFrench) {
    for (const f of [...FORBIDDEN_FORMS, ...FORBIDDEN_ORDERS, ...FORBIDDEN_VOWEL]) {
      ok(!hasWord(text.toLowerCase(), f),
        `"${f}" appears in content authored as correct French: "${text}". This teaches the error the lesson exists to prevent.`);
    }
  }
});

test('the four authored rows carry no plural and no wrong form', { skip: noSeed }, () => {
  const authored = seed.items.filter((i) => /^fr\.sons\.adjectifs-essentiels\.31[2-5]$/.test(i.id));
  strictEqual(authored.length, 4, 'the four authored rows are not all in the seed');
  for (const i of authored) {
    for (const f of FORBIDDEN_FORMS) {
      ok(!hasWord(i.fr.toLowerCase(), f), `authored row ${i.id} carries "${f}": "${i.fr}"`);
    }
  }
});

test('the plural over-correction is TAUGHT, not merely avoided', { skip: noSeed }, () => {
  // Avoiding vieuxs is not the same as telling the learner it does not exist. The
  // brief asks for one commonErrors card on it, and the trap deck is the one
  // place the wrong form is allowed to appear.
  const ce = sectionsOf(L!).find((s) => s.type === 'commonErrors');
  ok(ce && ce.type === 'commonErrors', 'there is no commonErrors section');
  const wrongs = (ce as { errors: { wrong: string }[] }).errors.map((e) => e.wrong).join('\n').toLowerCase();
  ok(hasWord(wrongs, 'vieuxs') || hasWord(wrongs, 'mauvaiss'),
    'no trap card shows the plural over-correction, so the learner is never told vieuxs is not a word');
});

/* ═══ No ear question can target a plural ═════════════════════════════════ */

const PLURAL_FORM = /\b(grands|grandes|petits|petites|beaux|belles|vieilles|bons|bonnes|mauvaises)\b/i;

test('no listenChoose question has an option carrying a plural', { skip: noSeed }, () => {
  // The plural -s is NEVER pronounced, on any of these six, exactly as it was on
  // every colour. An ear question on one asks the learner to hear something that
  // is not in the signal.
  const q = quizOf(L!);
  const questions = q && q.type === 'quiz' ? quizQuestions(q) : [];
  const ear = questions.filter((y) => y.format === 'listenChoose');
  ok(ear.length > 0, 'there are no ear questions, so this assertion is checking nothing');
  for (const x of ear) {
    for (const opt of x.opts ?? []) {
      ok(!PLURAL_FORM.test(opt), `ear question "${x.q}" offers the plural "${opt}"`);
    }
  }
});

test('the listening section carries no plural line', { skip: noSeed }, () => {
  const s = sectionsOf(L!).find((x) => x.type === 'listening');
  ok(s, 'there is no listening section');
  if (s && s.type === 'listening') {
    for (const line of s.lines) {
      ok(!PLURAL_FORM.test(line.fr), `the ear section carries a plural: "${line.fr}"`);
    }
  }
});

test('the ear section pairs every one of the six, because all six are audible', { skip: noSeed }, () => {
  // THE FINDING THAT INVERTS a1.13, and it is not in the brief. Every one of these
  // six feminines changes sound: grand wakes a d, petit wakes a t, mauvais wakes
  // an s as a z, bon collapses its nasal, and beau and vieux are replaced
  // outright. a1.13 had four audible of twelve and spent an act on the silence.
  const s = sectionsOf(L!).find((x) => x.type === 'listening');
  ok(s && s.type === 'listening');
  const lines = (s as { lines: { fr: string }[] }).lines;
  strictEqual(lines.length, THE_SIX.length,
    `${lines.length} ear pairs, expected ${THE_SIX.length}: every one of the six is audible in the feminine`);
  for (const a of THE_SIX) {
    ok(lines.some((l) => hasWord(l.fr, a)), `"${a}" has no ear pair, and its feminine IS audible`);
  }
});

test('the learner is told the plural is still silent, and the feminine is not', { skip: noSeed }, () => {
  // Both halves, because only one of them changed since a1.13. A learner who took
  // the last lesson at its word has stopped listening for endings entirely.
  const text = screenText(L!).toLowerCase();
  ok(/never pronounced|is silent|never said|not in the sound|cannot hear the s|silent on all six|silent on every/.test(text),
    'no screen tells the learner the plural ending is still inaudible');
  ok(/you can hear|your ear|hear the difference|changes sound|sounds different/.test(text),
    'no screen tells the learner the feminine on these six IS audible, which is what changed since a1.13');
});

/* ═══ Respellings, and the blind spot the brief names ═════════════════════ */

test('every respelling in the seed passes the shared nasal checker', { skip: noSeed }, () => {
  // The SHARED function, imported rather than reimplemented, over every row this
  // lesson names.
  for (const id of L!.itemIds) {
    const row = ITEMS.get(id);
    if (!row?.respell) continue;
    ok(!hasPlainNasalFor(row.fr, row.respell),
      `${row.id} "${row.fr}" closes a nasal with a plain n: ${row.respell}`);
  }
});

test('bonne is BON and NOT a superscript, asserted in both directions', { skip: noSeed }, () => {
  // THE ONE THE BRIEF SINGLES OUT. bonne is /bɔn/: the doubled n is a REAL
  // consonant and there is no nasal vowel in the word at all.
  //
  // MEASURED, all four candidates, through the real function:
  //     BON   ok        <- what ships, and what this lesson uses
  //     BONN  ok
  //     BOHN  FLAGGED
  //     BOHⁿ  ok, AND WRONG
  //
  // BOTH halves are asserted, because the shared checker passes BOHⁿ too and
  // would never catch the "fix". The brief warned that hasPlainNasalFor
  // false-positives on a real /n/ after a vowel; it does not, because the checker
  // was repaired to consult the French spelling and `bonne` takes the doubled-n
  // branch. The warning was right about the risk and out of date about the code.
  const row = ITEMS.get('fr.sons.nasales.167');
  ok(row, 'fr.sons.nasales.167 (bonne) is not in the seed');
  strictEqual(row!.fr, 'bonne');
  strictEqual(row!.respell, 'BON', 'bonne must be BON');
  ok(!row!.respell!.includes('ⁿ'),
    'bonne carries a superscript n. It has NO nasal vowel: /bɔn/ has a real /n/. Do not "fix" this to silence a linter.');
  ok(!hasPlainNasalFor('bonne', 'BON'), 'BON should pass the shared checker');
  ok(!hasPlainNasalFor('bonne', 'BOHⁿ'),
    'hasPlainNasalFor now catches BOHⁿ for bonne; the by-name assertion above is no longer the only guard');
});

test('grand and bon carry the superscript, asserted BY NAME', { skip: noSeed }, () => {
  const byName: Record<string, string> = {
    'fr.sons.adjectifs-essentiels.001': 'grand',
    'fr.sons.adjectifs-essentiels.003': 'bon',
  };
  for (const [id, fr] of Object.entries(byName)) {
    const row = ITEMS.get(id);
    ok(row, `${id} (${fr}) is not in the seed`);
    strictEqual(row!.fr, fr);
    ok(row!.respell?.includes('ⁿ'),
      `${id} "${fr}" is respelled ${row!.respell} with no superscript n, and it carries a genuine nasal vowel`);
  }
});

test('the three repairs actually landed in the seed', { skip: noSeed }, () => {
  const repairs: [string, string, string][] = [
    ['fr.sons.adjectifs-essentiels.001', 'grand', 'GRAHⁿ'],
    ['fr.sons.adjectifs-essentiels.003', 'bon', 'BOHⁿ'],
    ['fr.sons.adjectifs-essentiels.002', 'petit', 'pə-TEE'],
  ];
  for (const [id, fr, respell] of repairs) {
    const row = ITEMS.get(id);
    ok(row, `${id} is not in the seed`);
    strictEqual(row!.fr, fr);
    strictEqual(row!.respell, respell, `${id} "${fr}" was not repaired`);
  }
});

test('the petit repair is INVISIBLE to every shared check, so it is asserted by name', { skip: noSeed }, () => {
  // puh-TEE breaks no stated rule and passes hasPlainNasalFor cleanly. It is
  // repaired because this lesson shows petit and petite ON ONE CARD and the
  // petite it shows is fr.sons.muettes.048, spelled pə-TEET. puh-TEE beside
  // pə-TEET teaches that the first vowel changed between the two forms. It did
  // not. Nothing automatic can see this, which is why it is here.
  ok(!hasPlainNasalFor('petit', 'puh-TEE'),
    'hasPlainNasalFor now catches puh-TEE; this by-name assertion is no longer the only guard');
  strictEqual(ITEMS.get('fr.sons.adjectifs-essentiels.002')?.respell, 'pə-TEE');
  strictEqual(ITEMS.get('fr.sons.muettes.048')?.respell, 'pə-TEET');
  strictEqual(
    ITEMS.get('fr.sons.adjectifs-essentiels.002')!.respell!.split('-')[0],
    ITEMS.get('fr.sons.muettes.048')!.respell!.split('-')[0],
    'petit and petite no longer share a first syllable, and this lesson puts them on one card'
  );
});

test('the repaired rows agree with the same word elsewhere in the corpus', { skip: noSeed }, () => {
  // The point of a repair is to stop the learner meeting two transcriptions of
  // one word in two themes. grand is in muettes, consonnes and nasales; petit is
  // in muettes.
  const grandMuettes = ITEMS.get('fr.sons.muettes.002');
  if (grandMuettes?.respell) {
    strictEqual(ITEMS.get('fr.sons.adjectifs-essentiels.001')?.respell, grandMuettes.respell,
      'grand still reads differently in adjectifs-essentiels and muettes');
  }
  const petitMuettes = ITEMS.get('fr.sons.muettes.001');
  if (petitMuettes?.respell) {
    strictEqual(ITEMS.get('fr.sons.adjectifs-essentiels.002')?.respell, petitMuettes.respell,
      'petit still reads differently in adjectifs-essentiels and muettes');
  }
});

/* ═══ Nothing was re-authored, and a1.03 did not move ════════════════════ */

test('every imported id resolves and no imported row was re-authored', { skip: noSeed }, () => {
  // THE ASSERTION THAT WOULD HAVE CAUGHT THE LAST FIVE BRIEFS. The six headwords,
  // four of the six feminines and every one of the 24 paradigm sentences already
  // existed. Authoring any of them again is the failure the brief spends a page
  // warning about, and flashhub-coverage.test.ts would only catch the subset that
  // collides within one theme.
  const authoredIds = new Set(['fr.sons.adjectifs-essentiels.312', 'fr.sons.adjectifs-essentiels.313',
    'fr.sons.adjectifs-essentiels.314', 'fr.sons.adjectifs-essentiels.315']);
  const preExisting = [
    'fr.sons.adjectifs-essentiels.001', 'fr.sons.adjectifs-essentiels.002', 'fr.sons.adjectifs-essentiels.003',
    'fr.sons.adjectifs-essentiels.004', 'fr.sons.adjectifs-essentiels.005', 'fr.sons.adjectifs-essentiels.008',
    'fr.sons.muettes.047', 'fr.sons.muettes.048', 'fr.sons.consonnes.138', 'fr.sons.nasales.167',
  ];
  for (const id of preExisting) {
    ok(ITEMS.has(id), `${id} is named by this lesson and is not in the seed`);
    ok(!authoredIds.has(id), `${id} is both pre-existing and authored`);
    ok(L!.itemIds.includes(id), `${id} was imported and is not taught`);
  }
  // And the four authored ids are the ONLY rows in the 312+ range.
  const beyond = seed.items.filter((i) => /^fr\.sons\.adjectifs-essentiels\.(3[1-9]\d|[4-9]\d\d)$/.test(i.id));
  strictEqual(beyond.length, 4,
    `${beyond.length} rows exist at fr.sons.adjectifs-essentiels.312 or beyond, expected exactly the 4 authored here: `
    + beyond.map((i) => `${i.id} "${i.fr}"`).join(', '));
});

test('this lesson adds nothing to a1.03\'s measured ending population', { skip: noSeed }, () => {
  // Run through the REAL function. a1.11 added two feminine nouns in -e, moved
  // a1.03's count from 871 to 873, and turned the suite red on a lesson nobody
  // had touched. This lesson imports no gendered single-word noun at all, so
  // nothing had to be withdrawn.
  const mine = seed.items.filter((i) => L!.itemIds.includes(i.id));
  const pop = endingPopulation(
    mine.map((i) => ({ id: i.id, fr: i.fr, kind: i.kind, gender: i.gender ?? null, tags: i.tags ?? [] })) as never
  );
  strictEqual(pop.length, 0,
    `${pop.length} row(s) this lesson teaches join a1.03's measured population: `
    + pop.map((i: { id: string; fr: string }) => `${i.id} "${i.fr}"`).join(', '));
});

test('no duplicate headword within a theme, computed the flashhub way', { skip: noSeed }, () => {
  // flashhub-coverage.test.ts keys decks on `fr` with the article stripped, so
  // two rows sharing a key in one theme are one card served twice. This is what
  // would have failed if `grande` had been re-authored into adjectifs-essentiels
  // instead of reused from muettes.
  const headword = (fr: string) => fr.toLowerCase().replace(/^(le |la |les |l'|un |une |des )/, '').trim();
  const seen = new Map<string, string>();
  for (const w of seed.items) {
    if (w.kind === 'sentence') continue;
    if ((w.cardType ?? 'vocab') !== 'vocab') continue;
    const key = `${w.theme}::${headword(w.fr)}`;
    const prior = seen.get(key);
    ok(!prior, `${prior} and ${w.id} are both "${w.fr}" in ${w.theme}`);
    seen.set(key, w.id);
  }
});

/* ═══ The neighbours keep their lessons ═══════════════════════════════════ */

test('no adjective outside the six is taught, so this stays a lesson about six words', { skip: noSeed }, () => {
  // Written against PRODUCTION SURFACES rather than every string, or it fires on
  // legitimate context and gets deleted.
  const production = [
    ...strings(L!.sections.filter((s) => ['vocabThemes', 'flashcards', 'reviewDeck', 'cardDeck'].includes(s.type))),
    ...strings(L!.drills ?? []),
    ...strings((quizOf(L!) ?? {}) as unknown),
  ].join('\n').toLowerCase();
  for (const a of OTHER_ADJECTIVES) {
    ok(!hasWord(production, a), `"${a}" is taught on a production surface and is not one of the six`);
  }
});

test('nouveau is not taught, guarded by ID because a word guard would misfire', { skip: noSeed }, () => {
  // fr.a1.adjectifs-essentiels.218 is "Les nouvelles sont bonnes.", where « les
  // nouvelles » is THE NEWS and not the feminine plural of `nouveau`. It is this
  // lesson's own bon paradigm row, so a word search for "nouvelle" over the
  // production surfaces would fire on it and be deleted rather than fixed.
  // Invariant §6's warning applied before it fired rather than after.
  //
  // nouveau matters because the brief says "bel and vieil exist and nothing else
  // in A1 has a third form". `nouvel` is published at .209 in this same theme, so
  // that claim is false, and no card in this lesson makes it.
  const named = new Set(strings(L!));
  for (const id of NOT_TAUGHT_IDS) {
    ok(!L!.itemIds.includes(id), `${id} is taught and should not be`);
    ok(!named.has(id), `${id} is named in the lesson and should not be`);
  }
  ok(ITEMS.get('fr.a1.adjectifs-essentiels.218')?.fr === 'Les nouvelles sont bonnes.',
    'the row this guard exists for has moved; re-check whether a word guard is now safe');
  const text = screenText(L!).toLowerCase();
  ok(!/nothing else (in a1 )?has a third form|only two words have|no other word has a third/.test(text),
    'a card claims nothing else has a third form. nouveau does: un nouvel hôtel, published at .209.');
});

test('no placement SYSTEM is taught, so a1.16 keeps its lesson', { skip: noSeed }, () => {
  const text = screenText(L!).toLowerCase();
  for (const p of PLACEMENT_SYSTEM) {
    ok(!text.includes(p), `"${p}" is taught here; the before/after system belongs to a1.16`);
  }
  // The one statement the brief permits IS present, because a lesson that shows
  // the pattern everywhere and never names it leaves the learner to infer it.
  ok(/come first|comes first|in front of the thing|in front of it/i.test(screenText(L!)),
    'the lesson never states that these six come first, so the learner absorbs the pattern without being told');
});

test('no family SET and no possessive system, so a1.15 and a1.17 keep theirs', { skip: noSeed }, () => {
  const text = screenText(L!).toLowerCase();
  for (const p of FAMILY_TEACHING) ok(!text.includes(p), `"${p}" is taught here; family vocabulary is a1.15's`);
  for (const p of POSSESSIVE_TEACHING) ok(!text.includes(p), `"${p}" is taught here; possessives are a1.17's`);
  // And no deck collects family words, which is the shape the guard above cannot
  // see. « Mon grand-père est vieux » is legitimate; a family deck is not.
  const decks = L!.sections.filter((s) => s.type === 'vocabThemes');
  for (const d of decks) {
    for (const theme of (d as { themes: { title: string; cards: { fr: string }[] }[] }).themes) {
      const familyCards = theme.cards.filter((c) => /grand-père|grand-mère|père|mère|frère|sœur|fils|fille|parents/i.test(c.fr));
      strictEqual(familyCards.length, 0, `the "${theme.title}" deck collects family words: ${familyCards.map((c) => c.fr).join(', ')}`);
    }
  }
});

test('no colour is taught, because a1.13 shipped them', { skip: noSeed }, () => {
  // Colours appear as EVIDENCE inside four corpus sentences, and they have to:
  // « Elle porte une petite robe rouge. » is the phrase that proves both orders
  // at once and it is the best row in the lesson. So this guard is on DECK
  // ENTRIES, not on occurrences.
  //
  // An earlier version scanned every string on a deck and fired on that exact
  // sentence, which is a guard that would have been deleted rather than fixed.
  // What matters is whether a colour is being TAUGHT AS A WORD: a vocabThemes
  // card whose French IS a colour, or a flashcard whose whole answer is one.
  const COLOURS = ['rouge', 'rouges', 'bleu', 'bleue', 'bleus', 'bleues', 'vert', 'verte', 'verts', 'vertes',
    'jaune', 'noir', 'noire', 'blanc', 'blanche', 'gris', 'grise', 'marron', 'orange', 'violet', 'beige'];
  const entries: string[] = [];
  for (const s of L!.sections) {
    if (s.type === 'vocabThemes') {
      for (const t of (s as { themes: { cards: { fr: string }[] }[] }).themes) entries.push(...t.cards.map((c) => c.fr));
    }
    if (s.type === 'flashcards' || s.type === 'reviewDeck') {
      entries.push(...(s as { cards: { back: string }[] }).cards.map((c) => c.back));
    }
  }
  ok(entries.length > 20, 'the deck-entry scope collapsed, so this assertion is checking nothing');
  for (const e of entries) {
    ok(!COLOURS.includes(e.trim().toLowerCase().replace(/[.]$/, '')),
      `"${e}" is a deck entry and it is a colour; a1.13 owns the colours`);
  }
  // And no drill sorts colours, which is the other way one could sneak onto a
  // production surface as a taught word.
  for (const d of L!.drills ?? []) {
    for (const p of d.pairs ?? []) {
      ok(!COLOURS.includes(p[1].trim().toLowerCase()), `drill "${d.id}" teaches the colour "${p[1]}"`);
    }
  }
});

/* ═══ imageRef: nothing else checks this ══════════════════════════════════ */

test('every authored imageRef is registered in lessonImages.ts', { skip: noSeed }, () => {
  // NOTHING ELSE CHECKS THIS. lesson-contract.test.ts contains no reference to
  // imageRef, and the schema comment promising a check is conditional on a
  // snapshot asset manifest that does not exist today.
  //
  // THE REGISTRY IS READ AS TEXT RATHER THAN IMPORTED: lessonImages.ts is built
  // on bare `require()` calls, which Metro resolves statically and Node cannot
  // resolve at all, so `lessonImage()` cannot be called from any test in this
  // suite. Parsing the REG keys is the strongest guard available here.
  //
  // This lesson authors NONE, deliberately. The brief: "Do not invent a size or
  // comparison graphic. No component draws one."
  const registry = readFileSync(resolve(here, 'lessonImages.ts'), 'utf8');
  const registered = new Set([...registry.matchAll(/'([^']+\.(?:jpg|png|webp))':\s*require\(/gi)].map((m) => m[1]));
  ok(registered.size > 0, 'parsed no keys out of lessonImages.ts, so this assertion is checking nothing');

  const refs = strings(L!).filter((s) => /^lessons\/[a-z0-9-]+\/[a-z0-9-]+\.(jpg|png|webp)$/i.test(s));
  for (const r of refs) {
    ok(registered.has(r),
      `imageRef "${r}" is not registered in lessonImages.ts, so RichImage draws a blank box and nothing else would say so`);
  }
  strictEqual(refs.length, 0,
    'this lesson authors no image by design. If you add one, commit the asset, register it in lessonImages.ts, and update this count.');
});

/* ═══ The exam ════════════════════════════════════════════════════════════ */

test('the exam is at most half mcq', { skip: noSeed }, () => {
  const q = quizOf(L!);
  ok(q && q.type === 'quiz');
  const questions = quizQuestions(q as never);
  const mcq = questions.filter((x) => (x.format ?? 'mcq') === 'mcq').length;
  ok(mcq * 2 <= questions.length, `${mcq}/${questions.length} are mcq, over the half ceiling`);
});

test('every question has a why and a ref naming a section that exists', { skip: noSeed }, () => {
  const questions = quizQuestions(quizOf(L!) as never);
  const ids = new Set(sectionsOf(L!).map(sectionId));
  for (const x of questions) {
    ok(x.why, `no why on "${x.q}"`);
    ok(x.ref, `no ref on "${x.q}"`);
    ok(ids.has(x.ref!), `"${x.q}" refs "${x.ref}", which is not a section`);
  }
});

test('no option refers to a position, and none is duplicated', { skip: noSeed }, () => {
  // QuizDeckView shuffles the options of every closed question, per question, per
  // attempt, and re-shuffles on retry. The authored `correct` index never moves;
  // only the display order is permuted. So an option naming a position is
  // meaningless on screen, and a duplicated option makes a shuffled question
  // genuinely ambiguous rather than merely redundant.
  const questions = quizQuestions(quizOf(L!) as never);
  const POSITIONAL = /\b(both of the above|all of the above|none of these|none of the above|[abc] and [bc]|option [abc1-4]|the (first|second|third|last) (option|answer|choice))\b/i;
  for (const x of questions) {
    if (!x.opts) continue;
    strictEqual(new Set(x.opts).size, x.opts.length, `duplicate option in "${x.q}"`);
    for (const o of x.opts) ok(!POSITIONAL.test(o), `"${x.q}" offers a positional option: "${o}"`);
  }
});

test('every free-text question accepts the answer it displays', { skip: noSeed }, () => {
  const questions = quizQuestions(quizOf(L!) as never);
  for (const x of questions) {
    if (!x.answer) continue;
    ok(matchesAccept(x.answer, x.accept), `"${x.q}" displays "${x.answer}" and does not accept it`);
  }
});

test('every free-text question REJECTS the wrong agreement', { skip: noSeed }, () => {
  // The assertion that makes typeIn worth using in this lesson. fold() strips
  // accents, case, punctuation and whitespace but KEEPS the final -e and -s, so
  // agreement is genuinely testable by free text. An accept list that takes both
  // forms tells the learner the ending does not matter.
  const questions = quizQuestions(quizOf(L!) as never);
  const variants = (a: string): string[] => {
    const out = new Set<string>();
    if (/es$/.test(a)) { out.add(a.slice(0, -2)); out.add(a.slice(0, -1)); }
    else if (/[es]$/.test(a)) out.add(a.slice(0, -1));
    if (!/s$/.test(a)) out.add(`${a}s`);
    if (!/e$/.test(a)) out.add(`${a}e`);
    return [...out].filter((v) => v && v !== a);
  };
  let checked = 0;
  for (const x of questions) {
    if (x.format !== 'typeIn' && x.format !== 'errorSpot' && x.format !== 'speak') continue;
    if (!x.answer) continue;
    const words = x.answer.replace(/[.?!]$/, '').split(/\s+/);
    for (const v of variants(words[words.length - 1])) {
      const candidate = [...words.slice(0, -1), v].join(' ');
      ok(!matchesAccept(candidate, x.accept),
        `"${x.q}" accepts the wrong agreement "${candidate}" as well as "${x.answer}"`);
      checked++;
    }
  }
  ok(checked > 0, 'no free-text question was checked, so this assertion is checking nothing');
});

test('placement is tested by mcq, because fold() strips whitespace', { skip: noSeed }, () => {
  // mcq is the ONLY format that can test word order. « une grande maison » and
  // « une maison grande » DO fold to different strings, so typeIn technically
  // works, but the learner is typing a whole phrase and any other slip fails the
  // question for the wrong reason. At least one closed question must put a full
  // noun phrase in its options.
  const questions = quizQuestions(quizOf(L!) as never);
  const orderQuestions = questions.filter((x) =>
    (x.format ?? 'mcq') === 'mcq'
    && (x.opts ?? []).some((o) => /^(elle|il|j'|nous|une|un|de)\b/i.test(o.trim()) && o.trim().split(/\s+/).length >= 3));
  ok(orderQuestions.length >= 1,
    'no mcq offers whole noun phrases as options, so nothing in the exam tests word order');
  // And every placement question carries a FULL NOUN PHRASE in the stem. The
  // brief: "grande or grand?" tests gender, not placement.
  for (const x of orderQuestions) {
    ok(x.q.split(/\s+/).length >= 6, `"${x.q}" is too short to name a full situation`);
  }
});

test('correct answers do not cluster in one option slot', { skip: noSeed }, () => {
  const questions = quizQuestions(quizOf(L!) as never);
  const closed = questions.filter((x) => x.opts && x.correct !== undefined);
  const counts = new Map<number, number>();
  for (const x of closed) counts.set(x.correct as number, (counts.get(x.correct as number) ?? 0) + 1);
  for (const [slot, n] of counts) {
    ok(n / closed.length <= 0.4,
      `${Math.round(n / closed.length * 100)}% of correct answers sit in slot ${slot} (limit 40%)`);
  }
});

test('every drill is the FIRST resolving target of exactly one round', { skip: noSeed }, () => {
  // drillForRound walks a round's targets and fires the drill of the FIRST that
  // resolves, then stops. A drill named only in second place is dead content.
  // a1.05 shipped two such drills and a1.07's first draft a third.
  const q = quizOf(L!);
  const rounds = q && q.type === 'quiz' ? (q.rounds ?? []) : [];
  const drillFor = new Map((L!.errorTriggers ?? []).map((t) => [t.id, t.drill]));
  const leads: string[] = [];
  for (const r of rounds) {
    const lead = (r.targets ?? []).find((t) => drillFor.has(t));
    ok(lead, `round ${r.id} names no target that resolves to a drill`);
    ok(!leads.includes(lead!), `round ${r.id} leads on "${lead}", which another round already leads on`);
    leads.push(lead!);
  }
  const fired = new Set(leads.map((t) => drillFor.get(t)!));
  const teaching = (L!.drills ?? []).filter((d) => !d.id.startsWith('retest-'));
  for (const d of teaching) ok(fired.has(d.id), `drill "${d.id}" can be fired by no round, so it is dead content`);
  strictEqual((L!.errorTriggers ?? []).length, SIX_TRIGGERS);
  strictEqual(rounds.length, SIX_TRIGGERS, 'one round per trigger, or a drill is unreachable');
});

test('every trigger names a drill, a retest and sections that exist', { skip: noSeed }, () => {
  const known = new Set((L!.drills ?? []).map((d) => d.id));
  const ids = new Set(sectionsOf(L!).map(sectionId));
  for (const t of L!.errorTriggers ?? []) {
    ok(known.has(t.drill), `trigger ${t.id} names drill "${t.drill}", which is not authored`);
    if (t.retest) ok(known.has(t.retest), `trigger ${t.id} names retest "${t.retest}", which is not authored`);
    for (const d of t.detectOn) {
      ok(ids.has(d.split('/')[0]), `trigger ${t.id} detects on "${d}", and that section does not exist`);
    }
  }
});

test('every sort drill names item ids that resolve and are taught', { skip: noSeed }, () => {
  // A sort drill scores against the corpus. Passing display strings validates as
  // broken ids and renders a deck of blanks.
  for (const d of L!.drills ?? []) {
    if (d.format !== 'sort') continue;
    ok((d.items ?? []).length > 0, `sort drill "${d.id}" has no items`);
    for (const i of d.items ?? []) {
      ok(ITEMS.has(i), `sort drill "${d.id}" names ${i}, which is not in the seed`);
      ok(L!.itemIds.includes(i), `sort drill "${d.id}" names ${i}, which the lesson does not teach`);
    }
  }
});

/* ═══ The dictée, through the real dicteeMode ═════════════════════════════ */

test('every dictée target is in LETTERS mode', { skip: noSeed }, () => {
  // MEASURED, not assumed. Word mode hands the learner each whole word as a
  // pre-spelled tile, so it CANNOT test an agreement ending: tapping `grande` is
  // not producing it. The letter limit is 16 and it is TIGHT: only two rows in
  // this lesson's own theme survive it, which is why four come from
  // description-personnes-objets.
  const s = sectionsOf(L!).find((x) => x.type === 'dictation');
  ok(s, 'there is no dictation section');
  const ids = (s as { itemIds?: string[] }).itemIds ?? [];
  ok(ids.length > 0, 'the dictée names no items');
  for (const id of ids) {
    const row = ITEMS.get(id);
    ok(row, `the dictée names ${id}, which is not in the seed`);
    strictEqual(dicteeMode(row!.fr), 'letters',
      `"${row!.fr}" lands in word mode, where the learner taps a pre-spelled tile and never writes the ending`);
    ok(row!.drills.includes('dictation'), `${id} carries no dictation drill`);
  }
});

test('the dictée covers the audible feminine, the silent plural and the vowel form', { skip: noSeed }, () => {
  const s = sectionsOf(L!).find((x) => x.type === 'dictation');
  const frs = ((s as { itemIds?: string[] }).itemIds ?? []).map((id) => ITEMS.get(id)?.fr ?? '');
  ok(frs.some((f) => /grande\./.test(f)), 'no audible feminine in the dictée');
  ok(frs.some((f) => /grands\./.test(f)), 'no silent plural in the dictée');
  ok(frs.some((f) => /belle\./.test(f)), 'no replaced-word feminine in the dictée');
  ok(frs.some((f) => /bel /.test(f)), 'no vowel form in the dictée, which is this lesson\'s unique content');
});

/* ═══ The speak mission ═══════════════════════════════════════════════════ */

test('every speak item carries voiceflash, and some of them are sentences', { skip: noSeed }, () => {
  // An item without voiceflash renders as a card the learner cannot be scored on,
  // which looks like a broken mission rather than a missing tag.
  //
  // MEASURED: not one published sentence in `adjectifs-essentiels` carries
  // voiceflash. Three exist elsewhere in the corpus and all three were already in
  // the seed. Without them the spoken mission would be fourteen isolated words
  // and the learner would never produce one of these six inside a sentence.
  const s = sectionsOf(L!).find((x) => sectionId(x) === 's20-speak');
  ok(s, 'the speak mission is missing');
  const ids = (s as { itemIds?: string[] }).itemIds ?? [];
  ok(ids.length > 0, 'the speak mission names no items');
  for (const id of ids) {
    const row = ITEMS.get(id);
    ok(row, `speak names ${id}, which is not in the seed`);
    ok(row!.drills.includes('voiceflash'), `${id} "${row!.fr}" carries no voiceflash`);
  }
  const sentences = ids.filter((id) => ITEMS.get(id)?.kind === 'sentence');
  ok(sentences.length >= 3,
    `only ${sentences.length} spoken sentence(s). The learner has to produce one of these six inside something.`);
});

/* ═══ The reading passage and its glossary ════════════════════════════════ */

test('the reading passage is one block and its glossary can actually fire', { skip: noSeed }, () => {
  const s = sectionsOf(L!).find((x) => x.type === 'reading');
  ok(s, 'there is no reading section');
  if (!s || s.type !== 'reading') return;
  // questionsInModal WITH questions is the only path that reaches PassagePage and
  // so the only path that draws the glossary underlines. a1.01 shipped five
  // entries down the other path.
  ok(s.questionsInModal, 'reading without questionsInModal never reaches the glossary renderer');
  ok((s.questions ?? []).length > 0, 'questionsInModal with no questions renders nothing');
  ok(!s.text.includes('\n'), 'PassagePage splits on sentence ends, so an authored newline is silently discarded');

  // Checked by running the REAL segmentSentence and comparing matched KEYS, not
  // matched text. a1.08 shipped two entries that could never underline anything
  // because every occurrence sat inside a longer key, and its own test passed
  // because it compared text.
  const entries = s.glossary ?? [];
  ok(entries.length > 0, 'the reading section has no glossary');
  const keys = new Set(entries.flatMap((g) => glossKeys(g.word)).filter(Boolean));
  const hit = new Set(segmentSentence(s.text, keys).filter((x) => x.key).map((x) => x.key!));
  const unmatched = entries.filter((g) => !glossKeys(g.word).some((k) => hit.has(k)));
  strictEqual(unmatched.length, 0,
    `glossary entr(ies) that underline nothing, because a longer key shadows them or they are absent from the `
    + `passage: ${unmatched.map((g) => `"${g.word}"`).join(', ')}`);
});

test('the reading passage keeps English outside the guillemets', { skip: noSeed }, () => {
  // Paul's A1 rule, 2026-08-04: in an A1 passage, anything not inside « » is
  // English. The passage also has to SHOW the placement error, because that is
  // the notice a French reader would notice and nobody would correct.
  const s = sectionsOf(L!).find((x) => x.type === 'reading');
  ok(s && s.type === 'reading');
  const text = (s as { text: string }).text;
  ok(!text.includes('\n'), 'the passage authors line breaks that PassagePage discards');
  ok((text.match(/«[^»]*»/g) ?? []).length >= 4, 'the passage holds fewer than four real notices');
  // « the un kind » and « the une kind » are ENGLISH here. They are this course's
  // house phrase for grammatical gender, chosen precisely so no card has to say
  // masculine or feminine, and a1.13 uses them the same way. Stripping them
  // before the scan is not a loophole: a guard that fired on the project's own
  // agreed vocabulary would be deleted rather than fixed.
  const outside = text
    .replace(/«[^»]*»/g, ' ')
    .replace(/\bthe une? kind\b/gi, ' ');
  const french = outside.match(/\b(est|elle|dans|une|des|les|avec|pour|sur|chez|puis|il|la|le|du|sont)\b/i);
  ok(!french, `French leaked outside the guillemets: "${french?.[0]}"`);
  ok(/«[^»]*appartement grand[^»]*»/.test(text),
    'the passage never shows the placement error, so the reading proves nothing this lesson teaches');
});

/* ═══ House style ═════════════════════════════════════════════════════════ */

test('no em dash, no "honest", no U+203F anywhere in the lesson', { skip: noSeed }, () => {
  const json = JSON.stringify(L!);
  ok(!json.includes('—'), 'em dash found; the house style bans it');
  ok(!/honest/i.test(json), '"honest" is banned from authored content');
  ok(!json.includes('‿'),
    'U+203F renders as a low underscore on a Pixel 6. This lesson deliberately does not teach the /t/ liaison '
    + 'on `un grand homme`: a liaison is heard and never written, and it belongs to sons.10.');
});

test('no grammar jargon reaches a learner surface', { skip: noSeed }, () => {
  const isIdentifier = (s: string) => !/\s/.test(s) && /^[a-z0-9][a-z0-9.\-_/]*$/i.test(s);
  const surfaces = [...strings(L!.sections), ...strings(L!.sheets ?? []), ...strings(L!.terms ?? {})];
  for (const s of surfaces) {
    if (isIdentifier(s)) continue;
    ok(!/\b(conjugaison|adjectif|(?<!')accord|masculin|féminin|invariable|déterminant)\b/i.test(s),
      `grammar vocabulary on a learner surface: "${s.slice(0, 90)}"`);
  }
});

test('no section declares more than three term chips', { skip: noSeed }, () => {
  // The renderer shows three and collapses the rest. Seven sons.06 sections
  // declare more and the extras are invisible.
  for (const s of sectionsOf(L!)) {
    const terms = (s as { terms?: string[] }).terms ?? [];
    ok(terms.length <= 3, `${sectionId(s)} declares ${terms.length} term chips; the renderer shows three`);
  }
});

test('every declared term is used, and every used term is declared', { skip: noSeed }, () => {
  const declared = new Set(Object.keys(L!.terms ?? {}));
  const used = new Set(sectionsOf(L!).flatMap((s) => (s as { terms?: string[] }).terms ?? []));
  for (const t of used) ok(declared.has(t), `section chip "${t}" names no declared term`);
  for (const t of declared) ok(used.has(t), `term "${t}" is declared and surfaced by no section`);
});

test('every term example names an item that resolves and is taught', { skip: noSeed }, () => {
  for (const [name, term] of Object.entries(L!.terms ?? {})) {
    for (const ex of term.examples ?? []) {
      ok(ITEMS.has(ex.itemId), `term "${name}" cites ${ex.itemId}, which is not in the seed`);
      ok(L!.itemIds.includes(ex.itemId), `term "${name}" cites ${ex.itemId}, which the lesson does not teach`);
    }
  }
});

test('commonErrors carries swipe, or it draws a blank mission', { skip: noSeed }, () => {
  const s = sectionsOf(L!).find((x) => x.type === 'commonErrors');
  ok(s, 'there is no commonErrors section');
  ok((s as { swipe?: boolean }).swipe === true,
    'commonErrors without swipe hits a fallback that returned undefined and drew a BLANK screen (sons.08 m22, a1.01 m5)');
});

test('a groupDrill control page carries items: [] and no size', { skip: noSeed }, () => {
  // An xl groupDrill must never stack words and a check in one group.
  for (const s of sectionsOf(L!)) {
    if (s.type !== 'groupDrill') continue;
    const groups = (s as { groups: { items?: unknown[]; check?: unknown }[] }).groups;
    const isControlPage = groups.every((g) => (g.items ?? []).length === 0 && g.check);
    if (isControlPage) {
      strictEqual((s as { size?: string }).size, undefined,
        `${sectionId(s)} is a control page and carries a size`);
      for (const g of groups) ok(Array.isArray(g.items), `${sectionId(s)} has a group with no explicit items: []`);
    }
  }
});

test('every sheet is reachable and every sheetId resolves', { skip: noSeed }, () => {
  const sheetIds = new Set((L!.sheets ?? []).map((s) => s.id));
  const linked = new Set(sectionsOf(L!).map((s) => (s as { sheetId?: string }).sheetId).filter(Boolean) as string[]);
  for (const id of linked) ok(sheetIds.has(id), `a section links sheet "${id}", which is not declared`);
  for (const id of sheetIds) ok(linked.has(id), `sheet "${id}" is declared and no section links it`);
});

test('the reference sheet holds all six in all four forms', { skip: noSeed }, () => {
  // The in-flow table is two columns, because six rows of four would run off the
  // fold in a scrolling page. The full grid has to live somewhere findable, or it
  // creeps back into the flow. It is also what a learner returns to during a1.15,
  // a1.16 and a1.17.
  const sheet = (L!.sheets ?? []).find((s) => s.id === 'sheet.a1.14.forms');
  ok(sheet, 'sheet.a1.14.forms is not declared');
  const table = (sheet!.sections ?? []).find((s) => s.type === 'table');
  ok(table && table.type === 'table', 'the forms sheet holds no table');
  strictEqual((table as { cols: string[] }).cols.length, FOUR_FORMS);
  strictEqual((table as { rows: string[][] }).rows.length, THE_SIX.length);
  const flat = (table as { rows: string[][] }).rows.flat();
  for (const w of ['grande', 'petite', 'belle', 'vieille', 'bonne', 'mauvaise', 'beaux', 'vieux']) {
    ok(flat.includes(w), `the forms sheet does not hold "${w}"`);
  }
});

/* ═══ The audio brief, which cannot be recovered later ════════════════════ */

test('the audio brief pins the constraints that vanish when the clip arrives', { skip: noSeed }, () => {
  // A rule about HOW something is recorded becomes invisible the moment the clip
  // is delivered. This lesson's constraints are the mirror image of a1.13's: there
  // no pair could be allowed to sound different, and here every pair genuinely
  // does, so the risk is a reader EXAGGERATING rather than inventing.
  const recorded = L!.audio?.recorded ?? [];
  ok(recorded.length > 0, 'no recordings are briefed');
  const all = recorded.map((r) => r.desc).join('\n').toLowerCase();
  ok(/one take/.test(all), 'no recording brief requires a contrast pair to be one take');
  ok(/beau \/ bel \/ belle|beau\/bel\/belle/.test(all),
    'the three-form set beau / bel / belle is not pinned as a single take');
  ok(/never.{0,40}bare|full phrases|never as isolated|not as isolated/.test(all),
    'the brief does not require un bel homme and un vieil ami to be recorded as FULL PHRASES; '
    + 'the form exists only because of the following vowel, so a lone bel clip teaches nothing');
  ok(/never be recorded in isolation|not be recorded in isolation|are not recorded in isolation/.test(all),
    'the brief does not forbid recording a masculine plural in isolation, which implies a difference vieux and mauvais do not have');
  ok(/bon \/ bonne|bon\/bonne/.test(all), 'the largest sound change in the set is not pinned as one take');
  ok(/do not.{0,60}(exaggerate|perform|mark it as wrong|sound wrong)/.test(all),
    'the brief does not warn the reader against performing the word-order error, which is what makes it a trap');
});

/* ═══ Seed / source parity ════════════════════════════════════════════════ */

test('the seed copy matches the authored source, field for field', { skip: noSeed }, async () => {
  // The failure mode that has twice cost this project real work: seed.json and
  // the authoring source drift, and nothing notices until a publish erases one of
  // them. Every figure below is DERIVED from the source rather than restated.
  const src = await import('../../../ealch-admin/scripts/data/adjectifs-lesson.ts') as {
    ADJECTIFS_LESSON: Lesson;
  };
  const S = src.ADJECTIFS_LESSON;
  strictEqual(L!.id, S.id);
  strictEqual(L!.version, S.version, 'the seed and the source disagree about the version');
  strictEqual(L!.sections.length, S.sections.length, 'section count has drifted');
  strictEqual(L!.itemIds.length, S.itemIds.length, 'itemId count has drifted');
  strictEqual(L!.reframe, S.reframe);
  strictEqual((L!.acts ?? []).length, (S.acts ?? []).length);
  strictEqual((L!.drills ?? []).length, (S.drills ?? []).length);
  strictEqual((L!.sheets ?? []).length, (S.sheets ?? []).length);
  strictEqual((L!.errorTriggers ?? []).length, (S.errorTriggers ?? []).length);
  deepStrictEqual(L!.sections.map(sectionId), S.sections.map(sectionId), 'the spine has drifted');
  deepStrictEqual(L!.itemIds, S.itemIds, 'the taught item set has drifted');
  deepStrictEqual(L!.deckTranche, S.deckTranche, 'the tranches have drifted');
});

test('every authored corpus row in the source is in the seed, unchanged', { skip: noSeed }, async () => {
  const src = await import('../../../ealch-admin/scripts/data/adjectifs-corpus.ts') as {
    AUTHORED_WORDS: { id: string; fr: string; en: string; respell?: string }[];
    THE_SIX: readonly string[];
  };
  strictEqual(src.AUTHORED_WORDS.length, 4, 'the authoring job is four words; it has changed size');
  deepStrictEqual([...src.THE_SIX], [...THE_SIX], 'the six have drifted between the test and the source');
  for (const w of src.AUTHORED_WORDS) {
    const row = ITEMS.get(w.id);
    ok(row, `authored row ${w.id} "${w.fr}" never reached the seed`);
    strictEqual(row!.fr, w.fr, `${w.id} has drifted between the source and the seed`);
    strictEqual(row!.en, w.en, `${w.id}'s gloss has drifted`);
    strictEqual(row!.respell, w.respell, `${w.id}'s respelling has drifted`);
  }
});

test('the import manifest still matches the seed it was generated from', { skip: noSeed }, async () => {
  // The manifest is a RECORDED READ of Postgres. If it has drifted from the seed,
  // one of the two has been edited by hand and the batch's field-by-field check
  // is now comparing against something stale.
  const src = await import('../../../ealch-admin/scripts/data/adjectifs-imported.ts') as {
    IMPORTED: { id: string; fr: string; en: string }[];
    REUSED: { id: string; fr: string; en: string }[];
  };
  ok(src.IMPORTED.length >= 40, `${src.IMPORTED.length} imported rows, expected the manifest to be substantial`);
  for (const r of [...src.IMPORTED, ...src.REUSED]) {
    const row = ITEMS.get(r.id);
    ok(row, `manifest row ${r.id} "${r.fr}" is not in the seed`);
    strictEqual(row!.fr, r.fr, `${r.id} has drifted between the manifest and the seed`);
  }
  // And the import is an order of magnitude larger than the authoring job, which
  // is the finding this whole build turns on.
  ok(src.IMPORTED.length > 10 * 4,
    'the import is no longer much larger than the authored set; re-check whether rows are being re-authored');
});
