// Expression orale: the candidate speaks, and we record what they said.
//
// ── What this replaces ──────────────────────────────────────────────────────
//
// Until now the runner drew a TextInput for po_monologue and po_interaction, so
// a speaking score measured typing. That is the defect this component exists to
// remove, and the reason it must never quietly fall back to a text box: an
// unavailable microphone is a real outcome the candidate has to be told about,
// not something to route around.
//
// ── The three phases ────────────────────────────────────────────────────────
//
//   prep       only when the task has one (TCF tâche 2 does, tâches 1 and 3 do
//              not). Its clock is separate from the answer clock.
//   recording  the answer clock runs; interim transcripts feed the pause signal
//   done       transcript captured, delivery measured, playback available
//
// Delivery signals are computed here and travel with the grade request. They
// are pacing proxies, never a pronunciation assessment — see
// deliverySignals.logic.ts, which refuses to invent any signal it did not
// measure.
import { useCallback, useEffect, useRef, useState } from 'react';
import { View } from 'react-native';
import { TX } from '@/components/Type';
import { Press } from '@/components/ui';
import { Icon } from '@/components/Icon';
import { useTheme } from '@/theme/useTheme';
import { useT } from '@/i18n/useT';
import {
  computeDeliverySignals,
  deliverySummary,
  type DeliverySignals,
  type SpeechSample,
} from '@/utils/deliverySignals.logic';
import { formatClock } from '@/utils/examClock.logic';
import type { ExamTask } from '@/content/schema';

export type SpokenAnswer = {
  transcript: string;
  signals: DeliverySignals;
  /** Local file, kept for this session's playback only. Never uploaded. */
  audioUri: string | null;
  /** No recogniser was reachable. The section reports this rather than
   *  scoring silence as a bad answer. */
  unavailable: boolean;
};

type Phase = 'idle' | 'prep' | 'recording' | 'done';

