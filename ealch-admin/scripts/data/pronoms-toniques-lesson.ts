// a2.36.l1 « Les pronoms toniques » — the lesson. DRAFT, not applied.
//
// 24 sections, six acts, one quiz of 30. The measured A2 house shape
// (A2-TAIL-AUDIT §2), modelled on a2.34.l1. No act art: A2 lessons carry none.
//
// ══════════════════════════════════════════════════════════════════════════
//  THE THREE REQUIRED LAYOUTS
// ══════════════════════════════════════════════════════════════════════════
//
//   1. THE FOUR THAT CHANGE, subject beside stressed, same person.  s03-pairs
//   2. ALL EIGHT IN ONE FRAME, « C'est pour ... ».                   s05-eight
//   3. « Ce sont eux » beside « C'est eux », register on each.      s12-cest
//
// ONE tapTable in the flow (s09-table, six rows) and ONE table on the sheet.
//
// ══════════════════════════════════════════════════════════════════════════
//  THE WEIGHT
// ══════════════════════════════════════════════════════════════════════════
//
// The paradigm is eight words and four of them are words the learner already
// has, so it gets ONE mission (the tapTable). Acts 2 and 3, the Owns (where the
// set goes, and the two places it bites), are eleven missions; the scene and
// the trap are seven.

import type { Lesson, LessonSection, LessonDrill, SectionAudio, ReferenceSheet } from '../../../ealch-v2/src/content/schema.ts';
import {
  UNIT, LESSON_ID, REFRAME, E, Cap,
  ALL_ROWS, IMPORT_IDS, IMPORTED, DICTEE_IDS, UNSEEN,
  A105_DEFERRAL, SUBJECT_UNIT, SUBJECT_REF,
  GENDER_LOST, STRESSED_RULE, A236_SHAPE, WHAT_FOLLOWS, WHAT_FOLLOWS_REF,
  INDIRECT_UNIT, INDIRECT_REF, INDIRECT_POSS,
  CHEZ_CLAIM, PLACE_UNIT, PLACE_REF, PLACE_POSS,
  GREETING_UNIT, GREETING_REF, NEGATION_UNIT, NEGATION_REF,
  COMPARATIVE_UNIT, COMPARATIVE_REF, POSSESSIVE_PRONOUN_UNIT, POSSESSIVE_PRONOUN_REF,
  REGISTER_UNIT, REGISTER_REF, DIRECT_UNIT, DIRECT_REF, Y_EN_UNIT, Y_EN_REF,
  DOCTOR_REF, SPOKEN_MARK, WRITTEN_MARK,
} from './pronoms-toniques-corpus.ts';
import { PRONOMS_TONIQUES_TERMS } from './pronoms-toniques-terms.ts';

const AUDIO: SectionAudio = { lang: 'fr-FR', mode: 'tts', speeds: [1, 0.65] };

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT I — LE MOT QUI N'ARRIVE PAS
 * ══════════════════════════════════════════════════════════════════════════ */

/** Doctrine §B.2: breakdown, not rudeness. The intercom asks who it is and the
 *  learner reaches for je, because English says « it's I » in nobody's mouth
 *  and « it's me » in everybody's, and the only French word they have for
 *  « I » is je. No spaced exclamation mark in any bubble. */
const SCENE_BEATS: Extract<LessonSection, { type: 'scene' }>['beats'] = [
  {
    kind: 'narration',
    text: 'A building on the rue Mercière in Lyon, a quarter to eight. Julie has invited him to dinner. He presses the button with her name on it and the intercom crackles.',
    size: 'md',
    audio: AUDIO,
  },
  {
    kind: 'bubble',
    from: 'them',
    speaker: 'Julie',
    fr: "Oui ? C'est qui ?",
    en: "Yes? Who's there?",
    respell: '[WEE · seh KEE]',
    stage: 'She cannot see him. She waits for a name, or a word.',
    size: 'md',
    audio: AUDIO,
  },
  {
    kind: 'bubble',
    from: 'you',
    speaker: 'You',
    fr: "C'est je...",
    en: "It's I...",
    respell: '[seh ZHUH]',
    stage: 'He hears it land wrong and stops. It is the only word for I he has.',
    size: 'md',
    audio: AUDIO,
  },
  {
    kind: 'narration',
    text: 'Nothing comes back from the intercom. Somebody behind him wants to get in with a bag of shopping, and waits too.',
    size: 'md',
    audio: AUDIO,
  },
  {
    kind: 'choice',
    prompt: 'One more go. Julie is still listening. What does he say?',
    size: 'lg',
    options: [
      { fr: "C'est je, Paul.", respell: '[seh ZHUH · POL]', en: "It's I, Paul.", outcome: 'breaks', audio: AUDIO },
      { fr: "C'est moi, Paul.", respell: '[seh MWAH · POL]', en: "It's me, Paul.", outcome: 'works', audio: AUDIO },
    ],
    followUp: {
      works: 'The door buzzes before he has finished his name. Two words, and she knew the voice.',
      breaks: 'A pause, then the buzz. She let him in on his name, not on the sentence.',
    },
  },
  {
    kind: 'break',
    heading: 'There was no verb after it',
    body: 'je only works with a verb straight after it: je suis, je viens. After c\'est there is no verb coming, so French reaches for a different word for the same person. English does the same thing with I and me.',
    wrong: { fr: "C'est je.", ipa: '/sɛ ʒə/', respell: '[seh ZHUH]', en: "It's I." },
    right: { fr: "C'est moi.", ipa: '/sɛ mwa/', respell: '[seh MWAH]', en: "It's me." },
    coach: `${Cap(SUBJECT_REF)} named this set and put it aside, « ${A105_DEFERRAL} ». This is that lesson.`,
    size: 'lg',
    audio: AUDIO,
  },
  {
    kind: 'resolve',
    text: 'He got up the stairs. On the way he said it twice more under his breath: c\'est moi, c\'est moi.',
    size: 'md',
  },
];

const S01_SCENE: LessonSection = {
  type: 'scene',
  id: 's01-scene',
  render: 'screens',
  layer: 'core',
  title: 'The word that would not come',
  setting: { place: "L'interphone, rue Mercière", city: 'Lyon', time: '19 h 45', ambience: 'a street door, a panel of names, somebody waiting behind him' },
  beats: SCENE_BEATS,
  closing: { text: 'Eight words, and you have been using half of them for months.', size: 'md' },
  audio: AUDIO,
  say: REFRAME,
  terms: ['onItsOwn'],
};

const S02_GOALS: LessonSection = {
  type: 'goals',
  id: 's02-goals',
  layer: 'core',
  title: 'By the end of this lesson',
  goals: [
    { t: 'Say me, you, him and them when no verb follows', s: 'Act 2, and it is the intercom' },
    { t: 'Know the six places this set turns up', s: 'Act 2: after a little word, after c\'est, alone, in front' },
    { t: 'Keep lui and elle apart, and eux and elles', s: 'Act 3, where the gender comes back' },
    { t: 'Stop reaching for je where moi belongs', s: 'Act 4, the trap' },
  ],
  audio: AUDIO,
  say: REFRAME,
};

/** REQUIRED LAYOUT 1. The four that change, subject beside stressed, same
 *  person. DISPLAY_PARITY pins all eight rows. */
