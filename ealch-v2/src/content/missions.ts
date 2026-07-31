import type { Level, LessonSection } from './schema';

// The missions taxonomy (spec 2026-07-30): every count, tag and stat on the
// overview and missions pages is derived from the lesson's REAL sections at
// render time. Authoring gives copy; it never gives structure. Unknown future
// section types deliberately fall into 'required' + 'MISSION' so a new type
// ships without touching this file first.

export type MissionRole = 'required' | 'gate' | 'milestone' | 'badge';

const GATES = new Set<LessonSection['type']>(['quiz', 'progressCheck', 'dictation']);
const MILESTONES = new Set<LessonSection['type']>(['story', 'scenario', 'listening', 'reading']);

export function missionRole(type: LessonSection['type']): MissionRole {
  if (type === 'roundup') return 'badge';
  if (GATES.has(type)) return 'gate';
  if (MILESTONES.has(type)) return 'milestone';
  return 'required';
}

// The mechanic tag on a mission row. French, uppercase, one word: the same
// vocabulary the mockups use (HISTOIRE, CARTES, LABO…). Collisions between
// types are fine; the tag names the mechanic family, not the section.
const LABELS: Partial<Record<LessonSection['type'], string>> = {
  story: 'HISTOIRE',
  goals: 'OBJECTIFS',
  cardDeck: 'CARTES',
  soundGrid: 'GRILLE',
  letterGrid: 'GRILLE',
  groupDrill: 'GROUPES',
  trapDrill: 'PIÈGES',
  pronunciationLab: 'LABO',
  dictation: 'ÉCRIT',
  scenario: 'BULLES',
  listening: 'OREILLE',
  reading: 'LECTURE',
  reviewDeck: 'RÉVISION',
  progressCheck: 'BILAN',
  quiz: 'QUIZ',
  roundup: 'BADGE',
  teach: 'IDÉE',
  steps: 'ÉTAPES',
  examples: 'EXEMPLES',
  useCases: 'USAGES',
  hacks: 'ASTUCES',
  cheatSheet: 'MÉMO',
  commonErrors: 'ERREURS',
  focus: 'CIBLE',
  table: 'TABLEAU',
  tapTable: 'TABLEAU',
  audio: 'AUDIO',
  vocabThemes: 'VOCABULAIRE',
  flashcards: 'FLASH',
};

const PRACTICE_LABELS: Record<string, string> = {
  speak: 'MICRO',
  listen: 'OREILLE',
  read: 'LECTURE',
  write: 'ÉCRIT',
};

export function missionLabel(s: LessonSection): string {
  if (s.type === 'practice') return PRACTICE_LABELS[s.skill] ?? 'MICRO';
  return LABELS[s.type] ?? 'MISSION';
}

export type MissionStats = {
  missions: number;
  required: number;
  gates: number;
  milestones: number;
  badge: number;
};

export function missionStats(sections: readonly LessonSection[]): MissionStats {
  const out: MissionStats = { missions: sections.length, required: 0, gates: 0, milestones: 0, badge: 0 };
  for (const s of sections) {
    const role = missionRole(s.type);
    if (role === 'gate') out.gates += 1;
    else if (role === 'milestone') out.milestones += 1;
    else if (role === 'badge') out.badge += 1;
    else out.required += 1;
  }
  return out;
}

/** The CEFR chip on the overview/missions pages: our own 'sons' pronunciation
 *  track displays as A0 (pre-A1), every real band as itself. */
export function cefrLabel(level: Level): string {
  return level === 'sons' ? 'A0' : level.toUpperCase();
}
