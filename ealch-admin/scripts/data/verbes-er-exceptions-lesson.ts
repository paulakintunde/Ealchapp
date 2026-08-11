// a2.09.l1 "Les verbes en -ER : exceptions" — the mission journey.
//
// ── THIS IS A FIRST BUILD, AND THAT WAS CHECKED ────────────────────────────
//
// a2.01's brief said `lessonIds: []` and the unit already carried a stub, which
// cost that build a rebuild it had not planned. So this one probed first. The
// a2.09 unit dump on 2026-08-11 says `"lessons": []`, and this really is a
// greenfield build at v1.
//
// ── The Owns, and why it is not the paradigm ───────────────────────────────
//
// The paradigm is a2.01's and it gets ONE mission, s04-recap, which restates
// nothing: it imports a2.01's own ENDINGS table and reads from it. What this
// lesson OWNS is the spelling AND THE REASON UNDERNEATH IT.
//
//   nous mangeons     the e keeps the g soft before o
//   nous commençons   the cedilla keeps the c soft before o
//   j'appelle         the doubled l writes the open è
//   je préfère        é opens to è, because the ending went silent
//
// Four patterns, TWO mechanisms. The first two protect a consonant that is about
// to meet a back vowel. The last two answer to the ending going silent, which is
// the fact a2.01 taught last lesson. Taught as four lists this is a page of a
// grammar book and the learner guesses forever.
//
// Weight, in missions: the paradigm act is TWO (s04, s05), the Owns act is EIGHT
// (s06 to s13), and act 4's trap is downstream of the Owns rather than of the
// table. Four of the five quiz rounds test a reason rather than a form.
//
// ── DID "TWO MECHANISMS, NOT FOUR" SURVIVE THE REAL VERB LISTS? ───────────
//
// Yes, and it came out stronger than the brief drew it.
//
// The brief treats -eler/-eter as one pattern with an unpredictable output and
// é_er as another. Measured against the forms, they are the same mechanism and
// the -eler/-eter split is not a third one: `j'appelle`, `j'achète`, `je jette`
// and `je préfère` all land on the SAME open è, in the SAME four cells, for the
// SAME reason. The doubled consonant and the accent are two SPELLINGS OF ONE
// SOUND, and which spelling a verb takes is the only thing in this lesson that
// cannot be worked out.
//
// That reframes the trap rather than softening it. The learner is not choosing
// between two rules; they already know the sound. They are choosing how it is
// written, on a list of five verbs. s10-pair and s14-trap are both built on that.
//
// `protéger` is the proof and it is why s12-both exists: it is é_er AND -ger, so
// `je protège` runs one mechanism and `nous protégeons` runs the other. A learner
// holding four lists has nowhere to put that verb.
//
// ── THE VERBS THAT MUST BE MEMORISED, AND THE ONES THAT MUST NOT ──────────
//
// Everything here is derived except one thing: whether an -eler/-eter verb writes
// its è by doubling or by accenting. That is five verbs at this level and they
// are named as a list to learn, in s11-lists and in sheet.a2.09.lists:
//
//   double:  appeler · rappeler · jeter
//   accent:  acheter · geler
//
// Nothing else in the lesson is a memorised list. The -ger and -cer verbs are
// derived from the spelling of the ending, the é_er verbs are derived from where
// the stress lands, and the lesson says so on every screen that shows them. A
// rule with a short named exception list is teaching; a rule that pretends to be
// complete and is not is how a learner decides the language is arbitrary.
//
// ── WHAT THE APP CANNOT TEST, MEASURED RATHER THAN ASSUMED ────────────────
//
// The brief says "typeIn is the format". Half of that is right and the false half
// shaped the whole quiz.
//
// `fold()` in answer.logic.ts normalises to NFD and strips every combining mark
// before comparing, so for `typeIn` and `errorSpot`:
//
//   commençons  ==  commencons        the cedilla is a combining mark
//   préfère     ==  préfére == prefere  so is every accent
//
// `normalizeFr()` in score.ts does exactly the same, and that is what the DICTÉE
// compares with. So NO typed, spotted or assembled surface in this app can test a
// cedilla or an accent, and two of this lesson's four patterns are testable only
// by `mcq`, where the options are picked rather than typed.
//
// What survives a fold, and therefore what typeIn really can carry here:
//
//   mangeons vs mangons        an inserted letter
//   appelles vs appeles        a doubled consonant
//   jette vs jete              a doubled consonant
//   appelons vs appellons      the absence of one
//
// So the quiz is 12 mcq of 30 rather than the four or five an -ER lesson would
// normally carry, and every one of those twelve is a question no other format
// could ask. The dictée is split the same way: DICTEE_NEAR_MISS names the six
// targets whose distinction really is graded and the three that are not, gives
// the near miss a learner would actually make for each, and the batch runs both
// halves through the real normalizeFr so the claim fails rather than goes stale.
//
// ── WHAT WAS WANTED AND COULD NOT BE WRITTEN ──────────────────────────────
//
// - A typeIn for `nous commençons`. It is the single most useful production
//   question in the lesson and `fold()` accepts `nous commencons` for it. It is an
//   mcq in r5 instead, with the wrong spelling as a live option.
// - An errorSpot on « Elle achete du pain. » Same fold, same problem. The accent
//   questions are all mcq.
// - A `listenChoose` on `nous mangeons` against `je mange`. The ending differs, so
//   the question is answerable — but it tests a2.01's endings, not this lesson,
//   because the STEM SOUND IS IDENTICAL IN BOTH. The one listenChoose in the quiz
//   is `je préfère` against `nous préférons`, which is the only place in the
//   lesson where the ear can hear the stem itself move.
// - A speak question on `nous commençons` scored by the recogniser. It is
//   authored, and normalizeFr means the recogniser could return `commencons` and
//   score full marks. It stays because saying the sentence is worth doing; the
//   `why` does not claim the spelling was checked.
//
// ── What is left to the neighbours ────────────────────────────────────────
//
// - THE ENDINGS ARE a2.01's. s04-recap imports ENDINGS from that lesson's corpus
//   and prints it; nothing here restates the paradigm in different words. The
//   nous/on statement is imported as a CONSTANT from verbes-er-terms.ts.
// - `payer` / `essayer` are named on ONE card, s16-notmine, and taught nowhere.
//   See the corpus header for the decision.
// - `aller` is named once as a trap on the same card and conjugated nowhere.
//   a2.02, seq 5.
// - NO -IR OR -RE VERB. a2.10 and a2.11.
// - NO IMPERFECT. `nous mangions` and `je préférais` are where these patterns pay
//   off a second time and that tense is not on this trail yet.
//
// ── Layout notes that are bugs, not preferences ───────────────────────────
//
// - `table` at layer 'core' is a `table-in-core` density failure, so the full
//   four-pattern grid lives in sheet.a2.09.patterns. The IN-FLOW grid is
//   s05-grid, a `cheatSheet`, which LessonSection.tsx routes to CheatSheetView and
//   which draws its rows. a1.13's known defect is a `cheatSheet` INSIDE a
//   reference sheet, where ReferenceSheet.tsx draws teach/letterGrid/table and
//   nothing else. This one is in the flow and the test pins the renderer.
// - `tapTable` is NOT in ownsLayout() (LessonPager.tsx:162), so s10-pair renders
//   inside a SCROLLING page. Six rows is the most it can hold above the fold.
// - `size` is not decoration. ownsLayout() ignores it; density.logic.ts reads `xl`
//   as a 12-word cap on EVERY string in the section. Nothing here is xl: every
//   deck in this lesson carries explanation, and a 12-word cap on an explanation
//   is how a1.01 lost a session.
// - `commonErrors` needs `swipe: true` or it renders a blank screen. See
//   s15-errors.
// - `reading` needs `questionsInModal` WITH questions or its glossary reaches no
//   renderer, and PassagePage splits on sentence boundaries so an authored
//   newline is swallowed: s20-reading is one line.
// - Three term chips per section, maximum. The renderer shows three.
// - A `groupDrill` at `lg` may carry items and a check in one group; only an `xl`
//   one may not. s06-soft and s11-lists are both lg.

import type {
  ErrorTrigger,
  Lesson,
  LessonAct,
  LessonDrill,
  LessonSection,
  ReferenceSheet,
  SceneBeat,
} from '../../../ealch-v2/src/content/schema.ts';
import { A201_BACKREF, NOUS_ON, REFRAME, TWO_MECHANISMS, VERBES_ER_EXC_TERMS } from './verbes-er-exceptions-terms.ts';
import {
  ACCENT_TAKERS,
  AUTHORED_IDS,
  CHANGED_FORMS,
  DICTATION_IDS,
  DOUBLERS,
  MECHANISMS,
  MINIMAL_PAIRS,
  PATTERNS,
  SPLIT_PAIR,
  THE_SEVENTEEN,
  VERBS_BY_PATTERN,
  YER_INFINITIVES,
  familyIds,
  fr,
  sub,
} from './verbes-er-exceptions-corpus.ts';
import { IMPORTED_IDS, verbId } from './verbes-er-exceptions-imported.ts';
import { REPAIRED_RESPELL, verbCard } from './verbes-er-exceptions-display.ts';
// a2.01's own ending set, imported rather than restated. The recap mission prints
// THESE, so a2.09 cannot come to disagree with a2.01 about what the six endings
// are or which of them the ear receives.
import { AUDIBLE_ENDINGS, ENDINGS, SILENT_ENDINGS } from './verbes-er-corpus.ts';

export { A201_BACKREF, NOUS_ON, REFRAME, TWO_MECHANISMS };

/* ─── The items this lesson touches ────────────────────────────────────────
 *
 * 26 authored (see verbes-er-exceptions-corpus.ts for why the corpus could not
 * supply a minimal pair) plus 17 imported by id and untouched except for three
 * respelling repairs. Every id here resolves; the batch re-checks the imported
 * half against POSTGRES rather than the seed, because the two drift and an id
 * that exists only in the seed renders as an empty card.                       */

const ITEM_IDS = [...new Set([...AUTHORED_IDS, ...IMPORTED_IDS])];

/** Spoken practice draws only from items carrying `voiceflash`, because that is
 *  the drill the mic-scored deck runs. Every authored row has it.
 *
 *  ALL TWENTY-SIX, and that is the point rather than a convenience. The reframe
 *  is that the sound does not change, and the only surface that can demonstrate
 *  it is one where the learner says both halves of a pair and hears the stem stay
 *  put. The seventeen infinitives are deliberately NOT here: several carry no
 *  `voiceflash` at all, and a bare infinitive is not a thing anybody says on its
 *  own. */
const SPEAK_IDS = [...AUTHORED_IDS];

/** The two verbs the -eler/-eter contrast is built on, named once so the
 *  tapTable, the trapDrill, the sheet and the test read one pair. */
const SPLIT_VERBS = { doubles: 'appeler', accents: 'acheter' } as const;

/* ─── Mission 1 · Scene ────────────────────────────────────────────────────
 *
 * The A2 register of stakes is loss of fluency under load. Every other lesson in
 * batch 1 stages that out loud; this is the one where the failure is ON THE PAGE,
 * because the whole subject is a spelling nobody can hear.
 *
 * So the sentence does not die in the middle. It gets rewritten. The learner
 * knows the verb, knows the hour, stalls on one letter, and puts a sentence they
 * were SURE of on the board instead — which is correct French and no longer says
 * who. Nobody is corrected and nobody minds. The next morning somebody has to ask
 * the question the note was supposed to answer.
 *
 * Beats are extracted to a named const, each with its own `size` and `audio`. The
 * section sets NO size: ownsLayout() ignores it and density.logic.ts would read
 * xl as a 12-word cap on prose.                                                */

