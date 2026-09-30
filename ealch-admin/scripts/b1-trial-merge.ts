/* THE B1 TRIAL MERGE. Proves the app's FULL test suite passes with every B1
 * lesson in the seed, BEFORE any of them is written to Postgres.
 *
 *   pnpm tsx scripts/b1-trial-merge.ts               build the trial seed, run
 *                                                    `npm test` in ealch-v2 on it
 *   pnpm tsx scripts/b1-trial-merge.ts --build-only  build and report, no swap
 *   pnpm tsx scripts/b1-trial-merge.ts --out <file>  also write the trial seed there
 *
 * WHAT THE TRIAL SEED IS: the COMMITTED seed (`git show HEAD:...seed.json`)
 * plus all B1_SLUGS lessons assembled from their SOURCE files, exactly as
 * b1-import.ts + b1-merge-into-seed.ts would carry them: the unit body
 * (unitBody), the lesson with its twins rewritten to the published rows
 * (resolveDedupe + applyDedupe, the same band-wide decision both scripts make),
 * and every item the lesson references (itemsReferencedBy). A referenced row a
 * B1 lesson authors is taken from the source (normaliseItem, which is what the
 * import writes and the merge reads back); any other referenced row is read
 * from Postgres, READ-ONLY, as the merge reads it (dbRowToItem), and must be
 * published. mergeIntoSeed then applies the same upsert, version and ownership
 * rules the real merge applies.
 *
 * POSTGRES IS ONLY READ. Two selects: the twin decision and the referenced
 * published rows. Nothing is inserted, updated or promoted.
 *
 * PREMIUM PACKS (band-merge.logic.ts): when the committed paid layer
 * (seed-packs.json) has rows, seed.json is only the free core, so the trial
 * does what b1-merge-into-seed.ts does in that regime: the full units, lessons
 * and every row the core lacks go into the LAYER (mergeIntoPacksLayer), the
 * unit's skeleton into seed.json, and BOTH files are swapped for the run and
 * restored. Validation reads core + layer, as the tests do.
 *
 * THE SWAP: the working-tree seed.json is read into memory (and copied beside
 * it as seed.json.trial-backup), the trial seed is written in its place,
 * `npm test` runs, and a finally block puts the original bytes back and proves
 * it with a sha256. If the file changed under us during the run (another
 * session wrote it), it is NOT overwritten: the harness stops and says so, and
 * the backup copy is left for a human.
 */
