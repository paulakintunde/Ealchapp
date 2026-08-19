// a1.15.l1 "La famille", the mission journey.
//
// The corpus findings that changed this build are in the header of
// famille-corpus.ts and are not repeated here. In one line: the brief's central
// assumption held (famille is in the cut, 331 published, 331 in the seed, NEXT
// FREE .235), five of its smaller claims understated what exists, `la personne`
// had to be withdrawn because it moves one of a1.03's printed figures, and there
// is no `de`-possession evidence anywhere in the database.
//
// ── The structural fact that shapes the whole plan ─────────────────────────
//
// THE VOCABULARY ALREADY HAPPENED. Twenty-eight family headwords are published,
// `la fille`, `la femme` and `les parents` are already on cards inside a1.03 and
// a1.11, and the unit's canDo asks for something a word list cannot deliver:
// "introduce their family and SAY WHO IS WHO".
//
// So this lesson IMPORTS its vocabulary in three missions and spends the rest of
// itself on the two things that are actually load-bearing. If the words were
// given eight missions, this would be a flashcard set with a lesson wrapped
// around it and the learner would already know a third of it.
//
//   act 2, three missions      the twenty-two words, imported
//   acts 1 and 5, nine         the de rule, which is the canDo's second half
//   act 3, three               the gender insight, and where it stops
//
// ── You cannot do your own canDo without possessives, and they are a1.17 ───
//
//     a1.15  seq 19  "Can introduce their family and say who is who"       <- this
//     a1.17  seq 20  "Can say whose things are whose with mon, ma, mes and their kin"
//
// Three routes out, and this lesson takes two and a half:
//
//   DE FOR POSSESSION carries "say who is who" on its own and needs no
//   possessive at all. It is the reframe, it has nine missions, and every row
//   proving it is authored here because the database holds none.
//
//   AVOIR FOR THE COUNT carries "introduce their family" with grammar the
//   learner fully owns. a1.07 is built and a1.02 gave the numbers.
//
//   MON / MA / MES, AS EXACTLY THREE FROZEN WORDS. Not a paradigm, not a rule,
//   and above all not the mon-before-a-feminine-vowel rule, which is a1.17's
//   headline. s17-mine says on the card that the full set arrives next lesson,
//   because a learner who notices the gap and is not told concludes the lesson
//   is incomplete. The handover at the foot of this file says exactly what was
//   taken, and the batch, the merge and the test all assert the boundary against
//   RESERVED_POSSESSIVES and POSSESSIVE_RULE_PHRASES rather than trusting it.
//
// ── Gender finally tells the truth, and this is the one place it does ──────
//
// a1.03 taught that gender is a property of the noun and mostly has to be
// learned. Family is the one corner where the article follows the actual person,
// twelve words deep, and after a1.03 that is worth naming as a rule rather than
// leaving as a coincidence.
//
// IT SHIPS WITH ITS EXCEPTIONS ON THE SAME SCREEN as the rule, never after it.
// s10-stops is the commonErrors mission and it is not an appendix: le bébé is
// masculine for a baby girl, l'enfant for any child, and les parents, les
// enfants and les grands-parents are masculine plurals over mixed groups, which
// is the ordinary French rule showing through. a1.11 already put `les parents`
// on a card titled "Masculine, and it says les", so that one is a callback.
//
// ── What is deliberately left to its neighbours ────────────────────────────
//
//   POSSESSIVE ADJECTIVES are a1.17's, seq 20, and it declares this theme. See
//   above and the handover below.
//
//   ADJECTIVE AGREEMENT is a1.13's, shipped. Every example here is correctly
//   agreed and no card stops to explain why.
//
//   ADJECTIVE PLACEMENT is a1.16's, briefed. `grand-mère` is presented as a
//   FROZEN NOUN and never as an agreement example, or this lesson has opened
//   a1.16's subject. The `fossilised` term says "welded together" and "single
//   frozen item" and never says the word agreement.
//
//   DESCRIBING PEOPLE with grand, petit, vieux is a1.14's. « Ma sœur est
//   grande » is one sentence too far and no description reaches a screen. The
//   published corpus row fr.a1.famille.009, « Ma sœur est petite. », is NOT
//   imported for exactly this reason.
//
//   REFLEXIVE VERBS are a2.22's. « Ma mère s'appelle Marie. » is imported
//   because it is the natural who-is-who sentence and it already exists, and
//   s07-house says on the card that it is a fixed phrase, the way a1.01
//   handled « je m'appelle ».
//
//   AGES are a1.07's. « Mon frère a dix ans. » is legitimate reuse of a frame
//   the learner owns; there is no ages act.
//
// ── The layout decisions, each of which is a bug someone already shipped ───
//
//   A FAMILY TREE IS THE OBVIOUS HERO VISUAL AND NOTHING IN THIS APP DRAWS ONE.
//   There is no tree, graph or diagram section type, and `imageRef` is validated
//   by NOTHING: lesson-contract.test.ts contains no reference to it, and the
//   comment in schema.ts promising a check is conditional on a snapshot asset
//   manifest that does not exist. An unregistered ref draws a blank box.
//   THIS LESSON AUTHORS NO IMAGE, and the test asserts the count is zero.
//   s08-tree is a `tapTable` instead: generations down the side, masculine and
//   feminine across, which also does the gender teaching for free because the
//   two columns ARE the two articles.
//
//   s04-pairs IS THE REFRAME'S LAYOUT AND THE TEST ASSERTS IT. French left,
//   English right, on one screen, with the word order visibly reversed. Split
//   across two missions it stops being a rule and becomes two facts.
//
//   `tapTable` is NOT in ownsLayout(), so s04-pairs, s08-tree and s14-nasals all
//   render inside a SCROLLING page. Every one of them is TWO columns, never
//   more, and every cell is three words or fewer with the teaching in the detail
//   modal, which is a card and can hold prose.
//
//   `commonErrors` carries `swipe: true, size: 'lg'`, one error per screen.
//   Without `swipe` MissionSection takes a fallback that returned undefined and
//   drew a BLANK mission (a1.01 m5, sons.08 m22).
//
//   A `groupDrill` control page carries `items: []` explicitly and no `size`.
//   At `xl` a groupDrill owns the layout and at any other size it does not,
//   which has shipped as a bug twice. s11-sort is NOT xl.
//
//   `size: 'xl'` is not decoration: density.logic.ts reads it as a 12-WORD CAP
//   on every string in the section. s06-six is the only xl section here and
//   every card in it is one French word with a short gloss.
//
//   `reading` carries `questionsInModal: true` WITH questions, which is the only
//   path that reaches PassagePage and so the only path that draws the glossary.
//   The passage is ONE BLOCK with no line breaks: PassagePage splits on
//   /(?<=[.!?»])\s+/ and an authored newline is silently discarded.
//
//   ONE `quiz` section. lessonPager.logic.ts appends exactly one quiz page.
//
//   No `autoplay` anywhere: declared in schema.ts, implemented in no component.
//
//   NO U+203F. The tie renders as a low underscore on a Pixel 6.
//
//   THE REFERENCE SHEET is what a learner returns to during a1.17, so its
//   `sheetId` is wired from s03-turn and s17-mine rather than added at the end.
//
// ── The dictée follows a MEASUREMENT, and it is the opposite of a1.13's ────
//
// a1.13 found that WORD mode cannot test an agreement ending, because the
// learner taps a pre-spelled `vertes` tile and never decides a letter, so every
// one of its targets had to stay under DICTEE_LETTER_LIMIT and in letters mode.
//
// THIS LESSON TEACHES AN ORDER, NOT AN ENDING, and word mode is therefore the
// RIGHT mode for the sentence that proves it. dicteeWords() hands the learner
// the sentence's words as tiles plus two decoys and asks them to sequence them,
// which is exactly the decision `de` requires. Measured with the real
// `dicteeMode` in scripts/_famille_dictee.ts:
//
//     letters  "la mère de Paul"              the reframe, spelled
//     letters  "la sœur de Marie"             the œ, spelled
//     letters  "le fils de Marie"             the fils spelling, which is the trap
//     letters  "Je n'ai pas de frère."        the negative frame
//     words    "Marie est la sœur de Paul."   THE ORDER, assembled  <- deliberate
//
// The last one is not a target that "degraded" to word mode. It is the only
// target in the set that makes the learner PUT `de` IN THE RIGHT PLACE, and a
// letters-mode version of it would test spelling instead. Named here so nobody
// "fixes" it by shortening the sentence. The batch, the merge and the test all
// assert the mode of each target through the real function rather than against a
// restated threshold.

import type {
  ErrorTrigger, Lesson, LessonAct, LessonDrill, LessonSection, ReferenceSheet, SceneBeat,
} from '../../../ealch-v2/src/content/schema.ts';
import { FAMILLE_TERMS, REFRAME } from './famille-terms.ts';
import { unitRef } from './_unit-ref.ts';
import {
  AUTHORED_IDS, DOUBLE_DUTY, EXTENDED, FILS_PAIR, GENERATIONS, MARRIED, MATCHED_PAIRS,
  THE_TWELVE, WHERE_IT_STOPS, enOf, frOf, glossOf, ipaOf, sub,
} from './famille-corpus.ts';

export { REFRAME };

/* ─── The corpus this lesson sequences ─────────────────────────────────────
 *
 * Grouped by the job the ids do, so a section names a GROUP and the tranche
 * slices read from the same groups rather than restating a word list.
 *
 * Every id below is SHOWN on a screen, or named by a drill or a term. a1.08
 * shipped 43 itemIds named by nothing at all, released to spaced repetition and
 * drawn by no component, and it was invisible until a check asked "did the
 * learner see it" rather than "does this id resolve". The same check runs here,
 * in the batch, the merge and the test.                                      */

/** The twelve where the article matches the person. Not one is authored: all
 *  twelve were already published in famille. */
const PAIRS = [
  'fr.a1.famille.001', 'fr.a1.famille.002', // le père   / la mère
  'fr.a1.famille.003', 'fr.a1.famille.004', // le frère  / la sœur
  'fr.a1.famille.015', 'fr.a1.famille.016', // le fils   / la fille
  'fr.a1.famille.024', 'fr.a1.famille.025', // l'oncle   / la tante
  'fr.a1.famille.026', 'fr.a1.famille.027', // le cousin / la cousine
  'fr.a1.famille.028', 'fr.a1.famille.029', // le neveu  / la nièce
];

/** The generations either side, the word for the whole thing, and the married
 *  pair. All imported. */
const HOUSEHOLD = [
  'fr.a1.famille.013', // la famille
  'fr.a1.famille.014', // les parents
  'fr.a1.famille.021', // la grand-mère
  'fr.a1.famille.022', // le grand-père
  'fr.a1.famille.023', // les grands-parents
  'fr.a1.famille.030', // le petit-fils
  'fr.a1.famille.031', // la petite-fille
  'fr.a1.famille.017', // le mari
  'fr.a1.famille.018', // la femme
];

/** Step and in-law. The half most likely to be trimmed later, so the test
 *  asserts every one of them BY NAME rather than as a count. */
const EXTENDED_IDS = [
  'fr.a1.famille.032', // le beau-père
  'fr.a1.famille.033', // la belle-mère
  'fr.a1.famille.036', // le demi-frère
  'fr.a1.famille.037', // la demi-sœur
];

/** Where the matching rule stops. Released in the SAME tranche as the rule. */
const STOPS_IDS = [
  'fr.a1.famille.019', // le bébé
  'fr.a1.famille.020', // l'enfant
  'fr.a1.famille.251', // les enfants   <- the one authored headword
];

/** The reframe, authored, because the database holds no de-possession at all. */
const DE_PHRASES = [
  'fr.a1.famille.235', // la mère de Paul
  'fr.a1.famille.236', // le père de Marie
  'fr.a1.famille.237', // le frère de Paul
  'fr.a1.famille.238', // la sœur de Marie
  'fr.a1.famille.239', // la fille de Paul
  'fr.a1.famille.240', // le fils de Marie
];

/** The minimal pair. Same two people, same two family words, and the only thing
 *  that moves is which name sits after `de`. */
const SWAP_PAIR = ['fr.a1.famille.241', 'fr.a1.famille.242'];

/** de in a whole sentence, and the one that settles `la fille`. */
const DE_SENTENCES = ['fr.a1.famille.243', 'fr.a1.famille.244', 'fr.a1.famille.252'];

/** Counting your own family, on grammar the learner fully owns. */
const AVOIR_IDS = [
  'fr.a1.famille.245', // J'ai un frère et deux sœurs.
  'fr.a1.famille.246', // Je n'ai pas de frère.
  'fr.a1.famille.247', // Tu as des frères et sœurs ?
  'fr.a1.famille.006', // J'ai deux frères et une sœur.     already published
  'fr.a1.famille.010', // Mon frère a dix ans.              already published
];

/** Exactly three, and they are taken as words rather than as a system. */
const MINE_IDS = ['fr.a1.famille.248', 'fr.a1.famille.249', 'fr.a1.famille.250'];

/** The sound pair no lesson has ever put on one screen. Both rows already
 *  exist, in different themes, and .058's own note already points at fils. */
