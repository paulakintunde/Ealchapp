// a2.10.l2 "Les autres verbes en -IR" — the mission journey.
//
// ── THIS IS THE SECOND LESSON OF UNIT a2.10 ────────────────────────────────
//
// Not a new unit. `a1.30` is the only other two-lesson unit and it is the
// precedent: `lessonsOfUnit` sorts by `Lesson.seq`, and `lesson.tsx`'s `nextL`
// walks every lesson of every unit in band order, so finishing a2.10.l1 hands the
// learner straight into this one with no unit boundary crossed. A new unit would
// have needed a `seq` insert across sixteen units and would have wanted
// `author-full-curriculum-spine.ts`, which had drifted to 74 of 75 units wrong.
// See A2-10-L2-VERBES-IR-IRREGULIERS-SCOPE.md.
//
// THE ONE GAP, AND IT IS NAMED IN THE BUILD REPORT RATHER THAN HIDDEN:
// `den.tsx:169` opens `u.lessonIds[0]`, so this lesson is reachable by finishing
// l1 and by nothing else. A learner who has already finished l1 cannot return to
// it from the Den. The proposal that closes it is
// A2-10-L2-DEN-ROUTE-PROPOSAL.md; no app code was changed by this build.
//
// ── The Owns: the family ───────────────────────────────────────────────────
//
// Doctrine §B.5's fourth kind. This lesson owns the SORT, and deliberately not a
// paradigm — it holds two paradigms and neither is new:
//
//   THE SHEDDERS      il part /paʁ/ · ils partent /paʁt/
//                     a2.10.l1's rule. The plural puts a sound on the end.
//   THE -ER ENDINGS   il couvre /kuvʁ/ · ils couvrent /kuvʁ/
//                     a2.01's rule. Four spellings, one sound.
//
// Both reframes are QUOTED VERBATIM, imported from those lessons' own terms
// files, so a rewording there moves this lesson rather than leaving it
// misquoting a lesson the learner just finished. Nothing new has to be learned
// about the ear at all, and BOTH_RULES says so across three sections.
//
// What has to be learned is which list a verb is on, and the spelling only
// half-tells you: `-vrir`/`-frir` is reliable, `-tir` and `-rir` are not, and
// both counterexamples are inside l1's own ten. That is s10-nopredict, and it
// reuses l1's ACTUAL ROWS rather than authoring twins, so the contradiction is
// with the learner's memory and not with a fresh example built to make it.
//
// ── The liaison finding, which chose the paradigm verb ────────────────────
//
// `ouvrir` is far the most common of the -ER-ending five and it CANNOT be the
// paradigm verb: it starts with a vowel, so the silent s of `ils` wakes up and
// `il ouvre` /i.luvʁ/ against `ils ouvrent` /il.zuvʁ/ is audible after all. State
// the four-spellings-one-sound claim on `ouvrir` and it is false. So the paradigm
// runs on `couvrir`, where it is exactly true, and the vowel-initial case gets
// two corpus rows and a mission of its own (s11-waking) — because two of the five
// are vowel-initial and they are the two a learner meets first.
//
// ── Weight, in missions ────────────────────────────────────────────────────
//
// Paradigm acts: TWO and TWO. The Owns act: SIX. The sort is also three of the
// five quiz rounds and the whole of the trapDrill.
//
// ── The wrong form, and why this lesson may print it when l1 could not ────
//
// a2.10.l1 banned `ils partissent` from every surface including commonErrors,
// because a card that shows an error works only when the learner holds the right
// form to replace it with, and nobody in l1 held `ils partent`. THIS LESSON
// TEACHES IT. So the error may appear where an error belongs — the scene's break
// card, commonErrors, an errorSpot prompt — and nowhere a learner produces into.
// The batch checks both halves: banned on production surfaces, and REQUIRED on a
// reject surface, because a lesson that exists to stop an error and never shows
// it has not confronted it.
//
// ── Layout notes that are bugs, not preferences ───────────────────────────
//
// - TWO tapTables, which departs from "use each once and stop". The lesson is
//   two paradigms whose difference is the point: one pair must be heard as
//   DIFFERENT and one as IDENTICAL, and each needs its own six rows. They are not
//   adjacent and the activity-run limit is eight.
// - `tapTable` is not in ownsLayout(), so both render inside a scrolling page and
//   six rows is the ceiling.
// - `commonErrors` needs `swipe: true` or it renders a blank screen.
// - `reading` needs `questionsInModal` WITH questions, and PassagePage splits on
//   sentence boundaries so an authored newline is swallowed.
// - Three term chips per section, maximum.

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
  A201_BACKREF, A201_REFRAME, A202_BACKREF, A202_BACKREF_UNIT, A210_BACKREF, A210_REFRAME,
  A211_BACKREF, A211_BACKREF_UNIT,
  BOTH_RULES, REFRAME, VERBES_IR_FAM_TERMS,
} from './verbes-ir-familles-terms.ts';
import {
  AUTHORED_IDS, DICTATION_IDS, ENDING_PREDICTS, ENDING_PROVES_NOTHING, ER_ENDING, ER_PAIR,
  ER_QUARTET, ER_VERB, LIAISON_PAIR, NEITHER, NUMBER_PAIRS, SHEDDERS, SHED_PAIR, SHED_TRIPLE,
  SHED_VERB, THE_TWELVE, VOWEL_INITIAL, familyIds, fr,
} from './verbes-ir-familles-corpus.ts';
import { IMPORTED_IDS, l1Fr, verbEn, verbId } from './verbes-ir-familles-imported.ts';
import { FAMILY_LABEL, REPAIRED_RESPELL, verbCard, verbRespell } from './verbes-ir-familles-display.ts';
import { unitRef } from './_unit-ref.ts';

/** A citation that OPENS a sentence needs a capital, and the label is built at
 *  interpolation time rather than typed, so the capital has to be applied here. */
const Cap = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

export {
  A201_BACKREF, A201_REFRAME, A202_BACKREF, A210_BACKREF, A210_REFRAME, A211_BACKREF,
  BOTH_RULES, REFRAME,
  A202_BACKREF_UNIT, A211_BACKREF_UNIT,
};

/* ─── The items this lesson touches ──────────────────────────────────────── */

const ITEM_IDS = [...new Set([...AUTHORED_IDS, ...IMPORTED_IDS])];

/** Spoken practice reads only rows carrying `voiceflash`. The twelve infinitives
 *  are deliberately absent: a bare infinitive is not a thing anybody says, and
 *  `souffrir`'s row carries no voiceflash at all. */
const SPEAK_IDS = [
  ...familyIds('shed'),
  ...familyIds('ercase'),
  ...familyIds('liaison'),
  ...familyIds('apply'),
];

/** THE ROW ORDER OF EACH CONTRAST TABLE, by item id.
 *
 *  Sound order in both, so the pair each table turns on is ADJACENT: the three
 *  the ear cannot separate, then the form that answers the third of them, then
 *  the two that carry a syllable. The canonical nine-pronoun order lives in the
 *  reference sheet, exactly as it does for l1. */
const SHED_ROW_IDS = [
  'fr.a2.verbes.461', // je pars
  'fr.a2.verbes.462', // tu pars
  'fr.a2.verbes.463', // il part      <- SHED_PAIR.singular
  'fr.a2.verbes.464', // ils partent  <- SHED_PAIR.plural, and it is next
  'fr.a2.verbes.465', // nous partons
  'fr.a2.verbes.466', // vous partez
];
const ER_ROW_IDS = [
  'fr.a2.verbes.467', // je couvre
  'fr.a2.verbes.468', // tu couvres
  'fr.a2.verbes.469', // il couvre    <- ER_PAIR.singular
  'fr.a2.verbes.470', // ils couvrent <- ER_PAIR.plural, and it is next AND identical
  'fr.a2.verbes.471', // nous couvrons
  'fr.a2.verbes.472', // vous couvrez
];

/** The pronoun-and-verb alone, taken off the corpus sentence rather than retyped,
 *  so a table cell cannot drift from the row the same screen plays. */
const form = (id: string): string => fr(id).replace(/\s+(tôt|tout)\.$/, '').toLowerCase();

/** The person column, shared by both tables. Six rows and not nine: `tapTable`
 *  is not in ownsLayout(), so a ninth row runs past the fold. The nine-pronoun
 *  version of each paradigm is in sheet.a2.10l2.families. */
const PERSONS = ['je', 'tu', 'il · elle · on', 'ils · elles', 'nous', 'vous'];

/* ─── Mission 1 · Scene ────────────────────────────────────────────────────
 *
 * The A2 register is loss of fluency under load, and this lesson has the sharpest
 * version of it available anywhere in the batch: the learner's rule is CORRECT,
 * recently learned and confidently applied, and it produces a word that does not
 * exist. Nobody is rude and nothing is mispronounced. A sound comes out that is
 * not French, and the learner hears it go.                                     */

