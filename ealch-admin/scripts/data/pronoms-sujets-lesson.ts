// a1.05.l1 "Les pronoms sujets" — the mission journey.
//
// ── The constraint that decided every other decision ───────────────────────
//
// a1.05 sits at seq 9. être is seq 10 and avoir is seq 11, and across all seven
// A1 lessons built before this one there is not a single conjugation in any
// `grammarIntroduced`. So this lesson teaches the SUBJECTS of verbs to a
// learner who has never been taught a verb.
//
// Getting that wrong produces one of two bad lessons: a paradigm drill with
// nothing to attach to, or an accidental verb lesson that steals a1.06's job.
// The way through is to be explicit about it, which this lesson is in three
// places:
//
//   1. ONE carrier verb, named as a carrier. être, because it is next, because
//      the learner has already met `je suis` inside a1.11's profession rule,
//      and because using its forms here PRIMES a1.06 rather than competing with
//      it. The `etre` glossary term says this in as many words, on every screen
//      that chips it.
//   2. No -er conjugation, no verb-endings table, and no generalisation from
//      être to any other verb. a1-05-pronoms.test.ts asserts this against the
//      production surfaces rather than against every string, so legitimate
//      context ("être itself is the next lesson") does not fire it.
//   3. A roundup that points at être and avoir by name, the way sons.07 closes
//      on liaison being next.
//
// ── Why the reframe is arithmetic ─────────────────────────────────────────
//
// Nine pronouns is a list, and a list is a flashcard deck with a lesson wrapped
// around it. The reason this lesson exists is that the nine are not nine: il,
// elle and on share one verb form and ils and elles share another. A learner
// who leaves knowing that walks into a1.06 with the verb table already half
// built. A learner who leaves with nine translated words walks in with nothing.
//
// So the reframe is "Nine pronouns. Six verb forms." and the shape of the
// lesson is a GRID rather than a run of nine cards. s04-grid is six rows for
// nine pronouns, and it is the one screen the whole unit is for.
//
// ── What this lesson does NOT do ──────────────────────────────────────────
//
// - Stressed pronouns (moi, toi, lui, eux) are a different set with a different
//   job and are not in the canDo. They get one paragraph in the reference
//   sheet, which is where a learner who met « et toi ? » in a1.01 will look.
// - Object pronouns are a2.06/a2.24/a2.25. Not touched, and touching le/la/les
//   as objects would be actively confusing three lessons after the learner
//   spent three units on them as articles.
// - `ce` as in c'est is a2.33's. The learner has met c'est as a fixed phrase and
//   it stays fixed.
//
// ── tu/vous, which a1.01 already taught ───────────────────────────────────
//
// The canDo names tu versus vous, so it has to be present, and a1.01.l1 already
// declares "The tu / vous distinction and when each is required" in its
// grammarIntroduced. A learner told the same thing twice in the same words
// stops believing the second telling.
//
// So s11-vous is CONSOLIDATION, and it earns its screen on the half a1.01 did
// not teach: that vous is one word doing two jobs, and that the polite singular
// and the plain plural are the same word, the same verb form, and the same
// sound. `Vous êtes prêt ?` and `Vous êtes prêts ?` differ by a silent S that
// exists only on the page. That is genuinely new, it is why the choice feels
// harder in French than the English "you" suggests, and a1.01 says nothing
// about it anywhere.
//
// ── Layout notes that are bugs, not preferences ───────────────────────────
//
// - `tapTable` is NOT in ownsLayout() (LessonPager.tsx), so s04-grid and
//   s11-vous render inside a SCROLLING page. That is why the grid is six rows
//   and not nine: the full paradigm lives in sheet.a1.05.paradigm, reached from
//   both sections by `sheetId`.
// - `size` is not decoration. ownsLayout() ignores it; density.logic.ts reads
//   `xl` as a 12-word cap on EVERY string in the section. No section here sets
//   xl, because every card in this lesson carries a sentence and a gloss.
// - `commonErrors` needs `swipe: true` or it renders a blank screen. See
//   s09-onerrors.
// - `reading` needs `questionsInModal` WITH questions or its glossary reaches
//   no renderer at all. And PassagePage splits on sentence boundaries, so an
//   authored `\n` in the passage is swallowed: s18-reading is one line.

import type {
  ErrorTrigger,
  Lesson,
  LessonAct,
  LessonDrill,
  LessonSection,
  ReferenceSheet,
  SceneBeat,
} from '../../../ealch-v2/src/content/schema.ts';
import { PRONOMS_TERMS, REFRAME } from './pronoms-sujets-terms.ts';
import { PRONOUN_IDS, REUSED_IDS, THE_NINE, THE_SIX, fr, sub } from './pronoms-sujets-corpus.ts';

export { REFRAME };

/* ─── The items this lesson touches ────────────────────────────────────────
 *
 * 26 authored (see pronoms-sujets-corpus.ts for why any at all) plus 19 reused
 * by id and untouched. Every id here resolves; the batch re-checks the reused
 * half against POSTGRES rather than the seed, because the two drift and an id
 * that exists only in the seed renders as an empty card.                     */

const c = (n: string) => `fr.a1.cafe.${n}`;

/** The nine paradigm sentences: one per pronoun, one verb, one café. */
const PARADIGM = ['154', '155', '156', '157', '158', '159', '160', '161', '162'].map(c);
/** The four shorts that differ by one syllable of verb and nothing else. */
const CONTRAST = ['163', '164', '165', '166'].map(c);

/** Spoken practice draws only from items carrying `voiceflash`, because that is
 *  the drill the mic-scored deck runs. Every authored item has it; this is the
 *  subset the mission names, one per pronoun plus the two pairs the lesson is
 *  really about. Asserted in a1-05-pronoms.test.ts so a corpus edit that strips
 *  the tag fails there rather than on a device. */
const SPEAK_IDS = [...PARADIGM, c('167'), c('168'), c('174'), c('176'), c('177')];

/** Listening is where this lesson's claim gets tested: the pronoun carries no
 *  information and the verb carries all of it. The four contrast shorts, the
 *  on/nous pair, the vous pair, and one reused sentence per pronoun so the ear
 *  meets all nine outside the frame they were taught in. */
const LISTEN_IDS = [
  ...CONTRAST,
  c('167'), c('179'),
  c('177'), c('178'),
  'fr.a1.cafe.088',
  'fr.a1.cuisine.191',
  'fr.a1.cafe.095',
  'fr.a1.cafe.089',
  'fr.a1.ecole.262',
  'fr.a1.cafe.090',
  'fr.a1.objets.113',
  'fr.a1.cafe.091',
  'fr.a1.cafe.100',
];

/** The dictée is the only surface where the learner has to PRODUCE the pronoun
 *  and its verb together from nothing but sound. Three minimal pairs: il/ils,
 *  elle/elles, on/nous. Every one is long enough that dicteeMode() puts it in
 *  WORD mode, which the test asserts through the real module rather than a
 *  restated threshold. */
const DICTATION_IDS = ['156', '161', '157', '162', '158', '159'].map(c);

const ITEM_IDS = [...new Set([...PRONOUN_IDS, ...REUSED_IDS])];

/* ─── Mission 1 · Scene ────────────────────────────────────────────────────
 *
 * The A1 register of stakes is "you got the social move right and the room
 * still told you something", not "they could not parse you". Nothing the
 * learner says here is wrong. `Nous sommes là` is correct French and it is what
 * a course hands you first. What happens is that a French speaker says the same
 * thing back in the word she would have used, and the verb changes with it.
 *
 * That beat is doing two jobs at once and is the reason the scene is about `on`
 * rather than about tu/vous: it dramatises the meaning (on IS we) and the form
 * (on takes est, not sommes) in one exchange, and those are exactly the two
 * halves the canDo names.
 *
 * Beats are extracted to a named const, each with its own `size` and `audio`,
 * the way sons.06 and a1.01 settled it. The section sets NO size: ownsLayout()
 * ignores it and density.logic.ts would read xl as a 12-word cap on prose.    */

