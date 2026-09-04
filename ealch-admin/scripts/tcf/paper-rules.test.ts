// The ramp gate, checked both ways.
//
// E9's gate for this format is "band ramp correct on all TCF papers". No TCF
// paper exists yet, so the rules in paper-rules.ts are currently called by
// nothing — and a guard nobody runs is a guard nobody has seen work. These
// tests exercise the two rules that matter on synthetic sequences, so the gate
// is known to fire before there is a paper to fire it on.
import { deepStrictEqual, ok } from 'node:assert';
import { test } from 'node:test';
import { BANDS, RAMP, rampViolations, distributionViolations } from './paper-rules.ts';

/** A correct épreuve: 3 a1, 6 a2, 10 b1, 10 b2, 7 c1, 3 c2, in that order. */
function goodRamp(): string[] {
  return BANDS.flatMap((b) => Array.from({ length: RAMP[b] }, () => b as string));
}

test('a correct ramp reports nothing', () => {
  deepStrictEqual(rampViolations(goodRamp()), []);
  deepStrictEqual(distributionViolations(goodRamp()), []);
  deepStrictEqual(goodRamp().length, 39);
});

test('a single item out of order is caught, and named', () => {
  // The failure this exists for: one b2 item early. The counts still balance,
  // so a distribution check alone passes it — which is why the ramp is checked
  // separately rather than inferred from the totals.
  const seq = goodRamp();
  const swap = seq[6]!;
  seq[6] = 'b2';
  seq[25] = swap;
  const v = rampViolations(seq);
  ok(v.length > 0, 'a b2 item at position 7 must be reported');
  ok(v[0]!.includes('item 8'), `expected the position after the jump, got: ${v[0]}`);
  deepStrictEqual(distributionViolations(seq), [], 'the counts still balance — that is the point');
});

test('a ramp that ends where it started is caught', () => {
  const seq = goodRamp();
  seq[38] = 'a1';
  ok(rampViolations(seq).length > 0);
});

test('the wrong number of items in a band is caught even when the order is fine', () => {
  // Monotonic and still wrong: one c2 short, one c1 long. The sequence never
  // goes backwards, so only the distribution check can see it.
  //
  // It has to be the FIRST c2 that becomes c1, not the last. Changing the last
  // one gives ...c2, c2, c1, which goes backwards — the ramp check fires and
  // the test proves nothing about the distribution check. My first version did
  // exactly that and failed for the wrong reason.
  const seq = goodRamp();
  seq[36] = 'c1';
  deepStrictEqual(rampViolations(seq), [], 'still monotonic');
  const v = distributionViolations(seq);
  ok(v.some((m) => m.startsWith('c1:')), `expected c1 flagged, got: ${v.join(' · ')}`);
  ok(v.some((m) => m.startsWith('c2:')), `expected c2 flagged, got: ${v.join(' · ')}`);
});

test('a band that is not a band is caught', () => {
  const seq = goodRamp();
  seq[0] = 'a0';
  ok(distributionViolations(seq).some((m) => m.includes('not a band')));
});

test('an empty épreuve is not silently correct', () => {
  // A paper with no items must fail the distribution, not pass it for lack of
  // anything to disagree with.
  ok(distributionViolations([]).length > 0);
});
