// a2.14.l1 "Irréguliers 4 : savoir & connaître" — the mission journey.
//
// ── THIS IS A FIRST BUILD ──────────────────────────────────────────────────
//
// Probed rather than assumed: the unit dump says `"lessonIds": []`, so there is
// no pre-v2 stub to rebuild and the version counter starts at 1.
//
// ── HOW IT IS SIZED, AND WHY ──────────────────────────────────────────────
//
// TWENTY-EIGHT SECTIONS AND SIX ACTS. That is inside the doctrine's 19-to-24
// range at the act level and past it at the section level, and the reason is in
// the brief: "Because there are only two paradigms, you have room for more
// production than any other lesson in batch 1. Use it."
//
//   act 2, the paradigm    4 missions   the smallest paradigm act in the batch
//   act 3, the Owns        8 missions   the heaviest single act
//   act 4, the trap        5 missions
//   act 5, production      5 missions   scenario, groupDrill, dictée, speak
//
// Thirteen missions on the choice against four on the forms. If the paradigm act
// were larger than the Owns act, this would be a lesson about twelve cells, and
// twelve cells is not worth a lesson.
//
// a2.13 measured that there is NO ceiling on section count in schema.ts (the
// only assertion is `sections must not be empty`) and that the corpus has
// shipped 31 sections, 145 questions and a 100 KiB body on real devices. This
// lesson is smaller than a2.13 on every one of those axes.
//
// ── THE LAYOUT CLAIM THE BRIEF MAKES, AND WHERE IT IS ─────────────────────
//
// "Both verbs belong on one screen, two columns, with savoir + clause on one
// side and connaître + object on the other, adjacent. This is the layout the
// test must assert. Separated, the lesson is two small paradigms and the choice
// never appears."
//
// That is `s04-grid`, and it is `examples` rather than a `table`, because a
// `table` at layer core is a table-in-core density failure. Every line renders
// both verbs. The full table lives in the sheet at layer deep, where density is
// deliberately fine.
//
// ── LAYOUT NOTES THAT ARE BUGS, NOT PREFERENCES ───────────────────────────
//
// - `size` is not decoration. density.logic.ts reads `xl` as a 12-word cap on
//   EVERY string in the section except `say`, `hint`, `note`, `why` and `tip`.
// - `commonErrors` needs `swipe: true` or it renders a blank screen.
// - `tapTable` is NOT in ownsLayout(), so it renders inside a scrolling page.
//   Six rows is the ceiling on a Pixel 6; s05-situations uses five.
// - Three term chips per section, maximum.
// - ONE quiz per lesson. lessonPager.logic.ts takes `sections.find(quiz)` and a
//   second one is silently never rendered.
// - `listenChoose` MUST NOT be offered on sais/sait or connais/connaît. Both are
//   homophone groups; a question asking a learner to tell one from the other by
//   ear has no correct answer. The lesson ships EXACTLY ONE listenChoose and it
//   is sais against peux, which are genuinely different sounds. The batch
//   enforces the rest by list rather than by comment.
// - `practice` with `skill: 'write'` draws no writing surface. Production here
//   is typeIn, errorSpot, the groupDrill checks and the dictée.

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
  CHOICE_CLAIM,
  FRAME_CLAIM,
  NOUS_ON,
  NO_INSTINCT,
  SAVOIR_CONNAITRE_TERMS,
  SINGULAR_CLAIM,
  TWO_FRAMES,
  WHAT_FOLLOWS,
  WHAT_FOLLOWS_UNIT,
} from './savoir-connaitre-terms.ts';
import { REFRAME as A213_REFRAME } from './modaux-terms.ts';
import { unitRef } from './_unit-ref.ts';

/** A citation that OPENS a sentence needs a capital, and the label is built at
 *  interpolation time rather than typed, so the capital has to be applied here.
 *  « lesson 22 said this first » is not a sentence. */
function Cap(s: string): string { return s.charAt(0).toUpperCase() + s.slice(1); }
import {
  AUTHORED_IDS,
  CHROME_DECISION,
  CIRCUMFLEX,
  COMPLEMENTS,
  CONTRAST_UNIT,
  DICTATION_IDS,
  FAMILY_MEMBER,
  FAMILY_UNIT,
  FRAMES,
  IMPOSSIBLE,
  IMPOSSIBLE_PLURAL,
  PARADIGM,
  PARADIGM_IDS,
  REFRAME,
  THE_TEST,
  VERB_ORDER,
  bare,
  en,
  fr,
  noStop,
  paradigmIds,
  sub,
  type Verb,
} from './savoir-connaitre-corpus.ts';
import {
  EVIDENCE_IDS,
  IMPORTED_IDS,
  SKILL_VERBS,
  evidenceCard,
  evidenceId,
  frameCard,
  frameId,
  familyCard,
  familyId,
  importedEn,
  importedFr,
  repairedRespell,
  skillCard,
  skillId,
  verbCard,
  verbId,
} from './savoir-connaitre-imported.ts';

export { CHOICE_CLAIM, NOUS_ON, NO_INSTINCT, REFRAME, SINGULAR_CLAIM, THE_TEST, TWO_FRAMES, WHAT_FOLLOWS, WHAT_FOLLOWS_UNIT };

/* ─── Named section ids, so a guard asserts a PLACE rather than a pattern ──
 *
 * Plain literals rather than reads off SECTIONS, so that a section being RENAMED
 * breaks the guard instead of quietly moving it. */

/** THE LAYOUT CLAIM. Both verbs, two columns, adjacent, on one screen. */
export const GRID_SECTION_ID = 's04-grid';
/** The A1 workhorse: a row per situation, tap to hear the sentence. */
export const SITUATIONS_SECTION_ID = 's05-situations';
/** The Owns, stated: what comes after the verb decides which verb it was. */
export const NEXT_SECTION_ID = 's08-next';
/** THE SENTENCE THAT KILLS THE SEMANTIC RULE. A place that takes savoir. */
export const PLACE_SECTION_ID = 's11-place';
/** The published evidence, in rows this lesson did not write. */
export const EVIDENCE_SECTION_ID = 's14-evidence';
/** THE THREE-WAY CHOICE. The brief: make it the trapDrill. */
export const TRAP_SECTION_ID = 's17-three';
/** The savoir/pouvoir contrast, which must name a2.13. */
export const POUVOIR_SECTION_ID = 's16-pouvoir';
/** THE SENTENCE THAT CANNOT EXIST, and the only place connaître may precede a
 *  clause opener anywhere in the lesson. */
export const IMPOSSIBLE_SECTION_ID = 's19-never';
/** Where the family is named once and handed to a2.15. */
export const FAMILY_SECTION_ID = 's20-family';
/** The ONLY home of a2.01's nous/on statement in this lesson. */
export const NOUS_ON_SECTION_ID = 's21-scenario';
/** The one reference sheet. */
export const SHEET_ID = 'sheet.a2.14.choice';
/** The goals heading is the ONLY place a future form of savoir may appear. */
export const GOALS_SECTION_ID = 's02-goals';
export const ROUNDUP_SECTION_ID = 's28-roundup';
export const QUIZ_SECTION_ID = 's27-quiz';

/** The two rows the grid must put next to each other on its first line, in this
 *  order. The ORDER is the layout claim, so the guards check it by index. */
export const ADJACENT_PAIR = ['fr.a2.verbes.381', 'fr.a2.verbes.387'] as const;

/* ─── The items this lesson touches ───────────────────────────────────────
 *
 * 30 authored plus 12 imported, out of SIX themes. Two imported rows gain a
 * `flashcard` drill because this lesson releases them into a deck; one gains a
 * repaired respelling. Nothing else about any of them moves.                */

const ITEM_IDS = [...new Set([...AUTHORED_IDS, ...IMPORTED_IDS])];

/** Spoken practice draws only from items carrying `voiceflash`, because that is
 *  the drill the mic-scored deck runs. */
const SPEAK_IDS = [
  ...PARADIGM_IDS,
  'fr.a2.verbes.393', 'fr.a2.verbes.395', 'fr.a2.verbes.397',
  'fr.a2.verbes.398', 'fr.a2.verbes.399', 'fr.a2.verbes.402',
  'fr.a2.verbes.403', 'fr.a2.verbes.405', 'fr.a2.verbes.406',
];

/** One authored row as a groupDrill item.
 *
 *  ── THE FIELDS THAT DO NOT RENDER AT `lg`, FOUND BY a2.13's DEVICE PASS ──
 *
 *  v1 and v2 of this lesson passed `respell` and `en`. NEITHER REACHES A SCREEN
 *  AT THIS SIZE. schema.ts:899 says so outright: "`fr`, `ipa` and `note` are the
 *  shipped shape. The rest are v2 additions FOR A groupDrill RENDERING AT XL."
 *  MissionRich.tsx:439 confirms it: the `lg` branch draws `fr`, `ipa` and `note`
 *  and nothing else.
 *
 *  EVERY groupDrill IN THIS LESSON IS `lg`, so v2 carried FIFTY-THREE cards
 *  showing a bare French sentence with no pronunciation and no meaning. Every
 *  host gate was green, because the data was valid and simply read by nothing —
 *  the same class of defect as the `cheatSheet` a1.13 still ships inside a
 *  reference sheet, which draws its title and no rows.
 *
 *  Caught here only because a2.13's device pass was sitting uncommitted in the
 *  tree when this lesson came to be committed. Nothing in this build would have
 *  found it: it is invisible to the schema, the density validator and all three
 *  guard layers, and it is the fourth thing on the a1.08 list.
 *
 *  The respelling and the gloss now ride in `note`, which the `lg` branch does
 *  draw. `respell` and `en` are NOT also passed: their presence is exactly the
 *  trap, and the batch, the merge and the test refuse them at this size. */
const rowCard = (id: string) => ({ fr: fr(id), itemId: id, note: `${sub(id)} · ${en(id)}` });

/** The six ids of one verb's column. */
const col = (v: Verb): string[] => paradigmIds(v);

/* ─── Mission 1 · Scene ────────────────────────────────────────────────────
 *
 * THE BRIEF'S SCENE, WHICH IS NOT THE DOCTRINE'S DEFAULT, AND IT IS THE RIGHT
 * ONE HERE.
 *
 * Doctrine §B.2 says an A2 scene opens on somebody who started a sentence they
 * could not finish. The brief asks for something more specific and more exact to
 * this subject: somebody who picks the wrong verb, is understood to mean
 * something they did not, and is not corrected, because NOTHING THEY SAID WAS
 * WRONG. The conversation continues on a false footing and nobody notices for a
 * while.
 *
 * Both are staged. The learner stalls between the two verbs, which is the
 * doctrine's shape, and then picks the one that is grammatical and answers a
 * question nobody asked, which is the brief's. The cost lands two beats later
 * and it lands on somebody else.
 *
 * Beats carry their own `size` and `audio`. The section sets NO size:
 * ownsLayout() ignores it and density.logic.ts would read xl as a 12-word cap.
 *
 * The break card is BUDGETED, not chosen. Ledger §7, measured on a Pixel 6:
 * a heading of about 13 characters, a body of 24 to 26 words, a coach line under
 * 9, and a reading row that carries EITHER ipa OR respell but not both.         */

const SCENE_BEATS: SceneBeat[] = [
  {
    kind: 'narration',
    size: 'md',
    text: 'A stairwell in Rennes on a Tuesday evening. Your neighbour is coming up with shopping bags and stops on the landing to talk.',
    audio: { mode: 'tts', voice: 'coach' },
  },
  {
    kind: 'bubble',
    from: 'them',
    reveal: 'tap',
    size: 'md',
    speaker: 'Le voisin',
    fr: fr('fr.a2.verbes.407'),
    en: en('fr.a2.verbes.407'),
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a2-14-scene' },
  },
  {
    kind: 'bubble',
    from: 'you',
    reveal: 'auto',
    size: 'md',
    fr: 'Euh... je... oui ?',
    en: 'Uh... I... yes?',
    stage: 'You have heard the verb and you know both of them mean know. What you do not have is any reason to prefer one, so you stall on the word you were about to say.',
    audio: { mode: 'tts', lang: 'fr-FR' },
  },
  {
    kind: 'choice',
    size: 'lg',
    prompt: 'He is waiting, and the bags are heavy. What goes out?',
    options: [
      {
        fr: fr('fr.a2.verbes.409'),
        en: 'no, and it answers what he asked',
        outcome: 'works',
        audio: { mode: 'tts', lang: 'fr-FR' },
      },
      {
        fr: fr('fr.a2.verbes.408'),
        en: 'correct French, and a different question',
        outcome: 'breaks',
        audio: { mode: 'tts', lang: 'fr-FR' },
      },
    ],
    followUp: {
      works: 'He nods, says she moved in on Saturday, and offers to introduce you at the weekend.',
      breaks: 'He nods and says bon, alors tu lui diras. You have just been asked to pass on a message to somebody you have never met.',
    },
  },
  {
    kind: 'bubble',
    from: 'them',
    reveal: 'auto',
    size: 'md',
    speaker: 'Le voisin',
    fr: 'Ah, parfait. Tu lui diras pour les poubelles, alors ?',
    en: 'Ah, perfect. You will tell her about the bins, then?',
    stage: 'He heard you say you know about her. You meant you had heard she existed. Nothing you said was wrong, and he is now depending on it.',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a2-14-scene' },
  },
  {
    kind: 'break',
    size: 'lg',
    // ── BUDGETED ON GLASS, AND v3 WAS OVER IT ─────────────────────────────
    //
    // v3 shipped this card with the card's own Continue CLIPPED UNDER THE
    // PAGER BAR on a Pixel 6, which is the defect that cost a2.01 three device
    // passes and which ledger §7 exists to prevent. It is on mission 1 of 28,
    // so a learner meets it immediately.
    //
    // The cause was one line, and it was the right-hand row. Ledger §7: "A
    // right-hand row carrying BOTH ipa and respell is four lines on its own.
    // Budget for it." `ipa` is REQUIRED by the schema on a break row, so the
    // only lever is the French, and « Tu connais la nouvelle voisine ? » is 31
    // characters and WRAPPED, making it five lines rather than four.
    //
    // Shortened to 23 characters so it sets on one line. The scene's own
    // question keeps `nouvelle`; this row does not need it, because the card is
    // contrasting the two VERBS and nothing else on it changed.
    heading: 'Two knows',
    body: 'Nothing you said was wrong. You answered a different question, because English keeps one verb here and French keeps two.',
    wrong: {
      fr: noStop(fr('fr.a2.verbes.408')),
      ipa: '/wi ʒə sɛ kɛl a.bit i.si/',
      en: 'I know about her',
    },
    right: {
      // NOT `fr('fr.a2.verbes.407')`: that row is 31 characters and wraps.
      fr: 'Tu connais la voisine ?',
      ipa: '/ty kɔ.nɛ la vwa.zin/',
      respell: '[tü koh-NEH la vwah-ZEEN]',
      en: 'have you met her',
    },
    coach: 'What comes next decides.',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], audioFirst: true, recordingId: 'rec-a2-14-choice' },
  },
  {
    kind: 'resolve',
    size: 'md',
    text: 'Nobody corrected you, because there was nothing to correct. That is what makes this one expensive: you will not find out you got it wrong until somebody acts on what they heard.',
  },
];

