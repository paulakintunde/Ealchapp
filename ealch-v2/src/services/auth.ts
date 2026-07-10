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

  async signOut(): Promise<void> {
    const sb = supabase();
    if (sb) await sb.auth.signOut();
  },
};
