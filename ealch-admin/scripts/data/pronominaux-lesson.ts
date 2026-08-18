// a2.22.l1, « Les verbes pronominaux », seq 19 on the A2 trail.
//
// 24 sections, 6 acts, 30 questions, one stepped trapDrill and one reference
// sheet. Every French string on every screen comes from pronominaux-corpus.ts or
// from pronominaux-imported.ts and none is typed twice.
//
// ── WHAT THIS LESSON OWNS ────────────────────────────────────────────────
//
// THE EXTRA PRONOUN, AND THE FACT THAT IT MOVES. It is the fourth kind of thing
// doctrine §B.5 lists — THE FAMILY, a pattern that generalises to items the
// lesson never taught — because once the learner knows the little word is the
// subject in another shape, every pronominal verb in the language is derivable
// and there is nothing left to memorise.
//
// a1.25 taught three of these as whole lexical items and said so; this lesson is
// where the other three arrive and where the framing changes from « store it
// with the verb » to « it is the person, again ». Corpus file §2.
//
// ── ACT WEIGHTS ──────────────────────────────────────────────────────────
//
//   the six forms      act 2, TWO sections
//   the Owns           act 3, SEVEN sections
//   the trap           act 4, three, one of them a stepped trapDrill
//
// Doctrine §B.5: if the act structure gives the paradigm more missions than the
// Owns, the wrong lesson got built. Seven against two, asserted in all three
// layers. The paradigm act is deliberately the lightest in the lesson: the table
// is scaffolding and the learner has already met half of it in a1.25.
//
// ── THE THREE REQUIRED LAYOUTS, AND WHERE THE BRIEF IS WRONG ABOUT ONE ────
//
// RIGHT, and all three are built:
//   1. the six forms on one screen with the pronoun column visually separate
//   2. « Je lave la voiture. » beside « Je me lave. »
//   3. « Je me lave. » beside « Je ne me lave pas. », the ne visibly in front
//
// WRONG: « One `table`, one `tapTable`, then stop. » A `table` at layer `core`
// is a `table-in-core` density failure (`density.logic.ts:423`) and cannot be
// authored in the flow at all — corrections §8, and a2.21's brief made the same
// mistake. So layout 1 is a THREE-COLUMN `tapTable`, which is what actually
// delivers what the brief asked for: `LessonRich.tsx:670` gives every cell
// `flex: 1` and styles column 0 differently from the rest, so « je | me | lave »
// is three visually separate columns rather than one string with spaces in it.
// The full table lives in the reference sheet, where `layer: 'deep'` allows it.
//
// SIX ROWS IS THE CEILING on a Pixel 6 (corrections §8) and the paradigm is
// exactly six, which is the whole reason this layout fits at all.

import type {
  ErrorTrigger, Lesson, LessonAct, LessonDrill, LessonSection, ReferenceSheet, SceneBeat,
} from '../../../ealch-v2/src/content/schema.ts';
import {
  A118_REFRAME, A125_ERROR_CLAIM, A125_HANDOFF, A201_REFRAME, A209_CREDIT,
  A209_REFRAME, A221_REFRAME, ALPHABET_UNIT, AUDIBLE_CONTRAST, CLITIC_TABLE,
  DIRECT_OBJECT_UNIT, DOUBLED, ER_UNIT, ETRE_UNIT, EXC_UNIT, FUTUR_UNIT,
  INDIRECT_OBJECT_UNIT, LESSON_ID, NEGATION_EXTENSION, NEGATION_RULE,
  NEGATION_UNIT, OBJECT_DEFERRAL, PARADIGM_IDS, PASSE_UNIT, PAST_DEFERRAL,
  PAST_UNIT, PRESENT_NO_AGREEMENT, RECIPROCAL_ID, REFRAME, ROUTINE_UNIT,
  SCENE_ERROR, SCENE_ERROR_EN, SCENE_RIGHT, SCENE_STALL, SCENE_STALL_EN,
  SHEET_ID, STEM_IDS, STEM_MOVED, STEM_STILL, UNIT, en, fr, ipaOf, personId,
  respellOf, sub,
} from './pronominaux-corpus.ts';
import { ALREADY_YOURS, EVIDENCE_LINE, PRONOMINAUX_TERMS } from './pronominaux-terms.ts';
import { importedEn, importedFr, rowCard, sub as impSub } from './pronominaux-imported.ts';
import { unitRef } from './_unit-ref.ts';

/** A citation that OPENS a sentence needs a capital, and the label is built at
 *  interpolation time rather than typed, so the capital has to be applied here.
 *  « lesson 22 said this first » is not a sentence. */
const Cap = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

/* ─── Reading the rows ─────────────────────────────────────────────────────
 *
 * The lesson NEVER types a French string that is also a corpus row. a2.13 §6.2
 * shipped a grid that disagreed with its own cards and every host gate was
 * green.                                                                     */

const A = (n: number): string => `fr.a2.verbes.${n}`;

/** Strips a sentence-final full stop, for the places a French line is quoted
 *  INSIDE a question that has its own punctuation. Found on a Pixel 6 by a2.20:
 *  a question quoting two corpus rows rendered « ... peur.. ». */
const noStop = (s: string): string => s.replace(/\.$/u, '');

/** A groupDrill item at `lg`. `MissionRich.tsx:439` draws `fr`, `ipa` and `note`
 *  and nothing else at this size, so the respelling and the gloss go in `note`. */
const card = (id: string) => ({ fr: fr(id), ipa: ipaOf(id), note: `${sub(id)} ${en(id)}` });

/* ─── Section ids, as LITERALS ─────────────────────────────────────────────
 *
 * Literals rather than reads off a const declared below, because
 * `export const X = SECTIONS[0].id` before SECTIONS is a temporal dead zone.  */

export const SCENE_SECTION_ID = 's01-scene';
export const APPELLE_SECTION_ID = 's02-appelle';
export const GOALS_SECTION_ID = 's03-goals';
export const CONTRAST_SECTION_ID = 's04-contrast';
export const PERSONS_SECTION_ID = 's05-persons';
export const DOUBLED_SECTION_ID = 's06-doubled';
export const LISTEN_SECTION_ID = 's07-listen';
export const BUILD_SECTION_ID = 's08-build';
export const NOMEANING_SECTION_ID = 's09-nomeaning';
export const ELISION_SECTION_ID = 's10-elision';
export const VOWEL_SECTION_ID = 's11-vowel';
export const UNSEEN_SECTION_ID = 's12-unseen';
export const LATER_SECTION_ID = 's13-later';
export const NEGATIVE_SECTION_ID = 's14-negative';
export const WRAP_SECTION_ID = 's15-wrap';
export const ERRORS_SECTION_ID = 's16-errors';
export const FLASH_SECTION_ID = 's17-flash';
export const DICTATION_SECTION_ID = 's18-dictation';
export const TALK_SECTION_ID = 's19-talk';
export const SPEAK_SECTION_ID = 's20-speak';
export const REVIEW_SECTION_ID = 's21-review';
export const PROGRESS_SECTION_ID = 's22-progress';
export const QUIZ_SECTION_ID = 's23-quiz';
export const ROUNDUP_SECTION_ID = 's24-roundup';

/** THE OWNS. Seven sections against the two that walk the paradigm, and every
 *  layer walks these two lists rather than counting by hand. */
export const OWNS_SECTION_IDS = [
  LISTEN_SECTION_ID, BUILD_SECTION_ID, NOMEANING_SECTION_ID, ELISION_SECTION_ID,
  VOWEL_SECTION_ID, UNSEEN_SECTION_ID, LATER_SECTION_ID,
];
export const PARADIGM_SECTION_IDS = [PERSONS_SECTION_ID, DOUBLED_SECTION_ID];

/* ─── ACT 1. The word you have been saying since the first lesson ──────────*/

/** Doctrine §B.2: an A2 scene opens on somebody who started a sentence they
 *  could not finish. Nobody is rude, nobody is corrected, nothing is
 *  mispronounced. The learner runs out of sentence in public.
 *
 *  a1.25 already ships this error ABSTRACTLY on its `s16-errors`. This is that
 *  card happening, to somebody who knows the rule and loses it under load, and
 *  a1.25 is named on the resolve beat so it reads as a payoff. */
const SCENE_BEATS: SceneBeat[] = [
  {
    kind: 'narration',
    size: 'md',
    text: 'A language exchange, week three, and the question you were hoping for. Somebody has asked what your mornings look like and you have the words for all of it.',
    audio: { mode: 'tts', voice: 'coach' },
  },
  {
    kind: 'bubble',
    from: 'them',
    speaker: 'Ton binôme',
    fr: 'Raconte-moi ta matinée.',
    en: 'Tell me about your morning.',
    size: 'md',
    reveal: 'tap',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a2-22-scene' },
  },
  {
    kind: 'bubble',
    from: 'you',
    fr: SCENE_ERROR,
    en: SCENE_ERROR_EN,
    size: 'md',
    reveal: 'tap',
    stage: `${Cap(unitRef(ROUTINE_UNIT))} gave you this sentence whole and you have said it before. Under a real question the little word is the part that goes, because it is the part that carries no meaning you can point at.`,
    audio: { mode: 'tts', lang: 'fr-FR' },
  },
  {
    kind: 'bubble',
    from: 'you',
    fr: SCENE_STALL,
    en: SCENE_STALL_EN,
    size: 'md',
    reveal: 'tap',
    stage: 'And the second one goes the same way, and now the sentence has stopped.',
    audio: { mode: 'tts', lang: 'fr-FR' },
  },
  {
    kind: 'choice',
    size: 'md',
    prompt: 'Which of these is the sentence you meant?',
    options: [
      { fr: SCENE_RIGHT, en: 'I get up at seven.', outcome: 'works' },
      { fr: SCENE_ERROR, en: SCENE_ERROR_EN, outcome: 'breaks' },
    ],
    followUp: {
      works: 'That is the one. The little word is not decoration, and it is the part that goes first when the sentence gets hard.',
      breaks: 'That is what was said, and it is correct French about something else. Nobody could hear a mistake because there was not one to hear.',
    },
  },
  {
    kind: 'break',
    size: 'md',
    heading: 'Nothing went wrong that anybody could hear',
    body: `${SCENE_ERROR} is a complete French sentence and it says you lift something at seven o'clock. Your binôme is not confused and is not correcting you. She is waiting to hear what you lift.`,
    wrong: { fr: SCENE_ERROR, ipa: '/ʒə lɛv a sɛt œʁ/', respell: '[zhuh LEHV ah seh TUHR]', en: SCENE_ERROR_EN },
    right: { fr: SCENE_RIGHT, ipa: '/ʒə mə lɛv a sɛt œʁ/', respell: '[zhuh muh LEHV ah seh TUHR]', en: 'I get up at seven.' },
    coach: `One word, and it is the one that carries no meaning you can point at.`,
  },
  {
    kind: 'resolve',
    size: 'md',
    text: `${Cap(unitRef(ROUTINE_UNIT))} put this exact error on a card. What it could not tell you was what to do when the person is not je: it had shown you three. ${REFRAME}`,
  },
];