const SECTIONS: LessonSection[] = [
  /* ── Act 1: one word in English, two in French ─────────────────────────── */

  {
    type: 'scene',
    id: 's01-scene',
    title: 'The New Neighbour',
    frSub: 'La nouvelle voisine',
    render: 'screens',
    layer: 'core',
    terms: ['theChoice', 'whatFollows'],
    say: {
      text: 'Nobody is impatient here and nobody is corrected. Watch what it costs to pick the wrong one of two correct words.',
      voice: 'coach',
      timing: 'onFirstVisitOnly',
    },
    setting: {
      place: 'A stairwell, on the second-floor landing',
      city: 'Rennes',
      time: 'Tuesday, just after seven',
      ambience: 'room-tone-lobby',
    },
    beats: SCENE_BEATS,
    closing: {
      size: 'md',
      text: `${REFRAME} ${THE_TEST}`,
    },
  },

  {
    type: 'goals',
    id: GOALS_SECTION_ID,
    title: 'What You Will Be Able To Do',
    // THE HOUSE HEADING, AND IT IS SHIPPED DELIBERATELY. a2.13 replaced both of
    // these with pouvoir to stay clear of this lesson and said a2.14 has to
    // decide whether the chrome is a collision. It is not: 36 of the 49 lessons
    // in the seed head their goals with this exact string, and `Ce que vous
    // savez faire` heads 34 roundups. The roundup NAMES it, in one line, as the
    // lesson's own structure sitting unexplained on a screen the learner has
    // seen thirty-four times.
    //
    // `saurez` IS A FUTURE FORM AND THIS LESSON DOES NOT TEACH ONE. It is
    // permitted HERE and nowhere else, and the batch refuses it everywhere else
    // including inside a why or a note.
    frSub: CHROME_DECISION.goalsHeading,
    layer: 'core',
    say: `${NO_INSTINCT} ${REFRAME}`,
    goals: [
      { t: 'Pick between the two, every time', s: `${THE_TEST} Not what the sentence is about, but whether it has finished.` },
      { t: 'Build both, in all six persons', s: `${FRAME_CLAIM}. Twelve forms, and every ending in them is one you already write.` },
      { t: 'Tell knowing how from being allowed', s: `${Cap(unitRef(CONTRAST_UNIT))} gave you a third verb that also turns into can in English, and it means something else again.` },
      { t: 'Stop producing a sentence that does not exist', s: `« ${IMPOSSIBLE.wrong} » is the one English speakers build, and it is not clumsy French. It is not French.` },
    ],
  },

  {
    // THE OPENING MOVE. Four cards, and the third is the reframe.
    type: 'cardDeck',
    id: 's03-two',
    title: 'Two Verbs, One In English',
    frSub: 'Deux verbes, un seul en anglais',
    hint: 'Swipe through the four cards. The third one is the whole lesson.',
    render: 'deck',
    layer: 'core',
    size: 'lg',
    terms: ['theChoice', 'whatFollows'],
    say: 'Four cards. The first two are the problem and the third one is what you do about it.',
    cards: [
      {
        label: 'What English gave you',
        head: 'One word for both',
        body: `${NO_INSTINCT} You have never had to make this choice before, in any sentence, so there is nothing to fall back on.`,
      },
      {
        label: 'What French keeps',
        head: 'Two, and it is obligatory',
        fr: VERB_ORDER.join(' · '),
        sub: `${repairedRespell(verbId('savoir'))} · ${repairedRespell(verbId('connaître'))}`,
        body: 'Every sentence takes one or the other and there is no neutral option to hide behind. A learner who guesses is wrong about half the time, and in a very visible way.',
      },
      {
        label: 'What decides it',
        head: 'The word after the verb',
        fr: REFRAME,
        sub: 'and you can run that in half a second',
        body: `${THE_TEST} It is not about what the sentence is about. It is about whether the sentence has finished.`,
      },
      {
        label: 'What it costs',
        head: 'Twelve forms',
        fr: `${PARADIGM[0].forms.savoir} · ${PARADIGM[0].forms.connaître}`,
        sub: 'and every ending on them is already yours',
        body: `${CHOICE_CLAIM} The forms are the short half of this lesson. The question is the long half.`,
      },
    ],
  },

  /* ── Act 2: two verbs, twelve cells, one screen ────────────────────────── */

  {
    // THE LAYOUT CLAIM THE BRIEF MAKES, AND THE TEST ASSERTS THIS SECTION BY ID.
    //
    // "Both verbs belong on one screen, two columns, savoir + clause on one side
    // and connaître + object on the other, adjacent. Separated, the lesson is
    // two small paradigms and the choice never appears."
    //
    // Six lines, both verbs on every line, and the two complements are the
    // teaching as much as the verbs are: every savoir sentence ends in a verb
    // and every connaître sentence ends in a name.
    //
    // `examples` rather than `table`: a table at layer core is a table-in-core
    // density failure. The full table is in the sheet.
    type: 'examples',
    id: GRID_SECTION_ID,
    title: 'Both, One Line Each',
    frSub: 'Les deux, côte à côte',
    layer: 'core',
    terms: ['theTwoFrames', 'theSingular'],
    sheetId: SHEET_ID,
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a2-14-grid' },
    say: `Six lines, both verbs on each. ${TWO_FRAMES} Read down a column and watch what stays the same at the end of every sentence.`,
    examples: PARADIGM.map((r, i) => ({
      fr: `${r.person === 'je' ? 'je' : r.person} ${r.forms.savoir} ${FRAMES.savoir.complement}  ·  ${r.forms.connaître} ${FRAMES.connaître.complement}`,
      en: r.person,
      note: i < 3
        ? 'One sound across these three lines on both verbs. Only the word in front tells them apart.'
        : (i === 3
          ? 'The plural arrives. connaître grows a double s and savoir gets shorter.'
          : (i === 5
            ? 'Both endings are silent, so what you hear at the end is the stem.'
            : 'The ordinary -ez, on two different stems.')),
    })),
  },

  {
    // THE A1 WORKHORSE, AND THE BRIEF ASKS FOR IT BY NAME: "a row per situation,
    // tap to hear the sentence. This is the A1 workhorse shape and it fits a
    // choice lesson better than any grammar section type."
    //
    // tapTable is NOT in ownsLayout(), so this renders inside a scrolling page.
    // Six rows is the Pixel 6 ceiling; this uses five, and every cell is three
    // words or fewer with the teaching in the detail modal, which is a card and
    // can hold prose.
    type: 'tapTable',
    id: SITUATIONS_SECTION_ID,
    title: 'Which One, And When',
    frSub: 'Savoir ou connaître',
    layer: 'core',
    terms: ['theChoice', 'savoirReach', 'connaitreReach'],
    sheetId: SHEET_ID,
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a2-14-choice' },
    say: `${REFRAME} Tap any cell to hear it. Read the left column first and decide before you look right.`,
    cols: ['the situation', 'what you say'],
    rows: [
      {
        cells: ['you have met this person', noStop(fr('fr.a2.verbes.399'))],
        say: fr('fr.a2.verbes.399'),
        detail: {
          title: 'A person, so it stops there',
          body: `${fr('fr.a2.verbes.399')} ${sub('fr.a2.verbes.399')} A name is a thing, and once you have said it the sentence is finished. That is connaître. Underneath, it means you have met her: you have shaken the hand, you were in the room.`,
          say: fr('fr.a2.verbes.399'),
        },
      },
      {
        cells: ['you learned how to do it', noStop(fr('fr.a2.verbes.381'))],
        say: fr('fr.a2.verbes.381'),
        detail: {
          title: 'A verb, so it keeps going',
          body: `${fr('fr.a2.verbes.381')} ${sub('fr.a2.verbes.381')} Somebody taught you at some point and now you can do it. What follows the verb is another verb, so the sentence has not finished and connaître cannot carry it.`,
          say: fr('fr.a2.verbes.381'),
        },
      },
      {
        cells: ['you have the information', noStop(fr('fr.a2.verbes.393'))],
        say: fr('fr.a2.verbes.393'),
        detail: {
          title: 'A whole sentence, and it is about a place',
          body: `${fr('fr.a2.verbes.393')} ${sub('fr.a2.verbes.393')} This is the one that catches people. It is about where somebody lives, and any rule about places sends you to the wrong verb. A whole sentence follows, so it is savoir.`,
          say: fr('fr.a2.verbes.393'),
        },
      },
      {
        cells: ['you have been there', noStop(fr('fr.a2.verbes.398'))],
        say: fr('fr.a2.verbes.398'),
        detail: {
          title: 'A place, and this time it does stop',
          body: `${fr('fr.a2.verbes.398')} ${sub('fr.a2.verbes.398')} You have walked around in it. The sentence lands on the thing and finishes, so it is connaître, and the difference from the line above is not the subject matter but the shape.`,
          say: fr('fr.a2.verbes.398'),
        },
      },
      {
        cells: ['nothing is stopping you', noStop(fr('fr.a2.verbes.403'))],
        say: fr('fr.a2.verbes.403'),
        detail: {
          title: 'And the third verb',
          body: `${fr('fr.a2.verbes.403')} ${sub('fr.a2.verbes.403')} English turns this into can as well, and it is neither of the other two. It says the water is there and you are allowed in. ${Cap(unitRef(CONTRAST_UNIT))} built this verb.`,
          say: fr('fr.a2.verbes.403'),
        },
      },
    ],
  },

  {
    // THE SAVOIR COLUMN, ALL SIX, AS CARDS THE LEARNER IS SCORED ON.
    type: 'groupDrill',
    id: 's06-savoir',
    title: 'Savoir, All Six',
    frSub: 'Savoir',
    layer: 'core',
    size: 'lg',
    terms: ['savoirReach', 'theSingular'],
    sheetId: SHEET_ID,
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a2-14-grid' },
    say: `Six sentences and every one of them ends in ${FRAMES.savoir.complement}. Everything you notice is happening in the middle.`,
    groups: [
      {
        // THE TWO NAMING FORMS, and this is where both imported rows have to
        // reach a screen. a1.08 declared 43 itemIds that resolved perfectly and
        // were drawn by nothing at all.
        label: 'the two, before either of them moves',
        items: VERB_ORDER.map((v) => verbCard(v)),
        check: {
          q: 'English uses one word for both of these. What decides which one you reach for?',
          opts: ['Whether it is a person or a fact', 'The word that comes after it', 'How formal you are being', 'Whether the sentence is a question'],
          correct: 1,
          why: `${REFRAME} ${THE_TEST}`,
        },
      },
      {
        label: 'the three that sound the same',
        items: col('savoir').slice(0, 3).map(rowCard),
        check: {
          q: `${noStop(fr(col('savoir')[0]))}, ${noStop(fr(col('savoir')[1]))}, ${noStop(fr(col('savoir')[2]))}. What is different in the verb?`,
          opts: ['The vowel changes on the third', 'A consonant arrives', 'Nothing at all', 'The stress moves'],
          correct: 2,
          why: `Nothing. ${SINGULAR_CLAIM} The word in front is carrying all of it.`,
        },
      },
      {
        label: 'and the three that do not',
        items: col('savoir').slice(3).map(rowCard),
        check: {
          q: `What happens to ${FRAMES.savoir.complement} across all six of those?`,
          opts: ['It takes an ending in the plural', 'It changes for nous and vous', 'Nothing at all', 'It loses a letter'],
          correct: 2,
          why: `Nothing, in any of the six. ${A213_REFRAME} That was ${unitRef(CONTRAST_UNIT)}, and it holds here too: savoir is doing the work and the verb behind it rests.`,
        },
      },
    ],
  },

  {
    // THE CONNAÎTRE COLUMN. The double s is the only thing to notice, and the
    // circumflex sits on exactly one cell.
    type: 'groupDrill',
    id: 's07-second-verb',
    title: 'Connaître, All Six',
    frSub: 'Connaître',
    layer: 'core',
    size: 'lg',
    terms: ['connaitreReach', 'thePlural', 'theCircumflex'],
    sheetId: SHEET_ID,
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a2-14-grid' },
    say: `Six more, and every one ends in ${FRAMES.connaître.complement}. Two things to notice and both of them are in the spelling.`,
    groups: [
      {
        label: 'the name behind all six',
        items: [frameCard(FRAMES.connaître.complement)],
        check: {
          q: `Every sentence in this mission ends in ${FRAMES.connaître.complement}. Why one name and not six different ones?`,
          opts: ['It is the easiest one', 'So that only the verb changes', 'It is the most useful one', 'There were no others'],
          correct: 1,
          why: `If the end of the sentence never moves, everything you notice is happening to the verb. The savoir side does the same with ${FRAMES.savoir.complement}.`,
        },
      },
      {
        label: 'the singular, and the one accent',
        items: col('connaître').slice(0, 3).map(rowCard),
        check: {
          q: `Which of those three carries the accent on the i?`,
          opts: [noStop(fr(col('connaître')[0])), noStop(fr(col('connaître')[1])), noStop(fr(col('connaître')[2])), 'All three'],
          correct: 2,
          why: `Only ${PARADIGM[2].forms.connaître}, and no other form of either verb carries it. It changes nothing about how the word is said.`,
        },
      },
      {
        label: 'the plural, and the double s',
        items: col('connaître').slice(3).map(rowCard),
        check: {
          q: `What arrives in the plural and stays for all three?`,
          opts: ['The accent', 'A double s', 'An extra syllable at the front', 'Nothing'],
          correct: 1,
          why: `A double s: ${PARADIGM[3].forms.connaître}, ${PARADIGM[4].forms.connaître}, ${PARADIGM[5].forms.connaître}. The endings themselves are the ones you have had since ${unitRef('a2.01')}.`,
        },
      },
    ],
  },

  /* ── Act 3: what comes next decides. THE OWNS, eight missions. ─────────── */

  {
    // THE OWNS, STATED. The only xl section in the lesson, and the one place xl
    // is correct: every display string here is short by construction.
    type: 'cardDeck',
    id: NEXT_SECTION_ID,
    title: 'What Comes Next',
    // FRENCH. `frSub` is the one field that is deliberately French (invariants
    // §8), and v4 put a2.02's English pattern NAME here, so this row was the only
    // lowercase English line in a column of French subs on the hub. The pattern
    // name still appears verbatim in the body, the terms and the sheet.
    frSub: 'Ce qui suit décide',
    hint: 'Swipe. Four sentences, and the verb is decided by the word after it every time.',
    render: 'deck',
    layer: 'core',
    size: 'xl',
    terms: ['whatFollows', 'theChoice'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], audioFirst: true, recordingId: 'rec-a2-14-choice' },
    say: `${REFRAME} Listen to each one before you read it, and watch only the word after the verb.`,
    cards: [
      { label: '1 of 4', head: 'A verb follows', fr: fr('fr.a2.verbes.381'), sub: sub('fr.a2.verbes.381'), body: 'Keeps going. savoir.' },
      { label: '2 of 4', head: 'A name follows', fr: fr('fr.a2.verbes.387'), sub: sub('fr.a2.verbes.387'), body: 'Stops there. connaître.' },
      { label: '3 of 4', head: 'A sentence follows', fr: fr('fr.a2.verbes.394'), sub: sub('fr.a2.verbes.394'), body: 'Keeps going. savoir again.' },
      { label: '4 of 4', head: 'A thing follows', fr: fr('fr.a2.verbes.398'), sub: sub('fr.a2.verbes.398'), body: 'Stops. connaître again.' },
    ],
  },

  {
    // SORTING, WHICH IS THE ONLY DRILL SHAPE THAT MATCHES THE TASK. The learner
    // is not producing a form here; they are making a binary decision under time
    // pressure, which is exactly what the reframe is for.
    type: 'groupDrill',
    id: 's09-sort',
    title: 'Sort Them By What Follows',
    frSub: 'Le mot d\'après',
    layer: 'core',
    size: 'lg',
    terms: ['savoirReach', 'connaitreReach', 'whatFollows'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a2-14-choice' },
    say: 'Two groups. Do not read the meaning, read the word after the verb, and see how fast you can go.',
    groups: [
      {
        label: `savoir: ${COMPLEMENTS.savoir.takes}`,
        items: ['fr.a2.verbes.381', 'fr.a2.verbes.393', 'fr.a2.verbes.395'].map(rowCard),
        check: {
          q: 'What do those three have in common after the verb?',
          opts: ['They are all about people', 'None of them has finished', 'They are all questions', 'They all name a place'],
          correct: 1,
          why: `None of them stops at the verb\'s object, because none of them has one. ${REFRAME}`,
        },
      },
      {
        label: `connaître: ${COMPLEMENTS.connaître.takes}`,
        items: ['fr.a2.verbes.387', 'fr.a2.verbes.398', 'fr.a2.verbes.399'].map(rowCard),
        check: {
          q: 'And those three?',
          opts: ['Each one ends on the thing', 'They are all in the plural', 'They are all about places', 'They all use the same person'],
          correct: 0,
          why: 'Each one lands on a thing and finishes. A person, a neighbourhood and a city are all things you have been in front of.',
        },
      },
    ],
  },

  {
    // SAVOIR PLUS A VERB, ON THREE DIFFERENT VERBS, so the skill sense is not
    // one frame repeated. All three verbs are IMPORTED.
    type: 'groupDrill',
    id: 's10-skill',
    title: 'What You Learned To Do',
    frSub: 'Savoir + un verbe',
    layer: 'core',
    size: 'lg',
    terms: ['savoirReach', 'theThirdVerb'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a2-14-skill' },
    say: `Three verbs from three other lessons, and savoir does not care which. English says can for all of these and French does not use its can verb for any of them.`,
    groups: [
      {
        label: 'the verbs, on their own',
        items: [frameCard(FRAMES.savoir.complement), ...SKILL_VERBS.map((v) => skillCard(v))],
        check: {
          q: 'Where did these three come from?',
          opts: ['This lesson taught them', 'Other lessons, and savoir borrowed them', 'They are irregular too', 'They only work with savoir'],
          correct: 1,
          why: 'All three came from somewhere else and arrive here unchanged. savoir puts them to work without touching them.',
        },
      },
      {
        label: 'and behind savoir',
        items: ['fr.a2.verbes.381', 'fr.a2.verbes.395', 'fr.a2.verbes.396'].map(rowCard),
        check: {
          q: `« ${noStop(fr('fr.a2.verbes.396'))} » becomes she can drive in English. Why is it not the can verb in French?`,
          opts: ['It would be too formal', 'Because somebody taught her, and that is savoir', 'The can verb has no il form', 'Both are equally correct'],
          correct: 1,
          why: 'She learned. That is what savoir carries. The can verb would say the roads are clear and she is allowed out, which is a different claim about a different person.',
        },
      },
    ],
  },

  {
    // THE MISSION THE OWNS ACT EXISTS FOR, AND THE ONE THAT DECIDED THE REFRAME.
    //
    // « Je sais où elle habite. » is about a PLACE and takes savoir. Every
    // semantic version of this rule — including the one already published in
    // French at fr.a2.collegues.009 — sends the learner to connaître for it.
    // The syntactic version sends them to savoir, correctly.
    //
    // If the reframe is right anywhere, it is right here, and if a later author
    // replaces it with the semantic version this is the screen that stops
    // making sense.
    type: 'examples',
    id: PLACE_SECTION_ID,
    title: 'A Place That Takes Savoir',
    frSub: 'Le piège du lieu',
    layer: 'core',
    terms: ['whatFollows', 'savoirReach', 'theChoice'],
    sheetId: SHEET_ID,
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], audioFirst: true, recordingId: 'rec-a2-14-place' },
    say: 'Four lines about places. Two of them take one verb and two take the other, and it is not the places that differ.',
    examples: [
      { fr: fr('fr.a2.verbes.398'), en: en('fr.a2.verbes.398'), note: 'A place, and the sentence lands on it. connaître.' },
      { fr: fr('fr.a2.verbes.393'), en: en('fr.a2.verbes.393'), note: 'Also a place, and savoir. A whole sentence follows, so it cannot be the other one.' },
      { fr: fr('fr.a2.verbes.401'), en: en('fr.a2.verbes.401'), note: 'A place again, connaître again, because the sentence stops on la ville.' },
      { fr: fr('fr.a2.verbes.397'), en: en('fr.a2.verbes.397'), note: 'And a place with savoir, because où est la gare is a whole sentence. This is the most useful line in the lesson.' },
    ],
  },

  {
    // THE PRODUCTION VERSION OF THE SAME CLAIM, so the learner does it rather
    // than watches it.
    type: 'groupDrill',
    id: 's12-both',
    title: 'The Same Place, Both Verbs',
    frSub: 'Le même lieu',
    layer: 'core',
    size: 'lg',
    terms: ['whatFollows', 'theChoice'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a2-14-place' },
    say: 'One neighbourhood, two sentences about it, and two different verbs. Read the second one twice.',
    groups: [
      {
        label: 'one sentence with both in it',
        items: ['fr.a2.verbes.406'].map(rowCard),
        check: {
          q: 'Why does the same speaker use a different verb in each half?',
          opts: [
            'The second half is negative',
            'The first half stops on the neighbourhood, the second keeps going',
            'You cannot repeat a verb in French',
            'The second half is about a different place',
          ],
          correct: 1,
          why: `${REFRAME} Both halves are about the same neighbourhood. The shape of each half is what picks the verb, twice, in one breath.`,
        },
      },
      {
        label: 'and the two on their own',
        items: ['fr.a2.verbes.398', 'fr.a2.verbes.401', 'fr.a2.verbes.397'].map(rowCard),
        check: {
          q: 'Which question does connaître answer about a place?',
          opts: ['Where is it?', 'Have you been there?', 'What is it called?', 'How far is it?'],
          correct: 1,
          why: 'Have you been there. connaître is about having stood in it. Where it is, is information, and information keeps going into a whole sentence.',
        },
      },
    ],
  },

  {
    // CONNAÎTRE ON FOUR KINDS OF THING, so the learner does not leave believing
    // it means only people.
    //
    // A groupDrill rather than a cardDeck, and not for layout reasons: cards in
    // a deck are display strings and the rows behind them reach no screen the
    // learner is SCORED on. a1.08 shipped forty-three itemIds that resolved
    // perfectly and were drawn by nothing at all, and this build's reachability
    // guard found four of the same shape here.
    type: 'groupDrill',
    id: 's13-things',
    title: 'Four Kinds Of Thing',
    frSub: 'Connaître + une chose',
    layer: 'core',
    size: 'lg',
    terms: ['connaitreReach', 'theChoice'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a2-14-things' },
    say: 'A person, a city, a restaurant and a song. connaître does not mind which, as long as the sentence stops there.',
    groups: [
      {
        label: 'somebody, and somewhere',
        items: ['fr.a2.verbes.399', 'fr.a2.verbes.387'].map(rowCard),
        check: {
          q: 'What do a person and a city have in common, for this verb?',
          opts: ['Both are proper names', 'You have been in front of both of them', 'Both are singular', 'Neither can be a question'],
          correct: 1,
          why: 'You were in the room, or you walked around in it. That is what connaître claims, and reading about either one is not it.',
        },
      },
      {
        label: 'and two things that are not people or places',
        items: ['fr.a2.verbes.400', 'fr.a2.verbes.402'].map(rowCard),
        check: {
          q: 'A restaurant and a song. Why are these still connaître?',
          opts: ['Because they are objects', 'Because the sentence stops on them', 'Because they are not facts', 'They should be savoir'],
          correct: 1,
          why: `${REFRAME} It is not a rule about people and places at all; those are just the commonest things to land on.`,
        },
      },
    ],
  },

  {
    // THE PUBLISHED EVIDENCE, IN ROWS THIS LESSON DID NOT WRITE.
    //
    // Two hundred and thirty published sentences hold a form of one of these two
    // verbs and THREE carry a respelling, one of which carries U+203F. These
    // are what is left, and they are worth having: the reframe is demonstrated
    // in both directions by rows written for other themes years before this
    // lesson existed.
    // A groupDrill rather than examples, so the four imported rows reach a card
    // the learner is SCORED on rather than only a display string.
    type: 'groupDrill',
    id: EVIDENCE_SECTION_ID,
    title: 'Already Everywhere',
    frSub: 'Dans le corpus',
    layer: 'core',
    size: 'lg',
    terms: ['whatFollows', 'theChoice'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a2-14-evidence' },
    say: 'Four sentences nobody wrote for this lesson. Two stop on a thing and two keep going, and the verbs follow.',
    groups: [
      {
        label: 'two that stop',
        items: [
          evidenceCard('Tout le monde connaît le nom du champion.'),
          evidenceCard('Il connaît la vraie raison de son retard ce matin.'),
        ],
        check: {
          q: 'The second one runs to ten words. Where does it actually stop?',
          opts: ['At the end', 'On la raison, with the rest saying which one', 'It does not stop', 'On ce matin'],
          correct: 1,
          why: 'On la raison. Everything after it is telling you which raison, and none of it is a second sentence. That is why connaître can carry it.',
        },
      },
      {
        label: 'and two that keep going',
        items: [
          evidenceCard('Je ne sais pas si c\'est l\'heure.'),
          evidenceCard('je ne sais pas'),
        ],
        check: {
          q: 'What follows si in the first of those?',
          opts: ['A thing', 'A whole sentence', 'Another verb on its own', 'Nothing'],
          correct: 1,
          why: 'A whole sentence, with its own subject and its own verb inside it. Only savoir can hold one. The second card has nothing after it at all, which is the one place savoir stands alone.',
        },
      },
    ],
  },

  {
    // THE EAR, USED FOR THE ONE THING IT CAN DO HERE.
    //
    // sais/sait and connais/connaît are HOMOPHONE GROUPS and no question may
    // ask between two members of one. What the ear CAN do is separate the two
    // verbs from each other and from pouvoir, which sound nothing alike, and
    // that is worth a screen because the learner is about to be asked to choose
    // between them at speed.
    type: 'listening',
    id: 's15-listening',
    title: 'Telling Them Apart Out Loud',
    frSub: 'À l\'oreille',
    layer: 'core',
    questionsInModal: true,
    terms: ['theSingular', 'nousOn'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], audioFirst: true, recordingId: 'rec-a2-14-ear' },
    say: 'Six lines. Listen before you read. Three of them are one verb and three are the other, and they are not hard to separate.',
    lines: [
      ...col('savoir').slice(0, 3),
      ...col('connaître').slice(0, 3),
    ].map((id) => ({ fr: fr(id), en: en(id) })),
    questions: [
      {
        q: `${noStop(fr(col('savoir')[0]))}, ${noStop(fr(col('savoir')[1]))}, ${noStop(fr(col('savoir')[2]))}. What is different in the verb?`,
        opts: ['The vowel changes on the third', 'A consonant arrives', 'Nothing at all', 'The stress moves'],
        correct: 2,
        why: `Nothing. ${SINGULAR_CLAIM}`,
      },
      {
        q: `And ${noStop(fr(col('connaître')[0]))} against ${noStop(fr(col('connaître')[2]))}?`,
        opts: ['Also one sound', 'The accent is audible', 'The second is longer', 'The t is pronounced'],
        correct: 0,
        why: 'Also one sound. The accent on the i is a spelling decision and the -t at the end is silent, so there is nothing there to hear.',
      },
      {
        q: 'So which pairs in this lesson CAN the ear separate?',
        opts: ['None of them', 'The two verbs from each other', 'Only the plurals', 'All of them'],
        correct: 1,
        why: 'The two verbs, easily: one syllable against two, and completely different consonants. What the ear cannot do is tell you which person you just heard.',
      },
      {
        q: 'What told you the person, then?',
        opts: ['The verb', 'The word in front of it', 'The speed', 'Nothing did'],
        correct: 1,
        why: 'The pronoun, which is why it is never optional in French. On these forms it is carrying the whole of the information.',
      },
    ],
  },

  /* ── Act 4: the third verb, and the sentence that cannot exist ─────────── */

  {
    // THE BRIEF'S FIRST TRAP, AND IT NAMES a2.13 BY UNIT ID.
    //
    // « Je sais nager. » against « Je peux nager. » — one word changed, nothing
    // else moved, which is the only way a contrast is visible. Both rows are
    // authored on the same frame for exactly that reason.
    //
    // a2.13's paradigm is NOT re-taught. One recap line, one imported naming
    // form, and the batch refuses every form of pouvoir except peux and peut.
    type: 'groupDrill',
    id: POUVOIR_SECTION_ID,
    title: `And The One From ${Cap(unitRef(CONTRAST_UNIT, 'a2'))}`,
    frSub: 'Savoir ou pouvoir',
    layer: 'core',
    size: 'lg',
    terms: ['theThirdVerb', 'theChoice'],
    sheetId: SHEET_ID,
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], audioFirst: true, recordingId: 'rec-a2-14-pouvoir' },
    say: `${Cap(unitRef(CONTRAST_UNIT))} built this verb in full and this lesson does not build it again. What it does is put the two sentences side by side, because English turns both of them into can.`,
    groups: [
      {
        // THE RECAP LINE, AND IT IS ONE CARD. The brief: "Do not re-teach its
        // paradigm; one recap line and a pointer."
        label: `the third naming form, from ${unitRef(CONTRAST_UNIT)}`,
        items: [frameCard('pouvoir')],
        check: {
          q: `You built this verb at ${unitRef(CONTRAST_UNIT)}. What does it claim that savoir does not?`,
          opts: ['That you were taught', 'That nothing is in your way', 'That you have been there', 'The same thing'],
          correct: 1,
          why: 'That nothing is stopping you. It says nothing at all about whether anybody ever taught you, which is the whole of the difference.',
        },
      },
      {
        // THE MINIMAL PAIR, FIRST AND SECOND, so the guard can check adjacency
        // and the learner sees that nothing but the verb moved.
        label: 'one word apart',
        items: ['fr.a2.verbes.381', 'fr.a2.verbes.403', 'fr.a2.verbes.404', 'fr.a2.verbes.405'].map(rowCard),
        check: {
          q: `Between the first two cards, how many words changed?`,
          opts: ['None', 'One', 'Two', 'The whole sentence'],
          correct: 1,
          why: 'One. Both sentences are three words, both end in the same verb, and the only thing that moved is the middle. That is the only way this contrast is visible at all.',
        },
      },
    ],
  },

  {
    // THE TRAPDRILL THE BRIEF ASKS FOR BY NAME: "make the three-way choice the
    // trapDrill." Six drill rows and at least two of them turn on pouvoir, so
    // the third leg is tested and not merely mentioned.
    type: 'trapDrill',
    id: TRAP_SECTION_ID,
    title: 'Three Verbs, One Word',
    frSub: 'Le choix à trois',
    layer: 'core',
    swipe: true,
    terms: ['theThirdVerb', 'theChoice', 'whatFollows'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], wrongThenRight: true, recordingId: 'rec-a2-14-pouvoir' },
    say: 'Four pairs and then six to prove it. Every one of them turns into know or can in English, and English is no help at all.',
    rule: {
      title: 'Learned, allowed, or met',
      body: `Three verbs and English has two words for all of them. sais is having learned. peux is nothing in the way. connais is having been there. ${THE_TEST}`,
    },
    cards: [
      {
        promptLabel: 'having learned',
        promptSound: bare('fr.a2.verbes.381'),
        fr: fr('fr.a2.verbes.381'),
        ipa: '/ʒə sɛ na.ʒe/',
        tip: 'Somebody taught me. Whether the pool is open today has nothing to do with it.',
      },
      {
        promptLabel: 'and nothing stopping you',
        promptSound: bare('fr.a2.verbes.403'),
        fr: fr('fr.a2.verbes.403'),
        ipa: '/ʒə pø na.ʒe/',
        tip: `One word different from the card before it. ${Cap(unitRef(CONTRAST_UNIT))} built this one; this lesson only puts it here.`,
      },
      {
        promptLabel: 'having been there',
        promptSound: bare('fr.a2.verbes.387'),
        fr: fr('fr.a2.verbes.387'),
        ipa: '/ʒə kɔ.nɛ pa.ʁi/',
        tip: 'A name follows and the sentence stops. Neither of the other two verbs can take a bare name like that.',
      },
      {
        promptLabel: 'and both at once',
        promptSound: bare('fr.a2.verbes.405'),
        fr: fr('fr.a2.verbes.405'),
        ipa: '/ʒə sɛ na.ʒe mɛ ʒə nə pø pa o.ʒuʁ.dɥi/',
        tip: 'Learned, and not allowed today. In English that sentence has to say I can swim but I cannot swim, which is why English speakers avoid saying it at all.',
      },
    ],
    drill: [
      { promptSay: 'je sais nager', opts: [bare('fr.a2.verbes.381'), bare('fr.a2.verbes.403'), bare('fr.a2.verbes.387')], correct: 0 },
      { promptSay: 'je peux nager', opts: [bare('fr.a2.verbes.387'), bare('fr.a2.verbes.403'), bare('fr.a2.verbes.381')], correct: 1 },
      { promptSay: 'je connais Paris', opts: [bare('fr.a2.verbes.398'), bare('fr.a2.verbes.393'), bare('fr.a2.verbes.387')], correct: 2 },
      { promptSay: 'on peut nager ici', opts: [bare('fr.a2.verbes.404'), bare('fr.a2.verbes.403'), bare('fr.a2.verbes.381')], correct: 0 },
      { promptSay: 'je sais où elle habite', opts: [bare('fr.a2.verbes.398'), bare('fr.a2.verbes.393'), bare('fr.a2.verbes.397')], correct: 1 },
      { promptSay: 'tu connais Marie', opts: [bare('fr.a2.verbes.399'), bare('fr.a2.verbes.395'), bare('fr.a2.verbes.388')], correct: 0 },
    ],
    steps: [
      { label: 'The rule', kind: 'rule', title: 'Learned, Allowed, Or Met' },
      { label: 'The pairs', kind: 'cards', title: 'Four That Catch People' },
      { label: 'Hear it', kind: 'audio', title: 'Wrong, Then Right' },
      { label: 'Prove it', kind: 'drill', title: 'Which One Did You Say?', gate: true },
    ],
  },

  {
    type: 'commonErrors',
    id: 's18-errors',
    // `swipe` and `size` are not decoration. MissionSection renders commonErrors
    // as its own swipe deck ONLY when `swipe` is set, and without it a1.01
    // mission 5 drew a blank screen on a device.
    swipe: true,
    size: 'lg',
    title: 'Four Ways This Comes Apart',
    frSub: 'Quatre pièges',
    layer: 'core',
    terms: ['theImpossible', 'theChoice', 'theThirdVerb'],
    say: 'The first one is not a clumsy sentence. It is not a sentence, and it is the one English speakers build.',
    errors: [
      {
        wrong: `Saying « ${IMPOSSIBLE.wrong} ».`,
        right: `Saying « ${IMPOSSIBLE.right} ».`,
        why: `${IMPOSSIBLE.why} Word for word out of English it looks right, and there is no version of French in which it works. Not building it under pressure is the skill.`,
      },
      {
        wrong: `Answering « ${noStop(fr('fr.a2.verbes.407'))} » with a form of savoir.`,
        right: `Answering with « ${noStop(fr('fr.a2.verbes.409'))} ».`,
        why: 'Nothing is ungrammatical about the first one, which is exactly why it costs you something. You will be understood to have said you have heard of her, and nobody will correct you.',
      },
      {
        wrong: `Reaching for the ${unitRef(CONTRAST_UNIT)} verb when you mean you were taught.`,
        right: `Saying « ${noStop(fr('fr.a2.verbes.381'))} ».`,
        why: 'English gives you can for both, so the reflex is strong. je peux nager says the water is there. It says nothing at all about whether you would float.',
      },
      {
        wrong: `Writing connaissons or connaissez with one s.`,
        right: `Writing « ${PARADIGM[3].forms.connaître} » and « ${PARADIGM[4].forms.connaître} ».`,
        why: `The double s arrives with nous and stays for all three plural forms. It is audible, so if you can say it you can hear which one you meant to write.`,
      },
    ],
  },

  {
    // THE SENTENCE THAT CANNOT EXIST, AND THE ONLY PLACE IN THE LESSON WHERE A
    // connaître FORM MAY STAND IN FRONT OF A CLAUSE OPENER.
    //
    // The guard that enforces this is scoped to the lesson's own strings and
    // permits exactly this section and the errorSpot question in round 4. Note
    // that `ne … que` is legal French with connaître — three published rows do
    // it — and this lesson authors none, which is what makes the absolute
    // version of the rule safe to assert here. Corpus header, item 4.
    type: 'examples',
    id: IMPOSSIBLE_SECTION_ID,
    // 'The One That Does Not Exist' was 27 characters, the SAME count as the
    // house heading in mission 2, and it was CUT while that one fits. The hub
    // budget is rendered WIDTH, not characters: this title's glyphs (O D N E x s)
    // are wider than that one's (W h i l t B). Measured on a Pixel 6. Shortened
    // well under the ceiling rather than tuned to it.
    title: 'No Such Sentence',
    frSub: 'La phrase impossible',
    layer: 'core',
    terms: ['theImpossible', 'connaitreReach'],
    sheetId: SHEET_ID,
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], wrongThenRight: true, recordingId: 'rec-a2-14-impossible' },
    say: 'One wrong sentence and three right ones. Read the first line and then say the second one out loud twice.',
    examples: [
      { fr: IMPOSSIBLE.wrong, en: 'no such sentence', note: `${IMPOSSIBLE.why} This is the only place in the lesson you will see it written down, and it is here so you recognise it in your own mouth.` },
      { fr: fr('fr.a2.verbes.393'), en: en('fr.a2.verbes.393'), note: 'The same meaning, built correctly. Nothing about what you wanted to say has changed.' },
      { fr: fr('fr.a2.verbes.394'), en: en('fr.a2.verbes.394'), note: 'A different whole sentence hanging off savoir, and it works the same way.' },
      { fr: fr('fr.a2.verbes.408'), en: en('fr.a2.verbes.408'), note: 'And with qu\'. Still savoir, because there is still a whole sentence behind it.' },
    ],
  },

  {
    // THE FAMILY, ONE CARD, NO PRINCIPLE. a2.15 is seq 9 and owns it.
    //
    // AND THE CARD SAYS ONLY WHAT IS TRUE. reconnaître takes the same endings.
    // It does NOT take the same complements: six published sentences put it
    // immediately before `que`, which is the exact shape this lesson has just
    // taught the learner to reject for connaître. Saying "it follows connaître
    // exactly", which is what the brief says, would break the reframe on the
    // screen after the one that established it.
    type: 'cardDeck',
    id: FAMILY_SECTION_ID,
    title: 'One More, And Then Stop',
    frSub: 'La famille',
    hint: 'Two cards.',
    render: 'deck',
    layer: 'core',
    size: 'lg',
    terms: ['theFamily', 'thePlural'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a2-14-family' },
    say: `One extra verb, for recognition. What it can take after it is ${unitRef(FAMILY_UNIT, 'a2')}'s subject and not this lesson's.`,
    cards: [
      {
        label: 'the endings',
        head: 'The same six, three letters longer',
        fr: importedFr(familyId(FAMILY_MEMBER.fr)),
        sub: `[${repairedRespell(familyId(FAMILY_MEMBER.fr))}]`,
        body: `To recognise. Its endings are connaître's, exactly: je reconnais, nous reconnaissons, ils reconnaissent. That is all this lesson claims about it.`,
      },
      {
        label: 'in a sentence',
        head: 'And that is the whole of it',
        fr: fr('fr.a2.verbes.410'),
        sub: sub('fr.a2.verbes.410'),
        body: `${Cap(unitRef(FAMILY_UNIT))} takes this up next and it is worth waiting for, because verbs in a family share their endings without always sharing anything else.`,
      },
    ],
  },

  /* ── Act 5: out loud. FIVE MISSIONS, which the brief asks for by name. ─── */

  {
    // THE SCENARIO. The stairwell, a week later, and every turn requires the
    // learner to have made the choice before they open their mouth.
    type: 'scenario',
    id: NOUS_ON_SECTION_ID,
    title: 'The Landing, A Week On',
    frSub: 'À vous',
    layer: 'core',
    terms: ['theChoice', 'nousOn'],
    // THE ONLY HOME of a2.01's nous/on statement in this lesson, and the batch
    // asserts that it is the only one.
    say: `Back on the landing, and this time you have both verbs. ${NOUS_ON} Every answer wants you to decide before you start the sentence.`,
    setting: 'The same stairwell in Rennes, the following Tuesday. You have met the new neighbour since, and her name is Claire.',
    turns: [
      {
        ai: 'Alors, tu as vu la nouvelle voisine finalement ?',
        en: 'So, did you see the new neighbour in the end?',
        user: 'Oui. Je connais Claire maintenant.',
        userEn: 'Yes. I know Claire now.',
        alts: [
          { fr: 'Oui, je connais Claire.', en: 'Yes, I know Claire.' },
          { fr: 'Oui, on connaît Claire tous les deux.', en: 'Yes, we both know Claire.' },
        ],
      },
      {
        ai: 'Très bien. Et elle travaille où, tu sais ?',
        en: 'Very good. And do you know where she works?',
        user: 'Je sais où elle travaille, oui. À la gare.',
        userEn: 'I know where she works, yes. At the station.',
        alts: [
          { fr: 'Non, je ne sais pas.', en: 'No, I do not know.' },
          { fr: 'Je ne sais pas encore où elle travaille.', en: 'I do not know yet where she works.' },
        ],
      },
      {
        ai: 'Elle m\'a dit qu\'elle nage tous les matins. Tu nages, toi ?',
        en: 'She told me she swims every morning. Do you swim?',
        user: 'Je sais nager, mais je ne peux pas en ce moment.',
        userEn: 'I know how to swim, but I cannot at the moment.',
        alts: [
          { fr: 'Oui, je sais nager depuis longtemps.', en: 'Yes, I have known how to swim for a long time.' },
          { fr: 'Non, je ne sais pas nager.', en: 'No, I do not know how to swim.' },
        ],
      },
      {
        ai: 'Ah bon ? Il y a une piscine dans le quartier, tu la connais ?',
        en: 'Really? There is a pool in the neighbourhood, do you know it?',
        user: 'Je connais ce quartier, mais je ne sais pas où est la piscine.',
        userEn: 'I know this neighbourhood, but I do not know where the pool is.',
        alts: [
          { fr: 'Non, je ne connais pas la piscine.', en: 'No, I do not know the pool.' },
          { fr: 'Je connais la piscine, oui.', en: 'Yes, I know the pool.' },
        ],
      },
      {
        ai: 'Je te montrerai. Tu connais le café à côté aussi ?',
        en: 'I will show you. Do you know the café next door as well?',
        user: 'Non, je ne connais pas encore le café.',
        userEn: 'No, I do not know the café yet.',
        alts: [
          { fr: 'Oui, nous connaissons ce café.', en: 'Yes, we know that café.' },
          { fr: 'Je sais qu\'il est ouvert le dimanche.', en: 'I know that it is open on Sundays.' },
        ],
      },
    ],
  },

  {
    // PRODUCTION AGAINST THE CLOCK. The brief asks for a groupDrill in the
    // production act and this is it: no French on the prompt side, so the
    // learner builds rather than recognises.
    type: 'groupDrill',
    id: 's22-build',
    title: 'Build Them Cold',
    frSub: 'À vous de construire',
    layer: 'core',
    size: 'lg',
    terms: ['theChoice', 'whatFollows'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a2-14-choice' },
    say: 'Three groups. Decide which verb before you look at the card, and then say the whole sentence.',
    groups: [
      {
        label: 'somebody you have met',
        items: ['fr.a2.verbes.399', 'fr.a2.verbes.407', 'fr.a2.verbes.409'].map(rowCard),
        check: {
          q: 'Both of those are about a person. Which verb, and why?',
          opts: ['savoir, because it is about somebody', 'connaître, because the sentence stops on them', 'Either one works', 'connaître, because people are always connaître'],
          correct: 1,
          why: `connaître, and the reason matters: not because it is a person but because the sentence lands on them and finishes. ${REFRAME}`,
        },
      },
      {
        label: 'something you were taught',
        items: ['fr.a2.verbes.381', 'fr.a2.verbes.395', 'fr.a2.verbes.396'].map(rowCard),
        check: {
          q: `« ${noStop(fr('fr.a2.verbes.395'))} » What would change if you used the ${unitRef(CONTRAST_UNIT)} verb instead?`,
          opts: ['Nothing, they are the same', 'It would ask whether you are allowed to cook', 'It would be more polite', 'It would be wrong French'],
          correct: 1,
          why: 'It would ask whether anything is stopping you from cooking, which in somebody else\'s kitchen is a real question and a completely different one.',
        },
      },
      {
        label: 'something you have the information about',
        items: ['fr.a2.verbes.393', 'fr.a2.verbes.397', 'fr.a2.verbes.394'].map(rowCard),
        check: {
          q: 'All three keep going after the verb. What are they keeping going into?',
          opts: ['A name', 'A whole sentence', 'A second verb', 'A question'],
          correct: 1,
          why: `A whole sentence, every time: où elle habite, où est la gare, que c'est loin. Each one has its own subject and its own verb inside it, and only savoir can carry that.`,
        },
      },
    ],
  },

  {
    // THE DICTÉE, AND ITS SHAPE IS DECIDED BY A MEASUREMENT RATHER THAN A CHOICE.
    //
    // dicteeMode() switches to WORD tiles above 16 letters and word mode hands
    // every real word over pre-spelled, so a target over the limit tests
    // nothing. THE CONNAÎTRE PLURAL CANNOT BE DICTATED AT ANY OBJECT LENGTH:
    // `connaissons` is eleven letters before anything follows it, and Paris,
    // Rome, Marie and ce film all put the sentence past twenty.
    //
    // So the dictée is nine targets: the whole savoir column, the connaître
    // singular, one connaître question, and the pouvoir minimal pair. Every one
    // measured LETTERS through the real function. The asymmetry is real and the
    // say line does not pretend otherwise.
    type: 'dictation',
    id: 's23-dictation',
    title: 'Spell What You Heard',
    frSub: 'La dictée',
    layer: 'core',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], maxPlays: 4, recordingId: 'rec-a2-14-grid' },
    say: `${DICTATION_IDS.length} lines. The verb sounds the same in three persons of each, so read the pronoun before you start typing.`,
    itemIds: DICTATION_IDS,
  },

  {
    type: 'practice',
    id: 's24-speak',
    title: 'Say All Of Them',
    frSub: 'À voix haute',
    layer: 'core',
    audio: { mode: 'mic', lang: 'fr-FR' },
    say: 'Say the whole sentence. On the first three of each verb the pronoun is carrying all the information, so do not swallow it.',
    skill: 'speak',
    itemIds: SPEAK_IDS,
  },

  {
    type: 'reviewDeck',
    id: 's25-review',
    title: 'The Whole Thing, One Deck',
    frSub: 'Révision',
    render: 'deck',
    layer: 'core',
    terms: ['theChoice', 'whatFollows', 'theThirdVerb'],
    sheetId: SHEET_ID,
    say: 'Rate each card objectively. Again, hard, or easy. The ones you mark again come back.',
    cards: [
      { front: 'Which verb, and how do you decide?', back: REFRAME },
      ...VERB_ORDER.map((v) => ({
        front: `The six forms of ${v}`,
        back: PARADIGM.map((r) => r.forms[v]).join(' · '),
      })),
      { front: 'What goes after savoir?', back: COMPLEMENTS.savoir.takes },
      { front: 'What goes after connaître?', back: COMPLEMENTS.connaître.takes },
      { front: 'Why is the pronoun never optional?', back: SINGULAR_CLAIM },
      { front: 'I know how to swim', back: fr('fr.a2.verbes.381'), say: fr('fr.a2.verbes.381') },
      { front: 'I can swim, and nobody taught me anything', back: fr('fr.a2.verbes.403'), say: fr('fr.a2.verbes.403') },
      { front: 'I know Paris', back: fr('fr.a2.verbes.387'), say: fr('fr.a2.verbes.387') },
      { front: 'I know where she lives', back: fr('fr.a2.verbes.393'), say: fr('fr.a2.verbes.393') },
      { front: 'Do you know Marie?', back: fr('fr.a2.verbes.399'), say: fr('fr.a2.verbes.399') },
      { front: 'Do you know where the station is?', back: fr('fr.a2.verbes.397'), say: fr('fr.a2.verbes.397') },
      { front: 'We know this restaurant', back: fr('fr.a2.verbes.400'), say: fr('fr.a2.verbes.400') },
      { front: 'The sentence that does not exist', back: `${IMPOSSIBLE.wrong} Say « ${IMPOSSIBLE.right} » instead.` },
      { front: `Which form carries the accent?`, back: `Only ${PARADIGM[2].forms.connaître}, and it is silent.` },
      { front: `What does ${FAMILY_MEMBER.fr} share with connaître?`, back: `Its endings, and this lesson claims nothing else. ${Cap(unitRef(FAMILY_UNIT))} takes it up.` },
    ],
  },

  /* ── Act 6: prove it ───────────────────────────────────────────────────── */

  {
    type: 'progressCheck',
    id: 's26-progress',
    title: 'Where You Stand',
    frSub: 'Votre progression',
    say: 'One screen before the exam, so you know what you are walking into.',
    // The prose deliberately carries no counts. Every figure on this card is
    // derived below; typing one here as well would be two chances to be wrong on
    // one screen.
    body: `You have two verbs where English gave you one word, and every ending on both of them is one you already write. That was the short half. The long half is the question you now run before you open your mouth: ${REFRAME} You have used it on a place that takes savoir and on a place that takes connaître, which is the pair no semantic rule survives. What is left is the part that says whether it stuck. Each round is tied to one of the mistakes this lesson exists to stop, and failing a round gets you its drill before the next one starts. The drill is the teaching, not the punishment.`,
    // Filled immediately after SECTIONS is built, from the journey itself.
    stats: [],
  },

  {
    type: 'quiz',
    id: QUIZ_SECTION_ID,
    title: 'The Exam',
    frSub: "L'examen",
    layer: 'core',
    passMark: 70,
    roundFailThreshold: 60,
    say: 'Six rounds. Miss too many in a round and you get a drill before the next one starts.',
    rounds: [
      {
        id: 'r1-which-verb',
        label: 'Which of the two',
        // Round targets are ordered deliberately. drillForRound returns the
        // FIRST target that has a drill and then stops, so the first name here
        // is what a failing learner actually gets. Every round leads on a
        // DIFFERENT trigger, which is what makes all six drills reachable.
        targets: ['err-wrong-verb', 'err-clause-after-it'],
        say: 'The situation is in the question. Read it, decide, then answer.',
        questions: [
          {
            q: 'You met Marie at a party last year. Which verb?',
            format: 'mcq',
            opts: ['Je sais Marie.', 'Je peux Marie.', 'It depends how well you know her', 'Je connais Marie.'],
            correct: 3,
            why: 'A person, and the sentence stops on her. connaître. « Je sais Marie. » is not a sentence in French.',
            ref: SITUATIONS_SECTION_ID,
          },
          {
            q: 'Somebody taught you to swim when you were six. Which verb?',
            format: 'mcq',
            opts: ['connaître', 'savoir', 'pouvoir', 'Any of them'],
            correct: 1,
            why: `savoir. A verb follows and the sentence keeps going. ${REFRAME}`,
            ref: NEXT_SECTION_ID,
          },
          {
            q: 'Je ___ nager. (you were taught, years ago)',
            format: 'typeIn',
            accept: ['sais', 'je sais'],
            answer: 'sais',
            why: 'Having learned is savoir, every time. The other verb would say the pool is open.',
            ref: POUVOIR_SECTION_ID,
          },
          {
            q: 'Tu ___ Paris ? (have you been there)',
            format: 'typeIn',
            accept: ['connais', 'tu connais'],
            answer: 'connais',
            why: 'A name follows and it is the last thing in the sentence, so connaître.',
            ref: GRID_SECTION_ID,
          },
          {
            q: 'Which of these four is not a French sentence?',
            format: 'mcq',
            opts: [fr('fr.a2.verbes.393'), fr('fr.a2.verbes.387'), IMPOSSIBLE.wrong, fr('fr.a2.verbes.394')],
            correct: 2,
            why: `${IMPOSSIBLE.why} The other three are all correct and two of them are about the same kind of thing.`,
            ref: IMPOSSIBLE_SECTION_ID,
          },
          {
            q: 'Fix this. « Je connais où il habite. »',
            format: 'errorSpot',
            accept: ['Je sais où il habite', 'sais'],
            answer: IMPOSSIBLE.right,
            why: `${IMPOSSIBLE.why} Nothing about what you wanted to say changes; only the verb does.`,
            ref: IMPOSSIBLE_SECTION_ID,
          },
        ],
      },
      {
        id: 'r2-the-forms',
        label: 'The twelve cells',
        targets: ['err-double-s', 'err-wrong-verb'],
        say: 'Both verbs, in writing. The double s is the only thing here that is not already yours.',
        questions: [
          {
            q: 'Nous ___ Paris. (connaître)',
            format: 'typeIn',
            accept: ['connaissons', 'nous connaissons'],
            answer: 'connaissons',
            why: `The double s arrives with nous and the ending is the ordinary -ons from ${unitRef('a2.01')}.`,
            ref: 's07-second-verb',
          },
          {
            q: 'Ils ___ nager. (savoir)',
            format: 'typeIn',
            accept: ['savent', 'ils savent'],
            answer: 'savent',
            why: `savoir gets shorter in the plural where connaître grows. The -ent is silent, as it has been since ${unitRef('a2.01')}.`,
            ref: 's06-savoir',
          },
          {
            q: 'Vous ___ cette chanson ? (connaître)',
            format: 'typeIn',
            accept: ['connaissez', 'vous connaissez'],
            answer: 'connaissez',
            why: 'Double s, then the ordinary -ez. Two s and not one, and you can hear the difference when you say it.',
            ref: 's07-second-verb',
          },
          {
            q: 'Which of these is spelled correctly?',
            format: 'mcq',
            opts: ['Il connait Paris.', 'Il connaîs Paris.', 'Il connais Paris.', 'Il connaît Paris.'],
            correct: 3,
            why: `The accent goes on the i of ${PARADIGM[2].forms.connaître} and the ending is -t. No other form of either verb carries it, and every one of the ${CIRCUMFLEX.measured.withCircumflex} places this word appears in the app spells it that way.`,
            ref: 's07-second-verb',
          },
          {
            q: 'Fix this. « Nous connaisons ce restaurant. »',
            format: 'errorSpot',
            accept: ['Nous connaissons ce restaurant', 'connaissons'],
            answer: fr('fr.a2.verbes.400'),
            why: 'Two s. It arrives with nous and it stays for vous and ils as well.',
            ref: 's07-second-verb',
          },
          {
            q: 'Nous ___ nager. (savoir)',
            format: 'typeIn',
            accept: ['savons', 'nous savons'],
            answer: 'savons',
            why: 'The stem goes to sav- and takes the -ons. Nothing about this form is irregular.',
            ref: 's06-savoir',
          },
        ],
      },
      {
        id: 'r3-what-follows',
        label: 'What comes next',
        targets: ['err-clause-after-it', 'err-wrong-verb'],
        say: 'Every one of these turns on the word directly after the verb. Nothing else.',
        questions: [
          {
            q: 'Je ___ où elle habite. (which verb)',
            format: 'typeIn',
            accept: ['sais', 'je sais'],
            answer: 'sais',
            why: 'It is about a place and it takes savoir, because a whole sentence follows. What comes next decides, and not what it is about.',
            ref: PLACE_SECTION_ID,
          },
          {
            q: 'Which of these can follow connaître?',
            format: 'mcq',
            opts: ['que c\'est loin', 'où elle habite', 'ce quartier', 'si tu viens'],
            correct: 2,
            why: 'Only the third is a thing. The other three are whole sentences and connaître cannot carry one.',
            ref: NEXT_SECTION_ID,
          },
          {
            q: 'Vous ___ où est la gare ? (which verb)',
            format: 'typeIn',
            accept: ['savez', 'vous savez'],
            answer: 'savez',
            why: 'A whole sentence follows, so savoir. This is the version of the question you will actually ask a stranger.',
            ref: PLACE_SECTION_ID,
          },
          {
            q: `Fix this. « ${IMPOSSIBLE_PLURAL.wrong} »`,
            format: 'errorSpot',
            accept: [noStop(IMPOSSIBLE_PLURAL.right), 'savons'],
            answer: IMPOSSIBLE_PLURAL.right,
            why: 'A whole sentence follows que, so it cannot be connaître. Same mistake as the first round, in the plural and with a fact instead of a place.',
            ref: IMPOSSIBLE_SECTION_ID,
          },
          {
            q: 'Il ___ bien la ville. (which verb)',
            format: 'typeIn',
            accept: ['connaît', 'il connaît', 'connait', 'il connait'],
            answer: 'connaît',
            why: 'The sentence lands on la ville and stops. bien slides in before the thing and changes nothing about the shape.',
            ref: PLACE_SECTION_ID,
          },
          {
            q: 'Which pair is about the same neighbourhood and still needs two different verbs?',
            format: 'mcq',
            opts: [
              `${noStop(fr('fr.a2.verbes.387'))} / ${noStop(fr('fr.a2.verbes.388'))}`,
              `${noStop(fr('fr.a2.verbes.398'))} / ${noStop(fr('fr.a2.verbes.397'))}`,
              `${noStop(fr('fr.a2.verbes.381'))} / ${noStop(fr('fr.a2.verbes.382'))}`,
              `${noStop(fr('fr.a2.verbes.399'))} / ${noStop(fr('fr.a2.verbes.407'))}`,
            ],
            correct: 1,
            why: 'The second. One stops on the neighbourhood and the other keeps going into where the station is, and that is what picks the verb.',
            ref: 's12-both',
          },
        ],
      },
      {
        id: 'r4-the-third',
        label: 'And the third verb',
        targets: ['err-savoir-pouvoir', 'err-wrong-verb'],
        say: `${Cap(unitRef(CONTRAST_UNIT, 'a2'))}'s verb is back, and English turns it into the same word as one of yours.`,
        questions: [
          {
            q: 'You learned to drive ten years ago and your car is in the garage today. Which is true?',
            format: 'mcq',
            opts: [
              'Je sais conduire, mais je ne peux pas.',
              'Je peux conduire, mais je ne sais pas.',
              'Je connais conduire.',
              'Je sais conduire et je peux conduire.',
            ],
            correct: 0,
            why: 'You were taught, so sais. Nothing about the lesson has changed; what has changed is whether anything is in the way today.',
            ref: POUVOIR_SECTION_ID,
          },
          {
            q: 'Je ___ nager. (there is a lifeguard and the pool is open)',
            format: 'typeIn',
            accept: ['peux', 'je peux'],
            answer: 'peux',
            why: `Nothing is stopping you, which is ${unitRef(CONTRAST_UNIT, 'a2')}'s verb. It says nothing about whether anybody taught you.`,
            ref: TRAP_SECTION_ID,
          },
          {
            q: 'On ___ nager ici. (swimming is allowed)',
            format: 'typeIn',
            accept: ['peut', 'on peut'],
            answer: 'peut',
            why: `Allowed, so it is the ${unitRef(CONTRAST_UNIT)} verb, and on takes the il form rather than one of its own.`,
            ref: TRAP_SECTION_ID,
          },
          {
            q: 'Listen. Which one did you hear?',
            format: 'listenChoose',
            // THE ONLY listenChoose IN THE LESSON. sais and peux are genuinely
            // different sounds; sais against sait would have no correct answer
            // and marking one right would certify a bug.
            opts: [fr('fr.a2.verbes.381'), fr('fr.a2.verbes.403')],
            correct: 0,
            // `say` is the line the learner HEARS. Without it ListenChooseCard
            // falls back to speaking opts[correct], which speaks the answer.
            // a1.25 shipped two questions with the fallback and neither worked.
            say: fr('fr.a2.verbes.381'),
            why: 'SEH against PUH. These two are easy to separate by ear, which is not true of any two persons of the same verb.',
            ref: 's15-listening',
          },
          {
            q: 'Which of these three verbs can be followed by a bare name like Marie?',
            format: 'mcq',
            opts: ['savoir', 'pouvoir', 'connaître', 'All three'],
            correct: 2,
            why: 'Only connaître. The other two both want something that keeps going, which is why neither can take a person on its own.',
            ref: TRAP_SECTION_ID,
          },
          {
            q: 'Fix this. « Je peux nager depuis l\'âge de six ans. »',
            format: 'errorSpot',
            accept: ['Je sais nager depuis l\'âge de six ans', 'sais'],
            answer: 'Je sais nager depuis l\'âge de six ans.',
            why: 'Since the age of six is about having learned, so it is savoir. The other verb would say nothing has been in your way for twenty years, which is not what anybody means.',
            ref: POUVOIR_SECTION_ID,
          },
        ],
      },
      {
        id: 'r5-out-loud',
        label: 'Saying it',
        targets: ['err-swallowed-pronoun', 'err-double-s'],
        say: 'Three persons of each verb are one sound. The pronoun is doing all the work.',
        questions: [
          {
            q: `In « ${noStop(fr('fr.a2.verbes.381'))} », « ${noStop(fr('fr.a2.verbes.382'))} » and « ${noStop(fr('fr.a2.verbes.383'))} », what separates the three?`,
            format: 'mcq',
            opts: ['The verb', 'The word in front of it', 'The stress', 'Nothing does'],
            correct: 1,
            why: SINGULAR_CLAIM,
            ref: 's15-listening',
          },
          {
            q: `Which two words in this lesson are spelled differently and said identically?`,
            format: 'mcq',
            opts: ['savons and savez', 'connais and connaissons', 'nager and Paris', 'sais and sait'],
            correct: 3,
            why: 'sais and sait, and connais and connaît do the same thing. Two spellings, one sound, and the ear will not save you.',
            ref: 's15-listening',
          },
          {
            q: 'Say it: I know how to swim.',
            format: 'speak',
            target: fr('fr.a2.verbes.381'),
            scoreSegment: PARADIGM[0].forms.savoir,
            answer: fr('fr.a2.verbes.381'),
            why: 'Three words. Do not swallow the je, because it is the only thing telling anybody which person you mean.',
            ref: 's24-speak',
          },
          {
            q: 'Tap the letters you do NOT say.',
            format: 'tapSilent',
            word: PARADIGM[5].forms.savoir,
            correct: 'ent',
            why: `The -ent, exactly as it has been silent on every verb since ${unitRef('a2.01')}. What you do hear is the v in front of it, arriving at the end of the verb.`,
            ref: 's06-savoir',
          },
          {
            q: 'And here?',
            format: 'tapSilent',
            word: PARADIGM[5].forms.connaître,
            correct: 'ent',
            why: 'The same silent -ent. What you hear at the end of this one is the double s, and that is the only thing separating it from the singular by ear.',
            ref: 's07-second-verb',
          },
          {
            q: 'Ils ___ Paris. (connaître)',
            format: 'typeIn',
            accept: ['connaissent', 'ils connaissent'],
            answer: 'connaissent',
            why: 'Double s, silent -ent. What you hear at the end of the verb is the s, and that is the only thing separating it from the singular by ear.',
            ref: 's07-second-verb',
          },
        ],
      },
      {
        id: 'r6-in-the-world',
        label: 'Out in the world',
        targets: ['err-answered-wrong-question', 'err-savoir-pouvoir'],
        say: 'The last round is the stairwell. Nothing here is a trick and all of it is the choice.',
        questions: [
          {
            q: `Somebody asks « ${noStop(fr('fr.a2.verbes.407'))} » and you have never met her. What do you say?`,
            format: 'mcq',
            opts: [
              noStop(fr('fr.a2.verbes.409')),
              noStop(fr('fr.a2.verbes.408')),
              'Oui, je sais.',
              'Non, je ne sais pas.',
            ],
            correct: 0,
            why: 'They asked whether you have met her, so the answer uses their verb. The other three all answer a question about information, and the last two are how the conversation in the scene went wrong.',
            ref: 's01-scene',
          },
          {
            q: 'Tu ___ ce restaurant ? (have you eaten there)',
            format: 'typeIn',
            accept: ['connais', 'tu connais'],
            answer: 'connais',
            why: 'A place you have been inside. The sentence stops on it, so connaître.',
            ref: 's13-things',
          },
          {
            q: 'Je ne ___ pas. (you have no idea, and it is the commonest sentence in the lesson)',
            format: 'typeIn',
            accept: ['sais', 'je ne sais pas'],
            answer: 'sais',
            why: 'savoir, and this one has nothing after it at all. It is worth learning whole, because you will say it more often than any other sentence here.',
            ref: EVIDENCE_SECTION_ID,
          },
          {
            q: 'Which of these two would you say to somebody who just asked where you learned French?',
            format: 'mcq',
            opts: [
              'Je connais bien le français.',
              'Je sais parler français.',
              'Je peux parler français.',
              'Any of the three',
            ],
            correct: 1,
            why: 'You were taught, so savoir and a verb behind it. The first says you are acquainted with the language, which is a thing a linguist says about a language they study.',
            ref: 's10-skill',
          },
          {
            q: 'Fix this. « Tu sais mon frère ? »',
            format: 'errorSpot',
            accept: ['Tu connais mon frère', 'connais'],
            answer: 'Tu connais mon frère ?',
            why: 'A person on his own after the verb, so the sentence stops there and it has to be connaître.',
            ref: 's13-things',
          },
          {
            q: `What does « ${CHROME_DECISION.roundupHeading} » at the top of the next screen mean?`,
            format: 'mcq',
            opts: [
              'The things you are acquainted with',
              'What you know how to do',
              'The people you have met',
              'What you will learn',
            ],
            correct: 1,
            why: `savoir followed by a verb: what you know how to do. It has been at the top of the last screen of every lesson you have finished, and this is the first one where you could read it.`,
            ref: ROUNDUP_SECTION_ID,
          },
        ],
      },
    ],
  },

  {
    type: 'roundup',
    id: ROUNDUP_SECTION_ID,
    title: 'What You Can Do Now',
    // THE HOUSE HEADING, SHIPPED, AND NAMED. See CHROME_DECISION. a2.13 replaced
    // this string with a pouvoir version to stay clear of this lesson; 34 of the
    // 49 lessons in the seed use it, and it is savoir followed by a verb, which
    // is this lesson's own headline structure sitting unexplained on a screen
    // the learner has read thirty-four times.
    frSub: CHROME_DECISION.roundupHeading,
    say: 'Four things, and then read the two words at the top of this screen again.',
    body: `You have two verbs where English gave you one, and one question that picks between them: ${REFRAME} You used it on a place that takes savoir and a place that takes connaître, which is the pair that no rule about meaning survives. You know that the third verb from ${unitRef(CONTRAST_UNIT)} turns into the same English word and means something else again, and that « ${IMPOSSIBLE.wrong} » is not clumsy French but no French at all. And the heading at the top of this screen, « ${CHROME_DECISION.roundupHeading} », has been there at the end of every lesson you have finished. It is savoir with a verb behind it: what you know how to do. Nobody explained it before because there was nothing to explain it with. ${Cap(unitRef(FAMILY_UNIT))} is next, and it takes the family this lesson only pointed at.`,
    points: [
      REFRAME,
      THE_TEST,
      `${IMPOSSIBLE.wrong} is not a sentence. ${IMPOSSIBLE.right} is.`,
      SINGULAR_CLAIM,
    ],
  },
];

