// Remove the b2.01 island: a pre-v2 lesson stub, its parent unit, and the 15
// items only it cited. Approved by Paul, 2026-09-07.
//
// ── What this deletes, and why it is safe ───────────────────────────────────
//
// `scripts/author-exam-b2-batch.ts` authored a four-part set in July 2026:
// 15 items, one Unit, one Lesson, and one delf_b2 ExamPaper with two tasks.
// The paper and its tasks are ALREADY GONE (measured: 0 rows), superseded by
// the real DELF B2 pack (blanc-01..05, published). What survives is the other
// three parts, all still `in_review`:
//
//     content_units  b2-01-expression-ecrite       curriculum_unit  119 b
//     content_units  b2-01-l1-texte-argumentatif   lesson         1,863 b
//     content_items  fr.b2.opinion.001 .. .015     15 rows
//
// The lesson is 1,863 bytes across 3 sections. The current lesson standard is
// a 20+ mission journey; a2.35 alone is orders of magnitude larger. It is not
// a lesson anyone would ship, and a real b2.01 would be written from scratch
// rather than grown from this.
//
// NOTHING ELSE REFERENCES ANY OF IT. Measured three ways: the only unit whose
// body mentions `fr.b2.opinion.*` is the stub lesson itself; the only unit
// whose body mentions `b2.01.l1` is its own parent; and the spine
// (`update-spine.ts`) does not declare b2.01 at all, so no later run recreates
// it. It has never been in seed.json and, being `in_review`, has never been in
// a published snapshot — no learner has ever held any of it.
//
// ── The one real consequence, stated plainly ────────────────────────────────
//
// `dueExamSkills()` (ealch-v2/src/store/progress.logic.ts) routes a failed exam
// skill back to a prep lesson by matching Lesson.skill and level. This stub is
// the ONLY lesson in the corpus with skill 'PE' at level b2, and there are 15
// PUBLISHED PE tasks at b2 (5 delf_b2 pe_short, 5 tef_canada pe_essay, 5
// tcf_canada pe_short) a learner can fail today.
//
// So the remediation target for "you failed a B2 writing task" is empty. It is
// ALREADY empty — an `in_review` row is not in the seed, so dueExamSkills has
// always returned prepLessonId: null here, and its own test pins that as the
// designed answer rather than a crash. This deletion does not create the gap;
// it stops a 3-section stub from standing in for the lesson that should fill
// it. The gap is real and is recorded as such.
//
// ── Reversibility ───────────────────────────────────────────────────────────
//
// Every row this deletes is still defined in source, committed at e8db2f9:
// `scripts/author-exam-b2-batch.ts` holds ITEMS (all 15), UNIT and LESSON as
// literals. Re-running that script restores the island verbatim. This script
// also writes a JSON snapshot of what it deleted before deleting it.
//
// Usage (from ealch-admin/):
//   pnpm tsx scripts/remove-b2-01-stub.ts             report only, deletes nothing
//   pnpm tsx scripts/remove-b2-01-stub.ts --apply     delete, one transaction

