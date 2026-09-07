// Delivery signals for a spoken answer — pure arithmetic, no React, no mic.
//
// ── What these are, and what they are emphatically not ──────────────────────
//
// A real expression orale mark is substantially about DELIVERY: pronunciation,
// fluency, hesitation, whether the examiner has to work to follow you. A
// transcript loses all of it. Grading a transcript alone and calling the result
// a speaking band would quietly measure composition and label it speech.
//
// So we compute three proxies from things we can actually observe: how fast the
// candidate spoke, how often they stopped, and how sure the recogniser was.
// They are PROXIES. They are not a pronunciation assessment, they cannot become
// one, and the report says so in plain words.
//
// The rule that keeps them defensible is the one below, and it is the reason
// every field on DeliverySignals is optional:
//
//   A SIGNAL EXISTS ONLY IF IT WAS MEASURED.
//
// No defaults, no zero-fill, no "assume average". A recogniser that does not
// report confidence yields no confidence signal; an answer captured without
// interim transcripts yields no pause signal. Substituting a plausible number
// would invent evidence about a candidate's speech, which is the same class of
// mistake as fabricating a band.

/** One reading of the interim transcript, taken as the candidate speaks. */
export type SpeechSample = {
  /** Milliseconds since recording started. */
  atMs: number;
  /** Words in the interim transcript at that moment. */
  words: number;
};

export type DeliverySignals = {
  /** Always known: how long the recording ran. */
  durationMs: number;
  /** Always known: words in the final transcript. */
  words: number;
  /** Words per minute. Absent when the answer was too short to mean anything. */
  wpm?: number;
  /** Silences longer than PAUSE_MS. Absent when no interim samples exist. */
  pauseCount?: number;
  /** The longest single silence, in ms. Absent with pauseCount. */
  longestPauseMs?: number;
  /** Recogniser confidence, 0..1. Absent when the recogniser did not report it. */
  confidence?: number;
};

/** A silence this long or longer counts as a pause. Below roughly a second and
 *  a half you are measuring the gaps between ordinary words, not hesitation. */
export const PAUSE_MS = 1500;

/** Under this, words-per-minute is noise: a five-word answer at 0.8 s reads as
 *  375 wpm and means nothing. */
export const MIN_DURATION_FOR_WPM_MS = 5000;

/** Words, counted the way the word-count on the writing tasks counts them. */
export function countWords(transcript: string): number {
  const t = transcript.trim();
  return t ? t.split(/\s+/).length : 0;
}

/**
 * Pauses, derived from consecutive interim readings where the transcript did
 * not grow.
 *
 * This is why interim transcripts are worth keeping even though the final
 * transcript is what gets graded: the gaps BETWEEN them are the only view we
 * have of hesitation without doing silence detection on the audio itself.
 *
 * Fewer than two samples means nothing was observed, which is different from
 * "no pauses" — hence undefined rather than 0.
 */
export function pausesFrom(samples: SpeechSample[]): { pauseCount: number; longestPauseMs: number } | undefined {
  if (samples.length < 2) return undefined;
  const ordered = [...samples].sort((a, b) => a.atMs - b.atMs);
  let pauseCount = 0;
  let longestPauseMs = 0;
  for (let i = 1; i < ordered.length; i += 1) {
    const prev = ordered[i - 1]!;
    const cur = ordered[i]!;
    // The transcript did not grow across this interval: the candidate was not
    // producing words. A gap where words DID appear is speech, however slow.
    if (cur.words > prev.words) continue;
    const gap = cur.atMs - prev.atMs;
    if (gap >= PAUSE_MS) {
      pauseCount += 1;
      if (gap > longestPauseMs) longestPauseMs = gap;
    }
  }
  return { pauseCount, longestPauseMs };
}

export function computeDeliverySignals(input: {
  transcript: string;
  durationMs: number;
  /** -1 means the recogniser did not report one. See the module note. */
  confidence: number;
  samples?: SpeechSample[];
}): DeliverySignals {
  const words = countWords(input.transcript);
  const durationMs = Math.max(0, Math.round(input.durationMs));

  const out: DeliverySignals = { durationMs, words };

  if (durationMs >= MIN_DURATION_FOR_WPM_MS && words > 0) {
    out.wpm = Math.round(words / (durationMs / 60_000));
  }

  const pauses = pausesFrom(input.samples ?? []);
  if (pauses) {
    out.pauseCount = pauses.pauseCount;
    out.longestPauseMs = pauses.longestPauseMs;
  }

  // -1 is stt.ts's "not reported". Anything outside 0..1 is not a confidence.
  if (input.confidence >= 0 && input.confidence <= 1) out.confidence = input.confidence;

  return out;
}