/* ─── The progress card counts the journey rather than restating it ────────
 *
 * Derived here rather than typed. It throws rather than degrades: a progress
 * card that silently reports "0 of 0" is worse than a build that stops.       */
{
  const ix = SECTIONS.findIndex((s) => (s as { id?: string }).id === 's26-progress');
  const card = SECTIONS[ix];
  const quiz = SECTIONS.find((s) => s.type === 'quiz');
  if (!card || card.type !== 'progressCheck' || !quiz || quiz.type !== 'quiz') {
    throw new Error('a2.14.l1: the progress card or the quiz is missing, so the card cannot count what is not there');
  }
  card.stats = [
    { k: 'Forms learned', v: String(PARADIGM.length * VERB_ORDER.length) },
    { k: 'New endings', v: '0 of 6' },
    // `ix` is the count of sections BEFORE this one, which is exactly how many
    // missions the learner has finished when they reach it.
    { k: 'Missions done', v: `${ix} of ${SECTIONS.length}` },
    { k: 'Exam rounds ahead', v: String(quiz.rounds?.length ?? 0) },
  ];
}

/* ─── Acts ─────────────────────────────────────────────────────────────────
 *
 * SIX, and the shape of them is the argument of the lesson.
 *
 * THE PARADIGM ACT IS THE SMALLEST IN THE BATCH AND THE OWNS ACT IS THE
 * LARGEST. Four missions on twelve cells, eight on the choice, and five on
 * production. If the paradigm act were the heavier one this would be a lesson
 * about two conjugations, and two conjugations do not need a lesson.
 *
 * The production act is five missions, which is more than any other lesson in
 * batch 1, and the brief asks for exactly that: "Because there are only two
 * paradigms, you have room for more production than any other lesson in batch 1.
 * Use it. scenario, groupDrill, and a dictée." All three are there, plus the
 * speak deck and the review deck.
 *
 * `estScreens` is what the mission actually costs, not a guess rounded to a nice
 * number, because it is divided by the rest points to check no stretch runs past
 * the checkpoint-spacing limit of 22.                                          */

