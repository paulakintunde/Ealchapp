import { useState } from 'react';
import { TextInput, View } from 'react-native';
import { useRouter } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { TX } from '@/components/Type';
import { Press, Button } from '@/components/ui';
import { RadialGlow } from '@/components/RadialGlow';
import { PasswordField } from '@/components/AuthFields';
import { useTheme } from '@/theme/useTheme';
import { useT } from '@/i18n/useT';
import { useStore } from '@/store/useStore';
import { auth, hasSupabase, sound } from '@/services';
import { AUTH_UNAVAILABLE } from '@/services/auth';
import { FLAGS } from '@/services/flags';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function SignIn() {
  const t = useTheme();
  const T = useT();
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const store = useStore();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [reset, setReset] = useState<'idle' | 'pending' | 'sent'>('idle');

  const enterApp = (resEmail: string | undefined, accountType: 'guest' | 'email') => {
    store.signIn(resEmail, store.userName);
    store.setField('accountType', accountType);
    store.completeOnboarding(store.level);
    router.replace('/splash');
  };

  const doSignIn = async () => {
    if (pending) return;
    sound.play('flip');
    setError(null);

    if (!email.trim() || !password) {
      sound.play('error');
      setError(T.errCreds);
      return;
    }
    setPending(true);
    const res = await auth.signInWithEmail(email.trim(), password);
    setPending(false);
    if (!res.ok) {
      sound.play('error');
      setError(res.error === AUTH_UNAVAILABLE ? T.errAuthUnavailable : (res.error ?? T.errSignIn));
      return;
    }
    enterApp(res.email, 'email');
  };

  const doReset = async () => {
    if (reset !== 'idle') return;
    const em = email.trim();
    if (!EMAIL_RE.test(em)) {
      sound.play('error');
      setError(T.errEmail);
      return;
    }
    setError(null);
    setReset('pending');
    const res = await auth.resetPassword(em);
    if (!res.ok) {
      sound.play('error');
      setReset('idle');
      setError(res.error === AUTH_UNAVAILABLE ? T.errAuthUnavailable : (res.error ?? T.errReset));
      return;
    }
    sound.play('success');
    setReset('sent');
  };

  const oauth = async (provider: 'apple' | 'google') => {
    sound.play('flip');
    await auth.signInWithProvider(provider);
    enterApp(undefined, 'email');
  };

  const field = (props: React.ComponentProps<typeof TextInput>) => (
    <TextInput
      {...props}
      placeholderTextColor={t.txSubtle}
      style={{
        minHeight: 52,
        paddingVertical: 6,
        borderRadius: 16,
        borderWidth: 1,
        borderColor: t.line(12),
        backgroundColor: t.input,
        color: t.tx,
        paddingHorizontal: 18,
        fontSize: 14.5,
        fontFamily: 'InstrumentSans',
        marginBottom: 10,
      }}
    />
  );

  const oauthStyle = {
    minHeight: 52,
    paddingVertical: 6,
    backgroundColor: t.card,
    shadowColor: '#000',
    shadowOpacity: t.isDark ? 0.32 : 0.1,
    shadowRadius: 14,
    shadowOffset: { width: 0, height: 6 },
    elevation: 4,
  } as const;

  return (
    <View style={{ flex: 1, backgroundColor: t.bg, paddingHorizontal: 28, paddingTop: insets.top + 70, paddingBottom: insets.bottom + 30 }}>
      <RadialGlow color={t.acc} opacity={0.1} height={300} />
      <TX font="semi" role="meta" ls={2.8} color={t.txSubtle} style={{ marginBottom: 12 }}>
        {T.welcomeBack}
      </TX>
      <TX font="serifI" role="display" size={42} style={{ marginBottom: 30 }}>
        {T.helloAgain}
      </TX>
      {field({ placeholder: T.emailPh, value: email, onChangeText: setEmail, keyboardType: 'email-address', autoCapitalize: 'none' })}
      <PasswordField placeholder={T.passwordPh} value={password} onChangeText={setPassword} onSubmitEditing={doSignIn} />
      {error ? (
        <TX role="label" color={t.danger} style={{ marginBottom: 10 }}>
          {error}
        </TX>
      ) : null}
      {FLAGS.forgotPassword && hasSupabase() ? (
        <Press onPress={doReset} cue={null} style={{ alignSelf: 'flex-end', marginBottom: 18, opacity: reset === 'pending' ? 0.5 : 1 }}>
          <TX role="label" color={reset === 'sent' ? t.accTx : t.txSubtle}>
            {reset === 'sent' ? T.resetSent : T.forgotPw}
          </TX>
        </Press>
      ) : (
        <View style={{ height: 8 }} />
      )}
      <Button label={T.signInBtn} onPress={doSignIn} disabled={pending} style={{ minHeight: 54, paddingVertical: 6 }} />
      {FLAGS.oauth ? (
        <>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 14, marginVertical: 22 }}>
            <View style={{ flex: 1, height: 1, backgroundColor: t.line(10) }} />
            <TX role="meta" ls={3} color={t.txSubtle}>
              {T.orT}
            </TX>
            <View style={{ flex: 1, height: 1, backgroundColor: t.line(10) }} />
          </View>
          <Button label={T.withApple} icon="apple" variant="outline" onPress={() => oauth('apple')} style={[oauthStyle, { marginBottom: 10 }]} />
          <Button label={T.withGoogle} icon="google" variant="outline" onPress={() => oauth('google')} style={oauthStyle} />
        </>
      ) : null}
      <Press onPress={() => router.replace('/onboarding')} style={{ alignItems: 'center', marginTop: 'auto', paddingTop: 20 }}>
        <TX role="bodySm" color={t.txMuted}>
          {T.newHere} <TX font="semi" role="bodySm" color={t.accTx}>{T.createAccount}</TX>
        </TX>
      </Press>
    </View>
  );
}