const SCENE_BEATS: SceneBeat[] = [
  {
    kind: 'narration',
    size: 'md',
    text: 'A hostel desk in Bordeaux, just after seven. Three of you are checking out, and only one of you is at the desk.',
    audio: { mode: 'tts', voice: 'coach' },
  },
  {
    kind: 'bubble',
    from: 'them',
    reveal: 'tap',
    size: 'md',
    speaker: 'Salomé',
    fr: 'Bonjour. Vous partez tous les trois ?',
    en: 'Morning. Are all three of you leaving?',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a2-10l2-scene' },
  },
  {
    kind: 'bubble',
    from: 'you',
    reveal: 'auto',
    size: 'md',
    fr: 'Oui, tous les trois.',
    en: 'Yes, all three.',
    stage: 'She finds the room on the screen and waits for the time.',
    audio: { mode: 'tts', lang: 'fr-FR' },
  },
  {
    kind: 'bubble',
    from: 'them',
    reveal: 'tap',
    size: 'md',
    speaker: 'Salomé',
    fr: 'Et vos amis, à quelle heure ?',
    en: 'And your friends, what time?',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a2-10l2-scene' },
  },
  {
    kind: 'choice',
    size: 'lg',
    prompt: 'Your friends leave at eight. What goes back?',
    options: [
      {
        // THE ERROR THIS LESSON EXISTS TO STOP, shown here because the learner is
        // about to be given the form that replaces it. a2.10.l1 could not print
        // this; see the header.
        fr: 'Ils partissent à huit heures.',
        en: 'last lesson, applied faithfully',
        outcome: 'breaks',
        audio: { mode: 'tts', lang: 'fr-FR' },
      },
      {
        fr: 'Ils partent à huit heures.',
        en: 'the T that was there all along',
        outcome: 'works',
        audio: { mode: 'tts', lang: 'fr-FR' },
      },
    ],
    followUp: {
      works: 'Yes. The t was in partir the whole time and the singular was hiding it. Watch what the other one costs.',
      breaks: 'That is the rule from last lesson, applied correctly, to a verb that does not take it.',
    },
  },
  {
    kind: 'bubble',
    from: 'them',
    reveal: 'auto',
    size: 'md',
    speaker: 'Salomé',
    fr: 'Pardon ?',
    en: 'Sorry?',
    stage: 'Not impatient. She simply did not catch a word, because there was no word to catch.',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a2-10l2-scene' },
  },
  {
    kind: 'break',
    size: 'lg',
    // Budgeted to the figures a2.01 established over three device passes and
    // ledger §7: heading about 13 characters, body 24 to 30 words, coach under 9,
    // reading glosses under about 24 characters. a2.10.l1 fit on the first pass
    // by authoring to them from the start, and so does this.
    heading: 'Not a word',
    body: 'You had the verb and you had the hour. The machine from last lesson fitted so well that it built a word French does not have.',
    wrong: {
      fr: 'Ils partissent à huit.',
      ipa: '/il paʁ.tis a ɥit/',
      en: 'not a French word',
    },
    right: {
      fr: 'Ils partent à huit.',
      ipa: '/il paʁt a ɥit/',
      respell: '[eel part a WEET]',
      en: 'one T, and it lands',
    },
    coach: 'The right rule, on the wrong verb.',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], audioFirst: true, recordingId: 'rec-a2-10l2-shed' },
  },
  {
    kind: 'resolve',
    size: 'md',
    text: 'She was not correcting you and she was not annoyed. There was simply nothing there for her to hear.',
  },
];