const SOUND_IDS = ['fr.sons.muettes.058'];

/** Published sentences that do work no authored row would do better. */
const IN_THE_WILD = [
  'fr.a1.famille.005', // Ma mère s'appelle Marie.
  'fr.a1.famille.083', // Mon frère et ma sœur habitent à Lyon.
];

const ITEM_IDS = [
  ...new Set([
    ...PAIRS, ...HOUSEHOLD, ...EXTENDED_IDS, ...STOPS_IDS, ...DE_PHRASES, ...SWAP_PAIR,
    ...DE_SENTENCES, ...AVOIR_IDS, ...MINE_IDS, ...SOUND_IDS, ...IN_THE_WILD,
  ]),
];

/** Spoken practice draws ONLY from items carrying `voiceflash`, because that is
 *  the drill the mic-scored deck runs. An item without it renders as a card the
 *  learner cannot be scored on, which looks like a broken mission rather than a
 *  missing tag.
 *
 *  MEASURED against the seed on 2026-08-06, and it is the same wall a1.08, a1.09
 *  and a1.13 all hit in their own themes: NOT ONE published SENTENCE in famille
 *  carries voiceflash. Every one is `dictation` or `sentence,flashcard,review`.
 *  So the spoken mission is the headwords and this lesson's own authored
 *  phrases, which is the only voiceflash-carrying family content that exists
 *  after this build. It is in the report. */
const SPEAK_IDS = [...PAIRS, ...DE_PHRASES, ...MINE_IDS];

/** The dictée. Four letters-mode targets and ONE word-mode target, and the word
 *  one is the point rather than an accident. See the header. */
const DICTATION_IDS = [
  'fr.a1.famille.235', // la mère de Paul               letters
  'fr.a1.famille.238', // la sœur de Marie              letters
  'fr.a1.famille.240', // le fils de Marie              letters
  'fr.a1.famille.246', // Je n'ai pas de frère.         letters
  'fr.a1.famille.241', // Marie est la sœur de Paul.    WORDS, deliberately
];

/** The one target that must stay in word mode, named so nobody shortens it. */
export const WORD_MODE_TARGET = 'fr.a1.famille.241';

/* ─── Mission 1 · Scene ────────────────────────────────────────────────────
 *
 * The A1 register of stakes is being MISREAD AS A PERSON rather than being
 * corrected. Every word right, and the interaction still goes wrong.
 *
 * Family offered two candidates and this is the sharper one. A learner who
 * reverses the de phrase and says « Paul de la mère » stops the conversation
 * dead and can SEE that they did; a learner who says « la femme » meaning "the
 * woman" is understood as saying "my wife", nobody corrects anything, the
 * conversation proceeds on a false footing, and they never find out. That is a
 * cost that is social rather than grammatical, and it is invisible, which is
 * exactly the shape of error worth a scene.
 *
 * The choice beat is `la femme` against `une femme`: ONE WORD apart, which is
 * the smallest the pair can be made.
 *
 * The scene teaches `la femme`; the CLOSING hands over to the de rule, because
 * the rest of the lesson is about saying exactly who is who and the reframe is
 * how that is done. The reframe is carried verbatim there.                   */

const SCENE_BEATS: SceneBeat[] = [
  {
    kind: 'narration',
    size: 'md',
    text: 'Sunday lunch at a friend\'s place, and somebody has asked to see photos from work.',
    audio: { mode: 'tts', voice: 'coach' },
  },
  {
    kind: 'narration',
    size: 'md',
    text: 'You scroll to one of the team. You want to point at somebody you work with. Nobody you are related to.',
    audio: { mode: 'tts', voice: 'coach' },
  },
  {
    kind: 'bubble',
    from: 'them',
    reveal: 'auto',
    size: 'md',
    speaker: 'Salomé',
    fr: 'Et elle, c\'est qui ?',
    en: 'And her, who is she?',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a1-15-scene' },
  },
  {
    kind: 'choice',
    size: 'lg',
    prompt: 'You mean a woman you work with. Which line do you say?',
    options: [
      {
        fr: 'Voici la femme.',
        respell: sub('la femme'),
        en: 'the one that uses the word for woman',
        outcome: 'breaks',
        audio: { mode: 'tts', lang: 'fr-FR' },
      },
      {
        fr: 'Voici une femme.',
        respell: sub('la femme'),
        en: 'the one that says a woman rather than the woman',
        outcome: 'works',
        audio: { mode: 'tts', lang: 'fr-FR' },
      },
    ],
    followUp: {
      works: 'Yes, and the difference is one word. Watch what the other one does, because nobody will tell you.',
      breaks: 'That is the word for woman, and it is also the word for something else. Watch what she hears.',
    },
  },
  {
    kind: 'bubble',
    from: 'you',
    reveal: 'auto',
    size: 'md',
    speaker: 'You',
    fr: 'Voici la femme.',
    en: '(This is the wife.)',
    audio: { mode: 'tts', lang: 'fr-FR' },
  },
  {
    kind: 'bubble',
    from: 'them',
    reveal: 'tap',
    size: 'md',
    speaker: 'Salomé',
    fr: 'Ah, tu es marié ? Félicitations !',
    en: 'Ah, you are married? Congratulations!',
    stage: 'Nothing has been corrected. She has simply understood you, and she is pleased for you.',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a1-15-scene' },
  },
  {
    kind: 'break',
    size: 'lg',
    heading: 'One word, two meanings, and nobody asks',
    // 39 words. The shipped scene breaks run 24 to 40.
    body: 'La femme is the word for woman and also the word for wife, and nothing in the sentence separates '
      + 'them. With la in front of it, a French ear reaches for wife first. Une says one of many, and that '
      + 'is the whole difference.',
    wrong: {
      fr: 'Voici la femme.',
      ipa: '/vwa.si la fam/',
      respell: sub('la femme'),
      en: 'This is the wife',
    },
    right: {
      fr: 'Voici une femme.',
      ipa: '/vwa.si yn fam/',
      respell: sub('la femme'),
      en: 'This is a woman',
    },
    coach: 'Both lines are correct French. Only one of them says what you meant, and the wrong reading makes '
      + 'enough sense that it never gets questioned.',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], audioFirst: true, recordingId: 'rec-a1-15-femme' },
  },
  {
    kind: 'bubble',
    from: 'you',
    reveal: 'tap',
    size: 'md',
    speaker: 'Second try',
    fr: 'Voici une femme. Elle travaille avec moi.',
    en: 'This is a woman. She works with me.',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65] },
  },
  {
    kind: 'bubble',
    from: 'them',
    reveal: 'auto',
    size: 'md',
    speaker: 'Salomé',
    fr: 'Ah d\'accord ! Et lui, c\'est le frère de Paul, non ?',
    en: 'Ah, right! And him, that is Paul\'s brother, isn\'t it?',
    stage: 'And there is the rest of the lesson, said by somebody else without thinking about it.',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a1-15-scene' },
  },
  {
    kind: 'resolve',
    size: 'md',
    text: 'Nothing was corrected the first time, and that is the part worth noticing. You were understood, '
      + 'just not the way you meant.',
  },
];

/* ─── Sections ─────────────────────────────────────────────────────────────*/

