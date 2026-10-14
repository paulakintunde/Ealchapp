// Password-recovery landing screen. Supabase emails a link to RESET_REDIRECT
// (ealch://reset) carrying the recovery tokens; this screen exchanges them for
// a session and sets the new password.
//
// Supabase returns the tokens in the URL *fragment* (#access_token=…), which
// expo-router does not parse into search params — so we read the raw URL.
import { useEffect, useRef, useState } from 'react';
import { Platform, View } from 'react-native';
import * as Linking from 'expo-linking';
import { useRouter } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { TX } from '@/components/Type';
import { Press, Button } from '@/components/ui';
import { RadialGlow } from '@/components/RadialGlow';
import { AuthField, PasswordField } from '@/components/AuthFields';
import { useTheme } from '@/theme/useTheme';
import { useT } from '@/i18n/useT';
import { useStore } from '@/store/useStore';
import { auth, sound } from '@/services';
import { AUTH_UNAVAILABLE } from '@/services/auth';

type Tokens = { access: string; refresh: string };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Pull recovery tokens out of the fragment (or query, if a proxy rewrote it). */
function parseTokens(url: string | null): Tokens | null {
  if (!url) return null;
  const hash = url.indexOf('#');
  const query = url.indexOf('?');
  const cut = hash >= 0 ? hash : query;
  if (cut < 0) return null;
  const params = new URLSearchParams(url.slice(cut + 1));
  const access = params.get('access_token');
  const refresh = params.get('refresh_token');
  return access && refresh ? { access, refresh } : null;
}

/**
 * expo-linking's useURL()/getInitialURL() do not expose the fragment on web, and
 * Supabase returns the recovery tokens in exactly that fragment — so on web we
 * read window.location directly.
 */
function currentWebUrl(): string | null {
  if (Platform.OS !== 'web' || typeof window === 'undefined') return null;
  return window.location.href;
}

