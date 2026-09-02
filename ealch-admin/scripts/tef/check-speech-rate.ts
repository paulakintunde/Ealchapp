// Measured speech rate per listening document, against the band envelope.
//
// STANDARD-common §2 calls speech rate "a real difficulty lever and the
// cheapest one we control", and gives a target per band: ≤110 wpm at A1, ~120
// at A2, ~140 at B1, ~160 at B2, ~175 at C1.
//
// Until the audio existed, that was an instruction nobody could check: the
// authored `durationS` was an estimate, so dividing words by it would have
// measured the estimate rather than the recording. Now the durations are read
// off the rendered clips, so this measures what a candidate will actually hear.
//
// It also checks document LENGTH against the blueprint's envelope per block,
// which is the other thing the standard fixes and the other thing an estimate
// could not confirm.
//
// Usage (from ealch-admin/):
//   pnpm tsx scripts/tef/check-speech-rate.ts          all five papers
//   pnpm tsx scripts/tef/check-speech-rate.ts 2 3      only those
import './../env';
import { spokenTranscript } from '../../../ealch-v2/src/utils/coPlayback.logic.ts';

/** Target words per minute, by the block's band (STANDARD-common §2). */
const RATE_TARGET: Record<string, { wpm: number; band: string }> = {
  A: { wpm: 120, band: 'A1–A2' },
  B: { wpm: 140, band: 'A2–B1' },
  C: { wpm: 160, band: 'B1–B2' },
  D: { wpm: 160, band: 'B2' },
  E: { wpm: 160, band: 'B1–C1' },
  F: { wpm: 175, band: 'B2–C1' },
  G: { wpm: 140, band: 'A2–B2' },
};

/** Document length the blueprint expects, in seconds (STANDARD-tef §2). */
const LENGTH_TARGET: Record<string, [number, number]> = {
  A: [15, 30],
  B: [20, 35],
  C: [45, 75],
  D: [45, 75],
  E: [60, 120],
  F: [120, 180],
  G: [15, 40],
};

/** How far off target is worth reporting. Synthesis is not a metronome. */
const RATE_TOLERANCE = 0.18;

/** Which papers to measure. Defaults to all five rather than to blanc-01: rate
 *  drift between papers is a property of the PACK, and one paper cannot show it. */
const ARGS = process.argv.slice(2).filter((a) => /^\d+$/.test(a)).map(Number);
const VARIANTS = (ARGS.length ? ARGS : [1, 2, 3, 4, 5]).map((n) => `blanc-${String(n).padStart(2, '0')}`);

async function main() {
  const { Pool } = await import('pg');
  const pool = new Pool({ connectionString: process.env.DATABASE_URL, max: 1 });
  const client = await pool.connect();
  try {
    const rows = await client.query<{
      variant: string;
      label: string | null;
      parts: { label: string; text?: string; durationS?: number; audioRef?: string | null }[];
    }>(
      `select variant, label, parts from content_exam_tasks
        where variant = any($1::text[]) and format = 'tef_canada' and skill = 'CO'
        order by variant, id`,
      [VARIANTS]
    );

    const rateOff: string[] = [];
    const lengthOff: string[] = [];
    const perVariant = new Map<string, number[]>();

    let shown = '';
    for (const row of rows.rows) {
      if (row.variant !== shown) {
        shown = row.variant;
        console.log(`\n  ${shown}`);
        console.log('  block  document                                    words   secs    wpm   target');
        console.log(`  ${'-'.repeat(78)}`);
      }
      const block = (row.label ?? '').replace(/^Section\s+/i, '').trim().slice(0, 1).toUpperCase();
      const target = RATE_TARGET[block];
      const [lo, hi] = LENGTH_TARGET[block] ?? [0, 9999];
      for (const part of row.parts) {
        if (!part.text || !part.durationS) continue;
        const words = spokenTranscript(part.text).split(/\s+/).filter(Boolean).length;
        const wpm = Math.round((words / part.durationS) * 60);
        const name = part.label.length > 40 ? `${part.label.slice(0, 39)}…` : part.label;
        const flag = target && Math.abs(wpm - target.wpm) / target.wpm > RATE_TOLERANCE ? ' ←' : '';
        console.log(
          `  ${block.padEnd(6)} ${name.padEnd(42)} ${String(words).padStart(5)}` +
          `${String(part.durationS).padStart(7)}${String(wpm).padStart(7)}` +
          `${String(target?.wpm ?? '—').padStart(8)}${flag}`
        );
        if (!perVariant.has(row.variant)) perVariant.set(row.variant, []);
        perVariant.get(row.variant)!.push(wpm);
        // Every reported line names its paper. A flagged document has to be
        // findable without re-running the tool once per variant.
        if (flag) rateOff.push(`${row.variant} · ${row.label} / ${part.label}: ${wpm} wpm against ${target!.wpm} (${target!.band})`);
        if (part.durationS < lo || part.durationS > hi) {
          lengthOff.push(`${row.variant} · ${row.label} / ${part.label}: ${part.durationS}s, envelope ${lo}–${hi}s`);
        }
      }
    }

    // Mean rate per paper. Every document can sit inside its own tolerance while
    // one paper still runs consistently faster than the rest, and that is a
    // fairness problem between candidates rather than a defect in any document.
    console.log('\n  mean rate per paper');
    for (const [v, ws] of perVariant) {
      console.log(`    ${v}  ${Math.round(ws.reduce((a, b) => a + b, 0) / ws.length)} wpm over ${ws.length} documents`);
    }

    console.log(`\n  ${rateOff.length} document(s) outside the ±${Math.round(RATE_TOLERANCE * 100)}% rate band:`);
    for (const l of rateOff) console.log(`    · ${l}`);
    console.log(`\n  ${lengthOff.length} document(s) outside the blueprint's length envelope:`);
    for (const l of lengthOff) console.log(`    · ${l}`);
    console.log();
  } finally {
    client.release();
    await pool.end();
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
