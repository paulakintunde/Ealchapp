// Guards a1.17.l1 "Les adjectifs possessifs".
//
// This lesson has one failure mode that matters more than all the others, and it
// is not a crash: it is THE VOWEL RULE BEING TAUGHT ON A NOUN WHERE NOTHING IS
// HAPPENING.
//
// « mon amie » demonstrates the rule. « mon ami » demonstrates nothing at all,
// because `ami` is an ordinary masculine noun and `mon` is what it would take
// anyway. The two differ by one silent letter, they are homophones, and an edit
// that replaces one with the other leaves every other check in this file green
// while the teaching is gone. The brief calls that the highest-value assertion
// available here and it is right. It is the second test below.
//
// The other assertion that earns its place is layout rather than content: ONE
// SECTION must carry the same French phrase against two English readings. Split
// across two missions, `sa sœur` = his sister and `sa sœur` = her sister become
// two unremarkable sentences and the inversion this lesson exists to teach is
// never visible on any screen. The brief: "This is the layout the test must
// assert." It is checked by section id, because the scene ALSO carries the
// contrast in prose and a looser check passed with the designed screen deleted.
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
// the fifteen forms, the six owners, the three shapes and the six triggers:
// those numbers are the SHAPE of the lesson rather than a measurement of it, and
// a later trim that quietly drops one is exactly what this file exists to stop.
//
// Nothing here reimplements app logic. `fold`, `matchesAccept`, `dicteeMode`,
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
  units: { id: string; seq: number; lessonIds: string[]; themes?: string[]; canDo?: string; sub?: string; title?: string }[];
  lessons: Lesson[];
  items: { id: string; kind: string; level: string; theme: string; fr: string; en: string; respell?: string; ipa?: string; drills: string[]; cardType?: string; gender?: string }[];
};

const L = seed.lessons.find((l) => l.id === 'a1.17.l1');
// Before the batch and the merge have run, the seed has no a1.17.l1 and every
// seed-derived assertion below would fail for a reason that is not a content
// bug. Skip cleanly rather than reporting a build failure as a content failure.
const noSeed = !L;

const ITEMS = new Map(seed.items.map((i) => [i.id, i]));

/* ── The shape of the lesson, stated once ─────────────────────────────────── */

/** FIFTEEN, and named individually rather than counted. The brief asks for this
 *  by name and gives the reason: `nos` and `vos` are the two most likely to be
 *  quietly dropped, because they are the least frequent and the grid looks
 *  complete without them. A count of fifteen passes with `vos` replaced by a
 *  second `nos`; this list does not. */
const THE_FIFTEEN = [
  'mon', 'ma', 'mes', 'ton', 'ta', 'tes', 'son', 'sa', 'ses',
  'notre', 'nos', 'votre', 'vos', 'leur', 'leurs',
];

/** SIX owners by THREE shapes. Eighteen cells and fifteen distinct words,
 *  because the bottom three rows do not distinguish the kind of thing. */
const OWNER_ROWS: [string, string, string, string][] = [
  ['je', 'mon', 'ma', 'mes'],
  ['tu', 'ton', 'ta', 'tes'],
  ['il / elle', 'son', 'sa', 'ses'],
  ['nous', 'notre', 'notre', 'nos'],
  ['vous', 'votre', 'votre', 'vos'],
  ['ils / elles', 'leur', 'leur', 'leurs'],
];

const SPINE = [
  's01-scene', 's02-goals', 's03-inversion', 's04-hisher',
  's05-three', 's06-choose', 's07-table-gender',
  's08-son', 's09-table-relief', 's10-sort', 's11-check',
  's12-vowel', 's13-swap', 's14-ear', 's15-traps',
  's16-leur', 's17-slot', 's18-reading',
  's19-words', 's20-flash', 's21-dictation', 's22-speak', 's23-scenario',
  's24-review', 's25-progress', 's26-quiz', 's27-roundup',
];

const ACT_SECTIONS: Record<string, string[]> = {
  act1: ['s01-scene', 's02-goals', 's03-inversion', 's04-hisher'],
  act2: ['s05-three', 's06-choose', 's07-table-gender'],
  act3: ['s08-son', 's09-table-relief', 's10-sort', 's11-check'],
  act4: ['s12-vowel', 's13-swap', 's14-ear', 's15-traps'],
  act5: ['s16-leur', 's17-slot', 's18-reading'],
  act6: [
    's19-words', 's20-flash', 's21-dictation', 's22-speak', 's23-scenario',
    's24-review', 's25-progress', 's26-quiz', 's27-roundup',
  ],
};

/** Asserted against an EXPLICIT CONSTANT, never a figure derived from the
 *  lesson. A derived count compares the content to itself and passes on any
 *  rewording, which is invariant §5. */
const REFRAME = 'Ask what is owned, not who owns it.';
const REFRAME_APPEARANCES = 12;

const EXPECTED_TRIGGERS = 6;
const EXPECTED_ROUNDS = 6;
const EXPECTED_AUTHORED = 32;

/** This lesson's own id range. a1.15 landed inside the original one mid-build
 *  and took .235-.252, so these bounds are load-bearing rather than decorative. */
const OWNED_FROM = 'fr.a1.famille.253';
const OWNED_TO = 'fr.a1.famille.284';

/* ── Helpers ──────────────────────────────────────────────────────────────── */

function strings(v: unknown, out: string[] = []): string[] {
  if (typeof v === 'string') out.push(v);
  else if (Array.isArray(v)) v.forEach((x) => strings(x, out));
  else if (v && typeof v === 'object') Object.values(v).forEach((x) => strings(x, out));
  return out;
}

/** Walks the string, checking neighbours against an accent-aware class. NEVER
 *  builds a regex out of the search term: `\b` is ASCII-only in JavaScript, so
 *  /\bmon\b/ fails on every accented neighbour and a regex that returns zero
 *  looks exactly like an absence. Invariant §0. */
function hasWord(haystack: string, needle: string): boolean {
  const h = haystack.toLowerCase();
  const n = needle.toLowerCase();
  let from = 0;
  for (;;) {
    const i = h.indexOf(n, from);
    if (i < 0) return false;
    const before = i === 0 ? ' ' : h[i - 1];
    const after = h[i + n.length] ?? ' ';
    if (!/[a-zà-ÿœæ]/.test(before) && !/[a-zà-ÿœæ]/.test(after)) return true;
    from = i + 1;
  }
}

const sectionById = (id: string): LessonSection | undefined =>
  L?.sections.find((s) => (s as { id?: string }).id === id);

const textOf = (id: string) => strings(sectionById(id)).join('\n');

const learnerFacing = () => [
  ...strings(L?.sections ?? []),
  ...strings(L?.sheets ?? []),
  ...strings(L?.terms ?? {}),
];

const quizSection = () => L?.sections.find((s) => s.type === 'quiz');
const questions = () => {
  const q = quizSection();
  return q && q.type === 'quiz' ? quizQuestions(q) : [];
};

/** Surfaces where a leaked neighbour's word would be TAUGHT rather than
 *  mentioned. Scoped deliberately: a guard that fires on legitimate context gets
 *  deleted rather than fixed, which a1.13's placement guard nearly proved. */
