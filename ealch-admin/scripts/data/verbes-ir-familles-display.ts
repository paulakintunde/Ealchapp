// How an imported verb reaches a screen.
//
// Two of the twelve have their respelling repaired by this build, so the value
// the manifest RECORDED is what Postgres held before the batch ran and the screen
// must show what it holds after. A card built straight off the manifest would
// print `sahn-TEER` for `sentir` on a device while Postgres held `sahⁿ-TEER`, and
// the lesson's own nasal assertions would then fail against its own content.
//
// So there is exactly one function that turns a verb into a card, it reads the
// repair table, and every surface goes through it.

import { RESPELL_REPAIRS, SHEDDERS, ER_ENDING } from './verbes-ir-familles-corpus.ts';
import { VERB_BY_NAME } from './verbes-ir-familles-imported.ts';

/** id -> the respelling this build writes. Built from the repair table so the two
 *  cannot drift. */
export const REPAIRED_RESPELL: ReadonlyMap<string, string> = new Map(
  RESPELL_REPAIRS.map((r) => [r.id, r.to] as const),
);

/** The respelling a screen should show for one imported verb, AFTER this build's
 *  repairs, bracketed the way the density validator requires. */
export function verbRespell(verb: string): string {
  const v = VERB_BY_NAME.get(verb);
  if (!v) throw new Error(`verbes-ir-familles: "${verb}" is not one of the twelve`);
  const r = REPAIRED_RESPELL.get(v.id) ?? v.row.respell ?? null;
  return r ? `[${r}]` : '';
}

/** One verb as a groupDrill item. `itemId` is what puts the row on a screen
 *  rather than merely in `itemIds`. */
export function verbCard(verb: string): { fr: string; itemId: string; respell: string; en: string } {
  const v = VERB_BY_NAME.get(verb);
  if (!v) throw new Error(`verbes-ir-familles: "${verb}" is not one of the twelve`);
  return { fr: v.verb, itemId: v.id, respell: verbRespell(verb), en: v.row.en };
}

/** Which family a verb is in, derived from the corpus lists rather than typed a
 *  second time. This is the answer the whole lesson is teaching the learner to
 *  produce, so nothing may hold a second copy of it. */
export function familyOf(verb: string): 'shed' | 'er' | 'neither' {
  if (SHEDDERS.includes(verb)) return 'shed';
  if (ER_ENDING.includes(verb)) return 'er';
  return 'neither';
}

/** The one-line label the sort screens and the sheet use for a family. Named
 *  once, so the grid, the drill and the roundup cannot disagree about what the
 *  two answers are called. */
export const FAMILY_LABEL = {
  shed: 'the consonant comes back',
  er: 'nothing comes back',
  neither: 'nothing to come back',
} as const;
