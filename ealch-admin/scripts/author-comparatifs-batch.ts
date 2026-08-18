// a2.08.l1 « Comparatifs & superlatifs » — apply to Postgres.
//
//   pnpm content:comparatifs --dry     guards only, writes nothing
//   pnpm content:comparatifs           applies
//
// POSTGRES FIRST, SEED SECOND. Run merge-comparatifs-into-seed.ts after this,
// or the lesson exists in the database and nowhere the app can read it.
//
// DO NOT run author-full-curriculum-spine.ts. A naive re-run would revert 74 of
// 75 unit titles, which is what spine-drift.test.ts exists to catch. This build
// changes NO spine field: `a2.08` already reads exactly as the prompt's
// measured identity block, verified against `content_units` below.
//
// DO NOT run content:publish from here. Doctrine §C: publishing is not part of
// a lesson build, and content:parity must be read first.
//
// THIS BUILD WRITES SIX RESPELL REPAIRS TO ROWS IT DOES NOT OWN. They are in
// `comparaisons`' neighbouring themes and every one closes a nasal with a plain
// n or m, which the real `hasPlainNasalFor` flags. Nothing else about those
// rows is touched: not `gender`, not `kind`, not `drills`, so none of them can
// move a1.03's measured ending population. See corpus §E.
import './env';
import {
  ALL_ROWS, UNIT, THEME, LESSON_ID, E, ID_FIRST, ID_LAST,
  IMPORT_IDS, IMPORTED, NOT_DECK_ABLE, DICTEE_IDS, DICTEE_MODE_EXPECTED,
  RESPELL_REPAIRS, REPAIR_IDS, GRID_CELLS, UNSEEN,
  POSSESSIVE_ROWS, POSSESSIVE_FORMS, POSSESSIVE_UNIT,
  REFUSED_FORMS, REFUSED_ALLOWED_IN, REFUSED_ALLOWED_DRILL,
  NE_PLUS_SHAPES, MUST_FIRE, MUST_NOT_FIRE,
  JARGON, PLAIN_PHRASE, TECHNICAL_WORD, BANNED_SUBSTRINGS, FORBIDDEN_CLAIMS,
  DEAD_AUDIO_FIELDS, DEAD_LESSON_FIELDS,
  NEAR_MISSES, FOLD_COLLISIONS, HOMOPHONE_FORMS, DISPLAY_PARITY,
  AGREEMENT_UNIT, ADVERB_UNIT, A203_RESERVED, A217_RESERVED, A217_TAKEN_BY,
  MIDDLES, QUE_PAIR,
  OUT_OF_BAND_TENSES, TENSE_MUST_FIRE, TENSE_MUST_NOT_FIRE,
  DEMONSTRATIVE_UNIT, DEMONSTRATIVE_FORMS, DEMONSTRATIVE_MUST_FIRE, DEMONSTRATIVE_MUST_NOT_FIRE,
  GLOSS_CONTRADICTIONS, GLOSS_ANCHOR, LIAISON_ROWS, LIAISON_CONTEXTS,
} from './data/comparatifs-corpus.ts';
import { LESSON, ITEM_IDS, DECK_TRANCHE } from './data/comparatifs-lesson.ts';
import { validateLesson, quizQuestions } from '../../ealch-v2/src/content/schema.ts';
import { validateDensity, formatDensity, hasPlainNasalFor } from '../../ealch-v2/src/content/density.logic.ts';
import { fold } from '../../ealch-v2/src/content/answer.logic.ts';
import { dicteeMode } from '../../ealch-v2/src/content/dictee.logic.ts';
import { assertReachable } from './lib/reachability.ts';

const DRY_RUN = process.argv.includes('--dry');
const REAPPLY = process.argv.includes('--reapply');
const die: (m: string) => never = (m) => { console.error(`\n  STOP: ${m}\n`); process.exit(1); };

/** `drills` is a Postgres enum array and node-postgres can hand it back as the
 *  RAW LITERAL `{flashcard,review}`. A `.includes()` on that string is a
 *  substring test that lies. */
