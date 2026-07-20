// The boot-time and ongoing session check `app/_layout.tsx` never had (Phase
// 9). Before this, `useStore.signedIn` was a locally-set flag nobody ever
// re-verified against Supabase — a stale "signed in" blob would render as
// signed in even after the real session expired, was revoked, or (until the
// signOut fix in useStore.ts) even after the user explicitly signed out.
//
// supabase-js v2 fires onAuthStateChange once immediately with the CURRENT
// session at subscribe time (event 'INITIAL_SESSION'), then again on every
// sign-in/out/refresh — so this one subscription covers both boot-time
// restoration and everything after it. No separate getSession() call needed.
import { useEffect } from 'react';
import { supabase } from './supabase';
import { useStore } from '@/store/useStore';
import { ensureProfile, syncAttempts } from './sync';

/** Call once, from app/_layout.tsx. Not a hook that returns anything — it only
 *  wires the subscription and lets useStore.userId (and everything derived
 *  from it) be the reactive surface the rest of the app reads. */
export function useAuthSession(): void {
  useEffect(() => {
    const sb = supabase();
    if (!sb) return; // unconfigured — userId stays null, exactly as initialData() sets it

    const { data: sub } = sb.auth.onAuthStateChange((_event, session) => {
      const uid = session?.user.id ?? null;
      useStore.getState().setSession(uid, session?.user.email ?? null);
      if (uid) {
        void ensureProfile();
        void syncAttempts();
      }
    });
    return () => sub.subscription.unsubscribe();
  }, []);
}