const productionSurfaces = () => [
  ...strings((L?.sections ?? []).filter((s) => ['vocabThemes', 'flashcards', 'reviewDeck', 'cardDeck', 'tapTable'].includes(s.type))),
  ...strings(L?.drills ?? []),
  ...strings((quizSection() ?? {}) as unknown),
];

/* ═══ The two assertions that earn their place ════════════════════════════ */

test('the his/her inversion is on ONE screen, with both readings against one French phrase', { skip: noSeed }, () => {
  // THE LAYOUT THE BRIEF ASKS THE TEST TO ASSERT. Identical French in both cells
  // of a row, different English. Checked BY SECTION ID rather than "does any
  // section carry it", because the scene's break also states both readings in
  // prose: a looser check passed with s04-hisher deleted, which is exactly the
  // hole this test is for.
  const s = sectionById('s04-hisher');
  ok(s, 's04-hisher, the two-column his/her screen, is gone');
  strictEqual(s!.type, 'tapTable', 's04-hisher must be a tapTable: the contrast is two columns on one screen');

  const t = textOf('s04-hisher');
  ok(hasWord(t, 'his sister'), 's04-hisher no longer carries the "his sister" reading');
  ok(hasWord(t, 'her sister'), 's04-hisher no longer carries the "her sister" reading');

  // And the French is the SAME on both sides of a row, which is the whole point.
  const rows = (s as { rows: { cells: string[] }[] }).rows;
  const identical = rows.filter((r) => r.cells.length >= 2 && r.cells[0] === r.cells[1]);
  ok(
    identical.length >= 3,
    `only ${identical.length} of ${rows.length} rows put IDENTICAL French in both columns. `
    + 'If the two cells differ, the screen is showing two phrases rather than one phrase read two ways.',
  );
  ok(
    identical.some((r) => r.cells[0] === 'sa sœur'),
    'the sa sœur row is gone. It is the pair the scene turns on and the one the reframe is built from.',
  );
});

test('the vowel rule is taught on a verifiably FEMININE vowel-initial noun', { skip: noSeed }, () => {
  // THE HIGHEST-VALUE ASSERTION IN THIS FILE. `mon ami` and `mon amie` are
  // homophones separated by one silent letter, and swapping one for the other
  // leaves the lesson looking correct while teaching nothing: `ami` is an
  // ordinary masculine noun where `mon` is unremarkable.
  const swap = sectionById('s13-swap');
  ok(swap, 's13-swap, the ma sœur / mon amie screen, is gone');
  const t = textOf('s13-swap');
  ok(t.includes('mon amie'), 's13-swap no longer shows `mon amie`');
  ok(t.includes('ma sœur'), 's13-swap no longer shows `ma sœur`. Without the pair, mon amie looks like a mistake.');

  // Both cells of the paired row are the une kind. This is what makes it a rule
  // rather than a memorised exception, and it is checkable BY THE LEARNER
  // because both nouns carry gender='f' on published headwords.
  const amie = seed.items.filter((i) => i.kind !== 'sentence' && i.gender === 'f'
    && (i.fr === 'amie' || i.fr === 'une amie' || i.fr === "l'amie"));
  ok(
    amie.length > 0,
    'no published headword records `amie` as feminine. The vowel act asserts something the learner cannot check.',
  );
  const soeur = seed.items.find((i) => i.id === 'fr.a1.famille.004');
  strictEqual(soeur?.gender, 'f', 'fr.a1.famille.004 `la sœur` no longer carries gender=f');

  // And a corpus row this lesson AUTHORED carries the swap on that noun, so a
  // later edit cannot quietly replace the example with a masculine one.
  const authored = seed.items.filter((i) => i.id >= OWNED_FROM && i.id <= OWNED_TO);
  const feminineVowel = authored.filter((i) => hasWord(i.fr, 'amie') && hasWord(i.fr, 'mon'));
  ok(
    feminineVowel.length >= 2,
    `only ${feminineVowel.length} authored row(s) carry mon in front of the feminine `
    + '`amie`. Replacing them with `mon ami` would leave every other check green and destroy the teaching, '
    + 'because `ami` is masculine and `mon` is what it would take anyway.',
  );
});

/* ═══ All fifteen forms, individually ═════════════════════════════════════ */

test('all fifteen forms are taught, each named on a screen', { skip: noSeed }, () => {
  const text = learnerFacing().join('\n');
  const missing = THE_FIFTEEN.filter((f) => !hasWord(text, f));
  deepStrictEqual(
    missing, [],
    'possessive form(s) on no screen. nos and vos are the two a grid looks complete without.',
  );
});

test('all fifteen forms carry a headword card the lesson declares', { skip: noSeed }, () => {
  // Named on a screen is not the same as drillable. Every form needs a card the
  // flashcard hub can serve, and twelve of the fifteen are imported rather than
  // authored: an id move in mots-essentiels would strand them silently.
  const declared = new Set(L!.itemIds);
  const cards = seed.items.filter((i) => declared.has(i.id) && i.kind !== 'sentence');
  const bare = new Set(cards.map((c) => c.fr.trim().toLowerCase()));
  const missing = THE_FIFTEEN.filter((f) => !bare.has(f));
  deepStrictEqual(missing, [], 'form(s) with no headword card among the lesson\'s declared items');
});

test('the eighteen-cell grid is complete and every cell is on a screen', { skip: noSeed }, () => {
  const text = learnerFacing().join('\n');
  const missing: string[] = [];
  for (const [who, m, f, pl] of OWNER_ROWS) {
    for (const form of [m, f, pl]) {
      if (!hasWord(text, form)) missing.push(`${who}: ${form}`);
    }
  }
  deepStrictEqual(missing, [], 'grid cell(s) on no screen');

  // The bottom three rows collapse their first two cells into one word, which is
  // the relief this lesson promises. If that stops being true the split into two
  // tables stops making sense.
  for (const [who, m, f] of OWNER_ROWS.slice(3)) {
    strictEqual(m, f, `the ${who} row no longer uses one word for both kinds of thing`);
  }
  for (const [who, m, f] of OWNER_ROWS.slice(0, 3)) {
    ok(m !== f, `the ${who} row no longer distinguishes the two kinds of thing`);
  }
});

