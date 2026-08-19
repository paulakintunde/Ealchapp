// a1.18.l1 "La négation", the lesson body.
//
// 28 sections in 6 acts. Every French string, gloss and transcription is read
// from negation-corpus.ts through frOf, enOf and sub; nothing here restates one.
//
// ══════════════════════════════════════════════════════════════════════════
//  THE SHAPE THE BRIEF ASKED FOR, AND THE ONE THIS LESSON HAS
// ══════════════════════════════════════════════════════════════════════════
//
// The brief's plan:
//
//     act 1  wrap the verb          act 4  except after être
//     act 2  before a vowel         act 5  what you will hear
//     act 3  the article changes    act 6  prove it
//
// and its weighting instruction: "The weight belongs on the article rule and
// its exceptions, not on the ne… pas wrap."
//
// THE ARTICLE RULE HAS BEEN TAUGHT THREE TIMES ALREADY. a1.11's s13-negation,
// a1.29's s12-negation and a1.07's s15-negation each carry a dedicated section,
// an errorTrigger, a drill and a quiz round on un/une/des/du -> de, and all
// three also teach that le/la/les survive. So act 3 here is REVISION, held to
// three sections, and it says out loud that it is revision.
//
// The elision, which the brief gives an act, is owned outright by sons.07: a
// card headed "ne becomes n'", an errorSpot on « je ne aime pas », and four quiz
// questions. Act 2 is two sections and REFERENCES it rather than deriving it.
//
// The weight went where the measurement pointed instead:
//
//     ACT 4, FIVE SECTIONS, AND IT IS THE LESSON. a1.06 taught être across
//     twenty-six sections and NEVER NEGATED IT ONCE. Negating être is new. The
//     article surviving when you do is new, unattested (2 rows in 47,444,
//     neither usable) and the highest-error part of the rule. Both are the same
//     fact: the verb decides.
//
// s11-one-noun is the screen this lesson is judged on. One noun, `livre`, three
// times, the same little word in front of it in two of the three, and the answer
// different every time. The corpus cannot supply it and could not: this is the
// minimal pair the brief asks for and the reason PAIRS exists in the corpus.

import type {
  ErrorTrigger, Lesson, LessonAct, LessonDrill, LessonSection, ReferenceSheet, SceneBeat,
} from '../../../ealch-v2/src/content/schema.ts';
import { NEGATION_TERMS, REFRAME } from './negation-terms.ts';
import { unitRef } from './_unit-ref.ts';

/** A citation that OPENS a sentence needs a capital, and the label is built at
 *  interpolation time rather than typed, so the capital has to be applied here.
 *  « lesson 22 said this first » is not a sentence. */
function Cap(s: string): string { return s.charAt(0).toUpperCase() + s.slice(1); }
import {
  AUTHORED_IDS, BORROWED_IDS, CONTRAST_LIVRE, DROPPED_NE, IMPORTED_IDS, NEGATIVE_IDS,
  PAIRS, POSITIVE_IDS, REUSED_IDS, enOf, frOf, pairsIn, pairsWith, re, sub,
} from './negation-corpus.ts';

export { REFRAME };

/* ─── Named ids, so no screen carries a bare string ────────────────────────── */

const NE = 'fr.sons.voyelles.182';
const NON = 'fr.sons.mots-essentiels.043';

/** The three-way contrast, in the order act 4 shows it: collapses, survives on
 *  le, survives after être. Read from the corpus tag rather than listed, so a
 *  reorder here cannot disagree with the rows. */
const [LIVRE_UN, LIVRE_LE, LIVRE_ETRE] = CONTRAST_LIVRE;

const WRAP = pairsIn(1);
const COLLAPSE = pairsIn(3);
const ETRE_KEEPS = pairsWith('survives-etre');
const ORAL = pairsIn(5)[0];

/** Reading exposure: verbs the learner cannot conjugate. Named on the screens
 *  that show them and asked for on NO production surface. -er verbs are a2.01
 *  and faire is a2.12, so parler, manger, habiter and aimer are all out of
 *  reach; the brief is explicit that these are fine to read and never to
 *  produce, and the test asserts it against produce-surfaces only. */
const READING_ONLY = [
  'fr.a1.negation-et-restriction.002',  // Je ne parle pas allemand.
  'fr.a1.negation-et-restriction.006',  // Nous n'habitons pas à Lyon.
  'fr.a1.negation-et-restriction.022',  // Elle ne mange pas de viande.
  'fr.a1.negation-et-restriction.025',  // Il n'aime pas le café.
  'fr.a1.expressions-utiles.095',       // Je n'aime pas le café. Moi non plus.
  'fr.a1.cuisine.264',                  // Je ne mange pas de pain.
  'fr.a1.au-restaurant.189',            // Je ne mange pas de viande.
];

/** Every id the lesson names, and every one of them is on a screen. Assembled
 *  from the corpus rather than typed: a1.08 shipped 43 declared itemIds that
 *  resolved perfectly and were drawn by nothing. */
const ITEM_IDS: string[] = [...AUTHORED_IDS, ...BORROWED_IDS];

/* ─── The speak mission ────────────────────────────────────────────────────
 *
 * NEGATIVES ONLY, and NOT ONE OF THEM IS THE DROPPED-ne ROW.
 *
 * The dropped ne is recognition-only on every surface and this is the surface
 * most likely to lose that. fr.a1.negation-et-restriction.069 is excluded BY ID
 * rather than by string, and the batch, the merge and the test all check the
 * exclusion, because a later author "modernising" the lesson would add it here
 * first and every other assertion would stay green.
 *
 * Reading-exposure rows are excluded too: every line the learner says out loud
 * is built on être or avoir, which are the only two verbs they can conjugate.
 *
 * AND EVERY LINE CARRIES `voiceflash`, which is what PracticeVFView scores
 * against. Most of the imported rows do not: fr.a1.negation-et-restriction.021,
 * .023 and fr.a1.rp-identite.027 are all `drills: ["dictation"]` and were
 * withdrawn from this list when the batch measured them, because a speak
 * mission naming a row with no voiceflash draws a card the learner cannot be
 * scored on. The thirteen authored negatives carry it, and so does
 * fr.a1.famille.234, which a1.07 authored with the full set.                  */
const SPEAK_IDS: string[] = [
  ...NEGATIVE_IDS,
  'fr.a1.famille.234',
];

/* ─── The dictée, and it is WORD mode on purpose ───────────────────────────
 *
 * dicteeMode switches to WORDS above 16 letters when there is more than one
 * word, so every target here lands in word mode: the learner is handed the
 * sentence's own words plus decoys and assembles them.
 *
 * THAT IS THE RIGHT MODE FOR THIS LESSON AND IT IS THE OPPOSITE OF a1.17's.
 * a1.17 needed letters mode because its subject was a CHOICE between two short
 * words and word mode would have handed the learner `mon` as a pre-spelled
 * tile. This lesson's first step is an ORDER: ne in front of the verb, pas
 * behind it. Word mode is the only mode that tests it, because the learner has
 * to place two loose particles either side of a verb. a1.16 found the same
 * thing for adjective placement.
 *
 * What word mode CANNOT test here is the apostrophe in n', because `n'ai` is one
 * tile. Nothing else can either: fold() strips apostrophes, so no typeIn and no
 * errorSpot reaches it. THE APOSTROPHE IN n' IS NOT TESTED ANYWHERE IN THIS
 * LESSON and it is better to say so than to ship a question certifying nothing.
 * It is taught on two screens and left there.
 *
 * Every target is a NEGATIVE. A dictée on « J'ai un livre. » tests nothing this
 * lesson teaches, which is why the positives carry no `dictation` drill.
 *
 * THE TARGETS WERE CHOSEN BY MEASURING, NOT BY MEANING. The threshold is
 * DICTEE_LETTER_LIMIT = 16 letters AND more than one word, counted with
 * punctuation and spaces stripped, and three of the first five picks fell under
 * it:
 *
 *     Il n'est pas là.        11 letters   LETTERS mode
 *     Je n'ai pas de frère.   15 letters   LETTERS mode
 *     Ce n'est pas un livre.  16 letters   LETTERS mode  (16 is not > 16)
 *     Je n'ai pas de livre.   15 letters   LETTERS mode
 *
 * A short negative spells out rather than assembling, which would have made
 * three of the five dictée screens a spelling test in a lesson that teaches no
 * spelling. The five below all clear the threshold and the batch, the merge and
 * the test each re-measure through the real dicteeMode rather than trusting
 * this comment. Between them they cover the wrap on être, the collapse on
 * avoir, and the être exception on both une and des.                          */
const DICTATION_IDS: string[] = [
  WRAP[0].negId,        // Je ne suis pas fatigué.    18 letters
  WRAP[2].negId,        // Nous ne sommes pas prêts.  20 letters
  COLLAPSE[1].negId,    // Je n'ai pas de voiture.    17 letters
  ETRE_KEEPS[1].negId,  // Ce n'est pas une erreur.   18 letters
  ETRE_KEEPS[2].negId,  // Ce ne sont pas des amis.   18 letters
];

/* ─── The scene ────────────────────────────────────────────────────────────
 *
 * The brief's scene, and its reasoning is right: "a failed negative does not
 * sound wrong, it sounds like agreement."
 *
 * THE MECHANISM, STATED HONESTLY. Dropping the ne is not an error and this
 * lesson never says it is: it is what ordinary spoken French does and act 5
 * teaches it as recognition. What the scene is about is what dropping it COSTS
 * A BEGINNER. With the ne gone, the entire negative rests on one short
 * unstressed word. A listener who misses `pas` is left with « J'ai … de
 * voiture », which the ear repairs to the positive, and nothing about the
 * exchange gives either person a reason to check.
 *
 * That is why the written form keeping `ne` matters and why the card in act 5
 * is worth more than a footnote: `ne` is a SECOND signal carrying the same
 * information, and a learner whose `pas` is not landing yet has nothing else.
 *
 * The weaker beat, deliberately not the one: « Je n'ai pas un frère », which is
 * understood perfectly and merely marks a beginner. Nothing rides on it.
 *
 * Beats carry their own `size` (prose at md, the choice and the break at lg)
 * and their own `audio`. The break body is 34 words; the shipped range is 24
 * to 40.                                                                      */

const SCENE_BEATS: SceneBeat[] = [
  {
    kind: 'narration',
    size: 'md',
    text: 'The first morning at a new job, in the corridor outside the office, and somebody from the floor below has stopped you with a clipboard.',
    audio: { mode: 'tts', voice: 'coach' },
  },
  {
    kind: 'narration',
    size: 'md',
    text: 'She is allocating the six parking spaces behind the building. There are eleven people and she is working down a list. This takes forty seconds and then she is gone.',
    audio: { mode: 'tts', voice: 'coach' },
  },
  {
    kind: 'bubble',
    from: 'them',
    reveal: 'auto',
    size: 'md',
    speaker: 'Salomé',
    fr: 'Vous avez une voiture ?',
    en: 'Do you have a car?',
    stage: 'She is already looking at the next name. The corridor is loud and she is not really listening.',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a1-18-scene' },
  },
  {
    kind: 'choice',
    size: 'lg',
    prompt: 'You do not have a car. Which line do you say?',
    options: [
      {
        fr: frOf(ORAL.negId).replace("Je n'ai", "J'ai").replace('pas de chien', 'pas de voiture'),
        respell: re("j'ai pas de chien"),
        en: 'the way you have heard people say it',
        outcome: 'breaks',
        audio: { mode: 'tts', lang: 'fr-FR' },
      },
      {
        fr: frOf(COLLAPSE[1].negId),
        respell: re("je n'ai pas"),
        en: 'the way it is written, with both halves in it',
        outcome: 'works',
        audio: { mode: 'tts', lang: 'fr-FR' },
      },
    ],
    followUp: {
      works: 'Yes, and notice how much of the sentence is carrying the no. Two words rather than one.',
      breaks: 'That is real French and people say it constantly. Watch what happens to it in a loud corridor.',
    },
  },
  {
    kind: 'bubble',
    from: 'you',
    reveal: 'auto',
    size: 'md',
    speaker: 'You',
    fr: "J'ai pas de voiture.",
    en: '(Every word correct, and the whole meaning is riding on the short one)',
    audio: { mode: 'tts', lang: 'fr-FR' },
  },
  {
    kind: 'bubble',
    from: 'them',
    reveal: 'auto',
    size: 'md',
    speaker: 'Salomé',
    fr: 'Parfait, je vous mets la place numéro quatre. Le badge arrive vendredi.',
    en: 'Perfect, I am putting you in space number four. The badge comes on Friday.',
    stage: 'She writes it down and moves on. Nothing has gone wrong that anybody in the corridor could point at.',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a1-18-scene' },
  },
  {
    kind: 'break',
    size: 'lg',
    heading: 'Nobody was corrected',
    body: 'You said a real sentence and she heard the opposite of it. With the ne gone, one short unstressed word was carrying the entire no, and in a loud corridor it did not land. She heard a yes.',
    wrong: {
      fr: "J'ai pas de voiture.",
      ipa: '/ʒe pɑ də vwa.tyʁ/',
      respell: re("j'ai pas de chien"),
      en: 'Correct spoken French, and everything depends on one word arriving',
    },
    right: {
      fr: frOf(COLLAPSE[1].negId),
      ipa: '/ʒə ne pɑ də vwa.tyʁ/',
      respell: re("je n'ai pas"),
      en: 'The same sentence with a second word carrying the same no',
    },
    coach: `${REFRAME} There are two halves for a reason, and this is it.`,
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], audioFirst: true, recordingId: 'rec-a1-18-pair' },
  },
  {
    kind: 'bubble',
    from: 'you',
    reveal: 'tap',
    size: 'md',
    speaker: 'Friday, when the badge arrives',
    fr: frOf(COLLAPSE[1].negId),
    en: 'I do not have a car.',
    stage: 'One extra syllable, and it is the one that would have been heard.',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65] },
  },
  {
    kind: 'bubble',
    from: 'them',
    reveal: 'auto',
    size: 'md',
    speaker: 'Salomé',
    fr: 'Ah, vous n\'en avez pas ! Bon, je la donne à quelqu\'un d\'autre alors.',
    en: 'Oh, you do not have one! Right, I will give it to somebody else then.',
    stage: 'Four days of a space nobody used, and somebody who needed one walking from the other end of the street.',
    audio: { mode: 'tts', lang: 'fr-FR' },
  },
  {
    kind: 'resolve',
    size: 'md',
    text: 'Two words, either side of the verb. The next half hour is how to put them there, and what happens to the rest of the sentence when you do.',
  },
];

