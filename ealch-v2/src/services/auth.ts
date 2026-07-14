// AuthService — Supabase Auth when configured, otherwise a local no-op session
// so the onboarding/sign-in flows work offline.
import { supabase } from './supabase';

export type AuthResult = { ok: boolean; email?: string; error?: string };

export const auth = {
  async signInWithEmail(email: string, password: string): Promise<AuthResult> {
    const sb = supabase();
    if (!sb) return { ok: true, email }; // offline: accept locally
    const { data, error } = await sb.auth.signInWithPassword({ email, password });
    if (error) return { ok: false, error: error.message };
    return { ok: true, email: data.user?.email ?? email };
  },

  async signUpWithEmail(email: string, password: string): Promise<AuthResult> {
    const sb = supabase();
    if (!sb) return { ok: true, email };
    const { data, error } = await sb.auth.signUp({ email, password });
    if (error) return { ok: false, error: error.message };
    return { ok: true, email: data.user?.email ?? email };
  },

  async signInWithProvider(provider: 'apple' | 'google'): Promise<AuthResult> {
    const sb = supabase();
    if (!sb) return { ok: true }; // offline: accept locally
    const { error } = await sb.auth.signInWithOAuth({ provider });
    if (error) return { ok: false, error: error.message };
    return { ok: true };
  },

  async resetPassword(email: string): Promise<AuthResult> {
    const sb = supabase();
    // No backend → nothing can send the email; callers hide the link in this mode.
    if (!sb) return { ok: false, error: 'offline' };
    const { error } = await sb.auth.resetPasswordForEmail(email);
    if (error) return { ok: false, error: error.message };
    return { ok: true, email };
  },

  /** Sync the display name to Supabase user_metadata; silent no-op offline. */
  async updateDisplayName(name: string): Promise<void> {
    const sb = supabase();
    if (!sb) return;
    try {
      await sb.auth.updateUser({ data: { display_name: name } });
    } catch {
      // Metadata sync is best-effort; the local store remains the source of truth.
    }
  },

  async signOut(): Promise<void> {
    const sb = supabase();
    if (sb) await sb.auth.signOut();
  },
};