/**
 * The signals as a line the grader is given, alongside the rubric.
 *
 * Deliberately prose rather than a JSON blob, and deliberately prefixed with
 * what it is NOT. The grader is a language model: handed a bare
 * `{wpm: 92, pauseCount: 7}` it will happily reason about pronunciation it
 * cannot hear. The framing is doing real work here, not decorating.
 *
 * Returns null when nothing was measured, so the caller sends no delivery line
 * at all rather than an empty one.
 */
export function deliveryNote(s: DeliverySignals, lang: 'fr' | 'en'): string | null {
  const bits: string[] = [];
  if (s.wpm !== undefined) bits.push(lang === 'fr' ? `débit ${s.wpm} mots/minute` : `pace ${s.wpm} words per minute`);
  if (s.pauseCount !== undefined) {
    const longest = Math.round((s.longestPauseMs ?? 0) / 100) / 10;
    bits.push(
      lang === 'fr'
        ? `${s.pauseCount} pause(s) d'au moins ${PAUSE_MS / 1000} s, la plus longue ${longest} s`
        : `${s.pauseCount} pause(s) of ${PAUSE_MS / 1000}s or more, longest ${longest}s`
    );
  }
  if (s.confidence !== undefined) {
    bits.push(
      lang === 'fr'
        ? `confiance du système de reconnaissance ${Math.round(s.confidence * 100)} %`
        : `speech recogniser confidence ${Math.round(s.confidence * 100)}%`
    );
  }
  if (bits.length === 0) return null;

  const preamble =
    lang === 'fr'
      ? "Indicateurs approximatifs de débit, mesurés par le logiciel. Ce ne sont PAS une évaluation de la prononciation : personne n'a écouté l'enregistrement. Ne les utilisez que pour le critère de fluidité, et jamais pour juger l'accent ou la prononciation."
      : 'Rough pacing indicators, measured by software. These are NOT a pronunciation assessment: nothing listened to the recording. Use them only for the fluency criterion, never to judge accent or pronunciation.';

  return `${preamble} ${bits.join(' · ')}.`;
}

/** What the candidate is shown about their own delivery. Same honesty rule:
 *  a measurement, never a verdict. */
export function deliverySummary(s: DeliverySignals, lang: 'fr' | 'en'): string[] {
  const out: string[] = [];
  const secs = Math.round(s.durationMs / 1000);
  out.push(lang === 'fr' ? `${secs} s · ${s.words} mots` : `${secs}s · ${s.words} words`);
  if (s.wpm !== undefined) out.push(lang === 'fr' ? `${s.wpm} mots/min` : `${s.wpm} wpm`);
  if (s.pauseCount !== undefined) {
    out.push(lang === 'fr' ? `${s.pauseCount} pause(s)` : `${s.pauseCount} pause(s)`);
  }
  return out;
}

/**
 * How a spoken answer's length sits against what the task asked for.
 *
 * `responseSpec.minDurationS` and `maxDurationS` were authored on thirteen
 * speaking tasks across six papers and read by NOTHING. The text path has done
 * this since it shipped — exam-section.tsx counts words live against
 * `minWords`/`maxWords` — so a writing candidate could see they were forty
 * words short while a speaking candidate had no idea they had answered a
 * four-and-a-half-minute task in fifty seconds, and the grader was handed a
 * duration with nothing to judge it against.
 *
 * Length is not a proxy for quality and this does not score anything. It states
 * a fact the rubric already cares about: a task that asks a candidate to
 * develop a position cannot be satisfied in a fraction of its window, however
 * good the French in it is.
 *
 * Returns null when the task set no bounds, which is most of them.
 */
export function durationVerdict(
  durationMs: number,
  spec: { minDurationS?: number; maxDurationS?: number } | undefined
): 'short' | 'within' | 'long' | null {
  if (!spec) return null;
  const { minDurationS: min, maxDurationS: max } = spec;
  if (min === undefined && max === undefined) return null;
  const secs = durationMs / 1000;
  if (min !== undefined && secs < min) return 'short';
  if (max !== undefined && secs > max) return 'long';
  return 'within';
}

/** The verdict as a line a candidate or a grader reads. Null when there is
 *  nothing to say, so callers can append it without a branch. */
export function durationNote(
  durationMs: number,
  spec: { minDurationS?: number; maxDurationS?: number } | undefined,
  lang: 'fr' | 'en'
): string | null {
  const v = durationVerdict(durationMs, spec);
  if (v === null || v === 'within') return null;
  const target = v === 'short' ? spec!.minDurationS! : spec!.maxDurationS!;
  if (v === 'short') {
    return lang === 'fr'
      ? `plus court que les ${target} s attendues`
      : `shorter than the ${target}s asked for`;
  }
  return lang === 'fr' ? `plus long que les ${target} s prévues` : `longer than the ${target}s allowed`;
}
