'use client';
// Full-page login — dark chrome (sidebar palette), centered card with the
// E. serif-italic logomark, email + password + TOTP, server-action submit.
import { use, useActionState } from 'react';
import { login, type LoginState } from './actions';
import styles from './login.module.css';

const INITIAL: LoginState = {};

export default function LoginPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const sp = use(searchParams);
  const next = typeof sp.next === 'string' ? sp.next : '';
  const [state, formAction, pending] = useActionState(login, INITIAL);

  return (
    <div className={styles.page}>
      <div className={styles.card}>
        <div className={styles.brand}>
          <div className={styles.logomark}>E.</div>
          <div>
            <div className={styles.wordmark}>EALCH</div>
            <div className={styles.sub}>OPS CONSOLE</div>
          </div>
        </div>

        <form action={formAction} className={styles.form}>
          <input type="hidden" name="next" value={next} />
          <label className={styles.field}>
            <span className={styles.label}>Email</span>
            <input
              className={styles.input}
              type="email"
              name="email"
              autoComplete="username"
              placeholder="you@ealch.app"
              required
              autoFocus
            />
          </label>
          <label className={styles.field}>
            <span className={styles.label}>Password</span>
            <input
              className={styles.input}
              type="password"
              name="password"
              autoComplete="current-password"
              placeholder="••••••••"
              required
            />
          </label>
          <label className={styles.field}>
            <span className={styles.label}>Two-factor code</span>
            <input
              className={styles.input}
              type="text"
              name="totp"
              inputMode="numeric"
              autoComplete="one-time-code"
              pattern="[0-9]{6}"
              maxLength={6}
              placeholder="000000"
            />
          </label>
          <button className={styles.submit} type="submit" disabled={pending}>
            {pending ? 'Signing in…' : 'Sign in'}
          </button>
          {state.error ? (
            <div className={styles.error} role="alert">
              {state.error}
            </div>
          ) : null}
        </form>
      </div>
    </div>
  );
}