const SECTIONS: LessonSection[] = [
  /* ══ Act 1: two words, not one ═══════════════════════════════════════════ */

  {
    type: 'scene',
    id: 's01-scene',
    title: 'The Parking Space',
    frSub: 'Une place de parking',
    render: 'screens',
    layer: 'core',
    terms: ['theWrap', 'whatYouWillHear'],
    say: {
      text: 'A correct sentence, heard as its own opposite, and nobody in the corridor had any reason to check.',
      voice: 'coach',
      timing: 'onFirstVisitOnly',
    },
    setting: {
      place: 'A corridor outside an open-plan office, first morning, somebody working down a list',
      city: 'Rennes',
      time: 'Monday, just before nine',
      ambience: 'room-tone-lobby',
    },
    beats: SCENE_BEATS,
    closing: {
      size: 'md',
      text: `${REFRAME} That is the whole of the next half hour.`,
    },
  },

  {
    type: 'goals',
    id: 's02-goals',
    title: 'What You Will Be Able To Do',
    frSub: 'Ce que vous saurez faire',
    layer: 'core',
    say: 'Four things, and the second one is the only part of this that nobody has told you yet.',
    goals: [
      { t: 'Turn any sentence you have into its negative', s: 'Two words, either side of the verb, and it works on every sentence you can already make.' },
      { t: 'Know what the verb does to the rest of it', s: 'The same sentence gives two different answers depending on which verb is in it. This is the part that catches people.' },
      { t: 'Recognise a negative with half of it missing', s: 'What you will actually hear, which is not what you will read, and the difference matters more than it sounds.' },
      { t: 'Keep non and ne apart', s: 'Two words for no doing two completely different jobs, and English uses one word for both.' },
    ],
  },

  {
    type: 'cardDeck',
    id: 's03-two-words',
    title: 'French Needs Two Words For Not',
    frSub: 'Deux mots, pas un',
    hint: 'Four cards before any sentence is turned round.',
    render: 'deck',
    layer: 'core',
    size: 'lg',
    terms: ['theWrap'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a1-18-wrap' },
    say: 'One English word becomes two French ones, and the two go in different places.',
    cards: [
      {
        label: 'what English does',
        head: 'One word, and it goes after the verb',
        body: 'I am not tired. I do not have a car. English puts a single word behind the verb and the job is done. There is nothing in front and nothing to remember about where the other half goes, because there is no other half.',
      },
      {
        label: 'what French does',
        head: 'Two words, one on each side',
        fr: frOf(NE),
        sub: `${sub('ne')} · the first half, and it goes in front`,
        body: 'French has two and they do not sit together. Ne goes in front of the verb and pas goes behind it, so the verb ends up between them. Neither half is optional in writing and neither one means anything on its own.',
      },
      {
        label: 'the verb in brackets',
        head: 'Find the verb, then surround it',
        fr: `${frOf(WRAP[0].posId)} · ${frOf(WRAP[0].negId)}`,
        sub: `${sub('je suis')} · ${sub('je ne suis pas')}`,
        body: `${enOf(WRAP[0].posId)} becomes ${enOf(WRAP[0].negId)}. Suis is the verb, so ne went in front of it and pas went behind it. Fatigué did not move and nothing else in the sentence had to.`,
      },
      {
        label: 'why it is worth the two',
        head: 'Two halves, two chances to be heard',
        body: `A negative carried by one short word is a negative that can be missed, which is what happened in the corridor. Two words either side of the verb is harder to lose. ${REFRAME}`,
      },
    ],
  },

  {
    // POSITIVE LEFT, NEGATIVE RIGHT, ON ONE SCREEN. Four rows, two columns,
    // every row a pair the corpus authors as a pair. tapTable is NOT in
    // ownsLayout(), so this renders inside a scrolling page: each cell is one
    // short sentence and the teaching lives in the detail modal.
    //
    // NOTHING HERE HAS AN ARTICLE IN IT. That is deliberate and it is the
    // reason act 1 and act 3 are separate. A learner who meets the wrap and the
    // article change on the same screen cannot tell which step produced which
    // change, and the brief's own worry (fossilising `pas un`) is about exactly
    // that confusion. Act 1 shows the wrap with nothing else moving.
    type: 'tapTable',
    id: 's04-wrap',
    title: 'Before And After',
    frSub: 'Avant · après',
    layer: 'core',
    terms: ['theWrap'],
    sheetId: 'sheet.a1.18.procedure',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a1-18-wrap' },
    say: 'Read across a row. Two words arrived and nothing else in the sentence moved.',
    cols: ['what you already say', 'the same sentence, turned round'],
    rows: WRAP.map((p) => ({
      cells: [`${p.pos}\n${p.posEn}`, `${p.neg}\n${p.negEn}`],
      say: `${p.pos} ${p.neg}`,
      detail: {
        title: p.verb === 'être' ? 'The verb is être' : 'The verb is avoir',
        body: `${p.pos} ${p.neg} ${p.note}`,
        say: `${p.pos} ${p.neg}`,
      },
    })),
  },

  {
    type: 'groupDrill',
    id: 's05-both-verbs',
    title: 'Both Verbs, Same Two Words',
    frSub: 'Être et avoir',
    layer: 'core',
    terms: ['theWrap'],
    say: 'The only two verbs you can conjugate, and the wrap does not care which one it is.',
    groups: [
      {
        label: 'être, in three people',
        items: [
          { fr: frOf(WRAP[0].negId), itemId: WRAP[0].negId, en: enOf(WRAP[0].negId) },
          { fr: frOf(WRAP[1].negId), itemId: WRAP[1].negId, en: enOf(WRAP[1].negId) },
          { fr: frOf(WRAP[2].negId), itemId: WRAP[2].negId, en: enOf(WRAP[2].negId) },
        ],
        check: {
          q: 'Where does pas go in « Nous sommes prêts » when you turn it round?',
          opts: ['in front of nous', 'in front of sommes', 'straight after sommes', 'at the very end'],
          correct: 2,
          why: 'Straight after sommes. Pas goes behind the verb and ne goes in front of it, so the verb sits between them. Prêts is not the verb and never moves.',
        },
      },
      {
        label: 'avoir, and one published line',
        items: [
          { fr: frOf(WRAP[3].negId), itemId: WRAP[3].negId, en: enOf(WRAP[3].negId) },
          { fr: frOf('fr.a1.famille.234'), itemId: 'fr.a1.famille.234', en: enOf('fr.a1.famille.234') },
          { fr: frOf('fr.a1.rp-identite.027'), itemId: 'fr.a1.rp-identite.027', en: enOf('fr.a1.rp-identite.027') },
        ],
        check: {
          q: 'Which of these has the two words in the right places?',
          opts: [
            'Je pas ne suis fatigué.',
            'Je ne pas suis fatigué.',
            'Je ne suis pas fatigué.',
            'Je suis ne pas fatigué.',
          ],
          correct: 2,
          why: 'Ne in front of suis, pas behind it. The other three have both words on the same side of the verb, which is the shape English speakers reach for because English only has one word to place.',
        },
      },
      {
        label: 'in the wild, on être',
        items: [
          { fr: frOf('fr.a1.adjectifs-essentiels.187'), itemId: 'fr.a1.adjectifs-essentiels.187', en: enOf('fr.a1.adjectifs-essentiels.187') },
          { fr: frOf('fr.a1.mots-de-liaison.025'), itemId: 'fr.a1.mots-de-liaison.025', en: enOf('fr.a1.mots-de-liaison.025') },
        ],
        check: {
          q: 'In « Ce chien n\'est pas méchant », what is sitting between the two words?',
          opts: ['ce chien', 'est', 'méchant', 'chien'],
          correct: 1,
          why: 'Est, and it is the verb. Everything else in the sentence is outside the brackets. Finding the verb is the whole of the first step, and on être and avoir it is always the second word or close to it.',
        },
      },
      {
        // A groupDrill control page carries items: [] explicitly and no size.
        label: 'the procedure',
        items: [],
        check: {
          q: 'You have a sentence and you want to turn it round. What do you look for first?',
          opts: [
            'the little word in front of the noun',
            'the verb',
            'the last word in the sentence',
            'whether the sentence is about you',
          ],
          correct: 1,
          why: `The verb, every time, because both words are placed relative to it and nothing else in the sentence tells you where they go. ${REFRAME}`,
        },
      },
    ],
  },

  /* ══ Act 2: in front of a vowel ══════════════════════════════════════════
   *
   * TWO SECTIONS, NOT AN ACT'S WORTH, AND THAT IS DELIBERATE.
   *
   * The brief gives this an act and calls it "the third time they meet this
   * pressure". It is at least the fourth, and sons.07 "L'élision" already owns
   * it outright: a card headed "ne becomes n'", an errorSpot on « je ne aime
   * pas », and four quiz questions whose answers are `n'ai`, « Je n'ai pas
   * d'argent. », « je n'aime pas » and « ce n'est pas ». Its own why-line reads
   * "ne is on the list, so it elides before a vowel".
   *
   * Re-deriving it would tell a learner who has already been taught it that
   * they had not. These two sections name the earlier lesson, apply the rule
   * to the two verbs, and move on.                                            */

  {
    type: 'cardDeck',
    id: 's06-elision',
    title: 'You Already Have This Rule',
    frSub: "ne devient n'",
    hint: 'Three cards, and none of the ideas in them is new.',
    render: 'deck',
    layer: 'core',
    size: 'lg',
    terms: ['theWrap'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a1-18-elision' },
    say: 'One old rule arriving on a new word. The elision lesson taught this and it has not changed.',
    cards: [
      {
        label: 'the collision',
        head: 'ne ai is not something French will say',
        fr: `${frOf(NE)} · ${frOf("fr.a1.negation-et-restriction.050")}`,
        sub: `${sub('ne')} · ${sub("je n'ai pas")}`,
        body: 'Ne ends in a vowel and ai starts on one, and two vowel sounds meeting head on is something the language will not do. You watched it refuse exactly this in the elision lesson, on le and la and je.',
      },
      {
        label: 'the repair',
        head: "ne loses its e and takes an apostrophe",
        fr: frOf(WRAP[1].negId),
        sub: `${sub("il n'est pas")} · ${enOf(WRAP[1].negId)}`,
        body: 'Exactly what happened to le and la. The word is cut short and an apostrophe marks where the vowel went. Ne is on the elision lesson\'s list alongside je, me, te, se, de and que, and behaves like all of them.',
      },
      {
        label: 'when it does not happen',
        head: 'A consonant in front, and nothing changes',
        fr: `${frOf(WRAP[0].negId)} · ${frOf('fr.a1.negation-et-restriction.002')}`,
        sub: `${frOf('fr.a1.negation-et-restriction.006')} · all three start on a consonant`,
        body: 'Suis, parle and habitons all start on consonants, so ne keeps its e and there is nothing to write. The rule fires on the sound at the start of the verb and nowhere else. The last two use verbs to read rather than say.',
      },
    ],
  },

  {
    type: 'tapTable',
    id: 's07-elision-table',
    title: 'Which Ones Cut Short',
    frSub: "ne ou n'",
    layer: 'core',
    terms: ['theWrap'],
    sheetId: 'sheet.a1.18.procedure',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a1-18-elision' },
    say: 'Four verbs. Two start on a vowel and two do not, and that is the whole test.',
    // THE ENGLISH IS ON THE CELL, not one tap away in the detail modal.
    //
    // a1.16 shipped a two-column table whose cells were four pairs of FRENCH
    // phrases with the meanings in the detail. It passed every assertion,
    // because strings(section) contained them, and on a Pixel 6 it read as four
    // contrasts the learner had to take on trust and a tap. An assertion over
    // strings(section) cannot tell "on the screen" from "one tap away".
    //
    // TapTableView draws a cell as one <TX>, so \n renders as a second line.
    cols: ['the verb starts on', 'what you write'],
    rows: [
      {
        cells: ['suis, a consonant', `${frOf(WRAP[0].negId)}\n${enOf(WRAP[0].negId)}`],
        say: frOf(WRAP[0].negId),
        detail: {
          title: 'ne keeps its e',
          body: `${frOf(WRAP[0].negId)} No collision, so nothing is cut. This is the shape most of the time, because most French verbs start on a consonant.`,
          say: frOf(WRAP[0].negId),
        },
      },
      {
        cells: ['est, a vowel', `${frOf(WRAP[1].negId)}
${enOf(WRAP[1].negId)}`],
        say: frOf(WRAP[1].negId),
        detail: {
          title: "ne becomes n'",
          body: `${frOf(WRAP[1].negId)} Est starts on a vowel sound, so ne is cut short exactly as le and la were in the elision lesson.`,
          say: frOf(WRAP[1].negId),
        },
      },
      {
        cells: ['ai, a vowel', `${frOf(COLLAPSE[0].negId)}
${enOf(COLLAPSE[0].negId)}`],
        say: frOf(COLLAPSE[0].negId),
        detail: {
          title: 'the same cut, on avoir',
          body: `${frOf(COLLAPSE[0].negId)} Four of the six forms of avoir start on a vowel, so this is the shape you will write most often with that verb.`,
          say: frOf(COLLAPSE[0].negId),
        },
      },
      {
        cells: ['de, in front of a vowel', `${frOf('fr.a1.presentation-personnelle.049')}
${enOf('fr.a1.presentation-personnelle.049')}`],
        say: frOf('fr.a1.presentation-personnelle.049'),
        detail: {
          title: "de becomes d' as well",
          body: `${frOf('fr.a1.presentation-personnelle.049')} ${enOf('fr.a1.presentation-personnelle.049')} The same rule on the other side of the sentence. De is on the same list as ne and cuts short in front of a vowel for the same reason.`,
          say: frOf('fr.a1.presentation-personnelle.049'),
        },
      },
    ],
  },

  /* ══ Act 3: what happens to the little word ══════════════════════════════
   *
   * REVISION, AND IT SAYS SO. a1.11, a1.29 and a1.07 have all taught this.
   * Three sections, and the job here is to let the learner RUN it rather than
   * read it again, so act 4 has something to be a contrast with.              */

  {
    type: 'cardDeck',
    id: 's08-collapse',
    title: 'The Part You Already Know',
    frSub: 'un, une, des → de',
    hint: 'Four cards, and three lessons have been here before you.',
    render: 'deck',
    layer: 'core',
    size: 'lg',
    terms: ['theVerbDecides', 'whatNeverMoves'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a1-18-collapse' },
    say: 'You have met this three times. It is here so you can run it rather than read it.',
    cards: [
      {
        // THE RECONCILIATION CARD. Three lessons taught this rule and naming
        // them is what stops this act reading as a repeat. a1.09 opens by
        // naming a1.08 for the same reason.
        label: 'where you met it',
        head: 'Three lessons have taught you this',
        fr: frOf('fr.a1.famille.246'),
        sub: `${enOf('fr.a1.famille.246')}`,
        body: 'The lesson on un and une, the one on du and de la, and the one on avoir all taught this: a un, une or des turns into de once a negative arrives. That rule is right and nothing here changes it.',
      },
      {
        label: 'the whole rule',
        head: 'un, une, des, du and de la all become de',
        fr: `${frOf(COLLAPSE[1].posId)} · ${frOf(COLLAPSE[1].negId)}`,
        sub: `${sub('une voiture')} · ${enOf(COLLAPSE[1].negId)}`,
        body: 'One word, de, whatever it replaced. There is no feminine version of it and no plural version of it, which makes this the easiest thing in the lesson to get right once you remember to do it at all.',
      },
      {
        label: 'in the wild',
        head: 'Published French does it constantly',
        fr: `${frOf('fr.a1.cuisine.264')} · ${frOf('fr.a1.au-restaurant.189')}`,
        sub: `${enOf('fr.a1.cuisine.264')} · ${enOf('fr.a1.au-restaurant.189')}`,
        body: 'Both of those had du or de la in them before the negative arrived, and both came out with de. The verb is one you have not learned yet, so read these rather than trying to say them.',
      },
      {
        // The four published rows that used to sit in a FOURTH ROW of
        // s09-collapse-table, under column headers reading "what you already
        // say | the same sentence, turned round". All four are NEGATIVES, so
        // the left column was promising a positive and showing a negative.
        // Found by rendering the table on paper rather than by any assertion.
        // A cardDeck shows them with their English and no column is lying.
        label: 'on avoir, in the wild',
        head: 'Somebody else did the same two steps',
        fr: `${frOf('fr.a1.objets.153')} · ${frOf('fr.a1.negation-et-restriction.021')}`,
        sub: `${enOf('fr.a1.objets.153')} · ${enOf('fr.a1.negation-et-restriction.021')}`,
        body: `${frOf('fr.a1.douane-et-immigration.188')} ${frOf('fr.a1.negation-et-restriction.022')} Two more, one on nous and one on a verb you only read. Each wrapped a verb and then collapsed a little word.`,
      },
      {
        label: 'the second step',
        head: 'It is a second step, and that is the point',
        body: `Turning the sentence round did not do this on its own. You wrapped the verb, and then something else had to change. ${REFRAME}`,
      },
    ],
  },

  {
    type: 'tapTable',
    id: 's09-collapse-table',
    title: 'Both Changes, One Screen',
    frSub: 'Deux changements',
    layer: 'core',
    terms: ['theVerbDecides'],
    sheetId: 'sheet.a1.18.procedure',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a1-18-collapse' },
    // THE LAYOUT THE BRIEF ASKS FOR BY NAME: "J'ai un frère → Je n'ai pas de
    // frère is a PAIR, so give it two columns on one screen. Positive left,
    // negative right, with BOTH changes visible at once." Split across two
    // missions, a learner sees the wrap in one and the article change in
    // another and cannot connect them. The batch, the merge and the test all
    // assert that this section carries a positive with `un`/`une`/`des` and its
    // own negative with `de`.
    say: 'Positive on the left, negative on the right, and two things are different in every row.',
    cols: ['what you already say', 'the same sentence, turned round'],
    rows: [
      ...COLLAPSE.map((p) => ({
        cells: [`${p.pos}\n${p.posEn}`, `${p.neg}\n${p.negEn}`],
        say: `${p.pos} ${p.neg}`,
        detail: {
          title: 'Two things changed',
          body: `${p.pos} ${p.neg} ${p.note}`,
          say: `${p.pos} ${p.neg}`,
        },
      })),
    ],
  },

  {
    type: 'cardDeck',
    id: 's10-nothing',
    title: 'When There Was Nothing To Change',
    frSub: 'Rien à enlever',
    hint: 'Three cards on the half nobody teaches.',
    render: 'deck',
    layer: 'core',
    size: 'lg',
    terms: ['theVerbDecides'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a1-18-collapse' },
    say: 'A de only turns up where something had to be taken away. Sometimes nothing was there.',
    cards: [
      {
        label: 'the case',
        head: 'Some sentences have no little word at all',
        fr: `${frOf(WRAP[3].posId)} · ${frOf(WRAP[3].negId)}`,
        sub: `${sub("j'ai")} · ${enOf(WRAP[3].negId)}`,
        body: 'Soif never had a word in front of it, so the negative had nothing to take away and nothing to replace. It is pas soif and never pas de soif. The avoir lesson taught this on faim and it is the same fact.',
      },
      {
        label: 'the one you have already used',
        head: 'The avoir lesson got here first',
        fr: `${frOf('fr.a1.famille.234')} · ${frOf('fr.a1.negation-et-restriction.023')}`,
        sub: `${enOf('fr.a1.famille.234')} · ${enOf('fr.a1.negation-et-restriction.023')}`,
        body: 'Both of those are published and both are in the group of expressions avoir uses without any word in front. There was nothing to collapse, so there is no de, and adding one is the rule applied a noun too far.',
      },
      {
        label: 'backwards',
        head: 'The de tells you what was there',
        body: 'This works in reverse and it is worth having. If a de turned up, the sentence had a un, une or des in it. If nothing turned up, it had le, la or les, or it had nothing there at all.',
      },
    ],
  },

  /* ══ Act 4: the verb decides ═════════════════════════════════════════════
   *
   * THE LESSON. Five sections, and every one of them is content the corpus
   * cannot supply and no other unit teaches.
   *
   * a1.06 taught être across twenty-six sections and negated it zero times.
   * « ne suis pas un », « ne suis pas une », « n'es pas un », « n'es pas une »
   * and « ne sont pas des » each return ZERO published rows; « n'est pas un »
   * returns one, a spelling contrast at sons level, and « n'est pas une »
   * returns one at C1. Two usable-adjacent rows in 47,444.                     */

  {
    // ═══ THE SCREEN THIS LESSON IS JUDGED ON ═══
    //
    // ONE NOUN. THREE ROWS. THE SAME LITTLE WORD IN TWO OF THEM, AND THE ANSWER
    // IS DIFFERENT EVERY TIME.
    //
    // The brief asks for it by name: "Je n'ai pas de livre against Ce n'est pas
    // un livre is the second PAIR and it needs its own two columns. Same noun,
    // same article, one becomes de and one does not, and the only difference is
    // the verb."
    //
    // The third row is `le`, which the brief puts elsewhere. It belongs here:
    // with all three on one screen the learner can see that the article is not
    // what predicts the answer, which is the only way the `survives` rows read
    // as a system rather than as two exceptions to memorise.
    //
    // Every cell is a corpus row and the three pairs are read from the
    // `contrast-livre` tag, so this cannot be reordered into disagreement with
    // the rows it displays.
    type: 'tapTable',
    id: 's11-one-noun',
    title: 'One Word, Three Answers',
    frSub: 'Le même mot, trois fois',
    layer: 'core',
    terms: ['theVerbDecides', 'whatNeverMoves'],
    sheetId: 'sheet.a1.18.outcomes',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a1-18-onenoun' },
    say: `The same noun in all three rows. ${REFRAME}`,
    cols: ['what you already say', 'the same sentence, turned round'],
    rows: CONTRAST_LIVRE.map((p) => ({
      cells: [`${p.pos}\n${p.posEn}`, `${p.neg}\n${p.negEn}`],
      say: `${p.pos} ${p.neg}`,
      detail: {
        title:
          p.outcome === 'collapses' ? 'avoir, and un became de'
            : p.outcome === 'survives-definite' ? 'avoir, and le did not move'
              : 'être, and un did not move either',
        body: `${p.pos} ${p.neg} ${p.note}`,
        say: `${p.pos} ${p.neg}`,
      },
    })),
  },

  {
    type: 'cardDeck',
    id: 's12-etre',
    title: 'After Être, Nothing Moves',
    frSub: "Ce n'est pas un livre",
    hint: 'Four cards on the half of the rule nobody tells you.',
    render: 'deck',
    layer: 'core',
    size: 'lg',
    terms: ['theVerbDecides'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a1-18-etre' },
    say: 'The rule you have just used three times has a verb it does not apply to.',
    cards: [
      {
        label: 'the exception',
        head: 'un survives',
        fr: `${frOf(LIVRE_ETRE.posId)} · ${frOf(LIVRE_ETRE.negId)}`,
        sub: `${sub("ce n'est pas")} · ${enOf(LIVRE_ETRE.negId)}`,
        body: 'Wrap the verb and stop. The un is still there and nothing became de. Compare that with the first row of the screen before this one, where the same noun with the same word in front of it came out as de livre.',
      },
      {
        // BOTH HALVES OF BOTH PAIRS. An earlier version showed only the two
        // negatives, and a1-18-negation.test.ts caught it: the positives were
        // declared in itemIds, released by act 4's tranche, and drawn by
        // nothing. That is invariant §1's failure exactly, and a card claiming
        // an article "survived" without its positive beside it is asking the
        // learner to take the survival on trust.
        label: 'and une, and des',
        head: 'It reaches all of them',
        fr: `${frOf(ETRE_KEEPS[1].posId)} · ${frOf(ETRE_KEEPS[1].negId)}`,
        sub: `${frOf(ETRE_KEEPS[2].posId)} · ${frOf(ETRE_KEEPS[2].negId)}`,
        body: 'Une survived and des survived. It is not about the word ce or the phrase ce n\'est pas: it is about the verb, and it reaches every person of être you can conjugate.',
      },
      {
        label: 'why',
        head: 'The two sentences are doing different jobs',
        body: 'J\'ai un livre is about how many there are, and taking that away leaves nothing to count, which is what de marks. C\'est un livre is about what a thing IS, and saying it is not a book leaves you talking about books.',
      },
      {
        label: 'in the wild',
        head: 'You have already read one of these',
        fr: `${frOf('fr.a1.jours-et-mois.022')} · ${frOf('fr.a1.rp-identite.058')}`,
        sub: `${enOf('fr.a1.jours-et-mois.022')} · ${enOf('fr.a1.rp-identite.058')}`,
        body: 'Both start with ce n\'est pas and neither has anything collapsing behind it. This shape is everywhere in French and it is the single most useful thing in this lesson to be able to say without thinking.',
      },
    ],
  },

  {
    // THE cardDeck THE BRIEF ASKS FOR: "cardDeck for the three article
    // outcomes: un/une/des/du → de, after être → unchanged, le/la/les →
    // unchanged. Three cards, one rule each." cardDeck IS in ownsLayout() and
    // sizes itself.
    //
    // A FOURTH CARD IS ADDED and it is not padding: "there was nothing there in
    // the first place" is a genuinely distinct outcome, a1.07 teaches it, and a
    // learner with only three cards has nowhere to put « Je n'ai pas faim ».
    type: 'cardDeck',
    id: 's13-three-outcomes',
    title: 'Four Things That Can Happen',
    frSub: 'Quatre résultats',
    hint: 'One card per outcome, and the verb picks between them.',
    render: 'deck',
    layer: 'core',
    size: 'lg',
    terms: ['theVerbDecides', 'whatNeverMoves'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a1-18-onenoun' },
    say: 'Four outcomes. Look at the verb and you know which one you are in.',
    cards: [
      {
        label: 'avoir, and a un, une or des',
        head: 'It becomes de',
        fr: frOf(LIVRE_UN.negId),
        sub: `${sub('de livre')} · ${enOf(LIVRE_UN.negId)}`,
        body: 'The rule three lessons taught you. Un, une, des, du and de la all collapse to the one word, and de agrees with nothing so there is only ever one form of it.',
      },
      {
        label: 'être, and a un, une or des',
        head: 'It survives untouched',
        fr: frOf(LIVRE_ETRE.negId),
        sub: `${sub("ce n'est pas")} · ${enOf(LIVRE_ETRE.negId)}`,
        body: 'Nothing collapses after être. The same noun with the same word in front of it as the card above, and the only thing different between the two sentences is which verb is in them.',
      },
      {
        label: 'le, la or les, on any verb',
        head: 'They never move at all',
        fr: `${frOf(LIVRE_LE.negId)} · ${frOf('fr.a1.negation-et-restriction.025')}`,
        sub: `${sub('le livre')} · ${enOf(LIVRE_LE.negId)}`,
        body: `${enOf('fr.a1.negation-et-restriction.025')} is on a verb you cannot conjugate yet and it behaves identically. Le, la and les come through a negative unchanged whatever the verb was, and there is no case where they do not.`,
      },
      {
        label: 'nothing was there',
        head: 'Nothing to take away',
        fr: `${frOf(WRAP[3].negId)} · ${frOf('fr.a1.famille.234')}`,
        sub: `${enOf(WRAP[3].negId)} · ${enOf('fr.a1.famille.234')}`,
        body: `A handful of avoir expressions have no word in front of the noun to begin with, so there is nothing for the negative to reduce and no de. ${REFRAME}`,
      },
    ],
  },

  {
    // ═══ THE HERO. A TRANSFORMATION DRILL AT xl, WHERE IT OWNS THE LAYOUT. ═══
    //
    // The brief: "A transformation drill is the hero, and groupDrill is what it
    // is for. Give the learner a positive sentence and make them produce the
    // negative. This is a procedure lesson, so the learner must run the
    // procedure repeatedly rather than read it. At xl it owns the layout; at
    // any other size it does not, and that has shipped as a bug twice."
    //
    // xl HAS A PRICE AND IT DECIDES THE CONTENT. density.logic.ts reads `xl` as
    // a 12-word cap on every display string in the section. `say`, `why`,
    // `note`, `hint` and `back` are exempt; `q`, `opts`, `label`, `fr` and `en`
    // are not. So every question and every option below is under twelve words,
    // and the teaching sits in the `why`, which is where it can be long.
    //
    // AND: "An xl groupDrill must never stack words and a check in one group."
    // Each group here carries EITHER items OR a check, never both, which is the
    // shape accents-lesson.ts ships. Display group, control group, alternating.
    type: 'groupDrill',
    id: 's14-transform',
    title: 'Turn It Round',
    frSub: 'À vous',
    layer: 'core',
    size: 'xl',
    terms: ['theVerbDecides'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a1-18-onenoun' },
    say: 'Six sentences, and you run the same two steps on every one of them. Wrap the verb first, then look back at what you wrapped and decide whether anything else has to move.',
    groups: [
      {
        label: 'avoir, with a un',
        items: [{ fr: frOf(LIVRE_UN.posId), itemId: LIVRE_UN.posId, en: enOf(LIVRE_UN.posId) }],
      },
      {
        label: 'now turn it round',
        items: [],
        check: {
          q: 'Say you do not have one.',
          opts: [
            "Je n'ai pas un livre.",
            frOf(LIVRE_UN.negId),
            "Je ne pas ai de livre.",
            "J'ai ne pas de livre.",
          ],
          correct: 1,
          why: 'Both steps. Ne and pas went round ai, and then the un became de because the verb was avoir. Stopping after step one gives Je n ai pas un livre, which is understood perfectly and is the commonest error of a first year.',
        },
      },
      {
        label: 'être, with the same un',
        items: [{ fr: frOf(LIVRE_ETRE.posId), itemId: LIVRE_ETRE.posId, en: enOf(LIVRE_ETRE.posId) }],
      },
      {
        label: 'now turn that one round',
        items: [],
        check: {
          q: 'Say it is not one.',
          opts: [
            "Ce n'est pas de livre.",
            "Ce n'est pas livre.",
            frOf(LIVRE_ETRE.negId),
            "Ce ne pas est un livre.",
          ],
          correct: 2,
          why: 'The un stayed. Same noun as two screens ago and the same word in front of it, and this time nothing collapsed, because the verb was être. Reaching for de here is the older rule applied one verb too far.',
        },
      },
      {
        label: 'avoir, with a le',
        items: [{ fr: frOf(LIVRE_LE.posId), itemId: LIVRE_LE.posId, en: enOf(LIVRE_LE.posId) }],
      },
      {
        label: 'and that one',
        items: [],
        check: {
          q: 'Say you do not have it.',
          opts: [
            "Je n'ai pas de livre.",
            frOf(LIVRE_LE.negId),
            "Je n'ai pas du livre.",
            "Je n'ai pas de le livre.",
          ],
          correct: 1,
          why: 'Le never moves. The verb was avoir, which does collapse things, and it still did not touch this one, because only un, une, des, du and de la ever collapse. That is the half of the rule with no exceptions in it at all.',
        },
      },
      {
        label: 'the two steps',
        items: [],
        check: {
          q: 'What tells you whether the little word changes?',
          opts: [
            'which little word it is',
            'the verb, and the little word',
            'whether the sentence is about you',
            'how long the sentence is',
          ],
          correct: 1,
          why: `Both, in that order. The verb decides whether anything can change at all, and the little word decides whether it is one of the five that do. ${REFRAME}`,
        },
      },
    ],
  },

  {
    type: 'commonErrors',
    id: 's15-traps',
    // `swipe` and `size` are not decoration. MissionSection renders
    // commonErrors as its own swipe deck ONLY when `swipe` is set; without it
    // the section falls through to a path that drew a BLANK screen on a1.01 m5.
    swipe: true,
    size: 'lg',
    title: 'Five Traps',
    frSub: 'Cinq pièges',
    layer: 'core',
    terms: ['theVerbDecides', 'theWrap', 'nonAgainstNe'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a1-18-traps' },
    say: `${REFRAME} Five sentences an English speaker writes in their first month, one per screen.`,
    errors: [
      {
        wrong: "Writing « Je n'ai pas un frère ».",
        right: `Writing « ${frOf(COLLAPSE[0].negId)} ».`,
        why: 'The wrap was done and the second step was not. This is the single most common A1 negation error in the language and it survives because it is understood perfectly: nobody stops you, and it simply marks you as new.',
      },
      {
        wrong: "Writing « Ce n'est pas de livre ».",
        right: `Writing « ${frOf(LIVRE_ETRE.negId)} ».`,
        why: 'The opposite mistake, and it comes from taking the rule seriously. After être nothing collapses, so the un stays exactly where it was. A learner who has just been drilled on de is more likely to write this, not less.',
      },
      {
        wrong: 'Writing « Je ne ai pas de temps ».',
        right: "Writing « Je n'ai pas de temps ».",
        why: 'Ne and ai are two vowels meeting, which French will not do. The elision lesson put ne on its list alongside je, me, te, se, de and le, and it cuts short here for exactly the reason those do.',
      },
      {
        wrong: "Writing « Je n'aime pas de café ».",
        right: `Writing « ${frOf('fr.a1.negation-et-restriction.025').replace('Il', 'Je').replace("n'aime", "n'aime")} ».`,
        why: 'Le, la and les never collapse, on any verb. The de rule reaches un, une, des, du and de la and stops there, so a le in the sentence comes through the negative completely untouched.',
      },
      {
        wrong: 'Writing « Je non ai pas de voiture ».',
        right: `Writing « ${frOf(COLLAPSE[1].negId)} ».`,
        why: 'Non answers a question and never goes inside a sentence. Ne goes inside a sentence and never answers a question. English uses one word for both jobs, which is the whole reason this happens.',
      },
    ],
  },

  /* ══ Act 5: what you will actually hear ══════════════════════════════════ */

  {
    type: 'cardDeck',
    id: 's16-dropped',
    title: 'The Half That Disappears',
    frSub: 'Le ne qui saute',
    hint: 'Four cards, and none of them asks you to say anything.',
    render: 'deck',
    layer: 'core',
    size: 'lg',
    terms: ['whatYouWillHear'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a1-18-dropped' },
    // RECOGNITION ONLY, AND IT IS SAID ON THE CARDS AS WELL AS ENFORCED.
    // fr.a1.negation-et-restriction.069 appears here, in the listening section,
    // in the reading passage and in the review deck, and on NO produce surface:
    // no speak mission, no dictée, no typeIn accept list, no drill answer key.
    // The batch, the merge and the test all check it BY ID.
    say: 'One card you need to recognise and never write. The written form keeps both halves.',
    cards: [
      {
        label: 'what is written',
        head: 'Both halves, every time',
        fr: frOf(ORAL.negId),
        sub: `${sub("je n'ai pas de chien")} · ${enOf(ORAL.negId)}`,
        body: 'This is what you write, what you will be marked on, and what you should say while you are still working out where the two words go. Nothing about it is formal or old-fashioned. It is simply the sentence.',
      },
      {
        label: 'what is said',
        head: 'The ne goes, and it goes constantly',
        fr: frOf(DROPPED_NE.id),
        sub: `${sub("j'ai pas de chien")} · the same sentence, out loud`,
        body: 'In ordinary speech the ne is very often just not said, by everybody, all the time. This is not slang and not carelessness. It is what the language does at conversational speed, and half of what you hear will be this shape.',
      },
      {
        label: 'why it matters to you',
        head: 'One short word left carrying everything',
        fr: `${frOf(ORAL.posId)} · ${frOf(DROPPED_NE.id)}`,
        sub: `${sub('un chien')} · one word between them`,
        body: 'With the ne gone, the difference between having a dog and not having one is a single unstressed syllable. Miss it and you hear agreement. That is the corridor from the opening scene and it is the reason this card exists.',
      },
      {
        label: 'what to do',
        head: 'Hear it. Do not write it.',
        fr: frOf('fr.a1.argot-du-quotidien.042'),
        sub: `${enOf('fr.a1.argot-du-quotidien.042')} · published, and this shape is everywhere`,
        body: 'Learn to catch it, because you cannot follow a conversation without it. Keep writing and saying the full form yourself: the written language keeps the ne every time, and while your pas is still not landing, the ne is what saves the sentence.',
      },
    ],
  },

  {
    type: 'listening',
    id: 's17-ear',
    title: 'The One Your Ear Can Miss',
    frSub: "À l'oreille",
    layer: 'core',
    terms: ['whatYouWillHear', 'theWrap'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a1-18-dropped' },
    // ONE GENUINE EAR QUESTION AND THE BRIEF NAMES IT: "listenChoose has one
    // excellent job: the dropped ne. J'ai pas de chien against J'ai un chien is
    // a real ear question with real stakes, and it is the only place the
    // learner's comprehension actually fails. Do not write ear questions on
    // ne… pas itself, which is unmissable when spoken carefully."
    //
    // So the first two lines are here to say out loud that the full written
    // form is easy to hear, and the third is the one that is not. No
    // listenChoose question in the quiz asks about a carefully-spoken ne… pas,
    // and the test asserts it.
    say: 'Three pairs. Two of them your ear does without help, and the third is the one that costs you conversations.',
    lines: [
      { fr: `${frOf(WRAP[0].posId)} · ${frOf(WRAP[0].negId)}`, en: 'two extra syllables, and nobody misses this one' },
      { fr: `${frOf(LIVRE_UN.posId)} · ${frOf(LIVRE_UN.negId)}`, en: 'the written negative, and it is comfortably audible' },
      { fr: `${frOf(ORAL.posId)} · ${frOf(DROPPED_NE.id)}`, en: 'this pair is one short unstressed word apart, and that is the whole of it' },
    ],
    questions: [
      {
        q: 'Which of these is hardest to catch at conversational speed?',
        opts: [
          'a negative with both halves in it',
          'a negative with the ne dropped',
          'a positive sentence',
          'they are all equally hard',
        ],
        correct: 1,
        why: 'A negative with the ne dropped, and it is not close. The full form adds two syllables in front of the verb and one behind it. Drop the ne and one short unstressed word behind the verb is carrying the entire meaning of the sentence.',
      },
      {
        q: 'You hear « J\'ai pas de chien ». What did the speaker mean?',
        opts: [
          'they have a dog',
          'they do not have a dog',
          'they used to have a dog',
          'it is not clear either way',
        ],
        correct: 1,
        why: 'They do not have one. The pas is doing all the work and it is a complete, ordinary negative. Nothing about the missing ne makes the sentence uncertain to a French speaker; it only makes it harder for you.',
      },
      {
        q: 'Should you drop the ne when you write?',
        opts: [
          'yes, it is more natural',
          'no, writing keeps both halves',
          'only in short sentences',
          'only after avoir',
        ],
        correct: 1,
        why: 'Writing keeps both halves every time. The dropped ne belongs to speech, and while you are still placing the two words it is worth saying the full form too, because it gives the sentence a second word carrying the same meaning.',
      },
    ],
  },

  {
    type: 'cardDeck',
    id: 's18-non-plus',
    title: 'Answering, And Agreeing',
    frSub: 'Non, et moi non plus',
    hint: 'Three cards that make this conversational rather than mechanical.',
    render: 'deck',
    layer: 'core',
    size: 'lg',
    terms: ['nonAgainstNe'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a1-18-non' },
    say: 'Two words for no doing two different jobs, and one reply that makes a negative into a conversation.',
    cards: [
      {
        label: 'non answers',
        head: 'non stands on its own',
        fr: frOf(NON),
        sub: `${sub('non')} · no`,
        body: 'Non is the answer to a question and that is all it does. Tu as un chien ? Non. It never goes inside a sentence and there is no version of French where je non ai pas is a thing anybody would finish saying.',
      },
      {
        // BOTH published rows that carry non AND ne in one sentence. The second
        // was declared in itemIds and released by act 5's tranche while being
        // drawn by nothing until a1-18-negation.test.ts said so.
        label: 'ne wraps',
        head: 'ne never stands on its own',
        fr: frOf('fr.a1.rp-identite.057'),
        sub: `${frOf('fr.a1.expressions-frequentes.029')} · ${enOf('fr.a1.rp-identite.057')}`,
        body: 'Both words in one line, a few apart, doing completely different jobs. Non answers the question that was asked and then ne wraps the verb of the sentence that follows. English uses one word for both.',
      },
      {
        label: 'the reply',
        head: 'moi non plus',
        fr: frOf('fr.a1.expressions-utiles.095'),
        sub: `${sub('moi non plus')} · ${enOf('fr.a1.expressions-utiles.095')}`,
        body: 'Somebody says they do not like something and you agree. Moi non plus is me neither, and it is the reply that turns a negative into an exchange rather than a statement. Note that le café did not collapse: le never does.',
      },
    ],
  },

  {
    type: 'reading',
    id: 's19-reading',
    title: 'The Flat Viewing',
    frSub: 'La visite',
    layer: 'core',
    terms: ['theVerbDecides', 'whatYouWillHear', 'whatNeverMoves'],
    // REQUIRED for the glossary to exist at all. MissionSection routes a
    // reading section to ReadingMission (and so to PassagePage, which draws the
    // underlines) only when this flag is set WITH questions.
    questionsInModal: true,
    say: 'Six sentences, and three of them turn on whether a little word survived.',
    // Paul's A1 rule: anything not inside « » is in English. ONE BLOCK, NO LINE
    // BREAKS. PassagePage splits on /(?<=[.!?»])\s+/ and an authored newline is
    // consumed as whitespace and silently discarded.
    //
    // No glossary entry is a prefix or substring of another, and none is five
    // words or longer: MAX_GLOSS_WORDS is four and longest-match-first means a
    // short entry sitting inside a longer one underlines nothing.
    text:
      'Somebody is being shown a flat and the agent is working through a list of questions, and between them the two of them use most of what this lesson has covered. '
      + '« Vous avez une voiture ? » '
      + 'The answer comes back with both halves of the negative in it, which is what you would write. '
      + '« Je n\'ai pas de voiture. » '
      + 'The un turned into de, because the verb was avoir and something had to go. '
      + 'Then the agent points at a door at the end of the hall and says something about it. '
      + '« Ce n\'est pas un placard. » '
      + 'Nothing collapsed there at all, and the only difference between that sentence and the one before it is the verb sitting in the middle of it. '
      + 'A neighbour has come in behind them and is talking to somebody on the stairs, quickly and without any ne anywhere. '
      + '« J\'ai pas de chien. » '
      + 'That is the same shape as the first answer with one word missing, and it is what you will hear far more often than the written one. '
      + 'The agent finishes with a question about the coffee machine on the landing and gets the shortest answer of the morning. '
      + '« Je n\'aime pas le café. »',
    glossary: [
      { word: "n'ai pas de voiture", en: 'do not have a car', note: 'The verb was avoir, so the une became de. Two things changed and neither one was optional.' },
      { word: "n'est pas un placard", en: 'is not a cupboard', note: 'The verb was être, so the un survived. Same shape as the line above it and the opposite answer.' },
      { word: "j'ai pas de chien", en: 'I do not have a dog', note: 'The ne is gone, which is what happens in speech. Recognise it. The written form keeps both halves.' },
      { word: "n'aime pas le café", en: 'do not like coffee', note: 'Le never collapses, on any verb. Aimer is a verb you have not learned yet, so read this rather than saying it.' },
    ],
    questions: [
      { q: 'Two of those sentences have the same little word in front of the same kind of thing, and only one of them changed. What separates them?', a: 'The verb. Je n ai pas de voiture is avoir, so the une collapsed to de. Ce n est pas un placard is être, so the un stayed exactly where it was. Nothing else in either sentence decides it, and both are completely ordinary French.' },
      { q: 'The neighbour on the stairs said something without a ne in it. Was that a mistake?', a: 'No. Dropping the ne is what ordinary spoken French does, by everybody, constantly. It is not slang and it is not careless. What it means for you is that the whole negative is riding on one short unstressed word, so it is much easier to miss than the written form. Keep writing the full one.' },
      { q: 'Why did le café not become de café?', a: 'Because le, la and les never collapse under a negative, whatever the verb is. Only un, une, des, du and de la ever do. That asymmetry is useful backwards as well: if a de turned up in a sentence, it had one of those five in it before the negative arrived.' },
    ],
  },

  /* ══ Act 6: prove it ═════════════════════════════════════════════════════ */

  {
    type: 'vocabThemes',
    id: 's20-words',
    title: 'The Pieces, Banked',
    frSub: 'Le vocabulaire',
    layer: 'core',
    terms: ['theWrap', 'theVerbDecides', 'nonAgainstNe'],
    sheetId: 'sheet.a1.18.outcomes',
    say: 'Three decks. The words that do the wrapping, what the little word turns into, and the two ways to say no.',
    themes: [
      {
        title: 'the two halves of the wrap',
        cards: [
          { fr: 'ne', sub: sub('ne'), en: 'the first half, in front of the verb' },
          { fr: "n'", sub: sub("n'"), en: 'the same word when a vowel follows it' },
          { fr: 'pas', sub: sub('pas'), en: 'the second half, behind the verb' },
        ],
      },
      {
        title: 'what the little word becomes',
        cards: [
          { fr: 'de', sub: sub('de'), en: 'what un, une, des, du and de la turn into' },
          { fr: "d'", sub: sub("d'"), en: 'the same de in front of a vowel' },
          { fr: 'le livre', sub: sub('le livre'), en: 'le, la and les never move at all' },
          { fr: 'un livre', sub: sub('un livre'), en: 'and after être, neither does this' },
        ],
      },
      {
        title: 'the two ways to say no',
        cards: [
          { fr: 'non', sub: sub('non'), en: 'answers a question, and stands on its own' },
          { fr: 'moi non plus', sub: sub('moi non plus'), en: 'me neither, the reply to somebody else\'s negative' },
        ],
      },
    ],
  },

  {
    type: 'flashcards',
    id: 's21-flash',
    title: 'Flip and Recall',
    frSub: 'Retournez la carte',
    render: 'deck',
    layer: 'core',
    say: 'English on the front. Say the French before you flip, and run both steps.',
    cards: [
      ...PAIRS.map((p) => ({ front: p.negEn, back: p.neg, say: p.neg })),
      { front: 'no, answering a question', back: 'non', say: 'non' },
      { front: 'me neither', back: 'moi non plus', say: 'moi non plus' },
    ],
  },

  {
    type: 'dictation',
    id: 's22-dictation',
    title: 'Put Them In The Right Places',
    frSub: 'La dictée',
    layer: 'core',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], maxPlays: 4 },
    // WORD MODE, DELIBERATELY, and it is the opposite of a1.17's choice. Every
    // target here is over 16 letters and more than one word, so dicteeMode
    // returns 'words' and the learner is handed the sentence's own words plus
    // decoys to assemble. That is an ORDER exercise, which is exactly the first
    // step of this lesson: ne in front of the verb, pas behind it. Letters mode
    // would test spelling, which this lesson does not teach. Measured through
    // the real dicteeMode in the batch, the merge and the test.
    say: 'Five lines. You are placing two words either side of a verb, which is the whole of the first step.',
    itemIds: DICTATION_IDS,
  },

  {
    type: 'practice',
    id: 's23-speak',
    title: 'Say It Out Loud',
    frSub: 'À voix haute',
    layer: 'core',
    audio: { mode: 'mic', lang: 'fr-FR' },
    // NOT ONE LINE HERE DROPS ITS ne, and not one uses a verb outside être and
    // avoir. Both are checked by id rather than by string in the batch, the
    // merge and the test. `practice.skill` is authored and read by no
    // component: PracticeVFView takes itemIds and nothing else.
    say: 'Every line keeps both halves of the wrap, which is what you should be saying while this is still new.',
    skill: 'speak',
    itemIds: SPEAK_IDS,
  },

  {
    type: 'scenario',
    id: 's24-scenario',
    title: 'The Same Corridor, Going Better',
    frSub: 'Le même couloir',
    layer: 'core',
    terms: ['theWrap', 'theVerbDecides'],
    say: 'One exchange and you hold up your half. Every turn you take is a negative with both halves in it.',
    setting: 'The same corridor, a week later. Salomé is reallocating the spaces and this time you are ready.',
    // Every turn carries `userEn` and at least two `alts`, which
    // scenario.logic.ts requires of the whole seed. Apostrophes are straight
    // throughout: the suite fails a conversation that mixes straight and curly
    // apostrophes in one bubble stack.
    turns: [
      {
        ai: 'Rebonjour ! Alors, vous avez une voiture ou pas ?',
        en: 'Hello again! So, do you have a car or not?',
        user: "Non, je n'ai pas de voiture.",
        userEn: 'No, I do not have a car.',
        // scenario.logic.ts rejects an alt that normalises to the model line,
        // and « Non. Je n'ai pas de voiture. » differs from the model only in
        // its punctuation. Both alts here are genuinely different sentences.
        alts: [
          { fr: "Je n'ai pas de voiture, non.", en: 'I do not have a car, no.' },
          { fr: "Non, je n'en ai pas.", en: 'No, I do not have one.' },
        ],
      },
      {
        ai: 'Ah, d\'accord. Et le velo dans le couloir, c\'est le votre ?',
        en: 'Ah, right. And the bike in the corridor, is that yours?',
        user: "Non, ce n'est pas mon velo.",
        userEn: 'No, that is not my bike.',
        alts: [
          { fr: "Ce n'est pas le mien, non.", en: 'It is not mine, no.' },
          { fr: "Non, ce n'est pas a moi.", en: 'No, that is not mine.' },
        ],
      },
      {
        ai: 'Bon. Vous etes en retard le matin, d\'habitude ?',
        en: 'Right. Are you usually late in the morning?',
        user: 'Non, je ne suis pas en retard.',
        userEn: 'No, I am not late.',
        alts: [
          { fr: 'Je ne suis pas en retard, non.', en: 'I am not late, no.' },
          { fr: 'Non. Je ne suis jamais tres en retard.', en: 'No. I am not usually very late.' },
        ],
      },
      {
        ai: 'Et les deux personnes du troisieme, ce sont vos collegues ?',
        en: 'And the two people from the third floor, are they your colleagues?',
        user: "Non, ce ne sont pas des collegues.",
        userEn: 'No, they are not colleagues.',
        alts: [
          { fr: "Ce ne sont pas mes collegues, non.", en: 'They are not my colleagues, no.' },
          { fr: "Non, je ne les connais pas.", en: 'No, I do not know them.' },
        ],
      },
      {
        ai: 'Parfait. Vous avez le badge du parking, alors ?',
        en: 'Perfect. Do you have the parking badge, then?',
        user: "Non, je n'ai pas le badge.",
        userEn: 'No, I do not have the badge.',
        alts: [
          { fr: "Je n'ai pas le badge, non.", en: 'I do not have the badge, no.' },
          { fr: "Non, je ne l'ai pas.", en: 'No, I do not have it.' },
        ],
      },
    ],
  },

  {
    type: 'reviewDeck',
    id: 's25-review',
    title: 'The Whole Thing, One Deck',
    frSub: 'Révision',
    render: 'deck',
    layer: 'core',
    terms: ['theWrap', 'theVerbDecides', 'whatNeverMoves'],
    say: 'Rate each card as again, hard or easy. The ones you mark again come back.',
    cards: [
      { front: 'Where do ne and pas go?', back: `${frOf(WRAP[0].negId)} Ne in front of the verb, pas behind it.`, say: frOf(WRAP[0].negId) },
      { front: '« Il est là. » Now say he is not.', back: `${frOf(WRAP[1].negId)} Est starts on a vowel, so ne is cut short.`, say: frOf(WRAP[1].negId) },
      { front: '« Nous sommes prêts. » Now say you are not.', back: frOf(WRAP[2].negId), say: frOf(WRAP[2].negId) },
      { front: '« J\'ai un frère. » Now say you do not.', back: `${frOf(COLLAPSE[0].negId)} avoir, so un became de.`, say: frOf(COLLAPSE[0].negId) },
      { front: '« J\'ai une voiture. » Now say you do not.', back: `${frOf(COLLAPSE[1].negId)} De agrees with nothing.`, say: frOf(COLLAPSE[1].negId) },
      { front: '« Elle a des enfants. » Now say she does not.', back: `${frOf(COLLAPSE[2].negId)} des became de, then de lost its e.`, say: frOf(COLLAPSE[2].negId) },
      { front: '« J\'ai un livre. » Now say you do not.', back: `${frOf(LIVRE_UN.negId)} avoir collapses it.`, say: frOf(LIVRE_UN.negId) },
      { front: '« J\'ai le livre. » Now say you do not.', back: `${frOf(LIVRE_LE.negId)} le never moves.`, say: frOf(LIVRE_LE.negId) },
      { front: '« C\'est un livre. » Now say it is not.', back: `${frOf(LIVRE_ETRE.negId)} être, so the un survives.`, say: frOf(LIVRE_ETRE.negId) },
      { front: '« Ce sont des amis. » Now say they are not.', back: `${frOf(ETRE_KEEPS[2].negId)} des survives after être too.`, say: frOf(ETRE_KEEPS[2].negId) },
      { front: '« J\'ai soif. » Now say you are not.', back: `${frOf(WRAP[3].negId)} Nothing was there, so no de.`, say: frOf(WRAP[3].negId) },
      { front: 'What decides whether the little word changes?', back: `${REFRAME} avoir collapses un, une and des. être leaves everything alone.`, say: frOf(LIVRE_ETRE.negId) },
      { front: 'You hear « J\'ai pas de chien ». What does it mean?', back: `${enOf(DROPPED_NE.id)} The ne is dropped in speech. Recognise it, and keep writing both halves.`, say: frOf(DROPPED_NE.id) },
      { front: 'Somebody says they do not like coffee. How do you agree?', back: 'Moi non plus. Me neither, and it is the reply that makes a negative into a conversation.', say: 'Moi non plus.' },
      { front: 'Can non go inside a sentence?', back: 'No. Non answers a question and ne wraps a verb, and they never swap jobs.', say: frOf('fr.a1.rp-identite.057') },
    ],
  },

  {
    type: 'progressCheck',
    id: 's26-progress',
    title: 'Where You Stand',
    frSub: 'Votre progression',
    // The prose carries no counts. Every figure is in `stats`, derived from the
    // journey itself, and saying a number twice on one card is two chances to
    // be wrong and one card that reads as padded.
    say: 'One screen before the exam, so you know what you are walking into.',
    body: 'You have watched a parking space go to the wrong person because one short word did not land in a loud corridor. Since then you have put two words either side of a verb on both of the verbs you can conjugate, watched one of them cut short in front of a vowel for a reason you already had, and run the rule about the little word that three earlier lessons taught you. Then you found the half of it nobody mentions: after être, nothing collapses at all, and the same noun with the same word in front of it comes out two different ways depending only on the verb. What is left tells you whether it stuck. Each round is tied to one of the mistakes this lesson exists to stop, and failing a round gets you its drill before the next one starts. The drill is the teaching, not the punishment.',
    // Filled immediately after SECTIONS is built, from the journey itself.
    stats: [],
  },

  {
    type: 'quiz',
    id: 's27-quiz',
    title: 'The Exam',
    frSub: "L'examen",
    layer: 'core',
    passMark: 70,
    roundFailThreshold: 60,
    say: 'Six rounds. Miss too many in a round and you get that round\'s drill before the next one starts.',
    // ── What this quiz can and cannot test, said plainly ────────────────────
    //
    // fold() strips accents, case, punctuation and ALL WHITESPACE, so « je n'ai
    // pas de frère », « Je n'ai pas de frere » and « jenaipasdefrere » all fold
    // together. THE APOSTROPHE IN n' IS THEREFORE UNTESTABLE by typeIn and by
    // errorSpot alike, because errorSpot runs the same matchesAccept -> fold()
    // path. No question below claims to test it. It is taught on s06 and s07
    // and left there.
    //
    // What fold() DOES keep is letters, so `de` against `un` against `le` is
    // genuinely testable by typeIn, and a transformation typed out tests both
    // steps at once. That is why typeIn is the largest format here, which is
    // unusual for this track.
    //
    // ── The runtime shuffle, which already ships ────────────────────────────
    //
    // QuizDeckView shuffles the options of every closed question, per question,
    // per attempt, and re-shuffles on retry. The authored `correct` index never
    // moves; only the display order is permuted. So:
    //
    //   - NO OPTION REFERS TO A POSITION. Checked in the batch, the merge and
    //     the test against a list of positional phrases.
    //   - NO OPTION IS DUPLICATED WITHIN A QUESTION. This lesson is exposed:
    //     the article answer space is `de / un / le / des` and repeats easily.
    //   - THE AUTHORED SLOTS ARE STILL SPREAD, because quiz-spread caps any one
    //     slot at 40% of closed questions regardless of the shuffle.
    //
    // ── The round that would otherwise certify a bug ────────────────────────
    //
    // r4 MIXES ÊTRE ITEMS WITH `de` ITEMS. The brief is exactly right that "a
    // learner can pass every article question by always answering `de` if you
    // never mix être items into the same round", and r4 is the round about the
    // article, so it is the round that has to be mixed. Two of its four answers
    // are `de` and two are a surviving article. The batch, the merge and the
    // test all assert it by walking the round's own answer keys.
    rounds: [
      {
        id: 'r1-two-words',
        label: 'Two words, one either side',
        // The FIRST target is the one whose drill fires: drillForRound walks a
        // round's targets and stops at the first that resolves. Every drill
        // this lesson authors is the first resolving target of exactly one
        // round, and the batch, the merge and the test all assert it.
        targets: ['err-half-a-wrap', 'err-no-elision'],
        say: 'The wrap, four times, on both verbs.',
        questions: [
          {
            q: 'Turn this round: « Je suis fatigué. »',
            format: 'typeIn',
            accept: ['Je ne suis pas fatigué.', 'je ne suis pas fatigue', 'ne suis pas fatigué'],
            answer: frOf(WRAP[0].negId),
            why: 'Ne in front of suis and pas behind it. Two words, one on each side of the verb, and fatigué never moves. This is the whole of the first step and it works on every sentence you can already make.',
            ref: 's03-two-words',
          },
          {
            q: 'Which one has both words in the right places?',
            format: 'mcq',
            opts: [
              'Nous ne pas sommes prêts.',
              'Nous sommes ne pas prêts.',
              frOf(WRAP[2].negId),
              'Nous pas ne sommes prêts.',
            ],
            correct: 2,
            why: 'Ne in front of sommes and pas behind it. The other three put both halves on the same side of the verb, which is the shape an English speaker reaches for because English has only one word to place.',
            ref: 's05-both-verbs',
          },
          {
            q: 'Fix this. « Je suis pas fatigué, mais je ne dors. »',
            format: 'errorSpot',
            accept: ['Je ne suis pas fatigué.', 'je ne suis pas fatigue', 'il manque ne'],
            answer: frOf(WRAP[0].negId),
            why: 'The first half is missing from the first sentence and the second half is missing from the last one. In writing both halves are needed every time, and neither one carries the meaning on its own.',
            ref: 's03-two-words',
          },
          {
            q: 'Turn this round: « J\'ai soif. »',
            format: 'typeIn',
            accept: ["Je n'ai pas soif.", 'je nai pas soif', 'pas soif'],
            answer: frOf(WRAP[3].negId),
            why: 'Wrap ai and stop. Soif never had a word in front of it, so there is nothing for the negative to take away and no de anywhere. The avoir lesson taught this on faim and it is the same fact arriving on a different word.',
            ref: 's10-nothing',
          },
        ],
      },
      {
        id: 'r2-in-front-of-a-vowel',
        label: 'In front of a vowel',
        targets: ['err-no-elision', 'err-half-a-wrap'],
        say: 'The rule the elision lesson already gave you.',
        questions: [
          {
            q: 'Which is written correctly?',
            format: 'mcq',
            opts: [
              frOf(COLLAPSE[0].negId),
              'Je ne ai pas de frère.',
              "Je n'ne ai pas de frère.",
              "J'ne ai pas de frère.",
            ],
            correct: 0,
            why: 'Ne and ai are two vowels meeting, so ne is cut short and an apostrophe marks where the e went. This is the same rule the elision lesson taught on je, me, te, se, de and le, and ne was on that list.',
            ref: 's06-elision',
          },
          {
            q: 'Fix this. « Il ne est pas là. »',
            format: 'errorSpot',
            accept: ["Il n'est pas là.", 'il nest pas la'],
            answer: frOf(WRAP[1].negId),
            why: 'Est starts on a vowel sound, so ne cannot keep its e in front of it. Note that the answer key cannot check the apostrophe itself: free text is compared with the punctuation stripped, so this question tests the letters and nothing else.',
            ref: 's07-elision-table',
          },
          {
            q: 'Why does ne keep its e in « Je ne suis pas fatigué »?',
            format: 'mcq',
            opts: [
              'because the sentence is about you',
              'because suis starts on a consonant',
              'because être never elides',
              'because fatigué is at the end',
            ],
            correct: 1,
            why: 'Suis starts on a consonant, so there is no collision and nothing to repair. The rule fires on the sound at the start of the verb and on nothing else, which is why it reaches ai and est and misses suis and sommes.',
            ref: 's07-elision-table',
          },
          {
            q: 'Turn this round: « Il est là. »',
            format: 'typeIn',
            accept: ["Il n'est pas là.", 'il nest pas la', "n'est pas là"],
            answer: frOf(WRAP[1].negId),
            why: 'Both steps of the wrap and the cut, in one sentence. Ne goes in front of est, loses its e because est starts on a vowel, and pas goes behind. Là is not the verb and does not move.',
            ref: 's06-elision',
          },
        ],
      },
      {
        id: 'r3-the-little-word',
        label: 'What happens to the little word',
        targets: ['err-keeps-the-article', 'err-half-a-wrap'],
        say: 'The rule three lessons taught you, on avoir.',
        questions: [
          {
            q: 'Turn this round: « J\'ai un frère. »',
            format: 'typeIn',
            accept: ["Je n'ai pas de frère.", 'je nai pas de frere', 'pas de frère'],
            answer: frOf(COLLAPSE[0].negId),
            why: 'Two steps. Ne and pas went round ai, and then the un became de. Doing only the first gives Je n ai pas un frère, which is understood perfectly and is the most common A1 negation error there is.',
            ref: 's09-collapse-table',
          },
          {
            q: 'Fix this. « Je n\'ai pas une voiture. »',
            format: 'errorSpot',
            accept: ["Je n'ai pas de voiture.", 'je nai pas de voiture', 'de voiture'],
            answer: frOf(COLLAPSE[1].negId),
            why: 'Une collapses to de behind a negative on avoir, exactly as un and des do. De agrees with nothing, so there is one form of it rather than three, which makes this the easiest part of the rule once you remember it at all.',
            ref: 's08-collapse',
          },
          {
            q: 'What does « Elle a des enfants » become?',
            format: 'mcq',
            opts: [
              "Elle n'a pas des enfants.",
              "Elle n'a pas de enfants.",
              "Elle a pas des enfants.",
              frOf(COLLAPSE[2].negId),
            ],
            correct: 3,
            why: 'Des became de like the other two, and then de lost its e in front of the vowel of enfants. Two rules in a row, and the second is the same elision that gave you n apostrophe on the other side of the sentence.',
            ref: 's09-collapse-table',
          },
          {
            q: 'A de turned up in a negative sentence. What was there before?',
            format: 'mcq',
            opts: [
              'le, la or les',
              'un, une, des, du or de la',
              'nothing at all',
              'you cannot tell',
            ],
            correct: 1,
            why: 'One of those five, because they are the only ones that ever collapse. This works backwards and is worth having: le, la and les come through untouched, and a sentence with nothing in front of the noun stays with nothing.',
            ref: 's10-nothing',
          },
        ],
      },
      {
        id: 'r4-the-verb-decides',
        label: 'The verb decides',
        targets: ['err-collapses-after-etre', 'err-keeps-the-article'],
        // ═══ THE MIXED ROUND ═══
        //
        // TWO of these four answers are a SURVIVING article and two are `de`.
        // A learner who has decided the answer is always `de` scores 50% here
        // and fails the round, which is the point. Without the mixture this
        // round would certify a learner who has understood exactly half of the
        // rule, and the brief says so.
        say: 'The same noun, the same little word, and two different answers.',
        questions: [
          {
            q: 'Turn this round: « C\'est un livre. »',
            format: 'typeIn',
            accept: ["Ce n'est pas un livre.", 'ce nest pas un livre', "n'est pas un livre"],
            answer: frOf(LIVRE_ETRE.negId),
            why: 'The un survived. Wrap est and stop, because after être nothing collapses at all. Compare it with J ai un livre, which is the same noun with the same word in front of it and comes out as de livre.',
            ref: 's11-one-noun',
          },
          {
            q: 'Turn this round: « J\'ai un livre. »',
            format: 'typeIn',
            accept: ["Je n'ai pas de livre.", 'je nai pas de livre', 'pas de livre'],
            answer: frOf(LIVRE_UN.negId),
            why: 'Here it did collapse, because the verb was avoir. The noun and the little word in front of it are identical to the question before this one, and the verb is the only thing that changed.',
            ref: 's11-one-noun',
          },
          {
            q: 'Fix this. « Ce ne sont pas de amis. »',
            format: 'errorSpot',
            accept: ['Ce ne sont pas des amis.', 'ce ne sont pas des amis', 'des amis'],
            answer: frOf(ETRE_KEEPS[2].negId),
            why: 'The verb is sont, which is être, so the des survives and there is nothing to collapse. This is the exception reaching a person other than ce n est pas, which is where most learners stop expecting it.',
            ref: 's12-etre',
          },
          {
            q: 'What decides whether the little word changes?',
            format: 'mcq',
            opts: [
              'whether the sentence is about you',
              'how many things there are',
              'the verb',
              'whether the noun starts on a vowel',
            ],
            correct: 2,
            why: `The verb. avoir collapses un, une, des, du and de la to de. être leaves every one of them exactly where it was. le, la and les never move on either. ${REFRAME}`,
            ref: 's13-three-outcomes',
          },
        ],
      },
      {
        id: 'r5-what-you-hear',
        label: 'What you will hear',
        targets: ['err-hears-agreement', 'err-half-a-wrap'],
        say: 'The half that disappears, and what it costs you.',
        questions: [
          {
            q: 'You hear this. What does the speaker mean?',
            format: 'listenChoose',
            opts: [
              'they do not have a dog',
              'they have a dog',
              'they want a dog',
              'they had a dog',
            ],
            correct: 0,
            why: 'They do not have one. The ne has been dropped, which is what ordinary speech does, so the whole negative is riding on pas. This is the one place your comprehension genuinely fails, and it is worth practising until it does not.',
            ref: 's17-ear',
          },
          {
            q: 'Which of these should you write?',
            format: 'mcq',
            opts: [
              "J'ai pas de chien.",
              'Je ai pas de chien.',
              "J'ai ne pas de chien.",
              frOf(ORAL.negId),
            ],
            correct: 3,
            why: 'The written language keeps both halves every time. The first one is completely ordinary spoken French and you will hear it constantly, and it still is not what you write.',
            ref: 's16-dropped',
          },
          {
            q: 'Is dropping the ne slang?',
            format: 'mcq',
            opts: [
              'yes, and it should be avoided',
              'no, it is ordinary speech',
              'only among young people',
              'only in the south',
            ],
            correct: 1,
            why: 'It is ordinary speech, from everybody, constantly. Treating it as slang leads people to stop listening for it, and then half of what they hear reads as agreement. Recognise it and keep writing the full form.',
            ref: 's16-dropped',
          },
          {
            q: 'Say this out loud: I do not have a dog.',
            format: 'speak',
            // `target` is REQUIRED for format 'speak' and validateLesson names
            // the question if it is missing. It is what the recogniser scores
            // against, so it carries both halves of the wrap deliberately: this
            // is the one place the learner is asked to produce this sentence
            // and the ne-less form must not be accepted here.
            target: frOf(ORAL.negId),
            accept: [frOf(ORAL.negId), 'je nai pas de chien'],
            answer: frOf(ORAL.negId),
            why: 'Both halves, because that is what you should be saying while the placement is still new. The version without the ne is real French and is not what you want to be producing until the two words go where they belong without any thought.',
            ref: 's23-speak',
          },
        ],
      },
      {
        id: 'r6-non-and-ne',
        label: 'Answering, and agreeing',
        targets: ['err-non-for-ne', 'err-collapses-after-etre'],
        say: 'Two words for no, and the reply that makes it a conversation.',
        questions: [
          {
            q: 'Fix this. « Je non ai pas de voiture. »',
            format: 'errorSpot',
            accept: ["Je n'ai pas de voiture.", 'je nai pas de voiture'],
            answer: frOf(COLLAPSE[1].negId),
            why: 'Non answers a question and never sits inside a sentence. Ne sits inside a sentence and never answers a question. English uses one word for both jobs, which is exactly why this gets written.',
            ref: 's18-non-plus',
          },
          {
            q: 'Somebody says « Je n\'aime pas le café ». How do you agree?',
            format: 'mcq',
            opts: [
              'Moi aussi.',
              'Moi non.',
              'Moi non plus.',
              'Moi pas plus.',
            ],
            correct: 2,
            why: 'Moi non plus is me neither, and it is the reply to somebody else\'s negative. Moi aussi agrees with a positive and would mean you do like coffee, which is the opposite of what you meant to say.',
            ref: 's18-non-plus',
          },
          {
            q: 'You hear a question and the answer is no. Which word answers it?',
            format: 'listenChoose',
            opts: ['non', 'ne', 'pas', "n'"],
            correct: 0,
            why: 'Non, and it is the only one of the four that can stand on its own. Ne and pas are two halves of one thing that wraps a verb, and neither of them means anything by itself.',
            ref: 's18-non-plus',
          },
          {
            q: 'Turn this round: « C\'est une erreur. »',
            format: 'typeIn',
            accept: ["Ce n'est pas une erreur.", 'ce nest pas une erreur', 'pas une erreur'],
            answer: frOf(ETRE_KEEPS[1].negId),
            why: 'The une survived, because the verb is être. One more of these than you expect to need, and it is the shape that most often gets a de put into it by somebody who learned the collapse properly.',
            ref: 's12-etre',
          },
        ],
      },
    ],
  },

  {
    type: 'roundup',
    id: 's28-roundup',
    title: 'What You Can Do Now',
    frSub: 'Ce que vous savez faire',
    say: 'Four things, and then what carries into the next two units.',
    body: 'You can take any sentence you are able to make and turn it round, on either of the two verbs you can conjugate, with the two words in the right places and the right thing happening to everything else. You know that the verb is what decides, which is the part almost nobody is told, and you can recognise a negative with half of it missing, which is most of what you will actually hear. The next two units are questions, and both of them need this: asking somebody whether they do not have something, and the one French answer that only exists in reply to a negative.',
    points: [
      `${REFRAME} avoir collapses un, une and des to de. être leaves them alone.`,
      'le, la and les never move under a negative, whatever the verb was.',
      'In writing, both halves every time. In speech the ne very often goes, and you need to hear it.',
      'non answers a question. ne wraps a verb. They never swap jobs.',
    ],
  },
];

/* ─── The progress card counts the journey rather than restating it ────────
 *
 * Derived here rather than typed by hand. Every figure is a fact about the
 * array directly above, and a display string is validated against nothing, so
 * the first mission added would have left the card confidently wrong with the
 * whole suite still green. It throws rather than degrades.                    */
{
  const ix = SECTIONS.findIndex((s) => (s as { id?: string }).id === 's26-progress');
  const card = SECTIONS[ix];
  const quiz = SECTIONS.find((s) => s.type === 'quiz');
  if (!card || card.type !== 'progressCheck' || !quiz || quiz.type !== 'quiz') {
    throw new Error('a1.18.l1: the progress card or the quiz is missing, so the card cannot count what is not there');
  }
  card.stats = [
    { k: 'Sentences turned round', v: String(PAIRS.length) },
    { k: 'Things that can happen', v: '4' },
    { k: 'Missions done', v: `${ix} of ${SECTIONS.length}` },
    { k: 'Exam rounds ahead', v: String(quiz.rounds?.length ?? 0) },
  ];
}

/* ─── Acts ─────────────────────────────────────────────────────────────────
 *
 * Six, and the weighting is the argument of the lesson.
 *
 * The brief's instruction was "the weight belongs on the article rule and its
 * exceptions". The measurement moved it: the article rule has three shipped
 * lessons behind it and the EXCEPTIONS have none, so act 3 is revision at three
 * sections and act 4 is five. Act 2 is two sections rather than an act's worth
 * because sons.07 owns the elision outright.
 *
 * `estScreens` is what the mission actually costs rather than a round number,
 * because it is divided by the rest points to check no stretch runs past the
 * checkpoint-spacing limit of 22.                                             */

const ACTS: LessonAct[] = [
  {
    id: 'act1',
    title: 'French needs two words for not',
    sections: ['s01-scene', 's02-goals', 's03-two-words', 's04-wrap', 's05-both-verbs'],
    milestone: 'Two words, either side of the verb, on both of the verbs you can conjugate.',
    estScreens: 30,
    restPoints: ['s01-scene/after-break', 's05-both-verbs/halfway'],
  },
  {
    id: 'act2',
    title: 'In front of a vowel',
    sections: ['s06-elision', 's07-elision-table'],
    milestone: "ne becomes n', which is a rule you already had.",
    estScreens: 14,
    restPoints: ['s06-elision/halfway'],
  },
  {
    id: 'act3',
    title: 'What happens to the little word',
    sections: ['s08-collapse', 's09-collapse-table', 's10-nothing'],
    milestone: 'The rule three earlier lessons taught you, run rather than read.',
    estScreens: 20,
    restPoints: ['s08-collapse/halfway'],
  },
  {
    id: 'act4',
    title: 'The verb decides',
    sections: ['s11-one-noun', 's12-etre', 's13-three-outcomes', 's14-transform', 's15-traps'],
    milestone: 'One noun, the same little word, and two different answers depending on the verb.',
    estScreens: 32,
    restPoints: ['s12-etre/halfway', 's14-transform/halfway'],
  },
  {
    id: 'act5',
    title: 'What you will actually hear',
    sections: ['s16-dropped', 's17-ear', 's18-non-plus', 's19-reading'],
    milestone: 'The half that disappears in speech, and the reply that makes a negative a conversation.',
    estScreens: 24,
    restPoints: ['s16-dropped/halfway'],
  },
  {
    id: 'act6',
    title: 'Prove it',
    sections: [
      's20-words', 's21-flash', 's22-dictation', 's23-speak', 's24-scenario',
      's25-review', 's26-progress', 's27-quiz', 's28-roundup',
    ],
    milestone: 'Lesson complete. Everything here carries straight into asking questions.',
    estScreens: 96,
    restPoints: [
      's21-flash/halfway', 's23-speak/halfway', 's25-review/halfway',
      's27-quiz/after-r2', 's27-quiz/after-r4',
    ],
  },
];

/* ─── Deck tranches ────────────────────────────────────────────────────────
 *
 * One slice per act, index-aligned. An item is released the act it is TAUGHT,
 * not the act it is first mentioned: releasing the whole set at mission one
 * turns the flashcard hub into a wall on the morning the learner is least able
 * to read it. Act 6 releases nothing new.
 *
 * `once()` is not decoration. The groups below are built for TEACHING and they
 * legitimately overlap. The SRS keys on (itemId, modality), so releasing one
 * card from two tranches would take two ratings for one sentence.            */

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

const bothOf = (ps: typeof PAIRS) => ps.flatMap((p) => [p.posId, p.negId]);

const DECK_TRANCHE: string[][] = [
  // Act 1: the four wrap pairs, the `ne` headword, and the three published
  // sentences s05-both-verbs puts on a screen. NOT the article pairs: they are
  // taught in act 3 and a card released before its mission is a card the
  // learner is asked to rate before they have met it.
  once([
    ...bothOf(WRAP), NE,
    'fr.a1.famille.234', 'fr.a1.rp-identite.027',
    'fr.a1.adjectifs-essentiels.187', 'fr.a1.mots-de-liaison.025',
  ]),
  // Act 2: the elision act shows no new sentence of its own. It re-shows act
  // 1's and act 3's, plus the published row that carries d' and the two
  // consonant-start rows s06-elision puts beside it.
  once([
    'fr.a1.presentation-personnelle.049',
    'fr.a1.negation-et-restriction.006', 'fr.a1.negation-et-restriction.002',
  ]),
  // Act 3: the three collapse pairs and the published rows s08 and s09 show.
  once([
    ...bothOf(COLLAPSE),
    'fr.a1.famille.246', 'fr.a1.cuisine.264', 'fr.a1.au-restaurant.189',
    'fr.a1.objets.153', 'fr.a1.negation-et-restriction.021',
    'fr.a1.douane-et-immigration.188', 'fr.a1.negation-et-restriction.023',
    'fr.a1.negation-et-restriction.022',
  ]),
  // Act 4: the three-way contrast and the rest of the être exception, with the
  // two published `ce n'est pas` rows and the `le` survival on aimer.
  once([
    ...bothOf(CONTRAST_LIVRE), ...bothOf(ETRE_KEEPS),
    'fr.a1.jours-et-mois.022', 'fr.a1.rp-identite.058',
    'fr.a1.negation-et-restriction.025',
  ]),
  // Act 5: the oral pair, the dropped-ne row and its published attestation,
  // `non`, and the two rows that carry non and moi non plus.
  once([
    ORAL.posId, ORAL.negId, DROPPED_NE.id, 'fr.a1.argot-du-quotidien.042',
    NON, 'fr.a1.rp-identite.057', 'fr.a1.expressions-frequentes.029',
    'fr.a1.expressions-utiles.095',
  ]),
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
    throw new Error(`a1.18.l1: item(s) taught but released by no tranche: ${never.join(', ')}`);
  }
  const stray = [...released].filter((id) => !taught.has(id));
  if (stray.length) {
    throw new Error(`a1.18.l1: tranche(s) release item(s) the lesson does not teach: ${stray.join(', ')}`);
  }
}

/* ─── Error triggers and their drills ──────────────────────────────────────
 *
 * Six triggers, six drills, six retests, six quiz rounds, and that is not a
 * coincidence. `drillForRound` walks a round's `targets` and fires the drill of
 * the FIRST one that has any, then stops, so a drill named only in second place
 * never runs. Each drill below is the first target of exactly one round.
 *
 * a1.05 shipped two unreachable drills for exactly this reason and a first
 * draft of a1.07 shipped a third. This lesson does not reopen it.
 *
 * `err-keeps-the-article` and `err-collapses-after-etre` look like one error
 * and are two, in opposite directions. The first is doing the wrap and
 * forgetting the second step. The second is doing the second step where it does
 * not apply, and it is the error a learner makes BECAUSE they learned the first
 * rule properly. Merging them would remediate only one, and it is the second
 * one that nothing in this course has ever addressed.                        */

const ERROR_TRIGGERS: ErrorTrigger[] = [
  {
    id: 'err-half-a-wrap',
    description: 'Writes only one of the two words, or puts both on the same side of the verb: « je suis pas fatigué » in writing, « je ne suis fatigué », « je ne pas suis ». The English habit of a single word placed after the verb, arriving intact.',
    detectOn: ['s03-two-words', 's04-wrap', 's05-both-verbs', 's27-quiz/r1-two-words'],
    drill: 'drill-wrap',
    retest: 'retest-wrap',
  },
  {
    id: 'err-no-elision',
    description: `Writes « je ne ai pas » or « il ne est pas », leaving ne whole in front of a vowel. ${Cap(unitRef('sons.07'))} taught the rule and this is it failing to transfer to a new word.`,
    detectOn: ['s06-elision', 's07-elision-table', 's15-traps', 's27-quiz/r2-in-front-of-a-vowel'],
    drill: 'drill-elision',
    retest: 'retest-elision',
  },
  {
    id: 'err-keeps-the-article',
    description: 'Does the wrap and stops: « Je n\'ai pas un frère ». The single most common A1 negation error in the language, and it survives because it is understood perfectly and nobody corrects it.',
    detectOn: ['s08-collapse', 's09-collapse-table', 's14-transform', 's27-quiz/r3-the-little-word'],
    drill: 'drill-collapse',
    retest: 'retest-collapse',
  },
  {
    id: 'err-collapses-after-etre',
    description: 'Applies the de rule where it does not reach: « Ce n\'est pas de livre », « Je n\'aime pas de café ». THE ERROR THIS LESSON EXISTS FOR. It is made by learners who took the earlier rule seriously and it is addressed by nothing else in the course.',
    detectOn: ['s11-one-noun', 's12-etre', 's13-three-outcomes', 's27-quiz/r4-the-verb-decides'],
    drill: 'drill-the-verb',
    retest: 'retest-the-verb',
  },
  {
    id: 'err-hears-agreement',
    description: 'Misses a negative whose ne has been dropped and registers agreement. Costs comprehension rather than accuracy, and the learner has no way of finding out, which is why it gets its own drill.',
    detectOn: ['s16-dropped', 's17-ear', 's27-quiz/r5-what-you-hear'],
    drill: 'drill-dropped-ne',
    retest: 'retest-dropped-ne',
  },
  {
    id: 'err-non-for-ne',
    description: 'Merges the two words for no: writes « je non ai pas », or answers a question with ne. English uses one word for both jobs and nothing in the learner\'s first language separates them.',
    detectOn: ['s18-non-plus', 's15-traps', 's27-quiz/r6-non-and-ne'],
    drill: 'drill-non',
    retest: 'retest-non',
  },
];

const DRILLS: LessonDrill[] = [
  {
    id: 'drill-wrap',
    title: 'Where do the two words go?',
    format: 'sort',
    // Item ids, not display strings: a drill scores against the corpus, so it
    // plays the same audio and reads the same spelling as every other card that
    // teaches these. Passing display strings here validates as broken ids.
    //
    // Sorted POSITIVE against NEGATIVE, so the learner has to find the two
    // words rather than recognise a sentence. Both buckets carry both verbs.
    buckets: ['no negative in it', 'both words, either side of the verb'],
    items: [
      WRAP[0].posId, WRAP[0].negId,
      WRAP[1].posId, WRAP[1].negId,
      WRAP[3].posId, WRAP[3].negId,
    ],
    coach: 'Find the verb first, then look on both sides of it. A negative has one word in front and one behind, and if you can only see one of them the sentence is not finished.',
  },
  {
    id: 'retest-wrap',
    title: 'One more time',
    format: 'mcq',
    q: 'Which one has both words in the right places?',
    opts: ['Je ne pas suis fatigué.', 'Je ne suis pas fatigué.', 'Je suis pas ne fatigué.'],
    correct: 1,
    why: 'Ne in front of the verb and pas behind it, with suis between them. Both halves on the same side is the English shape and it is not French.',
  },
  {
    id: 'drill-elision',
    title: "ne or n'?",
    format: 'sort',
    // Every sentence here is a NEGATIVE, so the wrap cannot sort them: the only
    // thing separating the buckets is the first sound of the verb. A learner
    // sorting on anything else scores about half.
    buckets: ['the verb starts on a consonant', 'the verb starts on a vowel'],
    items: [
      WRAP[0].negId,        // Je ne suis pas fatigué.   suis
      WRAP[2].negId,        // Nous ne sommes pas prêts. sommes
      WRAP[1].negId,        // Il n'est pas là.          est
      COLLAPSE[0].negId,    // Je n'ai pas de frère.     ai
      ETRE_KEEPS[2].negId,  // Ce ne sont pas des amis.  sont
      LIVRE_ETRE.negId,     // Ce n'est pas un livre.    est
    ],
    coach: 'Ignore everything except the first sound of the verb. A vowel there and ne is cut short; a consonant and it is not. Nothing else in the sentence has any say in it.',
  },
  {
    id: 'retest-elision',
    title: 'One more time',
    format: 'mcq',
    q: 'Which is written correctly?',
    opts: ['Je ne ai pas de frère.', "Je n'ai pas de frère.", "Je n'e ai pas de frère."],
    correct: 1,
    why: 'Ne and ai are two vowels meeting, so ne is cut short and an apostrophe marks the gap. The elision lesson put ne on its list and it behaves like every other word there.',
  },
  {
    id: 'drill-collapse',
    title: 'What happened to the little word?',
    format: 'sort',
    // Every sentence has AVOIR in it, so the verb is constant across the whole
    // drill and cannot be what separates the buckets. The learner has nothing
    // to sort on except which little word was there. That is the opposite
    // arrangement from drill-the-verb, on purpose.
    buckets: ['it became de', 'nothing was there to change'],
    items: [
      COLLAPSE[0].negId,  // Je n'ai pas de frère.
      COLLAPSE[1].negId,  // Je n'ai pas de voiture.
      LIVRE_UN.negId,     // Je n'ai pas de livre.
      WRAP[3].negId,      // Je n'ai pas soif.
      'fr.a1.famille.234',                    // Je n'ai pas faim.
      'fr.a1.negation-et-restriction.023',    // Nous n'avons pas faim.
    ],
    coach: 'Every one of these is avoir, so the verb tells you nothing here. Look at what was in front of the noun before the negative arrived. A un, une or des had to go, and a noun with nothing in front of it had nothing to lose.',
  },
  {
    id: 'retest-collapse',
    title: 'One more time',
    format: 'mcq',
    q: 'What does « J\'ai une voiture » become?',
    opts: ["Je n'ai pas une voiture.", "Je n'ai pas de voiture.", "Je n'ai pas voiture."],
    correct: 1,
    why: 'Une collapses to de on avoir, and something has to be left in front of the noun, so dropping it entirely is not the answer either.',
  },
  {
    id: 'drill-the-verb',
    title: 'Which verb was it?',
    format: 'sort',
    // ═══ THE DRILL THIS LESSON EXISTS FOR ═══
    //
    // THE LITTLE WORD IS `un` OR `une` IN EVERY SINGLE ITEM. That is the only
    // arrangement that teaches anything: a bucket where the collapsing items
    // carry `un` and the surviving ones carry `le` would let the learner sort
    // on the article and score full marks without ever looking at the verb.
    // Here the article is constant and the verb is the only variable.
    //
    // Same shape as a1.17's drill-vowel, where both buckets hold feminine nouns
    // for the same reason.
    buckets: ['avoir, so it became de', 'être, so it stayed'],
    items: [
      LIVRE_UN.negId,       // Je n'ai pas de livre.       un -> de
      COLLAPSE[0].negId,    // Je n'ai pas de frère.       un -> de
      COLLAPSE[1].negId,    // Je n'ai pas de voiture.     une -> de
      LIVRE_ETRE.negId,     // Ce n'est pas un livre.      un survives
      ETRE_KEEPS[1].negId,  // Ce n'est pas une erreur.    une survives
      'fr.a1.rp-identite.058',  // Non, ce n'est pas mon mari, c'est mon frère.
    ],
    coach: 'The same kind of little word is in every one of these before the negative arrives, so it cannot be what separates them. Find the verb. If it is a form of avoir the word collapsed, and if it is a form of être it did not.',
  },
  {
    id: 'retest-the-verb',
    title: 'One more time',
    format: 'mcq',
    q: 'What does « C\'est un livre » become?',
    opts: ["Ce n'est pas de livre.", "Ce n'est pas un livre.", "Ce n'est pas livre."],
    correct: 1,
    why: 'The un survives, because the verb is être. J ai un livre is the same noun with the same word in front of it and it does collapse, and the verb is the only thing separating the two.',
  },
  {
    id: 'drill-dropped-ne',
    title: 'Is that a no?',
    format: 'sort',
    // Two buckets and six sentences, and three of the six have no ne in them at
    // all. The learner cannot sort on the presence of ne, which is the habit
    // this drill is breaking: they have to find the pas.
    buckets: ['this is a negative', 'this is not'],
    items: [
      ORAL.posId,                            // J'ai un chien.
      ORAL.negId,                            // Je n'ai pas de chien.
      DROPPED_NE.id,                         // J'ai pas de chien.
      'fr.a1.argot-du-quotidien.042',        // c'est pas donné
      LIVRE_ETRE.posId,                      // C'est un livre.
      LIVRE_ETRE.negId,                      // Ce n'est pas un livre.
    ],
    coach: 'Two of these are negatives with no ne anywhere in them, which is what most spoken negatives look like. Stop looking for ne and look for pas instead. Pas behind the verb is the half that never goes missing.',
  },
  {
    id: 'retest-dropped-ne',
    title: 'One more time',
    format: 'mcq',
    q: 'Somebody says « J\'ai pas de chien ». What do they mean?',
    opts: ['they have a dog', 'they do not have a dog', 'you cannot tell'],
    correct: 1,
    why: 'They do not have one. The ne is dropped constantly in speech and the pas is carrying the whole negative. Nothing about it is ambiguous to a French speaker.',
  },
  {
    id: 'drill-non',
    title: 'Answering, or wrapping?',
    format: 'sort',
    buckets: ['non answers the question', 'ne wraps the verb'],
    items: [
      NON,                                  // non
      'fr.a1.rp-identite.057',              // Non, je ne suis pas mariée, je suis fiancée.
      'fr.a1.expressions-frequentes.029',   // Bien sûr que non, ce n'est pas grave.
      NE,                                   // ne
      WRAP[0].negId,                        // Je ne suis pas fatigué.
      COLLAPSE[1].negId,                    // Je n'ai pas de voiture.
    ],
    coach: 'Two of these sentences have both words in them, three apart, doing different jobs. Ask what each one is attached to: non is attached to a question somebody asked, and ne is attached to a verb.',
  },
  {
    id: 'retest-non',
    title: 'One more time',
    format: 'mcq',
    q: 'Which of these is French?',
    opts: ['Je non ai pas de voiture.', "Je n'ai pas de voiture.", "Non j'ai pas non de voiture."],
    correct: 1,
    why: 'Non never goes inside a sentence. It answers a question and stops. Ne is the word that goes inside, and it goes in front of the verb.',
  },
];

/* ─── Reference sheets ─────────────────────────────────────────────────────
 *
 * Two, and the brief asks for them: "A reference sheet with the two-step
 * procedure and the article table. It is what a learner returns to during a1.19
 * and a1.20, which are next and both empty. Wire the sheetId early."
 *
 * `teach` and `table` ONLY. ReferenceSheet.tsx renders exactly three section
 * types inside a sheet (`teach`, `letterGrid`, `table`) and its `default`
 * branch draws the section's TITLE AND NOTHING ELSE. a1.17 shipped two
 * `cheatSheet` sections here in v2 and they drew fourteen invisible rows; a1.13
 * has the same defect shipped today. This lesson does not reopen it.
 *
 * SHORT CELLS ONLY in both tables. SheetTable sizes a column at
 * max(110, 320 / cols), so a full sentence in a three-column table lands in a
 * 107-wide cell and can only be read by dragging sideways. That was found on a
 * device during a1.17 v4. The reasons live in the prose below each table.     */

const SHEETS: ReferenceSheet[] = [
  {
    id: 'sheet.a1.18.procedure',
    title: 'The two steps',
    layer: 'deep',
    contains: ['Where the two words go', "When ne becomes n'", 'What to do second'],
    sections: [
      {
        type: 'table',
        id: 'sheet-proc-rows',
        title: 'Before and after',
        layer: 'deep',
        cols: ['what you say', 'turned round'],
        rows: [
          ...WRAP.map((p) => [p.pos, p.neg]),
          ...COLLAPSE.map((p) => [p.pos, p.neg]),
        ],
      },
      {
        type: 'teach',
        id: 'sheet-proc-steps',
        title: 'The procedure, in order',
        layer: 'deep',
        body:
          'STEP ONE, AND IT NEVER CHANGES. Find the conjugated verb and put ne in front of it and pas behind it. '
          + 'The verb ends up between the two words like something in brackets, and nothing else in the sentence '
          + 'moves. On être and avoir the verb is almost always the second word of the sentence, so this is '
          + 'quicker than it sounds. If the verb starts on a vowel sound, ne loses its e and becomes n apostrophe: '
          + 'je n ai pas, il n est pas, ce n est pas. That is the elision rule from the sons lesson and ne was '
          + 'already on its list alongside je, me, te, se, de, que and le. Four of the six forms of avoir start on '
          + 'a vowel, so with that verb the cut is the normal case rather than the exception. '
          + 'STEP TWO, AND IT DEPENDS ON THE VERB. Look back at what you just wrapped. If it was avoir, then a un, '
          + 'une, des, du or de la sitting in front of the noun turns into de, and de turns into d apostrophe in '
          + 'front of a vowel. If it was être, nothing happens at all and every word stays exactly where it was. '
          + 'And whatever the verb was, le, la and les never move: they come through a negative completely '
          + 'untouched and there is no case anywhere where they do not. If the noun had nothing in front of it to '
          + 'begin with, as in j ai faim and j ai soif, there was nothing for the negative to take away and no de '
          + 'appears. '
          + 'IN SPEECH, THE NE VERY OFTEN GOES. J ai pas de voiture, c est pas grave. This is ordinary French '
          + 'rather than slang and you need to recognise it, because a negative with its ne gone is one short '
          + 'unstressed word away from the positive. Keep writing both halves yourself.',
      },
    ],
  },
  {
    id: 'sheet.a1.18.outcomes',
    title: 'What happens to the little word',
    layer: 'deep',
    contains: ['The four outcomes', 'Which verb causes which', 'Why the exception is not random'],
    sections: [
      {
        type: 'table',
        id: 'sheet-outcomes-rows',
        title: 'Four outcomes, one table',
        layer: 'deep',
        // Three short columns. The reasons are in the prose below, where they
        // have the width; a fourth column of explanation would land in a
        // 107-wide cell.
        cols: ['verb', 'what was there', 'what you write'],
        rows: [
          ['avoir', 'un, une, des', 'de'],
          ['avoir', 'du, de la', 'de'],
          ['avoir', 'le, la, les', 'le, la, les'],
          ['avoir', 'nothing', 'nothing'],
          ['être', 'un, une, des', 'un, une, des'],
          ['être', 'le, la, les', 'le, la, les'],
        ],
      },
      {
        type: 'teach',
        id: 'sheet-outcomes-why',
        title: 'Why the verb is what decides',
        layer: 'deep',
        body:
          'Most courses hand you the collapse as a rule and the être case as an exception to memorise beside it, '
          + 'unconnected to anything. It is not random and it is worth thirty seconds. J ai un livre is a sentence '
          + 'about how many books there are, and there is one. Take that away with a negative and there is nothing '
          + 'left to count, which is exactly what de marks: an emptied slot where a number used to be. C est un '
          + 'livre is not a sentence about how many of anything. It is a sentence about what a thing IS, and '
          + 'saying that a thing is not a book still leaves you talking about the category of books, so nothing '
          + 'has been emptied and nothing changes. That is why the split falls on the verb rather than on the '
          + 'little word. avoir counts things and être identifies them. '
          + 'The practical version is one sentence and it is the only thing you actually need at the moment of '
          + 'speaking. If the verb was avoir, a un, une, des, du or de la becomes de. If the verb was être, leave '
          + 'everything exactly where it is. '
          + 'Two things ride along with that. le, la and les never move on either verb, which is useful backwards '
          + 'as well as forwards: if a de turned up in a sentence, the sentence had one of the five collapsing '
          + 'words in it before the negative arrived, and if nothing changed it did not. And a handful of avoir '
          + 'expressions have nothing in front of the noun to start with, j ai faim and j ai soif among them, so '
          + 'there is nothing for the negative to reduce and no de. Writing pas de faim is the rule applied one '
          + 'noun too far, and it is the mistake a learner makes on the day the rule finally sticks.',
      },
    ],
  },
];

export const NEGATION_LESSON: Lesson = {
  id: 'a1.18.l1',
  unitId: 'a1.18',
  // The lesson's index WITHIN its unit, not its place in the track. Every
  // lesson in the seed is seq 1 because every unit ships exactly one so far,
  // and the `l1` in the id is this number.
  seq: 1,
  title: 'La négation',
  level: 'a1',
  // TWENTY-ONE, from unit.seq. missions.ts derives the eyebrow at render time
  // as `${level} · LEÇON ${unit.seq}`, and a1.18 sits at seq 21. The stored
  // value is a fallback and has to agree with what the renderer computes, or
  // the two disagree the moment something reads this field instead. a1.03
  // shipped exactly that bug (commit 56c79a7).
  tag: 'A1 · LEÇON 21',
  intro:
    'Two words rather than one, and they go on either side of the verb. This is how to turn any sentence you can already make into its opposite, what the verb does to the rest of it, and why half of it disappears the moment anybody speaks at normal speed.',

  sections: SECTIONS,
  itemIds: ITEM_IDS,
  // The LESSON's own counter, not `seed.version`. seed.version is the OTA
  // snapshot number, derived by publish-content.ts as previous + 1, and a merge
  // must never hand-bump it.
  //
  // v1 was applied to Postgres and then a1-18-negation.test.ts found FIVE items
  // declared in itemIds, released by a tranche, and drawn by nothing. That is
  // invariant §1's failure exactly and no other check in the suite sees it:
  //
  //   fr.a1.negation-et-restriction.063 « C'est une erreur. »
  //   fr.a1.negation-et-restriction.065 « Ce sont des amis. »
  //     s12-etre showed the two NEGATIVES of the être exception and neither
  //     positive, so two cards claimed an article had "survived" with nothing
  //     on screen for it to have survived FROM. The learner was being asked to
  //     take the survival on trust.
  //
  //   fr.a1.expressions-frequentes.029 « Bien sûr que non, ce n'est pas grave. »
  //     named by drill-non and by no section. A drill is not a screen.
  //
  //   fr.a1.negation-et-restriction.002 « Je ne parle pas allemand. »
  //   fr.a1.negation-et-restriction.022 « Elle ne mange pas de viande. »
  //     imported as reading exposure, released by act 5's tranche, and shown
  //     nowhere at all.
  //
  // v2 puts all five on a screen and moves .002 and .022 into the tranches of
  // the acts that now show them.
  //
  // v3 came from RENDERING THE TABLES ON PAPER, which no assertion did, and it
  // found two things a1.16 warned about in almost these words:
  //
  //   s09-collapse-table had a FOURTH ROW showing fr.a1.objets.153 against
  //   fr.a1.negation-et-restriction.021 under columns headed "what you already
  //   say" and "the same sentence, turned round". BOTH ARE NEGATIVES. The left
  //   column was promising a positive and showing a negative, in the one table
  //   whose entire job is the positive/negative contrast. Removed; the four
  //   published rows moved to a new s08-collapse card, where a cardDeck can
  //   show them with their English and no column is lying.
  //
  //   s07-elision-table's second column was FRENCH WITH NO ENGLISH ON THE CELL,
  //   four rows of it. The meanings were in the detail modal, so strings(section)
  //   contained them and every assertion was satisfied. That is a1.16's shipped
  //   defect exactly: an assertion over strings(section) cannot tell "on the
  //   screen" from "one tap away". The English is now in the cell under the
  //   French, which TapTableView draws as a second line.
  version: 3,

  grammarAssumed: [
    'Noun gender, and that un and une follow it, introduced in a1.03',
    "le, la, l' and les, introduced in a1.04",
    'un, une and des, and that they collapse to de under a negative, introduced in a1.11',
    'du, de la and de l\', and the same collapse, introduced in a1.29',
    'The nine subject pronouns, introduced in a1.05',
    'The full present of être, introduced in a1.06, which never negated it',
    'The full present of avoir, introduced in a1.07, including pas faim and the collapse on une',
    "Elision as a repair for two vowels meeting, and that ne is on its list, introduced in sons.07",
  ],
  grammarIntroduced: [
    'Standard negation with the discontinuous morpheme ne… pas around a finite verb',
    'The elision of ne to n\' before a vowel or mute h, applied to a finite verb',
    'That the indefinite and partitive determiners reduce to de under sentential negation',
    'THAT THE REDUCTION DOES NOT APPLY AFTER THE COPULA: ce n\'est pas un livre, ce ne sont pas des amis',
    'That the definite article is invariant under negation on any verb',
    'That a noun with no determiner takes no de under negation, extending a1.07',
    'ne-drop in colloquial spoken French, introduced for RECEPTION ONLY and produced nowhere',
    'The distinction between non as a pro-sentence and ne as a preverbal clitic',
    'moi non plus as the negative-polarity agreement reply',
  ],

  features: ['roleplay', 'voiceflash'],

  overview: {
    titleEn: 'Negation',
    subFr: 'La négation',
    introFr: 'Deux mots autour du verbe, et le verbe décide de ce qui change ensuite.',
    minutes: 28,
    difficulty: 2,
    glyph: '🚫',
    screens: 216,
  },

  acts: ACTS,
  reframe: REFRAME,
  errorTriggers: ERROR_TRIGGERS,
  drills: DRILLS,
  sheets: SHEETS,
  deckTranche: DECK_TRANCHE,
  terms: NEGATION_TERMS,

  audio: {
    defaultLang: 'fr-FR',
    speeds: [1.0, 0.65],
    coachVoice: 'coach-en-warm',
    interfaceSounds: ['correct', 'incorrect', 'checkpoint'],
    // ── The audio decisions that cannot be recovered later ─────────────────
    //
    // Written here AND pinned by a1-18-negation.test.ts, because a constraint
    // on how something is recorded becomes invisible the moment the clip is
    // delivered. All five of the brief's lesson-specific notes are written in
    // explicitly.
    //
    // Briefs only. Do NOT run pnpm audio:render: it spends real ElevenLabs
    // credits and ELEVENLABS_API_KEY is not set in ealch-admin/.env in any
    // case. CLIP_MANIFEST is empty by design, so every card falls back to
    // device TTS until the studio delivers, and a recordingId resolving to
    // nothing is the correct shipping state.
    recorded: [
      {
        id: 'rec-a1-18-pair',
        desc:
          'EVERY POSITIVE AND ITS NEGATIVE ARE ONE TAKE, ONE VOICE, ONE PACE, read straight through with no gap '
          + 'and no reset between them. This is the most important instruction in the lesson and it applies to '
          + 'every pair in it. « J\'ai un frère. » then « Je n\'ai pas de frère. » Recorded apart, the learner '
          + 'compares two performances instead of two sentences, and BOTH CHANGES ARE SUPPOSED TO BE AUDIBLE IN '
          + 'ONE BREATH: the two words arriving round the verb, and the un becoming de. A reader who records the '
          + 'negative in its own session will lean on the ne and the pas, and the learner will hear that lean as '
          + 'emphasis rather than as the shape of the sentence. '
          + 'NEVER RECORD ne OR pas IN ISOLATION. Both are unstressed particles carrying no meaning alone, and a '
          + 'lone clip invites the learner to pronounce them as stressed words. There is no clip anywhere in this '
          + 'lesson of ne, n apostrophe, pas or de on their own. If a request for one arrives, it is a mistake in '
          + 'the request. '
          + 'Also in this take, and adjacent: « Je n\'ai pas de voiture. » against « J\'ai pas de voiture. », for '
          + 'the scene. See rec-a1-18-dropped for how that pair must be read.',
        clipIds: [
          ...PAIRS.map((p) => `${p.pos} ${p.neg}`),
          "Je n'ai pas de voiture.", "J'ai pas de voiture.",
        ],
      },
      {
        id: 'rec-a1-18-onenoun',
        desc:
          'THE THREE-WAY CONTRAST, AND IT IS ONE TAKE FOR ALL SIX SENTENCES. « J\'ai un livre. » « Je n\'ai pas '
          + 'de livre. » « J\'ai le livre. » « Je n\'ai pas le livre. » « C\'est un livre. » « Ce n\'est pas un '
          + 'livre. » In that order, one voice, no pause longer than a breath between pairs. '
          + 'THE POINT IS THAT THE WORD `livre` IS ACOUSTICALLY IDENTICAL IN ALL SIX. Nothing about the noun may '
          + 'change across the take: no lengthening, no shift in pitch, no emphasis on the one in the être '
          + 'sentence. The only things moving are the little word in front of it and the verb. A reader who '
          + 'colours the third pair to mark it as the interesting one teaches the opposite of the lesson, which '
          + 'is that these three sentences are ordinary and indistinguishable except in the one place that '
          + 'matters. '
          + 'DO NOT STRESS `de` OR `un` ANYWHERE IN THIS TAKE. Both are unstressed in ordinary French and the '
          + 'learner has to be able to hear the difference without help, because nobody will help them in a '
          + 'conversation.',
        clipIds: [
          ...CONTRAST_LIVRE.flatMap((p) => [p.pos, p.neg]),
          'livre-three-way',
        ],
      },
      {
        id: 'rec-a1-18-etre',
        desc:
          'THE EXCEPTION, IN ITS THREE PERSONS, ONE TAKE. « Ce n\'est pas un livre. » « Ce n\'est pas une '
          + 'erreur. » « Ce ne sont pas des amis. » Then their positives immediately after, in the same order. '
          + 'NOTE THAT ne KEEPS ITS e IN THE THIRD ONE and must be read that way: sont starts on a consonant, so '
          + 'there is no elision, and a reader who contracts it out of habit contradicts the screen beside it. '
          + 'The liaison in « ce sont des amis » is real and must be given its full value: day-za-MEE, with the z '
          + 'on the front of the second syllable. '
          + 'Also in this take: « Ce n\'est pas lundi, c\'est mardi. » and « Non, ce n\'est pas mon mari, c\'est '
          + 'mon frère. », both published rows the lesson shows beside the authored ones.',
        clipIds: [
          ...ETRE_KEEPS.flatMap((p) => [p.pos, p.neg]),
          'Ce n\'est pas lundi, c\'est mardi.',
          'Non, ce n\'est pas mon mari, c\'est mon frère.',
        ],
      },
      {
        id: 'rec-a1-18-dropped',
        desc:
          '« Je n\'ai pas de chien. » AND « J\'ai pas de chien. » ADJACENT, IN ONE TAKE, READ AS THE SAME '
          + 'SENTENCE TWICE, because that is what they are. The brief asks for this by name and the reason is '
          + 'precise: recorded apart, the learner hears two different sentences and the whole teaching (that one '
          + 'is the other with a syllable missing) is lost. '
          + 'BOTH MUST BE READ AT ORDINARY CONVERSATIONAL PACE. Do not slow the second one down and do not '
          + 'articulate the pas more clearly in it to compensate for the missing ne. The entire point of the '
          + 'opening scene is that the pas is easy to miss at speed, and a clip that over-articulates it '
          + 'contradicts the lesson\'s only real listening claim. '
          + 'Then « J\'ai un chien. » in the same take, so the learner hears the positive against the ne-less '
          + 'negative: that pair is the one genuine ear question in the lesson and the two are one short '
          + 'unstressed word apart. '
          + 'Finally « c\'est pas donné », the published row, read as the fixed expression it is.',
        clipIds: [
          "Je n'ai pas de chien.", "J'ai pas de chien.", 'chien-dropped-ne-pair',
          "J'ai un chien.", "c'est pas donné",
        ],
      },
      {
        id: 'rec-a1-18-wrap',
        desc:
          'THE FOUR ACT-ONE PAIRS, one take per pair, positive then negative with no reset. « Je suis fatigué. » '
          + '/ « Je ne suis pas fatigué. », « Il est là. » / « Il n\'est pas là. », « Nous sommes prêts. » / '
          + '« Nous ne sommes pas prêts. », « J\'ai soif. » / « Je n\'ai pas soif. » '
          + 'NEITHER ne NOR pas MAY BE STRESSED. Both are unstressed function words and the stress in every one '
          + 'of these sentences falls where it fell in the positive: on the last syllable of the phrase. A reader '
          + 'who marks the two new words is teaching a rhythm French does not have, and the learner will '
          + 'reproduce it. '
          + 'Also in this take, the two published être negatives: « Ce chien n\'est pas méchant. » and « Je ne '
          + 'suis pas espagnol, je suis portugais. »',
        clipIds: [
          ...WRAP.flatMap((p) => [p.pos, p.neg]),
          'Ce chien n\'est pas méchant.',
          'Je ne suis pas espagnol, je suis portugais.',
        ],
      },
      {
        id: 'rec-a1-18-elision',
        desc:
          'THE CUT, HEARD AGAINST THE UNCUT, IN ONE TAKE. « Je ne suis pas fatigué. » then « Il n\'est pas là. » '
          + 'then « Je n\'ai pas de frère. » then « Nous ne sommes pas prêts. » The learner has to hear that the '
          + 'first and fourth carry a small extra syllable that the second and third do not. '
          + 'THE ELIDED FORM IS ONE UNBROKEN UNIT. « n\'est » is neh, one syllable, and « n\'ai » is nay, one '
          + 'syllable. Do not read them as n, pause, est. This is the same instruction the elision lesson gives '
          + 'for its fifteen contractions and it is the one thing a reader most often gets wrong on a particle '
          + 'this short. '
          + 'Also: « Je n\'ai pas d\'enfants. », where the SAME cut happens on the other side of the sentence, '
          + 'and it should be read in the same take so the learner hears the two as one rule.',
        clipIds: [
          'Je ne suis pas fatigué.', "Il n'est pas là.", "Je n'ai pas de frère.", 'Nous ne sommes pas prêts.',
          "Je n'ai pas d'enfants.", 'elision-contrast',
        ],
      },
      {
        id: 'rec-a1-18-collapse',
        desc:
          'THE THREE COLLAPSE PAIRS, one take per pair. « J\'ai un frère. » / « Je n\'ai pas de frère. », « J\'ai '
          + 'une voiture. » / « Je n\'ai pas de voiture. », « Elle a des enfants. » / « Elle n\'a pas d\'enfants. » '
          + 'The third pair carries two changes in the negative and both must be audible: des became de, and then '
          + 'de lost its e in front of the vowel, so it comes out as dahⁿ-FAHⁿ with the d attached to the front '
          + 'of enfants rather than standing alone. '
          + 'DO NOT STRESS de. It is unstressed in every one of these sentences and stressing it to mark the '
          + 'change would teach a rhythm that is not in the language. The change is visible on the page and '
          + 'audible only as a different vowel; that is correct and the recording should not improve on it. '
          + 'Also, and NOT beside those: « Je ne mange pas de pain. » and « Je ne mange pas de viande. », the two '
          + 'published rows the lesson shows as reading exposure. They use a verb the learner cannot conjugate '
          + 'and should be read plainly.',
        clipIds: [
          ...COLLAPSE.flatMap((p) => [p.pos, p.neg]),
          'Je ne mange pas de pain.', 'Je ne mange pas de viande.',
        ],
      },
      {
        id: 'rec-a1-18-non',
        desc:
          'non AND moi non plus. « non » MAY be recorded alone, and it is the only word in this lesson that may: '
          + 'it is a complete answer on its own, which is the entire teaching on the card it appears on. '
          + 'IT CARRIES A NASAL VOWEL AND NO n SOUND AT ALL. The app respells it NOHⁿ and this lesson repairs the '
          + 'shipped respelling from NOHN to get there. Do not let any n be heard at the end of it. '
          + 'Then, in one take: « Non, je ne suis pas mariée, je suis fiancée. » and « Bien sûr que non, ce n\'est '
          + 'pas grave. », both of which carry non AND ne a few words apart. The two must sound like different '
          + 'words doing different jobs, which they are: non is a complete answer with a small break after it, '
          + 'and ne is glued to the front of the verb with no break at all. '
          + 'Finally « Je n\'aime pas le café. Moi non plus. » as one exchange, two voices if possible, because '
          + 'it is a reply rather than a sentence.',
        clipIds: [
          'non', 'moi non plus',
          'Non, je ne suis pas mariée, je suis fiancée.',
          'Bien sûr que non, ce n\'est pas grave.',
          "Je n'aime pas le café. Moi non plus.",
        ],
      },
      {
        id: 'rec-a1-18-traps',
        desc:
          'The five written traps, wrong version then right version, with a clear beat between them. Read EVERY '
          + 'wrong version plainly and at ordinary pace rather than comically. '
          + 'TWO OF THE FIVE ARE PERFECTLY PRONOUNCEABLE AND SOUND COMPLETELY NORMAL, and that is the point: '
          + '« Je n\'ai pas un frère » and « Ce n\'est pas de livre » are both easy to say and both wrong, and '
          + 'nothing in the sound of either tells you so. Do not signal them. '
          + '« Je ne ai pas de temps » should be read with the two vowels genuinely colliding, slowly enough that '
          + 'the learner hears why the language refuses it. « Je non ai pas de voiture » should be read flatly '
          + 'and without hesitation, because a learner writing it does not hesitate either.',
        clipIds: [
          'trap-pas-un-frere', 'trap-pas-de-livre', 'trap-ne-ai', 'trap-pas-de-cafe', 'trap-non-ai',
        ],
      },
      {
        id: 'rec-a1-18-scene',
        desc:
          'The opening scene, French bubbles only. Salomé is allocating parking spaces from a clipboard on a '
          + 'Monday morning, half distracted, working down a list of eleven names. '
          + 'HER LINE « Parfait, je vous mets la place numéro quatre. » MUST BE COMPLETELY UNSUSPICIOUS AND '
          + 'SLIGHTLY BRISK. She has not noticed anything because there is nothing to notice: what she heard was '
          + 'a perfectly ordinary sentence. Any hint of a question in her voice turns the scene into a correction '
          + 'and loses the whole point, which is that the failure is invisible from both sides. '
          + 'Her first line « Vous avez une voiture ? » should be read FAST and slightly over the top of the room '
          + 'tone, because the learner needs to believe that a short unstressed word could be lost in it. '
          + 'Her last line, where she works it out and does not mind, is where warmth is allowed to show.',
        clipIds: [
          'Vous avez une voiture ?',
          'Parfait, je vous mets la place numéro quatre. Le badge arrive vendredi.',
          "Ah, vous n'en avez pas ! Bon, je la donne à quelqu'un d'autre alors.",
        ],
      },
    ],
    ambienceDefault: 'off',
  },
};

/** Exported for the authoring script, the merge script and the test, so none of
 *  them restates a count that can drift out of agreement with the content. */
export const NEGATION_ITEM_IDS = ITEM_IDS;
export const NEGATION_SPEAK_IDS = SPEAK_IDS;
export const NEGATION_DICTATION_IDS = DICTATION_IDS;
export const NEGATION_TRANCHES = DECK_TRANCHE;
export const NEGATION_READING_ONLY_IDS = READING_ONLY;

/** The section that must carry the three-way contrast, named so the batch, the
 *  merge and the test all assert the SAME screen rather than "some screen". A
 *  find() over every section would be satisfied by the reading passage, which
 *  carries the contrast in prose and is not the designed layout. */
export const CONTRAST_SECTION_ID = 's11-one-noun';
/** The section that must show a positive and its negative with BOTH changes
 *  visible, which is the brief's first named layout requirement. */
export const BOTH_CHANGES_SECTION_ID = 's09-collapse-table';

/* ─── The handover ─────────────────────────────────────────────────────────
 *
 * FOR a1.19 (Yes/No Questions, seq 22) AND a1.20 (Question Words, seq 23).
 * Both are empty, both are next, and both need this lesson.
 *
 * ── WHAT IS LEFT FOR YOU, DELIBERATELY ─────────────────────────────────────
 *
 * `si` IS YOURS AND IT IS UNTOUCHED. It is the French answer that exists only
 * in reply to a negative question ("Tu n'as pas faim ?" "Si !"), and it is
 * genuinely tempting from here because this lesson builds the negative half of
 * it. It appears on NO surface of a1.18 and is named in no card. The corpus
 * already carries it as a phrase at fr.a2.negation-et-restriction.090
 * « si, bien sûr », which is a2 and not yours either, so you will be authoring
 * the a1 rows for it.
 *
 * NEGATIVE QUESTIONS are yours. « Tu n'as pas faim ? » is a question, and this
 * lesson teaches only the statement. Everything you need is built: the wrap,
 * the elision on ne, and the article behaviour on both verbs.
 *
 * ── WHAT YOU CAN TAKE ──────────────────────────────────────────────────────
 *
 * THE REFERENCE SHEETS. `sheet.a1.18.procedure` carries the two-step procedure
 * and a before/after table; `sheet.a1.18.outcomes` carries the four outcomes
 * and why the split falls on the verb. Both are `layer: 'deep'`, both are wired
 * from four sections here, and a learner halfway through a negative question
 * will want them. Link them from your own sections by `sheetId`.
 *
 * THE ID RANGE, for whoever authors into negation-et-restriction next:
 *
 *     fr.a1.negation-et-restriction.001-.042   published before this build
 *                                              (.027 is a GAP and stays a gap)
 *     fr.a1.negation-et-restriction.043-.069   a1.18. Twenty-seven rows.
 *     fr.a1.negation-et-restriction.070+       FREE.
 *
 *   Re-run `pnpm corpus:probe --theme negation-et-restriction` before authoring
 *   rather than trusting that block. a1.15 landed inside a1.17's range mid-build
 *   on 2026-08-06 and a highest-id check passed it cleanly.
 *
 * THE THEME IS OUTSIDE SEED_CUT.themes. It holds 604 published rows in Postgres
 * and held 0 in the seed before this lesson. Anything you author or import from
 * it has to be CARRIED by your merge or it renders as an empty card. This is
 * the a1.13/`couleurs` situation, not the a1.17/`famille` one.
 *
 * ── WHAT THIS LESSON FOUND AND DID NOT FIX ─────────────────────────────────
 *
 * A CURRICULUM GAP, AND IT IS REAL. No A1 unit owns `ne… jamais`, `ne… plus`,
 * `ne… rien` or `ne… personne`. This lesson's canDo excludes all four and the
 * next negation content in the course is a2. Meanwhile:
 *
 *   - `jamais` is ALREADY an A1 headword (fr.a1.temps-et-frequence.119, plus
 *     two more in sons themes), so a learner can meet the word without ever
 *     meeting the construction.
 *   - `rien` and `personne` are headwords too, in two and three themes
 *     respectively, with competing respellings (see NOT_REPAIRED).
 *   - This lesson's own theme slice carries eleven rows using them, at
 *     fr.a1.negation-et-restriction .012 .013 .014 .026 .028 .029 .030 .031
 *     .034 .035 .038 .040 .041, all published at a1 and taught by nothing.
 *
 *   Reported rather than filled. Filling it is a unit's job and there is no
 *   unit for it between a1.18 and a2.
 *
 * TWO RESPELLING CONFLICTS ARE LEFT ALONE and both are outside this lesson's
 * teaching scope. `rien` carries RYAN in mots-essentiels and RYEHⁿ in
 * consonnes, and the first is genuinely wrong; `personne` carries three
 * different respellings across three themes. Both belong to constructions this
 * lesson does not teach and appear on no screen it draws. See NOT_REPAIRED in
 * negation-corpus.ts.
 *
 * THE APOSTROPHE IN n' IS TESTED BY NOTHING, here or anywhere. fold() strips
 * punctuation and whitespace, and errorSpot runs the same path as typeIn, so no
 * free-text format can reach it; mcq can, but only by making the apostrophe the
 * whole question, which tests recognition rather than production. It is taught
 * on s06-elision and s07-elision-table and left there. If you need it tested,
 * you need a format that does not exist yet.                                  */
export const HANDOVER_NEXT_FREE_ID = 'fr.a1.negation-et-restriction.070';

/** What a1.19 and a1.20 own and this lesson must not touch. MULTI-WORD PHRASES
 *  ONLY: a1.13's first draft listed its neighbour's content as single words and
 *  the guard fired immediately on one of its own glosses. `si` is a French word
 *  meaning "if" as well as the contradicting yes, and `question` is an ordinary
 *  English word this lesson uses constantly, so neither is a safe bare probe. */
export const QUESTION_TEACHING = [
  'si is the answer', 'answer a negative question', 'contradicting yes',
  'est-ce que', 'yes/no question', 'question word', 'rising intonation',
  'invert the verb', 'inversion question',
];
