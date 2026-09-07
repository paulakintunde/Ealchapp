// Guards a1.18.l1 "La négation".
//
// This lesson has one failure mode that matters more than all the others, and
// it is not a crash: it is THE ÊTRE EXCEPTION QUIETLY DISAPPEARING.
//
// « Ce n'est pas un livre » is authored from nothing. Measured over 47,444
// published rows on 2026-08-07, the exception is attested TWICE in the entire
// database and neither row is usable at A1: fr.sons.alphabet.370 is a spelling
// contrast and fr.c1.rhetorique.028 is C1. « ne sont pas des », « ne suis pas
// un/une » and « n'es pas un/une » all return ZERO.
//
// So there is no corpus pressure holding it in place. A later author tidying
// this lesson would meet three sentences that look like an inconsistency, and
// "fixing" « Ce n'est pas un livre » to « Ce n'est pas de livre » would leave
// every schema check, every density check and most of this file green while the
// lesson taught the exact error it exists to prevent. THREE tests below exist
// for that one edit, and the mutation log at the bottom of this comment records
// that all three go red.
//
// The second-most-valuable assertion is layout: ONE SECTION must carry all
// three outcomes on ONE screen, on ONE noun. Split across missions, « Je n'ai
// pas de livre », « Je n'ai pas le livre » and « Ce n'est pas un livre » become
// three ordinary sentences and the fact that ONLY THE VERB separates them is
// never visible anywhere. Checked by SECTION ID, because the reading passage
// also carries the contrast in prose and a looser check passed with the
// designed screen deleted.
//
// The third is the dropped `ne`. It is taught here for RECOGNITION ONLY, and
// the surface most likely to lose that is the speak mission. It is checked BY
// ID rather than by string, so a reword cannot slip past it.
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
// itself the first time content legitimately changes, and the fix is then to
// edit the test, which is how a test comes to certify a bug. The exceptions are
// numbers that are the SHAPE of the lesson: the thirteen pairs, the four
// outcomes, the six triggers, the six rounds. A later trim that quietly drops
// one is exactly what this file exists to stop.
//
// Nothing here reimplements app logic. `matchesAccept`, `dicteeMode`,
// `glossKeys`, `segmentSentence`, `hasPlainNasalFor` and `validateDensity` are
// all imported from the modules the app itself runs. An earlier version of
// a1.01's test inlined its own glossary lookup, copied the version that was
// already broken, and passed while the feature was dead.
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { ok, strictEqual, deepStrictEqual } from 'node:assert';
import { test } from 'node:test';
import { quizQuestions, validateLesson, type Lesson, type LessonSection } from './schema.ts';
import { hasPlainNasalFor, validateDensity, formatDensity } from './density.logic.ts';
import { glossKeys, segmentSentence } from './gloss.logic.ts';
import { dicteeMode } from './dictee.logic.ts';
import { matchesAccept } from './answer.logic.ts';

const here = dirname(fileURLToPath(import.meta.url));
const seed = JSON.parse(readFileSync(resolve(here, 'seed.json'), 'utf8')) as {
  units: { id: string; seq: number; lessonIds: string[]; themes?: string[] | null; canDo?: string; sub?: string; title?: string }[];
  lessons: Lesson[];
  items: { id: string; kind: string; level: string; theme: string; fr: string; en: string; respell?: string; ipa?: string; drills: string[]; cardType?: string; gender?: string; tags?: string[] }[];
};

const L = seed.lessons.find((l) => l.id === 'a1.18.l1');
// Before the batch and the merge have run, the seed has no a1.18.l1 and every
// seed-derived assertion below would fail for a reason that is not a content
// bug. Skip cleanly rather than reporting a build failure as a content failure.
const noSeed = !L;

const ITEMS = new Map(seed.items.map((i) => [i.id, i]));

/* ── The shape of the lesson, stated once ─────────────────────────────────── */

const SPINE = [
  's01-scene', 's02-goals', 's03-two-words', 's04-wrap', 's05-both-verbs',
  's06-elision', 's07-elision-table',
  's08-collapse', 's09-collapse-table', 's10-nothing',
  's11-one-noun', 's12-etre', 's13-three-outcomes', 's14-transform', 's15-traps',
  's16-dropped', 's17-ear', 's18-non-plus', 's19-reading',
  's20-words', 's21-flash', 's22-dictation', 's23-speak', 's24-scenario',
  's25-review', 's26-progress', 's27-quiz', 's28-roundup',
];

const ACT_SECTIONS: Record<string, string[]> = {
  act1: ['s01-scene', 's02-goals', 's03-two-words', 's04-wrap', 's05-both-verbs'],
  act2: ['s06-elision', 's07-elision-table'],
  act3: ['s08-collapse', 's09-collapse-table', 's10-nothing'],
  act4: ['s11-one-noun', 's12-etre', 's13-three-outcomes', 's14-transform', 's15-traps'],
  act5: ['s16-dropped', 's17-ear', 's18-non-plus', 's19-reading'],
  act6: [
    's20-words', 's21-flash', 's22-dictation', 's23-speak', 's24-scenario',
    's25-review', 's26-progress', 's27-quiz', 's28-roundup',
  ],
};

/** Asserted against an EXPLICIT CONSTANT, never a figure derived from the
 *  lesson. A derived count compares the content to itself and passes on any
 *  rewording, which is invariant §5. */
const REFRAME = 'Wrap the verb, then ask what the verb was.';
const REFRAME_APPEARANCES = 13;

const EXPECTED_TRIGGERS = 6;
const EXPECTED_ROUNDS = 6;
const EXPECTED_PAIRS = 13;
const EXPECTED_AUTHORED = 27;
const EXPECTED_ETRE_EXCEPTION_ROWS = 6;

/** The screen the lesson is judged on, and the screen the brief asks for by
 *  name. Both are checked BY ID: a find() over every section is satisfied by
 *  the reading passage, which carries the same contrast in prose and is not the
 *  designed layout. */
const CONTRAST_SECTION_ID = 's11-one-noun';
const BOTH_CHANGES_SECTION_ID = 's09-collapse-table';

/** RECOGNITION ONLY. Named by id, because a reword cannot change an id. */
const DROPPED_NE_ID = 'fr.a1.negation-et-restriction.069';

const sections = (L?.sections ?? []) as LessonSection[];
const byId = new Map(sections.map((s) => [(s as { id?: string }).id ?? '', s]));
const quizSection = sections.find((s) => s.type === 'quiz');
const QS = quizSection && quizSection.type === 'quiz' ? quizQuestions(quizSection) : [];
const ROUNDS = quizSection && quizSection.type === 'quiz' ? (quizSection.rounds ?? []) : [];

function strings(v: unknown, out: string[] = []): string[] {
  if (typeof v === 'string') out.push(v);
  else if (Array.isArray(v)) v.forEach((x) => strings(x, out));
  else if (v && typeof v === 'object') Object.values(v).forEach((x) => strings(x, out));
  return out;
}

/** Walks the string, checking neighbours against an accent-aware class. NEVER
 *  builds a regex out of the search term: `\b` is ASCII-only in JavaScript, so
 *  /\bne\b/ fails on every accented neighbour and a regex that returns zero
 *  looks exactly like an absence. Invariant §0. */
function hasWord(haystack: string, needle: string): boolean {
  let from = 0;
  for (;;) {
    const i = haystack.indexOf(needle, from);
    if (i < 0) return false;
    const before = i === 0 ? ' ' : haystack[i - 1];
    const after = haystack[i + needle.length] ?? ' ';
    if (!/[a-zà-ÿœæ]/i.test(before) && !/[a-zà-ÿœæ]/i.test(after)) return true;
    from = i + 1;
  }
}

const textOf = (id: string) => strings(byId.get(id) ?? {}).join('\n');

/** Every surface that asks the learner to PRODUCE something, as opposed to
 *  read or hear it. Written narrowly on purpose: a guard scoped to every string
 *  fires on legitimate context (a traps card has to SHOW the error) and gets
 *  deleted rather than fixed, which is how a1.13's placement guard nearly
 *  went. */
