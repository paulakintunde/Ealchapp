// a2.33.l1 « Les démonstratifs » — the guard.
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
//   2. THE HOUSE WORD BOUNDARY EXCLUDES `'`, so it cannot see `c'est`,
//      `qu'il` or `l'autre`. The apostrophe is dropped from the LEFT boundary
//      and kept on the right. The HYPHEN stays on both sides, which is
//      load-bearing here: `celui` inside `celui-ci` must not count.
//   3. `\bhonest` CANNOT SEE "dishonest". The banned-word guard fires on the
//      SUBSTRING, in both directions.
//   4. THE DOUBLE-STOP GUARD IS HALF THE SHAPE. It checks for a sentence-final
//      stop followed by ANY punctuation, not for two dots.
//   5. Corrections §14.5: `pronoun` is NOT jargon. The RATIO is guarded, so the
//      plain phrase outnumbers the technical one, and `overview.titleEn` is
//      exempt because `content_units` requires it to equal the unit's English
//      name — which for THIS unit contains the word "Demonstrative".
//
// AND ONE HOLE THIS LESSON FOUND. A bare-pronoun shape built out of French
// morphology fires on the lesson's own enumeration of the forms it teaches
// (« celui, celle, ceux, celles »), on a card headed with a single form, and on
// English prose MENTIONING a French word (« Why celle and not celui? »). All
// three are in MUST_NOT_FIRE.bare, and all three are real strings off this
// lesson's surfaces.

import { test } from 'node:test';
import { ok, strictEqual, deepStrictEqual, notStrictEqual } from 'node:assert';
import seed from './seed.json' with { type: 'json' };
import { fold } from './answer.logic.ts';
import { dicteeMode } from './dictee.logic.ts';
import { hasPlainNasalFor } from './density.logic.ts';
import { quizQuestions } from './schema.ts';

const LESSON_ID = 'a2.33.l1';
const UNIT_ID = 'a2.33';
const THEME = 'pronoms-essentiels';
const ID_FIRST = 337;
const ID_LAST = 363;

/* ─── The numbers that are the SHAPE of the lesson ────────────────────────── */

/** A hardcoded count fails on itself the first time content legitimately
 *  changes, EXCEPT where the number IS the shape. These are: four forms that
 *  point, four that replace, eight `-ci`/`-là` cells, four legal tails. A quiet
 *  drop in any of them is exactly what this file exists to catch. */
const POINTS = ['ce', 'cet', 'cette', 'ces'] as const;
const REPLACES = ['celui', 'celle', 'ceux', 'celles'] as const;
const MISSIONS = 24;
const QUESTIONS = 30;
const AUTHORED_ROWS = 27;
const REFRAME_COUNT = 25;
const REFRAME = 'A noun after it means it points. No noun means it replaces.';

/** a2.06's own string, RETYPED HERE ON PURPOSE. The build imports it so the
 *  quotation cannot drift; this test retypes it so the test cannot drift with
 *  it. If a2.06 rewords, the build fails first and this fails second, and both
 *  failures name the same sentence. */
const A206_SHAPE = 'Here the word after it decides, and so does where it sits: an article leans on a noun, a pronoun leans on a verb.';
const A233_SHAPE = 'Here it leans on nothing at all until you hang something off the end.';
const WHAT_FOLLOWS = 'what comes next decides';
const ELISION_REFRAME = 'Two vowels collide, the little word gives way.';
const A216_REFRAME = 'Before a vowel, say the feminine and drop its last two letters.';

const OBJECT_UNIT = 'a2.06';
const SHAPE_UNIT = 'a2.02';
const VOWEL_UNIT = 'a2.16';
const ELISION_UNIT = 'sons.07';
const GENDER_UNIT = 'a1.03';
const POSSESSIVE_UNIT = 'a2.34';

/** The eight headwords, by id. Asserted by id and never by count, because the
 *  prompt's whole corpus instruction is « you author no headwords ». */
const HEADWORD_IDS = [
  'fr.sons.mots-essentiels.089', 'fr.sons.mots-essentiels.090',
  'fr.sons.mots-essentiels.091', 'fr.sons.mots-essentiels.092',
  'fr.sons.mots-essentiels.105', 'fr.sons.mots-essentiels.106',
  'fr.sons.mots-essentiels.107', 'fr.sons.mots-essentiels.108',
] as const;

/** The b1 block the prompt did not know existed, and the four rows left behind. */
const B1_CARDS = [
  'fr.b1.pronoms-essentiels.036', 'fr.b1.pronoms-essentiels.040',
  'fr.b1.pronoms-essentiels.044', 'fr.b1.pronoms-essentiels.048',
] as const;
const B1_LEFT_BEHIND = [
  'fr.b1.pronoms-essentiels.043', 'fr.b1.pronoms-essentiels.051',
  'fr.b1.pronoms-essentiels.046', 'fr.b1.pronoms-essentiels.047',
] as const;

/** invariants §2: U+203F draws as a low underscore on a Pixel 6. The published
 *  `cet hôtel` respelling carries one, which is why it is named and not
 *  imported. */
const TIE_GLYPH = '‿';
const TIE_ROW = 'fr.sons.voyelles.441';

const BARE_ALLOWED_IN = ['s01-scene', 's15-trap', 's16-errors', 's22-quiz'] as const;
const IMPERSONAL_ALLOWED_IN = 's24-roundup';
const IMPERSONAL_FORMS = ["c'est", 'ce sont'] as const;

/* ── THE SOURCE, AND TELLING ABSENT FROM BROKEN (Corrections §9) ─────────── */

type SrcShape = {
  RESPELL_REPAIRS: { id: string; fr: string; from: string; half: string; to: string; blind: boolean; house: boolean }[];
  UNSEEN: { noun: string; answer: string; id: string; gender: string };
  UNSEEN_REJECTED: readonly { noun: string; why: string }[];
  REFRAME_REJECTED: readonly { text: string; why: string }[];
  POSSESSIVE_FORMS: readonly string[];
  OBJECT_FORMS: readonly string[];
  HOMOPHONE_FORMS: readonly string[][];
  HOMOPHONE_WRITTEN_ALLOWED: readonly { stem: string; why: string }[];
  MUST_FIRE: Record<string, readonly string[]>;
  MUST_NOT_FIRE: Record<string, readonly string[]>;
  B1_NOT_IMPORTED: readonly { id: string; fr: string; why: string }[];
  JARGON: readonly string[];
  ALL_ROWS: { id: string; fr: string; kind: string; respell?: string }[];
  GRID_CELLS: readonly { form: string; job: string; id: string; gender: string; number: string }[];
  CI_LA_CELLS: readonly { form: string; id: string; authored: boolean }[];
  BOTH_CELLS: readonly { id: string; points: string; replaces: string; noun: string }[];
  TAILS: readonly { tail: string; example: string; authored: boolean }[];
  WANTED_AND_IMPOSSIBLE: readonly { want: string; why: string }[];
  FOLD_COLLISIONS: [string, string][];
  NEAR_MISSES: [string, string][];
  DISPLAY_PARITY: readonly { section: string; itemId: string; why: string }[];
};
let SRC: SrcShape | null = null;
let SRC_ERROR: unknown = null;
try {
  SRC = (await import('../../../ealch-admin/scripts/data/demonstratifs-corpus.ts')) as unknown as SrcShape;
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
 *  from the LEFT so a shape can see `c'est` and `qu'il`, and kept on the right
 *  so `l'` does not match a bare `l`. The HYPHEN stays on both sides, which is
 *  what makes `celui` inside `celui-ci` not a whole word. */
const esc = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/gu, '\\$&');
const hasWord = (hay: string, needle: string): boolean =>
  new RegExp(`(?<![\\p{L}\\p{N}-])${esc(needle)}(?![\\p{L}\\p{N}'’-])`, 'iu').test(hay);
const countOf = (hay: string, needle: string): number =>
  (hay.match(new RegExp(`(?<![\\p{L}\\p{N}-])${esc(needle)}(?![\\p{L}\\p{N}'’-])`, 'giu')) ?? []).length;

/** The five-check bare-pronoun shape, reimplemented here ONLY because it is the
 *  guard itself rather than app logic. Every clause is asserted against
 *  MUST_FIRE / MUST_NOT_FIRE below, which is what stops this copy drifting from
 *  the batch's. */