const toArray = (d: unknown): string[] =>
  Array.isArray(d) ? d as string[] : String(d ?? '').replace(/[{}"]/g, '').split(',').filter(Boolean);

/** Every authored string reachable from a value. A RAW walk, deliberately:
 *  `prose()` drops NOTATION_KEYS and `sub` is on that list because on most
 *  cards it holds a respelling. On a `cardDeck` card `sub` holds PROSE, so the
 *  house-copy and jargon checks never see it (Corrections §13). */
const strs = (v: unknown, out: string[] = []): string[] => {
  if (typeof v === 'string') out.push(v);
  else if (Array.isArray(v)) v.forEach((x) => strs(x, out));
  else if (v && typeof v === 'object') Object.values(v).forEach((x) => strs(x, out));
  return out;
};

/** Corrections §14.3: THE HOUSE WORD BOUNDARY EXCLUDES AN APOSTROPHE, so a
 *  guard built on it cannot see `l'autre`, `c'est`, `qu'hier` or `qu'il`.
 *  Drop the apostrophe from the LEFT boundary and keep it on the right. */
const hasWord = (hay: string, needle: string): boolean =>
  new RegExp(`(?<![\\p{L}\\p{N}-])${needle.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}(?![\\p{L}\\p{N}'’-])`, 'iu').test(hay);

const countOf = (hay: string, needle: string): number => {
  const rx = new RegExp(`(?<![\\p{L}\\p{N}-])${needle.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}(?![\\p{L}\\p{N}'’-])`, 'giu');
  return (hay.match(rx) ?? []).length;
};

async function main() {
  /* ── OFFLINE GUARDS. These need no database and they are the cheap ones. ── */

  const schemaIssues = validateLesson(LESSON, LESSON_ID);
  if (schemaIssues.length) die(`validateLesson:\n${schemaIssues.map((i) => `    ${i.path}: ${i.message}`).join('\n')}`);

  const density = validateDensity(LESSON, new Set(ITEM_IDS));
  if (density.length) die(`validateDensity:\n${formatDensity(density)}`);

  /* PART A: EVERY AUTHORED ROW MUST BE REACHABLE.
   *
   * Doctrine §E required this all along and nothing enforced it, so a2.29
   * shipped fr.a2.hebergement.086 past 33 green guards. It surfaced three weeks
   * later, for an unrelated reason: a publish regenerated seed.json, the cut
   * dropped the unreferenced row, and a seed-based block count went red. */
  assertReachable(LESSON, ALL_ROWS, die);

  const ids = ALL_ROWS.map((r) => r.id);
  if (new Set(ids).size !== ids.length) die('a duplicate id in the authored rows');

  // AUTHORED ROWS AGAINST EACH OTHER, under the flashcard hub's own norm.
  //
  // ADDED AFTER THE TEST FOUND WHAT THIS FILE MISSED. The database check below
  // compares the authored rows against the rows ALREADY in the theme and never
  // against each other, so `mieux` and `le mieux` — authored in the same batch,
  // both normalising to `mieux` — passed every gate here and failed
  // `flashhub-coverage.test.ts`, which is a seed-wide test rather than a local
  // one. Two rows sharing an `fr` in one theme are served as one card twice.
  const hubNorm = (s: string) => s.toLowerCase().replace(/^(le |la |les |l'|un |une |des )/, '').trim();
  const selfSeen = new Map<string, string>();
  for (const r of ALL_ROWS) {
    if (r.kind === 'sentence') continue;
    const k = hubNorm(r.fr);
    const prior = selfSeen.get(k);
    if (prior) die(`${prior} and ${r.id} both normalise to "${k}" inside ${THEME}. The hub keys on fr per theme and would serve one card twice.`);
    selfSeen.set(k, r.id);
  }
  const nums = ids.map((i) => Number(i.split('.').pop()));
  if (Math.min(...nums) < ID_FIRST || Math.max(...nums) > ID_LAST) {
    die(`an authored id sits outside the requested block ${E(ID_FIRST)}..${E(ID_LAST)}`);
  }

  // The 14-word sentence budget (doctrine §C).
  for (const r of ALL_ROWS) {
    if (r.kind === 'sentence' && r.fr.split(/\s+/).length > 14) die(`${r.id} runs past the 14-word sentence budget`);
  }

  // NOT ONE AUTHORED ROW IS GENDERED. A gendered single-word row joins a1.03's
  // measured ending population and moves twenty printed figures in
  // `a1-03-genre.test.ts`. `mieux` is an adverb and `le mieux` is a phrase.
  for (const r of ALL_ROWS) {
    if ((r as { gender?: string }).gender) die(`${r.id} carries a gender, which is the shape that moves a1.03`);
  }

  const LEARNER_TEXT = [
    ...strs(LESSON.sections), ...strs(LESSON.terms), ...strs(LESSON.sheets ?? []),
    LESSON.intro ?? '', ...strs(LESSON.overview ?? {}), ...strs(LESSON.drills ?? []),
    ...strs(LESSON.acts ?? []), ...strs(LESSON.errorTriggers ?? []),
  ].join('\n');
  const ALL_TEXT = [LEARNER_TEXT, ...ALL_ROWS.map((r) => `${r.fr} ${r.en}`)].join('\n');

  if (LEARNER_TEXT.length < 8000) die(`the learner-text walk produced ${LEARNER_TEXT.length} chars, which is too few to be real`);

  /* ══════════════════════════════════════════════════════════════════════
   *  THE OWNS, AND THE THREE REQUIRED LAYOUTS
   * ══════════════════════════════════════════════════════════════════════ */

  const sec = (id: string) => LESSON.sections.find((s) => (s as { id?: string }).id === id);
  const sectionIds = new Set(LESSON.sections.map((s) => (s as { id?: string }).id ?? ''));

  // LAYOUT 1: the three degrees in ONE section, with ONE describing word held
  // constant. Asserted on the CONSTANT as well as on the three middles: a
  // version that showed plus grand / moins rapide / aussi cher would satisfy a
  // naive check and would be three lessons in one screen.
  const three = sec('s03-three') as { rows?: { cells: string[] }[]; cols?: string[] } | undefined;
  if (!three) die('s03-three is missing, and it is required layout 1');
  const threeRows = three.rows ?? [];
  if (threeRows.length !== 3) die(`s03-three has ${threeRows.length} rows and the layout is the three degrees`);
  for (const [i, m] of MIDDLES.entries()) {
    if (threeRows[i].cells[0] !== m) die(`s03-three row ${i} leads with "${threeRows[i].cells[0]}", expected "${m}"`);
    if (!hasWord(threeRows[i].cells[1], m)) die(`s03-three row ${i}'s sentence does not contain "${m}"`);
  }
  const HELD = 'grand';
  for (const [i, r] of threeRows.entries()) {
    if (!hasWord(r.cells[1], HELD)) die(`s03-three row ${i} does not hold "${HELD}" constant, so the frame is not visibly fixed`);
  }
  // And the frame really is constant: strip the middle word and the three
  // sentences must be one string.
  const stripped = new Set(threeRows.map((r, i) => r.cells[1].replace(MIDDLES[i], '').replace(/\s+/g, ' ').trim()));
  if (stripped.size !== 1) die(`s03-three's three sentences differ by more than the middle word: ${[...stripped].join(' | ')}`);

  // LAYOUT 2: meilleur and mieux in ONE section, side by side.
  const pair = sec('s15-pair') as { cards?: Record<string, unknown>[] } | undefined;
  if (!pair) die('s15-pair is missing, and it is required layout 2');
  const pairText = strs(pair).join('\n');
  for (const w of ['meilleur', 'mieux']) {
    if (!hasWord(pairText, w)) die(`s15-pair does not carry "${w}", and the layout IS the pair`);
  }
  if (!pairText.includes('plus bon')) die('s15-pair must show `plus bon` as what French refuses');
  // The minimal pair is the first two cards and it is minimal: same subject,
  // same second term, one word and one verb apart.
  const c0 = strs((pair.cards ?? [])[0]).join(' ');
  const c1 = strs((pair.cards ?? [])[1]).join(' ');
  if (!c0.includes('Il travaille mieux que son collègue.')) die('s15-pair card 0 is not the mieux half of the minimal pair');
  if (!c1.includes('Il est meilleur que son collègue.')) die('s15-pair card 1 is not the meilleur half of the minimal pair');

  // LAYOUT 3: the comparative and the superlative ADJACENT.
  const superSec = sec('s10-super');
  if (!superSec) die('s10-super is missing, and it is required layout 3');
  const superText = strs(superSec).join('\n');
  if (!superText.includes("Ce jardin est plus grand que l'autre."))
    die('s10-super does not carry the comparative half of the adjacent pair');
  if (!superText.includes("C'est le plus grand jardin du quartier."))
    die('s10-super does not carry the superlative half, so the article\'s arrival is not visible');

  /* DISPLAY PARITY. A cardDeck card and a tapTable cell carry INLINE strings,
   * not itemIds, so the French on a card is a second copy of the row behind it
   * and the two can walk apart in silence. The mutation harness proved it:
   * changing E(134) from « Il est moins grand que moi. » to « ... moins rapide
   * ... » destroyed required layout 1 and every guard here stayed green.
   *
   * Checked against the ROW, never against a retyped constant. A guard that
   * compares a constant to itself cannot fail (a2.29's lesson). */
  {
    const rowById = new Map([...ALL_ROWS.map((r) => [r.id, r.fr] as const)]);
    for (const p of DISPLAY_PARITY) {
      const s = sec(p.section);
      if (!s) die(`display parity names section "${p.section}", which does not exist`);
      const fr = rowById.get(p.itemId);
      // An imported row's `fr` is not in ALL_ROWS; it is checked in the DB
      // block below, where the string is read out of Postgres.
      if (!fr) continue;
      if (!strs(s).some((x) => x.includes(fr))) {
        die(`${p.section} does not display ${p.itemId} verbatim ("${fr}"). ${p.why}. `
          + 'The card restates the corpus rather than reading it, so the two have walked apart.');
      }
    }
  }

  // ONE tapTable IN THE FLOW, SIX ROWS OR FEWER, AND ZERO `table` SECTIONS.
  const tapTables = LESSON.sections.filter((s) => s.type === 'tapTable');
  if (tapTables.length !== 1) die(`${tapTables.length} tapTable sections; the prompt allows one, then stop`);
  if (((tapTables[0] as { rows?: unknown[] }).rows ?? []).length > 6) die('the tapTable runs past six rows, which is the Pixel 6 ceiling');
  for (const s of LESSON.sections) {
    if (s.type === 'table') die(`${(s as { id?: string }).id}: \`table\` at layer core is refused by validateDensity and has never shipped in 74 lessons. Use tapTable, or a reference sheet.`);
  }
  // AND EXACTLY ONE `table` IN A REFERENCE SHEET.
  const sheetTables = (LESSON.sheets ?? []).flatMap((sh) => (sh.sections ?? []).filter((s) => s.type === 'table'));
  if (sheetTables.length !== 1) die(`${sheetTables.length} tables in the reference sheets; the prompt allows one`);
  // A SHEET TABLE DOES NOT SCROLL HORIZONTALLY ON A PIXEL 6, and nothing on the
  // host can see it: validateDensity exempts a sheet, the schema takes any
  // number of cols, and the seed is correct either way. The first version of
  // this sheet shipped FOUR columns and the fourth was cut off at the screen
  // edge with no affordance saying so. Found by looking at the phone.
  for (const t of sheetTables) {
    const cols = (t as { cols?: string[] }).cols ?? [];
    if (cols.length > 3) die(`the reference sheet's table has ${cols.length} columns; a Pixel 6 clips the fourth and the sheet does not scroll sideways`);
    for (const r of (t as { rows?: string[][] }).rows ?? []) {
      if (r.length !== cols.length) die(`a sheet table row has ${r.length} cells against ${cols.length} columns`);
    }
    const details = (t as { rowDetails?: unknown[] }).rowDetails ?? [];
    if (details.length && details.length !== ((t as { rows?: unknown[] }).rows ?? []).length) {
      die('`rowDetails` is index-aligned with `rows` and the two lengths disagree');
    }
  }
  // `cheatSheet` inside a reference sheet draws its title and nothing else.
  for (const sh of LESSON.sheets ?? []) {
    for (const s of sh.sections ?? []) {
      if (s.type === 'cheatSheet') die(`${sh.id}: a cheatSheet inside a reference sheet draws its title and nothing else`);
    }
  }
  // Every declared sheet is reachable from some section.
  for (const sh of LESSON.sheets ?? []) {
    const named = LESSON.sections.some((s) => (s as { sheetId?: string }).sheetId === sh.id);
    if (!named) die(`sheet "${sh.id}" is declared and no section names it`);
  }

  /* ══════════════════════════════════════════════════════════════════════
   *  THE SUPERLATIVE AGREES, CELL BY CELL
   *
   *  Asserted by NAME rather than by count. A count passes when a form is
   *  swapped for a duplicate of another; naming each cell fails with the cell
   *  that went missing.
   * ══════════════════════════════════════════════════════════════════════ */

  const four = sec('s11-four');
  if (!four) die('s11-four is missing');
  const fourText = strs(four).join('\n');
  for (const cell of GRID_CELLS) {
    if (!fourText.includes(cell.form)) {
      die(`s11-four does not carry "${cell.form}" (${cell.gender} ${cell.number}). The four forms are the trap and a missing one is the trap not being taught.`);
    }
    const row = ALL_ROWS.find((r) => r.id === cell.id);
    if (!row) die(`${cell.id} is a grid cell and was not authored`);
    if (!row.fr.includes(cell.form)) die(`${cell.id} "${row.fr}" does not contain "${cell.form}"`);
  }
  // The grid really is ONE frame: four sentences, and only the article, the
  // ending and the noun's number move.
  const gridFrames = new Set(GRID_CELLS.map((c) => {
    const r = ALL_ROWS.find((x) => x.id === c.id)!;
    return r.fr.replace(/^(C'est|Ce sont)\s+/, '').replace(c.form, '<F>').replace(/jardins?|maisons?/, '<N>');
  }));
  if (gridFrames.size !== 1) die(`the four grid cells are not one frame: ${[...gridFrames].join(' | ')}`);

  /* ══════════════════════════════════════════════════════════════════════
   *  THE GENERALISATION TEST, ASSERTED IN BOTH DIRECTIONS
   *
   *  A production item uses a describing word absent from the lesson's own
   *  vocabulary. Named, and its ABSENCE asserted, because an author who later
   *  imports it deletes the question without breaking anything else.
   * ══════════════════════════════════════════════════════════════════════ */

  if (IMPORT_IDS.includes(UNSEEN.id)) die(`${UNSEEN.id} is the unseen describing word and this lesson imports it, which deletes the question`);
  for (const r of ALL_ROWS) {
    if (hasWord(r.fr, UNSEEN.adj) || hasWord(r.fr, UNSEEN.fem)) die(`${r.id} authors "${UNSEEN.adj}", which must stay unseen`);
  }
  const askIt = ['s08-unseen', 's22-quiz'];
  for (const s of LESSON.sections) {
    const sid = (s as { id?: string }).id ?? s.type;
    if (askIt.includes(sid)) continue;
    for (const str of strs(s)) {
      if (hasWord(str, UNSEEN.adj) || hasWord(str, UNSEEN.fem)) {
        die(`${sid} names "${UNSEEN.adj}", which only the two sections that ASK for it may. Anywhere else is the lesson teaching its own answer.`);
      }
    }
  }
  // And it IS asked for, in a production item, or the mission does not exist.
  const unseenQs = (quizQuestions(sec('s22-quiz') as never) as Record<string, unknown>[])
    .filter((q) => strs(q).some((s) => hasWord(s, UNSEEN.adj) || hasWord(s, UNSEEN.fem)));
  if (unseenQs.length < 2) die(`only ${unseenQs.length} quiz questions use "${UNSEEN.adj}"; the prompt wants at least one production item and this build promises two`);
  if (!unseenQs.some((q) => q.format === 'typeIn')) die(`no typeIn question uses "${UNSEEN.adj}", so the learner never PRODUCES the unseen form`);

  /* ══════════════════════════════════════════════════════════════════════
   *  a2.34'S MATERIAL. NOT ONE ROW, NOT ONE STRING.
   * ══════════════════════════════════════════════════════════════════════ */

  const possIds = new Set(POSSESSIVE_ROWS.map((r) => r.id));
  for (const id of IMPORT_IDS) {
    if (possIds.has(id)) die(`${id} carries a possessive pronoun and belongs to ${POSSESSIVE_UNIT}. This build imports none of them.`);
  }
  for (const p of POSSESSIVE_FORMS) {
    if (hasWord(ALL_TEXT, p)) die(`"${p}" is a possessive pronoun and reaches a surface in this lesson. ${POSSESSIVE_UNIT} owns them.`);
  }
  // Proved against the shape rather than trusted: the guard must fire on the
  // rows it exists for and spare the ones it must.
  for (const s of MUST_FIRE.possessive) {
    if (!POSSESSIVE_FORMS.some((p) => hasWord(s, p))) die(`the possessive guard cannot see "${s}", so it is not a guard`);
  }
  for (const s of MUST_NOT_FIRE.possessive) {
    if (POSSESSIVE_FORMS.some((p) => hasWord(s, p))) die(`the possessive guard fires on legitimate content: "${s}"`);
  }

  /* ══════════════════════════════════════════════════════════════════════
   *  `plus bon` AND `plus bien`, SCOPED BY SECTION ID
   * ══════════════════════════════════════════════════════════════════════ */

  const allowed = new Set<string>(REFUSED_ALLOWED_IN);
  for (const s of LESSON.sections) {
    const sid = (s as { id?: string }).id ?? s.type;
    if (allowed.has(sid)) continue;
    for (const str of strs(s)) {
      for (const f of REFUSED_FORMS) {
        if (str.toLowerCase().includes(f)) {
          die(`${sid} contains "${f}", which is not French. It is allowed only in ${[...allowed].join(', ')}, where it is the error being corrected.`);
        }
      }
    }
  }
  for (const d of LESSON.drills ?? []) {
    if (d.id === REFUSED_ALLOWED_DRILL) continue;
    for (const str of strs(d)) {
      for (const f of REFUSED_FORMS) if (str.toLowerCase().includes(f)) die(`drill ${d.id} contains "${f}"`);
    }
  }
  // AND IT REALLY IS PRESENT WHERE IT MUST BE, in all five, or the guard has
  // become a list of places nothing happens.
  for (const sid of REFUSED_ALLOWED_IN) {
    const s = sec(sid);
    if (!s) die(`${sid} is on the refused-forms allow list and is not a section`);
    if (!REFUSED_FORMS.some((f) => strs(s).join('\n').toLowerCase().includes(f))) {
      die(`${sid} is allowed to carry a refused form and carries none. The allow list must describe the lesson, not permit it.`);
    }
  }
  for (const s of MUST_FIRE.refused) {
    if (!REFUSED_FORMS.some((f) => s.toLowerCase().includes(f))) die(`the refused-form guard cannot see "${s}"`);
  }
  for (const s of MUST_NOT_FIRE.refused) {
    if (REFUSED_FORMS.some((f) => s.toLowerCase().includes(f))) die(`the refused-form guard fires on legitimate French: "${s}"`);
  }

  // AND `plus mauvais` IS NOT ON THE LIST, because it is ordinary French and
  // is the asymmetry that makes the rule teachable. Asserted, so a later author
  // cannot "tidy" it onto the banned list.
  if (REFUSED_FORMS.some((f) => 'plus mauvais'.includes(f))) die('`plus mauvais` must not be treated as a refused form: pire and plus mauvais are both ordinary French');
  if (!ALL_TEXT.includes('plus mauvais')) die('the lesson never shows `plus mauvais`, so "two words refuse plus" reads as "plus is dangerous"');

  /* ══════════════════════════════════════════════════════════════════════
   *  `ne … plus` IS NAMED ONCE AND TAUGHT NOWHERE
   * ══════════════════════════════════════════════════════════════════════ */

  for (const rx of NE_PLUS_SHAPES) {
    if (rx.test(LEARNER_TEXT)) die(`a learner surface contains the negation \`ne … plus\`: "${LEARNER_TEXT.match(rx)?.[0]}". It is a different word doing a different job.`);
    for (const r of ALL_ROWS) if (rx.test(r.fr)) die(`${r.id} contains \`ne … plus\`: "${r.fr}"`);
  }
  for (const s of MUST_FIRE.nePlus) {
    if (!NE_PLUS_SHAPES.some((rx) => rx.test(s))) die(`the ne…plus guard cannot see "${s}", so it is not a guard`);
  }
  // Corrections §14.4: a shape built out of French morphology reads the English
  // as French. `plus` is a word in both languages and `no longer` is what this
  // construction MEANS, so a guard built on the meaning fires on every card
  // that explains it.
  for (const s of MUST_NOT_FIRE.nePlus) {
    if (NE_PLUS_SHAPES.some((rx) => rx.test(s))) die(`the ne…plus guard fires on legitimate content: "${s}"`);
  }
  // It IS named once, on the roundup, or the pointer this lesson owes does not
  // exist.
  const roundup = strs(sec('s24-roundup')).join('\n');
  if (!roundup.includes('ne ... plus')) die('the roundup does not name `ne ... plus`, and a learner who meets it cold reads it as this lesson\'s plus');

  /* ══════════════════════════════════════════════════════════════════════
   *  `que` IS OBLIGATORY, AND THE PAIR THAT PROVES IT
   * ══════════════════════════════════════════════════════════════════════ */

  const withoutQue = ALL_ROWS.find((r) => r.id === QUE_PAIR.without);
  const withQue = ALL_ROWS.find((r) => r.id === QUE_PAIR.with);
  if (!withoutQue || !withQue) die('the que pair was not authored');
  if (hasWord(withoutQue.fr, 'que')) die(`${QUE_PAIR.without} "${withoutQue.fr}" contains que and is meant to be the sentence WITHOUT it`);
  if (!hasWord(withQue.fr, 'que')) die(`${QUE_PAIR.with} "${withQue.fr}" is meant to be the finished comparison and has no que`);
  if (!withQue.fr.startsWith(withoutQue.fr.replace(/\.$/, ''))) {
    die('the que pair is not a pair: the finished sentence must be the unfinished one plus que and its object');
  }
  // Every AUTHORED comparison carries que. The frame rows and the grid rows are
  // the exceptions BY DESIGN and are named, not excluded by a pattern.
  const NO_QUE_BY_DESIGN = new Set<string>([
    E(136), E(137), E(138), E(139), E(140),
    E(141), E(142), E(143), E(144),
    E(147), E(148),
    E(156), E(157), E(158), E(159), E(160), E(161), E(162), E(163),
  ]);
  for (const r of ALL_ROWS) {
    if (NO_QUE_BY_DESIGN.has(r.id)) continue;
    if (!hasWord(r.fr, 'que') && !/\bqu['’]/.test(r.fr)) die(`${r.id} "${r.fr}" is a comparison with no que and is not on the by-design list`);
  }

  /* ══════════════════════════════════════════════════════════════════════
   *  THREE GUARDS THE AUDIT ADDED, EACH FOR A DEFECT THAT SHIPPED
   * ══════════════════════════════════════════════════════════════════════ */

  // 1. NO TENSE THE LEARNER DOES NOT HAVE, ON A SURFACE THEY MUST PRODUCE.
  //    Doctrine §B.3 lets a CORPUS sentence use one; a scenario turn and its
  //    `alts` are lines the learner says. The first version had them produce a
  //    conditional, which is B1 and arrives nowhere in the A2 trail.
  {
    const PRODUCE = new Set(['scenario', 'practice', 'dictation', 'quiz', 'groupDrill', 'trapDrill']);
    for (const s of LESSON.sections) {
      if (!PRODUCE.has(s.type)) continue;
      for (const str of strs(s)) {
        for (const t of OUT_OF_BAND_TENSES) {
          if (t.shape.test(str)) {
            die(`${(s as { id?: string }).id}: a production surface uses the ${t.name}, which the learner does not have at seq 32: "${str.slice(0, 90)}"`);
          }
        }
      }
    }
    for (const r of ALL_ROWS) {
      for (const t of OUT_OF_BAND_TENSES) if (t.shape.test(r.fr)) die(`${r.id} uses the ${t.name}: "${r.fr}"`);
    }
    for (const s of TENSE_MUST_FIRE) {
      if (!OUT_OF_BAND_TENSES.some((t) => t.shape.test(s))) die(`the tense guard cannot see "${s}", so it is not a guard`);
    }
    // Corrections §14.4: a shape built out of French morphology reads the
    // English as French. `-rait` is inside `portrait` and `-rais` inside a
    // dozen English words, which is why this one is anchored on a French
    // SUBJECT PRONOUN rather than on the ending alone.
    for (const s of TENSE_MUST_NOT_FIRE) {
      const hit = OUT_OF_BAND_TENSES.find((t) => t.shape.test(s));
      if (hit) die(`the ${hit.name} guard fires on legitimate content: "${s}"`);
    }
  }

  // 2. a2.33's DEMONSTRATIVE PRONOUNS, treated exactly as a2.34's possessives.
  //    `cette`, `ce` and `ces` are demonstrative ADJECTIVES and are a1's; the
  //    guard must not touch them or it forbids eleven of this lesson's rows.
  for (const d of DEMONSTRATIVE_FORMS) {
    if (hasWord(ALL_TEXT, d)) die(`"${d}" is a demonstrative pronoun and belongs to ${DEMONSTRATIVE_UNIT}, one seq ahead of this lesson`);
  }
  for (const s of DEMONSTRATIVE_MUST_FIRE) {
    if (!DEMONSTRATIVE_FORMS.some((d) => hasWord(s, d))) die(`the demonstrative guard cannot see "${s}"`);
  }
  for (const s of DEMONSTRATIVE_MUST_NOT_FIRE) {
    if (DEMONSTRATIVE_FORMS.some((d) => hasWord(s, d))) die(`the demonstrative guard fires on a demonstrative ADJECTIVE, which is a1's: "${s}"`);
  }

  // 3. THE LESSON MAY NOT CONTRADICT ITS OWN CORPUS ROW.
  //    E(136) glosses itself « He is taller. » and four sections plus a SCORED
  //    mcq key said it means « he is tall ». `plus` is comparative and there is
  //    no reading on which that is true. Anchored on the row's own `en` as well
  //    as on the phrasings, so the guard survives a reword.
  {
    const anchor = ALL_ROWS.find((r) => r.id === GLOSS_ANCHOR.id);
    if (!anchor) die(`${GLOSS_ANCHOR.id} is the gloss anchor and was not authored`);
    if (anchor.en !== GLOSS_ANCHOR.en) {
      die(`${GLOSS_ANCHOR.id} glosses itself "${anchor.en}" and the anchor says "${GLOSS_ANCHOR.en}". `
        + 'If the row moved, every string this guard protects has to move with it.');
    }
    for (const c of GLOSS_CONTRADICTIONS) {
      if (LEARNER_TEXT.toLowerCase().includes(c)) {
        die(`a learner surface says "${c}". ${GLOSS_ANCHOR.id} means "${GLOSS_ANCHOR.en}": plus is comparative and `
          + 'nothing makes it mean tall. The sentence is a comparison with its second half missing, which is a different claim.');
      }
    }
    // And the guard is proved to fire on what actually shipped.
    for (const s of ['The French sentence is correct and it simply says he is tall.', 'It is complete and it is not a comparison.']) {
      if (!GLOSS_CONTRADICTIONS.some((c) => s.toLowerCase().includes(c))) die(`the gloss guard cannot see "${s}"`);
    }
    for (const s of ['It is grammatical, and it is unfinished: plus grand than whom.', 'aussi longue is a comparison with its second half missing.']) {
      if (GLOSS_CONTRADICTIONS.some((c) => s.toLowerCase().includes(c))) die(`the gloss guard fires on the corrected wording: "${s}"`);
    }
  }

  /* ══════════════════════════════════════════════════════════════════════
   *  a2.03 AND a2.17 ARE NAMED BY UNIT ID
   * ══════════════════════════════════════════════════════════════════════ */

  const assumed = LESSON.grammarAssumed ?? [];
  for (const u of [AGREEMENT_UNIT, ADVERB_UNIT]) {
    if (!assumed.includes(u)) die(`${u} is not in grammarAssumed, and this lesson extends it`);
    if (!LEARNER_TEXT.includes(u)) die(`${u} is never named on a learner surface. The prompt asks for the loop to be closed BY NAME.`);
  }
  // a2.17's reservation, taken. All four, each by the row that takes it.
  for (const form of A217_RESERVED) {
    const id = A217_TAKEN_BY[form];
    if (!id) die(`a2.17 reserved "${form}" for this unit and nothing here claims it`);
    const row = ALL_ROWS.find((r) => r.id === id);
    if (!row) die(`${id} is meant to take a2.17's reserved "${form}" and was not authored`);
    if (!row.fr.includes(form)) die(`${id} "${row.fr}" is meant to be a2.17's "${form}"`);
  }
  // a2.03's reservation. Every one of the five reaches a learner here, which is
  // the other end of the assertion a2.03's own suite makes.
  for (const form of A203_RESERVED) {
    if (!LEARNER_TEXT.includes(form)) die(`a2.03 reserved "${form}" for this unit and it appears on no learner surface here`);
  }

  /* ══════════════════════════════════════════════════════════════════════
   *  THE HOUSE RULES, OVER EVERY LEARNER-FACING STRING
   * ══════════════════════════════════════════════════════════════════════ */

  // Jargon, with the -s plural of every entry (Corrections §13). The walk
  // covers `intro`, `overview` and the sheets as well as the sections (§9), and
  // runs over the RAW string walk so `sub` on a cardDeck card is seen (§13).
  for (const j of JARGON) {
    for (const form of [j, `${j}s`]) {
      if (hasWord(LEARNER_TEXT, form)) die(`jargon on a learner surface: "${form}"`);
    }
  }
  // Corrections §14.5: GUARD THE RATIO, NOT THE WORD. `adjective` is on 147
  // shipped cards, so banning it would be this build inventing a rule. What the
  // house does is prefer the plain phrase, and a1.16 runs `describing word` 74
  // times against `adjective` 12.
  const plain = countOf(LEARNER_TEXT, PLAIN_PHRASE);
  const technical = countOf(LEARNER_TEXT, TECHNICAL_WORD) + countOf(LEARNER_TEXT, `${TECHNICAL_WORD}s`);
  if (plain === 0) die(`the plain phrase "${PLAIN_PHRASE}" appears zero times, so the ratio guard is measuring nothing`);
  if (plain <= technical) {
    die(`"${PLAIN_PHRASE}" appears ${plain} times against "${TECHNICAL_WORD}" ${technical}. The house prefers the plain phrase and the ratio is the rule, not the ban.`);
  }
  // `intro` PINNED IN ITS OWN ASSERTION (Corrections §9). a2.11 shipped "third
  // person" there while every other layer was green, and only a Pixel 6 found
  // it: `intro` is drawn on the lesson overview card AND the lesson cover.
  for (const j of JARGON) {
    for (const form of [j, `${j}s`]) {
      if (hasWord(LESSON.intro ?? '', form)) die(`jargon in Lesson.intro, which is drawn on the cover: "${form}"`);
    }
  }

  // A PLAIN SUBSTRING TEST IN BOTH DIRECTIONS, deliberately NOT word-bounded:
  // the band's inherited `\bhonest` guard cannot see "dishonest" (a2.06).
  for (const b of BANNED_SUBSTRINGS) if (ALL_TEXT.toLowerCase().includes(b)) die(`authored copy contains "${b}"`);
  for (const c of FORBIDDEN_CLAIMS) {
    if (ALL_TEXT.toLowerCase().includes(c.toLowerCase())) die(`claims something the app cannot deliver: "${c}"`);
  }
  if (/—/.test(ALL_TEXT)) die('an em dash in authored copy');
  if (/‿/.test(ALL_TEXT)) die('U+203F, which renders as a low underscore on a Pixel 6');

  // THE DOUBLE-STOP GUARD, WHOLE SHAPE (a2.22): a sentence-final stop followed
  // by ANY punctuation, not "two dots". A stop followed by a comma or a
  // semicolon is the same defect and the half-shaped guard sees one of them.
  for (const s of [...strs(LESSON.sections), ...ALL_ROWS.map((r) => r.fr)]) {
    if (/[.!?]\s*[.,;:!?]/.test(s.replace(/\.\.\./g, ''))) die(`double stop: "${s.slice(0, 70)}"`);
  }

  // A SPACED EXCLAMATION MARK IN A SCENE BUBBLE has made the French line lose
  // its last word on a Pixel 6 while the gloss still translated it.
  for (const s of strs(sec('s01-scene'))) if (/\s!/.test(s)) die(`a spaced exclamation mark in the scene: "${s.slice(0, 60)}"`);

  /* ── THE FIELDS THAT DRAW NOTHING ──────────────────────────────────────── */

  for (const f of DEAD_LESSON_FIELDS) {
    if (f in (LESSON as unknown as Record<string, unknown>)) die(`the Lesson carries \`${f}\`, which draws nothing`);
  }
  const serialised = JSON.stringify(LESSON);
  for (const f of DEAD_AUDIO_FIELDS) {
    if (serialised.includes(`"${f}"`)) die(`\`${f}\` is authored somewhere; it validates, publishes and is read by no renderer`);
  }
  for (const s of LESSON.sections) {
    const sid = (s as { id?: string }).id;
    if (s.type === 'cardDeck' && 'itemIds' in s) die(`${sid}: \`itemIds\` on a cardDeck draws nothing. Release through deckTranche.`);
    if (s.type === 'commonErrors' && !(s as { swipe?: boolean }).swipe) die(`${sid}: commonErrors without \`swipe\` draws a blank screen`);
    if (s.type === 'practice' && (s as { skill?: string }).skill !== 'speak') {
      die(`${sid}: \`practice\` renders a speaking drill whatever \`skill\` says, and 'write' draws no writing surface at all`);
    }
    if (s.type === 'listening' && (s as { hideLines?: boolean }).hideLines !== true) {
      die(`${sid}: a listening section without hideLines prints fr AND en beside the play dot, which is a reading exercise`);
    }
    if (s.type === 'reading' && !(s as { questionsInModal?: boolean }).questionsInModal) {
      die(`${sid}: reading + glossary needs questionsInModal or the glossary renderer is never reached`);
    }
    if (((s as { terms?: string[] }).terms ?? []).length > 3) die(`${sid} declares more than three term chips and the renderer shows three`);
    for (const g of (s as { groups?: { items?: Record<string, unknown>[] }[] }).groups ?? []) {
      for (const it of g.items ?? []) if ('sub' in it) die(`${sid}: a groupDrill item carries \`sub\`, which draws nothing. Use \`note\`.`);
    }
  }
  if (LESSON.sections.filter((s) => s.type === 'quiz').length !== 1) die('exactly one quiz section, or the second is silently never rendered');
  if (LESSON.sections.filter((s) => s.type === 'practice').length < 1) die('practice is MANDATORY (lesson-contract.test.ts mirrors the publish gate)');
  // Every term is surfaced by at least one section, or it is a definition
  // nobody can reach.
  const chipped = new Set(LESSON.sections.flatMap((s) => (s as { terms?: string[] }).terms ?? []));
  for (const k of Object.keys(LESSON.terms ?? {})) if (!chipped.has(k)) die(`term "${k}" is defined and no section surfaces it`);

  // THE STEPPED trapDrill: rule > cards > audio > gated drill, with swipe, an
  // audio spec, a say, and NO size. `lesson-contract.test.ts` enforces it for
  // every A2 trapDrill.
  const trap = LESSON.sections.find((s) => s.type === 'trapDrill') as {
    id?: string; steps?: { kind: string; gate?: boolean }[]; rule?: unknown; cards?: { fr: string }[];
    swipe?: boolean; audio?: unknown; say?: unknown; size?: unknown;
  } | undefined;
  if (!trap) die('no trapDrill');
  if (!trap.rule) die('the trapDrill has no `rule`, so its opening step draws nothing');
  if (trap.swipe !== true) die('the trapDrill is not `swipe: true`');
  if (!trap.audio) die('the trapDrill has no audio spec');
  if (!trap.say) die('the trapDrill has no `say`');
  if ('size' in trap && trap.size !== undefined) die('`size` comes OFF a stepped trapDrill');
  const kinds = (trap.steps ?? []).map((s) => s.kind);
  if (kinds.join(',') !== 'rule,cards,audio,drill') die(`the trapDrill steps read ${kinds.join(',')}, expected rule,cards,audio,drill`);
  if (!(trap.steps ?? []).some((s) => s.kind === 'drill' && s.gate)) die('the trapDrill drill step is not gated');
  // THE AUDIO STEP PLAYS EACH CARD'S `fr`, so nothing in `fr` may be a form
  // French refuses. The wrong reading lives in `promptSound`.
  for (const c of trap.cards ?? []) {
    for (const f of REFUSED_FORMS) if (c.fr.toLowerCase().includes(f)) die(`the trapDrill's audio step would SPEAK "${c.fr}", which is not French. Put the wrong reading in promptSound.`);
  }

  /* ══════════════════════════════════════════════════════════════════════
   *  THE QUIZ
   * ══════════════════════════════════════════════════════════════════════ */

  const quiz = sec('s22-quiz') as { rounds?: { id: string; targets?: string[]; questions: Record<string, unknown>[] }[] } | undefined;
  const questions = quizQuestions(quiz as never) as unknown as Record<string, unknown>[];
  if (questions.length !== 30) die(`the quiz holds ${questions.length} questions and the measured A2 shape is 30`);

  const mix: Record<string, number> = {};
  for (const q of questions) mix[String(q.format)] = (mix[String(q.format)] ?? 0) + 1;
  if ((mix.mcq ?? 0) > questions.length / 2) die(`${mix.mcq} of ${questions.length} questions are mcq, and at most half may be`);
  if ((mix.typeIn ?? 0) <= (mix.mcq ?? 0)) die(`typeIn ${mix.typeIn ?? 0} against mcq ${mix.mcq ?? 0}; the prompt asks for a quiz weighted toward typeIn`);
  if ((mix.listenChoose ?? 0) < 2) die('the prompt asks for two listenChoose items on `plus` and its final consonant');
  if ((mix.errorSpot ?? 0) < 2) die('errorSpot is the only surface that catches `plus bon` and a missing `que`, and the prompt asks for both');

  for (const q of questions) {
    if (!q.why) die(`a quiz question has no \`why\`: ${String(q.q)}`);
    if (!q.ref) die(`a quiz question has no \`ref\`: ${String(q.q)}`);
    if (!sectionIds.has(String(q.ref))) die(`a quiz question refs "${String(q.ref)}", which is not a section id`);
    if (q.format === 'listenChoose' && !q.say) die(`a listenChoose has no \`say\`, so the card speaks the answer: ${String(q.q)}`);
    if (q.format === 'errorSpot' && !q.prompt) die(`an errorSpot has no \`prompt\`, so the learner corrects a phrase that never appeared: ${String(q.q)}`);
    if (q.format === 'typeIn' || q.format === 'errorSpot') {
      const accept = (q.accept ?? []) as string[];
      if (!accept.some((a) => fold(a) === fold(String(q.answer)))) {
        die(`a ${String(q.format)} does not accept the answer it displays: "${String(q.answer)}"`);
      }
    }
    if (Array.isArray(q.opts)) {
      const o = q.opts as string[];
      if (new Set(o.map((x) => x.toLowerCase())).size !== o.length) die(`a duplicate option in "${String(q.q)}"`);
    }
  }

  // NO EAR QUESTION MAY OFFER TWO MEMBERS OF ONE HOMOPHONE GROUP. A list, not a
  // sentence in a report, because a sentence in a report cannot fail. Here the
  // group is the superlative plurals, which is exactly the thing the prompt
  // says cannot be tested by ear.
  // COUNTED OVER THE OPTIONS, NOT OVER THE GROUP MEMBERS. The first version of
  // this counted matching members and fired on a single option: `meilleure`
  // matches both `meilleur` and `meilleure` by substring, so one legal option
  // read as two. What the rule is about is whether TWO OPTIONS sound the same.
  for (const q of questions) {
    if (q.format !== 'listenChoose' && q.format !== 'speak') continue;
    const o = ((q.opts ?? []) as string[]).map((x) => x.toLowerCase());
    for (const group of HOMOPHONE_FORMS) {
      const hits = o.filter((x) => group.some((g) => x.includes(g.toLowerCase())));
      if (hits.length > 1) die(`an ear question offers two options from one homophone group (${hits.join(' / ')}): "${String(q.q)}"`);
    }
  }
  // AND THE GUARD IS PROVED TO FIRE. A pair of superlative plurals is exactly
  // what the prompt says cannot be tested by ear, so it is the proof case.
  {
    const proof = ['le plus grand', 'les plus grands'];
    const fires = HOMOPHONE_FORMS.some((g) => proof.filter((x) => g.some((m) => x.includes(m))).length > 1);
    if (!fires) die('the homophone guard cannot see le plus grand against les plus grands, so it is not a guard');
    const spare = ['mieux', 'meilleure'];
    const wrongly = HOMOPHONE_FORMS.some((g) => spare.filter((x) => g.some((m) => x.includes(m))).length > 1);
    if (wrongly) die('the homophone guard fires on mieux against meilleure, which are two completely different sounds');
  }
  // The list is proved to describe reality, not just to exist.
  for (const group of HOMOPHONE_FORMS) {
    if (group.length < 2) die(`a homophone group with ${group.length} member(s) can never fire`);
  }

  // EACH ROUND'S FIRST TARGET RESOLVES, AND EACH DRILL IS THE FIRST RESOLVING
  // TARGET OF EXACTLY ONE ROUND. `drillForRound` fires the first resolving
  // target's drill and then stops; a drill named in second place is dead.
  const triggers = new Map((LESSON.errorTriggers ?? []).map((t) => [t.id, t]));
  const firedBy = new Map<string, string>();
  for (const r of quiz?.rounds ?? []) {
    const first = (r.targets ?? [])[0];
    if (!first) die(`round ${r.id} names no targets, so it fires no remediation`);
    const t = triggers.get(first);
    if (!t) die(`round ${r.id}'s first target "${first}" is not an errorTrigger`);
    if (firedBy.has(t.drill)) die(`drill "${t.drill}" is the first resolving target of ${firedBy.get(t.drill)} AND ${r.id}`);
    firedBy.set(t.drill, r.id);
  }
  for (const d of LESSON.drills ?? []) {
    if (!firedBy.has(d.id) && !(LESSON.errorTriggers ?? []).some((t) => t.retest === d.id)) {
      die(`drill "${d.id}" is fired by no round and is no trigger's retest, so it is dead content`);
    }
  }

  // BAND RULE: fold the expected answer and the most plausible wrong answer. If
  // they collide the item tests nothing and must move to mcq or listenChoose.
  for (const [a, b] of NEAR_MISSES) {
    if (fold(a) === fold(b)) die(`a near-miss pair folds to one string and tests nothing: "${a}" / "${b}"`);
  }
  // AND THE PAIRS THAT DO COLLIDE, asserted the other way, so the day fold()
  // changes we find out rather than carrying a stale list.
  for (const [a, b] of FOLD_COLLISIONS) {
    if (fold(a) !== fold(b)) die(`"${a}" and "${b}" no longer fold to one string. fold() changed; re-check every scored item in this lesson.`);
  }

  /* ══════════════════════════════════════════════════════════════════════
   *  THE DICTÉE, THROUGH THE REAL dicteeMode
   *
   *  LETTERS, not words. Corrections §4: word mode hands every real word over
   *  pre-spelled, and this lesson's whole written distinction is one small word.
   * ══════════════════════════════════════════════════════════════════════ */

  for (const id of DICTEE_IDS) {
    const row = ALL_ROWS.find((r) => r.id === id);
    if (!row) die(`${id} is a dictée id and was not authored`);
    if (!toArray(row.drills).includes('dictation')) die(`${id} is a dictée id and does not carry the dictation drill`);
    const mode = dicteeMode(row.fr);
    if (mode !== DICTEE_MODE_EXPECTED) {
      die(`${id} "${row.fr}" resolves to ${mode} mode. A lesson about one small written word can only be tested in ${DICTEE_MODE_EXPECTED}.`);
    }
    if (row.fr.includes('-')) die(`${id} "${row.fr}" contains a hyphen, and no dictée may turn on one: fold() strips it`);
  }
  // AND THE OTHER DIRECTION: no published sentence in this theme could have
  // been used, which is why all five are authored. Proved on the shortest one.
  if (dicteeMode("Il fait moins froid qu'hier.") !== 'words') {
    die('the shortest published sentence in this theme is no longer word mode; re-check whether the dictée still had to be authored');
  }

  /* ══════════════════════════════════════════════════════════════════════
   *  THE RESPELLINGS
   * ══════════════════════════════════════════════════════════════════════ */

  /* LIAISON. FOUR ROWS SHIPPED WITHOUT IT AND NO GATE SAW THEM.
   *
   * `est` in front of a vowel liaises and every `est aussi` frame in this build
   * was authored `eh oh-see`, with the t missing. `hasPlainNasalFor` does not
   * look at liaison, `validateDensity` does not, and the schema does not.
   *
   * The check is coarse on purpose: it asks whether the respelling contains the
   * moving consonant AT ALL, not where. A respelling that carries it in the
   * wrong place is a judgement call; one that does not carry it is a fact. */
  for (const r of ALL_ROWS) {
    if (!r.respell) continue;
    for (const ctx of LIAISON_CONTEXTS) {
      if (!ctx.fr.test(r.fr)) continue;
      if (!ctx.expect.test(r.respell)) {
        die(`${r.id} "${r.fr}" has a ${ctx.name} liaison and its respelling carries no ${ctx.expect.source}: "${r.respell}". `
          + 'The house writes the moving consonant onto the following syllable (SEH TAHN PAHN, day-zay-koo-TUR), never as a tie.');
      }
    }
  }
  // BY NAME, with the value that shipped wrong, so a revert says which row.
  for (const l of LIAISON_ROWS) {
    const row = ALL_ROWS.find((x) => x.id === l.id);
    if (!row) die(`${l.id} is on the liaison list and was not authored`);
    if (row.respell === l.wrong) die(`${l.id} is back to the value that shipped without its ${l.context} liaison: "${l.wrong}"`);
    if (!row.respell?.includes(l.carries)) die(`${l.id} should carry "${l.carries}" for its ${l.context} liaison and reads "${row.respell}"`);
  }
  // AND NO U+203F, which is the OTHER way to write a liaison and renders as a
  // low underscore on a Pixel 6.
  for (const r of ALL_ROWS) if (r.respell?.includes('‿')) die(`${r.id} writes its liaison with U+203F`);

  const flagged = ALL_ROWS.filter((r) => r.respell && hasPlainNasalFor(r.fr, r.respell));
  if (flagged.length) {
    die(`${flagged.length} authored respelling(s) close a nasal with a plain n/m: ${flagged.map((r) => `${r.id} ${r.respell}`).join(', ')}`);
  }

  // THE REPAIR TABLE, ALL THREE STATES THROUGH THE REAL FUNCTION.
  // Corrections §6 as amended by §14.1: ONE table, every entry carrying the
  // half-repair, and `blind` and `house` as separate, mutually exclusive
  // reasons rather than one boolean.
  for (const r of RESPELL_REPAIRS) {
    const seesStored = hasPlainNasalFor(r.fr, r.from);
    if (r.blind && seesStored) die(`${r.id} is filed blind and the checker CAN see its stored value`);
    if (!r.blind && !seesStored) die(`${r.id} is filed visible and the checker does NOT flag its stored value "${r.from}"`);
    if (hasPlainNasalFor(r.fr, r.half)) die(`${r.id}: the checker still flags the half-repair "${r.half}", so it is not the state this entry describes`);
    if (hasPlainNasalFor(r.fr, r.to)) die(`${r.id}: the checker flags the FINAL value "${r.to}"`);
    if ((r.half !== r.to) !== (r.blind || r.house)) {
      die(`${r.id}: half !== to is ${r.half !== r.to} and (blind || house) is ${r.blind || r.house}. a2.17 §14.1: they are two reasons for one symptom and must not be conflated.`);
    }
  }
  if (new Set(REPAIR_IDS).size !== REPAIR_IDS.length) die('a duplicate id in the repair table');
  // ASSERT THE BLINDNESS AS A NEGATIVE, so the day the checker improves we find
  // out rather than carrying a dead by-name list. Not one of these six is blind
  // and that is itself worth pinning: every nasal in this lesson's lexicon ends
  // a token, so §6's word-internal blind spot does not fire here at all.
  if (RESPELL_REPAIRS.some((r) => r.blind)) {
    die('a repair is filed blind. Measured 2026-08-17: none of the six is, because every nasal here ends a token. If that has changed, say so in the report rather than in this table.');
  }

  /* ══════════════════════════════════════════════════════════════════════
   *  REACHABILITY, IN BOTH DIRECTIONS
   * ══════════════════════════════════════════════════════════════════════ */

  const released = new Set(DECK_TRANCHE.flat());
  const namedByASection = new Set(strs(LESSON.sections).filter((s) => s.startsWith('fr.')));
  const namedByATerm = new Set(strs(LESSON.terms ?? {}).filter((s) => s.startsWith('fr.')));
  const namedByADrill = new Set(strs(LESSON.drills ?? []).filter((s) => s.startsWith('fr.')));
  const named = new Set([...namedByASection, ...namedByATerm, ...namedByADrill]);

  for (const id of NOT_DECK_ABLE) {
    if (released.has(id)) die(`${id} is \`dictation\`-only or \`sentence\`-only and a deckTranche releases it, so the release draws nothing`);
    if (!named.has(id)) die(`${id} is imported, is not deck-able, and is named by no section, term or drill. It is unreachable.`);
  }
  // Every released id is either authored here or on the deck-able import list.
  const deckable = new Set([...ALL_ROWS.map((r) => r.id), ...IMPORTED.deck, ...IMPORTED.words]);
  for (const id of released) if (!deckable.has(id)) die(`${id} is released by a deckTranche and is not on the deck-able list`);
  // Tranches release every authored item exactly once and nothing twice.
  const flat = DECK_TRANCHE.flat();
  if (new Set(flat).size !== flat.length) die('a deckTranche releases the same id twice');
  for (const r of ALL_ROWS) if (!released.has(r.id)) die(`${r.id} was authored and no tranche releases it`);
  if (DECK_TRANCHE.length !== (LESSON.acts ?? []).length) die('deckTranche must be index-aligned with acts, one entry each');

  /* ══════════════════════════════════════════════════════════════════════
   *  THE SHAPE
   * ══════════════════════════════════════════════════════════════════════ */

  if (LESSON.sections.length !== 24) die(`${LESSON.sections.length} sections; the measured A2 house shape is 24 and this build does not depart from it`);
  const acts = LESSON.acts ?? [];
  if (acts.length !== 6) die(`${acts.length} acts`);
  const claimed = acts.flatMap((a) => a.sections);
  for (const s of claimed) if (!sectionIds.has(s)) die(`an act names "${s}", which is not a section`);
  if (claimed.length !== LESSON.sections.length) die('every section must belong to exactly one act');
  // THE OWNS OUTWEIGHS THE TRAP. Here the Owns IS the frame, so what has to be
  // true is that acts 2 and 3 together outweigh the trap and the scene.
  const n = (id: string) => acts.find((a) => a.id === id)?.sections.length ?? 0;
  if (n('act2') + n('act3') <= n('act1') + n('act4')) {
    die(`the frame and the article hold ${n('act2') + n('act3')} missions and the scene and the trap hold ${n('act1') + n('act4')}. The Owns must be the heavier half (doctrine §B.5).`);
  }

  console.log(`\n  offline guards passed: ${ALL_ROWS.length} rows, ${LESSON.sections.length} sections, `
    + `${IMPORT_IDS.length} imports, ${questions.length} questions `
    + `(mcq ${mix.mcq ?? 0} / typeIn ${mix.typeIn ?? 0} / errorSpot ${mix.errorSpot ?? 0} / listenChoose ${mix.listenChoose ?? 0})`);

  /* ── DATABASE GUARDS ────────────────────────────────────────────────────── */

  const { Pool } = await import('pg');
  const pool = new Pool({ connectionString: process.env.DATABASE_URL, max: 1 });
  const c = await pool.connect();
  try {
    const count = async (theme: string, level?: string) => Number((await c.query<{ n: string }>(
      `select count(*)::text as n from content_items where theme=$1 and status='published'${level ? ' and level::text=$2' : ''}`,
      level ? [theme, level] : [theme])).rows[0].n);

    const beforeTheme = await count(THEME);
    const beforeA2 = await count(THEME, 'a2');
    console.log(`  ${THEME} before: ${beforeTheme} published (${beforeA2} at a2)`);

    // THE ID BLOCK. A highest-id check cannot see a concurrent lesson landing
    // BELOW the top of the range — a1.19/a1.20 and a1.14/a1.15 both collided
    // that way. Check the WHOLE BLOCK, not the maximum.
    const taken = await c.query<{ id: string }>('select id from content_items where id = any($1::text[])', [ids]);
    if (taken.rowCount && !REAPPLY) {
      die(`${taken.rowCount} of this build's ids already exist: ${taken.rows.map((r) => r.id).slice(0, 8).join(', ')}. `
        + 'Another lesson landed in the block. Re-measure and move, or pass --reapply if this is your own re-run.');
    }

    // Intra-theme duplicate `fr`, computed the way `flashhub-coverage.test.ts`
    // computes it: article-stripped, and NON-SENTENCE rows only, because that
    // is the population the hub serves.
    const norm = (s: string) => s.toLowerCase().replace(/^(le |la |les |l'|un |une |des )/, '').trim();
    const themeRows = await c.query<{ id: string; fr: string; kind: string }>(
      `select id, fr, kind from content_items where theme=$1 and status='published'`, [THEME]);
    const existing = new Map(themeRows.rows.filter((r) => r.kind !== 'sentence').map((r) => [norm(r.fr), r.id]));
    for (const r of ALL_ROWS) {
      if (r.kind === 'sentence') continue;
      const prior = existing.get(norm(r.fr));
      if (prior && !REAPPLY) die(`${r.id} "${r.fr}" duplicates ${prior} inside ${THEME}. The flashcard hub keys on fr per theme and would serve one card twice.`);
    }

    // EVERY IMPORT MUST EXIST AND BE PUBLISHED.
    const found = await c.query<{ id: string; status: string; fr: string; drills: unknown; gender: string | null; kind: string }>(
      'select id, status, fr, drills, gender, kind from content_items where id = any($1::text[])', [IMPORT_IDS]);
    const missing = IMPORT_IDS.filter((i) => !found.rows.some((r) => r.id === i));
    if (missing.length) die(`${missing.length} imported id(s) are not in Postgres: ${missing.join(', ')}`);
    const unpub = found.rows.filter((r) => r.status !== 'published');
    if (unpub.length) die(`${unpub.length} imported id(s) are not published: ${unpub.map((r) => r.id).join(', ')}`);

    // NO IMPORTED ROW IS A GENDERED SINGLE WORD. That shape joins a1.03's
    // measured ending population, and a CARRY moves it even when an authoring
    // does not (a1.23, and six builds since).
    const gendered = found.rows.filter((r) => r.gender && r.kind === 'word' && !r.fr.replace(/^(le |la |les |l'|un |une |des )/, '').includes(' '));
    if (gendered.length) {
      die(`${gendered.length} imported row(s) are gendered single words and would join a1.03's ending population: ${gendered.map((r) => `${r.id} "${r.fr}"`).join(', ')}`);
    }

    // NO IMPORTED ROW CARRIES A POSSESSIVE PRONOUN. Checked against the DATABASE
    // string rather than against the list in the corpus file, so a row that
    // gained one since the measurement is caught.
    for (const r of found.rows) {
      for (const p of POSSESSIVE_FORMS) {
        if (hasWord(r.fr, p)) die(`${r.id} "${r.fr}" carries the possessive pronoun "${p}" and belongs to ${POSSESSIVE_UNIT}`);
      }
    }
    // AND NO IMPORTED ROW CARRIES THE UNSEEN DESCRIBING WORD.
    for (const r of found.rows) {
      if (hasWord(r.fr, UNSEEN.adj) || hasWord(r.fr, UNSEEN.fem)) die(`${r.id} "${r.fr}" carries "${UNSEEN.adj}", which must stay unseen`);
    }

    // DISPLAY PARITY FOR THE IMPORTED HALF, read out of Postgres rather than
    // retyped. `fr.a2.comparaisons.066` is the published half of required
    // layout 2's minimal pair; if it is edited, s15-pair must follow it.
    for (const p of DISPLAY_PARITY) {
      if (ALL_ROWS.some((r) => r.id === p.itemId)) continue;
      const row = found.rows.find((x) => x.id === p.itemId);
      if (!row) die(`display parity names ${p.itemId}, which is not on the import list`);
      const s = sec(p.section)!;
      if (!strs(s).some((x) => x.includes(row.fr))) {
        die(`${p.section} does not display ${p.itemId} verbatim ("${row.fr}"). ${p.why}. `
          + 'The card restates the published row rather than reading it.');
      }
    }

    // DOCTRINE §E, CHECKED AGAINST POSTGRES AND NOT THE SEED: every item a
    // deckTranche releases must carry `flashcard`.
    const byId = new Map(found.rows.map((r) => [r.id, toArray(r.drills)]));
    for (const r of ALL_ROWS) byId.set(r.id, toArray(r.drills));
    const noDeck = [...released].filter((id) => !(byId.get(id) ?? []).includes('flashcard'));
    if (noDeck.length) {
      die(`${noDeck.length} released id(s) carry no \`flashcard\` drill, so no deck can serve them: ${noDeck.slice(0, 12).join(', ')}`);
    }
    // AND THE TRAP THIS THEME CARRIES, ASSERTED AS A FACT ABOUT POSTGRES: the
    // 112 published sentences have neither flashcard nor voiceflash. If that
    // ever changes, half the design decisions in this build are re-openable.
    const sentencePop = themeRows.rows.filter((r) => r.kind === 'sentence' && r.id.startsWith('fr.a2.'));
    const withFlash = (await c.query<{ id: string }>(
      `select id from content_items where theme=$1 and status='published' and kind='sentence'
         and id like 'fr.a2.%' and 'flashcard' = any(drills)`, [THEME])).rowCount ?? 0;
    if (withFlash !== ALL_ROWS.filter((r) => r.kind === 'sentence').length && !REAPPLY) {
      console.log(`  NOTE: ${withFlash} a2 sentences in ${THEME} carry flashcard before this apply, `
        + `and this build authors ${ALL_ROWS.filter((r) => r.kind === 'sentence').length}`);
    }
    console.log(`  ${THEME} a2 sentence population: ${sentencePop.length}, of which ${withFlash} are deck-able today`);

    // `practice` with skill 'speak' needs `voiceflash` ON EVERY ITEM IT NAMES.
    // In this theme that is a hard constraint: 112 of 129 rows carry none.
    const practice = LESSON.sections.find((s) => s.type === 'practice') as { itemIds: string[] } | undefined;
    for (const id of practice?.itemIds ?? []) {
      if (!(byId.get(id) ?? []).includes('voiceflash')) die(`${id} is named by the practice section and carries no voiceflash drill, so the mic scores nothing`);
    }

    // Every groupDrill itemId resolves.
    for (const s of LESSON.sections) {
      if (s.type !== 'groupDrill') continue;
      for (const g of (s as { groups?: { items?: { itemId?: string }[] }[] }).groups ?? []) {
        for (const it of g.items ?? []) {
          if (it.itemId && !byId.has(it.itemId)) die(`${it.itemId} is named by a groupDrill item and is in neither the imports nor the authored rows`);
        }
      }
    }

    // THE SIX REPAIR ROWS EXIST AND STILL HOLD THE VALUE THIS BUILD MEASURED.
    // If one has moved, somebody else repaired it and this build must not
    // overwrite their decision blind.
    const rb = await c.query<{ id: string; fr: string; respell: string | null }>(
      'select id, fr, respell from content_items where id = any($1::text[])', [REPAIR_IDS]);
    if (rb.rowCount !== RESPELL_REPAIRS.length) die(`the repair block reads back ${rb.rowCount} rows, expected ${RESPELL_REPAIRS.length}`);
    for (const r of RESPELL_REPAIRS) {
      const row = rb.rows.find((x) => x.id === r.id);
      if (row?.fr !== r.fr) die(`${r.id} reads fr="${row?.fr}", and the repair table says "${r.fr}". The row moved.`);
      if (row?.respell !== r.from && row?.respell !== r.to) {
        die(`${r.id} reads respell="${row?.respell}", which is neither the measured "${r.from}" nor this build's "${r.to}". Somebody else has been here.`);
      }
    }

    // THE UNIT ROW, READ FROM POSTGRES RATHER THAN ASSUMED (Corrections §1).
    const unitRow = await c.query<{ body: Record<string, unknown> }>(
      "select body from content_units where kind='curriculum_unit' and body->>'id'=$1", [UNIT.id]);
    if (unitRow.rowCount !== 1) die(`${UNIT.id} is not in content_units`);
    const unit = unitRow.rows[0].body as { id: string; title?: string; sub?: string; canDo?: string; themes?: string[] | null; lessonIds?: string[]; prereqUnitIds?: string[] };
    if (unit.title !== UNIT.title) die(`the unit row title reads "${unit.title}" and this build writes "${UNIT.title}"`);
    if (unit.sub !== UNIT.sub) die(`the unit row sub reads "${unit.sub}" and this build writes "${UNIT.sub}"`);
    if (unit.canDo !== UNIT.canDo) die(`the unit row canDo reads "${unit.canDo}" and this build writes "${UNIT.canDo}"`);
    if (!(unit.prereqUnitIds ?? []).includes(UNIT.prereqUnitIds[0])) die(`the unit row prereq reads ${JSON.stringify(unit.prereqUnitIds)}`);
    if ((unit.lessonIds ?? []).length && !REAPPLY) die(`${UNIT.id} already claims ${JSON.stringify(unit.lessonIds)}; this is meant to be a first build`);

    console.log(`  database guards passed: ${IMPORT_IDS.length} imports published, `
      + `${RESPELL_REPAIRS.length} repair rows still at their measured values, ${UNIT.id} verified`);

    if (DRY_RUN) { console.log('\n  DRY RUN: every guard passed, nothing written.\n'); return; }

    /* ── THE WRITE ────────────────────────────────────────────────────────── */

    await c.query('begin');
    try {
      for (const r of ALL_ROWS) {
        await c.query(
          `insert into content_items (id, kind, level, theme, fr, en, ipa, respell, gender, notes, tags, drills, version, status)
           values ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,'published')
           on conflict (id) do update set kind=excluded.kind, level=excluded.level, theme=excluded.theme,
             fr=excluded.fr, en=excluded.en, ipa=excluded.ipa, respell=excluded.respell,
             gender=excluded.gender, notes=excluded.notes, tags=excluded.tags, drills=excluded.drills,
             version=excluded.version, status='published'`,
          [r.id, r.kind, r.level, r.theme, r.fr, r.en, r.ipa ?? null, r.respell ?? null,
            (r as { gender?: string }).gender ?? null, r.notes ?? null, r.tags ?? [], r.drills ?? [], r.version ?? 1]);
      }

      // THE SIX REPAIRS. `respell` ONLY. Nothing else about these rows is
      // touched, so none of them can move a1.03's ending population.
      for (const r of RESPELL_REPAIRS) {
        const up = await c.query('update content_items set respell=$1, updated_at=now() where id=$2', [r.to, r.id]);
        if (up.rowCount !== 1) throw new Error(`the repair of ${r.id} touched ${up.rowCount} rows, expected 1`);
      }

      await c.query(
        `insert into content_units (slug, title, kind, level, locale, status, body, version, generated_by)
         values ($1,$2,'lesson',$3,'fr','published',$4::jsonb,1,'human')
         on conflict (slug) do update set title=excluded.title, level=excluded.level,
           body=excluded.body, status='published', updated_at=now()`,
        [LESSON.id, LESSON.title, LESSON.level, JSON.stringify(LESSON)]);
      const nextUnit = { ...unit, lessonIds: [...new Set([...(unit.lessonIds ?? []), LESSON.id])] };
      const uu = await c.query(
        `update content_units set body=$1::jsonb, updated_at=now()
          where kind='curriculum_unit' and body->>'id'=$2`, [JSON.stringify(nextUnit), UNIT.id]);
      if (uu.rowCount !== 1) throw new Error(`the unit update touched ${uu.rowCount} rows, expected 1`);
      await c.query('commit');
    } catch (e) {
      await c.query('rollback');
      die(`rolled back: ${(e as Error).message}`);
    }

    // THE ROW COUNT AFTER, NOT THE MAXIMUM ID (Corrections §10).
    const afterTheme = await count(THEME);
    const afterA2 = await count(THEME, 'a2');
    console.log(`\n  ${THEME}: ${beforeTheme} -> ${afterTheme} (+${afterTheme - beforeTheme}, authored ${ALL_ROWS.length})`);
    console.log(`  ${THEME} a2 slice: ${beforeA2} -> ${afterA2} (+${afterA2 - beforeA2})`);
    if (afterTheme - beforeTheme !== ALL_ROWS.length && !REAPPLY) {
      die(`the theme moved by ${afterTheme - beforeTheme} and this build authored ${ALL_ROWS.length}. Something else landed during the apply.`);
    }

    // READ THE REPAIRS BACK.
    const after = await c.query<{ id: string; fr: string; respell: string }>(
      'select id, fr, respell from content_items where id = any($1::text[])', [REPAIR_IDS]);
    for (const r of RESPELL_REPAIRS) {
      const row = after.rows.find((x) => x.id === r.id)!;
      if (row.respell !== r.to) die(`${r.id} reads back "${row.respell}", expected "${r.to}"`);
      if (hasPlainNasalFor(row.fr, row.respell)) die(`${r.id} reads back a value the checker still flags`);
    }
    console.log(`  ${RESPELL_REPAIRS.length} respellings repaired and read back clean: `
      + RESPELL_REPAIRS.map((r) => `${r.fr} ${r.from}->${r.to}`).join(', '));
    console.log(`  ${LESSON.id} written, and ${UNIT.id} now claims it`);
    console.log('\n  NEXT: pnpm tsx scripts/merge-comparatifs-into-seed.ts\n');
  } finally {
    c.release();
    await pool.end();
  }
}

main();
