/* The B1+ import pipeline. ONE generic script for the whole band, not one per
 * lesson as A2 did.
 *
 *   pnpm tsx scripts/b1-import.ts              # DRY RUN, writes nothing
 *   pnpm tsx scripts/b1-import.ts --apply      # writes, in one transaction
 *
 * ── WHAT IT LANDS, AND WHAT IT DOES NOT ───────────────────────────────────
 *
 * Rows land with status 'draft'. NOTHING REACHES A LEARNER from this script.
 * Promoting to 'published' is a separate, deliberate step, so an import can be
 * reviewed in place and reverted by deleting drafts rather than by unpublishing
 * something people are mid-lesson in.
 *
 * ── THE THREE PLANES, AND THE ORDER ───────────────────────────────────────
 *
 * Postgres is canonical; seed.json is a CUT of it (~a quarter). The order is
 * always APPLY, then MERGE, then PUBLISH once both agree. This script is the
 * APPLY. Never `git checkout seed.json` to undo anything — it discards other
 * authors' uncommitted work; re-run the merge instead.
 *
 * ── THE TWO TRAPS THIS BAND HAS ALREADY WALKED INTO ───────────────────────
 *
 * 1. THE BATCH QUOTES ITSELF. b1.02 names 39 of b1.01's rows. A lesson checked
 *    against its own corpus reports those as missing. The fourteen import
 *    together: a named id resolves if ANY lesson in the batch authors it.
 *
 * 2. A SHARED NUMBER IS NOT A SHARED ID. recits-au-passe and projets-et-futur
 *    each hold 17 published rows numbered 116-132, which reads as a collision
 *    against b1.02's 116 floor. They are fr.a2 rows. The LEVEL is part of the
 *    id. Every check here compares full ids, never numbers.
 *
 * ── THE VERSION RULE ──────────────────────────────────────────────────────
 *
 * `Lesson.version` keys learner checkmarks and XP. It moves only when the
 * SECTION LIST changes. A re-import that would raise a version without the
 * section list changing is refused, because a bump wipes progress.
 */
import './env';
import { Pool } from 'pg';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { validateLesson, validateItem, validateUnit } from '../../ealch-v2/src/content/schema.ts';

const APPLY = process.argv.includes('--apply');
const HERE = dirname(fileURLToPath(import.meta.url));

const SLUGS = [
  'imparfait-formation', 'imparfait-usage', 'pc-imparfait', 'pc-imparfait-paires',
  'futur-simple', 'futur-irregulier', 'futur-usage', 'conditionnel-present',
  'politesse', 'si-clauses', 'qui-que', 'dont-ou', 'lequel-ce-qui', 'subjonctif-formation',
];

type Row = Record<string, unknown> & { id: string; theme: string; level: string };

function die(msg: string): never {
  console.error(`\n  FATAL  ${msg}\n`);
  process.exit(1);
}

