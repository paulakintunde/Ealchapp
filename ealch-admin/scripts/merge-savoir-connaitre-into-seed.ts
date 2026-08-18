/* Merges a2.14.l1 "Irréguliers 4 : savoir & connaître" into
 * ealch-v2/src/content/seed.json.
 *
 *   pnpm tsx scripts/merge-savoir-connaitre-into-seed.ts --dry-run
 *   pnpm tsx scripts/merge-savoir-connaitre-into-seed.ts
 *
 * RUN THE BATCH FIRST. Postgres is canonical and the seed is a CUT of it; the
 * order is always apply, then merge, then publish only when both agree.
 *
 * ── WHY THE CARRY EXISTS ──────────────────────────────────────────────────
 *
 * The seed holds roughly a quarter of the database. This lesson imports out of
 * SIX themes and several of them sit outside SEED_CUT.themes. A lesson whose
 * `itemIds` resolve to nothing renders empty cards on a device, so the imported
 * rows are carried through the cut rather than assumed present. a2.11 found that
 * NEITHER of the two rows its lesson leaned on hardest was in the seed.
 *
 * ── THE TWO TRANSFORMS, AND WHY THEY LIVE HERE TOO ────────────────────────
 *
 * The manifest is a read of Postgres taken BEFORE the batch ran, and the batch
 * then changes two kinds of thing about rows it does not own:
 *
 *   1 respelling repaired   koh-NETR -> koh-NEHTR on the connaître naming form
 *   2 drills added          the two evidence rows gain `flashcard`
 *
 * Carrying the manifest verbatim would put the pre-batch value in the seed while
 * Postgres held the post-batch one. Both are applied here, from the same
 * constants, and the result is checked field by field.
 *
 * ── THE DRILL-ORDER TRAP, INHERITED FROM a2.12 ────────────────────────────
 *
 * `drills` is a Postgres ENUM array and `array_agg(distinct e order by e)`
 * orders by DECLARATION order, not alphabetically. a2.12's merge sorted the same
 * values as STRINGS and shipped `flashcard, review, voiceflash` into the seed
 * while the database held `flashcard, voiceflash, review`. Same set, same
 * meaning, and a divergence on rows the build owned, invisible to 3,195 tests
 * because nothing compares drill ORDER. `drillOrder()` below sorts by
 * `DRILL_KINDS`, which `enum-parity.test.ts` already pins to the enum.
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
import { dicteeMode } from '../../ealch-v2/src/content/dictee.logic.ts';
import { namesUnitLabel } from './data/_unit-ref.ts';
import {
  ASSERTED_RESPELLINGS, AUTHORED_IDS as AUTHORED_ID_LIST, BLIND_NASAL_ROWS,
  CHROME_DECISION, CITED_UNITS, CONNAITRE_CLAUSE_SHAPE, CONTRAST_UNIT,
  DICTATION_IDS, DRILL_ADDITIONS, EXPECTED_ACTS, EXPECTED_QUESTIONS,
  EXPECTED_REFRAME_USES, EXPECTED_SECTIONS, FAMILY_MEMBER, FAMILY_NOT_NAMED,
  FAMILY_UNIT, FLAT_PERMITTED, FLAT_SPELLING_SHAPE, FRAMES, IMPOSSIBLE,
  IMPOSSIBLE_STRINGS, OWNS_ACT_ID, PARADIGM, PARADIGM_IDS, PAST_SHAPE,
  POUVOIR_FORBIDDEN_SHAPE, READ_NOT_IMPORTED, RESPELL_ADDITIONS,
  RESPELL_REPAIRS_INVISIBLE, RESPELL_REPAIRS_STEM, RESPELL_REPAIRS_VISIBLE,
  SAVOIR_CONNAITRE, SINGULAR_SPELLINGS, TRAP_PAIR, UNIT, VERB_ORDER,
  paradigmIds, toItem,
} from './data/savoir-connaitre-corpus.ts';
import {
  EVIDENCE_IDS, IMPORTED_BY_ID, READ_ONLY_ROWS, SOURCE_THEMES,
} from './data/savoir-connaitre-imported.ts';
import {
  ADJACENT_PAIR, EVIDENCE_SECTION_ID, FAMILY_SECTION_ID, GOALS_SECTION_ID,
  GRID_SECTION_ID, IMPOSSIBLE_SECTION_ID, NEXT_SECTION_ID, PLACE_SECTION_ID,
  POUVOIR_SECTION_ID, REFRAME, ROUNDUP_SECTION_ID, SAVOIR_CONNAITRE_ACTS,
  SAVOIR_CONNAITRE_ITEM_IDS, SAVOIR_CONNAITRE_LESSON,
  SAVOIR_CONNAITRE_SPEAK_IDS, SHEET_ID, SITUATIONS_SECTION_ID,
} from './data/savoir-connaitre-lesson.ts';

const here = dirname(fileURLToPath(import.meta.url));
const SEED = join(here, '../../ealch-v2/src/content/seed.json');
const DRY_RUN = process.argv.includes('--dry-run');

const LESSON: Lesson = SAVOIR_CONNAITRE_LESSON;
const UNIT_ID = UNIT.id;

const AUTHORED_ITEMS: Item[] = SAVOIR_CONNAITRE.map(toItem);
const AUTHORED_IDS = new Set(AUTHORED_ID_LIST);
const RESPELL_REPAIRS = [...RESPELL_REPAIRS_VISIBLE, ...RESPELL_REPAIRS_INVISIBLE, ...RESPELL_REPAIRS_STEM];

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
function prose(v: unknown, out: string[] = []): string[] {
  if (typeof v === 'string') out.push(v);
  else if (Array.isArray(v)) for (const x of v) prose(x, out);
  else if (v && typeof v === 'object') {
    for (const [k, x] of Object.entries(v)) if (!NOTATION_KEYS.has(k)) prose(x, out);
  }
  return out;
}

/** Machine keys. Section ids and accept-lists are not learner surfaces; a guard
 *  that reads them fires on legitimate content. See the batch's `display()`. */
