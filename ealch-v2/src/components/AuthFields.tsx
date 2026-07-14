// Shared auth inputs + the sign-up legal consent line. Both the onboarding
// account step and the sign-in screen render these, so the two surfaces cannot
// drift apart.
import { useState } from 'react';
import { Linking, TextInput, View } from 'react-native';
import { TX } from './Type';
import { Press } from './ui';
import { Icon } from './Icon';
import { useTheme } from '@/theme/useTheme';
import { useT } from '@/i18n/useT';
import { LEGAL } from '@/config/legal';

const FIELD_HEIGHT = 52;

export function AuthField(props: React.ComponentProps<typeof TextInput> & { placeholder: string }) {
  const t = useTheme();
  return (
    <TextInput
      {...props}
      placeholderTextColor={t.txSubtle}
      maxFontSizeMultiplier={1.6}
      style={{
        minHeight: FIELD_HEIGHT,
        borderRadius: 16,
        borderWidth: 1,
        borderColor: t.line(12),
        backgroundColor: t.input,
        color: t.txPrimary,
        paddingHorizontal: 18,
        fontSize: 15,
        fontFamily: 'InstrumentSans',
        marginBottom: 10,
      }}
    />
  );
}

/** Password input with a show/hide eye toggle. */
export function PasswordField({
  value,
  onChangeText,
  placeholder,
  onSubmitEditing,
}: {
  value: string;
  onChangeText: (v: string) => void;
  placeholder: string;
  onSubmitEditing?: () => void;
}) {
  const t = useTheme();
  const T = useT();
  const [shown, setShown] = useState(false);
  return (
    <View style={{ marginBottom: 10, justifyContent: 'center' }}>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={t.txSubtle}
        secureTextEntry={!shown}
        autoCapitalize="none"
        autoCorrect={false}
        onSubmitEditing={onSubmitEditing}
        maxFontSizeMultiplier={1.6}
        style={{
          minHeight: FIELD_HEIGHT,
          borderRadius: 16,
          borderWidth: 1,
          borderColor: t.line(12),
          backgroundColor: t.input,
          color: t.txPrimary,
          paddingLeft: 18,
          paddingRight: 52, // room for the eye
          fontSize: 15,
          fontFamily: 'InstrumentSans',
        }}
      />
      <Press
        onPress={() => setShown((v) => !v)}
        cue={null}
        scale={1}
        hitSlop={8}
        accessibilityRole="button"
        accessibilityLabel={shown ? T.pwHide : T.pwShow}
        style={{
          position: 'absolute',
          right: 6,
          top: 0,
          bottom: 0,
          width: 42,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Icon name={shown ? 'eyeOff' : 'eye'} size={18} color={t.txNonText} />
      </Press>
    </View>
  );
}

/**
 * Sign-up consent line. Shown at the point of account creation — the terms and
 * the email-communication consent are disclosed before the user commits.
 */
export function LegalConsent() {
  const t = useTheme();
  const T = useT();
  const open = (url: string) => {
    Linking.openURL(url).catch(() => {});
  };
  const link = (label: string, url: string) => (
    <TX font="semi" role="label" color={t.txSecondary} onPress={() => open(url)} style={{ textDecorationLine: 'underline' }}>
      {label}
    </TX>
  );
  return (
    <TX role="label" color={t.txSubtle} center style={{ marginTop: 16 }}>
      {T.legalPre}
      {link(T.legalTerms, LEGAL.termsUrl)}
      {T.legalAnd}
      {link(T.legalPrivacy, LEGAL.privacyUrl)}
      {T.legalPost}
    </TX>
  );
}
