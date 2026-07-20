import { useState } from 'react';
import { ScrollView, View } from 'react-native';
import { useRouter } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { TX } from '@/components/Type';
import { Press, FocusHeader, ProgressBar } from '@/components/ui';
import { Icon } from '@/components/Icon';
import { useTheme } from '@/theme/useTheme';
import { useT } from '@/i18n/useT';
import { useStore } from '@/store/useStore';
import { useProgress, useSessionLog } from '@/store/useProgress';
import { placementEstimate, type PlacementAnswer } from '@/store/progress.logic';
import { content, useContent } from '@/services/content';
import { sound, tts } from '@/services';
import type { Item, Track } from '@/content/schema';
import { useFeature } from '@/store/useEntitlement';
import { track as trackEvent } from '@/services/analytics';

// The honest interim placement (Phase 6, CF-16). The old screen was adaptive
// theatre: one hardcoded question behind a fake "Q7", a 58% bar, a mocked A2
// result, and a "the test ends when your level is confident" promise — and it
// wrote nothing anywhere. This one claims less and does more: a fixed quick
// check of recognition questions drawn from the shipped corpus, graded per band
// (placementEstimate in progress.logic.ts). Every answer logs a real
// AttemptEntry, so the check itself seeds the SRS; the estimate is written to
// the store level the rest of the app reads; and the starting unit is derived
// from the corpus, never hardcoded. The full adaptive probe waits for a
// calibrated item bank (authored via Phase 2) — until then the copy says
// "quick check" and promises nothing it cannot keep.

type Question = { item: Item; opts: string[]; answer: number };

/** Questions drawn per band. With ~2 minutes of attention this is the budget:
 *  up to 6 a1 + 6 a2, fewer if the corpus holds fewer. */
const PER_BAND = 6;

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/** Recognition QCM over the corpus: see the French, pick the English. a1
 *  questions come first, then a2 — easy to hard, which is honest ordering, not
 *  adaptivity. Distractors are other items' glosses; anything without a
 *  distinct gloss (or any full sentence) is left out of the bank. */
function buildQuickCheck(items: Item[]): Question[] {
  const pool = items.filter((i) => i.kind !== 'sentence' && i.fr.trim() && i.en.trim());
  const band = (lvl: Item['level']) => shuffle(pool.filter((i) => i.level === lvl)).slice(0, PER_BAND);
  return [...band('a1'), ...band('a2')].map((item) => {
    const distractors = shuffle(pool.filter((p) => p.id !== item.id && p.en !== item.en))
      .slice(0, 3)
      .map((p) => p.en);
    const opts = shuffle([item.en, ...distractors]);
    return { item, opts, answer: opts.indexOf(item.en) };
  });
}

