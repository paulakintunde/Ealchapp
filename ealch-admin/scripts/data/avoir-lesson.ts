// a1.07.l1 "Le verbe avoir" — the mission journey.
//
// ── TWO THINGS THE BRIEF SAYS ARE TRUE AND ARE NOT ─────────────────────────
//
// A1-07-AVOIR-PROMPT.md was written against a repository that has moved, and
// both of its structural premises are stale. Reported rather than worked around,
// because working around a stale premise is how a lesson ends up arguing with
// its own neighbours.
//
//   1. "If you ship before a1.06, you are the first conjugation lesson in the
//      app." a1.06.l1 SHIPPED on 2026-08-05: 26 sections, 7 acts, v4, in both
//      Postgres and seed.json, tag `A1 · LEÇON 10`. So this lesson is the
//      SECOND conjugation lesson, not the first, and the brief's instruction
//      that "whatever shape you choose for the six forms, a1.06 will inherit
//      it" runs backwards. The shape already exists and this lesson adopts it
//      unchanged. See "The shape of the six" below.
//
//   2. "The suite is currently RED ... tests 1249, pass 1248, fail 1
//      (a1-05-pronoms.test.ts, drill reachability)." Measured on this checkout
//      before a line of this lesson was written: 1308 tests, 1308 passing, 0
//      failing. a1.05's two unreachable drills were fixed when a1.06 landed.
//      The baseline is green, so this lesson has nothing to hide behind.
//
// A third premise is stale in the useful direction and is dealt with in the
// header of avoir-corpus.ts: the brief's corpus counts were measured against the
// infinitive headword and missed the two themes holding these expressions as
// SENTENCES, so the lesson authors five rows fewer than planned and none of the
// eleven had to be written from nothing.
//
// ── The teaching problem, which is one rule wearing three costumes ─────────
//
// The unit names three things and they are not three things. Eleven of the
// fourteen expressions and the age rule are the SAME rule, and it is a rule
// about English rather than about French:
//
//     J'ai faim.        I am hungry.
//     J'ai vingt ans.   I am twenty.
//     J'ai froid.       I am cold.
//     J'ai peur.        I am afraid.
//
// The learner does not need fourteen facts. They need one swap plus the list of
// nouns it applies to, and the error it prevents is the loudest one an English
// speaker makes at A1. « Je suis vingt ans » and « Je suis faim » are not mildly
// wrong; they are not sentences.
//
// So the weight goes there. The paradigm gets ONE act (three missions), the
// swap gets FIVE, and the four places English points the wrong way get five
// more. A lesson that spent three missions drilling ai/as/a/avons/avez/ont would
// have misread which half of the canDo is difficult, and would be a1.06 rebuilt
// worse besides.
//
// ── The shape of the six, which is inherited and not invented ─────────────
//
// a1.06 settled this one unit upstream and this lesson copies it exactly, in
// the same order, so a learner who did être last week recognises the furniture:
//
//     tapTable, six rows           the paradigm with the sharing named in cells
//     cardDeck at xl, six cards    one bare form per screen
//     groupDrill, two groups       singular three, plural three, a check each
//     a `table` in a reference sheet at layer deep, nine rows
//
// Six rows and not nine, because a1.05 already taught that il/elle/on share a
// form and ils/elles share another, and shipped a nine-row sheet doing it. a1.06
// declined to re-derive it. So does this.
//
// The one thing a1.07 adds to that shape is the JOIN. Four of avoir's six forms
// start on a vowel, so the pronoun binds to them out loud: nous avons, vous
// avez, ils ont and elles ont are each one phonetic word with a z in the middle.
// être has exactly one such form (vous êtes) and a1.06 gave it a whole mission.
// Here it is four of six, which is why s07-ear exists and why `ils ont` against
// `ils sont` is the hardest listening item in either lesson.
//
// ── The handover from a1.05, which is the opening move ────────────────────
//
// a1.05's reframe is "Nine pronouns. Six verb forms." Its own test carries an
// assertion literally named "no verb conjugation is taught, so this does not
// become a1.06", so it deliberately set up a paradigm and left it empty. a1.06
// filled one set of six. This fills the second, and s03-slots opens on exactly
// that, by name, so a learner who did a1.05 recognises the grid before any of it
// is explained.
//
// ── The theme binding, cleared rather than created ────────────────────────
//
// a1.07 ships declaring `themes: ["identite"]`. There is no `identite` theme:
// 75 exist in Postgres and it is not one of them, 0 items carry it in either
// copy, and the Den renders a unit's theme chips as entry points into a themed
// deck, so the chip has always led nowhere.
//
// The brief offers three options and says whichever is taken sets the precedent
// for a1.06. That is backwards: a1.06 SHIPPED first and already took one. It
// cleared the binding, said so in its own test ("the unit no longer declares a
// theme that does not exist"), and explicitly left a1.07 alone on the grounds
// that changing another unit's shipped body is that unit's build to make.
//
// So this clears it too, and the argument is now stronger than it was for a1.06:
// a1.03, a1.04, a1.05, a1.06 and a1.11 are all grammar units with no theme at
// all, and this lesson draws from thirteen themes rather than one. Creating
// `identite` would mean authoring items from nothing, adding the theme to
// SEED_CUT.themes, and shipping a product-visible chip in the flashcard hub and
// the Den that duplicates `presentation-personnelle`, which already holds 179
// a1 rows doing exactly that job.
//
// The batch and the merge both print the change as its own line and both refuse
// to write a themes binding onto this unit.
//
// ── Item.prompt: the paradigm is carried in the SECTION ───────────────────
//
// The brief asks for the four missing avoir conjugation cards (`tu as`, `il a`,
// `vous avez`, `ils ont`) to be authored with `prompt` as the card front, since
// only `je` and `nous` exist. They are NOT authored, and the reason is the
// brief's own rule: after authoring any field, grep for a component that reads
// it.
//
// Grepped on 2026-08-05. The only `.prompt` in the component tree is
// ScenePlayer reading a scene CHOICE beat's prompt, which is an unrelated field
// on an unrelated type. app/flashcards.tsx is the screen that serves a
// conjugation deck (flashhub → flashtypes → `?ctype=conjugation`, a real and
// reachable route) and it renders `fr` and `en` and nothing else. So the three
// avoir conjugation cards that exist today show `j'ai` / `I have` with the
// « avoir · présent · je » front that makes them conjugation cards silently
// dropped, and four more would make an existing wrong-face problem four times
// larger on a screen no test covers.
//
// Wiring `prompt` into the flashcard front for non-vocab card types is a real
// fix, it would repair all 96 conjugation cards in the app rather than these
// four, and it changes what shipped cards display. That is a product decision
// and it wants Paul rather than a drive-by inside a content build. It is in the
// report.
//
// What this lesson does instead is a1.06's answer and a1.03's before it: the
// paradigm is carried by the SECTION (s04-table's cells, s05-forms' cards,
// s06-sort's groups), each card joined to its corpus row by `itemId` for audio
// and scoring. No `prompt` is authored on any item this lesson displays, and
// a1-07-avoir.test.ts asserts it.
//
// ── The dictée inverts a1.11 and a1.29, deliberately ──────────────────────
//
// Both of those lessons chose WORD mode by measuring `letterCount`, because
// their exercise was placing an article the bank offers as a decoy. This lesson
// chooses LETTER mode and the reason is the same measurement pointing the other
// way. dicteeMode() switches to word tiles above 16 letters, and the word-mode
// decoy pool is ['et','le','la','les','de','un','une','très','bien','merci',
// 'pour','avec','mais','oui'] — which contains NO verb forms. So a word-mode
// dictée on « Je n'ai pas faim. » would hand the learner « n'ai » as a tile and
// ask them to place it, which tests word order.
//
// The thing worth testing here is the spelling: `ai` against `as` against `a`
// are three forms that sound like two, and the difference is only ever visible
// on the page. So every dictée target is chosen SHORT enough to stay in letter
// mode, and the set covers all three of the singular forms plus the negation and
// a possession. Asserted through the real `dicteeMode` in the batch, the merge
// and the test.
//
// ── Layout decisions, each of which is a bug someone else already shipped ──
//
//   `commonErrors` carries `swipe: true, size: 'lg'`. Without `swipe`
//   MissionSection takes a fallback that returned undefined and drew a BLANK
//   mission (sons.08 m22, a1.01 m5).
//
//   `reading` carries `questionsInModal: true` WITH questions. That is the only
//   path that reaches PassagePage, and so the only path that draws the glossary
//   underlines. a1.01 shipped five entries down the other path.
//
//   ONE `quiz` section. lessonPager.logic.ts appends exactly one quiz page,
//   resolved with `sections.find(s => s.type === 'quiz')`.
//
//   No `autoplay` anywhere: declared in schema.ts, implemented in no component.
//   `audioFirst`, which ScenePlayer genuinely implements, is used on the break.
//
//   The reading passage is ONE BLOCK with no line breaks. PassagePage splits on
//   `text.split(/(?<=[.!?»])\s+/)` and renders the pieces inline, so an authored
//   `\n` is consumed as whitespace and silently discarded.
//
//   `tapTable` cells are three words or fewer and no table is more than three
//   columns. Its cells are `<TX style={{flex: 1}}>` inside a row, which is the
//   flex-on-Text shape that truncates elsewhere in this codebase. The long copy
//   lives in the detail modal, which is a card and can hold prose.
//
//   `tapTable` is NOT in ownsLayout(), so s04-table, s09-age, s13-chaud and
//   s15-negation all render inside a SCROLLING page. That is why none of them
//   runs past six rows and why the full versions live in sheets reached by
//   `sheetId`.
//
//   `size` is not decoration. ownsLayout() ignores it; density.logic.ts reads
//   `xl` as a 12-word cap on EVERY string in the section. s05-forms and
//   s10-eleven are the only xl sections here and every card in both is a bare
//   French unit with a two-word gloss, which is what makes xl correct there and
//   fatal anywhere else in this lesson.
//
//   The scene break body is 36 words. A break card runs past the fold on a
//   Pixel 6 and no amount of trimming closes the gap (the real fix is adding
//   `scene` to ownsLayout(), which touches ten lessons and wants its own
//   decision), so the range 24 to 40 is the band every shipped break sits in.
//
//   A `groupDrill` control page carries `items: []` explicitly. Omitting it is
//   what puts a lesson on the ealch-admin tsc error list, where elision-lesson
//   and masterclass-lesson sit today.
//
// ── The prerequisite omission, reported rather than fixed ─────────────────
//
// `prereqUnitIds` is ["a1.05"], and half this unit's canDo is about age. Age is
// a number, and a1.02 (Numbers 1 to 20), a1.27 (21 to 100) and a1.28 (Large
// Numbers) are all built and none of them is declared. A learner can legitimately
// arrive here unable to say sixty.
//
// The unit is NOT silently changed, for the same reason a1.11 and a1.29 did not
// change theirs. Numbers are treated as KNOWN and said to be known (s09-age says
// so on its first card), every age sentence in the lesson is reused from the
// `nombres` theme those three lessons were built on, and nothing here teaches
// counting. The omission is in the report.
//
// a1.06 is also not declared as a prerequisite and this lesson leans on it in
// three places (the nine-to-six collapse, the liaison in vous êtes, and the
// ils sont / ils ont pair). Same treatment: re-established in one card each
// rather than assumed, and reported.

import type {
  ErrorTrigger, Lesson, LessonAct, LessonDrill, LessonSection, ReferenceSheet, SceneBeat,
} from '../../../ealch-v2/src/content/schema.ts';
import { AVOIR_TERMS, REFRAME } from './avoir-terms.ts';
import { unitRef } from './_unit-ref.ts';
import {
  AVOIR_IDS, FOURTEEN, IMPORTED_IDS, REUSED_IDS, THE_ELEVEN, THE_SIX, THE_THREE,
  familyIds, frOf, sub,
} from './avoir-corpus.ts';

export { REFRAME };

/* ─── The corpus this lesson sequences ─────────────────────────────────────
 *
 * 41 rows are reused from inside the seed cut, 34 are IMPORTED from seven themes
 * that are not in it, and 15 are authored (see avoir-corpus.ts for why each gap
 * could not be filled from what exists). Grouped by the job the ids do, so a
 * section names a GROUP and the tranche slices read from the same groups rather
 * than restating a word list.                                                */

/** The six paradigm sentences, one per form, in paradigm order. */
const PARADIGM = familyIds('paradigm');

/** The age rule, entirely reused. Nothing here was authored: the numbers track
 *  wrote all of it, which is the point s09-age opens on. */
const AGE = [
  'fr.a1.presentation-personnelle.006', 'fr.a1.presentation-personnelle.007',
  'fr.a1.presentation-personnelle.009', 'fr.a1.presentation-personnelle.010',
  'fr.a1.presentation-personnelle.161',
  'fr.a1.nombres.024', 'fr.a1.nombres.025', 'fr.a1.nombres.026', 'fr.a1.nombres.027',
  'fr.a1.nombres.043', 'fr.a1.nombres.051', 'fr.a1.nombres.056', 'fr.a1.nombres.121',
  'fr.a1.nombres.175', 'fr.a1.nombres.237',
  'fr.a1.famille.010', 'fr.a1.ecole.263',
];

/** The eleven that swap English `be` for French `have`: their headwords and the
 *  sentences that show each one in use. */
const ELEVEN = [
  ...THE_ELEVEN.map((e) => e.itemId),
  ...THE_ELEVEN.map((e) => e.sentenceId),
  'fr.a1.cafe.144', 'fr.a1.corps.107', 'fr.a1.corps.206', 'fr.a1.cuisine.185',
  'fr.a1.emotions.042', 'fr.a1.emotions.087', 'fr.a1.emotions.091',
  'fr.a1.emotions.096', 'fr.a1.emotions.100', 'fr.a1.emotions.105',
  'fr.a1.mots-essentiels.043', 'fr.a1.questions.338',
];

/** The three that land on need, want and hurt, and carry a little word. */
const COMPLEMENT = [
  ...THE_THREE.map((e) => e.itemId),
  ...THE_THREE.map((e) => e.sentenceId),
  'fr.a1.expressions-frequentes.059', 'fr.a1.expressions-frequentes.061',
  'fr.a1.corps.007', 'fr.a1.corps.214', 'fr.a1.marche.173', 'fr.a1.objets.167',
];

/** Plain possession, which is the half of the canDo the reframe does not cover,
 *  and the frame the paradigm is built in. All six forms exist here already. */
const POSSESSION = [
  ...familyIds('possession'),
  'fr.a1.dictee.174', 'fr.a1.dictee.178', 'fr.a1.dictee.179', 'fr.a1.dictee.180',
  'fr.a1.objets.110', 'fr.a1.objets.114', 'fr.a1.objets.166',
  'fr.a1.ecole.217', 'fr.a1.ecole.222', 'fr.a1.ecole.287',
  'fr.a1.cafe.028', 'fr.a1.cafe.083', 'fr.a1.corps.204', 'fr.a1.corps.225',
];

/** Say no, and the two different things that happen. */
const NEGATION = familyIds('negation');

