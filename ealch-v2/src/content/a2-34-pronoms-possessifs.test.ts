// a2.34.l1 « Pronoms possessifs » — the guard.
//
// Everything is read out of `seed.json`, because the seed is what the app
// bundles and therefore what a learner can actually meet. The source files are
// imported as well, for the assertions that need the build's own tables (the
// repair states, the rejected candidates, the guard fixtures), and the two are
// told apart the way Corrections §9 requires: an ABSENT source is a checkout
// without `ealch-admin`; a THROWING one is a broken build and must not silently
// skip thirty assertions.
//
// The five holes every guard in this band still carries, and what is done here:
//
//   1. THE JARGON WALK MUST COVER `Lesson.intro`, `overview` AND THE SHEETS.
//      `intro` is drawn on the lesson overview card AND the lesson cover;
//      a2.11 shipped "third person" there past every host-side gate and only a
//      Pixel 6 found it. It is run over a `display()` walk, which keeps `sub`
//      (Corrections §13) and drops only machine keys, and the `-s` plural of
//      every entry is checked because `hasPhrase` is boundary-exact.
//   2. THE HOUSE WORD BOUNDARY EXCLUDES `'`, so it cannot see `c'est` or
//      `qu'il`. The apostrophe is dropped from the LEFT boundary and kept on
//      the right.
//   3. `\bhonest` CANNOT SEE "dishonest". The banned-word guard fires on the
//      SUBSTRING, in both directions.
//   4. THE DOUBLE-STOP GUARD IS HALF THE SHAPE. It checks for a sentence-final
//      stop followed by ANY punctuation, not for two dots.
//   5. Corrections §14.5: `possessive` is NOT jargon. The RATIO is guarded, so
//      the plain phrase outnumbers the technical one.
//
// AND A SIXTH THIS LESSON FOUND, WHICH IS THE MIRROR OF HOLE 2. Keeping the
// apostrophe in the RIGHT-hand class makes « a2.24's line » invisible to a
// check for `a2.24`, and every citation in this band is written in exactly that
// shape. `namesUnit` drops it from both sides, and only for a unit id, which
// can never be part of an elided French word.

import { test } from 'node:test';
import { ok, strictEqual, deepStrictEqual, notStrictEqual } from 'node:assert';
import seed from './seed.json' with { type: 'json' };
import { fold } from './answer.logic.ts';
import { dicteeMode } from './dictee.logic.ts';
import { hasPlainNasalFor } from './density.logic.ts';
import { quizQuestions } from './schema.ts';

const LESSON_ID = 'a2.34.l1';
const UNIT_ID = 'a2.34';
const THEME = 'pronoms-essentiels';
const ID_FIRST = 364;
const ID_LAST = 395;

/* ─── The numbers that are the SHAPE of the lesson ────────────────────────── */

/** A hardcoded count fails on itself the first time content legitimately
 *  changes, EXCEPT where the number IS the shape. These are: four cells in the
 *  mien/tien/sien families, three in the others, six families, eighteen
 *  published headwords, three leurs. A quiet drop in any of them is exactly
 *  what this file exists to catch. */
const FOUR_CELLS = ['le mien', 'la mienne', 'les miens', 'les miennes'] as const;
const SIX_FAMILIES = ['mien', 'tien', 'sien', 'nôtre', 'vôtre', 'leur'] as const;
const MISSIONS = 24;
const QUESTIONS = 30;
const AUTHORED_ROWS = 32;
const REFRAME_COUNT = 25;
const REFRAME = 'Two words, and the thing owned picks them both.';

/** The strings this build quotes, RETYPED HERE ON PURPOSE. The build imports
 *  them so the quotation cannot drift; this test retypes them so the test
 *  cannot drift with it. If a1.17, a2.24 or a2.33 rewords, the build fails
 *  first and this fails second, and both failures name the same sentence. */
const A117_REFRAME = 'Ask what is owned, not who owns it.';
const A117_TEST = 'a possessive has a thing behind it';
const GENDER_LOST = 'The word lui is him or her. Going from one set to the other you lose the gender, which is one less thing to get right.';
const LEUR_RULE = 'The leur in front of a verb never takes an s. Ever.';
const LEUR_RULE_SCOPE = 'in front of a verb';
const A233_REFRAME = 'A noun after it means it points. No noun means it replaces.';
const A234_SHAPE = 'Here a noun after it means the one word, and no noun means the two.';
const WHAT_FOLLOWS = 'what comes next decides';

const ADJ_UNIT = 'a1.17';
const INDIRECT_UNIT = 'a2.24';
const DEM_UNIT = 'a2.33';
const SHAPE_UNIT = 'a2.02';
const COMPARATIVE_UNIT = 'a2.08';
const GENDER_UNIT = 'a1.03';

/** The eighteen published headwords, by id. Asserted by id and never by count,
 *  because the prompt's whole corpus instruction was « five exist, author
 *  le leur » and the measurement was eighteen. */
const HEADWORD_IDS = [
  'fr.b1.pronoms-essentiels.026', 'fr.b1.pronoms-essentiels.027',
  'fr.b1.pronoms-essentiels.028', 'fr.b1.pronoms-essentiels.029',
  'fr.b1.pronoms-essentiels.031', 'fr.b1.pronoms-essentiels.032',
  'fr.b1.pronoms-essentiels.033', 'fr.b1.pronoms-essentiels.034',
  'fr.b1.pronoms-essentiels.035',
  'fr.b2.pronoms-essentiels.001', 'fr.b2.pronoms-essentiels.002',
  'fr.b2.pronoms-essentiels.004', 'fr.b2.pronoms-essentiels.005',
  'fr.b2.pronoms-essentiels.007', 'fr.b2.pronoms-essentiels.008',
  'fr.b2.pronoms-essentiels.010', 'fr.b2.pronoms-essentiels.011',
  'fr.b2.pronoms-essentiels.012',
] as const;

/** a2.24's three `leur` rows, which are trap 2 and two of which are its own
 *  trapDrill cards. */
const LEUR_ROW_IDS = [
  'fr.a2.pronoms-essentiels.240',  // Je leur parle.
  'fr.a2.pronoms-essentiels.258',  // Voici leur maison.
  'fr.a2.pronoms-essentiels.259',  // Voici leurs clés.
] as const;

/** invariants §2: U+203F draws as a low underscore on a Pixel 6. This lesson
 *  creates five liaisons, which is where one would have come from. */
const TIE_GLYPH = '‿';
const NO_SUCH_FORM = 'les leur';
const BARE_ALLOWED_IN = ['s01-scene', 's08-unseen', 's16-errors', 's22-quiz'] as const;
const NO_SUCH_FORM_ALLOWED_IN = ['s15-trap', 's16-errors', 's22-quiz'] as const;

/* ── THE SOURCE, AND TELLING ABSENT FROM BROKEN (Corrections §9) ─────────── */

type SrcShape = {
  RESPELL_REPAIRS: { id: string; fr: string; from: string; half: string; to: string; blind: boolean; house: boolean; why: string }[];
  REPAIR_SOURCES: readonly string[];
  NOT_REPAIRED: readonly { id: string; fr: string; respell: string; why: string }[];
  HOUSE_ENDINGS: readonly string[];
  HOUSE_ENDING: string;
  UNSEEN: { noun: string; answer: string; id: string; gender: string; article: string };
  UNSEEN_REJECTED: readonly { noun: string; why: string }[];
  REFRAME_REJECTED: readonly { text: string; why: string }[];
  HOMOPHONE_FORMS: readonly string[][];
  ACCENT_PAIRS: readonly [string, string][];
  MUST_FIRE: Record<string, readonly string[]>;
  MUST_NOT_FIRE: Record<string, readonly string[]>;
  NOT_IMPORTED: readonly { id: string; fr: string; why: string }[];
  FALSE_LEUR_CLAIMS: readonly string[];
  THREE_LEURS: readonly { id: string; fr: string; job: string; takesS: boolean; owner: string }[];
  JARGON: readonly string[];
  ALL_ROWS: { id: string; fr: string; en?: string; kind: string; respell?: string }[];
  PAIR_CELLS: readonly { adj: string; pron: string; noun: string; adjForm: string; pronForm: string; gender: string; number: string }[];
  GRID_CELLS: readonly { id: string; form: string; noun: string; article: string; gender: string; number: string }[];
  THIRD_CELLS: readonly { id: string; form: string; both: readonly string[] }[];
  COLLAPSE_ROW: string;
  THREE_FORM_FAMILIES: readonly { stem: string; singularF: string | null; plural: string | null; headwordM: string; headwordPl: string }[];
  LEUR_PLURAL_PAIR: { masculine: string; feminine: string; form: string };
  CIRCUMFLEX_PAIRS: readonly { adjective: string; pronoun: string; bare: string; accented: string }[];
  CIRCUMFLEX_FORMS: readonly string[];
  REGISTER_PAIRS: readonly { written: string; spoken: string; meaning: string }[];
  SPOKEN_MARK: string;
  WRITTEN_MARK: string;
  LIAISON_ROWS: readonly { id: string; frame: string; respell: string }[];
  WANTED_AND_IMPOSSIBLE: readonly { want: string; why: string }[];
  FOLD_COLLISIONS: [string, string][];
  NEAR_MISSES: [string, string][];
  DISPLAY_PARITY: readonly { section: string; itemId: string; why: string }[];
  OUT_OF_BAND_TENSES: readonly { name: string; stems: readonly string[]; endings: readonly string[] }[];
  PRONOMINAL_EN_Y: readonly string[];
  DEMONSTRATIVE_PRONOUNS: readonly string[];
  STRESSED_USED: readonly string[];
  STRESSED_GAP: string;
  A233_RESERVED: readonly string[];
  A117_RESERVED: readonly string[];
};
let SRC: SrcShape | null = null;
let SRC_ERROR: unknown = null;
try {
  SRC = (await import('../../../ealch-admin/scripts/data/pronoms-possessifs-corpus.ts')) as unknown as SrcShape;
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

/* ─── String walks, matching the batch's ──────────────────────────────────── */

const MACHINE_KEYS = new Set([
  'id', 'ref', 'sheetId', 'itemId', 'itemIds', 'targets', 'detectOn', 'drill',
  'retest', 'accept', 'recordingId', 'audioRef', 'unitId', 'scenarioId',
  'clipIds', 'buckets', 'restPoints',
  // ADDRESSED TO THE CURRICULUM, NOT TO A LEARNER, and invariants §8 says so
  // outright: `grammarIntroduced` may use the precise words. Corrections §9 is
  // explicit that the jargon walk must NOT be widened to these two. The first
  // draft of this file walked them and the jargon check went red on seven
  // entries, every one of them inside a sentence no renderer draws.
  'grammarIntroduced', 'grammarAssumed',
]);
const isId = (s: string): boolean => /^fr\.[a-z0-9]+\.[a-z0-9-]+\.\d+$/i.test(s);

/** Keeps `sub`, drops only machine keys. Corrections §13: `prose()` drops `sub`
 *  as notation, and on a cardDeck card `sub` holds PROSE. */
function display(v: unknown, out: string[] = []): string[] {
  if (typeof v === 'string') { if (!isId(v)) out.push(v); }
  else if (Array.isArray(v)) for (const x of v) display(x, out);
  else if (v && typeof v === 'object') {
    for (const [k, x] of Object.entries(v)) if (!MACHINE_KEYS.has(k)) display(x, out);
  }
  return out;
}

/** The raw walk, for the checks that must see everything including notation. */
const strs = (v: unknown, out: string[] = []): string[] => {
  if (typeof v === 'string') out.push(v);
  else if (Array.isArray(v)) v.forEach((x) => strs(x, out));
  else if (v && typeof v === 'object') Object.values(v).forEach((x) => strs(x, out));
  return out;
};

/** THE HOUSE BOUNDARY WITH CORRECTIONS §14.3's FIX: the apostrophe is dropped
 *  from the LEFT so a shape can see `c'est`, and kept on the right so `l'` does
 *  not match a bare `l`. */
const esc = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/gu, '\\$&');
const hasWord = (hay: string, needle: string): boolean =>
  new RegExp(`(?<![\\p{L}\\p{N}])${esc(needle)}(?![\\p{L}\\p{N}'’])`, 'iu').test(hay);