import './env';
import { Pool } from 'pg';
import { createHash } from 'node:crypto';
import { execFileSync, spawnSync } from 'node:child_process';
import { copyFileSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { validateCorpus } from '../../ealch-v2/src/content/schema.ts';
import { itemsReferencedBy } from './seed-cut.logic.ts';
import {
  BAND_SLUGS, parseBand, addMissingThemes, applyDedupe, dbRowToItem, mergeIntoSeed, normaliseItem, sameDoc, unitBody, type Obj, type SeedLike, type ThemeRow,
} from './b1-import.logic.ts';
import { loadLesson, resolveDedupe } from './b1-import.ts';
import { mergeIntoPacksLayer } from './band-merge.logic.ts';
import { PACKS_LAYER_PATH, composeTestCorpus, regimeOf } from '../../ealch-v2/src/content/seed-plus-packs.ts';
import type { Corpus } from '../../ealch-v2/src/content/schema.ts';

const { band: BAND, rest: argv } = parseBand(process.argv.slice(2));
const SLUGS = BAND_SLUGS[BAND];
const BUILD_ONLY = argv.includes('--build-only');
const outIdx = argv.indexOf('--out');
const OUT = outIdx >= 0 ? argv[outIdx + 1] : undefined;
// --only <slug,slug,...>: merge ONLY these lessons on top of the committed seed,
// as one batch import would. Rows authored by a B1 lesson outside the batch are
// then NOT available from source: they must already be published in Postgres,
// exactly as in a real batch publish. The twin decision stays band-wide.
const onlyIdx = argv.indexOf('--only');
const ONLY = onlyIdx >= 0 ? new Set(argv[onlyIdx + 1].split(',').map((x) => x.trim()).filter(Boolean)) : null;

const HERE = dirname(fileURLToPath(import.meta.url));
const REPO = resolve(HERE, '../..');
const APP = resolve(REPO, 'ealch-v2');
const SEED = resolve(APP, 'src/content/seed.json');
const BACKUP = `${SEED}.trial-backup`;
const LAYER = PACKS_LAYER_PATH;
const LAYER_BACKUP = `${LAYER}.trial-backup`;
const LOG = resolve(HERE, '../scratch/b1-trial-merge.last.log');

const sha = (b: Buffer | string) => createHash('sha256').update(b).digest('hex');
function die(msg: string): never {
  console.error(`\n  STOP  ${msg}\n`);
  process.exit(1);
}

async function buildTrialSeed() {
  const head = execFileSync('git', ['show', 'HEAD:ealch-v2/src/content/seed.json'], {
    cwd: REPO, maxBuffer: 1 << 30,
  }).toString('utf8');
  const seed = JSON.parse(head) as SeedLike;
  // The committed paid layer decides the regime; a checkout from before packs
  // has no such file, which reads as the legacy regime.
  let layer: SeedLike | null = null;
  try {
    layer = JSON.parse(execFileSync('git', ['show', 'HEAD:ealch-v2/src/content/seed-packs.json'], {
      cwd: REPO, maxBuffer: 1 << 30, stdio: ['ignore', 'pipe', 'ignore'],
    }).toString('utf8')) as SeedLike;
  } catch {
    layer = null;
  }
  const PACKS = regimeOf(layer as unknown as Corpus | null) === 'packs';
  const testCorpus = (sd: SeedLike, ly: SeedLike | null) => composeTestCorpus(sd as unknown as Corpus, ly as unknown as Corpus | null);
  // PLAYLISTS ride with the working tree. Publish reads them from Postgres,
  // which is already ahead of HEAD (pl.b1.societe: « la sincérité » replaced a
  // banned word on 2026-09-26, uncommitted in seed.json). Carry any playlist the
  // working seed has changed, by id, so the trial is not red on a fix already made.
  const working = JSON.parse(readFileSync(SEED, 'utf8')) as SeedLike;
  const wPl = new Map(((working.playlists ?? []) as Obj[]).map((p) => [p.id as string, p]));
  const carried: string[] = [];
  seed.playlists = ((seed.playlists ?? []) as Obj[]).map((p) => {
    const w = wPl.get(p.id as string);
    if (w && !sameDoc(w, p)) { carried.push(p.id as string); return w; }
    return p;
  });
  // a1.03 PRINTS FIGURES MEASURED ON THE SEED, so the band's carried rows move
  // them, and the remedy (_a1_genre_remeasure.ts) re-measures genre-endings.ts
  // and re-renders a1.03 from genre-lesson.ts. Carry that re-render, so the
  // suite reads the body a publish would ship. It still has to reach Postgres.
  const { GENRE_LESSON } = await import('./data/genre-lesson.ts');
  const a103 = seed.lessons.findIndex((l) => l.id === 'a1.03.l1');
  const a103Moved = a103 >= 0 && !sameDoc(seed.lessons[a103], GENRE_LESSON);
  if (a103Moved) seed.lessons[a103] = JSON.parse(JSON.stringify(GENRE_LESSON)) as Obj;
  const issuesBefore = validateCorpus(testCorpus(seed, layer)).length;

  const source = await Promise.all(SLUGS.map((x) => loadLesson(x, BAND)));
  if (!process.env.DATABASE_URL) die('DATABASE_URL is not set; the twin decision needs a READ of Postgres.');
  const pool = new Pool({ connectionString: process.env.DATABASE_URL, max: 1 });
  const c = await pool.connect();
  const units: Obj[] = [];
  const lessons: Obj[] = [];
  const items = new Map<string, Obj>();
  const perLesson: string[] = [];
  let bandAuthored: Set<string>;
  let themeRows: ThemeRow[] = [];
  // Read-only for THIS transaction only. DATABASE_URL is Supabase's transaction
  // pooler (port 6543): a session-level `set session characteristics ... read
  // only` stays on the pooled server connection after we release it, and the
  // next client handed that connection (a theme update, an import --apply)
  // fails with 25006 « cannot execute UPDATE in a read-only transaction ».
  // It happened 2026-09-30. BEGIN ... READ ONLY dies with its COMMIT/ROLLBACK.
  let open = false;
  try {
    await c.query('begin transaction read only');
    open = true;
    const twins = await resolveDedupe(c, source);
    const all = source.map((x) => applyDedupe(x, twins.map));
    bandAuthored = new Set(source.flatMap((x) => x.rows.map((r) => r.id)));
    const batch = ONLY ? all.filter((x) => ONLY.has(x.slug)) : all;
    if (ONLY && batch.length !== ONLY.size) die(`--only names ${ONLY.size} slug(s) but ${batch.length} match ${BAND.toUpperCase()}_SLUGS`);
    const authoredRow = new Map(batch.flatMap((x) => x.rows.map((r) => [r.id, r] as const)));

    const refs = new Map<string, string[]>();
    for (const x of batch) refs.set(x.lesson.id, [...new Set(itemsReferencedBy(x.lesson as never))]);
    const outsideIds = [...new Set([...refs.values()].flat())].filter((id) => !authoredRow.has(id));
    const q = await c.query(
      `select id, kind::text as kind, level::text as level, theme, fr, en, ipa, respell,
              gender::text as gender, example, notes, tags, drills::text[] as drills, audio_ref, image_ref,
              segments, asset_key, version, skill::text as skill, register::text as register, can_do,
              grammar_points, modality::text as modality, verb_check, card_type::text as card_type, prompt,
              status::text as status
         from content_items where id = any($1::text[])`, [outsideIds]);
    const pub = new Map(q.rows.filter((r) => r.status === 'published').map((r) => [r.id as string, dbRowToItem(r)]));

    const missing: string[] = [];
    for (const x of batch) {
      units.push(unitBody(x.unit, x.lesson.id));
      lessons.push(x.lesson as Obj);
      const ids = refs.get(x.lesson.id)!;
      let fromSrc = 0, fromDb = 0;
      for (const id of ids) {
        const a = authoredRow.get(id);
        if (a) { items.set(id, normaliseItem(a)); fromSrc++; continue; }
        const p = pub.get(id);
        if (p) { items.set(id, p); fromDb++; continue; }
        missing.push(`${x.lesson.id} -> ${id}`);
      }
      perLesson.push(`  ${String(x.lesson.id).padEnd(9)} ${x.slug.padEnd(24)} ${String(ids.length).padStart(4)} refs (${fromSrc} source, ${fromDb} published), ${x.deduped.length} twins deduped`);
    }
    if (missing.length) die(`${missing.length} referenced id(s) are neither B1-authored nor published:\n  ${missing.slice(0, 12).join('\n  ')}`);
    const themeQ = await c.query<ThemeRow>(
      `select slug, title, domain, level_range_lo::text as level_range_lo, level_range_hi::text as level_range_hi,
              exam_flag, immig_flag, sub_themes from content_themes`);
    themeRows = themeQ.rows;
    await c.query('commit');
    open = false;
  } finally {
    if (open) await c.query('rollback').catch(() => {});
    c.release();
    await pool.end();
  }

  let merged: { seed: SeedLike; layer: SeedLike | null; stats: ReturnType<typeof mergeIntoSeed>['stats'] };
  try {
    const add = { units, lessons, items: [...items.values()] };
    const owned = (id: string) => bandAuthored.has(id);
    merged = PACKS ? mergeIntoPacksLayer(seed, layer!, add, owned) : { ...mergeIntoSeed(seed, add, owned), layer };
  } catch (e) {
    die(`${PACKS ? 'mergeIntoPacksLayer' : 'mergeIntoSeed'} refused: ${(e as Error).message}`);
  }
  const s = merged.stats;
  const newThemes = addMissingThemes(merged.seed as never, themeRows);
  console.log(`${BAND.toUpperCase()} TRIAL MERGE  (HEAD seed v${seed.version}${PACKS ? ' + packs layer' : ''} + ${ONLY ? ONLY.size : SLUGS.length} source lessons${ONLY ? ' (--only)' : ''}; Postgres read-only)`);
  for (const l of perLesson) console.log(l);
  if (newThemes.length) console.log(`  themes +${newThemes.length} carried from Postgres into the catalogue: ${newThemes.join(', ')}`);
  if (carried.length) console.log(`  playlists carried from the working-tree seed (changed since HEAD): ${carried.join(', ')}`);
  if (a103Moved) console.log('  ! a1.03.l1 re-rendered from genre-lesson.ts (its printed figures moved). Postgres still holds the old body: it must be updated before a publish.');
  console.log(`  units +${s.unitsAdded.length} added, ${s.unitsReplaced.length} replaced | lessons +${s.lessonsAdded.length} added, ${s.lessonsReplaced.length} replaced ${s.lessonsReplaced.length ? JSON.stringify(s.lessonsReplaced) : ''}`);
  console.log(`  items +${s.itemsAdded.length} added, ${s.itemsReplaced.length} replaced, ${s.itemsUnchanged} identical${s.itemsLeftAlone.length ? `, ${s.itemsLeftAlone.length} non-B1 rows left as the seed has them` : ''}`);
  const composed = testCorpus(merged.seed, merged.layer) as unknown as SeedLike;
  const issuesAfter = validateCorpus(composed as unknown as Corpus);
  console.log(`  validateCorpus: ${issuesAfter.length} after (${issuesBefore} before)`);
  if (issuesAfter.length > issuesBefore) for (const i of issuesAfter.slice(0, 10)) console.log(`    ${i.path}: ${i.message}`);
  const b1 = composed.lessons.filter((l) => /^b1\./.test(String(l.id))).length;
  console.log(`  trial ${PACKS ? 'core + layer' : 'seed'}: ${composed.units.length} units, ${composed.lessons.length} lessons (${b1} B1), ${composed.items.length} items`);
  return {
    seed: `${JSON.stringify(merged.seed, null, 2)}\n`,
    layer: PACKS ? `${JSON.stringify(merged.layer, null, 2)}\n` : null,
  };
}

function summarise(out: string) {
  const lines = out.split(/\r?\n/);
  const stat = (k: string) => lines.map((l) => l.match(new RegExp(`^(?:ℹ|#) ${k} (\\d+)`))?.[1]).filter(Boolean).pop();
  const fails = lines.filter((l) => /^\s*✖ /.test(l) || /^not ok /.test(l));
  // The spec reporter repeats every failure under "failing tests"; show each once.
  const uniq = [...new Set(fails.map((l) => l.trim()))];
  console.log(`\n  npm test: tests ${stat('tests')} | pass ${stat('pass')} | fail ${stat('fail')} | cancelled ${stat('cancelled')} | skipped ${stat('skipped')}`);
  if (uniq.length) {
    console.log(`  FAILING (${uniq.length} lines, full log in ${LOG}):`);
    for (const l of uniq.slice(0, 80)) console.log(`    ${l}`);
  }
  return Number(stat('fail') ?? NaN);
}

async function main() {
  const built = await buildTrialSeed();
  const trial = built.seed;
  if (OUT) {
    writeFileSync(OUT, trial, 'utf8');
    if (built.layer !== null) writeFileSync(`${OUT}.packs.json`, built.layer, 'utf8');
    console.log(`  wrote the trial seed to ${OUT}${built.layer !== null ? ` (and its layer to ${OUT}.packs.json)` : ''}`);
  }
  if (BUILD_ONLY) return;

  const original = readFileSync(SEED);
  const originalHash = sha(original);
  copyFileSync(SEED, BACKUP);
  const trialHash = sha(trial);
  // Under packs the layer is swapped too, and restored the same way.
  const layerOriginal = built.layer !== null ? readFileSync(LAYER) : null;
  const layerOriginalHash = layerOriginal ? sha(layerOriginal) : '';
  if (layerOriginal) copyFileSync(LAYER, LAYER_BACKUP);
  const layerTrialHash = built.layer !== null ? sha(built.layer) : '';
  let output = '';
  let status: number | null = null;
  const t0 = Date.now();
  try {
    writeFileSync(SEED, trial, 'utf8');
    if (built.layer !== null) writeFileSync(LAYER, built.layer, 'utf8');
    const r = spawnSync('npm test', { cwd: APP, shell: true, encoding: 'utf8', maxBuffer: 1 << 30, env: { ...process.env, FORCE_COLOR: '0', NO_COLOR: '1' } });
    output = `${r.stdout ?? ''}\n${r.stderr ?? ''}`;
    status = r.status;
  } finally {
    const now = readFileSync(SEED);
    if (sha(now) !== trialHash && sha(now) !== originalHash) {
      console.error(`\n  !! seed.json changed during the trial run (another writer). NOT restored. The pre-trial bytes are in ${BACKUP} (sha256 ${originalHash}).`);
      process.exitCode = 2;
    } else {
      writeFileSync(SEED, original);
      const back = sha(readFileSync(SEED));
      if (back !== originalHash) {
        console.error(`\n  !! restore FAILED: ${back} != ${originalHash}. The pre-trial bytes are in ${BACKUP}.`);
        process.exitCode = 2;
      } else {
        rmSync(BACKUP);
        console.log(`\n  seed.json restored byte-identical (sha256 ${originalHash.slice(0, 16)}...), swap window ${((Date.now() - t0) / 1000).toFixed(0)}s`);
      }
    }
    if (layerOriginal) {
      const nowL = readFileSync(LAYER);
      if (sha(nowL) !== layerTrialHash && sha(nowL) !== layerOriginalHash) {
        console.error(`\n  !! seed-packs.json changed during the trial run (another writer). NOT restored. The pre-trial bytes are in ${LAYER_BACKUP} (sha256 ${layerOriginalHash}).`);
        process.exitCode = 2;
      } else {
        writeFileSync(LAYER, layerOriginal);
        if (sha(readFileSync(LAYER)) !== layerOriginalHash) {
          console.error(`\n  !! seed-packs.json restore FAILED. The pre-trial bytes are in ${LAYER_BACKUP}.`);
          process.exitCode = 2;
        } else {
          rmSync(LAYER_BACKUP);
          console.log(`  seed-packs.json restored byte-identical (sha256 ${layerOriginalHash.slice(0, 16)}...)`);
        }
      }
    }
  }
  writeFileSync(LOG, output, 'utf8');
  const fail = summarise(output);
  console.log(`  npm test exit status ${status}`);
  if (status !== 0 || fail !== 0) process.exitCode = process.exitCode || 1;
}

void main();
