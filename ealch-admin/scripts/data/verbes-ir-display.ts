// How an imported verb reaches a screen.
//
// The ten are imported rows, so their respellings live in Postgres and not in
// this repo. Three of them break the house nasal rule and are repaired by this
// build. That creates a trap worth naming: the RECORDED value in
// verbes-ir-rows.gen.ts is what the database held BEFORE the batch ran, and the
// screen must show what it holds AFTER. A card built straight off the manifest
// would print `rahn-PLEER` for `remplir` on a device while Postgres held
// `rahⁿ-PLEER`, and the lesson's own nasal assertions would then fail against its
// own content.
//
// So there is exactly one function that turns a verb into a card, it reads the
// repair table, and every surface goes through it.

import { RESPELL_REPAIRS } from './verbes-ir-corpus.ts';
import { VERB_BY_NAME } from './verbes-ir-imported.ts';

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
  if (!v) throw new Error(`verbes-ir: "${verb}" is not one of the ten`);
  const r = REPAIRED_RESPELL.get(v.id) ?? v.row.respell ?? null;
  return r ? `[${r}]` : '';
}

/** One verb as a groupDrill item.
 *
 *  `itemId` is what puts the row on a screen rather than merely in `itemIds`:
 *  a1.08 declared 43 itemIds that resolved perfectly and were drawn by nothing,
 *  and `vocabThemes` cards carry no itemId at all, which is why the ten are
 *  presented as a groupDrill and not as a vocabulary hub. */
export function verbCard(verb: string): { fr: string; itemId: string; respell: string; en: string } {
  const v = VERB_BY_NAME.get(verb);
  if (!v) throw new Error(`verbes-ir: "${verb}" is not one of the ten`);
  return { fr: v.verb, itemId: v.id, respell: verbRespell(verb), en: v.row.en };
}

/** The stem of one of the ten: the infinitive with its last two letters off.
 *  Derived rather than typed, so the reference sheet cannot disagree with the
 *  drill that scores it. */
export function verbStem(verb: string): string {
  return `${verb.slice(0, -2)}-`;
}