const SECTIONS: LessonSection[] = [
  /* ── Act 1: who is who ─────────────────────────────────────────────────── */

  {
    type: 'scene',
    id: 's01-scene',
    title: 'Married Off By One Word',
    frSub: 'Voici la femme',
    render: 'screens',
    layer: 'core',
    terms: ['doubleDuty', 'deOwner'],
    say: {
      text: 'One word meant two things and nobody said a word about it. Watch which.',
      voice: 'coach',
      timing: 'onFirstVisitOnly',
    },
    setting: {
      place: 'A friend\'s kitchen table, phones out, photos going round',
      city: 'Toulouse',
      time: 'Sunday, after lunch',
      ambience: 'room-tone-lobby',
    },
    beats: SCENE_BEATS,
    closing: {
      size: 'md',
      text: `Saying exactly who is who is the rest of this lesson, and it starts with something English has and French does not. ${REFRAME}`,
    },
  },

  {
    type: 'goals',
    id: 's02-goals',
    title: 'What You Will Be Able To Do',
    frSub: 'Ce que vous saurez faire',
    layer: 'core',
    say: 'Four things, and the first one is a rule your own language does not have.',
    goals: [
      { t: 'Say whose mother, whose brother, whose sister', s: 'One rule, and it runs the opposite way round from English. It works for every relationship in the lesson.' },
      { t: 'Name everybody in a family', s: 'Twenty-two words, and for once you will not have to guess at le or la for most of them.' },
      { t: 'Know exactly where that stops', s: 'Three or four words where the friendly rule runs out, told to you rather than found by you later.' },
      { t: 'Introduce your own family out loud', s: 'How many brothers and sisters you have, and the three words you need for my.' },
    ],
  },

  {
    type: 'teach',
    id: 's03-turn',
    title: 'French Has No Apostrophe',
    frSub: 'La mère de Paul',
    layer: 'core',
    size: 'lg',
    terms: ['deOwner'],
    sheetId: 'sheet.a1.15.who',
    say: 'This is the one rule in the lesson, and everything after it is an application of it.',
    // 44 words. `core-words` caps a core screen at 45 and this is a `teach`,
    // which is not one of the PASSAGE_SECTIONS the cap exempts. The long
    // version lives at sheet-who-why, layer 'deep', where density is fine.
    body: `English says whose with an apostrophe: Paul's mother. French has none, so it names the `
      + `relationship first and hangs the owner off the back with de. ${REFRAME} La mère de Paul. Whatever `
      + `follows de owns what precedes it.`,
  },

  {
    type: 'tapTable',
    id: 's04-pairs',
    title: 'Both Orders, Side By Side',
    frSub: 'Les deux ordres',
    layer: 'core',
    terms: ['deOwner'],
    say: `${REFRAME} Read across each row and watch the two names swap ends.`,
    // TWO columns, never more, because tapTable is not in ownsLayout() and
    // renders inside a scrolling page. Every cell is three words or fewer and
    // the teaching is in the detail modal, which is a card and can hold prose.
    //
    // THIS IS THE REFRAME'S LAYOUT AND THE TEST ASSERTS IT. The French and the
    // English have to be on ONE SCREEN, in adjacent columns, or the contrast
    // that IS the rule becomes two separate facts on two separate missions.
    cols: ['French', 'English'],
    rows: DE_PHRASES.map((id) => ({
      cells: [frOf(id), enOf(id)],
      say: frOf(id),
      detail: {
        title: frOf(id),
        body: `${frOf(id)} is ${enOf(id)}. In French the relationship comes first and the owner comes last. `
          + `In English the owner comes first and the relationship comes last. Same two people, opposite ends.`,
        say: frOf(id),
      },
    })),
  },

  {
    type: 'cardDeck',
    id: 's05-swap',
    title: 'Same Two People, Both Ways',
    frSub: 'Qui est de qui',
    render: 'deck',
    layer: 'core',
    terms: ['deOwner'],
    say: 'Two sentences about the same two people. One word moves, and it is not a small one.',
    hint: 'Swipe through both, then read them again in order.',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a1-15-de' },
    cards: [
      {
        label: 'One way round',
        head: 'De points at Paul',
        fr: frOf('fr.a1.famille.241'),
        sub: enOf('fr.a1.famille.241'),
        body: 'Paul is the one who has a sister, and Marie is the sister. The name sitting immediately after de is the one who owns.',
      },
      {
        label: 'The other way round',
        head: 'De points at Marie',
        fr: frOf('fr.a1.famille.242'),
        sub: enOf('fr.a1.famille.242'),
        body: 'The same two people, and the sentence now says something different. Nothing moved except which name landed after de and which relationship word went in front of it.',
      },
      {
        label: 'What actually moved',
        head: 'Two words, and they decide everything',
        fr: 'de Paul · de Marie',
        sub: 'whose · whose',
        body: 'Both sentences use the same four ideas. Which of the two people ends up after de is what makes one of them true and the other one a different claim entirely.',
      },
      {
        label: 'The test you can run while speaking',
        head: REFRAME,
        fr: frOf('fr.a1.famille.235'),
        sub: enOf('fr.a1.famille.235'),
        body: 'Whatever sits immediately after de owns whatever sits in front of it. Say the relationship, then de, then whose it is, and you never have to think about it again.',
      },
    ],
  },

  /* ── Act 2: the people. THREE missions, and that is correct. ───────────── */

  {
    type: 'cardDeck',
    id: 's06-six',
    title: 'Six Pairs, Twelve Words',
    frSub: 'Six paires',
    render: 'deck',
    layer: 'core',
    size: 'xl',
    terms: ['matchesThePerson'],
    // xl is a TWELVE-WORD CAP on EVERY string in this section, enforced by
    // density.logic.ts. Every card below is one French word, a short gloss and
    // a respelling, and the `body` line is deliberately absent: at xl there is
    // no room for prose and a sentence here would fail the validator.
    say: 'Twelve words in six pairs. The pair is the point.',
    hint: 'Swipe through all twelve.',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a1-15-pairs' },
    cards: THE_TWELVE.map((fr) => ({
      head: glossOf(fr),
      fr,
      sub: sub(fr),
    })),
  },

  {
    type: 'cardDeck',
    id: 's07-house',
    title: 'The Rest Of The Household',
    frSub: 'Le reste de la famille',
    render: 'deck',
    layer: 'core',
    terms: ['fossilised'],
    say: 'The generations either side, the married pair, and the four that arrive with a second marriage.',
    hint: 'Swipe through. The grandparents are the ones worth a second look.',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a1-15-household' },
    cards: [
      ...HOUSEHOLD.map((id) => {
        const fr = frOf(id);
        return { head: glossOf(fr), fr, sub: sub(fr) };
      }),
      ...EXTENDED.map((fr) => ({ head: glossOf(fr), fr, sub: sub(fr) })),
      {
        label: 'Learn these two whole',
        head: 'One word, not two',
        fr: 'la grand-mère · le grand-père',
        sub: 'the grandmother · the grandfather',
        body: 'The first half of each never changes shape, whoever you are talking about. The two halves were '
          + 'welded together centuries ago and have been carried along as single items ever since, so there '
          + 'is nothing to work out here and nothing that applies anywhere else.',
      },
      {
        label: 'Saying whose name is what',
        head: 'A fixed phrase, for now',
        fr: frOf('fr.a1.famille.005'),
        sub: enOf('fr.a1.famille.005'),
        body: 'Take « s\'appelle » whole, the way you took « je m\'appelle » in the very first lesson. There '
          + 'is a system behind that little se and it is a long way off; today it is just how you say what '
          + 'somebody is called.',
      },
    ],
  },

  {
    type: 'tapTable',
    id: 's08-tree',
    title: 'Generation By Generation',
    frSub: 'De haut en bas',
    layer: 'core',
    terms: ['matchesThePerson'],
    say: 'Generations down the side. The two columns are the two articles, which is the next act in one picture.',
    // The closest thing to a family tree this app can draw. There is no tree,
    // graph or diagram section type and imageRef is validated by nothing, so
    // this lesson commissions no image at all. Two columns, and they happen to
    // be `le` and `la`, which does act 3's teaching for free.
    cols: ['le', 'la'],
    rows: GENERATIONS.map((g) => ({
      cells: [g.m, g.f],
      say: `${g.m}, ${g.f}`,
      detail: {
        title: g.label,
        body: g.both
          ? `${g.m} and ${g.f}. Together they are ${g.both}, which is masculine plural whatever the mix.`
          : `${g.m} and ${g.f}. The word takes le for a man and la for a woman, and you never have to guess.`,
        say: g.both ? g.both : `${g.m}, ${g.f}`,
      },
    })),
  },

  /* ── Act 3: gender that tells the truth ────────────────────────────────── */

  {
    type: 'teach',
    id: 's09-truth',
    title: 'For Once, The Article Fits',
    frSub: 'Le pour lui, la pour elle',
    layer: 'core',
    size: 'lg',
    terms: ['matchesThePerson'],
    say: 'After the gender lesson, this is a genuine relief. It is also worth knowing where it runs out.',
    // 43 words. The full version is the `matchesThePerson` term, which the
    // chip on this section opens, and the term is where the reasoning belongs.
    body: 'The gender lesson said you would mostly have to memorise the article. Family is where you do '
      + 'not. Le for a man, la for a woman, across all twelve paired words. The next screen is where that '
      + 'stops, and it does stop.',
  },

  {
    type: 'commonErrors',
    id: 's10-stops',
    title: 'Where That Rule Stops',
    frSub: 'Les exceptions',
    layer: 'core',
    // swipe + lg, one error per screen. Without `swipe` MissionSection takes a
    // fallback that returned undefined and drew a BLANK mission.
    swipe: true,
    size: 'lg',
    terms: ['matchesThePerson'],
    say: 'Five places the friendly rule runs out. Better here than in a fortnight.',
    // Every `wrong` below is what a learner who has just been given the
    // matching rule would reasonably write, which is the point: these are not
    // random errors, they are the rule being applied one step too far.
    errors: [
      { wrong: 'la bébé', right: 'le bébé', why: WHERE_IT_STOPS[0].what },
      { wrong: "l'enfante", right: "l'enfant", why: WHERE_IT_STOPS[1].what },
      { wrong: 'les parentes', right: 'les parents', why: WHERE_IT_STOPS[2].what },
      { wrong: 'les enfantes', right: 'les enfants', why: WHERE_IT_STOPS[3].what },
      { wrong: 'les grand-parents', right: 'les grands-parents', why: WHERE_IT_STOPS[4].what },
    ],
  },

  {
    type: 'groupDrill',
    id: 's11-sort',
    title: 'Le Or La, By The Person',
    frSub: 'Le ou la ?',
    layer: 'core',
    terms: ['matchesThePerson'],
    // NOT xl. A groupDrill owns the layout at xl and does not at any other
    // size, and that has shipped as a bug twice. Each control page carries
    // `items: []` explicitly and no `size`.
    say: 'Two groups, then a check on each. Look at the person, not at the word.',
    groups: [
      {
        label: 'The ones that follow the person',
        items: THE_TWELVE.map((fr) => ({ fr, en: glossOf(fr), respell: sub(fr), ipa: ipaOf(fr) })),
        check: {
          q: 'Your father\'s sister. Which word, and which article?',
          opts: ['la tante', 'le tante', "l'oncle", 'la cousine'],
          correct: 0,
          why: 'La tante. She is a woman, so the word takes la, and you did not have to remember anything about the word itself.',
        },
      },
      {
        // A control page carries `items: []` EXPLICITLY and no size. An xl
        // groupDrill must never stack words and a check in one group, and this
        // drill is not xl in any case.
        label: 'The ones that do not',
        items: [],
        check: {
          q: 'A baby girl. What does French call her?',
          opts: ['le bébé', 'la bébé', 'la bébée', "l'enfante"],
          correct: 0,
          why: 'Le bébé, for a girl as much as for a boy. This is one of the handful of family words where the article stops following the person and just sits there.',
        },
      },
    ],
  },

  /* ── Act 4: saying it out loud ─────────────────────────────────────────── */

  {
    type: 'cardDeck',
    id: 's12-fils',
    title: 'Fils And Fil',
    frSub: 'Le fils, le fil',
    render: 'deck',
    layer: 'core',
    say: 'Two words, one letter apart, and the spelling predicts the wrong sound in one of them.',
    hint: 'Listen to each before you turn it over.',
    // cardDeck IS in ownsLayout() and sizes itself, which is why this pair gets
    // its own screen rather than a row in a table. Both rows already exist, in
    // DIFFERENT themes, and fr.sons.muettes.058's own note already points at
    // `fils`. Nobody has ever put the two on one surface. This does.
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a1-15-fils' },
    cards: [
      {
        label: 'The son',
        head: 'Silent l, sounded s',
        fr: FILS_PAIR.word,
        sub: `${glossOf('le fils')} · ${sub('le fils')}`,
        body: 'The l says nothing and the s says everything, which is the reverse of almost every rule the '
          + 'silent letters lesson gave you. A final s is usually the one letter you can count on to stay '
          + 'quiet. Not here.',
      },
      {
        label: 'The thread',
        head: 'Everything behaves',
        fr: FILS_PAIR.thread,
        sub: `${glossOf('fil')} · ${sub('fil')}`,
        body: 'The l is pronounced and there is no s to worry about. This is the ordinary word doing the '
          + 'ordinary thing, and it is worth meeting so you can hear what fils is NOT.',
      },
      {
        label: 'Together',
        head: 'More letters, fewer sounds',
        fr: 'le fils · fil',
        sub: `${sub('le fils')} · ${sub('fil')}`,
        body: 'Say them one after the other. The longer word is the one that drops a sound at the end, and '
          + 'no amount of looking at the spelling would have told you which way round that goes.',
      },
      {
        label: 'In a phrase',
        head: 'The same sound inside a sentence',
        fr: frOf('fr.a1.famille.240'),
        sub: enOf('fr.a1.famille.240'),
        body: `Said out loud this is ${sub('le fils de Marie')}. The trap does not go away once the word has `
          + 'company, and this is the shape you will actually need it in.',
      },
    ],
  },

  {
    type: 'cardDeck',
    id: 's13-double',
    title: 'Two Words, Two Meanings',
    frSub: 'La femme, la fille',
    render: 'deck',
    layer: 'core',
    terms: ['doubleDuty'],
    say: 'This is the one from the opening scene, and its partner.',
    hint: 'Both of these cost you nothing in grammar and something in meaning.',
    // NO quiz question tests this, and that is a limit rather than an omission.
    // Ambiguity needs two contexts and every quiz format gives one stem, so the
    // teaching lives here and in a `why` instead. The test asserts that.
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a1-15-femme' },
    cards: [
      ...DOUBLE_DUTY.map((d) => ({
        label: 'Two meanings, one word',
        head: `${d.one}, and also ${d.two}`,
        fr: d.fr,
        sub: `${d.one} · ${d.two}`,
        body: d.decides,
      })),
      {
        label: 'The sound will not help',
        head: 'Identical either way',
        fr: 'la femme · une femme',
        sub: `${sub('la femme')} · ${sub('la femme')}`,
        body: 'The same two syllables both times, so there is nothing in the audio to separate them. La '
          + 'reaches for wife and une reaches for woman, and the little word in front is the entire signal.',
      },
      {
        label: 'How to be certain',
        head: 'De settles it',
        fr: frOf('fr.a1.famille.252'),
        sub: enOf('fr.a1.famille.252'),
        body: 'De and a name behind it leave only one reading available: this is his daughter, and nobody '
          + 'can hear it as a girl he happens to know. That is the second thing the rule buys you.',
      },
    ],
  },

  {
    type: 'tapTable',
    id: 's14-nasals',
    title: 'The N You Do Not Say',
    frSub: 'Les voyelles nasales',
    layer: 'core',
    say: 'Six family words end in a nasal vowel. The n is written and there is no n sound in any of them.',
    // Two columns. Every cell is three words or fewer. The teaching is in the
    // detail modal.
    cols: ['word', 'sounds like'],
    rows: ['les parents', 'la grand-mère', 'le grand-père', 'les grands-parents', 'le cousin', "l'enfant"].map((fr) => ({
      cells: [fr, sub(fr)],
      say: fr,
      detail: {
        // Under the 45-word core cap, counted with the respellings in place.
        title: fr,
        body: `${fr} is ${sub(fr)}. The raised n marks a nasal vowel: the air goes through your nose and no `
          + `n is said. Compare la cousine, ${sub('la cousine')}, where a vowel follows the n so it sounds.`,
        say: fr,
      },
    })),
  },

  {
    type: 'listening',
    id: 's15-listen',
    title: 'Hear The Difference',
    frSub: 'Écoutez bien',
    layer: 'core',
    say: 'Four lines. Two of them are the pair from a moment ago.',
    lines: [
      { fr: frOf('fr.a1.famille.015'), en: glossOf('le fils') },
      { fr: FILS_PAIR.thread, en: glossOf('fil') },
      { fr: frOf('fr.a1.famille.018'), en: 'the wife, or a woman' },
      { fr: frOf('fr.a1.famille.026'), en: glossOf('le cousin') },
    ],
    questions: [
      {
        q: 'Which one has a silent l?',
        opts: ['le fils', 'fil', 'la femme', 'le cousin'],
        correct: 0,
        why: 'Le fils. The l says nothing and the s says everything, which is the opposite of what the spelling suggests.',
      },
      {
        q: 'Which one has no n sound at all, despite the n?',
        opts: ['le cousin', 'fil', 'le fils', 'la femme'],
        correct: 0,
        why: 'Le cousin. The n marks a nasal vowel rather than a consonant. Its partner la cousine does have a real n, because a vowel follows it.',
      },
      {
        q: 'La femme sounds closest to which English word?',
        opts: ['calm', 'them', 'fame', 'foam'],
        correct: 0,
        why: 'Calm, for the vowel. La femme is said FAM. It is the only common French word where the letter e says that sound.',
      },
    ],
  },

  /* ── Act 5: introduce your own ─────────────────────────────────────────── */

  {
    type: 'teach',
    id: 's16-count',
    title: 'How Many Of Each',
    frSub: 'J\'ai un frère',
    layer: 'core',
    size: 'lg',
    say: 'Nothing new here. This is the have verb and the numbers, pointed at people.',
    // 44 words. Three sentences, one per card-worth of idea, and the detail
    // sits in the drill and the quiz rather than on this screen.
    body: 'Nothing new here: the have verb and the numbers, put together. J\'ai un frère et deux sœurs, with '
      + 'the s landing on sœurs because two is more than one. If the answer is none, un becomes de: je n\'ai '
      + 'pas de frère.',
  },

  {
    type: 'cardDeck',
    id: 's17-mine',
    title: 'Mon, Ma, Mes',
    frSub: 'Trois mots',
    render: 'deck',
    layer: 'core',
    terms: ['frozenPossessive'],
    sheetId: 'sheet.a1.15.who',
    say: 'Three words, taken whole. The system they belong to is the next lesson.',
    hint: 'Learn these three as words rather than as a rule.',
    // EXACTLY THREE. No ton, ta, tes, son, sa, ses, notre, votre or leur reaches
    // any production surface in this lesson, and no card states the rule about
    // mon in front of a feminine word beginning with a vowel. Both boundaries
    // are asserted by the batch, the merge and the test, because a1.17's canDo
    // says "and their kin" and that is its whole lesson.
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a1-15-mine' },
    cards: [
      ...MINE_IDS.map((id) => {
        const fr = frOf(id);
        return { head: enOf(id), fr, sub: sub(fr) };
      }),
      {
        label: 'Choosing between them',
        head: 'Follow the article you already know',
        fr: 'mon · ma · mes',
        sub: 'le · la · plural',
        body: 'Mon goes with the words that take le. Ma goes with the words that take la. Mes goes with '
          + 'anything plural, and there the kind of word stops mattering entirely.',
      },
      {
        label: 'What is missing, and where it is',
        head: 'The rest arrives next lesson',
        fr: frOf('fr.a1.famille.235'),
        sub: enOf('fr.a1.famille.235'),
        body: 'Yours, his, hers, ours and theirs all arrive together next lesson, along with one wrinkle in '
          + 'the ma column that nobody can guess. Until then, if these three will not reach, use de and a '
          + 'name. That always works.',
      },
      {
        label: 'Two of them in one sentence',
        head: 'Mon and ma, side by side',
        fr: frOf('fr.a1.famille.083'),
        sub: enOf('fr.a1.famille.083'),
        body: 'Frère takes le so it takes mon, and sœur takes la so it takes ma. Both choices are made from '
          + 'the article and neither is made from the person.',
      },
      {
        label: 'One you already own',
        head: 'Age runs on the have verb',
        fr: frOf('fr.a1.famille.010'),
        sub: enOf('fr.a1.famille.010'),
        body: 'French counts age with the have verb rather than the be verb, which you met two lessons ago. '
          + 'Nothing here is new; it is the same verb pointed at a person in your family.',
      },
    ],
  },

  {
    type: 'reading',
    id: 's18-read',
    title: 'A Family, Written Down',
    frSub: 'Une famille',
    layer: 'core',
    terms: ['deOwner', 'matchesThePerson'],
    // questionsInModal: true WITH questions is the ONLY path that reaches
    // PassagePage, and so the only path that draws the glossary. A `reading`
    // without both authors a glossary that nothing renders.
    questionsInModal: true,
    say: 'Six sentences. Every relationship in them is built the French way round.',
    // ONE BLOCK, no line breaks. PassagePage splits on /(?<=[.!?»])\s+/ and an
    // authored newline is silently discarded.
    //
    // Instruction and context are English; everything French sits inside « ».
    // Paul's rule, 2026-08-04.
    // Every glossary key is a FOUR-WORD relationship phrase that appears in the
    // passage verbatim. MAX_GLOSS_WORDS is four, so a five-word key can never
    // match, and longest-match-first means a short key nested inside a longer
    // one underlines nothing: `la tante` alone would be shadowed by
    // `la tante de Paul`, so the long form is the one authored.
    //
    // Case is NOT a constraint here, which was checked rather than assumed:
    // foldWord() lowercases before comparing, so a sentence-initial « La mère
    // de Paul » matches the key « la mère de Paul » perfectly well. The test
    // runs the real segmentSentence over this passage and compares matched
    // KEYS rather than matched text.
    text: 'Read this, then answer the three questions. « Voici la famille de Paul. Marie est la mère de '
      + 'Paul. Marie est la sœur de Sophie, et Sophie est la tante de Paul. Marie habite avec le '
      + 'grand-père de Paul. Paul a un frère et deux sœurs. Le fils de Sophie est le cousin de Paul. »',
    glossary: [
      { word: 'la famille de Paul', en: "Paul's family", ipa: '/la fa.mij də pɔl/', note: 'The relationship first, then de, then the owner.' },
      { word: 'la mère de Paul', en: "Paul's mother", ipa: ipaOf('la mère de Paul'), note: 'Same shape again. De points at Paul.' },
      { word: 'la tante de Paul', en: "Paul's aunt", ipa: '/la tɑ̃t də pɔl/', note: `Tante is said ${sub('la tante')}. The n marks a nasal vowel and is not a sound of its own.` },
      { word: 'le grand-père de Paul', en: "Paul's grandfather", ipa: '/lə ɡʁɑ̃.pɛʁ də pɔl/', note: 'Grand-père is one frozen word, and the first half never changes.' },
      { word: 'le cousin de Paul', en: "Paul's cousin", ipa: '/lə ku.zɛ̃ də pɔl/', note: `Cousin is said ${sub('le cousin')}. His female counterpart is la cousine, with a real n.` },
    ],
    questions: [
      { q: 'Who is Marie?', a: "Paul's mother, and Sophie's sister." },
      { q: 'Sophie is whose aunt?', a: "Paul's." },
      { q: 'How many brothers and sisters does Paul have?', a: 'One brother and two sisters.' },
    ],
  },

  {
    type: 'scenario',
    id: 's19-scenario',
    title: 'Who Is Who At The Table',
    frSub: 'Qui est qui ?',
    layer: 'core',
    say: 'You are the one being asked this time.',
    setting: 'A lunch table, somebody working out how everybody is related',
    // `ai` is the line the learner hears, `user` is the model answer, and
    // `alts` are the other answers that would have worked. A conversation is
    // not a cloze test and showing one right answer teaches that dialogue has
    // one right answer.
    turns: [
      {
        ai: 'Tu as des frères et sœurs ?',
        en: 'Do you have any brothers and sisters?',
        user: "J'ai un frère et deux sœurs.",
        userEn: 'I have one brother and two sisters.',
        alts: [
          { fr: "J'ai deux frères et une sœur.", en: 'I have two brothers and one sister.' },
          { fr: "Je n'ai pas de frère.", en: 'I do not have a brother.' },
        ],
      },
      {
        ai: "Et elle, sur la photo, c'est qui ?",
        en: 'And her, in the photo, who is she?',
        user: 'Voici la mère de Paul.',
        userEn: "This is Paul's mother.",
        alts: [
          { fr: "C'est la mère de Paul.", en: "That is Paul's mother." },
          { fr: 'Voici la sœur de Marie.', en: "This is Marie's sister." },
        ],
      },
      {
        // No `son`, `sa` or `ses` anywhere on a learner surface in this lesson,
        // including the lines the learner only hears. a1.17 introduces them.
        ai: 'Marie a des enfants ?',
        en: 'Does Marie have children?',
        user: 'Oui, Paul est le fils de Marie.',
        userEn: "Yes, Paul is Marie's son.",
        // Every turn carries at least TWO alternatives. scenario.logic.test.ts
        // enforces it over the whole seed: one accepted answer per turn is the
        // cloze-test failure this content exists to fix.
        alts: [
          { fr: 'Oui, il est le fils de Marie.', en: "Yes, he is Marie's son." },
          { fr: 'Oui, elle a un fils.', en: 'Yes, she has a son.' },
        ],
      },
      {
        ai: "Et lui, à côté, c'est qui ?",
        en: 'And him, next to her, who is that?',
        user: "C'est le frère de Paul.",
        userEn: "That is Paul's brother.",
        alts: [
          { fr: 'Voici le frère de Paul.', en: "This is Paul's brother." },
          { fr: "C'est le père de Paul.", en: "That is Paul's father." },
        ],
      },
      {
        ai: 'Et le monsieur derrière eux ?',
        en: 'And the gentleman behind them?',
        user: 'Voici le grand-père de Marie.',
        userEn: "This is Marie's grandfather.",
        alts: [
          { fr: "C'est le grand-père de Marie.", en: "That is Marie's grandfather." },
          { fr: 'Voici le père de Marie.', en: "This is Marie's father." },
        ],
      },
    ],
  },

  /* ── Act 6: prove it ───────────────────────────────────────────────────── */

  {
    type: 'flashcards',
    id: 's20-flash',
    title: 'Everything, Once More',
    frSub: 'Révision',
    layer: 'core',
    say: 'English on the front. Say the French out loud before you turn it over.',
    cards: [
      { front: 'How do you say whose something is?', back: 'The relationship, then de, then the owner. La mère de Paul.', say: frOf('fr.a1.famille.235') },
      { front: "Paul's brother", back: frOf('fr.a1.famille.237'), say: frOf('fr.a1.famille.237') },
      { front: "Marie's sister", back: frOf('fr.a1.famille.238'), say: frOf('fr.a1.famille.238') },
      { front: 'Which twelve words never make you guess at le or la?', back: 'The six pairs. Father and mother, brother and sister, son and daughter, uncle and aunt, and both kinds of cousin, nephew and niece.', say: 'le père, la mère' },
      { front: 'A baby girl', back: 'le bébé, and it stays masculine.', say: frOf('fr.a1.famille.019') },
      { front: 'Your mother and father together', back: frOf('fr.a1.famille.014'), say: frOf('fr.a1.famille.014') },
      { front: 'How is le fils pronounced?', back: `${sub('le fils')}. Silent l, sounded s.`, say: frOf('fr.a1.famille.015') },
      { front: 'How is la femme pronounced?', back: `${sub('la femme')}. The only common word where e says that.`, say: frOf('fr.a1.famille.018') },
      { front: 'The three words for my', back: 'mon with le words, ma with la words, mes with plurals.', say: 'mon père, ma mère, mes parents' },
      { front: 'I have one brother and two sisters', back: frOf('fr.a1.famille.245'), say: frOf('fr.a1.famille.245') },
    ],
  },

  {
    type: 'dictation',
    id: 's21-dictation',
    title: 'Write What You Hear',
    frSub: 'Dictée',
    layer: 'core',
    say: 'Five lines. The last one hands you the words and asks you to put them in order, which is the whole rule.',
    itemIds: DICTATION_IDS,
  },

  {
    type: 'practice',
    id: 's22-speak',
    title: 'Say It Out Loud',
    frSub: 'À voix haute',
    layer: 'core',
    say: 'The twelve, the six relationships and the three words for my.',
    skill: 'speak',
    itemIds: SPEAK_IDS,
  },

  {
    type: 'reviewDeck',
    id: 's23-review',
    title: 'One Last Pass',
    frSub: 'Dernière révision',
    layer: 'core',
    say: 'Rate each one. Anything you mark again comes back sooner.',
    cards: [
      { front: frOf('fr.a1.famille.235'), back: enOf('fr.a1.famille.235'), say: frOf('fr.a1.famille.235') },
      { front: frOf('fr.a1.famille.241'), back: enOf('fr.a1.famille.241'), say: frOf('fr.a1.famille.241') },
      { front: frOf('fr.a1.famille.242'), back: enOf('fr.a1.famille.242'), say: frOf('fr.a1.famille.242') },
      { front: 'le fils', back: `${glossOf('le fils')}, said ${sub('le fils')}`, say: 'le fils' },
      { front: 'la femme', back: `${glossOf('la femme')} or a woman, said ${sub('la femme')}`, say: 'la femme' },
      { front: 'la grand-mère', back: `${glossOf('la grand-mère')}, said ${sub('la grand-mère')}, one frozen word`, say: 'la grand-mère' },
      { front: 'le bébé', back: `${glossOf('le bébé')}, masculine whoever the baby is`, say: 'le bébé' },
      { front: frOf('fr.a1.famille.245'), back: enOf('fr.a1.famille.245'), say: frOf('fr.a1.famille.245') },
    ],
  },

  {
    type: 'progressCheck',
    id: 's24-progress',
    title: 'Where You Stand',
    frSub: 'Votre progression',
    // The prose carries no counts. Every figure is in `stats`, derived from the
    // journey itself, and saying a number twice on one card is two chances to
    // be wrong and one card that reads as padded.
    say: 'One screen before the exam, so you know what you are walking into.',
    body: 'You have watched somebody be congratulated on a marriage that has not happened, learned a rule '
      + 'for saying whose something is that runs the opposite way round from the one your own language '
      + 'gave you, and picked up twenty-two words for the people in a family. You found out that for '
      + 'twelve of them the article follows the actual person, which is the one place in French that is '
      + 'true, and you were told exactly where that stops rather than being left to discover it. You know '
      + 'that one word here has a silent l and a sounded s, and that two more mean two things each. What '
      + 'is left tells you whether it stuck. Each round is tied to one of the mistakes this lesson exists '
      + 'to stop, and failing a round gets you its drill before the next one starts. The drill is the '
      + 'teaching, not the punishment.',
    stats: [],
  },

  /* ── The exam ──────────────────────────────────────────────────────────
   *
   * ONE quiz section carrying `rounds`. lessonPager.logic.ts appends exactly
   * one quiz page via sections.find(s => s.type === 'quiz'), so a second quiz
   * section is content nothing draws. a1.01 shipped twelve questions that way.
   *
   * ── Authored FOR the runtime shuffle, which already ships ────────────────
   *
   * QuizDeckView shuffles the options of every closed question, per question,
   * per attempt, and re-shuffles on retry. The authored `correct` index never
   * moves; only the display order is permuted. Three consequences, all honoured:
   *
   *   NO OPTION REFERS TO A POSITION. "the first one", "both of the above" and
   *   "none of these" all break, because the positions the learner sees are not
   *   the positions written here. The test greps for all three.
   *
   *   EVERY OPTION IN A QUESTION IS DISTINCT. quiz-duplicate-option fires on a
   *   repeat, and a repeated option makes a shuffled question genuinely
   *   ambiguous rather than merely redundant. This lesson is exposed here
   *   because the distractors come from a small closed set and `le frère` is
   *   easy to write twice across four options.
   *
   *   THE AUTHORED `correct` INDEX STILL VARIES. quiz-spread caps any single
   *   slot at 40% of closed questions REGARDLESS of the runtime shuffle, and a
   *   two-way le/la answer makes that very easy to get wrong.
   *
   * ── Format choices, each of which is a measured constraint ───────────────
   *
   *   EVERY `de` QUESTION CARRIES THE ENGLISH IN THE STEM. "la mère de Paul or
   *   Paul de la mère?" gives the answer away by absurdity; "You want to say:
   *   Marie's brother" has exactly one answer and tests the turnaround.
   *
   *   `typeIn` IS STRONG ON THE de RULE and weak on gender. fold() strips
   *   accents, case, punctuation and all whitespace but KEEPS a final -e and
   *   -s, so a short French phrase is genuinely testable. `le` against `la` is
   *   two characters and a learner guesses right half the time, so gender is
   *   never a typeIn here.
   *
   *   `mcq` IS THE RIGHT FORMAT FOR GENDER, and it is the only format that can
   *   test an article reliably, because its options are picked rather than
   *   typed and fold() never touches them.
   *
   *   `listenChoose` HAS ONE JOB: `fils` and `femme`. /fis/ against an expected
   *   /fil/ and /fam/ against an expected /fɛm/ are real ear questions. There
   *   is NO ear question on the vocabulary itself: `le père` and `la mère`
   *   sound nothing alike and testing them tests nothing.
   *
   *   NO FORMAT TESTS THAT `la femme` IS AMBIGUOUS. Ambiguity needs two
   *   contexts and every format gives one stem. It is s13-double and a `why`.
   */
  {
    type: 'quiz',
    id: 's25-quiz',
    title: 'The Exam',
    frSub: "L'examen",
    layer: 'core',
    passMark: 70,
    roundFailThreshold: 60,
    say: 'Six rounds. Miss too many in a round and you get that round\'s drill before the next one starts.',
    rounds: [
      {
        id: 'r1-turn-it-around',
        label: 'Whose is whose',
        // The FIRST target is the one whose drill fires: drillForRound walks a
        // round's targets and stops at the first that resolves. Every drill
        // this lesson authors is the first resolving target of exactly ONE
        // round, and the batch, the merge and the test all assert it.
        targets: ['err-english-order', 'err-wrong-relation'],
        say: 'The rule, four ways.',
        questions: [
          {
            q: "You want to say: Marie's brother. Which one is it?",
            format: 'mcq',
            opts: ['le frère de Marie', 'Marie de le frère', 'de Marie le frère', 'Marie le frère'],
            correct: 0,
            why: 'Le frère de Marie. The relationship comes first and the owner comes last, which is the opposite of the order English gave you. Nothing else about the phrase changes.',
            ref: 's03-turn',
          },
          {
            q: "Write the French for: Paul's mother.",
            format: 'typeIn',
            accept: ['la mère de Paul', 'la mere de paul'],
            answer: 'la mère de Paul',
            why: 'La mère de Paul. Say the relationship, then de, then whose it is. fold() ignores the accent, so mere is accepted, but the word order is the thing being tested and it is not negotiable.',
            ref: 's04-pairs',
          },
          {
            q: 'In « la sœur de Paul », who has a sister?',
            format: 'mcq',
            // No option refers to a POSITION. QuizDeckView shuffles these per
            // attempt, so "the first one" would name whatever landed there.
            opts: ['The sister', 'Nobody, it is a name', 'Paul', 'The sentence does not say'],
            correct: 2,
            why: 'Paul. Whatever sits immediately after de is the owner, every time. That single test settles every phrase of this shape.',
            ref: 's05-swap',
          },
          {
            // The English is in the stem. Without it, "Paul de le frère" gives
            // the answer away by absurdity and tests nothing.
            q: 'You want to say: Paul is Marie\'s brother. Fix this. « Paul de le frère est Marie. »',
            format: 'errorSpot',
            accept: ['Paul est le frère de Marie.', 'paul est le frere de marie', 'Paul est le frère de Marie'],
            answer: 'Paul est le frère de Marie.',
            why: 'Paul est le frère de Marie. The relationship has to come before de and the owner after it. Written the other way round it is not word order a French speaker can repair on the fly.',
            ref: 's05-swap',
          },
        ],
      },
      {
        id: 'r2-the-people',
        label: 'The people',
        targets: ['err-wrong-relation', 'err-english-order'],
        say: 'Twenty-two words. These are the ones worth checking.',
        questions: [
          {
            q: "Your mother's sister is your...",
            format: 'mcq',
            opts: ['la nièce', 'la tante', 'la cousine', 'la belle-mère'],
            correct: 1,
            why: 'La tante. La nièce is the other direction (your sibling\'s daughter), la cousine is her daughter, and la belle-mère is a mother-in-law or a stepmother.',
            ref: 's08-tree',
          },
          {
            q: 'Write the French for: the grandparents.',
            format: 'typeIn',
            accept: ['les grands-parents', 'les grands parents', 'grands-parents'],
            answer: 'les grands-parents',
            why: 'Les grands-parents. The s lands on grands as well as on parents, which is the one thing about this word worth remembering.',
            ref: 's07-house',
          },
          {
            // typeIn rather than a fourth mcq. fold() keeps the letters that
            // matter in a short French phrase, and the mcq ceiling is half.
            q: "Write the French for: the nephew.",
            format: 'typeIn',
            accept: ['le neveu', 'neveu'],
            answer: 'le neveu',
            why: 'Le neveu, which is your brother\'s or sister\'s son. Le petit-fils is your own son\'s son, a generation further down and a different word entirely.',
            ref: 's08-tree',
          },
          {
            q: 'Which of these means the half sister?',
            format: 'mcq',
            opts: ['la belle-sœur', 'la petite-fille', 'la cousine', 'la demi-sœur'],
            correct: 3,
            why: 'La demi-sœur. Demi is the half; belle marks the ones that arrive by marriage, which is why la belle-sœur is a sister-in-law.',
            ref: 's07-house',
          },
        ],
      },
      {
        id: 'r3-le-or-la',
        label: 'Le or la',
        targets: ['err-guesses-gender', 'err-wrong-relation'],
        say: 'The article, and the places it stops helping.',
        questions: [
          {
            q: 'Which article goes with the word for aunt?',
            format: 'mcq',
            // mcq is the only format that can test an article. fold() strips
            // case and punctuation and le against la is two characters, so a
            // typeIn here would be a coin toss.
            opts: ['le', "l'", 'la', 'les'],
            correct: 2,
            why: 'La tante. She is a woman, so the word takes la, and that is true of all twelve of the paired words without a single one to memorise.',
            ref: 's09-truth',
          },
          {
            q: 'A baby girl. What does French call her?',
            format: 'mcq',
            opts: ['la bébé', 'le bébé', 'la bébée', "l'enfante"],
            correct: 1,
            why: 'Le bébé, for a girl exactly as for a boy. This is one of the handful of words where the article stops following the person and simply sits there.',
            ref: 's10-stops',
          },
          {
            q: 'A mother and a father together. Which one?',
            format: 'mcq',
            opts: ['les parentes', 'la parents', 'le parents', 'les parents'],
            correct: 3,
            why: 'Les parents, masculine plural over a mixed group. That is the ordinary French rule showing through, and you met it on a card in the indefinite articles lesson.',
            ref: 's10-stops',
          },
          {
            q: 'Write the French for: the children.',
            format: 'typeIn',
            accept: ['les enfants', 'enfants'],
            answer: 'les enfants',
            why: 'Les enfants. Masculine plural whatever the mix of boys and girls, for the same reason as les parents.',
            ref: 's10-stops',
          },
        ],
      },
      {
        id: 'r4-out-loud',
        label: 'What it sounds like',
        targets: ['err-says-the-l', 'err-guesses-gender'],
        say: 'Four you have to hear rather than read.',
        questions: [
          {
            q: 'Listen. Which word is it?',
            format: 'listenChoose',
            audio: { mode: 'tts', lang: 'fr-FR', clip: 'le fils' },
            opts: ['le fils', 'fil', 'la fille', 'le film'],
            correct: 0,
            why: `Le fils, said ${sub('le fils')}. The l is silent and the s is sounded, so it is the one word here whose spelling points at the wrong sound.`,
            ref: 's12-fils',
          },
          {
            q: 'Listen. Which word is it?',
            format: 'listenChoose',
            audio: { mode: 'tts', lang: 'fr-FR', clip: 'la femme' },
            opts: ['la ferme', 'la flamme', 'la fumée', 'la femme'],
            correct: 3,
            why: `La femme, said ${sub('la femme')}. It is the only common French word where the letter e says that sound, which is why it never comes out right first time.`,
            ref: 's13-double',
          },
          {
            q: 'Which of these has NO n sound in it at all?',
            format: 'mcq',
            opts: ['la cousine', 'le cousin', 'la nièce', 'le neveu'],
            correct: 1,
            why: `Le cousin, ${sub('le cousin')}. The n marks a nasal vowel rather than a consonant. La cousine has a real n, because a vowel follows it, and that is the whole difference between the pair.`,
            ref: 's14-nasals',
          },
          {
            q: 'Tap the letter in « fils » that you do not say.',
            format: 'tapSilent',
            // tapSilent carries `word` plus the letters to tap in `correct`,
            // which is a STRING here rather than an index. It is not a closed
            // question, so it does not join the quiz-spread tally.
            word: 'fils',
            correct: 'l',
            why: 'The l. In fils it is silent and the final s is pronounced, which is the reverse of the pattern the silent letters lesson gave you.',
            ref: 's12-fils',
          },
        ],
      },
      {
        id: 'r5-two-meanings',
        label: 'Words with two jobs',
        targets: ['err-reads-wife', 'err-says-the-l'],
        say: 'Two words, four meanings, and no sound to separate them.',
        questions: [
          {
            q: 'Somebody points at a photo and says « Voici la femme. » What have they most likely said?',
            format: 'mcq',
            opts: ['This is a woman', 'This is the girl', 'This is the wife', 'This is the family'],
            correct: 2,
            why: 'This is the wife. La femme is both woman and wife, and with la in front of it a French ear reaches for wife. Nothing in the sentence separates them and nobody will ask you which you meant.',
            ref: 's01-scene',
          },
          {
            q: 'You mean a woman rather than a wife. Which word do you change?',
            format: 'mcq',
            opts: ['femme, to fille', 'la, to une', 'femme, to dame', 'nothing, it is already clear'],
            correct: 1,
            why: 'Change la to une. Une femme is a woman, because une says one of many. The word femme itself is doing nothing wrong.',
            ref: 's13-double',
          },
          {
            q: 'Write the French for: Paul\'s daughter.',
            format: 'typeIn',
            accept: ['la fille de Paul', 'la fille de paul'],
            answer: 'la fille de Paul',
            why: 'La fille de Paul. La fille is girl and also daughter, and de with a name behind it is what settles which. That is the second thing the rule buys you.',
            ref: 's13-double',
          },
          {
            q: 'Fix this so it can only mean a girl, not a daughter. « la fille de Paul »',
            format: 'errorSpot',
            accept: ['une fille', 'une fille.'],
            answer: 'une fille',
            why: 'Une fille. Dropping de and the name takes the relationship away, and une says one of many, so both halves of the ambiguity are closed at once.',
            ref: 's13-double',
          },
        ],
      },
      {
        id: 'r6-your-own',
        label: 'Your own family',
        targets: ['err-borrows-possessive', 'err-english-order'],
        say: 'Say it about yourself.',
        questions: [
          {
            q: 'Which word goes in front of « mère » for my?',
            format: 'mcq',
            opts: ['ma', 'mon', 'mes', 'me'],
            correct: 0,
            why: 'Ma mère. Ma goes with the words that take la, and mère is one of them. Mon goes with the le words and mes goes with anything plural.',
            ref: 's17-mine',
          },
          {
            q: 'Write the French for: I have one brother and two sisters.',
            format: 'typeIn',
            accept: ["J'ai un frère et deux sœurs.", "j'ai un frere et deux soeurs", "J'ai un frère et deux sœurs"],
            answer: "J'ai un frère et deux sœurs.",
            why: 'J\'ai un frère et deux sœurs. The have verb and the numbers, both of which you already own. The s on sœurs is the ordinary plural after a number bigger than one.',
            ref: 's16-count',
          },
          {
            q: 'Fix this. « Je n\'ai pas un frère. »',
            format: 'errorSpot',
            accept: ["Je n'ai pas de frère.", 'je nai pas de frere', 'de'],
            answer: "Je n'ai pas de frère.",
            why: 'Je n\'ai pas de frère. After a negative, un and une flatten to de, which is the same shape as je n\'ai pas de voiture from the have lesson.',
            ref: 's16-count',
          },
          {
            q: 'Say your own line out loud: how many brothers and sisters you have.',
            format: 'speak',
            // `target` is what the recogniser scores against; `accept` widens
            // it, because any true answer counts here and a learner with three
            // sisters must not be marked wrong.
            target: "J'ai un frère et deux sœurs.",
            accept: ["J'ai un frère et deux sœurs.", "J'ai deux frères et une sœur.", "Je n'ai pas de frère."],
            answer: "J'ai un frère et deux sœurs.",
            why: 'Any true version of this counts. The shape is the have verb, a number, and the family word, with the plural s appearing on anything above one.',
            ref: 's19-scenario',
          },
        ],
      },
    ],
  },

  {
    type: 'roundup',
    id: 's26-roundup',
    title: 'What You Have Now',
    frSub: 'Bilan',
    layer: 'core',
    say: 'Six things, and the first one is the one the rest hang off.',
    body: `You can say whose mother, whose brother and whose sister you mean, which is the half of this `
      + `unit that a word list could never have given you. ${REFRAME} Everything else in the lesson was `
      + `either the people themselves or a place where French quietly says something you did not intend.`,
    points: [
      'The relationship first, then de, then the owner. La mère de Paul is Paul\'s mother, and the two names come out in the opposite order to English.',
      'Twenty-two words for the people in a family, twelve of which never make you guess at le or la.',
      'Le bébé, l\'enfant, les parents, les enfants and les grands-parents, where that stops.',
      'Le fils is said with a silent l and a sounded s, and la femme rhymes with calm.',
      'La femme is woman and wife; la fille is girl and daughter. Une and de are what settle them.',
      'Mon, ma and mes, as three words. The rest of that set is the next lesson.',
    ],
  },
];

