// Flip ONE reviewed paper from in_review to published.
//
// Was publish-tef-blanc01.ts, which knew one paper. Generalised rather than
// copied: this repo has already shipped a bug from copying an exam script and
// editing the constants, and a promoter is the worst place to do it — the copy
// that still says `tef_canada` would silently promote the wrong paper and
// report success.
//
// Scoped deliberately narrow. `content_exam_tasks` also holds two DELF B2 draft
// tasks that predate this phase: a CE task and an essay, which together are not
// a paper. Publishing those would put a "DELF B2 mock exam" in front of a
// learner that is one reading text and one essay prompt, so the filter is on
// format AND variant rather than on status alone.
//
// Reversible: `--revert` puts the same rows back to in_review. What is NOT
// reversible is the snapshot a later `content:publish` cuts from them.
//
// Usage (from ealch-admin/):
//   pnpm tsx scripts/exam/promote-paper.ts tcf 1
//   pnpm tsx scripts/exam/promote-paper.ts tef 1 --revert
import './../env';

const FORMATS = { tef: 'tef_canada', tcf: 'tcf_canada', delf: 'delf_b2' } as const;
const key = process.argv.slice(2).find((a) => a in FORMATS) as keyof typeof FORMATS | undefined;
if (!key) {
  console.error(`\n✖ name a format: ${Object.keys(FORMATS).join(', ')}\n`);
  process.exit(1);
}
const FORMAT = FORMATS[key];

const arg = process.argv.slice(2).find((a) => /^(blanc-?)?\d+$/.test(a));
if (!arg) {
  console.error('\n✖ name a paper, e.g. `1` or `blanc-01`\n');
  process.exit(1);
}
const VARIANT = `blanc-${String(Number(arg.replace(/^blanc-?/, ''))).padStart(2, '0')}`;

async function main() {
  const revert = process.argv.includes('--revert');
  const to = revert ? 'in_review' : 'published';
  const from = revert ? 'published' : 'in_review';

  const { Pool } = await import('pg');
  const pool = new Pool({ connectionString: process.env.DATABASE_URL, max: 1 });
  const c = await pool.connect();
  try {
    await c.query('begin');

    console.log(`\n  ${FORMAT} ${VARIANT}: ${from} -> ${to}`);

    // PROMOTE THE PAPER'S OWN TASKS, not everything sharing its variant.
    //
    // The filter used to be format + variant, chosen over status alone because
    // two DELF B2 drafts predate the exam phase and publishing them would put a
    // "mock exam" of one reading text and one essay in front of a learner. That
    // reasoning was right and the filter was not enough: one of those drafts,
    // `pe_essay.001` from 2026-07-23, carries variant `blanc-01` — the same
    // variant the authored DELF paper uses. It is in no paper's sections and it
    // would have been swept into `published` by variant alone, alongside nine
    // tasks a human had actually read.
    //
    // A paper IS its sections. Promoting by the ids it names is exact, and it
    // leaves an orphan exactly where it was.
    const sectionsRow = await c.query<{ sections: { taskIds?: string[] }[] }>(
      `select sections from content_exam_papers
        where format = $1::text::exam_format and variant = $2`,
      [FORMAT, VARIANT]
    );
    if (sectionsRow.rowCount === 0) {
      throw new Error(`no ${FORMAT} ${VARIANT} paper row; there is nothing whose tasks could be promoted`);
    }
    const owned = [
      ...new Set(sectionsRow.rows.flatMap((r) => (r.sections ?? []).flatMap((x) => x.taskIds ?? []))),
    ];
    if (owned.length === 0) {
      throw new Error(`${FORMAT} ${VARIANT} names no task ids in its sections`);
    }

    const strays = await c.query<{ id: string }>(
      `select id from content_exam_tasks
        where format = $1::text::exam_format and variant = $2 and status = $3 and not (id = any($4::text[]))`,
      [FORMAT, VARIANT, from, owned]
    );
    for (const r of strays.rows) {
      console.log(`  ! leaving ${r.id} at "${from}" — it shares this variant but no section names it`);
    }

    const tasks = await c.query(
      `update content_exam_tasks set status = $1, updated_at = now()
        where id = any($2::text[]) and status = $3
        returning id, skill, label`,
      [to, owned, from]
    );
    // A run that matched nothing has either the wrong paper or one already in
    // the target state, and both must be said rather than reported as success.
    if (tasks.rowCount === 0) {
      throw new Error(`no ${FORMAT} ${VARIANT} tasks are ${from}; nothing to promote`);
    }
    const paper = await c.query(
      `update content_exam_papers set status = $1, updated_at = now()
        where format = $2::text::exam_format and variant = $3 and status = $4
        returning id`,
      [to, FORMAT, VARIANT, from]
    );

    // A paper whose sections point at a task that is not published would render
    // as an exam with a missing section, which is worse than no exam. Check the
    // reference graph rather than trusting the two updates above to have covered
    // it — the paper names its task ids explicitly and nothing enforces that.
    if (!revert) {
      const referenced = await c.query<{ sections: { taskIds?: string[] }[] }>(
        `select sections from content_exam_papers
          where format = $1::text::exam_format and variant = $2`,
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