export default function ResetPassword() {
  const t = useTheme();
  const T = useT();
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const store = useStore();

  const initialUrl = Linking.useURL();
  const [tokens, setTokens] = useState<Tokens | null>(null);
  const [checked, setChecked] = useState(false);
  const [password, setPassword] = useState('');
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  // Fallback path for when the link itself never arrives intact: the same
  // recovery email also carries a 6-digit code (once the dashboard template
  // is updated to show it), exchanged via verifyOtp instead of a URL.
  const [useCode, setUseCode] = useState(false);
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  // __DEV__-only: the last raw URL this screen actually saw, so a dead-end
  // "invalid link" report is debuggable instead of a silent guess. Never
  // shown in a release build (may contain tokens).
  const [lastSeenUrl, setLastSeenUrl] = useState<string | null>(null);
  const mounted = useRef(true);
  useEffect(() => () => { mounted.current = false; }, []);

  // The link may arrive as the cold-start URL or while the app is already
  // open. On a real device the native bridge does not always have the
  // cold-start URL ready by the time this effect first runs (RN Linking
  // issue, worse right after a fresh install/relaunch) — one synchronous
  // check followed by one getInitialURL() call was giving up and hiding the
  // password field on links that were actually fine, just not delivered
  // yet. Poll a few times before concluding the link itself is dead.
  useEffect(() => {
    let cancelled = false;
    let attempt = 0;
    const MAX_ATTEMPTS = 6; // ~3s total — generous for a cold-started bridge
    const tryOnce = async () => {
      if (cancelled) return;
      const direct = parseTokens(initialUrl) ?? parseTokens(currentWebUrl());
      const fromBridge = direct ?? parseTokens(await Linking.getInitialURL().catch(() => null));
      if (cancelled) return;
      if (fromBridge) {
        setTokens(fromBridge);
        setChecked(true);
        return;
      }
      attempt += 1;
      if (__DEV__) setLastSeenUrl(initialUrl ?? '(none yet)');
      if (attempt >= MAX_ATTEMPTS) {
        setChecked(true);
        return;
      }
      setTimeout(() => void tryOnce(), 500);
    };
    void tryOnce();
    return () => { cancelled = true; };
  }, [initialUrl]);

  /**
   * A dead recovery link fails deep inside Supabase, which words it for
   * developers ("JWT not in base64url format", "token is expired"). Users get
   * the plain-language version instead; anything genuinely actionable (e.g. a
   * password-policy complaint) is passed through as-is.
   */
  const resetErrorText = (err: string | undefined): string => {
    if (!err) return T.errResetFailed;
    if (err === AUTH_UNAVAILABLE) return T.errAuthUnavailable;
    if (/jwt|token|expired|invalid|session|claim/i.test(err)) return T.resetInvalid;
    return err;
  };

  /** Shared by both the link and code paths once auth reports success. */
  const finishReset = (resEmail: string | undefined) => {
    sound.play('success');
    store.signIn(resEmail, store.userName);
    store.setField('accountType', 'email');
    store.completeOnboarding(store.level);
    router.replace('/home');
  };

  const submit = async () => {
    if (pending || !tokens) return;
    if (password.length < 8) {
      sound.play('error');
      setError(T.errPw);
      return;
    }
    setError(null);
    setPending(true);
    const res = await auth.completePasswordReset(tokens.access, tokens.refresh, password);
    if (!mounted.current) return;
    setPending(false);
    if (!res.ok) {
      sound.play('error');
      setError(resetErrorText(res.error));
      return;
    }
    finishReset(res.email);
  };

  const submitWithCode = async () => {
    if (pending) return;
    if (!EMAIL_RE.test(email.trim())) {
      sound.play('error');
      setError(T.errEmail);
      return;
    }
    if (code.trim().length === 0) {
      sound.play('error');
      setError(T.errCode);
      return;
    }
    if (password.length < 8) {
      sound.play('error');
      setError(T.errPw);
      return;
    }
    setError(null);
    setPending(true);
    const res = await auth.completePasswordResetWithCode(email.trim(), code.trim(), password);
    if (!mounted.current) return;
    setPending(false);
    if (!res.ok) {
      sound.play('error');
      setError(resetErrorText(res.error));
      return;
    }
    finishReset(res.email);
  };

  const invalid = checked && !tokens && !useCode;

  return (
    <View style={{ flex: 1, backgroundColor: t.bg, paddingHorizontal: 28, paddingTop: insets.top + 70, paddingBottom: insets.bottom + 30 }}>
      <RadialGlow color={t.acc} opacity={0.1} height={300} />
      <TX font="semi" role="meta" ls={2.8} color={t.txSubtle} style={{ marginBottom: 12 }}>
        {T.resetTag}
      </TX>
      <TX font="serifI" role="display" size={42} style={{ marginBottom: 14 }}>
        {T.resetTitle}
      </TX>

      {invalid ? (
        <>
          <TX role="bodySm" color={t.txMuted} style={{ marginBottom: 26 }}>
            {T.resetInvalid}
          </TX>
          {__DEV__ ? (
            <TX role="label" color={t.txSubtle} style={{ marginBottom: 20 }}>
              dev: last URL seen — {lastSeenUrl ?? '(none)'}
            </TX>
          ) : null}
          <Button label={T.backToSignIn} onPress={() => router.replace('/signin')} style={{ minHeight: 54, paddingVertical: 6 }} />
          <Press accessibilityRole="button" onPress={() => { setError(null); setUseCode(true); }} style={{ alignItems: 'center', marginTop: 18 }}>
            <TX role="bodySm" color={t.txMuted} style={{ textDecorationLine: 'underline' }}>
              {T.resetUseCode}
            </TX>
          </Press>
        </>
      ) : useCode ? (
        <>
          <TX role="bodySm" color={t.txMuted} style={{ marginBottom: 26 }}>
            {T.resetCodeSub}
          </TX>
          <AuthField
            placeholder={T.emailPh}
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="email-address"
          />
          <AuthField
            placeholder={T.codePh}
            value={code}
            onChangeText={setCode}
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="number-pad"
          />
          <PasswordField
            placeholder={T.newPwPh}
            value={password}
            onChangeText={setPassword}
            onSubmitEditing={() => void submitWithCode()}
          />
          {error ? (
            <TX role="label" color={t.danger} style={{ marginTop: 2, marginBottom: 10 }}>
              {error}
            </TX>
          ) : null}
          <Button
            label={T.setNewPw}
            onPress={submitWithCode}
            disabled={pending}
            style={{ minHeight: 54, paddingVertical: 6, marginTop: 6 }}
          />
          <Press accessibilityRole="button" onPress={() => router.replace('/signin')} style={{ alignItems: 'center', marginTop: 'auto', paddingTop: 20 }}>
            <TX role="bodySm" color={t.txMuted}>
              {T.backToSignIn}
            </TX>
          </Press>
        </>
      ) : (
        <>
          <TX role="bodySm" color={t.txMuted} style={{ marginBottom: 26 }}>
            {T.resetSub}
          </TX>
          <PasswordField
            placeholder={T.newPwPh}
            value={password}
            onChangeText={setPassword}
            onSubmitEditing={() => void submit()}
          />
          {error ? (
            <TX role="label" color={t.danger} style={{ marginTop: 2, marginBottom: 10 }}>
              {error}
            </TX>
          ) : null}
          <Button
            label={T.setNewPw}
            onPress={submit}
            disabled={pending || !checked || !tokens}
            style={{ minHeight: 54, paddingVertical: 6, marginTop: 6 }}
          />
          <Press accessibilityRole="button" onPress={() => router.replace('/signin')} style={{ alignItems: 'center', marginTop: 'auto', paddingTop: 20 }}>
            <TX role="bodySm" color={t.txMuted}>
              {T.backToSignIn}
            </TX>
          </Press>
        </>
      )}
    </View>
  );
}