/* ─── Acts ─────────────────────────────────────────────────────────────────
 *
 * Six, and the WEIGHT is the argument. The unit's canDo has two halves and one
 * of them is a word list, so:
 *
 *     the twenty-two words        act 2, THREE missions
 *     the de rule                 acts 1 and 5, NINE missions
 *     the gender insight          act 3, THREE missions
 *     what it sounds like         act 4, FOUR missions
 *
 * A long naming act is the easiest way to waste this lesson: the vocabulary is
 * already published and the learner already met a third of it in a1.03 and
 * a1.11. Three missions for the words is not a shortcut, it is the correct
 * amount.                                                                    */

const ACTS: LessonAct[] = [
  {
    id: 'act1',
    title: 'Who is who',
    sections: ['s01-scene', 's02-goals', 's03-turn', 's04-pairs', 's05-swap'],
    milestone: 'You can say whose mother, whose brother and whose sister you mean.',
    estScreens: 26,
    restPoints: ['s01-scene/after-break', 's04-pairs/halfway'],
  },
  {
    id: 'act2',
    title: 'The people',
    sections: ['s06-six', 's07-house', 's08-tree'],
    milestone: 'Twenty-two words, and a shape to hang them on.',
    estScreens: 30,
    restPoints: ['s06-six/halfway', 's07-house/halfway'],
  },
  {
    id: 'act3',
    title: 'Gender that tells the truth',
    sections: ['s09-truth', 's10-stops', 's11-sort'],
    milestone: 'Twelve words you never have to guess at, and the five places that stops.',
    estScreens: 24,
    restPoints: ['s10-stops/halfway'],
  },
  {
    id: 'act4',
    title: 'Saying it out loud',
    sections: ['s12-fils', 's13-double', 's14-nasals', 's15-listen'],
    milestone: 'The one word whose spelling lies to you, and the two that mean two things.',
    estScreens: 26,
    restPoints: ['s13-double/halfway', 's14-nasals/halfway'],
  },
  {
    id: 'act5',
    title: 'Introduce your own',
    sections: ['s16-count', 's17-mine', 's18-read', 's19-scenario'],
    milestone: 'You can say how many of each you have, and whose everybody is.',
    estScreens: 28,
    restPoints: ['s17-mine/halfway', 's18-read/after-passage'],
  },
  {
    id: 'act6',
    title: 'Prove it',
    sections: [
      's20-flash', 's21-dictation', 's22-speak', 's23-review', 's24-progress',
      's25-quiz', 's26-roundup',
    ],
    milestone: 'Lesson complete. Possessive adjectives are next, and the three you have transfer straight in.',
    estScreens: 78,
    restPoints: [
      's20-flash/halfway', 's22-speak/halfway', 's23-review/halfway',
      's25-quiz/after-r2', 's25-quiz/after-r4',
    ],
  },
];

