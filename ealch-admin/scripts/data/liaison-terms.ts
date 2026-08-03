// sons.10 "La liaison" — glossary.
//
// Each term is defined ONCE here and surfaced anywhere via a section's `terms`
// array. lesson-contract.test.ts fails if a section names a key that is not
// defined here, and the house rule is 3 chips or fewer per mission: the
// renderer shows 3 and collapses the rest behind "+N".
//
// `examples[].itemId` resolves against liaison-corpus.ts, so no transcription
// is ever restated in this file.

export type LessonTerm = {
  /** The chip label, as the learner sees it. */
  term: string;
  /** The modal heading. */
  title: string;
  /** The explanation. Plain, concrete, and no jargon of its own. */
  body: string;
  /** Worked examples, played aloud in the modal. */
  examples?: { itemId: string; note?: string }[];
};

export const TERMS: Record<string, LessonTerm> = {
  liaison: {
    term: 'liaison',
    title: 'Liaison: the consonant that wakes up',
    body:
      "A liaison is a final consonant that is silent when the word stands alone and comes back when the next word starts with a vowel. les on its own is /le/, with no S. les amis is /le.z‿a.mi/, and the S is suddenly there, as a Z, attached to the front of amis. Nothing about the spelling changes. The letter was always written; the vowel next door is what wakes it. This is the same silent consonant you spent the last lesson learning to leave out, which is why liaison feels like a contradiction until you see that the rule was never silent always, it was silent unless something wakes it.",
    examples: [
      { itemId: 'fr.sons.liaisons.166', note: 'les amis, the S returns as a Z' },
      { itemId: 'fr.sons.liaisons.170', note: "c'est un, the T returns" },
      { itemId: 'fr.sons.liaisons.169', note: 'mon ami, the N returns' },
    ],
  },

  tie: {
    term: 'the tie ‿',
    title: 'The tie mark: where the sound actually lands',
    body:
      'The little curve in les‿amis is a tie, and it marks a liaison. It sits between the two words in the spelling and between the two sounds in the IPA. Read it as "this consonant belongs to the word on the left but is pronounced at the start of the word on the right". That second half is the part learners miss: the Z of les does not end les, it begins amis. Say lay-ZAMEE, not LAYZ amee. The tie is telling you where to put the sound, not just that a sound exists.',
    examples: [
      { itemId: 'fr.sons.liaisons.166', note: 'the Z starts amis, it does not end les' },
      { itemId: 'fr.sons.liaisons.171', note: 'deux enfants, same shape' },
    ],
  },

  obligatoire: {
    term: 'obligatoire',
    title: 'Obligatoire: you must link',
    body:
      'Some liaisons are compulsory. Leaving one out does not sound casual, it sounds wrong, and in a few cases it changes the word. These are the ones worth drilling to reflex. The pattern behind almost all of them is that the two words belong to one grammatical unit: an article and its noun, a subject pronoun and its verb, a possessive and its noun, an adjective sitting in front of its noun, or a fixed expression that French treats as a single block. If the two words are glued together by grammar, they are glued together in sound.',
    examples: [
      { itemId: 'fr.sons.liaisons.166', note: 'article and noun' },
      { itemId: 'fr.sons.liaisons.167', note: 'pronoun and verb' },
      { itemId: 'fr.sons.liaisons.174', note: 'adjective in front of its noun' },
    ],
  },

  interdite: {
    term: 'interdite',
    title: 'Interdite: you must NOT link',
    body:
      'Some gaps are sealed, and linking across them is an error rather than a flourish. The list is short enough to learn: et never links, ever, in any register. A word beginning with an h aspiré blocks the link even though the H makes no sound. A singular noun does not link to the adjective after it. A personal name does not link to its verb. The numbers onze and un-as-a-number behave like h aspiré words. This is the half of liaison that over-eager learners get wrong, because once you have learned to link, linking everything feels like progress.',
    examples: [
      { itemId: 'fr.sons.liaisons.178', note: 'et il, never linked' },
      { itemId: 'fr.sons.liaisons.181', note: 'les héros, blocked by h aspiré' },
      { itemId: 'fr.sons.liaisons.187', note: 'singular noun, then adjective' },
    ],
  },

  facultative: {
    term: 'facultative',
    title: 'Facultative: optional, and about register',
    body:
      'A third group is genuinely optional. Both versions are correct French, and the choice signals how formal you are being: a broadcaster or a politician links them, two friends in a kitchen do not. Je suis allé can be said with the link or without it and nobody is wrong. At your level the useful thing is to know the category exists so it does not confuse you when you hear the same sentence two ways. Your safe default is to leave optional liaisons alone. Skipping one sounds relaxed and native. Adding a forbidden one sounds like a mistake, so the risk is not symmetric.',
    examples: [
      { itemId: 'fr.sons.liaisons.214', note: 'the everyday version, no link' },
      { itemId: 'fr.sons.liaisons.215', note: 'the formal version, linked' },
    ],
  },

  hAspire: {
    term: 'H aspiré',
    title: 'H aspiré: the H that blocks the link',
    body:
      'French never pronounces an H. Not in any word, not in any position. But some words behave as though an invisible wall sits at the front of them, and those are the h aspiré words: they block liaison and they block elision. les héros keeps its silent S and stays two separate sounds, while les hommes links straight through. Nothing in the spelling distinguishes them, and there is no rule to derive: you learn which H a word has at the same time you learn the word, exactly the way you learn a noun with its gender. The good news is the list is short and the common ones repeat.',
    examples: [
      { itemId: 'fr.sons.liaisons.181', note: 'les héros, blocked' },
      { itemId: 'fr.sons.liaisons.168', note: 'un homme, h muet, links' },
      { itemId: 'fr.sons.liaisons.183', note: 'en haut, blocked' },
    ],
  },

  devoicing: {
    term: 'the sound change',
    title: 'The letter is not the sound it comes back as',
    body:
      'A woken consonant does not always return as the letter that was written. S and X both come back as /z/, which is why les amis is lay-Z-amee and not lay-S-amee, and why deux enfants has a Z in it. D comes back as /t/, so grand arbre is grahⁿ-T-arbr with no D sound anywhere. F comes back as /v/ in neuf heures. Only T, N and L return as themselves. So the spelling tells you THAT something wakes up; it does not reliably tell you WHAT wakes up, and that mismatch is where half the errors in this lesson live.',
    examples: [
      { itemId: 'fr.sons.liaisons.166', note: 'S returns as Z' },
      { itemId: 'fr.sons.liaisons.175', note: 'D returns as T' },
      { itemId: 'fr.sons.liaisons.171', note: 'X returns as Z' },
    ],
  },

  ipa: {
    term: 'IPA',
    title: 'How to read the sounds in this course',
    body:
      'IPA sits in slashes and is exact: /le.z‿a.mi/. The respelling sits in brackets and is a reading aid for an English speaker, with the stressed syllable capitalised: [lay-z‿a-MEE]. When the two disagree, the IPA is right. A nasal vowel is written with a superscript n, as in [ahⁿ], because it is one sound made through the nose and not a vowel followed by an N. The tie ‿ appears in both notations and always means the same thing: a liaison lands here.',
    examples: [{ itemId: 'fr.sons.liaisons.166', note: 'both notations, same word' }],
  },
};

/** The chip data for one term, ready to spread into a TermChip. */
export function term(key: keyof typeof TERMS): LessonTerm {
  const t = TERMS[key];
  if (!t) throw new Error(`liaison-terms: unknown term "${String(key)}"`);
  return t;
}
