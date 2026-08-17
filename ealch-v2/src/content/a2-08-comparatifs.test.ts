// a2.08.l1 « Comparatifs & superlatifs » — the guard.
//
// Everything is read out of `seed.json`, because the seed is what the app
// bundles and therefore what a learner can actually meet. The source files are
// imported as well, for the assertions that need the build's own table (the
// repair states, the rejected candidates), and the two are told apart the way
// Corrections §9 requires: an ABSENT source is a checkout without
// `ealch-admin`; a THROWING one is a broken build and must not silently skip
// thirty assertions.
//
// The four holes every guard in this band still carries, and what is done here:
//
//   1. THE JARGON WALK MUST COVER `Lesson.intro`, `overview` AND THE SHEETS.
//      `intro` is drawn on the lesson overview card AND the lesson cover;
//      a2.11 shipped "third person" there past every host-side gate and only a
//      Pixel 6 found it. `prose()` drops `sub`, which holds PROSE on a cardDeck
//      card, so the walk here is a RAW string walk. The `-s` plural of every
//      JARGON entry is checked too, because `hasPhrase` is boundary-exact.
//   2. THE HOUSE WORD BOUNDARY EXCLUDES `'`, so it cannot see `l'autre`,
//      `c'est` or `qu'hier`. The apostrophe is dropped from the LEFT boundary
//      and kept on the right.
//   3. `\bhonest` CANNOT SEE "dishonest". The banned-word guard fires on the
//      SUBSTRING, in both directions.
//   4. THE DOUBLE-STOP GUARD IS HALF THE SHAPE. It checks for a sentence-final
//      stop followed by ANY punctuation, not for two dots.
//
// And Corrections §14.5: `adjective` is NOT jargon. It is on 147 shipped cards.
// The RATIO is guarded instead, so the plain phrase outnumbers the technical
// one.

import { test } from 'node:test';
import { ok, strictEqual, deepStrictEqual, notStrictEqual } from 'node:assert';
import seed from './seed.json' with { type: 'json' };
import { fold } from './answer.logic.ts';
import { dicteeMode } from './dictee.logic.ts';
import { hasPlainNasalFor } from './density.logic.ts';
import { quizQuestions } from './schema.ts';

const LESSON_ID = 'a2.08.l1';
const UNIT_ID = 'a2.08';
const THEME = 'comparaisons';
const ID_FIRST = 133;
const ID_LAST = 163;

/** The prompt's numbers, and this build's. A hardcoded count fails on itself
 *  the first time content legitimately changes, EXCEPT where the number IS the
 *  shape of the lesson. These are: three degrees, four superlative forms, two
 *  words that refuse plus. A quiet drop in any of them is exactly what this
 *  file exists to catch. */
const DEGREES = ['plus', 'moins', 'aussi'] as const;
const SUPERLATIVE_FORMS = ['le plus grand', 'la plus grande', 'les plus grands', 'les plus grandes'] as const;
const REFUSED = ['plus bon', 'plus bien'] as const;
/** Measured against the merged seed, not derived from the lesson. A derived
 *  count compares the content to itself and passes on any rewording. */
const REFRAME_SECTIONS = 24;
const MISSIONS = 24;
const QUESTIONS = 30;
const AUTHORED_ROWS = 31;

/* ── THE SOURCE, AND TELLING ABSENT FROM BROKEN (Corrections §9) ─────────── */

type SrcShape = {
  RESPELL_REPAIRS: { id: string; fr: string; from: string; half: string; to: string; blind: boolean; house: boolean }[];
  UNSEEN: { adj: string; fem: string; id: string };
  POSSESSIVE_ROWS: readonly { id: string; pronoun: string; fr: string }[];
  POSSESSIVE_FORMS: readonly string[];
  A217_RESERVED: readonly string[];
  A217_TAKEN_BY: Record<string, string>;
  A203_RESERVED: readonly string[];
  HOMOPHONE_FORMS: readonly string[][];
  MUST_FIRE: Record<string, readonly string[]>;
  MUST_NOT_FIRE: Record<string, readonly string[]>;
  NE_PLUS_SHAPES: RegExp[];
  JARGON: readonly string[];
  ALL_ROWS: { id: string; fr: string; kind: string; respell?: string }[];
};
let SRC: SrcShape | null = null;
let SRC_ERROR: unknown = null;
try {
  SRC = (await import('../../../ealch-admin/scripts/data/comparatifs-corpus.ts')) as unknown as SrcShape;
} catch (e) { SRC_ERROR = e; }
const MISSING = new Set(['ERR_MODULE_NOT_FOUND', 'MODULE_NOT_FOUND', 'ENOENT']);
const srcMerelyAbsent = !!SRC_ERROR && MISSING.has((SRC_ERROR as { code?: string }).code ?? '');

type Row = { id: string; fr: string; en?: string; kind?: string; theme?: string; level?: string; gender?: string; respell?: string; drills?: string[]; tags?: string[] };
type Sec = Record<string, unknown> & { type: string; id?: string };
type Lsn = Record<string, unknown> & { id: string; sections: Sec[]; itemIds: string[] };

const L = (seed.lessons as unknown as Lsn[]).find((l) => l.id === LESSON_ID);
const items = seed.items as unknown as Row[];
const byId = new Map(items.map((i) => [i.id, i]));
const sec = (id: string) => (L?.sections ?? []).find((s) => s.id === id);
const sectionsOf = (l: Lsn) => l.sections ?? [];

/** Every authored string reachable from a value. A RAW walk: `prose()` drops
 *  NOTATION_KEYS and `sub` is on that list, but on a cardDeck card `sub` holds
 *  prose. Built once, and its size is asserted, because an empty walk turns
 *  every check below into a no-op that passes. */
const strs = (v: unknown, out: string[] = []): string[] => {
  if (typeof v === 'string') out.push(v);
  else if (Array.isArray(v)) v.forEach((x) => strs(x, out));
  else if (v && typeof v === 'object') Object.values(v).forEach((x) => strs(x, out));
  return out;
};

/** THE HOUSE BOUNDARY, REPAIRED. No apostrophe on the left. */
const hasWord = (hay: string, needle: string): boolean =>
  new RegExp(`(?<![\\p{L}\\p{N}-])${needle.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}(?![\\p{L}\\p{N}'’-])`, 'iu').test(hay);
const countOf = (hay: string, needle: string): number =>
  (hay.match(new RegExp(`(?<![\\p{L}\\p{N}-])${needle.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}(?![\\p{L}\\p{N}'’-])`, 'giu')) ?? []).length;

const LEARNER_TEXT = [
  ...strs(L?.sections), ...strs(L?.terms), ...strs(L?.sheets ?? []), String(L?.intro ?? ''),
  ...strs(L?.overview), ...strs(L?.drills), ...strs(L?.acts), ...strs(L?.errorTriggers),
].join('\n');

const AUTHORED = items.filter((i) => i.theme === THEME
  && /^fr\.a2\.comparaisons\.\d{3}$/.test(i.id)
  && Number(i.id.split('.').pop()) >= ID_FIRST && Number(i.id.split('.').pop()) <= ID_LAST);

const quizQs = () => quizQuestions(sec('s22-quiz') as never) as Array<Record<string, unknown>>;

/* ═══════════════════════════════════════════════════════════════════════════
 *  0. THE LESSON EXISTS, AND NEITHER WALK IS EMPTY
 * ═══════════════════════════════════════════════════════════════════════════ */

