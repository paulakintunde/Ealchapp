// The English fallback for B1 and above.
//
// From B1 the lessons are French-first: instructions, explanations and model
// text are French, and English exists only as a translation the learner can
// ask for. Two kinds of English are authored:
//
//   1. `en` fields beside a French line (a bubble, an example, a listening
//      line). The renderer draws them as their own muted line, marked `gloss`.
//   2. A final sentence starting `EN: ` inside a French string (a rule body, a
//      coach line, a term definition), where the type has no `en` field.
//
// Both are hidden unless the learner turns English on. A1 and A2 are taught in
// English, so the toggle never applies there and nothing about them changes.
//
// ANSWERS ARE NOT GLOSSES. A flashcard back, a quiz meaning or a glossary tap
// is the thing being asked for, so those sites are never marked `gloss` and
// stay visible whatever the toggle says.

/** Bands whose lessons are taught in English, so their English is always on. */
export const ENGLISH_TAUGHT_BANDS = ['sons', 'a1', 'a2'] as const;

/** Whether this lesson's band offers the English toggle at all. */
export function glossToggleApplies(band: string | null | undefined): boolean {
  return !!band && !(ENGLISH_TAUGHT_BANDS as readonly string[]).includes(band);
}

/** Whether English is shown for a lesson of this band, given the preference. */
export function englishShown(band: string | null | undefined, pref: boolean): boolean {
  return !glossToggleApplies(band) || pref;
}

/** A trailing `EN: …` sentence, and the whitespace before it. The gloss is
 *  always the LAST thing in the string by authoring rule, so everything from
 *  the marker to the end goes. The marker must start the string or follow
 *  whitespace, so a word ending in "EN:" is never matched. */
const EN_TAIL = /(^|\s+)EN: [\s\S]*$/;

/** The string without its English tail. Unchanged when there is none. */
export function stripEnTail(s: string): string {
  return s.replace(EN_TAIL, '');
}

/** The English tail on its own, without the `EN: ` marker, or null when the
 *  string has none. With the French above it, this is what lets the renderer
 *  draw the translation as its own line instead of running it into the same
 *  paragraph — which is how it read on a Pixel 6 the first time. */
export function enTailOf(s: string): string | null {
  const m = s.match(EN_TAIL);
  if (!m) return null;
  return m[0].replace(/^\s+/, '').slice('EN: '.length).trim() || null;
}
