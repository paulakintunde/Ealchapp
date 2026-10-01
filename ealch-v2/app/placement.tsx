import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { AccessibilityInfo, BackHandler, Modal, ScrollView, View, findNodeHandle } from 'react-native';
import * as Crypto from 'expo-crypto';
import { useFocusEffect, useRouter } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { TX } from '@/components/Type';
import { Button, Press, FocusHeader, ProgressBar } from '@/components/ui';
import { Icon } from '@/components/Icon';
import { useTheme } from '@/theme/useTheme';
import { useT } from '@/i18n/useT';
import { useStore } from '@/store/useStore';
import { useProgress, useSessionLog } from '@/store/useProgress';
import { placementEstimate, type PlacementAnswer } from '@/store/progress.logic';
import { createAttempt, isInitialResult, restoreAttempt, type PlacementAttempt, type PlacementQuestion } from '@/store/placement.logic';
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

type Question = { item: Item; opts: string[]; optionIds: string[]; answer: number };

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
function buildQuickCheck(items: Item[]): PlacementQuestion[] {
  const pool = items.filter((i) => i.kind !== 'sentence' && i.fr.trim() && i.en.trim());
  if (pool.length < 2) return [];
  const band = (lvl: Item['level']) => shuffle(pool.filter((i) => i.level === lvl)).slice(0, PER_BAND);
  return [...band('a1'), ...band('a2')].map((item) => {
    const distractors = shuffle(pool.filter((p) => p.id !== item.id && p.en !== item.en))
      .filter((p, i, arr) => arr.findIndex((other) => other.en === p.en) === i)
      .slice(0, 3);
    return { itemId: item.id, optionIds: shuffle([item, ...distractors]).map((option) => option.id) };
  });
}

function displayQuestions(attempt: PlacementAttempt | null, items: Item[]): Question[] {
  if (!attempt || !restoreAttempt(attempt, items)) return [];
  const byId = new Map(items.map((item) => [item.id, item]));
  return attempt.questions.map(({ itemId, optionIds }) => {
    const item = byId.get(itemId)!;
    return { item, optionIds, opts: optionIds.map((id) => byId.get(id)!.en), answer: optionIds.indexOf(itemId) };
  });
}