test('a2.08.l1 is in the seed, and the unit claims it', () => {
  ok(L, `${LESSON_ID} is not in seed.json`);
  const unit = (seed.units as Array<{ id: string; seq?: number | string; lessonIds?: string[]; prereqUnitIds?: string[] }>).find((u) => u.id === UNIT_ID);
  ok(unit, `${UNIT_ID} is not in seed.json`);
  ok((unit!.lessonIds ?? []).includes(LESSON_ID), `${UNIT_ID} does not claim ${LESSON_ID}`);
  ok((unit!.prereqUnitIds ?? []).includes('a2.03'), 'a2.03 is the declared prereq of this unit');
  strictEqual(String(unit!.seq), '32', 'a2.08 is seq 32 on the A2 trail. A2 runs to 35, not 32.');
});

test('the source either imports or is genuinely absent', () => {
  ok(SRC || srcMerelyAbsent,
    `the corpus source threw rather than being absent, which silently skips about thirty assertions: ${String(SRC_ERROR)}`);
});

test('the string walk is not empty, or every check below is a no-op', () => {
  ok(LEARNER_TEXT.length > 20000, `the learner-text walk produced ${LEARNER_TEXT.length} chars, which is too few to be real`);
  ok(strs(L?.sections).length > 400, 'the section walk collapsed');
  ok(AUTHORED.length === AUTHORED_ROWS, `${AUTHORED.length} authored rows reached the seed, expected ${AUTHORED_ROWS}`);
});

/* ═══════════════════════════════════════════════════════════════════════════
 *  1. THE OWNS, AND THE THREE REQUIRED LAYOUTS
 * ═══════════════════════════════════════════════════════════════════════════ */

test('REQUIRED LAYOUT 1: the three degrees in ONE section, with one describing word held constant', () => {
  const s = sec('s03-three') as { rows?: Array<{ cells: string[] }>; cols?: string[] } | undefined;
  ok(s, 's03-three is missing, and it is required layout 1');
  const rows = s!.rows ?? [];
  strictEqual(rows.length, 3, 'three degrees, three rows');
  DEGREES.forEach((d, i) => {
    strictEqual(rows[i].cells[0], d, `row ${i} leads with "${rows[i].cells[0]}", expected "${d}"`);
    ok(hasWord(rows[i].cells[1], d), `row ${i}'s sentence does not contain "${d}"`);
  });
  // THE CONSTANT, asserted as well as the three middles. A version showing
  // plus grand / moins rapide / aussi cher satisfies a naive check and is three
  // lessons on one screen.
  for (const [i, r] of rows.entries()) {
    ok(hasWord(r.cells[1], 'grand'), `row ${i} does not hold "grand" constant, so the frame is not visibly fixed`);
  }
  // And the frame really IS constant: strip the middle word and the three
  // sentences must collapse to one string.
  const stripped = new Set(rows.map((r, i) => r.cells[1].replace(DEGREES[i], '').replace(/\s+/g, ' ').trim()));
  strictEqual(stripped.size, 1, `the three sentences differ by more than the middle word: ${[...stripped].join(' | ')}`);
});

test('REQUIRED LAYOUT 2: meilleur and mieux in ONE section, as a minimal pair', () => {
  const s = sec('s15-pair') as { cards?: Array<Record<string, unknown>> } | undefined;
  ok(s, 's15-pair is missing, and it is required layout 2');
  const text = strs(s).join('\n');
  for (const w of ['meilleur', 'mieux']) ok(hasWord(text, w), `s15-pair does not carry "${w}", and the layout IS the pair`);
  ok(text.includes('plus bon'), 's15-pair must show `plus bon` as what French refuses');
  // THE PAIR IS MINIMAL: same subject, same second term, one verb and one word
  // apart. fr.a2.comparaisons.066 is published; E146 was authored to twin it.
  const c0 = strs((s!.cards ?? [])[0]).join(' ');
  const c1 = strs((s!.cards ?? [])[1]).join(' ');
  ok(c0.includes('Il travaille mieux que son collègue.'), 's15-pair card 0 is not the mieux half');
  ok(c1.includes('Il est meilleur que son collègue.'), 's15-pair card 1 is not the meilleur half');
  ok(byId.has('fr.a2.comparaisons.066'), 'the published half of the minimal pair did not reach the seed');
  ok(byId.has('fr.a2.comparaisons.146'), 'the authored half of the minimal pair did not reach the seed');
});

test('REQUIRED LAYOUT 3: the comparative and the superlative are ADJACENT', () => {
  const s = sec('s10-super');
  ok(s, 's10-super is missing, and it is required layout 3');
  const text = strs(s).join('\n');
  ok(text.includes("Ce jardin est plus grand que l'autre."), 's10-super has no comparative half');
  ok(text.includes("C'est le plus grand jardin du quartier."), "s10-super has no superlative half, so the article's arrival is not visible");
  // Same noun, same describing word, one word of difference. The two corpus
  // rows behind them were authored as a pair for exactly this.
  const a = byId.get('fr.a2.comparaisons.145');
  const b = byId.get('fr.a2.comparaisons.141');
  ok(a && b, 'the adjacent pair did not reach the seed');
  ok(a!.fr.includes('jardin') && b!.fr.includes('jardin'), 'the pair does not share its noun, so it compares two things at once');
});

test('DISPLAY PARITY: the cards show the corpus rows verbatim, not a second copy of them', () => {
  /* THE WEAKNESS THE MUTATION HARNESS FOUND, and the reason this test exists.
   *
   * A `cardDeck` card and a `tapTable` cell carry INLINE strings, not itemIds,
   * so the French on a card is a second copy of the row behind it. Changing
   * `fr.a2.comparaisons.134` from « Il est moins grand que moi. » to « ... moins
   * rapide ... » destroyed the one thing required layout 1 exists for, and
   * every guard in the build stayed green.
   *
   * Invariants §5 says the corpus is the single source of truth and the lesson
   * reads it rather than restating it. The renderer makes that impossible from
   * a content build, so the pairs where the copy IS the teaching are pinned
   * here, checked against the ROW rather than against a retyped constant. */
  const PAIRS: Array<[string, string]> = [
    ['s03-three', 'fr.a2.comparaisons.133'],
    ['s03-three', 'fr.a2.comparaisons.134'],
    ['s03-three', 'fr.a2.comparaisons.135'],
    ['s08-unseen', 'fr.a2.comparaisons.133'],
    ['s08-unseen', 'fr.a2.comparaisons.134'],
    ['s08-unseen', 'fr.a2.comparaisons.135'],
    ['s09-flash', 'fr.a2.comparaisons.133'],
    ['s10-super', 'fr.a2.comparaisons.145'],
    ['s10-super', 'fr.a2.comparaisons.141'],
    ['s11-four', 'fr.a2.comparaisons.141'],
    ['s11-four', 'fr.a2.comparaisons.142'],
    ['s11-four', 'fr.a2.comparaisons.143'],
    ['s11-four', 'fr.a2.comparaisons.144'],
    ['s14-sort', 'fr.a2.comparaisons.142'],
    ['s14-sort', 'fr.a2.comparaisons.144'],
    ['s15-pair', 'fr.a2.comparaisons.146'],
    ['s15-pair', 'fr.a2.comparaisons.066'],
  ];
  for (const [sid, id] of PAIRS) {
    const s = sec(sid);
    ok(s, `${sid} is missing`);
    const r = byId.get(id);
    ok(r, `${id} is not in the seed`);
    ok(strs(s).some((x) => x.includes(r!.fr)),
      `${sid} does not display ${id} verbatim ("${r!.fr}"). The card restates the corpus rather than reading it, so the two have walked apart.`);
  }
});