test('the grid is SPLIT for a phone, and the split matches the teaching order', { skip: noSeed }, () => {
  // Six rows by three columns does not fit a Pixel 6, and tapTable is NOT in
  // ownsLayout(), so it renders inside a scrolling page and the bottom rows fall
  // below the fold with their chrome.
  const gendered = sectionById('s07-table-gender');
  const relief = sectionById('s09-table-relief');
  ok(gendered && relief, 'one half of the split grid is gone');
  strictEqual(gendered!.type, 'tapTable');
  strictEqual(relief!.type, 'tapTable');

  const g = gendered as { cols: string[]; rows: unknown[] };
  const r = relief as { cols: string[]; rows: unknown[] };
  strictEqual(g.rows.length, 3, 's07 must carry three rows, not six');
  strictEqual(g.cols.length, 3, 's07 must carry three columns');
  strictEqual(r.rows.length, 3, 's09 must carry three rows');
  strictEqual(
    r.cols.length, 2,
    's09 must carry TWO columns. Three would repeat the same word in the first two cells of every row, '
    + 'which is the fact the split exists to show rather than a shape to reproduce.',
  );

  // And the split is by teaching order: the owners that ask about the thing come
  // first, in act 2, and the ones that ask nothing come second, in act 3.
  const act2 = L!.acts?.find((a) => a.id === 'act2');
  const act3 = L!.acts?.find((a) => a.id === 'act3');
  ok(act2?.sections.includes('s07-table-gender'), 's07 is no longer in act 2');
  ok(act3?.sections.includes('s09-table-relief'), 's09 is no longer in act 3');

  // The full eighteen live on the reference sheet, where layer 'deep' lifts the
  // core density caps and a learner can scroll on purpose.
  const sheet = L!.sheets?.find((s) => s.id === 'sheet.a1.17.grid');
  ok(sheet, 'sheet.a1.17.grid is gone. It is the single most returned-to sheet this lesson has.');
  const table = sheet!.sections?.find((s) => (s as { id?: string }).id === 'sheet-grid-table');
  ok(table, 'the full eighteen-cell table is gone from the reference sheet');
  strictEqual((table as { rows: unknown[] }).rows.length, 6, 'the sheet table must carry all six owner rows');
});

/* ═══ The homophones, and what the ear cannot do ══════════════════════════ */

test('mon ami and mon amie are stated to be homophones, and carry identical transcriptions', { skip: noSeed }, async () => {
  const said = learnerFacing().some((s) => /same sound|one sound|identical/i.test(s) && /amie?/i.test(s));
  ok(said, 'nowhere does the lesson say that mon ami and mon amie are the same sound');

  const src = await import('../../../ealch-admin/scripts/data/possessifs-corpus.ts') as {
    RESPELL: Record<string, { fr: string; ipa: string; respell: string }>;
  };
  strictEqual(
    src.RESPELL['mon ami'].respell, src.RESPELL['mon amie'].respell,
    'mon ami and mon amie carry different respellings while the lesson says they are one sound',
  );
  strictEqual(
    src.RESPELL['mon ami'].ipa, src.RESPELL['mon amie'].ipa,
    'mon ami and mon amie carry different IPA while the lesson says they are one sound',
  );
});

test('no listenChoose question tries to separate a homophone pair', { skip: noSeed }, () => {
  // mon ami / mon amie are one sound, and leur / leurs are one sound in front of
  // a consonant. An ear question on either asks the learner to hear something
  // that is not in the signal, and a learner who cannot hear it concludes their
  // listening is at fault.
  const ear = questions().filter((q) => q.format === 'listenChoose');
  ok(ear.length >= 1, 'no listenChoose question at all. mes amis against ses amis is a real confusion.');
  for (const q of ear) {
    const opts = (q.opts ?? []).map((o) => o.toLowerCase().trim());
    ok(
      !(opts.includes('mon ami') && opts.includes('mon amie')),
      `an ear question asks the learner to separate mon ami from mon amie: "${q.q}"`,
    );
    ok(
      !(opts.some((o) => hasWord(o, 'leur')) && opts.some((o) => hasWord(o, 'leurs'))),
      `an ear question asks the learner to separate leur from leurs: "${q.q}"`,
    );
  }
});

/* ═══ leur against leurs ══════════════════════════════════════════════════ */

test('leur and leurs are both taught, with the singular and plural noun visible', { skip: noSeed }, () => {
  const t = textOf('s16-leur');
  ok(t.length > 0, 's16-leur is gone');
  ok(hasWord(t, 'leur'), 's16-leur no longer shows leur');
  ok(hasWord(t, 'leurs'), 's16-leur no longer shows leurs');
  // The same noun on both sides, one and several, which is what makes it a
  // minimal pair rather than two unrelated sentences.
  ok(t.includes('leur fille'), 's16-leur no longer shows `leur fille`');
  ok(t.includes('leurs filles'), 's16-leur no longer shows `leurs filles`');
});

test('leur the object pronoun is absent from every production surface', { skip: noSeed }, async () => {
  // a2.24 keeps its lesson. Probed as whole FRENCH frames rather than as the
  // bare word, which is this lesson's own subject.
  const src = await import('../../../ealch-admin/scripts/data/possessifs-corpus.ts') as {
    OBJECT_PRONOUN_FRAMES: string[];
  };
  const surfaces = productionSurfaces();
  const hit = src.OBJECT_PRONOUN_FRAMES.filter((f) => surfaces.some((s) => s.toLowerCase().includes(f)));
  deepStrictEqual(hit, [], 'the object pronoun leur reached a production surface. That is a2.24 and a different word.');
});

/* ═══ The article slot ════════════════════════════════════════════════════ */

test('the article slot is taught, and no production surface holds an article before a possessive', { skip: noSeed }, async () => {
  const t = textOf('s17-slot');
  ok(t.length > 0, 's17-slot is gone');
  ok(/le mon livre|no le|stands where le/i.test(t), 's17-slot no longer states that a possessive replaces le');

  const src = await import('../../../ealch-admin/scripts/data/possessifs-corpus.ts') as {
    FORBIDDEN_FORMS: string[];
  };
  // Scoped to CORRECT FRENCH: the traps card and the quiz options have to SHOW
  // the error in order to teach it, so a scan over every string would fire on
  // the lesson doing its job.
  const correct: string[] = [
    ...seed.items.filter((i) => i.id >= OWNED_FROM && i.id <= OWNED_TO).map((i) => i.fr),
    ...(L!.sections.flatMap((s) => (s.type === 'commonErrors' ? s.errors.map((e) => e.right) : []))),
    ...(L!.sheets ?? []).flatMap((sh) => (sh.sections ?? []).flatMap((sec) =>
      (sec.type === 'cheatSheet' ? sec.rows.flatMap((r) => [r.k, r.say ?? '']) : []))),
    ...questions().flatMap((q) => [q.answer ?? '', ...(q.accept ?? [])]),
    ...(L!.sections.find((s) => s.type === 'roundup') as { points?: string[] } | undefined)?.points ?? [],
  ];
  const bad: string[] = [];
  for (const text of correct) {
    for (const f of src.FORBIDDEN_FORMS) if (hasWord(text, f)) bad.push(`"${f}" in "${text}"`);
  }
  deepStrictEqual(bad, [], 'an ungrammatical form is authored as correct French');
});

/* ═══ The neighbours keep their lessons ═══════════════════════════════════ */

test('no possessive pronoun appears anywhere', { skip: noSeed }, async () => {
  const src = await import('../../../ealch-admin/scripts/data/possessifs-corpus.ts') as {
    POSSESSIVE_PRONOUNS: string[];
  };
  const all = strings(L);
  const hit = src.POSSESSIVE_PRONOUNS.filter((w) => all.some((s) => hasWord(s, w)));
  deepStrictEqual(hit, [], 'le mien and la tienne are well beyond A1. This lesson teaches the adjective only.');
});

test('family-vocabulary teaching is left to a1.15', { skip: noSeed }, async () => {
  const src = await import('../../../ealch-admin/scripts/data/possessifs-lesson.ts') as {
    FAMILY_TEACHING: string[];
  };
  const surfaces = productionSurfaces();
  const hit = src.FAMILY_TEACHING.filter((w) => surfaces.some((s) => s.toLowerCase().includes(w)));
  deepStrictEqual(hit, [], 'family-vocabulary teaching found on a production surface. a1.15 owns it.');
});

