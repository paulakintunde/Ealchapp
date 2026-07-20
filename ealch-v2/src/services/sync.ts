// The app's first client→server write path (Phase 9, EALCH-MASTER-BUILD.md
// "Identity & sync substrate"). Mirrors content.ts's discipline: local-first,
// fire-and-forget, never throws, silent on any failure — a sync that can't
// reach the network must never block or crash a drill screen. See
// progress.logic.ts's ServerAttemptRow/attemptToServerRow/serverRowToAttempt/
// mergeAttempts for the pure mapping and merge-order logic this wraps.
import { useEffect } from 'react';
import { AppState } from 'react-native';
import { supabase } from './supabase';
import { hasSupabase } from './env';
import { useStore } from '@/store/useStore';
import { useProgress } from '@/store/useProgress';
import {
  attemptToServerRow,
  mergeAttempts,
  type ServerAttemptRow,
} from '@/store/progress.logic';

/** One row as PostgREST returns it from `public.attempts` (snake_case, `at` a
 *  timestamptz string) — the shape attemptToServerRow's camelCase output is
 *  mapped to on the way out, and back from on the way in. */
type AttemptsTableRow = {
  id: string;
  item_id: string;
  modality: string;
  verdict: string;
  correct: boolean;
  activity: string;
  day: string;
  at: string;
};

function toTableRow(a: ReturnType<typeof attemptToServerRow>) {
  return {
    id: a.id,
    item_id: a.itemId,
    modality: a.modality,
    verdict: a.verdict,
    correct: a.correct,
    activity: a.activity,
    day: a.day,
  };
}

function fromTableRow(row: AttemptsTableRow): ServerAttemptRow {
  return {
    id: row.id,
    itemId: row.item_id,
    // Cast, not validated: RLS scopes every row to the caller's own uid, and
    // the CHECK constraints on `modality`/`verdict` are the same source-of-
    // truth unions this file would otherwise duplicate. A row that violated
    // them could never have been inserted in the first place.
    modality: row.modality as ServerAttemptRow['modality'],
    verdict: row.verdict as ServerAttemptRow['verdict'],
    correct: row.correct,
    activity: row.activity as ServerAttemptRow['activity'],
    day: row.day,
    atMs: new Date(row.at).getTime(),
  };
}

/** Only one sync in flight at a time — the auth-state listener and the
 *  foreground listener can both fire within the same tick on cold boot. */
let inFlight = false;

/** Fetch every server-side attempt for the signed-in user, merge it into the
 *  local log (see mergeAttempts for why this preserves chronological order),
 *  then push whatever local attempts the fetch just proved the server does
 *  not have yet. This single round trip both restores a fresh install's
 *  history (the pull) and is the ongoing write path (the push) — there is no
 *  separate "first sync" mode. Never throws.
 */
export async function syncAttempts(): Promise<void> {
  if (inFlight) return;
  const sb = supabase();
  const uid = useStore.getState().userId;
  if (!hasSupabase() || !sb || !uid) return;

  inFlight = true;
  try {
    const { data, error } = await sb
      .from('attempts')
      .select('id,item_id,modality,verdict,correct,activity,day,at')
      .eq('user_id', uid);
    if (error) return; // offline, RLS misconfigured, table not migrated yet — try again next foreground

    const rows = (data ?? []) as AttemptsTableRow[];
    const pulled = rows.map(fromTableRow);
    const knownServerIds = new Set(pulled.map((r) => r.id));

    const local = useProgress.getState().attempts;
    const localIds = new Set(local.map((a) => a.id));
    // Only replace the array (and so only invalidate the SRS fold's own
    // memoization, keyed on this exact reference — see foldCards) when the
    // pull actually contributes something this device didn't already have.
    // A pull that returns nothing new must be a true no-op, every time.
    if (pulled.some((r) => !localIds.has(r.id))) {
      useProgress.getState().replaceAttempts(mergeAttempts(local, pulled));
    }

    const toPush = local.filter((a) => !knownServerIds.has(a.id));
    if (toPush.length === 0) return;

    const payload = toPush.map((a) => ({ ...toTableRow(attemptToServerRow(a)), user_id: uid }));
    // ignoreDuplicates, deliberately: `attempts` has no UPDATE policy (see the
    // schema migration) — an ordinary upsert's ON CONFLICT DO UPDATE would be
    // rejected by RLS. This is INSERT ... ON CONFLICT (id) DO NOTHING, the
    // idempotent retry the client-generated id exists for.
    await sb.from('attempts').upsert(payload, { onConflict: 'id', ignoreDuplicates: true });
  } catch {
    // Network failure, malformed response — local state is untouched or was
    // already safely replaced above; next foreground tries again.
  } finally {
    inFlight = false;
  }
}

/** Call once, from app/_layout.tsx (alongside useAuthSession). Re-runs
 *  syncAttempts every time the app returns to the foreground while signed
 *  in — the same AppState 'active' trigger useSessionLog (useProgress.ts)
 *  already uses for its own foreground timer, so a cross-device attempt made
 *  while this device was backgrounded shows up without requiring a relaunch. */
export function useForegroundSync(): void {
  useEffect(() => {
    const sub = AppState.addEventListener('change', (next) => {
      if (next === 'active' && useStore.getState().userId) void syncAttempts();
    });
    return () => sub.remove();
  }, []);
}

/** Establish a `profiles` row for a newly-authenticated user. Nothing wrote to
 *  `profiles` before Phase 9; this only ensures the row exists so a later
 *  phase (placement writing `level`, Phase 10 writing an entitlement mirror)
 *  has something to update. ignoreDuplicates so a repeat call (every sign-in)
 *  never clobbers fields a later write already set. */
export async function ensureProfile(): Promise<void> {
  const sb = supabase();
  const uid = useStore.getState().userId;
  if (!hasSupabase() || !sb || !uid) return;
  try {
    await sb.from('profiles').upsert({ id: uid }, { onConflict: 'id', ignoreDuplicates: true });
  } catch {
    // Best-effort — nothing reads this row yet (Phase 9), so nothing user-
    // facing depends on it succeeding immediately.
  }
}
