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

const SEED = new URL('../../ealch-v2/src/content/seed.json', import.meta.url);
const DRY = process.argv.includes('--dry');
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
  const clash = seed.units.filter((u) => u.id !== UNIT.id && u.id.startsWith('a2.') && Number(u.seq) === UNIT.seq);
  if (clash.length) die(`seq ${UNIT.seq} is already held in the seed by ${clash.map((u) => u.id).join(', ')}`);

  const { Pool } = await import('pg');
  const pool = new Pool({ connectionString: process.env.DATABASE_URL, max: 1 });
  const c = await pool.connect();
  let carried: Item[] = [];
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

main();