const SECTIONS: LessonSection[] = [
  /* ── Act 1: two families ─────────────────────────────────────────────── */

  {
    type: 'scene',
    id: 's01-scene',
    title: 'The Word That Was Not There',
    frSub: "Le mot qui n'existait pas",
    render: 'screens',
    layer: 'core',
    terms: ['theFamilies', 'endingLies'],
    say: {
      text: 'The rule you use here is correct. Watch which verb it is used on.',
      voice: 'coach',
      timing: 'onFirstVisitOnly',
    },
    setting: {
      place: 'The desk of a hostel',
      city: 'Bordeaux',
      time: 'Saturday, just after seven',
      ambience: 'room-tone-lobby',
    },
    beats: SCENE_BEATS,
    closing: {
      size: 'md',
      text: `${REFRAME} There are two of them, and you already know what each one does.`,
    },
  },

  {
    type: 'goals',
    id: 's02-goals',
    title: 'What You Will Be Able To Do',
    frSub: 'Ce que vous saurez faire',
    layer: 'core',
    say: `${REFRAME} By the end you will place a verb in its family before you build a single form.`,
    goals: [
      { t: 'Build the six that shed', s: 'partir, sortir, dormir and three more, where a consonant leaves and comes back.' },
      { t: 'Build the five that do not', s: 'ouvrir, offrir and their group take the endings of an -er verb outright.' },
      { t: 'Sort a verb before you build it', s: 'The hard half, and the only part of this that is new.' },
      { t: 'Hear the s of ils wake up', s: 'In front of a vowel the plural is audible after all, and that is the link, not the verb.' },
    ],
  },

  {
    // THE THESIS, STATED FIRST. This lesson's opening move is not "here is a new
    // pattern" but "you already have both of these", and the two reframes it
    // rests on are quoted VERBATIM from the lessons that authored them.
    type: 'cardDeck',
    id: 's03-twofamilies',
    title: 'You Already Know Both Rules',
    frSub: 'Deux familles, deux règles connues',
    hint: 'Swipe through the four cards.',
    render: 'deck',
    layer: 'core',
    size: 'lg',
    terms: ['theFamilies', 'endingLies'],
    say: 'Nothing here is a new sound. What is new is deciding which of two rules a verb takes.',
    cards: [
      {
        label: 'What went wrong',
        head: 'The rule was right, the verb was not',
        body: `${BOTH_RULES} Twelve verbs end in -ir and take no -iss- anywhere. Running last lesson's machine on one of them makes a word nobody says.`,
      },
      {
        label: 'Family one',
        head: 'The consonant comes back',
        fr: 'il part · ils partent',
        sub: '[eel par] · [eel part]',
        body: `${A210_BACKREF} taught you this: ${A210_REFRAME} These six do exactly that. The plural is audible, and it is a T rather than an -iss-.`,
      },
      {
        label: 'Family two',
        head: 'Nothing comes back at all',
        fr: 'il couvre · ils couvrent',
        sub: '[eel koovr] · [eel koovr]',
        body: `And ${A201_BACKREF} taught you this: ${A201_REFRAME} These five take -er endings, so four of their six forms are one sound.`,
      },
      {
        label: 'What to do',
        head: 'Decide first, build second',
        body: `${REFRAME} The last four letters of the naming form will not tell you which, so the six that shed are worth holding as a list.`,
      },
    ],
  },

  /* ── Act 2: the shedders ─────────────────────────────────────────────── */

  {
    type: 'cardDeck',
    id: 's04-shed',
    title: 'The Letter That Leaves And Comes Back',
    frSub: 'La consonne qui revient',
    hint: 'Swipe through the three cards.',
    render: 'deck',
    layer: 'core',
    size: 'lg',
    terms: ['shedding', 'theFamilies'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a2-10l2-shed' },
    say: 'Three cards. The second one is the whole mechanism.',
    cards: [
      {
        label: 'The stem',
        head: 'Cut two letters off, as always',
        fr: 'partir → part-',
        sub: 'and the t is real',
        body: 'The method has not changed since the first verb lesson. What is different is what happens to that t in the singular.',
      },
      {
        label: 'The singular drops it',
        head: 'part- becomes par',
        fr: 'je pars · tu pars · il part',
        sub: '[par] three times',
        body: 'The t is written every time and said none of them. Three spellings and one sound, which is the half of the older rule that never goes away.',
      },
      {
        label: 'The plural gives it back',
        head: 'And then you hear it',
        fr: 'ils partent · nous partons',
        sub: '[part] · [par-tohⁿ]',
        body: `${A210_BACKREF} put an -iss- in to do this. These six had the letter already and were only hiding it. Same ear, different spelling.`,
      },
    ],
  },

  {
    // CONTRAST ONE, AND IT IS ONE SCREEN WITH THE PAIR ADJACENT.
    // Row 3 is `il part` and row 4 is `ils partent`, each with its own audio, so
    // the arriving T is heard one tap apart. Checked by row INDEX.
    type: 'tapTable',
    id: 's05-shedtable',
    title: 'partir, And Where The T Goes',
    frSub: 'Les six formes de partir',
    layer: 'core',
    terms: ['shedding'],
    sheetId: 'sheet.a2.10l2.families',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a2-10l2-shed' },
    say: 'Tap row three and then row four. One consonant apart, and that is the lesson.',
    cols: ['Person', SHED_VERB, 'What you hear'],
    rows: SHED_ROW_IDS.map((id, i) => ({
      cells: [
        PERSONS[i],
        form(id),
        ['nothing at the end', 'nothing at the end', 'nothing at the end', 'a T', 'par-tohⁿ', 'par-tay'][i],
      ],
      say: fr(id),
      detail: {
        title: form(id),
        body: [
          'The t of the stem is not said. What arrives is par and nothing after it.',
          'Spelled like the je form and said like it too. The s has never been pronounced.',
          'A t on the page and nothing in the air. Put it beside il finit from the last lesson: both stop dead.',
          'Tap the row above and then this one. One consonant has arrived, right at the end, and it is the only thing saying more than one.',
          'The t is back and it brings a whole syllable with it, ending on the nasal vowel you already know.',
          'The same t again, and the same extra syllable. Only the singular ever drops it.',
        ][i],
        say: fr(id),
      },
    })),
  },

  /* ── Act 3: the ones that are -ER verbs ──────────────────────────────── */

  {
    type: 'cardDeck',
    id: 's06-ercase',
    title: 'Five That Are -ER Verbs In Disguise',
    frSub: 'Cinq faux amis',
    hint: 'Swipe through the three cards.',
    render: 'deck',
    layer: 'core',
    size: 'lg',
    terms: ['erEndings', 'theFamilies'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a2-10l2-er' },
    say: 'These five you can spot from the spelling, which makes them the easy half.',
    cards: [
      {
        label: 'The tell',
        head: 'They end in -vrir or -frir',
        fr: ER_ENDING.join(' · '),
        sub: 'and nothing else does',
        body: `${ENDING_PREDICTS.endings.join(' and ')} are the one ending in this whole area that decides the answer. No verb from the last lesson ends either way.`,
      },
      {
        label: 'What they take',
        head: 'The endings of an -er verb',
        fr: '-e · -es · -e · -ons · -ez · -ent',
        sub: 'exactly as parler',
        body: `${A201_BACKREF} gave you these six and they have not changed. So four of the forms are one sound, and the pronoun in front is doing the work again.`,
      },
      {
        label: 'The catch',
        head: 'Two of them start with a vowel',
        fr: VOWEL_INITIAL.join(' · '),
        sub: 'and they are the common two',
        body: 'For those two the plural turns out to be audible after all, for a reason that has nothing to do with the ending. That is four missions from here.',
      },
    ],
  },

  {
    // CONTRAST TWO, and it must be heard as IDENTICAL where the first was heard
    // as different. Rows 3 and 4 again, adjacent, and their respellings are the
    // same string character for character.
    type: 'tapTable',
    id: 's07-ertable',
    title: 'couvrir, Where Nothing Moves',
    frSub: 'Les six formes de couvrir',
    layer: 'core',
    terms: ['erEndings'],
    sheetId: 'sheet.a2.10l2.families',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a2-10l2-er' },
    say: `${A201_REFRAME} Tap rows one to four and hear it.`,
    cols: ['Person', ER_VERB, 'What you hear'],
    rows: ER_ROW_IDS.map((id, i) => ({
      cells: [
        PERSONS[i],
        form(id),
        ['nothing at the end', 'nothing at the end', 'nothing at the end', 'nothing at the end', 'koo-vrohⁿ', 'koo-vray'][i],
      ],
      say: fr(id),
      detail: {
        title: form(id),
        body: [
          'A silent -e, exactly as on an -er verb. The r and the v run together and then it stops.',
          'A silent -es. Only tu takes it, and you will never hear it.',
          'Said exactly like ils couvrent. Nothing in the sound separates the two.',
          'Tap the row above and then this one. They are the same. Seven letters at the end and not one of them sounds.',
          'One of the two the ear gets, and it is the -ons you have had since the first verb lesson.',
          'The other one, -ez. Two audible out of six, which is where this family started.',
        ][i],
        say: fr(id),
      },
    })),
  },

  /* ── Act 4: THE SORT. The Owns. ──────────────────────────────────────── */

  {
    // The twelve, named by id so every one is genuinely on a screen, and grouped
    // by the answer the learner has to produce. `vocabThemes` carries no itemId,
    // which is why this is a groupDrill.
    type: 'groupDrill',
    id: 's08-sort',
    title: 'Twelve Verbs, Two Answers',
    frSub: 'Ranger les douze',
    layer: 'core',
    size: 'lg',
    terms: ['theFamilies', 'endingLies'],
    sheetId: 'sheet.a2.10l2.lists',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a2-10l2-twelve' },
    say: `${REFRAME} Say the family out loud for each one before you move on.`,
    groups: [
      {
        label: `The six that shed: ${FAMILY_LABEL.shed}`,
        items: SHEDDERS.map(verbCard),
        check: {
          q: 'Which of these four is NOT in this group?',
          opts: ['sortir', 'dormir', 'couvrir', 'servir'],
          correct: 2,
          why: 'couvrir ends in -vrir, and every -vrir and -frir verb takes -er endings instead. It is the one group the spelling gives away.',
        },
      },
      {
        label: `The five that take -er endings: ${FAMILY_LABEL.er}`,
        items: ER_ENDING.map(verbCard),
        check: {
          q: 'Ils ___ la table. (couvrir)',
          // `couvrissent` was the first distractor here and it came out. A
          // closed-question option is a PRODUCTION surface: the learner reads all
          // four and weighs each, and a non-word weighed four times starts to
          // look plausible. The error is confronted where an error belongs, on
          // the scene's break card and in commonErrors, and the distractors here
          // are all real forms of the right verb.
          opts: ['couvrent', 'couvre', 'couvrons', 'couvrez'],
          correct: 0,
          why: 'The -ent of an -er verb, silent. Said exactly like il couvre, so only the pronoun on the page decides it.',
        },
      },
      {
        label: `And one that is neither: ${FAMILY_LABEL.neither}`,
        items: NEITHER.map(verbCard),
        check: {
          q: 'il court and ils courent. What is different out loud?',
          opts: ['The verb', 'Nothing at all', 'The last consonant', 'The vowel'],
          correct: 1,
          why: 'courir takes the endings of the shedders and has no consonant to shed, so it never gives one back. Its plural sounds like its singular.',
        },
      },
    ],
  },

  {
    // THE OWNS, TESTED, and the answer is not the same for both families — which
    // is exactly what makes it a sort rather than a rule.
    type: 'listening',
    id: 's09-ear',
    title: 'One Person, Or Several?',
    frSub: "Un ou plusieurs ?",
    layer: 'core',
    questionsInModal: true,
    terms: ['shedding', 'erEndings'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], audioFirst: true, recordingId: 'rec-a2-10l2-pairs' },
    say: 'Four lines from two different families. The same question has two different answers.',
    lines: [
      { fr: fr('fr.a2.verbes.463'), en: 'He leaves early.' },
      { fr: fr('fr.a2.verbes.464'), en: 'They leave early.' },
      { fr: fr('fr.a2.verbes.469'), en: 'He covers everything.' },
      { fr: fr('fr.a2.verbes.470'), en: 'They cover everything.' },
    ],
    questions: [
      {
        q: 'You hear « eel part ». How many people?',
        opts: ['One', 'Several', 'The sound does not say', 'It is not a real form'],
        correct: 1,
        why: 'A consonant arrived at the end of the verb. On a shedder that settles it, because the singular drops that letter every time.',
      },
      {
        q: 'Now « eel koovr ». How many people?',
        opts: ['One', 'Several', 'It is not a real form', 'One or several, the sound does not say'],
        correct: 3,
        why: 'couvrir takes -er endings, so il couvre and ils couvrent are one sound. Here the pronoun on the page is the only evidence there is.',
      },
      {
        q: 'So why does the same question have two answers?',
        opts: ['Because the two verbs are in different families', 'Because one is longer', 'Because one is a question', 'Because the recording changed'],
        correct: 0,
        why: 'A shedder gives a consonant back and an -er-ending verb has none to give. The verb tells you the number only when its family allows it.',
      },
      {
        q: 'Which of these could your ear NOT settle?',
        opts: ['il part against ils partent', 'elle sent against elles sentent', 'il couvre against ils couvrent', 'il dort against ils dorment'],
        correct: 2,
        why: 'The other three are shedders and all give a consonant back. couvrir gives nothing, so that pair is silent and identical.',
      },
    ],
  },

  {
    // WHY THE SORT CANNOT BE DERIVED, and it is proved against a2.10.l1's OWN
    // ROWS rather than against fresh examples built to make the point.
    type: 'cardDeck',
    id: 's10-nopredict',
    title: 'The Ending Decides Nothing',
    frSub: 'La terminaison ne dit rien',
    hint: 'Swipe through the three cards.',
    render: 'deck',
    layer: 'core',
    size: 'lg',
    terms: ['endingLies', 'theFamilies'],
    say: 'Two pairs. In each one the naming forms end the same way and the verbs behave differently.',
    cards: [
      {
        label: 'Both end in -tir',
        head: 'One takes it, one does not',
        fr: `${ENDING_PROVES_NOTHING[0].there} · ${ENDING_PROVES_NOTHING[0].here}`,
        sub: '-iss- · a returning t',
        body: `${l1Fr(ENDING_PROVES_NOTHING[0].l1Id)} And ${fr(ENDING_PROVES_NOTHING[0].hereId)} You met the first one last lesson.`,
      },
      {
        label: 'Both end in -rir',
        head: 'And again',
        fr: `${ENDING_PROVES_NOTHING[1].there} · ${ENDING_PROVES_NOTHING[1].here}`,
        sub: '-iss- · nothing',
        body: `${l1Fr(ENDING_PROVES_NOTHING[1].l1Id)} And ${fr(ENDING_PROVES_NOTHING[1].hereId)} Same four letters, opposite behaviour.`,
      },
      {
        label: 'So what does work',
        head: 'One tell, and one list',
        fr: ENDING_PREDICTS.endings.join(' · '),
        sub: 'the only reliable sign',
        body: `${REFRAME} A verb ending in -vrir or -frir takes -er endings. Everything else you hold as a list of six, and six is not many.`,
      },
    ],
  },

  {
    // THE CASE THE RULE DOES NOT COVER, and it is the case the learner meets
    // first. Two of the five -ER-ending verbs begin with a vowel.
    type: 'examples',
    id: 's11-waking',
    title: 'When The Plural Is Audible Anyway',
    frSub: "Le s qui se réveille",
    layer: 'core',
    terms: ['wakingS', 'erEndings'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a2-10l2-liaison' },
    say: 'The verb is identical in both. Listen to the word in front of it instead.',
    examples: [
      { fr: fr('fr.a2.verbes.473'), en: 'He opens at eight.', note: 'The l of il links straight onto the vowel: ee-loovr, as one word.' },
      { fr: fr('fr.a2.verbes.474'), en: 'They open at eight.', note: 'The silent s of ils wakes up as a z. The verb did not change at all; the link did.' },
      { fr: fr('fr.a2.verbes.484'), en: 'They are giving a present.', note: 'offrir does the same, and offrir and ouvrir are the two of this family you will meet most.' },
      { fr: fr('fr.a2.verbes.470'), en: 'They cover everything.', note: 'And couvrir does not, because a consonant blocks the link. That is why the table used couvrir.' },
    ],
  },

  {
    // The trap is the -iss- reflex firing on the wrong family, drilled as a sort
    // followed by a production. Stepped, so the three jobs are three screens.
    type: 'trapDrill',
    id: 's12-trap',
    title: 'Sort It, Then Build It',
    frSub: 'Ranger puis construire',
    layer: 'core',
    swipe: true,
    terms: ['theFamilies', 'endingLies'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], wrongThenRight: true, recordingId: 'rec-a2-10l2-shed' },
    // The reframe belongs here more than anywhere: the trapDrill IS the
    // half-second it describes, and this is the screen where a learner either
    // spends it or produces a non-word.
    say: `${REFRAME} Six of them, and that half-second is the whole exercise.`,
    rule: {
      title: 'The reflex is the problem',
      body: 'The machine from the last lesson is new, fast and correct, so it fires before you have decided which verb you are holding. Deciding first is the only thing that stops it, and it costs half a second.',
    },
    cards: [
      { promptLabel: 'they leave', promptSound: 'eel par-TEES', fr: 'ils partent', ipa: '/il paʁt/', tip: 'A t and then stop. No -iss- anywhere in this verb.' },
      { promptLabel: 'they cover', promptSound: 'eel koo-VREES', fr: 'ils couvrent', ipa: '/il kuvʁ/', tip: 'Nothing at all after koovr. This one is an -er verb.' },
      { promptLabel: 'they sleep', promptSound: 'eel dor-MEES', fr: 'ils dorment', ipa: '/il dɔʁm/', tip: 'The m comes back. It was in dormir the whole time.' },
      { promptLabel: 'they run', promptSound: 'eel koo-REES', fr: 'ils courent', ipa: '/il kuʁ/', tip: 'Identical to il court. courir has nothing to give back.' },
    ],
    drill: [
      { promptSay: 'ils partent', opts: ['eel part', 'eel par-TEES', 'eel par'], correct: 0 },
      { promptSay: 'ils couvrent', opts: ['eel koo-VREES', 'eel koovr-uh', 'eel koovr'], correct: 2 },
      { promptSay: 'ils dorment', opts: ['eel dor-MEES', 'eel dorm', 'eel dor'], correct: 1 },
      { promptSay: 'il part', opts: ['eel par', 'eel part', 'eel par-TEE'], correct: 0 },
      { promptSay: 'ils courent', opts: ['eel koo-REES', 'eel koor-uh', 'eel koor'], correct: 2 },
      { promptSay: 'ils ouvrent', opts: ['eel oovr', 'eel-zoovr', 'eel zoo-VREES'], correct: 1 },
    ],
    steps: [
      { label: 'The rule', kind: 'rule', title: 'Why The Wrong One Comes First' },
      { label: 'The traps', kind: 'cards', title: 'Four You Will Want To Say Wrong' },
      { label: 'Hear it', kind: 'audio', title: 'Wrong, Then Right' },
      { label: 'Prove it', kind: 'drill', title: 'Which One Did You Say?', gate: true },
    ],
  },

  {
    type: 'flashcards',
    id: 's13-flash',
    title: 'Flip and Recall',
    frSub: 'Retournez la carte',
    render: 'deck',
    layer: 'core',
    say: 'The verb is on the front. Say its family before you flip, then say the plural.',
    cards: [
      { front: 'What do you do before you build an -ir verb?', back: `${REFRAME} There are only two of them, and one is spottable.` },
      { front: 'partir, sortir, dormir, servir, sentir, mentir', back: `${FAMILY_LABEL.shed}. il part, ils partent.` },
      { front: 'ouvrir, offrir, couvrir, découvrir, souffrir', back: `${FAMILY_LABEL.er}. il couvre, ils couvrent, and they are one sound.` },
      { front: 'Which ending gives the family away?', back: `${ENDING_PREDICTS.endings.join(' and ')}. Those five take -er endings.` },
      { front: 'One colleague, leaving early', back: fr('fr.a2.verbes.463'), say: fr('fr.a2.verbes.463') },
      { front: 'Three colleagues, leaving early', back: fr('fr.a2.verbes.464'), say: fr('fr.a2.verbes.464') },
      { front: 'One person, covering everything', back: fr('fr.a2.verbes.469'), say: fr('fr.a2.verbes.469') },
      { front: 'Several people, covering everything', back: fr('fr.a2.verbes.470'), say: fr('fr.a2.verbes.470') },
      { front: 'Why can you hear ils ouvrent but not ils couvrent?', back: 'ouvrir starts with a vowel, so the s of ils wakes up as a z. couvrir starts with a consonant and blocks it.' },
      { front: 'courir: il court against ils courent', back: 'One sound. It uses the shedders’ endings and has no consonant to shed.' },
      { front: 'Both end in -tir. Which takes the -iss-?', back: 'ralentir does and sentir does not. The ending decides nothing.' },
      { front: 'Where do venir and tenir go?', back: `${A202_BACKREF}. Their mechanism is the shedders’, with a vowel change on top.` },
    ],
  },

  /* ── Act 5: out in the world ─────────────────────────────────────────── */

  {
    type: 'commonErrors',
    id: 's14-errors',
    swipe: true,
    size: 'lg',
    title: 'Three Ways The Sort Goes Wrong',
    frSub: 'Trois erreurs de famille',
    layer: 'core',
    terms: ['theFamilies', 'shedding'],
    say: 'All three are the right rule reaching the wrong verb.',
    errors: [
      {
        // The over-generalised form appears HERE, on a reject surface, because
        // this lesson gives the learner the form that replaces it.
        wrong: 'Saying « ils partissent » for a group.',
        right: 'Saying « ils partent ».',
        why: 'partir takes no -iss- anywhere. The t on the end is the plural marker, and it was in the naming form the whole time.',
      },
      {
        wrong: 'Saying « ils part » and stopping at the singular.',
        right: 'Saying « ils partent », landing the t.',
        why: 'This is the opposite mistake and it is the commoner one. The singular drops that consonant, so leaving it off says one person.',
      },
      {
        wrong: 'Sounding the ending of « ils couvrent ».',
        right: 'Saying « ils couvrent » exactly like « il couvre ».',
        why: 'That family takes -er endings, and -ent has never been pronounced on any of them. Nothing comes back because nothing left.',
      },
    ],
  },

  {
    type: 'cardDeck',
    id: 's15-notmine',
    title: 'Three That Belong Elsewhere',
    frSub: "Ce que ce n'est pas",
    hint: 'Swipe through the three cards.',
    render: 'deck',
    layer: 'core',
    size: 'lg',
    terms: ['theFamilies'],
    say: 'Two of these have a unit waiting. The third is worth knowing by name.',
    cards: [
      {
        label: 'Coming next',
        head: 'venir and tenir',
        fr: 'venir · tenir',
        sub: `their unit is ${A202_BACKREF}`,
        body: 'They run the shedders’ mechanism with a vowel change on top, so what you learned here is most of the way there. Their own unit builds them out in full and this one does not.',
      },
      {
        label: 'The same shape, a different ending',
        head: 'The -RE verbs do this too',
        fr: 'vendre · attendre',
        sub: `their unit is ${A211_BACKREF}`,
        body: 'il vend and ils vendent is a consonant leaving and coming back, exactly like il part and ils partent. That unit will feel like a second helping of this one.',
      },
      {
        label: 'One with no home yet',
        head: 'mourir does something else again',
        fr: 'mourir',
        sub: 'the vowel itself moves',
        body: 'je meurs against nous mourons changes the vowel of the stem, which is a third mechanism and not one of these two. Treat it as a single word for now.',
      },
    ],
  },

  {
    type: 'practice',
    id: 's16-speak',
    title: 'Say The Whole Sentence',
    frSub: 'À voix haute',
    layer: 'core',
    audio: { mode: 'mic', lang: 'fr-FR' },
    say: 'Decide the family, then say it. On a shedder, land the consonant and stop there.',
    skill: 'speak',
    itemIds: SPEAK_IDS,
  },

  {
    // The dictée leans on the -ER family this time, which is the mirror of l1. In
    // l1 the ear settled the plural and only the singular triple needed typing;
    // here four of couvrir's six forms are one sound, so the page is the only
    // place any of them exists. Every target is at or under dicteeMode's
    // 16-letter limit and spells from LETTERS.
    type: 'dictation',
    id: 's17-dictation',
    title: 'Spell What You Heard',
    frSub: 'La dictée',
    layer: 'core',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], maxPlays: 4, recordingId: 'rec-a2-10l2-er' },
    say: 'Eight lines. Four of them are the same sound four times, so the pronoun is your only evidence.',
    itemIds: DICTATION_IDS,
  },

  {
    type: 'scenario',
    id: 's18-scenario',
    title: 'The Same Desk, Checking Out',
    frSub: 'À vous',
    layer: 'core',
    terms: ['shedding', 'wakingS'],
    say: 'The same desk, and this time every answer wants a family decided first.',
    setting: 'You are back at the hostel desk the following Saturday, and Salomé has the same three names on her screen.',
    turns: [
      {
        ai: 'Bonjour. Vous partez à quelle heure aujourd’hui ?',
        en: 'Morning. What time are you leaving today?',
        user: 'Nous partons à huit heures.',
        userEn: 'We are leaving at eight.',
        alts: [
          { fr: 'On part à huit heures.', en: 'We are leaving at eight.' },
          { fr: 'Je pars à huit heures.', en: 'I am leaving at eight.' },
        ],
      },
      {
        ai: 'Et vos amis ? Ils partent avec vous ?',
        en: 'And your friends? Are they leaving with you?',
        user: 'Oui, ils partent avec moi.',
        userEn: 'Yes, they are leaving with me.',
        alts: [
          { fr: 'Oui, tous les trois.', en: 'Yes, all three of us.' },
          { fr: 'Non, ils partent plus tard.', en: 'No, they are leaving later.' },
        ],
      },
      {
        ai: 'Le petit déjeuner, c’est jusqu’à neuf heures. On ouvre à sept.',
        en: 'Breakfast is until nine. We open at seven.',
        user: 'Vous ouvrez à sept heures ?',
        userEn: 'You open at seven?',
        alts: [
          { fr: 'Parfait, on descend à sept heures.', en: 'Perfect, we will come down at seven.' },
          { fr: 'Et vous servez le café ?', en: 'And do you serve coffee?' },
        ],
      },
      {
        ai: 'Vous dormez bien, ici ?',
        en: 'Do you sleep well here?',
        user: 'Oui, je dors très bien.',
        userEn: 'Yes, I sleep very well.',
        alts: [
          { fr: 'Oui, nous dormons bien.', en: 'Yes, we sleep well.' },
          { fr: 'Très bien, merci.', en: 'Very well, thank you.' },
        ],
      },
      {
        ai: 'Parfait. Je vous laisse la clé sur le comptoir.',
        en: 'Perfect. I will leave the key on the counter for you.',
        user: 'Merci beaucoup.',
        userEn: 'Thank you very much.',
        alts: [
          { fr: 'Merci, c’est gentil.', en: 'Thank you, that is kind.' },
          { fr: 'Merci. On part à huit heures, alors.', en: 'Thank you. We leave at eight, then.' },
        ],
      },
    ],
  },

  {
    type: 'reading',
    id: 's19-reading',
    title: 'Saturday, Seven In The Morning',
    frSub: 'Samedi, sept heures du matin',
    layer: 'core',
    terms: ['shedding', 'wakingS'],
    questionsInModal: true,
    say: 'Read it once for the shape. Both families are in here. Tap any word you do not know.',
    // ONE LINE. PassagePage splits on sentence boundaries, so an authored newline
    // is silently discarded. Anything not inside « » is English.
    text:
      'Seven in the morning at the hostel, and the kitchen is not open yet. '
      + '« Vous partez tous à huit heures ? » '
      + '« Moi, je pars à huit heures. Mes amis partent à midi. » '
      + 'Salomé writes two times on the board behind her and looks at the clock. '
      + '« Et le petit déjeuner ? » '
      + '« Ils ouvrent à sept heures, normalement. On descend maintenant. » '
      + 'Two other guests are waiting behind you with their bags already packed. '
      + '« Bon. Je vous sers un café en attendant. »',
    glossary: [
      { word: 'partez', en: 'are leaving', note: 'vous plus -ez. The t of the stem is back, with a syllable on it.' },
      { word: 'pars', en: 'am leaving', note: 'je plus -s, and the t is gone. Said just par.' },
      { word: 'partent', en: 'are leaving', note: 'The t returns, and it is the only thing here saying more than one.' },
      { word: 'ouvrent', en: 'open', note: 'An -er ending, silent. What you hear is the z of ils waking up in front of the vowel.' },
      { word: 'sers', en: 'will serve', note: 'servir is a shedder too, so the v disappears in the singular.' },
    ],
    questions: [
      { q: 'Three verbs here are in the shedding family. Which one is not?', a: 'ouvrent. ouvrir ends in -vrir and takes the endings of an -er verb, so nothing comes back in its plural. partez, pars, partent and sers are all shedders.' },
      { q: '« Mes amis partent à midi. » What tells you it is more than one person?', a: 'The t at the end of partent, and nothing else. mes amis is plural on the page but amis sounds exactly like ami, so the verb is carrying it.' },
      { q: 'The speaker says « Ils ouvrent à sept heures ». Could you hear that it was plural?', a: 'Yes, but not from the verb. ouvre and ouvrent are one sound; what you hear is the silent s of ils waking up as a z in front of the vowel.' },
    ],
  },

  /* ── Act 6: prove it ─────────────────────────────────────────────────── */

  {
    type: 'reviewDeck',
    id: 's20-review',
    title: 'Both Families, One Deck',
    frSub: 'Révision',
    render: 'deck',
    layer: 'core',
    terms: ['theFamilies', 'shedding', 'erEndings'],
    sheetId: 'sheet.a2.10l2.families',
    say: 'Rate each card objectively. Again, hard, or easy. The ones you mark again come back.',
    cards: [
      { front: 'What do you do before you build an -ir verb?', back: `${REFRAME} ${BOTH_RULES}` },
      { front: 'The six that shed a consonant', back: SHEDDERS.join(', ') + '.' },
      { front: 'The five that take -er endings', back: ER_ENDING.join(', ') + '.' },
      { front: 'The ending that gives it away', back: `${ENDING_PREDICTS.endings.join(' and ')}, and nothing else does.` },
      { front: 'One colleague, leaving early', back: fr('fr.a2.verbes.463'), say: fr('fr.a2.verbes.463') },
      { front: 'Three colleagues, leaving early', back: fr('fr.a2.verbes.464'), say: fr('fr.a2.verbes.464') },
      { front: 'One person, covering everything', back: fr('fr.a2.verbes.469'), say: fr('fr.a2.verbes.469') },
      { front: 'Several people, covering everything', back: fr('fr.a2.verbes.470'), say: fr('fr.a2.verbes.470') },
      { front: 'They open at eight', back: fr('fr.a2.verbes.474'), say: fr('fr.a2.verbes.474') },
      { front: 'Why is that one audible?', back: 'ouvrir starts with a vowel, so the s of ils wakes up as a z. The verb itself did not change.' },
      { front: 'ralentir against sentir', back: 'Both end in -tir. One takes the -iss- and one gives a t back, and the spelling does not say which.' },
      { front: 'courir', back: 'The shedders’ endings with no consonant to shed, so il court and ils courent are one sound.' },
      { front: 'Where do venir and tenir go?', back: `${A202_BACKREF}, and the -RE verbs at ${A211_BACKREF} run this same mechanism.` },
    ],
  },

  {
    type: 'progressCheck',
    id: 's21-progress',
    title: 'Where You Stand',
    frSub: 'Votre progression',
    say: 'One screen before the exam, so you know what you are walking into.',
    body: 'You have taken twelve verbs that all end in -ir and split them into two groups, and neither group asked you to learn a new sound. One gives a consonant back in the plural and one gives nothing, and the naming form only tells you which when it ends in -vrir or -frir. What is left is the part that says whether the sort has stuck. Each round is tied to one of the mistakes this lesson exists to stop, and failing a round gets you its drill before the next one starts.',
    stats: [],
  },

  {
    type: 'quiz',
    id: 's22-quiz',
    title: 'The Exam',
    frSub: "L'examen",
    layer: 'core',
    passMark: 70,
    roundFailThreshold: 60,
    say: 'Five rounds. Miss too many in a round and you get a drill before the next one starts.',
    rounds: [
      {
        id: 'r1-which-family',
        label: 'Which family',
        targets: ['err-wrong-family', 'err-over-iss'],
        say: 'Sort it before you build it.',
        questions: [
          {
            q: 'Which of these four takes the endings of an -er verb?',
            format: 'mcq',
            opts: ['offrir', 'sortir', 'servir', 'mentir'],
            correct: 0,
            why: 'offrir ends in -frir. Every -vrir and -frir verb takes -er endings, and it is the only ending in this area that decides the answer.',
            ref: 's06-ercase',
          },
          {
            q: 'Which of these four sheds a consonant in the singular?',
            format: 'mcq',
            opts: ['couvrir', 'découvrir', 'souffrir', 'dormir'],
            correct: 3,
            why: 'dormir gives je dors and ils dorment. The other three end in -vrir or -frir and never move a letter.',
            ref: 's04-shed',
          },
          {
            q: 'Both ralentir and sentir end in -tir. Which one takes the -iss-?',
            format: 'mcq',
            opts: ['sentir', 'Both of them', 'ralentir', 'Neither of them'],
            correct: 2,
            why: 'ralentir, from the last lesson. sentir gives elles sentent with a t. The last four letters decide nothing, which is why six verbs have to be held as a list.',
            ref: 's10-nopredict',
          },
          {
            q: 'Ils ___ à huit heures. (partir)',
            format: 'typeIn',
            accept: ['partent'],
            answer: 'partent',
            why: 'partir sheds its t in the singular and gives it back here. No -iss- anywhere in this verb.',
            ref: 's05-shedtable',
          },
          {
            q: 'Fix this. Three friends, at the desk: « Ils partissent à huit heures. »',
            format: 'errorSpot',
            accept: ['Ils partent à huit heures', 'partent'],
            answer: 'Ils partent à huit heures.',
            why: 'That is the last lesson’s rule on a verb that does not take it. The t was in partir all along.',
            ref: 's01-scene',
          },
          {
            q: 'Nous ___ tout. (couvrir)',
            format: 'typeIn',
            accept: ['couvrons'],
            answer: 'couvrons',
            why: 'couvrir takes -er endings, so nous takes -ons exactly as it does on parler.',
            ref: 's07-ertable',
          },
        ],
      },
      {
        id: 'r2-the-consonant',
        label: 'The consonant that comes back',
        targets: ['err-lost-consonant', 'err-wrong-family'],
        say: 'These six are all shedders. Land the letter.',
        questions: [
          {
            q: 'Listen. How many people?',
            format: 'listenChoose',
            audio: { mode: 'tts', lang: 'fr-FR', clip: 'Ils partent tôt.', recordingId: 'rec-a2-10l2-shed' },
            say: 'Ils partent tôt.',
            opts: ['Several', 'One', 'It is not a real form', 'The sound does not say'],
            correct: 0,
            why: 'A t arrived at the end of the verb, and on a shedder the singular never has one.',
            ref: 's09-ear',
          },
          {
            q: 'Ils ___ encore. (dormir)',
            format: 'typeIn',
            accept: ['dorment'],
            answer: 'dorment',
            why: 'The m of dormir comes back in the plural. je dors is just dor; ils dorment ends on the m.',
            ref: 's08-sort',
          },
          {
            q: 'Which form of sortir has NO consonant at the end of the sound?',
            format: 'mcq',
            opts: ['nous sortons', 'il sort', 'ils sortent', 'vous sortez'],
            correct: 1,
            why: 'il sort is just sor. The t is written and never said, which is true of all three singular forms.',
            ref: 's05-shedtable',
          },
          {
            q: 'Fix this. Two colleagues: « Ils part à huit heures. »',
            format: 'errorSpot',
            accept: ['Ils partent à huit heures', 'partent'],
            answer: 'Ils partent à huit heures.',
            why: 'The singular form on a plural subject. This is the commoner of the two mistakes, and out loud it says one person.',
            ref: 's14-errors',
          },
          {
            q: 'Elles ___ le café. (sentir)',
            format: 'typeIn',
            accept: ['sentent'],
            answer: 'sentent',
            why: 'sentir sheds its t in the singular and restores it here, exactly like partir. Both end in -tir and neither takes the -iss-.',
            ref: 's10-nopredict',
          },
          {
            q: 'Listen. Which is on the page?',
            format: 'listenChoose',
            audio: { mode: 'tts', lang: 'fr-FR', clip: 'Il part tôt.', recordingId: 'rec-a2-10l2-shed' },
            say: 'Il part tôt.',
            opts: ['Ils partent tôt.', 'Both are said exactly like this', 'Neither of these', 'Il part tôt.'],
            correct: 3,
            why: 'No consonant arrived, so it is the singular. On a shedder the ear really does settle this, which is the whole reason the family is worth naming.',
            ref: 's09-ear',
          },
        ],
      },
      {
        id: 'r3-nothing-comes-back',
        label: 'Where nothing comes back',
        targets: ['err-heard-nothing', 'err-lost-consonant'],
        say: 'These are the -er endings. The recording will not help you.',
        questions: [
          {
            q: 'Listen. How many people?',
            format: 'listenChoose',
            audio: { mode: 'tts', lang: 'fr-FR', clip: 'Ils couvrent tout.', recordingId: 'rec-a2-10l2-er' },
            say: 'Ils couvrent tout.',
            opts: ['One or several, the sound does not say', 'Several, certainly', 'One, certainly', 'It is not a real form'],
            correct: 0,
            why: 'couvrir takes -er endings, so il couvre and ils couvrent are one sound. Nothing in the recording can settle it.',
            ref: 's07-ertable',
          },
          {
            q: 'Tu ___ tout. (couvrir)',
            format: 'typeIn',
            accept: ['couvres'],
            answer: 'couvres',
            why: 'The -es of an -er verb. Silent, only tu takes it, and nothing you can hear will ever catch it.',
            ref: 's07-ertable',
          },
          {
            q: 'je couvre, tu couvres, il couvre, ils couvrent. How many different sounds?',
            format: 'mcq',
            opts: ['Four', 'Three', 'One', 'Two'],
            correct: 2,
            why: 'One, and that is the same claim the very first verb lesson made about parler. This family never left it.',
            ref: 's06-ercase',
          },
          {
            q: 'Tap the letters you do not say.',
            format: 'tapSilent',
            word: 'couvrent',
            correct: 'ent',
            why: 'The whole ending, exactly as on an -er verb. Nothing comes back in this family because nothing ever left.',
            ref: 's07-ertable',
          },
          {
            q: 'Fix this. One person: « Il couvrent tout. »',
            format: 'errorSpot',
            accept: ['Il couvre tout', 'couvre'],
            answer: 'Il couvre tout.',
            why: 'Both spellings are said identically, so this survives being read back aloud. Only the pronoun on the page decides it.',
            ref: 's17-dictation',
          },
          {
            q: 'Ils ___ un cadeau. (offrir)',
            format: 'typeIn',
            accept: ['offrent'],
            answer: 'offrent',
            why: 'offrir ends in -frir, so -ent, silent. What you would actually hear is the z of ils in front of the vowel.',
            ref: 's11-waking',
          },
        ],
      },
      {
        id: 'r4-the-waking-s',
        label: 'The s that wakes up',
        targets: ['err-liaison-missed', 'err-heard-nothing'],
        say: 'Two of this family start with a vowel, and they are the two you will meet.',
        questions: [
          {
            q: 'Listen. How many people?',
            format: 'listenChoose',
            audio: { mode: 'tts', lang: 'fr-FR', clip: 'Ils ouvrent à huit heures.', recordingId: 'rec-a2-10l2-liaison' },
            say: 'Ils ouvrent à huit heures.',
            opts: ['One', 'The verb does not say', 'It is not a real form', 'Several'],
            correct: 3,
            why: 'A z arrived in front of the verb. That is the silent s of ils waking up before a vowel, and the verb itself is unchanged.',
            ref: 's11-waking',
          },
          {
            q: 'So what is different between il ouvre and ils ouvrent, out loud?',
            format: 'mcq',
            opts: ['The ending of the verb', 'The link in front of the verb', 'Nothing at all', 'The vowel of the verb'],
            correct: 1,
            why: 'ee-loovr against eel-zoovr. The verb is identical in both; the s of ils is what arrives.',
            ref: 's11-waking',
          },
          {
            q: 'Why can you NOT hear the difference in ils couvrent?',
            format: 'mcq',
            opts: ['couvrir starts with a consonant, so nothing links', 'couvrir is a shedder', 'couvrent is not a real form', 'The ending is different'],
            correct: 0,
            why: 'A liaison needs a vowel to land on. couvrir begins with a c, so the s of ils stays silent and the pair stays identical.',
            ref: 's07-ertable',
          },
          {
            q: 'Vous ___ à sept heures ? (ouvrir)',
            format: 'typeIn',
            accept: ['ouvrez'],
            answer: 'ouvrez',
            why: '-ez, an -er ending. And the s of vous wakes up in front of the vowel too: voo-zoo-vray.',
            ref: 's18-scenario',
          },
          {
            q: 'Say it: they open at eight.',
            format: 'speak',
            target: 'Ils ouvrent à huit heures.',
            why: 'Land the z between ils and ouvrent as one movement. The verb itself stops after oovr.',
            ref: 's16-speak',
          },
          {
            q: 'Fix this. A shop, several staff: « Il ouvrent à huit heures. »',
            format: 'errorSpot',
            accept: ['Ils ouvrent à huit heures', 'Ils'],
            answer: 'Ils ouvrent à huit heures.',
            why: 'The verb is right and the pronoun is not. Out loud this one IS catchable, because the missing s is a missing z.',
            ref: 's11-waking',
          },
        ],
      },
      {
        id: 'r5-mixed',
        label: 'Both families at once',
        targets: ['err-over-iss', 'err-wrong-family'],
        say: 'No warning which family. Decide, then build.',
        questions: [
          {
            q: 'Nous ___ ce soir. (sortir)',
            format: 'typeIn',
            accept: ['sortons'],
            answer: 'sortons',
            why: 'A shedder, so the t comes back and brings a syllable. No -iss-, because sortir is not that family.',
            ref: 's08-sort',
          },
          {
            q: 'Tu ___ la ville. (découvrir)',
            format: 'typeIn',
            accept: ['découvres', 'decouvres'],
            answer: 'découvres',
            why: '-vrir, so -er endings, so -es and silent. The accent is on the stem and is not what is being asked.',
            ref: 's06-ercase',
          },
          {
            q: 'Which pair sounds IDENTICAL?',
            format: 'mcq',
            opts: ['il part / ils partent', 'elle sent / elles sentent', 'il court / ils courent', 'il dort / ils dorment'],
            correct: 2,
            why: 'courir uses the shedders’ endings and has no consonant to shed, so it gives none back. The other three all restore one.',
            ref: 's08-sort',
          },
          {
            q: 'Listen. Which one is it?',
            format: 'listenChoose',
            audio: { mode: 'tts', lang: 'fr-FR', clip: 'Ils dorment encore.', recordingId: 'rec-a2-10l2-pairs' },
            say: 'Ils dorment encore.',
            opts: ['Il dort encore.', 'Ils dorment encore.', 'Elle dort encore.', 'Both the first and the third'],
            correct: 1,
            why: 'The m landed, so it is the plural. The other three all stop at dor, which is what a shedder does when only one person is doing it.',
            ref: 's12-trap',
          },
          {
            q: 'Fix this. A group, still asleep: « Ils dormissent encore. »',
            format: 'errorSpot',
            accept: ['Ils dorment encore', 'dorment'],
            answer: 'Ils dorment encore.',
            why: 'dormir sheds its m and gives it back. It never takes an -iss-, and nor do the other five in its family.',
            ref: 's14-errors',
          },
          {
            q: 'One verb ends in -rir and takes the -iss-. Which?',
            format: 'mcq',
            opts: ['guérir', 'courir', 'ouvrir', 'offrir'],
            correct: 0,
            why: 'guérir, from the last lesson. courir does not, and ouvrir and offrir end in -vrir and -frir and take -er endings instead.',
            ref: 's10-nopredict',
          },
        ],
      },
    ],
  },

  {
    type: 'roundup',
    id: 's23-roundup',
    title: 'What You Can Do Now',
    frSub: 'Ce que vous savez faire',
    say: 'Four things, and then the unit that picks this up.',
    body: `You can take any verb ending in -ir and place it before you build it, which is the only new skill in this lesson: everything after the decision is a rule you already had. ${BOTH_RULES} Six shed a consonant and give it back, five take the endings of an -er verb, and one is neither. The next unit on the trail teaches ${A202_BACKREF}’s venir and tenir, which run the shedding mechanism with a vowel change on top, and ${A211_BACKREF} does the same thing with a whole different ending.`,
    points: [
      `${REFRAME}`,
      `${SHEDDERS.length} shed a consonant in the singular and give it back in the plural.`,
      `${ER_ENDING.length} end in -vrir or -frir and take the endings of an -er verb.`,
      'In front of a vowel the s of ils wakes up, so the plural is audible after all.',
    ],
  },
];

