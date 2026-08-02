// Restore lesson bodies that live ONLY in the committed seed.json back into
// Postgres, so the next content:publish stops regressing them.
//
// ── WHY THIS EXISTS (incident 2026-07-31) ──────────────────────────────────
// `author-lesson-overviews.ts` (commit b2be3e7) and the mission-journey
// rewrites of sons.02/sons.03 (commit 663d587) were authored SEED-DIRECT.
// That script says so in its own header: "No DB, no env, no publish." It read
// seed.json, merged `overview` + per-section `frSub`, and wrote the file back.
//
// The result was a split brain, in the opposite direction from the one
// LESSON-CONTENT-STANDARD.md §5.3 warns about. The documented hazard is "the
// DB runs ahead of seed.json". Here git ran ahead of the DB:
//
//     git seed.json   sons.03.l1  20 sections, overview, frSub   (v4)
//     Postgres        sons.03.l1   6 sections, no overview       (v1)
//
// publish-content.ts reads Postgres as the source of truth and rewrites
// seed.json from it, exactly as designed. So a publish silently overwrote the
// better git content with the older DB rows: sons.03.l1 collapsed 20 -> 6
// sections, and sons.01/02/03 + a1.04 + a2.01 all lost their `overview`.
//
// This script closes the split by pushing the git bodies INTO the DB, which is
// the direction that makes the DB the source of truth again. After it runs, a
// publish reproduces the good content instead of destroying it.
//
// ── SAFETY ─────────────────────────────────────────────────────────────────
// - Restores ONLY the lessons named in RESTORE_IDS. a1.01.l1 and sons.04.l1
//   are deliberately excluded: those rows are legitimately NEWER in the DB.
// - Refuses to run unless the git body is strictly at least as rich as the DB
//   body (never fewer sections, never drops an overview), so it can never be
//   the thing that loses content.
// - Every body runs validateLesson before anything is written.
// - One transaction, rolled back on any row-count mismatch.
// - Idempotent: re-running when the DB already matches writes nothing.
//
// Usage (from ealch-admin/):
//   pnpm tsx scripts/restore-lesson-bodies-from-seed.ts --dry-run
//   pnpm tsx scripts/restore-lesson-bodies-from-seed.ts
//   then: pnpm content:publish
//
// By default the reference is the committed seed.json at git HEAD (read via
// `git show`), NOT the working-tree file, because the working tree has already
// been overwritten by the bad publish. Pass --from <path> to override.

import './env';
import { describeTarget } from './env';
import { execFileSync } from 'node:child_process';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { validateItem, validateLesson, type Item, type Lesson } from '../../ealch-v2/src/content/schema.ts';

/** Lessons whose good body exists only in git. a1.01.l1 / sons.04.l1 excluded
 *  on purpose: the DB is correctly ahead for those two. */
const RESTORE_IDS = ['sons.01.l1', 'sons.02.l1', 'sons.03.l1', 'a1.04.l1', 'a2.01.l1'];

const DRY_RUN = process.argv.includes('--dry-run');
const fromIx = process.argv.indexOf('--from');
const FROM_PATH = fromIx === -1 ? null : process.argv[fromIx + 1];

function die(msg: string): never {
  console.error(`\n✗ ${msg}\n`);
  process.exit(1);
}

/** The committed seed at HEAD. Read through git, not the working tree: the
 *  working-tree file is the post-regression output we are trying to undo. */
function readReferenceSeed(): { lessons: Lesson[]; items: Item[] } {
  if (FROM_PATH) return JSON.parse(readFileSync(FROM_PATH, 'utf8'));
  const repoRoot = fileURLToPath(new URL('../..', import.meta.url));
  const buf = execFileSync('git', ['show', 'HEAD:ealch-v2/src/content/seed.json'], {
    cwd: repoRoot,
    maxBuffer: 512 * 1024 * 1024,
    encoding: 'utf8',
    shell: true,
  });
  return JSON.parse(buf);
}