/** The past-tense ambush: rows that open on a form of avoir and are not about
 *  having anything. Measured against Postgres on 2026-08-05: 119 of the 522 a1
 *  rows opening on an avoir form are this, which is 23%. */
const PAST = [
  'fr.a1.objets.021', 'fr.a1.deplacements.261', 'fr.a1.deplacements.283',
  'fr.a1.nombres.062',
];

/** The weather half of the chaud trap, which is the one place this lesson shows
 *  a verb that is not avoir. */
const WEATHER = ['fr.a1.meteo.029'];

const ITEM_IDS = [
  ...new Set([...PARADIGM, ...AGE, ...ELEVEN, ...COMPLEMENT, ...POSSESSION, ...NEGATION, ...PAST, ...WEATHER]),
];

/** Spoken practice draws ONLY from items carrying `voiceflash`, because that is
 *  the drill the mic-scored deck runs. An item without it renders as a card the
 *  learner cannot be scored on, which looks like a broken mission rather than a
 *  missing tag. Verified against POSTGRES, not the seed, on 2026-08-05: the two
 *  drift, and an id that exists only in the seed renders as an empty card.
 *  a1-07-avoir.test.ts re-asserts it against the seed on every run. */
const SPEAK_IDS = [
  ...PARADIGM,
  'fr.a1.famille.227', 'fr.a1.famille.228', 'fr.a1.famille.229', 'fr.a1.famille.230',
  'fr.a1.famille.231', 'fr.a1.famille.232', 'fr.a1.famille.233', 'fr.a1.famille.234',
  'fr.a1.emotions.012', 'fr.a1.emotions.013', 'fr.a1.emotions.016',
  'fr.a1.emotions.017', 'fr.a1.emotions.018', 'fr.a1.emotions.019',
  'fr.a1.emotions.020', 'fr.a1.emotions.037', 'fr.a1.emotions.076',
  'fr.a1.emotions.109', 'fr.a1.mots-essentiels.005', 'fr.a1.mots-essentiels.007',
  'fr.a1.presentation-personnelle.161', 'fr.a1.cuisine.185', 'fr.a1.cafe.174',
  'fr.a1.cafe.083', 'fr.a1.meteo.029',
];

/** The dictée set, and every one was chosen by MEASUREMENT rather than taste.
 *
 *  LETTER mode, which inverts a1.11's and a1.29's decision. The reasoning is in
 *  the header: word mode's decoy bank holds no verb forms, so it cannot ask the
 *  question this lesson exists to ask, and `ai` against `as` against `a` is a
 *  spelling contrast that is only ever visible on the page.
 *
 *  Every target below clears dicteeMode() as 'letters'. The ones that did not
 *  are the paradigm sentences themselves (18 letters, five words) and « Je n'ai
 *  pas de voiture. » at 17, and in word mode all of them would have been
 *  ordering puzzles. They are taught on cards instead.
 *
 *  The set covers ai, as and a; the age rule; a possession; and the negation
 *  that does not collapse. */
const DICTATION_IDS = [
  'fr.a1.presentation-personnelle.006', // J'ai vingt ans.        ai, and the age rule
  'fr.a1.famille.227',                  // J'ai faim.             ai, and one of the eleven
  'fr.a1.famille.230',                  // Tu as froid ?          as, the form with a silent s
  'fr.a1.emotions.042',                 // Il a peur du noir.     a, the form with no letter of its own
  'fr.a1.famille.229',                  // J'ai sommeil.          ai again, on the rarest of the fourteen
  'fr.a1.famille.232',                  // J'ai une voiture.      possession, against the expression above
  'fr.a1.famille.234',                  // Je n'ai pas faim.      the negation that does not collapse
];

/* ─── Mission 1 · Scene ────────────────────────────────────────────────────
 *
 * The A1 register of stakes is being misread as a person rather than being
 * misunderstood, and this lesson has one situation where the two are the same
 * thing: an age is the first sentence anybody says about themselves, and the
 * English instinct produces something that is not a sentence at all.
 *
 * « Je suis vingt ans » says "I am twenty years" and stops. It is not a near
 * miss; there is nothing for a listener to repair, so they do not repair it.
 * They ask the question again, more slowly, and address the next one to
 * somebody else. That is the cost, and it is the cost that lasts: the learner
 * is not corrected, they are worked around.
 *
 * The choice beat is that sentence against its correct form, because both are
 * things a learner would say and exactly one of them is French. The corpus row
 * `fr.a1.presentation-personnelle.006` is the right-hand option, so the beat and
 * the drill and the dictée are all the same sentence.
 *
 * Beats are extracted to a named const, each with its own `size` and `audio`,
 * the way sons.06, a1.01, a1.05 and a1.06 settled it. The section sets NO size:
 * ownsLayout() ignores it and density.logic.ts would read xl as a 12-word cap on
 * prose.                                                                      */

const SCENE_BEATS: SceneBeat[] = [
  {
    kind: 'narration',
    size: 'md',
    text: 'A flat in Nantes on a Saturday evening. It is your friend Léa\'s birthday and you have met nobody here before.',
    audio: { mode: 'tts', voice: 'coach' },
  },
  {
    kind: 'narration',
    size: 'md',
    text: 'Her grandmother has taken the chair beside you and turned it to face you properly. She is going to ask you something.',
    audio: { mode: 'tts', voice: 'coach' },
  },
  {
    kind: 'bubble',
    from: 'them',
    reveal: 'tap',
    size: 'md',
    speaker: 'Léa\'s grandmother',
    fr: frOf('fr.a1.presentation-personnelle.010'),
    en: 'How old are you?',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a1-07-scene' },
  },
  {
    kind: 'choice',
    size: 'lg',
    prompt: 'You are twenty. What goes back?',
    options: [
      {
        fr: 'Je suis vingt ans.',
        en: 'the one English hands you',
        outcome: 'breaks',
        audio: { mode: 'tts', lang: 'fr-FR' },
      },
      {
        fr: frOf('fr.a1.presentation-personnelle.006'),
        en: 'the one with a different verb in it',
        outcome: 'works',
        audio: { mode: 'tts', lang: 'fr-FR' },
      },
    ],
    followUp: {
      works: 'Yes, and the verb is the whole of it. Watch what the other one does to the room.',
      breaks: 'Every word in that is a real word. Watch what happens next anyway.',
    },
  },
  {
    kind: 'bubble',
    from: 'you',
    reveal: 'auto',
    size: 'md',
    fr: 'Je suis vingt ans.',
    en: '(I am twenty years)',
    audio: { mode: 'tts', lang: 'fr-FR' },
  },
  {
    kind: 'bubble',
    from: 'them',
    reveal: 'tap',
    size: 'md',
    speaker: 'Léa\'s grandmother',
    fr: 'Pardon ? Vous avez quel âge ?',
    en: 'Sorry? How old are you?',
    stage: 'She says it again, slower, and glances at Léa while she waits.',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a1-07-scene' },
  },
  {
    kind: 'break',
    size: 'lg',
    heading: 'She did not hear a mistake',
    // 36 words. The ten shipped scene breaks run 24 to 40 here.
    body: 'She heard "I am twenty years" and waited for the rest of it. There was nothing to guess at, so she asked again instead of correcting you. That is why this error survives: it never gets fixed for you.',
    wrong: {
      fr: 'Je suis vingt ans.',
      ipa: '/ʒə sɥi vɛ̃ tɑ̃/',
      en: 'I am twenty years, and then it stops',
    },
    right: {
      fr: frOf('fr.a1.presentation-personnelle.006'),
      ipa: '/ʒe vɛ̃ tɑ̃/',
      respell: sub("j'ai vingt ans"),
      en: 'I have twenty years, which is how French says it',
    },
    coach: 'One verb, and it is the same swap on eleven other sentences you will need this week.',
    // Audio-first: the ear answers before the eye can. `autoplay` is NOT set. It
    // is declared in schema.ts and implemented in no component, so setting it
    // would look like it did something.
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], audioFirst: true, recordingId: 'rec-a1-07-swap' },
  },
  {
    kind: 'bubble',
    from: 'you',
    reveal: 'tap',
    size: 'md',
    speaker: 'Second try',
    fr: frOf('fr.a1.presentation-personnelle.006'),
    en: 'I am twenty.',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65] },
  },
  {
    kind: 'bubble',
    from: 'them',
    reveal: 'auto',
    size: 'md',
    speaker: 'Léa\'s grandmother',
    fr: 'Ah, vingt ans. Vous avez faim ?',
    en: 'Ah, twenty. Are you hungry?',
    stage: 'She has already turned to reach for a plate.',
    audio: { mode: 'tts', lang: 'fr-FR' },
  },
  {
    kind: 'resolve',
    size: 'md',
    text: 'Her next question uses the same verb again, and you have not been taught it yet.',
  },
];

