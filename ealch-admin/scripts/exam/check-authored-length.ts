// Is the document long enough, BEFORE anything is rendered?
//
// check-speech-rate.ts answers this from the audio, which is the honest way to
// ask it and also the expensive one: the clips have to exist first. TCF
// blanc-01 was authored, applied, rendered twice and reviewed before anyone
// discovered that all 24 of its listening documents ran between a third and
// two thirds of the length STANDARD-tcf §3 requires. Nothing before the render
// looked at length at all.
//
// This looks at the authored text and needs no audio and no database. It
// cannot measure a rate, so it does not pretend to: it takes the band's TARGET
// wpm as given and asks whether the words in front of it can possibly fill the
// envelope at that rate. A document that is too short here will still be too
// short after rendering, whatever the voice does.
//
// The check is deliberately one-directional in strength. Too FEW words is
// certain: no delivery makes 115 words last two minutes. Too MANY is a
// prediction, since a voice reading slower than target fills more time than
// this estimates, so an over-long document is reported as a warning and the
// measured checker settles it.
//
// Usage (from ealch-admin/):
//   pnpm tsx scripts/exam/check-authored-length.ts
import { spokenTranscript } from '../../../ealch-v2/src/utils/coPlayback.logic.ts';
import { CE_TASKS, CO_TASKS } from '../tcf-blanc01/paper.ts';
import { CE_WORDS, TCF_LENGTH, TCF_RATE, type Band } from './rate-rules.ts';

const words = (text: string): number =>
  spokenTranscript(text)
    .split(/\s+/)
    .filter(Boolean).length;

let short = 0;
let long = 0;
let total = 0;

console.log('\n  TCF blanc-01 · authored length against STANDARD-tcf §3');
console.log('  band  document                                    words   at target   envelope');
console.log(`  ${'-'.repeat(76)}`);

for (const task of CO_TASKS) {
  const band = (task.level ?? '') as Band;
  const rate = TCF_RATE[band];
  const [lo, hi] = TCF_LENGTH[band];
  for (const part of task.parts ?? []) {
    if (!part.text) continue;
    const w = words(part.text);
    total += w;
    // Seconds the words would fill if the voice hit the band's target exactly.
    const secs = Math.round((w / rate) * 60);
    const verdict = secs < lo ? ' SHORT' : secs > hi ? ' long' : '';
    if (secs < lo) short += 1;
    if (secs > hi) long += 1;
    const name = part.label.length > 40 ? `${part.label.slice(0, 39)}…` : part.label;
    console.log(
      `  ${band.padEnd(5)} ${name.padEnd(42)} ${String(w).padStart(5)}   ${String(secs).padStart(6)}s   ` +
        `${String(lo).padStart(3)}-${String(hi).padEnd(4)}${verdict}`
    );
  }
}

console.log(`\n  ${total} spoken words across the listening épreuve.`);
console.log(`  ${short} document(s) too short to fill their envelope at the band's target rate.`);
console.log(`  ${long} document(s) that may overrun, which the measured checker settles.\n`);

/* ── Reading, where the envelope is stated in words ─────────────────────────
 *
 * No prediction and no audio: STANDARD-tcf §4 gives a word count per band, so
 * this is that count. Both directions fail here, because a C1 document at 500
 * words is as far outside its band as one at 150.
 *
 * The reading épreuve had the identical defect and it was found the same way,
 * only after the listening one had been fixed: 21 of 23 documents short, the
 * C2 extract at 69 words against a 400-word floor.
 */
let ceOff = 0;
let ceTotal = 0;

console.log('  TCF blanc-01 · reading length against STANDARD-tcf §4');
console.log('  band  document                                    words   envelope');
console.log(`  ${'-'.repeat(70)}`);

for (const task of CE_TASKS) {
  const band = (task.level ?? '') as Band;
  const [lo, hi] = CE_WORDS[band];
  for (const part of task.parts ?? []) {
    if (!part.text) continue;
    const w = words(part.text);
    ceTotal += w;
    const verdict = w < lo ? ' SHORT' : w > hi ? ' LONG' : '';
    if (verdict) ceOff += 1;
    const name = part.label.length > 40 ? `${part.label.slice(0, 39)}…` : part.label;
    console.log(
      `  ${band.padEnd(5)} ${name.padEnd(42)} ${String(w).padStart(5)}   ` +
        `${String(lo).padStart(3)}-${String(hi).padEnd(4)}${verdict}`
    );
  }
}

console.log(`\n  ${ceTotal} words across the reading épreuve.`);
console.log(`  ${ceOff} document(s) outside their band's word envelope.\n`);

// A short listening document is arithmetic; an over-long one is a prediction
// the measured checker settles, so only SHORT fails there. Reading has no
// prediction in it, so both directions fail.
if (short || ceOff) process.exitCode = 1;
