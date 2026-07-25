import { useMemo, useState } from 'react';
import { ScrollView, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { TX } from '@/components/Type';
import { Press, FocusHeader } from '@/components/ui';
import { Icon } from '@/components/Icon';
import { Waveform } from '@/components/Waveform';
import { useTheme } from '@/theme/useTheme';
import { useT } from '@/i18n/useT';
import { useStore } from '@/store/useStore';
import { useContent } from '@/services/content';
import { selectItems } from '@/services/content.logic';
import { domainMeta } from '@/content/domainMeta';
import { themeMeta } from '@/content/themeMeta';
import { LEVELS } from '@/content/schema';
import { tts } from '@/services';

/**
 * One category's La Dictée sub-theme list: a one-column stack, one card per
 * catalogue theme that holds a dictation item, each with its own preview
 * chip — same ear-first idea as dictationhub.tsx, one level in.
 */
export default function DictationThemes() {
  const t = useTheme();
  const T = useT();
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const lang = useStore((s) => s.lang);
  const corpus = useContent((s) => s.corpus);
  const { domain } = useLocalSearchParams<{ domain?: string }>();
  const [previewing, setPreviewing] = useState<string | null>(null);

  const slug = domain ?? '';
  const meta = domainMeta(slug);

  const rows = useMemo(() => {
    const bandIx = (b: unknown) => (LEVELS as readonly string[]).indexOf(String(b));
    return (corpus.themes ?? [])
      .filter((th) => th.domain === slug)
      .map((th) => {
        const items = selectItems(corpus, 'dictation', { theme: th.slug });
        return {
          slug: th.slug,
          title: th.title,
          en: themeMeta(th.slug).en,
          lo: th.levelRange[0],
          hi: th.levelRange[1],
          count: items.length,
          sample: items[0]?.fr,
        };
      })
      .filter((r) => r.count > 0)
      .sort((a, b) => bandIx(a.lo) - bandIx(b.lo) || b.count - a.count || a.title.localeCompare(b.title));
  }, [corpus, slug]);

  const preview = (rowSlug: string, fr: string | undefined, ix: number) => {
    if (previewing === rowSlug) {
      tts.stop();
      setPreviewing(null);
      return;
    }
    if (!fr) return;
    setPreviewing(rowSlug);
    tts.speak(fr, {
      voice: ix % 2 === 0 ? 'amelie' : 'leo',
      onDone: () => setPreviewing((p) => (p === rowSlug ? null : p)),
      onError: () => setPreviewing((p) => (p === rowSlug ? null : p)),
    });
  };

  return (
    <View style={{ flex: 1, backgroundColor: t.bg, paddingTop: insets.top }}>
      <LinearGradient
        colors={[meta.glow, 'transparent']}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 0.45 }}
        style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 300 }}
      />
      <FocusHeader onClose={() => router.back()} onSettings={() => router.push('/settings')} title={T.dicteeT} />

      <ScrollView
        contentContainerStyle={{ paddingHorizontal: 20, paddingTop: 4, paddingBottom: insets.bottom + 32 }}
        showsVerticalScrollIndicator={false}
      >
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 13, marginBottom: 6, paddingHorizontal: 4 }}>
          <View style={{ width: 40, height: 40, borderRadius: 20, backgroundColor: meta.disc, alignItems: 'center', justifyContent: 'center' }}>
            <Icon name={meta.icon} size={19} color={meta.ink} strokeWidth={1.7} />
          </View>
          <View style={{ flex: 1 }}>
            <TX font="serifI" size={24} role="display" numberOfLines={2}>
              {lang === 'fr' ? meta.fr : meta.en}
            </TX>
            <TX role="meta" color={t.txMuted} numberOfLines={2} style={{ marginTop: 2 }}>
              {lang === 'fr' ? meta.subFr : meta.subEn}
            </TX>
          </View>
        </View>

        <TX font="semi" role="eyebrow" ls={2.2} color={t.txSubtle} style={{ marginTop: 22, marginBottom: 12, paddingHorizontal: 4 }}>
          {T.subThemesT.toUpperCase()}
        </TX>

        <View style={{ gap: 10 }}>
          {rows.map((r, ix) => {
            const isOn = previewing === r.slug;
            return (
              <Press
                key={r.slug}
                onPress={() => router.push({ pathname: '/dictation', params: { theme: r.slug } })}
                scale={0.99}
                style={{
                  minHeight: 76,
                  paddingVertical: 10,
                  paddingHorizontal: 16,
                  borderRadius: 16,
                  borderWidth: 1,
                  borderColor: t.line(7),
                  overflow: 'hidden',
                  backgroundColor: t.isDark ? meta.base : t.card,
                  ...t.cardShadow,
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: 14,
                }}
              >
                <LinearGradient
                  colors={[meta.glow, 'transparent']}
                  start={{ x: 0.9, y: 0 }}
                  end={{ x: 0.25, y: 0.8 }}
                  style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}
                />
                {/* Nested Press: tapping the ear plays the sample; tapping
                    anywhere else on the row opens the deck. */}
                <Press
                  onPress={() => preview(r.slug, r.sample, ix)}
                  cue={null}
                  scale={0.9}
                  style={{
                    width: 53,
                    height: 53,
                    borderRadius: 26.5,
                    backgroundColor: isOn ? meta.disc : meta.disc,
                    borderWidth: isOn ? 1 : 0,
                    borderColor: meta.ink,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {isOn ? (
                    <Waveform count={4} height={18} barWidth={2.9} gap={2.3} active color={meta.ink} />
                  ) : (
                    <Icon name="play" size={18} color={meta.ink} />
                  )}
                </Press>
                <View style={{ flex: 1 }}>
                  <TX font="serifI" role="titleLg" size={19} numberOfLines={1}>
                    {lang === 'fr' ? r.title : r.en}
                  </TX>
                  <TX role="meta" color={t.txMuted} numberOfLines={1} style={{ marginTop: 2 }}>
                    {T.ctDicteeN.replace('{n}', String(r.count)) +
                      ' · ' +
                      (r.lo === r.hi ? String(r.lo).toUpperCase() : `${String(r.lo).toUpperCase()} → ${String(r.hi).toUpperCase()}`)}
                  </TX>
                </View>
                <Icon name="chevronRight" size={13} color={t.txNonText} strokeWidth={1.6} />
              </Press>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
}
