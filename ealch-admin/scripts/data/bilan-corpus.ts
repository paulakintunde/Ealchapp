/* a1.30.l1 "A1 Review": the corpus this capstone stands on.
 *
 * ── WHAT A CAPSTONE OWNS, WHICH TURNED OUT NOT TO BE NOTHING ───────────────
 *
 * The plan was that a capstone teaches nothing new. Even coverage of all 29
 * units confirms it for the review half: all 87 contributions are already
 * taught, already in the seed, already released. So the review half releases
 * NOTHING and that is correct rather than a defect.
 *
 * Then the probe found the hole.
 *
 * TWENTY-NINE LESSONS TEACH A LEARNER TO PRODUCE FRENCH AND NOT ONE TEACHES
 * THEM WHAT TO SAY WHEN THEY HAVE NOT UNDERSTOOD. Measured 2026-08-08:
 * `excusez-moi`, `pardon`, `bien sûr`, `voilà`, `je ne comprends pas`,
 * `un instant`, `de rien`, `pas de problème`, `d'accord` and `peut-être` are
 * all PUBLISHED in Postgres, ABSENT from the seed, and named by no lesson's
 * itemIds. They exist and reach nobody.
 *
 * The unit's canDo is "can hold a short everyday exchange". An exchange is held
 * by the repair moves, not by the vocabulary: a learner who cannot say « je ne
 * comprends pas » loses the conversation the first time they miss a word,
 * whatever else they know. So that kit is what this lesson owns, it is what the
 * tranches release, and it is why the capstone is not merely a revision sheet.
 *
 * ── AND TWO ROWS THE CORPUS CANNOT SUPPLY AT ALL ───────────────────────────
 *
 * Searching a1 and sons for `répéter` and `lentement` returns only long
 * narrative sentences about somebody else asking:
 *
 *     « Elle a demandé de répéter le nom une deuxième fois, plus lentement. »
 *     « Elle parle lentement pour que tout le monde comprenne. »
 *
 * There is no usable A1 form of the single most useful thing a beginner can
 * say. These two rows are the only thing this lesson authors, and they are the
 * point of it.
 */

import type { Item } from '../../../ealch-v2/src/content/schema.ts';

export const THEME = 'expressions-frequentes';
export const LEVEL = 'a1';

/** The two rows the corpus could not supply. `fr.a1.expressions-frequentes`
 *  ran to 122 with no gaps when this was measured; the batch re-checks. */
export const AUTHORED_ITEMS: Item[] = [
  {
    id: 'fr.a1.expressions-frequentes.123',
    kind: 'phrase',
    level: 'a1',
    theme: 'expressions-frequentes',
    fr: 'Vous pouvez répéter, s\'il vous plaît ?',
    en: 'Could you say that again, please?',
    ipa: '/vu pu.ve ʁe.pe.te sil vu plɛ/',
    respell: 'voo poo-VAY ray-pay-TAY, seel voo PLEH',
    // Vous rather than tu, deliberately. A learner needs this most with a
    // stranger, and the formal form is the one that is never wrong. a1.19 and
    // a1.20 both teach vous questions, so nothing here is new grammar.
    notes: 'The formal form, because this is most needed with somebody you do not know.',
    tags: ['repair', 'core'],
    drills: ['flashcard', 'voiceflash'],
    version: 1,
    cardType: 'vocab',
  },
  {
    id: 'fr.a1.expressions-frequentes.124',
    kind: 'phrase',
    level: 'a1',
    theme: 'expressions-frequentes',
    fr: 'Plus lentement, s\'il vous plaît.',
    en: 'More slowly, please.',
    ipa: '/ply lɑ̃t.mɑ̃ sil vu plɛ/',
    // TWO nasal vowels in `lentement` and neither takes a plain n. The shared
    // checker can see the second, which ends the token, and CANNOT see the
    // first, which is word-internal. Both are written correctly here and the
    // test asserts this string by name for exactly that reason.
    respell: 'plü lahⁿt-MAHⁿ, seel voo PLEH',
    notes: 'Said on its own, after asking for repetition, when the repetition was still too fast.',
    tags: ['repair', 'core'],
    drills: ['flashcard', 'voiceflash'],
    version: 1,
    cardType: 'vocab',
  },
];

