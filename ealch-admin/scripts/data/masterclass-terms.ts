// sons.09.l1 glossary — every term the masterclass uses more than once,
// defined ONCE, exactly as elision-terms.ts and muettes-terms.ts do it.
//
// This lesson has a harder glossary problem than any before it. Five earlier
// lessons each introduced their own vocabulary, and a learner arriving here has
// met "elision", "liaison", "h aspiré", "rhythm group" and "nasal vowel" in
// five separate places. Restating any of them would teach the lesson backwards:
// the point is not that there are five words, it is that they name five views
// of one thing.
//
// So the entries below do NOT re-explain the five rules. Each one names the
// rule in a clause and spends the rest of its body on how that rule fits the
// system. `phraseGroup` and `pipeline` are the two the lesson is actually
// about, and they are the two that did not exist before this lesson.

export type LessonTerm = {
  /** The chip label, as the learner sees it. */
  term: string;
  /** The modal heading. */
  title: string;
  /** The explanation. Plain, concrete, and no jargon of its own. */
  body: string;
  /** Worked examples, played aloud in the modal. `itemId` resolves against the
   *  masterclass corpus so no transcription is restated here. */
  examples?: { itemId: string; note?: string }[];
};

export const TERMS: Record<string, LessonTerm> = {
  phraseGroup: {
    term: 'the phrase group',
    title: 'The unit French actually pronounces',
    body:
      "English decides how a word sounds and then puts words in a row. French does not. It builds a GROUP first, a short run of syllables said in one flow with a single push at the end, and only then decides what each letter inside it does. That is why the same word changes: petit before a consonant and petit before a vowel are the same word in two different groups, and the group is what chose. Everything in this lesson follows from it. A letter goes silent because nothing in its group needs it. A letter comes back because the next sound in the group needs a consonant. A vowel is deleted because the group will not carry two vowels in a row. Find the group before you decide anything else, because nothing joins across the edge of one.",
    examples: [
      { itemId: 'fr.sons.masterclass.015', note: 'the subject closes its group, so the second S stays down' },
      { itemId: 'fr.sons.masterclass.041', note: 'two groups, one Z inside each' },
      { itemId: 'fr.sons.masterclass.039', note: 'a break, then three joins inside one group' },
    ],
  },

  pipeline: {
    term: 'group, join, push',
    title: 'The order the rules run in',
    body:
      "The five rules are not five decisions you make at once. They are a sequence, and each step depends on the one before it. FIRST group: find where the phrase breaks, because nothing joins across a break and getting this wrong makes every later step wrong. THEN join, inside each group and only inside it: two vowels meeting means the small word loses its vowel, and a sleeping consonant in front of a vowel wakes up. Everything the joining did not touch stays exactly as silent as it was. THEN push: one prominence per group, on its last syllable, wherever the joining ended up putting that syllable. Run it in that order and a sentence you have never seen comes out right the first time.",
    examples: [
      { itemId: 'fr.sons.masterclass.039', note: 'break, then join, then two pushes' },
      { itemId: 'fr.sons.masterclass.044', note: 'four joins inside two groups' },
      { itemId: 'fr.sons.masterclass.047', note: 'the second group runs seven syllables with no stop' },
    ],
  },

  join: {
    term: 'a join',
    title: 'Elision and liaison are one operation',
    body:
      "You met these as two lessons and they are one move. Both fire at exactly the same moment, when a word is about to run into a vowel sound, and both exist to stop the group stumbling. Elision handles the case where the first word ENDS in a vowel: the vowel goes and an apostrophe marks the spot. Liaison handles the case where the first word ends in a silent consonant: the consonant comes back and attaches to the front of the next word. One deletes, one adds, and neither is optional where it applies. Thinking of them as one thing is what lets you scan a phrase once instead of twice, and speed is the whole difficulty at this stage.",
    examples: [
      { itemId: 'fr.sons.masterclass.025', note: 'an elision and two liaisons in four words' },
      { itemId: 'fr.sons.masterclass.020', note: 'the elision and the liaison land two words apart' },
      { itemId: 'fr.sons.masterclass.024', note: 'two elisions, and then a gap nothing can join' },
    ],
  },

  sleeping: {
    term: 'a sleeping letter',
    title: 'Silent, or silent for now',
    body:
      'A final consonant in French is written and not said, which is what sons.06 called silent unless there is a reason. This lesson is where the reason arrives. The letter is not absent, it is asleep, and a vowel sound immediately after it in the same group wakes it. The S of les says nothing in les copains and says a Z in les amis. The T of petit says nothing in un petit chien and says a T in un petit ami. Nothing about the word changed. What changed is what came next. So there is no such thing as a permanently silent final consonant: there are letters that happen to have nothing after them, and letters that do.',
    examples: [
      { itemId: 'fr.sons.masterclass.001', note: 'awake' },
      { itemId: 'fr.sons.masterclass.002', note: 'asleep, same letter' },
      { itemId: 'fr.sons.masterclass.011', note: 'a D that wakes up as a T' },
    ],
  },

  hAspire: {
    term: 'H aspiré',
    title: 'The one thing that blocks both joins',
    body:
      "Every H in French is silent, so the H itself never makes a sound. What some of them do is BLOCK. An h muet does nothing at all: the word behaves as if the H were not written, so elision and liaison both fire normally. An h aspiré blocks both of them, and it is the only thing in the language that does. les hôtels links and les héros does not; l'homme contracts and le hibou does not. Out loud the block leaves a small gap where the join would have been, and that gap is the only signal there is. Nothing in the spelling separates the two kinds, so each aspiré word is learned with its article, the way a noun is learned with its gender. When you genuinely do not know, guess muet: it is far more common.",
    examples: [
      { itemId: 'fr.sons.masterclass.005', note: 'h muet, so the join fires' },
      { itemId: 'fr.sons.masterclass.006', note: 'h aspiré, so it does not' },
      { itemId: 'fr.sons.masterclass.019', note: 'both joins in the sentence blocked' },
    ],
  },

  nasalN: {
    term: 'the nasal N',
    title: 'The N that keeps its vowel and still links',
    body:
      "A nasal vowel is a vowel with an N or an M written after it that is not a separate sound: bon is one syllable, not two, and the N is inside the vowel rather than after it. The question this lesson answers is what happens when a vowel follows. The answer is that the N does both jobs at once. In un bon ami the vowel of bon is still nasal AND an N appears in front of ami, and the N is not spent on either job. That is why bon ami has three syllables and bon copain has three too, but only one of them has an audible N in the middle. The N was always there. It only becomes audible when the next sound needs a consonant.",
    examples: [
      { itemId: 'fr.sons.masterclass.013', note: 'nasal kept, N heard' },
      { itemId: 'fr.sons.masterclass.014', note: 'nasal kept, no N anywhere' },
      { itemId: 'fr.sons.masterclass.032', note: 'four nasal vowels, two linking N' },
    ],
  },

  notation: {
    term: 'the marks',
    title: 'Four marks, and what each one claims',
    body:
      "This lesson brings together the notation of five earlier ones and adds nothing. A tie, as in lay-z‿a-MEE, means a consonant has attached to the FOLLOWING syllable, which is where it is really said. A vertical bar means a phrase break: nothing joins across it. CAPITALS mark the pushed syllable, always the last one in its group. A small raised n, as in bohⁿ, means the vowel goes through the nose and does NOT mean you should say an N. IPA sits between slashes and is exact; the respelling sits between brackets and is a reading aid. When the two disagree, trust the IPA.",
    examples: [
      { itemId: 'fr.sons.masterclass.039', note: 'all four marks in one line' },
      { itemId: 'fr.sons.masterclass.056', note: 'three ties and four raised n' },
    ],
  },
};

/** The chip data for one term, ready to spread into a TermChip. */
export function term(key: keyof typeof TERMS): LessonTerm {
  const t = TERMS[key];
  if (!t) throw new Error(`masterclass-terms: unknown term "${String(key)}"`);
  return t;
}
