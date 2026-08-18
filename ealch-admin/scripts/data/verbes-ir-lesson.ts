// a2.10.l1 "Les verbes en -IR" — the mission journey.
//
// ── THIS IS A FIRST BUILD ──────────────────────────────────────────────────
//
// Probed rather than assumed: the unit dump says `"lessons": []`, so unlike
// a2.01 there is no pre-v2 stub to rebuild and the version counter starts at 1.
//
// ── The Owns: the sound, inverted ──────────────────────────────────────────
//
// a2.01 taught that four of six forms are inaudible and the pronoun carries the
// person. This is the first place in the level where that stops being wholly
// true, and the whole lesson is built on the learner noticing that two
// consecutive lessons say opposite things about the same language.
//
//   il finit        /il fi.ni/     eel fee-NEE
//   ils finissent   /il fi.nis/    eel fee-NEES
//
// One sound, at the very end of the verb. It is the first singular/plural verb
// pair in the product a learner can hear apart WITHOUT the pronoun, and it has to
// be, because `il` and `ils` are said identically and so are `elle` and `elles`.
// In a2.01 that pair was undecidable; here the verb decides it.
//
// The brief describes this as an extra syllable and that is measurably wrong:
// both verbs are two syllables. What arrives is a consonant. The reframe was
// corrected accordingly and the reasoning is in verbes-ir-terms.ts.
//
// ── AND THE OTHER HALF, WHICH IS a2.01's AND IS STILL TRUE ─────────────────
//
//   je finis · tu finis · il finit    three spellings, one sound
//
// The lesson holds both facts at once and says where the line falls:
// BOTH_HALVES, carried across three sections. The singular hides the person and
// the pronoun still has to carry it; the plural announces itself and the verb
// does the work. Either half alone is a weaker teaching than the pair.
//
// `on finit` is the row that stops the reframe from being a lie: `on` means we,
// takes the `il` form, and grows nothing. It is stated in s11-both and it carries
// a2.01's nous/on constant, imported rather than reworded.
//
// ── Weight, in missions ────────────────────────────────────────────────────
//
// Paradigm act: THREE (s04 to s06). Owns act: SEVEN (s07 to s13), including two
// `listening` missions, which is the heaviest section type in the lesson and is
// where the canDo's "hear" lives. The trap act is downstream of the Owns. Three
// of the five quiz rounds test the ear or the singular spelling directly, six of
// the thirty questions are `listenChoose`, and seven of the eight dictée targets
// are graded on exactly the distinction the lesson teaches.
//
// ── WHERE THE CONTRAST LIVES, AND WHY THE TABLE IS OUT OF ORDER ────────────
//
// s05-hear, and only there. One `tapTable`, six rows, three columns, and
// `il finit` and `ils finissent` are ADJACENT rows, each with its own `say`, so
// the learner hears them one tap apart on one screen. Split across two missions
// the learner compares two recordings instead of two forms and the teaching is
// gone; the batch and the test both check the adjacency by row index rather than
// checking that both strings exist somewhere.
//
// That ordering is a DEPARTURE and it is deliberate. The ledger settles pronoun
// order as `je · tu · il · nous · vous · ils`, and scopes that to "how a paradigm
// is written in prose when it is not in a table". This table is ordered by SOUND:
// the three that give the ear nothing, then the one that answers the third of
// them, then the two that carry a whole syllable. The canonical nine-pronoun
// order is in sheet.a2.10.endings, where it belongs.
//
// One table, one tapTable, and then a stop, as the brief asked. The `table` at
// layer 'core' is a `table-in-core` density failure anyway, so the full paradigm
// lives in the sheet.
//
// ── What is left to the neighbours ─────────────────────────────────────────
//
// - THE NON--iss- CLASS IS NAMED AND CONJUGATED NOWHERE. partir, sortir, dormir,
//   servir, sentir, venir, tenir, ouvrir, offrir and courir appear on exactly ONE
//   card (s16-notmine), and no form of any of them reaches a deck, a drill, a
//   dictée, a scenario or a quiz answer. Not even the wrong form: see the corpus
//   header for why this lesson does not print `ils partissent` in order to reject
//   it.
// - venir and tenir are a2.02, seq 5, and the card says so by unit id. THE OTHER
//   EIGHT ARE OWNED BY NO UNIT IN THE CURRICULUM. That was measured across all 76
//   units and it is in the build report, not in the lesson.
// - NO -RE VERB. a2.11 is the very next lesson.
// - `choisir` in a restaurant or a shopping frame is a2.07 and a2.26. It appears
//   here in a paradigm and in one sentence about a class timetable.
//
// ── Layout notes that are bugs, not preferences ───────────────────────────
//
// - `tapTable` is NOT in ownsLayout() (LessonPager.tsx:162), so s05-hear renders
//   inside a SCROLLING page. Six rows is the most it can hold above the fold.
// - `size` is not decoration. density.logic.ts reads `xl` as a 12-word cap on
//   EVERY string in the section except `say`, `hint`, `note`, `why` and `tip`.
//   s07-onesound is the only xl section here and every card in it is a bare
//   two-word form.
// - `commonErrors` needs `swipe: true` or it renders a blank screen. See
//   s15-errors.
// - `reading` needs `questionsInModal` WITH questions or its glossary reaches no
//   renderer, and PassagePage splits on sentence boundaries so an authored
//   newline is swallowed: s20-reading is one line.
// - Three term chips per section, maximum.
// - A `groupDrill` at `lg` may carry items and a check in one group; only an `xl`
//   one may not. s06-ten and s12-write are both lg.

import type {
  ErrorTrigger,
  Lesson,
  LessonAct,
  LessonDrill,
  LessonSection,
  ReferenceSheet,
  SceneBeat,
} from '../../../ealch-v2/src/content/schema.ts';
import {
  A201_BACKREF,
  A201_REFRAME,
  BOTH_HALVES,
  NOUS_ON,
  REFRAME,
  VERBES_IR_TERMS,
} from './verbes-ir-terms.ts';
import {
  AUTHORED_IDS,
  CONTRAST_PAIR,
  DICTATION_IDS,
  ENDINGS,
  GROWING_ENDINGS,
  NOT_THIS_FAMILY,
  NOT_THIS_FAMILY_HOMED,
  NOT_THIS_FAMILY_UNIT,
  NUMBER_PAIRS,
  PARADIGM_IDS,
  SILENT_ENDINGS,
  SINGULAR_TRIPLES,
  THE_TEN,
  familyIds,
  fr,
  sub,
} from './verbes-ir-corpus.ts';
import { IMPORTED_IDS, verbEn, verbId } from './verbes-ir-imported.ts';
import { REPAIRED_RESPELL, verbCard, verbRespell, verbStem } from './verbes-ir-display.ts';
import { unitRef } from './_unit-ref.ts';

export { A201_BACKREF, A201_REFRAME, BOTH_HALVES, NOUS_ON, REFRAME };

/* ─── The items this lesson touches ────────────────────────────────────────
 *
 * 25 authored plus 10 imported by id and untouched except for three respelling
 * repairs and two drill additions. Every id here resolves; the batch re-checks
 * the imported half against POSTGRES rather than the seed, because the two drift
 * and an id that exists only in the seed renders as an empty card.             */

const ITEM_IDS = [...new Set([...AUTHORED_IDS, ...IMPORTED_IDS])];

/** Spoken practice draws only from items carrying `voiceflash`, because that is
 *  the drill the mic-scored deck runs. Every authored row has it; the ten
 *  infinitives are deliberately NOT here, because two of them carry no
 *  `voiceflash` at all and a bare infinitive is not a thing anybody says on its
 *  own.
 *
 *  The `hidden` family is not here either, and that is a placement decision
 *  rather than an omission: those three sentences are identical out loud, so
 *  speaking them proves nothing. They are written in s12-write instead, which is
 *  the only surface that can test them. */
const SPEAK_IDS = [
  ...PARADIGM_IDS,
  ...familyIds('pair'),
  ...familyIds('apply'),
];

/** The verb whose paradigm the lesson runs on, named once so the tapTable, the
 *  sheet and the test read one string. */
const PARADIGM_VERB = 'finir';

/** THE ROW ORDER OF THE CONTRAST TABLE, by item id.
 *
 *  Sound order, not pronoun order: the three the ear cannot separate, then the
 *  plural that answers the third of them, then the two that carry a whole
 *  syllable. `il finit` and `ils finissent` are neighbours BECAUSE OF THIS
 *  ORDERING and for no other reason, which is why it is a named constant the
 *  batch and the test can both check rather than an accident of authoring.
 *
 *  Index-aligned with ENDINGS in the corpus, and the batch asserts that too.   */
const HEAR_ROW_IDS = [
  'fr.a2.verbes.181', // je finis
  'fr.a2.verbes.182', // tu finis
  'fr.a2.verbes.183', // il finit          <- CONTRAST_PAIR.singular
  'fr.a2.verbes.186', // ils finissent     <- CONTRAST_PAIR.plural, and it is next
  'fr.a2.verbes.184', // nous finissons
  'fr.a2.verbes.185', // vous finissez
];

/** The bare pronoun-and-verb, taken off the corpus sentence rather than retyped.
 *  The paradigm frame is `... tôt.` and a table cell wants the verb alone, so the
 *  frame word comes off here in ONE place. A hand-typed cell would be free to
 *  drift from the row the same screen plays. */
const form = (id: string): string => fr(id).replace(/\s+tôt\.$/, '').toLowerCase();

/* ─── Mission 1 · Scene ────────────────────────────────────────────────────
 *
 * The A2 register of stakes is loss of fluency under load. Nothing here is
 * misunderstood: the sentence the learner produces is perfect French and is
 * heard exactly as it was said. What it says is "one person", and the learner
 * meant three.
 *
 * That is a sharper failure than an ungrammatical form, and it is the one this
 * lesson is uniquely placed to stage: the middle of the plural does not arrive,
 * the learner falls back on the singular because the singular is what they can
 * build, and the plan quietly changes around them. Nobody corrects anybody. The
 * supervisor has no reason to ask again, because he was told a complete and
 * correct thing.
 *
 * Beats are extracted to a named const, each with its own `size` and `audio`.
 * The section sets NO size: ownsLayout() ignores it and density.logic.ts would
 * read xl as a 12-word cap on prose.                                           */

const SCENE_BEATS: SceneBeat[] = [
  {
    kind: 'narration',
    size: 'md',
    text: 'A warehouse outside Rennes, ten to six. A minibus runs to the station at the end of every shift, and somebody is writing down who is on it.',
    audio: { mode: 'tts', voice: 'coach' },
  },
  {
    kind: 'bubble',
    from: 'them',
    reveal: 'tap',
    size: 'md',
    speaker: 'Karim',
    fr: 'Le bus est là à six heures.',
    en: 'The bus is here at six.',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a2-10-scene' },
  },
  {
    kind: 'bubble',
    from: 'you',
    reveal: 'auto',
    size: 'md',
    fr: 'Très bien, merci.',
    en: 'Good, thank you.',
    stage: 'He turns the sheet round so you can see the empty seats.',
    audio: { mode: 'tts', lang: 'fr-FR' },
  },
  {
    kind: 'bubble',
    from: 'them',
    reveal: 'tap',
    size: 'md',
    speaker: 'Karim',
    fr: 'Alors, qui finit à six heures ce soir ?',
    en: 'So who finishes at six tonight?',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a2-10-scene' },
  },
  {
    kind: 'choice',
    size: 'lg',
    prompt: 'You and two colleagues. What goes back?',
    options: [
      {
        fr: 'Je finis à six heures.',
        en: 'the form you can already build',
        outcome: 'breaks',
        audio: { mode: 'tts', lang: 'fr-FR' },
      },
      {
        fr: 'Nous finissons à six heures.',
        en: 'the form with a sound on the end',
        outcome: 'works',
        audio: { mode: 'tts', lang: 'fr-FR' },
      },
    ],
    followUp: {
      works: 'Yes, and the extra sound in the middle is the only thing that said three. Watch what the other one costs.',
      breaks: 'Perfect French, and it says one person. He has no reason to ask you again.',
    },
  },
  {
    kind: 'bubble',
    from: 'them',
    reveal: 'auto',
    size: 'md',
    speaker: 'Karim',
    fr: "D'accord. Une place à six heures.",
    en: 'Right. One seat at six.',
    stage: 'He does not look up. He writes one name, closes the folder and goes to move the van.',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a2-10-scene' },
  },
  {
    kind: 'break',
    size: 'lg',
    // BUDGETED, not chosen. `scene` is absent from ownsLayout(), so the card
    // cannot size itself, and a2.01 took three device passes on a Pixel 6 to
    // establish what fits: a heading of about 13 characters (it wraps at twelve
    // and every wrapped line costs about 85px), a body of 24 to 30 words, a coach
    // line under 9, and reading-row glosses under about 24 characters each.
    // Ledger §7. Those figures are asserted by a2-10-verbes-ir.test.ts rather
    // than trusted to this comment.
    heading: 'The one seat',
    body: 'You had the verb and you had the hour. What would not come was the middle of the plural, so you took the singular and it went down as one.',
    wrong: {
      fr: 'Je finis à six heures.',
      ipa: '/ʒə fi.ni a si zœʁ/',
      en: 'one person, not three',
    },
    right: {
      fr: 'Nous finissons à six heures.',
      ipa: '/nu fi.ni.sɔ̃ a si zœʁ/',
      respell: '[noo fee-nee-sohⁿ a see-ZEUR]',
      en: 'the sound said three',
    },
    coach: 'One sound short, and one seat short.',
    // Audio-first: the ear answers before the eye can. `autoplay` is NOT set. It
    // is declared in schema.ts and implemented in no component.
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], audioFirst: true, recordingId: 'rec-a2-10-contrast' },
  },
  {
    kind: 'resolve',
    size: 'md',
    text: 'Nobody misheard you. The van that came had one seat in it, because that is exactly what you asked for.',
  },
];

