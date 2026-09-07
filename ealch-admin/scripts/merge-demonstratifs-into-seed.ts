// a2.33.l1 « Les démonstratifs » — merge into ealch-v2/src/content/seed.json.
//
//   pnpm tsx scripts/merge-demonstratifs-into-seed.ts
//
// ══════════════════════════════════════════════════════════════════════════
//  THREE QUARTERS OF THIS LESSON'S OWN THEME IS OUTSIDE THE CUT
// ══════════════════════════════════════════════════════════════════════════
//
// Measured 2026-08-17, published in Postgres against present in `seed.json`:
//
//     pronoms-essentiels          634 published,  163 in the seed
//     mots-essentiels             387 published,   42 in the seed
//
// And seven of the eight headwords this lesson imports are NOT in the cut:
// only `fr.sons.mots-essentiels.089` (`ce`) is. So a merge that carried only
// the authored rows would ship a lesson whose `tapTable`, whose flashcards and
// whose practice section all resolve to nothing. a2.11 found that NEITHER of
// the two rows its lesson leaned on hardest was in the seed.
//
// The twelve imported ADJECTIVE rows are worse: they live in seven other
// themes, every one of them cut harder than this one, and not one of them can
// be released by a tranche. If they do not come across, seven groupDrill items
// and six term examples resolve to nothing.
//
// ══════════════════════════════════════════════════════════════════════════
//  THE TWO REPAIRED RESPELLINGS COME ACROSS TOO
// ══════════════════════════════════════════════════════════════════════════
//
// Both are `fr.b1.pronoms-essentiels.*` rows this lesson also imports, so they
// are inside the carry set anyway and arrive repaired. Read back and asserted
// after the write: a repair applied to Postgres and not carried to the seed is
// a repair the device never sees.
//
// ══════════════════════════════════════════════════════════════════════════
//  A CARRY MOVES A POPULATION EVEN WHEN AN AUTHORING DOES NOT
// ══════════════════════════════════════════════════════════════════════════
//
// a1.23 proved that against a1.03's measured ending statistic, and a1.11,
// a1.22, a1.26, a2.26, a2.27, a2.29, a2.30, a2.31, a2.32 and a2.08 all met it
// again. THIS BUILD CARRIES TWENTY-FOUR a1 ROWS, which is the largest a1 carry
// in the tail, so the risk is real rather than theoretical.
//
// THE TWO THINGS IN ITS FAVOUR, both asserted rather than assumed:
//   1. NOT ONE AUTHORED ROW IS GENDERED. Twenty-three sentences and four
//      hyphenated phrases; none of them is a noun.
//   2. NOT ONE IMPORTED ROW IS A GENDERED SINGLE WORD. The batch checks the
//      imports against Postgres; this script re-checks everything it is about
//      to WRITE, which is the set that actually moves a1.03.
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
  ALL_ROWS, UNIT, THEME, IMPORT_ONLY_THEMES, IMPORTED, RESPELL_REPAIRS, REPAIR_IDS,
  POSSESSIVE_FORMS, OBJECT_FORMS, IMPERSONAL_FORMS, UNSEEN,
  GRID_CELLS, CI_LA_CELLS, B1_NOT_IMPORTED, TIE_ROW, TIE_GLYPH,
} from './data/demonstratifs-corpus.ts';
import { LESSON, ITEM_IDS } from './data/demonstratifs-lesson.ts';
import { hasPlainNasalFor } from '../../ealch-v2/src/content/density.logic.ts';

const SEED = new URL('../../ealch-v2/src/content/seed.json', import.meta.url);
const die: (m: string) => never = (m) => { console.error(`\n  STOP: ${m}\n`); process.exit(1); };

type Item = { id: string; theme?: string; fr?: string; respell?: string | null; drills?: unknown };
type Lesson = { id: string; unitId?: string };
type Unit = { id: string; lessonIds?: string[]; themes?: string[] | null };
type Seed = { version: number; units: Unit[]; lessons: Lesson[]; items: Item[]; [k: string]: unknown };

