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
 * TWO REGIMES (band-merge.logic.ts), read off the committed paid layer
 * ealch-v2/src/content/seed-packs.json:
 *  - legacy (layer empty): everything is written into seed.json, as always;
 *  - packs (seed.json is the free core): the full unit, the lesson and every
 *    referenced row the core lacks go into seed-packs.json, the unit's
 *    skeleton into seed.json, where the next --packs publish puts them.
 *
 * Guards:
 *  - legacy: every unit must be listed in SEED_CUT.units, or the next publish
 *    would drop it from the seed again (b1 is not a bundled track); packs:
 *    every band is a TEST_CUT track, so no list is needed;
 *  - an existing seed item this merge does not own (not a B1-authored id) is
 *    never rewritten here; if Postgres has moved ahead of it, it is listed and
 *    left for the next publish to carry;
 *  - Lesson.version follows the no-text-bump rule;
 *  - twins are resolved exactly as b1-import.ts resolves them (resolveDedupe),
 *    so the lesson carried is the REWRITTEN one, and the published row each
 *    twin was deduped to is pulled from Postgres with the other references;
 *  - the seed (and, under packs, the layer) must round-trip byte-identically
 *    before the write, and the corpus the tests read (seed + layer) must not
 *    gain a single validateCorpus issue; under packs the core must not gain one
 *    as a free device validates it either.
 *
 * Canonical formatting: JSON.stringify(seed, null, 2) + '\n'. NEVER undo a
 * merge with `git checkout seed.json`: re-run this, or remove your ids.
 */
import './env';
import { Pool } from 'pg';
import { readFileSync, writeFileSync } from 'node:fs';
import { validateCorpus, type Corpus } from '../../ealch-v2/src/content/schema.ts';
import { PACKS_LAYER_PATH, composeTestCorpus, regimeOf } from '../../ealch-v2/src/content/seed-plus-packs.ts';
import { heldBands, partialValidationView } from '../../ealch-v2/src/services/packs.logic.ts';
import { itemsReferencedBy } from './seed-cut.logic.ts';
import { mergeCutFor, mergeIntoPacksLayer, outsideCutMessage, unitsOutsideCut } from './band-merge.logic.ts';
import {
  BAND_SLUGS, parseBand, applyDedupe, dbRowToItem, addMissingThemes, type ThemeRow, mergeIntoSeed, sameDoc, unitBody, type SeedLike,
} from './b1-import.logic.ts';
import { loadLesson, resolveDedupe } from './b1-import.ts';

const { band: BAND, rest: argv } = parseBand(process.argv.slice(2));
const SLUGS = BAND_SLUGS[BAND];
const DRY = argv.includes('--dry');
const named = argv.filter((a) => !a.startsWith('--'));
const SEED = new URL('../../ealch-v2/src/content/seed.json', import.meta.url);
const canonical = (x: unknown) => `${JSON.stringify(x, null, 2)}\n`;

function die(msg: string): never {
  console.error(`\n  STOP  ${msg}\n`);
  process.exit(1);
}

