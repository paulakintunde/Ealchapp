import { useMemo } from 'react';
import { ScrollView, View } from 'react-native';
import { useRouter } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Svg, { Circle } from 'react-native-svg';
import { TX } from '@/components/Type';
import { Press, ProgressBar, FocusHeader } from '@/components/ui';
import { useTheme } from '@/theme/useTheme';
import { useT } from '@/i18n/useT';
import { useProgress } from '@/store/useProgress';
import { statsByItem, weakestItems, type Activity, type AttemptVerdict } from '@/store/progress.logic';
import { content } from '@/services/content';

// Le Rapport — the honest version. Every number here is a view over the attempt
// log (progress.logic.ts); nothing is sampled or hardcoded. Before this the whole
// screen was a fabrication, openly labelled "shown with sample data" (review
// §feedback). It now says only what the log actually knows: how accurate the
// learner has been, per drill, and which words they keep getting wrong.

// Confidence ring — SVG circular progress (r=52 → circumference ≈ 326.7).
function ConfidenceRing({ pct, score, label }: { pct: number; score: string; label: string }) {
  const t = useTheme();
  const C = 2 * Math.PI * 52;
  const offset = C * (1 - pct);
  return (
    <View style={{ alignItems: 'center', gap: 6 }}>
      <View style={{ width: 120, height: 120 }}>
        <Svg width={120} height={120} viewBox="0 0 120 120">
          <Circle cx={60} cy={60} r={52} fill="none" stroke={t.line(9)} strokeWidth={5} />
          <Circle
            cx={60}
            cy={60}
            r={52}
            fill="none"
            stroke={t.acc}
            strokeWidth={5}
            strokeLinecap="round"
            strokeDasharray={C}
            strokeDashoffset={offset}
            transform="rotate(-90 60 60)"
          />
        </Svg>
        <View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, alignItems: 'center', justifyContent: 'center' }}>
          <TX font="serif" role="display" size={36}>
            {score}
          </TX>
        </View>
      </View>
      {/* Outside the ring: a caps label at large font scale cannot fit inside a
          fixed 120px circle without shrinking below the size this pass exists to fix. */}
      <TX font="semi" role="eyebrow" ls={1.8} color={t.txMuted} center>
        {label}
      </TX>
    </View>
  );
}