const SECTIONS: LessonSection[] = [
  /* ── Act 1: the second set of six ──────────────────────────────────────── */

  {
    type: 'scene',
    id: 's01-scene',
    title: 'The Question, Asked Twice',
    frSub: 'La question posée deux fois',
    render: 'screens',
    layer: 'core',
    terms: ['haveNotBe', 'ageRule'],
    say: {
      text: 'One question, twice, and nothing you said was mispronounced. Watch which word was missing.',
      voice: 'coach',
      timing: 'onFirstVisitOnly',
    },
    setting: {
      place: 'A flat above a bakery, at a birthday',
      city: 'Nantes',
      time: 'Saturday, just after eight',
      ambience: 'room-tone-lobby',
    },
    beats: SCENE_BEATS,
    // Referenced, never retyped, so this appearance cannot drift out of
    // agreement with the seven others the density validator counts.
    closing: {
      size: 'md',
      text: `${REFRAME} She used the same verb again before you had put your coat down.`,
    },
  },

  {
    type: 'goals',
    id: 's02-goals',
    title: 'What You Will Be Able To Do',
    frSub: 'Ce que vous saurez faire',
    layer: 'core',
    say: `${REFRAME} By the end you will have the six forms and the fourteen sentences that use them.`,
    goals: [
      { t: 'Say your age', s: 'Ask it and answer it, with numbers you already had before this lesson started.' },
      { t: 'Say how you are', s: 'Hungry, cold, afraid, right, lucky, and eleven more, all on one verb.' },
      { t: 'Say what you have', s: 'All six forms, including the four that bind to the pronoun in front of them.' },
      { t: 'Read past the trap', s: 'Spot the sentences where this verb has stopped meaning have at all.' },
    ],
  },

  {
    type: 'cardDeck',
    id: 's03-slots',
    title: 'The Second Set Of Six',
    frSub: 'Six formes, encore',
    hint: 'Swipe through the four cards.',
    render: 'deck',
    layer: 'core',
    size: 'lg',
    terms: ['sixForms'],
    say: 'You have met this arithmetic before and you have already filled it in once. This is the second time.',
    cards: [
      {
        label: 'Two lessons ago',
        head: 'Nine pronouns. Six verb forms.',
        body: 'You counted the nine and were shown the six slots they sit in, and nothing filled them. il, elle and on share one; ils and elles share another. That has not changed and it is not re-taught here.',
      },
      {
        // No forms of être are printed here, deliberately. The card names the
        // verb and what it cost; printing its paradigm on a French display line
        // is closer to conjugating it than to naming it, and conjugating être is
        // a1.06's job. a1.06's own test caught the same shape in its first
        // reference sheet, which had listed all six avoir forms as a run.
        label: 'Last lesson',
        head: 'One set filled',
        body: 'être took the first of those two sets. You learned its six outright because nothing could be derived from anything, and that is the deal for exactly two verbs in the language.',
      },
      {
        label: 'This one',
        head: 'The second, and the last',
        fr: "j'ai · tu as · il a",
        sub: `${sub("j'ai")} · ${sub('tu as')} · ${sub('il a')}`,
        body: 'avoir is the other one. Six forms, no stem, and after this every verb you meet has a pattern behind it. Ten minutes of memorising and the closed set is closed.',
      },
      {
        label: 'What is actually hard',
        head: 'Not the six',
        body: `The forms are the easy half and they are on one screen. ${REFRAME} That is the half that will still be catching you in a year, so it gets five missions and the forms get three.`,
      },
    ],
  },

  {
    type: 'tapTable',
    id: 's04-table',
    title: 'The Six, In One Table',
    frSub: 'Les six formes',
    layer: 'core',
    terms: ['sixForms'],
    sheetId: 'sheet.a1.07.paradigm',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a1-07-paradigm' },
    say: 'Six rows for nine pronouns, exactly as last time. Tap any row to hear the whole sentence.',
    // Three columns, every cell three words or fewer. The teaching lives in the
    // detail modal, which is a card and can hold prose.
    cols: ['Pronoun', 'avoir', 'Sounds like'],
    rows: [
      {
        cells: ["je / j'", "j'ai", sub("j'ai")],
        say: frOf('fr.a1.famille.221'),
        detail: {
          title: "j'ai",
          body: "Je never survives in front of this one. Ai starts on a vowel, so je loses its e and the two are written as one word. You have made that drop since your first lesson on le and la, and here it is compulsory.",
          say: frOf('fr.a1.famille.221'),
        },
      },
      {
        cells: ['tu', 'as', sub('tu as')],
        say: frOf('fr.a1.famille.222'),
        detail: {
          title: 'tu as',
          body: 'Two letters and the s is silent, so out loud this is the same sound as the il form. Only the pronoun in front separates them, which is why the pronoun is never dropped.',
          say: frOf('fr.a1.famille.230'),
        },
      },
      {
        cells: ['il · elle · on', 'a', sub('il a')],
        say: frOf('fr.a1.famille.223'),
        detail: {
          title: 'The row that does the work',
          body: `One letter, and it takes no accent: à with an accent is a different word meaning to or at. Three pronouns share this form, and on means we and still takes it, which is the mismatch ${unitRef('a1.05')} spent a mission on.`,
          say: frOf('fr.a1.emotions.042'),
        },
      },
      {
        cells: ['nous', 'avons', sub('nous avons')],
        say: frOf('fr.a1.famille.224'),
        detail: {
          title: 'nous avons',
          body: 'The first of the four that bind. Avons starts on a vowel, so the silent s of nous wakes up as a z and the two words are said as one. Never noo, then a-VOHⁿ.',
          say: frOf('fr.a1.emotions.105'),
        },
      },
      {
        cells: ['vous', 'avez', sub('vous avez')],
        say: frOf('fr.a1.famille.225'),
        detail: {
          title: 'vous avez',
          body: 'The same join you learned on vous êtes, on a different verb. If you can already say that one you can say this one, and the two are the most common openings to a question you will hear in a shop.',
          say: frOf('fr.a1.cafe.083'),
        },
      },
      {
        cells: ['ils · elles', 'ont', sub('ils ont')],
        say: frOf('fr.a1.famille.226'),
        detail: {
          title: 'ils ont',
          body: 'A nasal vowel, a silent t, and a z carried over from the silent s of ils. Hold this one carefully: ils sont is a different verb and one consonant is the whole difference between them.',
          say: frOf('fr.a1.dictee.179'),
        },
      },
    ],
  },

  /* ── Act 2: the six, and the join ──────────────────────────────────────── */

  {
    // The first of two xl sections, and one of the two places xl is correct
    // here: every card is a bare verb form of one or two words.
    // density.logic.ts caps EVERY string in an xl section at 12 words, which is
    // why the teaching lives in the table above and this is a hero deck.
    type: 'cardDeck',
    id: 's05-forms',
    title: 'One At A Time',
    frSub: 'Une forme par écran',
    hint: 'Swipe. Say each one out loud before you move on.',
    render: 'deck',
    layer: 'core',
    size: 'xl',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a1-07-paradigm' },
    say: 'Six screens, one form each. Say it out loud before you swipe, every time.',
    cards: [
      { label: '1 of 6', fr: "j'ai", sub: sub("j'ai"), body: 'I have. Je and ai are one word.' },
      { label: '2 of 6', fr: 'tu as', sub: sub('tu as'), body: 'You have. The s is silent.' },
      { label: '3 of 6', fr: 'il a', sub: sub('il a'), body: 'He has. One letter, no accent.' },
      { label: '4 of 6', fr: 'nous avons', sub: sub('nous avons'), body: 'We have. Joined by a z.' },
      { label: '5 of 6', fr: 'vous avez', sub: sub('vous avez'), body: 'You have. Joined by a z.' },
      { label: '6 of 6', fr: 'ils ont', sub: sub('ils ont'), body: 'They have. Joined by a z.' },
    ],
  },

  {
    type: 'groupDrill',
    id: 's06-sort',
    // "Which Form Goes With Which" was 26 characters, inside the 27-character
    // rule, and it STILL truncated to "Which Form Goes With Wh…" on a Pixel 6.
    // The row's type chip competes for the same line, and the real constraint is
    // pixel width rather than a character count: s02-goals is longer (27 plus a
    // nine-character OBJECTIFS chip) and fits, because its glyphs are narrower.
    // W, F and G are the widest capitals in the face and this title had four of
    // them. Shortened, and it also now echoes drill-six-forms, which is the
    // remediation this mission's check fires.
    title: 'Pronoun, Then Form',
    frSub: 'Le bon accord',
    layer: 'core',
    terms: ['sixForms'],
    say: 'Read the pronoun, say the form, then check. Nothing derives from anything, which is the point.',
    groups: [
      {
        label: 'The three that stand alone',
        items: [
          { fr: "j'ai", itemId: 'fr.a1.famille.221', respell: sub("j'ai"), en: 'I have' },
          { fr: 'tu as', itemId: 'fr.a1.famille.222', respell: sub('tu as'), en: 'you have' },
          { fr: 'il a', itemId: 'fr.a1.famille.223', respell: sub('il a'), en: 'he has' },
        ],
        check: {
          q: 'Which of these is the form that follows on?',
          opts: ['ai', 'avons', 'a', 'ont'],
          correct: 2,
          why: `on means we and takes the form il takes, so it is a. That collapse was ${unitRef('a1.05')}\'s and it holds for every verb in the language.`,
        },
      },
      {
        label: 'The three that join up',
        items: [
          { fr: 'nous avons', itemId: 'fr.a1.famille.224', respell: sub('nous avons'), en: 'we have' },
          { fr: 'vous avez', itemId: 'fr.a1.famille.225', respell: sub('vous avez'), en: 'you have' },
          { fr: 'ils ont', itemId: 'fr.a1.famille.226', respell: sub('ils ont'), en: 'they have' },
        ],
        check: {
          q: 'You hear a z between the pronoun and the verb. How many of the six do that?',
          opts: ['One', 'Two', 'Four', 'All six'],
          correct: 2,
          why: 'Four: nous avons, vous avez, ils ont and elles ont. Every form starting on a vowel pulls the silent consonant in front of it back to life.',
        },
      },
    ],
  },

  {
    type: 'listening',
    id: 's07-ear',
    title: 'Two Verbs, One Consonant',
    frSub: "À l'oreille",
    layer: 'core',
    questionsInModal: true,
    terms: ['sixForms'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a1-07-pairs' },
    say: 'Two pairs, and each of them is one consonant. Slow the audio down before you answer.',
    lines: [
      { fr: frOf('fr.a1.dictee.179'), en: 'They have white sheets of paper.' },
      { fr: 'Ils sont dans la salle.', en: 'They are in the room.' },
      { fr: frOf('fr.a1.famille.223'), en: 'He has a present for Léa.' },
      { fr: frOf('fr.a1.famille.226'), en: 'They have a present for Léa.' },
    ],
    questions: [
      {
        q: 'What separates ils ont from ils sont, out loud?',
        opts: ['The vowel at the end', 'One consonant, z against s', 'The length of the word', 'Nothing at all'],
        correct: 1,
        why: 'Both end on the same nasal vowel with a silent t. The s of ils comes back as a z in front of ont, and sont brings its own s. That is the whole of it.',
      },
      {
        q: 'Lines three and four differ by more than the verb. What else moved?',
        opts: ['The present', 'Léa', 'The pronoun, from one person to several', 'The word order'],
        correct: 2,
        why: 'il became ils, and that is the only clue you get in writing, because the s of ils is silent. In speech the z is what tells you.',
      },
      {
        q: 'Which pair is harder to separate at speed?',
        opts: ['il a and ils ont', 'ils ont and ils sont', 'both, and for different reasons', 'neither, they are obvious'],
        correct: 2,
        why: 'The first pair differs by a liaison that either exists or does not; the second by which consonant that liaison produces. Slowed down both separate cleanly.',
      },
    ],
  },

  /* ── Act 3: French has it, English is it ───────────────────────────────── */

  {
    type: 'cardDeck',
    id: 's08-swap',
    title: 'The Swap',
    frSub: 'Avoir, pas être',
    hint: 'Swipe through the four cards.',
    render: 'deck',
    layer: 'core',
    size: 'lg',
    terms: ['haveNotBe'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a1-07-swap' },
    say: 'Read this one properly. It is the reason twelve separate things in this lesson are one thing.',
    cards: [
      {
        label: 'The line',
        head: 'Six words for twelve rules',
        fr: frOf('fr.a1.famille.227'),
        sub: `${sub("j'ai faim")} · I am hungry`,
        body: `${REFRAME} Your English puts am in front of hungry. French puts have in front of hunger, and the second word is a thing rather than a description.`,
      },
      {
        label: 'It is about English',
        head: 'The trouble is on your side',
        fr: frOf('fr.a1.presentation-personnelle.006'),
        sub: `${sub("j'ai vingt ans")} · I am twenty`,
        body: 'Nothing about the French here is irregular. English is the odd one: it uses be for states that most languages treat as things you carry. Translate word by word and you get something that is not a sentence.',
      },
      {
        label: 'Test it on yourself',
        head: 'Say the English literally',
        fr: 'Il a peur.',
        sub: 'He has fear',
        body: 'Before you say any of these, put the English into the shape French wants: I have hunger, I have twenty years, he has fear. If that reads as odd English, it is right French.',
      },
      {
        label: 'How far it goes',
        head: 'Eleven, plus your age',
        body: 'Eleven of the fourteen expressions in this lesson work this way and so does every age anybody will ever tell you. Three of the fourteen do not, and they get their own screen so you know which three.',
      },
    ],
  },

  {
    type: 'tapTable',
    id: 's09-age',
    title: 'How Old Are You',
    frSub: "L'âge",
    layer: 'core',
    terms: ['ageRule', 'haveNotBe'],
    sheetId: 'sheet.a1.07.expressions',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65] },
    say: `${REFRAME} You already own every number in this table. What is new is the frame around it, and there is one.`,
    cols: ['French', 'English', 'What swapped'],
    rows: [
      {
        cells: [frOf('fr.a1.presentation-personnelle.006'), 'I am twenty', 'am became have'],
        say: frOf('fr.a1.presentation-personnelle.006'),
        detail: {
          title: 'Twenty years, had',
          body: 'The number came from the counting lessons and nothing about it changes here. What changes is that French counts years as something you hold, so the verb is avoir and the word ans is never dropped. Twenty on its own is not an age.',
          say: frOf('fr.a1.presentation-personnelle.161'),
        },
      },
      {
        cells: [frOf('fr.a1.nombres.026'), 'He is sixty', 'is became has'],
        say: frOf('fr.a1.nombres.026'),
        detail: {
          title: 'The same on somebody else',
          body: 'This sentence was written for the numbers lesson, where sixty was the thing being taught. You already read it once and never asked why the verb was there. It is the same rule and it holds for every person.',
          say: frOf('fr.a1.nombres.027'),
        },
      },
      {
        cells: [frOf('fr.a1.presentation-personnelle.009'), 'How old are you', 'are became have'],
        say: frOf('fr.a1.presentation-personnelle.009'),
        detail: {
          title: 'The question, both ways',
          body: `Quel âge as-tu to somebody you would call tu, and quel âge avez-vous to anybody else. The register split is ${unitRef('a1.01')}\'s and nothing here changes it. Answer either one the same way.`,
          say: frOf('fr.a1.presentation-personnelle.010'),
        },
      },
      {
        cells: [frOf('fr.a1.ecole.263'), 'She is six and a half', 'nothing new'],
        say: frOf('fr.a1.ecole.263'),
        detail: {
          title: 'The half year, free',
          body: 'Et demi after ans, and it is the sentence every parent of a small child says. Nothing about the rule moves for it. This one was already in the corpus and no course teaches it.',
          say: frOf('fr.a1.famille.010'),
        },
      },
      {
        cells: [frOf('fr.a1.nombres.175'), 'The dog is thirteen', 'not a person'],
        say: frOf('fr.a1.nombres.175'),
        detail: {
          title: 'Anything with an age',
          body: 'A dog, a building, a bottle of wine. If it has an age, it has years, and the verb does not change because the thing is not a person. This is where a learner stops expecting avoir and reaches for être again.',
          say: frOf('fr.a1.nombres.121'),
        },
      },
    ],
  },

  {
    // The second xl section, and correct for the same reason as s05-forms:
    // every card is a two or three word French unit with a three word gloss.
    type: 'groupDrill',
    id: 's10-eleven',
    title: 'The Eleven',
    frSub: 'Onze expressions',
    layer: 'core',
    size: 'xl',
    terms: ['haveNotBe'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a1-07-eleven' },
    // ONE group, words only, and no check. v3 shipped this as TWO groups each
    // carrying six words AND a four-option check, which is the one shape a
    // groupDrill at xl must never take. Found on a device walk (Paul,
    // 2026-08-06): "the card is large with a layer under, can be missed by
    // learners, and the card is not contained."
    //
    // Both halves of that report are the documented failure, and GroupDrillView
    // says so in its own comments. Inside OneGroup at xl, a group carrying both
    // renders a filling SwipeDeck AND the check block stacked under it: "two
    // competing floors ... the four-option check take[s] what it wanted and
    // squeeze[s] the deck to nothing". And two groups defeat the `single`
    // branch, so the mission additionally draws a progress-dots row, a "next
    // group" button, and a ScrollView with `flexGrow: 1` wrapped round the deck.
    // That ScrollView is the "not contained": the hero card no longer sizes to a
    // fixed viewport, it grows inside a scroller that fights its own horizontal
    // drag. The check underneath is the "layer under", and it sits below the
    // fold, which is how a learner misses it.
    //
    // Audited across the whole seed before changing anything: 50 groupDrill
    // sections in 14 lessons, and this was the ONLY xl drill anywhere with words
    // and a check in one group. Every other one is words-only or check-only, and
    // the BOTH shape appears only at no-size, which is the plain stacked branch
    // it was designed for (sons.02, sons.03, a1.06 s06-sort and this lesson's
    // own s06-sort all sit there safely).
    //
    // The fix is the house pattern rather than an invention: a words mission
    // followed by its own control page, exactly as sons.05, sons.06, sons.10,
    // a1.03, a1.11 and a1.29 all do. Eleven cards in one deck is well inside
    // precedent too (a1.11 ships twelve, sons.05 thirteen).
    say: 'Eleven screens. Every one of them is the same swap, so there is one thing to remember and eleven places to use it.',
    groups: [
      {
        label: 'One expression per screen',
        items: THE_ELEVEN.map((e) => ({
          fr: e.fr,
          itemId: e.itemId,
          respell: sub(e.fr),
          en: e.en,
        })),
      },
    ],
  },

  {
    type: 'groupDrill',
    // `s10b-` rather than renumbering sixteen sections behind it. Ids are stable
    // handles, not an ordering, and sons.06 already ships s05b-, s05c- and s05d-
    // for exactly this reason: a mission inserted next to the one it belongs to
    // should not move every id after it, because a quiz `ref`, an act list, an
    // errorTrigger `detectOn` and a rest point all name them.
    id: 's10b-check',
    title: 'Cold, Or A Cold Room?',
    frSub: 'Contrôle',
    layer: 'core',
    terms: ['haveNotBe'],
    // A control page: one group, one question, no words. `items: []` is set
    // EXPLICITLY, and no `size` is set, which matches this lesson's other
    // control page (s12-check) and a1.11's and a1.29's. GroupDrillView reads
    // this shape as `controlOnly` and holds the pager until the learner answers,
    // which is the whole reason a check is worth a page of its own: a check you
    // can swipe past was never a check.
    //
    // The question is the stronger of the two v3 stacked under the deck. It
    // tests the swap and the weather split in one move, which is the pair the
    // next mission but two is built on. The other one ("Tu es raison") is not
    // lost: it is round 2's second errorSpot, where the learner produces the fix
    // rather than picking it.
    say: 'One question, and the difference between the two wrong answers is the whole of the next mission.',
    groups: [
      {
        label: 'One question, then on',
        items: [],
        check: {
          q: 'You are cold. What do you say?',
          opts: ['Je suis froid.', "J'ai froid.", 'Il fait froid.', 'Je froid.'],
          correct: 1,
          why: 'Cold is something you have here. Je suis froid describes your personality rather than your temperature, and il fait froid is about the room.',
        },
      },
    ],
  },

  {
    type: 'cardDeck',
    id: 's11-three',
    title: 'The Three That Differ',
    frSub: 'Les trois exceptions',
    hint: 'Swipe through the four cards.',
    render: 'deck',
    layer: 'core',
    size: 'lg',
    terms: ['withComplement', 'haveNotBe'],
    say: 'Three of the fourteen do not follow the line above. Knowing which three is worth more than knowing the eleven.',
    cards: [
      {
        label: 'Not a swap',
        head: 'These land somewhere else',
        fr: 'besoin de · envie de · mal à',
        sub: 'need · want · hurt',
        body: 'The eleven all turn English am into French have. These three turn into need, want and hurt instead, so there is no be to swap out and nothing to translate literally.',
      },
      {
        label: 'de, twice',
        head: 'Two of them take de',
        fr: frOf('fr.a1.expressions-frequentes.057'),
        sub: `${sub('avoir besoin de')} · I need water`,
        body: 'Besoin and envie both carry de, and it shortens to d apostrophe in front of a vowel sound. Leave the de out and the sentence stops: j ai besoin eau is not French.',
      },
      {
        label: 'à, once',
        head: 'The third takes à',
        fr: frOf('fr.a1.corps.008'),
        sub: `${sub('avoir mal à')} · her back hurts`,
        body: 'Mal takes à, and the à then merges with whatever the body part wants: au dos, à la tête, aux dents. This is the commonest of the fourteen in real speech by a distance.',
      },
      {
        label: 'Why it is worth naming',
        head: 'Three, not fourteen',
        fr: frOf('fr.a1.expressions-frequentes.060'),
        sub: 'I feel like sleeping',
        body: 'A learner told there are fourteen expressions memorises fourteen. A learner told there are eleven of one kind and three of another has a shape, and a shape survives a week off.',
      },
    ],
  },

  {
    type: 'groupDrill',
    id: 's12-check',
    title: 'Which Kind Is It?',
    frSub: 'Contrôle',
    layer: 'core',
    terms: ['withComplement'],
    // A control page: one group, a question, no words. `items: []` is set
    // EXPLICITLY. Omitting it is what puts elision-lesson.ts and
    // masterclass-lesson.ts on the ealch-admin tsc error list today.
    say: 'One question. The little word after the expression is what the answer turns on.',
    groups: [
      {
        label: 'One question, then on',
        items: [],
        check: {
          q: 'You want to say you need a pen. Which is right?',
          opts: ["J'ai besoin un stylo.", "J'ai besoin d'un stylo.", 'Je suis besoin un stylo.', "J'ai besoin à un stylo."],
          correct: 1,
          why: 'Besoin always carries de, and de shortens in front of the vowel of un. The verb is avoir, so the third option is wrong twice over.',
        },
      },
    ],
  },

  /* ── Act 4: the four places English points the wrong way ───────────────── */

  {
    type: 'tapTable',
    id: 's13-chaud',
    title: 'Hot Rooms And Hot People',
    frSub: "J'ai chaud ou il fait chaud",
    layer: 'core',
    terms: ['haveNotBe'],
    sheetId: 'sheet.a1.07.expressions',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65] },
    say: `${REFRAME} And when it is the weather rather than you, French uses neither of them.`,
    cols: ['About you', 'About the room', 'Which one'],
    rows: [
      {
        cells: [frOf('fr.a1.famille.228'), frOf('fr.a1.meteo.029'), 'two different verbs'],
        say: `${frOf('fr.a1.famille.228')} ${frOf('fr.a1.meteo.029')}`,
        detail: {
          title: "J'ai chaud · il fait chaud",
          body: 'The first says you are too warm. The second says the weather is. They are not interchangeable and swapping them produces two different mistakes: il a chaud about the weather, and je suis chaud about yourself, which means something else entirely.',
          say: frOf('fr.a1.emotions.091'),
        },
      },
      {
        cells: [frOf('fr.a1.famille.230'), 'Il fait froid ?', 'same split, cold'],
        say: `${frOf('fr.a1.famille.230')} Il fait froid ?`,
        detail: {
          title: 'The same pair, on cold',
          body: 'Tu as froid asks about the person in front of you. Il fait froid asks about outside. Get the pair right on chaud and froid comes with it, because the split is identical and there is nothing extra to learn.',
          say: frOf('fr.a1.emotions.096'),
        },
      },
      {
        cells: ['Je suis chaud.', 'not the weather', 'not about warmth'],
        say: frOf('fr.a1.famille.228'),
        detail: {
          title: 'The one to avoid',
          body: 'Je suis chaud is real French and it is not about temperature at all: in everyday speech it means you are keen or up for something. Said in a warm room it will be understood as an answer to a question nobody asked.',
          say: frOf('fr.a1.famille.228'),
        },
      },
    ],
  },

  {
    type: 'cardDeck',
    id: 's14-past',
    title: 'When Have Stops Meaning',
    frSub: 'Le piège du passé',
    hint: 'Swipe through the four cards.',
    render: 'deck',
    layer: 'core',
    size: 'lg',
    terms: ['pastAmbush'],
    // The mission that protects everything above it. Measured against Postgres
    // on 2026-08-05: 119 of the 522 a1 rows opening on a form of avoir are a
    // past tense, which is 23%. A learner who meets j'ai only as "I have" reads
    // most of a page wrong.
    say: 'Nearly a quarter of the sentences you will meet with this verb are not about having anything. Here is how to see it coming.',
    cards: [
      {
        label: 'Almost a quarter',
        head: 'Not a possession',
        fr: frOf('fr.a1.objets.021'),
        sub: 'I lost my keys this morning',
        body: 'There is no having in that sentence. J ai is there, and what follows it is another verb, and the pair of them together is a past tense you have not met yet.',
      },
      {
        label: 'The test',
        head: 'Look at the next word',
        fr: frOf('fr.a1.deplacements.261'),
        sub: 'She took the bus this morning',
        body: 'One noun after the form means having. Another verb after the form means the past. That is the whole check and it takes a second.',
      },
      {
        label: 'The one that fools people',
        head: 'A noun turns up anyway',
        fr: frOf('fr.a1.nombres.062'),
        sub: 'We reserved a table for six',
        body: 'There is a table in it, so it looks like a possession. Read the word straight after avons: it is a verb, so this is the past and nobody currently owns a table.',
      },
      {
        label: 'What to do now',
        head: 'Recognise, do not use',
        fr: frOf('fr.a1.deplacements.283'),
        sub: 'They took the first bus',
        body: 'You are not learning this tense yet. What you need today is to stop reading it as possession, so that a page of French stops looking like a list of things people own.',
      },
    ],
  },

  {
    type: 'tapTable',
    id: 's15-negation',
    title: 'Saying No, Two Ways',
    frSub: 'Pas de, ou pas',
    layer: 'core',
    terms: ['noArticleUnderNo'],
    sheetId: 'sheet.a1.07.expressions',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65] },
    say: 'The same negative on two sentences, and it leaves a different thing behind each time.',
    cols: ['Yes', 'No', 'What moved'],
    rows: [
      {
        cells: [frOf('fr.a1.famille.232'), frOf('fr.a1.famille.233'), 'une became de'],
        say: `${frOf('fr.a1.famille.232')} ${frOf('fr.a1.famille.233')}`,
        detail: {
          title: 'A thing you could count',
          body: 'Une collapses to de under the negative, which is the rule you met on un, une and des one lesson ago. Not pas une voiture and not pas la voiture. Nothing new is being asked of you here.',
          say: frOf('fr.a1.famille.233'),
        },
      },
      {
        cells: [frOf('fr.a1.famille.227'), frOf('fr.a1.famille.234'), 'nothing moved'],
        say: `${frOf('fr.a1.famille.227')} ${frOf('fr.a1.famille.234')}`,
        detail: {
          title: 'An expression, with no article',
          body: 'Faim never had a word in front of it, so there was nothing for the negative to collapse. It is pas faim and never pas de faim. This is the half nobody teaches, and it catches the learner who took the first half seriously.',
          say: frOf('fr.a1.famille.234'),
        },
      },
      {
        cells: ['pas de + a noun', 'pas + an expression', 'which one you had'],
        say: `${frOf('fr.a1.famille.233')} ${frOf('fr.a1.famille.234')}`,
        detail: {
          title: 'What the answer tells you',
          body: 'This works backwards too. If the de turned up, you were talking about a countable thing. If it did not, you were using one of the fourteen. That is the ground the negation unit builds on, and you have it before you get there.',
          say: frOf('fr.a1.famille.232'),
        },
      },
    ],
  },

  {
    type: 'commonErrors',
    id: 's16-traps',
    // `swipe` and `size` are not decoration. MissionSection renders
    // commonErrors as its own swipe deck ONLY when `swipe` is set; without it
    // the section falls through to a path that drew a BLANK screen on sons.08
    // m22 and a1.01 m5.
    swipe: true,
    size: 'lg',
    title: 'Four Traps',
    frSub: 'Quatre pièges',
    layer: 'core',
    terms: ['haveNotBe', 'pastAmbush', 'noArticleUnderNo'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a1-07-traps' },
    say: `${REFRAME} Four sentences an English speaker produces in their first month, one per screen.`,
    errors: [
      {
        wrong: 'Saying « Je suis vingt ans » for "I am twenty".',
        right: 'Saying « J\'ai vingt ans » for "I am twenty".',
        why: 'This one costs the most, because it lands in the first sentence you say about yourself and it is not a near miss. Je suis vingt ans says "I am twenty years" and stops, so a listener has nothing to repair and asks again instead.',
      },
      {
        wrong: 'Saying « Je suis faim » for "I am hungry".',
        right: 'Saying « J\'ai faim » for "I am hungry".',
        why: 'The same swap on a different noun, and the same shape of failure. Faim is hunger, a thing, so French puts have in front of it. This holds for eleven of the fourteen expressions in this lesson and there is nothing to memorise beyond that.',
      },
      {
        wrong: 'Saying « Je suis chaud » when the room is warm.',
        right: 'Saying « J\'ai chaud » when the room is warm.',
        why: 'Wrong twice. Warmth is had here, and je suis chaud is a real sentence meaning you are keen or up for something, so it is understood as an answer to a question nobody asked. Il fait chaud is the version for the weather.',
      },
      {
        wrong: 'Saying « Je n\'ai pas de faim » for "I am not hungry".',
        right: 'Saying « Je n\'ai pas faim » for "I am not hungry".',
        why: 'A rule applied one noun too far. De turns up under a negative only where an article had to be removed, and faim never had one. Je n ai pas de voiture is right for that same reason: it had a une in it.',
      },
    ],
  },

  {
    type: 'reading',
    id: 's17-reading',
    title: 'Sunday At Her Grandmother\'s',
    frSub: 'Dimanche chez la grand-mère',
    layer: 'core',
    terms: ['haveNotBe', 'ageRule', 'withComplement'],
    // REQUIRED for the glossary to exist at all. MissionSection routes a
    // reading section to ReadingMission (and so to PassagePage, which draws the
    // underlines and the tap-for-translation sheet) only when this flag is set
    // WITH questions. Without it the section takes the fallback path and
    // MissionRich contains no reference to `glossary`.
    questionsInModal: true,
    say: 'Six sentences in this passage use the verb and not one of them means have. Tap any underlined word.',
    // Paul's A1 rule, set on a1.01's passage: anything not inside « » is in
    // English. The learner's effort belongs on the exchange, not on decoding
    // stage directions.
    //
    // ONE BLOCK, NO LINE BREAKS. See the header.
    text:
      'It is Sunday and Claire is at her grandmother\'s table for the first time. ' +
      'Her grandmother pours the wine and looks at her over the top of her glasses. ' +
      '« Vous avez quel âge ? » ' +
      'Claire has practised this one on the train, twice, out of the window. ' +
      "« J'ai vingt ans. » " +
      'Her grandmother nods and passes the bread without saying anything else about it. ' +
      '« Et vous avez faim ? » ' +
      'Claire has not eaten since seven in the morning. ' +
      "« Oui, j'ai très faim. » " +
      'Her cousin leans across the table and says the sentence Claire has been dreading all week. ' +
      "« Moi, j'ai mal à la tête. Je n'ai pas faim. » " +
      'Nobody offers him anything, and nobody asks him to explain himself. ' +
      'Her grandmother turns back and points at the window with the knife she is holding. ' +
      '« Tu as chaud ? Il fait chaud aujourd\'hui. » ' +
      'Claire looks at those two questions and works out that only one of them was about her. ' +
      "« Non, ça va. Mais j'ai soif. »",
    // Every entry is matched by gloss.logic.ts, which folds punctuation and case
    // on BOTH sides and allows a phrase of up to four words. Longest match wins,
    // which is why « tu as chaud » and « il fait chaud » are both entered: they
    // sit in the same sentence and only the pair of them shows the split.
    glossary: [
      { word: 'vous avez quel âge', en: 'how old are you', note: 'The polite form of the question. Quel âge as-tu to somebody you would call tu.' },
      { word: "j'ai vingt ans", en: 'I am twenty', note: 'Twenty years, had. Je suis vingt ans is not a sentence, and it is the error this lesson opens on.' },
      { word: 'vous avez faim', en: 'are you hungry', note: 'The same verb again, on a different noun. Hunger is a thing you have.' },
      { word: "j'ai très faim", en: 'I am very hungry', note: 'Très goes in front of the noun rather than in front of a description, because faim is a noun.' },
      // Four words, not five. MAX_GLOSS_WORDS is 4 in gloss.logic.ts, so
      // « j'ai mal à la tête » can never match and would have drawn no underline
      // at all. a1-07-avoir.test.ts caught it through the real segmentSentence.
      { word: 'mal à la tête', en: 'a headache', note: 'One of the three that take a little word after them. Mal takes à, and à plus la is à la.' },
      { word: "je n'ai pas faim", en: 'I am not hungry', note: 'No de anywhere, because faim never had an article for the negative to remove.' },
      { word: 'tu as chaud', en: 'are you hot', note: 'About the person. This is the question she is really asking.' },
      { word: 'il fait chaud', en: 'it is hot', note: 'About the weather, and a different verb entirely. The two sit in the same breath here on purpose.' },
      { word: "j'ai soif", en: 'I am thirsty', note: 'Thirst, had. The eleventh of the eleven, and the last one in the passage.' },
    ],
    questions: [
      { q: 'Claire\'s grandmother asks two questions in one breath near the end. What is the difference between them?', a: 'The first is about Claire and uses avoir. The second is about the weather and uses a different verb, faire, so only the first one needs an answer about how she feels.' },
      { q: 'The cousin says two things and both use the same verb. Why is there no « de » in the second one?', a: 'Because faim never had an article in front of it, so the negative had nothing to collapse. If he had said he did not have a car, the une would have become de.' },
      { q: 'Count the sentences in the passage where this verb means have. What did you find?', a: 'None of them. Every use of avoir here is an age, a state or a pain, which is the whole point: the verb is called "to have" and most of what a beginner does with it is something else.' },
    ],
  },

  /* ── Act 5: say it, spell it, use it ───────────────────────────────────── */

  {
    type: 'vocabThemes',
    id: 's18-words',
    title: 'The Fourteen, Banked',
    frSub: 'Le vocabulaire',
    layer: 'core',
    terms: ['haveNotBe', 'withComplement'],
    sheetId: 'sheet.a1.07.expressions',
    say: 'Two decks and the split between them is the lesson. Eleven behave one way, three behave another.',
    themes: [
      {
        title: 'the eleven',
        cards: THE_ELEVEN.map((e) => ({ fr: e.fr, sub: sub(e.fr), en: e.en })),
      },
      {
        title: 'the three with a word after them',
        cards: THE_THREE.map((e) => ({ fr: e.fr, sub: sub(e.fr), en: e.en })),
      },
      {
        title: 'the six forms',
        cards: [
          { fr: "j'ai", sub: sub("j'ai"), en: 'I have' },
          { fr: 'tu as', sub: sub('tu as'), en: 'you have' },
          { fr: 'il a', sub: sub('il a'), en: 'he has' },
          { fr: 'nous avons', sub: sub('nous avons'), en: 'we have' },
          { fr: 'vous avez', sub: sub('vous avez'), en: 'you have' },
          { fr: 'ils ont', sub: sub('ils ont'), en: 'they have' },
        ],
      },
    ],
  },

  {
    type: 'flashcards',
    id: 's19-flash',
    title: 'Flip and Recall',
    frSub: 'Retournez la carte',
    render: 'deck',
    layer: 'core',
    say: 'English on the front. Say the French out loud, verb and all, before you flip.',
    cards: [
      { front: 'I am hungry', back: "J'ai faim.", say: "J'ai faim." },
      { front: 'I am thirsty', back: "J'ai soif.", say: "J'ai soif." },
      { front: 'I am sleepy', back: "J'ai sommeil.", say: "J'ai sommeil." },
      { front: 'Are you cold?', back: 'Tu as froid ?', say: 'Tu as froid ?' },
      { front: 'I am hot (the person, not the room)', back: "J'ai chaud.", say: "J'ai chaud." },
      { front: 'You are right', back: 'Tu as raison.', say: 'Tu as raison.' },
      { front: 'I am wrong', back: "J'ai tort, excuse-moi.", say: "J'ai tort, excuse-moi." },
      { front: 'I am afraid of the dark', back: "J'ai peur du noir.", say: "J'ai peur du noir." },
      { front: 'You are lucky', back: 'Vous avez de la chance.', say: 'Vous avez de la chance.' },
      { front: 'She looks tired', back: "Elle a l'air fatiguée.", say: "Elle a l'air fatiguée." },
      { front: 'I am twenty', back: "J'ai vingt ans.", say: "J'ai vingt ans." },
      { front: 'How old are you? (politely)', back: 'Quel âge avez-vous ?', say: 'Quel âge avez-vous ?' },
      { front: 'I need water', back: "J'ai besoin d'eau.", say: "J'ai besoin d'eau." },
      { front: 'I feel like sleeping', back: "J'ai envie de dormir.", say: "J'ai envie de dormir." },
      { front: 'My head hurts', back: "J'ai mal à la tête.", say: "J'ai mal à la tête." },
      { front: 'I do not have a car', back: "Je n'ai pas de voiture.", say: "Je n'ai pas de voiture." },
      { front: 'I am not hungry', back: "Je n'ai pas faim.", say: "Je n'ai pas faim." },
      { front: 'They have a present for Léa', back: 'Ils ont un cadeau pour Léa.', say: 'Ils ont un cadeau pour Léa.' },
    ],
  },

  {
    type: 'dictation',
    id: 's20-dictation',
    title: 'Spell What You Hear',
    frSub: 'La dictée',
    layer: 'core',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], maxPlays: 4 },
    // LETTER tiles, not words, which inverts a1.11's and a1.29's decision. See
    // the note on DICTATION_IDS: the word-mode decoy bank holds no verb forms,
    // so it cannot ask the question this lesson exists to ask, and ai against as
    // against a is a spelling contrast only ever visible on the page.
    say: 'Seven short lines. Two of the three forms you will hear sound identical, so the spelling is the exercise.',
    itemIds: DICTATION_IDS,
  },

  {
    type: 'practice',
    id: 's21-speak',
    title: 'Say It Out Loud',
    frSub: 'À voix haute',
    layer: 'core',
    audio: { mode: 'mic', lang: 'fr-FR' },
    // The only practice mission in the lesson, deliberately. `practice.skill` is
    // authored and read by no component: PracticeVFView takes itemIds and
    // nothing else, so a read mission and a speak mission render identically.
    // sons.06 ships two practice sections doing the same job and it reads as a
    // repeat.
    say: 'Twenty-five lines out loud. The verb at the front is the part the mic is listening for.',
    skill: 'speak',
    itemIds: SPEAK_IDS,
  },

  {
    type: 'scenario',
    id: 's22-scenario',
    title: 'At The Chemist',
    frSub: 'À la pharmacie',
    layer: 'core',
    terms: ['withComplement', 'haveNotBe'],
    say: 'One exchange, and you hold up your half of it. Four of the fourteen turn up without being asked for.',
    setting: 'A pharmacy on a corner in Nantes, late on a Monday morning, with one person ahead of you.',
    // Every turn carries `userEn` and at least two `alts`, which scenario.logic
    // now requires of the whole seed. Both exist for the same reason: a reveal
    // that shows a French line with no translation asks the learner to read the
    // one sentence comprehension actually matters on, and a single accepted
    // answer turns a conversation into a cloze test. The alternatives are real
    // replies a French speaker would give here, not near-misses, and `stt`
    // scores against all of them so a learner who says one is marked right.
    //
    // Apostrophes are straight throughout, matching the rest of this lesson.
    // The suite fails a conversation that mixes ' and ’ in one bubble stack.
    turns: [
      {
        ai: 'Bonjour. Qu\'est-ce qui ne va pas ?',
        en: 'Hello. What seems to be the matter?',
        user: 'Bonjour. J\'ai mal à la tête depuis ce matin.',
        userEn: 'Hello. My head has been hurting since this morning.',
        alts: [
          { fr: 'Bonjour. J\'ai mal à la tête.', en: 'Hello. My head hurts.' },
          { fr: 'J\'ai très mal à la tête, depuis ce matin.', en: 'My head hurts a lot, since this morning.' },
        ],
      },
      {
        ai: 'Vous avez de la fièvre ?',
        en: 'Do you have a fever?',
        user: 'Je ne sais pas. J\'ai chaud, oui.',
        userEn: 'I do not know. I am hot, yes.',
        alts: [
          { fr: 'Je ne sais pas, mais j\'ai chaud.', en: 'I do not know, but I am hot.' },
          { fr: 'Peut-être. J\'ai chaud depuis hier.', en: 'Maybe. I have been hot since yesterday.' },
        ],
      },
      {
        ai: 'Vous avez soif aussi ?',
        en: 'Are you thirsty as well?',
        user: 'Oui, très soif. Et j\'ai sommeil.',
        userEn: 'Yes, very thirsty. And I am sleepy.',
        alts: [
          { fr: 'Oui, j\'ai soif et j\'ai sommeil.', en: 'Yes, I am thirsty and I am sleepy.' },
          { fr: 'Très soif, oui.', en: 'Very thirsty, yes.' },
        ],
      },
      {
        ai: 'Quel âge avez-vous ?',
        en: 'How old are you?',
        user: 'J\'ai vingt ans.',
        userEn: 'I am twenty.',
        alts: [
          { fr: 'Vingt ans.', en: 'Twenty.' },
          { fr: 'J\'ai vingt ans, madame.', en: 'I am twenty, madam.' },
        ],
      },
      {
        ai: 'Prenez ça deux fois par jour.',
        en: 'Take this twice a day.',
        user: 'Merci. J\'ai besoin d\'eau, alors.',
        userEn: 'Thank you. I need water, then.',
        alts: [
          { fr: 'Merci beaucoup. J\'ai besoin d\'eau ?', en: 'Thank you very much. Do I need water?' },
          { fr: 'D\'accord, merci. Avec de l\'eau, alors.', en: 'All right, thank you. With water, then.' },
        ],
      },
    ],
  },

  /* ── Act 6: prove it ───────────────────────────────────────────────────── */

  {
    type: 'reviewDeck',
    id: 's23-review',
    title: 'The Whole Thing, One Deck',
    frSub: 'Révision',
    render: 'deck',
    layer: 'core',
    terms: ['haveNotBe', 'sixForms', 'pastAmbush'],
    say: 'Rate each card as again, hard or easy. The ones you mark again come back.',
    cards: [
      { front: 'Somebody asks how old you are. You are twenty.', back: `J'ai vingt ans. ${REFRAME}`, say: "J'ai vingt ans." },
      { front: 'You have not eaten since seven this morning.', back: "J'ai faim. Hunger is a thing you have, not a way you are.", say: "J'ai faim." },
      { front: 'The room is too warm for you personally.', back: "J'ai chaud. Il fait chaud would be about the room instead.", say: "J'ai chaud." },
      { front: 'Your friend has just proved they were correct.', back: 'Tu as raison. Never tu es raison.', say: 'Tu as raison.' },
      { front: 'You want to say you need a pen.', back: "J'ai besoin d'un stylo. Besoin always carries de.", say: "J'ai besoin d'un stylo." },
      { front: 'Your head hurts.', back: "J'ai mal à la tête. Mal takes à, and à plus la is à la.", say: "J'ai mal à la tête." },
      { front: 'The nous form, with its join.', back: 'nous avons, said as one word with a z in the middle.', say: 'nous avons' },
      { front: 'You hear a z, then a nasal vowel. Which verb?', back: 'ils ont. With an s instead of the z it would be ils sont.', say: 'ils ont' },
      { front: '« J\'ai une voiture. » Now say you do not.', back: "Je n'ai pas de voiture. Une collapsed to de.", say: "Je n'ai pas de voiture." },
      { front: '« J\'ai faim. » Now say you do not.', back: "Je n'ai pas faim. Nothing collapsed, because nothing was there.", say: "Je n'ai pas faim." },
      { front: '« J\'ai perdu mes clés. » Is that a possession?', back: 'No. A second verb follows the form, so it is a past tense and nothing is owned.' },
      { front: 'How do you ask a stranger their age?', back: 'Quel âge avez-vous ? With somebody you call tu it is quel âge as-tu.', say: 'Quel âge avez-vous ?' },
    ],
  },

  {
    type: 'progressCheck',
    id: 's24-progress',
    title: 'Where You Stand',
    frSub: 'Votre progression',
    // The prose carries no counts. Every figure is in `stats`, derived from the
    // journey itself, and saying a number twice on one card is two chances to be
    // wrong and one card that reads as padded.
    say: 'One screen before the exam, so you know what you are walking into.',
    body: 'You have watched a question get asked twice, filled in the second set of six verb forms, and found out that eleven expressions and every age you will ever give are the same rule wearing different nouns. You have separated the three that behave differently, the two ways a negative can land, and the sentences where this verb has stopped meaning have. What is left tells you whether it stuck. Each round is tied to one of the mistakes this lesson exists to stop, and failing a round gets you its drill before the next one starts. The drill is the teaching, not the punishment.',
    // Filled immediately after SECTIONS is built, from the journey itself.
    stats: [],
  },

  {
    type: 'quiz',
    id: 's25-quiz',
    title: 'The Exam',
    frSub: "L'examen",
    layer: 'core',
    passMark: 70,
    roundFailThreshold: 60,
    say: 'Seven rounds. Miss too many in a round and you get that round\'s drill before the next one starts.',
    rounds: [
      {
        id: 'r1-the-six',
        label: 'The six forms',
        // The FIRST target is the one whose drill fires: drillForRound walks a
        // round's targets and stops at the first that resolves. Every drill this
        // lesson authors is the first resolving target of exactly one round, and
        // the batch, the merge and the test all assert it.
        targets: ['err-wrong-form', 'err-etre-for-avoir'],
        say: 'The forms, quickly.',
        questions: [
          {
            q: 'You and one colleague have the tickets. Which form?',
            format: 'mcq',
            opts: ['avons', 'avez', 'ont', 'as'],
            correct: 0,
            why: 'nous takes avons. avez is the vous form, and the two sit next to each other in the table and nowhere else in the language.',
            ref: 's04-table',
          },
          {
            q: 'Write the form that goes with on.',
            format: 'typeIn',
            accept: ['a', 'il a', 'on a'],
            answer: 'a',
            why: 'on means we and takes the form il takes, which is a with no accent on it. That collapse was settled two lessons ago and holds for every verb.',
            ref: 's06-sort',
          },
          {
            q: 'Listen. Which one is it?',
            format: 'listenChoose',
            audio: { mode: 'tts', lang: 'fr-FR', clip: 'ils ont' },
            opts: ['ils sont', 'il a', 'ils ont', 'il est'],
            correct: 2,
            why: 'A z between the two words means the s of ils has woken up in front of a vowel, so the verb starts on one. ils sont brings its own s instead.',
            ref: 's07-ear',
          },
          {
            q: 'Fix this. « Vous avons un rendez-vous. »',
            format: 'errorSpot',
            accept: ['Vous avez un rendez-vous.', 'vous avez', 'avez'],
            answer: 'Vous avez un rendez-vous.',
            why: 'avons belongs to nous. The two plural forms are the pair most often swapped, because both start on the same vowel and both bind to their pronoun.',
            ref: 's05-forms',
          },
        ],
      },
      {
        id: 'r2-have-not-be',
        label: 'French has it, English is it',
        targets: ['err-etre-for-avoir', 'err-wrong-form'],
        say: 'The swap the whole lesson is about.',
        questions: [
          {
            q: 'You have not eaten all day. What do you say?',
            format: 'mcq',
            opts: ["J'ai faim.", 'Je suis faim.', 'Je fais faim.', 'Je faim.'],
            correct: 0,
            why: 'Faim is hunger, a thing, so French puts have in front of it. Your English puts am in front of hungry, and that is what makes the wrong one feel right.',
            ref: 's08-swap',
          },
          {
            q: 'Fix this. « Je suis froid. »',
            format: 'errorSpot',
            accept: ["J'ai froid.", "j'ai froid", "j'ai"],
            answer: "J'ai froid.",
            why: 'Cold is something you have here. Je suis froid is a real sentence and it describes what kind of person you are rather than how warm you feel.',
            ref: 's10-eleven',
          },
          {
            q: 'Somebody has just proved their point. Fix this. « Tu es raison. »',
            format: 'errorSpot',
            accept: ['Tu as raison.', 'tu as raison', 'tu as'],
            answer: 'Tu as raison.',
            why: 'Being right is having reason in French. There is no adjective in this sentence at all, which is why the verb cannot be être.',
            ref: 's10-eleven',
          },
          {
            q: 'How many of the fourteen expressions work this way?',
            format: 'mcq',
            opts: ['All fourteen', 'Eleven', 'About half', 'Only the ones about the body'],
            correct: 1,
            why: 'Eleven swap English be for French have. The other three land on need, want and hurt instead, and knowing which three is what stops the rule being applied where it does not go.',
            ref: 's11-three',
          },
          {
            q: 'Say it out loud, to somebody holding a plate.',
            format: 'speak',
            target: "J'ai faim.",
            ipa: '/ʒe fɛ̃/',
            why: 'Two words, and the second is nasal: the m is not pronounced and the vowel carries it. A spoken m at the end is the commonest thing to get wrong here.',
            ref: 's21-speak',
          },
        ],
      },
      {
        id: 'r3-your-age',
        label: 'How old are you',
        targets: ['err-age-shape', 'err-etre-for-avoir'],
        say: 'The half of the canDo that is a number you already had.',
        questions: [
          {
            q: 'Fix this. « Je suis vingt ans. »',
            format: 'errorSpot',
            accept: ["J'ai vingt ans.", "j'ai vingt ans", "j'ai"],
            answer: "J'ai vingt ans.",
            why: 'An age is a number of years you hold, so it takes avoir. The wrong version says "I am twenty years" and stops, which is why nobody corrects it: there is nothing to guess at.',
            ref: 's01-scene',
          },
          {
            q: 'Complete it. « Elle ___ quarante ans. »',
            format: 'typeIn',
            accept: ['a'],
            answer: 'a',
            why: 'The elle row shares its form with il and on, and the form is a with no accent. À with an accent is a different word meaning to or at.',
            ref: 's09-age',
          },
          {
            q: 'Which of these is NOT a way to give an age?',
            format: 'mcq',
            opts: ["J'ai vingt ans.", 'Elle a six ans et demi.', 'Il a treize ans.', 'Je suis vingt.'],
            correct: 3,
            why: 'Two things are wrong with the last one: the verb, and the missing word ans. A bare number is never an age in French, however the sentence starts.',
            ref: 's09-age',
          },
          {
            q: 'You are asking a stranger, politely. Write the question.',
            format: 'typeIn',
            accept: ['Quel âge avez-vous ?', 'Quel âge avez-vous', 'quel age avez vous'],
            answer: 'Quel âge avez-vous ?',
            why: 'The vous form, because you would not call a stranger tu. Quel âge as-tu is the same question for somebody you are on tu terms with, and the answer is identical either way.',
            ref: 's09-age',
          },
        ],
      },
      {
        id: 'r4-the-three',
        label: 'The three that need a word after them',
        targets: ['err-missing-complement', 'err-etre-for-avoir'],
        say: 'Eleven behave one way. These do not.',
        questions: [
          {
            q: 'Fix this. « J\'ai besoin un stylo. »',
            format: 'errorSpot',
            accept: ["J'ai besoin d'un stylo.", "besoin d'un stylo", "d'un", "de"],
            answer: "J'ai besoin d'un stylo.",
            why: 'Besoin always carries de, and de shortens in front of a vowel sound. Without it the sentence has two nouns in a row and no way to connect them.',
            ref: 's11-three',
          },
          {
            q: 'Which little word does mal take?',
            format: 'mcq',
            opts: ['de', 'à', 'pour', 'nothing'],
            correct: 1,
            why: 'Mal takes à, and the à then merges with whatever the body part wants: au dos, à la tête, aux dents. Besoin and envie take de instead, which is the split worth holding.',
            ref: 's11-three',
          },
          {
            q: 'Your back hurts. Write it.',
            format: 'typeIn',
            accept: ["J'ai mal au dos.", "j'ai mal au dos", 'jai mal au dos'],
            answer: "J'ai mal au dos.",
            why: 'À plus le is au, which is the merge you already make everywhere else. Le dos becomes au dos, and à la tête stays as it is because la does not merge.',
            ref: 's11-three',
          },
          {
            q: 'Which one does NOT map onto English "be"?',
            format: 'mcq',
            opts: ['avoir faim', 'avoir raison', 'avoir envie de', 'avoir peur'],
            correct: 2,
            why: 'Envie de lands on want or feel like, not on be. It is one of the three that behave differently, and all three of them carry a little word the other eleven do not.',
            ref: 's18-words',
          },
        ],
      },
      {
        id: 'r5-hot-rooms',
        label: 'Hot rooms and hot people',
        targets: ['err-chaud-weather', 'err-missing-complement'],
        say: 'One noun, two sentences, and neither of them is the other.',
        questions: [
          {
            q: 'The weather is warm today. Which is right?',
            format: 'mcq',
            opts: ["Il fait chaud aujourd'hui.", "Il a chaud aujourd'hui.", "Il est chaud aujourd'hui.", "Il a du chaud aujourd'hui."],
            correct: 0,
            why: 'The weather takes neither of this lesson\'s verbs. Il a chaud would say that some particular man is too warm, which is a sentence about a person.',
            ref: 's13-chaud',
          },
          {
            q: 'You personally are too warm. Fix this. « Je suis chaud. »',
            format: 'errorSpot',
            accept: ["J'ai chaud.", "j'ai chaud", "j'ai"],
            answer: "J'ai chaud.",
            why: 'Je suis chaud is real French and it means you are keen or up for something, so this is not a small error. Warmth in a person is had, exactly like hunger and cold.',
            ref: 's13-chaud',
          },
          {
            q: 'Listen. Which one is it?',
            format: 'listenChoose',
            audio: { mode: 'tts', lang: 'fr-FR', clip: "J'ai chaud." },
            opts: ["J'ai chaud.", 'Il fait chaud.', 'Je suis chaud.', "J'ai froid."],
            correct: 0,
            why: 'Two of these are about a person and one is about the room. The opening is what separates them, and it arrives before the noun does.',
            ref: 's13-chaud',
          },
          {
            q: 'Somebody says « Elle a chaud dans la salle d\'attente. » What is warm?',
            format: 'mcq',
            opts: ['The waiting room', 'She is', 'Both of them', 'Nothing, it is a question'],
            correct: 1,
            why: 'Avoir attaches the warmth to the person. To say the room was warm you would need il fait chaud, and the sentence would stop being about her.',
            ref: 's13-chaud',
          },
        ],
      },
      {
        id: 'r6-saying-no',
        label: 'Saying no, two ways',
        targets: ['err-negation-shape', 'err-etre-for-avoir'],
        say: 'Where the de goes, and where it does not.',
        questions: [
          {
            q: 'Fix this. « Je n\'ai pas de faim. »',
            format: 'errorSpot',
            accept: ["Je n'ai pas faim.", 'pas faim', "n'ai pas faim"],
            answer: "Je n'ai pas faim.",
            why: 'De only turns up under a negative where an article had to be removed, and faim never had one. Je n ai pas de voiture is right for exactly that reason: there was a une in it.',
            ref: 's15-negation',
          },
          {
            q: '« J\'ai une voiture. » Now say you do not.',
            format: 'mcq',
            opts: ["Je n'ai pas une voiture.", "Je n'ai pas de voiture.", "Je n'ai pas la voiture.", "Je n'ai pas voiture."],
            correct: 1,
            why: 'Une collapses to de under a negative, which is the rule you met on un, une and des one unit ago. It has not changed for arriving on a new verb.',
            ref: 's15-negation',
          },
          {
            q: 'You own no pen at all. Complete: « Je n\'ai pas ___ stylo. »',
            format: 'typeIn',
            accept: ['de'],
            answer: 'de',
            why: 'A pen is a thing you could count, so the un in front of it collapses to de. If the sentence had been about hunger there would be nothing here at all.',
            ref: 's15-negation',
          },
          {
            q: 'Fix this. « Je n\'ai pas de soif. »',
            format: 'errorSpot',
            accept: ["Je n'ai pas soif.", 'pas soif', "n'ai pas soif"],
            answer: "Je n'ai pas soif.",
            why: 'Soif is one of the fourteen and it never carried an article, so there is nothing for the negative to reduce. The de belongs only where a un, une or des had to go.',
            ref: 's16-traps',
          },
        ],
      },
      {
        id: 'r7-reading-a-past',
        label: 'When have stops meaning have',
        targets: ['err-past-read-as-have', 'err-negation-shape'],
        say: 'Nearly a quarter of what you will read.',
        questions: [
          {
            q: 'Which sentence is NOT about having something?',
            format: 'mcq',
            opts: ['Ils ont un nouveau téléphone.', 'Tu as un stylo pour moi ?', "J'ai perdu mes clés ce matin.", "J'ai une voiture."],
            correct: 2,
            why: 'Look at the word straight after the form of avoir. One noun means having; another verb means a past tense, and there is nothing being owned in that sentence.',
            ref: 's14-past',
          },
          {
            q: '« Nous avons réservé une table. » There is a table in it. Is anybody holding one?',
            format: 'mcq',
            opts: ['Yes, they own a table', 'Yes, but only tonight', 'The sentence is wrong', 'No, they booked one'],
            correct: 3,
            why: 'This is the one that fools people, because a noun does turn up. Réservé is a verb and it sits directly after avons, so the pair is a past tense and the table belongs to a restaurant.',
            ref: 's14-past',
          },
          {
            q: 'Roughly how much of what you read that opens on this verb is a past tense?',
            format: 'mcq',
            opts: ['Almost none of it', 'About half of it', 'About a quarter of it', 'Nearly all of it'],
            correct: 2,
            why: 'About a quarter, which is enough that a learner who reads every j ai as a possession misreads a page. Recognising it is the whole job for now; using it is a later unit.',
            ref: 's17-reading',
          },
        ],
      },
    ],
  },

  {
    type: 'roundup',
    id: 's26-roundup',
    title: 'What You Can Do Now',
    frSub: 'Ce que vous savez faire',
    say: 'Four things, and then what carries into the next unit.',
    body: 'You can give your age and ask for somebody else\'s, say how you feel in fourteen different ways, and say what you have with all six forms. Two of those are things you will use before the end of the week. The last point below is worth more than the other three: it is what stops a page of French reading as a list of things people own, and it is also the ground the negation unit stands on.',
    points: [
      `${REFRAME} Eleven expressions and every age you will ever give.`,
      'Six forms, and four of them bind to the pronoun in front. ils ont has a z; ils sont has an s.',
      'Besoin and envie carry de. Mal carries à. The other eleven carry nothing.',
      'A noun after the verb is having. Another verb after it is a past tense, and nothing is owned.',
    ],
  },
];

