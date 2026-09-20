// The grace window's boundary math, pinned. A one-second error here either
// grades an expired attempt or refuses one that finished on time.
import { strictEqual } from 'node:assert';
import { test } from 'node:test';
import {
  ATTEMPT_GRACE_S,
  MAX_TIMING_S,
  attemptExpiresAt,
  attemptStillGradable,
  clampTimingS,
} from './examAttempt.logic.ts';

const T = Date.UTC(2026, 8, 20, 9, 0, 0);

test('a section clock is coerced into a sane, bounded range', () => {
  strictEqual(clampTimingS(3600), 3600);
  strictEqual(clampTimingS(0), 0);
  strictEqual(clampTimingS(-1), 0);
  strictEqual(clampTimingS(NaN), 0);
  strictEqual(clampTimingS(Infinity), MAX_TIMING_S);
  strictEqual(clampTimingS(99999), MAX_TIMING_S);
  strictEqual(clampTimingS(120.9), 120, 'floored, not rounded');
});

test('expiry is the section clock plus the fixed sixty-minute buffer', () => {
  strictEqual(attemptExpiresAt(T, 3600), T + 3600_000 + 3_600_000);
  strictEqual(ATTEMPT_GRACE_S, 3600);
});

test('a section that ran its full clock is still gradable 59 minutes later, and not 61', () => {
  const expiresAt = attemptExpiresAt(T, 3600);
  strictEqual(attemptStillGradable(expiresAt, T + 3600_000 + 3_540_000), true, 'duration + 59min');
  strictEqual(attemptStillGradable(expiresAt, T + 3600_000 + 3_660_000), false, 'duration + 61min');
});

test('expiry is exclusive, matching expires_at > now() in SQL', () => {
  const expiresAt = attemptExpiresAt(T, 3600);
  strictEqual(attemptStillGradable(expiresAt, expiresAt), false);
});
