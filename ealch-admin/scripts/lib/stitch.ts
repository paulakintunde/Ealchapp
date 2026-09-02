// Joining rendered turns into one listening document.
//
// ── Why not just concatenate the bytes ──────────────────────────────────────
//
// Every clip comes back as `mp3_44100_128`, so naive byte concatenation mostly
// plays. Mostly is the problem: each clip carries its own header, decoders
// disagree about mid-stream headers, and there is no way to put a gap between
// two speakers — and the gap is not decoration. A speaker change needs a beat
// or the document runs together into one breath, and that beat is a cue a
// listener uses to tell two people apart. In block C that IS the task.
//
// So this re-encodes through ffmpeg, which gives real silence and one clean
// stream. ffmpeg is already on this machine; if it is missing the renderer
// says so and stops rather than shipping a document that sounds joined.
import { spawn, spawnSync } from 'node:child_process';
import { mkdtemp, rm, writeFile, readFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

/** Synchronous, because a test file cannot await at module scope under the
 *  CJS transform tsx uses here. */
export function haveFfmpegSync(): boolean {
  try {
    return spawnSync('ffmpeg', ['-version'], { stdio: 'ignore' }).status === 0;
  } catch {
    return false;
  }
}

export async function haveFfmpeg(): Promise<boolean> {
  return new Promise((res) => {
    const p = spawn('ffmpeg', ['-version'], { stdio: 'ignore' });
    p.on('error', () => res(false));
    p.on('close', (code) => res(code === 0));
  });
}

function run(args: string[]): Promise<void> {
  return new Promise((res, rej) => {
    const p = spawn('ffmpeg', args, { stdio: ['ignore', 'ignore', 'pipe'] });
    let err = '';
    p.stderr.on('data', (d) => { err += String(d); });
    p.on('error', rej);
    p.on('close', (code) => (code === 0 ? res() : rej(new Error(`ffmpeg exited ${code}: ${err.slice(-400)}`))));
  });
}

/**
 * Bring one turn to a common loudness before it is joined to the others.
 *
 * Two separate faults made this necessary, both heard on the Pixel before it
 * was measured: one speaker in a micro-trottoir sounding distant next to the
 * other two, and a broadcast voice swinging loud and quiet inside a single
 * clip. The provider returns whatever level the voice happened to synthesise
 * at, and nothing downstream touched it, so a document was only as even as
 * ElevenLabs felt like being.
 *
 * `loudnorm` in single-pass form applies time-varying gain, which is what
 * fixes BOTH: it lands every turn on the same target (speakers now match) and
 * it evens out the swing within a turn. EBU R128 at -16 LUFS is the spoken
 * word target; -1.5 dBTP leaves headroom so the mp3 encoder cannot clip.
 *
 * This is deliberately not a voice_settings change: ElevenLabs has no volume
 * or gain parameter, so level is not something casting can control.
 */
async function normalise(inPath: string, outPath: string): Promise<void> {
  // TWO PASS, and the second pass is the point.
  //
  // Single-pass loudnorm gains from a running estimate, so it needs material
  // to converge on. On a short single-speaker turn it never gets there: the
  // thirty documents rendered single-pass came out with a 12.8 LU spread, and
  // the two worst were both one-turn documents still 4 LU quiet. Measuring
  // first and passing the numbers back lands them on target instead.
  const measured = await analyse(inPath);
  const filter = measured
    ? `loudnorm=I=-16:TP=-1.5:LRA=11:measured_I=${measured.i}:measured_TP=${measured.tp}` +
      `:measured_LRA=${measured.lra}:measured_thresh=${measured.thresh}:offset=${measured.offset}:linear=true`
    // Analysis failed — one pass still levels most of the way, and a clip at
    // roughly the right level beats no clip.
    : 'loudnorm=I=-16:TP=-1.5:LRA=11';

  await run([
    '-i', inPath,
    '-af', filter,
    '-c:a', 'libmp3lame', '-b:a', '128k', '-ar', '44100', '-ac', '1',
    '-y', outPath,
  ]);
}

type Measured = { i: string; tp: string; lra: string; thresh: string; offset: string };

/** loudnorm's own analysis of a file, for the second pass. */
async function analyse(inPath: string): Promise<Measured | null> {
  const out = await capture([
    '-i', inPath, '-af', 'loudnorm=I=-16:TP=-1.5:LRA=11:print_format=json', '-f', 'null', '-',
  ]);
  // ffmpeg prints the JSON block last, on stderr, after its own banner.
  const start = out.lastIndexOf('{');
  const end = out.lastIndexOf('}');
  if (start < 0 || end < start) return null;
  try {
    const j = JSON.parse(out.slice(start, end + 1)) as Record<string, string>;
    const need = ['input_i', 'input_tp', 'input_lra', 'input_thresh', 'target_offset'];
    if (need.some((k) => j[k] === undefined || !Number.isFinite(Number(j[k])))) return null;
    return {
      i: j.input_i!, tp: j.input_tp!, lra: j.input_lra!,
      thresh: j.input_thresh!, offset: j.target_offset!,
    };
  } catch {
    return null;
  }
}

/** Run ffmpeg and hand back its stderr, which is where it reports. */
function capture(args: string[]): Promise<string> {
  return new Promise((res) => {
    const p = spawn('ffmpeg', args, { stdio: ['ignore', 'ignore', 'pipe'] });
    let err = '';
    p.stderr.on('data', (d) => { err += String(d); });
    p.on('error', () => res(''));
    p.on('close', () => res(err));
  });
}

/**
 * Concatenate clips with a silence of `gaps[i]` ms between clip i and i+1.
 *
 * `gaps` has one fewer entry than `clips`: a gap goes BETWEEN turns, and a
 * trailing silence would only pad the end of every document.
 */
export async function stitchClips(clips: Buffer[], gaps: number[]): Promise<Buffer> {
  if (clips.length === 0) throw new Error('nothing to stitch');
  if (gaps.length !== clips.length - 1) {
    throw new Error(`expected ${clips.length - 1} gaps for ${clips.length} clips, got ${gaps.length}`);
  }

  const dir = await mkdtemp(join(tmpdir(), 'ealch-stitch-'));
  try {
    const parts: string[] = [];
    for (let i = 0; i < clips.length; i += 1) {
      const raw = join(dir, `r${String(i).padStart(3, '0')}.mp3`);
      const f = join(dir, `t${String(i).padStart(3, '0')}.mp3`);
      await writeFile(raw, clips[i]!);
      await normalise(raw, f);
      parts.push(f);
      const gap = gaps[i];
      if (gap === undefined) continue;
      const s = join(dir, `g${String(i).padStart(3, '0')}.mp3`);
      // Silence generated at the same rate and layout as the clips, so the
      // concat demuxer never has to resample mid-document.
      await run([
        '-f', 'lavfi', '-i', 'anullsrc=r=44100:cl=mono',
        '-t', (gap / 1000).toFixed(3),
        '-c:a', 'libmp3lame', '-b:a', '128k', '-ar', '44100', '-ac', '1',
        '-y', s,
      ]);
      parts.push(s);
    }

    const listFile = join(dir, 'list.txt');
    // ffmpeg's concat demuxer takes single quotes around each path and escapes
    // an embedded quote by closing, escaping, reopening. Temp paths do not
    // contain quotes, but a machine's tmpdir is not ours to assume.
    await writeFile(
      listFile,
      parts.map((p) => `file '${p.replace(/'/g, "'\\''")}'`).join('\n'),
      'utf8'
    );

    // One turn still goes through the concat step's re-encode? No: there is
    // nothing to join. But it HAS been normalised above, which is the point —
    // a single-speaker document (a chronicle, a reportage) used to return the
    // provider's bytes untouched and so kept whatever level it arrived at.
    if (parts.length === 1) return await readFile(parts[0]!);

    const out = join(dir, 'out.mp3');
    await run([
      '-f', 'concat', '-safe', '0', '-i', listFile,
      // Re-encode rather than copy: the clips and the silence must end up one
      // stream with one header, not a pile of them.
      '-c:a', 'libmp3lame', '-b:a', '128k', '-ar', '44100', '-ac', '1',
      '-y', out,
    ]);
    return await readFile(out);
  } finally {
    await rm(dir, { recursive: true, force: true }).catch(() => {});
  }
}
