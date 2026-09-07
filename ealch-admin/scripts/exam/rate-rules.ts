// What a listening document must sound like, as functions that can fail.
//
// Two formats, two different shapes, one standard:
//
//   TEF is a paper of BLOCKS. A block is an exercise family sitting at a fixed
//   band, so its rate and its length come off the block letter.
//
//   TCF is a paper of a SLOPE. There are no blocks; the document's BAND is its
//   position on the ramp, and STANDARD-tcf §7 asks for something TEF never
//   does: "speech rate rises across the épreuve and sits in each band's
//   envelope". Two requirements, and the first one is not implied by the
//   second — every band can sit inside a generous tolerance while the measured
//   line still wanders up and down.
//
// This lives in its own module rather than inside the checker because the
// checker prints and a printed number cannot fail a build. The first TCF render
// went out with NO ramp at all — every band at the provider's default, because
// the renderer read TCF's bands against TEF's block table and matched nothing.
// Nothing threw, the voices were right, and each clip sounded fine alone. It
// was visible only by measuring words per second per band, which is what these
// functions do.
export type Band = 'a1' | 'a2' | 'b1' | 'b2' | 'c1' | 'c2';

export const BAND_ORDER: Band[] = ['a1', 'a2', 'b1', 'b2', 'c1', 'c2'];

/** Words per minute per band, STANDARD-tcf §2 and STANDARD-common §2.
 *  C2 is written there as "natural unmodified rate" rather than a number; 185
 *  is that rate as this provider actually delivers it, and it is the only cell
 *  in the table that is measured rather than quoted. */
export const TCF_RATE: Record<Band, number> = {
  a1: 110, a2: 120, b1: 140, b2: 160, c1: 175, c2: 185,
};

/** Seconds per band, STANDARD-tcf §3. Slowing a document lengthens it, so
 *  these two constraints pull against each other and both have to hold: a
 *  document paced correctly and running twice its envelope is still wrong. */
export const TCF_LENGTH: Record<Band, [number, number]> = {
  a1: [10, 20], a2: [20, 30], b1: [30, 50], b2: [60, 90], c1: [90, 120], c2: [120, 150],
};

/** Words per READING document, STANDARD-tcf §4.
 *
 *  Reading has no rate to measure, so the envelope is stated directly in words
 *  and the check is arithmetic rather than a prediction. It lives here beside
 *  the listening envelope because both come off the same standard and because
 *  the reading épreuve had exactly the same defect, found the same way and only
 *  after the listening one was fixed: 21 of 23 documents short, the C2 extract
 *  at 69 words against a 400-word floor.
 *
 *  The C2 ceiling is this file's own: the standard says "400+" and a document
 *  can be too long as well as too short. */
export const CE_WORDS: Record<Band, [number, number]> = {
  a1: [15, 40], a2: [40, 90], b1: [110, 180], b2: [180, 280], c1: [280, 400], c2: [400, 900],
};

/** How far off target is worth reporting. Synthesis is not a metronome, and a
 *  document is a handful of sentences rather than a long enough sample to
 *  average out. */
export const RATE_TOLERANCE = 0.18;

export type Measured = { band: Band; label: string; wpm: number; seconds: number };

/** Mean measured rate per band, for the bands that have documents. */
export function meanByBand(docs: Measured[]): Map<Band, number> {
  const out = new Map<Band, number>();
  for (const band of BAND_ORDER) {
    const hits = docs.filter((d) => d.band === band);
    if (!hits.length) continue;
    out.set(band, hits.reduce((n, d) => n + d.wpm, 0) / hits.length);
  }
  return out;
}

/** The ramp: each band's mean must not come in slower than the band below it.
 *
 *  Phrased as "does not fall" rather than "rises" on purpose. Two adjacent
 *  bands can legitimately land within a word per minute of each other — b1 and
 *  b2 are 20 wpm apart on paper and synthesis does not hit its marks exactly —
 *  and failing that would be a guard that cries wolf until it is deleted. A
 *  FALL is never legitimate: it means the document further up the slope is
 *  easier to follow than the one below it, which inverts the instrument. */
export function rampFalls(docs: Measured[]): string[] {
  const means = meanByBand(docs);
  const present = BAND_ORDER.filter((b) => means.has(b));
  const out: string[] = [];
  for (let i = 1; i < present.length; i++) {
    const lo = present[i - 1]!;
    const hi = present[i]!;
    const a = means.get(lo)!;
    const b = means.get(hi)!;
    if (b < a) out.push(`${hi} runs at ${b.toFixed(0)} wpm, slower than ${lo} at ${a.toFixed(0)}`);
  }
  return out;
}

/** Documents whose measured rate misses their band's target by more than the
 *  tolerance. This is the half of §7 that catches a ramp which rises correctly
 *  but sits in the wrong place — every band 40 wpm too fast still rises. */
export function rateViolations(docs: Measured[]): string[] {
  return docs
    .filter((d) => Math.abs(d.wpm - TCF_RATE[d.band]) / TCF_RATE[d.band] > RATE_TOLERANCE)
    .map((d) => `${d.band} · ${d.label}: ${d.wpm} wpm against ${TCF_RATE[d.band]}`);
}

/** Documents outside their band's length envelope. */
export function lengthViolations(docs: Measured[]): string[] {
  return docs
    .filter((d) => {
      const [lo, hi] = TCF_LENGTH[d.band];
      return d.seconds < lo || d.seconds > hi;
    })
    .map((d) => {
      const [lo, hi] = TCF_LENGTH[d.band];
      return `${d.band} · ${d.label}: ${d.seconds}s, envelope ${lo}-${hi}s`;
    });
}