/* ─── The progress card counts the journey rather than restating it ──────── */
{
  const ix = SECTIONS.findIndex((s) => (s as { id?: string }).id === 's21-progress');
  const card = SECTIONS[ix];
  const quiz = SECTIONS.find((s) => s.type === 'quiz');
  if (!card || card.type !== 'progressCheck' || !quiz || quiz.type !== 'quiz') {
    throw new Error('a2.10.l2: the progress card or the quiz is missing, so the card cannot count what is not there');
  }
  card.stats = [
    { k: 'Verbs you can place', v: String(THE_TWELVE.length) },
    { k: 'New sounds to learn', v: '0' },
    { k: 'Missions done', v: `${ix} of ${SECTIONS.length}` },
    { k: 'Exam rounds ahead', v: String(quiz.rounds?.length ?? 0) },
  ];
}

/* ─── Acts ───────────────────────────────────────────────────────────────── */

const ACTS: LessonAct[] = [
  {
    id: 'act1',
    title: 'Two families',
    sections: ['s01-scene', 's02-goals', 's03-twofamilies'],
    milestone: 'You know what made a non-word, and that both rules ahead of you are ones you already have.',
    estScreens: 18,
    restPoints: ['s01-scene/after-break'],
  },
  {
    id: 'act2',
    title: 'The consonant comes back',
    sections: ['s04-shed', 's05-shedtable'],
    milestone: 'You can build all six forms of a shedder, and you have heard the letter arrive.',
    estScreens: 14,
  },
  {
    id: 'act3',
    title: 'And the ones where it does not',
    sections: ['s06-ercase', 's07-ertable'],
    milestone: 'You can build the five that are -er verbs, and you have heard four of their forms be one sound.',
    estScreens: 14,
  },
  {
    id: 'act4',
    title: 'Which family is this?',
    sections: ['s08-sort', 's09-ear', 's10-nopredict', 's11-waking', 's12-trap', 's13-flash'],
    milestone: 'You can place a verb before you build it, and you know the one ending that gives the answer away.',
    estScreens: 42,
    restPoints: ['s09-ear/halfway', 's12-trap/after-cards'],
  },
  {
    id: 'act5',
    title: 'Out in the world',
    sections: ['s14-errors', 's15-notmine', 's16-speak', 's17-dictation', 's18-scenario', 's19-reading'],
    milestone: 'You have said both families out loud and spelled the four forms that are one sound.',
    estScreens: 44,
    restPoints: ['s16-speak/halfway', 's18-scenario/halfway'],
  },
  {
    id: 'act6',
    title: 'Prove it',
    sections: ['s20-review', 's21-progress', 's22-quiz', 's23-roundup'],
    milestone: `Lesson complete. The unit is done, and the mechanism carries into ${unitRef('a2.02')} and ${unitRef('a2.11')}.`,
    estScreens: 48,
    restPoints: ['s20-review/halfway', 's22-quiz/after-r2', 's22-quiz/after-r4'],
  },
];

