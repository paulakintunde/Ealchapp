import { useMemo, useState } from 'react';
import { ScrollView, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { TX } from '@/components/Type';
import { Press, FocusHeader, ProgressBar, Badge } from '@/components/ui';
import { Icon } from '@/components/Icon';
import { useTheme } from '@/theme/useTheme';
import { useT } from '@/i18n/useT';
import { useStore } from '@/store/useStore';
import { useProgress } from '@/store/useProgress';
import { useContent } from '@/services/content';
import { parcoursSteps, themeOfWeek, themeSummaries, PARCOURS_STEPS } from '@/content/theme.logic';
import { themeMeta } from '@/content/themeMeta';
import { dayOfYear } from '@/content/wordOfDay';
import { avatarName } from '@/content/avatars';
import { LEVELS, type Level } from '@/content/schema';

const levelLabel = (l: Level) => (l === 'sons' ? 'SONS' : l.toUpperCase());

export default function Themes() {
  const t = useTheme();
  const T = useT();
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const lang = useStore((s) => s.lang);
  const coachName = avatarName(useStore((s) => s.avatarId));
  const corpus = useContent((s) => s.corpus);
  const attempts = useProgress((s) => s.attempts);

  // undefined = "Tous": every theme, step math across all its bands.
  const [band, setBand] = useState<Level | undefined>(undefined);

  const summaries = useMemo(
    () => themeSummaries(corpus.items, corpus.scenarios, attempts),
    [corpus, attempts]
  );
  // Chips only for bands that actually have themed content, so a chip never
  // filters down to an empty screen.
  const bands = useMemo(() => {
    const s = new Set<Level>();
    summaries.forEach((th) => th.levels.forEach((l) => s.add(l)));
    return [...s].sort((a, z) => LEVELS.indexOf(a) - LEVELS.indexOf(z));
  }, [summaries]);

  const visible = band === undefined ? summaries : summaries.filter((th) => th.levels.includes(band));

  // Per-theme parcours position at the selected band: the 1-based index of the
  // first open step, 'done' when all content-bearing steps are finished, 'new'
  // when nothing is attempted yet.
  const positions = useMemo(() => {
    const out: Record<string, { step: number; done: boolean; fresh: boolean }> = {};
    for (const th of visible) {
      const steps = parcoursSteps(corpus.items, corpus.scenarios, attempts, th.slug, band);
      const nonEmpty = steps.filter((s) => s.state !== 'empty');
      const openIx = steps.findIndex((s) => s.state === 'open');
      const done = nonEmpty.length > 0 && nonEmpty.every((s) => s.state === 'done');
      out[th.slug] = {
        step: openIx === -1 ? PARCOURS_STEPS.length : openIx + 1,
        done,
        fresh: steps.every((s) => s.learned === 0),
      };
    }
    return out;
  }, [visible, corpus, attempts, band]);

  const week = themeOfWeek(visible, dayOfYear());
  const weekPos = week ? positions[week.slug] : undefined;
  const grid = week ? visible.filter((th) => th.slug !== week.slug) : visible;

  const openTheme = (slug: string) =>
    router.push(`/theme?slug=${slug}${band ? `&level=${band}` : ''}`);

  return (
    <View style={{ flex: 1, backgroundColor: t.bg, paddingTop: insets.top }}>
      <LinearGradient
        colors={[t.accA(11), 'transparent']}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 0.5 }}
        style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 340 }}
      />
      <FocusHeader onClose={() => router.back()} onSettings={() => router.push('/settings')} title={T.themesTag} />
      <ScrollView contentContainerStyle={{ paddingHorizontal: 24, paddingBottom: insets.bottom + 40 }} showsVerticalScrollIndicator={false}>
        <TX font="serifI" size={34} role="display" style={{ marginBottom: 6 }}>
          {T.themesTitle}
        </TX>
        <TX role="bodySm" color={t.txMuted} style={{ marginBottom: 18 }}>
          {T.themesSub.replace('{name}', coachName)}
        </TX>

        {/* Level chips */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginHorizontal: -24, marginBottom: 20 }} contentContainerStyle={{ paddingHorizontal: 24, gap: 8 }}>
          {[undefined, ...bands].map((l) => {
            const on = band === l;
            return (
              <Press
                key={l ?? 'all'}
                onPress={() => setBand(l)}
                accessibilityRole="button"
                accessibilityState={{ selected: on }}
                style={{
                  minHeight: 34,
                  paddingVertical: 6,
                  paddingHorizontal: 15,
                  borderRadius: 17,
                  borderWidth: 1,
                  borderColor: on ? t.acc : t.line(14),
                  backgroundColor: on ? t.acc : 'transparent',
                  justifyContent: 'center',
                }}
              >
                <TX font="semi" role="meta" ls={0.8} color={on ? t.accInk : t.txMuted}>
                  {l === undefined ? T.allLevels : levelLabel(l)}
                </TX>
              </Press>
            );
          })}
        </ScrollView>

        {/* Theme of the week */}
        {week ? (
          <Press onPress={() => openTheme(week.slug)} scale={0.99} style={{ borderRadius: 22, borderWidth: 1, borderColor: t.accA(40), backgroundColor: t.card, ...t.cardShadow, overflow: 'hidden', padding: 20, marginBottom: 16 }}>
            <LinearGradient colors={[t.accA(16), 'transparent']} start={{ x: 0.8, y: 0 }} end={{ x: 0.2, y: 0.8 }} style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }} />
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
              <TX font="semi" role="eyebrow" ls={2.2} color={t.accTx}>
                {T.themeWeekTag}
              </TX>
              <Badge label={levelLabel(week.levels[0])} color={t.accInk} bg={t.acc} />
            </View>
            <TX font="serifI" size={30} role="display" style={{ marginBottom: 4 }}>
              {themeMeta(week.slug).fr}
            </TX>
            <TX role="meta" color={t.txMuted} style={{ marginBottom: 14 }}>
              {(lang === 'fr' ? themeMeta(week.slug).subFr : themeMeta(week.slug).subEn) ||
                `${week.total} ${T.wordsWord}`}
            </TX>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 14 }}>
              <View style={{ flex: 1 }}>
                <ProgressBar pct={week.total ? (week.learned / week.total) * 100 : 0} height={3} color={t.acc} track={t.line(10)} />
                <TX role="meta" color={t.txSubtle} style={{ marginTop: 6 }}>
                  {T.stepOf.replace('{a}', String(weekPos?.step ?? 1)).replace('{b}', String(PARCOURS_STEPS.length))}
                </TX>
              </View>
              <View style={{ height: 40, paddingHorizontal: 20, borderRadius: 20, backgroundColor: t.acc, alignItems: 'center', justifyContent: 'center' }}>
                <TX font="semi" role="bodySm" color={t.accInk}>
                  {T.themeContinue}
                </TX>
              </View>
            </View>
          </Press>
        ) : null}

        {/* Theme grid */}
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 12 }}>
          {grid.map((th) => {
            const meta = themeMeta(th.slug);
            const pos = positions[th.slug];
            const range =
              th.levels.length > 1
                ? `${levelLabel(th.levels[0])} · ${levelLabel(th.levels[th.levels.length - 1])}`
                : levelLabel(th.levels[0]);
            return (
              <Press key={th.slug} onPress={() => openTheme(th.slug)} scale={0.98} style={{ width: '47.5%', minHeight: 132, borderRadius: 18, borderWidth: 1, borderColor: t.line(9), backgroundColor: t.card, ...t.cardShadow, padding: 16 }}>
                <TX font="serifI" size={24} role="display" color={t.accTx}>
                  {meta.fr.replace(/^(Au |Le |La |Les |L')/, '').charAt(0).toUpperCase()}.
                </TX>
                <TX font="semi" role="body" style={{ marginTop: 10 }} numberOfLines={1}>
                  {meta.fr}
                </TX>
                <TX role="meta" color={t.txMuted} style={{ marginTop: 3 }} numberOfLines={1}>
                  {`${range} · ${PARCOURS_STEPS.length} ${lang === 'fr' ? 'étapes' : 'steps'}`}
                </TX>
                <View style={{ marginTop: 'auto', paddingTop: 12, flexDirection: 'row', alignItems: 'center', gap: 6 }}>
                  {pos?.done ? (
                    <>
                      <TX font="semi" role="eyebrow" ls={1.6} color={t.accTx}>
                        {T.doneTag}
                      </TX>
                      <Icon name="check" size={11} color={t.accTx} strokeWidth={2.2} />
                    </>
                  ) : pos?.fresh ? (
                    <TX font="semi" role="eyebrow" ls={1.6} color={t.txSubtle}>
                      {T.newTag}
                    </TX>
                  ) : (
                    <TX font="semi" role="eyebrow" ls={1.6} color={t.txMuted}>
                      {T.stepOf.replace('{a}', String(pos?.step ?? 1)).replace('{b}', String(PARCOURS_STEPS.length))}
                    </TX>
                  )}
                </View>
              </Press>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
}
