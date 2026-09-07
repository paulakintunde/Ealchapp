// The ramp guard, pinned against the defect that produced it.
//
// TCF blanc-01 shipped its first render with every band at the provider's
// default rate. The measured means were a1 168, a2 146, b1 164, b2 201, c1 182,
// c2 197 — no ramp, and a FALL from a1 to a2. Every clip was in the right
// voice, nothing threw, and the paper looked finished. The numbers below are
// that render, so this test fails if the bug is ever reintroduced.
import { deepStrictEqual, ok, strictEqual } from 'node:assert';
import { test } from 'node:test';
import { lengthViolations, rampFalls, rateViolations, type Measured } from './rate-rules.ts';

/** Build one document per band at the given rates, all inside their length
 *  envelope so a rate test cannot accidentally be measuring length. */
const docs = (wpm: Record<string, number>): Measured[] => {
  const secs: Record<string, number> = { a1: 15, a2: 25, b1: 40, b2: 75, c1: 105, c2: 135 };
  return Object.entries(wpm).map(([band, w]) => ({
    band: band as Measured['band'],
    label: `doc ${band}`,
    wpm: w,
    seconds: secs[band]!,
  }));
};

/** What the renderer actually produced when TCF's bands were looked up in
 *  TEF's block table and matched nothing. */
const UNPACED = { a1: 168, a2: 146, b1: 164, b2: 201, c1: 182, c2: 197 };

/** What the band speeds in VOICES-tcf-canada.md are meant to produce. */
const PACED = { a1: 110, a2: 120, b1: 140, b2: 160, c1: 175, c2: 185 };

test('the ramp guard catches the unpaced render', () => {
  const falls = rampFalls(docs(UNPACED));
  ok(falls.length > 0, 'a render with no ramp must not pass');
  ok(
    falls.some((f) => f.startsWith('a2 runs at 146')),
    `expected the a1→a2 fall to be named, got: ${falls.join('; ')}`
  );
});

test('a correctly paced ramp raises nothing', () => {
  deepStrictEqual(rampFalls(docs(PACED)), []);
  deepStrictEqual(rateViolations(docs(PACED)), []);
  deepStrictEqual(lengthViolations(docs(PACED)), []);
});

test('equal adjacent bands are allowed, a fall of one word is not', () => {
  // Synthesis does not hit its marks exactly and two adjacent targets are 20
  // wpm apart, so a guard that demanded a strict rise would cry wolf. A fall
  // still inverts the slope, however small.
  deepStrictEqual(rampFalls(docs({ b1: 150, b2: 150 })), []);
  strictEqual(rampFalls(docs({ b1: 150, b2: 149 })).length, 1);
});

test('a ramp that rises in the wrong place is still caught', () => {
  // Every band 40 wpm too fast rises perfectly. This is the half of §7 that
  // the monotonic check cannot see, and the reason both exist.
  const fast = { a1: 150, a2: 160, b1: 180, b2: 200, c1: 215, c2: 225 };
  deepStrictEqual(rampFalls(docs(fast)), [], 'a uniformly fast ramp does rise');
  strictEqual(rateViolations(docs(fast)).length, 6, 'and every band is off target');
});

test('bands with no documents are skipped rather than treated as zero', () => {
  // A scoped render, or a paper still being authored, has gaps. A missing band
  // must not read as 0 wpm and fake a fall.
  deepStrictEqual(rampFalls(docs({ a1: 110, c1: 175 })), []);
});

test('length is checked against the band, not the rate', () => {
  const long: Measured[] = [{ band: 'a1', label: 'doc a1', wpm: 110, seconds: 45 }];
  deepStrictEqual(rateViolations(long), []);
  strictEqual(lengthViolations(long).length, 1);
});
