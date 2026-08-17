// a2.32.l1 « La technologie » — merge into ealch-v2/src/content/seed.json.
//
//   pnpm tsx scripts/merge-technologie-into-seed.ts
//
// ══════════════════════════════════════════════════════════════════════════
//  THIS UNIT IS THE FIRST IN THE PRODUCT TO PULL A THEME ACROSS
// ══════════════════════════════════════════════════════════════════════════
//
// THE SEED IS A CUT, AND THIS UNIT SITS ON THE WRONG SIDE OF IT IN EVERY
// DIRECTION. Measured 2026-08-16, published in Postgres against present in
// `seed.json`:
//
//     internet            336 published,   0 in the seed
//     rp-technologie      421 published,   0 in the seed
//     au-restaurant       398 published,  17 in the seed   (a2.07's repair block)
//     hebergement         371 published,   0 in the seed   (a2.29's ladder)
//
// Every prior A2 build merged into a theme the seed already had. `ecole` was
// 312/312 and `metiers` 353/353, so for a2.30 and a2.31 a seed-side
// measurement WAS a corpus-wide measurement. Here it is not, and every single
// row this lesson references has to be pulled out of Postgres by this script
// or the cards render empty on device while the tests pass against a corpus
// that has them.
//
// That includes rows this unit does not own and cannot guarantee: a2.07's six
// frozen repair rows in `au-restaurant` and a2.29's three cited ladder rows in
// `hebergement`. Both id files say so in terms, and both are checked on the
// read-back at the bottom of this file.
//
// ══════════════════════════════════════════════════════════════════════════
//  A CARRY MOVES A POPULATION EVEN WHEN AN AUTHORING DOES NOT
// ══════════════════════════════════════════════════════════════════════════
//
// a1.23 proved that against a1.03's measured ending statistic, and a1.11,
// a1.22, a1.26, a2.26, a2.27, a2.30 and a2.31 all met it again. This build
// carries roughly a hundred and fifty rows into a file that had none of them,
// and a large number are gendered single words, which is exactly the shape
// that moves a1.03.
//
// THE ONE THING IN THIS BUILD'S FAVOUR: `internet` holds ZERO a1 rows (0 of
// 336), so a statistic a1.03 scopes to `level === 'a1'` cannot be touched by
// anything this unit authors. That is a reason to expect a clean report, not a
// reason to skip it. `measureGenreImpact` runs BEFORE the write and prints
// what actually moved.
//
// NEVER `git checkout` seed.json to undo this. Other builders are in that file
// and reverting it discards their uncommitted lessons. Re-run the merge.
//
// DO NOT hand-bump `seed.version`. It is the OTA snapshot number and it belongs
// to the publish step, which is not part of a lesson build.
import './env';
import { readFileSync, writeFileSync } from 'node:fs';
import { measureGenreImpact, reportGenreImpact } from './lib/genre-impact.ts';
import {
  ALL_ROWS, UNIT, THEME, REPAIR_IDS, LADDER_IDS, IMPORT_ONLY_THEMES, DEFECT_ROWS,
} from './data/technologie-corpus.ts';
import { LESSON, ITEM_IDS } from './data/technologie-lesson.ts';

const SEED = new URL('../../ealch-v2/src/content/seed.json', import.meta.url);
const die: (m: string) => never = (m) => { console.error(`\n  STOP: ${m}\n`); process.exit(1); };

type Item = { id: string; theme?: string; fr?: string; drills?: unknown };
type Lesson = { id: string; unitId?: string };
type Unit = { id: string; lessonIds?: string[]; themes?: string[] };
type Seed = { version: number; units: Unit[]; lessons: Lesson[]; items: Item[]; [k: string]: unknown };

/** `drills` is a Postgres enum array and node-postgres can hand it back as the
 *  RAW LITERAL `{flashcard,review}`. A `.includes()` on that string is a
 *  substring test that lies. Normalise every row on the way in. */