const ACTS: LessonAct[] = [
  {
    id: 'act1',
    title: 'One word in English, two in French',
    sections: ['s01-scene', GOALS_SECTION_ID, 's03-two'],
    milestone: 'You know what it costs to pick the wrong one of two correct words, and you have the question that picks.',
    estScreens: 19,
    restPoints: ['s01-scene/after-break'],
  },
  {
    id: 'act2',
    title: 'Two verbs, twelve cells',
    sections: [GRID_SECTION_ID, SITUATIONS_SECTION_ID, 's06-savoir', 's07-second-verb'],
    milestone: 'You can build both verbs in all six persons, and every ending on them was already yours.',
    estScreens: 26,
    restPoints: [`${GRID_SECTION_ID}/halfway`],
  },
  {
    id: 'act3',
    title: 'What comes next decides',
    sections: [NEXT_SECTION_ID, 's09-sort', 's10-skill', PLACE_SECTION_ID, 's12-both', 's13-things', EVIDENCE_SECTION_ID, 's15-listening'],
    milestone: 'You picked the right verb for a place, twice, in two directions, and the places had nothing to do with it.',
    estScreens: 48,
    restPoints: ['s09-sort/halfway', `${PLACE_SECTION_ID}/after`, 's13-things/after'],
  },
  {
    id: 'act4',
    title: 'The third verb, and the one that does not exist',
    sections: [POUVOIR_SECTION_ID, TRAP_SECTION_ID, 's18-errors', IMPOSSIBLE_SECTION_ID, FAMILY_SECTION_ID],
    milestone: 'You can tell having learned from being allowed from having met, and you will not build the impossible sentence.',
    estScreens: 34,
    restPoints: [`${TRAP_SECTION_ID}/after-cards`, 's18-errors/after'],
  },
  {
    id: 'act5',
    title: 'Out loud',
    sections: [NOUS_ON_SECTION_ID, 's22-build', 's23-dictation', 's24-speak', 's25-review'],
    milestone: 'You held a conversation in which every single turn required the choice, and you made it before you spoke.',
    estScreens: 40,
    restPoints: [`${NOUS_ON_SECTION_ID}/after`, 's23-dictation/halfway'],
  },
  {
    id: 'act6',
    title: 'Prove it',
    sections: ['s26-progress', QUIZ_SECTION_ID, ROUNDUP_SECTION_ID],
    milestone: `Thirty-six questions, and the last one is the heading you have been reading since ${unitRef('a1.01')}.`,
    estScreens: 42,
    restPoints: [`${QUIZ_SECTION_ID}/r3-what-follows`],
  },
];

