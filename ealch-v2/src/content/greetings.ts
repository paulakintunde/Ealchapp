// Spoken greetings Camille says when home opens, chosen by the learner's
// return-state (progress.logic greetState: new | recent | away).
//
// FRENCH ONLY: Camille always speaks French, whatever the UI language is set to,
// so these are not i18n strings. They are gender-SAFE toward the learner (no
// adjective that would have to agree with an unknown gender); where Camille
// speaks of herself she is feminine ('contente', 'ravie'), which is correct for
// her. English glosses are for reviewers, never spoken.
import type { GreetState } from '@/store/progress.logic';

export const SPOKEN_GREETINGS: Record<GreetState, string[]> = {
  // First open / fresh install — Camille introduces herself.
  new: [
    'Bonjour et bienvenue ! Je suis Camille. On y va ?', // Hello and welcome! I'm Camille. Shall we go?
    'Bienvenue ! Je suis Camille, votre guide. Commençons.', // Welcome! I'm Camille, your guide. Let's begin.
  ],
  // Back after a short gap.
  recent: [
    'Bon retour ! On continue ?', // Welcome back! Shall we continue?
    "Ravie de vous revoir. On s'y remet ?", // Glad to see you again. Shall we get back to it?
  ],
  // Back after a while.
  away: [
    'Ça fait un moment ! Contente de vous revoir.', // It's been a while! Glad to see you again.
    'Vous voilà de retour ! On reprend tranquillement ?', // There you are! Shall we ease back in?
  ],
};

/** Pick one greeting from a state's set. Deterministic in `seed` (pass a
 *  day-of-year so it varies across days but is stable within one), wrapping the
 *  index and tolerant of a negative seed. Returns '' for an empty set, which the
 *  caller reads as "say nothing". */
export function pickGreeting(state: GreetState, seed: number): string {
  const set = SPOKEN_GREETINGS[state];
  if (!set || set.length === 0) return '';
  const i = ((Math.trunc(seed) % set.length) + set.length) % set.length;
  return set[i];
}