const SECTIONS: LessonSection[] = [
  /* ── Act 1: the lesson that said the opposite ────────────────────────── */

  {
    type: 'scene',
    id: 's01-scene',
    title: 'The Seat That Was Not Booked',
    frSub: "La place qu'on n'a pas gardée",
    render: 'screens',
    layer: 'core',
    terms: ['theSound', 'stem'],
    say: {
      text: 'Nothing goes wrong out loud here. Watch how many people the sentence turns out to mean.',
      voice: 'coach',
      timing: 'onFirstVisitOnly',
    },
    setting: {
      place: 'The shift desk at a warehouse',
      city: 'Rennes',
      time: 'Thursday, ten to six',
      ambience: 'room-tone-lobby',
    },
    beats: SCENE_BEATS,
    // The reframe is referenced, never retyped, so this appearance cannot drift
    // out of agreement with the others the density validator counts.
    closing: {
      size: 'md',
      text: `${REFRAME} This lesson is the first one where your ear can do that job for you.`,
    },
  },

  {
    type: 'goals',
    id: 's02-goals',
    title: 'What You Will Be Able To Do',
    frSub: 'Ce que vous saurez faire',
    layer: 'core',
    say: `${REFRAME} By the end you will build a form for a verb this lesson never shows you.`,
    goals: [
      { t: 'Build any regular -ir verb', s: 'Cut two letters off the naming form, then put the person on what is left.' },
      { t: 'Hear singular against plural', s: 'From the verb alone, which is something no lesson before this one could ask you to do.' },
      { t: 'Spell the three that hide', s: 'finis, finis and finit are one sound, so the page is the only place they differ.' },
      { t: 'Know where the family stops', s: 'Ten verbs end in -ir and take none of this, and several are very common.' },
    ],
  },

  {
    // THE OPENING MOVE, and it is a comparison rather than an introduction.
    //
    // a2.01's reframe is quoted VERBATIM, imported from its own terms file so
    // that a rewording there moves this card with it. A learner who finished that
    // lesson twenty minutes ago is being told, on purpose, that the next twenty
    // minutes contradict it, and then told exactly where the line falls.
    type: 'cardDeck',
    id: 's03-inverted',
    title: 'Last Lesson Said The Opposite',
    frSub: "L'inverse de la leçon d'avant",
    hint: 'Swipe through the four cards. Read the second one twice.',
    render: 'deck',
    layer: 'core',
    size: 'lg',
    terms: ['theSound', 'singularThree'],
    say: 'These two lessons disagree, and knowing where they disagree is worth more than either of them.',
    cards: [
      {
        label: 'What you were told',
        head: 'The verb would not tell you',
        body: `${A201_BACKREF} taught you this about -er verbs: ${A201_REFRAME} You have spent a whole lesson learning to lean on the little word in front.`,
      },
      {
        label: 'What changes here',
        head: 'This time you can hear it',
        fr: 'il finit · ils finissent',
        sub: '[eel fee-NEE] · [eel fee-NEES]',
        body: 'One person and several, and the verb itself tells them apart. On an -er verb that pair was one sound. Here it is two.',
      },
      {
        label: 'Where the line falls',
        head: 'Half of it still holds',
        body: `${BOTH_HALVES} The three singular forms are still one sound and the pronoun is still doing that work. What is new is that the plural stopped joining them.`,
      },
      {
        label: 'What to do with it',
        head: 'Listen at the end of the verb',
        body: `${REFRAME} Nothing arrives and you are hearing one person. Something arrives and you are hearing several, and you did not need the pronoun at all.`,
      },
    ],
  },

  /* ── Act 2: the machine, and the six forms ───────────────────────────── */

  {
    type: 'cardDeck',
    id: 's04-machine',
    title: 'Cut Two Letters Off, Again',
    frSub: 'La même machine',
    hint: 'Swipe through the four cards.',
    render: 'deck',
    layer: 'core',
    size: 'lg',
    terms: ['stem', 'theSound'],
    say: 'The method has not changed at all. Only the six things you put on the end have.',
    cards: [
      {
        label: 'Step 1',
        head: 'The naming form ends in -ir',
        fr: 'finir',
        sub: `[${bareRespellOf('finir')}]`,
        body: 'This is how the verb is listed, and nobody speaks in it. Take the last two letters off exactly as you did before.',
      },
      {
        label: 'Step 2',
        head: 'What is left does not move',
        fr: 'finir → fin-',
        sub: 'the part that stays',
        body: 'chois-, rempl-, réuss-. The stem is the same for all six persons, so once you have it you have the whole verb.',
      },
      {
        label: 'Step 3, the short half',
        head: 'Three endings you will not hear',
        fr: '-is · -is · -it',
        sub: 'je · tu · il',
        body: 'Three letters, three spellings, and not one sound between them. This is the part that behaves exactly like the last lesson.',
      },
      {
        label: 'Step 3, the long half',
        head: 'Three endings you will',
        fr: '-issent · -issons · -issez',
        sub: 'ils · nous · vous',
        body: 'All three reach the ear. The first adds one sound at the very end; the other two add a whole syllable each.',
      },
    ],
  },

  {
    // THE CONTRAST, AND IT IS ONE SCREEN, WITH THE TWO ROWS ADJACENT.
    //
    // Row 2 is `il finit` and row 3 is `ils finissent`, each with its own `say`,
    // so the learner hears them one tap apart without leaving the screen. Split
    // apart the learner compares two recordings instead of two forms.
    // a2-10-verbes-ir.test.ts checks the ADJACENCY by index, not that both
    // strings exist somewhere in the lesson.
    //
    // Sound order, not the ledger's prose pronoun order, and the departure is
    // argued in the header. Six rows and not nine: tapTable is not in
    // ownsLayout(), so this renders inside a scrolling page and a ninth row runs
    // past the fold. The nine-pronoun version is in sheet.a2.10.endings.
    type: 'tapTable',
    id: 's05-hear',
    title: 'Six Forms, And What Reaches You',
    frSub: 'Les six formes',
    layer: 'core',
    terms: ['theSound', 'singularThree', 'stem'],
    sheetId: 'sheet.a2.10.endings',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a2-10-paradigm' },
    say: `${REFRAME} Tap row three and then row four. Those two are the lesson.`,
    cols: ['Person', PARADIGM_VERB, 'What you hear'],
    rows: [
      {
        cells: [ENDINGS[0].person, form(HEAR_ROW_IDS[0]), ENDINGS[0].heard],
        say: fr(HEAR_ROW_IDS[0]),
        detail: {
          title: form(HEAR_ROW_IDS[0]),
          body: 'The ending is two letters and it is silent. What arrives at the ear is fee-NEE and nothing after it, which is exactly what arrives for tu and for il.',
          say: fr(HEAR_ROW_IDS[0]),
        },
      },
      {
        cells: [ENDINGS[1].person, form(HEAR_ROW_IDS[1]), ENDINGS[1].heard],
        say: fr(HEAR_ROW_IDS[1]),
        detail: {
          title: form(HEAR_ROW_IDS[1]),
          body: 'Spelled exactly like the je form and said exactly like it too. The s is the same silent s you already write on tu es and on tu parles.',
          say: fr(HEAR_ROW_IDS[1]),
        },
      },
      {
        cells: [ENDINGS[2].person, form(HEAR_ROW_IDS[2]), ENDINGS[2].heard],
        say: fr(HEAR_ROW_IDS[2]),
        detail: {
          title: form(HEAR_ROW_IDS[2]),
          body: 'A t this time, and still no sound. Three pronouns share this form, and on is one of them, so this is also the form the spoken we takes.',
          say: fr(HEAR_ROW_IDS[2]),
        },
      },
      {
        cells: [ENDINGS[3].person, form(HEAR_ROW_IDS[3]), ENDINGS[3].heard],
        say: fr(HEAR_ROW_IDS[3]),
        detail: {
          title: form(HEAR_ROW_IDS[3]),
          body: 'Tap the row above and then this one. One sound has arrived, at the very end, and the word is still two syllables. That single S is the whole difference.',
          say: fr(HEAR_ROW_IDS[3]),
        },
      },
      {
        cells: [ENDINGS[4].person, form(HEAR_ROW_IDS[4]), ENDINGS[4].heard],
        say: fr(HEAR_ROW_IDS[4]),
        detail: {
          title: form(HEAR_ROW_IDS[4]),
          body: `A whole syllable more than the singular, and then the same nasal vowel ${unitRef('a2.01')} gave you on nous parlons. Nobody could mistake this one.`,
          say: fr(HEAR_ROW_IDS[4]),
        },
      },
      {
        cells: [ENDINGS[5].person, form(HEAR_ROW_IDS[5]), ENDINGS[5].heard],
        say: fr(HEAR_ROW_IDS[5]),
        detail: {
          title: form(HEAR_ROW_IDS[5]),
          body: 'A whole syllable more as well. Unlike vous parlez it does not sound like the naming form, so there is nothing here to confuse it with.',
          say: fr(HEAR_ROW_IDS[5]),
        },
      },
    ],
  },

  {
    // The ten, named by id so every one of them is genuinely on a screen rather
    // than merely resolvable. `vocabThemes` cards carry no itemId, which is why
    // this is a groupDrill: a1.08 declared 43 itemIds that resolved perfectly and
    // were drawn by nothing.
    type: 'groupDrill',
    id: 's06-ten',
    title: 'Ten Verbs, One Pattern',
    frSub: 'Les dix verbes',
    layer: 'core',
    size: 'lg',
    terms: ['stem', 'notThisFamily'],
    sheetId: 'sheet.a2.10.ten',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a2-10-ten' },
    say: 'Two groups of five. Say the stem out loud for each one before you move on.',
    groups: [
      {
        label: 'The five the lesson runs on',
        items: THE_TEN.slice(0, 5).map(verbCard),
        check: {
          q: 'What is the stem of réfléchir?',
          opts: ['réfléchi', 'réfléc', 'réfléch', 'réfléchir'],
          correct: 2,
          why: 'Take off the last two letters and stop. réfléch- takes all six endings without moving.',
        },
      },
      {
        label: 'Five more, same machine',
        items: THE_TEN.slice(5, 10).map(verbCard),
        check: {
          q: 'You have never met the verb rougir, meaning to blush. What is ils ___ ?',
          opts: ['rougissent', 'rougent', 'rougirent', 'rougis'],
          correct: 0,
          why: 'Stem roug-, plural ending -issent. You were not taught this verb and you did not need to be, which is what regular means.',
        },
      },
    ],
  },

  /* ── Act 3: the Owns. What the ear gets, and what it does not. ───────── */

  {
    // The only xl section in the lesson, and the one place xl is correct: every
    // display string is a bare two-word form. density.logic.ts caps EVERY string
    // in an xl section at 12 words except say, hint, note, why and tip.
    type: 'cardDeck',
    id: 's07-onesound',
    title: 'Three Spellings, One Sound',
    frSub: 'Trois graphies, un son',
    hint: 'Swipe. The fourth card is where a sound finally arrives.',
    render: 'deck',
    layer: 'core',
    size: 'xl',
    terms: ['singularThree'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], audioFirst: true, recordingId: 'rec-a2-10-hidden' },
    say: 'Four screens. Listen before you read each one, and notice where nothing changes.',
    cards: [
      { label: '1 of 4', fr: 'je finis', sub: '[zhuh fee-NEE]', body: 'I finish. Silent -is.' },
      { label: '2 of 4', fr: 'tu finis', sub: '[tü fee-NEE]', body: 'You finish. Silent -is again.' },
      { label: '3 of 4', fr: 'il finit', sub: '[eel fee-NEE]', body: 'He finishes. Silent -it.' },
      { label: '4 of 4', fr: 'ils finissent', sub: '[eel fee-NEES]', body: 'They finish. One sound arrives.' },
    ],
  },

  {
    type: 'examples',
    id: 's08-grow',
    title: 'The Same Sound, On Three More Verbs',
    frSub: "Trois autres verbes",
    layer: 'core',
    terms: ['theSound'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a2-10-pairs' },
    say: `${REFRAME} Each pair is one frame with one thing moving. Tap any line.`,
    examples: [
      { fr: fr('fr.a2.verbes.187'), en: 'She chooses.', note: 'One person.' },
      { fr: fr('fr.a2.verbes.188'), en: 'They choose.', note: 'Several, and the s of elles is silent as ever. The verb is the only evidence there is.' },
      { fr: fr('fr.a2.verbes.189'), en: 'He always succeeds.', note: 'One person again.' },
      { fr: fr('fr.a2.verbes.190'), en: 'They always succeed.', note: 'A second verb, and the same one sound at the end of it.' },
      { fr: fr('fr.a2.verbes.191'), en: 'She is growing up fast.', note: 'A third verb, and elle against elles is again inaudible.' },
      { fr: fr('fr.a2.verbes.192'), en: 'They are growing up fast.', note: 'Which means the S you can hear is carrying the whole sentence.' },
    ],
  },

  {
    // THE OWNS, TESTED, AND THIS TASK WAS IMPOSSIBLE LAST LESSON.
    //
    // Every line here is a pair whose PRONOUN gives the learner nothing: `il` and
    // `ils` are said identically and so are `elle` and `elles`. In a2.01 that
    // meant the pair was undecidable and the learner had to read the page. Here
    // the verb settles it, which is exactly the inversion the canDo promises.
    type: 'listening',
    id: 's09-ear',
    title: 'One Person, Or Several?',
    frSub: "Un ou plusieurs ?",
    layer: 'core',
    questionsInModal: true,
    terms: ['theSound', 'singularThree'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], audioFirst: true, recordingId: 'rec-a2-10-contrast' },
    say: 'Four lines and no pronoun to help you. The s of elles and the s of ils were never said out loud.',
    lines: [
      { fr: fr('fr.a2.verbes.183'), en: 'He finishes early.' },
      { fr: fr('fr.a2.verbes.186'), en: 'They finish early.' },
      { fr: fr('fr.a2.verbes.187'), en: 'She chooses.' },
      { fr: fr('fr.a2.verbes.188'), en: 'They choose.' },
    ],
    questions: [
      {
        q: 'You hear « eel fee-NEE », with nothing after it. How many people?',
        opts: ['One', 'Several', 'One or several, the sound does not say', 'It is not a real form'],
        correct: 0,
        why: 'Nothing arrived at the end of the verb, and on an -ir verb that means the short form. The plural would have put a sound there.',
      },
      {
        q: 'Now « eel fee-NEES ». How many people?',
        opts: ['One', 'Several', 'Still one or several', 'The recording is wrong'],
        correct: 1,
        why: 'One S more than the line before it, and that is the whole difference. The pronoun sounded exactly the same in both.',
      },
      {
        q: '« Elle choisit » and « Elles choisissent ». What is different out loud?',
        opts: ['The pronoun', 'Nothing at all', 'One sound at the end of the verb', 'The whole verb'],
        correct: 2,
        why: `elle and elles are said the same, so the verb is carrying it. In ${A201_BACKREF} the same pronoun pair on an -er verb gave you two sentences that were identical, and you had to read the page.`,
      },
      {
        q: 'Which of these two would your ear NOT settle?',
        opts: ['il finit against ils finissent', 'je finis against il finit', 'nous finissons against vous finissez', 'elle choisit against elles choisissent'],
        correct: 1,
        why: 'Both are the short form and both are said the same way. In the singular the pronoun is still the only evidence, exactly as it was last lesson.',
      },
    ],
  },

  {
    // The second ear mission, and it is harder on purpose: naming WHICH plural,
    // and meeting the one form that breaks the rule. `on finit` means we and
    // sounds like one person, and a learner who has just been told to listen at
    // the end of the verb has to be given that before they meet it in a room.
    type: 'listening',
    id: 's10-ear2',
    title: 'Which One Arrived?',
    frSub: 'Quelle terminaison ?',
    layer: 'core',
    questionsInModal: true,
    terms: ['theSound', 'nousOn'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], audioFirst: true, recordingId: 'rec-a2-10-paradigm' },
    say: 'Four more. Three of them your ear can settle completely, and the fourth is the one to watch.',
    lines: [
      { fr: fr('fr.a2.verbes.184'), en: 'We finish early.' },
      { fr: fr('fr.a2.verbes.185'), en: 'You finish early.' },
      { fr: fr('fr.a2.verbes.196'), en: 'We are thinking it over together.' },
      { fr: fr('fr.a2.verbes.205'), en: 'We finish at six.' },
    ],
    questions: [
      {
        q: 'Listen to « Nous finissons tôt ». How much longer is the verb than in « Je finis tôt »?',
        opts: ['Not longer at all', 'One sound', 'Two syllables', 'One whole syllable'],
        correct: 3,
        why: 'fee-NEE becomes fee-nee-SOHⁿ. nous and vous are the two that add a syllable rather than a single sound.',
      },
      {
        q: 'Two of these endings add a whole syllable. Which two?',
        opts: ['nous and vous', 'ils and elles', 'je and tu', 'il and on'],
        correct: 0,
        why: '-issons and -issez are syllables of their own. -issent adds one S and no syllable, which is why it is the one worth practising.',
      },
      {
        q: 'Listen to « On finit à six heures ». How many people is that?',
        opts: ['One, certainly', 'You cannot tell at all', 'Several, and the verb did not say so', 'Several, and the verb said so'],
        correct: 2,
        why: 'on means we and takes the il form, so the most common spoken we in French puts no sound on the end. This is the one place the rule will not help you.',
      },
      {
        q: 'So what would the same speaker have written instead?',
        opts: ['On finissons', 'Nous finissons', 'Nous finit', 'On finissent'],
        correct: 1,
        // Deliberately a PARAPHRASE and not the NOUS_ON constant. That sentence
        // has exactly one home in this lesson, s11-both, because the whole band
        // quotes it and "where is this said?" has to have one answer. The batch
        // and the test both fail if it appears in a second section.
        why: 'The written form takes the ending you can hear and the spoken one takes the ending you cannot. Both mean we, and on takes the il form.',
      },
    ],
  },

  {
    // WHERE THE TWO HALVES ARE HELD TOGETHER, and the only home of the nous/on
    // statement in this lesson. Three cards: what a2.01 still owns, what this
    // lesson adds, and the exception that would otherwise undo the reframe in
    // the first conversation the learner has.
    type: 'cardDeck',
    id: 's11-both',
    title: 'Both Things Are True',
    frSub: 'Les deux moitiés',
    hint: 'Swipe through the three cards.',
    render: 'deck',
    layer: 'core',
    size: 'lg',
    terms: ['singularThree', 'nousOn', 'theSound'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a2-10-hidden' },
    say: 'Three cards, and the third one is the reason the second one is not the whole story.',
    cards: [
      {
        label: 'Still true',
        head: 'The singular hides the person',
        fr: 'je finis · tu finis · il finit',
        sub: 'one sound, three spellings',
        body: `${A201_BACKREF} said the pronoun carries the person, and in the singular of an -ir verb it still does. Nothing there has been taken back.`,
      },
      {
        label: 'New here',
        head: 'The plural announces itself',
        body: `${BOTH_HALVES} ${REFRAME} That is the first time in this level a verb has told you anything your ear could use.`,
      },
      {
        label: 'The exception to watch',
        head: 'The spoken we sounds singular',
        fr: 'on finit',
        sub: 'we finish',
        body: `${NOUS_ON} on takes the il form, so it grows nothing at all and you will hear it constantly.`,
      },
    ],
  },

  {
    // PRODUCTION, and the only kind that can test the singular half. The learner
    // is given a sound and has to choose a spelling the sound does not determine,
    // which is exactly what a2.01's s11-spell did and is the half of that lesson
    // this one inherits rather than inverts.
    type: 'groupDrill',
    id: 's12-write',
    title: 'Write What The Sound Did Not Say',
    frSub: "Écrire ce qu'on n'entend pas",
    layer: 'core',
    size: 'lg',
    terms: ['singularThree', 'theSound'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a2-10-hidden' },
    say: 'Three rounds. In the first two the recording cannot help you, and in the third it can.',
    groups: [
      {
        label: 'One sound, two people',
        items: [
          { fr: fr('fr.a2.verbes.193'), itemId: 'fr.a2.verbes.193', respell: sub('fr.a2.verbes.193'), en: 'I am filling in the form.' },
          { fr: fr('fr.a2.verbes.194'), itemId: 'fr.a2.verbes.194', respell: sub('fr.a2.verbes.194'), en: 'You are filling in the form.' },
        ],
        check: {
          q: 'You hear « rahⁿ-plee ». Which is on the page?',
          opts: ['Only the je one', 'Either one, and the sound cannot settle it', 'Only the tu one', 'Neither, it is remplit'],
          correct: 1,
          why: 'Both, and a third spelling as well. je remplis, tu remplis and il remplit are one sound, so the pronoun on the page is the only evidence.',
        },
      },
      {
        label: 'The t only il takes',
        items: [
          { fr: fr('fr.a2.verbes.195'), itemId: 'fr.a2.verbes.195', respell: sub('fr.a2.verbes.195'), en: 'He is filling in the form.' },
          { fr: fr('fr.a2.verbes.183'), itemId: 'fr.a2.verbes.183', respell: sub('fr.a2.verbes.183'), en: 'He finishes early.' },
        ],
        check: {
          q: 'Tu ___ le formulaire. (remplir)',
          opts: ['remplit', 'remplissent', 'remplissez', 'remplis'],
          correct: 3,
          why: 'tu takes -is and you will never hear it. It is the ending most often written wrong for exactly that reason.',
        },
      },
      {
        label: 'The one the recording settles',
        items: [
          { fr: fr('fr.a2.verbes.186'), itemId: 'fr.a2.verbes.186', respell: sub('fr.a2.verbes.186'), en: 'They finish early.' },
          { fr: fr('fr.a2.verbes.184'), itemId: 'fr.a2.verbes.184', respell: sub('fr.a2.verbes.184'), en: 'We finish early.' },
        ],
        check: {
          q: 'How much of « -issent » reaches the ear?',
          opts: ['One S, right at the end', 'Nothing at all', 'A whole syllable', 'The whole ending'],
          correct: 0,
          why: 'One consonant and no syllable. It is the smallest thing the ear gets in this lesson and it is the one that changes the meaning most.',
        },
      },
    ],
  },

  {
    type: 'flashcards',
    id: 's13-flash',
    title: 'Flip and Recall',
    frSub: 'Retournez la carte',
    render: 'deck',
    layer: 'core',
    say: 'The person is on the front. Say the whole sentence, ending and all, before you flip.',
    cards: [
      { front: 'What does a plural -ir verb do that a singular one does not?', back: `${REFRAME} One S for ils, a whole syllable for nous and vous.` },
      { front: 'The stem of finir', back: 'fin-. Cut the last two letters off and stop.' },
      { front: 'You, saying you finish early', back: fr('fr.a2.verbes.181'), say: fr('fr.a2.verbes.181') },
      { front: 'One colleague, finishing early', back: fr('fr.a2.verbes.183'), say: fr('fr.a2.verbes.183') },
      { front: 'Three colleagues, finishing early', back: fr('fr.a2.verbes.186'), say: fr('fr.a2.verbes.186') },
      { front: 'You and somebody else, in writing', back: fr('fr.a2.verbes.184'), say: fr('fr.a2.verbes.184') },
      { front: 'You and somebody else, out loud', back: fr('fr.a2.verbes.205'), say: fr('fr.a2.verbes.205') },
      { front: 'One woman, choosing', back: fr('fr.a2.verbes.187'), say: fr('fr.a2.verbes.187') },
      { front: 'Several women, choosing', back: fr('fr.a2.verbes.188'), say: fr('fr.a2.verbes.188') },
      { front: 'The three endings the ear gets nothing from', back: `${SILENT_ENDINGS.join(', ')}. One sound between all three.` },
      { front: 'The three it does', back: `${GROWING_ENDINGS.join(', ')}. The first adds one S and the other two a syllable.` },
      { front: 'Which form does on take on an -ir verb?', back: 'The il form. on finit, never on finissons, and it means we.' },
    ],
  },

  /* ── Act 4: where the family stops ───────────────────────────────────── */

  {
    // THE TRAP IS THE -iss- REFLEX, drilled where it lives: in the ear. Stepped,
    // so the three jobs are three screens rather than one column below the fold.
    // The rule card names the boundary class without conjugating any of it.
    type: 'trapDrill',
    id: 's14-trap',
    title: 'Put The Sound Where It Belongs',
    frSub: 'Le bon son au bon endroit',
    layer: 'core',
    swipe: true,
    terms: ['theSound', 'notThisFamily'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], wrongThenRight: true, recordingId: 'rec-a2-10-contrast' },
    say: 'Six of these. Say each one out loud before you choose, and stop where the sound stops.',
    rule: {
      title: 'Two ways to get this wrong',
      // Counted against the 45-word core cap by the validator rather than here.
      body: 'One is leaving the sound off a plural, which turns three people into one. The other is putting it on a verb that never had it, and ten common verbs ending in -ir are in that second group.',
    },
    cards: [
      {
        promptLabel: 'he finishes',
        promptSound: 'eel fee-NEES',
        fr: 'il finit',
        ipa: '/il fi.ni/',
        tip: 'Nothing after fee-NEE. One person takes the short form.',
      },
      {
        promptLabel: 'they finish',
        promptSound: 'eel fee-NEE',
        fr: 'ils finissent',
        ipa: '/il fi.nis/',
        tip: 'One S at the end, and no extra syllable. Say it twice against the card above.',
      },
      {
        promptLabel: 'we finish',
        promptSound: 'noo fee-NEES',
        fr: 'nous finissons',
        ipa: '/nu fi.ni.sɔ̃/',
        tip: 'A whole syllable, and the same nasal vowel as nous parlons.',
      },
      {
        promptLabel: 'they choose',
        promptSound: 'el shwah-zee-SENT',
        fr: 'elles choisissent',
        ipa: '/ɛl ʃwa.zis/',
        tip: 'No second syllable on the end. The word stops on the S.',
      },
    ],
    drill: [
      { promptSay: 'il finit', opts: ['eel fee-NEES', 'eel fee-NEE', 'eel fee-nee-SUH'], correct: 1 },
      { promptSay: 'ils finissent', opts: ['eel fee-NEES', 'eel fee-NEE', 'eel fee-nee-SENT'], correct: 0 },
      { promptSay: 'nous finissons', opts: ['noo fee-NEES', 'noo fee-nee-SONN', 'noo fee-nee-SOHⁿ'], correct: 2 },
      { promptSay: 'elle choisit', opts: ['el shwah-ZEES', 'el shwah-ZEE', 'el shwah-zee-TUH'], correct: 1 },
      { promptSay: 'elles choisissent', opts: ['el shwah-ZEES', 'el shwah-ZEE', 'el shwah-zee-SENT'], correct: 0 },
      { promptSay: 'vous finissez', opts: ['voo fee-NEES', 'voo fee-nee-SEZ', 'voo fee-nee-SAY'], correct: 2 },
    ],
    // Four steps, one job each. `audio` is not optional: validateLesson refuses a
    // stepped trapDrill whose steps never reach the section's own audio, and
    // without it the wrong-then-right take would be authored and never played.
    steps: [
      { label: 'The rule', kind: 'rule', title: 'Two Ways To Get This Wrong' },
      { label: 'The traps', kind: 'cards', title: 'Four You Will Want To Say Wrong' },
      { label: 'Hear it', kind: 'audio', title: 'Wrong, Then Right' },
      { label: 'Prove it', kind: 'drill', title: 'Which One Did You Say?', gate: true },
    ],
  },

  {
    type: 'commonErrors',
    id: 's15-errors',
    // `swipe` and `size` are not decoration. MissionSection renders commonErrors
    // as its own swipe deck ONLY when `swipe` is set, and without it a1.01
    // mission 5 drew a blank screen on a device.
    swipe: true,
    size: 'lg',
    title: 'Three Ways The Number Goes Wrong',
    frSub: 'Trois pièges de nombre',
    layer: 'core',
    terms: ['theSound', 'singularThree'],
    say: 'None of these three stops you being understood. All three change how many people you meant.',
    errors: [
      {
        wrong: 'Saying « ils fee-NEE » for a group.',
        right: 'Saying « ils fee-NEES », with the S on the end.',
        why: 'The pronoun ils sounds exactly like il, so the S is the only thing carrying the number. Leave it off and you have said one person and been believed.',
      },
      {
        wrong: 'Writing « je finit » with a t.',
        right: 'Writing « je finis ».',
        why: 'The t belongs to il and to nowhere else in the singular. All three are said identically, so nothing you can hear will ever catch this one for you.',
      },
      {
        wrong: 'Saying « nous fee-NEES » for the nous form.',
        right: 'Saying « nous fee-nee-SOHⁿ ».',
        why: 'nous takes a whole syllable, not a single S. This one your ear would catch on somebody else, which is why it is worth fixing on yourself.',
      },
    ],
  },

  {
    // THE BOUNDARY, and it is one mission. The ten are NAMED and not one of them
    // is conjugated, right or wrong. See the corpus header for why the wrong form
    // is absent as well: nobody here holds the right form to replace it with.
    type: 'cardDeck',
    id: 's16-notmine',
    title: 'Ten That End In -IR And Are Not This',
    frSub: "Ce que ce n'est pas",
    hint: 'Swipe through the three cards.',
    render: 'deck',
    layer: 'core',
    size: 'lg',
    terms: ['notThisFamily', 'stem'],
    say: 'Read this one properly. Knowing a verb is not in the family is worth as much as building the ones that are.',
    cards: [
      {
        label: 'The other family',
        // "These take no extra sound at all" was the first draft and it is FALSE.
        // Measured while scoping the unit that will own this class: `il part`
        // is /paʁ/ and `ils partent` is /paʁt/, so the plural of a shedding verb
        // DOES put a sound on the end — the same shape this lesson teaches, by a
        // different spelling. What is true of all ten is only that none takes the
        // -iss-, which is what the `sub` already said. The head now says that and
        // nothing more.
        head: 'None of these takes the -iss-',
        fr: NOT_THIS_FAMILY.slice(0, 5).join(' · '),
        sub: 'a different model',
        body: 'They end in -ir and they build their plural another way. Run the machine from this lesson on them and you produce something no French speaker says.',
      },
      {
        label: 'And five more',
        head: 'Several are commoner than any of your ten',
        fr: NOT_THIS_FAMILY.slice(5, 10).join(' · '),
        sub: 'learn these as words, not as a pattern',
        // "the honest way to hold them" was the first draft and sons-alphabet.test.ts
        // caught it: the word is banned across the whole seed. House rule, and it
        // catches "honestly" too.
        body: `${NOT_THIS_FAMILY_HOMED.join(' and ')} have a unit of their own at ${unitRef(NOT_THIS_FAMILY_UNIT)}. The rest you will meet one at a time, which is how they are worth holding.`,
      },
      {
        label: 'How to tell',
        head: 'The ending will not tell you',
        // The old second sentence said "ten on these cards do not [grow the
        // sound]", which is false for the whole partir group and for venir and
        // tenir. Replaced with a concrete minimal pair out of this lesson's own
        // ten, which is both true and the sharpest way to say it.
        body: 'The last four letters do not settle it: ralentir takes the -iss- and sentir does not, and both end in -tir. This is the one thing here you learn verb by verb.',
      },
    ],
  },

  /* ── Act 5: out in the world ─────────────────────────────────────────── */

  {
    type: 'practice',
    id: 's17-speak',
    title: 'Say The Whole Sentence',
    frSub: 'À voix haute',
    layer: 'core',
    audio: { mode: 'mic', lang: 'fr-FR' },
    say: 'Pronoun and verb as one movement. On a plural, land the sound at the end and stop there.',
    skill: 'speak',
    itemIds: SPEAK_IDS,
  },

  {
    // THE DICTÉE IS THE OTHER HALF OF THE OWNS, AND ITS MODE IS NOT A FREE
    // CHOICE.
    //
    // dicteeMode() switches to WORD tiles above 16 letters, and word mode hands
    // every real word over pre-spelled: `finissent` would arrive as a tile and
    // the learner would never decide anything. `tôt` is the paradigm's frame word
    // because of this: `Ils finissent le travail.` is 21 letters and switches,
    // `Ils finissent tôt.` is 15 and does not. All eight targets spell from
    // LETTERS and the batch proves it through the real function.
    //
    // Seven of the eight are graded on exactly what the lesson teaches. The
    // eighth turns on the circumflex of `tôt`, which normalizeFr folds away, and
    // that is recorded in DICTEE_NEAR_MISS rather than left to be discovered.
    type: 'dictation',
    id: 's18-dictation',
    title: 'Spell What You Heard',
    frSub: 'La dictée',
    layer: 'core',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], maxPlays: 4, recordingId: 'rec-a2-10-paradigm' },
    say: 'Eight lines. Three of them the recording settles for you and five of them it does not, so read the pronoun.',
    itemIds: DICTATION_IDS,
  },

  {
    type: 'scenario',
    id: 's19-scenario',
    title: 'The Same Desk, A Week Later',
    frSub: 'À vous',
    layer: 'core',
    terms: ['theSound', 'nousOn'],
    say: 'The same shift desk. Every answer wants the right number on the end of a verb.',
    setting: 'You are back at the shift desk, and this time there are three of you and Karim has the folder open before you get there.',
    turns: [
      {
        ai: 'Rebonsoir. Alors, qui finit à six heures ce soir ?',
        en: 'Good evening again. So who finishes at six tonight?',
        user: 'Nous finissons à six heures.',
        userEn: 'We finish at six.',
        alts: [
          { fr: 'On finit à six heures, tous les trois.', en: 'The three of us finish at six.' },
          { fr: 'Nous finissons tôt ce soir.', en: 'We finish early tonight.' },
        ],
      },
      {
        ai: 'Trois places, alors. Et vos collègues, ils finissent aussi à six heures ?',
        en: 'Three seats, then. And your colleagues, do they finish at six too?',
        user: 'Oui, ils finissent à six heures.',
        userEn: 'Yes, they finish at six.',
        alts: [
          { fr: 'Oui, tous les deux.', en: 'Yes, both of them.' },
          { fr: 'Oui, ils finissent avec moi.', en: 'Yes, they finish with me.' },
        ],
      },
      {
        ai: 'Et le lundi ? Vous choisissez le bus de sept heures ?',
        en: 'And on Mondays? Do you take the seven o clock bus?',
        user: 'Le lundi, je choisis le bus de sept heures.',
        userEn: 'On Mondays I take the seven o clock bus.',
        alts: [
          { fr: 'Oui, le lundi je choisis sept heures.', en: 'Yes, on Mondays I pick seven.' },
          { fr: 'Le lundi, nous choisissons sept heures.', en: 'On Mondays we pick seven.' },
        ],
      },
      {
        ai: "Il faut remplir la feuille. Vous la remplissez maintenant ou demain ?",
        en: 'The sheet has to be filled in. Are you filling it in now or tomorrow?',
        user: 'Nous remplissons la feuille maintenant.',
        userEn: 'We are filling in the sheet now.',
        alts: [
          { fr: 'Je remplis la feuille maintenant.', en: 'I am filling in the sheet now.' },
          { fr: 'On remplit la feuille maintenant.', en: 'We are filling in the sheet now.' },
        ],
      },
      {
        ai: 'Parfait. Trois places à six heures, et le bus ralentit devant le portail.',
        en: 'Perfect. Three seats at six, and the bus slows down at the gate.',
        user: 'Merci beaucoup.',
        userEn: 'Thank you very much.',
        alts: [
          { fr: "Merci, c'est parfait.", en: 'Thank you, that is perfect.' },
          { fr: 'Merci. On arrive à six heures, alors.', en: 'Thank you. We will be there at six, then.' },
        ],
      },
    ],
  },

  {
    type: 'reading',
    id: 's20-reading',
    title: 'Half Past Five At The Depot',
    frSub: 'Cinq heures et demie au dépôt',
    layer: 'core',
    terms: ['theSound', 'nousOn'],
    // REQUIRED for the glossary to exist at all. MissionSection routes a reading
    // section to ReadingMission (and so to PassagePage) only when this flag is
    // set WITH questions.
    questionsInModal: true,
    say: 'Read it once for the shape. Every one of the six forms is in here. Tap any word you do not know.',
    // ONE LINE, deliberately. PassagePage does text.split(/(?<=[.!?»])\s+/) and
    // renders the pieces inline in a single TX, so every authored newline is
    // swallowed.
    //
    // THE A1 RULE, WHICH HOLDS AT A2 (Paul, 2026-08-04): if it is not inside
    // « », it is in English.
    text:
      'Half past five at the depot, and the minibus list is going round the room. '
      + '« Vous finissez tous à six heures ? » '
      + '« Moi, je finis à six heures. Karim et Léa finissent à sept heures. » '
      + 'Karim writes two times down and counts the empty seats again. '
      + '« Et le lundi ? » '
      + '« Le lundi, on finit plus tôt. Nous remplissons les papiers avant. » '
      + 'Two people behind you are still waiting to be asked. '
      + '« Bon. Les voitures ralentissent devant le portail. »',
    // Every entry is a single whitespace-delimited token that really appears
    // between the guillemets: the reader strips punctuation and lowercases before
    // matching, so an entry that is not a bare token is an underline that never
    // appears. MAX_GLOSS_WORDS is four and every key here is one word. Checked
    // through the REAL matcher in the test.
    glossary: [
      { word: 'finissez', en: 'finish', note: 'vous plus -issez, a whole syllable and impossible to miss.' },
      { word: 'finis', en: 'finish', note: 'je plus -is. Nothing reaches the ear, so only the moi in front tells you.' },
      { word: 'finissent', en: 'finish', note: 'Two people, and one S at the end of the verb says so.' },
      { word: 'finit', en: 'finishes', note: 'The short form, after on, which means we and still takes it.' },
      { word: 'remplissons', en: 'are filling in', note: 'nous plus -issons. The written we, with the syllable on it.' },
      { word: 'ralentissent', en: 'slow down', note: 'Plural, and nothing else in the sentence sounds plural at all.' },
    ],
    questions: [
      { q: 'Three verbs in this passage carry a sound at the end and two do not. Which two are the short ones?', a: 'je finis and on finit. Both are the singular form, and on finit means we, so the second one is the trap: it is a plural meaning wearing a singular sound.' },
      { q: '« Karim et Léa finissent à sept heures. » Which part of that sentence could you have heard as plural?', a: 'The verb, and only the verb. Two names in a row do not sound like a plural marker; the S at the end of finissent is what carries it.' },
      { q: 'The speaker says « on finit » and writes « nous remplissons » in the next breath. Why both?', a: 'They mean the same we. on is what gets said and nous is what gets written, and on takes the il form, so the spoken one puts no sound on the end.' },
    ],
  },

  /* ── Act 6: prove it ─────────────────────────────────────────────────── */

  {
    type: 'reviewDeck',
    id: 's21-review',
    title: 'The Whole System, One Deck',
    frSub: 'Révision',
    render: 'deck',
    layer: 'core',
    terms: ['stem', 'theSound', 'singularThree'],
    sheetId: 'sheet.a2.10.endings',
    say: 'Rate each card objectively. Again, hard, or easy. The ones you mark again come back.',
    cards: [
      { front: 'What does the plural of an -ir verb do to the sound?', back: `${REFRAME} One S for ils, a syllable for nous and vous.` },
      { front: 'How do you build any regular -ir verb?', back: 'Cut the last two letters off the naming form, then put the person on what is left.' },
      { front: 'The six endings, in sound order', back: ENDINGS.map((e) => e.ending).join(' · ') },
      { front: 'Which three give the ear nothing?', back: `${SILENT_ENDINGS.join(', ')}. One sound between all three of them.` },
      { front: 'Which three give it something?', back: `${GROWING_ENDINGS.join(', ')}. One S, then a syllable, then a syllable.` },
      { front: 'One colleague, finishing early', back: fr('fr.a2.verbes.183'), say: fr('fr.a2.verbes.183') },
      { front: 'Three colleagues, finishing early', back: fr('fr.a2.verbes.186'), say: fr('fr.a2.verbes.186') },
      { front: 'What you write for we', back: fr('fr.a2.verbes.184'), say: fr('fr.a2.verbes.184') },
      { front: 'What you say for we', back: fr('fr.a2.verbes.205'), say: fr('fr.a2.verbes.205') },
      { front: 'One woman, choosing', back: fr('fr.a2.verbes.187'), say: fr('fr.a2.verbes.187') },
      { front: 'Several women, choosing', back: fr('fr.a2.verbes.188'), say: fr('fr.a2.verbes.188') },
      { front: 'Why is je finis a spelling problem and not a sound problem?', back: 'Because je finis, tu finis and il finit are one sound. Only the page separates them.' },
      { front: 'A verb you were never taught: ils rougissent', back: 'Stem roug-, plural ending -issent. The machine works on anything in the family.' },
      { front: 'Ten verbs end in -ir and take none of this. Name three.', back: `${NOT_THIS_FAMILY.slice(0, 3).join(', ')}. There are ten of them and they are all common.` },
    ],
  },

  {
    type: 'progressCheck',
    id: 's22-progress',
    title: 'Where You Stand',
    frSub: 'Votre progression',
    say: 'One screen before the exam, so you know what you are walking into.',
    // The prose deliberately carries no counts. Every figure on this card is
    // derived below; typing one here as well would be two chances to be wrong on
    // one screen.
    body: 'You have taken a second naming form apart, put six endings on it, and heard which three of them survive the trip to somebody else\'s ear. You have used the pattern on a verb this lesson never showed you, and you know the ten that look identical and take none of it. What is left is the part that says whether it stuck. Each round is tied to one of the mistakes this lesson exists to stop, and failing a round gets you its drill before the next one starts. The drill is the teaching, not the punishment.',
    // Filled immediately after SECTIONS is built, from the journey itself.
    stats: [],
  },

  {
    type: 'quiz',
    id: 's23-quiz',
    title: 'The Exam',
    frSub: "L'examen",
    layer: 'core',
    passMark: 70,
    roundFailThreshold: 60,
    say: 'Five rounds. Miss too many in a round and you get a drill before the next one starts.',
    rounds: [
      {
        id: 'r1-the-machine',
        label: 'Building the form',
        // Round targets are ordered deliberately. drillForRound returns the FIRST
        // target that has a drill and then stops, so the first name here is what
        // a failing learner actually gets. Every round leads on a DIFFERENT
        // trigger, which is what makes all five drills reachable.
        targets: ['err-stem-lost', 'err-no-sound'],
        say: 'Two letters off, one person on.',
        questions: [
          {
            q: 'What is the stem of choisir?',
            format: 'mcq',
            opts: ['chois', 'choisi', 'choi', 'choisir'],
            correct: 0,
            why: 'The last two letters come off and nothing else moves. chois- takes all six endings without changing.',
            ref: 's04-machine',
          },
          {
            q: 'Write the form that goes with je, for the verb finir.',
            format: 'typeIn',
            accept: ['finis', 'je finis'],
            answer: 'finis',
            why: 'Stem fin-, je ending -is. The s is silent, so nothing about the sound would have told you it was there.',
            ref: 's04-machine',
          },
          {
            q: 'Fix this. You, about your shift: « Je finir à six heures. »',
            format: 'errorSpot',
            accept: ['Je finis à six heures', 'finis'],
            answer: 'Je finis à six heures.',
            why: 'The naming form cannot stand in a sentence. English lets a bare verb do this and French has no bare form at all, which is why the reflex is so strong.',
            ref: 's01-scene',
          },
          {
            q: 'You have never met the verb rougir, meaning to blush. Write the nous form.',
            format: 'typeIn',
            accept: ['rougissons', 'nous rougissons'],
            answer: 'rougissons',
            why: 'Stem roug-, nous ending -issons. You were not taught this verb, and that is what regular means.',
            ref: 's06-ten',
          },
          {
            q: 'Which of these four does NOT grow the extra sound in the plural?',
            format: 'mcq',
            opts: ['finir', 'dormir', 'choisir', 'grandir'],
            correct: 1,
            why: 'dormir ends in -ir and belongs to the other family. Ten common verbs do, and nothing in the ending tells you which is which.',
            ref: 's16-notmine',
          },
          {
            q: 'Ils ___ vite. (guérir)',
            format: 'typeIn',
            accept: ['guérissent', 'guerissent'],
            answer: 'guérissent',
            why: 'ils takes -issent. It puts one S at the end of the verb, which is the only thing separating this from il guérit.',
            ref: 's05-hear',
          },
        ],
      },
      {
        id: 'r2-the-plural',
        label: 'The sound on the end',
        targets: ['err-no-sound', 'err-hear-number'],
        say: 'Three people or one. Put the sound where it belongs.',
        questions: [
          {
            q: 'Listen. One person, or several?',
            format: 'listenChoose',
            audio: { mode: 'tts', lang: 'fr-FR', clip: 'Ils finissent tôt.', recordingId: 'rec-a2-10-contrast' },
            say: 'Ils finissent tôt.',
            opts: ['One', 'It is not a real form', 'Several', 'Either, the sound does not say'],
            correct: 2,
            why: 'An S arrived at the end of the verb. The pronoun ils is said exactly like il, so that S is the whole of the evidence.',
            ref: 's09-ear',
          },
          {
            q: 'Which ending does nous take on a regular -ir verb?',
            format: 'mcq',
            opts: ['-issons', '-ons', '-issent', '-issez'],
            correct: 0,
            why: `The -iss- goes in first and then the ending ${unitRef('a2.01')} gave you. That is why it is a whole syllable longer than the singular.`,
            ref: 's05-hear',
          },
          {
            q: 'Nous ___ ensemble. (réfléchir)',
            format: 'typeIn',
            accept: ['réfléchissons', 'reflechissons'],
            answer: 'réfléchissons',
            why: 'Stem réfléch-, nous ending -issons. Both accents are in the stem, so nothing about the ending is unusual.',
            ref: 's11-both',
          },
          {
            q: 'Listen. Which is on the page?',
            format: 'listenChoose',
            audio: { mode: 'tts', lang: 'fr-FR', clip: 'Elles choisissent.', recordingId: 'rec-a2-10-pairs' },
            say: 'Elles choisissent.',
            opts: ['Elle choisit.', 'Elles choisissent.', 'Both are said exactly like this', 'Neither of these'],
            correct: 1,
            why: 'The verb ended in an S sound, so it is the plural. On an -er verb this pair would have been undecidable and you would have had to read it.',
            ref: 's08-grow',
          },
          {
            q: 'Les enfants ___ longtemps. (applaudir)',
            format: 'typeIn',
            accept: ['applaudissent'],
            answer: 'applaudissent',
            why: 'A plural noun subject takes the same ending a plural pronoun does. The S at the end is the only audible sign of it.',
            ref: 's08-grow',
          },
          {
            q: 'Fix this. Two colleagues, at six: « Ils finit tôt. »',
            format: 'errorSpot',
            accept: ['Ils finissent tôt', 'finissent'],
            answer: 'Ils finissent tôt.',
            why: 'The written s of ils is silent, so the verb has to carry the number on its own. Without the -iss- this says one person out loud.',
            ref: 's12-write',
          },
        ],
      },
      {
        id: 'r3-by-ear',
        label: 'By ear',
        targets: ['err-hear-number', 'err-singular-spelling'],
        say: 'Three of these the sound settles for you. One of them it will not.',
        questions: [
          {
            q: 'Listen. How many people?',
            format: 'listenChoose',
            audio: { mode: 'tts', lang: 'fr-FR', clip: 'Il finit tôt.', recordingId: 'rec-a2-10-contrast' },
            say: 'Il finit tôt.',
            opts: ['Several', 'Two, certainly', 'One', 'The sound does not say'],
            correct: 2,
            why: 'Nothing arrived at the end of the verb. On an -ir verb that settles it, which is the one thing an -er verb could never do for you.',
            ref: 's09-ear',
          },
          {
            q: 'Listen. elle and elles are said the same. What told you it was several?',
            format: 'listenChoose',
            audio: { mode: 'tts', lang: 'fr-FR', clip: 'Elles grandissent vite.', recordingId: 'rec-a2-10-pairs' },
            say: 'Elles grandissent vite.',
            opts: ['The pronoun', 'The word vite', 'Nothing did', 'A sound at the end of the verb'],
            correct: 3,
            why: 'The verb, and nothing else in the sentence. This is the task that was impossible last lesson and is possible here.',
            ref: 's08-grow',
          },
          {
            q: 'Listen. Who is finishing?',
            format: 'listenChoose',
            audio: { mode: 'tts', lang: 'fr-FR', clip: 'On finit à six heures.', recordingId: 'rec-a2-10-paradigm' },
            say: 'On finit à six heures.',
            opts: ['Several, and the verb does not say so', 'One person, certainly', 'Several, and the verb says so', 'You cannot tell at all'],
            correct: 0,
            why: 'on means we and takes the il form, so the verb sounds singular and is not. This is the one place the rule will not help you.',
            ref: 's10-ear2',
          },
          {
            q: 'You hear a verb ending in an S sound. What does that tell you?',
            format: 'mcq',
            opts: ['Nothing at all', 'It is plural', 'It is singular', 'It is a question'],
            correct: 1,
            why: 'On a regular -ir verb, yes. That S is the -issent ending and no singular form has one.',
            ref: 's08-grow',
          },
          {
            q: 'Tap the letters you do not say.',
            format: 'tapSilent',
            word: 'finit',
            correct: 't',
            why: 'Just the t. finis and finit are said identically, which is why the singular has to be settled on the page.',
            ref: 's07-onesound',
          },
          {
            q: 'Which pair could your ear NOT separate?',
            format: 'mcq',
            opts: ['il finit against ils finissent', 'nous finissons against vous finissez', 'elle choisit against elles choisissent', 'je finis against il finit'],
            correct: 3,
            why: `Both are the short form. Three spellings and one sound is still true in the singular, and it is the half of ${unitRef('a2.01')} this lesson keeps.`,
            ref: 's07-onesound',
          },
        ],
      },
      {
        id: 'r4-the-singular',
        label: 'The three that hide',
        targets: ['err-singular-spelling', 'err-no-sound'],
        say: 'The recording is no use here. Read the pronoun.',
        questions: [
          {
            q: 'Il ___ le formulaire. (remplir)',
            format: 'typeIn',
            accept: ['remplit'],
            answer: 'remplit',
            why: 'il takes -it. It is said exactly like remplis, so the pronoun in front is the only thing that decides it.',
            ref: 's07-onesound',
          },
          {
            q: 'Tu ___ le formulaire. (remplir)',
            format: 'typeIn',
            accept: ['remplis'],
            answer: 'remplis',
            why: 'tu takes -is, the same spelling je takes. Two of the three singular forms are the same on the page as well as in the air.',
            ref: 's12-write',
          },
          {
            q: 'Je ___ tôt. (finir)',
            format: 'typeIn',
            accept: ['finis'],
            answer: 'finis',
            why: 'je takes -is. Nothing you can hear separates this from finit, so it is settled by the pronoun and by nothing else.',
            ref: 's05-hear',
          },
          {
            q: 'Fix this. One woman, at the desk: « Elle choisis. »',
            format: 'errorSpot',
            accept: ['Elle choisit', 'choisit'],
            answer: 'Elle choisit.',
            why: 'elle takes the -it spelling. Both are said the same, which is why this survives being read back aloud without anybody noticing.',
            ref: 's09-ear',
          },
          {
            q: 'Fix this. You, about yourself: « Je finit tôt. »',
            format: 'errorSpot',
            accept: ['Je finis tôt', 'finis'],
            answer: 'Je finis tôt.',
            why: 'The t belongs to il. This is the mistake the dictée exists to catch, because no recording ever will.',
            ref: 's18-dictation',
          },
          {
            q: 'je finis, tu finis, il finit. How many different sounds?',
            format: 'mcq',
            opts: ['Three', 'Two', 'One', 'It depends on the verb'],
            correct: 2,
            why: 'One, for every regular -ir verb there is. The singular of this pattern behaves exactly as the whole of the last pattern did.',
            ref: 's07-onesound',
          },
        ],
      },
      {
        id: 'r5-the-boundary',
        label: 'Where the family stops',
        targets: ['err-over-iss', 'err-stem-lost'],
        say: 'Ending in -ir is not enough. Two of these are about the ones that are not yours.',
        questions: [
          {
            q: 'Which of these four verbs is in this lesson family?',
            format: 'mcq',
            opts: ['sortir', 'servir', 'courir', 'obéir'],
            correct: 3,
            why: 'obéir grows the extra sound and the other three take none of it. Nothing in the spelling of the naming form tells you that.',
            ref: 's16-notmine',
          },
          {
            q: 'partir, sortir and dormir all end in -ir. What do they take in the plural?',
            format: 'mcq',
            opts: ['No -iss- at all', '-issent', '-issons', 'It depends on the verb'],
            correct: 0,
            why: 'None of it. They are a different model and they are common enough that you will meet them before you meet half of your ten.',
            ref: 's16-notmine',
          },
          {
            q: 'Vous ___ aux règles. (obéir)',
            format: 'typeIn',
            accept: ['obéissez', 'obeissez'],
            answer: 'obéissez',
            why: 'vous takes -issez, a whole syllable. The accent on the stem is not what is being asked; the syllable on the end is.',
            ref: 's08-grow',
          },
          {
            q: 'Say it: the three of you finish early.',
            format: 'speak',
            target: 'Nous finissons tôt.',
            why: 'The middle of the word is the part that says three. Say it as one movement and land the last syllable, not the verb.',
            ref: 's17-speak',
          },
          {
            q: 'Fix this. The cars, at the gate: « Les voitures ralentit ici. »',
            format: 'errorSpot',
            accept: ['Les voitures ralentissent ici', 'ralentissent'],
            answer: 'Les voitures ralentissent ici.',
            why: 'A plural noun subject takes the plural verb, and here it is the verb that carries the number: voitures sounds exactly like voiture.',
            ref: 's08-grow',
          },
          {
            q: 'Listen. Which one is it?',
            format: 'listenChoose',
            audio: { mode: 'tts', lang: 'fr-FR', clip: 'Nous finissons tôt.', recordingId: 'rec-a2-10-paradigm' },
            say: 'Nous finissons tôt.',
            opts: ['On finit tôt.', 'Nous finissons tôt.', 'Il finit tôt.', 'Je finis tôt.'],
            correct: 1,
            why: 'Only one of these four carries a whole extra syllable. The other three are the short form with three different pronouns in front.',
            ref: 's05-hear',
          },
        ],
      },
    ],
  },

  {
    type: 'roundup',
    id: 's24-roundup',
    title: 'What You Can Do Now',
    frSub: 'Ce que vous savez faire',
    say: 'Four things, and then the lesson that finishes the set.',
    body: `You can build the present tense of any regular -ir verb, including ones nobody has shown you. More than that, you can do something with your ears that ${A201_BACKREF} could not ask of you: hear one person against several from the verb alone, with no pronoun to help. The half of that lesson that still holds is the singular, where three spellings are one sound and the page is the only place they differ. ${BOTH_HALVES} The next unit takes the third and last set of endings, and after it there is no regular pattern left to learn.`,
    points: [
      `${REFRAME}`,
      'Cut the last two letters off the naming form, then put the person on what is left.',
      `${SILENT_ENDINGS.join(', ')} give the ear nothing. ${GROWING_ENDINGS.join(', ')} do.`,
      'Ten common verbs end in -ir and take none of this, and on always sounds singular.',
    ],
  },
];

