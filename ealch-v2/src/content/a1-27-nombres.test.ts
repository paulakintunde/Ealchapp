// Guards a1.27.l1 "Les nombres 21-100", the middle of the three numbers lessons.
//
// Referential integrity across the whole corpus is already proven by
// seed.backcompat.test.ts, and the cross-lesson rules by lesson-contract.test.ts.
// This file pins the intent specific to THIS lesson, so a later edit that drops
// a number, flattens the arithmetic back into a word list, lets a1.28's
// material in, or pastes a corpus respelling into a card goes red here rather
// than in front of a learner.
//
// Two sources are checked, not one. The SEED is what a learner receives. The
// AUTHORED SOURCE in ealch-admin is what the next author edits. Both are read
// here and the parity test at the bottom fails when they drift, which is the
// failure mode that has twice cost this project real work.
//
// Counts are DERIVED from the authored source wherever a count is asserted. A
// hardcoded number fails on itself the first time content legitimately changes,
// and the fix is then to edit the test, which is how a test comes to certify a
// bug. Where a floor IS stated (the listenChoose share, the mcq ceiling, the
// minimum number of decompositions shown) it is a design decision being pinned,
// not a count being restated, and it is documented where it appears.
//
// Nothing here reimplements app logic. The dictée mode, the decoy bank, the
// glossary matcher and the nasal-convention check are all imported from the
// modules the renderer and the validator use. An earlier version of a1.01's
// test inlined its own copy of the glossary lookup, which made it a second
// implementation free to drift, and it had copied the version that was already
// broken, so it passed while the feature was dead.
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { ok, strictEqual } from 'node:assert';
import { test } from 'node:test';
import { narrationOf, quizQuestions, validateLesson, type Lesson } from './schema.ts';
import { hasPlainNasal, hasPlainNasalFor } from './density.logic.ts';
import { glossKeys, segmentSentence } from './gloss.logic.ts';
import { dicteeMode, dicteeWords, wordDecoys } from './dictee.logic.ts';

const here = dirname(fileURLToPath(import.meta.url));
const seed = JSON.parse(readFileSync(resolve(here, 'seed.json'), 'utf8')) as {
  units: { id: string; seq: number; title: string; canDo: string; lessonIds: string[]; themes?: string[]; prereqUnitIds?: string[] }[];
  lessons: Lesson[];
  items: { id: string; kind: string; level: string; theme: string; fr: string; en: string; drills: string[] }[];
};

const L = seed.lessons.find((l) => l.id === 'a1.27.l1');
const ITEMS = new Map(seed.items.map((i) => [i.id, i]));

// The admin repo is a sibling checkout. Skip cleanly when it is absent (the app
// can be built on its own) rather than failing the suite.
let SRC: Lesson | null = null;
let SRC_REFRAME = '';
let SRC_RANGE: string[] = [];
let SRC_HARD: string[] = [];
let SRC_NEW_IDS: string[] = [];
try {
  const lesson = await import('../../../ealch-admin/scripts/data/nombres21-lesson.ts');
  const corpus = await import('../../../ealch-admin/scripts/data/nombres21-corpus.ts');
  SRC = lesson.NOMBRES21_LESSON as Lesson;
  SRC_REFRAME = lesson.REFRAME as string;
  SRC_RANGE = lesson.NOMBRES21_RANGE_IDS as string[];
  SRC_HARD = lesson.NOMBRES21_HARD_IDS as string[];
  SRC_NEW_IDS = corpus.NOMBRES21_NEW_IDS as string[];
} catch {
  // Not available; the source-derived tests below no-op.
}
const noSrc = !SRC;
// The seed copy arrives with the merge. Before that every assertion here would
// fail for one reason, which is not a useful signal.
const noSeed = !L;

/** Every authored string in a value. */
function strings(v: unknown, out: string[] = []): string[] {
  if (typeof v === 'string') out.push(v);
  else if (Array.isArray(v)) v.forEach((x) => strings(x, out));
  else if (v && typeof v === 'object') Object.values(v).forEach((x) => strings(x, out));
  return out;
}

const sectionIds = () => L!.sections.map((s) => (s as { id?: string }).id).filter(Boolean) as string[];
const section = (id: string) => L!.sections.find((s) => (s as { id?: string }).id === id);
const theQuiz = () =>
  L!.sections.find((s): s is Extract<Lesson['sections'][number], { type: 'quiz' }> => s.type === 'quiz')!;

/** The eighty numbers this unit exists to teach, spelled out, 21 first.
 *
 *  This IS a hardcoded list, deliberately and uniquely. It is not a count that
 *  can drift with content, it is the definition of the unit: "Numbers 21 to
 *  100". Deriving it from the lesson would be asking the lesson whether it
 *  teaches what it teaches. */
const TWENTYONE_TO_HUNDRED = [
  'vingt et un', 'vingt-deux', 'vingt-trois', 'vingt-quatre', 'vingt-cinq', 'vingt-six', 'vingt-sept', 'vingt-huit', 'vingt-neuf',
  'trente', 'trente et un', 'trente-deux', 'trente-trois', 'trente-quatre', 'trente-cinq', 'trente-six', 'trente-sept', 'trente-huit', 'trente-neuf',
  'quarante', 'quarante et un', 'quarante-deux', 'quarante-trois', 'quarante-quatre', 'quarante-cinq', 'quarante-six', 'quarante-sept', 'quarante-huit', 'quarante-neuf',
  'cinquante', 'cinquante et un', 'cinquante-deux', 'cinquante-trois', 'cinquante-quatre', 'cinquante-cinq', 'cinquante-six', 'cinquante-sept', 'cinquante-huit', 'cinquante-neuf',
  'soixante', 'soixante et un', 'soixante-deux', 'soixante-trois', 'soixante-quatre', 'soixante-cinq', 'soixante-six', 'soixante-sept', 'soixante-huit', 'soixante-neuf',
  'soixante-dix', 'soixante et onze', 'soixante-douze', 'soixante-treize', 'soixante-quatorze', 'soixante-quinze', 'soixante-seize', 'soixante-dix-sept', 'soixante-dix-huit', 'soixante-dix-neuf',
  'quatre-vingts', 'quatre-vingt-un', 'quatre-vingt-deux', 'quatre-vingt-trois', 'quatre-vingt-quatre', 'quatre-vingt-cinq', 'quatre-vingt-six', 'quatre-vingt-sept', 'quatre-vingt-huit', 'quatre-vingt-neuf',
  'quatre-vingt-dix', 'quatre-vingt-onze', 'quatre-vingt-douze', 'quatre-vingt-treize', 'quatre-vingt-quatorze', 'quatre-vingt-quinze', 'quatre-vingt-seize', 'quatre-vingt-dix-sept', 'quatre-vingt-dix-huit', 'quatre-vingt-dix-neuf',
  'cent',
];

