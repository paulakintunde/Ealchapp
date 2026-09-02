// Compréhension orale playback rules — pure, no React, no audio.
//
// ── What a listening épreuve actually constrains ────────────────────────────
//
// It is tempting to model this as "questions locked until the audio finishes".
// That is not the paper. Both boards give a short reading window before each
// recording precisely SO the candidate can read the questions first, and the
// questions stay readable while the audio runs. What is actually constrained
// is narrower and stricter:
//
//   · the audio starts on its own, once, at a time the candidate does not pick
//   · it plays a fixed number of times and then it is gone
//   · there is no scrub bar and no replay button
//   · once you move on, you cannot go back — not to the audio, not to the
//     questions
//
// So the phases below track a PART's life, and the only thing they gate is
// whether that part's questions are still editable. See PartPhase.

// Relative and with the extension, like progress.logic.ts. The `@/` alias is
// a Metro/tsconfig convenience that only ealch-v2 maps, and this module is
// imported from ealch-admin too (the audio budget report), where the alias
// resolves to nothing.
import type { ExamMode } from '../content/schema.ts';

export type PartPhase =
  /** The reading window: questions visible, audio not started. */
  | 'reading'
  /** Audio running. Questions stay editable — that is the real paper. */
  | 'playing'
  /** Audio spent. Still the current part, still editable. */
  | 'answering'
  /** Moved past. Editable no longer, and the audio is gone for good. */
  | 'closed'
  /** Neither a clip nor device TTS produced sound. See the note on
   *  markUnplayable — this part cannot be scored as listening. */
  | 'unplayable';

export type PartPlayback = {
  phase: PartPhase;
  /** Plays STARTED, not finished. A part is spent when this reaches playCount. */
  playsStarted: number;
  /** Effective play count: the part's own, or 1. */
  playCount: number;
  readWindowS: number;
};

/** Absent playCount means one. A part nobody may hear is not a listening item,
 *  which validateExamTask already rejects, so 0 cannot arrive here. */
export function effectivePlayCount(part: { playCount?: number }): number {
  return Math.max(1, Math.floor(part.playCount ?? 1));
}

export function initPlayback(part: { playCount?: number; readWindowS?: number }): PartPlayback {
  const readWindowS = Math.max(0, Math.floor(part.readWindowS ?? 0));
  return {
    phase: readWindowS > 0 ? 'reading' : 'playing',
    playsStarted: 0,
    playCount: effectivePlayCount(part),
    readWindowS,
  };
}

/**
 * Whether another play may START.
 *
 * Practice mode lifts the limit entirely: replaying is how a candidate learns
 * what they missed, and a practice attempt is already excluded from every
 * number the report shows (see isScored). Exam mode holds the paper's count.
 */
export function canPlay(pb: PartPlayback, mode: ExamMode): boolean {
  if (pb.phase === 'closed' || pb.phase === 'unplayable') return false;
  if (mode === 'practice') return true;
  return pb.playsStarted < pb.playCount;
}

/** A play has begun. */
export function startPlay(pb: PartPlayback): PartPlayback {
  return { ...pb, phase: 'playing', playsStarted: pb.playsStarted + 1 };
}

/** A play has ended. The part becomes answerable; whether it may play again is
 *  canPlay's business, not this function's. */
export function endPlay(pb: PartPlayback): PartPlayback {
  if (pb.phase !== 'playing') return pb;
  return { ...pb, phase: 'answering' };
}

/**
 * Neither a rendered clip nor device TTS produced sound.
 *
 * This is a real outcome and it must stay visible. The tempting fallback —
 * show the transcript and mark the questions as normal — turns a listening item
 * into a reading item and scores it as listening, which is the exact
 * dishonest surface this codebase forbids elsewhere. So the part is marked,
 * the candidate is told, and the section reports it as unscored rather than
 * pretending it was heard.
 */
export function markUnplayable(pb: PartPlayback): PartPlayback {
  return { ...pb, phase: 'unplayable' };
}

/** Move past a part. One-way: there is no reopen, because the paper has none. */
export function closePart(pb: PartPlayback): PartPlayback {
  if (pb.phase === 'unplayable') return pb; // stays unplayable, and stays reported
  return { ...pb, phase: 'closed' };
}

/** Are this part's questions still editable? */
export function isEditable(pb: PartPlayback): boolean {
  return pb.phase === 'reading' || pb.phase === 'playing' || pb.phase === 'answering';
}

/** Practice mode shows the transcript; exam mode never does. Showing it under
 *  exam conditions would make every listening item a reading item. */
export function showsTranscript(mode: ExamMode): boolean {
  return mode === 'practice';
}

/** How long a part's audio runs, for sequencing repeat plays and the on-screen
 *  indicator.
 *
 *  A rendered clip's real duration belongs on the part and is written there by
 *  the render pipeline (phase E8). Until it exists, this estimates from the
 *  transcript, because the alternative is worse than an estimate: `speakItem`
 *  fires its completion callback immediately on the clip path (expo-audio
 *  exposes no per-play completion on the shared player), so a part with
 *  playCount 2 would start both plays in the same tick and the candidate would
 *  hear them on top of each other.
 *
 *  ~14 characters per second is French speech at the B1/B2 pace the blueprints
 *  target. Deliberately a slight OVER-estimate: a gap that is too long costs a
 *  second of silence, one that is too short overlaps two plays. */
