// a1.27.l1 "Les nombres 21-100" — the mission journey.
//
// ── What this lesson is, and what makes it different from a1.02 ────────────
//
// a1.02's difficulty was phonetic: a number changes shape depending on what
// follows it. This one's is arithmetic. Above sixty-nine French stops naming
// numbers and starts calculating them out loud, and expects the listener to do
// the sum in real time:
//
//   70   soixante-dix            60 + 10
//   71   soixante et onze        60 + 11        and it takes et
//   80   quatre-vingts           4 x 20
//   81   quatre-vingt-un         4 x 20 + 1     and it does NOT take et
//   97   quatre-vingt-dix-sept   4 x 20 + 10 + 7
//
// Ninety-seven is four words and three operations for one two-digit number. A
// learner who has to compute it has already missed the next thing the speaker
// said, which is why the skill this lesson trains is RECOGNITION SPEED and not
// construction. Anybody can build quatre-vingt-douze given ten seconds. Ten
// seconds is not what a phone number gives you.
//
// ── Where the weight sits, and why ────────────────────────────────────────
//
// Twenty-one to sixty-nine is one regular pattern the learner already
// half-knows from vingt et un: a ten, a hyphen, a unit, with `et` on the six
// that end in one. Three missions, and the act moves on. Everything after
// sixty-nine gets twelve.
//
// ── The a1.02 dependency, which the brief got wrong ───────────────────────
//
// The brief said a1.02 still had `lessonIds: []` and told this lesson to
// decide explicitly what to do about it. Checked on 2026-08-05: a1.02.l1
// exists, the unit links it, and the claim had gone stale. So the declared
// prerequisite is TAKEN rather than worked around. One to twenty is used
// constantly here and taught nowhere: every number in this range ends in one
// of them, `vingt` is shown as the anchor the learner arrives with, and the
// nine words onze through dix-neuf come back wholesale inside the seventies
// and the nineties. Nothing re-teaches them. Duplicating a1.02's material
// would make both lessons worse.
//
// ── The L4 boundary, and how it is held ───────────────────────────────────
//
// a1.28 owns cent as a MULTIPLIER (deux cents, trois cent trente), mille and
// million. This lesson owns `cent` standing alone as the ceiling its canDo
// names. The test is production, the same split a1.02 held for twenty: a
// multiplier may appear inside a sentence that is read or heard, and may not
// appear in a deckTranche, a flashcard, a review card, a dictation sentence,
// or as the answer to a typeIn, errorSpot or speak question. Asserted against
// those surfaces specifically rather than against every string, so legitimate
// context does not fire it and nobody deletes the check.
//
// ── What the corpus said that the brief did not ───────────────────────────
//
// Three claims were checked against the seed before anything was authored:
//
//   Coverage of 21 to 100 is complete, as promised: eighty headwords, all with
//   IPA and a respelling, all carrying flashcard and voiceflash. Not one
//   number is authored here. See nombres21-ids.ts.
//
//   The phone-number payoff is NOT sitting in the corpus. The sentence the
//   brief pointed at (fr.a1.nombres.049) reads "zéro six, douze, vingt,
//   trente", which is a1.02's range, and none of the theme's five phone-number
//   sentences uses a form above sixty-nine. It had to be authored, and it is
//   the whole reason this range matters.
//
//   Eighteen sentences use a 70/80/90 form, not the fourteen the brief said,
//   and five of those eighteen are contaminated with cent or mille and so
//   belong to a1.28. Thirteen usable, which is thin enough that the listening
//   missions reuse them deliberately rather than each finding a fresh one.
//
// ── Section shapes with a history ─────────────────────────────────────────
//
//   No section sets `size: 'xl'`. ownsLayout() ignores section size so the
//   field looks inert, but density.logic.ts reads xl as one French unit at
//   56pt and caps EVERY string in the section at 12 words. The card decks sit
//   at lg, where a number and its decomposition both fit.
//
//   commonErrors carries `swipe: true` and `size: 'lg'`. Without swipe it is a
//   scrolling list rather than one trap per screen, and it used to render as
//   nothing at all.
//
//   `reading` carries questionsInModal WITH questions, the only path that
//   reaches PassagePage and therefore the only path that draws a glossary.
//
//   ONE quiz section. lessonPager.logic.ts appends exactly one quiz page and
//   resolves it with sections.find(s => s.type === 'quiz'). A second is a set
//   of questions no learner reaches.
//
//   `autoplay` is authored nowhere. It is declared in schema.ts and
//   implemented in no component. `audioFirst` is the one that does the work.
//
//   Every respelling INLINED here closes its nasal vowels with a superscript
//   n. The surrounding corpus does not: 36 of the items this lesson references
//   would fail the validator if their respelling were copied in verbatim
//   (quatre-vingts as kah-truh-VAN, cent as SAHN). Referencing by id is safe,
//   because the respelling resolves at render time and never enters a section.
//
//   The setting carries no image. assets/lessons/ holds alphabet, muettes,
//   rythme and salutations and nothing for this lesson, and Metro resolves
//   require() statically, so registering a ref with no file breaks the bundle
//   rather than degrading to no image.

import type { Lesson, LessonAct, LessonDrill, LessonSection, ErrorTrigger, ReferenceSheet, SceneBeat } from '../../../ealch-v2/src/content/schema.ts';
import { REFRAME, NOMBRES21_TERMS } from './nombres21-terms.ts';
import {
  EASY_IDS,
  HARD_IDS,
  CENT_ID,
  TENS_IDS,
  ET_IDS,
  SPEAK_IDS,
  LISTEN_IDS,
  DICTATION_IDS,
  ITEM_IDS,
} from './nombres21-ids.ts';

export { REFRAME };

/* ─── Mission 1 · Scene ───────────────────────────────────────────────────
 *
 * The A1 register of stakes is a moment going wrong for a reason the learner
 * could not have seen coming, not a mouth position. Here it is somebody giving
 * their phone number at the speed everybody gives a phone number, in the
 * two-digit chunks every French number is given in, and the learner losing it
 * at the second chunk.
 *
 * The choice beat is the learner's own and both options are plausible: asking
 * for it again, or saying you have it and finding the number later. The second
 * is what most people do, and it is why the flat goes to somebody else.
 *
 * The break is the lesson: quatre-vingt-douze decomposed against
 * quatre-vingt-douze as one shape. Both are the same word. That is the point. */

const SCENE_BEATS: SceneBeat[] = [
  {
    kind: 'narration',
    size: 'md',
    text: 'A flat viewing in Lyon, six in the evening. She likes you, the flat is yours, and she is giving you her number for the keys.',
    audio: { mode: 'tts', voice: 'coach' },
  },
  {
    kind: 'bubble',
    from: 'them',
    reveal: 'tap',
    size: 'md',
    speaker: 'The landlord',
    // Five two-digit chunks, which is a whole French mobile number. An earlier
    // draft stopped after three, and nobody gives three: the difficulty being
    // dramatised is holding all five in a row, so a fragment would have shown
    // an easier problem than the one the lesson exists for.
    fr: 'C’est le zéro six, quatre-vingt-douze, soixante-quinze, quatre-vingt-un, trente-trois.',
    en: 'It is zero six, ninety-two, seventy-five, eighty-one, thirty-three.',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a1-27-scene' },
  },
  {
    kind: 'narration',
    size: 'md',
    text: 'You have zéro six. You were still working out the second one while she said the other three.',
    audio: { mode: 'tts', voice: 'coach' },
  },
  {
    kind: 'choice',
    size: 'lg',
    prompt: 'She already has her coat on. What do you do?',
    options: [
      {
        fr: 'Oui, c’est noté. Merci.',
        en: 'say you have it, and find the number on the listing later',
        outcome: 'breaks',
        audio: { mode: 'tts', lang: 'fr-FR' },
      },
      {
        fr: 'Pardon, vous pouvez répéter ?',
        en: 'ask her to say it again',
        outcome: 'works',
        audio: { mode: 'tts', lang: 'fr-FR' },
      },
    ],
    followUp: {
      works: 'Good. Said again, each chunk is a number you can hold. Said once, only the ones you know as shapes survive.',
      breaks: 'The listing carries the agency number, not hers. Watch what she actually said.',
    },
  },
  {
    kind: 'bubble',
    from: 'them',
    reveal: 'auto',
    size: 'md',
    speaker: 'The landlord',
    fr: 'Quatre-vingt-douze. Quatre. Vingt. Douze.',
    en: 'Ninety-two. Four. Twenty. Twelve.',
    stage: 'She breaks it apart, and every piece is a word you already have.',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a1-27-scene' },
  },
  {
    kind: 'break',
    size: 'lg',
    // Watched on a Pixel 6 on 2026-08-05 and shortened after. The first draft
    // ran the heading to four lines and the body to 28 words, which pushed the
    // Continue button off the bottom of the break card and left the last line
    // of the body cut. The eight shipped scene breaks run 24 to 40 words and
    // even at 25 the button sits below the fold, so the heading is where the
    // saving actually is: two lines instead of four.
    heading: 'Four, twenty, twelve. Ninety-two.',
    body: 'Every piece is a number you already know. The sum is not the difficulty. Doing it while she keeps talking is, and nobody is quick enough.',
    wrong: {
      fr: 'quatre-vingt-douze',
      ipa: '/katʁ vɛ̃ duz/',
      respell: '[KATR · VAⁿ · DOOZ]',
      en: 'three numbers, added at speed',
    },
    right: {
      fr: 'quatre-vingt-douze',
      ipa: '/ka.tʁə.vɛ̃.duz/',
      respell: '[ka-truh-vaⁿ-DOOZ]',
      en: 'one number, ninety-two',
    },
    coach: 'One shape, not three. That is the difference between hearing it and computing it.',
    // Audio-first: the ear answers before the eye can. ScenePlayer holds the
    // text back and plays the right-hand line on entry.
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], audioFirst: true, recordingId: 'rec-a1-27-pairs' },
  },
  {
    kind: 'bubble',
    from: 'you',
    reveal: 'tap',
    size: 'md',
    fr: 'Quatre-vingt-douze, soixante-quinze, quatre-vingt-un, trente-trois.',
    en: 'Ninety-two, seventy-five, eighty-one, thirty-three.',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65] },
  },
  {
    kind: 'bubble',
    from: 'them',
    reveal: 'auto',
    size: 'md',
    speaker: 'The landlord',
    fr: 'Parfait. Appelez-moi demain.',
    en: 'Perfect. Call me tomorrow.',
    stage: 'She has the keys in her hand.',
    audio: { mode: 'tts', lang: 'fr-FR', recordingId: 'rec-a1-27-scene' },
  },
  {
    kind: 'resolve',
    size: 'md',
    text: 'Two numbers, two shapes, and not one of them worth calculating.',
  },
];

