// Which reporting instrument a format is marked on.
//
// The exam pack now carries two, and they are not variants of each other:
//
//   'nclc'  TEF and TCF. A LEVEL per skill, and the weakest skill governs.
//   'delf'  DELF B2 and DALF C1. Four marks out of 25, a total out of 100, a
//           pass at 50 and a floor of 5 on every épreuve; only the level asked
//           differs (targetBandFor).
//
// Written as an exhaustive switch over ExamFormat for the same reason
// examDispatch.logic.ts is: a paper that reaches the report screen with no
// instrument should be a BUILD failure, not a blank card. The last time a new
// member of a task-type union inherited a branch written for its neighbours, a
// published DELF débat rendered as a plain recorder and every test passed.
//
// Adding a format is therefore a compile error here until it is told how it is
// marked — which is the moment to decide, rather than three phases later when a
// paper has been authored, rendered and published against an assumption.

import type { ExamFormat, ScoreBand } from '../content/schema.ts';

export type ExamInstrument = 'nclc' | 'delf';

export function instrumentFor(format: ExamFormat): ExamInstrument {
  switch (format) {
    case 'tef_canada':
    case 'tcf_canada':
      return 'nclc';
    case 'delf_b2':
    case 'dalf_c1':
      return 'delf';
    default: {
      const unreachable: never = format;
      throw new Error(`no reporting instrument for exam format "${String(unreachable)}"`);
    }
  }
}

/** Every format, and how it reports. Exported so a test can assert the mapping
 *  is total without re-deriving it, and so the report screen can be checked for
 *  a branch per instrument. */
export const INSTRUMENT_BY_FORMAT: Record<ExamFormat, ExamInstrument> = {
  tef_canada: 'nclc',
  tcf_canada: 'nclc',
  delf_b2: 'delf',
  dalf_c1: 'delf',
};

/** The level a diploma paper asks for: the anchor of its band-to-mark table
 *  (delf.logic.ts bandMark). TEF and TCF have none — they report a level, they
 *  do not test one — so they return null. */
export function targetBandFor(format: ExamFormat): ScoreBand | null {
  switch (format) {
    case 'delf_b2':
      return 'b2';
    case 'dalf_c1':
      return 'c1';
    case 'tef_canada':
    case 'tcf_canada':
      return null;
    default: {
      const unreachable: never = format;
      throw new Error(`no target band for exam format "${String(unreachable)}"`);
    }
  }
}