/* ─── Deck tranches ────────────────────────────────────────────────────────
 *
 * One slice per act, index-aligned. An item is released the act it is TAUGHT,
 * not the act it is first mentioned: releasing the whole set at mission one
 * turns the flashcard hub into a wall on the morning the learner is least able
 * to read it. Act 6 releases nothing new; it applies and tests what acts 1 to 5
 * handed over.
 *
 * `once()` is not decoration. The groups are built for TEACHING and they
 * legitimately overlap. The SRS keys on (itemId, modality), so releasing one
 * card from two tranches would take two ratings for one phrase. The first
 * tranche to name an id keeps it and the rest drop it, which is also the
 * pedagogically right answer: an item belongs to the act that taught it.     */

const released = new Set<string>();
const once = (ids: string[]): string[] => {
  const out: string[] = [];
  for (const id of ids) {
    if (released.has(id)) continue;
    released.add(id);
    out.push(id);
  }
  return out;
};

const DECK_TRANCHE: string[][] = [
  // Act 1: the de rule and nothing else. NOT the twenty-two words: they are
  // taught one per card in act 2, and a card released before its mission is a
  // card the learner is asked to rate before they have met it.
  once([...DE_PHRASES, ...SWAP_PAIR]),
  // Act 2: the people, released by the act that puts each one on a screen.
  once([...PAIRS, ...HOUSEHOLD, ...EXTENDED_IDS, 'fr.a1.famille.005']),
  // Act 3: where the matching rule stops, released WITH the rule rather than
  // after it. `les enfants` is the one authored headword and it lands here,
  // because this is the act that explains why it is masculine.
  once(STOPS_IDS),
  // Act 4: the sound evidence. `fil` is released HERE, the act that shows it,
  // rather than in act 2 beside a family word it is not one of.
  once([...SOUND_IDS, 'fr.a1.famille.252']),
  // Act 5: production. The three frozen possessives, the avoir count, the two
  // introducing sentences and the passage's own sentence.
  once([...MINE_IDS, ...AVOIR_IDS, ...DE_SENTENCES, 'fr.a1.famille.083']),
  // Act 6: nothing new. Act 6 tests what acts 1 to 5 handed over, which is why
  // this slice is empty rather than padded.
  [],
];