const WORD_TAIL_RX = /^\s+(?:d['’]|qu['’]|(?:de|des|du|que|qui|dont|où)(?![\p{L}'’]))/iu;
const STOPS_RX = /^\s*(?:[.!?…]|$)/u;
const FAMILY_ONLY_RX = /^[\s.,;:·/|]*(?:(?:celui|celle|ceux|celles)(?:-(?:ci|là))?[\s.,;:·/|]*(?:and|or|et)?[\s.,;:·/|]*)+$/iu;
const LIST_TAIL_RX = /(?:celui|celle|ceux|celles)(?:-(?:ci|là))?\s*(?:,|·|\/|\band\b|\bor\b|\bet\b)\s*$/iu;
const ENGLISH_MARKERS = ['the', 'and', 'is', 'are', 'was', 'you', 'your', 'this', 'that', 'these', 'those', 'what', 'why', 'which', 'not', 'with', 'of', 'for', 'it', 'one', 'ones', 'they', 'them', 'he', 'she', 'sentence', 'word', 'noun'];
const looksEnglish = (s: string) => ENGLISH_MARKERS.some((w) => hasWord(s, w));

/** PER CLAUSE, NOT PER STRING, AND THE MUTATION HARNESS FOUND IT. A card body
 *  is English prose with French quoted inside, so asking whether the WHOLE
 *  string looks English skipped exactly the place the error would appear. */
const clauses = (s: string): string[] => s.split(/(?<=[.!?…])\s+/u).filter(Boolean);
const bareInClause = (s: string): boolean => {
  if (FAMILY_ONLY_RX.test(s)) return false;
  if (looksEnglish(s)) return false;
  for (const p of REPLACES) {
    const rx = new RegExp(`(?<![\\p{L}\\p{N}-])${esc(p)}(?![\\p{L}\\p{N}'’-])`, 'giu');
    for (const m of s.matchAll(rx)) {
      const at = m.index ?? 0;
      const after = s.slice(at + p.length);
      if (WORD_TAIL_RX.test(after)) continue;
      if (!STOPS_RX.test(after)) continue;
      if (LIST_TAIL_RX.test(s.slice(0, at))) continue;
      return true;
    }
  }
  return false;
};
const hasBarePronoun = (s: string): boolean => {
  if (FAMILY_ONLY_RX.test(s)) return false;
  return clauses(s).some(bareInClause);
};

/** `overview.titleEn` is EXCLUDED from the jargon walk and asserted separately,
 *  because `content_units` requires it to equal this unit's English name and
 *  that name contains "Demonstrative". */
const overviewRest = (() => {
  const { titleEn, ...rest } = (L?.overview ?? {}) as Record<string, unknown>;
  return rest;
})();

const LEARNER_TEXT = [
  ...display(L?.sections), ...display(L?.terms), ...display(L?.sheets ?? []),
  String(L?.intro ?? ''), ...display(overviewRest), ...display(L?.drills),
  ...display(L?.acts), ...display(L?.errorTriggers),
].join('\n');

const RAW_TEXT = strs(L).join('\n');

const AUTHORED = items.filter((i) => i.theme === THEME
  && /^fr\.a2\.pronoms-essentiels\.\d{3}$/.test(i.id)
  && Number(i.id.split('.').pop()) >= ID_FIRST && Number(i.id.split('.').pop()) <= ID_LAST);

const quizQs = () => quizQuestions(sec('s22-quiz') as never) as Array<Record<string, unknown>>;

/* ═══════════════════════════════════════════════════════════════════════════
 *  0. THE LESSON EXISTS, AND NO WALK IS EMPTY
 * ═══════════════════════════════════════════════════════════════════════════ */

test('a2.33.l1 is in the seed, and the unit claims it', () => {
  ok(L, `${LESSON_ID} is not in seed.json`);
  const unit = (seed.units as Array<{ id: string; seq?: number | string; title?: string; sub?: string; canDo?: string; lessonIds?: string[]; prereqUnitIds?: string[]; themes?: unknown }>).find((u) => u.id === UNIT_ID);
  ok(unit, `${UNIT_ID} is not in seed.json`);
  ok((unit!.lessonIds ?? []).includes(LESSON_ID), `${UNIT_ID} does not claim ${LESSON_ID}`);
  ok((unit!.prereqUnitIds ?? []).includes(GENDER_UNIT), `${GENDER_UNIT} is the declared prereq and it is load-bearing`);
  strictEqual(String(unit!.seq), '33', 'a2.33 is seq 33 on the A2 trail. A2 runs to 35, not 32.');
  strictEqual(unit!.title, 'Demonstrative Adjectives and Pronouns', 'the database title is English');
  strictEqual(unit!.sub, 'Démonstratifs', 'the database sub is the French name');
});

test('the unit did not gain a themes array', () => {
  const unit = (seed.units as Array<{ id: string; themes?: unknown }>).find((u) => u.id === UNIT_ID)!;
  ok(unit.themes == null, `${UNIT_ID}.themes is ${JSON.stringify(unit.themes)}; creating a theme is product-visible in the flashcard hub`);
});

test('the source either imports or is genuinely absent', () => {
  ok(SRC || srcMerelyAbsent,
    `the corpus source threw rather than being absent, which silently skips about forty assertions: ${String(SRC_ERROR)}`);
});

test('neither string walk is empty, or every check below is a no-op', () => {
  ok(LEARNER_TEXT.length > 20000, `the learner-text walk produced ${LEARNER_TEXT.length} chars, which is too few to be real`);
  ok(display(L?.sections).length > 400, 'the section walk collapsed');
  strictEqual(AUTHORED.length, AUTHORED_ROWS, `${AUTHORED.length} authored rows reached the seed, expected ${AUTHORED_ROWS}`);
});

/* ═══════════════════════════════════════════════════════════════════════════
 *  1. THE OWNS, AND THE THREE REQUIRED LAYOUTS
 * ═══════════════════════════════════════════════════════════════════════════ */

test('REQUIRED LAYOUT 1: the four that point and the four that replace, in ONE section, in TWO rows', () => {
  const s = sec('s03-both') as { rows?: Array<{ cells: string[] }>; cols?: string[] } | undefined;
  ok(s, 's03-both is missing, and it is required layout 1');
  const rows = s!.rows ?? [];
  strictEqual(rows.length, 2, 'two rows, one per job');
  const [pointRow, replaceRow] = rows.map((r) => r.cells.join(' '));
  for (const f of POINTS) ok(hasWord(pointRow, f), `row 0 does not carry "${f}"`);
  for (const f of REPLACES) ok(hasWord(replaceRow, f), `row 1 does not carry "${f}"`);
});

test('REQUIRED LAYOUT 1: the two rows are not the same row twice', () => {
  const rows = ((sec('s03-both') as { rows?: Array<{ cells: string[] }> }).rows ?? []).map((r) => r.cells.join(' '));
  for (const f of REPLACES) ok(!hasWord(rows[0], f), `the pointing row carries "${f}", which replaces`);
  for (const f of POINTS) ok(!hasWord(rows[1], f), `the replacing row carries "${f}", which points`);
});

test('REQUIRED LAYOUT 1: three columns, because four cut off on a Pixel 6', () => {
  const cols = (sec('s03-both') as { cols?: string[] }).cols ?? [];
  ok(cols.length <= 3, `${cols.length} columns; TapTableView gives each flex:1 inside a padded card and four leaves about eight characters a line`);
});

test('REQUIRED LAYOUT 2: ce livre beside celui-ci, four cells, the noun named then not', () => {
  const s = sec('s04-grid') as { cards?: Array<{ fr?: string }> } | undefined;
  ok(s, 's04-grid is missing, and it is required layout 2');
  const cards = s!.cards ?? [];
  strictEqual(cards.length, 4, 'one card per cell');
  ok(String(cards[0].fr).includes('Je prends ce livre.'), 'card 0 does not carry the noun named');
  ok(String(cards[0].fr).includes('Je prends celui-ci.'), 'card 0 does not carry the same noun unnamed');
});

test('REQUIRED LAYOUT 2: the noun really does disappear from the second half', () => {
  const cards = ((sec('s04-grid') as { cards?: Array<{ fr?: string }> }).cards ?? []);
  for (const [i, card] of cards.entries()) {
    const [named, unnamed] = String(card.fr).split(' / ');
    ok(named && unnamed, `card ${i} is not two sentences separated by " / "`);
    const noun = named.replace(/^Je prends (ce|cet|cette|ces)\s+/, '').replace(/\.$/, '');
    notStrictEqual(noun, named, `card ${i} does not open on a pointing form plus a noun`);
    ok(!unnamed.includes(noun), `card ${i} names "${noun}" in the half that is supposed not to`);
  }
});

test('REQUIRED LAYOUT 3: cet homme beside ce livre, adjacent, in that order', () => {
  const s = sec('s06-vowel') as { lines?: Array<{ fr: string }>; hideLines?: boolean } | undefined;
  ok(s, 's06-vowel is missing, and it is required layout 3');
  const lines = (s!.lines ?? []).map((l) => l.fr);
  const c = lines.indexOf('Regarde ce livre.');
  const v = lines.indexOf('Regarde cet homme.');
  ok(c >= 0, 'the consonant half is missing');
  strictEqual(v, c + 1, 'the two must be adjacent and in that order, because they are one take');
});

test('REQUIRED LAYOUT 3: hideLines, or it is a reading exercise with a play button', () => {
  const s = sec('s06-vowel') as { hideLines?: boolean; questions?: Array<{ q: string }>; lines?: Array<{ fr: string; en: string }> };
  ok(s.hideLines, 'ListeningView prints every line beside its PlayDot without it');
  // and no question reprints its own line, or hideLines buys nothing
  for (const q of s.questions ?? []) {
    for (const l of s.lines ?? []) ok(!q.q.includes(l.fr), `"${q.q}" reprints the line it is asking about`);
  }
});

test('REQUIRED LAYOUT 3: the one-take constraint is written into desc, where it survives the clip', () => {
  const rec = ((sec('s06-vowel') as { audio?: { recordingId?: string } }).audio ?? {}).recordingId;
  ok(rec, 'no recordingId, so the constraint has nowhere to live');
  const spec = ((L?.audio as { recorded?: Array<{ id: string; desc: string }> })?.recorded ?? []).find((r) => r.id === rec);
  ok(spec, `${rec} has no entry in Lesson.audio.recorded`);
  for (const phrase of ['ONE TAKE', 'ONE VOICE', 'ADJACENTLY']) {
    ok(spec!.desc.includes(phrase), `${rec} desc does not say ${phrase}`);
  }
});

test('the silent h is in the vowel frame, because it is the proof the rule is about sound', () => {
  const lines = ((sec('s06-vowel') as { lines?: Array<{ fr: string }> }).lines ?? []).map((l) => l.fr);
  ok(lines.includes('Regarde cet hôtel.'), 'cet hôtel is the row that shows the rule listens rather than reads');
});

/* ═══════════════════════════════════════════════════════════════════════════
 *  2. THE QUOTATIONS. A PARAPHRASE GOES RED.
 * ═══════════════════════════════════════════════════════════════════════════ */

test("a2.06's article-against-pronoun wording is quoted VERBATIM", () => {
  ok(LEARNER_TEXT.includes(A206_SHAPE),
    `${OBJECT_UNIT}'s sentence is not on any learner surface verbatim. A paraphrase is not a quotation.`);
});

test('a2.06 is named by unit id beside its own sentence', () => {
  const card = display(sec('s04-grid')).join('\n');
  ok(card.includes(A206_SHAPE), 'the quotation is not on the card that names the unit');
  ok(hasWord(card, OBJECT_UNIT), `${OBJECT_UNIT} is quoted and not named`);
});

test("a2.06's sentence still ends on « a verb », which is why this lesson adds one", () => {
  ok(A206_SHAPE.trimEnd().endsWith('a pronoun leans on a verb.'),
    'if a2.06 no longer says that, the extension below is quoting a sentence it no longer needs to correct');
  ok(LEARNER_TEXT.includes(A233_SHAPE),
    "a2.06's line is quoted and this lesson's extension is not, which leaves a rule on the card that is false of these pronouns");
  ok(LEARNER_TEXT.indexOf(A233_SHAPE) > LEARNER_TEXT.indexOf(A206_SHAPE),
    'the extension appears before the quotation it extends');
});

test("a2.02's recurring shape is quoted and attributed (doctrine §B.7)", () => {
  ok(LEARNER_TEXT.includes(WHAT_FOLLOWS), `« ${WHAT_FOLLOWS} » is not quoted, and this is the shape's next turn`);
  ok(hasWord(LEARNER_TEXT, SHAPE_UNIT), `${SHAPE_UNIT} owns that line and is not named`);
});

test('a2.16 is named BY UNIT ID as the reason for cet, with sons.07 beside it', () => {
  const why = display(sec('s07-why')).join('\n');
  ok(why.length > 200, 's07-why is missing or empty');
  ok(hasWord(why, VOWEL_UNIT), `${VOWEL_UNIT} is not named by unit id as the reason for cet`);
  ok(hasWord(why, ELISION_UNIT), `${ELISION_UNIT} is not named beside it, and it is the same pressure a third time`);
  ok(why.includes('cet homme'), 'the card naming a2.16 does not show the form it is explaining');
});

test("sons.07's and a2.16's reframes are quoted verbatim, not paraphrased", () => {
  const why = display(sec('s07-why')).join('\n');
  ok(why.includes(ELISION_REFRAME), `${ELISION_UNIT}'s reframe is not verbatim`);
  ok(why.includes(A216_REFRAME), `${VOWEL_UNIT}'s reframe is not verbatim`);
});

test('the unit that owns each quotation is named ON THE SAME CARD', () => {
  // PER CARD, NOT PER SECTION, AND THE MUTATION HARNESS ASKED FOR IT. A
  // section-wide check passes while the id sits on any one of three cards, so
  // blanking it from the card that carries the quotation left the guard green.
  const cards = ((sec('s07-why') as { cards?: Array<Record<string, unknown>> }).cards ?? []);
  for (const [quote, owner] of [[A216_REFRAME, VOWEL_UNIT], [ELISION_REFRAME, ELISION_UNIT]] as const) {
    const card = cards.find((c) => strs(c).some((x) => x.includes(quote)));
    ok(card, `no card in s07-why quotes ${owner}'s reframe`);
    ok(hasWord(strs(card).join('\n'), owner), `the card quoting ${owner}'s reframe does not name ${owner}`);
  }
});

test("a2.16's three adjectives are cited, never taught", () => {
  strictEqual(countOf(LEARNER_TEXT, 'bel'), 1, 'bel appears more than once, which is teaching a2.16 rather than citing it');
  for (const f of ['nouvel', 'vieil']) ok(!hasWord(LEARNER_TEXT, f), `${f} belongs to ${VOWEL_UNIT}`);
});

/* ═══════════════════════════════════════════════════════════════════════════
 *  3. TRAP 1 — cet AND cette ARE ONE SOUND
 * ═══════════════════════════════════════════════════════════════════════════ */

test('HOMOPHONE_FORMS contains cet/cette, and the corpus agrees they are one sound', () => {
  if (!SRC) return;
  ok(SRC.HOMOPHONE_FORMS.some((g) => g.includes('cet') && g.includes('cette')),
    'HOMOPHONE_FORMS does not hold the pair the whole lesson turns on');
  strictEqual(byId.get('fr.sons.mots-essentiels.090')?.respell, byId.get('fr.sons.mots-essentiels.091')?.respell,
    'cet and cette no longer ship as one respelling, so trap 1 has changed shape');
});

test('NO EAR QUESTION offers two members of one homophone group', () => {
  if (!SRC) return;
  for (const q of quizQs()) {
    const heard = q.format === 'listenChoose' || !!q.say;
    if (!heard) continue;
    const opts = (q.opts as string[] | undefined) ?? [];
    for (const group of SRC.HOMOPHONE_FORMS) {
      const present = group.filter((g) => opts.some((o) => hasWord(o, g)));
      ok(present.length <= 1, `the ear question "${q.q}" offers ${present.join(' and ')}, which are one sound`);
    }
  }
});

test('a WRITTEN option pair differing only by a homophone is allowed once, named, and only on an mcq', () => {
  if (!SRC) return;
  const used = new Set<string>();
  for (const q of quizQs()) {
    const opts = (q.opts as string[] | undefined) ?? [];
    const allowance = SRC.HOMOPHONE_WRITTEN_ALLOWED.find((a) => String(q.q).includes(a.stem));
    for (let i = 0; i < opts.length; i++) {
      for (let j = i + 1; j < opts.length; j++) {
        for (const group of SRC.HOMOPHONE_FORMS) {
          for (const x of group) for (const y of group) {
            if (x === y || opts[i] === opts[j] || opts[i].replace(x, y) !== opts[j]) continue;
            ok(allowance, `"${q.q}" offers "${opts[i]}" against "${opts[j]}" and is not on the allowance list`);
            strictEqual(q.format, 'mcq', 'only mcq reads its options off the page');
            used.add(allowance!.stem);
          }
        }
      }
    }
  }
  for (const a of SRC.HOMOPHONE_WRITTEN_ALLOWED) ok(used.has(a.stem), `the "${a.stem}" allowance is unused, so it is a hole left open`);
});

test('the cet/cette distinction is tested by typeIn, which is the one surface that can', () => {
  const typed = quizQs().filter((q) => q.format === 'typeIn');
  const cet = typed.filter((q) => /\bcet\b/.test(String(q.answer)));
  const cette = typed.filter((q) => /\bcette\b/.test(String(q.answer)));
  ok(cet.length >= 2, `${cet.length} typed questions key on cet`);
  ok(cette.length >= 2, `${cette.length} typed questions key on cette`);
  // and fold() really does keep them apart, which is the whole reason
  notStrictEqual(fold('Regarde cet homme'), fold('Regarde cette homme'), 'fold() no longer keeps the final -e');
});

/* ═══════════════════════════════════════════════════════════════════════════
 *  4. TRAP 3 — THE BARE PRONOUN
 * ═══════════════════════════════════════════════════════════════════════════ */

test('the bare-pronoun shape fires on every sentence it must', () => {
  if (!SRC) return;
  for (const s of SRC.MUST_FIRE.bare) ok(hasBarePronoun(s), `the guard does not fire on "${s}"`);
});

test('the bare-pronoun shape fires on NONE of the fourteen it must not', () => {
  if (!SRC) return;
  ok(SRC.MUST_NOT_FIRE.bare.length >= 14, 'the MUST_NOT_FIRE list has been trimmed; every entry is a real string that broke a version of the guard');
  for (const s of SRC.MUST_NOT_FIRE.bare) ok(!hasBarePronoun(s), `the guard fires on "${s}", which is legal`);
});

test('the bare-pronoun shape sees a French clause inside an English card body', () => {
  ok(hasBarePronoun('Je prends celui. This one, the one nearer you.'),
    'a whole-string English test skips exactly the place the error would appear, which is what the mutation harness found');
  ok(!hasBarePronoun('Then he touches celle de sa femme. Why celle and not celui?'),
    'and it still leaves an English sentence MENTIONING the word alone');
});

test('no authored row carries a bare pronoun', () => {
  for (const r of AUTHORED) ok(!hasBarePronoun(r.fr), `${r.id} "${r.fr}" ends on a bare pronoun, which is not French`);
});

test('no section outside the four marked ones shows the bare form', () => {
  for (const s of L?.sections ?? []) {
    const sid = String(s.id ?? '');
    if ((BARE_ALLOWED_IN as readonly string[]).includes(sid)) continue;
    for (const t of strs(s)) ok(!hasBarePronoun(t), `${sid} shows a bare pronoun in "${t.slice(0, 70)}"`);
  }
});

test('no term, sheet, drill, intro or overview shows the bare form', () => {
  const outside = [...strs(L?.terms), ...strs(L?.sheets ?? []), ...strs(L?.drills ?? []), String(L?.intro ?? ''), ...strs(L?.overview ?? {})];
  for (const t of outside) ok(!hasBarePronoun(t), `a bare pronoun reaches a learner in "${t.slice(0, 70)}"`);
});

test('each of the four marked sections really does show it, or the allowance is dead', () => {
  for (const sid of BARE_ALLOWED_IN) {
    const s = sec(sid);
    ok(s, `${sid} is on the allow list and does not exist`);
    ok(strs(s).some(hasBarePronoun), `${sid} is allowed to show the bare form and does not`);
  }
});

test('the trapDrill is the one the prompt asks for, and it walks rule > cards > audio > drill', () => {
  const t = sec('s15-trap') as { swipe?: boolean; size?: string; steps?: Array<{ kind: string; gate?: boolean }>; audio?: unknown; rule?: unknown; drill?: unknown[] } | undefined;
  ok(t, 's15-trap is missing, and trap 3 is meant to be the trapDrill');
  ok(t!.swipe, 'a trapDrill without swipe loses its deck');
  ok(!t!.size, 'size comes OFF a stepped trapDrill; the stacked shape hides the gate, the audio and the sub-mission number');
  deepStrictEqual((t!.steps ?? []).map((s) => s.kind), ['rule', 'cards', 'audio', 'drill'], 'lesson-contract requires exactly this walk');
  ok((t!.steps ?? []).at(-1)?.gate, 'the drill step must be gated');
  ok(t!.audio, 'the audio step needs an audio spec');
  ok((t!.drill ?? []).length >= 6, 'the drill is thin for a trap the whole scene opened on');
});

test('the four legal tails are each shown by a row the lesson carries', () => {
  if (!SRC) return;
  strictEqual(SRC.TAILS.length, 4, 'four things may follow the pronoun');
  for (const t of SRC.TAILS) {
    ok((L?.itemIds ?? []).includes(t.example), `the "${t.tail}" tail names ${t.example}, which the lesson does not carry`);
    ok(byId.has(t.example), `${t.example} did not reach the seed`);
  }
});

test('two tails are authored and two are imported, which is the measured shape of the corpus', () => {
  if (!SRC) return;
  strictEqual(SRC.TAILS.filter((t) => t.authored).length, 2);
  strictEqual(SRC.TAILS.filter((t) => !t.authored).length, 2);
});

/* ═══════════════════════════════════════════════════════════════════════════
 *  5. TRAP 4 — c'est AND ce sont
 * ═══════════════════════════════════════════════════════════════════════════ */

test("c'est and ce sont are NAMED, in exactly one place", () => {
  const roundup = display(sec(IMPERSONAL_ALLOWED_IN)).join('\n');
  for (const f of IMPERSONAL_FORMS) ok(hasWord(roundup, f), `trap 4 requires "${f}" to be named and ${IMPERSONAL_ALLOWED_IN} does not name it`);
});

test("c'est and ce sont are TAUGHT NOWHERE, on any surface", () => {
  for (const s of L?.sections ?? []) {
    const sid = String(s.id ?? '');
    if (sid === IMPERSONAL_ALLOWED_IN) continue;
    for (const t of strs(s)) {
      for (const f of IMPERSONAL_FORMS) ok(!hasWord(t, f), `${sid} carries "${f}" in "${t.slice(0, 70)}"`);
    }
  }
});

test('no authored or imported row this lesson names carries the impersonal ce', () => {
  for (const id of L?.itemIds ?? []) {
    const r = byId.get(id);
    if (!r) continue;
    for (const f of IMPERSONAL_FORMS) ok(!hasWord(r.fr, f), `${id} "${r.fr}" carries "${f}"`);
  }
});

test('the two b1 rows carrying the impersonal ce were deliberately left behind', () => {
  if (!SRC) return;
  for (const b of SRC.B1_NOT_IMPORTED) {
    ok(!(L?.itemIds ?? []).includes(b.id), `${b.id} is on the do-not-import list (${b.why}) and the lesson carries it`);
  }
  for (const id of B1_LEFT_BEHIND) ok(SRC.B1_NOT_IMPORTED.some((b) => b.id === id), `${id} is no longer on the do-not-import list`);
});

test('the impersonal guard does not fire on this lesson own material', () => {
  if (!SRC) return;
  for (const s of SRC.MUST_FIRE.impersonal) ok(IMPERSONAL_FORMS.some((f) => hasWord(s, f)), `the impersonal guard misses "${s}"`);
  for (const s of SRC.MUST_NOT_FIRE.impersonal) ok(!IMPERSONAL_FORMS.some((f) => hasWord(s, f)), `the impersonal guard fires on "${s}"`);
});

/* ═══════════════════════════════════════════════════════════════════════════
 *  6. THE BOUNDARIES
 * ═══════════════════════════════════════════════════════════════════════════ */

test('NO POSSESSIVE PRONOUN reaches any surface, including an alts line', () => {
  if (!SRC) return;
  for (const t of strs(L)) {
    for (const f of SRC.POSSESSIVE_FORMS) {
      ok(!t.toLowerCase().includes(f.toLowerCase()), `"${f}" belongs to ${POSSESSIVE_UNIT} and appears in "${t.slice(0, 70)}"`);
    }
  }
});

test('NO OBJECT PRONOUN reaches any surface', () => {
  if (!SRC) return;
  for (const t of strs(L)) {
    for (const f of SRC.OBJECT_FORMS) ok(!hasWord(t, f), `"${f}" belongs to a2.24 and appears in "${t.slice(0, 70)}"`);
  }
});

test('the object-pronoun list was narrowed to three, because me/te/se read English as French', () => {
  if (!SRC) return;
  deepStrictEqual([...SRC.OBJECT_FORMS], ['lui', 'leur', 'leurs'],
    'me, te and se cannot be told from English by any shape built out of French morphology');
  for (const s of SRC.MUST_FIRE.object) ok(SRC.OBJECT_FORMS.some((f) => hasWord(s, f)), `the object guard misses "${s}"`);
  for (const s of SRC.MUST_NOT_FIRE.object) ok(!SRC.OBJECT_FORMS.some((f) => hasWord(s, f)), `the object guard fires on "${s}", and half of that list is English`);
});

test('the possessive guard tells a possessive ADJECTIVE from a possessive pronoun', () => {
  if (!SRC) return;
  for (const s of SRC.MUST_FIRE.possessive) ok(SRC.POSSESSIVE_FORMS.some((f) => s.toLowerCase().includes(f.toLowerCase())), `misses "${s}"`);
  for (const s of SRC.MUST_NOT_FIRE.possessive) ok(!SRC.POSSESSIVE_FORMS.some((f) => s.toLowerCase().includes(f.toLowerCase())), `fires on "${s}"`);
});

test('lui is a substring of celui and the boundary handles it', () => {
  ok(!hasWord('Je prends celui-ci.', 'lui'), 'the boundary reads celui as containing a whole-word lui');
  ok(hasWord('Je lui donne ce livre.', 'lui'), 'the boundary cannot see a real lui');
});

test('every neighbouring unit this lesson leans on is named by id', () => {
  for (const u of [GENDER_UNIT, POSSESSIVE_UNIT, 'a2.24', 'a2.25', 'a1.04']) {
    ok(hasWord(LEARNER_TEXT, u), `${u} is a boundary this lesson leans on and is never named`);
  }
});

/* ═══════════════════════════════════════════════════════════════════════════
 *  7. THE CORPUS: IMPORTED, NOT RE-AUTHORED
 * ═══════════════════════════════════════════════════════════════════════════ */

test('all eight headwords are IMPORTED ids, asserted by id', () => {
  for (const id of HEADWORD_IDS) {
    ok((L?.itemIds ?? []).includes(id), `${id} is one of the eight headwords and the lesson does not carry it`);
    ok(byId.has(id), `${id} did not reach the seed, so its card would render empty`);
    ok(!AUTHORED.some((r) => r.id === id), `${id} is imported and authored at the same time`);
  }
});

test('not one of the eight forms is re-authored as a headword', () => {
  for (const f of [...POINTS, ...REPLACES]) {
    ok(!AUTHORED.some((r) => r.kind !== 'sentence' && r.fr === f),
      `"${f}" is re-authored and it already exists in mots-essentiels; the hub would serve one card twice`);
  }
});

test('the eight headwords are ungendered, respelled and deck-able', () => {
  for (const id of HEADWORD_IDS) {
    const r = byId.get(id)!;
    ok(!r.gender, `${id} "${r.fr}" is gendered, which is the shape that moves a1.03`);
    ok(r.respell, `${id} has no respelling and this lesson prints it`);
    ok((r.drills ?? []).includes('flashcard') && (r.drills ?? []).includes('voiceflash'), `${id} cannot be released or spoken`);
  }
});

test('the b1 pronoun block the prompt did not know about is imported', () => {
  for (const id of B1_CARDS) {
    ok((L?.itemIds ?? []).includes(id), `${id} is one of the four published -ci/-là cards and is not imported`);
    ok(byId.has(id), `${id} did not reach the seed`);
  }
  const b1Sentences = (L?.itemIds ?? []).filter((i) => /^fr\.b1\.pronoms-essentiels\./.test(i) && byId.get(i)?.kind === 'sentence');
  ok(b1Sentences.length >= 8, `${b1Sentences.length} b1 pronoun sentences imported; the prompt called this evidence "thin"`);
});

test('the four missing -ci/-là cells were authored and the four published ones were not', () => {
  if (!SRC) return;
  strictEqual(SRC.CI_LA_CELLS.length, 8, 'the -ci/-là paradigm is eight cells');
  for (const c of SRC.CI_LA_CELLS) {
    ok((L?.itemIds ?? []).includes(c.id), `the ${c.form} cell (${c.id}) is not carried`);
    const row = byId.get(c.id);
    ok(row, `${c.id} did not reach the seed`);
    const authored = AUTHORED.some((r) => r.id === c.id);
    strictEqual(authored, c.authored, `${c.form} is marked authored:${c.authored} and is actually ${authored ? 'authored' : 'imported'}`);
    if (authored) strictEqual(row!.fr, c.form, `${c.id} should read "${c.form}"`);
  }
  strictEqual(SRC.CI_LA_CELLS.filter((c) => c.authored).length, 4, 'four cells of the paradigm did not exist anywhere before this build');
});

test('the eight-cell grid reached the seed, cell by cell', () => {
  if (!SRC) return;
  strictEqual(SRC.GRID_CELLS.length, 8, 'four that point, four that replace');
  for (const c of SRC.GRID_CELLS) {
    const r = byId.get(c.id);
    ok(r, `the ${c.gender} ${c.number} ${c.job} cell (${c.id}) did not reach the seed`);
    ok(hasWord(r!.fr, c.form), `${c.id} reached the seed without "${c.form}"`);
  }
});

test('the both-jobs rows name the noun exactly once and then replace it', () => {
  if (!SRC) return;
  strictEqual(SRC.BOTH_CELLS.length, 4, 'one per cell');
  for (const c of SRC.BOTH_CELLS) {
    const r = byId.get(c.id);
    ok(r, `${c.id} did not reach the seed`);
    ok(hasWord(r!.fr, c.points), `${c.id} does not carry the pointing form "${c.points}"`);
    ok(hasWord(r!.fr, c.replaces), `${c.id} does not carry the replacing form "${c.replaces}"`);
    strictEqual(countOf(r!.fr, c.noun), 1, `${c.id} says "${c.noun}" more than once, and the whole claim is that it is said once`);
  }
});

test('a2.08 handed this unit fr.a2.comparaisons.069 by name, and it is imported', () => {
  ok((L?.itemIds ?? []).includes('fr.a2.comparaisons.069'), 'a2.08 reserved that row for this unit');
  ok(byId.has('fr.a2.comparaisons.069'), 'it did not reach the seed');
});

test('no authored row is gendered, so none can join a1.03 ending population', () => {
  for (const r of AUTHORED) ok(!r.gender, `${r.id} carries a gender`);
});

test('no gendered single word was carried into the seed by this lesson', () => {
  for (const id of L?.itemIds ?? []) {
    const r = byId.get(id);
    if (!r) continue;
    const bare = r.fr.replace(/^(le |la |les |l'|un |une |des )/, '');
    ok(!(r.gender && r.kind === 'word' && !bare.includes(' ')), `${id} "${r.fr}" is a gendered single word`);
  }
});

test('no duplicate fr inside the theme, computed the way flashhub computes it', () => {
  const norm = (s: string) => s.toLowerCase().replace(/^(le |la |les |l'|un |une |des )/, '').trim();
  const seen = new Map<string, string>();
  for (const i of items) {
    if (i.theme !== THEME || i.kind === 'sentence') continue;
    const k = norm(i.fr);
    const prior = seen.get(k);
    ok(!prior || prior === i.id, `"${i.fr}" is both ${prior} and ${i.id} inside ${THEME}`);
    seen.set(k, i.id);
  }
});

test('every authored respelling passes the real nasal checker', () => {
  for (const r of AUTHORED) ok(!hasPlainNasalFor(r.fr, r.respell ?? ''), `${r.id} "${r.respell}" closes a nasal with a plain n or m`);
});

test('the 14-word sentence budget holds', () => {
  for (const r of AUTHORED) {
    if (r.kind !== 'sentence') continue;
    ok(r.fr.split(/\s+/).length <= 14, `${r.id} runs past the budget`);
  }
});

/* ═══════════════════════════════════════════════════════════════════════════
 *  8. THE TWO RESPELL REPAIRS, AND THE ONE THAT WAS NOT MADE
 * ═══════════════════════════════════════════════════════════════════════════ */

test('the two b1 respellings were repaired and reached the seed', () => {
  if (!SRC) return;
  strictEqual(SRC.RESPELL_REPAIRS.length, 2, 'two repairs, and neither is a nasal');
  for (const rep of SRC.RESPELL_REPAIRS) {
    const r = byId.get(rep.id);
    ok(r, `${rep.id} is a repair row and did not reach the seed`);
    strictEqual(r!.respell, rep.to, `${rep.id} reads "${r!.respell}" in the seed and should read "${rep.to}"`);
  }
});

test('the repaired value matches the house value read off a published row', () => {
  for (const id of ['fr.b1.pronoms-essentiels.040', 'fr.b1.pronoms-essentiels.048']) {
    ok(String(byId.get(id)?.respell).startsWith('sehl'), `${id} does not use the house EH for the open e`);
  }
  strictEqual(byId.get('fr.sons.mots-essentiels.106')?.respell, 'SEHL', 'the published row the value was read off has moved');
  strictEqual(byId.get('fr.sons.mots-essentiels.108')?.respell, 'SEHL', 'the published row the value was read off has moved');
});

test('the nasal checker is SILENT on all three states of both repairs, asserted as a negative', () => {
  if (!SRC) return;
  for (const rep of SRC.RESPELL_REPAIRS) {
    ok(!hasPlainNasalFor(rep.fr, rep.from), `the checker now flags "${rep.from}", so blind:true is stale`);
    ok(!hasPlainNasalFor(rep.fr, rep.half), `the checker now flags the half-repair "${rep.half}"`);
    ok(!hasPlainNasalFor(rep.fr, rep.to), `the checker now flags the repaired "${rep.to}"`);
    strictEqual(rep.blind, true, 'both repairs are invisible to the checker, and for a reason that is not a nasal');
    strictEqual(rep.half, rep.from, 'there is no minimal repair when there is no report to act on');
  }
});

test('ce and ceux still share a respelling, and that is the house scheme rather than a defect', () => {
  strictEqual(byId.get('fr.sons.mots-essentiels.089')?.respell, 'SUH', 'ce');
  strictEqual(byId.get('fr.sons.mots-essentiels.107')?.respell, 'SUH', 'ceux');
  // and the two are never offered against each other by ear, because the scheme
  // merges them and one takes a noun while the other refuses one
  for (const q of quizQs()) {
    if (q.format !== 'listenChoose') continue;
    const opts = (q.opts as string[] | undefined) ?? [];
    ok(!(opts.some((o) => hasWord(o, 'ce')) && opts.some((o) => hasWord(o, 'ceux'))), `"${q.q}" offers ce against ceux`);
  }
});

/* ═══════════════════════════════════════════════════════════════════════════
 *  9. THE GENERALISATION
 * ═══════════════════════════════════════════════════════════════════════════ */

test('the control page hands over a noun the lesson never showed, and keys on cet', () => {
  if (!SRC) return;
  const s = sec('s08-unseen') as { groups?: Array<{ items?: unknown[]; check?: { opts?: string[]; correct?: number } }> };
  ok(s, 's08-unseen is missing, and doctrine §B.1 is why it exists');
  const control = (s.groups ?? []).find((g) => (g.items ?? []).length === 0);
  ok(control, 'no control page, which is the house pattern for a generalisation check');
  const opts = control!.check?.opts ?? [];
  strictEqual(opts[control!.check?.correct ?? -1], SRC.UNSEEN.answer, 'the control check does not key on the unseen form');
});

test('the unseen noun is masculine, vowel-initial, and forces cet rather than ce or cette', () => {
  if (!SRC) return;
  strictEqual(SRC.UNSEEN.gender, 'm');
  ok(/^[aeiouéèêàâôîû]/i.test(SRC.UNSEEN.noun), `${SRC.UNSEEN.noun} does not start with a vowel, so it does not force cet`);
  ok(SRC.UNSEEN.answer.startsWith('cet '), 'the answer is not the pre-vocalic masculine');
});

test('the unseen noun appears in no row this lesson carries', () => {
  if (!SRC) return;
  for (const id of L?.itemIds ?? []) {
    const r = byId.get(id);
    if (!r) continue;
    ok(!hasWord(`${r.fr} ${r.en ?? ''}`, SRC.UNSEEN.noun), `${id} "${r.fr}" carries "${SRC.UNSEEN.noun}", which must stay unseen`);
  }
});

test('the unseen noun appears in exactly the two sections that ask for it', () => {
  if (!SRC) return;
  const asks = (L?.sections ?? []).filter((s) => strs(s).some((t) => hasWord(t, SRC!.UNSEEN.noun))).map((s) => String(s.id));
  deepStrictEqual(asks.sort(), ['s08-unseen', 's22-quiz'], `"${SRC.UNSEEN.noun}" appears in ${asks.join(', ') || 'no section'}`);
});

test('the rejected unseen candidates each name the published row that disqualified them', () => {
  if (!SRC) return;
  ok(SRC.UNSEEN_REJECTED.length >= 6, 'the search was thinner than the report claims');
  for (const r of SRC.UNSEEN_REJECTED) ok(r.why.length > 20, `${r.noun} was rejected without a reason`);
});

/* ═══════════════════════════════════════════════════════════════════════════
 *  10. WHAT fold() CAN AND CANNOT SEE
 * ═══════════════════════════════════════════════════════════════════════════ */

test('fold() strips the hyphen, so no typed surface can test celui-ci against celui ci', () => {
  strictEqual(fold('celui-ci'), fold('celui ci'));
});

test('fold() strips the accent, so celle-là can only be an mcq', () => {
  strictEqual(fold('celle-là'), fold('celle-la'));
  for (const q of quizQs()) {
    if (q.format === 'mcq' || q.format === 'listenChoose') continue;
    const answer = String(q.answer ?? '').replace(/\.$/, '');
    ok(!/celle-l[àa]\s*$/i.test(answer), `"${q.q}" is typed and keys on celle-là, whose accent fold() strips`);
  }
});

test('fold() CAN see the tail, which is what makes trap 3 testable in writing', () => {
  notStrictEqual(fold('Je veux celui'), fold('Je veux celui-ci'), 'if these ever fold together, every errorSpot in round 3 is dead');
});

test('the pairs the build claims survive fold() still do', () => {
  if (!SRC) return;
  for (const [a, b] of SRC.NEAR_MISSES) notStrictEqual(fold(a), fold(b), `NEAR_MISSES claims "${a}" and "${b}" survive fold()`);
});

test('the pairs the build claims collide under fold() still do', () => {
  if (!SRC) return;
  for (const [a, b] of SRC.FOLD_COLLISIONS) strictEqual(fold(a), fold(b), `FOLD_COLLISIONS claims "${a}" and "${b}" collide`);
});

test('the questions this build wanted and could not write are recorded with reasons', () => {
  if (!SRC) return;
  ok(SRC.WANTED_AND_IMPOSSIBLE.length >= 4, 'a lesson this badly served by the ear should have found more than that');
  for (const w of SRC.WANTED_AND_IMPOSSIBLE) ok(w.why.length > 30, `"${w.want}" has no reason attached`);
});

/* ═══════════════════════════════════════════════════════════════════════════
 *  11. THE QUIZ
 * ═══════════════════════════════════════════════════════════════════════════ */

test('one quiz, thirty questions', () => {
  strictEqual((L?.sections ?? []).filter((s) => s.type === 'quiz').length, 1, 'a second quiz section is silently never rendered');
  strictEqual(quizQs().length, QUESTIONS, 'the measured A2 house shape is 30');
});

test('the format mix is typeIn-weighted, which the audibility forced', () => {
  const mix: Record<string, number> = {};
  for (const q of quizQs()) mix[String(q.format)] = (mix[String(q.format)] ?? 0) + 1;
  ok((mix.mcq ?? 0) <= QUESTIONS / 2, `${mix.mcq}/${QUESTIONS} mcq, and at most half may be`);
  ok((mix.typeIn ?? 0) > (mix.mcq ?? 0), 'A2 assesses in writing, and almost nothing in this lesson is audible');
  ok((mix.errorSpot ?? 0) >= 4, 'the bare form is the error learners produce and errorSpot is where it is caught');
  ok((mix.listenChoose ?? 0) >= 2, 'ce against ces is the one audible contrast and the prompt asks for two items on it');
});

test('every question has a why and a ref that resolves inside this lesson', () => {
  const ids = new Set((L?.sections ?? []).map((s) => String(s.id)));
  for (const q of quizQs()) {
    ok(q.why, `"${q.q}" has no why`);
    ok(ids.has(String(q.ref)), `"${q.q}" refs "${q.ref}", which is not a section in this lesson`);
  }
});

test('every free-text question accepts the answer it displays, through the real fold()', () => {
  for (const q of quizQs()) {
    if (q.format !== 'typeIn' && q.format !== 'errorSpot') continue;
    const accept = (q.accept as string[] | undefined) ?? [];
    ok(accept.length, `"${q.q}" is free text and has no accept list`);
    ok(accept.some((a) => fold(a) === fold(String(q.answer))), `"${q.q}" displays "${q.answer}" and does not accept it`);
  }
});

test('each round names targets whose FIRST resolving one has a live drill', () => {
  const drills = new Set(((L?.drills ?? []) as Array<{ id: string }>).map((d) => d.id));
  const triggers = new Map(((L?.errorTriggers ?? []) as Array<{ id: string; drill?: string }>).map((t) => [t.id, t.drill]));
  const fired = new Set<string>();
  for (const r of ((sec('s22-quiz') as { rounds?: Array<{ id: string; targets?: string[] }> }).rounds ?? [])) {
    const first = (r.targets ?? []).find((t) => triggers.has(t));
    ok(first, `round ${r.id} names no target that resolves`);
    const d = triggers.get(first!);
    ok(d && drills.has(d), `round ${r.id} resolves to ${first}, whose drill ${d} does not exist`);
    ok(!fired.has(d!), `${d} is the drill of two rounds; drillForRound fires the first and stops`);
    fired.add(d!);
  }
  strictEqual(fired.size, drills.size, 'a drill nobody fires is dead content');
});

/* ═══════════════════════════════════════════════════════════════════════════
 *  12. THE SHAPE, THE SPINE AND THE ACTS
 * ═══════════════════════════════════════════════════════════════════════════ */

test('24 missions, which is the measured A2 house shape', () => {
  strictEqual((L?.sections ?? []).length, MISSIONS);
});

test('the spine is in order and every act names sections that exist', () => {
  const order = (L?.sections ?? []).map((s) => String(s.id));
  const acts = (L?.acts ?? []) as Array<{ id: string; sections: string[] }>;
  strictEqual(acts.length, 6, 'six acts');
  deepStrictEqual(acts.flatMap((a) => a.sections), order, 'the acts do not walk the sections in order, or one section is in two acts');
});

test('the Owns outweighs the scene and the trap (doctrine §B.5)', () => {
  const acts = (L?.acts ?? []) as Array<{ id: string; sections: string[] }>;
  const of = (id: string) => (acts.find((a) => a.id === id)?.sections ?? []).length;
  const owns = of('act2') + of('act3');
  const rest = of('act1') + of('act4');
  ok(owns > rest, `the Owns is ${owns} missions and the scene plus the trap is ${rest}`);
  strictEqual(owns, 11, 'the two jobs are eleven missions');
});

test('the reframe is carried verbatim, the exact number of times', () => {
  strictEqual(L?.reframe, REFRAME, 'the reframe has been reworded');
  strictEqual(strs(L).filter((t) => t.includes(REFRAME)).length, REFRAME_COUNT,
    'the reframe count has moved; it is 24 section says plus Lesson.reframe');
});

test('the rejected reframes are recorded with reasons', () => {
  if (!SRC) return;
  ok(SRC.REFRAME_REJECTED.length >= 3, 'a reframe chosen without alternatives was not chosen');
  for (const r of SRC.REFRAME_REJECTED) {
    ok(r.why.length > 30, `"${r.text}" was rejected without a reason`);
    notStrictEqual(r.text, REFRAME, 'a rejected candidate is the one that shipped');
  }
});

test('the lesson does not carry the three fields that draw nothing', () => {
  for (const f of ['teaches', 'canDo', 'track']) ok(!(f in (L ?? {})), `Lesson.${f} draws nothing and a2.07 shipped all three`);
});

test('the audio block carries none of the six fields no renderer reads', () => {
  const a = (L?.audio ?? {}) as Record<string, unknown>;
  for (const f of ['modelPlayback', 'wrongThenRight', 'perSentenceReplay', 'scoreOn', 'autoplay', 'maxPlays']) {
    ok(!(f in a), `Lesson.audio.${f} validates, publishes and is read by nothing`);
  }
  ok('defaultLang' in a, 'LessonAudio takes defaultLang, not lang');
});

test('one tapTable in the flow and no table anywhere in sections', () => {
  const types = (L?.sections ?? []).map((s) => s.type);
  strictEqual(types.filter((t) => t === 'tapTable').length, 1, 'the fifth grid is where the learner closes the app');
  strictEqual(types.filter((t) => t === 'table').length, 0, 'a table at layer core is refused by validateDensity and a device check cannot find it');
});

test('the reference sheet holds the one table, and no cheatSheet', () => {
  const sheets = (L?.sheets ?? []) as Array<{ id: string; sections: Array<{ type: string; cols?: string[] }> }>;
  strictEqual(sheets.length, 1);
  const inner = sheets[0].sections.map((s) => s.type);
  ok(inner.includes('table'), 'the sheet is where a table can live');
  ok(!inner.includes('cheatSheet'), 'a cheatSheet inside a reference sheet draws its title and nothing else');
  const table = sheets[0].sections.find((s) => s.type === 'table');
  ok((table?.cols ?? []).length <= 3, 'a fourth column is cut off at the screen edge with no affordance saying so');
});

test('commonErrors carries swipe, or it draws a blank screen', () => {
  const s = sec('s16-errors') as { swipe?: boolean; size?: string };
  ok(s.swipe, 'MissionSection branches on commonErrors with swipe:true only');
  strictEqual(s.size, 'lg', 'one error per screen');
});

test('no section declares more than three term chips', () => {
  for (const s of L?.sections ?? []) {
    const t = (s as { terms?: string[] }).terms ?? [];
    ok(t.length <= 3, `${s.id} declares ${t.length} term chips and the renderer shows three`);
  }
});

test('every declared term is surfaced by at least one section', () => {
  const declared = Object.keys((L?.terms ?? {}) as Record<string, unknown>);
  const used = new Set((L?.sections ?? []).flatMap((s) => (s as { terms?: string[] }).terms ?? []));
  for (const k of declared) ok(used.has(k), `the term "${k}" is a definition nobody can reach`);
  for (const k of used) ok(declared.includes(k), `a section names the term "${k}", which is not declared`);
});

/* ═══════════════════════════════════════════════════════════════════════════
 *  13. REACHABILITY AND THE DICTÉE
 * ═══════════════════════════════════════════════════════════════════════════ */

const collectIds = (v: unknown, out: string[] = []): string[] => {
  if (typeof v === 'string') { if (isId(v)) out.push(v); return out; }
  if (Array.isArray(v)) { v.forEach((x) => collectIds(x, out)); return out; }
  if (v && typeof v === 'object') { Object.values(v).forEach((x) => collectIds(x, out)); return out; }
  return out;
};

test('every declared itemId resolves in the seed', () => {
  for (const id of L?.itemIds ?? []) ok(byId.has(id), `${id} is declared and is not in the seed, so its card renders empty`);
});

test('every declared itemId is on a screen: released by a tranche or named by something', () => {
  const released = new Set(((L?.deckTranche ?? []) as string[][]).flat());
  const named = new Set([
    ...collectIds(L?.sections), ...collectIds(L?.drills ?? []), ...collectIds(L?.terms ?? {}),
  ]);
  for (const id of L?.itemIds ?? []) {
    ok(released.has(id) || named.has(id), `${id} is neither released nor named, so a learner never sees it`);
  }
});

test('no tranche releases a row no deck can serve', () => {
  const released = new Set(((L?.deckTranche ?? []) as string[][]).flat());
  for (const id of released) {
    const r = byId.get(id);
    ok(r, `${id} is released and is not in the seed`);
    ok((r!.drills ?? []).includes('flashcard'), `${id} is released by a tranche and has no flashcard, so the line draws nothing`);
  }
});

test('the twelve imported adjective rows are named rather than released, because none can be released', () => {
  const released = new Set(((L?.deckTranche ?? []) as string[][]).flat());
  const named = new Set([...collectIds(L?.sections), ...collectIds(L?.drills ?? []), ...collectIds(L?.terms ?? {})]);
  const adjectiveRows = (L?.itemIds ?? []).filter((id) => {
    const r = byId.get(id);
    return r && r.theme !== THEME && !(r.drills ?? []).includes('flashcard');
  });
  ok(adjectiveRows.length >= 10, `${adjectiveRows.length} rows in the no-deck population, which is thinner than measured`);
  for (const id of adjectiveRows) {
    ok(!released.has(id), `${id} cannot be served by a deck and a tranche releases it`);
    ok(named.has(id), `${id} can never be released and nothing names it, so it is on no screen at all`);
  }
});

test('practice speaks only rows that carry voiceflash', () => {
  const p = sec('s20-speak') as { itemIds?: string[]; skill?: string };
  strictEqual(p.skill, 'speak');
  ok((p.itemIds ?? []).length > 20, 'practice is where the eight forms get produced');
  for (const id of p.itemIds ?? []) {
    ok((byId.get(id)?.drills ?? []).includes('voiceflash'), `practice speaks ${id} and it has no voiceflash, so the card is silent`);
  }
});

test("practice does not use skill:'write', which draws no writing surface", () => {
  for (const s of L?.sections ?? []) {
    if (s.type !== 'practice') continue;
    notStrictEqual((s as { skill?: string }).skill, 'write', 'skill write renders nothing a learner can produce into');
  }
});

test('every dictée target resolves to LETTERS mode through the real dicteeMode', () => {
  const d = sec('s18-dictee') as { itemIds?: string[] };
  ok((d.itemIds ?? []).length >= 5, 'thin for a lesson whose whole distinction is written');
  for (const id of d.itemIds ?? []) {
    const r = byId.get(id);
    ok(r, `${id} is a dictée target and is not in the seed`);
    strictEqual(dicteeMode(r!.fr), 'letters', `${id} "${r!.fr}" resolves to word mode, which hands every real word over pre-spelled`);
    ok((r!.drills ?? []).includes('dictation'), `${id} is a dictée target and has no dictation drill`);
  }
});

test('the dictée tests both halves of the Owns and both halves of trap 1', () => {
  const targets = ((sec('s18-dictee') as { itemIds?: string[] }).itemIds ?? []).map((id) => byId.get(id)?.fr ?? '');
  ok(targets.some((t) => t.includes('ce livre')), 'the pointing half is not typed');
  ok(targets.some((t) => t.includes('celui-ci')), 'the replacing half is not typed');
  ok(targets.some((t) => t.includes('cet homme')), 'cet is not typed, and typing is the only surface that can separate it from cette');
  ok(targets.some((t) => t.includes('cette')), 'cette is not typed');
});

/* ═══════════════════════════════════════════════════════════════════════════
 *  14. DISPLAY PARITY, AND THE STRINGS THAT ARE THE TEACHING
 * ═══════════════════════════════════════════════════════════════════════════ */

test('every pinned section still carries its corpus row verbatim', () => {
  if (!SRC) return;
  ok(SRC.DISPLAY_PARITY.length >= 12, 'the parity list has been trimmed');
  for (const p of SRC.DISPLAY_PARITY) {
    const s = sec(p.section);
    ok(s, `DISPLAY_PARITY names ${p.section}, which is not a section`);
    const row = byId.get(p.itemId);
    ok(row, `DISPLAY_PARITY names ${p.itemId}, which is not in the seed`);
    ok(strs(s).some((t) => t.includes(row!.fr)), `${p.section} no longer carries ${p.itemId} verbatim ("${row!.fr}") — ${p.why}`);
  }
});

/* ═══════════════════════════════════════════════════════════════════════════
 *  15. HOUSE COPY
 * ═══════════════════════════════════════════════════════════════════════════ */

test('no grammar jargon on a learner surface, including its -s plural', () => {
  if (!SRC) return;
  for (const j of SRC.JARGON) {
    for (const form of [j, `${j}s`]) {
      ok(!hasWord(LEARNER_TEXT, form), `"${form}" is grammar jargon and reaches a learner surface`);
    }
  }
});

test('the jargon walk covers intro and overview, which are drawn on the lesson cover', () => {
  if (!SRC) return;
  ok(String(L?.intro ?? '').length > 100, 'intro is empty, so pinning it is a no-op');
  for (const j of SRC.JARGON) ok(!hasWord(String(L?.intro ?? ''), j), `intro carries "${j}"`);
  for (const t of display(overviewRest)) {
    for (const j of SRC.JARGON) ok(!hasWord(t, j), `overview carries "${j}" in "${t}"`);
  }
});

test('overview.titleEn is the unit English name, which is why it is exempt', () => {
  const unit = (seed.units as Array<{ id: string; title?: string }>).find((u) => u.id === UNIT_ID)!;
  strictEqual((L?.overview as { titleEn?: string })?.titleEn, unit.title, 'content_units requires them to match');
});

test('the plain phrase outnumbers the technical one (Corrections §14.5)', () => {
  const plain = countOf(LEARNER_TEXT, 'the word');
  const tech = countOf(LEARNER_TEXT, 'pronoun') + countOf(LEARNER_TEXT, 'pronouns');
  ok(plain > tech, `"the word" appears ${plain} times against ${tech} for "pronoun"`);
});

test('no em dash and no "honest", by SUBSTRING in both directions', () => {
  for (const t of strs(L)) {
    ok(!t.includes('—'), `em dash in "${t.slice(0, 70)}"`);
    ok(!t.toLowerCase().includes('honest'), `"honest" in "${t.slice(0, 70)}"`);
  }
  for (const r of AUTHORED) {
    ok(!`${r.fr} ${r.en}`.includes('—'), `em dash in ${r.id}`);
    ok(!`${r.fr} ${r.en}`.toLowerCase().includes('honest'), `"honest" in ${r.id}`);
  }
});

test('no double punctuation: a sentence-final stop followed by ANY punctuation', () => {
  for (const t of strs(L)) {
    ok(!/[.!?][.,!?;:]/.test(t.replace(/\.\.\./g, '')), `double punctuation in "${t.slice(0, 70)}"`);
  }
});

test('no AI-tell phrasing', () => {
  const banned = ['falls fast', 'trip up', 'half of everything', 'this is the big one', 'listen to the trap', 'get those two right', 'this is the part that pays', 'here is the catch'];
  for (const b of banned) ok(!LEARNER_TEXT.toLowerCase().includes(b), `AI-tell phrasing: "${b}"`);
});

test('no U+203F reaches any surface, and the published row that carries one is not imported', () => {
  for (const t of strs(L)) ok(!t.includes(TIE_GLYPH), `U+203F draws as a low underscore on a Pixel 6: "${t.slice(0, 70)}"`);
  for (const r of AUTHORED) ok(!(r.respell ?? '').includes(TIE_GLYPH), `${r.id} introduces a new tie`);
  ok(!(L?.itemIds ?? []).includes(TIE_ROW), `${TIE_ROW} respells cet hôtel with a U+203F tie and this lesson imports it`);
});

test('the tie row really does still carry one, or this guard is protecting against nothing', () => {
  const r = byId.get(TIE_ROW);
  if (!r) return; // outside the cut, which is fine
  ok((r.respell ?? '').includes(TIE_GLYPH), `${TIE_ROW} no longer carries the tie, so the reason it was left out has gone`);
});

/* ═══════════════════════════════════════════════════════════════════════════
 *  16. SEED PARITY, DERIVED FROM THE AUTHORED SOURCE
 * ═══════════════════════════════════════════════════════════════════════════ */

test('every authored row in the source reached the seed unchanged', () => {
  if (!SRC) return;
  strictEqual(SRC.ALL_ROWS.length, AUTHORED_ROWS);
  for (const r of SRC.ALL_ROWS) {
    const s = byId.get(r.id);
    ok(s, `${r.id} is authored in the source and is not in the seed`);
    strictEqual(s!.fr, r.fr, `${r.id} fr differs between source and seed`);
    strictEqual(s!.respell, r.respell, `${r.id} respell differs between source and seed`);
    strictEqual(s!.kind, r.kind, `${r.id} kind differs between source and seed`);
  }
});

test('the authored block sits inside its allocated range and nothing else does', () => {
  const nums = AUTHORED.map((r) => Number(r.id.split('.').pop()));
  ok(Math.min(...nums) >= ID_FIRST && Math.max(...nums) <= ID_LAST, 'an authored id sits outside the block');
  strictEqual(new Set(nums).size, nums.length, 'a duplicate id');
});