/* ─── The progress card counts the journey rather than restating it ────────
 *
 * Derived here rather than typed by hand. Every figure is a fact about the array
 * directly above, and a display string is validated against nothing, so the
 * first mission added would have left the card confidently wrong with the whole
 * suite still green. It throws rather than degrades: a progress card silently
 * reporting "0 of 0" is worse than a build that stops.                        */
{
  const ix = SECTIONS.findIndex((s) => (s as { id?: string }).id === 's24-progress');
  const card = SECTIONS[ix];
  const quiz = SECTIONS.find((s) => s.type === 'quiz');
  if (!card || card.type !== 'progressCheck' || !quiz || quiz.type !== 'quiz') {
    throw new Error('a1.07.l1: the progress card or the quiz is missing, so the card cannot count what is not there');
  }
  card.stats = [
    { k: 'Forms of avoir', v: String(THE_SIX.length) },
    { k: 'Expressions met', v: String(FOURTEEN.length) },
    // `ix` is the count of sections BEFORE this one, which is exactly how many
    // missions the learner has finished when they reach it.
    { k: 'Missions done', v: `${ix} of ${SECTIONS.length}` },
    { k: 'Exam rounds ahead', v: String(quiz.rounds?.length ?? 0) },
  ];
}

/* ─── Acts ─────────────────────────────────────────────────────────────────
 *
 * Six, and the weighting is the argument of the lesson: three missions on the
 * paradigm and ten on the swap and its consequences. A shape that put five
 * missions on ai/as/a/avons/avez/ont would be a1.06 rebuilt worse, on the half
 * of the canDo that is a closed set of six visible on one screen.
 *
 * `estScreens` is what the mission actually costs rather than a round number,
 * because it is divided by the rest points to check no stretch runs past the
 * checkpoint-spacing limit of 22. A flattering estimate buys a lesson that
 * passes the validator and exhausts the learner.                              */