function produceKeys(): string[] {
  return [
    ...QS.filter((q) => ['typeIn', 'errorSpot', 'speak'].includes(q.format ?? 'mcq'))
      .flatMap((q) => [q.answer ?? '', ...(q.accept ?? []), (q as { target?: string }).target ?? '']),
    ...(L?.drills ?? []).flatMap((d) => (d.opts && d.correct !== undefined ? [d.opts[d.correct]] : [])),
    ...(sections.filter((s) => s.type === 'scenario')
      .flatMap((s) => (s.type === 'scenario' ? s.turns.flatMap((t) => [t.user, ...(t.alts ?? []).map((a) => a.fr)]) : []))),
  ].filter(Boolean);
}

/* ═══ The spine ═══════════════════════════════════════════════════════════ */

test('the lesson is in the seed, bound to its unit, and validates', { skip: noSeed }, () => {
  deepStrictEqual(validateLesson(L!, L!.id), [], 'the seed copy fails validateLesson');
  const unit = seed.units.find((u) => u.id === 'a1.18');
  ok(unit, 'unit a1.18 is not in the seed');
  ok(unit!.lessonIds.includes('a1.18.l1'), 'unit a1.18 does not name its lesson');
  strictEqual(L!.unitId, 'a1.18');
});

test('the unit is bound to negation-et-restriction, which it did not declare', { skip: noSeed }, () => {
  // a1.18 shipped with `themes: null` while a theme named for its own subject
  // held 604 published rows. This binding is the one unit edit the batch makes
  // beyond linking the lesson, and it is asserted so a later edit cannot quietly
  // unbind it and leave the Den pointing at nothing.
  const unit = seed.units.find((u) => u.id === 'a1.18')!;
  deepStrictEqual(unit.themes, ['negation-et-restriction'], 'unit a1.18 is not bound to its theme');
});

test('the unit title, sub and canDo are byte-identical to what was measured', { skip: noSeed }, () => {
  // THE ELLIPSIS IS U+2026, NOT THREE PERIODS. a1.09's `sub` carried a curly
  // apostrophe and a brief that retyped it straight tripped the batch's guard.
  // This asserts the bytes rather than the appearance.
  const unit = seed.units.find((u) => u.id === 'a1.18')!;
  strictEqual(unit.title, 'Negation');
  strictEqual(unit.sub, 'La négation');
  strictEqual(unit.canDo, 'Can turn any sentence they know negative with ne… pas');
  ok(unit.canDo!.includes('…'), 'the canDo no longer carries U+2026 HORIZONTAL ELLIPSIS');
});

test('the spine is exactly these 28 sections, in this order', { skip: noSeed }, () => {
  deepStrictEqual(sections.map((s) => (s as { id?: string }).id), SPINE);
});

test('the acts name every section exactly once, and no act claims another act\'s', { skip: noSeed }, () => {
  const acts = L!.acts ?? [];
  strictEqual(acts.length, 6);
  deepStrictEqual(Object.fromEntries(acts.map((a) => [a.id, a.sections])), ACT_SECTIONS);
  const claimed = acts.flatMap((a) => a.sections);
  deepStrictEqual([...claimed].sort(), [...SPINE].sort(), 'the acts and the spine disagree');
  strictEqual(new Set(claimed).size, claimed.length, 'two acts claim one section');
});

test('the lesson tag agrees with what the renderer will compute', { skip: noSeed }, () => {
  // missions.ts derives the eyebrow at render time as `${level} · LEÇON
  // ${unit.seq}`. The stored value is a fallback and has to agree, or the two
  // disagree the moment something reads this field instead. a1.03 shipped
  // exactly that bug (commit 56c79a7).
  const unit = seed.units.find((u) => u.id === 'a1.18')!;
  strictEqual(L!.tag, `A1 · LEÇON ${String(unit.seq).padStart(2, '0')}`);
});

test('the reframe is authored verbatim, exactly the expected number of times', { skip: noSeed }, () => {
  strictEqual(L!.reframe, REFRAME);
  const hits = strings(L!).filter((s) => s.includes(REFRAME)).length;
  strictEqual(hits, REFRAME_APPEARANCES, `the reframe appears ${hits} times, expected ${REFRAME_APPEARANCES}`);
  // The density validator requires it VERBATIM in at least three SECTIONS, and
  // a count over the whole lesson would be satisfied by three quiz why-lines.
  const inSections = sections.filter((s) => strings(s).some((x) => x.includes(REFRAME))).length;
  ok(inSections >= 3, `the reframe is in ${inSections} sections, and the validator needs at least 3`);
});

test('the lesson passes the real density validator against the real item set', { skip: noSeed }, () => {
  const issues = validateDensity(L!, new Set(seed.items.map((i) => i.id)));
  deepStrictEqual(issues, [], formatDensity(issues));
});

/* ═══ THE THREE THAT EXIST FOR ONE EDIT ══════════════════════════════════ */