const SECTIONS: LessonSection[] = [
  {
    id: SCENE_SECTION_ID,
    type: 'scene',
    title: 'The Morning That Stopped',
    frSub: 'La matinée qui s’arrête',
    layer: 'core',
    render: 'screens',
    setting: {
      place: 'A café table, two coffees, a language exchange',
      city: 'Lyon',
      time: 'Saturday morning',
    },
    beats: SCENE_BEATS,
  },

  /* THE OPENER THE BRIEF ASKED FOR, and the measurement behind it is in the
   * corpus file: `m'appelle` is in sons.01, which is seq 1 of the sons track and
   * the first lesson in the product. NOT a1.01, which is what the brief said. */
  {
    id: APPELLE_SECTION_ID,
    type: 'cardDeck',
    title: 'You Have Been Saying One All Along',
    frSub: 'Je m’appelle',
    layer: 'core',
    size: 'lg',
    render: 'deck',
    say: 'Three cards, and the first one is a sentence you learned before you learned the alphabet.',
    hint: 'The oldest sentence you own turns out to be one of these.',
    terms: ['extraWord', 'notAboutSelf'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a2-22-appelle' },
    cards: [
      {
        head: 'The first French sentence in the app',
        label: 'you already say this',
        fr: importedFr('fr.a1.presentation-personnelle.001'),
        sub: importedEn('fr.a1.presentation-personnelle.001'),
        body: `${Cap(unitRef(ALPHABET_UNIT))} taught this first, and there is a little word in it that nobody explained. It is the one this whole lesson is about, and you have been getting it right for thirty lessons without knowing there was anything to get.`,
      },
      {
        head: 'And it is not about washing yourself',
        label: 'no meaning at all',
        fr: `${rowCard('fr.a1.rencontres.105').fr} · ${rowCard('fr.a1.routines.087').fr}`,
        sub: `${impSub('fr.a1.rencontres.105')} · ${impSub('fr.a1.routines.087')}`,
        body: 'To be called, and to hurry. Nobody calls themselves and nobody hurries themselves. The little word is simply part of how these verbs are built, and it is obligatory anyway.',
      },
      {
        head: 'What changes is which little word',
        label: 'and it changes',
        fr: `${noStop(importedFr('fr.a1.presentation-personnelle.001'))} · ${noStop(fr(A(739)))}`,
        sub: `${en(A(739))} ${sub(A(739))}`,
        body: 'Je m\'appelle, tu te dépêches. The word in the middle is different in those two sentences, and it is different because the person in front of it is.',
      },
    ],
  },

  {
    id: GOALS_SECTION_ID,
    type: 'goals',
    title: 'What You Will Be Able To Do',
    frSub: 'Ce que vous saurez faire',
    layer: 'core',
    goals: [
      { t: 'Use all six, not three', s: `${Cap(unitRef(ROUTINE_UNIT))} gave you je, tu and il as whole phrases. The other three follow from one idea rather than from three more phrases to learn.` },
      { t: 'Know why the word is there', s: 'Je lave la voiture washes something and names it. Je me lave has nothing left to name, and that is what the little word is doing.' },
      { t: 'Say no without moving it', s: `The two halves of the negative go round both little words, not just the verb. ${Cap(unitRef(FUTUR_UNIT))} gave you the rule and this is the one case where reading it too literally produces the mistake.` },
      { t: 'Build one you were never shown', s: 'Any verb that arrives with se in front of it works this way, so the last part of the lesson hands you verbs the table never used.' },
    ],
  },

  /* REQUIRED LAYOUT 2. Side by side, same verb, and the only thing that changed
   * is whether there is something else to name. */
  {
    id: CONTRAST_SECTION_ID,
    type: 'examples',
    title: 'The Same Verb, With And Without',
    frSub: 'Laver, se laver',
    layer: 'core',
    say: 'Three sentences and one verb. Read them as a set: the difference between the first two is the whole reason the little word exists.',
    terms: ['samePerson', 'extraWord'],
    examples: [
      {
        fr: fr(A(727)),
        en: en(A(727)),
        note: `${sub(A(727))} Something is being washed and the sentence says what. The verb is doing its ordinary job.`,
      },
      {
        fr: fr(A(721)),
        en: en(A(721)),
        note: `${sub(A(721))} Nothing is named after the verb, because there is nothing left to name. The answer is already the first word of the sentence.`,
      },
      {
        fr: importedFr('fr.a1.cuisine.228'),
        en: importedEn('fr.a1.cuisine.228'),
        note: 'The bare verb in a published sentence, so you can see that je lave is ordinary French rather than a broken version of the one above it.',
      },
    ],
  },

  /* ─── ACT 2. The six little words ────────────────────────────────────────*/

  /* REQUIRED LAYOUT 1. Three columns, six rows. Column 0 is drawn in the primary
   * colour and semibold and columns 1 and 2 in the secondary, so the little word
   * sits in a column of its own between the person and the verb. */
  {
    id: PERSONS_SECTION_ID,
    type: 'tapTable',
    title: 'Six People, Six Little Words',
    frSub: 'Se laver',
    layer: 'core',
    say: 'One verb, all six people. Read down the middle column rather than across, and tap any row to hear it.',
    terms: ['extraWord', 'samePerson', 'doubled'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a2-22-persons' },
    cols: ['who', 'the extra word', 'the verb'],
    rows: PARADIGM_IDS.map((id, i) => {
      const row = CLITIC_TABLE[i]!;
      const line = fr(id);
      const verb = line.replace(/^\S+\s+\S+\s+/u, '').replace(/\.$/u, '');
      return {
        cells: [row.subject, row.clitic, verb],
        say: line,
        detail: {
          title: row.same ? 'The same word twice' : 'The person, in another shape',
          say: line,
          body: row.same
            ? `${line} ${sub(id)} ${en(id)} The little word is identical to the person in front of it, which looks like a typo and is not.`
            : `${line} ${sub(id)} ${en(id)} ${row.subject} becomes ${row.clitic}. It is the same person said a second time, in the shape French uses when the person is on the receiving end.`,
        },
      };
    }),
  },

  {
    id: DOUBLED_SECTION_ID,
    type: 'cardDeck',
    title: 'The Two That Look Like Mistakes',
    frSub: 'Nous nous, vous vous',
    layer: 'core',
    size: 'lg',
    render: 'deck',
    say: 'Three cards on the two rows nobody believes.',
    hint: 'Same word twice, two different jobs.',
    terms: ['doubled', 'samePerson'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a2-22-doubled' },
    cards: [
      {
        head: 'It really is written twice',
        label: 'nous nous',
        fr: fr(A(724)),
        sub: `${sub(A(724))} ${en(A(724))}`,
        /* noStop ON THE QUOTED ROW. FOUND ON A PIXEL 6: the row ends in a full
         * stop and the sentence continues with a comma, so the screen read
         * « ... tard le dimanche., beside a verb ... ». a2.20 found the `..`
         * version of this and every guard in the band checks for two dots only;
         * a stop followed by a comma is the same defect and no host gate in
         * this band could see it. The guard is widened alongside this fix. */
        body: `The first one says who, the second says who it is happening to, and they are the same people. ${Cap(unitRef(ROUTINE_UNIT))} already put this shape on a screen, in ${noStop(importedFr('fr.a1.routines.181'))}, beside a verb carrying no little word.`,
      },
      {
        head: 'And so is the other one',
        label: 'vous vous',
        fr: fr(A(725)),
        sub: `${sub(A(725))} ${en(A(725))}`,
        body: `${EVIDENCE_LINE}`,
      },
      {
        head: 'Four change, two do not',
        label: 'why it looks odd',
        fr: `je me · tu te · il se · ${DOUBLED.map((d) => `${d} ${d}`).join(' · ')}`,
        sub: 'The list is the people, in another shape',
        body: `Four of the six little words are a different word from the person in front of them, so they look like something. Two are identical, so they look like a slip of the keyboard. ${REFRAME}`,
      },
    ],
  },

  /* ─── ACT 3. THE OWNS ────────────────────────────────────────────────────*/

  /* The ONE thing in this lesson the ear can do, and it is the error's own
   * contrast: a whole syllable. Corpus §7. */
  {
    id: LISTEN_SECTION_ID,
    type: 'listening',
    title: 'The One You Can Hear',
    frSub: 'Une syllabe de plus',
    layer: 'core',
    say: 'Two sentences, one verb, and the difference is a whole syllable. This is the only thing in the lesson listening will tell you, and it happens to be the thing that goes wrong.',
    terms: ['extraWord', 'samePerson'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], audioFirst: true, recordingId: 'rec-a2-22-audible' },
    lines: [
      { fr: fr(AUDIBLE_CONTRAST.without), en: en(AUDIBLE_CONTRAST.without) },
      { fr: fr(AUDIBLE_CONTRAST.with), en: en(AUDIBLE_CONTRAST.with) },
      { fr: fr(A(723)), en: en(A(723)) },
      { fr: fr(A(726)), en: en(A(726)) },
    ],
    questions: [
      {
        q: `${noStop(fr(A(727)))} against ${noStop(fr(A(721)))}. What did you hear?`,
        opts: ['An extra syllable in the second one', 'A different verb', 'Nothing at all'],
        correct: 0,
        why: AUDIBLE_CONTRAST.claim,
      },
      {
        q: `${noStop(fr(A(723)))} against ${noStop(fr(A(726)))}. And here?`,
        opts: ['Nothing at all', 'The ending of the verb', 'The little word'],
        correct: 0,
        why: `${A201_REFRAME} That is ${unitRef(ER_UNIT, 'a2')}'s line. Il and ils are one sound, se is se, and lave and lavent are one sound, so these two are identical end to end.`,
      },
    ],
  },

  {
    id: BUILD_SECTION_ID,
    type: 'groupDrill',
    title: 'Pick The Little Word',
    frSub: 'Le mot du milieu',
    layer: 'core',
    size: 'lg',
    say: `${REFRAME} Three pairs. Say the person first, out loud, and the little word is the same person in another shape.`,
    terms: ['extraWord', 'samePerson', 'doubled'],
    groups: [
      {
        label: 'the two that change most',
        items: [card(A(721)), card(A(722))],
        check: {
          q: 'Il, and then the little word. Which one?',
          opts: ['se', 'me', 'le'],
          correct: 0,
          why: `Se, and it is the one the naming form carries, which is why it looks like the default. It is not: it belongs to il, elle and ils in the same way me belongs to je.`,
        },
      },
      {
        label: 'and the two that do not',
        items: [card(A(724)), card(A(725))],
        check: {
          q: 'Nous, and then the little word.',
          opts: ['nous', 'nos', 'se'],
          correct: 0,
          why: 'Nous, again, and it is written twice. The first one says who and the second says who it is happening to.',
        },
      },
      {
        label: 'the plural that sounds singular',
        items: [card(A(723)), card(A(726))],
        check: {
          q: 'Where can you see whether it is one person or several?',
          opts: ['In the sound of the verb', 'In the first word, in writing', 'In the little word'],
          correct: 1,
          why: `Il se lave and ils se lavent are the same sounds in the same order. The little word does not move between them and the verb does not either. ${A201_REFRAME}`,
        },
      },
    ],
  },

  {
    id: NOMEANING_SECTION_ID,
    type: 'cardDeck',
    title: 'The Ones That Mean Nothing By It',
    frSub: 'Se, sans réflexion',
    layer: 'core',
    size: 'lg',
    render: 'deck',
    say: 'Three verbs where the little word points at nothing, and it is still obligatory and it still changes.',
    hint: 'Nobody hurries themselves.',
    terms: ['notAboutSelf', 'extraWord'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a2-22-nomeaning' },
    cards: [
      {
        head: 'To be called',
        label: "s'appeler",
        fr: importedFr('fr.a1.presentation-personnelle.001'),
        sub: `${impSub('fr.a1.rencontres.105')} ${importedEn('fr.a1.rencontres.105')}`,
        body: `Nobody calls themselves anything. ${Cap(unitRef(EXC_UNIT))} taught the spelling of this one, where the l doubles in four of the six people, and it did not say why the m was there. This is why.`,
      },
      {
        head: 'To hurry',
        label: 'se dépêcher',
        fr: `${noStop(fr(A(739)))} · ${noStop(fr(A(738)))}`,
        sub: `${sub(A(739))} · ${sub(A(738))}`,
        body: `${en(A(739))} There is no version of this verb without the little word, and there is nothing it points at. It changes for the person anyway, which is the only part you have to get right.`,
      },
      {
        head: 'To remember',
        label: 'se souvenir',
        fr: rowCard('fr.sons.verbes-essentiels.056').fr,
        sub: rowCard('fr.sons.verbes-essentiels.056').sub,
        body: 'Third of the same kind. Its endings come from venir rather than from the group this lesson uses, so it is here to be recognised rather than built. The little word behaves exactly as it does everywhere else.',
      },
    ],
  },

  {
    id: ELISION_SECTION_ID,
    type: 'cardDeck',
    title: 'When It Loses Its Vowel',
    frSub: 'M’, t’, s’',
    layer: 'core',
    size: 'lg',
    render: 'deck',
    say: 'Three cards. The little word does exactly one other thing besides change, and this is it.',
    hint: 'A vowel behind it, and the e goes.',
    terms: ['extraWord', 'notAboutSelf'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a2-22-elision' },
    cards: [
      {
        head: 'Me becomes m',
        label: "j'habille?",
        fr: fr(A(744)),
        sub: `${sub(A(744))} ${en(A(744))}`,
        body: `${rowCard('fr.a1.routines.012').fr} starts on a silent h, which behaves as a vowel, so me loses its e exactly the way le and de do. It is the same rule you already have and not a new one.`,
      },
      {
        head: 'And se becomes s',
        label: "s'habillent",
        fr: fr(A(745)),
        sub: `${sub(A(745))} ${en(A(745))}`,
        body: 'Same word, same rule, different person. The little word still tells you who, and the apostrophe is not doing anything except joining two words that would otherwise collide.',
      },
      {
        head: 'Two of them in one sentence',
        label: 'both at once',
        fr: importedFr('fr.a1.routines.144'),
        sub: importedEn('fr.a1.routines.144'),
        body: `${Cap(unitRef(ROUTINE_UNIT))} shipped this and said the rest was a whole band away: « ${A125_HANDOFF} » Two in one sentence, one elided.`,
      },
    ],
  },

  {
    id: VOWEL_SECTION_ID,
    type: 'cardDeck',
    title: 'Two Rules At Once',
    frSub: 'Se lever',
    layer: 'core',
    size: 'lg',
    render: 'deck',
    say: 'Three cards on the verb the last lesson used, and on the second rule hiding inside it.',
    hint: 'The vowel moves, and the little word did not notice.',
    terms: ['vowelMoves', 'extraWord'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a2-22-vowel' },
    cards: [
      {
        head: 'The sentence you already had',
        label: 'se lever',
        fr: importedFr('fr.a1.routines.003'),
        sub: importedEn('fr.a1.routines.003'),
        body: `${Cap(unitRef(ROUTINE_UNIT))} taught this whole. Now that you can see the parts, there is something in the middle of the verb that se laver does not do, and it is worth naming so it does not look like carrying a little word.`,
      },
      {
        head: 'Four move, two do not',
        label: 'lève against levons',
        fr: `${STEM_MOVED.map((p) => noStop(fr(personId('stem', p))).split(' ').slice(-2, -1)[0] ?? '').join(' · ')} · ${STEM_STILL.map((p) => noStop(fr(personId('stem', p))).split(' ').slice(-2, -1)[0] ?? '').join(' · ')}`,
        sub: `${sub(STEM_IDS[0]!)} against ${sub(STEM_IDS[3]!)}`,
        body: A209_CREDIT,
      },
      {
        head: 'And the little word did not notice',
        label: 'one thing at a time',
        fr: `${noStop(fr(STEM_IDS[0]!))} · ${noStop(fr(A(721)))}`,
        sub: `${en(STEM_IDS[0]!)} · ${en(A(721))}`,
        body: `${A209_REFRAME} That is ${unitRef(EXC_UNIT, 'a2')}'s line and it is about the vowel. Me is me in both of these. The table uses se laver because nothing else in it moves.`,
      },
    ],
  },

  /* Doctrine §B.1: a mission that makes the learner produce a form from a verb
   * the lesson never showed them has taught the system. */
  {
    id: UNSEEN_SECTION_ID,
    type: 'groupDrill',
    title: 'Verbs The Table Never Used',
    frSub: 'Des verbes nouveaux',
    layer: 'core',
    size: 'lg',
    say: 'Three pairs, and not one of these verbs was in the table. You are not remembering them. You are building them.',
    terms: ['extraWord', 'samePerson', 'doubled'],
    groups: [
      {
        label: 'going to bed',
        items: [card(A(741)), card(A(742))],
        check: {
          q: 'Ils, and se coucher. Which two words go in the middle?',
          opts: ['se couchent', 'me couchent', 'nous couchons'],
          correct: 0,
          why: 'Ils takes se, and the ending is the one every verb in this group takes for ils. Nothing about se coucher had to be learned separately.',
        },
      },
      {
        label: 'resting',
        items: [card(A(743)), card(A(746))],
        check: {
          q: 'Nous, and se reposer.',
          opts: ['nous reposons', 'se reposons', 'nous reposent'],
          correct: 0,
          why: 'The doubled shape on a verb you have not conjugated once. Nothing about se reposer had to be learned separately.',
        },
      },
      {
        label: 'getting dressed',
        items: [card(A(744)), card(A(745))],
        check: {
          q: 'And this one starts on a vowel. Je, and s’habiller.',
          opts: ["je m'habille", 'je me habille', "je s'habille"],
          correct: 0,
          why: 'Me, because the person is je, and then the e goes because a vowel follows. Two rules, both of which you already had.',
        },
      },
    ],
  },

  /* THE RECIPROCAL, AND THE TWO DEFERRALS. Corpus §9: one card, receptive, no
   * mission, and it is named because the forms are identical to the taught ones
   * and a learner meeting one has no other way to resolve it. */
  {
    id: LATER_SECTION_ID,
    type: 'cardDeck',
    title: 'Three Things This Is Not',
    frSub: 'Pas encore',
    layer: 'core',
    size: 'lg',
    render: 'deck',
    say: 'Three cards, none of which you have to do anything with today. They are here so that meeting one does not look like an error.',
    hint: 'Recognise these. Do not build them.',
    terms: ['eachOther', 'presentOnly', 'secondJob'],
    cards: [
      {
        head: 'Sometimes it means each other',
        label: 'not today',
        fr: fr(RECIPROCAL_ID),
        sub: `${sub(RECIPROCAL_ID)} ${en(RECIPROCAL_ID)}`,
        body: `Nothing in the spelling says whether they talk to themselves or to each other, and here it is obviously each other. It is a real second meaning and it belongs with the lesson that gives you the rest of that machinery. Recognise it.`,
      },
      {
        head: 'And all of these have a past',
        label: `${Cap(unitRef(PAST_UNIT))}`,
        fr: `${noStop(fr(A(721)))} · ${noStop(fr(A(732)))}`,
        sub: 'today only, in both of these',
        body: `${PRESENT_NO_AGREEMENT} ${PAST_DEFERRAL}`,
      },
      {
        head: 'The same words, a different job',
        label: `${Cap(unitRef(DIRECT_OBJECT_UNIT))} · ${unitRef(INDIRECT_OBJECT_UNIT)}`,
        fr: 'me · te · se · nous · vous',
        sub: 'the same five, twice over',
        body: OBJECT_DEFERRAL,
      },
    ],
  },

  /* ─── ACT 4. The trap ────────────────────────────────────────────────────*/

  /* REQUIRED LAYOUT 3. Adjacent, with the ne visibly in front of the cluster,
   * and the inherited line quoted verbatim beside the extension that stops it
   * generating the mistake. Corpus §3. */
  {
    id: NEGATIVE_SECTION_ID,
    type: 'cardDeck',
    title: 'Where The First Half Goes',
    frSub: 'Ne … pas',
    layer: 'core',
    size: 'lg',
    render: 'deck',
    say: `${NEGATION_RULE} Three cards, and the third one is where reading that too literally goes wrong.`,
    hint: 'The two halves go round more than you think.',
    terms: ['theWrap', 'extraWord', 'samePerson'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a2-22-negative' },
    cards: [
      {
        head: 'Both halves, round both words',
        label: 'the pair',
        fr: `${noStop(fr(A(721)))} · ${noStop(fr(A(728)))}`,
        sub: `${sub(A(728))} ${en(A(728))}`,
        body: `Ne in front of me, pas straight after lave, and both little words are inside. ${NEGATION_EXTENSION}`,
      },
      {
        head: 'And it is the rule you already have',
        label: `${Cap(unitRef(NEGATION_UNIT))} · ${unitRef(FUTUR_UNIT)} · ${unitRef(PASSE_UNIT)} · ${unitRef(ETRE_UNIT)}`,
        fr: `${noStop(fr(A(730)))} · ${noStop(fr(A(729)))}`,
        sub: `${sub(A(730))} · ${sub(A(729))}`,
        body: `« ${A118_REFRAME} » is ${unitRef(NEGATION_UNIT, 'a2')}'s line and « ${NEGATION_RULE} » is ${unitRef(FUTUR_UNIT, 'a2')}'s, quoted by ${unitRef(PASSE_UNIT, 'a2')} and ${unitRef(ETRE_UNIT, 'a2')}. Four lessons, one rule, unchanged here.`,
      },
      {
        head: 'What goes inside the wrap',
        label: 'why me is inside',
        fr: `${noStop(fr(A(728)))} · ${noStop(fr(A(731)))}`,
        sub: `${sub(A(731))} ${en(A(731))}`,
        body: `The verb changed for the person, so it goes inside. The little word changed too, so it goes inside as well. That is the only thing this lesson adds to a rule you have had since ${unitRef(NEGATION_UNIT)}.`,
      },
    ],
  },

  {
    id: WRAP_SECTION_ID,
    type: 'trapDrill',
    title: 'In Front Of Which Word',
    frSub: 'Où va le ne',
    layer: 'core',
    swipe: true,
    say: 'Four cards and then six to prove it. The first card is what the rule produces if you take it at its word.',
    terms: ['theWrap', 'extraWord'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], wrongThenRight: true, recordingId: 'rec-a2-22-wrap' },
    rule: {
      title: 'Both of them changed, so both of them are inside',
      body: `${NEGATION_RULE} Here two words changed for the person, not one: the verb and the little word in front of it. ${NEGATION_EXTENSION}`,
    },
    steps: [
      { kind: 'rule', label: 'The rule', title: 'What Counts As The Verb' },
      { kind: 'cards', label: 'Four cards', title: 'One Wrong, Three Right' },
      { kind: 'audio', label: 'Hear it', title: 'Where The Ne Lands' },
      { kind: 'drill', label: 'Prove it', title: 'Put The Ne In', gate: true },
    ],
    cards: [
      {
        fr: 'Je me ne lave pas.',
        ipa: '/ʒə mə nə lav pa/',
        promptLabel: 'reading the rule too literally gives',
        promptSound: 'Je me ne lave pas.',
        tip: 'Ne straight in front of the verb that changed, which is exactly what the rule says if lave is the verb. This is the error, and it is a careful learner\'s error rather than a careless one.',
      },
      {
        fr: fr(A(728)),
        ipa: ipaOf(A(728)),
        promptLabel: 'and the little word is part of the verb now',
        promptSound: fr(A(728)),
        tip: `${NEGATION_EXTENSION} Ne goes in front of the whole cluster.`,
      },
      {
        fr: fr(A(730)),
        ipa: ipaOf(A(730)),
        promptLabel: 'same place, different person',
        promptSound: fr(A(730)),
        tip: 'Se is inside the wrap for the same reason me was. Nothing about the position depends on which person you are in.',
      },
      {
        fr: fr(A(727)),
        ipa: ipaOf(A(727)),
        promptLabel: 'and with no little word at all',
        promptSound: fr(A(727)),
        tip: 'When there is nothing between the person and the verb, the wrap has one word to go round and it goes round it. Je ne lave pas la voiture. Nothing new happens.',
      },
    ],
    drill: [
      { opts: ['Je ne me lave pas.', 'Je me ne lave pas.'], correct: 0, promptSay: fr(A(728)) },
      { opts: ['Il se ne lave pas.', 'Il ne se lave pas.'], correct: 1, promptSay: fr(A(730)) },
      { opts: ['Tu ne te laves pas.', 'Tu te ne laves pas.'], correct: 0, promptSay: fr(A(729)) },
      { opts: ['Nous ne nous lavons pas.', 'Nous nous ne lavons pas.'], correct: 0, promptSay: fr(A(731)) },
      { opts: ['Elle ne se couche pas tard.', 'Elle se ne couche pas tard.'], correct: 0, promptSay: 'Elle ne se couche pas tard.' },
      { opts: ["Je m'habille pas vite.", "Je ne m'habille pas vite."], correct: 1, promptSay: "Je ne m'habille pas vite." },
    ],
  },

  {
    id: ERRORS_SECTION_ID,
    type: 'commonErrors',
    title: 'What Goes Wrong',
    frSub: 'Les erreurs fréquentes',
    layer: 'core',
    size: 'lg',
    swipe: true,
    say: 'Four, one per screen, and the first one is the sentence the lesson opened on.',
    terms: ['extraWord', 'theWrap', 'doubled'],
    errors: [
      {
        wrong: SCENE_ERROR,
        right: SCENE_RIGHT,
        why: `${A125_ERROR_CLAIM} It survives because it is correct French about something else.`,
      },
      {
        wrong: 'Je me ne lave pas.',
        right: fr(A(728)),
        why: `The wrap went round the verb and left the little word outside it. ${NEGATION_EXTENSION} This is what the inherited rule produces when it is read at its word.`,
      },
      {
        wrong: 'Nous levons tôt.',
        right: fr(A(735)),
        why: 'The doubled word looked like a mistake, so it was corrected out. It is the form learners drop most, and the sentence that is left means getting something else up.',
      },
      {
        wrong: 'Vous se lavez.',
        right: fr(A(725)),
        why: `Se is not the default and it is not a particle. It belongs to il, elle and ils. ${REFRAME}`,
      },
    ],
  },

  /* ─── ACT 5. Your own morning ────────────────────────────────────────────*/

  {
    id: FLASH_SECTION_ID,
    type: 'flashcards',
    title: 'The Verbs, Banked',
    frSub: 'Les verbes',
    layer: 'core',
    say: 'Ten verbs, all of which arrive with the little word attached. Store them that way and pick the word off the person when you use one.',
    terms: ['extraWord', 'notAboutSelf'],
    cards: [
      'fr.a1.routines.028', 'fr.a1.routines.001', 'fr.a1.routines.020',
      'fr.a1.routines.010', 'fr.a1.routines.011', 'fr.a1.routines.012',
      'fr.a1.routines.034', 'fr.a1.routines.087', 'fr.a1.rencontres.105',
      'fr.a1.routines.019',
    ].map((id) => ({
      front: importedFr(id),
      back: rowCard(id).sub,
      say: importedFr(id),
    })),
  },

  {
    id: DICTATION_SECTION_ID,
    type: 'dictation',
    title: 'Spell What You Hear',
    frSub: 'La dictée',
    layer: 'core',
    say: 'Twelve lines. Most of them are the same verb, and the little word in front of it is the only thing telling you which person you are writing.',
    terms: ['extraWord', 'doubled', 'theWrap'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], maxPlays: 3, recordingId: 'rec-a2-22-dictee' },
    itemIds: [
      A(721), A(722), A(723), A(724), A(725), A(726),
      A(728), A(730), A(736), A(737), A(739), A(744),
    ],
  },

  {
    id: TALK_SECTION_ID,
    type: 'scenario',
    title: 'Your Morning, Properly',
    frSub: 'On raconte sa matinée',
    layer: 'core',
    terms: ['extraWord', 'samePerson', 'doubled'],
    setting: 'The same language exchange, a week later, and this time the question does not stop the sentence. Every answer is about a morning and every one of them carries the little word.',
    turns: [
      {
        ai: 'Raconte-moi ta matinée. Tu te réveilles à quelle heure ?',
        en: 'Tell me about your morning. What time do you wake up?',
        user: fr(A(747)),
        userEn: en(A(747)),
        alts: [
          { fr: fr(A(732)), en: en(A(732)) },
          { fr: importedFr('fr.a1.routines.003'), en: importedEn('fr.a1.routines.003') },
        ],
      },
      {
        ai: 'Et ensuite ?',
        en: 'And then?',
        user: fr(A(748)),
        userEn: en(A(748)),
        alts: [
          { fr: fr(A(744)), en: en(A(744)) },
          { fr: importedFr('fr.a1.routines.157'), en: importedEn('fr.a1.routines.157') },
        ],
      },
      {
        ai: 'Ta famille se lève en même temps que toi ?',
        en: 'Does your family get up at the same time as you?',
        user: fr(A(749)),
        userEn: en(A(749)),
        alts: [
          { fr: fr(A(735)), en: en(A(735)) },
          { fr: fr(A(737)), en: en(A(737)) },
        ],
      },
      {
        ai: 'Tu te couches tard, toi ?',
        en: 'Do you go to bed late?',
        user: fr(A(750)),
        userEn: en(A(750)),
        alts: [
          { fr: fr(A(741)), en: en(A(741)) },
          { fr: fr(A(728)), en: en(A(728)) },
        ],
      },
      {
        ai: 'Et tes collègues, ils ont le temps le matin ?',
        en: 'And your colleagues, do they have time in the morning?',
        user: fr(A(751)),
        userEn: en(A(751)),
        alts: [
          { fr: fr(A(738)), en: en(A(738)) },
          { fr: fr(A(745)), en: en(A(745)) },
        ],
      },
    ],
  },

  {
    id: SPEAK_SECTION_ID,
    type: 'practice',
    title: 'Say It Out Loud',
    frSub: 'À voix haute',
    layer: 'core',
    skill: 'speak',
    terms: ['extraWord', 'doubled'],
    itemIds: [
      A(721), A(722), A(723), A(724), A(725), A(726),
      A(727), A(728), A(729), A(730), A(731),
      A(732), A(733), A(734), A(735), A(736), A(737),
      A(738), A(739), A(741), A(742), A(743), A(744), A(745), A(746),
    ],
  },

  /* ─── ACT 6. Prove it ────────────────────────────────────────────────────*/

  {
    id: REVIEW_SECTION_ID,
    type: 'reviewDeck',
    title: 'Everything, Once More',
    frSub: 'Tout, encore une fois',
    layer: 'core',
    cards: [
      {
        front: 'Why is there a little word in je me lave and not in je lave la voiture?',
        back: 'Je lave la voiture washes something and names it. Je me lave has nothing left to name, because the answer is already the first word of the sentence.',
        say: `${fr(A(721))} ${fr(A(727))}`,
      },
      {
        front: 'How do you pick which little word?',
        back: REFRAME,
        say: fr(A(723)),
      },
      {
        front: 'Nous nous levons. Is that a typo?',
        back: `No. The first says who and the second says who it is happening to, and they are the same people. ${Cap(unitRef(ROUTINE_UNIT))} already put that sentence on a screen.`,
        say: fr(A(735)),
      },
      {
        front: 'Where does the ne go?',
        back: `${NEGATION_EXTENSION} Ne in front of the little word, pas straight after the verb.`,
        say: fr(A(728)),
      },
      {
        front: "Je m'appelle. What is the m doing?",
        back: 'It is the same little word, elided because a vowel follows. This verb has no reflexive meaning at all and carries it anyway.',
        say: importedFr('fr.a1.presentation-personnelle.001'),
      },
      {
        front: 'Je me lève. Why is there an accent that se laver does not have?',
        back: `${A209_REFRAME} That is ${unitRef(EXC_UNIT, 'a2')}'s rule about the vowel and it has nothing to do with the little word.`,
        say: fr(A(732)),
      },
      {
        front: 'Il se lave against ils se lavent. What can you hear?',
        back: `Nothing. They are the same sounds in the same order. ${A201_REFRAME}`,
        say: `${fr(A(723))} ${fr(A(726))}`,
      },
    ],
  },

  {
    id: PROGRESS_SECTION_ID,
    type: 'progressCheck',
    title: 'Where You Stand',
    frSub: 'Où vous en êtes',
    layer: 'core',
    body: 'The exam has six rounds and most of it is typed, because producing the little word is the thing this lesson claims you can do, and picking it out of four is a different job.',
    stats: [
      { k: 'Little words', v: '6, and they are the people you already had.' },
      { k: 'New endings', v: `0. ${Cap(unitRef(ER_UNIT))} gave you every one of them.` },
      { k: 'Verbs you were shown', v: '2, and the last act used six more you were not.' },
      { k: 'Used again in', v: `${Cap(unitRef(PAST_UNIT))}, which declares this lesson as a prerequisite.` },
    ],
  },

  {
    id: QUIZ_SECTION_ID,
    type: 'quiz',
    title: 'The Exam',
    frSub: 'L’examen',
    layer: 'core',
    say: 'Six rounds of five. Most of it is typed, because the little word is something you produce rather than something you recognise.',
    terms: ['extraWord', 'samePerson', 'theWrap'],
    passMark: 70,
    roundFailThreshold: 60,
    rounds: [
      {
        id: 'r1-which-word',
        label: 'Which little word',
        say: 'Five on picking it off the person.',
        targets: ['err-wrong-clitic', 'err-dropped-clitic'],
        questions: [
          {
            format: 'typeIn',
            q: 'Je ___ lave. Type the missing word.',
            accept: ['me'],
            ref: PERSONS_SECTION_ID,
            why: 'Je takes me. Say the person out loud first and the little word is that person in another shape.',
          },
          {
            format: 'typeIn',
            q: 'Tu ___ laves. Type the missing word.',
            accept: ['te'],
            ref: PERSONS_SECTION_ID,
            why: 'Tu takes te. It is the same person in the shape French uses when they are on the receiving end.',
          },
          {
            format: 'typeIn',
            q: 'Nous ___ lavons. Type the missing word.',
            accept: ['nous'],
            ref: DOUBLED_SECTION_ID,
            why: 'Nous, written twice. It looks like a mistake and it is the form learners drop most.',
          },
          {
            format: 'mcq',
            q: 'Vous ___ levez tôt. Which one?',
            opts: ['se', 'vous', 'te', 'nous'],
            correct: 1,
            ref: DOUBLED_SECTION_ID,
            why: 'Vous, and it is identical to the person in front of it, which is the other of the two that look like typos.',
          },
          {
            format: 'mcq',
            q: 'Ils ___ lavent. Which one?',
            opts: ['les', 'leur', 'se', 'nous'],
            correct: 2,
            ref: PERSONS_SECTION_ID,
            why: 'Se belongs to il, elle, ils and elles. It is not a default that the others replace.',
          },
        ],
      },
      {
        id: 'r2-why-there',
        label: 'Why it is there',
        say: 'Five on what the little word is doing.',
        targets: ['err-dropped-clitic'],
        questions: [
          {
            format: 'mcq',
            q: `${noStop(fr(A(727)))} and ${noStop(fr(A(721)))}. What is the difference?`,
            opts: [
              'The first is more polite',
              'The first names what is being washed and the second does not need to',
              'The second is in the past',
              'They mean the same thing',
            ],
            correct: 1,
            ref: CONTRAST_SECTION_ID,
            why: 'The little word is where the object would have been. There is nothing left to name because the answer is already the first word of the sentence.',
          },
          {
            format: 'errorSpot',
            q: 'One word is missing. Type the sentence correctly: « Je lève à sept heures. »',
            accept: [SCENE_RIGHT],
            ref: SCENE_SECTION_ID,
            why: `${A125_ERROR_CLAIM} The sentence as written is correct French about lifting something.`,
          },
          {
            format: 'typeIn',
            q: 'Type the French for: she goes to bed late. Use se coucher.',
            accept: [fr(A(741))],
            ref: UNSEEN_SECTION_ID,
            why: 'Elle takes se, and the ending is the one every verb in this group takes. The verb was never in the table and nothing about it had to be learned separately.',
          },
          {
            format: 'mcq',
            q: 'Nobody hurries themselves. So why does se dépêcher carry the little word?',
            opts: [
              'Because hurrying is done to yourself',
              'It is optional on this verb',
              'Because it is a polite form',
              'It is simply part of how the verb is built',
            ],
            correct: 3,
            ref: NOMEANING_SECTION_ID,
            why: 'Some of these point at nothing at all. The word is obligatory and it still changes for the person, which is the only part you have to get right.',
          },
          {
            format: 'typeIn',
            q: 'Type the French for: you are hurrying. Speaking to one friend.',
            accept: [fr(A(739))],
            ref: NOMEANING_SECTION_ID,
            why: 'Tu te dépêches. No reflexive meaning, and the little word moves for the person anyway.',
          },
        ],
      },
      {
        id: 'r3-the-wrap',
        label: 'Saying no',
        say: 'Five on where the first half goes.',
        targets: ['err-ne-after-clitic'],
        questions: [
          {
            format: 'errorSpot',
            q: 'Fix the word order: « Je me ne lave pas. »',
            accept: [fr(A(728))],
            ref: NEGATIVE_SECTION_ID,
            why: `${NEGATION_EXTENSION} Ne goes in front of the whole cluster, not in front of the verb alone.`,
          },
          {
            format: 'errorSpot',
            q: 'Fix the word order: « Il se ne lave pas. »',
            accept: [fr(A(730))],
            ref: WRAP_SECTION_ID,
            why: 'Se is inside the wrap for the same reason me was. Nothing about the position depends on the person.',
          },
          {
            format: 'typeIn',
            q: 'Make it negative: « Tu te laves. »',
            accept: [fr(A(729))],
            ref: NEGATIVE_SECTION_ID,
            why: `Ne in front of te, pas straight after laves. ${NEGATION_EXTENSION}`,
          },
          {
            format: 'mcq',
            q: `Which line quotes the rule these four lessons share?`,
            opts: [
              NEGATION_RULE,
              'Put ne in front of the verb and pas after it.',
              'The negative goes at the end of the sentence.',
              'Ne and pas move together as one unit.',
            ],
            correct: 0,
            ref: NEGATIVE_SECTION_ID,
            why: `${Cap(unitRef(FUTUR_UNIT))} said it, ${unitRef(PASSE_UNIT)} quoted it and ${unitRef(ETRE_UNIT)} quoted it again. This lesson adds one sentence to it rather than replacing it: ${NEGATION_EXTENSION}`,
          },
          {
            format: 'typeIn',
            q: 'Make it negative: « Nous nous lavons. »',
            accept: [fr(A(731))],
            ref: WRAP_SECTION_ID,
            why: 'Both little words stay where they are and the wrap goes round the pair of them.',
          },
        ],
      },
      {
        id: 'r4-build-it',
        label: 'Verbs you were not shown',
        say: 'Five on verbs the table never used.',
        targets: ['err-wrong-clitic'],
        questions: [
          {
            format: 'typeIn',
            q: 'Type the French for: we rest in the evening. Use se reposer.',
            accept: [fr(A(743))],
            ref: UNSEEN_SECTION_ID,
            why: 'The doubled shape on a verb you have not conjugated once. Any verb that arrives with se in front of it works this way.',
          },
          {
            format: 'typeIn',
            q: 'Type the French for: I get dressed quickly. Use s’habiller.',
            accept: [fr(A(744))],
            ref: ELISION_SECTION_ID,
            why: 'Me, because the person is je, and then the e goes because a vowel follows. Two rules you already had.',
          },
          {
            format: 'mcq',
            q: 'Ils ___ habillent vite. Which one?',
            opts: ['se', "s'", "m'", 'les'],
            correct: 1,
            ref: ELISION_SECTION_ID,
            why: 'Se, elided to s because a vowel follows. The apostrophe is joining two words that would otherwise collide and it does nothing else.',
          },
          {
            format: 'typeIn',
            q: 'Type the French for: you wake up late. Speaking to one friend, using se réveiller.',
            accept: [fr(A(746))],
            ref: UNSEEN_SECTION_ID,
            why: 'Tu takes te, and the ending is the ordinary one. The verb was not in the table.',
          },
          {
            format: 'mcq',
            q: 'Vous ___ couchez tôt. Which one?',
            opts: ['se', 'nous', 'vous', 'te'],
            correct: 2,
            ref: UNSEEN_SECTION_ID,
            why: 'Vous, doubled, on a verb the table never carried. The rule is the same one every time.',
          },
        ],
      },
      {
        id: 'r5-listen',
        label: 'What you can hear',
        say: 'Five on the one audible difference, and on the four that are not.',
        targets: ['err-dropped-clitic'],
        questions: [
          {
            format: 'listenChoose',
            q: 'Which one did you hear?',
            opts: [fr(A(721)), fr(A(727))],
            correct: 0,
            ref: LISTEN_SECTION_ID,
            why: AUDIBLE_CONTRAST.claim,
          },
          {
            format: 'listenChoose',
            q: 'And this one?',
            opts: [fr(A(727)), fr(A(721))],
            correct: 0,
            ref: LISTEN_SECTION_ID,
            why: 'Two syllables rather than three. The little word is the syllable that is missing, and it is the only thing in this lesson the ear can settle.',
          },
          {
            format: 'mcq',
            q: `${noStop(fr(A(723)))} and ${noStop(fr(A(726)))}. What can you hear?`,
            opts: ['The ending of the verb', 'The little word', 'Nothing at all', 'The first word'],
            correct: 2,
            ref: LISTEN_SECTION_ID,
            why: `Il and ils are one sound, se is se, and lave and lavent are one sound. ${A201_REFRAME}`,
          },
          {
            format: 'tapSilent',
            q: 'Tap the letters in lavent that make no sound.',
            word: 'lavent',
            correct: 'ent',
            ref: LISTEN_SECTION_ID,
            why: `The whole -ent is silent, which is why this form and the il form are one sound. ${A201_REFRAME}`,
          },
          {
            format: 'typeIn',
            q: 'You hear [eel suh LAHV] and the sentence is about several people. Write it.',
            accept: [fr(A(726))],
            ref: LISTEN_SECTION_ID,
            why: 'Nothing in the sound tells you it is plural. Only the writing does, and only on the first word and the ending.',
          },
        ],
      },
      {
        id: 'r6-all-of-it',
        label: 'All of it',
        say: 'Five last ones, mixed.',
        targets: ['err-ne-after-clitic', 'err-wrong-clitic'],
        questions: [
          {
            format: 'typeIn',
            q: 'Type the French for: we get up early. Use se lever.',
            accept: [fr(A(735))],
            ref: VOWEL_SECTION_ID,
            why: `The little word is doubled and the vowel does NOT move here, because the ending is a syllable of its own. ${A209_REFRAME}`,
          },
          {
            format: 'mcq',
            q: 'Je me lève has an accent and je me lave does not. Why?',
            opts: [
              'Because the little word changed',
              'Because lever is irregular in every person',
              'Because it is a different little word',
              'The vowel opens when the ending makes no sound, which is a rule about the verb',
            ],
            correct: 3,
            ref: VOWEL_SECTION_ID,
            why: A209_CREDIT,
          },
          {
            format: 'errorSpot',
            q: 'One word is wrong. Fix it: « Vous se lavez. »',
            accept: [fr(A(725))],
            ref: PERSONS_SECTION_ID,
            why: 'Se is not a default. It belongs to il, elle and ils, and vous takes vous.',
          },
          {
            format: 'typeIn',
            q: 'Type the French for: he does not wash.',
            accept: [fr(A(730))],
            ref: WRAP_SECTION_ID,
            why: `Ne in front of se, pas straight after lave. ${NEGATION_EXTENSION}`,
          },
          /* THE RECIPROCAL IS DELIBERATELY NOT EXAMINED. The decision recorded
           * in the corpus file is one receptive card and no production surface,
           * and a quiz question is nearer a mission than it is to context. The
           * batch refuses the line anywhere but s13-later, which is what makes
           * the decision true rather than stated. */
          {
            format: 'mcq',
            q: 'Which of these carries the little word and means nothing reflexive by it?',
            opts: [
              'se laver, because washing is done to yourself',
              "s'appeler, because nobody calls themselves anything",
              'se lever, because getting up is done to yourself',
              'None of them',
            ],
            correct: 1,
            ref: NOMEANING_SECTION_ID,
            why: 'Se laver and se lever both point back at the person. S’appeler does not point at anything, and the little word is obligatory on it anyway.',
          },
        ],
      },
    ],
  },

  {
    id: ROUNDUP_SECTION_ID,
    type: 'roundup',
    title: 'What You Can Do Now',
    frSub: 'Ce que vous savez faire',
    layer: 'core',
    body: `${REFRAME} ${ALREADY_YOURS}`,
    points: [
      'Je lave la voiture washes something and names it. Je me lave has nothing left to name, because the answer is already the first word of the sentence.',
      `Four of the six little words are different from the person in front of them and two are identical. ${DOUBLED.map((d) => `${d} ${d}`).join(' and ')} are not typos.`,
      `${NEGATION_RULE} Here two words changed for the person rather than one, so ${NEGATION_EXTENSION.charAt(0).toLowerCase()}${NEGATION_EXTENSION.slice(1)}`,
      'Some of them mean nothing reflexive at all. Nobody hurries themselves, and nobody calls themselves anything, and the little word is obligatory on both.',
      `${A209_REFRAME} The vowel in se lève moves for a reason that has nothing to do with the little word, and ${unitRef(EXC_UNIT)} already gave you it.`,
      `Any verb that arrives with se in front of it works this way, so the six the table never showed you cost nothing extra. ${PRESENT_NO_AGREEMENT}`,
    ],
  },
];

/* ─── ACTS ─────────────────────────────────────────────────────────────────*/

const ACTS: LessonAct[] = [
  {
    id: 'act1',
    title: 'A word you already say',
    sections: [SCENE_SECTION_ID, APPELLE_SECTION_ID, GOALS_SECTION_ID, CONTRAST_SECTION_ID],
    milestone: 'You have found the word you have been saying since the first lesson in the app.',
    estScreens: 34,
    /* `density.logic.ts` caps an unbroken stretch at 22 screens. Every act over
     * that carries a rest point, placed where the teaching changes rather than
     * at the arithmetic midpoint. */
    restPoints: [`${APPELLE_SECTION_ID}/after-the-opener`],
  },
  {
    id: 'act2',
    title: 'The six of them',
    sections: PARADIGM_SECTION_IDS,
    milestone: 'All six, and the two that look like typos are not.',
    estScreens: 20,
  },
  {
    id: 'act3',
    title: 'It changes because it is you',
    sections: OWNS_SECTION_IDS,
    milestone: 'You can build one for any verb, including six the table never used.',
    estScreens: 74,
    restPoints: [
      `${BUILD_SECTION_ID}/after-the-first-drill`,
      `${ELISION_SECTION_ID}/after-the-elision`,
      `${UNSEEN_SECTION_ID}/after-the-new-verbs`,
    ],
  },
  {
    id: 'act4',
    title: 'Where the ne goes',
    sections: [NEGATIVE_SECTION_ID, WRAP_SECTION_ID, ERRORS_SECTION_ID],
    milestone: 'One negation rule, four lessons long, and one sentence added to it.',
    estScreens: 35,
    restPoints: [`${WRAP_SECTION_ID}/after-the-trap`],
  },
  {
    id: 'act5',
    title: 'Your own morning',
    sections: [FLASH_SECTION_ID, DICTATION_SECTION_ID, TALK_SECTION_ID, SPEAK_SECTION_ID],
    milestone: 'You have described a morning out loud and written six of them down.',
    estScreens: 42,
    restPoints: [`${DICTATION_SECTION_ID}/after-the-dictee`],
  },
  {
    id: 'act6',
    title: 'Prove it',
    sections: [REVIEW_SECTION_ID, PROGRESS_SECTION_ID, QUIZ_SECTION_ID, ROUNDUP_SECTION_ID],
    milestone: 'Thirty questions, and most of them asked you to produce the word rather than spot it.',
    estScreens: 20,
  },
];

/* ─── ERROR TRIGGERS AND DRILLS ────────────────────────────────────────────
 *
 * Invariants §4: each round names `targets`, and `drillForRound` fires the drill
 * of the FIRST resolving target only, then stops. A drill named in second place
 * is dead content. Each drill below is the first resolving target of exactly one
 * round: err-wrong-clitic leads r1 and r4, err-dropped-clitic leads r2 and r5,
 * err-ne-after-clitic leads r3 and r6. Three drills, six rounds, and every drill
 * fires.                                                                       */

const ERROR_TRIGGERS: ErrorTrigger[] = [
  {
    id: 'err-wrong-clitic',
    description: 'Reaches for se whatever the person is, because se is the form the verb is listed under and it looks like the default. « Vous se lavez. »',
    detectOn: [PERSONS_SECTION_ID, BUILD_SECTION_ID, UNSEEN_SECTION_ID, QUIZ_SECTION_ID],
    drill: 'drill-pick-clitic',
    retest: 'retest-pick-clitic',
  },
  {
    id: 'err-dropped-clitic',
    description: `Drops the little word altogether, which leaves a complete French sentence about doing the thing to something else. « Je lève à sept heures. » ${unitRef('a1.25')} records the same error and this lesson opens on it.`,
    detectOn: [SCENE_SECTION_ID, CONTRAST_SECTION_ID, LISTEN_SECTION_ID, QUIZ_SECTION_ID],
    drill: 'drill-dropped',
    retest: 'retest-dropped',
  },
  {
    id: 'err-ne-after-clitic',
    description: `Puts ne between the little word and the verb, which is what ${unitRef('a2.19')}\'s rule produces when it is read at its word. « Je me ne lave pas. »`,
    detectOn: [NEGATIVE_SECTION_ID, WRAP_SECTION_ID, QUIZ_SECTION_ID],
    drill: 'drill-wrap',
    retest: 'retest-wrap',
  },
];

const DRILLS: LessonDrill[] = [
  {
    id: 'drill-pick-clitic',
    title: 'Person first, then the word',
    format: 'sort',
    buckets: ['me · te · se', 'nous · vous'],
    items: [A(721), A(722), A(723), A(724), A(725), A(726)],
    coach: 'Say the person out loud before you reach for the middle word, and the middle word is that person in another shape. Se is not a default: it belongs to il, elle and ils.',
  },
  {
    id: 'retest-pick-clitic',
    title: 'One more',
    format: 'mcq',
    q: 'Vous ___ lavez. Which one?',
    opts: ['vous', 'se', 'te'],
    correct: 0,
    why: 'Vous, identical to the person in front of it. It is one of the two that look like typos and it is not one.',
  },
  {
    id: 'drill-dropped',
    title: 'With it and without it',
    format: 'flashcard',
    pairs: [[fr(A(721)), fr(A(727))], [fr(A(723)), 'Il lave la voiture.'], [fr(A(732)), SCENE_ERROR]],
    coach: `Each pair is one verb, twice. The one with the little word has nothing after the verb because there is nothing left to name; the one without it names something. ${A125_ERROR_CLAIM}`,
  },
  {
    id: 'retest-dropped',
    title: 'One more',
    format: 'mcq',
    q: 'You meant to say you get up at seven. Which is it?',
    opts: [SCENE_RIGHT, SCENE_ERROR, 'Je lève moi à sept heures.'],
    correct: 0,
    why: 'The second one is correct French about lifting something, which is why nobody corrects it and why the sentence stalls instead.',
  },
  {
    id: 'drill-wrap',
    title: 'Both of them inside',
    format: 'flashcard',
    pairs: [[fr(A(721)), fr(A(728))], [fr(A(723)), fr(A(730))], [fr(A(722)), fr(A(729))]],
    coach: `${NEGATION_RULE} Two words changed for the person here rather than one, so ${NEGATION_EXTENSION.charAt(0).toLowerCase()}${NEGATION_EXTENSION.slice(1)} Ne in front of the little word, pas straight after the verb.`,
  },
  {
    id: 'retest-wrap',
    title: 'One more',
    format: 'mcq',
    q: 'Make « Il se lave. » negative.',
    opts: [fr(A(730)), 'Il se ne lave pas.', 'Il ne lave se pas.'],
    correct: 0,
    why: NEGATION_EXTENSION,
  },
];

/* ─── THE REFERENCE SHEET ──────────────────────────────────────────────────
 *
 * Corrections §8: a `sheetId` resolves ONLY inside the lesson that declares it,
 * and `ReferenceSheet.tsx` draws `teach`, `letterGrid` and `table` and nothing
 * else — a `cheatSheet` inside one draws its title and no content.
 *
 * This is where the `table` the brief asked for actually lives, because
 * `layer: 'deep'` is the only place one is allowed.                            */

const SHEETS: ReferenceSheet[] = [
  {
    id: SHEET_ID,
    layer: 'deep',
    title: 'The six little words',
    contains: ['The rule', 'All six', 'Saying no', 'The vowel', 'Next'],
    sections: [
      {
        id: 'sheet-rule',
        type: 'teach',
        layer: 'deep',
        title: 'The rule, in one line',
        body: `${REFRAME} It is the person you have already named, said again in the shape French uses when they are on the receiving end. Four of the six are a different word from the person and two are identical, which is why nous nous and vous vous look like mistakes and are not.`,
      },
      {
        /* THE `table` THE BRIEF ASKED FOR. It is here rather than in the flow
         * because `density.logic.ts:423` fails a table at layer core, and a
         * sheet section is exempt. The in-flow version is s05-persons, a
         * three-column tapTable with the same three columns. */
        id: 'sheet-six',
        type: 'table',
        layer: 'deep',
        title: 'Se laver, all six',
        cols: ['who', 'the extra word', 'the verb'],
        rows: PARADIGM_IDS.map((id, i) => {
          const row = CLITIC_TABLE[i]!;
          return [row.subject, row.clitic, fr(id).replace(/^\S+\s+\S+\s+/u, '').replace(/\.$/u, '')];
        }),
      },
      {
        id: 'sheet-negative',
        type: 'teach',
        layer: 'deep',
        title: 'Saying no',
        /* noStop on BOTH quoted rows. Quoting a corpus row that already ends in
         * a full stop inside a sentence that has its own produces « pas.. »,
         * which a2.20 found on a Pixel 6 and which this build's own guard
         * caught here. */
        body: `${NEGATION_RULE} ${NEGATION_EXTENSION} ${noStop(fr(A(721)))} becomes ${noStop(fr(A(728)))}. Ne in front of the little word, pas straight after the verb, and never between the two of them.`,
      },
      {
        id: 'sheet-vowel',
        type: 'teach',
        layer: 'deep',
        title: 'Two things that are not this rule',
        body: `${A209_REFRAME} The vowel in je me lève opens for a reason ${unitRef(EXC_UNIT)} gave you, in the four people where the ending makes no sound, and it has nothing to do with the little word. And the little word loses its e in front of a vowel, which is the elision rule you already have: je m'habille, ils s'habillent.`,
      },
      {
        id: 'sheet-next',
        type: 'teach',
        layer: 'deep',
        title: 'What is not here',
        body: `${PRESENT_NO_AGREEMENT} ${PAST_DEFERRAL} And the same five words do a second job standing in for a thing rather than pointing back at the person, which is ${unitRef(DIRECT_OBJECT_UNIT)} and ${unitRef(INDIRECT_OBJECT_UNIT)}.`,
      },
    ],
  },
];

/* ─── DECK TRANCHES ────────────────────────────────────────────────────────
 *
 * Every item released exactly once, nothing untaught, and no tranche releasing
 * an item the acts before it have not shown. */

const DECK_TRANCHE: string[][] = [
  // After act 1: the contrast pair and the opener.
  [A(721), A(727), 'fr.a1.presentation-personnelle.001', 'fr.a1.rencontres.105', 'fr.a1.cuisine.228', 'fr.a1.cuisine.183'],
  // After act 2: the rest of the paradigm and a1.25's own doubled sentence.
  [A(722), A(723), A(724), A(725), A(726), 'fr.a1.routines.181', 'fr.a1.routines.028'],
  // After act 3: the Owns, in the order the acts showed them.
  [
    A(738), A(739), A(744), A(745), A(746), A(741), A(742), A(743),
    A(732), A(733), A(734), A(735), A(736), A(737), RECIPROCAL_ID,
    'fr.a1.routines.001', 'fr.a1.routines.003', 'fr.a1.routines.012',
    'fr.a1.routines.144', 'fr.sons.verbes-essentiels.056', 'fr.a1.routines.087',
  ],
  // After act 4: the negatives.
  [A(728), A(729), A(730), A(731)],
  // After act 5: the conversation, and the rest of a1.25's vocabulary.
  [
    A(747), A(748), A(749), A(750), A(751),
    'fr.a1.routines.010', 'fr.a1.routines.011', 'fr.a1.routines.020',
    'fr.a1.routines.034', 'fr.a1.routines.019',
  ],
  // After act 6: the three receptive rows the exam and the roundup lean on.
  // ONE SLICE PER ACT is a schema requirement, not a preference: `validateLesson`
  // fails a lesson whose tranche count and act count disagree.
  ['fr.a1.routines.154', 'fr.a1.routines.157', 'fr.a1.corps.209'],
];

/** `Lesson.itemIds` is the union of the tranches, in release order. Measured
 *  against the shipped a2.21, where the two are identical sets: a tranche is how
 *  an item is RELEASED and `itemIds` is what the lesson OWNS, so an id in one
 *  and not the other is either a dead corpus entry or an item released without
 *  ever being taught. Derived rather than retyped, so the two cannot drift. */
const ITEM_IDS: string[] = [...new Set(DECK_TRANCHE.flat())];

/* ─── THE LESSON ───────────────────────────────────────────────────────────*/

export const LESSON: Lesson = {
  id: LESSON_ID,
  unitId: UNIT.id,
  /** The lesson's own sequence WITHIN the unit, not the unit's seq on the
   *  trail. This is the first and only lesson of a2.22, so 1. */
  seq: 1,
  title: UNIT.sub,
  tag: `A2 · LEÇON ${String(UNIT.seq).padStart(2, '0')}`,
  level: 'a2',
  /** v1 was the first build. v2 REPAIRS A DEFECT FOUND ON A PIXEL 6 and nowhere
   *  else: `s06-doubled` quoted a corpus row mid-sentence and drew « ... tard le
   *  dimanche., beside a verb ... ». Every host layer was green, because every
   *  guard in this band checks for two consecutive DOTS and this is a stop
   *  followed by a comma.
   *
   *  THE COUNTER MOVES RATHER THAN THE BODY BEING CORRECTED UNDER v1. Ledger
   *  §10: two different bodies under one number is the drift this project has
   *  lost work to twice. a2.09 set the precedent and a2.20 followed it twice. */
  version: 3,

  intro:
    `About half the verbs in a French day arrive with a small word in front of them, and ${unitRef(ROUTINE_UNIT)} asked you to store it with the verb. That was the right thing to do while you only needed three of them. It is not a fixed piece of the verb: it is the person you have just named, said again, and it changes every time they do. This is all six of them, the one place saying no goes wrong, and the three verbs that carry it and mean nothing by it.`,

  grammarAssumed: [
    'The present of regular -er verbs, as a stem plus six endings, introduced in a2.01',
    'That -e, -es and -ent are silent and that the subject pronoun carries the person, introduced in a2.01',
    'The stem-vowel change in the four cells where the ending goes silent, introduced in a2.09',
    'Reflexive verbs as whole lexical items in je, tu and il, introduced in a1.25',
    'The daily-routine vocabulary and the parts of the day, introduced in a1.25',
    'Standard negation with ne … pas around a finite verb, introduced in a1.18',
    'That ne … pas encloses the verb that changed rather than the one carrying the meaning, introduced in a2.19 and extended in a2.05 and a2.21',
    'The elision of a preverbal clitic before a vowel or mute h, introduced in sons.07',
  ],
  grammarIntroduced: [
    'The reflexive clitic paradigm in all six persons, as the subject pronoun in its object series rather than as a fixed particle',
    'That the clitic is syntactically part of the verbal complex and is enclosed by ne … pas along with the finite verb, extending a1.18 and a2.19 to a preverbal clitic',
    'That first and second person plural clitics are homophonous and homographic with their subject pronouns, which is orthographically indistinguishable from a dittography',
    'Inherently pronominal verbs, where the clitic is lexically selected and carries no reflexive semantics: s\'appeler, se souvenir, se dépêcher',
    'The reflexive as a valency reduction, contrasted with the transitive use of the same verb: je lave la voiture against je me lave',
    'Clitic elision before a vowel or mute h, extending sons.07 from determiners to the clitic series',
    'That the clitic paradigm generalises without exception, so any verb listed with se is derivable from the six forms',
    'That the present tense carries no participial agreement, stated explicitly as the clean background a2.23 changes',
    'The reciprocal reading of the same forms, for RECEPTION ONLY and produced nowhere, and owned by no unit at any level',
    'The direct and indirect object series proper, named and reserved for a2.06 and a2.24, and the compound past reserved for a2.23',
  ],

  features: ['roleplay', 'voiceflash'],
  scenarioId: undefined,

  overview: {
    titleEn: UNIT.title,
    subFr: UNIT.sub,
    introFr: 'Un petit mot de plus, et il change avec la personne.',
    minutes: 30,
    difficulty: 3,
    glyph: '🪞',
    screens: 225,
  },

  acts: ACTS,
  reframe: REFRAME,
  errorTriggers: ERROR_TRIGGERS,
  drills: DRILLS,
  sheets: SHEETS,
  deckTranche: DECK_TRANCHE,
  terms: PRONOMINAUX_TERMS,
  sections: SECTIONS,
  itemIds: ITEM_IDS,

  audio: {
    defaultLang: 'fr-FR',
    speeds: [1.0, 0.65],
    coachVoice: 'coach-en-warm',
    interfaceSounds: ['correct', 'incorrect', 'checkpoint'],
    // ── The audio decisions that cannot be recovered later ─────────────────
    //
    // Invariants §10: anything the learner must hear as a CONTRAST is ONE TAKE
    // with one voice, because two recordings are two performances and the
    // learner will hear the performance rather than the language.
    //
    // AND THE HOUSE-COPY RULES APPLY HERE. a2.05 §3: `audio.recorded[].desc` is
    // authored prose that ships in the lesson body, and every house-copy walk in
    // this band built its string out of sections + sheets + terms + intro +
    // overview + acts + drills and stopped. This build's walk reads `audio`.
    //
    // Briefs only. Do NOT run pnpm audio:render: it spends real ElevenLabs
    // credits and ELEVENLABS_API_KEY is not set in ealch-admin/.env in any case.
    recorded: [
      {
        id: 'rec-a2-22-scene',
        desc:
          'A LANGUAGE EXCHANGE, WEEK THREE, AND THE OTHER PERSON IS PLEASED TO BE ASKING. '
          + 'HER LINE « Raconte-moi ta matinée. » IS A GENUINE INVITATION and should sound like somebody settling in to listen. She is not testing him. '
          + 'THE LEARNER\'S TWO LINES ARE THE TAKES THAT HAVE TO BE RIGHT. « Je lève à sept heures. » IS SAID FLUENTLY AND WITH CONFIDENCE. '
          + 'This is the single most important instruction in the take: it is a complete, well-formed French sentence and he believes he has said what he meant. '
          + 'Any hesitation on it teaches that the error is audible, and the whole point of the scene is that it is not. '
          + 'THE SECOND LINE « Et après, je... je douche... » IS WHERE IT BREAKS. The two false starts are real pauses, and the take ends unresolved rather than tailing off gently: he has run out of sentence and stopped. '
          + 'NOBODY CORRECTS HIM AND NOBODY REACTS. There is no third voice and no sound of patience. The scene works because nothing happened that anyone could point at.',
        clipIds: ['Raconte-moi ta matinée.', SCENE_ERROR, SCENE_STALL, SCENE_RIGHT],
      },
      {
        id: 'rec-a2-22-appelle',
        desc:
          'THREE LINES, ONE TAKE, ORDINARY PACE: « Je m\'appelle Sophie. » « s\'appeler » « se dépêcher » then « Tu te dépêches. » '
          + 'THE FIRST LINE MUST SOUND COMPLETELY UNREMARKABLE. It is the sentence the learner has said a hundred times and the point of the card is that nothing about it ever sounded special. '
          + 'DO NOT LEAN ON THE m\'. A reading that marks it teaches that the learner should have noticed it, and the card\'s claim is that there was nothing to notice.',
        clipIds: ['Je m\'appelle Sophie.', "s'appeler", 'se dépêcher', 'Tu te dépêches.'],
      },
      {
        id: 'rec-a2-22-persons',
        desc:
          'THE SIX CELLS, ONE TAKE, ONE VOICE, AND THIS IS THE MOST IMPORTANT TAKE IN THE LESSON. Six lines in this order: '
          + '« Je me lave. » « Tu te laves. » « Il se lave. » « Nous nous lavons. » « Vous vous lavez. » « Ils se lavent. » '
          + 'THE VERB MUST BE IDENTICAL IN FOUR OF THE SIX. Lines one, two, three and six all end on the same single syllable, and line three and line six are identical from start to finish. '
          + 'Not similar: identical. The learner is being taught that the little word is the only thing carrying the person, and any difference in the verb teaches the opposite. '
          + 'THE DOUBLED WORDS IN LINES FOUR AND FIVE MUST NOT BE RUN TOGETHER. « Nous nous » is two words with a real boundary between them, said at ordinary pace and without emphasis on either. '
          + 'A reading that elides them into one sound makes the doubling inaudible, which is the thing learners already do not believe. '
          + 'RECORD ALL SIX AS ONE CONTINUOUS TAKE. Six separate recordings are six performances.',
        clipIds: PARADIGM_IDS.map((id) => fr(id)),
      },
      {
        id: 'rec-a2-22-doubled',
        desc:
          'THREE LINES, ONE TAKE: « Nous nous lavons. » « Vous vous lavez. » « Nous nous levons tard le dimanche. » '
          + 'THE DOUBLED WORD IS THE WHOLE POINT AND IT MUST BE CLEARLY TWO WORDS. There is a real, unhurried boundary between them in all three lines. '
          + 'NEITHER OF THE TWO MAY BE STRESSED. They are the same word twice and stressing one to distinguish them teaches a difference that does not exist in speech.',
        clipIds: [fr(A(724)), fr(A(725)), importedFr('fr.a1.routines.181')],
      },
      {
        id: 'rec-a2-22-audible',
        desc:
          'THE ONE CONTRAST IN THIS LESSON THE EAR CAN SETTLE, ONE TAKE, ONE VOICE, FOUR LINES: '
          + '« Je lave la voiture. » « Je me lave. » « Il se lave. » « Ils se lavent. » '
          + 'THE FIRST TWO ARE THE PAIR AND THEY DIFFER BY A WHOLE SYLLABLE. Read them at the same pace so the extra syllable is the only difference; slowing the second one hands the learner the answer for the wrong reason. '
          + 'LINES THREE AND FOUR ARE THE OPPOSITE INSTRUCTION AND THEY ARE IN THE SAME TAKE DELIBERATELY. They must be completely identical: same speed, same weight, same everything. '
          + 'The mission asks the learner to hear a difference in the first pair and no difference at all in the second, and it only works if one voice does both in one sitting.',
        clipIds: [fr(A(727)), fr(A(721)), fr(A(723)), fr(A(726))],
      },
      {
        id: 'rec-a2-22-nomeaning',
        desc:
          'FOUR LINES, ONE TAKE, PLAINLY: « Je m\'appelle Sophie. » « Tu te dépêches. » « Nous nous dépêchons. » « se souvenir » '
          + 'NONE OF THESE IS AN ERROR AND NONE IS A CONTRAST. They are four ordinary sentences and the reading should carry no teaching intent at all. '
          + 'THE LITTLE WORD MUST NOT BE MARKED IN ANY OF THEM. The card\'s claim is that it is there and means nothing, and a reading that points at it argues the opposite.',
        clipIds: [importedFr('fr.a1.presentation-personnelle.001'), fr(A(739)), fr(A(738)), importedFr('fr.sons.verbes-essentiels.056')],
      },
      {
        id: 'rec-a2-22-elision',
        desc:
          'THREE LINES, ONE TAKE: « Je m\'habille vite. » « Ils s\'habillent vite. » « Je me douche avant de m\'habiller. » '
          + 'THE ELISION IS NOT A PAUSE. « m\'habille » is one smooth run and the apostrophe is silent; a reading that breaks at it teaches a boundary that is not there. '
          + 'THE h IS SILENT IN ALL THREE. Nothing is aspirated and nothing is caught in the throat. '
          + 'LINES ONE AND TWO ARE A PAIR and the only difference is the first word and the vowel of the little word. Read them at the same pace.',
        clipIds: [fr(A(744)), fr(A(745)), importedFr('fr.a1.routines.144')],
      },
      {
        id: 'rec-a2-22-vowel',
        desc:
          'THE STEM CHANGE, ONE TAKE, FOUR LINES: « Je me lève à sept heures. » « Je me lève tôt. » « Nous nous levons tôt. » « Je me lave. » '
          + 'LINES TWO AND THREE ARE THE CONTRAST AND THE VOWEL IS THE ONLY THING BEING COMPARED. The è in « lève » is open and the e in « levons » is the quiet one; both must be clearly said and neither exaggerated. '
          + 'THE LITTLE WORD MUST SOUND THE SAME IN ALL FOUR. That is the card\'s claim: the vowel moved and the little word did not notice. Any variation in « me » undoes the mission. '
          + 'LINE FOUR IS THERE TO SHOW A VERB WHERE NOTHING MOVES and should sound entirely ordinary.',
        clipIds: [importedFr('fr.a1.routines.003'), fr(A(732)), fr(A(735)), fr(A(721))],
      },
      {
        id: 'rec-a2-22-negative',
        desc:
          'THE NEGATIVE, ONE TAKE, FOUR LINES: « Je me lave. » « Je ne me lave pas. » « Il ne se lave pas. » « Tu ne te laves pas. » '
          + 'NOT A WRONG-THEN-RIGHT TAKE. All four are correct French. '
          + 'THE ne MUST BE AUDIBLE AND UNSTRESSED IN ALL THREE NEGATIVES. It is the word whose POSITION the whole mission is about, so it cannot be swallowed the way ordinary speech swallows it; and it cannot be leaned on either, because the learner would then hear it as the important word rather than as a word in a particular place. '
          + 'THERE IS NO PAUSE BETWEEN ne AND THE LITTLE WORD. « ne me » is one run. A break there is exactly the reading that makes the error sound plausible.',
        clipIds: [fr(A(721)), fr(A(728)), fr(A(730)), fr(A(729))],
      },
      {
        id: 'rec-a2-22-wrap',
        desc:
          'THE AUDIO STEP OF THE TRAP, AND IT IS A WRONG-THEN-RIGHT TAKE. Four lines, one take, in this order: '
          + '« Je me ne lave pas. » then « Je ne me lave pas. », then « Il ne se lave pas. » then « Je lave la voiture. » '
          + 'READ THE FIRST LINE PLAINLY AND AT ORDINARY PACE rather than comically or hesitantly. It is perfectly pronounceable and it is exactly what a careful learner produces from the rule they were given; a reading that signals the error teaches that the error is audible when it is not. '
          + 'DO NOT SEPARATE THE FIRST TWO LINES WITH A LONG PAUSE. The pair is the teaching and it works when the two sit against each other. '
          + 'THE FOURTH LINE HAS NO LITTLE WORD AT ALL and is there to show the wrap doing its ordinary job. Nothing about it should sound like a comparison.',
        clipIds: ['Je me ne lave pas.', fr(A(728)), fr(A(730)), fr(A(727))],
      },
      {
        id: 'rec-a2-22-dictee',
        desc:
          'THE DICTÉE LINES, ONE TAKE EACH, CLEAN AND UNHURRIED, WITH NO CONTRAST INTENT AT ALL. This is the opposite instruction to rec-a2-22-persons: there the learner is comparing and here they are spelling, and a paired reading would hand them the answer. Read each line as though it were the only line. '
          + 'SIX OF THE TWELVE ARE THE SAME VERB AND FOUR OF THOSE END ON THE SAME SYLLABLE. That is correct and must not be corrected for. The learner works out which cell is meant from the two words in front of the verb. '
          + 'THE FIRST TWO WORDS ARE WHERE THE INFORMATION IS. « Je me », « Tu te », « Il se », « Nous nous », « Vous vous », « Ils se »: these must be clearly and evenly said, because they are the only thing distinguishing four of the six lines. '
          + 'THE DOUBLED PAIRS ARE TWO WORDS. « Nous nous » and « Vous vous » each need a real boundary, at ordinary pace, or the learner writes one word. '
          + 'SAY IT THE WAY SOMEBODY WOULD SAY IT, at the pace of somebody dictating an address to a friend.',
        clipIds: [
          A(721), A(722), A(723), A(724), A(725), A(726),
          A(728), A(730), A(736), A(737), A(739), A(744),
        ].map((id) => fr(id)),
      },
      {
        id: 'rec-a2-22-talk',
        desc:
          'THE CONVERSATION, HER LINES ONLY, ONE TAKE, AS ONE CONTINUOUS EXCHANGE RATHER THAN AS FIVE SEPARATE PROMPTS. She is the same binôme from the opening scene, a week later, and this time the exchange works. '
          + 'EVERY QUESTION IS ASKED WITHOUT INVERSION and should sound completely ordinary: « Tu te couches tard, toi ? » is a statement with a question mark on it, which is what people say. '
          + 'HER OWN LINES CARRY THE LITTLE WORD THREE TIMES and none of them may be marked or slowed. She is using the structure, not demonstrating it. '
          + 'THERE IS NO PAUSE INSIDE « te réveilles » OR « se lève ». The little word and the verb are one run.',
        clipIds: [
          'Raconte-moi ta matinée. Tu te réveilles à quelle heure ?',
          'Et ensuite ?',
          'Ta famille se lève en même temps que toi ?',
          'Tu te couches tard, toi ?',
          'Et tes collègues, ils ont le temps le matin ?',
        ],
      },
    ],
    ambienceDefault: 'off',
  },
};

/* ─── Arrays the guards read, exported at the FOOT of the file ─────────────
 *
 * These are reads off consts declared above, so they cannot live in the export
 * block near the top: `export const X = SECTIONS` before SECTIONS is declared is
 * a temporal dead zone and throws at import time. The section ids up there are
 * literals for exactly that reason.                                          */

export const PRON_SECTIONS = SECTIONS;
export const PRON_ACTS = ACTS;
export const PRON_TRANCHES = DECK_TRANCHE;
export const PRON_SHEETS = SHEETS;
export const PRON_DRILLS = DRILLS;
export const PRON_ERROR_TRIGGERS = ERROR_TRIGGERS;
export const PRON_SCENE_BEATS = SCENE_BEATS;

/** Every itemId the lesson names, which must all resolve and all be on a
 *  screen. Invariants §1: ask "did the learner see it", not "does it resolve". */
export const PRON_ITEM_IDS: string[] = (() => {
  const out = new Set<string>();
  const walk = (o: unknown): void => {
    if (!o || typeof o !== 'object') return;
    if (Array.isArray(o)) { o.forEach(walk); return; }
    const r = o as Record<string, unknown>;
    if (Array.isArray(r.itemIds)) r.itemIds.forEach((i) => out.add(String(i)));
    if (typeof r.practiceOn === 'string') out.add(r.practiceOn);
    Object.values(r).forEach(walk);
  };
  walk(SECTIONS);
  return [...out];
})();

export const PRON_DICTEE_IDS: string[] =
  (SECTIONS.find((s) => s.id === DICTATION_SECTION_ID) as { itemIds?: string[] }).itemIds ?? [];
export const PRON_SPEAK_IDS: string[] =
  (SECTIONS.find((s) => s.id === SPEAK_SECTION_ID) as { itemIds?: string[] }).itemIds ?? [];
