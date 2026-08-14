/* Merges a2.04.l1 « Prépositions de lieu » into ealch-v2/src/content/seed.json.
 *
 *   pnpm tsx scripts/merge-prepositions-lieu-into-seed.ts --dry-run
 *   pnpm tsx scripts/merge-prepositions-lieu-into-seed.ts
 *
 * RUN THE BATCH FIRST. Postgres is canonical and the seed is a CUT of it; the
 * order is always apply, then merge, then publish only when both agree.
 *
 * NEVER `git checkout seed.json` to undo anything. It discards other authors'
 * uncommitted lessons. Re-run this script.
 *
 * ── WHY THE CARRY EXISTS ──────────────────────────────────────────────────
 *
 * This lesson imports 37 rows out of EIGHTEEN themes, more than any build in
 * this band, and it is the shape corrections §10 warns about: `a2.11` found
 * that NEITHER of the two rows its lesson leaned on hardest was in the seed.
 * Here the exposure is worse, because the imports are the vocabulary rather
 * than the evidence: `le médecin`, `la boulangerie`, `chez` itself and the
 * three countries are all rows somebody else authored in themes this cut may
 * not hold, and a lesson whose itemIds resolve to nothing renders empty cards.
 *
 * ── THE TWO TRANSFORMS, AND WHY THEY LIVE HERE TOO ────────────────────────
 *
 * The manifest is a read of Postgres taken BEFORE the batch ran, and the batch
 * then changes two kinds of thing about rows it does not own:
 *
 *   1  nine respellings repaired   including TWO the shared checker cannot see
 *                                  and THREE that go past the minimal repair to
 *                                  a house value read off a published row
 *   2  seven sets of drills added  rows that could not be drawn on a card or
 *                                  spoken
 *
 * Carrying the manifest verbatim would put `mayd-SAN` in the seed on the hero
 * card of a lesson whose subject is that phrase, while Postgres held
 * `mayd-SEHⁿ`. Both transforms are applied here, from the same constants, and
 * the result is checked field by field.
 *
 * ── THE DRILL-ORDER TRAP, INHERITED FROM a2.12 ────────────────────────────
 *
 * `drills` is a Postgres ENUM array and `array_agg(distinct e order by e)`
 * orders by DECLARATION order, not alphabetically. a2.12's merge sorted the same
 * values as STRINGS and shipped a different order into the seed from the one the
 * database held. `drillOrder()` below sorts by `DRILL_KINDS`.
 *
 * ── AND THE MERGE MUST NOT DRIFT THINNER THAN THE BATCH ───────────────────
 *
 * a2.16 §4: six of its twenty-nine mutations were caught by the batch and
 * MISSED by the merge, and the reason it matters is procedural — the merge is
 * the layer that runs when somebody re-merges without re-applying. Every guard
 * the batch runs on the content runs here too.
 */
import './env';
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import {
  DRILL_KINDS, formatIssues, quizQuestions, validateItem, validateLesson,
  type Item, type Lesson, type Unit,
} from '../../ealch-v2/src/content/schema.ts';
import { formatDensity, validateDensity, hasPlainNasalFor } from '../../ealch-v2/src/content/density.logic.ts';
import { endingPopulation } from '../../ealch-v2/src/content/gender.logic.ts';
import { dicteeMode } from '../../ealch-v2/src/content/dictee.logic.ts';
import { matchesAccept } from '../../ealch-v2/src/content/answer.logic.ts';
import {
  ALL_REPAIRS, ARTICLE_TABLE, AUTHORED_HEADWORDS, AUTHORED_IDS as AUTHORED_ID_LIST,
  CHEZ_FOLD_WRONG, CHEZ_PLACE_MUST_FIRE, CHEZ_PLACE_MUST_NOT_FIRE, CHEZ_PLACE_SHAPE,
  CHEZ_WRONG, CONTRACTION_UNIT, COUNTRY_FORBIDDEN, COUNTRY_IDS,
  A103_SEED_POPULATION, DISPLAY_ONLY_ALREADY_IN_SEED, DISPLAY_ONLY_IDS,
  EXPECTED_DISPLAY_ONLY, EXPECTED_ITEM_IMPORTS, ITEM_IMPORT_IDS,
  COUNTRY_UNIT, DRILL_ADDITIONS, EXPECTED_ACTS, EXPECTED_AUTHORED,
  EXPECTED_IMPORTED, EXPECTED_QUESTIONS, EXPECTED_REPAIRS,
  EXPECTED_REPAIRS_BLIND, EXPECTED_REPAIRS_HOUSE, EXPECTED_SECTIONS,
  EXPECTED_TERMS, EXPECTED_TRAP_DRILLS, ID_BLOCK, IMPORTED, IMPORTED_IDS,
  KIND_EXAMPLE, KIND_LABEL, KIND_ORDER, KIND_OWNER, KIND_WORD,
  MEME_FALSE_POSITIVE, PREPOSITIONS_LIEU, READ_NOT_IMPORTED, REFRAME,
  RESPELL_ADDITIONS, THEME, TIME_FORBIDDEN, TIME_MUST_FIRE, TIME_MUST_NOT_FIRE,
  TIME_SHAPE, TIME_UNIT, TITLE_MAX, UNIT, UNSEEN, UNSEEN_WORDS,
  A121_PREPOSITIONS, isMine,
} from './data/prepositions-lieu-corpus.ts';
import { PREPOSITIONS_LIEU_TERMS, TERM_ROW_MAX, rowWidth } from './data/prepositions-lieu-terms.ts';
import {
  ARTICLE_SECTION_ID, FOUR_SECTION_ID, PREPOSITIONS_LIEU_ACTS,
  PREPOSITIONS_LIEU_DICTEE_IDS, PREPOSITIONS_LIEU_DRILLS,
  PREPOSITIONS_LIEU_ERROR_TRIGGERS, PREPOSITIONS_LIEU_ITEM_IDS,
  PREPOSITIONS_LIEU_LESSON, PREPOSITIONS_LIEU_SHEETS, PREPOSITIONS_LIEU_SPEAK_IDS,
  PREPOSITIONS_LIEU_TRANCHES, QUIZ_SECTION_ID, ROUNDUP_SECTION_ID,
  SCENARIO_SECTION_ID, UNSEEN_SECTION_ID, WRONG_FORM_SECTIONS,
} from './data/prepositions-lieu-lesson.ts';
import { PREPOSITIONS_LIEU_ROWS } from './data/prepositions-lieu-rows.gen.ts';

const here = dirname(fileURLToPath(import.meta.url));
const SEED = join(here, '../../ealch-v2/src/content/seed.json');
const DRY_RUN = process.argv.includes('--dry-run');

const LESSON: Lesson = PREPOSITIONS_LIEU_LESSON;
const UNIT_ID = UNIT.id;
const AUTHORED_ITEMS: Item[] = PREPOSITIONS_LIEU.map((r) => {
  const { role, placeKind, ...rest } = r as Record<string, unknown> & { role: string; placeKind?: string };
  void role; void placeKind;
  return rest as unknown as Item;
});
const AUTHORED_IDS = new Set(AUTHORED_ID_LIST);

