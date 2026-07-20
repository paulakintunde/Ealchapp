// Compiles one Den stage's authored markup ([FR]…[/FR] / plain text /
// [pause:N] / [sfx:name] / [dir:…], per the authoring guide §5.2) into the
// structured (NarrationSegment | NarrationInteraction)[] the schema stores.
// This is the ADMIN-side, compile-time half of the pipeline; the app-side
// `parseNarration` the master doc describes is a separate, runtime concern
// (walking already-compiled segments to speak them) — this function's job
// ends the moment a well-formed stage is saved.
//
// Pure, no imports — safe to unit-exercise the same way progress.logic.ts's
// pure islands are, even though nothing here runs through node --test today.

export type CompiledSegment = { voice: 'fr' | 'en'; text: string };
export type CompiledInteraction = { kind: 'repeat' | 'produce' | 'check' };
export type CompiledStageItem = CompiledSegment | CompiledInteraction;

export type CompileIssue = { message: string };

const SFX_NAMES = new Set(['tap', 'flip', 'success', 'error', 'ding', 'vowel']);

/** [pause:N] defaults to the interaction kind its own stage implies — see
 *  the authoring guide §5.4. A stage outside this map (warm/focus/input/
 *  cheat) still compiles a pause as 'repeat', the most common case for a
 *  hear-and-repeat cue in those stages. */
const STAGE_DEFAULT_INTERACTION: Record<string, CompiledInteraction['kind']> = {
  produce: 'produce',
  check: 'check',
};

const TOKEN_RE = /\[FR\]([\s\S]*?)\[\/FR\]|\[pause:(\d+)\]|\[sfx:([a-z]+)\]|\[dir:[^\]]*\]/g;

export function compileStageMarkup(
  markup: string,
  stage: string
): { items: CompiledStageItem[]; issues: CompileIssue[] } {
  const items: CompiledStageItem[] = [];
  const issues: CompileIssue[] = [];

  if (/[—]/.test(markup)) {
    issues.push({ message: 'No em dashes in narration — use a comma or a full stop (standing style rule).' }); // eslint-disable-line
  }
  // Unbalanced [FR]/[/FR]: an unmatched opener or closer means the regex
  // below will silently treat the stray tag as plain text, which is exactly
  // the "typo'd markup ships as the wrong voice" failure the guide's rule
  // (§5.2, "tags do not nest") exists to catch before publish, not after.
  const opens = (markup.match(/\[FR\]/g) ?? []).length;
  const closes = (markup.match(/\[\/FR\]/g) ?? []).length;
  if (opens !== closes) {
    issues.push({ message: `Unbalanced [FR]…[/FR] tags: ${opens} opening, ${closes} closing.` });
  }

  let lastIndex = 0;
  let match: RegExpExecArray | null;
  TOKEN_RE.lastIndex = 0;
  const pushPlain = (text: string) => {
    const trimmed = text.replace(/\s+/g, ' ').trim();
    if (trimmed) items.push({ voice: 'en', text: trimmed });
  };

  while ((match = TOKEN_RE.exec(markup))) {
    pushPlain(markup.slice(lastIndex, match.index));
    lastIndex = TOKEN_RE.lastIndex;

    if (match[1] !== undefined) {
      const fr = match[1].replace(/\s+/g, ' ').trim();
      if (fr) items.push({ voice: 'fr', text: fr });
    } else if (match[2] !== undefined) {
      const n = Number(match[2]);
      if (n < 2 || n > 8) issues.push({ message: `[pause:${n}] is outside the 2..8 second range.` });
      items.push({ kind: STAGE_DEFAULT_INTERACTION[stage] ?? 'repeat' });
    } else if (match[3] !== undefined) {
      if (!SFX_NAMES.has(match[3])) {
        issues.push({ message: `[sfx:${match[3]}] is not one of tap, flip, success, error, ding, vowel.` });
      }
      // sfx is advisory-only — discarded at compile time, per the guide.
    }
    // [dir:...] falls through with no branch — advisory, discarded.
  }
  pushPlain(markup.slice(lastIndex));

  if (items.length === 0) issues.push({ message: 'This stage compiles to nothing — write at least one line.' });

  return { items, issues };
}