const ACTS: LessonAct[] = [
  {
    id: 'act1',
    title: 'The second set of six',
    sections: ['s01-scene', 's02-goals', 's03-slots', 's04-table'],
    milestone: 'You have watched one verb decide whether a sentence existed at all.',
    estScreens: 26,
    restPoints: ['s01-scene/after-break'],
  },
  {
    id: 'act2',
    title: 'The forms, and the join',
    sections: ['s05-forms', 's06-sort', 's07-ear'],
    milestone: 'You have all six, and you can hear the z that separates two verbs.',
    estScreens: 18,
  },
  {
    id: 'act3',
    title: 'French has it, English is it',
    sections: ['s08-swap', 's09-age', 's10-eleven', 's10b-check', 's11-three', 's12-check'],
    milestone: 'Twelve separate things turned out to be one thing, and three turned out not to be.',
    // 34 rather than 32: the eleven now run as eleven cards in one deck instead
    // of six and five across two, and the check that used to sit under them is a
    // page of its own.
    estScreens: 34,
    restPoints: ['s10-eleven/halfway'],
  },
  {
    id: 'act4',
    title: 'Where English points the wrong way',
    sections: ['s13-chaud', 's14-past', 's15-negation', 's16-traps', 's17-reading'],
    milestone: 'You can read a page of this verb without looking for possessions that are not there.',
    estScreens: 24,
    restPoints: ['s16-traps/halfway'],
  },
  {
    id: 'act5',
    title: 'Say it, spell it, use it',
    sections: ['s18-words', 's19-flash', 's20-dictation', 's21-speak', 's22-scenario'],
    milestone: 'You have said all fourteen out loud and spelled three forms that sound like two.',
    estScreens: 62,
    restPoints: ['s19-flash/halfway', 's21-speak/halfway', 's21-speak/three-quarters'],
  },
  {
    id: 'act6',
    title: 'Prove it',
    sections: ['s23-review', 's24-progress', 's25-quiz', 's26-roundup'],
    milestone: 'Lesson complete. Negation is next, and it is built on your last two missions.',
    estScreens: 50,
    restPoints: ['s23-review/halfway', 's25-quiz/after-r2', 's25-quiz/after-r4', 's25-quiz/after-r6'],
  },
];

