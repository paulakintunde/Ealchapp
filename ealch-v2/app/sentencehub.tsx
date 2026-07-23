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
import { selectItems, mergeArticleTiles } from '@/services/content.logic';
import { domainMeta } from '@/content/domainMeta';

const PREVIEW_WORDS = 3;

/** A quick, decorative word split for the preview bubbles — not the authored
 *  tiling sentence.tsx uses (that also carries per-word translations), just
 *  enough of a peek that the tile reads as "you'll build THIS". */
function previewTiles(fr: string): string[] {
  return mergeArticleTiles(fr.split(/\s+/).map((w) => ({ w, t: '' })))
    .slice(0, PREVIEW_WORDS)
    .map((tl) => tl.w);
}

/**
 * The themed Sentence Builder hub: every catalogue domain that holds a
 * sentence item, as a compact tappable category card, two per row — same
 * skeleton as flashhub.tsx. The unique bit is the preview: each card shows a
 * few loose word-bubbles from one of its sentences, echoing the Arrange
 * step's own bubble UI, so the tile itself hints at the building-block game
 * waiting inside instead of just naming a topic.
 */
export default function SentenceHub() {
  const t = useTheme();
  const T = useT();
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const lang = useStore((s) => s.lang);
  const corpus = useContent((s) => s.corpus);

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
        const items = selectItems(corpus, 'sentence', { themes: themesOf.get(d.slug) ?? [] });
        return { slug: d.slug, meta: domainMeta(d.slug), count: items.length, words: items[0] ? previewTiles(items[0].fr) : [] };
      })
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
      <FocusHeader onClose={() => router.replace('/home')} onSettings={() => router.push('/settings')} title={T.builderTag} />

      <ScrollView
        contentContainerStyle={{ paddingHorizontal: 20, paddingTop: 8, paddingBottom: insets.bottom + 32 }}
        showsVerticalScrollIndicator={false}
      >
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 12 }}>
          {cats.map(({ slug, meta, count, words }) => (
            <Press
              key={slug}
              onPress={() => router.push({ pathname: '/sentencethemes', params: { domain: slug } })}
              scale={0.98}
              style={{
                width: '47.5%',
                minHeight: 156,
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
                  {T.ctPhrasesN.replace('{n}', String(count))}
                </TX>
              </View>
              <TX font="serifI" size={19} role="titleLg" numberOfLines={2} style={{ marginTop: 'auto' }}>
                {lang === 'fr' ? meta.fr : meta.en}
              </TX>
              {/* The word-bubble preview — loose, unordered, exactly like the
                  Arrange step's own tile bank, so the game reads through the
                  hub already. */}
              {words.length ? (
                <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 5, marginTop: 8 }}>
                  {words.map((w, i) => (
                    <View
                      key={i}
                      style={{
                        paddingVertical: 3,
                        paddingHorizontal: 9,
                        borderRadius: 11,
                        backgroundColor: meta.disc,
                        borderWidth: 1,
                        borderColor: meta.ink,
                      }}
                    >
                      <TX font="serifI" role="label" color={meta.ink}>
                        {w}
                      </TX>
                    </View>
                  ))}
                  <View style={{ paddingVertical: 3, paddingHorizontal: 6 }}>
                    <TX role="label" color={t.txSubtle}>···</TX>
                  </View>
                </View>
              ) : null}
            </Press>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
