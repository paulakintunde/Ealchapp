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
import { PasswordField } from '@/components/AuthFields';
import { useTheme } from '@/theme/useTheme';
import { useT } from '@/i18n/useT';
import { useStore } from '@/store/useStore';
import { auth, sound } from '@/services';
import { AUTH_UNAVAILABLE } from '@/services/auth';

type Tokens = { access: string; refresh: string };

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
  const mounted = useRef(true);
  useEffect(() => () => { mounted.current = false; }, []);

  // The link may arrive as the cold-start URL or while the app is already open.
  useEffect(() => {
    let cancelled = false;
    const found = parseTokens(initialUrl) ?? parseTokens(currentWebUrl());
    if (found) {
      setTokens(found);
      setChecked(true);
      return;
    }
    Linking.getInitialURL()
      .then((url) => {
        if (cancelled) return;
        setTokens(parseTokens(url));
        setChecked(true);
      })
      .catch(() => !cancelled && setChecked(true));
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
    // The recovery session is now a real session — go straight into the app.
    sound.play('success');
    store.signIn(res.email, store.userName);
    store.setField('accountType', 'email');
    store.completeOnboarding(store.level);
    router.replace('/home');
  };

  const invalid = checked && !tokens;

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
          <Button label={T.backToSignIn} onPress={() => router.replace('/signin')} style={{ minHeight: 54, paddingVertical: 6 }} />
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
          <Press onPress={() => router.replace('/signin')} style={{ alignItems: 'center', marginTop: 'auto', paddingTop: 20 }}>
            <TX role="bodySm" color={t.txMuted}>
              {T.backToSignIn}
            </TX>
          </Press>
        </>
      )}
    </View>
  );
}
