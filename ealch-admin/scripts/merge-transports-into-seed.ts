// a2.27.l1 « Les transports » — merge into ealch-v2/src/content/seed.json.
//
//   pnpm tsx scripts/merge-transports-into-seed.ts
//
// THE SEED IS A CUT, and this unit sits on the widest divergence in the band.
// Before this merge, `transports-quotidiens` holds 415 published rows in
// Postgres and 5 in the seed (83x), and `la-ville` holds 347 and 0. So this
// script does NOT merely add the authored rows. It pulls every row the lesson
// REFERENCES out of Postgres and writes those too, or the imported cards render
// empty on device while the tests pass against a corpus that has them.
//
// THAT DIVERGENCE IS ALSO THE HIGHEST-COST FAILURE THIS UNIT COULD HAVE MADE,
// and it is the reason the pre-flight probed Postgres rather than the seed.
// Anyone measuring this unit's vocabulary on the seed concludes the transport
// lexicon is missing and authors four hundred duplicate rows, and
// `flashhub-coverage.test.ts` treats two rows sharing an `fr` in one theme as
// one card served twice, so the duplicates would be silent.
//
// THIS MERGE CARRIES ROWS INTO FOUR THEMES THIS UNIT DOES NOT OWN:
// `deplacements` and `la-ville` (a1 populations), `verbes-essentiels` (the one
// pre-existing multi-move chain) and `au-restaurant` (a2.07's frozen repair
// block). A CARRY MOVES A POPULATION EVEN WHEN AN AUTHORING DOES NOT: a1.23
// proved it against a1.03's ending statistic and the authored-only guard could
// not see it. The neighbouring suites are re-run after this merge, not before.
//
// NEVER `git checkout` seed.json to undo this. With several concurrent builds
// it discards other authors' uncommitted lessons. Re-run the merge scripts.
//
// DO NOT hand-bump `seed.version`. It is the OTA snapshot number and belongs to
// the publish step, which is not part of a lesson build.
import './env';
import { readFileSync, writeFileSync } from 'node:fs';
import { ALL_ROWS, UNIT, THEME, QC_THEME, REPAIR_IDS } from './data/transports-corpus.ts';
import { LESSON, ITEM_IDS } from './data/transports-lesson.ts';

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
 *  on all of them, so it is always emitted. Measured by a2.07, re-checked here. */
const OMIT_IF_NULL = [
  'ipa', 'respell', 'notes', 'gender', 'example',
  'cardType', 'prompt', 'skill', 'register', 'verbCheck', 'grammarPoints',
];

const MY_THEMES = [THEME, QC_THEME];

async function main() {
  const seed = JSON.parse(readFileSync(SEED, 'utf8')) as Seed;
  const beforeItems = seed.items.length;
  const before = Object.fromEntries(MY_THEMES.map((t) => [t, seed.items.filter((i) => i.theme === t).length]));
  console.log(`\n  seed v${seed.version}: ${beforeItems} items, ${seed.lessons.length} lessons`);
  for (const t of MY_THEMES) console.log(`  ${t} in seed before: ${before[t]}`);

  const { Pool } = await import('pg');
  const pool = new Pool({ connectionString: process.env.DATABASE_URL, max: 1 });
  const c = await pool.connect();
  let carried: Item[] = [];
  try {
    // Every id the lesson can put in front of a learner: what it authored, plus
    // every id any section names or any deckTranche releases.
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
    // THE SEED'S NULL CONVENTION. Every optional field is OMITTED when empty
    // and never null-valued, EXCEPT `audioRef`, which is present and null on
    // every row. A null `respell` fails seed validation and dropping a null
    // `audioRef` diverges from every other row in the file. Both halves matter.
    carried = r.rows.map(({ status, ...rest }) => {
      const row: Record<string, unknown> = { ...rest, drills: toArray(rest.drills) };
      for (const k of OMIT_IF_NULL) if (row[k] === null || row[k] === undefined) delete row[k];
      row.audioRef = row.audioRef ?? null;
      return row as Item;
    });
    const foreign = carried.filter((x) => !MY_THEMES.includes(x.theme ?? ''));
    console.log(`  pulled ${carried.length} referenced rows from Postgres (authored ${ALL_ROWS.length}, imported ${carried.length - ALL_ROWS.length})`);
    console.log(`  of those, ${foreign.length} land in themes this unit does not own: ${[...new Set(foreign.map((x) => x.theme))].join(', ')}`);
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

  // Sanitise, SCOPED to the themes this build writes into. Another author's row
  // is not this script's to rewrite.
  let sanitised = 0;
  for (const it of byId.values()) {
    if (!MY_THEMES.includes(it.theme ?? '')) continue;
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

  // Carry the unit row: lessonIds only. The `themes` array already reads
  // ['transports-quotidiens', 'deplacements'] in the spine, in Postgres and in
  // the seed, because band blocking step 2 landed before this build started.
  // This script does not touch it, and the spine is NOT re-run: a naive re-run
  // of author-full-curriculum-spine.ts would revert 74 of 75 unit titles, which
  // is why spine-drift.test.ts exists.
  const unit = seed.units.find((u) => u.id === UNIT.id);
  if (!unit) die(`${UNIT.id} is not in the seed`);
  if (!(unit.themes ?? []).includes(THEME)) die(`the seed unit row does not carry the theme ${THEME}`);
  if ((unit.themes ?? []).includes('transport')) die("the seed unit row still carries the phantom theme 'transport'");
  unit.lessonIds = [...new Set([...(unit.lessonIds ?? []), LESSON.id])];

  writeFileSync(SEED, `${JSON.stringify(seed, null, 2)}\n`, 'utf8');

  // Read back and prove it. THE ASSERTION THE COLLATION ASKED FOR: every id the
  // lesson names resolves to an item in this same file.
  const after = JSON.parse(readFileSync(SEED, 'utf8')) as Seed;
  const ids = new Set(after.items.map((i) => i.id));
  const unreachable = ITEM_IDS.filter((i) => !ids.has(i));
  if (unreachable.length) die(`${unreachable.length} id(s) the lesson references are still not in the seed: ${unreachable.slice(0, 10).join(', ')}`);
  const six = [...REPAIR_IDS].map((id) => after.items.find((i) => i.id === id));
  if (six.some((x) => !x)) die("a2.07's repair rows did not reach the seed, so s16-repair would render six empty cards");

  console.log(`\n  items: ${beforeItems} -> ${after.items.length} (+${added} new, ${updated} updated in place)`);
  for (const t of MY_THEMES) {
    console.log(`  ${t} in seed: ${before[t]} -> ${after.items.filter((i) => i.theme === t).length}`);
  }
  console.log(`  lessons: ${after.lessons.length}, and ${LESSON.id} is ${after.lessons.some((l) => l.id === LESSON.id) ? 'present' : 'MISSING'}`);
  console.log(`  every one of the ${ITEM_IDS.length} ids the lesson names resolves in this file`);
  console.log(`  a2.07's six repair rows are in the seed and citable`);
  console.log(`  seed.version left at ${after.version} (the publish step owns it)\n`);
}

main();