/** Seventy to ninety-nine, the range the lesson's weight sits on. */
const SEVENTY_TO_NINETYNINE = TWENTYONE_TO_HUNDRED.slice(49, 79);

/** a1.28's material.
 *
 *  `cent` standing ALONE is this lesson's ceiling and its canDo names it, so a
 *  bare cent is deliberately not matched: matching it would make the boundary
 *  test fail on the thing the boundary is drawn around. What is matched is cent
 *  used as a MULTIPLIER, and mille and million in any position. Whole words
 *  only, so "centimes" and "milliers" do not fire it and nobody deletes the
 *  check for crying wolf. */
const L4_MATERIAL =
  /\b(?:mille|millions?|milliards?)\b|\b(?:deux|trois|quatre|cinq|six|sept|huit|neuf|dix)[ -]cents?\b|\bcents?[ -](?:et[ -])?(?:une?|deux|trois|quatre|cinq|six|sept|huit|neuf|dix|onze|douze|treize|quatorze|quinze|seize|vingts?|trente|quarante|cinquante|soixante)\b/i;

test('a1.27.l1 exists and is well-formed', { skip: noSeed }, () => {
  ok(L, 'a1.27.l1 is present in the seed');
  strictEqual(validateLesson(L!).length, 0);
  strictEqual(L!.unitId, 'a1.27');
  strictEqual(L!.level, 'a1');
});

test('the tag numbers the lesson by where it sits, not by what its id says', { skip: noSeed }, () => {
  // The Den, the unit page and the mission list all derive the lesson number
  // from the unit's `seq` (commit 56c79a7). `tag` is the ONE place that number
  // is authored by hand, so a tag built from the unit id disagrees with every
  // derived surface: a1.27 sits at seq 3, and a tag of 27 put "LEÇON 03" on the
  // unit page and "LEÇON 27" in the header of all 28 missions inside it. Found
  // on a Pixel 6 on 2026-08-05.
  //
  // a1.02 never surfaced this, because its id and its position agree. Derived
  // here rather than pinned to a literal so the next lesson whose id and
  // position disagree fails before a device does.
  const unit = seed.units.find((u) => u.id === L!.unitId)!;
  strictEqual(L!.tag, `A1 · LEÇON ${String(unit.seq).padStart(2, '0')}`);
});

test('the a1.27 unit links the lesson, and its own copy is untouched', { skip: noSeed }, () => {
  const unit = seed.units.find((u) => u.id === 'a1.27');
  ok(unit, 'a1.27 unit exists');
  ok(unit!.lessonIds.includes('a1.27.l1'), 'unit lists the lesson, so the Den can reach it');
  // The Den advertises these before the learner opens anything. Authoring the
  // lesson is not a licence to rewrite the promise it was built against.
  strictEqual(unit!.title, 'Numbers 21 to 100');
  strictEqual(unit!.canDo, 'Can count to a hundred, including soixante-dix, quatre-vingts and quatre-vingt-dix');
  ok(unit!.themes?.includes('nombres'), 'the theme binding survives');
});

test('the declared prerequisite is reachable, so the lesson can build on it', { skip: noSeed }, () => {
  // a1.27 declares prereqUnitIds: ["a1.02"], which is what entitles this lesson
  // to use one to twenty freely and teach none of it. The brief said a1.02 was
  // still empty; it is not. If that ever becomes true again, this lesson is
  // gated behind a lesson nobody can take, and the fix is a recap act rather
  // than quietly re-teaching a1.02's material.
  const unit = seed.units.find((u) => u.id === 'a1.27');
  ok(unit!.prereqUnitIds?.includes('a1.02'), 'a1.27 still declares a1.02 as its prerequisite');
  const prereq = seed.units.find((u) => u.id === 'a1.02');
  ok(prereq, 'a1.02 is in the seed');
  ok(
    prereq!.lessonIds.length > 0,
    'a1.02 has no lessons, so a1.27 assumes ground no learner can cover. Author a recap act or clear the prerequisite.',
  );
  ok(
    seed.lessons.some((l) => l.id === prereq!.lessonIds[0]),
    'the prerequisite unit names a lesson that is not in the seed',
  );
});

test('the overview block is authored', { skip: noSeed }, () => {
  const o = L!.overview;
  ok(o, 'overview is authored');
  ok(o!.titleEn.length > 0 && o!.introFr.length > 0);
  ok(o!.minutes >= 1 && o!.minutes <= 180);
  ok(o!.difficulty >= 1 && o!.difficulty <= 5);
  // Harder than a1.02 and not the hardest thing in the track: this is the
  // third lesson in A1 and the arithmetic is the only difficulty in it.
  ok(o!.difficulty <= 3, `an early A1 lesson should stay approachable, got ${o!.difficulty}`);
});

test('the mission spine is the authored one, in order', { skip: noSeed }, () => {
  const types = L!.sections.map((s) => s.type);
  strictEqual(types[0], 'scene', 'the learner meets the stakes before any rule');
  strictEqual(types[types.length - 1], 'roundup', 'the badge closes the journey');
  strictEqual(types[types.length - 2], 'quiz', 'the exam sits just before the badge');
  // The spine, named rather than counted, so an insertion in the wrong place is
  // a failure that says where.
  strictEqual(
    sectionIds().join(' '),
    's01-scene s02-goals s03-shape s04-tens s05-etrule s06-easy ' +
    's07-seventy s08-seventies s09-hear70 ' +
    's10-eighty s11-eighties s12-ninety s13-nineties s14-teensback s15-traps ' +
    's16-neighbours s17-speed s18-speak s19-words s20-flash s21-dictation s22-cases s23-phone ' +
    's24-reading s25-review s26-progress s27-quiz s28-roundup',
  );
});

test('the weight sits after sixty-nine, which is the shape of the argument', { skip: noSeed }, () => {
  // Twenty-one to sixty-nine is one regular pattern the learner half-knows from
  // vingt et un, and spending six missions on it would be spending them in the
  // wrong place. Acts 3 and 4 own the arithmetic; act 2 owns the easy half.
  // Pinned as a RATIO rather than as two counts, so either act can gain or lose
  // a mission and only a genuine reweighting fails.
  const acts = L!.acts ?? [];
  const byId = new Map(acts.map((a) => [a.id, a]));
  const easy = byId.get('act2')!.sections.length;
  const hard = byId.get('act3')!.sections.length + byId.get('act4')!.sections.length;
  ok(
    hard >= easy * 2,
    `${hard} missions on 70 to 99 against ${easy} on 21 to 69; the lesson has drifted back towards the easy half`,
  );
});

