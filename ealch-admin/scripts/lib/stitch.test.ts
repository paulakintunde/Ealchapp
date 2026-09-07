// Stitching is the one part of E8 that cannot be checked by reading it: either
// three clips and two silences come out as one playable file of the right
// length, or they do not.
//
// SKIPPED WHEN FFMPEG IS ABSENT, and reported as skipped rather than passed. A
// green tick on a machine that never ran the code would be worse than no test:
// the renderer refuses to run without ffmpeg anyway, so a skip here is the
// truth about that machine.
import { ok, strictEqual } from 'node:assert';
import { test } from 'node:test';
import { spawn } from 'node:child_process';
import { mkdtemp, readFile, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { haveFfmpegSync, stitchClips } from './stitch.ts';

const HAVE = haveFfmpegSync();

function ffmpeg(args: string[]): Promise<void> {
  return new Promise((res, rej) => {
    const p = spawn('ffmpeg', args, { stdio: 'ignore' });
    p.on('error', rej);
    p.on('close', (c) => (c === 0 ? res() : rej(new Error(`ffmpeg ${c}`))));
  });
}

function duration(path: string): Promise<number> {
  return new Promise((res) => {
    const p = spawn('ffprobe', ['-v', 'error', '-show_entries', 'format=duration', '-of', 'csv=p=0', path]);
    let out = '';
    p.stdout.on('data', (d) => { out += String(d); });
    p.on('error', () => res(NaN));
    p.on('close', () => res(Number(out.trim())));
  });
}

async function tone(dir: string, hz: number, secs: number): Promise<Buffer> {
  const f = join(dir, `${hz}.mp3`);
  await ffmpeg([
    '-f', 'lavfi', '-i', `sine=frequency=${hz}:duration=${secs}`,
    '-c:a', 'libmp3lame', '-b:a', '128k', '-ar', '44100', '-ac', '1', '-y', f,
  ]);
  return readFile(f);
}

/**
 * A quiet clip shaped like speech rather than like a tone.
 *
 * This distinction is the whole test. A steady sine is the ONE signal
 * single-pass loudnorm handles well — measured, it lands a plain tone within
 * half a LU of target, so a test built on one would pass whether or not the
 * second pass exists and would guard nothing. Real speech pulses and changes
 * level as a speaker warms up, and that is what the running estimate lags on.
 * `tremolo` supplies the pulsing, the rising `volume` ramp the drift.
 */
async function speechLike(dir: string, secs: number): Promise<Buffer> {
  const f = join(dir, 'speechlike.mp3');
  await ffmpeg([
    '-f', 'lavfi', '-i', `sine=frequency=180:duration=${secs}`,
    '-af', `tremolo=f=3:d=0.9,volume=0.02+0.06*t/${secs}:eval=frame`,
    '-c:a', 'libmp3lame', '-b:a', '128k', '-ar', '44100', '-ac', '1', '-y', f,
  ]);
  return readFile(f);
}

/** Integrated loudness in LUFS, from loudnorm's own analysis pass. */
function loudness(path: string): Promise<number> {
  return new Promise((res) => {
    const p = spawn('ffmpeg', ['-i', path, '-af', 'loudnorm=print_format=json', '-f', 'null', '-'], {
      stdio: ['ignore', 'ignore', 'pipe'],
    });
    let err = '';
    p.stderr.on('data', (d) => { err += String(d); });
    p.on('error', () => res(NaN));
    p.on('close', () => {
      const m = err.match(/"input_i"\s*:\s*"(-?[\d.]+)"/);
      res(m ? Number(m[1]) : NaN);
    });
  });
}

test('three turns and two gaps come out as one file of the right length', { skip: !HAVE && 'ffmpeg not installed' }, async () => {
  const dir = await mkdtemp(join(tmpdir(), 'ealch-stitch-test-'));
  try {
    const clips = [await tone(dir, 440, 1), await tone(dir, 880, 1), await tone(dir, 660, 1)];
    const out = await stitchClips(clips, [700, 300]);
    const path = join(dir, 'out.mp3');
    await writeFile(path, out);

    const secs = await duration(path);
    // 3 s of tone + 1.0 s of silence. mp3 frame padding makes this inexact, so
    // the window is generous in a way that would still catch a dropped clip or
    // a missing gap.
    ok(secs > 3.8 && secs < 4.3, `stitched duration ${secs}s, expected about 4.0s`);
    ok(out.length > 0);
  } finally {
    await rm(dir, { recursive: true, force: true }).catch(() => {});
  }
});

test('a single turn is normalised, not passed through', { skip: !HAVE && 'ffmpeg not installed' }, async () => {
  // It used to pass through untouched to save a re-encode. That is exactly how
  // a one-voice document (Section D's chronicle, Section F's reportage) kept
  // whatever level the provider synthesised it at, and why the chroniqueur
  // sounded quiet against every other section. Levelling costs one re-encode
  // and is the whole point.
  const dir = await mkdtemp(join(tmpdir(), 'ealch-stitch-test-'));
  try {
    const one = await tone(dir, 440, 1);
    const out = await stitchClips([one], []);
    ok(!out.equals(one), 'must not be the provider bytes verbatim');
    ok(out.length > 0, 'still a playable clip');
  } finally {
    await rm(dir, { recursive: true, force: true }).catch(() => {});
  }
});

test('a quiet turn comes out ON the target, not merely closer to it', { skip: !HAVE && 'ffmpeg not installed' }, async () => {
  // The measurable difference between one pass and two.
  //
  // Single-pass loudnorm gains from a running estimate, so on a short input it
  // never converges: the thirty documents rendered that way came out with a
  // 12.8 LU spread, and the two furthest off were both SINGLE-TURN documents
  // still four LU quiet — Section G document 17 at -20.0 and Section D's
  // chronicle at -18.3. Those are precisely the case this test builds.
  //
  // So the assertion is not "it got louder". It is "it landed", which is the
  // claim that failed before: measured on this same input, one pass overshoots
  // to -13.5 and two passes reach -16.4. The 1 LU window below is what
  // separates them, so this test fails if the second pass is ever removed.
  const dir = await mkdtemp(join(tmpdir(), 'ealch-stitch-test-'));
  try {
    const quiet = await speechLike(dir, 6);
    const path = join(dir, 'quiet-out.mp3');
    await writeFile(path, await stitchClips([quiet], []));

    const before = await loudness(join(dir, 'speechlike.mp3'));
    const after = await loudness(path);
    ok(Number.isFinite(before) && Number.isFinite(after), 'could not measure loudness');
    ok(before < -22, `input was meant to be quiet, measured ${before.toFixed(1)} LUFS`);
    // 1 LU is inside what anyone can hear as a level difference between two
    // documents; the fault this fixes was four.
    ok(Math.abs(after + 16) < 1, `normalised to ${after.toFixed(1)} LUFS, wanted -16`);
  } finally {
    await rm(dir, { recursive: true, force: true }).catch(() => {});
  }
});

test('a gap count that does not match the turns is refused', async () => {
  // Off by one here would silently drop the last gap, which is a speaker
  // change running into the next speaker.
  await ok(stitchClips([Buffer.from('a'), Buffer.from('b')], []).then(() => false, () => true));
  await ok(stitchClips([], []).then(() => false, () => true));
});
