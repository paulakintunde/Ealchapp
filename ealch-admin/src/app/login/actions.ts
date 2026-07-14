'use server';
// Login server action — verifies email + password + TOTP via the credentials
// provider, then redirects to ?next (or /admin/overview).
import { redirect } from 'next/navigation';
import { AuthError } from 'next-auth';
import { signIn } from '@/auth';

export interface LoginState {
  error?: string;
}

function safeNext(raw: string): string {
  // Only allow internal absolute paths to avoid open redirects.
  if (raw.startsWith('/') && !raw.startsWith('//')) return raw;
  return '/admin/overview';
}

export async function login(
  _prev: LoginState,
  formData: FormData,
): Promise<LoginState> {
  const email = String(formData.get('email') ?? '');
  const password = String(formData.get('password') ?? '');
  const totp = String(formData.get('totp') ?? '');
  const next = safeNext(String(formData.get('next') ?? ''));

  try {
    await signIn('credentials', { email, password, totp, redirect: false });
  } catch (e) {
    if (e instanceof AuthError) return { error: 'Invalid credentials or code' };
    throw e;
  }
  redirect(next);
}