test('every act claims its sections, exactly once, with no ghosts', { skip: noSeed }, () => {
  const acts = L!.acts ?? [];
  ok(acts.length > 0, 'the lesson declares acts (isV2Lesson gates density validation on this)');
  const ids = sectionIds();
  strictEqual(ids.length, L!.sections.length, 'every section carries an id');
  const claimed = acts.flatMap((a) => a.sections ?? []);
  for (const c of claimed) ok(ids.includes(c), `act names section "${c}", which is not in the lesson`);
  for (const i of ids) ok(claimed.includes(i), `section "${i}" is claimed by no act`);
  const twice = claimed.filter((c, i) => claimed.indexOf(c) !== i);
  strictEqual(twice.length, 0, `claimed by two acts: ${twice.join(', ')}`);
  // One tranche per act, or an act releases nothing and a tranche never fires.
  strictEqual((L!.deckTranche ?? []).length, acts.length);
});

test('the journey is genuinely multimodal, and weighted towards the ear', { skip: noSeed }, () => {
  const types = L!.sections.map((s) => s.type);
  const present = new Set(types);
  for (const t of [
    'scene', 'goals', 'cardDeck', 'tapTable', 'examples', 'listening', 'practice',
    'commonErrors', 'vocabThemes', 'flashcards', 'dictation', 'scenario', 'useCases',
    'reading', 'reviewDeck', 'progressCheck', 'quiz', 'roundup',
  ] as const) {
    ok(present.has(t), `section type ${t} present`);
  }
  // The canDo is "can count to a hundred", and in practice that means catching
  // a price, a house number or a phone number at speed. Two listening missions
  // and a listen practice is the floor that claim needs.
  const listening = types.filter((t) => t === 'listening').length;
  ok(listening >= 2, `a recognition lesson wants more than one listening mission, got ${listening}`);
  ok(
    L!.sections.some((s) => s.type === 'practice' && s.skill === 'listen'),
    'there is a listen-skill practice mission',
  );
  ok(
    L!.sections.some((s) => s.type === 'practice' && s.skill === 'speak'),
    'and a speak-skill one, because counting to a hundred is the canDo',
  );
});

test('every number from twenty-one to a hundred is taught, and each resolves', { skip: noSeed }, () => {
  // Asserted against the CORPUS, so a lesson that quietly drops eighty-four
  // fails the build rather than reaching a learner with a gap between
  // eighty-three and eighty-five.
  const declared = new Map(
    L!.itemIds
      .map((id) => ITEMS.get(id))
      .filter((it): it is NonNullable<typeof it> => !!it)
      .map((it) => [it.fr.toLowerCase(), it.id]),
  );
  const missing = TWENTYONE_TO_HUNDRED.filter((n) => !declared.has(n));
  strictEqual(missing.length, 0, `not declared by this lesson: ${missing.join(', ')}`);

  // And every one of them is released to spaced repetition, or the learner is
  // taught a number the SRS never gives back.
  const released = new Set(
    (L!.deckTranche ?? []).flat().map((id) => ITEMS.get(id)?.fr.toLowerCase()),
  );
  const unreleased = TWENTYONE_TO_HUNDRED.filter((n) => !released.has(n));
  strictEqual(unreleased.length, 0, `taught but never released to review: ${unreleased.join(', ')}`);
});

test('seventy to ninety-nine is present in full on the surfaces that drill it', { skip: noSeed }, () => {
  // The thirty that carry the arithmetic. Everything below seventy is one
  // regular pattern and the learner assembles it; these thirty are what the
  // lesson exists for, so they have to be on a flip card and in the mouth, not
  // only in the itemIds list.
  const flash = L!.sections.find(
    (s): s is Extract<Lesson['sections'][number], { type: 'flashcards' }> => s.type === 'flashcards',
  );
  ok(flash, 'the lesson has a flashcards mission');
  const backs = new Set(flash!.cards.map((c) => c.back.toLowerCase()));
  const noCard = SEVENTY_TO_NINETYNINE.filter((n) => !backs.has(n));
  strictEqual(noCard.length, 0, `in the hard range but on no flashcard: ${noCard.join(', ')}`);

  const speak = L!.sections.find(
    (s): s is Extract<Lesson['sections'][number], { type: 'practice' }> =>
      s.type === 'practice' && s.skill === 'speak',
  )!;
  const spoken = new Set(speak.itemIds.map((id) => ITEMS.get(id)?.fr.toLowerCase()));
  const unspoken = SEVENTY_TO_NINETYNINE.filter((n) => !spoken.has(n));
  strictEqual(unspoken.length, 0, `never said out loud: ${unspoken.join(', ')}`);
  // The ceiling the canDo names has to be sayable too, or "count to a hundred"
  // stops at ninety-nine.
  ok(spoken.has('cent'), 'cent is never said out loud, so the lesson does not reach a hundred');
});

test('the arithmetic is taught, not merely asserted', { skip: noSeed }, () => {
  // The lesson's claim is that above sixty-nine French says the sum out loud.
  // A later edit that trimmed the reference tables back to two-column word
  // lists would leave every other test green, so the number of numbers shown
  // WITH their decomposition is pinned with a floor.
  const sums = L!.sections
    .filter((s): s is Extract<Lesson['sections'][number], { type: 'tapTable' }> => s.type === 'tapTable')
    .filter((s) => s.cols.includes('The sum'));
  ok(sums.length >= 3, `the seventies, eighties and nineties each want their own table, got ${sums.length}`);

  const ix = sums[0].cols.indexOf('The sum');
  const decomposed = sums.flatMap((s) => s.rows).filter((r) => /[+x]/.test(r.cells[ix]));
  // Twenty-one today, seven per table. The floor is fifteen so that a row can
  // be reworked without editing the test, and a table cut to a word list
  // cannot pass.
  ok(
    decomposed.length >= 15,
    `only ${decomposed.length} numbers are shown with their sum; the tables have been flattened`,
  );
  for (const r of decomposed) {
    ok(r.say, `row "${r.cells[0]}" does not speak`);
    ok(r.detail?.body, `row "${r.cells[0]}" has no detail explaining what it is made of`);
  }

  // The three that are genuinely sums must each be shown as one, or the lesson
  // has named the problem without ever demonstrating it.
  const shown = new Set(sums.flatMap((s) => s.rows).map((r) => r.cells[0]));
  for (const n of ['soixante-dix', 'quatre-vingts', 'quatre-vingt-dix']) {
    ok(shown.has(n), `"${n}" is never decomposed anywhere`);
  }
});

