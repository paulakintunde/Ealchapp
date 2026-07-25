import { useMemo, useState } from 'react';
import { ScrollView, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
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
import { tts } from '@/services';

/**
 * The themed La Dictée hub: every catalogue domain that holds a dictation
 * item, as a compact tappable category card, two per row — same skeleton as
 * flashhub.tsx. The unique bit is the ear: each card carries its own preview
 * chip that speaks the domain's first dictée sentence right there, before you
 * ever commit to opening it. Dictée is the one drill that is entirely about
 * listening, so browsing it should let you listen first.
 */
export default function DictationHub() {
  const t = useTheme();
  const T = useT();
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const lang = useStore((s) => s.lang);
  const corpus = useContent((s) => s.corpus);
  const [previewing, setPreviewing] = useState<string | null>(null);

  const cats = useMemo(() => {
    const domains = [...(corpus.domains ?? [])].sort((a, b) => a.order - b.order);
    const themesOf = new Map<string, string[]>();
    for (const th of corpus.themes ?? []) {
      const list = themesOf.get(th.domain) ?? [];
      list.push(th.slug);
      themesOf.set(th.domain, list);
    }
    return domains
      .map((d) => {
        const items = selectItems(corpus, 'dictation', { themes: themesOf.get(d.slug) ?? [] });
        return { slug: d.slug, meta: domainMeta(d.slug), count: items.length, sample: items[0]?.fr };
      })
      .filter((c) => c.count > 0);
  }, [corpus]);

  const preview = (slug: string, fr: string | undefined) => {
    if (previewing === slug) {
      tts.stop();
      setPreviewing(null);
      return;
    }
    if (!fr) return;
    setPreviewing(slug);
    // Amélie/Léo, alternating by domain order — the same cast la dictée itself
    // uses, so the preview sounds like the drill it is previewing.
    tts.speak(fr, {
      voice: cats.findIndex((c) => c.slug === slug) % 2 === 0 ? 'amelie' : 'leo',
      onDone: () => setPreviewing((p) => (p === slug ? null : p)),
      onError: () => setPreviewing((p) => (p === slug ? null : p)),
    });
  };

  return (
    <View style={{ flex: 1, backgroundColor: t.bg, paddingTop: insets.top }}>
      <LinearGradient
        colors={[t.accA(11), 'transparent']}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 0.5 }}
        style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 340 }}
      />
      <FocusHeader onClose={() => router.replace('/home')} onSettings={() => router.push('/settings')} title={T.dicteeT} />

      <ScrollView
        contentContainerStyle={{ paddingHorizontal: 20, paddingTop: 8, paddingBottom: insets.bottom + 32 }}
        showsVerticalScrollIndicator={false}
      >
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 12 }}>
          {cats.map(({ slug, meta, count, sample }) => {
            const isOn = previewing === slug;
            return (
              <Press
                key={slug}
                onPress={() => router.push({ pathname: '/dictationthemes', params: { domain: slug } })}
                scale={0.98}
                style={{
                  width: '47.5%',
                  minHeight: 150,
                  padding: 14,
                  borderRadius: 18,
                  borderWidth: 1,
                  borderColor: t.line(7),
                  overflow: 'hidden',
                  backgroundColor: t.isDark ? meta.base : t.card,
                  ...t.cardShadow,
                }}
              >
                <LinearGradient
                  colors={[meta.glow, 'transparent']}
                  start={{ x: 0.85, y: 0 }}
                  end={{ x: 0.2, y: 0.7 }}
                  style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}
                />
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: 6 }}>
                  <View style={{ width: 34, height: 34, borderRadius: 17, backgroundColor: meta.disc, alignItems: 'center', justifyContent: 'center' }}>
                    <Icon name={meta.icon} size={17} color={meta.ink} strokeWidth={1.7} />
                  </View>
                  <TX font="semi" role="eyebrow" ls={1.6} color={t.txMuted}>
                    {T.ctDicteeN.replace('{n}', String(count))}
                  </TX>
                </View>
                <TX font="serifI" size={19} role="titleLg" numberOfLines={2} style={{ marginTop: 'auto' }}>
                  {lang === 'fr' ? meta.fr : meta.en}
                </TX>
                <TX role="meta" color={t.txMuted} numberOfLines={2} style={{ marginTop: 4, marginBottom: 10 }}>
                  {lang === 'fr' ? meta.subFr : meta.subEn}
                </TX>
                {/* Preview chip — a nested Press, so a tap here plays the sample
                    without opening the sub-theme list underneath it. */}
                <Press
                  onPress={() => preview(slug, sample)}
                  cue={null}
                  scale={0.95}
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 10,
                    alignSelf: 'flex-start',
                    minHeight: 37,
                    paddingVertical: 5,
                    paddingHorizontal: 15,
                    borderRadius: 18.5,
                    borderWidth: 1,
                    borderColor: isOn ? meta.ink : t.line(14),
                    backgroundColor: isOn ? meta.disc : 'transparent',
                  }}
                >
                  <Icon name={isOn ? 'pause' : 'play'} size={13} color={isOn ? meta.ink : t.txMuted} />
                  <Waveform count={9} height={13} barWidth={2.5} gap={2.3} active={isOn} color={isOn ? meta.ink : t.txNonText} />
                  <TX font="semi" role="meta" ls={0.8} color={isOn ? meta.ink : t.txMuted}>
                    {isOn ? T.dcPlaying : T.previewT}
                  </TX>
                </Press>
              </Press>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
}
