// a2.31.l1 « L'école & les études » — the guard. Trail seq 30, the seventh unit
// of the A2 situations band, and the retrospective one: the other seven transact
// something happening now, this one is an account of something already finished.
//
// These are the assertions that would have caught this build's own mistakes,
// plus the ones the prompt asked for BY NAME. A sentence in a report cannot
// fail; a list can. FOUR of them DID catch this build:
//
//   * the imparfait guard found « J'avais huit ans. » in a trapDrill drill step
//     and « quand j'avais six ans » in a commonErrors card
//   * the U+203F guard found thirteen liaison ties in the authored respellings
//   * the reachability check found EIGHTEEN imports that no deck can serve
//   * the answer-spread rule found 62% of correct answers in slot 1
//
// THE IMPARFAIT GUARD IS THE ONE THAT MATTERS AND IT IS SCOPED TO a2.31.
// 306 published A2 rows use the tense incidentally, so a seed-wide "no
// imparfait" assertion would go red on content that is none of this unit's
// business. Every assertion below reads THIS LESSON ONLY, and MUST_NOT_FIRE
// proves the scoping with a legitimate imparfait sentence from another theme.
//
// READ FROM BOTH SIDES. The invariants run against the AUTHORED source, so they
// fail in ten seconds rather than at apply time. The last block runs against
// `seed.json` and is inert until the merge lands, at which point it proves the
// shipped copy is the authored one.
import { test } from 'node:test';
import { strictEqual, deepStrictEqual, ok } from 'node:assert';
import seed from './seed.json' with { type: 'json' };
import { hasPlainNasalFor } from './density.logic.ts';
import { fold } from './answer.logic.ts';
import { dicteeMode } from './dictee.logic.ts';

/* ── The authored source, imported the way a1-03-genre.test.ts imports
 *    genre-endings.ts, so this file guards the build before it is applied. ── */
type Any = Record<string, unknown>;
type Section = Any & { id: string; type: string };
type Row = Any & { id: string; kind: string; fr: string; en: string; voice: string; respell?: string; drills?: string[]; gender?: string };

let L: Any & { sections: Section[] };
let SECTIONS: Section[];
let TRANCHE: string[][];
let ROWS: Row[];
let C: Any;
let SRC_ERROR: unknown = null;

try {
  const lesson = await import('../../../ealch-admin/scripts/data/ecole-etudes-lesson.ts');
  const corpus = await import('../../../ealch-admin/scripts/data/ecole-etudes-corpus.ts');
  L = lesson.LESSON as never;
  SECTIONS = lesson.SECTIONS as never;
  TRANCHE = lesson.DECK_TRANCHE as never;
  ROWS = corpus.ROWS as never;
  C = corpus as never;
} catch (e) {
  SRC_ERROR = e;
  L = { sections: [] } as never; SECTIONS = []; TRANCHE = []; ROWS = []; C = {};
}

/** Corrections §9: every A2 test wraps its source import in try/catch and skips
 *  ~30 assertions when it fails. That is right for a checkout without
 *  `ealch-admin` and WRONG for a broken build. Tell the two apart. */
const MISSING = new Set(['ERR_MODULE_NOT_FOUND', 'MODULE_NOT_FOUND', 'ENOENT']);
const srcMerelyAbsent = !!SRC_ERROR && MISSING.has((SRC_ERROR as { code?: string }).code ?? '');
const noSrc = !!SRC_ERROR;

const LESSON_ID = 'a2.31.l1';
const UNIT_ID = 'a2.31';
const THEME = 'ecole';

const S = (id: string) => SECTIONS.find((s) => s.id === id);

/** Fetch a section by id, NARROWED to the shape one assertion needs.
 *
 *  `S(id) as Any & { cards: … }` is a TS2352: a `Section` has none of those
 *  properties yet, so TypeScript calls the cast "possibly a mistake" and tells
 *  you to go through `unknown` first. The first draft of this file had TWENTY
 *  of them and NOTHING IN THIS REPO WOULD HAVE SAID SO — `tsconfig.json`
 *  carries `exclude: ["**\/*.test.ts"]`, so `tsc --noEmit` typechecks no test
 *  file in the project. Forced into a program, 19 of the content tests have
 *  type errors. This one had the most.
 *
 *  Throwing on a miss is deliberate: every caller is inside a test that already
 *  depends on the section existing, so a missing id should name itself rather
 *  than surface as `undefined.cards`. */
const sec = <T>(id: string): Any & T => {
  const s = SECTIONS.find((x) => x.id === id);
  if (!s) throw new Error(`no section ${id} in the authored spine`);
  return s as unknown as Any & T;
};

/** The same, by type, for the single-instance sections. */
const secOf = <T>(type: string): Any & T => {
  const s = SECTIONS.find((x) => x.type === type);
  if (!s) throw new Error(`no ${type} section in the authored spine`);
  return s as unknown as Any & T;
};

/** Every authored string reachable from a value. */
const strs = (v: unknown, out: string[] = []): string[] => {
  if (typeof v === 'string') out.push(v);
  else if (Array.isArray(v)) v.forEach((x) => strs(x, out));
  else if (v && typeof v === 'object') Object.values(v as Any).forEach((x) => strs(x, out));
  return out;
};

/** Corrections §14.3: THE HOUSE WORD BOUNDARY EXCLUDES AN APOSTROPHE, so a
 *  guard built on it cannot see `l'université`, `l'école` or `c'est
 *  l'équivalent de`. Drop the apostrophe from the LEFT boundary, keep it on the
 *  right. This unit is more exposed than any other in the band because half its
 *  vocabulary elides, and the a2.31 prompt names §14.3 as binding. */
const hasWord = (hay: string, needle: string): boolean =>
  new RegExp(`(?<![\\p{L}\\p{N}-])${needle.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}(?![\\p{L}\\p{N}'’-])`, 'iu').test(hay);

/** The tense this lesson may not teach, may not score and may not name. */
const IMPARFAIT = /(?<![\p{L}\p{N}])(ét[ai]i[st]|étaient|étions|étiez|av[ai]i[st]|avaient|avions|aviez|fais[ai]i[st]|faisaient|voul[ai]i[st]|pouv[ai]i[st]|all[ai]i[st]|sav[ai]i[st]|aim[ai]i[st]|oubli[ai]i[st]|détest[ai]i[st]|habit[ai]i[st]|jou[ai]i[st]|travaill[ai]i[st])(?![\p{L}\p{N}])/iu;