test('recognition speed is tested, not construction', { skip: noSeed }, () => {
  // Anybody can build quatre-vingt-douze given ten seconds, and ten seconds is
  // not what a phone number gives you. So at least one mission has to put the
  // number in front of the learner with nothing on screen to reverse-engineer
  // it from, which is what `questionsInModal` on a listening section does: the
  // line plays, the question opens over it.
  const timed = L!.sections.filter(
    (s) => s.type === 'listening' && (s as { questionsInModal?: boolean }).questionsInModal,
  );
  ok(timed.length >= 1, 'no listening mission opens its questions over the audio, so nothing tests speed');

  // And the exam's listening share has to be real rather than a gesture. sons.08,
  // also an ear lesson, ran 14 of 40.
  const qs = quizQuestions(theQuiz());
  const listen = qs.filter((q) => q.format === 'listenChoose').length;
  ok(
    listen >= qs.length / 4,
    `only ${listen}/${qs.length} exam questions are listenChoose on a lesson whose whole claim is catching a number at speed`,
  );
});

test('the et rule, the S on quatre-vingts and the returning teens are each taught and tested', { skip: noSeed }, () => {
  // Everything else in this range is memorisation. These three are learnable,
  // and a later edit that drops one would leave a lesson that still passes
  // every structural check and teaches two thirds of what it claims.
  const all = strings(L).join('\n');

  // Taught: each has a glossary term, at least one mission that surfaces it,
  // and a roundup line.
  const roundup = L!.sections.find(
    (s): s is Extract<Lesson['sections'][number], { type: 'roundup' }> => s.type === 'roundup',
  )!;
  const points = roundup.points.join('\n');

  for (const [term, chip, inRoundup] of [
    ['the et rule', 'etRule', /\bet\b/],
    ['the S on quatre-vingts', 'theS', /\bS\b/],
    ['the returning teens', 'teensBack', /onze|dix-neuf/i],
  ] as const) {
    ok(L!.terms?.[chip], `${term} has no glossary entry ("${chip}")`);
    ok(
      L!.sections.some((s) => ((s as { terms?: string[] }).terms ?? []).includes(chip)),
      `${term} is defined but no mission surfaces it`,
    );
    ok(inRoundup.test(points), `${term} is not in the roundup`);
  }

  // The two written rules are WRITTEN errors, so they are tested in writing
  // rather than by ear. Free text is compared through fold(), which strips
  // hyphens and whitespace, so a hyphen alone cannot be graded; what can be
  // graded is the presence of the S and of the word et, and both differ by
  // real letters.
  const qs = quizQuestions(theQuiz());
  const written = qs.filter((q) => q.format === 'typeIn' || q.format === 'errorSpot' || q.format === 'mcq');
  ok(
    written.some((q) => /\bet\b/.test((q.opts ?? []).join(' ') + (q.accept ?? []).join(' ') + q.q)),
    'the et rule is never tested in writing',
  );
  ok(
    written.some((q) => /quatre-vingts\b/.test((q.opts ?? []).join(' ') + (q.accept ?? []).join(' ') + q.q)),
    'the S on quatre-vingts is never tested in writing',
  );
  ok(/quatre-vingt-onze|soixante et onze/.test(all), 'the teens coming back is never shown on a real number');
});

test('the regional variants are named once and never drilled', { skip: noSeed }, () => {
  // septante, huitante, octante and nonante are standard in Belgium and
  // Switzerland and exist nowhere in the corpus (verified: 0 of 6,918 items). A
  // learner who meets one in the wild and has never been told will assume they
  // misheard. So they are mentioned, and they are not allowed to dilute the
  // France-standard forms the canDo names.
  const REGIONAL = /\b(septante|huitante|octante|nonante)\b/i;
  const mentions = strings(L).filter((s) => REGIONAL.test(s));
  ok(mentions.length > 0, 'the regional forms are never mentioned, so a learner meets one with no warning');

  // Not drilled: absent from every production surface.
  const drilled: string[] = [];
  for (const id of L!.deckTranche?.flat() ?? []) {
    const it = ITEMS.get(id);
    if (it && REGIONAL.test(it.fr)) drilled.push(`tranche releases ${id}`);
  }
  for (const sec of L!.sections) {
    if (sec.type === 'flashcards' || sec.type === 'reviewDeck') {
      for (const c of sec.cards) if (REGIONAL.test(c.back)) drilled.push(`${sec.type} card "${c.back}"`);
    }
    if (sec.type === 'vocabThemes') {
      for (const t of sec.themes) for (const c of t.cards) if (REGIONAL.test(c.fr)) drilled.push(`vocab card "${c.fr}"`);
    }
  }
  for (const q of quizQuestions(theQuiz())) {
    const produced = [...(q.accept ?? []), q.answer ?? '', q.target ?? ''];
    for (const p of produced) if (REGIONAL.test(p)) drilled.push(`quiz answer "${p}"`);
  }
  strictEqual(drilled.length, 0, `regional forms are being drilled: ${drilled.join(', ')}`);
});

