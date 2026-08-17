// a2.08.l1 « Comparatifs & superlatifs » — merge into ealch-v2/src/content/seed.json.
//
//   pnpm tsx scripts/merge-comparatifs-into-seed.ts
//
// ══════════════════════════════════════════════════════════════════════════
//  `comparaisons` IS ENTIRELY OUTSIDE THE CUT
// ══════════════════════════════════════════════════════════════════════════
//
// Measured 2026-08-17, published in Postgres against present in `seed.json`:
//
//     comparaisons           288 published,   0 in the seed
//     adjectifs-essentiels   696 published,  varies (mostly present)
//     mots-essentiels        (large),        mostly present
//
// So every row this lesson references has to be pulled out of Postgres by this
// script or the cards render empty on device while the tests pass against a
// corpus that has them. a2.11 found that NEITHER of the two rows its lesson
// leaned on hardest was in the seed.
//
// THE SIX REPAIRED RESPELLINGS COME ACROSS TOO, and they are in themes this
// unit does not own. A repair applied to Postgres and not carried to the seed
// is a repair the device never sees, which is the exact shape of the 2026-07-31
// seed-direct incident in reverse.
//
// ══════════════════════════════════════════════════════════════════════════
//  A CARRY MOVES A POPULATION EVEN WHEN AN AUTHORING DOES NOT
// ══════════════════════════════════════════════════════════════════════════
//
// a1.23 proved that against a1.03's measured ending statistic, and a1.11,
// a1.22, a1.26, a2.26, a2.27, a2.29, a2.30, a2.31 and a2.32 all met it again.
//
// THE TWO THINGS IN THIS BUILD'S FAVOUR, both asserted rather than assumed:
//   1. NOT ONE AUTHORED ROW IS GENDERED. `mieux` is an adverb and `le mieux` is
//      a phrase, so neither can join the ending population.
//   2. NOT ONE IMPORTED ROW IS A GENDERED SINGLE WORD. The batch refuses to run
//      if one is, and this script re-checks it on the way in, because the batch
//      checks Postgres and this script decides what reaches the device.
//
// `measureGenreImpact` still runs BEFORE the write and prints what actually
// moved. Expecting a clean report is not a reason to skip it.
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
  ALL_ROWS, UNIT, THEME, IMPORT_ONLY_THEMES, RESPELL_REPAIRS, REPAIR_IDS,
  POSSESSIVE_ROWS, POSSESSIVE_FORMS, UNSEEN, GRID_CELLS,
} from './data/comparatifs-corpus.ts';
import { LESSON, ITEM_IDS } from './data/comparatifs-lesson.ts';
import { hasPlainNasalFor } from '../../ealch-v2/src/content/density.logic.ts';

const SEED = new URL('../../ealch-v2/src/content/seed.json', import.meta.url);
const die: (m: string) => never = (m) => { console.error(`\n  STOP: ${m}\n`); process.exit(1); };

type Item = { id: string; theme?: string; fr?: string; respell?: string | null; drills?: unknown };
type Lesson = { id: string; unitId?: string };
type Unit = { id: string; lessonIds?: string[]; themes?: string[] | null };
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

/** Optional item fields the seed OMITS when empty rather than writing as null.
 *  `audioRef` is deliberately NOT here: it is present on all seed rows and null
 *  on all of them, so it is always emitted. */
const OMIT_IF_NULL = [
  'ipa', 'respell', 'notes', 'gender', 'example',
  'cardType', 'prompt', 'skill', 'register', 'verbCheck', 'grammarPoints',
];

/** THE LESSONS THIS MERGE MUST NOT DISTURB, NAMED RATHER THAN COUNTED.
 *  Invariants §5: a count alone lets a one-for-one swap through. These four are
 *  the ones whose content this build is nearest to. */
const MUST_SURVIVE = ['a2.03.l1', 'a2.17.l1', 'a2.16.l1', 'a1.03.l1', 'a1.14.l1'] as const;