/* ─── Deck tranches ────────────────────────────────────────────────────────
 *
 * One slice per act, index-aligned. An item is released the act it is TAUGHT,
 * not the act it is first mentioned: releasing the whole set at mission one
 * turns the flashcard hub into a wall on the morning the learner is least able
 * to read it. Acts 5 and 6 release nothing new; they apply and test what acts 1
 * to 4 handed over.
 *
 * `once()` is not decoration. The groups above are built for TEACHING and they
 * legitimately overlap: `avoir honte` is both a headword and its own worked
 * sentence, so it appears twice in ELEVEN. The SRS keys on (itemId, modality),
 * so releasing one card from two tranches would take two ratings for one word.
 * The first tranche to name an id keeps it and the rest drop it, which is also
 * the pedagogically right answer: an item belongs to the act that taught it.  */

const released = new Set<string>();
const once = (ids: string[]): string[] => {
  const out: string[] = [];
  for (const id of ids) {
    if (released.has(id)) continue;
    released.add(id);
    out.push(id);
  }
  return out;
};

const DECK_TRANCHE: string[][] = [
  // Act 1: only what the scene and the table actually put in front of the
  // learner, which is the paradigm and the two age sentences the scene used.
  once([...PARADIGM, 'fr.a1.presentation-personnelle.006', 'fr.a1.presentation-personnelle.010']),
  // Act 2: the possession set the forms are drilled on, and the ils ont pair.
  once(POSSESSION),
  // Act 3: the age rule and all fourteen expressions.
  once([...AGE, ...ELEVEN, ...COMPLEMENT]),
  // Act 4: the traps, released once the mission that sorts them has been given.
  once([...NEGATION, ...PAST, ...WEATHER]),
  [],
  [],
];

