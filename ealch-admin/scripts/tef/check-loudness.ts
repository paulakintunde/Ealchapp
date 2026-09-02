// How level are the clips a candidate actually hears?
//
// `stitch.ts` normalises every turn to EBU R128 (-16 LUFS), but the asset key
// hashes text, voice, provider, render version and voice settings — NOT the
// stitching parameters. So clips rendered before a stitching change keep their
// keys, the renderer skips them, and the normalisation is inert on them. That
// is what `renderVersion` is for, and it is why this check exists: the only way
// to know a normalisation actually reached the bytes is to measure the bytes.
//
// Whether a spread matters is a measurable question rather than an opinion. If
// the documents sit within a couple of LUFS of each other, a candidate hears
// one even recording. If they spread widely, a candidate is adjusting the
// volume between questions, and in a micro-trottoir a quiet speaker reads as a
// distant one — which is the item.
//
// Measures the integrated loudness of each clip with ffmpeg, straight from the
// bucket. Costs nothing but bandwidth.
//
// Usage (from ealch-admin/):
//   pnpm tsx scripts/tef/check-loudness.ts              all five papers
//   pnpm tsx scripts/tef/check-loudness.ts 2 3          only those
import './../env';
import { spawn } from 'node:child_process';
import { mkdtemp, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

/** Which papers to measure. Defaults to all five rather than to blanc-01: the
 *  interesting question is whether they match EACH OTHER, and a default of one
 *  paper cannot answer it. */
const ARGS = process.argv.slice(2).filter((a) => /^\d+$/.test(a)).map(Number);
const VARIANTS = (ARGS.length ? ARGS : [1, 2, 3, 4, 5]).map((n) => `blanc-${String(n).padStart(2, '0')}`);

/** Integrated loudness in LUFS, via ffmpeg's loudnorm analysis pass. */
function measure(path: string): Promise<number | null> {
  return new Promise((resolve) => {
    const p = spawn('ffmpeg', ['-i', path, '-af', 'loudnorm=print_format=json', '-f', 'null', '-']);
    let err = '';
    p.stderr.on('data', (d) => { err += String(d); });
    p.on('error', () => resolve(null));
    p.on('close', () => {
      const m = err.match(/"input_i"\s*:\s*"(-?[\d.]+)"/);
      resolve(m ? Number(m[1]) : null);
    });
  });
}

async function main() {
  const base = process.env.R2_PUBLIC_BASE_URL;
  if (!base) throw new Error('R2_PUBLIC_BASE_URL is not set');

  const { Pool } = await import('pg');
  const pool = new Pool({ connectionString: process.env.DATABASE_URL, max: 1 });
  const client = await pool.connect();
  const rows: { variant: string; label: string; part: string; ref: string }[] = [];
  try {
    const res = await client.query<{
      variant: string;
      label: string | null;
      parts: { label: string; audioRef?: string | null }[];
    }>(
      `select variant, label, parts from content_exam_tasks
        where variant = any($1::text[]) and format = 'tef_canada' and skill = 'CO'
        order by variant, id`,
      [VARIANTS]
    );
    for (const r of res.rows) {
      for (const p of r.parts ?? []) {
        if (p.audioRef) rows.push({ variant: r.variant, label: r.label ?? '', part: p.label, ref: p.audioRef });
      }
    }
  } finally {
    client.release();
    await pool.end();
  }

  if (rows.length === 0) throw new Error(`no rendered CO clips found for ${VARIANTS.join(', ')}`);

  const dir = await mkdtemp(join(tmpdir(), 'ealch-loud-'));
  const measured: { variant: string; name: string; lufs: number }[] = [];
  let unmeasured = 0;
  try {
    for (const row of rows) {
      const res = await fetch(`${base.replace(/\/$/, '')}/${row.ref}`);
      if (!res.ok) { unmeasured += 1; continue; }
      const f = join(dir, `${measured.length}.mp3`);
      await writeFile(f, Buffer.from(await res.arrayBuffer()));
      const lufs = await measure(f);
      if (lufs === null || !Number.isFinite(lufs)) { unmeasured += 1; continue; }
      measured.push({ variant: row.variant, name: `${row.label} · ${row.part}`.slice(0, 52), lufs });
    }
  } finally {
    await rm(dir, { recursive: true, force: true }).catch(() => {});
  }

  if (measured.length === 0) throw new Error('nothing measured — is ffmpeg on PATH?');

  // Per paper, then across the pack. A candidate sits ONE paper, so the
  // within-paper spread is what they hear; the pack-wide spread is what a
  // candidate sitting two of them hears, and it is the one a per-paper report
  // would never show.
  console.log(`\n  loudness as rendered (target -16 LUFS) · ${measured.length} clip(s)`);
  if (unmeasured) console.log(`  ${unmeasured} clip(s) could not be measured (fetch or decode failed)`);

  for (const v of VARIANTS) {
    const mine = measured.filter((m) => m.variant === v).sort((a, b) => a.lufs - b.lufs);
    if (mine.length === 0) continue;
    const lo = mine[0]!.lufs;
    const hi = mine[mine.length - 1]!.lufs;
    const outside = mine.filter((m) => Math.abs(m.lufs + 16) >= 2);
    console.log(`\n  ${v}  ${mine.length} clips · ${lo.toFixed(1)} to ${hi.toFixed(1)} · spread ${(hi - lo).toFixed(1)} LU · ${outside.length} at 2 LU or more off target`);
    for (const m of outside) {
      const off = m.lufs + 16;
      console.log(`    ${m.lufs.toFixed(1).padStart(7)} LUFS  ${off >= 0 ? '+' : ''}${off.toFixed(1).padStart(5)}  ${m.name}`);
    }
  }

  const all = measured.map((m) => m.lufs).sort((a, b) => a - b);
  const spread = all[all.length - 1]! - all[0]!;
  const outside = measured.filter((m) => Math.abs(m.lufs + 16) >= 2).length;
  console.log(`\n  across the pack: quietest ${all[0]!.toFixed(1)} · loudest ${all[all.length - 1]!.toFixed(1)} · spread ${spread.toFixed(1)} LU`);
  console.log(`  ${outside} of ${measured.length} sit 2 LU or more off the -16 target`);
  // 3 LU is about where a listener starts reaching for the volume; 6 is where
  // one speaker plainly sounds further away than another.
  console.log(
    spread < 3
      ? '\n  → Even. Nothing here changes what a candidate hears.\n'
      : spread < 6
        ? '\n  → Noticeable. A candidate would adjust the volume between documents.\n'
        : '\n  → Wide. One speaker plainly sounds more distant than another; in a micro-trottoir that is the item.\n'
  );
}

main().catch((e) => { console.error(String(e)); process.exit(1); });
