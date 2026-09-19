// Third-party notices. Reachable from Settings → About & legal.
//
// Both stores expect an app's open-source notices to be reachable in-app, and
// the SIL Open Font License attaches a live obligation: the copyright notice
// has to travel with software that bundles the font. Ealch bundles two.
//
// Everything here is read from src/content/licences.ts, which licences.test.ts
// regenerates from package.json on every run. Nothing on this screen is typed
// by hand into a component, because a notices screen that drifts is worse than
// none: it is a false statement rather than a missing one.
import { Linking, ScrollView, View } from 'react-native';
import { useRouter } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { TX } from '@/components/Type';
import { Press, FocusHeader } from '@/components/ui';
import { Icon } from '@/components/Icon';
import { useTheme } from '@/theme/useTheme';
import { useT } from '@/i18n/useT';
import { LEGAL } from '@/config/legal';
import { RUNTIME_DEPS, FONTS, CONTENT_SOURCES, type Credit } from '@/content/licences';

export default function Licences() {
  const t = useTheme();
  const T = useT();
  const router = useRouter();
  const insets = useSafeAreaInsets();

  const open = (url?: string) => {
    if (url) Linking.openURL(url).catch(() => {});
  };

  const head = (label: string) => (
    <TX font="semi" role="meta" ls={2.8} color={t.txSubtle} style={{ marginTop: 26, marginBottom: 10 }}>
      {label}
    </TX>
  );

  const creditCard = (c: Credit) => (
    <Press
      key={c.name}
      cue={null}
      onPress={() => open(c.url)}
      accessibilityRole={c.url ? 'link' : 'text'}
      accessibilityLabel={`${c.name}. ${c.note}`}
      style={{
        borderRadius: 16,
        borderWidth: 1,
        borderColor: t.line(10),
        backgroundColor: t.card,
        padding: 15,
        marginBottom: 10,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
      }}
    >
      {/* The flex belongs on this wrapper View and never on a TX: a flexed Text
          drops its last words on Android. */}
      <View style={{ flex: 1 }}>
        <TX font="semi" role="body">{c.name}</TX>
        <TX role="label" color={t.txMuted} lhMult={1.45} style={{ marginTop: 3 }}>{c.note}</TX>
      </View>
      {c.url ? <Icon name="chevronRight" size={13} color={t.txNonText} strokeWidth={1.6} /> : null}
    </Press>
  );

  const legalRow = (label: string, url: string) => (
    <Press
      key={label}
      onPress={() => open(url)}
      accessibilityRole="link"
      accessibilityLabel={label}
      style={{
        minHeight: 54,
        borderRadius: 16,
        borderWidth: 1,
        borderColor: t.line(10),
        backgroundColor: t.card,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 14,
        paddingHorizontal: 16,
        paddingVertical: 10,
        marginBottom: 10,
      }}
    >
      <View style={{ flex: 1 }}>
        <TX font="semi" role="body">{label}</TX>
      </View>
      <Icon name="chevronRight" size={13} color={t.txNonText} strokeWidth={1.6} />
    </Press>
  );

  return (
    <View style={{ flex: 1, backgroundColor: t.bg }}>
      <View style={{ paddingTop: insets.top + 6, paddingHorizontal: 20 }}>
        <FocusHeader onClose={() => router.back()} title={T.licT.toUpperCase()} />
      </View>

      <ScrollView
        contentContainerStyle={{ paddingHorizontal: 28, paddingBottom: insets.bottom + 40 }}
        showsVerticalScrollIndicator={false}
      >
        <TX font="serifI" size={30} role="display" lhMult={1.2} style={{ marginTop: 8 }}>
          {T.licT}
        </TX>
        <TX role="label" color={t.txMuted} lhMult={1.5} style={{ marginTop: 8 }}>
          {T.licLead}
        </TX>

        {head(T.licFonts)}
        {FONTS.map(creditCard)}

        {head(T.licContent)}
        {CONTENT_SOURCES.map(creditCard)}

        {head(T.licBundled)}
        <View
          style={{
            borderRadius: 16,
            borderWidth: 1,
            borderColor: t.line(10),
            backgroundColor: t.card,
            paddingHorizontal: 15,
            paddingVertical: 6,
          }}
        >
          {RUNTIME_DEPS.map((d, i) => (
            <View
              key={d.name}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 12,
                paddingVertical: 9,
                borderTopWidth: i === 0 ? 0 : 1,
                borderTopColor: t.line(7),
              }}
            >
              <View style={{ flex: 1 }}>
                {/* The package name, verbatim. It is an identifier, so it is
                    not translated and not prettified. */}
                <TX role="label" color={t.txSecondary}>{d.name}</TX>
              </View>
              <TX role="label" color={t.txNonText}>{d.licence}</TX>
            </View>
          ))}
        </View>
        <TX role="label" color={t.txNonText} style={{ marginTop: 8 }}>
          {T.licPkgs.replace('{n}', String(RUNTIME_DEPS.length))}
        </TX>

        {head(T.aboutSec)}
        {legalRow(T.legalTerms, LEGAL.termsUrl)}
        {legalRow(T.legalPrivacy, LEGAL.privacyUrl)}
      </ScrollView>
    </View>
  );
}