/** Everything the lesson teaches is released exactly once, and nothing is
 *  released that the lesson does not teach. Checked HERE rather than only in the
 *  test, because a tranche that silently drops a card is a card that never
 *  reaches spaced repetition and nothing on a device would say so. */
{
  const taught = new Set(ITEM_IDS);
  const never = [...taught].filter((id) => !released.has(id));
  if (never.length) {
    throw new Error(`a1.07.l1: item(s) taught but released by no tranche: ${never.join(', ')}`);
  }
  const stray = [...released].filter((id) => !taught.has(id));
  if (stray.length) {
    throw new Error(`a1.07.l1: tranche(s) release item(s) the lesson does not teach: ${stray.join(', ')}`);
  }
}

/* ─── Error triggers and their drills ──────────────────────────────────────
 *
 * Seven triggers, seven drills, seven retests, seven quiz rounds, and that is
 * not a coincidence. `drillForRound` walks a round's `targets` and fires the
 * drill of the FIRST one that has any, then stops. So a drill named only in
 * second place never runs. Each drill below is the first target of exactly one
 * round, which is what makes all seven reachable; the batch, the merge and the
 * test all assert it rather than trusting the ordering to survive an edit.
 *
 * A first draft of this lesson had SIX rounds and seven triggers, which left
 * `drill-past` reachable from no round at all. That is the a1.05 failure exactly
 * and it was caught here rather than on a device: the fix was a seventh round,
 * not a special case in the checker, because a checker with an exception in it
 * is a checker that stops catching the thing it was written for.
 *
 * a1.05 shipped two unreachable drills for exactly this reason and its own test
 * said so. They were repaired when a1.06 landed. This lesson does not reopen it. */

const ERROR_TRIGGERS: ErrorTrigger[] = [
  {
    id: 'err-wrong-form',
    description: 'Reaches for the wrong row of the table: avez for nous, avons for vous, ont for il.',
    detectOn: ['s04-table', 's06-sort', 's07-ear', 's25-quiz/r1-the-six'],
    drill: 'drill-six-forms',
    retest: 'retest-six-forms',
  },
  {
    id: 'err-etre-for-avoir',
    description: 'Uses être where French uses avoir: Je suis faim, Je suis froid, Tu es raison. The error the reframe exists to kill.',
    detectOn: ['s01-scene', 's08-swap', 's10-eleven', 's10b-check', 's16-traps', 's25-quiz/r2-have-not-be'],
    drill: 'drill-swap',
    retest: 'retest-swap',
  },
  {
    id: 'err-age-shape',
    description: 'Gives an age with être, or gives a bare number with no ans behind it.',
    detectOn: ['s01-scene', 's09-age', 's25-quiz/r3-your-age'],
    drill: 'drill-age',
    retest: 'retest-age',
  },
  {
    id: 'err-missing-complement',
    description: 'Drops the de after besoin or envie, or the à after mal, because the other eleven carry nothing.',
    detectOn: ['s11-three', 's12-check', 's25-quiz/r4-the-three'],
    drill: 'drill-complement',
    retest: 'retest-complement',
  },
  {
    id: 'err-chaud-weather',
    description: 'Says il a chaud about the weather, or je suis chaud about themselves. One noun, two wrong verbs.',
    detectOn: ['s13-chaud', 's16-traps', 's25-quiz/r5-hot-rooms'],
    drill: 'drill-chaud',
    retest: 'retest-chaud',
  },
  {
    id: 'err-negation-shape',
    description: 'Writes pas de faim, or drops the de from pas de voiture. The rule applied one noun too far, or not far enough.',
    detectOn: ['s15-negation', 's16-traps', 's25-quiz/r6-saying-no'],
    drill: 'drill-negation',
    retest: 'retest-negation',
  },
  {
    id: 'err-past-read-as-have',
    description: 'Reads every j\'ai as a possession, including the 23% of them that are a past tense.',
    detectOn: ['s14-past', 's17-reading', 's25-quiz/r7-reading-a-past'],
    drill: 'drill-past',
    retest: 'retest-past',
  },
];

const DRILLS: LessonDrill[] = [
  {
    id: 'drill-six-forms',
    title: 'Pronoun in, form out',
    format: 'flashcard',
    coach: 'The pronoun is on the left. Say the form out loud before you turn the card, and join it up where it joins.',
    pairs: [
      ['je', "j'ai"],
      ['tu', 'tu as'],
      ['il, elle, on', 'il a'],
      ['nous', 'nous avons'],
      ['vous', 'vous avez'],
      ['ils, elles', 'ils ont'],
    ],
  },
  {
    id: 'retest-six-forms',
    title: 'One more time',
    format: 'mcq',
    q: 'You and one colleague have an appointment. Which form?',
    opts: ['avez', 'avons', 'ont'],
    correct: 1,
    why: 'nous takes avons. avez belongs to vous, and the two are the pair most often swapped because both bind to their pronoun.',
  },
  {
    id: 'drill-swap',
    title: 'Have it, do not be it',
    format: 'flashcard',
    coach: 'Read the English on the left. Say the French on the right out loud, and notice which verb you reached for first.',
    pairs: [
      ['I am hungry', "J'ai faim."],
      ['I am thirsty', "J'ai soif."],
      ['I am cold', "J'ai froid."],
      ['You are right', 'Tu as raison.'],
      ['I am afraid', "J'ai peur."],
      ['I am twenty', "J'ai vingt ans."],
    ],
  },
  {
    id: 'retest-swap',
    title: 'One more time',
    format: 'mcq',
    q: 'You have not eaten since breakfast. What do you say?',
    opts: ['Je suis faim.', "J'ai faim.", 'Je fais faim.'],
    correct: 1,
    why: 'Faim is hunger, a thing, so it is had rather than been. The English am in front of hungry is what makes the wrong one feel right.',
  },
  {
    id: 'drill-age',
    title: 'A number of years, held',
    format: 'sort',
    buckets: ['A correct age', 'Not a sentence'],
    // Item ids, not display strings: a drill scores against the corpus, so it
    // plays the same audio and reads the same spelling as every other card that
    // teaches these. Passing display strings here validates as broken ids.
    items: [
      'fr.a1.presentation-personnelle.006', 'fr.a1.presentation-personnelle.007',
      'fr.a1.nombres.026', 'fr.a1.nombres.056', 'fr.a1.ecole.263', 'fr.a1.famille.010',
    ],
    coach: 'Every line here is a real age sentence. Say each one out loud and listen for the two things that are never missing: the verb, and the word ans.',
  },
  {
    id: 'retest-age',
    title: 'One more time',
    format: 'mcq',
    q: 'She is forty. Which is right?',
    opts: ['Elle est quarante ans.', 'Elle a quarante ans.', 'Elle a quarante.'],
    correct: 1,
    why: 'The verb is avoir and the word ans is never dropped. The third option gives a number with nothing to count, which is not an age in French.',
  },
  {
    id: 'drill-complement',
    title: 'What comes after it?',
    format: 'sort',
    buckets: ['Takes de', 'Takes à', 'Takes nothing'],
    items: [
      'fr.a1.expressions-frequentes.057', 'fr.a1.expressions-frequentes.060',
      'fr.a1.corps.007', 'fr.a1.corps.008',
      'fr.a1.famille.227', 'fr.a1.famille.229',
    ],
    coach: 'Three buckets and eleven of the fourteen belong in the last one. Put each line where the word after the expression tells you it goes.',
  },
  {
    id: 'retest-complement',
    title: 'One more time',
    format: 'mcq',
    q: 'You need a pen. Which is right?',
    opts: ["J'ai besoin un stylo.", "J'ai besoin d'un stylo.", "J'ai besoin à un stylo."],
    correct: 1,
    why: 'Besoin always carries de, and de shortens in front of a vowel sound. Mal is the one that takes à, and the other eleven take nothing at all.',
  },
  {
    id: 'drill-chaud',
    title: 'The person, or the room?',
    format: 'sort',
    buckets: ['About a person', 'About the weather'],
    items: [
      'fr.a1.famille.228', 'fr.a1.emotions.091', 'fr.a1.famille.230',
      'fr.a1.emotions.096', 'fr.a1.meteo.029',
    ],
    coach: 'Read each one and ask who is warm. If it is somebody, the verb is avoir. If it is the day, the verb is neither of the two you have learned.',
  },
  {
    id: 'retest-chaud',
    title: 'One more time',
    format: 'mcq',
    q: 'The weather is warm today. Which is right?',
    opts: ["Il a chaud aujourd'hui.", "Il fait chaud aujourd'hui.", "Il est chaud aujourd'hui."],
    correct: 1,
    why: 'The weather takes neither of this lesson\'s verbs. Il a chaud would say that a particular man is too warm, which is a sentence about a person.',
  },
  {
    id: 'drill-negation',
    title: 'What does the no leave behind?',
    format: 'flashcard',
    coach: 'Say the negative out loud before you flip. Half of these leave a de behind and half of them leave nothing.',
    pairs: [
      ["J'ai une voiture.", "Je n'ai pas de voiture."],
      ["J'ai un stylo.", "Je n'ai pas de stylo."],
      ["J'ai faim.", "Je n'ai pas faim."],
      ["J'ai soif.", "Je n'ai pas soif."],
      ["J'ai peur.", "Je n'ai pas peur."],
    ],
  },
  {
    id: 'retest-negation',
    title: 'One more time',
    format: 'mcq',
    q: 'Which one is right for "I am not hungry"?',
    opts: ["Je n'ai pas de faim.", "Je n'ai pas faim.", "Je ne suis pas faim."],
    correct: 1,
    why: 'Faim never had an article, so the negative had nothing to collapse to de. The de only appears where a un, une or des had to be removed.',
  },
  {
    id: 'drill-past',
    title: 'Having, or something else?',
    format: 'sort',
    buckets: ['Somebody has something', 'A past tense'],
    items: [
      'fr.a1.famille.232', 'fr.a1.objets.021', 'fr.a1.objets.110',
      'fr.a1.deplacements.261', 'fr.a1.ecole.287', 'fr.a1.nombres.062',
    ],
    coach: 'Read the word straight after the form of avoir. A noun means somebody has something. Another verb means a past tense, and nothing is owned.',
  },
  {
    id: 'retest-past',
    title: 'One more time',
    format: 'mcq',
    q: 'Which one is NOT about having something?',
    opts: ['Ils ont un nouveau téléphone.', "J'ai perdu mes clés ce matin.", "J'ai une voiture."],
    correct: 1,
    why: 'Perdu is a verb and it sits directly after the form of avoir, so the pair is a past tense. Nothing is being owned in that sentence.',
  },
];

/* ─── Reference sheets ─────────────────────────────────────────────────────
 *
 * Two, and both exist for a layout reason as much as a pedagogical one.
 * `tapTable` is not in ownsLayout(), so the in-flow tables render inside a
 * scrolling page and anything past about six rows runs off the fold and takes
 * its chrome with it. The full versions live here.
 *
 * This is also where a learner will be a week from now, halfway through the
 * negation unit, wanting the avoir table beside the être one. Layer 'deep'
 * exempts these from the core density caps, which is the point: a sheet is
 * allowed to be dense, and a `table` section is only legal here.              */

const SHEETS: ReferenceSheet[] = [
  {
    id: 'sheet.a1.07.paradigm',
    title: 'avoir, in full',
    layer: 'deep',
    contains: ['All nine pronouns with their form', 'What each form sounds like', 'The four that join up'],
    sections: [
      {
        type: 'table',
        id: 'sheet-avoir-table',
        title: 'The full paradigm',
        layer: 'deep',
        cols: ['Pronoun', 'avoir', 'Sounds like', 'English'],
        rows: [
          ["je / j'", 'ai', '[ZHAY]', 'I have'],
          ['tu', 'as', '[tü AH]', 'you have, one person, close'],
          ['il', 'a', '[ee LA]', 'he has, or it has'],
          ['elle', 'a', '[el LA]', 'she has'],
          ['on', 'a', '[oh NA]', 'we have, said out loud'],
          ['nous', 'avons', '[noo za-VOHⁿ]', 'we have, written'],
          ['vous', 'avez', '[voo za-VAY]', 'you have, politely or plural'],
          ['ils', 'ont', '[eel ZOHⁿ]', 'they have, any group with a man in it'],
          ['elles', 'ont', '[el ZOHⁿ]', 'they have, all women'],
        ],
      },
      {
        type: 'teach',
        id: 'sheet-avoir-join',
        title: 'The four that join up',
        layer: 'deep',
        body: 'Four of the six start on a vowel, and every one of them pulls the silent consonant in front of it back to life. Nous ends in a silent s and avons starts on an a, so the s returns as a z and the two words are said as one: noo-za-VOHⁿ. The same happens with vous avez, ils ont and elles ont. Je is the fifth case and it behaves differently: rather than binding, it disappears, because ai starts on a vowel and je loses its e and is written j apostrophe. Only tu as and il a stand apart with nothing joining them, and those two happen to be the pair that sound identical, since the s of as is silent. So the six forms produce five distinct sounds, and the pronoun is what tells you which of the two identical ones you are hearing. That is why French never drops a subject pronoun the way English drops one in a list.',
      },
      {
        type: 'teach',
        id: 'sheet-avoir-versus-etre',
        title: 'Against être, which you already have',
        layer: 'deep',
        body: 'These are the two most used verbs in French and they are the two most broken, for the same reason: a form said a hundred times a day is never smoothed out by analogy the way a rare verb is. You have now learned both outright and no other verb will ask this of you again. One pair is worth keeping apart from the start because it belongs to both lessons at once: ils sont opens on a clear s and means they are, while ils ont carries a z over from the silent s of ils and means they have. Slowed down they are obvious. At conversational speed the z against the s is the only thing separating them, and there is no other clue in the sentence, because both are followed by whatever comes next with no pause. The written forms are further apart than the spoken ones, so reading them will not train your ear. That is what the listening mission is for.',
      },
    ],
  },
  {
    id: 'sheet.a1.07.expressions',
    title: 'The fourteen, and the two rules around them',
    layer: 'deep',
    contains: ['All fourteen with their English', 'The age rule in full', 'What a negative leaves behind'],
    sections: [
      {
        type: 'table',
        id: 'sheet-fourteen-table',
        title: 'All fourteen',
        layer: 'deep',
        cols: ['French', 'English', 'What follows it'],
        rows: FOURTEEN.map((e) => [
          e.fr,
          e.en,
          e.complement ? `the little word ${e.complement}` : 'nothing at all',
        ]),
      },
      {
        type: 'cheatSheet',
        id: 'sheet-expressions-rules',
        title: 'The four places English points the wrong way',
        layer: 'deep',
        rows: [
          { k: 'An age', v: "J'ai vingt ans, never Je suis vingt ans. And ans is never left off.", say: "J'ai vingt ans." },
          { k: 'A state', v: "J'ai faim, J'ai froid, J'ai peur. Eleven of them, all the same swap.", say: "J'ai faim." },
          { k: 'The weather', v: "Il fait chaud for the room. J'ai chaud for the person.", say: "Il fait chaud. J'ai chaud." },
          { k: 'A complement', v: "besoin de, envie de, mal à. The other eleven carry nothing.", say: "J'ai besoin d'eau." },
          { k: 'A negative, countable', v: "Je n'ai pas de voiture. The une collapsed to de.", say: "Je n'ai pas de voiture." },
          { k: 'A negative, expression', v: "Je n'ai pas faim. Nothing collapsed, because nothing was there.", say: "Je n'ai pas faim." },
        ],
      },
      {
        type: 'teach',
        id: 'sheet-expressions-past',
        title: 'The sentences where it stops meaning have',
        layer: 'deep',
        body: 'Across the a1 corpus, 119 of the 522 rows that open on a form of avoir are not about having anything, which is 23 out of every hundred. J ai perdu mes clés is I lost my keys. Elle a pris le bus is she took the bus. Nous avons réservé une table is we booked a table, and the table belongs to a restaurant. In every one of them the form of avoir is doing a job you have not been taught yet, and the word straight after it is what gives it away: one noun means somebody has something, another verb means a past tense. The reason this matters now rather than later is that you will read four or five times as much French as you produce for the next year, and a learner who meets j ai only as I have will read almost a quarter of what they meet as a possession that is not there. You are not being asked to use this. You are being asked to see it and move on.',
      },
    ],
  },
];