test('nothing of a1.28 is taught, though the ceiling itself is', { skip: noSeed }, () => {
  // The split this lesson has to hold. cent as a MULTIPLIER (deux cents, trois
  // cent trente), mille and million belong to a1.28, which declares
  // prereqUnitIds: ["a1.27"] and is waiting on this one. They may appear inside
  // a passage or a heard line, because the corpus is full of them and a hard
  // ban would force stilted French. They may not appear anywhere the learner is
  // asked to produce them.
  //
  // Written against production surfaces specifically. A blanket scan over every
  // string would fire on legitimate context and get deleted.
  const offenders: string[] = [];

  for (const id of L!.deckTranche?.flat() ?? []) {
    const it = ITEMS.get(id);
    if (it && L4_MATERIAL.test(it.fr)) offenders.push(`tranche releases ${id} "${it.fr}"`);
  }
  for (const sec of L!.sections) {
    if (sec.type === 'flashcards' || sec.type === 'reviewDeck') {
      for (const c of sec.cards) if (L4_MATERIAL.test(c.back)) offenders.push(`${sec.type} card "${c.back}"`);
    }
    if (sec.type === 'vocabThemes') {
      for (const t of sec.themes) for (const c of t.cards) if (L4_MATERIAL.test(c.fr)) offenders.push(`vocab card "${c.fr}"`);
    }
    if (sec.type === 'dictation' || sec.type === 'practice') {
      for (const id of sec.itemIds) {
        const it = ITEMS.get(id);
        if (it && L4_MATERIAL.test(it.fr)) offenders.push(`${sec.type} names ${id} "${it.fr}"`);
      }
    }
  }
  for (const q of quizQuestions(theQuiz())) {
    const produced = [
      ...(q.format === 'typeIn' || q.format === 'errorSpot' ? [...(q.accept ?? []), q.answer ?? ''] : []),
      ...(q.format === 'speak' ? [q.target ?? ''] : []),
    ];
    for (const p of produced) if (L4_MATERIAL.test(p)) offenders.push(`quiz answer "${p}"`);
  }
  strictEqual(offenders.length, 0, `these teach a1.28's material:\n  ${offenders.join('\n  ')}`);

  // The inverse, so this is a boundary and not a ban. The canDo says "count to
  // a hundred", so cent standing alone has to be reachable: a lesson that fled
  // the word entirely would stop at ninety-nine and quietly under-deliver.
  const taughtFr = new Set(
    (L!.deckTranche ?? []).flat().map((id) => ITEMS.get(id)?.fr.toLowerCase()),
  );
  ok(taughtFr.has('cent'), 'cent is never released, so this lesson does not actually reach a hundred');
});

test('every inlined respelling closes its nasals with the superscript', { skip: noSeed }, () => {
  // 71 of the 182 respelled items in the nombres theme break the house
  // convention, 36 of them inside this lesson's own range: quatre-vingts is
  // stored as kah-truh-VAN, cent as SAHN, cinquante as san-KAHNT. Referencing
  // one by id is safe, because the respelling resolves at render time and never
  // enters the section. Pasting one into a card is not.
  //
  // The density validator only sees objects carrying a literal `respell` key,
  // and a cardDeck card, a vocabThemes card and a tapTable cell all carry the
  // respelling somewhere else, so this walks the surfaces that actually have
  // one. The CHECK is imported rather than restated.
  const pairs: [string, string][] = [];
  const walk = (n: unknown) => {
    if (Array.isArray(n)) return n.forEach(walk);
    if (!n || typeof n !== 'object') return;
    const o = n as Record<string, unknown>;
    if (typeof o.fr === 'string' && typeof o.sub === 'string') pairs.push([o.fr, o.sub]);
    Object.values(o).forEach(walk);
  };
  walk(L!.sections);
  for (const s of L!.sections) {
    if (s.type !== 'tapTable') continue;
    const ix = s.cols.indexOf('Sounds like');
    if (ix < 0) continue;
    for (const r of s.rows) pairs.push([r.cells[0], r.cells[ix]]);
  }
  ok(pairs.length >= 40, `only ${pairs.length} respellings are inlined; the decks have lost their pronunciation lines`);
  const bad = pairs.filter(([fr, re]) => hasPlainNasal(re) || hasPlainNasalFor(fr, re));
  strictEqual(bad.length, 0, `respellings closing a nasal with a plain n or m:\n  ${bad.map(([f, r]) => `"${f}" as "${r}"`).join('\n  ')}`);
});

test('the exam asks the learner to produce, not only to recognise', { skip: noSeed }, () => {
  const qs = quizQuestions(theQuiz());
  ok(qs.length >= 12, `a lesson this size wants a real exam, got ${qs.length}`);
  ok((theQuiz().rounds?.length ?? 0) >= 3, 'the exam is round-based so remediation can target a round');

  const mcq = qs.filter((q) => (q.format ?? 'mcq') === 'mcq').length;
  ok(mcq <= qs.length / 2, `${mcq}/${qs.length} questions are mcq; production formats have been squeezed out`);

  for (const q of qs) {
    if (q.format !== 'listenChoose') continue;
    ok(q.audio?.clip, `"${q.q}" is a listening question with nothing to play`);
    // listenChoose falls back to SPEAKING the option text, so English options
    // would be read aloud in a French voice.
    ok(!(q.opts ?? []).some((o) => /\b(the|it|is|of|and)\b/i.test(o)), `"${q.q}" offers English options to a French voice`);
  }

  for (const q of qs) {
    ok(typeof q.why === 'string' && q.why.length > 0, `"${q.q}" explains its answer`);
    ok(q.ref, `"${q.q}" names the section that taught it`);
    if (Array.isArray(q.opts) && q.opts.length) {
      strictEqual(new Set(q.opts).size, q.opts.length, `options distinct for "${q.q}"`);
      ok(q.correct != null && q.correct >= 0 && q.correct < q.opts.length, `correct in range for "${q.q}"`);
    }
    // Free-text answers are compared through fold(), which strips accents,
    // case, punctuation and whitespace, so an accept entry differing only by
    // those is redundant rather than helpful. What matters is that the answer
    // shown is one the grader would take.
    if (q.format === 'typeIn' || q.format === 'errorSpot') {
      const accept = q.accept ?? [];
      ok(accept.length > 0, `"${q.q}" is free-text but accepts nothing`);
      ok(q.answer && accept.includes(q.answer), `"${q.q}" shows an answer it would not accept`);
    }
    if (q.format === 'speak') ok(q.target, `"${q.q}" is a speak question with no target`);
  }
});

test('every authored quiz question is reachable by a learner', { skip: noSeed }, () => {
  // lessonPager.logic.ts strips every quiz section and appends exactly ONE quiz
  // page, resolved with sections.find(s => s.type === 'quiz'). A second quiz
  // section is a set of questions no learner can ever reach; a1.01 shipped
  // twelve of them.
  const quizzes = L!.sections.filter(
    (s): s is Extract<Lesson['sections'][number], { type: 'quiz' }> => s.type === 'quiz',
  );
  strictEqual(quizzes.length, 1, 'exactly one quiz section');
  const authored = quizzes.flatMap((q) => quizQuestions(q)).length;
  const reachable = quizQuestions(quizzes[0]).length;
  strictEqual(reachable, authored, `${authored - reachable} authored quiz question(s) are unreachable`);
});

test('every quiz ref points at a section that exists', { skip: noSeed }, () => {
  const ids = sectionIds();
  for (const q of quizQuestions(theQuiz())) {
    if (q.ref) ok(ids.includes(q.ref), `question "${q.q}" refs "${q.ref}", which is not a section here`);
  }
});