/** The stored respelling of an imported verb, unbracketed, for a card that adds
 *  its own brackets. Declared as a function rather than inlined so the deck card
 *  above can be built before the display module's map is walked. */
function bareRespellOf(verb: string): string {
  return verbRespell(verb).replace(/^\[|\]$/g, '');
}

/* ─── The progress card counts the journey rather than restating it ────────
 *
 * Derived here rather than typed. It throws rather than degrades: a progress card
 * that silently reports "0 of 0" is worse than a build that stops.             */
{
  const ix = SECTIONS.findIndex((s) => (s as { id?: string }).id === 's22-progress');
  const card = SECTIONS[ix];
  const quiz = SECTIONS.find((s) => s.type === 'quiz');
  if (!card || card.type !== 'progressCheck' || !quiz || quiz.type !== 'quiz') {
    throw new Error('a2.10.l1: the progress card or the quiz is missing, so the card cannot count what is not there');
  }
  card.stats = [
    { k: 'Verbs you can build', v: String(THE_TEN.length) },
    { k: 'Endings you can hear', v: `${GROWING_ENDINGS.length} of ${ENDINGS.length}` },
    // `ix` is the count of sections BEFORE this one, which is exactly how many
    // missions the learner has finished when they reach it.
    { k: 'Missions done', v: `${ix} of ${SECTIONS.length}` },
    { k: 'Exam rounds ahead', v: String(quiz.rounds?.length ?? 0) },
  ];
}

