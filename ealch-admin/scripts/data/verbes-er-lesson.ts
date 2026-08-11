// a2.01.l1 "Les verbes en -ER" — the mission journey.
//
// ── THIS IS A REBUILD, NOT A FIRST BUILD ───────────────────────────────────
//
// The brief says `lessonIds: []  you are filling this`. The unit already carried
// `a2.01.l1`. What shipped was a seven-section pre-v2 stub: a `table`, an
// `examples`, an `audio`, a `commonErrors` with no `swipe` (which is the exact
// shape that drew a blank screen on a1.01 mission 5), a `focus` listing "four
// sub-lessons" that the trail has since split into a2.09, a2.10 and a2.11, a
// `practice` at `skill: 'write'` (which draws no writing surface at all), and a
// flat quiz whose three questions carry no `why` — the reason `a2.01.l1` sits on
// the waiver list in lesson-contract.test.ts.
//
// It is rebuilt in place at the same id, because an id is the SRS key, and the
// version counter moves 2 -> 3 rather than restarting: a rebuild that reuses its
// own number reads as a rollback in the log.
//
// ── The Owns, and why it is not the paradigm ───────────────────────────────
//
// The `sub` promises "the endings and thirty common verbs". Thirty verbs is a
// word list and a word list is the cheap half; the paradigm is six rows and a
// learner can read it off a card. What this lesson OWNS is the sound:
//
//   je parle · tu parles · il parle · ils parlent    four spellings, one sound
//   nous parlons · vous parlez                       the only two the ear gets
//
// A learner taught the table can WRITE the verb and still cannot hear who is
// speaking. In real conversation the pronoun is carrying the person on its own,
// and no other lesson in A2 is positioned to install that.
//
// Weight, in missions: the paradigm act is FOUR (s04 to s07), the Owns act is
// SIX (s08 to s13), and act 4's trap is downstream of the Owns rather than of
// the table. Two of the five quiz rounds test the ear or the spelling
// distinction directly, and the entire dictée is the Owns: seven targets, every
// one of them a form whose ending makes no sound.
//
// ── Where the learner sees all four silent forms on one screen ─────────────
//
// s05-six, and only there. One `tapTable`, six rows, three columns, with a
// "What you hear" column that reads "nothing at the end" four times and OHⁿ and
// AY twice. Split across four missions the contrast is invisible and the lesson
// becomes a table, so a2-01-verbes-er.test.ts asserts the SECTION rather than
// the strings: all four silent forms and both audible ones, in one section id.
//
// The brief asked for a `table` in the flow as well. The density validator
// refuses it — `table` at layer 'core' is a `table-in-core` failure — so the
// paradigm table lives in sheet.a2.01.endings, which is where the brief wanted a
// reference sheet anyway. One table, one tapTable, and then a stop, as asked.
//
// ── nous versus on ─────────────────────────────────────────────────────────
//
// ONE section, s06-nous-on, and the wording is in verbes-er-terms.ts as NOUS_ON
// so nineteen later lessons can import it instead of retyping it. a1.05 already
// stated the register half of this and a2.01 does not get to invent a second
// position; see the note on that constant.
//
// ── What is left to the neighbours ─────────────────────────────────────────
//
// - EVERY STEM CHANGE IS a2.09, which is the very next lesson on the trail and
//   has nothing else to teach. `manger`, `commencer`, `appeler`, `préférer`,
//   `acheter`, `payer`, `essayer` and `jeter` appear on exactly ONE card
//   (s16-notmine) as context, and on no production surface: no deck, no vocab
//   list, no drill, no quiz answer. That cost this lesson `manger`, which is the
//   most frequent -er verb in the language. The cost was taken.
// - `aller` is named once, on the same card, as a trap. It is conjugated
//   nowhere. That is a2.02.
// - NO PAST TENSE. `parler` and `parlé` are both /paʁle/ and that collision is
//   a2.05, seq 16. Nothing here is ambiguous between the two.
//
// ── Layout notes that are bugs, not preferences ───────────────────────────
//
// - `tapTable` is NOT in ownsLayout() (LessonPager.tsx:162), so s05-six renders
//   inside a SCROLLING page. Six rows is the most it can hold above the fold;
//   the nine-pronoun version lives in the sheet.
// - `size` is not decoration. ownsLayout() ignores it; density.logic.ts reads
//   `xl` as a 12-word cap on EVERY string in the section. s08-onesound is the
//   only xl section here and every card in it is a bare form of two or three
//   words, which is what makes xl correct there and fatal anywhere else.
// - `commonErrors` needs `swipe: true` or it renders a blank screen. See
//   s12-errors and s15-slips. The legacy a2.01.l1 authored one WITHOUT it.
// - `reading` needs `questionsInModal` WITH questions or its glossary reaches no
//   renderer at all, and PassagePage splits on sentence boundaries so an
//   authored newline is swallowed: s20-reading is one line.
// - Three term chips per section, maximum. The renderer shows three.
// - A `groupDrill` at `lg` may carry items and a check in one group; only an
//   `xl` one may not. s07-thirty and s11-spell are both lg.

import type {
  ErrorTrigger,
  Lesson,
  LessonAct,
  LessonDrill,
  LessonSection,
  ReferenceSheet,
  SceneBeat,
} from '../../../ealch-v2/src/content/schema.ts';
import { NOUS_ON, REFRAME, VERBES_ER_TERMS } from './verbes-er-terms.ts';
import {
  AUDIBLE_ENDINGS,
  AUTHORED_IDS,
  DICTATION_IDS,
  ENDINGS,
  HOMOPHONE_PAIRS,
  PARADIGM_IDS,
  SILENT_ENDINGS,
  THE_THIRTY,
  familyIds,
  fr,
  sub,
} from './verbes-er-corpus.ts';
import { IMPORTED_IDS, READING_ONLY_IDS, verbEn, verbId } from './verbes-er-imported.ts';
import { REPAIRED_RESPELL, verbCard } from './verbes-er-display.ts';

export { NOUS_ON, REFRAME };

/* ─── The items this lesson touches ────────────────────────────────────────
 *
 * 25 authored (see verbes-er-corpus.ts for why the corpus could not supply a
 * paradigm) plus 31 imported by id and untouched except for seven respelling
 * repairs. Every id here resolves; the batch re-checks the imported half against
 * POSTGRES rather than the seed, because the two drift and an id that exists
 * only in the seed renders as an empty card.                                  */

const ITEM_IDS = [...new Set([...AUTHORED_IDS, ...IMPORTED_IDS])];

/** Spoken practice draws only from items carrying `voiceflash`, because that is
 *  the drill the mic-scored deck runs. Every authored row has it; `.001` is
 *  given it by this build's DRILL_ADDITIONS, which is why the paradigm can be
 *  said in full. The thirty infinitives are deliberately NOT here: ten of them
 *  carry no `voiceflash` at all, and a bare infinitive is not a thing anybody
 *  says on its own.
 *
 *  The `apply` family is here rather than in a deck of its own, and that was a
 *  correction rather than a plan: a2-01-verbes-er.test.ts found nine of those
 *  ten rows declared in `itemIds`, released by a tranche, and DRAWN BY NOTHING —
 *  which is a1.08's 43-itemId failure exactly. Speaking them is also where they
 *  belong, because ten verbs across all six persons is the production the whole
 *  lesson is for: saying sentences it never showed anybody. */
const SPEAK_IDS = [
  ...PARADIGM_IDS,
  ...familyIds('register'),
  ...familyIds('audible'),
  ...familyIds('apply'),
];

/** The three verbs whose forms carry the whole contrast, named once so the
 *  tapTable, the sheet and the test read one list. */
const PARADIGM_VERB = 'parler';

/* ─── Mission 1 · Scene ────────────────────────────────────────────────────
 *
 * The A2 register of stakes is loss of fluency under load: somebody who started
 * a sentence they could not finish. Nothing here is misunderstood and nobody is
 * offended. The learner has the verb, has the day, and runs out of sentence in
 * public; the other person waits, then moves on WITHOUT the thing that was being
 * asked for, and books the wrong evening.
 *
 * The choice beat is the naming form against the conjugated one, because
 * reaching for the infinitive is what an English speaker does when the ending
 * will not come: English lets you say "I work Monday" with the bare verb and
 * French has no bare form to fall back on.
 *
 * Beats are extracted to a named const, each with its own `size` and `audio`.
 * The section sets NO size: ownsLayout() ignores it and density.logic.ts would
 * read xl as a 12-word cap on prose.                                          */

const SCENE_BEATS: SceneBeat[] = [
  {
    kind: 'narration',
    size: 'md',
    text: 'Enrolment evening at a community centre in Lyon. You have the verb you need. What you do not have yet is the end of it.',
    audio: { mode: 'tts', voice: 'coach' },
  },
  {
    kind: 'bubble',
    from: 'them',
    reveal: 'tap',
    size: 'md',
    speaker: 'Nadia',
    fr: 'Bonsoir. Vous cherchez quel cours ?',
    en: 'Good evening. Which class are you looking for?',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a2-01-scene' },
  },
  {
    kind: 'bubble',
    from: 'you',
    reveal: 'auto',
    size: 'md',
    fr: 'Le cours du soir.',
    en: 'The evening class.',
    stage: 'That lands. She turns the screen towards you.',
    audio: { mode: 'tts', lang: 'fr-FR' },
  },
  {
    kind: 'bubble',
    from: 'them',
    reveal: 'tap',
    size: 'md',
    speaker: 'Nadia',
    fr: 'Et vous travaillez quels jours ?',
    en: 'And which days do you work?',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a2-01-scene' },
  },
  {
    kind: 'choice',
    size: 'lg',
    prompt: 'You work Monday and Thursday. What goes back?',
    options: [
      {
        fr: 'Je travailler lundi et jeudi.',
        en: 'the form the dictionary gave you',
        outcome: 'breaks',
        audio: { mode: 'tts', lang: 'fr-FR' },
      },
      {
        fr: 'Je travaille lundi et jeudi.',
        en: 'the form with a person on it',
        outcome: 'works',
        audio: { mode: 'tts', lang: 'fr-FR' },
      },
    ],
    followUp: {
      works: 'Yes, and the four letters you added make no sound at all. Watch what the other one costs.',
      breaks: 'English lets you do that. French has no bare form to fall back on.',
    },
  },
  {
    kind: 'bubble',
    from: 'them',
    reveal: 'auto',
    size: 'md',
    speaker: 'Nadia',
    fr: 'Bon. Je vous mets au mardi, alors.',
    en: 'Right. I will put you down for Tuesday, then.',
    stage: 'Nobody corrects you. She waits four seconds, then types something and prints the card.',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a2-01-scene' },
  },
  {
    kind: 'break',
    size: 'lg',
    // TRIMMED AFTER A DEVICE PASS on a Pixel 6, 2026-08-11, and the numbers are
    // measured rather than chosen. The break stacks a two-line heading, two
    // reading rows (the right one carrying BOTH ipa and respell, so four lines
    // on its own), the body and the coach line, and `scene` is absent from
    // ownsLayout() so the card cannot size itself.
    //
    // At 35 body words and a 14-word coach, the card's own Continue sat BELOW
    // THE FOLD on first paint: reachable by scrolling, which scrolled the
    // heading off entirely, on the one screen the whole scene exists to deliver.
    // That is a1.06's defect, found the same way and fixed the same way. 26 body
    // words and an 8-word coach are a1.06's shipped, proven configuration; the
    // doctrine's floor for a break body is 24.
    //
    // THE HEADING MUST BE ONE LINE, WHICH MEANS ABOUT 13 CHARACTERS. It renders
    // at display size and wraps at roughly twelve, and every wrapped line costs
    // about 85px of card. "The sentence stopped" is 20 characters, wrapped to
    // two, and that second line was the last thing standing between the card's
    // Continue and the fold. a1.06 records the same finding from the other end:
    // a seven-word heading there wrapped to THREE lines and ate the whole saving
    // from trimming its body.
    heading: 'The stall',
    body: 'You knew the verb. You knew the day. What you did not have was four letters on the end, and French offers no bare form instead.',
    // ONE LINE EACH, and that is a measurement rather than a style. These two
    // glosses were 39 and 45 characters, which wrap to two lines apiece at the
    // break card's display size, and those two extra lines are the whole
    // difference between this card and a1.06's — which carries the same shape
    // (a two-line heading, a wrong row, a right row with both ipa and respell)
    // and fits, because its glosses are "understood, and not French" and "the
    // gap is the grammar". Keep these under about 24 characters.
    wrong: {
      fr: 'Je travailler lundi.',
      ipa: '/ʒə tʁa.va.je lœ̃.di/',
      en: 'not a sentence',
    },
    right: {
      fr: 'Je travaille lundi.',
      ipa: '/ʒə tʁa.vaj lœ̃.di/',
      respell: '[zhuh tra-vahy luhⁿ-DEE]',
      en: 'four letters, no sound',
    },
    coach: 'An ending you must write and never hear.',
    // Audio-first: the ear answers before the eye can. `autoplay` is NOT set. It
    // is declared in schema.ts and implemented in no component.
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], audioFirst: true, recordingId: 'rec-a2-01-silent-four' },
  },
  {
    kind: 'resolve',
    size: 'md',
    text: 'She was not annoyed and you were not misunderstood. You just did not get Thursday.',
  },
];

