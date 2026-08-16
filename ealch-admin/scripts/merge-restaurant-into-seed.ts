// a2.07.l1 « Au restaurant » — merge into ealch-v2/src/content/seed.json.
//
//   pnpm tsx scripts/merge-restaurant-into-seed.ts
//
// THE SEED IS A CUT. `au-restaurant` holds 398 published rows in Postgres and
// 17 in the seed before this merge: a 23x divergence and the worst in the band.
// So this script does NOT merely add the 52 authored rows. It pulls every row
// the lesson REFERENCES out of Postgres and writes those too, or the imported
// cards render empty on device while the tests pass against a corpus that has
// them.
//
// NEVER `git checkout` seed.json to undo this. With eight concurrent builds it
// discards other authors' uncommitted lessons. Re-run the merge scripts.
//
// DO NOT hand-bump `seed.version`. It is the OTA snapshot number and belongs to
// the publish step, which is not part of a lesson build.
import './env';
import { readFileSync, writeFileSync } from 'node:fs';
import { ALL_ROWS, UNIT, THEME, REPAIR_IDS } from './data/restaurant-corpus.ts';
import { LESSON, ITEM_IDS } from './data/restaurant-lesson.ts';

const SEED = new URL('../../ealch-v2/src/content/seed.json', import.meta.url);
const die = (m: string): never => { console.error(`\n  STOP: ${m}\n`); process.exit(1); };

type Item = { id: string; theme?: string; fr?: string; drills?: unknown };
type Lesson = { id: string; unitId?: string };
type Unit = { id: string; lessonIds?: string[]; themes?: string[] };
type Seed = { version: number; units: Unit[]; lessons: Lesson[]; items: Item[]; [k: string]: unknown };

/** `drills` is a Postgres enum array and node-postgres can hand it back as the
 *  RAW LITERAL `{flashcard,review}`. A `.includes()` on that string is a
 *  substring test that lies: it answers true for 'card' and for 'review' alike.
 *  Normalise every row on the way in. */