/* ─── Acts ─────────────────────────────────────────────────────────────────
 *
 * Six, and the shape is the doctrine's: scene, paradigm, Owns, trap, production,
 * proof. The Owns act is the heaviest by mission count, SEVEN against the
 * paradigm's three, and it holds both `listening` missions. The paradigm act is
 * deliberately thin: a2.01 already taught the method, and re-deriving it here
 * would spend missions on last week's lesson.
 *
 * `estScreens` is what the mission actually costs, not a guess rounded to a nice
 * number, because it is divided by the rest points to check no stretch runs past
 * the checkpoint-spacing limit of 22.                                          */

const ACTS: LessonAct[] = [
  {
    id: 'act1',
    title: 'The lesson that said the opposite',
    sections: ['s01-scene', 's02-goals', 's03-inverted'],
    milestone: 'You know what got booked wrong, and that this lesson contradicts the last one on purpose.',
    estScreens: 18,
    restPoints: ['s01-scene/after-break'],
  },
  {
    id: 'act2',
    title: 'The same machine, six new endings',
    sections: ['s04-machine', 's05-hear', 's06-ten'],
    milestone: 'You can build all six forms of any of the ten, and you have heard the pair the lesson turns on.',
    estScreens: 20,
    restPoints: ['s06-ten/halfway'],
  },
  {
    id: 'act3',
    title: 'What the ear gets, and what it does not',
    sections: ['s07-onesound', 's08-grow', 's09-ear', 's10-ear2', 's11-both', 's12-write', 's13-flash'],
    milestone: 'You can name the number from the verb, and write a singular ending your ear never gave you.',
    estScreens: 44,
    restPoints: ['s09-ear/halfway', 's11-both/halfway'],
  },
  {
    id: 'act4',
    title: 'Where the family stops',
    sections: ['s14-trap', 's15-errors', 's16-notmine'],
    milestone: 'You put the sound where it belongs, and you know the ten verbs that never take it.',
    estScreens: 21,
    restPoints: ['s14-trap/after-cards'],
  },
  {
    id: 'act5',
    title: 'Out in the world',
    sections: ['s17-speak', 's18-dictation', 's19-scenario', 's20-reading'],
    milestone: 'You have said all six out loud and spelled the three the recording could not settle.',
    estScreens: 42,
    restPoints: ['s17-speak/halfway', 's18-dictation/halfway'],
  },
  {
    id: 'act6',
    title: 'Prove it',
    sections: ['s21-review', 's22-progress', 's23-quiz', 's24-roundup'],
    milestone: 'Lesson complete. The next unit is the last set of regular endings.',
    estScreens: 48,
    restPoints: ['s21-review/halfway', 's23-quiz/after-r2', 's23-quiz/after-r4'],
  },
];

