// The lesson's glossary — every term it uses more than once, defined ONCE.
//
// Same contract as muettes-terms.ts, and for the same reason: repeating an
// explanation by hand across nine cards means nine wordings free to drift, and
// it costs every one of those cards the space. Defining it here and surfacing
// it through a TermChip means the learner meets the SAME explanation at every
// point of use, on demand, and no card pays for it in layout.
//
// The house rule from sons.06 applies here too: prefer 3 or fewer chips per
// mission. The renderer shows 3 and collapses the rest behind "+N", and a
// mission needing seven chips is usually carrying too many ideas. sons.06 has
// seven sections over that cap and it is recorded as debt, not precedent. No
// section in this lesson declares more than 3.

export type LessonTerm = {
  /** The chip label, as the learner sees it. */
  term: string;
  /** The modal heading. */
  title: string;
  /** The explanation. Plain, concrete, and no jargon of its own. */
  body: string;
  /** Worked examples, played aloud in the modal. `itemId` resolves against
   *  the accents corpus so no transcription is restated here. */
  examples?: { itemId: string; note?: string }[];
};

export const TERMS: Record<string, LessonTerm> = {
  accentAigu: {
    term: 'accent aigu',
    title: 'The accent aigu: the mark that only ever goes on an e',
    body:
      'The rising stroke, and the one you will meet most. It appears on the letter e and on no other letter in the language, which makes it the easiest mark to read: é is always the same sound, /e/, the vowel in the English word day with no glide at the end. It is on the past participle of every regular verb in French, so you will see it in almost every sentence you ever read. When you meet an é, you do not have to work anything out. Say AY.',
    examples: [
      { itemId: 'fr.sons.accents.001', note: 'café, the final vowel sounds' },
      { itemId: 'fr.sons.accents.002', note: 'two marks, one sound, twice' },
      { itemId: 'fr.sons.accents.013', note: 'three é in one word' },
    ],
  },

  accentGrave: {
    term: 'accent grave',
    title: 'The accent grave: two completely different jobs',
    body:
      'The falling stroke, and the one mark in French that does two unrelated things depending on which letter it sits on. On an e it changes the sound: è is /ɛ/, the vowel in the English word bed, wider and flatter than é. On an a or a u it changes nothing you can hear at all: à sounds exactly like a, and où sounds exactly like ou. There it is doing grammar rather than sound, separating two words that would otherwise be spelled identically. So the question to ask is not what the mark is, it is which letter it is on.',
    examples: [
      { itemId: 'fr.sons.accents.019', note: 'père, the è is /ɛ/' },
      { itemId: 'fr.sons.accents.032', note: 'où, same sound as ou' },
      { itemId: 'fr.sons.accents.034', note: 'à, same sound as a' },
    ],
  },

  circonflexe: {
    term: 'circonflexe',
    title: 'The circumflex: a receipt for a letter that left',
    body:
      'The little hat, and the most useful mark on the page for an English reader, because it is usually a receipt. Where French now writes a circumflex, the word almost always used to carry an s that has since dropped out, and English very often borrowed the word while the s was still there. So hôpital is hospital, forêt is forest, fête is feast, île is isle. Cover the hat, imagine an s after the vowel, and you can often read a word you have never seen. On an e it also opens the vowel to /ɛ/, the same sound as è. On an a, i, o or u it makes no difference a beginner needs to hear.',
    examples: [
      { itemId: 'fr.sons.accents.042', note: 'hôpital, hospital' },
      { itemId: 'fr.sons.accents.041', note: 'forêt, forest' },
      { itemId: 'fr.sons.accents.046', note: 'île, isle' },
    ],
  },

  trema: {
    term: 'tréma',
    title: 'The tréma: two dots that pull two vowels apart',
    body:
      'Two dots, and the only French mark that is an instruction about SYLLABLES rather than about a sound. French normally fuses neighbouring vowels into one sound: ai is a single /ɛ/, oi is a single /wa/. A tréma on the second vowel cancels that and forces both to be said separately. mais is one syllable, MEH. maïs is two, ma-EESS, and it means corn rather than but. The dots are the entire difference between those two words, on the page and in the mouth.',
    examples: [
      { itemId: 'fr.sons.accents.049', note: 'maïs, two syllables' },
      { itemId: 'fr.sons.accents.050', note: 'mais, one syllable' },
      { itemId: 'fr.sons.accents.048', note: 'Noël, noh-EL' },
    ],
  },

  cedille: {
    term: 'cédille',
    title: 'The cédille: the tail that keeps a C soft',
    body:
      'The hook under a c, and the only mark in this lesson that goes on a consonant. French c follows the same rule English c does: before e or i it is soft, an /s/, and before a, o or u it is hard, a /k/. The cédille overrides that. It appears only before a, o or u, and it forces the soft /s/ where a /k/ would otherwise be. That is why it is never needed before e or i, where the c is already soft: a word like ceci has no tail because it does not need one. Without the tail, français would be read frankay and garçon would be gar-KOHN.',
    examples: [
      { itemId: 'fr.sons.accents.054', note: 'français, soft c before a' },
      { itemId: 'fr.sons.accents.055', note: 'garçon, soft c before o' },
      { itemId: 'fr.sons.accents.060', note: 'carte, no tail, hard c' },
    ],
  },

  minimalPair: {
    term: 'minimal pair',
    title: 'A minimal pair: two words, one difference',
    body:
      'Two words spelled identically except for one thing, where that one thing changes the meaning. They are the sharpest tool for learning a mark, because they remove every other clue: if ou and où are different words, the mark is carrying the difference by itself and nothing else can be doing it. This lesson uses five of them. Two of the pairs sound identical and are told apart only on the page, and three of them sound genuinely different, which is the distinction worth holding on to.',
    examples: [
      { itemId: 'fr.sons.accents.037', note: 'des, DAY' },
      { itemId: 'fr.sons.accents.038', note: 'dès, DEH' },
      { itemId: 'fr.sons.accents.036', note: 'sûr, identical to sur' },
    ],
  },

  ipa: {
    term: 'IPA',
    title: 'The two notations, and what each is for',
    body:
      'Sounds appear two ways in this course. IPA sits between slashes and is exact, the same alphabet linguists use worldwide: /ka.fe/. The respelling sits between brackets and is a reading aid for an English speaker, with the stressed syllable capitalised: [ka-FAY]. When the two disagree, trust the IPA. A small raised n, as in [frahⁿ-SEH], marks a nasal vowel: the vowel is sent through the nose, and it does NOT mean you should say an N.',
  },
};

/** The chip data for one term, ready to spread into a TermChip. */
export function term(key: keyof typeof TERMS): LessonTerm {
  const t = TERMS[key];
  if (!t) throw new Error(`accents-terms: unknown term "${String(key)}"`);
  return t;
}