/* ─── Deck tranches ────────────────────────────────────────────────────────
 *
 * A tranche releases items into spaced repetition at the END of an act, and
 * nothing may be released before the act that puts it on a screen.            */

const DECK_TRANCHE: string[][] = [
  // Act 1 releases NOTHING. The scene runs on the three scene rows, which act 5
  // releases when the scenario returns to them.
  [],
  // Act 2: the two naming forms, the connaître frame, and all twelve cells.
  //
  // `nager` IS NOT HERE. Act 2's cards carry it inside their sentences and the
  // ROW itself is first drawn in s10-skill, in act 3. A tranche that releases a
  // row before the act that puts it on a screen hands the learner a card for a
  // word they have not met, and the batch checks for it.
  [verbId('savoir'), verbId('connaître'), frameId(FRAMES.connaître.complement), ...PARADIGM_IDS],
  // Act 3: the frame verb, the two skill verbs, savoir's reach, connaître's
  // reach, and the four published evidence rows.
  [
    frameId(FRAMES.savoir.complement),
    ...SKILL_VERBS.map((v) => skillId(v)),
    'fr.a2.verbes.393', 'fr.a2.verbes.394', 'fr.a2.verbes.395', 'fr.a2.verbes.396', 'fr.a2.verbes.397',
    'fr.a2.verbes.398', 'fr.a2.verbes.399', 'fr.a2.verbes.400', 'fr.a2.verbes.401', 'fr.a2.verbes.402',
    ...EVIDENCE_IDS,
  ],
  // Act 4: pouvoir's naming form, the three-way rows, and the family member.
  [
    frameId('pouvoir'),
    'fr.a2.verbes.403', 'fr.a2.verbes.404', 'fr.a2.verbes.405', 'fr.a2.verbes.406',
    familyId(FAMILY_MEMBER.fr), 'fr.a2.verbes.410',
  ],
  // Act 5: the three scene rows, which the scenario has just used again.
  ['fr.a2.verbes.407', 'fr.a2.verbes.408', 'fr.a2.verbes.409'],
  [],
];