/* ─── Deck tranches ────────────────────────────────────────────────────────
 *
 * One slice per act, index-aligned. An item is released the act it is TAUGHT, not
 * the act it is first mentioned: releasing the whole set at mission one turns the
 * flashcard hub into a wall on the morning the learner is least able to read it.
 * Acts 1, 4 and 6 release nothing because they teach no new item.               */

const DECK_TRANCHE: string[][] = [
  // Act 1 releases NOTHING. The scene runs on display strings: the sentence that
  // went down as one is `Je finis à six heures.`, which is not a corpus row,
  // because a row is released to spaced repetition and this lesson does not drill
  // the sentence somebody got wrong.
  [],
  // Act 2: the paradigm and the ten infinitives.
  [...PARADIGM_IDS, ...THE_TEN.map(verbId)],
  // Act 3: the pairs and the singular triple, both of which act 3 puts on screens.
  [...familyIds('pair'), ...familyIds('hidden')],
  [],
  // Act 5: the applied sentences, released once the system that builds them has
  // been given. Every one of them is named by id in s17-speak.
  [...familyIds('apply')],
  [],
];

/* ─── Error triggers and their drills ──────────────────────────────────────
 *
 * FIVE triggers, five drills, five rounds, and each round leads on a DIFFERENT
 * trigger. That is deliberate: `drillForRound` returns the first target that has
 * a drill and then stops, so a drill that is never named first can never fire.
 * a1.05 ships two such drills and its own test fails on them today.             */

