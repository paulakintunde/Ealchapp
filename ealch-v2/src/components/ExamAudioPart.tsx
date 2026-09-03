// One listening document: its audio, its image, its questions.
//
// ── One call, not two paths ─────────────────────────────────────────────────
//
// While a paper is in review its parts have no rendered clip, so they speak
// through device TTS; once E8 renders and marks a clip, `audioRef` resolves and
// the same part speaks in the studio voice. This component does not know which
// happened and must not: `audio.speakItem` resolves the clip when there is one
// and falls back to TTS when there is not, in a single call. Branching here
// would mean two code paths, one of which nobody exercises until E8.
//
// What it DOES care about is the third outcome: neither produced sound. That is
// not a fallback, it is a failure, and it is reported rather than papered over
// with the transcript.
import { useCallback, useEffect, useRef, useState } from 'react';
import { Image, View } from 'react-native';
import { TX } from '@/components/Type';
import { Press } from '@/components/ui';
import { Icon } from '@/components/Icon';
import { useTheme } from '@/theme/useTheme';
import { useT } from '@/i18n/useT';
import { contentAssetUrl } from '@/services/content';
import { audio as audioService } from '@/services/audio';
import {
  REPLAY_GAP_S,
  canPlay,
  endPlay,
  estimateDurationS,
  initPlayback,
  markUnplayable,
  assignDeviceVoices,
  showsTranscript,
  spokenTranscript,
  startPlay,
  transcriptTurns,
  type PartPlayback,
} from '@/utils/coPlayback.logic';
import type { ExamMode, ExamPart } from '@/content/schema';

export type ExamAudioPartProps = {
  part: ExamPart;
  mode: ExamMode;
  /** Raised the first time this part fails to make any sound, so the section
   *  can report it as unscored. */
  onUnplayable: () => void;
  children: (editable: boolean) => React.ReactNode;
};