export default function Placement() {
  const t = useTheme();
  const T = useT();
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const setField = useStore((s) => s.setField);
  const hydrated = useStore((s) => s.hydrated);
  const attempt = useStore((s) => s.placementAttempt);
  const firstPlacementOutcome = useStore((s) => s.firstPlacementOutcome);
  const setPlacementAttempt = useStore((s) => s.setPlacementAttempt);
  const answerPlacement = useStore((s) => s.answerPlacement);
  const finishPlacement = useStore((s) => s.finishPlacement);
  const abandonPlacement = useStore((s) => s.abandonPlacement);
  const recordPlacementLoadFailure = useStore((s) => s.recordPlacementLoadFailure);
  const items = useContent((s) => s.corpus.items);
  const logAttempt = useProgress((s) => s.logAttempt);
  const logSession = useSessionLog();

  const questions = useMemo(() => displayQuestions(attempt, items), [attempt, items]);
  const [qIx, setQIx] = useState(0);
  const [sel, setSel] = useState<number | null>(null);
  const [showExitConfirm, setShowExitConfirm] = useState(false);
  const [resumed, setResumed] = useState(false);
  const questionHeadingRef = useRef<View>(null);
  const exitHeadingRef = useRef<View>(null);
  const unavailableHeadingRef = useRef<View>(null);
  const est = attempt?.status === 'completed' ? attempt.result : null;

  useFocusEffect(useCallback(() => {
    const listener = BackHandler.addEventListener('hardwareBackPress', () => {
      if (useStore.getState().placementAttempt?.status !== 'in_progress') return false;
      setShowExitConfirm(true);
      return true;
    });
    return () => listener.remove();
  }, []));

  useEffect(() => {
    if (!resumed) return;
    const timer = setTimeout(() => {
      const node = findNodeHandle(questionHeadingRef.current);
      if (node) AccessibilityInfo.setAccessibilityFocus(node);
    }, 80);
    return () => clearTimeout(timer);
  }, [resumed, qIx]);

  // UI-SPEC: focus the heading of a newly shown recovery state before its actions.
  useEffect(() => {
    if (questions.length !== 0 || !attempt) return;
    const timer = setTimeout(() => {
      const node = findNodeHandle(unavailableHeadingRef.current);
      if (node) AccessibilityInfo.setAccessibilityFocus(node);
    }, 80);
    return () => clearTimeout(timer);
  }, [questions.length, attempt?.attemptId]);

  useEffect(() => {
    if (!showExitConfirm) return;
    const timer = setTimeout(() => {
      const node = findNodeHandle(exitHeadingRef.current);
      if (node) AccessibilityInfo.setAccessibilityFocus(node);
    }, 80);
    return () => clearTimeout(timer);
  }, [showExitConfirm]);

  useEffect(() => {
    if (!hydrated) return;
    const saved = useStore.getState().placementAttempt;
    const restored = restoreAttempt(saved, items);
    if (restored && (restored.status === 'in_progress' || restored.status === 'completed' || restored.status === 'load_failed')) {
      setResumed(restored.status === 'in_progress' && restored.answers.length > 0);
      const ix = Math.min(restored.nextQuestionIndex, restored.questions.length - 1);
      setQIx(Math.max(0, ix));
      setSel(restored.nextQuestionIndex === restored.questions.length ? restored.answers[ix] : null);
      return;
    }
    // A checkpoint that no longer matches the corpus (an update removed one of
    // its items) is discarded and a fresh check drawn. It is not a load failure:
    // the questions exist, only the old draw does not. Any saved attempt already
    // counted as this learner's start, so the redraw is reported as a later one.
    const fresh = createAttempt(Crypto.randomUUID(), buildQuickCheck(items));
    setPlacementAttempt(fresh);
    if (fresh.status === 'in_progress') trackEvent('placement_started', { attempt_id: fresh.attemptId, source: firstPlacementOutcome || saved ? 'later' : 'initial' });
    else trackEvent('placement_load_failed', { attempt_id: fresh.attemptId, reason: items.length ? 'empty_bank' : 'content_unavailable' });
    // A route entry starts at most one attempt; Retry and Retake create later ones.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hydrated]);

  const n = questions.length;
  const q = questions[qIx];

  const pick = (i: number) => {
    if (sel !== null || !q || !attempt || !answerPlacement(i)) return;
    const correct = i === q.answer;
    sound.play(correct ? 'success' : 'tap');
    setSel(i);
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
    if (!attempt || sel === null || useStore.getState().placementAttempt?.status !== 'in_progress') return;
    sound.play('ding');
    if (qIx + 1 < n) {
      setQIx((i) => i + 1);
      setSel(null);
      return;
    }
    // Finished: grade, write the level the rest of the app reads, log the time.
    const answers: PlacementAnswer[] = questions.map((question, i) => ({ level: question.item.level, correct: attempt.answers[i] === question.answer }));
    const graded = placementEstimate(answers);
    const correctCount = answers.filter((answer) => answer.correct).length;
    setField('level', graded);
    logSession('placement');
    if (finishPlacement({ attemptId: attempt.attemptId, level: graded, correctCount, questionCount: n })) {
      trackEvent('placement_result', { attempt_id: attempt.attemptId, level: graded, correct_count: correctCount, question_count: n, initial_result: isInitialResult(useStore.getState().firstPlacementOutcome, attempt.attemptId) });
    }
    // Paywall trigger point 1 (master plan): placement just wrote a level.
    // When the graded plan reaches past the free bands, the result screen
    // offers Première contextually — an offer card, never a hijacked flow.
    if (graded === 'A2') trackEvent('placement_paywall_offered', { level: graded });
  };

  const redo = () => {
    sound.play('tap');
    const fresh = createAttempt(Crypto.randomUUID(), buildQuickCheck(items));
    setPlacementAttempt(fresh);
    if (fresh.status === 'in_progress') trackEvent('placement_started', { attempt_id: fresh.attemptId, source: firstPlacementOutcome ? 'later' : 'initial' });
    else trackEvent('placement_load_failed', { attempt_id: fresh.attemptId, reason: items.length ? 'empty_bank' : 'content_unavailable' });
    setQIx(0);
    setSel(null);
    setResumed(false);
  };

  const close = () => {
    if (attempt?.status === 'in_progress') setShowExitConfirm(true);
    else router.replace('/home');
  };

  const keepChecking = () => {
    setShowExitConfirm(false);
    setTimeout(() => {
      const node = findNodeHandle(questionHeadingRef.current);
      if (node) AccessibilityInfo.setAccessibilityFocus(node);
    }, 80);
  };

  const endCheck = () => {
    const current = useStore.getState().placementAttempt;
    if (current && abandonPlacement()) {
      trackEvent('placement_abandoned', { attempt_id: current.attemptId, answered_count: current.answers.length });
    }
    setShowExitConfirm(false);
    router.replace('/den');
  };

  const continueWithout = () => {
    recordPlacementLoadFailure();
    router.replace('/den');
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

  const right = attempt?.answers.filter((a, i) => a === questions[i]?.answer).length ?? 0;
  const resCopy = est === 'A2' ? T.plResA2 : est === 'A1' ? T.plResA1 : T.plResA0;
  const levelsAll = useFeature('levels.all');
  const offerPremiere = est === 'A2' && !levelsAll;

  if (!hydrated || !attempt) return <View style={{ flex: 1, backgroundColor: t.bg }} />;

  return (
    <View style={{ flex: 1, backgroundColor: t.bg }}>
      <View style={{ paddingTop: insets.top }}>
        <FocusHeader onClose={close} onSettings={() => router.push('/settings')} />
      </View>
      <ScrollView contentContainerStyle={{ paddingHorizontal: 24, paddingTop: 6, paddingBottom: insets.bottom + 40 }} showsVerticalScrollIndicator={false}>
        <TX font="semi" role="eyebrow" ls={2.6} color={t.txSubtle} center style={{ marginBottom: 22 }}>
          {T.placementT.toUpperCase()}
        </TX>

        {n === 0 ? (
          <View style={{ paddingTop: 32, gap: 16 }}>
            <View ref={unavailableHeadingRef} accessible accessibilityRole="header" accessibilityLabel={T.plUnavailableTitle}>
              <TX font="semi" role="titleLg" center>{T.plUnavailableTitle}</TX>
            </View>
            <TX role="body" color={t.txSecondary} center>{T.plUnavailableBody}</TX>
            <Button label={T.plRetry} onPress={redo} style={{ marginTop: 8 }} />
            <Button label={T.plContinueWithout} variant="outline" onPress={continueWithout} />
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

            {resumed ? <TX role="meta" color={t.txMuted} style={{ marginBottom: 8 }}>{T.plResumed}</TX> : null}
            <View ref={questionHeadingRef} accessible accessibilityLabel={T.plWhatMean}>
              <TX font="serif" role="display" size={26} lhMult={1.23} style={{ marginBottom: 20 }}>
                {T.plWhatMean}
              </TX>
            </View>

            {/* The word — with its sound, because recognising French includes
                recognising it spoken. Playback is on demand, never a surprise. */}
            <View style={{ borderRadius: 20, borderWidth: 1, borderColor: t.line(8), backgroundColor: t.card, padding: 22, marginBottom: 20, flexDirection: 'row', alignItems: 'center', gap: 16 }}>
              <Press accessibilityRole="button" accessibilityLabel={T.a11yPlayItem.replace('{item}', q.item.fr)} cue="tap" onPress={() => tts.speak(q.item.fr)} style={{ width: 73, height: 73, borderRadius: 36.5, backgroundColor: t.acc, alignItems: 'center', justifyContent: 'center' }}>
                <Icon name="play" size={22} color={t.accInk} />
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
                  <Press accessibilityRole="radio" accessibilityLabel={o} accessibilityState={{ selected: picked, disabled: revealed }}
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
              <Press accessibilityRole="button" cue={null} onPress={advance} style={{ minHeight: 52, paddingVertical: 6, borderRadius: 26, backgroundColor: t.acc, alignItems: 'center', justifyContent: 'center', marginBottom: 14 }}>
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
              <Press accessibilityRole="button"
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

            <Press accessibilityRole="button" cue={null} onPress={begin} style={{ alignSelf: 'stretch', minHeight: 52, paddingVertical: 6, borderRadius: 26, backgroundColor: t.acc, alignItems: 'center', justifyContent: 'center', marginBottom: 12 }}>
              <TX font="semi" role="body" color={t.accInk}>
                {T.plStartCta}
              </TX>
            </Press>
            <Press accessibilityRole="button" cue={null} onPress={redo} style={{ minHeight: 48, paddingVertical: 6, alignItems: 'center', justifyContent: 'center' }}>
              <TX font="semi" role="bodySm" color={t.txMuted}>
                {T.plRetake}
              </TX>
            </Press>
          </View>
        )}
      </ScrollView>
      <Modal visible={showExitConfirm} transparent animationType="fade" onRequestClose={keepChecking}>
        <View accessibilityViewIsModal style={{ flex: 1, justifyContent: 'center', padding: 24, backgroundColor: t.isDark ? 'rgba(0,0,0,0.72)' : 'rgba(0,0,0,0.45)' }}>
          <View style={{ borderRadius: 20, backgroundColor: t.card, padding: 24, gap: 16 }}>
            <View ref={exitHeadingRef} accessible accessibilityLabel={T.plExitTitle}>
              <TX font="semi" role="titleLg">{T.plExitTitle}</TX>
            </View>
            <TX role="body" color={t.txSecondary}>{T.plExitBody}</TX>
            <Button label={T.plKeepChecking} onPress={keepChecking} />
            <Button label={T.plEndCheck} variant="danger" onPress={endCheck} />
          </View>
        </View>
      </Modal>
    </View>
  );
}
