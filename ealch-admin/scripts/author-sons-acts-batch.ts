// sons.01.l1, sons.02.l1, sons.03.l1, sons.04.l1 — acts, section ids and
// deckTranche — apply to Postgres. Phase 07.1, D-31.
//
//   pnpm content:sons-acts --dry     guards only, writes nothing
//   pnpm content:sons-acts           applies
//
// POSTGRES FIRST, SEED SECOND. Run merge-sons-acts-into-seed.ts after this,
// or the acts exist in the database and nowhere the app can read them.
//
// THIS IS NOT A NEW LESSON BUILD. It patches exactly three fields on four
// lessons that already exist and are already published:
//   body.sections[i].id, body.acts, body.deckTranche
// Nothing else about any of the four bodies is touched — not sections'
// content, not itemIds, not terms, not audio. And NOT `body.version` (D-25):
// `Lesson.version` keys `lessonMissions[id].v` (`app/missions.tsx`), and a
// bump silently zeroes every learner's stored checkmarks and XP for these
// lessons. `check-version-bumps.ts` will ask for one on this build; ignore
// it, same as this plan's own SUMMARY says. The `content_units.version`
// DOCUMENT column (separate from `body.version`) is also left alone.
//
// DO NOT run content:publish from here. Publishing is not part of an acts
// build, and content:parity must be read first — same doctrine as every
// other content:* batch in this file.
import './env';
import { SONS_ACTS, type SonsActPlan } from './data/sons-acts.ts';
import { validateLesson, type Lesson } from '../../ealch-v2/src/content/schema.ts';

const DRY_RUN = process.argv.includes('--dry');
const die: (m: string) => never = (m) => { console.error(`\n  STOP: ${m}\n`); process.exit(1); };

const LESSON_IDS = Object.keys(SONS_ACTS) as (keyof typeof SONS_ACTS)[];

async function main() {
  const { Pool } = await import('pg');
  const pool = new Pool({ connectionString: process.env.DATABASE_URL, max: 1 });
  const c = await pool.connect();
  try {
    type Row = { id: string; body: Lesson & Record<string, unknown> };
    const patches: { id: string; original: Row['body']; patched: Row['body']; plan: SonsActPlan }[] = [];

    for (const id of LESSON_IDS) {
      const plan = SONS_ACTS[id];
      const r = await c.query<{ body: Row['body'] }>(
        "select body from content_units where kind='lesson' and slug=$1", [id],
      );
      if (r.rowCount !== 1) die(`${id} is not in content_units (kind='lesson')`);
      const original = r.rows[0].body;

      // THE SIZE ASSERTION, BEFORE ANYTHING ELSE. The data module is
      // index-keyed to the section list AT THE TIME IT WAS MEASURED. A
      // section reorder or a section added/removed since then would still
      // pass a shallower check; a length mismatch is the one thing that
      // reliably catches it.
      if (!Array.isArray(original.sections) || original.sections.length !== plan.sectionIds.length) {
        die(`${id} has ${Array.isArray(original.sections) ? original.sections.length : 'no'} sections in Postgres; `
          + `this build is index-keyed to ${plan.sectionIds.length}. The section list has moved since this file was written — re-measure before applying.`);
      }
      // Existing section ids (sons.02.l1, sons.03.l1) must be reused, not
      // renamed. Verified here rather than trusted from the plan.
      original.sections.forEach((s, i) => {
        const existing = (s as { id?: string }).id;
        if (existing && existing !== plan.sectionIds[i]) {
          die(`${id} section ${i} already carries id "${existing}" and this build would rename it to "${plan.sectionIds[i]}"`);
        }
      });

      const patched: Row['body'] = JSON.parse(JSON.stringify(original));
      patched.sections = patched.sections.map((s: Record<string, unknown>, i: number) => ({ ...s, id: plan.sectionIds[i] }));
      patched.acts = plan.acts;
      patched.deckTranche = plan.deckTranche;

      // D-25'S TEETH. The build must not move `body.version`, whatever
      // check-version-bumps.ts later asks for.
      if (patched.version !== original.version) {
        die(`${id}: body.version moved from ${original.version} to ${patched.version} — refusing (D-25)`);
      }

      const issues = validateLesson(patched, id);
      if (issues.length) die(`${id} fails validateLesson after patching:\n${issues.map((i) => `    ${i.path}: ${i.message}`).join('\n')}`);

      patches.push({ id, original, patched, plan });
    }

    // THE REPORT. Printed whether this is a dry run or a real apply.
    console.log('');
    for (const { id, patched, plan } of patches) {
      const withIds = patched.sections.filter((s: { id?: string }) => !!s.id).length;
      const tranche = plan.deckTranche.map((t) => t.length).join(',');
      const released = plan.deckTranche.flat().length;
      console.log(`  ${id}:`);
      console.log(`    sections re-id'd: ${withIds}/${patched.sections.length}`);
      console.log(`    acts added: ${plan.acts.length} (${plan.acts.map((a) => a.id).join(', ')})`);
      console.log(`    deckTranche sizes: [${tranche}], ${released} item ids released of ${patched.itemIds.length}`);
      console.log(`    version unchanged: ${patched.version} (was ${patches.find((p) => p.id === id)!.original.version})`);
    }
    console.log('');

    if (DRY_RUN) {
      console.log('  --dry: every guard passed and nothing was written.\n');
      return;
    }

    /* ── THE WRITE ────────────────────────────────────────────────────── */

    await c.query('begin');
    try {
      for (const { id, patched } of patches) {
        const up = await c.query(
          "update content_units set body=$1::jsonb, updated_at=now() where kind='lesson' and slug=$2",
          [JSON.stringify(patched), id],
        );
        if (up.rowCount !== 1) throw new Error(`the update for ${id} touched ${up.rowCount} rows, expected 1`);
      }
      await c.query('commit');
    } catch (e) {
      await c.query('rollback');
      die(`rolled back: ${(e as Error).message}`);
    }

    /* ── READ BACK AND PROVE IT ───────────────────────────────────────── */

    for (const { id, original, plan } of patches) {
      const back = await c.query<{ body: Row['body'] }>(
        "select body from content_units where kind='lesson' and slug=$1", [id],
      );
      const body = back.rows[0].body;
      if (body.version !== original.version) die(`${id} reads back version ${body.version} in Postgres, expected ${original.version} unchanged`);
      if (!Array.isArray(body.acts) || body.acts.length !== plan.acts.length) die(`${id} reads back ${(body.acts as unknown[] | undefined)?.length ?? 0} acts, expected ${plan.acts.length}`);
      if (!Array.isArray(body.deckTranche) || body.deckTranche.length !== plan.deckTranche.length) die(`${id} reads back a deckTranche of the wrong length`);
      const idsBack = body.sections.map((s: { id?: string }) => s.id);
      if (JSON.stringify(idsBack) !== JSON.stringify(plan.sectionIds)) die(`${id} reads back section ids that do not match the plan`);
      const issues = validateLesson(body, id);
      if (issues.length) die(`${id} reads back failing validateLesson:\n${issues.map((i) => `    ${i.path}: ${i.message}`).join('\n')}`);
    }

    console.log(`  applied and read back clean: ${patches.map((p) => p.id).join(', ')}`);
    console.log('\n  NEXT: pnpm tsx scripts/merge-sons-acts-into-seed.ts\n');
  } finally {
    c.release();
    await pool.end();
  }
}

main();
