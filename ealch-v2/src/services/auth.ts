// AuthService — Supabase Auth. There is no local fallback: an auth call that
// cannot reach the backend fails honestly rather than minting a fake session
// (a "signed in" state that never existed server-side is worse than an error).
// Callers surface AUTH_UNAVAILABLE as T.errAuthUnavailable.
//
// Every call is wrapped in `attempt`: supabase-js *throws* on network failure and
// on some malformed-token paths instead of returning { error }. Unwrapped, a
// thrown error escapes the caller's await and leaves its screen stuck in a
// pending state with no message — so a rejection is converted into a normal
// failed AuthResult here, once, for all of them.
import type { AuthError } from '@supabase/supabase-js';
import { supabase } from './supabase';
import { RESET_REDIRECT } from '@/config/legal';

export type AuthResult = { ok: boolean; email?: string; error?: string };

/** Sentinel: Supabase is not configured, or the call never reached it. */
export const AUTH_UNAVAILABLE = 'auth-unavailable';

const unavailable: AuthResult = { ok: false, error: AUTH_UNAVAILABLE };

/** Run a Supabase call, turning both `{ error }` and thrown errors into AuthResult. */
async function attempt(
  run: () => Promise<{ error: AuthError | null; email?: string }>
): Promise<AuthResult> {
  try {
    const { error, email } = await run();
    if (error) return { ok: false, error: error.message };
    return { ok: true, email };
  } catch {
    // Network failure, malformed token, aborted fetch — the call never completed.
    return unavailable;
  }
}

export const auth = {
  async signInWithEmail(email: string, password: string): Promise<AuthResult> {
    const sb = supabase();
    if (!sb) return unavailable;
    return attempt(async () => {
      const { data, error } = await sb.auth.signInWithPassword({ email, password });
      return { error, email: data?.user?.email ?? email };
    });
  },

  async signUpWithEmail(email: string, password: string): Promise<AuthResult> {
    const sb = supabase();
    if (!sb) return unavailable;
    return attempt(async () => {
      const { data, error } = await sb.auth.signUp({ email, password });
      return { error, email: data?.user?.email ?? email };
    });
  },

  async signInWithProvider(provider: 'apple' | 'google'): Promise<AuthResult> {
    const sb = supabase();
    if (!sb) return unavailable;
    return attempt(async () => {
      const { error } = await sb.auth.signInWithOAuth({ provider });
      return { error };
    });
  },

  async resetPassword(email: string): Promise<AuthResult> {
    const sb = supabase();
    if (!sb) return unavailable;
    return attempt(async () => {
      // redirectTo must also be listed in Supabase → Auth → URL Configuration.
      const { error } = await sb.auth.resetPasswordForEmail(email, {
        redirectTo: RESET_REDIRECT,
      });
      return { error, email };
    });
  },

  /**
   * Complete a recovery: exchange the tokens from the emailed link for a session,
   * then set the new password. Supabase puts the tokens in the URL fragment
   * (#access_token=…&refresh_token=…&type=recovery). An expired or tampered link
   * fails here rather than silently doing nothing.
   */
  async completePasswordReset(
    accessToken: string,
    refreshToken: string,
    newPassword: string
  ): Promise<AuthResult> {
    const sb = supabase();
    if (!sb) return unavailable;
    return attempt(async () => {
      const { error: sessionErr } = await sb.auth.setSession({
        access_token: accessToken,
        refresh_token: refreshToken,
      });
      if (sessionErr) return { error: sessionErr };
      const { data, error } = await sb.auth.updateUser({ password: newPassword });
      return { error, email: data?.user?.email };
    });
  },

  /** Sync the display name to Supabase user_metadata; best-effort. */
  async updateDisplayName(name: string): Promise<void> {
    const sb = supabase();
    if (!sb) return;
    try {
      await sb.auth.updateUser({ data: { display_name: name } });
    } catch {
      // The local store remains the source of truth.
    }
  },

  async signOut(): Promise<void> {
    const sb = supabase();
    if (!sb) return;
    try {
      await sb.auth.signOut();
    } catch {
      // Local sign-out still proceeds in the store.
    }
  },
};
