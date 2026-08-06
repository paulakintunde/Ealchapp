// a1.28.l1 "Les grands nombres" — the mission journey.
//
// ── What this lesson is, and why it is not a bigger a1.27 ──────────────────
//
// Each lesson in this chain has a different kind of difficulty, and building
// this one as "a1.27 with more digits" would have been the main way to get it
// wrong:
//
//   a1.02   phonetic     a number changes shape depending on what follows it
//   a1.27   arithmetic   French calculates 97 out loud as 4 x 20 + 10 + 7
//   a1.28   grammar      the multiplier words do not agree with each other
//
// Large numbers are not hard because they are large. `trois cent trente` is
// three words the learner already has. They are hard because the three
// multiplier words follow three DIFFERENT rules and nothing about their meaning
// predicts which:
//
//   cent      takes an S when multiplied AND final        deux cents habitants
//             loses it the moment a number follows        trois cent trente
//             never had one when nothing multiplies it    cent mille livres
//   mille     never takes an S, in any position, ever     deux mille étudiants
//   million   is a NOUN: it takes an S, and it takes de   huit millions de
//                                                         visiteurs
//
// So this is a WRITTEN lesson more than an ear lesson, and the section mix says
// so. The S on cents, the invariable mille and the de after million are all
// invisible in speech and decisive on paper, so the scene turns on a form being
// filled in by hand, the quiz runs 9 of 28 questions as typeIn or errorSpot
// (against 4 of 28 in a1.27), and no mission pretends there is an ear problem
// where there is not.
//
// ── The dependency chain, checked rather than assumed ──────────────────────
//
// The brief said a1.02 and a1.27 "may be empty" and told this lesson to decide
// explicitly. Checked on 2026-08-05 against both the seed AND Postgres: a1.02.l1
// (v2) and a1.27.l1 (v3) are both published and both linked by their units. So
// the declared prerequisite is TAKEN.
//
// Nothing here re-teaches 21 to 100. `cent` standing alone is a1.27's ceiling
// and appears as the anchor the learner arrives with, never re-taught and never
// released to SRS again. The numbers below a hundred are used constantly,
// because every large number ends in one, and taught nowhere.
//
// The S on quatre-vingts is the one piece of a1.27 this lesson leans on
// deliberately, because the S on cents is the same idea generalised: an S that
// survives only when the word is multiplied and nothing follows it. `quatre-
// vingt mille` (fr.a1.nombres.103) is where the two rules meet on one line, and
// the mille table uses it.
//
// ── What the corpus said that the brief did not ───────────────────────────
//
// Four claims were checked against the seed and Postgres before anything was
// authored:
//
//   The theme holds 443 items, not the 439 the brief states. a1.27 added two
//   (.236, .237) after the brief was written and two more predate it.
//
//   The brief lists two price-with-cents sentences. There are THREE:
//   fr.a1.nombres.070, .101 and .203. All three are under ten euros, which is
//   the actual gap, and .242 was authored to close it.
//
//   The brief says six sentences spell a year out. There are seven: .152, .077,
//   .195, .205, .140, .209 and .100 (mille cinq cents, which is 1500 and the
//   only one with no unit after the hundred).
//
//   Everything the brief says about the S contrast, the single million
//   sentence, the absent milliard, the absent decimal comma, the absent
//   year-in-digits and the absent `milles` was correct.
//
// ── Section shapes with a history ─────────────────────────────────────────
//
//   No section sets `size: 'xl'`. ownsLayout() ignores section size so the
//   field looks inert, but density.logic.ts reads xl as one French unit at 56pt
//   and caps EVERY string in the section at 12 words. This lesson's content is
//   the longest in the chain (`mille neuf cent quatre-vingt-dix-neuf` is six
//   words for one year) and xl would have failed on the content itself. The
//   card decks sit at lg, where a number and its decomposition both fit.
//
//   commonErrors carries `swipe: true` and `size: 'lg'`. Without swipe it is a
//   scrolling list rather than one trap per screen, and before the fallback was
//   moved out of the switch's `default:` it drew a blank screen.
//
//   `reading` carries questionsInModal WITH questions, the only path that
//   reaches PassagePage and therefore the only path that draws a glossary.
//
//   ONE quiz section. lessonPager.logic.ts appends exactly one quiz page and
//   resolves it with sections.find(s => s.type === 'quiz'). A second is a set of
//   questions no learner reaches, and lesson-contract.test.ts now fails on it.
//
//   `autoplay` is authored nowhere. It is declared in schema.ts and implemented
//   in no component. `audioFirst` is the one that does the work, and the scene
//   break uses it for a reason spelled out at the beat.
//
//   Every respelling INLINED here closes its nasal vowels with a superscript n.
//   The surrounding corpus does not: 71 of the theme's 182 respelled items would
//   fail the validator if copied in verbatim, including five of the seven
//   multiplier headwords (cent as SAHN, un million as UHN mee-LYOHN).
//   Referencing by id is safe, because the respelling resolves at render time
//   and never enters a section.
//
//   The setting carries no image. assets/lessons/ holds alphabet, muettes,
//   rythme and salutations and nothing for this lesson, and Metro resolves
//   require() statically, so registering a ref with no file breaks the bundle
//   rather than degrading to no image.
//
// ── Where `milles` is allowed to appear ───────────────────────────────────
//
// The brief requires that the error be STAGED, because zero items in the theme
// contain it and the corpus therefore cannot teach the mistake. It also requires
// that nothing assert it. Both, and they are not in tension: `milles` appears
// here ONLY in fields whose job is to display a wrong form, which is the scene
// break's `wrong`, a commonErrors `wrong`, an errorSpot prompt, and the scene
// choice whose outcome is `breaks`. It appears in no `fr`, no `right`, no
// flashcard back, no accepted answer, no tranche and no corpus item.
// a1-28-grands-nombres.test.ts asserts exactly that split rather than a blanket
// ban, because a blanket ban would have removed the staging the lesson needs.

import type { Lesson, LessonAct, LessonDrill, LessonSection, ErrorTrigger, ReferenceSheet, SceneBeat } from '../../../ealch-v2/src/content/schema.ts';
import { REFRAME, NOMBRES_LARGE_TERMS } from './nombres-large-terms.ts';
import {
  CENT_ANCHOR_ID,
  CENT_IDS,
  MILLE_IDS,
  MILLION_IDS,
  LADDER_IDS,
  S_PAIR_IDS,
  SPEAK_IDS,
  QUANTITY_IDS,
  DICTATION_IDS,
  ITEM_IDS,
} from './nombres-large-ids.ts';

export { REFRAME };

/* ─── Mission 1 · Scene ───────────────────────────────────────────────────
 *
 * The A1 register of stakes is a moment going wrong socially, not a mouth
 * position. Every other lesson in this chain found that moment in speech. This
 * one cannot, because the three rules it teaches are silent, so the scene is
 * built around the one everyday situation where a French number has to be
 * WRITTEN and somebody is watching: the amount in words on a rental agreement.
 *
 * The choice beat stages the exact error the corpus cannot teach. Zero of the
 * theme's 443 items contain `milles`, so a learner meets the over-generalised S
 * for the first time in their own handwriting unless a lesson puts it in front
 * of them. Both options are plausible and the wrong one is the one an English
 * speaker who has just learned `deux cents` will write.
 *
 * The break sets `audioFirst`. On every other scene in the app that means the
 * ear answers before the eye can. Here it means the opposite and deliberately
 * so: the two forms are phonetically identical, the audio proves it, and the
 * learner discovers that listening harder is not going to help.                */

const SCENE_BEATS: SceneBeat[] = [
  {
    kind: 'narration',
    size: 'md',
    text: 'The flat is yours. There is one page left, and one box on it the agent cannot fill in for you.',
    audio: { mode: 'tts', voice: 'coach' },
  },
  {
    kind: 'bubble',
    from: 'them',
    reveal: 'tap',
    size: 'md',
    speaker: 'The agent',
    fr: 'Écrivez la somme en toutes lettres, s’il vous plaît.',
    en: 'Write the amount out in words, please.',
    stage: 'She turns the form round and puts a pen on the empty line.',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a1-28-scene' },
  },
  {
    kind: 'narration',
    size: 'md',
    text: 'The figure printed beside the box is 2 500. You have every word you need. deux, mille, cinq, cent.',
    audio: { mode: 'tts', voice: 'coach' },
  },
  {
    kind: 'choice',
    size: 'lg',
    prompt: 'You write it out by hand. Which one?',
    options: [
      {
        // The staged error. `deux milles` is the S a learner carries over from
        // `deux cents`, and `cinq cent` is the S they drop where it belongs.
        // One stroke of the pen gets both halves the wrong way round, which is
        // why they are shown together rather than as two separate mistakes.
        fr: 'deux milles cinq cent',
        en: 'an S on mille, none on cent',
        outcome: 'breaks',
        audio: { mode: 'tts', lang: 'fr-FR' },
      },
      {
        fr: 'deux mille cinq cents',
        en: 'no S on mille, one on cent',
        outcome: 'works',
        audio: { mode: 'tts', lang: 'fr-FR' },
      },
    ],
    followUp: {
      works: 'Yes. mille has never taken an S, and cent takes one here because nothing follows it.',
      breaks: 'That is the instinct, and it puts the S on the one word that never takes it.',
    },
  },
  {
    kind: 'break',
    size: 'lg',
    // MEASURED on a Pixel 6 on 2026-08-05, and cut twice.
    //
    // v1 ran the body to 24 words and the coach to 20. The card overflowed: the
    // last line of the coach was sliced through and the Continue button was off
    // the bottom of the screen entirely, which is the exact failure a1.27's
    // break had.
    //
    // v3 cut the prose to 27 words. Nothing was sliced any more, and Continue
    // still sat ON the fold behind a scroll chevron: reachable, and not visible,
    // which is the same bug wearing a scrollbar.
    //
    // v4 took the heading to ONE line. That is where the room actually is: the
    // break heading renders at display size, so a two-line heading costs more
    // vertical space than the entire body. This break is taller than any other
    // in the app before a word of prose is written, because BOTH contrast cards
    // carry four lines (fr, ipa, respell, en) and the two forms here are long.
    //
    // The cuts also removed a repetition the house style bans: the body said
    // "Neither rule makes a sound" and the coach opened "Same sounds, same
    // syllables, same length", which is one idea drawn twice on one screen.
    //
    // The heading names the error the learner has just made rather than
    // summarising both rules. The body carries the other half, and the two
    // contrast cards above it show the whole thing anyway.
    heading: 'Never on mille.',
    body: 'mille never takes an S. cent takes one here, because nothing follows it.',
    wrong: {
      fr: 'deux milles cinq cent',
      ipa: '/dø mil sɛ̃ sɑ̃/',
      respell: '[duh MEEL saⁿ SAHⁿ]',
      en: 'the S on the wrong word',
    },
    right: {
      fr: 'deux mille cinq cents',
      ipa: '/dø mil sɛ̃ sɑ̃/',
      respell: '[duh MEEL saⁿ SAHⁿ]',
      en: 'two thousand five hundred',
    },
    coach: 'Neither spelling sounds different. The page is the only place it shows.',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], audioFirst: true, recordingId: 'rec-a1-28-pairs' },
  },
  {
    kind: 'bubble',
    from: 'you',
    reveal: 'tap',
    size: 'md',
    fr: 'Deux mille cinq cents euros.',
    en: 'Two thousand five hundred euros.',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65] },
  },
  {
    kind: 'bubble',
    from: 'them',
    reveal: 'auto',
    size: 'md',
    speaker: 'The agent',
    fr: 'Parfait. Et les charges, cent vingt euros par mois.',
    en: 'Perfect. And the charges, one hundred twenty euros a month.',
    stage: 'She has the keys on the desk between you.',
    audio: { mode: 'tts', lang: 'fr-FR', recordingId: 'rec-a1-28-scene' },
  },
  {
    kind: 'resolve',
    size: 'md',
    text: 'Nobody in that room could have heard which one you wrote. The form could.',
  },
];

