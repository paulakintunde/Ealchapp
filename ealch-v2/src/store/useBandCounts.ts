import { useMemo } from 'react';
import { content } from '@/services/content';
import { useProgress } from '@/store/useProgress';
import { foldCards, itemsPracticed, masteredItems } from '@/store/progress.logic';
import { LEVELS, type Level } from '@/content/schema';

/** One band's progress read, as the level panel and the Levels page show it:
 *  items MET drive the bar, MASTERED rides alongside, never blended (Phase 5,
 *  CF-03). `units` is the heading count for the "{n} units" line. */
export type BandCount = { units: number; total: number; met: number; mastered: number };

/** Every band's counts, memoised once on the attempt log. Shared by den.tsx
 *  and app/levels.tsx so the two surfaces can never disagree about a number. */
export function useBandCounts(): Record<Level, BandCount> {
  const attempts = useProgress((s) => s.attempts);
  const met = useMemo(() => itemsPracticed(attempts), [attempts]);
  const mastered = useMemo(() => masteredItems(foldCards(attempts)), [attempts]);
  return useMemo(() => {
    const out = {} as Record<Level, BandCount>;
    for (const l of LEVELS) {
      const units = content.unitsOfBand(l);
      let total = 0;
      let metN = 0;
      let masteredN = 0;
      for (const u of units) {
        const ids = new Set(content.lessonsOf(u.id).flatMap((lesson) => lesson.itemIds));
        total += ids.size;
        for (const id of ids) {
          if (met.has(id)) metN += 1;
          if (mastered.has(id)) masteredN += 1;
        }
      }
      out[l] = { units: units.length, total, met: metN, mastered: masteredN };
    }
    return out;
  }, [met, mastered]);
}