/** Everything the lesson teaches is released exactly once, and nothing is
 *  released that the lesson does not teach. Checked HERE rather than only in
 *  the test, because a tranche that silently drops a card is a card that never
 *  reaches spaced repetition and nothing on a device would say so. */
{
  const taught = new Set(ITEM_IDS);
  const never = [...taught].filter((id) => !released.has(id));
  if (never.length) {
    throw new Error(`a1.15.l1: item(s) taught but released by no tranche: ${never.join(', ')}`);
  }
  const stray = [...released].filter((id) => !taught.has(id));
  if (stray.length) {
    throw new Error(`a1.15.l1: tranche(s) release item(s) the lesson does not teach: ${stray.join(', ')}`);
  }
}

/* ─── Error triggers and their drills ──────────────────────────────────────
 *
 * Six triggers, six drills, six retests, six quiz rounds, and that is not a
 * coincidence. `drillForRound` walks a round's `targets` and fires the drill of
 * the FIRST one that resolves, then stops. So a drill named only in second
 * place never runs. Each drill below is the first target of exactly one round,
 * which is what makes all six reachable; the batch, the merge and the test all
 * assert it rather than trusting the ordering to survive an edit.
 *
 * a1.05 shipped two unreachable drills for exactly this reason and a first
 * draft of a1.07 shipped a third. This lesson does not reopen it.            */

const ERROR_TRIGGERS: ErrorTrigger[] = [
  {
    id: 'err-english-order',
    description: 'Builds the phrase the English way round, owner first, and either reverses it outright '
      + 'or drops de altogether. The default error, because the learner\'s own language has a piece of '
      + 'punctuation for this and French does not.',
    detectOn: ['s03-turn', 's04-pairs', 's05-swap', 's25-quiz/r1-turn-it-around'],
    drill: 'drill-turn',
    retest: 'retest-turn',
  },
  {
    id: 'err-wrong-relation',
    description: 'Reaches for the wrong relationship word, most often between neveu and petit-fils, or '
      + 'between the demi- and belle- families, where the two halves of the household look alike.',
    detectOn: ['s07-house', 's08-tree', 's25-quiz/r2-the-people'],
    drill: 'drill-people',
    retest: 'retest-people',
  },
  {
    id: 'err-guesses-gender',
    description: `Guesses at le or la on a family word, having learned in ${unitRef('a1.03')} that gender mostly has to `
      + 'be memorised, and does not notice that for twelve of these it simply follows the person. The '
      + 'mirror error is applying that rule to le bebe and les parents, where it stops.',
    detectOn: ['s09-truth', 's10-stops', 's11-sort', 's25-quiz/r3-le-or-la'],
    drill: 'drill-person',
    retest: 'retest-person',
  },
  {
    id: 'err-says-the-l',
    description: 'Reads the spelling and says the l in fils, or gives femme its ordinary vowel. Both are '
      + 'the natural reading of the letters and both are wrong, and neither gets corrected because the '
      + 'listener usually works out what was meant.',
    detectOn: ['s12-fils', 's14-nasals', 's15-listen', 's25-quiz/r4-out-loud'],
    drill: 'drill-sound',
    retest: 'retest-sound',
  },
  {
    id: 'err-reads-wife',
    description: 'Takes la femme as woman and la fille as girl, and never learns that the listener took '
      + 'them the other way. The highest-value error in the lesson: it costs something socially rather '
      + 'than grammatically and nobody ever corrects it.',
    detectOn: ['s01-scene', 's13-double', 's25-quiz/r5-two-meanings'],
    drill: 'drill-double',
    retest: 'retest-double',
  },
  {
    id: 'err-borrows-possessive',
    description: 'Reaches past mon, ma and mes for a possessive this lesson has not given, or picks the '
      + 'wrong one of the three by looking at the person rather than at the article the word takes.',
    detectOn: ['s16-count', 's17-mine', 's25-quiz/r6-your-own'],
    drill: 'drill-mine',
    retest: 'retest-mine',
  },
];