const SECTIONS: LessonSection[] = [
  /* ── Act 1: the sentence that stopped ────────────────────────────────── */

  {
    type: 'scene',
    id: 's01-scene',
    title: 'The Evening You Did Not Get',
    frSub: "Le soir qu'on ne vous a pas donné",
    render: 'screens',
    layer: 'core',
    terms: ['infinitive', 'silentEnding'],
    say: {
      text: 'Nothing goes wrong out loud here. Watch where the sentence runs out.',
      voice: 'coach',
      timing: 'onFirstVisitOnly',
    },
    setting: {
      place: 'The desk at a community centre',
      city: 'Lyon',
      time: 'Tuesday, just after six',
      ambience: 'room-tone-lobby',
    },
    beats: SCENE_BEATS,
    // The reframe is referenced, never retyped, so this appearance cannot drift
    // out of agreement with the others the density validator counts.
    closing: {
      size: 'md',
      text: `${REFRAME} You will spend this lesson writing endings you cannot hear.`,
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
      { t: 'Build any -er verb', s: 'Cut two letters off the naming form and put a person on what is left.' },
      { t: 'Hear who is speaking', s: 'From the pronoun, because four of the six endings give your ear nothing.' },
      { t: 'Spell what you cannot hear', s: 'The part of this that is genuinely hard, and the part everything later rests on.' },
      { t: 'Say it flat', s: 'With the weight at the end of the phrase, not on the end of the verb.' },
    ],
  },

  {
    type: 'cardDeck',
    id: 's03-derived',
    title: 'This One You Work Out',
    frSub: 'Un verbe qui se déduit',
    hint: 'Swipe through the four cards.',
    render: 'deck',
    layer: 'core',
    size: 'lg',
    terms: ['infinitive', 'stem'],
    say: 'Read this one properly. It decides what you should be doing for the next twenty minutes.',
    cards: [
      {
        label: 'What you already have',
        head: 'The pronouns are done',
        body: 'You met the six subject pronouns last unit, and the tu against vous split that runs through the whole product. Nothing here re-teaches them. They are about to start doing more work than they ever have.',
      },
      {
        label: 'The two you memorised',
        head: 'être and avoir were the exception',
        fr: 'suis · es · est',
        sub: 'six words, no shared stem',
        body: 'Those two had to be learned outright because there was nothing to derive. It would be reasonable to conclude that French verbs are memorised one at a time. They are not.',
      },
      {
        label: 'The deal',
        head: 'This one hands you a stem',
        fr: 'parler → parl-',
        sub: 'plus six endings',
        body: 'Learn one pattern and roughly nine in ten French verbs come with it. That is the deal the language offers almost everywhere, and this is where you collect on it.',
      },
      {
        label: 'The catch, and it is not the endings',
        head: 'Four of them make no sound',
        body: `${REFRAME} Writing the verb is the easy half. Hearing it is the half this lesson is built around.`,
      },
    ],
  },

  /* ── Act 2: one stem, six endings ────────────────────────────────────── */

  {
    type: 'cardDeck',
    id: 's04-machine',
    title: 'Cut Two Letters Off',
    frSub: 'La machine',
    hint: 'Swipe through the four cards.',
    render: 'deck',
    layer: 'core',
    size: 'lg',
    terms: ['infinitive', 'stem'],
    say: 'Three steps, and the third one is where every mistake in this lesson happens.',
    cards: [
      {
        label: 'Step 1',
        head: 'Start from the naming form',
        fr: 'travailler',
        sub: '[trah-vah-YAY]',
        body: 'This is how the verb is listed. Nobody speaks in this form, and reaching for it under pressure is what stopped the sentence in the scene.',
      },
      {
        label: 'Step 2',
        head: 'Take the last two letters off',
        fr: 'travailler → travaill-',
        sub: 'the part that never moves',
        body: 'Whatever is left is the stem, and it is the same for all six persons. There is nothing else to remember about it.',
      },
      {
        label: 'Step 3',
        head: 'Put the person on the end',
        fr: 'travaill- + e',
        sub: 'je travaille',
        body: 'One ending per person, six in total, and the same six on every regular verb in the language. That is the entire machine.',
      },
      {
        label: 'The eleventh verb',
        head: 'It works on words you have never seen',
        fr: 'bavarder → tu bavardes',
        sub: 'to chat, and you just built that form',
        body: 'You were not taught that verb. You did not need to be. This is what makes a verb regular, and it is why thirty is a starting number rather than a limit.',
      },
    ],
  },

  {
    // THE CONTRAST, AND IT IS ONE SCREEN.
    //
    // Six rows, three columns, and the middle column is the paradigm while the
    // right-hand one is the lesson. Split across four missions the learner never
    // sees "nothing at the end" four times in a column and the whole Owns
    // evaporates. a2-01-verbes-er.test.ts asserts this SECTION carries all four
    // silent forms and both audible ones, not merely that the strings exist
    // somewhere in the lesson.
    //
    // Six rows and not nine: tapTable is not in ownsLayout(), so this renders
    // inside a scrolling page and a ninth row runs past the fold. a1.05 already
    // taught that il/elle/on share a form and ils/elles share another, and the
    // cells say so. The nine-row version is in sheet.a2.01.endings.
    type: 'tapTable',
    id: 's05-six',
    title: 'Six Forms, And What You Hear',
    frSub: 'Les six formes',
    layer: 'core',
    terms: ['silentEnding', 'audibleTwo', 'stem'],
    sheetId: 'sheet.a2.01.endings',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a2-01-paradigm' },
    say: `${REFRAME} Read the right-hand column down before you read anything else. Tap any row to hear it.`,
    cols: ['Person', PARADIGM_VERB, 'What you hear'],
    rows: [
      {
        cells: ['je', 'je parle', 'nothing at the end'],
        say: fr('fr.a2.verbes.001'),
        detail: {
          title: 'je parle',
          body: 'The ending is one letter and it is silent. What arrives at the ear is the stem and nothing after it, which is exactly what arrives for tu, for il and for ils.',
          say: fr('fr.a2.verbes.001'),
        },
      },
      {
        cells: ['tu', 'tu parles', 'nothing at the end'],
        say: fr('fr.a2.verbes.101'),
        detail: {
          title: 'tu parles',
          body: 'Two letters, no sound. The s here is the same silent s you already write on tu es. It is the one ending in the six that only ever goes with tu, which makes it the one worth checking when you write.',
          say: fr('fr.a2.verbes.101'),
        },
      },
      {
        cells: ['il · elle · on', 'il parle', 'nothing at the end'],
        say: fr('fr.a2.verbes.102'),
        detail: {
          title: 'The row that does the most work',
          body: 'Three pronouns, one form, and the ending is silent. on means we and still takes this form, which is the collapse a1.05 spent a mission on and the reason on costs you no new ending.',
          say: fr('fr.a2.verbes.107'),
        },
      },
      {
        cells: ['nous', 'nous parlons', 'OHⁿ'],
        say: fr('fr.a2.verbes.103'),
        detail: {
          title: 'nous parlons',
          body: 'A syllable of its own, so you hear it. It is a nasal vowel with no N sound on the end of it. This is one of only two endings your ear ever receives.',
          say: fr('fr.a2.verbes.103'),
        },
      },
      {
        cells: ['vous', 'vous parlez', 'AY'],
        say: fr('fr.a2.verbes.104'),
        detail: {
          title: 'vous parlez',
          body: 'The other audible one, and it is said exactly like the naming form parler. Only the vous in front tells you which of the two you are hearing, which is the reframe arriving early.',
          say: fr('fr.a2.verbes.104'),
        },
      },
      {
        cells: ['ils · elles', 'ils parlent', 'nothing at the end'],
        say: fr('fr.a2.verbes.105'),
        detail: {
          title: 'ils parlent',
          body: 'Four letters, and not one of them sounds. This is the ending everybody wants to pronounce, and it is the emptiest one in the set. Said out loud it is the same as il parle.',
          say: fr('fr.a2.verbes.105'),
        },
      },
    ],
  },

  {
    // THE nous / on STATEMENT, AND IT IS ONE SECTION.
    //
    // Nineteen later A2 lessons inherit this wording. It is imported from
    // verbes-er-terms.ts rather than typed here so a lesson quoting it imports a
    // constant, and the test asserts it appears in EXACTLY ONE section: an edit
    // that scatters it across three cards makes "where is this said?"
    // unanswerable and the inheritance stops meaning anything.
    type: 'teach',
    id: 's06-nous-on',
    title: 'What You Write, And What You Say',
    frSub: 'nous ou on',
    layer: 'core',
    terms: ['nousOn'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65] },
    say: 'One screen, and it holds for every verb in this level. Say the second sentence out loud twice.',
    body: `${NOUS_ON} Both are correct and both mean we. on takes the same form as il, so it costs you no new ending: Nous regardons la télé. On regarde la télé.`,
  },

  {
    // The thirty, named by id so every one of them is genuinely on a screen
    // rather than merely resolvable. `vocabThemes` cards carry no itemId, which
    // is why this is a groupDrill: a1.08 declared 43 itemIds that resolved
    // perfectly and were drawn by nothing.
    //
    // lg, not xl. At xl a group may not stack words and a check together, and
    // the six-row stack is what makes the family visible.
    type: 'groupDrill',
    id: 's07-thirty',
    title: 'Thirty Verbs, One Pattern',
    frSub: 'Les trente verbes',
    layer: 'core',
    size: 'lg',
    terms: ['infinitive', 'stem'],
    sheetId: 'sheet.a2.01.thirty',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a2-01-thirty' },
    say: 'Five groups of six. Cut the last two letters off each one before you move on, out loud.',
    groups: [
      {
        label: 'The six the lesson runs on',
        items: THE_THIRTY.slice(0, 6).map(verbCard),
        check: {
          q: 'What is the stem of travailler?',
          opts: ['travaille', 'travai', 'travaill', 'travailler'],
          correct: 2,
          why: 'Take off the last two letters and stop. What is left is travaill-, and it does not change for any person.',
        },
      },
      {
        label: 'Getting things done',
        items: THE_THIRTY.slice(6, 12).map(verbCard),
        check: {
          q: 'Nous ___ la gare. (chercher)',
          opts: ['cherchons', 'cherchez', 'cherchent', 'cherche'],
          correct: 0,
          why: 'nous takes -ons, and it is one of the only two endings you can actually hear.',
        },
      },
      {
        label: 'Giving and going in',
        items: THE_THIRTY.slice(12, 18).map(verbCard),
        check: {
          q: 'Which of these four is NOT a regular -er verb?',
          opts: ['entrer', 'montrer', 'donner', 'aller'],
          correct: 3,
          why: 'aller ends in -er and behaves like nothing else in this lesson. It is its own unit, and it is the one trap in the whole ending.',
        },
      },
      {
        label: 'Time off',
        items: THE_THIRTY.slice(18, 24).map(verbCard),
        check: {
          q: 'Elles ___ bien. (danser)',
          opts: ['danse', 'dansent', 'dansons', 'dansez'],
          correct: 1,
          why: 'elles takes -ent, which is four letters and no sound. Said out loud this is identical to elle danse.',
        },
      },
      {
        label: 'Liking, leaving, forgetting',
        items: THE_THIRTY.slice(24, 30).map(verbCard),
        check: {
          q: 'You have never met the verb bavarder. What is tu ___ ?',
          opts: ['bavarde', 'bavardez', 'bavardes', 'bavarder'],
          correct: 2,
          why: 'Stem bavard-, tu ending -es. You were not taught this verb and you did not need to be, which is the whole point of a regular one.',
        },
      },
    ],
  },

  /* ── Act 3: four spellings, one sound. The Owns. ─────────────────────── */

  {
    // The only xl section in the lesson, and the one place xl is correct: every
    // display string is a bare two-word form. density.logic.ts caps EVERY string
    // in an xl section at 12 words, which is why the teaching lives in the table
    // above and this is a hero deck rather than an explanation.
    type: 'cardDeck',
    id: 's08-onesound',
    title: 'One Sound, Four Spellings',
    frSub: 'Un seul son',
    hint: 'Swipe. Say each one out loud, and notice nothing changes.',
    render: 'deck',
    layer: 'core',
    size: 'xl',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], audioFirst: true, recordingId: 'rec-a2-01-silent-four' },
    say: 'Four screens and one sound. Listen before you read each one.',
    cards: [
      { label: '1 of 6', fr: 'je parle', sub: '[zhuh PARL]', body: 'I speak. Silent -e.' },
      { label: '2 of 6', fr: 'tu parles', sub: '[tü PARL]', body: 'You speak. Silent -es.' },
      { label: '3 of 6', fr: 'il parle', sub: '[eel PARL]', body: 'He speaks. Silent -e.' },
      { label: '4 of 6', fr: 'ils parlent', sub: '[eel PARL]', body: 'They speak. Silent -ent.' },
      { label: '5 of 6', fr: 'nous parlons', sub: '[noo par-LOHⁿ]', body: 'We speak. This one sounds.' },
      { label: '6 of 6', fr: 'vous parlez', sub: '[voo par-LAY]', body: 'You speak. This one sounds too.' },
    ],
  },

  {
    type: 'examples',
    id: 's09-pronoun',
    title: 'The Pronoun Is Doing It All',
    frSub: 'Le pronom fait le travail',
    layer: 'core',
    terms: ['silentEnding'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a2-01-ear' },
    say: `${REFRAME} Each pair is one sound. Cover the screen and the pairs are indistinguishable. Tap any line.`,
    examples: [
      { fr: fr('fr.a2.verbes.102'), en: 'He speaks French.', note: 'One person.' },
      { fr: fr('fr.a2.verbes.105'), en: 'They speak French.', note: 'A whole group, and the same sound exactly. Six letters differ on the page and none in the air.' },
      { fr: fr('fr.a2.verbes.108'), en: 'She works here.', note: 'One person again.' },
      { fr: fr('fr.a2.verbes.109'), en: 'They work here.', note: 'A whole team. Only elles told you, and it told you before the verb arrived.' },
      { fr: fr('fr.a2.verbes.110'), en: 'You are looking for the station.', note: 'The verb here is the same sound as il cherche. The pronoun in front is the entire difference.' },
    ],
  },

  {
    // THE OWNS, TESTED. The learner hears a sentence and names the person, and
    // for four of the six the verb cannot help. This is what `listening` is for
    // in this lesson and it is given real weight: four questions, and the first
    // two have no answer available from the verb at all.
    type: 'listening',
    id: 's10-ear',
    title: 'Who Is Speaking?',
    frSub: "À l'oreille",
    layer: 'core',
    questionsInModal: true,
    terms: ['silentEnding', 'audibleTwo'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], audioFirst: true, recordingId: 'rec-a2-01-ear' },
    say: 'Four lines. Two of them your ear can settle and two of them it cannot, and knowing which is which is the skill.',
    lines: [
      { fr: fr('fr.a2.verbes.111'), en: 'He is looking for the station.' },
      { fr: fr('fr.a2.verbes.114'), en: 'We are looking for the station.' },
      { fr: fr('fr.a2.verbes.115'), en: 'You are looking for the station.' },
      { fr: fr('fr.a2.verbes.113'), en: 'They dance well.' },
    ],
    questions: [
      {
        q: 'You hear the verb « cherche » on its own, with no pronoun. How many people could be doing it?',
        opts: ['One, certainly', 'Two, certainly', 'One or several, the sound does not say', 'It is not a real form'],
        correct: 2,
        why: 'je cherche, tu cherches, il cherche and ils cherchent are four spellings and one sound. Without the pronoun in front there is nothing to go on.',
      },
      {
        q: 'Listen. « Nous cherchons la gare. » What told you it was nous?',
        opts: ['The ending, which is a syllable you can hear', 'The pronoun only', 'The word gare', 'Nothing, it is a guess'],
        correct: 0,
        why: '-ons is one of the two endings that carry their own syllable, so here the verb really does tell you. This is the exception, not the rule.',
      },
      {
        q: 'Two people say « Elles dansent bien » and « Elle danse bien ». What is different out loud?',
        opts: ['The verb', 'The ending', 'The last syllable', 'Nothing at all'],
        correct: 3,
        why: 'dansent and danse are the same single syllable. The whole difference lives in elle against elles, and even that is only the s you cannot hear either.',
      },
      {
        q: 'Which of the six endings would let you name the person with your eyes shut?',
        opts: ['-e and -es', '-ons and -ez', '-ent and -e', 'All six'],
        correct: 1,
        why: 'Those two are syllables of their own. The other four give the ear nothing, which is why the pronoun is what you hold on to.',
      },
    ],
  },

  {
    // PRODUCTION, and the only kind that tests this lesson. The learner is given
    // a sound and has to choose a spelling the sound does not determine.
    type: 'groupDrill',
    id: 's11-spell',
    title: 'Write What You Cannot Hear',
    frSub: 'Écrire le silence',
    layer: 'core',
    size: 'lg',
    terms: ['silentEnding', 'stem'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a2-01-silent-four' },
    say: 'Three rounds. The sound is the same every time and the spelling is not, so read the pronoun first.',
    groups: [
      {
        label: 'One person or many',
        items: [
          { fr: fr('fr.a2.verbes.102'), itemId: 'fr.a2.verbes.102', respell: sub('fr.a2.verbes.102'), en: 'He speaks French.' },
          { fr: fr('fr.a2.verbes.105'), itemId: 'fr.a2.verbes.105', respell: sub('fr.a2.verbes.105'), en: 'They speak French.' },
        ],
        check: {
          q: 'You hear « eel PARL frahⁿ-SEH ». Which is on the page?',
          opts: ['Il parle français.', 'Ils parlent français.', 'Either one', 'Neither, it is il parlent'],
          correct: 2,
          why: 'Both, and the recording cannot settle it. This is the one question in the lesson whose true answer is that the sound does not decide.',
        },
      },
      {
        label: 'The s that only tu takes',
        items: [
          { fr: fr('fr.a2.verbes.110'), itemId: 'fr.a2.verbes.110', respell: sub('fr.a2.verbes.110'), en: 'You are looking for the station.' },
          { fr: fr('fr.a2.verbes.111'), itemId: 'fr.a2.verbes.111', respell: sub('fr.a2.verbes.111'), en: 'He is looking for the station.' },
        ],
        check: {
          q: 'Tu ___ la gare. (chercher)',
          opts: ['cherche', 'cherchent', 'cherchez', 'cherches'],
          correct: 3,
          why: 'tu always takes the s, and you will never hear it. It is the ending most often dropped in writing for exactly that reason.',
        },
      },
      {
        label: 'The one everyone pronounces',
        items: [
          { fr: fr('fr.a2.verbes.112'), itemId: 'fr.a2.verbes.112', respell: sub('fr.a2.verbes.112'), en: 'They talk loudly.' },
          { fr: fr('fr.a2.verbes.113'), itemId: 'fr.a2.verbes.113', respell: sub('fr.a2.verbes.113'), en: 'They dance well.' },
        ],
        check: {
          q: 'How much of « -ent » reaches the ear?',
          opts: ['None of it', 'The n', 'A nasal vowel', 'The whole ending'],
          correct: 0,
          why: 'None. It is the longest ending in the set and the emptiest, and treating it as a syllable is the most audible mistake in the whole lesson.',
        },
      },
    ],
  },

  {
    type: 'commonErrors',
    id: 's12-errors',
    // `swipe` and `size` are not decoration. MissionSection renders commonErrors
    // as its own swipe deck ONLY when `swipe` is set, and without it a1.01
    // mission 5 drew a blank screen on a device. The legacy a2.01.l1 authored a
    // commonErrors WITHOUT it, which is one of the four lessons named in the
    // comment at MissionSection.tsx's shared fallback.
    swipe: true,
    size: 'lg',
    title: 'Three Ways The Spelling Goes',
    frSub: "Trois pièges à l'écrit",
    layer: 'core',
    terms: ['silentEnding'],
    say: 'All three come from writing down what you heard, which was nothing.',
    errors: [
      {
        wrong: 'Writing « je parles » with an s.',
        right: 'Writing « je parle ».',
        why: 'The s belongs to tu and to nowhere else in these six. Both are said identically, so nothing you can hear will ever catch this one for you.',
      },
      {
        wrong: 'Writing « ils parle » for a group.',
        right: 'Writing « ils parlent ».',
        why: 'The ending is silent, not absent. A reader has only the spelling to go on, so the four letters are doing work in writing that they never do out loud.',
      },
      {
        wrong: 'Writing « nous parle ».',
        right: 'Writing « nous parlons ».',
        why: 'This one your ear would have caught, because -ons is a syllable. If the ending is audible and you left it off, you were reading rather than listening.',
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
      { front: 'How many of the six can your ear name?', back: `${REFRAME} Two of them, and only two.` },
      { front: 'The stem of parler', back: 'parl-. Cut the last two letters off and stop.' },
      { front: 'You, telling somebody you speak French', back: fr('fr.a2.verbes.001'), say: fr('fr.a2.verbes.001') },
      { front: 'One friend, speaking French', back: fr('fr.a2.verbes.102'), say: fr('fr.a2.verbes.102') },
      { front: 'A whole group, speaking French', back: fr('fr.a2.verbes.105'), say: fr('fr.a2.verbes.105') },
      { front: 'You and somebody else, in writing', back: fr('fr.a2.verbes.103'), say: fr('fr.a2.verbes.103') },
      { front: 'You and somebody else, out loud', back: fr('fr.a2.verbes.107'), say: fr('fr.a2.verbes.107') },
      { front: 'Asking one stranger politely about Saturdays', back: fr('fr.a2.verbes.120'), say: fr('fr.a2.verbes.120') },
      { front: 'One woman, working here', back: fr('fr.a2.verbes.108'), say: fr('fr.a2.verbes.108') },
      { front: 'A whole team, working here', back: fr('fr.a2.verbes.109'), say: fr('fr.a2.verbes.109') },
      { front: 'The two endings you can hear', back: `${AUDIBLE_ENDINGS.join(' and ')}. Everything else gives the ear nothing.` },
      { front: 'The four you cannot', back: SILENT_ENDINGS.join(', ') + '. Four spellings, one sound.' },
    ],
  },

  /* ── Act 4: nothing to lean on ───────────────────────────────────────── */

  {
    // The trap is a HABIT, not a knowledge gap, so it is drilled as one: meet it,
    // hear it, then produce against the clock. Stepped, so the three jobs are
    // three screens rather than one column below the fold.
    type: 'trapDrill',
    id: 's14-stress',
    title: 'Do Not Lean On The End',
    frSub: 'Ne pas appuyer sur la fin',
    layer: 'core',
    swipe: true,
    terms: ['flatEnding', 'silentEnding'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], wrongThenRight: true, recordingId: 'rec-a2-01-flat' },
    say: 'This is a habit rather than a gap. Say each one flat, three times, before you move on.',
    rule: {
      title: 'English weighs the end of a verb',
      // 42 words, against the 45-word core cap, and measured by the validator
      // rather than counted here. Everything cut from it is in the `flatEnding`
      // glossary term, which this section's chips surface.
      body: 'he WALKS, they WALKED. English puts weight on the end of a verb. French has nothing there to weigh: the weight lands on the last syllable of the phrase, never on the word, and leaning on an ending is heard at once.',
    },
    cards: [
      {
        promptLabel: 'they speak',
        promptSound: 'ils par-LENT',
        fr: 'ils parlent',
        ipa: '/il paʁl/',
        tip: 'Nothing after parl. The card ends where the stem ends.',
      },
      {
        promptLabel: 'you look for',
        promptSound: 'tu cher-CHES',
        fr: 'tu cherches',
        ipa: '/ty ʃɛʁʃ/',
        tip: 'One syllable for the verb. The s is written and never said.',
      },
      {
        promptLabel: 'she works',
        promptSound: 'elle tra-vaille-EUH',
        fr: 'elle travaille',
        ipa: '/ɛl tʁa.vaj/',
        tip: 'No little uh on the end. The e closes the spelling, not the sound.',
      },
      {
        promptLabel: 'we watch',
        promptSound: 'nous re-gar-DONS',
        fr: 'nous regardons',
        ipa: '/nu ʁə.ɡaʁ.dɔ̃/',
        tip: 'Here there IS an ending, and still no N at the end of it.',
      },
    ],
    drill: [
      { promptSay: 'ils parlent', opts: ['eel parl', 'eel par-LENT', 'eel par-LEUH'], correct: 0 },
      { promptSay: 'tu cherches', opts: ['tü shair-SHESS', 'tü shairsh', 'tü shair-SHAY'], correct: 1 },
      { promptSay: 'nous regardons', opts: ['noo ruh-gar-DONN', 'noo ruh-GARD', 'noo ruh-gar-dohⁿ'], correct: 2 },
      { promptSay: 'vous cherchez', opts: ['voo shair-shay', 'voo shair-SHEZZ', 'voo shairsh'], correct: 0 },
      { promptSay: 'elle travaille', opts: ['el tra-vah-YEUH', 'el tra-vahy', 'el tra-VAY-uh'], correct: 1 },
      { promptSay: 'ils dansent', opts: ['eel dahⁿ-SENT', 'eel dahⁿ-SUH', 'eel dahⁿs'], correct: 2 },
    ],
    // Four steps, one job each. `audio` is not optional: validateLesson refuses a
    // stepped trapDrill whose steps never reach the section's own audio, and
    // without it the wrong-then-right take would be authored and never played.
    steps: [
      { label: 'The rule', kind: 'rule', title: 'Where English Puts The Weight' },
      { label: 'The traps', kind: 'cards', title: 'Four Endings You Will Want To Say' },
      { label: 'Hear it', kind: 'audio', title: 'Wrong, Then Right' },
      { label: 'Prove it', kind: 'drill', title: 'Which One Did You Say?', gate: true },
    ],
  },

  {
    type: 'commonErrors',
    id: 's15-slips',
    swipe: true,
    size: 'lg',
    title: 'Two Ways It Goes Out Loud',
    frSub: 'Deux pièges à voix haute',
    layer: 'core',
    terms: ['flatEnding', 'infinitive'],
    say: 'Neither of these stops you being understood, and both are heard immediately.',
    errors: [
      {
        wrong: 'Saying « ils par-LENT », with the ending sounded.',
        right: 'Saying « ils parl », and stopping.',
        why: 'The letters are there for the reader. Sounding them turns one syllable into two and marks the sentence as read rather than spoken.',
      },
      {
        wrong: 'Reaching for « je travailler » when the form will not come.',
        right: 'Reaching for « je travaille », even if you are not sure of the spelling.',
        why: 'English lets a bare verb stand and French does not. The naming form in a sentence is the one error here that a listener has to work to understand.',
      },
    ],
  },

  {
    // The one card in the lesson where a stem-changing verb appears at all, and
    // it appears in order to be handed over. Nothing here reaches a deck, a
    // drill, a dictée or a quiz answer; the batch and the test both prove that
    // against the production surfaces rather than against every string, because
    // a guard written over every string fires on legitimate context and gets
    // deleted by the next author.
    type: 'cardDeck',
    id: 's16-notmine',
    title: 'Two Things This Is Not',
    frSub: "Ce que ce n'est pas",
    hint: 'Swipe through the three cards.',
    render: 'deck',
    layer: 'core',
    size: 'lg',
    terms: ['stem', 'infinitive'],
    say: 'Two exceptions, both named so you stop looking for them, and both belong to the next two units.',
    cards: [
      {
        label: 'Not this one',
        head: 'aller ends in -er and is not one of these',
        fr: 'aller',
        sub: 'the one real trap in the ending',
        body: 'It looks exactly like the thirty and behaves like nothing in this lesson. Do not try the machine on it. It has a unit of its own further along the trail.',
      },
      {
        label: 'Almost this one',
        head: 'A few change one letter in the stem',
        fr: 'manger · commencer · préférer',
        sub: 'regular endings, moving stem',
        body: 'The endings you just learned are exactly right for these. What moves is one letter in front of them, for a reason you can predict, and that is the very next lesson.',
      },
      {
        label: 'What you have',
        head: 'Thirty verbs and a machine',
        body: `${REFRAME} The endings do not change again. Everything ahead of you is either a different set of endings or a stem that moves, and you have the shape of both.`,
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
    say: 'Pronoun and verb as one movement, and flat. A form on its own proves nothing.',
    skill: 'speak',
    itemIds: SPEAK_IDS,
  },

  {
    // THE DICTÉE IS THE OWNS, AND ITS MODE IS NOT A FREE CHOICE.
    //
    // dicteeMode() switches to WORD tiles above 16 letters, and word mode hands
    // every real word over pre-spelled: `parles` would arrive as a tile and the
    // learner would never decide anything. Every one of these seven targets is
    // under the limit and spells from LETTERS, which is the only mode that can
    // test a silent ending. The batch proves that through the real function
    // rather than restating the threshold, and the test does it again.
    type: 'dictation',
    id: 's18-dictation',
    title: 'Spell What You Hear',
    frSub: 'La dictée',
    layer: 'core',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], maxPlays: 4, recordingId: 'rec-a2-01-silent-four' },
    say: 'Seven lines, and every one of them ends in something you will not hear. The pronoun is your only evidence.',
    itemIds: DICTATION_IDS,
  },

  {
    type: 'scenario',
    id: 's19-scenario',
    title: 'Back At The Desk',
    frSub: 'À vous',
    layer: 'core',
    terms: ['nousOn', 'silentEnding'],
    say: 'The same desk, a week later. Every answer wants a person on the end of a verb.',
    setting: 'You are back at the community centre to sort out the class you did not get. Nadia recognises you and picks up where you left off.',
    turns: [
      {
        ai: 'Rebonsoir. Vous cherchez toujours le cours du soir ?',
        en: 'Good evening again. Are you still looking for the evening class?',
        user: 'Oui, je cherche le cours du soir.',
        userEn: 'Yes, I am looking for the evening class.',
        alts: [
          { fr: 'Oui, toujours.', en: 'Yes, still.' },
          { fr: 'Oui, je cherche le cours du mardi soir.', en: 'Yes, I am looking for the Tuesday evening class.' },
        ],
      },
      {
        ai: 'Et vous travaillez quels jours, exactement ?',
        en: 'And which days do you work, exactly?',
        user: 'Je travaille lundi et jeudi.',
        userEn: 'I work Monday and Thursday.',
        alts: [
          { fr: 'Lundi et jeudi.', en: 'Monday and Thursday.' },
          { fr: 'Je travaille le lundi et le jeudi.', en: 'I work Mondays and Thursdays.' },
        ],
      },
      {
        ai: 'Vous venez seul, ou avec quelqu un ?',
        en: 'Are you coming on your own, or with somebody?',
        user: 'On arrive à deux.',
        userEn: 'The two of us are coming.',
        alts: [
          { fr: 'Nous arrivons à deux.', en: 'The two of us are coming.' },
          { fr: 'Avec un ami. On arrive à deux.', en: 'With a friend. The two of us are coming.' },
        ],
      },
      {
        ai: 'Vos amis parlent déjà un peu français ?',
        en: 'Do your friends already speak a little French?',
        user: 'Ils parlent un peu.',
        userEn: 'They speak a little.',
        alts: [
          { fr: 'Un peu, oui.', en: 'A little, yes.' },
          { fr: 'Ils parlent un peu et ils étudient le soir.', en: 'They speak a little and they study in the evening.' },
        ],
      },
      {
        ai: 'Parfait. Alors je vous mets au mardi et au jeudi.',
        en: 'Perfect. Then I will put you down for Tuesday and Thursday.',
        user: 'Merci beaucoup.',
        userEn: 'Thank you very much.',
        alts: [
          { fr: 'Merci, c est parfait.', en: 'Thank you, that is perfect.' },
          { fr: 'Merci. On arrive jeudi, alors.', en: 'Thank you. We will be there on Thursday, then.' },
        ],
      },
    ],
  },

  {
    type: 'reading',
    id: 's20-reading',
    title: 'A Tuesday At The Centre',
    frSub: 'Un mardi au centre',
    layer: 'core',
    terms: ['silentEnding', 'nousOn'],
    // REQUIRED for the glossary to exist at all. MissionSection routes a reading
    // section to ReadingMission (and so to PassagePage) only when this flag is
    // set WITH questions. a1.01 shipped five entries down the fallback path and
    // they rendered nowhere.
    questionsInModal: true,
    say: 'Read it once for the shape. Every one of the six forms is in here. Tap any word you do not know.',
    // ONE LINE, deliberately. PassagePage does text.split(/(?<=[.!?»])\s+/) and
    // renders the pieces inline in a single TX, so every authored newline is
    // swallowed.
    //
    // THE A1 RULE, WHICH HOLDS AT A2 (Paul, 2026-08-04): if it is not inside
    // « », it is in English. The stage directions are context, and context is
    // instruction.
    text:
      'Six in the evening at the community centre, and the corridor is full. '
      + '« Bonsoir. Vous cherchez le cours du soir ? » '
      + '« Oui. Je parle français, mais pas beaucoup. » '
      + 'Two other people are waiting behind you with the same form in their hands. '
      + '« Et eux ? » '
      + '« Ils habitent à Montréal depuis deux ans. Ils parlent bien. » '
      + 'Nadia looks at the list and then at the clock on the wall. '
      + '« Alors on commence à sept heures. Vous travaillez le samedi ? » '
      + '« Non. Nous restons à la maison le samedi. » '
      + 'She writes two names down and hands the card across.',
    // Every entry is a single whitespace-delimited token that really appears
    // between the guillemets: the reader strips punctuation and lowercases
    // before matching, so an entry that is not a bare token is an underline that
    // never appears. MAX_GLOSS_WORDS is four and every key here is one word.
    // Checked through the REAL matcher in the test.
    glossary: [
      { word: 'cherchez', en: 'are looking for', note: 'vous plus -ez, one of the two endings you can hear.' },
      { word: 'habitent', en: 'live', note: 'ils plus -ent. Four letters and no sound at all; only ils tells you.' },
      { word: 'parlent', en: 'speak', note: 'The same -ent again. Said exactly like il parle.' },
      { word: 'travaillez', en: 'work', note: 'The audible one again, and identical to the naming form travailler.' },
      { word: 'restons', en: 'are staying', note: 'nous plus -ons. In speech this sentence would more often start with on.' },
    ],
    questions: [
      { q: 'Two sentences in this passage use an ending you could hear, and three use one you could not. Which two are audible?', a: 'Vous cherchez and vous travaillez, both -ez, plus nous restons with -ons. The -e and -ent endings on parle, habitent and parlent give the ear nothing, so the pronoun is the only evidence in those three.' },
      { q: '« Ils parlent bien » and « Il parle bien » would sound identical. What decides which one is written here?', a: 'Only the ils in front of it, and the two other people waiting behind you. There is no sound anywhere in the sentence that settles it.' },
      { q: 'Nadia says « on commence à sept heures ». What would she have written instead?', a: 'nous commençons. on is what gets said and nous is what gets written, and on takes the same form as il, so the ending she used is the silent one.' },
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
    terms: ['stem', 'silentEnding', 'nousOn'],
    sheetId: 'sheet.a2.01.endings',
    say: 'Rate each card objectively. Again, hard, or easy. The ones you mark again come back.',
    cards: [
      { front: 'How many of the six can the ear name?', back: `${REFRAME} Two of six, and the pronoun covers the rest.` },
      { front: 'How do you build any -er verb?', back: 'Cut the last two letters off the naming form, then put the person on what is left.' },
      { front: 'The six endings, in order', back: ENDINGS.map((e) => e.ending).join(' · ') },
      { front: 'Which two make a sound?', back: `${AUDIBLE_ENDINGS.join(' and ')}. OHⁿ and AY, each a syllable of its own.` },
      { front: 'Which four make none?', back: SILENT_ENDINGS.join(', ') + '. One sound between all four of them.' },
      { front: 'What you write for we', back: fr('fr.a2.verbes.106'), say: fr('fr.a2.verbes.106') },
      { front: 'What you say for we', back: fr('fr.a2.verbes.107'), say: fr('fr.a2.verbes.107') },
      { front: 'Which form does on take?', back: 'The il form, every time. on regarde, never on regardons.' },
      { front: 'One person working here', back: fr('fr.a2.verbes.108'), say: fr('fr.a2.verbes.108') },
      { front: 'A whole team working here', back: fr('fr.a2.verbes.109'), say: fr('fr.a2.verbes.109') },
      { front: 'The ending only tu ever takes', back: '-es. Silent, and the one most often left off in writing.' },
      { front: 'vous parlez sounds exactly like…', back: 'parler, the naming form. Only the vous in front separates them.' },
      { front: 'A verb you were never taught: tu bavardes', back: 'Stem bavard-, tu ending -es. The machine works on anything regular.' },
      { front: 'The one -er verb this does not work on', back: 'aller. It is its own unit further along the trail.' },
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
    body: 'You have taken the naming form apart, put six endings on it, heard which two of them survive the trip to somebody else\'s ear, and written the four that do not. You have used the pattern on a verb this lesson never showed you. What is left is the part that says whether it stuck. Each round is tied to one of the mistakes this lesson exists to stop, and failing a round gets you its drill before the next one starts. The drill is the teaching, not the punishment.',
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
        targets: ['err-stem-lost', 'err-silent-ending'],
        say: 'Two letters off, one person on.',
        questions: [
          {
            q: 'What is the stem of regarder?',
            format: 'mcq',
            opts: ['regard', 'regarde', 'regar', 'regarder'],
            correct: 0,
            why: 'The last two letters come off and nothing else moves. regard- takes all six endings without changing.',
            ref: 's04-machine',
          },
          {
            q: 'Write the form that goes with je, for the verb habiter.',
            format: 'typeIn',
            accept: ['habite', "j'habite", 'j habite'],
            answer: 'habite',
            why: 'Stem habit-, je ending -e. The e is silent, so nothing about the sound would have told you it was there.',
            ref: 's04-machine',
          },
          {
            q: 'Fix this. Somebody asking about your week: « Je travailler lundi. »',
            format: 'errorSpot',
            accept: ['Je travaille lundi', 'travaille'],
            answer: 'Je travaille lundi.',
            why: 'The naming form cannot stand in a sentence. English lets a bare verb do this and French has no bare form at all, which is why the reflex is so strong.',
            ref: 's01-scene',
          },
          {
            q: 'You have never met the verb bavarder, meaning to chat. Write the nous form.',
            format: 'typeIn',
            accept: ['bavardons', 'nous bavardons'],
            answer: 'bavardons',
            why: 'Stem bavard-, nous ending -ons. You were not taught this verb, and that is what regular means.',
            ref: 's07-thirty',
          },
          {
            q: 'Which of these is NOT a regular -er verb?',
            format: 'mcq',
            opts: ['montrer', 'aller', 'fermer', 'oublier'],
            correct: 1,
            why: 'aller ends in -er and behaves like nothing in this lesson. It is the one real trap in the ending and it has a unit of its own.',
            ref: 's16-notmine',
          },
          {
            q: 'How many endings does a regular -er verb have in the present?',
            format: 'mcq',
            opts: ['Four', 'Nine', 'It depends on the verb', 'Six'],
            correct: 3,
            why: 'Six endings for nine pronouns, because il, elle and on share one and ils and elles share another. That collapse is a1.05\'s and it holds for every verb.',
            ref: 's05-six',
          },
        ],
      },
      {
        id: 'r2-the-endings',
        label: 'The four you cannot hear',
        targets: ['err-silent-ending', 'err-hear-person'],
        say: 'The sound will not help you here. Read the pronoun.',
        questions: [
          {
            q: 'Ils ___ français. (parler)',
            format: 'typeIn',
            accept: ['parlent'],
            answer: 'parlent',
            why: 'ils takes -ent, four letters and no sound. Out loud this is identical to il parle, so only the ils decides it.',
            ref: 's05-six',
          },
          {
            q: 'Tu ___ la gare. (chercher)',
            format: 'typeIn',
            accept: ['cherches'],
            answer: 'cherches',
            why: 'tu always takes the s and you will never hear it. It is the ending most often left off in writing for exactly that reason.',
            ref: 's11-spell',
          },
          {
            q: 'Fix this. One woman, at work: « Elle travaillent ici. »',
            format: 'errorSpot',
            accept: ['Elle travaille ici', 'travaille'],
            answer: 'Elle travaille ici.',
            why: 'elle is one person and takes -e. Both spellings are said the same way, which is why this survives being read back aloud.',
            ref: 's09-pronoun',
          },
          {
            q: 'Which ending belongs to tu, and to nothing else in the six?',
            format: 'mcq',
            opts: ['-e', '-ent', '-es', '-ons'],
            correct: 2,
            why: '-es is tu\'s alone. -e is shared by je and il, and -ent belongs to ils and elles.',
            ref: 's05-six',
          },
          {
            q: 'Tap the letters you do not say.',
            format: 'tapSilent',
            word: 'parlent',
            correct: 'ent',
            why: 'The whole ending. It is the longest of the six and the emptiest, and treating it as a syllable is the most audible mistake in this lesson.',
            ref: 's08-onesound',
          },
          {
            q: 'Fix this. You, about yourself: « Je parles français. »',
            format: 'errorSpot',
            accept: ['Je parle français', 'parle'],
            answer: 'Je parle français.',
            why: 'The s belongs to tu. Nothing you can hear will ever catch this one, so it has to be caught by the pronoun on the page.',
            ref: 's12-errors',
          },
        ],
      },
      {
        id: 'r3-by-ear',
        label: 'By ear',
        targets: ['err-hear-person', 'err-silent-ending'],
        say: 'Two of these the sound settles. One of them it does not, and saying so is the right answer.',
        questions: [
          {
            q: 'Listen. Which is on the page?',
            format: 'listenChoose',
            audio: { mode: 'tts', lang: 'fr-FR', clip: 'Il parle français.', recordingId: 'rec-a2-01-silent-four' },
            say: 'Il parle français.',
            opts: ['Il parle français.', 'Ils parlent français.', 'Both are said exactly like this', 'Neither, it is il parlent'],
            correct: 2,
            why: 'Both, and no recording could separate them. This is the whole lesson in one question: the sound does not decide, and the pronoun on the page does.',
            ref: 's11-spell',
          },
          {
            q: 'Listen. Who is speaking?',
            format: 'listenChoose',
            audio: { mode: 'tts', lang: 'fr-FR', clip: 'Nous cherchons la gare.', recordingId: 'rec-a2-01-paradigm' },
            say: 'Nous cherchons la gare.',
            opts: ['nous', 'tu', 'il', 'You cannot tell'],
            correct: 0,
            why: '-ons carries its own syllable, so here the verb really does tell you. That is true of exactly two of the six endings.',
            ref: 's10-ear',
          },
          {
            q: 'Which two endings could you identify with your eyes shut?',
            format: 'mcq',
            opts: ['-e and -es', '-es and -ent', '-e and -ent', '-ons and -ez'],
            correct: 3,
            why: 'Those two are syllables of their own. The other four give the ear nothing at all, which is why the pronoun is what you hold on to.',
            ref: 's10-ear',
          },
          {
            q: 'You hear « voo tra-va-YAY ». Which two things could that be?',
            format: 'mcq',
            opts: ['vous travaillez or the naming form travailler', 'vous travaillez or nous travaillons', 'tu travailles or il travaille', 'Only vous travaillez'],
            correct: 0,
            why: '-ez and -er are the same sound, so the vous in front is the only thing separating the sentence form from the dictionary one.',
            ref: 's05-six',
          },
          {
            q: 'Somebody says a verb with no pronoun in front of it and the ending is silent. How many people could be doing it?',
            format: 'mcq',
            opts: ['One', 'Two', 'One or several, the sound does not say', 'Three'],
            correct: 2,
            why: 'je, tu, il and ils all land on the same sound. Without the pronoun there is nothing left to go on, which is why French never drops it.',
            ref: 's10-ear',
          },
          {
            q: 'Write what a whole team of women working here would be, in full.',
            format: 'typeIn',
            accept: ['Elles travaillent ici.', 'Elles travaillent ici'],
            answer: 'Elles travaillent ici.',
            why: 'Said out loud this is identical to Elle travaille ici. Four letters of difference exist only for the reader.',
            ref: 's09-pronoun',
          },
        ],
      },
      {
        id: 'r4-nous-or-on',
        label: 'nous or on',
        targets: ['err-nous-form', 'err-silent-ending'],
        say: 'One meaning, two registers, and two different endings.',
        questions: [
          {
            q: 'Which form does on take?',
            format: 'mcq',
            opts: ['The nous form', 'The il form', 'The ils form', 'Its own form'],
            correct: 1,
            why: 'on takes the il form, so it is on regarde and never on regardons. That is what makes it cost you no new ending.',
            ref: 's06-nous-on',
          },
          {
            q: 'Fix this. Somebody saying what the two of you are watching: « On regardons la télé. »',
            format: 'errorSpot',
            accept: ['On regarde la télé', 'regarde'],
            answer: 'On regarde la télé.',
            why: 'on means we and takes the il ending. The meaning pulls one way and the form goes the other, which is the whole difficulty of it.',
            ref: 's06-nous-on',
          },
          {
            q: 'Nous ___ à la maison. (rester)',
            format: 'typeIn',
            accept: ['restons'],
            answer: 'restons',
            why: 'nous takes -ons. This is one of the two endings you would have heard, so getting it wrong in writing means you were reading rather than listening.',
            ref: 's06-nous-on',
          },
          {
            q: 'You are writing an email to a class about what your group does. Which is right?',
            format: 'mcq',
            opts: ['On étudie le soir.', 'Nous étudie le soir.', 'On étudions le soir.', 'Nous étudions le soir.'],
            correct: 3,
            why: 'Writing takes nous, and nous takes -ons. The first option is not wrong French; it is just the spoken register in a written place.',
            ref: 's06-nous-on',
          },
          {
            q: 'You are saying the same thing out loud to a friend. Which would you actually say?',
            format: 'mcq',
            opts: ['Nous étudions le soir.', 'On étudie le soir.', 'On étudions le soir.', 'Nous étudie le soir.'],
            correct: 1,
            why: 'Speech takes on, and on takes the il form. Both of the first two are correct French and only one of them is what a room sounds like.',
            ref: 's06-nous-on',
          },
          {
            q: 'Vous ___ la gare. (chercher)',
            format: 'typeIn',
            accept: ['cherchez'],
            answer: 'cherchez',
            why: 'vous takes -ez, said AY. It is the second of the two audible endings, and it sounds exactly like the naming form.',
            ref: 's05-six',
          },
        ],
      },
      {
        id: 'r5-out-loud',
        label: 'Out loud',
        targets: ['err-stress-ending', 'err-hear-person'],
        say: 'Flat, and stopping where the stem stops.',
        questions: [
          {
            q: 'How is « ils parlent » said?',
            format: 'mcq',
            opts: ['eel par-LENT', 'eel PARL', 'eel par-LEUH', 'eel par-LOHⁿ'],
            correct: 1,
            why: 'One syllable for the verb, and the card ends where the stem ends. Sounding the -ent turns one syllable into two and is heard immediately.',
            ref: 's14-stress',
          },
          {
            q: 'Say it out loud, the way you would answer at the desk.',
            format: 'speak',
            target: 'Je travaille lundi et jeudi.',
            ipa: '/ʒə tʁa.vaj lœ̃.di e ʒø.di/',
            why: 'One movement, no weight on the verb. The four letters you added to travaill- do not exist for the person listening.',
            ref: 's17-speak',
          },
          {
            q: 'Where does the weight land in a French phrase?',
            format: 'mcq',
            opts: ['On the verb ending', 'On the pronoun', 'On the last syllable of the phrase', 'On the first word'],
            correct: 2,
            why: 'At the end of the phrase, not the end of the word. English leans on the end of a verb and French has nothing there to lean on.',
            ref: 's14-stress',
          },
          {
            q: 'Fix this. A group at a party: « Elles dansent bien », said as elles dahⁿ-SENT bien.',
            format: 'errorSpot',
            accept: ['el dahⁿs byaⁿ', 'dahⁿs', 'el dahⁿs BYAⁿ'],
            answer: 'el dahⁿs BYAⁿ',
            why: 'dansent is one syllable. The -ent adds four letters to the page and nothing to the air.',
            ref: 's14-stress',
          },
          {
            q: 'Which pair is said exactly the same way?',
            format: 'mcq',
            opts: ['nous parlons and vous parlez', 'je parle and nous parlons', 'vous parlez and ils parlent', 'tu parles and ils parlent'],
            correct: 3,
            why: 'Both land on parl and stop. Only the pronoun in front separates them, which is true of four of the six forms.',
            ref: 's08-onesound',
          },
          {
            q: 'Write the sentence you would say about a friend who works here.',
            format: 'typeIn',
            accept: ['Elle travaille ici.', 'Elle travaille ici', 'Il travaille ici.', 'Il travaille ici'],
            answer: 'Elle travaille ici.',
            why: 'One person takes -e, silent. If you wrote the plural, the sound would have been no help either way and the pronoun was the only clue.',
            ref: 's09-pronoun',
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
    say: 'Four things, and then the lesson that picks this up.',
    body: 'You can build the present tense of any regular -er verb, including ones nobody has shown you, and that is most of the verbs in the language. You know which two of the six endings survive the trip to somebody else\'s ear and which four do not, which is why French keeps its subject pronouns when English could drop them. The next unit takes the same six endings and moves one letter in the stem in front of them, for a reason you will be able to predict. Nothing about the endings changes again.',
    points: [
      `${REFRAME}`,
      'Cut the last two letters off the naming form, then put the person on what is left.',
      `${AUDIBLE_ENDINGS.join(' and ')} are the two you hear. ${SILENT_ENDINGS.join(', ')} give the ear nothing.`,
      // Deliberately a PARAPHRASE and not the NOUS_ON constant. That sentence has
      // exactly one home in this lesson, s06-nous-on, because nineteen later A2
      // lessons quote it and "where is this said?" has to have one answer. The
      // batch and the test both fail if it appears in a second section.
      'Write the nous form and say the on one. on takes the il ending, so it costs you nothing new.',
    ],
  },
];

/* ─── The progress card counts the journey rather than restating it ────────
 *
 * Derived here rather than typed. It throws rather than degrades: a progress
 * card that silently reports "0 of 0" is worse than a build that stops.        */
{
  const ix = SECTIONS.findIndex((s) => (s as { id?: string }).id === 's22-progress');
  const card = SECTIONS[ix];
  const quiz = SECTIONS.find((s) => s.type === 'quiz');
  if (!card || card.type !== 'progressCheck' || !quiz || quiz.type !== 'quiz') {
    throw new Error('a2.01.l1: the progress card or the quiz is missing, so the card cannot count what is not there');
  }
  card.stats = [
    { k: 'Verbs you can build', v: String(THE_THIRTY.length) },
    { k: 'Endings you can hear', v: `${AUDIBLE_ENDINGS.length} of ${ENDINGS.length}` },
    // `ix` is the count of sections BEFORE this one, which is exactly how many
    // missions the learner has finished when they reach it.
    { k: 'Missions done', v: `${ix} of ${SECTIONS.length}` },
    { k: 'Exam rounds ahead', v: String(quiz.rounds?.length ?? 0) },
  ];
}

/* ─── Acts ─────────────────────────────────────────────────────────────────
 *
 * Six, and the shape is the doctrine's: scene, paradigm, Owns, trap, production,
 * proof. The Owns act is the heaviest by mission count (six against the
 * paradigm's four) and by screen count, which is the one structural thing this
 * lesson has to get right: nine consecutive paradigm lessons decay into a
 * reference document with pictures unless each has one job.
 *
 * `estScreens` is what the mission actually costs, not a guess rounded to a nice
 * number, because it is divided by the rest points to check no stretch runs past
 * the checkpoint-spacing limit of 22.                                          */

const ACTS: LessonAct[] = [
  {
    id: 'act1',
    title: 'The sentence that stopped',
    sections: ['s01-scene', 's02-goals', 's03-derived'],
    milestone: 'You know what runs out mid-sentence, and that this verb is worked out rather than memorised.',
    estScreens: 17,
    restPoints: ['s01-scene/after-break'],
  },
  {
    id: 'act2',
    title: 'One stem, six endings',
    sections: ['s04-machine', 's05-six', 's06-nous-on', 's07-thirty'],
    milestone: 'You can build all six forms of any of the thirty, and you know which we to write.',
    estScreens: 24,
    restPoints: ['s07-thirty/halfway'],
  },
  {
    id: 'act3',
    title: 'Four spellings, one sound',
    sections: ['s08-onesound', 's09-pronoun', 's10-ear', 's11-spell', 's12-errors', 's13-flash'],
    milestone: 'You can name the person from the pronoun, and write an ending your ear never gave you.',
    estScreens: 40,
    restPoints: ['s10-ear/halfway', 's13-flash/halfway'],
  },
  {
    id: 'act4',
    title: 'Nothing to lean on',
    sections: ['s14-stress', 's15-slips', 's16-notmine'],
    milestone: 'You say it flat, and you know which two things in this ending are not yours.',
    estScreens: 20,
  },
  {
    id: 'act5',
    title: 'Out in the world',
    sections: ['s17-speak', 's18-dictation', 's19-scenario', 's20-reading'],
    milestone: 'You have said all six out loud and spelled the silent four from sound alone.',
    estScreens: 40,
    restPoints: ['s17-speak/halfway', 's18-dictation/halfway'],
  },
  {
    id: 'act6',
    title: 'Prove it',
    sections: ['s21-review', 's22-progress', 's23-quiz', 's24-roundup'],
    milestone: 'Lesson complete. The next unit keeps these endings and moves the stem.',
    estScreens: 48,
    restPoints: ['s21-review/halfway', 's23-quiz/after-r2', 's23-quiz/after-r4'],
  },
];

/* ─── Deck tranches ────────────────────────────────────────────────────────
 *
 * One slice per act, index-aligned. An item is released the act it is TAUGHT,
 * not the act it is first mentioned: releasing the whole set at mission one
 * turns the flashcard hub into a wall on the morning the learner is least able
 * to read it. Acts 4 and 6 release nothing because they teach no new item.     */

const DECK_TRANCHE: string[][] = [
  // Act 1 releases NOTHING. The scene is played on display strings — the
  // sentence that died is `Je travaille lundi.`, which is not a corpus row
  // because a row is released to spaced repetition and this lesson does not
  // drill the sentence somebody failed to finish. An earlier draft released
  // fr.a2.verbes.001 here and the test caught it: act 1 never puts that sentence
  // on a screen, so the card would have arrived in the hub before the lesson had
  // shown it.
  [],
  // Act 2: the paradigm, the register pair, and the thirty.
  [
    'fr.a2.verbes.001',
    ...familyIds('paradigm'),
    ...familyIds('register'),
    ...THE_THIRTY.map(verbId),
  ],
  // Act 3: the pairs the ear cannot separate, and the two it can.
  [...familyIds('ear'), ...familyIds('audible')],
  [],
  // Act 5: the applied sentences, released once the system that builds them has
  // been given. fr.a2.verbes.061 is reading only and is released here because
  // the passage is where it appears.
  [...familyIds('apply'), ...READING_ONLY_IDS],
  [],
];

/* ─── Error triggers and their drills ──────────────────────────────────────
 *
 * FIVE triggers, five drills, five rounds, and each round leads on a DIFFERENT
 * trigger. That is deliberate: `drillForRound` returns the first target that has
 * a drill and then stops, so a drill that is never named first can never fire.
 * a1.05 ships two such drills and its own test fails on them today.            */

const ERROR_TRIGGERS: ErrorTrigger[] = [
  {
    id: 'err-stem-lost',
    description: 'Reaches for the naming form under pressure, or cuts the wrong amount off it: je travailler, je travail.',
    detectOn: ['s01-scene', 's04-machine', 's23-quiz/r1-the-machine'],
    drill: 'drill-cut-the-er',
    retest: 'retest-cut-the-er',
  },
  {
    id: 'err-silent-ending',
    description: 'Writes the wrong silent ending, because no sound distinguishes them: je parles, ils parle, elle travaillent.',
    detectOn: ['s11-spell', 's12-errors', 's18-dictation', 's23-quiz/r2-the-endings'],
    drill: 'drill-endings-write',
    retest: 'retest-endings-write',
  },
  {
    id: 'err-hear-person',
    description: 'Tries to name the person from the verb, which for four of the six forms is not information the sound carries.',
    detectOn: ['s09-pronoun', 's10-ear', 's23-quiz/r3-by-ear'],
    drill: 'drill-hear-person',
    retest: 'retest-hear-person',
  },
  {
    id: 'err-nous-form',
    description: 'Puts the nous ending on on, or writes on where a written register wants nous.',
    detectOn: ['s06-nous-on', 's19-scenario', 's23-quiz/r4-nous-or-on'],
    drill: 'drill-nous-on',
    retest: 'retest-nous-on',
  },
  {
    id: 'err-stress-ending',
    description: 'Leans on the ending out loud, sounding -ent or adding a vowel after a silent -e. A habit, not a knowledge gap.',
    detectOn: ['s14-stress', 's15-slips', 's23-quiz/r5-out-loud'],
    drill: 'drill-flat-ending',
    retest: 'retest-flat-ending',
  },
];

const DRILLS: LessonDrill[] = [
  {
    id: 'drill-cut-the-er',
    title: 'Naming form in, stem out',
    format: 'flashcard',
    coach: 'The naming form is on the left. Say the stem out loud before you turn the card.',
    pairs: [
      ['parler', 'parl-'],
      ['travailler', 'travaill-'],
      ['chercher', 'cherch-'],
      ['habiter', 'habit-'],
      ['écouter', 'écout-'],
      ['oublier', 'oubli-'],
    ],
  },
  {
    id: 'retest-cut-the-er',
    title: 'One more time',
    format: 'mcq',
    q: 'What is left of montrer once the ending comes off?',
    opts: ['montre', 'montr', 'mont'],
    correct: 1,
    why: 'The last two letters, and nothing else. montr- takes all six endings without moving.',
  },
  {
    id: 'drill-endings-write',
    title: 'Which ending, for which person?',
    format: 'flashcard',
    coach: 'The person is on the left. Say the ending, then say whether you would hear it.',
    pairs: [
      ['je', '-e, silent'],
      ['tu', '-es, silent, and only tu takes it'],
      ['il, elle, on', '-e, silent'],
      ['nous', '-ons, and you hear it'],
      ['vous', '-ez, and you hear it'],
      ['ils, elles', '-ent, silent, all four letters'],
    ],
  },
  {
    id: 'retest-endings-write',
    title: 'One more time',
    format: 'mcq',
    q: 'Ils ___ ici. (travailler)',
    opts: ['travaille', 'travaillent', 'travaillons'],
    correct: 1,
    why: 'ils takes -ent. It makes no sound, so the only thing that decides it is the pronoun in front.',
  },
  {
    id: 'drill-hear-person',
    title: 'What did the sound tell you?',
    format: 'sort',
    buckets: ['The verb told me', 'Only the pronoun told me'],
    // Item ids, not display strings: a drill scores against the corpus, so it
    // plays the same audio and reads the same spelling as every other card that
    // teaches these. Passing display strings here validates as broken ids.
    items: [
      'fr.a2.verbes.103', 'fr.a2.verbes.104', 'fr.a2.verbes.114', 'fr.a2.verbes.115',
      'fr.a2.verbes.102', 'fr.a2.verbes.105', 'fr.a2.verbes.108', 'fr.a2.verbes.109',
      'fr.a2.verbes.110', 'fr.a2.verbes.111',
    ],
    coach: 'Play each one. If the ending was a syllable of its own, the verb told you. Otherwise it did not.',
  },
  {
    id: 'retest-hear-person',
    title: 'One more time',
    format: 'mcq',
    q: 'You hear a verb with a silent ending and no pronoun. Who is doing it?',
    opts: ['One person', 'Several people', 'The sound does not say'],
    correct: 2,
    why: 'je, tu, il and ils all land on the same sound. The pronoun is the only evidence there ever was.',
  },
  {
    id: 'drill-nous-on',
    title: 'Written, or said?',
    format: 'sort',
    buckets: ['What you write', 'What you say'],
    items: ['fr.a2.verbes.106', 'fr.a2.verbes.103', 'fr.a2.verbes.119', 'fr.a2.verbes.125', 'fr.a2.verbes.107', 'fr.a2.verbes.122'],
    coach: 'nous takes -ons and belongs on the page. on takes the il form and belongs in the room.',
  },
  {
    id: 'retest-nous-on',
    title: 'One more time',
    format: 'mcq',
    q: 'Which form does on take?',
    opts: ['on regardons', 'on regarde', 'on regardent'],
    correct: 1,
    why: 'The il form, every time. on means we and takes third-person singular, which is the collapse a1.05 taught.',
  },
  {
    id: 'drill-flat-ending',
    title: 'Where does it stop?',
    format: 'flashcard',
    coach: 'Read the written form, then say out loud where the sound actually stops.',
    pairs: [
      ['ils parlent', 'stops at parl'],
      ['tu cherches', 'stops at cherch'],
      ['elle travaille', 'stops at travaille, with no uh after it'],
      ['ils dansent', 'stops at dans'],
      ['nous parlons', 'ends on a nasal vowel, and no N'],
      ['vous parlez', 'ends on AY, exactly like parler'],
    ],
  },
  {
    id: 'retest-flat-ending',
    title: 'One more time',
    format: 'mcq',
    q: 'How many syllables are there in « ils dansent »?',
    opts: ['Two', 'Three', 'Four'],
    correct: 0,
    why: 'eel and dahⁿs. The -ent adds four letters to the page and no syllable at all.',
  },
];

/* ─── Reference sheets ─────────────────────────────────────────────────────
 *
 * Two, and both exist for a layout reason as much as a pedagogical one. The
 * density validator refuses a `table` at layer 'core' outright, and `tapTable`
 * is not in ownsLayout() so the in-flow version renders inside a scrolling page
 * and anything past about six rows runs off the bottom. The full versions live
 * here, at layer 'deep', where density is deliberately fine.
 *
 * This is also where the learner will be during a2.09, a2.10, a2.11 and a2.05,
 * which is why the endings sheet closes on what carries into each of them.
 *
 * ReferenceSheet.tsx draws `teach`, `letterGrid` and `table` and NOTHING ELSE. A
 * `cheatSheet` in here would draw its title and no rows, which a1.13 ships
 * today. The batch refuses any other section type in a sheet.                  */

const SHEETS: ReferenceSheet[] = [
  {
    id: 'sheet.a2.01.endings',
    title: 'The -ER endings, in full',
    layer: 'deep',
    contains: ['All nine pronouns with their ending', 'What each one sounds like', 'The silent four, listed'],
    sections: [
      {
        type: 'table',
        id: 'sheet-endings-set',
        title: 'The six endings',
        layer: 'deep',
        cols: ['Person', 'Ending', 'What you hear'],
        rows: ENDINGS.map((e) => [e.person, e.ending, e.heard]),
      },
      {
        type: 'table',
        id: 'sheet-endings-paradigm',
        title: 'parler, all nine pronouns',
        layer: 'deep',
        cols: ['Pronoun', 'parler', 'Sounds like', 'English'],
        rows: [
          ["je / j'", 'parle', '[zhuh PARL]', 'I speak'],
          ['tu', 'parles', '[tü PARL]', 'you speak, one person, close'],
          ['il', 'parle', '[eel PARL]', 'he speaks'],
          ['elle', 'parle', '[el PARL]', 'she speaks'],
          ['on', 'parle', '[ohⁿ PARL]', 'we speak, said out loud'],
          ['nous', 'parlons', '[noo par-LOHⁿ]', 'we speak, written'],
          ['vous', 'parlez', '[voo par-LAY]', 'you speak, politely or plural'],
          ['ils', 'parlent', '[eel PARL]', 'they speak, any group with a man in it'],
          ['elles', 'parlent', '[el PARL]', 'they speak, all women'],
        ],
      },
      {
        type: 'teach',
        id: 'sheet-endings-silent',
        title: 'The letters you do not say',
        layer: 'deep',
        body: 'Four of the six endings are silent, and they are silent completely: nothing is slurred or dropped, and the letters were never pronounced in the first place. The -e of je parle and il parle makes no sound. The -es of tu parles makes no sound, and the s there is the same silent s you already write on tu es. The -ent of ils parlent makes no sound either, and it is the longest ending in the set and the emptiest one, which is why it is the ending learners most want to pronounce and the one that marks a sentence as read rather than spoken. So je parle, tu parles, il parle and ils parlent are four spellings and one sound, and out loud only the pronoun in front separates them. That is the reason French keeps its subject pronouns everywhere English could drop them: the verb is not carrying the person, so something has to. Only two endings survive the trip to somebody else\'s ear. The -ons of nous parlons is a nasal vowel with no N sound at the end of it, and the -ez of vous parlez is AY, which is exactly how the naming form parler is said, so vous parlez and parler are one sound and two jobs.',
      },
      {
        type: 'teach',
        id: 'sheet-endings-next',
        title: 'What carries forward',
        layer: 'deep',
        body: 'These six endings do not change again. The next unit keeps every one of them and moves a single letter in the stem in front of them, for a reason you can predict from the spelling, so nothing you have learned here is spent. The -IR and -RE units after it swap the endings for two other short sets and leave the method exactly as it is: find the stem, add the person. The unit on the past tense will take the naming form you started from, change its last two letters, and produce something that sounds identical to what you started with, which is a problem it will hand you fully formed rather than one you have to see coming. And the two later units on agreement rest on one thing you already have: French writes distinctions it does not say. You met that here, on four endings that exist entirely for the reader.',
      },
    ],
  },
  {
    id: 'sheet.a2.01.thirty',
    title: 'The thirty verbs',
    layer: 'deep',
    contains: ['All thirty with their stem', 'What each one means', 'Why none of them changes its stem'],
    sections: [
      {
        type: 'table',
        id: 'sheet-thirty-table',
        title: 'Thirty regular -er verbs',
        layer: 'deep',
        cols: ['Verb', 'Stem', 'Meaning'],
        rows: THE_THIRTY.map((v) => [v, `${v.slice(0, -2)}-`, verbEn(v)]),
      },
      {
        type: 'teach',
        id: 'sheet-thirty-why',
        title: 'Why these thirty',
        layer: 'deep',
        body: 'Every verb here has a stem that does not move. Take the last two letters off and what is left is the same for all six persons and stays the same however the verb is used, so one pattern gives you thirty verbs and about a hundred and eighty forms. That is not true of every verb ending in -er. A small group changes one letter in the stem, and they are deliberately not on this list even though several of them are more common than some that are: manger, commencer, acheter, appeler, préférer, payer, essayer and jeter all keep these endings exactly and move something in front of them. They are the next unit and they will make more sense once this one is automatic. One verb ending in -er belongs to neither group. aller looks exactly like the thirty and behaves like nothing in this lesson, and it has a unit of its own. If you try the machine on it you will produce something that no French speaker says, so it is worth knowing by name from the start rather than discovering it at speed.',
      },
    ],
  },
];

export const VERBES_ER_LESSON: Lesson = {
  id: 'a2.01.l1',
  unitId: 'a2.01',
  // The lesson's index WITHIN its unit, not its place in the track.
  seq: 1,
  title: 'Les verbes en -ER',
  level: 'a2',
  // missions.ts derives the eyebrow from unit.seq at render time
  // (`${level} · LEÇON ${String(unit.seq).padStart(2, '0')}`), and a2.01 sits at
  // seq "1" — a STRING in the unit body, which pads to "01". The stored value is
  // a fallback and has to agree with what the renderer computes, or the two
  // disagree the moment something reads this field instead. The batch checks it
  // against the live unit rather than trusting this comment.
  tag: 'A2 · LEÇON 01',
  intro:
    'Nine in ten French verbs work exactly like this one, so learning the pattern once gives you thousands of them. Six endings, four of which make no sound at all, which is why the little word in front of the verb is doing more work than you think.',

  sections: SECTIONS,
  itemIds: ITEM_IDS,
  // v4, not v1. v2 is the pre-v2-architecture stub that has been in the unit
  // since the A2 spine was generated: seven sections, no ids, no acts, no
  // reframe, a practice at skill 'write' that draws no writing surface, and a
  // quiz whose questions have no `why`. The counter moves forward rather than
  // restarting, because a rebuild that reuses its own number reads as a rollback
  // in the log.
  //
  // v3 was applied to Postgres and then corrected before it went anywhere:
  // sons-alphabet.test.ts caught the word "honest" in a quiz `why`, which is
  // banned across the whole seed. The batch's own version guard then refused to
  // overwrite v3 with a different v3, which is the guard doing its job — the
  // alternative is Postgres and the seed both saying "v3" and holding different
  // content, which is the drift this project has lost work to twice. So the
  // counter moves again rather than the guard being relaxed. (The guard has
  // since been sharpened to allow an IDENTICAL body at the same number, which is
  // an idempotent re-run, and to refuse only a different one.)
  //
  // v5 is a2-01-verbes-er.test.ts finding nine `apply` rows that were declared
  // in itemIds, released by a tranche, and drawn by no section at all — a1.08's
  // 43-itemId failure in miniature, found by the guard rather than by a device.
  // They are spoken in s17-speak now, and act 1 releases nothing, because the
  // scene runs entirely on display strings.
  //
  // v6 is the device pass on a Pixel 6, 2026-08-11, which found the one thing no
  // test could: the scene's break card pushed its own Continue below the fold on
  // first paint. Body 35 words -> 26, coach 14 -> 8. See the note at the beat.
  //
  // v7 is the same card again: trimming the prose was not enough, because the
  // real cost was the two READING-ROW GLOSSES, 39 and 45 characters, wrapping to
  // two lines each. Cut to one line apiece, which is what a1.06 ships.
  //
  // v8 is the last line of the same card: a 20-character heading wrapping to two
  // lines. One line of heading was all that stood between Continue and the fold.
  // Three device passes on one card, and every one of them found something no
  // test could see.
  version: 8,

  grammarAssumed: [
    'The six subject pronouns and the nine they cover, introduced in a1.05',
    'on takes third-person-singular agreement, introduced in a1.05',
    'The tu against vous register split, introduced in a1.05',
    'The present tense of être, introduced in a1.06',
    'The present tense of avoir, introduced in a1.07',
    'The definite and indefinite articles, introduced in a1.04 and a1.11',
  ],
  grammarIntroduced: [
    'The present tense of regular -er verbs, as a stem plus six endings',
    'The infinitive as the form a verb is listed under and never used in',
    'That -e, -es and -ent are silent and -ons and -ez are not',
    'That the subject pronoun carries the person where the ending cannot',
    'nous as the written first-person plural against on as the spoken one',
  ],

  features: ['roleplay', 'voiceflash'],
  scenarioId: undefined,

  overview: {
    titleEn: 'Regular -ER Verbs',
    subFr: 'Les verbes en -ER',
    introFr: "Neuf verbes français sur dix marchent comme celui-ci. Six terminaisons, dont quatre ne s'entendent pas.",
    minutes: 28,
    difficulty: 2,
    glyph: 'Er',
    screens: 189,
  },

  acts: ACTS,
  reframe: REFRAME,
  errorTriggers: ERROR_TRIGGERS,
  drills: DRILLS,
  sheets: SHEETS,
  deckTranche: DECK_TRANCHE,
  terms: VERBES_ER_TERMS,

  audio: {
    defaultLang: 'fr-FR',
    speeds: [1.0, 0.65],
    coachVoice: 'coach-en-warm',
    interfaceSounds: ['correct', 'incorrect', 'checkpoint'],
    // ── The audio decisions that cannot be recovered later ─────────────────
    //
    // Written here AND pinned by a2-01-verbes-er.test.ts, because a constraint on
    // how something is recorded becomes invisible the moment the clip is
    // delivered. The first of these is the most important instruction in the
    // lesson.
    recorded: [
      {
        id: 'rec-a2-01-silent-four',
        desc: 'THE FOUR SILENT FORMS, IN ONE CONTINUOUS TAKE, BY ONE VOICE AT ONE SPEED, AND THEY MUST BE INDISTINGUISHABLE FROM EACH OTHER. This is the single most important instruction in this lesson and it is the opposite of the usual note. Do not help. Do not differentiate them. Do not lean on the ending of ils parlent to make it clearer than il parle, and do not add the faintest vowel after a silent -e. If a listener can tell any of these four apart from the audio alone, the recording has taught the opposite of what the lesson teaches. Read them at conversational pace with no pause for teaching between them. Four recordings made in four sessions are four performances and the drift between them will be heard as French; one take is the only way this works.',
        clipIds: ['je parle', 'tu parles', 'il parle', 'ils parlent', 'Il parle français.', 'Ils parlent français.', 'Tu cherches la gare.', 'Il cherche la gare.', 'Ils parlent fort.', 'Elles dansent bien.', 'On regarde la télé.', 'Elle travaille ici.'],
      },
      {
        id: 'rec-a2-01-paradigm',
        desc: 'All six forms as one continuous take, in paradigm order, by one voice at one speed, then the six full sentences in the same take. The two audible endings must sound ORDINARY rather than emphasised: -ons is a nasal vowel with no N on the end of it, and -ez is AY, identical to the naming form parler. Do not stress the verb anywhere. These are the most frequent words in the language and they are never leaned on in speech, and the whole trap this lesson drills is an English speaker putting weight where French puts none.',
        clipIds: ['je parle', 'tu parles', 'il parle', 'nous parlons', 'vous parlez', 'ils parlent', 'Je parle français.', 'Tu parles français.', 'Il parle français.', 'Nous parlons français.', 'Vous parlez français.', 'Ils parlent français.', 'Nous cherchons la gare.', 'Vous cherchez la gare.'],
      },
      {
        id: 'rec-a2-01-ear',
        desc: 'The homophone pairs, EACH PAIR IN ONE TAKE BACK TO BACK, so the identity is real rather than an artefact of two sessions: « Il parle français. » then « Ils parlent français. », then « Elle travaille ici. » then « Elles travaillent ici. » The point of every pair is that the two halves are the same, so any difference in pace, pitch or emphasis between them is a defect. The third pair is different and must be recorded differently: « Tu cherches la gare. » against « Il cherche la gare. » are NOT identical, because tü and eel are audibly different, and that pair is what proves the pronoun is doing the work. Keep the verbs identical and let the pronouns differ naturally.',
        clipIds: ['Il parle français.', 'Ils parlent français.', 'Elle travaille ici.', 'Elles travaillent ici.', 'Tu cherches la gare.', 'Il cherche la gare.', 'Elles dansent bien.'],
      },
      {
        id: 'rec-a2-01-flat',
        desc: 'The stress trap, WRONG THEN RIGHT in one take. The wrong version is an English speaker leaning on the ending: ils par-LENT with a real second syllable, tu cher-CHES with an audible s, elle travaille with a small uh after it. The right version is flat, one syllable for the verb, weight at the end of the phrase and nothing on the word. Both halves must be spoken by the same voice at the same pace, because the difference being taught is where the weight sits and not how careful the speaker is. Do not caricature the wrong one; it should sound like a competent learner, which is what makes it worth correcting.',
        clipIds: ['ils parlent', 'tu cherches', 'elle travaille', 'nous regardons', 'vous cherchez', 'ils dansent'],
      },
      {
        id: 'rec-a2-01-thirty',
        desc: 'The thirty naming forms, read as a flat list at conversational pace, one voice. Every one of them ends in the same AY sound and that sameness is the teaching: the learner should come away hearing -er as one ending rather than thirty word-endings. Do not vary the intonation to keep the list interesting. Keep roughly a second between them so a learner can repeat into the gap.',
        clipIds: [...THE_THIRTY],
      },
      {
        id: 'rec-a2-01-scene',
        desc: 'The opening scene, French bubbles only, one woman in her thirties at an ordinary reception-desk pace. The beat where she moves on (« Bon. Je vous mets au mardi, alors. ») must be brisk and unbothered rather than pointed: the whole scene turns on nobody minding, so any hint of impatience or of correction would destroy it. There is a four-second wait written into the stage direction before that line and it should be audible as a pause, not filled.',
        clipIds: ['Bonsoir. Vous cherchez quel cours ?', 'Et vous travaillez quels jours ?', 'Bon. Je vous mets au mardi, alors.'],
      },
    ],
    ambienceDefault: 'off',
  },
};

/** Exported for the authoring script, the merge script and the tests, so none of
 *  them restates a count that can drift out of agreement with the content. */
export const VERBES_ER_ITEM_IDS = ITEM_IDS;
export const VERBES_ER_SPEAK_IDS = SPEAK_IDS;
export const VERBES_ER_DICTATION_IDS = DICTATION_IDS;
export const VERBES_ER_PARADIGM_IDS = PARADIGM_IDS;
export const VERBES_ER_HOMOPHONE_PAIRS = HOMOPHONE_PAIRS;
export const VERBES_ER_REPAIRED_RESPELL = REPAIRED_RESPELL;

/** The section that must carry the whole contrast. Named here rather than in the
 *  test, so the test asserts against the lesson's own claim and a rename cannot
 *  silently move the assertion to a section that no longer holds it. */
export const CONTRAST_SECTION_ID = 's05-six';
/** The section that must be the ONLY home of the nous/on statement. */
export const NOUS_ON_SECTION_ID = 's06-nous-on';