// './env' MUST be imported first — see the incident note in migrate.ts.
import './env';
import { describeTarget } from './env';
import { writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const APPLY = process.argv.includes('--apply');
const here = dirname(fileURLToPath(import.meta.url));

const UNIT_SLUG = 'b2-01-expression-ecrite';
const LESSON_SLUG = 'b2-01-l1-texte-argumentatif';
const ITEM_PREFIX = 'fr.b2.opinion.';

async function main() {
  console.log(`-> ${describeTarget()}`);
  console.log(APPLY ? '   MODE: apply\n' : '   MODE: report only (pass --apply to delete)\n');

  const { Pool } = await import('pg');
  const pool = new Pool({ connectionString: process.env.DATABASE_URL, max: 1 });
  const client = await pool.connect();

  try {
    // ── Read the island back, and refuse to act on a surprise ──────────────
    const units = await client.query(
      `select slug, kind, status, body from content_units where slug in ($1, $2)`,
      [UNIT_SLUG, LESSON_SLUG],
    );
    const items = await client.query(
      `select * from content_items where id like $1 order by id`,
      [`${ITEM_PREFIX}%`],
    );

    console.log(`  units matched:  ${units.rowCount} (expected 2)`);
    console.log(`  items matched:  ${items.rowCount} (expected 15)`);
    for (const r of units.rows) console.log(`    ${r.kind.padEnd(16)} ${r.slug}  [${r.status}]`);

    if (units.rowCount === 0 && items.rowCount === 0) {
      console.log('\n  Nothing to do — the island is already gone.');
      return;
    }

    // Every row must still be in_review. A published row would mean someone
    // promoted this since it was measured, and that changes the decision.
    const promoted = [...units.rows, ...items.rows].filter((r: any) => r.status !== 'in_review');
    if (promoted.length) {
      console.error(
        `\n✗ ${promoted.length} row(s) are no longer in_review. Refusing to delete published ` +
        `content.\n  ${promoted.map((r: any) => `${r.slug ?? r.id} [${r.status}]`).join('\n  ')}`,
      );
      process.exit(1);
    }

    // Nothing outside the island may cite it. This is the check that makes the
    // delete safe, so it runs against the live database rather than trusting
    // the earlier measurement.
    const outside = await client.query(
      `select slug, kind from content_units
        where (body::text like '%fr.b2.opinion.%' or body::text like '%b2.01.l1%')
          and slug not in ($1, $2)`,
      [UNIT_SLUG, LESSON_SLUG],
    );
    if (outside.rowCount) {
      console.error(
        `\n✗ ${outside.rowCount} unit(s) outside the island still cite it — deleting would ` +
        `orphan them:\n  ${outside.rows.map((r: any) => `${r.kind} ${r.slug}`).join('\n  ')}`,
      );
      process.exit(1);
    }
    console.log('  outside refs:   0 ✓');

    // ── Snapshot before destroying ─────────────────────────────────────────
    const snapshot = {
      removedAt: new Date().toISOString(),
      reason: 'pre-v2 b2.01 stub; approved for removal by Paul 2026-09-07',
      restoreWith: 'pnpm tsx scripts/author-exam-b2-batch.ts',
      units: units.rows,
      items: items.rows,
    };
    const path = join(here, '../.removed/b2-01-stub.json');
    if (APPLY) {
      const { mkdirSync } = await import('node:fs');
      mkdirSync(dirname(path), { recursive: true });
      writeFileSync(path, JSON.stringify(snapshot, null, 2), 'utf8');
      console.log(`  snapshot:       ${path}`);
    }

    if (!APPLY) {
      console.log('\n  Would delete 2 units and 15 items. Re-run with --apply.');
      return;
    }

    // ── Delete, one transaction ────────────────────────────────────────────
    await client.query('begin');
    const delLesson = await client.query(`delete from content_units where slug = $1`, [LESSON_SLUG]);
    const delUnit = await client.query(`delete from content_units where slug = $1`, [UNIT_SLUG]);
    const delItems = await client.query(`delete from content_items where id like $1`, [`${ITEM_PREFIX}%`]);
    await client.query('commit');

    console.log(`\n  deleted lesson: ${delLesson.rowCount}`);
    console.log(`  deleted unit:   ${delUnit.rowCount}`);
    console.log(`  deleted items:  ${delItems.rowCount}`);

    // ── Prove it ───────────────────────────────────────────────────────────
    const left = await client.query(
      `select count(*)::int as n from content_units where kind = 'lesson' and status <> 'published'`,
    );
    console.log(`\n  lessons still unpublished: ${left.rows[0].n} (expected 0)`);
  } catch (err) {
    try { await client.query('rollback'); } catch { /* already closed */ }
    throw err;
  } finally {
    client.release();
    await pool.end();
  }
}

main().catch((err) => { console.error(err); process.exit(1); });
