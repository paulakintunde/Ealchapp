// a2.36.l1 « Les pronoms toniques » — merge into ealch-v2/src/content/seed.json.
// **DRAFT. NOT RUN.**
//
//   pnpm tsx scripts/merge-pronoms-toniques-into-seed.ts --dry   read and report, write nothing
//   pnpm tsx scripts/merge-pronoms-toniques-into-seed.ts         write (after the batch --apply)
//
// POSTGRES FIRST, SEED SECOND. Every row is pulled FROM POSTGRES, so this dies
// with « not in Postgres » until `author-pronoms-toniques-batch.ts --apply` has
// run. That is the draft's second safety: the merge cannot write a lesson whose
// rows were never applied.
//
// DIFFERS FROM a2.34's MERGE IN ONE PLACE: THE UNIT IS NEW. a2.34's unit was in
// the spine and the seed already; this one is not, so the merge CREATES
// `a2.36` in `seed.units` (shape copied from a2.35's seed row) rather than
// updating lessonIds on an existing one. Creating it is what trips
// `spine-drift.test.ts` and `a2-35-bilan.test.ts` (see the batch header):
// run the suite after, and expect those two to need a decision, not a patch.
//
// THE CARRY. 44 imports across 11 themes, most of them cut: the seed holds
// roughly a quarter of Postgres. The merge carries every referenced row so no
// card renders empty, and prints the a1.03 genre impact before writing (10 a1
// rows are carried).
//
// PREMIUM PACKS (2026-09-30). When seed-packs.json has rows, seed.json is only
// the free core and A2 is a paid band, so the unit, lesson and every carried
// row go into the LAYER through band-merge.logic.ts's mergeIntoPacksLayer (the
// skeleton unit into seed.json), exactly as b1-merge-into-seed.ts does. The
// same run carries the placement Paul chose: a2.36 at seq 35, the Review
// (a2.35) moved to seq 36, and a2.32.l1 re-read from Postgres, whose one
// printed « lesson 35 in A2 » now names the Review at 36. Both files are
// written, canonical, and read back.
//
// NEVER `git checkout` seed.json to undo this. Re-run the merge.
// DO NOT hand-bump `seed.version`: the publish step owns it.
import './env';
import { readFileSync, writeFileSync } from 'node:fs';
import { measureGenreImpact, reportGenreImpact } from './lib/genre-impact.ts';
import {
  ALL_ROWS, UNIT, THEME, IMPORT_ONLY_THEMES, IMPORTED, RESPELL_REPAIRS, REPAIR_IDS,
  NOT_IMPORTED, UNSEEN, TIE_GLYPH, DEMONSTRATIVE_PRONOUNS, PAIR_CELLS, FRAME_CELLS, REGISTER_PAIRS, EUX_PAIR,
} from './data/pronoms-toniques-corpus.ts';
import { LESSON, ITEM_IDS } from './data/pronoms-toniques-lesson.ts';
import { hasPlainNasalFor } from '../../ealch-v2/src/content/density.logic.ts';
import { PACKS_LAYER_PATH, composeTestCorpus, regimeOf } from '../../ealch-v2/src/content/seed-plus-packs.ts';
import { validateCorpus, type Corpus } from '../../ealch-v2/src/content/schema.ts';
import { mergeIntoPacksLayer } from './band-merge.logic.ts';

const SEED = new URL('../../ealch-v2/src/content/seed.json', import.meta.url);
const DRY = process.argv.includes('--dry');
/** Paul, 2026-09-30: a2.36 just before the Review, which moves to 36. */
const REVIEW_SEQ = 36;
const die: (m: string) => never = (m) => { console.error(`\n  STOP: ${m}\n`); process.exit(1); };

type Item = { id: string; theme?: string; fr?: string; en?: string; respell?: string | null; drills?: unknown; level?: string };
type Lesson = { id: string; unitId?: string };
type Unit = { id: string; seq?: number; lessonIds?: string[]; themes?: string[] | null; [k: string]: unknown };
type Seed = { version: number; units: Unit[]; lessons: Lesson[]; items: Item[]; [k: string]: unknown };

