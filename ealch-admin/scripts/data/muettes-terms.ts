// The lesson's glossary — every term it uses more than once, defined ONCE.
//
// Paul's instruction: "Explain terms clearly. CaReFuL should be explained again
// and again."
//
// Both halves of that matter, and they pull against each other unless the
// definition is data. Repeating an explanation by hand on nine cards means nine
// wordings that drift, and it crowds every card that carries it. Defining it
// here and surfacing it through a TermChip means the learner meets the SAME
// clear explanation at every point of use, on demand, without any card paying
// for it in space.
//
// So CaReFuL is explained:
//   - in full on the anchors card (mission 3), where it is introduced
//   - as a tappable chip on the grid (4), the families drill (5), the trap
//     (6), the errors card (14) and the review deck (17)
//   - in the reference sheet, with the complete exception lists
//   - and once more in the roundup (20), as the thing to take away
//
// Every one of those is this object. Change the wording here and it changes
// everywhere, still identical.

export type LessonTerm = {
  /** The chip label, as the learner sees it. */
  term: string;
  /** The modal heading. */
  title: string;
  /** The explanation. Plain, concrete, and no jargon of its own. */
  body: string;
  /** Worked examples, played aloud in the modal. `itemId` resolves against
   *  the muettes corpus so no transcription is restated here. */
  examples?: { itemId: string; note?: string }[];
};

export const TERMS: Record<string, LessonTerm> = {
  careful: {
    term: 'CaReFuL',
    title: 'CaReFuL: the four letters that stay awake',
    body:
      "Most final consonants in French are silent. Four of them usually are not: C, R, F and L. Spell those four out and you get the English word CaReFuL, which is the whole point of the name: it is a memory hook, not a French word. When you reach the end of a word you have never seen, ask one question. Is the last letter C, R, F or L? If yes, say it. If no, stay quiet. That single question gets you most of the way, every time, and the rest of this lesson is the handful of cases where it needs help.",
    examples: [
      { itemId: 'fr.sons.muettes.019', note: 'C sounded' },
      { itemId: 'fr.sons.muettes.022', note: 'R sounded' },
      { itemId: 'fr.sons.muettes.025', note: 'F sounded' },
      { itemId: 'fr.sons.muettes.028', note: 'L sounded' },
    ],
  },

  erEnding: {
    term: 'the -er ending',
    title: 'The -er ending: where CaReFuL stops applying',
    body:
      "CaReFuL says an R at the end of a word should sound. That is right about half the time, and wrong on every verb in the language. The reason is that -er is not a word ending, it is a GRAMMATICAL ending: it marks an infinitive (parler, manger, to speak, to eat) or a job noun (boulanger, a baker). Grammatical endings follow their own rule, and this one is pronounced as a single /e/ with the R completely silent. Short standalone words like hiver and mer are not carrying an ending at all, so their R stays alive.",
    examples: [
      { itemId: 'fr.sons.muettes.036', note: 'infinitive, R silent' },
      { itemId: 'fr.sons.muettes.038', note: 'job noun, R silent' },
      { itemId: 'fr.sons.muettes.022', note: 'short word, R sounded' },
      { itemId: 'fr.sons.muettes.023', note: 'short word, R sounded' },
    ],
  },

  hMuet: {
    term: 'H muet',
    title: 'H muet: the H that lets the article shrink',
    body:
      "Muet means mute. No H is ever pronounced in French, so this is not about sound at all: it is about grammar. An H muet behaves as though the letter were simply not there, so the word in front of it elides in the normal way. Le plus homme becomes l'homme, exactly as le plus arbre becomes l'arbre. Most French H words are muet.",
    examples: [
      { itemId: 'fr.sons.muettes.039', note: "l'homme" },
      { itemId: 'fr.sons.muettes.040', note: "l'hôtel" },
      { itemId: 'fr.sons.muettes.041', note: "l'heure" },
    ],
  },

  hAspire: {
    term: 'H aspiré',
    title: 'H aspiré: the H that blocks elision',
    body:
      "Aspiré means breathed, and the name is misleading: an H aspiré is NOT breathed and makes no sound, exactly like an H muet. The only difference is grammatical. An H aspiré blocks the elision, so the article stays whole: le héros, not l'héros. There is no way to hear which kind an H is from the word alone. You learn it with the article, the same way you learn a noun with its gender.",
    examples: [
      { itemId: 'fr.sons.muettes.043', note: 'le héros, no elision' },
      { itemId: 'fr.sons.muettes.044', note: 'le hibou' },
      { itemId: 'fr.sons.muettes.045', note: 'le haricot' },
    ],
  },

  eSwitch: {
    term: 'the final -e',
    title: 'The final -e: an alarm clock for the letter before it',
    body:
      'A final -e is itself silent. It is never a syllable, so porte is one sound, PORT, and never POR-tuh. What it does is wake the consonant standing in front of it. grand ends on a nasal vowel with a silent D; add the -e and grande releases a real D at the end. This is why French gender is audible: a hard consonant at the end of an adjective usually means there is an -e behind it, which usually means feminine. Your ears can do grammar.',
    examples: [
      { itemId: 'fr.sons.muettes.002', note: 'masculine, D silent' },
      { itemId: 'fr.sons.muettes.047', note: 'feminine, D wakes' },
      { itemId: 'fr.sons.muettes.050', note: 'one syllable, not two' },
    ],
  },

  silentEnt: {
    term: 'the -ent ending',
    title: 'The -ent ending: silent on a verb, sounded on anything else',
    body:
      'Four letters, two completely different jobs. On a conjugated verb, -ent is entirely silent: ils parlent is /il paʁl/ and sounds exactly like il parle. On a noun or an adverb it is a real nasal vowel: vent, content and comment all end in /ɑ̃/. There is one question that separates them. Is this a conjugated verb? If yes, the ending is silent. If no, you hear it.',
    examples: [
      { itemId: 'fr.sons.muettes.055', note: 'verb, -ent silent' },
      { itemId: 'fr.sons.muettes.056', note: 'verb, -ent silent' },
    ],
  },

  liaison: {
    term: 'liaison',
    title: 'Liaison: when a silent letter wakes up',
    body:
      'These silent finals are sleeping, not dead. When the next word begins with a vowel, some of them come back and link across the gap: deux euros is said /dø.zø.ʁo/, with the X of deux returning as a Z. That linking is called liaison, and it is the whole of your next lesson. For now it is enough to know why French bothers writing letters it does not say: because sometimes it does say them.',
    examples: [{ itemId: 'fr.sons.muettes.056', note: 'the Z here is a liaison' }],
  },

  ipa: {
    term: 'IPA',
    title: 'The two notations, and what each is for',
    body:
      'Sounds appear two ways in this course. IPA sits between slashes and is exact, the same alphabet linguists use worldwide: /pə.ti/. The respelling sits between brackets and is a reading aid for an English speaker, with the stressed syllable capitalised: [pə-TEE]. When the two disagree, trust the IPA. A small raised n, as in [GRAHⁿ], marks a nasal vowel: it means the vowel is sent through the nose, NOT that you should say an N.',
  },
};

/** The chip data for one term, ready to spread into a TermChip. */
export function term(key: keyof typeof TERMS): LessonTerm {
  const t = TERMS[key];
  if (!t) throw new Error(`muettes-terms: unknown term "${String(key)}"`);
  return t;
}
