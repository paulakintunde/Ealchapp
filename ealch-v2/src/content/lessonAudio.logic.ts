// Lesson audio resolution — turning an authored audio spec into something the
// player can actually play.
//
// The architecture doc asks for eleven recorded sets that "cannot be
// synthesised well, because the whole lesson turns on a letter being absent
// and TTS sometimes leaves a trace of it". None of them exist yet. The lesson
// still has to run today.
//
// So a `recordingId` is a PROMISE, not a dependency: it names a clip the
// studio owes, and until that clip is delivered the card falls back to TTS on
// the French string. Nothing in the lesson body changes when the recording
// arrives — only the manifest below gains an entry. That is the same
// clip-or-TTS contract Item.audioRef already uses, lifted to the lesson.
//
// Pure: no expo, no fetch. The screen calls resolveAudio() and hands the
// result to audio.speakItem().

import type { LessonAudio, SectionAudio } from './schema.ts';

/** Playback speeds. 1.0 is normal, 0.65 is the comprehension pass the
 *  architecture doc specifies for every word card in the product. */
export const NORMAL_RATE = 1.0;
export const SLOW_RATE = 0.65;

/** Where a delivered recording lives, keyed by `recordingId` and then by the
 *  clip name inside it (a set like rec-careful-pairs holds eight words).
 *
 *  EMPTY TODAY, and that is the point: every id in the lesson resolves to
 *  nothing and every card plays TTS. When the studio delivers, entries land
 *  here and the same lesson starts playing real audio with no content edit.
 *  The keys are exactly the ids declared in Lesson.audio.recorded, which
 *  sons-06-muettes.test.ts checks are all real. */
export const CLIP_MANIFEST: Record<string, Record<string, string> | string> = {
  // 'rec-scene-break': { _: 'lessons/sons06/scene-break.m4a' },
  // 'rec-careful-pairs': { hiver: 'lessons/sons06/hiver.m4a', parler: '...' },
};

export type ResolvedAudio = {
  /** The text TTS speaks when no clip resolves. */
  text: string;
  /** The clip path, when one is available. */
  audioRef: string | null;
  /** Playback rate. */
  rate: number;
  /** Whether this card holds its text back until the audio has played. */
  audioFirst: boolean;
  /** How many plays are allowed, when the card budgets them (dictation). */
  maxPlays: number | null;
  /** True when the sound came from a real recording rather than synthesis. */
  isRecorded: boolean;
};

/**
 * Resolve one card's audio.
 *
 * `text` is the French the card would speak; `spec` is what it authored.
 * `slow` picks the 0.65 pass (long-press everywhere in the product).
 */
export function resolveAudio(
  text: string,
  spec: SectionAudio | undefined,
  opts: { slow?: boolean; lessonAudio?: LessonAudio } = {}
): ResolvedAudio {
  const rate = opts.slow ? SLOW_RATE : NORMAL_RATE;
  const audioRef = spec?.recordingId ? clipPath(spec.recordingId, spec.clip) : null;

  return {
    text,
    audioRef,
    rate,
    // Contrast and trap screens play before the text resolves, so the ear
    // answers the question the eye would otherwise answer for it.
    audioFirst: spec?.audioFirst ?? false,
    maxPlays: spec?.maxPlays ?? null,
    isRecorded: !!audioRef,
  };
}

/** The path for one clip, or null when the studio has not delivered it. */
export function clipPath(recordingId: string, clip?: string): string | null {
  const entry = CLIP_MANIFEST[recordingId];
  if (!entry) return null;
  if (typeof entry === 'string') return entry;
  // A set with a named clip, or its single default under '_'.
  return entry[clip ?? '_'] ?? null;
}

/** Which speeds a card should offer.
 *
 *  Every French string in the product is playable at 1.0, and the slow pass is
 *  offered wherever the lesson declared it. Returning the list rather than a
 *  boolean lets a future third speed land without touching call sites. */
export function speedsFor(spec: SectionAudio | undefined, lessonAudio?: LessonAudio): number[] {
  const declared = spec?.speeds ?? lessonAudio?.speeds;
  if (declared?.length) return declared;
  return [NORMAL_RATE];
}

/** Does this card offer a slow reading on long-press? */
export function hasSlow(spec: SectionAudio | undefined, lessonAudio?: LessonAudio): boolean {
  return speedsFor(spec, lessonAudio).some((s) => s < NORMAL_RATE);
}