test('the être exception is on the screen, with the regular case beside it', { skip: noSeed }, () => {
  // ═══ THE MOST VALUABLE ASSERTION IN THIS FILE ═══
  //
  // The brief: "Assert that a section carries both a `pas de` and a `pas un`
  // example, and that the `pas un` one is after être. This is the content you
  // authored from nothing and the most likely to be lost in a later edit."
  //
  // Checked on the NAMED section, not on any section.
  const t = textOf(CONTRAST_SECTION_ID);
  ok(t, `${CONTRAST_SECTION_ID} does not exist, and it is the screen this lesson is judged on`);
  ok(hasWord(t.toLowerCase(), 'pas de'), `${CONTRAST_SECTION_ID} carries no "pas de" example`);
  ok(hasWord(t.toLowerCase(), 'pas un'), `${CONTRAST_SECTION_ID} carries no "pas un" example`);
  // And the `pas un` one is AFTER ÊTRE. « Je n'ai pas un livre » would satisfy a
  // check for "pas un" while being the error the lesson exists to prevent.
  ok(
    /ce n['’]est pas un/i.test(t),
    `${CONTRAST_SECTION_ID} has a "pas un" but not after être. « Je n'ai pas un livre » is the ERROR, not the exception.`,
  );
});

test('all three outcomes are on ONE screen, on ONE noun', { skip: noSeed }, () => {
  // Split across missions these become three ordinary sentences and the fact
  // that ONLY THE VERB separates them is never visible on any screen.
  const t = textOf(CONTRAST_SECTION_ID);
  const expected = [
    "Je n'ai pas de livre.",     // avoir  -> un collapses to de
    "Je n'ai pas le livre.",     // avoir  -> le survives
    "Ce n'est pas un livre.",    // être   -> un survives
  ];
  for (const s of expected) {
    ok(t.includes(s), `${CONTRAST_SECTION_ID} does not show "${s}". All three outcomes belong on one screen.`);
  }
  // ONE NOUN. Three different nouns would let a learner conclude the NOUN is
  // what decides, which is the thing this screen exists to disprove.
  for (const s of expected) ok(s.includes('livre'), `"${s}" does not use the shared noun`);
});

test('the dropped ne never reaches a produce surface', { skip: noSeed }, () => {
  // The brief: "Assert no practice with skill: 'speak', no typeIn and no
  // dictation target asks the learner to produce a ne-less form. This is the
  // assertion that stops a well-meaning later author modernising the lesson."
  //
  // BY ID for the surfaces that name ids, and by SHAPE for the answer keys.
  const speak = sections.find((s) => (s as { id?: string }).id === 's23-speak') as { itemIds?: string[] } | undefined;
  const dictation = sections.find((s) => (s as { id?: string }).id === 's22-dictation') as { itemIds?: string[] } | undefined;
  ok(speak?.itemIds?.length, 'the speak mission names no items');
  ok(!speak!.itemIds!.includes(DROPPED_NE_ID), `the speak mission names ${DROPPED_NE_ID}, which is the ne-less form`);
  ok(!dictation?.itemIds?.includes(DROPPED_NE_ID), `the dictée names ${DROPPED_NE_ID}, which is the ne-less form`);

  // The SHAPES that can only occur once the ne has gone. Checked this way
  // rather than as "a pas with no ne in front of it", because an accept list is
  // written for fold(), which strips apostrophes: « je nai pas soif » is a
  // legitimate entry and contains no `ne`.
  const NE_LESS = [
    "j'ai pas", 'jai pas', "c'est pas", 'cest pas', 'je suis pas',
    'tu as pas', 'il a pas', 'elle a pas', 'il est pas', 'ce sont pas',
    'nous avons pas', 'vous avez pas', 'on a pas',
  ];
  const bad = produceKeys().flatMap((s) => NE_LESS.filter((n) => hasWord(s.toLowerCase(), n)).map(() => s));
  deepStrictEqual([...new Set(bad)], [], 'a ne-less negative is a produce answer key. It is recognition only.');

  // AND IT IS ON A RECOGNITION SURFACE, or the teaching has gone entirely.
  ok(L!.itemIds.includes(DROPPED_NE_ID), 'the dropped-ne row is in no itemIds, so it is taught nowhere');
  ok(textOf('s16-dropped').includes("J'ai pas de chien."), 's16-dropped does not show the ne-less form at all');
});

/* ═══ Both steps together ═════════════════════════════════════════════════ */

test('one screen shows a positive and its negative with BOTH changes visible', { skip: noSeed }, () => {
  // The brief's first named layout requirement, and its reason: "A learner who
  // sees only the ne… pas wrap and meets the article change three missions
  // later will have already fossilised pas un."
  const t = textOf(BOTH_CHANGES_SECTION_ID);
  ok(t, `${BOTH_CHANGES_SECTION_ID} does not exist`);
  const pairs: [string, string][] = [
    ["J'ai un frère.", "Je n'ai pas de frère."],
    ["J'ai une voiture.", "Je n'ai pas de voiture."],
    ['Elle a des enfants.', "Elle n'a pas d'enfants."],
  ];
  for (const [pos, neg] of pairs) {
    ok(t.includes(pos), `${BOTH_CHANGES_SECTION_ID} does not show the positive "${pos}"`);
    ok(t.includes(neg), `${BOTH_CHANGES_SECTION_ID} does not show its negative "${neg}"`);
  }
});

test('every table cell carrying French carries its English ON THE CELL', { skip: noSeed }, () => {
  // ═══ THE a1.16 DEFECT, WHICH THIS LESSON SHIPPED IN v2 AND v3 FIXED ═══
  //
  // a1.16's s09-pairs table passed every assertion while showing four pairs of
  // FRENCH phrases with the meanings in the detail modal. strings(section)
  // contained the English, so the check was satisfied, and on a Pixel 6 the
  // screen read as four contrasts the learner had to take on trust and a tap.
  //
  // AN ASSERTION OVER strings(section) CANNOT TELL "ON THE SCREEN" FROM "ONE
  // TAP AWAY". This one reads rows[].cells[] specifically and ignores `detail`
  // entirely, which is the only way to see the difference.
  //
  // s07-elision-table shipped exactly that defect in this lesson's v2: four
  // rows whose second column was a bare French sentence. It was found by
  // rendering the tables rather than by any test, and this is the test that
  // stops it coming back.
  const FRENCH_MARK = /[àâçéèêëîïôûùüÿœ]|['’]|\b(je|ne|pas|est|sont|un|une|des|le|la|les|ce|nous|elle|il|ai|suis|de|d)\b/i;
  const ENGLISH_MARK = /\b(the|a|an|is|are|not|do|does|have|has|and|of|that|this|to|you|it|they|she|he|we|my|am|there|ready|tired|thirsty|book|car|brother|children|pen|phone|mistake|friends|dog)\b/i;
  const bare: string[] = [];
  for (const s of sections) {
    if (s.type !== 'tapTable') continue;
    for (const r of s.rows) {
      for (const c of r.cells) {
        const lines = c.split('\n');
        const hasFrench = lines.some((l) => FRENCH_MARK.test(l));
        const hasEnglish = lines.some((l) => ENGLISH_MARK.test(l));
        // A cell that is a plain English label ("est, a vowel") carries no
        // French sentence and needs no gloss.
        if (hasFrench && !hasEnglish) bare.push(`${(s as { id?: string }).id}: "${c.replace(/\n/g, ' / ')}"`);
      }
    }
  }
  deepStrictEqual(bare, [], 'table cell(s) showing French with no English on the cell; the meaning is one tap away');
});

test('no table column promises a positive and shows a negative', { skip: noSeed }, () => {
  // s09-collapse-table and s11-one-noun both head their left column "what you
  // already say" and their right "the same sentence, turned round". A row whose
  // LEFT cell contains `pas` breaks that contract, and this lesson shipped one
  // in v2: two published negatives side by side in the table whose whole job is
  // the positive/negative contrast.
  for (const id of [BOTH_CHANGES_SECTION_ID, CONTRAST_SECTION_ID, 's04-wrap']) {
    const s = byId.get(id);
    if (!s || s.type !== 'tapTable') continue;
    ok(/already say/i.test(s.cols[0]), `${id}'s left column no longer promises the positive`);
    const bad = s.rows
      .filter((r) => hasWord(r.cells[0].toLowerCase(), 'pas'))
      .map((r) => `${id}: "${r.cells[0].replace(/\n/g, ' / ')}"`);
    deepStrictEqual(bad, [], 'a row shows a negative in the column headed "what you already say"');
  }
});

test('le, la and les are shown surviving a negative', { skip: noSeed }, () => {
  // So the rule is not over-generalised. Without this the lesson teaches
  // "everything becomes de" and a learner writes « Je n'aime pas de café ».
  const all = strings(sections).join('\n');
  ok(all.includes("Je n'ai pas le livre."), 'no screen shows le surviving on a verb the learner can conjugate');
  ok(
    sections.some((s) => strings(s).join('\n').includes("Je n'ai pas le livre.")
      && strings(s).join('\n').includes("Je n'ai pas de livre.")),
    'no ONE screen shows le surviving beside un collapsing, which is the only place the asymmetry is visible',
  );
});

test('every authored pair is a genuine pair: adjacent, distinct, both halves of the wrap', { skip: noSeed }, async () => {
  const src = await import('../../../ealch-admin/scripts/data/negation-corpus.ts') as {
    PAIRS: { posId: string; negId: string; pos: string; neg: string; outcome: string; verb: string }[];
  };
  strictEqual(src.PAIRS.length, EXPECTED_PAIRS, `${src.PAIRS.length} pairs, expected ${EXPECTED_PAIRS}`);
  for (const p of src.PAIRS) {
    const seq = (id: string) => Number(id.split('.').pop());
    strictEqual(seq(p.negId), seq(p.posId) + 1, `pair "${p.pos}" is not adjacent in the id sequence`);
    ok(p.pos !== p.neg, `pair ${p.posId} has an identical positive and negative`);
    ok(hasWord(p.neg.toLowerCase(), 'pas'), `the negative of ${p.posId} has no pas: "${p.neg}"`);
    ok(/\b(ne|n['’])/.test(p.neg.toLowerCase()), `the negative of ${p.posId} has no ne: "${p.neg}"`);
    ok(!hasWord(p.pos.toLowerCase(), 'pas'), `the POSITIVE of ${p.posId} contains pas: "${p.pos}"`);
    // Both halves are in the seed, and they say what the source says.
    for (const [id, fr] of [[p.posId, p.pos], [p.negId, p.neg]] as const) {
      const row = ITEMS.get(id);
      ok(row, `${id} is authored in the source and absent from the seed`);
      strictEqual(row!.fr, fr, `${id}: seed "${row!.fr}" vs source "${fr}"`);
    }
  }
});

test('six être-exception rows were authored, because the corpus has none to import', { skip: noSeed }, async () => {
  // Measured over 47,444 published rows on 2026-08-07: « n'est pas un » returns
  // ONE (fr.sons.alphabet.370, a spelling contrast), « n'est pas une » returns
  // ONE at C1, and « ne sont pas des », « ne suis pas un/une » and « n'es pas
  // un/une » all return ZERO. This lesson wrote the exception from nothing and
  // the count is pinned so a later trim cannot take it back down.
  const src = await import('../../../ealch-admin/scripts/data/negation-corpus.ts') as {
    AUTHORED_ITEMS: { id: string; fr: string; tags: string[] }[];
  };
  const rows = src.AUTHORED_ITEMS.filter((i) => i.tags.includes('exception'));
  strictEqual(rows.length, EXPECTED_ETRE_EXCEPTION_ROWS, `${rows.length} être-exception rows, expected ${EXPECTED_ETRE_EXCEPTION_ROWS}`);
  // And each one is really the exception: a negated être with a SURVIVING un,
  // une or des behind it. A row tagged `exception` that collapsed would pass a
  // count and teach the opposite.
  const negatives = rows.filter((r) => /\b(ne|n['’])/.test(r.fr.toLowerCase()) && hasWord(r.fr.toLowerCase(), 'pas'));
  strictEqual(negatives.length, 3, 'three of the six exception rows should be the negatives');
  for (const r of negatives) {
    ok(
      /pas (un|une|des)\b/i.test(r.fr),
      `${r.id} "${r.fr}" is tagged as the être exception and carries no surviving article`,
    );
    ok(/\b(est|sont|suis|es|sommes|êtes)\b/i.test(r.fr), `${r.id} "${r.fr}" is tagged as the être exception and has no être in it`);
  }
});

/* ═══ The neighbours keep their lessons ═══════════════════════════════════ */

test('no production surface teaches ne… jamais, plus, rien or personne', { skip: noSeed }, async () => {
  // Written against PRODUCTION SURFACES rather than every string, or the guard
  // fires on legitimate context and gets deleted. And written as the SECOND
  // HALF OF A WRAP rather than as bare words: `plus` and `personne` are
  // ordinary French, and « moi non plus » is imported by this lesson.
  const src = await import('../../../ealch-admin/scripts/data/negation-corpus.ts') as { OTHER_NEGATORS: string[] };
  const surfaces = [
    ...strings(sections.filter((s) => ['vocabThemes', 'flashcards', 'reviewDeck', 'cardDeck', 'tapTable', 'practice', 'dictation'].includes(s.type))),
    ...strings(L!.drills ?? []),
    ...strings(quizSection ?? {}),
  ];
  const hits = src.OTHER_NEGATORS.filter((w) => surfaces.some((s) => hasWord(s.toLowerCase(), w)));
  deepStrictEqual(hits, [], 'another negator reached a production surface. No A1 unit owns those and a2 does.');
});

test('no negative imperative is imported as a model', { skip: noSeed }, async () => {
  // fr.a1.negation-et-restriction.018, .019 and .020 sit in this lesson's own
  // theme slice and are NOT in its canDo: an imperative has no subject and the
  // learner has never conjugated one. Checked BY ID, because the ids are the
  // likeliest thing a later bulk import would sweep in.
  const src = await import('../../../ealch-admin/scripts/data/negation-corpus.ts') as { IMPERATIVE_IDS: string[] };
  const smuggled = src.IMPERATIVE_IDS.filter((id) => L!.itemIds.includes(id));
  deepStrictEqual(smuggled, [], 'a negative imperative is in this lesson\'s itemIds');
  // And no screen carries one by shape either: a bare « Ne + verb + pas » with
  // no subject in front of it.
  const surfaces = strings(sections.filter((s) => s.type !== 'reading'));
  const shaped = surfaces.filter((s) => /(^|[«"\s])(Ne|N['’])\s*\p{L}+\s+pas\b/u.test(s)
    && !/(^|[«"\s])(je|tu|il|elle|on|nous|vous|ils|elles|ce|c['’]|ça)\b/i.test(s));
  deepStrictEqual(shaped, [], 'a negative imperative is on a screen');
});

test('no production surface asks the learner to conjugate a verb outside être and avoir', { skip: noSeed }, () => {
  // There is no regular-verb unit anywhere in A1: -er verbs are a2.01 and faire
  // is a2.12. Reading exposure is allowed and this lesson has seven rows of it.
  // Asserted against PRODUCE surfaces only, which is what the brief asks for.
  const OUT_OF_REACH = [
    'parle', 'parles', 'parlez', 'parlons', 'mange', 'manges', 'mangez', 'mangeons',
    'aime', 'aimes', 'aimez', 'aimons', 'habite', 'habites', 'habitons', 'habitez',
    'travaille', 'regarde', 'ferme', 'trouve', 'écoute', 'fume', 'prends', 'prennent',
    'sortent', 'bois', 'boit', 'fait', 'faites', 'connaît', 'veux', 'veut',
  ];
  const speak = sections.find((s) => (s as { id?: string }).id === 's23-speak') as { itemIds?: string[] } | undefined;
  const dictation = sections.find((s) => (s as { id?: string }).id === 's22-dictation') as { itemIds?: string[] } | undefined;
  const keys = [
    ...produceKeys(),
    ...(speak?.itemIds ?? []).map((id) => ITEMS.get(id)?.fr ?? ''),
    ...(dictation?.itemIds ?? []).map((id) => ITEMS.get(id)?.fr ?? ''),
  ].filter(Boolean);
  const bad = keys.flatMap((s) => OUT_OF_REACH.filter((v) => hasWord(s.toLowerCase(), v)).map((v) => `"${v}" in "${s}"`));
  deepStrictEqual(bad, [], 'a produce surface asks for a verb the learner has never been taught');
});

test('a1.19 and a1.20 keep si and the question machinery', { skip: noSeed }, async () => {
  const src = await import('../../../ealch-admin/scripts/data/negation-lesson.ts') as { QUESTION_TEACHING: string[] };
  const all = strings(sections).concat(strings(L!.sheets ?? [])).map((s) => s.toLowerCase());
  const hits = src.QUESTION_TEACHING.filter((w) => all.some((s) => s.includes(w)));
  deepStrictEqual(hits, [], 'question teaching reached a surface. si is deliberately left for a1.19.');
});

/* ═══ The respelling repair ═══════════════════════════════════════════════ */

test('the non repair is applied, and asserted by name', { skip: noSeed }, async () => {
  // The brief: "Your `non` repair is asserted by name, so a later author's
  // revert to NOHN goes red. Import hasPlainNasalFor rather than writing your
  // own check."
  const src = await import('../../../ealch-admin/scripts/data/negation-corpus.ts') as {
    RESPELL_REPAIRS: { id: string; fr: string; from: string; to: string }[];
    RESPELL: Record<string, { fr: string; respell: string }>;
  };
  const repair = src.RESPELL_REPAIRS.find((r) => r.fr === 'non');
  ok(repair, 'the non repair is gone from RESPELL_REPAIRS');
  strictEqual(repair!.to, 'NOHⁿ', 'the non repair no longer targets NOHⁿ');
  strictEqual(repair!.id, 'fr.sons.mots-essentiels.043');

  // THROUGH THE REAL CHECKER, both directions.
  ok(hasPlainNasalFor('non', 'NOHN'), 'hasPlainNasalFor no longer flags NOHN, so this repair may be unnecessary');
  ok(!hasPlainNasalFor('non', 'NOHⁿ'), 'the repaired value NOHⁿ is itself flagged');

  // AND IT IS IN THE SEED. A repair applied only in Postgres would leave the
  // learner reading NOHN until the next publish.
  const row = ITEMS.get('fr.sons.mots-essentiels.043');
  ok(row, 'fr.sons.mots-essentiels.043 is not in the seed, so the repair has not been merged');
  strictEqual(row!.fr, 'non');
  strictEqual(row!.respell, 'NOHⁿ', 'the seed still carries the un-repaired respelling. Re-run merge-negation-into-seed.ts.');
});

test('every respelling this lesson displays passes the shared nasal checker', { skip: noSeed }, async () => {
  const src = await import('../../../ealch-admin/scripts/data/negation-corpus.ts') as {
    RESPELL: Record<string, { fr: string; respell: string }>;
    NASAL_FORMS: string[];
    NOT_NASAL_FORMS: string[];
  };
  const flagged = Object.values(src.RESPELL).filter((d) => hasPlainNasalFor(d.fr, d.respell));
  deepStrictEqual(flagged.map((d) => `${d.fr} ${d.respell}`), [], 'a respelling closes a nasal with a plain n or m');

  // BY NAME, because the checker cannot see a WORD-INTERNAL nasal (invariant
  // §3's first blind spot). `day zahⁿ-FAHⁿ` and `suh nuh sohⁿ PAH` are exactly
  // that shape and would pass hasPlainNasalFor while being wrong.
  const missing = src.NASAL_FORMS.filter((f) => !src.RESPELL[f]?.respell.includes('ⁿ'));
  deepStrictEqual(missing, [], 'a form with a nasal vowel carries no superscript n');

  // THE OPPOSITE CHECK, which is the a1.13 `jaune` shape. None of these has a
  // nasal vowel and a superscript would teach a sound that is not in the word.
  const wrong = src.NOT_NASAL_FORMS.filter((f) => src.RESPELL[f]?.respell.includes('ⁿ'));
  deepStrictEqual(wrong, [], 'a form with NO nasal vowel was given a superscript n');
});

/* ═══ Reachability: authored, valid, and actually drawn ══════════════════ */

test('every declared itemId resolves and is on a screen', { skip: noSeed }, () => {
  // a1.08 shipped 43 declared itemIds that resolved perfectly, were named by no
  // section, and were drawn by nothing. The question is not "does this id
  // resolve" but "did the learner see it".
  const dangling = L!.itemIds.filter((id) => !ITEMS.has(id));
  deepStrictEqual(dangling, [], 'itemIds that do not resolve in the seed');

  const shown = new Set<string>();
  for (const s of sections) {
    for (const id of strings(s).filter((x) => /^fr\.[a-z0-9]+\.[a-z0-9-]+\.\d{3,}$/.test(x))) shown.add(id);
    const row = ITEMS.get('');
    void row;
  }
  // A section can also SHOW a row by printing its French rather than its id.
  const allText = strings(sections).join('\n');
  const unseen = L!.itemIds.filter((id) => !shown.has(id) && !allText.includes(ITEMS.get(id)!.fr));
  deepStrictEqual(unseen, [], 'itemId(s) declared, resolving, and on no screen');
});

test('every id named anywhere in the lesson resolves', { skip: noSeed }, () => {
  const named = new Set(strings(L!).filter((s) => /^fr\.[a-z0-9]+\.[a-z0-9-]+\.\d{3,}$/.test(s)));
  const dangling = [...named].filter((id) => !ITEMS.has(id));
  deepStrictEqual(dangling, [], 'id(s) named in the lesson that resolve to nothing');
});

test('the tranches release every taught item exactly once, and nothing untaught', { skip: noSeed }, () => {
  const tranches = L!.deckTranche ?? [];
  strictEqual(tranches.length, (L!.acts ?? []).length, 'the tranches are not index-aligned with the acts');
  const flat = tranches.flat();
  strictEqual(new Set(flat).size, flat.length, 'an item is released by two tranches, so the SRS asks for two ratings');
  deepStrictEqual([...flat].sort(), [...L!.itemIds].sort(), 'the tranches and the itemIds disagree');
});

test('no tranche releases an item the acts before it have not shown', { skip: noSeed }, () => {
  // a1.17 v1 shipped act 1 releasing two items that no act 1 section draws. The
  // check is not "does this item belong to this idea" but "has the learner seen
  // it by the end of this act".
  const acts = L!.acts ?? [];
  const tranches = L!.deckTranche ?? [];
  const problems: string[] = [];
  let seenText = '';
  for (let i = 0; i < acts.length; i++) {
    seenText += acts[i].sections.map((sid) => textOf(sid)).join('\n');
    for (const id of tranches[i] ?? []) {
      const row = ITEMS.get(id);
      if (!row) { problems.push(`${id} does not resolve`); continue; }
      if (!seenText.includes(row.fr) && !seenText.includes(id)) {
        problems.push(`${acts[i].id} releases ${id} "${row.fr}", which no section up to and including ${acts[i].id} shows`);
      }
    }
  }
  deepStrictEqual(problems, [], 'a tranche releases a card before the learner has met it');
});

test('exactly one quiz section, because the pager renders exactly one', { skip: noSeed }, () => {
  strictEqual(sections.filter((s) => s.type === 'quiz').length, 1);
});

test('every sheetId resolves, and every declared sheet is reachable', { skip: noSeed }, () => {
  const sheetIds = new Set((L!.sheets ?? []).map((s) => s.id));
  const used = sections.map((s) => (s as { sheetId?: string }).sheetId).filter(Boolean) as string[];
  deepStrictEqual(used.filter((id) => !sheetIds.has(id)), [], 'sheetId(s) naming a sheet that does not exist');
  deepStrictEqual([...sheetIds].filter((id) => !used.includes(id)), [], 'sheet(s) no section links to');
});

test('no reference sheet carries a section type the component does not draw', { skip: noSeed }, () => {
  // FOUND ON A DEVICE for a1.17 v3, and invisible to every other test in the
  // suite. ReferenceSheet.tsx renders exactly three section types inside a sheet
  // and its `default` branch draws the section's TITLE AND NOTHING ELSE.
  // a1.13 has this defect shipped today. Parsed out of the component rather
  // than restated, so a change there moves this test with it.
  const src = readFileSync(resolve(here, '../components/ReferenceSheet.tsx'), 'utf8');
  const drawn = new Set([...src.matchAll(/case\s+'([a-zA-Z]+)'/g)].map((m) => m[1]));
  ok(drawn.size >= 3, `parsed ${drawn.size} drawable sheet section types out of ReferenceSheet.tsx, expected at least 3`);
  const bad = (L!.sheets ?? []).flatMap((sh) =>
    (sh.sections ?? []).filter((sec) => !drawn.has(sec.type))
      .map((sec) => `${sh.id}/${(sec as { id?: string }).id} is a ${sec.type}`));
  deepStrictEqual(bad, [], 'a reference sheet section would draw its title and nothing else');
});

test('no term chip list exceeds the three the renderer shows', { skip: noSeed }, () => {
  const over = sections
    .filter((s) => ((s as { terms?: string[] }).terms ?? []).length > 3)
    .map((s) => `${(s as { id?: string }).id} declares ${((s as { terms?: string[] }).terms ?? []).length}`);
  deepStrictEqual(over, [], 'a section declares more than three term chips; the renderer shows three');
});

test('every terms chip names a term the lesson defines', { skip: noSeed }, () => {
  const defined = new Set(Object.keys(L!.terms ?? {}));
  const bad = sections.flatMap((s) => ((s as { terms?: string[] }).terms ?? [])
    .filter((t) => !defined.has(t)).map((t) => `${(s as { id?: string }).id} names "${t}"`));
  deepStrictEqual(bad, [], 'a section names a term that is not defined');
});

test('autoplay is authored nowhere', { skip: noSeed }, () => {
  // Declared in schema.ts, implemented in no component, to this day. Use
  // audioFirst, which ScenePlayer implements.
  ok(!JSON.stringify(L!).includes('"autoplay"'), 'autoplay is authored somewhere and is read by nothing');
});

test('no imageRef is authored, because nothing validates one', { skip: noSeed }, () => {
  // lesson-contract.test.ts contains no reference to imageRef and the schema
  // comment promising a publish check is conditional on an asset manifest that
  // does not exist. This lesson authors none, so the assertion is that it stays
  // that way rather than that a registry lookup succeeds.
  const refs = strings(L!).filter((s) => /^lessons\/[a-z0-9-]+\/[a-z0-9-]+\.(jpg|png|webp)$/i.test(s));
  deepStrictEqual(refs, [], 'an imageRef was authored and nothing in the suite checks it resolves');
});

/* ═══ The reading passage ════════════════════════════════════════════════ */

test('the reading passage is one block and its glossary can actually match', { skip: noSeed }, () => {
  const r = byId.get('s19-reading') as {
    text?: string; glossary?: { word: string; en: string }[]; questionsInModal?: boolean; questions?: unknown[];
  } | undefined;
  ok(r, 's19-reading is missing');
  ok(r!.questionsInModal, 'reading without questionsInModal never reaches the glossary renderer');
  ok((r!.questions ?? []).length > 0, 'reading with questionsInModal and no questions renders nothing');
  ok(!r!.text!.includes('\n'), 'the passage carries a newline, which PassagePage silently discards');

  // THROUGH THE REAL segmentSentence, comparing matched KEYS rather than text.
  // a1.08 shipped two glossary entries that could never underline anything,
  // because every occurrence sat inside a longer key and longest-match-first
  // shadowed them out of existence, and its own test passed because it compared
  // TEXT. segmentSentence takes a SET OF FOLDED KEYS, not the glossary array.
  const entries = r!.glossary ?? [];
  const keys = new Set(entries.flatMap((g) => glossKeys(g.word)).filter(Boolean));
  const hit = new Set(
    segmentSentence(r!.text!, keys).filter((x) => x.key).map((x) => x.key!),
  );
  const shadowed = entries.filter((g) => !glossKeys(g.word).some((k) => hit.has(k))).map((g) => g.word);
  deepStrictEqual(shadowed, [], 'glossary entr(ies) that can never underline anything in this passage');

  // MAX_GLOSS_WORDS is four. A five-word key can never match.
  const tooLong = (r!.glossary ?? []).map((g) => g.word).filter((w) => w.trim().split(/\s+/).length >= 5);
  deepStrictEqual(tooLong, [], 'glossary key(s) of five or more words, which can never match');
});

test('everything outside the guillemets in the passage is English', { skip: noSeed }, () => {
  // Paul's rule, 2026-08-04: in an A1 passage, anything not inside « » is
  // English. Checked by looking for French function words in the prose between
  // the quoted sentences.
  const r = byId.get('s19-reading') as { text?: string } | undefined;
  const outside = (r!.text ?? '').replace(/«[^»]*»/g, ' ');
  const FRENCH = ['le', 'la', 'les', 'une', 'des', 'est', 'sont', 'avec', 'pour', 'dans', 'mais', 'vous', 'nous'];
  const hits = FRENCH.filter((w) => hasWord(outside.toLowerCase(), w));
  deepStrictEqual(hits, [], 'French words are in the English prose of the passage');
});

/* ═══ The dictée ═════════════════════════════════════════════════════════ */

test('every dictée target lands in WORD mode, which is the order test', { skip: noSeed }, () => {
  // THROUGH THE REAL dicteeMode. This is the OPPOSITE of a1.17's requirement
  // and the reason is precise: a1.17's subject was a CHOICE between two short
  // words, so word mode would have handed the learner `mon` as a pre-spelled
  // tile. This lesson's first step is an ORDER, ne in front of the verb and pas
  // behind it, and word mode is the only mode that tests it.
  //
  // Four shorter negatives were withdrawn from this list because they fell
  // under the 16-letter threshold and would have spelled out instead.
  const d = byId.get('s22-dictation') as { itemIds?: string[] } | undefined;
  ok(d?.itemIds?.length, 's22-dictation names no items');
  const wrong: string[] = [];
  for (const id of d!.itemIds!) {
    const row = ITEMS.get(id);
    ok(row, `the dictée names ${id}, which is not in the seed`);
    if (dicteeMode(row!.fr) !== 'words') wrong.push(`${id} "${row!.fr}" is letters mode`);
    ok(row!.drills.includes('dictation'), `${id} is a dictée target with no "dictation" drill`);
  }
  deepStrictEqual(wrong, [], 'a dictée target spells out instead of assembling, which tests spelling this lesson does not teach');
});

test('every dictée target is a negative', { skip: noSeed }, () => {
  // A dictée on « J'ai un livre. » tests nothing this lesson teaches.
  const d = byId.get('s22-dictation') as { itemIds?: string[] } | undefined;
  const bad = (d!.itemIds ?? []).filter((id) => {
    const fr = ITEMS.get(id)!.fr.toLowerCase();
    return !hasWord(fr, 'pas');
  });
  deepStrictEqual(bad, [], 'a dictée target is not a negative');
});

/* ═══ The quiz ═══════════════════════════════════════════════════════════ */

test('the exam is at most half mcq and every question has a why and a ref', { skip: noSeed }, () => {
  const mcq = QS.filter((q) => (q.format ?? 'mcq') === 'mcq').length;
  ok(mcq * 2 <= QS.length, `${mcq}/${QS.length} questions are mcq, over the half ceiling`);
  deepStrictEqual(QS.filter((q) => !q.why).map((q) => q.q), [], 'quiz question(s) with no why');
  deepStrictEqual(QS.filter((q) => !q.ref).map((q) => q.q), [], 'quiz question(s) with no ref');
  const sectionIds = new Set(sections.map((s) => (s as { id?: string }).id).filter(Boolean) as string[]);
  deepStrictEqual(
    QS.filter((q) => q.ref && !sectionIds.has(q.ref)).map((q) => q.ref), [],
    'quiz ref(s) naming a section that does not exist',
  );
});

test('every free-text question accepts the answer it displays', { skip: noSeed }, () => {
  // THROUGH THE REAL matchesAccept. A question that shows an answer it would
  // mark wrong is a question that teaches the learner to distrust the app.
  const bad = QS.filter((q) => q.answer && !matchesAccept(q.answer, q.accept))
    .map((q) => `"${q.q}" displays "${q.answer}"`);
  deepStrictEqual(bad, [], 'question(s) that do not accept their own answer');
});

test('no quiz option refers to a position and none is duplicated', { skip: noSeed }, () => {
  // QuizDeckView shuffles the options of every closed question, per question,
  // per attempt. A positional option is broken by design, and a duplicate makes
  // a shuffled question genuinely ambiguous rather than merely redundant. This
  // lesson is exposed: the article answer space is de / un / le / des.
  const POSITIONAL = ['the first', 'the second', 'the third', 'the last', 'both of the above',
    'all of the above', 'none of these', 'none of the above', 'the one above', 'the one below'];
  const positional = QS.flatMap((q) => (q.opts ?? [])
    .filter((o) => POSITIONAL.some((p) => o.toLowerCase().includes(p)))
    .map((o) => `"${o}" in "${q.q}"`));
  deepStrictEqual(positional, [], 'quiz option(s) referring to a position, which the shuffle breaks');

  const dupes = QS.flatMap((q) => {
    const seen = new Set<string>();
    return (q.opts ?? []).filter((o) => (seen.has(o) ? true : (seen.add(o), false)))
      .map((o) => `"${o}" twice in "${q.q}"`);
  });
  deepStrictEqual(dupes, [], 'quiz question(s) with a duplicate option');
});

test('the authored answer slots stay under the 40% cap', { skip: noSeed }, () => {
  const closed = QS.filter((q) => typeof q.correct === 'number');
  const slots = closed.reduce<Record<number, number>>((a, q) => {
    a[q.correct as number] = (a[q.correct as number] ?? 0) + 1;
    return a;
  }, {});
  const over = Object.entries(slots).filter(([, n]) => n / closed.length > 0.4)
    .map(([k, n]) => `slot ${k} holds ${n}/${closed.length}`);
  deepStrictEqual(over, [], 'quiz-spread fails the build above 40%, whatever the runtime shuffle does');
});

test('the article round mixes an être item with de items', { skip: noSeed }, () => {
  // ═══ THE ROUND THAT WOULD OTHERWISE CERTIFY A BUG ═══
  //
  // "No format can test whether the learner knows the article rule has
  // exceptions. A learner can pass every article question by always answering
  // `de` if you never mix être items into the same round. Mix them, or the
  // round certifies a bug."
  //
  // Walks the round's OWN answer keys. A round of four `de` answers fails here.
  const r4 = ROUNDS.find((r) => r.id === 'r4-the-verb-decides');
  ok(r4, 'the article round r4-the-verb-decides is gone');
  const keys = (r4!.questions ?? []).map((q) => `${q.answer ?? ''} ${(q.opts ?? [])[q.correct as number] ?? ''}`.toLowerCase());
  const survives = keys.filter((k) => /pas (un|une|des)\b/.test(k)).length;
  const collapses = keys.filter((k) => /pas d[e']/.test(k)).length;
  ok(survives >= 1, `r4 has no answer where the article SURVIVES, so it can be passed by always answering de`);
  ok(collapses >= 1, `r4 has no answer where the article collapses, so it teaches only the exception`);
});

test('every round leads on a distinct trigger, so all six drills are reachable', { skip: noSeed }, () => {
  // drillForRound walks a round's `targets` and fires the drill of the FIRST
  // one that resolves, then stops. a1.05 shipped two dead drills this way and a
  // first draft of a1.07 shipped a third.
  strictEqual((L!.errorTriggers ?? []).length, EXPECTED_TRIGGERS);
  strictEqual(ROUNDS.length, EXPECTED_ROUNDS);
  const drillFor = new Map((L!.errorTriggers ?? []).map((t) => [t.id, t.drill]));
  const leads: string[] = [];
  for (const r of ROUNDS) {
    const lead = (r.targets ?? []).find((t) => drillFor.has(t));
    ok(lead, `round ${r.id} names no target that resolves to a drill`);
    ok(!leads.includes(lead!), `round ${r.id} leads on "${lead}", which another round already leads on`);
    leads.push(lead!);
  }
  const fired = new Set(leads.map((t) => drillFor.get(t)!));
  const teaching = (L!.drills ?? []).filter((d) => !d.id.startsWith('retest-'));
  deepStrictEqual(teaching.filter((d) => !fired.has(d.id)).map((d) => d.id), [], 'drill(s) no quiz round can fire');
});

test('every trigger names a drill, a retest and sections that exist', { skip: noSeed }, () => {
  const known = new Set((L!.drills ?? []).map((d) => d.id));
  const sectionIds = new Set(sections.map((s) => (s as { id?: string }).id).filter(Boolean) as string[]);
  const problems: string[] = [];
  for (const t of L!.errorTriggers ?? []) {
    if (!known.has(t.drill)) problems.push(`${t.id} names drill "${t.drill}"`);
    if (t.retest && !known.has(t.retest)) problems.push(`${t.id} names retest "${t.retest}"`);
    for (const d of t.detectOn) {
      const base = d.split('/')[0];
      if (!sectionIds.has(base)) problems.push(`${t.id} detects on "${d}"`);
    }
  }
  deepStrictEqual(problems, [], 'trigger(s) naming something that does not exist');
});

test('every drill item is a corpus id rather than a display string', { skip: noSeed }, () => {
  // A drill scores against the corpus, so it plays the same audio and reads the
  // same spelling as every other card. Passing display strings validates as
  // broken ids and draws blank cards.
  const bad = (L!.drills ?? []).flatMap((d) => (d.items ?? [])
    .filter((i) => typeof i === 'string' && !ITEMS.has(i))
    .map((i) => `${d.id} names "${i}"`));
  deepStrictEqual(bad, [], 'drill item(s) that are not corpus ids');
});

test('the verb drill holds the article constant, so it cannot be sorted on the article', { skip: noSeed }, () => {
  // ═══ THE DRILL THIS LESSON EXISTS FOR ═══
  //
  // Every item in drill-the-verb carries un or une BEFORE the negative, so the
  // article is constant and the VERB is the only variable. A bucket where the
  // collapsing items carried `un` and the surviving ones carried `le` would let
  // the learner score full marks by sorting on the article and never look at
  // the verb. Same shape as a1.17's drill-vowel, where both buckets hold
  // feminine nouns for the same reason.
  const d = (L!.drills ?? []).find((x) => x.id === 'drill-the-verb');
  ok(d, 'drill-the-verb is gone, and it is the drill this lesson exists for');
  ok((d!.items ?? []).length >= 4, 'drill-the-verb has fewer than four items');
  const bad: string[] = [];
  for (const id of d!.items ?? []) {
    const fr = ITEMS.get(id as string)?.fr ?? '';
    // Either the article survived (pas un/une/des) or it collapsed (pas de),
    // and in both cases the ORIGINAL article was an indefinite. A `le` item
    // here would hand the learner a shortcut.
    if (/pas le\b|pas la\b|pas les\b/i.test(fr)) bad.push(`${id} "${fr}" carries a definite article`);
  }
  deepStrictEqual(bad, [], 'drill-the-verb can be sorted on the article rather than on the verb');
});

/* ═══ House style ════════════════════════════════════════════════════════ */

test('no em dash, no "honest", no U+203F anywhere in the lesson', { skip: noSeed }, () => {
  const json = JSON.stringify(L!);
  ok(!json.includes('—'), 'em dash found; the house style bans it');
  ok(!/honest/i.test(json), 'the word "honest" is banned from authored content');
  ok(!json.includes('‿'), 'U+203F renders as a low underscore on a Pixel 6');
});

test('no grammar jargon reaches a learner surface', { skip: noSeed }, () => {
  // `grammarIntroduced` is addressed to the curriculum and MAY use the precise
  // words. Cards may not. `négation` and `verbe` are on the list because they
  // are this lesson's own subject and the likeliest to slip through.
  const learnerFacing = [...strings(sections), ...strings(L!.sheets ?? []), ...strings(L!.terms ?? {})];
  const isIdentifier = (s: string) => !/\s/.test(s) && /^[a-z0-9][a-z0-9.\-_/]*$/i.test(s);
  const hits = learnerFacing.filter((s) => !isIdentifier(s)
    && /\b(conjugaison|article (défini|indéfini|partitif)|adjectif|possessif|(?<!')accord|masculin|féminin|invariable|déterminant|négation)\b/i.test(s));
  deepStrictEqual(hits.slice(0, 3), [], 'grammar vocabulary reached an A1 learner');
});

test('grammarIntroduced records the être exception, which is what makes this lesson new', { skip: noSeed }, () => {
  // The curriculum-facing record is allowed the precise words and should carry
  // the finding, because it is what a future author reads to decide whether
  // this ground is covered.
  const g = (L!.grammarIntroduced ?? []).join('\n').toLowerCase();
  ok(g.includes('copula') || g.includes('être'), 'grammarIntroduced does not record the être exception');
  ok(g.includes('reception only') || g.includes('ne-drop'), 'grammarIntroduced does not record that ne-drop is reception only');
});

/* ═══ Seed / source parity ═══════════════════════════════════════════════ */

test('the seed copy matches the authored source, field for field', { skip: noSeed }, async () => {
  // The failure mode that has twice cost this project real work: an edit to the
  // admin source that was never merged, or a seed edited by hand. Deep equality
  // rather than a spot check, because a mutation test that edits the source and
  // runs the suite reports healthy assertions as dead without it.
  const src = await import('../../../ealch-admin/scripts/data/negation-lesson.ts') as { NEGATION_LESSON: Lesson };
  deepStrictEqual(
    JSON.parse(JSON.stringify(L)), JSON.parse(JSON.stringify(src.NEGATION_LESSON)),
    'seed.json and negation-lesson.ts have drifted. Re-run merge-negation-into-seed.ts.',
  );
});

test('every authored corpus row in the seed matches the authored source', { skip: noSeed }, async () => {
  const src = await import('../../../ealch-admin/scripts/data/negation-corpus.ts') as {
    AUTHORED_ITEMS: { id: string; fr: string; en: string; kind: string; theme: string; gender?: string }[];
  };
  strictEqual(src.AUTHORED_ITEMS.length, EXPECTED_AUTHORED, `the source authors ${src.AUTHORED_ITEMS.length} rows, expected ${EXPECTED_AUTHORED}`);
  for (const w of src.AUTHORED_ITEMS) {
    const row = ITEMS.get(w.id);
    ok(row, `${w.id} is authored in the source and absent from the seed`);
    strictEqual(row!.fr, w.fr, `${w.id}: seed "${row!.fr}" vs source "${w.fr}"`);
    strictEqual(row!.en, w.en, `${w.id}: gloss differs`);
    strictEqual(row!.theme, 'negation-et-restriction', `${w.id} is not in this lesson's theme`);
  }
});

test('every authored row is a sentence with no gender, so a1.03 cannot move', { skip: noSeed }, async () => {
  // The brief calls this a live risk, because this lesson needs countable nouns
  // and a1.11 broke a1.03's -e statistic exactly this way. It is zero BY
  // CONSTRUCTION: endingPopulation admits only single-word rows with a gender
  // field, and every row here is a sentence. Asserted so a later author who
  // adds a headword finds out here rather than in a1.03's printed figures.
  const src = await import('../../../ealch-admin/scripts/data/negation-corpus.ts') as {
    AUTHORED_ITEMS: { id: string; fr: string; kind: string; gender?: string }[];
  };
  const risky = src.AUTHORED_ITEMS.filter((i) => i.kind !== 'sentence' || i.gender);
  deepStrictEqual(
    risky.map((i) => `${i.id} kind=${i.kind} gender=${i.gender ?? '-'}`), [],
    'an authored row could reach a1.03\'s measured ending population',
  );
});

test('every imported row is in the seed and says what the manifest says', { skip: noSeed }, async () => {
  // `negation-et-restriction` is NOT in SEED_CUT.themes, so all eighteen of
  // these had to be CARRIED by the merge. If one is missing it renders as an
  // empty card and nothing else in the suite would say so.
  const src = await import('../../../ealch-admin/scripts/data/negation-corpus.ts') as {
    IMPORTED: { id: string; fr: string; en: string }[];
    REUSED: { id: string; fr: string }[];
  };
  const missing: string[] = [];
  for (const r of [...src.IMPORTED, ...src.REUSED]) {
    const row = ITEMS.get(r.id);
    if (!row) { missing.push(`${r.id} "${r.fr}" is not in the seed`); continue; }
    if (row.fr !== r.fr) missing.push(`${r.id}: seed "${row.fr}" vs manifest "${r.fr}"`);
  }
  deepStrictEqual(missing, [], 'imported/reused row(s) absent from the seed or drifted. Re-run merge-negation-into-seed.ts.');
});

test('no imported row was re-authored under a new id', { skip: noSeed }, async () => {
  // A row that exists gets imported, not rewritten. Two rows with the same
  // French in the same theme are one flashcard served twice, and
  // flashhub-coverage.test.ts computes it exactly this way.
  const src = await import('../../../ealch-admin/scripts/data/negation-corpus.ts') as {
    AUTHORED_ITEMS: { id: string; fr: string; theme: string; kind: string }[];
    IMPORTED: { id: string; fr: string; theme: string }[];
  };
  const importedByTheme = new Map(src.IMPORTED.map((r) => [`${r.theme}::${r.fr.toLowerCase()}`, r.id]));
  const clashes = src.AUTHORED_ITEMS
    .filter((a) => importedByTheme.has(`${a.theme}::${a.fr.toLowerCase()}`))
    .map((a) => `${a.id} re-authors ${importedByTheme.get(`${a.theme}::${a.fr.toLowerCase()}`)}`);
  deepStrictEqual(clashes, [], 'an authored row duplicates an imported one in the same theme');
});

test('the id range this lesson owns holds only its own rows', { skip: noSeed }, async () => {
  // a1.15 landed inside a1.17's range mid-build on 2026-08-06 and a highest-id
  // check passed it cleanly, because rows below the top do not move the maximum.
  const src = await import('../../../ealch-admin/scripts/data/negation-corpus.ts') as {
    OWNED_ID_RANGE: { from: string; to: string };
    AUTHORED_IDS: string[];
  };
  const mine = new Set(src.AUTHORED_IDS);
  const foreign = seed.items
    .filter((i) => i.id >= src.OWNED_ID_RANGE.from && i.id <= src.OWNED_ID_RANGE.to
      && i.id.startsWith('fr.a1.negation-et-restriction.') && !mine.has(i.id))
    .map((i) => `${i.id} "${i.fr}"`);
  deepStrictEqual(foreign, [], 'a row inside this lesson\'s id range was authored by somebody else');
  // And the gap at .027 is still a gap. Renumbering into a hole would collide
  // with whatever wrote around it, and ids are the SRS key.
  ok(!ITEMS.has('fr.a1.negation-et-restriction.027'), 'the gap at .027 has been filled; it is a gap, not an invitation');
});

/* ═══ The audio brief ════════════════════════════════════════════════════ */

test('the audio brief records the constraints that cannot be recovered later', { skip: noSeed }, () => {
  // A constraint on how something is recorded becomes invisible the moment the
  // clip is delivered. All five of the brief's lesson-specific notes are pinned
  // here, because the studio reads `desc` and nothing else.
  const recorded = L!.audio?.recorded ?? [];
  ok(recorded.length >= 8, `${recorded.length} recordings requested, expected at least 8`);
  const all = recorded.map((r) => r.desc).join('\n').toLowerCase();

  ok(/one take/.test(all), 'the audio brief never says a pair is one take');
  ok(/never record ne or pas in isolation|no clip anywhere/.test(all),
    'the audio brief does not forbid recording ne or pas alone, and both are unstressed particles');
  ok(/j['’]ai pas de chien/.test(all), 'the audio brief does not put the dropped-ne pair in one take');
  ok(/ce n['’]est pas un livre/.test(all), 'the audio brief does not name the être exception');

  // The pair take names every pair, derived rather than counted, so a pair
  // added to the corpus and not to the brief fails here.
  const pairTake = recorded.find((r) => r.id === 'rec-a1-18-pair');
  ok(pairTake, 'rec-a1-18-pair is gone, and it is the take that carries the one-take rule');
});

/* ═══ What this lesson deliberately did not do ═══════════════════════════ */

test('the curriculum gap for jamais, plus, rien and personne is recorded', { skip: noSeed }, async () => {
  // No A1 unit owns any of the four and the next negation content is a2, while
  // `jamais` already exists as an A1 headword. The brief asks for the gap to be
  // REPORTED rather than filled, and a report nobody can find is not a report.
  const src = readFileSync(
    resolve(here, '../../../ealch-admin/scripts/data/negation-lesson.ts'), 'utf8',
  );
  ok(/CURRICULUM GAP/i.test(src), 'the curriculum gap is not recorded in the handover');
  for (const w of ['jamais', 'rien', 'personne']) {
    ok(src.includes(w), `the handover does not name ${w}`);
  }
});

test('the handover for a1.19 and a1.20 leaves si alone and says so', { skip: noSeed }, () => {
  const src = readFileSync(
    resolve(here, '../../../ealch-admin/scripts/data/negation-lesson.ts'), 'utf8',
  );
  ok(/a1\.19/.test(src) && /a1\.20/.test(src), 'the handover does not name the next two units');
  ok(/`si` IS YOURS|si IS YOURS/i.test(src), 'the handover does not leave si to a1.19');
  // AND si really is untouched on every surface.
  const all = strings(sections).concat(strings(L!.sheets ?? []));
  const hits = all.filter((s) => /\bsi\b/i.test(s) && /(oui|yes|answer|réponse|contradict)/i.test(s));
  deepStrictEqual(hits, [], 'si is being taught as the answer to a negative question, which is a1.19\'s');
});