test('every round targets a trigger that is authored, and its drill exists', { skip: noSeed }, () => {
  const triggers = new Map((L!.errorTriggers ?? []).map((t) => [t.id, t]));
  const drills = new Set((L!.drills ?? []).map((d) => d.id));
  ok(triggers.size > 0, 'the lesson authors error triggers');
  for (const r of theQuiz().rounds ?? []) {
    ok((r.targets ?? []).length > 0, `round "${r.id}" targets nothing, so a failed round fires no drill`);
    for (const t of r.targets ?? []) {
      const trig = triggers.get(t);
      ok(trig, `round "${r.id}" targets "${t}", which is not an authored trigger`);
      ok(drills.has(trig!.drill), `trigger "${t}" names drill "${trig!.drill}", which does not exist`);
      if (trig!.retest) ok(drills.has(trig!.retest), `trigger "${t}" names retest "${trig!.retest}", which does not exist`);
    }
  }
  // drillForRound fires the drill of the FIRST target only and stops, so every
  // authored drill has to be reachable from some round or it is dead weight.
  const fired = new Set(
    (theQuiz().rounds ?? [])
      .map((r) => triggers.get((r.targets ?? [])[0] ?? ''))
      .filter(Boolean)
      .flatMap((t) => [t!.drill, t!.retest].filter(Boolean) as string[]),
  );
  const orphans = [...drills].filter((d) => !fired.has(d));
  strictEqual(orphans.length, 0, `drills no round can fire: ${orphans.join(', ')}`);
});

test('every drill that names corpus items names ones this lesson teaches', { skip: noSeed }, () => {
  // A drill scores against the corpus, so a display string where an id belongs
  // resolves to nothing and the drill renders empty at the exact moment the
  // learner needed it.
  for (const d of L!.drills ?? []) {
    for (const id of d.items ?? []) {
      ok(ITEMS.has(id), `drill "${d.id}" names ${id}, which is not in the corpus`);
      ok(L!.itemIds.includes(id), `drill "${d.id}" names ${id}, which this lesson never teaches`);
    }
  }
});

test('tranches release only items the lesson teaches, once each', { skip: noSeed }, () => {
  const tranches = L!.deckTranche ?? [];
  ok(tranches.length > 0, 'the SRS release schedule is authored');
  const declared = new Set(L!.itemIds);
  for (const [i, t] of tranches.entries()) {
    for (const id of t) ok(declared.has(id), `tranche ${i} releases ${id}, which the lesson never teaches`);
  }
  const all = tranches.flat();
  const dupes = all.filter((x, i) => all.indexOf(x) !== i);
  strictEqual(dupes.length, 0, `an item is released twice: ${[...new Set(dupes)].join(', ')}`);
  const released = new Set(all);
  const stranded = L!.itemIds.filter((id) => !released.has(id));
  strictEqual(stranded.length, 0, `taught but never released to review: ${stranded.join(', ')}`);
});

test('no dead corpus entry, and no two non-sentence items share an fr in a theme', { skip: noSeed }, () => {
  const dead = L!.itemIds.filter((id) => !ITEMS.has(id));
  strictEqual(dead.length, 0, `lesson declares items absent from the corpus: ${dead.join(', ')}`);
  // The flashcard hub keys decks on `fr` within a theme, so a duplicate serves
  // the same card twice and takes two SRS ratings for one word. Sentences are
  // exempt: they are keyed differently and repeat legally.
  const seen = new Map<string, string>();
  for (const id of L!.itemIds) {
    const it = ITEMS.get(id)!;
    if (it.kind === 'sentence') continue;
    const key = `${it.theme}::${it.fr.trim().toLowerCase()}`;
    const prior = seen.get(key);
    ok(!prior, `${id} and ${prior} both teach "${it.fr}" in theme ${it.theme}`);
    seen.set(key, id);
  }
});

test('practice and dictation drill only resolvable, correctly tagged corpus items', { skip: noSeed }, () => {
  for (const s of L!.sections) {
    if (s.type !== 'practice' && s.type !== 'dictation') continue;
    ok(s.itemIds.length > 0, `${s.type} "${s.title}" names items`);
    for (const id of s.itemIds) {
      ok(ITEMS.has(id), `${s.type} item ${id} exists`);
      ok(L!.itemIds.includes(id), `${s.type} item ${id} is declared on the lesson`);
    }
    // A dictée whose items cannot be dictated is a dead mission; likewise a
    // speak mission whose items have no voice drill renders cards the mic
    // cannot score, which reads as broken rather than as untagged.
    if (s.type === 'dictation') {
      for (const id of s.itemIds) ok(ITEMS.get(id)!.drills.includes('dictation'), `${id} carries the dictation drill`);
    }
    if (s.type === 'practice' && s.skill === 'speak') {
      for (const id of s.itemIds) ok(ITEMS.get(id)!.drills.includes('voiceflash'), `${id} carries the voiceflash drill`);
    }
  }
});

test('the dictée assembles words rather than spelling letters, and tests the lesson', { skip: noSeed }, () => {
  // Asked of the REAL module the renderer uses, not of a restated threshold.
  // No word or phrase item in this theme carries `dictation` (all 202 that do
  // are sentences), so a dictée on bare number words would fail the contract;
  // these are sentences and must land in word mode.
  const d = L!.sections.find(
    (s): s is Extract<Lesson['sections'][number], { type: 'dictation' }> => s.type === 'dictation',
  )!;
  ok(d.itemIds.length >= 3, 'the dictée is worth the mission');
  for (const id of d.itemIds) {
    const fr = ITEMS.get(id)!.fr;
    strictEqual(dicteeMode(fr), 'words', `"${fr}" would spell letter by letter`);
    ok(dicteeWords(fr).length >= 4, `"${fr}" is too short to be worth assembling`);
    ok(wordDecoys(fr).length > 0, `"${fr}" gets no decoy tiles, so "use everything" solves it`);
  }
  // Each sentence carries one of the lesson's claims, which is what makes the
  // mission a test of the teaching rather than of spelling in general.
  const frs = d.itemIds.map((id) => ITEMS.get(id)!.fr);
  ok(frs.some((f) => /quatre-vingts\b/i.test(f)), 'no sentence carries the S on quatre-vingts');
  ok(frs.some((f) => /quatre-vingt-un\b/i.test(f)), 'no sentence carries eighty-one, where the S and the et both go');
  ok(frs.some((f) => /soixante et onze/i.test(f)), 'no sentence carries the et at seventy-one');
  ok(frs.some((f) => /numéro/i.test(f)), 'no sentence is a phone number, which is this range\u2019s whole payoff');
});

