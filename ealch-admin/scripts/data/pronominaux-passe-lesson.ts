// a2.23.l1, « Pronominaux au passé composé », seq 20 on the A2 trail, the LAST
// lesson of batch 2 and the capstone of the past-tense arc.
//
// 24 sections, 6 acts, 30 questions, one stepped trapDrill and one reference
// sheet. Every French string on every screen comes from
// pronominaux-passe-corpus.ts or from pronominaux-passe-imported.ts and none is
// typed twice.
//
// ── WHAT THIS LESSON OWNS ────────────────────────────────────────────────
//
// THE COMPOSITION, AND ONE NEW FACT INSIDE IT. It is the fourth kind of thing
// doctrine §B.5 lists — THE FAMILY — but arrived at from the other direction:
// nothing here generalises to a new pattern, because there is no new pattern.
// There are four rules the learner already has, and the job is assembling them
// under load. The one new fact is that the little word decides the first word.
//
//     from a2.22   the little word, and that it changes with the person
//     from a2.21   être as the first word, and the ending that follows it
//     from a2.05   the two-part shape, and where the halves of a negative go
//     from a2.20   the second words themselves, group by group
//     NEW          the little word means être, even where the plain verb
//                  means avoir
//
// laver takes avoir. se laver takes être. The little word changed the first
// word, and that is the one fact this lesson adds.
//
// ── ACT WEIGHTS ──────────────────────────────────────────────────────────
//
//   the four positions   act 2, TWO sections
//   the Owns             act 3, SEVEN sections
//   the trap             act 4, three, one of them a stepped trapDrill
//
// Doctrine §B.5: if the act structure gives the paradigm more missions than the
// Owns, the wrong lesson got built. Seven against two, asserted in all three
// layers. The paradigm act is deliberately the lightest in the lesson, because
// there is no paradigm to learn: the six persons of être are a1.06's and the
// six little words are a2.22's, and this act only puts them in one order.
//
// ── THE THREE REQUIRED LAYOUTS ───────────────────────────────────────────
//
//   1. THE SLOT DIAGRAM, one screen, all six positions, built from a full
//      negative. `s05-slots`, and it is a three-column tapTable rather than a
//      `table`: corrections §8 says a table at layer core is a table-in-core
//      density failure, and a2.21's and a2.22's briefs both made that mistake.
//      SIX ROWS IS THE PIXEL 6 CEILING and the diagram is exactly six.
//   2. « Elle s'est lavée. » beside « Elle s'est lavé les mains. », in one
//      section, whichever option was taken. `s11-object`, and both pairs are on
//      it, with a published row as corroboration.
//   3. « J'ai lavé la voiture. » beside « Je me suis lavé. », showing the first
//      word flipping with the little word. `s02-flip`, THE OWNS, and it opens
//      the lesson rather than closing it, because the scene has just failed on
//      exactly that sentence.
//
// ── ONE TABLE ────────────────────────────────────────────────────────────
//
// The brief: *« One table. You are the fourth compound-tense lesson in five and
// restraint matters more here than anywhere. »* There is one, and it is the slot
// diagram. The reference sheet holds the only other one, at `layer: 'deep'`,
// which is the only place a real `table` is allowed.

import type {
  ErrorTrigger, Lesson, LessonAct, LessonDrill, LessonSection, ReferenceSheet, SceneBeat,
} from '../../../ealch-v2/src/content/schema.ts';
import {
  A118_REFRAME, A201_REFRAME, A205_REFRAME, A220_REFRAME, A221_REFRAME,
  A222_REFRAME, A222_SCENE_ERROR, AGREEMENT_RULE, AVOIR_PAIR, AVOIR_TRAP,
  CELL_IDS, DIRECT_OBJECT_UNIT, EAR_CLAIM, ELISION_CLAIM, ER_UNIT, ETRE_UNIT,
  FLIP_PAIRS, FUTUR_UNIT, INDIRECT_OBJECT_UNIT, IRREGULAR_UNIT, LESSON_ID,
  NEGATION_EXTENSION, NEGATION_OUTSIDE, NEGATION_RULE, NEGATION_UNIT,
  OBJECT_CLAIM, OBJECT_DEFERRAL, OBJECT_PAIR, PASSE_UNIT, PAST_TENSE_DEFERRAL,
  PERSON_IDS, POSITION_TRAP, PRESENT_NO_AGREEMENT, REFLEXIVE_UNIT, REFRAME,
  ROUTINE_UNIT, SCENE_ERROR, SCENE_ERROR_EN, SCENE_RIGHT, SCENE_STALL,
  SCENE_STALL_EN, SHEET_ID, SLOTS, SLOT_SENTENCE, THE_NEW_FACT, UNIT, WRAP_TRAP,
  en, fr, ipaOf, sub,
} from './pronominaux-passe-corpus.ts';
import {
  ALREADY_YOURS, ASYMMETRY_LINE, EVIDENCE_LINE, PRONOMINAUX_PASSE_TERMS,
} from './pronominaux-passe-terms.ts';
import { importedEn, importedFr, rowCard } from './pronominaux-passe-imported.ts';
import { unitRef } from './_unit-ref.ts';

/** A citation that OPENS a sentence needs a capital, and the label is built at
 *  interpolation time rather than typed, so the capital has to be applied here.
 *  « lesson 22 said this first » is not a sentence. */
function Cap(s: string): string { return s.charAt(0).toUpperCase() + s.slice(1); }

/* ─── Reading the rows ─────────────────────────────────────────────────────
 *
 * The lesson NEVER types a French string that is also a corpus row. a2.13 §6.2
 * shipped a grid that disagreed with its own cards and every host gate was
 * green.                                                                     */

const A = (n: number): string => `fr.a2.verbes.${n}`;

/** Strips a sentence-final full stop, for the places a French line is quoted
 *  INSIDE a sentence that has its own punctuation. a2.20 found « peur.. » on a
 *  Pixel 6 and a2.22 §4 found the wider shape — a stop followed by a comma —
 *  which shipped past four host layers and cost that lesson a v2. This build
 *  widened the guard BEFORE authoring, which is what a2.22 §10 asked for. */
const noStop = (s: string): string => s.replace(/\.$/u, '');

/** A groupDrill item at `lg`. `MissionRich.tsx:439` draws `fr`, `ipa` and `note`
 *  and nothing else at this size, so the respelling and the gloss go in `note`. */
const card = (id: string) => ({ fr: fr(id), ipa: ipaOf(id), note: `${sub(id)} ${en(id)}` });

/** The two halves of a pair, on one line, which is what "side by side" means on
 *  a card. Both halves lose their stop so the join does not read « lavé., Je ». */
const pair = (a: string, b: string): string => `${noStop(fr(a))} · ${noStop(fr(b))}`;

/* ─── Section ids, as LITERALS ─────────────────────────────────────────────
 *
 * Literals rather than reads off a const declared below, because
 * `export const X = SECTIONS[0].id` before SECTIONS is a temporal dead zone.  */

export const SCENE_SECTION_ID = 's01-scene';
export const FLIP_SECTION_ID = 's02-flip';
export const GOALS_SECTION_ID = 's03-goals';
export const RECAP_SECTION_ID = 's04-recap';
export const SLOTS_SECTION_ID = 's05-slots';
export const PERSONS_SECTION_ID = 's06-persons';
export const ASSEMBLY_SECTION_ID = 's07-assembly';
export const AGREEMENT_SECTION_ID = 's08-agreement';
export const SILENT_SECTION_ID = 's09-silent';
export const NEWVERBS_SECTION_ID = 's10-newverbs';
export const OBJECT_SECTION_ID = 's11-object';
export const NOMEANING_SECTION_ID = 's12-nomeaning';
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

/** THE OWNS. Seven sections against the two that walk the positions, and every
 *  layer walks these two lists rather than counting by hand. */
export const OWNS_SECTION_IDS = [
  ASSEMBLY_SECTION_ID, AGREEMENT_SECTION_ID, SILENT_SECTION_ID,
  NEWVERBS_SECTION_ID, OBJECT_SECTION_ID, NOMEANING_SECTION_ID,
  LATER_SECTION_ID,
];
export const PARADIGM_SECTION_IDS = [SLOTS_SECTION_ID, PERSONS_SECTION_ID];

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 1. The sentence that came out wrong
 * ═══════════════════════════════════════════════════════════════════════ */

/** Doctrine §B.2: an A2 scene opens on somebody who started a sentence they
 *  could not finish. Nobody is rude, nobody is corrected, nothing is
 *  mispronounced. The learner runs out of sentence in public.
 *
 *  THE ERROR IS CAUSED BY THE CORRECT SENTENCE STANDING BESIDE IT. He has just
 *  said « Ce matin, j'ai lavé la voiture » — a published corpus sentence, and
 *  right. One question later the same reasoning produces « J'ai levé à six
 *  heures », which nobody can hear as a mistake because it is not one: it is a
 *  different sentence, and she waits for the missing thing.
 *
 *  AND IT IS a2.22's SCENE ONE TENSE LATER. That lesson opened on « Je lève à
 *  sept heures. » — same verb, same dropped little word, same listener waiting.
 *  The resolve beat says so, so the pair reads as a payoff rather than a repeat. */
const SCENE_BEATS: SceneBeat[] = [
  {
    kind: 'narration',
    size: 'md',
    text: 'The same language exchange, a month on. You can tell her what you did yesterday now, and you have been doing it all evening without a single stumble.',
    audio: { mode: 'tts', voice: 'coach' },
  },
  {
    kind: 'bubble',
    from: 'you',
    fr: importedFr('fr.a1.rp-recits-temps.066'),
    en: importedEn('fr.a1.rp-recits-temps.066'),
    size: 'md',
    reveal: 'tap',
    stage: 'Fluent, and correct. Nothing about this sentence is going to go wrong, and it is the sentence that causes what happens next.',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a2-23-scene' },
  },
  {
    kind: 'bubble',
    from: 'them',
    speaker: 'Ton binôme',
    fr: fr(A(820)),
    en: en(A(820)),
    size: 'md',
    reveal: 'tap',
    audio: { mode: 'tts', lang: 'fr-FR' },
  },
  {
    kind: 'bubble',
    from: 'you',
    fr: SCENE_STALL,
    en: SCENE_STALL_EN,
    size: 'md',
    reveal: 'tap',
    stage: 'Two false starts. The words are all there and one decision is not, and it is the decision that comes third in the sentence.',
    audio: { mode: 'tts', lang: 'fr-FR' },
  },
  {
    kind: 'bubble',
    from: 'you',
    fr: SCENE_ERROR,
    en: SCENE_ERROR_EN,
    size: 'md',
    reveal: 'tap',
    stage: 'And it lands on the one he has just used. It worked four seconds ago on the same kind of sentence, so there is no reason in his head for it not to work now.',
    audio: { mode: 'tts', lang: 'fr-FR' },
  },
  {
    kind: 'bubble',
    from: 'them',
    speaker: 'Ton binôme',
    fr: fr(A(822)),
    en: en(A(822)),
    size: 'md',
    reveal: 'tap',
    stage: 'She is not correcting him. She heard a complete sentence about lifting something and she is waiting to be told what.',
    audio: { mode: 'tts', lang: 'fr-FR' },
  },
  {
    kind: 'choice',
    size: 'md',
    prompt: 'Which of these is the sentence he meant?',
    options: [
      { fr: SCENE_RIGHT, en: 'I got up at six.', outcome: 'works' },
      { fr: SCENE_ERROR, en: SCENE_ERROR_EN, outcome: 'breaks' },
    ],
    followUp: {
      works: 'That is the one. Two little words in front of the verb instead of one, and the first of them changes which word comes next.',
      breaks: 'That is what was said, and it is correct French about lifting something. Nobody could hear a mistake because there was not one to hear.',
    },
  },
  {
    kind: 'break',
    size: 'md',
    heading: 'The sentence before it was right, and that is why this one is wrong',
    body: `${noStop(importedFr('fr.a1.rp-recits-temps.066'))} takes j'ai, and it is correct. ${noStop(SCENE_RIGHT)} takes je suis, and it is correct too. The verb is not what decides it and the meaning is not what decides it.`,
    wrong: { fr: SCENE_ERROR, ipa: '/ʒe lə.ve a si zœʁ/', respell: '[zhay luh-VAY ah see ZUHR]', en: SCENE_ERROR_EN },
    right: { fr: SCENE_RIGHT, ipa: ipaOf(A(821)), respell: `[${sub(A(821)).slice(1, -1)}]`, en: en(A(821)) },
    coach: REFRAME,
  },
  {
    kind: 'resolve',
    size: 'md',
    text: `${Cap(unitRef(REFLEXIVE_UNIT))} opened on « ${A222_SCENE_ERROR} »: same verb, same missing word, same person waiting. Here it is in the past. ${THE_NEW_FACT}`,
  },
];