const DRILLS: LessonDrill[] = [
  {
    id: 'drill-turn',
    title: 'English in, French out',
    format: 'flashcard',
    coach: 'The English is on the left. Before you turn the card, say the French out loud, and make '
      + 'yourself start with the relationship rather than with the name.',
    pairs: DE_PHRASES.map((id) => [enOf(id), frOf(id)] as [string, string]),
  },
  {
    id: 'retest-turn',
    title: 'One more time',
    format: 'mcq',
    q: "Marie's father. Which one?",
    opts: ['Marie de le père', 'le père de Marie', 'le Marie père'],
    correct: 1,
    why: 'Le père de Marie. Relationship, then de, then the owner. The two names come out in the opposite '
      + 'order to the one English put them in.',
  },
  {
    id: 'drill-people',
    title: 'Put each one where it belongs',
    format: 'sort',
    // Item ids, not display strings: a drill scores against the corpus, so it
    // plays the same audio and reads the same spelling as every other card
    // teaching these. Passing display strings here validates as broken ids.
    buckets: ['Older than you', 'Same generation', 'Younger than you'],
    items: [
      'fr.a1.famille.022', // le grand-père      older
      'fr.a1.famille.001', // le père            older
      'fr.a1.famille.025', // la tante           older
      'fr.a1.famille.003', // le frère           same
      'fr.a1.famille.027', // la cousine         same
      'fr.a1.famille.016', // la fille           younger
      'fr.a1.famille.029', // la nièce           younger
      'fr.a1.famille.031', // la petite-fille    younger
    ],
    coach: 'Work out where the person stands relative to you first, then reach for the word. Neveu and '
      + 'petit-fils are the pair worth slowing down on: both are younger, and only one of them is yours.',
  },
  {
    id: 'retest-people',
    title: 'One more time',
    format: 'mcq',
    q: "Your sister's daughter is your...",
    opts: ['la petite-fille', 'la nièce', 'la cousine'],
    correct: 1,
    why: "La nièce. La petite-fille is your own child's daughter, one generation further down.",
  },
  {
    id: 'drill-person',
    title: 'Look at the person, not at the word',
    format: 'sort',
    buckets: ['Takes le', 'Takes la', 'Does not follow the person'],
    items: [
      'fr.a1.famille.001', // le père            le
      'fr.a1.famille.026', // le cousin          le
      'fr.a1.famille.002', // la mère            la
      'fr.a1.famille.029', // la nièce           la
      'fr.a1.famille.019', // le bébé            does not follow
      'fr.a1.famille.014', // les parents        does not follow
      'fr.a1.famille.251', // les enfants        does not follow
    ],
    coach: 'For the twelve paired words the article follows the actual person and you never have to '
      + 'remember anything. The third bucket is where that stops, and it is a short list rather than a '
      + 'pattern.',
  },
  {
    id: 'retest-person',
    title: 'One more time',
    format: 'mcq',
    q: 'A baby girl. Which one?',
    opts: ['la bébé', 'le bébé', 'la bébée'],
    correct: 1,
    why: 'Le bébé. It stays masculine for a girl, which is one of the handful of places the friendly rule '
      + 'runs out.',
  },
  {
    id: 'drill-sound',
    title: 'Two words your eyes get wrong',
    format: 'flashcard',
    coach: 'Say each one out loud before you turn it. Both of these point at a sound that is not there.',
    pairs: [
      ['le fils', sub('le fils')],
      ['fil', sub('fil')],
      ['la femme', sub('la femme')],
      ['le cousin', sub('le cousin')],
      ['la cousine', sub('la cousine')],
    ],
  },
  {
    id: 'retest-sound',
    title: 'One more time',
    format: 'mcq',
    q: 'How is « le fils » said?',
    opts: [sub('le fils'), 'LUH FEELS', 'LUH FEEL'],
    correct: 0,
    why: `${sub('le fils')}. Silent l, sounded s, which is the reverse of the pattern the silent letters `
      + 'lesson gave you.',
  },
  {
    id: 'drill-double',
    title: 'Which of the two did they hear?',
    format: 'sort',
    buckets: ['Says a woman or a girl', 'Says a wife or a daughter'],
    items: [
      'fr.a1.famille.018', // la femme                  wife
      'fr.a1.famille.016', // la fille                  daughter
      'fr.a1.famille.239', // la fille de Paul          daughter
      'fr.a1.famille.252', // C'est la fille de Paul.   daughter
    ],
    coach: 'The word never changes. What changes is what is standing next to it: une says one of many, and '
      + 'de with a name says a relationship.',
  },
  {
    id: 'retest-double',
    title: 'One more time',
    format: 'mcq',
    q: 'You want to say a woman rather than the wife. What do you say?',
    opts: ['la femme', 'une femme', 'la dame femme'],
    correct: 1,
    why: 'Une femme. Une says one of many, and that is the entire difference. The word femme is doing '
      + 'nothing wrong.',
  },
  {
    id: 'drill-mine',
    title: 'Which of the three?',
    format: 'flashcard',
    coach: 'Mon with the words that take le, ma with the words that take la, mes with anything plural. '
      + 'Look at the article the word already takes rather than at the person.',
    pairs: [
      ['my father', 'mon père'],
      ['my mother', 'ma mère'],
      ['my parents', 'mes parents'],
      ['my sister', 'ma sœur'],
      ['my brother', 'mon frère'],
    ],
  },
  {
    id: 'retest-mine',
    title: 'One more time',
    format: 'mcq',
    q: 'Which word goes in front of « sœur » for my?',
    opts: ['mon', 'ma', 'mes'],
    correct: 1,
    why: 'Ma sœur. Sœur takes la, so it takes ma. The person has nothing to do with it; the article does.',
  },
];

/* ─── Reference sheet ──────────────────────────────────────────────────────
 *
 * ONE sheet, and its `sheetId` is wired from s03-turn and s17-mine rather than
 * bolted on at the end, because this is the page a learner comes back to DURING
 * a1.17: it holds the de rule, the three possessives they were given early, and
 * the tree they need in order to talk about somebody else's family.          */

const SHEETS: ReferenceSheet[] = [
  {
    id: 'sheet.a1.15.who',
    title: 'Who is who',
    layer: 'deep',
    contains: ['The de rule, both orders', 'The whole family, by generation', 'Mon, ma and mes'],
    sections: [
      {
        type: 'table',
        id: 'sheet-who-de',
        title: 'Both orders, side by side',
        layer: 'deep',
        cols: ['French', 'English'],
        rows: [...DE_PHRASES, ...SWAP_PAIR].map((id) => [frOf(id), enOf(id)]),
      },
      {
        type: 'table',
        id: 'sheet-who-tree',
        title: 'The family, by generation',
        layer: 'deep',
        cols: ['generation', 'le', 'la', 'both together'],
        rows: GENERATIONS.map((g) => [g.label, g.m, g.f, g.both ?? 'no single word']),
      },
      {
        type: 'cheatSheet',
        id: 'sheet-who-mine',
        title: 'Mon, ma, mes, and what is not here yet',
        layer: 'deep',
        rows: [
          { k: 'mon père', v: 'Mon goes with the words that take le.', say: 'mon père' },
          { k: 'ma mère', v: 'Ma goes with the words that take la.', say: 'ma mère' },
          { k: 'mes parents', v: 'Mes goes with anything plural, whichever kind of word it is.', say: 'mes parents' },
          {
            k: 'yours, his, hers, ours, theirs',
            v: 'The next lesson. Until then, de and a name always works: la mère de Paul, le frère de Marie.',
            say: 'la mère de Paul',
          },
        ],
      },
      {
        type: 'cheatSheet',
        id: 'sheet-who-sounds',
        title: 'The ones that do not sound like they look',
        layer: 'deep',
        rows: [
          { k: 'le fils', v: `${sub('le fils')}. Silent l, sounded s. The thread, fil, is ${sub('fil')} and behaves normally.`, say: 'le fils' },
          { k: 'la femme', v: `${sub('la femme')}. The only common word where the letter e says that sound.`, say: 'la femme' },
          { k: 'le cousin, la cousine', v: `${sub('le cousin')} and ${sub('la cousine')}. The masculine has a nasal vowel and no n sound; the feminine has a real n, because a vowel follows it.`, say: 'le cousin, la cousine' },
          { k: 'la grand-mère', v: `${sub('la grand-mère')}. One frozen word, and the first half never changes shape.`, say: 'la grand-mère' },
        ],
      },
      {
        type: 'teach',
        id: 'sheet-who-why',
        title: 'Why French turns it around',
        layer: 'deep',
        body: 'English has a piece of punctuation whose only job is to say whose something is. You put the '
          + 'owner first, add an apostrophe and an s, and put the thing after it. French never developed '
          + 'that piece of punctuation, so it does the job with a small word instead, and a small word has '
          + 'to sit between the two things rather than on the end of one of them. That is the whole reason '
          + 'the order comes out backwards: the thing has to be said first so that de has something to '
          + 'follow, and the owner arrives last. Once you see it that way there is nothing to memorise, '
          + 'because the order is forced by the shape of the tool rather than chosen. The same de turns up '
          + 'all over the language doing the same structural job. A bottle of water is une bouteille '
          + "d'eau: the container first, then de, then what is in it. A lot of water is beaucoup d'eau: "
          + 'the quantity first, then de, then the stuff. In every one of them the thing being measured or '
          + 'owned comes after de and the thing doing the measuring or being owned comes before it. What '
          + 'changes between them is only what kind of relationship de is naming, and with a person\'s '
          + 'name behind it the relationship is always ownership. The practical version is short and it '
          + `works while you are talking. ${REFRAME} Say the relationship, say de, say whose. If you find `
          + 'yourself starting with the name, you are speaking English with French words, and the sentence '
          + 'will stop rather than merely sound odd.',
      },
    ],
  },
];

/* ─── Progress stats, derived from the journey rather than typed ───────────*/

{
  const quiz = SECTIONS.find((s) => s.type === 'quiz') as { rounds?: { questions: unknown[] }[] } | undefined;
  const nQuestions = (quiz?.rounds ?? []).reduce((n, r) => n + r.questions.length, 0);
  const progress = SECTIONS.find((s) => (s as { id?: string }).id === 's24-progress') as
    { stats: { k: string; v: string }[] } | undefined;
  if (!progress) throw new Error('a1.15.l1: s24-progress is missing');
  progress.stats = [
    { k: 'Missions done', v: String(SECTIONS.length - 3) },
    { k: 'Words for people', v: String(THE_TWELVE.length + HOUSEHOLD.length + EXTENDED.length + STOPS_IDS.length) },
    { k: 'Ways to say whose', v: String(DE_PHRASES.length + SWAP_PAIR.length + DE_SENTENCES.length) },
    { k: 'Questions ahead', v: String(nQuestions) },
    { k: 'Rounds', v: String(quiz?.rounds?.length ?? 0) },
  ];
}