test('every reading glossary entry underlines a word that is really there', { skip: noSeed }, () => {
  // Asks the REAL matcher rather than restating it. gloss.logic.test.ts runs the
  // same check over every lesson; this keeps it pinned for this one.
  for (const s of L!.sections) {
    if (s.type !== 'reading') continue;
    ok(s.glossary?.length, 'the reading mission carries a glossary');
    ok(s.questionsInModal && s.questions?.length, 'and the flag that makes anything render it');
    const keys = new Set((s.glossary ?? []).flatMap((g) => glossKeys(g.word)));
    const hit = new Set(segmentSentence(s.text, keys).filter((x) => x.key).map((x) => x.key!));
    for (const g of s.glossary ?? []) {
      ok(glossKeys(g.word).some((k) => hit.has(k)), `glossary entry "${g.word}" underlines nothing in the passage`);
    }
  }
});

test('the reading passage keeps English outside the guillemets and French inside', { skip: noSeed }, () => {
  // Paul's A1 rule, 2026-08-04: a line that does not open with « is context, and
  // context is instruction. The learner's reading effort belongs on the exchange
  // rather than on decoding the stage directions.
  const sec = L!.sections.find(
    (s): s is Extract<Lesson['sections'][number], { type: 'reading' }> => s.type === 'reading',
  )!;
  const lines = sec.text.split('\n').map((l) => l.trim()).filter(Boolean);
  const quoted = lines.filter((l) => l.startsWith('«'));
  ok(quoted.length >= 4, 'the passage holds a real French exchange');
  for (const line of lines) {
    if (line.startsWith('«')) continue;
    // Proper nouns keep their accents, so this looks for French FUNCTION words,
    // which is what actually makes a line French.
    ok(
      !/\b(est|elle|dans|une|des|les|avec|pour|sur|chez|puis|il|la|le|du)\b/i.test(line),
      `an unquoted line is still in French: "${line}"`,
    );
  }
});

test('every mission carries its French subtitle and nearly all narrate', { skip: noSeed }, () => {
  const missing = L!.sections.filter((s) => !s.frSub);
  strictEqual(missing.length, 0, `sections without frSub: ${missing.map((s) => s.type).join(', ')}`);
  const content = L!.sections.filter((s) => s.type !== 'quiz');
  const spoken = content.filter((s) => (narrationOf(s)?.text.length ?? 0) > 0);
  ok(spoken.length >= content.length - 2, `${spoken.length}/${content.length} missions narrated`);
});

test('every glossary term is surfaced somewhere, and no card is overloaded', { skip: noSeed }, () => {
  const defined = Object.keys(L!.terms ?? {});
  ok(defined.length >= 5, `a lesson this size wants a real glossary, got ${defined.length}`);
  const used = new Set(L!.sections.flatMap((s) => (s as { terms?: string[] }).terms ?? []));
  for (const t of defined) ok(used.has(t), `term "${t}" is defined but no section surfaces it`);
  for (const u of used) ok(defined.includes(u), `a section chips "${u}", which is not a defined term`);
  // The renderer shows three chips and collapses the rest, so a fourth is
  // authored and invisible.
  const over = L!.sections.filter((s) => ((s as { terms?: string[] }).terms ?? []).length > 3);
  strictEqual(over.length, 0, `sections with more than 3 term chips: ${over.map((s) => (s as { id?: string }).id).join(', ')}`);
  // Every term's worked examples resolve, or the glossary card shows an empty
  // row where the demonstration should be.
  for (const [key, t] of Object.entries(L!.terms ?? {})) {
    for (const e of t.examples ?? []) {
      ok(ITEMS.has(e.itemId), `term "${key}" cites ${e.itemId}, which is not in the corpus`);
    }
  }
});

test('the lesson does not re-teach a1.02, which is its prerequisite', { skip: noSeed }, () => {
  // a1.27 declares prereqUnitIds: ["a1.02"], which entitles it to assume one to
  // twenty. Using those numbers constantly is unavoidable (every number here
  // ends in one). Teaching them is taking a1.02's material and making both
  // lessons worse, so nothing below twenty-one may be released, flashcarded or
  // drilled.
  const BELOW = new Set([
    'un', 'une', 'deux', 'trois', 'quatre', 'cinq', 'six', 'sept', 'huit', 'neuf', 'dix',
    'onze', 'douze', 'treize', 'quatorze', 'quinze', 'seize', 'dix-sept', 'dix-huit', 'dix-neuf', 'vingt',
  ]);
  const offenders: string[] = [];
  for (const id of L!.deckTranche?.flat() ?? []) {
    const it = ITEMS.get(id);
    if (it && BELOW.has(it.fr.toLowerCase())) offenders.push(`tranche releases ${id} "${it.fr}"`);
  }
  for (const sec of L!.sections) {
    if (sec.type === 'flashcards' || sec.type === 'reviewDeck') {
      for (const c of sec.cards) if (BELOW.has(c.back.toLowerCase())) offenders.push(`${sec.type} card "${c.back}"`);
    }
    if (sec.type === 'practice') {
      for (const id of sec.itemIds) {
        const it = ITEMS.get(id);
        if (it && BELOW.has(it.fr.toLowerCase())) offenders.push(`${sec.skill} practice drills "${it.fr}"`);
      }
    }
  }
  strictEqual(offenders.length, 0, `a1.02's material is being taught again:\n  ${offenders.join('\n  ')}`);
});

test('the progress card counts the journey it sits in', { skip: noSeed }, () => {
  // These four figures used to be hand-typed display strings elsewhere in the
  // app, and a display string is validated against nothing. They are derived at
  // authoring time; this asserts the shipped copy agrees with the lesson around
  // it rather than asserting the numbers themselves.
  const ix = L!.sections.findIndex((s) => (s as { id?: string }).id === 's26-progress');
  ok(ix > 0, 'the progress card is in the journey');
  const card = L!.sections[ix] as Extract<Lesson['sections'][number], { type: 'progressCheck' }>;
  const stat = (k: string) => card.stats?.find((x) => x.k === k)?.v;
  strictEqual(stat('Numbers met'), String(L!.itemIds.length));
  strictEqual(stat('Missions done'), `${ix} of ${L!.sections.length}`);
  strictEqual(stat('Exam rounds ahead'), String(theQuiz().rounds?.length ?? 0));
  strictEqual(stat('Pass mark'), `${theQuiz().passMark}%`);
  // And the prose must not restate them. Saying a number twice on one card is
  // two chances to be wrong.
  ok(!/\b\d+\b/.test(card.body ?? ''), `the progress body restates a figure: ${card.body}`);
});