const toArray = (d: unknown): string[] =>
  Array.isArray(d) ? d as string[] : String(d ?? '').replace(/[{}"]/g, '').split(',').filter(Boolean);

/** Optional item fields the seed OMITS when empty rather than writing as null.
 *  `audioRef` is deliberately NOT here: it is present on all seed rows and null
 *  on all of them, so it is always emitted. */
const OMIT_IF_NULL = [
  'ipa', 'respell', 'notes', 'gender', 'example',
  'cardType', 'prompt', 'skill', 'register', 'verbCheck', 'grammarPoints',
];

async function main() {
  const seed = JSON.parse(readFileSync(SEED, 'utf8')) as Seed;
  const beforeItems = seed.items.length;
  const beforeTheme = seed.items.filter((i) => i.theme === THEME).length;
  console.log(`\n  seed v${seed.version}: ${beforeItems} items, ${seed.lessons.length} lessons`);
  console.log(`  ${THEME} in seed before: ${beforeTheme}`);
  for (const t of IMPORT_ONLY_THEMES) {
    console.log(`  ${t} in seed before: ${seed.items.filter((i) => i.theme === t).length}`);
  }

  // THE TWO DEFECT ROWS ARE NOT CARRIED. They are metalinguistic commentary
  // stored as corpus rows, this build flags them and does not repair them, and
  // they must not slip into the seed through a helper loop. Checked here as
  // well as in the batch, because this is the script that decides what reaches
  // the device.
  for (const id of DEFECT_ROWS) {
    if (ITEM_IDS.includes(id)) die(`${id} is a flagged defect row and this lesson must not reference it`);
  }

  const { Pool } = await import('pg');
  const pool = new Pool({ connectionString: process.env.DATABASE_URL, max: 1 });
  const c = await pool.connect();
  let carried: Item[] = [];
  try {
    const wanted = [...new Set([...ALL_ROWS.map((r) => r.id), ...ITEM_IDS])];
    // EVERY FIELD THE SEED CARRIES, ALIASED TO THE SEED'S CASING.
    // `select *` is not the fix: `content_items` has 38 columns, the seed
    // carries 21, and the database is snake_case where the seed is camelCase.
    // a2.07's first version named twelve and silently DROPPED gender, audioRef
    // and cardType from every row it touched.
    const r = await c.query<Item & { status: string }>(
      `select id, kind, level, theme, fr, en, ipa, respell, notes, tags, drills,
              gender, example, prompt, skill, register, version, status,
              audio_ref as "audioRef", card_type as "cardType",
              verb_check as "verbCheck", grammar_points as "grammarPoints"
         from content_items where id = any($1::text[])`, [wanted]);
    const unpublished = r.rows.filter((x) => x.status !== 'published');
    if (unpublished.length) die(`${unpublished.length} referenced row(s) are not published: ${unpublished.map((x) => x.id).join(', ')}`);
    const missing = wanted.filter((w) => !r.rows.some((x) => x.id === w));
    if (missing.length) die(`${missing.length} referenced row(s) are not in Postgres at all: ${missing.join(', ')}`);
    // THE SEED'S NULL CONVENTION. Every optional field is OMITTED when empty and
    // never null-valued, EXCEPT `audioRef`, which is present and null on every
    // row. A null `respell` fails seed validation and dropping a null `audioRef`
    // diverges from every other row in the file. Both halves matter.
    carried = r.rows.map(({ status, ...rest }) => {
      const row: Record<string, unknown> = { ...rest, drills: toArray(rest.drills) };
      for (const k of OMIT_IF_NULL) if (row[k] === null || row[k] === undefined) delete row[k];
      row.audioRef = row.audioRef ?? null;
      return row as Item;
    });
    const foreign = carried.filter((x) => x.theme !== THEME);
    const alreadyInSeed = new Set(seed.items.map((i) => i.id));
    const genuinelyNew = carried.filter((x) => !alreadyInSeed.has(x.id));
    console.log(`\n  pulled ${carried.length} referenced rows from Postgres (authored ${ALL_ROWS.length}, imported ${carried.length - ALL_ROWS.length})`);
    console.log(`  of those, ${foreign.length} land in themes this unit does not own: ${[...new Set(foreign.map((x) => x.theme))].sort().join(', ')}`);
    console.log(`  and ${genuinelyNew.length} are NEW to the seed, because \`${THEME}\` was cut out of it entirely`);
    // THE a1.03 EXPOSURE, printed rather than discovered later.
    const gendered = carried.filter((x) => (x as { kind?: string }).kind === 'word' && (x as { gender?: string }).gender);
    console.log(`  ${gendered.length} of them are gendered single words, which is what moves a1.03's ending populations`);
    const a1 = carried.filter((x) => (x as { level?: string }).level === 'a1');
    console.log(`  ${a1.length} of them are a1 rows, and a1.03 scopes its statistic to level a1`);
  } finally {
    c.release();
    await pool.end();
  }

  // Upsert items by id. A seed row this lesson does not touch is left alone.
  const byId = new Map(seed.items.map((i) => [i.id, i]));
  let added = 0, updated = 0;
  for (const row of carried) {
    if (byId.has(row.id)) {
      const target = byId.get(row.id)! as Record<string, unknown>;
      Object.assign(target, row);
      // Object.assign cannot REMOVE a key, so a `respell: null` written by an
      // earlier run survives an overwrite that simply omits it.
      for (const k of OMIT_IF_NULL) if (target[k] === null || target[k] === undefined) delete target[k];
      target.audioRef = target.audioRef ?? null;
      updated++;
    } else { byId.set(row.id, row); added++; }
  }

  // Sanitise, SCOPED to the theme this build writes into. Another author's row
  // is not this script's to rewrite.
  let sanitised = 0;
  for (const it of byId.values()) {
    if (it.theme !== THEME) continue;
    const row = it as Record<string, unknown>;
    for (const k of OMIT_IF_NULL) if (row[k] === null) { delete row[k]; sanitised++; }
  }
  if (sanitised) console.log(`  sanitised ${sanitised} null optional field(s) written by an earlier run`);

  // DO NOT SORT. `seed.json` is NOT stored in id order, so sorting rewrites the
  // position of every row in the file. a2.07's first version did exactly that:
  // 9,515 items changed index, the content was identical and the diff was
  // 512,711 lines. On a file several concurrent builds are writing, that is an
  // unreviewable diff and a guaranteed conflict with every other author.
  seed.items = [...byId.values()];

  // Upsert the lesson. Not sorted, for the same reason.
  const li = seed.lessons.findIndex((l) => l.id === LESSON.id);
  if (li >= 0) seed.lessons[li] = LESSON as unknown as Lesson;
  else seed.lessons.push(LESSON as unknown as Lesson);

  // Carry the unit row: lessonIds only. `themes` ALREADY READS ['internet'] in
  // the spine script, in Postgres and here, because a2.07's build applied the
  // re-map under the collation's blocking step 2 on 2026-08-15. The prompt says
  // this build makes that edit; it was already made. This script does not touch
  // the array and the spine is NOT re-run.
  const unit = seed.units.find((u) => u.id === UNIT.id);
  if (!unit) die(`${UNIT.id} is not in the seed`);
  if (!(unit.themes ?? []).includes(THEME)) {
    die(`the seed unit row reads themes=${JSON.stringify(unit.themes)}. The re-map to '${THEME}' landed on 2026-08-15; `
      + 'if it has reverted, the spine script was re-run and that is a separate fix.');
  }
  unit.lessonIds = [...new Set([...(unit.lessonIds ?? []), LESSON.id])];

  // a1.03's PRINTED ENDING FIGURES, MEASURED BEFORE THIS WRITES.
  //
  // It WARNS rather than dies, because a hard gate would block a build whose
  // whole contribution is a carried import named by a card.
  reportGenreImpact(measureGenreImpact(
    JSON.parse(readFileSync(SEED, 'utf8')).items,
    seed.items,
    ALL_ROWS.map((r) => r.id),
  ));

  writeFileSync(SEED, `${JSON.stringify(seed, null, 2)}\n`, 'utf8');

  // Read back and prove it: every id the lesson names resolves to an item in
  // this same file.
  const after = JSON.parse(readFileSync(SEED, 'utf8')) as Seed;
  const ids = new Set(after.items.map((i) => i.id));
  const unreachable = ITEM_IDS.filter((i) => !ids.has(i));
  if (unreachable.length) die(`${unreachable.length} id(s) the lesson references are still not in the seed: ${unreachable.slice(0, 10).join(', ')}`);
  if ([...REPAIR_IDS].some((id) => !ids.has(id))) die("a2.07's repair rows did not reach the seed, so the repair card would render empty");
  if ([...LADDER_IDS].some((id) => !ids.has(id))) die("a2.29's ladder rows did not reach the seed, and the ladder is what three units cite");
  for (const id of DEFECT_ROWS) {
    if (ids.has(id) && !new Set(seed.items.map((i) => i.id)).has(id)) die(`${id} reached the seed through this merge`);
  }

  console.log(`\n  items: ${beforeItems} -> ${after.items.length} (+${added} new, ${updated} updated in place)`);
  console.log(`  ${THEME} in seed: ${beforeTheme} -> ${after.items.filter((i) => i.theme === THEME).length}`);
  for (const t of IMPORT_ONLY_THEMES) {
    console.log(`  ${t} in seed: ${after.items.filter((i) => i.theme === t).length}`);
  }
  console.log(`  lessons: ${after.lessons.length}, and ${LESSON.id} is ${after.lessons.some((l) => l.id === LESSON.id) ? 'present' : 'MISSING'}`);
  console.log(`  every one of the ${ITEM_IDS.length} ids the lesson names resolves in this file`);
  console.log(`  a2.07's six repair rows and a2.29's ${LADDER_IDS.length} cited ladder rows are in the seed and citable`);
  console.log(`  seed.version left at ${after.version} (the publish step owns it)`);
  console.log('\n  NEXT: re-run the suite. If the a1.03 report above says its figures MOVED,');
  console.log('  follow the remedy it printed BEFORE committing, or the shipped card and its');
  console.log('  source end up as two bodies under one version.\n');
}

main();