const toArray = (d: unknown): string[] =>
  Array.isArray(d) ? d as string[] : String(d ?? '').replace(/[{}"]/g, '').split(',').filter(Boolean);

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

const OMIT_IF_NULL = ['ipa', 'respell', 'notes', 'gender', 'example', 'cardType', 'prompt', 'skill', 'register', 'verbCheck', 'grammarPoints'];

/** Lessons this merge must not disturb, named. */
const MUST_SURVIVE = ['a1.05.l1', 'a1.18.l1', 'a2.04.l1', 'a2.24.l1', 'a2.08.l1', 'a2.34.l1', 'a2.35.l1', 'a2.35.l2', 'a1.03.l1'] as const;

async function main() {
  const seed = JSON.parse(readFileSync(SEED, 'utf8')) as Seed;
  const beforeItems = seed.items.length;
  const beforeLessons = seed.lessons.length;
  const beforeUnits = seed.units.length;
  console.log(`\n  seed v${seed.version}: ${beforeItems} items, ${beforeLessons} lessons, ${beforeUnits} units`);
  console.log(`  ${THEME} in seed before: ${seed.items.filter((i) => i.theme === THEME).length}`);
  for (const t of IMPORT_ONLY_THEMES) console.log(`  ${t} in seed before: ${seed.items.filter((i) => i.theme === t).length}`);

  const survivorsBefore = MUST_SURVIVE.filter((id) => seed.lessons.some((l) => l.id === id));
  const lessonWasThere = seed.lessons.some((l) => l.id === LESSON.id);
  const unitWasThere = seed.units.some((u) => u.id === UNIT.id);

  for (const n of NOT_IMPORTED) if (ITEM_IDS.includes(n.id)) die(`${n.id} is on the do-not-import list (${n.why})`);

  // The new unit's seq must not collide on the A2 trail.
  const clash = seed.units.filter((u) => u.id !== UNIT.id && u.id !== 'a2.35' && u.id.startsWith('a2.') && Number(u.seq) === UNIT.seq);
  if (clash.length) die(`seq ${UNIT.seq} is already held in the seed by ${clash.map((u) => u.id).join(', ')}`);

  const { Pool } = await import('pg');
  const pool = new Pool({ connectionString: process.env.DATABASE_URL, max: 1 });
  const c = await pool.connect();
  let carried: Item[] = [];
  let reviewUnit: Unit | null = null;
  let a232Lesson: (Lesson & Record<string, unknown>) | null = null;
  try {
    const wanted = [...new Set([...ALL_ROWS.map((r) => r.id), ...ITEM_IDS, ...REPAIR_IDS])];
    const r = await c.query<Item & { status: string; kind?: string; gender?: string | null }>(
      `select id, kind, level, theme, fr, en, ipa, respell, notes, tags, drills,
              gender, example, prompt, skill, register, version, status,
              audio_ref as "audioRef", card_type as "cardType",
              verb_check as "verbCheck", grammar_points as "grammarPoints"
         from content_items where id = any($1::text[])`, [wanted]);
    const missing = wanted.filter((w) => !r.rows.some((x) => x.id === w));
    if (missing.length) {
      die(`${missing.length} referenced row(s) are not in Postgres: ${missing.slice(0, 8).join(', ')}${missing.length > 8 ? ', ...' : ''}. `
        + 'Run `pnpm tsx scripts/author-pronoms-toniques-batch.ts --apply` FIRST. Postgres first, seed second.');
    }
    const unpublished = r.rows.filter((x) => x.status !== 'published');
    if (unpublished.length) die(`${unpublished.length} referenced row(s) are not published: ${unpublished.map((x) => x.id).join(', ')}`);

    // The lesson and the unit must already be in Postgres, exactly as authored.
    const lessonRow = await c.query<{ body: { version?: number } }>("select body from content_units where kind='lesson' and slug=$1", [LESSON.id]);
    if (!lessonRow.rowCount) die(`${LESSON.id} is not in content_units. Apply the batch first.`);
    const unitRow = await c.query<{ body: Unit }>("select body from content_units where kind='curriculum_unit' and body->>'id'=$1", [UNIT.id]);
    if (!unitRow.rowCount) die(`${UNIT.id} is not in content_units. Apply the batch first.`);
    if (Number(unitRow.rows[0].body.seq) !== UNIT.seq) die(`${UNIT.id} is seq ${unitRow.rows[0].body.seq} in Postgres and ${UNIT.seq} here`);
    // The placement's two neighbours, as Postgres holds them after the move.
    const reviewRow = await c.query<{ body: Unit }>("select body from content_units where kind='curriculum_unit' and body->>'id'='a2.35'");
    if (!reviewRow.rowCount) die('a2.35 is not in content_units');
    reviewUnit = reviewRow.rows[0].body;
    if (Number(reviewUnit.seq) !== REVIEW_SEQ) die(`a2.35 is seq ${reviewUnit.seq} in Postgres; move it to ${REVIEW_SEQ} first`);
    const a232Row = await c.query<{ body: Lesson & Record<string, unknown> }>("select body from content_units where kind='lesson' and slug='a2.32.l1'");
    if (!a232Row.rowCount) die('a2.32.l1 is not in content_units');
    a232Lesson = a232Row.rows[0].body;
    if (JSON.stringify(a232Lesson).includes('lesson 35 in A2')) die('a2.32.l1 still says « lesson 35 in A2 » in Postgres; patch it to 36 first');

    for (const rep of RESPELL_REPAIRS) {
      const row = r.rows.find((x) => x.id === rep.id)!;
      if (row.respell !== rep.to) die(`${rep.id} reads "${row.respell}" in Postgres; the repair says "${rep.to}". Apply the batch first.`);
      if (hasPlainNasalFor(row.fr ?? '', row.respell ?? '')) die(`${rep.id} is repaired and the checker still flags it`);
    }
    const gendered = r.rows.filter((x) => x.gender && x.kind === 'word' && !(x.fr ?? '').replace(/^(le |la |les |l'|un |une |des )/, '').includes(' '));
    if (gendered.length) die(`gendered single words about to be carried: ${gendered.map((x) => x.id).join(', ')}`);
    for (const x of r.rows) {
      const fr = x.fr ?? '';
      for (const d of DEMONSTRATIVE_PRONOUNS) if (hasWord(fr, d)) die(`${x.id} "${fr}" carries "${d}", a2.33's`);
      if (hasWord(fr, UNSEEN.word)) die(`${x.id} "${fr}" carries "${UNSEEN.word}", which must stay unseen`);
      if ((x.respell ?? '').includes(TIE_GLYPH)) die(`${x.id} carries a U+203F tie`);
    }

    carried = r.rows.map(({ status, ...rest }) => {
      const row: Record<string, unknown> = { ...rest, drills: toArray(rest.drills) };
      for (const k of OMIT_IF_NULL) if (row[k] === null || row[k] === undefined) delete row[k];
      row.audioRef = row.audioRef ?? null;
      return row as Item;
    });
    const inSeed = new Set(seed.items.map((i) => i.id));
    const byLevel: Record<string, number> = {};
    for (const x of carried) byLevel[x.level ?? '?'] = (byLevel[x.level ?? '?'] ?? 0) + 1;
    console.log(`\n  pulled ${carried.length} rows (authored ${ALL_ROWS.length}), ${carried.filter((x) => !inSeed.has(x.id)).length} new to the seed, by level ${JSON.stringify(byLevel)}`);
  } finally {
    c.release();
    await pool.end();
  }

  const layerRaw = (() => { try { return readFileSync(PACKS_LAYER_PATH, 'utf8'); } catch { return null; } })();
  const layer = layerRaw === null ? null : (JSON.parse(layerRaw) as Seed);
  if (regimeOf(layer as unknown as Corpus | null) === 'packs') {
    await mergePacks(seed, layer!, carried, reviewUnit!, a232Lesson!);
    return;
  }

  const byId = new Map(seed.items.map((i) => [i.id, i]));
  let added = 0, updated = 0;
  for (const row of carried) {
    if (byId.has(row.id)) {
      const target = byId.get(row.id)! as Record<string, unknown>;
      Object.assign(target, row);
      for (const k of OMIT_IF_NULL) if (target[k] === null || target[k] === undefined) delete target[k];
      target.audioRef = target.audioRef ?? null;
      updated++;
    } else { byId.set(row.id, row); added++; }
  }
  seed.items = [...byId.values()];   // NOT sorted: seed.json is not in id order

  const li = seed.lessons.findIndex((l) => l.id === LESSON.id);
  if (li >= 0) seed.lessons[li] = LESSON as unknown as Lesson;
  else seed.lessons.push(LESSON as unknown as Lesson);

  // THE NEW UNIT, shaped like a2.35's seed row (id, seq, sub, canDo, level,
  // title, track, lessonIds, prereqUnitIds). No `themes`: this build writes
  // into pronoms-essentiels, which the unit does not claim, like a2.34.
  const unitRow: Unit = {
    id: UNIT.id, seq: UNIT.seq, sub: UNIT.sub, canDo: UNIT.canDo, level: UNIT.level,
    title: UNIT.title, track: UNIT.track, lessonIds: [LESSON.id], prereqUnitIds: [...UNIT.prereqUnitIds],
  };
  const ui = seed.units.findIndex((u) => u.id === UNIT.id);
  if (ui >= 0) seed.units[ui] = { ...seed.units[ui], ...unitRow, lessonIds: [...new Set([...(seed.units[ui].lessonIds ?? []), LESSON.id])] };
  else seed.units.push(unitRow);

  reportGenreImpact(measureGenreImpact(JSON.parse(readFileSync(SEED, 'utf8')).items, seed.items, ALL_ROWS.map((r) => r.id)));

  if (DRY) {
    console.log(`\n  --dry: would add ${added} items, update ${updated}, ${lessonWasThere ? 'replace' : 'add'} ${LESSON.id}, ${unitWasThere ? 'update' : 'CREATE'} unit ${UNIT.id} at seq ${UNIT.seq}. Nothing written.\n`);
    return;
  }

  writeFileSync(SEED, `${JSON.stringify(seed, null, 2)}\n`, 'utf8');

  const after = JSON.parse(readFileSync(SEED, 'utf8')) as Seed;
  const ids = new Set(after.items.map((i) => i.id));
  const unreachable = ITEM_IDS.filter((i) => !ids.has(i));
  if (unreachable.length) die(`${unreachable.length} id(s) the lesson references are not in the seed: ${unreachable.slice(0, 10).join(', ')}`);
  const afterById = new Map(after.items.map((i) => [i.id, i]));
  for (const rep of RESPELL_REPAIRS) if (afterById.get(rep.id)?.respell !== rep.to) die(`${rep.id} did not reach the seed repaired`);
  for (const p of PAIR_CELLS) for (const id of [p.subj, p.str]) if (!afterById.get(id)) die(`${id} (layout 1) did not reach the seed`);
  for (const f of FRAME_CELLS) if (!afterById.get(f.id)) die(`${f.id} (layout 2, ${f.form}) did not reach the seed`);
  for (const p of REGISTER_PAIRS) for (const id of [p.written, p.spoken]) if (!afterById.get(id)) die(`${id} (layout 3) did not reach the seed`);
  for (const id of [EUX_PAIR.mixed, EUX_PAIR.women, ...IMPORTED.headwords]) if (!afterById.get(id)) die(`${id} did not reach the seed`);
  for (const id of survivorsBefore) if (!after.lessons.some((l) => l.id === id)) die(`${id} was in the seed before and is not now`);
  if (after.lessons.length !== beforeLessons + (lessonWasThere ? 0 : 1)) die('the lesson count moved by more than this merge');
  if (after.units.length !== beforeUnits + (unitWasThere ? 0 : 1)) die('the unit count moved by more than this merge');

  console.log(`\n  items: ${beforeItems} -> ${after.items.length} (+${added}, ${updated} updated)`);
  console.log(`  units: ${beforeUnits} -> ${after.units.length}, ${UNIT.id} at seq ${UNIT.seq}`);
  console.log(`  seed.version left at ${after.version}`);
  console.log('\n  NEXT: run the suite. Expect a2-35-bilan.test.ts and spine-drift.test.ts to fail on the new unit.\n');
}

/** The premium packs regime: core skeleton + paid layer. */
async function mergePacks(seed: Seed, layer: Seed, carried: Item[], reviewUnit: Unit, a232Lesson: Lesson & Record<string, unknown>) {
  const canonical = (x: unknown) => `${JSON.stringify(x, null, 2)}\n`;
  const owned = new Set<string>([...ALL_ROWS.map((r) => r.id), ...REPAIR_IDS]);
  const unitRow: Unit = {
    id: UNIT.id, seq: UNIT.seq, sub: UNIT.sub, canDo: UNIT.canDo, level: UNIT.level,
    title: UNIT.title, track: UNIT.track, lessonIds: [LESSON.id], prereqUnitIds: [...UNIT.prereqUnitIds],
  };
  const issuesBefore = validateCorpus(composeTestCorpus(seed as unknown as Corpus, layer as unknown as Corpus)).length;
  const merged = mergeIntoPacksLayer(
    seed as never, layer as never,
    { units: [unitRow], lessons: [LESSON as never], items: carried as never },
    (id) => owned.has(id),
  ) as unknown as { seed: Seed; layer: Seed; stats: Record<string, unknown> };

  // The Review moves to 36: its full unit in the layer (from Postgres), its
  // skeleton's seq in the core.
  const li = merged.layer.units.findIndex((u) => u.id === 'a2.35');
  if (li >= 0) merged.layer.units[li] = reviewUnit;
  else merged.layer.units.push(reviewUnit);
  const ci = merged.seed.units.findIndex((u) => u.id === 'a2.35');
  if (ci < 0) die('a2.35 has no skeleton in the core');
  merged.seed.units[ci] = { ...merged.seed.units[ci], seq: REVIEW_SEQ };
  // a2.32.l1 as Postgres holds it (the one printed label that moved).
  const ai = merged.layer.lessons.findIndex((l) => l.id === 'a2.32.l1');
  if (ai >= 0) merged.layer.lessons[ai] = a232Lesson;
  else merged.layer.lessons.push(a232Lesson);

  const clash = [...merged.seed.units, ...merged.layer.units].filter((u) => u.id.startsWith('a2.') && u.id !== UNIT.id && Number(u.seq) === UNIT.seq);
  if (clash.length) die(`seq ${UNIT.seq} is also held by ${clash.map((u) => u.id).join(', ')}`);
  const composed = composeTestCorpus(merged.seed as unknown as Corpus, merged.layer as unknown as Corpus);
  const issuesAfter = validateCorpus(composed);
  console.log(`\n  PACKS REGIME: ${UNIT.id} (seq ${UNIT.seq}) into the layer, skeleton in the core; a2.35 -> seq ${REVIEW_SEQ}; a2.32.l1 from Postgres`);
  console.log(`  stats: ${JSON.stringify({ unitsAdded: merged.stats.unitsAdded, lessonsAdded: merged.stats.lessonsAdded, itemsAdded: (merged.stats.itemsAdded as unknown[]).length, itemsReplaced: (merged.stats.itemsReplaced as unknown[]).length, itemsInCore: merged.stats.itemsInCore, skeletonsAdded: merged.stats.skeletonsAdded })}`);
  console.log(`  validateCorpus (core + layer): ${issuesAfter.length} after (${issuesBefore} before)`);
  if (issuesAfter.length > issuesBefore) {
    for (const i of issuesAfter.slice(0, 10)) console.log(`    ${i.path}: ${i.message}`);
    die('the merge adds validation issues');
  }
  const ids = new Set(composed.items.map((i) => i.id));
  const unreachable = ITEM_IDS.filter((i) => !ids.has(i));
  if (unreachable.length) die(`${unreachable.length} id(s) the lesson references are not in core + layer: ${unreachable.slice(0, 10).join(', ')}`);
  if (DRY) { console.log('\n  --dry: nothing written.\n'); return; }
  writeFileSync(SEED, canonical(merged.seed), 'utf8');
  writeFileSync(PACKS_LAYER_PATH, canonical(merged.layer), 'utf8');
  const back = composeTestCorpus(JSON.parse(readFileSync(SEED, 'utf8')), JSON.parse(readFileSync(PACKS_LAYER_PATH, 'utf8')));
  if (!back.lessons.some((l) => l.id === LESSON.id)) die('read-back: the lesson is missing');
  console.log('  WRITTEN: seed.json (core) and seed-packs.json (layer). NEXT: both suites, then content:publish --packs --dry-run.\n');
}

main();
