import { useMemo } from 'react';
import { ScrollView, View } from 'react-native';
import { useRouter } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Svg, { Circle, Path } from 'react-native-svg';
import { TX } from '@/components/Type';
import { Press, FocusHeader } from '@/components/ui';
import { useTheme } from '@/theme/useTheme';
import { useT } from '@/i18n/useT';
import { useProgress } from '@/store/useProgress';
import { dueCards, upcomingCards, daysBetween, localDay, type SrsCard } from '@/store/progress.logic';
import { content } from '@/services/content';

// Smart Review — the launcher for the spaced-repetition queue. Every number is
// real now: the count, the "up next" list and the "next due" days all come from
// srsCards() folded over the attempt log (progress.logic.ts). Before this the
// screen showed a fixed 23 items "collected from 4 activities this week" and a
// manual `reviewCleared` flag — pure fiction (review §smartreview).

// Small pill chip.
function Chip({ name, n }: { name: string; n: string }) {
  const t = useTheme();
  return (
    <View style={{ minHeight: 30, paddingVertical: 4, paddingHorizontal: 13, borderRadius: 15, backgroundColor: t.card2, flexDirection: 'row', alignItems: 'center', gap: 6 }}>
      <TX font="semi" role="label" numberOfLines={1}>
        {name}
      </TX>
      <TX font="semi" role="label" color={t.accTx}>
        {n}
      </TX>
    </View>
  );
}