const SCENE_BEATS: SceneBeat[] = [
  {
    kind: 'narration',
    size: 'md',
    text: 'A community kitchen in Nantes, Thursday evening. You are the newest volunteer and it is your turn to leave the note for the morning shift.',
    audio: { mode: 'tts', voice: 'coach' },
  },
  {
    kind: 'bubble',
    from: 'them',
    reveal: 'tap',
    size: 'md',
    speaker: 'Karim',
    fr: 'Tu écris le mot pour demain ?',
    en: 'Will you write the note for tomorrow?',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a2-09-scene' },
  },
  {
    kind: 'bubble',
    from: 'you',
    reveal: 'auto',
    size: 'md',
    fr: 'Oui, je le fais.',
    en: 'Yes, I will do it.',
    stage: 'You pick up the pen. The sentence is already there: the two of you start at eight.',
    audio: { mode: 'tts', lang: 'fr-FR' },
  },
  {
    kind: 'narration',
    size: 'md',
    text: 'You get as far as « Nous commen » and stop. There is something about the c in front of the o and you cannot remember what.',
    audio: { mode: 'tts', voice: 'coach' },
  },
  {
    kind: 'choice',
    size: 'lg',
    prompt: 'The pen is on the board. What goes up?',
    options: [
      {
        fr: 'Le travail commence à huit heures.',
        en: 'the sentence you were sure of',
        outcome: 'breaks',
        audio: { mode: 'tts', lang: 'fr-FR' },
      },
      {
        fr: 'Nous commençons à huit heures.',
        en: 'the sentence you meant',
        outcome: 'works',
        audio: { mode: 'tts', lang: 'fr-FR' },
      },
    ],
    followUp: {
      works: 'Yes, and the tail under the c is the whole of it. One letter, and nothing about the sound changed.',
      breaks: 'Correct French, and it no longer says who. Routing around a spelling costs you the sentence you wanted.',
    },
  },
  {
    kind: 'bubble',
    from: 'them',
    reveal: 'auto',
    size: 'md',
    speaker: 'Karim',
    fr: 'Et nous, on arrive à quelle heure ?',
    en: 'And what time do we get in?',
    stage: 'Friday morning, under the note. Nobody minds. Somebody just has to ask.',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a2-09-scene' },
  },
  {
    kind: 'break',
    size: 'lg',
    // SIZED FROM a2.01's MEASURED BUDGET, which took three device passes on a
    // Pixel 6 to establish and is recorded in the ledger §7. `scene` is not in
    // ownsLayout(), so this card cannot size itself and every wrapped line costs
    // about 85px:
    //
    //   heading            <= ~13 characters   or it wraps and pushes Continue
    //   reading-row gloss  <= ~24 characters   the right row carries ipa AND
    //                                          respell, which is four lines alone
    //   body               ~26 words
    //   coach              ~8 words
    //
    // "The detour" is 10 characters, the glosses are 15 and 22, the body is 27
    // words and the coach is 8. Every one of those numbers is a2.01's, not a
    // guess, and the test asserts them so a later edit cannot quietly grow them.
    heading: 'The detour',
    body: 'You knew the verb and you knew the hour. What you did not know was one letter, so you wrote a sentence you were sure of instead.',
    wrong: {
      fr: 'Nous commencons.',
      ipa: '/nu kɔ.mɑ̃.kɔ̃/',
      en: 'the c goes hard',
    },
    right: {
      fr: 'Nous commençons.',
      ipa: '/nu kɔ.mɑ̃.sɔ̃/',
      respell: '[noo koh-mahⁿ-SOHⁿ]',
      en: 'one letter, same sound',
    },
    coach: 'The letter moved so the sound would not.',
    // Audio-first: the ear answers before the eye can. `autoplay` is NOT set. It
    // is declared in schema.ts and implemented in no component.
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], audioFirst: true, recordingId: 'rec-a2-09-soft' },
  },
  {
    kind: 'resolve',
    size: 'md',
    text: 'Nothing went wrong out loud. The note was fine. It just was not the note you meant to leave.',
  },
];

