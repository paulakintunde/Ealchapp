// Exam tasks that belong to no paper.
//
// An orphan is a task no paper's `sections.taskIds` names. It reaches nobody,
// so it is not a live defect on its own — and that is exactly what makes it
// worth a tool: nothing surfaces it, and it accumulates.
//
// ── Why this is not a unit test ─────────────────────────────────────────────
//
// Because an orphan cannot exist in the authored source. A paper module exports
// PAPER and TASKS together, and apply-paper writes them in one transaction, so
// the source is orphan-free by construction. Orphans appear in the DATABASE:
// a task written by an earlier phase whose paper was later rewritten, or a
// draft from a format generation that has since been replaced. Only the
// database can be asked.
//
// ── The one on record ───────────────────────────────────────────────────────
//
// `exam.delf_b2.blanc-01.pe_essay.001`, written 2026-07-23, still `in_review`,
// carrying formatVersion `delf-2020.2` when every other DELF task carries
// `delf-b2-2026.09`. It is in no paper's sections and is correctly excluded
// from every published snapshot.
//
// It has already cost something. promote-paper.ts carries a special case
// explaining that this exact row would have been swept into `published` by a
// filter on format and variant alone, alongside nine tasks a human had actually
// read. It also holds the id `pe_essay.001` for `blanc-01`, so a future DELF
// paper wanting that slot collides with a draft nobody remembers.
//
// ── What --archive does, and does not ───────────────────────────────────────
//
// Sets `status` to 'archived'. Nothing is deleted: 'archived' is a value the
// content_status enum already carries, the row keeps its body, and the change
// is undone by setting the status back. Published rows are refused outright —
// a published orphan is a different and more serious problem, and quietly
// archiving one would hide it.
//
// Usage (from ealch-admin/):
//   pnpm tsx scripts/exam/check-orphans.ts             report only
//   pnpm tsx scripts/exam/check-orphans.ts --archive   archive the drafts found
import './../env';

type Row = {
  id: string;
  format: string;
  variant: string;
  task_type: string;
  status: string;
  format_version: string;
  updated_at: Date;
};

async function main() {
  const archive = process.argv.includes('--archive');

  const { Pool } = await import('pg');
  const pool = new Pool({ connectionString: process.env.DATABASE_URL, max: 1 });
  const c = await pool.connect();

  try {
    // Every id any paper claims, from the sections jsonb itself.
    const claimed = new Set(
      (
        await c.query<{ task_id: string }>(
          `select jsonb_array_elements_text(s->'taskIds') as task_id
             from content_exam_papers p, jsonb_array_elements(p.sections) s`
        )
      ).rows.map((r) => r.task_id)
    );

    const all = (
      await c.query<Row>(
        `select id, format, variant, task_type, status, format_version, updated_at
           from content_exam_tasks order by format, variant, id`
      )
    ).rows;

    const orphans = all.filter((t) => !claimed.has(t.id));

    console.log(`\n  ${all.length} exam tasks · ${claimed.size} claimed by a paper · ${orphans.length} orphaned\n`);

    if (orphans.length === 0) {
      console.log('  ✓ every exam task belongs to a paper\n');
      return;
    }

    for (const t of orphans) {
      const when = new Date(t.updated_at).toISOString().slice(0, 10);
      console.log(
        `  ✖ ${t.id.padEnd(46)} ${t.status.padEnd(10)} ${t.format_version.padEnd(18)} updated ${when}`
      );
    }

    const published = orphans.filter((t) => t.status === 'published');
    if (published.length > 0) {
      console.log(
        `\n  ${published.length} of these are PUBLISHED. A published task in no paper is in a shipped\n` +
          '  snapshot that no paper can reach. Investigate before archiving anything.\n'
      );
    }

    if (!archive) {
      console.log('\n  report only. Pass --archive to set the unpublished ones to archived.\n');
      return;
    }

    const archivable = orphans.filter((t) => t.status !== 'published');
    if (archivable.length === 0) {
      console.log('\n  nothing archivable — every orphan is published.\n');
      return;
    }

    await c.query('begin');
    const res = await c.query(
      `update content_exam_tasks set status = 'archived', updated_at = now()
        where id = any($1::text[]) and status <> 'published'`,
      [archivable.map((t) => t.id)]
    );
    await c.query('commit');

    console.log(`\n  ✓ archived ${res.rowCount} orphaned task(s). Reversible: set status back to in_review.\n`);
  } catch (e) {
    await c.query('rollback').catch(() => {});
    throw e;
  } finally {
    c.release();
    await pool.end();
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