function die(msg: string): never {
  console.error(`\n  ${msg}\n`);
  process.exit(1);
}

function strings(v: unknown, out: string[] = []): string[] {
  if (typeof v === 'string') out.push(v);
  else if (Array.isArray(v)) for (const x of v) strings(x, out);
  else if (v && typeof v === 'object') for (const x of Object.values(v)) strings(x, out);
  return out;
}
const NOTATION_KEYS = new Set(['ipa', 'respell', 'promptSound', 'scoreSegment', 'sub']);
const MACHINE_KEYS = new Set([
  'id', 'ref', 'sheetId', 'itemId', 'itemIds', 'targets', 'detectOn', 'drill',
  'retest', 'accept', 'recordingId', 'audioRef', 'unitId', 'scenarioId',
  'clipIds', 'buckets',
]);
/** An id is not prose, whatever key it arrives under. See the batch. */
const isId = (s: string): boolean => /^fr\.[a-z0-9]+\.[a-z0-9-]+\.\d+$/i.test(s);
function display(v: unknown, out: string[] = []): string[] {
  if (typeof v === 'string') { if (!isId(v)) out.push(v); }
  else if (Array.isArray(v)) for (const x of v) display(x, out);
  else if (v && typeof v === 'object') {
    for (const [k, x] of Object.entries(v)) if (!MACHINE_KEYS.has(k)) display(x, out);
  }
  return out;
}
function prose(v: unknown, out: string[] = []): string[] {
  if (typeof v === 'string') { if (!isId(v)) out.push(v); }
  else if (Array.isArray(v)) for (const x of v) prose(x, out);
  else if (v && typeof v === 'object') {
    for (const [k, x] of Object.entries(v)) if (!NOTATION_KEYS.has(k) && !MACHINE_KEYS.has(k)) prose(x, out);
  }
  return out;
}
function hasPhrase(hay: string, needle: string): boolean {
  const isWordL = (c: string) => /[\p{L}\p{N}-]/u.test(c);
  const isWordR = (c: string) => /[\p{L}\p{N}'’-]/u.test(c);
  const h = hay.toLowerCase();
  const n = needle.toLowerCase();
  let i = 0;
  while ((i = h.indexOf(n, i)) !== -1) {
    if (!isWordL(i === 0 ? '' : h[i - 1]!) && !isWordR(h[i + n.length] ?? '')) return true;
    i += 1;
  }
  return false;
}
const countPhrase = (hay: string, needle: string): number => {
  let n = 0; let i = 0;
  const h = hay.toLowerCase(); const q = needle.toLowerCase();
  while ((i = h.indexOf(q, i)) !== -1) { n += 1; i += q.length; }
  return n;
};

/** `drills` is an ENUM array and Postgres orders it by DECLARATION order. */
const drillOrder = (ds: Item['drills']): Item['drills'] =>
  [...(ds ?? [])].sort((a, b) => DRILL_KINDS.indexOf(a) - DRILL_KINDS.indexOf(b)) as Item['drills'];

/* ── The carried rows, with this build's two transforms applied ───────────── */

const MANIFEST_ROWS: Item[] = Object.values(PREPOSITIONS_LIEU_ROWS);
const REPAIR_BY_ID = new Map(ALL_REPAIRS.map((r) => [r.id, r] as const));
const DRILLADD_BY_ID = new Map(DRILL_ADDITIONS.map((d) => [d.id, d] as const));

/** ONLY THE ROWS THIS LESSON OWNS AS ITEMS ARE CARRIED.
 *
 *  The fifteen gendered single-word nouns are printed on cards out of the
 *  manifest and are NOT carried, because a carry is what puts a row into the
 *  seed and a1.03's ending population is measured off the seed. Carrying them
 *  moved four of a1.03's printed figures on the first run of this merge. See
 *  DISPLAY_ONLY_IDS in the corpus.
 *
 *  If one of the fifteen turns out to be in the seed ALREADY, its repaired
 *  respelling has to be carried or the seed and Postgres disagree on a row this
 *  build changed. That set was empty when this was measured and the guard below
 *  reports it rather than assuming it stays empty. */
const CARRY_IDS = new Set(ITEM_IMPORT_IDS);
const CARRIED: Item[] = MANIFEST_ROWS.filter((r) => CARRY_IDS.has(r.id)).map((row) => {
  const fix = REPAIR_BY_ID.get(row.id);
  const drill = DRILLADD_BY_ID.get(row.id);
  let respell = row.respell;
  if (fix) {
    if (respell !== fix.from && respell !== fix.to) {
      die(`${row.id} is recorded as ${JSON.stringify(respell)} and the repair expects ${JSON.stringify(fix.from)}. Regenerate the manifest.`);
    }
    respell = fix.to;
  }
  const drills = drill
    ? drillOrder([...new Set([...(row.drills ?? []), ...drill.add])] as Item['drills'])
    : drillOrder(row.drills);
  return { ...row, respell, drills };
});

/* Every transform landed, and nothing else moved. */
{
  const byId = new Map(CARRIED.map((r) => [r.id, r] as const));
  for (const r of ALL_REPAIRS) {
    // A repair on a DISPLAY row is applied in Postgres and printed off the
    // manifest; there is nothing in the seed to repair.
    if (!CARRY_IDS.has(r.id)) continue;
    const now = String(byId.get(r.id)?.respell ?? '');
    if (now !== r.to) die(`the carry left ${r.id} at ${JSON.stringify(now)} and the repaired value is ${JSON.stringify(r.to)}`);
    if (hasPlainNasalFor(r.fr, now)) die(`${r.id} is still flagged after the carry: ${JSON.stringify(now)}`);
    if (hasPlainNasalFor(r.fr, r.half)) die(`${r.id}'s half-repaired value ${JSON.stringify(r.half)} is flagged, so it is not what the checker reports`);
  }
  // ALL NINE REPAIRS, INCLUDING THE DISPLAY-ONLY ONES. Found by mutation:
  // un-repairing `la boulangerie` went through this layer because the loop above
  // skips the rows the seed does not carry, and it is the one repair the shared
  // checker cannot see. The three-value assertion is about the SOURCE, not about
  // the carry, so it belongs outside the carry loop.
  for (const r of ALL_REPAIRS) {
    if (hasPlainNasalFor(r.fr, r.to)) die(`${r.id} repaired value ${JSON.stringify(r.to)} is still flagged`);
    const seesFrom = hasPlainNasalFor(r.fr, r.from);
    if (r.blind && seesFrom) die(`${r.id} claims the checker is blind to it and the checker sees it`);
    if (!r.blind && !seesFrom) die(`${r.id} claims the checker sees it and it does not`);
    if (r.blind && r.house) die(`${r.id} claims both blind and house, and they are mutually exclusive`);
    if ((r.half !== r.to) !== (r.blind || r.house)) die(`${r.id}: half differs from to is ${r.half !== r.to} and blind||house is ${r.blind || r.house}`);
    if (r.to.includes('‿')) die(`${r.id} repaired value carries U+203F`);
  }
  for (const d of DRILL_ADDITIONS) {
    const have = byId.get(d.id)?.drills ?? [];
    for (const want of d.add) if (!have.includes(want as never)) die(`the carry did not add ${want} to ${d.id}`);
  }
  const touched = new Set([...ALL_REPAIRS.map((r) => r.id), ...DRILL_ADDITIONS.map((d) => d.id)]);
  const untouched = CARRIED.filter((r) => !touched.has(r.id));
  const changed = untouched.filter((r) => {
    const src = MANIFEST_ROWS.find((x) => x.id === r.id)!;
    return JSON.stringify({ ...r, drills: r.drills }) !== JSON.stringify({ ...src, drills: drillOrder(src.drills) });
  });
  if (changed.length) die(`the carry changed ${changed.length} row(s) it does not transform: ${changed.map((r) => r.id).join(', ')}`);
}

/* ── The seed ────────────────────────────────────────────────────────────── */

type Seed = {
  version: number;
  items: Item[];
  lessons: Lesson[];
  units: Unit[];
  [k: string]: unknown;
};

const seed = JSON.parse(readFileSync(SEED, 'utf8')) as Seed;
console.log(`\n  a2.04 « ${UNIT.sub} » merge${DRY_RUN ? '  (dry run)' : ''}`);
console.log(`  seed version ${seed.version}: ${seed.items.length} items, ${seed.lessons.length} lessons, ${seed.units.length} units`);

{
  const inSeed = new Set(seed.items.map((i) => i.id));
  const themeInSeed = seed.items.filter((i) => i.theme === THEME).length;
  const missing = IMPORTED_IDS.filter((id) => !inSeed.has(id));
  console.log(`  the cut       ${THEME} holds ${themeInSeed} rows in the seed; ${missing.length} of this lesson's ${IMPORTED_IDS.length} imports are absent and would draw blank cards`);
}

/* ══════════════════════════════════════════════════════════════════════════
 *  a1.03's ENDING POPULATION, MEASURED OFF THE SEED
 *
 *  THE GUARD THAT DID NOT EXIST AND SHOULD HAVE. Every A2 build in this band
 *  checks the population against POSTGRES, where an import adds nothing because
 *  the row is already there. a1.03 measures it off the SEED, and a CARRY is
 *  what puts a row into the seed. The first run of this merge carried fifteen
 *  gendered nouns and moved four of a1.03's printed figures with every other
 *  gate green.
 * ═══════════════════════════════════════════════════════════════════════ */
{
  if (DISPLAY_ONLY_IDS.length !== EXPECTED_DISPLAY_ONLY) die(`${DISPLAY_ONLY_IDS.length} display-only rows, expected ${EXPECTED_DISPLAY_ONLY}`);
  if (ITEM_IMPORT_IDS.length !== EXPECTED_ITEM_IMPORTS) die(`${ITEM_IMPORT_IDS.length} item imports, expected ${EXPECTED_ITEM_IMPORTS}`);
  // No display-only row may be an itemId or reach a tranche.
  const leaked = DISPLAY_ONLY_IDS.filter((id) => PREPOSITIONS_LIEU_ITEM_IDS.includes(id));
  if (leaked.length) die(`${leaked.length} display-only row(s) are itemIds: ${leaked.join(', ')}`);
  const released = new Set(PREPOSITIONS_LIEU_TRANCHES.flat());
  const leakedT = DISPLAY_ONLY_IDS.filter((id) => released.has(id));
  if (leakedT.length) die(`${leakedT.length} display-only row(s) are in a tranche: ${leakedT.join(', ')}`);
  // Every display-only row IS a gendered single word, or the list is wrong.
  for (const id of DISPLAY_ONLY_IDS) {
    const r = PREPOSITIONS_LIEU_ROWS[id];
    if (!r) die(`${id} is display-only and is not in the manifest`);
    if (!(r as { gender?: string }).gender) die(`${id} is display-only and carries no gender, so it did not need to be`);
  }
  // A RE-MERGE CLEANS UP AFTER THE ONE BEFORE IT. The first run of this merge
  // carried all thirty-seven imports and introduced nine gendered nouns into
  // the seed. Six of the fifteen were there already and are somebody else's;
  // the rest are removed here IF no lesson in the seed references them.
  // THIS lesson's copy in the seed is about to be replaced, so its itemIds are
  // not a reason to keep a row. Without this the cleanup sees the nine rows
  // still referenced by the version it is overwriting and refuses to move.
  const referenced = new Set(seed.lessons.filter((l) => l.id !== LESSON.id).flatMap((l) => l.itemIds ?? []));
  const introduced = DISPLAY_ONLY_IDS
    .filter((id) => !DISPLAY_ONLY_ALREADY_IN_SEED.includes(id))
    .filter((id) => seed.items.some((i) => i.id === id))
    .filter((id) => !referenced.has(id));
  if (introduced.length) {
    console.log(`  cleanup       ${introduced.length} display-only row(s) left in the seed by an earlier run of this merge, referenced by no lesson, removed`);
    seed.items = seed.items.filter((i) => !introduced.includes(i.id));
  }
  const stuck = DISPLAY_ONLY_IDS
    .filter((id) => !DISPLAY_ONLY_ALREADY_IN_SEED.includes(id))
    .filter((id) => seed.items.some((i) => i.id === id));
  if (stuck.length) die(`${stuck.length} display-only row(s) are in the seed and a lesson references them: ${stuck.join(', ')}`);

  // The measurement itself, through the real function.
  const before = endingPopulation(seed.items as never).length;
  const after = endingPopulation([...seed.items, ...CARRIED, ...AUTHORED_ITEMS] as never).length;
  if (before !== A103_SEED_POPULATION) {
    console.log(`  !! a1.03's seed population is ${before} and this build measured ${A103_SEED_POPULATION}. Somebody else has moved it.`);
  }
  if (after !== before) die(`this merge moves a1.03's ending population from ${before} rows to ${after}. Invariants §5: withdraw rather than argue.`);
  console.log(`  a1.03         ending population unchanged at ${before} rows in the SEED; ${DISPLAY_ONLY_IDS.length} gendered nouns printed and not carried`);
}

const MUST_NOT_DISTURB = seed.lessons.filter((l) => l.id !== LESSON.id).map((l) => l.id).sort();
const UNITS_BEFORE = seed.units.length;
const MINE = new Set([...AUTHORED_IDS, ...IMPORTED_IDS]);
const UNTOUCHED_BEFORE = new Map(
  seed.items.filter((i) => !MINE.has(i.id)).map((i) => [i.id, JSON.stringify(i)] as const),
);

/* ══════════════════════════════════════════════════════════════════════════
 *  EVERY GUARD THE BATCH RUNS ON THE CONTENT RUNS HERE TOO
 * ═══════════════════════════════════════════════════════════════════════ */

const quizSection = LESSON.sections.find((s) => s.type === 'quiz');
if (!quizSection) die('the lesson has no quiz section');
const qs = quizQuestions(quizSection);
const byId = (id: string) => LESSON.sections.find((s) => (s as { id?: string }).id === id);
const sectionIds = LESSON.sections.map((s) => (s as { id?: string }).id ?? '');

if (PREPOSITIONS_LIEU.length !== EXPECTED_AUTHORED) die(`${PREPOSITIONS_LIEU.length} authored rows, expected ${EXPECTED_AUTHORED}`);
if (IMPORTED_IDS.length !== EXPECTED_IMPORTED) die(`${IMPORTED_IDS.length} imported rows, expected ${EXPECTED_IMPORTED}`);
if (LESSON.sections.length !== EXPECTED_SECTIONS) die(`${LESSON.sections.length} sections, expected ${EXPECTED_SECTIONS}`);
if ((LESSON.acts ?? []).length !== EXPECTED_ACTS) die(`${(LESSON.acts ?? []).length} acts, expected ${EXPECTED_ACTS}`);
if (qs.length !== EXPECTED_QUESTIONS) die(`${qs.length} questions, expected ${EXPECTED_QUESTIONS}`);
if (Object.keys(PREPOSITIONS_LIEU_TERMS).length !== EXPECTED_TERMS) die(`${Object.keys(PREPOSITIONS_LIEU_TERMS).length} terms, expected ${EXPECTED_TERMS}`);
if (ALL_REPAIRS.length !== EXPECTED_REPAIRS) die(`${ALL_REPAIRS.length} repairs, expected ${EXPECTED_REPAIRS}`);
if (ALL_REPAIRS.filter((r) => r.blind).length !== EXPECTED_REPAIRS_BLIND) die('the blind-repair count has drifted');
if (ALL_REPAIRS.filter((r) => r.house).length !== EXPECTED_REPAIRS_HOUSE) die('the house-repair count has drifted');
if (RESPELL_ADDITIONS.length !== 0) die('RESPELL_ADDITIONS is asserted empty and is not');
if (Object.keys(AUTHORED_HEADWORDS).length !== 0) die('this build authors zero headwords');
if (LESSON.sections.filter((s) => s.type === 'quiz').length !== 1) die('ONE quiz section');
if (LESSON.sections.filter((s) => s.type === 'trapDrill').length !== EXPECTED_TRAP_DRILLS) die('the trapDrill count has drifted');

/* The four kinds, row by row, and the three rows credited to another unit.
 *
 * FOUR AND THREE ARE LITERALS. Found by mutation: a loop over KIND_ORDER
 * agrees with itself whatever KIND_ORDER says, so dropping a kind out of the
 * grid passed this layer, and setting an owner to null skipped its own check.
 * a2.16 §3: assert the literal, because a back-reference is not a variable. */
{
  const four = byId(FOUR_SECTION_ID) as { type?: string; rows?: { cells: string[]; detail?: { body?: string } }[] } | undefined;
  if (four?.type !== 'tapTable') die(`${FOUR_SECTION_ID} is not a tapTable`);
  if (KIND_ORDER.length !== 4) die(`${KIND_ORDER.length} kinds and there are four`);
  if ((four.rows ?? []).length !== 4) die(`the grid has ${(four.rows ?? []).length} rows and there are four kinds`);
  KIND_ORDER.forEach((k, i) => {
    const cells = four.rows![i]!.cells;
    if (cells[0] !== KIND_LABEL[k] || cells[1] !== KIND_WORD[k] || cells[2] !== KIND_EXAMPLE[k]) {
      die(`grid row ${i} is ${JSON.stringify(cells)} and the corpus says ${JSON.stringify([KIND_LABEL[k], KIND_WORD[k], KIND_EXAMPLE[k]])}`);
    }
    const owner = KIND_OWNER[k];
    if (owner && !hasPhrase(four.rows![i]!.detail?.body ?? '', owner)) die(`grid row ${i} is ${owner}'s and does not name it`);
  });
  const credited = KIND_ORDER.filter((k) => KIND_OWNER[k] !== null).length;
  if (credited !== 3) die(`${credited} of the four kinds credit another unit and three of them are somebody else's`);
  if (KIND_OWNER.country !== COUNTRY_UNIT) die(`the country row is credited to ${String(KIND_OWNER.country)} and it is ${COUNTRY_UNIT}'s`);
  if (KIND_OWNER.person !== null) die('the person row is this lesson\'s own and it credits another unit');
}

/* The Owns. */
{
  const article = byId(ARTICLE_SECTION_ID) as { type?: string; rows?: { cells: string[] }[] } | undefined;
  if (article?.type !== 'tapTable') die(`${ARTICLE_SECTION_ID} is not a tapTable`);
  ARTICLE_TABLE.forEach((r, i) => {
    const cells = article.rows![i]!.cells;
    if (cells[0] !== r.word || cells[1] !== r.withLe || cells[2] !== r.withLa) {
      die(`article row ${i} renders ${JSON.stringify(cells)} and the table says ${JSON.stringify([r.word, r.withLe, r.withLa])}`);
    }
  });
  const keeps = ARTICLE_TABLE.filter((r) => r.behaviour === 'keeps');
  if (keeps.length !== 1 || keeps[0]!.word !== 'chez') die('exactly one row keeps the article and it is chez');
  if (keeps[0]!.withLe !== 'chez le' || keeps[0]!.withLa !== 'chez la') die('the chez row must print both forms in full');
  const dropsRows = ARTICLE_TABLE.filter((r) => r.behaviour === 'drops');
  if (dropsRows.length !== 1 || dropsRows[0]!.word !== 'en') die('exactly one row drops the article and it is en');
  // THE CELLS, NOT JUST THE LABEL. Found by mutation: giving en `en le` and
  // `en la` left the behaviour reading `drops` and this layer let it through.
  if (dropsRows[0]!.withLe !== 'en' || dropsRows[0]!.withLa !== 'en') {
    die(`the en row prints ${JSON.stringify([dropsRows[0]!.withLe, dropsRows[0]!.withLa])} and the article going away looks like en, en, en`);
  }
  const foldRows = ARTICLE_TABLE.filter((r) => r.behaviour === 'folds').map((r) => `${r.word}/${r.withLe}`);
  if (foldRows.join(',') !== 'à/au,de/du') die(`the folding rows are ${foldRows.join(',')} and they are à/au and de/du`);
}

/* chez never goes in front of a place. */
{
  const WRONG_FORMS = [...CHEZ_WRONG.map((w) => w.wrong), ...CHEZ_FOLD_WRONG.map((w) => w.wrong)];
  const legal = new Set<string>(WRONG_FORM_SECTIONS);
  for (const s of LESSON.sections) {
    const sid = (s as { id?: string }).id ?? '';
    if (legal.has(sid)) continue;
    const text = strings(s).join('\n');
    for (const w of WRONG_FORMS) if (hasPhrase(text, w)) die(`${sid} contains the wrong form ${JSON.stringify(w)}`);
  }
  for (const [label, v] of [['sheets', LESSON.sheets ?? []], ['terms', LESSON.terms ?? {}], ['intro', LESSON.intro ?? '']] as const) {
    for (const w of WRONG_FORMS) if (hasPhrase(strings(v).join('\n'), w)) die(`${label} contains the wrong form ${JSON.stringify(w)}`);
  }
  for (const r of PREPOSITIONS_LIEU) for (const w of WRONG_FORMS) if (hasPhrase(r.fr, w)) die(`${r.id} is a corpus row holding ${JSON.stringify(w)}`);
  const homes = LESSON.sections.filter((s) => legal.has((s as { id?: string }).id ?? ''));
  for (const w of WRONG_FORMS) if (!homes.some((s) => strings(s).some((x) => hasPhrase(x, w)))) die(`the wrong form ${JSON.stringify(w)} appears nowhere`);

  // THE SHAPE, NOT THE LIST. Found by mutation: « chez la gare » is not one of
  // the six strings and went straight through this layer into the reference
  // sheet. A learner error a guard can only see in the shapes somebody thought
  // of is not guarded.
  for (const line of CHEZ_PLACE_MUST_FIRE) if (!CHEZ_PLACE_SHAPE.test(line)) die(`CHEZ_PLACE_SHAPE does not fire on ${JSON.stringify(line)}`);
  for (const line of CHEZ_PLACE_MUST_NOT_FIRE) if (CHEZ_PLACE_SHAPE.test(line)) die(`CHEZ_PLACE_SHAPE fires on ${JSON.stringify(line)}`);
  for (const s of LESSON.sections) {
    const sid = (s as { id?: string }).id ?? '';
    if (legal.has(sid)) continue;
    for (const line of strings(s)) if (CHEZ_PLACE_SHAPE.test(line)) die(`${sid} puts chez in front of a place: ${JSON.stringify(line)}`);
  }
  for (const v of [LESSON.sheets ?? [], LESSON.terms ?? {}, LESSON.intro ?? '']) {
    for (const line of strings(v)) if (CHEZ_PLACE_SHAPE.test(line)) die(`chez is in front of a place off the sections: ${JSON.stringify(line)}`);
  }
  for (const r of PREPOSITIONS_LIEU) if (CHEZ_PLACE_SHAPE.test(r.fr)) die(`${r.id} puts chez in front of a place`);

  // AND NO AUTHORED ROW MAY RE-STATE AN IMPORTED ONE. The duplicate-fr check is
  // per THEME, so re-authoring a country collides with nothing.
  const importedFrs = new Map(IMPORTED.map((i) => [i.fr.toLowerCase(), i.id] as const));
  for (const r of PREPOSITIONS_LIEU) {
    const clash = importedFrs.get(r.fr.toLowerCase());
    if (clash) die(`${r.id} authors ${JSON.stringify(r.fr)}, which this lesson already imports as ${clash}`);
  }
}

/* a1.22's ground. */
for (const id of COUNTRY_IDS) if (!IMPORTED_IDS.includes(id)) die(`${id} is a country and is not imported`);
const learnerText = [
  ...strings(LESSON.sections), ...strings(LESSON.sheets ?? []), ...strings(LESSON.terms ?? {}),
  LESSON.intro ?? '', ...strings(LESSON.overview ?? {}),
  ...strings(LESSON.acts ?? []), ...strings(LESSON.drills ?? []),
].join('\n');
for (const w of COUNTRY_FORBIDDEN) if (hasPhrase(learnerText, w)) die(`${JSON.stringify(w)} is on a learner surface and it is ${COUNTRY_UNIT}'s`);
if (!hasPhrase(learnerText, COUNTRY_UNIT)) die(`no surface names ${COUNTRY_UNIT}`);

/* a2.18's ground. */
for (const s of TIME_MUST_FIRE) if (!TIME_SHAPE.test(s)) die(`TIME_SHAPE does not fire on ${JSON.stringify(s)}`);
for (const s of TIME_MUST_NOT_FIRE) if (TIME_SHAPE.test(s)) die(`TIME_SHAPE fires on ${JSON.stringify(s)}`);
for (const line of strings(LESSON.sections).concat(strings(LESSON.sheets ?? []), strings(LESSON.terms ?? {}), [LESSON.intro ?? ''])) {
  if (TIME_SHAPE.test(line)) die(`a temporal en or dans reached a screen: ${JSON.stringify(line)}`);
  for (const t of TIME_FORBIDDEN) if (hasPhrase(line, t)) die(`${JSON.stringify(t)} is ${TIME_UNIT}'s`);
}
if (!hasPhrase(learnerText, TIME_UNIT)) die(`${TIME_UNIT} is never named`);

/* a1.21's five, on production surfaces only. */
{
  const PRODUCTION_TYPES = new Set(['cardDeck', 'flashcards', 'practice', 'dictation', 'groupDrill', 'trapDrill', 'quiz', 'reviewDeck', 'scenario']);
  for (const s of LESSON.sections) {
    if (!PRODUCTION_TYPES.has(s.type)) continue;
    for (const p of A121_PREPOSITIONS) {
      if (hasPhrase(display(s).join('\n'), p)) die(`${(s as { id?: string }).id} drills ${JSON.stringify(p)}, which is ${CONTRACTION_UNIT}'s`);
    }
  }
  const recapHomes = LESSON.sections.filter((s) => A121_PREPOSITIONS.some((p) => hasPhrase(strings(s).join('\n'), p)));
  if (recapHomes.length !== 1 || (recapHomes[0] as { id?: string }).id !== ROUNDUP_SECTION_ID) {
    die(`the one recap of ${CONTRACTION_UNIT}'s prepositions belongs in ${ROUNDUP_SECTION_ID}`);
  }
}

/* The generalisation set. */
{
  const legal = new Set([UNSEEN_SECTION_ID, QUIZ_SECTION_ID]);
  for (const s of LESSON.sections) {
    const sid = (s as { id?: string }).id ?? '';
    if (legal.has(sid)) continue;
    for (const w of UNSEEN_WORDS) if (hasPhrase(strings(s).join('\n'), w)) die(`${sid} names ${JSON.stringify(w)}, which must be unseen`);
  }
  for (const u of UNSEEN) {
    if (IMPORTED.some((i) => i.fr.toLowerCase() === u.fr.toLowerCase())) die(`${u.fr} is imported and is a generalisation answer`);
    if (PREPOSITIONS_LIEU.some((r) => hasPhrase(r.fr, u.fr))) die(`${u.fr} is in an authored row and is a generalisation answer`);
  }
}

/* The trapDrills. */
{
  type TrapLike = { id?: string; swipe?: boolean; say?: string; size?: string; steps?: { kind: string; gate?: boolean }[]; audio?: { recordingId?: string }; cards?: { fr: string }[] };
  const RECORDED = new Map((LESSON.audio?.recorded ?? []).map((r) => [r.id, r.clipIds ?? []]));
  for (const t of LESSON.sections.filter((s) => s.type === 'trapDrill') as unknown as TrapLike[]) {
    const kinds = (t.steps ?? []).map((s) => s.kind).join('>');
    if (kinds !== 'rule>cards>audio>drill') die(`${t.id} steps are ${JSON.stringify(kinds)}`);
    if (!t.swipe) die(`${t.id} has no swipe`);
    if (!t.say) die(`${t.id} has no say`);
    if (t.size) die(`${t.id} carries a size and the stepped branch sizes off steps.length`);
    if (!(t.steps ?? []).some((s) => s.kind === 'drill' && s.gate)) die(`${t.id} drill step is not gated`);
    const clips = RECORDED.get(t.audio?.recordingId ?? '');
    if (!clips) die(`${t.id} points at a recording the lesson does not brief`);
    for (const card of t.cards ?? []) if (!clips.includes(card.fr)) die(`${t.id}'s audio step plays ${JSON.stringify(card.fr)} and its take does not contain it`);
  }
}

/* The dictée, through the real function. */
for (const id of PREPOSITIONS_LIEU_DICTEE_IDS) {
  const r = PREPOSITIONS_LIEU.find((x) => x.id === id)!;
  if (dicteeMode(r.fr) !== 'letters') die(`${id} "${r.fr}" spells in WORD mode`);
}
if (PREPOSITIONS_LIEU.some((r) => dicteeMode(r.fr) === 'letters' && !r.drills.includes('dictation'))) {
  die('a row is in LETTERS mode and carries no dictation drill');
}

/* Nothing by ear. */
if (qs.some((q) => q.format === 'listenChoose')) die('a listenChoose question reached the quiz');
if (LESSON.sections.some((s) => s.type === 'listening')) die('a listening section reached the lesson');

/* The reframe, house copy and the term rows.
 *
 * THE REFRAME IS ASSERTED AS A LITERAL. Found by mutation: comparing
 * `LESSON.reframe` to the imported `REFRAME` compares the content to itself and
 * a softened reframe went through this layer. Invariants §5. */
const REFRAME_LITERAL = 'À folds the article in. En throws it out. Chez leaves it alone.';
if (REFRAME !== REFRAME_LITERAL) die(`the reframe has been reworded to ${JSON.stringify(REFRAME)}. If that is deliberate, change it here too and say why in the report.`);
if (LESSON.reframe !== REFRAME) die('the lesson reframe and the corpus constant disagree');
{
  const uses = countPhrase(learnerText, REFRAME);
  const inSections = LESSON.sections.filter((s) => strings(s).some((x) => x.includes(REFRAME))).length;
  if (inSections < 3) die(`the reframe is carried by ${inSections} sections and the density validator wants three`);
  console.log(`  reframe       ${uses} uses across ${inSections} sections`);
}
{
  const houseText = display(LESSON.sections).concat(
    display(LESSON.sheets ?? []), display(LESSON.terms ?? {}), [LESSON.intro ?? ''],
    display(LESSON.overview ?? {}), display(LESSON.acts ?? []), display(LESSON.drills ?? []),
    PREPOSITIONS_LIEU.flatMap((r) => [r.fr, r.en, r.notes ?? '']),
  ).join('\n');
  const proseText = prose(LESSON.sections).concat(
    prose(LESSON.sheets ?? []), prose(LESSON.terms ?? {}), [LESSON.intro ?? ''],
    prose(LESSON.overview ?? {}), prose(LESSON.acts ?? []), prose(LESSON.drills ?? []),
  ).join('\n');
  for (const bad of ['—', '–', '‿']) if (houseText.includes(bad)) die(`${JSON.stringify(bad)} is on a learner surface`);
  for (const bad of ['honest', 'honesty', 'honestly']) if (hasPhrase(houseText, bad)) die(`${JSON.stringify(bad)} is banned`);
  const plain = countPhrase(houseText, 'place word') + countPhrase(houseText, 'small word') + countPhrase(houseText, 'the word');
  const technical = countPhrase(houseText, 'preposition');
  if (technical > plain) die(`the technical word appears ${technical} times and the plain phrase ${plain}`);

  // THE JARGON WALK. Found by mutation: this layer had NO jargon check at all,
  // so `locative` in `intro` and `the locative complement` in a cardDeck `sub`
  // both went through it. a2.16 §4: the merge is the layer that runs when
  // somebody re-merges without re-applying, and a merge thinner than the batch
  // has stopped being a check. The list is the batch's, and every entry is
  // checked in its -s plural because hasPhrase is boundary-exact (a2.15 §3).
  const JARGON = [
    'prepositional', 'locative', 'complement', 'animate', 'inanimate',
    'toponym', 'contraction rule', 'suppression', 'elision rule', 'partitive',
    'determiner', 'inflection', 'inflected', 'paradigm', 'morpheme',
    'morphology', 'lexeme', 'phoneme', 'phonological', 'orthography',
    'agent noun', 'nasal vowel', 'first person', 'second person',
    'third person', 'productive rule', 'categorisation', 'oblique',
  ];
  for (const j of JARGON) {
    for (const form of [j, `${j}s`]) {
      if (hasPhrase(proseText, form)) die(`the jargon ${JSON.stringify(form)} is on a learner surface`);
      if (hasPhrase(houseText, form)) die(`the jargon ${JSON.stringify(form)} is on a learner surface (display walk)`);
    }
  }
  // `intro` IS PINNED IN ITS OWN ASSERTION.
  if (!LESSON.intro || LESSON.intro.length < 100) die('intro is drawn on two screens and is missing or too short');
  for (const j of JARGON) for (const form of [j, `${j}s`]) if (hasPhrase(LESSON.intro, form)) die(`intro holds the jargon ${JSON.stringify(form)}`);
  if (!hasPhrase(LESSON.intro, 'chez')) die('intro does not name chez');
}
for (const s of LESSON.sections) {
  const t = (s as { terms?: string[] }).terms ?? [];
  if (t.length > 3) die(`${(s as { id?: string }).id} declares ${t.length} term chips`);
  if (t.length && rowWidth(t) > TERM_ROW_MAX) die(`${(s as { id?: string }).id} chip row is ${rowWidth(t)} characters`);
  for (const name of t) if (!PREPOSITIONS_LIEU_TERMS[name]) die(`${(s as { id?: string }).id} names an unknown term ${JSON.stringify(name)}`);
}
{
  const used = new Set(LESSON.sections.flatMap((s) => (s as { terms?: string[] }).terms ?? []));
  const orphanTerms = Object.keys(PREPOSITIONS_LIEU_TERMS).filter((k) => !used.has(k));
  if (orphanTerms.length) die(`terms named by no section: ${orphanTerms.join(', ')}`);
}
for (const s of LESSON.sections) {
  const t = (s as { title?: string }).title ?? '';
  if (t.length > TITLE_MAX) die(`the title ${JSON.stringify(t)} is ${t.length} characters and the hub cuts at ${TITLE_MAX}`);
}

/* Acts, reachability and the quiz. */
{
  const claimed = new Map<string, string>();
  for (const a of PREPOSITIONS_LIEU_ACTS) {
    for (const sid of a.sections) {
      if (!sectionIds.includes(sid)) die(`act ${a.id} names ${sid} and there is no such section`);
      if (claimed.has(sid)) die(`${sid} is claimed twice`);
      claimed.set(sid, a.id);
    }
  }
  for (const sid of sectionIds) if (!claimed.has(sid)) die(`${sid} is in no act`);
  const ownsSections = (PREPOSITIONS_LIEU_ACTS.find((a) => a.id === 'act2')?.sections.length ?? 0)
    + (PREPOSITIONS_LIEU_ACTS.find((a) => a.id === 'act3')?.sections.length ?? 0);
  const paradigmSections = 1 + (PREPOSITIONS_LIEU_ACTS.find((a) => a.id === 'act4')?.sections.length ?? 0);
  if (ownsSections <= paradigmSections) die(`the Owns has ${ownsSections} sections and the paradigm has ${paradigmSections}`);
}
{
  const mcq = qs.filter((q) => q.format === 'mcq').length;
  if (mcq > qs.length / 2) die(`${mcq} of ${qs.length} are mcq`);
  if (qs.some((q) => !q.why)) die('a question has no why');
  if (qs.some((q) => !q.ref || !sectionIds.includes(q.ref))) die('a question ref names no section');
  const closed = qs.filter((q) => typeof q.correct === 'number');
  const slots = new Map<number, number>();
  for (const q of closed) { const s = Number(q.correct); slots.set(s, (slots.get(s) ?? 0) + 1); }
  for (const [slot, n] of slots) if (n / closed.length > 0.4) die(`slot ${slot} holds ${n} of ${closed.length} closed answers`);
  for (const q of qs) {
    if (q.format !== 'typeIn' && q.format !== 'errorSpot') continue;
    if (!matchesAccept(q.answer!, q.accept ?? [])) die(`the ${q.format} question ${JSON.stringify(q.q)} does not accept its own answer`);
  }
  const rounds = (quizSection as unknown as { rounds: { id: string; targets: string[] }[] }).rounds;
  const leads = rounds.map((r) => r.targets[0]);
  if (new Set(leads).size !== leads.length) die('two rounds lead on the same trigger');
  const triggerIds = new Set(PREPOSITIONS_LIEU_ERROR_TRIGGERS.map((t) => t.id));
  const unled = [...triggerIds].filter((t) => !leads.includes(t));
  if (unled.length) die(`triggers leading no round: ${unled.join(', ')}`);
  const drillIds = new Set(PREPOSITIONS_LIEU_DRILLS.map((d) => d.id));
  for (const t of PREPOSITIONS_LIEU_ERROR_TRIGGERS) {
    if (!drillIds.has(t.drill)) die(`${t.id} names an unknown drill`);
    if (t.retest && !drillIds.has(t.retest)) die(`${t.id} names an unknown retest`);
  }
}
{
  const scenario = byId(SCENARIO_SECTION_ID) as { turns?: { userEn?: string; alts?: unknown[] }[] } | undefined;
  for (const [i, t] of (scenario?.turns ?? []).entries()) {
    if (!t.userEn) die(`scenario turn ${i} has no userEn`);
    if ((t.alts ?? []).length < 2) die(`scenario turn ${i} has fewer than two alts`);
  }
}
{
  if (PREPOSITIONS_LIEU_SHEETS[0]!.sections!.some((s) => s.type === 'cheatSheet')) die('a cheatSheet inside a reference sheet draws nothing');
  if (PREPOSITIONS_LIEU_SHEETS[0]!.sections!.some((s) => (s as { cols?: string[] }).cols && (s as { cols: string[] }).cols.length > 3)) die('a four-column table inside a sheet clips');
}

/* The false positive, asserted as a negative. */
if (!hasPlainNasalFor(MEME_FALSE_POSITIVE.word, MEME_FALSE_POSITIVE.flagged)) die(`the checker no longer flags ${MEME_FALSE_POSITIVE.flagged}`);
if (hasPlainNasalFor(MEME_FALSE_POSITIVE.word, MEME_FALSE_POSITIVE.clean)) die(`the checker now flags ${MEME_FALSE_POSITIVE.clean}`);

/* Schema and density. */
for (const it of AUTHORED_ITEMS) {
  const issues = validateItem(it);
  if (issues.length) die(`${it.id}: ${formatIssues(issues)}`);
}
{
  const li = validateLesson(LESSON);
  if (li.length) die(`the lesson does not validate:\n${formatIssues(li)}`);
  const d = validateDensity(LESSON);
  if (d.length) die(`density:\n${formatDensity(d)}`);
}
for (const r of PREPOSITIONS_LIEU) {
  if (hasPlainNasalFor(r.fr, r.respell ?? '')) die(`${r.id} is flagged by the nasal checker`);
  if (!isMine(r.id)) die(`${r.id} is outside ${ID_BLOCK.from}..${ID_BLOCK.to}`);
}
console.log(`  guards        every content guard the batch runs has run here too`);

/* ── The unit ────────────────────────────────────────────────────────────── */

const unit = seed.units.find((u) => u.id === UNIT_ID);
if (!unit) die(`the seed has no unit ${UNIT_ID}`);
if (unit.seq !== UNIT.seq) die(`unit ${UNIT_ID} is seq ${unit.seq} and the corpus says ${UNIT.seq}`);
if (unit.title !== UNIT.title) die(`unit ${UNIT_ID} title has changed: ${JSON.stringify(unit.title)}`);
if (unit.sub !== UNIT.sub) die(`unit ${UNIT_ID} sub has changed: ${JSON.stringify(unit.sub)}`);
if (unit.canDo !== UNIT.canDo) die(`unit ${UNIT_ID} canDo has changed: ${JSON.stringify(unit.canDo)}`);
const expectedTag = `A2 · LEÇON ${String(unit.seq).padStart(2, '0')}`;
if (LESSON.tag !== expectedTag) die(`the lesson tag is ${JSON.stringify(LESSON.tag)} and the unit sits at seq ${unit.seq}`);

/* ── Write ───────────────────────────────────────────────────────────────── */

const existing = seed.lessons.find((l) => l.id === LESSON.id);
if (existing) {
  if (existing.version > LESSON.version) {
    die(`the seed carries v${existing.version} and this source is v${LESSON.version}. Move the LESSON's own version counter forward (not seed.version).`);
  }
  console.warn(
    `\n! seed.json already carries ${LESSON.id}`
    + `\n  seed: v${existing.version}, ${existing.sections.length} sections, ${existing.itemIds.length} items`
    + `\n  here: v${LESSON.version}, ${LESSON.sections.length} sections, ${LESSON.itemIds.length} items`
    + '\n  Overwriting with the authored copy.\n',
  );
}

const itemsById = new Map(seed.items.map((i) => [i.id, i] as const));
let added = 0;
let updatedItems = 0;
let carriedNew = 0;
/** The imported rows FIRST, so an authored id could never be shadowed by one. */
for (const it of CARRIED) {
  if (!itemsById.has(it.id)) carriedNew += 1;
  itemsById.set(it.id, it);
}
for (const it of AUTHORED_ITEMS) {
  if (itemsById.has(it.id)) updatedItems += 1; else added += 1;
  itemsById.set(it.id, it);
}

/** EVERY RELEASED ROW CAN BE SERVED AS THE DECK THAT RELEASES IT EXPECTS. */
{
  const missing = LESSON.itemIds.filter((id) => !itemsById.has(id));
  if (missing.length) die(`itemId(s) resolve to nothing in the seed: ${missing.join(', ')}`);
  const released = new Set(PREPOSITIONS_LIEU_TRANCHES.flat());
  const short = [...released].filter((id) => !(itemsById.get(id)!.drills ?? []).includes('flashcard'));
  if (short.length) die(`row(s) released to the hub with no flashcard drill: ${short.join(', ')}`);
  const unspeakable = PREPOSITIONS_LIEU_SPEAK_IDS.filter((id) => !(itemsById.get(id)!.drills ?? []).includes('voiceflash'));
  if (unspeakable.length) die(`speak target(s) with no voiceflash, which the mic cannot score: ${unspeakable.join(', ')}`);
  const undictatable = PREPOSITIONS_LIEU_DICTEE_IDS.filter((id) => !(itemsById.get(id)!.drills ?? []).includes('dictation'));
  if (undictatable.length) die(`dictée target(s) with no dictation drill: ${undictatable.join(', ')}`);
  const gendered = [...AUTHORED_IDS].map((id) => itemsById.get(id)).filter((r) => r && (r as { gender?: string }).gender);
  if (gendered.length) die(`authored row(s) carrying a gender: ${gendered.map((r) => r!.id).join(', ')}`);
  /* NO DUPLICATE fr INSIDE THE THEME, computed the way flashhub-coverage does:
     article stripped, per theme. NOT scoped to this build's rows, because two
     rows sharing an fr is one card served twice whoever authored them. */
  const strip = (s: string) => s.replace(/^(le |la |les |l'|l’|un |une |des |du |de la )/i, '').toLowerCase().trim();
  const inTheme = [...itemsById.values()].filter((i) => i.theme === THEME);
  const byFr = new Map<string, string[]>();
  for (const i of inTheme) byFr.set(strip(i.fr), [...(byFr.get(strip(i.fr)) ?? []), i.id]);
  const dupes = [...byFr.entries()].filter(([, ids]) => ids.length > 1);
  if (dupes.length) die(`${dupes.length} duplicate fr inside ${THEME}: ${dupes.slice(0, 5).map(([k, ids]) => `${k} (${ids.join(', ')})`).join('; ')}`);
}

const nextUnit = { ...unit, lessonIds: [...new Set([...(unit.lessonIds ?? []), LESSON.id])] };

const out: Seed = {
  ...seed,
  items: [...itemsById.values()],
  lessons: [...seed.lessons.filter((l) => l.id !== LESSON.id), LESSON],
  units: seed.units.map((u) => (u.id === UNIT_ID ? nextUnit : u)),
};

/* ── Nothing else moved ──────────────────────────────────────────────────── */

const survivors = out.lessons.filter((l) => l.id !== LESSON.id).map((l) => l.id).sort();
const lost = MUST_NOT_DISTURB.filter((id) => !survivors.includes(id));
if (lost.length) die(`this merge would DROP lesson(s): ${lost.join(', ')}`);
const gained = survivors.filter((id) => !MUST_NOT_DISTURB.includes(id));
if (gained.length) die(`this merge would ADD lesson(s) it does not own: ${gained.join(', ')}`);
if (out.units.length !== UNITS_BEFORE) die(`unit count moved from ${UNITS_BEFORE} to ${out.units.length}`);
if (out.version !== seed.version) die('seed.version moved. It is the OTA snapshot number and a merge must never touch it.');

/** The refused rows are still absent, unless somebody else put them there. */
{
  const before = new Set(seed.items.map((i) => i.id));
  const introduced = READ_NOT_IMPORTED.map((r) => r.id)
    .filter((id) => !before.has(id) && out.items.some((i) => i.id === id));
  if (introduced.length) die(`this merge would carry row(s) it refused into the seed: ${introduced.join(', ')}`);
}

/** Every row this merge does not own comes out BYTE-IDENTICAL. */
{
  const changed: string[] = [];
  const dropped: string[] = [];
  const after = new Map(out.items.map((i) => [i.id, i] as const));
  for (const [id, before] of UNTOUCHED_BEFORE) {
    const now = after.get(id);
    if (!now) { dropped.push(id); continue; }
    if (JSON.stringify(now) !== before) changed.push(id);
  }
  if (dropped.length) die(`this merge would DROP ${dropped.length} row(s) it does not own: ${dropped.slice(0, 6).join(', ')}`);
  if (changed.length) die(`this merge would EDIT ${changed.length} row(s) it does not own: ${changed.slice(0, 6).join(', ')}`);
  console.log(`  ${UNTOUCHED_BEFORE.size} rows this merge does not own: byte-identical`);
}

console.log(
  `\n  ${added} item(s) authored and added, ${updatedItems} updated`
  + `\n    ZERO headwords authored. Every noun and every person is imported.`
  + `\n  ${carriedNew} row(s) newly CARRIED through the seed cut so no card draws blank`
  + `\n    out of ${new Set(MANIFEST_ROWS.map((r) => r.theme)).size} themes`
  + `\n    ${ALL_REPAIRS.length} repaired (${ALL_REPAIRS.filter((r) => r.blind).length} carrying a nasal the checker cannot see, ${ALL_REPAIRS.filter((r) => r.house).length} a house convention)`
  + `\n    ${RESPELL_ADDITIONS.length} given a respelling they never had, ${DRILL_ADDITIONS.length} given drills`
  + `\n  ${READ_NOT_IMPORTED.length} refused, none of them in the seed`
  + `\n  lesson ${LESSON.id} v${LESSON.version}: ${LESSON.sections.length} sections, ${EXPECTED_ACTS} acts, ${qs.length} questions, ${LESSON.itemIds.length} items`
  + `\n  dictée: ${PREPOSITIONS_LIEU_DICTEE_IDS.length} targets, all LETTERS`,
);

if (DRY_RUN) {
  console.log('\n  DRY RUN: every guard passed, seed.json not written.\n');
} else {
  /* CANONICAL FORMATTING. `JSON.stringify(x, null, 2)` with a trailing newline is
     the shape every other merge writes. */
  writeFileSync(SEED, `${JSON.stringify(out, null, 2)}\n`, 'utf8');
  console.log(`\n  wrote ${SEED}`);
  console.log(`  seed now: ${out.items.length} items, ${out.lessons.length} lessons, ${out.units.length} units, version ${out.version} (unchanged)\n`);
  console.log('  NEXT: run the suite, then pnpm content:parity before any publish.\n');
}
console.log(`  itemIds resolved: ${PREPOSITIONS_LIEU_ITEM_IDS.length}\n`);
