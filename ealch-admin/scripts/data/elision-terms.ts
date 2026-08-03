// The lesson's glossary — every term sons.07.l1 uses more than once, defined
// ONCE, exactly as muettes-terms.ts does it.
//
// The reason is the same one Paul gave for CaReFuL: a term should be explained
// again and again, and doing that by hand on eight cards produces eight
// wordings that drift and eight crowded cards. Defined here and surfaced
// through a TermChip, the learner meets the SAME explanation at every point of
// use, on demand, and no card pays for it in space.
//
// `elision` itself is surfaced on nine missions, `hAspire` on six. Those are
// the two the lesson is actually about.

export type LessonTerm = {
  /** The chip label, as the learner sees it. */
  term: string;
  /** The modal heading. */
  title: string;
  /** The explanation. Plain, concrete, and no jargon of its own. */
  body: string;
  /** Worked examples, played aloud in the modal. `itemId` resolves against the
   *  elision corpus so no transcription is restated here. */
  examples?: { itemId: string; note?: string }[];
};

export const TERMS: Record<string, LessonTerm> = {
  elision: {
    term: 'elision',
    title: 'Elision: the vowel that gets out of the way',
    body:
      "French does not like two vowel sounds meeting head on. When a small word ending in a vowel runs into a word starting with a vowel sound, the first vowel is deleted and an apostrophe marks the place it used to be. je + aime cannot stand, so the E goes and you get j'aime. That is elision. It is not an abbreviation and it is not optional or informal: writing je aime is simply an error, and saying it marks you out instantly. The apostrophe is not shorthand for a missing letter you might put back. It is a scar showing where a collision was avoided.",
    examples: [
      { itemId: 'fr.sons.elision.001', note: "je + aime" },
      { itemId: 'fr.sons.elision.009', note: 'la + école' },
      { itemId: 'fr.sons.elision.034', note: 'ce + est' },
    ],
  },

  elidable: {
    term: 'the elidable words',
    title: 'The closed list: which words actually do this',
    body:
      'Elision is not a rule about all French words. It applies to a short, closed list of very small ones, and once you know the list you know every place it can happen: je, me, te, se, le, la, de, ne, que, ce. Add si, which elides only before il and ils, and the que compounds that inherit it: jusque, lorsque, puisque, quoique, quelque. That is the whole set. It never grows. Every other word in French keeps its vowel no matter what follows it, which is why la amie is wrong but ma amie is not (it is mon amie, for a different reason). Learn these fifteen and you have learned elision completely.',
    examples: [
      { itemId: 'fr.sons.elision.002', note: 'je' },
      { itemId: 'fr.sons.elision.023', note: 'de' },
      { itemId: 'fr.sons.elision.040', note: 'si, only before il' },
    ],
  },

  vowelSound: {
    term: 'a vowel SOUND',
    title: 'The trigger is a sound, not a letter',
    body:
      "This is the part that catches everyone. Elision is triggered by how the next word BEGINS OUT LOUD, not by how it is spelled. habite is spelled with an H, but the H is silent, so the word actually starts on the A sound: j'habite. The eye sees a consonant and the ear hears a vowel, and the ear is what decides. This is why you cannot work elision out from the page alone on any word starting with H. Every other letter in French tells you the truth: if the first letter is a vowel, the first sound is a vowel.",
    examples: [
      { itemId: 'fr.sons.elision.003', note: 'H silent, so a vowel sound starts the word' },
      { itemId: 'fr.sons.elision.012', note: 'same: the word starts on the O sound' },
      { itemId: 'fr.sons.elision.008', note: 'a real consonant, so nothing drops' },
    ],
  },

  hMuet: {
    term: 'H muet',
    title: 'H muet: the H that lets the word elide',
    body:
      "Muet means mute. No H is pronounced anywhere in French, so this is not about sound: it is about whether the H BLOCKS things. An H muet does not block. The word behaves exactly as if the H were not written at all, so the vowel after it is the first sound and elision happens normally. le + homme gives l'homme, precisely as le + arbre gives l'arbre. Most French words beginning with H are muet, so this is the default and the safer guess when you genuinely do not know.",
    examples: [
      { itemId: 'fr.sons.elision.012', note: "l'homme" },
      { itemId: 'fr.sons.elision.015', note: "l'hôtel" },
      { itemId: 'fr.sons.elision.058', note: "l'hôpital" },
    ],
  },

  hAspire: {
    term: 'H aspiré',
    title: 'H aspiré: the H that blocks elision',
    body:
      "Aspiré means breathed, and the name lies: an H aspiré is not breathed and makes no sound at all, exactly like an H muet. The only difference is that it BLOCKS. The word in front of it keeps its vowel, so you get le haricot and not l'haricot, la honte and not l'honte. Out loud this leaves a tiny gap where the elision would have been, and that gap is the only clue there is. Nothing in the spelling tells you which kind of H you are looking at. You learn each one with its article, the same way you learn a noun with its gender. The good news is that the aspiré list is short and mostly borrowed words.",
    examples: [
      { itemId: 'fr.sons.elision.049', note: 'le haricot, blocked' },
      { itemId: 'fr.sons.elision.051', note: 'le hibou, blocked' },
      { itemId: 'fr.sons.elision.052', note: 'la honte, blocked' },
    ],
  },

  apostrophe: {
    term: 'the apostrophe',
    title: 'What the apostrophe is actually doing',
    body:
      "In English an apostrophe usually marks a casual contraction you could undo: do not becomes don't, and both are fine. The French apostrophe is not that. It marks a deletion that is compulsory, and there is no version of the sentence where you put the letter back. j'ai has no formal alternative reading as je ai, because je ai is not French. Treat the apostrophe as glue rather than as a gap: the two words have become one unit with one stress and no pause anywhere inside it. Saying j'ai with a break in the middle is the single most common way to sound like you are reading rather than speaking.",
    examples: [
      { itemId: 'fr.sons.elision.002', note: 'one unit, no pause' },
      { itemId: 'fr.sons.elision.036', note: 'two elisions, still no pause' },
    ],
  },

  liaison: {
    term: 'liaison',
    title: 'Liaison: the same instinct, solved the other way',
    body:
      'Elision deletes a vowel to stop two vowels colliding. Liaison does the opposite job for the opposite problem: it wakes a silent final consonant to fill a gap between two words. deux euros is said /dø.zø.ʁo/, with the X of deux coming back as a Z. Both exist for the same reason, which is that French wants a smooth, unbroken run of syllables and will move sounds around to get one. Elision removes something, liaison adds something, and the goal is identical. Liaison is your next lesson.',
    examples: [{ itemId: 'fr.sons.elision.016', note: "the article is welded on: no gap to fill" }],
  },

  ipa: {
    term: 'IPA',
    title: 'The two notations, and what each is for',
    body:
      'Sounds appear two ways in this course. IPA sits between slashes and is exact, the same alphabet linguists use worldwide: /ʒɛm/. The respelling sits between brackets and is a reading aid for an English speaker, with the stressed syllable capitalised: [ZHEM]. When the two disagree, trust the IPA. A small raised n, as in [PEHⁿ], marks a nasal vowel: the vowel goes through the nose, and it does NOT mean you should say an N. In this lesson a contracted form is respelled as one unbroken word, because that is exactly the claim being made about it.',
  },
};

/** The chip data for one term, ready to spread into a TermChip. */
export function term(key: keyof typeof TERMS): LessonTerm {
  const t = TERMS[key];
  if (!t) throw new Error(`elision-terms: unknown term "${String(key)}"`);
  return t;
}