export const FAMILLE_LESSON: Lesson = {
  id: 'a1.15.l1',
  unitId: 'a1.15',
  // The lesson's index WITHIN its unit, not its place in the track. Every
  // lesson in the seed is seq 1 because every unit ships exactly one so far,
  // and the `l1` in the id is this number.
  seq: 1,
  title: 'La famille',
  level: 'a1',
  // NINETEEN, from unit.seq. missions.ts derives the eyebrow at render time as
  // `${level} · LEÇON ${unit.seq}`, and a1.15 sits at seq 19. The stored value
  // is a fallback and has to agree with what the renderer computes, or the two
  // disagree the moment something reads this field instead. a1.03 shipped
  // exactly that bug (commit 56c79a7). The batch recomputes it from the unit.
  tag: 'A1 · LEÇON 19',
  intro:
    'Twenty-two words for the people in a family, and one rule for saying whose they are that runs the '
    + 'opposite way round from the one your own language gave you. This is how you say who is who, name '
    + 'everybody, and introduce your own family out loud.',

  sections: SECTIONS,
  itemIds: ITEM_IDS,
  // The LESSON's own counter, not `seed.version`. seed.version is the OTA
  // snapshot number, derived by publish-content.ts as previous + 1, and a merge
  // must never hand-bump it.
  version: 4,

  grammarAssumed: [
    'Noun gender, and that le and la follow it, introduced in a1.03',
    "le, la, l' and les, introduced in a1.04",
    'un and une, and that they become de after a negative, introduced in a1.11',
    'de for quantity, in une bouteille d\'eau and beaucoup d\'eau, introduced in a1.29',
    'The numbers, introduced in a1.02',
    'The full present of être, introduced in a1.06',
    'The full present of avoir, and its age frame, introduced in a1.07',
    'That a final consonant is usually silent, introduced in sons.06',
    'The nasal vowels, and that a following vowel blocks them, introduced in sons.03',
  ],
  grammarIntroduced: [
    'de for possession: the possessed noun first, de second, the possessor last',
    'That French has no genitive apostrophe, and that the constituent order is therefore the reverse of English',
    'Natural gender in kinship terms: le and la tracking the referent rather than the lexeme',
    'The limits of that: epicene le bébé and l\'enfant, and masculine plurals over mixed groups',
    'mon, ma and mes as three lexical items, with no paradigm and no vowel-elision rule',
    'The lexicalised compound grand-mère, taken as a frozen form rather than as a failure to agree',
  ],

  features: ['roleplay', 'voiceflash'],

  overview: {
    titleEn: 'Family Vocabulary',
    subFr: 'La famille',
    introFr:
      'Vingt-deux mots pour la famille, et une règle pour dire à qui ils sont qui marche à l\'envers de '
      + "l'anglais.",
    minutes: 24,
    difficulty: 2,
    glyph: '👪',
    screens: 212,
  },

  acts: ACTS,
  reframe: REFRAME,
  errorTriggers: ERROR_TRIGGERS,
  drills: DRILLS,
  sheets: SHEETS,
  deckTranche: DECK_TRANCHE,
  terms: FAMILLE_TERMS,

  audio: {
    defaultLang: 'fr-FR',
    speeds: [1.0, 0.65],
    coachVoice: 'coach-en-warm',
    interfaceSounds: ['correct', 'incorrect', 'checkpoint'],
    // ── The audio decisions that cannot be recovered later ─────────────────
    //
    // Written here AND pinned by a1-15-famille.test.ts, because a constraint on
    // how something is recorded becomes invisible the moment the clip is
    // delivered. Anything the learner must hear AS A CONTRAST is one take with
    // one voice: two recordings are two performances, and the learner will hear
    // the performance rather than the language.
    //
    // Briefs only. Do NOT run pnpm audio:render: it spends real ElevenLabs
    // credits and ELEVENLABS_API_KEY is not set in ealch-admin/.env in any
    // case. CLIP_MANIFEST is empty by design, so every card falls back to
    // device TTS until the studio delivers, and a recordingId resolving to
    // nothing is the correct shipping state.
    recorded: [
      {
        id: 'rec-a1-15-fils',
        desc:
          'THE MOST IMPORTANT NOTE IN THIS LESSON. « le fils » AND « fil » ARE ONE TAKE, ONE VOICE, one '
          + 'pace, said one immediately after the other with no gap and no reset: le fils, fil, le fils, '
          + 'fil. The whole point is that the SPELLING PREDICTS THE WRONG SOUND, and two separate '
          + 'recordings let the speaker drift so the learner hears two performances instead of two words. '
          + 'le fils is FEES: the l is completely silent and the final s IS pronounced. fil is FEEL: the l '
          + 'is pronounced and there is no s. Do not lean on either one, do not slow the fils down to make '
          + 'the point, and do not aspirate the s. Read them as two ordinary words that happen to sit next '
          + 'to each other, because that is what a learner will meet. Then « le fils de Marie » as a whole '
          + 'phrase in the same take, so the trap is heard inside a sentence rather than only in '
          + 'isolation.',
        clipIds: ['le fils', 'fil', 'fils-fil-pair', 'le fils de Marie'],
      },
      {
        id: 'rec-a1-15-femme',
        desc:
          '« la femme » RECORDED SLOWLY IN ISOLATION ONCE, and then again at ordinary pace, in the same '
          + 'take. It is FAM: the vowel is the one in the English word calm, and it is the only common '
          + 'French word where the letter e says that. This is the pronunciation the learner will get '
          + 'wrong and the deck is the only place it is heard alone, so the slow reading matters more here '
          + 'than anywhere else in the lesson. Then « la femme » and « une femme » AS A PAIR IN ONE TAKE, '
          + 'read IDENTICALLY apart from the little word in front. The teaching is that the two are '
          + 'acoustically the same and only the article separates them, so any difference the reader '
          + 'performs on the noun teaches something untrue. Finally the scene lines: « Voici la femme. » '
          + 'and « Voici une femme. », also one take, also identical on the noun.',
        clipIds: ['la femme', 'la femme slow', 'la-femme-une-femme-pair', 'Voici la femme.', 'Voici une femme.'],
      },
      {
        id: 'rec-a1-15-pairs',
        desc:
          'EVERY MASCULINE AND FEMININE PAIR IS ONE TAKE, one voice, the masculine immediately followed by '
          + 'its feminine with no gap: le père / la mère, le frère / la sœur, le fils / la fille, l\'oncle '
          + '/ la tante, le cousin / la cousine, le neveu / la nièce. Recorded apart, the learner compares '
          + 'two performances instead of two forms, and the whole teaching of this act is that the two '
          + 'members of each pair differ only in the article and the person. '
          + 'LE COUSIN / LA COUSINE IS THE ONE TO WATCH AND IT IS THE ONLY PAIR WHERE THE NOUN ITSELF '
          + 'CHANGES SOUND. le cousin ends in a NASAL VOWEL with NO n consonant behind it at all; la '
          + 'cousine has a REAL n, because a vowel follows it. Read the masculine with nothing after the '
          + 'vowel and the feminine with the n clearly sounded. Do not nasalise la cousine and do not put '
          + 'any n at the end of le cousin. Every other pair should sound identical on the noun.',
        clipIds: [
          'le père', 'la mère', 'pere-mere-pair',
          'le frère', 'la sœur', 'frere-soeur-pair',
          'le fils', 'la fille', 'fils-fille-pair',
          "l'oncle", 'la tante', 'oncle-tante-pair',
          'le cousin', 'la cousine', 'cousin-cousine-pair',
          'le neveu', 'la nièce', 'neveu-niece-pair',
        ],
      },
      {
        id: 'rec-a1-15-de',
        desc:
          'EVERY de PHRASE IS RECORDED AS A WHOLE PHRASE, NEVER AS THREE WORDS. The rule being taught is '
          + 'about the ORDER, so a clip of de on its own teaches nothing and a phrase assembled from three '
          + 'separate clips teaches the learner to pause where a French speaker does not. « la mère de '
          + 'Paul », « le père de Marie », « le frère de Paul », « la sœur de Marie », « la fille de Paul '
          + '», « le fils de Marie », each one continuous, with the de completely unstressed and swallowed '
          + 'into the phrase the way it really is. '
          + 'THE MINIMAL PAIR IS ONE TAKE: « Marie est la sœur de Paul. » immediately followed by « Paul '
          + 'est le frère de Marie. » Same voice, same pace, same everything, because the two sentences '
          + 'differ only in which name lands after de and the learner has to hear that as the only change. '
          + 'Do not emphasise either name.',
        clipIds: [
          'la mère de Paul', 'le père de Marie', 'le frère de Paul', 'la sœur de Marie',
          'la fille de Paul', 'le fils de Marie', 'de-swap-pair',
          'Marie est la sœur de Paul.', 'Paul est le frère de Marie.',
        ],
      },
      {
        id: 'rec-a1-15-household',
        desc:
          'The rest of the household as one continuous take at an even pace: la famille, les parents, la '
          + 'grand-mère, le grand-père, les grands-parents, le petit-fils, la petite-fille, le mari, la '
          + 'femme, le beau-père, la belle-mère, le demi-frère, la demi-sœur. '
          + 'THE NASALS MUST BE CLOSED, WITH NO n SOUND BEHIND THEM AT ALL: les parents, la grand-mère, le '
          + 'grand-père and les grands-parents all carry a genuine nasal vowel and the app respells them '
          + 'with a superscript n deliberately. A reader who sounds the n contradicts the card. In les '
          + 'grands-parents the d of grands is silent and the liaison does NOT happen. In le petit-fils the '
          + 't of petit is silent and the s of fils IS sounded, which is the same trap as the fils clip.',
        clipIds: [
          'la famille', 'les parents', 'la grand-mère', 'le grand-père', 'les grands-parents',
          'le petit-fils', 'la petite-fille', 'le mari', 'la femme',
          'le beau-père', 'la belle-mère', 'le demi-frère', 'la demi-sœur',
        ],
      },
      {
        id: 'rec-a1-15-mine',
        desc:
          'The three possessives, each attached to its noun and NEVER bare: « mon père », « ma mère », « '
          + 'mes parents ». A bare mon teaches nothing, because the whole question is which noun it goes '
          + 'in front of. One take, in that order. mon carries a nasal vowel with no n sound behind it; '
          + 'mes parents has NO liaison between mes and parents in ordinary speech at this level and '
          + 'should be read without one. Then the avoir lines, also one take: « J\'ai un frère et deux '
          + 'sœurs. », « Je n\'ai pas de frère. », « Tu as des frères et sœurs ? ». The last one is a '
          + 'question by INTONATION ONLY, with the voice rising at the end and the words in statement '
          + 'order, which is how it is really asked.',
        clipIds: [
          'mon père', 'ma mère', 'mes parents',
          "J'ai un frère et deux sœurs.", "Je n'ai pas de frère.", 'Tu as des frères et sœurs ?',
        ],
      },
      {
        id: 'rec-a1-15-scene',
        desc:
          'The opening scene, French lines only, in the voice of a woman in her thirties at an ordinary '
          + 'conversational pace rather than a teaching pace. The beat where Salomé congratulates the '
          + 'learner on a marriage that has not happened (« Ah, tu es marié ? Félicitations ! ») must be '
          + 'WARM AND GENUINELY PLEASED, with no hint of correction, teasing or a raised eyebrow. The '
          + 'entire teaching depends on the learner hearing that NOTHING WENT WRONG as far as she is '
          + 'concerned: she has simply understood something that was not said, and any edge on that line '
          + 'turns an invisible error into a visible one and loses the point. The final line, « Ah '
          + "d'accord ! Et lui, c'est le frère de Paul, non ? », should be equally unremarkable, because "
          + 'it is the rest of the lesson arriving in somebody else\'s ordinary speech.',
        clipIds: [
          "Et elle, c'est qui ?",
          'Ah, tu es marié ? Félicitations !',
          "Ah d'accord ! Et lui, c'est le frère de Paul, non ?",
        ],
      },
    ],
    ambienceDefault: 'off',
  },
};

/** Exported for the authoring script, the merge script and the test, so none of
 *  them restates a count that can drift out of agreement with the content. */
export const FAMILLE_ITEM_IDS = ITEM_IDS;
export const FAMILLE_SPEAK_IDS = SPEAK_IDS;
export const FAMILLE_DICTATION_IDS = DICTATION_IDS;
export const FAMILLE_TRANCHES = DECK_TRANCHE;
export const FAMILLE_PAIR_IDS = PAIRS;
export const FAMILLE_DE_IDS = [...DE_PHRASES, ...SWAP_PAIR, ...DE_SENTENCES];
export const FAMILLE_MINE_IDS = MINE_IDS;
export const FAMILLE_STOPS_IDS = STOPS_IDS;
export const FAMILLE_EXTENDED_IDS = EXTENDED_IDS;

/** The section that has to show BOTH orders on one screen. Named so the test
 *  asserts the layout rather than the wording: split across two missions the
 *  reframe stops being a rule and becomes two facts. */
export const BOTH_ORDERS_SECTION = 's04-pairs';

/** The section that has to carry `le fils` and `fil` together. */
export const FILS_PAIR_SECTION = 's12-fils';

/* ─── The handover to a1.17 ────────────────────────────────────────────────
 *
 * The brief asks for this explicitly, and a1.13 wrote one for a1.14 and a1.16
 * which is the reason this lesson's brief could be written at all.
 *
 * ── WHAT a1.17 (Possessive Adjectives, seq 20) INHERITS ───────────────────
 *
 * THREE WORDS HAVE ALREADY LANDED, as words rather than as a system:
 *
 *     mon    fr.a1.famille.248   « mon père »     taught in s17-mine
 *     ma     fr.a1.famille.249   « ma mère »      taught in s17-mine
 *     mes    fr.a1.famille.250   « mes parents »  taught in s17-mine
 *
 * The learner has been given exactly one selection rule for them, stated in
 * terms of the article rather than of gender: mon with the words that take le,
 * ma with the words that take la, mes with anything plural. That is the whole
 * of it. There is no paradigm anywhere in this lesson and no grid.
 *
 * NOTHING ELSE HAS BEEN TAKEN. ton, ta, tes, son, sa, ses, notre, nos, votre,
 * vos, leur and leurs appear on NO learner surface in this lesson, including
 * the lines the learner only hears in the scene and the role play. The batch,
 * the merge and a1-15-famille.test.ts all assert that against
 * RESERVED_POSSESSIVES with an accent-aware whole-word walk, so a later edit
 * that leaks one goes red rather than quietly stealing a1.17's lesson.
 *
 * THE mon-BEFORE-A-FEMININE-VOWEL RULE IS UNTOUCHED AND IT IS YOURS. « mon
 * amie », « mon école ». This lesson never states it, never demonstrates it and
 * never authors a phrase that would require it; POSSESSIVE_RULE_PHRASES in
 * famille-corpus.ts is the guard and it is checked against production surfaces.
 * s17-mine tells the learner IN AS MANY WORDS that the full set arrives next
 * lesson and that there is "one wrinkle in the ma column that nobody can
 * guess", which is the right amount to say: a learner who notices the gap and
 * is not told assumes the lesson is incomplete.
 *
 * ── THE ESCAPE HATCH YOU CAN LEAN ON ──────────────────────────────────────
 *
 * de for possession is now taught and drilled, and s17-mine explicitly tells
 * the learner that if mon, ma and mes will not reach, de and a name always
 * works. So a1.17 can open by naming this lesson (the way a1.09 opens by naming
 * a1.08) and can contrast the two: de for somebody else's, the possessive for
 * yours. The reference sheet sheet.a1.15.who is built to be returned to DURING
 * a1.17 and its last row already points forward.
 *
 * ── THE ID RANGE, WHICH THE BRIEF ASKS US TO AGREE ────────────────────────
 *
 * a1.17 declares theme `famille` and will author into the same sequence.
 *
 *     fr.a1.famille.001-.234    published before this build
 *     fr.a1.famille.235-.252    THIS BUILD. Eighteen rows.
 *     fr.a1.famille.253+        FREE. a1.17 starts here.
 *
 * Re-run `pnpm corpus:probe --theme famille` before authoring rather than
 * trusting this line: it is true on 2026-08-06 and somebody else may land
 * first.
 *
 * ── TWO THINGS THAT WILL SAVE YOU A SESSION ───────────────────────────────
 *
 * THE THEME IS INSIDE SEED_CUT.themes. 331 published, 331 in the seed. Your
 * merge WILL change seed contents and that is correct, not a bug. This is the
 * opposite of a1.13's situation and it caught this build by surprise in the
 * good direction.
 *
 * THE ID CONVENTION IS A THIRD ONE. famille puts headwords AND sentences in the
 * same fr.a1.famille.* prefix. couleurs splits them across fr.sons.* and
 * fr.a1.*. Do not carry a convention in from another lesson; read the probe.
 *
 * ── AND ONE THAT WILL COST YOU ONE IF YOU IGNORE IT ───────────────────────
 *
 * a1.03's printed ending figures are measured from the seed on every test run,
 * and family words are gendered singular nouns, which is the exact shape that
 * joins the population. This build had to WITHDRAW `la personne` for moving
 * the -e figure from 873 to 874. Anything you author with `kind: 'word'`, a
 * `gender`, and no space in its bare noun is radioactive. Multi-word phrases,
 * plural-only nouns (`les ...`) and sentences are all free. Check through the
 * real endingPopulation from gender.logic.ts and withdraw rather than argue. */