test('a1.15 keeps its id range, and this lesson keeps its own', { skip: noSeed }, () => {
  // a1.15 landed at fr.a1.famille.235-252 while this lesson was being written,
  // on top of the range it had already been authored into. Every id here moved
  // by 18. This pins the outcome so a later renumber cannot walk back over it.
  const mine = seed.items.filter((i) => i.id >= OWNED_FROM && i.id <= OWNED_TO && i.id.startsWith('fr.a1.famille.'));
  strictEqual(mine.length, EXPECTED_AUTHORED, `expected ${EXPECTED_AUTHORED} authored rows in ${OWNED_FROM}..${OWNED_TO}`);
  const declared = new Set(L!.itemIds);
  const orphan = mine.filter((i) => !declared.has(i.id));
  deepStrictEqual(orphan.map((i) => i.id), [], 'authored row(s) in this lesson\'s range that the lesson does not declare');

  // And nothing of this lesson's reaches into a1.15's range.
  const theirs = L!.itemIds.filter((id) => id >= 'fr.a1.famille.235' && id <= 'fr.a1.famille.252');
  deepStrictEqual(theirs, [], 'this lesson declares id(s) inside a1.15\'s range');
});

/* ═══ Respellings, and the two blind spots ════════════════════════════════ */

test('every respelling passes the SHARED nasal checker', { skip: noSeed }, async () => {
  const src = await import('../../../ealch-admin/scripts/data/possessifs-corpus.ts') as {
    RESPELL: Record<string, { fr: string; respell: string }>;
  };
  const bad = Object.values(src.RESPELL).filter((d) => hasPlainNasalFor(d.fr, d.respell));
  deepStrictEqual(bad.map((d) => `${d.fr} ${d.respell}`), [], 'respelling(s) close a nasal with a plain n or m');
});

test('mon carries the superscript, and mon ami is NOT flagged', { skip: noSeed }, async () => {
  // THE TWO THE BRIEF ASKS FOR BY NAME, asserted as VERIFIED PASSING FORMS so
  // that a later "fix" goes red.
  //
  // The brief predicts a false positive on `mon ami`, because the n there is a
  // sounded liaison consonant rather than a nasal. MEASURED 2026-08-06: THERE IS
  // NO FALSE POSITIVE. The checker gets it right, because the superscript sits
  // on the nasal and the liaison n is respelled as the onset of the next
  // syllable where no vowel precedes it. Both halves are pinned here: the shape
  // that passes, and the shape that is flagged CORRECTLY.
  const src = await import('../../../ealch-admin/scripts/data/possessifs-corpus.ts') as {
    RESPELL: Record<string, { fr: string; respell: string }>;
  };
  strictEqual(src.RESPELL.mon.respell, '[MOHⁿ]', 'mon must carry the superscript nasal');
  strictEqual(hasPlainNasalFor('mon', 'MOHⁿ'), false, 'MOHⁿ should pass the checker');
  strictEqual(hasPlainNasalFor('mon', 'MOHN'), true, 'MOHN is a plain nasal and should be flagged');

  strictEqual(src.RESPELL['mon ami'].respell, '[mohⁿ-na-MEE]', 'mon ami must be respelled mohⁿ-na-MEE');
  strictEqual(
    hasPlainNasalFor('mon ami', 'mohⁿ-na-MEE'), false,
    'mon ami is NOT a false positive for hasPlainNasalFor. Do not write a workaround for a bug that is not there.',
  );
  strictEqual(
    hasPlainNasalFor('mon ami', 'mohn-na-MEE'), true,
    'mohn-na-MEE should be flagged, and correctly: the nasal is closed with a plain n.',
  );
});

test('the word-internal nasal blind spot is covered by name', { skip: noSeed }, async () => {
  // §3's FIRST blind spot, and the one that actually reaches this lesson.
  // hasPlainNasalFor needs the n or m to END a token, so `mohⁿ-NOHNKL` passes
  // every shared check while teaching a sound that is not in the word. Same
  // shape as a1.09's sep-TAHNBR and a1.13's oh-RAHNZH.
  const src = await import('../../../ealch-admin/scripts/data/possessifs-corpus.ts') as {
    RESPELL: Record<string, { fr: string; respell: string }>;
    NASAL_FORMS: string[];
    NOT_NASAL_FORMS: string[];
  };
  strictEqual(
    hasPlainNasalFor('mon oncle', 'mohⁿ-NOHNKL'), false,
    'the shared checker now catches a word-internal nasal. If so, §3 needs updating, not this lesson.',
  );
  const missing = src.NASAL_FORMS.filter((f) => !src.RESPELL[f]?.respell.includes('ⁿ'));
  deepStrictEqual(missing, [], 'form(s) with a genuine nasal vowel and no superscript');
  const over = src.NOT_NASAL_FORMS.filter((f) => src.RESPELL[f]?.respell.includes('ⁿ'));
  deepStrictEqual(over, [], 'form(s) with NO nasal vowel carrying a superscript, which teaches a sound that is not there');
});

test('the four respelling repairs are applied in the seed, on the rows this lesson displays', { skip: noSeed }, async () => {
  // ADDED AFTER MUTATION TESTING. Reverting fr.sons.mots-essentiels.093 to
  // `MOHN` in the seed left every other assertion in this file green: the parity
  // test compares the LESSON body and the nasal tests read the authored RESPELL
  // map, and neither of those is where the repaired value lives. So the learner
  // could have met `MOHⁿ` on a lesson card and `MOHN` in the flashcard hub with
  // nothing going red, which is precisely the contradiction the repair exists to
  // remove.
  const src = await import('../../../ealch-admin/scripts/data/possessifs-corpus.ts') as {
    RESPELL_REPAIRS: { id: string; fr: string; from: string; to: string }[];
  };
  const wrong: string[] = [];
  for (const r of src.RESPELL_REPAIRS) {
    const row = ITEMS.get(r.id);
    if (!row) continue; // a row outside the seed cut is repaired in Postgres only
    if (row.fr !== r.fr) { wrong.push(`${r.id}: expected "${r.fr}", seed says "${row.fr}"`); continue; }
    if (row.respell !== r.to) wrong.push(`${r.id} "${r.fr}": expected "${r.to}", seed says "${row.respell}"`);
  }
  deepStrictEqual(wrong, [], 'respelling repair(s) not applied in the seed. Re-run merge-possessifs-into-seed.ts.');

  // And the repaired values themselves pass the shared checker, so a repair can
  // never make a row worse than it was.
  const stillBroken = src.RESPELL_REPAIRS.filter((r) => hasPlainNasalFor(r.fr, r.to));
  deepStrictEqual(stillBroken.map((r) => `${r.fr} ${r.to}`), [], 'a repaired respelling still fails the nasal convention');
});

test('no U+203F tie reaches an authored surface', { skip: noSeed }, () => {
  // The tie renders as a low underscore on a Pixel 6 (invariant §2). This lesson
  // authors both halves of the mon ami / mon amie pair precisely so their
  // respellings are byte-identical; importing one with a tie would put a visible
  // difference beside a card saying they are the same word.
  const authored = seed.items.filter((i) => i.id >= OWNED_FROM && i.id <= OWNED_TO);
  const tied = authored.filter((i) => JSON.stringify(i).includes('‿'));
  deepStrictEqual(tied.map((i) => i.id), [], 'authored row(s) carrying a U+203F tie');
  const inLesson = strings(L).filter((s) => s.includes('‿'));
  deepStrictEqual(inLesson, [], 'the lesson body carries a U+203F tie');
});