const ERROR_TRIGGERS: ErrorTrigger[] = [
  {
    id: 'err-stem-lost',
    description: 'Reaches for the naming form under pressure, or cuts the wrong amount off it: je finir, je fin.',
    detectOn: ['s01-scene', 's04-machine', 's23-quiz/r1-the-machine'],
    drill: 'drill-cut-the-ir',
    retest: 'retest-cut-the-ir',
  },
  {
    id: 'err-no-sound',
    description: 'Builds a plural without the -iss-, so a sentence about several people arrives sounding like one.',
    detectOn: ['s08-grow', 's12-write', 's23-quiz/r2-the-plural'],
    drill: 'drill-plural-sound',
    retest: 'retest-plural-sound',
  },
  {
    id: 'err-hear-number',
    description: 'Tries to name the number from the pronoun, which for il against ils and elle against elles is not information the sound carries.',
    detectOn: ['s09-ear', 's10-ear2', 's23-quiz/r3-by-ear'],
    drill: 'drill-hear-number',
    retest: 'retest-hear-number',
  },
  {
    id: 'err-singular-spelling',
    description: 'Writes the wrong one of finis, finis and finit, because no sound distinguishes them.',
    detectOn: ['s07-onesound', 's18-dictation', 's23-quiz/r4-the-singular'],
    drill: 'drill-singular-three',
    retest: 'retest-singular-three',
  },
  {
    id: 'err-over-iss',
    description: 'Puts the extra sound on a verb that never had it, because the naming form looks identical.',
    detectOn: ['s14-trap', 's16-notmine', 's23-quiz/r5-the-boundary'],
    drill: 'drill-family-or-not',
    retest: 'retest-family-or-not',
  },
];