const SCENE_BEATS: SceneBeat[] = [
  {
    kind: 'narration',
    size: 'md',
    text: 'Three weeks in the flat, and this is the first Saturday anyone has asked you along.',
    audio: { mode: 'tts', voice: 'coach' },
  },
  {
    kind: 'bubble',
    from: 'them',
    reveal: 'tap',
    size: 'md',
    speaker: 'Chloé',
    fr: 'On est au marché à dix heures. Vous êtes libres ?',
    en: 'We are at the market at ten. Are you two free?',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a1-05-scene' },
  },
  {
    kind: 'narration',
    size: 'md',
    text: 'You are free. Sam is free. You want to say so, and you want to say it the way she just did.',
    audio: { mode: 'tts', voice: 'coach' },
  },
  {
    kind: 'choice',
    size: 'lg',
    prompt: 'What goes back across the table?',
    options: [
      {
        fr: 'Nous sommes là.',
        en: 'the we a course teaches first',
        outcome: 'breaks',
        audio: { mode: 'tts', lang: 'fr-FR' },
      },
      {
        fr: 'On est là.',
        en: 'the we she just used',
        outcome: 'works',
        audio: { mode: 'tts', lang: 'fr-FR' },
      },
    ],
    followUp: {
      works: 'Yes. She said on, and on is what a French kitchen actually speaks.',
      breaks: 'Nothing in that is wrong. Watch what it does anyway.',
    },
  },
  {
    kind: 'bubble',
    from: 'you',
    reveal: 'auto',
    size: 'md',
    fr: 'Nous sommes là.',
    en: '(correct, and one register above the room)',
    audio: { mode: 'tts', lang: 'fr-FR' },
  },
  {
    kind: 'bubble',
    from: 'them',
    reveal: 'auto',
    size: 'md',
    speaker: 'Chloé',
    fr: 'Super. On est là à dix heures alors.',
    en: 'Great. So we are there at ten.',
    stage: 'Nobody corrects you. She just says it back.',
    audio: { mode: 'tts', lang: 'fr-FR', recordingId: 'rec-a1-05-scene' },
  },
  {
    kind: 'break',
    size: 'lg',
    heading: 'She changed one word, and the verb went with it',
    // 31 words. The eight shipped scenes run 24 to 40 here. Kept short because
    // the break card stacks a heading, two reading rows and the coach line, and
    // `scene` is absent from ownsLayout() so it cannot size itself.
    body: 'Nous is correct and it is what a course hands you. In a kitchen, French says on. Same meaning, one register down, and a different form of the verb behind it.',
    wrong: {
      fr: 'Nous sommes là.',
      ipa: '/nu sɔm la/',
      en: 'the we from the book',
    },
    right: {
      fr: 'On est là.',
      ipa: '/ɔ̃ nɛ la/',
      en: 'the we from the room',
    },
    coach: 'Nous took sommes. On took est, which is the form il takes. That is the trade.',
    // Audio-first: the ear answers before the eye can. `audioFirst` is what does
    // the work. `autoplay` is NOT set: it is declared in schema.ts and
    // implemented in no component, so setting it would look like it did
    // something.
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], audioFirst: true, recordingId: 'rec-a1-05-on-nous' },
  },
  {
    kind: 'bubble',
    from: 'you',
    reveal: 'tap',
    size: 'md',
    speaker: 'A beat later',
    fr: 'On est là.',
    en: 'We are there.',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65] },
  },
  {
    kind: 'resolve',
    size: 'md',
    text: 'One word smaller, one register closer, and a different verb form riding along with it.',
  },
];

