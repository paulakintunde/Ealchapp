import { useMemo } from 'react';
import { ScrollView, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { TX } from '@/components/Type';
import { Press, FocusHeader } from '@/components/ui';
import { Icon } from '@/components/Icon';
import { useTheme } from '@/theme/useTheme';
import { useT } from '@/i18n/useT';
import { useStore } from '@/store/useStore';
import { useContent } from '@/services/content';
import { selectItems } from '@/services/content.logic';
import { domainMeta } from '@/content/domainMeta';

/**
 * The themed flashcard hub: every catalogue domain as a compact tappable
 * category card, two per row. A card opens the category's type picker
 * (/flashtypes), which opens the swipeable deck itself (/flashcards).
 *
 * The grid is a view over the corpus catalogue, not a hardcoded list: an OTA
 * snapshot that ships a 13th domain grows the grid without an app release
 * (domainMeta falls back to a neutral card for slugs it has no art for).
 */
export default function FlashHub() {
  const t = useTheme();
  const T = useT();
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const lang = useStore((s) => s.lang);
  const corpus = useContent((s) => s.corpus);

  // Domains in catalogue order, each with its flashcard count — the count the
  // card advertises is exactly the deck the type picker will offer, so both
  // derive from the same themes-of-domain join.
  const cats = useMemo(() => {
    const domains = [...(corpus.domains ?? [])].sort((a, b) => a.order - b.order);
    const themesOf = new Map<string, string[]>();
    for (const th of corpus.themes ?? []) {
      const list = themesOf.get(th.domain) ?? [];
      list.push(th.slug);
      themesOf.set(th.domain, list);
    }
    return domains
      .map((d) => ({
        slug: d.slug,
        meta: domainMeta(d.slug),
        count: selectItems(corpus, 'flashcard', { themes: themesOf.get(d.slug) ?? [] }).length,
      }))
      // Drop the empty ones, as voicehub/sentencehub/dictationhub already do.
      // This hub was the only one that didn't, and offline it showed it: the
      // seed cut is a1/a2/sons, so `societe` shipped a card advertising 0 cards
      // whose theme list — which DOES filter on count — was then blank. A dead
      // door teaches distrust.
      .filter((c) => c.count > 0);
  }, [corpus]);

  return (
    <View style={{ flex: 1, backgroundColor: t.bg, paddingTop: insets.top }}>
      <LinearGradient
        colors={[t.accA(11), 'transparent']}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 0.5 }}
        style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 340 }}
      />
      <FocusHeader onClose={() => router.replace('/home')} onSettings={() => router.push('/settings')} title={T.flashHubTag} />

      <ScrollView
        contentContainerStyle={{ paddingHorizontal: 20, paddingTop: 8, paddingBottom: insets.bottom + 32 }}
        showsVerticalScrollIndicator={false}
      >
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 12 }}>
          {cats.map(({ slug, meta, count }) => (
            <Press
              key={slug}
              onPress={() => router.push({ pathname: '/flashthemes', params: { domain: slug } })}
              scale={0.98}
              style={{
                width: '47.5%',
                minHeight: 132,
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
                  {T.ctCardsN.replace('{n}', String(count))}
                </TX>
              </View>
              <TX font="serifI" size={19} role="titleLg" numberOfLines={2} style={{ marginTop: 'auto' }}>
                {lang === 'fr' ? meta.fr : meta.en}
              </TX>
              <TX role="meta" color={t.txMuted} numberOfLines={2} style={{ marginTop: 4 }}>
                {lang === 'fr' ? meta.subFr : meta.subEn}
              </TX>
            </Press>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