async function main() {
  console.log(`→ ${describeTarget()}`);
  if (!process.env.DATABASE_URL) die('No DATABASE_URL.');
  if (DRY_RUN) console.log('  (dry run — nothing will be written)');

  const seed = readReferenceSeed();
  const byId = new Map(seed.lessons.map((l) => [l.id, l]));
  const itemById = new Map((seed.items ?? []).map((i) => [i.id, i]));
  console.log(
    `  reference: ${FROM_PATH ?? 'git HEAD:ealch-v2/src/content/seed.json'} ` +
      `(${seed.lessons.length} lessons, ${seed.items?.length ?? 0} items)`
  );

  /** Every corpus item id a lesson body points at, from any nesting depth:
   *  lesson.itemIds, practice/dictation section itemIds, and pronunciationLab
   *  sounds[].itemIds. A lesson naming an item the corpus lacks fails
   *  validateCorpus, which blocks the whole publish. */
  const referencedItemIds = (l: Lesson): string[] => {
    const out = new Set<string>(l.itemIds);
    for (const s of l.sections as Array<Record<string, unknown>>) {
      for (const id of (s.itemIds as string[] | undefined) ?? []) out.add(id);
      for (const snd of (s.sounds as Array<{ itemIds?: string[] }> | undefined) ?? []) {
        for (const id of snd.itemIds ?? []) out.add(id);
      }
    }
    return [...out];
  };

  const { Pool } = await import('pg');
  const pool = new Pool({ connectionString: process.env.DATABASE_URL, max: 1 });
  const client = await pool.connect();

  try {
    const plan: { id: string; body: Lesson; from: string; to: string }[] = [];

    for (const id of RESTORE_IDS) {
      const git = byId.get(id);
      if (!git) die(`${id} not found in the reference seed`);

      const issues = validateLesson(git, id);
      if (issues.length) {
        die(`${id} fails validateLesson:\n${issues.map((i) => `  ${i.path}: ${i.message}`).join('\n')}`);
      }

      const row = await client.query<{ body: Lesson }>(
        `select body from content_units where kind = 'lesson' and slug = $1`,
        [id]
      );
      if (row.rowCount !== 1) die(`${id} not found in content_units`);
      const db = row.rows[0].body;

      // Guard: never let this script be the thing that loses content.
      //
      // Section COUNT alone is the wrong measure. sons.02.l1 is the case in
      // point: the DB holds an older 27-section legacy-shape lesson ("Les
      // douze voyelles orales", v2) while git holds the newer 20-section
      // mission-journey rewrite ("Les voyelles, en profondeur", v4). Fewer
      // sections, strictly better lesson. So the guard is on VERSION, which is
      // the field that actually encodes supersession, and the count check only
      // applies when the versions are equal (same lesson, so a shrink really
      // would be a loss).
      if (git.version < db.version) {
        die(
          `${id}: reference is v${git.version}, DB is v${db.version}. ` +
            `Refusing to restore an older version over a newer one.`
        );
      }
      if (git.version === db.version && git.sections.length < db.sections.length) {
        die(
          `${id}: same version (v${git.version}) but the reference has FEWER sections ` +
            `(${git.sections.length} vs ${db.sections.length}). Refusing, this would lose content.`
        );
      }
      if (db.overview && !git.overview) {
        die(`${id}: DB has an overview and the reference does not. Refusing to restore.`);
      }

      const same = JSON.stringify(db) === JSON.stringify(git);
      const fmt = (l: Lesson) => `${l.sections.length} sec/${l.overview ? 'ov' : '--'}/v${l.version}`;
      if (same) {
        console.log(`  = ${id.padEnd(12)} already matches (${fmt(git)})`);
      } else {
        plan.push({ id, body: git, from: fmt(db), to: fmt(git) });
      }
    }

    // ── Corpus items the restored bodies need but the DB does not have ──────
    // sons.03.l1's 8 fr.sons.nasales.* items were authored seed-direct too, so
    // they never reached Postgres. Restoring the lesson without them would
    // publish a lesson pointing at nonexistent items, which validateCorpus
    // rejects, blocking every future publish.
    const neededIds = new Set<string>();
    for (const p of plan) for (const id of referencedItemIds(p.body)) neededIds.add(id);

    const itemPlan: Item[] = [];
    if (neededIds.size) {
      const present = await client.query<{ id: string }>(
        `select id from content_items where id = any($1)`,
        [[...neededIds]]
      );
      const have = new Set(present.rows.map((r) => r.id));
      for (const id of neededIds) {
        if (have.has(id)) continue;
        const it = itemById.get(id);
        if (!it) die(`item ${id} is referenced by a restored lesson but exists in neither the DB nor the reference seed`);
        const issues = validateItem(it, id);
        if (issues.length) {
          die(`item ${id} fails validateItem:\n${issues.map((i) => `  ${i.path}: ${i.message}`).join('\n')}`);
        }
        itemPlan.push(it);
      }
    }

    if (!plan.length && !itemPlan.length) {
      console.log('\n✓ nothing to restore, every lesson already matches the reference.\n');
      return;
    }

    if (plan.length) {
      console.log('\n  lesson restore plan:');
      for (const p of plan) console.log(`    ${p.id.padEnd(12)} ${p.from.padEnd(16)} → ${p.to}`);
    }
    if (itemPlan.length) {
      console.log(`\n  missing corpus items to insert: ${itemPlan.length}`);
      for (const it of itemPlan.slice(0, 12)) console.log(`    ${it.id.padEnd(24)} ${it.fr}`);
      if (itemPlan.length > 12) console.log(`    ... and ${itemPlan.length - 12} more`);
    }

    if (DRY_RUN) {
      console.log('\n✓ dry run — all valid, nothing written.\n');
      return;
    }

    await client.query('begin');

    for (const it of itemPlan) {
      await client.query(
        `insert into content_items
           (id, kind, level, theme, fr, en, ipa, respell, gender, example, notes, tags, drills,
            audio_ref, image_ref, version, status, generated_by)
         values ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10::jsonb,$11,$12,$13::text[]::drill_kind[],
                 $14,$15,$16,'published','human')
         on conflict (id) do update set
           kind=excluded.kind, level=excluded.level, theme=excluded.theme, fr=excluded.fr,
           en=excluded.en, ipa=excluded.ipa, respell=excluded.respell, gender=excluded.gender,
           example=excluded.example, notes=excluded.notes, tags=excluded.tags,
           drills=excluded.drills, version=excluded.version, status='published'`,
        [
          it.id, it.kind, it.level, it.theme, it.fr, it.en, it.ipa ?? null, it.respell ?? null,
          it.gender ?? null, it.example ? JSON.stringify(it.example) : null, it.notes ?? null,
          it.tags, it.drills, it.audioRef ?? null, it.imageRef ?? null, it.version,
        ]
      );
    }
    for (const p of plan) {
      const res = await client.query(
        `update content_units
            set body = $1::jsonb, title = $2, status = 'published', updated_at = now()
          where kind = 'lesson' and slug = $3`,
        [JSON.stringify(p.body), p.body.title, p.id]
      );
      if (res.rowCount !== 1) {
        await client.query('rollback');
        die(`${p.id} update touched ${res.rowCount} rows — rolled back, nothing changed`);
      }
    }
    await client.query('commit');

    console.log(
      `\n✓ restored ${plan.length} lesson body/bodies` +
        (itemPlan.length ? ` and ${itemPlan.length} corpus item(s)` : '') +
        ` into Postgres. Run pnpm content:publish to ship the corrected snapshot.\n`
    );
  } catch (e) {
    await client.query('rollback').catch(() => {});
    throw e;
  } finally {
    client.release();
    await pool.end();
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
