// The interaction task: the candidate asks, a recorded examiner answers.
//
// ── The loop ────────────────────────────────────────────────────────────────
//
//   opening         plays once, then the candidate is on
//   listen          stt.listen resolves on END OF SPEECH, which is what makes
//                   this candidate-paced: the examiner never talks over them
//   select          the transcript picks an answer from the bank, or the
//                   catch-all, or the closing when the bank is spent
//   play            that turn speaks, and the loop repeats
//
// Nothing here knows what the candidate is supposed to say. There is no target
// line and no score against one, because the exam has neither — see the note
// at the top of interlocutor.logic.ts for why the role-play engine could not
// be reused.
//
// What IS measured is coverage: which of the document's withheld facts the
// candidate got out of the examiner. That is direct evidence of task
// completion and it is the strongest thing this task produces.
import { useCallback, useEffect, useRef, useState } from 'react';
import { View } from 'react-native';
import { TX } from '@/components/Type';
import { Press } from '@/components/ui';
import { Icon } from '@/components/Icon';
import { useTheme } from '@/theme/useTheme';
import { useT } from '@/i18n/useT';
import { audio as audioService } from '@/services/audio';
import {
  computeDeliverySignals,
  deliverySummary,
  type DeliverySignals,
  type SpeechSample,
} from '@/utils/deliverySignals.logic';
import { coverageOf, selectTurn, type Coverage } from '@/utils/interlocutor.logic';
import { formatClock } from '@/utils/examClock.logic';
import type { ExamTask, InterlocutorTurn } from '@/content/schema';

export type InteractionAnswer = {
  /** Every candidate turn, joined. What the grader marks. */
  transcript: string;
  signals: DeliverySignals;
  coverage: Coverage;
  unavailable: boolean;
};

/** The beat between the examiner finishing and the mic opening. Long enough
 *  that the recogniser does not hear the end of the examiner's own line,
 *  short enough that the candidate does not think the app has stalled. */
const HANDOVER_MS = 700;

/** Generous per-turn cap. stt.listen resolves on end of speech, so this only
 *  bounds a candidate who never stops talking. */
const TURN_MAX_MS = 60_000;

/** How many turns of silence the examiner sits through before closing.
 *  Without a bound, a candidate who says nothing hears the same deflection
 *  until the section clock runs out, which is neither what an examiner does
 *  nor something a learner would read as anything but a broken app. */
const MAX_SILENT_TURNS = 2;

type Phase = 'idle' | 'prep' | 'examiner' | 'listening' | 'done';

type Line = { who: 'examiner' | 'candidate'; text: string };

/** Built per call so the partial-transcript samples land in this task's refs.
 *  The samples are what let deliverySignals see pauses at all: without them a
 *  turn is one opaque block of time.
 *
 *  `elapsedMs` puts every sample on the SPEAKING timeline — mic-open time
 *  summed across turns — the same one `durationMs` uses. On a wall-clock
 *  timeline the gap between the last partial of one turn and the first of the
 *  next spans the examiner's whole reply, so every turn boundary would read as
 *  a hesitation. Only silences inside a candidate's own turn are pauses. */
const LISTEN_OPTS = (
  samples: { current: SpeechSample[] },
  elapsedMs: () => number,
  alive: { current: boolean }
) => ({
  maxMs: TURN_MAX_MS,
  lang: 'fr-FR',
  onPartial: (text: string) => {
    if (!alive.current) return;
    samples.current.push({
      atMs: elapsedMs(),
      words: text.trim() ? text.trim().split(/\s+/).length : 0,
    });
  },
});