/* ═══ The quiz ════════════════════════════════════════════════════════════ */

test('every quiz stem names BOTH the owner and the thing', { skip: noSeed }, () => {
  // THE DEFECT THAT MAKES A POSSESSIVE QUIZ UNANSWERABLE, and it is invisible to
  // every other check. « mon or ma? » has no right answer. « You want to say: my
  // sister » has exactly one.
  const OWNER_MARKERS = [
    'my', 'your', 'his', 'her', 'hers', 'our', 'their', 'whose',
    'marie', 'marc', 'somebody', 'you want to say', 'a class of', 'two parents',
    'the owner', 'who', 'speaker', 'a friend', 'politely', 'to a friend',
  ];
  const THING_MARKERS = [
    'father', 'mother', 'brother', 'sister', 'parents', 'daughter', 'daughters',
    'friend', 'friends', 'book', 'books', 'address', 'order', 'sœur', 'soeur',
    'frère', 'frere', 'père', 'pere', 'mère', 'mere', 'amie', 'ami', 'amis',
    'livre', 'commande', 'thing', 'noun', 'adresse', 'flat', 'possessive',
  ];
  const bad = questions().filter((q) => {
    const s = q.q.toLowerCase();
    return !OWNER_MARKERS.some((m) => s.includes(m)) || !THING_MARKERS.some((m) => s.includes(m));
  });
  deepStrictEqual(bad.map((q) => q.q), [], 'quiz stem(s) missing the owner or the thing');
});

test('no quiz option refers to a position, and none is duplicated', { skip: noSeed }, () => {
  // QuizDeckView shuffles the options of every closed question per question per
  // attempt, so a positional option is broken by design and a duplicate makes a
  // shuffled question genuinely ambiguous. This lesson is the most exposed on the
  // track: its entire answer space is fifteen short words.
  const POSITIONAL = ['the first', 'the second', 'the third', 'the last', 'both of the above',
    'all of the above', 'none of these', 'none of the above', 'the one above', 'the one below'];
  const positional: string[] = [];
  const dupes: string[] = [];
  for (const q of questions()) {
    for (const o of q.opts ?? []) {
      if (POSITIONAL.some((p) => o.toLowerCase().includes(p))) positional.push(`"${o}" in "${q.q}"`);
    }
    const seen = new Set<string>();
    for (const o of q.opts ?? []) {
      if (seen.has(o)) dupes.push(`"${o}" twice in "${q.q}"`);
      seen.add(o);
    }
  }
  deepStrictEqual(positional, [], 'quiz option(s) referring to a position');
  deepStrictEqual(dupes, [], 'quiz question(s) with a duplicate option');
});

test('the exam is at most half mcq, every question has a why and a resolving ref', { skip: noSeed }, () => {
  const qs = questions();
  const mcq = qs.filter((q) => (q.format ?? 'mcq') === 'mcq').length;
  ok(mcq * 2 <= qs.length, `${mcq}/${qs.length} questions are mcq, over the half ceiling`);
  deepStrictEqual(qs.filter((q) => !q.why).map((q) => q.q), [], 'quiz question(s) with no why');
  const ids = new Set(L!.sections.map((s) => (s as { id?: string }).id).filter(Boolean));
  deepStrictEqual(
    qs.filter((q) => !q.ref || !ids.has(q.ref)).map((q) => q.q), [],
    'quiz question(s) with no ref, or a ref naming a section that does not exist',
  );
});

test('every free-text question accepts the answer it displays', { skip: noSeed }, () => {
  // Through the REAL matchesAccept, not a copy of it.
  const bad = questions()
    .filter((q) => q.answer && !matchesAccept(q.answer, q.accept))
    .map((q) => `"${q.q}" shows "${q.answer}"`);
  deepStrictEqual(bad, [], 'question(s) that do not accept their own answer');
});

test('no free-text question turns on a capital letter', { skip: noSeed }, () => {
  // fold() lowercases, so no free-text format can test one. Both the a1.08 and
  // a1.09 briefs recommended errorSpot for a capital and both were wrong.
  const bad = questions().filter((q) => {
    if (q.format !== 'typeIn' && q.format !== 'errorSpot') return false;
    // DISTINCT strings first. An accept list that simply repeats the answer is
    // the normal shape and is not testing anything about case; a first draft of
    // this check missed that and fired on `vos parents`, whose answer and only
    // accepted form are the same two words.
    const distinct = [...new Set([q.answer ?? '', ...(q.accept ?? [])].filter(Boolean))];
    // More than one distinct spelling, all folding to the same lowercase string,
    // means the ONLY difference between them is case, which fold() erases.
    return distinct.length > 1 && new Set(distinct.map((a) => a.toLowerCase())).size === 1;
  });
  deepStrictEqual(bad.map((q) => q.q), [], 'free-text question(s) whose answer set differs only in case');
});

test('the authored answer spread stays inside the 40% cap', { skip: noSeed }, () => {
  // quiz-spread fails the build above 40% whatever the runtime shuffle does, and
  // with mon/ma as a recurring two-way answer this is very easy to breach.
  const closed = questions().filter((q) => typeof q.correct === 'number');
  const slots = new Map<number, number>();
  for (const q of closed) slots.set(q.correct as number, (slots.get(q.correct as number) ?? 0) + 1);
  const over = [...slots.entries()].filter(([, n]) => n / closed.length > 0.4);
  deepStrictEqual(
    over.map(([k, n]) => `slot ${k}: ${n}/${closed.length}`), [],
    'authored answer slot(s) over the 40% cap',
  );
});

/* ═══ Reachability: authored, valid, invisible ════════════════════════════ */

test('the spine is in order, and the acts partition it exactly', { skip: noSeed }, () => {
  deepStrictEqual(L!.sections.map((s) => (s as { id?: string }).id), SPINE, 'the section spine has moved');
  const claimed = (L!.acts ?? []).flatMap((a) => a.sections);
  deepStrictEqual(claimed, SPINE, 'the acts no longer cover the spine exactly once, in order');
  for (const [act, sections] of Object.entries(ACT_SECTIONS)) {
    deepStrictEqual(L!.acts?.find((a) => a.id === act)?.sections, sections, `${act} has changed shape`);
  }
});

test('exactly one quiz section, carrying rounds', { skip: noSeed }, () => {
  // lessonPager.logic.ts appends exactly one quiz page via
  // sections.find(s => s.type === 'quiz'). a1.01 shipped twelve questions in a
  // second quiz section and the pager rendered none of them.
  const quizzes = L!.sections.filter((s) => s.type === 'quiz');
  strictEqual(quizzes.length, 1, 'more than one quiz section: the pager renders the first and drops the rest');
  strictEqual((quizzes[0] as { rounds?: unknown[] }).rounds?.length, EXPECTED_ROUNDS);
});