export const AVOIR_LESSON: Lesson = {
  id: 'a1.07.l1',
  unitId: 'a1.07',
  // The lesson's index WITHIN its unit, not its place in the track. Every lesson
  // in the seed is seq 1 because every unit ships exactly one so far, and the
  // `l1` in the id is this number.
  seq: 1,
  title: 'Le verbe avoir',
  level: 'a1',
  // ELEVEN, not seven. missions.ts derives the eyebrow from unit.seq at render
  // time (`${level} · LEÇON ${unit.seq}`), and a1.07 sits at seq 11. The stored
  // value is a fallback and has to agree with what the renderer computes, or the
  // two disagree the moment something reads this field instead. a1.03 shipped
  // exactly that bug (commit 56c79a7) and a1.04 ships it today: its stored tag
  // reads LEÇON 04 at seq 6.
  tag: 'A1 · LEÇON 11',
  intro:
    'Six forms, no pattern behind them, and a verb that spends most of its time not meaning have. This is how you say your age, how you say you are hungry, cold, right or afraid, and how you read the sentences where it has stopped meaning have at all.',

  sections: SECTIONS,
  itemIds: ITEM_IDS,
  // The unit shipped with lessonIds: [], so this is the first lesson here and
  // the counter started at 1. It moves forward on every rebuild: the merge
  // script prints both sides, and "replacing v3 with v1" reads as a rollback.
  //
  // v2 is what a1-07-avoir.test.ts found after v1 was applied to Postgres, and
  // both fixes are content rather than plumbing:
  //
  //   The reading glossary named « j'ai mal à la tête », which is FIVE words
  //   against gloss.logic.ts's MAX_GLOSS_WORDS of four, so it could never match
  //   and drew no underline at all. Shortened to « mal à la tête ». This is the
  //   same class of failure as the ten invisible entries across sons.05, .07 and
  //   .09, and it was caught only because the test runs the real segmentSentence
  //   rather than a copy of it.
  //
  //   s03-slots printed « suis · es · est » on a French display line, which is
  //   another verb's paradigm on a screen in a lesson that is not allowed to
  //   teach one. The card now names être and what it cost without printing any
  //   of its forms.
  //
  // v3 is four titles, and all four are layout rather than teaching:
  //
  //   Three ran to 28 characters against the 27 the missions list gives a row,
  //   so all three were cut with an ellipsis on a device. Three a1.02 titles
  //   shipped that way and were only found by looking at a phone; these were
  //   found by measuring, and there is now a test so the next one cannot ship.
  //
  //   s07-ear was titled « Ils Ont, Or Ils Sont », which is a French UI label
  //   wearing one English word. The existing French-literal guard reads
  //   component source only, so an authored one passes CI and lands beside
  //   English on the same card. It is now "Two Verbs, One Consonant" and the
  //   French sits in `frSub`, which is the field that is deliberately French.
  //
  // v4 is mission 10, reported from a device: "the card is large with a layer
  // under, can be missed by learners. Also the card is not contained."
  //
  //   s10-eleven was a groupDrill at xl carrying TWO groups, each with six or
  //   five words AND a four-option check in the same group. That is the one
  //   shape an xl drill must not take, and GroupDrillView documents why: the
  //   deck and the check become two competing floors in one fixed viewport, and
  //   two groups defeat the `single` branch so the mission also draws a dots
  //   row, a next-group button and a ScrollView around the hero card. The
  //   ScrollView is the "not contained"; the check stacked beneath the deck is
  //   the "layer under", and it lands below the fold.
  //
  //   Audited across the seed first: of 50 groupDrill sections in 14 lessons,
  //   this was the only xl one anywhere with both in a group. Split into
  //   s10-eleven (one group, eleven words, xl) and s10b-check (a control page,
  //   no size), which is the pattern sons.05, sons.06, sons.10, a1.03, a1.11 and
  //   a1.29 all already use. The rule is now enforced over the whole seed by
  //   lesson-contract.test.ts rather than left as a comment in a component.
  //
  // v5 is the device walk of v4 on a Pixel 6 (2026-08-06), which confirmed
  // mission 10 fixed and found one more thing no test could:
  //
  //   s06-sort's title truncated to "Which Form Goes With Wh…" on the missions
  //   list at 26 characters, INSIDE the 27-character rule. The row's type chip
  //   competes for the same line and the real constraint is pixel width: the
  //   goals mission is longer, with a longer chip, and fits, because its glyphs
  //   are narrower. Retitled "Pronoun, Then Form", which also echoes the drill
  //   its check fires. The test now says the count is a proxy and the device is
  //   the arbiter, rather than implying 27 is safe.
  //
  // v6 meets a contract that landed WHILE this lesson was being built.
  // scenario.logic.test.ts now requires every role-play turn to carry `userEn`
  // and at least two `alts`, over the whole seed. Both are right: a reveal with
  // no translation shows the learner the one sentence comprehension matters on
  // and asks them to read it, and a single accepted answer makes a conversation
  // a cloze test. s22-scenario was authored before that existed and had neither.
  // Caught by the suite rather than by a device, which is what a seed-wide
  // contract is for.
  version: 6,

  grammarAssumed: [
    'The nine subject pronouns, and the six verb forms they sit behind, introduced in a1.05',
    'on takes third-person-singular agreement, introduced in a1.05',
    'The six forms of être, introduced in a1.06, and the liaison in vous êtes',
    'The numbers from one to a hundred, introduced in a1.02, a1.27 and a1.28',
    'The indefinite article un, une and des, and its collapse to de under a negative, introduced in a1.11',
    'Elision of le, la and je in front of a vowel sound',
  ],
  grammarIntroduced: [
    'The full present tense of avoir, as six forms with no derivable stem',
    'The obligatory liaison in nous avons, vous avez, ils ont and elles ont',
    'avoir for age, with the obligatory noun ans',
    'The fourteen fixed expressions built on avoir, and the eleven that render English predicative be',
    'avoir besoin de, avoir envie de and avoir mal à, and the complement each requires',
    'il fait plus an adjective for the weather, against avoir for a person',
    'The absence of a partitive de under negation after an article-less expression',
    'Recognition only of the passé composé with avoir as auxiliary, as a reading skill',
  ],

  features: ['roleplay', 'voiceflash'],

  overview: {
    titleEn: 'The Verb Avoir (To Have)',
    subFr: 'Le verbe avoir',
    introFr: "Six formes, et un verbe qui passe le plus clair de son temps à ne pas vouloir dire avoir.",
    minutes: 27,
    difficulty: 2,
    glyph: '🎁',
    screens: 206,
  },

  acts: ACTS,
  reframe: REFRAME,
  errorTriggers: ERROR_TRIGGERS,
  drills: DRILLS,
  sheets: SHEETS,
  deckTranche: DECK_TRANCHE,
  terms: AVOIR_TERMS,

  audio: {
    defaultLang: 'fr-FR',
    speeds: [1.0, 0.65],
    coachVoice: 'coach-en-warm',
    interfaceSounds: ['correct', 'incorrect', 'checkpoint'],
    // ── The audio decisions that cannot be recovered later ─────────────────
    //
    // Written here AND pinned by a1-07-avoir.test.ts, the way sons.07's
    // rec-h-pairs and a1.06's rec-a1-06-paradigm pin their own, because a
    // constraint on how something is recorded becomes invisible the moment the
    // clip is delivered.
    //
    // Briefs only. Do NOT run pnpm audio:render: it spends real ElevenLabs
    // credits and ELEVENLABS_API_KEY is not set in ealch-admin/.env in any case.
    // CLIP_MANIFEST is empty by design, so every card falls back to device TTS
    // until the studio delivers, and a recordingId resolving to nothing is the
    // correct shipping state.
    recorded: [
      {
        id: 'rec-a1-07-paradigm',
        desc:
          'THE SIX FORMS AS ONE CONTINUOUS TAKE, IN PARADIGM ORDER, BY ONE VOICE AT ONE SPEED. Six forms recorded in ' +
          'six sessions are six performances, and the learner is trying to hear a SET: any drift in pace, pitch or ' +
          'emphasis between them teaches a difference between the recordings rather than a difference in French. ' +
          'Read the bare forms first, then the six full sentences in the same take. THE FOUR LIAISONS ARE THE POINT ' +
          'AND THEY ARE NOT OPTIONAL: nous avons, vous avez and ils ont are each ONE phonetic word with a z in the ' +
          'middle, and the slow take must be that join stretched rather than the join taken apart. A learner who ' +
          'hears them separated once will produce them separated forever. Do not sound the s of as, the t of ont, ' +
          'or the final s of ils.',
        clipIds: [
          "j'ai", 'tu as', 'il a', 'nous avons', 'vous avez', 'ils ont',
          "J'ai un cadeau pour Léa.", 'Tu as un cadeau pour Léa ?', 'Il a un cadeau pour Léa.',
          'Nous avons un cadeau pour Léa.', 'Vous avez un cadeau pour Léa ?', 'Ils ont un cadeau pour Léa.',
        ],
      },
      {
        id: 'rec-a1-07-pairs',
        desc:
          'The two minimal pairs this lesson turns on, EACH PAIR RECORDED BACK TO BACK IN ONE TAKE by the same voice ' +
          `at the same speed, in the way ${unitRef('sons.07')} pins rec-h-pairs and ${unitRef('a1.11')} pins rec-a1-11-pairs. ils ont against ` +
          'ils sont is a liaison z against an s and it is the same take or it is nothing: recorded apart, the learner ' +
          'compares two performances instead of two verbs. il a against ils ont is a liaison that exists against one ' +
          'that does not, and the temptation is to lean on the ils to make it clearer. DO NOT. The whole difficulty ' +
          'is that nobody leans on it in speech. Then the four listening lines at natural pace and again at 0.65.',
        clipIds: [
          'ils-ont-ils-sont-pair', 'il-a-ils-ont-pair',
          'Ils ont des feuilles blanches.', 'Ils sont dans la salle.',
          'Il a un cadeau pour Léa.', 'Ils ont un cadeau pour Léa.',
        ],
      },
      {
        id: 'rec-a1-07-swap',
        desc:
          'The scene break and the swap deck. « Je suis vingt ans. » must be read PLAINLY and at ordinary pace, not ' +
          'comically and not hesitantly: the entire teaching of the scene is that it sounds like a normal sentence ' +
          'right up until it stops, and any performance signalling that it is wrong destroys that. Then « J\'ai vingt ' +
          'ans. » in the same take at the same pace, so the only audible difference is the verb. Run the verb ' +
          'straight into the number with no pause, because a gap there is exactly where a learner inserts être.',
        clipIds: ['Je suis vingt ans.', "J'ai vingt ans.", "J'ai faim.", 'Il a peur.'],
      },
      {
        id: 'rec-a1-07-eleven',
        desc:
          'The eleven expressions as ONE TAKE in the order the drill shows them, one voice, one speed, no teaching ' +
          'pause between them. The learner is being shown that eleven separate things are one thing, and eleven ' +
          'separately recorded clips would teach eleven separate things. Keep the nasals closed: faim ends on a ' +
          'nasal vowel with NO m sound, raison ends on a nasal vowel with NO n sound, and honte likewise. Those ' +
          'three are the ones a reader will over-articulate.',
        clipIds: [
          'avoir faim', 'avoir soif', 'avoir sommeil', 'avoir froid', 'avoir chaud', 'avoir peur',
          'avoir raison', 'avoir tort', 'avoir honte', 'avoir de la chance', "avoir l'air",
        ],
      },
      {
        id: 'rec-a1-07-traps',
        desc:
          'The four English-speaker traps, wrong form then right form, with a clear beat between them so the learner ' +
          'hears the difference rather than a correction. Je suis vingt ans / J\'ai vingt ans. Je suis faim / J\'ai ' +
          'faim. Je suis chaud / J\'ai chaud. Je n\'ai pas de faim / Je n\'ai pas faim. Read every wrong version ' +
          'plainly rather than comically: two of these four are real French sentences that mean something else, and ' +
          'a performance that marks them as errors removes the reason they are dangerous.',
        clipIds: ['trap-age', 'trap-faim', 'trap-chaud', 'trap-negation'],
      },
      {
        id: 'rec-a1-07-scene',
        desc:
          'The opening scene, French bubbles only, in the voice of one woman in her seventies at an ordinary ' +
          'kitchen-table pace. The beat where she asks again (« Pardon ? Vous avez quel âge ? ») must be patient and ' +
          'unbothered rather than corrective or impatient: the whole point of the scene is that she is not ' +
          'correcting anybody, she simply did not receive a sentence, so any edge on it turns the moment into a ' +
          'telling-off and the teaching is lost.',
        clipIds: ['Quel âge avez-vous ?', 'Pardon ? Vous avez quel âge ?', 'Ah, vingt ans. Vous avez faim ?'],
      },
    ],
    ambienceDefault: 'off',
  },
};

/** Exported for the authoring script, the merge script and the test, so none of
 *  them restates a count that can drift out of agreement with the content. */
export const AVOIR_ITEM_IDS = ITEM_IDS;
export const AVOIR_SPEAK_IDS = SPEAK_IDS;
export const AVOIR_DICTATION_IDS = DICTATION_IDS;
export const AVOIR_PARADIGM_IDS = PARADIGM;
export const AVOIR_AGE_IDS = AGE;
export const AVOIR_PAST_IDS = PAST;
export const AVOIR_TRANCHES = DECK_TRANCHE;
/** Every id this lesson names that it did not author: the reused half plus the
 *  imported half. Exported so the batch can check both against the database and
 *  the merge can check both against the seed without restating either list. */
export const AVOIR_BORROWED_IDS = [...new Set([...REUSED_IDS, ...IMPORTED_IDS])];
/** The authored half, for the same reason. */
export const AVOIR_AUTHORED_IDS = AVOIR_IDS;