/** Neither authored row carries a gender and neither is a single-word noun, so
 *  a1.03's measured ending population does not move. The batch proves it through
 *  the real endingPopulation rather than trusting this sentence. */
export const AUTHORED_GENDERED_NOUNS: string[] = [];

/** Where the next author starts. Re-run the probe rather than trusting it. */
export const OWNED_ID_RANGE = { from: 'fr.a1.expressions-frequentes.123', to: 'fr.a1.expressions-frequentes.124' };
export const HANDOVER_NEXT_FREE_ID = 'fr.a1.expressions-frequentes.125';

/* ── The boundaries ───────────────────────────────────────────────────────
 *
 * A capstone's risk is the opposite of an ordinary lesson's. It cannot leak a
 * neighbour's content, because every A1 unit is its neighbour and reusing them
 * is the job. What it CAN do is quietly start teaching again, or reach above
 * the band. Both are checked on production surfaces only, because a guard
 * written over every string fires on legitimate context and gets deleted.   */

/** Above the band. The capstone ends A1 and reaches for nothing past it. */
export const ABOVE_BAND = [
  'passé composé', 'imparfait', 'futur simple', 'plus-que-parfait',
  'vous vous levez', 'ils se lèvent', 'nous nous levions',
  'j\'ai mangé', 'je suis allé', 'j\'irai', 'je faisais',
];

/** The word for the thing, which belongs to the curriculum and not to a card. */
export const JARGON = [
  'conjugation', 'paradigm', 'reflexive verb', 'definite article', 'partitive',
  'interrogative', 'imperative', 'past participle',
];

/** A capstone REVIEWS. If it starts explaining a rule from scratch it has become
 *  a thirtieth ordinary lesson and the band has no capstone. These are the
 *  openings that signal teaching rather than reminding, checked on card bodies. */
export const TEACHING_TELLS = [
  'a new rule', 'you have not seen', 'for the first time', 'this lesson introduces',
  'here is a new', 'now learn',
];

/** The 29 units this capstone must represent, in curriculum order. Exported so
 *  the batch, the merge and the test all check coverage against ONE list rather
 *  than three copies that drift. */
export const COVERED_UNITS = [
  'a1.01', 'a1.02', 'a1.27', 'a1.28', 'a1.03', 'a1.04', 'a1.11', 'a1.29',
  'a1.05', 'a1.06', 'a1.07', 'a1.08', 'a1.09', 'a1.10', 'a1.12', 'a1.13',
  'a1.14', 'a1.16', 'a1.15', 'a1.17', 'a1.18', 'a1.19', 'a1.20', 'a1.21',
  'a1.22', 'a1.23', 'a1.24', 'a1.25', 'a1.26',
] as const;

/** The five clauses of the canDo, each of which a section must exercise. A
 *  capstone quietly losing one is invisible without this. */
export const CANDO_CLAUSES = [
  { key: 'introduce', clause: 'introduce themselves', units: ['a1.01', 'a1.06', 'a1.22'] },
  { key: 'ask', clause: 'ask questions', units: ['a1.19', 'a1.20'] },
  { key: 'count', clause: 'count', units: ['a1.02', 'a1.27', 'a1.28'] },
  { key: 'time', clause: 'tell the time', units: ['a1.12'] },
  { key: 'describe', clause: 'describe their world', units: ['a1.13', 'a1.14', 'a1.25', 'a1.26'] },
] as const;

/** Measured 2026-08-08 and quoted on a card, so nothing restates it. */
export const BAND_STATS = {
  lessons: 29,
  itemIds: 1658,
  sections: 751,
  quizQuestions: 732,
  scenarioTurns: 144,
  turnsWithAlternates: 144,
  minTurns: 3,
  maxTurns: 6,
} as const;
