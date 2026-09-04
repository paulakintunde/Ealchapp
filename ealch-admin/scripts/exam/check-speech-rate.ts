// Measured speech rate per listening document, against the band envelope.
//
// STANDARD-common §2 calls speech rate "a real difficulty lever and the
// cheapest one we control", and gives a target per band: <=110 wpm at A1, ~120
// at A2, ~140 at B1, ~160 at B2, ~175 at C1.
//
// Until the audio existed, that was an instruction nobody could check: the
// authored `durationS` was an estimate, so dividing words by it would have
// measured the estimate rather than the recording. Now the durations are read
// off the rendered clips, so this measures what a candidate will actually hear.
//
// It also checks document LENGTH against the blueprint's envelope, which is
// the other thing the standard fixes and the other thing an estimate could not
// confirm. The two pull against each other: slowing a document lengthens it.
//
// TWO FORMATS, TWO SHAPES. TEF is a paper of blocks and reads its target off
// the block letter. TCF is a paper of a slope and reads it off the BAND, and
// carries one extra requirement TEF does not have (STANDARD-tcf §7): the rate
// must RISE across the épreuve. Those TCF rules live in ./rate-rules.ts as
// pure functions, because this file prints and a printed number cannot fail.
//
// EXIT CODE. Non-zero when anything is outside its envelope, so this can gate
// a publish rather than only inform one.
//
// Usage (from ealch-admin/):
//   pnpm tsx scripts/exam/check-speech-rate.ts            TEF, all five papers
//   pnpm tsx scripts/exam/check-speech-rate.ts tef 2 3    only those
//   pnpm tsx scripts/exam/check-speech-rate.ts tcf        TCF blanc-01
import './../env';
import { spokenTranscript } from '../../../ealch-v2/src/utils/coPlayback.logic.ts';
import {
  BAND_ORDER,
  RATE_TOLERANCE,
  TCF_LENGTH,
  TCF_RATE,
  lengthViolations,
  meanByBand,
  rampFalls,
  rateViolations,
  type Band,
  type Measured,
} from './rate-rules.ts';
import { clockShortfalls } from '../tcf/paper-rules.ts';

const FORMATS = { tef: 'tef_canada', tcf: 'tcf_canada' } as const;
const FORMAT_KEY = (process.argv.slice(2).find((a) => a in FORMATS) ?? 'tef') as keyof typeof FORMATS;
const FORMAT = FORMATS[FORMAT_KEY];

/** Target words per minute, by the block's band (STANDARD-common §2). TEF only:
 *  TCF's live in rate-rules.ts, keyed by band rather than by block. */