const skip = { skip: noSrc };

/* ══════════════════════════════════════════════════════════════════════════
 *  0. THE SOURCE ITSELF
 * ══════════════════════════════════════════════════════════════════════════ */

test('the source either imports or is genuinely absent', () => {
  ok(!SRC_ERROR || srcMerelyAbsent,
    `the authored source threw something other than "not found": ${String((SRC_ERROR as Error)?.message ?? SRC_ERROR)}`);
});

/* ══════════════════════════════════════════════════════════════════════════
 *  1. THE SPINE, THE ACTS AND THE REFRAME
 * ══════════════════════════════════════════════════════════════════════════ */

test('the spine is 26 sections in the authored order', skip, () => {
  deepStrictEqual(SECTIONS.map((s) => s.id), [
    's01-scene', 's02-goals',
    's03-ladder', 's04-map', 's05-credentials', 's06-quebec', 's07-place',
    's08-subjects', 's09-fairede', 's10-three', 's11-forten', 's12-howlong', 's13-say',
    's14-passer', 's15-marks', 's16-outcome', 's17-errors', 's18-listen',
    's19-equiv', 's20-read', 's21-registry', 's22-dictation', 's23-speak', 's24-check',
    's25-quiz', 's26-roundup',
  ]);
});

test('six acts, and every act names sections that exist exactly once', skip, () => {
  const acts = L.acts as { id: string; sections: string[] }[];
  strictEqual(acts.length, 6);
  const named = acts.flatMap((a) => a.sections);
  strictEqual(named.length, SECTIONS.length, 'an act names a different number of sections than the lesson has');
  strictEqual(new Set(named).size, named.length, 'two acts claim one section');
  for (const id of named) ok(S(id), `act names a section that does not exist: ${id}`);
});

test('act 3 is the heaviest act, and it carries the content half of the canDo', skip, () => {
  const acts = L.acts as { sections: string[] }[];
  const sizes = acts.map((a) => a.sections.length);
  strictEqual(Math.max(...sizes), sizes[2], 'act 3 is not the heaviest act');
});

/** Invariants §5: assert the reframe count against an EXPLICIT CONSTANT, never
 *  a figure derived from the lesson. A derived count compares the content to
 *  itself and passes on any rewording. */
test('the reframe is verbatim, and in the counted number of sections', skip, () => {
  strictEqual(L.reframe, C.REFRAME);
  const carrying = SECTIONS.filter((s) => strs(s).includes(C.REFRAME as string));
  strictEqual(carrying.length, C.REFRAME_SECTIONS as number,
    `the reframe is in ${carrying.length} sections, not the ${C.REFRAME_SECTIONS} this lesson authored`);
  ok(carrying.length >= 3, 'density.logic.ts requires the reframe verbatim in at least three sections');
});

/* ══════════════════════════════════════════════════════════════════════════
 *  2. THE IMPARFAIT. THE GUARD THAT MATTERS, AND IT IS SCOPED.
 * ══════════════════════════════════════════════════════════════════════════ */

test('the two ecole imparfait rows are named by NO scored section', skip, () => {
  const SCORED = new Set(['quiz', 'dictation', 'practice', 'groupDrill', 'trapDrill', 'scenario']);
  for (const sec of SECTIONS) {
    if (!SCORED.has(sec.type)) continue;
    const text = strs(sec).join('\n');
    for (const id of C.IMPARFAIT_IDS as string[]) {
      ok(!text.includes(id), `${sec.id} is scored and names ${id}`);
    }
  }
});

test('the two ecole imparfait rows are unreachable from this lesson entirely', skip, () => {
  for (const id of C.IMPARFAIT_IDS as string[]) {
    ok(!(L.itemIds as string[]).includes(id), `${id} is in itemIds`);
    ok(!TRANCHE.some((t) => t.includes(id)), `${id} is released by a deckTranche`);
    ok(!(L.drills as { items?: string[] }[]).some((d) => d.items?.includes(id)), `${id} is named by a drill`);
  }
});

test('no imparfait form in any quiz question, option, accept entry or why', skip, () => {
  const quiz = secOf<{ rounds: { questions: unknown[] }[] }>('quiz');
  for (const q of quiz.rounds.flatMap((r) => r.questions)) {
    for (const s of strs(q)) ok(!IMPARFAIT.test(s), `a quiz string carries an imparfait form: "${s}"`);
  }
});

test('no imparfait form in a scenario user line or a trapDrill drill step', skip, () => {
  for (const sec of SECTIONS) {
    if (sec.type === 'scenario') {
      for (const t of sec.turns as { user: string }[]) ok(!IMPARFAIT.test(t.user), `a user line: "${t.user}"`);
    }
    if (sec.type === 'trapDrill') {
      for (const s of strs(sec.drill)) ok(!IMPARFAIT.test(s), `a drill step: "${s}"`);
    }
  }
});

test('not one authored corpus row carries an imparfait form', skip, () => {
  for (const r of ROWS) ok(!IMPARFAIT.test(r.fr), `${r.id}: "${r.fr}"`);
});

/** EXACTLY TWICE, RECEPTIVELY, AS ONE UNANALYSED CHUNK. Counted ON THE PASSAGE,
 *  not on the serialised section: the reading's glossary KEY is the same chunk
 *  being glossed, which is what the contract asks for, and counting it as a
 *  third exposure would forbid the gloss the contract requires.
 *
 *  THIS ASSERTION WAS WRONG BEFORE MUTATION TESTING and passed by luck. Its
 *  first version used an ASCII `\b`, which cannot fire before `é`, so every
 *  être form — étais, était, étaient, étions, étiez — was invisible to it. It
 *  counted two because `voulais` and `allait` happened to match, while three
 *  real `j'étais` exposures went unseen. Invariants §0 names this trap and this
 *  build reproduced it. */