async function main() {
  if (!named.length) die('name the lesson slugs to merge; there is no default, a merge is always deliberate');
  const unknown = named.filter((s) => !SLUGS.includes(s));
  if (unknown.length) die(`unknown slug(s): ${unknown.join(', ')}`);

  const all = await Promise.all(SLUGS.map((x) => loadLesson(x, BAND)));
  const run = all.filter((x) => named.includes(x.slug));
  const bandAuthored = new Set(all.flatMap((x) => x.rows.map((r) => r.id)));

  // The paid layer decides the regime (band-merge.logic.ts). Absent reads as
  // empty: a checkout from before packs is the legacy regime.
  let layerRaw: string | null = null;
  try {
    layerRaw = readFileSync(PACKS_LAYER_PATH, 'utf8');
  } catch {
    layerRaw = null;
  }
  const layer = layerRaw === null ? null : (JSON.parse(layerRaw) as SeedLike);
  const regime = regimeOf(layer as unknown as Corpus | null);
  const PACKS = regime === 'packs';

  const notCut = unitsOutsideCut(run.map((x) => x.unit.id), mergeCutFor(regime));
  if (notCut.length) die(outsideCutMessage(regime, notCut));

  const raw = readFileSync(SEED, 'utf8');
  const seed = JSON.parse(raw) as SeedLike;
  if (canonical(seed) !== raw) die('seed.json does not round-trip byte-identically; it is not in canonical form, so a rewrite would reformat it');
  if (PACKS && canonical(layer) !== layerRaw) die('seed-packs.json does not round-trip byte-identically; it is not in canonical form, so a rewrite would reformat it');
  // What the tests read, and (under packs) the core as a free device holds it.
  const testCorpus = (s: SeedLike, l: SeedLike | null) => composeTestCorpus(s as unknown as Corpus, l as unknown as Corpus | null);
  const coreView = (s: SeedLike) => partialValidationView(s as unknown as Corpus, { bands: heldBands([]), exam: false });
  const issuesBefore = validateCorpus(testCorpus(seed, layer)).length;
  const coreIssuesBefore = PACKS ? validateCorpus(coreView(seed)).length : 0;
  console.log(`${BAND.toUpperCase()} SEED MERGE  ${DRY ? 'DRY, nothing will be written' : '*** WRITE ***'}`);
  console.log(`  seed v${seed.version}: ${seed.units.length} units, ${seed.lessons.length} lessons, ${seed.items.length} items, ${issuesBefore} validateCorpus issue(s) before`);
  if (PACKS) {
    console.log(`  PACKS REGIME: seed.json is the free core (${coreIssuesBefore} issue(s) as a free device sees it); the paid layer seed-packs.json holds ${layer!.units.length} units, ${layer!.lessons.length} lessons, ${layer!.items.length} items. Full rows go to the layer, skeletons to seed.json.`);
  }

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

  const add = { units, lessons, items: [...items.values()] };
  const owned = (id: string) => bandAuthored.has(id);
  let merged: { seed: SeedLike; layer: SeedLike | null; stats: ReturnType<typeof mergeIntoSeed>['stats'] & { skeletonsAdded?: string[]; skeletonsReplaced?: string[]; itemsInCore?: number } };
  try {
    merged = PACKS
      ? mergeIntoPacksLayer(seed, layer!, add, owned)
      : { ...mergeIntoSeed(seed, add, owned), layer };
  } catch (e) {
    die((e as Error).message);
  }
  const { stats } = merged;
  const where = PACKS ? 'the layer' : 'the seed';
  console.log(`\n  units   +${stats.unitsAdded.length} added ${JSON.stringify(stats.unitsAdded)}, ${stats.unitsReplaced.length} replaced${PACKS ? ` (in ${where})` : ''}`);
  console.log(`  lessons +${stats.lessonsAdded.length} added ${JSON.stringify(stats.lessonsAdded)}, ${stats.lessonsReplaced.length} replaced${PACKS ? ` (in ${where})` : ''}`);
  console.log(`  items   +${stats.itemsAdded.length} added, ${stats.itemsReplaced.length} replaced, ${stats.itemsUnchanged} already in the seed and identical${PACKS ? ` (${stats.itemsInCore} of them in the core; added/replaced go to ${where})` : ''}`);
  if (PACKS) {
    console.log(`  skeletons in seed.json: +${stats.skeletonsAdded!.length} added ${JSON.stringify(stats.skeletonsAdded)}, ${stats.skeletonsReplaced!.length} replaced ${JSON.stringify(stats.skeletonsReplaced)}`);
  }
  if (stats.itemsLeftAlone.length) {
    console.log(`  ! ${stats.itemsLeftAlone.length} referenced row(s) not owned by B1 differ from Postgres and were LEFT AS THE SEED HAS THEM (a publish carries the DB copy): ${stats.itemsLeftAlone.join(', ')}`);
  }
  // The catalogue lives in seed.json in both regimes (the core carries it
  // whole), so a theme a layer row uses is added there.
  const catalogue = { themes: merged.seed.themes as never, items: [...merged.seed.items, ...(merged.layer?.items ?? [])] };
  const newThemes = addMissingThemes(catalogue as never, themeRows);
  if (newThemes.length) merged.seed = { ...merged.seed, themes: (catalogue as { themes: unknown }).themes };
  if (newThemes.length) console.log(`  themes +${newThemes.length} carried from Postgres into the seed's catalogue: ${newThemes.join(', ')}`);

  const issuesAfter = validateCorpus(testCorpus(merged.seed, merged.layer));
  if (issuesAfter.length > issuesBefore) {
    die(`the merged seed gains ${issuesAfter.length - issuesBefore} validateCorpus issue(s):\n  ${issuesAfter.slice(0, 8).map((i) => `${i.path}: ${i.message}`).join('\n  ')}`);
  }
  console.log(`  validateCorpus: ${issuesAfter.length} issue(s) after (${issuesBefore} before)`);
  if (PACKS) {
    const coreAfter = validateCorpus(coreView(merged.seed));
    if (coreAfter.length > coreIssuesBefore) {
      die(`the core seed gains ${coreAfter.length - coreIssuesBefore} issue(s) as a free device sees it:\n  ${coreAfter.slice(0, 8).map((i) => `${i.path}: ${i.message}`).join('\n  ')}`);
    }
    console.log(`  core as a free device sees it: ${coreAfter.length} issue(s) after (${coreIssuesBefore} before)`);
  }
  console.log(`  seed after: ${merged.seed.units.length} units, ${merged.seed.lessons.length} lessons, ${merged.seed.items.length} items`);
  if (PACKS) console.log(`  layer after: ${merged.layer!.units.length} units, ${merged.layer!.lessons.length} lessons, ${merged.layer!.items.length} items`);

  if (DRY) {
    console.log('\n  --dry: nothing was written.\n');
    return;
  }
  writeFileSync(SEED, canonical(merged.seed), 'utf8');
  if (PACKS) writeFileSync(PACKS_LAYER_PATH, canonical(merged.layer), 'utf8');
  const back = JSON.parse(readFileSync(SEED, 'utf8')) as SeedLike;
  const backLayer = PACKS ? (JSON.parse(readFileSync(PACKS_LAYER_PATH, 'utf8')) as SeedLike) : null;
  const ids = new Set([...back.items, ...(backLayer?.items ?? [])].map((i) => i.id as string));
  const dangling = lessons.flatMap((l) => itemsReferencedBy(l as never)).filter((id) => !ids.has(id));
  if (dangling.length) die(`${dangling.length} referenced id(s) are not in the written seed${PACKS ? ' or layer' : ''}, first ${dangling[0]}`);
  console.log('\n  WRITTEN. NEXT: pnpm content:publish --dry-run (never a real publish from a merge session).\n');
}

void main();