const MACHINE_KEYS = new Set([
  'id', 'ref', 'sheetId', 'itemId', 'itemIds', 'targets', 'detectOn', 'drill',
  'retest', 'accept', 'recordingId', 'audioRef', 'unitId', 'scenarioId',
]);
function display(v: unknown, out: string[] = []): string[] {
  if (typeof v === 'string') out.push(v);
  else if (Array.isArray(v)) for (const x of v) display(x, out);
  else if (v && typeof v === 'object') {
    for (const [k, x] of Object.entries(v)) if (!MACHINE_KEYS.has(k)) display(x, out);
  }
  return out;
}

/** Accent-aware. `\b` is ASCII-only in JavaScript and returns zero on a trailing
 *  accent, which looks exactly like an absence. It matters here: `connaît` ends
 *  in `t` and `connaître` does not. */
function hasPhrase(hay: string, needle: string): boolean {
  const isWord = (c: string) => /[\p{L}\p{N}'’-]/u.test(c);
  const h = hay.toLowerCase();
  const n = needle.toLowerCase();
  let i = 0;
  while ((i = h.indexOf(n, i)) !== -1) {
    if (!isWord(i === 0 ? '' : h[i - 1]) && !isWord(h[i + n.length] ?? '')) return true;
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

/* ─── THE CARRIED ROWS, WITH THE BATCH'S OWN TRANSFORMS APPLIED ──────────── */

const REPAIR_BY_ID = new Map(RESPELL_REPAIRS.map((r) => [r.id, r] as const));
const DRILL_BY_ID = new Map(DRILL_ADDITIONS.map((d) => [d.id, d] as const));

/** Order a drill array the way POSTGRES does: `DRILL_KINDS` order, which is the
 *  enum's declaration order, NOT alphabetical. See the header. */
const drillOrder = (ds: Item['drills']): Item['drills'] =>
  [...(ds ?? [])].sort((x, y) => DRILL_KINDS.indexOf(x) - DRILL_KINDS.indexOf(y)) as Item['drills'];

const MANIFEST_ROWS = [...IMPORTED_BY_ID.values()];

const CARRIED: Item[] = MANIFEST_ROWS.map((row) => {
  const fix = REPAIR_BY_ID.get(row.id);
  const drill = DRILL_BY_ID.get(row.id);
  if (!fix && !drill) return row;

  let respell = row.respell;
  if (fix) {
    if (!String(respell ?? '').includes(fix.from)) {
      die(`${row.id} is recorded as ${JSON.stringify(respell)} and the repair expects to find ${JSON.stringify(fix.from)} in it. Regenerate the manifest.`);
    }
    respell = String(respell).split(fix.from).join(fix.to);
  }
  const drills = drill && !(row.drills ?? []).includes(drill.add as Item['drills'][number])
    ? drillOrder([...(row.drills ?? []), drill.add as Item['drills'][number]])
    : row.drills;
  return { ...row, respell, drills };
});

/** Every transform landed on the row it names, and on no other. */
{
  const byIdMap = new Map(CARRIED.map((r) => [r.id, r] as const));
  for (const r of RESPELL_REPAIRS) {
    const now = String(byIdMap.get(r.id)?.respell ?? '');
    if (!now.includes(r.to)) die(`the carry did not apply the repair to ${r.id}: ${JSON.stringify(now)}`);
    if (r.from !== r.to && now.includes(r.from)) die(`the carry left the unrepaired value in ${r.id}: ${JSON.stringify(now)}`);
  }
  for (const d of DRILL_ADDITIONS) {
    if (!(byIdMap.get(d.id)?.drills ?? []).includes(d.add as Item['drills'][number])) die(`the carry did not add the ${d.add} drill to ${d.id}`);
  }
  if (RESPELL_ADDITIONS.length) die(`this build records ${RESPELL_ADDITIONS.length} respell additions and the merge has no path for them`);
  const touched = new Set([...REPAIR_BY_ID.keys(), ...DRILL_BY_ID.keys()]);
  const untouched = CARRIED.filter((r) => !touched.has(r.id));
  const changed = untouched.filter((r) => JSON.stringify(r) !== JSON.stringify(MANIFEST_ROWS.find((x) => x.id === r.id)));
  if (changed.length) die(`the carry changed ${changed.length} row(s) it does not own: ${changed.map((r) => r.id).join(', ')}`);
  console.log(`\n  carry: ${CARRIED.length} rows, ${RESPELL_REPAIRS.length} repaired, ${DRILL_ADDITIONS.length} given a drill, ${untouched.length} byte-identical to the manifest`);
}

/** AND THE REPAIRED ROWS COME OUT CLEAN. The nasal checker is run on the carry
 *  rather than on the manifest, because the carry is what reaches a screen. */
{
  const flagged = CARRIED.filter((r) => r.respell && hasPlainNasalFor(r.fr, r.respell));
  if (flagged.length) {
    die(`${flagged.length} carried row(s) are flagged by the nasal checker after the carry:\n  ${flagged.map((r) => `${r.id}  ${r.respell}`).join('\n  ')}`);
  }
}

type Seed = { version: number; items: Item[]; lessons: Lesson[]; units: Unit[] };
const seed = JSON.parse(readFileSync(SEED, 'utf8')) as Seed;

console.log(`  merging ${LESSON.id} into seed.json${DRY_RUN ? '  (DRY RUN)' : ''}`);
console.log(`  seed version ${seed.version}: ${seed.items.length} items, ${seed.lessons.length} lessons, ${seed.units.length} units`);

/* ── The lessons this merge MUST NOT DISTURB, BY NAME ─────────────────────
 *
 * Named rather than counted. A count alone lets a one-for-one swap through, and
 * that is exactly the shape of the accident this project has already had.     */
const MUST_NOT_DISTURB = seed.lessons.filter((l) => l.id !== LESSON.id).map((l) => l.id).sort();
const UNITS_BEFORE = seed.units.length;
const MINE = new Set<string>([...AUTHORED_IDS, ...CARRIED.map((r) => r.id)]);
const UNTOUCHED_BEFORE = new Map(
  seed.items.filter((i) => !MINE.has(i.id)).map((i) => [i.id, JSON.stringify(i)] as const),
);

/** THE READ-ONLY ROWS ARE NOT IN `MINE`. The one that matters most is
 *  fr.sons.liaisons.057: it holds `koh-NEHS`, which is the value this build
 *  ships for `connaissent`, and it is refused because its respelling carries
 *  U+203F. The house form was read off it and the row stays where it is. */
{
  const carried = READ_ONLY_ROWS.filter((r) => MINE.has(r.id)).map((r) => `${r.fr} (${r.id})`);
  if (carried.length) die(`read-only row(s) in the carry set: ${carried.join(', ')}. They are read, never written.`);
}

/* ── Everything the batch checked, checked again against the POST-MERGE seed ─ */

const itemIssues = AUTHORED_ITEMS.flatMap((it) => validateItem(it, it.id));
if (itemIssues.length) die(formatIssues(itemIssues));
const carriedIssues = CARRIED.flatMap((it) => validateItem(it, it.id));
if (carriedIssues.length) die(`the rows carried through the cut do not validate:\n${formatIssues(carriedIssues)}`);

const lessonIssues = validateLesson(LESSON, LESSON.id);
if (lessonIssues.length) die(formatIssues(lessonIssues));

const POST_MERGE_IDS = new Set([
  ...seed.items.map((i) => i.id),
  ...AUTHORED_ITEMS.map((i) => i.id),
  ...CARRIED.map((i) => i.id),
]);
const density = validateDensity(LESSON, POST_MERGE_IDS);
if (density.length) die(formatDensity(density));

const missing = LESSON.itemIds.filter((id) => !POST_MERGE_IDS.has(id));
if (missing.length) {
  die(
    `${missing.length} itemId(s) will NOT be in the seed after this merge: ${missing.slice(0, 6).join(', ')}\n`
    + `  A lesson whose itemIds resolve to nothing renders empty cards on a device. This lesson imports out of\n`
    + `  ${SOURCE_THEMES.length} themes and several are outside SEED_CUT.themes, so the carry is not optional.`,
  );
}

/* ── The claims that ARE the lesson ──────────────────────────────────────── */

if (LESSON.sections.length !== EXPECTED_SECTIONS) die(`${LESSON.sections.length} sections, expected ${EXPECTED_SECTIONS}`);
if ((LESSON.acts ?? []).length !== EXPECTED_ACTS) die(`${(LESSON.acts ?? []).length} acts, expected ${EXPECTED_ACTS}`);
const quiz = LESSON.sections.find((s) => s.type === 'quiz');
if (!quiz) die('the lesson has no quiz');
const qs = quizQuestions(quiz);
if (qs.length !== EXPECTED_QUESTIONS) die(`${qs.length} quiz questions, expected ${EXPECTED_QUESTIONS}`);
if (LESSON.sections.filter((s) => s.type === 'quiz').length !== 1) die('more than one quiz; lessonPager renders the first and drops the rest');

/* THE JARGON WALK INCLUDES intro AND overview, in the merge as well as in the
   batch. a2.11 shipped "third person" on the lesson cover because every guard in
   the band walked sections, sheets and terms and not this. Ledger §0. */
const learnerText = [
  ...prose(LESSON.sections), ...prose(LESSON.sheets), ...prose(LESSON.terms),
  ...prose(LESSON.drills), LESSON.intro ?? '', ...prose(LESSON.overview), ...prose(LESSON.acts),
].join('  ');
if (!LESSON.intro || LESSON.intro.length < 40) die('the lesson intro is missing or too short to be the cover copy');
if (learnerText.includes('—')) die('an em dash reached a learner surface');
if (hasPhrase(learnerText, 'honest') || hasPhrase(learnerText, 'honesty')) die('"honest" is banned from authored content');
if (strings(LESSON).some((s) => s.includes('‿'))) die('U+203F UNDERTIE reached the lesson');

const hits = countPhrase(learnerText, REFRAME);
if (hits !== EXPECTED_REFRAME_USES) die(`the reframe appears ${hits} times, expected exactly ${EXPECTED_REFRAME_USES}`);
if (LESSON.reframe !== REFRAME) die('the lesson reframe field disagrees with the corpus');

const uncited = CITED_UNITS.filter((u) => !namesUnitLabel(learnerText, u));
if (uncited.length) die(`cited units that appear nowhere: ${uncited.join(', ')}`);

/* ── THE REFRAME, RE-DERIVED. The merge re-checks rather than trusting the
   batch, because the two run at different times and against different sources. */
{
  const savoirRows = SAVOIR_CONNAITRE.filter((r) => r.verb === 'savoir');
  const connRows = SAVOIR_CONNAITRE.filter((r) => r.verb === 'connaître');
  if (savoirRows.some((r) => r.complement === 'name')) die('a savoir row takes a bare name; this lesson authors none');
  if (connRows.some((r) => r.complement === 'clause')) die('a connaître row takes a clause; there is no such sentence in French');
  if (!savoirRows.filter((r) => r.complement === 'clause').length) die('no savoir row takes a clause, so the Owns has no evidence');
  if (!connRows.filter((r) => r.complement === 'thing' || r.complement === 'name').length) die('no connaître row lands on a thing');
}

/* THE IMPOSSIBLE SENTENCE HAS EXACTLY TWO HOMES, AND BOTH ARE STILL THERE. */
{
  const offenders = strings(LESSON).filter((s) => CONNAITRE_CLAUSE_SHAPE.test(s) && !IMPOSSIBLE_STRINGS.some((w) => s.includes(w)));
  if (offenders.length) die(`a connaître form stands before a clause opener outside the rejection:\n  ${offenders.map((s) => JSON.stringify(s.slice(0, 120))).join('\n  ')}`);
  const joined = strings(LESSON).join('\n');
  for (const w of IMPOSSIBLE_STRINGS) if (!joined.includes(w)) die(`${JSON.stringify(w)} is permitted and appears nowhere; the lesson has stopped teaching the rejection`);
}

/* THE SINGULAR ARITHMETIC, ON BOTH VERBS. */
for (const v of VERB_ORDER) {
  const forms = [0, 1, 2].map((i) => PARADIGM[i].forms[v]);
  if (new Set(forms).size !== SINGULAR_SPELLINGS) die(`${v} has ${new Set(forms).size} distinct singular spellings, the lesson says ${SINGULAR_SPELLINGS}`);
  if (forms[0] !== forms[1] || forms[2] === forms[0]) die(`${v}: je and tu must be identical and il must differ`);
}
if (/three spellings/i.test(prose(LESSON).join('  '))) die('a surface says "three spellings"; two of the three singular cells are spelled identically');

/* THE RESPELLINGS ASSERTED BY NAME, and the one the checker cannot see. */
for (const a of ASSERTED_RESPELLINGS) {
  const cell = PARADIGM.find((p) => p.forms.savoir === a.form || p.forms['connaître'] === a.form);
  if (!cell) die(`${a.form} is asserted by name and is not a form in either paradigm`);
  const stored = cell.forms.savoir === a.form ? cell.respells.savoir : cell.respells['connaître'];
  if (stored !== a.respell) die(`the respelling of ${a.form} is ${JSON.stringify(stored)} and the corpus asserts ${JSON.stringify(a.respell)}.\n  ${a.why}`);
}
for (const b of BLIND_NASAL_ROWS) {
  const row = SAVOIR_CONNAITRE.find((r) => r.id === b.id);
  if (!row || !(row.respell ?? '').includes(b.token)) {
    die(`${b.id} no longer carries ${JSON.stringify(b.token)}.\n  ${b.why}\n  hasPlainNasalFor CANNOT see this one, so this assertion is the only guard on it.`);
  }
}
for (const r of SAVOIR_CONNAITRE) {
  if (hasPlainNasalFor(r.fr, r.respell ?? '')) die(`${r.id} closes a nasal with a plain n: ${JSON.stringify(r.respell)}`);
}

/* THE CIRCUMFLEX. */
{
  const flat = display(LESSON).filter((s) => FLAT_SPELLING_SHAPE.test(s) && !FLAT_PERMITTED.includes(s as never));
  if (flat.length) die(`a flat -aître spelling reached a display surface: ${flat.map((s) => JSON.stringify(s.slice(0, 90))).join(', ')}`);
  const withHat = PARADIGM.filter((p) => p.forms['connaître'].includes('î'));
  if (withHat.length !== 1) die(`the circumflex is on ${withHat.length} cells; the lesson teaches it on one`);
}

/* WHAT THIS LESSON MAY NOT TEACH. */
{
  const past = strings(LESSON).filter((s) => PAST_SHAPE.test(s));
  if (past.length) die(`a past form of savoir or connaître reached a surface: ${past.map((s) => JSON.stringify(s.slice(0, 110))).join('\n  ')}`);
  const pouvoir = strings(LESSON).filter((s) => POUVOIR_FORBIDDEN_SHAPE.test(s));
  if (pouvoir.length) die(`a form of pouvoir this lesson does not own reached a surface: ${pouvoir.map((s) => JSON.stringify(s.slice(0, 110))).join('\n  ')}`);
  for (const f of FAMILY_NOT_NAMED) if (hasPhrase(prose(LESSON).join('  '), f)) die(`${f} is named; ${FAMILY_UNIT} owns the family principle`);
}

/* THE HOUSE CHROME IS SHIPPED AND NAMED. a2.13 handed this decision here. */
{
  const byIdSec = (id: string) => LESSON.sections.find((s) => (s as { id?: string }).id === id);
  const goals = byIdSec(GOALS_SECTION_ID) as { frSub?: string } | undefined;
  const roundup = byIdSec(ROUNDUP_SECTION_ID) as { frSub?: string } | undefined;
  if (goals?.frSub !== CHROME_DECISION.goalsHeading) die(`${GOALS_SECTION_ID} frSub is ${JSON.stringify(goals?.frSub)}, expected the house heading`);
  if (roundup?.frSub !== CHROME_DECISION.roundupHeading) die(`${ROUNDUP_SECTION_ID} frSub is ${JSON.stringify(roundup?.frSub)}, expected the house heading`);
  if (!strings(roundup).some((s) => s !== CHROME_DECISION.roundupHeading && s.includes(CHROME_DECISION.roundupHeading))) {
    die(`${ROUNDUP_SECTION_ID} uses the house heading and does not NAME it in its prose. The decision was to ship it AND pay it off.`);
  }
}

/* ── THE LAYOUT CLAIMS, BY SECTION ID ────────────────────────────────────── */

const byId = (id: string) => LESSON.sections.find((s) => (s as { id?: string }).id === id);

const grid = byId(GRID_SECTION_ID) as { examples?: { fr: string }[] } | undefined;
if (!grid) die(`${GRID_SECTION_ID} is missing`);
if ((grid.examples ?? []).length !== PARADIGM.length) die(`${GRID_SECTION_ID} has ${(grid.examples ?? []).length} lines, expected ${PARADIGM.length}`);
(grid.examples ?? []).forEach((ex, i) => {
  for (const v of VERB_ORDER) {
    if (!hasPhrase(ex.fr, PARADIGM[i].forms[v])) die(`${GRID_SECTION_ID} line ${i} is missing the ${v} form ${PARADIGM[i].forms[v]}`);
    if (!hasPhrase(ex.fr, FRAMES[v].complement)) die(`${GRID_SECTION_ID} line ${i} is missing the ${v} frame ${FRAMES[v].complement}`);
  }
});

/* THE ADJACENT PAIR, BY INDEX. */
{
  const nextSec = byId(NEXT_SECTION_ID) as { cards?: { fr?: string }[] } | undefined;
  if (!nextSec) die(`${NEXT_SECTION_ID} is missing`);
  const frs = (nextSec.cards ?? []).map((c) => c.fr ?? '');
  const a = SAVOIR_CONNAITRE.find((r) => r.id === ADJACENT_PAIR[0])!;
  const b = SAVOIR_CONNAITRE.find((r) => r.id === ADJACENT_PAIR[1])!;
  const ia = frs.indexOf(a.fr);
  const ib = frs.indexOf(b.fr);
  if (ia < 0 || ib < 0 || Math.abs(ia - ib) !== 1) die(`${NEXT_SECTION_ID} does not put the savoir and connaître items adjacent (${ia}, ${ib})`);
}

/* THE TWO FRAMES DIFFER, AND EACH COLUMN USES ONE. */
for (const v of VERB_ORDER) {
  for (const id of paradigmIds(v)) {
    const row = SAVOIR_CONNAITRE.find((r) => r.id === id)!;
    const tail = row.fr.replace(/[.!?…]\s*$/u, '').trim().split(/\s+/u).pop();
    if (tail !== FRAMES[v].complement) die(`${id} does not end on the ${v} frame: ${JSON.stringify(row.fr)}`);
  }
}
if (FRAMES.savoir.complement === FRAMES['connaître'].complement) die('the two columns share one frame word; the complement is the teaching');

for (const id of [SITUATIONS_SECTION_ID, PLACE_SECTION_ID, POUVOIR_SECTION_ID, IMPOSSIBLE_SECTION_ID, FAMILY_SECTION_ID, EVIDENCE_SECTION_ID]) {
  if (!byId(id)) die(`${id} is missing`);
}
if (!namesUnitLabel(prose(byId(POUVOIR_SECTION_ID)).join('  '), CONTRAST_UNIT)) die(`${POUVOIR_SECTION_ID} does not name ${CONTRAST_UNIT}`);
if (!namesUnitLabel(prose(byId(FAMILY_SECTION_ID)).join('  '), FAMILY_UNIT)) die(`${FAMILY_SECTION_ID} does not hand the principle to ${FAMILY_UNIT}`);
if (!strings(byId(IMPOSSIBLE_SECTION_ID)).some((s) => s.includes(IMPOSSIBLE.wrong))) die(`${IMPOSSIBLE_SECTION_ID} does not show the impossible sentence`);

/* THE MINIMAL PAIR. */
{
  const a = SAVOIR_CONNAITRE.find((r) => r.id === TRAP_PAIR.skill)!;
  const b = SAVOIR_CONNAITRE.find((r) => r.id === TRAP_PAIR.permission)!;
  if (a.fr.split(/\s+/u).slice(2).join(' ') !== b.fr.split(/\s+/u).slice(2).join(' ')) {
    die('the savoir/pouvoir pair is not minimal; one word must change and nothing else may move');
  }
}

/* THE OWNS ACT IS THE HEAVIEST, ALONE. */
{
  const sizes = SAVOIR_CONNAITRE_ACTS.map((a) => a.sections.length);
  const ix = SAVOIR_CONNAITRE_ACTS.findIndex((a) => a.id === OWNS_ACT_ID);
  const max = Math.max(...sizes);
  if (sizes[ix] !== max || sizes.filter((n) => n === max).length !== 1) {
    die(`the Owns act (${OWNS_ACT_ID}) is not the heaviest alone: ${sizes.map((n, i) => `${SAVOIR_CONNAITRE_ACTS[i].id}:${n}`).join(' ')}`);
  }
  if (sizes[1] >= sizes[4]) die(`the paradigm act (${sizes[1]}) is not smaller than the production act (${sizes[4]})`);
  const inActs = SAVOIR_CONNAITRE_ACTS.flatMap((a) => a.sections);
  const ids = LESSON.sections.map((s) => (s as { id?: string }).id).filter(Boolean) as string[];
  if (inActs.join('|') !== ids.join('|')) die('the act running order does not match the section order');
}

/* THE SHEET. */
{
  const DRAWABLE = new Set(['teach', 'letterGrid', 'table']);
  const sh = (LESSON.sheets ?? [])[0];
  if (!sh || sh.id !== SHEET_ID) die(`sheet id ${sh?.id}, expected ${SHEET_ID}`);
  for (const s of sh.sections ?? []) {
    const t = (s as { type?: string }).type ?? '';
    if (!DRAWABLE.has(t)) die(`the sheet holds a "${t}" section; ReferenceSheet.tsx draws teach, letterGrid and table and nothing else`);
  }
  const declared = new Set((LESSON.sheets ?? []).map((s) => s.id));
  for (const s of LESSON.sections) {
    const ref = (s as { sheetId?: string }).sheetId;
    if (ref && !declared.has(ref)) die(`${(s as { id?: string }).id} names sheet ${ref}, which this lesson does not declare`);
  }
}

/* THE DICTÉE. */
for (const id of DICTATION_IDS) {
  const row = SAVOIR_CONNAITRE.find((r) => r.id === id);
  if (!row) die(`${id} is a dictation target and is not an authored row`);
  if (dicteeMode(row.fr) !== 'letters') die(`${id} ${JSON.stringify(row.fr)} spells in WORD mode and tests nothing`);
}

/* ── The unit ────────────────────────────────────────────────────────────── */

const unit = seed.units.find((u) => u.id === UNIT_ID) as (Unit & { lessonIds?: string[]; seq?: string | number; sub?: string; canDo?: string }) | undefined;
if (!unit) die(`unit ${UNIT_ID} is not in the seed, so its lesson cannot be attached`);
if (unit.title !== UNIT.title) die(`unit ${UNIT_ID} title has changed: ${JSON.stringify(unit.title)}`);
if (unit.sub !== UNIT.sub) die(`unit ${UNIT_ID} sub has changed: ${JSON.stringify(unit.sub)}`);
if (unit.canDo !== UNIT.canDo) die(`unit ${UNIT_ID} canDo has changed: ${JSON.stringify(unit.canDo)}`);
const expectedTag = `A2 · LEÇON ${String(unit.seq).padStart(2, '0')}`;
if (LESSON.tag !== expectedTag) die(`the lesson tag is ${JSON.stringify(LESSON.tag)} and the unit sits at seq ${JSON.stringify(unit.seq)}, so the header draws ${JSON.stringify(expectedTag)}`);

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
    + `\n  Overwriting with the authored copy.\n`,
  );
}

const itemsById = new Map(seed.items.map((i) => [i.id, i] as const));
let added = 0;
let updatedItems = 0;
let carriedNew = 0;
/** The imported rows FIRST, so an authored id could never be shadowed by one. */
for (const it of CARRIED) {
  if (!itemsById.has(it.id)) carriedNew++;
  itemsById.set(it.id, it);
}
for (const it of AUTHORED_ITEMS) {
  if (itemsById.has(it.id)) updatedItems++; else added++;
  itemsById.set(it.id, it);
}

/** EVERY RELEASED ROW CAN BE SERVED AS THE DECK THAT RELEASES IT EXPECTS. This
 *  is the guard that found a2.13's missing `flashcard`, on a row whose sister
 *  already had one, and it is why the two evidence rows here take one. */
{
  const short = LESSON.itemIds.filter((id) => !(itemsById.get(id)!.drills ?? []).includes('flashcard'));
  if (short.length) die(`row(s) released to the hub with no flashcard drill: ${short.join(', ')}`);
  const unspeakable = SAVOIR_CONNAITRE_SPEAK_IDS.filter((id) => !(itemsById.get(id)!.drills ?? []).includes('voiceflash'));
  if (unspeakable.length) die(`speak target(s) with no voiceflash, which the mic cannot score: ${unspeakable.join(', ')}`);
  const undictatable = DICTATION_IDS.filter((id) => !(itemsById.get(id)!.drills ?? []).includes('dictation'));
  if (undictatable.length) die(`dictée target(s) with no dictation drill: ${undictatable.join(', ')}`);
  const gendered = [...MINE].map((id) => itemsById.get(id)).filter((r) => r && (r as { gender?: string }).gender);
  if (gendered.length) die(`row(s) in this lesson carrying a gender: ${gendered.map((r) => r!.id).join(', ')}. They would join a1.03's ending population.`);
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
  const introduced = READ_ONLY_ROWS.map((r) => r.id)
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
  + `\n    ${PARADIGM_IDS.length} grid sentences on TWO frames (${FRAMES.savoir.complement} · ${FRAMES['connaître'].complement}), ${AUTHORED_ITEMS.length - PARADIGM_IDS.length} others`
  + `\n  ${carriedNew} row(s) newly CARRIED through the seed cut so no card draws blank`
  + `\n    out of ${SOURCE_THEMES.length} themes: ${SOURCE_THEMES.join(', ')}`
  + `\n  ${READ_ONLY_ROWS.length} refused, none of them in the seed`
  + `\n  lesson ${LESSON.id} v${LESSON.version}: ${LESSON.sections.length} sections, ${EXPECTED_ACTS} acts, ${qs.length} questions, ${LESSON.itemIds.length} items`
  + `\n  dictée: ${DICTATION_IDS.length} targets, all LETTERS; the connaître plural is over the limit at any object length`
  + `\n  evidence: ${EVIDENCE_IDS.length} published rows, the only respelled ones in ${SOURCE_THEMES.length} themes that do not carry U+203F`,
);

if (DRY_RUN) {
  console.log('\n  DRY RUN: every guard passed, seed.json not written.\n');
} else {
  /* CANONICAL FORMATTING. `JSON.stringify(x, null, 2)` with a trailing newline is
     the shape every other merge writes, and a whole-file rewrite in any other
     shape produces a diff nobody can read. */
  writeFileSync(SEED, `${JSON.stringify(out, null, 2)}\n`, 'utf8');
  console.log(`\n  wrote ${SEED}`);
  console.log(`  seed now: ${out.items.length} items, ${out.lessons.length} lessons, ${out.units.length} units, version ${out.version} (unchanged)\n`);
  console.log('  NEXT: run the suite, then pnpm content:parity before any publish.\n');
}
