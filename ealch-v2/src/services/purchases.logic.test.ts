import { strictEqual } from 'node:assert';
import { test } from 'node:test';
import { restoreOutcome, type PurchasesStatusLike, type RestoreOutcome } from './purchases.logic.ts';
import type { PurchasesStatus } from './purchases.ts';

// Compile-time parity: if purchases.ts's union ever gains or loses a member,
// one of these two assignments stops type-checking. Same "two copies of one
// vocabulary, kept honest deliberately" spirit as grade-exam's SCORE_BANDS —
// except this one actually has the check.
const _statusToLike: PurchasesStatusLike = null as unknown as PurchasesStatus;
const _likeToStatus: PurchasesStatus = null as unknown as PurchasesStatusLike;
void _statusToLike; void _likeToStatus;

test('a restore that found a purchase says restored, and one that found none says so plainly', () => {
  strictEqual(restoreOutcome({ ok: true, premium: true }, 'ready'), 'restored');
  strictEqual(restoreOutcome({ ok: true, premium: false }, 'ready'), 'none');
});

test('a failed restore on a build that can sell is a failure, not an absence', () => {
  strictEqual(restoreOutcome({ ok: false, premium: false }, 'ready'), 'failed');
});

test('a build that cannot reach the store says unavailable, whatever the reason', () => {
  strictEqual(restoreOutcome({ ok: false, premium: false }, 'unavailable'), 'unavailable');
  strictEqual(restoreOutcome({ ok: false, premium: false }, 'no-key'), 'unavailable');
});

test('a successful restore reports success whatever the status cache says', () => {
  strictEqual(restoreOutcome({ ok: true, premium: true }, 'unavailable'), 'restored');
});

test('every outcome has exactly one caller-facing branch', () => {
  const copy: Record<RestoreOutcome, string> = {
    restored: 'restored', none: 'none', failed: 'failed', unavailable: 'unavailable',
  };
  strictEqual(Object.keys(copy).length, 4);
});
