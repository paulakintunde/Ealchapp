// Stable report item ids for lesson content (phase 10, D-40, D-41).
//
// Quiz questions have no authored id and positions alone drift when a question
// is inserted, so the key is position PLUS a one-way content hash. Zero imports.
// No question or answer text leaves the device: only 8 hex characters of it.

/** FNV-1a 32-bit over the UTF-16 code units of the NFC-normalised string. */
export function hash8(str: string): string {
  let h = 0x811c9dc5;
  const s = str.normalize('NFC');
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 0x01000193) >>> 0;
  }
  return h.toString(16).padStart(8, '0');
}

const norm = (s: string | undefined | null): string => (s ?? '').normalize('NFC').replace(/\s+/g, ' ').trim();

type KeyableQuestion = {
  q: string;
  format?: string;
  opts?: string[];
  correct?: number | string;
  accept?: string[];
  answer?: string;
  word?: string;
  say?: string;
  prompt?: string;
};

function correctText(q: KeyableQuestion): string {
  if (typeof q.correct === 'number' && q.opts) return q.opts[q.correct] ?? '';
  if (typeof q.correct === 'string') return q.correct;
  return q.answer ?? q.accept?.[0] ?? '';
}

/** `${lessonId}#quiz.q${i}:h${hash8}` (flat) or `${lessonId}#quiz.${roundId}.q${i}:h${hash8}` (rounds).
 *  authoredIndex is the position in the authored list, never the display index. */
export function quizItemKey(
  lessonId: string,
  question: KeyableQuestion,
  roundId: string | null,
  authoredIndex: number,
): string {
  const canon = [
    question.format ?? '',
    norm(question.q),
    norm(question.prompt),
    norm(question.say),
    norm(question.word),
    norm(correctText(question)),
  ].join('|');
  const pos = roundId ? `quiz.${roundId}.q${authoredIndex}` : `quiz.q${authoredIndex}`;
  return `${lessonId}#${pos}:h${hash8(canon)}`;
}

/** Card-level mission key: section id plus card sub-index, never the mission-level #s{ix}.0. */
export function missionItemKey(lessonId: string, sectionId: string, sub: number | null | undefined): string {
  return `${lessonId}#${sectionId.replace(/[^A-Za-z0-9._-]/g, '-')}.c${sub ?? 1}`;
}