const RATE_TARGET: Record<string, { wpm: number; band: string }> = {
  A: { wpm: 120, band: 'A1-A2' },
  B: { wpm: 140, band: 'A2-B1' },
  C: { wpm: 160, band: 'B1-B2' },
  D: { wpm: 160, band: 'B2' },
  E: { wpm: 160, band: 'B1-C1' },
  F: { wpm: 175, band: 'B2-C1' },
  G: { wpm: 140, band: 'A2-B2' },
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

/** Which papers to measure. TEF defaults to all five rather than to blanc-01:
 *  rate drift between papers is a property of the PACK, and one paper cannot
 *  show it. TCF has one paper so far. */
const ARGS = process.argv.slice(2).filter((a) => /^[0-9]+$/.test(a)).map(Number);
const DEFAULTS = FORMAT_KEY === 'tef' ? [1, 2, 3, 4, 5] : [1];
const VARIANTS = (ARGS.length ? ARGS : DEFAULTS).map((n) => `blanc-${String(n).padStart(2, '0')}`);

const WORDS = (text: string): number =>
  spokenTranscript(text)
    .split(/\s+/)
    .filter(Boolean).length;

async function main() {
  const { Pool } = await import('pg');
  const pool = new Pool({ connectionString: process.env.DATABASE_URL, max: 1 });
  const client = await pool.connect();
  let failures = 0;
  try {
    const rows = await client.query<{
      variant: string;
      label: string | null;
      level: string | null;
      timing_s: number | null;
      parts: {
        label: string;
        text?: string;
        durationS?: number;
        readWindowS?: number;
        playCount?: number;
        items?: unknown[];
        audioRef?: string | null;
      }[];
    }>(
      `select variant, label, level::text as level, timing_s, parts from content_exam_tasks
        where variant = any($1::text[]) and format = $2::text::exam_format and skill = 'CO'
        order by variant, id`,
      [VARIANTS, FORMAT]
    );

    if (!rows.rows.length) {
      console.log(`\n  no ${FORMAT} CO tasks for ${VARIANTS.join(', ')}.\n`);
      return;
    }

    console.log(`\n  ${FORMAT_KEY.toUpperCase()} Canada · measured against the rendered audio`);

    const rateOff: string[] = [];
    const lengthOff: string[] = [];
    const perVariant = new Map<string, number[]>();
    const tcfDocs = new Map<string, Measured[]>();
    const isTcf = FORMAT_KEY === 'tcf';

    // The suite's clock guard runs on the AUTHORED durationS, which is an
    // estimate the renderer then overwrites with what it measured. So the guard
    // can be green on a paper whose real audio overruns its clock. This is the
    // same check against the numbers that actually came out.
    const clockOff: string[] = [];

    let shown = '';
    for (const row of rows.rows) {
      if (row.variant !== shown) {
        shown = row.variant;
        console.log(`\n  ${shown}`);
        console.log('  key    document                                    words   secs    wpm   target');
        console.log(`  ${'-'.repeat(78)}`);
      }
      // TEF keys on the block letter; TCF on the band, because a TCF label
      // reads "Compréhension orale · A1" and slicing its first character would
      // silently call every document a block C.
      const key = isTcf
        ? (row.level ?? '').toLowerCase()
        : (row.label ?? '').replace(/^Section\s+/i, '').trim().slice(0, 1).toUpperCase();
      const targetWpm = isTcf ? TCF_RATE[key as Band] : RATE_TARGET[key]?.wpm;
      const bandName = isTcf ? key.toUpperCase() : RATE_TARGET[key]?.band;
      const [lo, hi] = (isTcf ? TCF_LENGTH[key as Band] : LENGTH_TARGET[key]) ?? [0, 9999];
      for (const part of row.parts) {
        if (!part.text || !part.durationS) continue;
        const words = WORDS(part.text);
        const wpm = Math.round((words / part.durationS) * 60);
        const name = part.label.length > 40 ? `${part.label.slice(0, 39)}…` : part.label;
        const flag = targetWpm && Math.abs(wpm - targetWpm) / targetWpm > RATE_TOLERANCE ? ' ←' : '';
        console.log(
          `  ${key.padEnd(6)} ${name.padEnd(42)} ${String(words).padStart(5)}` +
            `${String(part.durationS).padStart(7)}${String(wpm).padStart(7)}` +
            `${String(targetWpm ?? '—').padStart(8)}${flag}`
        );
        if (!perVariant.has(row.variant)) perVariant.set(row.variant, []);
        perVariant.get(row.variant)!.push(wpm);
        if (isTcf) {
          if (!tcfDocs.has(row.variant)) tcfDocs.set(row.variant, []);
          tcfDocs.get(row.variant)!.push({ band: key as Band, label: part.label, wpm, seconds: part.durationS });
        } else {
          // Every reported line names its paper. A flagged document has to be
          // findable without re-running the tool once per variant.
          if (flag) {
            rateOff.push(
              `${row.variant} · ${row.label} / ${part.label}: ${wpm} wpm against ${targetWpm} (${bandName})`
            );
          }
          if (part.durationS < lo || part.durationS > hi) {
            lengthOff.push(`${row.variant} · ${row.label} / ${part.label}: ${part.durationS}s, envelope ${lo}-${hi}s`);
          }
        }
      }
      const measured = clockShortfalls([
        { label: `${row.variant} · ${row.label}`, level: row.level ?? undefined, timingS: row.timing_s ?? 0, parts: row.parts },
      ]);
      clockOff.push(...measured);
    }

    // TCF: the ramp, which is the requirement TEF does not have. Reported per
    // paper because a ramp is a property of one épreuve, not of the pack.
    for (const [variant, docs] of tcfDocs) {
      console.log(`\n  ${variant} · the ramp`);
      const means = meanByBand(docs);
      for (const band of BAND_ORDER) {
        const m = means.get(band);
        if (m === undefined) continue;
        const n = docs.filter((d) => d.band === band).length;
        console.log(
          `    ${band}  ${m.toFixed(0).padStart(3)} wpm over ${String(n).padStart(2)} document(s)` +
            `   target ${String(TCF_RATE[band]).padStart(3)}`
        );
      }
      const falls = rampFalls(docs);
      console.log(
        falls.length
          ? `    ✖ the rate does not rise: ${falls.join('; ')}`
          : '    ✓ the rate rises across the épreuve (STANDARD-tcf §7)'
      );
      failures += falls.length;
      rateOff.push(...rateViolations(docs).map((v) => `${variant} · ${v}`));
      lengthOff.push(...lengthViolations(docs).map((v) => `${variant} · ${v}`));
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
    console.log(`\n  ${clockOff.length} section(s) whose MEASURED audio overruns their clock:`);
    for (const l of clockOff) console.log(`    · ${l}`);
    console.log();
    failures += rateOff.length + lengthOff.length + clockOff.length;
  } finally {
    client.release();
    await pool.end();
  }
  if (failures) process.exitCode = 1;
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