/* ─── Error triggers and their drills ──────────────────────────────────────
 *
 * SIX triggers, six drills, six rounds, and each round leads on a DIFFERENT
 * trigger. `drillForRound` returns the first target that has a drill and then
 * stops, so a drill that is never named first can never fire. a1.05 ships two
 * such drills and its own test fails on them today.                            */

const ERROR_TRIGGERS: ErrorTrigger[] = [
  {
    id: 'err-wrong-verb',
    description: 'Picks by what the sentence is about rather than by what follows the verb: connaître for anything involving a person or a place, savoir for anything involving a fact. It works most of the time and fails on exactly the sentences a learner needs.',
    detectOn: [SITUATIONS_SECTION_ID, NEXT_SECTION_ID, `${QUIZ_SECTION_ID}/r1-which-verb`],
    drill: 'drill-which-verb',
    retest: 'retest-which-verb',
  },
  {
    id: 'err-clause-after-it',
    description: 'Builds « Je connais où il habite. » by translating word for word out of English. It is not a clumsy sentence, it is not a sentence, and no amount of choosing the right verb from a list stops a learner producing it under pressure.',
    detectOn: [IMPOSSIBLE_SECTION_ID, PLACE_SECTION_ID, `${QUIZ_SECTION_ID}/r3-what-follows`],
    drill: 'drill-impossible',
    retest: 'retest-impossible',
  },
  {
    id: 'err-double-s',
    description: 'Writes connaisons, connaisez or connaisent with one s. The double s arrives with nous and stays for all three plural forms, and it is audible, so the mistake is written rather than spoken.',
    detectOn: ['s07-second-verb', 's18-errors', `${QUIZ_SECTION_ID}/r2-the-forms`],
    drill: 'drill-double-s',
    retest: 'retest-double-s',
  },
  {
    id: 'err-savoir-pouvoir',
    description: `Uses the ${unitRef('a2.13')} verb where the sentence is about having been taught. English gives can for both, so the reflex is strong and the resulting sentence is grammatical and says something else.`,
    detectOn: [POUVOIR_SECTION_ID, TRAP_SECTION_ID, `${QUIZ_SECTION_ID}/r4-the-third`],
    drill: 'drill-third-verb',
    retest: 'retest-third-verb',
  },
  {
    id: 'err-swallowed-pronoun',
    description: 'Drops or slurs the pronoun on the singular forms, where three persons are one sound and the pronoun is carrying all of the information. Nothing in the verb recovers it.',
    detectOn: ['s15-listening', 's24-speak', `${QUIZ_SECTION_ID}/r5-out-loud`],
    drill: 'drill-pronoun',
    retest: 'retest-pronoun',
  },
  {
    id: 'err-answered-wrong-question',
    description: 'Answers a connaître question with savoir or the reverse. Both sentences are correct, neither is corrected, and the conversation continues on a false footing until somebody acts on what they heard.',
    detectOn: ['s01-scene', NOUS_ON_SECTION_ID, `${QUIZ_SECTION_ID}/r6-in-the-world`],
    drill: 'drill-answering',
    retest: 'retest-answering',
  },
];

