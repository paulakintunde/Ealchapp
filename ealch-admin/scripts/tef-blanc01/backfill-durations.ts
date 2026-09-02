// Backfill `durationS` on listening parts that were rendered before the render
// script started writing it.
//
// WHY IT MATTERS. `estimateDurationS` (coPlayback.logic.ts) uses the part's
// `durationS` to time the playing phase, because `speakItem` fires its
// completion callback immediately on the clip path — there is no per-play
// completion on the shared player. So the number is not decoration: it is how
// long the runner waits before letting the candidate move on, and before a
// second play starts on a two-play part.
//
// The authored values were estimates written by hand at ~14 characters per
// second, and they run several seconds long against the real clips. In exam
// conditions that is dead air on every part.
//
// WHY IT READS THE SIZE RATHER THAN RE-RENDERING. The assetKey does not change
// when only `durationS` changes, so a re-run would skip these parts and write
// nothing. Re-rendering to fix a number would mean paying for identical audio.
// The clips are 128 kbps CBR mono, so bytes / 16 is milliseconds — the same
// arithmetic the render script uses, and it agrees with ffprobe to a tenth of
// a second.
import './../env';
import { describeTarget } from './../env';

const DRY_RUN = process.argv.includes('--dry-run');

async function main() {
  const base = process.env.R2_PUBLIC_BASE_URL;
  if (!base) throw new Error('R2_PUBLIC_BASE_URL is not set — cannot measure a clip without fetching it.');

  console.log(`\n→ ${describeTarget()}`);
  if (DRY_RUN) console.log('  (dry run — nothing will be written)');

  const { Pool } = await import('pg');
  const pool = new Pool({ connectionString: process.env.DATABASE_URL, max: 1 });
  const client = await pool.connect();

  let fixed = 0;
  let ok = 0;
  try {
    const rows = await client.query<{
      id: string;
      label: string | null;
      parts: { label: string; audioRef?: string | null; durationS?: number }[];
    }>(
      `select id, label, parts from content_exam_tasks
        where skill = 'CO' and parts is not null and status <> 'archived'
        order by id`
    );

    for (const row of rows.rows) {
      for (let i = 0; i < row.parts.length; i += 1) {
        const part = row.parts[i]!;
        if (!part.audioRef) continue;

        const res = await fetch(`${base}/${part.audioRef}`, { method: 'HEAD' });
        if (!res.ok) {
          console.log(`  ! ${row.label} / ${part.label}: HEAD ${res.status} — skipped`);
          continue;
        }
        const bytes = Number(res.headers.get('content-length') ?? 0);
        if (!bytes) {
          console.log(`  ! ${row.label} / ${part.label}: no content-length — skipped`);
          continue;
        }
        const measured = Math.max(1, Math.round(bytes / 16 / 1000));
        if (part.durationS === measured) {
          ok += 1;
          continue;
        }

        console.log(
          `  · ${row.label} / ${part.label}: ${part.durationS ?? '—'}s → ${measured}s` +
          `${part.durationS && part.durationS > measured ? `  (${part.durationS - measured}s of dead air)` : ''}`
        );
        fixed += 1;
        if (DRY_RUN) continue;

        await client.query(
          `update content_exam_tasks
              set parts = jsonb_set(parts, $2::text[], (parts->$3::int) || jsonb_build_object('durationS', $4::int), false),
                  updated_at = now()
            where id = $1`,
          [row.id, `{${i}}`, i, measured]
        );
      }
    }
    console.log(`\n✓ ${fixed} part(s) ${DRY_RUN ? 'would be' : ''} corrected, ${ok} already accurate.\n`);
  } finally {
    client.release();
    await pool.end();
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
