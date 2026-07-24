// Backfill Item.drills += 'voiceflash' for every flashcard-eligible item in the
// ~30 themes the RUBRIC dashboard flagged as carrying zero (or near-zero)
// voiceflash coverage. Pure data backfill, no new writing: this only appends
// the drill kind to items that already exist and already carry 'flashcard'.
//
// Usage:
//   pnpm tsx scripts/backfill-voiceflash-themes.ts --dry-run    validate + report only
//   pnpm tsx scripts/backfill-voiceflash-themes.ts              apply, one transaction
//
// Idempotent: re-running finds nothing left to do (the WHERE clause excludes
// rows that already carry voiceflash).

// './env' MUST be imported first — see the incident note in migrate.ts.
import './env';
import { describeTarget } from './env';
import { validateItem, type Item } from '../../ealch-v2/src/content/schema.ts';

const TARGET_THEMES = [
  'verbes', 'soins', 'bien-etre', 'affaires', 'ecologie', 'universite', 'recherche',
  'reseaux-sociaux', 'journalisme', 'musees', 'litterature', 'traditions',
  'questions-sociales', 'droit', 'methode-scientifique', 'decouvertes', 'valeurs',
  'ethique', 'philosophie', 'marche', 'animaux-domestiques', 'bricolage', 'jardinage',
  'voisinage', 'argent-quotidien', 'couple-amour', 'rencontres',
  'conflits-reconciliation', 'evenements-familiaux', 'entraide',
];

const DRY_RUN = process.argv.includes('--dry-run');

function die(msg: string): never {
  console.error(`\n✗ ${msg}\n`);
  process.exit(1);
}

async function main() {
  console.log(`→ ${describeTarget()}`);
  if (!process.env.DATABASE_URL) {
    die('No DATABASE_URL. This backfills the canonical database, never PGlite.');
  }
  if (DRY_RUN) console.log('  (dry run — nothing will be written)');

  const { Pool } = await import('pg');
  const pool = new Pool({ connectionString: process.env.DATABASE_URL, max: 1 });
  const client = await pool.connect();

  try {
    // drills::text[] — same enum-array cast reasoning as publish-content.ts and
    // backfill-verb-check.ts: node-postgres has no parser for a custom enum
    // array, so without the cast this comes back as an unparsed string literal.
    const rows = await client.query(
      `select id, kind::text as kind, level::text as level, theme, fr, en, ipa, respell,
              gender::text as gender, example, notes, tags, drills::text[] as drills,
              audio_ref, version
         from content_items
        where theme = any($1)
          and 'flashcard' = any(drills)
          and not ('voiceflash' = any(drills))
        order by id`,
      [TARGET_THEMES]
    );

    if (rows.rowCount === 0) {
      console.log('\n✓ nothing to backfill — every flashcard item in these themes already carries voiceflash.\n');
      return;
    }

    // Build and validate the post-state before writing — same discipline as
    // backfill-verb-check.ts: a bad backfill must fail here, not at publish.
    const next: Item[] = rows.rows.map((r) => ({
      id: r.id,
      kind: r.kind,
      level: r.level,
      theme: r.theme,
      fr: r.fr,
      en: r.en,
      ...(r.ipa ? { ipa: r.ipa } : {}),
      ...(r.respell ? { respell: r.respell } : {}),
      ...(r.gender ? { gender: r.gender } : {}),
      ...(r.example ? { example: r.example } : {}),
      ...(r.notes ? { notes: r.notes } : {}),
      tags: r.tags ?? [],
      drills: [...(r.drills ?? []), 'voiceflash'],
      audioRef: r.audio_ref ?? null,
      version: r.version,
    }));

    const issues = next.flatMap((it) => validateItem(it, it.id));
    if (issues.length) die(`post-state fails validateItem:\n${issues.map((i) => `  ${i.path}: ${i.message}`).join('\n')}`);

    const byTheme = new Map<string, number>();
    for (const it of next) byTheme.set(it.theme, (byTheme.get(it.theme) ?? 0) + 1);

    console.log(`\n  ${next.length} item(s) to backfill across ${byTheme.size} theme(s):`);
    for (const [theme, count] of [...byTheme.entries()].sort()) {
      console.log(`    ${theme}: ${count}`);
    }

    const withoutIpa = next.filter((it) => !it.ipa).length;
    if (withoutIpa > 0) {
      console.log(
        `\n  note: ${withoutIpa} of these have no ipa field. voiceflash does not require it ` +
          `(app/voiceflash.tsx reads fr/audio, not ipa) — the publish-time IPA gate will list ` +
          `them as advisory flags, not failures.`
      );
    }

    if (DRY_RUN) {
      console.log('\n✓ dry run — post-state valid, nothing written.\n');
      return;
    }

    await client.query('begin');
    for (const it of next) {
      const res = await client.query(
        `update content_items set drills = array_append(drills, 'voiceflash') where id = $1`,
        [it.id]
      );
      if (res.rowCount !== 1) {
        await client.query('rollback');
        die(`update for ${it.id} touched ${res.rowCount} rows — rolled back, nothing changed`);
      }
    }
    await client.query('commit');
    console.log(`\n✓ voiceflash backfilled for ${next.length} item(s) across ${byTheme.size} theme(s). Run content:publish.\n`);
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
