import { useWindowDimensions } from 'react-native';

/**
 * How tall a lesson card may be so that its ACTION stays reachable without
 * scrolling.
 *
 * ── The bug this exists to prevent ────────────────────────────────────────
 *
 * Cards were sized either by a fixed `minHeight` (420, 460) or by a fraction
 * of the raw window height (`height * 0.58`). Both ignore the chrome that
 * surrounds the card on that particular screen: the pager header, the section
 * eyebrow, term chips, a deck hint row, the paging dots, page padding, and —
 * critically — the controls that sit BELOW the card, like Again / I knew it,
 * or the grade buttons on a practice prompt.
 *
 * On a tall phone that slack was invisible. On a shorter one, or at a large OS
 * font scale, those buttons ended up under the fold, so the learner had to
 * scroll past the card to reach the control that dismisses it.
 *
 * ── How to use it ─────────────────────────────────────────────────────────
 *
 * Pass what the surrounding chrome actually costs on that screen. Measure it
 * rather than guessing: the numbers at the call sites are real stacks. A
 * bigger `chrome` means a shorter card, which is the safe direction — a card
 * that is slightly short still shows its button, a card that is slightly tall
 * hides it.
 *
 * Lives in hooks/ rather than beside any one card so the lesson-rich views and
 * the v2 cards share one rule, and neither component file has to import the
 * other.
 */
export function useCardHeight(chrome = 200): number {
  const { height } = useWindowDimensions();
  const available = height - chrome;
  // 300 keeps a card readable on the smallest supported screen; 620 stops a
  // tablet turning a single card into a poster.
  return Math.max(300, Math.min(620, available));
}