export function ExamInterlocutorTask({
  task, lang, onAnswer, editable,
}: {
  task: ExamTask;
  lang: 'fr' | 'en';
  onAnswer: (a: InteractionAnswer) => void;
  editable: boolean;
}) {
  const t = useTheme();
  const T = useT();
  const bank = task.interlocutor;

  const [phase, setPhase] = useState<Phase>('idle');
  const [prepLeft, setPrepLeft] = useState(task.prepS ?? 0);
  const [lines, setLines] = useState<Line[]>([]);
  const [sent, setSent] = useState<DeliverySignals | null>(null);

  const played = useRef<string[]>([]);
  const silences = useRef(0);
  /** Time the MIC was open, summed across turns — not wall-clock from the
   *  start of the task. Wall-clock would count the examiner's own turns as the
   *  candidate's speaking time and understate their rate accordingly. */
  const speakingMs = useRef(0);
  const said = useRef<string[]>([]);
  const samples = useRef<SpeechSample[]>([]);
  const confidences = useRef<number[]>([]);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);
  const alive = useRef(true);

  useEffect(() => {
    alive.current = true;
    return () => {
      alive.current = false;
      for (const id of timers.current) clearTimeout(id);
      timers.current = [];
      audioService.stop();
      void (async () => {
        try {
          const { stt } = await import('@/services/stt');
          if (stt.isListening()) stt.stop();
        } catch { /* native module absent */ }
      })();
    };
  }, []);

  const later = (fn: () => void, ms: number) => {
    const id = setTimeout(() => { if (alive.current) fn(); }, ms);
    timers.current.push(id);
  };

  /** Speak one examiner turn. Clip when E8 has rendered one, device TTS until
   *  then — one call, same as the listening parts. */
  const speak = useCallback(async (turn: InterlocutorTurn): Promise<void> => {
    setPhase('examiner');
    setLines((l) => [...l, { who: 'examiner', text: turn.text }]);
    await audioService.speakItem({ fr: turn.text, audioRef: turn.audioRef ?? null }, { lang: 'fr-FR' });
    // The clip path reports completion immediately, so the end of the line is
    // timed rather than observed — same reason ExamPart carries durationS.
    const runS = turn.durationS ?? Math.max(2, Math.ceil(turn.text.length / 14));
    await new Promise<void>((r) => later(r, runS * 1000));
  }, []);

  const finish = useCallback((unavailable: boolean) => {
    if (!alive.current || !bank) return;
    const transcript = said.current.join(' ').trim();
    // Best confidence across turns: a candidate is not penalised for one
    // mumbled question when the rest were clear.
    const confidence = confidences.current.length ? Math.max(...confidences.current) : -1;
    const signals = computeDeliverySignals({
      transcript,
      durationMs: speakingMs.current,
      confidence,
      samples: samples.current,
    });
    setPhase('done');
    // Held so the card shows the SAME numbers the grader was sent. Recomputing
    // for display is how a report and a grade quietly disagree.
    setSent(signals);
    onAnswer({
      transcript,
      signals,
      coverage: coverageOf(bank, played.current),
      unavailable,
    });
  }, [bank, onAnswer]);

  /** One candidate turn, then the examiner's reply. */
  const turnLoop = useCallback(async () => {
    if (!bank) return;
    setPhase('listening');
    let res;
    try {
      const { stt } = await import('@/services/stt');
      const ok = await stt.ensurePermission();
      if (!ok) { finish(true); return; }
      // A beat before the mic opens, so it does not hear the tail of the line
      // the examiner just spoke and score it as the candidate's French.
      await new Promise<void>((r) => later(r, HANDOVER_MS));
      if (!alive.current) return;
      // `busy` means a previous capture has not released yet, which is exactly
      // what a fast turn loop provokes. It is transient, unlike `unavailable`
      // and `not-allowed`, so it earns one retry rather than retiring the
      // candidate's whole task as microphone failure.
      const listen = async () => {
        const from = Date.now();
        const base = speakingMs.current;
        try {
          return await stt.listen('', LISTEN_OPTS(samples, () => base + (Date.now() - from), alive));
        } finally {
          speakingMs.current = base + (Date.now() - from);
        }
      };
      const beforeListen = speakingMs.current;
      res = await listen();
      if (res.error === 'busy') {
        // A busy window was not the candidate speaking — the recogniser never
        // opened. Roll it back before the retry adds its own.
        speakingMs.current = beforeListen;
        await new Promise<void>((r) => later(r, HANDOVER_MS));
        if (!alive.current) return;
        res = await listen();
      }
    } catch {
      finish(true);
      return;
    }
    if (!alive.current) return;

    if (!res.available) { finish(true); return; }

    const heard = res.transcript.trim();
    if (heard) {
      silences.current = 0;
      said.current.push(heard);
      confidences.current.push(res.confidence);
      setLines((l) => [...l, { who: 'candidate', text: heard }]);
    } else if (++silences.current >= MAX_SILENT_TURNS) {
      // Closed, not looped. The attempt is still logged and still graded on
      // whatever was obtained — which for a silent candidate is nothing, and
      // the coverage line says so rather than the task vanishing.
      await speak(bank.closing);
      finish(false);
      return;
    }

    const next = selectTurn(heard, bank, played.current);
    if (next.kind === 'closing') {
      await speak(bank.closing);
      finish(false);
      return;
    }
    if (next.kind === 'catch-all') {
      await speak(bank.catchAll);
    } else {
      played.current.push(next.turn.id);
      await speak(next.turn);
    }
    if (alive.current) void turnLoop();
  }, [bank, finish, speak]);

  const begin = useCallback(async () => {
    if (!bank) return;
    await speak(bank.opening);
    if (alive.current) void turnLoop();
  }, [bank, speak, turnLoop]);

  const startPrep = () => {
    if (!task.prepS) { void begin(); return; }
    setPhase('prep');
    setPrepLeft(task.prepS);
    const from = Date.now();
    const id = setInterval(() => {
      if (!alive.current) return;
      const left = task.prepS! - Math.floor((Date.now() - from) / 1000);
      setPrepLeft(Math.max(0, left));
      if (left <= 0) { clearInterval(id); void begin(); }
    }, 500);
    timers.current.push(id as unknown as ReturnType<typeof setTimeout>);
  };

  // A po_interaction with no bank is an authoring error the validator already
  // rejects. Refused rather than silently rendered as a monologue.
  if (!bank) {
    return (
      <View style={{ marginBottom: 22 }}>
        <TX role="label" color={t.danger}>{T.examInterlocutorMissing}</TX>
      </View>
    );
  }

  const coverage = coverageOf(bank, played.current);

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
            {task.prepS ? T.examStartPrep : T.examStartInteraction}
          </TX>
        </Press>
      ) : null}

      {phase === 'prep' ? (
        <View style={{ borderRadius: 14, borderWidth: 1, borderColor: t.acc, backgroundColor: t.accA(8), padding: 16 }}>
          <TX font="semi" role="label" color={t.accTx} style={{ marginBottom: 4 }}>{T.examPrepPhase}</TX>
          <TX role="meta" color={t.txMuted} lhMult={1.45} style={{ marginBottom: 10 }}>{T.examPrepInteractionBody}</TX>
          <TX font="semi" size={28} role="display" color={t.accTx}>{formatClock(prepLeft)}</TX>
        </View>
      ) : null}

      {phase === 'examiner' || phase === 'listening' ? (
        <View style={{ borderRadius: 14, borderWidth: 1, borderColor: phase === 'listening' ? t.danger : t.line(12), backgroundColor: t.card, padding: 16 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8, marginBottom: 10 }}>
            <Icon name={phase === 'listening' ? 'mic' : 'play'} size={16} color={phase === 'listening' ? t.danger : t.accTx} />
            <TX font="semi" role="label" color={phase === 'listening' ? t.danger : t.accTx}>
              {phase === 'listening' ? T.examYourTurn : T.examExaminerSpeaking}
            </TX>
            <View style={{ flex: 1 }} />
            {/* Progress the candidate can act on: how much of the document is
                still unasked. Not a score — the count of facts remaining. */}
            <TX role="meta" color={t.txMuted}>
              {coverage.covered.length}/{coverage.total}
            </TX>
          </View>

          {/* The exchange so far. The examiner's lines are shown because a
              candidate who mishears a spoken answer should not lose the fact
              as well as the listening. */}
          {lines.slice(-4).map((l, i) => (
            <TX
              key={i}
              role="meta"
              color={l.who === 'examiner' ? t.txSecondary : t.txMuted}
              lhMult={1.5}
              style={{ marginBottom: 4 }}
            >
              {l.who === 'examiner' ? '— ' : '· '}{l.text}
            </TX>
          ))}
        </View>
      ) : null}

      {phase === 'done' ? (
        <View style={{ borderRadius: 14, borderWidth: 1, borderColor: t.line(9), backgroundColor: t.card, padding: 16 }}>
          <TX font="semi" role="meta" color={t.txMuted} style={{ marginBottom: 6 }}>
            {T.examCoverage}: {coverage.covered.length}/{coverage.total}
          </TX>
          {coverage.missed.length > 0 ? (
            <TX role="meta" color={t.txMuted} lhMult={1.45} style={{ marginBottom: 8 }}>
              {T.examNotAsked}: {coverage.missed.join(', ')}
            </TX>
          ) : null}
          {sent ? (
            <TX role="meta" color={t.txMuted}>{deliverySummary(sent, lang).join(' · ')}</TX>
          ) : null}
          <TX role="meta" color={t.txMuted} lhMult={1.45} style={{ marginTop: 10 }}>
            {T.examDeliveryCaveat}
          </TX>
        </View>
      ) : null}
    </View>
  );
}