export default function Placement() {
  const t = useTheme();
  const T = useT();
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const setField = useStore((s) => s.setField);
  const logAttempt = useProgress((s) => s.logAttempt);
  const logSession = useSessionLog();

  // The bank is snapshotted once per run; a retake reshuffles, so a different
  // responder (or the same one, again) meets a different draw and order.
  const [questions, setQuestions] = useState<Question[]>(() =>
    buildQuickCheck(useContent.getState().corpus.items)
  );
  const [qIx, setQIx] = useState(0);
  const [sel, setSel] = useState<number | null>(null);
  const [answers, setAnswers] = useState<PlacementAnswer[]>([]);
  const [est, setEst] = useState<'A0' | 'A1' | 'A2' | null>(null);

  const n = questions.length;
  const q = questions[qIx];

  const pick = (i: number) => {
    if (sel !== null || !q) return;
    const correct = i === q.answer;
    sound.play(correct ? 'success' : 'tap');
    setSel(i);
    setAnswers((a) => [...a, { level: q.item.level, correct }]);
    // A real attempt against a real item id: the quick check is the learner's
    // first practice, not a gate before it, so it seeds the SRS directly.
    logAttempt({
      activity: 'placement',
      itemId: q.item.id,
      expected: q.item.fr,
      heard: q.opts[i],
      score: correct ? 1 : 0,
      verdict: correct ? 'good' : 'off',
      correct,
      modality: 'recognise',
    });
  };

  const advance = () => {
    sound.play('ding');
    if (qIx + 1 < n) {
      setQIx((i) => i + 1);
      setSel(null);
      return;
    }
    // Finished: grade, write the level the rest of the app reads, log the time.
    const graded = placementEstimate(answers);
    setField('level', graded);
    logSession('placement');
    setEst(graded);
    // Paywall trigger point 1 (master plan): placement just wrote a level.
    // When the graded plan reaches past the free bands, the result screen
    // offers Première contextually — an offer card, never a hijacked flow.
    if (graded === 'A2') trackEvent('placement_paywall_offered', { level: graded });
  };

  const redo = () => {
    sound.play('tap');
    setQuestions(buildQuickCheck(useContent.getState().corpus.items));
    setQIx(0);
    setSel(null);
    setAnswers([]);
    setEst(null);
  };

  // The starting unit is derived from the corpus: the first unit of the track
  // the estimate points at that actually has a lesson. If none exists yet, the
  // CTA falls back to the Den rather than promising a unit that is not there.
  const startTrack: Track = est === 'A2' ? 'a2' : est === 'A1' ? 'a1' : 'sons';
  const startUnit = est ? (content.units(startTrack).find((u) => u.lessonIds.length > 0) ?? null) : null;
  const begin = () => {
    sound.play('tap');
    if (startUnit) router.push({ pathname: '/lesson', params: { key: startUnit.lessonIds[0] } });
    else router.push('/den');
  };

  const right = answers.filter((a) => a.correct).length;
  const resCopy = est === 'A2' ? T.plResA2 : est === 'A1' ? T.plResA1 : T.plResA0;
  const levelsAll = useFeature('levels.all');
  const offerPremiere = est === 'A2' && !levelsAll;

  return (
    <View style={{ flex: 1, backgroundColor: t.bg }}>
      <View style={{ paddingTop: insets.top }}>
        <FocusHeader onClose={() => router.replace('/home')} onSettings={() => router.push('/settings')} />
      </View>
      <ScrollView contentContainerStyle={{ paddingHorizontal: 24, paddingTop: 6, paddingBottom: insets.bottom + 40 }} showsVerticalScrollIndicator={false}>
        <TX font="semi" role="eyebrow" ls={2.6} color={t.txSubtle} center style={{ marginBottom: 22 }}>
          {T.placementT.toUpperCase()}
        </TX>

        {n === 0 ? (
          // A corpus too thin to draw a bank from. Should not happen with the
          // bundled seed, but a blank quiz must never render as a broken one.
          <View style={{ alignItems: 'center', paddingTop: 30 }}>
            <TX role="bodySm" lhMult={1.7} color={t.txSecondary} center style={{ maxWidth: 290, marginBottom: 26 }}>
              {T.plNoBank}
            </TX>
            <Press onPress={() => router.replace('/den')} style={{ alignSelf: 'stretch', minHeight: 52, paddingVertical: 8, borderRadius: 26, backgroundColor: t.acc, alignItems: 'center', justifyContent: 'center' }}>
              <TX font="semi" role="body" color={t.accInk}>
                {T.backFeed}
              </TX>
            </Press>
          </View>
        ) : est === null ? (
          <View>
            {/* Real progress: the actual question index over the actual bank. */}
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12, marginBottom: 24 }}>
              <View style={{ flex: 1 }}>
                <ProgressBar pct={(qIx / n) * 100} height={5} color={t.acc} track={t.line(8)} />
              </View>
              <TX font="semi" role="label" color={t.txMuted}>
                {qIx + 1} / {n}
              </TX>
            </View>

            <TX font="serif" role="display" size={26} lhMult={1.23} style={{ marginBottom: 20 }}>
              {T.plWhatMean}
            </TX>

            {/* The word — with its sound, because recognising French includes
                recognising it spoken. Playback is on demand, never a surprise. */}
            <View style={{ borderRadius: 20, borderWidth: 1, borderColor: t.line(8), backgroundColor: t.card, padding: 22, marginBottom: 20, flexDirection: 'row', alignItems: 'center', gap: 16 }}>
              <Press cue="tap" onPress={() => tts.speak(q.item.fr)} style={{ width: 52, height: 52, borderRadius: 26, backgroundColor: t.acc, alignItems: 'center', justifyContent: 'center' }}>
                <Icon name="play" size={16} color={t.accInk} />
              </Press>
              <TX font="serifI" role="display" size={30} style={{ flex: 1, minWidth: 0 }}>
                {q.item.fr}
              </TX>
            </View>

            {/* Options. After a pick the correct gloss is shown — a check the
                learner learns from, not a silent tally. */}
            <View style={{ gap: 10, marginBottom: 22 }}>
              {q.opts.map((o, i) => {
                const picked = sel === i;
                const isAnswer = i === q.answer;
                const revealed = sel !== null;
                const border = revealed && isAnswer ? t.acc : picked ? t.dangerA(70) : t.line(8);
                const bg = revealed && isAnswer ? t.accA(10) : picked ? t.dangerA(8) : t.card;
                return (
                  <Press
                    key={i}
                    cue={revealed ? null : 'tap'}
                    onPress={() => pick(i)}
                    style={{ borderRadius: 16, borderWidth: (revealed && isAnswer) || picked ? 1.5 : 1, borderColor: border, backgroundColor: bg, paddingVertical: 15, paddingHorizontal: 16, flexDirection: 'row', alignItems: 'center', gap: 10 }}
                  >
                    <TX role="body" style={{ flex: 1, minWidth: 0 }} color={revealed && !isAnswer && !picked ? t.txMuted : t.txPrimary}>
                      {o}
                    </TX>
                    {revealed && isAnswer ? <Icon name="check" size={15} color={t.acc} strokeWidth={2.4} /> : null}
                  </Press>
                );
              })}
            </View>

            {sel !== null ? (
              <Press cue={null} onPress={advance} style={{ minHeight: 52, paddingVertical: 6, borderRadius: 26, backgroundColor: t.acc, alignItems: 'center', justifyContent: 'center', marginBottom: 14 }}>
                <TX font="semi" role="body" color={t.accInk}>
                  {T.cont}
                </TX>
              </Press>
            ) : null}

            <TX font="serifI" role="meta" lhMult={1.64} color={t.txSubtle} center>
              {T.plCheckNote}
            </TX>
          </View>
        ) : (
          // ── Result ──
          <View style={{ alignItems: 'center', paddingTop: 20 }}>
            <TX font="semi" role="meta" ls={2.8} color={t.txSubtle} style={{ marginBottom: 14 }}>
              {T.plResult}
            </TX>
            <TX font="serifI" role="display" size={110} color={t.accTx}>
              {est}
            </TX>
            <TX role="body" lhMult={1.71} color={t.txSecondary} center style={{ maxWidth: 290, marginTop: 22 }}>
              {resCopy}
            </TX>
            <TX role="label" color={t.txMuted} style={{ marginTop: 12 }}>
              {T.plScore.replace('{n}', String(right)).replace('{m}', String(n))}
            </TX>

            {/* The starting unit — read from the corpus, not asserted. */}
            {startUnit ? (
              <View style={{ alignSelf: 'stretch', borderRadius: 18, borderWidth: 1, borderColor: t.accA(35), backgroundColor: t.accA(6), paddingVertical: 16, paddingHorizontal: 18, marginVertical: 26, flexDirection: 'row', alignItems: 'center', gap: 13 }}>
                <View style={{ width: 36, height: 36, borderRadius: 18, borderWidth: 1, borderColor: t.accA(55), alignItems: 'center', justifyContent: 'center' }}>
                  <TX font="serif" role="body" color={t.accTx}>
                    {String(startUnit.seq).padStart(2, '0')}
                  </TX>
                </View>
                <View style={{ flex: 1 }}>
                  <TX font="semi" role="bodySm">{startUnit.title}</TX>
                  <TX role="meta" color={t.txMuted} style={{ marginTop: 2 }}>
                    {T.plStartUnit}
                  </TX>
                </View>
              </View>
            ) : (
              <View style={{ height: 26 }} />
            )}

            {offerPremiere ? (
              <Press
                onPress={() => router.push({ pathname: '/paywall', params: { from: 'placement' } })}
                style={{ alignSelf: 'stretch', borderRadius: 18, borderWidth: 1, borderColor: t.accA(40), backgroundColor: t.accA(8), paddingVertical: 14, paddingHorizontal: 16, marginBottom: 14, flexDirection: 'row', alignItems: 'center', gap: 13 }}
              >
                <View style={{ width: 34, height: 34, borderRadius: 17, backgroundColor: t.accA(14), alignItems: 'center', justifyContent: 'center' }}>
                  <Icon name="star" size={15} color={t.accTx} />
                </View>
                <View style={{ flex: 1 }}>
                  <TX font="semi" role="bodySm">{T.placePwT}</TX>
                  <TX role="meta" color={t.txMuted} style={{ marginTop: 2 }}>
                    {T.placePwS}
                  </TX>
                </View>
                <TX font="semi" role="eyebrow" ls={1.2} color={t.accTx}>
                  {T.placePwCta}
                </TX>
              </Press>
            ) : null}

            <Press cue={null} onPress={begin} style={{ alignSelf: 'stretch', minHeight: 52, paddingVertical: 6, borderRadius: 26, backgroundColor: t.acc, alignItems: 'center', justifyContent: 'center', marginBottom: 12 }}>
              <TX font="semi" role="body" color={t.accInk}>
                {T.plStartCta}
              </TX>
            </Press>
            <Press cue={null} onPress={redo} style={{ minHeight: 48, paddingVertical: 6, alignItems: 'center', justifyContent: 'center' }}>
              <TX font="semi" role="bodySm" color={t.txMuted}>
                {T.plRetake}
              </TX>
            </Press>
          </View>
        )}
      </ScrollView>
    </View>
  );
}
