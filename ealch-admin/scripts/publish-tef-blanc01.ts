// Flip TEF Canada Examen 1 from in_review to published.
//
// Scoped deliberately narrow. `content_exam_tasks` also holds the two DELF B2
// draft tasks that predate this phase: a CE task and an essay, which together
// are not a paper. Publishing those would put a "DELF B2 mock exam" in front of
// a learner that is one reading text and one essay prompt, so the filter is on
// format AND variant rather than on status alone.
//
// Reversible: `--revert` puts the same rows back to in_review. What is NOT
// reversible is the snapshot a later `content:publish` cuts from them.
import './env';

const FORMAT = 'tef_canada';
const VARIANT = 'blanc-01';

async function main() {
  const revert = process.argv.includes('--revert');
  const to = revert ? 'in_review' : 'published';
  const from = revert ? 'published' : 'in_review';

  const { Pool } = await import('pg');
  const pool = new Pool({ connectionString: process.env.DATABASE_URL, max: 1 });
  const c = await pool.connect();
  try {
    await c.query('begin');

    const tasks = await c.query(
      `update content_exam_tasks set status = $1, updated_at = now()
        where format = $2 and variant = $3 and status = $4
        returning id, skill, label`,
      [to, FORMAT, VARIANT, from]
    );
    const paper = await c.query(
      `update content_exam_papers set status = $1, updated_at = now()
        where format = $2 and variant = $3 and status = $4
        returning id`,
      [to, FORMAT, VARIANT, from]
    );

    // A paper whose sections point at a task that is not published would render
    // as an exam with a missing section, which is worse than no exam. Check the
    // reference graph rather than trusting the two updates above to have covered
    // it — the paper names its task ids explicitly and nothing enforces that.
    if (!revert) {
      const referenced = await c.query<{ sections: { taskIds?: string[] }[] }>(
        `select sections from content_exam_papers where format = $1 and variant = $2`,
        [FORMAT, VARIANT]
      );
      const want = new Set(referenced.rows.flatMap((r) => (r.sections ?? []).flatMap((s) => s.taskIds ?? [])));
      const have = await c.query<{ id: string }>(
        `select id from content_exam_tasks where status = 'published' and id = any($1::text[])`,
        [[...want]]
      );
      const missing = [...want].filter((id) => !have.rows.some((r) => r.id === id));
      if (missing.length > 0) {
        throw new Error(`the paper references tasks that are not published:\n  ${missing.join('\n  ')}`);
      }
      console.log(`  all ${want.size} referenced tasks are published`);
    }

    await c.query('commit');
    console.log(`\n  ${tasks.rowCount} tasks -> ${to}`);
    for (const r of tasks.rows as { skill: string; label: string | null }[]) {
      console.log(`      ${r.skill}  ${r.label ?? '(unlabelled)'}`);
    }
    console.log(`  ${paper.rowCount} paper -> ${to}\n`);
  } catch (e) {
    await c.query('rollback').catch(() => {});
    throw e;
  } finally {
    c.release();
    await pool.end();
  }
}

main().catch((e) => { console.error(String(e)); process.exit(1); });
