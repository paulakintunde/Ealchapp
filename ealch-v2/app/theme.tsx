import { useMemo, useState } from 'react';
import { ScrollView, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { TX } from '@/components/Type';
import { Press, FocusHeader, ProgressBar } from '@/components/ui';
import { Icon } from '@/components/Icon';
import { useTheme } from '@/theme/useTheme';
import { useT } from '@/i18n/useT';
import { useStore } from '@/store/useStore';
import { useProgress } from '@/store/useProgress';
import { useContent } from '@/services/content';
import { parcoursSteps, themeLevels, PARCOURS_STEPS, type StepStat } from '@/content/theme.logic';
import { themeMeta } from '@/content/themeMeta';
import { LEVELS, type Level } from '@/content/schema';

const levelLabel = (l: Level) => (l === 'sons' ? 'SONS' : l.toUpperCase());

/** Route for one step's drill, carrying the theme/level filter. The scene goes
 *  to roleplay with the same query; roleplay resolves the scenario itself. */
const stepRoute = (drill: StepStat['drill'], slug: string, level?: Level) => {
  const q = `?theme=${slug}${level ? `&level=${level}` : ''}`;
  switch (drill) {
    case 'flashcard': return `/flashcards${q}`;
    case 'sentence': return `/sentence${q}`;
    case 'voiceflash': return `/voiceflash${q}`;
    case 'dictation': return `/dictation${q}`;
    default: return `/roleplay${q}`;
  }
};

export default function ThemeDetail() {
  const t = useTheme();
  const T = useT();
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const lang = useStore((s) => s.lang);
  const corpus = useContent((s) => s.corpus);
  const attempts = useProgress((s) => s.attempts);

  const { slug = '', level: levelParam } = useLocalSearchParams<{ slug?: string; level?: string }>();
  const meta = themeMeta(slug);

  const levels = useMemo(() => themeLevels(corpus.items, corpus.scenarios, slug), [corpus, slug]);
  const [band, setBand] = useState<Level | undefined>(() =>
    LEVELS.includes(levelParam as Level) && levels.includes(levelParam as Level) ? (levelParam as Level) : levels[0]
  );

  const steps = useMemo(
    () => parcoursSteps(corpus.items, corpus.scenarios, attempts, slug, band),
    [corpus, attempts, slug, band]
  );
  const lastContentIx = steps.reduce((acc, s, i) => (s.state === 'empty' ? acc : i), -1);

  return (
    <View style={{ flex: 1, backgroundColor: t.bg, paddingTop: insets.top }}>
      <LinearGradient
        colors={[t.accA(11), 'transparent']}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 0.5 }}
        style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 340 }}
      />
      <FocusHeader onClose={() => router.back()} onSettings={() => router.push('/settings')} title={T.themeTag} />
      <ScrollView contentContainerStyle={{ paddingHorizontal: 24, paddingBottom: insets.bottom + 40 }} showsVerticalScrollIndicator={false}>
        <TX font="serifI" size={38} role="display" style={{ marginBottom: 8 }}>
          {meta.fr}.
        </TX>
        {(lang === 'fr' ? meta.subFr : meta.subEn) ? (
          <TX role="bodySm" color={t.txMuted} style={{ marginBottom: 20, maxWidth: 300 }} lhMult={1.45}>
            {lang === 'fr' ? meta.subFr : meta.subEn}
          </TX>
        ) : null}

        {/* Level chips: only bands with content in this theme are pressable. */}
        <TX font="semi" role="eyebrow" ls={2.2} color={t.txSubtle} style={{ marginBottom: 10 }}>
          {T.levelWord}
        </TX>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginHorizontal: -24, marginBottom: 26 }} contentContainerStyle={{ paddingHorizontal: 24, gap: 8 }}>
          {LEVELS.map((l) => {
            const has = levels.includes(l);
            const on = band === l;
            return (
              <Press
                key={l}
                onPress={has ? () => setBand(l) : undefined}
                accessibilityRole="button"
                accessibilityState={{ selected: on, disabled: !has }}
                style={{
                  minHeight: 34,
                  paddingVertical: 6,
                  paddingHorizontal: 15,
                  borderRadius: 17,
                  borderWidth: 1,
                  borderColor: on ? t.acc : t.line(has ? 14 : 7),
                  backgroundColor: on ? t.acc : 'transparent',
                  justifyContent: 'center',
                  opacity: has ? 1 : 0.45,
                }}
              >
                <TX font="semi" role="meta" ls={0.8} color={on ? t.accInk : has ? t.txMuted : t.txSubtle}>
                  {levelLabel(l)}
                </TX>
              </Press>
            );
          })}
        </ScrollView>

        <TX font="semi" role="eyebrow" ls={2.2} color={t.txSubtle} style={{ marginBottom: 6 }}>
          {T.parcoursHead.replace('{n}', String(PARCOURS_STEPS.length))}
        </TX>
        <TX role="meta" color={t.txMuted} style={{ marginBottom: 14 }}>
          {T.parcoursSub}
        </TX>

        <View style={{ gap: 10 }}>
          {steps.map((s, i) => {
            const open = s.state === 'open';
            const done = s.state === 'done';
            const finale = i === lastContentIx && !done && !open && s.state !== 'empty';
            const tappable = open || done;
            const rightTag = done
              ? null
              : open
                ? T.inProgressTag
                : s.state === 'empty'
                  ? T.noContent
                  : finale
                    ? T.finaleTag
                    : T.lockedTag;
            return (
              <Press
                key={s.key}
                onPress={tappable ? () => router.push(stepRoute(s.drill, slug, band) as never) : undefined}
                scale={tappable ? 0.99 : 1}
                accessibilityRole="button"
                accessibilityState={{ disabled: !tappable }}
                style={{
                  borderRadius: 18,
                  borderWidth: 1,
                  borderColor: open ? t.accA(55) : t.line(done ? 12 : 7),
                  backgroundColor: open ? t.accCard(8) : t.card,
                  ...t.cardShadow,
                  padding: 16,
                  paddingHorizontal: 18,
                  opacity: tappable || s.state === 'empty' ? 1 : 0.6,
                }}
              >
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 14 }}>
                  <View
                    style={{
                      width: 34,
                      height: 34,
                      borderRadius: 17,
                      borderWidth: done ? 0 : 1,
                      borderColor: open ? t.acc : t.line(16),
                      backgroundColor: done ? t.acc : 'transparent',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {done ? (
                      <Icon name="check" size={15} color={t.accInk} strokeWidth={2.4} />
                    ) : (
                      <TX font="semi" role="bodySm" color={open ? t.accTx : t.txSubtle}>
                        {i + 1}
                      </TX>
                    )}
                  </View>
                  <View style={{ flex: 1, minWidth: 0 }}>
                    <TX font="semi" role="body" numberOfLines={1}>
                      {T.stepNames[s.key]}
                    </TX>
                    <TX font="serifI" role="meta" color={t.txMuted} numberOfLines={1} style={{ marginTop: 2 }}>
                      {T.stepSubs[s.key]}
                    </TX>
                  </View>
                  {done ? (
                    <TX role="meta" color={t.accTx}>
                      {s.learned}/{s.total}
                    </TX>
                  ) : rightTag ? (
                    <TX font="semi" role="eyebrow" ls={1.4} color={open ? t.accTx : t.txSubtle}>
                      {rightTag}
                    </TX>
                  ) : null}
                </View>
                {open ? (
                  <View style={{ marginTop: 14 }}>
                    <ProgressBar pct={s.total ? (s.learned / s.total) * 100 : 0} height={3} color={t.acc} track={t.line(10)} />
                    <View style={{ marginTop: 12, minHeight: 44, borderRadius: 22, backgroundColor: t.acc, alignItems: 'center', justifyContent: 'center' }}>
                      <TX font="semi" role="bodySm" color={t.accInk}>
                        {`${T.themeContinue} · ${s.learned}/${s.total}`}
                      </TX>
                    </View>
                  </View>
                ) : null}
              </Press>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
}
