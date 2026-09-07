// How a reading passage finds its glossed words.
//
// PassagePage underlines the words a lesson wrote a gloss for. It used to do
// that with one line: strip a fixed punctuation set off each whitespace token,
// lowercase it, and look the result up in a map keyed by `word.toLowerCase()`.
//
// Ten entries across four shipped lessons never underlined anything, for three
// separate reasons, and none of them failed anything — a gloss that matches
// nothing is simply invisible, which is the same authored-and-rendered-by-
// nothing failure the lesson contract exists to catch.
//
//   1. THE KEY WAS NOT NORMALISED LIKE THE TOKEN. The token had its apostrophe
//      stripped, the key kept it, so they could never be equal:
//        text "l'escalier" -> "lescalier"   key "l'escalier" -> "l'escalier"
//        text "jusqu'à"    -> "jusquà"      key "jusqu'à"    -> "jusqu'à"
//
//   2. THE ENTRY NAMED THE BARE WORD AND FRENCH ELIDED AN ARTICLE ONTO IT.
//      The learner sees one token; the glossary sensibly names the noun:
//        entry "été"         text "l'été."
//        entry "hôpital"     text "l'hôpital."
//        entry "l'ascenseur" text "d'ascenseur,"   (different article again)
//
//   3. THE ENTRY WAS A PHRASE AND THE LOOKUP WAS PER WORD. A multi-word gloss
//      could never match a single whitespace token:
//        "les haricots"  "les autres"  "en face"  "depuis deux ans"  "les héros"
//
// So matching happens here, where it can be tested, and the component keeps
// only the drawing. Same reason dictee.logic.ts exists: the node test runner
// cannot import a .tsx module.

/** Punctuation a passage wears that a glossary entry does not.
 *
 *  The typographic apostrophe (U+2019) is in this set and was missing from the
 *  original: passages are authored with it, so a token like "l’eau" kept a
 *  character no key would ever carry. */
const PUNCT = /[.,!?;:«»"'’…]/gu;

/** The elided articles and pronouns French attaches to the following word.
 *  Anchored, so "jusqu'à" is left alone — it starts with "jusqu", not "qu". */
const ELISION = /^(?:l|d|j|n|m|t|s|c|qu)['’]/iu;

/** One word, stripped of punctuation and case. */
function foldWord(w: string): string {
  return w.replace(PUNCT, '').toLowerCase();
}

/** Drop a leading elided article: "l'été" -> "été", "d'ascenseur" -> "ascenseur". */
export function deElide(w: string): string {
  return w.replace(ELISION, '');
}

/** Every form a glossary entry or a passage span can be looked up under.
 *
 *  Two, and both sides compute both, which is what lets "l'ascenseur" in the
 *  glossary meet "d'ascenseur" in the passage: they disagree on the article and
 *  agree on the noun. Words are folded individually and rejoined with single
 *  spaces so a phrase keeps its boundaries ("les haricots", not "lesharicots").
 *  Accents are preserved — they distinguish real French words, and both sides
 *  carry them. */
export function glossKeys(s: string): string[] {
  const words = s.trim().split(/\s+/u).filter(Boolean);
  const plain = words.map(foldWord).filter(Boolean).join(' ');
  const bare = words.map((w) => foldWord(deElide(w))).filter(Boolean).join(' ');
  return plain === bare ? [plain] : [plain, bare];
}

/** How many words a glossed phrase may span. The longest shipped is three
 *  ("depuis deux ans"); four leaves room without making the scan quadratic on
 *  anything a passage would realistically hold. */
export const MAX_GLOSS_WORDS = 4;

/** A run of the sentence: either plain text, or a span that has a gloss.
 *  `text` is the ORIGINAL substring, punctuation and spacing intact, so the
 *  passage reflows exactly as authored. */
export type GlossSegment = { text: string; key: string | null };

/**
 * Split a sentence into plain runs and glossed spans.
 *
 * Longest match wins: "les haricots" is preferred over a bare "les", so a
 * phrase gloss is not shadowed by an article that happens to be glossed too.
 */
export function segmentSentence(
  sentence: string,
  keys: ReadonlySet<string>,
  maxWords: number = MAX_GLOSS_WORDS
): GlossSegment[] {
  // Keep the whitespace: it is half of what makes the passage read as written.
  const parts = sentence.split(/(\s+)/u);
  const wordIx: number[] = [];
  parts.forEach((p, i) => {
    if (p.trim().length) wordIx.push(i);
  });

  const out: GlossSegment[] = [];
  let pending = '';
  const flush = () => {
    if (pending) out.push({ text: pending, key: null });
    pending = '';
  };

  let w = 0;
  let cursor = 0; // next part index not yet emitted
  while (w < wordIx.length) {
    let matched = false;
    const span = Math.min(maxWords, wordIx.length - w);
    for (let n = span; n >= 1 && !matched; n--) {
      const from = wordIx[w];
      const to = wordIx[w + n - 1];
      const raw = parts.slice(from, to + 1).join('');
      const hit = glossKeys(raw).find((k) => k && keys.has(k));
      if (!hit) continue;
      pending += parts.slice(cursor, from).join('');
      flush();
      out.push({ text: raw, key: hit });
      cursor = to + 1;
      w += n;
      matched = true;
    }
    if (!matched) w += 1;
  }
  pending += parts.slice(cursor).join('');
  flush();
  return out;
}

/** Leading and trailing punctuation of a matched span, so the underline sits
 *  under the word rather than under the comma after it. */
export function splitAffixes(raw: string): { lead: string; core: string; trail: string } {
  // The whitespace after an opening guillemet belongs to the LEAD. French sets
  // « with a space inside it, and leaving that space on the core underlines it,
  // which reads as a stray mark before the word.
  const lead = raw.match(/^[«"'’]*\s*/u)?.[0] ?? '';
  const trail = raw.match(/[.,!?;:»"'’…]*$/u)?.[0] ?? '';
  const core = raw.slice(lead.length, raw.length - trail.length);
  return { lead, core, trail };
}
