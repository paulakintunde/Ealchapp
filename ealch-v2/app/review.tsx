import { useEffect, useMemo, useState } from 'react';
import { ScrollView, View } from 'react-native';
import { useRouter } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Svg, { Path } from 'react-native-svg';
import { TX } from '@/components/Type';
import { Press, FocusHeader, ProgressBar } from '@/components/ui';
import { Icon } from '@/components/Icon';
import { useTheme } from '@/theme/useTheme';
import { useT } from '@/i18n/useT';
import { useProgress, useSessionLog } from '@/store/useProgress';
import { dueCards, localDay } from '@/store/progress.logic';
import { content } from '@/services/content';
import { sound, tts } from '@/services';
import { useReadingBrightness } from '@/hooks/useReadingBrightness';

// The review session — a real spaced-repetition pass over the items the scheduler
// says are due. Each card is a recall test (see the English, produce the French);
// "Got it" and "Again" log a genuine attempt against the item, which is exactly
// what advances or resets its interval next time. Before this the deck was a
// hardcoded fixture and finishing just flipped a `reviewCleared` boolean.

export default function Review() {
  const t = useTheme();
  const T = useT();
  const router = useRouter();
  const insets = useSafeAreaInsets();
  useReadingBrightness();

  const logAttempt = useProgress((s) => s.logAttempt);
  const logSession = useSessionLog();

  // Snapshot the queue at mount. Logging attempts as we go reshuffles dueCards,
  // so we freeze THIS session's list and let the scheduler re-evaluate next time.
  const queue = useMemo(() => {
    const today = localDay();
    return dueCards(useProgress.getState().attempts, today)
      .map((c) => ({ card: c, item: content.item(c.itemId) }))
      .filter((x): x is { card: typeof x.card; item: NonNullable<typeof x.item> } => x.item != null)
      .map((x) => ({ id: x.card.itemId, fr: x.item.fr, en: x.item.en, example: x.item.example, seen: x.card.seen }));
  }, []);

  const [ix, setIx] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const [got, setGot] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => () => tts.stop(), []);

  const total = queue.length;
  const q = queue[Math.min(ix, total - 1)];
  const pct = total ? ((ix + (revealed ? 0.5 : 0)) / total) * 100 : 0;

  const reveal = () => {
    sound.play('flip');
    setRevealed(true);
    if (q) tts.speak(q.fr);
  };

  const grade = (pass: boolean) => {
    // The one line that makes review real: a graded attempt against the item,
    // which the scheduler folds into the interval on the next visit.
    logAttempt({
      activity: 'review',
      itemId: q.id,
      expected: q.fr,
      heard: '',
      score: pass ? 1 : 0,
      verdict: pass ? 'good' : 'off',
      correct: pass,
      // Smart Review prompts with the English and expects the French back, so
      // this is production — self-rated, but the recall direction is what makes
      // it production, not whether a mic was involved.
      modality: 'produce',
    });
    if (pass) setGot((g) => g + 1);

    const next = ix + 1;
    if (next >= total) {
      sound.play('ding');
      logSession('review');
      setDone(true);
    } else {
      sound.play('tap');
      setIx(next);
      setRevealed(false);
    }
  };

  // Reached with an empty queue (deep link, or every due item orphaned from the
  // corpus): say so honestly rather than render a blank card.
  if (total === 0) {
    return (
      <View style={{ flex: 1, backgroundColor: t.bg }}>
        <View style={{ paddingTop: insets.top }}>
          <FocusHeader onClose={() => router.replace('/home')} onSettings={() => router.push('/settings')} />
        </View>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 30 }}>
          <TX font="serifI" size={30} role="display" center style={{ marginBottom: 20 }}>
            {T.allCaught}
          </TX>
          <Press onPress={() => router.replace('/home')} style={{ minHeight: 50, paddingVertical: 6, paddingHorizontal: 30, borderRadius: 25, backgroundColor: t.acc, alignItems: 'center', justifyContent: 'center' }}>
            <TX font="semi" role="body" color={t.accInk}>
              {T.backFeed}
            </TX>
          </Press>
        </View>
      </View>
    );
  }

  if (done) {
    return (
      <View style={{ flex: 1, backgroundColor: t.bg }}>
        <View style={{ paddingTop: insets.top }}>
          <FocusHeader onClose={() => router.replace('/home')} onSettings={() => router.push('/settings')} />
        </View>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 30 }}>
          <View style={{ width: 96, height: 96, borderRadius: 48, borderWidth: 1.5, borderColor: t.accA(55), backgroundColor: t.accA(10), alignItems: 'center', justifyContent: 'center', marginBottom: 24 }}>
            <Svg width={36} height={28} viewBox="0 0 36 28" fill="none">
              <Path d="M2 15l10 10L34 3" stroke={t.acc} strokeWidth={3.5} strokeLinecap="round" strokeLinejoin="round" />
            </Svg>
          </View>
          <TX font="serifI" size={34} role="display" center style={{ marginBottom: 12 }}>
            {T.srDone}
          </TX>
          <TX role="bodySm" lhMult={1.7} color={t.txSecondary} center style={{ maxWidth: 280, marginBottom: 30 }}>
            {T.srDoneS.replace('{n}', String(got)).replace('{m}', String(total))}
          </TX>
          <Press onPress={() => router.replace('/home')} style={{ alignSelf: 'stretch', minHeight: 52, paddingVertical: 8, borderRadius: 26, backgroundColor: t.acc, alignItems: 'center', justifyContent: 'center' }}>
            <TX font="semi" role="body" color={t.accInk}>
              {T.backFeed}
            </TX>
          </Press>
        </View>
      </View>
    );
  }

  return (
    <View style={{ flex: 1, backgroundColor: t.bg }}>
      <View style={{ paddingTop: insets.top }}>
        <FocusHeader onClose={() => router.replace('/home')} onSettings={() => router.push('/settings')} />
      </View>
      <ScrollView contentContainerStyle={{ paddingHorizontal: 24, paddingTop: 6, paddingBottom: insets.bottom + 40, flexGrow: 1 }} showsVerticalScrollIndicator={false}>
        {/* Session header */}
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
          <TX font="semi" role="eyebrow" ls={2.6} color={t.txSubtle}>
            {T.srSession}
          </TX>
          <TX font="semi" role="label" color={t.txMuted}>
            {Math.min(ix + 1, total)} / {total}
          </TX>
        </View>
        <View style={{ marginBottom: 26 }}>
          <ProgressBar pct={pct} height={5} />
        </View>

        {/* Card: see the English, recall the French */}
        <View style={{ borderRadius: 24, borderWidth: 1, borderColor: t.line(8), backgroundColor: t.card, ...t.cardShadow, paddingVertical: 34, paddingHorizontal: 26, minHeight: 260, alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
          <TX font="semi" role="eyebrow" ls={2.4} color={t.txSubtle} style={{ marginBottom: 16 }}>
            {T.frontEn}
          </TX>
          <TX font="serif" role="display" size={34} center>
            {q.en}
          </TX>
          {revealed ? (
            <>
              <View style={{ width: 44, height: 1, backgroundColor: t.line(14), marginVertical: 22 }} />
              <TX font="serifI" role="display" size={30} center color={t.accTx}>
                {q.fr}
              </TX>
              {q.example ? (
                <TX font="serifI" role="label" lhMult={1.6} color={t.txMuted} center style={{ marginTop: 10 }}>
                  {q.example.fr}
                </TX>
              ) : null}
              <Press onPress={() => tts.speak(q.fr)} cue={null} style={{ marginTop: 18, width: 44, height: 44, borderRadius: 22, borderWidth: 1, borderColor: t.accA(50), alignItems: 'center', justifyContent: 'center' }}>
                <Icon name="speaker" size={18} color={t.acc} />
              </Press>
            </>
          ) : null}
        </View>

        {/* Actions */}
        {revealed ? (
          <View style={{ flexDirection: 'row', gap: 10 }}>
            <Press onPress={() => grade(false)} cue={null} style={{ flex: 1, minHeight: 52, paddingVertical: 8, borderRadius: 26, borderWidth: 1, borderColor: t.line(14), alignItems: 'center', justifyContent: 'center' }}>
              <TX font="semi" role="body" color={t.txSecondary}>
                {T.srAgain}
              </TX>
            </Press>
            <Press onPress={() => grade(true)} cue={null} style={{ flex: 1.4, minHeight: 52, paddingVertical: 8, borderRadius: 26, backgroundColor: t.acc, alignItems: 'center', justifyContent: 'center' }}>
              <TX font="semi" role="body" color={t.accInk}>
                {T.srGot} ✓
              </TX>
            </Press>
          </View>
        ) : (
          <Press cue={null} onPress={reveal} style={{ minHeight: 52, paddingVertical: 8, borderRadius: 26, backgroundColor: t.acc, alignItems: 'center', justifyContent: 'center' }}>
            <TX font="semi" role="body" color={t.accInk}>
              {T.srReveal}
            </TX>
          </Press>
        )}

        <TX font="serifI" role="meta" color={t.txSubtle} center style={{ marginTop: 16 }}>
          {T.srAgainNote}
        </TX>
      </ScrollView>
    </View>
  );
}
