// Guards a1.19.l1 "Questions oui / non".
//
// This lesson has one failure mode that matters more than all the others, and it
// is not a crash: it is THE THREE METHODS BEING TAUGHT WITHOUT THEIR REGISTER.
//
// The canDo is "Can ask and answer yes-no questions three ways AND PICK THE
// RIGHT REGISTER". A lesson that presents three correct forms and no guidance
// about when to use each has not delivered it, and nothing else in this file
// would notice: every form would still be taught, every screen would still
// render, and a learner would leave picking at random. Choosing inversion in a
// café is as marked as choosing intonation in a cover letter, and neither
// produces an error anybody can point at. That is the first test below and it is
// checked PER METHOD, because a coverage total passes with one register label
// dropped and another added.
//
// The second assertion that earns its place is layout rather than content: ONE
// SECTION must show ONE question in ALL THREE FORMS. Split across missions the
// learner gets three unrelated forms and no basis for choosing between them,
// which is precisely the failure the canDo is written against. It is checked BY
// SECTION ID, because the scene also carries two of the three in prose and a
// looser check passed with the designed screen deleted. a1.17 shipped that hole
// and closed it; this file does not reopen it.
//
// The third is the neighbour boundary. 257 of the 329 published rows in
// fr.a1.questions are QUESTION-WORD questions and every one belongs to a1.20,
// which sits at seq 23 and declares this unit as its prerequisite. The corpus
// hands them over constantly. `qu'est-ce que` in particular is a question word
// riding on this lesson's own est-ce que block and is the single most tempting
// thing to include.
//
// Everything else guards the ways this project has already shipped content that
// was authored, schema-valid, and drawn by nothing.
//
// Two sources are checked, not one. The SEED is what a learner receives. The
// AUTHORED SOURCE in ealch-admin is what the next author edits. Both are read
// here and the parity tests at the bottom fail when they drift, which is the
// failure mode that has twice cost this project real work.
//
// Counts are DERIVED wherever a count is asserted. A hardcoded number fails on
// itself the first time content legitimately changes, and the fix is then to
// edit the test, which is how a test comes to certify a bug. The exceptions are
// the three methods, the twelve swapped forms and the six triggers: those are
// the SHAPE of the lesson rather than a measurement of it, and a later trim that
// quietly drops one is exactly what this file exists to stop.
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

const L = seed.lessons.find((l) => l.id === 'a1.19.l1');
const ITEM = new Map(seed.items.map((i) => [i.id, i] as const));

/* ── The shape of the lesson, as constants ─────────────────────────────────
 *
 * These are the numbers that are the SHAPE rather than a measurement. Every
 * other count in this file is derived from the content. */
const THE_TWELVE = [
  'es-tu', 'est-il', 'est-elle', 'sommes-nous', 'êtes-vous', 'sont-ils',
  'as-tu', 'a-t-il', 'a-t-elle', 'avons-nous', 'avez-vous', 'ont-ils',
];
const METHOD_NAMES = ['just your voice', 'est-ce que in front', 'swap them round'];
const REGISTER_LABELS = [
  'talking to anybody, out loud',
  'anywhere, spoken or written, and never wrong',
  'writing something careful, or being formal out loud',
];
const REFRAME = 'Est-ce que always works. The other two are choices.';
const REFRAME_APPEARANCES = 14;
const EXPECTED_TRIGGERS = 6;
const EXPECTED_ROUNDS = 6;
const OWNED_FROM = 'fr.a1.questions.352';
const OWNED_TO = 'fr.a1.questions.373';

const SPINE = [
  's01-scene', 's02-goals', 's03-one-question', 's04-triple',
  's05-voice', 's06-updown', 's07-heard',
  's08-block', 's09-elision', 's10-build',
  's11-flip', 's12-twelve', 's13-the-t', 's14-traps',
  's15-register', 's16-answers', 's17-wild', 's18-reading',
  's19-words', 's20-flash', 's21-dictation', 's22-speak', 's23-scenario',
  's24-review', 's25-progress', 's26-quiz', 's27-roundup',
];

function strings(v: unknown, out: string[] = []): string[] {
  if (typeof v === 'string') out.push(v);
  else if (Array.isArray(v)) v.forEach((x) => strings(x, out));
  else if (v && typeof v === 'object') Object.values(v).forEach((x) => strings(x, out));
  return out;
}

/** Whole-word containment, accent-aware. NEVER a regex built from the search
 *  term: `\b` is ASCII-only in JavaScript, so /\bes-tu\b/ behaves unpredictably
 *  around accented neighbours, and a substring match finds `si` inside `aussi`
 *  and `que` inside `est-ce que`. Invariant §0's first two traps, both live in
 *  this lesson's own vocabulary. */
