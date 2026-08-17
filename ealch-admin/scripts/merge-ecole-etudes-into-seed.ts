// a2.31.l1 « L'école & les études » — merge into ealch-v2/src/content/seed.json.
//
//   pnpm tsx scripts/merge-ecole-etudes-into-seed.ts
//
// THE SEED IS A CUT, AND THIS UNIT SITS ON THE GOOD SIDE OF IT.
//
// `ecole` is one of the themes where the cut is COMPLETE: 312 published in
// Postgres and 312 in the seed, measured 2026-08-16. So for the theme this unit
// authors into, a seed-side measurement IS a corpus-wide measurement.
//
// AND THAT IS WHY THE THEME-OWNERSHIP RULE PAID FOR ITSELF. The corpus plan in
// the prompt budgeted roughly 143 imports and warned that the merge "will pull
// roughly 143 rows into the seed for the first time and grow it materially".
// It will not, because `ecole`-first (see §B of the corpus file) takes the
// ladder, the subjects, the three verbs and the outcome vocabulary from `ecole`
// rather than from `matieres` — and every `ecole` row is already here.
//
// What IS cut-affected, and what this script therefore has to carry:
//
//     matieres              179 published at a2, 0 in the seed
//     examens-et-diplomes   200 published at a2, 2 in the seed
//     rp-travail-etudes     111 published at a2, 0 in the seed
//     disciplines            80 published at a2, 1 in the seed
//
// plus `au-restaurant` (a2.07's frozen repair block) and `hebergement`
// (a2.29's ladder rungs), neither of which this unit owns and both of which
// render empty on device if the merge does not carry them.
//
// A CARRY MOVES A POPULATION EVEN WHEN AN AUTHORING DOES NOT. a1.23 proved that
// against a1.03's ending statistic and a1.11, a1.22, a1.26, a2.26, a2.27 and
// a2.30 all met it again. This build authors FIVE gendered single-word rows
// (une licence, un master, une mention, un cégep, un DEC) and carries more, so
// `measureGenreImpact` runs BEFORE the write and prints what moved.
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
  ALL_ROWS, UNIT, THEME, REPAIR_IDS, LADDER_IDS, IMPORT_ONLY_THEMES, IMPARFAIT_IDS,
} from './data/ecole-etudes-corpus.ts';
import { LESSON, ITEM_IDS } from './data/ecole-etudes-lesson.ts';

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

  // THE IMPARFAIT ROWS ARE NOT CARRIED BY THIS LESSON, and they must not slip
  // into ITEM_IDS through a helper loop. Checked here as well as in the batch,
  // because this is the script that decides what reaches the device.
  for (const id of IMPARFAIT_IDS) {
    if (ITEM_IDS.includes(id)) die(`${id} is an imparfait row and this lesson must not reference it`);
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
    console.log(`  and only ${genuinelyNew.length} are NEW to the seed — the rest were already here, because \`ecole\` is not cut`);
    // THE a1.03 EXPOSURE, printed rather than discovered later.
    const gendered = carried.filter((x) => (x as { kind?: string }).kind === 'word' && (x as { gender?: string }).gender);
    console.log(`  ${gendered.length} of them are gendered single words, which is what moves a1.03's ending populations`);
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

  // Carry the unit row: lessonIds only. `themes` ALREADY READS ['ecole'] in the
  // spine script, in Postgres and in the seed, because this unit is one of the
  // three in the band that needed no re-map. This script does not touch it, and
  // the spine is NOT re-run.
  const unit = seed.units.find((u) => u.id === UNIT.id);
  if (!unit) die(`${UNIT.id} is not in the seed`);
  if (!(unit.themes ?? []).includes(THEME)) {
    die(`the seed unit row does not carry '${THEME}'. This unit needed NO re-map, so something re-mapped a theme that was already correct.`);
  }
  unit.lessonIds = [...new Set([...(unit.lessonIds ?? []), LESSON.id])];

  // a1.03's PRINTED ENDING FIGURES, MEASURED BEFORE THIS WRITES.
  //
  // Every A2 situational build before a2.30 shipped without this check and a1.03
  // was re-rendered six times in the band as a result. It WARNS rather than
  // dies, because a hard gate would block a build whose whole contribution is a
  // carried import named by a card.
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

  console.log(`\n  items: ${beforeItems} -> ${after.items.length} (+${added} new, ${updated} updated in place)`);
  console.log(`  ${THEME} in seed: ${beforeTheme} -> ${after.items.filter((i) => i.theme === THEME).length}`);
  console.log(`  lessons: ${after.lessons.length}, and ${LESSON.id} is ${after.lessons.some((l) => l.id === LESSON.id) ? 'present' : 'MISSING'}`);
  console.log(`  every one of the ${ITEM_IDS.length} ids the lesson names resolves in this file`);
  console.log(`  a2.07's six repair rows and a2.29's ${LADDER_IDS.length} ladder rows are in the seed and citable`);
  console.log(`  seed.version left at ${after.version} (the publish step owns it)`);
  console.log('\n  NEXT: re-run the suite. If the a1.03 report above says its figures MOVED,');
  console.log('  follow the remedy it printed BEFORE committing, or the shipped card and its');
  console.log('  source end up as two bodies under one version.\n');
}

main();