const SECTIONS: LessonSection[] = [
  {
    id: SCENE_SECTION_ID,
    type: 'scene',
    title: 'Four Seconds Apart',
    frSub: 'Quatre secondes plus tard',
    layer: 'core',
    render: 'screens',
    setting: {
      place: 'The same café table, the same two coffees',
      city: 'Lyon',
      time: 'A Saturday, a month later',
    },
    beats: SCENE_BEATS,
  },

  /* REQUIRED LAYOUT 3, AND IT IS THE OWNS. Three pairs, avoir first each time,
   * because that is the sentence the learner already owns and the one the error
   * is derived from. Both halves on one card is what "side by side" means here,
   * and the guard reads the card's own `fr` rather than `strings(section)`. */
  {
    id: FLIP_SECTION_ID,
    type: 'cardDeck',
    title: 'One Word Changes The Other',
    frSub: 'Avoir, être',
    layer: 'core',
    size: 'lg',
    render: 'deck',
    say: 'Three pairs. In each one the verb is the same, the person is the same, and the first word is not.',
    hint: 'Same verb twice. The first word is what moved.',
    terms: ['littleWord', 'firstWord'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a2-23-flip' },
    cards: [
      {
        head: 'Wash the car, or wash',
        label: 'laver · se laver',
        fr: pair(FLIP_PAIRS[0]![0], FLIP_PAIRS[0]![1]),
        sub: `${sub(FLIP_PAIRS[0]![1])} ${en(FLIP_PAIRS[0]![1])}`,
        body: `${ASYMMETRY_LINE} ${THE_NEW_FACT}`,
      },
      {
        head: 'Put them to bed, or go to bed',
        label: 'coucher · se coucher',
        fr: pair(FLIP_PAIRS[1]![0], FLIP_PAIRS[1]![1]),
        sub: `${sub(FLIP_PAIRS[1]![1])} ${en(FLIP_PAIRS[1]![1])}`,
        body: 'Nothing about the meaning tells you which. Putting a child to bed and going to bed are the same action, and the two sentences take different first words.',
      },
      {
        head: 'Wake him up, or wake up',
        label: 'réveiller · se réveiller',
        fr: pair(FLIP_PAIRS[2]![0], FLIP_PAIRS[2]![1]),
        sub: `${sub(FLIP_PAIRS[2]![1])} ${en(FLIP_PAIRS[2]![1])}`,
        body: `Three verbs, three pairs, and the only thing that changed in any of them is the small word between the person and the verb. ${REFRAME}`,
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
      { t: 'Reach for the right first word', s: `${THE_NEW_FACT} It is the only decision in the sentence and the little word makes it for you.` },
      { t: 'Put the parts in one order', s: `Person, little word, first word, second word. ${Cap(unitRef(REFLEXIVE_UNIT))} gave you the first two and ${unitRef(ETRE_UNIT)} gave you the last two, and this is where they go together.` },
      { t: 'Put the ending on in writing', s: `${AGREEMENT_RULE} You will never hear it, so the only way to prove you can do it is to write it down.` },
      { t: 'Say no without moving anything', s: `${Cap(unitRef(NEGATION_UNIT))}, ${unitRef(FUTUR_UNIT)}, ${unitRef(PASSE_UNIT)}, ${unitRef(ETRE_UNIT)} and ${unitRef(REFLEXIVE_UNIT)} all built this rule and none of it changes. There is just a third word now, and it stays outside.` },
    ],
  },

  /* THE CAPSTONE CLAIM, MADE ONCE AND EARLY. Four cards, one per owned rule,
   * and the fifth thing is the whole of what is new. */
  {
    id: RECAP_SECTION_ID,
    type: 'cardDeck',
    /* RETITLED IN v2. « You Already Have Four Of The Five » is 16.01 em and the
     * mission row cuts at 13.2, so it shipped as « You Already Have Four Of
     * Th… » on a Pixel 6. */
    title: 'Four Are Already Yours',
    frSub: 'Ce que vous savez déjà',
    layer: 'core',
    size: 'lg',
    render: 'deck',
    say: 'Four cards, and not one of them is new. Read them as a checklist rather than as teaching.',
    hint: 'Four things you own, and one you do not.',
    terms: ['littleWord', 'firstWord', 'secondWord'].slice(0, 2),
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a2-23-recap' },
    cards: [
      {
        head: `The little word, from ${unitRef(REFLEXIVE_UNIT)}`,
        label: 'you have this',
        fr: 'je me · tu te · il se · nous nous · vous vous · ils se',
        sub: 'the person, said a second time',
        body: `« ${A222_REFRAME} » That is ${unitRef(REFLEXIVE_UNIT, 'a2')}'s line and it has not changed. The six little words are the same six.`,
      },
      {
        head: `The ending, from ${unitRef(ETRE_UNIT)}`,
        label: 'you have this too',
        fr: 'levé · levée · levés · levées',
        sub: 'and all four are one sound',
        body: `« ${A221_REFRAME} » ${AGREEMENT_RULE}`,
      },
      {
        head: `The shape and the wrap, from ${unitRef(PASSE_UNIT)}`,
        label: 'and this',
        fr: noStop(fr(A(802))),
        sub: `${sub(A(802))} ${en(A(802))}`,
        body: `« ${A205_REFRAME} » Two words for one verb, and the small ones in the middle. Nothing about that changes when the first word does.`,
      },
      {
        head: `The second words, from ${unitRef(IRREGULAR_UNIT)}`,
        label: 'and this',
        fr: noStop(fr(A(830))),
        sub: `${sub(A(830))} ${en(A(830))}`,
        body: `« ${A220_REFRAME} » Souvenue is not built out of anything on this screen. It comes off venir, in the group ${unitRef(IRREGULAR_UNIT)} put it in, and the ending goes on it the same way.`,
      },
    ],
  },

  /* ══════════════════════════════════════════════════════════════════════════
   *  ACT 2. Where everything lands
   * ═══════════════════════════════════════════════════════════════════════ */

  /* REQUIRED LAYOUT 1, AND THE ONE TABLE. Six positions, one full negative, one
   * screen. A three-column tapTable rather than a `table`, because a table at
   * layer core is a table-in-core density failure (corrections §8) and both
   * neighbouring briefs got that wrong. SIX ROWS IS THE PIXEL 6 CEILING and the
   * diagram is exactly six. */
  {
    id: SLOTS_SECTION_ID,
    type: 'tapTable',
    title: 'Six Places, In One Order',
    frSub: SLOT_SENTENCE,
    layer: 'core',
    say: `One sentence, read down rather than across. Every one of these six you have met before, and the fourth one is the only thing this lesson adds. Tap any row to hear the whole sentence.`,
    terms: ['littleWord', 'firstWord', 'theWrap'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a2-23-slots' },
    /* THE HEADER IS SHORT FOR THE SAME REASON THE CELLS ARE. « what it is
     * doing » wrapped to two lines and pushed the whole table down a row. */
    cols: ['where', 'the word', 'what it does'],
    rows: SLOTS.map((slot) => ({
      /* `job` IS THE CELL AND IT IS SHORT. v1 put the unit-id credits in here
       * and the six-row diagram spanned two screens on a Pixel 6; the credit
       * now rides the detail body, which is where a learner who taps the row
       * already goes. Corpus file, SLOTS. */
      cells: [slot.pos, slot.word, slot.job],
      say: SLOT_SENTENCE,
      detail: {
        title: `« ${slot.word} »`,
        say: SLOT_SENTENCE,
        body: `${SLOT_SENTENCE} ${sub(A(810))} ${en(A(810))} ${slot.credit}`,
      },
    })),
  },

  {
    id: PERSONS_SECTION_ID,
    type: 'cardDeck',
    title: 'The Same Six People',
    frSub: 'Se lever, six personnes',
    layer: 'core',
    size: 'lg',
    render: 'deck',
    say: `Three cards, two people each. Nothing here is new: it is ${unitRef('a1.06')}\'s six forms of être with ${unitRef('a2.22')}\'s six little words in front of them.`,
    hint: 'Two little words, then the verb, every time.',
    terms: ['littleWord', 'firstWord'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a2-23-persons' },
    cards: [
      {
        head: 'And two of them shorten',
        label: 'je · tu',
        fr: pair(PERSON_IDS[0]!, PERSON_IDS[1]!),
        sub: `${sub(PERSON_IDS[1]!)} ${en(PERSON_IDS[1]!)}`,
        body: `Te becomes t in front of es, the elision you have had since ${unitRef('sons.07')}. ${ELISION_CLAIM}`,
      },
      {
        head: 'And so does the third',
        label: 'il · nous',
        fr: pair(PERSON_IDS[2]!, PERSON_IDS[3]!),
        sub: `${sub(PERSON_IDS[3]!)} ${en(PERSON_IDS[3]!)}`,
        body: 'Se becomes s in front of est, and then nothing else shortens anywhere. Nous nous sommes is four words and every one of them is written out in full.',
      },
      {
        head: 'The two that are written twice',
        label: 'vous · ils',
        fr: pair(PERSON_IDS[4]!, PERSON_IDS[5]!),
        sub: `${sub(PERSON_IDS[4]!)} ${en(PERSON_IDS[4]!)}`,
        body: `Vous vous êtes looks like a slip and is not, exactly as it did in the present. The app publishes two hundred and nineteen sentences starting a verb with s'est, and not one of them is a verb you have been shown how to build.`,
      },
    ],
  },

  /* ══════════════════════════════════════════════════════════════════════════
   *  ACT 3. THE OWNS
   * ═══════════════════════════════════════════════════════════════════════ */

  /* THE ASSEMBLY, AGAINST THE CLOCK. The brief asks for a groupDrill here and it
   * is right: four rules composed under time pressure is what proves they are
   * internalised rather than looked up. Each group adds one position. */
  {
    id: ASSEMBLY_SECTION_ID,
    type: 'groupDrill',
    title: 'Build It, One Word At A Time',
    frSub: 'On construit la phrase',
    layer: 'core',
    size: 'lg',
    say: `${REFRAME} Three rounds. Say the person, then the little word, and the first word is decided before you get to it.`,
    terms: ['littleWord', 'firstWord', 'theEnding'],
    groups: [
      {
        label: 'the person, and then the little word',
        items: [card(A(802)), card(A(804))],
        check: {
          q: 'Je, and se laver. What comes next?',
          opts: ['me', 'ai', 'suis'],
          correct: 0,
          why: `The little word comes before the first word, always, and it has done since the present tense. Je takes me. « ${A222_REFRAME} »`,
        },
      },
      {
        label: 'and the little word decides the first word',
        items: [card(A(806)), card(A(795))],
        check: {
          q: 'Je me ___ levé. Which one?',
          opts: ['ai', 'suis', 'est'],
          correct: 1,
          why: `${THE_NEW_FACT} Lever on its own takes avoir and se lever takes être, and the small word in front is the only thing that changed.`,
        },
      },
      {
        label: 'and the second word finishes it',
        items: [card(A(792)), card(A(793))],
        check: {
          q: 'Elle s\'est lav___. What goes on the end?',
          opts: ['é', 'ée', 'és'],
          correct: 1,
          why: `${AGREEMENT_RULE} Elle is one woman, so e. And you will not hear it, which is why it has to be written.`,
        },
      },
    ],
  },

  /* THE ENDING, AND a2.21's RULE QUOTED VERBATIM. Five examples: the four cells
   * held still, and then the same woman with avoir, taking nothing. */
  {
    id: AGREEMENT_SECTION_ID,
    type: 'examples',
    title: 'Four Spellings Of One Word',
    frSub: 'Lavé, lavée, lavés, lavées',
    layer: 'core',
    say: `${AGREEMENT_RULE} Read the four together. Everything is held still except the person and the last two letters.`,
    terms: ['secondWord', 'theEnding', 'silent'],
    examples: [
      { fr: fr(CELL_IDS[0]!), en: en(CELL_IDS[0]!), note: `${sub(CELL_IDS[0]!)} A man on his own, so nothing goes on. This is the form the other three are built from.` },
      { fr: fr(CELL_IDS[1]!), en: en(CELL_IDS[1]!), note: `${sub(CELL_IDS[1]!)} One letter more, and not one sound more. That is the whole of this screen.` },
      { fr: fr(CELL_IDS[2]!), en: en(CELL_IDS[2]!), note: `${sub(CELL_IDS[2]!)} More than one, so s. The first word changed too, and only that change is audible.` },
      { fr: fr(CELL_IDS[3]!), en: en(CELL_IDS[3]!), note: `${sub(CELL_IDS[3]!)} Both endings at once, and it is the longest of the four to write and the same length to say.` },
      { fr: fr(AVOIR_PAIR[0]), en: en(AVOIR_PAIR[0]), note: `${sub(AVOIR_PAIR[0])} The same woman and the same verb, with the other first word. After avoir nothing goes on the end, in any person, ever. ${Cap(unitRef(ETRE_UNIT))} taught that and this lesson does not touch it.` },
    ],
  },

  /* THE EAR CANNOT HELP, AND a2.01's REFRAME IS QUOTED THROUGH a2.21. The brief
   * says to quote the same string rather than write a third version, and this is
   * the far end of a bookend a2.01 opened in the first lesson of the level. */
  {
    id: SILENT_SECTION_ID,
    type: 'listening',
    title: 'Nothing To Hear',
    frSub: 'Rien à entendre',
    layer: 'core',
    say: 'Four lines, and two of them are the same sound end to end. This is the only mission in the lesson where the right answer is that you heard nothing.',
    terms: ['silent', 'theEnding', 'secondWord'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], audioFirst: true, recordingId: 'rec-a2-23-silent' },
    lines: [
      { fr: fr(CELL_IDS[0]!), en: en(CELL_IDS[0]!) },
      { fr: fr(CELL_IDS[1]!), en: en(CELL_IDS[1]!) },
      { fr: fr(A(801)), en: en(A(801)) },
      { fr: fr(A(802)), en: en(A(802)) },
    ],
    questions: [
      {
        q: `${noStop(fr(CELL_IDS[0]!))} against ${noStop(fr(CELL_IDS[1]!))}. What did you hear?`,
        opts: ['A longer ending on the second one', 'Nothing at all', 'A different verb'],
        correct: 1,
        why: `« ${A201_REFRAME} » That is ${unitRef(ER_UNIT, 'a2')}'s line, and ${unitRef(ETRE_UNIT)} quoted it for exactly this. All four spellings are one sound.`,
      },
      {
        q: `${noStop(fr(A(801)))} against ${noStop(fr(A(802)))}. And here?`,
        opts: ['Nothing at all', 'A whole extra word in the second one', 'The ending of the verb'],
        correct: 1,
        why: 'The one thing in this lesson you can hear is the little word, and it is the thing that decides everything else. The ending is silent and the decision is not.',
      },
    ],
  },

  /* Doctrine §B.1: a mission that makes the learner produce a form from a verb
   * the lesson never showed them has taught the system. Four verbs, none of them
   * conjugated on any screen before this one. */
  {
    id: NEWVERBS_SECTION_ID,
    type: 'groupDrill',
    /* RETITLED IN v2. « Verbs You Were Never Shown » is 13.64 em against a 13.2
     * budget and clipped on a Pixel 6, at TWENTY-SIX characters — while « Build
     * It, One Word At A Time » fits at twenty-eight. The cut is a width. */
    title: 'Verbs You Never Saw',
    frSub: 'Des verbes nouveaux',
    layer: 'core',
    size: 'lg',
    say: 'Three rounds, and not one of these verbs was in the six. You are not remembering them. You are building them from two rules and a list you already had.',
    terms: ['firstWord', 'theEnding', 'littleWord'],
    groups: [
      {
        label: 'getting dressed, and hurrying',
        items: [card(A(816)), card(A(817))],
        check: {
          q: 'Nous, and se dépêcher. Which two words go in the middle?',
          opts: ['nous sommes', 'nous avons', 'se sont'],
          correct: 0,
          why: 'Nous takes nous, and the little word means être. Nothing about se dépêcher had to be learned separately, and nobody hurries themselves.',
        },
      },
      {
        label: 'resting, and showering',
        items: [card(A(818)), card(A(819))],
        check: {
          q: 'Ils se sont douch___. What goes on the end?',
          opts: ['é', 'és', 'ées'],
          correct: 1,
          why: `${AGREEMENT_RULE} Ils is more than one, so s, and you cannot hear any of it.`,
        },
      },
      {
        label: 'and one that comes from somewhere else',
        items: [card(A(829)), card(A(830))],
        check: {
          q: 'Se souvenir. Where does souvenue come from?',
          opts: ['From the ending on this screen', 'From venir, and its own group', 'It has no second word'],
          correct: 1,
          why: `« ${A220_REFRAME} » ${unitRef(IRREGULAR_UNIT)} put it in the group that ends in u. The ending still goes on it exactly the same way, which is the point of putting it here.`,
        },
      },
    ],
  },

  /* REQUIRED LAYOUT 2, AND THE LARGEST JUDGEMENT CALL IN BATCH 2.
   *
   * OPTION 1: the pattern is NAMED and the REASON is not. Corpus §6 measured
   * that three A2 cards already in the seed show a feminine subject with an
   * unagreed second word, so a lesson that taught « agree with the subject » and
   * stopped would make the learner read shipped cards as typos.
   *
   * No production surface names any of this, and `OBJECT_TERMS` is refused
   * EVERYWHERE rather than only on the production surfaces: the reason belongs
   * to a2.24 and this lesson does not own one word of it. */
  {
    id: OBJECT_SECTION_ID,
    type: 'cardDeck',
    title: 'When The Ending Goes Away',
    frSub: 'Elle s’est lavé les mains',
    layer: 'core',
    size: 'lg',
    render: 'deck',
    say: 'Three cards to read and nothing to do. These are sentences you will meet, and the point is that they are correct.',
    hint: 'Recognise these. You are not asked to build them.',
    terms: ['afterIt', 'theEnding', 'later'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a2-23-object' },
    cards: [
      {
        head: 'The same woman, twice',
        label: 'and one has no ending',
        fr: pair(OBJECT_PAIR[0]![0], OBJECT_PAIR[0]![1]),
        sub: `${sub(OBJECT_PAIR[0]![1])} ${en(OBJECT_PAIR[0]![1])}`,
        body: `The first has nothing after the second word and takes the ending. The second names her hands, and it does not. Both are correct.`,
      },
      {
        head: 'And it happens on the ones you know',
        label: 'se brosser les dents',
        fr: pair(OBJECT_PAIR[1]![0], OBJECT_PAIR[1]![1]),
        sub: `${sub(OBJECT_PAIR[1]![1])} ${en(OBJECT_PAIR[1]![1])}`,
        body: `${Cap(unitRef(ROUTINE_UNIT))} taught both of these as whole phrases, so they are the two you are most likely to want. When you write one, leave the ending off.`,
      },
      {
        head: 'This is already in the app',
        label: 'not a special case',
        fr: importedFr('fr.a2.corps.001'),
        sub: importedEn('fr.a2.corps.001'),
        body: `Written for a different lesson, by somebody who was not teaching this, and the second word carries no ending. ${Cap(unitRef(INDIRECT_OBJECT_UNIT))} is where the reason for it lives. Today it is enough to know it is not a mistake.`,
      },
    ],
  },

  /* THE REFRAME AT ITS STRONGEST. Three verbs where nothing about the meaning
   * would ever suggest être, and the little word does it anyway. */
  {
    id: NOMEANING_SECTION_ID,
    type: 'cardDeck',
    title: 'It Is Not About The Meaning',
    frSub: 'Ce n’est pas le sens',
    layer: 'core',
    size: 'lg',
    render: 'deck',
    say: 'Three cards on why the rule is about the small word and not about what the sentence is saying.',
    hint: 'Nobody hurries themselves, and it still takes être.',
    terms: ['littleWord', 'firstWord'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a2-23-nomeaning' },
    cards: [
      {
        head: 'Nobody hurries themselves',
        label: 'se dépêcher',
        fr: noStop(fr(A(817))),
        sub: `${sub(A(817))} ${en(A(817))}`,
        body: `${Cap(unitRef(REFLEXIVE_UNIT))} taught that some of these point at nothing at all. The action does not come back to anybody and the little word is obligatory anyway, and it still means être.`,
      },
      {
        head: 'And nothing here moves',
        label: 'se reposer',
        fr: noStop(fr(A(818))),
        sub: `${sub(A(818))} ${en(A(818))}`,
        body: `${Cap(unitRef(ETRE_UNIT))} gave you fifteen verbs that take être and twelve of them move. Resting is not one of them, and it does not need to be: the little word decided this before the meaning got a vote.`,
      },
      {
        head: 'The one that gives it away',
        label: 'laver · se laver',
        fr: pair(AVOIR_PAIR[0], AVOIR_PAIR[1]),
        sub: `${sub(AVOIR_PAIR[1])} ${en(AVOIR_PAIR[1])}`,
        body: 'Same woman, same verb, same washing. One takes avoir and one takes être, and the difference between them is two letters at the front of the verb.',
      },
    ],
  },

  /* WHAT THIS IS NOT. The present, the reason for the exception, and the other
   * past tense, all deferred by unit id so the next author knows what was left. */
  {
    id: LATER_SECTION_ID,
    type: 'cardDeck',
    title: 'Three Things This Is Not',
    frSub: 'Pas ici',
    layer: 'core',
    size: 'lg',
    render: 'deck',
    say: 'Three cards, none of which you have to do anything with today. They are here so meeting one does not look like an error.',
    hint: 'Read these. Nothing to build.',
    terms: ['onlyPast', 'later', 'afterIt'],
    cards: [
      {
        head: 'The present did none of this',
        label: `${Cap(unitRef(REFLEXIVE_UNIT))}`,
        fr: `${noStop(fr(A(833)))} · Elle se lave`,
        sub: 'past, then present',
        body: `${PRESENT_NO_AGREEMENT} That was true and it stops being true the moment there is a second word to put something on.`,
      },
      {
        head: 'Why the ending disappears',
        label: `${Cap(unitRef(DIRECT_OBJECT_UNIT))} · ${unitRef(INDIRECT_OBJECT_UNIT)}`,
        fr: noStop(fr(A(807))),
        sub: `${sub(A(807))} ${en(A(807))}`,
        body: OBJECT_DEFERRAL,
      },
      {
        head: 'And there is another past',
        label: 'not yet',
        fr: noStop(fr(A(795))),
        sub: `${sub(A(795))} ${en(A(795))}`,
        body: PAST_TENSE_DEFERRAL,
      },
    ],
  },

  /* ══════════════════════════════════════════════════════════════════════════
   *  ACT 4. The two decisions that go wrong
   * ═══════════════════════════════════════════════════════════════════════ */

  /* THE NEGATIVE. Three inherited lines quoted verbatim and one new sentence,
   * because a2.22's extension is true here and no longer sufficient: there are
   * three words now and only two of them go inside. Corpus §3. */
  {
    id: NEGATIVE_SECTION_ID,
    type: 'cardDeck',
    title: 'Where The Wrap Closes',
    frSub: 'Ne … pas',
    layer: 'core',
    size: 'lg',
    render: 'deck',
    say: `${NEGATION_RULE} Three cards, and the third one is what that rule does not by itself tell you.`,
    terms: ['theWrap', 'firstWord', 'secondWord'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a2-23-negative' },
    cards: [
      {
        head: 'Both halves, round the first two',
        label: 'the pair',
        fr: pair(A(802), A(810)),
        sub: `${sub(A(810))} ${en(A(810))}`,
        body: `Ne in front of me, pas straight after suis. ${NEGATION_EXTENSION} That is ${unitRef(REFLEXIVE_UNIT, 'a2')}'s sentence and it still holds.`,
      },
      {
        head: 'And the third word stays outside',
        label: 'what is new',
        fr: pair(A(812), A(813)),
        sub: `${sub(A(813))} ${en(A(813))}`,
        body: `${NEGATION_OUTSIDE} The ending goes on exactly as it would with no negative at all, because the wrap shut before it got there.`,
      },
      {
        head: 'And ne does not shorten here',
        label: `${Cap(unitRef(NEGATION_UNIT))} · ${unitRef(FUTUR_UNIT)} · ${unitRef(PASSE_UNIT)} · ${unitRef(ETRE_UNIT)}`,
        fr: pair(A(811), A(814)),
        sub: `${sub(A(811))} · ${sub(A(814))}`,
        body: `« ${A118_REFRAME} » is ${unitRef(NEGATION_UNIT, 'a2')}'s. « ${NEGATION_RULE} » is ${unitRef(FUTUR_UNIT, 'a2')}'s, quoted by ${unitRef(PASSE_UNIT, 'a2')}, ${unitRef(ETRE_UNIT, 'a2')} and ${unitRef(REFLEXIVE_UNIT)}. Five lessons, and neither has moved.`,
      },
    ],
  },

  /* THE TRAP, AND IT IS THE OWNS RATHER THAN THE NEGATIVE. The single most
   * likely real error is avoir on a verb carrying the little word, and it is the
   * error the scene ends on. The drill covers all three shapes: the first word,
   * the position of the little word, and where the wrap closes.
   *
   * Corrections §14.6: `lesson-contract.test.ts` requires every A2 trapDrill to
   * walk rule > cards > audio > drill, with swipe, an audio spec, a say and a
   * GATED drill step, and `size` comes OFF a stepped trapDrill. */
  {
    id: WRAP_SECTION_ID,
    type: 'trapDrill',
    title: 'Which First Word',
    frSub: 'Avoir ou être',
    layer: 'core',
    swipe: true,
    say: 'Four cards and then six to prove it. The first card is what four correct sentences in a row will produce if you let them.',
    terms: ['firstWord', 'littleWord', 'theWrap'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], wrongThenRight: true, recordingId: 'rec-a2-23-trap' },
    rule: {
      title: 'The little word decides, and nothing else does',
      body: `${THE_NEW_FACT} ${REFRAME} Not the meaning, not whether anybody moved, and not what the verb takes on its own.`,
    },
    steps: [
      { kind: 'rule', label: 'The rule', title: 'What Decides The First Word' },
      { kind: 'cards', label: 'Four cards', title: 'One Wrong, Three Right' },
      { kind: 'audio', label: 'Hear it', title: 'The Word That Changes' },
      { kind: 'drill', label: 'Prove it', title: 'Pick The First Word', gate: true },
    ],
    cards: [
      {
        fr: AVOIR_TRAP,
        ipa: '/ʒə me lə.ve/',
        promptLabel: 'reaching for the one that just worked gives',
        promptSound: AVOIR_TRAP,
        tip: 'The verb takes avoir on its own, so avoir is what comes to hand. It is a careful learner\'s error rather than a careless one, and it is the sentence the café scene ended on.',
      },
      {
        fr: fr(A(795)),
        ipa: ipaOf(A(795)),
        promptLabel: 'and the little word means the other one',
        promptSound: fr(A(795)),
        tip: 'Two little words in front of the verb, and the first of them settled the second. Nothing else in the sentence had a say.',
      },
      {
        fr: fr(A(802)),
        ipa: ipaOf(A(802)),
        promptLabel: 'same verb, same person, no little word missing',
        promptSound: fr(A(802)),
        tip: 'Laver takes avoir and se laver takes être, and the two sentences are four letters apart.',
      },
      {
        fr: fr(A(801)),
        ipa: ipaOf(A(801)),
        promptLabel: 'and with no little word at all',
        promptSound: fr(A(801)),
        tip: 'Nothing between the person and the verb, so avoir, and the sentence names what was washed. This is the one the learner already had right.',
      },
    ],
    drill: [
      { opts: [fr(A(795)), AVOIR_TRAP], correct: 0, promptSay: fr(A(795)) },
      { opts: [POSITION_TRAP, fr(A(802))], correct: 1, promptSay: fr(A(802)) },
      { opts: [fr(A(801)), "J'ai me lavé la voiture."], correct: 0, promptSay: fr(A(801)) },
      { opts: [WRAP_TRAP, fr(A(810))], correct: 1, promptSay: fr(A(810)) },
      { opts: [fr(A(804)), "Je m'ai couché."], correct: 0, promptSay: fr(A(804)) },
      { opts: ["Elle s'a levée.", fr(A(833))], correct: 1, promptSay: fr(A(833)) },
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
    terms: ['firstWord', 'theWrap', 'theEnding'],
    errors: [
      {
        wrong: AVOIR_TRAP,
        right: fr(A(795)).replace(' tôt', ''),
        why: 'avoir on a verb carrying the little word. It comes from having just said « j\'ai levé la main » correctly, and it is the error this whole lesson exists to prevent.',
      },
      {
        wrong: POSITION_TRAP,
        right: fr(A(802)),
        why: 'The right first word and the little word behind it. It goes in front, never after, and that has been true since the present tense.',
      },
      {
        wrong: "Elle s'est levé.",
        right: fr(A(833)),
        why: `The first word right and no ending. Nobody hears it and every reader sees it. ${AGREEMENT_RULE}`,
      },
      {
        wrong: WRAP_TRAP,
        right: fr(A(810)),
        why: `The wrap closed round the second word instead of the first. ${NEGATION_OUTSIDE}`,
      },
    ],
  },

  /* ══════════════════════════════════════════════════════════════════════════
   *  ACT 5. Your own morning, in the past
   * ═══════════════════════════════════════════════════════════════════════ */

  {
    id: FLASH_SECTION_ID,
    type: 'flashcards',
    title: 'The Verbs, Banked',
    frSub: 'Les verbes',
    layer: 'core',
    say: 'Ten verbs, and every one of them takes être in the past because every one of them arrives with the little word attached.',
    terms: ['littleWord', 'firstWord'],
    cards: [
      'fr.a1.routines.028', 'fr.a1.routines.001', 'fr.a1.routines.020',
      'fr.a1.routines.010', 'fr.a1.routines.011', 'fr.a1.routines.012',
      'fr.a1.routines.034', 'fr.a1.routines.087', 'fr.a1.routines.019',
      'fr.a1.cuisine.183',
    ].map((id) => ({
      front: importedFr(id),
      back: rowCard(id).sub,
      say: importedFr(id),
    })),
  },

  /* THE HEAVIEST PRODUCTION SECTION, AND THE BRIEF IS RIGHT ABOUT WHY. The
   * ending is inaudible, so writing it is the only proof. Thirteen lines, and
   * every one of them is in LETTERS mode through the real `dicteeMode`. */
  {
    id: DICTATION_SECTION_ID,
    type: 'dictation',
    title: 'Write What You Cannot Hear',
    frSub: 'La dictée',
    layer: 'core',
    say: 'Thirteen lines, and this is the longest part of the lesson on purpose. The ending is silent, so writing it down is the only way anybody can tell whether you know it.',
    terms: ['theEnding', 'silent', 'secondWord'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], maxPlays: 3, recordingId: 'rec-a2-23-dictee' },
    itemIds: [
      A(791), A(792), A(793),
      A(802), A(804), A(806),
      A(811), A(812),
      A(816), A(819),
      A(831), A(832), A(833),
    ],
  },

  {
    id: TALK_SECTION_ID,
    type: 'scenario',
    title: 'Tell Her About This Morning',
    frSub: 'On raconte sa matinée',
    layer: 'core',
    terms: ['littleWord', 'firstWord', 'theEnding'],
    setting: 'The same café, the same question, and this time the sentence gets finished. Every answer is about a morning that has already happened.',
    turns: [
      {
        ai: 'Alors, ce matin ? Tu t\'es réveillé à quelle heure ?',
        en: 'So, this morning? What time did you wake up?',
        user: fr(A(824)),
        userEn: en(A(824)),
        alts: [
          { fr: fr(A(821)), en: en(A(821)) },
          { fr: fr(A(795)), en: en(A(795)) },
        ],
      },
      {
        ai: 'Et ensuite ?',
        en: 'And then?',
        user: fr(A(825)),
        userEn: en(A(825)),
        alts: [
          { fr: fr(A(802)), en: en(A(802)) },
          { fr: fr(A(806)), en: en(A(806)) },
        ],
      },
      {
        ai: 'Ta famille aussi ?',
        en: 'Your family too?',
        user: fr(A(826)),
        userEn: en(A(826)),
        alts: [
          { fr: fr(A(818)), en: en(A(818)) },
          { fr: fr(A(816)), en: en(A(816)) },
        ],
      },
      {
        ai: 'Tu t\'es couché tard hier ?',
        en: 'Did you go to bed late yesterday?',
        user: fr(A(827)),
        userEn: en(A(827)),
        alts: [
          { fr: fr(A(804)), en: en(A(804)) },
          { fr: fr(A(810)), en: en(A(810)) },
        ],
      },
      {
        ai: 'Et tes collègues, ils sont arrivés à l\'heure ?',
        en: 'And your colleagues, did they arrive on time?',
        user: fr(A(828)),
        userEn: en(A(828)),
        alts: [
          { fr: fr(A(819)), en: en(A(819)) },
          { fr: fr(A(800)), en: en(A(800)) },
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
    terms: ['littleWord', 'firstWord'],
    itemIds: [
      A(791), A(792), A(793), A(794),
      A(795), A(796), A(797), A(798), A(799), A(800),
      A(801), A(802), A(803), A(804), A(805), A(806),
      A(810), A(811), A(812), A(813), A(814), A(815),
      A(816), A(817), A(818), A(819),
      A(829), A(830), A(831), A(832), A(833),
    ],
  },

  /* ══════════════════════════════════════════════════════════════════════════
   *  ACT 6. Prove it
   * ═══════════════════════════════════════════════════════════════════════ */

  {
    id: REVIEW_SECTION_ID,
    type: 'reviewDeck',
    title: 'Everything, Once More',
    frSub: 'Tout, encore une fois',
    layer: 'core',
    cards: [
      {
        front: 'Laver takes avoir. What does se laver take?',
        back: REFRAME,
        say: pair(A(801), A(802)),
      },
      {
        front: 'Je, se lever, in the past. What are the first three words?',
        back: `Je me suis. The person, then the little word, then the first word, and the little word is what settled the first one. ${THE_NEW_FACT}`,
        say: fr(A(795)),
      },
      {
        front: 'Elle. What goes on the end of the second word?',
        back: AGREEMENT_RULE,
        say: fr(A(833)),
      },
      {
        front: 'Can you hear the ending?',
        back: EAR_CLAIM,
        say: pair(CELL_IDS[0]!, CELL_IDS[1]!),
      },
      {
        front: 'Where do ne and pas go?',
        back: `${NEGATION_EXTENSION} ${NEGATION_OUTSIDE}`,
        say: fr(A(810)),
      },
      {
        front: 'Elle s\'est lavé les mains. Why is there no e on it?',
        back: OBJECT_CLAIM,
        say: fr(A(807)),
      },
      {
        front: 'Se dépêcher. Nobody hurries themselves, so which first word?',
        back: 'Être, because the little word is there. The meaning gets no vote and neither does whether anybody moved.',
        say: fr(A(817)),
      },
    ],
  },

  {
    id: PROGRESS_SECTION_ID,
    type: 'progressCheck',
    title: 'Where You Stand',
    frSub: 'Où vous en êtes',
    layer: 'core',
    body: 'The exam has six rounds and most of it is typed, because this is one of the few things in the level that writing can prove and listening cannot.',
    stats: [
      { k: 'New rules', v: '1. The little word decides the first word.' },
      { k: 'Rules you already had', v: `4, from ${unitRef(REFLEXIVE_UNIT)}, ${unitRef(ETRE_UNIT)}, ${unitRef(PASSE_UNIT)} and ${unitRef(IRREGULAR_UNIT)}.` },
      { k: 'Endings', v: '4 spellings, 1 sound. You will not hear any of them.' },
      { k: 'Verbs you were shown', v: '2, and the last act asked for four you were not.' },
    ],
  },

  {
    id: QUIZ_SECTION_ID,
    type: 'quiz',
    title: 'The Exam',
    frSub: 'L’examen',
    layer: 'core',
    say: 'Six rounds of five. Most of it is typed, because the whole claim of this lesson is that you can build the form rather than recognise it.',
    terms: ['firstWord', 'theEnding', 'theWrap'],
    passMark: 70,
    roundFailThreshold: 60,
    rounds: [
      {
        id: 'r1-first-word',
        label: 'Which first word',
        say: 'Five on the one decision in the sentence.',
        targets: ['err-avoir-aux', 'err-no-ending'],
        questions: [
          {
            format: 'typeIn',
            q: 'Je me ___ levé. Type the missing word.',
            accept: ['suis'],
            ref: FLIP_SECTION_ID,
            why: `${THE_NEW_FACT} The little word is in front of it, so it is être, and je takes suis.`,
          },
          {
            format: 'mcq',
            q: 'Which one is right?',
            opts: ["Je m'ai lavé.", "J'ai me lavé.", fr(A(802)), 'Je suis me lavé.'],
            correct: 2,
            ref: SLOTS_SECTION_ID,
            why: 'The little word first, then the first word, and the first word is être because the little word is there.',
          },
          {
            format: 'typeIn',
            q: `Put this into the past: « Je lave la voiture. » Type the whole sentence.`,
            accept: [fr(A(801))],
            ref: FLIP_SECTION_ID,
            why: 'No little word, so avoir, and nothing goes on the end after avoir. This is the sentence the other one is so easy to confuse with.',
          },
          {
            format: 'errorSpot',
            q: `Fix the first word: « ${AVOIR_TRAP} »`,
            accept: [fr(A(795)).replace(' tôt', '')],
            ref: WRAP_SECTION_ID,
            why: `Lever on its own takes avoir and se lever takes être. ${THE_NEW_FACT}`,
          },
          {
            format: 'listenChoose',
            q: 'Which one did you hear?',
            opts: [fr(A(801)), fr(A(802))],
            correct: 1,
            ref: SILENT_SECTION_ID,
            why: 'A whole extra word, and it is the only thing in this lesson listening will settle for you. The endings are all one sound.',
          },
        ],
      },
      {
        id: 'r2-assemble',
        label: 'Build the whole thing',
        say: 'Five that ask for every part at once.',
        targets: ['err-avoir-aux', 'err-wrap-late'],
        questions: [
          {
            format: 'typeIn',
            q: 'Type the French for: I got up early. Use se lever.',
            accept: [fr(A(795))],
            ref: ASSEMBLY_SECTION_ID,
            why: 'Person, little word, first word, second word, and then the time. Four decisions and you had three of them before this lesson.',
          },
          {
            format: 'typeIn',
            q: 'Type the French for: I went to bed. Use se coucher.',
            accept: [fr(A(804))],
            ref: ASSEMBLY_SECTION_ID,
            why: 'Coucher on its own takes avoir and se coucher takes être, and nothing about going to bed rather than putting somebody to bed tells you that.',
          },
          {
            format: 'typeIn',
            q: 'Type the French for: he showered. Use se doucher.',
            accept: [fr(A(832))],
            ref: NEWVERBS_SECTION_ID,
            why: 'Il takes se, se becomes s in front of est, and a man on his own gets nothing on the end.',
          },
          {
            format: 'mcq',
            q: `Which of these is not French?`,
            opts: [fr(A(802)), fr(A(804)), POSITION_TRAP, fr(A(806))],
            correct: 2,
            ref: SLOTS_SECTION_ID,
            why: 'The little word goes in front of the first word. It has never gone behind it, in any tense.',
          },
          {
            format: 'errorSpot',
            q: `Fix the word order: « ${POSITION_TRAP} »`,
            accept: [fr(A(802))],
            ref: SLOTS_SECTION_ID,
            why: 'Person, little word, first word. The little word has been in that position since the present tense and the past does not move it.',
          },
        ],
      },
      {
        id: 'r3-ending',
        label: 'The ending',
        say: 'Five on the two letters nobody can hear.',
        targets: ['err-no-ending'],
        questions: [
          {
            format: 'typeIn',
            q: 'Type the French for: she got up. Use se lever.',
            accept: [fr(A(833))],
            ref: AGREEMENT_SECTION_ID,
            why: `${AGREEMENT_RULE} One woman, so e, and it makes no sound at all.`,
          },
          {
            format: 'typeIn',
            q: 'Type the French for: they washed. They are all men. Use se laver.',
            accept: [fr(A(793))],
            ref: AGREEMENT_SECTION_ID,
            why: 'More than one, so s. The first word changed too, and that is the only part anybody will hear.',
          },
          {
            format: 'mcq',
            q: 'Elles se sont lav___. Which ending?',
            opts: ['ées', 'é', 'ée', 'és'],
            correct: 0,
            ref: AGREEMENT_SECTION_ID,
            why: `${AGREEMENT_RULE} More than one woman, so both letters go on.`,
          },
          {
            format: 'errorSpot',
            q: `Fix the ending: « Elle s'est levé. »`,
            accept: [fr(A(833))],
            ref: AGREEMENT_SECTION_ID,
            why: 'The first word is right and the ending is missing. This is the error nobody can hear and everybody who reads it can see.',
          },
          {
            format: 'mcq',
            q: `« ${noStop(fr(AVOIR_PAIR[0]))} ». Why is there no ending here?`,
            opts: [
              'Because the subject is singular',
              'Because it is not in the past',
              'Because the first word is avoir',
              'Because the verb is laver',
            ],
            correct: 2,
            ref: AGREEMENT_SECTION_ID,
            why: `After avoir the second word never changes, in any person. ${Cap(unitRef(ETRE_UNIT))} taught that and this lesson does not touch it.`,
          },
        ],
      },
      {
        id: 'r4-wrap',
        label: 'Saying no',
        say: 'Five on where the two halves land.',
        targets: ['err-wrap-late', 'err-avoir-aux'],
        questions: [
          {
            format: 'typeIn',
            q: 'Make it negative: « Je me suis levé. »',
            accept: [fr(A(810))],
            ref: NEGATIVE_SECTION_ID,
            why: `Ne in front of the little word, pas straight after the first word. ${NEGATION_EXTENSION}`,
          },
          {
            format: 'errorSpot',
            q: `Fix the word order: « ${WRAP_TRAP} »`,
            accept: [fr(A(810))],
            ref: NEGATIVE_SECTION_ID,
            why: NEGATION_OUTSIDE,
          },
          {
            format: 'typeIn',
            q: 'Make it negative: « Il s\'est levé. »',
            accept: [fr(A(812))],
            ref: NEGATIVE_SECTION_ID,
            why: 'The little word still shortens in front of est, and the ne in front of it does not. Nothing about the negative changes that.',
          },
          {
            format: 'mcq',
            q: 'Which line is the rule these five lessons share?',
            opts: [
              'Put ne and pas round the whole sentence.',
              'Put ne and pas round the word that carries the meaning.',
              'Negatives go at the end.',
              NEGATION_RULE,
            ],
            correct: 3,
            ref: NEGATIVE_SECTION_ID,
            why: `${Cap(unitRef(FUTUR_UNIT))} said it, ${unitRef(PASSE_UNIT)} quoted it, ${unitRef(ETRE_UNIT)} quoted it and ${unitRef(REFLEXIVE_UNIT)} quoted it. It has not been reworded once.`,
          },
          {
            format: 'mcq',
            q: `« ${noStop(fr(A(813)))} ». Where is the ending in relation to the wrap?`,
            opts: ['Inside it', 'Outside it', 'There is no ending', 'Between ne and pas'],
            correct: 1,
            ref: NEGATIVE_SECTION_ID,
            why: NEGATION_OUTSIDE,
          },
        ],
      },
      {
        id: 'r5-build',
        label: 'Verbs you were not shown',
        say: 'Five on verbs the lesson never conjugated for you.',
        targets: ['err-avoir-aux', 'err-no-ending'],
        questions: [
          {
            format: 'typeIn',
            q: 'Type the French for: she got dressed. Use s\'habiller.',
            accept: [fr(A(816))],
            ref: NEWVERBS_SECTION_ID,
            why: 'Elle takes se, se becomes s in front of est, and one woman takes e. Three rules and none of them is about this verb.',
          },
          {
            format: 'typeIn',
            q: 'Type the French for: they showered. They are all men. Use se doucher.',
            accept: [fr(A(819))],
            ref: NEWVERBS_SECTION_ID,
            why: 'Nothing about se doucher had to be learned separately. The little word means être and more than one means s.',
          },
          {
            format: 'mcq',
            q: 'Nobody hurries themselves. So which first word does se dépêcher take?',
            opts: ['avoir, because nobody moves', 'Either one', 'avoir, because the meaning is not reflexive', 'être, because the little word is there'],
            correct: 3,
            ref: NOMEANING_SECTION_ID,
            why: `The meaning gets no vote. ${THE_NEW_FACT}`,
          },
          {
            format: 'mcq',
            q: `« ${noStop(fr(A(830)))} ». Where does souvenue come from?`,
            opts: [
              'The ending this lesson teaches',
              `venir, and the group ${unitRef(IRREGULAR_UNIT)} put it in`,
              'It is not a real form',
              'se souvenir has no second word',
            ],
            correct: 1,
            ref: NEWVERBS_SECTION_ID,
            why: `« ${A220_REFRAME} » The second word comes from its own group and the ending goes on it exactly the same way.`,
          },
          {
            format: 'typeIn',
            q: 'Type the French for: you rested. Speaking to more than one person. Use se reposer.',
            accept: [fr(A(818))],
            ref: NEWVERBS_SECTION_ID,
            why: 'Vous takes vous, which is written twice, and more than one takes s.',
          },
        ],
      },
      {
        id: 'r6-mixed',
        label: 'All of it',
        say: 'Five that could be any of the above.',
        targets: ['err-no-ending', 'err-avoir-aux'],
        questions: [
          {
            format: 'typeIn',
            q: 'Type the French for: he washed. Use se laver.',
            accept: [fr(A(791))],
            ref: AGREEMENT_SECTION_ID,
            why: 'Il, se, est, and nothing on the end. The shortest full sentence this lesson can ask for.',
          },
          {
            format: 'errorSpot',
            q: `Fix the first word: « Je m'ai couché. »`,
            accept: [fr(A(804))],
            ref: WRAP_SECTION_ID,
            why: 'Coucher takes avoir and se coucher takes être, and the little word in front is the whole of the difference.',
          },
          {
            format: 'mcq',
            q: `« ${noStop(fr(A(807)))} ». Is this correct French?`,
            opts: [
              'No, it needs an e on the end',
              'No, it needs avoir',
              'Yes, and the ending is missing on purpose',
              'Yes, but only if she is a man',
            ],
            correct: 2,
            ref: OBJECT_SECTION_ID,
            why: OBJECT_CLAIM,
          },
          {
            format: 'typeIn',
            q: 'Type the French for: you went to bed late. Speaking to one friend. Use se coucher.',
            accept: [fr(A(831))],
            ref: ASSEMBLY_SECTION_ID,
            why: 'Tu takes te, te becomes t in front of es, and nothing goes on the end for one man.',
          },
          {
            format: 'listenChoose',
            q: 'Which one did you hear?',
            opts: [fr(A(803)), fr(A(804))],
            correct: 1,
            ref: SILENT_SECTION_ID,
            why: 'Two little words against none, which you can hear. If this question had asked between two endings there would have been no right answer at all.',
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
      THE_NEW_FACT,
      'Person, little word, first word, second word. Six positions with a negative, and you had met all six before today.',
      AGREEMENT_RULE,
      EAR_CLAIM,
      `${NEGATION_EXTENSION} ${NEGATION_OUTSIDE}`,
      `${OBJECT_CLAIM} ${Cap(unitRef(INDIRECT_OBJECT_UNIT))} is where the reason for it lives.`,
      `Any verb that arrives with the little word works this way, so the four the lesson never conjugated cost nothing extra. ${PAST_TENSE_DEFERRAL}`,
    ],
    sheetId: SHEET_ID,
  },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  ACTS
 * ═══════════════════════════════════════════════════════════════════════ */

const ACTS: LessonAct[] = [
  {
    id: 'act1',
    title: 'Four seconds apart',
    sections: [SCENE_SECTION_ID, FLIP_SECTION_ID, GOALS_SECTION_ID, RECAP_SECTION_ID],
    milestone: 'You know that the small word in front of the verb is what decides which first word comes next.',
    estScreens: 34,
    /* `density.logic.ts` caps an unbroken stretch at 22 screens. Every act over
     * that carries a rest point, placed where the teaching changes rather than
     * at the arithmetic midpoint. */
    restPoints: [`${FLIP_SECTION_ID}/after-the-pairs`],
  },
  {
    id: 'act2',
    title: 'Where everything lands',
    sections: PARADIGM_SECTION_IDS,
    milestone: 'Six positions in one order, and the six people who fill them.',
    estScreens: 18,
  },
  {
    id: 'act3',
    title: 'The little word decides',
    sections: OWNS_SECTION_IDS,
    milestone: 'You can build the whole form, for a verb the lesson never showed you, and put the ending on in writing.',
    estScreens: 72,
    restPoints: [
      `${ASSEMBLY_SECTION_ID}/after-the-build`,
      `${SILENT_SECTION_ID}/after-the-listening`,
      `${OBJECT_SECTION_ID}/after-the-exception`,
    ],
  },
  {
    id: 'act4',
    title: 'The two that go wrong',
    sections: [NEGATIVE_SECTION_ID, WRAP_SECTION_ID, ERRORS_SECTION_ID],
    milestone: 'One negation rule, five lessons long, and one sentence added to it.',
    estScreens: 35,
    restPoints: [`${WRAP_SECTION_ID}/after-the-trap`],
  },
  {
    id: 'act5',
    title: 'Your own morning, in the past',
    sections: [FLASH_SECTION_ID, DICTATION_SECTION_ID, TALK_SECTION_ID, SPEAK_SECTION_ID],
    milestone: 'You have written thirteen of them down, which is the only place the ending is real.',
    estScreens: 44,
    restPoints: [`${DICTATION_SECTION_ID}/after-the-dictee`],
  },
  {
    id: 'act6',
    title: 'Prove it',
    sections: [REVIEW_SECTION_ID, PROGRESS_SECTION_ID, QUIZ_SECTION_ID, ROUNDUP_SECTION_ID],
    milestone: 'Thirty questions, and most of them asked you to build the whole sentence rather than pick it out of four.',
    estScreens: 20,
  },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  ERROR TRIGGERS AND DRILLS
 *
 *  Invariants §4: each round names `targets`, and `drillForRound` fires the
 *  drill of the FIRST resolving target only, then stops. A drill named in
 *  second place is dead content. err-avoir-aux leads r1, r2 and r5;
 *  err-no-ending leads r3 and r6; err-wrap-late leads r4. Three drills, six
 *  rounds, and every drill fires.
 * ═══════════════════════════════════════════════════════════════════════ */

const ERROR_TRIGGERS: ErrorTrigger[] = [
  {
    id: 'err-avoir-aux',
    description: 'Reaches for avoir on a verb carrying the little word, because the plain verb takes avoir and it worked a sentence ago. « Je m\'ai levé. » It is the error the opening scene ends on and the single most likely real one in the lesson.',
    detectOn: [FLIP_SECTION_ID, ASSEMBLY_SECTION_ID, WRAP_SECTION_ID, QUIZ_SECTION_ID],
    drill: 'drill-first-word',
    retest: 'retest-first-word',
  },
  {
    id: 'err-no-ending',
    description: 'Leaves the second word bare whatever the subject is, because nothing about the sound ever asked for anything. « Elle s\'est levé. »',
    detectOn: [AGREEMENT_SECTION_ID, SILENT_SECTION_ID, DICTATION_SECTION_ID, QUIZ_SECTION_ID],
    drill: 'drill-ending',
    retest: 'retest-ending',
  },
  {
    id: 'err-wrap-late',
    description: `Closes the wrap after the second word rather than after the first. « Je ne me suis levé pas. » ${unitRef('a2.22')}\'s extension is true here and does not by itself say where pas stops.`,
    detectOn: [NEGATIVE_SECTION_ID, WRAP_SECTION_ID, QUIZ_SECTION_ID],
    drill: 'drill-wrap',
    retest: 'retest-wrap',
  },
];

const DRILLS: LessonDrill[] = [
  {
    id: 'drill-first-word',
    title: 'Little word, then first word',
    format: 'sort',
    buckets: ['a little word, so être', 'no little word, so avoir'],
    items: [A(802), A(801), A(804), A(803), A(806), A(805)],
    coach: `Look at what is between the person and the verb before you reach for anything. ${THE_NEW_FACT} The verb on its own tells you nothing, and neither does the meaning.`,
  },
  {
    id: 'retest-first-word',
    title: 'One more',
    format: 'mcq',
    q: 'Je me ___ couché. Which one?',
    opts: ['suis', 'ai', 'est'],
    correct: 0,
    why: `${THE_NEW_FACT} Coucher takes avoir on its own and se coucher takes être.`,
  },
  {
    id: 'drill-ending',
    title: 'Four spellings, one sound',
    format: 'flashcard',
    pairs: [[fr(CELL_IDS[0]!), fr(CELL_IDS[1]!)], [fr(CELL_IDS[2]!), fr(CELL_IDS[3]!)], [fr(A(832)), fr(A(816))]],
    coach: `Each pair is one sound and two spellings. ${AGREEMENT_RULE} ${EAR_CLAIM}`,
  },
  {
    id: 'retest-ending',
    title: 'One more',
    format: 'mcq',
    q: 'Elle s\'est habill___. Which ending?',
    opts: ['ée', 'é', 'és'],
    correct: 0,
    why: 'One woman, so e, and nothing about the sound will ever tell you.',
  },
  {
    id: 'drill-wrap',
    title: 'Where pas stops',
    format: 'flashcard',
    pairs: [[fr(A(802)), fr(A(810))], [fr(A(812)), fr(A(797))], [fr(A(833)), fr(A(813))]],
    coach: `${NEGATION_RULE} ${NEGATION_EXTENSION} ${NEGATION_OUTSIDE}`,
  },
  {
    id: 'retest-wrap',
    title: 'One more',
    format: 'mcq',
    q: 'Make « Je me suis levé. » negative.',
    opts: [fr(A(810)), WRAP_TRAP, 'Ne je me suis pas levé.'],
    correct: 0,
    why: NEGATION_OUTSIDE,
  },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  THE REFERENCE SHEET
 *
 *  Corrections §8: a `sheetId` resolves ONLY inside the lesson that declares it,
 *  and `ReferenceSheet.tsx` draws `teach`, `letterGrid` and `table` and nothing
 *  else — a `cheatSheet` inside one draws its title and no content.
 *
 *  This is where the second `table` lives, because `layer: 'deep'` is the only
 *  place a real one is allowed. The in-flow version is `s05-slots`, a
 *  three-column tapTable with the same six rows.
 * ═══════════════════════════════════════════════════════════════════════ */

const SHEETS: ReferenceSheet[] = [
  {
    id: SHEET_ID,
    layer: 'deep',
    title: 'The past of the little word',
    contains: ['The rule', 'The order', 'The endings', 'Saying no', 'Next'],
    sections: [
      {
        id: 'sheet-rule',
        type: 'teach',
        layer: 'deep',
        title: 'The rule, in one line',
        body: `${REFRAME} ${THE_NEW_FACT} Laver takes avoir and se laver takes être; coucher takes avoir and se coucher takes être. The verb does not decide it, the meaning does not decide it, and whether anybody moved does not decide it.`,
      },
      {
        /* THE SECOND `table`, and it is here rather than in the flow because
         * `density.logic.ts:423` fails a table at layer core and a sheet section
         * is exempt. Six rows, the same six as s05-slots. */
        id: 'sheet-order',
        type: 'table',
        layer: 'deep',
        title: 'Six places, one order',
        cols: ['where', 'the word', 'what it is doing'],
        rows: SLOTS.map((s) => [s.pos, s.word, s.job]),
      },
      {
        id: 'sheet-endings',
        type: 'teach',
        layer: 'deep',
        title: 'The four endings',
        body: `${AGREEMENT_RULE} ${EAR_CLAIM} And after avoir nothing goes on at all, in any person, which is ${unitRef(ETRE_UNIT, 'a2')}'s rule and has not changed. ${OBJECT_CLAIM}`,
      },
      {
        id: 'sheet-negative',
        type: 'teach',
        layer: 'deep',
        title: 'Saying no',
        body: `${NEGATION_RULE} ${NEGATION_EXTENSION} ${NEGATION_OUTSIDE} ${noStop(fr(A(802)))} becomes ${noStop(fr(A(810)))}. And ne never shortens here, in any person, because every form of the little word starts on a consonant.`,
      },
      {
        id: 'sheet-next',
        type: 'teach',
        layer: 'deep',
        title: 'What is not here',
        body: `${OBJECT_DEFERRAL} ${PAST_TENSE_DEFERRAL}`,
      },
    ],
  },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  DECK TRANCHES
 *
 *  Every item released exactly once, nothing untaught, and no tranche releasing
 *  an item the acts before it have not shown. ONE SLICE PER ACT is a schema
 *  requirement, not a preference: `validateLesson` fails a lesson whose tranche
 *  count and act count disagree.
 * ═══════════════════════════════════════════════════════════════════════ */

const DECK_TRANCHE: string[][] = [
  // After act 1: the scene, the flip pairs, and the four owned rules.
  [
    A(820), A(821), A(822), A(823),
    A(801), A(802), A(803), A(804), A(805), A(806),
    A(830),
    'fr.a1.rp-recits-temps.066', 'fr.a2.routines.049',
    'fr.sons.verbes-essentiels.001', 'fr.sons.verbes-essentiels.002',
  ],
  // After act 2: the slot sentence and the six persons.
  [A(810), A(795), A(796), A(797), A(798), A(799), A(800), 'fr.a2.routines.032'],
  // After act 3: the four cells, the exception, and the verbs never conjugated.
  [
    A(791), A(792), A(793), A(794), A(809),
    A(807), A(808), A(816), A(817), A(818), A(819), A(829), A(833),
    'fr.a1.routines.028', 'fr.a1.routines.001', 'fr.a1.cuisine.183',
    'fr.a2.corps.001', 'fr.a1.corps.209', 'fr.a1.routines.019',
  ],
  // After act 4: the rest of the negatives.
  [A(811), A(812), A(813), A(814), A(815)],
  // After act 5: the conversation, and the rest of a1.25's vocabulary.
  [
    A(824), A(825), A(826), A(827), A(828), A(831), A(832),
    'fr.a1.routines.010', 'fr.a1.routines.011', 'fr.a1.routines.012',
    'fr.a1.routines.020', 'fr.a1.routines.034', 'fr.a1.routines.087',
  ],
  // After act 6: the published agreements the roundup and the exam lean on.
  ['fr.a1.rp-recits-temps.180', 'fr.a1.rp-recits-temps.199', 'fr.a2.routines.039'],
];

/** `Lesson.itemIds` is the union of the tranches, in release order. A tranche is
 *  how an item is RELEASED and `itemIds` is what the lesson OWNS, so an id in
 *  one and not the other is either a dead corpus entry or an item released
 *  without ever being taught. Derived rather than retyped. */
const ITEM_IDS: string[] = [...new Set(DECK_TRANCHE.flat())];

/* ══════════════════════════════════════════════════════════════════════════
 *  THE LESSON
 * ═══════════════════════════════════════════════════════════════════════ */

export const LESSON: Lesson = {
  id: LESSON_ID,
  unitId: UNIT.id,
  /** The lesson's own sequence WITHIN the unit, not the unit's seq on the
   *  trail. This is the first and only lesson of a2.23, so 1. */
  seq: 1,
  title: UNIT.sub,
  tag: `A2 · LEÇON ${String(UNIT.seq).padStart(2, '0')}`,
  level: 'a2',
  /** v1 was the first build. v2 REPAIRS TWO DEFECTS FOUND ON A PIXEL 6 AND
   *  NOWHERE ELSE, both of them layout and both invisible to every host gate:
   *
   *  1. `s05-slots` SPANNED TWO SCREENS. The unit-id credits were inside the
   *     table cells, so the third column wrapped to four, five and six lines
   *     and the six-row diagram would not fit one screen. The brief's whole
   *     requirement is that the six positions are read down the page as one
   *     sentence. Every layer asserted the six rows, the six words and the six
   *     jobs, and every one of those was true: HEIGHT IS INVISIBLE TO ALL OF
   *     THEM. The credits moved to the row's `detail` body and the cells are
   *     now bounded by `SLOT_CELL_MAX`.
   *  2. TWO MISSION TITLES CLIPPED. « You Already Have Four Of The Five » and
   *     « Verbs You Were Never Shown ». a2.13 recorded 27 and a2.14 §13
   *     corrected it to a WIDTH; this build carried the number as a character
   *     count, asserted it nowhere, and shipped a 26-character title that
   *     clipped beside a 28-character one that did not. Now a real em budget
   *     with the three measured cases walked as calibration.
   *
   *  THE COUNTER MOVES RATHER THAN THE BODY BEING CORRECTED UNDER v1. Ledger
   *  §10: two different bodies under one number is the drift this project has
   *  lost work to twice. a2.09 set the precedent, a2.20 followed it twice and
   *  a2.22 did the same thing for the same reason one lesson ago. */
  version: 3,

  intro:
    `You can already say what you did yesterday, and you can already say what you do every morning with a small word in front of the verb. Putting those two together needs one fact and it is not the one people expect: the small word decides which of the two past helpers you reach for. Laver takes avoir and se laver takes être, and nothing about the meaning or the movement has a say in it. This is that fact, the order the words go in, and the ending that nobody can hear.`,

  grammarAssumed: [
    'The passé composé as an auxiliary plus a past participle, introduced in a2.05',
    'The irregular past participle groups, introduced in a2.20',
    'Être as the auxiliary for a closed class of intransitive verbs, and participle agreement with the subject, introduced in a2.21',
    'The reflexive clitic paradigm in all six persons, and its preverbal position, introduced in a2.22',
    'That the clitic elides before a vowel, introduced in a2.22 and extending sons.07',
    'Standard negation with ne … pas around a finite verb, introduced in a1.18',
    'That ne … pas encloses the verb that changed rather than the one carrying the meaning, introduced in a2.19 and quoted by a2.05, a2.21 and a2.22',
    'That -é, -ée, -és and -ées are homophonous, introduced in a2.01 and paid off in a2.21',
    'The daily-routine vocabulary and the reflexive infinitives, introduced in a1.25',
  ],
  grammarIntroduced: [
    'That every pronominal verb selects être as its auxiliary in compound tenses, irrespective of the auxiliary its non-pronominal counterpart selects: laver/avoir against se laver/être',
    'The full linear order of the reflexive compound past: subject, clitic, auxiliary, participle, with the clitic obligatorily preverbal and adjacent to the auxiliary',
    'Participle agreement with the subject in reflexive compounds, as an extension of a2.21 rather than a new rule',
    'That ne … pas encloses the clitic and the auxiliary and excludes the participle, extending a1.18, a2.19 and a2.22 to a three-element verbal complex',
    'That ne does not elide in any person here, because every clitic form is consonant-initial, while the clitic itself elides in the second and third person singular',
    'That inherently pronominal verbs with no reflexive semantics select être on the same grounds: se dépêcher, se reposer, se souvenir',
    'That a participle from any group, including a2.20\'s irregular sets, agrees identically: souvenue off venir',
    'The suspension of agreement before a following direct object, NAMED FOR RECOGNITION ONLY and produced nowhere, with the reason reserved for a2.24',
    'The reciprocal reading is left out entirely, as a2.22 left it, because its agreement behaviour depends on the same distinction a2.24 owns',
    'The imperfect and any contrast between past tenses is reserved beyond A2\'s first twenty units',
  ],

  features: ['roleplay', 'voiceflash'],
  scenarioId: undefined,

  overview: {
    titleEn: UNIT.title,
    subFr: UNIT.sub,
    introFr: 'Le petit mot choisit le premier mot.',
    minutes: 32,
    difficulty: 3,
    glyph: '🕰️',
    screens: 223,
  },

  acts: ACTS,
  reframe: REFRAME,
  errorTriggers: ERROR_TRIGGERS,
  drills: DRILLS,
  sheets: SHEETS,
  deckTranche: DECK_TRANCHE,
  terms: PRONOMINAUX_PASSE_TERMS,
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
    // authored prose that ships in the lesson body, so every walk in this build
    // reads `audio` as well as sections, sheets, terms, intro, overview, acts
    // and drills.
    //
    // Briefs only. Do NOT run pnpm audio:render: it spends real ElevenLabs
    // credits and ELEVENLABS_API_KEY is not set in ealch-admin/.env in any case.
    recorded: [
      {
        id: 'rec-a2-23-scene',
        desc:
          `THE SAME TWO PEOPLE AS ${unitRef('a2.22')}\'s SCENE, A MONTH ON, AND THIS EXCHANGE IS GOING WELL UNTIL IT IS NOT. `
          + 'HIS FIRST LINE « Ce matin, j\'ai lavé la voiture. » IS THE MOST IMPORTANT TAKE IN THE SCENE AND IT MUST SOUND COMPLETELY ORDINARY. '
          + 'It is fluent, correct and unremarkable, and it is what makes the next one happen. Any weight on it teaches that something was already wrong. '
          + 'HER LINE « Et ce matin ? » IS AN ORDINARY FOLLOW-UP, warm and short. '
          + 'HIS SECOND LINE « Ce matin, je... j\'ai... je me... » IS TWO REAL FALSE STARTS. The pauses are actual pauses and he is deciding, not performing hesitation. '
          + 'HIS THIRD LINE « J\'ai levé à six heures. » IS SAID FLUENTLY AND WITH CONFIDENCE. This is the single most important instruction in the take: it is a complete, well-formed French sentence and he believes he has said what he meant. Any hesitation on it teaches that the error is audible, and the whole point of the scene is that it is not. '
          + 'HER LAST LINE « Tu as levé quoi ? » IS A GENUINE QUESTION rather than a correction. She is waiting to be told what he lifted. There is no note of doubt in it and nobody is embarrassed.',
        clipIds: [
          'Ce matin, j\'ai lavé la voiture.',
          'Et ce matin ?',
          SCENE_STALL,
          SCENE_ERROR,
          'Tu as levé quoi ?',
          SCENE_RIGHT,
        ],
      },
      {
        id: 'rec-a2-23-flip',
        desc:
          'THE THREE PAIRS, ONE TAKE, ONE VOICE, AND THIS IS THE TAKE THE LESSON RESTS ON. Six lines in this order: '
          + '« J\'ai lavé la voiture. » « Je me suis lavé. » « J\'ai couché les enfants. » « Je me suis couché. » « J\'ai réveillé mon frère. » « Je me suis réveillé. » '
          + 'THE VERB MUST SOUND IDENTICAL IN EACH PAIR. « lavé » is the same syllable in lines one and two and nothing about it may change; the same for « couché » and « réveillé ». The learner is being taught that the verb is not what moved. '
          + 'READ EACH PAIR AT THE SAME PACE AS ITS PARTNER. Slowing the second one hands the learner the answer for the wrong reason. '
          + 'DO NOT LEAN ON « me » OR ON « suis ». They are the two words that carry the whole lesson and a reading that marks them teaches that they are strange. They are not strange; they are simply there. '
          + 'RECORD ALL SIX AS ONE CONTINUOUS TAKE. Six recordings are six performances.',
        clipIds: FLIP_PAIRS.flatMap(([a, b]) => [fr(a), fr(b)]),
      },
      {
        id: 'rec-a2-23-recap',
        desc:
          'FOUR SHORT LINES, ONE TAKE, PLAINLY, AND NONE OF THEM IS BEING TAUGHT. '
          + '« je me · tu te · il se · nous nous · vous vous · ils se » read as a list at an even pace, with a real boundary inside « nous nous » and « vous vous ». '
          + 'Then « levé · levée · levés · levées », WHICH MUST BE FOUR IDENTICAL SOUNDS. Not similar: identical. This is the card that claims the learner already owns the endings and the claim is that they sound the same. '
          + 'Then « Je me suis lavé. » and « Elle s\'est souvenue de mon nom. », both entirely ordinary. '
          + 'THE WHOLE TAKE IS A CHECKLIST RATHER THAN A LESSON and should sound like somebody reminding you of something you know.',
        clipIds: ['levé · levée · levés · levées', fr(A(802)), fr(A(830))],
      },
      {
        id: 'rec-a2-23-slots',
        desc:
          'ONE SENTENCE, SIX TIMES, AND IT IS THE SAME SENTENCE EVERY TIME: « Je ne me suis pas levé. » '
          + 'EVERY ROW OF THIS TABLE PLAYS THE WHOLE SENTENCE rather than its own word, because a word said on its own is not the word said in place. '
          + 'READ IT AT ORDINARY CONVERSATIONAL SPEED, ONCE, and let the slow speed do the rest. A reading that separates the six words teaches six words rather than one sentence. '
          + 'THE « ne » MUST BE AUDIBLE AND UNSTRESSED. It is the word whose POSITION the screen is about, so it cannot be swallowed the way ordinary speech swallows it, and it cannot be leaned on either. '
          + 'THERE IS NO PAUSE ANYWHERE INSIDE « ne me suis pas ». Those four words are one run.',
        clipIds: [SLOT_SENTENCE],
      },
      {
        id: 'rec-a2-23-persons',
        desc:
          'THE SIX PERSONS, ONE TAKE, ONE VOICE, IN THIS ORDER: '
          + '« Je me suis levé tôt. » « Tu t\'es levé tôt. » « Il s\'est levé tôt. » « Nous nous sommes levés tôt. » « Vous vous êtes levés tôt. » « Ils se sont levés tôt. » '
          + 'THE VERB IS THE SAME SOUND IN ALL SIX and so is « tôt ». The only thing that changes is the two or three words at the front. '
          + 'LINES TWO AND THREE ELIDE AND MUST NOT BE BROKEN AT THE APOSTROPHE. « t\'es » and « s\'est » are each one syllable and a pause there teaches a boundary that is not in the language. '
          + 'THE DOUBLED WORDS IN LINES FOUR AND FIVE MUST NOT BE RUN TOGETHER. « Nous nous » is two words with a real boundary between them, at ordinary pace and with no emphasis on either. '
          + '« sommes » IS /sɔm/ WITH A REAL M AND NO NASAL IN IT. It does not rhyme with « sont ». '
          + 'RECORD ALL SIX AS ONE CONTINUOUS TAKE.',
        clipIds: PERSON_IDS.map((id) => fr(id)),
      },
      {
        id: 'rec-a2-23-silent',
        desc:
          'THE TAKE THAT HAS TO PROVE A NEGATIVE, ONE VOICE, FOUR LINES: '
          + '« Il s\'est lavé. » « Elle s\'est lavée. » « J\'ai lavé la voiture. » « Je me suis lavé. » '
          + 'LINES ONE AND TWO MUST BE COMPLETELY IDENTICAL. Same speed, same weight, same length, same everything. The mission asks the learner to hear no difference and it only works if there is none, so these two are recorded in one breath and not spliced. '
          + 'LINES THREE AND FOUR ARE THE OPPOSITE INSTRUCTION AND THEY ARE IN THE SAME TAKE DELIBERATELY. They differ by a whole word and should be read at the same pace so that word is the only difference. '
          + 'DO NOT COMPENSATE. The temptation on line two is to help the learner by lengthening the ending. That is the exact thing the lesson says is impossible and doing it teaches a sound that is not in French.',
        clipIds: [fr(CELL_IDS[0]!), fr(CELL_IDS[1]!), fr(A(801)), fr(A(802))],
      },
      {
        id: 'rec-a2-23-object',
        desc:
          'THE EXCEPTION, ONE TAKE, FOUR LINES, AND NOTHING IN THE READING MAY MARK ANY OF THEM AS UNUSUAL: '
          + '« Elle s\'est lavée. » « Elle s\'est lavé les mains. » « Elle s\'est levée. » « Elle s\'est brossé les dents. » '
          + 'ALL FOUR ARE ORDINARY, CORRECT FRENCH and the card\'s whole claim is that the second and fourth are not mistakes. A reading that hesitates on them argues the opposite. '
          + 'LINES ONE AND TWO ARE ONE SOUND UP TO « lavé » and then one of them continues. That is the only difference and it is the difference the learner is being asked to notice. '
          + 'THERE IS NO PAUSE BEFORE « les mains » OR « les dents ». The sentence runs straight through.',
        clipIds: [fr(A(792)), fr(A(807)), fr(A(833)), fr(A(808))],
      },
      {
        id: 'rec-a2-23-nomeaning',
        desc:
          'FOUR LINES, ONE TAKE, ENTIRELY PLAINLY: « Nous nous sommes dépêchés. » « Vous vous êtes reposés. » « Elle a lavé la voiture. » « Elle s\'est lavée. » '
          + 'THE FIRST TWO CARRY NO TEACHING INTENT AT ALL. They are two ordinary sentences and the card\'s point is that nothing about them is special. '
          + 'LINES THREE AND FOUR ARE THE PAIR and they must be read at the same pace. The difference is « a lavé » against « s\'est lavée » and the learner is meant to hear the first half change and the second half not. '
          + 'THE ENDING ON « lavée » IS SILENT AND MUST STAY SILENT. Line four ends on exactly the same sound as line three.',
        clipIds: [fr(A(817)), fr(A(818)), fr(AVOIR_PAIR[0]), fr(AVOIR_PAIR[1])],
      },
      {
        id: 'rec-a2-23-negative',
        desc:
          'THE NEGATIVE, ONE TAKE, FOUR LINES: « Je me suis levé. » « Je ne me suis pas levé. » « Il ne s\'est pas levé. » « Nous ne nous sommes pas levés. » '
          + 'NOT A WRONG-THEN-RIGHT TAKE. All four are correct French. '
          + 'THE « ne » MUST BE AUDIBLE AND UNSTRESSED IN ALL THREE NEGATIVES. It is the word whose position the mission is about, so it cannot be swallowed and it cannot be leaned on. '
          + 'THERE IS NO PAUSE BETWEEN « ne » AND THE LITTLE WORD. « ne me » is one run and « ne s\'est » is one run. A break there is exactly the reading that makes the error sound plausible. '
          + '« pas » CLOSES STRAIGHT AFTER THE FIRST WORD and the second word follows it without a gap. The learner has to hear that the sentence does not stop at « pas ».',
        clipIds: [fr(A(802)), fr(A(810)), fr(A(812)), fr(A(814))],
      },
      {
        id: 'rec-a2-23-trap',
        desc:
          'THE AUDIO STEP OF THE TRAP, AND IT IS A WRONG-THEN-RIGHT TAKE. Four lines, one take, in this order: '
          + '« Je m\'ai levé. » then « Je me suis levé tôt. », then « Je me suis lavé. » then « J\'ai lavé la voiture. » '
          + 'READ THE FIRST LINE PLAINLY AND AT ORDINARY PACE rather than comically or hesitantly. It is perfectly pronounceable and it is what a careful learner produces from a correct sentence they said four seconds earlier; a reading that signals the error teaches that the error announces itself, and it does not. '
          + 'DO NOT SEPARATE THE FIRST TWO LINES WITH A LONG PAUSE. The pair is the teaching and it works when the two sit against each other. '
          + 'LINES THREE AND FOUR ARE THE SECOND PAIR and the verb « lavé » is the same syllable in both. Nothing about it may change.',
        clipIds: [AVOIR_TRAP, fr(A(795)), fr(A(802)), fr(A(801))],
      },
      {
        id: 'rec-a2-23-dictee',
        desc:
          'THE DICTÉE LINES, ONE TAKE EACH, CLEAN AND UNHURRIED, WITH NO CONTRAST INTENT AT ALL. This is the opposite instruction to rec-a2-23-silent: there the learner is comparing and here they are spelling, and a paired reading would hand them the answer. Read each line as though it were the only line. '
          + 'MANY OF THESE END ON THE SAME SYLLABLE AND SEVERAL PAIRS ARE ONE SOUND END TO END. That is correct and must not be corrected for. « Il s\'est lavé. » and « Ils se sont lavés. » differ in writing only, and the learner works out which from the two or three words at the front. '
          + 'THE FRONT OF THE SENTENCE IS WHERE ALL THE INFORMATION IS. « Il s\'est », « Ils se sont », « Elle s\'est », « Je me suis », « Tu t\'es »: these must be clearly and evenly said, because they are the only thing distinguishing most of the thirteen. '
          + 'THE ELIDED FORMS ARE ONE SYLLABLE. « t\'es » and « s\'est » are not broken at the apostrophe. '
          + 'SAY IT THE WAY SOMEBODY WOULD SAY IT, at the pace of somebody dictating an address to a friend.',
        clipIds: [
          A(791), A(792), A(793), A(802), A(804), A(806), A(811), A(812),
          A(816), A(819), A(831), A(832), A(833),
        ].map((id) => fr(id)),
      },
      {
        id: 'rec-a2-23-talk',
        desc:
          'THE CONVERSATION, HER LINES ONLY, ONE TAKE, AS ONE CONTINUOUS EXCHANGE RATHER THAN AS FIVE SEPARATE PROMPTS. She is the same binôme from the opening scene and this time the exchange works. '
          + 'EVERY QUESTION IS ASKED WITHOUT INVERSION and should sound completely ordinary: « Tu t\'es couché tard hier ? » is a statement with a question mark on it, which is what people say. '
          + 'HER OWN LINES CARRY THE STRUCTURE TWICE and neither may be marked or slowed. She is using it, not demonstrating it. '
          + 'THERE IS NO PAUSE INSIDE « t\'es réveillé » OR « t\'es couché ». The little word and the first word are one run.',
        clipIds: [
          'Alors, ce matin ? Tu t\'es réveillé à quelle heure ?',
          'Et ensuite ?',
          'Ta famille aussi ?',
          'Tu t\'es couché tard hier ?',
          'Et tes collègues, ils sont arrivés à l\'heure ?',
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

export const PP_SECTIONS = SECTIONS;
export const PP_ACTS = ACTS;
export const PP_TRANCHES = DECK_TRANCHE;
export const PP_SHEETS = SHEETS;
export const PP_DRILLS = DRILLS;
export const PP_ERROR_TRIGGERS = ERROR_TRIGGERS;
export const PP_SCENE_BEATS = SCENE_BEATS;

/** Every itemId the lesson names, which must all resolve and all be on a
 *  screen. Invariants §1: ask "did the learner see it", not "does it resolve". */
export const PP_ITEM_IDS: string[] = (() => {
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

export const PP_DICTEE_IDS: string[] =
  (SECTIONS.find((s) => s.id === DICTATION_SECTION_ID) as { itemIds?: string[] }).itemIds ?? [];
export const PP_SPEAK_IDS: string[] =
  (SECTIONS.find((s) => s.id === SPEAK_SECTION_ID) as { itemIds?: string[] }).itemIds ?? [];