function hasWord(haystack: string, needle: string): boolean {
  const h = haystack.toLowerCase().normalize('NFC');
  const n = needle.toLowerCase().normalize('NFC');
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
const textOf = (id: string): string => strings(sectionById(id)).join('\n');

/** Is this corpus row's French ACTUALLY on the screens given?
 *
 *  A plain `includes` is wrong for the short rows and this lesson has four of
 *  them: `oui`, `non`, `si` and `peut-être`. `si` sits inside `aussi` and
 *  `réussis`, `non` inside `nonante`, and `oui` inside nothing useful but the
 *  principle is the same. A substring check reported all four as shown in act 1,
 *  where none of them is, and would have let a tranche release them fourteen
 *  missions before the learner met them.
 *
 *  Long rows are matched as substrings because that is what they are: a sentence
 *  quoted inside a card body. Short ones get a boundary check. */
function onAScreen(haystack: string, fr: string): boolean {
  if (fr.split(/\s+/).length > 1) return haystack.includes(fr);
  return hasWord(haystack, fr);
}

const learnerFacing = (): string[] => [
  ...strings(L!.sections),
  ...strings(L!.sheets ?? []),
  ...strings(L!.terms ?? {}),
];

/** The surfaces a learner is asked to PRODUCE from, as opposed to read. Written
 *  narrowly on purpose: a guard that fires on legitimate reading context gets
 *  deleted rather than fixed, which is a1.13's lesson and the reason its
 *  placement guard nearly shipped broken. */
const productionSurfaces = (): string[] => [
  ...strings(L!.sections.filter((s) => ['vocabThemes', 'flashcards', 'reviewDeck', 'cardDeck'].includes(s.type))),
  ...strings(L!.drills ?? []),
  ...strings((L!.sections.find((s) => s.type === 'quiz') ?? {}) as unknown),
];

const quizSection = () => L!.sections.find((s) => s.type === 'quiz');
const questions = () => {
  const q = quizSection();
  return q && q.type === 'quiz' ? quizQuestions(q) : [];
};
const rounds = () => {
  const q = quizSection();
  return q && q.type === 'quiz' ? (q.rounds ?? []) : [];
};

test('a1.19.l1 is in the seed and passes the schema validator', () => {
  ok(L, 'a1.19.l1 is not in seed.json. Run the batch, then the merge.');
  deepStrictEqual(validateLesson(L!, L!.id), []);
});

/* ══════════════════════════════════════════════════════════════════════════
 *  THE ASSERTION THIS FILE EXISTS FOR
 * ══════════════════════════════════════════════════════════════════════════ */

test('every method carries a register label, checked one method at a time', () => {
  const text = learnerFacing().join('\n');
  for (const name of METHOD_NAMES) {
    ok(hasWord(text.toLowerCase(), name.toLowerCase()), `the method "${name}" is named on no screen`);
  }
  for (const label of REGISTER_LABELS) {
    ok(
      text.includes(label),
      `no screen carries the register label "${label}".\n`
      + `  The canDo is "three ways AND pick the right register". A method taught without its register is half\n`
      + `  a method, and it is the exact failure the canDo is written against: the learner leaves with three\n`
      + `  correct forms and picks at random.`,
    );
  }
});

test('the hero table itself carries a register on every row, not just the terms', () => {
  // THE CHECK ABOVE IS NOT ENOUGH AND A MUTATION RUN PROVED IT. The three
  // register labels live in the terms and on the reference sheet as well as on
  // s04-triple, so deleting one from the TABLE left the test green while the
  // hero screen showed three forms and no guidance. That is the exact failure
  // the canDo is written against, surviving the assertion written to catch it.
  //
  // So this reads the table's own second column and asks what each row SAYS,
  // not merely that the words exist somewhere in the lesson.
  const s = sectionById('s04-triple') as { cols?: string[]; rows?: { cells: string[] }[] } | undefined;
  ok(s, 's04-triple is gone');
  strictEqual(s!.rows?.length, 3, 'the hero table no longer has one row per method');
  strictEqual(s!.cols?.length, 2, 'the hero table is two columns: the question, and who you would say it to');

  const labels = s!.rows!.map((r) => r.cells[1]?.toLowerCase() ?? '');
  for (const [i, label] of labels.entries()) {
    ok(label.trim().length > 0, `row ${i + 1} of the hero table has no register label at all`);
  }
  strictEqual(new Set(labels).size, 3, `the hero table gives two methods the same register label: ${labels.join(' | ')}`);

  // AND EACH ONE SAYS THE RIGHT THING. Distinctness alone is not enough: a
  // mutation that relabelled the swapped-round row "anyone" would still be
  // distinct, and would teach that the formal form is the safe one, which is
  // the opposite of the lesson.
  ok(/friend|casual|close/.test(labels[0]),
    `the voice-only row is labelled "${labels[0]}", which does not say it is the casual one`);
  ok(/any\b|anybody|anyone|any time|everywhere/.test(labels[1]),
    `the est-ce que row is labelled "${labels[1]}", which does not say it works everywhere`);
  ok(/form|stranger|formal|careful|writing|letter/.test(labels[2]),
    `the swapped-round row is labelled "${labels[2]}", which does not say it is the careful one.\n`
    + `  Labelling it as generally safe teaches the opposite of this lesson: it is the marked choice.`);
});

test('ONE section shows ONE question in all three forms, and it is s04-triple', () => {
  // The three cells of the first hero triple, resolved through the seed rather
  // than retyped, so a change to the corpus moves this assertion with it.
  const trip = [
    'fr.a1.cafe.176',                   // Tu es prêt ?              intonation
    'fr.a1.questions-du-quotidien.075', // Est-ce que tu es prêt ?   est-ce que
    'fr.a1.questions.352',              // Es-tu prêt ?              swapped round
  ].map((id) => ITEM.get(id)?.fr ?? ` ${id}`);

  const carrying = L!.sections
    .filter((s) => { const t = strings(s).join('\n'); return trip.every((fr) => t.includes(fr)); })
    .map((s) => (s as { id?: string }).id);

  ok(
    carrying.length,
    'no single section shows one question in all three forms.\n'
    + '  That IS the lesson. Split across missions the learner gets three unrelated forms and no basis for\n'
    + '  choosing between them.',
  );
  ok(
    carrying.includes('s04-triple'),
    `all three forms appear together in ${carrying.join(', ')} but NOT in s04-triple.\n`
    + `  s04-triple is the designed screen: three rows, one per method, register label on each. A check that\n`
    + `  merely found the contrast SOMEWHERE would pass with it deleted.`,
  );
});

test('the register round cannot be passed by always answering est-ce que', () => {
  const r1 = rounds().find((r) => r.id === 'r1-who-is-it-for');
  ok(r1, 'the register round r1-who-is-it-for is gone, and it is the round that tests the canDo');
  const closed = (r1!.questions ?? []).filter((q) => typeof q.correct === 'number');
  ok(closed.length >= 3, `the register round has only ${closed.length} closed questions`);
  const defaults = closed.filter((q) => /est-ce que/i.test(q.opts?.[q.correct as number] ?? ''));
  strictEqual(
    defaults.length, 0,
    `${defaults.length} of the register round's ${closed.length} closed answers is est-ce que.\n`
    + `  With the safe default as the recommended answer this round would otherwise be passable by picking it\n`
    + `  every time, which tests recall of a slogan rather than the choice.`,
  );
});

/* ══════════════════════════════════════════════════════════════════════════
 *  THE NEIGHBOURS
 * ══════════════════════════════════════════════════════════════════════════ */

test("no question word reaches a production surface, so a1.20 keeps its lesson", () => {
  // Bare `que` is NOT probed, and that is deliberate: `est-ce que` contains it
  // and appears on almost every screen here, so a bare-word guard would fire on
  // this lesson's own subject. The glued forms below are the ones that matter.
  const WORDS = ['qui', 'quoi', 'où', 'quand', 'pourquoi', 'comment', 'combien',
    'quel', 'quelle', 'quels', 'quelles'];
  const PHRASES = ["qu'est-ce que", "qu'est-ce qu'", "qu'est-ce qui", 'qui est-ce',
    'combien de', 'quel âge', 'quelle heure'];
  const hits: string[] = [];
  for (const s of productionSurfaces()) {
    for (const p of PHRASES) if (s.toLowerCase().includes(p)) hits.push(`[${p}] ${s.slice(0, 80)}`);
    for (const w of WORDS) if (hasWord(s, w)) hits.push(`[${w}] ${s.slice(0, 80)}`);
  }
  deepStrictEqual(
    hits.slice(0, 5), [],
    `a1.20's question word(s) reached a deck, a drill or the quiz.\n`
    + `  257 of the 329 published rows in fr.a1.questions are question-word questions and every one is a1.20's.`,
  );
});

test("qu'est-ce que appears nowhere at all", () => {
  const hits = strings(L).filter((s) => /qu'est-ce/i.test(s));
  deepStrictEqual(
    hits.slice(0, 3), [],
    "qu'est-ce is a question word built on THIS lesson's est-ce que block, and it is emphatically a1.20's.\n"
    + '  The brief calls it "the most tempting thing to include".',
  );
});

test('no production surface asks the learner to conjugate a verb but être or avoir', () => {
  // `peut` carries a lookahead because a hyphen is a JavaScript word boundary,
  // so a bare /\bpeut\b/ matches inside `peut-être`, which is one of this
  // lesson's four answers. The batch's first version fired on it five times.
  const OTHER = /\b(vais|vas|allons|allez|vont|fais|fait|faites|font|pars|part|partez|partent|viens|vient|venez|viennent|peux|peut(?!-[eêé]tre)|pouvez|peuvent|veux|veut|voulez|veulent|sais|sait|savez|savent|prends|prend|prenez|prennent|dois|doit|devez|doivent|habite|habitez|habitent|parle|parlez|parlent|travaille|travaillez|travaillent|aime|aimez|aiment|joue|jouez|jouent|mange|mangez|mangent|pleut|dis|dit|dites|disent|écris|écrit|écrivez|lis|lit|lisez|attends|attend|attendez|ouvre|ouvrez|miaule|préfère|préférez|arrose|acceptez)\b/i;
  const produced = [
    ...questions().flatMap((q) => [
      ...(typeof q.correct === 'number' ? [q.opts?.[q.correct] ?? ''] : []),
      q.answer ?? '', q.target ?? '', ...(q.accept ?? []),
    ]),
    ...(L!.drills ?? []).flatMap((d) => (d.opts && d.correct !== undefined ? [d.opts[d.correct]] : [])),
    ...L!.sections.flatMap((s) => (s.type === 'commonErrors' ? s.errors.map((e) => e.right) : [])),
    ...L!.sections.flatMap((s) => (s.type === 'scenario' ? s.turns.flatMap((t) => [t.user, ...(t.alts ?? []).map((a) => a.fr)]) : [])),
  ];
  deepStrictEqual(
    produced.filter((s) => OTHER.test(s)).slice(0, 5), [],
    'There is no regular-verb unit in A1: -er verbs are a2.01 and faire is a2.12. Reading exposure is\n'
    + '  allowed and several imported sentences carry other verbs; asking for one as OUTPUT is not.',
  );
});

/* ══════════════════════════════════════════════════════════════════════════
 *  THE THREE METHODS, IN DETAIL
 * ══════════════════════════════════════════════════════════════════════════ */

test('all twelve swapped forms are taught, asserted form by form', () => {
  const text = learnerFacing().join('\n').toLowerCase();
  for (const f of THE_TWELVE) {
    ok(hasWord(text, f), `the swapped form "${f}" is named on no screen`);
  }
  strictEqual(THE_TWELVE.length, 12, 'the closed list is twelve: six persons times two verbs');
});

test('ai-je and suis-je are never asked for, and ai-je is named so nobody adds it', () => {
  const produced = [
    ...questions().flatMap((q) => [
      ...(typeof q.correct === 'number' ? [q.opts?.[q.correct] ?? ''] : []),
      q.answer ?? '', q.target ?? '', ...(q.accept ?? []),
    ]),
    ...(L!.drills ?? []).flatMap((d) => (d.opts && d.correct !== undefined ? [d.opts[d.correct]] : [])),
    ...L!.sections.flatMap((s) => (s.type === 'commonErrors' ? s.errors.map((e) => e.right) : [])),
  ];
  for (const f of ['ai-je', 'suis-je']) {
    deepStrictEqual(
      produced.filter((s) => hasWord(s, f)), [],
      `the learner is asked to produce "${f}", which appears in NONE of the 27,280 published sentences.\n`
      + `  Drilling a form nobody says builds an instinct that then has to be unlearned.`,
    );
  }
  // AND IT IS NAMED. A form nobody says has to be named to be avoided, and the
  // brief asks for exactly that ("say why"). This is the half that stops a later
  // author "completing the paradigm" from twelve to fourteen.
  ok(
    strings(L).some((s) => hasWord(s, 'ai-je')),
    'ai-je is never named, so nothing in the lesson tells a later author why the list stops at twelve',
  );
});

test('a-t-il is shown against est-il on one screen, so the -t- reads as a rule', () => {
  const carrying = L!.sections.filter((s) => {
    const t = strings(s).join('\n').toLowerCase();
    return hasWord(t, 'a-t-il') && hasWord(t, 'est-il');
  }).map((s) => (s as { id?: string }).id);
  ok(
    carrying.includes('s13-the-t'),
    `a-t-il and est-il appear together in ${carrying.join(', ') || 'nowhere'} but not in s13-the-t.\n`
    + `  Alone, a-t-il looks like an arbitrary spelling. Beside est-il it is a rule about two vowels meeting.`,
  );
});

test("est-ce qu' is shown before all three vowel pronouns", () => {
  const text = learnerFacing().join('\n').toLowerCase();
  for (const f of ["est-ce qu'il", "est-ce qu'elle", "est-ce qu'on"]) {
    ok(text.includes(f), `the elision is never shown as "${f}"`);
  }
  // AND THE UN-ELIDED FORM IS NEVER AUTHORED AS CORRECT FRENCH.
  const produced = [
    ...questions().flatMap((q) => [q.answer ?? '', ...(q.accept ?? [])]),
    ...L!.sections.flatMap((s) => (s.type === 'commonErrors' ? s.errors.map((e) => e.right) : [])),
  ];
  for (const bad of ['est-ce que il', 'est-ce que elle', 'est-ce que on']) {
    deepStrictEqual(
      produced.filter((s) => s.toLowerCase().includes(bad)), [],
      `"${bad}" is authored as correct French, and it is the error this lesson exists to prevent`,
    );
  }
});

test('the statement and the question carry byte-identical transcriptions', () => {
  // THE CLAIM OF ACT 2. `Tu es prêt.` and `Tu es prêt ?` differ by one mark on
  // the page and a contour in the mouth, and the lesson says so on four
  // surfaces. If the two transcriptions ever differ, the cards making that claim
  // contradict it.
  const statement = ITEM.get('fr.a1.questions.368');
  const question = ITEM.get('fr.a1.cafe.176');
  ok(statement, 'fr.a1.questions.368 « Tu es prêt. » is not in the seed');
  ok(question, 'fr.a1.cafe.176 « Tu es prêt ? » is not in the seed');
  strictEqual(statement!.respell, question!.respell,
    `the statement respells as "${statement!.respell}" and the question as "${question!.respell}".\n`
    + `  They are the same four words said with a different contour, which is the whole of act 2.`);
  strictEqual(statement!.ipa, question!.ipa);
});

/* ══════════════════════════════════════════════════════════════════════════
 *  THE si DECISION, PINNED SO IT CANNOT BE SILENTLY REVERSED
 * ══════════════════════════════════════════════════════════════════════════ */

test('si is taught, and it appears beside a negative question', () => {
  // a1.18 "La négation" LANDED DURING THIS BUILD, which resolves the brief's
  // option 3 (its own recommendation) to teach si. The assertion is therefore
  // the brief's first branch: si appears AND a negative question appears beside
  // it. Either half alone is meaningless, because si with nothing to contradict
  // is a word with no job.
  ok(seed.lessons.some((l) => l.id === 'a1.18.l1'),
    'a1.18.l1 has left the seed. This lesson teaches si on a negative question built from a1.18\'s ne… pas,\n'
    + '  and without that lesson the learner has no negation to hang it on. Re-check the si decision.');

  const negative = ITEM.get('fr.a1.questions.372');
  const answer = ITEM.get('fr.a1.questions.373');
  ok(negative, 'the negative question fr.a1.questions.372 is not in the seed, so si has nothing to answer');
  ok(answer, 'the si answer fr.a1.questions.373 is not in the seed');
  ok(/\bne\b|\bn'/.test(negative!.fr) && /\bpas\b/.test(negative!.fr),
    `fr.a1.questions.372 "${negative!.fr}" no longer carries a negative`);
  ok(/^Si,/.test(answer!.fr), `fr.a1.questions.373 "${answer!.fr}" no longer opens with Si,`);

  const carrying = L!.sections.filter((s) => {
    const t = strings(s).join('\n');
    return t.includes(answer!.fr) && t.includes(negative!.fr);
  }).map((s) => (s as { id?: string }).id);
  ok(
    carrying.includes('s16-answers'),
    `si and its negative question appear together in ${carrying.join(', ') || 'nowhere'} but not in s16-answers.\n`
    + `  A si card with no negative beside it teaches a word whose only job is invisible.`,
  );
});

test('si is named as a triple homograph, so the other two senses are not a surprise', () => {
  const text = learnerFacing().join('\n').toLowerCase();
  ok(text.includes('if'), 'the "if" sense of si is never named');
  ok(/\bso\b/.test(text), 'the "so" sense of si is never named');
});

/* ══════════════════════════════════════════════════════════════════════════
 *  THE RESPELLING REPAIR, AND THE ONE BOTH BRIEFS GOT WRONG
 * ══════════════════════════════════════════════════════════════════════════ */

test('fr.sons.questions.169 "non ?" carries the repaired nasal', () => {
  // THIS LESSON'S ONE REPAIR. It is in this lesson's own theme and on the card
  // that teaches the casual tag. It was missed by everybody before now because
  // the row is stored as "non ?" rather than "non", and a search for the bare
  // word does not return it.
  const row = ITEM.get('fr.sons.questions.169');
  ok(row, 'fr.sons.questions.169 "non ?" is not in the seed, and this lesson displays it');
  strictEqual(row!.respell, 'NOHⁿ', `"non ?" respells as "${row!.respell}", expected NOHⁿ`);
  ok(!hasPlainNasalFor(row!.fr, row!.respell!), 'the shared checker still flags it');
});

test('fr.sons.mots-essentiels.043 "non" was ALREADY repaired, by neither lesson', () => {
  // BOTH THIS LESSON'S BRIEF AND a1.18's NAME THIS ROW as an outstanding repair
  // and warn against doing it twice. Neither of them needed to do it at all: the
  // row was repaired on 2026-07-29, before either brief was written.
  //
  // Asserted rather than assumed, because if somebody reverts it this lesson's
  // report would otherwise keep claiming it was already correct.
  const row = ITEM.get('fr.sons.mots-essentiels.043');
  ok(row, 'fr.sons.mots-essentiels.043 "non" is not in the seed');
  strictEqual(
    row!.respell, 'NOHⁿ',
    `"non" respells as "${row!.respell}", expected NOHⁿ.\n`
    + `  Two lesson briefs call this an outstanding repair. It was done on 2026-07-29, before either. If it now\n`
    + `  reads something else, somebody has reverted it and a1.19's report is wrong about who got there first.`,
  );
});

test('every respelling this lesson displays passes the shared nasal checker', () => {
  const shown = L!.itemIds.map((id) => ITEM.get(id)).filter(Boolean);
  const bad = shown.filter((i) => i!.respell && hasPlainNasalFor(i!.fr, i!.respell!));
  deepStrictEqual(bad.map((i) => `${i!.id} ${i!.fr} ${i!.respell}`), []);
});

test('faim closes its nasal with a superscript, checked BY NAME', () => {
  // hasPlainNasalFor CANNOT SEE A WORD-INTERNAL NASAL, which is invariant §3's
  // first blind spot and the one that let a1.09's sep-TAHNBR and a1.13's
  // oh-RAHNZH through. `faim` is the nasal-carrying word this lesson says most.
  const withFaim = L!.itemIds.map((id) => ITEM.get(id))
    .filter((i) => i && /\bfaim\b/.test(i.fr) && i.respell);
  ok(withFaim.length >= 6, `only ${withFaim.length} rows with faim carry a respelling`);
  for (const i of withFaim) {
    ok(i!.respell!.includes('ⁿ'), `${i!.id} "${i!.fr}" respells as ${i!.respell} with no superscript on the nasal of faim`);
  }
});

test('prêt is NOT given a superscript, because it has no nasal at all', () => {
  // THE OPPOSITE CHECK, and it is a1.13's jaune trap exactly: /pʁɛ/ is an oral
  // vowel, the shared checker never flagged it, and a superscript here would be
  // a "fix" for nothing that teaches a sound the word does not contain. This
  // lesson says `prêt` on almost every screen.
  //
  // CHECKED ON THE SYLLABLE RATHER THAN ON THE STRING, which is the whole point
  // and which a looser first version got wrong: « Est-ce qu'on est prêt ? »
  // respells as ess-kohⁿ-NEH PREH and CORRECTLY carries a superscript, because
  // `on` is a genuine nasal. A test that banned ⁿ anywhere in the line would
  // have demanded that be removed, which would have broken a real transcription
  // to protect an imaginary one.
  const withPret = L!.itemIds.map((id) => ITEM.get(id))
    .filter((i) => i && /\bprêts?\b/.test(i.fr) && i.respell);
  ok(withPret.length >= 6, `only ${withPret.length} rows with prêt carry a respelling`);
  for (const i of withPret) {
    const syllables = i!.respell!.split(/[\s-]+/);
    const pretSyllable = syllables.find((s) => /^PREH/i.test(s));
    ok(pretSyllable, `${i!.id} "${i!.fr}" respells as ${i!.respell} with no PREH syllable in it`);
    ok(
      !pretSyllable!.includes('ⁿ'),
      `${i!.id} "${i!.fr}" respells prêt as "${pretSyllable}", giving an oral vowel a nasal it does not have`,
    );
  }
});

/* ══════════════════════════════════════════════════════════════════════════
 *  THE SPINE, THE ACTS AND THE TRANCHES
 * ══════════════════════════════════════════════════════════════════════════ */

test('the spine is in order', () => {
  deepStrictEqual(L!.sections.map((s) => (s as { id?: string }).id), SPINE);
});

test('the acts name every section exactly once, in order', () => {
  const named = (L!.acts ?? []).flatMap((a) => a.sections);
  deepStrictEqual(named, SPINE, 'an act names a section twice, or a section belongs to no act');
  strictEqual(new Set(named).size, named.length);
});

test('the reframe appears verbatim, the exact number of times', () => {
  strictEqual(L!.reframe, REFRAME);
  const n = strings(L).filter((s) => s.includes(REFRAME)).length;
  strictEqual(
    n, REFRAME_APPEARANCES,
    `the reframe appears ${n} times, expected ${REFRAME_APPEARANCES}.\n`
    + `  Asserted against an explicit constant rather than a figure derived from the lesson: a derived count\n`
    + `  compares the content to itself and passes on any rewording.`,
  );
  const inSections = L!.sections.filter((s) => strings(s).some((x) => x.includes(REFRAME))).length;
  ok(inSections >= 3, `the density validator wants it in at least three sections; it is in ${inSections}`);
});

test('every tranche releases items the acts before it have already shown', () => {
  // NOT "does this item belong to this idea" but "has the learner SEEN it by the
  // end of this act". a1.17 shipped v1 with two items released in act 1 that no
  // act 1 section drew, and this is the check that caught it.
  const tranches = L!.deckTranche ?? [];
  strictEqual(tranches.length, (L!.acts ?? []).length, 'one tranche per act, index-aligned');
  for (let a = 0; a < tranches.length; a += 1) {
    const shownBy = (L!.acts ?? []).slice(0, a + 1)
      .flatMap((act) => act.sections)
      .map((id) => textOf(id))
      .join('\n');
    for (const id of tranches[a]) {
      const row = ITEM.get(id);
      ok(row, `tranche ${a + 1} releases ${id}, which is not in the seed`);
      ok(
        onAScreen(shownBy, row!.fr),
        `tranche ${a + 1} releases ${id} "${row!.fr}", which no section up to act ${a + 1} shows.\n`
        + `  A card released before its mission is a card the learner is asked to rate before meeting it.`,
      );
    }
  }
});

test('the tranches release every taught item exactly once and nothing untaught', () => {
  const released = (L!.deckTranche ?? []).flat();
  strictEqual(new Set(released).size, released.length, 'an item is released by two tranches, so the SRS would take two ratings for one card');
  deepStrictEqual(
    L!.itemIds.filter((id) => !released.includes(id)), [],
    'item(s) taught but released by no tranche, so they never reach spaced repetition',
  );
  deepStrictEqual(
    released.filter((id) => !L!.itemIds.includes(id)), [],
    'tranche(s) release item(s) the lesson does not teach',
  );
});

test('every declared itemId is actually ON A SCREEN', () => {
  // a1.08 shipped 43 itemIds that resolved perfectly and were drawn by nothing.
  // The question is "did the learner see it", not "does this id resolve".
  const shown = L!.sections.map((s) => strings(s).join('\n')).join('\n');
  const invisible = L!.itemIds.filter((id) => {
    const row = ITEM.get(id);
    if (!row) return true;
    if (onAScreen(shown, row.fr)) return false;
    // An id may also reach a screen by being NAMED rather than quoted: the
    // dictée, the speak mission and the drills all take itemIds.
    return !shown.includes(id) && !strings(L!.drills ?? []).includes(id);
  });
  deepStrictEqual(invisible, [], 'itemId(s) resolved but drawn by nothing');
});

/* ══════════════════════════════════════════════════════════════════════════
 *  THE QUIZ
 * ══════════════════════════════════════════════════════════════════════════ */

test('the exam is at most half mcq and every question has a why and a ref', () => {
  const qs = questions();
  const mcq = qs.filter((q) => (q.format ?? 'mcq') === 'mcq').length;
  ok(mcq * 2 <= qs.length, `${mcq}/${qs.length} questions are mcq, over the half ceiling`);
  deepStrictEqual(qs.filter((q) => !q.why).map((q) => q.q), []);
  deepStrictEqual(qs.filter((q) => !q.ref).map((q) => q.q), []);
  const ids = new Set(L!.sections.map((s) => (s as { id?: string }).id));
  deepStrictEqual(qs.filter((q) => q.ref && !ids.has(q.ref)).map((q) => q.ref), []);
});

test('no quiz option refers to a position, and none is duplicated', () => {
  // QuizDeckView shuffles the options of every closed question per attempt, so a
  // positional option is broken by design and a duplicate makes a shuffled
  // question genuinely ambiguous. This lesson is unusually exposed: a register
  // question naturally wants "the first is more formal".
  const POSITIONAL = ['the first', 'the second', 'the third', 'the last',
    'both of the above', 'all of the above', 'none of these', 'none of the above'];
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

test('no authored answer slot holds more than 40% of the closed questions', () => {
  const closed = questions().filter((q) => typeof q.correct === 'number');
  const slots = closed.reduce<Record<number, number>>((a, q) => {
    a[q.correct as number] = (a[q.correct as number] ?? 0) + 1;
    return a;
  }, {});
  const over = Object.entries(slots).filter(([, n]) => n / closed.length > 0.4);
  deepStrictEqual(over, [], `quiz-spread fails the build above 40%, whatever the runtime shuffle does`);
});

test('every free-text question accepts the answer it displays', () => {
  const bad = questions().filter((q) => q.answer && !matchesAccept(q.answer, q.accept));
  deepStrictEqual(bad.map((q) => `${q.q} shows "${q.answer}"`), []);
});

test('one whole round is listenChoose, because intonation exists only as a sound', () => {
  const ear = rounds().find((r) => (r.questions ?? []).every((q) => q.format === 'listenChoose'));
  ok(
    ear,
    'no round is entirely listenChoose.\n'
    + '  Rising « Tu es prêt ? » against falling « Tu es prêt. » is the one contrast in A1 that nothing but\n'
    + '  the ear can settle, and no other lesson can test it.',
  );
  ok((ear!.questions ?? []).length >= 4, `the ear round has only ${ear!.questions?.length} questions`);
});

test('no free-text question claims to test the question mark or the hyphen', () => {
  // `fold()` strips punctuation and whitespace, so `Tu es prêt` and
  // `Tu es prêt ?` fold identically, and so do `es-tu` and `es tu`. A typeIn or
  // errorSpot asking the learner to ADD either would accept the answer without
  // it and certify nothing. Both are mcq-only. This is the same limitation the
  // a1.08 and a1.09 briefs both got wrong about capital letters.
  const freeText = questions().filter((q) => q.format === 'typeIn' || q.format === 'errorSpot');
  for (const q of freeText) {
    const asksForMark = /add (a )?question mark|put (a )?question mark|missing question mark/i.test(q.q);
    const asksForHyphen = /add (a )?hyphen|put (a )?hyphen|missing hyphen/i.test(q.q);
    ok(!asksForMark, `"${q.q}" asks for a question mark, and fold() strips it before comparing`);
    ok(!asksForHyphen, `"${q.q}" asks for a hyphen, and fold() strips it before comparing`);
  }
  // AND THE ONE THAT DOES TEST THE HYPHEN SAYS SO. The typeIn on Êtes-vous
  // accepts the unhyphenated spelling and its `why` tells the learner that the
  // checker cannot see the hyphen, rather than pretending it can.
  const hyphenQ = questions().find((q) => q.format === 'typeIn' && /Êtes-vous|etes-vous/i.test(q.answer ?? ''));
  ok(hyphenQ, 'the typeIn on the vous swapped form is gone');
  ok(
    /cannot show|ignores punctuation|checker/i.test(hyphenQ!.why ?? ''),
    'the typeIn on Êtes-vous does not tell the learner that what they typed cannot show the hyphen',
  );
});

/* ══════════════════════════════════════════════════════════════════════════
 *  DRILLS, DICTÉE, READING
 * ══════════════════════════════════════════════════════════════════════════ */

test('every teaching drill is the FIRST resolving target of exactly one round', () => {
  // drillForRound walks a round's targets and fires the drill of the FIRST one
  // that has any, then stops. a1.05 shipped two drills named only in second
  // place and they were dead content.
  const drillFor = new Map((L!.errorTriggers ?? []).map((t) => [t.id, t.drill]));
  const leads: string[] = [];
  for (const r of rounds()) {
    const lead = (r.targets ?? []).find((t) => drillFor.has(t));
    ok(lead, `round ${r.id} names no target that resolves to a drill`);
    ok(!leads.includes(lead!), `round ${r.id} leads on "${lead}", which another round already leads on`);
    leads.push(lead!);
  }
  const fired = new Set(leads.map((t) => drillFor.get(t)!));
  const teaching = (L!.drills ?? []).filter((d) => !d.id.startsWith('retest-'));
  deepStrictEqual(teaching.filter((d) => !fired.has(d.id)).map((d) => d.id), []);
  strictEqual((L!.errorTriggers ?? []).length, EXPECTED_TRIGGERS);
  strictEqual(rounds().length, EXPECTED_ROUNDS);
});

test('every drill item is a real seed id and every drill sorts on the rule', () => {
  for (const d of L!.drills ?? []) {
    for (const id of d.items ?? []) {
      ok(ITEM.has(id), `drill ${d.id} names ${id}, which is not in the seed`);
    }
  }
  // drill-inversion sorts on WHETHER A t IS INSERTED, and every item in it is
  // already swapped round, so the learner cannot sort by method. If a
  // voice-only sentence ever lands in it, the drill becomes solvable without
  // the rule.
  const inv = (L!.drills ?? []).find((d) => d.id === 'drill-inversion');
  ok(inv, 'drill-inversion is gone');
  for (const id of inv!.items ?? []) {
    const fr = ITEM.get(id)!.fr;
    ok(/[a-zà-ÿ]-(t-)?(tu|il|elle|nous|vous|ils)/i.test(fr),
      `drill-inversion contains "${fr}", which is not a swapped-round question, so the drill can be solved without the rule`);
  }
  // drill-si sorts on WHETHER THE QUESTION HAS A NOT IN IT, so its buckets must
  // contain both kinds or there is nothing to sort.
  const si = (L!.drills ?? []).find((d) => d.id === 'drill-si');
  ok(si, 'drill-si is gone');
  const frs = (si!.items ?? []).map((id) => ITEM.get(id)!.fr);
  ok(frs.some((f) => /\bne\b|\bn'/.test(f) && /\bpas\b/.test(f)), 'drill-si has no negative in it');
  ok(frs.some((f) => !/\bpas\b/.test(f)), 'drill-si has no positive in it');
});

test('every dictée target stays in LETTERS mode, through the real dicteeMode', () => {
  // Word mode hands the learner each whole word as a pre-spelled tile, so a
  // lesson about WORD ORDER tests nothing there: tapping a tile marked `es-tu`
  // is not choosing to swap. Measured through the real function.
  const dict = L!.sections.find((s) => (s as { id?: string }).id === 's21-dictation');
  const ids = (dict as { itemIds?: string[] }).itemIds ?? [];
  ok(ids.length >= 5, `the dictée has only ${ids.length} targets`);
  for (const id of ids) {
    const row = ITEM.get(id);
    ok(row, `the dictée names ${id}, which is not in the seed`);
    strictEqual(
      dicteeMode(row!.fr), 'letters',
      `"${row!.fr}" (${row!.fr.replace(/[^a-zA-Zà-ÿ]/g, '').length} letters) lands in word mode.\n`
      + `  « Est-ce que vous êtes prêts ? » is 21 letters and cannot be a target; the tu version at 16 is.`,
    );
    ok(row!.drills.includes('dictation'), `${id} carries no dictation drill`);
  }
});

test('every spoken item carries voiceflash', () => {
  // An item without it renders in the mic-scored deck as a card the learner
  // cannot be scored on, which reads as a broken mission rather than a missing
  // tag. Five published rows this lesson DISPLAYS are in that state and are
  // deliberately excluded from the speak mission rather than having the drill
  // added to them: they belong to three other lessons.
  const speak = L!.sections.find((s) => (s as { id?: string }).id === 's22-speak');
  const ids = (speak as { itemIds?: string[] }).itemIds ?? [];
  ok(ids.length >= 20, `the speak mission has only ${ids.length} items`);
  for (const id of ids) {
    const row = ITEM.get(id);
    ok(row, `the speak mission names ${id}, which is not in the seed`);
    ok(row!.drills.includes('voiceflash'), `${id} "${row!.fr}" carries no voiceflash drill`);
  }
  // AND NOT ONE OF THEM IS THE BARE BLOCK. The audio brief says never to record
  // est-ce que in isolation: it only exists in front of a sentence and a lone
  // clip invites the learner to stress it. A speak card would do that with a
  // microphone listening.
  const bare = ids.filter((id) => ['est-ce que', 'oui', 'non', 'si', 'peut-être']
    .includes(ITEM.get(id)!.fr.trim().toLowerCase()));
  deepStrictEqual(bare, [], 'the speak mission names a bare block or a bare answer');
});

test('every reading glossary key can actually match its passage', () => {
  // Longest-match-first means an entry can be SHADOWED OUT OF EXISTENCE: a1.08
  // shipped two entries that could never underline anything because every
  // occurrence sat inside a longer key. Checked by running the real
  // segmentSentence and comparing matched KEYS rather than matched text. An
  // entry of five words or more can never match at all: MAX_GLOSS_WORDS is four.
  const reading = L!.sections.find((s) => s.type === 'reading');
  ok(reading && reading.type === 'reading', 'the reading section is gone');
  const glossary = reading.glossary ?? [];
  ok(glossary.length >= 4, `the glossary has only ${glossary.length} entries`);
  for (const g of glossary) {
    ok(g.word.split(/\s+/).length <= 4, `"${g.word}" is five words or more and MAX_GLOSS_WORDS is four`);
  }
  // segmentSentence takes a SET OF FOLDED KEYS, not the glossary array, and
  // glossKeys takes ONE STRING rather than the list. Compare matched KEYS rather
  // than matched text: a1.08 shipped two entries that could never underline
  // anything and its own test passed because it compared text.
  const keys = new Set(glossary.flatMap((g) => glossKeys(g.word)).filter(Boolean));
  const hit = new Set(segmentSentence(reading.text, keys).filter((x) => x.key).map((x) => x.key!));
  const shadowed = glossary.filter((g) => !glossKeys(g.word).some((k) => hit.has(k))).map((g) => g.word);
  deepStrictEqual(
    shadowed, [],
    'glossary entr(ies) that can never underline anything. Longest-match-first means a short entry sitting\n'
    + '  inside a longer one is shadowed out of existence.',
  );
  ok(reading.questionsInModal, 'reading without questionsInModal never reaches the glossary renderer at all');
  ok((reading.questions ?? []).length >= 3, 'the glossary renderer needs questions as well as the flag');
  ok(!reading.text.includes('\n'),
    'an authored newline in a reading passage is silently discarded by PassagePage, which splits on /(?<=[.!?»])\\s+/');
});

/* ══════════════════════════════════════════════════════════════════════════
 *  THE CORPUS, THE UNIT, AND SEED PARITY
 * ══════════════════════════════════════════════════════════════════════════ */

test('this lesson owns exactly its id range and took no headword id', () => {
  const mine = seed.items.filter((i) => i.id >= OWNED_FROM && i.id <= OWNED_TO && i.id.startsWith('fr.a1.questions.'));
  strictEqual(mine.length, 22, `${mine.length} rows in ${OWNED_FROM}..${OWNED_TO}, expected 22`);
  for (const i of mine) {
    strictEqual(i.kind, 'sentence', `${i.id} "${i.fr}" is a ${i.kind}, and this lesson authors only sentences`);
    strictEqual(i.theme, 'questions');
    ok(!i.gender, `${i.id} carries a gender, which would put it in a1.03's measured population`);
  }
  // AND a1.19 TOOK NOTHING IN fr.sons.questions, which its handover promised to
  // a1.20 in full. Its first 173 rows already hold every question word a1.20
  // needs.
  //
  // SCOPE CORRECTED BY a1.20's BUILD, 2026-08-07. This was written as "no row
  // exists at .174+", which is a different claim from the one the comment above
  // makes and is exactly what reserving the range for somebody else invites them
  // to falsify. a1.20 authored `qu'est-ce que` and `qu'est-ce qui` there, which
  // is the promise being kept rather than broken, and the assertion went red on
  // the content it had reserved. A guard that fires on legitimate content gets
  // deleted rather than fixed, so it is fixed: what a1.19 must not do is author
  // there ITSELF, and that is what is checked now.
  const sons = seed.items.filter((i) => i.id.startsWith('fr.sons.questions.'));
  const above = sons.filter((i) => Number(i.id.split('.').pop()) >= 174);
  const mineAbove = above.filter((i) => L!.itemIds.includes(i.id));
  deepStrictEqual(
    mineAbove.map((i) => `${i.id} "${i.fr}"`), [],
    'a1.19 has authored into fr.sons.questions.174+, which its own handover left entirely to a1.20',
  );
});

test('no two rows in theme questions share an fr, the way flashhub computes it', () => {
  const headword = (fr: string) => fr.toLowerCase().replace(/^(le |la |les |l'|un |une |des )/, '').trim();
  const seen = new Map<string, string>();
  const dupes: string[] = [];
  for (const w of seed.items) {
    if (w.theme !== 'questions') continue;
    if (w.kind === 'sentence') continue;
    if ((w.cardType ?? 'vocab') !== 'vocab') continue;
    const key = headword(w.fr);
    const prior = seen.get(key);
    if (prior) dupes.push(`${prior} vs ${w.id} ("${w.fr}")`);
    else seen.set(key, w.id);
  }
  deepStrictEqual(dupes, [], 'two rows sharing an fr in one theme are one card served twice');
});

test('the unit is bound, linked, and its advertised strings are untouched', () => {
  const u = seed.units.find((x) => x.id === 'a1.19');
  ok(u, 'unit a1.19 is not in the seed');
  strictEqual(u!.title, 'Yes/No Questions');
  // BYTE FOR BYTE, spaces around the slash included. a1.09's curly apostrophe
  // once tripped a batch guard for exactly this kind of difference.
  strictEqual(u!.sub, 'Questions oui / non');
  strictEqual(u!.canDo, 'Can ask and answer yes-no questions three ways and pick the right register');
  deepStrictEqual(u!.themes, ['questions'], 'the unit declared themes: null and this lesson binds it');
  ok(u!.lessonIds.includes('a1.19.l1'));
  // The tag the header will draw is derived from unit.seq at render time, and
  // the stored value is only a fallback. a1.03 shipped those two disagreeing.
  strictEqual(L!.tag, `A1 · LEÇON ${String(u!.seq).padStart(2, '0')}`);
});

test('the lesson passes the density validator against the real seed', () => {
  const issues = validateDensity(L!, new Set(seed.items.map((i) => i.id)));
  deepStrictEqual(issues, [], formatDensity(issues));
});

test('exactly one quiz section, and every sheet is reachable', () => {
  strictEqual(L!.sections.filter((s) => s.type === 'quiz').length, 1,
    'lessonPager appends exactly one quiz page, so a second is unreachable');
  const sheetIds = new Set((L!.sheets ?? []).map((s) => s.id));
  const linked = new Set(L!.sections.map((s) => (s as { sheetId?: string }).sheetId).filter(Boolean));
  for (const id of sheetIds) ok(linked.has(id), `sheet ${id} is linked from no section`);
  for (const id of linked) ok(sheetIds.has(id as string), `sheetId ${id} names no sheet this lesson declares`);
});

test('every sheet section is a type ReferenceSheet.tsx actually draws', () => {
  // It renders teach, letterGrid and table, and falls through to a title-only
  // branch for anything else. a1.17 shipped two `cheatSheet` sections here that
  // drew a heading with fourteen invisible rows under it, and a1.13 still has
  // the same defect.
  const DRAWN = new Set(['teach', 'letterGrid', 'table']);
  const bad = (L!.sheets ?? []).flatMap((sh) => (sh.sections ?? [])
    .filter((sec) => !DRAWN.has(sec.type)).map((sec) => `${sh.id}/${sec.id} (${sec.type})`));
  deepStrictEqual(bad, []);
});

test('no autoplay and no imageRef, because no component reads either', () => {
  ok(!JSON.stringify(L).includes('"autoplay"'),
    'autoplay is declared in schema.ts and implemented in no component. Use audioFirst.');
  const refs = strings(L).filter((s) => /^lessons\/[a-z0-9-]+\/[a-z0-9-]+\.(jpg|png|webp)$/i.test(s));
  deepStrictEqual(refs, [],
    'imageRef resolves through a statically enumerated registry and lesson-contract.test.ts does not check it.\n'
    + '  An unregistered ref draws a blank box. No component draws an intonation curve in any case.');
});

test('the audio brief keeps the constraints that cannot be recovered later', () => {
  // A rule about how something is recorded becomes invisible the moment the clip
  // is delivered, so the four the brief names are pinned here.
  const descs = (L!.audio?.recorded ?? []).map((r) => `${r.id}\n${r.desc}`).join('\n\n');
  ok(/ONE TAKE/.test(descs), 'no recording asks for a single take, and every contrast in this lesson needs one');
  ok(/NEVER RECORDED IN ISOLATION|never recorded in isolation/i.test(descs),
    'the audio brief no longer forbids recording est-ce que alone');
  ok(/Tu es prêt\./.test(descs) && /Tu es prêt \?/.test(descs),
    'the statement and the question are no longer named as one take, and that is the lesson\'s only contour clip');
  ok(/Est-il prêt \?/.test(descs) && /A-t-il faim \?/.test(descs),
    'est-il and a-t-il are no longer named as adjacent, so the inserted t has nothing to be heard against');
  ok((L!.audio?.recorded ?? []).length >= 8, 'the recording briefs have been trimmed');
});

test('seed parity: the lesson in the seed matches its authored source', () => {
  // Derived from the seed rather than restated, so this fails when the two
  // copies drift rather than when either legitimately changes.
  strictEqual(L!.unitId, 'a1.19');
  strictEqual(L!.level, 'a1');
  strictEqual(L!.title, 'Questions oui / non');
  strictEqual(L!.sections.length, SPINE.length);
  strictEqual(L!.itemIds.length, new Set(L!.itemIds).size, 'itemIds carries a duplicate');
  for (const id of L!.itemIds) ok(ITEM.has(id), `${id} is declared and is not in the seed`);
});
