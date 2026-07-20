import { useEffect, useMemo, useRef, useState } from 'react';
import { View } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { TX } from '@/components/Type';
import { Press, FocusHeader } from '@/components/ui';
import { Icon } from '@/components/Icon';
import { Waveform } from '@/components/Waveform';
import { CamilleAvatar } from '@/components/CamilleAvatar';
import { useTheme } from '@/theme/useTheme';
import { useT } from '@/i18n/useT';
import { useProgress, useSessionLog } from '@/store/useProgress';
import { sound, tts, stt } from '@/services';
import { content } from '@/services/content';
import { unitBand, type Lesson } from '@/content/schema';
import { FREE_BANDS } from '@/store/entitlement.logic';
import { useFeature } from '@/store/useEntitlement';
import { track as trackEvent } from '@/services/analytics';
import {
  flattenNarration,
  langForVoice,
  precedingSegmentText,
  stageRanges,
  type NarrationStep,
} from '@/content/narration.logic';

// Phase 7 — The Den's narrated-lesson player. Walks `Lesson.narration` one
// step at a time: SEGMENT steps speak themselves via `tts.speak` and
// auto-advance on completion; INTERACTION steps stop and wait for a tap on
// the mic (never auto-listen — asking for the mic without the learner
// choosing to speak is the surprise-permission-prompt failure roleplay.tsx
// already avoids). `repeat` interactions are a hear-and-repeat cue and are
// never logged (schema.ts's own doc comment: only produce/check log
// attempts); `produce`/`check` log a real `AttemptEntry` when the interaction
// names a real corpus `itemId`, exactly like roleplay's synthetic-id turns
// skip the SRS while a real item feeds it.
export default function Narrated() {
  const t = useTheme();
  const T = useT();
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const params = useLocalSearchParams<{ key?: string }>();
  const raw = Array.isArray(params.key) ? params.key[0] : params.key;
  const id = raw ?? '';

  const L: Lesson | null = content.lesson(id);

  // Same level-gate chokepoint as lesson.tsx: a narrated lesson past A1
  // redirects to the paywall before a word is spoken.
  const levelsAll = useFeature('levels.all');
  const bandLocked =
    !!L && !levelsAll && !(FREE_BANDS as readonly string[]).includes(unitBand(L.unitId) ?? 'a1');
  useEffect(() => {
    if (bandLocked) {
      trackEvent('gate_blocked', { feature: 'levels.all', from: 'narrated' });
      router.replace({ pathname: '/paywall', params: { from: 'gate:levels' } });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bandLocked]);

  const logSession = useSessionLog();
  const setResume = useProgress((s) => s.setResume);
  const clearResume = useProgress((s) => s.clearResume);
  const logAttempt = useProgress((s) => s.logAttempt);

  const steps = useMemo<NarrationStep[]>(() => (L?.narration ? flattenNarration(L.narration) : []), [L?.id]); // eslint-disable-line react-hooks/exhaustive-deps
  const ranges = useMemo(() => stageRanges(steps), [steps]);

  const [stepIx, setStepIx] = useState(0);
  const [listening, setListening] = useState(false);
  const [partial, setPartial] = useState('');
  const [feedback, setFeedback] = useState<'good' | 'close' | 'off' | null>(null);
  const [done, setDone] = useState(false);

  const mounted = useRef(true);
  const advanceTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      mounted.current = false;
      if (advanceTimer.current) clearTimeout(advanceTimer.current);
      tts.stop();
      stt.abort();
    };
  }, []);

  useEffect(() => {
    if (L) setResume({ route: `/narrated?key=${id}`, title: L.title, activity: 'narrated' });
  }, [L?.id]); // eslint-disable-line react-hooks/exhaustive-deps

  const current = steps[stepIx];

  // Speak the current segment, then auto-advance. Re-runs on every step, but
  // only ever acts when the step is a 'segment' — an 'interaction' step waits
  // on the mic instead (below), never on this effect.
  useEffect(() => {
    // bandLocked: the gate effect above is mid-redirect — do not start speaking
    // a lesson the user is about to be routed away from.
    if (!current || current.kind !== 'segment' || done || bandLocked) return;
    setFeedback(null);
    const seg = current.segment;
    tts.speak(seg.text, {
      lang: langForVoice(seg.voice),
      onDone: () => {
        if (!mounted.current) return;
        advanceTimer.current = setTimeout(() => mounted.current && advance(), 260);
      },
      onError: () => {
        if (!mounted.current) return;
        advance();
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stepIx, current, done]);

  const advance = () => {
    setFeedback(null);
    setPartial('');
    if (stepIx + 1 >= steps.length) {
      setDone(true);
      sound.play('success');
      logSession('narrated');
      clearResume();
    } else {
      setStepIx((i) => i + 1);
    }
  };

  const mic = async () => {
    if (!current || current.kind !== 'interaction' || listening) return;
    const interaction = current.interaction;
    // 'repeat' always echoes the line just heard; produce/check answer their
    // own authored expectation, falling back to the preceding line only when
    // neither the interaction nor its item names one.
    const item = interaction.itemId ? content.item(interaction.itemId) : null;
    const expected =
      interaction.kind === 'repeat'
        ? precedingSegmentText(steps, stepIx) ?? ''
        : interaction.expected ?? item?.fr ?? precedingSegmentText(steps, stepIx) ?? '';
    if (!expected) {
      advance();
      return;
    }

    sound.play('tap');
    setListening(true);
    setPartial('');
    // A fixed, generous ceiling (matching roleplay.tsx) — this is a safety net
    // for a hung recognizer, not the expected answer length, so it must not
    // scale down for a short prompt the way interactionPauseMs deliberately
    // does; a 1-word "Bonjour !" still needs real reaction time before the
    // learner starts speaking.
    const res = await stt.listen(expected, { maxMs: 7000, onPartial: setPartial });
    if (!mounted.current) return;
    setListening(false);
    setPartial('');

    const heardOk = res.ok && res.verdict !== 'none';
    setFeedback(heardOk ? (res.verdict === 'good' ? 'good' : res.verdict === 'close' ? 'close' : 'off') : null);
    sound.play(heardOk && res.verdict !== 'off' ? 'success' : 'flip');

    // Only produce/check log to the SRS, and only against a real item — a
    // repeat cue and an interaction with no itemId still give feedback, they
    // just aren't SCHEDULABLE (the same reasoning roleplay's synthetic turn
    // ids document).
    if (interaction.kind !== 'repeat' && interaction.itemId && heardOk) {
      logAttempt({
        activity: 'narrated',
        itemId: interaction.itemId,
        expected,
        heard: res.transcript,
        score: res.score,
        verdict: res.verdict,
        correct: res.verdict === 'good',
        modality: interaction.gradeAs ?? (interaction.kind === 'check' ? 'discriminate' : 'produce'),
      });
    }

    advanceTimer.current = setTimeout(() => mounted.current && advance(), 900);
  };

  const skip = () => {
    sound.play('tap');
    tts.stop();
    stt.abort();
    if (advanceTimer.current) clearTimeout(advanceTimer.current);
    advance();
  };

  if (!L || !L.narration || steps.length === 0) {
    return (
      <View style={{ flex: 1, backgroundColor: t.bg, paddingTop: insets.top }}>
        <FocusHeader onClose={() => router.back()} title={T.narrTag} />
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 30 }}>
          <TX role="body" color={t.txMuted} center>{T.lessonSoon}</TX>
        </View>
      </View>
    );
  }

  // Redirecting to the paywall (effect above) — never flash gated content.
  if (bandLocked) {
    return <View style={{ flex: 1, backgroundColor: t.bg }} />;
  }

  if (done) {
    return (
      <View style={{ flex: 1, backgroundColor: t.bg, paddingTop: insets.top }}>
        <FocusHeader onClose={() => router.replace('/den')} title={T.narrTag} />
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 30, gap: 18 }}>
          <CamilleAvatar size={72} />
          <TX font="serifI" size={28} role="display" center>{T.narrDoneT}</TX>
          <TX role="body" color={t.txSecondary} center>{T.narrDoneS}</TX>
          <Press
            cue="tap"
            onPress={() => router.replace('/den')}
            style={{ marginTop: 10, minHeight: 54, paddingHorizontal: 28, borderRadius: 27, backgroundColor: t.acc, alignItems: 'center', justifyContent: 'center' }}
          >
            <TX font="semi" role="bodyLg" color={t.accInk}>{T.backToDen}</TX>
          </Press>
        </View>
      </View>
    );
  }

  const interaction = current.kind === 'interaction' ? current.interaction : null;
  const promptLabel = interaction
    ? interaction.kind === 'repeat'
      ? T.narrRepeat
      : interaction.kind === 'check'
        ? T.narrCheck
        : T.narrYourTurn
    : null;

  return (
    <View style={{ flex: 1, backgroundColor: t.bg }}>
      <View style={{ paddingTop: insets.top }}>
        <FocusHeader onClose={() => router.back()} title={L.title} />
      </View>

      {/* Stage rail — only stages this narration actually authored, never all
          seven, so an in-progress script doesn't imply steps that don't exist. */}
      <View style={{ flexDirection: 'row', gap: 6, paddingHorizontal: 24, marginBottom: 18 }}>
        {ranges.map((r) => (
          <View
            key={r.stageIndex}
            style={{
              flex: 1,
              height: 4,
              borderRadius: 2,
              backgroundColor: current.stageIndex > r.stageIndex ? t.acc : current.stageIndex === r.stageIndex ? t.accA(60) : t.line(10),
            }}
          />
        ))}
      </View>

      <View style={{ flex: 1, paddingHorizontal: 24, paddingBottom: insets.bottom + 24, alignItems: 'center', justifyContent: 'center', gap: 22 }}>
        <CamilleAvatar size={64} />

        {current.kind === 'segment' ? (
          <TX
            font="serifI"
            size={26}
            role="display"
            center
            lhMult={1.35}
            color={current.segment.voice === 'fr' ? t.tx : t.txSecondary}
          >
            {current.segment.text}
          </TX>
        ) : (
          <View style={{ alignItems: 'center', gap: 14, width: '100%' }}>
            <TX font="semi" role="eyebrow" ls={2.4} color={t.accTx} center>
              {promptLabel}
            </TX>
            {partial ? (
              <TX font="serifI" role="titleSm" color={t.txMuted} center>« {partial} »</TX>
            ) : null}
            {feedback ? (
              <TX
                font="semi"
                role="meta"
                center
                color={feedback === 'good' ? t.accTx : feedback === 'close' ? t.txSecondary : t.danger}
              >
                {feedback === 'good' ? T.micGood : feedback === 'close' ? T.micClose : T.micOff}
              </TX>
            ) : null}
            <View style={{ alignItems: 'center', gap: 12 }}>
              {listening ? <Waveform count={22} height={22} color={t.acc} active barWidth={3} gap={3.5} /> : null}
              <Press
                cue={null}
                onPress={mic}
                scale={0.94}
                style={{ width: 70, height: 70, borderRadius: 35, alignItems: 'center', justifyContent: 'center', backgroundColor: listening ? t.acc : t.line(4), borderWidth: 1, borderColor: listening ? t.acc : t.line(20) }}
              >
                <Icon name="mic" size={26} color={listening ? t.accInk : t.tx} />
              </Press>
            </View>
          </View>
        )}
      </View>

      <Press cue={null} onPress={skip} style={{ alignSelf: 'center', marginBottom: insets.bottom + 16, paddingVertical: 8, paddingHorizontal: 16 }}>
        <TX role="bodySm" color={t.txMuted}>{T.narrSkip}</TX>
      </Press>
    </View>
  );
}