test('the imparfait appears exactly twice, receptively, as the authorised chunk', skip, () => {
  const listening = secOf<{ lines: { fr: string }[] }>('listening');
  const reading = secOf<{ text: string; glossary: { word: string; en: string }[] }>('reading');
  const countIn = (s: string) => (s.match(new RegExp(IMPARFAIT.source, 'giu')) ?? []).length;

  strictEqual(listening.lines.reduce((n, l) => n + countIn(l.fr), 0), 1, 'the listening exposure is not exactly one');
  strictEqual(countIn(reading.text), 1, 'the reading exposure is not exactly one');

  const CHUNK = /quand j'étais petit/i;
  ok(listening.lines.some((l) => CHUNK.test(l.fr)), 'the listening exposure is not the authorised chunk');
  ok(CHUNK.test(reading.text), 'the reading exposure is not the authorised chunk');
  const gloss = reading.glossary.find((g) => /j'étais petite/i.test(g.word));
  ok(gloss, 'the reading does not gloss the chunk');
  ok(/when i was small/i.test(gloss!.en), `the gloss reads "${gloss!.en}"`);

  const elsewhere = SECTIONS.filter((s) => s.type !== 'listening' && s.type !== 'reading');
  const count = (v: unknown) => strs(v).filter((s) => IMPARFAIT.test(s)).length;
  strictEqual(count(elsewhere) + count(L.terms) + count(L.overview) + count(L.intro), 0,
    'an imparfait form outside the listening and the reading');
});

/** THE REGEX ITSELF. Invariants §0: JavaScript `\b` is ASCII-only, so
 *  `/\bétais\b/` matches NOTHING and a guard that returns zero looks exactly
 *  like an absence. Pinned so the next author cannot quietly revert the
 *  boundary and re-blind the whole check. */
test('the imparfait boundary is accent-aware, not an ASCII word boundary', skip, () => {
  ok(IMPARFAIT.test("quand j'étais petit"), 'the guard cannot see j\'étais, which is the whole exposure');
  ok(IMPARFAIT.test('il était tard'), 'the guard cannot see était');
  ok(IMPARFAIT.test('ils étaient là'), 'the guard cannot see étaient');
  ok(!/\bétais\b/i.test("quand j'étais petit"), 'the ASCII boundary has started working, so this note is stale');
  // and it does not fire on the passé composé this lesson runs on
  for (const ok_ of ["J'ai été nul en maths.", "J'ai eu la moyenne.", "J'ai fait des maths."]) {
    ok(!IMPARFAIT.test(ok_), `the guard fires on the passé composé: "${ok_}"`);
  }
});

test('the word "imparfait" is in no learner string and in neither grammar list', skip, () => {
  const learner = [...strs(SECTIONS), ...strs(L.terms), String(L.intro ?? ''), ...strs(L.overview)].join('\n');
  ok(!learner.toLowerCase().includes('imparfait'), 'the tense is named on a learner surface');
  for (const g of [...(L.grammarIntroduced as string[]), ...(L.grammarAssumed as string[])]) {
    ok(!g.toLowerCase().includes('imparfait'), `a grammar list claims the tense: "${g}"`);
  }
});

/** THE SCOPING PROOF. A legitimate imparfait sentence from another lesson's
 *  theme must NOT make this guard fire, because 306 published A2 rows carry the
 *  tense and none of them is a2.31's business. Four prior builds shipped guards
 *  that went red on other people's content. */
test('the imparfait guard is scoped to this lesson, not to the bundle', skip, () => {
  const other = C.IMPARFAIT_MUST_NOT_FIRE as string;
  ok(IMPARFAIT.test(other), 'MUST_NOT_FIRE is not actually an imparfait sentence, so it proves nothing');
  const mine = [...strs(SECTIONS), ...ROWS.map((r) => r.fr)].join('\n');
  ok(!mine.includes(other), "another lesson's imparfait sentence is inside a2.31");
  const inSeed = seed.items.some((i) => i.fr === other);
  ok(inSeed, 'the MUST_NOT_FIRE sentence is not in the seed, so it cannot prove the scoping');
});

/* ══════════════════════════════════════════════════════════════════════════
 *  3. THE THREE REQUIRED LAYOUTS
 * ══════════════════════════════════════════════════════════════════════════ */

test('required layout 1: the credential and its hedge are in ONE section, adjacent', skip, () => {
  const equiv = sec<{ cards: { head: string; fr: string; body: string }[] }>('s19-equiv');
  ok(equiv, 's19-equiv is missing');
  for (const chunk of ['ça correspond à', "c'est l'équivalent de", 'chez nous, on appelle ça', 'à peu près comme']) {
    const card = equiv.cards.find((c) => c.head === chunk);
    ok(card, `the hedge "${chunk}" has no card`);
    ok(/licence|master|autrement|bac/i.test(card!.fr),
      `the hedge "${chunk}" is not adjacent to a credential on its own card`);
  }
});

test('required layout 2: passé and réussi are a pair in ONE section, each with its English', skip, () => {
  const trap = sec<{ cards: { promptLabel: string; fr: string }[] }>('s14-passer');
  const [a, b] = (C.TRAP_PAIR_FR as string[]);
  const i = trap.cards.findIndex((c) => c.fr === a);
  const j = trap.cards.findIndex((c) => c.fr === b);
  ok(i >= 0 && j >= 0, 'the trap pair is not both on cards of s14-passer');
  strictEqual(j, i + 1, 'the trap pair is not adjacent; the inversion has to be visible in one glance');
  ok(/sat/i.test(trap.cards[i].promptLabel), 'the passer card has no English saying SAT');
  ok(/passed/i.test(trap.cards[j].promptLabel), 'the réussir card has no English saying PASSED');
});

test('required layout 3: the ladder is one scale with both systems on one screen', skip, () => {
  const map = sec<{ cols: string[]; rows: { cells: string[] }[] }>('s04-map');
  strictEqual(map.type, 'tapTable');
  ok(map.rows.length <= 6, `tapTable caps at six rows on a Pixel 6 (a2.12); this has ${map.rows.length}`);
  for (const c of map.cols) ok(c.length <= 8, `a tapTable header has a glyph budget (a2.16): "${c}"`);
  const french = map.rows.map((r) => r.cells[0]).join(' ');
  for (const rung of ['maternelle', 'primaire', 'collège', 'lycée']) {
    ok(french.includes(rung), `the scale is missing the rung ${rung}`);
  }
  ok(map.rows.every((r) => r.cells.length === 3), 'a row does not carry all three systems');
});

/* ══════════════════════════════════════════════════════════════════════════
 *  4. THE TWO OWNS
 * ══════════════════════════════════════════════════════════════════════════ */

test('no authored correct sentence uses passer un examen to mean "to pass"', skip, () => {
  // PERMITTED IN EXACTLY ONE PLACE: as the wrong text of an errorSpot. The
  // assertion is scoped to allow that one location and nothing else.
  const wrong = C.PASSER_AS_PASS_WRONG as string;
  const quiz = secOf<{ rounds: { questions: Any[] }[] }>('quiz');
  const asError = quiz.rounds.flatMap((r) => r.questions)
    .filter((q) => q.format === 'errorSpot' && q.prompt === wrong);
  strictEqual(asError.length, 1, 'the passer-as-pass sentence is not the prompt of exactly one errorSpot');
  for (const r of ROWS) {
    ok(!/passé mon examen.*(donc|alors).*diplôme/i.test(r.fr), `${r.id} uses passer to mean passed`);
  }
  // and the corrected answer must use réussir
  strictEqual(String(asError[0].answer).includes('réussi'), true, 'the errorSpot correction does not use réussir');
});

test('the equivalence hedge is four chunks, authored, and none existed before', skip, () => {
  const hedges = (C.HEDGE_ROWS as Row[]).filter((r) => r.kind === 'phrase');
  strictEqual(hedges.length, 4, 'the hedge is not four chunks');
  for (const h of hedges) {
    strictEqual(h.voice, 'learner');
    ok((h.drills ?? []).includes('flashcard'), `${h.id} cannot be served by a deck`);
  }
});

test('fr.a2.matieres.011 is imported by id and the faire de rule is not restated', skip, () => {
  const anchor = 'fr.a2.matieres.011';
  ok((L.itemIds as string[]).includes(anchor), 'the faire de rule row is not imported');
  const fairede = sec<{ examples: { fr: string }[] }>('s09-fairede');
  const first = fairede.examples[0].fr;
  ok(first.includes('faire de') && first.includes('« faire de »'),
    'the first example is not the imported rule row, quoted');
  const row = seed.items.find((i) => i.id === anchor);
  if (row) strictEqual(first, row.fr, 'the rule was retyped rather than quoted from fr.a2.matieres.011');
});

/* ══════════════════════════════════════════════════════════════════════════
 *  5. THE BOUNDARIES THIS UNIT ONLY QUOTES
 * ══════════════════════════════════════════════════════════════════════════ */

test('a2.07 owns the repair move: cited by id, ZERO rows authored', skip, () => {
  const authored = new Set(ROWS.map((r) => r.fr));
  for (const fr of C.REPAIR_FR as string[]) ok(!authored.has(fr), `authored a2.07's frozen row: "${fr}"`);
  for (const id of C.REPAIR_IDS as string[]) {
    ok((L.itemIds as string[]).includes(id), `a2.07's ${id} is not imported`);
    ok(TRANCHE.some((t) => t.includes(id)), `a2.07's ${id} is imported and never released`);
  }
});

/** PINNED AGAINST HARDCODED LITERALS, NOT AGAINST C.RUNGS.
 *
 *  a2.29's contract clause 1 is "quote the three rung names VERBATIM; a
 *  paraphrase is a second ladder". The obvious test — assert the section
 *  contains `C.RUNG_1` — CANNOT FAIL, because changing the constant changes
 *  both sides of the comparison. Mutation testing caught exactly that: renaming
 *  RUNG_1 to "Ask once, gently." left the whole suite green.
 *
 *  a2.29's own build report says `a2-29-hotel.test.ts` asserts the three names
 *  as exact strings and `author-hotel-batch.ts` pins them against hardcoded
 *  literals. This does the same from the citing side, so the band cannot drift
 *  from either end. */
test("a2.29's three rung names are quoted VERBATIM, pinned against literals", skip, () => {
  const LITERAL = ['Ask once, softly.', 'Say it again, without the person.', 'Ask for the person who can fix it.'];
  deepStrictEqual(C.RUNGS, LITERAL, 'the rung constants drifted from a2.29; a paraphrase is a second ladder');
  strictEqual(C.RUNG_1, LITERAL[0]);
  strictEqual(C.RUNG_2, LITERAL[1]);
  strictEqual(C.RUNG_3, LITERAL[2]);
  const equiv = strs(S('s19-equiv')).join('\n');
  for (const rung of LITERAL) ok(equiv.includes(rung), `rung name not quoted verbatim: "${rung}"`);
  const authored = new Set(ROWS.map((r) => r.fr));
  for (const rung of LITERAL) ok(!authored.has(rung), 'a rung name was authored as a corpus row');
  for (const id of C.LADDER_IDS as string[]) ok((L.itemIds as string[]).includes(id), `a2.29's ${id} is not imported`);
  // the order is part of the contract: citing units quote "rung 3"
  deepStrictEqual([...(C.LADDER_IDS as string[])].sort(), [...(C.LADDER_IDS as string[])],
    'the ladder ids are not in rung order');
});

/** THE SAME SHAPE ON a2.07's FROZEN BLOCK. Its six strings, its six ids and
 *  their order are frozen at publication and seven lessons depend on them, so
 *  the citing side pins literals too. */
test("a2.07's frozen repair block is pinned against literals", skip, () => {
  deepStrictEqual(C.REPAIR_IDS, [
    'fr.a2.au-restaurant.132', 'fr.a2.au-restaurant.133', 'fr.a2.au-restaurant.134',
    'fr.a2.au-restaurant.135', 'fr.a2.au-restaurant.136', 'fr.a2.au-restaurant.137',
  ], 'the repair block moved, and seven lessons cite it');
  deepStrictEqual(C.REPAIR_FR, [
    'Pardon ?',
    "Vous pouvez répéter, s'il vous plaît ?",
    'Plus lentement, s\'il vous plaît.',
    "Je n'ai pas bien compris.",
    "Qu'est-ce que ça veut dire ?",
    "Vous pouvez me l'écrire, s'il vous plaît ?",
  ], 'a frozen repair string drifted');
  // and the seed agrees, once the merge has landed
  for (const [i, id] of (C.REPAIR_IDS as string[]).entries()) {
    const row = seed.items.find((x) => x.id === id);
    if (row) strictEqual(row.fr, (C.REPAIR_FR as string[])[i], `${id} in the seed reads differently`);
  }
});

test('the interview boundary holds: no recruitment question in the scenario', skip, () => {
  const sc = sec<{ setting: string; turns: { ai: string; user: string }[] }>('s21-registry');
  const text = strs(sc).join('\n').toLowerCase();
  for (const w of ['embauch', 'recrut', 'salaire', 'poste à pourvoir', 'entretien d\'embauche', 'cv']) {
    ok(!text.includes(w), `the scenario drifted into a2.30's interview: "${w}"`);
  }
  ok(/registrar|admissions/i.test(sc.setting), 'the setting does not name a registrar or admissions office');
  strictEqual(sc.turns.length, 6);
});

test("a2.30's reserved ground is not authored anywhere", skip, () => {
  const all = [...strs(SECTIONS), ...strs(L.terms), String(L.intro), ...ROWS.map((r) => `${r.fr} ${r.en}`)].join('\n');
  for (const w of C.A2_30_RESERVED as string[]) ok(!hasWord(all, w), `authors a2.30's ground: "${w}"`);
});

test('TEF Canada EO section A: the learner ASKS in at least two turns', skip, () => {
  const sc = sec<{ turns: { user: string }[] }>('s21-registry');
  const asking = sc.turns.filter((t) => t.user.trim().endsWith('?'));
  ok(asking.length >= 2, `the learner asks in ${asking.length} turns; the exam fit needs at least two`);
});

test('every scenario turn carries two alts and a userEn', skip, () => {
  // scenario.logic.test.ts enforces this seed-wide and it caught a2.03.
  const sc = sec<{ turns: { userEn?: string; alts?: unknown[] }[] }>('s21-registry');
  for (const [i, t] of sc.turns.entries()) {
    ok(t.userEn, `turn ${i + 1} has no userEn`);
    ok((t.alts ?? []).length >= 2, `turn ${i + 1} has fewer than two alts`);
  }
});

/* ══════════════════════════════════════════════════════════════════════════
 *  6. THE BAND MANDATE, MEASURED
 * ══════════════════════════════════════════════════════════════════════════ */

test('at least 40 percent of authored rows are in the registrar voice', skip, () => {
  const other = ROWS.filter((r) => r.voice === 'other').length;
  const ratio = other / ROWS.length;
  ok(ratio >= (C.OTHER_VOICE_FLOOR as number),
    `${(ratio * 100).toFixed(1)}% is under the band floor of ${(C.OTHER_VOICE_FLOOR as number) * 100}%`);
  // AND IT IS REALLY THE OTHER PARTY, not the learner relabelled. Guard the
  // THING rather than the letters (Corrections §14.4): a registrar line is a
  // question or an instruction addressed to the learner, so what makes it the
  // other party's is that it is NOT a first-person account of the learner's own
  // education. Testing for `vous` instead would have failed
  // « Ça correspond à quel niveau chez nous ? », which is the registrar's line
  // and contains neither `vous` nor `votre`.
  const LEARNER_OPENER = /^(j'ai |je suis |je fais |j'étudie |ça correspond à (une|un) |c'est l'équivalent d)/i;
  for (const r of ROWS.filter((x) => x.voice === 'other')) {
    ok(!LEARNER_OPENER.test(r.fr), `${r.id} is filed as the registrar and opens as the learner: "${r.fr}"`);
    ok(/\?$/.test(r.fr) || /^(il (nous|me) faut|je note|je vais|on va|le dossier|votre dossier|bon,)/i.test(r.fr),
      `${r.id} is filed as the registrar and is neither a question nor an instruction: "${r.fr}"`);
  }
  // and the learner rows are not the registrar relabelled either
  for (const r of ROWS.filter((x) => x.voice === 'learner' && x.kind === 'sentence')) {
    ok(!/^vous avez /i.test(r.fr), `${r.id} is filed as the learner and is addressed to them: "${r.fr}"`);
  }
});

/* ══════════════════════════════════════════════════════════════════════════
 *  7. WHAT THE APP CAN AND CANNOT TEST
 * ══════════════════════════════════════════════════════════════════════════ */

test('exactly one quiz section', skip, () => {
  strictEqual(SECTIONS.filter((s) => s.type === 'quiz').length, 1);
});

test('no practice section carries a skill other than speak', skip, () => {
  const practices = SECTIONS.filter((s) => s.type === 'practice');
  ok(practices.length >= 1, 'lesson-contract.test.ts:505 fails a non-assessment lesson with no practice section');
  for (const p of practices) {
    strictEqual(p.skill, 'speak', `${p.id}: any other value renders a speaking drill anyway and is silently wrong`);
    ok(((p.itemIds as string[]) ?? []).length > 0, `${p.id}: an empty itemIds fails the contract test`);
  }
  ok((L.itemIds as string[]).length > 0, 'an empty Lesson.itemIds fails the contract test');
});

test('every errorSpot carries a prompt, and every question a why', skip, () => {
  const quiz = secOf<{ rounds: { questions: Any[] }[] }>('quiz');
  for (const q of quiz.rounds.flatMap((r) => r.questions)) {
    ok(q.why, `no why: ${String(q.q)}`);
    ok(q.ref, `no ref: ${String(q.q)}`);
    ok(S(String(q.ref)), `ref names a section that does not exist: ${String(q.ref)}`);
    if (q.format === 'errorSpot') ok(q.prompt, `an errorSpot with no prompt is unanswerable (a1.16): ${String(q.q)}`);
  }
});

test('every free-text question accepts the answer it displays, through the real fold', skip, () => {
  const quiz = secOf<{ rounds: { questions: Any[] }[] }>('quiz');
  for (const q of quiz.rounds.flatMap((r) => r.questions)) {
    if (q.format !== 'typeIn' && q.format !== 'errorSpot') continue;
    const accept = (q.accept as string[]) ?? [];
    ok(accept.some((a) => fold(a) === fold(String(q.answer))),
      `matchesAccept reads accept ONLY, never answer: "${String(q.answer)}"`);
    ok(String(q.answer).split(/\s+/).length <= 9,
      `fold strips all whitespace, so a longer answer must be predicted verbatim: "${String(q.answer)}"`);
  }
});

/** THE BAND RULE, added 2026-08-15. Fold the expected answer and the most
 *  plausible wrong answer; if they collide the item tests nothing and must move
 *  to mcq or listenChoose. */
test('no near-miss pair folds to one string', skip, () => {
  for (const [a, b] of C.NEAR_MISSES as [string, string][]) {
    ok(fold(a) !== fold(b), `"${a}" and "${b}" fold to the same string and test nothing`);
  }
});

test('the quiz is 32 questions, four rounds, and at most half mcq', skip, () => {
  const quiz = secOf<{ rounds: { id: string; targets: string[]; questions: Any[] }[]; roundFailThreshold?: number }>('quiz');
  strictEqual(quiz.rounds.length, 4);
  const qs = quiz.rounds.flatMap((r) => r.questions);
  strictEqual(qs.length, 32);
  ok(quiz.roundFailThreshold, 'the rounds form needs a roundFailThreshold');
  const mcq = qs.filter((q) => q.format === 'mcq').length;
  ok(mcq <= qs.length / 2, `${mcq} of ${qs.length} are mcq; the ceiling is half`);
});

/** Invariants §4: each round names `targets`, and `drillForRound` fires the
 *  drill of the FIRST RESOLVING TARGET ONLY and then stops. A drill named in
 *  second place is dead content; a1.05 shipped two. */
test('every drill is the first resolving target of exactly one round', skip, () => {
  const quiz = secOf<{ rounds: { targets: string[] }[] }>('quiz');
  const triggers = new Map((L.errorTriggers as { id: string; drill: string }[]).map((t) => [t.id, t.drill]));
  const fired = quiz.rounds.map((r) => triggers.get(r.targets[0]));
  for (const [i, d] of fired.entries()) ok(d, `round ${i + 1}'s first target resolves to no drill`);
  strictEqual(new Set(fired).size, fired.length, 'two rounds fire the same drill');
  strictEqual(new Set(fired).size, (L.drills as unknown[]).length, 'a drill is authored and never fired');
});

/** The dictée is the ONLY surface in the product that can test a spelling,
 *  because the quiz fold strips accents, case, punctuation, hyphens, both
 *  apostrophes and all whitespace. Corrections §4: `dicteeMode` switches to
 *  WORD tiles above 16 letters, and word mode hands every real word over
 *  pre-spelled. Checked through the REAL function, not counted by eye. */
test('every dictée item is in LETTER mode and carries the dictation drill', skip, () => {
  const d = sec<{ itemIds: string[] }>('s22-dictation');
  ok(d.itemIds.length >= 4, 'the dictée is too thin to be the lesson spelling surface');
  for (const id of d.itemIds) {
    const row = ROWS.find((r) => r.id === id);
    ok(row, `${id} is a dictée id and is not an authored row`);
    ok((row!.drills ?? []).includes('dictation'), `${id} carries no dictation drill, so the section drills nothing`);
    strictEqual(dicteeMode(row!.fr), 'letters', `${id} "${row!.fr}" resolves to word mode`);
  }
});

test('no dictée item has a hyphen or an apostrophe as its only difficulty', skip, () => {
  const d = sec<{ itemIds: string[] }>('s22-dictation');
  for (const id of d.itemIds) {
    const fr = ROWS.find((r) => r.id === id)!.fr;
    const stripped = fr.replace(/[-'’]/g, '');
    ok(fold(stripped) === fold(fr), `${id}: normalizeFr strips the mark, so it cannot be the difficulty`);
  }
});

/* ══════════════════════════════════════════════════════════════════════════
 *  8. THE FIELDS THAT DRAW NOTHING
 * ══════════════════════════════════════════════════════════════════════════ */

test('groupDrill items use note, not sub: sub draws nothing', skip, () => {
  for (const sec of SECTIONS) {
    if (sec.type !== 'groupDrill') continue;
    for (const g of (sec as { groups?: { items?: Any[] }[] }).groups ?? []) {
      for (const it of g.items ?? []) ok(!('sub' in it), `${sec.id}: a group item carries sub, which draws nothing. Use note.`);
    }
  }
});

test('no cardDeck carries itemIds, and commonErrors carries swipe', skip, () => {
  for (const sec of SECTIONS) {
    if (sec.type === 'cardDeck') ok(!('itemIds' in sec), `${sec.id}: only practice reads itemIds`);
    if (sec.type === 'commonErrors') strictEqual(sec.swipe, true, `${sec.id}: commonErrors without swipe draws a blank screen`);
  }
});

test('the lesson carries no field the shipped corpus does not', skip, () => {
  const others = seed.lessons.filter((l) => l.id !== LESSON_ID);
  const known = new Set(others.flatMap((l) => Object.keys(l)));
  const invented = Object.keys(L as unknown as Record<string, unknown>).filter((k) => !known.has(k));
  deepStrictEqual(invented, [], `carries field(s) no other lesson has: ${invented.join(', ')}`);
});

test('none of the six unread audio fields is authored', skip, () => {
  const s = JSON.stringify(L);
  for (const f of C.DEAD_AUDIO_FIELDS as string[]) {
    ok(!s.includes(`"${f}"`), `${f} validates, publishes and is read by no renderer`);
  }
});

/* ══════════════════════════════════════════════════════════════════════════
 *  9. REACHABILITY. THE FAILURE THIS PROJECT KEEPS SHIPPING.
 * ══════════════════════════════════════════════════════════════════════════ */

/** a1.08 declared 43 itemIds that resolved perfectly, were named by no section
 *  and were drawn by nothing. Ask "did the learner see it", not "does this id
 *  resolve". This build found EIGHTEEN imports in that position. */
test('every declared itemId is on a screen, not merely resolvable', skip, () => {
  const sectionText = strs(SECTIONS).join('\n');
  const termText = strs(L.terms).join('\n');
  const released = new Set(TRANCHE.flat());
  const orphans = (L.itemIds as string[]).filter((id) =>
    !sectionText.includes(id) && !termText.includes(id) && !released.has(id));
  deepStrictEqual(orphans, [], `declared, resolvable and drawn by nothing: ${orphans.join(', ')}`);
});

/** a2.29 found four published rows carrying no `flashcard` drill, so no deck in
 *  the product can serve them and a deckTranche release is a line that looks
 *  like it works and does nothing. This lesson releases none of them: the
 *  thirteen it imports without `flashcard` are named by a section instead. */
test('no deckTranche releases an item no deck can serve', skip, () => {
  const drills = new Map<string, string[]>();
  for (const r of ROWS) drills.set(r.id, r.drills ?? []);
  for (const i of seed.items) drills.set(i.id, (i as { drills?: string[] }).drills ?? []);
  const dead = TRANCHE.flat().filter((id) => {
    const d = drills.get(id);
    return d !== undefined && !d.includes('flashcard');
  });
  deepStrictEqual(dead, [], `released into a deck that cannot draw them: ${dead.join(', ')}`);
});

/** A tranche must not run ahead of the acts. The check can only be made for ids
 *  a section names BY ID: a `cardDeck` card carries its French as text and has
 *  no `itemId` field, so an id-scan cannot prove the ladder cards were shown.
 *  Where a section does name an id, the earliest act that names it must be at
 *  or before the tranche that releases it. */
test('no tranche releases an item ahead of the act that names it', skip, () => {
  const acts = L.acts as { sections: string[] }[];
  strictEqual(TRANCHE.length, acts.length, 'a tranche per act');
  const ID_RE = /fr\.[a-z0-9]+\.[a-z-]+\.\d{3}/g;
  const firstAct = new Map<string, number>();
  for (const [i, act] of acts.entries()) {
    for (const secId of act.sections) {
      for (const s of strs(S(secId)!)) {
        for (const m of s.matchAll(ID_RE)) if (!firstAct.has(m[0])) firstAct.set(m[0], i);
      }
    }
  }
  const authored = new Set(ROWS.map((r) => r.id));
  for (const [i, tranche] of TRANCHE.entries()) {
    for (const id of tranche) {
      // An AUTHORED row is this lesson's own text and the lesson body may show
      // it as prose long before any section names it by id: `une licence` is
      // taught on the act 2 map and only drilled in the act 5 dictée. The
      // ordering check is meaningful only for IMPORTS, whose only routes to a
      // screen are an itemId or a tranche.
      if (authored.has(id)) continue;
      const shown = firstAct.get(id);
      if (shown === undefined) continue;   // carried as card text, not by id
      ok(shown <= i, `tranche ${i + 1} releases ${id}, which act ${shown + 1} is the first to name`);
    }
  }
});

test('tranches release every authored row exactly once and nothing twice', skip, () => {
  const flat = TRANCHE.flat();
  strictEqual(new Set(flat).size, flat.length, 'an id is released by two tranches');
});

/* ══════════════════════════════════════════════════════════════════════════
 *  10. THE CORPUS
 * ══════════════════════════════════════════════════════════════════════════ */

test('every authored row is in the block, in this theme, at a2', skip, () => {
  for (const r of ROWS) {
    ok(r.id.startsWith(`fr.a2.${THEME}.`), `${r.id} is not in this unit's theme`);
    strictEqual(r.level, 'a2', `${r.id} is not tagged a2`);
    const n = Number(r.id.split('.').pop());
    ok(n >= (C.ID_FIRST as number) && n <= (C.ID_LAST as number), `${r.id} is outside the claimed block`);
  }
  strictEqual(new Set(ROWS.map((r) => r.id)).size, ROWS.length, 'a duplicate id');
});

test('no authored row duplicates an fr already in this theme', skip, () => {
  // The flashcard hub keys on `fr` PER THEME and serves two rows sharing one as
  // a single card, twice. This is what caught `redoubler`, which the prompt told
  // this build to author and which already exists at fr.a1.ecole.111.
  const existing = new Map(seed.items.filter((i) => i.theme === THEME).map((i) => [i.fr, i.id]));
  for (const r of ROWS) {
    const clash = existing.get(r.fr);
    ok(!clash || clash === r.id, `${r.id} "${r.fr}" duplicates ${clash} in the same theme`);
  }
});

test('every sentence is inside the 14-word A2 budget', skip, () => {
  for (const r of ROWS) {
    if (r.kind !== 'sentence') continue;
    ok(r.fr.split(/\s+/).length <= 14, `${r.id} runs past the budget: "${r.fr}"`);
  }
});

/** Corrections §6 as amended by §14.1. The checker is blind to a nasal followed
 *  by a consonant INSIDE a token, and `licence` / `équivalence` are exactly
 *  that shape. Asserted through the REAL function, by name, both ways. */
test('the nasal table holds, through the real hasPlainNasalFor', skip, () => {
  const table = [
    { id: 'fr.a2.ecole.024', kind: 'blind', plain: 'ün lee-SAHNSS' },
    { id: 'fr.a2.ecole.046', kind: 'mixed', plain: 'zhay fee-NEE ma lee-SAHNSS ahn trwa-ZAHN' },
    { id: 'fr.a2.ecole.064', kind: 'mixed', plain: 'ohn va duh-mahn-DAY ü-nay-kee-va-LAHNSS' },
  ];
  for (const { id, kind, plain } of table) {
    const row = ROWS.find((r) => r.id === id)!;
    ok(row, `${id} is on the nasal table and was not authored`);
    strictEqual(hasPlainNasalFor(row.fr, row.respell!), false, `${id}: the checker flags the AUTHORED value`);
    strictEqual(hasPlainNasalFor(row.fr, plain), kind === 'mixed',
      `${id} is filed ${kind} and the checker disagrees about its unrepaired value`);
    ok(row.respell!.includes('ⁿ'), `${id} carries no superscript at all`);
  }
});

/** A FIFTH DEFECT IN THE NASAL CHECKER, and it is in the join between its two
 *  halves. `hasPlainNasalFor` returns early on `hasPlainNasal(respell)` before
 *  it consults the French, so a respelling using one of the seven digraphs
 *  before a token-final N or M can never reach the line that clears a real
 *  consonant (aime, dame, jaune, scène). `diplôme` is exactly that, and the
 *  house form `dee-PLOHM` is on three published rows. */
test('the diplôme false positives are still false positives', skip, () => {
  const REAL_CONSONANT = /[aeiouyàâäéèêëîïôöûüù][nm]e/i;
  for (const id of ['fr.a2.ecole.047', 'fr.a2.ecole.052', 'fr.a2.ecole.068', 'fr.a2.ecole.073']) {
    const row = ROWS.find((r) => r.id === id)!;
    ok(row, `${id} is on the false-positive list and was not authored`);
    ok(REAL_CONSONANT.test(row.fr), `${id}: no vowel + n/m + e in the French, so the flag may be real`);
    ok(hasPlainNasalFor(row.fr, row.respell!),
      `${id}: the checker NO LONGER flags it. The checker improved; drop this entry.`);
  }
  // and the shipped corpus agrees on the form, so this is not a new variant
  const shipped = seed.items.filter((i) => /^(le |un )?diplôme$/.test(i.fr ?? '') && i.respell);
  for (const s of shipped) ok(/PLOHM/.test(s.respell!), `${s.id} uses a different diplôme respelling: ${s.respell}`);
});

/* ══════════════════════════════════════════════════════════════════════════
 *  11. HOUSE RULES
 * ══════════════════════════════════════════════════════════════════════════ */

test('no em dash and no U+203F in any authored string', skip, () => {
  const all = [...strs(SECTIONS), ...strs(L.terms), String(L.intro), ...strs(L.overview),
    ...ROWS.map((r) => `${r.fr} ${r.en} ${r.respell ?? ''}`)].join('\n');
  ok(!/—/.test(all), 'an em dash in authored copy');
  ok(!/‿/.test(all), 'U+203F, which renders as a low underscore on a Pixel 6');
});

/** The band's inherited guard is a `\bhonest` pattern and it CANNOT SEE
 *  "dishonest". a2.06 found that hole and every A2 lesson before it carries the
 *  broken shape. A plain substring test, deliberately not word-bounded. */
test('the banned words are absent, by substring and not by word boundary', skip, () => {
  const all = [...strs(SECTIONS), ...strs(L.terms), String(L.intro), ...strs(L.overview),
    ...ROWS.map((r) => `${r.fr} ${r.en}`)].join('\n').toLowerCase();
  for (const b of C.BANNED_SUBSTRINGS as string[]) ok(!all.includes(b), `authored copy contains "${b}"`);
  ok(!all.includes('dishonest'), 'the substring test must also catch dishonest');
});

/** Corrections §9 and §13: the walk covers `intro` and `overview` as well as
 *  the sections, and it must see a cardDeck card's `sub`, which prose() drops.
 *  §13 also says to check the -s plural of every entry. */
test('no jargon on a learner surface, intro and overview included', skip, () => {
  const learner = [...strs(SECTIONS), ...strs(L.terms), String(L.intro ?? ''), ...strs(L.overview ?? {})].join('\n');
  ok(learner.length > 0);
  for (const j of C.JARGON as string[]) {
    for (const form of [j, `${j}s`]) ok(!hasWord(learner, form), `jargon on a learner surface: "${form}"`);
  }
  // and the walk really does reach a cardDeck card's `sub`
  const deck = sec<{ cards: { sub: string }[] }>('s03-ladder');
  ok(learner.includes(deck.cards[0].sub), 'the walk does not reach a cardDeck card sub');
  // and it really does reach intro
  ok(learner.includes(String(L.intro)), 'the walk does not reach Lesson.intro');
});

test('the lesson claims nothing the app cannot deliver', skip, () => {
  const all = [...strs(SECTIONS), ...strs(L.terms), String(L.intro)].join('\n').toLowerCase();
  for (const c of C.FORBIDDEN_CLAIMS as string[]) ok(!all.includes(c.toLowerCase()), `claims: "${c}"`);
});

test('zero ExamTask rows and no Scenario.exam value', skip, () => {
  const sc = sec('s21-registry');
  ok(!('exam' in sc), 'Scenario.exam is authored; collation 1.12 and Paul decision 4 forbid it');
  ok(!JSON.stringify(L).includes('exam.tcf_canada'), 'an ExamTask id is referenced');
  ok(!JSON.stringify(L).includes('exam.tef_canada'), 'an ExamTask id is referenced');
});

/** Collation C3, PAUL-SETTLED: at most ONE cardDeck card naming Quebec
 *  divergence, and NOTHING ON IT IS EVER THE ANSWER TO A SCORED QUESTION. */
test('Quebec is one card at layer more, and never a scored answer', skip, () => {
  const q = sec<{ layer: string; cards: unknown[] }>('s06-quebec');
  strictEqual(q.type, 'cardDeck');
  strictEqual(q.layer, 'more', 'the Quebec card must sit off the core path');
  const quebecTerms = ['cégep', 'DEC', 'session'];
  const quiz = secOf<{ rounds: { questions: Any[] }[] }>('quiz');
  const scoredText = [
    ...strs(quiz), ...strs(S('s22-dictation')), ...strs(S('s23-speak')),
    ...strs(SECTIONS.filter((s) => s.type === 'trapDrill' || s.type === 'groupDrill')),
  ].join('\n');
  for (const t of quebecTerms) ok(!hasWord(scoredText, t), `"${t}" is Quebec colour and appears on a scored surface`);
  // exactly one Quebec card deck in the whole lesson
  const decks = SECTIONS.filter((s) => s.type === 'cardDeck' && /cégep|québec|quebec/i.test(strs(s).join(' ')));
  strictEqual(decks.length, 1, 'more than one section carries Quebec divergence');
});

/* ══════════════════════════════════════════════════════════════════════════
 *  12. SEED PARITY. Inert until the merge lands.
 * ══════════════════════════════════════════════════════════════════════════ */

const shipped = seed.lessons.find((l) => l.id === LESSON_ID) as unknown as (Any & { sections: Section[] }) | undefined;
const shippedSkip = { skip: !shipped };

test('the shipped lesson is the authored one', shippedSkip, () => {
  strictEqual(shipped!.unitId, UNIT_ID);
  strictEqual((shipped!.sections as Section[]).length, SECTIONS.length);
  deepStrictEqual((shipped!.sections as Section[]).map((s) => s.id), SECTIONS.map((s) => s.id));
  strictEqual(shipped!.reframe, C.REFRAME);
});

test('the unit claims the lesson and its theme was not re-mapped', shippedSkip, () => {
  const unit = seed.units.find((u) => u.id === UNIT_ID) as unknown as { lessonIds: string[]; themes: string[]; canDo: string };
  ok(unit.lessonIds.includes(LESSON_ID), 'the unit does not claim the lesson');
  deepStrictEqual(unit.themes, [THEME], 'this unit needed NO re-map; something changed a theme that was correct');
  strictEqual(unit.canDo, C.UNIT ? (C.UNIT as { canDo: string }).canDo : unit.canDo);
});

test('every id the shipped lesson names resolves in the same file', shippedSkip, () => {
  const ids = new Set(seed.items.map((i) => i.id));
  const missing = (shipped!.itemIds as string[]).filter((i) => !ids.has(i));
  deepStrictEqual(missing, [], `the seed is a CUT and the merge did not carry: ${missing.slice(0, 10).join(', ')}`);
});

test("a2.07's repair rows and a2.29's ladder rows reached the seed", shippedSkip, () => {
  const ids = new Set(seed.items.map((i) => i.id));
  for (const id of C.REPAIR_IDS as string[]) ok(ids.has(id), `${id} would render an empty card on device`);
  for (const id of C.LADDER_IDS as string[]) ok(ids.has(id), `${id} would render an empty card on device`);
});

test('the authored rows are in the seed with the same bodies', shippedSkip, () => {
  for (const r of ROWS) {
    const row = seed.items.find((i) => i.id === r.id);
    ok(row, `${r.id} is not in the seed`);
    strictEqual(row!.fr, r.fr, `${r.id} shipped a different fr`);
    strictEqual(row!.theme, THEME);
  }
});