export const CHARS_PER_SECOND = 14;

export function estimateDurationS(part: { durationS?: number; text?: string }): number {
  if (typeof part.durationS === 'number' && part.durationS > 0) return part.durationS;
  const chars = (part.text ?? '').trim().length;
  if (chars === 0) return 0;
  return Math.max(2, Math.ceil(chars / CHARS_PER_SECOND));
}

/** The pause between repeat plays, as the real paper leaves one. */
export const REPLAY_GAP_S = 2;

/**
 * A transcript as the TTS fallback should SAY it.
 *
 * A listening transcript is authored as a turn list, speaker-labelled, because
 * that is what the render pipeline stitches per voice. Handed to device TTS
 * verbatim, those labels get read out: a candidate hears "LA CLIENTE deux
 * points Bonjour", and on a micro-trottoir they hear "PERSONNE 1 deux points"
 * three times. The block whose task is to tell three speakers apart becomes a
 * block that announces them.
 *
 * So the labels come off, and each turn is ended with a full stop if it has no
 * terminal punctuation of its own, which is what makes the synthesiser pause
 * between speakers instead of running them together.
 *
 * This does NOT make one voice into three. It cannot, and nothing here
 * pretends otherwise — real casting is E8's job. It removes the part of the
 * problem that is ours.
 */

/**
 * A transcript as the TTS fallback should SAY it.
 *
 * A listening transcript is authored as a turn list, speaker-labelled, because
 * that is what the render pipeline stitches per voice. Handed to device TTS
 * verbatim, those labels get read out: a candidate hears "LA CLIENTE deux
 * points Bonjour", and on a micro-trottoir they hear "PERSONNE 1 deux points"
 * three times over. The block whose whole task is telling three speakers apart
 * becomes the block that announces them.
 *
 * So the labels come off, and every turn ends with terminal punctuation, which
 * is what makes a synthesiser pause between speakers instead of running them
 * together into one breath.
 *
 * This does NOT turn one voice into three. It cannot, and nothing here
 * pretends otherwise: real casting is E8's work. It removes the part of the
 * problem that is ours.
 */
export type TranscriptTurn = { speaker: string; text: string };

/**
 * A transcript as the turn list it was authored as.
 *
 * `spokenTranscript` flattens the same input into one string for a single
 * voice. This keeps the turns apart, so the device fallback can give each
 * speaker a different voice — which for blocks C, E and F is not decoration:
 * the item asks the candidate to tell the speakers apart, and one voice makes
 * that a different task.
 *
 * A line with no label continues the speaker before it, because that is what a
 * wrapped paragraph inside one turn actually is.
 */
export function transcriptTurns(text: string): TranscriptTurn[] {
  const out: TranscriptTurn[] = [];
  for (const raw of text.split('\n')) {
    const line = raw.trim();
    if (!line) continue;
    const m = /^([A-ZÀ-Ý0-9'’ .-]{2,32})\s*:\s*(.+)$/.exec(line);
    if (m && m[2]) {
      out.push({ speaker: m[1]!.trim(), text: stopped(m[2]!.trim()) });
    } else if (out.length) {
      const last = out[out.length - 1]!;
      last.text = stopped(`${last.text.replace(/\.$/, '')} ${line}`);
    } else {
      out.push({ speaker: '', text: stopped(line) });
    }
  }
  return out;
}

/** Terminal punctuation, so a synthesiser stops rather than running on. */
function stopped(line: string): string {
  return /[.!?…]["»']?$/.test(line) ? line : `${line}.`;
}

/**
 * One device voice per speaker, distinct while the device has enough of them.
 *
 * Degrades honestly. Most phones ship two or three French voices, not eight, so
 * with more speakers than voices this cycles — two speakers may share, and that
 * is better than failing. With no voices at all every turn gets undefined and
 * the engine speaks language-only, which is exactly today's behaviour.
 *
 * Assignment follows FIRST APPEARANCE, so the same speaker keeps one voice for
 * the whole document and a re-play sounds the same as the first play.
 */
export function assignDeviceVoices(
  speakers: readonly string[],
  available: readonly string[]
): Map<string, string | undefined> {
  const out = new Map<string, string | undefined>();
  if (available.length === 0) {
    for (const s of speakers) out.set(s, undefined);
    return out;
  }
  let next = 0;
  for (const s of speakers) {
    if (out.has(s)) continue;
    out.set(s, available[next % available.length]);
    next += 1;
  }
  return out;
}

export function spokenTranscript(text: string): string {
  return text
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean)
    // An all-caps run before a colon is a speaker label. Ordinary French prose
    // does not shout, so "Ordre du jour : devis de ravalement" is left alone.
    .map((line) => line.replace(/^[A-ZÀ-Ý0-9'\u2019 .-]{2,32}\s*:\s*/, ''))
    .filter(Boolean)
    .map((line) => (/[.!?\u2026]["\u00bb']?$/.test(line) ? line : line + '.'))
    .join(' ');
}