const DRILLS: LessonDrill[] = [
  {
    id: 'drill-cut-the-ir',
    title: 'Naming form in, stem out',
    format: 'flashcard',
    coach: 'The naming form is on the left. Say the stem out loud before you turn the card.',
    pairs: THE_TEN.slice(0, 6).map((v) => [v, verbStem(v)] as [string, string]),
  },
  {
    id: 'retest-cut-the-ir',
    title: 'One more time',
    format: 'mcq',
    q: 'What is left of applaudir once the ending comes off?',
    opts: ['applaudi', 'applaud', 'applau'],
    correct: 1,
    why: 'The last two letters, and nothing else. applaud- takes all six endings without moving.',
  },
  {
    id: 'drill-plural-sound',
    title: 'Which person, and what arrives',
    format: 'flashcard',
    coach: 'The person is on the left. Say the ending, then say what your ear would get from it.',
    pairs: ENDINGS.map((e) => [e.person, `${e.ending}, and you hear ${e.heard}`] as [string, string]),
  },
  {
    id: 'retest-plural-sound',
    title: 'One more time',
    format: 'mcq',
    q: 'Ils ___ vite. (grandir)',
    opts: ['grandit', 'grandissent', 'grandissons'],
    correct: 1,
    why: 'ils takes -issent, which puts one S at the end of the verb. Without it the sentence says one child.',
  },
  {
    id: 'drill-hear-number',
    title: 'One person, or several?',
    format: 'sort',
    buckets: ['One person', 'Several'],
    // Item ids, not display strings: a drill scores against the corpus, so it
    // plays the same audio and reads the same spelling as every other card that
    // teaches these. Passing display strings here validates as broken ids.
    //
    // Every id here is a PRONOUN-BLIND pair, which is the point: the pronoun
    // sounds the same on both sides and only the verb settles it.
    items: [
      'fr.a2.verbes.183', 'fr.a2.verbes.186',
      'fr.a2.verbes.187', 'fr.a2.verbes.188',
      'fr.a2.verbes.189', 'fr.a2.verbes.190',
      'fr.a2.verbes.191', 'fr.a2.verbes.192',
    ],
    coach: 'Play each one and listen at the end of the verb. A sound there means several, and nothing there means one.',
  },
  {
    id: 'retest-hear-number',
    title: 'One more time',
    format: 'mcq',
    q: 'You hear a verb with nothing at the end, and no pronoun. Who is doing it?',
    opts: ['One person', 'Several people', 'The sound does not say'],
    correct: 0,
    why: 'On a regular -ir verb the plural always puts something there, so an empty ending means the singular. That was not true last lesson.',
  },
  {
    id: 'drill-singular-three',
    title: 'Is it -is, or is it -it?',
    format: 'sort',
    buckets: ['Ends in -is', 'Ends in -it'],
    items: [
      'fr.a2.verbes.181', 'fr.a2.verbes.182', 'fr.a2.verbes.183',
      'fr.a2.verbes.193', 'fr.a2.verbes.194', 'fr.a2.verbes.195',
    ],
    coach: 'These six are three sounds and six spellings. Read the pronoun, because the recording will not help you here.',
  },
  {
    id: 'retest-singular-three',
    title: 'One more time',
    format: 'mcq',
    q: 'Which of the three singular forms takes a t?',
    opts: ['je', 'tu', 'il, elle and on'],
    correct: 2,
    why: 'Only the third one. je and tu both take -is, and all three are said exactly the same way.',
  },
  {
    id: 'drill-family-or-not',
    title: 'In the family, or not?',
    format: 'flashcard',
    coach: 'A naming form on the left. Say whether the plural grows the extra sound before you turn the card.',
    pairs: [
      ['finir', 'in the family, and the plural grows the sound'],
      ['partir', 'not this family, and the plural grows nothing'],
      ['choisir', 'in the family'],
      ['dormir', 'not this family'],
      ['obéir', 'in the family'],
      ['sortir', 'not this family'],
      ['ralentir', 'in the family'],
      ['courir', 'not this family'],
    ],
  },
  {
    id: 'retest-family-or-not',
    title: 'One more time',
    format: 'mcq',
    q: 'Which of these three is in the family this lesson teaches?',
    opts: ['servir', 'réussir', 'sentir'],
    correct: 1,
    why: 'Only réussir. The other two end in -ir and take none of this, and the naming form gives you no way to tell.',
  },
];

/* ─── Reference sheets ─────────────────────────────────────────────────────
 *
 * Two. The density validator refuses a `table` at layer 'core' outright, and
 * `tapTable` is not in ownsLayout() so the in-flow version renders inside a
 * scrolling page and anything past about six rows runs off the bottom. The full
 * versions live here, at layer 'deep', where density is deliberately fine.
 *
 * The endings sheet is where the CANONICAL pronoun order lives. The in-flow
 * tapTable is ordered by sound so the contrast pair can be adjacent, and that
 * departure is only safe because the ordinary order is one tap away.
 *
 * ReferenceSheet.tsx draws `teach`, `letterGrid` and `table` and NOTHING ELSE. A
 * `cheatSheet` in here would draw its title and no rows, which a1.13 ships today.
 * The batch refuses any other section type in a sheet.                          */

const SHEETS: ReferenceSheet[] = [
  {
    id: 'sheet.a2.10.endings',
    title: 'The -IR endings, in full',
    layer: 'deep',
    contains: ['All nine pronouns with their ending', 'What each one sounds like', 'The three that hide, listed'],
    sections: [
      {
        type: 'table',
        id: 'sheet-endings-set',
        title: 'The six endings, in sound order',
        layer: 'deep',
        cols: ['Person', 'Ending', 'What you hear'],
        rows: ENDINGS.map((e) => [e.person, e.ending, e.heard]),
      },
      {
        type: 'table',
        id: 'sheet-endings-paradigm',
        title: 'finir, all nine pronouns, in the usual order',
        layer: 'deep',
        cols: ['Pronoun', 'finir', 'Sounds like', 'English'],
        rows: [
          ["je / j'", 'finis', '[zhuh fee-NEE]', 'I finish'],
          ['tu', 'finis', '[tü fee-NEE]', 'you finish, one person, close'],
          ['il', 'finit', '[eel fee-NEE]', 'he finishes'],
          ['elle', 'finit', '[el fee-NEE]', 'she finishes'],
          ['on', 'finit', '[ohⁿ fee-NEE]', 'we finish, said out loud'],
          ['nous', 'finissons', '[noo fee-nee-SOHⁿ]', 'we finish, written'],
          ['vous', 'finissez', '[voo fee-nee-SAY]', 'you finish, politely or plural'],
          ['ils', 'finissent', '[eel fee-NEES]', 'they finish, any group with a man in it'],
          ['elles', 'finissent', '[el fee-NEES]', 'they finish, all women'],
        ],
      },
      {
        type: 'teach',
        id: 'sheet-endings-both',
        title: 'The two halves, and where the line falls',
        layer: 'deep',
        body: `${BOTH_HALVES} In the singular, je finis, tu finis and il finit are three spellings and one sound, exactly as je parle, tu parles, il parle and ils parlent were four spellings and one sound in ${A201_BACKREF}. Nothing there has been withdrawn: out loud the singular of an -ir verb still tells you nothing about who is speaking, and the pronoun in front is still carrying it. What has changed is that the plural stopped joining them. ils finissent puts one S at the end of the verb, and the word is still two syllables, so it is a consonant that arrives rather than a beat. nous finissons and vous finissez each add a whole syllable, which nobody could miss. So three of the six now reach the ear, and one of those three is the first singular against plural pair in this course that a learner can settle without reading the page. The one place this does not hold is on. It means we, it takes the il form, and it is what almost every French speaker actually says, so the commonest spoken plural in the language sounds exactly like one person. That is not an exception to the rule so much as a reminder of what the rule is about: the rule is about the FORM, and on is grammatically singular.`,
      },
      {
        type: 'teach',
        id: 'sheet-endings-next',
        title: 'What carries forward',
        layer: 'deep',
        body: 'The method has not changed since the last unit and it will not change in the next one: find the stem, add the person. What each unit gives you is a different short set of endings to add. The one after this takes the third and last regular pattern, and after it there is no regular set left to learn, only verbs that had to be memorised outright. The habit worth carrying out of this lesson is a listening habit rather than a spelling one. You have now met a verb whose ending tells you something, so from here on the question at the end of a French verb is not whether you heard anything, it is what you heard. And you have met the reason that question has a limit: the naming form of a verb does not tell you which family it is in, so ten of the commonest verbs in the language end in -ir and take none of this.',
      },
    ],
  },
  {
    id: 'sheet.a2.10.ten',
    title: 'The ten verbs',
    layer: 'deep',
    contains: ['All ten with their stem', 'What each one means', 'The ten that end in -ir and are not here'],
    sections: [
      {
        type: 'table',
        id: 'sheet-ten-table',
        title: 'Ten regular -ir verbs',
        layer: 'deep',
        cols: ['Verb', 'Stem', 'Meaning'],
        rows: THE_TEN.map((v) => [v, verbStem(v), verbEn(v)]),
      },
      {
        type: 'teach',
        id: 'sheet-ten-why',
        title: 'Why these ten, and the ten that are not here',
        layer: 'deep',
        body: `Every verb here builds all six of its present-tense forms from one stem plus the six endings on the other sheet, so one pattern gives you ten verbs and sixty forms, and it keeps working on verbs nobody has shown you: rougir, punir, salir, bâtir, agir and vieillir all behave identically. That is not true of every verb ending in -ir, and the exceptions are not rare ones. ${NOT_THIS_FAMILY.join(', ')} all end in -ir and not one of them takes the extra sound anywhere in its present tense. Several of them are more frequent than anything on the list above, which is the awkward part: you will meet the exceptions before you have finished practising the rule. Nothing in the naming form separates the two groups, so this is the one thing in the lesson that is learnt verb by verb rather than worked out. ${NOT_THIS_FAMILY_HOMED.join(' and ')} have a unit of their own at ${unitRef(NOT_THIS_FAMILY_UNIT)}. The others are worth treating as individual words for now: recognising that a verb is not in this family is most of the benefit, because it stops you producing a form that does not exist.`,
      },
    ],
  },
];

