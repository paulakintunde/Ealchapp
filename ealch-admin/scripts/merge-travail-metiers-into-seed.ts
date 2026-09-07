// a2.30.l1 « Le travail & les métiers » — merge into ealch-v2/src/content/seed.json.
//
//   pnpm tsx scripts/merge-travail-metiers-into-seed.ts
//
// THE SEED IS A CUT, AND THIS UNIT SITS ON A SPLIT DIVERGENCE.
//
// `metiers` is the ONE PLACE IN THIS PROJECT WHERE THE SEED IS NOT A CUT: 353
// published in Postgres and 353 in the seed, measured 2026-08-16. So for the
// theme this unit authors into, a seed-side measurement IS a corpus-wide
// measurement.
//
// EVERYTHING ELSE IT TOUCHES IS CUT-AFFECTED, and severely:
//
//     bureau             337 published, 0 in the seed
//     recherche-emploi   592 published, 0 in the seed
//     collegues          317 published, 0 in the seed
//     affaires           316 published, 0 in the seed
//
// So this script does NOT merely add the authored rows. It pulls every row the
// lesson REFERENCES out of Postgres and writes those too, or the imported cards
// render empty on device while the tests pass against a corpus that has them.
//
// THIS MERGE CARRIES ROWS INTO THEMES THIS UNIT DOES NOT OWN: `au-restaurant`
// (a2.07's frozen repair block), `hebergement` (a2.29's ladder), `rp-sante`,
// `cafe`, `marche`, `ecole`, `collegues`, `decouvertes` and
// `examens-et-diplomes`.
//
// A CARRY MOVES A POPULATION EVEN WHEN AN AUTHORING DOES NOT. a1.23 proved that
// against a1.03's ending statistic and a2.26 and a2.27 met it again. MEASURED
// FOR THIS BUILD, before the apply: 3 of a1.03's 27 pinned endings move.
//
//     -euse   n 7 -> 8      100% -> 100%   une coiffeuse, MINTED
//     -ure    n 26 -> 28    100% -> 100%   professeure + ingénieure, CARRIED
//     -e      n 933 -> 946  70%  -> 71%    stays under the 90% floor, so it
//                                          stays correctly filed as worthless
//
// `genre-endings.ts` pins those numbers and a1-03-genre.test.ts compares them
// against the live seed, so RECONCILE IT AFTER THIS MERGE AND RE-RUN THE
// NEIGHBOURING SUITE. Baseline captured before the apply: a1-03-genre.test.ts
// 35 tests, 35 passing, seed v50; whole suite 4,374 passing.
//
// NEVER `git checkout` seed.json to undo this. Seven other builders are in that
// file and reverting it discards their uncommitted lessons. Re-run the merge.
//
// DO NOT hand-bump `seed.version`. It is the OTA snapshot number and it belongs
// to the publish step, which is not part of a lesson build.
import './env';
import { readFileSync, writeFileSync } from 'node:fs';
import { measureGenreImpact, reportGenreImpact } from './lib/genre-impact.ts';
import { ALL_ROWS, UNIT, THEME, REPAIR_IDS, LADDER_IDS, IMPORT_ONLY_THEMES } from './data/travail-metiers-corpus.ts';
import { LESSON, ITEM_IDS } from './data/travail-metiers-lesson.ts';

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

  const { Pool } = await import('pg');
  const pool = new Pool({ connectionString: process.env.DATABASE_URL, max: 1 });
  const c = await pool.connect();
  let carried: Item[] = [];
  try {
    // Every id the lesson can put in front of a learner: what it authored, plus
    // every id any section names, any deckTranche releases, any term chip cites
    // and any LessonDrill lists.
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
    console.log(`\n  pulled ${carried.length} referenced rows from Postgres (authored ${ALL_ROWS.length}, imported ${carried.length - ALL_ROWS.length})`);
    console.log(`  of those, ${foreign.length} land in themes this unit does not own: ${[...new Set(foreign.map((x) => x.theme))].sort().join(', ')}`);
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

  // Carry the unit row: lessonIds only. `themes` ALREADY READS ['metiers'] in
  // the spine script, in Postgres and in the seed, because this unit is one of
  // the three in the band that needed no re-map. This script does not touch it,
  // and the spine is NOT re-run.
  const unit = seed.units.find((u) => u.id === UNIT.id);
  if (!unit) die(`${UNIT.id} is not in the seed`);
  if (!(unit.themes ?? []).includes(THEME)) {
    die(`the seed unit row does not carry '${THEME}'. This unit needed NO re-map, so something re-mapped a theme that was already correct.`);
  }
  unit.lessonIds = [...new Set([...(unit.lessonIds ?? []), LESSON.id])];

  // a1.03's PRINTED ENDING FIGURES, MEASURED BEFORE THIS WRITES.
  //
  // Thirty of the sixty-one merge scripts carry this check and thirty-one do
  // not, and EVERY script in the A2 situational band was in the second group.
  // That is the whole explanation for a1.03 having been re-rendered six times
  // in this band without a single build being warned in advance.
  //
  // THIS BUILD IS THE SEVENTH, AND IT PAID FOR THE GAP. a2.30 moved three
  // figures (-e 933->946 and 70%->71%, -ure 26->28, -euse 7->8), reconciled
  // `genre-endings.ts`, and did NOT re-render a1.03 — leaving seven stale
  // strings on the shipped card under an unchanged version. Nothing failed:
  // `a1-03-genre.test.ts` compares the CONSTANTS to `seed.items` and never
  // reads the rendered body. Had this warning fired on the first merge, the
  // remedy it prints below is exactly what was eventually done by hand.
  //
  // It WARNS rather than dies, because in a2.26, a2.27 and a2.28 every joiner
  // was a carried import named by a card, and a hard gate would block correct
  // work. a2.30 is the first in the band where part of the contribution was
  // authored: eight minted feminines plus five carried.
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
  if ([...REPAIR_IDS].some((id) => !ids.has(id))) die("a2.07's repair rows did not reach the seed, so the repair cards would render empty");
  if ([...LADDER_IDS].some((id) => !ids.has(id))) die("a2.29's ladder rows did not reach the seed, and the ladder is what three units cite");

  console.log(`\n  items: ${beforeItems} -> ${after.items.length} (+${added} new, ${updated} updated in place)`);
  console.log(`  ${THEME} in seed: ${beforeTheme} -> ${after.items.filter((i) => i.theme === THEME).length}`);
  console.log(`  lessons: ${after.lessons.length}, and ${LESSON.id} is ${after.lessons.some((l) => l.id === LESSON.id) ? 'present' : 'MISSING'}`);
  console.log(`  every one of the ${ITEM_IDS.length} ids the lesson names resolves in this file`);
  console.log(`  a2.07's six repair rows and all ${LADDER_IDS.length} ladder rows are in the seed and citable`);
  console.log(`  seed.version left at ${after.version} (the publish step owns it)`);
  // NOT a hardcoded list of endings. The three this build moved (-e, -ure,
  // -euse) are already reconciled and a1.03 is re-rendered at v11, so naming
  // them here would send the next runner to fix something already fixed. The
  // genre-impact report above is the live answer: if it says "unmoved", there
  // is nothing to do.
  console.log('\n  NEXT: re-run the suite. If the a1.03 report above says its figures MOVED,');
  console.log('  follow the remedy it printed BEFORE committing, or the shipped card and its');
  console.log('  source end up as two bodies under one version.\n');
}

main();