const toArray = (d: unknown): string[] =>
  Array.isArray(d) ? d as string[] : String(d ?? '').replace(/[{}"]/g, '').split(',').filter(Boolean);

/** Accent-aware whole-word containment, never regex-from-string. The house
 *  boundary drops the apostrophe on the left so `c'est` is visible. */
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

/** WHAT "EMPTY" MEANS, AND IT IS NOT JUST `null`.
 *
 *  The first version of this file tested `=== null || === undefined`, so an
 *  EMPTY ARRAY went straight through and this merge wrote `grammarPoints: []`
 *  onto all 27 authored rows. Nothing rendered differently, and the cost was a
 *  merge that fights every other author's: a2.32's merge strips the field, so
 *  the two scripts rewrote the same 27 rows back and forth and produced diff
 *  churn on a file several builds are writing at once.
 *
 *  MEASURED ACROSS ALL 10,357 SEED ITEMS, and the convention is absolute: of
 *  the eleven optional fields above, NOT ONE is ever null, an empty array or an
 *  empty string anywhere in the file. An optional field is populated or it is
 *  absent. `ipa` 8624 present · `respell` 5750 · `grammarPoints` 1, and zero
 *  empties of any kind in any of them.
 *
 *  `audioRef` is deliberately NOT subject to this: it is present and null on
 *  every row in the seed, so it is always emitted. `tags` and `drills` are not
 *  on the list at all and are untouched. */
const isEmptyOptional = (v: unknown): boolean =>
  v === null || v === undefined || v === '' || (Array.isArray(v) && v.length === 0);

/** THE LESSONS THIS MERGE MUST NOT DISTURB, NAMED RATHER THAN COUNTED.
 *  Invariants §5: a count alone lets a one-for-one swap through. These six are
 *  the ones whose content this build is nearest to: the three pronoun lessons
 *  that share its theme, the two whose reframes it quotes, and a1.03, whose
 *  measured ending statistic a carry can move. */
const MUST_SURVIVE = ['a2.06.l1', 'a2.24.l1', 'a2.25.l1', 'a2.16.l1', 'a2.08.l1', 'a1.03.l1'] as const;

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

  const survivorsBefore = MUST_SURVIVE.filter((id) => seed.lessons.some((l) => l.id === id));
  const wasAlreadyThere = seed.lessons.some((l) => l.id === LESSON.id);

  // THE FOUR b1 ROWS LEFT BEHIND STAY LEFT BEHIND, and the U+203F row is not
  // pulled into the cut by a helper loop. Checked here as well as in the batch,
  // because this is the script that decides what reaches the device.
  for (const b of B1_NOT_IMPORTED) {
    if (ITEM_IDS.includes(b.id)) die(`${b.id} is on the do-not-import list (${b.why}) and the lesson carries it`);
  }
  if (ITEM_IDS.includes(TIE_ROW)) die(`${TIE_ROW} carries a U+203F respelling, which draws as an underscore on a Pixel 6`);

  const { Pool } = await import('pg');
  const pool = new Pool({ connectionString: process.env.DATABASE_URL, max: 1 });
  const c = await pool.connect();
  let carried: Item[] = [];
  try {
    const wanted = [...new Set([...ALL_ROWS.map((r) => r.id), ...ITEM_IDS, ...REPAIR_IDS])];
    // EVERY FIELD THE SEED CARRIES, ALIASED TO THE SEED'S CASING.
    // `select *` is not the fix: `content_items` has 38 columns, the seed
    // carries 21, and the database is snake_case where the seed is camelCase.
    // a2.07's first version named twelve and silently DROPPED gender, audioRef
    // and cardType from every row it touched.
    const r = await c.query<Item & { status: string; kind?: string; level?: string; gender?: string | null; en?: string }>(
      `select id, kind, level, theme, fr, en, ipa, respell, notes, tags, drills,
              gender, example, prompt, skill, register, version, status,
              audio_ref as "audioRef", card_type as "cardType",
              verb_check as "verbCheck", grammar_points as "grammarPoints"
         from content_items where id = any($1::text[])`, [wanted]);
    const unpublished = r.rows.filter((x) => x.status !== 'published');
    if (unpublished.length) die(`${unpublished.length} referenced row(s) are not published: ${unpublished.map((x) => x.id).join(', ')}`);
    const missing = wanted.filter((w) => !r.rows.some((x) => x.id === w));
    if (missing.length) {
      die(`${missing.length} referenced row(s) are not in Postgres at all: ${missing.join(', ')}. `
        + 'Run `pnpm content:demonstratifs` FIRST. Postgres first, seed second.');
    }

    // THE REPAIRS MUST ALREADY BE IN POSTGRES. A merge that ran before the
    // batch would carry the OLD value and the two copies would disagree under
    // one lesson version, which is the drift this project has lost work to.
    for (const rep of RESPELL_REPAIRS) {
      const row = r.rows.find((x) => x.id === rep.id);
      if (!row) die(`${rep.id} is a repair row and did not come back from Postgres`);
      if (row.respell !== rep.to) {
        die(`${rep.id} reads "${row.respell}" in Postgres and the repair table says "${rep.to}". `
          + 'Run `pnpm content:demonstratifs` FIRST.');
      }
      if (hasPlainNasalFor(row.fr ?? '', row.respell ?? '')) die(`${rep.id} is repaired in Postgres and the checker still flags it`);
    }

    // NO GENDERED SINGLE WORD REACHES THE SEED THROUGH THIS MERGE. The batch
    // checks the imports; this checks everything that is about to be written,
    // which is the set that actually moves a1.03.
    const gendered = r.rows.filter((x) => x.gender && x.kind === 'word'
      && !(x.fr ?? '').replace(/^(le |la |les |l'|un |une |des )/, '').includes(' '));
    if (gendered.length) {
      die(`${gendered.length} row(s) about to be carried are gendered single words: ${gendered.map((x) => `${x.id} "${x.fr}"`).join(', ')}`);
    }

    // NOTHING CARRIED HOLDS A POSSESSIVE PRONOUN, AN OBJECT PRONOUN, THE
    // IMPERSONAL `ce`, OR THE NOUN THAT MUST STAY UNSEEN. These are the same
    // four boundaries the batch enforces on the lesson body, applied to the
    // rows themselves, because a row is a card and a card is a learner surface.
    for (const x of r.rows) {
      const fr = x.fr ?? '';
      for (const p of POSSESSIVE_FORMS) if (fr.toLowerCase().includes(p.toLowerCase())) die(`${x.id} "${fr}" carries "${p}", which belongs to a2.34`);
      for (const p of OBJECT_FORMS) if (hasWord(fr, p)) die(`${x.id} "${fr}" carries "${p}", which belongs to a2.24`);
      for (const p of IMPERSONAL_FORMS) if (hasWord(fr, p)) die(`${x.id} "${fr}" carries "${p}", which is trap 4 and is taught nowhere`);
      if (hasWord(fr, UNSEEN.noun)) die(`${x.id} "${fr}" carries "${UNSEEN.noun}", which must stay unseen`);
      if ((x.respell ?? '').includes(TIE_GLYPH)) die(`${x.id} carries a U+203F tie, which draws as an underscore on a Pixel 6`);
    }

    // THE SEED'S NULL CONVENTION. Every optional field is OMITTED when empty and
    // never null-valued, EXCEPT `audioRef`, which is present and null on every
    // row. A null `respell` fails seed validation and dropping a null `audioRef`
    // diverges from every other row in the file. Both halves matter.
    carried = r.rows.map(({ status, ...rest }) => {
      const row: Record<string, unknown> = { ...rest, drills: toArray(rest.drills) };
      for (const k of OMIT_IF_NULL) if (isEmptyOptional(row[k])) delete row[k];
      row.audioRef = row.audioRef ?? null;
      return row as Item;
    });
    const foreign = carried.filter((x) => x.theme !== THEME);
    const alreadyInSeed = new Set(seed.items.map((i) => i.id));
    const genuinelyNew = carried.filter((x) => !alreadyInSeed.has(x.id));
    console.log(`\n  pulled ${carried.length} referenced rows from Postgres (authored ${ALL_ROWS.length}, imported ${carried.length - ALL_ROWS.length})`);
    console.log(`  of those, ${foreign.length} land in themes this unit does not own: ${[...new Set(foreign.map((x) => x.theme))].sort().join(', ')}`);
    console.log(`  and ${genuinelyNew.length} are NEW to the seed, because three quarters of \`${THEME}\` is outside the cut`);
    const a1 = carried.filter((x) => (x as { level?: string }).level === 'a1');
    console.log(`  ${a1.length} of them are a1 rows, and a1.03 scopes its statistic to level a1`);
    const b1 = carried.filter((x) => (x as { level?: string }).level === 'b1');
    console.log(`  ${b1.length} of them are b1 rows, which is the block the prompt did not know existed`);
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
      for (const k of OMIT_IF_NULL) if (isEmptyOptional(target[k])) delete target[k];
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
    // WAS `=== null` ONLY, which is a third spelling of the same rule in one
    // file. All three call sites now share `isEmptyOptional`.
    for (const k of OMIT_IF_NULL) if (k in row && isEmptyOptional(row[k])) { delete row[k]; sanitised++; }
  }
  if (sanitised) console.log(`  sanitised ${sanitised} null optional field(s) written by an earlier run`);

  // DO NOT SORT. `seed.json` is NOT stored in id order, so sorting rewrites the
  // position of every row in the file. a2.07's first version did exactly that:
  // 9,515 items changed index, the content was identical and the diff was
  // 512,711 lines. On a file several concurrent builds are writing, that is an
  // unreviewable diff and a guaranteed conflict with every other author.
  seed.items = [...byId.values()];

  // Upsert the lesson. Not sorted, for the same reason.
  //
  // AND NOT REWRITTEN WHEN NOTHING CHANGED, WHICH IS THE SAME LESSON AS
  // `grammarPoints` ONE LEVEL UP.
  //
  // `content:publish` regenerates the seed FROM Postgres, where the body is
  // `jsonb` — and jsonb NORMALISES KEY ORDER. This script writes the body from
  // the TypeScript object literal, in source order. So after any publish the
  // two orders differ, and an unconditional assignment rewrites every line of
  // the lesson to say exactly what it already said: measured at 1,216
  // insertions and 1,216 deletions for ZERO semantic change, on a file several
  // builds are writing at once.
  //
  // That is the same "unreviewable diff and a guaranteed conflict with every
  // other author" this file already warns about for sorting. So the comparison
  // is order-insensitive and an unchanged lesson is left exactly as it is.
  const orderInsensitiveEqual = (a: unknown, b: unknown): boolean => {
    if (a === b) return true;
    if (Array.isArray(a) || Array.isArray(b)) {
      if (!Array.isArray(a) || !Array.isArray(b) || a.length !== b.length) return false;
      return a.every((x, i) => orderInsensitiveEqual(x, b[i]));
    }
    if (a && b && typeof a === 'object' && typeof b === 'object') {
      const ka = Object.keys(a as object), kb = Object.keys(b as object);
      if (ka.length !== kb.length) return false;
      return ka.every((k) => k in (b as object)
        && orderInsensitiveEqual((a as Record<string, unknown>)[k], (b as Record<string, unknown>)[k]));
    }
    return false;
  };
  const li = seed.lessons.findIndex((l) => l.id === LESSON.id);
  if (li < 0) {
    seed.lessons.push(LESSON as unknown as Lesson);
    console.log(`\n  ${LESSON.id} added to the seed`);
  } else if (orderInsensitiveEqual(seed.lessons[li], LESSON)) {
    console.log(`\n  ${LESSON.id} is already in the seed and identical; left untouched (no key-order churn)`);
  } else {
    seed.lessons[li] = LESSON as unknown as Lesson;
    console.log(`\n  ${LESSON.id} differs from the seed and was rewritten`);
  }

  // Carry the unit row: lessonIds only. `themes` is null on this unit in
  // Postgres, in the spine and here, and this build does not create a themes
  // array. The corpus lives in `pronoms-essentiels`, which three other lessons
  // already write into, and the unit has never claimed it.
  const unit = seed.units.find((u) => u.id === UNIT.id);
  if (!unit) die(`${UNIT.id} is not in the seed`);
  if (unit.themes != null) die(`${UNIT.id}.themes is ${JSON.stringify(unit.themes)} and this build does not create one`);
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

  const afterById = new Map(after.items.map((i) => [i.id, i]));

  // THE REPAIRS REACHED THE DEVICE.
  for (const rep of RESPELL_REPAIRS) {
    const row = afterById.get(rep.id);
    if (!row) die(`${rep.id} is a repair row and is not in the seed`);
    if (row.respell !== rep.to) die(`${rep.id} reads "${row.respell}" in the seed and should read "${rep.to}"`);
  }

  // THE EIGHT GRID CELLS AND THE EIGHT `-ci`/`-là` CELLS REACHED THE SEED.
  // Asserted cell by cell, by name, so a dropped form fails with the form it
  // dropped rather than with a count.
  for (const cell of GRID_CELLS) {
    const row = afterById.get(cell.id);
    if (!row) die(`${cell.id} is the ${cell.gender} ${cell.number} ${cell.job} cell and did not reach the seed`);
    if (!hasWord(row.fr ?? '', cell.form)) die(`${cell.id} reached the seed without "${cell.form}"`);
  }
  for (const cell of CI_LA_CELLS) {
    const row = afterById.get(cell.id);
    if (!row) die(`the ${cell.form} card (${cell.id}) did not reach the seed`);
  }
  // AND THE EIGHT HEADWORDS, seven of which were outside the cut entirely.
  for (const id of IMPORTED.headwords) {
    const row = afterById.get(id);
    if (!row) die(`${id} is one of the eight headwords and did not reach the seed`);
    if (!row.respell) die(`${id} reached the seed without its respelling, and this lesson prints it`);
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
  console.log(`  ${RESPELL_REPAIRS.length} repaired respellings read back clean: ${RESPELL_REPAIRS.map((r) => `${r.fr} ${r.from}->${r.to}`).join(', ')}`);
  console.log(`  all eight grid cells and all eight -ci/-là cards present`);
  console.log(`  seed.version left at ${after.version} (the publish step owns it)`);
  console.log('\n  NEXT: re-run the suite. If the a1.03 report above says its figures MOVED,');
  console.log('  follow the remedy it printed BEFORE committing, or the shipped card and its');
  console.log('  source end up as two bodies under one version.\n');
}

main();
