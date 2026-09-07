// Guards a1.28.l1 "Les grands nombres", the last of the four numbers lessons.
//
// Referential integrity across the whole corpus is already proven by
// seed.backcompat.test.ts, and the cross-lesson rules by lesson-contract.test.ts.
// This file pins the intent specific to THIS lesson, so a later edit that drops
// one of the three multiplier rules, quietly turns it into a prices lesson,
// lets `milles` into the corpus, or pastes a corpus respelling into a card goes
// red here rather than in front of a learner.
//
// Two sources are checked, not one. The SEED is what a learner receives. The
// AUTHORED SOURCE in ealch-admin is what the next author edits. Both are read
// here and the parity test at the bottom fails when they drift, which is the
// failure mode that has twice cost this project real work.
//
// Counts are DERIVED from the authored source wherever a count is asserted. A
// hardcoded number fails on itself the first time content legitimately changes,
// and the fix is then to edit the test, which is how a test comes to certify a
// bug. Where a floor IS stated (the mcq ceiling, the written-format share, the
// minimum number of inlined respellings) it is a design decision being pinned,
// not a count being restated, and it is documented where it appears.
//
// Nothing here reimplements app logic. The dictée mode, the decoy bank, the
// glossary matcher, the answer folder and the nasal-convention check are all
// imported from the modules the renderer and the validator use. An earlier
// version of a1.01's test inlined its own copy of the glossary lookup, which
// made it a second implementation free to drift, and it had copied the version
// that was already broken, so it passed while the feature was dead.
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { ok, strictEqual } from 'node:assert';
import { test } from 'node:test';
import { narrationOf, quizQuestions, validateLesson, type Lesson } from './schema.ts';
import { hasPlainNasal, hasPlainNasalFor } from './density.logic.ts';
import { glossKeys, segmentSentence } from './gloss.logic.ts';
import { dicteeMode, dicteeWords, wordDecoys } from './dictee.logic.ts';
import { fold, matchesAccept } from './answer.logic.ts';

const here = dirname(fileURLToPath(import.meta.url));
const seed = JSON.parse(readFileSync(resolve(here, 'seed.json'), 'utf8')) as {
  units: { id: string; seq: number; title: string; sub?: string; canDo: string; lessonIds: string[]; themes?: string[]; prereqUnitIds?: string[] }[];
  lessons: Lesson[];
  items: { id: string; kind: string; level: string; theme: string; fr: string; en: string; respell?: string; drills: string[] }[];
};

const L = seed.lessons.find((l) => l.id === 'a1.28.l1');
const ITEMS = new Map(seed.items.map((i) => [i.id, i]));

