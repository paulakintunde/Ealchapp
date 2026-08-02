import { useCallback, useState } from 'react';
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

/**
 * The same question, answered by MEASURING instead of guessing.
 *
 * ── Why the guess is not enough ───────────────────────────────────────────
 *
 * useCardHeight subtracts a constant from the WINDOW height. It cannot see the
 * box the card was actually given, so on a tall phone it returns more room than
 * exists: on a Pixel 6 the lesson page leaves roughly 507dp for a card, while
 * the constants above produce 574-620. The card then runs past the bottom of
 * its section — over the outline beneath it, or straight off the screen behind
 * the nav bar with no visible edge at all.
 *
 * ── How to use it ─────────────────────────────────────────────────────────
 *
 *   const [onLayout, h] = useMeasuredCardHeight(330);
 *   <View style={{ flex: 1 }} onLayout={onLayout}>
 *     <Card height={h} />
 *   </View>
 *
 * Spread `onLayout` onto the box that OWNS the space (the one with flex: 1),
 * never onto the card itself — a card sized from its own measurement is a
 * feedback loop that settles at zero. Until the first layout lands, the hook
 * returns the guess, so the first frame is never blank and hook order never
 * varies.
 *
 * `reserve` is what sits BELOW the card inside the same box and must stay
 * visible: rating buttons, a dots row, a Continuer. Measured space minus that.
 */
export function useMeasuredCardHeight(
  chrome = 200,
  reserve = 0,
): [(e: { nativeEvent: { layout: { height: number } } }) => void, number] {
  const fallback = useCardHeight(chrome);
  const [box, setBox] = useState(0);
  const onLayout = useCallback((e: { nativeEvent: { layout: { height: number } } }) => {
    const h = Math.round(e.nativeEvent.layout.height);
    // Ignore sub-pixel churn; a rotation or font-scale change still lands.
    setBox((prev) => (Math.abs(h - prev) > 1 ? h : prev));
  }, []);
  // A floor of 160 stops a mid-layout measurement of 0 collapsing the card to
  // nothing — the same guard the group drill and the inhibition deck use.
  const measured = box - reserve;
  return [onLayout, measured > 160 ? measured : fallback];
}