const DRILLS: LessonDrill[] = [
  {
    id: 'drill-which-verb',
    title: 'Which one, by what follows',
    format: 'sort',
    buckets: ['savoir', 'connaître'],
    // Item ids, not display strings: a drill scores against the corpus, so it
    // plays the same audio and reads the same spelling as every other card that
    // teaches these. Passing display strings here validates as broken ids.
    items: ['fr.a2.verbes.381', 'fr.a2.verbes.387', 'fr.a2.verbes.393', 'fr.a2.verbes.398', 'fr.a2.verbes.395', 'fr.a2.verbes.399'],
    coach: 'Do not read the meaning. Read the word after the verb and sort on that alone.',
  },
  {
    id: 'retest-which-verb',
    title: 'One more time',
    format: 'mcq',
    q: 'Tu ___ Marie ?',
    opts: ['sais', 'connais', 'peux'],
    correct: 1,
    why: `A name follows and the sentence stops there. ${REFRAME}`,
  },
  {
    id: 'drill-impossible',
    title: 'The sentence that does not exist',
    format: 'flashcard',
    coach: 'An English sentence on the left. Say the French before you turn the card, and notice which verb your mouth reaches for first.',
    pairs: [
      ['I know where she lives', fr('fr.a2.verbes.393')],
      ['I know it is far', fr('fr.a2.verbes.394')],
      ['Do you know where the station is?', fr('fr.a2.verbes.397')],
      ['I know this neighbourhood', fr('fr.a2.verbes.398')],
      ['I know Paris', fr('fr.a2.verbes.387')],
    ],
  },
  {
    id: 'retest-impossible',
    title: 'One more time',
    format: 'mcq',
    q: 'Je ___ où il habite.',
    opts: ['connais', 'sais', 'peux'],
    correct: 1,
    why: IMPOSSIBLE.why,
  },
  {
    id: 'drill-double-s',
    title: 'Where the double s goes',
    format: 'flashcard',
    coach: 'A person on the left. Say the connaître form before you turn the card, and count the s.',
    pairs: PARADIGM.map((r) => [r.person, r.forms.connaître] as [string, string]),
  },
  {
    id: 'retest-double-s',
    title: 'One more time',
    format: 'mcq',
    q: 'Nous ___ ce restaurant.',
    opts: ['connaisons', 'connaissons', 'connaissont'],
    correct: 1,
    why: 'Two s, then the ordinary -ons. It arrives with nous and stays for vous and ils.',
  },
  {
    id: 'drill-third-verb',
    title: 'Learned, or allowed',
    format: 'sort',
    buckets: ['somebody taught me', 'nothing is stopping me'],
    items: ['fr.a2.verbes.381', 'fr.a2.verbes.403', 'fr.a2.verbes.396', 'fr.a2.verbes.404'],
    coach: 'English says can for all four. Ask which of the two things is actually being claimed.',
  },
  {
    id: 'retest-third-verb',
    title: 'One more time',
    format: 'mcq',
    q: 'Somebody taught you to swim. Je ___ nager.',
    opts: ['peux', 'sais', 'connais'],
    correct: 1,
    why: `Having learned is savoir. ${Cap(unitRef(CONTRAST_UNIT, 'a2'))}'s verb would say the pool is open.`,
  },
  {
    id: 'drill-pronoun',
    title: 'The pronoun is the information',
    format: 'flashcard',
    coach: 'A person on the left. Say the whole sentence, and give the pronoun its full weight, because nothing in the verb will tell anybody which one you meant.',
    pairs: [
      ['je, savoir', fr('fr.a2.verbes.381')],
      ['tu, savoir', fr('fr.a2.verbes.382')],
      ['il, savoir', fr('fr.a2.verbes.383')],
      ['je, connaître', fr('fr.a2.verbes.387')],
      ['il, connaître', fr('fr.a2.verbes.389')],
    ],
  },
  {
    id: 'retest-pronoun',
    title: 'One more time',
    format: 'mcq',
    q: 'sais, sais and sait. What separates the three when spoken?',
    opts: ['The vowel', 'The word in front', 'The final consonant', 'Nothing at all'],
    correct: 1,
    why: SINGULAR_CLAIM,
  },
  {
    id: 'drill-answering',
    title: 'Answering the question you were asked',
    format: 'flashcard',
    coach: 'A question on the left. Answer it with the verb it used, and then check what the other verb would have said instead.',
    pairs: [
      [noStop(fr('fr.a2.verbes.407')), noStop(fr('fr.a2.verbes.409'))],
      ['Tu connais Paris ?', noStop(fr('fr.a2.verbes.387'))],
      ['Tu sais nager ?', noStop(fr('fr.a2.verbes.381'))],
      ['Vous savez où est la gare ?', 'Non, je ne sais pas.'],
    ],
  },
  {
    id: 'retest-answering',
    title: 'One more time',
    format: 'mcq',
    q: `« ${noStop(fr('fr.a2.verbes.407'))} » Which answer says you have met her?`,
    opts: [noStop(fr('fr.a2.verbes.408')), noStop(fr('fr.a2.verbes.409')), 'Oui, je sais.'],
    correct: 1,
    why: 'The second, and it uses the verb the question used. The other two say you have heard about her.',
  },
];

/* ─── The reference sheet ──────────────────────────────────────────────────
 *
 * ONE SHEET. A sheetId resolves ONLY inside the lesson that declares it
 * (schema.ts:3490, lesson-contract.test.ts:91), so cross-lesson sheets do not
 * exist and a2.11 established that at a price.
 *
 * The density validator refuses a `table` at layer 'core' outright, so the full
 * grid lives here at layer 'deep' where density is deliberately fine.
 *
 * ReferenceSheet.tsx draws `teach`, `letterGrid` and `table` and NOTHING ELSE. A
 * `cheatSheet` in here would draw its title and no rows, which a1.13 ships
 * today. The batch refuses any other section type in a sheet.
 *
 * WHAT THIS SHEET HOLDS THAT NO EARLIER ONE COULD: a2.11's precedent is that a
 * sheet has to justify itself against the sheets before it. Every reference
 * sheet in this band lists ENDINGS. This one lists a DECISION TABLE — what may
 * follow each verb, with a worked example of each shape — which is a thing no
 * paradigm sheet in the level has needed, because no lesson before this one made
 * the learner choose between two verbs.                                        */

const SHEETS: ReferenceSheet[] = [
  {
    id: SHEET_ID,
    title: 'Two verbs, and the question that picks between them',
    layer: 'deep',
    contains: ['What may follow each verb', 'Both verbs, every person, side by side', 'The third verb, and what it is not'],
    sections: [
      {
        // THE TABLE THIS SHEET EXISTS FOR, and it is not a paradigm.
        type: 'table',
        id: 'sheet-decision',
        title: 'What may come next, and what it means',
        layer: 'deep',
        cols: ['After the verb', 'Which verb', 'Example', 'What it claims'],
        rows: [
          ['a verb', 'savoir', fr('fr.a2.verbes.381'), 'somebody taught you'],
          ['a whole sentence', 'savoir', fr('fr.a2.verbes.393'), 'you have the information'],
          ['nothing at all', 'savoir', 'Je ne sais pas.', 'you have no idea'],
          ['a person', 'connaître', fr('fr.a2.verbes.399'), 'you have met them'],
          ['a place', 'connaître', fr('fr.a2.verbes.387'), 'you have been there'],
          ['a thing', 'connaître', fr('fr.a2.verbes.402'), 'you would recognise it'],
          ['a verb, but allowed', `${unitRef(CONTRAST_UNIT, 'a2')}'s verb`, fr('fr.a2.verbes.403'), 'nothing is in your way'],
        ],
      },
      {
        type: 'table',
        id: 'sheet-grid',
        title: 'Both verbs, every person',
        layer: 'deep',
        cols: ['Person', ...VERB_ORDER],
        rows: PARADIGM.map((r) => [
          r.person,
          `${r.forms.savoir} ${FRAMES.savoir.complement}`,
          `${r.forms.connaître} ${FRAMES.connaître.complement}`,
        ]),
      },
      {
        type: 'table',
        id: 'sheet-say',
        title: 'How to say each one',
        layer: 'deep',
        cols: ['Person', 'savoir', 'connaître'],
        rows: PARADIGM.map((r) => [r.person, r.respells.savoir, r.respells.connaître]),
      },
      {
        type: 'teach',
        id: 'sheet-why-not-meaning',
        title: 'Why this sheet does not sort them by meaning',
        layer: 'deep',
        body: `The obvious version of this table would put people and places on one side and facts and skills on the other, and it is what the most-quoted rule about these two verbs says. It is also what one sentence already published in this app says, in French. It breaks in a week, and the sentence that breaks it is « ${fr('fr.a2.verbes.393')} ». That is a place, and it takes savoir, and a learner running the meaning rule reaches for the wrong verb on one of the most useful sentences in the language. The version in the first table above cannot break that way, because it does not ask you what the sentence is about. ${REFRAME} ${THE_TEST} One caution: a sentence can put its thing in front of the verb rather than behind it, and later lessons will show you how. When that happens the thing is still there, which is the part that matters.`,
      },
      {
        type: 'teach',
        id: 'sheet-carries-forward',
        title: 'What carries forward',
        layer: 'deep',
        body: `Three things leave this lesson. The first is the question: ${REFRAME} It is a syntax rule rather than a meaning rule, and that is why it holds. The second is that English gives you one word, can, for two completely different claims, having been taught and having nothing in your way, and French keeps them apart with savoir and ${unitRef(CONTRAST_UNIT, 'a2')}'s verb. Learners who never sort that out say the wrong one for years and are understood every time, which is why nobody corrects it. The third is small and it will come back: ${WHAT_FOLLOWS}. You met that shape at ${unitRef(WHAT_FOLLOWS_UNIT)} on one verb doing two jobs, and this lesson is the same shape turned round. ${Cap(unitRef(FAMILY_UNIT))} is next and it takes up the family ${FAMILY_MEMBER.fr} belongs to, which is worth waiting for: verbs in a family share their endings, and they do not always share anything else.`,
      },
    ],
  },
];

