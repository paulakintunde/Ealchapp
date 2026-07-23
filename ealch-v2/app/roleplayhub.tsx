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
import { domainMeta } from '@/content/domainMeta';
import { themeMeta } from '@/content/themeMeta';

// Role Play's hub is a flat list of 15 fixed conversation categories
// (rp-* theme slugs), not a domain grid like the other hubs — the
// categories don't map 1:1 onto the app's 14 catalogue domains. Tile
// colors/icon are borrowed from each category's assigned domain via
// domainMeta() so the visuals stay consistent with the rest of the app.
export default function RoleplayHub() {
  const t = useTheme();
  const T = useT();
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const lang = useStore((s) => s.lang);
  const corpus = useContent((s) => s.corpus);

  const cats = useMemo(() => {
    const themes = (corpus.themes ?? []).filter((th) => th.slug.startsWith('rp-'));
    return themes.map((th) => ({
      slug: th.slug,
      meta: themeMeta(th.slug),
      visual: domainMeta(th.domain),
      count: (corpus.scenarios ?? []).filter((s) => s.theme === th.slug).length,
    }));
  }, [corpus]);

  return (
    <View style={{ flex: 1, backgroundColor: t.bg, paddingTop: insets.top }}>
      <LinearGradient
        colors={[t.accA(11), 'transparent']}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 0.5 }}
        style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 340 }}
      />
      <FocusHeader onClose={() => router.replace('/home')} onSettings={() => router.push('/settings')} title={T.roleplayHubTag} />

      <ScrollView
        contentContainerStyle={{ paddingHorizontal: 20, paddingTop: 8, paddingBottom: insets.bottom + 32 }}
        showsVerticalScrollIndicator={false}
      >
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 12 }}>
          {cats.map(({ slug, meta, visual, count }) => (
            <Press
              key={slug}
              onPress={() => router.push({ pathname: '/roleplay', params: { theme: slug } })}
              scale={0.98}
              style={{
                width: '47.5%',
                minHeight: 132,
                padding: 14,
                borderRadius: 18,
                borderWidth: 1,
                borderColor: t.line(7),
                overflow: 'hidden',
                backgroundColor: t.isDark ? visual.base : t.card,
                ...t.cardShadow,
              }}
            >
              <LinearGradient
                colors={[visual.glow, 'transparent']}
                start={{ x: 0.85, y: 0 }}
                end={{ x: 0.2, y: 0.7 }}
                style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}
              />
              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: 6 }}>
                <View style={{ width: 34, height: 34, borderRadius: 17, backgroundColor: visual.disc, alignItems: 'center', justifyContent: 'center' }}>
                  <Icon name={visual.icon} size={17} color={visual.ink} strokeWidth={1.7} />
                </View>
                <TX font="semi" role="eyebrow" ls={1.6} color={t.txMuted}>
                  {T.rpScenesN.replace('{n}', String(count))}
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