/* ─── Deck tranches ──────────────────────────────────────────────────────── */

const DECK_TRANCHE: string[][] = [
  // Act 1 releases nothing: the scene runs on display strings, and the sentence
  // that produced a non-word is not a corpus row.
  [],
  // Act 2: the shedder paradigm and the six verbs it teaches.
  [...familyIds('shed'), ...SHEDDERS.map(verbId)],
  // Act 3: the -er-ending paradigm and its five verbs.
  [...familyIds('ercase'), ...ER_ENDING.map(verbId)],
  // Act 4: the sort's own evidence, the liaison pair, and courir.
  [...familyIds('sort'), ...familyIds('liaison'), ...NEITHER.map(verbId)],
  // Act 5: the applied sentences, all named by id in s16-speak. a2.10.l1's two
  // reused rows are released here too, because s10-nopredict is where they are
  // shown and act 4 has already been.
  [...familyIds('apply'), ...ENDING_PROVES_NOTHING.map((p) => p.l1Id)],
  [],
];

/* ─── Error triggers and their drills ────────────────────────────────────── */

const ERROR_TRIGGERS: ErrorTrigger[] = [
  {
    id: 'err-wrong-family',
    description: 'Sorts a verb into the wrong family, usually by reading the last four letters of the naming form.',
    detectOn: ['s08-sort', 's10-nopredict', 's22-quiz/r1-which-family'],
    drill: 'drill-place-it',
    retest: 'retest-place-it',
  },
  {
    id: 'err-lost-consonant',
    description: 'Leaves the consonant off a shedder’s plural: ils part, ils dorm. Says one person out loud.',
    detectOn: ['s05-shedtable', 's14-errors', 's22-quiz/r2-the-consonant'],
    drill: 'drill-land-it',
    retest: 'retest-land-it',
  },
  {
    id: 'err-heard-nothing',
    description: 'Expects the plural of an -er-ending verb to be audible, and hears a difference that is not there.',
    detectOn: ['s07-ertable', 's09-ear', 's22-quiz/r3-nothing-comes-back'],
    drill: 'drill-one-sound',
    retest: 'retest-one-sound',
  },
  {
    id: 'err-liaison-missed',
    description: 'Misses the z of ils in front of a vowel, or adds one where a consonant blocks it.',
    detectOn: ['s11-waking', 's19-reading', 's22-quiz/r4-the-waking-s'],
    drill: 'drill-waking-s',
    retest: 'retest-waking-s',
  },
  {
    id: 'err-over-iss',
    description: 'Puts the -iss- of the last lesson on a verb that never takes it: ils partissent, ils dormissent.',
    detectOn: ['s01-scene', 's12-trap', 's22-quiz/r5-mixed'],
    drill: 'drill-no-iss',
    retest: 'retest-no-iss',
  },
];