const toArray = (d: unknown): string[] =>
  Array.isArray(d) ? d as string[] : String(d ?? '').replace(/[{}"]/g, '').split(',').filter(Boolean);

/** Optional item fields the seed OMITS when empty rather than writing as null.
 *   is deliberately NOT here: it is present on all 9,599 seed rows and
 *  null on all of them, so it is always emitted. */
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

  const { Pool } = await import('pg');
  const pool = new Pool({ connectionString: process.env.DATABASE_URL, max: 1 });
  const c = await pool.connect();
  let carried: Item[] = [];
  try {
    // Every id the lesson can put in front of a learner: what it authored, plus
    // every id any section names or any deckTranche releases.
    const wanted = [...new Set([...ALL_ROWS.map((r) => r.id), ...ITEM_IDS])];
    // EVERY FIELD THE SEED CARRIES, ALIASED TO THE SEED'S CASING.
    //
    // The first version named twelve columns and thereby DROPPED three the seed
    // does carry: `gender`, `audioRef` and `cardType`. Rows imported fresh
    // landed without them, and 19 rows already in the seed had them stripped by
    // the upsert below. Nothing failed — the fields are optional, the suite
    // stayed green — and the loss was visible only by diffing against a seed
    // regenerated from the database.
    //
    // `select *` is NOT the fix: `content_items` has 38 columns, the seed
    // carries 21 of them, and the database is snake_case (`audio_ref`,
    // `card_type`, `verb_check`, `grammar_points`) where the seed is camelCase.
    // So the list is explicit AND complete, and aliased.
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
    // THE SEED'S NULL CONVENTION, MEASURED RATHER THAN ASSUMED.
    //
    // Across all 9,599 seed items: `audioRef` is present on every single row and
    // is `null` on every single row. Every OTHER optional field is OMITTED when
    // it has no value and is never null-valued — 0 rows carry a null `respell`,
    // `ipa`, `gender`, `cardType`, `skill`, `register`, `example`, `prompt` or
    // `verbCheck`.
    //
    // Both halves matter. A null `respell` fails seed validation ("must be a
    // non-empty string when present"), which is how this build first went red;
    // and dropping `audioRef` because it is null diverges from every other row
    // in the file, which is how it went wrong the second time.
    carried = r.rows.map(({ status, ...rest }) => {
      const row: Record<string, unknown> = { ...rest, drills: toArray(rest.drills) };
      for (const k of OMIT_IF_NULL) if (row[k] === null || row[k] === undefined) delete row[k];
      // Always present, always null. Not optional, not omitted.
      row.audioRef = row.audioRef ?? null;
      return row as Item;
    });
    console.log(`  pulled ${carried.length} referenced rows from Postgres (authored ${ALL_ROWS.length}, imported ${carried.length - ALL_ROWS.length})`);
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
      // earlier run of this script survives an overwrite that simply omits it.
      // Clear them explicitly or the seed stays invalid after the fix.
      for (const k of OMIT_IF_NULL) if (target[k] === null || target[k] === undefined) delete target[k];
      target.audioRef = target.audioRef ?? null;
      updated++;
    } else { byId.set(row.id, row); added++; }
  }
  // SANITISE, scoped to the themes this build writes into. An earlier run of
  // this script wrote `respell: null` on ten imported rows, and three of them
  // then dropped out of the referenced set when they were removed from
  // deckTranche, so the upsert above never revisited them. The pre-merge seed
  // carried zero null respells, so every one of these is this build's to clean.
  // Scoped rather than global: another author's row is not this script's to
  // rewrite.
  let sanitised = 0;
  for (const it of byId.values()) {
    if (it.theme !== THEME && it.theme !== 'quebec-et-francophonie') continue;
    const row = it as Record<string, unknown>;
    for (const k of OMIT_IF_NULL) if (row[k] === null) { delete row[k]; sanitised++; }
  }
  if (sanitised) console.log(`  sanitised ${sanitised} null optional field(s) written by an earlier run`);

  // DO NOT SORT. `seed.json` is NOT stored in id order — HEAD departs from it by
  // item 4 (`fr.a1.objets.003` before `fr.a1.cafe.009`) — so sorting rewrites the
  // position of every row in the file. The first version of this script did
  // exactly that: 9,515 of 9,602 items changed index, the content was identical
  // and the diff was 512,711 lines. On a file eight concurrent builds are
  // writing, that is an unreviewable diff and a guaranteed conflict with every
  // other author.
  //
  // Existing rows keep their position and are updated in place; new rows append.
  // `Map` preserves insertion order, so this is already true of `byId` as built
  // above, and the only thing needed is to NOT re-order it.
  seed.items = [...byId.values()];

  // Upsert the lesson.
  const li = seed.lessons.findIndex((l) => l.id === LESSON.id);
  if (li >= 0) seed.lessons[li] = LESSON as unknown as Lesson;
  else seed.lessons.push(LESSON as unknown as Lesson);
  // Not sorted, for the same reason as `items` above: HEAD's lesson order is not
  // id order (it opens `a1.10.l1, sons.06.l1, sons.09.l1, a2.04.l1`), so sorting
  // would move all 65 shipped lessons to make room for one new one.

  // Carry the unit row: lessonIds only. The `themes` array is band blocking
  // step 2 and is deliberately NOT touched here.
  const unit = seed.units.find((u) => u.id === UNIT.id);
  if (!unit) return die(`${UNIT.id} is not in the seed`);
  unit.lessonIds = [...new Set([...(unit.lessonIds ?? []), LESSON.id])];
  if ((unit.themes ?? []).includes('nourriture')) {
    console.log('  NOTE: the unit row still carries the phantom theme `nourriture`.');
    console.log('        That is band blocking step 2 and covers all eight units in one reviewed diff.');
    console.log('        This script does not edit it. No row in this build lands in `nourriture`.');
  }

  writeFileSync(SEED, `${JSON.stringify(seed, null, 2)}\n`, 'utf8');

  // Read back and prove it.
  const after = JSON.parse(readFileSync(SEED, 'utf8')) as Seed;
  const afterTheme = after.items.filter((i) => i.theme === THEME).length;
  const ids = new Set(after.items.map((i) => i.id));
  const unreachable = ITEM_IDS.filter((i) => !ids.has(i));
  if (unreachable.length) die(`${unreachable.length} id(s) the lesson references are still not in the seed: ${unreachable.slice(0, 10).join(', ')}`);
  const six = [...REPAIR_IDS].map((id) => after.items.find((i) => i.id === id));
  if (six.some((x) => !x)) die('a repair row did not reach the seed');

  console.log(`\n  items: ${beforeItems} -> ${after.items.length} (+${added} new, ${updated} updated in place)`);
  console.log(`  ${THEME} in seed: ${beforeTheme} -> ${afterTheme}`);
  console.log(`  lessons: ${after.lessons.length}, and ${LESSON.id} is ${after.lessons.some((l) => l.id === LESSON.id) ? 'present' : 'MISSING'}`);
  console.log(`  seed.version left at ${after.version} (the publish step owns it)`);
  console.log('\n  THE FROZEN REPAIR BLOCK, in the seed:');
  for (const x of six) console.log(`    ${x!.id}  ${x!.fr}  ${JSON.stringify(x!.drills)}`);
  console.log('');
}

main();