test('every declared itemId resolves AND is on a screen', { skip: noSeed }, () => {
  // "Does this id resolve" is the wrong question. a1.08 shipped 43 itemIds that
  // resolved perfectly, were released to spaced repetition, and were drawn by
  // nothing.
  const unresolved = L!.itemIds.filter((id) => !ITEMS.has(id));
  deepStrictEqual(unresolved, [], 'declared itemId(s) that do not resolve in the seed');

  const shown = new Set<string>();
  const body = strings(L!.sections).join('\n');
  for (const id of L!.itemIds) {
    const it = ITEMS.get(id)!;
    if (body.includes(id) || body.includes(it.fr)) shown.add(id);
  }
  const invisible = L!.itemIds.filter((id) => !shown.has(id));
  deepStrictEqual(
    invisible, [],
    'declared itemId(s) that resolve but appear on no screen, by id or by text',
  );
});

test('the tranches release every taught item exactly once, and nothing untaught', { skip: noSeed }, () => {
  const tranches = L!.deckTranche ?? [];
  strictEqual(tranches.length, (L!.acts ?? []).length, 'one tranche per act, index-aligned');
  const flat = tranches.flat();
  const dupes = flat.filter((id, i) => flat.indexOf(id) !== i);
  deepStrictEqual([...new Set(dupes)], [], 'item(s) released by more than one tranche: the SRS would ask for two ratings');
  deepStrictEqual(
    L!.itemIds.filter((id) => !flat.includes(id)), [],
    'taught item(s) released by no tranche, so they never reach spaced repetition',
  );
  deepStrictEqual(
    flat.filter((id) => !L!.itemIds.includes(id)), [],
    'tranche(s) releasing item(s) the lesson does not teach',
  );
});

test('no tranche releases an item the acts before it have not shown', { skip: noSeed }, () => {
  // A card released before its mission is a card the learner is asked to rate
  // before they have met it.
  const acts = L!.acts ?? [];
  const tranches = L!.deckTranche ?? [];
  const problems: string[] = [];
  for (let i = 0; i < tranches.length; i += 1) {
    const seenText = acts.slice(0, i + 1)
      .flatMap((a) => a.sections)
      .map((id) => textOf(id))
      .join('\n');
    for (const id of tranches[i]) {
      const it = ITEMS.get(id);
      if (!it) continue;
      if (!seenText.includes(id) && !seenText.includes(it.fr)) {
        problems.push(`${acts[i].id} releases ${id} "${it.fr}" before any of its sections shows it`);
      }
    }
  }
  deepStrictEqual(problems, [], 'tranche(s) releasing an item early');
});

test('every drill is reachable, each the FIRST resolving target of exactly one round', { skip: noSeed }, () => {
  // drillForRound walks a round's targets and fires the drill of the FIRST one
  // that resolves, then stops. a1.05 shipped two drills named only in second
  // place and a first draft of a1.07 shipped a third.
  const drillFor = new Map((L!.errorTriggers ?? []).map((t) => [t.id, t.drill]));
  strictEqual((L!.errorTriggers ?? []).length, EXPECTED_TRIGGERS);
  const q = quizSection();
  const rounds = q && q.type === 'quiz' ? (q.rounds ?? []) : [];
  strictEqual(rounds.length, EXPECTED_ROUNDS);

  const leads: string[] = [];
  for (const r of rounds) {
    const lead = (r.targets ?? []).find((t) => drillFor.has(t));
    ok(lead, `round ${r.id} names no target that resolves to a drill`);
    ok(!leads.includes(lead!), `round ${r.id} leads on "${lead}", which another round already leads on`);
    leads.push(lead!);
  }
  const fired = new Set(leads.map((t) => drillFor.get(t)!));
  const teaching = (L!.drills ?? []).filter((d) => !d.id.startsWith('retest-'));
  deepStrictEqual(
    teaching.filter((d) => !fired.has(d.id)).map((d) => d.id), [],
    'drill(s) no quiz round can fire',
  );

  // And every drill that names corpus items names ones that resolve.
  const bad = (L!.drills ?? []).flatMap((d) => (d.items ?? []).filter((id) => !ITEMS.has(id)).map((id) => `${d.id}: ${id}`));
  deepStrictEqual(bad, [], 'drill(s) naming item ids that do not resolve');
});

test('every sheet section is a type ReferenceSheet.tsx actually draws', { skip: noSeed }, () => {
  // FOUND ON A DEVICE, and invisible to the whole suite until it was.
  //
  // A sheet renders a DIFFERENT and much smaller set of section types than the
  // lesson flow does. ReferenceSheet.tsx handles `teach`, `letterGrid` and
  // `table`, and its default branch draws the section TITLE and nothing else,
  // on purpose. So an authored `cheatSheet` in a sheet is a heading with
  // invisible rows under it: schema-valid, contract-valid, and drawn by
  // nothing. a1.13 ships two of them today.
  //
  // Read from the component rather than restated, so the day somebody adds a
  // case this test widens with them instead of going stale. Invariant §1: after
  // authoring any field, grep for a component that reads it.
  const src = readFileSync(resolve(here, '../components/ReferenceSheet.tsx'), 'utf8');
  const body = src.slice(src.indexOf('function SheetSection'));
  const drawn = new Set([...body.matchAll(/case\s+'([a-zA-Z]+)'/g)].map((m) => m[1]));
  ok(drawn.size >= 3, `only ${drawn.size} sheet section types parsed out of ReferenceSheet.tsx; the parse has drifted`);

  const authored = (L!.sheets ?? []).flatMap((sh) => (sh.sections ?? []).map((s) => ({
    sheet: sh.id, id: (s as { id?: string }).id, type: s.type,
  })));
  ok(authored.length > 0, 'the sheets declare no sections');
  const invisible = authored.filter((s) => !drawn.has(s.type));
  deepStrictEqual(
    invisible.map((s) => `${s.sheet}/${s.id} is a "${s.type}", which a sheet does not draw`), [],
    `a sheet section type with no reader. ReferenceSheet.tsx draws only: ${[...drawn].join(', ')}`,
  );
});

test('every sheetId resolves and every sheet is reachable', { skip: noSeed }, () => {
  const sheetIds = new Set((L!.sheets ?? []).map((s) => s.id));
  const linked = L!.sections.map((s) => (s as { sheetId?: string }).sheetId).filter(Boolean) as string[];
  deepStrictEqual([...new Set(linked)].filter((id) => !sheetIds.has(id)), [], 'sheetId(s) naming a sheet that does not exist');
  deepStrictEqual([...sheetIds].filter((id) => !linked.includes(id)), [], 'sheet(s) no section links to');
});

