// a2.34.l1 « Pronoms possessifs » — merge into ealch-v2/src/content/seed.json.
//
//   pnpm tsx scripts/merge-pronoms-possessifs-into-seed.ts
//
// ══════════════════════════════════════════════════════════════════════════
//  NOT ONE OF THE EIGHTEEN HEADWORDS THIS LESSON IMPORTS IS IN THE CUT
// ══════════════════════════════════════════════════════════════════════════
//
// Measured 2026-08-18, published in Postgres against present in `seed.json`:
//
//     pronoms-essentiels     661 published,  202 in the seed
//     comparaisons           319 published,   71 in the seed
//
// And every `fr.b1.*` and `fr.b2.*` possessive headword reports `inSeed=n`. So a
// merge that carried only the authored rows would ship a lesson whose tapTable,
// whose flashcards, whose reviewDeck and whose practice section all resolve to
// nothing. a2.11 found that NEITHER of the two rows its lesson leaned on
// hardest was in the seed.
//
// The nine imported COMPARATIVE sentences are worse: they live in three themes
// cut harder still, and not one of them can be released by a tranche. If they
// do not come across, six groupDrill items and four term examples resolve to
// nothing.
//
// ══════════════════════════════════════════════════════════════════════════
//  THE ELEVEN REPAIRED RESPELLINGS COME ACROSS TOO
// ══════════════════════════════════════════════════════════════════════════
//
// All eleven are `fr.b1.*` / `fr.b2.*` rows this lesson also imports, so they
// are inside the carry set anyway and arrive repaired. Read back and asserted
// after the write: a repair applied to Postgres and not carried to the seed is
// a repair the device never sees.
//
// AND THE SPLIT IS ASSERTED IN THE SEED, NOT JUST IN POSTGRES. Six of the
// eleven repair a FALSE POSITIVE — `la mienne` has a real /n/ and no nasal at
// all — and the value the checker's own report would have produced collapses
// the feminine onto the masculine. If only half the table reached the device
// the lesson would print two identical respellings on the one card that says
// they differ.
//
// ══════════════════════════════════════════════════════════════════════════
//  A CARRY MOVES A POPULATION EVEN WHEN AN AUTHORING DOES NOT
// ══════════════════════════════════════════════════════════════════════════
//
// a1.23 proved that against a1.03's measured ending statistic, and a1.11,
// a1.22, a1.26, a2.26, a2.27, a2.29, a2.30, a2.31, a2.32, a2.08 and a2.33 all
// met it again. THIS BUILD CARRIES ONE a1 ROW, which is the smallest a1 carry
// in the tail, so the risk is lower than usual and it is still measured.
//
// THE TWO THINGS IN ITS FAVOUR, both asserted rather than assumed:
//   1. NOT ONE AUTHORED ROW IS GENDERED. Thirty sentences and one two-word
//      phrase; none of them is a noun.
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
  NOT_IMPORTED, UNSEEN, TIE_GLYPH, NO_SUCH_FORM,
  PAIR_CELLS, GRID_CELLS, THREE_FORM_FAMILIES, LEUR_PLURAL_PAIR,
  CIRCUMFLEX_PAIRS, REGISTER_PAIRS, DEMONSTRATIVE_PRONOUNS,
} from './data/pronoms-possessifs-corpus.ts';
import { LESSON, ITEM_IDS } from './data/pronoms-possessifs-lesson.ts';
import { hasPlainNasalFor } from '../../ealch-v2/src/content/density.logic.ts';

const SEED = new URL('../../ealch-v2/src/content/seed.json', import.meta.url);
const die: (m: string) => never = (m) => { console.error(`\n  STOP: ${m}\n`); process.exit(1); };

type Item = { id: string; theme?: string; fr?: string; en?: string; respell?: string | null; drills?: unknown };
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

/** THE LESSONS THIS MERGE MUST NOT DISTURB, NAMED RATHER THAN COUNTED.
 *  Invariants §5: a count alone lets a one-for-one swap through. These six are
 *  the ones whose content this build is nearest to: the prerequisite whose rule
 *  it quotes, the two neighbours whose strings it quotes, the lesson it imports
 *  from, the one that shares its theme, and a1.03, whose measured ending
 *  statistic a carry can move. */