export const SAVOIR_CONNAITRE_LESSON: Lesson = {
  id: 'a2.14.l1',
  unitId: 'a2.14',
  // The lesson's index WITHIN its unit, not its place in the track.
  seq: 1,
  title: 'Irréguliers 4 : savoir & connaître',
  level: 'a2',
  // missions.ts derives the eyebrow from unit.seq at render time
  // (`${level} · LEÇON ${String(unit.seq).padStart(2, '0')}`), and a2.14 sits at
  // seq 8, which pads to "08". The stored value is a fallback and has to agree
  // with what the renderer computes. The batch checks it against the live unit
  // rather than trusting this comment.
  tag: 'A2 · LEÇON 08',
  // `intro` IS A LEARNER SURFACE. It is drawn on the lesson overview card AND on
  // the lesson cover, and a2.11 shipped grammar jargon here in v1 because every
  // guard in the band walked `sections`, `sheets` and `terms` and not this. The
  // walk in the batch, the merge and the test includes `intro` and `overview`,
  // and this field is pinned by its own assertion.
  intro:
    'English has one word for both of these and gives you no instinct at all, so a learner who guesses is wrong about half the time. The forms take a few minutes. The question that picks between them is the rest of the lesson, and you will run it in every sentence from here on.',

  sections: SECTIONS,
  itemIds: ITEM_IDS,
  // v5: TWO MORE FOUND ON GLASS, BOTH ON THE MISSIONS HUB.
  //   * « The One That Does Not Exist » was CUT at 27 characters while the house
  //     heading in mission 2 fits at the SAME count. The budget is rendered
  //     WIDTH; the character ceiling is an approximation and 26-27 with wide
  //     glyphs has to be checked on glass. Retitled well under it.
  //   * s08-next's `frSub` was a2.02's ENGLISH pattern name, so it was the only
  //     English line in a column of French subs. `frSub` is the one field that
  //     is deliberately French.
  //
  // v4: THE SCENE BREAK CARD'S OWN CONTINUE WAS CLIPPED UNDER THE PAGER BAR
  // on a Pixel 6, on mission 1 of 28. The right-hand reading row was five lines
  // rather than the four ledger §7 budgets, because its French ran to 31
  // characters and wrapped. Shortened to 23. Found on glass; nothing on the
  // host could see it, and it is the same defect that cost a2.01 three passes.
  //
  // v3: THE FIELDS THAT DO NOT RENDER AT `lg`, and the mission-title ceiling.
  // Both were measured on a Pixel 6 by a2.13's device pass, which was sitting
  // UNCOMMITTED in the working tree when this lesson came to be committed.
  // v2 shipped 53 groupDrill cards carrying `respell` and `en`, neither of
  // which the lg branch draws, so every one of them was a bare French sentence
  // with no pronunciation and no meaning; and four titles ran past the 27-
  // character hub row and ellipsised. Nothing in this build's three guard
  // layers could see either. See rowCard above and the corpus constants.
  //
  // v2: one sentence in the `theFamily` term said "Do not assume it BEHAVES LIKE
  // CONNAÎTRE in that respect, because it does not." Correct content, and the
  // guard that stops a later author claiming the opposite is a substring check,
  // so it fired on the negation. The sentence is reworded to "the same things
  // after it" and the guard keeps its teeth. Found by the mutation harness,
  // which needed the guard to read the TERM as well as the section: a mutation
  // put the affirmative claim into the term body and walked straight through
  // the v1 test.
  //
  // The counter moves rather than the body being corrected under v1. Two
  // different bodies under one number is the drift this project has lost work to
  // twice, and the batch refuses it.
  version: 6,

  grammarAssumed: [
    'The six subject pronouns and the nine they cover, introduced in a1.05',
    'on takes third-person-singular agreement, introduced in a1.05',
    'nous as the written first-person plural against on as the spoken one, introduced in a2.01',
    'The present tense of regular -er, -ir and -re verbs, introduced in a2.01, a2.10 and a2.11',
    'The silent -e, -es and -ent endings, introduced in a2.01',
    'The present tense of vouloir, pouvoir and devoir, introduced in a2.13',
    'The modal-plus-infinitive construction, introduced in a2.13',
    'That three singular persons of an irregular verb are commonly one sound, introduced in a2.13',
    'One form doing two jobs, distinguished by what follows it, named in a2.02',
    'Yes/no questions formed by intonation alone, introduced in a1.19',
    'ne ... pas wrapping the conjugated verb, introduced in a1.18',
    'The definite and demonstrative determiners inside the objects of these sentences, introduced in a1.04',
  ],
  grammarIntroduced: [
    'The present tense of savoir and connaître, as two stems per verb',
    'The double-s plural stem of connaître, against the shortening plural stem of savoir',
    'The circumflex on the third-person singular connaît, as the only diacritic in either paradigm',
    'The complement distinction between savoir and connaître: savoir takes an infinitive or a subordinate clause, connaître takes a direct object noun phrase and nothing else',
    'That the distinction is syntactic rather than semantic, so a locative complement takes savoir when it is clausal and connaître when it is nominal',
    'The lexical contrast between savoir plus infinitive (acquired ability) and pouvoir plus infinitive (permission or possibility), both of which English renders with can',
    'reconnaître as sharing connaître\'s inflection, for recognition only, with its complement behaviour deferred to a2.15',
  ],

  features: ['roleplay', 'voiceflash'],
  scenarioId: undefined,

  overview: {
    titleEn: 'Irregular Verbs 4: Savoir and Connaître',
    subFr: 'Irréguliers 4 : savoir & connaître',
    introFr: 'Deux verbes pour un seul mot anglais, et le mot d\'après choisit.',
    minutes: 35,
    difficulty: 3,
    glyph: 'Sc',
    screens: 209,
  },

  acts: ACTS,
  reframe: REFRAME,
  errorTriggers: ERROR_TRIGGERS,
  drills: DRILLS,
  sheets: SHEETS,
  deckTranche: DECK_TRANCHE,
  terms: SAVOIR_CONNAITRE_TERMS,

  audio: {
    defaultLang: 'fr-FR',
    speeds: [1.0, 0.65],
    coachVoice: 'coach-en-warm',
    interfaceSounds: ['correct', 'incorrect', 'checkpoint'],
    // ── The audio decisions that cannot be recovered later ─────────────────
    //
    // Written here AND pinned by a2-14-savoir-connaitre.test.ts, because a
    // constraint on how something is recorded becomes invisible the moment the
    // clip is delivered.
    recorded: [
      {
        id: 'rec-a2-14-grid',
        desc: 'THE TWELVE CELLS, TWO TAKES, ONE PER VERB, EACH VERB\'S SIX IN ONE BREATH GROUP. Within the first three of EACH verb the verb itself must be acoustically identical: « Je sais nager. » « Tu sais nager. » « Il sait nager. » and then « Je connais Paris. » « Tu connais Paris. » « Il connaît Paris. » A reader who knows the third one is spelled differently will put a fraction of a t on it or brighten the vowel, and every one of those instincts destroys the screen that asks the learner to fail to hear a difference. If a listener with their eyes shut can say which of the three they just heard, the take is unusable. In the plural the opposite is required: the double s of connaissons, connaissez and connaissent must be clean and audible, because it is the only thing separating the plural from the singular by ear, and the v at the end of savent must not be swallowed. AND nager MUST SOUND IDENTICAL IN ALL SIX savoir LINES, and Paris in all six connaître lines. They are the control: the learner is being shown that only the middle of the sentence moves.',
        clipIds: PARADIGM_IDS.map((id) => fr(id)),
      },
      {
        id: 'rec-a2-14-choice',
        desc: 'THE FOUR CARDS OF THE OWNS DECK AND THE FIVE SITUATION ROWS. « Je sais nager. » « Je connais Paris. » « Je sais que c\'est loin. » « Je connais ce quartier. » then « Tu connais Marie ? » « Je sais où elle habite. » « Je peux nager. » THE READING MUST NOT MARK THE JOIN. There is a strong temptation to leave a teaching pause after the verb, because the word after the verb is the whole point of the screen, and that pause is exactly what must not be there. The learner has to hear these as ordinary sentences said at ordinary speed, because that is the speed at which they will have to make the choice. Conversational throughout, no emphasis on any verb, and no lift before the complement.',
        clipIds: ['fr.a2.verbes.381', 'fr.a2.verbes.387', 'fr.a2.verbes.394', 'fr.a2.verbes.398', 'fr.a2.verbes.399', 'fr.a2.verbes.393', 'fr.a2.verbes.403'].map((id) => fr(id)),
      },
      {
        id: 'rec-a2-14-place',
        desc: 'THE FOUR PLACE LINES, IN THIS ORDER, AS ONE TAKE: « Je connais ce quartier. » « Je sais où elle habite. » « Il connaît bien la ville. » « Vous savez où est la gare ? » This is the mission the lesson exists for and the recording carries half its weight. All four are about places and two take each verb, so the reader must give NO clue which is which. Same warmth, same pace, same weight on the verb in all four. If the two savoir lines are read as though they were the interesting ones, the learner hears which answer is being pointed at instead of working it out. The fourth line rises at the end because it is a question; the third does not.',
        clipIds: ['fr.a2.verbes.398', 'fr.a2.verbes.393', 'fr.a2.verbes.401', 'fr.a2.verbes.397'].map((id) => fr(id)),
      },
      {
        id: 'rec-a2-14-pouvoir',
        desc: 'THE THREE-WAY TRAP, AS TWO PAIRS. « Je sais nager. » then « Je peux nager. » then « On peut nager ici. » then « Je sais nager, mais je ne peux pas aujourd\'hui. » The first pair is a minimal pair and must be read as one: same speed, same pitch, same length, with ONLY the verb different. The learner is being shown that nothing else in the sentence moved, and any difference in delivery is the recording contradicting the screen. The fourth line is one sentence and not two; the mais is unstressed and there is no dramatic pause before it. It should sound like the ordinary, slightly regretful thing it is.',
        clipIds: ['fr.a2.verbes.381', 'fr.a2.verbes.403', 'fr.a2.verbes.404', 'fr.a2.verbes.405'].map((id) => fr(id)),
      },
      {
        id: 'rec-a2-14-ear',
        desc: 'THE SIX SINGULAR CELLS FOR THE LISTENING SCREEN, savoir\'s three then connaître\'s three, WITH AUDIO BEFORE TEXT. Same instruction as the grid take and it is worth repeating because it is counter-intuitive: within each group of three the verb must be indistinguishable, and the PRONOUN must be clear, unhurried and slightly forward, because it is the only information in the line. Between the two groups the difference should be obvious without being performed: one syllable against two, and completely different consonants.',
        clipIds: [...paradigmIds('savoir').slice(0, 3), ...paradigmIds('connaître').slice(0, 3)].map((id) => fr(id)),
      },
      {
        id: 'rec-a2-14-skill',
        desc: 'THE SKILL SET. « nager », « cuisiner », « conduire » as single words, conversational and unstressed, then « Je sais nager. » « Tu sais cuisiner ? » « Elle sait conduire. » The three single words come from three different lessons and the learner should hear no family resemblance and no grouping: they are a bag of ordinary verbs, which is the point. The second of the three sentences is a question and rises; the other two do not.',
        clipIds: ['nager', 'cuisiner', 'conduire', ...['fr.a2.verbes.381', 'fr.a2.verbes.395', 'fr.a2.verbes.396'].map((id) => fr(id))],
      },
      {
        id: 'rec-a2-14-things',
        desc: 'THE FOUR KINDS OF THING: « Tu connais Marie ? » « Je connais Paris. » « Nous connaissons ce restaurant. » « Vous connaissez cette chanson ? » One take. The first and last rise, the middle two do not. The double s in the third and fourth must be audible, and Marie and Paris must be said the way somebody says a name they know, not the way somebody reads one off a card.',
        clipIds: ['fr.a2.verbes.399', 'fr.a2.verbes.387', 'fr.a2.verbes.400', 'fr.a2.verbes.402'].map((id) => fr(id)),
      },
      {
        id: 'rec-a2-14-impossible',
        desc: 'WRONG THEN RIGHT, AND THE WRONG ONE IS THE DIFFICULT INSTRUCTION. « Je connais où il habite. » is not French and has to be read as though it were: at ordinary speed, with no hesitation, no apology and no strangeness in the voice. It is what an English speaker actually produces, fluently and confidently, and if the reader signals that something is wrong the learner will conclude they would never say it. They would. Then « Je sais où il habite. » in exactly the same voice at exactly the same speed, so that the only audible difference is the verb.',
        clipIds: [IMPOSSIBLE.wrong, IMPOSSIBLE.right],
      },
      {
        id: 'rec-a2-14-evidence',
        desc: 'THE FOUR PUBLISHED ROWS, READ AS WHAT THEY ARE: sentences written for other lessons that happen to prove this one. « Tout le monde connaît le nom du champion. » « Il connaît la vraie raison de son retard ce matin. » « Je ne sais pas si c\'est l\'heure. » « je ne sais pas. » Ordinary pace, no teaching emphasis anywhere, and in particular no weight on the verb. The whole value of the screen is that nobody was thinking about savoir and connaître when these were written.',
        clipIds: EVIDENCE_IDS.map((id) => importedFr(id)),
      },
      {
        id: 'rec-a2-14-family',
        desc: 'TWO CLIPS. « reconnaître » alone, then « Je reconnais cette chanson. » Unremarkable and quick. This is a recognition card and nothing else, and a reader who gives it weight will make the learner think it is being taught.',
        clipIds: [FAMILY_MEMBER.fr, fr('fr.a2.verbes.410')],
      },
      {
        id: 'rec-a2-14-scene',
        desc: 'THE STAIRWELL. The neighbour is friendly, slightly out of breath, holding shopping, and completely uninterested in teaching anybody French. « Tu connais la nouvelle voisine ? » is casual and quick, the way you ask somebody something on a landing. « Ah, parfait. Tu lui diras pour les poubelles, alors ? » is warm and already turning to go, and it must not sound like a trap closing: he is pleased, and he has misunderstood, and neither of those is audible. Nothing in this scene is unkind and nothing is slowed down. The whole cost of the exchange is invisible to both people in it.',
        clipIds: [fr('fr.a2.verbes.407'), 'Ah, parfait. Tu lui diras pour les poubelles, alors ?'],
      },
    ],
  },
};

/* ─── Arrays the guards read, exported at the FOOT of the file ─────────────
 *
 * These are reads off consts declared above, so they cannot live in the export
 * block near the top: `export const X = SPEAK_IDS` before SPEAK_IDS is declared
 * is a temporal dead zone and throws at import time rather than failing to
 * compile. The section ids up there are literals for exactly that reason.
 *
 * The batch, the merge and the test all read THESE rather than rebuilding the
 * arrays, so a guard can never disagree with what the renderer is handed.    */

export const SAVOIR_CONNAITRE_SPEAK_IDS = SPEAK_IDS;
export const SAVOIR_CONNAITRE_ITEM_IDS = ITEM_IDS;
export const SAVOIR_CONNAITRE_DECK_TRANCHE = DECK_TRANCHE;
export const SAVOIR_CONNAITRE_ACTS = ACTS;
export const SAVOIR_CONNAITRE_SECTIONS = SECTIONS;
export const SAVOIR_CONNAITRE_SHEETS = SHEETS;
export const SAVOIR_CONNAITRE_DRILLS = DRILLS;
export const SAVOIR_CONNAITRE_ERROR_TRIGGERS = ERROR_TRIGGERS;