const countOf = (hay: string, needle: string): number =>
  (hay.match(new RegExp(`(?<![\\p{L}\\p{N}])${esc(needle)}(?![\\p{L}\\p{N}'’])`, 'giu')) ?? []).length;

/** THE SIXTH HOLE, AND IT IS THE MIRROR OF CORRECTIONS §14.3. A unit id is not
 *  a French word, and every citation in this band is written "<unit>'s line",
 *  which the right-hand apostrophe class makes invisible. */
const namesUnit = (hay: string, unit: string): boolean =>
  new RegExp(`(?<![\\p{L}\\p{N}])${esc(unit)}(?![\\p{L}\\p{N}])`, 'iu').test(hay);

/** The four-check bare-possessive shape, reimplemented here ONLY because it is
 *  the guard itself rather than app logic. Every clause is asserted against
 *  MUST_FIRE / MUST_NOT_FIRE below, which is what stops this copy drifting from
 *  the batch's. */
const BARE_STEMS = ['mien', 'mienne', 'miens', 'miennes', 'tien', 'tienne', 'tiens', 'tiennes', 'sien', 'sienne', 'siens', 'siennes'];
const LEGAL_ARTICLES = ['le', 'la', 'les', 'du', 'des', 'au', 'aux'];
const FAMILY_ONLY_RX = /^[\s.,;:·/|]*(?:(?:le|la|les)\s+)?(?:mien|mienne|miens|miennes|tien|tienne|tiens|tiennes|sien|sienne|siens|siennes)[\s.,;:·/|]*(?:(?:and|or|et)[\s.,;:·/|]*)?(?:(?:(?:le|la|les)\s+)?(?:mien|mienne|miens|miennes|tien|tienne|tiens|tiennes|sien|sienne|siens|siennes)[\s.,;:·/|]*(?:(?:and|or|et)[\s.,;:·/|]*)?)*$/iu;
const ENGLISH_MARKERS = [
  'the', 'and', 'is', 'are', 'was', 'you', 'your', 'this', 'that', 'these',
  'those', 'what', 'why', 'which', 'not', 'with', 'of', 'for', 'it', 'one',
  'ones', 'they', 'them', 'he', 'she', 'sentence', 'word', 'never', 'own',
  'thing', 'both', 'each', 'about', 'from', 'have', 'has',
];
const looksEnglish = (s: string): boolean => ENGLISH_MARKERS.some((w) => hasWord(s, w));
const clauses = (s: string): string[] => s.split(/(?<=[.!?…])\s+/u).filter(Boolean);
const bareInClause = (s: string): boolean => {
  if (FAMILY_ONLY_RX.test(s)) return false;
  if (looksEnglish(s)) return false;
  for (const stem of BARE_STEMS) {
    const rx = new RegExp(`(?<![\\p{L}\\p{N}])${esc(stem)}(?![\\p{L}\\p{N}'’])`, 'giu');
    for (const m of s.matchAll(rx)) {
      const before = s.slice(0, m.index ?? 0).trimEnd();
      const lastWord = (before.match(/[\p{L}'’]+$/u) ?? [''])[0].toLowerCase();
      if (LEGAL_ARTICLES.includes(lastWord)) continue;
      return true;
    }
  }
  return false;
};
const hasBarePossessive = (s: string): boolean => {
  if (FAMILY_ONLY_RX.test(s)) return false;
  return clauses(s).some(bareInClause);
};

const noSeed = !L;
const LEARNER = L ? [
  ...strs(L.sections), ...strs(L.terms ?? {}), ...strs(L.sheets ?? []),
  String(L.intro ?? ''), ...strs(L.overview ?? {}), ...strs(L.drills ?? []),
  ...strs(L.acts ?? []), ...strs(L.errorTriggers ?? []),
].join('\n') : '';
const DISPLAYED = L ? display(L).join('\n') : '';
const authored = () => items.filter((i) => {
  const m = i.id.match(/^fr\.a2\.pronoms-essentiels\.(\d+)$/);
  return !!m && +m[1] >= ID_FIRST && +m[1] <= ID_LAST;
});
const quizSection = () => (L?.sections ?? []).find((s) => s.type === 'quiz');
const questions = () => {
  const q = quizSection();
  return q ? (quizQuestions(q as never) as Array<Record<string, unknown>>) : [];
};

/* ══════════════════════════════════════════════════════════════════════════
 *  IDENTITY
 * ══════════════════════════════════════════════════════════════════════════ */

test('a2.34.l1 is in the seed, and the unit claims it', () => {
  ok(L, `${LESSON_ID} is not in seed.json`);
  strictEqual(L!.unitId, UNIT_ID);
  strictEqual(L!.level, 'a2');
  // v2: v1 shipped `la leur` on the tapTable detail and in no corpus row, and
  // the guard below found it. Corrections §10: move the counter rather than
  // correcting under the number that was applied.
  strictEqual(L!.version, 4, 'v3 trimmed the sheet table on a misreading of the renderer; v4 puts it back');
  const unit = (seed.units as Array<{ id: string; lessonIds?: string[]; seq?: number; title?: string; sub?: string }>).find((u) => u.id === UNIT_ID);
  ok(unit, `${UNIT_ID} is not in the seed`);
  ok((unit!.lessonIds ?? []).includes(LESSON_ID), `${UNIT_ID} does not claim ${LESSON_ID}`);
  strictEqual(String(unit!.seq), '34', 'a2.34 is seq 34 of 35, the last teaching lesson in A2');
  strictEqual(unit!.title, 'Possessive Pronouns');
  strictEqual(unit!.sub, 'Pronoms possessifs');
});

test('the unit did not gain a themes array', () => {
  const unit = (seed.units as Array<{ id: string; themes?: unknown }>).find((u) => u.id === UNIT_ID);
  ok(unit!.themes == null, `a2.34.themes is ${JSON.stringify(unit!.themes)} and this build creates none`);
});

test('the source either imports or is genuinely absent', () => {
  ok(SRC || srcMerelyAbsent,
    `the corpus source threw rather than being absent, which silently skips half this file: ${String(SRC_ERROR)}`);
});

test('neither string walk is empty, or every check below is a no-op', { skip: noSeed }, () => {
  ok(LEARNER.length > 12000, `the learner walk produced ${LEARNER.length} chars`);
  ok(DISPLAYED.length > 12000, `the display walk produced ${DISPLAYED.length} chars`);
});

/* ══════════════════════════════════════════════════════════════════════════
 *  REQUIRED LAYOUT 1 — all four forms, the owned noun visible in each
 * ══════════════════════════════════════════════════════════════════════════ */

test('REQUIRED LAYOUT 1: four cards, one per cell, in s04-four', { skip: noSeed }, () => {
  const s = sec('s04-four') as { cards?: unknown[] } | undefined;
  ok(s, 's04-four is gone, and it is required layout 1');
  strictEqual((s!.cards ?? []).length, 4, 'the paradigm has four cells and the layout has one card each');
});

test('REQUIRED LAYOUT 1: every cell is asserted BY NAME, with the owned noun visible', { skip: noSeed || !SRC }, () => {
  const text = strs(sec('s04-four')).join('\n');
  for (const c of SRC!.GRID_CELLS) {
    const row = byId.get(c.id);
    ok(row, `${c.id} is the ${c.gender} ${c.number} cell and is not in the seed`);
    ok(hasWord(row!.fr, c.form), `${c.id} does not carry "${c.form}"`);
    // THE HALF THE PROMPT INSISTS ON: the owned noun is on the card.
    strictEqual(countOf(row!.fr, c.noun), 1, `${c.id} must name "${c.noun}" exactly once`);
    ok(text.includes(row!.fr), `s04-four does not show "${row!.fr}" verbatim`);
    ok(hasWord(text, c.noun), `s04-four does not name "${c.noun}", so the source of the agreement is invisible`);
  }
});

test('REQUIRED LAYOUT 1: the four cells are four DIFFERENT forms', { skip: noSeed || !SRC }, () => {
  const forms = new Set(SRC!.GRID_CELLS.map((c) => c.form));
  strictEqual(forms.size, 4, 'one form four times is not a paradigm');
  deepStrictEqual([...forms].sort(), [...FOUR_CELLS].sort());
});

test('REQUIRED LAYOUT 1: the four rows differ ONLY in the thing', { skip: noSeed || !SRC }, () => {
  // Every row is <article> <noun> est/sont <article> <form>. The verb moves with
  // the number and nothing else does, which is what makes it one frame.
  for (const c of SRC!.GRID_CELLS) {
    const row = byId.get(c.id)!;
    const verb = c.number === 'plural' ? 'sont' : 'est';
    ok(hasWord(row.fr, verb), `${c.id} "${row.fr}" should use ${verb} for a ${c.number} thing`);
    ok(row.fr.startsWith(`${c.article} ${c.noun}`), `${c.id} does not open on "${c.article} ${c.noun}"`);
  }
});

/* ══════════════════════════════════════════════════════════════════════════
 *  REQUIRED LAYOUT 2 — mon sac beside le mien
 * ══════════════════════════════════════════════════════════════════════════ */

test('REQUIRED LAYOUT 2: four cards, adjective against pronoun, in s03-adj', { skip: noSeed }, () => {
  const s = sec('s03-adj') as { cards?: unknown[] } | undefined;
  ok(s, 's03-adj is gone, and it is required layout 2');
  strictEqual((s!.cards ?? []).length, 4);
});

test('REQUIRED LAYOUT 2: the noun is in the adjective half and GONE from the pronoun half', { skip: noSeed || !SRC }, () => {
  for (const p of SRC!.PAIR_CELLS) {
    const adj = byId.get(p.adj);
    const pron = byId.get(p.pron);
    ok(adj && pron, `the ${p.gender} ${p.number} pair is not in the seed`);
    ok(hasWord(adj!.fr, p.adjForm), `${p.adj} does not carry the adjective "${p.adjForm}"`);
    ok(hasWord(adj!.fr, p.noun), `${p.adj} does not name "${p.noun}"`);
    ok(hasWord(pron!.fr, p.pronForm), `${p.pron} does not carry the pronoun "${p.pronForm}"`);
    // THE WHOLE CLAIM THE LAYOUT MAKES.
    ok(!hasWord(pron!.fr, p.noun), `${p.pron} names "${p.noun}" in the half that is supposed not to`);
  }
});

test('REQUIRED LAYOUT 2: both halves of each pair are on ONE card', { skip: noSeed || !SRC }, () => {
  const cards = ((sec('s03-adj') as { cards?: unknown[] } | undefined)?.cards ?? []);
  for (const p of SRC!.PAIR_CELLS) {
    const adj = byId.get(p.adj)!.fr;
    const pron = byId.get(p.pron)!.fr;
    const hit = cards.find((cd) => { const t = strs(cd).join(' '); return t.includes(adj) && t.includes(pron); });
    ok(hit, `no card carries "${adj}" AND "${pron}", so the ${p.gender} ${p.number} contrast is split across screens`);
  }
});

/* ══════════════════════════════════════════════════════════════════════════
 *  REQUIRED LAYOUT 3 — C'est le mien beside C'est à moi, register on EACH
 * ══════════════════════════════════════════════════════════════════════════ */

test('REQUIRED LAYOUT 3: both registers are shown, in s17-amoi', { skip: noSeed || !SRC }, () => {
  const text = strs(sec('s17-amoi')).join('\n');
  ok(text.length > 0, 's17-amoi is gone, and it is required layout 3');
  for (const p of SRC!.REGISTER_PAIRS) {
    ok(text.includes(byId.get(p.written)!.fr), `required layout 3 lost the written half of "${p.meaning}"`);
    ok(text.includes(byId.get(p.spoken)!.fr), `required layout 3 lost the spoken half of "${p.meaning}"`);
  }
});

test('REQUIRED LAYOUT 3: the register is marked on EACH half, not just the spoken one', { skip: noSeed || !SRC }, () => {
  const cards = ((sec('s17-amoi') as { cards?: unknown[] } | undefined)?.cards ?? []);
  const spokenFr = byId.get(SRC!.REGISTER_PAIRS[0].spoken)!.fr;
  const writtenFr = byId.get(SRC!.REGISTER_PAIRS[0].written)!.fr;
  const spokenCard = cards.find((cd) => strs(cd).some((t) => t.includes(spokenFr)));
  const writtenCard = cards.find((cd) => strs(cd).some((t) => t.includes(writtenFr)));
  ok(spokenCard && writtenCard, 'required layout 3 has no card for one of the two registers');
  ok(strs(spokenCard).some((t) => t.includes(SRC!.SPOKEN_MARK)), `the "${spokenFr}" card is not marked "${SRC!.SPOKEN_MARK}"`);
  ok(strs(writtenCard).some((t) => t.includes(SRC!.WRITTEN_MARK)), `the "${writtenFr}" card is not marked "${SRC!.WRITTEN_MARK}"`);
});

test('the liaison in c\'est à is written onto the following syllable, never tied', { skip: noSeed || !SRC }, () => {
  // Invariants §3 and Corrections §15.3: NOTHING in this project checks a
  // liaison, and a2.08 shipped four `est aussi` frames with the t missing.
  for (const l of SRC!.LIAISON_ROWS) {
    const row = byId.get(l.id);
    ok(row, `${l.id} is a liaison row and is not in the seed`);
    ok(row!.fr.includes(l.frame), `${l.id} no longer carries the frame "${l.frame}"`);
    ok((row!.respell ?? '').includes(l.respell), `${l.id} respells "${row!.respell}" and the liaison wants "${l.respell}"`);
    ok(!(row!.respell ?? '').includes(TIE_GLYPH), `${l.id} uses a U+203F tie, which draws as an underscore`);
  }
});

test('every est+vowel frame in the authored rows is in the liaison table', { skip: noSeed || !SRC }, () => {
  const listed = new Set(SRC!.LIAISON_ROWS.map((l) => l.id));
  const unwatched = SRC!.ALL_ROWS.filter((r) => /\best\s+[aàeéèêiîoôuûhy]/i.test(r.fr)).filter((r) => !listed.has(r.id));
  deepStrictEqual(unwatched.map((r) => r.id), [], 'an est+vowel liaison nothing watches');
});

/* ══════════════════════════════════════════════════════════════════════════
 *  THE QUOTATIONS
 * ══════════════════════════════════════════════════════════════════════════ */

test("a1.17's reframe is quoted VERBATIM, and it is the rule the learner already has", { skip: noSeed }, () => {
  ok(LEARNER.includes(A117_REFRAME), `${ADJ_UNIT}'s reframe is not quoted verbatim`);
  ok(namesUnit(LEARNER, ADJ_UNIT), `${ADJ_UNIT} is quoted and never named`);
});

test("a1.17's reframe and a1.17 are on the SAME section", { skip: noSeed }, () => {
  const carriers = (L!.sections ?? []).filter((s) => strs(s).some((t) => t.includes(A117_REFRAME)));
  ok(carriers.length > 0, 'the reframe reaches no section');
  for (const c of carriers) {
    ok(namesUnit(strs(c).join('\n'), ADJ_UNIT), `${c.id} quotes ${ADJ_UNIT} and does not name it`);
  }
});

test("a1.17's test is quoted, and this is the lesson where it stops being enough", { skip: noSeed }, () => {
  ok(LEARNER.includes(A117_TEST), `« ${A117_TEST} » is not quoted`);
  // AND THE EXTENSION IS THERE: `les leurs` is a possessive with nothing behind
  // it, which is exactly what a1.17's test does not cover.
  ok(/nothing (behind|follows)/i.test(LEARNER), 'the test is quoted and the case it does not cover is never named');
});

test("a2.24's lui framing is quoted VERBATIM and a2.24 is named beside it", { skip: noSeed }, () => {
  ok(LEARNER.includes(GENDER_LOST), `${INDIRECT_UNIT}'s lui framing is not quoted verbatim`);
  const carriers = (L!.sections ?? []).filter((s) => strs(s).some((t) => t.includes(GENDER_LOST)));
  ok(carriers.length > 0);
  for (const c of carriers) ok(namesUnit(strs(c).join('\n'), INDIRECT_UNIT), `${c.id} quotes it and does not name ${INDIRECT_UNIT}`);
});

test("a2.24's leur rule is quoted VERBATIM and never restated in this build's own words", { skip: noSeed }, () => {
  ok(LEARNER.includes(LEUR_RULE), `${INDIRECT_UNIT}'s leur wording is not quoted verbatim`);
  const carriers = (L!.sections ?? []).filter((s) => strs(s).some((t) => t.includes(LEUR_RULE)));
  ok(carriers.length > 0);
  for (const c of carriers) ok(namesUnit(strs(c).join('\n'), INDIRECT_UNIT), `${c.id} quotes it and does not name ${INDIRECT_UNIT}`);
});

test("a2.24's leur rule is SCOPED wherever it is quoted, or it would teach the prompt's error", { skip: noSeed }, () => {
  // The sentence is true of the object pronoun and FALSE of the possessive.
  // Quoting it without « in front of a verb » is exactly the claim corpus §A.4
  // measures as wrong about French.
  const carriers = (L!.sections ?? []).filter((s) => strs(s).some((t) => t.includes(LEUR_RULE)));
  for (const c of carriers) {
    ok(strs(c).join('\n').includes(LEUR_RULE_SCOPE),
      `${c.id} quotes the leur rule without « ${LEUR_RULE_SCOPE} », which is the clause that keeps it off the possessive`);
  }
});

test("a2.33's reframe is quoted VERBATIM and this lesson's extension follows it", { skip: noSeed }, () => {
  ok(LEARNER.includes(A233_REFRAME), `${DEM_UNIT}'s reframe is not quoted verbatim`);
  ok(namesUnit(LEARNER, DEM_UNIT), `${DEM_UNIT} is quoted and never named`);
  ok(LEARNER.includes(A234_SHAPE), "a2.33's line is quoted and the extension that makes it true here is not");
  ok(LEARNER.indexOf(A234_SHAPE) > LEARNER.indexOf(A233_REFRAME), 'the extension appears before the quotation it extends');
});

test("a2.02's recurring shape is quoted and attributed (doctrine §B.7)", { skip: noSeed }, () => {
  ok(LEARNER.includes(WHAT_FOLLOWS), `« ${WHAT_FOLLOWS} » is not quoted`);
  ok(namesUnit(LEARNER, SHAPE_UNIT), `${SHAPE_UNIT} owns that line and is not named`);
});

test('the three units this lesson quotes are all named, and so are the boundaries', { skip: noSeed }, () => {
  for (const u of [ADJ_UNIT, INDIRECT_UNIT, DEM_UNIT, SHAPE_UNIT, COMPARATIVE_UNIT, GENDER_UNIT, 'a2.25', 'a2.03', 'a2.01']) {
    ok(namesUnit(LEARNER, u), `${u} is leaned on and never named`);
  }
});

/* ══════════════════════════════════════════════════════════════════════════
 *  TRAP 1 — the third person collapses
 * ══════════════════════════════════════════════════════════════════════════ */

test('trap 1: every le sien row glosses BOTH readings', { skip: noSeed || !SRC }, () => {
  for (const c of SRC!.THIRD_CELLS) {
    const row = byId.get(c.id);
    ok(row, `${c.id} is a trap 1 row and is not in the seed`);
    ok(hasWord(row!.fr, c.form), `${c.id} does not carry "${c.form}"`);
    for (const w of c.both) {
      ok(hasWord(row!.en ?? '', w), `${c.id} glosses "${row!.en}" and does not say "${w}" — a row that gives one reading teaches half the trap`);
    }
  }
});

test('trap 1: one French form, two owners, in ONE sentence', { skip: noSeed || !SRC }, () => {
  const row = byId.get(SRC!.COLLAPSE_ROW);
  ok(row, 'the collapse row is not in the seed');
  strictEqual(countOf(row!.fr, 'le sien'), 2, 'the whole card is the same three words twice');
  ok(hasWord(row!.en ?? '', 'his') && hasWord(row!.en ?? '', 'hers'),
    `the collapse row glosses "${row!.en}" and the point is that the English needs two words where the French has one`);
});

test('trap 1: the published le sien headword says both readings, and this lesson leans on it', { skip: noSeed }, () => {
  const row = byId.get('fr.b1.pronoms-essentiels.034');
  ok(row, 'the le sien headword did not reach the seed');
  ok(/his/i.test(row!.en ?? '') && /her/i.test(row!.en ?? ''), `it glosses "${row!.en}"`);
});

/* ══════════════════════════════════════════════════════════════════════════
 *  TRAP 2 — three leurs, and the prompt's version is refused
 * ══════════════════════════════════════════════════════════════════════════ */

test("the prompt's trap 2 wording is refused on every surface", { skip: noSeed || !SRC }, () => {
  // « leur never takes an -s; the article does » is not true of French: there is
  // no `les leur`. Corpus §A.4, and a2.08 §15.1 is the precedent for a brief
  // being wrong about the language rather than about the corpus.
  const hits: string[] = [];
  for (const t of strs(L)) {
    for (const claim of SRC!.FALSE_LEUR_CLAIMS) {
      if (t.toLowerCase().includes(claim.toLowerCase())) hits.push(`"${claim}" in "${t.slice(0, 60)}"`);
    }
  }
  deepStrictEqual(hits, [], 'a claim this build measured false about French');
});

test('the false-claim guard fires on the four wordings the prompt used', { skip: !SRC }, () => {
  for (const s of SRC!.MUST_FIRE.leurClaim) {
    ok(SRC!.FALSE_LEUR_CLAIMS.some((c) => s.toLowerCase().includes(c.toLowerCase())), `does not fire on "${s}"`);
  }
});

test("the false-claim guard spares a2.24's TRUE sentence, which is a different word", { skip: !SRC }, () => {
  for (const s of SRC!.MUST_NOT_FIRE.leurClaim) {
    ok(!SRC!.FALSE_LEUR_CLAIMS.some((c) => s.toLowerCase().includes(c.toLowerCase())), `fires on "${s}"`);
  }
});

test('all three leurs are on ONE screen, and two of them are a2.24 own rows', { skip: noSeed || !SRC }, () => {
  const t = strs(sec('s15-trap')).join('\n');
  ok(t.length > 0, 's15-trap is gone');
  for (const l of SRC!.THREE_LEURS) {
    ok(t.includes(l.fr), `s15-trap does not carry "${l.fr}" (${l.job})`);
  }
  const borrowed = SRC!.THREE_LEURS.filter((l) => l.owner !== 'a2.34');
  ok(borrowed.length >= 3, 'the claim is about the product, so most of the rows must be somebody else already-published');
});

test('the three leurs really do split on whether they take an -s', { skip: !SRC }, () => {
  ok(SRC!.THREE_LEURS.some((l) => l.takesS), 'no leur takes an s, which is the prompt error this build corrects');
  ok(SRC!.THREE_LEURS.some((l) => !l.takesS), "every leur takes an s, which loses a2.24's finding");
});

test('les leur does not exist, and appears only where it is marked as the error', { skip: noSeed }, () => {
  const bad: string[] = [];
  for (const s of L!.sections) {
    if ((NO_SUCH_FORM_ALLOWED_IN as readonly string[]).includes(String(s.id))) continue;
    for (const t of strs(s)) if (hasWord(t, NO_SUCH_FORM)) bad.push(`${s.id}: "${t.slice(0, 60)}"`);
  }
  deepStrictEqual(bad, [], `"${NO_SUCH_FORM}" is not a form of French`);
});

test('each of the three marked sections really does show it, or the allowance is dead', { skip: noSeed }, () => {
  for (const id of NO_SUCH_FORM_ALLOWED_IN) {
    ok(strs(sec(id)).some((t) => hasWord(t, NO_SUCH_FORM)), `${id} is allowed to show it and does not`);
  }
});

test('no authored row carries les leur', { skip: noSeed }, () => {
  const bad = authored().filter((r) => hasWord(r.fr, NO_SUCH_FORM));
  deepStrictEqual(bad.map((r) => r.id), []);
});

test('the no-such-form guard fires and spares the right shapes', { skip: !SRC }, () => {
  for (const s of SRC!.MUST_FIRE.noSuchForm) ok(hasWord(s, NO_SUCH_FORM), `does not fire on "${s}"`);
  for (const s of SRC!.MUST_NOT_FIRE.noSuchForm) ok(!hasWord(s, NO_SUCH_FORM), `fires on "${s}", which is real French`);
});

/* ══════════════════════════════════════════════════════════════════════════
 *  TRAP 3 — the register, and the stressed-pronoun gap
 * ══════════════════════════════════════════════════════════════════════════ */

test('only moi and toi are authored, and no stressed paradigm is built', { skip: noSeed || !SRC }, () => {
  const ALL = ['moi', 'toi', 'lui', 'elle', 'eux', 'elles'];
  const used = ALL.filter((p) => SRC!.ALL_ROWS.some((r) => hasWord(r.fr, p)));
  deepStrictEqual(used.sort(), [...SRC!.STRESSED_USED].sort(),
    'the prompt asks for two or three stressed pronouns and no paradigm');
});

test('the stressed-pronoun gap is recorded, not left as a silence', { skip: !SRC }, () => {
  ok(SRC!.STRESSED_GAP.length > 80, 'the gap the prompt asks to be named is not named');
  ok(SRC!.STRESSED_GAP.includes('a2.24'), 'the gap statement does not say which unit owns the half that IS owned');
});

/* ══════════════════════════════════════════════════════════════════════════
 *  TRAP 4 — the circumflex, and it is mcq-or-nothing
 * ══════════════════════════════════════════════════════════════════════════ */

test('the circumflex pairs contrast the bare form against the accented one', { skip: noSeed || !SRC }, () => {
  for (const p of SRC!.CIRCUMFLEX_PAIRS) {
    const adj = byId.get(p.adjective);
    const pron = byId.get(p.pronoun);
    ok(adj && pron, `the ${p.bare} pair is not in the seed`);
    ok(adj!.fr.includes(p.bare), `${p.adjective} does not carry "${p.bare}"`);
    ok(pron!.fr.includes(p.accented), `${p.pronoun} does not carry "${p.accented}"`);
    ok(!adj!.fr.includes(p.accented.split(' ')[1]), `${p.adjective} carries the accented form, so the pair shows no contrast`);
  }
});

test('the circumflex is present, asserted BY NAME, and it is DELIBERATE', { skip: noSeed || !SRC }, () => {
  // A later author reading a diff sees two characters that look like a typo.
  // They are not: `nôtre` and `vôtre` are the PRONOUNS and `notre` and `votre`
  // are the adjectives, and the accent is the only written difference.
  for (const f of SRC!.CIRCUMFLEX_FORMS) {
    ok(/[ôÔ]/.test(f), `CIRCUMFLEX_FORMS holds "${f}", which has no circumflex`);
    ok(LEARNER.includes(f), `"${f}" carries a circumflex on purpose and reaches no learner surface`);
  }
});

test('fold() strips the circumflex, so no typed surface can test it', { skip: !SRC }, () => {
  for (const [bare, accented] of SRC!.ACCENT_PAIRS) {
    strictEqual(fold(bare), fold(accented), `"${bare}" and "${accented}" no longer collide — a typed question is now possible`);
  }
});

test('no free-text question turns on the circumflex without accepting the bare spelling', { skip: noSeed || !SRC }, () => {
  for (const q of questions()) {
    if (q.format === 'mcq' || q.format === 'listenChoose') continue;
    const answer = String(q.answer ?? '');
    const accept = (q.accept as string[] | undefined) ?? [];
    for (const f of SRC!.CIRCUMFLEX_FORMS) {
      if (!hasWord(answer, f)) continue;
      const bare = f.replace(/ô/g, 'o');
      ok(accept.some((a) => a.includes(bare)),
        `"${q.q}" keys on "${f}" and does not accept the unaccented spelling, which fold() cannot tell apart anyway`);
    }
  }
});

test('the circumflex IS tested, by mcq, which is the one surface that can show it', { skip: noSeed }, () => {
  const mcqs = questions().filter((q) => q.format === 'mcq');
  ok(mcqs.some((q) => strs(q).some((t) => /nôtre|vôtre/.test(t))), 'trap 4 reaches no scored surface at all');
});

/* ══════════════════════════════════════════════════════════════════════════
 *  THE BARE FORM
 * ══════════════════════════════════════════════════════════════════════════ */

test('the bare-possessive shape fires on every sentence it must', { skip: !SRC }, () => {
  for (const s of SRC!.MUST_FIRE.bare) ok(hasBarePossessive(s), `does not fire on "${s}"`);
});

test('the bare-possessive shape spares the possessive ADJECTIVE, which has no article by design', { skip: !SRC }, () => {
  for (const s of SRC!.MUST_NOT_FIRE.bare) ok(!hasBarePossessive(s), `fires on "${s}", which is legal`);
});

test('the bare-possessive shape sees a French clause inside an English card body', { skip: !SRC }, () => {
  const mixed = SRC!.MUST_FIRE.bare.find((s) => /[A-Z][a-z]+ [a-z]+ [a-z]+/.test(s.split('. ').slice(1).join('. ')));
  ok(mixed, 'MUST_FIRE.bare has no mixed-language fixture, so the clause split is untested');
  ok(hasBarePossessive(mixed!), 'the guard evaluates whole strings, which skips exactly where the error appears');
});

test('no authored row carries a bare possessive', { skip: noSeed }, () => {
  const bad = authored().filter((r) => hasBarePossessive(r.fr));
  deepStrictEqual(bad.map((r) => `${r.id} "${r.fr}"`), []);
});

test('no section outside the four marked ones shows the bare form', { skip: noSeed }, () => {
  const bad: string[] = [];
  for (const s of L!.sections) {
    if ((BARE_ALLOWED_IN as readonly string[]).includes(String(s.id))) continue;
    for (const t of strs(s)) if (hasBarePossessive(t)) bad.push(`${s.id}: "${t.slice(0, 60)}"`);
  }
  deepStrictEqual(bad, []);
});

test('each of the four marked sections really does show it, or the allowance is dead', { skip: noSeed }, () => {
  for (const id of BARE_ALLOWED_IN) {
    ok(strs(sec(id)).some(hasBarePossessive), `${id} is allowed to show the bare form and does not`);
  }
});

test('s15-trap is NOT on the bare allowance, because its wrong forms are all leur', { skip: noSeed }, () => {
  // A dead allowance is a hole. Every wrong form in the trapDrill is a `leur`,
  // which is also the adjective and the object pronoun and is correct bare, so
  // NO_SUCH_FORM covers that section instead.
  ok(!(BARE_ALLOWED_IN as readonly string[]).includes('s15-trap'));
  ok(!strs(sec('s15-trap')).some(hasBarePossessive), 's15-trap now shows a bare possessive and is not allowed to');
});

/* ══════════════════════════════════════════════════════════════════════════
 *  THE BOUNDARIES
 * ══════════════════════════════════════════════════════════════════════════ */

test('NO demonstrative pronoun reaches any surface, including an alts line', { skip: noSeed || !SRC }, () => {
  const bad: string[] = [];
  for (const t of strs(L)) {
    for (const d of SRC!.DEMONSTRATIVE_PRONOUNS) if (hasWord(t, d)) bad.push(`"${d}" in "${t.slice(0, 60)}"`);
  }
  deepStrictEqual(bad, [], `${DEM_UNIT} owns celui, celle, ceux and celles`);
});

test('the demonstrative guard spares the ADJECTIVE, which a2.33 taught last lesson', { skip: !SRC }, () => {
  for (const s of SRC!.MUST_FIRE.demonstrative) ok(SRC!.DEMONSTRATIVE_PRONOUNS.some((d) => hasWord(s, d)), `does not fire on "${s}"`);
  for (const s of SRC!.MUST_NOT_FIRE.demonstrative) ok(!SRC!.DEMONSTRATIVE_PRONOUNS.some((d) => hasWord(s, d)), `fires on "${s}"`);
});

test('this lesson uses Ce sont on eight rows, which a2.33 named and handed on', { skip: noSeed }, () => {
  const withCeSont = authored().filter((r) => /^Ce sont /.test(r.fr));
  ok(withCeSont.length >= 4, 'the plural of c\'est is how French says "they are mine", and it is used');
});

test('a2.08 lends nine rows and no comparison is taught on a teaching surface', { skip: noSeed }, () => {
  const TEACHING = new Set(['cardDeck', 'tapTable', 'trapDrill', 'commonErrors', 'roundup', 'progressCheck']);
  const teachText = [
    ...strs((L!.sections ?? []).filter((s) => TEACHING.has(s.type))),
    ...strs(L!.terms ?? {}), ...strs(L!.sheets ?? []),
  ].join('\n').toLowerCase();
  for (const f of ['plus grand', 'moins grand', 'aussi grand', 'meilleur', 'le plus', 'le moins', 'mieux que', 'pire']) {
    ok(!teachText.includes(f), `"${f}" is ${COMPARATIVE_UNIT}'s and is on a teaching surface`);
  }
  ok(namesUnit(LEARNER, COMPARATIVE_UNIT), `${COMPARATIVE_UNIT} lends nine rows and is never named`);
});

test('a2.33 reserved twenty-one forms for this unit, and this unit teaches them', { skip: noSeed || !SRC }, () => {
  // a2.33 asserted every one of these appears NOWHERE in a2.33. This is the
  // other half of the hand-off, and it is the direction nobody checks.
  const missing = SRC!.A233_RESERVED.filter((f) => !LEARNER.toLowerCase().includes(f.toLowerCase()));
  deepStrictEqual(missing, [], 'a form a2.33 handed over and this lesson never shows');
});

test('a1.17 and a2.33 reserved lists have not drifted apart', { skip: !SRC }, () => {
  deepStrictEqual([...SRC!.A117_RESERVED].sort(), [...SRC!.A233_RESERVED].sort(),
    'the two lists are maintained in different files and this unit has to satisfy both');
});

test('no authored row carries an article-slot error a1.17 forbids', { skip: noSeed }, () => {
  const FORBIDDEN = ['le mon', 'la ma', 'les mes', 'le ton', 'la ta', 'les tes', 'le son', 'la sa', 'les ses', 'le notre', 'les nos', 'le votre', 'les vos'];
  const bad: string[] = [];
  for (const r of authored()) for (const f of FORBIDDEN) if (hasWord(r.fr, f)) bad.push(`${r.id}: "${f}"`);
  deepStrictEqual(bad, [], 'le mon sac is ungrammatical in both lessons');
});

/* ══════════════════════════════════════════════════════════════════════════
 *  THE BAND'S CEILINGS
 * ══════════════════════════════════════════════════════════════════════════ */

const FR_KEYS = new Set(['fr', 'ai', 'user', 'text', 'promptSound', 'promptLabel', 'answer', 'prompt', 'say', 'wrong', 'right', 'back', 'word']);
function frenchStrings(v: unknown, out: string[] = []): string[] {
  if (Array.isArray(v)) { v.forEach((x) => frenchStrings(x, out)); return out; }
  if (v && typeof v === 'object') {
    for (const [k, x] of Object.entries(v)) {
      if (typeof x === 'string' && FR_KEYS.has(k)) out.push(x);
      else frenchStrings(x, out);
    }
  }
  return out;
}
const FRENCH = L ? frenchStrings(L) : [];
const tenseHit = (s: string): string | null => {
  if (!SRC) return null;
  for (const t of SRC.OUT_OF_BAND_TENSES) {
    const rx = new RegExp(`(?<![\\p{L}\\p{N}-])(?:${t.stems.join('|')})(?:${t.endings.join('|')})(?![\\p{L}\\p{N}'’-])`, 'iu');
    const m = s.match(rx);
    if (m) return `${t.name}: "${m[0]}"`;
  }
  return null;
};

test('the French walk is not empty, or the two checks below are no-ops', { skip: noSeed }, () => {
  ok(FRENCH.length > 150, `the French walk produced ${FRENCH.length} strings`);
});

test('no out-of-band tense on any French learner surface', { skip: noSeed || !SRC }, () => {
  const bad = FRENCH.map((s) => [s, tenseHit(s)] as const).filter(([, t]) => t);
  deepStrictEqual(bad.map(([s, t]) => `${t} in "${s.slice(0, 60)}"`), [],
    'A2 teaches no tense past the passé composé and the futur proche, and this is seq 34 of 35');
});

test('the tense guard is anchored on stems, so it fires on verbs and not on a noun', { skip: !SRC }, () => {
  for (const s of SRC!.MUST_FIRE.tense) ok(tenseHit(s), `does not fire on "${s}"`);
  for (const s of SRC!.MUST_NOT_FIRE.tense) ok(!tenseHit(s), `fires on "${s}", which has no out-of-band verb`);
});

test('no pronominal en or y reaches a learner surface', { skip: noSeed || !SRC }, () => {
  const bad: string[] = [];
  for (const s of FRENCH) for (const p of SRC!.PRONOMINAL_EN_Y) if (hasWord(s, p)) bad.push(`"${p}" in "${s.slice(0, 60)}"`);
  deepStrictEqual(bad, [], 'the pronominal en and y belong to a2.25');
});

test('the en guard knows the pronoun from the preposition', { skip: !SRC }, () => {
  for (const s of SRC!.MUST_FIRE.enY) ok(SRC!.PRONOMINAL_EN_Y.some((p) => hasWord(s, p)), `does not fire on "${s}"`);
  for (const s of SRC!.MUST_NOT_FIRE.enY) ok(!SRC!.PRONOMINAL_EN_Y.some((p) => hasWord(s, p)), `fires on "${s}", where en is the preposition`);
});

/* ══════════════════════════════════════════════════════════════════════════
 *  THE CORPUS
 * ══════════════════════════════════════════════════════════════════════════ */

test('all eighteen published headwords are IMPORTED and reached the seed', { skip: noSeed }, () => {
  // The prompt said five exist. Eighteen do, and NOT ONE of them was in the cut
  // before this build, so a merge that carried only the authored rows would
  // have shipped a lesson whose whole paradigm resolved to nothing.
  for (const id of HEADWORD_IDS) {
    const row = byId.get(id);
    ok(row, `${id} is one of the eighteen headwords and is not in the seed`);
    ok(row!.respell, `${id} reached the seed without its respelling, and this lesson prints it`);
    ok(!row!.gender, `${id} is gendered, which is the shape that moves a1.03`);
    ok((row!.drills ?? []).includes('flashcard') && (row!.drills ?? []).includes('voiceflash'),
      `${id} cannot be served by a deck or spoken by practice`);
    ok(L!.itemIds.includes(id), `${id} exists and the lesson does not carry it`);
  }
});

test('exactly ONE headword was authored, and it is the single absent cell', { skip: noSeed }, () => {
  const authoredHeadwords = authored().filter((r) => r.kind !== 'sentence');
  strictEqual(authoredHeadwords.length, 1, 'corpus §A.2 measured exactly one absent cell in the eighteen');
  strictEqual(authoredHeadwords[0].fr, 'les tiens');
  // AND THE OTHER THREE CELLS OF ITS FAMILY WERE ALREADY THERE.
  for (const id of ['fr.b1.pronoms-essentiels.031', 'fr.b1.pronoms-essentiels.032', 'fr.b1.pronoms-essentiels.033']) {
    ok(byId.get(id), `${id} is a published tien cell and did not reach the seed`);
  }
});

test('not one of the eighteen is re-authored as a headword', { skip: noSeed }, () => {
  const PUBLISHED = HEADWORD_IDS.map((id) => byId.get(id)?.fr).filter(Boolean) as string[];
  const dupes = authored().filter((r) => r.kind !== 'sentence' && PUBLISHED.includes(r.fr));
  deepStrictEqual(dupes.map((r) => r.id), [], 'the flashcard hub would serve one card twice');
});

test('the three forms that CANNOT be headwords are taught inside sentences instead', { skip: noSeed }, () => {
  // Corpus §A.3: hubNorm strips a leading article, and the article is the only
  // thing separating `la nôtre` from the published `le nôtre`, `la vôtre` from
  // `le vôtre`, and `le leur` from `la leur`. The corpus solved the same problem
  // by publishing `c'est le leur` rather than `le leur`.
  const hubNorm = (s: string) => s.toLowerCase().replace(/^(le |la |les |l'|un |une |des )/, '').trim();
  for (const impossible of ['la nôtre', 'la vôtre', 'le leur', 'la leur']) {
    const asHeadword = authored().find((r) => r.kind !== 'sentence' && r.fr === impossible);
    ok(!asHeadword, `"${impossible}" is authored as a headword and would collide under hubNorm`);
    const inSentence = authored().some((r) => r.kind === 'sentence' && r.fr.includes(impossible));
    ok(inSentence, `"${impossible}" is in no authored sentence either, so the cell is missing from the lesson`);
  }
  // AND THE COLLISION IS REAL, not remembered.
  strictEqual(hubNorm('la nôtre'), hubNorm('le nôtre'));
  strictEqual(hubNorm('le leur'), hubNorm('la leur'));
  notStrictEqual(hubNorm('le mien'), hubNorm('la mienne'));
});

test('no duplicate fr inside the theme, computed the way flashhub computes it', { skip: noSeed }, () => {
  const hubNorm = (s: string) => s.toLowerCase().replace(/^(le |la |les |l'|un |une |des )/, '').trim();
  const seen = new Map<string, string>();
  const dupes: string[] = [];
  for (const i of items) {
    if (i.theme !== THEME || i.kind === 'sentence') continue;
    const k = hubNorm(i.fr);
    if (seen.has(k)) dupes.push(`${seen.get(k)} and ${i.id} both -> "${k}"`);
    else seen.set(k, i.id);
  }
  deepStrictEqual(dupes, []);
});

test("a2.24's three leur rows are imported, and they are trap 2", { skip: noSeed }, () => {
  for (const id of LEUR_ROW_IDS) {
    const row = byId.get(id);
    ok(row, `${id} is one of a2.24's three leur rows and is not in the seed`);
    ok((row!.drills ?? []).includes('flashcard'), `${id} is released by a tranche and has no flashcard`);
    ok(L!.itemIds.includes(id));
  }
});

test('the three-form families really do have three, measured in the corpus', { skip: noSeed }, () => {
  // ONE published plural row, glossed with NO gender, where mien has two.
  for (const [id, stem] of [
    ['fr.b2.pronoms-essentiels.005', 'nôtre'],
    ['fr.b2.pronoms-essentiels.008', 'vôtre'],
    ['fr.b2.pronoms-essentiels.012', 'leur'],
  ] as [string, string][]) {
    const row = byId.get(id)!;
    ok(!/masc|fem/i.test(row.en ?? ''), `${id} glosses "${row.en}", so the ${stem} plural DOES mark gender`);
  }
  for (const id of ['fr.b1.pronoms-essentiels.028', 'fr.b1.pronoms-essentiels.029']) {
    const row = byId.get(id)!;
    ok(/masc|fem/i.test(row.en ?? ''), `${id} glosses "${row.en}" with no gender, so the mien plural does not split`);
  }
});

test('the leur plural covers both genders, proved by a pair of authored rows', { skip: noSeed || !SRC }, () => {
  const m = byId.get(SRC!.LEUR_PLURAL_PAIR.masculine);
  const f = byId.get(SRC!.LEUR_PLURAL_PAIR.feminine);
  ok(m && f, 'the leur plural pair is not in the seed');
  ok(hasWord(m!.fr, SRC!.LEUR_PLURAL_PAIR.form) && hasWord(f!.fr, SRC!.LEUR_PLURAL_PAIR.form));
  notStrictEqual(m!.fr, f!.fr, 'one sentence twice proves nothing about gender');
});

test('six families reach the tapTable, which is the paradigm surface', { skip: noSeed }, () => {
  const tap = (L!.sections ?? []).filter((s) => s.type === 'tapTable');
  strictEqual(tap.length, 1, 'one tapTable in the flow');
  const rows = (tap[0] as { rows?: Array<{ cells: string[] }> }).rows ?? [];
  strictEqual(rows.length, 6, 'six families, and six is the Pixel 6 row ceiling');
  const text = strs(tap[0]).join('\n');
  for (const stem of SIX_FAMILIES) ok(text.includes(stem), `the tapTable does not show the ${stem} family`);
});

test('no authored row is gendered, so none can join a1.03 ending population', { skip: noSeed }, () => {
  const bad = authored().filter((r) => r.gender);
  deepStrictEqual(bad.map((r) => r.id), []);
});

test('no gendered single word was carried into the seed by this lesson', { skip: noSeed }, () => {
  const bad = (L!.itemIds ?? []).map((id) => byId.get(id)).filter((r): r is Row =>
    !!r && !!r.gender && r.kind === 'word' && !r.fr.replace(/^(le |la |les |l'|un |une |des )/, '').includes(' '));
  deepStrictEqual(bad.map((r) => `${r.id} "${r.fr}"`), []);
});

test('the 14-word sentence budget holds', { skip: noSeed }, () => {
  const over = authored().filter((r) => r.kind === 'sentence' && r.fr.split(/\s+/).length > 14);
  deepStrictEqual(over.map((r) => `${r.id} (${r.fr.split(/\s+/).length})`), []);
});

test('every authored respelling passes the real nasal checker', { skip: noSeed }, () => {
  const bad = authored().filter((r) => hasPlainNasalFor(r.fr, r.respell ?? ''));
  deepStrictEqual(bad.map((r) => `${r.id} "${r.respell}"`), []);
});

/* ══════════════════════════════════════════════════════════════════════════
 *  THE ELEVEN RESPELL REPAIRS — the largest finding in this build
 * ══════════════════════════════════════════════════════════════════════════ */

test('all eleven repairs reached the seed', { skip: noSeed || !SRC }, () => {
  for (const r of SRC!.RESPELL_REPAIRS) {
    const row = byId.get(r.id);
    ok(row, `${r.id} is a repair row and is not in the seed`);
    strictEqual(row!.respell, r.to, `${r.id} reads "${row!.respell}" in the seed`);
    ok(!hasPlainNasalFor(row!.fr, row!.respell ?? ''), `${r.id} is repaired and the checker still flags it`);
  }
});

test('all three states of every repair, through the real checker', { skip: !SRC }, () => {
  for (const r of SRC!.RESPELL_REPAIRS) {
    strictEqual(hasPlainNasalFor(r.fr, r.from), !r.blind, `${r.id}: blind is ${r.blind} and the checker says otherwise about "${r.from}"`);
    ok(!hasPlainNasalFor(r.fr, r.half), `${r.id}: the checker still flags the half-repair "${r.half}"`);
    ok(!hasPlainNasalFor(r.fr, r.to), `${r.id}: the checker flags the repaired "${r.to}"`);
  }
});

test('blind and house are kept as SEPARATE reasons (Corrections §14.1)', { skip: !SRC }, () => {
  for (const r of SRC!.RESPELL_REPAIRS) {
    strictEqual(r.half !== r.to, r.house, `${r.id}: half/to and house disagree, so the two reasons are conflated`);
  }
  // Every stored value is visible here, so nothing is blind. That is the
  // opposite of a2.11 and a2.17's tables and it is measured, not assumed.
  ok(SRC!.RESPELL_REPAIRS.every((r) => !r.blind), 'a repair is marked blind and the checker flags all eleven stored values');
});

test('the table splits five nasal against six oral, which is the whole finding', { skip: !SRC }, () => {
  strictEqual(SRC!.RESPELL_REPAIRS.filter((r) => !r.house).length, 5, 'the genuine nasals');
  strictEqual(SRC!.RESPELL_REPAIRS.filter((r) => r.house).length, 6, 'the false positives');
});

test("the checker's own repair would collapse the feminine onto the masculine", { skip: !SRC }, () => {
  // This is why the six are house:true rather than a stylistic preference. The
  // value hasPlainNasalFor's report produces for `la mienne` is the value the
  // masculine correctly ends on, and the lesson prints both on one card.
  const tail = (s: string) => s.split(' ').pop() ?? '';
  const pairs: [string, string][] = [
    ['fr.b1.pronoms-essentiels.027', 'fr.b1.pronoms-essentiels.026'],
    ['fr.b1.pronoms-essentiels.029', 'fr.b1.pronoms-essentiels.028'],
    ['fr.b1.pronoms-essentiels.032', 'fr.b1.pronoms-essentiels.031'],
    ['fr.b1.pronoms-essentiels.035', 'fr.b1.pronoms-essentiels.034'],
    ['fr.b2.pronoms-essentiels.002', 'fr.b2.pronoms-essentiels.001'],
  ];
  for (const [f, m] of pairs) {
    const fem = SRC!.RESPELL_REPAIRS.find((r) => r.id === f)!;
    const masc = SRC!.RESPELL_REPAIRS.find((r) => r.id === m)!;
    strictEqual(tail(fem.half), tail(masc.to), `${f}: the half-repair was expected to collide with ${m}'s final value`);
    notStrictEqual(tail(fem.to), tail(masc.to), `${f}: the FINAL values still collide, which is the defect this table exists to remove`);
  }
});

test('the feminine and the masculine reached the seed sounding different', { skip: noSeed }, () => {
  const tail = (s: string) => (s ?? '').split(' ').pop() ?? '';
  for (const [f, m] of [
    ['fr.b1.pronoms-essentiels.027', 'fr.b1.pronoms-essentiels.026'],
    ['fr.b1.pronoms-essentiels.029', 'fr.b1.pronoms-essentiels.028'],
    ['fr.b2.pronoms-essentiels.002', 'fr.b2.pronoms-essentiels.001'],
  ] as [string, string][]) {
    notStrictEqual(tail(byId.get(f)!.respell ?? ''), tail(byId.get(m)!.respell ?? ''),
      `${f} and ${m} respell their endings identically in the seed`);
  }
});

test('the house ending was READ OFF published rows, not invented (a2.15 §13)', { skip: noSeed || !SRC }, () => {
  for (const id of SRC!.REPAIR_SOURCES) {
    const row = byId.get(id);
    // The sources live in themes this lesson does not carry, so an absence from
    // the seed is the CUT rather than a defect. Checked only when present.
    if (!row) continue;
    const up = (row.respell ?? '').toUpperCase();
    ok(SRC!.HOUSE_ENDINGS.some((e) => up.endsWith(e)), `${id} respells "${row.respell}" and no longer evidences the house ending`);
  }
  for (const r of SRC!.RESPELL_REPAIRS) {
    if (!r.house) continue;
    ok(r.to.toUpperCase().endsWith(SRC!.HOUSE_ENDING), `${r.id} repairs to "${r.to}", not the ending the sources carry`);
  }
});

test('the two rows deliberately NOT repaired are named with a reason', { skip: !SRC }, () => {
  ok(SRC!.NOT_REPAIRED.length >= 2, 'a silence about a flagged row reads as an oversight');
  for (const n of SRC!.NOT_REPAIRED) ok(n.why.length > 40, `${n.id} has no reason recorded`);
});

/* ══════════════════════════════════════════════════════════════════════════
 *  THE HOMOPHONES — and the prompt has them backwards
 * ══════════════════════════════════════════════════════════════════════════ */

test('the homophone groups are the singular against its own PLURAL', { skip: !SRC }, () => {
  // The prompt asks for `miens`/`miennes`, which is a nasal vowel against an
  // oral vowel plus a real /n/ and is the ONE contrast the ear can settle. What
  // is genuinely one sound is the silent plural -s, on all eighteen forms.
  for (const g of SRC!.HOMOPHONE_FORMS) {
    strictEqual(g.length, 2);
    ok(g[1] === `${g[0]}s`, `${g.join('/')} is not a singular and its own plural`);
  }
  const flat = SRC!.HOMOPHONE_FORMS.flat();
  for (const stem of ['mien', 'mienne', 'nôtre', 'leur']) ok(flat.includes(stem), `${stem} is not in a homophone group`);
  // AND THE PROMPT'S PAIR IS DELIBERATELY NOT ONE OF THEM.
  const wrong = SRC!.HOMOPHONE_FORMS.find((g) => g.includes('miens') && g.includes('miennes'));
  ok(!wrong, "miens and miennes are grouped as one sound, which is the prompt's claim and corpus §A.5 measures it false");
});

test('NO EAR QUESTION offers two members of one homophone group', { skip: noSeed || !SRC }, () => {
  const bad: string[] = [];
  for (const q of questions()) {
    const heard = q.format === 'listenChoose' || !!q.say;
    if (!heard) continue;
    const opts = (q.opts as string[] | undefined) ?? [];
    for (const g of SRC!.HOMOPHONE_FORMS) {
      const present = g.filter((x) => opts.some((o) => hasWord(o, x)));
      if (present.length > 1) bad.push(`"${q.q}" offers ${present.join(' and ')}`);
    }
  }
  deepStrictEqual(bad, [], 'an ear question with no correct answer');
});

test('the masculine against the feminine IS asked by ear, because it is audible', { skip: noSeed }, () => {
  const ear = questions().filter((q) => q.format === 'listenChoose');
  strictEqual(ear.length, 2, 'the prompt asks for two listenChoose items on le mien against la mienne');
  const said = ear.map((q) => String(q.say ?? ''));
  ok(said.some((s) => /le mien/.test(s)), 'neither ear question says a masculine form');
  ok(said.some((s) => /la mienne/.test(s)), 'neither ear question says a feminine form');
});

test('the corpus now agrees the two are different sounds', { skip: noSeed }, () => {
  const masc = byId.get('fr.b1.pronoms-essentiels.026')!.respell ?? '';
  const fem = byId.get('fr.b1.pronoms-essentiels.027')!.respell ?? '';
  notStrictEqual(masc.split(' ').pop(), fem.split(' ').pop(),
    'le mien and la mienne respell their endings the same, so the ear questions have no key');
});

/* ══════════════════════════════════════════════════════════════════════════
 *  THE GENERALISATION
 * ══════════════════════════════════════════════════════════════════════════ */

test('the control page hands over a noun the lesson never showed, and keys on la mienne', { skip: noSeed || !SRC }, () => {
  const s = sec('s08-unseen') as { groups?: Array<{ items?: unknown[]; check?: { opts?: string[]; correct?: number } }> } | undefined;
  ok(s, 's08-unseen is gone, and doctrine §B.1 is the reason it exists');
  const control = (s!.groups ?? []).find((g) => (g.items ?? []).length === 0);
  ok(control, 'no control page');
  const keyed = (control!.check?.opts ?? [])[control!.check?.correct ?? -1] ?? '';
  ok(keyed.includes(SRC!.UNSEEN.answer), `the control keys on "${keyed}" and the unseen noun forces "${SRC!.UNSEEN.answer}"`);
});

test('the unseen noun is FEMININE, which is the cell whose word actually moves', { skip: !SRC }, () => {
  strictEqual(SRC!.UNSEEN.gender, 'f');
  strictEqual(SRC!.UNSEEN.answer, 'la mienne');
});

test('the unseen noun appears in no row this lesson carries', { skip: noSeed || !SRC }, () => {
  const bad = (L!.itemIds ?? []).map((id) => byId.get(id)).filter((r): r is Row =>
    !!r && hasWord(`${r.fr} ${r.en ?? ''}`, SRC!.UNSEEN.noun));
  deepStrictEqual(bad.map((r) => r.id), []);
});

test('the unseen noun appears in exactly the two sections that ask for it', { skip: noSeed || !SRC }, () => {
  const asks = (L!.sections ?? []).filter((s) => strs(s).some((t) => hasWord(t, SRC!.UNSEEN.noun))).map((s) => s.id);
  deepStrictEqual(asks.sort(), ['s08-unseen', 's22-quiz']);
});

test('at least one quiz item uses a noun absent from the lesson vocabulary', { skip: noSeed || !SRC }, () => {
  ok(questions().some((q) => hasWord(strs(q).join(' '), SRC!.UNSEEN.noun)),
    'the prompt asks for one by name');
});

test('the rejected unseen candidates each name why they were rejected', { skip: !SRC }, () => {
  ok(SRC!.UNSEEN_REJECTED.length >= 5);
  for (const r of SRC!.UNSEEN_REJECTED) ok(r.why.length > 20, `${r.noun} has no reason`);
});

/* ══════════════════════════════════════════════════════════════════════════
 *  WHAT fold() CAN AND CANNOT SEE
 * ══════════════════════════════════════════════════════════════════════════ */

test('fold() keeps the final -e and -s, which is what makes this lesson typeable', () => {
  strictEqual(new Set(FOUR_CELLS.map(fold)).size, 4, 'the four cells no longer fold apart');
});

test('the pairs the build claims survive fold() still do', { skip: !SRC }, () => {
  for (const [a, b] of SRC!.NEAR_MISSES) notStrictEqual(fold(a), fold(b), `"${a}" and "${b}" now collide`);
});

test('the pairs the build claims collide under fold() still do', { skip: !SRC }, () => {
  for (const [a, b] of SRC!.FOLD_COLLISIONS) strictEqual(fold(a), fold(b), `"${a}" and "${b}" no longer collide`);
});

test('the questions this build wanted and could not write are recorded with reasons', { skip: !SRC }, () => {
  ok(SRC!.WANTED_AND_IMPOSSIBLE.length >= 4, 'a2.09 §"Questions I wanted and could not write" is the model');
  for (const w of SRC!.WANTED_AND_IMPOSSIBLE) ok(w.why.length > 40, `"${w.want}" has no reason`);
});

/* ══════════════════════════════════════════════════════════════════════════
 *  THE QUIZ
 * ══════════════════════════════════════════════════════════════════════════ */

test('one quiz, thirty questions', { skip: noSeed }, () => {
  strictEqual((L!.sections ?? []).filter((s) => s.type === 'quiz').length, 1, 'a second quiz section is silently never rendered');
  strictEqual(questions().length, QUESTIONS);
});

test('the format mix is typeIn-weighted, which the prompt asks for', { skip: noSeed }, () => {
  const mix: Record<string, number> = {};
  for (const q of questions()) mix[String(q.format)] = (mix[String(q.format)] ?? 0) + 1;
  ok((mix.mcq ?? 0) <= QUESTIONS / 2, `${mix.mcq}/${QUESTIONS} mcq`);
  ok((mix.typeIn ?? 0) > (mix.mcq ?? 0), `${mix.typeIn} typeIn against ${mix.mcq} mcq`);
  ok((mix.errorSpot ?? 0) >= 4, 'the prompt asks for errorSpot on leurs and on owner agreement');
  strictEqual(mix.listenChoose ?? 0, 2);
});

test('every question has a why and a ref that resolves inside this lesson', { skip: noSeed }, () => {
  const ids = new Set((L!.sections ?? []).map((s) => String(s.id)));
  const bad: string[] = [];
  for (const q of questions()) {
    if (!q.why) bad.push(`no why: "${q.q}"`);
    if (!q.ref || !ids.has(String(q.ref))) bad.push(`ref "${q.ref}": "${q.q}"`);
  }
  deepStrictEqual(bad, []);
});

test('every free-text question accepts the answer it displays, through the real fold()', { skip: noSeed }, () => {
  const bad: string[] = [];
  for (const q of questions()) {
    if (q.format !== 'typeIn' && q.format !== 'errorSpot') continue;
    const accept = (q.accept as string[] | undefined) ?? [];
    if (!accept.length) { bad.push(`no accept: "${q.q}"`); continue; }
    if (!accept.some((a) => fold(a) === fold(String(q.answer ?? '')))) bad.push(`"${q.q}" displays "${q.answer}"`);
  }
  deepStrictEqual(bad, []);
});

test('every typeIn on agreement fixes the gender and number in the stem', { skip: noSeed }, () => {
  // The prompt asks for this by name: « typeIn for agreement, with the owned
  // noun's gender and number fixed in the stem ».
  const bad: string[] = [];
  for (const q of questions()) {
    if (q.format !== 'typeIn') continue;
    const a = String(q.answer ?? '').toLowerCase();
    if (!FOUR_CELLS.some((c) => a.includes(c))) continue;
    if (!/masculine|feminine|plural|singular|it's mine|they're mine/i.test(String(q.q ?? ''))) bad.push(String(q.q));
  }
  deepStrictEqual(bad, []);
});

test('each round names targets whose FIRST resolving one has a live drill', { skip: noSeed }, () => {
  // drillForRound fires the drill of the FIRST resolving target and then stops,
  // so a drill named in second place is dead content.
  const drills = new Set(((L!.drills ?? []) as Array<{ id: string }>).map((d) => d.id));
  const triggers = new Map(((L!.errorTriggers ?? []) as Array<{ id: string; drill: string }>).map((t) => [t.id, t.drill]));
  const fired = new Set<string>();
  const rounds = (quizSection() as { rounds?: Array<{ id: string; targets?: string[] }> }).rounds ?? [];
  for (const r of rounds) {
    const first = (r.targets ?? []).find((t) => triggers.has(t));
    ok(first, `round ${r.id} names no target that resolves`);
    const drill = triggers.get(first!)!;
    ok(drills.has(drill), `round ${r.id} resolves to drill "${drill}", which does not exist`);
    ok(!fired.has(drill), `drill "${drill}" is the first resolving target of two rounds`);
    fired.add(drill);
  }
  strictEqual(fired.size, drills.size, 'a drill that is no round first resolving target is dead content');
});

/* ══════════════════════════════════════════════════════════════════════════
 *  THE SHAPE
 * ══════════════════════════════════════════════════════════════════════════ */

test('24 missions, which is the measured A2 house shape', { skip: noSeed }, () => {
  strictEqual((L!.sections ?? []).length, MISSIONS);
});

test('the spine is in order and every act names sections that exist', { skip: noSeed }, () => {
  const ids = (L!.sections ?? []).map((s) => String(s.id));
  const acts = (L!.acts ?? []) as Array<{ id: string; sections: string[] }>;
  strictEqual(acts.flatMap((a) => a.sections).join(','), ids.join(','), 'the acts and the sections disagree on order or membership');
  const claimed = acts.flatMap((a) => a.sections);
  strictEqual(new Set(claimed).size, claimed.length, 'two acts claim one section');
});

test('the Owns outweighs the scene and the trap (doctrine §B.5)', { skip: noSeed }, () => {
  const acts = (L!.acts ?? []) as Array<{ id: string; sections: string[] }>;
  const of = (id: string) => (acts.find((a) => a.id === id)?.sections ?? []).length;
  ok(of('act2') + of('act3') > of('act1') + of('act4'),
    `the Owns is ${of('act2') + of('act3')} and the scene plus the trap is ${of('act1') + of('act4')}`);
});

test('the paradigm gets ONE mission and the Owns gets ten', { skip: noSeed }, () => {
  // The risk in an eighteen-cell lesson is that it becomes a reference document.
  const acts = (L!.acts ?? []) as Array<{ id: string; sections: string[] }>;
  const owns = [...(acts.find((a) => a.id === 'act2')?.sections ?? []), ...(acts.find((a) => a.id === 'act3')?.sections ?? [])];
  const tables = owns.filter((id) => (sec(id) as Sec | undefined)?.type === 'tapTable');
  strictEqual(tables.length, 1, 'the paradigm surface should be one mission of the eleven');
});

test('the reframe is carried verbatim, the exact number of times', { skip: noSeed }, () => {
  strictEqual(strs(L).filter((t) => t.includes(REFRAME)).length, REFRAME_COUNT);
  strictEqual(L!.reframe, REFRAME);
});

test('the reframe is NOT a1.17 reframe reworded, which is what the prompt proposed', { skip: !SRC }, () => {
  notStrictEqual(REFRAME, A117_REFRAME);
  const rejected = SRC!.REFRAME_REJECTED.find((r) => r.text === 'It agrees with what is owned, never with who owns it.');
  ok(rejected, "the prompt's own reframe is not recorded as rejected");
  ok(rejected!.why.includes('a1.17'), 'the rejection does not say it restates the prerequisite');
});

test('the rejected reframes are recorded with reasons', { skip: !SRC }, () => {
  ok(SRC!.REFRAME_REJECTED.length >= 3);
  for (const r of SRC!.REFRAME_REJECTED) ok(r.why.length > 40, `"${r.text}" has no reason`);
});

test('the lesson does not carry the three fields that draw nothing', { skip: noSeed }, () => {
  for (const f of ['teaches', 'canDo', 'track']) ok(!(f in L!), `Lesson.${f} draws nothing`);
});

test('the audio block carries none of the six fields no renderer reads', { skip: noSeed }, () => {
  const a = (L!.audio ?? {}) as Record<string, unknown>;
  for (const f of ['modelPlayback', 'wrongThenRight', 'perSentenceReplay', 'scoreOn', 'autoplay', 'maxPlays']) {
    ok(!(f in a), `Lesson.audio.${f} is read by no renderer`);
  }
});

test('the one-take constraints are written into desc, where they survive the clip', { skip: noSeed }, () => {
  const recorded = ((L!.audio ?? {}) as { recorded?: Array<{ id: string; desc: string }> }).recorded ?? [];
  const listen = recorded.find((r) => r.id === 'rec-a2-34-listen');
  ok(listen, 'the ear mission has no recording spec');
  for (const phrase of ['ONE TAKE', 'ONE VOICE', 'ADJACENTLY']) {
    ok(listen!.desc.includes(phrase), `rec-a2-34-listen does not say ${phrase}`);
  }
  // AND THE ONE THAT CANNOT BE RECOVERED: the silent plural.
  ok(/NOT said|no audible s/i.test(listen!.desc), 'the spec does not forbid an audible plural s, which would make the third question measure something not in the language');
});

test('one tapTable in the flow and no table anywhere in sections', { skip: noSeed }, () => {
  strictEqual((L!.sections ?? []).filter((s) => s.type === 'table').length, 0,
    'a table at layer core is a density failure and layer more draws identically');
});

test('the reference sheet holds the one table, at three columns, and no cheatSheet', { skip: noSeed }, () => {
  const sheets = (L!.sheets ?? []) as Array<{ sections?: Array<{ type: string; cols?: unknown[] }> }>;
  strictEqual(sheets.length, 1);
  const tables = sheets.flatMap((sh) => (sh.sections ?? []).filter((s) => s.type === 'table'));
  strictEqual(tables.length, 1);
  ok((tables[0].cols ?? []).length <= 3, 'a Pixel 6 cuts the fourth column off with no affordance (a2.08)');
  ok(!sheets.some((sh) => (sh.sections ?? []).some((s) => s.type === 'cheatSheet')),
    'cheatSheet inside a reference sheet draws its title and nothing else');
});

/** THE SHEET TABLE, AND WHAT THE DEVICE PASS ACTUALLY ESTABLISHED.
 *
 *  v2 shipped both genders in every cell and the third column ran past the
 *  screen edge on a Pixel 6. v3 "fixed" that by trimming the cells to the
 *  masculine and moving the feminine into `rowDetails`. **Reading
 *  `ReferenceSheet.tsx` showed v3 was the regression**, on two counts:
 *
 *    1. `SheetTable` is wrapped in `<ScrollView horizontal nestedScrollEnabled
 *       directionalLockEnabled>`, with the comment « so a wide row never
 *       squashes its cells into unreadable columns on a phone ». THE TABLE IS
 *       MEANT TO EXTEND AND BE DRAGGED. Corrections §15.5's « a sheet does not
 *       scroll sideways » is false, and a2.08 dropped a column over it.
 *    2. `case 'table'` renders `<SheetTable cols={...} rows={...} />` and NEVER
 *       PASSES `rowDetails`. It has no reader inside a reference sheet, exactly
 *       like `cheatSheet` (invariants §C). So v3 moved nine forms onto a field
 *       nothing draws.
 *
 *  Reverted at v4. The two assertions below are what remains true and worth
 *  guarding: the cells carry the whole paradigm, and nothing in this lesson
 *  depends on `rowDetails` being drawn in a sheet. */

test('the sheet table cells carry the whole paradigm, not half of it', { skip: noSeed }, () => {
  const table = ((L!.sheets ?? []) as Array<{ sections?: Array<{ type: string; rows?: string[][] }> }>)
    .flatMap((sh) => sh.sections ?? []).find((s) => s.type === 'table');
  ok(table, 'the sheet table is gone');
  const cells = (table!.rows ?? []).flat().join(' | ');
  for (const f of ['la mienne', 'les miennes', 'la tienne', 'les tiennes', 'la sienne', 'les siennes', 'la nôtre', 'la vôtre', 'la leur']) {
    ok(cells.includes(f), `the sheet table no longer shows "${f}" in a CELL, and rowDetails is not drawn in a sheet`);
  }
});

test('no sheet section relies on a field the sheet renderer never passes', { skip: noSeed }, () => {
  // `ReferenceSheet.tsx` draws `teach`, `letterGrid` and `table`, and its table
  // takes `cols` and `rows` only. A `cheatSheet` draws its title and nothing
  // else. Anything this lesson puts anywhere else is invisible.
  const secs = ((L!.sheets ?? []) as Array<{ sections?: Array<Record<string, unknown>> }>).flatMap((sh) => sh.sections ?? []);
  deepStrictEqual(secs.filter((s) => s.type === 'cheatSheet').map((s) => s.id), [],
    'cheatSheet inside a reference sheet draws its title and nothing else');
  for (const s of secs) {
    ok(['teach', 'letterGrid', 'table'].includes(String(s.type)), `${String(s.id)} is a ${String(s.type)}, which ReferenceSheet does not draw`);
  }
});

test('the in-flow tapTable keeps every row on one line', { skip: noSeed }, () => {
  // MEASURED ON THE SAME DEVICE IN THE SAME SESSION: all six rows render on one
  // line each, widest `yours, formal | le vôtre | les vôtres` at 31 characters.
  // Unlike the sheet, `tapTable` does NOT scroll sideways — it is not in
  // `ownsLayout()` and sits in a vertical scroller — so this budget is real.
  const tap = (L!.sections ?? []).find((s) => s.type === 'tapTable') as { rows?: Array<{ cells: string[] }> } | undefined;
  const bad = (tap!.rows ?? []).map((r) => r.cells.reduce((n, c) => n + c.length, 0)).filter((w) => w > 35);
  deepStrictEqual(bad, []);
});

test('commonErrors carries swipe, or it draws a blank screen', { skip: noSeed }, () => {
  for (const s of (L!.sections ?? []).filter((x) => x.type === 'commonErrors')) {
    ok((s as { swipe?: boolean }).swipe, `${s.id} is commonErrors without swipe`);
  }
});

test('no section declares more than three term chips', { skip: noSeed }, () => {
  const bad = (L!.sections ?? []).filter((s) => ((s as { terms?: string[] }).terms ?? []).length > 3);
  deepStrictEqual(bad.map((s) => s.id), []);
});

test('every declared term is surfaced by at least one section', { skip: noSeed }, () => {
  const declared = Object.keys((L!.terms ?? {}) as Record<string, unknown>);
  const used = new Set((L!.sections ?? []).flatMap((s) => (s as { terms?: string[] }).terms ?? []));
  deepStrictEqual(declared.filter((t) => !used.has(t)), [], 'a definition nobody can reach');
});

/* ══════════════════════════════════════════════════════════════════════════
 *  REACHABILITY
 * ══════════════════════════════════════════════════════════════════════════ */

function collectIds(v: unknown, out: string[] = []): string[] {
  if (typeof v === 'string') { if (/^fr\.[a-z0-9]+\./.test(v)) out.push(v); return out; }
  if (Array.isArray(v)) { v.forEach((x) => collectIds(x, out)); return out; }
  if (v && typeof v === 'object') { Object.values(v).forEach((x) => collectIds(x, out)); return out; }
  return out;
}

test('every declared itemId resolves in the seed', { skip: noSeed }, () => {
  deepStrictEqual((L!.itemIds ?? []).filter((i) => !byId.has(i)), []);
});

test('every declared itemId is on a screen: released by a tranche or named by something', { skip: noSeed }, () => {
  const released = new Set(((L!.deckTranche ?? []) as string[][]).flat());
  const named = new Set([...collectIds(L!.sections), ...collectIds(L!.drills ?? []), ...collectIds(L!.terms ?? {})]);
  deepStrictEqual((L!.itemIds ?? []).filter((i) => !released.has(i) && !named.has(i)), [],
    'an id that resolves perfectly and is drawn by nothing');
});

test('no tranche releases a row no deck can serve', { skip: noSeed }, () => {
  const released = ((L!.deckTranche ?? []) as string[][]).flat();
  const bad = released.map((id) => byId.get(id)).filter((r): r is Row => !!r && !(r.drills ?? []).includes('flashcard'));
  deepStrictEqual(bad.map((r) => r.id), [], 'a release that validates, publishes and draws nothing');
});

test('the nine imported comparative rows are named rather than released', { skip: noSeed }, () => {
  const released = new Set(((L!.deckTranche ?? []) as string[][]).flat());
  const named = new Set([...collectIds(L!.sections), ...collectIds(L!.drills ?? []), ...collectIds(L!.terms ?? {})]);
  const deckDead = (L!.itemIds ?? []).map((id) => byId.get(id)).filter((r): r is Row =>
    !!r && !(r.drills ?? []).includes('flashcard'));
  ok(deckDead.length >= 8, 'the deck-dead population disappeared, so NOT_DECK_ABLE is stale');
  for (const r of deckDead) {
    ok(!released.has(r.id), `${r.id} cannot be served and a tranche releases it`);
    ok(named.has(r.id), `${r.id} can never be released and nothing names it, so it is on no screen`);
  }
});

test('practice speaks only rows that carry voiceflash', { skip: noSeed }, () => {
  const p = (L!.sections ?? []).find((s) => s.type === 'practice') as { itemIds?: string[]; skill?: string } | undefined;
  ok(p, 'practice is mandatory and lesson-contract mirrors the publish gate');
  strictEqual(p!.skill, 'speak');
  ok((p!.itemIds ?? []).length > 0);
  const silent = (p!.itemIds ?? []).map((id) => byId.get(id)).filter((r): r is Row => !!r && !(r.drills ?? []).includes('voiceflash'));
  deepStrictEqual(silent.map((r) => r.id), []);
});

/* ── THE TWO HOLES THE MUTATION HARNESS FOUND ─────────────────────────────
 *
 * `_a234_mutate.ts` ran 36 mutations against this file. Thirty-four went red.
 * The two that did not were « a scenario turn with no userEn » and « a scenario
 * turn with one alt » — both of them contract lines `scenario.logic.test.ts`
 * enforces SEED-WIDE, and both of them things this file simply did not look at.
 *
 * A2-TAIL-AUDIT §4 predicts exactly two per build and says a mutation caught
 * only elsewhere is a hole here. Closed, and the harness re-run to confirm. */

test('every scenario turn carries a userEn', { skip: noSeed }, () => {
  // Without it the reveal shows a French sentence the learner is told they
  // should have said and cannot read.
  const sc = (L!.sections ?? []).find((s) => s.type === 'scenario') as { turns?: Array<Record<string, unknown>> } | undefined;
  ok(sc, 's19-talk is gone');
  const bad = (sc!.turns ?? []).map((t, i) => [i, t] as const).filter(([, t]) => !t.userEn);
  deepStrictEqual(bad.map(([i]) => `turn ${i}`), []);
});

test('every scenario turn carries at least two alts', { skip: noSeed }, () => {
  // One alt makes a conversation read as a cloze test with one right answer,
  // and `stt` scores against all of them with the best match winning.
  const sc = (L!.sections ?? []).find((s) => s.type === 'scenario') as { turns?: Array<{ alts?: unknown[] }> } | undefined;
  const bad = (sc!.turns ?? []).map((t, i) => [i, (t.alts ?? []).length] as const).filter(([, n]) => n < 2);
  deepStrictEqual(bad.map(([i, n]) => `turn ${i} has ${n}`), []);
});

test('no scenario alt produces a form this lesson forbids', { skip: noSeed || !SRC }, () => {
  // An alt is a line the learner MAY say. a2.08 shipped a demonstrative in one
  // on its first draft and a conditional in another.
  const sc = (L!.sections ?? []).find((s) => s.type === 'scenario') as { turns?: Array<{ alts?: Array<{ fr?: string }> }> } | undefined;
  const bad: string[] = [];
  for (const t of sc!.turns ?? []) {
    for (const a of t.alts ?? []) {
      const fr = a.fr ?? '';
      for (const d of SRC!.DEMONSTRATIVE_PRONOUNS) if (hasWord(fr, d)) bad.push(`"${d}" in "${fr}"`);
      if (hasBarePossessive(fr)) bad.push(`a bare possessive in "${fr}"`);
      if (tenseHit(fr)) bad.push(`${tenseHit(fr)} in "${fr}"`);
    }
  }
  deepStrictEqual(bad, []);
});

test("practice does not use skill:'write', which draws no writing surface", { skip: noSeed }, () => {
  ok(!(L!.sections ?? []).some((s) => s.type === 'practice' && (s as { skill?: string }).skill === 'write'));
});

test('the rows deliberately left behind stay left behind', { skip: noSeed || !SRC }, () => {
  for (const n of SRC!.NOT_IMPORTED) {
    ok(!(L!.itemIds ?? []).includes(n.id), `${n.id} is on the do-not-import list (${n.why})`);
  }
  ok(SRC!.NOT_IMPORTED.length >= 4, 'the rows a next author would obviously reach for are not recorded');
});

/* ══════════════════════════════════════════════════════════════════════════
 *  THE DICTÉE
 * ══════════════════════════════════════════════════════════════════════════ */

test('every dictée target resolves to LETTERS mode through the real dicteeMode', { skip: noSeed }, () => {
  const d = (L!.sections ?? []).find((s) => s.type === 'dictation') as { itemIds?: string[] } | undefined;
  ok(d, 's18-dictee is gone');
  ok((d!.itemIds ?? []).length >= 6);
  const bad = (d!.itemIds ?? []).map((id) => byId.get(id)!).filter((r) => dicteeMode(r.fr) !== 'letters');
  deepStrictEqual(bad.map((r) => `${r.id} "${r.fr}"`), [],
    'word mode hands every real word over pre-spelled, so an agreement cannot be tested in it');
});

test('the dictée asks the learner to write all four cells', { skip: noSeed }, () => {
  const d = (L!.sections ?? []).find((s) => s.type === 'dictation') as { itemIds?: string[] } | undefined;
  const targets = (d!.itemIds ?? []).map((id) => byId.get(id)!.fr).join('\n');
  for (const f of FOUR_CELLS) ok(targets.includes(f), `the dictée never asks for "${f}"`);
});

test('the four-cell frame could NOT have been the dictée, measured', { skip: noSeed }, () => {
  // La valise est la mienne. is 19 letters and Les clés sont les miennes. is 21,
  // so the C'est frame carries the dictée instead. Measured, not remembered.
  strictEqual(dicteeMode('La valise est la mienne.'), 'words');
  strictEqual(dicteeMode("C'est la mienne."), 'letters');
});

/* ══════════════════════════════════════════════════════════════════════════
 *  DISPLAY PARITY
 * ══════════════════════════════════════════════════════════════════════════ */

test('every pinned section still carries its corpus row verbatim', { skip: noSeed || !SRC }, () => {
  const bad: string[] = [];
  for (const p of SRC!.DISPLAY_PARITY) {
    const s = sec(p.section);
    const row = byId.get(p.itemId);
    if (!s) { bad.push(`${p.section} is gone`); continue; }
    if (!row) { bad.push(`${p.itemId} is not in the seed`); continue; }
    if (!strs(s).some((t) => t.includes(row.fr))) bad.push(`${p.section} lost ${p.itemId} ("${row.fr}") — ${p.why}`);
  }
  deepStrictEqual(bad, [], 'a card and the row behind it have walked apart');
});

test('every groupDrill item says what the row it names says', { skip: noSeed }, () => {
  const bad: string[] = [];
  for (const s of L!.sections) {
    for (const g of ((s as { groups?: Array<{ items?: Array<{ itemId?: string; fr?: string }> }> }).groups ?? [])) {
      for (const it of g.items ?? []) {
        if (!it.itemId || !it.fr) continue;
        const row = byId.get(it.itemId);
        if (!row) { bad.push(`${s.id} names ${it.itemId}, which is not in the seed`); continue; }
        if (!fold(row.fr).includes(fold(it.fr))) bad.push(`${s.id} shows "${it.fr}" and ${it.itemId} says "${row.fr}"`);
      }
    }
  }
  deepStrictEqual(bad, []);
});

/* ══════════════════════════════════════════════════════════════════════════
 *  HOUSE COPY
 * ══════════════════════════════════════════════════════════════════════════ */

test('no grammar jargon on a learner surface, including its -s plural', { skip: noSeed || !SRC }, () => {
  const bad: string[] = [];
  for (const j of SRC!.JARGON) {
    for (const form of [j, `${j}s`]) if (hasWord(DISPLAYED, form)) bad.push(form);
  }
  deepStrictEqual(bad, []);
});

test('the jargon walk covers intro and overview, which are drawn on the lesson cover', { skip: noSeed || !SRC }, () => {
  // Corrections §9: a2.11 shipped "third person" in `intro` past every
  // host-side gate and only a Pixel 6 found it.
  const cover = [String(L!.intro ?? ''), ...strs(L!.overview ?? {})].join('\n');
  ok(cover.length > 100, 'the cover walk is empty, so this check is a no-op');
  const bad: string[] = [];
  for (const j of SRC!.JARGON) for (const form of [j, `${j}s`]) if (hasWord(cover, form)) bad.push(form);
  deepStrictEqual(bad, []);
});

test('overview.titleEn is the unit English name, which content_units requires', { skip: noSeed }, () => {
  strictEqual((L!.overview as { titleEn?: string }).titleEn, 'Possessive Pronouns');
});

test('the plain phrase outnumbers the technical one (Corrections §14.5)', { skip: noSeed }, () => {
  const plain = countOf(LEARNER, 'the thing owned');
  const tech = countOf(LEARNER, 'possessive') + countOf(LEARNER, 'possessives');
  ok(plain > tech, `"the thing owned" ${plain} against "possessive" ${tech}`);
});

test('no em dash and no "honest", by SUBSTRING in both directions', { skip: noSeed }, () => {
  const bad: string[] = [];
  for (const t of strs(L)) for (const b of ['honest', '—']) if (t.toLowerCase().includes(b)) bad.push(`"${b}" in "${t.slice(0, 50)}"`);
  deepStrictEqual(bad, []);
  // The guard can see "dishonest", which a `\bhonest` shape cannot (a2.06).
  ok('a dishonest answer'.includes('honest'));
});

test('no double punctuation: a sentence-final stop followed by ANY punctuation', { skip: noSeed }, () => {
  const bad = strs(L).filter((t) => /[.!?][.,!?;:]/.test(t.replace(/\.\.\./g, '')));
  deepStrictEqual(bad.map((t) => t.slice(0, 50)), []);
});

test('no AI-tell phrasing', { skip: noSeed }, () => {
  const banned = ['falls fast', 'trip up', 'half of everything', 'this is the big one', 'listen to the trap', 'get those two right', 'this is the part that pays', 'here is the catch'];
  const bad = banned.filter((b) => LEARNER.toLowerCase().includes(b));
  deepStrictEqual(bad, []);
});

test('no U+203F reaches any surface, and this lesson creates five liaisons', { skip: noSeed }, () => {
  const bad = strs(L).filter((t) => t.includes(TIE_GLYPH));
  deepStrictEqual(bad.map((t) => t.slice(0, 50)), [], 'U+203F draws as a low underscore on a Pixel 6');
  const rows = authored().filter((r) => (r.respell ?? '').includes(TIE_GLYPH));
  deepStrictEqual(rows.map((r) => r.id), []);
});

/* ══════════════════════════════════════════════════════════════════════════
 *  THE SEED AND THE SOURCE AGREE
 * ══════════════════════════════════════════════════════════════════════════ */

test('every authored row in the source reached the seed unchanged', { skip: noSeed || !SRC }, () => {
  const bad: string[] = [];
  for (const r of SRC!.ALL_ROWS) {
    const row = byId.get(r.id);
    if (!row) { bad.push(`${r.id} is missing`); continue; }
    if (row.fr !== r.fr) bad.push(`${r.id} fr: "${row.fr}" vs "${r.fr}"`);
    if ((row.respell ?? '') !== (r.respell ?? '')) bad.push(`${r.id} respell: "${row.respell}" vs "${r.respell}"`);
  }
  deepStrictEqual(bad, []);
});

test('the authored block sits inside its allocated range and holds what it should', { skip: noSeed }, () => {
  const rows = authored();
  strictEqual(rows.length, AUTHORED_ROWS);
  for (const r of rows) {
    strictEqual(r.theme, THEME);
    strictEqual(r.level, 'a2');
  }
  // Thirty sentences and one phrase.
  strictEqual(rows.filter((r) => r.kind === 'sentence').length, AUTHORED_ROWS - 1);
  strictEqual(rows.filter((r) => r.kind === 'phrase').length, 1);
});

test('the id block starts above what a2.33 applied, which is what the prompt asked to be checked', { skip: noSeed }, () => {
  // The prompt said NEXT FREE was .337. a2.33 took .337-.363 the day before.
  const a233 = items.filter((i) => /^fr\.a2\.pronoms-essentiels\.(3[3-6][0-9])$/.test(i.id))
    .map((i) => +i.id.split('.').pop()!).filter((n) => n >= 337 && n <= 363);
  ok(a233.length > 20, 'a2.33 block is not in the seed, so the collision this build avoided cannot be shown');
  ok(Math.min(...authored().map((r) => +r.id.split('.').pop()!)) > Math.max(...a233),
    'this block overlaps a2.33');
});
