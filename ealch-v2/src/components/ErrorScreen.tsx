// The screen a tester sees instead of a white void.
//
// Deliberately dependency-light: no useTheme, no useT, no custom fonts, no
// store hooks. An error screen that itself depends on the app's providers is an
// error screen that fails exactly when it is needed — if the theme or the i18n
// table is what threw, this must still render. It reads `mode` and `lang` from
// the store *imperatively*, inside try/catch, so a broken store degrades to
// dark + English rather than a second crash.
import { Pressable, ScrollView, Text, View } from 'react-native';
import Constants from 'expo-constants';
import { formatForReport, type LoggedError } from '@/services/errors';
import { useStore } from '@/store/useStore';

const COPY = {
  fr: {
    tag: 'ERREUR',
    title: 'Quelque chose a cassé.',
    body: "L'application a rencontré une erreur inattendue. Vous pouvez réessayer — vos données sont intactes.",
    retry: 'Réessayer',
    details: 'Détails techniques',
    help: 'Si le problème persiste, envoyez une capture de cet écran.',
  },
  en: {
    tag: 'ERROR',
    title: 'Something broke.',
    body: 'The app hit an unexpected error. You can try again — your data is intact.',
    retry: 'Try again',
    details: 'Technical details',
    help: 'If this keeps happening, send a screenshot of this screen.',
  },
};

/** Read a store field without subscribing, tolerating a store that is itself broken. */
function safeRead<K extends 'mode' | 'lang'>(key: K, fallback: string): string {
  try {
    return useStore.getState()[key] ?? fallback;
  } catch {
    return fallback;
  }
}

export function ErrorScreen({ error, retry }: { error: Error; retry: () => void }) {
  const dark = safeRead('mode', 'dark') !== 'light';
  const copy = safeRead('lang', 'en') === 'fr' ? COPY.fr : COPY.en;

  const bg = dark ? '#0B0C0E' : '#FAF7F0';
  const tx = dark ? '#F4F2ED' : '#17181B';
  const dim = dark ? 'rgba(244,242,237,0.58)' : 'rgba(23,24,27,0.66)';
  const line = dark ? 'rgba(244,242,237,0.12)' : 'rgba(23,24,27,0.12)';
  const surface = dark ? 'rgba(244,242,237,0.05)' : 'rgba(23,24,27,0.04)';
  const danger = '#E5484D';

  const entry: LoggedError = {
    scope: 'render',
    message: error?.message ?? String(error),
    stack: error?.stack,
    at: Date.now(),
  };
  const version = Constants.expoConfig?.version ?? '—';

  return (
    <View style={{ flex: 1, backgroundColor: bg, paddingHorizontal: 28, paddingTop: 96, paddingBottom: 40 }}>
      <Text
        allowFontScaling
        maxFontSizeMultiplier={1.8}
        style={{ color: danger, fontSize: 12, lineHeight: 16, letterSpacing: 2.8, fontWeight: '700', marginBottom: 12 }}
      >
        {copy.tag}
      </Text>
      <Text
        allowFontScaling
        maxFontSizeMultiplier={1.25}
        style={{ color: tx, fontSize: 32, lineHeight: 38, marginBottom: 12 }}
      >
        {copy.title}
      </Text>
      <Text
        allowFontScaling
        maxFontSizeMultiplier={1.6}
        style={{ color: dim, fontSize: 15, lineHeight: 22, marginBottom: 26 }}
      >
        {copy.body}
      </Text>

      <Pressable
        onPress={retry}
        accessibilityRole="button"
        accessibilityLabel={copy.retry}
        style={({ pressed }) => ({
          minHeight: 54,
          paddingVertical: 12,
          borderRadius: 16,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: tx,
          opacity: pressed ? 0.8 : 1,
        })}
      >
        <Text
          allowFontScaling
          maxFontSizeMultiplier={1.6}
          style={{ color: bg, fontSize: 16, lineHeight: 23, fontWeight: '600' }}
        >
          {copy.retry}
        </Text>
      </Pressable>

      <Text
        allowFontScaling
        maxFontSizeMultiplier={1.8}
        style={{ color: dim, fontSize: 12, lineHeight: 16, letterSpacing: 1.6, fontWeight: '600', marginTop: 32, marginBottom: 10 }}
      >
        {copy.details.toUpperCase()}
      </Text>
      <ScrollView
        style={{
          flex: 1,
          borderRadius: 14,
          borderWidth: 1,
          borderColor: line,
          backgroundColor: surface,
          padding: 14,
        }}
      >
        <Text
          selectable
          allowFontScaling
          maxFontSizeMultiplier={1.6}
          style={{ color: dim, fontSize: 12, lineHeight: 17, fontFamily: 'monospace' }}
        >
          {`v${version}\n\n${formatForReport(entry)}`}
        </Text>
      </ScrollView>

      <Text
        allowFontScaling
        maxFontSizeMultiplier={1.7}
        style={{ color: dim, fontSize: 13, lineHeight: 18, marginTop: 14 }}
      >
        {copy.help}
      </Text>
    </View>
  );
}