const MUST_SURVIVE = ['a1.17.l1', 'a2.24.l1', 'a2.33.l1', 'a2.08.l1', 'a2.25.l1', 'a1.03.l1'] as const;

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

  // THE ROWS DELIBERATELY LEFT BEHIND STAY LEFT BEHIND. Checked here as well as
  // in the batch, because this is the script that decides what reaches a device.
  for (const n of NOT_IMPORTED) {
    if (ITEM_IDS.includes(n.id)) die(`${n.id} is on the do-not-import list (${n.why}) and the lesson carries it`);
  }

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
    const r = await c.query<Item & { status: string; kind?: string; level?: string; gender?: string | null }>(
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
        + 'Run `pnpm content:pronoms-possessifs` FIRST. Postgres first, seed second.');
    }

    // THE REPAIRS MUST ALREADY BE IN POSTGRES. A merge that ran before the batch
    // would carry the OLD value and the two copies would disagree under one
    // lesson version, which is the drift this project has lost work to twice.
    for (const rep of RESPELL_REPAIRS) {
      const row = r.rows.find((x) => x.id === rep.id);
      if (!row) die(`${rep.id} is a repair row and did not come back from Postgres`);
      if (row.respell !== rep.to) {
        die(`${rep.id} reads "${row.respell}" in Postgres and the repair table says "${rep.to}". `
          + 'Run `pnpm content:pronoms-possessifs` FIRST.');
      }
      if (hasPlainNasalFor(row.fr ?? '', row.respell ?? '')) die(`${rep.id} is repaired in Postgres and the checker still flags it`);
    }
    // AND THE FEMININE DID NOT COLLAPSE ONTO THE MASCULINE. The whole reason six
    // of the eleven are `house: true` is that the checker's own report would
    // have produced a value identical to the masculine's, and the lesson prints
    // both on one card.
    for (const [f, m] of [
      ['fr.b1.pronoms-essentiels.027', 'fr.b1.pronoms-essentiels.026'],
      ['fr.b1.pronoms-essentiels.029', 'fr.b1.pronoms-essentiels.028'],
      ['fr.b1.pronoms-essentiels.032', 'fr.b1.pronoms-essentiels.031'],
      ['fr.b1.pronoms-essentiels.035', 'fr.b1.pronoms-essentiels.034'],
      ['fr.b2.pronoms-essentiels.002', 'fr.b2.pronoms-essentiels.001'],
    ] as [string, string][]) {
      const fem = r.rows.find((x) => x.id === f)!;
      const masc = r.rows.find((x) => x.id === m)!;
      const tail = (s: string) => s.split(' ').pop() ?? '';
      if (tail(fem.respell ?? '') === tail(masc.respell ?? '')) {
        die(`${f} "${fem.fr}" and ${m} "${masc.fr}" respell their endings identically ("${tail(fem.respell ?? '')}"), which is the collapse corpus §E exists to prevent`);
      }
    }

    // NO GENDERED SINGLE WORD REACHES THE SEED THROUGH THIS MERGE.
    const gendered = r.rows.filter((x) => x.gender && x.kind === 'word'
      && !(x.fr ?? '').replace(/^(le |la |les |l'|un |une |des )/, '').includes(' '));
    if (gendered.length) {
      die(`${gendered.length} row(s) about to be carried are gendered single words: ${gendered.map((x) => `${x.id} "${x.fr}"`).join(', ')}`);
    }

    // NOTHING CARRIED HOLDS A DEMONSTRATIVE PRONOUN, THE NOUN THAT MUST STAY
    // UNSEEN, A FORM THAT DOES NOT EXIST, OR A U+203F TIE. A row is a card and
    // a card is a learner surface, so the same boundaries the batch enforces on
    // the lesson body are enforced on the rows themselves.
    for (const x of r.rows) {
      const fr = x.fr ?? '';
      for (const d of DEMONSTRATIVE_PRONOUNS) {
        if (hasWord(fr, d)) die(`${x.id} "${fr}" carries "${d}", which belongs to a2.33`);
      }
      if (hasWord(fr, UNSEEN.noun)) die(`${x.id} "${fr}" carries "${UNSEEN.noun}", which must stay unseen`);
      if (hasWord(fr, NO_SUCH_FORM)) die(`${x.id} "${fr}" carries "${NO_SUCH_FORM}", which is not a form of French`);
      if ((x.respell ?? '').includes(TIE_GLYPH)) die(`${x.id} carries a U+203F tie, which draws as an underscore on a Pixel 6`);
    }

    // THE SEED'S NULL CONVENTION. Every optional field is OMITTED when empty and
    // never null-valued, EXCEPT `audioRef`, which is present and null on every
    // row. A null `respell` fails seed validation and dropping a null `audioRef`
    // diverges from every other row in the file.
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
    console.log(`  and ${genuinelyNew.length} are NEW to the seed, because two thirds of \`${THEME}\` is outside the cut`);
    const byLevel: Record<string, number> = {};
    for (const x of carried) byLevel[(x as { level?: string }).level ?? '?'] = (byLevel[(x as { level?: string }).level ?? '?'] ?? 0) + 1;
    console.log(`  by level: ${JSON.stringify(byLevel)} — a1.03 scopes its statistic to level a1`);
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
  // 512,711 lines.
  seed.items = [...byId.values()];

  // Upsert the lesson. Not sorted, for the same reason.
  const li = seed.lessons.findIndex((l) => l.id === LESSON.id);
  if (li >= 0) seed.lessons[li] = LESSON as unknown as Lesson;
  else seed.lessons.push(LESSON as unknown as Lesson);

  // Carry the unit row: lessonIds only. `themes` is null on this unit in
  // Postgres, in the spine and here, and this build does not create a themes
  // array. The corpus lives in `pronoms-essentiels`, which four other lessons
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

  // THE THREE REQUIRED LAYOUTS REACHED THE SEED, ROW BY ROW, BY NAME, so a
  // dropped cell fails with the cell it dropped rather than with a count.
  for (const cell of GRID_CELLS) {
    const row = afterById.get(cell.id);
    if (!row) die(`${cell.id} is the ${cell.gender} ${cell.number} cell of required layout 1 and did not reach the seed`);
    if (!hasWord(row.fr ?? '', cell.form)) die(`${cell.id} reached the seed without "${cell.form}"`);
    if (!hasWord(row.fr ?? '', cell.noun)) die(`${cell.id} reached the seed without the owned noun "${cell.noun}" visible`);
  }
  for (const p of PAIR_CELLS) {
    for (const [id, form] of [[p.adj, p.adjForm], [p.pron, p.pronForm]] as [string, string][]) {
      const row = afterById.get(id);
      if (!row) die(`${id} is half of required layout 2 and did not reach the seed`);
      if (!hasWord(row.fr ?? '', form)) die(`${id} reached the seed without "${form}"`);
    }
  }
  for (const p of REGISTER_PAIRS) {
    for (const id of [p.written, p.spoken]) {
      if (!afterById.get(id)) die(`${id} is half of required layout 3 and did not reach the seed`);
    }
  }
  // AND THE TWO CLAIMS ACT 3 RESTS ON.
  for (const f of THREE_FORM_FAMILIES) {
    for (const id of [f.headwordM, f.headwordPl]) {
      const row = afterById.get(id);
      if (!row) die(`${id} is the published ${f.stem} headword and did not reach the seed`);
      if (!row.respell) die(`${id} reached the seed without its respelling, and this lesson prints it`);
    }
  }
  {
    const m = afterById.get(LEUR_PLURAL_PAIR.masculine);
    const fem = afterById.get(LEUR_PLURAL_PAIR.feminine);
    if (!m || !fem) die('the leur plural pair did not reach the seed, and it is the proof that the plural does not split');
    if (!hasWord(m.fr ?? '', LEUR_PLURAL_PAIR.form) || !hasWord(fem.fr ?? '', LEUR_PLURAL_PAIR.form)) {
      die('the leur plural pair reached the seed without "les leurs" on both halves');
    }
  }
  for (const p of CIRCUMFLEX_PAIRS) {
    const adj = afterById.get(p.adjective);
    const pron = afterById.get(p.pronoun);
    if (!adj || !pron) die(`the circumflex pair ${p.adjective}/${p.pronoun} did not reach the seed`);
    if (!(adj.fr ?? '').includes(p.bare)) die(`${p.adjective} reached the seed without "${p.bare}"`);
    if (!(pron.fr ?? '').includes(p.accented)) die(`${p.pronoun} reached the seed without "${p.accented}" — the circumflex is deliberate`);
  }
  // AND THE EIGHTEEN HEADWORDS, NOT ONE OF WHICH WAS IN THE CUT.
  for (const id of IMPORTED.headwords) {
    const row = afterById.get(id);
    if (!row) die(`${id} is one of the eighteen headwords and did not reach the seed`);
    if (!row.respell) die(`${id} reached the seed without its respelling, and this lesson prints it`);
  }
  // AND a2.24's THREE `leur` ROWS, which are trap 2.
  for (const id of IMPORTED.leurRows) {
    if (!afterById.get(id)) die(`${id} is one of a2.24's three leur rows and did not reach the seed`);
  }

  // THE LESSONS THIS MERGE MUST NOT DISTURB, NAMED RATHER THAN COUNTED.
  for (const id of survivorsBefore) {
    if (!after.lessons.some((l) => l.id === id)) die(`${id} was in the seed before this merge and is not in it now`);
  }
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
  console.log(`  ${RESPELL_REPAIRS.length} repaired respellings read back clean, and the feminine did not collapse onto the masculine`);
  console.log('  all four cells, all four adjective/pronoun pairs and both circumflex pairs present');
  console.log(`  seed.version left at ${after.version} (the publish step owns it)`);
  console.log('\n  NEXT: re-run the suite. If the a1.03 report above says its figures MOVED,');
  console.log('  follow the remedy it printed BEFORE committing, or the shipped card and its');
  console.log('  source end up as two bodies under one version.\n');
}

main();