test('difficulty ramps: the first check comes after the teaching, not before', { skip: noSeed }, () => {
  const types = L!.sections.map((s) => s.type);
  const firstCheck = L!.sections.findIndex(
    (s) => s.type === 'quiz' || ((s as { questions?: unknown[] }).questions?.length ?? 0) > 0,
  );
  const firstTeaching = Math.min(
    ...['cardDeck', 'tapTable', 'vocabThemes'].map((t) => types.indexOf(t)).filter((i) => i >= 0),
  );
  ok(firstCheck > firstTeaching, 'the learner is taught before being tested');
  const speak = L!.sections.findIndex((s) => s.type === 'practice' && s.skill === 'speak');
  ok(speak > firstCheck, 'speaking is asked for only after an early written win');
});

test('the audio brief names the contrasts that must be one take', { skip: noSeed }, () => {
  // A contrast here is two numbers differing in one syllable: soixante-douze
  // against soixante-seize, quatre-vingt-deux against quatre-vingt-douze.
  // Recorded across two takes they are not comparable and the learner hears the
  // difference between the performances. That instruction has to survive in the
  // brief, because it is invisible once the clips are delivered.
  const recorded = L!.audio?.recorded ?? [];
  ok(recorded.length > 0, 'the lesson asks the studio for recordings');
  const contrast = recorded.filter((r) => /one take/i.test(r.desc));
  ok(contrast.length >= 2, 'the one-take instruction is missing from the contrast briefs');
  // Every recordingId a section names must be one the lesson actually requests.
  const known = new Set(recorded.map((r) => r.id));
  const named = strings(L!.sections).filter((s) => s.startsWith('rec-'));
  for (const id of named) ok(known.has(id), `a section names recording "${id}", which the lesson never asks for`);
  // And nothing authored `autoplay`, which is declared in schema.ts and
  // implemented in no component to this day.
  ok(!JSON.stringify(L).includes('"autoplay"'), 'autoplay is authored somewhere and nothing renders it');
});

test('the authored copy carries no em dash and no honest/honesty (house style)', { skip: noSeed }, () => {
  const all = strings(L);
  const emDash = all.filter((s) => s.includes('—'));
  strictEqual(emDash.length, 0, `em dash found in: ${emDash.slice(0, 3).join(' | ')}`);
  const honest = all.filter((s) => /honest/i.test(s));
  strictEqual(honest.length, 0, `honest/honesty found in: ${honest.slice(0, 3).join(' | ')}`);
});

// ── Source-derived. These read the authored files in ealch-admin. ───────────

test('the reframe appears verbatim as often as it was authored', { skip: noSrc || noSeed }, () => {
  const inSource = strings(SRC).filter((s) => s.includes(SRC_REFRAME)).length;
  const inSeed = strings(L).filter((s) => s.includes(SRC_REFRAME)).length;
  // Derived, not hardcoded: the seed must carry the same number the source
  // does. A paraphrase in either copy moves one of these and not the other.
  strictEqual(inSeed, inSource, `reframe appears ${inSeed}x in the seed but ${inSource}x in the source`);
  // The density validator's own floor, restated so the intent is visible here.
  const sections = L!.sections.filter((s) => strings(s).some((x) => x.includes(SRC_REFRAME)));
  ok(sections.length >= 3, `the reframe must carry at least 3 sections, found ${sections.length}`);
});

test('the eighty ids the source names are the eighty numbers in order', { skip: noSrc || noSeed }, () => {
  // The id lists in nombres21-ids.ts are order-bearing and scattered across four
  // separate corpus runs, so a transposed pair would teach a learner that
  // soixante-treize is seventy-four and nothing else would notice.
  strictEqual(SRC_RANGE.length, TWENTYONE_TO_HUNDRED.length, 'the source names a different number of headwords');
  const frs = SRC_RANGE.map((id) => ITEMS.get(id)?.fr.toLowerCase());
  strictEqual(frs.join(','), TWENTYONE_TO_HUNDRED.join(','), 'the source range is not 21 to 100 in order');
  const hard = SRC_HARD.map((id) => ITEMS.get(id)?.fr.toLowerCase());
  strictEqual(hard.join(','), SEVENTY_TO_NINETYNINE.join(','), 'the hard range is not 70 to 99 in order');
});

test('the items this lesson authored are in the seed and nowhere twice', { skip: noSrc || noSeed }, () => {
  for (const id of SRC_NEW_IDS) {
    const it = ITEMS.get(id);
    ok(it, `authored item ${id} never reached the seed`);
    ok(it!.drills.includes('dictation'), `${id} is authored for the dictée and carries no dictation drill`);
    const twins = seed.items.filter((x) => x.theme === it!.theme && x.fr === it!.fr);
    strictEqual(twins.length, 1, `"${it!.fr}" is in the nombres theme ${twins.length} times`);
  }
});

test('once published, the seed copy matches what was authored', { skip: noSrc || noSeed }, () => {
  // Before the batch runs the seed is behind, and this is the test that says so.
  // A seed copy that has fallen behind the authored source is the failure mode
  // that shipped a1.01.l1 with twelve unreachable questions.
  strictEqual(L!.version, SRC!.version, `seed is v${L!.version}, source is v${SRC!.version}`);
  strictEqual(L!.sections.length, SRC!.sections.length, 'section count drifted');
  strictEqual(L!.itemIds.length, SRC!.itemIds.length, 'itemId count drifted');
  strictEqual((L!.acts ?? []).length, (SRC!.acts ?? []).length, 'act count drifted');
  strictEqual((L!.drills ?? []).length, (SRC!.drills ?? []).length, 'drill count drifted');
  strictEqual((L!.sheets ?? []).length, (SRC!.sheets ?? []).length, 'sheet count drifted');
  strictEqual(
    sectionIds().join(','),
    SRC!.sections.map((s) => (s as { id?: string }).id).join(','),
    'the mission spine drifted between source and seed',
  );
  const srcQuiz = SRC!.sections.find(
    (s): s is Extract<Lesson['sections'][number], { type: 'quiz' }> => s.type === 'quiz',
  )!;
  strictEqual(quizQuestions(theQuiz()).length, quizQuestions(srcQuiz).length, 'quiz question count drifted');
  strictEqual(
    (L!.deckTranche ?? []).flat().length,
    (SRC!.deckTranche ?? []).flat().length,
    'the SRS release schedule drifted',
  );
});