const DRILLS: LessonDrill[] = [
  {
    id: 'drill-place-it',
    title: 'Which family?',
    format: 'flashcard',
    coach: 'A naming form on the left. Say the family out loud before you turn the card.',
    pairs: THE_TWELVE.map((v) => [
      v,
      SHEDDERS.includes(v) ? FAMILY_LABEL.shed : ER_ENDING.includes(v) ? FAMILY_LABEL.er : FAMILY_LABEL.neither,
    ] as [string, string]),
  },
  {
    id: 'retest-place-it',
    title: 'One more time',
    format: 'mcq',
    q: 'Which of these three takes the endings of an -er verb?',
    opts: ['mentir', 'souffrir', 'servir'],
    correct: 1,
    why: 'souffrir ends in -frir. mentir and servir both shed a consonant, and nothing in -tir or -vir says so.',
  },
  {
    id: 'drill-land-it',
    title: 'The letter that comes back',
    format: 'sort',
    buckets: ['One person', 'Several'],
    items: ['fr.a2.verbes.463', 'fr.a2.verbes.464', 'fr.a2.verbes.475', 'fr.a2.verbes.476', 'fr.a2.verbes.479', 'fr.a2.verbes.480'],
    coach: 'Play each one and listen at the very end. A consonant there means several. These are all shedders, so the ear can settle every one.',
  },
  {
    id: 'retest-land-it',
    title: 'One more time',
    format: 'mcq',
    q: 'Ils ___ ce soir. (sortir)',
    opts: ['sort', 'sortent', 'sortissent'],
    correct: 1,
    why: 'The t comes back for the plural. ils sort says one person and ils sortissent is not a word.',
  },
  {
    id: 'drill-one-sound',
    title: 'Four spellings, one sound',
    format: 'sort',
    buckets: ['You can hear which', 'You cannot'],
    // courir is in here because it is the item that makes the bucket a judgement
    // rather than a lookup: it takes the shedders' endings and still cannot be
    // heard, so a learner sorting by family alone puts it in the wrong pile.
    items: ['fr.a2.verbes.467', 'fr.a2.verbes.469', 'fr.a2.verbes.470', 'fr.a2.verbes.471', 'fr.a2.verbes.463', 'fr.a2.verbes.464', 'fr.a2.verbes.477', 'fr.a2.verbes.478'],
    coach: 'The couvrir forms are one sound and the partir ones are not. Play each one; the last pair is the one to think about.',
  },
  {
    id: 'retest-one-sound',
    title: 'One more time',
    format: 'mcq',
    q: 'How many of couvrir’s six forms sound the same?',
    opts: ['Two', 'Four', 'All six'],
    correct: 1,
    why: 'je, tu, il and ils are all koovr. Only nous and vous are audible, exactly as on any -er verb.',
  },
  {
    id: 'drill-waking-s',
    title: 'Does the s wake up?',
    format: 'flashcard',
    coach: 'A verb on the left. Say whether the plural would be audible, and why.',
    pairs: [
      ['ils ouvrent', 'yes, a z, because the verb starts with a vowel'],
      ['ils couvrent', 'no, the c blocks the link'],
      ['ils offrent', 'yes, a z again'],
      ['ils souffrent', 'no, the s of souffrir is a consonant'],
      ['ils partent', 'yes, but from the t of the verb, not from a link'],
    ],
  },
  {
    id: 'retest-waking-s',
    title: 'One more time',
    format: 'mcq',
    q: 'Which one would you hear as plural?',
    opts: ['ils couvrent', 'ils ouvrent', 'ils découvrent'],
    correct: 1,
    why: 'Only ouvrir starts with a vowel, so only it takes the z. The other two begin with a consonant and stay identical to their singular.',
  },
  {
    // A SORT over real rows rather than a flashcard, so the learner hears the
    // -iss- instead of reading about it — and so a2.10.l1's own two sentences are
    // played back inside this lesson, which is where the cross-lesson claim
    // stops being a comparison and becomes a decision.
    id: 'drill-no-iss',
    title: 'Does it take the -iss-?',
    format: 'sort',
    buckets: ['Takes the -iss-', 'Does not'],
    items: ['fr.a2.verbes.202', 'fr.a2.verbes.198', 'fr.a2.verbes.464', 'fr.a2.verbes.470', 'fr.a2.verbes.476', 'fr.a2.verbes.478'],
    coach: 'Two of these are from the last lesson and four are from this one. Play each and listen for the extra syllable in the middle of the verb.',
  },
  {
    id: 'retest-no-iss',
    title: 'One more time',
    format: 'mcq',
    q: 'Which of these three takes the -iss- in the plural?',
    opts: ['dormir', 'grandir', 'servir'],
    correct: 1,
    why: 'grandir is from the last lesson and grows the -iss-. dormir and servir both shed a consonant instead.',
  },
];