// The admin repo is a sibling checkout. Skip cleanly when it is absent (the app
// can be built on its own) rather than failing the suite.
let SRC: Lesson | null = null;
let SRC_REFRAME = '';
let SRC_NEW_IDS: string[] = [];
let SRC_LADDER: string[] = [];
let SRC_ANCHOR = '';
let SRC_SPEAK: string[] = [];
try {
  const lesson = await import('../../../ealch-admin/scripts/data/nombres-large-lesson.ts');
  const corpus = await import('../../../ealch-admin/scripts/data/nombres-large-corpus.ts');
  SRC = lesson.NOMBRES_LARGE_LESSON as Lesson;
  SRC_REFRAME = lesson.REFRAME as string;
  SRC_LADDER = lesson.NOMBRES_LARGE_LADDER_IDS as string[];
  SRC_ANCHOR = lesson.NOMBRES_LARGE_CENT_ANCHOR_ID as string;
  SRC_SPEAK = lesson.NOMBRES_LARGE_SPEAK_IDS as string[];
  SRC_NEW_IDS = corpus.NOMBRES_LARGE_NEW_IDS as string[];
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

/** Every authored string with the dotted path it sits at, so an assertion can
 *  say WHERE and not only THAT. */
function pathedStrings(v: unknown, path = '', out: { path: string; s: string }[] = []): { path: string; s: string }[] {
  if (typeof v === 'string') out.push({ path, s: v });
  else if (Array.isArray(v)) v.forEach((x, i) => pathedStrings(x, `${path}[${i}]`, out));
  else if (v && typeof v === 'object') {
    for (const [k, val] of Object.entries(v)) pathedStrings(val, path ? `${path}.${k}` : k, out);
  }
  return out;
}

const sectionIds = () => L!.sections.map((s) => (s as { id?: string }).id).filter(Boolean) as string[];
const section = (id: string) => L!.sections.find((s) => (s as { id?: string }).id === id);

/** What a section actually puts in front of a learner.
 *
 *  Its own authored strings, PLUS the French of every corpus item it names. A
 *  `practice` or `dictation` mission carries no French of its own: its content
 *  is a list of ids and the words arrive from the corpus at render time. Reading
 *  only the authored strings would report the quantities mission as empty of
 *  quantities, which is how a content check comes to fail on content that is
 *  perfectly present. */
const shownBy = (s: unknown): string[] => [
  ...strings(s),
  ...(((s as { itemIds?: string[] }).itemIds ?? []).map((id) => ITEMS.get(id)?.fr ?? '')),
];
const theQuiz = () =>
  L!.sections.find((s): s is Extract<Lesson['sections'][number], { type: 'quiz' }> => s.type === 'quiz')!;

/** The three multiplier rules the canDo turns on, with what proves each one is
 *  still taught and still tested.
 *
 *  This IS a hardcoded list, deliberately and uniquely. It is not a count that
 *  can drift with content, it is the definition of the unit: "Can say prices,
 *  years and large quantities with cent, mille and million". Deriving it from
 *  the lesson would be asking the lesson whether it teaches what it teaches.
 *
 *  `taughtIn` names the section that owns the rule and `chip` the glossary term
 *  that explains it. `inTeaching` and `inExam` are the strings that prove the
 *  rule is actually demonstrated rather than merely mentioned. */
const THREE_RULES = [
  {
    rule: 'the S on cents',
    taughtIn: 's04-cent',
    chip: 'centS',
    inTeaching: /\bdeux cents\b/,
    inExam: /\bcents?\b/,
  },
  {
    rule: 'mille is invariable',
    taughtIn: 's07-mille',
    chip: 'invariable',
    inTeaching: /\bdeux mille\b/,
    inExam: /\bmille\b/,
  },
  {
    rule: 'de after million',
    taughtIn: 's10-million',
    chip: 'nounNumber',
    inTeaching: /millions? d(?:e |’)/,
    inExam: /millions? d(?:e |’)|\bmilliards? d(?:e |’)/,
  },
] as const;

/** The three surfaces the canDo names, and the sections that have to reach
 *  each. This is the assertion that stops the lesson quietly becoming a prices
 *  lesson, which is the easiest of the three to write. */
const THREE_SURFACES = [
  { surface: 'prices', sections: ['s15-prices', 's16-pricehear', 's17-written'], marker: /euros? (?:cinquante|vingt|quatre-vingts)/ },
  { surface: 'years', sections: ['s18-years'], marker: /mille neuf cent|dix-neuf cent|deux mille (?:sept|dix|vingt-six)/ },
  { surface: 'large quantities', sections: ['s11-quantities', 's12-scale'], marker: /milliards?|millions?|mille/ },
] as const;

/** a1.27's material, which this lesson may USE and may not TEACH.
 *
 *  Bare numbers below a hundred. `cent` standing alone is excluded: it is
 *  a1.27's ceiling and this lesson's floor, shown as the anchor the learner
 *  arrives with, and matching it would make the boundary fire on the thing the
 *  boundary is drawn around. */
const BELOW_A_HUNDRED = new Set([
  'un', 'une', 'deux', 'trois', 'quatre', 'cinq', 'six', 'sept', 'huit', 'neuf', 'dix',
  'onze', 'douze', 'treize', 'quatorze', 'quinze', 'seize', 'dix-sept', 'dix-huit', 'dix-neuf',
  'vingt', 'vingt et un', 'trente', 'quarante', 'cinquante', 'soixante', 'soixante-dix',
  'quatre-vingts', 'quatre-vingt-un', 'quatre-vingt-dix', 'quatre-vingt-dix-neuf',
]);

test('a1.28.l1 exists and is well-formed', { skip: noSeed }, () => {
  ok(L, 'a1.28.l1 is present in the seed');
  strictEqual(validateLesson(L!).length, 0);
  strictEqual(L!.unitId, 'a1.28');
  strictEqual(L!.level, 'a1');
});

test('the tag numbers the lesson by where it sits, not by what its id says', { skip: noSeed }, () => {
  // The Den, the unit page and the mission list all derive the lesson number
  // from the unit's `seq` (commit 56c79a7). `tag` is the ONE place that number
  // is authored by hand, so a tag built from the unit id disagrees with every
  // derived surface: a1.27 sits at seq 3, and a tag of 27 put "LEÇON 03" on the
  // unit page and "LEÇON 27" in the header of all 28 missions inside it. Found
  // on a Pixel 6 on 2026-08-05, and a1.28 has the same id/position mismatch.
  const unit = seed.units.find((u) => u.id === L!.unitId)!;
  strictEqual(L!.tag, `A1 · LEÇON ${String(unit.seq).padStart(2, '0')}`);
});

test('the a1.28 unit links the lesson, and its own copy is untouched', { skip: noSeed }, () => {
  const unit = seed.units.find((u) => u.id === 'a1.28');
  ok(unit, 'a1.28 unit exists');
  ok(unit!.lessonIds.includes('a1.28.l1'), 'unit lists the lesson, so the Den can reach it');
  // The Den advertises these before the learner opens anything. Authoring the
  // lesson is not a licence to rewrite the promise it was built against.
  strictEqual(unit!.title, 'Large Numbers');
  strictEqual(unit!.sub, 'Les grands nombres');
  strictEqual(unit!.canDo, 'Can say prices, years and large quantities with cent, mille and million');
  ok(unit!.themes?.includes('nombres'), 'the theme binding survives');
});

test('the declared prerequisite chain is reachable end to end', { skip: noSeed }, () => {
  // a1.28 declares prereqUnitIds: ["a1.27"], which itself declares ["a1.02"].
  // That chain is what entitles this lesson to assume every number to a hundred
  // and teach none of it. The brief said both predecessors might still be empty;
  // both were published when this lesson was built. If either ever empties
  // again, a1.28 is gated behind a lesson nobody can take, and the fix is a
  // recap CARD naming what is assumed, never a recap act that re-teaches
  // a1.27's material.
  const chain = ['a1.28', 'a1.27', 'a1.02'];
  for (const [i, id] of chain.entries()) {
    const unit = seed.units.find((u) => u.id === id);
    ok(unit, `${id} is in the seed`);
    if (i < chain.length - 1) {
      ok(unit!.prereqUnitIds?.includes(chain[i + 1]), `${id} still declares ${chain[i + 1]} as its prerequisite`);
    }
    ok(unit!.lessonIds.length > 0, `${id} has no lessons, so the chain above it assumes ground no learner can cover`);
    ok(
      seed.lessons.some((l) => l.id === unit!.lessonIds[0]),
      `${id} names a lesson that is not in the seed`,
    );
  }
});

test('the overview block is authored', { skip: noSeed }, () => {
  const o = L!.overview;
  ok(o, 'overview is authored');
  ok(o!.titleEn.length > 0 && o!.introFr.length > 0);
  ok(o!.minutes >= 1 && o!.minutes <= 180);
  ok(o!.difficulty >= 1 && o!.difficulty <= 5);
  // Fourth lesson in A1 and the last of the numbers arc. Harder than a1.02 and
  // not the hardest thing in the track.
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
    's01-scene s02-goals s03-three ' +
    's04-cent s05-centcases s06-centhear ' +
    's07-mille s08-milletable s09-millehear ' +
    's10-million s11-quantities s12-scale s13-scalehear s14-traps ' +
    's15-prices s16-pricehear s17-written s18-years s19-words s20-flash s21-speak s22-dictation s23-cases ' +
    's24-scenario s25-reading s26-review s27-progress s28-quiz s29-roundup',
  );
});

