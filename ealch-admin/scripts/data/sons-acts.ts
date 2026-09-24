// Acts for the four act-less sons lessons — sons.01.l1, sons.02.l1, sons.03.l1
// and sons.04.l1 — phase 07.1, D-31. These four predate the mission-journey
// shape: 26, 20, 20 and 21 sections each, and zero acts. Without this the
// Concept C trail either grows a second row vocabulary for four units or
// renders four empty headings. This module gives all four the same row
// vocabulary as the rest of the corpus: acts, section ids and a deckTranche.
//
// `Lesson.version` is NOT to be bumped by the build that applies this (D-25).
// It keys `lessonMissions[id].v` and a bump silently zeroes every learner's
// checkmarks and XP. `check-version-bumps.ts` will ask for one; ignore it.
//
// EVERY FIELD BELOW IS INDEX-KEYED TO THE EXISTING `sections` ARRAY IN
// `seed.json`, in file order. `sectionIds[i]` is the id assigned to
// `LESSON.sections[i]`. A reorder of that array in Postgres or the seed since
// this file was written invalidates it — `author-sons-acts-batch.ts` asserts
// `body.sections.length === sectionIds.length` before writing, and refuses
// otherwise, but a reorder with the SAME length would not be caught by that
// count and would silently mis-id every section.
//
// Board C4 draws six invented act rows for sons.01. These six real acts are
// ACCEPTED AS INDICATIVE of that board, not a redraw of it: the board is not
// being changed to match this file, and this file is not trying to match the
// board's exact copy. (D-31 asked planning to say which; this is the answer,
// and the plan's SUMMARY repeats it.)
import type { LessonAct } from '../../../ealch-v2/src/content/schema.ts';

export type SonsActPlan = {
  /** One entry per section, in file order. Index IS the section index. */
  sectionIds: string[];
  acts: LessonAct[];
  deckTranche: string[][];
};