export default function SmartReview() {
  const t = useTheme();
  const T = useT();
  const router = useRouter();
  const insets = useSafeAreaInsets();

  const attempts = useProgress((s) => s.attempts);
  const today = localDay();
  const due = useMemo(() => dueCards(attempts, today), [attempts, today]);
  const upcoming = useMemo(() => upcomingCards(attempts, today, 4), [attempts, today]);

  // A due card's ring fill, and the French/English behind each id.
  const frOf = (c: SrsCard) => content.item(c.itemId)?.fr ?? c.itemId;
  const enOf = (c: SrsCard) => content.item(c.itemId)?.en ?? '';
  const dueLabel = (c: SrsCard) => {
    const d = daysBetween(today, c.dueDay);
    return d <= 1 ? T.srTomorrow : T.srInDays.replace('{n}', String(d));
  };

  const neverPractised = attempts.length === 0;

  return (
    <View style={{ flex: 1, backgroundColor: t.bg }}>
      <View style={{ paddingTop: insets.top }}>
        <FocusHeader onClose={() => router.replace('/home')} onSettings={() => router.push('/settings')} />
      </View>
      <ScrollView contentContainerStyle={{ paddingHorizontal: 24, paddingTop: 6, paddingBottom: insets.bottom + 40, flexGrow: 1 }} showsVerticalScrollIndicator={false}>
        {/* Kicker row */}
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 22 }}>
          <TX font="semi" role="eyebrow" ls={2.6} color={t.txSubtle}>
            {T.smartReviewT.toUpperCase()}
          </TX>
          <View style={{ minHeight: 22, paddingVertical: 3, paddingHorizontal: 10, borderRadius: 11, borderWidth: 1, borderColor: t.accA(40), alignItems: 'center', justifyContent: 'center' }}>
            <TX font="bold" role="eyebrow" ls={1.2} color={t.accTx}>
              SRS
            </TX>
          </View>
        </View>

        {due.length === 0 ? (
          // ── Nothing due: brand-new (never practised) or all caught up ──
          <View style={{ alignItems: 'center', paddingTop: 40, flex: 1 }}>
            <View style={{ width: 96, height: 96, borderRadius: 48, borderWidth: 1.5, borderColor: t.accA(55), backgroundColor: t.accA(10), alignItems: 'center', justifyContent: 'center', marginBottom: 24 }}>
              <Svg width={36} height={28} viewBox="0 0 36 28" fill="none">
                <Path d="M2 15l10 10L34 3" stroke={t.acc} strokeWidth={3.5} strokeLinecap="round" strokeLinejoin="round" />
              </Svg>
            </View>
            <TX font="serifI" role="display" size={36} center style={{ marginBottom: 12 }}>
              {neverPractised ? T.srEmptyT : T.allCaught}
            </TX>
            <TX role="bodySm" lhMult={1.7} color={t.txSecondary} center style={{ maxWidth: 290, marginBottom: 30 }}>
              {neverPractised ? T.srEmptyS : T.allCaughtS}
            </TX>

            {/* Real next-due preview, when there is any scheduled work ahead. */}
            {upcoming.length ? (
              <>
                <TX font="semi" role="eyebrow" ls={2.4} color={t.txSubtle} style={{ marginBottom: 12 }}>
                  {T.nextDue}
                </TX>
                <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', gap: 8, marginBottom: 30 }}>
                  {upcoming.map((c) => (
                    <Chip key={c.itemId} name={frOf(c)} n={dueLabel(c)} />
                  ))}
                </View>
              </>
            ) : null}

            <Press onPress={() => router.replace('/home')} style={{ alignSelf: 'stretch', minHeight: 52, paddingVertical: 8, borderRadius: 26, backgroundColor: t.acc, alignItems: 'center', justifyContent: 'center' }}>
              <TX font="semi" role="body" color={t.accInk}>
                {T.backFeed}
              </TX>
            </Press>
          </View>
        ) : (
          // ── Due today launcher ──
          <View>
            <TX font="serifI" role="display" size={38} style={{ marginBottom: 20 }}>
              {T.srDueTitle}
            </TX>

            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 22, marginBottom: 26 }}>
              <View style={{ width: 112, height: 112, alignItems: 'center', justifyContent: 'center' }}>
                <Svg width={112} height={112} viewBox="0 0 112 112" style={{ position: 'absolute' }}>
                  <Circle cx={56} cy={56} r={49} fill="none" stroke={t.line(8)} strokeWidth={7} />
                  <Circle cx={56} cy={56} r={49} fill="none" stroke={t.acc} strokeWidth={7} strokeLinecap="round" strokeDasharray={2 * Math.PI * 49} transform="rotate(-90 56 56)" />
                </Svg>
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                  <TX font="serif" role="display" size={34}>
                    {due.length}
                  </TX>
                  <TX font="semi" role="eyebrow" ls={1.4} color={t.txSubtle} style={{ textTransform: 'uppercase' }}>
                    {T.srItems}
                  </TX>
                </View>
              </View>
              <TX role="bodySm" lhMult={1.69} color={t.txSecondary} style={{ flex: 1 }}>
                {T.smartReviewS}
              </TX>
            </View>

            {/* Start */}
            <Press onPress={() => router.push('/review')} style={{ minHeight: 52, paddingVertical: 8, borderRadius: 26, backgroundColor: t.acc, alignItems: 'center', justifyContent: 'center', marginBottom: 26 }}>
              <TX font="semi" role="body" color={t.accInk}>
                {T.startReview}
              </TX>
            </Press>

            {/* Up next — the actual due items, weakest first */}
            <TX font="semi" role="meta" ls={2.4} color={t.txSubtle} style={{ marginBottom: 12 }}>
              {T.nextDue}
            </TX>
            <View style={{ gap: 10, marginBottom: 16 }}>
              {due.slice(0, 6).map((c) => (
                <View key={c.itemId} style={{ borderRadius: 16, borderWidth: 1, borderColor: t.line(7), backgroundColor: t.card, ...t.cardShadow, paddingVertical: 14, paddingHorizontal: 16, flexDirection: 'row', alignItems: 'center', gap: 12 }}>
                  <View style={{ flex: 1, minWidth: 0 }}>
                    <TX font="serif" role="titleLg" size={19} numberOfLines={1}>
                      {frOf(c)}
                    </TX>
                    {enOf(c) ? (
                      <TX role="meta" color={t.txSubtle} style={{ marginTop: 2 }} numberOfLines={1}>
                        {enOf(c)}
                      </TX>
                    ) : null}
                  </View>
                  <View style={{ minHeight: 20, paddingVertical: 2, paddingHorizontal: 9, borderRadius: 10, backgroundColor: t.accA(12), alignItems: 'center', justifyContent: 'center' }}>
                    <TX font="bold" role="eyebrow" ls={1} color={t.accTx}>
                      ×{c.seen}
                    </TX>
                  </View>
                </View>
              ))}
            </View>

            <TX font="serifI" role="meta" color={t.txSubtle} center>
              {T.srLadder}
            </TX>
          </View>
        )}
      </ScrollView>
    </View>
  );
}