const SECTIONS: LessonSection[] = [
  /* ── Act 1: who is in the room ─────────────────────────────────────────── */

  {
    type: 'scene',
    id: 's01-scene',
    title: 'The Word She Used Instead',
    frSub: "Le mot qu'elle a dit à la place",
    render: 'screens',
    layer: 'core',
    terms: ['on'],
    say: {
      text: 'Watch this one. Nothing you say is wrong, and the room still tells you something.',
      voice: 'coach',
      timing: 'onFirstVisitOnly',
    },
    setting: {
      place: 'A shared kitchen, four flatmates',
      city: 'Toulouse',
      time: 'Saturday, just after nine',
      ambience: 'room-tone-kitchen',
    },
    beats: SCENE_BEATS,
    // The reframe is referenced, never retyped, so this appearance cannot drift
    // out of agreement with the eight others the density validator counts.
    closing: {
      size: 'md',
      text: `${REFRAME} On is the clearest place to see why: it means we and it borrows the form il uses.`,
    },
  },

  {
    type: 'goals',
    id: 's02-goals',
    title: 'What You Will Be Able To Do',
    frSub: 'Ce que vous saurez faire',
    layer: 'core',
    say: `${REFRAME} By the end of this you will know which of the nine a sentence needs, and which of them share a form.`,
    goals: [
      { t: 'Read the room, then speak', s: 'Decide who the sentence is about before you start it, the way French makes you.' },
      { t: 'Use on the way French does', s: 'Say we the everyday way, and take the verb form that comes with it.' },
      { t: 'Hear il against ils', s: 'Know why the pronoun tells you nothing, and what does the telling instead.' },
      { t: 'Arrive at être ready', s: 'Meet the next lesson with the subject half of the table already settled.' },
    ],
  },

  {
    type: 'cardDeck',
    id: 's03-collapse',
    title: 'Nine Words, Six Jobs',
    frSub: 'Neuf mots, six formes',
    hint: 'Swipe through the three cards.',
    render: 'deck',
    layer: 'core',
    size: 'lg',
    terms: ['subjectPronoun', 'sixForms'],
    say: 'This is the one idea worth carrying out of here. Three cards, and then the table it comes from.',
    cards: [
      {
        label: 'The count',
        head: 'Nine in, six out',
        body: `${REFRAME} Nine words go in front of the verb. Behind them, a verb only ever has to do six different things.`,
      },
      {
        label: 'The three',
        head: 'il, elle and on share one',
        fr: 'il · elle · on',
        sub: 'one form between the three',
        body: 'Whatever the verb is, these three take exactly the same form of it. Three pronouns, one ending, nothing to choose between.',
      },
      {
        label: 'The two',
        head: 'ils and elles share another',
        fr: 'ils · elles',
        sub: 'one form between the two',
        body: 'Same again at the plural end. The spelling of the pronoun changes and the verb after it does not move at all.',
      },
    ],
  },

  /* ── Act 2: the whole set, in one look ─────────────────────────────────── */

  {
    type: 'tapTable',
    id: 's04-grid',
    title: 'The Whole Set, One Table',
    frSub: 'Le tableau complet',
    layer: 'core',
    terms: ['sixForms', 'etre'],
    sheetId: 'sheet.a1.05.paradigm',
    say: `${REFRAME} Six rows for nine words, because two of the rows are shared. Tap any row to hear it.`,
    cols: ['Pronoun', 'With être', 'Who that is'],
    rows: [
      {
        cells: ["je / j'", 'suis', 'you, speaking'],
        say: fr(c('154')),
        detail: {
          title: 'je',
          body: "The one you use most. It stays lowercase in the middle of a sentence, unlike the English I, and it drops its e in front of a vowel sound: j'ai, j'attends.",
          say: fr(c('174')),
        },
      },
      {
        cells: ['tu', 'es', 'one person you are close to'],
        say: fr(c('155')),
        detail: {
          title: 'tu',
          body: 'One person, and someone you already have permission to be close to. A friend, a child, family. If you are not sure whether you have that permission, you do not have it yet.',
          say: fr(c('176')),
        },
      },
      {
        cells: ['il · elle · on', 'est', 'he, she, and everyday we'],
        say: `${fr(c('163'))} ${fr(c('165'))} ${fr(c('167'))}`,
        detail: {
          title: 'The row that does the work',
          body: 'Three pronouns, one form. il is he, elle is she, and on is the we French speaks out loud. All three take the same form of the verb.',
          say: fr(c('167')),
        },
      },
      {
        cells: ['nous', 'sommes', 'we, written and formal'],
        say: fr(c('159')),
        detail: {
          title: 'nous',
          body: 'Correct everywhere, and still what you write. Out loud, in most rooms, on has taken its place. nous is never wrong; it simply sits a register above where the conversation is.',
          say: fr(c('169')),
        },
      },
      {
        cells: ['vous', 'êtes', 'one person politely, or any group'],
        say: fr(c('160')),
        detail: {
          title: 'vous',
          body: 'One word doing two jobs. It is the polite singular, and it is also the plain plural for any group at all, however close you are to them. The word alone will not tell you which.',
          say: fr(c('178')),
        },
      },
      {
        cells: ['ils · elles', 'sont', 'they'],
        say: `${fr(c('164'))} ${fr(c('166'))}`,
        detail: {
          title: 'The other shared row',
          body: 'Two pronouns, one form. elles is for a group that is all women. ils covers everything else, including a group of ninety-nine women and one man.',
          say: fr(c('164')),
        },
      },
    ],
  },

  {
    type: 'cardDeck',
    id: 's05-singular',
    title: 'The Four You Say Most',
    frSub: 'Les quatre du singulier',
    hint: 'Swipe through the five cards.',
    render: 'deck',
    layer: 'core',
    size: 'lg',
    terms: ['jApostrophe', 'etre'],
    say: 'je, tu, il, elle. Four words, and one of them changes shape before it will let a vowel past.',
    cards: [
      {
        label: 'je',
        head: 'You, speaking',
        fr: fr(c('154')),
        sub: sub(c('154')),
        body: 'Lowercase in the middle of a sentence, unlike the English I. Only a capital when it opens one.',
      },
      {
        label: 'tu',
        head: 'One person, close',
        fr: fr(c('155')),
        sub: sub(c('155')),
        body: 'Never for a group and never for a stranger. tu is a permission, and it is given rather than taken.',
      },
      {
        label: 'il',
        head: 'He, and sometimes nobody',
        fr: fr(c('156')),
        sub: sub(c('156')),
        body: 'He, for a person. It also runs a whole family of sentences about nobody at all, which is two missions from here.',
      },
      {
        label: 'elle',
        head: 'She',
        fr: fr(c('157')),
        sub: sub(c('157')),
        body: 'The same form of the verb as il, in the same frame, with one word changed. Nothing else moves.',
      },
      {
        label: "j'",
        head: 'Before a vowel, je shrinks',
        fr: fr(c('174')),
        sub: sub(c('174')),
        body: 'You already do this with le and la. je behaves identically: the e drops, an apostrophe closes the gap, and the two words are said as one.',
      },
    ],
  },

  {
    type: 'cardDeck',
    id: 's06-plural',
    title: 'The Plural Side',
    frSub: 'Le pluriel',
    hint: 'Swipe through the four cards.',
    render: 'deck',
    layer: 'core',
    size: 'lg',
    terms: ['on', 'ils'],
    say: 'nous, vous, ils, elles. Two of them are not quite what they look like.',
    cards: [
      {
        label: 'nous',
        head: 'We, on paper',
        fr: fr(c('159')),
        sub: sub(c('159')),
        body: 'The we you will read and write. Out loud you will hear it far less often than the next card.',
      },
      {
        label: 'on',
        head: 'We, out loud',
        fr: fr(c('158')),
        sub: sub(c('158')),
        body: 'Same meaning as nous, and the verb drops to the il form. This one has a mission to itself, because that swap is where everyone slips.',
      },
      {
        label: 'vous',
        head: 'You, one or many',
        fr: fr(c('160')),
        sub: sub(c('160')),
        body: 'The question at the door of every restaurant in France. Here vous is plainly plural and nothing polite is happening.',
      },
      {
        label: 'ils · elles',
        head: 'They, twice',
        fr: `${fr(c('164'))} ${fr(c('166'))}`,
        sub: `${sub(c('164'))} · ${sub(c('166'))}`,
        body: 'elles only when every single one of them is a woman. Otherwise ils, and the verb does not care which you picked.',
      },
    ],
  },

  {
    type: 'listening',
    id: 's07-earcheck',
    title: 'Two Words, One Sound',
    frSub: "À l'oreille",
    layer: 'core',
    questionsInModal: true,
    terms: ['sixForms'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a1-05-contrast-pairs' },
    say: 'il and ils are the same sound. So are elle and elles. Something else has to tell you, and something else does.',
    lines: [
      { fr: fr(c('163')), en: 'He is here.' },
      { fr: fr(c('164')), en: 'They are here.' },
      { fr: fr(c('165')), en: 'She is here.' },
      { fr: fr(c('166')), en: 'They are here.' },
    ],
    questions: [
      {
        q: 'il and ils are the same sound on their own. What tells you which one you heard?',
        opts: ['The length of the vowel', 'The verb that comes after it', 'The S at the end', 'Nothing, you have to guess'],
        correct: 1,
        why: 'The S on ils is silent, so the pronoun carries no clue at all. est against sont is the whole difference.',
      },
      {
        q: 'You hear « Elles sont là. » How many people, and what do you know about them?',
        opts: ['One woman', 'Two or more, all of them women', 'Two or more, at least one man', 'You cannot tell from this'],
        correct: 1,
        why: 'sont makes it plural, and elles rather than ils makes it a group with no man in it.',
      },
      {
        q: 'Which pair sounds identical when the two words are said on their own?',
        opts: ["je and j'", 'nous and vous', 'il and ils', 'tu and vous'],
        correct: 2,
        why: 'il and ils are said the same way, and so are elle and elles. The plural is audible only in the verb that follows.',
      },
    ],
  },

  /* ── Act 3: the everyday we ────────────────────────────────────────────── */

  {
    type: 'cardDeck',
    id: 's08-on',
    title: 'On Means We, and Behaves Like He',
    frSub: 'On, le « nous » de tous les jours',
    hint: 'Swipe through the four cards.',
    render: 'deck',
    layer: 'core',
    size: 'lg',
    terms: ['on', 'etre'],
    say: 'This is the one the unit is named for. Two facts, and they pull in opposite directions.',
    cards: [
      {
        label: 'The meaning',
        head: 'on is we',
        fr: fr(c('158')),
        sub: sub(c('158')),
        body: 'In spoken French on has almost entirely taken over from nous as the subject. Around a table it is what you will hear every time.',
      },
      {
        label: 'The form',
        head: 'and it takes the il form',
        fr: 'il est · on est',
        sub: 'same form, different people',
        body: 'The verb behaves as though on were he. So a we idea comes out on a he form, and that is the mismatch to hold on to.',
      },
      {
        label: 'The pair',
        head: 'The same sentence, twice',
        fr: `${fr(c('167'))} · ${fr(c('179'))}`,
        sub: 'kitchen · letter',
        body: 'Neither is wrong. The first is what gets said, the second is what gets written, and a course hands you the second one first.',
      },
      {
        label: 'The slip',
        head: 'Where everyone trips',
        fr: fr(c('168')),
        sub: "never « On sommes d'accord. »",
        body: `${REFRAME} on sits in the same row as il, so it can never take the nous form, however much it means we.`,
      },
    ],
  },

  {
    type: 'commonErrors',
    id: 's09-onerrors',
    // `swipe` and `size` are not decoration. MissionSection renders
    // commonErrors as its own swipe deck ONLY when `swipe` is set, and without
    // it a1.01 mission 5 drew a blank screen on a device. Every v2 lesson that
    // ships this section sets both.
    swipe: true,
    size: 'lg',
    title: 'Three Ways On Goes Wrong',
    frSub: 'Trois pièges avec on',
    layer: 'core',
    terms: ['on'],
    say: 'Three mistakes, and all three come from knowing what on means.',
    errors: [
      {
        wrong: "Saying « On sommes d'accord. »",
        right: "Saying « On est d'accord. »",
        why: 'on means we and takes the form il takes. The meaning pulls one way and the verb goes the other, which is exactly why this gets its own screen.',
      },
      {
        wrong: "Writing « On est d'accord. » at the end of a job application.",
        right: "Writing « Nous sommes d'accord. » at the end of a job application.",
        why: 'on is spoken register. It is not slang and nobody will correct you for it, but written French still reaches for nous, and an application is not a kitchen.',
      },
      {
        wrong: 'Hearing « On est là. » and looking for one person.',
        right: 'Hearing « On est là. » and counting the people in front of you.',
        why: 'The verb is singular and the meaning is not. Nothing in the form will ever tell you that, so it is learned once and then it is done.',
      },
    ],
  },

  {
    type: 'examples',
    id: 's10-noone',
    title: 'The Il That Is Nobody',
    frSub: 'Le il impersonnel',
    layer: 'core',
    terms: ['impersonalIl'],
    say: 'A quarter of the il sentences you will meet are not about a man at all. Better to know that now than to spend a month looking for him.',
    examples: [
      { fr: 'Il y a une table dans le salon.', en: 'There is a table in the living room.', note: 'The most common sentence frame in the language, and its il is nobody.' },
      { fr: fr(c('171')), en: 'It is raining.', note: 'Weather takes il, the same way English weather takes it.' },
      { fr: fr(c('172')), en: 'The weather is nice.', note: 'Literally it makes beautiful. Nobody is making anything.' },
      { fr: 'Il est huit heures et demie.', en: 'It is half past eight.', note: 'Every clock time in French starts here.' },
      { fr: fr(c('173')), en: 'You have to book.', note: 'il faut is how French says one has to. It never has a subject you could point at.' },
    ],
  },

  /* ── Act 4: one, or more than one ──────────────────────────────────────── */

  {
    type: 'tapTable',
    id: 's11-vous',
    title: 'One Word, Two Jobs',
    frSub: 'Vous, deux emplois',
    layer: 'core',
    terms: ['vous', 'subjectPronoun'],
    sheetId: 'sheet.a1.05.paradigm',
    say: 'You already choose between tu and vous. What nobody mentions is that vous is doing a second job at the same time. Tap any row.',
    cols: ['The room', 'What you say', 'Which job'],
    rows: [
      {
        cells: ['One friend', fr(c('176')), 'tu, close and singular'],
        say: fr(c('176')),
        detail: {
          title: 'One person, close',
          body: 'The only room in this table that takes tu. One person, and someone who has already offered you the closeness.',
          say: fr(c('176')),
        },
      },
      {
        cells: ['One stranger', fr(c('177')), 'vous, polite singular'],
        say: fr(c('177')),
        detail: {
          title: 'One person, polite',
          body: 'The vous you already know. One person, kept at a distance, and the verb takes the plural form even though there is only one of them.',
          say: fr(c('177')),
        },
      },
      {
        cells: ['Two friends', fr(c('178')), 'vous, plain plural'],
        say: fr(c('178')),
        detail: {
          title: 'A group, close',
          body: 'Nothing polite is happening here. You would say tu to each of them alone, and together they are vous, because French has no plural of tu. It sounds exactly like the row above: the S on prêts is silent.',
          say: fr(c('178')),
        },
      },
      {
        cells: ['A room of strangers', fr(c('160')), 'both jobs at once'],
        say: fr(c('160')),
        detail: {
          title: 'A group you do not know',
          body: 'Polite and plural at the same time, in one word. This is the question at the door of every restaurant in France, and the answer is a number.',
          say: fr(c('160')),
        },
      },
    ],
  },

  {
    type: 'cardDeck',
    id: 's12-ils',
    title: 'Ils Swallows Elles',
    frSub: 'Ils, même avec un seul homme',
    hint: 'Swipe through the four cards.',
    render: 'deck',
    layer: 'core',
    size: 'lg',
    terms: ['ils'],
    say: 'One rule, stated plainly, and then the reason elles turns up so seldom.',
    cards: [
      {
        label: 'All women',
        head: 'elles',
        fr: fr(c('162')),
        sub: sub(c('162')),
        body: 'elles is the group with no man in it. Not mostly and not nearly: none.',
      },
      {
        label: 'Add one man',
        head: 'ils',
        fr: fr(c('161')),
        sub: sub(c('161')),
        body: 'One man joins and the whole group becomes ils. That is the rule French uses, and it holds at any size of group.',
      },
      {
        label: 'The consequence',
        head: 'elles is genuinely rare',
        fr: 'ils · elles',
        sub: 'common · uncommon',
        body: 'Because ils takes every mixed group, elles only survives where the group is entirely women. You will read it far less often than the other eight.',
      },
      {
        label: 'The verb',
        head: 'and the form does not move',
        fr: `${fr(c('164'))} · ${fr(c('166'))}`,
        sub: 'one form, two spellings',
        body: `${REFRAME} These two share the second of the shared rows, so picking the wrong one never changes the verb.`,
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
    say: 'The room is on the front. Say the pronoun before you flip.',
    // ── The answer face SHOWS what the speaker button says ─────────────────
    //
    // Found on a device, 2026-08-05. The back was the bare pronoun ("je") and
    // the speaker played `say`, which is a whole sentence ("Je suis à la
    // terrasse."). FlashcardsView renders `back` and then a play button and
    // nothing else: there is no `sub` slot on a flashcard the way a DeckCard
    // has one. So the learner read two letters, pressed play, and heard seven
    // words that appeared nowhere on the screen.
    //
    // That is out of step with every other audio surface in this lesson. The
    // grid's detail sheet, all four cardDecks and commonErrors each put the
    // French line next to the control that speaks it. This was the only place
    // that asked the learner to listen to text they could not read.
    //
    // Fixed by putting the sentence ON the answer face under the pronoun, not
    // by shortening `say` to the pronoun alone. Shortening it would have been
    // the wrong repair: this lesson's whole claim is that a pronoun said on its
    // own proves nothing, because il and ils are the same sound. The audio has
    // to carry the verb. So the card carries it too.
    //
    // `back` is rendered in one <TX center>, which is a plain Text, so the
    // newline draws. (Unlike a reading passage, where PassagePage splits on
    // sentence boundaries and swallows every authored \n.)
    cards: [
      { front: 'You, speaking about yourself', back: `je\n${fr(c('154'))}`, say: fr(c('154')) },
      { front: 'You, speaking, in front of a vowel', back: `j'\n${fr(c('174'))}`, say: fr(c('174')) },
      { front: 'One friend', back: `tu\n${fr(c('155'))}`, say: fr(c('155')) },
      { front: 'One man', back: `il\n${fr(c('163'))}`, say: fr(c('163')) },
      { front: 'One woman', back: `elle\n${fr(c('165'))}`, say: fr(c('165')) },
      { front: 'We, said out loud at a table', back: `on\n${fr(c('167'))}`, say: fr(c('167')) },
      { front: 'We, written in a letter', back: `nous\n${fr(c('179'))}`, say: fr(c('179')) },
      { front: 'One stranger, politely', back: `vous\n${fr(c('177'))}`, say: fr(c('177')) },
      { front: 'Two friends together', back: `vous\n${fr(c('178'))}`, say: fr(c('178')) },
      { front: 'Four women', back: `elles\n${fr(c('166'))}`, say: fr(c('166')) },
      { front: 'Four women and one man', back: `ils\n${fr(c('164'))}`, say: fr(c('164')) },
      // Was "The rain", which named a referent and so invited exactly the
      // inference s10-noone exists to prevent: that this il means the rain. It
      // means nobody. Every other front in this deck asks who is in the room,
      // and this one now answers that question with "no one".
      { front: 'Nobody at all, as in the weather', back: `il\n${fr(c('171'))}`, say: fr(c('171')) },
    ],
  },

  /* ── Act 5: out in the world ───────────────────────────────────────────── */

  {
    type: 'practice',
    id: 's14-listen',
    title: 'Who Is In the Room?',
    frSub: 'Écoutez et décidez',
    layer: 'core',
    terms: ['sixForms'],
    say: 'No text this time. The verb is the only thing telling you how many people there are.',
    skill: 'listen',
    itemIds: LISTEN_IDS,
  },

  {
    type: 'practice',
    id: 's15-speak',
    title: 'Say the Whole Phrase',
    frSub: 'À voix haute',
    layer: 'core',
    audio: { mode: 'mic', lang: 'fr-FR' },
    say: 'Say each one as one movement. A pronoun on its own proves nothing, so the verb comes with it every time.',
    skill: 'speak',
    itemIds: SPEAK_IDS,
  },

  {
    type: 'dictation',
    id: 's16-dictation',
    title: 'Spell What You Hear',
    frSub: 'La dictée',
    layer: 'core',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], maxPlays: 4, recordingId: 'rec-a1-05-contrast-pairs' },
    say: 'Six sentences in three pairs. You cannot spell the pronoun until you have heard the verb, so listen to the end of each one.',
    itemIds: DICTATION_IDS,
  },

  {
    type: 'scenario',
    id: 's17-scenario',
    title: 'Your Turn at the Table',
    frSub: 'À table',
    layer: 'core',
    terms: ['on', 'vous'],
    say: 'The same terrace, a week on. The waiter uses vous and you answer with on, which is exactly how this goes in real life.',
    setting: 'A café terrace in Toulouse, Saturday at noon. You arrived first and two friends are on their way.',
    turns: [
      { ai: 'Bonjour ! Vous êtes combien ?', en: 'Hello! How many of you are there?', user: 'On est trois.' },
      { ai: 'Parfait. Vous êtes prêts à commander ?', en: 'Perfect. Are you ready to order?', user: 'Pas encore. Ils arrivent.' },
      { ai: 'Très bien. Et elle, elle prend quelque chose ?', en: 'Very good. And her, is she having something?', user: 'Elle prend un café.' },
      { ai: 'Et vous ?', en: 'And you?', user: "J'ai soif. Une carafe d'eau, s'il vous plaît." },
      { ai: 'Je vous apporte ça.', en: 'I will bring you that.', user: 'Merci beaucoup.' },
    ],
  },

  {
    type: 'reading',
    id: 's18-reading',
    title: 'Four People, One Table',
    frSub: 'Quatre personnes, une table',
    layer: 'core',
    terms: ['on', 'ils', 'vous'],
    // REQUIRED for the glossary to exist at all. MissionSection routes a reading
    // section to ReadingMission (and so to PassagePage, which draws the
    // underlines and the tap-for-translation sheet) only when this flag is set
    // WITH questions. a1.01 shipped five entries down the fallback path and they
    // rendered nowhere.
    questionsInModal: true,
    say: 'Read it once for the shape. Every pronoun in this lesson is in here somewhere. Tap any word you do not know.',
    // ONE LINE, deliberately. PassagePage does text.split(/(?<=[.!?»])\s+/) and
    // renders the pieces inline in a single TX, so every authored \n is
    // swallowed. a1.01's passage authors eight of them and none of them draws.
    //
    // THE A1 RULE FOR THIS PASSAGE (Paul, 2026-08-04): if it is not inside « »,
    // it is in English. The stage directions are context, and context is
    // instruction. An A1 learner's reading effort belongs on the exchange.
    text:
      'It is noon on the terrace. Léa is there first. Sam and Chloé arrive together. ' +
      '« On est là ! » ' +
      '« Vous êtes en avance. » ' +
      '« Non, tu es en retard. » ' +
      'The waiter comes over to the table. ' +
      '« Vous êtes combien ? » ' +
      '« On est trois. Il arrive dans dix minutes. » ' +
      'Two women at the next table stand up to leave. ' +
      '« Elles sont pressées. » ' +
      '« Elles sont toujours pressées. »',
    // Every entry is a single whitespace-delimited token that really appears
    // between the guillemets: the reader strips punctuation and lowercases
    // before matching, so an entry that is not a bare token is an underline that
    // never appears. Checked here through the REAL matcher in the test.
    glossary: [
      { word: 'combien', en: 'how many', note: 'The waiter is counting the table, so this vous is plural.' },
      { word: 'avance', en: 'ahead of time', note: 'En avance is early. It is said to the two who just arrived, so vous.' },
      { word: 'retard', en: 'late', note: 'En retard is the opposite. Said to one person, so tu.' },
      { word: 'pressées', en: 'in a hurry', note: 'The extra e agrees with elles. A group with a man in it would take pressés.' },
      { word: 'toujours', en: 'always', note: 'Sits between the verb and what follows it, where English puts it before the verb.' },
    ],
    questions: [
      { q: 'The waiter says vous and Léa answers with on. Why does neither of them use nous?', a: 'The waiter is addressing the whole table, so vous is plural, not polite. Léa answers for the table, and on is what a French speaker says out loud for we.' },
      { q: 'Two women get up from the next table and the line is elles, not ils. What does that tell you about them?', a: 'Every one of them is a woman. One man among them and the whole group would be ils.' },
      { q: 'The last two lines both open « Elles sont ». How do you know that is more than one person?', a: 'From sont. elles on its own is the same sound as elle, so the verb is doing all the work.' },
    ],
  },

  /* ── Act 6: prove it ───────────────────────────────────────────────────── */

  {
    type: 'reviewDeck',
    id: 's19-review',
    title: 'The Whole Set, One Deck',
    frSub: 'Révision',
    render: 'deck',
    layer: 'core',
    terms: ['subjectPronoun', 'on', 'ils'],
    say: 'Rate each card objectively. Again, hard, or easy. The ones you mark again come back.',
    cards: [
      { front: 'How many pronouns, and how many forms behind them?', back: `${REFRAME} il, elle and on share one row; ils and elles share another.` },
      { front: 'on means…', back: 'we, in everyday spoken French. And it takes the form il takes.', say: fr(c('167')) },
      { front: '« On sommes là. » is…', back: 'never said. on sits in the il row, so it is « On est là. »', say: fr(c('167')) },
      { front: 'A group of women, plus one man', back: 'ils. One man is enough to take the whole group.', say: fr(c('164')) },
      { front: 'You are speaking to two friends at once', back: 'vous. French has no plural of tu.', say: fr(c('178')) },
      { front: 'You are speaking to one stranger', back: 'vous again, doing its other job.', say: fr(c('177')) },
      { front: 'il and ils sound…', back: 'identical. The verb after them is the only difference you can hear.', say: `${fr(c('163'))} ${fr(c('164'))}` },
      { front: 'je, in front of a vowel', back: "j'. The same drop you already make with le and la.", say: fr(c('174')) },
      { front: '« Il pleut. » Who is il?', back: 'Nobody. il also runs the clock and il y a.', say: fr(c('171')) },
      { front: 'Writing an email rather than talking at a table', back: 'nous, not on. Same meaning, one register up.', say: fr(c('169')) },
    ],
  },

  {
    type: 'progressCheck',
    id: 's20-progress',
    title: 'Where You Stand',
    frSub: 'Votre progression',
    say: 'One screen before the exam, so you know what you are walking into.',
    // The prose deliberately carries no counts. Every figure on this card is a
    // fact about the journey around it and is derived below; typing one here as
    // well would be two chances to be wrong on one screen.
    body: 'You have met all of them, watched a scene turn on one of them, heard the two pairs your ear cannot separate, spelled the sentences where only the verb tells you how many people there are, and said them out loud. What is left is the part that says whether it stuck. Each round is tied to one of the mistakes this lesson exists to stop, and failing a round gets you its drill before the next one starts. The drill is the teaching, not the punishment.',
    // Filled immediately after SECTIONS is built, from the journey itself.
    stats: [],
  },

  {
    type: 'quiz',
    id: 's21-quiz',
    title: 'The Exam',
    frSub: "L'examen",
    layer: 'core',
    passMark: 70,
    roundFailThreshold: 60,
    say: 'Six rounds. Every question describes a room and asks who is in it. Miss too many in a round and you get a drill before the next one starts.',
    // ── One target per round, and that is not a stylistic choice ────────────
    //
    // `drillForRound` (quizRounds.logic.ts) walks a round's `targets` and
    // returns the FIRST one that resolves to a drill. Since every trigger this
    // lesson authors has a drill, the first target always wins and any second
    // one is decorative: its drill can never fire.
    //
    // The first draft of this exam had four rounds carrying six triggers
    // between them, and two drills (`drill-elles-or-ils` and `drill-il-nobody`)
    // were authored, valid, and unreachable. a1-05-pronoms.test.ts caught it.
    // The fix is one round per trigger, which also makes the remediation
    // sharper: fail the ils round and you get the ils drill, not a generic one.
    rounds: [
      {
        id: 'r1-who-is-there',
        label: 'Who is in the room',
        targets: ['err-wrong-person'],
        say: 'Five rooms. Say who is in each one.',
        questions: [
          {
            q: 'You are telling a colleague where your manager is. She is at the counter. Write the pronoun that opens the sentence.',
            format: 'typeIn',
            accept: ['elle'],
            answer: 'elle',
            why: 'elle is the one woman. il would make her a man, and on would fold you into the group with her.',
            ref: 's04-grid',
          },
          {
            q: 'You are writing to a landlord on behalf of yourself and your flatmate. Which one belongs in the letter?',
            format: 'mcq',
            opts: ['nous', 'on', 'ils', 'vous'],
            correct: 0,
            why: 'Both on and nous mean we. Written French reaches for nous, and a letter to a landlord is written French.',
            ref: 's06-plural',
          },
          {
            q: 'Two women are at the next table and nobody else is with them. Write the pronoun for them.',
            format: 'typeIn',
            accept: ['elles'],
            answer: 'elles',
            why: 'Every one of them is a woman, so the group takes elles. One man among them and it becomes ils.',
            ref: 's12-ils',
          },
          {
            q: 'You are about to say « ai soif ». Which goes in front of it?',
            format: 'mcq',
            opts: ["J'", 'Je', 'Tu', 'On'],
            correct: 0,
            why: "ai starts on a vowel sound, so je drops its e: j'ai. The same drop you already make with le and la.",
            ref: 's05-singular',
          },
          {
            q: 'How many subject pronouns does French have, and how many forms does a verb take behind them?',
            format: 'mcq',
            opts: ['Six pronouns, nine forms', 'Nine pronouns, nine forms', 'Nine pronouns, six forms', 'Six pronouns, six forms'],
            correct: 2,
            why: `${REFRAME} il, elle and on share one form, and ils and elles share another.`,
            ref: 's03-collapse',
          },
        ],
      },
      {
        id: 'r2-the-everyday-we',
        label: 'The everyday we',
        targets: ['err-on-agreement'],
        say: 'The word that means we and behaves like he.',
        questions: [
          {
            q: 'Fix this. Three of you have just arrived at the terrace: « On sommes là. »',
            format: 'errorSpot',
            accept: ['On est là', 'est'],
            answer: 'On est là.',
            why: 'on means we and takes the form il takes, so the verb is est. sommes belongs to nous and to nowhere else.',
            ref: 's09-onerrors',
          },
          {
            q: 'You are at a table with two friends and the waiter asks how many. Which is what a French speaker actually says?',
            format: 'mcq',
            opts: ['On sommes trois.', 'Nous sommes trois.', 'Ils sont trois.', 'On est trois.'],
            correct: 3,
            why: 'On est trois is the everyday answer. Nous sommes trois is correct and reads as written French, and On sommes is not a form at all.',
            ref: 's17-scenario',
          },
          {
            q: "Rewrite this for an email: « On est d'accord. »",
            format: 'typeIn',
            accept: ["Nous sommes d'accord."],
            answer: "Nous sommes d'accord.",
            why: 'Same meaning, one register up. The verb has to move with the pronoun, because nous takes sommes.',
            ref: 's08-on',
          },
          {
            q: 'In « On est là », what is the verb form following?',
            format: 'mcq',
            opts: ['Nothing, on takes no verb form', 'The number of people on means', 'The pronoun on, which behaves as third-person singular', 'Whichever people get named later'],
            correct: 2,
            why: 'The form follows the pronoun and not the meaning. That gap is the whole difficulty, and it never closes.',
            ref: 's08-on',
          },
          {
            q: 'Say it out loud, the way you would answer a waiter.',
            format: 'speak',
            target: 'On est trois.',
            ipa: '/ɔ̃ nɛ tʁwɑ/',
            why: 'Said as one movement: the nasal of on carries straight into est. There is no pause anywhere in it.',
            ref: 's15-speak',
          },
        ],
      },
      {
        id: 'r3-vous-two-jobs',
        label: 'One word, two jobs',
        targets: ['err-vous-job'],
        say: 'How many people, and how close.',
        questions: [
          {
            q: 'You are asking one close friend whether they are ready. Write the pronoun that opens the question.',
            format: 'typeIn',
            accept: ['tu'],
            answer: 'tu',
            why: 'One person, and someone close. tu is the only row in the table that fits both of those at once.',
            ref: 's11-vous',
          },
          {
            q: 'You are speaking to two close friends at once. Which pronoun?',
            format: 'mcq',
            opts: ['vous', 'tu', 'ils', 'on'],
            correct: 0,
            why: 'French has no plural of tu. Two friends together take vous, and nothing polite is being signalled by it.',
            ref: 's11-vous',
          },
          {
            q: 'A waiter looks at your group of four and asks how many you are. Write the pronoun he uses.',
            format: 'typeIn',
            accept: ['vous'],
            answer: 'vous',
            why: 'vous is the plain plural here, doing its second job. Nothing about the question is formal.',
            ref: 's11-vous',
          },
          {
            q: 'You read « Vous êtes prêt ? » with no S on prêt. What do you know?',
            format: 'mcq',
            opts: ['It is a group', 'It is two close friends', 'You cannot tell from the spelling', 'It is one person, addressed politely'],
            correct: 3,
            why: 'The singular prêt is the only thing marking it, and only on the page. Out loud prêt and prêts are the same sound.',
            ref: 's11-vous',
          },
          {
            q: 'Fix this. You are asking both of your flatmates at once: « Tu es prêt ? »',
            format: 'errorSpot',
            // One entry only. fold() strips punctuation and whitespace before
            // comparing, so 'Vous êtes prêts' and 'Vous êtes prêts ?' are the
            // same accepted string and listing both reads as two rules where
            // there is one.
            accept: ['Vous êtes prêts'],
            answer: 'Vous êtes prêts ?',
            why: 'French has no plural of tu, so two people together take vous, and the verb goes to êtes with them.',
            ref: 's11-vous',
          },
        ],
      },
      {
        id: 'r4-ils-and-elles',
        label: 'Ils and elles',
        targets: ['err-ils-mixed'],
        say: 'Who counts as they, and what it costs the verb.',
        questions: [
          {
            q: 'A hundred women and one man are waiting. Which pronoun covers them?',
            format: 'mcq',
            opts: ['elles', 'on', 'ils', 'vous'],
            correct: 2,
            why: 'One man is enough to take the whole group to ils. That is the rule French uses, at any size of group.',
            ref: 's12-ils',
          },
          {
            q: 'Fix this. The group is three women and one man: « Elles sont à la table du fond. »',
            format: 'errorSpot',
            accept: ['Ils sont à la table du fond', 'Ils'],
            answer: 'Ils sont à la table du fond.',
            why: 'elles needs a group with no man in it. One man and the whole group is ils, however many women are in it.',
            ref: 's12-ils',
          },
          {
            q: 'Which of these is genuinely rare in French?',
            format: 'mcq',
            opts: ['ils', 'elles', 'vous', 'on'],
            correct: 1,
            why: 'Because ils takes every mixed group, elles only survives where every single member is a woman.',
            ref: 's12-ils',
          },
          {
            q: 'Two women and nobody else are at the next table. Write the sentence that says they are there.',
            format: 'typeIn',
            accept: ['Elles sont là.'],
            answer: 'Elles sont là.',
            why: 'elles for the all-women group, and sont because it is plural. Both halves have to move together.',
            ref: 's12-ils',
          },
          {
            q: 'A group of four women is joined by one man, so elles becomes ils. What happens to the verb?',
            format: 'mcq',
            opts: ['It changes from sont to est', 'Nothing at all, it stays sont', 'It changes from est to sont', 'It becomes êtes'],
            correct: 1,
            why: `${REFRAME} ils and elles share one of the six, so swapping the pronoun never touches the verb behind it.`,
            ref: 's03-collapse',
          },
        ],
      },
      {
        id: 'r5-by-ear',
        label: 'By ear',
        targets: ['err-hear-plural'],
        say: 'The pronoun will not tell you. Something else will.',
        questions: [
          {
            q: 'Listen. How many people?',
            format: 'listenChoose',
            audio: { mode: 'tts', lang: 'fr-FR', clip: 'Ils sont là.', recordingId: 'rec-a1-05-contrast-pairs' },
            opts: ['One man', 'One woman', 'Two or more people', 'You cannot tell'],
            correct: 2,
            why: 'sont is plural and it is the only clue. ils and il are the same sound, so the pronoun tells you nothing.',
            ref: 's07-earcheck',
          },
          {
            q: 'Listen. Which sentence is it?',
            format: 'listenChoose',
            audio: { mode: 'tts', lang: 'fr-FR', clip: 'Elle est là.', recordingId: 'rec-a1-05-contrast-pairs' },
            opts: ['Elle est là.', 'Elles sont là.', 'Il est là.', 'Ils sont là.'],
            correct: 0,
            why: 'est against sont is what you are listening for. elle and elles are identical when the word is said on its own.',
            ref: 's07-earcheck',
          },
          {
            q: 'Listen. Which one did you hear?',
            format: 'listenChoose',
            audio: { mode: 'tts', lang: 'fr-FR', clip: 'On est trois à la terrasse.', recordingId: 'rec-a1-05-on-nous' },
            opts: ['Nous sommes trois à la terrasse.', 'On est trois à la terrasse.', 'Il est trois à la terrasse.', 'Elles sont trois à la terrasse.'],
            correct: 1,
            why: 'on and il take the same form, so est alone does not settle it. The word at the front is what does.',
            ref: 's08-on',
          },
          {
            q: 'Listen. Is this about one man or about a group?',
            format: 'listenChoose',
            audio: { mode: 'tts', lang: 'fr-FR', clip: 'Il est au comptoir du café.', recordingId: 'rec-a1-05-contrast-pairs' },
            opts: ['A group', 'A group of women', 'Impossible to say', 'One man'],
            correct: 3,
            why: 'est is singular. Had it been a group you would have heard sont, whatever the pronoun sounded like.',
            ref: 's07-earcheck',
          },
          {
            q: 'Tap the letter you do not say.',
            format: 'tapSilent',
            word: 'ils',
            correct: 's',
            why: 'The S on ils is silent, which is why ils and il are one sound. Only the verb after it separates them.',
            ref: 's07-earcheck',
          },
        ],
      },
      {
        id: 'r6-il-is-nobody',
        label: 'The il that is nobody',
        targets: ['err-impersonal-il'],
        say: 'A quarter of the il sentences you will meet are these.',
        questions: [
          {
            q: 'In « Il y a une table dans le salon », who is il?',
            format: 'mcq',
            opts: ['The person speaking', 'Nobody at all', 'A man mentioned earlier', 'The table'],
            correct: 1,
            why: 'il y a, il pleut and il est huit heures all use an il that refers to no one. This is a frame, not a person.',
            ref: 's10-noone',
          },
          {
            q: 'Which of these sentences has a real person behind its il?',
            format: 'mcq',
            opts: ['Il pleut.', 'Il fait beau.', 'Il est au comptoir du café.', 'Il faut réserver.'],
            correct: 2,
            why: 'Weather and il faut never have anyone behind them. Only the third is about somebody you could point at.',
            ref: 's10-noone',
          },
          {
            q: 'Write the three little words French uses for both there is and there are.',
            format: 'typeIn',
            accept: ['il y a'],
            answer: 'il y a',
            why: 'il y a covers both, and its il is nobody. Whether it means is or are lives in whatever follows it.',
            ref: 's10-noone',
          },
          {
            q: 'The impersonal il, as in « Il pleut », takes which form of the verb?',
            format: 'mcq',
            opts: ['The nous form', 'The same form as the il that means he', 'The vous form', 'It takes no verb at all'],
            correct: 1,
            why: 'It sits in exactly the same row as the il that means he, so nothing new has to be learned to use it.',
            ref: 's04-grid',
          },
          {
            q: 'Which of these is NOT one of the frames where il means nobody?',
            format: 'mcq',
            opts: ['il y a', 'il faut', 'il pleut', 'il arrive au café'],
            correct: 3,
            why: 'The first three never have anyone behind them. The fourth is a man arriving, so that il is a person.',
            ref: 's10-noone',
          },
        ],
      },
    ],
  },

  {
    type: 'roundup',
    id: 's22-roundup',
    title: 'What You Can Do Now',
    frSub: 'Ce que vous savez faire',
    say: 'Five things, and then the two lessons that pick this up.',
    body: 'You can now put the right word in front of a verb, which is the half of a French sentence that has to be settled before the verb exists. The next unit is être and the one after it is avoir. Both of them are verb tables, and you are walking in with the left-hand column already learned and with six rows to fill rather than nine.',
    points: [
      `${REFRAME} il, elle and on share one; ils and elles share another.`,
      'on means we, out loud, and takes the form il takes. Never « On sommes ».',
      'One man in a group of women, and the whole group is ils.',
      'vous is the polite singular AND the plain plural, and the word will not tell you which.',
      'il and ils are one sound, and so are elle and elles. The verb is what you listen for.',
    ],
  },
];

/* ─── The progress card counts the journey rather than restating it ────────
 *
 * Derived here rather than typed. It throws rather than degrades: a progress
 * card that silently reports "0 of 0" is worse than a build that stops.       */
{
  const ix = SECTIONS.findIndex((s) => (s as { id?: string }).id === 's20-progress');
  const card = SECTIONS[ix];
  const quiz = SECTIONS.find((s) => s.type === 'quiz');
  if (!card || card.type !== 'progressCheck' || !quiz || quiz.type !== 'quiz') {
    throw new Error('a1.05.l1: the progress card or the quiz is missing, so the card cannot count what is not there');
  }
  card.stats = [
    { k: 'Pronouns met', v: String(THE_NINE.length) },
    { k: 'Verb forms behind them', v: String(THE_SIX.length) },
    // `ix` is the count of sections BEFORE this one, which is exactly how many
    // missions the learner has finished when they reach it.
    { k: 'Missions done', v: `${ix} of ${SECTIONS.length}` },
    { k: 'Exam rounds ahead', v: String(quiz.rounds?.length ?? 0) },
  ];
}

/* ─── Acts ─────────────────────────────────────────────────────────────────
 *
 * `estScreens` is what the mission actually costs, not a guess rounded to a
 * nice number, because it is divided by the rest points to check no stretch
 * runs past the checkpoint-spacing limit of 22.                              */

const ACTS: LessonAct[] = [
  {
    id: 'act1',
    title: 'Who is in the room',
    sections: ['s01-scene', 's02-goals', 's03-collapse'],
    milestone: 'You have seen why nine words are only six decisions.',
    estScreens: 16,
    restPoints: ['s01-scene/after-break'],
  },
  {
    id: 'act2',
    title: 'The whole set, in one look',
    sections: ['s04-grid', 's05-singular', 's06-plural', 's07-earcheck'],
    milestone: 'You can find any of the nine on the table, and you know which two rows are shared.',
    estScreens: 21,
    restPoints: ['s05-singular/after-cards'],
  },
  {
    id: 'act3',
    title: 'The everyday we',
    sections: ['s08-on', 's09-onerrors', 's10-noone'],
    milestone: 'on means we and takes the il form, and you know which il means nobody.',
    estScreens: 14,
  },
  {
    id: 'act4',
    title: 'One, or more than one',
    sections: ['s11-vous', 's12-ils', 's13-flash'],
    milestone: 'You can tell vous doing one job from vous doing the other, and elles from ils.',
    estScreens: 22,
    restPoints: ['s13-flash/halfway'],
  },
  {
    id: 'act5',
    title: 'Out in the world',
    sections: ['s14-listen', 's15-speak', 's16-dictation', 's17-scenario', 's18-reading'],
    milestone: 'You have heard all nine, said them out loud and spelled the ones only a verb separates.',
    estScreens: 40,
    restPoints: ['s15-speak/halfway', 's16-dictation/halfway'],
  },
  {
    id: 'act6',
    title: 'Prove it',
    sections: ['s19-review', 's20-progress', 's21-quiz', 's22-roundup'],
    milestone: 'Lesson complete. être is next.',
    // Ten review cards, the progress card, thirty exam questions, up to six
    // drills with a retest each, and the roundup. Counted rather than rounded
    // to a nice number, because this figure is divided by the rest points to
    // check no stretch runs past the 22-screen checkpoint limit, and a
    // flattering estimate buys a lesson that passes the validator and exhausts
    // the learner.
    estScreens: 55,
    restPoints: ['s19-review/halfway', 's21-quiz/after-r2', 's21-quiz/after-r4'],
  },
];

/* ─── Deck tranches ────────────────────────────────────────────────────────
 *
 * One slice per act, index-aligned. An item is released the act it is TAUGHT,
 * not the act it is first mentioned: releasing the whole set at mission one
 * turns the flashcard hub into a wall on the morning the learner is least able
 * to read it. Acts 5 and 6 release nothing because they teach nothing new,
 * they apply and test what acts 1 to 4 handed over.                          */

const DECK_TRANCHE: string[][] = [
  ['167', '179', '168', '169'].map(c),
  [...PARADIGM, ...CONTRAST, c('174'), c('175')],
  [
    c('170'), c('171'), c('172'), c('173'),
    'fr.a1.maison.005', 'fr.a1.deplacements.262', 'fr.a1.ecole.124', 'fr.a1.ecole.262',
  ],
  [
    c('176'), c('177'), c('178'),
    'fr.a1.marche.110', 'fr.a1.objets.114', 'fr.a1.sports-et-loisirs.124',
    'fr.a1.marche.131', 'fr.a1.sports-et-loisirs.117',
    'fr.a1.objets.113', 'fr.a1.dictee.267',
    'fr.a1.cuisine.191', 'fr.a1.routines.125',
    'fr.a1.cafe.088', 'fr.a1.cafe.095', 'fr.a1.cafe.089',
    'fr.a1.cafe.090', 'fr.a1.cafe.091', 'fr.a1.cafe.100',
  ],
  [],
  [],
];

/* ─── Error triggers and their drills ──────────────────────────────────────
 *
 * A trigger names a mistake, the places it is watched for, the drill that fires
 * when it trips, and the check that closes the loop. The round `targets` above
 * point at these ids.
 *
 * SIX triggers and SIX rounds, one to one. `drillForRound` returns the first
 * target that resolves to a drill, so a round carrying two targets can only
 * ever fire the first one's drill and the second is decorative. The first draft
 * had four rounds over these six triggers and two drills were authored,
 * schema-valid and unreachable. The test caught it; the one-to-one mapping is
 * what stops it coming back.                                                 */

const ERROR_TRIGGERS: ErrorTrigger[] = [
  {
    id: 'err-wrong-person',
    description: 'Reaches for the wrong row of the table: il for a woman, tu for a group, nous where the room wants on.',
    detectOn: ['s04-grid', 's13-flash', 's21-quiz/r1-who-is-there'],
    drill: 'drill-read-the-room',
    retest: 'retest-read-the-room',
  },
  {
    id: 'err-on-agreement',
    description: 'Knows on means we and gives it the nous form, producing « On sommes ».',
    detectOn: ['s08-on', 's09-onerrors', 's21-quiz/r2-the-everyday-we'],
    drill: 'drill-on-form',
    retest: 'retest-on-form',
  },
  {
    id: 'err-vous-job',
    description: 'Reads every vous as the polite singular and answers for one person when a group was addressed.',
    detectOn: ['s11-vous', 's17-scenario', 's21-quiz/r3-vous-two-jobs'],
    drill: 'drill-vous-jobs',
    retest: 'retest-vous-jobs',
  },
  {
    id: 'err-ils-mixed',
    description: 'Uses elles for a group that has a man in it, usually because the women are the majority.',
    detectOn: ['s12-ils', 's21-quiz/r4-ils-and-elles'],
    drill: 'drill-elles-or-ils',
    retest: 'retest-elles-or-ils',
  },
  {
    id: 'err-hear-plural',
    description: 'Hears il/ils or elle/elles and guesses from the pronoun, which carries no information at all.',
    detectOn: ['s07-earcheck', 's14-listen', 's16-dictation', 's21-quiz/r5-by-ear'],
    drill: 'drill-count-by-verb',
    retest: 'retest-count-by-verb',
  },
  {
    id: 'err-impersonal-il',
    description: 'Reads « Il y a » or « Il pleut » as being about a man, and looks for one in the sentence before it.',
    detectOn: ['s10-noone', 's21-quiz/r6-il-is-nobody'],
    drill: 'drill-il-nobody',
    retest: 'retest-il-nobody',
  },
];

const DRILLS: LessonDrill[] = [
  {
    id: 'drill-read-the-room',
    title: 'Read the room, then pick',
    format: 'flashcard',
    coach: 'The room is on the left. Say the pronoun out loud before you turn the card.',
    pairs: [
      ['One woman', 'elle'],
      ['One friend you tutoie', 'tu'],
      ['You and one other person, at a table', 'on'],
      ['You and one other person, in a letter', 'nous'],
      ['Two friends you are speaking to', 'vous'],
      ['Four women and one man', 'ils'],
    ],
  },
  {
    id: 'retest-read-the-room',
    title: 'One more time',
    format: 'mcq',
    q: 'You are speaking to your neighbour and her husband, both at the door. Which pronoun?',
    opts: ['tu', 'vous', 'ils'],
    correct: 1,
    why: 'You are addressing them, so it is vous. ils would be for talking ABOUT them to somebody else.',
  },
  {
    id: 'drill-on-form',
    title: 'on takes the il form',
    format: 'sort',
    buckets: ['Takes est', 'Takes sommes'],
    // Item ids, not display strings: a drill scores against the corpus, so it
    // plays the same audio and reads the same spelling as every other card that
    // teaches these. Passing display strings here validates as broken ids.
    items: [c('158'), c('159'), c('167'), c('179'), c('168'), c('169'), c('163'), c('165')],
    coach: 'on goes with il and elle, not with nous. The meaning is no help here, so use the row.',
  },
  {
    id: 'retest-on-form',
    title: 'One more time',
    format: 'mcq',
    q: 'Three of you have arrived. Which is said?',
    opts: ['On sommes là.', 'On est là.', 'On sont là.'],
    correct: 1,
    why: 'on sits in the same row as il, so it takes est. The other two are not forms anyone uses.',
  },
  {
    id: 'drill-vous-jobs',
    title: 'Which job is vous doing?',
    format: 'sort',
    buckets: ['One person, politely', 'A group'],
    items: [c('177'), c('178'), c('160'), c('176'), 'fr.a1.objets.113', 'fr.a1.dictee.267'],
    coach: 'Count the people in the room, not the politeness. vous is the same word either way.',
  },
  {
    id: 'retest-vous-jobs',
    title: 'One more time',
    format: 'mcq',
    q: 'A waiter says « Vous êtes prêts ? » to your table of four. What is vous doing?',
    opts: ['Being polite to you alone', 'Addressing the whole table', 'Both, and you cannot tell'],
    correct: 1,
    why: 'The S on prêts marks the plural. Out loud you would not hear it, and the table in front of him would settle it.',
  },
  {
    id: 'drill-elles-or-ils',
    title: 'elles, or ils?',
    format: 'sort',
    buckets: ['elles', 'ils'],
    items: [
      c('162'), c('166'), 'fr.a1.marche.110', 'fr.a1.objets.114', 'fr.a1.sports-et-loisirs.124',
      c('161'), c('164'), 'fr.a1.marche.131', 'fr.a1.sports-et-loisirs.117',
    ],
    coach: 'Read the sentence and ask one question: could there be a man in this group? If yes, it is ils.',
  },
  {
    id: 'retest-elles-or-ils',
    title: 'One more time',
    format: 'mcq',
    q: 'Nine women and one man are in the queue. Which pronoun?',
    opts: ['elles', 'ils', 'on'],
    correct: 1,
    why: 'One man takes the whole group to ils. The proportion never matters.',
  },
  {
    id: 'drill-count-by-verb',
    title: 'Count from the verb',
    format: 'flashcard',
    coach: 'Read the verb, then say how many people. The pronoun is no help and you should stop looking at it.',
    pairs: [
      ['est', 'one person'],
      ['sont', 'two or more'],
      ['suis', 'one, and it is you'],
      ['sommes', 'two or more, including you'],
      ['êtes', 'one politely, or a group'],
    ],
  },
  {
    id: 'retest-count-by-verb',
    title: 'One more time',
    format: 'mcq',
    q: 'You hear « Elles sont en terrasse. » How many people?',
    opts: ['One', 'Two or more', 'Impossible to say'],
    correct: 1,
    why: 'sont is the plural form. elles on its own sounds exactly like elle, so the verb is doing all the work.',
  },
  {
    id: 'drill-il-nobody',
    title: 'Is there a man in this sentence?',
    format: 'sort',
    buckets: ['il is a person', 'il is nobody'],
    items: [c('156'), c('163'), 'fr.a1.cafe.095', c('171'), c('172'), c('173'), 'fr.a1.maison.005', 'fr.a1.deplacements.262'],
    coach: 'Weather, the clock and il y a never have anyone behind them. Everything else does.',
  },
  {
    id: 'retest-il-nobody',
    title: 'One more time',
    format: 'mcq',
    q: 'Which of these il sentences has a person in it?',
    opts: ['Il pleut.', 'Il est au comptoir du café.', 'Il y a vingt élèves.'],
    correct: 1,
    why: 'Only the middle one is about somebody. The other two use the il that refers to no one at all.',
  },
];

/* ─── Reference sheets ─────────────────────────────────────────────────────
 *
 * The full paradigm belongs here rather than in the flow, for a layout reason
 * as much as a pedagogical one: `tapTable` is not in ownsLayout(), so s04-grid
 * renders inside a scrolling page and a nine-row table would run past the fold
 * and take its chrome with it. Six rows fit; the ninth-row version lives here,
 * reachable from both s04-grid and s11-vous by `sheetId`.
 *
 * This is also the sheet a learner opens WHILE doing a1.06 next week, which is
 * the real reason to build it. Layer 'deep' exempts these from the core density
 * caps, which is the point: a sheet is allowed to be dense.                   */

const SHEETS: ReferenceSheet[] = [
  {
    id: 'sheet.a1.05.paradigm',
    title: 'The nine, the six, and the verb',
    layer: 'deep',
    contains: ['Every pronoun with its form of être', 'Which pronouns share a form', 'The other set of pronouns, named so you can put it down'],
    sections: [
      {
        type: 'table',
        id: 'sheet-paradigm-table',
        title: 'All nine, in paradigm order',
        layer: 'deep',
        cols: ['Pronoun', 'être', 'English'],
        rows: [
          ["je / j'", 'suis', 'I am'],
          ['tu', 'es', 'you are, one person, close'],
          ['il', 'est', 'he is, or it is (weather, the clock)'],
          ['elle', 'est', 'she is'],
          ['on', 'est', 'we are, said out loud'],
          ['nous', 'sommes', 'we are, written'],
          ['vous', 'êtes', 'you are, one person politely or any group'],
          ['ils', 'sont', 'they are, any group with a man in it'],
          ['elles', 'sont', 'they are, all women'],
        ],
      },
      {
        type: 'teach',
        id: 'sheet-paradigm-shared',
        title: 'What shares what',
        layer: 'deep',
        body: 'Nine rows above, six distinct forms in the middle column. il, elle and on all take est, which is why the third row of the in-lesson table holds three pronouns. ils and elles both take sont. Every other pronoun has a form to itself. This is not a fact about être: the same collapse happens on every verb in the language, which is why it is worth more than any single conjugation. When you meet the être table in the next lesson, the left-hand column is already learned and there are six endings to fill rather than nine.',
      },
      {
        type: 'teach',
        id: 'sheet-stressed',
        title: 'moi, toi, lui, eux, and why they are not here',
        layer: 'deep',
        body: 'You have already met « et toi ? » and « et vous ? », and toi is not the same kind of word as tu. moi, toi, lui, elle, nous, vous, eux and elles are STRESSED pronouns: they turn up after a preposition (avec moi), alone as an answer (Qui ? Moi.), and for emphasis (Moi, je prends un café). They are not subjects and they do not choose the verb form, so they are deliberately out of scope here. Note that nous, vous and elles appear in both sets and are spelled identically, which is why the two are easy to confuse and worth keeping apart until the stressed set gets its own lesson.',
      },
    ],
  },
];

export const PRONOMS_LESSON: Lesson = {
  id: 'a1.05.l1',
  unitId: 'a1.05',
  // The lesson's index WITHIN its unit, not its place in the track. Every
  // lesson in the seed is seq 1 because every unit ships exactly one so far,
  // and the `l1` in the id is this number.
  seq: 1,
  title: 'Les pronoms sujets',
  level: 'a1',
  // Nine, not five. missions.ts derives the eyebrow from unit.seq at render
  // time (`${level} · LEÇON ${unit.seq}`), and a1.05 sits at seq 9. The stored
  // value is a fallback and has to agree with what the renderer computes, or
  // the two disagree the moment something reads this field instead. a1.04.l1
  // ships that disagreement today: its stored tag says 04 and it renders as 06.
  tag: 'A1 · LEÇON 09',
  intro:
    'French makes you say who the sentence is about before you say anything else, and it gives you nine words to do it with. The useful part is that the nine sit behind only six forms of the verb, which is what makes the next two lessons possible.',

  sections: SECTIONS,
  itemIds: ITEM_IDS,
  // New lesson: the unit shipped with lessonIds: [].
  //
  // v2: the exam went from four rounds to six. The first draft carried six
  // error triggers across four rounds, and `drillForRound` returns the first
  // target that resolves to a drill, so two drills were authored, schema-valid
  // and unreachable. One round per trigger, thirty questions rather than
  // twenty-five, and the remediation is now sharper as well as reachable.
  //
  // v3: one errorSpot listed two accepted answers that fold() reduces to the
  // same string, which reads as two rules where there is one. The counter moves
  // for a one-line content fix because the batch refuses to overwrite its own
  // version number, and that refusal is what keeps "replacing vX with vY" in
  // the log honest.
  //
  // v4: two defects in s13-flash, both found on a device. The answer face
  // showed a bare pronoun while the speaker played a whole sentence that
  // appeared nowhere on screen; and one card's front named "The rain" as the
  // referent of an il that the lesson spends a mission establishing refers to
  // nobody. See the notes on the section.
  version: 4,

  grammarAssumed: [
    'The tu / vous distinction, introduced in a1.01',
    "Elision of le and la before a vowel sound, introduced in a1.03",
  ],
  grammarIntroduced: [
    'The nine subject pronouns, and the six verb forms they sit behind',
    'on as the everyday subject for nous, taking third-person-singular agreement',
    'ils for any mixed group, and elles only for a group that is entirely women',
    'vous as both the polite singular and the plain plural',
    'Impersonal il, in il y a, il faut and the weather and clock frames',
    "Elision of je to j' before a vowel sound",
  ],

  features: ['roleplay', 'voiceflash'],
  scenarioId: undefined,

  overview: {
    titleEn: 'Subject Pronouns',
    subFr: 'Les pronoms sujets',
    introFr: "Neuf pronoms, six formes du verbe. C'est ce qui rend la conjugaison possible.",
    minutes: 22,
    difficulty: 2,
    glyph: '👥',
    screens: 115,
  },

  acts: ACTS,
  reframe: REFRAME,
  errorTriggers: ERROR_TRIGGERS,
  drills: DRILLS,
  sheets: SHEETS,
  deckTranche: DECK_TRANCHE,
  terms: PRONOMS_TERMS,

  audio: {
    defaultLang: 'fr-FR',
    speeds: [1.0, 0.65],
    coachVoice: 'coach-en-warm',
    interfaceSounds: ['correct', 'incorrect', 'checkpoint'],
    // ── The single most important audio decision in this lesson ────────────
    //
    // `il` against `ils`, and `elle` against `elles`, are IDENTICAL in
    // isolation. The plural is audible only through the verb that follows. So a
    // brief that records the pronouns alone teaches nothing at all, and a brief
    // that records the two halves of a pair in different takes teaches the
    // difference between the recordings rather than the difference in French.
    //
    // Every pronoun clip in this lesson is therefore specified inside a short
    // phrase WITH its verb, and each contrast pair is specified as ONE take by
    // ONE voice at ONE speed. That instruction is invisible once the clips are
    // delivered, so it is pinned by a1-05-pronoms.test.ts as well as stated
    // here, the way sons.07's rec-h-pairs pins its own constraint.
    recorded: [
      {
        id: 'rec-a1-05-contrast-pairs',
        desc: 'The four contrast shorts, in two pairs, each pair recorded in ONE take by one voice at one speed with no gap between the halves: « Il est là. » then « Ils sont là. », then « Elle est là. » then « Elles sont là. ». Do not record the pronouns on their own, ever: il and ils are the same sound and a bare clip teaches nothing. Do not over-articulate the S of ils or elles; it is silent and making it audible would teach a pronunciation that does not exist. Also carries the six dictée sentences, which may be separate takes.',
        clipIds: ['Il est là.', 'Ils sont là.', 'Elle est là.', 'Elles sont là.', 'Il est au comptoir du café.', 'Ils sont au comptoir du café.', 'Elle est en terrasse ce matin.', 'Elles sont en terrasse ce matin.'],
      },
      {
        id: 'rec-a1-05-paradigm',
        desc: 'The nine paradigm sentences, one per pronoun, read in paradigm order in ONE take at conversational pace. Every clip carries its verb, because a pronoun alone cannot be identified by ear. Keep je, tu and on unstressed and quick: they are small function words and reading them carefully teaches a weight they never have in speech.',
        clipIds: ['Je suis à la terrasse.', 'Tu es en avance.', 'Il est au comptoir du café.', 'Elle est en terrasse ce matin.', 'On est trois à la terrasse.', 'Nous sommes trois à la terrasse.', 'Vous êtes combien ?', 'Ils sont au comptoir du café.', 'Elles sont en terrasse ce matin.'],
      },
      {
        id: 'rec-a1-05-on-nous',
        desc: 'The on/nous minimal pairs, each pair in ONE take back to back so the register difference is audible against itself rather than across two sessions: « On est là. » then « Nous sommes là. », and « On est trois à la terrasse. » then « Nous sommes trois à la terrasse. ». The on version should sound like speech and the nous version should sound like speech too, not like reading: the difference being taught is register, not care.',
        clipIds: ['On est là.', 'Nous sommes là.', 'On est trois à la terrasse.', 'Nous sommes trois à la terrasse.'],
      },
      {
        id: 'rec-a1-05-vous',
        desc: 'The register trio in ONE take: « Tu es prêt ? », « Vous êtes prêt ? », « Vous êtes prêts ? ». The last two must be indistinguishable, which is the whole teaching, so do not let a second take drift them apart and do not over-articulate the silent S on prêts.',
        clipIds: ['Tu es prêt ?', 'Vous êtes prêt ?', 'Vous êtes prêts ?'],
      },
      {
        id: 'rec-a1-05-scene',
        desc: 'The opening scene, French bubbles only, in the voice of one woman in her thirties speaking at an ordinary kitchen pace. The beat where she says it back (« Super. On est là à dix heures alors. ») must be warm rather than corrective: nobody in this scene is being told they were wrong.',
        clipIds: ['On est au marché à dix heures. Vous êtes libres ?', 'Super. On est là à dix heures alors.'],
      },
    ],
    ambienceDefault: 'off',
  },
};

/** Exported for the authoring script, the merge script and the tests, so none
 *  of them restates a count that can drift out of agreement with the content. */
export const PRONOMS_ITEM_IDS = ITEM_IDS;
export const PRONOMS_SPEAK_IDS = SPEAK_IDS;
export const PRONOMS_LISTEN_IDS = LISTEN_IDS;
export const PRONOMS_DICTATION_IDS = DICTATION_IDS;
export const PRONOMS_PARADIGM_IDS = PARADIGM;
export const PRONOMS_CONTRAST_IDS = CONTRAST;