test('one act per multiplier rule, which is the shape of the argument', { skip: noSeed }, () => {
  // The three rules ARE the difficulty, so each one owns an act. A later edit
  // that folded cent, mille and million into a single "the multipliers" act
  // would leave every other structural check green and would put three
  // unrelated rules on one stretch of screens with one checkpoint.
  const acts = L!.acts ?? [];
  const byId = new Map(acts.map((a) => [a.id, a]));
  strictEqual(byId.get('act2')!.sections[0], 's04-cent', 'act 2 opens on cent');
  strictEqual(byId.get('act3')!.sections[0], 's07-mille', 'act 3 opens on mille');
  strictEqual(byId.get('act4')!.sections[0], 's10-million', 'act 4 opens on million');
  for (const id of ['act2', 'act3', 'act4']) {
    ok((byId.get(id)?.sections.length ?? 0) >= 3, `${id} is thinner than three missions, so a rule is being waved at`);
  }
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

test('the journey is genuinely multimodal, and weighted towards writing', { skip: noSeed }, () => {
  const types = L!.sections.map((s) => s.type);
  const present = new Set(types);
  for (const t of [
    'scene', 'goals', 'cardDeck', 'tapTable', 'listening', 'practice', 'commonErrors',
    'vocabThemes', 'flashcards', 'dictation', 'scenario', 'useCases', 'reading',
    'reviewDeck', 'progressCheck', 'quiz', 'roundup',
  ] as const) {
    ok(present.has(t), `section type ${t} present`);
  }
  ok(
    L!.sections.some((s) => s.type === 'practice' && s.skill === 'speak'),
    'there is a speak-skill practice mission, because the canDo says "can say"',
  );
  ok(
    L!.sections.some((s) => s.type === 'dictation'),
    'and a dictée, because all three rules are written ones',
  );
});

test('all three multiplier rules are taught, and each one is also tested', { skip: noSeed }, () => {
  // The canDo names cent, mille AND million. A lesson that covers two of the
  // three well and waves at the third has not met the promise the Den made, and
  // every other assertion in this file would still pass. So each rule has to be
  // demonstrated in its own section, defined in the glossary, surfaced as a
  // chip, restated in the roundup, and reachable in the exam.
  const qs = quizQuestions(theQuiz());
  const roundup = L!.sections.find(
    (s): s is Extract<Lesson['sections'][number], { type: 'roundup' }> => s.type === 'roundup',
  )!;
  const points = roundup.points.join('\n');

  for (const r of THREE_RULES) {
    const sec = section(r.taughtIn);
    ok(sec, `"${r.rule}" has no section (${r.taughtIn})`);
    ok(
      shownBy(sec).some((s) => r.inTeaching.test(s)),
      `${r.taughtIn} no longer demonstrates "${r.rule}" on a real form`,
    );
    ok(L!.terms?.[r.chip], `"${r.rule}" has no glossary entry ("${r.chip}")`);
    ok(
      L!.sections.some((s) => ((s as { terms?: string[] }).terms ?? []).includes(r.chip)),
      `"${r.rule}" is defined but no mission surfaces it`,
    );
    ok(r.inExam.test(points), `"${r.rule}" is not in the roundup`);
    // Tested: at least one question whose ANSWER or PROMPT turns on the rule,
    // not merely a question that happens to contain the word.
    const tested = qs.filter((q) => {
      const surfaces = [q.q, ...(q.opts ?? []), ...(q.accept ?? []), q.answer ?? '', q.target ?? '', q.why ?? ''];
      return surfaces.some((s) => r.inExam.test(s));
    });
    ok(tested.length > 0, `"${r.rule}" is taught and never examined`);
  }
});

test('all three surfaces the canDo names reach a mission of their own', { skip: noSeed }, () => {
  // Prices, years and large quantities are three different jobs with three
  // different conventions, not three example sets. The corpus supports prices
  // richly, years thinly and quantities barely, which makes quantities the one
  // an author under time pressure quietly drops. This is the assertion that
  // stops that.
  for (const s of THREE_SURFACES) {
    for (const id of s.sections) {
      const sec = section(id);
      ok(sec, `the ${s.surface} surface names section "${id}", which is not in the lesson`);
      ok(
        shownBy(sec).some((str) => s.marker.test(str)),
        `${id} no longer carries ${s.surface} content`,
      );
    }
    // And the surface reaches the exam, not only the teaching.
    const qs = quizQuestions(theQuiz());
    ok(
      qs.some((q) => s.sections.includes(q.ref ?? '')),
      `no exam question refers back to the ${s.surface} missions, so the surface is taught and never checked`,
    );
  }
});

test('the written conventions became a sheet rather than a drill', { skip: noSeed }, () => {
  // 1 234,56 is reading knowledge: a learner meets it, files it, and comes back
  // to it the first time a price tag surprises them. There is nothing to drill
  // in "the comma is the decimal point", and giving it a practice mission would
  // have made it a thing to rehearse, which it is not. So it lives on a sheet,
  // and the sheet has to exist and be reachable.
  const sheets = new Map((L!.sheets ?? []).map((s) => [s.id, s]));
  ok(sheets.has('sheet.a1.28.written'), 'the written-conventions sheet is gone');
  const referrers = L!.sections.filter((s) => (s as { sheetId?: string }).sheetId === 'sheet.a1.28.written');
  ok(referrers.length >= 1, 'no mission points at the written-conventions sheet, so nothing reaches it');
  const body = strings(sheets.get('sheet.a1.28.written')).join('\n');
  ok(/virgule|comma/i.test(body), 'the sheet no longer explains the decimal comma');
  ok(/1 234,56|1 234/.test(body), 'the sheet no longer shows a space-separated thousand');
  ok(/mille neuf cent|dix-neuf cent/.test(body), 'the sheet no longer carries the two year forms');
  // Every sheetId anywhere on the lesson resolves. lesson-contract checks this
  // across the seed; pinned here because this lesson leans on sheets harder
  // than any other in the chain.
  for (const s of L!.sections) {
    const ref = (s as { sheetId?: string }).sheetId;
    if (ref) ok(sheets.has(ref), `${(s as { id?: string }).id} points at sheet "${ref}", which does not exist`);
  }
});

test('`milles` is staged only where a wrong form belongs, and never asserted', { skip: noSeed }, () => {
  // Two requirements that sound contradictory and are not.
  //
  // The corpus contains zero instances of `milles` across all 448 items in this
  // theme, so it cannot teach the mistake: a learner meets the over-generalised
  // S for the first time in their own handwriting unless a lesson puts it in
  // front of them. The brief requires it to be STAGED.
  //
  // The brief also requires that nothing ASSERT it. So it may appear only in
  // fields whose job is to display a wrong form, and it may never be a correct
  // answer, a taught form, or a corpus entry. A blanket ban would have deleted
  // the staging; a blanket allowance would let it into a flashcard back.
  const ALLOWED = /(errors\[\d+\]\.wrong$|beats\[\d+\]\.wrong\.fr$|beats\[\d+\]\.options\[\d+\]\.fr$|\.q$|\.opts\[\d+\]$)/;
  const offenders = pathedStrings(L)
    .filter((x) => /\bmilles\b/i.test(x.s) && !ALLOWED.test(x.path))
    .map((x) => `${x.path}: "${x.s.slice(0, 60)}"`);
  strictEqual(offenders.length, 0, `"milles" outside the wrong-form fields:\n  ${offenders.join('\n  ')}`);

  // Where it IS allowed, it must still never be the right answer. An option
  // list may offer it as a distractor and must not mark it correct.
  const wrongAsRight: string[] = [];
  const checkOpts = (q: { q?: string; opts?: string[]; correct?: number | string; accept?: string[]; answer?: string; target?: string }) => {
    if (Array.isArray(q.opts) && typeof q.correct === 'number' && /\bmilles\b/i.test(q.opts[q.correct] ?? '')) {
      wrongAsRight.push(`"${q.q}" marks "${q.opts[q.correct]}" correct`);
    }
    for (const a of [...(q.accept ?? []), q.answer ?? '', q.target ?? '']) {
      if (/\bmilles\b/i.test(a)) wrongAsRight.push(`"${q.q}" accepts "${a}"`);
    }
  };
  quizQuestions(theQuiz()).forEach(checkOpts);
  (L!.drills ?? []).forEach(checkOpts);
  strictEqual(wrongAsRight.length, 0, `"milles" is being marked correct:\n  ${wrongAsRight.join('\n  ')}`);

  // And the scene option that carries it must be the one that BREAKS. Staging
  // the error on the working branch would teach it.
  const scene = L!.sections.find(
    (s): s is Extract<Lesson['sections'][number], { type: 'scene' }> => s.type === 'scene',
  )!;
  const choices = scene.beats.filter((b): b is Extract<typeof b, { kind: 'choice' }> => b.kind === 'choice');
  ok(choices.length >= 1, 'the scene has no choice beat, so nothing is committed to');
  for (const c of choices) {
    for (const o of c.options) {
      if (/\bmilles\b/i.test(o.fr)) strictEqual(o.outcome, 'breaks', `the scene offers "${o.fr}" as a working answer`);
    }
  }
  ok(
    choices.some((c) => c.options.some((o) => /\bmilles\b/i.test(o.fr))),
    'the scene never stages the milles error, which the corpus cannot teach for it',
  );
});

test('the nombres corpus is still clean of `milles`', { skip: noSeed }, () => {
  // Checked over the WHOLE theme rather than over this lesson's items, because
  // the failure mode is somebody adding one upstream and this lesson's
  // flashcards then teaching it.
  const dirty = seed.items.filter((i) => i.theme === 'nombres' && /\bmilles\b/i.test(i.fr));
  strictEqual(dirty.length, 0, `corpus entries spelling mille with an S: ${dirty.map((i) => `${i.id} "${i.fr}"`).join(', ')}`);
});

test('every inlined respelling closes its nasals with the superscript', { skip: noSeed }, () => {
  // 71 of the 182 respelled items in the nombres theme break the house
  // convention, including five of the seven multiplier headwords: cent is
  // stored as SAHN, un million as UHN mee-LYOHN, un milliard as UHN mee-LYAR.
  // Referencing one by id is safe, because the respelling resolves at render
  // time and never enters the section. Pasting one into a card is not.
  //
  // The density validator only sees objects carrying a literal `respell` key,
  // and a cardDeck card and a vocabThemes card both carry the respelling in
  // `sub`, so this walks the surfaces that actually have one. The CHECK is
  // imported rather than restated.
  const pairs: [string, string][] = [];
  const walk = (n: unknown) => {
    if (Array.isArray(n)) return n.forEach(walk);
    if (!n || typeof n !== 'object') return;
    const o = n as Record<string, unknown>;
    if (typeof o.fr === 'string' && typeof o.sub === 'string') pairs.push([o.fr, o.sub]);
    if (typeof o.fr === 'string' && typeof o.respell === 'string') pairs.push([o.fr, o.respell]);
    Object.values(o).forEach(walk);
  };
  walk(L!.sections);
  ok(pairs.length >= 30, `only ${pairs.length} respellings are inlined; the decks have lost their pronunciation lines`);
  const bad = pairs.filter(([fr, re]) => hasPlainNasal(re) || hasPlainNasalFor(fr, re));
  strictEqual(bad.length, 0, `respellings closing a nasal with a plain n or m:\n  ${bad.map(([f, r]) => `"${f}" as "${r}"`).join('\n  ')}`);
  // The superscript is the whole convention, so at least some of them use it.
  // Every multiplier in this lesson has a nasal vowel in it except mille.
  ok(pairs.filter(([, re]) => re.includes('ⁿ')).length >= 20, 'the superscript nasal has vanished from the inlined respellings');
});

test('the exam is written-heavy, because all three rules are written', { skip: noSeed }, () => {
  const qs = quizQuestions(theQuiz());
  ok(qs.length >= 12, `a lesson this size wants a real exam, got ${qs.length}`);
  ok((theQuiz().rounds?.length ?? 0) >= 3, 'the exam is round-based so remediation can target a round');

  const mcq = qs.filter((q) => (q.format ?? 'mcq') === 'mcq').length;
  ok(mcq <= qs.length / 2, `${mcq}/${qs.length} questions are mcq; recognition can be passed by elimination`);

  // The S on cents, the invariable mille and the de after million are all
  // invisible in speech and decisive on paper, so the production formats have
  // to carry more weight here than in a1.02 (5/24) or a1.27 (4/28). A quarter
  // is the floor; the lesson ships a third.
  const written = qs.filter((q) => q.format === 'typeIn' || q.format === 'errorSpot').length;
  ok(
    written >= qs.length / 4,
    `only ${written}/${qs.length} questions ask the learner to WRITE, on a lesson whose whole difficulty is spelling`,
  );
});

test('every question explains itself, refers back, and grades what it displays', { skip: noSeed }, () => {
  const ids = sectionIds();
  for (const q of quizQuestions(theQuiz())) {
    ok(typeof q.why === 'string' && q.why.length > 0, `"${q.q}" explains its answer`);
    ok(q.ref, `"${q.q}" names the section that taught it`);
    ok(ids.includes(q.ref!), `question "${q.q}" refs "${q.ref}", which is not a section here`);
    if (Array.isArray(q.opts) && q.opts.length) {
      strictEqual(new Set(q.opts).size, q.opts.length, `options distinct for "${q.q}"`);
      ok(q.correct != null && q.correct >= 0 && q.correct < q.opts.length, `correct in range for "${q.q}"`);
    }
    if (q.format === 'listenChoose') {
      // ListenChooseCard plays `audio.clip` and falls back to SPEAKING the
      // correct option text in a French voice. Every question here names a clip,
      // which is what lets the digit options ("124,80") be options at all.
      ok(q.audio?.clip, `"${q.q}" is a listening question with nothing to play`);
    }
    if (q.format === 'speak') {
      ok(q.target, `"${q.q}" is a speak question with no target`);
      ok(q.ipa, `"${q.q}" is a speak question with no transcription to score against`);
    }
    // Free-text answers are compared through fold(), which strips accents,
    // case, punctuation AND whitespace. Asked of the REAL grader rather than
    // restated, so a change to fold() surfaces here.
    if (q.format === 'typeIn' || q.format === 'errorSpot') {
      const accept = q.accept ?? [];
      ok(accept.length > 0, `"${q.q}" is free-text but accepts nothing`);
      ok(q.answer, `"${q.q}" is free-text and shows no canonical answer`);
      ok(matchesAccept(q.answer!, accept), `"${q.q}" shows an answer the grader would reject`);
    }
  }
});

test('the questions that test an S actually can test one', { skip: noSeed }, () => {
  // fold() strips accents, case, punctuation and ALL whitespace, so `deux cents`
  // and `deuxcents` both pass and word division cannot be graded. What CAN be
  // graded is a letter: `deux cent` and `deux cents` differ by one and fail
  // correctly. This asserts every free-text answer whose point is the S is
  // genuinely distinguishable from the same string without it, so a question
  // that looks like it tests the rule really does.
  for (const q of quizQuestions(theQuiz())) {
    if (q.format !== 'typeIn' && q.format !== 'errorSpot') continue;
    const answer = q.answer ?? '';
    if (!/cents\b|milliards?\b|millions\b/.test(answer)) continue;
    const withoutS = answer.replace(/(cent|milliard|million)s\b/g, '$1');
    ok(
      fold(withoutS) !== fold(answer),
      `"${q.q}" would accept "${withoutS}" as well as "${answer}", so it does not test the S`,
    );
    ok(!matchesAccept(withoutS, q.accept), `"${q.q}" explicitly accepts the form without the S`);
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
    // Every detectOn anchor names a section that exists, or the trigger watches
    // a screen nobody can reach.
    for (const t of r.targets ?? []) {
      for (const anchor of triggers.get(t)!.detectOn) {
        const secId = anchor.split('/')[0];
        ok(sectionIds().includes(secId), `trigger "${t}" watches "${anchor}", and "${secId}" is not a section here`);
      }
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
    if (d.q) ok(d.why, `drill "${d.id}" asks a question and explains nothing`);
  }
});

test('tranches release only items the lesson teaches, once each, and strand only the anchor', { skip: noSeed }, () => {
  const tranches = L!.deckTranche ?? [];
  ok(tranches.length > 0, 'the SRS release schedule is authored');
  const declared = new Set(L!.itemIds);
  for (const [i, t] of tranches.entries()) {
    for (const id of t) ok(declared.has(id), `tranche ${i} releases ${id}, which the lesson never teaches`);
  }
  const all = tranches.flat();
  const dupes = all.filter((x, i) => all.indexOf(x) !== i);
  strictEqual(dupes.length, 0, `an item is released twice: ${[...new Set(dupes)].join(', ')}`);

  // Act 1 releases nothing: the scene teaches an idea and the spellings it shows
  // are taught properly in the two acts after it.
  strictEqual(tranches[0].length, 0, 'act 1 releases cards for material it has not taught yet');

  // Exactly one item is taught and never released, and it is `cent` standing
  // alone. a1.27 already released it, and handing a learner a week-old card as
  // if it were new is worse than not handing it over. Named, not counted, so a
  // second stranded item is a failure and this one is a decision.
  const released = new Set(all);
  const stranded = L!.itemIds.filter((id) => !released.has(id));
  strictEqual(stranded.length, 1, `expected only the a1.27 anchor to be stranded, got: ${stranded.join(', ')}`);
  strictEqual(ITEMS.get(stranded[0])?.fr, 'cent', 'the stranded item is not the cent anchor');
});

test('nothing of a1.27 is taught again, though the ceiling itself is used', { skip: noSeed }, () => {
  // a1.28 declares prereqUnitIds: ["a1.27"], which entitles it to assume every
  // number to a hundred. Using them constantly is unavoidable, because every
  // large number ends in one. Teaching them is taking a1.27's material and
  // making both lessons worse, so no bare sub-hundred number may be released,
  // flashcarded or drilled.
  //
  // Written against production surfaces specifically. A blanket scan over every
  // string would fire on legitimate context and get deleted.
  const offenders: string[] = [];
  for (const id of L!.deckTranche?.flat() ?? []) {
    const it = ITEMS.get(id);
    if (it && BELOW_A_HUNDRED.has(it.fr.toLowerCase())) offenders.push(`tranche releases ${id} "${it.fr}"`);
  }
  for (const sec of L!.sections) {
    if (sec.type === 'flashcards' || sec.type === 'reviewDeck') {
      for (const c of sec.cards) if (BELOW_A_HUNDRED.has(c.back.toLowerCase())) offenders.push(`${sec.type} card "${c.back}"`);
    }
    if (sec.type === 'vocabThemes') {
      for (const t of sec.themes) for (const c of t.cards) if (BELOW_A_HUNDRED.has(c.fr.toLowerCase())) offenders.push(`vocab card "${c.fr}"`);
    }
  }
  for (const q of quizQuestions(theQuiz())) {
    const produced = [
      ...(q.format === 'typeIn' || q.format === 'errorSpot' ? [...(q.accept ?? []), q.answer ?? ''] : []),
      ...(q.format === 'speak' ? [q.target ?? ''] : []),
    ];
    for (const p of produced) if (BELOW_A_HUNDRED.has(p.toLowerCase())) offenders.push(`quiz answer "${p}"`);
  }
  strictEqual(offenders.length, 0, `a1.27's material is being taught again:\n  ${offenders.join('\n  ')}`);

  // The inverse, so this is a boundary and not a ban. The multipliers cannot be
  // taught without the numbers that stand in front of them, so the lesson must
  // still USE them.
  const all = strings(L).join('\n');
  ok(/quatre-vingt/.test(all), 'the lesson never uses a1.27 material, which means it is teaching numbers in isolation');
});

test('no dead corpus entry, and no two non-sentence items share an fr in a theme', { skip: noSeed }, () => {
  const dead = L!.itemIds.filter((id) => !ITEMS.has(id));
  strictEqual(dead.length, 0, `lesson declares items absent from the corpus: ${dead.join(', ')}`);
  // The flashcard hub keys decks on `fr` within a theme, so a duplicate serves
  // the same card twice and takes two SRS ratings for one word. Sentences are
  // exempt: they are keyed differently and repeat legally. Checked across the
  // WHOLE theme, not only this lesson's items, because the collision that
  // matters is with something authored elsewhere.
  const foldFr = (s: string) => s.trim().toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  const seen = new Map<string, string>();
  for (const it of seed.items) {
    if (it.theme !== 'nombres' || it.kind === 'sentence') continue;
    const key = foldFr(it.fr);
    const prior = seen.get(key);
    ok(!prior, `${it.id} and ${prior} both teach "${it.fr}" in the nombres theme`);
    seen.set(key, it.id);
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

test('the dictée assembles words rather than spelling letters, and tests all three rules', { skip: noSeed }, () => {
  // Asked of the REAL module the renderer uses, not of a restated threshold.
  // No word or phrase item in this theme carries `dictation` (all of the 204
  // that do are sentences), so a dictée on bare multiplier words would fail the
  // contract; these are sentences and must land in word mode.
  const d = L!.sections.find(
    (s): s is Extract<Lesson['sections'][number], { type: 'dictation' }> => s.type === 'dictation',
  )!;
  ok(d.itemIds.length >= 4, 'the dictée is worth the mission');
  for (const id of d.itemIds) {
    const fr = ITEMS.get(id)!.fr;
    strictEqual(dicteeMode(fr), 'words', `"${fr}" would spell letter by letter`);
    ok(dicteeWords(fr).length >= 4, `"${fr}" is too short to be worth assembling`);
    ok(wordDecoys(fr).length > 0, `"${fr}" gets no decoy tiles, so "use everything" solves it`);
  }
  // One sentence per claim, which is what makes the mission a test of the
  // teaching rather than of spelling in general.
  const frs = d.itemIds.map((id) => ITEMS.get(id)!.fr);
  ok(frs.some((f) => /\b\w+ cents\b/i.test(f)), 'no sentence carries the S on cents');
  ok(frs.some((f) => /\bcent \w+/i.test(f) && !/cents\b/i.test(f)), 'no sentence carries cent without its S');
  ok(frs.some((f) => /\bmille\b/i.test(f)), 'no sentence carries mille, which is the rule most often broken');
  ok(frs.some((f) => /millions? d(?:e|’)/i.test(f)), 'no sentence carries the de after million');
  ok(frs.some((f) => /euros?\b/i.test(f)), 'no sentence carries a price, which is the surface a learner meets first');
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
  // authored and invisible. Seven sons.06 sections are in that state; this
  // lesson is not joining them.
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

test('the progress card counts the journey it sits in', { skip: noSeed }, () => {
  // These four figures used to be hand-typed display strings elsewhere in the
  // app, and a display string is validated against nothing. They are derived at
  // authoring time; this asserts the shipped copy agrees with the lesson around
  // it rather than asserting the numbers themselves.
  const ix = L!.sections.findIndex((s) => (s as { id?: string }).id === 's27-progress');
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
  const dictee = L!.sections.findIndex((s) => s.type === 'dictation');
  // The dictée is the hardest mission in a written lesson, so it comes after all
  // three rules have been taught rather than in the middle of them.
  const million = L!.sections.findIndex((s) => (s as { id?: string }).id === 's10-million');
  ok(dictee > million, 'the dictée asks for spellings the lesson has not taught yet');
});

test('no section reaches for xl, which this content cannot fit', { skip: noSeed }, () => {
  // `size: 'xl'` caps every string in the section at 12 words and is meant for
  // one French unit at 56pt. This lesson's units are the longest in the chain
  // (mille neuf cent quatre-vingt-dix-neuf is six words for one year), so xl
  // would fail on the content itself and, before that, run off the bottom of a
  // Pixel 6.
  const xl = L!.sections.filter((s) => (s as { size?: string }).size === 'xl');
  strictEqual(xl.length, 0, `sections at xl: ${xl.map((s) => (s as { id?: string }).id).join(', ')}`);
  // commonErrors renders as a scrolling list unless `swipe` is set, and before
  // the fallback was moved out of the switch's default: it drew a blank screen.
  for (const s of L!.sections) {
    if (s.type !== 'commonErrors') continue;
    ok((s as { swipe?: boolean }).swipe, `${(s as { id?: string }).id}: commonErrors without swipe is a scrolling list`);
    strictEqual((s as { size?: string }).size, 'lg', 'commonErrors wants lg, one trap per screen');
  }
});

test('every sheet section is a type the sheet surface actually draws', { skip: noSeed }, () => {
  // FOUND ON A DEVICE, 2026-08-05, and the most expensive class of bug this
  // project has: authored, schema-valid, test-passing, and rendered by nothing.
  //
  // sheet.a1.28.written shipped as a ten-row `cheatSheet`. SheetSection in
  // components/ReferenceSheet.tsx switches on exactly three section types and
  // its `default:` branch draws the section TITLE alone, so the sheet opened,
  // showed "Reading a French figure", and held ten invisible rows. `cheatSheet`
  // is a real type that renders correctly in the flow, which is precisely what
  // made it easy to author and impossible to notice.
  //
  // The allowed set is READ FROM THE COMPONENT rather than restated, the same
  // technique lesson-contract.test.ts uses against MissionRich. A copy of the
  // list here would be a second implementation free to drift, and it would
  // drift in the direction that lets the bug back in.
  const src = readFileSync(resolve(here, '..', 'components', 'ReferenceSheet.tsx'), 'utf8');
  const fn = src.slice(src.indexOf('function SheetSection'), src.indexOf('function SheetTable'));
  ok(fn.length > 0, 'SheetSection is no longer in ReferenceSheet.tsx; this guard needs rewriting');
  const drawn = new Set([...fn.matchAll(/case '([a-zA-Z]+)':/g)].map((m) => m[1]));
  ok(drawn.size >= 2, `only found ${drawn.size} rendered sheet types; the parse has broken, not the content`);

  const bad: string[] = [];
  for (const sheet of L!.sheets ?? []) {
    for (const sec of sheet.sections ?? []) {
      if (!drawn.has(sec.type)) bad.push(`${sheet.id} / ${(sec as { id?: string }).id}: type "${sec.type}"`);
    }
  }
  strictEqual(
    bad.length,
    0,
    `sheet sections whose type SheetSection does not draw, so only their title appears:\n  ${bad.join('\n  ')}\n` +
    `  SheetSection renders: ${[...drawn].join(', ')}`,
  );

  // And no sheet is empty, which is the same failure one level up.
  for (const sheet of L!.sheets ?? []) {
    ok(sheet.sections?.length, `sheet "${sheet.id}" declares no sections`);
  }
});

test('the years table holds no word too long for its own column', { skip: noSeed }, () => {
  // MEASURED on a Pixel 6 on 2026-08-05, and pinned here because it cost two
  // device round trips to find.
  //
  // s18-years is the tightest French layout in the lesson: three columns, TWO
  // of which hold spelled-out French, so each gets about a third of the screen.
  // A whitespace-delimited word longer than roughly twelve characters has
  // nowhere to break and the renderer splits it mid-word. The lesson shipped
  // `quatre-vingt-dix-neuf` here first and it drew as "quatre-vi / ngt-dix-neuf";
  // `soixante-huit` was tried next and drew as "soixant / e-huit". Either is a
  // broken spelling displayed on the table that teaches the correct one.
  //
  // Scoped to THIS section on purpose. s08-milletable carries
  // `quatre-vingt-dix-neuf` quite happily, because two of its three columns are
  // short numeric strings and its French column is correspondingly wide. A
  // blanket rule over every tapTable would fire there and get deleted.
  const YEARS_COLUMN_CHARS = 12;
  const sec = section('s18-years') as Extract<Lesson['sections'][number], { type: 'tapTable' }> | undefined;
  ok(sec && sec.type === 'tapTable', 's18-years is not a tapTable any more');
  const tooLong: string[] = [];
  for (const row of sec!.rows) {
    for (const cell of row.cells) {
      for (const word of cell.split(/\s+/)) {
        if (word.length > YEARS_COLUMN_CHARS) tooLong.push(`"${word}" (${word.length}) in row ${row.cells[0]}`);
      }
    }
  }
  strictEqual(
    tooLong.length,
    0,
    `s18-years has words its column cannot break, so they will draw split mid-word:\n  ${tooLong.join('\n  ')}`,
  );
});

test('the audio brief pins the constraints that vanish once the clips arrive', { skip: noSeed }, () => {
  const recorded = L!.audio?.recorded ?? [];
  ok(recorded.length > 0, 'the lesson asks the studio for recordings');
  // A price is ONE utterance at natural speed. Let the studio pause between
  // "euros" and "cinquante" and the recording teaches the opposite of the
  // mission it sits in, and nobody will be able to tell from the delivered file
  // that the brief ever said otherwise.
  const prices = recorded.find((r) => r.id === 'rec-a1-28-prices');
  ok(prices, 'the price recording brief is gone');
  ok(/one utterance/i.test(prices!.desc), 'the price brief no longer demands a single utterance');
  ok(/no pause/i.test(prices!.desc), 'the price brief no longer forbids a pause inside the price');
  // And the contrast briefs keep their one-take instruction, for the same
  // reason a1.27's do: across two takes the members are not comparable.
  ok(recorded.filter((r) => /one take/i.test(r.desc)).length >= 2, 'the one-take instruction is missing from the contrast briefs');
  // Every recordingId a section names must be one the lesson actually requests.
  const known = new Set(recorded.map((r) => r.id));
  const named = strings(L!.sections).filter((s) => s.startsWith('rec-'));
  ok(named.length > 0, 'no section names a recording');
  for (const id of named) ok(known.has(id), `a section names recording "${id}", which the lesson never asks for`);
  // And nothing authored `autoplay`, which is declared in schema.ts and
  // implemented in no component to this day. `audioFirst` is the one that works.
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
  // It has to be the LESSON's reframe and not merely a sentence that appears in
  // it, which is what `reframe` on the lesson object declares.
  strictEqual(L!.reframe, SRC_REFRAME);
});

test('the ladder the source names climbs from a hundred to a billion', { skip: noSrc || noSeed }, () => {
  // The id lists in nombres-large-ids.ts are order-bearing and ordered by SCALE
  // rather than by id, because the one thing a learner has to build here is a
  // sense of size. A transposed pair would put a billion between two hundreds
  // and nothing else would notice.
  const frs = SRC_LADDER.map((id) => ITEMS.get(id)?.fr);
  strictEqual(
    frs.join(','),
    [
      'cent un', 'cent cinquante', 'deux cents', 'deux cent cinquante', 'trois cents', 'cinq cents',
      'mille', 'deux mille', 'dix mille', 'cent mille',
      'un million', 'un million d’habitants', 'deux millions', 'trois millions', 'un milliard', 'deux milliards',
    ].join(','),
    'the ladder is not in scale order',
  );
  strictEqual(ITEMS.get(SRC_ANCHOR)?.fr, 'cent', 'the anchor is not cent');
  // Every card the mic scores carries the drill the mic-scored deck runs. An
  // item without it renders as a card that cannot be scored, which looks like a
  // broken mission rather than a missing tag.
  for (const id of SRC_SPEAK) {
    ok(ITEMS.get(id)?.drills.includes('voiceflash'), `${id} is spoken and carries no voiceflash drill`);
  }
});

test('the items this lesson authored are in the seed, tagged, and nowhere twice', { skip: noSrc || noSeed }, () => {
  ok(SRC_NEW_IDS.length > 0, 'the corpus file authors nothing');
  for (const id of SRC_NEW_IDS) {
    const it = ITEMS.get(id);
    ok(it, `authored item ${id} never reached the seed`);
    strictEqual(it!.theme, 'nombres', `${id} landed in the wrong theme`);
    // A word or phrase is a flashcard; a sentence is dictated. Either way it has
    // to carry the drill its surface runs, or it renders as a card nothing can
    // do anything with.
    if (it!.kind === 'sentence') ok(it!.drills.includes('dictation'), `${id} is a sentence carrying no dictation drill`);
    else ok(it!.drills.includes('flashcard'), `${id} is a headword carrying no flashcard drill`);
    const twins = seed.items.filter((x) => x.theme === it!.theme && x.fr === it!.fr);
    strictEqual(twins.length, 1, `"${it!.fr}" is in the nombres theme ${twins.length} times`);
    // Every authored item is reachable: named by a section, or released by a
    // tranche. An item authored and never reached is corpus nobody sees.
    const reached =
      L!.itemIds.includes(id) ||
      (L!.deckTranche ?? []).flat().includes(id);
    ok(reached, `${id} was authored and this lesson never reaches it`);
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
  strictEqual(Object.keys(L!.terms ?? {}).length, Object.keys(SRC!.terms ?? {}).length, 'glossary size drifted');
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
  strictEqual(
    (L!.audio?.recorded ?? []).length,
    (SRC!.audio?.recorded ?? []).length,
    'the recording brief drifted',
  );
});