async function main() {
  const seed = JSON.parse(readFileSync(SEED, 'utf8')) as Seed;
  const beforeItems = seed.items.length;
  const beforeLessons = seed.lessons.length;
  const beforeTheme = seed.items.filter((i) => i.theme === THEME).length;
  console.log(`\n  seed v${seed.version}: ${beforeItems} items, ${beforeLessons} lessons`);
  console.log(`  ${THEME} in seed before: ${beforeTheme}`);
  for (const t of IMPORT_ONLY_THEMES) {
    console.log(`  ${t} in seed before: ${seed.items.filter((i) => i.theme === t).length}`);
  }

  // The lessons this merge must leave alone, named. Checked before and after.
  const survivorsBefore = MUST_SURVIVE.filter((id) => seed.lessons.some((l) => l.id === id));
  const wasAlreadyThere = seed.lessons.some((l) => l.id === LESSON.id);

  // a2.34's material must not slip in through a helper loop. Checked here as
  // well as in the batch, because this is the script that decides what reaches
  // the device.
  const possIds = new Set(POSSESSIVE_ROWS.map((r) => r.id));
  for (const id of ITEM_IDS) {
    if (possIds.has(id)) die(`${id} carries a possessive pronoun and belongs to a2.34`);
  }

  const { Pool } = await import('pg');
  const pool = new Pool({ connectionString: process.env.DATABASE_URL, max: 1 });
  const c = await pool.connect();
  let carried: Item[] = [];
  let repairRows: { id: string; fr: string; respell: string | null }[] = [];
  let repairsInSeed: string[] = [];
  let repairsOutsideCut: string[] = [];
  try {
    // A REPAIR IS CARRIED ONLY IF ITS ROW IS ALREADY IN THE SEED.
    //
    // Measured 2026-08-17: five of the six repaired rows are OUTSIDE the cut
    // and one, `fr.sons.nombres.099`, is in it carrying the broken `MWAN`. So
    // exactly one of the six is a value a learner can meet today, and it is the
    // one this merge has to fix.
    //
    // The other five are left out ON PURPOSE. `content:publish` regenerates the
    // seed FROM the database, so they reach the device at the next publish
    // without this build adding them. Two of them, `fr.b2.ethique.052` and
    // `fr.b2.philosophie.084`, are GENDERED SINGLE WORDS (`le bien`), which is
    // the shape that joins a1.03's measured ending population: carrying two new
    // b2 nouns into the cut to deliver a respelling for a word no learner meets
    // in the seed would move twenty printed figures in `a1-03-genre.test.ts`
    // for nothing. The merge refused to run until this was separated, which is
    // the gendered-carry guard working.
    const seedIds = new Set(seed.items.map((i) => i.id));
    repairsInSeed = REPAIR_IDS.filter((id) => seedIds.has(id));
    repairsOutsideCut = REPAIR_IDS.filter((id) => !seedIds.has(id));
    console.log(`\n  repairs already in the seed and therefore carried: ${repairsInSeed.join(', ') || '(none)'}`);
    console.log(`  repairs outside the cut, left to the publish step: ${repairsOutsideCut.join(', ') || '(none)'}`);

    const wanted = [...new Set([...ALL_ROWS.map((r) => r.id), ...ITEM_IDS, ...repairsInSeed])];
    // EVERY FIELD THE SEED CARRIES, ALIASED TO THE SEED'S CASING.
    // `select *` is not the fix: `content_items` has 38 columns, the seed
    // carries 21, and the database is snake_case where the seed is camelCase.
    // a2.07's first version named twelve and silently DROPPED gender, audioRef
    // and cardType from every row it touched.
    const r = await c.query<Item & { status: string; kind?: string; level?: string; gender?: string | null }>(
      `select id, kind, level, theme, fr, en, ipa, respell, notes, tags, drills,
              gender, example, prompt, skill, register, version, status,
              audio_ref as "audioRef", card_type as "cardType",
              verb_check as "verbCheck", grammar_points as "grammarPoints"
         from content_items where id = any($1::text[])`, [wanted]);
    const unpublished = r.rows.filter((x) => x.status !== 'published');
    if (unpublished.length) die(`${unpublished.length} referenced row(s) are not published: ${unpublished.map((x) => x.id).join(', ')}`);
    const missing = wanted.filter((w) => !r.rows.some((x) => x.id === w));
    if (missing.length) die(`${missing.length} referenced row(s) are not in Postgres at all: ${missing.join(', ')}`);

    // ALL SIX REPAIRS MUST ALREADY BE IN POSTGRES, whether or not they are
    // carried. Order is Postgres first, seed second; a merge that ran before
    // the batch would carry the OLD value and the two copies would disagree
    // under one lesson version.
    const rr = await c.query<{ id: string; fr: string; respell: string | null }>(
      'select id, fr, respell from content_items where id = any($1::text[])', [REPAIR_IDS]);
    repairRows = rr.rows.map((x) => ({ id: x.id, fr: x.fr, respell: x.respell }));
    for (const rep of RESPELL_REPAIRS) {
      const row = repairRows.find((x) => x.id === rep.id);
      if (!row) die(`${rep.id} is a repair row and is not in Postgres`);
      if (row.respell !== rep.to) {
        die(`${rep.id} reads "${row.respell}" in Postgres and the repair table says "${rep.to}". `
          + 'Run `pnpm content:comparatifs` FIRST. Postgres first, seed second.');
      }
      if (hasPlainNasalFor(row.fr, row.respell ?? '')) die(`${rep.id} is repaired in Postgres and the checker still flags it`);
    }

    // NO GENDERED SINGLE WORD REACHES THE SEED THROUGH THIS MERGE. The batch
    // checks the imports; this checks everything that is about to be written,
    // which is the set that actually moves a1.03.
    const gendered = r.rows.filter((x) => x.gender && x.kind === 'word'
      && !(x.fr ?? '').replace(/^(le |la |les |l'|un |une |des )/, '').includes(' '));
    if (gendered.length) {
      die(`${gendered.length} row(s) about to be carried are gendered single words: ${gendered.map((x) => `${x.id} "${x.fr}"`).join(', ')}`);
    }

    // NOTHING CARRIED HOLDS A POSSESSIVE PRONOUN OR THE UNSEEN DESCRIBING WORD.
    // `moins` and the other carried repairs are exempt: they are respelling
    // fixes on rows this lesson does not display, not lesson vocabulary.
    for (const x of r.rows) {
      if (repairsInSeed.includes(x.id)) continue;
      for (const p of POSSESSIVE_FORMS) if (hasWord(x.fr ?? '', p)) die(`${x.id} "${x.fr}" carries "${p}"`);
      if (hasWord(x.fr ?? '', UNSEEN.adj) || hasWord(x.fr ?? '', UNSEEN.fem)) die(`${x.id} "${x.fr}" carries "${UNSEEN.adj}", which must stay unseen`);
    }

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
    console.log(`\n  pulled ${carried.length} referenced rows from Postgres (authored ${ALL_ROWS.length}, imported+repaired ${carried.length - ALL_ROWS.length})`);
    console.log(`  of those, ${foreign.length} land in themes this unit does not own: ${[...new Set(foreign.map((x) => x.theme))].sort().join(', ')}`);
    console.log(`  and ${genuinelyNew.length} are NEW to the seed, because \`${THEME}\` was cut out of it entirely`);
    const gcount = carried.filter((x) => (x as { kind?: string }).kind === 'word' && (x as { gender?: string }).gender).length;
    console.log(`  ${gcount} of them are gendered single words, which is what moves a1.03's ending populations`);
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

  // Carry the unit row: lessonIds only. `themes` is null on this unit in
  // Postgres, in the spine and here, and this build does not create a themes
  // array. The corpus lives in `comparaisons` and the unit has never claimed it.
  const unit = seed.units.find((u) => u.id === UNIT.id);
  if (!unit) die(`${UNIT.id} is not in the seed`);
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

  // THE CARRIED REPAIR REACHED THE DEVICE. A repair that was already in the cut
  // and is still broken in the seed is a repair no learner ever sees.
  const afterById = new Map(after.items.map((i) => [i.id, i]));
  for (const id of repairsInSeed) {
    const rep = RESPELL_REPAIRS.find((x) => x.id === id)!;
    const row = afterById.get(id);
    if (!row) die(`${id} was in the seed before this merge and is not in it now`);
    if (row.respell !== rep.to) die(`${id} reads "${row.respell}" in the seed and should read "${rep.to}"`);
    if (hasPlainNasalFor(row.fr ?? '', row.respell ?? '')) die(`${id} is in the seed and the checker still flags it`);
  }
  // AND THE FIVE OUTSIDE THE CUT ARE STILL OUTSIDE IT. This merge must not have
  // pulled a gendered b2 noun into the seed to deliver a respelling.
  for (const id of repairsOutsideCut) {
    if (afterById.has(id)) die(`${id} was outside the seed cut and this merge added it. It is a respelling fix, not lesson vocabulary, and two of the five are gendered single words.`);
  }

  // THE FOUR GRID CELLS REACHED THE SEED. They are the trap, and the fourth was
  // zero rows anywhere before this build.
  for (const cell of GRID_CELLS) {
    const row = afterById.get(cell.id);
    if (!row) die(`${cell.id} is the ${cell.gender} ${cell.number} grid cell and did not reach the seed`);
    if (!(row.fr ?? '').includes(cell.form)) die(`${cell.id} reached the seed without "${cell.form}"`);
  }

  // THE LESSONS THIS MERGE MUST NOT DISTURB, NAMED RATHER THAN COUNTED.
  for (const id of survivorsBefore) {
    if (!after.lessons.some((l) => l.id === id)) die(`${id} was in the seed before this merge and is not in it now`);
  }
  // NAMED RATHER THAN COUNTED (invariants §5: a count alone lets a one-for-one
  // swap through), and tolerant of a RE-MERGE, where the lesson is already
  // there and the delta is zero rather than one.
  const expected = beforeLessons + (wasAlreadyThere ? 0 : 1);
  if (after.lessons.length !== expected) {
    die(`the seed held ${beforeLessons} lessons and now holds ${after.lessons.length}; expected ${expected}`);
  }

  console.log(`\n  items: ${beforeItems} -> ${after.items.length} (+${added} new, ${updated} updated in place)`);
  console.log(`  ${THEME} in seed: ${beforeTheme} -> ${after.items.filter((i) => i.theme === THEME).length}`);
  for (const t of IMPORT_ONLY_THEMES) {
    console.log(`  ${t} in seed: ${after.items.filter((i) => i.theme === t).length}`);
  }
  console.log(`  lessons: ${after.lessons.length}, and ${LESSON.id} is ${after.lessons.some((l) => l.id === LESSON.id) ? 'present' : 'MISSING'}`);
  console.log(`  ${survivorsBefore.length} named neighbouring lesson(s) still present: ${survivorsBefore.join(', ')}`);
  console.log(`  every one of the ${ITEM_IDS.length} ids the lesson names resolves in this file`);
  console.log(`  ${repairsInSeed.length} of ${RESPELL_REPAIRS.length} repaired respellings were inside the cut and read back clean: ${repairsInSeed.join(', ') || '(none)'}`);
  console.log(`  ${repairsOutsideCut.length} are outside it and reach the device at the next publish, not through this merge`);
  console.log(`  all four superlative cells present: ${GRID_CELLS.map((g) => g.form).join(' · ')}`);
  console.log(`  seed.version left at ${after.version} (the publish step owns it)`);
  console.log('\n  NEXT: re-run the suite. If the a1.03 report above says its figures MOVED,');
  console.log('  follow the remedy it printed BEFORE committing, or the shipped card and its');
  console.log('  source end up as two bodies under one version.\n');
}

main();
