// The swipe deck's layout decisions, as pure functions over plain data.
//
// Same "pure island" shape as density.logic.ts and lessonPager.logic.ts: no
// React, no measurement APIs, no imports from components. That is what lets
// `node --test` cover this directly — a .tsx file cannot be imported by the
// test runner at all (ERR_UNKNOWN_FILE_EXTENSION), so a rule that lives inside
// the component can only ever be checked by grepping its source, which does
// not test behaviour.

import type { LessonSection } from './schema.ts';

type DeckCard = Extract<LessonSection, { type: 'cardDeck' }>['cards'][number];

/** Below this much room for the cards, an illustrated card is split in two:
 *  the image becomes its own card and the words follow on the next one.
 *
 *  Measured, not guessed at. At 360x640 the deck box came out 280px tall (term
 *  chips and the section title take the top of the page), and a 4:3 image plus
 *  a heading plus a body does not fit in that: the headline clipped mid-word
 *  with the rest of the card unreachable. Above the threshold — a Pixel 6 gives
 *  the deck ~440px — the image and the text belong together on one card and the
 *  split would be a pointless extra swipe.
 *
 *  This is the same principle as the pager's HERO_SPLIT_TYPES (an image must
 *  not push the content it illustrates off the screen), applied one level down.
 *  That mechanism cannot do this job: it splits on a SECTION's imageRef, and
 *  these images are on individual cards inside the deck. */
export const SPLIT_IMAGE_BELOW = 360;

/** One thing the learner swipes to. A split card yields two entries that share
 *  the same authored card — the split is presentation, never a second copy of
 *  the content. */
export type DeckEntry = { c: DeckCard; imageOnly: boolean; textOnly: boolean };

/** The cards actually rendered, after any short-screen image split.
 *
 *  Returns entries rather than cards so the dots and the position counter can
 *  count what is really swipeable: seven authored cards become ten entries on a
 *  small screen, and the deck then honestly reports ten.
 *
 *  `cardH` of 0 means "not measured yet" and never splits — deciding on an
 *  unknown would flash a split layout and re-flow once the measurement lands. */
export function deckEntries(cards: readonly DeckCard[], cardH: number): DeckEntry[] {
  const split = cardH > 0 && cardH < SPLIT_IMAGE_BELOW;
  const out: DeckEntry[] = [];
  for (const c of cards) {
    if (split && c.imageRef) {
      out.push({ c, imageOnly: true, textOnly: false });
      out.push({ c, imageOnly: false, textOnly: true });
    } else {
      out.push({ c, imageOnly: false, textOnly: false });
    }
  }
  return out;
}
