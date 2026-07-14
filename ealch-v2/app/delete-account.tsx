// Account deletion. Apple 5.1.1(v) and Google Play both require this to be
// reachable in-app for any app that lets users create an account — and since
// onboarding now creates real Supabase users, it applies to us.
//
// Two paths, and the screen is honest about which one you are on:
//   • email account — the `delete-account` Edge Function destroys the server
//     account (rows cascade), then local data is erased.
//   • guest         — nothing exists server-side, so this is a local erase and
//     the copy says exactly that rather than implying a server round-trip.
//
// The destructive action is gated behind typing the confirm word: Apple asks
// for deletion to be findable, not for it to be a single mistaken tap.
import { useEffect, useRef, useState } from 'react';
import { ScrollView, TextInput, View } from 'react-native';
import { useRouter } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { TX } from '@/components/Type';
import { Press, Button, FocusHeader } from '@/components/ui';
import { Icon } from '@/components/Icon';
import { useTheme } from '@/theme/useTheme';
import { useT } from '@/i18n/useT';
import { useStore } from '@/store/useStore';
import { auth, sound } from '@/services';
import { AUTH_UNAVAILABLE, DELETE_NO_SESSION } from '@/services/auth';

export default function DeleteAccount() {
  const t = useTheme();
  const T = useT();
  const router = useRouter();
  const insets = useSafeAreaInsets();

  const accountType = useStore((s) => s.accountType);
  const email = useStore((s) => s.email);
  const eraseLocalData = useStore((s) => s.eraseLocalData);
  const signOut = useStore((s) => s.signOut);

  const [confirm, setConfirm] = useState('');
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const mounted = useRef(true);
  useEffect(() => () => { mounted.current = false; }, []);

  const isGuest = accountType !== 'email';
  const word = T.delConfirmWord;
  const armed = confirm.trim().toUpperCase() === word.toUpperCase();

  const deleteErrorText = (err: string | undefined): string => {
    if (err === AUTH_UNAVAILABLE) return T.errAuthUnavailable;
    if (err === DELETE_NO_SESSION) return T.errDelNoSession;
    return T.errDelete;
  };

  const submit = async () => {
    if (pending || !armed) return;
    setError(null);
    setPending(true);

    // A guest has no server account — go straight to the local erase rather
    // than firing a call that would fail and imply something was deleted.
    if (!isGuest) {
      const res = await auth.deleteAccount();
      if (!mounted.current) return;
      if (!res.ok) {
        // The server account still exists. Wiping the device now would strand
        // it — an account the user believes is gone but that still holds their
        // data is exactly the failure this screen exists to prevent.
        setPending(false);
        sound.play('error');
        setError(deleteErrorText(res.error));
        return;
      }
    }

    await eraseLocalData();
    if (!mounted.current) return;
    signOut();
    router.replace('/onboarding');
  };

  return (
    <View style={{ flex: 1, backgroundColor: t.bg }}>
      <View style={{ paddingTop: insets.top }}>
        <FocusHeader onClose={() => router.back()} title={T.dangerZone.toUpperCase()} />
      </View>

      <ScrollView
        contentContainerStyle={{ paddingHorizontal: 28, paddingBottom: insets.bottom + 40 }}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        <TX font="semi" role="meta" ls={2.8} color={t.danger} style={{ marginTop: 8, marginBottom: 12 }}>
          {T.delTag}
        </TX>
        <TX font="serifI" role="display" size={38} style={{ marginBottom: 14 }}>
          {T.delTitle}
        </TX>
        <TX role="bodySm" color={t.txSecondary} style={{ marginBottom: 20 }}>
          {isGuest ? T.delBodyGuest : T.delBody}
        </TX>

        {/* What goes. Named explicitly — "your data" is not informed consent. */}
        <View
          style={{
            borderRadius: 16,
            borderWidth: 1,
            borderColor: t.dangerA(28),
            backgroundColor: t.card,
            padding: 16,
            gap: 10,
            marginBottom: 24,
          }}
        >
          {T.delList.map((item) => (
            <View key={item} style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
              <Icon name="trash" size={15} color={t.danger} />
              <TX role="bodySm" color={t.txSecondary} style={{ flex: 1 }}>
                {item}
              </TX>
            </View>
          ))}
          {!isGuest && email ? (
            <TX role="label" color={t.txSubtle} style={{ marginTop: 2 }}>
              {email}
            </TX>
          ) : null}
        </View>

        <TX font="semi" role="bodySm" style={{ marginBottom: 10 }}>
          {T.delConfirmLabel.replace('{w}', word)}
        </TX>
        <TextInput
          value={confirm}
          onChangeText={setConfirm}
          placeholder={T.delConfirmPh.replace('{w}', word)}
          placeholderTextColor={t.txSubtle}
          autoCapitalize="characters"
          autoCorrect={false}
          onSubmitEditing={() => void submit()}
          style={{
            height: 52,
            borderRadius: 16,
            borderWidth: 1,
            borderColor: armed ? t.dangerA(60) : t.line(12),
            backgroundColor: t.input,
            color: t.tx,
            paddingHorizontal: 18,
            fontSize: 14.5,
            fontFamily: 'InstrumentSans',
            letterSpacing: 1.5,
            marginBottom: 10,
          }}
        />

        {error ? (
          <TX role="label" color={t.danger} style={{ marginBottom: 10 }}>
            {error}
          </TX>
        ) : null}

        {/* Destructive, so: never the default-styled primary, and inert until armed. */}
        <Press
          onPress={submit}
          cue={null}
          disabled={!armed || pending}
          accessibilityRole="button"
          accessibilityLabel={isGuest ? T.delBtnGuest : T.delBtn}
          accessibilityState={{ disabled: !armed || pending }}
          style={{
            minHeight: 54,
            borderRadius: 16,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: armed ? t.danger : 'transparent',
            borderWidth: 1.5,
            borderColor: armed ? t.danger : t.line(12),
            opacity: pending ? 0.5 : 1,
            marginTop: 4,
          }}
        >
          <TX font="semi" role="bodyLg" color={armed ? '#FFFFFF' : t.txSubtle}>
            {isGuest ? T.delBtnGuest : T.delBtn}
          </TX>
        </Press>

        <Button
          label={T.delCancel}
          variant="ghost"
          onPress={() => router.back()}
          style={{ marginTop: 12 }}
        />
      </ScrollView>
    </View>
  );
}