test('the reading glossary can actually underline every entry it declares', { skip: noSeed }, () => {
  // Through the REAL segmentSentence. Longest-match-first means an entry can be
  // shadowed out of existence by a longer one, and a1.08 shipped two that could
  // never underline anything. Compares matched KEYS, not matched text.
  const s = sectionById('s18-reading');
  ok(s && s.type === 'reading', 's18-reading is gone or is no longer a reading section');
  const r = s as { text: string; glossary?: { word: string }[]; questionsInModal?: boolean; questions?: unknown[] };
  ok(r.questionsInModal === true, 'reading without questionsInModal never reaches the glossary renderer');
  ok((r.questions ?? []).length > 0, 'reading with a glossary and no questions never renders the glossary');
  ok(!r.text.includes('\n'), 'an authored newline in a reading passage is silently discarded by PassagePage');

  const entries = r.glossary ?? [];
  ok(entries.length > 0, 'the reading glossary is empty');
  // segmentSentence takes a SET OF FOLDED KEYS, not the glossary array. Compare
  // matched KEYS rather than matched text: a1.08 shipped two entries that could
  // never underline anything and its own test passed because it compared text.
  const keys = new Set(entries.flatMap((g) => glossKeys(g.word)).filter(Boolean));
  const hit = new Set(segmentSentence(r.text, keys).filter((x) => x.key).map((x) => x.key!));
  const shadowed = entries.filter((g) => !glossKeys(g.word).some((k) => hit.has(k))).map((g) => g.word);
  deepStrictEqual(
    shadowed, [],
    'glossary entry(ies) that can never underline anything. Longest-match-first means a short entry sitting '
    + 'inside a longer one is shadowed out of existence.',
  );
});

test('commonErrors carries swipe, so it does not render blank', { skip: noSeed }, () => {
  // MissionSection renders commonErrors as its own swipe deck ONLY when `swipe`
  // is set; without it the section falls through to a path that drew a BLANK
  // screen on sons.08 m22 and a1.01 m5.
  const s = sectionById('s15-traps') as { swipe?: boolean; size?: string; errors?: unknown[] } | undefined;
  ok(s, 's15-traps is gone');
  strictEqual(s!.swipe, true, 'commonErrors without swipe renders a blank screen');
  strictEqual(s!.size, 'lg');
  ok((s!.errors ?? []).length >= 5, 's15-traps carries fewer than five traps');
});

test('a groupDrill control page carries items: [] explicitly and no size', { skip: noSeed }, () => {
  // An xl groupDrill must never stack words and a check in one group, and a
  // control page with no `items` key at all renders differently from one with an
  // empty array.
  const bad: string[] = [];
  for (const s of L!.sections) {
    if (s.type !== 'groupDrill') continue;
    if ((s as { size?: string }).size !== undefined) {
      bad.push(`${(s as { id?: string }).id} carries size, which caps every string at 12 words`);
    }
    for (const g of (s as { groups: { label: string; items?: unknown[] }[] }).groups) {
      if (g.items === undefined) bad.push(`${(s as { id?: string }).id}/${g.label} has no items key`);
    }
  }
  deepStrictEqual(bad, []);
});

test('no more than three term chips per section', { skip: noSeed }, () => {
  // The renderer shows three and collapses the rest. Seven sons.06 sections
  // declare more and that is known debt, not a precedent.
  const over = L!.sections
    .filter((s) => ((s as { terms?: string[] }).terms ?? []).length > 3)
    .map((s) => (s as { id?: string }).id);
  deepStrictEqual(over, [], 'section(s) declaring more than three term chips');
});

test('every term named by a section is defined', { skip: noSeed }, () => {
  const defined = new Set(Object.keys(L!.terms ?? {}));
  const named = new Set(L!.sections.flatMap((s) => (s as { terms?: string[] }).terms ?? []));
  deepStrictEqual([...named].filter((t) => !defined.has(t)), [], 'section(s) naming an undefined term');
  deepStrictEqual([...defined].filter((t) => !named.has(t)), [], 'term(s) no section surfaces');
});

test('no autoplay, and no imageRef', { skip: noSeed }, () => {
  ok(!JSON.stringify(L).includes('"autoplay"'), 'autoplay is declared in schema.ts and read by no component');
  // lesson-contract.test.ts does NOT check imageRef, despite a comment in
  // schema.ts claiming a publish-time check that is conditional on an asset
  // manifest which does not exist. An unregistered ref draws a blank box.
  const refs = strings(L).filter((s) => /^lessons\/[a-z0-9-]+\/[a-z0-9-]+\.(jpg|png|webp)$/i.test(s));
  deepStrictEqual(refs, [], 'imageRef(s) authored. Nothing validates them. Register the ref and write the assertion.');
});

/* ═══ The dictée and the speak mission ════════════════════════════════════ */

test('every dictée target is in LETTERS mode', { skip: noSeed }, () => {
  // Through the real dicteeMode. Word mode hands the learner each whole word as
  // a pre-spelled tile, so tapping `mon` is not choosing between mon and ma,
  // which is the entire subject of this lesson.
  const s = sectionById('s21-dictation') as { itemIds?: string[] } | undefined;
  ok(s, 's21-dictation is gone');
  const ids = s!.itemIds ?? [];
  ok(ids.length >= 5, 'the dictée names fewer than five lines');
  const wrong: string[] = [];
  const untagged: string[] = [];
  for (const id of ids) {
    const it = ITEMS.get(id);
    ok(it, `the dictée names ${id}, which does not resolve`);
    if (dicteeMode(it!.fr) !== 'letters') wrong.push(`${id} "${it!.fr}"`);
    if (!it!.drills.includes('dictation')) untagged.push(`${id} "${it!.fr}"`);
  }
  deepStrictEqual(wrong, [], 'dictée target(s) in WORD mode, where the learner taps a pre-spelled tile');
  deepStrictEqual(untagged, [], 'dictée target(s) with no dictation drill');
});

test('the speak mission names no bare possessive, and every line carries voiceflash', { skip: noSeed }, () => {
  // A bare possessive carries no information about the thing and the whole
  // lesson is about what follows it, so a speak mission on the fifteen headwords
  // would have the learner say fifteen words none of which can be right or wrong
  // on its own. The audio brief says the same about recording them.
  const s = sectionById('s22-speak') as { itemIds?: string[] } | undefined;
  ok(s, 's22-speak is gone');
  const ids = s!.itemIds ?? [];
  ok(ids.length > 0, 'the speak mission names no items');
  const bare = ids.filter((id) => THE_FIFTEEN.includes((ITEMS.get(id)?.fr ?? '').trim().toLowerCase()));
  deepStrictEqual(bare, [], 'the speak mission names bare possessive(s)');
  const noVoice = ids.filter((id) => !(ITEMS.get(id)?.drills ?? []).includes('voiceflash'));
  deepStrictEqual(noVoice, [], 'speak item(s) with no voiceflash drill, which render as unscoreable cards');
});

/* ═══ The scene, the scenario, and the corpus ═════════════════════════════ */

test('the scene has a choice, a break, and audio on every beat', { skip: noSeed }, () => {
  const s = sectionById('s01-scene');
  ok(s && s.type === 'scene', 's01-scene is gone or is no longer a scene');
  const beats = (s as { beats: { kind: string; size?: string; audio?: unknown; body?: string }[] }).beats;
  ok(beats.some((b) => b.kind === 'choice'), 'the scene has no choice beat, so the learner never commits');
  const brk = beats.find((b) => b.kind === 'break');
  ok(brk, 'the scene has no break beat');
  strictEqual(brk!.size, 'lg', 'the break must be lg');
  const words = (brk!.body ?? '').split(/\s+/).filter(Boolean).length;
  ok(words >= 24 && words <= 40, `the break body is ${words} words, outside the 24 to 40 the shipped scenes run`);
  const proseNoAudio = beats.filter((b) => b.kind !== 'choice' && b.kind !== 'resolve' && !b.audio);
  deepStrictEqual(proseNoAudio.map((b) => b.kind), [], 'scene beat(s) with no audio');
});