export const SONS_ACTS: Record<'sons.01.l1' | 'sons.02.l1' | 'sons.03.l1' | 'sons.04.l1', SonsActPlan> = {
  // ── sons.01.l1 — teach-shaped, 26 sections, 6 acts (matches Board C4) ────
  'sons.01.l1': {
    sectionIds: [
      's01-why', 's02-goals', 's03-concept', 's04-notation', 's05-letters',
      's06-ambush', 's07-vowels', 's08-examples', 's09-ladder', 's10-patterns',
      's11-vocab', 's12-spell-name', 's13-helper-words', 's14-email-words',
      's15-email-audio', 's16-song', 's17-sing-along', 's18-mistakes',
      's19-reading', 's20-speaking', 's21-minimal-pairs', 's22-shadowing',
      's23-memory-hacks', 's24-flashcards', 's25-roundup', 's26-quiz',
    ],
    acts: [
      {
        id: 'act1',
        title: 'Sounds versus letters',
        sections: ['s01-why', 's02-goals', 's03-concept', 's04-notation'],
        milestone: "You know why French spelling and French sound are different games.",
        estScreens: 4,
      },
      {
        id: 'act2',
        title: 'The alphabet, the ambush letters, the vowels',
        sections: ['s05-letters', 's06-ambush', 's07-vowels', 's08-examples', 's09-ladder', 's10-patterns'],
        milestone: 'You can say every letter and hear the vowels that trip up English speakers.',
        estScreens: 48,
      },
      {
        id: 'act3',
        title: 'Spelling out loud',
        sections: ['s11-vocab', 's12-spell-name', 's13-helper-words', 's14-email-words'],
        milestone: 'You can spell your own name and read an email address out loud.',
        estScreens: 4,
      },
      {
        id: 'act4',
        title: 'The alphabet song and common slips',
        sections: ['s15-email-audio', 's16-song', 's17-sing-along', 's18-mistakes', 's19-reading'],
        milestone: 'You can sing the alphabet and catch the mistakes that repeat most.',
        estScreens: 24,
      },
      {
        id: 'act5',
        title: 'Speaking and listening drills',
        sections: ['s20-speaking', 's21-minimal-pairs', 's22-shadowing', 's23-memory-hacks'],
        milestone: 'You can hear and say the pairs that sound almost the same.',
        estScreens: 16,
      },
      {
        id: 'act6',
        title: 'Review and the final quiz',
        sections: ['s24-flashcards', 's25-roundup', 's26-quiz'],
        milestone: 'You have reviewed the whole alphabet and proven it on the quiz.',
        estScreens: 14,
      },
    ],
    deckTranche: [
      [],
      ['fr.sons.alphabet.001', 'fr.sons.voyelles.001', 'fr.sons.voyelles.003', 'fr.sons.alphabet.002'],
      ['fr.sons.alphabet.003', 'fr.sons.alphabet.004'],
      ['fr.sons.alphabet.005', 'fr.sons.alphabet.006'],
      ['fr.sons.alphabet.007'],
      ['fr.sons.alphabet.008'],
    ],
  },

  // ── sons.04.l1 — teach-shaped, 21 sections, 5 acts ───────────────────────
  'sons.04.l1': {
    sectionIds: [
      's01-why', 's02-goals', 's03-buckets', 's04-ambush-letters', 's05-throat-r',
      's06-j-soft-g', 's07-c-g-gate', 's08-forced-spelling', 's09-ch-gn',
      's10-vocab', 's11-read-c-g', 's12-qu-ph-th-h', 's13-say-it-back',
      's14-mistakes', 's15-speaking', 's16-minimal-pairs', 's17-shadowing',
      's18-ear-training', 's19-flashcards', 's20-roundup', 's21-quiz',
    ],
    acts: [
      {
        id: 'act1',
        title: 'Consonants versus vowels',
        sections: ['s01-why', 's02-goals', 's03-buckets'],
        milestone: 'You understand why French consonants need their own map.',
        estScreens: 3,
      },
      {
        id: 'act2',
        title: 'The throat R and the ambush letters',
        sections: ['s04-ambush-letters', 's05-throat-r', 's06-j-soft-g', 's07-c-g-gate', 's08-forced-spelling', 's09-ch-gn'],
        milestone: 'You can produce the throat R and place R, J, H, C and G correctly.',
        estScreens: 20,
      },
      {
        id: 'act3',
        title: 'Reading C and G before you say them',
        sections: ['s10-vocab', 's11-read-c-g', 's12-qu-ph-th-h', 's13-say-it-back'],
        milestone: 'You can read any C or G and spell the tricky groups aloud.',
        estScreens: 4,
      },
      {
        id: 'act4',
        title: 'Common mistakes and shadowing',
        sections: ['s14-mistakes', 's15-speaking', 's16-minimal-pairs', 's17-shadowing', 's18-ear-training'],
        milestone: 'You can catch the classic consonant slips and repeat them cleanly.',
        estScreens: 13,
      },
      {
        id: 'act5',
        title: 'Review and the final quiz',
        sections: ['s19-flashcards', 's20-roundup', 's21-quiz'],
        milestone: 'You have reviewed every consonant and proven it on the quiz.',
        estScreens: 14,
      },
    ],
    deckTranche: [
      [],
      [
        'fr.sons.voyelles.003', 'fr.sons.alphabet.005', 'fr.sons.voyelles.176', 'fr.sons.alphabet.001',
        'fr.sons.voyelles.146', 'fr.sons.alphabet.003', 'fr.sons.alphabet.004', 'fr.sons.voyelles.009',
        'fr.sons.mots-essentiels.089', 'fr.sons.alphabet.190',
      ],
      [
        'fr.sons.alphabet.191', 'fr.sons.voyelles.061', 'fr.sons.alphabet.198', 'fr.sons.alphabet.199',
        'fr.sons.alphabet.002', 'fr.sons.noms-essentiels.057',
      ],
      [
        'fr.sons.verbes-essentiels.033', 'fr.sons.alphabet.205', 'fr.sons.alphabet.203', 'fr.sons.questions.001',
        'fr.sons.nombres.003', 'fr.sons.consonnes.001', 'fr.sons.consonnes.002', 'fr.sons.consonnes.003',
      ],
      [
        'fr.sons.consonnes.004', 'fr.sons.consonnes.005', 'fr.sons.consonnes.006', 'fr.sons.consonnes.007',
        'fr.sons.consonnes.008', 'fr.sons.consonnes.009', 'fr.sons.consonnes.010',
      ],
    ],
  },

  // ── sons.02.l1 — journey-shaped, 20 sections, 5 acts. REUSES the two ids
  //    this lesson already carries: s01-scene (section 0) and s06-trap-u-ou
  //    (section 5). ──────────────────────────────────────────────────────
  'sons.02.l1': {
    sectionIds: [
      's01-scene', 's02-goals', 's03-basic-idea', 's04-sound-grid', 's05-group-drill',
      's06-trap-u-ou', 's07-pronunciation-lab', 's08-vocab', 's09-examples', 's10-dictation',
      's11-cafe-listening', 's12-speak-aloud', 's13-bakery-scenario', 's14-common-errors',
      's15-ear-u-ou', 's16-reading', 's17-review-deck', 's18-progress-check', 's19-quiz', 's20-roundup',
    ],
    acts: [
      {
        id: 'act1',
        title: 'A misunderstanding, named',
        sections: ['s01-scene', 's02-goals', 's03-basic-idea'],
        milestone: 'You know what the seven oral vowels are and why one mix-up caused it.',
        estScreens: 8,
      },
      {
        id: 'act2',
        title: 'The seven vowels and the U/OU trap',
        sections: ['s04-sound-grid', 's05-group-drill', 's06-trap-u-ou', 's07-pronunciation-lab'],
        milestone: 'You can place each vowel sound and hear the difference between U and OU.',
        estScreens: 4,
      },
      {
        id: 'act3',
        title: 'Vocabulary and real sentences',
        sections: ['s08-vocab', 's09-examples', 's10-dictation', 's11-cafe-listening', 's12-speak-aloud'],
        milestone: 'You have ten reusable sentences and can spell what you hear.',
        estScreens: 5,
      },
      {
        id: 'act4',
        title: 'At the café and the bakery',
        sections: ['s13-bakery-scenario', 's14-common-errors', 's15-ear-u-ou', 's16-reading'],
        milestone: 'You can use the vowels in a real order and catch the eight classic traps.',
        estScreens: 4,
      },
      {
        id: 'act5',
        title: 'Review and the final quiz',
        sections: ['s17-review-deck', 's18-progress-check', 's19-quiz', 's20-roundup'],
        milestone: 'You have reviewed the rounded pairs and proven all seven vowels on the quiz.',
        estScreens: 15,
      },
    ],
    deckTranche: [
      ['fr.sons.voyelles.001', 'fr.sons.voyelles.003', 'fr.sons.voyelles.008', 'fr.sons.voyelles.075'],
      ['fr.sons.voyelles.096', 'fr.sons.voyelles.004', 'fr.sons.voyelles.100', 'fr.sons.voyelles.103', 'fr.sons.voyelles.102'],
      ['fr.sons.voyelles.077', 'fr.sons.voyelles.082', 'fr.sons.voyelles.009', 'fr.sons.voyelles.164', 'fr.sons.voyelles.061', 'fr.sons.voyelles.065'],
      ['fr.sons.voyelles.087', 'fr.sons.voyelles.092', 'fr.sons.voyelles.107', 'fr.sons.voyelles.078', 'fr.sons.voyelles.083'],
      ['fr.sons.voyelles.069', 'fr.sons.voyelles.002', 'fr.sons.voyelles.071', 'fr.sons.voyelles.073', 'fr.sons.voyelles.072'],
    ],
  },

  // ── sons.03.l1 — journey-shaped, 20 sections, 5 acts. REUSES the one id
  //    this lesson already carries: s01-scene (section 0). ────────────────
  'sons.03.l1': {
    sectionIds: [
      's01-scene', 's02-goals', 's03-basic-idea', 's04-sound-grid', 's05-group-drill',
      's06-trap-anti-rule', 's07-pronunciation-lab', 's08-vocab', 's09-examples', 's10-dictation',
      's11-breakfast-listening', 's12-speak-aloud', 's13-bakery-scenario', 's14-common-errors',
      's15-bon-bonne', 's16-reading', 's17-review-deck', 's18-progress-check', 's19-quiz', 's20-roundup',
    ],
    acts: [
      {
        id: 'act1',
        title: 'A welcome, misheard',
        sections: ['s01-scene', 's02-goals', 's03-basic-idea'],
        milestone: 'You know what the four nasal vowels are and why one of them caused the mix-up.',
        estScreens: 8,
      },
      {
        id: 'act2',
        title: 'The four nasal families and the anti-rule trap',
        sections: ['s04-sound-grid', 's05-group-drill', 's06-trap-anti-rule', 's07-pronunciation-lab'],
        milestone: 'You can sort the four nasal families and avoid the anti-rule trap.',
        estScreens: 4,
      },
      {
        id: 'act3',
        title: 'Nasal vocabulary and real phrases',
        sections: ['s08-vocab', 's09-examples', 's10-dictation', 's11-breakfast-listening', 's12-speak-aloud'],
        milestone: 'You have ten reusable phrases and can spell the nasals you hear.',
        estScreens: 5,
      },
      {
        id: 'act4',
        title: 'At the bakery, in writing',
        sections: ['s13-bakery-scenario', 's14-common-errors', 's15-bon-bonne', 's16-reading'],
        milestone: 'You can use the nasals in a real order and write the bon/bonne trap correctly.',
        estScreens: 4,
      },
      {
        id: 'act5',
        title: 'Review and the final quiz',
        sections: ['s17-review-deck', 's18-progress-check', 's19-quiz', 's20-roundup'],
        milestone: 'You have reviewed the four-anchor compass and proven the nasals on the quiz.',
        estScreens: 15,
      },
    ],
    deckTranche: [
      ['fr.sons.voyelles.108', 'fr.sons.nasales.166', 'fr.sons.voyelles.119'],
      ['fr.sons.nasales.168', 'fr.sons.nasales.176', 'fr.sons.nasales.167'],
      ['fr.sons.nasales.169', 'fr.sons.nasales.177', 'fr.sons.voyelles.117', 'fr.sons.nasales.002'],
      ['fr.sons.nasales.066', 'fr.sons.nasales.130', 'fr.sons.nasales.003'],
      ['fr.sons.nasales.129', 'fr.sons.nasales.170', 'fr.sons.nasales.171'],
    ],
  },
};