export function ExamAudioPart({ part, mode, onUnplayable, children }: ExamAudioPartProps) {
  const t = useTheme();
  const T = useT();
  const [pb, setPb] = useState<PartPlayback>(() => initPlayback(part));
  const [transcriptOpen, setTranscriptOpen] = useState(false);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);
  const alive = useRef(true);

  useEffect(() => {
    alive.current = true;
    return () => {
      alive.current = false;
      // A part left mid-play must not keep speaking over the next one, and its
      // pending timers must not fire into an unmounted tree.
      for (const id of timers.current) clearTimeout(id);
      timers.current = [];
      audioService.stop();
    };
  }, []);

  const later = (fn: () => void, ms: number) => {
    const id = setTimeout(() => {
      if (alive.current) fn();
    }, ms);
    timers.current.push(id);
  };

  const play = useCallback(() => {
    setPb((prev) => {
      if (!canPlay(prev, mode)) return prev;
      const next = startPlay(prev);

      let failed = false;
      const fail = () => {
        failed = true;
        if (!alive.current) return;
        setPb((p) => markUnplayable(p));
        onUnplayable();
      };

      // TWO PATHS, and which one runs is decided by whether a clip exists.
      //
      // With a clip, `speakItem` plays the rendered file — one stitched
      // recording already cast across its speakers, which is the real thing.
      //
      // Without one, the device engine speaks it, and speaking a three-person
      // micro-trottoir in a single voice makes block C a different task from
      // the one it asks. So the fallback walks the turns and gives each speaker
      // a different device voice where the phone has them. It is not the
      // rendered audio and does not pretend to be; it is the honest version of
      // a fallback, and it is what a reviewer hears on a paper E9 has authored
      // but not yet rendered.
      if (part.audioRef) {
        void audioService
          .speakItem({ fr: spokenTranscript(part.text ?? ''), audioRef: part.audioRef }, {
            lang: 'fr-FR',
            // onError fires only when the TTS fallback itself failed, which
            // means nothing produced sound at all.
            onError: fail,
          })
          // speakItem never throws, but a rejected promise here would silently
          // leave the part stuck 'playing' forever.
          .catch(fail);
      } else {
        void speakTurns(part.text ?? '', fail);
      }

      // The clip path reports completion immediately (the shared player has no
      // per-play callback), so the end of the audio is timed rather than
      // observed. See estimateDurationS for why an estimate beats the
      // alternative of two plays starting in the same tick.
      const runS = estimateDurationS(part);
      later(() => {
        if (!failed) setPb((p) => endPlay(p));
      }, Math.max(1, runS) * 1000);

      return next;
    });
  }, [mode, part, onUnplayable]);

  // Autoplay. There is no play button under exam conditions: the audio starts
  // on its own, after the reading window, at a time the candidate does not pick.
  useEffect(() => {
    if (pb.phase !== 'reading') return;
    later(() => play(), pb.readWindowS * 1000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (pb.phase === 'playing' || pb.phase === 'unplayable' || pb.phase === 'closed') return;
    // Repeat plays, for the blocks the paper repeats. Practice mode replays on
    // demand instead, through the button below.
    if (mode === 'exam' && pb.playsStarted > 0 && pb.playsStarted < pb.playCount) {
      later(() => play(), REPLAY_GAP_S * 1000);
    }
  }, [pb.phase, pb.playsStarted, pb.playCount, mode, play]);

  const imageUrl = part.imageRef ? contentAssetUrl(part.imageRef) : null;
  const [imageFailed, setImageFailed] = useState(false);
  const editable = pb.phase !== 'closed' && pb.phase !== 'unplayable';
  const playsLeft = Math.max(0, pb.playCount - pb.playsStarted);

  return (
    <View style={{ marginBottom: 22 }}>
      {/* Stacked, not a row. These used to sit side by side with the label at
          flexShrink: 0, so a long label ate the width and the status — a whole
          sentence in the reading phase — was squeezed into a ragged right-hand
          column. Section C's labels are the longest in the paper
          ('Micro-trottoir 1 · « Faut-il fermer le centre-ville aux voitures ? »')
          and read as visibly shifted. A title and a status line are two facts,
          not one row. */}
      <View style={{ alignItems: 'flex-start', gap: 4, marginBottom: 8 }}>
        <TX font="semi" role="meta" color={t.txMuted}>{part.label}</TX>
        <PlayState pb={pb} mode={mode} playsLeft={playsLeft} />
      </View>

      {/* TEF CO block A answers with pictures: the image IS the question, so it
          renders above the options and always carries its alt text. */}
      {imageUrl && !imageFailed ? (
        <Image
          source={{ uri: imageUrl }}
          accessibilityLabel={part.imageAlt}
          accessible
          resizeMode="contain"
          onError={() => setImageFailed(true)}
          // Square, not a fixed 160dp band. The plates are 2x2 grids rendered
          // at square_hd, so `contain` inside a 160-tall box letterboxed them to
          // 160x160 — under half the available width, leaving each of the four
          // panels about 70dp on a Pixel 6. Legible, but this is the A1-A2
          // on-ramp and STANDARD-tef is explicit that the images ARE the
          // options; an option a candidate has to squint at is a harder item
          // than the blueprint asks for. aspectRatio matches the asset, so the
          // plate is as large as the column allows and each panel roughly
          // trebles in width. `contain` stays as the safety net for any future
          // plate that is not square.
          style={{ width: '100%', aspectRatio: 1, borderRadius: 12, marginBottom: 12, backgroundColor: t.card }}
        />
      ) : null}

      {/* The plate has not been rendered yet, or would not load. The authored
          alt describes all four panels, so the item stays answerable and the
          candidate is told what happened instead of being shown a blank box
          and left to guess. */}
      {imageUrl && imageFailed && part.imageAlt ? (
        <View style={{ borderRadius: 12, borderWidth: 1, borderColor: t.line(12), backgroundColor: t.card, padding: 14, marginBottom: 12 }}>
          <TX font="semi" role="meta" color={t.txMuted} style={{ marginBottom: 6 }}>{T.examImageUnavailable}</TX>
          <TX role="meta" color={t.txSecondary} lhMult={1.5}>{part.imageAlt}</TX>
        </View>
      ) : null}

      {pb.phase === 'unplayable' ? (
        <View style={{ borderRadius: 12, borderWidth: 1, borderColor: t.danger, backgroundColor: t.card, padding: 14, marginBottom: 12 }}>
          <TX font="semi" role="label" color={t.danger} style={{ marginBottom: 4 }}>{T.examAudioFailed}</TX>
          <TX role="meta" color={t.txSecondary} lhMult={1.45}>{T.examAudioFailedBody}</TX>
        </View>
      ) : null}

      {/* Practice mode only: replay on demand, and the transcript. Neither
          exists under exam conditions — a visible transcript would turn every
          listening item into a reading item. */}
      {mode === 'practice' && pb.phase !== 'unplayable' ? (
        <View style={{ flexDirection: 'row', gap: 10, marginBottom: 12 }}>
          <Press
            onPress={play}
            style={{ flexDirection: 'row', alignItems: 'center', gap: 6, borderRadius: 20, borderWidth: 1, borderColor: t.line(12), paddingHorizontal: 14, minHeight: 38, justifyContent: 'center' }}
          >
            <Icon name="play" size={13} color={t.txSecondary} />
            <TX font="semi" role="meta" color={t.txSecondary}>{T.examReplay}</TX>
          </Press>
          {part.text ? (
            <Press
              onPress={() => setTranscriptOpen((v) => !v)}
              style={{ flexDirection: 'row', alignItems: 'center', gap: 6, borderRadius: 20, borderWidth: 1, borderColor: t.line(12), paddingHorizontal: 14, minHeight: 38, justifyContent: 'center' }}
            >
              <TX font="semi" role="meta" color={t.txSecondary}>{T.examTranscript}</TX>
            </Press>
          ) : null}
        </View>
      ) : null}

      {showsTranscript(mode) && transcriptOpen && part.text ? (
        <View style={{ borderRadius: 12, borderWidth: 1, borderColor: t.line(9), backgroundColor: t.card, padding: 14, marginBottom: 12 }}>
          <TX role="label" color={t.txSecondary} lhMult={1.6}>{part.text}</TX>
        </View>
      ) : null}

      {children(editable)}
    </View>
  );
}