const SECTIONS: LessonSection[] = [
  /* ── Act 1: the number you could not write down ───────────────────────── */

  {
    type: 'scene',
    id: 's01-scene',
    title: 'The Number You Could Not Write Down',
    frSub: 'Zéro six, quatre-vingt-douze',
    render: 'screens',
    layer: 'core',
    terms: ['arith', 'chunks'],
    say: {
      text: 'Watch this happen. Every number she says is made of words you already know, and you will not catch one of them.',
      voice: 'coach',
      timing: 'onFirstVisitOnly',
    },
    setting: {
      place: 'The landing outside a flat, after the viewing',
      city: 'Lyon',
      time: 'Thursday, six in the evening',
      ambience: 'room-tone-stairwell',
    },
    beats: SCENE_BEATS,
    // The reframe is referenced, never retyped, so this appearance cannot drift
    // out of agreement with the other ten the density validator counts.
    closing: {
      size: 'md',
      text: `${REFRAME} That is the whole of this lesson, and it starts at twenty-one.`,
    },
  },

  {
    type: 'goals',
    id: 's02-goals',
    title: 'What You Will Be Able To Do',
    frSub: 'Ce que vous saurez faire',
    layer: 'core',
    say: `${REFRAME} Four things, and the arithmetic is only in the third one.`,
    goals: [
      { t: 'Count to a hundred', s: 'Every number from vingt et un to cent, including the three tens that are sums.' },
      { t: 'Catch one at speed', s: 'Hear quatre-vingt-douze as ninety-two without stopping to add it up.' },
      { t: 'Take a phone number', s: 'Hold five two-digit chunks in a row, which is how every French number is given.' },
      { t: 'Write the two that get written wrong', s: 'Where et appears and where it does not, and the S that comes and goes on eighty.' },
    ],
  },

  {
    type: 'cardDeck',
    id: 's03-shape',
    title: 'Two Numbers, One Job',
    frSub: 'Quarante-cinq, quatre-vingt-douze',
    hint: 'Swipe through the three cards.',
    render: 'deck',
    layer: 'core',
    size: 'lg',
    terms: ['arith'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a1-27-pairs' },
    say: 'One of these is transparent and one is a sum. Your job is identical for both.',
    cards: [
      {
        label: 'The easy one',
        head: 'Forty-five',
        fr: 'quarante-cinq',
        sub: 'ka-rahⁿt-SAⁿK',
        body: 'Forty, then five, joined with a hyphen and in that order. It maps onto English one piece at a time and there is nothing to work out. Most of this range behaves exactly like this.',
      },
      {
        label: 'The hard one',
        head: 'Ninety-two',
        fr: 'quatre-vingt-douze',
        sub: 'ka-truh-vaⁿ-DOOZ',
        body: 'Four twenties and twelve. Three numbers and two operations for one two-digit figure, and French expects you to have the total while the speaker carries on.',
      },
      {
        label: 'The same job',
        head: 'One shape each',
        fr: 'quarante-cinq · quatre-vingt-douze',
        sub: 'ka-rahⁿt-SAⁿK · ka-truh-vaⁿ-DOOZ',
        body: `${REFRAME} You do not derive forty-five and you should not derive ninety-two. Both are one word meaning one number, and the work is recognition rather than arithmetic.`,
      },
    ],
  },

  /* ── Act 2: twenty-one to sixty-nine, and it is fast ──────────────────── */

  {
    type: 'tapTable',
    id: 's04-tens',
    title: 'The Tens',
    frSub: 'Les dizaines',
    layer: 'core',
    terms: ['etRule'],
    sheetId: 'sheet.a1.27.all',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a1-27-count' },
    say: 'Five tens, and only four of them are new. Everything from twenty-one to sixty-nine is one of these plus a number you already have.',
    cols: ['French', 'English', 'Sounds like'],
    rows: [
      {
        cells: ['vingt', 'twenty', 'VAⁿ'],
        say: 'vingt',
        detail: {
          title: 'vingt',
          body: 'The one you arrive with. Twenty-one to twenty-nine are built on it, and it is the only ten in this lesson you were already taught.',
          say: 'vingt-deux',
        },
      },
      {
        cells: ['trente', 'thirty', 'TRAHⁿT'],
        say: 'trente',
        detail: {
          title: 'trente',
          body: 'Thirty. The vowel is nasal, so no N is pronounced: one sound made through the nose, then a T. Thirty-one to thirty-nine follow the same pattern as the twenties.',
          say: 'trente-cinq',
        },
      },
      {
        cells: ['quarante', 'forty', 'ka-RAHⁿT'],
        say: 'quarante',
        detail: {
          title: 'quarante',
          body: 'Forty. Two syllables, stressed on the second, with the same nasal vowel and final T as thirty. Nothing about it echoes quatre, which is the trap an eye makes and an ear does not.',
          say: 'quarante-deux',
        },
      },
      {
        cells: ['cinquante', 'fifty', 'saⁿ-KAHⁿT'],
        say: 'cinquante',
        detail: {
          title: 'cinquante',
          body: 'Fifty. Two nasal vowels in one word, and a K between them. Cinq is inside it and so is the sound of quinze, which is why fifty and fifteen get mixed up in prices.',
          say: 'cinquante-cinq',
        },
      },
      {
        cells: ['soixante', 'sixty', 'swah-SAHⁿT'],
        say: 'soixante',
        detail: {
          title: 'soixante',
          body: 'Sixty, and the last ten in French with a word of its own. Everything above it is built out of this one, which is why it is worth more attention than the four before it.',
          say: 'soixante-trois',
        },
      },
    ],
  },

  {
    type: 'cardDeck',
    id: 's05-etrule',
    title: 'The One Place French Writes And',
    frSub: 'Vingt et un',
    hint: 'Swipe through the three cards.',
    render: 'deck',
    layer: 'core',
    size: 'lg',
    terms: ['etRule'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a1-27-count' },
    say: 'One rule, six numbers, and the single most common written mistake in the whole range.',
    cards: [
      {
        label: 'The rule',
        head: 'Numbers ending in one',
        fr: 'vingt et un',
        sub: 'vaⁿ-tay-UHⁿ',
        body: 'Twenty-one is three separate words with et in the middle and no hyphens anywhere. Thirty-one, forty-one, fifty-one and sixty-one all do the same thing.',
      },
      {
        label: 'Everything else',
        head: 'Two to nine',
        fr: 'vingt-deux · quarante-cinq',
        sub: 'vaⁿt-DEU · ka-rahⁿt-SAⁿK',
        body: 'Every other unit joins straight on with a hyphen and no et. That covers forty-three of the forty-nine numbers between twenty-one and sixty-nine, so the rule is the exception.',
      },
      {
        label: 'Where it stops',
        head: 'Eighty-one and ninety-one',
        fr: 'quatre-vingt-un',
        sub: 'ka-truh-vaⁿ-UHⁿ',
        body: 'Seventy-one keeps the et, as soixante et onze. Eighty-one and ninety-one drop it. There is no reason underneath that you can use, and it is the error people make most.',
      },
    ],
  },

  {
    type: 'listening',
    id: 's06-easy',
    title: 'Four Sentences, Four Numbers',
    frSub: 'Écoutez bien',
    layer: 'core',
    questionsInModal: true,
    terms: ['etRule'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a1-27-listening' },
    say: 'No table this time. The numbers arrive inside sentences, which is where you will meet them.',
    lines: [
      { fr: 'J’ai payé vingt-deux euros cinquante pour ce pull.', en: 'I paid twenty-two euros fifty for this jumper.' },
      { fr: 'Il habite au numéro quarante-sept de la rue.', en: 'He lives at number forty-seven on the street.' },
      { fr: 'Le premier ministre a quarante-neuf ans cette année.', en: 'The prime minister is forty-nine this year.' },
      { fr: 'Pendant notre voyage, nous avons visité vingt et une villes.', en: 'On our trip we visited twenty-one cities.' },
    ],
    questions: [
      {
        q: 'The jumper cost twenty-two euros and how many cents?',
        opts: ['fifteen', 'fifty', 'five', 'forty'],
        correct: 1,
        why: 'Cinquante is fifty and quinze is fifteen. They share a vowel and a K, and a price tag is where the difference costs you money.',
      },
      {
        q: 'What is his house number?',
        opts: ['thirty-seven', 'forty-seven', 'forty-nine', 'fifty-seven'],
        correct: 1,
        why: 'Quarante-sept is forty then seven, hyphenated with no et. Every number below seventy that does not end in one is built exactly that way.',
      },
      {
        q: 'The last line says vingt et une, not vingt et un. Why?',
        opts: ['it is a different number', 'villes is feminine', 'it comes at the end', 'it is plural'],
        correct: 1,
        why: 'One is the only number with a gender, so twenty-one changes to match a feminine noun. Nothing above it ever does.',
      },
    ],
  },

  /* ── Act 3: sixty plus ten ────────────────────────────────────────────── */

  {
    type: 'cardDeck',
    id: 's07-seventy',
    title: 'Sixty, Then Ten',
    frSub: 'Soixante-dix',
    hint: 'Swipe through the three cards.',
    render: 'deck',
    layer: 'core',
    size: 'lg',
    terms: ['arith', 'etRule', 'teensBack'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a1-27-count' },
    say: 'This is where French runs out of words for tens and starts adding them up out loud.',
    cards: [
      {
        label: 'Seventy',
        head: 'There is no word for it',
        fr: 'soixante-dix',
        sub: 'swah-sahⁿt-DEES',
        body: 'Sixty and ten, written and said exactly that way. From here every number is a small sum, and the speaker assumes you have already done it.',
      },
      {
        label: 'Seventy-one',
        head: 'And it takes et',
        fr: 'soixante et onze',
        sub: 'swah-sahⁿ-tay-OHⁿZ',
        body: 'Sixty and eleven, with the same et that twenty-one takes, because onze is standing exactly where un would. Seventy-one is the last number in the language to get it.',
      },
      {
        label: 'The rest',
        head: 'Seventy-two to seventy-nine',
        fr: 'soixante-douze',
        sub: 'swah-sahⁿt-DOOZ',
        body: `${REFRAME} Sixty plus douze through dix-neuf, hyphenated, no et. Nine numbers, and you learned every one of the second halves in the last lesson.`,
      },
    ],
  },

  {
    type: 'tapTable',
    id: 's08-seventies',
    title: 'Seventy to Seventy-Nine',
    frSub: 'De soixante-dix à soixante-dix-neuf',
    layer: 'core',
    terms: ['arith', 'teensBack'],
    sheetId: 'sheet.a1.27.hard',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a1-27-count' },
    // The middle column is the whole reason this table exists and the whole
    // reason it appears once. A learner who keeps consulting it is computing.
    say: `${REFRAME} The middle column is here once, so that you can stop needing it.`,
    cols: ['French', 'The sum', 'Value'],
    rows: [
      {
        cells: ['soixante-dix', '60 + 10', '70'],
        say: 'soixante-dix',
        detail: {
          title: 'soixante-dix',
          body: 'Seventy. Two words you have had since the last lesson, in the order you would guess, meaning something neither of them means alone.',
          say: 'soixante-dix',
        },
      },
      {
        cells: ['soixante et onze', '60 + 11', '71'],
        say: 'soixante et onze',
        detail: {
          title: 'soixante et onze',
          body: 'Seventy-one. The et is here because onze stands where un would stand. It is the only number above sixty-nine that takes one.',
          say: 'soixante et onze',
        },
      },
      {
        cells: ['soixante-douze', '60 + 12', '72'],
        say: 'soixante-douze',
        detail: {
          title: 'soixante-douze',
          body: 'Seventy-two. Douze is built with a Z that never leaves, so this one is easier to catch than most of its neighbours.',
          say: 'soixante-douze',
        },
      },
      {
        cells: ['soixante-quinze', '60 + 15', '75'],
        say: 'soixante-quinze',
        detail: {
          title: 'soixante-quinze',
          body: 'Seventy-five. Also the postal code that opens every Paris address, which makes it the one number in this table you will read before you hear it.',
          say: 'soixante-quinze',
        },
      },
      {
        cells: ['soixante-seize', '60 + 16', '76'],
        say: 'soixante-seize',
        detail: {
          title: 'soixante-seize',
          body: 'Seventy-six. Seize ends on a Z and six ends on an S, so seventy-six and sixty-six are told apart by the last sound and nothing else.',
          say: 'soixante-seize',
        },
      },
      {
        cells: ['soixante-dix-sept', '60 + 10 + 7', '77'],
        say: 'soixante-dix-sept',
        detail: {
          title: 'soixante-dix-sept',
          body: 'Seventy-seven. Three words and two operations. The S of dix says nothing here, exactly as it says nothing in dix-sept.',
          say: 'soixante-dix-sept',
        },
      },
      {
        cells: ['soixante-dix-neuf', '60 + 10 + 9', '79'],
        say: 'soixante-dix-neuf',
        detail: {
          title: 'soixante-dix-neuf',
          body: 'Seventy-nine. The S of dix sounds as a Z here, closing the syllable, which is what it did inside dix-neuf. Nothing new was added for the seventies.',
          say: 'soixante-dix-neuf',
        },
      },
    ],
  },

  {
    type: 'listening',
    id: 's09-hear70',
    title: 'The Seventies, In Sentences',
    frSub: 'Les soixante-dix',
    layer: 'core',
    questionsInModal: true,
    terms: ['arith', 'teensBack'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a1-27-listening' },
    say: 'Four lines at normal speed. The number is never the last word, so there is no pause to work it out in.',
    lines: [
      { fr: 'Au mariage, nous avons invité soixante-dix personnes.', en: 'At the wedding we invited seventy people.' },
      { fr: 'L’appartement fait soixante-douze mètres carrés.', en: 'The flat is seventy-two square metres.' },
      { fr: 'Il reste soixante-quinze pages à lire.', en: 'There are seventy-five pages left to read.' },
      { fr: 'Mon voisin a soixante-dix-sept ans mais il court encore.', en: 'My neighbour is seventy-seven and he still runs.' },
    ],
    questions: [
      {
        q: 'How many people were invited to the wedding?',
        opts: ['sixty', 'sixteen', 'seventy', 'seventeen'],
        correct: 2,
        why: 'Soixante-dix is sixty and ten, which is seventy. There is no separate word for it, and the dix on the end carries the whole difference from sixty.',
      },
      {
        q: 'How big is the flat?',
        opts: ['sixty-two square metres', 'seventy-two square metres', 'eighty-two square metres', 'twelve square metres'],
        correct: 1,
        why: 'Soixante-douze is sixty and twelve, so seventy-two. Soixante-deux ends on deux and is sixty-two, one syllable away.',
      },
      {
        q: 'How old is the neighbour?',
        opts: ['sixty-seven', 'seventy', 'seventy-seven', 'sixty-seventeen'],
        correct: 2,
        why: 'Soixante-dix-sept is sixty, ten, seven. The dix in the middle is the only thing separating it from soixante-sept.',
      },
    ],
  },

  /* ── Act 4: four twenties ─────────────────────────────────────────────── */

  {
    type: 'cardDeck',
    id: 's10-eighty',
    title: 'Four Twenties',
    frSub: 'Quatre-vingts',
    hint: 'Swipe through the three cards.',
    render: 'deck',
    layer: 'core',
    size: 'lg',
    terms: ['arith', 'theS', 'etRule'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a1-27-count' },
    say: 'Eighty does not continue the seventies. It starts again, and it multiplies.',
    cards: [
      {
        label: 'Eighty',
        head: 'Four twenties',
        fr: 'quatre-vingts',
        sub: 'ka-truh-VAⁿ',
        body: 'Not sixty-twenty, which is what the seventies would have predicted. Eighty is four times twenty, written as two words with a hyphen and said as three syllables.',
      },
      {
        label: 'The S',
        head: 'It has one, then it does not',
        fr: 'quatre-vingts · quatre-vingt-un',
        sub: 'ka-truh-VAⁿ · ka-truh-vaⁿ-UHⁿ',
        body: 'Eighty takes an S when it stands as exactly four twenties. Put any number after it and the S goes. You will never hear the difference; you will be marked on it in writing.',
      },
      {
        label: 'No et',
        head: 'Eighty-one',
        fr: 'quatre-vingt-un',
        sub: 'ka-truh-vaⁿ-UHⁿ',
        body: `${REFRAME} Eighty-one refuses the et that twenty-one and seventy-one both take. Eighty-two to eighty-nine hyphenate straight on, using units you already own.`,
      },
    ],
  },

  {
    type: 'tapTable',
    id: 's11-eighties',
    title: 'Eighty to Eighty-Nine',
    frSub: 'De quatre-vingts à quatre-vingt-neuf',
    layer: 'core',
    terms: ['theS', 'arith'],
    sheetId: 'sheet.a1.27.hard',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a1-27-count' },
    say: 'The only row that behaves differently is the first one, and the difference is a letter nobody says.',
    cols: ['French', 'The sum', 'Value'],
    rows: [
      {
        cells: ['quatre-vingts', '4 x 20', '80'],
        say: 'quatre-vingts',
        detail: {
          title: 'quatre-vingts',
          body: 'Eighty, with the S, because nothing follows it. This is the only spelling in the eighties that carries one.',
          say: 'quatre-vingts euros',
        },
      },
      {
        cells: ['quatre-vingt-un', '4 x 20 + 1', '81'],
        say: 'quatre-vingt-un',
        detail: {
          title: 'quatre-vingt-un',
          body: 'Eighty-one. The S has gone because a number follows, and there is no et where twenty-one would have had one.',
          say: 'quatre-vingt-un',
        },
      },
      {
        cells: ['quatre-vingt-deux', '4 x 20 + 2', '82'],
        say: 'quatre-vingt-deux',
        detail: {
          title: 'quatre-vingt-deux',
          body: 'Eighty-two. Deux ends on a vowel and douze ends on a Z, which is the whole of what separates this from ninety-two.',
          say: 'quatre-vingt-deux',
        },
      },
      {
        cells: ['quatre-vingt-cinq', '4 x 20 + 5', '85'],
        say: 'quatre-vingt-cinq',
        detail: {
          title: 'quatre-vingt-cinq',
          body: 'Eighty-five. Cinq ends on a K and quinze ends on a Z, so eighty-five and ninety-five are told apart by one sound at the end.',
          say: 'quatre-vingt-cinq',
        },
      },
      {
        cells: ['quatre-vingt-sept', '4 x 20 + 7', '87'],
        say: 'quatre-vingt-sept',
        detail: {
          title: 'quatre-vingt-sept',
          body: 'Eighty-seven. Sept keeps its T wherever it stands, which makes this one of the steadier numbers up here.',
          say: 'quatre-vingt-sept',
        },
      },
      {
        cells: ['quatre-vingt-huit', '4 x 20 + 8', '88'],
        say: 'quatre-vingt-huit',
        detail: {
          title: 'quatre-vingt-huit',
          body: 'Eighty-eight. Huit starts on a W sound rather than an H, so the join sounds like one long word.',
          say: 'quatre-vingt-huit',
        },
      },
      {
        cells: ['quatre-vingt-neuf', '4 x 20 + 9', '89'],
        say: 'quatre-vingt-neuf',
        detail: {
          title: 'quatre-vingt-neuf',
          body: 'Eighty-nine. The last number before the pattern changes again, and the F on the end is fully said.',
          say: 'quatre-vingt-neuf',
        },
      },
    ],
  },

  {
    type: 'cardDeck',
    id: 's12-ninety',
    title: 'Four Twenties and Ten',
    frSub: 'Quatre-vingt-dix',
    hint: 'Swipe through the three cards.',
    render: 'deck',
    layer: 'core',
    size: 'lg',
    terms: ['arith', 'etRule', 'teensBack'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a1-27-count' },
    say: 'Ninety is eighty with ten added to it, which means it is a sum inside a sum.',
    cards: [
      {
        label: 'Ninety',
        head: 'Where the S is already gone',
        fr: 'quatre-vingt-dix',
        sub: 'ka-truh-vaⁿ-DEES',
        body: 'Four twenties and ten. Dix is a number, so it takes the S off quatre-vingt exactly the way un did. Ninety has no S and nobody has to remember why.',
      },
      {
        label: 'No et again',
        head: 'Ninety-one',
        fr: 'quatre-vingt-onze',
        sub: 'ka-truh-vaⁿ-OHⁿZ',
        body: 'Four twenties and eleven, hyphenated, no et, where seventy-one took one. If you write down a single rule from this lesson, write down that eighty-one and ninety-one refuse it.',
      },
      {
        label: 'The long one',
        head: 'Ninety-seven',
        fr: 'quatre-vingt-dix-sept',
        sub: 'ka-truh-vaⁿ-dee-SET',
        body: `${REFRAME} Four words and three operations for one two-digit number. Anybody can build it given ten seconds, and ten seconds is not what you get.`,
      },
    ],
  },

  {
    type: 'tapTable',
    id: 's13-nineties',
    title: 'Ninety to Ninety-Nine',
    frSub: 'De quatre-vingt-dix à quatre-vingt-dix-neuf',
    layer: 'core',
    terms: ['arith', 'teensBack'],
    sheetId: 'sheet.a1.27.hard',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a1-27-count' },
    say: 'Every second half in this table is a word from eleven to nineteen, doing exactly what it always did.',
    cols: ['French', 'The sum', 'Value'],
    rows: [
      {
        cells: ['quatre-vingt-dix', '4 x 20 + 10', '90'],
        say: 'quatre-vingt-dix',
        detail: {
          title: 'quatre-vingt-dix',
          body: 'Ninety. Never spelled with an S, because dix is a number and a number after quatre-vingt always removes it.',
          say: 'quatre-vingt-dix',
        },
      },
      {
        cells: ['quatre-vingt-onze', '4 x 20 + 11', '91'],
        say: 'quatre-vingt-onze',
        detail: {
          title: 'quatre-vingt-onze',
          body: 'Ninety-one. No et, where seventy-one took one. This and eighty-one are the two exceptions worth writing down.',
          say: 'quatre-vingt-onze',
        },
      },
      {
        cells: ['quatre-vingt-douze', '4 x 20 + 12', '92'],
        say: 'quatre-vingt-douze',
        detail: {
          title: 'quatre-vingt-douze',
          body: 'Ninety-two. The chunk most people lose in a phone number, because it is one syllable away from eighty-two and both are plausible.',
          say: 'quatre-vingt-douze',
        },
      },
      {
        cells: ['quatre-vingt-quinze', '4 x 20 + 15', '95'],
        say: 'quatre-vingt-quinze',
        detail: {
          title: 'quatre-vingt-quinze',
          body: 'Ninety-five. Quinze ends on a Z and cinq ends on a K, so this and eighty-five are separated by the last sound alone.',
          say: 'quatre-vingt-quinze',
        },
      },
      {
        cells: ['quatre-vingt-seize', '4 x 20 + 16', '96'],
        say: 'quatre-vingt-seize',
        detail: {
          title: 'quatre-vingt-seize',
          body: 'Ninety-six. Seize ends on a Z where six ends on an S, which is the same pair you already told apart at sixteen.',
          say: 'quatre-vingt-seize',
        },
      },
      {
        cells: ['quatre-vingt-dix-sept', '4 x 20 + 10 + 7', '97'],
        say: 'quatre-vingt-dix-sept',
        detail: {
          title: 'quatre-vingt-dix-sept',
          body: 'Ninety-seven. Four words, three operations, one two-digit number, and the clearest argument in the language for learning shapes.',
          say: 'quatre-vingt-dix-sept',
        },
      },
      {
        cells: ['quatre-vingt-dix-neuf', '4 x 20 + 10 + 9', '99'],
        say: 'quatre-vingt-dix-neuf',
        detail: {
          title: 'quatre-vingt-dix-neuf',
          body: 'Ninety-nine. The largest number below a hundred, and the one every price ending in ninety-nine cents will hand you without warning.',
          say: 'quatre-vingt-dix-neuf',
        },
      },
    ],
  },

  {
    type: 'examples',
    id: 's14-teensback',
    title: 'You Already Own Two Thirds of This',
    frSub: 'Onze à dix-neuf, encore',
    layer: 'core',
    terms: ['teensBack'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a1-27-count' },
    say: 'Twenty of the thirty numbers above sixty-nine end in a word you learned in the last lesson. Nothing new was invented for any of them.',
    examples: [
      { fr: 'soixante et onze', en: 'seventy-one', note: 'Sixty, then onze. The same eleven, and the only one of these that takes et.' },
      { fr: 'soixante-quinze', en: 'seventy-five', note: 'Sixty, then quinze. Fifteen, doing what it has always done.' },
      { fr: 'quatre-vingt-treize', en: 'ninety-three', note: 'Four twenties, then treize. Thirteen again, inside a number seven times its size.' },
      { fr: 'quatre-vingt-seize', en: 'ninety-six', note: 'Four twenties, then seize. Sixteen, which you can already tell apart from six.' },
      { fr: 'quatre-vingt-dix-neuf', en: 'ninety-nine', note: 'Four twenties, then dix-neuf. Nineteen, and the last number before a hundred.' },
    ],
  },

  {
    type: 'commonErrors',
    id: 's15-traps',
    // `swipe` and `size` are not decoration. MissionSection renders commonErrors
    // as its own swipe deck ONLY when `swipe` is set; without it the section is a
    // scrolling list, and before the fallback was moved out of the switch's
    // `default:` it drew a blank screen.
    swipe: true,
    size: 'lg',
    title: 'Three Traps',
    frSub: 'Trois pièges',
    layer: 'core',
    terms: ['theS', 'etRule', 'arith'],
    say: 'Two of these are written mistakes and one is a listening one. All three are made in the first week.',
    errors: [
      {
        wrong: 'Writing eighty-one as « quatre-vingts-un », with the S left on.',
        right: 'Writing it as « quatre-vingt-un », with no S at all.',
        why: 'Eighty keeps its S only when it stands as exactly four twenties. Any number after it takes the S away, and this is the version that turns up on forms.',
      },
      {
        wrong: 'Writing ninety-one as « quatre-vingt-et-onze ».',
        right: 'Writing it as « quatre-vingt-onze », with no et.',
        why: 'Twenty-one, thirty-one and seventy-one take et. Eighty-one and ninety-one do not, and there is no rule underneath it to work out.',
      },
      {
        wrong: 'Hearing « quatre-vingt-douze » and starting to add up.',
        right: 'Hearing it as ninety-two and staying with the speaker.',
        why: `${REFRAME} By the time four, twenty and twelve are added together, the next number has already been said.`,
      },
    ],
  },

  /* ── Act 5: at speed, and out loud ────────────────────────────────────── */

  {
    type: 'practice',
    id: 's16-neighbours',
    title: 'Seventy-Two or Seventy-Six?',
    frSub: 'Écoutez et choisissez',
    layer: 'core',
    terms: ['teensBack'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65] },
    say: 'Six pairs that differ by one syllable in the middle or at the end. Nothing else separates them.',
    skill: 'listen',
    itemIds: LISTEN_IDS,
  },

  {
    type: 'listening',
    id: 's17-speed',
    title: 'Faster Than You Can Add',
    frSub: 'À vitesse normale',
    layer: 'core',
    // questionsInModal is what makes this the recognition-speed mission rather
    // than a comprehension one: the line plays, the question opens over it, and
    // there is nothing left on screen to reverse-engineer the number from.
    questionsInModal: true,
    terms: ['arith', 'chunks'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a1-27-listening' },
    say: `${REFRAME} These four arrive at the speed a French speaker actually uses, and the question opens over the line rather than beside it.`,
    lines: [
      { fr: 'Ma grand-mère a quatre-vingt-dix ans.', en: 'My grandmother is ninety.' },
      { fr: 'Nous avons parcouru quatre-vingt-douze kilomètres aujourd’hui.', en: 'We covered ninety-two kilometres today.' },
      { fr: 'Pour ce stylo, j’ai payé quatre-vingt-dix-neuf centimes.', en: 'For this pen I paid ninety-nine cents.' },
      { fr: 'Pour le dîner, nous avons dépensé quatre-vingt-quinze euros.', en: 'We spent ninety-five euros on dinner.' },
    ],
    questions: [
      {
        q: 'How old is the grandmother?',
        opts: ['seventy', 'eighty', 'ninety', 'ninety-nine'],
        correct: 2,
        why: 'Quatre-vingt-dix is four twenties and ten. Quatre-vingts alone would have stopped at eighty, and the dix on the end is the entire difference.',
      },
      {
        q: 'How far did they travel?',
        opts: ['eighty-two kilometres', 'ninety-two kilometres', 'sixty-two kilometres', 'twelve kilometres'],
        correct: 1,
        why: 'Quatre-vingt-douze ends on douze, so ninety-two. Quatre-vingt-deux ends on deux and is eighty-two. One syllable, ten apart.',
      },
      {
        q: 'Which cost more, the pen in cents or the dinner in euros?',
        opts: ['the pen, at ninety-nine', 'the dinner, at ninety-five', 'they are equal', 'the pen, at seventy-nine'],
        correct: 0,
        why: 'Ninety-nine is quatre-vingt-dix-neuf and ninety-five is quatre-vingt-quinze. Both open identically, and the last syllable is where the two separate.',
      },
    ],
  },

  {
    type: 'practice',
    id: 's18-speak',
    title: 'Count Out Loud To a Hundred',
    frSub: 'Comptez à voix haute',
    layer: 'core',
    terms: ['arith'],
    audio: { mode: 'mic', lang: 'fr-FR' },
    say: 'The four tens, then every number from seventy to ninety-nine, then the ceiling. One at a time, with a pause after each.',
    skill: 'speak',
    itemIds: SPEAK_IDS,
  },

  {
    type: 'vocabThemes',
    id: 's19-words',
    title: 'The Words Themselves',
    frSub: 'Le vocabulaire',
    layer: 'core',
    terms: ['etRule', 'theS'],
    sheetId: 'sheet.a1.27.all',
    say: 'Five decks, split where the language splits. Open whichever you want first.',
    themes: [
      {
        title: 'The tens',
        cards: [
          { fr: 'vingt', sub: 'VAⁿ', en: 'twenty, from the last lesson' },
          { fr: 'trente', sub: 'TRAHⁿT', en: 'thirty' },
          { fr: 'quarante', sub: 'ka-RAHⁿT', en: 'forty' },
          { fr: 'cinquante', sub: 'saⁿ-KAHⁿT', en: 'fifty' },
          { fr: 'soixante', sub: 'swah-SAHⁿT', en: 'sixty, the last with its own word' },
          { fr: 'cent', sub: 'SAHⁿ', en: 'a hundred' },
        ],
      },
      {
        title: 'The six that take et',
        cards: [
          { fr: 'vingt et un', sub: 'vaⁿ-tay-UHⁿ', en: 'twenty-one' },
          { fr: 'trente et un', sub: 'trahⁿ-tay-UHⁿ', en: 'thirty-one' },
          { fr: 'quarante et un', sub: 'ka-rahⁿ-tay-UHⁿ', en: 'forty-one' },
          { fr: 'cinquante et un', sub: 'saⁿ-kahⁿ-tay-UHⁿ', en: 'fifty-one' },
          { fr: 'soixante et un', sub: 'swah-sahⁿ-tay-UHⁿ', en: 'sixty-one' },
          { fr: 'soixante et onze', sub: 'swah-sahⁿ-tay-OHⁿZ', en: 'seventy-one, the last one' },
        ],
      },
      {
        title: 'Seventy to seventy-nine',
        cards: [
          { fr: 'soixante-dix', sub: 'swah-sahⁿt-DEES', en: 'seventy' },
          { fr: 'soixante et onze', sub: 'swah-sahⁿ-tay-OHⁿZ', en: 'seventy-one' },
          { fr: 'soixante-douze', sub: 'swah-sahⁿt-DOOZ', en: 'seventy-two' },
          { fr: 'soixante-treize', sub: 'swah-sahⁿt-TREHZ', en: 'seventy-three' },
          { fr: 'soixante-quatorze', sub: 'swah-sahⁿt-ka-TORZ', en: 'seventy-four' },
          { fr: 'soixante-quinze', sub: 'swah-sahⁿt-KAⁿZ', en: 'seventy-five' },
          { fr: 'soixante-seize', sub: 'swah-sahⁿt-SEHZ', en: 'seventy-six' },
          { fr: 'soixante-dix-sept', sub: 'swah-sahⁿt-dee-SET', en: 'seventy-seven' },
          { fr: 'soixante-dix-huit', sub: 'swah-sahⁿt-dee-ZWEET', en: 'seventy-eight' },
          { fr: 'soixante-dix-neuf', sub: 'swah-sahⁿt-deez-NEUF', en: 'seventy-nine' },
        ],
      },
      {
        title: 'Eighty to eighty-nine',
        cards: [
          { fr: 'quatre-vingts', sub: 'ka-truh-VAⁿ', en: 'eighty, and the only one with an S' },
          { fr: 'quatre-vingt-un', sub: 'ka-truh-vaⁿ-UHⁿ', en: 'eighty-one' },
          { fr: 'quatre-vingt-deux', sub: 'ka-truh-vaⁿ-DEU', en: 'eighty-two' },
          { fr: 'quatre-vingt-trois', sub: 'ka-truh-vaⁿ-TRWAH', en: 'eighty-three' },
          { fr: 'quatre-vingt-quatre', sub: 'ka-truh-vaⁿ-KATR', en: 'eighty-four' },
          { fr: 'quatre-vingt-cinq', sub: 'ka-truh-vaⁿ-SAⁿK', en: 'eighty-five' },
          { fr: 'quatre-vingt-six', sub: 'ka-truh-vaⁿ-SEES', en: 'eighty-six' },
          { fr: 'quatre-vingt-sept', sub: 'ka-truh-vaⁿ-SET', en: 'eighty-seven' },
          { fr: 'quatre-vingt-huit', sub: 'ka-truh-vaⁿ-WEET', en: 'eighty-eight' },
          { fr: 'quatre-vingt-neuf', sub: 'ka-truh-vaⁿ-NEUF', en: 'eighty-nine' },
        ],
      },
      {
        title: 'Ninety to ninety-nine',
        cards: [
          { fr: 'quatre-vingt-dix', sub: 'ka-truh-vaⁿ-DEES', en: 'ninety' },
          { fr: 'quatre-vingt-onze', sub: 'ka-truh-vaⁿ-OHⁿZ', en: 'ninety-one' },
          { fr: 'quatre-vingt-douze', sub: 'ka-truh-vaⁿ-DOOZ', en: 'ninety-two' },
          { fr: 'quatre-vingt-treize', sub: 'ka-truh-vaⁿ-TREHZ', en: 'ninety-three' },
          { fr: 'quatre-vingt-quatorze', sub: 'ka-truh-vaⁿ-ka-TORZ', en: 'ninety-four' },
          { fr: 'quatre-vingt-quinze', sub: 'ka-truh-vaⁿ-KAⁿZ', en: 'ninety-five' },
          { fr: 'quatre-vingt-seize', sub: 'ka-truh-vaⁿ-SEHZ', en: 'ninety-six' },
          { fr: 'quatre-vingt-dix-sept', sub: 'ka-truh-vaⁿ-dee-SET', en: 'ninety-seven' },
          { fr: 'quatre-vingt-dix-huit', sub: 'ka-truh-vaⁿ-dee-ZWEET', en: 'ninety-eight' },
          { fr: 'quatre-vingt-dix-neuf', sub: 'ka-truh-vaⁿ-deez-NEUF', en: 'ninety-nine' },
        ],
      },
    ],
  },

  {
    type: 'flashcards',
    id: 's20-flash',
    title: 'Flip and Recall',
    frSub: 'Retournez la carte',
    render: 'deck',
    layer: 'core',
    say: 'English on the front. Say the French out loud before you flip it.',
    cards: [
      { front: 'thirty', back: 'trente', say: 'trente' },
      { front: 'forty', back: 'quarante', say: 'quarante' },
      { front: 'fifty', back: 'cinquante', say: 'cinquante' },
      { front: 'sixty', back: 'soixante', say: 'soixante' },
      { front: 'seventy', back: 'soixante-dix', say: 'soixante-dix' },
      { front: 'seventy-one', back: 'soixante et onze', say: 'soixante et onze' },
      { front: 'seventy-two', back: 'soixante-douze', say: 'soixante-douze' },
      { front: 'seventy-three', back: 'soixante-treize', say: 'soixante-treize' },
      { front: 'seventy-four', back: 'soixante-quatorze', say: 'soixante-quatorze' },
      { front: 'seventy-five', back: 'soixante-quinze', say: 'soixante-quinze' },
      { front: 'seventy-six', back: 'soixante-seize', say: 'soixante-seize' },
      { front: 'seventy-seven', back: 'soixante-dix-sept', say: 'soixante-dix-sept' },
      { front: 'seventy-eight', back: 'soixante-dix-huit', say: 'soixante-dix-huit' },
      { front: 'seventy-nine', back: 'soixante-dix-neuf', say: 'soixante-dix-neuf' },
      { front: 'eighty', back: 'quatre-vingts', say: 'quatre-vingts' },
      { front: 'eighty-one', back: 'quatre-vingt-un', say: 'quatre-vingt-un' },
      { front: 'eighty-two', back: 'quatre-vingt-deux', say: 'quatre-vingt-deux' },
      { front: 'eighty-three', back: 'quatre-vingt-trois', say: 'quatre-vingt-trois' },
      { front: 'eighty-four', back: 'quatre-vingt-quatre', say: 'quatre-vingt-quatre' },
      { front: 'eighty-five', back: 'quatre-vingt-cinq', say: 'quatre-vingt-cinq' },
      { front: 'eighty-six', back: 'quatre-vingt-six', say: 'quatre-vingt-six' },
      { front: 'eighty-seven', back: 'quatre-vingt-sept', say: 'quatre-vingt-sept' },
      { front: 'eighty-eight', back: 'quatre-vingt-huit', say: 'quatre-vingt-huit' },
      { front: 'eighty-nine', back: 'quatre-vingt-neuf', say: 'quatre-vingt-neuf' },
      { front: 'ninety', back: 'quatre-vingt-dix', say: 'quatre-vingt-dix' },
      { front: 'ninety-one', back: 'quatre-vingt-onze', say: 'quatre-vingt-onze' },
      { front: 'ninety-two', back: 'quatre-vingt-douze', say: 'quatre-vingt-douze' },
      { front: 'ninety-three', back: 'quatre-vingt-treize', say: 'quatre-vingt-treize' },
      { front: 'ninety-four', back: 'quatre-vingt-quatorze', say: 'quatre-vingt-quatorze' },
      { front: 'ninety-five', back: 'quatre-vingt-quinze', say: 'quatre-vingt-quinze' },
      { front: 'ninety-six', back: 'quatre-vingt-seize', say: 'quatre-vingt-seize' },
      { front: 'ninety-seven', back: 'quatre-vingt-dix-sept', say: 'quatre-vingt-dix-sept' },
      { front: 'ninety-eight', back: 'quatre-vingt-dix-huit', say: 'quatre-vingt-dix-huit' },
      { front: 'ninety-nine', back: 'quatre-vingt-dix-neuf', say: 'quatre-vingt-dix-neuf' },
      { front: 'a hundred', back: 'cent', say: 'cent' },
    ],
  },

  {
    type: 'dictation',
    id: 's21-dictation',
    title: 'Write What You Hear',
    frSub: 'La dictée',
    layer: 'core',
    terms: ['theS', 'etRule', 'chunks'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], maxPlays: 4, recordingId: 'rec-a1-27-dictee' },
    say: 'Four sentences, one for each rule this lesson claims. Build each from the word tiles, and some of the tiles do not belong.',
    itemIds: DICTATION_IDS,
  },

  {
    type: 'useCases',
    id: 's22-cases',
    title: 'Six You Will Hear This Week',
    frSub: 'Dans la vraie vie',
    layer: 'core',
    terms: ['chunks'],
    say: 'Every one of these is said once, at normal speed, by somebody who is not going to repeat it.',
    cases: [
      { situation: 'Being told a price', fr: 'Ça fait quatre-vingt-quinze euros.', en: 'That comes to ninety-five euros.' },
      { situation: 'Giving your age', fr: 'J’ai trente-deux ans.', en: 'I am thirty-two.' },
      { situation: 'Reading a house number', fr: 'C’est au soixante-dix-huit.', en: 'It is at number seventy-eight.' },
      { situation: 'Taking a phone number', fr: 'Zéro six, quatre-vingt-douze, soixante-quinze, quatre-vingt-un, trente-trois.', en: 'Zero six, ninety-two, seventy-five, eighty-one, thirty-three.' },
      { situation: 'Asking how far it is', fr: 'C’est à quatre-vingts kilomètres.', en: 'It is eighty kilometres away.' },
      { situation: 'Hearing a room number', fr: 'Chambre quarante et un, au premier étage.', en: 'Room forty-one, on the first floor.' },
    ],
  },

  {
    type: 'scenario',
    id: 's23-phone',
    title: 'Taking Her Number',
    frSub: 'Le numéro',
    layer: 'core',
    terms: ['chunks', 'arith'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a1-27-phone' },
    say: 'The exchange the opening scene went wrong in, and this time you hold it up.',
    setting: 'The landing outside the flat in Lyon, with the keys still in her hand.',
    turns: [
      { ai: 'Alors, vous prenez l’appartement ?', en: 'So, are you taking the flat?', user: 'Oui. Vous avez un numéro ?' },
      { ai: 'C’est le zéro six, quatre-vingt-douze, soixante-quinze.', en: 'It is zero six, ninety-two, seventy-five.', user: 'Zéro six, quatre-vingt-douze, soixante-quinze.' },
      { ai: 'Et la fin, quatre-vingt-un, trente-trois.', en: 'And the end, eighty-one, thirty-three.', user: 'Quatre-vingt-un, trente-trois. C’est noté.' },
      { ai: 'Le loyer, plus quatre-vingt-quinze euros de charges.', en: 'The rent, plus ninety-five euros of charges.', user: 'Quatre-vingt-quinze euros de charges. D’accord.' },
      { ai: 'Parfait. Appelez-moi demain.', en: 'Perfect. Call me tomorrow.', user: 'Merci, à demain.' },
    ],
  },

  /* ── Act 6: prove it ──────────────────────────────────────────────────── */

  {
    type: 'reading',
    id: 's24-reading',
    title: 'Room Ninety-Two',
    frSub: 'À la réception',
    layer: 'core',
    terms: ['chunks', 'arith'],
    // REQUIRED for the glossary to exist at all. MissionSection routes a reading
    // section to ReadingMission (and so to PassagePage, which draws the
    // underlines and the tap-for-translation sheet) only when this flag is set
    // WITH questions. Without it the section takes the fallback path, and
    // MissionRich contains no reference to `glossary`.
    questionsInModal: true,
    say: 'Read it once for the shape. Tap any word you do not know.',
    // Paul's A1 rule, set on a1.01's passage: if a line does not open with «, it
    // is in English. Stage directions are context, and context is instruction.
    // An A1 learner's reading effort belongs on the exchange.
    text:
      'It is half past eight and Claire is checking into a small hotel in Dijon.\n\n' +
      '« Bonjour. J’ai une réservation au nom de Lefèvre. »\n' +
      '« Bonjour. Chambre quatre-vingt-douze, au quatrième étage. »\n' +
      '« Quatre-vingt-douze. Et le petit déjeuner ? »\n' +
      '« De sept heures à dix heures. Ça fait quatre-vingts euros la nuit. »\n\n' +
      'Claire pays and takes the key. The lift has a sign on it.\n\n' +
      '« Le code de la porte ? »\n' +
      '« Soixante et onze, puis la touche verte. »\n' +
      '« Soixante et onze. Merci beaucoup. »',
    // Every entry is matched by gloss.logic.ts, which folds punctuation and case
    // on BOTH sides and allows a phrase of up to four words. A phrase entry wins
    // over a bare word inside it.
    glossary: [
      { word: 'réservation', en: 'booking', note: 'The word on every hotel and restaurant confirmation in France.' },
      { word: 'chambre', en: 'room', note: 'A hotel room is always given as chambre plus its number, said as one two-digit shape.' },
      { word: 'quatrième étage', en: 'fourth floor', note: 'Counted above the ground floor, so the fourth is five flights up.' },
      { word: 'la nuit', en: 'per night', note: 'A price followed by la nuit is the nightly rate, not the total.' },
      { word: 'la touche verte', en: 'the green button', note: 'Touche is a key or a button on a keypad, never a hotel key.' },
    ],
    questions: [
      { q: 'What is Claire’s room number, and which floor is it on?', a: 'Room ninety-two, on the fourth floor.' },
      { q: 'What does the room cost for one night?', a: 'Eighty euros.' },
      { q: 'What is the door code?', a: 'Seventy-one, then the green button.' },
    ],
  },

  {
    type: 'reviewDeck',
    id: 's25-review',
    title: 'The Whole Thing, One Deck',
    frSub: 'Révision',
    render: 'deck',
    layer: 'core',
    terms: ['arith', 'theS', 'etRule'],
    say: 'Rate each card as again, hard or easy. The ones you mark again come back.',
    cards: [
      { front: 'Seventy', back: 'soixante-dix. Sixty, then ten.', say: 'soixante-dix' },
      { front: 'Eighty', back: 'quatre-vingts. Four twenties, with an S.', say: 'quatre-vingts' },
      { front: 'Eighty-one', back: 'quatre-vingt-un. The S is gone and there is no et.', say: 'quatre-vingt-un' },
      { front: 'Ninety', back: 'quatre-vingt-dix. Four twenties and ten, never an S.', say: 'quatre-vingt-dix' },
      { front: 'Which numbers take et?', back: 'The ones ending in one, up to seventy-one. Not eighty-one, not ninety-one.', say: 'vingt et un, soixante et onze' },
      { front: 'Ninety-two', back: 'quatre-vingt-douze. Douze on the end, not deux.', say: 'quatre-vingt-douze' },
      { front: 'Seventy-six', back: 'soixante-seize. Sixty and sixteen.', say: 'soixante-seize' },
      { front: 'Ninety-nine', back: 'quatre-vingt-dix-neuf. Four twenties, ten, nine.', say: 'quatre-vingt-dix-neuf' },
      { front: 'A phone number is read as…', back: '…five two-digit numbers, never as ten digits.', say: 'quatre-vingt-douze, soixante-quinze' },
      { front: 'A hundred', back: 'cent. The ceiling of this lesson.', say: 'cent' },
    ],
  },

  {
    type: 'progressCheck',
    id: 's26-progress',
    title: 'Where You Stand',
    frSub: 'Votre progression',
    say: 'One screen before the exam, so you know what you are walking into.',
    // The prose deliberately carries no figures. Every number this card states is
    // a fact about the array above it, and a display string is validated against
    // nothing, so a hand-typed count would have been left confidently wrong by
    // the first mission added with the whole suite still green.
    body: 'You have counted to a hundred out loud, taken a phone number in two-digit chunks, and written the two rules that only exist on paper. What is left is the part that tells you whether it stuck. Each round is tied to one of the mistakes this lesson exists to stop, and failing a round gets you its drill before the next one starts.',
    // Filled immediately after SECTIONS is built, from the journey itself.
    stats: [],
  },

  {
    type: 'quiz',
    id: 's27-quiz',
    title: 'The Exam',
    frSub: 'L’examen',
    layer: 'core',
    passMark: 70,
    roundFailThreshold: 60,
    say: 'Four rounds. Miss too many in one and you get its drill before the next round starts.',
    rounds: [
      {
        id: 'r1-twentyone-to-sixtynine',
        label: 'Twenty-one to sixty-nine',
        // err-et first, so a learner failing this round gets the sorting drill
        // rather than the listening one: the round is mostly about where the
        // word et appears.
        targets: ['err-et', 'err-heard-wrong'],
        say: 'The regular half, and the one written rule inside it.',
        questions: [
          {
            q: 'Which of these is twenty-one?',
            format: 'mcq',
            opts: ['vingt-un', 'vingt et un', 'vingt-et-un', 'vingt-une'],
            correct: 1,
            why: 'A number ending in one takes et and drops its hyphens with it. Both hyphenated spellings are wrong and both are written constantly.',
            ref: 's05-etrule',
          },
          {
            q: 'Listen. Which number is it?',
            format: 'listenChoose',
            audio: { mode: 'tts', lang: 'fr-FR', clip: 'quarante-cinq' },
            opts: ['quatorze', 'quarante', 'quarante-cinq', 'cinquante'],
            correct: 2,
            why: 'Quarante-cinq is forty then five. Quarante alone stops at forty, and cinquante starts on an S rather than a K.',
            ref: 's04-tens',
          },
          {
            q: 'Sixty-two is:',
            format: 'mcq',
            opts: ['six-deux', 'soixante et deux', 'soixante-deux', 'soixante-douze'],
            correct: 2,
            why: 'Only numbers ending in one take et. Everything from two to nine hyphenates straight on to the ten in front of it.',
            ref: 's05-etrule',
          },
          {
            q: 'Listen. Which number is it?',
            format: 'listenChoose',
            audio: { mode: 'tts', lang: 'fr-FR', clip: 'trente-huit' },
            opts: ['trente', 'treize', 'quarante-huit', 'trente-huit'],
            correct: 3,
            why: 'Trente-huit is thirty then eight. Trente stops short and treize is a single word with no second half at all.',
            ref: 's04-tens',
          },
          {
            q: 'Someone has written fifty-one as « cinquante-un ». Write it properly.',
            format: 'errorSpot',
            accept: ['cinquante et un'],
            answer: 'cinquante et un',
            why: 'Fifty-one ends in one, so it takes et and loses its hyphen. So do twenty-one, thirty-one, forty-one and sixty-one.',
            ref: 's05-etrule',
          },
          {
            q: 'How many tens in French have a word of their own?',
            format: 'mcq',
            opts: ['five, up to soixante', 'ten', 'nine', 'three'],
            correct: 0,
            why: 'Vingt, trente, quarante, cinquante and soixante. After sixty the language stops inventing words and starts adding them together.',
            ref: 's04-tens',
          },
          {
            q: 'Listen. Which did you hear?',
            format: 'listenChoose',
            audio: { mode: 'tts', lang: 'fr-FR', clip: 'vingt et une villes' },
            opts: ['vingt-deux villes', 'vingt et une villes', 'vingt et un villages', 'trente et une villes'],
            correct: 1,
            why: 'One is the only number with a gender, so twenty-one becomes vingt et une in front of a feminine noun. Nothing above it does.',
            ref: 's06-easy',
          },
        ],
      },
      {
        id: 'r2-sixty-plus-ten',
        label: 'Sixty plus ten',
        targets: ['err-compute', 'err-heard-wrong'],
        say: 'The seventies, where the arithmetic starts.',
        questions: [
          {
            q: 'Seventy is written as:',
            format: 'mcq',
            opts: ['septante', 'soixante-dix', 'sept-dix', 'soixante-zéro'],
            correct: 1,
            why: 'Seventy is sixty and ten. Septante is real and standard in Belgium and Switzerland, and it is not what France uses.',
            ref: 's07-seventy',
          },
          {
            q: 'Listen. Which number is it?',
            format: 'listenChoose',
            audio: { mode: 'tts', lang: 'fr-FR', clip: 'soixante-quinze' },
            opts: ['soixante-cinq', 'soixante-seize', 'soixante-quinze', 'cinquante-quinze'],
            correct: 2,
            why: 'Quinze ends on a Z and cinq ends on a K. Seventy-five and sixty-five are separated by that one sound.',
            ref: 's08-seventies',
          },
          {
            q: 'Which of these takes et?',
            format: 'mcq',
            opts: ['quatre-vingt-un', 'quatre-vingt-onze', 'soixante-douze', 'soixante et onze'],
            correct: 3,
            why: 'Seventy-one is the last number in the language to take et, because onze stands where un would. Eighty-one and ninety-one refuse it.',
            ref: 's07-seventy',
          },
          {
            q: 'Listen. Which number is it?',
            format: 'listenChoose',
            audio: { mode: 'tts', lang: 'fr-FR', clip: 'soixante-dix-huit' },
            opts: ['soixante-dix-huit', 'soixante-huit', 'quatre-vingt-huit', 'soixante-dix'],
            correct: 0,
            why: 'Seventy-eight is sixty, ten, eight. Sixty-eight has no dix in the middle, and that syllable is the only thing between them.',
            ref: 's08-seventies',
          },
          {
            q: 'Write seventy-two in French.',
            format: 'typeIn',
            accept: ['soixante-douze'],
            answer: 'soixante-douze',
            why: 'Sixty and twelve. The second half is a word you already had, which is true of every number from seventy-one to seventy-nine.',
            ref: 's08-seventies',
          },
          {
            q: 'What is the second half of soixante-seize?',
            format: 'mcq',
            opts: ['six', 'seize', 'soixante', 'sept'],
            correct: 1,
            why: 'Seize is sixteen, so soixante-seize is seventy-six. Six would make it sixty-six, and a Z on the end is what tells the two apart.',
            ref: 's08-seventies',
          },
          {
            q: 'Listen. Which did you hear?',
            format: 'listenChoose',
            audio: { mode: 'tts', lang: 'fr-FR', clip: 'soixante et onze ans' },
            opts: ['soixante-douze ans', 'soixante-onze ans', 'soixante et onze ans', 'soixante et un ans'],
            correct: 2,
            why: 'Seventy-one is sixty and eleven, with et between them. Sixty-one ends on un, which is one nasal syllable rather than two.',
            ref: 's09-hear70',
          },
        ],
      },
      {
        id: 'r3-four-twenties',
        label: 'Four twenties',
        // err-s first: a learner failing this round is failing the two written
        // rules, and the S is the one with no audible signal at all.
        targets: ['err-s', 'err-et'],
        say: 'The eighties and nineties, and the two rules that only exist on paper.',
        questions: [
          {
            q: 'Which is eighty, standing on its own?',
            format: 'mcq',
            opts: ['quatres-vingts', 'quatre-vingts', 'quatre-vingt', 'quatre vingt'],
            correct: 1,
            why: 'Eighty takes an S when it is exactly four twenties and nothing follows. The other three spellings are all things people write.',
            ref: 's10-eighty',
          },
          {
            q: 'Someone has written eighty-one as « quatre-vingts-un ». Write it properly.',
            format: 'errorSpot',
            accept: ['quatre-vingt-un'],
            answer: 'quatre-vingt-un',
            why: 'A number after quatre-vingt takes the S away. Eighty-one, eighty-two and ninety all lose it, and only eighty standing alone keeps it.',
            ref: 's10-eighty',
          },
          {
            q: 'Ninety-one is:',
            format: 'mcq',
            opts: ['quatre-vingt-et-onze', 'quatre-vingts-onze', 'quatre-vingt-onze', 'quatre-vingt-dix-un'],
            correct: 2,
            why: 'No et, no S, and onze rather than ten plus one. Ninety-one is four twenties and eleven, hyphenated straight through.',
            ref: 's12-ninety',
          },
          {
            q: 'Listen. Which number is it?',
            format: 'listenChoose',
            audio: { mode: 'tts', lang: 'fr-FR', clip: 'quatre-vingt-douze' },
            opts: ['quatre-vingt-deux', 'quatre-vingts', 'quatre-vingt-douze', 'quatre-vingt-dix'],
            correct: 2,
            why: 'Douze ends on a Z and deux ends on a vowel. Ninety-two and eighty-two are one syllable apart, and this is the pair that loses people phone numbers.',
            ref: 's13-nineties',
          },
          {
            q: 'Ninety-seven decomposes as:',
            format: 'mcq',
            opts: ['90 + 7', '4 x 20 + 17', '60 + 30 + 7', '4 x 20 + 10 + 7'],
            correct: 3,
            why: 'Four twenties, ten, seven, in four words. Working that out is worth one reading; recognising the shape without it is worth the whole lesson.',
            ref: 's12-ninety',
          },
          {
            q: 'Someone has written ninety as « quatre-vingts-dix ». Write it properly.',
            format: 'errorSpot',
            accept: ['quatre-vingt-dix'],
            answer: 'quatre-vingt-dix',
            why: 'Dix is a number, and any number after quatre-vingt removes its S. Ninety therefore never carries one.',
            ref: 's12-ninety',
          },
          {
            q: 'Listen. Which did you hear?',
            format: 'listenChoose',
            audio: { mode: 'tts', lang: 'fr-FR', clip: 'quatre-vingts euros' },
            opts: ['quatre-vingts euros', 'quatre-vingt-un euros', 'quatre-vingt-douze euros', 'quatre-vingt-deux euros'],
            correct: 0,
            why: 'The S on quatre-vingts is written and never said, so eighty and eighty-one are told apart by the un on the end and by nothing else.',
            ref: 's11-eighties',
          },
        ],
      },
      {
        id: 'r4-at-speed',
        label: 'At speed, and out loud',
        // err-heard-wrong first: a learner failing the speed round is failing to
        // recognise a number, not failing to spell one.
        targets: ['err-heard-wrong', 'err-compute'],
        say: 'Where all of this actually happens.',
        questions: [
          {
            // The whole number plays and only ONE chunk is asked for, which is
            // the skill as it is actually used: you do not choose between four
            // whole numbers at a counter, you catch one pair inside a stream
            // that does not stop for you. It also keeps the options short
            // enough to read on a phone.
            q: 'Listen to the whole number. Which pair comes straight after zéro six?',
            format: 'listenChoose',
            audio: { mode: 'tts', lang: 'fr-FR', clip: 'zéro six, quatre-vingt-douze, soixante-quinze, quatre-vingt-un, trente-trois' },
            opts: ['quatre-vingt-deux', 'quatre-vingt-douze', 'quatre-vingts', 'soixante-douze'],
            correct: 1,
            why: 'Five two-digit chunks, said once at speed, and the second one ends on douze. Nothing repeats it and nothing is written down, which is why the chunk has to be a shape you know.',
            ref: 's23-phone',
          },
          {
            q: 'Say it out loud: ninety-two.',
            format: 'speak',
            target: 'quatre-vingt-douze',
            ipa: '/ka.tʁə.vɛ̃.duz/',
            why: 'Four syllables run together, with no pause where the arithmetic would be. A pause in the middle is the sound of somebody adding up.',
            ref: 's18-speak',
          },
          {
            q: 'A landlord says « quatre-vingt-quinze euros ». What do you owe?',
            format: 'mcq',
            opts: ['ninety-five euros', 'eighty-five euros', 'seventy-five euros', 'four hundred euros'],
            correct: 0,
            why: 'Quatre-vingt-quinze is four twenties and fifteen. Quatre-vingt-cinq would have ended on a K sound rather than a Z.',
            ref: 's22-cases',
          },
          {
            q: 'Listen. Which room are you in?',
            format: 'listenChoose',
            audio: { mode: 'tts', lang: 'fr-FR', clip: 'chambre quatre-vingt-douze' },
            opts: ['chambre quatre-vingt-deux', 'chambre quatre-vingt-douze', 'chambre quatre-vingts', 'chambre quatre-vingt-dix'],
            correct: 1,
            why: 'Douze on the end, so ninety-two. A room number is said once and there is nothing written in front of you to check it against.',
            ref: 's24-reading',
          },
          {
            q: 'Count out loud: seventy, eighty, ninety, a hundred.',
            format: 'speak',
            target: 'soixante-dix, quatre-vingts, quatre-vingt-dix, cent',
            ipa: '/swa.sɑ̃t.dis ka.tʁə.vɛ̃ ka.tʁə.vɛ̃.dis sɑ̃/',
            why: 'Three of these four are sums and the last one is not. Cent is the ceiling of this lesson and the only round word left in it.',
            ref: 's18-speak',
          },
          {
            q: 'You will hear nonante in Belgium. It means:',
            format: 'mcq',
            opts: ['nine', 'ninety-nine', 'nineteen', 'ninety'],
            correct: 3,
            why: 'Nonante is ninety and septante is seventy. They are standard where they are used, so recognise them on sight and keep saying quatre-vingt-dix.',
            ref: 's28-roundup',
          },
          {
            q: 'The fastest way to catch a number at speed is to:',
            format: 'mcq',
            opts: ['learn each one as one shape', 'add the parts up quickly', 'write the digits down', 'ask for it in writing'],
            correct: 0,
            why: `${REFRAME} A number you recognise costs nothing. A number you compute costs you the next sentence.`,
            ref: 's28-roundup',
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
    terms: ['regional'],
    say: 'Seven things you did not have this morning, and one line about where the numbers go next.',
    body: 'You can count to a hundred, and more usefully you can catch a two-digit number inside a sentence at the speed somebody actually says it. That second thing is what a phone number, a price and a room number all require, and it is the thing no written list of the numbers can hand you.',
    points: [
      `${REFRAME} A number you recognise costs nothing, and a number you compute costs the next sentence.`,
      'Twenty-one to sixty-nine is a ten and a unit, hyphenated. Forty-nine numbers, one pattern.',
      'Seventy is sixty-ten, eighty is four-twenties, ninety is four-twenties-ten. Three sums, learned as three shapes.',
      'et appears on 21, 31, 41, 51, 61 and 71, and nowhere else. Eighty-one and ninety-one refuse it.',
      'quatre-vingts keeps its S only when nothing follows. quatre-vingt-un and quatre-vingt-dix have none.',
      'Seventy-one to seventy-nine and ninety-one to ninety-nine reuse onze through dix-neuf unchanged, so twenty of the thirty hard numbers were already yours.',
      'In Belgium and Switzerland you will hear septante for seventy and nonante for ninety. They mean exactly what they look like.',
      'The next lesson takes the ceiling off: prices, years and quantities above a hundred.',
    ],
  },
];

/* ─── The progress card counts the journey rather than restating it ────────
 *
 * Four figures, every one a fact about the array directly above. Typed by hand
 * they would have been left confidently wrong by the first mission added or
 * quiz round dropped, with the whole suite still green: a display string is
 * validated against nothing.
 *
 * Derived here instead, and it throws rather than degrades. A progress card
 * that silently reports "0 of 0" is worse than a build that stops.            */
{
  const ix = SECTIONS.findIndex((s) => (s as { id?: string }).id === 's26-progress');
  const card = SECTIONS[ix];
  const quiz = SECTIONS.find((s) => s.type === 'quiz');
  if (!card || card.type !== 'progressCheck' || !quiz || quiz.type !== 'quiz') {
    throw new Error('a1.27.l1: the progress card or the quiz is missing, so the card cannot count what is not there');
  }
  card.stats = [
    { k: 'Numbers met', v: String(ITEM_IDS.length) },
    // `ix` is the count of sections BEFORE this one, which is exactly how many
    // missions the learner has finished when they reach it.
    { k: 'Missions done', v: `${ix} of ${SECTIONS.length}` },
    { k: 'Exam rounds ahead', v: String(quiz.rounds?.length ?? 0) },
    { k: 'Pass mark', v: `${quiz.passMark}%` },
  ];
}

/* ─── Acts ─────────────────────────────────────────────────────────────────
 *
 * Six acts, and the shape of them is the argument of the lesson: three
 * missions on the forty-nine regular numbers, twelve on the thirty that carry
 * arithmetic.
 *
 * Act 5 is long at eight missions, deliberately. It teaches nothing new: it is
 * where the range gets used, out loud, at speed and in writing, and splitting
 * it would put a checkpoint in the middle of a single continuous idea. Three
 * rest points carry it instead.
 *
 * `estScreens` is what the mission actually costs, not a guess rounded to a
 * nice number, because it is divided by the rest points to check that no
 * stretch runs past the checkpoint-spacing limit of 22. A flattering estimate
 * buys a lesson that passes the validator and exhausts the learner.           */

const ACTS: LessonAct[] = [
  {
    id: 'act1',
    title: 'The number you could not write down',
    sections: ['s01-scene', 's02-goals', 's03-shape'],
    milestone: 'You have seen the sum, and seen why doing it is the problem.',
    estScreens: 15,
    restPoints: ['s01-scene/after-break'],
  },
  {
    id: 'act2',
    title: 'Twenty-one to sixty-nine',
    sections: ['s04-tens', 's05-etrule', 's06-easy'],
    milestone: 'Forty-nine numbers, one pattern, and the one place French writes and.',
    estScreens: 14,
  },
  {
    id: 'act3',
    title: 'Sixty plus ten',
    sections: ['s07-seventy', 's08-seventies', 's09-hear70'],
    milestone: 'The seventies, and the last number in the language that takes et.',
    estScreens: 18,
  },
  {
    id: 'act4',
    title: 'Four twenties',
    sections: ['s10-eighty', 's11-eighties', 's12-ninety', 's13-nineties', 's14-teensback', 's15-traps'],
    milestone: 'All thirty above sixty-nine, and both rules that live only on paper.',
    estScreens: 38,
    restPoints: ['s11-eighties/halfway', 's13-nineties/halfway'],
  },
  {
    id: 'act5',
    title: 'At speed, and out loud',
    sections: ['s16-neighbours', 's17-speed', 's18-speak', 's19-words', 's20-flash', 's21-dictation', 's22-cases', 's23-phone'],
    milestone: 'You have said them, spelled them, and taken a number down at full speed.',
    estScreens: 60,
    restPoints: ['s18-speak/halfway', 's19-words/halfway', 's20-flash/halfway'],
  },
  {
    id: 'act6',
    title: 'Prove it',
    sections: ['s24-reading', 's25-review', 's26-progress', 's27-quiz', 's28-roundup'],
    milestone: 'Lesson complete.',
    estScreens: 44,
    restPoints: ['s25-review/halfway', 's27-quiz/after-r2'],
  },
];

/* ─── Deck tranches ────────────────────────────────────────────────────────
 *
 * One slice per act, index-aligned. An item is released the act it is TAUGHT,
 * not the act it is first mentioned.
 *
 * Act 1 releases nothing: the scene teaches the IDEA rather than a word, and
 * the two numbers it shows are taught properly two acts later. Act 2 releases
 * the whole 21 to 69 block in one slice, because what it teaches is the rule
 * that generates all forty-nine and not forty-nine separate facts. Act 6
 * releases nothing because it tests.                                          */

const DECK_TRANCHE: string[][] = [
  [],
  [...EASY_IDS],
  [...HARD_IDS.slice(0, 10)],
  [...HARD_IDS.slice(10), CENT_ID],
  [...DICTATION_IDS],
  [],
];

/* ─── Error triggers and their drills ──────────────────────────────────────
 *
 * A trigger names a mistake, the places it is watched for, the drill that
 * fires when it trips, and the check that closes the loop. Each round's
 * `targets` points at these ids, and drillForRound fires the drill of the
 * FIRST target only, so the order inside `targets` matters. The four rounds
 * name four different triggers first, which is what keeps all four drills
 * reachable.                                                                  */

const ERROR_TRIGGERS: ErrorTrigger[] = [
  {
    id: 'err-compute',
    description: 'Decomposes the number instead of recognising it, and loses the rest of the sentence while doing the arithmetic.',
    detectOn: ['s01-scene', 's12-ninety', 's17-speed', 's27-quiz/r2-sixty-plus-ten'],
    drill: 'drill-shapes',
    retest: 'retest-shapes',
  },
  {
    id: 'err-et',
    description: 'Puts et where it does not belong, or leaves it out where it does: quatre-vingt-et-un, or cinquante-un.',
    detectOn: ['s05-etrule', 's07-seventy', 's27-quiz/r1-twentyone-to-sixtynine'],
    drill: 'drill-et',
    retest: 'retest-et',
  },
  {
    id: 'err-s',
    description: 'Keeps the S on quatre-vingts when a number follows it, or drops it when nothing does.',
    detectOn: ['s10-eighty', 's11-eighties', 's27-quiz/r3-four-twenties'],
    drill: 'drill-s',
    retest: 'retest-s',
  },
  {
    id: 'err-heard-wrong',
    description: 'Hears one number and takes another, usually a pair one syllable apart: eighty-two for ninety-two, seventy-six for seventy-two.',
    detectOn: ['s09-hear70', 's16-neighbours', 's27-quiz/r4-at-speed'],
    drill: 'drill-neighbours',
    retest: 'retest-neighbours',
  },
];

const DRILLS: LessonDrill[] = [
  {
    id: 'drill-shapes',
    title: 'The sum, then the shape',
    format: 'flashcard',
    coach: 'Read the left, say the right out loud. Say it once as a whole, not as the pieces it is made of.',
    pairs: [
      ['70', 'soixante-dix'],
      ['80', 'quatre-vingts'],
      ['90', 'quatre-vingt-dix'],
      ['92', 'quatre-vingt-douze'],
      ['97', 'quatre-vingt-dix-sept'],
      ['100', 'cent'],
    ],
  },
  {
    id: 'retest-shapes',
    title: 'One more time',
    format: 'mcq',
    q: 'You hear quatre-vingt-dix-sept. What is it?',
    opts: ['87', '97', '4017'],
    correct: 1,
    why: 'Four twenties, ten, seven. Quatre-vingt-sept would have had no dix in the middle, and that syllable is the whole of the difference.',
  },
  {
    id: 'drill-et',
    title: 'Which ones take et?',
    format: 'sort',
    buckets: ['Takes et', 'No et'],
    // Item ids, not display strings: a drill scores against the corpus, so it
    // plays the same audio and reads the same spelling as every other card
    // teaching these. Display strings here validate as broken ids.
    items: [...ET_IDS, HARD_IDS[11], HARD_IDS[21], HARD_IDS[2], EASY_IDS[1]],
    coach: 'A number ending in one takes et, up to seventy-one. Eighty-one and ninety-one are the two that refuse it.',
  },
  {
    id: 'retest-et',
    title: 'One more time',
    format: 'mcq',
    q: 'Eighty-one is:',
    opts: ['quatre-vingt-et-un', 'quatre-vingt-un', 'quatre-vingts et un'],
    correct: 1,
    why: 'Eighty-one takes no et and no S. Twenty-one and seventy-one both take et, which is exactly what makes this one worth remembering.',
  },
  {
    id: 'drill-s',
    title: 'With the S, or without',
    format: 'sort',
    buckets: ['quatre-vingts', 'quatre-vingt'],
    items: [HARD_IDS[10], HARD_IDS[11], HARD_IDS[20], HARD_IDS[22], HARD_IDS[27]],
    coach: 'The S survives only when nothing follows. Put any number after quatre-vingt and it goes.',
  },
  {
    id: 'retest-s',
    title: 'One more time',
    format: 'mcq',
    q: 'Which of these carries the S?',
    opts: ['ninety', 'eighty-one', 'eighty on its own'],
    correct: 2,
    why: 'Only eighty standing as exactly four twenties. Ninety has dix after it and eighty-one has un, and both take the S off.',
  },
  {
    id: 'drill-neighbours',
    title: 'One syllable apart',
    format: 'sort',
    buckets: ['Seventies', 'Eighties and nineties'],
    items: LISTEN_IDS,
    coach: 'Listen for the opening. Soixante starts on an S sound and quatre-vingt starts on a K, and that is audible before the ending arrives.',
  },
  {
    id: 'retest-neighbours',
    title: 'One more time',
    format: 'mcq',
    q: 'You hear a number ending in douze, opening on a K sound. Which?',
    opts: ['soixante-douze', 'quatre-vingt-douze', 'quatre-vingt-deux'],
    correct: 1,
    why: 'Quatre-vingt opens on a K and soixante on an S, so the first syllable places it before the ending does. Deux ends on a vowel where douze ends on a Z.',
  },
];

/* ─── Reference sheets ─────────────────────────────────────────────────────
 *
 * The material a learner wants AFTER the lesson, not during it. Kept out of
 * the flow so a mission stays one idea, and reachable from the sections that
 * preview it via `sheetId`. Layer 'deep' exempts these from the core density
 * caps, which is the point: a sheet is allowed to be dense, and a table in a
 * core section fails the validator by design.                                */

const SHEETS: ReferenceSheet[] = [
  {
    id: 'sheet.a1.27.all',
    title: 'Twenty-one to a hundred, on one screen',
    layer: 'deep',
    contains: ['Every ten', 'The two written rules', 'What you will hear abroad'],
    sections: [
      {
        type: 'cheatSheet',
        id: 'sheet-all-rows',
        title: 'The tens, and the two rules',
        layer: 'deep',
        rows: [
          { k: 'vingt', v: 'twenty. Taught in a1.02; everything to twenty-nine is built on it.', say: 'vingt' },
          { k: 'trente', v: 'thirty.', say: 'trente' },
          { k: 'quarante', v: 'forty.', say: 'quarante' },
          { k: 'cinquante', v: 'fifty.', say: 'cinquante' },
          { k: 'soixante', v: 'sixty. The last ten with a word of its own.', say: 'soixante' },
          { k: 'soixante-dix', v: 'seventy. Sixty and ten.', say: 'soixante-dix' },
          { k: 'quatre-vingts', v: 'eighty. Four twenties, with an S when nothing follows.', say: 'quatre-vingts' },
          { k: 'quatre-vingt-dix', v: 'ninety. Four twenties and ten, never an S.', say: 'quatre-vingt-dix' },
          { k: 'cent', v: 'a hundred.', say: 'cent' },
          { k: 'the et rule', v: '21, 31, 41, 51, 61 and 71 only. No hyphens on those six. Never on 81 or 91.', say: 'vingt et un, soixante et onze' },
          { k: 'the S rule', v: 'quatre-vingts alone. Gone the moment any number follows it.', say: 'quatre-vingts' },
          { k: 'septante, nonante', v: 'Seventy and ninety in Belgium and Switzerland, with huitante for eighty in parts of Switzerland. Recognise them; keep the France forms.' },
        ],
      },
    ],
  },
  {
    id: 'sheet.a1.27.hard',
    title: 'The thirty above sixty-nine',
    layer: 'deep',
    contains: ['Seventy to ninety-nine', 'The sum behind each', 'Where the teens come back'],
    sections: [
      {
        type: 'table',
        id: 'sheet-hard-table',
        title: 'Seventy to ninety-nine',
        layer: 'deep',
        cols: ['Value', 'French', 'The sum'],
        rows: [
          ['70', 'soixante-dix', '60 + 10'],
          ['71', 'soixante et onze', '60 + 11'],
          ['72', 'soixante-douze', '60 + 12'],
          ['73', 'soixante-treize', '60 + 13'],
          ['74', 'soixante-quatorze', '60 + 14'],
          ['75', 'soixante-quinze', '60 + 15'],
          ['76', 'soixante-seize', '60 + 16'],
          ['77', 'soixante-dix-sept', '60 + 10 + 7'],
          ['78', 'soixante-dix-huit', '60 + 10 + 8'],
          ['79', 'soixante-dix-neuf', '60 + 10 + 9'],
          ['80', 'quatre-vingts', '4 x 20'],
          ['81', 'quatre-vingt-un', '4 x 20 + 1'],
          ['82', 'quatre-vingt-deux', '4 x 20 + 2'],
          ['83', 'quatre-vingt-trois', '4 x 20 + 3'],
          ['84', 'quatre-vingt-quatre', '4 x 20 + 4'],
          ['85', 'quatre-vingt-cinq', '4 x 20 + 5'],
          ['86', 'quatre-vingt-six', '4 x 20 + 6'],
          ['87', 'quatre-vingt-sept', '4 x 20 + 7'],
          ['88', 'quatre-vingt-huit', '4 x 20 + 8'],
          ['89', 'quatre-vingt-neuf', '4 x 20 + 9'],
          ['90', 'quatre-vingt-dix', '4 x 20 + 10'],
          ['91', 'quatre-vingt-onze', '4 x 20 + 11'],
          ['92', 'quatre-vingt-douze', '4 x 20 + 12'],
          ['93', 'quatre-vingt-treize', '4 x 20 + 13'],
          ['94', 'quatre-vingt-quatorze', '4 x 20 + 14'],
          ['95', 'quatre-vingt-quinze', '4 x 20 + 15'],
          ['96', 'quatre-vingt-seize', '4 x 20 + 16'],
          ['97', 'quatre-vingt-dix-sept', '4 x 20 + 10 + 7'],
          ['98', 'quatre-vingt-dix-huit', '4 x 20 + 10 + 8'],
          ['99', 'quatre-vingt-dix-neuf', '4 x 20 + 10 + 9'],
        ],
      },
      {
        type: 'teach',
        id: 'sheet-hard-note',
        title: 'What to do with this',
        layer: 'deep',
        body: 'Do not memorise the middle column. Read it once, then cover it and work down the French, because the sums are how the numbers were built and not how they are used. Notice what the table makes obvious: from seventy-one and again from ninety-one, the second half is onze through dix-neuf, exactly as you already learned them. Twenty of these thirty are a word you own attached to a word you own. Learn the ten that are genuinely new, which are the round three plus seventy-seven, seventy-eight, seventy-nine, ninety-seven, ninety-eight, ninety-nine and eighty-one, and the rest fall out.',
      },
    ],
  },
];

export const NOMBRES21_LESSON: Lesson = {
  id: 'a1.27.l1',
  unitId: 'a1.27',
  seq: 1,
  title: 'Les nombres 21-100',
  level: 'a1',
  // The POSITION, not the unit id. a1.27 sits at seq 3 in the A1 track, and the
  // Den, the unit page and the mission list all number it from where it sits
  // (commit 56c79a7, "number a lesson by where it sits, not by what its id
  // says"). `tag` is the one place that number is authored rather than derived,
  // so a tag of 27 put "LEÇON 03" on the unit page and "LEÇON 27" in the header
  // of every mission inside it. Seen on a Pixel 6 on 2026-08-05.
  //
  // a1.02 never surfaced this because its id and its position agree.
  tag: 'A1 · LEÇON 03',
  intro:
    'Eighty numbers, and above sixty-nine French stops naming them and starts calculating them out loud. Ninety-seven is four words and three operations. The skill this lesson builds is not doing the sum faster, it is not doing it at all.',

  sections: SECTIONS,
  itemIds: ITEM_IDS,
  // v1 was the first authored version, applied 2026-08-05. v2 fixes the phone
  // number: v1 gave three two-digit chunks in the scene, the use case and the
  // corpus sentence, and a French mobile is five. Nobody gives three, and
  // holding five in a row at speed is the difficulty the whole lesson is built
  // on, so the fragment dramatised an easier problem than the one being taught.
  // The counter moves forward rather than restarting, because a rebuild that
  // reuses its own number reads as a rollback in the merge log.
  //
  // v3 is the device pass, on a Pixel 6 on 2026-08-05: the `tag` said LEÇON 27
  // where every derived surface said LEÇON 03, and the scene break card
  // overflowed its own Continue button.
  version: 3,

  grammarAssumed: [
    'The numbers un to vingt, and un against une',
    'A final consonant sounding, dropping or changing according to the word that follows it',
  ],
  grammarIntroduced: [
    'Additive and multiplicative number formation: soixante-dix, quatre-vingts, quatre-vingt-dix',
    'The conjunction et in numbers ending in one, and its absence at eighty-one and ninety-one',
    'The plural S on quatre-vingts, and its loss before a following number',
  ],

  features: ['narrated', 'minimalPairs', 'roleplay', 'voiceflash'],

  overview: {
    titleEn: 'Numbers 21 to 100',
    subFr: 'Les nombres 21-100',
    introFr: 'Au-dessus de soixante-neuf, le français calcule à voix haute. Apprenez la forme, pas le calcul.',
    minutes: 35,
    difficulty: 3,
    glyph: '💯',
    screens: 189,
  },

  acts: ACTS,
  reframe: REFRAME,
  errorTriggers: ERROR_TRIGGERS,
  drills: DRILLS,
  sheets: SHEETS,
  deckTranche: DECK_TRANCHE,
  terms: NOMBRES21_TERMS,

  /* ─── Audio ───────────────────────────────────────────────────────────────
   *
   * Briefs only. CLIP_MANIFEST is empty by design, so every card falls back to
   * device TTS until the studio delivers, and a recordingId that resolves to
   * nothing is the correct shipping state rather than a bug.
   *
   * The one-take note on rec-a1-27-pairs is the one that matters, and it is
   * written into the brief rather than assumed. This lesson's contrasts are two
   * numbers differing by one syllable, and across two takes they are not
   * comparable: a learner told to listen for a difference will hear the
   * difference between the recordings instead.                                */
  audio: {
    defaultLang: 'fr-FR',
    speeds: [1.0, 0.65],
    coachVoice: 'coach-en-warm',
    interfaceSounds: ['correct', 'incorrect', 'checkpoint'],
    ambienceDefault: 'off',
    recorded: [
      {
        id: 'rec-a1-27-count',
        desc: 'The tens, then seventy through ninety-nine, then cent. Each number said alone with a clear pause after it, ONE TAKE straight through so the pace does not change between the seventies and the nineties. Do not splice. Also supplies the tapTable rows, the card decks and the flashcard deck.',
        clipIds: ['trente', 'quarante', 'cinquante', 'soixante', 'soixante-dix', 'soixante et onze', 'soixante-douze', 'soixante-treize', 'soixante-quatorze', 'soixante-quinze', 'soixante-seize', 'soixante-dix-sept', 'soixante-dix-huit', 'soixante-dix-neuf', 'quatre-vingts', 'quatre-vingt-un', 'quatre-vingt-deux', 'quatre-vingt-cinq', 'quatre-vingt-sept', 'quatre-vingt-huit', 'quatre-vingt-neuf', 'quatre-vingt-dix', 'quatre-vingt-onze', 'quatre-vingt-douze', 'quatre-vingt-quinze', 'quatre-vingt-seize', 'quatre-vingt-dix-sept', 'quatre-vingt-dix-neuf', 'cent'],
      },
      {
        id: 'rec-a1-27-pairs',
        desc: 'The contrast pairs, ONE TAKE PER PAIR with both members inside it and no pause longer than a beat: soixante-douze / soixante-seize, then quatre-vingt-deux / quatre-vingt-douze, soixante-treize / quatre-vingt-treize, soixante-quinze / quatre-vingt-quinze, quatre-vingts / quatre-vingt-un, soixante / soixante-dix. Same voice, same speed. Across two takes the members are not comparable and the learner hears the difference between the recordings rather than between the numbers.',
        clipIds: ['soixante-douze', 'soixante-seize', 'quatre-vingt-deux', 'quatre-vingt-douze', 'soixante-treize', 'quatre-vingt-treize', 'soixante-quinze', 'quatre-vingt-quinze', 'quatre-vingts', 'quatre-vingt-un', 'soixante', 'soixante-dix'],
      },
      {
        id: 'rec-a1-27-listening',
        desc: 'The eight listening lines, each read straight through as a whole sentence at natural pace and again at 0.65 from the same take. Never assembled from separately recorded words: the number sits mid-sentence in every one of them and the joins are exactly where the teaching lives.',
        clipIds: ['J’ai payé vingt-deux euros cinquante pour ce pull.', 'Il habite au numéro quarante-sept de la rue.', 'Le premier ministre a quarante-neuf ans cette année.', 'Pendant notre voyage, nous avons visité vingt et une villes.', 'Au mariage, nous avons invité soixante-dix personnes.', 'L’appartement fait soixante-douze mètres carrés.', 'Il reste soixante-quinze pages à lire.', 'Mon voisin a soixante-dix-sept ans mais il court encore.', 'Ma grand-mère a quatre-vingt-dix ans.', 'Nous avons parcouru quatre-vingt-douze kilomètres aujourd’hui.', 'Pour ce stylo, j’ai payé quatre-vingt-dix-neuf centimes.', 'Pour le dîner, nous avons dépensé quatre-vingt-quinze euros.'],
      },
      {
        id: 'rec-a1-27-scene',
        desc: 'The stairwell scene. A neutral adult female voice for the landlord, warm and slightly rushed, the way somebody sounds who has one more appointment. The line « Quatre-vingt-douze. Quatre. Vingt. Douze. » is the pivot and must be one take: the whole scene turns on the whole and the parts being audibly the same word.',
        clipIds: ['C’est le zéro six, quatre-vingt-douze, soixante-quinze, quatre-vingt-un, trente-trois.', 'Quatre-vingt-douze. Quatre. Vingt. Douze.', 'Parfait. Appelez-moi demain.'],
      },
      {
        id: 'rec-a1-27-dictee',
        desc: 'The four dictation sentences at natural pace, and again at 0.65 from the same take so the slow version is a slowing rather than a re-reading. Full stops audible; no exaggerated word separation, which would give the tile boundaries away. The phone number keeps its chunk pauses and nothing else.',
        clipIds: ['Cette robe fait quatre-vingts euros.', 'Elle a quatre-vingt-un ans aujourd’hui.', 'Mon numéro est le zéro six, quatre-vingt-douze, soixante-quinze, quatre-vingt-un, trente-trois.', 'Ma sœur a soixante et onze ans.'],
      },
      {
        id: 'rec-a1-27-phone',
        desc: 'The landing exchange, landlord lines only, warm and quick. The number is given at the speed a French speaker gives one, with a beat between chunks and none inside them, because a chunk read as separate words teaches the opposite of the mission.',
        clipIds: ['Alors, vous prenez l’appartement ?', 'C’est le zéro six, quatre-vingt-douze, soixante-quinze.', 'Et la fin, quatre-vingt-un, trente-trois.', 'Le loyer, plus quatre-vingt-quinze euros de charges.', 'Parfait. Appelez-moi demain.'],
      },
    ],
  },

  /* ─── Narration ───────────────────────────────────────────────────────────
   *
   * The Phase 7 spoken script, in the fixed warm → focus → input → practice →
   * produce → check → cheat order. ratioEnFr 0.7 is the a1 target: English
   * scaffolding around French content, fading as the level rises.
   *
   * Every interaction names an item id, which validateCorpus resolves the same
   * way it resolves a practice section's, because a narration stage that drills
   * a dangling item is the same silent blank-drill failure.                    */
  narration: {
    camilleVoiceId: 'camille-fr-ca-01',
    ratioEnFr: 0.7,
    stages: [
      {
        stage: 'warm',
        segments: [
          { voice: 'en', text: 'I am Camille. Today is twenty-one to a hundred, and the part of it that is arithmetic rather than vocabulary.' },
          { voice: 'en', text: 'You could learn eighty words from a list. Catching one of them at speed is a different skill, and above sixty-nine it is the only one that matters.' },
          { voice: 'fr', text: 'Quatre-vingt-douze.' },
          { voice: 'en', text: 'Ninety-two. Four twenties and twelve, and if you had to work that out just now, we have found the thing to fix.' },
        ],
      },
      {
        stage: 'focus',
        segments: [
          { voice: 'fr', text: 'Quarante-cinq.' },
          { voice: 'en', text: 'Forty, then five. Nothing to work out, and most of this range behaves like it.' },
          { voice: 'fr', text: 'Soixante-dix. Quatre-vingts. Quatre-vingt-dix.' },
          { voice: 'en', text: `Sixty-ten, four twenties, four twenties and ten. Three sums, and none of them is worth doing twice. ${REFRAME}` },
        ],
      },
      {
        stage: 'input',
        segments: [
          { voice: 'en', text: 'The tens first. Say each one after me.' },
          { voice: 'fr', text: 'Trente, quarante, cinquante, soixante.' },
          { kind: 'repeat', itemId: TENS_IDS[0] },
          { kind: 'repeat', itemId: TENS_IDS[3] },
          { voice: 'en', text: 'Sixty is the last one with a word of its own. After that the language adds.' },
          { voice: 'fr', text: 'Soixante-dix, quatre-vingts, quatre-vingt-dix.' },
          { kind: 'repeat', itemId: HARD_IDS[0] },
          { kind: 'repeat', itemId: HARD_IDS[10] },
          { kind: 'repeat', itemId: HARD_IDS[20] },
          { voice: 'en', text: 'And the ceiling, which is the last round word in the language until a thousand.' },
          { voice: 'fr', text: 'Cent.' },
          { kind: 'repeat', itemId: CENT_ID },
        ],
      },
      {
        stage: 'practice',
        segments: [
          { voice: 'en', text: 'Two numbers one syllable apart. Listen to the end of each.' },
          { voice: 'fr', text: 'Quatre-vingt-deux. Quatre-vingt-douze.' },
          { voice: 'en', text: 'Deux ends on a vowel and douze ends on a Z. Eighty-two and ninety-two, and a phone number will hand you both.' },
          { voice: 'fr', text: 'Soixante-douze. Soixante-seize.' },
          { kind: 'repeat', itemId: HARD_IDS[2] },
          { voice: 'en', text: 'Now the written rule. Twenty-one takes et. Eighty-one does not, and neither does ninety-one.' },
          { kind: 'repeat', itemId: ET_IDS[0] },
          { kind: 'repeat', itemId: HARD_IDS[11] },
        ],
      },
      {
        stage: 'produce',
        segments: [
          { voice: 'en', text: 'Your turn, with nothing in front of you. Say ninety-two.' },
          { kind: 'produce', itemId: HARD_IDS[22], expected: 'quatre-vingt-douze', gradeAs: 'produce' },
          { voice: 'en', text: 'And seventy-one, which is the one that takes et.' },
          { kind: 'produce', itemId: HARD_IDS[1], expected: 'soixante et onze', gradeAs: 'produce' },
          { voice: 'en', text: 'And eighty on its own, where the S is written and never said.' },
          { kind: 'produce', itemId: HARD_IDS[10], expected: 'quatre-vingts', gradeAs: 'produce' },
        ],
      },
      {
        stage: 'check',
        segments: [
          { voice: 'en', text: 'One question. I will give you a number the way somebody would give it to you, and you tell me the middle pair.' },
          { voice: 'fr', text: 'Mon numéro est le zéro six, quatre-vingt-douze, soixante-quinze, quatre-vingt-un, trente-trois.' },
          { kind: 'check', itemId: 'fr.a1.nombres.236', expected: 'ninety-two', gradeAs: 'recognise' },
          { voice: 'en', text: 'Ninety-two. Said once, at speed, with nothing written down to check it against, which is the only way you will ever get one.' },
        ],
      },
      {
        stage: 'cheat',
        segments: [
          { voice: 'en', text: 'Three things to keep. Seventy is sixty-ten, eighty is four-twenties, ninety is four-twenties-ten.' },
          { voice: 'en', text: 'et appears on twenty-one through seventy-one, and never on eighty-one or ninety-one.' },
          { voice: 'en', text: 'And quatre-vingts keeps its S only when nothing follows it.' },
          { voice: 'fr', text: 'À bientôt.' },
        ],
      },
    ],
  },
};

/** Exported for the authoring script, the merge script and the tests, so none
 *  of them restates a list or a count that can drift from the content. */
export {
  ITEM_IDS as NOMBRES21_ITEM_IDS,
  SPEAK_IDS as NOMBRES21_SPEAK_IDS,
  LISTEN_IDS as NOMBRES21_LISTEN_IDS,
  DICTATION_IDS as NOMBRES21_DICTATION_IDS,
  EASY_IDS as NOMBRES21_EASY_IDS,
  HARD_IDS as NOMBRES21_HARD_IDS,
  CENT_ID as NOMBRES21_CENT_ID,
  TENS_IDS as NOMBRES21_TENS_IDS,
  ET_IDS as NOMBRES21_ET_IDS,
};

/** The eighty headwords the lesson must teach, in order from 21 to 100, so the
 *  test can assert the set is complete against the corpus rather than against a
 *  hand-typed list. */
export const NOMBRES21_RANGE_IDS = [...EASY_IDS, ...HARD_IDS, CENT_ID];
