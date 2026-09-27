/* The B1+ import pipeline, seed half. Run AFTER b1-import.ts --apply.
 *
 *   pnpm tsx scripts/b1-merge-into-seed.ts <slugs> --dry    report, write nothing
 *   pnpm tsx scripts/b1-merge-into-seed.ts <slugs>          write seed.json
 *
 * POSTGRES FIRST, SEED SECOND. Everything carried here is READ FROM POSTGRES
 * (status 'published'), never from the source files, so the seed cannot run
 * ahead of the database. The source is only used to prove that Postgres holds
 * what was authored: if the published lesson body differs from the source, it
 * stops and says to re-run the import.
 *
 * What it carries, per lesson: the curriculum unit, the lesson, and every item
 * the lesson references (the same walk publish-content.ts uses for the seed
 * cut, `itemsReferencedBy`), projected exactly as publish projects them. An
 * authored row no lesson references is NOT carried, because the next publish
 * would cut it anyway.
 *
 * Guards:
 *  - every unit must be listed in SEED_CUT.units, or the next publish would
 *    drop it from the seed again (b1 is not a bundled track);
 *  - an existing seed item this merge does not own (not a B1-authored id) is
 *    never rewritten here; if Postgres has moved ahead of it, it is listed and
 *    left for the next publish to carry;
 *  - Lesson.version follows the no-text-bump rule;
 *  - twins are resolved exactly as b1-import.ts resolves them (resolveDedupe),
 *    so the lesson carried is the REWRITTEN one, and the published row each
 *    twin was deduped to is pulled from Postgres with the other references;
 *  - the seed must round-trip byte-identically before the write, and must not
 *    gain a single validateCorpus issue.
 *
 * Canonical formatting: JSON.stringify(seed, null, 2) + '\n'. NEVER undo a
 * merge with `git checkout seed.json`: re-run this, or remove your ids.
 */
import './env';
import { Pool } from 'pg';
import { readFileSync, writeFileSync } from 'node:fs';
import { validateCorpus } from '../../ealch-v2/src/content/schema.ts';
import { itemsReferencedBy } from './seed-cut.logic.ts';
import { SEED_CUT } from './seed-cut.config.ts';
import {
  B1_SLUGS, applyDedupe, dbRowToItem, addMissingThemes, type ThemeRow, mergeIntoSeed, sameDoc, unitBody, type SeedLike,
} from './b1-import.logic.ts';
import { loadLesson, resolveDedupe } from './b1-import.ts';

const argv = process.argv.slice(2);
const DRY = argv.includes('--dry');
const named = argv.filter((a) => !a.startsWith('--'));
const SEED = new URL('../../ealch-v2/src/content/seed.json', import.meta.url);

function die(msg: string): never {
  console.error(`\n  STOP  ${msg}\n`);
  process.exit(1);
}