/** Which recordings a lesson still owes, for the studio's worklist and for a
 *  build report. Every declared id with no manifest entry. */
export function pendingRecordings(lessonAudio: LessonAudio | undefined): { id: string; desc: string }[] {
  return (lessonAudio?.recorded ?? [])
    .filter((r) => !CLIP_MANIFEST[r.id])
    .map((r) => ({ id: r.id, desc: r.desc }));
}

/* ─── Finding the spec a play call belongs to ─────────────────────────────── */

/** Every French string that sits alongside an authored audio spec, at any depth.
 *
 *  Audio is authored on the OBJECT that owns the French — a scene beat, a
 *  contrast target, a quiz question — but it is played from a leaf component
 *  that was handed a bare string. Rather than thread a spec through four
 *  component trees (`PlayFn` is `(id, text)` in all of them, and widening it
 *  touches every call site for no behavioural gain), the lesson is walked once
 *  and indexed by the text itself.
 *
 *  Collisions resolve first-wins, and are harmless where they happen: the same
 *  French string authored twice in one lesson wants the same voicing both
 *  times. A word that carries no spec is absent, and resolveAudio's defaults
 *  then apply, which is exactly today's behaviour.
 */
export function audioIndex(lesson: unknown): Map<string, SectionAudio> {
  const out = new Map<string, SectionAudio>();

  // The French-bearing keys. Only `fr` is unambiguously French; `text` and
  // `target` are French on the nodes that carry audio at all. `q` is excluded
  // deliberately — a quiz stem is English, and the spec on a listen-and-choose
  // question describes its `clip`, not its question text.
  const FR_KEYS = ['fr', 'text', 'target'];

  const isSpec = (v: unknown): v is SectionAudio =>
    !!v && typeof v === 'object' && typeof (v as SectionAudio).mode === 'string';

  // `inherited` is the nearest enclosing spec. A spec authored on a SECTION
  // (dictation, reading, listening) is the default voicing for every French
  // string inside it — that is what "this whole section is recorded at these
  // speeds" means. A spec on a nearer node overrides it.
  const walk = (v: unknown, inherited: SectionAudio | undefined) => {
    if (Array.isArray(v)) {
      for (const x of v) walk(x, inherited);
      return;
    }
    if (!v || typeof v !== 'object') return;
    const node = v as Record<string, unknown>;
    const spec = isSpec(node.audio) ? node.audio : inherited;

    if (spec) {
      for (const k of FR_KEYS) {
        const text = node[k];
        if (typeof text === 'string' && text.trim() && !out.has(text)) out.set(text, spec);
      }
      // A scene break authors its audio on the beat but its French one level
      // down, on the reading that is actually spoken.
      for (const side of ['right', 'wrong']) {
        const s = node[side] as { fr?: unknown } | undefined;
        if (s && typeof s === 'object' && typeof s.fr === 'string' && !out.has(s.fr)) {
          out.set(s.fr, spec);
        }
      }
    }

    for (const value of Object.values(node)) walk(value, spec);
  };

  walk(lesson, undefined);
  return out;
}

/** Resolve a play call made with nothing but the text.
 *
 *  This is what the lesson screen calls. It finds the authored spec (if the
 *  text has one), applies the lesson-level defaults, and returns something the
 *  audio service can take directly. With CLIP_MANIFEST empty every result is
 *  TTS, so wiring this in changes no behaviour today — it changes what happens
 *  the day the studio delivers. */
export function resolveByText(
  text: string,
  index: Map<string, SectionAudio> | undefined,
  opts: { slow?: boolean; lessonAudio?: LessonAudio } = {}
): ResolvedAudio {
  return resolveAudio(text, index?.get(text), opts);
}

/** Every recordingId a lesson body references, so a card can never point at a
 *  set the lesson never declared. Used by the lesson test. */
export function referencedRecordingIds(lesson: unknown): string[] {
  const out = new Set<string>();
  const walk = (v: unknown) => {
    if (Array.isArray(v)) {
      v.forEach(walk);
      return;
    }
    if (!v || typeof v !== 'object') return;
    const rec = (v as { recordingId?: unknown }).recordingId;
    if (typeof rec === 'string') out.add(rec);
    Object.values(v).forEach(walk);
  };
  walk(lesson);
  return [...out];
}
