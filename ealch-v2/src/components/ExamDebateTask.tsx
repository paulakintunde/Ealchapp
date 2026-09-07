// DELF B2 Production orale, phase 2: the débat.
//
// ── Why this is not ExamInterlocutorTask with a different bank ─────────────
//
// That component models an INFORMATION EXCHANGE: the candidate asks, the
// examiner supplies facts a document withheld, and coverage of those facts is
// the evidence. This inverts it. The examiner challenges a position the
// candidate has argued, for ten to thirteen minutes, and coverage would
// MISREPORT — a candidate who met every objection by agreeing has argued badly
// and would score full marks for having heard them all.
//
// So the loop is the same shape and the decisions inside it are not:
// `selectDebateMove` instead of `selectTurn`, a side to detect, a depth ladder,
// and a report of what was held rather than what was covered.
//
// ── This component is the fix for a shipped defect ─────────────────────────
//
// `po_debate` carried skill 'PO' and the old dispatch tested skill before task
// type, so a débat rendered as a plain recorder: the candidate talked and the
// examiner never raised an objection. The bank was authored, validated,
// rendered to twenty-nine clips and published, and never read — while the
// task's own prompt promised « L'examinateur va contester la position que vous
// venez de défendre ». See utils/examDispatch.logic.ts for the guard that now
// makes that class of omission a compile error.
import { useCallback, useEffect, useRef, useState } from 'react';
import { View } from 'react-native';
import { TX } from '@/components/Type';
import { Press } from '@/components/ui';
import { Icon } from '@/components/Icon';
import { useTheme } from '@/theme/useTheme';
import { useT } from '@/i18n/useT';
import { audio as audioService } from '@/services/audio';
import { computeDeliverySignals, type DeliverySignals, type SpeechSample } from '@/utils/deliverySignals.logic';
import {
  advance,
  debateReport,
  detectSide,
  openingState,
  selectDebateMove,
  type DebateReport,
  type DebateState,
} from '@/utils/debate.logic';
import { formatClock } from '@/utils/examClock.logic';
import type { ExamTask, InterlocutorTurn } from '@/content/schema';

export type DebateAnswer = {
  /** Every candidate turn, joined. What the grader marks. */
  transcript: string;
  signals: DeliverySignals;
  report: DebateReport;
  unavailable: boolean;
};

/** The beat between the examiner finishing and the mic opening, so the
 *  recogniser does not hear the tail of the objection as the candidate's
 *  French. Same value and reason as the interaction task. */
const HANDOVER_MS = 700;

/** Longer than the interaction's cap: a defended position at B2 is a developed
 *  answer, not a question at a counter. */
const TURN_MAX_MS = 90_000;

/** How many silent turns before the examiner closes. Two, as in the
 *  interaction: a candidate who says nothing twice is not debating, and looping
 *  the same challenge until the section clock runs out reads as a broken app. */
const MAX_SILENT_TURNS = 2;

type Phase = 'idle' | 'prep' | 'examiner' | 'listening' | 'done';
type Line = { who: 'examiner' | 'candidate'; text: string };

const LISTEN_OPTS = (
  samples: { current: SpeechSample[] },
  elapsedMs: () => number,
  alive: { current: boolean }
) => ({
  maxMs: TURN_MAX_MS,
  lang: 'fr-FR',
  onPartial: (text: string) => {
    if (!alive.current) return;
    samples.current.push({ atMs: elapsedMs(), words: text.trim() ? text.trim().split(/\s+/).length : 0 });
  },
});

