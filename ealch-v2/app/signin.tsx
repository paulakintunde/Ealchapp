import { useState } from 'react';
import { TextInput, View } from 'react-native';
import { useRouter } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { TX } from '@/components/Type';
import { Press, Button } from '@/components/ui';
import { useTheme } from '@/theme/useTheme';
import { useStore } from '@/store/useStore';
import { auth, sound } from '@/services';

export default function SignIn() {
  const t = useTheme();
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const store = useStore();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const doSignIn = async () => {
    sound.play('flip');
    const res = await auth.signInWithEmail(email || 'maya@ealch.app', password || 'demo');
    store.signIn(res.email, store.userName);
    store.completeOnboarding(store.level);
    router.replace('/splash');
  };

  const oauth = async (provider: 'apple' | 'google') => {
    sound.play('flip');
    await auth.signInWithProvider(provider);
    store.signIn(undefined, store.userName);
    store.completeOnboarding(store.level);
    router.replace('/splash');
  };

  const field = (props: React.ComponentProps<typeof TextInput>) => (
    <TextInput
      {...props}
      placeholderTextColor={t.txA(30)}
      style={{
        height: 52,
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

  return (
    <View style={{ flex: 1, backgroundColor: t.bg, paddingHorizontal: 28, paddingTop: insets.top + 70, paddingBottom: insets.bottom + 30 }}>
      <View style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 280, backgroundColor: t.accA(8) }} />
      <TX font="semi" size={10} ls={2.8} color={t.txA(40)} style={{ marginBottom: 12 }}>
        BON RETOUR
      </TX>
      <TX font="serifI" size={42} lh={44} style={{ marginBottom: 30 }}>
        Re-bonjour.
      </TX>
      {field({ placeholder: 'Email', value: email, onChangeText: setEmail, keyboardType: 'email-address', autoCapitalize: 'none' })}
      {field({ placeholder: 'Mot de passe', value: password, onChangeText: setPassword, secureTextEntry: true })}
      <TX size={12} color={t.txA(45)} style={{ textAlign: 'right', marginBottom: 18 }}>
        Mot de passe oublié ?
      </TX>
      <Button label="Se connecter" onPress={doSignIn} style={{ height: 54 }} />
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 14, marginVertical: 22 }}>
        <View style={{ flex: 1, height: 1, backgroundColor: t.line(10) }} />
        <TX size={11} ls={3} color={t.txA(40)}>
          OU
        </TX>
        <View style={{ flex: 1, height: 1, backgroundColor: t.line(10) }} />
      </View>
      <Button label="Continuer avec Apple" variant="outline" onPress={() => oauth('apple')} style={{ height: 52, marginBottom: 10 }} />
      <Button label="Continuer avec Google" variant="outline" onPress={() => oauth('google')} style={{ height: 52 }} />
      <Press onPress={() => router.replace('/onboarding')} style={{ alignItems: 'center', marginTop: 'auto', paddingTop: 20 }}>
        <TX size={13} color={t.txA(50)}>
          Nouveau ici ? <TX font="semi" size={13} color={t.acc}>Créer un compte</TX>
        </TX>
      </Press>
    </View>
  );
}