/* ─── Reference sheets ───────────────────────────────────────────────────── */

const SHEETS: ReferenceSheet[] = [
  {
    id: 'sheet.a2.10l2.families',
    title: 'Both families, in full',
    layer: 'deep',
    contains: ['partir and couvrir with all nine pronouns', 'What each form sounds like', 'Where the liaison changes it'],
    sections: [
      {
        type: 'table',
        id: 'sheet-fam-shed',
        title: 'partir, all nine pronouns',
        layer: 'deep',
        cols: ['Pronoun', 'partir', 'Sounds like', 'English'],
        rows: [
          ["je / j'", 'pars', '[zhuh par]', 'I leave'],
          ['tu', 'pars', '[tü par]', 'you leave, one person, close'],
          ['il', 'part', '[eel par]', 'he leaves'],
          ['elle', 'part', '[el par]', 'she leaves'],
          ['on', 'part', '[ohⁿ par]', 'we leave, said out loud'],
          ['nous', 'partons', '[noo par-tohⁿ]', 'we leave, written'],
          ['vous', 'partez', '[voo par-tay]', 'you leave, politely or plural'],
          ['ils', 'partent', '[eel part]', 'they leave, any group with a man in it'],
          ['elles', 'partent', '[el part]', 'they leave, all women'],
        ],
      },
      {
        type: 'table',
        id: 'sheet-fam-er',
        title: 'couvrir, all nine pronouns',
        layer: 'deep',
        cols: ['Pronoun', 'couvrir', 'Sounds like', 'English'],
        rows: [
          ["je / j'", 'couvre', '[zhuh koovr]', 'I cover'],
          ['tu', 'couvres', '[tü koovr]', 'you cover, one person, close'],
          ['il', 'couvre', '[eel koovr]', 'he covers'],
          ['elle', 'couvre', '[el koovr]', 'she covers'],
          ['on', 'couvre', '[ohⁿ koovr]', 'we cover, said out loud'],
          ['nous', 'couvrons', '[noo koo-vrohⁿ]', 'we cover, written'],
          ['vous', 'couvrez', '[voo koo-vray]', 'you cover, politely or plural'],
          ['ils', 'couvrent', '[eel koovr]', 'they cover, any group with a man in it'],
          ['elles', 'couvrent', '[el koovr]', 'they cover, all women'],
        ],
      },
      {
        type: 'teach',
        id: 'sheet-fam-why',
        title: 'Why the two tables look so different',
        layer: 'deep',
        body: `Put the two side by side and the shedders have five different sounds across nine pronouns while the -er-ending family has three. That is the whole of the difference, and neither of them is new. ${A210_REFRAME} is what the first table does: par in the singular and part in the plural, and the t was in the naming form the whole time. ${A201_REFRAME} is what the second table does, unchanged from the very first verb lesson, because these five simply are -er verbs wearing an -ir infinitive. The only genuinely new thing in this lesson is deciding which table a verb belongs to before you start, and the naming form tells you only when it ends in -vrir or -frir. There is one wrinkle in the second table and it matters because it covers the two commonest verbs in that family. ouvrir and offrir begin with a vowel, so the silent s of ils wakes up in front of them: ils ouvrent is eel-zoovr and il ouvre is ee-loovr, and the plural is audible after all. The verb has not changed. The link in front of it has. A consonant blocks that, which is why couvrir and not ouvrir is the verb this lesson used to state the four-spellings-one-sound claim.`,
      },
      {
        type: 'teach',
        id: 'sheet-fam-next',
        title: 'What carries forward',
        layer: 'deep',
        body: `The shedding mechanism is the one that keeps coming back. ${Cap(A202_BACKREF)} teaches venir and tenir, which shed a consonant and change the vowel of the stem as well: je viens against ils viennent is the same movement with more happening. ${Cap(A211_BACKREF)} teaches the regular -RE verbs, and il vend against ils vendent is exactly this lesson's first table with a different letter. So the six verbs you held as a list here are the entry price for three later units rather than a dead end. What does NOT carry forward is the -iss- of the previous lesson: it belongs to that family and to no other, and knowing where it stops is worth as much as knowing where it applies.`,
      },
    ],
  },
  {
    id: 'sheet.a2.10l2.lists',
    title: 'The twelve, sorted',
    layer: 'deep',
    contains: ['Which verb is in which family', 'What each one means', 'The one ending that gives it away'],
    sections: [
      {
        type: 'table',
        id: 'sheet-lists-table',
        title: 'Twelve verbs and their family',
        layer: 'deep',
        cols: ['Verb', 'Family', 'Plural', 'Meaning'],
        rows: THE_TWELVE.map((v) => [
          v,
          SHEDDERS.includes(v) ? 'sheds' : ER_ENDING.includes(v) ? '-er endings' : 'neither',
          SHEDDERS.includes(v) ? FAMILY_LABEL.shed : ER_ENDING.includes(v) ? FAMILY_LABEL.er : FAMILY_LABEL.neither,
          verbEn(v),
        ]),
      },
      {
        type: 'teach',
        id: 'sheet-lists-why',
        title: 'Which of these you can work out, and which you cannot',
        layer: 'deep',
        body: `Five of the twelve are free. ${ER_ENDING.join(', ')} all end in -vrir or -frir, and no verb that takes the -iss- ends either way, so the spelling settles them before you have to think. The other six are the price of the lesson: ${SHEDDERS.join(', ')} have to be held as a list, because ralentir takes the -iss- and sentir does not and both end in -tir, and guérir takes it and courir does not and both end in -rir. Six is not many, and they are six you need early: partir, sortir and dormir turn up in the first week of anybody's French. courir is the odd one out and is worth a sentence of its own. It uses the endings of the shedders, so it looks like them on the page, but its stem has no consonant to shed, so it never gives one back and il court and ils courent are one sound. Filed with the shedders it will mislead you; filed on its own it costs nothing.`,
      },
    ],
  },
];

