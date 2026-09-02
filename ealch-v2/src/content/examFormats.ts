// What each exam format actually is, as published facts.
//
// ── Why this file replaced a caption ────────────────────────────────────────
//
// The home screen used to describe the three formats with `examMeta`:
//
//   TEF Canada  →  'Speaking · 15 min · timed'
//   TCF Canada  →  'Listening · single play'
//   DELF B2     →  'The examiner interrupts you'
//
// Each of those is TRUE of one épreuve and FALSE of the exam. Read as a set
// they say TEF is the speaking one and TCF is the listening one, which is not
// a description of these exams at all — every one of them tests all four
// skills, and a candidate choosing between them on that basis would be
// choosing on a fiction.
//
// So every format now reports the same FOUR KINDS of fact, differing only in
// value: how many épreuves, how long the sitting runs, and what each épreuve
// asks. No format is characterised by one of its parts.
//
// The numbers come from exam-blueprints/BLUEPRINT-<format>.md. Where a board
// does not publish something, this file carries null and the UI omits it —
// see DELF B2's question counts, which E0 could not resolve and which E10 must
// confirm against an official sample before anything is authored against them.
import type { ExamFormat, ExamSkill } from './schema';

export type FormatSection = {
  skill: ExamSkill;
  /** Questions, for a closed épreuve. Null when the board does not publish it. */
  questions: number | null;
  /** Tasks, for an open épreuve. Null on closed ones. */
  tasks: number | null;
  timingS: number;
};

export type ExamFormatFacts = {
  format: ExamFormat;
  /** Nominative use: the board's own name for its exam, never restyled and
   *  never accompanied by its branding. See the disclaimer string. */
  label: string;
  /** The whole sitting. Not the sum of the épreuves: the boards publish a
   *  total that includes the gaps between them. */
  totalS: number;
  /** In sitting order, always four. */
  sections: FormatSection[];
  blueprintId: string;
};

const closed = (skill: ExamSkill, questions: number | null, timingS: number): FormatSection =>
  ({ skill, questions, tasks: null, timingS });
const open = (skill: ExamSkill, tasks: number, timingS: number): FormatSection =>
  ({ skill, questions: null, tasks, timingS });

export const EXAM_FORMAT_FACTS: Record<ExamFormat, ExamFormatFacts> = {
  tef_canada: {
    format: 'tef_canada',
    label: 'TEF Canada',
    totalS: 10_500, // ≈ 2 h 55
    sections: [
      closed('CO', 40, 2400),
      closed('CE', 40, 3600),
      open('PE', 2, 3600),
      open('PO', 2, 900),
    ],
    blueprintId: 'tef-canada-2025.09',
  },
  tcf_canada: {
    format: 'tcf_canada',
    label: 'TCF Canada',
    totalS: 10_020, // ≈ 2 h 47
    sections: [
      closed('CO', 39, 2100),
      closed('CE', 39, 3600),
      open('PE', 3, 3600),
      open('PO', 3, 720),
    ],
    blueprintId: 'tcf-canada-2026.01',
  },
  delf_b2: {
    format: 'delf_b2',
    label: 'DELF B2',
    totalS: 10_200, // ≈ 2 h 30 collective + the individual oral
    sections: [
      // Per-exercise question counts are NOT published on any page consulted
      // during E0. Null rather than a guess: phase E10 confirms them against an
      // official sample paper before a single item is authored.
      closed('CO', null, 1800),
      closed('CE', null, 3600),
      open('PE', 1, 3600),
      open('PO', 1, 1200),
    ],
    blueprintId: 'delf-b2-2026.01-draft',
  },
};

/** Display order on the home screen. Canada-first, because that is what the
 *  app is for; deliberately not EXAM_FORMATS' declared order, which is the
 *  enum's business and not the UI's. */
export const EXAM_FORMAT_ORDER: ExamFormat[] = ['tef_canada', 'tcf_canada', 'delf_b2'];

/** '2 h 55' / '2h 55m'. Hours and minutes, never seconds: nobody chooses an
 *  exam on a seconds count. */
export function formatSitting(totalS: number, lang: 'fr' | 'en'): string {
  const h = Math.floor(totalS / 3600);
  const m = Math.round((totalS % 3600) / 60);
  if (h === 0) return lang === 'fr' ? `${m} min` : `${m} min`;
  return lang === 'fr' ? `${h} h ${String(m).padStart(2, '0')}` : `${h}h ${m}m`;
}

/**
 * The one-line breakdown: 'CO 40 · CE 40 · EE 2 · EO 2'.
 *
 * Uses the épreuve abbreviations a candidate meets on the real paper, which
 * are production-first for the expression ones: the section carrying skill
 * 'PE' is labelled EE, and 'PO' is labelled EO. Getting that backwards would
 * put two strings on the card that appear on no exam paper anywhere.
 */
const SHORT: Record<ExamSkill, string> = { CO: 'CO', CE: 'CE', PE: 'EE', PO: 'EO' };

export function sectionBreakdown(facts: ExamFormatFacts): string {
  return facts.sections
    .map((s) => {
      const n = s.questions ?? s.tasks;
      return n === null ? SHORT[s.skill] : `${SHORT[s.skill]} ${n}`;
    })
    .join(' · ');
}
