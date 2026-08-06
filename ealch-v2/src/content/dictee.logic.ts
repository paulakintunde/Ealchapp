// How a dictée asks for its answer.
//
// The dictée gives the learner a bank of tiles and asks them to rebuild what
// they heard. For a WORD, the tiles are letters and the exercise is spelling:
// "does temps end in -ps?" is exactly the question sons.06 wants to ask.
//
// For a SENTENCE it stops working. The bank strips spaces, so "Il pleut
// beaucoup dehors" becomes 22 loose letters with no word boundaries to aim at,
// and one misplaced tile fails the whole line. That is not a spelling test any
// more, it is a patience test, and it is what sons.08's dictée had become.
//
// So past a threshold the units change from letters to WORDS: same exercise,
// same by-ear recall, but the thing being assembled is the phrase rather than
// the orthography. Paul's rule, 2026-08-03, and it applies to every lesson's
// dictée rather than being special-cased to this one.
//
// Lives here rather than in MissionRich.tsx so it can be tested: the node test
// runner cannot import a .tsx module.

/** Above this many letters a dictée assembles words instead of spelling.
 *
 *  16 because the longest French words a dictée realistically drills stay
 *  under it (tranquillement is 14, appartement 11), so nothing that genuinely
 *  IS a spelling exercise gets demoted to word tiles. The shortest full
 *  sentences clear it comfortably. */
export const DICTEE_LETTER_LIMIT = 16;

/** Letters only, which is what the letter bank is built from. */
export function letterCount(fr: string): number {
  return fr.replace(/[^A-Za-zÀ-ÿ]/gu, '').length;
}

/** Does this target spell from letters, or assemble from words?
 *
 *  Two conditions, and BOTH must hold to switch:
 *
 *  1. more than DICTEE_LETTER_LIMIT letters, and
 *  2. more than one word.
 *
 *  The second is not obvious and was found by test. French hyphenated
 *  compounds run long without ever being more than one word:
 *  "quatre-vingt-quinze" is 17 letters, "l'arrière-grand-père" is 17, and
 *  nine such items ship today. On letters alone they would switch to word
 *  mode and produce a bank of exactly ONE tile — tap it and the answer is
 *  complete, which is not an exercise. They are also precisely the items where
 *  spelling is the point, since the hyphens are the thing learners get wrong. */
export function dicteeMode(fr: string): 'letters' | 'words' {
  if (dicteeWords(fr).length < 2) return 'letters';
  return letterCount(fr) > DICTEE_LETTER_LIMIT ? 'words' : 'letters';
}

/** The words a word-mode bank offers, in sentence order. Punctuation that ends
 *  a sentence is dropped (the learner is not being asked to place a full stop);
 *  an internal comma stays attached to its word, because in a rhythm lesson
 *  that comma IS the phrase boundary being taught. */
export function dicteeWords(fr: string): string[] {
  return fr.replace(/[.!?]/gu, '').split(/\s+/u).filter(Boolean);
}

/** What a completed word-mode answer should read as. */
export function dicteeTarget(fr: string): string {
  return dicteeWords(fr).join(' ');
}

/** High-frequency French words a decoy is drawn from.
 *
 *  Deliberately function words and A1 filler, not vocabulary: a decoy has to be
 *  something the learner could plausibly believe they heard, and an unfamiliar
 *  noun is just noise they can rule out on sight. Everything here could sit in
 *  an A1 greeting sentence without looking out of place. */
const WORD_DECOY_POOL = [
  'et', 'le', 'la', 'les', 'de', 'un', 'une', 'très',
  'bien', 'merci', 'pour', 'avec', 'mais', 'oui',
];

/** Accent- and case-insensitive compare, so a decoy is not offered when the
 *  sentence already contains the same word wearing an accent or a capital. */
function sameWord(a: string, b: string): boolean {
  const fold = (s: string) =>
    s.normalize('NFD').replace(/[̀-ͯ]/gu, '').replace(/[^\p{L}]/gu, '').toLowerCase();
  return fold(a) === fold(b);
}

/** Extra word tiles that do NOT belong in the answer.
 *
 *  Word mode shipped with none. Its bank was the sentence's own words shuffled,
 *  so every tile belonged and the learner could place them all without ever
 *  deciding whether a tile was wanted — "use everything" solved it. That is an
 *  ordering puzzle, not a dictée. (The old comment above buildWordBank claimed
 *  it added a decoy "drawn from the sentence itself", which the code never did,
 *  and which would not have worked anyway: a duplicate of a word already in the
 *  answer produces the same string whichever copy is used, so it is invisible.)
 *
 *  Letter mode has had three decoy letters all along; this is the same idea for
 *  words. Deterministic — the component shuffles the bank, so choosing here
 *  stays pure and testable. */
export function wordDecoys(fr: string, count = 2): string[] {
  const present = dicteeWords(fr);
  const out: string[] = [];
  for (const cand of WORD_DECOY_POOL) {
    if (out.length >= count) break;
    if (present.some((w) => sameWord(w, cand))) continue;
    if (out.some((w) => sameWord(w, cand))) continue;
    out.push(cand);
  }
  return out;
}