async function main() {
  if (!named.length) die('name the lesson slugs to merge; there is no default, a merge is always deliberate');
  const unknown = named.filter((s) => !(B1_SLUGS as readonly string[]).includes(s));
  if (unknown.length) die(`unknown slug(s): ${unknown.join(', ')}`);

  const all = await Promise.all(B1_SLUGS.map(loadLesson));
  const run = all.filter((x) => named.includes(x.slug));
  const bandAuthored = new Set(all.flatMap((x) => x.rows.map((r) => r.id)));

  const notCut = run.map((x) => x.unit.id).filter((id) => !SEED_CUT.units.includes(id));
  if (notCut.length) die(`${notCut.join(', ')} not in SEED_CUT.units (seed-cut.config.ts). The next publish would drop them from the seed again.`);

  const raw = readFileSync(SEED, 'utf8');
  const seed = JSON.parse(raw) as SeedLike;
  if (`${JSON.stringify(seed, null, 2)}\n` !== raw) die('seed.json does not round-trip byte-identically; it is not in canonical form, so a rewrite would reformat it');
  const issuesBefore = validateCorpus(seed).length;
  console.log(`B1 SEED MERGE  ${DRY ? 'DRY, nothing will be written' : '*** WRITE ***'}`);
  console.log(`  seed v${seed.version}: ${seed.units.length} units, ${seed.lessons.length} lessons, ${seed.items.length} items, ${issuesBefore} validateCorpus issue(s) before`);

  const pool = new Pool({ connectionString: process.env.DATABASE_URL, max: 1 });
  const c = await pool.connect();
  const units: Record<string, unknown>[] = [];
  const lessons: Record<string, unknown>[] = [];
  const items = new Map<string, Record<string, unknown>>();
  let themeRows: ThemeRow[] = [];
  try {
    // The SAME twin decision the import made, so the lesson compared against
    // Postgres is the rewritten one, and the published twin rows it now names
    // are pulled into the seed below like any other referenced row.
    const twins = await resolveDedupe(c, all);
    const targets = new Set(twins.map.values());
    for (const x0 of run) {
      const x = applyDedupe(x0, twins.map);
      const r = await c.query<{ slug: string; kind: string; status: string; body: Record<string, unknown> }>(
        `select slug, kind::text as kind, status::text as status, body from content_units where slug = any($1::text[])`,
        [[x.unit.id, x.lesson.id]]);
      const u = r.rows.find((y) => y.slug === x.unit.id && y.kind === 'curriculum_unit' && y.status === 'published');
      const l = r.rows.find((y) => y.slug === x.lesson.id && y.kind === 'lesson' && y.status === 'published');
      if (!u || !l) die(`${x.lesson.id}: the unit or lesson is not published in Postgres. Run b1-import.ts --apply first.`);
      if (!sameDoc(u.body, unitBody(x.unit, x.lesson.id))) die(`${x.unit.id}: Postgres and the source disagree about the unit. Re-run the import before merging.`);
      if (!sameDoc(l.body, x.lesson)) die(`${x.lesson.id}: Postgres and the source disagree about the lesson. Re-run the import before merging.`);
      units.push(u.body);
      lessons.push(l.body);

      const ids = [...new Set(itemsReferencedBy(l.body as never))];
      const q = await c.query(
        `select id, kind::text as kind, level::text as level, theme, fr, en, ipa, respell,
                gender::text as gender, example, notes, tags, drills::text[] as drills, audio_ref, image_ref,
                segments, asset_key, version, skill::text as skill, register::text as register, can_do,
                grammar_points, modality::text as modality, verb_check, card_type::text as card_type, prompt,
                status::text as status
           from content_items where id = any($1::text[])`, [ids]);
      const missing = ids.filter((id) => !q.rows.some((y) => y.id === id && y.status === 'published'));
      if (missing.length) die(`${x.lesson.id} references ${missing.length} id(s) not published in Postgres, first ${missing[0]}`);
      for (const y of q.rows) items.set(y.id, dbRowToItem(y));
      const pulledTwins = ids.filter((id) => targets.has(id)).length;
      console.log(`  ${x.lesson.id.padEnd(9)} ${x.slug.padEnd(22)} ${String(ids.length).padStart(4)} referenced items read from Postgres, ${pulledTwins} of them published rows a twin was deduped to (${x.deduped.length} twins dropped)`);
    }
    const themeQ = await c.query<ThemeRow>(
      `select slug, title, domain, level_range_lo::text as level_range_lo, level_range_hi::text as level_range_hi,
              exam_flag, immig_flag, sub_themes from content_themes`);
    themeRows = themeQ.rows;
  } finally {
    c.release();
    await pool.end();
  }

  let merged: ReturnType<typeof mergeIntoSeed>;
  try {
    merged = mergeIntoSeed(seed, { units, lessons, items: [...items.values()] }, (id) => bandAuthored.has(id));
  } catch (e) {
    die((e as Error).message);
  }
  const { stats } = merged;
  console.log(`\n  units   +${stats.unitsAdded.length} added ${JSON.stringify(stats.unitsAdded)}, ${stats.unitsReplaced.length} replaced`);
  console.log(`  lessons +${stats.lessonsAdded.length} added ${JSON.stringify(stats.lessonsAdded)}, ${stats.lessonsReplaced.length} replaced`);
  console.log(`  items   +${stats.itemsAdded.length} added, ${stats.itemsReplaced.length} replaced, ${stats.itemsUnchanged} already in the seed and identical`);
  if (stats.itemsLeftAlone.length) {
    console.log(`  ! ${stats.itemsLeftAlone.length} referenced row(s) not owned by B1 differ from Postgres and were LEFT AS THE SEED HAS THEM (a publish carries the DB copy): ${stats.itemsLeftAlone.join(', ')}`);
  }
  const newThemes = addMissingThemes(merged.seed as never, themeRows);
  if (newThemes.length) console.log(`  themes +${newThemes.length} carried from Postgres into the seed's catalogue: ${newThemes.join(', ')}`);

  const issuesAfter = validateCorpus(merged.seed);
  if (issuesAfter.length > issuesBefore) {
    die(`the merged seed gains ${issuesAfter.length - issuesBefore} validateCorpus issue(s):\n  ${issuesAfter.slice(0, 8).map((i) => `${i.path}: ${i.message}`).join('\n  ')}`);
  }
  console.log(`  validateCorpus: ${issuesAfter.length} issue(s) after (${issuesBefore} before)`);
  console.log(`  seed after: ${merged.seed.units.length} units, ${merged.seed.lessons.length} lessons, ${merged.seed.items.length} items`);

  if (DRY) {
    console.log('\n  --dry: nothing was written.\n');
    return;
  }
  writeFileSync(SEED, `${JSON.stringify(merged.seed, null, 2)}\n`, 'utf8');
  const back = JSON.parse(readFileSync(SEED, 'utf8')) as SeedLike;
  const ids = new Set(back.items.map((i) => i.id as string));
  const dangling = lessons.flatMap((l) => itemsReferencedBy(l as never)).filter((id) => !ids.has(id));
  if (dangling.length) die(`${dangling.length} referenced id(s) are not in the written seed, first ${dangling[0]}`);
  console.log('\n  WRITTEN. NEXT: pnpm content:publish --dry-run (never a real publish from a merge session).\n');
}

void main();