export const VERBES_IR_LESSON: Lesson = {
  id: 'a2.10.l1',
  unitId: 'a2.10',
  // The lesson's index WITHIN its unit, not its place in the track.
  seq: 1,
  title: 'Les verbes en -IR',
  level: 'a2',
  // missions.ts derives the eyebrow from unit.seq at render time
  // (`${level} · LEÇON ${String(unit.seq).padStart(2, '0')}`), and a2.10 sits at
  // seq "3" — a STRING in the unit body, which pads to "03". The stored value is
  // a fallback and has to agree with what the renderer computes, or the two
  // disagree the moment something reads this field instead. The batch checks it
  // against the live unit rather than trusting this comment.
  tag: 'A2 · LEÇON 03',
  intro:
    'The second of the three regular patterns, and the first verb in this course whose ending tells your ear something. Six endings, three of which arrive as a sound, and one of those three is the difference between one person and several.',

  sections: SECTIONS,
  itemIds: ITEM_IDS,
  // v2, and the reason is the same one a2.01 recorded at its own v3->v4. v1 was
  // applied to Postgres and then corrected before it went anywhere:
  // sons-alphabet.test.ts caught the word "honest" on the s16-notmine card, which
  // is banned across the whole seed. The batch's own version guard then refuses
  // to overwrite v1 with a DIFFERENT v1, which is the guard doing its job: the
  // alternative is Postgres and the seed both saying "v1" and holding different
  // content, which is the drift this project has lost work to twice. So the
  // counter moves rather than the guard being relaxed.
  //
  // v3 is a CORRECTNESS fix on s16-notmine, found while scoping the unit that
  // will own the class this card hands over. Two strings on that card overstated
  // the boundary: the head said the ten "take no extra sound at all" and the last
  // card said "ten on these cards do not [grow the sound]". Both are false for
  // the shedding group — `il part` /paʁ/ against `ils partent` /paʁt/ puts a
  // consonant on the end, which is THIS LESSON'S OWN RULE arriving by a different
  // spelling. What is true of all ten is that none takes the -iss-. Left as it
  // was, the card would have taught against its own successor unit.
  version: 5,

  grammarAssumed: [
    'The six subject pronouns and the nine they cover, introduced in a1.05',
    'on takes third-person-singular agreement, introduced in a1.05',
    'The present tense of regular -er verbs as a stem plus six endings, introduced in a2.01',
    'That -e, -es and -ent are silent and -ons and -ez are not, introduced in a2.01',
    'nous as the written first-person plural against on as the spoken one, introduced in a2.01',
  ],
  grammarIntroduced: [
    'The present tense of regular -ir verbs, as a stem plus six endings',
    'That -is, -is and -it are silent and -issent, -issons and -issez are not',
    'That the plural of a regular -ir verb is audible where the singular is not',
    'That the singular of a regular -ir verb is three spellings and one sound',
    'That a verb ending in -ir is not necessarily in this family',
  ],

  features: ['roleplay', 'voiceflash'],
  scenarioId: undefined,

  overview: {
    titleEn: 'Regular -IR Verbs',
    subFr: 'Les verbes en -IR',
    introFr: "Le deuxième des trois modèles réguliers. Six terminaisons, dont trois s'entendent.",
    minutes: 28,
    difficulty: 2,
    glyph: 'Ir',
    screens: 193,
  },

  acts: ACTS,
  reframe: REFRAME,
  errorTriggers: ERROR_TRIGGERS,
  drills: DRILLS,
  sheets: SHEETS,
  deckTranche: DECK_TRANCHE,
  terms: VERBES_IR_TERMS,

  audio: {
    defaultLang: 'fr-FR',
    speeds: [1.0, 0.65],
    coachVoice: 'coach-en-warm',
    interfaceSounds: ['correct', 'incorrect', 'checkpoint'],
    // ── The audio decisions that cannot be recovered later ─────────────────
    //
    // Written here AND pinned by a2-10-verbes-ir.test.ts, because a constraint on
    // how something is recorded becomes invisible the moment the clip is
    // delivered. The first of these is the most important instruction in the
    // lesson.
    recorded: [
      {
        id: 'rec-a2-10-contrast',
        desc: 'IL FINIT AND ILS FINISSENT, ONE CONTINUOUS TAKE, ONE VOICE, RECORDED ADJACENTLY AND IN THAT ORDER, WITH NO TEACHING PAUSE BETWEEN THEM. This is the single most important instruction in this lesson. The two are one sound apart and that sound is a final S, not a syllable: eel fee-NEE, then eel fee-NEES. Do not lengthen the plural, do not lean on the ending, do not add the faintest vowel after the S, and do not slow down for the second one. The difference must be exactly the size it is in ordinary speech, because the whole claim of the lesson is that a learner can catch it at conversational pace. RECORDED APART, IN TWO SESSIONS, THE LEARNER COMPARES TWO PERFORMANCES INSTEAD OF TWO FORMS and the teaching is lost: any drift in pace, pitch or emphasis between the halves will be heard as the difference, and the real difference will not be. The same instruction applies to every pair in this clip list, and each pair is one take.',
        clipIds: ['il finit', 'ils finissent', 'Il finit tôt.', 'Ils finissent tôt.', 'Elle choisit.', 'Elles choisissent.'],
      },
      {
        id: 'rec-a2-10-paradigm',
        desc: 'All six forms as one continuous take, in the order the table shows them (je, tu, il, ils, nous, vous), by one voice at one speed, then the six full sentences in the same take. The first three must be INDISTINGUISHABLE from each other, because they are: three spellings and one sound. The fourth adds one S and nothing else. The last two add a whole syllable each and should sound ordinary rather than emphasised: -issons ends on a nasal vowel with no N sound on the end of it. Do not stress the verb anywhere; the weight belongs at the end of the phrase.',
        clipIds: ['Je finis tôt.', 'Tu finis tôt.', 'Il finit tôt.', 'Ils finissent tôt.', 'Nous finissons tôt.', 'Vous finissez tôt.', 'On finit à six heures.', 'Nous finissons à six heures.'],
      },
      {
        id: 'rec-a2-10-hidden',
        desc: 'THE SINGULAR TRIPLE, IN ONE TAKE, AND THE THREE MUST BE INDISTINGUISHABLE. je finis, tu finis, il finit, then je remplis, tu remplis, il remplit. This is the opposite instruction from the usual one and it is the same instruction the contrast clip carries from the other side: do not help. Do not differentiate them, do not touch the final letter, do not let the t of finit surface. If a listener can tell any of these three apart from the audio alone, the recording has taught the opposite of what the lesson teaches. Read them at conversational pace, one after another, with no pause for teaching.',
        clipIds: ['je finis', 'tu finis', 'il finit', 'Je finis tôt.', 'Tu finis tôt.', 'Il finit tôt.', 'Je remplis le formulaire.', 'Tu remplis le formulaire.', 'Il remplit le formulaire.'],
      },
      {
        id: 'rec-a2-10-pairs',
        desc: 'The three number pairs, EACH PAIR IN ONE TAKE BACK TO BACK, singular then plural: Elle choisit / Elles choisissent, Il réussit toujours / Ils réussissent toujours, Elle grandit vite / Elles grandissent vite. In every pair the PRONOUN must sound identical on both sides, because it is: elle and elles are one sound and so are il and ils. The only difference the learner may hear is the S at the end of the verb. Any difference in the pronoun, in pace or in emphasis destroys the pair, because the learner will use it instead of the S.',
        clipIds: ['Elle choisit.', 'Elles choisissent.', 'Il réussit toujours.', 'Ils réussissent toujours.', 'Elle grandit vite.', 'Elles grandissent vite.'],
      },
      {
        id: 'rec-a2-10-ten',
        desc: 'The ten naming forms, read as a flat list at conversational pace, one voice. Every one of them ends in the same EER sound and that sameness is the teaching: the learner should come away hearing -ir as one ending rather than ten word-endings. Do not vary the intonation to keep the list interesting. Keep roughly a second between them so a learner can repeat into the gap.',
        clipIds: [...THE_TEN],
      },
      {
        id: 'rec-a2-10-scene',
        desc: 'The opening scene, French bubbles only, one man in his forties at an ordinary shift-desk pace, mildly hurried and entirely unbothered. The last line (« D\'accord. Une place à six heures. ») must be brisk and final rather than pointed: the whole scene turns on nobody minding and nobody checking, so any hint of doubt or of correction in his voice would destroy it. He is writing while he speaks and he has already moved on.',
        clipIds: ['Le bus est là à six heures.', 'Alors, qui finit à six heures ce soir ?', "D'accord. Une place à six heures."],
      },
    ],
    ambienceDefault: 'off',
  },
};

/** Exported for the authoring script, the merge script and the tests, so none of
 *  them restates a count that can drift out of agreement with the content. */
export const VERBES_IR_ITEM_IDS = ITEM_IDS;
export const VERBES_IR_SPEAK_IDS = SPEAK_IDS;
export const VERBES_IR_DICTATION_IDS = DICTATION_IDS;
export const VERBES_IR_PARADIGM_IDS = PARADIGM_IDS;
export const VERBES_IR_NUMBER_PAIRS = NUMBER_PAIRS;
export const VERBES_IR_SINGULAR_TRIPLES = SINGULAR_TRIPLES;
export const VERBES_IR_REPAIRED_RESPELL = REPAIRED_RESPELL;

/** The section that must carry the contrast, with the two rows ADJACENT. Named
 *  here rather than in the test, so the test asserts against the lesson's own
 *  claim and a rename cannot silently move the assertion to a section that no
 *  longer holds it. */
export const CONTRAST_SECTION_ID = 's05-hear';
/** The row order of that section, so the adjacency check reads the lesson's own
 *  ordering rather than re-deriving one. */
export const CONTRAST_ROW_IDS = HEAR_ROW_IDS;
/** The pair, re-exported so a consumer needs one import. */
export const CONTRAST_IDS = CONTRAST_PAIR;
/** The section that must be the ONLY home of the nous/on statement. */
export const NOUS_ON_SECTION_ID = 's11-both';
/** The section that names the class and hands it over. */
export const BOUNDARY_SECTION_ID = 's16-notmine';