const SECTIONS: LessonSection[] = [
  /* ── Act 1: the amount in words ───────────────────────────────────────── */

  {
    type: 'scene',
    id: 's01-scene',
    title: 'The Amount In Words',
    frSub: 'La somme en toutes lettres',
    render: 'screens',
    layer: 'core',
    terms: ['centS', 'invariable'],
    say: {
      text: 'Watch this one on the page rather than in the air. Both spellings sound identical, and only one of them is going on the contract.',
      voice: 'coach',
      timing: 'onFirstVisitOnly',
    },
    setting: {
      place: 'A rental agency, at the desk, with the lease half signed',
      city: 'Lyon',
      time: 'Tuesday afternoon',
      ambience: 'room-tone-office',
    },
    beats: SCENE_BEATS,
    closing: {
      size: 'md',
      text: 'Three words scale every number in French, and all three behave differently. That is the whole lesson.',
    },
  },

  {
    type: 'goals',
    id: 's02-goals',
    title: 'What You Will Be Able To Do',
    frSub: 'Ce que vous saurez faire',
    layer: 'core',
    say: `${REFRAME} Four things, and the last one is the only one you will ever be marked on.`,
    goals: [
      { t: 'Say any number to a billion', s: 'cent, mille, million and milliard, and what goes in front of each.' },
      { t: 'Say a price the way it is said', s: 'The cents arrive as a bare number, with no word and no and between the halves.' },
      { t: 'Say and hear a year', s: 'The two forms the 1900s take, and the one the 2000s take.' },
      { t: 'Write all three correctly', s: 'The S that comes and goes on cent, the one mille never takes, and the de after million.' },
    ],
  },

  {
    type: 'cardDeck',
    id: 's03-three',
    title: 'Three Words, Two Kinds',
    frSub: 'Cent, mille, million',
    hint: 'Swipe through the three cards.',
    render: 'deck',
    layer: 'core',
    size: 'lg',
    terms: ['multiplier', 'nounNumber'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a1-28-ladder' },
    say: 'Three words do all the scaling in French. Two of them behave one way and the third does not, and that is not a detail.',
    cards: [
      {
        label: 'The first two',
        head: 'They attach directly',
        fr: 'deux cents habitants',
        sub: 'duh sahⁿ za-bee-TAHⁿ',
        body: 'Two hundred inhabitants, with nothing between the number and the thing counted. cent and mille sit straight against their noun the way an English number does, and there is no extra word to remember.',
      },
      {
        label: 'The third one',
        head: 'It needs a word to reach',
        fr: 'huit millions de visiteurs',
        sub: 'wee meel-YOHⁿ duh vee-zee-TEUR',
        body: 'Eight million visitors, and the de is not optional. Take it out and the sentence is wrong in the way a missing preposition is wrong: understood, and audibly not French.',
      },
      {
        label: 'Why',
        head: 'Two kinds, not three rules',
        fr: 'deux cents · deux millions de',
        sub: 'duh SAHⁿ · duh meel-YOHⁿ duh',
        body: `${REFRAME} An adjective attaches to what it counts. A noun needs de to reach it, and pluralises like any other noun. Everything else in this lesson falls out of that one line.`,
      },
    ],
  },

  /* ── Act 2: cent, and the S that comes and goes ───────────────────────── */

  {
    type: 'cardDeck',
    id: 's04-cent',
    title: 'The S On Cent',
    frSub: 'Deux cents, deux cent cinquante',
    hint: 'Swipe through the three cards.',
    render: 'deck',
    layer: 'core',
    size: 'lg',
    terms: ['centS'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a1-28-pairs' },
    say: 'One letter, three situations, and you will never hear it in any of them.',
    cards: [
      {
        label: 'It has one',
        head: 'Multiplied, and last',
        fr: 'deux cents',
        sub: 'duh SAHⁿ',
        body: 'A number stands in front of cent and nothing stands after it. That is the only situation in which the S exists. trois cents and cinq cents behave the same way.',
      },
      {
        label: 'It loses it',
        head: 'A number follows',
        fr: 'deux cent cinquante',
        sub: 'duh sahⁿ saⁿ-KAHⁿT',
        body: 'Put anything behind cent and the S goes, whatever the number in front is doing. deux cent cinquante, trois cent trente, six cent cinquante. Same word, same sound, no letter.',
      },
      {
        label: 'It never had one',
        head: 'Nothing multiplies it',
        fr: 'cent mille',
        sub: 'sahⁿ MEEL',
        body: 'One hundred thousand. There is no number in front of cent, so there is nothing to make it plural and no S to lose. A bare cent is always spelled cent.',
      },
    ],
  },

  {
    type: 'tapTable',
    id: 's05-centcases',
    title: 'Six Rows, One Rule',
    frSub: 'Avec ou sans S',
    layer: 'core',
    terms: ['centS', 'multiplier'],
    sheetId: 'sheet.a1.28.rules',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a1-28-ladder' },
    say: 'Read the third column down the page before you read anything else. The pattern is in it and it takes about four seconds.',
    cols: ['French', 'Value', 'S?'],
    rows: [
      {
        cells: ['cent', '100', 'no'],
        say: 'cent',
        detail: {
          title: 'cent',
          body: 'A hundred on its own. Nothing multiplies it, so there is nothing to agree with and never an S.',
          say: 'cent euros',
        },
      },
      {
        cells: ['deux cents', '200', 'yes'],
        say: 'deux cents',
        detail: {
          title: 'deux cents',
          body: 'Two hundreds, and nothing after them. Both conditions are met, so this is one of the few forms that carries the letter.',
          say: 'deux cents habitants',
        },
      },
      {
        cells: ['deux cent cinquante', '250', 'no'],
        say: 'deux cent cinquante',
        detail: {
          title: 'deux cent cinquante',
          body: 'Still two hundreds, but cinquante is behind it now. The S goes the moment any number follows, and nothing about the sound changes.',
          say: 'deux cent cinquante euros',
        },
      },
      {
        cells: ['trois cent trente', '330', 'no'],
        say: 'trois cent trente',
        detail: {
          title: 'trois cent trente',
          body: 'The height of the Eiffel Tower in metres, and the form people write with an S more often than any other. trente follows, so there is none.',
          say: 'trois cent trente mètres',
        },
      },
      {
        cells: ['cinq cents', '500', 'yes'],
        say: 'cinq cents',
        detail: {
          title: 'cinq cents',
          body: 'Five hundreds, nothing after them, so the S is back. Add one euro to it and it becomes cinq cent un, with none.',
          say: 'cinq cents livres',
        },
      },
      {
        cells: ['cent mille', '100 000', 'no'],
        say: 'cent mille',
        detail: {
          title: 'cent mille',
          body: 'A hundred thousand. Here cent is the multiplier rather than the thing multiplied, which is the third situation and the one people forget.',
          say: 'cent mille livres',
        },
      },
    ],
  },

  {
    type: 'listening',
    id: 's06-centhear',
    title: 'Cent, Inside Sentences',
    frSub: 'Écoutez bien',
    layer: 'core',
    questionsInModal: true,
    terms: ['centS'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a1-28-listening' },
    say: 'Four lines, and the spelling of cent is different in three of them. You will not hear a single one of those differences, which is the point of doing this now.',
    lines: [
      { fr: 'Le petit village compte à peine deux cents habitants.', en: 'The small village has barely two hundred inhabitants.' },
      { fr: 'La tour Eiffel mesure trois cent trente mètres.', en: 'The Eiffel Tower is three hundred thirty metres tall.' },
      { fr: 'La bibliothèque possède plus de cent mille livres.', en: 'The library holds more than a hundred thousand books.' },
      { fr: 'Pour deux cent cinquante euros, elle a acheté cette bague.', en: 'For two hundred fifty euros, she bought this ring.' },
    ],
    questions: [
      {
        q: 'How many people live in the village?',
        opts: ['two thousand', 'two hundred', 'two hundred fifty', 'a hundred'],
        correct: 1,
        why: 'deux cents is two hundred, and it is written with an S because nothing follows it. deux mille would have ended on a different word entirely.',
      },
      {
        q: 'Which of the four lines spells cent with an S?',
        opts: ['the tower', 'the library', 'the village', 'the ring'],
        correct: 2,
        why: 'Only the village line has a number in front of cent and nothing behind it. The tower has trente behind it, the ring has cinquante, and the library never multiplied cent at all.',
      },
      {
        q: 'How much did the ring cost?',
        opts: ['two hundred fifty euros', 'two hundred euros', 'two hundred fifteen euros', 'two thousand fifty euros'],
        correct: 0,
        why: 'deux cent cinquante is two hundred fifty. The S has gone from cent because cinquante follows it, and no listener could have told you that.',
      },
    ],
  },

  /* ── Act 3: mille, which never moves ──────────────────────────────────── */

  {
    type: 'cardDeck',
    id: 's07-mille',
    title: 'Mille Never Moves',
    frSub: 'Deux mille, dix mille',
    hint: 'Swipe through the three cards.',
    render: 'deck',
    layer: 'core',
    size: 'lg',
    terms: ['invariable', 'centS'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a1-28-ladder' },
    say: 'This is the shortest rule in the lesson and the one most often broken, and those two facts are related.',
    cards: [
      {
        label: 'Never',
        head: 'No S, in any position',
        fr: 'deux mille',
        sub: 'duh MEEL',
        body: 'Two thousand. Multiplied, final, both at once, neither: mille is spelled the same way in every situation there is. There is no case to learn because there is no exception.',
      },
      {
        label: 'Not even here',
        head: 'Where cent would take one',
        fr: 'quatre-vingt mille',
        sub: 'ka-truh-vaⁿ MEEL',
        body: 'Eighty thousand, and quatre-vingts has lost its own S because mille follows it. Two rules on one line, and the word in the middle is the only one that never changes.',
      },
      {
        label: 'The trap',
        head: 'The S you will want to write',
        fr: 'mille huit cent quarante',
        sub: 'meel wee sahⁿ ka-RAHⁿT',
        body: `Eighteen forty. ${REFRAME} An adjective may agree, and mille is the one that never does. You have just learned an S on cents, and this is where it will follow you.`,
      },
    ],
  },

  {
    type: 'tapTable',
    id: 's08-milletable',
    title: 'What Each One Is Made Of',
    frSub: 'La décomposition',
    layer: 'core',
    terms: ['invariable', 'multiplier'],
    sheetId: 'sheet.a1.28.rules',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a1-28-ladder' },
    say: 'The middle column is here once, so that you can stop needing it. Tap a row to hear the whole number said as one run.',
    cols: ['French', 'The parts', 'Digits'],
    rows: [
      {
        cells: ['mille', '1000', '1 000'],
        say: 'mille',
        detail: {
          title: 'mille',
          body: 'A thousand. Said as one syllable, with no un in front of it: French does not say a thousand, it says thousand.',
          say: 'mille euros',
        },
      },
      {
        cells: ['deux mille', '2 x 1000', '2 000'],
        say: 'deux mille',
        detail: {
          title: 'deux mille',
          body: 'Two thousand, and the form every year from 2000 onward is built on. Written with no S and no hyphen.',
          say: 'deux mille étudiants',
        },
      },
      {
        cells: ['dix mille', '10 x 1000', '10 000'],
        say: 'dix mille',
        detail: {
          title: 'dix mille',
          body: 'Ten thousand. The X of dix goes silent in front of the M, so this is said dee MEEL and not deeks MEEL.',
          say: 'dix mille personnes',
        },
      },
      {
        cells: ['quatre-vingt mille', '80 x 1000', '80 000'],
        say: 'quatre-vingt mille',
        detail: {
          title: 'quatre-vingt mille',
          body: 'Eighty thousand. quatre-vingts drops the S it would carry alone, because mille is a number and follows it. mille adds none of its own.',
          say: 'quatre-vingt mille spectateurs',
        },
      },
      {
        cells: ['cent mille', '100 x 1000', '100 000'],
        say: 'cent mille',
        detail: {
          title: 'cent mille',
          body: 'A hundred thousand. cent multiplies mille here rather than being multiplied itself, so it carries no S either.',
          say: 'cent mille livres',
        },
      },
      {
        cells: ['deux cent mille', '200 x 1000', '200 000'],
        say: 'deux cent mille',
        detail: {
          title: 'deux cent mille',
          body: 'Two hundred thousand. cent is multiplied by deux now, but mille follows it, so the S still does not appear.',
          say: 'deux cent mille kilomètres',
        },
      },
      {
        cells: ['mille neuf cent quatre-vingt-dix-neuf', '1000 + 900 + 99', '1 999'],
        say: 'mille neuf cent quatre-vingt-dix-neuf',
        detail: {
          title: 'mille neuf cent quatre-vingt-dix-neuf',
          body: 'Nineteen ninety-nine. Six words, and every rule in this lesson is in it: mille bare, cent with no S because a number follows, and a1.27 doing the last two.',
          say: 'mille neuf cent quatre-vingt-dix-neuf',
        },
      },
    ],
  },

  {
    type: 'listening',
    id: 's09-millehear',
    title: 'Mille, At Full Speed',
    frSub: 'À vitesse normale',
    layer: 'core',
    questionsInModal: true,
    terms: ['invariable', 'multiplier'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a1-28-listening' },
    say: 'The number is never the last word in these, so there is no pause afterwards to work anything out in.',
    lines: [
      { fr: 'Le stade peut accueillir quatre-vingt mille spectateurs.', en: 'The stadium can hold eighty thousand spectators.' },
      { fr: 'Ce professeur a formé plus de deux mille étudiants.', en: 'This teacher has trained more than two thousand students.' },
      { fr: 'Depuis mille huit cent quarante, ce moulin tourne sans arrêt.', en: 'Since eighteen forty, this mill has turned without stopping.' },
      { fr: 'Ce camion a parcouru plus de deux cent mille kilomètres.', en: 'This lorry has covered more than two hundred thousand kilometres.' },
    ],
    questions: [
      {
        q: 'How many people fit in the stadium?',
        opts: ['eight thousand', 'eighty', 'eighty thousand', 'four thousand'],
        correct: 2,
        why: 'quatre-vingt mille is eighty times a thousand. huit mille would have been eight thousand, and the two open on completely different syllables.',
      },
      {
        q: 'The mill line gives a year. Which?',
        opts: ['1840', '1804', '1140', '8040'],
        correct: 0,
        why: 'mille huit cent quarante is a thousand, nine hundred less than two thousand, and forty. Years before 2000 are built on mille or on the century, never on anything else.',
      },
      {
        q: 'How far has the lorry travelled?',
        opts: ['two thousand kilometres', 'two hundred kilometres', 'two million kilometres', 'two hundred thousand kilometres'],
        correct: 3,
        why: 'deux cent mille is two hundred thousand: deux multiplies cent, and cent multiplies mille. Dropping either word changes the answer by a factor of a thousand.',
      },
    ],
  },

  /* ── Act 4: million, and the word after it ────────────────────────────── */

  {
    type: 'cardDeck',
    id: 's10-million',
    title: 'Million Is A Noun',
    frSub: 'Huit millions de visiteurs',
    hint: 'Swipe through the three cards.',
    render: 'deck',
    layer: 'core',
    size: 'lg',
    terms: ['nounNumber', 'multiplier'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a1-28-ladder' },
    say: 'One word behaves differently from the other two, and once you know why, both of its oddities stop being oddities.',
    cards: [
      {
        label: 'It takes de',
        head: 'A noun cannot touch what it counts',
        fr: 'un million d’habitants',
        sub: 'uhⁿ mee-LYOHⁿ da-bee-TAHⁿ',
        body: 'A million inhabitants. The de is what reaches the thing being counted, and in front of a vowel it becomes d’. cent and mille need nothing at all in that gap.',
      },
      {
        label: 'It agrees',
        head: 'And it pluralises',
        fr: 'huit millions de visiteurs',
        sub: 'wee meel-YOHⁿ duh vee-zee-TEUR',
        body: 'Eight million visitors. millions carries an S in every plural, with no condition attached: not only when it is final, not only when multiplied. It behaves like the noun it is.',
      },
      {
        label: 'And milliard',
        head: 'Same word class, same two habits',
        fr: 'deux milliards de bouteilles',
        sub: 'duh meel-YAR duh boo-TEY',
        body: `Two billion bottles. ${REFRAME} milliard is a noun too, so it takes the S and the de for exactly the same reason, and you learn it for free.`,
      },
    ],
  },

  {
    type: 'practice',
    id: 's11-quantities',
    title: 'Five Sentences, Five Sizes',
    frSub: 'Les grandes quantités',
    layer: 'core',
    terms: ['nounNumber', 'multiplier'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65] },
    say: 'Each of these is roughly ten times the one before it. Read the French, hear it, then say what size it is before you grade yourself.',
    skill: 'read',
    itemIds: QUANTITY_IDS,
  },

  {
    type: 'tapTable',
    id: 's12-scale',
    title: 'The Whole Ladder',
    frSub: 'De cent à un milliard',
    layer: 'core',
    terms: ['multiplier', 'nounNumber'],
    sheetId: 'sheet.a1.28.rules',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a1-28-ladder' },
    say: `${REFRAME} Six rungs, and the last two are the ones that behave like things rather than like numbers.`,
    cols: ['French', 'Digits', 'English'],
    rows: [
      {
        cells: ['cent', '100', 'a hundred'],
        say: 'cent',
        detail: {
          title: 'cent',
          body: 'The rung you arrived with. a1.27 taught it as a ceiling and this lesson uses it as a floor.',
          say: 'cent',
        },
      },
      {
        cells: ['mille', '1 000', 'a thousand'],
        say: 'mille',
        detail: {
          title: 'mille',
          body: 'A thousand, said with no article in front of it and spelled the same way for ever.',
          say: 'mille',
        },
      },
      {
        cells: ['dix mille', '10 000', 'ten thousand'],
        say: 'dix mille',
        detail: {
          title: 'dix mille',
          body: 'Ten thousand. French has no single word for it, which English does not either, so nothing new is being asked of you here.',
          say: 'dix mille',
        },
      },
      {
        cells: ['cent mille', '100 000', 'a hundred thousand'],
        say: 'cent mille',
        detail: {
          title: 'cent mille',
          body: 'A hundred thousand, and the last rung before the words change class. Everything up to here is an adjective.',
          say: 'cent mille',
        },
      },
      {
        cells: ['un million', '1 000 000', 'a million'],
        say: 'un million',
        detail: {
          title: 'un million',
          body: 'A million, and here it takes un in front of it where mille did not. That is your first sign it is a noun rather than a number word.',
          say: 'un million',
        },
      },
      {
        cells: ['un milliard', '1 000 000 000', 'a billion'],
        say: 'un milliard',
        detail: {
          title: 'un milliard',
          body: 'A thousand million, which is the English billion. Be careful with the French word billion, which is a thousand times larger again and almost never what you want.',
          say: 'un milliard',
        },
      },
    ],
  },

  {
    type: 'practice',
    id: 's13-scalehear',
    title: 'Which Rung Was That?',
    frSub: 'Écoutez et situez',
    layer: 'core',
    terms: ['multiplier'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65] },
    // Not a fake ear exercise. mille and million share their first syllable and
    // differ by one, and inside a sentence at speed that syllable is the only
    // thing standing between a figure and a figure a thousand times larger.
    say: 'These do not sound alike when you meet them one at a time. In a sentence, mille and million share their opening and are three noughts apart.',
    skill: 'listen',
    itemIds: [...S_PAIR_IDS, ...MILLE_IDS, ...MILLION_IDS],
  },

  {
    type: 'commonErrors',
    id: 's14-traps',
    // `swipe` and `size` are not decoration. MissionSection renders commonErrors
    // as its own swipe deck ONLY when `swipe` is set; without it the section is
    // a scrolling list, and before the fallback was moved out of the switch's
    // `default:` it drew a blank screen.
    swipe: true,
    size: 'lg',
    title: 'Three Traps',
    frSub: 'Trois pièges',
    layer: 'core',
    terms: ['invariable', 'centS', 'nounNumber'],
    say: 'One per rule, and all three are written mistakes. Nobody will ever hear you make any of them.',
    errors: [
      {
        // The staged error, in the field whose job is to display a wrong form.
        wrong: 'Writing two thousand as « deux milles », with the S carried over from cents.',
        right: 'Writing it as « deux mille », which is how it is spelled in every position.',
        why: 'mille has no plural form. The S you just learned belongs to cent and only to cent, and this is the first place it will follow you across.',
      },
      {
        wrong: 'Writing three hundred thirty as « trois cents trente », with the S left on.',
        right: 'Writing it as « trois cent trente », with no S at all.',
        why: 'cent keeps its S only when nothing follows it. trente follows, so it goes. This is the exact shape of the quatre-vingts rule you already met.',
      },
      {
        wrong: 'Saying « huit millions visiteurs », with nothing between the two.',
        right: 'Saying « huit millions de visiteurs », with the de in place.',
        why: `${REFRAME} A noun reaches what it counts through de, and dropping it is the one mistake in this lesson a listener actually notices.`,
      },
    ],
  },

  /* ── Act 5: prices, years, and out loud ───────────────────────────────── */

  {
    type: 'cardDeck',
    id: 's15-prices',
    title: 'A Price Is One Run',
    frSub: 'Vingt-deux euros cinquante',
    hint: 'Swipe through the three cards.',
    render: 'deck',
    layer: 'core',
    size: 'lg',
    terms: ['bareCents', 'decimalComma'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a1-28-prices' },
    say: 'The cents are the part nobody teaches, and they are the part that arrives last and fastest.',
    cards: [
      {
        label: 'The shape',
        head: 'Currency, then a bare number',
        fr: 'vingt-deux euros cinquante',
        sub: 'vaⁿt-deu-zeu-ro saⁿ-KAHⁿT',
        body: 'Twenty-two euros fifty, written 22,50. There is no word for centimes in a shop and no et joining the halves. Waiting for either means the sentence ends before you have understood it.',
      },
      {
        label: 'A longer one',
        head: 'The same shape, six words',
        fr: 'cent vingt-quatre euros quatre-vingts',
        sub: 'sahⁿ vaⁿt-KATR eu-ro ka-truh-VAⁿ',
        body: 'One hundred twenty-four euros eighty, written 124,80. It arrives as one run at one speed, and the only clue that the price has finished is that the speaker stops.',
      },
      {
        label: 'On the label',
        head: '124,80 €',
        body: 'The same price, printed. French writes the decimal as a comma and separates thousands with a space, so this is a hundred and twenty-four euros rather than twelve thousand. The comma is never said aloud.',
      },
    ],
  },

  {
    type: 'listening',
    id: 's16-pricehear',
    title: 'Four Prices, Said Once',
    frSub: 'Les prix',
    layer: 'core',
    // questionsInModal is what makes this comprehension under time rather than
    // a reading exercise: the price plays, the question opens over it, and
    // there is nothing left on screen to reverse-engineer the figure from.
    questionsInModal: true,
    terms: ['bareCents'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a1-28-listening' },
    say: 'The question opens over the line rather than beside it, which is what a counter does too.',
    lines: [
      { fr: 'Ce billet de train coûte cent vingt-quatre euros quatre-vingts.', en: 'This train ticket costs one hundred twenty-four euros eighty.' },
      { fr: 'Le boulanger vend des baguettes à un euro vingt.', en: 'The baker sells baguettes at one euro twenty.' },
      { fr: 'Sophie a payé son loyer, six cent cinquante euros, hier matin.', en: 'Sophie paid her rent, six hundred fifty euros, yesterday morning.' },
      { fr: 'Mon salaire mensuel est de deux mille cinq cents euros.', en: 'My monthly salary is two thousand five hundred euros.' },
    ],
    questions: [
      {
        q: 'What does the train ticket cost?',
        opts: ['124,00', '124,80', '184,00', '12 480'],
        correct: 1,
        why: 'quatre-vingts on the end is the cents, said as a bare number with no word in front of it. Nothing in the sentence marks where the euros stop and the cents start except the word euros.',
      },
      {
        q: 'Which of the four is the largest?',
        opts: ['the baguette', 'the salary', 'the rent', 'the ticket'],
        correct: 1,
        why: 'deux mille cinq cents is 2 500, against 650 for the rent. mille is what puts the salary an order of magnitude above everything else in the list.',
      },
      {
        q: 'A baguette at un euro vingt costs:',
        opts: ['one euro twenty cents', 'one hundred twenty euros', 'twenty euros', 'one euro and twenty euros'],
        correct: 0,
        why: 'The bare number after the currency is always the cents. Read as digits it is 1,20, and the comma is what an English reader has to remember not to treat as a thousands mark.',
      },
    ],
  },

  {
    type: 'tapTable',
    id: 's17-written',
    title: 'What The Label Actually Says',
    frSub: 'La virgule et l’espace',
    layer: 'core',
    terms: ['decimalComma', 'bareCents'],
    sheetId: 'sheet.a1.28.written',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a1-28-prices' },
    say: 'Nothing to practise here. Read it once, then check the comma before you check the digits for the rest of your life.',
    cols: ['On the label', 'It means', 'Never means'],
    rows: [
      {
        cells: ['1 234', '1234', '1.234'],
        say: 'mille deux cent trente-quatre',
        detail: {
          title: 'The space is the thousands mark',
          body: 'Where English puts a comma, French puts a space or a narrow gap. A gap in a price is never a decimal point and never a typing error.',
          say: 'mille deux cent trente-quatre',
        },
      },
      {
        cells: ['1,25', '1.25', '125'],
        say: 'un virgule vingt-cinq',
        detail: {
          title: 'The comma is the decimal point',
          body: 'This is the misreading that costs real money, because it moves the size by a factor of a hundred in the direction that makes a bargain look like a mistake.',
          say: 'un virgule vingt-cinq',
        },
      },
      {
        cells: ['2,50 €', '2.50 euros', '250 euros'],
        say: 'deux euros cinquante',
        detail: {
          title: 'A price with cents',
          body: 'Written with the comma, said with nothing in its place. The comma has no spoken form at all in a price, only in a measurement.',
          say: 'deux euros cinquante',
        },
      },
      {
        cells: ['124,80 €', '124.80 euros', '12 480 euros'],
        say: 'cent vingt-quatre euros quatre-vingts',
        detail: {
          title: 'The two conventions together',
          body: 'No thousands gap because there are no thousands, and a comma because there are cents. This is the price from the last two missions, on paper.',
          say: 'cent vingt-quatre euros quatre-vingts',
        },
      },
      {
        cells: ['1 234,56 €', '1234.56 euros', '123 456 euros'],
        say: 'mille deux cent trente-quatre euros cinquante-six',
        detail: {
          title: 'Both marks in one figure',
          body: 'A space for the thousands and a comma for the cents, in the same number. Once you have read this one, every French price tag is readable.',
          say: 'mille deux cent trente-quatre euros cinquante-six',
        },
      },
    ],
  },

  {
    type: 'tapTable',
    id: 's18-years',
    title: 'Two Ways To Say A Year',
    frSub: 'Les années',
    layer: 'core',
    terms: ['invariable', 'centS'],
    sheetId: 'sheet.a1.28.written',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a1-28-years' },
    say: 'Anything before 2000 has two spoken forms and both are correct. Anything after it has one.',
    cols: ['Year', 'The safe form', 'Also said'],
    rows: [
      {
        cells: ['1840', 'mille huit cent quarante', 'dix-huit cent quarante'],
        say: 'mille huit cent quarante',
        detail: {
          title: '1840',
          body: 'Both forms are current. The mille form works for every year in every century, which is why it is the one to reach for when you are not sure.',
          say: 'mille huit cent quarante',
        },
      },
      {
        cells: ['1938', 'mille neuf cent trente-huit', 'dix-neuf cent trente-huit'],
        say: 'mille neuf cent trente-huit',
        detail: {
          title: '1938',
          body: 'The dix-neuf cent form is the one most people use in speech for the twentieth century, and it is the one you will hear from anyone born in it.',
          say: 'dix-neuf cent trente-huit',
        },
      },
      // 1915 rather than 1999, and the reason is column width. MEASURED on a
      // Pixel 6 on 2026-08-05, twice.
      //
      // This table is the tightest French layout in the lesson: THREE columns,
      // two of which hold spelled-out French, so each gets roughly a third of
      // the screen. A word longer than about twelve characters has nowhere to
      // break and the renderer splits it mid-word. `quatre-vingt-dix-neuf` (21)
      // drew as "quatre-vi / ngt-dix-neuf", and the first replacement,
      // `soixante-huit` (13), still drew as "soixant / e-huit". A broken
      // spelling on the table that teaches the correct spelling.
      //
      // `quinze` is six characters and cannot break. The other two pre-2000
      // rows already end in `quarante` (8) and `trente-huit` (11), which both
      // fit, and the ceiling is pinned by a1-28-grands-nombres.test.ts so the
      // next author does not rediscover this on a device.
      //
      // 1999 keeps its place in s08-milletable, where two of the three columns
      // are short numeric strings, the French column is correspondingly wide,
      // and its job is the decomposition anyway. Here the job is the two forms.
      {
        cells: ['1915', 'mille neuf cent quinze', 'dix-neuf cent quinze'],
        say: 'mille neuf cent quinze',
        detail: {
          title: '1915',
          body: 'cent has no S in either form, because quinze follows it both times. The two forms differ only in how the century is named.',
          say: 'dix-neuf cent quinze',
        },
      },
      {
        cells: ['2007', 'deux mille sept', 'only this one'],
        say: 'deux mille sept',
        detail: {
          title: '2007',
          body: 'From 2000 the second form stops existing. There is no vingt cent, and nobody has ever said one.',
          say: 'deux mille sept',
        },
      },
      {
        cells: ['2010', 'deux mille dix', 'only this one'],
        say: 'deux mille dix',
        detail: {
          title: '2010',
          body: 'Three words, and mille sits bare in the middle of them as it always does. English says twenty ten and French does not.',
          say: 'deux mille dix',
        },
      },
      {
        cells: ['2026', 'deux mille vingt-six', 'only this one'],
        say: 'deux mille vingt-six',
        detail: {
          title: '2026',
          body: 'This year. Every year of your life from here is deux mille plus a number you learned in the last two lessons.',
          say: 'deux mille vingt-six',
        },
      },
    ],
  },

  {
    type: 'vocabThemes',
    id: 's19-words',
    title: 'The Words Themselves',
    frSub: 'Le vocabulaire',
    layer: 'core',
    terms: ['centS', 'invariable', 'nounNumber'],
    sheetId: 'sheet.a1.28.rules',
    say: 'Four decks, split where the grammar splits rather than where the numbers do. Open whichever you want first.',
    themes: [
      {
        title: 'The cent family',
        cards: [
          { fr: 'cent', sub: 'SAHⁿ', en: 'a hundred, and the one you arrived with' },
          { fr: 'cent un', sub: 'sahⁿ-UHⁿ', en: 'a hundred and one' },
          { fr: 'cent cinquante', sub: 'sahⁿ saⁿ-KAHⁿT', en: 'a hundred fifty' },
          { fr: 'deux cents', sub: 'duh SAHⁿ', en: 'two hundred, with the S' },
          { fr: 'deux cent cinquante', sub: 'duh sahⁿ saⁿ-KAHⁿT', en: 'two hundred fifty, without it' },
          { fr: 'trois cents', sub: 'trwah SAHⁿ', en: 'three hundred' },
          { fr: 'cinq cents', sub: 'saⁿk SAHⁿ', en: 'five hundred' },
        ],
      },
      {
        title: 'The mille family',
        cards: [
          { fr: 'mille', sub: 'MEEL', en: 'a thousand' },
          { fr: 'deux mille', sub: 'duh MEEL', en: 'two thousand' },
          { fr: 'dix mille', sub: 'dee MEEL', en: 'ten thousand' },
          { fr: 'cent mille', sub: 'sahⁿ MEEL', en: 'a hundred thousand' },
        ],
      },
      {
        title: 'The million family',
        cards: [
          { fr: 'un million', sub: 'uhⁿ mee-LYOHⁿ', en: 'a million' },
          { fr: 'un million d’habitants', sub: 'uhⁿ mee-LYOHⁿ da-bee-TAHⁿ', en: 'a million inhabitants, with the de' },
          { fr: 'deux millions', sub: 'duh meel-YOHⁿ', en: 'two million' },
          { fr: 'trois millions', sub: 'trwah meel-YOHⁿ', en: 'three million' },
          { fr: 'un milliard', sub: 'uhⁿ mee-LYAR', en: 'a billion' },
          { fr: 'deux milliards', sub: 'duh meel-YAR', en: 'two billion' },
        ],
      },
      {
        title: 'Prices and years',
        cards: [
          { fr: 'vingt-deux euros cinquante', sub: 'vaⁿt-deu-zeu-ro saⁿ-KAHⁿT', en: '22,50' },
          { fr: 'un euro vingt', sub: 'uhⁿ-neu-ro VAⁿ', en: '1,20' },
          { fr: 'un virgule vingt-cinq', sub: 'uhⁿ veer-GÜL vaⁿt-SAⁿK', en: '1,25 as a measurement' },
          { fr: 'mille neuf cent trente-huit', sub: 'meel neuf sahⁿ trahⁿt-WEET', en: '1938' },
          { fr: 'dix-neuf cent trente-huit', sub: 'deez-neuf sahⁿ trahⁿt-WEET', en: '1938, the other way' },
          { fr: 'deux mille vingt-six', sub: 'duh meel vaⁿt-SEES', en: '2026' },
        ],
      },
    ],
  },

  {
    type: 'flashcards',
    id: 's20-flash',
    title: 'Flip And Recall',
    frSub: 'Retournez la carte',
    render: 'deck',
    layer: 'core',
    say: 'English on the front. Say the French out loud, and spell it in your head, before you flip.',
    cards: [
      { front: 'a hundred', back: 'cent', say: 'cent' },
      { front: 'two hundred', back: 'deux cents', say: 'deux cents' },
      { front: 'two hundred fifty', back: 'deux cent cinquante', say: 'deux cent cinquante' },
      { front: 'three hundred', back: 'trois cents', say: 'trois cents' },
      { front: 'three hundred thirty', back: 'trois cent trente', say: 'trois cent trente' },
      { front: 'five hundred', back: 'cinq cents', say: 'cinq cents' },
      { front: 'a thousand', back: 'mille', say: 'mille' },
      { front: 'two thousand', back: 'deux mille', say: 'deux mille' },
      { front: 'ten thousand', back: 'dix mille', say: 'dix mille' },
      { front: 'eighty thousand', back: 'quatre-vingt mille', say: 'quatre-vingt mille' },
      { front: 'a hundred thousand', back: 'cent mille', say: 'cent mille' },
      { front: 'two hundred thousand', back: 'deux cent mille', say: 'deux cent mille' },
      { front: 'a million', back: 'un million', say: 'un million' },
      { front: 'a million inhabitants', back: 'un million d’habitants', say: 'un million d’habitants' },
      { front: 'eight million visitors', back: 'huit millions de visiteurs', say: 'huit millions de visiteurs' },
      { front: 'a billion', back: 'un milliard', say: 'un milliard' },
      { front: 'two billion bottles', back: 'deux milliards de bouteilles', say: 'deux milliards de bouteilles' },
      { front: '22,50', back: 'vingt-deux euros cinquante', say: 'vingt-deux euros cinquante' },
      { front: '124,80', back: 'cent vingt-quatre euros quatre-vingts', say: 'cent vingt-quatre euros quatre-vingts' },
      { front: '1938', back: 'mille neuf cent trente-huit', say: 'mille neuf cent trente-huit' },
      { front: '2010', back: 'deux mille dix', say: 'deux mille dix' },
    ],
  },

  {
    type: 'practice',
    id: 's21-speak',
    title: 'Say The Ladder Out Loud',
    frSub: 'Comptez à voix haute',
    layer: 'core',
    terms: ['multiplier'],
    audio: { mode: 'mic', lang: 'fr-FR' },
    say: 'From a hundred to two billion, one card at a time. The two at the end are the ones with a de in them, so say the whole phrase.',
    skill: 'speak',
    itemIds: SPEAK_IDS,
  },

  {
    type: 'dictation',
    id: 's22-dictation',
    title: 'Write What You Hear',
    frSub: 'La dictée',
    layer: 'core',
    terms: ['centS', 'invariable', 'nounNumber'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], maxPlays: 4, recordingId: 'rec-a1-28-dictee' },
    say: 'Five sentences, one for each claim this lesson makes. Build each from the word tiles, and some of the tiles do not belong in it.',
    itemIds: DICTATION_IDS,
  },

  {
    type: 'useCases',
    id: 's23-cases',
    title: 'Six You Will Meet This Month',
    frSub: 'Dans la vraie vie',
    layer: 'core',
    terms: ['bareCents', 'nounNumber'],
    say: 'Every one of these is said once, by somebody who is not going to repeat it, or printed on something you have four seconds to read.',
    cases: [
      { situation: 'Being told a rent', fr: 'Le loyer est de huit cent cinquante euros par mois.', en: 'The rent is eight hundred fifty euros a month.' },
      { situation: 'Being told a price', fr: 'Ça fait cent vingt-quatre euros quatre-vingts.', en: 'That comes to one hundred twenty-four euros eighty.' },
      { situation: 'Hearing a year', fr: 'L’immeuble date de mille neuf cent trente-huit.', en: 'The building dates from nineteen thirty-eight.' },
      { situation: 'Reading a population', fr: 'La ville compte trois cent mille habitants.', en: 'The town has three hundred thousand inhabitants.' },
      { situation: 'Hearing a figure on the news', fr: 'Le musée reçoit huit millions de visiteurs par an.', en: 'The museum gets eight million visitors a year.' },
      { situation: 'Checking a shelf label', fr: 'Deux euros cinquante le kilo.', en: 'Two euros fifty a kilo.' },
    ],
  },

  /* ── Act 6: prove it ──────────────────────────────────────────────────── */

  {
    type: 'scenario',
    id: 's24-scenario',
    title: 'Signing For The Flat',
    frSub: 'Le bail',
    layer: 'core',
    terms: ['centS', 'invariable'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a1-28-agency' },
    say: 'The exchange the opening scene went wrong in, and this time you have the pen and the rule.',
    setting: 'Back at the agency desk, with the form the right way round.',
    turns: [
      { ai: 'Alors, le loyer est de huit cent cinquante euros par mois.', en: 'So, the rent is eight hundred fifty euros a month.', user: 'Huit cent cinquante euros. D’accord.' },
      { ai: 'Et le dépôt de garantie, deux mille cinq cents euros.', en: 'And the deposit, two thousand five hundred euros.', user: 'Deux mille cinq cents. Je l’écris en toutes lettres ?' },
      { ai: 'Oui, s’il vous plaît. Et les charges, cent vingt euros.', en: 'Yes, please. And the charges, one hundred twenty euros.', user: 'Cent vingt euros de charges. C’est noté.' },
      { ai: 'L’immeuble date de mille neuf cent trente-huit.', en: 'The building dates from nineteen thirty-eight.', user: 'Mille neuf cent trente-huit. Il est beau.' },
      { ai: 'Parfait. Les clés sont à vous.', en: 'Perfect. The keys are yours.', user: 'Merci beaucoup. À bientôt.' },
    ],
  },

  {
    type: 'reading',
    id: 's25-reading',
    title: 'At The Ticket Desk',
    frSub: 'À la billetterie',
    layer: 'core',
    terms: ['nounNumber', 'bareCents'],
    // REQUIRED for the glossary to exist at all. MissionSection routes a reading
    // section to ReadingMission (and so to PassagePage, which draws the
    // underlines and the tap-for-translation sheet) only when this flag is set
    // WITH questions. Without it the section takes the fallback path, and
    // MissionRich contains no reference to `glossary`.
    questionsInModal: true,
    say: 'Read it once for the shape. Tap any word you do not know.',
    // Paul's A1 rule, set on a1.01's passage: if a line does not open with «, it
    // is in English. Stage directions are context, and context is instruction.
    text:
      'It is a Tuesday in October and Marc is buying tickets at a museum in Paris.\n\n' +
      '« Bonjour. Deux billets, s’il vous plaît. »\n' +
      '« Bonjour. Ça fait trente-quatre euros cinquante. »\n' +
      '« Trente-quatre euros cinquante. Vous prenez la carte ? »\n' +
      '« Bien sûr. Le musée reçoit huit millions de visiteurs par an. »\n\n' +
      'Marc pays and looks at the leaflet she gives him.\n\n' +
      '« Le bâtiment date de mille cinq cent quarante-six ? »\n' +
      '« Oui. Et la pyramide, de mille neuf cent quatre-vingt-neuf. »\n' +
      '« Mille neuf cent quatre-vingt-neuf. Merci beaucoup. »',
    // Every entry is matched by gloss.logic.ts, which folds punctuation and case
    // on BOTH sides and allows a phrase of up to four words. A phrase entry wins
    // over a bare word inside it.
    glossary: [
      { word: 'billets', en: 'tickets', note: 'Also a banknote: un billet de cinquante euros is a fifty-euro note.' },
      { word: 'Ça fait', en: 'that comes to', note: 'The standard way a total is announced at any counter in France.' },
      { word: 'la carte', en: 'the card', note: 'A bank card. Vous prenez la carte is the question you will ask most often.' },
      { word: 'date de', en: 'dates from', note: 'Followed by a year, said in either of the two forms this lesson teaches.' },
      { word: 'la pyramide', en: 'the pyramid', note: 'The glass entrance in the courtyard, opened in nineteen eighty-nine.' },
    ],
    questions: [
      { q: 'What do the two tickets cost?', a: 'Thirty-four euros fifty, written 34,50.' },
      { q: 'How many visitors does the museum get in a year?', a: 'Eight million, and the sentence needs de after millions to say so.' },
      { q: 'In which year was the pyramid built?', a: 'Nineteen eighty-nine, said as mille neuf cent quatre-vingt-neuf.' },
    ],
  },

  {
    type: 'reviewDeck',
    id: 's26-review',
    title: 'The Whole Thing, One Deck',
    frSub: 'Révision',
    render: 'deck',
    layer: 'core',
    terms: ['centS', 'invariable', 'nounNumber'],
    say: 'Rate each card as again, hard or easy. The ones you mark again come back.',
    cards: [
      { front: 'When does cent take an S?', back: 'Only when a number multiplies it and nothing follows: deux cents.', say: 'deux cents' },
      { front: 'When does mille take an S?', back: 'Never, in any position, in any quantity.', say: 'deux mille' },
      { front: 'What does million need that cent does not?', back: 'de, before what it counts: huit millions de visiteurs.', say: 'huit millions de visiteurs' },
      { front: 'Two hundred fifty', back: 'deux cent cinquante. No S, because cinquante follows.', say: 'deux cent cinquante' },
      { front: 'A hundred thousand', back: 'cent mille. No S on either word.', say: 'cent mille' },
      { front: 'Two billion bottles', back: 'deux milliards de bouteilles. An S and a de, like any noun.', say: 'deux milliards de bouteilles' },
      { front: '22,50 said aloud', back: 'vingt-deux euros cinquante. No word for the cents.', say: 'vingt-deux euros cinquante' },
      { front: '1,25 on a label', back: 'One and a quarter. The comma is the decimal point.', say: 'un virgule vingt-cinq' },
      { front: '1938', back: 'mille neuf cent trente-huit, or dix-neuf cent trente-huit.', say: 'mille neuf cent trente-huit' },
      { front: '2010', back: 'deux mille dix. After 2000 there is only one form.', say: 'deux mille dix' },
    ],
  },

  {
    type: 'progressCheck',
    id: 's27-progress',
    title: 'Where You Stand',
    frSub: 'Votre progression',
    say: 'One screen before the exam, so you know what you are walking into.',
    // The prose deliberately carries no figures. Every number this card states
    // is a fact about the array above it, and a display string is validated
    // against nothing, so a hand-typed count would have been left confidently
    // wrong by the first mission added with the whole suite still green.
    body: 'You have said every multiplier out loud, read five quantities that climb by a factor of ten, and written the three rules that only exist on paper. What is left tells you whether it stuck. Each round is tied to one of the mistakes this lesson exists to stop, and failing a round gets you its drill before the next one starts.',
    // Filled immediately after SECTIONS is built, from the journey itself.
    stats: [],
  },

  {
    type: 'quiz',
    id: 's28-quiz',
    title: 'The Exam',
    frSub: 'L’examen',
    layer: 'core',
    passMark: 70,
    roundFailThreshold: 60,
    say: 'Four rounds, one per rule and one for where they get used. Miss too many in a round and you get its drill before the next one starts.',
    rounds: [
      {
        id: 'r1-cent',
        label: 'The S on cent',
        // err-cent-s first, so a learner failing this round gets the sorting
        // drill rather than the mille one: drillForRound fires the drill of the
        // FIRST target and stops.
        targets: ['err-cent-s', 'err-mille-s'],
        say: 'One letter, three situations, and no sound at all.',
        questions: [
          {
            q: 'Which of these carries the S?',
            format: 'mcq',
            opts: ['cent mille', 'deux cents', 'trois cent trente', 'deux cent cinquante'],
            correct: 1,
            why: 'deux cents is multiplied by deux and nothing follows it, which is the only situation the S survives. The other three each fail one half of that.',
            ref: 's04-cent',
          },
          {
            q: 'Someone has written five hundred as « cinq cent ». Write it properly.',
            format: 'errorSpot',
            accept: ['cinq cents'],
            answer: 'cinq cents',
            why: 'cinq multiplies cent and nothing comes after it, so the S belongs. Add anything at all behind it, as in cinq cent un, and it goes again.',
            ref: 's04-cent',
          },
          {
            q: 'Three hundred thirty is written:',
            format: 'mcq',
            opts: ['trois cents trente', 'trois-cent-trente', 'trois cent trente', 'trois cents trentes'],
            correct: 2,
            why: 'trente follows cent, so there is no S, and French numbers below a hundred take hyphens while the multipliers above them do not.',
            ref: 's05-centcases',
          },
          {
            q: 'Listen. Which did you hear?',
            format: 'listenChoose',
            audio: { mode: 'tts', lang: 'fr-FR', clip: 'deux cents habitants' },
            opts: ['deux cents habitants', 'deux cent mille habitants', 'deux millions d’habitants', 'deux cent un habitants'],
            correct: 0,
            why: 'Two hundred, with the S nobody can hear. The other three are the same opening followed by another word, and each of them is a different order of magnitude.',
            ref: 's06-centhear',
          },
          {
            q: 'Write two hundred fifty in French.',
            format: 'typeIn',
            accept: ['deux cent cinquante'],
            answer: 'deux cent cinquante',
            why: 'No S, because cinquante follows cent. This is the form the corpus had no card for until this lesson, and the one people write with an S.',
            ref: 's04-cent',
          },
          {
            q: 'cent mille has no S on cent. Why?',
            format: 'mcq',
            opts: ['a number follows it', 'it is a noun', 'mille never takes one', 'nothing multiplies it'],
            correct: 3,
            why: 'There is no number in front of cent here, so it was never made plural and had no S to lose. cent is multiplying mille rather than being multiplied.',
            ref: 's05-centcases',
          },
          {
            q: 'Someone has written a hundred fifty euros as « cents cinquante euros ». Write it properly.',
            format: 'errorSpot',
            accept: ['cent cinquante euros'],
            answer: 'cent cinquante euros',
            why: 'Nothing multiplies cent here, so there is no S even before you notice that cinquante follows it. Both halves of the rule refuse it.',
            ref: 's05-centcases',
          },
        ],
      },
      {
        id: 'r2-mille',
        label: 'Mille, which never moves',
        targets: ['err-mille-s', 'err-cent-s'],
        say: 'The shortest rule here, and the one you are most likely to break.',
        questions: [
          {
            q: 'In how many situations does mille take an S?',
            format: 'mcq',
            opts: ['when it is multiplied', 'never', 'when nothing follows it', 'in years only'],
            correct: 1,
            why: 'None at all. mille has no plural form, which makes it the one thing in this lesson that has to be memorised rather than worked out.',
            ref: 's07-mille',
          },
          {
            q: 'Someone has written ten thousand as « dix milles ». Write it properly.',
            format: 'errorSpot',
            accept: ['dix mille'],
            answer: 'dix mille',
            why: 'The S came across from cents, which is where it belongs and the only place it does. dix mille is spelled this way whatever comes before or after it.',
            ref: 's07-mille',
          },
          {
            q: 'Write the year 1840 out in words, the form that works for any century.',
            format: 'typeIn',
            accept: ['mille huit cent quarante'],
            answer: 'mille huit cent quarante',
            why: 'mille takes no S and cent loses its own because quarante follows. dix-huit cent quarante is also correct, and the mille form is the one that never lets you down.',
            ref: 's18-years',
          },
          {
            q: 'Listen. How many spectators?',
            format: 'listenChoose',
            audio: { mode: 'tts', lang: 'fr-FR', clip: 'quatre-vingt mille spectateurs' },
            opts: ['quatre-vingt mille spectateurs', 'quatre-vingts spectateurs', 'quatre-vingt-dix spectateurs', 'quatre cents spectateurs'],
            correct: 0,
            why: 'Eighty thousand. Without mille the same opening is eighty, and the syllable that separates them is the only thing standing between the two figures.',
            ref: 's09-millehear',
          },
          {
            q: 'quatre-vingt mille has no S on quatre-vingt. Why?',
            format: 'mcq',
            opts: ['mille never takes one', 'it is not multiplied', 'a number follows it', 'eighty never takes one'],
            correct: 2,
            why: 'mille is a number and it follows quatre-vingt, which takes the S off exactly as un does in quatre-vingt-un. That is a1.27 rule meeting this one on a single line.',
            ref: 's08-milletable',
          },
          {
            q: 'As a quantity, 1 999 is written:',
            format: 'mcq',
            opts: ['mille neuf cent quatre-vingt-dix-neuf', 'mille neuf cents quatre-vingt-dix-neuf', 'dix-neuf cent quatre-vingt-dix-neuf', 'mille neuf cent quatre-vingts-dix-neuf'],
            correct: 0,
            why: 'mille bare, cent with no S because a number follows, and quatre-vingt with none for the same reason. The dix-neuf cent form exists but it is for years, not quantities.',
            ref: 's08-milletable',
          },
          {
            q: 'Say it out loud: two hundred fifty thousand.',
            format: 'speak',
            target: 'deux cent cinquante mille',
            ipa: '/dø sɑ̃ sɛ̃.kɑ̃t mil/',
            why: 'Four words with no S anywhere in them, because a number follows cent and mille never carries one. Said as one run, the way a figure is given.',
            ref: 's21-speak',
          },
        ],
      },
      {
        id: 'r3-million',
        label: 'Million, and the word after it',
        targets: ['err-million-de', 'err-mille-s'],
        say: 'One word class, two habits, and both of them are visible.',
        questions: [
          {
            q: 'Eight million visitors is:',
            format: 'mcq',
            opts: ['huit millions visiteurs', 'huit million de visiteurs', 'huit millions de visiteurs', 'huit millions des visiteurs'],
            correct: 2,
            why: 'The S because millions is a plural noun, and de because a noun cannot touch what it counts. des would make it some of the visitors rather than that many.',
            ref: 's10-million',
          },
          {
            q: 'Someone has written « trois millions utilisateurs ». Write it properly.',
            format: 'errorSpot',
            accept: ['trois millions d’utilisateurs', "trois millions d'utilisateurs"],
            answer: 'trois millions d’utilisateurs',
            why: 'The de is missing, and in front of the vowel of utilisateurs it elides to d’. This is the one mistake in the lesson a French listener actually hears.',
            ref: 's10-million',
          },
          {
            q: 'Why does deux cents habitants have no de in it?',
            format: 'mcq',
            opts: ['cent is a noun', 'cent is an adjective', 'habitants is plural', 'de is optional after numbers'],
            correct: 1,
            why: 'An adjective attaches straight to its noun and needs nothing in between. Only million and milliard, which are nouns, have to reach across a de.',
            ref: 's03-three',
          },
          {
            q: 'Write two billion in French.',
            format: 'typeIn',
            accept: ['deux milliards'],
            answer: 'deux milliards',
            why: 'milliard is a noun, so the plural S is unconditional: it does not wait for the word to be final the way cent does. A French milliard is the English billion.',
            ref: 's12-scale',
          },
          {
            q: 'Listen. How many bottles?',
            format: 'listenChoose',
            audio: { mode: 'tts', lang: 'fr-FR', clip: 'deux milliards de bouteilles' },
            opts: ['deux mille bouteilles', 'deux millions de bouteilles', 'deux cents bouteilles', 'deux milliards de bouteilles'],
            correct: 3,
            why: 'Two billion. million and milliard open on the same two syllables and separate only at the end, which is a thousandfold difference decided by one sound.',
            ref: 's11-quantities',
          },
          {
            q: 'A French milliard is:',
            format: 'mcq',
            opts: ['a million', 'a million million', 'a hundred thousand', 'a thousand million'],
            correct: 3,
            why: 'A thousand million, which is what English calls a billion. The French word billion means a thousand times more again and is almost never the one you want.',
            ref: 's12-scale',
          },
          {
            q: 'Which two words attach straight to what they count, with nothing in between?',
            format: 'mcq',
            opts: ['cent and million', 'mille and million', 'cent and mille', 'million and milliard'],
            correct: 2,
            why: `${REFRAME} That is the whole prediction: two of them behave like adjectives and need no de, and the third behaves like a thing and does.`,
            ref: 's03-three',
          },
        ],
      },
      {
        id: 'r4-surfaces',
        label: 'Prices, years and the page',
        // err-price-split first: a learner failing this round is failing to
        // read or hear a figure, not failing to spell one.
        targets: ['err-price-split', 'err-million-de'],
        say: 'Where all of this actually happens, which is a counter and a shelf.',
        questions: [
          {
            q: 'The label says 1,25 €. That is:',
            format: 'mcq',
            opts: ['a hundred twenty-five euros', 'one euro twenty-five', 'one thousand two hundred fifty euros', 'twelve euros fifty'],
            correct: 1,
            why: 'The comma is the decimal point in France and the space is the thousands mark. Read the other way round, a bargain looks like a mistake.',
            ref: 's17-written',
          },
          {
            q: 'Listen. What does the ticket cost?',
            format: 'listenChoose',
            audio: { mode: 'tts', lang: 'fr-FR', clip: 'cent vingt-quatre euros quatre-vingts' },
            opts: ['124,00', '184,80', '124,80', '12 480'],
            correct: 2,
            why: 'The bare number after euros is the cents. There is no word marking the boundary, so the word euros itself is the only signal that the second half has started.',
            ref: 's16-pricehear',
          },
          {
            q: '« vingt-deux euros cinquante » means:',
            format: 'mcq',
            opts: ['22,50', '2 250', '22 euros and 50 euros', '22,05'],
            correct: 0,
            why: 'Twenty-two euros and fifty cents, said with no word for the cents and no et. A speaker expecting either is still waiting when the price is over.',
            ref: 's15-prices',
          },
          {
            q: 'Someone wrote « sept euros et cinquante centimes ». Write it the way it is actually said.',
            format: 'errorSpot',
            accept: ['sept euros cinquante'],
            answer: 'sept euros cinquante',
            why: 'Understandable and not what anybody says. The currency is named once and the cents follow it as a bare number, which is what makes a price one run rather than two.',
            ref: 's15-prices',
          },
          {
            q: '2010 said aloud is:',
            format: 'mcq',
            opts: ['vingt cent dix', 'vingt-dix', 'deux mille et dix', 'deux mille dix'],
            correct: 3,
            why: 'From 2000 there is one form and it is built on deux mille. There is no vingt cent, and no et in any number above a hundred.',
            ref: 's18-years',
          },
          {
            q: 'Write the price 124,80 the way it is said, in words.',
            format: 'typeIn',
            accept: ['cent vingt-quatre euros quatre-vingts'],
            answer: 'cent vingt-quatre euros quatre-vingts',
            why: 'cent with no S because a number follows, then the cents as a bare number, and quatre-vingts keeps its own S because nothing comes after it.',
            ref: 's15-prices',
          },
          {
            q: 'Say the price out loud: 124,80 euros.',
            format: 'speak',
            target: 'cent vingt-quatre euros quatre-vingts',
            ipa: '/sɑ̃ vɛ̃t.katʁ ø.ʁo ka.tʁə.vɛ̃/',
            why: 'One run at one speed, with no pause where the comma is. A pause in the middle is the sound of somebody reading the label rather than saying the price.',
            ref: 's21-speak',
          },
        ],
      },
    ],
  },

  {
    type: 'roundup',
    id: 's29-roundup',
    title: 'What You Can Do Now',
    frSub: 'Ce que vous savez faire',
    terms: ['multiplier', 'decimalComma'],
    say: 'Eight things you did not have this morning, and one of them is a comma.',
    body: 'You can say any number in French up to a billion, which sounds larger than it is: the numbers were never the difficulty. What you actually have is the three spelling rules that separate a form filled in correctly from one that has to be done again, and a way of reading a price tag that does not put the decimal point in the wrong place.',
    points: [
      `${REFRAME} An adjective attaches to what it counts and a noun reaches it through de.`,
      'cent takes an S only when a number multiplies it and nothing follows: deux cents, but deux cent cinquante and cent mille.',
      'mille never takes an S, in any position, in any quantity. This is the one to memorise outright.',
      'million and milliard are nouns: an S in every plural, and de before what they count. huit millions de visiteurs, and d’ before a vowel.',
      'A price names the currency and then says the cents as a bare number: vingt-deux euros cinquante is 22,50.',
      'French writes a space for thousands and a comma for the decimal, so 1 234,56 and never 1,234.56.',
      'Years before 2000 have two spoken forms, mille neuf cent and dix-neuf cent. From 2000 there is only deux mille.',
      'A French milliard is the English billion. The French word billion is a thousand times larger and rarely what you want.',
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
  const ix = SECTIONS.findIndex((s) => (s as { id?: string }).id === 's27-progress');
  const card = SECTIONS[ix];
  const quiz = SECTIONS.find((s) => s.type === 'quiz');
  if (!card || card.type !== 'progressCheck' || !quiz || quiz.type !== 'quiz') {
    throw new Error('a1.28.l1: the progress card or the quiz is missing, so the card cannot count what is not there');
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
 * Six acts, and the shape of them is the argument of the lesson: one act per
 * multiplier rule, because the three rules are the difficulty, and then two
 * acts on the surfaces where they get used.
 *
 * Act 5 is long at nine missions, deliberately. It teaches one new thing (the
 * written conventions) and otherwise puts the three rules on the three surfaces
 * the canDo names, out loud and in writing. Splitting it would put a checkpoint
 * in the middle of a single continuous idea. Three rest points carry it.
 *
 * `estScreens` is what the mission actually costs, not a guess rounded to a
 * nice number, because it is divided by the rest points to check that no
 * stretch runs past the checkpoint-spacing limit of 22. A flattering estimate
 * buys a lesson that passes the validator and exhausts the learner.            */

const ACTS: LessonAct[] = [
  {
    id: 'act1',
    title: 'The amount in words',
    sections: ['s01-scene', 's02-goals', 's03-three'],
    milestone: 'You have seen the difference that does not make a sound.',
    estScreens: 16,
    restPoints: ['s01-scene/after-break'],
  },
  {
    id: 'act2',
    title: 'cent, and the S that comes and goes',
    sections: ['s04-cent', 's05-centcases', 's06-centhear'],
    milestone: 'Three situations, one letter, and you can tell them apart on paper.',
    estScreens: 16,
  },
  {
    id: 'act3',
    title: 'mille, which never moves',
    sections: ['s07-mille', 's08-milletable', 's09-millehear'],
    milestone: 'The shortest rule in the lesson, and the one you will not now break.',
    estScreens: 17,
  },
  {
    id: 'act4',
    title: 'million, and the word after it',
    sections: ['s10-million', 's11-quantities', 's12-scale', 's13-scalehear', 's14-traps'],
    milestone: 'All three rules, and the whole ladder from a hundred to a billion.',
    estScreens: 33,
    restPoints: ['s12-scale/halfway'],
  },
  {
    id: 'act5',
    title: 'Prices, years, and out loud',
    sections: ['s15-prices', 's16-pricehear', 's17-written', 's18-years', 's19-words', 's20-flash', 's21-speak', 's22-dictation', 's23-cases'],
    milestone: 'You have read a price tag, said a year, and spelled all three rules by ear.',
    estScreens: 76,
    restPoints: ['s17-written/halfway', 's19-words/halfway', 's21-speak/halfway'],
  },
  {
    id: 'act6',
    title: 'Prove it',
    sections: ['s24-scenario', 's25-reading', 's26-review', 's27-progress', 's28-quiz', 's29-roundup'],
    milestone: 'Lesson complete.',
    estScreens: 55,
    restPoints: ['s26-review/halfway', 's28-quiz/after-r2'],
  },
];

/* ─── Deck tranches ────────────────────────────────────────────────────────
 *
 * One slice per act, index-aligned. An item is released the act it is TAUGHT,
 * not the act it is first mentioned.
 *
 * Act 1 releases nothing: the scene teaches an IDEA, and the two spellings it
 * shows are taught properly in the two acts that follow. `cent` standing alone
 * is released by nobody here, because a1.27 already released it and handing a
 * learner a week-old card as if it were new is worse than not handing it over.
 * Act 6 releases nothing because it tests.                                     */

const DECK_TRANCHE: string[][] = [
  [],
  [...CENT_IDS],
  [...MILLE_IDS],
  [...MILLION_IDS, ...QUANTITY_IDS],
  DICTATION_IDS.filter((id) => !QUANTITY_IDS.includes(id)),
  [],
];

/* ─── Error triggers and their drills ──────────────────────────────────────
 *
 * A trigger names a mistake, the places it is watched for, the drill that fires
 * when it trips, and the check that closes the loop. Each round's `targets`
 * points at these ids, and drillForRound fires the drill of the FIRST target
 * only, so the order inside `targets` matters. The four rounds name four
 * different triggers first, which is what keeps all four drills reachable.     */

const ERROR_TRIGGERS: ErrorTrigger[] = [
  {
    id: 'err-cent-s',
    description: 'Keeps the S on cent when a number follows it, or drops it when nothing does, or adds one to a cent that was never multiplied.',
    detectOn: ['s04-cent', 's05-centcases', 's28-quiz/r1-cent'],
    drill: 'drill-cent-s',
    retest: 'retest-cent-s',
  },
  {
    id: 'err-mille-s',
    description: 'Writes mille with an S, carrying the plural across from cents. The corpus contains no example of this, so the lesson has to stage it.',
    detectOn: ['s01-scene', 's07-mille', 's14-traps', 's28-quiz/r2-mille'],
    drill: 'drill-mille',
    retest: 'retest-mille',
  },
  {
    id: 'err-million-de',
    description: 'Drops the de after million or milliard, or leaves the plural S off it, treating a noun as if it were a number-adjective.',
    detectOn: ['s10-million', 's11-quantities', 's28-quiz/r3-million'],
    drill: 'drill-million',
    retest: 'retest-million',
  },
  {
    id: 'err-price-split',
    description: 'Hears a price as two separate numbers, or reads a written decimal comma as a thousands separator and gets the size wrong by a factor of a hundred.',
    detectOn: ['s15-prices', 's16-pricehear', 's17-written', 's28-quiz/r4-surfaces'],
    drill: 'drill-price',
    retest: 'retest-price',
  },
];

const DRILLS: LessonDrill[] = [
  {
    id: 'drill-cent-s',
    title: 'With the S, or without',
    format: 'sort',
    buckets: ['cents', 'cent'],
    // Item ids, not display strings: a drill scores against the corpus, so it
    // plays the same audio and reads the same spelling as every other card
    // teaching these. Display strings here validate as broken ids.
    items: [...CENT_IDS, MILLE_IDS[3]],
    coach: 'The S survives only when a number multiplies cent AND nothing follows it. Both halves, every time.',
  },
  {
    id: 'retest-cent-s',
    title: 'One more time',
    format: 'mcq',
    q: 'Which of these carries the S?',
    opts: ['deux cent cinquante', 'deux cents', 'cent mille'],
    correct: 1,
    why: 'Only deux cents. The first has cinquante behind it and the third has no number in front of cent at all.',
  },
  {
    id: 'drill-mille',
    title: 'mille, in every position',
    format: 'flashcard',
    coach: 'Read the left, say and spell the right. Look at the middle word every time and notice that it never changes.',
    pairs: [
      ['1 000', 'mille'],
      ['2 000', 'deux mille'],
      ['10 000', 'dix mille'],
      ['80 000', 'quatre-vingt mille'],
      ['100 000', 'cent mille'],
      ['1840', 'mille huit cent quarante'],
    ],
  },
  {
    id: 'retest-mille',
    title: 'One more time',
    format: 'mcq',
    q: 'Ten thousand is:',
    opts: ['dix milles', 'dix mille', 'dix-mille'],
    correct: 1,
    why: 'mille has no plural form at all. The S you are reaching for belongs to cent, and to nothing else in this lesson.',
  },
  {
    id: 'drill-million',
    title: 'What comes after the number',
    format: 'sort',
    buckets: ['Needs de', 'Needs nothing'],
    items: [...MILLION_IDS, ...CENT_IDS.slice(0, 3)],
    coach: 'million and milliard are nouns, so they reach what they count through de. cent and mille sit straight against it.',
  },
  {
    id: 'retest-million',
    title: 'One more time',
    format: 'mcq',
    q: 'Eight million visitors is:',
    opts: ['huit millions visiteurs', 'huit millions de visiteurs', 'huit million de visiteurs'],
    correct: 1,
    why: 'The S because it is plural, and the de because a noun cannot touch what it counts. Both, or the sentence is wrong.',
  },
  {
    id: 'drill-price',
    title: 'Written, and said',
    format: 'flashcard',
    coach: 'Read the figure on the left, say the price on the right. The comma is never spoken and the space is never a decimal point.',
    pairs: [
      ['22,50 €', 'vingt-deux euros cinquante'],
      ['1,20 €', 'un euro vingt'],
      ['7,50 €', 'sept euros cinquante'],
      ['124,80 €', 'cent vingt-quatre euros quatre-vingts'],
      ['650 €', 'six cent cinquante euros'],
      ['2 500 €', 'deux mille cinq cents euros'],
    ],
  },
  {
    id: 'retest-price',
    title: 'One more time',
    format: 'mcq',
    q: 'A shelf label reads 2,50 €. What does it cost?',
    opts: ['two hundred fifty euros', 'two euros fifty', 'twenty-five euros'],
    correct: 1,
    why: 'The comma is the decimal point in France. Read as a thousands mark it turns a two-euro item into a two-hundred-euro one.',
  },
];

/* ─── Reference sheets ─────────────────────────────────────────────────────
 *
 * The material a learner wants AFTER the lesson, not during it. Kept out of the
 * flow so a mission stays one idea, and reachable from the sections that
 * preview it via `sheetId`. Layer 'deep' exempts these from the core density
 * caps, which is the point: a sheet is allowed to be dense, and a table in a
 * core section fails the validator by design.
 *
 * The written conventions get their own sheet rather than a mission because
 * they are LOOKUP knowledge. There is nothing to drill in "the comma is the
 * decimal point": a learner meets it, files it, and comes back to it the first
 * time a price tag surprises them. Giving it a mission would have made it a
 * thing to practise, which it is not.                                          */

const SHEETS: ReferenceSheet[] = [
  {
    id: 'sheet.a1.28.rules',
    title: 'The three rules, on one screen',
    layer: 'deep',
    contains: ['Every case of the S on cent', 'Why mille never takes one', 'The de after million'],
    sections: [
      {
        type: 'table',
        id: 'sheet-rules-table',
        title: 'Every case, side by side',
        layer: 'deep',
        cols: ['Written', 'Value', 'Why it is spelled that way'],
        rows: [
          ['cent', '100', 'Nothing multiplies it, so no S.'],
          ['cent un', '101', 'Nothing multiplies it, and un follows. No S twice over.'],
          ['deux cents', '200', 'Multiplied, and nothing follows. The S.'],
          ['deux cent cinquante', '250', 'Multiplied, but cinquante follows. No S.'],
          ['trois cent trente', '330', 'Multiplied, but trente follows. No S.'],
          ['cinq cents', '500', 'Multiplied, nothing follows. The S.'],
          ['mille', '1 000', 'mille never takes an S.'],
          ['deux mille', '2 000', 'Multiplied, and still no S. There is no case where it has one.'],
          ['quatre-vingt mille', '80 000', 'mille takes the S off quatre-vingts and adds none itself.'],
          ['cent mille', '100 000', 'cent is the multiplier here, not the multiplied. No S.'],
          ['deux cent mille', '200 000', 'cent is multiplied but mille follows it. No S.'],
          ['un million d’habitants', '1 000 000', 'A noun, so it reaches its noun through de, elided to d’.'],
          ['huit millions de visiteurs', '8 000 000', 'A plural noun: the S is unconditional and the de is required.'],
          ['deux milliards de bouteilles', '2 000 000 000', 'milliard is a noun too, with exactly the same two habits.'],
        ],
      },
      {
        type: 'teach',
        id: 'sheet-rules-note',
        title: 'What to do with this',
        layer: 'deep',
        body: 'Read the third column down the page once, then cover it and work down the first. Two of the fourteen rows carry an S on cent and both of them end on cent, which is the whole rule in a sentence: the S needs a number in front and nothing behind. Not one row carries an S on mille, and every million and milliard row carries both an S and a de. If you remember only one thing from this sheet, make it that mille is invariable, because it is the rule with no logic underneath it and the only one you cannot reconstruct from the reframe.',
      },
    ],
  },
  {
    id: 'sheet.a1.28.written',
    title: 'What the page says and the voice does not',
    layer: 'deep',
    contains: ['The comma and the space', 'How to read a price', 'Both forms of a year'],
    // `teach` blocks and one short `table`, and NOT a `cheatSheet`.
    //
    // FOUND ON A DEVICE, 2026-08-05. This sheet shipped as a ten-row
    // `cheatSheet` and drew its section title and nothing else: all ten rows
    // were invisible. SheetSection in components/ReferenceSheet.tsx switches on
    // exactly three section types (`teach`, `letterGrid`, `table`) and its
    // `default:` branch renders the title alone, deliberately, so a
    // mis-authored sheet is visibly thin rather than absent. `cheatSheet` is a
    // real section type that renders perfectly well in the FLOW, which is what
    // made this easy to author and impossible to notice: schema-valid,
    // test-passing, and rendered by nothing.
    //
    // This is the failure class the brief names, in the surface it warns about.
    // a1-28-grands-nombres.test.ts now reads the component source and fails any
    // sheet section whose type SheetSection does not handle, so the next author
    // gets a red test instead of a blank screen.
    //
    // Fixed in the CONTENT rather than by teaching SheetSection a fourth type.
    // Prose is what this sheet holds, `teach` is the type for prose, and the
    // table shape would have been worse: SheetTable lays its columns out inside
    // a horizontal scroller, so a prose column has to be dragged sideways line
    // by line. The short figure table below is the one part that suits it.
    sections: [
      {
        type: 'table',
        id: 'sheet-written-figures',
        title: 'What the figure says',
        layer: 'deep',
        cols: ['Written', 'It means', 'Never means'],
        rows: [
          ['1 234', '1234', '1.234'],
          ['1,25', '1.25', '125'],
          ['2,50 €', '2.50 euros', '250 euros'],
          ['124,80 €', '124.80 euros', '12 480 euros'],
          ['1 234,56 €', '1234.56 euros', '123 456 euros'],
        ],
      },
      {
        type: 'teach',
        id: 'sheet-written-marks',
        title: 'The comma and the space',
        layer: 'deep',
        body: 'French writes the decimal point as a COMMA and separates thousands with a space, often a narrow gap. English does exactly the reverse, so the same figure is 1 234,56 in France and 1,234.56 at home. That gap is never a typing error, and that comma is never a thousands mark. Reading it the English way moves the size by a factor of a hundred or a thousand, in the direction that makes a cheap thing look expensive and an expensive thing look like a bargain. It is the one convention on this sheet that costs real money, and there is nothing to practise: check the comma before you check the digits.',
      },
      {
        type: 'teach',
        id: 'sheet-written-price',
        title: 'Saying a price',
        layer: 'deep',
        body: '124,80 € is said cent vingt-quatre euros quatre-vingts. The comma has no spoken form at all in a price: the currency is named once and the cents follow it as a bare number, with no word between them and no et. The word centimes does exist and is used on official documents and almost nowhere else, so nobody at a till will say it and you never need to. The euro sign goes AFTER the figure with a space in front of it, as in 12,50 €. In front of the figure is the English habit.',
      },
      {
        type: 'teach',
        id: 'sheet-written-measure',
        title: 'Saying a measurement',
        layer: 'deep',
        body: 'Outside a price the comma IS said, and the word for it is virgule. 1,25 litre is un virgule vingt-cinq litre, and 1,25 % is un virgule vingt-cinq pour cent. So the same written mark is silent on a price tag and spoken on a fuel pump, a set of scales or a weather forecast. If what follows the figure is money, say nothing; if it is a unit, say virgule.',
      },
      {
        type: 'teach',
        id: 'sheet-written-years',
        title: 'Both forms of a year',
        layer: 'deep',
        body: 'Any year before 2000 has two spoken forms and both are correct: mille neuf cent quatre-vingt-quinze, or dix-neuf cent quatre-vingt-quinze. The mille form works for every century and is the one to reach for when you are not sure; the century form is what most people say for the twentieth. From 2000 the second form stops existing and there is only deux mille sept, deux mille dix, deux mille vingt-six. There is no vingt cent and nobody has ever said one. On a contract or a cheque you will also see years spelled mil neuf cent, with one L. It is an old legal convention, it is not wrong, and that is the only place you will meet it.',
      },
    ],
  },
];

export const NOMBRES_LARGE_LESSON: Lesson = {
  id: 'a1.28.l1',
  unitId: 'a1.28',
  seq: 1,
  title: 'Les grands nombres',
  level: 'a1',
  // The POSITION, not the unit id. a1.28 sits at seq 4 in the A1 track, and the
  // Den, the unit page and the mission list all number it from where it sits
  // (commit 56c79a7, "number a lesson by where it sits, not by what its id
  // says"). `tag` is the one place that number is authored rather than derived,
  // so a tag of 28 would put "LEÇON 04" on the unit page and "LEÇON 28" in the
  // header of every mission inside it. That shipped on a1.27 and was caught on a
  // device rather than by a test.
  tag: 'A1 · LEÇON 04',
  intro:
    'Three words scale every number in French, and all three behave differently. cent takes an S in one position and loses it in the next, mille takes one nowhere, and million takes one everywhere and needs a de as well. None of it is audible, and all of it is on the form.',

  sections: SECTIONS,
  itemIds: ITEM_IDS,
  // v1 was the first authored version, applied 2026-08-05. v2 fixes the roundup:
  // v1's `de` line named the rule ("de before what they count") without ever
  // showing the form, so the one takeaway a learner screenshots described the
  // most-dropped rule in the lesson and did not demonstrate it. Caught by this
  // lesson's own test, which requires each of the three rules to appear in the
  // roundup as a real form rather than as a description of one.
  //
  // The counter moves forward rather than being corrected in place, because a
  // rebuild that reuses its own number reads as a rollback in the merge log and
  // in every OTA snapshot after it.
  //
  // v3 and v4 are the device pass, on a Pixel 6 on 2026-08-05: the scene's
  // break card overflowed, slicing the last line of the coach and pushing its
  // Continue button off the bottom of the screen. v3 stopped the slicing and
  // left the button on the fold; v4 took the heading to one line and cleared
  // it. Two versions rather than one because the second was measured, not
  // guessed. See the note on the break beat.
  //
  // v5 and v6 are the same device pass: the years table split
  // `quatre-vingt-dix-neuf` mid-word in its narrowest column. v5 swapped the
  // row for 1968 and `soixante-huit` broke too; v6 measured the column at
  // roughly twelve characters and used 1915. See the note on that row, and the
  // test that now pins the ceiling.
  //
  // v7 is the same device pass and the worst of the three: the written
  // conventions sheet was authored as a `cheatSheet`, which the sheet surface
  // does not draw, so ten rows of reference material rendered as a title and an
  // empty screen. Rebuilt as `teach` blocks plus one short table, and pinned by
  // a test that reads the renderer's own switch. See the note on that sheet.
  version: 7,

  grammarAssumed: [
    'Every number from un to cent, including the S on quatre-vingts and where et appears',
    'A final consonant sounding, dropping or changing according to the word that follows it',
  ],
  grammarIntroduced: [
    'The agreement of cent when multiplied and final, and its loss before a following number',
    'The invariability of mille in every position',
    'million and milliard as nouns of quantity: plural agreement, and de before the noun counted',
    'The French decimal comma and space-separated thousands, and how a price is said aloud',
  ],

  features: ['narrated', 'roleplay', 'voiceflash'],

  overview: {
    titleEn: 'Large Numbers',
    subFr: 'Les grands nombres',
    introFr: 'Trois mots multiplient tous les nombres français, et les trois ne se comportent pas de la même façon. Rien ne s’entend, tout s’écrit.',
    minutes: 40,
    difficulty: 3,
    glyph: '💶',
    screens: 213,
  },

  acts: ACTS,
  reframe: REFRAME,
  errorTriggers: ERROR_TRIGGERS,
  drills: DRILLS,
  sheets: SHEETS,
  deckTranche: DECK_TRANCHE,
  terms: NOMBRES_LARGE_TERMS,

  /* ─── Audio ───────────────────────────────────────────────────────────────
   *
   * Briefs only. CLIP_MANIFEST is empty by design, so every card falls back to
   * device TTS until the studio delivers, and a recordingId that resolves to
   * nothing is the correct shipping state rather than a bug.
   *
   * The constraint that matters here is on rec-a1-28-prices, and it is written
   * into the brief rather than assumed. A price like `vingt-deux euros
   * cinquante` must be ONE utterance at natural speed. Let the studio pause
   * between euros and cinquante and the recording teaches the opposite of the
   * mission: the whole point is that the price arrives as a single run and the
   * learner has to split it themselves.                                        */
  audio: {
    defaultLang: 'fr-FR',
    speeds: [1.0, 0.65],
    coachVoice: 'coach-en-warm',
    interfaceSounds: ['correct', 'incorrect', 'checkpoint'],
    ambienceDefault: 'off',
    recorded: [
      {
        id: 'rec-a1-28-ladder',
        desc: 'The multiplier ladder from cent to deux milliards, each said alone with a clear pause after it, ONE TAKE straight through so the pace does not change between the hundreds and the billions. Do not splice. Also supplies the three tapTables and the card decks.',
        clipIds: ['cent', 'cent un', 'cent cinquante', 'deux cents', 'deux cent cinquante', 'trois cents', 'cinq cents', 'mille', 'deux mille', 'dix mille', 'quatre-vingt mille', 'cent mille', 'deux cent mille', 'mille neuf cent quatre-vingt-dix-neuf', 'un million', 'un million d’habitants', 'deux millions', 'trois millions', 'un milliard', 'deux milliards'],
      },
      {
        id: 'rec-a1-28-pairs',
        desc: 'The contrast pairs, ONE TAKE PER PAIR with both members inside it and no pause longer than a beat: deux cents / deux cent cinquante, deux mille cinq cents / deux mille cinq cents read twice identically for the scene break, mille / million, cent mille / un million. Same voice, same speed. The scene-break pair is deliberately the SAME utterance twice: the learner is being shown that the two spellings are phonetically identical, so any difference between the takes would teach the opposite.',
        clipIds: ['deux cents', 'deux cent cinquante', 'deux mille cinq cents', 'mille', 'un million', 'cent mille'],
      },
      {
        id: 'rec-a1-28-prices',
        desc: 'The prices. Each one is ONE UTTERANCE AT NATURAL SPEED with no pause anywhere inside it, and specifically none between the currency and the cents: vingt-deux euros cinquante is a single run and a gap after euros teaches the opposite of the mission it sits in. Read each again at 0.65 from the same take so the slow version is a slowing rather than a re-reading.',
        clipIds: ['vingt-deux euros cinquante', 'un euro vingt', 'sept euros cinquante', 'cent vingt-quatre euros quatre-vingts', 'six cent cinquante euros', 'deux mille cinq cents euros', 'mille deux cent trente-quatre', 'un virgule vingt-cinq', 'deux euros cinquante', 'mille deux cent trente-quatre euros cinquante-six'],
      },
      {
        id: 'rec-a1-28-years',
        desc: 'The years, each in BOTH forms back to back where both exist, one take per year: mille huit cent quarante then dix-huit cent quarante, and so on. The two forms must be comparable, which they are not across two takes. The three years from 2000 are read once each, because they have no second form.',
        clipIds: ['mille huit cent quarante', 'dix-huit cent quarante', 'mille neuf cent trente-huit', 'dix-neuf cent trente-huit', 'mille neuf cent quatre-vingt-dix-neuf', 'dix-neuf cent quatre-vingt-dix-neuf', 'deux mille sept', 'deux mille dix', 'deux mille vingt-six'],
      },
      {
        id: 'rec-a1-28-listening',
        desc: 'The twelve listening lines, each read straight through as a whole sentence at natural pace and again at 0.65 from the same take. Never assembled from separately recorded words: the number sits mid-sentence in every one of them and the joins are exactly where the teaching lives.',
        clipIds: ['Le petit village compte à peine deux cents habitants.', 'La tour Eiffel mesure trois cent trente mètres.', 'La bibliothèque possède plus de cent mille livres.', 'Pour deux cent cinquante euros, elle a acheté cette bague.', 'Le stade peut accueillir quatre-vingt mille spectateurs.', 'Ce professeur a formé plus de deux mille étudiants.', 'Depuis mille huit cent quarante, ce moulin tourne sans arrêt.', 'Ce camion a parcouru plus de deux cent mille kilomètres.', 'Ce billet de train coûte cent vingt-quatre euros quatre-vingts.', 'Le boulanger vend des baguettes à un euro vingt.', 'Sophie a payé son loyer, six cent cinquante euros, hier matin.', 'Mon salaire mensuel est de deux mille cinq cents euros.'],
      },
      {
        id: 'rec-a1-28-scene',
        desc: 'The agency scene. A neutral adult female voice for the agent, brisk and friendly, the way somebody sounds who does this eight times a day. Nothing in her lines is slowed or emphasised: the scene turns on the learner seeing a difference that cannot be heard, so a helpful stress on cinq cents would give the answer away.',
        clipIds: ['Écrivez la somme en toutes lettres, s’il vous plaît.', 'Parfait. Et les charges, cent vingt euros par mois.'],
      },
      {
        id: 'rec-a1-28-dictee',
        desc: 'The five dictation sentences at natural pace, and again at 0.65 from the same take so the slow version is a slowing rather than a re-reading. Full stops audible; no exaggerated word separation, which would give the tile boundaries away. The price sentence keeps its single run and takes no pause before quatre-vingts.',
        clipIds: ['Le petit village compte à peine deux cents habitants.', 'La tour Eiffel mesure trois cent trente mètres.', 'Depuis mille huit cent quarante, ce moulin tourne sans arrêt.', 'Le musée du Louvre reçoit huit millions de visiteurs par an.', 'Ce billet de train coûte cent vingt-quatre euros quatre-vingts.'],
      },
      {
        id: 'rec-a1-28-agency',
        desc: 'The lease exchange, agent lines only, brisk and warm. Every figure is given the way a figure is given at a desk: one run, no pause inside it, and no slowing down for the large ones.',
        clipIds: ['Alors, le loyer est de huit cent cinquante euros par mois.', 'Et le dépôt de garantie, deux mille cinq cents euros.', 'Oui, s’il vous plaît. Et les charges, cent vingt euros.', 'L’immeuble date de mille neuf cent trente-huit.', 'Parfait. Les clés sont à vous.'],
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
   * a dangling item is the same silent blank-drill failure.
   *
   * The `check` stage is deliberately about de rather than about a number.
   * Everything else in this lesson is invisible in speech, so a spoken check on
   * the S would be a check on nothing: `de` is the one rule here that a listener
   * can actually hear going missing.                                           */
  narration: {
    camilleVoiceId: 'camille-fr-ca-01',
    ratioEnFr: 0.7,
    stages: [
      {
        stage: 'warm',
        segments: [
          { voice: 'en', text: 'I am Camille. Today is the numbers above a hundred, and the part of them that is grammar rather than size.' },
          { voice: 'en', text: 'Three words do the scaling in French, and all three spell themselves differently. None of that is audible, which is why it is worth twenty minutes.' },
          { voice: 'fr', text: 'Deux cents. Deux mille. Deux millions de.' },
          { voice: 'en', text: 'One of those has an S you cannot hear, one has none anywhere, and one needs a word after it. That is the lesson.' },
        ],
      },
      {
        stage: 'focus',
        segments: [
          { voice: 'fr', text: 'Deux cents habitants.' },
          { voice: 'en', text: 'Two hundred inhabitants. cent is multiplied and nothing follows it, so it takes an S.' },
          { voice: 'fr', text: 'Deux cent cinquante euros.' },
          { voice: 'en', text: `Same word, and the S has gone, because cinquante is behind it now. ${REFRAME}` },
        ],
      },
      {
        stage: 'input',
        segments: [
          { voice: 'en', text: 'The hundreds first. Say each one after me.' },
          { voice: 'fr', text: 'Deux cents. Trois cents. Cinq cents.' },
          { kind: 'repeat', itemId: CENT_IDS[2] },
          { kind: 'repeat', itemId: CENT_IDS[5] },
          { voice: 'en', text: 'Now the thousands, and listen for a letter that is not there.' },
          { voice: 'fr', text: 'Mille. Deux mille. Cent mille.' },
          { kind: 'repeat', itemId: MILLE_IDS[0] },
          { kind: 'repeat', itemId: MILLE_IDS[3] },
          { voice: 'en', text: 'And the two that are nouns, which need a word before what they count.' },
          { voice: 'fr', text: 'Un million d’habitants. Deux milliards.' },
          { kind: 'repeat', itemId: MILLION_IDS[1] },
          { kind: 'repeat', itemId: MILLION_IDS[5] },
        ],
      },
      {
        stage: 'practice',
        segments: [
          { voice: 'en', text: 'Two figures three noughts apart. Listen to the middle of each.' },
          { voice: 'fr', text: 'Cent mille. Un million.' },
          { voice: 'en', text: 'A hundred thousand and a million. In a sentence they open on the same sound and separate at the end.' },
          { kind: 'repeat', itemId: MILLION_IDS[0] },
          { voice: 'en', text: 'Now a price, which arrives as one run. There is no word for the cents.' },
          { voice: 'fr', text: 'Cent vingt-quatre euros quatre-vingts.' },
          { voice: 'en', text: 'A hundred twenty-four euros eighty, written with a comma you will never hear.' },
        ],
      },
      {
        stage: 'produce',
        segments: [
          { voice: 'en', text: 'Your turn, with nothing in front of you. Say two hundred fifty.' },
          { kind: 'produce', itemId: CENT_IDS[3], expected: 'deux cent cinquante', gradeAs: 'produce' },
          { voice: 'en', text: 'Now a hundred thousand, where neither word takes an S.' },
          { kind: 'produce', itemId: MILLE_IDS[3], expected: 'cent mille', gradeAs: 'produce' },
          { voice: 'en', text: 'And a million inhabitants, with the word that reaches them.' },
          { kind: 'produce', itemId: MILLION_IDS[1], expected: 'un million d’habitants', gradeAs: 'produce' },
        ],
      },
      {
        stage: 'check',
        segments: [
          { voice: 'en', text: 'One question, and it is the only rule here a listener can hear you break. I will say a quantity and you tell me the word that sits between the number and the thing.' },
          { voice: 'fr', text: 'Le musée du Louvre reçoit huit millions de visiteurs par an.' },
          { kind: 'check', itemId: 'fr.a1.nombres.114', expected: 'de', gradeAs: 'recognise' },
          { voice: 'en', text: 'de. Leave it out and the sentence is still understood and audibly not French, which is the only mistake in this lesson anybody will notice out loud.' },
        ],
      },
      {
        stage: 'cheat',
        segments: [
          { voice: 'en', text: 'Three things to keep. cent takes an S only when a number multiplies it and nothing follows.' },
          { voice: 'en', text: 'mille never takes one, in any position. That is the one to memorise rather than work out.' },
          { voice: 'en', text: 'And million and milliard take an S and a de, because they are nouns.' },
          { voice: 'fr', text: 'À bientôt.' },
        ],
      },
    ],
  },
};

/** Exported for the authoring script, the merge script and the tests, so none
 *  of them restates a list or a count that can drift from the content. */
export {
  ITEM_IDS as NOMBRES_LARGE_ITEM_IDS,
  SPEAK_IDS as NOMBRES_LARGE_SPEAK_IDS,
  DICTATION_IDS as NOMBRES_LARGE_DICTATION_IDS,
  QUANTITY_IDS as NOMBRES_LARGE_QUANTITY_IDS,
  LADDER_IDS as NOMBRES_LARGE_LADDER_IDS,
  CENT_IDS as NOMBRES_LARGE_CENT_IDS,
  MILLE_IDS as NOMBRES_LARGE_MILLE_IDS,
  MILLION_IDS as NOMBRES_LARGE_MILLION_IDS,
  CENT_ANCHOR_ID as NOMBRES_LARGE_CENT_ANCHOR_ID,
  S_PAIR_IDS as NOMBRES_LARGE_S_PAIR_IDS,
};
