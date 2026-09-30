import { daysBetween, localDay } from '../store/progress.logic.ts';

export type FirstOpenRecord = { installId: string; at: string; localDay: string };

export function firstOpenRecord(installId: string, now: Date): FirstOpenRecord {
  return { installId, at: now.toISOString(), localDay: localDay(now) };
}

/** D1 is the next local calendar day, irrespective of elapsed hours or DST. */
export function isD1Return(firstDay: string, now: Date, emittedDay: string | null): boolean {
  const today = localDay(now);
  return today !== emittedDay && daysBetween(firstDay, today) === 1;
}
