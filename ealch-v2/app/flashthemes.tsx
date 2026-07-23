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
import { selectItems } from '@/services/content.logic';
import { domainMeta } from '@/content/domainMeta';
import { themeMeta } from '@/content/themeMeta';
import { LEVELS } from '@/content/schema';

/**
 * One category's SUB-THEME hub: a one-column stack of compact cards, one per
 * catalogue theme under this domain, each opening that sub-theme's own
 * swipeable mixed deck. This is the between-layer the categories grew into:
 * a domain deck at ~150 cards is a slog; its sub-themes are sittable.
 *
 * The stack is difficulty-ordered (a sub-theme's floor band, LEVELS order),
 * so the column itself reads as a ramp. The by-card-type picker survives as
 * the lead card: sub-themes scope WHAT you drill, the type picker scopes HOW.
 * Only sub-themes that actually hold flashcards render; an empty theme is a
 * catalogue row, not a deck, and a dead door teaches distrust.
 */
export default function FlashThemes() {
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
      .map((th) => ({
        slug: th.slug,
        title: th.title,
        en: themeMeta(th.slug).en,
        lo: th.levelRange[0],
        hi: th.levelRange[1],
        count: selectItems(corpus, 'flashcard', { theme: th.slug }).length,
      }))
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
      <FocusHeader onClose={() => router.back()} onSettings={() => router.push('/settings')} title={T.flashHubTag} />

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

        {/* The type picker stays one tap away — it drills the WHOLE category
            by exercise kind (with the difficulty chips), which no single
            sub-theme deck replaces. */}
        <Press
          onPress={() => router.push({ pathname: '/flashtypes', params: { domain: slug } })}
          style={{ marginTop: 18, minHeight: 64, paddingVertical: 8, paddingHorizontal: 16, borderRadius: 16, borderWidth: 1, borderColor: t.accA(30), backgroundColor: t.accA(6), flexDirection: 'row', alignItems: 'center', gap: 14 }}
        >
          <View style={{ width: 38, height: 38, borderRadius: 19, backgroundColor: meta.disc, alignItems: 'center', justifyContent: 'center' }}>
            <Icon name="card" size={16} color={meta.ink} strokeWidth={1.7} />
          </View>
          <View style={{ flex: 1 }}>
            <TX font="semi" role="body" numberOfLines={1}>
              {T.byTypeT}
            </TX>
            <TX role="meta" color={t.txMuted} numberOfLines={1} style={{ marginTop: 2 }}>
              {T.byTypeS}
            </TX>
          </View>
          <Icon name="chevronRight" size={13} color={t.txNonText} strokeWidth={1.6} />
        </Press>

        <TX font="semi" role="eyebrow" ls={2.2} color={t.txSubtle} style={{ marginTop: 22, marginBottom: 12, paddingHorizontal: 4 }}>
          {T.subThemesT.toUpperCase()}
        </TX>

        {/* The one-column stack: rows of one, each card its own deck. */}
        <View style={{ gap: 10 }}>
          {rows.map((r) => (
            <Press
              key={r.slug}
              onPress={() => router.push({ pathname: '/flashcards', params: { domain: slug, theme: r.slug } })}
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
                  {T.ctCardsN.replace('{n}', String(r.count)) +
                    ' · ' +
                    (r.lo === r.hi ? String(r.lo).toUpperCase() : `${String(r.lo).toUpperCase()} → ${String(r.hi).toUpperCase()}`)}
                </TX>
              </View>
              <Icon name="chevronRight" size={13} color={t.txNonText} strokeWidth={1.6} />
            </Press>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