export function ExamSpeakTask({
  task, lang, onAnswer, editable,
}: {
  task: ExamTask;
  lang: 'fr' | 'en';
  onAnswer: (a: SpokenAnswer) => void;
  editable: boolean;
}) {
  const t = useTheme();
  const T = useT();

  const [phase, setPhase] = useState<Phase>(task.prepS ? 'idle' : 'idle');
  const [prepLeft, setPrepLeft] = useState(task.prepS ?? 0);
  const [elapsed, setElapsed] = useState(0);
  const [partial, setPartial] = useState('');
  const [answer, setAnswer] = useState<SpokenAnswer | null>(null);

  const samples = useRef<SpeechSample[]>([]);
  const startedAt = useRef(0);
  const timers = useRef<ReturnType<typeof setInterval>[]>([]);
  const alive = useRef(true);

  useEffect(() => {
    alive.current = true;
    return () => {
      alive.current = false;
      for (const id of timers.current) clearInterval(id);
      timers.current = [];
      // A task left mid-recording must release the microphone, or the next
      // task opens with a recogniser that is already busy.
      void stopRecogniser();
    };
  }, []);

  const stopRecogniser = async () => {
    try {
      const { stt } = await import('@/services/stt');
      if (stt.isListening()) stt.stop();
    } catch {
      // Native module absent in this build; nothing to release.
    }
  };

  /** The answer clock. Wall-clock read, same reasoning as ExamClock. */
  const tick = () => {
    const id = setInterval(() => {
      if (!alive.current) return;
      setElapsed(Date.now() - startedAt.current);
    }, 500);
    timers.current.push(id);
  };

  const record = useCallback(async () => {
    setPhase('recording');
    samples.current = [];
    startedAt.current = Date.now();
    setElapsed(0);
    tick();

    // stt.ts is imported lazily on purpose: expo-speech-recognition resolves
    // its native binding during import, so a static import takes the whole app
    // down on any runtime built without it.
    let res;
    try {
      const { stt } = await import('@/services/stt');
      const ok = await stt.ensurePermission();
      if (!ok) {
        finish({ transcript: '', signals: computeDeliverySignals({ transcript: '', durationMs: 0, confidence: -1 }), audioUri: null, unavailable: true });
        return;
      }
      res = await stt.listen('', {
        // A TEF Section B answer runs to ten minutes. The drill default of six
        // SECONDS would cut a candidate off mid-sentence and score the stump.
        maxMs: (task.timingS + 30) * 1000,
        lang: lang === 'fr' ? 'fr-FR' : 'en-US',
        onPartial: (text) => {
          if (!alive.current) return;
          setPartial(text);
          // Each interim reading is a datapoint for the pause signal: the gaps
          // between readings where the transcript did NOT grow are the only
          // view of hesitation we have without silence-detecting the audio.
          samples.current.push({
            atMs: Date.now() - startedAt.current,
            words: text.trim() ? text.trim().split(/\s+/).length : 0,
          });
        },
      });
    } catch {
      finish({ transcript: '', signals: computeDeliverySignals({ transcript: '', durationMs: 0, confidence: -1 }), audioUri: null, unavailable: true });
      return;
    }

    const durationMs = Date.now() - startedAt.current;
    // `available: false` is stt.ts refusing to invent a transcript. It is a
    // real outcome, and scoring it as a bad answer would blame the candidate
    // for our microphone.
    if (!res.available) {
      finish({
        transcript: '',
        signals: computeDeliverySignals({ transcript: '', durationMs, confidence: -1 }),
        audioUri: res.audioUri ?? null,
        unavailable: true,
      });
      return;
    }

    finish({
      transcript: res.transcript,
      signals: computeDeliverySignals({
        transcript: res.transcript,
        durationMs,
        confidence: res.confidence,
        samples: samples.current,
      }),
      audioUri: res.audioUri ?? null,
      unavailable: false,
    });
  }, [task.timingS, lang]);

  const finish = (a: SpokenAnswer) => {
    for (const id of timers.current) clearInterval(id);
    timers.current = [];
    if (!alive.current) return;
    setAnswer(a);
    setPhase('done');
    onAnswer(a);
  };

  const startPrep = () => {
    if (!task.prepS) {
      void record();
      return;
    }
    setPhase('prep');
    setPrepLeft(task.prepS);
    const startedPrep = Date.now();
    const id = setInterval(() => {
      if (!alive.current) return;
      const left = task.prepS! - Math.floor((Date.now() - startedPrep) / 1000);
      setPrepLeft(Math.max(0, left));
      if (left <= 0) {
        clearInterval(id);
        void record();
      }
    }, 500);
    timers.current.push(id);
  };

  return (
    <View style={{ marginBottom: 26 }}>
      {task.label ? (
        <TX font="semi" role="eyebrow" ls={2} color={t.accTx} style={{ marginBottom: 8 }}>
          {task.label.toUpperCase()}
        </TX>
      ) : null}
      <TX font="serifI" role="title" lhMult={1.4} style={{ marginBottom: 14 }}>
        « {task.prompt} »
      </TX>

      {phase === 'idle' ? (
        <Press
          onPress={startPrep}
          disabled={!editable}
          style={{ alignItems: 'center', minHeight: 50, justifyContent: 'center', borderRadius: 16, backgroundColor: t.acc }}
        >
          <TX font="semi" role="label" color={t.accInk}>
            {task.prepS ? T.examStartPrep : T.examStartRecording}
          </TX>
        </Press>
      ) : null}

      {/* Preparation. Only rendered when the task actually has one — a
          zero-length prep phase is not a prep phase. */}
      {phase === 'prep' ? (
        <View style={{ borderRadius: 14, borderWidth: 1, borderColor: t.acc, backgroundColor: t.accA(8), padding: 16 }}>
          <TX font="semi" role="label" color={t.accTx} style={{ marginBottom: 4 }}>{T.examPrepPhase}</TX>
          <TX role="meta" color={t.txMuted} lhMult={1.45} style={{ marginBottom: 10 }}>{T.examPrepBody}</TX>
          <TX font="semi" size={28} role="display" color={t.accTx}>{formatClock(prepLeft)}</TX>
        </View>
      ) : null}

      {phase === 'recording' ? (
        <View style={{ borderRadius: 14, borderWidth: 1, borderColor: t.danger, backgroundColor: t.card, padding: 16 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8, marginBottom: 8 }}>
            <Icon name="mic" size={16} color={t.danger} />
            <TX font="semi" role="label" color={t.danger}>{T.examRecording}</TX>
            <View style={{ flex: 1 }} />
            <TX font="semi" role="label" color={t.txSecondary}>{formatClock(Math.floor(elapsed / 1000))}</TX>
          </View>
          {partial ? (
            <TX role="meta" color={t.txMuted} lhMult={1.5} style={{ marginBottom: 10 }}>{partial}</TX>
          ) : null}
          <Press
            onPress={() => void stopRecogniser()}
            style={{ alignItems: 'center', minHeight: 44, justifyContent: 'center', borderRadius: 14, borderWidth: 1, borderColor: t.line(14) }}
          >
            <TX font="semi" role="label" color={t.txSecondary}>{T.examStopRecording}</TX>
          </Press>
        </View>
      ) : null}

      {phase === 'done' && answer ? (
        <View style={{ borderRadius: 14, borderWidth: 1, borderColor: answer.unavailable ? t.danger : t.line(9), backgroundColor: t.card, padding: 16 }}>
          {answer.unavailable ? (
            <>
              <TX font="semi" role="label" color={t.danger} style={{ marginBottom: 4 }}>{T.examMicFailed}</TX>
              <TX role="meta" color={t.txSecondary} lhMult={1.45}>{T.examMicFailedBody}</TX>
            </>
          ) : (
            <>
              <TX font="semi" role="meta" color={t.txMuted} style={{ marginBottom: 6 }}>
                {deliverySummary(answer.signals, lang).join(' · ')}
              </TX>
              <TX role="label" color={t.txSecondary} lhMult={1.5}>{answer.transcript}</TX>
              {/* The one thing the candidate must understand about these
                  numbers, said where the numbers are. */}
              <TX role="meta" color={t.txMuted} lhMult={1.45} style={{ marginTop: 10 }}>
                {T.examDeliveryCaveat}
              </TX>
            </>
          )}
        </View>
      ) : null}
    </View>
  );
}
