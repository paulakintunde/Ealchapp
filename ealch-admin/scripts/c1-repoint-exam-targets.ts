/* Repoint the twelve C1 closed exam tasks' target_item_ids to c1.20 / c1.21
 * rule cards (Paul, C1 wave 1 decision 7a and 8; lists in exam-c1-targets.ts).
 *
 *   pnpm tsx scripts/c1-repoint-exam-targets.ts           DRY RUN: prints before / after
 *   pnpm tsx scripts/c1-repoint-exam-targets.ts --apply   writes, in one transaction
 *
 * Touches ONLY target_item_ids (and updated_at) on the twelve tasks. Refuses
 * unless every target row exists and is published: a bundled paper's targets
 * are pulled into the core seed by content:publish, so an unpublished target
 * would break the next publish. Run it AFTER `b1-import.ts --band c1 --apply`.
 * The paper sources (tcf-blanc01..05, tef-blanc01) already carry the same
 * lists, so re-running a paper's author script keeps the repoint.
 */
import './env';
import { Pool } from 'pg';
import { describeTarget } from './env';
import { C1_CE_TARGETS, C1_CO_TARGETS } from './exam-c1-targets.ts';

const APPLY = process.argv.includes('--apply');

const TASKS: Record<string, readonly string[]> = Object.fromEntries([
  ...[1, 2, 3, 4, 5].flatMap((n) => [
    [`exam.tcf_canada.blanc-0${n}.ce_mcq.005`, C1_CE_TARGETS],
    [`exam.tcf_canada.blanc-0${n}.co_mcq.005`, C1_CO_TARGETS],
  ]),
  ['exam.tef_canada.blanc-01.ce_mcq.006', C1_CE_TARGETS],
  ['exam.tef_canada.blanc-01.co_mcq.006', C1_CO_TARGETS],
]);

async function main() {
  if (!process.env.DATABASE_URL) throw new Error('DATABASE_URL is not set. Nothing was attempted.');
  console.log(`C1 EXAM TARGET REPOINT  ${APPLY ? 'APPLY' : 'DRY RUN, nothing will be written'}`);
  console.log(`  ${describeTarget()}`);
  const pool = new Pool({ connectionString: process.env.DATABASE_URL, max: 1 });
  const c = await pool.connect();
  try {
    await c.query(APPLY ? 'begin' : 'begin transaction read only');
    const ids = Object.keys(TASKS);
    const rows = await c.query<{ id: string; level: string; task_type: string; target_item_ids: string[] | null }>(
      `select id, level, task_type, target_item_ids from content_exam_tasks where id = any($1)`, [ids]);
    const problems: string[] = [];
    if (rows.rows.length !== ids.length) {
      const found = new Set(rows.rows.map((r) => r.id));
      problems.push(`tasks missing: ${ids.filter((i) => !found.has(i)).join(', ')}`);
    }
    for (const r of rows.rows) if (r.level !== 'c1') problems.push(`${r.id} is level ${r.level}, not c1`);

    const wanted = [...new Set(Object.values(TASKS).flat())];
    const items = await c.query<{ id: string; status: string }>(
      `select id, status from content_items where id = any($1)`, [wanted]);
    const status = new Map(items.rows.map((r) => [r.id, r.status]));
    for (const id of wanted) {
      if (!status.has(id)) problems.push(`target ${id} does not exist (run the c1 import --apply first)`);
      else if (status.get(id) !== 'published') problems.push(`target ${id} is ${status.get(id)}, not published`);
    }

    let changed = 0;
    for (const r of rows.rows.sort((a, b) => a.id.localeCompare(b.id))) {
      const next = [...TASKS[r.id]];
      const same = JSON.stringify(r.target_item_ids ?? []) === JSON.stringify(next);
      console.log(`  ${same ? '=' : '~'} ${r.id}  ${(r.target_item_ids ?? []).length} -> ${next.length}` +
        `  (was ${(r.target_item_ids ?? []).slice(0, 2).join(', ')}${(r.target_item_ids ?? []).length > 2 ? ', ...' : ''})`);
      if (!same) changed++;
    }
    if (problems.length) {
      console.log(`\n  BLOCKERS ${problems.length}`);
      for (const p of problems) console.log(`    x ${p}`);
      await c.query('rollback');
      process.exitCode = 1;
      return;
    }
    if (!APPLY) {
      await c.query('commit');
      console.log(`\n  ${changed} task(s) would change. DRY RUN COMPLETE, nothing written.`);
      return;
    }
    for (const r of rows.rows) {
      await c.query(`update content_exam_tasks set target_item_ids = $2, updated_at = now() where id = $1`,
        [r.id, [...TASKS[r.id]]]);
    }
    const back = await c.query<{ n: string }>(
      `select count(*)::text as n from content_exam_tasks where id = any($1) and
         (target_item_ids = $2::text[] or target_item_ids = $3::text[])`,
      [ids, [...C1_CE_TARGETS], [...C1_CO_TARGETS]]);
    if (back.rows[0].n !== String(ids.length)) throw new Error(`read back ${back.rows[0].n} of ${ids.length}; rolled back`);
    await c.query('commit');
    console.log(`\n  APPLIED: ${changed} task(s) changed, ${ids.length}/${ids.length} read back.`);
  } catch (e) {
    await c.query('rollback').catch(() => {});
    throw e;
  } finally {
    c.release();
    await pool.end();
  }
}

main().catch((e) => { console.error(e); process.exit(1); });