const S03_PAIRS: LessonSection = {
  type: 'cardDeck',
  id: 's03-pairs',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  title: 'The word you have, and the word you need',
  frSub: 'Avec un verbe, sans verbe',
  hint: 'Four cards. The same person twice on each.',
  say: `« ${WHAT_FOLLOWS} » is how ${WHAT_FOLLOWS_REF} put it, and ${INDIRECT_REF} used it on lui. Here it covers all eight.`,
  audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a2-36-pairs' },
  terms: ['onItsOwn', 'sameFour'],
  cards: [
    {
      head: 'je, then moi',
      label: 'a verb follows · nothing follows',
      fr: "Je suis là. / C'est moi.",
      sub: '[zhuh swee LAH] then [seh MWAH]',
      body: 'The same person, the speaker. On the left a verb comes straight after, so je. On the right nothing does, so moi.',
    },
    {
      head: 'tu, then toi',
      label: 'a verb follows · nothing follows',
      fr: 'Tu viens ? / Et toi ?',
      sub: '[tü VYEHⁿ] then [ay TWAH]',
      body: `You have said Et toi ? since ${GREETING_REF}. It was never a fixed phrase: it is tu with no verb after it.`,
    },
    {
      head: 'il, then lui',
      label: 'a verb follows · a little word before',
      fr: 'Il part. / On part sans lui.',
      sub: '[eel PAR] then [ohⁿ PAR sahⁿ LWEE]',
      body: 'il has part straight after it. lui has sans in front and nothing behind, and it is the same man.',
    },
    {
      head: 'ils, then eux',
      label: 'a verb follows · a little word before',
      fr: 'Ils arrivent. / Je dîne avec eux.',
      sub: '[eel zah-REEV] then [zhuh DEEN ah-vek UH]',
      body: 'The one that looks least like its partner. Same people, and the only thing that moved is the verb.',
    },
  ],
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT II — OÙ IL SE MET  (the Owns, half one, six missions)
 * ══════════════════════════════════════════════════════════════════════════ */

/** THE SIX PLACES, on four cards: after a little word, after c'est, alone,
 *  in front for weight. Joined-with-et and after-que are in s07 and s14. */
const S04_PLACES: LessonSection = {
  type: 'cardDeck',
  id: 's04-places',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  title: 'Where it turns up',
  hint: 'Four cards, and not one verb straight after the word.',
  audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a2-36-places' },
  say: REFRAME,
  terms: ['onItsOwn'],
  cards: [
    {
      head: 'after a little word',
      label: 'avec, sans, pour, chez',
      fr: 'Je parle avec elle.',
      sub: '[zhuh PARL ah-vek EHL]',
      body: `« ${CHEZ_CLAIM} » is ${PLACE_POSS}'s line. That chez moi was already this set.`,
    },
    {
      head: "after c'est",
      label: 'who is it',
      fr: "C'est moi.",
      sub: '[seh MWAH]',
      body: "The intercom. c'est is followed by a person, never by a verb, so the person is always this set: c'est moi, c'est lui, c'est nous.",
    },
    {
      head: 'alone, as an answer',
      label: 'one word is the whole reply',
      fr: 'Qui veut du café ? Moi.',
      sub: '[kee vuh dü kah-FAY · MWAH]',
      body: 'A one-word answer has no verb at all. Moi, toi, lui. Pas moi. Lui aussi.',
    },
    {
      head: 'in front, for weight',
      label: 'pointing, then starting',
      fr: 'Moi, je suis prêt.',
      sub: '[MWAH zhuh swee PREH]',
      body: 'moi does not replace je here. Both are there: moi points at the person, then je starts the verb. English does it with its voice.',
    },
  ],
};

/** REQUIRED LAYOUT 2. All eight in one frame. The lui cell is a2.24's own row
 *  .263, so the set includes a card the learner has already seen. */
const S05_EIGHT: LessonSection = {
  type: 'examples',
  id: 's05-eight',
  layer: 'core',
  title: 'All eight, one frame',
  examples: [
    { fr: "C'est pour moi.", en: "It's for me.", note: 'je becomes moi' },
    { fr: "C'est pour toi.", en: "It's for you (one friend).", note: 'tu becomes toi' },
    { fr: "C'est pour lui.", en: "It's for him.", note: `il becomes lui, and ${INDIRECT_REF} had this one` },
    { fr: "C'est pour elle.", en: "It's for her.", note: 'elle stays elle' },
    { fr: "C'est pour nous.", en: "It's for us.", note: 'nous stays nous' },
    { fr: "C'est pour vous.", en: "It's for you (polite, or more than one).", note: 'vous stays vous' },
    { fr: "C'est pour eux.", en: "It's for them (men, or a mixed group).", note: 'ils becomes eux' },
    { fr: "C'est pour elles.", en: "It's for them (all women).", note: 'elles stays elles' },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['sameFour'],
};

/** WHAT THE EAR CAN DO. hideLines, or it is a reading exercise with a play
 *  button. The first two lines are ONE sound, and the first question says so. */
const S06_LISTEN: LessonSection = {
  type: 'listening',
  id: 's06-listen',
  layer: 'core',
  hideLines: true,
  title: 'The ones you can hear, and the pair you cannot',
  lines: [
    { fr: "C'est pour elle.", en: "It's for her." },
    { fr: "C'est pour elles.", en: "It's for them (all women)." },
    { fr: "C'est pour eux.", en: "It's for them (men, or a mixed group)." },
    { fr: "C'est pour lui.", en: "It's for him." },
  ],
  questions: [
    {
      q: 'The first two. Can you hear any difference?',
      opts: ['yes, the second is longer', 'no, they are the same sound', 'yes, the second ends on an s'],
      correct: 1,
      why: 'elle and elles are one sound. The s is written and never said, so only the rest of the conversation tells you how many.',
    },
    {
      q: 'The third one. What is the last sound?',
      opts: ['a vowel, like the u in fur', 'an l', 'an s'],
      correct: 0,
      why: 'eux is one vowel and nothing else. No l, no s. That is why you can always hear eux against elles.',
    },
    {
      q: 'Which of the four is about one man?',
      opts: ['the first', 'the third', 'the fourth'],
      correct: 2,
      why: 'lui, after pour. Here it means him and only him.',
    },
    {
      q: 'Which one could be about a group of men and women?',
      opts: ['the third', 'the second', 'the first'],
      correct: 0,
      why: 'eux. One man in the group is enough, exactly as with ils.',
    },
  ],
  audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a2-36-listen' },
  say: REFRAME,
  terms: ['sameFour', 'euxElles'],
};

/** SORT BY THE VERB TEST. Every item fr is its row verbatim
 *  (production-surface.test.ts, seed-wide). */
const S07_SORT: LessonSection = {
  type: 'groupDrill',
  id: 's07-sort',
  layer: 'core',
  size: 'lg',
  title: 'Is there a verb right after it',
  groups: [
    {
      label: 'A verb straight after it, so the set you had',
      items: [
        { fr: 'Je suis là.', itemId: E(400), note: 'je, then suis', en: "I'm here." },
        { fr: 'Tu viens ?', itemId: E(402), note: 'tu, then viens', en: 'Are you coming?' },
        { fr: 'Il part.', itemId: E(404), note: 'il, then part', en: "He's leaving." },
        { fr: 'Ils arrivent.', itemId: E(406), note: 'ils, then arrivent', en: "They're arriving." },
      ],
      check: {
        q: 'What do all four have straight after the pronoun?',
        opts: ['a little word like avec', 'a verb', 'nothing at all'],
        correct: 1,
        why: 'A verb, every time. That is the only place je, tu, il and ils can go.',
      },
    },
    {
      label: 'No verb after it, so the new set',
      items: [
        { fr: "C'est moi.", itemId: E(401), note: "after c'est", en: "It's me." },
        { fr: 'Et toi ?', itemId: E(403), note: 'alone', en: 'And you?' },
        { fr: 'Paul et moi, nous partons demain.', itemId: E(427), note: 'joined with et, and nous comes back for the verb', en: 'Paul and I are leaving tomorrow.' },
        { fr: 'Il est plus grand que moi.', itemId: 'fr.a2.comparaisons.133', note: `after que, and ${COMPARATIVE_REF} owns the rest`, en: 'He is taller than me.' },
      ],
      check: {
        q: 'Paul et moi, nous partons. Why is nous there as well?',
        opts: ['partons needs a subject right in front of it', 'it is a mistake', 'nous means and'],
        correct: 0,
        why: 'moi cannot start a verb. Paul and I together are we, so nous comes back to carry partons.',
      },
    },
    {
      label: 'The same word in both jobs',
      items: [
        { fr: 'Elle, elle adore la montagne en hiver.', itemId: 'fr.a2.pronoms-essentiels.054', note: 'elle twice', en: 'She loves the mountains in winter.' },
        { fr: 'Nous, nous restons ici pour le moment.', itemId: 'fr.a2.pronoms-essentiels.057', note: 'nous twice', en: "We're staying here for now." },
        { fr: 'Vous, vous connaissez déjà la réponse.', itemId: 'fr.a2.pronoms-essentiels.060', note: 'vous twice', en: 'You already know the answer.' },
        { fr: 'Elles, elles arrivent toujours en avance.', itemId: 'fr.a2.pronoms-essentiels.066', note: 'elles twice', en: 'They always arrive early.' },
      ],
      check: {
        q: 'Nous, nous restons ici. Which nous has the verb straight after it?',
        opts: ['the first', 'both of them', 'the second'],
        correct: 2,
        why: 'The second. The first points, the second starts restons. Same spelling, two jobs.',
      },
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['onItsOwn', 'sameFour'],
};

/** THE GENERALISATION. The control page hands over derrière, which appears
 *  nowhere else in the lesson except the quiz (corpus §I). */
const S08_UNSEEN: LessonSection = {
  type: 'groupDrill',
  id: 's08-unseen',
  layer: 'core',
  size: 'lg',
  title: 'Now do it with a word we never gave you',
  groups: [
    {
      label: 'Little words you have already had',
      items: [
        { fr: 'Elle est devant toi.', itemId: E(435), note: 'devant, in front of', en: "She's in front of you." },
        { fr: 'Il est à côté de moi.', itemId: E(436), note: 'à côté de, next to', en: "He's next to me." },
        { fr: 'Je parle avec elle.', itemId: E(429), note: 'avec', en: "I'm talking with her." },
        { fr: 'Nous jouons souvent au foot avec eux.', itemId: 'fr.a2.pronoms-essentiels.062', note: 'avec again', en: 'We often play soccer with them.' },
      ],
      check: {
        q: 'What decided moi and toi in the first two?',
        opts: ['the little word in front', 'who is speaking', 'the verb at the start'],
        correct: 0,
        why: 'A little word in front and no verb after. Which little word it is makes no difference.',
      },
    },
    {
      label: 'And now a little word nobody has shown you',
      items: [],
      check: {
        q: `${UNSEEN.word} means ${UNSEEN.en}. He is behind you, a friend. Which one?`,
        opts: [`Il est ${UNSEEN.word} tu.`, `Il est ${UNSEEN.word} te.`, `Il est ${UNSEEN.word} toi.`],
        correct: 2,
        why: 'You had never seen this word and the rule handled it. No verb after it, so toi.',
      },
    },
    {
      label: 'And with people who are not you',
      items: [
        { fr: 'Je dîne chez eux.', itemId: E(431), note: 'chez, a group', en: "I'm having dinner at their place." },
        { fr: 'Je pars sans elle.', itemId: E(430), note: 'sans, one woman', en: "I'm leaving without her." },
        { fr: "C'est pour nous.", itemId: E(411), note: 'pour, us', en: "It's for us." },
        { fr: 'Je parle avec lui.', itemId: 'fr.a2.pronoms-essentiels.261', note: 'avec, one man', en: 'I talk with him.' },
      ],
      check: {
        q: 'Four little words, four people. How many times did the rule change?',
        opts: ['four', 'twice', 'not once'],
        correct: 2,
        why: 'Not once. A little word in front, nothing after, and the person takes this set every time.',
      },
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['onItsOwn'],
};

/** THE PARADIGM, ONE MISSION. Six rows is the Pixel 6 ceiling, so the four
 *  that match share two rows. Three columns. */
const S09_TABLE: LessonSection = {
  type: 'tapTable',
  id: 's09-table',
  layer: 'core',
  title: 'All eight, one screen',
  cols: ['Verb next', 'On its own', 'Example'],
  rows: [
    { cells: ['je', 'moi', 'avec moi'], say: "C'est pour moi.", detail: { title: 'je and moi', body: 'The one you will say most. je before a verb, moi everywhere else.', say: "C'est moi." } },
    { cells: ['tu', 'toi', 'chez toi'], say: "C'est pour toi.", detail: { title: 'tu and toi', body: 'Et toi ? was always this. tu before a verb, toi everywhere else.', say: 'Et toi ?' } },
    { cells: ['il', 'lui', 'sans lui'], say: "C'est pour lui.", detail: { title: 'il and lui', body: 'After a little word lui is him and nothing else. Act three is about why.', say: "C'est lui." } },
    { cells: ['ils', 'eux', 'avec eux'], say: "C'est pour eux.", detail: { title: 'ils and eux', body: 'Men, or any group with a man in it. The one that looks least like its partner.', say: "C'est eux." } },
    { cells: ['elle · elles', 'elle · elles', 'pour elle'], say: "C'est pour elle.", detail: { title: 'elle and elles', body: 'No change at all. And the two sound the same, so the s is only ever on the page.', say: "C'est pour elles." } },
    { cells: ['nous · vous', 'nous · vous', 'chez nous'], say: "C'est pour nous.", detail: { title: 'nous and vous', body: 'No change either. That is why Nous, nous restons looks like a stammer and is not one.', say: "C'est pour vous." } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['sameFour', 'onItsOwn'],
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT III — LÀ OÙ LE GENRE REVIENT  (the Owns, half two, five missions)
 * ══════════════════════════════════════════════════════════════════════════ */

/** TRAP 1. a2.24's two lines quoted verbatim on the cards that name it. The
 *  extension is this lesson's: after a little word lui is him only. */
const S10_LUI: LessonSection = {
  type: 'cardDeck',
  id: 's10-lui',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  title: 'The lui that keeps its gender',
  hint: 'Four cards. The third is the whole of it.',
  audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a2-36-lui' },
  say: REFRAME,
  terms: ['himOnly'],
  cards: [
    {
      head: `${Cap(INDIRECT_REF)} said this first`,
      label: 'lui in front of the verb',
      fr: 'Je lui parle.',
      sub: '[zhuh lwee PARL]',
      body: `« ${GENDER_LOST} » That is ${INDIRECT_POSS}'s line, and it is true here: him or her.`,
    },
    {
      head: 'and this too',
      label: 'lui after a little word',
      fr: 'Je parle avec lui.',
      sub: '[zhuh PARL ah-vek LWEE]',
      body: `« ${STRESSED_RULE} » is ${INDIRECT_POSS}'s other line about lui.`,
    },
    {
      head: 'and here is what changes',
      label: 'him · her',
      fr: 'Je parle avec lui. / Je parle avec elle.',
      sub: '[ah-vek LWEE] · [ah-vek EHL]',
      body: `${A236_SHAPE} The lui in front of a verb lost the gender. This one never did.`,
    },
    {
      head: 'sans elle',
      label: 'and the z you did not write',
      fr: 'Je pars sans elle.',
      sub: '[zhuh PAR sahⁿ ZEHL]',
      body: 'sans ends in a silent s until a vowel follows, and then it moves across as a z. Say sahⁿ ZEHL, not sahⁿ EHL.',
    },
  ],
};

/** TRAP 2. eux or elles, and a mixed group is eux. DISPLAY_PARITY pins the
 *  pair. */
const S11_EUX: LessonSection = {
  type: 'examples',
  id: 's11-eux',
  layer: 'core',
  title: 'Eux or elles',
  examples: [
    { fr: 'Marc et Julie ? Je pars avec eux.', en: "Marc and Julie? I'm leaving with them.", note: 'one man in the group, so eux' },
    { fr: 'Léa et Julie ? Je pars avec elles.', en: "Léa and Julie? I'm leaving with them.", note: 'all women, so elles' },
    { fr: 'Je dîne chez eux.', en: "I'm having dinner at their place.", note: 'chez eux, and the z moves across' },
    { fr: 'Je dîne chez elles.', en: "I'm having dinner at their place.", note: 'chez elles, same z' },
    { fr: 'Nous jouons souvent au foot avec eux.', en: 'We often play soccer with them.', note: 'avec eux' },
    { fr: 'Je pars en week-end avec elles.', en: "I'm going away for the weekend with them.", note: 'avec elles' },
    { fr: 'Eux, ils habitent à la campagne.', en: 'They live in the countryside.', note: 'eux in front, then ils for the verb' },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['euxElles'],
};

/** REQUIRED LAYOUT 3. The register pair, marked on BOTH halves. The axis is
 *  a2.01's and nothing is added to it. */
const S12_CEST: LessonSection = {
  type: 'cardDeck',
  id: 's12-cest',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  title: "Who is it? C'est...",
  hint: 'Four cards. The last two say the same thing in two registers.',
  audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a2-36-cest' },
  say: REFRAME,
  terms: ['cestEux'],
  cards: [
    {
      head: 'one person',
      label: "only c'est",
      fr: "C'est lui. / C'est elle.",
      sub: '[seh LWEE] · [seh TEHL]',
      body: "Him, her. c'est elle has a t that moves across onto elle: seh TEHL, never seh EHL.",
    },
    {
      head: 'us',
      label: "only c'est",
      fr: "C'est nous.",
      sub: '[seh NOO]',
      body: "Nous is plural and still takes c'est. Only eux and elles have a second way.",
    },
    {
      head: 'the one you write',
      label: WRITTEN_MARK,
      fr: 'Ce sont eux.',
      sub: '[suh sohⁿ TUH]',
      body: `sont for several people, the written French ${REGISTER_REF} set out. A letter, an email, an exam.`,
    },
    {
      head: 'the one you hear',
      label: SPOKEN_MARK,
      fr: "C'est eux.",
      sub: '[seh TUH]',
      body: 'Correct, and far more common out loud. The same pair works for elles: Ce sont elles, C\'est elles.',
    },
  ],
};

/** A reading passage. Every stressed pronoun has its person named first. */
const S13_READ: LessonSection = {
  type: 'reading',
  id: 's13-read',
  layer: 'core',
  questionsInModal: true,
  title: 'A dinner on the rue Mercière',
  text: "Ce soir, Marc et Julie font une fête chez eux. Moi, je viens avec ma sœur Léa. Elle ne connaît pas les autres invités, alors elle reste à côté de moi. Mon frère vient aussi, mais sans sa copine : elle travaille ce soir. À la porte, Julie demande qui a apporté le gâteau. Léa répond : « C'est moi. » Plus tard, Marc et Hugo arrivent avec les boissons. Eux, ils ont oublié les verres. Julie rit : « Sans eux, pas de fête. »",
  glossary: [
    { word: 'une fête', en: 'a party', note: 'Feminine. Faire une fête is to throw a party.' },
    { word: 'les autres invités', en: 'the other guests', note: 'invité is a guest, somebody who was asked to come.' },
    { word: 'sa copine', en: 'his girlfriend', note: 'sa because copine is feminine, not because of him.' },
    { word: 'a apporté', en: 'brought', note: 'From apporter, in the past with avoir.' },
    { word: 'les boissons', en: 'the drinks', note: 'Feminine plural.' },
    { word: 'les verres', en: 'the glasses', note: 'Masculine plural. The things you drink from.' },
  ],
  questions: [
    { q: 'Chez eux. Who is eux?', a: 'Marc and Julie, named just before. A man and a woman, so eux and not elles.' },
    { q: 'Elle reste à côté de moi. Who is moi?', a: 'The person telling the story. A little word, de, and then moi.' },
    { q: 'Why does Léa answer with moi?', a: "After c'est there is no verb coming, so the speaker is moi, never je." },
    { q: 'Eux, ils ont oublié les verres. Why both eux and ils?', a: 'eux points at Marc and Hugo, then ils starts the verb. eux on its own cannot carry ont.' },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['euxElles', 'onItsOwn'],
};

const S14_FLASH: LessonSection = {
  type: 'flashcards',
  id: 's14-flash',
  layer: 'core',
  title: 'Build it from the English',
  cards: [
    { front: "It's me.", back: "C'est moi.", say: "C'est moi." },
    { front: 'And you? (a friend)', back: 'Et toi ?', say: 'Et toi ?' },
    { front: 'without him', back: 'sans lui', say: 'On part sans lui.' },
    { front: 'with her', back: 'avec elle', say: 'Je parle avec elle.' },
    { front: 'at their place (men, or mixed)', back: 'chez eux', say: 'Je dîne chez eux.' },
    { front: 'at their place (all women)', back: 'chez elles', say: 'Je dîne chez elles.' },
    { front: 'for us', back: 'pour nous', say: "C'est pour nous." },
    { front: 'Not me.', back: 'Pas moi.', say: 'Pas moi.' },
    { front: 'Him too.', back: 'Lui aussi.', say: 'Lui aussi.' },
    { front: 'Paul and I are leaving.', back: 'Paul et moi, nous partons.', say: 'Paul et moi, nous partons demain.' },
    { front: 'taller than me', back: 'plus grand que moi', say: 'Il est plus grand que moi.' },
    { front: "It's them. (said)", back: "C'est eux.", say: "C'est eux." },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['onItsOwn', 'euxElles'],
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT IV — JE OU MOI  (the trap, four missions)
 * ══════════════════════════════════════════════════════════════════════════ */

/** THE TRAP: je where moi belongs. The wrong form lives only in promptSound.
 *  Walks rule > cards > audio > drill, gated, no `size` (a2.34's shape). */
const S15_TRAP: LessonSection = {
  type: 'trapDrill',
  id: 's15-trap',
  layer: 'core',
  swipe: true,
  title: 'Je or moi',
  rule: {
    title: 'je needs a verb straight after it',
    body: 'English has I and me and you already pick between them without thinking. French has je and moi, and the question is simpler than English: is a verb coming straight after? If not, it is moi.',
  },
  cards: [
    { promptLabel: "after c'est", promptSound: "C'est je.", fr: "C'est moi.", ipa: '/sɛ mwa/', tip: 'The intercom. Nothing follows, so moi.' },
    { promptLabel: 'after a little word', promptSound: 'Il vient avec je.', fr: 'Il vient avec moi.', ipa: '/il vjɛ̃ a.vɛk mwa/', tip: 'avec in front, nothing after. moi.' },
    { promptLabel: 'as an answer', promptSound: 'Je aussi.', fr: 'Moi aussi.', ipa: '/mwa o.si/', tip: 'A reply with no verb in it at all.' },
    { promptLabel: 'after que', promptSound: 'Il est plus grand que je.', fr: 'Il est plus grand que moi.', ipa: '/il ɛ ply ɡʁɑ̃ kə mwa/', tip: `${Cap(COMPARATIVE_REF)} owns the comparison. The moi at the end is this lesson.` },
    { promptLabel: 'joined with et', promptSound: 'Paul et je, nous partons.', fr: 'Paul et moi, nous partons demain.', ipa: '/pɔl e mwa nu paʁ.tɔ̃ də.mɛ̃/', tip: 'moi with et, then nous to carry the verb.' },
    { promptLabel: 'in front, for weight', promptSound: 'Moi suis prêt.', fr: 'Moi, je suis prêt.', ipa: '/mwa ʒə sɥi pʁɛ/', tip: 'moi cannot start a verb. je comes back for suis.' },
  ],
  drill: [
    { promptSay: "C'est ... .", opts: ['moi', 'je'], correct: 0 },
    { promptSay: '... suis prêt.', opts: ['Moi', 'Je'], correct: 1 },
    { promptSay: 'Il vient avec ... .', opts: ['je', 'moi'], correct: 1 },
    { promptSay: '... aussi.', opts: ['Moi', 'Je'], correct: 0 },
    { promptSay: 'Et ... ? (a friend)', opts: ['tu', 'toi'], correct: 1 },
    { promptSay: '... viens ce soir ?', opts: ['Tu', 'Toi'], correct: 0 },
    { promptSay: 'On part sans ... . (him)', opts: ['il', 'lui'], correct: 1 },
    { promptSay: '... part demain. (he)', opts: ['Il', 'Lui'], correct: 0 },
  ],
  steps: [
    { label: 'The rule', kind: 'rule', title: 'je needs a verb straight after it' },
    { label: 'Six sentences', kind: 'cards', title: 'Six places with no verb' },
    { label: 'Hear them', kind: 'audio', title: 'And say them after' },
    { label: 'Now you pick', kind: 'drill', title: 'Eight in a row', gate: true },
  ],
  audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a2-36-trap' },
  say: REFRAME,
  terms: ['onItsOwn'],
};

const S16_ERRORS: LessonSection = {
  type: 'commonErrors',
  id: 's16-errors',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'The five that catch people',
  errors: [
    {
      wrong: 'Et tu ?',
      right: 'Et toi ?',
      why: 'Reasonable, because tu is the word for you. With no verb after it, it is toi.',
    },
    {
      wrong: 'Je pars avec il.',
      right: 'Je pars avec lui.',
      why: 'Reasonable, because il is the word for he. After a little word, he becomes lui.',
    },
    {
      wrong: 'Marie ? Je parle avec lui.',
      right: 'Marie ? Je parle avec elle.',
      why: `Reasonable, because ${INDIRECT_REF} taught you lui is him or her. That lui sits in front of a verb. After avec, lui is him only and her is elle.`,
    },
    {
      wrong: 'Marc et Julie ? Je dîne chez elles.',
      right: 'Marc et Julie ? Je dîne chez eux.',
      why: 'Reasonable, because Julie is a woman. One man in the group is enough, so eux.',
    },
    {
      wrong: 'Ils, ils habitent à la campagne.',
      right: 'Eux, ils habitent à la campagne.',
      why: 'Reasonable, because elle, nous, vous and elles do repeat. ils is one of the four that change, and the one out in front is eux.',
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['himOnly', 'euxElles'],
};

/** THE CHUNKS THE LEARNER ALREADY HAS, cited to the lessons that shipped them.
 *  Recognition only: no imperative is taught (corpus header). The one card on
 *  à moi points at a2.34, which owns it, and is the only place a possessive
 *  pronoun is named. */
const S17_KNOWN: LessonSection = {
  type: 'cardDeck',
  id: 's17-known',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  title: 'You have been saying it for months',
  hint: 'Four cards, four lessons you have already done.',
  audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a2-36-known' },
  say: REFRAME,
  terms: ['known'],
  cards: [
    {
      head: 'Excusez-moi',
      label: `since ${GREETING_REF}`,
      fr: 'Excusez-moi',
      sub: '[ehk-skü-zay-MWAH]',
      body: 'moi at the end of a request. The verb is in front of it, not after it, so the rule holds.',
    },
    {
      head: 'Montrez-moi',
      label: `since ${DOCTOR_REF}`,
      fr: 'Montrez-moi où ça fait mal.',
      sub: '[mohⁿ-tray MWAH oo sa feh MAL]',
      body: 'The same shape at the doctor. Learn these as you meet them; nothing here asks you to build new ones.',
    },
    {
      head: 'Moi non plus',
      label: `since ${NEGATION_REF}`,
      fr: "Je n'aime pas le café. Moi non plus.",
      sub: '[mwah nohⁿ PLÜ]',
      body: `${Cap(NEGATION_REF)} taught the reply. It was moi all along, and so is lui non plus, eux non plus.`,
    },
    {
      head: "C'est à moi",
      label: `since ${POSSESSIVE_PRONOUN_REF}`,
      fr: "C'est à moi.",
      sub: '[seh tah MWAH]',
      body: `à is a little word, so moi. ${Cap(POSSESSIVE_PRONOUN_REF)} set it beside le mien and that pairing is still its own.`,
    },
  ],
};

const S18_DICTEE: LessonSection = {
  type: 'dictation',
  id: 's18-dictee',
  layer: 'core',
  title: 'Write what you hear',
  itemIds: DICTEE_IDS,
  audio: AUDIO,
  say: REFRAME,
  terms: ['onItsOwn'],
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT V — PRODUCTION
 * ══════════════════════════════════════════════════════════════════════════ */

/** Two alts and a userEn on every turn (scenario.logic.test.ts). Present
 *  tense only, no conditional, no imparfait. */
const S19_TALK: LessonSection = {
  type: 'scenario',
  id: 's19-talk',
  layer: 'core',
  title: 'Who is coming with whom',
  setting: 'Julie is organising a weekend in the Alps and wants to know who comes, who drives and who sleeps where.',
  turns: [
    {
      ai: 'On part samedi matin. Qui vient avec moi ?',
      en: 'We leave on Saturday morning. Who is coming with me?',
      user: 'Moi, je viens avec toi.',
      userEn: "Me, I'm coming with you. (moi in front, je for the verb, toi after avec.)",
      alts: [
        { fr: 'Moi, je viens.', en: "Me, I'm coming." },
        { fr: 'Je viens avec toi.', en: "I'm coming with you." },
      ],
    },
    {
      ai: 'Et ton frère ?',
      en: 'And your brother?',
      user: 'Lui aussi. Il vient avec nous.',
      userEn: 'Him too. He is coming with us. (lui alone, then il for the verb.)',
      alts: [
        { fr: 'Lui aussi.', en: 'Him too.' },
        { fr: 'Il vient avec nous.', en: 'He is coming with us.' },
      ],
    },
    {
      ai: 'Et Léa et Julie, elles viennent ?',
      en: 'And Léa and Julie, are they coming?',
      user: 'Non, on part sans elles.',
      userEn: "No, we're leaving without them. (All women, so elles.)",
      alts: [
        { fr: 'Non, pas elles.', en: 'No, not them.' },
        { fr: 'Non, elles ne viennent pas.', en: "No, they're not coming." },
      ],
    },
    {
      ai: 'Et Marc et Hugo ? Tu dors chez eux ?',
      en: 'And Marc and Hugo? Are you sleeping at their place?',
      user: 'Oui, je dors chez eux.',
      userEn: "Yes, I'm sleeping at their place. (Men, so eux, and the z of chez moves across.)",
      alts: [
        { fr: 'Oui, chez eux.', en: 'Yes, at their place.' },
        { fr: 'Oui, je dors chez Marc et Hugo.', en: "Yes, I'm sleeping at Marc and Hugo's." },
      ],
    },
    {
      ai: "Moi, je n'ai pas de voiture.",
      en: "Me, I don't have a car.",
      user: 'Moi non plus.',
      userEn: `Me neither. (${Cap(NEGATION_REF)} gave you this reply.)`,
      alts: [
        { fr: "Moi non plus, je n'ai pas de voiture.", en: "Me neither, I don't have a car." },
        { fr: 'Non, moi non plus.', en: 'No, me neither.' },
      ],
    },
    {
      ai: 'Alors qui a les billets de train ?',
      en: 'So who has the train tickets?',
      user: "C'est moi. Ils sont pour nous.",
      userEn: "It's me. They're for us. (c'est moi, then nous after pour.)",
      alts: [
        { fr: "C'est moi.", en: "It's me." },
        { fr: 'Moi. Ils sont pour nous.', en: "Me. They're for us." },
      ],
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['onItsOwn', 'euxElles'],
};

/** `skill: 'speak'` needs voiceflash on every id: authored rows plus the
 *  imports that carry it. NOT_SPEAKABLE is asserted absent by the batch. */
const S20_SPEAK: LessonSection = {
  type: 'practice',
  id: 's20-speak',
  layer: 'core',
  title: 'Say all eight, out loud',
  skill: 'speak',
  itemIds: [
    ...ALL_ROWS.map((r) => r.id),
    ...IMPORTED.headwords,
    'fr.a2.pronoms-essentiels.238', 'fr.a2.pronoms-essentiels.261',
    'fr.a2.pronoms-essentiels.262', 'fr.a2.pronoms-essentiels.263',
    ...IMPORTED.chez, 'fr.a1.rp-identite.014', 'fr.a2.comparaisons.133',
    ...IMPORTED.possession, ...IMPORTED.requests,
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['onItsOwn'],
};

const S21_CHECK: LessonSection = {
  type: 'progressCheck',
  id: 's21-check',
  layer: 'core',
  title: 'Where you stand',
  body: 'You can put moi, toi, lui and eux where no verb follows, including after a little word this lesson never showed you. The thing to check is the one nobody corrects: avec lui about a woman is understood, and wrong. Go back to act three and say the four pairs out loud until elle comes first.',
  stats: [
    { k: 'Forms', v: 'eight, and four are words you had' },
    { k: 'Decided by', v: 'whether a verb comes straight after' },
    { k: 'Him only', v: 'lui after a little word' },
    { k: 'One sound', v: 'elle and elles' },
  ],
  audio: AUDIO,
  say: REFRAME,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT VI — L'EXAMEN
 * ══════════════════════════════════════════════════════════════════════════ */

/** ONE QUIZ, 30 questions, 8/8/7/7. typeIn 14 · mcq 8 · errorSpot 6 ·
 *  listenChoose 2. fold() keeps a final -s, so avec elle / avec elles is a
 *  legal typed contrast when the stem fixes the number; the ear cannot hear
 *  it, so no ear question offers both. */
const S22_QUIZ: LessonSection = {
  type: 'quiz',
  id: 's22-quiz',
  layer: 'core',
  title: 'The exam',
  passMark: 70,
  roundFailThreshold: 60,
  rounds: [
    {
      id: 'r1-which',
      label: 'je or moi',
      targets: ['je-for-moi'],
      questions: [
        { format: 'typeIn', q: "The intercom asks who it is. It's you. Start with C'est.", answer: "C'est moi", accept: ["C'est moi", "C'est moi.", 'Cest moi'], why: "Nothing follows c'est, so the speaker is moi.", ref: 's04-places' },
        { format: 'typeIn', q: 'With me. Two words.', answer: 'avec moi', accept: ['avec moi', 'avec moi.'], why: 'avec in front and nothing after, so moi.', ref: 's09-table' },
        { format: 'typeIn', q: 'Somebody says they love this song. You do too. Two words.', answer: 'Moi aussi', accept: ['Moi aussi', 'Moi aussi.'], why: 'A reply with no verb in it, so moi. Je aussi is what English would build.', ref: 's04-places' },
        { format: 'mcq', q: 'Which one is French?', opts: ['Je, je suis prêt.', 'Moi, je suis prêt.', 'Moi suis prêt.'], correct: 1, why: 'moi out in front to point, then je to start suis. moi cannot start a verb on its own.', ref: 's04-places' },
        { format: 'typeIn', q: 'And you? Said to a friend. Two words.', answer: 'Et toi ?', accept: ['Et toi ?', 'Et toi', 'Et toi?'], why: 'tu with no verb after it becomes toi.', ref: 's03-pairs' },
        { format: 'errorSpot', q: 'One word is from the wrong set. Write the sentence out.', prompt: "C'est je.", answer: "C'est moi.", accept: ["C'est moi.", "C'est moi"], why: "The intercom. je needs a verb after it and c'est has none coming.", ref: 's15-trap' },
        { format: 'errorSpot', q: 'One word is from the wrong set. Write it correctly.', prompt: 'Il vient avec je.', answer: 'Il vient avec moi.', accept: ['Il vient avec moi.', 'Il vient avec moi'], why: 'After avec, moi. je only ever sits in front of a verb.', ref: 's15-trap' },
        { format: 'mcq', q: 'Paul and I are leaving tomorrow. Which is right?', opts: ['Paul et je, nous partons demain.', 'Je et Paul partons demain.', 'Paul et moi, nous partons demain.'], correct: 2, why: 'moi with et, then nous comes back to carry partons.', ref: 's07-sort' },
      ],
    },
    {
      id: 'r2-lui',
      label: 'Him, her, and the new little word',
      targets: ['lui-for-her'],
      questions: [
        { format: 'typeIn', q: 'Without him. Two words.', answer: 'sans lui', accept: ['sans lui', 'sans lui.'], why: 'il becomes lui after a little word.', ref: 's09-table' },
        { format: 'typeIn', q: 'With her. Marie is one woman. Two words.', answer: 'avec elle', accept: ['avec elle', 'avec elle.'], why: 'One woman, so elle, with no s. After avec, lui would mean a man.', ref: 's10-lui' },
        { format: 'errorSpot', q: 'You are talking about Marie. One word is wrong. Write it out.', prompt: 'Je parle avec lui.', answer: 'Je parle avec elle.', accept: ['Je parle avec elle.', 'Je parle avec elle'], why: `After avec, lui is him only. The lui that means him or her is ${INDIRECT_POSS}'s, in front of a verb.`, ref: 's10-lui' },
        { format: 'mcq', q: 'Je lui parle. Who could lui be?', opts: ['only a man', 'a man or a woman', 'several people'], correct: 1, why: `In front of the verb, lui is him or her. ${Cap(INDIRECT_REF)} made the point.`, ref: 's10-lui' },
        { format: 'mcq', q: 'Je parle avec lui. Who is lui here?', opts: ['a man or a woman', 'several people', 'only a man'], correct: 2, why: 'After a little word the gender comes back. Him only; her would be elle.', ref: 's10-lui' },
        { format: 'listenChoose', q: 'Listen. Is the person a man or a woman?', say: 'Je pars sans elle.', opts: ['a man', 'a woman'], correct: 1, why: 'sahⁿ ZEHL: elle, with the z of sans carried across. A man would be sans lui.', ref: 's10-lui' },
        { format: 'typeIn', q: `${UNSEEN.word} means ${UNSEEN.en}. He is behind you, a friend. Start with Il est.`, answer: `Il est ${UNSEEN.word} toi`, accept: [`Il est ${UNSEEN.word} toi`, `Il est ${UNSEEN.word} toi.`, 'Il est derriere toi'], why: 'A little word you had not seen, and the same rule: no verb after it, so toi.', ref: 's08-unseen' },
        { format: 'typeIn', q: "It's for him. Start with C'est.", answer: "C'est pour lui", accept: ["C'est pour lui", "C'est pour lui.", 'Cest pour lui'], why: 'pour in front, nothing after, one man: lui.', ref: 's05-eight' },
      ],
    },
    {
      id: 'r3-eux',
      label: 'Eux or elles',
      targets: ['eux-elles'],
      questions: [
        { format: 'typeIn', q: "Marc and Julie. You are leaving with them. Start with Je pars.", answer: 'Je pars avec eux', accept: ['Je pars avec eux', 'Je pars avec eux.'], why: 'One man in the group is enough for eux.', ref: 's11-eux' },
        { format: 'typeIn', q: 'Léa and Julie, both women. You are having dinner at their place. Start with Je dîne.', answer: 'Je dîne chez elles', accept: ['Je dîne chez elles', 'Je dîne chez elles.', 'Je dine chez elles'], why: 'All women, so elles, with the s you cannot hear.', ref: 's11-eux' },
        { format: 'errorSpot', q: 'Marc and Julie invited you. One word is wrong. Write it out.', prompt: 'Je dîne chez elles.', answer: 'Je dîne chez eux.', accept: ['Je dîne chez eux.', 'Je dîne chez eux', 'Je dine chez eux'], why: 'Julie is a woman and Marc is not. A mixed group is eux.', ref: 's11-eux' },
        { format: 'listenChoose', q: 'Listen. Which word did you hear at the end?', say: 'Je dîne avec eux.', opts: ['eux', 'elles'], correct: 0, why: 'One vowel, no l. eux and elles never sound alike.', ref: 's06-listen' },
        { format: 'mcq', q: "C'est pour elle. C'est pour elles. What separates them when you say them?", opts: ['nothing at all', 'the last sound', 'the first word'], correct: 0, why: 'Nothing. They are one sound, and only the page, or the conversation, tells you how many.', ref: 's06-listen' },
        { format: 'typeIn', q: 'Point at them first: a group of men. They live in the countryside. Start with Eux.', answer: 'Eux, ils habitent à la campagne', accept: ['Eux, ils habitent à la campagne', 'Eux, ils habitent à la campagne.', 'Eux ils habitent a la campagne'], why: 'eux out in front, then ils to carry habitent.', ref: 's11-eux' },
        { format: 'errorSpot', q: 'The word out in front is from the wrong set. Write it out.', prompt: 'Ils, ils habitent à la campagne.', answer: 'Eux, ils habitent à la campagne.', accept: ['Eux, ils habitent à la campagne.', 'Eux, ils habitent à la campagne', 'Eux, ils habitent a la campagne.'], why: 'ils is one of the four that change. Out in front, it is eux.', ref: 's16-errors' },
      ],
    },
    {
      id: 'r4-cest',
      label: "C'est eux, and the rest",
      targets: ['register'],
      questions: [
        { format: 'mcq', q: 'Which one would you write in a formal email?', opts: ["C'est eux.", 'Ce sont eux.', "C'est ils."], correct: 1, why: 'Ce sont eux is the written one. The third is not French at all.', ref: 's12-cest' },
        { format: 'mcq', q: 'Which one will you hear far more often out loud?', opts: ['Ce sont eux.', 'Ce sont ils.', "C'est eux."], correct: 2, why: "C'est eux. Both are correct, and this is the one people say.", ref: 's12-cest' },
        { format: 'typeIn', q: "It's us. Start with C'est.", answer: "C'est nous", accept: ["C'est nous", "C'est nous.", 'Cest nous'], why: "nous is the same in both jobs, and it takes c'est.", ref: 's12-cest' },
        { format: 'typeIn', q: `He is taller than me. ${Cap(COMPARATIVE_REF)} gave you the frame. Start with Il est.`, answer: 'Il est plus grand que moi', accept: ['Il est plus grand que moi', 'Il est plus grand que moi.'], why: 'After que there is no verb, so moi.', ref: 's07-sort' },
        { format: 'mcq', q: 'Qui veut du café ? What is the shortest right answer?', opts: ['Moi.', 'Je.', 'Me.'], correct: 0, why: 'A one-word answer is always this set. Me is English.', ref: 's04-places' },
        { format: 'typeIn', q: `It's mine, said the way people say it. ${Cap(POSSESSIVE_PRONOUN_REF)} gave you this one. Start with C'est.`, answer: "C'est à moi", accept: ["C'est à moi", "C'est à moi.", "C'est a moi", 'Cest a moi'], why: 'à is a little word, so moi after it.', ref: 's17-known' },
        { format: 'errorSpot', q: 'You and I are leaving. One word is wrong. Write it out.', prompt: 'Toi et moi, vous partons.', answer: 'Toi et moi, nous partons.', accept: ['Toi et moi, nous partons.', 'Toi et moi, nous partons'], why: 'You and I together are we, so nous carries the verb.', ref: 's07-sort' },
      ],
    },
  ],
  audio: AUDIO,
  say: REFRAME,
};

const S23_REVIEW: LessonSection = {
  type: 'reviewDeck',
  id: 's23-review',
  layer: 'core',
  title: 'The eight, one last time',
  cards: [
    { front: "It's me.", back: "C'est moi.", say: "C'est moi." },
    { front: 'And you?', back: 'Et toi ?', say: 'Et toi ?' },
    { front: 'without him', back: 'sans lui', say: 'On part sans lui.' },
    { front: 'with her', back: 'avec elle', say: 'Je parle avec elle.' },
    { front: 'for us', back: 'pour nous', say: "C'est pour nous." },
    { front: 'for you (polite)', back: 'pour vous', say: "C'est pour vous." },
    { front: 'at their place (mixed)', back: 'chez eux', say: 'Je dîne chez eux.' },
    { front: 'for them (all women)', back: 'pour elles', say: "C'est pour elles." },
  ],
  audio: AUDIO,
  say: REFRAME,
};

const S24_ROUNDUP: LessonSection = {
  type: 'roundup',
  id: 's24-roundup',
  layer: 'core',
  title: 'The verb decided, every time',
  body: `${REFRAME} ${Cap(DIRECT_REF)}, ${INDIRECT_REF} and ${Y_EN_REF} put small words in front of the verb. This set never goes there. It goes where nothing follows, which is why you had been using it for months before it had a name.`,
  points: [
    'je, tu, il, ils before a verb. moi, toi, lui, eux everywhere else.',
    'elle, nous, vous and elles do both jobs unchanged.',
    'After a little word, lui is him and her is elle.',
    `Ce sont eux is written, C'est eux is said, and ${REGISTER_REF} set that axis.`,
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['onItsOwn', 'himOnly'],
};

/* ══════════════════════════════════════════════════════════════════════════
 *  THE REFERENCE SHEET: one table, three columns, all eight rows.
 * ══════════════════════════════════════════════════════════════════════════ */

const SHEET_EIGHT: ReferenceSheet = {
  id: 'sheet-eight',
  title: 'The eight, on one page',
  layer: 'deep',
  contains: ['both sets side by side', 'the six places', 'the two gender traps'],
  sections: [
    {
      type: 'teach',
      id: 'sheet-teach',
      layer: 'deep',
      render: 'sheet',
      title: 'How to read this',
      body: `The left column is the set ${SUBJECT_REF} gave you, and it only ever goes right in front of a verb. The middle column is everything else: after a little word like avec, sans, pour or chez; after c'est; alone as an answer; out in front for weight, with the left-hand word coming back for the verb; after que in a comparison; and joined with et. Four rows change and four do not. After a little word, lui is him only and her is elle, and eux covers any group with a man in it.`,
    },
    {
      type: 'table',
      id: 'sheet-table',
      layer: 'deep',
      render: 'sheet',
      title: 'Les pronoms toniques',
      cols: ['Verb next', 'On its own', 'Example'],
      rows: [
        ['je', 'moi', "C'est moi."],
        ['tu', 'toi', 'Et toi ?'],
        ['il', 'lui (him only)', 'sans lui'],
        ['elle', 'elle', 'avec elle'],
        ['nous', 'nous', 'chez nous'],
        ['vous', 'vous', 'pour vous'],
        ['ils', 'eux (men, or mixed)', 'avec eux'],
        ['elles', 'elles (all women)', 'avec elles'],
      ],
    },
  ],
};

/* ══════════════════════════════════════════════════════════════════════════
 *  REMEDIATION DRILLS. Each is the first resolving target of one round.
 * ══════════════════════════════════════════════════════════════════════════ */

const DRILLS: LessonDrill[] = [
  {
    id: 'd-verb',
    title: 'Is a verb coming?',
    format: 'sort' as const,
    coach: 'Two piles. Look at what comes straight after the pronoun. A verb, or nothing.',
    buckets: ['a verb follows', 'nothing follows'],
    items: [E(400), E(401), E(402), E(403), E(404), E(405), E(406), E(407)],
    audio: AUDIO,
  },
  {
    id: 'd-lui',
    title: 'Him or her',
    format: 'mcq' as const,
    coach: 'After a little word, ask: one man, or one woman?',
    q: 'Marie is coming too. Je pars avec ... .',
    opts: ['lui', 'elle', 'elles'],
    correct: 1,
    why: 'One woman after avec is elle. lui would mean a man, and elles several women.',
    items: [E(429), E(430), 'fr.a2.pronoms-essentiels.261', 'fr.a2.pronoms-essentiels.238', 'fr.a2.pronoms-essentiels.052'],
    audio: AUDIO,
  },
  {
    id: 'd-eux',
    title: 'Eux or elles',
    format: 'mcq' as const,
    coach: 'Is there a man in the group? Then eux.',
    q: 'Marc et Julie ? Je dîne chez ... .',
    opts: ['elles', 'eux', 'ils'],
    correct: 1,
    why: 'A mixed group is eux. ils only ever sits in front of a verb.',
    items: [E(431), E(432), E(433), E(434), 'fr.a2.pronoms-essentiels.061', 'fr.a2.pronoms-essentiels.064'],
    audio: AUDIO,
  },
  {
    id: 'd-cest',
    title: "C'est, and who",
    format: 'flashcard' as const,
    coach: "Read the English, then say the French. After c'est it is always this set.",
    items: [E(401), E(415), E(416), E(417), E(418), E(419), 'fr.a1.mots-essentiels.181', 'fr.a1.mots-essentiels.176', 'fr.a1.famille.084'],
    audio: AUDIO,
  },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  THE LESSON
 * ══════════════════════════════════════════════════════════════════════════ */

export const SECTIONS: LessonSection[] = [
  S01_SCENE, S02_GOALS, S03_PAIRS,
  S04_PLACES, S05_EIGHT, S06_LISTEN, S07_SORT, S08_UNSEEN, S09_TABLE,
  S10_LUI, S11_EUX, S12_CEST, S13_READ, S14_FLASH,
  S15_TRAP, S16_ERRORS, S17_KNOWN, S18_DICTEE,
  S19_TALK, S20_SPEAK, S21_CHECK,
  S22_QUIZ, S23_REVIEW, S24_ROUNDUP,
];

export const ITEM_IDS = [...new Set([...ALL_ROWS.map((r) => r.id), ...IMPORT_IDS])];

/** Every flashcard-carrying item released exactly once. NOT_DECK_ABLE rows
 *  are named instead (terms, drills, s17). */
export const DECK_TRANCHE: string[][] = [
  // act 1: the four pairs
  [E(400), E(401), E(402), E(403), E(404), E(405), E(406), E(407)],
  // act 2: the frame, the places, the headwords and the theme's own sentences
  [
    E(408), E(409), E(410), E(411), E(412), E(413), E(414),
    E(422), E(423), E(424), E(425), E(426), E(427), E(428), E(435), E(436),
    ...IMPORTED.headwords, ...IMPORTED.emphasis, ...IMPORTED.prepSentences,
    ...IMPORTED.chez, 'fr.a2.comparaisons.133', 'fr.a2.pronoms-essentiels.263',
  ],
  // act 3: the two traps and c'est
  [
    E(415), E(416), E(417), E(418), E(419), E(420), E(421),
    E(429), E(430), E(431), E(432), E(433), E(434),
    'fr.a2.pronoms-essentiels.238', 'fr.a2.pronoms-essentiels.261', 'fr.a2.pronoms-essentiels.262',
  ],
  // act 4: the chunks already met
  [
    'fr.a1.rp-identite.014', 'fr.a2.negation-et-restriction.070', 'fr.a2.negation-et-restriction.071',
    'fr.a2.negation-et-restriction.072', 'fr.a1.salutations.020',
    ...IMPORTED.possession, ...IMPORTED.requests,
  ],
  [],
  [],
];

export const LESSON: Lesson = {
  id: LESSON_ID,
  unitId: UNIT.id,
  seq: 1,
  title: UNIT.title,
  level: 'a2',
  tag: 'A2 · LEÇON 36',
  intro: "English says I before a verb and me everywhere else, and you pick between them without thinking. French does the same with je and moi, and with three more pairs. You already say Et toi ? and chez moi. This lesson is the rule behind them.",
  skill: 'PE',
  grammarAssumed: [
    SUBJECT_UNIT, GREETING_UNIT, NEGATION_UNIT, PLACE_UNIT, INDIRECT_UNIT,
    DIRECT_UNIT, Y_EN_UNIT, COMPARATIVE_UNIT, POSSESSIVE_PRONOUN_UNIT, REGISTER_UNIT, 'a2.02',
  ],
  grammarIntroduced: [
    'The stressed (disjunctive) pronouns moi, toi, lui, elle, nous, vous, eux, elles as a set, completing the deferral on a1.05 sheet-stressed',
    'Distribution: after a preposition, after c\'est, as a verbless answer, left-dislocated for emphasis with the clitic subject resumed, after que in a comparison, and in coordinated subjects resumed by nous or vous',
    'That four forms differ from the subject clitics (moi, toi, lui, eux) and four are homographic with them (elle, nous, vous, elles)',
    'That stressed lui is masculine only, against the gender-neutral indirect-object lui of a2.24',
    'eux for masculine or mixed plural reference, elles for all-feminine',
    "The register pair ce sont eux (written) and c'est eux (spoken)",
    'Recognition only of the stressed pronoun after an affirmative imperative (Excusez-moi, Montrez-moi); the imperative itself is not taught',
  ],
  overview: {
    titleEn: UNIT.title,
    subFr: UNIT.sub,
    introFr: "Pas de verbe juste après ? Alors c'est moi, pas je.",
    minutes: 32,
    difficulty: 2,
    glyph: '☝',
    screens: 90,
  },
  reframe: REFRAME,
  acts: [
    {
      id: 'act1',
      title: "Le mot qui n'arrive pas",
      sections: ['s01-scene', 's02-goals', 's03-pairs'],
      milestone: 'You heard je fail at an intercom and saw the four pairs that change',
      estScreens: 14,
      restPoints: ['s02-goals'],
    },
    {
      id: 'act2',
      title: 'Où il se met',
      sections: ['s04-places', 's05-eight', 's06-listen', 's07-sort', 's08-unseen', 's09-table'],
      milestone: 'You put toi after a little word this lesson never showed you',
      estScreens: 26,
      restPoints: ['s05-eight', 's09-table'],
    },
    {
      id: 'act3',
      title: 'Là où le genre revient',
      sections: ['s10-lui', 's11-eux', 's12-cest', 's13-read', 's14-flash'],
      milestone: 'lui is him and elle is her, and one man makes it eux',
      estScreens: 22,
      restPoints: ['s11-eux', 's13-read'],
    },
    {
      id: 'act4',
      title: 'Je ou moi',
      sections: ['s15-trap', 's16-errors', 's17-known', 's18-dictee'],
      milestone: 'je stops turning up where no verb follows',
      estScreens: 17,
      restPoints: ['s17-known'],
    },
    {
      id: 'act5',
      title: 'Production',
      sections: ['s19-talk', 's20-speak', 's21-check'],
      milestone: 'You planned a weekend, six turns, and said who goes with whom',
      estScreens: 11,
      restPoints: ['s20-speak'],
    },
    {
      id: 'act6',
      title: "L'examen",
      sections: ['s22-quiz', 's23-review', 's24-roundup'],
      milestone: 'Thirty questions, and the eight one last time',
      estScreens: 10,
      restPoints: ['s23-review'],
    },
  ],
  errorTriggers: [
    { id: 'je-for-moi', description: 'Uses je, tu, il or ils where no verb follows.', detectOn: ['s03-pairs', 's04-places', 's15-trap'], drill: 'd-verb', retest: 'd-verb' },
    { id: 'lui-for-her', description: 'Uses lui after a little word for a woman.', detectOn: ['s10-lui', 's16-errors'], drill: 'd-lui', retest: 'd-lui' },
    { id: 'eux-elles', description: 'Uses elles for a group with a man in it, or eux for a group of women.', detectOn: ['s11-eux', 's16-errors'], drill: 'd-eux' },
    { id: 'register', description: "Mixes up who is named after c'est, or writes the said form where the written one belongs.", detectOn: ['s12-cest', 's17-known'], drill: 'd-cest' },
  ],
  drills: DRILLS,
  deckTranche: DECK_TRANCHE,
  sheets: [SHEET_EIGHT],
  terms: PRONOMS_TONIQUES_TERMS,
  sections: SECTIONS,
  itemIds: ITEM_IDS,
  version: 1,
  audio: {
    defaultLang: 'fr-FR',
    speeds: [1, 0.65],
    coachVoice: 'coach-en-warm',
    recorded: [
      { id: 'rec-a2-36-pairs', desc: 'Four cards, the same person said twice on each. ONE TAKE PER CARD. The stressed form carries the phrase stress because it ends the phrase; do not add more than that.' },
      { id: 'rec-a2-36-places', desc: "Four sentences, read as ordinary speech. In Moi, je suis prêt the moi is set off by a short pause and je is quick and unstressed." },
      { id: 'rec-a2-36-listen', desc: 'ONE TAKE, ONE VOICE, the four lines adjacent and in order. elle and elles MUST be read identically: no audible s, no lengthening. The first question depends on it.' },
      { id: 'rec-a2-36-lui', desc: 'Je lui parle has lui unstressed; Je parle avec lui has lui carrying the stress. sans elle is sahⁿ ZEHL, the z moved across, never a pause before elle.' },
      { id: 'rec-a2-36-cest', desc: "c'est elle and c'est eux carry the liaison t onto the pronoun: seh TEHL, seh TUH. Ce sont eux is suh sohⁿ TUH. Read the written and said pair at the same pace; the difference is which one people choose, not how it sounds." },
      { id: 'rec-a2-36-trap', desc: 'The wrong version is in promptSound and must be read at the same pace and intonation as the right one. Only the correct fr is played in the audio step.' },
      { id: 'rec-a2-36-known', desc: 'Four chunks the learner has already met, read as ordinary speech. Excusez-moi as one word with the stress on moi.' },
    ],
  },
};