test('ONE tapTable in the flow at six rows or fewer, ONE table in a reference sheet, and no table in sections', () => {
  const taps = sectionsOf(L!).filter((s) => s.type === 'tapTable');
  strictEqual(taps.length, 1, 'the prompt allows one tapTable, then stop');
  ok((((taps[0] as { rows?: unknown[] }).rows) ?? []).length <= 6, 'six rows is the Pixel 6 ceiling on a tapTable');
  strictEqual(sectionsOf(L!).filter((s) => s.type === 'table').length, 0,
    '`table` at layer core is a table-in-core density failure and has never shipped in 74 lessons');
  const sheets = (L?.sheets as Array<{ id: string; sections?: Sec[] }>) ?? [];
  const sheetTables = sheets.flatMap((sh) => (sh.sections ?? []).filter((s) => s.type === 'table'));
  strictEqual(sheetTables.length, 1, 'exactly one table, and it lives in the reference sheet');
  // A SHEET TABLE DOES NOT SCROLL SIDEWAYS ON A PIXEL 6, and NOTHING ON THE
  // HOST CAN SEE IT: validateDensity exempts a sheet, the schema takes any
  // number of cols, and the seed is correct either way. The first version of
  // this sheet shipped four columns and the fourth was cut off at the screen
  // edge with no affordance. Found by looking at the phone.
  for (const t of sheetTables) {
    const cols = (t as { cols?: string[] }).cols ?? [];
    ok(cols.length <= 3, `the reference sheet's table has ${cols.length} columns; a Pixel 6 clips the fourth`);
    for (const r of (t as { rows?: string[][] }).rows ?? []) {
      strictEqual(r.length, cols.length, 'a sheet table row disagrees with its column count');
    }
    const details = (t as { rowDetails?: unknown[] }).rowDetails ?? [];
    if (details.length) strictEqual(details.length, ((t as { rows?: unknown[] }).rows ?? []).length, '`rowDetails` is index-aligned with `rows`');
  }
  // `cheatSheet` inside a reference sheet draws its title and nothing else.
  for (const sh of sheets) {
    strictEqual((sh.sections ?? []).filter((s) => s.type === 'cheatSheet').length, 0,
      `${sh.id}: a cheatSheet inside a reference sheet draws its title and nothing else`);
  }
  // Every declared sheet is reachable.
  for (const sh of sheets) {
    ok(sectionsOf(L!).some((s) => (s as { sheetId?: string }).sheetId === sh.id), `sheet "${sh.id}" is declared and no section names it`);
  }
});

/* ═══════════════════════════════════════════════════════════════════════════
 *  2. THE SUPERLATIVE AGREES, CELL BY CELL
 * ═══════════════════════════════════════════════════════════════════════════ */