const SECTIONS: LessonSection[] = [
  /* ── Act 1: the note you rewrote ─────────────────────────────────────── */

  {
    type: 'scene',
    id: 's01-scene',
    title: 'The Note You Did Not Leave',
    frSub: "Le mot qu'on n'a pas écrit",
    render: 'screens',
    layer: 'core',
    terms: ['softC', 'stem'],
    say: {
      text: 'Nothing here is misheard. Watch what one letter costs on a whiteboard.',
      voice: 'coach',
      timing: 'onFirstVisitOnly',
    },
    setting: {
      place: 'A community kitchen',
      city: 'Nantes',
      time: 'Thursday, just after eight',
      ambience: 'room-tone-lobby',
    },
    beats: SCENE_BEATS,
    // The reframe is referenced, never retyped, so this appearance cannot drift
    // out of agreement with the others the density validator counts.
    closing: {
      size: 'md',
      text: `${REFRAME} Every change in this lesson is there for that one reason.`,
    },
  },

  {
    type: 'goals',
    id: 's02-goals',
    title: 'What You Will Be Able To Do',
    frSub: 'Ce que vous saurez faire',
    layer: 'core',
    say: `${REFRAME} By the end you will predict three of the four changes instead of remembering them.`,
    goals: [
      { t: 'Write the nous form', s: 'With the letter that keeps a c or a g sounding the way it did.' },
      { t: 'Move the vowel', s: 'In the four cells where the ending is silent, and leave it alone in the two where it is not.' },
      { t: 'Tell -eler from -eter', s: 'The one thing here that is learnt rather than worked out, and there are five of them.' },
      { t: 'Give the reason', s: 'Not the pattern. The reason is what still works on a verb nobody has shown you.' },
    ],
  },

  {
    type: 'cardDeck',
    id: 's03-notirregular',
    title: 'None Of These Is Irregular',
    frSub: 'Aucun de ces verbes n\'est irrégulier',
    hint: 'Swipe through the four cards.',
    render: 'deck',
    layer: 'core',
    size: 'lg',
    terms: ['softC', 'stem'],
    say: 'Read this one properly. It decides whether the next twenty minutes are memorising or working out.',
    cards: [
      {
        label: 'The thing you were about to think',
        head: 'These are not exceptions to the endings',
        fr: 'nous mangeons',
        sub: 'the six endings, untouched',
        body: `The ending on that is -ons, exactly as ${A201_BACKREF} taught it. Every ending in this lesson is one of the six you already have. Not one of them changes, anywhere, for any of these verbs.`,
      },
      {
        label: 'What actually moves',
        head: 'One letter in front of the ending',
        fr: 'mang- → mange-',
        sub: 'and only in one cell',
        body: 'The stem picks up a letter, or swaps one, and then the ending goes on as normal. That is the entire difference between this lesson and the last one.',
      },
      {
        label: 'And it is not arbitrary',
        head: 'Every change has a reason you can hear',
        fr: 'mangons · mangeons',
        sub: 'a hard g, and a soft one',
        body: `${REFRAME} Say the first one out loud with a hard g. That sound is what the e exists to prevent, and it is the whole story for two of the four patterns.`,
      },
      {
        label: 'So the word to drop',
        head: 'Irregular is the wrong word here',
        body: `${TWO_MECHANISMS} A verb that changes for a reason is not irregular; it is regular in a way that costs a letter. Calling it irregular is permission to stop looking for the reason, and the reason is the only part worth carrying.`,
      },
    ],
  },

  /* ── Act 2: what has not changed, and the two reasons ────────────────── */

  {
    // THE ONE RECAP MISSION, AND IT RESTATES NOTHING.
    //
    // Every ending printed here comes from ENDINGS in a2.01's own corpus file,
    // imported rather than retyped, so a2.09 cannot come to disagree with a2.01
    // about what the six are or which two the ear receives. The back-reference is
    // by unit id, on purpose: this is seq 2 of 32 and the learner should be
    // seeing the pieces connect.
    type: 'teach',
    id: 's04-recap',
    title: 'The Endings Do Not Move',
    frSub: 'Les terminaisons ne bougent pas',
    layer: 'core',
    terms: ['stem'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65] },
    say: 'One screen of last lesson, and then it is not mentioned again.',
    body:
      `${A201_BACKREF} gave you six endings: ${ENDINGS.map((e) => e.ending).join(' · ')}. Nothing here touches any of them. `
      + `It also gave you the fact the second half of this lesson rests on: ${SILENT_ENDINGS.join(', ')} make no sound, and ${AUDIBLE_ENDINGS.join(' and ')} do.`,
  },

  {
    // THE GRID, AND IT IS ONE SCREEN.
    //
    // A `table` here would be a `table-in-core` density failure, so the full
    // four-pattern grid with every person lives in sheet.a2.09.patterns and this
    // is a `cheatSheet`: four rows, each a stacked card, each opening a detail.
    // LessonSection.tsx:201 routes it to CheatSheetView, which draws the rows.
    //
    // EVERY ROW CARRIES ITS REASON IN `v`, read from PATTERNS rather than typed,
    // and the test asserts the reason strings by name. Without them this is four
    // lists with a title over it, which is the lesson the brief exists to prevent.
    type: 'cheatSheet',
    id: 's05-grid',
    title: 'Four Patterns, Two Reasons',
    frSub: 'Quatre motifs, deux raisons',
    layer: 'core',
    terms: ['softC', 'endingWentSilent'],
    sheetId: 'sheet.a2.09.patterns',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a2-09-grid' },
    say: `${TWO_MECHANISMS} Read the right-hand side of all four before you read anything else. Two of them say the same thing, and so do the other two.`,
    rows: PATTERNS.map((p) => ({
      k: `${p.label}  ·  ${p.form}`,
      v: p.reason,
      say: p.form,
      detail: {
        title: p.form,
        body: `${p.reason}. It happens in ${p.where}. Same reason as ${
          PATTERNS.filter((q) => q.mechanism === p.mechanism && q.key !== p.key).map((q) => q.label).join(' and ')
        }: ${p.mechanism === 'protect the consonant'
          ? 'a c or a g would go hard in front of a back vowel'
          : 'the ending makes no sound, so the stem vowel opens'}.`,
        say: p.form,
      },
    })),
  },

  /* ── Act 3: the spelling changes so the sound does not. The Owns. ────── */

  {
    // The eight -ger and -cer verbs, named by id so every one is genuinely on a
    // screen rather than merely resolvable. `vocabThemes` cards carry no itemId,
    // which is why this is a groupDrill: a1.08 declared 43 itemIds that resolved
    // perfectly and were drawn by nothing.
    //
    // The third group is the six `soft` SENTENCES, in pairs, and it is the point
    // of the mission: the stem syllable is respelled with the same string on both
    // sides of every pair, because the letter went in so the sound would not have
    // to move.
    //
    // lg, not xl. At xl a group may not stack words and a check together, and the
    // stacked pair is what makes the identity visible.
    type: 'groupDrill',
    id: 's06-soft',
    title: 'The Letter That Protects A Sound',
    frSub: 'La lettre qui protège un son',
    layer: 'core',
    size: 'lg',
    terms: ['softC', 'nousCell'],
    sheetId: 'sheet.a2.09.patterns',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a2-09-soft' },
    say: `${REFRAME} Say each pair out loud. The verb should sound the same in both halves, and that is what you are checking.`,
    groups: [
      {
        label: VERBS_BY_PATTERN[0].group,
        items: VERBS_BY_PATTERN[0].verbs.map(verbCard),
        check: {
          q: 'Why does nous mangeons have an e that the naming form does not?',
          opts: [
            'So the g stays soft in front of the o',
            'Because nous always adds a letter',
            'To make the word longer to say',
            'Because manger is irregular',
          ],
          correct: 0,
          why: 'g is soft in front of e and i and hard in front of a, o and u. The ending -ons starts with an o, so without the e the verb would be said with the g of gare.',
        },
      },
      {
        label: VERBS_BY_PATTERN[1].group,
        items: VERBS_BY_PATTERN[1].verbs.map(verbCard),
        check: {
          q: 'And the tail under the c in nous commençons?',
          opts: [
            'It marks the stress',
            'It is optional in writing',
            'It keeps the c soft in front of the o',
            'It shows the verb is plural',
          ],
          correct: 2,
          why: 'The same job as the e in mangeons, done by a different letter because c and g are spelled differently. Without it the o would make the c hard, and you would be saying commenkons.',
        },
      },
      {
        label: 'The pairs, and what does not change',
        items: familyIds('soft').map((id) => ({ fr: fr(id), itemId: id, respell: sub(id), en: '' })),
        check: {
          q: 'In how many of the six forms does a -ger or -cer verb change?',
          opts: ['All six', 'One', 'Three', 'Two'],
          correct: 1,
          why: 'One. The nous form, because it is the only ending that starts with an o. je, tu, il, vous and ils leave the stem exactly as the naming form had it.',
        },
      },
    ],
  },

  {
    // THE SECOND TRAP, AND IT IS A REGISTER FACT AS MUCH AS A SPELLING ONE.
    //
    // The nous/on statement is IMPORTED as a constant from verbes-er-terms.ts, not
    // retyped. The ledger binds all twenty A2 lessons to a2.01's wording, and this
    // is the lesson with the strongest reason to quote it: the -ger and -cer
    // change lives in the one cell a conversation rarely reaches.
    type: 'teach',
    id: 's07-nouscell',
    title: 'One Cell In Six, And Mostly On Paper',
    frSub: 'Une case sur six',
    layer: 'core',
    terms: ['nousCell', 'softC'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65] },
    say: `${REFRAME} This one is rare, and it is rare in exactly one direction: you meet it when you write.`,
    body:
      `The -ger and -cer change lives in the nous form: one cell in six. And ${A201_BACKREF} said which we gets spoken. ${NOUS_ON} `
      + `on takes the il form, so speech never reaches that cell.`,
  },

  {
    // The three minimal pairs for the second mechanism, on three different verbs
    // so the claim reads as a fact about the system rather than about préférer.
    //
    // `examples` rather than a third groupDrill: the rows are read, not chosen,
    // and the note column is where the mechanism is stated a pair at a time. Every
    // `fr` here comes from the corpus through fr(), so the sentences on this
    // screen are the same strings the speak mission and the dictée use.
    type: 'examples',
    id: 's08-silent',
    title: 'When The Ending Goes Quiet',
    frSub: 'Quand la terminaison se tait',
    layer: 'core',
    terms: ['endingWentSilent', 'stem'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a2-09-open' },
    say: `${REFRAME} Three pairs, three verbs, and the same split every time. Tap any line.`,
    examples: [
      { fr: fr('fr.a2.verbes.147'), en: 'I prefer tea.', note: 'The ending is silent, so fère is the last sound in the word and the vowel opens to è.' },
      { fr: fr('fr.a2.verbes.148'), en: 'We prefer tea.', note: 'The ending is a syllable of its own, so the stem is not the last thing heard and the é stays closed.' },
      { fr: fr('fr.a2.verbes.149'), en: 'She buys bread.', note: 'A different verb and the same split. The bare e of the stem opens, and it is written as an accent.' },
      { fr: fr('fr.a2.verbes.150'), en: 'We buy bread.', note: 'Audible ending, so nothing moves. The e is not even said here.' },
      { fr: fr('fr.a2.verbes.151'), en: 'They repeat the sentence.', note: 'The -ent is four letters and no sound, which is exactly the condition. The vowel opens.' },
      { fr: fr('fr.a2.verbes.152'), en: 'We repeat the sentence.', note: 'Same verb, audible ending, closed vowel. The rule is about the ending, never about the verb.' },
    ],
  },

  {
    // THE EAR MISSION, AND IT EXISTS TO SPLIT THE TWO MECHANISMS.
    //
    // The brief says listening has almost no job here. Measured against the forms
    // it has exactly one, and it is worth a mission: THE FIRST MECHANISM IS
    // INAUDIBLE AND THE SECOND IS NOT. `je mange` and `nous mangeons` carry the
    // identical stem sound, which is the whole reason the e is written; `je
    // préfère` and `nous préférons` do not, and the vowel really moves. A learner
    // who can hear which kind of change they are dealing with has the two
    // mechanisms rather than four lists.
    type: 'listening',
    id: 's09-ear',
    title: 'One You Hear, One You Do Not',
    frSub: "À l'oreille",
    layer: 'core',
    questionsInModal: true,
    terms: ['softC', 'endingWentSilent'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], audioFirst: true, recordingId: 'rec-a2-09-open' },
    say: 'Four lines. Two of them change nothing you can hear and two of them change the vowel, and knowing which is which is the skill.',
    lines: [
      { fr: fr('fr.a2.verbes.141'), en: 'I eat here.' },
      { fr: fr('fr.a2.verbes.142'), en: 'We eat here.' },
      { fr: fr('fr.a2.verbes.147'), en: 'I prefer tea.' },
      { fr: fr('fr.a2.verbes.148'), en: 'We prefer tea.' },
    ],
    questions: [
      {
        q: 'Listen to the first two. What is different about the way the verb starts?',
        opts: ['Nothing at all', 'The vowel is longer', 'The g is harder', 'The stress moved'],
        correct: 0,
        why: 'Nothing. mange and mangeons open on the same two sounds, and the e that appears on the page exists precisely so that they do. The page changed to keep the ear where it was.',
      },
      {
        q: 'Now the second two. What is different about préfère and préférons?',
        opts: ['Nothing at all', 'The middle vowel really does change', 'The first vowel changes', 'Only the ending'],
        correct: 1,
        why: 'The vowel before the ending opens from é to è when the ending goes silent, and here you can hear it. This is the mechanism that shows up in the sound as well as on the page.',
      },
      {
        q: 'So which kind of change would a conversation never teach you?',
        opts: ['The one in préfère', 'The one in achète', 'Both kinds equally', 'The one in mangeons'],
        correct: 3,
        why: 'The -ger and -cer change is inaudible by design, and it lives in the nous cell, which is the cell speech mostly replaces with on. Two reasons why you only ever meet it in writing.',
      },
      {
        q: 'A verb you have never met: « nous plongeons ». What is the e doing?',
        opts: ['Marking the plural', 'Nothing, it is decoration', 'Keeping the g soft in front of the o', 'Making it past tense'],
        correct: 2,
        why: 'plonger, to dive. You were not taught it and you did not need to be, because the reason is about the letters rather than the word.',
      },
    ],
  },

  {
    // -eler AND -eter ARE A PAIR, AND THEY ARE TWO COLUMNS ON ONE SCREEN.
    //
    // This is the layout the whole trap depends on. Split across two missions the
    // learner meets appeler, learns "it doubles", meets acheter a screen later and
    // overwrites it. Side by side, the divergence is the first thing on the page,
    // and so is the fact that nous and vous are identical in both columns.
    //
    // a2-09-er-exceptions.test.ts asserts the SECTION: a tapTable whose two verb
    // columns are appeler and acheter, six rows, with both spellings of the open è
    // present. Not that the strings exist somewhere in the lesson.
    //
    // Six rows and not nine: tapTable is not in ownsLayout(), so this renders
    // inside a scrolling page and a ninth row runs past the fold. a1.05 already
    // taught that il/elle/on share a form and ils/elles share another.
    type: 'tapTable',
    id: 's10-pair',
    title: 'Same Ending, Two Answers',
    frSub: 'Deux verbes, deux réponses',
    layer: 'core',
    terms: ['doubleOrAccent', 'endingWentSilent'],
    sheetId: 'sheet.a2.09.lists',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a2-09-split' },
    say: 'Read down both columns before you read across. Tap any row to hear it, and listen for how alike the two verbs are.',
    cols: ['Person', SPLIT_VERBS.doubles, SPLIT_VERBS.accents],
    rows: [
      {
        cells: ['je', "j'appelle", "j'achète"],
        say: "j'appelle, j'achète",
        detail: {
          title: 'Two spellings, one sound',
          body: 'Both are said with the same open è. appeler writes it by doubling the l, acheter with an accent, and nothing in either naming form tells you which. This is the one thing here you learn rather than work out.',
          say: "j'appelle, j'achète",
        },
      },
      {
        cells: ['tu', 'tu appelles', 'tu achètes'],
        say: 'tu appelles, tu achètes',
        detail: {
          title: 'The silent -es changes nothing',
          body: 'The tu ending is two letters and no sound, so the stem is still the last thing heard and it is still open. Adding a silent ending never puts the stem back.',
          say: fr('fr.a2.verbes.153'),
        },
      },
      {
        cells: ['il · elle · on', 'il appelle', 'il achète'],
        say: 'il appelle, il achète',
        detail: {
          title: 'The row on takes',
          body: 'on means we and takes this form, so a spoken sentence lands here rather than in the nous row. For these two verbs that means the changed stem is what you say most often.',
          say: fr('fr.a2.verbes.149'),
        },
      },
      {
        cells: ['nous', 'nous appelons', 'nous achetons'],
        say: 'nous appelons, nous achetons',
        detail: {
          title: 'Both columns go quiet here',
          body: 'One l, no accent, and the two verbs are spelled exactly as their naming forms were. The ending is a syllable of its own, so the stem is no longer the last thing heard and there is nothing to write.',
          say: fr('fr.a2.verbes.154'),
        },
      },
      {
        cells: ['vous', 'vous appelez', 'vous achetez'],
        say: 'vous appelez, vous achetez',
        detail: {
          title: 'And here',
          body: 'The second audible ending, and the same result. Two of the six cells never change for any verb in this lesson, and they are the same two every time.',
          say: fr('fr.a2.verbes.163'),
        },
      },
      {
        cells: ['ils · elles', 'ils appellent', 'ils achètent'],
        say: 'ils appellent, ils achètent',
        detail: {
          title: 'Four letters and no sound',
          body: 'The -ent is silent, so this behaves like the je, tu and il rows and not like the nous one. Four of the six cells change and two do not, and the ending is what decides.',
          say: 'ils appellent, ils achètent',
        },
      },
    ],
  },

  {
    // THE LIST THAT IS ACTUALLY A LIST, AND IT IS SHORT.
    //
    // Everything else in this lesson is derived. The doubling against the accent
    // is not, and the mission that presents it says so. Three groups: the ones
    // that double, the ones that accent, and the é_er verbs, which are back to
    // being derived and are grouped separately for exactly that reason.
    type: 'groupDrill',
    id: 's11-lists',
    title: 'The Five You Learn One At A Time',
    frSub: 'Les cinq à retenir',
    layer: 'core',
    size: 'lg',
    terms: ['doubleOrAccent', 'endingWentSilent'],
    sheetId: 'sheet.a2.09.lists',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a2-09-verbs' },
    say: 'Two short lists and one derived group. Only the first two have to be remembered.',
    groups: [
      {
        label: VERBS_BY_PATTERN[2].group,
        items: VERBS_BY_PATTERN[2].verbs.map(verbCard),
        check: {
          q: 'Tu ___ Marie. (appeler)',
          opts: ['appèles', 'appelles', 'apelles', 'appeles'],
          correct: 1,
          why: 'appeler doubles the l, and the doubled letter is how it writes the open è. The ending -es is silent, so the sound would not have told you anything.',
        },
      },
      {
        label: VERBS_BY_PATTERN[3].group,
        items: VERBS_BY_PATTERN[3].verbs.map(verbCard),
        check: {
          q: 'acheter and jeter both end in -eter. What do they do?',
          opts: [
            'Both double the t',
            'Both take an accent',
            'jeter doubles and acheter takes an accent',
            'Neither one changes',
          ],
          correct: 2,
          why: 'Two identical endings and two different answers, and nothing in either word predicts it. These five are the memorised part of the lesson, and they are the only memorised part.',
        },
      },
      {
        label: VERBS_BY_PATTERN[4].group,
        items: VERBS_BY_PATTERN[4].verbs.map(verbCard),
        check: {
          q: 'And these four? Do you have to remember them one by one?',
          opts: [
            'Yes, the same way',
            'No, the é always opens to è when the ending is silent',
            'Only préférer changes',
            'They never change',
          ],
          correct: 1,
          why: 'These are derived. Any verb with é in the syllable before -er does this, so a verb you have never met behaves the way you expect. That is the difference between this group and the two above it.',
        },
      },
      {
        label: 'The pairs, side by side',
        items: familyIds('split').map((id) => ({ fr: fr(id), itemId: id, respell: sub(id), en: '' })),
        check: {
          q: 'Nous ___ Marie. (appeler)',
          opts: ['appellons', 'appèlons', 'appelons', 'appellent'],
          correct: 2,
          why: 'One l. nous is one of the two cells where nothing moves, so the stem goes back to the spelling the naming form had.',
        },
      },
    ],
  },

  {
    // THE PAYOFF FOR "TWO MECHANISMS, NOT FOUR", AND IT IS ONE VERB.
    //
    // protéger is é_er AND -ger. A learner holding four lists has nowhere to put
    // it. A learner holding two mechanisms builds both forms without being shown
    // either, which is what an A2 lesson is supposed to leave behind.
    type: 'cardDeck',
    id: 's12-both',
    title: 'One Verb, Both Reasons',
    frSub: 'Un verbe, deux raisons',
    hint: 'Swipe through the three cards.',
    render: 'deck',
    layer: 'core',
    size: 'lg',
    terms: ['softC', 'endingWentSilent'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65] },
    say: 'One verb that needs both reasons at once. If the two mechanisms are real, you can build this without being told.',
    cards: [
      {
        label: 'The verb',
        head: 'protéger has an é and a g',
        fr: 'protéger',
        sub: 'to protect',
        body: 'It ends in -ger, so one reason applies to it. It also has an é in the syllable before the ending, so the other one does too. Nothing about it is special; it just happens to qualify twice.',
      },
      {
        label: 'Silent ending',
        head: 'je protège',
        fr: fr('fr.a2.verbes.158'),
        sub: sub('fr.a2.verbes.158'),
        body: 'The ending makes no sound, so the stem is the last thing heard and the é opens to è. Exactly what préférer and répéter do, for exactly the same reason.',
      },
      {
        label: 'A g meeting an o',
        head: 'nous protégeons',
        fr: fr('fr.a2.verbes.159'),
        sub: sub('fr.a2.verbes.159'),
        body: `${TWO_MECHANISMS} The é stays closed here because the ending is a syllable, and the e goes in because a g is about to meet an o. Two reasons, one word, and you can see both of them on the page.`,
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
    say: 'Say the reason out loud before you flip, not just the form. The reason is what carries.',
    cards: [
      { front: 'Why does nous mangeons have an e?', back: PATTERNS[0].reason },
      { front: 'Why does nous commençons have a cedilla?', back: PATTERNS[1].reason },
      { front: 'Why does je préfère have è and nous préférons é?', back: 'The je ending is silent and the nous ending is not, so only one of them leaves the stem as the last sound.' },
      { front: 'How many cells does a -ger verb change in?', back: 'One. The nous form, and it is the cell speech mostly replaces with on.' },
      { front: 'We eat here', back: fr('fr.a2.verbes.142'), say: fr('fr.a2.verbes.142') },
      { front: 'We start', back: fr('fr.a2.verbes.144'), say: fr('fr.a2.verbes.144') },
      { front: 'You are calling Marie', back: fr('fr.a2.verbes.153'), say: fr('fr.a2.verbes.153') },
      { front: 'We are calling Marie', back: fr('fr.a2.verbes.154'), say: fr('fr.a2.verbes.154') },
      { front: 'You buy bread, one person, close', back: fr('fr.a2.verbes.155'), say: fr('fr.a2.verbes.155') },
      { front: 'I throw the ticket away', back: fr('fr.a2.verbes.156'), say: fr('fr.a2.verbes.156') },
      { front: 'The verbs that double the consonant', back: DOUBLERS.join(' · ') },
      { front: 'The verbs that take the accent instead', back: ACCENT_TAKERS.join(' · ') },
      { front: 'Four patterns, how many reasons?', back: `${TWO_MECHANISMS} ${MECHANISMS.join(', and ')}.` },
    ],
  },

  /* ── Act 4: -eler against -eter ──────────────────────────────────────── */

  {
    // THE TRAP, AND IT IS THE STRONGEST DRILL IN THE LESSON.
    //
    // Two infinitives of the same shape, one sound, two spellings, and nothing in
    // the word to predict which. Stepped, so the rule, the cards, the audio and
    // the drill are four screens rather than one column below the fold.
    //
    // The drill hears a form and asks for a SPELLING, which is the only shape of
    // question this trap has. Note what the drill is NOT: it is not a typeIn.
    // fold() would accept `appeles` for `appelles`... it would not, because a
    // doubled letter survives a fold. It would accept `achetes` for `achètes`,
    // which is why the accent side of this trap is drilled by picking rather than
    // by typing, here and in the quiz.
    type: 'trapDrill',
    id: 's14-trap',
    title: 'Nothing In The Word Tells You',
    frSub: 'Rien ne le prédit',
    layer: 'core',
    swipe: true,
    terms: ['doubleOrAccent', 'endingWentSilent'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], wrongThenRight: true, recordingId: 'rec-a2-09-split' },
    say: 'Five verbs, and this is the part of the lesson you memorise. Everything else you work out.',
    rule: {
      title: 'Two endings that look the same',
      // 44 words, against the 45-word core cap, and measured by the validator
      // rather than counted here. Everything cut from it is in the
      // `doubleOrAccent` glossary term, which this section's chips surface.
      body: 'appeler and acheter end the same way and behave differently. Both put the same open è in the four silent cells; one doubles the consonant, the other adds an accent. Nothing in the ending predicts which, so five verbs are learnt by name.',
    },
    cards: [
      {
        promptLabel: 'you are calling',
        promptSound: 'tü ah-PEL',
        fr: 'tu appelles',
        ipa: '/ty a.pɛl/',
        tip: 'Two l. The doubling is how -eler writes the open sound.',
      },
      {
        promptLabel: 'you buy',
        promptSound: 'tü ah-SHET',
        fr: 'tu achètes',
        ipa: '/ty a.ʃɛt/',
        tip: 'Same shape of infinitive, same open sound, and an accent instead.',
      },
      {
        promptLabel: 'I throw away',
        promptSound: 'zhuh ZHET',
        fr: 'je jette',
        ipa: '/ʒə ʒɛt/',
        tip: 'jeter doubles and acheter does not, and both end in -eter.',
      },
      {
        promptLabel: 'we are calling',
        promptSound: 'noo zah-PLOHⁿ',
        fr: 'nous appelons',
        ipa: '/nu.za.plɔ̃/',
        tip: 'One l. Whatever a verb does, nous and vous get the plain stem back.',
      },
    ],
    drill: [
      { promptSay: 'tu appelles', opts: ['tu appelles', 'tu appèles', 'tu apelles'], correct: 0 },
      { promptSay: 'tu achètes', opts: ['tu achettes', 'tu achètes', 'tu achetes'], correct: 1 },
      { promptSay: 'je jette', opts: ['je jète', 'je jete', 'je jette'], correct: 2 },
      { promptSay: 'nous appelons', opts: ['nous appelons', 'nous appellons', 'nous appèlons'], correct: 0 },
      { promptSay: 'elle gèle', opts: ['elle gelle', 'elle gèle', 'elle gele'], correct: 1 },
      { promptSay: 'ils rappellent', opts: ['ils rapèlent', 'ils rappelent', 'ils rappellent'], correct: 2 },
    ],
    // Four steps, one job each. `audio` is not optional: validateLesson refuses a
    // stepped trapDrill whose steps never reach the section's own audio, and
    // without it the wrong-then-right take would be authored and never played.
    steps: [
      { label: 'The rule', kind: 'rule', title: 'Two Endings That Look The Same' },
      { label: 'The four', kind: 'cards', title: 'Four Forms To Hold' },
      { label: 'Hear it', kind: 'audio', title: 'Wrong, Then Right' },
      { label: 'Prove it', kind: 'drill', title: 'Which One Is On The Page?', gate: true },
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
    title: 'Three Ways The Spelling Goes',
    frSub: "Trois pièges à l'écrit",
    layer: 'core',
    terms: ['softC', 'doubleOrAccent'],
    say: 'All three are written mistakes. Not one of them would be caught by saying the sentence out loud.',
    errors: [
      {
        wrong: 'Writing « nous commencons », with a plain c.',
        right: 'Writing « nous commençons ».',
        why: 'The o after it makes a plain c hard, so what is written there is commenkons. The tail is not decoration, it is the instruction to keep the sound the verb already had.',
      },
      {
        wrong: 'Writing « nous mangons ».',
        right: 'Writing « nous mangeons ».',
        why: 'Same job, other letter. Without the e the g goes hard in front of the o, and the reader gets a word that is not the verb you meant.',
      },
      {
        wrong: 'Writing « nous appellons » with two l.',
        right: 'Writing « nous appelons ».',
        why: 'The doubling belongs to the four cells where the ending is silent. nous is not one of them, so the stem goes back to the spelling the naming form had.',
      },
    ],
  },

  {
    // The card where the neighbours get their material back. Nothing named here
    // reaches a deck, a drill, a dictée or a quiz answer, and the batch and the
    // test both prove that against the PRODUCTION surfaces rather than against
    // every string, because a guard written over every string fires on legitimate
    // context and gets deleted by the next author.
    type: 'cardDeck',
    id: 's16-notmine',
    title: 'Three Things This Is Not',
    frSub: "Ce que ce n'est pas",
    hint: 'Swipe through the three cards.',
    render: 'deck',
    layer: 'core',
    size: 'lg',
    terms: ['endingWentSilent', 'stem'],
    say: 'Three things named so you stop looking for them here, and all three belong further along the trail.',
    cards: [
      {
        label: 'Same reason, another lesson',
        head: 'payer and essayer do this too',
        fr: `${YER_INFINITIVES.join(' · ')}`,
        sub: 'je paie, or je paye',
        body: 'The y turns into an i in the same four cells, and for the same reason: the ending went silent. Left out because both spellings are accepted, and a lesson built on one right answer is the wrong place for a pattern with two.',
      },
      {
        label: 'Not this one',
        head: 'aller ends in -er and is neither',
        fr: 'aller',
        sub: 'not regular, not a stem-changer',
        body: 'It does not take these endings and it does not change its stem in this way. Do not try either half of this lesson on it. It has a unit of its own further along the trail.',
      },
      {
        label: 'What you have',
        head: 'The -ER family is finished',
        body: `${REFRAME} Two more sets of endings are ahead of you and neither one changes what you learned here. Every verb ending in -er is now either one of a2.01's, one of these seventeen, or aller.`,
      },
    ],
  },

  /* ── Act 5: out in the world ─────────────────────────────────────────── */

  {
    type: 'practice',
    id: 's17-speak',
    title: 'Say Both Halves',
    frSub: 'À voix haute',
    layer: 'core',
    audio: { mode: 'mic', lang: 'fr-FR' },
    say: 'Say each pair one after the other. In half of them the verb should sound identical, and hearing that is the point.',
    skill: 'speak',
    itemIds: SPEAK_IDS,
  },

  {
    // THE DICTÉE, AND ITS MODE IS NOT A FREE CHOICE.
    //
    // dicteeMode() switches to WORD tiles above 16 letters, and word mode hands
    // every real word over pre-spelled. Every one of these nine targets is under
    // the limit and spells from LETTERS, and the batch proves it through the real
    // function rather than restating the threshold.
    //
    // WHAT IT CAN AND CANNOT SCORE, measured. The check is
    // `normalizeFr(filled) === normalizeFr(target)` (MissionRich.tsx), and
    // normalizeFr strips every combining mark. So six of these nine are graded on
    // the thing this lesson teaches — an inserted e, a doubled l, a doubled t, a
    // single t — and three are not, because a cedilla and an accent fold away.
    // The three that do not are here anyway: the tile bank is built from the
    // target's own letters, so a ç and an è are in the learner's hand and have to
    // be placed. DICTEE_NEAR_MISS names the split, gives the near miss a learner
    // would actually make, and the batch runs both halves through the real
    // normalizeFr, so nobody comes to believe all nine are scored.
    type: 'dictation',
    id: 's18-dictation',
    title: 'Write What You Hear',
    frSub: 'La dictée',
    layer: 'core',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], maxPlays: 4, recordingId: 'rec-a2-09-soft' },
    say: 'Nine lines. The sound will not tell you which letter goes in, so decide from the person before you place a tile.',
    itemIds: DICTATION_IDS,
  },

  {
    type: 'scenario',
    id: 's19-scenario',
    title: 'Back At The Board',
    frSub: 'À vous',
    layer: 'core',
    terms: ['nousCell', 'softC'],
    say: 'The same kitchen, the following week. Every answer wants a form you would have to write down.',
    setting: 'You are back at the community kitchen and Karim is working out the rota for the weekend. This time the note is yours to write first.',
    turns: [
      {
        ai: 'Alors, on commence à quelle heure samedi ?',
        en: 'So what time do we start on Saturday?',
        user: 'Nous commençons à huit heures.',
        userEn: 'We start at eight.',
        alts: [
          { fr: 'À huit heures.', en: 'At eight.' },
          { fr: 'On commence à huit heures, comme jeudi.', en: 'We start at eight, like Thursday.' },
        ],
      },
      {
        ai: 'Et le pain, tu en achètes combien ?',
        en: 'And how much bread are you buying?',
        user: "J'achète six baguettes.",
        userEn: 'I am buying six baguettes.',
        alts: [
          { fr: 'Six baguettes.', en: 'Six baguettes.' },
          { fr: 'Nous achetons six baguettes ce matin.', en: 'We are buying six baguettes this morning.' },
        ],
      },
      {
        ai: 'On mange ensemble après, ou chacun chez soi ?',
        en: 'Are we eating together afterwards, or separately?',
        user: 'Nous mangeons ensemble.',
        userEn: 'We are eating together.',
        alts: [
          { fr: 'Ensemble, si tu veux.', en: 'Together, if you like.' },
          { fr: 'On mange ensemble, comme la dernière fois.', en: 'We are eating together, like last time.' },
        ],
      },
      {
        ai: 'Tu peux prévenir Marie ? Elle ne sait pas encore.',
        en: 'Can you let Marie know? She does not know yet.',
        user: "Oui, je l'appelle ce soir.",
        userEn: 'Yes, I will call her this evening.',
        alts: [
          { fr: 'Je lui écris ce soir.', en: 'I will write to her this evening.' },
          { fr: 'Nous appelons Marie ce soir.', en: 'We will call Marie this evening.' },
        ],
      },
      {
        ai: 'Parfait. Tu écris tout ça sur le tableau ?',
        en: 'Perfect. Will you write all that on the board?',
        user: 'Oui, je note tout.',
        userEn: 'Yes, I will write it all down.',
        alts: [
          { fr: 'Je le fais tout de suite.', en: 'I will do it right away.' },
          { fr: "Oui, et j'écris l'heure aussi.", en: 'Yes, and I will write the time as well.' },
        ],
      },
    ],
  },

  {
    type: 'reading',
    id: 's20-reading',
    title: 'The Note On The Board',
    frSub: 'Le mot sur le tableau',
    layer: 'core',
    terms: ['softC', 'nousCell'],
    // REQUIRED for the glossary to exist at all. MissionSection routes a reading
    // section to ReadingMission (and so to PassagePage) only when this flag is set
    // WITH questions. a1.01 shipped five entries down the fallback path and they
    // rendered nowhere.
    questionsInModal: true,
    say: 'Read it once for the shape. Every pattern in the lesson is in here. Tap any word you do not know.',
    // ONE LINE, deliberately. PassagePage does text.split(/(?<=[.!?»])\s+/) and
    // renders the pieces inline in a single TX, so every authored newline is
    // swallowed.
    //
    // THE A1 RULE, WHICH HOLDS AT A2 (Paul, 2026-08-04): if it is not inside « »,
    // it is in English. The stage directions are context, and context is
    // instruction.
    text:
      'Friday morning at the kitchen, and this time the note is already up. '
      + '« Nous commençons à huit heures. Nous mangeons ensemble à midi. » '
      + 'Karim reads it, nods, and adds a line of his own underneath. '
      + '« Nous rangeons la cuisine avant de partir. » '
      + 'Marie arrives late with the bread and stops in front of the board. '
      + '« Et le pain ? Tu achètes où, toi ? » '
      + '« Au marché. Je préfère le marché. » '
      + 'She writes the name of the stall in the corner, where everybody will see it.',
    // Every entry is a single whitespace-delimited token that really appears
    // between the guillemets: the reader strips punctuation and lowercases before
    // matching, so an entry that is not a bare token is an underline that never
    // appears. MAX_GLOSS_WORDS is four and every key here is one word. Checked
    // through the REAL matcher in the test.
    glossary: [
      { word: 'commençons', en: 'are starting', note: 'nous plus -ons, and the tail under the c keeps it soft in front of the o.' },
      { word: 'mangeons', en: 'are eating', note: 'The same job done by an e, because g is spelled differently from c.' },
      { word: 'rangeons', en: 'are tidying', note: 'A third verb taking the same e. The pattern is about the letters, not the word.' },
      { word: 'achètes', en: 'are buying', note: 'tu plus a silent ending, so the stem is the last sound and the e opens to è.' },
      { word: 'préfère', en: 'prefer', note: 'Silent ending again, and the é opens the same way. Compare nous préférons, which does not.' },
    ],
    questions: [
      { q: 'Three verbs in this passage take a letter they do not have in the naming form. Which three, and what do they have in common?', a: 'commençons, mangeons and rangeons, and all three are the nous form. That is the only cell where a -ger or -cer verb changes, and the letter is there to keep the c or the g sounding as it did.' },
      { q: 'Marie writes « Tu achètes où ? » and the note says « Nous commençons ». Why does one of them have an accent and the other a cedilla?', a: 'They are two different reasons. achètes changes because the ending is silent and the stem became the last sound. commençons changes because an o was about to make the c hard. Four patterns in the lesson, and only two reasons behind them.' },
      { q: '« Je préfère le marché. » What would the nous form be, and what happens to the accent?', a: 'nous préférons, and the accent closes back to é. The nous ending is a syllable of its own, so the stem is no longer the last thing heard and there is nothing to open.' },
    ],
  },

  /* ── Act 6: prove it ─────────────────────────────────────────────────── */

  {
    type: 'reviewDeck',
    id: 's21-review',
    title: 'The Whole Lesson, One Deck',
    frSub: 'Révision',
    render: 'deck',
    layer: 'core',
    terms: ['softC', 'endingWentSilent', 'doubleOrAccent'],
    sheetId: 'sheet.a2.09.patterns',
    say: 'Rate each card objectively. Again, hard, or easy. The ones you mark again come back.',
    cards: [
      { front: 'Four patterns, how many reasons?', back: `${TWO_MECHANISMS} ${REFRAME}` },
      { front: 'The first reason', back: `${PATTERNS[0].reason}, and ${PATTERNS[1].reason}.` },
      { front: 'The second reason', back: 'The ending goes silent, so the stem becomes the last sound and its vowel opens.' },
      { front: 'Which cell does a -ger or -cer verb change in?', back: `${PATTERNS[0].where}. je, tu, il, vous and ils leave it alone.` },
      { front: 'Which cells does a stem vowel change in?', back: `${PATTERNS[3].where}: je, tu, il and ils. nous and vous never.` },
      { front: 'We eat here', back: fr('fr.a2.verbes.142'), say: fr('fr.a2.verbes.142') },
      { front: 'We start', back: fr('fr.a2.verbes.144'), say: fr('fr.a2.verbes.144') },
      { front: 'We travel by train', back: fr('fr.a2.verbes.146'), say: fr('fr.a2.verbes.146') },
      { front: 'I prefer tea', back: fr('fr.a2.verbes.147'), say: fr('fr.a2.verbes.147') },
      { front: 'We prefer tea', back: fr('fr.a2.verbes.148'), say: fr('fr.a2.verbes.148') },
      { front: 'You are calling Marie', back: fr('fr.a2.verbes.153'), say: fr('fr.a2.verbes.153') },
      { front: 'We are calling Marie', back: fr('fr.a2.verbes.154'), say: fr('fr.a2.verbes.154') },
      { front: 'The verbs that double', back: DOUBLERS.join(' · ') },
      { front: 'The verbs that take the accent', back: ACCENT_TAKERS.join(' · ') },
      { front: 'The one verb that needs both reasons', back: `protéger. ${fr('fr.a2.verbes.158')} ${fr('fr.a2.verbes.159')}` },
      { front: 'Which of these changes can you hear?', back: 'The vowel one. mange and mangeons are the same sound, and that is why the e is written at all.' },
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
    body: 'You have taken four spellings apart and found two reasons under them. You know which cell a -ger or -cer verb touches and which four cells a stem vowel answers to, and you know that one small list has to be remembered because nothing predicts it. What is left is the part that says whether it stuck. Each round is tied to one of the mistakes this lesson exists to stop, and failing a round gets you its drill before the next one starts. The drill is the teaching, not the punishment.',
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
        id: 'r1-the-reason',
        label: 'The reason underneath',
        // Round targets are ordered deliberately. drillForRound returns the FIRST
        // target that has a drill and then stops, so the first name here is what a
        // failing learner actually gets. Every round leads on a DIFFERENT trigger,
        // which is what makes all five drills reachable.
        targets: ['err-no-reason', 'err-hard-c'],
        say: 'Every question here is about why, not which.',
        questions: [
          {
            q: 'Why does nous mangeons carry an e that manger does not?',
            format: 'mcq',
            opts: [
              'Because nous always adds a letter',
              'Because manger is irregular',
              'To mark the plural',
              'So the g stays soft in front of the o',
            ],
            correct: 3,
            why: 'g is soft in front of e and i and hard in front of a, o and u. -ons starts with an o, so without the e you would be writing a word said with the g of gare.',
            ref: 's06-soft',
          },
          {
            q: 'Nous ___ ici. (manger)',
            format: 'typeIn',
            accept: ['mangeons', 'nous mangeons'],
            answer: 'mangeons',
            why: 'Stem mang-, nous ending -ons, and an e between them because of the o. The ending itself is untouched.',
            ref: 's06-soft',
          },
          {
            q: 'Which one of these would be said with a hard k?',
            format: 'mcq',
            opts: ['il commence', 'nous commençons', 'nous commencons', 'tu commences'],
            correct: 2,
            why: 'A plain c in front of an o is hard. That spelling is not a smaller mistake than the others, it is a different word, and it is the reason the cedilla exists.',
            ref: 's15-errors',
          },
          {
            q: 'Nous ___ la cuisine. (ranger)',
            format: 'typeIn',
            accept: ['rangeons', 'nous rangeons'],
            answer: 'rangeons',
            why: 'A verb the lesson barely showed you, and the reason works on it anyway. Any -ger verb takes the same e in the same cell.',
            ref: 's20-reading',
          },
          {
            q: 'A verb you have never met: plonger, to dive. What is the nous form?',
            format: 'mcq',
            opts: ['nous plongeons', 'nous plongons', 'nous plonjons', 'nous plongions'],
            correct: 0,
            why: 'You were not taught this verb and you did not need to be. The reason is about a g meeting an o, not about the word it happens to be in.',
            ref: 's09-ear',
          },
          {
            q: 'Fix this. A note on a whiteboard: « Nous mangons ensemble. »',
            format: 'errorSpot',
            accept: ['Nous mangeons ensemble', 'mangeons'],
            answer: 'Nous mangeons ensemble.',
            why: 'Without the e the g goes hard in front of the o, and the reader gets a word that is not the verb you meant. Nothing about saying it aloud would have caught this.',
            ref: 's15-errors',
          },
        ],
      },
      {
        id: 'r2-which-cell',
        label: 'Which cell moves',
        targets: ['err-wrong-cell', 'err-no-reason'],
        say: 'One cell in six, and five that are left alone.',
        questions: [
          {
            q: 'Vous ___ en train. (voyager)',
            format: 'typeIn',
            accept: ['voyagez', 'vous voyagez'],
            answer: 'voyagez',
            why: 'No e. The vous ending starts with an e of its own, so the g was never in front of a back vowel and nothing had to be protected.',
            ref: 's06-soft',
          },
          {
            q: 'Which form of commencer takes the cedilla?',
            format: 'mcq',
            opts: ['tu commences', 'ils commencent', 'nous commençons', 'on commence'],
            correct: 2,
            why: 'Only nous, because -ons is the only one of the six endings that starts with an o. Every other ending here begins with e.',
            ref: 's07-nouscell',
          },
          {
            q: 'Nous ___ une pizza. (partager)',
            format: 'typeIn',
            accept: ['partageons', 'nous partageons'],
            answer: 'partageons',
            why: 'The same e as mangeons and rangeons. Three verbs, one reason, and it is the letters that decide rather than the meaning.',
            ref: 's06-soft',
          },
          {
            q: '« On commence à sept heures. » Why is there no cedilla here?',
            format: 'mcq',
            opts: [
              'Because on is informal',
              'Because on takes the il form, and that ending starts with e',
              'Because the cedilla is optional',
              'Because commencer only changes in the past',
            ],
            correct: 1,
            why: 'on means we and takes third-person-singular agreement, so it never reaches the nous cell. That is why speech almost never puts this change in front of you.',
            ref: 's07-nouscell',
          },
          {
            q: 'Ils ___ le projet lundi. (lancer)',
            format: 'typeIn',
            accept: ['lancent', 'ils lancent'],
            answer: 'lancent',
            why: 'Plain c. The -ent ending starts with an e, so the c is already soft and there is nothing to fix.',
            ref: 's06-soft',
          },
          {
            q: 'Fix this. A message to a swimming group: « Nous nagons le samedi. »',
            format: 'errorSpot',
            accept: ['Nous nageons le samedi', 'nageons'],
            answer: 'Nous nageons le samedi.',
            why: 'nager is a -ger verb like the others, and the nous cell is where it needs the e. Nothing about nager makes it a special case.',
            ref: 's06-soft',
          },
        ],
      },
      {
        id: 'r3-ending-quiet',
        label: 'When the ending goes quiet',
        targets: ['err-open-vowel', 'err-wrong-cell'],
        say: 'Read the ending first. It decides what happens in front of it.',
        questions: [
          {
            q: 'Between je préfère and nous préférons, which one has the ending you can hear?',
            format: 'mcq',
            opts: ['je préfère', 'nous préférons', 'Both of them', 'Neither of them'],
            correct: 1,
            why: '-ons is a syllable of its own and -e is silent. That is the whole of what decides the vowel in front: with an audible ending the stem is not the last sound and stays closed.',
            ref: 's08-silent',
          },
          {
            q: 'Listen. Which one is this?',
            format: 'listenChoose',
            audio: { mode: 'tts', lang: 'fr-FR', clip: 'Je préfère le thé.', recordingId: 'rec-a2-09-open' },
            say: 'Je préfère le thé.',
            opts: ['Je préfère le thé.', 'Nous préférons le thé.', 'Both are said the same way', 'Neither, the vowel is closed'],
            correct: 0,
            why: 'This is the one change in the lesson your ear can settle. The vowel before the ending really does open, so préfère and préférons are audibly different words.',
            ref: 's09-ear',
          },
          {
            q: 'Elle ___ du pain. (acheter)',
            format: 'mcq',
            opts: ['achete', 'achète', 'achette', 'achetons'],
            correct: 1,
            why: 'The ending is silent, so the stem is the last sound and its e opens to è. This one is a choice rather than something to type, because a typed answer here cannot tell an accent from a bare letter.',
            ref: 's08-silent',
          },
          {
            q: 'Nous ___ du pain. (acheter)',
            format: 'typeIn',
            accept: ['achetons', 'nous achetons'],
            answer: 'achetons',
            why: 'No accent. The ending is a syllable of its own, so the stem is not the last thing heard and there is nothing to open.',
            ref: 's08-silent',
          },
          {
            q: 'Which of these four leaves its stem exactly as the naming form had it?',
            format: 'mcq',
            opts: ['je préfère', 'ils répètent', 'nous préférons', 'elle achète'],
            correct: 2,
            why: 'The nous form, every time. Four of the six cells take a silent ending and change; nous and vous take an audible one and do not.',
            ref: 's10-pair',
          },
          {
            q: 'Tap the letters you do not say in « répètent ».',
            format: 'tapSilent',
            word: 'répètent',
            correct: 'ent',
            why: 'The whole ending, exactly as a2.01 taught it. That silence is the condition: because nothing is said after the stem, the stem is the last sound and its vowel opens.',
            ref: 's04-recap',
          },
        ],
      },
      {
        id: 'r4-double-or-accent',
        label: 'Double it or accent it',
        targets: ['err-double-or-accent', 'err-open-vowel'],
        say: 'Five verbs, and this is the round where knowing the reason will not save you.',
        questions: [
          {
            q: 'Tu ___ Marie. (appeler)',
            format: 'typeIn',
            accept: ['appelles', 'tu appelles'],
            answer: 'appelles',
            why: 'Two l. appeler writes the open sound by doubling the consonant, and the silent -es on the end tells you the stem is where the sound stops.',
            ref: 's10-pair',
          },
          {
            q: 'Nous ___ Marie. (appeler)',
            format: 'typeIn',
            accept: ['appelons', 'nous appelons'],
            answer: 'appelons',
            why: 'One l. nous is one of the two cells where nothing moves, so the stem is spelled the way the naming form had it.',
            ref: 's11-lists',
          },
          {
            q: 'acheter takes an accent. Which of these ends the same way and doubles instead?',
            format: 'mcq',
            opts: ['geler', 'préférer', 'jeter', 'manger'],
            correct: 2,
            why: 'jeter and acheter both end in -eter and behave differently, and nothing in either word predicts it. This is the memorised part of the lesson and it is five verbs long.',
            ref: 's14-trap',
          },
          {
            q: 'Fix this. A message about a doctor: « Nous appellons le médecin. »',
            format: 'errorSpot',
            accept: ['Nous appelons le médecin', 'appelons'],
            answer: 'Nous appelons le médecin.',
            why: 'The doubling belongs to the four cells with a silent ending. nous has an audible one, so the second l has nothing to do there.',
            ref: 's15-errors',
          },
          {
            q: 'Je ___ le ticket. (jeter)',
            format: 'typeIn',
            accept: ['jette', 'je jette'],
            answer: 'jette',
            why: 'Two t. jeter is on the short list that doubles, and the silent -e is what puts it in a cell where the stem has to carry the sound.',
            ref: 's14-trap',
          },
          {
            q: 'Nothing in an -eler or -eter infinitive says which spelling it takes. So what do you do?',
            format: 'mcq',
            opts: [
              'Guess from how common the verb is',
              'Always double, and accept some mistakes',
              'Use the accent, since it is easier to type',
              'Learn these five by name, and derive everything else',
            ],
            correct: 3,
            why: 'A short list you know you have to learn is worth more than a rule that pretends to cover it. Everything else in this lesson is worked out; these five are not.',
            ref: 's11-lists',
          },
        ],
      },
      {
        id: 'r5-on-the-page',
        label: 'On the page',
        targets: ['err-hard-c', 'err-double-or-accent'],
        say: 'Written, which is the only place any of this shows up.',
        questions: [
          {
            q: 'You are writing the note for the morning shift. Which line goes on the board?',
            format: 'mcq',
            opts: [
              'Nous commencons à huit heures.',
              'Nous commençons à huit heures.',
              'Nous commencons à huit heure.',
              'Nous commençon à huit heures.',
            ],
            correct: 1,
            why: 'The cedilla keeps the c soft in front of the o. This is a choice rather than something to type, because a typed answer cannot tell a cedilla from a plain c.',
            ref: 's01-scene',
          },
          {
            q: 'Nous ___ tout. (jeter)',
            format: 'typeIn',
            accept: ['jetons', 'nous jetons'],
            answer: 'jetons',
            why: 'One t. Whatever a verb does in the silent cells, nous and vous always get the plain stem back.',
            ref: 's11-lists',
          },
          {
            q: 'Say the line you would have written on the board.',
            format: 'speak',
            target: 'Nous commençons à huit heures.',
            ipa: '/nu kɔ.mɑ̃.sɔ̃ a ɥi tœʁ/',
            why: 'Out loud there is nothing to get wrong here, and that is the point of the lesson: the cedilla exists so that this sentence sounds exactly like the one you already knew how to say.',
            ref: 's17-speak',
          },
          {
            q: 'Fix this. A note about the tickets: « Je jete le ticket. »',
            format: 'errorSpot',
            accept: ['Je jette le ticket', 'jette'],
            answer: 'Je jette le ticket.',
            why: 'jeter doubles its t in the four silent cells, and je is one of them. The single t would be the nous and vous spelling.',
            ref: 's14-trap',
          },
          {
            q: 'Nous ___ nos photos. (protéger)',
            format: 'mcq',
            opts: ['protégeons', 'protégons', 'protègeons', 'protegons'],
            correct: 0,
            why: 'Both reasons in one word: the e goes in because a g meets an o, and the é stays closed because the ending is audible. A learner holding four lists has nowhere to put this verb.',
            ref: 's12-both',
          },
          {
            q: 'Nous ___ en train. (voyager)',
            format: 'typeIn',
            accept: ['voyageons', 'nous voyageons'],
            answer: 'voyageons',
            why: 'Compare it with the vous form from round two. Same verb, and only one of the six cells ever needs the extra letter.',
            ref: 's06-soft',
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
    body: 'You can write the nous form of any -ger or -cer verb, including verbs nobody has shown you, because the reason is about a letter meeting a vowel rather than about the word. You can move a stem vowel in the four cells where the ending is silent and leave it alone in the two where it is not. And you know which small part of this has to be memorised, which is five verbs, and why nothing else does. The next two units swap these endings for two other short sets and leave the method exactly as it is.',
    points: [
      `${REFRAME}`,
      `${TWO_MECHANISMS} ${PATTERNS[0].reason}, and the same for -cer. The other two answer to the ending going silent.`,
      `The -ger and -cer change is the nous cell and nothing else. ${PATTERNS[3].where} for the other two.`,
      `Only five verbs have to be learnt by name: ${DOUBLERS.join(', ')} double, and ${ACCENT_TAKERS.join(' and ')} take the accent.`,
    ],
  },
];

/* ─── The progress card counts the journey rather than restating it ────────
 *
 * Derived here rather than typed. It throws rather than degrades: a progress card
 * that silently reports "0 of 0" is worse than a build that stops.              */
{
  const ix = SECTIONS.findIndex((s) => (s as { id?: string }).id === 's22-progress');
  const card = SECTIONS[ix];
  const quiz = SECTIONS.find((s) => s.type === 'quiz');
  if (!card || card.type !== 'progressCheck' || !quiz || quiz.type !== 'quiz') {
    throw new Error('a2.09.l1: the progress card or the quiz is missing, so the card cannot count what is not there');
  }
  card.stats = [
    { k: 'Patterns', v: String(PATTERNS.length) },
    { k: 'Reasons behind them', v: String(MECHANISMS.length) },
    { k: 'Verbs to memorise', v: `${DOUBLERS.length + ACCENT_TAKERS.length} of ${THE_SEVENTEEN.length}` },
    // `ix` is the count of sections BEFORE this one, which is exactly how many
    // missions the learner has finished when they reach it.
    { k: 'Missions done', v: `${ix} of ${SECTIONS.length}` },
  ];
}

/* ─── Acts ─────────────────────────────────────────────────────────────────
 *
 * Six, and the shape is the doctrine's: scene, paradigm, Owns, trap, production,
 * proof. The Owns act is EIGHT missions against the paradigm act's TWO, which is
 * the one structural thing this lesson has to get right: the base paradigm is
 * a2.01's and re-teaching it would spend a third of the lesson on last week.
 *
 * `estScreens` is what the mission actually costs, not a guess rounded to a nice
 * number, because it is divided by the rest points to check no stretch runs past
 * the checkpoint-spacing limit of 22.                                           */

const ACTS: LessonAct[] = [
  {
    id: 'act1',
    title: 'The note you rewrote',
    sections: ['s01-scene', 's02-goals', 's03-notirregular'],
    milestone: 'You know what a missing letter costs in writing, and that none of these verbs is irregular.',
    estScreens: 17,
    restPoints: ['s01-scene/after-break'],
  },
  {
    id: 'act2',
    title: 'What has not changed',
    sections: ['s04-recap', 's05-grid'],
    milestone: 'The six endings are untouched, and four spellings have turned out to have two reasons.',
    estScreens: 10,
  },
  {
    id: 'act3',
    title: 'The spelling changes so the sound does not',
    sections: ['s06-soft', 's07-nouscell', 's08-silent', 's09-ear', 's10-pair', 's11-lists', 's12-both', 's13-flash'],
    milestone: 'You can predict three of the four changes, and you know which one you cannot.',
    estScreens: 52,
    restPoints: ['s06-soft/halfway', 's10-pair/after', 's13-flash/halfway'],
  },
  {
    id: 'act4',
    title: '-eler against -eter',
    sections: ['s14-trap', 's15-errors', 's16-notmine'],
    milestone: 'You know the five verbs that have to be learnt, and the three things that are not yours.',
    estScreens: 20,
  },
  {
    id: 'act5',
    title: 'Out in the world',
    sections: ['s17-speak', 's18-dictation', 's19-scenario', 's20-reading'],
    milestone: 'You have said both halves of every pair and spelled eight of them from sound alone.',
    estScreens: 44,
    restPoints: ['s17-speak/halfway', 's18-dictation/halfway'],
  },
  {
    id: 'act6',
    title: 'Prove it',
    sections: ['s21-review', 's22-progress', 's23-quiz', 's24-roundup'],
    milestone: 'Lesson complete. Every verb ending in -er is now accounted for.',
    estScreens: 50,
    restPoints: ['s21-review/halfway', 's23-quiz/after-r2', 's23-quiz/after-r4'],
  },
];

/* ─── Deck tranches ────────────────────────────────────────────────────────
 *
 * One slice per act, index-aligned. An item is released the act it is SHOWN, not
 * the act it is first mentioned: releasing the whole set at mission one turns the
 * flashcard hub into a wall on the morning the learner is least able to read it.
 *
 * Acts 1, 2, 4 and 6 release nothing, because they show no corpus row. The scene
 * and the grid run entirely on display strings — deliberately, since act 1's
 * whole point is a sentence that was never written and act 2's is that nothing
 * has changed yet.                                                             */

const DECK_TRANCHE: string[][] = [
  // Act 1: nothing. The scene's `Nous commençons à huit heures.` is a display
  // string and not a corpus row, because a row is released to spaced repetition
  // and this lesson does not drill the sentence somebody failed to write.
  [],
  // Act 2: nothing. s04-recap is a2.01's endings and s05-grid is display forms.
  [],
  // Act 3: the seventeen verbs and every teaching row, all shown here.
  [
    ...THE_SEVENTEEN.map(verbId),
    ...familyIds('soft'),
    ...familyIds('silent'),
    ...familyIds('split'),
    ...familyIds('both'),
  ],
  [],
  // Act 5: the applied sentences, released once the reasons that build them have
  // been given, and shown by the speak mission that names them.
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
    id: 'err-no-reason',
    description: 'Holds the four patterns as four lists and cannot say why any of them exists, so a verb outside the lists is a guess.',
    detectOn: ['s05-grid', 's12-both', 's23-quiz/r1-the-reason'],
    drill: 'drill-why-the-letter',
    retest: 'retest-why-the-letter',
  },
  {
    id: 'err-wrong-cell',
    description: 'Puts the -ger or -cer letter on the wrong person, or misses that nous is the only cell that takes it: nous voyageons and vous voyageons.',
    detectOn: ['s06-soft', 's07-nouscell', 's23-quiz/r2-which-cell'],
    drill: 'drill-which-cell',
    retest: 'retest-which-cell',
  },
  {
    id: 'err-open-vowel',
    description: 'Leaves the stem vowel closed where the ending is silent, or opens it where the ending sounds: je prefere, nous préfèrons.',
    detectOn: ['s08-silent', 's09-ear', 's23-quiz/r3-ending-quiet'],
    drill: 'drill-open-vowel',
    retest: 'retest-open-vowel',
  },
  {
    id: 'err-double-or-accent',
    description: 'Merges -eler and -eter into one rule: appèles for appelles, achettes for achètes, appellons for appelons.',
    detectOn: ['s10-pair', 's14-trap', 's23-quiz/r4-double-or-accent'],
    drill: 'drill-double-or-accent',
    retest: 'retest-double-or-accent',
  },
  {
    id: 'err-hard-c',
    description: 'Writes a plain c or a bare g in front of an o, which is not a smaller mistake than the others: commencons, mangons.',
    detectOn: ['s01-scene', 's15-errors', 's23-quiz/r5-on-the-page'],
    drill: 'drill-soft-consonant',
    retest: 'retest-soft-consonant',
  },
];

const DRILLS: LessonDrill[] = [
  {
    id: 'drill-why-the-letter',
    title: 'The form, and the reason for it',
    format: 'flashcard',
    coach: 'The form is on the left. Say the reason out loud before you turn the card, not the pattern name.',
    pairs: [
      ['nous mangeons', PATTERNS[0].reason],
      ['nous commençons', PATTERNS[1].reason],
      ['je préfère', 'the ending is silent, so the stem is the last sound and the vowel opens'],
      ["j'appelle", 'the same open sound, written by doubling the consonant'],
      ['nous protégeons', 'a g meets an o, and the ending is audible so the é stays closed'],
      ['nous préférons', 'the ending is a syllable, so nothing moves at all'],
    ],
  },
  {
    id: 'retest-why-the-letter',
    title: 'One more time',
    format: 'mcq',
    q: 'Four patterns in this lesson. How many reasons?',
    opts: ['Four', 'Two', 'One'],
    correct: 1,
    why: 'Two. A consonant being protected in front of a back vowel, and a stem answering to an ending that went silent.',
  },
  {
    id: 'drill-which-cell',
    title: 'Does the stem move here?',
    format: 'sort',
    buckets: ['The stem moves', 'The stem stays'],
    // Item ids, not display strings: a drill scores against the corpus, so it
    // plays the same audio and reads the same spelling as every other card that
    // teaches these. Passing display strings here validates as broken ids.
    items: [
      'fr.a2.verbes.142', 'fr.a2.verbes.141', 'fr.a2.verbes.144', 'fr.a2.verbes.143',
      'fr.a2.verbes.146', 'fr.a2.verbes.145', 'fr.a2.verbes.160', 'fr.a2.verbes.166',
    ],
    coach: 'Play each one and look at the person. Only nous ever takes the extra letter in a -ger or -cer verb.',
  },
  {
    id: 'retest-which-cell',
    title: 'One more time',
    format: 'mcq',
    q: 'Vous ___ en train. (voyager)',
    opts: ['voyageons', 'voyagez', 'voyagons'],
    correct: 1,
    why: 'The vous ending starts with an e, so the g was never in front of a back vowel and nothing had to be added.',
  },
  {
    id: 'drill-open-vowel',
    title: 'Silent ending, or audible one?',
    format: 'sort',
    buckets: ['The ending is silent', 'The ending sounds'],
    items: [
      'fr.a2.verbes.147', 'fr.a2.verbes.148', 'fr.a2.verbes.149', 'fr.a2.verbes.150',
      'fr.a2.verbes.151', 'fr.a2.verbes.152',
    ],
    coach: 'Sort by the ending, not by the vowel. Once the ending is sorted the vowel follows on its own.',
  },
  {
    id: 'retest-open-vowel',
    title: 'One more time',
    format: 'mcq',
    q: 'Nous ___ la phrase. (répéter)',
    opts: ['répètons', 'répétons', 'répétens'],
    correct: 1,
    why: 'The ending is a syllable of its own, so the stem is not the last thing heard and the é keeps its closed sound.',
  },
  {
    id: 'drill-double-or-accent',
    title: 'Which one takes which?',
    format: 'flashcard',
    coach: 'The naming form is on the left. Say the je form out loud before you turn the card.',
    pairs: [
      ['appeler', "j'appelle, two l"],
      ['rappeler', 'je rappelle, two l'],
      ['jeter', 'je jette, two t'],
      ['acheter', "j'achète, an accent"],
      ['geler', 'je gèle, an accent'],
      ['and nous?', 'always the plain stem: appelons, jetons, achetons, gelons'],
    ],
  },
  {
    id: 'retest-double-or-accent',
    title: 'One more time',
    format: 'mcq',
    q: 'Tu ___ Marie. (appeler)',
    opts: ['appèles', 'appelles', 'apelles'],
    correct: 1,
    why: 'appeler doubles the l. The silent -es tells you the stem has to carry the sound, and the doubling is how this verb writes it.',
  },
  {
    id: 'drill-soft-consonant',
    title: 'Hard, or soft?',
    format: 'flashcard',
    coach: 'Read the left side out loud exactly as it is written, then turn the card.',
    pairs: [
      ['nous mangons', 'a hard g, as in gare. Not a word.'],
      ['nous mangeons', 'the g of the naming form, kept by the e'],
      ['nous commencons', 'a hard k, as in comme. Not a word.'],
      ['nous commençons', 'the s of the naming form, kept by the tail'],
      ['nous lançons', 'the same tail, on a second -cer verb'],
      ['nous effaçons', 'and a third. It is the letters, not the verb.'],
    ],
  },
  {
    id: 'retest-soft-consonant',
    title: 'One more time',
    format: 'mcq',
    q: 'Which of these is said with a hard k?',
    opts: ['nous commençons', 'nous commencons', 'il commence'],
    correct: 1,
    why: 'A plain c in front of an o is hard. The cedilla is the instruction to keep the sound the naming form already had.',
  },
];

/* ─── Reference sheets ─────────────────────────────────────────────────────
 *
 * Two, and both exist for a layout reason as much as a pedagogical one. The
 * density validator refuses a `table` at layer 'core' outright, so the full grids
 * live here, at layer 'deep', where density is deliberately fine.
 *
 * ReferenceSheet.tsx draws `teach`, `letterGrid` and `table` and NOTHING ELSE. A
 * `cheatSheet` in here would draw its title and no rows, which a1.13 ships today
 * and which is exactly why s05-grid is a cheatSheet in the FLOW and a table in
 * the sheet rather than the other way round. The batch refuses any other section
 * type in a sheet.                                                              */

const SHEETS: ReferenceSheet[] = [
  {
    id: 'sheet.a2.09.patterns',
    title: 'The four patterns, in full',
    layer: 'deep',
    contains: ['All four patterns with their reason', 'Which cells each one touches', 'The two reasons behind them'],
    sections: [
      {
        type: 'table',
        id: 'sheet-patterns-grid',
        title: 'Four patterns, two reasons',
        layer: 'deep',
        cols: ['Pattern', 'The form', 'Where it changes', 'Why'],
        rows: PATTERNS.map((p) => [p.label, p.form, p.where, p.reason]),
      },
      {
        type: 'table',
        id: 'sheet-patterns-cells',
        title: 'manger and préférer, all six forms',
        layer: 'deep',
        cols: ['Person', 'manger', 'préférer', 'Ending'],
        rows: [
          ['je', 'mange', 'préfère', ENDINGS[0].ending],
          ['tu', 'manges', 'préfères', ENDINGS[1].ending],
          ['il · elle · on', 'mange', 'préfère', ENDINGS[2].ending],
          ['nous', 'mangeons', 'préférons', ENDINGS[3].ending],
          ['vous', 'mangez', 'préférez', ENDINGS[4].ending],
          ['ils · elles', 'mangent', 'préfèrent', ENDINGS[5].ending],
        ],
      },
      {
        type: 'teach',
        id: 'sheet-patterns-why',
        title: 'The two reasons, at length',
        layer: 'deep',
        body: 'The first reason is about a consonant meeting a vowel. c and g each have a soft sound and a hard one, and the vowel after them decides which: soft in front of e and i, hard in front of a, o and u. Only one of the six endings begins with a back vowel, and that is -ons, so only the nous form is ever in danger. A -ger verb puts an e in front of the ending and a -cer verb puts a tail under the c, and in both cases the letter exists so that the verb goes on sounding the way its naming form did. No other form is touched, which is why you meet this change in writing far more often than in speech: nous is what you write, and speech mostly says on, which takes the il form. The second reason is about where the sound of the word stops. Four of the six endings make no sound at all, so in those four cells the stem is the last thing anybody hears, and a French stem in that position takes an open vowel rather than a closed one. That is why je préfère has è and nous préférons has é, and why elle achète has an accent that nous achetons does not. The same condition produces the doubled consonant of j appelle and je jette: the doubling and the accent are two spellings of one open sound, and which one a verb takes is the only thing in this lesson that cannot be worked out from the spelling of its naming form. One verb runs both reasons at once. protéger ends in -ger and has an é in the syllable before it, so je protège opens the vowel and nous protégeons adds the e, and neither of those is a special case.',
      },
    ],
  },
  {
    id: 'sheet.a2.09.lists',
    title: 'Which verbs double, which take the accent',
    layer: 'deep',
    contains: ['The verbs that double the consonant', 'The verbs that take the accent', 'Every verb in the lesson, by pattern'],
    sections: [
      {
        type: 'table',
        id: 'sheet-lists-split',
        title: '-eler and -eter, the five to learn',
        layer: 'deep',
        cols: ['Verb', 'je form', 'nous form', 'Which'],
        rows: [
          ['appeler', "j'appelle", 'nous appelons', 'doubles'],
          ['rappeler', 'je rappelle', 'nous rappelons', 'doubles'],
          ['jeter', 'je jette', 'nous jetons', 'doubles'],
          ['acheter', "j'achète", 'nous achetons', 'accent'],
          ['geler', 'je gèle', 'nous gelons', 'accent'],
        ],
      },
      {
        type: 'table',
        id: 'sheet-lists-all',
        title: 'Every verb in this lesson',
        layer: 'deep',
        cols: ['Group', 'Verbs'],
        rows: VERBS_BY_PATTERN.map((g) => [g.group, g.verbs.join(' · ')]),
      },
      {
        type: 'teach',
        id: 'sheet-lists-next',
        title: 'What carries forward',
        layer: 'deep',
        body: 'The six endings do not change again and neither does the method: find the stem, look at the ending, add the person. The two units after this one swap the endings for two other short sets and leave everything else exactly as it is. Two more things are worth knowing before you meet them. There is a fifth pattern this lesson deliberately left out: payer and essayer turn their y into an i in the same four silent cells, for the same reason as préférer, and both spellings are accepted, so je paie and je paye are both correct. That is the only place in the -er family where two answers are right, and it is why it sits outside a lesson built on one. And aller ends in -er and belongs to neither half of this lesson: it takes different endings and it does not change its stem in this way at all, so it has a unit of its own. Everything else ending in -er is now accounted for. The changes here also come back once more, in a tense you have not met: the same e appears in nous mangions and the same open vowel in je préférais, and when it does, none of it will be new.',
      },
    ],
  },
];

export const VERBES_ER_EXC_LESSON: Lesson = {
  id: 'a2.09.l1',
  unitId: 'a2.09',
  // The lesson's index WITHIN its unit, not its place in the track.
  seq: 1,
  // Copied BYTE FOR BYTE from the probe's unit dump on 2026-08-11. The unit's own
  // `sub` is this string; its `t` is the English "-ER Verbs: The Exceptions".
  title: 'Les verbes en -ER : exceptions',
  level: 'a2',
  // missions.ts derives the eyebrow from unit.seq at render time
  // (`${level} · LEÇON ${String(unit.seq).padStart(2, '0')}`), and a2.09 sits at
  // seq "2" — a STRING in the unit body, which pads to "02". The stored value is a
  // fallback and has to agree with what the renderer computes, or the two disagree
  // the moment something reads this field instead. The batch checks it against the
  // live unit rather than trusting this comment.
  tag: 'A2 · LEÇON 02',
  intro:
    'Seventeen verbs that keep every ending you already have and move one letter in front of them. Four spellings, two reasons, and only five of the seventeen have to be memorised.',

  sections: SECTIONS,
  itemIds: ITEM_IDS,
  // v1. The unit dump on 2026-08-11 says `"lessons": []`, so unlike a2.01 this
  // really is a first build and the counter starts where it should.
  //
  // v2 is a2-09-er-exceptions.test.ts catching a distractor that belonged to a
  // later unit: r5's cedilla question offered « Nous commencions à huit heures. »
  // as a wrong answer, and `commencions` is the IMPERFECT. The lesson's own guard
  // against reaching into a tense the trail has not taught fired on its own
  // content, which is the guard doing exactly what it is for. The option is now
  // « Nous commençon à huit heures. », which is wrong in the way this lesson
  // actually teaches. The counter moves rather than the guard being relaxed: two
  // different bodies under one number is the drift that makes Postgres and
  // seed.json disagree while both report the same version.
  version: 2,

  grammarAssumed: [
    'The six subject pronouns and the nine they cover, introduced in a1.05',
    'on takes third-person-singular agreement, introduced in a1.05',
    'The present tense of regular -er verbs as a stem plus six endings, introduced in a2.01',
    'That -e, -es and -ent are silent and -ons and -ez are not, introduced in a2.01',
    'nous as the written first-person plural against on as the spoken one, stated in a2.01',
  ],
  grammarIntroduced: [
    'The -ger and -cer spelling change, as a consonant protected in front of a back vowel',
    'That the change occupies the nous cell alone, and is therefore met mostly in writing',
    'The -eler, -eter and é_er stem-vowel change, as a response to the ending going silent',
    'That the doubled consonant and the accent are two spellings of one open vowel',
    'That which of the two an -eler or -eter verb takes is learnt per verb and not derived',
  ],

  features: ['roleplay', 'voiceflash'],
  scenarioId: undefined,

  overview: {
    titleEn: '-ER Verbs: The Exceptions',
    subFr: 'Les verbes en -ER : exceptions',
    introFr: "Dix-sept verbes qui gardent les six terminaisons et déplacent une lettre devant elles. Quatre orthographes, deux raisons.",
    minutes: 29,
    difficulty: 3,
    glyph: 'Ç',
    screens: 193,
  },

  acts: ACTS,
  reframe: REFRAME,
  errorTriggers: ERROR_TRIGGERS,
  drills: DRILLS,
  sheets: SHEETS,
  deckTranche: DECK_TRANCHE,
  terms: VERBES_ER_EXC_TERMS,

  audio: {
    defaultLang: 'fr-FR',
    speeds: [1.0, 0.65],
    coachVoice: 'coach-en-warm',
    interfaceSounds: ['correct', 'incorrect', 'checkpoint'],
    // ── The audio decisions that cannot be recovered later ─────────────────
    //
    // Written here AND pinned by a2-09-er-exceptions.test.ts, because a constraint
    // on how something is recorded becomes invisible the moment the clip is
    // delivered. The first two are opposites and both are load-bearing.
    recorded: [
      {
        id: 'rec-a2-09-soft',
        desc: 'THE -ger AND -cer PAIRS, EACH PAIR IN ONE CONTINUOUS TAKE, AND THE VERB MUST SOUND IDENTICAL IN BOTH HALVES. This is the most important instruction in this lesson. « Je mange ici. » then « Nous mangeons ici. » The first two sounds of the verb are the same in both, and the e on the page exists precisely so that they are. Do not lean on the ge of mangeons to make it audible, and do not soften the g of mange to match it: read them both as ordinary speech and they will already agree. Same for « Il commence ici. » against « Nous commençons. » If a listener can hear that the stem has changed, the recording has taught the opposite of what the lesson teaches. The wrong readings are NOT to be recorded: nous mangons and nous commencons appear only on the page.',
        clipIds: ['Je mange ici.', 'Nous mangeons ici.', 'Il commence ici.', 'Nous commençons.', 'Vous voyagez en train.', 'Nous voyageons en train.', 'Nous rangeons la cuisine.', 'Nous partageons une pizza.', 'Nous commençons à huit heures.'],
      },
      {
        id: 'rec-a2-09-open',
        desc: 'THE VOWEL PAIRS, AND HERE THE DIFFERENCE IS REAL AND MUST BE AUDIBLE. « Je préfère le thé. » then « Nous préférons le thé. » in one take: the vowel before the ending is open in the first and closed in the second, and that is the one change in this whole lesson the ear can settle. Do not exaggerate it into two different words; it is an ordinary French contrast and it should sound ordinary. The same for « Elle achète du pain. » against « Nous achetons du pain. », where the e of achetons is barely there at all, and for « Ils répètent la phrase. » against « Nous répétons la phrase. » One voice, one pace, both halves back to back, because two sessions are two performances and the learner would hear the performance rather than the vowel.',
        clipIds: ['Je préfère le thé.', 'Nous préférons le thé.', 'Elle achète du pain.', 'Nous achetons du pain.', 'Ils répètent la phrase.', 'Nous répétons la phrase.', 'Je protège mes photos.', 'Nous protégeons nos photos.'],
      },
      {
        id: 'rec-a2-09-split',
        desc: 'THE -eler AGAINST -eter PAIR, IN ONE TAKE, AND THE TWO VERBS MUST RHYME. « Tu appelles Marie. » and « Tu achètes du pain. » carry the same open vowel written two different ways, and the whole trap is that the sound gives the learner nothing to go on. Read the stressed syllables at the same pitch and length. Then the nous forms, « Nous appelons Marie. » and « Nous jetons tout. », where the vowel drops away to almost nothing and the doubling disappears from the page with it. The trapDrill is set to play wrong-then-right: the wrong half is an English speaker sounding the doubled consonant as two letters, ap-PEL-less, which is a reading voice rather than a speaking one. Do not caricature it.',
        clipIds: ['tu appelles', 'tu achètes', 'je jette', 'nous appelons', 'elle gèle', 'ils rappellent', 'Tu appelles Marie.', 'Nous appelons Marie.', 'Tu achètes du pain.', 'Je jette le ticket.', 'Nous jetons tout.'],
      },
      {
        id: 'rec-a2-09-grid',
        desc: 'The four pattern forms, read as four separate items with about a second between them: nous mangeons, nous commençons, j appelle then j achète as one breath because they are a pair, and je préfère. Flat, conversational, no teaching emphasis. The grid these sit in makes its point visually and the audio is there so a learner can check that the first two sound unremarkable, which is the claim.',
        clipIds: ['nous mangeons', 'nous commençons', "j'appelle", "j'achète", 'je préfère'],
      },
      {
        id: 'rec-a2-09-verbs',
        desc: `The ${THE_SEVENTEEN.length} naming forms, read as a flat list at conversational pace, one voice, roughly a second between them so a learner can repeat into the gap. Every one ends in the same AY sound and that sameness is worth keeping: nothing in how these verbs are SAID marks them out from the thirty in a2.01, which is exactly why the lesson has to be about the page. Do not vary the intonation to keep the list interesting.`,
        clipIds: [...THE_SEVENTEEN],
      },
      {
        id: 'rec-a2-09-scene',
        desc: 'The opening scene, French bubbles only, one man in his forties at an ordinary unhurried pace. The last line (« Et nous, on arrive à quelle heure ? ») is the whole scene: it must sound like somebody asking a practical question on a Friday morning, with no edge in it at all. Any hint that he is pointing out a mistake would destroy the beat, because nothing was misspelled in the end. The note simply did not say.',
        clipIds: ['Tu écris le mot pour demain ?', 'Et nous, on arrive à quelle heure ?', 'Nous commençons à huit heures.'],
      },
    ],
    ambienceDefault: 'off',
  },
};

/** Exported for the authoring script, the merge script and the tests, so none of
 *  them restates a count that can drift out of agreement with the content. */
export const VERBES_ER_EXC_ITEM_IDS = ITEM_IDS;
export const VERBES_ER_EXC_SPEAK_IDS = SPEAK_IDS;
export const VERBES_ER_EXC_DICTATION_IDS = DICTATION_IDS;
export const VERBES_ER_EXC_REPAIRED_RESPELL = REPAIRED_RESPELL;
export const VERBES_ER_EXC_CHANGED_FORMS = CHANGED_FORMS;
export const VERBES_ER_EXC_MINIMAL_PAIRS = MINIMAL_PAIRS;
export const VERBES_ER_EXC_SPLIT_PAIR = SPLIT_PAIR;

/** THE SECTION THAT MUST CARRY THE -eler / -eter CONTRAST, both sides present,
 *  in two columns on one screen. Named here rather than in the test, so the test
 *  asserts against the lesson's own claim and a rename cannot silently move the
 *  assertion to a section that no longer holds it. */
export const SPLIT_SECTION_ID = 's10-pair';
/** The section that must carry all four patterns WITH their reasons, in one grid. */
export const GRID_SECTION_ID = 's05-grid';
/** The two verbs whose columns the split section compares. */
export const SPLIT_COLUMNS = SPLIT_VERBS;
