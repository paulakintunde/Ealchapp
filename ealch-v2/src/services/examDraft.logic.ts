// BUG-02: the pure draft-persistence layer. A crash/force-stop mid-exam must
// not lose the candidate's answers, but this file itself never touches
// AsyncStorage — it only decides the key, the serialized shape, and what a
// caller must do with a corrupt or foreign value. The screen wiring (reading
// and writing AsyncStorage at the right checkpoints) is plan 07-02's job;
// this file is the tested contract it calls into.
//
// TYPE-ONLY imports, deliberately, same discipline as content.logic.ts: this
// file must run under `node --test` with no bundler, so nothing here may
// resolve a runtime module — a runtime import of a component/hook file would
// pull in react-native/expo, which node cannot resolve without Metro.
import type { SpokenAnswer } from '../components/ExamSpeakTask';
import type { DeliverySignals } from '../utils/deliverySignals.logic';
import type { Coverage } from '../utils/interlocutor.logic';
import type { DebateReport } from '../utils/debate.logic';

export const DRAFT_VERSION = 1;
/** D-02: long-form typing checkpoints this long after the last keystroke. */
export const DRAFT_DEBOUNCE_MS = 1500;

/** What actually gets persisted for a spoken answer. Deliberately narrower
 *  than SpokenAnswer — see buildDraft's D-09 note for why `audioUri` never
 *  reaches this shape at all. */
export type DraftSpoken = {
  transcript: string;
  unavailable: boolean;
  signals: DeliverySignals;
};

export type ExamDraft = {
  v: number;
  paperId: string;
  skill: string;
  savedAt: number;
  answers: Record<string, Record<string, number | null>>;
  texts: Record<string, string>;
  spoken: Record<string, DraftSpoken>;
  coverage: Record<string, Coverage>;
  debate: Record<string, DebateReport>;
  /** Task ids already graded IN THIS SITTING. */
  graded: string[];
};

// D-07 / Pitfall 1 correction (07-RESEARCH.md): the key is paperId+skill, NOT
// a per-attempt row id. `exam_attempts`' primary key is the composite
// (user_id, paper_id, skill) — see ealch-v2/supabase/schema.sql lines
// 417-435 — there is no synthetic id column on that table to key off.
// `paperId` and `skill` are both already destructured from
// useLocalSearchParams in exam-section.tsx (lines ~72-74). `mode` is
// deliberately excluded, mirroring exam_attempts' own PK exactly.
export function draftKey(paperId: string, skill: string): string {
  return `exam-draft:${paperId}:${skill}`;
}

export function buildDraft(input: {
  paperId: string;
  skill: string;
  answers: Record<string, Record<string, number | null>>;
  texts: Record<string, string>;
  spoken: Record<string, SpokenAnswer>;
  coverage: Record<string, Coverage>;
  debate: Record<string, DebateReport>;
  graded: string[];
  now?: number;
}): ExamDraft {
  const spoken: Record<string, DraftSpoken> = {};
  for (const [taskId, a] of Object.entries(input.spoken)) {
    // D-09: the recorded-audio file path never reaches persistent storage.
    // The STT device-cache WAV is not guaranteed to survive a process death,
    // so writing its path here would promise a recovery the app cannot
    // deliver. `audioUri` is dropped entirely — not written as `null`, not
    // written as a key at all. `signals` IS persisted: it is measured
    // evidence (six numbers at most), and deliverySignals.logic.ts's
    // doctrine (lines 16-24) forbids zero-filling an unmeasured signal — a
    // restore that invented `durationMs: 0` would fabricate evidence about
    // the candidate's speech, the same class of mistake as fabricating a
    // band.
    spoken[taskId] = {
      transcript: a.transcript,
      unavailable: a.unavailable,
      signals: a.signals,
    };
  }

  return {
    v: DRAFT_VERSION,
    paperId: input.paperId,
    skill: input.skill,
    savedAt: input.now ?? Date.now(),
    answers: input.answers,
    texts: input.texts,
    spoken,
    coverage: input.coverage,
    debate: input.debate,
    graded: input.graded,
  };
}

export function serializeDraft(d: ExamDraft): string {
  return JSON.stringify(d);
}

// There is no migration path for this object, on purpose: a draft is deleted
// on every successful submit (D-08), so its entire lifetime is one exam
// sitting. A schema change simply orphans one sitting's unreadable draft —
// strictly better than carrying progress.logic.ts-style migration machinery
// for a value this short-lived.
export function parseDraft(raw: string | null, paperId: string, skill: string): ExamDraft | null {
  if (raw === null) return null;

  let value: unknown;
  try {
    value = JSON.parse(raw);
  } catch {
    return null;
  }

  if (value === null || typeof value !== 'object') return null;
  const v = value as Partial<ExamDraft>;

  if (v.v !== DRAFT_VERSION) return null;
  if (v.paperId !== paperId) return null;
  if (v.skill !== skill) return null;

  // Normalise missing containers to {}/[] so a partially-written draft still
  // restores whatever it has rather than crashing on an absent field.
  return {
    v: DRAFT_VERSION,
    paperId,
    skill,
    savedAt: typeof v.savedAt === 'number' ? v.savedAt : 0,
    answers: v.answers ?? {},
    texts: v.texts ?? {},
    spoken: v.spoken ?? {},
    coverage: v.coverage ?? {},
    debate: v.debate ?? {},
    graded: v.graded ?? [],
  };
}

export function restoreState(d: ExamDraft): {
  answers: Record<string, Record<string, number | null>>;
  texts: Record<string, string>;
  spoken: Record<string, SpokenAnswer>;
  coverage: Record<string, Coverage>;
  debate: Record<string, DebateReport>;
} {
  const spoken: Record<string, SpokenAnswer> = {};
  for (const [taskId, a] of Object.entries(d.spoken)) {
    spoken[taskId] = {
      transcript: a.transcript,
      unavailable: a.unavailable,
      signals: a.signals,
      // The recording never survived the crash (D-09) — restoring anything
      // other than null here would claim playback that does not exist.
      audioUri: null,
    };
  }

  return {
    answers: d.answers,
    texts: d.texts,
    spoken,
    coverage: d.coverage,
    debate: d.debate,
  };
}

export function isGraded(d: ExamDraft | null, taskId: string): boolean {
  if (d === null) return false;
  return d.graded.includes(taskId);
}

export function markGraded(d: ExamDraft, taskId: string): ExamDraft {
  return {
    ...d,
    graded: d.graded.includes(taskId) ? d.graded : [...d.graded, taskId],
  };
}

// Plan 07-02's mount effect uses this to avoid writing an empty draft over a
// real one before restore completes.
export function hasContent(d: ExamDraft): boolean {
  return (
    Object.keys(d.answers).length > 0 ||
    Object.keys(d.texts).length > 0 ||
    Object.keys(d.spoken).length > 0 ||
    Object.keys(d.coverage).length > 0 ||
    Object.keys(d.debate).length > 0 ||
    d.graded.length > 0
  );
}
