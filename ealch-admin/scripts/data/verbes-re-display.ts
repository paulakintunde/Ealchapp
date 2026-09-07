// How an imported verb reaches a screen.
//
// The seven are imported rows, so their respellings live in Postgres and not in
// this repo. SIX OF THE SEVEN are repaired by this build, which creates a trap
// worth naming: the RECORDED value in verbes-re-rows.gen.ts is what the database
// held BEFORE the batch ran, and the screen must show what it holds AFTER. A card
// built straight off the manifest would print `VAHNDR` for `vendre` on a device
// while Postgres held `VAHⁿDR`, and the lesson's own nasal assertions would then
// fail against its own content.
//
// So there is exactly one function that turns a verb into a card, it reads the
// repair table, and every surface goes through it.

import { RESPELL_REPAIRS } from './verbes-re-corpus.ts';
import { VERB_BY_NAME } from './verbes-re-imported.ts';

/** id -> the respelling this build writes. Built from BOTH repair lists so the
 *  two cannot drift: adding a repair changes every screen that shows it. */
export const REPAIRED_RESPELL: ReadonlyMap<string, string> = new Map(
  RESPELL_REPAIRS.map((r) => [r.id, r.to] as const),
);

/** The respelling a screen should show for one imported verb, AFTER this build's
 *  repairs, bracketed the way the density validator's `respell-notation` rule
 *  requires. */
export function verbRespell(verb: string): string {
  const v = VERB_BY_NAME.get(verb);
  if (!v) throw new Error(`verbes-re: "${verb}" is not one of the seven`);
  const r = REPAIRED_RESPELL.get(v.id) ?? v.row.respell ?? null;
  return r ? `[${r}]` : '';
}

/** The same, unbracketed, for a cell that is not notation. */
export function verbRespellBare(verb: string): string {
  return verbRespell(verb).replace(/^\[|\]$/g, '');
}

/** One verb as a groupDrill item.
 *
 *  `itemId` is what puts the row on a screen rather than merely in `itemIds`:
 *  a1.08 declared 43 itemIds that resolved perfectly and were drawn by nothing,
 *  and `vocabThemes` cards carry no itemId at all, which is why the seven are
 *  presented as a groupDrill and not as a vocabulary hub. */
export function verbCard(verb: string): { fr: string; itemId: string; respell: string; en: string } {
  const v = VERB_BY_NAME.get(verb);
  if (!v) throw new Error(`verbes-re: "${verb}" is not one of the seven`);
  return { fr: v.verb, itemId: v.id, respell: verbRespell(verb), en: v.row.en };
}

/** The stem of one of the seven: the infinitive with its last two letters off.
 *
 *  TWO, not three, and that is the correction this lesson owes its own brief. The
 *  brief describes the learner as having to "remove" something; in fact `vendre`
 *  minus `re` is `vend-`, exactly as `parler` minus `er` is `parl-` and `finir`
 *  minus `ir` is `fin-`. The machine has not changed at all across the three
 *  groups, and this function is the same arithmetic a2.10's `verbStem` does.
 *
 *  Derived rather than typed, so the reference sheet cannot disagree with the
 *  drill that scores it. */
export function verbStem(verb: string): string {
  return `${verb.slice(0, -2)}-`;
}

/** The bare third-person form of one of the seven: the stem with nothing on it.
 *
 *  THIS FUNCTION IS THE LESSON. It takes an infinitive and returns the form the
 *  learner will not believe, and it is derived from the same slice as `verbStem`
 *  so a card, a sheet row and a drill answer cannot disagree about it. */
export function bareThirdPerson(verb: string): string {
  return verb.slice(0, -2);
}