/** What the candidate is told about the audio, and nothing more: no scrub bar,
 *  no elapsed time, no waveform. There is nothing to seek. */
/**
 * Speak a labelled transcript turn by turn, a different device voice per
 * speaker where the phone has enough of them.
 *
 * Sequential on purpose: `tts.speak` cancels whatever is speaking, so firing
 * the turns together would play only the last one. Each turn waits for the one
 * before it, which is also what makes the speaker change audible.
 *
 * Reports failure only if the FIRST turn produced no sound at all. A later turn
 * failing mid-document is not "this part is unplayable" — the candidate has
 * already heard some of it, and marking the whole part dead would throw away a
 * question they could still answer.
 */
async function speakTurns(text: string, onFail: () => void): Promise<void> {
  const turns = transcriptTurns(text);
  if (turns.length === 0) return;

  const { tts, deviceVoicesFor } = await import('@/services/tts');
  const voices = assignDeviceVoices(turns.map((t) => t.speaker), deviceVoicesFor('fr-FR'));
  if (__DEV__) {
    // Which speaker got which voice, so a reviewer can tell a genuine cast
    // from a phone that only had one voice to give.
    console.log(
      `[exam-tts] ${turns.length} turn(s), cast: ` +
      [...voices.entries()].map(([s, v]) => `${s || '(narrateur)'}=${v ?? 'default'}`).join(' · ')
    );
  }

  for (let i = 0; i < turns.length; i += 1) {
    const turn = turns[i]!;
    const spoke = await new Promise<boolean>((resolve) => {
      void tts.speak(turn.text, {
        lang: 'fr-FR',
        deviceVoiceId: voices.get(turn.speaker),
        onDone: () => resolve(true),
        onError: () => resolve(false),
      });
    });
    if (!spoke && i === 0) {
      onFail();
      return;
    }
  }
}

function PlayState({ pb, mode, playsLeft }: { pb: PartPlayback; mode: ExamMode; playsLeft: number }) {
  const t = useTheme();
  const T = useT();
  if (pb.phase === 'unplayable') return null;
  if (pb.phase === 'reading') {
    return <TX role="meta" color={t.txMuted}>{T.examReadWindow}</TX>;
  }
  if (pb.phase === 'playing') {
    return (
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6 }}>
        <Icon name="play" size={13} color={t.accTx} />
        <TX font="semi" role="meta" color={t.accTx}>{T.examPlaying}</TX>
      </View>
    );
  }
  if (mode === 'exam' && playsLeft > 0) {
    return <TX role="meta" color={t.txMuted}>{T.examPlaysLeft.replace('{n}', String(playsLeft))}</TX>;
  }
  return <TX role="meta" color={t.txMuted}>{T.examAudioSpent}</TX>;
}