export default function Feedback() {
  const t = useTheme();
  const T = useT();
  const router = useRouter();
  const insets = useSafeAreaInsets();

  // Reactive: an attempt logged this session updates the report live.
  const attempts = useProgress((s) => s.attempts);

  const drillName = (act: Activity) => (T.drillNames as Record<string, string>)[act] ?? act;
  const verdictColor = (v: AttemptVerdict) =>
    v === 'good' ? t.accTx : v === 'close' ? t.txPrimary : t.danger;

  const report = useMemo(() => {
    const total = attempts.length;
    const correct = attempts.filter((a) => a.correct).length;

    // Accuracy per drill, in log order of first appearance, richest first.
    const perDrill = new Map<Activity, { seen: number; correct: number }>();
    for (const a of attempts) {
      const cur = perDrill.get(a.activity) ?? { seen: 0, correct: 0 };
      cur.seen += 1;
      if (a.correct) cur.correct += 1;
      perDrill.set(a.activity, cur);
    }
    const byDrill = [...perDrill.entries()]
      .map(([activity, v]) => ({ activity, seen: v.seen, pct: Math.round((v.correct / v.seen) * 100) }))
      .sort((a, b) => b.seen - a.seen);

    // The review queue: weakest first, but only items not yet solid (a perfect
    // item does not belong on a "to review" list).
    const weak = weakestItems(attempts)
      .filter((s) => s.ratio < 1 || !s.lastCorrect)
      .slice(0, 6)
      .map((s) => {
        const item = content.item(s.itemId);
        return {
          itemId: s.itemId,
          fr: item?.fr ?? s.lastExpected,
          en: item?.en ?? '',
          seen: s.seen,
          correct: Math.round(s.ratio * s.seen),
          lastVerdict: s.lastVerdict,
        };
      });

    return { total, correct, accuracy: total ? correct / total : 0, byDrill, weak };
  }, [attempts]);

  const empty = report.total === 0;

  return (
    <View style={{ flex: 1, backgroundColor: t.bg }}>
      <View style={{ paddingTop: insets.top }}>
        <FocusHeader onClose={() => router.replace('/home')} onSettings={() => router.push('/settings')} />
      </View>
      <ScrollView contentContainerStyle={{ paddingHorizontal: 26, paddingTop: 8, paddingBottom: insets.bottom + 40, flexGrow: 1 }} showsVerticalScrollIndicator={false}>
        {/* Kicker + title */}
        <TX font="semi" role="meta" ls={2.8} color={t.txSubtle} style={{ marginBottom: 10 }}>
          {T.reportTag}
        </TX>
        <TX font="serif" role="display" size={38} style={{ marginBottom: 6 }}>
          Le Rapport
        </TX>
        <TX role="bodySm" color={t.txMuted} style={{ marginBottom: 24 }}>
          {T.reportSub}
        </TX>

        {empty ? (
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 20, paddingTop: 40 }}>
            <TX font="serifI" size={26} role="display" center style={{ marginBottom: 10 }}>
              {T.reportEmptyT}
            </TX>
            <TX role="bodySm" center lhMult={1.6} color={t.txMuted} style={{ maxWidth: 300, marginBottom: 30 }}>
              {T.reportEmptyS}
            </TX>
            <Press onPress={() => router.replace('/home')} style={{ minHeight: 50, paddingVertical: 6, paddingHorizontal: 30, borderRadius: 25, backgroundColor: t.acc, alignItems: 'center', justifyContent: 'center' }}>
              <TX font="semi" role="body" color={t.accInk}>
                {T.backFeed}
              </TX>
            </Press>
          </View>
        ) : (
          <>
            {/* Accuracy ring + attempt tally */}
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 24, marginBottom: 30 }}>
              <ConfidenceRing pct={report.accuracy} score={String(Math.round(report.accuracy * 100))} label={T.accuracyLabel} />
              <View style={{ flex: 1, gap: 8 }}>
                <TX font="serif" role="display" size={30} color={t.accTx}>
                  {report.correct} / {report.total}
                </TX>
                <TX role="label" color={t.txMuted}>
                  {T.attemptsLabel.replace('{n}', String(report.total))}
                </TX>
              </View>
            </View>

            {/* Accuracy by drill — real per-activity coverage */}
            {report.byDrill.length ? (
              <>
                <TX font="semi" role="meta" ls={2.4} color={t.txSubtle} style={{ marginBottom: 14 }}>
                  {T.byDrillT}
                </TX>
                <View style={{ gap: 14, marginBottom: 32 }}>
                  {report.byDrill.map((d) => (
                    <View key={d.activity}>
                      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 7 }}>
                        <TX font="semi" role="label" ls={0.7}>
                          {drillName(d.activity)}
                        </TX>
                        <TX role="label" color={t.txMuted}>
                          {d.pct}% · {T.attemptsLabel.replace('{n}', String(d.seen))}
                        </TX>
                      </View>
                      <ProgressBar pct={d.pct} height={3} />
                    </View>
                  ))}
                </View>
              </>
            ) : null}

            {/* To review — the weakest items, straight from the attempt log */}
            <TX font="serif" role="display" size={22} style={{ marginBottom: 14 }}>
              {T.review}
            </TX>
            {report.weak.length ? (
              <View style={{ gap: 10, marginBottom: 30 }}>
                {report.weak.map((w) => (
                  <View key={w.itemId} style={{ borderRadius: 16, borderWidth: 1, borderColor: t.line(7), backgroundColor: t.card, padding: 15, paddingHorizontal: 17 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>
                      <View style={{ flex: 1, minWidth: 0 }}>
                        <TX font="serifI" role="titleLg" size={19} style={{ marginBottom: 3 }}>
                          « {w.fr} »
                        </TX>
                        {w.en ? (
                          <TX role="label" color={t.txMuted} numberOfLines={1}>
                            {w.en}
                          </TX>
                        ) : null}
                      </View>
                      <View style={{ alignItems: 'flex-end', gap: 4 }}>
                        <TX font="semi" role="label" color={verdictColor(w.lastVerdict)}>
                          {w.correct}/{w.seen}
                        </TX>
                        <View style={{ width: 8, height: 8, borderRadius: 4, backgroundColor: verdictColor(w.lastVerdict) }} />
                      </View>
                    </View>
                  </View>
                ))}
              </View>
            ) : (
              <View style={{ borderRadius: 16, borderWidth: 1, borderColor: t.accA(30), backgroundColor: t.accA(6), padding: 18, marginBottom: 30 }}>
                <TX role="bodySm" color={t.txSecondary} lhMult={1.5}>
                  {T.reviewNone}
                </TX>
              </View>
            )}

            {/* Action — practise the weak words for real (Voice Flash reads the
                same corpus these items came from). */}
            {report.weak.length ? (
              <Press onPress={() => router.push('/voiceflash')} style={{ minHeight: 52, paddingVertical: 6, borderRadius: 26, backgroundColor: t.acc, alignItems: 'center', justifyContent: 'center' }}>
                <TX font="semi" role="body" color={t.accInk}>
                  {T.practiceWeak}
                </TX>
              </Press>
            ) : null}
          </>
        )}
      </ScrollView>
    </View>
  );
}