export const VERBES_IR_FAM_LESSON: Lesson = {
  id: 'a2.10.l2',
  unitId: 'a2.10',
  // The lesson's index WITHIN its unit. `lessonsOfUnit` sorts on this, so it is
  // what puts this lesson behind a2.10.l1 rather than in front of it.
  seq: 2,
  title: 'Les autres verbes en -IR',
  level: 'a2',
  // NOT the computed eyebrow. `lessonEyebrow` draws "A2 · LEÇON 03" for both
  // lessons of this unit and that is correct — it answers "where am I in the
  // track", which has one answer for a unit. `lesson.tsx` uses the raw `tag` for
  // the in-lesson header instead, which is where the two need to differ, and
  // a1.30.l2 is the precedent (it carries "A1 · EXAMEN" against its sibling's
  // "A1 · LEÇON 30"). The batch asserts this STARTS WITH the computed eyebrow, so
  // a re-seq of the unit still fails loudly.
  tag: 'A2 · LEÇON 03 · SUITE',
  intro:
    'Twelve verbs end in -ir and take none of the pattern you just learned. They split into two families, and each one runs a rule you already have, so the only new skill here is deciding which before you build.',

  sections: SECTIONS,
  itemIds: ITEM_IDS,
  version: 3,

  grammarAssumed: [
    'The present tense of regular -er verbs, introduced in a2.01',
    'That -e, -es and -ent are silent and -ons and -ez are not, introduced in a2.01',
    'The present tense of regular -ir verbs and the -iss- of the plural, introduced in a2.10',
    'That the plural of a regular -ir verb is audible where the singular is not, introduced in a2.10',
    'Liaison, and that a silent final consonant links onto a following vowel, introduced in sons.10',
  ],
  grammarIntroduced: [
    'That a verb ending in -ir belongs to one of three families, decided verb by verb',
    'The present tense of the verbs whose stem sheds a consonant in the singular',
    'That -vrir and -frir verbs take the endings of a regular -er verb',
    'That the infinitive ending does not predict which family a verb is in',
    'That liaison makes the plural of a vowel-initial verb audible when the ending cannot',
  ],

  features: ['roleplay', 'voiceflash'],
  scenarioId: undefined,

  overview: {
    titleEn: 'The Other -IR Verbs',
    subFr: 'Les autres verbes en -IR',
    introFr: "Douze verbes en -ir qui ne prennent pas le -iss-. Deux familles, et deux règles que vous avez déjà.",
    minutes: 26,
    difficulty: 3,
    glyph: 'Ir²',
    screens: 180,
  },

  acts: ACTS,
  reframe: REFRAME,
  errorTriggers: ERROR_TRIGGERS,
  drills: DRILLS,
  sheets: SHEETS,
  deckTranche: DECK_TRANCHE,
  terms: VERBES_IR_FAM_TERMS,

  audio: {
    defaultLang: 'fr-FR',
    speeds: [1.0, 0.65],
    coachVoice: 'coach-en-warm',
    interfaceSounds: ['correct', 'incorrect', 'checkpoint'],
    recorded: [
      {
        id: 'rec-a2-10l2-shed',
        desc: 'IL PART AND ILS PARTENT, ONE CONTINUOUS TAKE, ONE VOICE, RECORDED ADJACENTLY AND IN THAT ORDER. The two are one consonant apart: eel par, then eel part. The T at the end of the plural must be ORDINARY: a final consonant released the way any French speaker releases it, not a taught, lengthened or emphasised one. RECORDED APART THE LEARNER COMPARES TWO PERFORMANCES INSTEAD OF TWO FORMS, and any drift in pace or pitch between the halves will be heard as the difference instead of the T. The same instruction covers every pair in this clip list, and each pair is one take. The wrong-then-right pass for the trap drill goes in the same session: the wrong version is a competent learner saying eel par-TEES, which is confident and fluent and not a word, and it must not be caricatured.',
        clipIds: ['il part', 'ils partent', 'Il part tôt.', 'Ils partent tôt.', 'Ils dorment encore.', 'Elles sentent le café.'],
      },
      {
        id: 'rec-a2-10l2-er',
        desc: 'THE COUVRIR QUARTET, IN ONE TAKE, AND THE FOUR MUST BE INDISTINGUISHABLE. je couvre, tu couvres, il couvre, ils couvrent. This is the opposite instruction from the shedder clip and it is just as important: do not help, do not differentiate them, do not let the final -ent surface as anything at all. If a listener can tell any of these four apart from the audio alone, the recording has taught the opposite of what the lesson teaches. Then nous couvrons and vous couvrez in the same take, ordinary and unemphasised, because they are the only two the ear is supposed to get.',
        clipIds: ['je couvre', 'tu couvres', 'il couvre', 'ils couvrent', 'Je couvre tout.', 'Tu couvres tout.', 'Il couvre tout.', 'Ils couvrent tout.', 'Nous couvrons tout.', 'Vous couvrez tout.'],
      },
      {
        id: 'rec-a2-10l2-liaison',
        desc: 'THE WAKING S, and the pair must differ ONLY in the link. « Il ouvre à huit heures. » then « Ils ouvrent à huit heures. », one take, back to back. In the first the l of il runs onto the vowel as one word, ee-loovr. In the second the s of ils arrives as a z, eel-zoovr. THE VERB ITSELF IS IDENTICAL IN BOTH and must sound it: the whole teaching is that what changed is in front of the verb and not inside it. Do not separate the pronoun from the verb with a pause in either half, because the pause is exactly what destroys a liaison.',
        clipIds: ['Il ouvre à huit heures.', 'Ils ouvrent à huit heures.', 'Ils offrent un cadeau.'],
      },
      {
        id: 'rec-a2-10l2-pairs',
        desc: 'The mixed listening pairs, each pair one take back to back, singular then plural: il part / ils partent, il couvre / ils couvrent, il court / ils courent. Two of those three pairs are AUDIBLY DIFFERENT and one is IDENTICAL, and the learner is being asked to notice which is which, so the recording must not flatten the difference in the first two or invent one in the third. il court and ils courent in particular must be the same sound: courir has no consonant to give back and a helpful reading that hints at one would make the hardest question in the lesson unanswerable.',
        clipIds: ['Il part tôt.', 'Ils partent tôt.', 'Il couvre tout.', 'Ils couvrent tout.', 'Il court vite.', 'Ils courent vite.', 'Ils dorment encore.'],
      },
      {
        id: 'rec-a2-10l2-twelve',
        desc: 'The twelve naming forms, read as a flat list at conversational pace, one voice, in the order the lesson groups them: the six shedders, then the five that take -er endings, then courir. Every one ends in the same EER sound and that sameness is the point, and the learner should come away hearing that the infinitive tells them nothing, which is exactly what the lesson claims. Do not vary the intonation between the groups; the grouping is on the screen and must not be given away by the reading. About a second between them so a learner can repeat into the gap.',
        clipIds: [...THE_TWELVE],
      },
      {
        id: 'rec-a2-10l2-scene',
        desc: 'The opening scene, French bubbles only, one woman in her twenties at an ordinary hostel-desk pace, friendly and unhurried. The « Pardon ? » is the whole scene and it is the hardest line to get right: it is a genuine, mild, unbothered request for a repeat, from somebody who simply did not catch a word. NOT a correction, not surprise, not amusement, and above all not pointed. She has no idea anything went wrong; there was just no word there. If it sounds at all like a raised eyebrow the scene stops being about the language and starts being about her.',
        clipIds: ['Bonjour. Vous partez tous les trois ?', 'Et vos amis, à quelle heure ?', 'Pardon ?'],
      },
    ],
    ambienceDefault: 'off',
  },
};

/** Exported for the authoring script, the merge script and the tests. */
export const VERBES_IR_FAM_ITEM_IDS = ITEM_IDS;
export const VERBES_IR_FAM_SPEAK_IDS = SPEAK_IDS;
export const VERBES_IR_FAM_DICTATION_IDS = DICTATION_IDS;
export const VERBES_IR_FAM_REPAIRED_RESPELL = REPAIRED_RESPELL;

/** The section that must carry the shedders' contrast, with the pair ADJACENT. */
export const SHED_SECTION_ID = 's05-shedtable';
export const SHED_ROW_ORDER = SHED_ROW_IDS;
/** The section that must carry the -er family's contrast, also adjacent, and
 *  whose two rows must be IDENTICAL rather than merely different. */
export const ER_SECTION_ID = 's07-ertable';
export const ER_ROW_ORDER = ER_ROW_IDS;
/** Where the liaison case is taught, and where the sort is proved. */
export const WAKING_SECTION_ID = 's11-waking';
export const NOPREDICT_SECTION_ID = 's10-nopredict';
/** Where the class this lesson does NOT teach is handed on. */
export const NOTMINE_SECTION_ID = 's15-notmine';
/** Re-exported so a consumer needs one import. */
export const SHED_PAIR_IDS = SHED_PAIR;
export const ER_PAIR_IDS = ER_PAIR;
export const LIAISON_PAIR_IDS = LIAISON_PAIR;
export const SHED_TRIPLE_IDS = SHED_TRIPLE;
export const ER_QUARTET_IDS = ER_QUARTET;
export const VERBES_IR_FAM_NUMBER_PAIRS = NUMBER_PAIRS;
export const VERBES_IR_FAM_VERB_RESPELL = verbRespell;
