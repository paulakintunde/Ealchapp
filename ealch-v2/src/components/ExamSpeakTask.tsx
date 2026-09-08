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
  durationNote,
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

/** How long a silence runs before the dot turns amber. Under a second would
 *  flicker on the gaps inside ordinary speech; much longer and the candidate
 *  learns nothing before the segment closes at four seconds. */
const PAUSE_AFTER_MS = 1200;

/** A settled result that never ran. Shaped like stt's own so the code below
 *  has one path, and `available: true` because nothing failed — there was
 *  simply no time left to listen in. */
const EMPTY_RESULT = {
  ok: false,
  available: true,
  transcript: '',
  confidence: -1,
  score: 0,
  verdict: 'none',
  source: 'none',
  audioUri: null,
} as const;

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
  /** What the microphone is doing RIGHT NOW, for the candidate. Green while a
   *  voice is being heard, amber through a pause, red once the answer is
   *  closed. Without it the screen looks identical whether the recogniser is
   *  listening, waiting, or has given up, and the candidate has no way to
   *  discover a dead microphone until the report. */
  const [mic, setMic] = useState<'listening' | 'pausing' | 'stopped'>('stopped');
  /** Text banked from segments already finalised, so a pause never loses what
   *  came before it. */
  const [banked, setBanked] = useState('');

  /** The candidate pressed "I have finished". Distinct from the recogniser
   *  ending a segment, which is just a pause and must NOT end the answer. */
  const stopRequested = useRef(false);
  const segments = useRef<string[]>([]);
  const lastVoiceAt = useRef(0);

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

  /** Amber once a voice has not been heard for PAUSE_AFTER_MS. Driven off the
   *  microphone level rather than the transcript, because the transcript stops
   *  growing while the recognizer is still hearing perfectly well. Deliberately
   *  shorter than the recognizer's own silence window: the candidate should see
   *  the pause register well before it closes a segment. */
  const pauseWatch = () => {
    const id = setInterval(() => {
      if (!alive.current) return;
      setMic((m) => (m === 'stopped' ? m : Date.now() - lastVoiceAt.current > PAUSE_AFTER_MS ? 'pausing' : m));
    }, 250);
    timers.current.push(id);
  };

  const record = useCallback(async () => {
    setPhase('recording');
    samples.current = [];
    segments.current = [];
    stopRequested.current = false;
    startedAt.current = Date.now();
    lastVoiceAt.current = Date.now();
    setElapsed(0);
    setBanked('');
    setPartial('');
    // Amber, not green, until a voice is actually heard. Opening on green
    // would assert the microphone works before anything has proved it.
    setMic('pausing');
    tick();
    pauseWatch();

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
      // ── The segment loop ────────────────────────────────────────────────
      //
      // A pause ends a SEGMENT, never the answer. Even in continuous mode the
      // platform recognizer will finalise on its own, so the only durable fix
      // is to start another one and append. The answer ends when the candidate
      // says it does, or when the clock runs out.
      const budgetMs = (task.timingS + 30) * 1000;
      const until = startedAt.current + budgetMs;
      let last: Awaited<ReturnType<typeof stt.listen>> | undefined;

      while (alive.current && !stopRequested.current && Date.now() < until) {
        const segStart = Date.now();
        last = await stt.listen('', {
          longForm: true,
          maxMs: Math.max(1000, until - Date.now()),
          lang: lang === 'fr' ? 'fr-FR' : 'en-US',
          onVolume: (v) => {
            // -2..10, and below zero is inaudible. A reading above the floor
            // is the only direct evidence a voice is reaching the microphone.
            if (v < 0) return;
            lastVoiceAt.current = Date.now();
            if (alive.current) setMic('listening');
          },
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

        // A recognizer that cannot run at all is a different outcome from one
        // that ran and heard nothing, and only the first is ours to report.
        if (!last.available) break;

        if (last.transcript.trim()) {
          segments.current.push(last.transcript.trim());
          if (alive.current) {
            setBanked(segments.current.join(' '));
            setPartial('');
          }
        }
        // A segment that returns instantly and empty means the recognizer is
        // refusing rather than waiting, and looping on it would spin the CPU
        // and the microphone for the rest of the paper.
        if (!last.transcript.trim() && Date.now() - segStart < 400) break;
      }

      // The loop can exit without ever having run — a task resumed with no
      // clock left, say. That is not a microphone failure, but it is not an
      // answer either, so it settles as an empty available result rather than
      // reporting our silence as the candidate's.
      const joined = segments.current.join(' ').trim();
      res = last
        ? { ...last, transcript: joined, ok: !!joined }
        : { ...EMPTY_RESULT, available: true };
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
    setMic('stopped');
    setAnswer(a);
    setPhase('done');
    onAnswer(a);
  };

  // The dot, its word, and the running count. Derived rather than stored so
  // they cannot drift out of step with `mic`.
  const micColour = mic === 'listening' ? t.good : mic === 'pausing' ? t.warn : t.danger;
  const micLabel = mic === 'listening' ? T.examMicHearing : mic === 'pausing' ? T.examMicPaused : T.examMicStopped;
  const spokenWordCount = [banked, partial].filter(Boolean).join(' ').trim().split(/\s+/).filter(Boolean).length;

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
        <View style={{ borderRadius: 14, borderWidth: 1, borderColor: micColour, backgroundColor: t.card, padding: 16 }}>
          {/* THE DOT IS THE POINT. Green while a voice is reaching the
              microphone, amber through a pause, red once the answer is closed.
              Before this the screen looked identical whether the recogniser was
              hearing every word or nothing at all, and a candidate had no way
              to find out until the report told them the paper was ungraded. */}
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8, marginBottom: 8 }}>
            <View
              accessibilityLabel={micLabel}
              style={{ width: 10, height: 10, borderRadius: 5, backgroundColor: micColour }}
            />
            <Icon name="mic" size={16} color={micColour} />
            <TX font="semi" role="label" color={micColour}>{micLabel}</TX>
            <View style={{ flex: 1 }} />
            <TX font="semi" role="label" color={t.txSecondary}>{formatClock(Math.floor(elapsed / 1000))}</TX>
          </View>

          {/* Banked text is everything already finalised; `partial` is the
              segment in flight. Showing both means a pause visibly keeps what
              came before it rather than appearing to wipe the answer. */}
          {banked || partial ? (
            <TX role="meta" color={t.txMuted} lhMult={1.5} style={{ marginBottom: 6 }}>
              {[banked, partial].filter(Boolean).join(' ')}
            </TX>
          ) : null}
          <TX role="meta" color={t.txSubtle} style={{ marginBottom: 10 }}>
            {T.examWordsSoFar.replace('{n}', String(spokenWordCount))}
          </TX>

          <Press
            onPress={() => {
              // The candidate ending the answer, which is NOT the same event as
              // the recogniser ending a segment. Without this flag the loop
              // would simply start listening again.
              stopRequested.current = true;
              void stopRecogniser();
            }}
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
              {/* How the length sits against what the task asked for. The
                  writing surface has counted words against minWords since it
                  shipped; the speaking one said nothing, so a candidate could
                  answer a four-and-a-half-minute task in fifty seconds and see
                  only a duration. Shown in the warning colour because it is a
                  fact about the ATTEMPT, not about the French in it. */}
              {durationNote(answer.signals.durationMs, task.responseSpec, lang) ? (
                <TX role="meta" color={t.danger} style={{ marginBottom: 6 }}>
                  {durationNote(answer.signals.durationMs, task.responseSpec, lang)}
                </TX>
              ) : null}
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
