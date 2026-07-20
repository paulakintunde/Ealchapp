// The theme parcours: one theme, five ordered steps, each a view over the same
// corpus the mode buckets read. Pure — no RN, no zustand, no AsyncStorage —
// so node --test can reach it (same rule as progress.logic.ts).
//
// A step is a (drill, theme, level) filter, nothing more. Progress is derived
// from the attempt log the same way every other number in the app is: an item
// is "learned" when it has ever been answered correctly. Nothing is seeded, so
// a fresh theme honestly reads 0/N and the first step is the only open one.
import type { Item, Level, Scenario, DrillKind } from './schema.ts';
import { LEVELS } from './schema.ts';

/** The slice of AttemptEntry this module reads. Structural on purpose: it
 *  keeps the file importable without dragging the full progress schema in. */
export type AttemptLike = { itemId: string; correct: boolean };

export const PARCOURS_STEPS = [
  { key: 'decouvrir', drill: 'flashcard' },
  { key: 'construire', drill: 'sentence' },
  { key: 'prononcer', drill: 'voiceflash' },
  { key: 'ecouter', drill: 'dictation' },
  { key: 'scene', drill: 'roleplay' },
] as const satisfies readonly { key: string; drill: DrillKind }[];

export type StepKey = (typeof PARCOURS_STEPS)[number]['key'];

/** locked → open (in progress) → done. 'empty' = no content authored for this
 *  drill in this theme/level — a gap, shown honestly, never counted as done. */
export type StepState = 'locked' | 'open' | 'done' | 'empty';

export type StepStat = {
  key: StepKey;
  drill: DrillKind;
  total: number;
  learned: number;
  state: StepState;
};

export type ThemeSummary = {
  slug: string;
  /** Bands with content in this theme, in LEVELS order. */
  levels: Level[];
  total: number;
  learned: number;
};

const levelRank = (l: Level) => LEVELS.indexOf(l);

/** Item ids answered correctly at least once, in one pass over the log. */
function learnedSet(attempts: AttemptLike[]): Set<string> {
  const s = new Set<string>();
  for (const a of attempts) if (a.correct) s.add(a.itemId);
  return s;
}

/** A scenario is "learned" when every turn key (`<id>.t<ix>`) the roleplay
 *  drill logs has a correct attempt. Partial credit counts turns, so a theme
 *  card can still show honest motion before the scene is finished. */
function scenarioLearnedTurns(sc: Scenario, learned: Set<string>): number {
  let n = 0;
  for (let i = 0; i < sc.turns.length; i++) if (learned.has(`${sc.id}.t${i}`)) n++;
  return n;
}

/** Every theme with any content — items or scenarios — with per-theme progress
 *  derived from the attempt log. Sorted by size (biggest theme first) so the
 *  browser leads with the most practicable scenes. */
export function themeSummaries(items: Item[], scenarios: Scenario[], attempts: AttemptLike[]): ThemeSummary[] {
  const learned = learnedSet(attempts);
  const by = new Map<string, { levels: Set<Level>; total: number; done: number }>();
  const bucket = (slug: string) => {
    let b = by.get(slug);
    if (!b) {
      b = { levels: new Set(), total: 0, done: 0 };
      by.set(slug, b);
    }
    return b;
  };
  for (const it of items) {
    const b = bucket(it.theme);
    b.levels.add(it.level);
    b.total++;
    if (learned.has(it.id)) b.done++;
  }
  for (const sc of scenarios) {
    const b = bucket(sc.theme);
    b.levels.add(sc.level);
    b.total += sc.turns.length;
    b.done += scenarioLearnedTurns(sc, learned);
  }
  return [...by.entries()]
    .map(([slug, b]) => ({
      slug,
      levels: [...b.levels].sort((a, z) => levelRank(a) - levelRank(z)),
      total: b.total,
      learned: b.done,
    }))
    .sort((a, z) => z.total - a.total || (a.slug < z.slug ? -1 : 1));
}

/**
 * The five steps of one theme's parcours, at one level (or across all levels
 * when `level` is undefined). Sequencing rule: the first non-empty step is
 * open; a later step opens when every non-empty step before it is done; a done
 * step stays done. Empty steps never gate the ones after them — a theme with
 * no dictation content must not lock its scene forever.
 */
export function parcoursSteps(
  items: Item[],
  scenarios: Scenario[],
  attempts: AttemptLike[],
  theme: string,
  level?: Level,
): StepStat[] {
  const learned = learnedSet(attempts);
  const pool = items.filter((it) => it.theme === theme && (level === undefined || it.level === level));
  const scen = scenarios.filter((sc) => sc.theme === theme && (level === undefined || sc.level === level));

  let gateOpen = true; // becomes false at the first unfinished non-empty step
  return PARCOURS_STEPS.map(({ key, drill }) => {
    let total = 0;
    let done = 0;
    if (drill === 'roleplay') {
      for (const sc of scen) {
        total += sc.turns.length;
        done += scenarioLearnedTurns(sc, learned);
      }
    } else {
      for (const it of pool) {
        if (!it.drills.includes(drill)) continue;
        total++;
        if (learned.has(it.id)) done++;
      }
    }
    if (total === 0) return { key, drill, total, learned: done, state: 'empty' as const };
    const state: StepState = done >= total ? 'done' : gateOpen ? 'open' : 'locked';
    if (done < total) gateOpen = false;
    return { key, drill, total, learned: done, state };
  });
}

/** Levels that have any content in a theme, for the detail screen's chips. */
export function themeLevels(items: Item[], scenarios: Scenario[], theme: string): Level[] {
  const s = new Set<Level>();
  for (const it of items) if (it.theme === theme) s.add(it.level);
  for (const sc of scenarios) if (sc.theme === theme) s.add(sc.level);
  return [...s].sort((a, z) => levelRank(a) - levelRank(z));
}

/** Deterministic weekly pick for the "theme of the week" card: same theme for
 *  everyone all week, no backend, turning over with the calendar week. */
export function themeOfWeek(summaries: ThemeSummary[], dayOfYear: number): ThemeSummary | undefined {
  if (summaries.length === 0) return undefined;
  const week = Math.floor((Math.max(1, Math.trunc(dayOfYear)) - 1) / 7);
  return summaries[week % summaries.length];
}
