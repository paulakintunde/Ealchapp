import { useMemo } from 'react';
import { ScrollView, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useLocalSearchParams, useRouter } from 'expo-router';
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
import { themeMeta } from '@/content/themeMeta';
import { LEVELS } from '@/content/schema';

const PREVIEW_WORDS = 3;

function previewTiles(fr: string): string[] {
  return mergeArticleTiles(fr.split(/\s+/).map((w) => ({ w, t: '' })))
    .slice(0, PREVIEW_WORDS)
    .map((tl) => tl.w);
}

/**
 * One category's Sentence Builder sub-theme list: a one-column stack, one
 * card per catalogue theme that holds a sentence item, each with its own
 * loose word-bubble preview — same idea as sentencehub.tsx, one level in.
 */
export default function SentenceThemes() {
  const t = useTheme();
  const T = useT();
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const lang = useStore((s) => s.lang);
  const corpus = useContent((s) => s.corpus);
  const { domain } = useLocalSearchParams<{ domain?: string }>();

  const slug = domain ?? '';
  const meta = domainMeta(slug);

  const rows = useMemo(() => {
    const bandIx = (b: unknown) => (LEVELS as readonly string[]).indexOf(String(b));
    return (corpus.themes ?? [])
      .filter((th) => th.domain === slug)
      .map((th) => {
        const items = selectItems(corpus, 'sentence', { theme: th.slug });
        return {
          slug: th.slug,
          title: th.title,
          en: themeMeta(th.slug).en,
          lo: th.levelRange[0],
          hi: th.levelRange[1],
          count: items.length,
          words: items[0] ? previewTiles(items[0].fr) : [],
        };
      })
      .filter((r) => r.count > 0)
      .sort((a, b) => bandIx(a.lo) - bandIx(b.lo) || b.count - a.count || a.title.localeCompare(b.title));
  }, [corpus, slug]);

  return (
    <View style={{ flex: 1, backgroundColor: t.bg, paddingTop: insets.top }}>
      <LinearGradient
        colors={[meta.glow, 'transparent']}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 0.45 }}
        style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 300 }}
      />
      <FocusHeader onClose={() => router.back()} onSettings={() => router.push('/settings')} title={T.builderTag} />

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
          {rows.map((r) => (
            <Press
              key={r.slug}
              onPress={() => router.push({ pathname: '/sentence', params: { theme: r.slug } })}
              scale={0.99}
              style={{
                paddingVertical: 12,
                paddingHorizontal: 16,
                borderRadius: 16,
                borderWidth: 1,
                borderColor: t.line(7),
                overflow: 'hidden',
                backgroundColor: t.isDark ? meta.base : t.card,
                ...t.cardShadow,
              }}
            >
              <LinearGradient
                colors={[meta.glow, 'transparent']}
                start={{ x: 0.9, y: 0 }}
                end={{ x: 0.25, y: 0.8 }}
                style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}
              />
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 14 }}>
                <View style={{ width: 38, height: 38, borderRadius: 19, backgroundColor: meta.disc, alignItems: 'center', justifyContent: 'center' }}>
                  <TX font="serifI" role="titleSm" size={16} color={meta.ink}>
                    {r.title.replace(/^(Le |La |Les |L'|Au |Aux )/, '').charAt(0).toUpperCase()}
                  </TX>
                </View>
                <View style={{ flex: 1 }}>
                  <TX font="serifI" role="titleLg" size={19} numberOfLines={1}>
                    {lang === 'fr' ? r.title : r.en}
                  </TX>
                  <TX role="meta" color={t.txMuted} numberOfLines={1} style={{ marginTop: 2 }}>
                    {T.ctPhrasesN.replace('{n}', String(r.count)) +
                      ' · ' +
                      (r.lo === r.hi ? String(r.lo).toUpperCase() : `${String(r.lo).toUpperCase()} → ${String(r.hi).toUpperCase()}`)}
                  </TX>
                </View>
                <Icon name="chevronRight" size={13} color={t.txNonText} strokeWidth={1.6} />
              </View>
              {r.words.length ? (
                <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 5, marginTop: 10, paddingLeft: 52 }}>
                  {r.words.map((w, i) => (
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
