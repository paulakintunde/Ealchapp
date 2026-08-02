// Silent-letter rendering logic — the pure island behind WordCardXL.
//
// Splitting a French word into glyphs and marking which are silent looks
// trivial and is not: the corpus carries accented characters, and JavaScript's
// default string indexing is over UTF-16 code units, not characters. Any
// author counting letters by eye produces indices into CHARACTERS, so the two
// have to agree or the wrong letter greys.
//
// Two off-by-one errors were already caught this way while authoring the
// sons.06 corpus (`histoire` and `ils parlent`), which is why this is a tested
// module rather than three lines inside a component.

/** One character of a word, with whether it is written and not pronounced. */
export type Glyph = { ch: string; silent: boolean; index: number };

/** Split a word into glyphs, marking the indices given as silent.
 *
 *  Unicode-aware: iterates characters, so an index authored by counting
 *  letters lands on the letter that was counted, including for words carrying
 *  combining marks. Out-of-range indices are IGNORED rather than throwing —
 *  the schema validator is what refuses them at authoring time, and a card
 *  that renders a word un-greyed is a better runtime failure than one that
 *  crashes a lesson mid-swipe. */
export function glyphs(fr: string, silent?: readonly number[]): Glyph[] {
  const set = new Set(silent ?? []);
  return [...fr].map((ch, index) => ({ ch, silent: set.has(index), index }));
}

/** The characters a `silent` array actually greys, as a string. The
 *  authoring-time readback: if this does not spell the letters that should be
 *  silent, the indices are wrong. */
export function silentChars(fr: string, silent?: readonly number[]): string {
  return glyphs(fr, silent)
    .filter((g) => g.silent)
    .map((g) => g.ch)
    .join('');
}

/** Whether every index points at a real letter inside the word. The same rule
 *  the schema enforces, exported so the renderer and the authoring scripts can
 *  ask it without importing the whole validator. */
export function silentIndicesValid(fr: string, silent?: readonly number[]): boolean {
  if (!silent?.length) return true;
  const chars = [...fr];
  return silent.every((i) => Number.isInteger(i) && i >= 0 && i < chars.length && /[\p{L}']/u.test(chars[i]));
}

/** Contiguous runs of silent characters, so a renderer can wrap `-ent` in one
 *  element rather than four. Purely a rendering optimisation; the visual
 *  result is identical. */
export function silentRuns(fr: string, silent?: readonly number[]): { start: number; end: number }[] {
  const g = glyphs(fr, silent);
  const runs: { start: number; end: number }[] = [];
  let start: number | null = null;
  for (let i = 0; i < g.length; i++) {
    if (g[i].silent && start === null) start = i;
    else if (!g[i].silent && start !== null) {
      runs.push({ start, end: i - 1 });
      start = null;
    }
  }
  if (start !== null) runs.push({ start, end: g.length - 1 });
  return runs;
}
