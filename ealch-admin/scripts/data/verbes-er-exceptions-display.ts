// How an imported verb reaches a screen.
//
// The seventeen are imported rows, so their respellings live in Postgres and not
// in this repo. Three of them break the house nasal rule and are repaired by this
// build. That creates a trap worth naming: the RECORDED value in
// verbes-er-exceptions-imported.ts is what the database held BEFORE the batch
// ran, and the screen must show what it holds AFTER. A card built straight off
// the manifest would print `koh-mahn-SAY` for `commencer` on a device while
// Postgres held `koh-mahⁿ-SAY`, and the lesson's own nasal assertions would then
// fail against its own content.
//
// So there is exactly one function that turns a verb into a card, it reads the
// repair table, and every surface goes through it. a2.01 learned this the same
// way and the file is deliberately its twin.

import { RESPELL_REPAIRS } from './verbes-er-exceptions-corpus.ts';
import { VERB_BY_NAME } from './verbes-er-exceptions-imported.ts';

/** id -> the respelling this build writes. Built from the repair table so the two
 *  cannot drift: adding a repair changes every screen that shows it. */
export const REPAIRED_RESPELL: ReadonlyMap<string, string> = new Map(
  RESPELL_REPAIRS.map((r) => [r.id, r.to] as const),
);

/** The respelling a screen should show for one imported verb, AFTER this build's
 *  repairs, bracketed the way the density validator's `respell-notation` rule
 *  requires. */
export function verbRespell(verb: string): string {
  const v = VERB_BY_NAME.get(verb);
  if (!v) throw new Error(`verbes-er-exceptions: "${verb}" is not one of the seventeen`);
  const r = REPAIRED_RESPELL.get(v.id) ?? v.row.respell ?? null;
  return r ? `[${r}]` : '';
}

/** One verb as a groupDrill item.
 *
 *  `itemId` is what puts the row on a screen rather than merely in `itemIds`:
 *  a1.08 declared 43 itemIds that resolved perfectly and were drawn by nothing,
 *  and `vocabThemes` cards carry no itemId at all, which is why the seventeen are
 *  presented as groupDrills and not as a vocabulary hub. */
export function verbCard(verb: string): { fr: string; itemId: string; respell: string; en: string } {
  const v = VERB_BY_NAME.get(verb);
  if (!v) throw new Error(`verbes-er-exceptions: "${verb}" is not one of the seventeen`);
  return { fr: v.verb, itemId: v.id, respell: verbRespell(verb), en: v.row.en };
}
