// A clock the device cannot wind back.
//
// Entitlement expiry is checked locally, against a timestamp, which is what
// lets a lapse be enforced with no network at all. The timestamp used to be
// `Date.now()`, and that is a number the user owns: Settings, off automatic,
// back one month, and an expired subscription is in force again — offline,
// indefinitely, with nothing to contradict it.
//
// This module keeps the floor that closes it: the latest moment we have
// evidence of, persisted, and only ever raised. `guardedNow()` is what every
// entitlement read should ask for instead of `Date.now()`.
//
// ── Only the server raises it ───────────────────────────────────────────────
//
// See the long note in store/entitlement.logic.ts. In short: remembering the
// highest device time ever seen would let one wrong clock — a phone that reads
// 2030 for an afternoon — permanently expire every subscription that device
// will ever hold, with no way back. The floor moves on server evidence only,
// so a forward clock costs the user access early and repairs itself, and a
// backward clock achieves nothing.
//
// ── Held in memory as well as on disk ───────────────────────────────────────
//
// `useFeature` is a zustand selector and cannot await. So the floor is loaded
// once at boot into a module-level number and read synchronously from there;
// AsyncStorage is only the durable copy. Before that load completes the floor
// is 0, which degrades to plain `Date.now()` — the behaviour we had before,
// never something stricter, so a slow read can never lock anyone out.
import AsyncStorage from '@react-native-async-storage/async-storage';
import { advancedFloor, effectiveNow } from '@/store/entitlement.logic';

const KEY = 'ealch-time-floor';

/** The floor, in memory. 0 until `loadTimeFloor` resolves, which reads as
 *  "no evidence yet" and leaves `guardedNow` equal to the device clock. */
let floorMs = 0;

/** Load the persisted floor. Call once at boot, before the first gate is
 *  evaluated. Never throws: an unreadable floor is no floor, which is exactly
 *  the pre-existing behaviour rather than a lockout. */
export async function loadTimeFloor(): Promise<void> {
  try {
    const raw = await AsyncStorage.getItem(KEY);
    const n = raw === null ? NaN : Number(raw);
    floorMs = advancedFloor(0, n);
  } catch {
    floorMs = 0;
  }
}

/** The moment to evaluate any time-sensitive entitlement at. */
export function guardedNow(): number {
  return effectiveNow(Date.now(), floorMs);
}

/** What the floor currently is. For diagnostics and tests, not for gates. */
export function timeFloorMs(): number {
  return floorMs;
}

/**
 * Record a timestamp observed FROM A SERVER, raising the floor if it is newer.
 *
 * Fire-and-forget by design: this sits on network paths that already did their
 * real work, and a failed write costs a little precision on the next launch,
 * never correctness. The in-memory value is raised first so the current session
 * is protected even if the persist fails.
 */
export function noteServerTime(serverMs: number): void {
  const next = advancedFloor(floorMs, serverMs);
  if (next === floorMs) return;
  floorMs = next;
  void AsyncStorage.setItem(KEY, String(next)).catch(() => {});
}

/**
 * The same, from an HTTP `Date` header.
 *
 * The manifest fetch in services/content.ts is the one caller today: a raw
 * `fetch` the app already makes on every online launch, so the floor advances
 * with no clock endpoint and no extra round trip. The Supabase client calls
 * (config, grade-exam) would serve as well but do not expose response headers.
 *
 * ONE SOURCE IS ENOUGH BECAUSE STALE IS SAFE. A floor that stops advancing
 * only ever under-enforces: `guardedNow` falls back toward the device clock,
 * which is the behaviour that existed before this file. Nothing about a missed
 * update can lock a paying user out, which is the direction that matters.
 */
export function noteServerDateHeader(header: string | null | undefined): void {
  if (!header) return;
  noteServerTime(Date.parse(header));
}