async function main() {
  /* ── 1. GATHER, and validate before the database is even opened ───────── */
  const units: Record<string, unknown>[] = [];
  const lessons: Record<string, unknown>[] = [];
  const items = new Map<string, Row>();
  const problems: string[] = [];

  for (const slug of SLUGS) {
    const L: any = await import(`./data/b1/${slug}-lesson.ts`);
    const C: any = await import(`./data/b1/${slug}-corpus.ts`);
    const lesson = L.LESSON;
    const unit = { ...C.UNIT, level: 'b1', lessonIds: [lesson.id] };
    for (const i of validateLesson(lesson)) problems.push(`${lesson.id}: ${i.message}`);
    for (const i of validateUnit(unit)) problems.push(`${unit.id}: ${i.message}`);
    for (const r of C.ALL_ROWS as Row[]) {
      for (const i of validateItem(r, r.id)) problems.push(`${r.id}: ${i.message}`);
      items.set(r.id, r);
    }
    units.push(unit);
    lessons.push(lesson);
  }
  units.sort((a: any, b: any) => (a.seq ?? 0) - (b.seq ?? 0));

  // Trap 1: resolve names against the WHOLE batch, not one lesson's corpus.
  const seedPath = resolve(HERE, '../../ealch-v2/src/content/seed.json');
  const seed = JSON.parse(readFileSync(seedPath, 'utf8'));
  const seedItemIds = new Set<string>((seed.items ?? []).map((i: { id: string }) => i.id));
  for (const l of lessons as any[]) {
    const missing = (l.itemIds ?? []).filter((id: string) => !items.has(id) && !seedItemIds.has(id));
    if (missing.length) problems.push(`${l.id}: names ${missing.length} ids nothing authors or publishes, first ${missing[0]}`);
  }
  if (problems.length) die(`${problems.length} content problems, nothing was opened:\n  ${problems.slice(0, 10).join('\n  ')}`);

  const itemRows = [...items.values()];
  const unitSlugs = units.map((u: any) => u.id as string);
  const lessonSlugs = lessons.map((l: any) => l.id as string);

  console.log(`B1 IMPORT  ${APPLY ? '*** APPLY ***' : 'dry run, nothing will be written'}`);
  console.log(`  units ${units.length} | lessons ${lessons.length} | items ${itemRows.length}`);

  /* ── 2. PREFLIGHT against the live database ──────────────────────────── */
  if (!process.env.DATABASE_URL) die('DATABASE_URL is not set. Nothing was attempted.');
  const pool = new Pool({ connectionString: process.env.DATABASE_URL, max: 2 });
  const c = await pool.connect();
  const stop = async (msg: string): Promise<never> => { c.release(); await pool.end(); return die(msg); };

  // 2a. Not one target id may already exist. A first import is insert-only: an
  // existing row means somebody else owns it, or this already ran.
  const idClash = await c.query<{ id: string }>('select id from content_items where id = any($1)', [itemRows.map((r) => r.id)]);
  if (idClash.rowCount) {
    await stop(`${idClash.rowCount} item ids already exist in Postgres. This import is insert-only:\n  ${idClash.rows.slice(0, 8).map((r) => r.id).join('\n  ')}`);
  }
  const slugClash = await c.query<{ slug: string }>('select slug from content_units where slug = any($1)', [[...unitSlugs, ...lessonSlugs]]);
  if (slugClash.rowCount) {
    await stop(`${slugClash.rowCount} unit/lesson slugs already exist:\n  ${slugClash.rows.slice(0, 8).map((r) => r.slug).join('\n  ')}`);
  }

  // 2b. Trap 2: compare FULL IDS at or above each theme's authored floor. A
  // number match across levels is not a collision.
  const floors = new Map<string, number>();
  for (const r of itemRows) {
    const n = Number(r.id.split('.')[3]);
    if (Number.isFinite(n)) floors.set(r.theme, Math.min(floors.get(r.theme) ?? Infinity, n));
  }
  for (const [theme, floor] of floors) {
    const q = await c.query<{ id: string }>(
      `select id from content_items
        where theme = $1 and id like 'fr.b1.%'
          and nullif(regexp_replace(split_part(id,'.',4),'[^0-9]','','g'),'')::int >= $2`,
      [theme, floor],
    );
    const foreign = q.rows.map((r) => r.id).filter((id) => !items.has(id));
    if (foreign.length) {
      await stop(`${theme}: ${foreign.length} published fr.b1 rows sit at or above this batch's floor ${floor} and it does not own them:\n  ${foreign.slice(0, 8).join('\n  ')}`);
    }
    console.log(`  preflight ${theme.padEnd(26)} floor ${String(floor).padStart(4)}  clear`);
  }

  // 2c. A shrinking theme is somebody deleting rows. Report, and refuse to
  // write into a theme that is moving under us.
  for (const theme of floors.keys()) {
    const q = await c.query<{ n: string }>('select count(*) n from content_items where theme = $1', [theme]);
    console.log(`  ${theme.padEnd(26)} holds ${q.rows[0]!.n} rows today`);
  }

  if (!APPLY) {
    console.log('\n  DRY RUN COMPLETE. Every preflight passed. Re-run with --apply to write.');
    console.log('  Rows would land as status=draft, so nothing would reach a learner.');
    c.release();
    await pool.end();
    return;
  }

  /* ── 3. WRITE, in one transaction ────────────────────────────────────── */
  try {
    await c.query('begin');
    for (const r of itemRows as any[]) {
      await c.query(
        `insert into content_items
          (id, kind, level, theme, fr, en, ipa, respell, notes, tags, drills, version, status,
           generated_by, grammar_points, card_type, prompt, verb_check)
         values ($1,$2::item_kind,$3::content_level,$4,$5,$6,$7,$8,$9,$10,$11::text[]::drill_kind[],$12,'draft'::content_status,
                 'llm'::generated_by,$13,$14,$15,$16)`,
        [r.id, r.kind, r.level, r.theme, r.fr, r.en, r.ipa ?? null, r.respell ?? null, r.notes ?? null,
         r.tags ?? [], r.drills ?? [], r.version ?? 1, r.grammarPoints ?? [], r.cardType ?? null,
         r.prompt ?? null, r.verbCheck ? JSON.stringify(r.verbCheck) : null],
      );
    }
    for (const u of units as any[]) {
      await c.query(
        `insert into content_units (slug, title, kind, level, locale, status, body, version, generated_by)
         values ($1,$2,'curriculum_unit'::content_kind,$3::content_level,'fr'::user_locale,'draft'::content_status,$4,$5,'llm'::generated_by)`,
        [u.id, u.title, u.level, JSON.stringify(u), u.version ?? 1],
      );
    }
    for (const l of lessons as any[]) {
      await c.query(
        `insert into content_units (slug, title, kind, level, locale, status, body, version, generated_by)
         values ($1,$2,'lesson'::content_kind,$3::content_level,'fr'::user_locale,'draft'::content_status,$4,$5,'llm'::generated_by)`,
        [l.id, l.title, l.level, JSON.stringify(l), l.version ?? 1],
      );
    }
    await c.query('commit');
    console.log(`\n  APPLIED. ${itemRows.length} items, ${units.length} units, ${lessons.length} lessons, all status=draft.`);
    console.log('  NEXT: merge into seed.json, then publish once both planes agree.');
  } catch (e) {
    await c.query('rollback');
    await stop(`the transaction was rolled back, nothing was written: ${(e as Error).message}`);
  } finally {
    c.release();
    await pool.end();
  }
}

void main();