test('every scenario turn carries userEn and at least two alts', { skip: noSeed }, () => {
  const s = sectionById('s23-scenario');
  ok(s && s.type === 'scenario', 's23-scenario is gone');
  const turns = (s as { turns: { userEn?: string; alts?: unknown[]; user: string; ai: string }[] }).turns;
  const bad = turns.filter((t) => !t.userEn || (t.alts ?? []).length < 2);
  deepStrictEqual(bad.map((t) => t.user), [], 'scenario turn(s) with no userEn or fewer than two alts');
  // Straight apostrophes throughout: the suite fails a conversation mixing
  // straight and curly apostrophes in one bubble stack.
  const curly = turns.filter((t) => /[’]/.test(`${t.ai}${t.user}${t.userEn}`));
  deepStrictEqual(curly.map((t) => t.user), [], 'scenario turn(s) with a curly apostrophe');
});

test('no duplicate fr within the famille theme, computed the way flashhub does', { skip: noSeed }, () => {
  // flashhub-coverage.test.ts keys decks on `fr` per theme with the article
  // stripped, so two rows sharing an fr in one theme are one card served twice.
  // a1.15 authored `mon père`, `ma mère` and `mes parents` into this same theme
  // on the same afternoon, so this is the check that would catch a collision.
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
  deepStrictEqual(dupes, [], 'the same word twice in one theme');
});

test('no authored row joins a1.03 measured ending population', { skip: noSeed }, async () => {
  // Through the REAL endingPopulation. a1.11 added two feminine nouns in -e,
  // moved a1.03's count from 871 to 873 and turned a lesson nobody had touched
  // red. a1.15 had to withdraw `la personne` for the same reason.
  const { endingPopulation } = await import('./gender.logic.ts');
  const authored = seed.items.filter((i) => i.id >= OWNED_FROM && i.id <= OWNED_TO);
  const joined = endingPopulation(authored as never);
  deepStrictEqual(
    (joined as { id: string; fr: string }[]).map((i) => `${i.id} "${i.fr}"`), [],
    'authored row(s) joining a1.03\'s measured population. A possessive is not a noun and the grid nouns are imported.',
  );
});

/* ═══ House rules and the shared validators ═══════════════════════════════ */

test('the lesson passes validateLesson and the density validator', { skip: noSeed }, () => {
  deepStrictEqual(validateLesson(L!, L!.id), []);
  const issues = validateDensity(L!, new Set(seed.items.map((i) => i.id)));
  strictEqual(issues.length, 0, formatDensity(issues));
});

test('the reframe is authored the exact number of times, verbatim', { skip: noSeed }, () => {
  // Against an EXPLICIT CONSTANT. A count derived from the lesson compares the
  // content to itself and passes on any rewording.
  strictEqual(L!.reframe, REFRAME, 'the reframe has been reworded');
  const hits = strings(L).filter((s) => s.includes(REFRAME)).length;
  strictEqual(hits, REFRAME_APPEARANCES, `the reframe appears ${hits} times, expected ${REFRAME_APPEARANCES}`);
});

test('no em dash, no "honest", and no grammar jargon on a learner surface', { skip: noSeed }, () => {
  const body = JSON.stringify(L);
  ok(!body.includes('—'), 'em dash found in authored copy');
  ok(!/honest/i.test(body), 'the word "honest" is banned from authored content');
  const isIdentifier = (s: string) => !/\s/.test(s) && /^[a-z0-9][a-z0-9.\-_/]*$/i.test(s);
  const jargon = learnerFacing().filter((s) => !isIdentifier(s)
    && /\b(conjugaison|article (défini|indéfini|partitif)|adjectif|possessif|(?<!')accord|masculin|féminin|invariable|déterminant)\b/i.test(s));
  deepStrictEqual(jargon.slice(0, 3), [], 'grammar vocabulary reached an A1 learner');
});

test('the unit is bound, and the tag agrees with what the renderer computes', { skip: noSeed }, () => {
  const unit = seed.units.find((u) => u.id === 'a1.17');
  ok(unit, 'unit a1.17 is not in the seed');
  ok(unit!.lessonIds.includes('a1.17.l1'), 'unit a1.17 does not link this lesson');
  deepStrictEqual(unit!.themes, ['famille'], 'unit a1.17 has been rebound');
  // missions.ts derives the eyebrow at render time as `${level} · LEÇON
  // ${unit.seq}`. A stored tag that disagrees is the bug a1.03 shipped.
  strictEqual(L!.tag, `A1 · LEÇON ${String(unit!.seq).padStart(2, '0')}`);
  strictEqual(unit!.canDo, 'Can say whose things are whose with mon, ma, mes and their kin');
  strictEqual(unit!.sub, 'Adjectifs possessifs');
});

test('grammarAssumed credits a1.15 for the three words it already gave', { skip: noSeed }, () => {
  // a1.15 landed mid-build and taught mon, ma and mes as three frozen words.
  // Re-introducing them as new would tell a learner who has just used them that
  // they had not. This pins the reconciliation so a later edit cannot drop it.
  const assumed = (L!.grammarAssumed ?? []).join('\n');
  ok(/a1\.15/.test(assumed), 'grammarAssumed no longer credits a1.15');
  ok(/mon, ma and mes/.test(assumed), 'grammarAssumed no longer names the three words a1.15 gave');
  const intro = (L!.grammarIntroduced ?? []).join('\n');
  ok(/possessive adjectives/i.test(intro), 'grammarIntroduced no longer names the possessive adjectives');
});

/* ═══ Seed / source parity ════════════════════════════════════════════════ */

test('the seed copy matches the authored source, field for field', { skip: noSeed }, async () => {
  const src = await import('../../../ealch-admin/scripts/data/possessifs-lesson.ts') as {
    POSSESSIFS_LESSON: Lesson;
  };
  deepStrictEqual(
    JSON.parse(JSON.stringify(L)), JSON.parse(JSON.stringify(src.POSSESSIFS_LESSON)),
    'seed.json and possessifs-lesson.ts have drifted. Re-run merge-possessifs-into-seed.ts.',
  );
});

test('every authored corpus row in the seed matches the authored source', { skip: noSeed }, async () => {
  const src = await import('../../../ealch-admin/scripts/data/possessifs-corpus.ts') as {
    PARADIGM: { id: string; fr: string; en: string }[];
    CONTRASTS: { id: string; fr: string; en: string }[];
    AUTHORED_WORDS: { id: string; fr: string; en: string }[];
  };
  const authored = [...src.PARADIGM, ...src.CONTRASTS, ...src.AUTHORED_WORDS];
  strictEqual(authored.length, EXPECTED_AUTHORED, `the source authors ${authored.length} rows, expected ${EXPECTED_AUTHORED}`);
  for (const w of authored) {
    const row = ITEMS.get(w.id);
    ok(row, `${w.id} is authored in the source and absent from the seed`);
    strictEqual(row!.fr, w.fr, `${w.id}: seed "${row!.fr}" vs source "${w.fr}"`);
    strictEqual(row!.en, w.en, `${w.id}: gloss differs`);
  }
});