test('the superlative agrees in all four forms, asserted CELL BY CELL', () => {
  const s = sec('s11-four');
  ok(s, 's11-four is missing');
  const text = strs(s).join('\n');
  for (const form of SUPERLATIVE_FORMS) {
    ok(text.includes(form), `s11-four does not carry "${form}". A count would pass on a duplicate; naming each cell fails with the cell that went.`);
  }
  // And each has a corpus row behind it. `les plus grandes` was ZERO ROWS
  // ANYWHERE in 48,888 published items before this build.
  const cells = [
    { form: 'le plus grand', id: 'fr.a2.comparaisons.141' },
    { form: 'la plus grande', id: 'fr.a2.comparaisons.142' },
    { form: 'les plus grands', id: 'fr.a2.comparaisons.143' },
    { form: 'les plus grandes', id: 'fr.a2.comparaisons.144' },
  ];
  for (const c of cells) {
    const r = byId.get(c.id);
    ok(r, `${c.id} is a grid cell and did not reach the seed`);
    ok(r!.fr.includes(c.form), `${c.id} "${r!.fr}" does not contain "${c.form}"`);
  }
  // ONE FRAME. Strip the form and the noun and the four collapse to one string.
  const frames = new Set(cells.map((c) => byId.get(c.id)!.fr
    .replace(/^(C'est|Ce sont)\s+/, '').replace(c.form, '<F>').replace(/jardins?|maisons?/, '<N>')));
  strictEqual(frames.size, 1, `the four cells are not one frame: ${[...frames].join(' | ')}`);
});

test('every form of the agreement is tested by typeIn, and none by ear', () => {
  // The prompt: « You cannot test the agreement on `la plus grande` by ear. »
  // fold() keeps a final -e and -s, so writing is the only surface that holds
  // the distinction.
  const round = ((sec('s22-quiz') as { rounds?: Array<{ id: string; questions: Array<Record<string, unknown>> }> }).rounds ?? [])
    .find((r) => r.id === 'r3-article');
  ok(round, 'r3-article is missing, and it is where the agreement is scored');
  for (const form of SUPERLATIVE_FORMS) {
    const q = round!.questions.find((x) => String(x.answer ?? '').includes(form));
    ok(q, `no scored question produces "${form}"`);
    ok(q!.format === 'typeIn' || q!.format === 'errorSpot',
      `"${form}" is scored by ${String(q!.format)}, and only a typed surface keeps a final -e and -s`);
  }
  for (const q of quizQs()) {
    if (q.format !== 'listenChoose' && q.format !== 'speak') continue;
    const opts = ((q.opts ?? []) as string[]).map((x) => x.toLowerCase());
    const supers = opts.filter((o) => SUPERLATIVE_FORMS.some((f) => o.includes(f)));
    ok(supers.length <= 1, `an ear question offers two superlative forms, which are one sound: ${supers.join(' / ')}`);
  }
});

test('fold() still keeps a final -e and -s, which is the whole reason the agreement is testable', () => {
  notStrictEqual(fold('le plus grand'), fold('la plus grande'));
  notStrictEqual(fold('les plus grands'), fold('les plus grandes'));
  notStrictEqual(fold('le plus grand'), fold('les plus grands'));
  // And the things it CANNOT test, asserted the other way so a fold() change
  // goes stale loudly.
  strictEqual(fold("l'autre"), fold('lautre'));
  strictEqual(fold('le plus âgé'), fold('le plus age'));
  strictEqual(fold('plus grand que moi'), fold('plusgrandquemoi'));
});

/* ═══════════════════════════════════════════════════════════════════════════
 *  3. THE GENERALISATION TEST
 * ═══════════════════════════════════════════════════════════════════════════ */

test('a production item uses a describing word absent from this lesson\'s vocabulary', () => {
  const UNSEEN_ADJ = 'poli';
  const UNSEEN_FEM = 'polie';
  // NAMED, and its ABSENCE asserted. An author who later imports it deletes the
  // question without breaking anything else.
  for (const id of L!.itemIds ?? []) {
    const r = byId.get(id);
    if (!r) continue;
    ok(!hasWord(r.fr, UNSEEN_ADJ) && !hasWord(r.fr, UNSEEN_FEM),
      `${id} "${r.fr}" carries "${UNSEEN_ADJ}", which must stay unseen or the question deletes itself`);
  }
  // It appears ONLY in the two sections that ASK for it.
  const asks = new Set(['s08-unseen', 's22-quiz']);
  for (const s of sectionsOf(L!)) {
    if (asks.has(String(s.id))) continue;
    for (const str of strs(s)) {
      ok(!hasWord(str, UNSEEN_ADJ) && !hasWord(str, UNSEEN_FEM),
        `${s.id} names "${UNSEEN_ADJ}", which only the two sections that ask for it may`);
    }
  }
  // And it IS asked for, in a PRODUCTION item, or the mission does not exist.
  const uq = quizQs().filter((q) => strs(q).some((s) => hasWord(s, UNSEEN_ADJ) || hasWord(s, UNSEEN_FEM)));
  ok(uq.length >= 2, `only ${uq.length} quiz questions use "${UNSEEN_ADJ}"`);
  ok(uq.some((q) => q.format === 'typeIn'), `no typeIn uses "${UNSEEN_ADJ}", so the learner never PRODUCES the unseen form`);
  // The groupDrill's control page asks for it too, and it is the mission the
  // prompt requires.
  const g = sec('s08-unseen') as { groups?: Array<{ items?: unknown[]; check?: { q: string } }> } | undefined;
  ok(g, 's08-unseen is missing, and it is the generalisation mission');
  const control = (g!.groups ?? []).find((x) => (x.items ?? []).length === 0);
  ok(control, 's08-unseen has no control page, and the control page is where the unseen word is handed over');
  ok(control!.check && hasWord(control!.check.q, UNSEEN_ADJ), 'the control page does not hand over the unseen describing word');
});

/* ═══════════════════════════════════════════════════════════════════════════
 *  4. `plus bon`, `que`, AND `ne … plus`
 * ═══════════════════════════════════════════════════════════════════════════ */

test('`plus bon` and `plus bien` appear ONLY in the five sections that correct them', () => {
  // THE PROMPT'S TEST LIST SAYS "ONE LOCATION" AND ITS OWN REQUIRED LAYOUT 2
  // PUTS IT ON A cardDeck CARD, so one was never possible. Pinning every
  // location by id is stronger: a sixth fails, and so does the disappearance of
  // any of these five.
  const ALLOWED = ['s01-scene', 's15-pair', 's16-trap', 's17-errors', 's22-quiz'];
  for (const s of sectionsOf(L!)) {
    if (ALLOWED.includes(String(s.id))) continue;
    for (const str of strs(s)) {
      for (const f of REFUSED) {
        ok(!str.toLowerCase().includes(f), `${s.id} contains "${f}", which is not French`);
      }
    }
  }
  // And it really is present in all five, or the allow list permits rather than
  // describes.
  for (const id of ALLOWED) {
    const s = sec(id);
    ok(s, `${id} is on the allow list and is not a section`);
    ok(REFUSED.some((f) => strs(s).join('\n').toLowerCase().includes(f)),
      `${id} is allowed to carry a refused form and carries none`);
  }
  // NOT ONE CORPUS ROW CONTAINS ONE. `plus bon` is 0 rows in 48,888 published
  // items and this build did not become the first.
  for (const r of AUTHORED) {
    for (const f of REFUSED) ok(!r.fr.toLowerCase().includes(f), `${r.id} "${r.fr}" authors a form French refuses`);
  }
  // AND THE TRAP DRILL NEVER SPEAKS ONE. Its audio step plays each card's `fr`.
  const trap = sec('s16-trap') as { cards?: Array<{ fr: string; promptSound: string }> } | undefined;
  for (const c of trap?.cards ?? []) {
    for (const f of REFUSED) ok(!c.fr.toLowerCase().includes(f), `the trapDrill would SPEAK "${c.fr}"`);
  }
  ok((trap?.cards ?? []).some((c) => REFUSED.some((f) => c.promptSound.toLowerCase().includes(f))),
    'no trap card carries a refused form as its promptSound, so the trap has nothing to correct');
});

test('`plus mauvais` is shown, because the rule is lexical and not a ban on plus', () => {
  // pire and plus mauvais are BOTH ordinary French. A learner told "never say
  // plus + the word" has been given a rule that is false one word later.
  ok(LEARNER_TEXT.includes('plus mauvais'), 'the lesson never shows `plus mauvais`, so "two words refuse plus" reads as "plus is dangerous"');
  ok(byId.has('fr.a2.comparaisons.160'), '`plus mauvais` did not reach the seed as a card');
});

test('`que` is obligatory, and the pair that proves it is a pair', () => {
  const without = byId.get('fr.a2.comparaisons.136');
  const withQ = byId.get('fr.a2.comparaisons.133');
  ok(without && withQ, 'the que pair did not reach the seed');
  ok(!hasWord(without!.fr, 'que'), `${without!.id} "${without!.fr}" is meant to be the sentence WITHOUT que`);
  ok(hasWord(withQ!.fr, 'que'), `${withQ!.id} "${withQ!.fr}" is meant to be the finished comparison`);
  ok(withQ!.fr.startsWith(without!.fr.replace(/\.$/, '')),
    'the pair is not a pair: the finished sentence must be the unfinished one plus que and its object');
  // And the lesson says what the unfinished one MEANS, rather than calling it
  // wrong. It is correct French.
  ok(/complete/i.test(LEARNER_TEXT) || /he is tall\b/i.test(LEARNER_TEXT),
    'the lesson never says that Il est plus grand. is a correct sentence with a different meaning');
});

test('`ne … plus` is named once and taught nowhere', () => {
  const SHAPES = [/\bne\s+\w+\s+plus\b/i, /\bn['’]\w+\s+plus\b/i];
  for (const rx of SHAPES) {
    ok(!rx.test(LEARNER_TEXT), `a learner surface contains the negation: "${LEARNER_TEXT.match(rx)?.[0]}"`);
    for (const r of AUTHORED) ok(!rx.test(r.fr), `${r.id} contains \`ne … plus\`: "${r.fr}"`);
  }
  // The guard fires on what it exists for...
  for (const s of ['Je ne travaille plus ici.', "Il n'habite plus à Lyon."]) {
    ok(SHAPES.some((rx) => rx.test(s)), `the guard cannot see "${s}", so it is not a guard`);
  }
  // ...and spares the English, which is half a learner surface by design.
  // Corrections §14.4: a shape built out of French morphology reads English as
  // French, and `no longer` is what this construction MEANS.
  for (const s of ['It does not mean no longer.', 'Pick the middle word and keep the frame.',
    'plus is more, and it is the one you will reach for first']) {
    ok(!SHAPES.some((rx) => rx.test(s)), `the guard fires on legitimate content: "${s}"`);
  }
  // It IS named, once, on the roundup.
  ok(strs(sec('s24-roundup')).join('\n').includes('ne ... plus'),
    'the roundup does not name `ne ... plus`, and a learner meeting it cold reads it as this lesson\'s plus');
});

/* ═══════════════════════════════════════════════════════════════════════════
 *  5. a2.34'S MATERIAL, WHICH SITS INSIDE THIS THEME
 * ═══════════════════════════════════════════════════════════════════════════ */

const POSSESSIVES = [
  'le mien', 'la mienne', 'les miens', 'les miennes',
  'le tien', 'la tienne', 'les tiens', 'les tiennes',
  'le sien', 'la sienne', 'les siens', 'les siennes',
  'le nôtre', 'la nôtre', 'les nôtres', 'le vôtre', 'la vôtre', 'les vôtres',
  'le leur', 'la leur', 'les leurs',
];

test('NO possessive pronoun appears on ANY surface: decks, vocab, drills or quiz', () => {
  // A2-TAIL-AUDIT §6: `fr.a2.comparaisons` holds a2.34's material, because
  // comparing possessions is the natural frame for both units. The prompt
  // allows using them as objects. This build uses NONE, which makes the guard
  // unweakenable by a later edit.
  for (const p of POSSESSIVES) {
    ok(!hasWord(LEARNER_TEXT, p), `"${p}" is a possessive pronoun and reaches a surface here. a2.34 owns them.`);
  }
  for (const id of L!.itemIds ?? []) {
    const r = byId.get(id);
    if (!r) continue;
    for (const p of POSSESSIVES) ok(!hasWord(r.fr, p), `${id} "${r.fr}" carries "${p}" and is referenced by this lesson`);
  }
  // Scored surfaces specifically, which is what the prompt names.
  for (const q of quizQs()) {
    for (const s of strs(q)) {
      for (const p of POSSESSIVES) ok(!hasWord(s, p), `a quiz question carries "${p}"`);
    }
  }
  // The guard fires on the real rows and spares this lesson's own content.
  for (const s of ['Mon chien est plus obéissant que le tien.', 'Ma valise est plus lourde que la tienne.']) {
    ok(POSSESSIVES.some((p) => hasWord(s, p)), `the possessive guard cannot see "${s}"`);
  }
  for (const s of ['Il est plus grand que moi.', 'Elle parle mieux que moi.', 'les plus grandes maisons du quartier']) {
    ok(!POSSESSIVES.some((p) => hasWord(s, p)), `the possessive guard fires on legitimate content: "${s}"`);
  }
});

test('the eighteen possessive rows are named in the source and handed to a2.34 untouched', () => {
  if (!SRC) return;
  strictEqual(SRC.POSSESSIVE_ROWS.length, 18, 'eighteen rows measured 2026-08-17');
  for (const r of SRC.POSSESSIVE_ROWS) {
    ok(!(L!.itemIds ?? []).includes(r.id), `${r.id} is on a2.34's list and this lesson references it`);
    ok(POSSESSIVES.some((p) => hasWord(r.fr, p)), `${r.id} is on the list and carries no possessive pronoun, so the list has drifted`);
  }
});

/* ═══════════════════════════════════════════════════════════════════════════
 *  6. THE RESPELLINGS, THROUGH THE REAL hasPlainNasalFor
 * ═══════════════════════════════════════════════════════════════════════════ */

test('no authored respelling closes a nasal with a plain n or m', () => {
  for (const r of AUTHORED) {
    if (!r.respell) continue;
    ok(!hasPlainNasalFor(r.fr, r.respell), `${r.id} "${r.respell}" closes a nasal with a plain n/m`);
  }
});

test('THE REPAIRS: stored, half-repair and final, all through the real function', () => {
  // Corrections §6 AS AMENDED BY §14.1: one table, every entry carrying the
  // value you get by repairing ONLY WHAT THE CHECKER REPORTS, and `blind` and
  // `house` kept as separate, mutually exclusive reasons rather than one
  // boolean. a2.17's own build caught the conflation on `bien`, which is one of
  // the six here.
  const TABLE = [
    { id: 'fr.sons.faux-amis.024', fr: 'grand', from: 'GRAHN', half: 'GRAHⁿ', to: 'GRAHⁿ', house: false },
    { id: 'fr.b2.ethique.052', fr: 'le bien', from: 'BYAN', half: 'BYAⁿ', to: 'BYEHⁿ', house: true },
    { id: 'fr.b2.philosophie.084', fr: 'le bien', from: 'luh byahn', half: 'luh byahⁿ', to: 'luh BYEHⁿ', house: true },
    { id: 'fr.sons.mots-essentiels.140', fr: 'moins', from: 'MWAN', half: 'MWAⁿ', to: 'MWEHⁿ', house: true },
    { id: 'fr.sons.nombres.099', fr: 'moins', from: 'MWAN', half: 'MWAⁿ', to: 'MWEHⁿ', house: true },
    { id: 'fr.sons.expressions-utiles.069', fr: 'moins vite', from: 'mwan VEET', half: 'mwaⁿ VEET', to: 'mwehⁿ VEET', house: true },
  ];
  for (const r of TABLE) {
    ok(hasPlainNasalFor(r.fr, r.from), `${r.id}: the checker does NOT flag the stored value "${r.from}", so this entry describes nothing`);
    ok(!hasPlainNasalFor(r.fr, r.half), `${r.id}: the checker still flags the half-repair "${r.half}"`);
    ok(!hasPlainNasalFor(r.fr, r.to), `${r.id}: the checker flags the FINAL value "${r.to}"`);
    strictEqual(r.half !== r.to, r.house,
      `${r.id}: half !== to is ${r.half !== r.to} and house is ${r.house}. They are two reasons for one symptom and must not be conflated.`);
  }
  // NOT ONE IS BLIND, and that is worth pinning: every nasal in this lesson's
  // lexicon ends a token, so §6's word-internal blind spot does not fire here.
  // If the checker regresses, this goes red.
  if (SRC) {
    for (const r of SRC.RESPELL_REPAIRS) {
      strictEqual(r.blind, false, `${r.id} is filed blind, and none of the six was when this was measured`);
    }
    strictEqual(SRC.RESPELL_REPAIRS.length, TABLE.length, 'the source table and this one have drifted apart');
  }
});

test('the ONE repair inside the seed cut reached the device; the five outside it did not', () => {
  // Measured 2026-08-17: five of the six repaired rows sit outside the cut and
  // one, fr.sons.nombres.099, is in it carrying the broken MWAN. Carrying the
  // other five would add two GENDERED SINGLE WORDS (`le bien`) to the seed,
  // which is the shape that moves a1.03's measured ending population, to
  // deliver a respelling for a word no learner meets in the seed.
  const inCut = byId.get('fr.sons.nombres.099');
  ok(inCut, 'fr.sons.nombres.099 is not in the seed');
  strictEqual(inCut!.respell, 'MWEHⁿ', 'the one repair a learner can meet today is still broken in the seed');
  ok(!hasPlainNasalFor(inCut!.fr, inCut!.respell!), 'the repaired value is still flagged');
  for (const id of ['fr.b2.ethique.052', 'fr.b2.philosophie.084']) {
    ok(!byId.has(id), `${id} is a gendered single word and this build pulled it into the seed to deliver a respelling`);
  }
});

/* ═══════════════════════════════════════════════════════════════════════════
 *  7. THE CITATIONS, BY UNIT ID
 * ═══════════════════════════════════════════════════════════════════════════ */

test('a2.03 and a2.17 are named by unit id, on a learner surface and in grammarAssumed', () => {
  const assumed = (L?.grammarAssumed as string[]) ?? [];
  for (const u of ['a2.03', 'a2.17']) {
    ok(assumed.includes(u), `${u} is not in grammarAssumed, and this lesson extends it`);
    ok(LEARNER_TEXT.includes(u), `${u} is never named on a learner surface. The prompt asks for the loop to be closed BY NAME.`);
  }
  // a2.14, because bon/bien is savoir/connaître a second time and the prompt
  // asks for that unit to be named.
  ok(LEARNER_TEXT.includes('a2.14'), 'a2.14 is not named, and bon/bien is its meaning-split shape a second time');
  // a1.18 owns `ne … plus` and gets the one line.
  ok(LEARNER_TEXT.includes('a1.18'), 'a1.18 owns `ne … plus` and is not named');
});

test("a2.17's four reserved forms are all taken here, each by a row that exists", () => {
  // `adverbes-corpus.ts:560` reads RESERVED_FOR_A208 = ['mieux', 'plus vite',
  // 'le mieux', 'moins vite'] and asserts that `mieux` appears on NO learner
  // surface in a2.17. This is the other end of that assertion.
  const TAKEN: Record<string, string> = {
    mieux: 'fr.a2.comparaisons.147',
    'le mieux': 'fr.a2.comparaisons.148',
    'plus vite': 'fr.a2.comparaisons.161',
    'moins vite': 'fr.a2.comparaisons.162',
  };
  for (const [form, id] of Object.entries(TAKEN)) {
    const r = byId.get(id);
    ok(r, `${id} is meant to take a2.17's reserved "${form}" and did not reach the seed`);
    ok(r!.fr.includes(form), `${id} "${r!.fr}" is meant to be "${form}"`);
    ok(LEARNER_TEXT.includes(form), `"${form}" was reserved for this unit and appears on no learner surface here`);
  }
  // `mieux` had NO headword anywhere in the corpus before this build. If it
  // gains a second one in this theme, the flashcard hub serves one card twice.
  const mieux = items.filter((i) => i.theme === THEME && i.kind !== 'sentence' && i.fr.trim().toLowerCase() === 'mieux');
  strictEqual(mieux.length, 1, `${mieux.length} rows in ${THEME} hold the bare headword \`mieux\``);
});

test("a2.03's five reserved forms all reach a learner here", () => {
  // `accord-adjectifs-corpus.ts:414` reads COMPARATIVE_FORMS = ['plus grand',
  // 'moins grand', 'le plus grand', 'aussi grand', 'meilleur'] and asserts they
  // appear nowhere in a2.03.
  for (const form of ['plus grand', 'moins grand', 'le plus grand', 'aussi grand', 'meilleur']) {
    ok(LEARNER_TEXT.includes(form), `a2.03 reserved "${form}" for this unit and it appears on no learner surface here`);
  }
});

/* ═══════════════════════════════════════════════════════════════════════════
 *  8. THE QUIZ
 * ═══════════════════════════════════════════════════════════════════════════ */

test('30 questions, four rounds, and a mix that matches the measured A2 band', () => {
  const qs = quizQs();
  strictEqual(qs.length, QUESTIONS, 'the measured A2 shape is 30 questions');
  const mix: Record<string, number> = {};
  for (const q of qs) mix[String(q.format)] = (mix[String(q.format)] ?? 0) + 1;
  ok((mix.mcq ?? 0) <= qs.length / 2, `${mix.mcq} of ${qs.length} are mcq and at most half may be`);
  ok((mix.typeIn ?? 0) > (mix.mcq ?? 0), `typeIn ${mix.typeIn} against mcq ${mix.mcq}; A2 assesses in writing and the prompt asks for typeIn weighting`);
  ok((mix.listenChoose ?? 0) >= 2, 'the prompt asks for two listenChoose items on `plus` and its final consonant');
  ok((mix.errorSpot ?? 0) >= 2, 'errorSpot is the only surface that catches `plus bon` and a missing `que`');
  strictEqual(((sec('s22-quiz') as { rounds?: unknown[] }).rounds ?? []).length, 4);
});

test('every question carries a why AND a ref, and every ref resolves', () => {
  const ids = new Set(sectionsOf(L!).map((s) => s.id));
  for (const q of quizQs()) {
    ok(q.why, `no why: ${String(q.q)}`);
    ok(q.ref, `no ref: ${String(q.q)}`);
    ok(ids.has(String(q.ref)), `ref "${String(q.ref)}" is not a section id, so the jump lands nowhere`);
  }
});

test('every listenChoose carries an explicit say, and both `plus` items are there', () => {
  const lcs = quizQs().filter((q) => q.format === 'listenChoose');
  for (const q of lcs) {
    ok(q.say, `a listenChoose has no say: "${String(q.q)}". Without it the card speaks opts[correct].`);
  }
  // THE TWO THE PROMPT ASKS FOR, by the sentence they play. `plus` before a
  // describing word is /ply/ and `plus` with nothing after it is /plys/, which
  // twelve published respellings encode with no counterexample.
  const says = lcs.map((q) => String(q.say));
  ok(says.some((s) => s === 'Il est plus grand.'), 'no listenChoose plays `plus` in front of a describing word');
  ok(says.some((s) => s === 'Il en veut plus.'), 'no listenChoose plays `plus` with nothing after it');
});

test('every free-text question accepts the answer it displays, through the real fold()', () => {
  for (const q of quizQs()) {
    if (q.format !== 'typeIn' && q.format !== 'errorSpot') continue;
    if (q.format === 'errorSpot') ok(q.prompt, `an errorSpot has no prompt: "${String(q.q)}"`);
    const accept = (q.accept ?? []) as string[];
    ok(accept.some((a) => fold(a) === fold(String(q.answer))),
      `a ${String(q.format)} does not accept the answer it displays: "${String(q.answer)}"`);
  }
});

test('no scored question turns on an accent, a cedilla or a hyphen, which fold() strips anyway', () => {
  for (const q of quizQs()) {
    if (q.format !== 'typeIn' && q.format !== 'errorSpot') continue;
    const answer = String(q.answer);
    const stripped = answer.normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/-/g, ' ');
    strictEqual(fold(stripped), fold(answer),
      `"${answer}" is a scored answer whose difficulty survives an accent or hyphen strip, which fold() does anyway`);
  }
});

test('each remediation drill is the first resolving target of exactly one round', () => {
  // `drillForRound` fires the drill of the FIRST resolving target only, then
  // stops. a1.05 shipped two dead drills and a1.07's first draft a third.
  const triggers = new Map(((L?.errorTriggers as Array<{ id: string; drill: string; retest?: string }>) ?? []).map((t) => [t.id, t]));
  const rounds = ((sec('s22-quiz') as { rounds?: Array<{ id: string; targets?: string[] }> }).rounds ?? []);
  const firedBy = new Map<string, string>();
  for (const r of rounds) {
    const first = (r.targets ?? [])[0];
    ok(first, `round ${r.id} names no targets, so it fires no remediation`);
    const t = triggers.get(first!);
    ok(t, `round ${r.id}'s first target "${first}" is not an errorTrigger`);
    ok(!firedBy.has(t!.drill), `drill "${t!.drill}" is the first resolving target of ${firedBy.get(t!.drill)} AND ${r.id}`);
    firedBy.set(t!.drill, r.id);
  }
  for (const d of (L?.drills as Array<{ id: string }>) ?? []) {
    const isRetest = ((L?.errorTriggers as Array<{ retest?: string }>) ?? []).some((t) => t.retest === d.id);
    ok(firedBy.has(d.id) || isRetest, `drill "${d.id}" is fired by no round and is no trigger's retest, so it is dead content`);
  }
});

/* ═══════════════════════════════════════════════════════════════════════════
 *  9. THE DICTÉE, AND THE DRILL TRAP THIS THEME CARRIES
 * ═══════════════════════════════════════════════════════════════════════════ */

test('all five dictée targets are LETTERS mode, which is the only mode that tests a spelling', () => {
  const d = sec('s18-dictee') as { itemIds?: string[] } | undefined;
  ok(d, 's18-dictee is missing');
  strictEqual((d!.itemIds ?? []).length, 5);
  for (const id of d!.itemIds ?? []) {
    const r = byId.get(id);
    ok(r, `${id} is a dictée id and is not in the seed`);
    ok((r!.drills ?? []).includes('dictation'), `${id} carries no dictation drill`);
    strictEqual(dicteeMode(r!.fr), 'letters',
      `${id} "${r!.fr}" is word mode, and word mode hands every real word over pre-spelled`);
    ok(!r!.fr.includes('-'), `${id} "${r!.fr}" contains a hyphen and fold() strips it`);
  }
  // AND WHY ALL FIVE HAD TO BE AUTHORED: every published sentence in this theme
  // is word mode. Proved on the shortest of the 129.
  strictEqual(dicteeMode("Il fait moins froid qu'hier."), 'words',
    'the shortest published sentence in this theme is no longer word mode; re-check whether the dictée had to be authored');
});

test('THE DRILL TRAP: 112 published sentences in this theme carry no flashcard, and none is released', () => {
  const released = [...new Set(((L?.deckTranche as string[][]) ?? []).flat())];
  ok(released.length > 50, `only ${released.length} ids are released, which is too few to be the real tranches`);
  for (const id of released) {
    const r = byId.get(id);
    ok(r, `${id} is released by a deckTranche and is not in the seed`);
    ok((r!.drills ?? []).includes('flashcard'),
      `${id} carries no flashcard drill, so no deck can serve it. In ${THEME} that is 112 of 129 published rows.`);
  }
  // AND THE OTHER DIRECTION: every import that cannot be released IS named by a
  // section, a term or a drill, or it is a row carried into the seed for
  // nothing.
  const named = new Set([
    ...strs(L?.sections), ...strs(L?.terms), ...strs(L?.drills),
  ].filter((s) => /^fr\.[a-z0-9]+\.[a-z0-9-]+\.\d{3,}$/.test(s)));
  const releasedSet = new Set(released);
  for (const id of L!.itemIds ?? []) {
    ok(releasedSet.has(id) || named.has(id), `${id} is referenced by this lesson, is released by no tranche and is named by no section, term or drill. It is unreachable.`);
  }
});

test('every item the practice section names carries the voiceflash drill', () => {
  const p = sec('s20-speak') as { itemIds?: string[]; skill?: string } | undefined;
  ok(p, 's20-speak is missing, and `practice` is MANDATORY');
  strictEqual(p!.skill, 'speak', "`practice` renders the SPEAKING drill whatever `skill` says, and 'write' draws no writing surface");
  ok((p!.itemIds ?? []).length > 0, 'an empty practice.itemIds fails the publish gate');
  for (const id of p!.itemIds ?? []) {
    const r = byId.get(id);
    ok(r, `${id} is named by the practice section and is not in the seed`);
    ok((r!.drills ?? []).includes('voiceflash'), `${id} is named by practice and carries no voiceflash, so the mic scores nothing`);
  }
});

test('every id the lesson names resolves against the seed, and no theme holds a duplicate word', () => {
  for (const id of L!.itemIds ?? []) ok(byId.has(id), `${id} is in itemIds and not in the seed`);
  for (const s of strs(L?.sections)) {
    if (!/^fr\.[a-z0-9]+\.[a-z0-9-]+\.\d{3,}$/.test(s)) continue;
    ok(byId.has(s), `${s} is named by a section and is not in the seed`);
  }
  // Computed the way `flashhub-coverage.test.ts` computes it: article-stripped,
  // non-sentence rows only, per theme.
  const norm = (s: string) => s.toLowerCase().replace(/^(le |la |les |l'|un |une |des )/, '').trim();
  const seen = new Map<string, string>();
  for (const it of items) {
    if (it.theme !== THEME || it.kind === 'sentence') continue;
    const k = norm(it.fr);
    const prior = seen.get(k);
    ok(!prior, `${prior} and ${it.id} share "${it.fr}" inside ${THEME}, so the hub serves one card twice`);
    seen.set(k, it.id);
  }
});

test('every authored row carries both flashcard and voiceflash', () => {
  // `flashhub-coverage.test.ts` strands any a1/a2 word or phrase missing
  // either. Sentences are exempt from that check and carry both anyway, because
  // `practice` needs voiceflash and every deckTranche release needs flashcard,
  // and the 112 published sentences in this theme have NEITHER.
  for (const r of AUTHORED) {
    ok((r.drills ?? []).includes('flashcard'), `${r.id} carries no flashcard drill`);
    ok((r.drills ?? []).includes('voiceflash'), `${r.id} carries no voiceflash drill`);
    strictEqual(r.level, 'a2');
    strictEqual(r.theme, THEME);
    ok(!r.gender, `${r.id} carries a gender, which is the shape that joins a1.03's ending population`);
  }
});

/* ═══════════════════════════════════════════════════════════════════════════
 *  10. THE HOUSE RULES
 * ═══════════════════════════════════════════════════════════════════════════ */

test('no jargon on a learner surface, including the -s plural of every entry and Lesson.intro', () => {
  const JARGON = [
    'paradigm', 'inflection', 'inflectional', 'morpheme', 'lexeme', 'suppletive',
    'suppletion', 'periphrastic', 'degree of comparison', 'positive degree',
    'attributive', 'predicative', 'gradable', 'part of speech', 'lexical category',
    'modifier', 'head noun', 'concord', 'allomorph', 'conjugation',
  ];
  for (const j of JARGON) {
    for (const form of [j, `${j}s`]) {
      ok(!hasWord(LEARNER_TEXT, form), `jargon on a learner surface: "${form}"`);
      // `intro` PINNED IN ITS OWN ASSERTION. It is drawn on the lesson overview
      // card AND the lesson cover, and a2.11 shipped "third person" there while
      // every other layer was green.
      ok(!hasWord(String(L?.intro ?? ''), form), `jargon in Lesson.intro, which is drawn on the cover: "${form}"`);
      ok(!hasWord(strs(L?.overview).join('\n'), form), `jargon in Lesson.overview: "${form}"`);
    }
  }
});

test('GUARD THE RATIO, NOT THE WORD: the plain phrase outnumbers the technical one', () => {
  // Corrections §14.5. `adjective` is on 147 shipped cards, so banning it would
  // be this build inventing a rule. a1.16 runs `describing word` 74 times
  // against `adjective` 12.
  const plain = countOf(LEARNER_TEXT, 'describing word') + countOf(LEARNER_TEXT, 'describing words');
  const technical = countOf(LEARNER_TEXT, 'adjective') + countOf(LEARNER_TEXT, 'adjectives');
  ok(plain > 0, 'the plain phrase appears zero times, so the ratio guard is measuring nothing');
  ok(plain > technical, `"describing word" appears ${plain} times against "adjective" ${technical}`);
});

test('no em dash, no U+203F, and no honest/honesty as a SUBSTRING', () => {
  const ALL = [LEARNER_TEXT, ...AUTHORED.map((r) => `${r.fr} ${r.en}`)].join('\n');
  ok(!ALL.includes('—'), 'an em dash in authored copy');
  ok(!JSON.stringify(L).includes('‿'), 'U+203F renders as a low underscore on a Pixel 6 and is live in shipped sons.10 content');
  // DELIBERATELY NOT WORD-BOUNDED: the band's inherited `\bhonest` guard cannot
  // see "dishonest", which a2.06 found and every earlier A2 lesson carries.
  ok(!ALL.toLowerCase().includes('honest'), 'authored copy contains "honest" as a substring');
  ok(!ALL.toLowerCase().includes('honesty'), 'authored copy contains "honesty" as a substring');
});

test('THE DOUBLE-STOP GUARD, WHOLE SHAPE: a sentence-final stop followed by ANY punctuation', () => {
  for (const s of [...strs(L?.sections), ...AUTHORED.map((r) => r.fr)]) {
    ok(!/[.!?]\s*[.,;:!?]/.test(s.replace(/\.\.\./g, '')), `double stop: "${s.slice(0, 70)}"`);
  }
});

test('no spaced exclamation mark in the scene, which loses the line its last word', () => {
  for (const s of strs(sec('s01-scene'))) ok(!/\s!/.test(s), `a spaced exclamation mark in the scene: "${s.slice(0, 60)}"`);
});

test('no authored string claims something the app cannot do', () => {
  const ALL = [LEARNER_TEXT, ...AUTHORED.map((r) => `${r.fr} ${r.en}`)].join('\n').toLowerCase();
  for (const c of ['against the clock', 'you have 30 seconds', 'time yourself', 'countdown',
    'as fast as you can', 'beat the timer', 'type your answer below', 'we will mark your text']) {
    ok(!ALL.includes(c), `claims something the app cannot deliver: "${c}"`);
  }
});

/* ═══════════════════════════════════════════════════════════════════════════
 *  11. THE SHAPE
 * ═══════════════════════════════════════════════════════════════════════════ */

test('24 missions, six acts, and every act names sections that exist', () => {
  strictEqual(sectionsOf(L!).length, MISSIONS, 'the measured A2 house shape is 24');
  const acts = (L?.acts as Array<{ id: string; sections: string[] }>) ?? [];
  strictEqual(acts.length, 6);
  const ids = new Set(sectionsOf(L!).map((s) => s.id));
  const claimed = acts.flatMap((a) => a.sections);
  for (const s of claimed) ok(ids.has(s), `act names "${s}", which is not a section`);
  strictEqual(claimed.length, MISSIONS, 'every section belongs to exactly one act');
  // THE OWNS OUTWEIGHS THE TRAP. Here the Owns IS the frame, so what has to be
  // true is that the frame and the article outweigh the scene and the trap.
  const n = (id: string) => acts.find((a) => a.id === id)!.sections.length;
  ok(n('act2') + n('act3') > n('act1') + n('act4'),
    `the frame and the article hold ${n('act2') + n('act3')} missions and the scene and the trap hold ${n('act1') + n('act4')}`);
});

test('the reframe is carried verbatim across an explicit number of sections', () => {
  // Asserted against a CONSTANT, not a figure derived from the lesson. A
  // derived count compares the content to itself and passes on any rewording.
  const reframe = String(L?.reframe ?? '');
  strictEqual(reframe, 'Pick the middle word and keep the frame.');
  const hits = sectionsOf(L!).filter((s) => strs(s).some((x) => x.includes(reframe)));
  strictEqual(hits.length, REFRAME_SECTIONS, `the reframe appears verbatim in ${hits.length} sections, and this build carries it in ${REFRAME_SECTIONS}`);
});

test('exactly one quiz, commonErrors has swipe, and the trapDrill is the stepped shape', () => {
  strictEqual(sectionsOf(L!).filter((s) => s.type === 'quiz').length, 1, 'a second quiz section is silently never rendered');
  const e = sec('s17-errors') as { swipe?: boolean; errors?: unknown[] } | undefined;
  ok(e, 's17-errors is missing');
  strictEqual(e!.swipe, true, 'commonErrors without swipe draws a blank screen');
  ok((e!.errors ?? []).length >= 5);
  const t = sec('s16-trap') as Record<string, unknown> | undefined;
  ok(t, 's16-trap is missing');
  ok(t!.rule, 'no `rule`, so the opening step draws nothing');
  strictEqual(t!.swipe, true);
  ok(t!.audio, 'no audio spec');
  ok(t!.say, 'no say');
  ok(!('size' in t!), '`size` comes OFF a stepped trapDrill');
  deepStrictEqual(((t!.steps as Array<{ kind: string }>) ?? []).map((s) => s.kind), ['rule', 'cards', 'audio', 'drill']);
  ok(((t!.steps as Array<{ kind: string; gate?: boolean }>) ?? []).some((s) => s.kind === 'drill' && s.gate), 'the drill step is not gated');
});

test('no section declares more than three term chips, and every term is surfaced', () => {
  const chipped = new Set<string>();
  for (const s of sectionsOf(L!)) {
    const t = (s as { terms?: string[] }).terms ?? [];
    ok(t.length <= 3, `${s.id} declares ${t.length} term chips and the renderer shows three`);
    t.forEach((k) => chipped.add(k));
  }
  for (const k of Object.keys((L?.terms as Record<string, unknown>) ?? {})) {
    ok(chipped.has(k), `term "${k}" is defined and no section surfaces it`);
  }
  // And every term example resolves, which is also how eleven imported
  // sentences become reachable at all.
  for (const t of Object.values((L?.terms as Record<string, { examples?: Array<{ itemId: string }> }>) ?? {})) {
    for (const ex of t.examples ?? []) ok(byId.has(ex.itemId), `a term example names ${ex.itemId}, which is not in the seed`);
  }
});

test('the listening section hides its lines, and the reading opens its questions in a modal', () => {
  const l = sec('s06-hear') as { hideLines?: boolean; lines?: unknown[] } | undefined;
  ok(l, 's06-hear is missing');
  strictEqual(l!.hideLines, true, 'without hideLines the line card prints fr AND en beside the play dot, which is a reading exercise');
  const r = sec('s13-read') as { questionsInModal?: boolean; glossary?: Array<{ word: string }>; text?: string } | undefined;
  ok(r, 's13-read is missing');
  strictEqual(r!.questionsInModal, true, 'reading + glossary needs questionsInModal or the glossary renderer is never reached');
  // Every glossary key appears in `text` verbatim and is under five words.
  for (const g of r!.glossary ?? []) {
    ok(r!.text!.includes(g.word), `glossary key "${g.word}" does not appear in the passage`);
    ok(g.word.split(/\s+/).length < 5, `a glossary key of five or more words can never match: "${g.word}"`);
  }
  // A reading passage is ONE BLOCK: PassagePage splits on /(?<=[.!?»])\s+/ and
  // an authored newline is silently discarded.
  ok(!r!.text!.includes('\n'), 'the passage contains a newline, which is silently discarded');
});

test('the lesson carries no field the shipped corpus does not, and no dead field', () => {
  const others = (seed.lessons as unknown as Lsn[]).filter((l) => l.id !== LESSON_ID);
  const known = new Set(others.flatMap((l) => Object.keys(l)));
  const invented = Object.keys(L as unknown as Record<string, unknown>).filter((k) => !known.has(k));
  deepStrictEqual(invented, [], `carries field(s) no other lesson has: ${invented.join(', ')}`);
  for (const dead of ['canDo', 'track', 'teaches']) {
    ok(!(dead in (L as unknown as Record<string, unknown>)), `the Lesson carries \`${dead}\`, which draws nothing`);
  }
  const s = JSON.stringify(L);
  for (const f of ['modelPlayback', 'wrongThenRight', 'perSentenceReplay', 'scoreOn', 'autoplay', 'maxPlays']) {
    ok(!s.includes(`"${f}"`), `\`${f}\` validates, publishes and is read by no renderer`);
  }
  for (const sec2 of sectionsOf(L!)) {
    if (sec2.type === 'cardDeck') ok(!('itemIds' in sec2), `${sec2.id}: itemIds on a cardDeck draws nothing`);
    for (const g of ((sec2 as { groups?: Array<{ items?: Array<Record<string, unknown>> }> }).groups ?? [])) {
      for (const it of g.items ?? []) ok(!('sub' in it), `${sec2.id}: a groupDrill item carries sub, which draws nothing. Use note.`);
    }
  }
});

test('EVERY scenario turn carries userEn and two alts', () => {
  // `scenario.logic.test.ts` requires both seed-wide; this names the section so
  // a failure says which turn.
  const s = sec('s19-talk') as { turns?: Array<Record<string, unknown>>; setting?: string } | undefined;
  ok(s, 's19-talk is missing');
  ok(s!.setting && String(s!.setting).length > 20, 'the scenario needs a setting that stands on its own');
  const turns = s!.turns ?? [];
  ok(turns.length >= 5, `${turns.length} turns`);
  for (const [i, t] of turns.entries()) {
    ok(t.ai && t.en && t.user, `turn ${i} is missing ai, en or user`);
    ok(typeof t.userEn === 'string' && (t.userEn as string).length > 0,
      `turn ${i} has no userEn, so the reveal shows French the learner cannot read`);
    const alts = (t.alts ?? []) as Array<{ fr?: string; en?: string }>;
    ok(alts.length >= 2, `turn ${i} has ${alts.length} alts, and a conversation has more than one right answer`);
    for (const a of alts) ok(a.fr && a.en, `turn ${i} has an alt missing fr or en`);
  }
});

/* ═══════════════════════════════════════════════════════════════════════════
 *  12. SEED PARITY, DERIVED FROM THE AUTHORED SOURCE
 * ═══════════════════════════════════════════════════════════════════════════ */

test('every authored row in the source reached the seed with the same body', () => {
  if (!SRC) return;
  strictEqual(SRC.ALL_ROWS.length, AUTHORED_ROWS);
  for (const r of SRC.ALL_ROWS) {
    const s = byId.get(r.id);
    ok(s, `${r.id} is in the source and not in the seed`);
    strictEqual(s!.fr, r.fr, `${r.id} differs between the source and the seed`);
    if (r.respell) strictEqual(s!.respell, r.respell, `${r.id}'s respelling differs between the source and the seed`);
  }
});

test('the theme came across, because it was entirely outside the cut', () => {
  const inSeed = items.filter((i) => i.theme === THEME).length;
  ok(inSeed >= 70, `${inSeed} ${THEME} rows in the seed; the theme held ZERO before this build and every referenced row had to be pulled`);
  // The rows this lesson leans on hardest. a2.11 found that NEITHER of its two
  // hardest-leaned-on rows was in the seed.
  for (const id of ['fr.a2.comparaisons.001', 'fr.a2.comparaisons.004', 'fr.a2.comparaisons.066',
    'fr.a2.comparaisons.092', 'fr.a2.comparaisons.113', 'fr.a2.comparaisons.117']) {
    ok(byId.has(id), `${id} is leaned on by this lesson and did not reach the seed, so its card renders empty`);
  }
});