export function ExamDebateTask({
  task,
  lang,
  onAnswer,
  editable,
  priorTranscript,
}: {
  task: ExamTask;
  lang: 'fr' | 'en';
  onAnswer: (a: DebateAnswer) => void;
  editable: boolean;
  /**
   * The monologue the candidate has just given, when the runner has it.
   *
   * The real examiner heard phase 1 and knows which side was argued. Ours reads
   * it from here when the section can supply it, and asks when it cannot —
   * `clarify` exists for exactly that, and `detectSide` returns 'unclear'
   * rather than guessing. Attacking the wrong side is the worst failure
   * available: the candidate's correct answer then looks like a non-answer and
   * they lose marks for our mistake.
   */
  priorTranscript?: string;
}) {
  const t = useTheme();
  const T = useT();
  const bank = task.debate;

  const [phase, setPhase] = useState<Phase>('idle');
  const [prepLeft, setPrepLeft] = useState(task.prepS ?? 0);
  const [lines, setLines] = useState<Line[]>([]);
  const [sent, setSent] = useState<DeliverySignals | null>(null);

  const state = useRef<DebateState>(openingState());
  const endSide = useRef(state.current.side);
  const silences = useRef(0);
  const said = useRef<string[]>([]);
  const confidences = useRef<number[]>([]);
  const samples = useRef<SpeechSample[]>([]);
  const speakingMs = useRef(0);
  const concessionsAnswered = useRef(0);
  /** The move just played, so the next reply can be scored against what it
   *  asked. A concession probe answered substantively is the single hardest
   *  thing this épreuve tests. */
  const lastKind = useRef<string | null>(null);
  const alive = useRef(true);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    alive.current = true;
    return () => {
      alive.current = false;
      timers.current.forEach(clearTimeout);
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

  const speak = useCallback(async (turn: InterlocutorTurn): Promise<void> => {
    setPhase('examiner');
    setLines((l) => [...l, { who: 'examiner', text: turn.text }]);
    await audioService.speakItem({ fr: turn.text, audioRef: turn.audioRef ?? null }, { lang: 'fr-FR' });
    const runS = turn.durationS ?? Math.max(2, Math.ceil(turn.text.length / 14));
    await new Promise<void>((r) => later(r, runS * 1000));
  }, []);

  const finish = useCallback((unavailable: boolean) => {
    if (!alive.current || !bank) return;
    const transcript = said.current.join(' ').trim();
    const confidence = confidences.current.length ? Math.max(...confidences.current) : -1;
    const signals = computeDeliverySignals({
      transcript,
      durationMs: speakingMs.current,
      confidence,
      samples: samples.current,
    });
    setPhase('done');
    setSent(signals);
    onAnswer({
      transcript,
      signals,
      report: debateReport(state.current, bank, endSide.current, concessionsAnswered.current),
      unavailable,
    });
  }, [bank, onAnswer]);

  /** One candidate turn, then the examiner's reply. */
  const turnLoop = useCallback(async () => {
    if (!bank) return;
    setPhase('listening');
    let res;
    const startedAt = Date.now();
    try {
      const { stt } = await import('@/services/stt');
      const ok = await stt.ensurePermission();
      if (!ok) { finish(true); return; }
      await new Promise<void>((r) => later(r, HANDOVER_MS));
      if (!alive.current) return;
      const listen = async () => {
        const from = Date.now();
        const base = speakingMs.current;
        try {
          return await stt.listen('', LISTEN_OPTS(samples, () => base + (Date.now() - from), alive));
        } finally {
          speakingMs.current = base + (Date.now() - from);
        }
      };
      const before = speakingMs.current;
      res = await listen();
      if (res.error === 'busy') {
        speakingMs.current = before;
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
      // A concession probe that drew a substantive answer is direct evidence
      // for the rubric's hardest criterion. Counted here, where the pairing of
      // move and reply is known; the report cannot recover it later.
      if (lastKind.current === 'concession' && heard.split(/\s+/).length >= 12) {
        concessionsAnswered.current += 1;
      }
      // The side they are on NOW, for the report's "held" signal. Read every
      // turn rather than once, because the whole question is whether it moved.
      const now = detectSide(heard, bank.sideCues);
      if (now !== 'unclear') endSide.current = now;
      if (state.current.side === 'unclear' && now !== 'unclear') {
        state.current = { ...state.current, side: now };
      }
    } else if (++silences.current >= MAX_SILENT_TURNS) {
      await speak(bank.closing);
      finish(false);
      return;
    }

    // The clock is what ends a debate, never the bank — the épreuve has a ten
    // minute floor and an examiner who falls silent at four has halved it.
    state.current = { ...state.current, elapsedS: state.current.elapsedS + Math.round((Date.now() - startedAt) / 1000) };

    const next = selectDebateMove(state.current, heard, bank);
    if (next.kind === 'closing') {
      await speak(bank.closing);
      finish(false);
      return;
    }
    if (next.kind === 'clarify') {
      lastKind.current = null;
      await speak(bank.clarify);
    } else {
      lastKind.current = next.turn.kind;
      state.current = advance(state.current, next, 0);
      await speak(next.turn);
    }
    if (alive.current) void turnLoop();
  }, [bank, finish, speak]);

  const begin = useCallback(async () => {
    if (!bank) return;
    // Seed the side from the monologue when the runner supplied it. Without it
    // the machine opens at 'unclear' and the examiner's first move is to ask,
    // which is what a real one would do having missed the answer.
    if (priorTranscript?.trim()) {
      const side = detectSide(priorTranscript, bank.sideCues);
      state.current = { ...state.current, side };
      endSide.current = side;
    }
    await speak(bank.opening);
    if (alive.current) void turnLoop();
  }, [bank, priorTranscript, speak, turnLoop]);

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

  // A po_debate with no bank is an authoring error the validator already
  // rejects. Refused rather than silently rendered as a monologue — which is
  // precisely the failure this component exists to end.
  if (!bank) {
    return (
      <View style={{ marginBottom: 22 }}>
        <TX role="label" color={t.danger}>{T.examDebateMissing}</TX>
      </View>
    );
  }

  return (
    <View style={{ marginBottom: 22 }}>
      <TX role="label" color={t.accTx} accessibilityLanguage={lang === 'fr' ? 'fr-FR' : 'en-GB'}>
        {task.label ?? T.examStartDebate}
      </TX>
      <View style={{ height: 6 }} />
      <TX accessibilityLanguage="fr-FR">{task.prompt}</TX>

      {phase === 'idle' ? (
        <View style={{ marginTop: 14 }}>
          <Press
            onPress={startPrep}
            disabled={!editable}
            accessibilityRole="button"
            accessibilityLabel={T.examStartDebate}
            style={{
              flexDirection: 'row', alignItems: 'center', gap: 8, alignSelf: 'flex-start',
              paddingHorizontal: 16, paddingVertical: 12, borderRadius: 14,
              backgroundColor: editable ? t.acc : t.line(12),
            }}
          >
            <Icon name="mic" size={18} color={editable ? t.accInk : t.accTx} />
            <TX role="label" color={editable ? t.accInk : t.accTx}>{T.examStartDebate}</TX>
          </Press>
        </View>
      ) : null}

      {phase === 'prep' ? (
        <View style={{ marginTop: 14 }}>
          <TX role="label" color={t.accTx}>{T.examPrepPhase} · {formatClock(prepLeft)}</TX>
        </View>
      ) : null}

      {lines.length ? (
        <View style={{ marginTop: 14, gap: 10 }}>
          {lines.map((l, i) => (
            <View
              key={i}
              style={{
                alignSelf: l.who === 'examiner' ? 'flex-start' : 'flex-end',
                maxWidth: '88%',
                paddingHorizontal: 14, paddingVertical: 10, borderRadius: 14,
                backgroundColor: l.who === 'examiner' ? t.line(8) : t.accA(10),
              }}
            >
              <TX accessibilityLanguage="fr-FR">{l.text}</TX>
            </View>
          ))}
        </View>
      ) : null}

      {phase === 'listening' ? (
        <View style={{ marginTop: 12, flexDirection: 'row', alignItems: 'center', gap: 8 }}>
          <Icon name="mic" size={16} color={t.acc} />
          <TX role="label" color={t.acc}>{T.examYourTurn}</TX>
        </View>
      ) : null}

      {phase === 'done' && sent ? (
        <View style={{ marginTop: 12 }}>
          <TX role="label" color={t.accTx}>{T.examDeliveryCaveat}</TX>
        </View>
      ) : null}
    </View>
  );
}
