// a1.06.l1 "Le verbe être" — the mission journey.
//
// ── The two decisions the brief asked to be made and reported ──────────────
//
// 1. THE FOURTH USE IS IN. The canDo names three (who you are, what you do,
//    where you are from) and most courses teach a fourth: description and state,
//    `je suis fatigué`, `elle est grande`. It is here, as ONE mission inside the
//    origin act rather than as an act of its own, for three reasons.
//
//    The learner already has it. a1.01 taught gendered agreement on a bare
//    adjective (enchanté/enchantée, désolé/désolée), so `fatigué`/`fatiguée` is
//    a transfer and not new grammar. a1.05 shipped `Tu es prêt ?` and `Vous êtes
//    prêts ?` as corpus items last week, which ARE description, so excluding it
//    now would be pretending the learner has not met it.
//
//    And the c'est act needs it. The determiner test is "a little word in front
//    of the noun takes c'est; a BARE NOUN OR AN ADJECTIVE takes il est". Without
//    adjectives the rule cannot be stated in its general form and collapses back
//    into a1.11's fact about professions, which is exactly what this lesson
//    exists to get past.
//
//    It is kept the smallest of the four: three corpus items, one mission, and
//    no place in the roundup's headline claims.
//
// 2. THE `identite` THEME IS CLEARED, NOT CREATED. a1.06 shipped declaring
//    `themes: ["identite"]` and there is no such theme; 33 exist and it is not
//    one of them. So the binding has always resolved to nothing. It is removed
//    rather than honoured: a1.03, a1.04, a1.05 and a1.11 are grammar units with
//    no theme at all, a new theme is product-visible in the flashcard hub and
//    the Den, and this lesson draws from five themes. a1.07 declares the same
//    non-existent theme and inherits the same decision; it is NOT touched here,
//    because changing another unit's shipped body is that unit's build to make.
//
// ── The prerequisite exists, which the brief did not know ──────────────────
//
// The brief says "a1.05 Subject Pronouns is still empty" and instructs a plan
// for introducing nine pronouns and six verb forms in one lesson. That is stale.
// a1.05.l1 shipped on 2026-08-05: 22 sections, 45 items, and a nine-row paradigm
// reference sheet WHOSE MIDDLE COLUMN IS THE SIX FORMS OF ÊTRE. Its glossary
// term `etre` says, in as many words, "être itself is the next lesson".
//
// So this lesson is a payoff rather than an introduction, and the plan changed
// accordingly:
//
//   - No pronoun act, and no re-teaching of the collapse. s04-table is SIX rows
//     with the sharing named in its cells, not nine rows re-deriving a1.05.
//   - The paradigm corpus is six sentences, not nine. Six items that would have
//     restated last week's lesson are spent on origin instead, which had NOTHING
//     in the corpus.
//   - s03-nopattern opens by naming what is assumed, which is the single
//     orientation card the brief allows.
//
// ── Why the reframe is about strategy, not about grammar ───────────────────
//
// See the note on REFRAME in etre-terms.ts. Short version: it is the only
// candidate that changes what the learner DOES on the first screen, and the
// thing to do is stop hunting for a pattern that is not there.
//
// ── What this lesson does NOT do ──────────────────────────────────────────
//
// - NO avoir conjugation. `ils ont` appears exactly twice, as a listening line
//   and a listenChoose clip, because `ils sont` against `ils ont` is a real
//   minimal pair and it points at a1.07. It is never a corpus row and no form of
//   avoir other than `ont` is anywhere in the lesson.
// - NO passé composé. être is its auxiliary for a closed set of verbs and that
//   is a2.21 and a2.23. The learner has no past tense, so even a teaser would
//   land as noise.
// - NO stressed pronouns, no object pronouns. a1.05 put those out of scope and
//   nothing here reopens them.
//
// ── Layout notes that are bugs, not preferences ───────────────────────────
//
// - `tapTable` is NOT in ownsLayout() (LessonPager.tsx), so s04-table,
//   s09-identity, s12-origin and s16-contrast all render inside a SCROLLING
//   page. That is why s04-table is six rows and not nine, and why s16-contrast
//   is three rows: both are the sections most likely to run past the fold, and
//   the full versions live in sheets reached by `sheetId`.
// - `size` is not decoration. ownsLayout() ignores it; density.logic.ts reads
//   `xl` as a 12-word cap on EVERY string in the section. s05-forms is the only
//   xl section here and every card in it is a bare verb form, which is what
//   makes xl correct there and fatal anywhere else in this lesson.
// - `commonErrors` needs `swipe: true` or it renders a blank screen. See
//   s11-joberrors and s17-cesterrors.
// - `reading` needs `questionsInModal` WITH questions or its glossary reaches no
//   renderer at all. And PassagePage splits on sentence boundaries, so an
//   authored `\n` is swallowed: s22-reading is one line.
// - Three term chips per section, maximum. The renderer shows three and
//   collapses the rest.
//
// ── The open question the brief asked to be answered or left ──────────────
//
// "One primary action per screen" would make a scene's Continue an outline
// button rather than filled gold. This lesson does NOT change it, and nothing
// here makes the answer obvious: the scene's break card is the one screen where
// Continue is unambiguously the learner's own action rather than navigation, so
// demoting it would be worse here than elsewhere. Left as Paul's call.

import type {
  ErrorTrigger,
  Lesson,
  LessonAct,
  LessonDrill,
  LessonSection,
  ReferenceSheet,
  SceneBeat,
} from '../../../ealch-v2/src/content/schema.ts';
import { ETRE_TERMS, REFRAME } from './etre-terms.ts';
import { withScenarioAlts } from '../scenario-alts.logic.ts';
import {
  CONTRAST_PAIRS,
  ETRE_IDS,
  REUSED_IDS,
  THE_SIX,
  THE_USES,
  familyIds,
  fr,
  sub,
  useIds,
} from './etre-corpus.ts';

export { REFRAME };

/* ─── The items this lesson touches ────────────────────────────────────────
 *
 * 32 authored (see etre-corpus.ts for why so many) plus 13 reused by id and
 * untouched. Every id here resolves; the batch re-checks the reused half against
 * POSTGRES rather than the seed, because the two drift and an id that exists
 * only in the seed renders as an empty card.                                  */

const m = (n: string) => `fr.a1.metiers.${n}`;

/** The six paradigm sentences, one per form, in paradigm order. */
const PARADIGM = familyIds('paradigm');

/** Spoken practice draws only from items carrying `voiceflash`, because that is
 *  the drill the mic-scored deck runs. Every authored item has it; the REUSED
 *  half largely does not, which is why this list is authored ids plus the two
 *  a1.05 sentences that do. Asserted in a1-06-etre.test.ts so a corpus edit that
 *  strips the tag fails there rather than on a device. */
const SPEAK_IDS = [
  ...PARADIGM,
  m('260'), m('264'), m('265'), m('268'),
  m('274'), m('275'), m('279'),
  'fr.a1.cafe.160', 'fr.a1.cafe.177',
];

/** The dictée is the only surface where the learner has to PRODUCE a form from
 *  nothing but sound.
 *
 *  SEVEN items, and the set is chosen by the renderer rather than by taste. A
 *  dictée sentence has to clear dicteeMode()'s 16-letter threshold or the
 *  learner gets a bank of single letters with no word boundaries, which is a
 *  patience test rather than a dictée. That rules out every short sentence this
 *  lesson would otherwise have wanted here: `Ils sont en retard.` is 15 letters
 *  and `Vous êtes en retard.` is exactly 16, so both fall to letter mode.
 *
 *  What survives is the six paradigm sentences, which is the right set anyway,
 *  plus one origin sentence. The batch and the test both check this through the
 *  REAL module rather than a restated threshold. */
const DICTATION_IDS = [...PARADIGM, m('269')];

const ITEM_IDS = [...new Set([...ETRE_IDS, ...REUSED_IDS])];

/* ─── Mission 1 · Scene ────────────────────────────────────────────────────
 *
 * The A1 register of stakes is being misread as a person, not being
 * misunderstood. So nothing here fails to communicate. The learner says `Il est
 * un médecin`, is understood perfectly, and the other person repeats it back
 * without the un: the correction that is not a correction, which is what
 * actually happens to beginners and is why the error survives for years.
 *
 * The choice beat is `il est médecin` against `il est un médecin` because that
 * is the error every English speaker makes, English requires the article, and it
 * is the exact rule act 5 is built on. Committing to it in mission 1 is what
 * makes mission 15 feel like an answer rather than an announcement.
 *
 * Beats are extracted to a named const, each with its own `size` and `audio`,
 * the way sons.06, a1.01 and a1.05 settled it. The section sets NO size:
 * ownsLayout() ignores it and density.logic.ts would read xl as a 12-word cap
 * on prose.                                                                   */

const SCENE_BEATS: SceneBeat[] = [
  {
    kind: 'narration',
    size: 'md',
    text: 'A badge table at a conference in Lyon. You have the greetings. What nobody gave you is the sentence that comes after them.',
    audio: { mode: 'tts', voice: 'coach' },
  },
  {
    kind: 'bubble',
    from: 'them',
    reveal: 'tap',
    size: 'md',
    speaker: 'Sylvie',
    fr: 'Bonjour ! Vous êtes ici pour la conférence ?',
    en: 'Hello! Are you here for the conference?',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a1-06-scene' },
  },
  {
    kind: 'bubble',
    from: 'you',
    reveal: 'auto',
    size: 'md',
    fr: 'Oui. Je suis architecte.',
    en: 'Yes. I am an architect.',
    stage: 'That lands. She nods and points at the man beside her.',
    audio: { mode: 'tts', lang: 'fr-FR' },
  },
  {
    kind: 'bubble',
    from: 'them',
    reveal: 'tap',
    size: 'md',
    speaker: 'Sylvie',
    fr: 'Et lui ?',
    en: 'And him?',
    audio: { mode: 'tts', lang: 'fr-FR', recordingId: 'rec-a1-06-scene' },
  },
  {
    kind: 'choice',
    size: 'lg',
    prompt: 'He is a doctor. What goes back?',
    options: [
      {
        fr: 'Il est un médecin.',
        en: 'the one English hands you',
        outcome: 'breaks',
        audio: { mode: 'tts', lang: 'fr-FR' },
      },
      {
        fr: fr(m('275')),
        en: 'the one with nothing in the middle',
        outcome: 'works',
        audio: { mode: 'tts', lang: 'fr-FR' },
      },
    ],
    followUp: {
      works: 'Yes, and nothing between est and médecin. Watch why the other one is so hard to shake.',
      breaks: 'You will be understood. Watch what happens next anyway.',
    },
  },
  {
    kind: 'bubble',
    from: 'them',
    reveal: 'auto',
    size: 'md',
    speaker: 'Sylvie',
    fr: 'Ah, il est médecin. Très bien.',
    en: 'Ah, he is a doctor. Very good.',
    stage: 'Nobody corrects you. She just says it back without the un.',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a1-06-scene' },
  },
  {
    kind: 'break',
    size: 'lg',
    // Two words shorter than it wants to be, for a measured reason. The break
    // heading renders at display size and wraps at roughly three words a line,
    // so every extra word costs about 85px of card and pushes Continue further
    // under the pager bar. A seven-word heading wrapped to three lines and ate
    // the whole saving from trimming the body; this is one.
    heading: 'She dropped a word',
    // 25 words, trimmed from 30 after a device pass on 2026-08-05.
    //
    // The nine shipped scenes run 24 to 40 words here, so 30 was inside the
    // house range and still wrong for THIS card: the break stacks a heading, two
    // reading rows carrying BOTH ipa and respell, the body and the coach line,
    // and `scene` is absent from ownsLayout() so it cannot size itself. On a
    // Pixel 6 that pushed the card's own Continue below the fold on first paint.
    // It scrolled and was reachable, so nothing was broken; it just asked the
    // learner to go looking for the button on the one screen the scene exists to
    // deliver. Heading, body and coach were all cut to bring it back up.
    body: 'English needs a word in front of a job and French forbids one. Nobody corrects this, because you were understood. That is why it lasts.',
    wrong: {
      fr: 'Il est un médecin.',
      ipa: '/i lɛ tœ̃ med.sɛ̃/',
      en: 'understood, and not French',
    },
    right: {
      fr: fr(m('275')),
      ipa: '/i lɛ med.sɛ̃/',
      respell: sub(m('275')),
      en: 'the gap is the grammar',
    },
    coach: 'The one place it comes back is the last act.',
    // Audio-first: the ear answers before the eye can. `autoplay` is NOT set. It
    // is declared in schema.ts and implemented in no component, so setting it
    // would look like it did something.
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], audioFirst: true, recordingId: 'rec-a1-06-cest-pairs' },
  },
  {
    kind: 'resolve',
    size: 'md',
    text: 'Four sentences into a first meeting and you have used the verb three times. That is the whole case for learning it outright.',
  },
];

const SECTIONS: LessonSection[] = [
  /* ── Act 1: the verb that gives you nothing ──────────────────────────── */

  {
    type: 'scene',
    id: 's01-scene',
    title: 'The Word She Left Out',
    frSub: "Le mot qu'elle n'a pas dit",
    render: 'screens',
    layer: 'core',
    terms: ['noArticle'],
    say: {
      text: 'A first meeting, and you will be understood throughout. Watch the one word that goes missing.',
      voice: 'coach',
      timing: 'onFirstVisitOnly',
    },
    setting: {
      place: 'A conference badge table',
      city: 'Lyon',
      time: 'Tuesday, just before nine',
      ambience: 'room-tone-lobby',
    },
    beats: SCENE_BEATS,
    // The reframe is referenced, never retyped, so this appearance cannot drift
    // out of agreement with the others the density validator counts.
    closing: {
      size: 'md',
      text: `${REFRAME} You met three of the six in that exchange without being taught one of them.`,
    },
  },

  {
    type: 'goals',
    id: 's02-goals',
    title: 'What You Will Be Able To Do',
    frSub: 'Ce que vous saurez faire',
    layer: 'core',
    say: `${REFRAME} By the end you will have all six and know which sentence wants which.`,
    goals: [
      { t: 'Say who you are', s: 'Give your name, and point at someone else without reaching for the wrong word.' },
      { t: 'Say what you do', s: 'Name your job the way French does it, with nothing in front of it.' },
      { t: 'Say where you are from', s: 'Both ways, and know which of the two has to agree with you.' },
      { t: "Choose c'est or il est", s: 'By one mechanical test you can run in the moment, not by feel.' },
    ],
  },

  {
    type: 'cardDeck',
    id: 's03-nopattern',
    title: 'This One Has No Pattern',
    frSub: 'Aucun modèle',
    hint: 'Swipe through the four cards.',
    render: 'deck',
    layer: 'core',
    size: 'lg',
    terms: ['etre', 'sixForms'],
    say: 'Read this one properly. It decides what you should be doing for the next twenty minutes.',
    cards: [
      {
        label: 'What you already have',
        head: 'The left column is done',
        body: 'You met the nine subject pronouns last lesson, and that il, elle and on share one form while ils and elles share another. Nothing here re-teaches that.',
      },
      {
        label: 'The usual deal',
        head: 'Most verbs give you a stem',
        fr: 'parler → parl-',
        sub: 'stem plus six endings',
        body: 'Learn one pattern and hundreds of verbs come with it. That is the deal French offers almost everywhere.',
      },
      {
        label: 'The exception',
        head: 'This one gives you nothing',
        fr: 'suis · es · est',
        sub: 'no shared stem at all',
        body: 'These three are not versions of one word. There is nothing to derive, and looking for it wastes the time you could spend memorising.',
      },
      {
        label: 'The trade',
        head: 'and pays you back immediately',
        body: `${REFRAME} Six words to learn outright, and you will use one of them in almost every sentence you say this week.`,
      },
    ],
  },

  /* ── Act 2: the six forms ────────────────────────────────────────────── */

  {
    type: 'tapTable',
    id: 's04-table',
    title: 'The Six, In One Table',
    frSub: 'Les six formes',
    layer: 'core',
    terms: ['sixForms', 'etre'],
    sheetId: 'sheet.a1.06.paradigm',
    say: `${REFRAME} Six rows for nine pronouns, because two rows are shared. Tap any row to hear it.`,
    cols: ['Pronoun', 'être', 'Example'],
    rows: [
      {
        cells: ["je / j'", 'suis', fr(m('249'))],
        say: fr(m('249')),
        detail: {
          title: 'je suis',
          body: 'The form you will say more than all the others together, because most of what a beginner says is about themselves. It shortens to j\'y and j\'en later; with être it never elides, because suis starts on a consonant.',
          say: fr(m('255')),
        },
      },
      {
        cells: ['tu', 'es', fr(m('250'))],
        say: fr(m('250')),
        detail: {
          title: 'tu es',
          body: 'Two letters and no S sound. It is said exactly like est, so the only thing separating tu es from il est out loud is the pronoun in front.',
          say: fr(m('262')),
        },
      },
      {
        cells: ['il · elle · on', 'est', fr(m('251'))],
        say: fr(m('251')),
        detail: {
          title: 'The row that does the work',
          body: 'Three pronouns, one form, and the T is silent. on means we and still takes this form, which is the mismatch a1.05 spent a mission on.',
          say: fr('fr.a1.cafe.167'),
        },
      },
      {
        cells: ['nous', 'sommes', fr(m('252'))],
        say: fr(m('252')),
        detail: {
          title: 'nous sommes',
          body: 'The doubled m really is pronounced, so this is not a nasal vowel: it ends on a clear M. Out loud, most rooms use on and est instead.',
          say: fr('fr.a1.cafe.159'),
        },
      },
      {
        cells: ['vous', 'êtes', fr(m('253'))],
        say: fr(m('253')),
        detail: {
          title: 'vous êtes',
          body: 'The only row where the pronoun and the verb bind out loud. The silent S of vous wakes up in front of the vowel and the two are said as one word.',
          say: fr('fr.a1.cafe.160'),
        },
      },
      {
        cells: ['ils · elles', 'sont', fr(m('254'))],
        say: fr(m('254')),
        detail: {
          title: 'ils sont',
          body: 'A nasal vowel and a silent T. Hold this one carefully: ils ont is a different verb entirely and the two are separated by a single sound.',
          say: fr(m('280')),
        },
      },
    ],
  },

  {
    // The only xl section in the lesson, and the one place xl is correct: every
    // card here is a bare verb form of one or two words. density.logic.ts caps
    // EVERY string in an xl section at 12 words, which is why the teaching lives
    // in the table above and this is a hero deck rather than an explanation.
    type: 'cardDeck',
    id: 's05-forms',
    title: 'One At A Time',
    frSub: 'Une forme par écran',
    hint: 'Swipe. Say each one out loud before you move on.',
    render: 'deck',
    layer: 'core',
    size: 'xl',
    say: 'Six screens, one form each. Say it out loud before you swipe, every time.',
    cards: [
      { label: '1 of 6', fr: 'je suis', sub: '[zhuh SWEE]', body: 'I am.' },
      { label: '2 of 6', fr: 'tu es', sub: '[tü EH]', body: 'You are. No S sound.' },
      { label: '3 of 6', fr: 'il est', sub: '[ee LEH]', body: 'He is. No T sound.' },
      { label: '4 of 6', fr: 'nous sommes', sub: '[noo SOM]', body: 'We are.' },
      { label: '5 of 6', fr: 'vous êtes', sub: '[voo ZET]', body: 'You are. One word out loud.' },
      { label: '6 of 6', fr: 'ils sont', sub: '[eel SOHⁿ]', body: 'They are. No T sound.' },
    ],
  },

  {
    type: 'groupDrill',
    id: 's06-sort',
    title: 'Which Form Goes With Which',
    frSub: 'Le bon accord',
    layer: 'core',
    terms: ['sixForms'],
    say: 'Read the pronoun, say the form, then check. No pattern will help you here, which is the point.',
    groups: [
      {
        label: 'The singular three',
        items: [
          { fr: 'je suis', itemId: m('249'), respell: '[zhuh SWEE]', en: 'I am' },
          { fr: 'tu es', itemId: m('250'), respell: '[tü EH]', en: 'you are' },
          { fr: 'il est', itemId: m('251'), respell: '[ee LEH]', en: 'he is' },
        ],
        check: {
          q: 'Which of these is the form that follows on?',
          opts: ['suis', 'sommes', 'est', 'sont'],
          correct: 2,
          why: 'on means we and takes the form il takes, so it is est. That collapse was a1.05\'s and it holds for every verb.',
        },
      },
      {
        label: 'The plural three',
        items: [
          { fr: 'nous sommes', itemId: m('252'), respell: '[noo SOM]', en: 'we are' },
          { fr: 'vous êtes', itemId: m('253'), respell: '[voo ZET]', en: 'you are' },
          { fr: 'ils sont', itemId: m('254'), respell: '[eel SOHⁿ]', en: 'they are' },
        ],
        check: {
          q: 'You are speaking to one stranger, politely. Which form?',
          opts: ['es', 'est', 'êtes', 'sommes'],
          correct: 2,
          why: 'vous takes êtes whether it is one person politely or a whole group. The word alone never tells you which job it is doing.',
        },
      },
    ],
  },

  {
    type: 'cardDeck',
    id: 's07-liaison',
    title: 'The Join In Vous Êtes',
    frSub: 'La liaison',
    hint: 'Swipe through the three cards.',
    render: 'deck',
    layer: 'core',
    size: 'lg',
    terms: ['vousLiaison'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a1-06-liaison' },
    say: 'One form in the six behaves differently out loud, and it is the one you cannot hear yourself get wrong.',
    cards: [
      {
        label: 'The rule',
        head: 'The silent S wakes up',
        fr: fr(m('253')),
        sub: sub(m('253')),
        body: 'vous ends in a silent S. êtes starts on a vowel. The S comes back as a Z and the two words are said as one.',
      },
      {
        label: 'The error',
        head: 'A gap that marks you',
        fr: 'voo · ZET',
        sub: 'never voo, then ETT',
        body: 'Said with a pause it is still understood, and it is the kind of error nobody mentions and nobody misses either.',
      },
      {
        label: 'Where you meet it',
        head: 'You already know this one',
        fr: fr('fr.a1.cafe.160'),
        body: 'At the door of every restaurant in France. You have heard it as one word since your first week without knowing it was two.',
      },
    ],
  },

  {
    type: 'listening',
    id: 's08-ear',
    title: 'Two Verbs, One Syllable Apart',
    frSub: "À l'oreille",
    layer: 'core',
    questionsInModal: true,
    terms: ['sixForms', 'vousLiaison'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a1-06-sont-ont' },
    // `Ils ont un rendez-vous.` is the ONLY avoir in this lesson and it is a
    // display line, not a corpus row. Naming the pair once is a forward pointer
    // to a1.07; building a mission on it would be taking a1.07's material.
    say: 'Two of these are not this verb at all. The difference is one sound and it is the whole meaning.',
    lines: [
      { fr: fr(m('280')), en: 'They are late.' },
      { fr: 'Ils ont un rendez-vous.', en: 'They have an appointment.' },
      { fr: fr(m('253')), en: 'Are you here for the conference?' },
      { fr: fr(m('250')), en: 'Are you here for the conference?' },
    ],
    questions: [
      {
        q: '« Ils sont » and « ils ont » differ by one sound. Which one?',
        opts: ['The vowel in ils', 'An S at the start of the verb', 'The length of the pause', 'Nothing, they are identical'],
        correct: 1,
        why: 'ils sont starts on an S. ils ont has a Z join instead, carried over from the silent S of ils. One sound, and a different verb.',
      },
      {
        q: 'You hear « voo ZET » as a single word. What are the two words?',
        opts: ['vous es', 'vous êtes', 'vous sont', 'vous étés'],
        correct: 1,
        why: 'The Z is the silent S of vous waking up in front of the vowel. It is one word out loud and two on the page.',
      },
      {
        q: 'Out loud, « tu es » and « il est » end on the same sound. What separates them?',
        opts: ['The verb', 'The pronoun in front', 'The T at the end of est', 'The S at the end of es'],
        correct: 1,
        why: 'Both verbs are said the same way: the S of es and the T of est are silent. Only the pronoun does the telling.',
      },
    ],
  },

  /* ── Act 3: who you are, and what you do ─────────────────────────────── */

  {
    type: 'tapTable',
    id: 's09-identity',
    title: 'Saying Who Someone Is',
    frSub: "L'identité",
    layer: 'core',
    terms: ['determinerTest'],
    say: 'Yourself takes one shape and somebody else takes another. Tap any row to hear it.',
    cols: ['The situation', 'What you say', 'Why that one'],
    rows: [
      {
        cells: ['Your own name', fr(m('255')), 'nothing in front'],
        say: fr(m('255')),
        detail: {
          title: 'je suis plus a name',
          body: 'A name is already as specific as a word can be, so nothing goes in front of it. This is the same shape as je suis architecte.',
          say: fr(m('255')),
        },
      },
      {
        cells: ['Pointing at a person', fr(m('256')), 'c\'est, not il est'],
        say: fr(m('256')),
        detail: {
          title: "c'est plus a name",
          body: 'Introducing somebody is pointing at them, and pointing takes c\'est. Il est Marc is not how this is said.',
          say: fr(m('258')),
        },
      },
      {
        cells: ['Someone of yours', fr(m('257')), 'ma is a little word'],
        say: fr(m('257')),
        detail: {
          title: "c'est plus my something",
          body: 'ma, mon, ton and votre are all little words in front of the noun, and any one of them puts the sentence on c\'est. This is the test act 5 turns into a rule.',
          say: fr(m('257')),
        },
      },
      {
        cells: ['More than one person', fr(m('259')), 'ce sont, the plural'],
        say: fr(m('259')),
        detail: {
          title: 'ce sont',
          body: 'The plural of c\'est, and the form almost everyone forgets exists. c\'est mes parents is what a beginner says and it is not right.',
          say: fr(m('259')),
        },
      },
    ],
  },

  {
    type: 'examples',
    id: 's10-jobs',
    title: 'What A Job Takes After Être',
    frSub: 'Après être, rien',
    layer: 'core',
    terms: ['noArticle'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65] },
    say: 'Nothing. English needs a word here and French forbids one, so this error is guaranteed and it is audible. Tap any line.',
    examples: [
      { fr: fr(m('260')), en: 'I am an architect.', note: 'No un. The gap after suis is the grammar.' },
      { fr: fr('fr.a1.metiers.244'), en: 'I am a teacher.', note: 'a1.11 taught you this one. It holds for every form of the verb, not only for je suis.' },
      { fr: fr(m('261')), en: 'She is a nurse.', note: 'Same after elle est. The job noun changes for a woman; nothing appears in front of it.' },
      { fr: fr(m('262')), en: 'Are you a student?', note: 'And after tu es. Being a student counts as a job for this rule.' },
      { fr: fr(m('263')), en: 'Are you an engineer?', note: 'And after vous êtes, with the liaison running straight into it.' },
    ],
  },

  {
    type: 'commonErrors',
    id: 's11-joberrors',
    // `swipe` and `size` are not decoration. MissionSection renders commonErrors
    // as its own swipe deck ONLY when `swipe` is set, and without it a1.01
    // mission 5 drew a blank screen on a device. Every v2 lesson sets both.
    swipe: true,
    size: 'lg',
    title: 'Three Ways The Job Goes Wrong',
    frSub: 'Trois pièges',
    layer: 'core',
    terms: ['noArticle'],
    say: 'Three mistakes, and all three come from English being helpful.',
    errors: [
      {
        wrong: 'Saying « Je suis un architecte. »',
        right: 'Saying « Je suis architecte. »',
        why: 'English cannot say "I am architect" and French cannot say the other one. The word you want to insert is the word to leave out.',
      },
      {
        wrong: 'Saying « Je suis un français. »',
        right: 'Saying « Je suis français. »',
        why: 'A nationality behaves like a job here: nothing in front of it. It is an adjective, and an adjective never took an article in the first place.',
      },
      {
        wrong: 'Writing « Je suis Français. » with a capital F.',
        right: 'Writing « Je suis français. » with a small f.',
        why: 'English capitalises the adjective and French does not. The capital is kept for the noun, as in un Français, which is a different sentence.',
      },
    ],
  },

  /* ── Act 4: where you are from, and how you are ──────────────────────── */

  {
    type: 'tapTable',
    id: 's12-origin',
    title: 'Where You Are From, Two Ways',
    frSub: "L'origine",
    layer: 'core',
    terms: ['originShapes'],
    sheetId: 'sheet.a1.06.uses',
    say: 'One question, two answers, and only one of them changes depending on who is speaking. Tap any row.',
    cols: ['What you say', 'Shape', 'Does it agree?'],
    rows: [
      {
        cells: [fr(m('264')), 'adjective', 'yes'],
        say: `${fr(m('264'))} ${fr(m('265'))}`,
        detail: {
          title: 'The nationality',
          body: 'français for a man, française for a woman, and here you can hear the difference: the e wakes the s. Lowercase f, always.',
          say: fr(m('265')),
        },
      },
      {
        cells: [fr(m('268')), 'de plus a place', 'no'],
        say: fr(m('268')),
        detail: {
          title: 'The town',
          body: 'de plus wherever you are from. It does not agree with anything and never changes, whoever is saying it.',
          say: fr(m('269')),
        },
      },
      {
        cells: [fr(m('267')), 'adjective, plural', 'yes'],
        say: fr(m('267')),
        detail: {
          title: 'A whole group',
          body: 'The adjective takes the group with it. The s is silent, so this agreement exists only on the page.',
          say: fr(m('266')),
        },
      },
      {
        cells: [fr(m('270')), 'the question', 'not a form'],
        say: fr(m('270')),
        detail: {
          title: 'How to ask',
          body: 'de plus où, elided to d\'où. It is the question that gets you either answer, and it is worth having ready.',
          say: fr(m('270')),
        },
      },
    ],
  },

  {
    type: 'cardDeck',
    id: 's13-agreement',
    title: 'The E You Sometimes Hear',
    frSub: "L'accord",
    hint: 'Swipe through the four cards.',
    render: 'deck',
    layer: 'core',
    size: 'lg',
    terms: ['silentAgreement', 'originShapes'],
    say: 'You already do this. a1.01 had you writing enchantée with an extra e and saying nothing different.',
    cards: [
      {
        label: 'Already yours',
        head: 'You met this in lesson one',
        fr: 'enchanté · enchantée',
        sub: 'one sound, two spellings',
        body: 'An adjective agrees with whoever it describes. Nothing new is being asked, only applied to a longer list of words.',
      },
      {
        label: 'Silent',
        head: 'Often you hear nothing',
        fr: fr(m('272')),
        sub: sub(m('272')),
        body: 'Identical out loud to the masculine. The agreement is real, it matters in writing, and your ear gets no help at all.',
      },
      {
        label: 'Audible',
        head: 'and sometimes you do',
        fr: fr(m('273')),
        sub: sub(m('273')),
        body: 'Here the e wakes the d and you can hear it. Grand and grande are genuinely different sounds.',
      },
      {
        label: 'The rule of thumb',
        head: 'A consonant before the e wakes up',
        fr: 'français · française',
        sub: 'the s comes alive',
        body: 'If the masculine ends on a silent consonant, adding the e sounds it. If it ends on a vowel, nothing changes.',
      },
    ],
  },

  {
    type: 'examples',
    id: 's14-state',
    title: 'How You Are Right Now',
    frSub: "L'état",
    layer: 'core',
    terms: ['silentAgreement'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65] },
    // The fourth use, and deliberately ONE mission. See the header for the
    // argument. It is here because the c'est rule needs adjectives to be
    // statable in general form, and because a learner who can say who they are
    // and not how they are has a strange gap.
    say: 'The fourth thing this verb does, and the smallest. Same agreement as the last screen, different words.',
    examples: [
      { fr: fr(m('271')), en: 'I am tired.', note: 'A man says this. A woman writes fatiguée and says the same thing.' },
      { fr: fr(m('273')), en: 'She is tall.', note: 'And here the agreement sounds: the e wakes the d.' },
      { fr: fr('fr.a1.cafe.177'), en: 'Are you ready?', note: 'You met this in a1.05. It was this use of the verb all along.' },
      { fr: fr(m('279')), en: 'You are late.', note: 'en retard does not agree with anyone. Not every state is an adjective.' },
      { fr: fr('fr.a1.corps.216'), en: 'You should rest if you are tired.', note: 'One of only four tu es sentences in the whole corpus, and it hides inside a longer one.' },
    ],
  },

  /* ── Act 5: c'est against il est ─────────────────────────────────────── */

  {
    type: 'cardDeck',
    id: 's15-test',
    title: 'One Test, Not A Feeling',
    frSub: "C'est ou il est",
    hint: 'Swipe through the five cards.',
    render: 'deck',
    layer: 'core',
    size: 'lg',
    terms: ['determinerTest', 'noArticle'],
    say: 'This is the part of the lesson you will still be using in two years. One question, asked of the words after the verb.',
    cards: [
      {
        label: 'The question',
        head: 'Look at what follows the verb',
        body: 'Not at the meaning, and not at whether it is a person. Look at whether a little word sits in front of the noun.',
      },
      {
        label: 'Little word',
        head: "There is one, so c'est",
        fr: fr(m('274')),
        sub: 'un is the little word',
        body: 'un, une, le, la, mon, ma, votre. Any one of them and the sentence takes c\'est.',
      },
      {
        label: 'Bare noun',
        head: 'There is none, so il est',
        fr: fr(m('275')),
        sub: 'nothing in front of médecin',
        body: 'Same doctor, same fact, and no little word. That is what il est is for.',
      },
      {
        label: 'Adjective',
        head: 'An adjective counts as bare',
        fr: fr(m('273')),
        sub: 'grande is not a noun',
        body: 'Describing rather than naming, so il est or elle est. This is the half a1.11 could not reach.',
      },
      {
        label: 'The one to remember',
        head: 'A name is already specified',
        fr: fr(m('256')),
        sub: 'so it behaves like a little word',
        body: 'A name cannot be made more specific, so pointing at Marc takes c\'est rather than il est.',
      },
    ],
  },

  {
    type: 'tapTable',
    id: 's16-contrast',
    title: 'The Same Person, Twice',
    frSub: 'Le même homme, deux phrases',
    layer: 'core',
    terms: ['determinerTest'],
    sheetId: 'sheet.a1.06.uses',
    // Two columns, one screen. The comparison IS the rule, so putting the halves
    // on two card decks would be teaching a comparison the learner never sees
    // made. Three rows: tapTable is not in ownsLayout(), so this renders inside a
    // scrolling page and a longer table runs past the fold. The full set is in
    // sheet.a1.06.uses.
    say: 'Read across, not down. Same person and same job on each row, and only one thing moves.',
    // The columns name the TEST, not two forms, and that is a device finding
    // rather than a preference. Headed `c'est` / `il est`, the third row put
    // a1.11's `Je suis professeur.` under a column labelled `il est`, which is a
    // visible contradiction on the one screen the whole act is built around.
    // Naming the two sides of the rule instead is true of all three rows, and it
    // puts the determiner test in the table header where the comparison is.
    cols: ['With a little word', 'Without one', 'What moved'],
    rows: [
      {
        cells: [fr(CONTRAST_PAIRS[0][0]), fr(CONTRAST_PAIRS[0][1]), 'un appeared'],
        say: `${fr(CONTRAST_PAIRS[0][0])} ${fr(CONTRAST_PAIRS[0][1])}`,
        detail: {
          title: 'The doctor, twice',
          body: 'One man, one job, two sentences, both correct. The left one has a little word in front of the noun and the right one does not. Nothing else differs.',
          say: fr(CONTRAST_PAIRS[0][1]),
        },
      },
      {
        cells: [fr(CONTRAST_PAIRS[1][0]), fr(CONTRAST_PAIRS[1][1]), 'le appeared'],
        say: `${fr(CONTRAST_PAIRS[1][0])} ${fr(CONTRAST_PAIRS[1][1])}`,
        detail: {
          title: 'The definite one counts too',
          body: 'The test is any little word, not the indefinite one specifically. le, la, mon and ma all put the sentence on c\'est.',
          say: fr(CONTRAST_PAIRS[1][0]),
        },
      },
      {
        cells: [fr(CONTRAST_PAIRS[2][0]), fr(CONTRAST_PAIRS[2][1]), 'a1.11 taught this pair'],
        say: `${fr(CONTRAST_PAIRS[2][0])} ${fr(CONTRAST_PAIRS[2][1])}`,
        detail: {
          title: 'The pair you already met',
          body: 'a1.11 gave you these two as a fact about professions. They are really one instance of the little-word test, which also covers things, ideas and names.',
          say: fr(CONTRAST_PAIRS[2][0]),
        },
      },
    ],
  },

  {
    type: 'commonErrors',
    id: 's17-cesterrors',
    swipe: true,
    size: 'lg',
    title: "Where C'est And Il Est Go Wrong",
    frSub: 'Les erreurs classiques',
    layer: 'core',
    terms: ['determinerTest'],
    say: 'Four, and the first is the one the scene opened on.',
    errors: [
      {
        wrong: 'Saying « Il est un médecin. »',
        right: 'Saying « Il est médecin. »',
        why: 'A little word appeared with il est, which is the one thing il est does not take. Either drop the un, or keep it and switch to c\'est un médecin.',
      },
      {
        wrong: 'Saying « Il est Marc. »',
        right: 'Saying « C\'est Marc. »',
        why: 'A name is already fully specified, so it behaves like a noun with a little word in front. Pointing at a person takes c\'est.',
      },
      {
        wrong: 'Saying « Il est une bonne idée. »',
        right: 'Saying « C\'est une bonne idée. »',
        why: 'il est needs somebody or something to refer back to. An idea, a situation or a general verdict always takes c\'est.',
      },
      {
        wrong: 'Saying « C\'est mes parents. »',
        right: 'Saying « Ce sont mes parents. »',
        why: 'The verb still has to agree. More than one person takes sont, and ce sont is the form almost everyone forgets exists.',
      },
    ],
  },

  {
    type: 'flashcards',
    id: 's18-flash',
    title: 'Flip and Recall',
    frSub: 'Retournez la carte',
    render: 'deck',
    layer: 'core',
    say: 'The situation is on the front. Say the whole sentence before you flip.',
    cards: [
      { front: 'How many forms, and how much pattern?', back: `${REFRAME} suis, es, est, sommes, êtes, sont.` },
      { front: 'You, introducing yourself by name', back: fr(m('255')), say: fr(m('255')) },
      { front: 'You, naming your job', back: fr(m('260')), say: fr(m('260')) },
      { front: 'Pointing at a friend', back: fr(m('256')), say: fr(m('256')) },
      { front: 'Pointing at two people', back: fr(m('259')), say: fr(m('259')) },
      { front: 'A woman saying where she is from, by country', back: fr(m('265')), say: fr(m('265')) },
      { front: 'Anyone saying where they are from, by town', back: fr(m('268')), say: fr(m('268')) },
      { front: 'He is a doctor, with nothing in front', back: fr(m('275')), say: fr(m('275')) },
      { front: 'That is a doctor, pointing across the room', back: fr(m('274')), say: fr(m('274')) },
      { front: 'Asking one stranger politely if they are here for it', back: fr(m('253')), say: fr(m('253')) },
      { front: 'Telling a group they are late', back: fr(m('279')), say: fr(m('279')) },
      { front: 'The form that follows on', back: 'est. on means we and takes the il form.', say: fr('fr.a1.cafe.167') },
    ],
  },

  /* ── Act 6: out in the world ─────────────────────────────────────────── */

  {
    type: 'practice',
    id: 's19-speak',
    title: 'Say The Whole Sentence',
    frSub: 'À voix haute',
    layer: 'core',
    audio: { mode: 'mic', lang: 'fr-FR' },
    say: 'Each one as a single movement. A form on its own proves nothing, so the pronoun comes with it every time.',
    skill: 'speak',
    itemIds: SPEAK_IDS,
  },

  {
    type: 'dictation',
    id: 's20-dictation',
    title: 'Spell What You Hear',
    frSub: 'La dictée',
    layer: 'core',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], maxPlays: 4, recordingId: 'rec-a1-06-paradigm' },
    say: 'Seven sentences. The silent letters are the whole difficulty: es, est and sont all end on something you will not hear.',
    itemIds: DICTATION_IDS,
  },

  {
    type: 'scenario',
    id: 's21-scenario',
    title: 'Your Turn At The Badge Table',
    frSub: 'À vous',
    layer: 'core',
    terms: ['noArticle', 'originShapes', 'determinerTest'],
    say: 'The same conference, an hour later. Every answer is one of the four uses.',
    setting: 'The coffee stand at the Lyon conference. Somebody you have not met turns towards you with a cup in each hand.',
    turns: [
      { ai: 'Bonjour ! Vous êtes ici pour la conférence ?', en: 'Hello! Are you here for the conference?', user: 'Oui, je suis architecte.' },
      { ai: 'Ah, très bien. Vous êtes d\'où ?', en: 'Ah, very good. Where are you from?', user: 'Je suis de Lyon. Et vous ?' },
      { ai: 'Je suis espagnole, mais j\'habite ici. Et lui, c\'est votre collègue ?', en: 'I am Spanish, but I live here. And him, is that your colleague?', user: "Oui, c'est mon collègue. Il est ingénieur." },
      { ai: 'Vous êtes prêts pour la présentation ?', en: 'Are you ready for the presentation?', user: 'Non, nous sommes en retard !' },
      { ai: 'Alors allez-y. Bonne chance !', en: 'Then off you go. Good luck!', user: 'Merci beaucoup.' },
    ],
  },

  {
    type: 'reading',
    id: 's22-reading',
    title: 'Four People, One Badge Table',
    frSub: 'Quatre personnes, une table',
    layer: 'core',
    terms: ['determinerTest', 'noArticle', 'originShapes'],
    // REQUIRED for the glossary to exist at all. MissionSection routes a reading
    // section to ReadingMission (and so to PassagePage, which draws the
    // underlines and the tap-for-translation sheet) only when this flag is set
    // WITH questions. a1.01 shipped five entries down the fallback path and they
    // rendered nowhere.
    questionsInModal: true,
    say: 'Read it once for the shape. Every one of the six forms is in here. Tap any word you do not know.',
    // ONE LINE, deliberately. PassagePage does text.split(/(?<=[.!?»])\s+/) and
    // renders the pieces inline in a single TX, so every authored \n is
    // swallowed. a1.01's passage authors eight of them and none of them draws.
    //
    // THE A1 RULE FOR THIS PASSAGE (Paul, 2026-08-04): if it is not inside « »,
    // it is in English. The stage directions are context, and context is
    // instruction. An A1 learner's reading effort belongs on the exchange.
    text:
      'Nine in the morning at the badge table. Sylvie is already there. ' +
      '« Bonjour, vous êtes ici pour la conférence ? » ' +
      '« Oui. Je suis architecte, et je suis de Lyon. » ' +
      'A man arrives behind you and puts down two cups. ' +
      '« C\'est mon collègue. Il est ingénieur. » ' +
      'Sylvie looks at the badges and then at the clock. ' +
      '« Ah, vous êtes les deux de Lyon. Elle est espagnole, elle. » ' +
      'She points at a woman by the door who is holding a folder. ' +
      '« Ce sont les organisateurs ? » ' +
      '« Non, ils sont en retard aussi. »',
    // Every entry is a single whitespace-delimited token that really appears
    // between the guillemets: the reader strips punctuation and lowercases
    // before matching, so an entry that is not a bare token is an underline that
    // never appears. Checked here through the REAL matcher in the test.
    glossary: [
      { word: 'ingénieur', en: 'engineer', note: 'Bare after il est, like every job. C\'est un ingénieur would need the un.' },
      { word: 'espagnole', en: 'Spanish (of a woman)', note: 'The adjective agreeing. A man would be espagnol, with no e and no L sound.' },
      { word: 'organisateurs', en: 'organisers', note: 'Plural and pointed at, so ce sont rather than c\'est.' },
      { word: 'retard', en: 'lateness', note: 'En retard is a state, not an adjective, so nothing agrees with anybody.' },
      { word: 'collègue', en: 'colleague', note: 'mon is the little word in front, which is what puts this sentence on c\'est.' },
    ],
    questions: [
      { q: 'The passage says « Il est ingénieur » and « C\'est mon collègue » about the same man. Why do the two sentences take different forms?', a: 'mon is a little word in front of collègue, so that sentence takes c\'est. Ingénieur stands bare, so that one takes il est. Same man, and the test is only about the words after the verb.' },
      { q: '« Ce sont les organisateurs ? » Why ce sont and not c\'est?', a: 'The verb still agrees. More than one person takes sont, so the plural of c\'est is ce sont.' },
      { q: 'Two people say where they are from and one of them agrees with the speaker. Which, and why?', a: 'Espagnole is an adjective and takes an e because a woman is speaking. De Lyon is a preposition plus a place and never changes for anybody.' },
    ],
  },

  /* ── Act 7: prove it ─────────────────────────────────────────────────── */

  {
    type: 'reviewDeck',
    id: 's23-review',
    title: 'The Whole Verb, One Deck',
    frSub: 'Révision',
    render: 'deck',
    layer: 'core',
    terms: ['sixForms', 'determinerTest', 'noArticle'],
    say: 'Rate each card objectively. Again, hard, or easy. The ones you mark again come back.',
    cards: [
      { front: 'How many forms, and how much pattern behind them?', back: `${REFRAME} There is nothing to derive, so all six are learned outright.` },
      { front: 'The six, in order', back: 'suis, es, est, sommes, êtes, sont.', say: fr(m('249')) },
      { front: 'What goes between être and a job?', back: 'Nothing at all. Je suis architecte, never je suis un architecte.', say: fr(m('260')) },
      { front: 'The one place the little word comes back', back: 'After c\'est. C\'est un médecin, and il est médecin.', say: fr(m('274')) },
      { front: 'A little word in front of the noun means…', back: 'c\'est. A bare noun or an adjective means il est.', say: fr(m('275')) },
      { front: 'You are pointing at Marc', back: 'C\'est Marc. A name is already specified, so it takes c\'est.', say: fr(m('256')) },
      { front: 'You are pointing at two people', back: 'Ce sont mes parents. The verb agrees even here.', say: fr(m('259')) },
      { front: 'A woman saying she is French', back: 'Je suis française. The e wakes the s and you can hear it.', say: fr(m('265')) },
      { front: 'Anyone saying they are from Lyon', back: 'Je suis de Lyon. De never agrees with anyone.', say: fr(m('268')) },
      { front: 'vous êtes is said…', back: 'as one word, voo-ZET. The silent S of vous wakes up in front of the vowel.', say: fr(m('253')) },
      { front: 'ils sont against ils ont', back: 'One is this verb and one is the next lesson. An S against a Z.', say: fr(m('280')) },
      { front: 'A woman writing that she is tired', back: 'Je suis fatiguée. The extra e is real and it is silent.', say: fr(m('272')) },
    ],
  },

  {
    type: 'progressCheck',
    id: 's24-progress',
    title: 'Where You Stand',
    frSub: 'Votre progression',
    say: 'One screen before the exam, so you know what you are walking into.',
    // The prose deliberately carries no counts. Every figure on this card is a
    // fact about the journey around it and is derived below; typing one here as
    // well would be two chances to be wrong on one screen.
    body: 'You have met all six forms, sorted them by pronoun, heard the two that hide behind silent letters, said them out loud and spelled them from sound alone. You have used the verb for all four of the things it does. What is left is the part that says whether it stuck. Each round is tied to one of the mistakes this lesson exists to stop, and failing a round gets you its drill before the next one starts. The drill is the teaching, not the punishment.',
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
    say: 'Five rounds. Miss too many in a round and you get a drill before the next one starts.',
    rounds: [
      {
        id: 'r1-the-six',
        label: 'The six forms',
        // Round targets are ordered deliberately. drillForRound returns the FIRST
        // target that has a drill and then stops, so the first name here is what
        // a failing learner actually gets. Every round leads on a DIFFERENT
        // trigger, which is what makes all five drills reachable — a1.05 ships
        // two drills no round can fire, and its own test catches it.
        targets: ['err-wrong-form', 'err-hear-forms'],
        say: 'Six rooms, six forms. No pattern will help you.',
        questions: [
          {
            q: 'You are telling someone your job. Which form of être opens the sentence?',
            format: 'mcq',
            opts: ['suis', 'es', 'est', 'sommes'],
            correct: 0,
            why: 'je takes suis. It is the form you will say more than the other five together, because most of what you say is about yourself.',
            ref: 's04-table',
          },
          {
            q: 'Write the form of être that goes with nous.',
            format: 'typeIn',
            accept: ['sommes'],
            answer: 'sommes',
            why: 'nous takes sommes, and the doubled m really is pronounced. Nothing in suis or es could have told you that.',
            ref: 's05-forms',
          },
          {
            q: 'Three of you have just arrived and you want to say so the way it is actually said out loud. Which form?',
            format: 'mcq',
            opts: ['sommes', 'sont', 'est', 'êtes'],
            correct: 2,
            why: 'on means we and takes the form il takes, so it is est. The meaning pulls one way and the form goes the other.',
            ref: 's06-sort',
          },
          {
            q: 'Fix this. You are speaking to one stranger, politely: « Vous es ici pour la conférence ? »',
            format: 'errorSpot',
            accept: ['Vous êtes ici pour la conférence', 'êtes', 'etes'],
            answer: 'Vous êtes ici pour la conférence ?',
            why: 'vous takes êtes whether it is one person politely or a group. es belongs to tu and to nowhere else.',
            ref: 's04-table',
          },
          {
            q: 'Fix this. You are speaking about yourself and a colleague: « Nous êtes en retard. »',
            format: 'errorSpot',
            accept: ['Nous sommes en retard', 'sommes'],
            answer: 'Nous sommes en retard.',
            why: 'nous takes sommes. êtes is the vous form, and the two are neighbours in the table and nowhere else.',
            ref: 's06-sort',
          },
          {
            q: 'Which of these is true of the six forms of être?',
            format: 'mcq',
            opts: ['They all share the stem êt-', 'They follow the regular -re pattern', 'Four of them are built from suis', 'They are six separate words with no shared stem'],
            correct: 3,
            why: `${REFRAME} There is nothing to derive, which is why the correct strategy here is memorising rather than pattern-hunting.`,
            ref: 's03-nopattern',
          },
        ],
      },
      {
        id: 'r2-the-gap',
        label: 'The gap after être',
        targets: ['err-article-after-etre', 'err-wrong-form'],
        say: 'English wants a word here. French does not.',
        questions: [
          {
            q: 'You are an architect. Write the sentence.',
            format: 'typeIn',
            accept: ['Je suis architecte.', 'Je suis architecte'],
            answer: 'Je suis architecte.',
            why: 'No un. English cannot say "I am architect" and French cannot say the other one, which is what makes this error automatic.',
            ref: 's10-jobs',
          },
          {
            q: 'Fix this. She works as a nurse: « Elle est une infirmière. »',
            format: 'errorSpot',
            accept: ['Elle est infirmière', 'infirmière', 'infirmiere'],
            answer: 'Elle est infirmière.',
            why: 'A job after être stands bare. Keeping the une would mean switching the front of the sentence to c\'est une infirmière.',
            ref: 's10-jobs',
          },
          {
            q: 'Fix this. A man saying where he is from: « Je suis un français. »',
            format: 'errorSpot',
            accept: ['Je suis français', 'français', 'francais'],
            answer: 'Je suis français.',
            why: 'A nationality here is an adjective, and an adjective never took an article. It behaves exactly like a job.',
            ref: 's11-joberrors',
          },
          {
            q: 'Which of these is written correctly?',
            format: 'mcq',
            opts: ['Je suis Français.', 'Je suis un français.', 'Je suis français.', 'Je suis le français.'],
            correct: 2,
            why: 'Small f and nothing in front. English capitalises the adjective and French keeps the capital for the noun, as in un Français.',
            ref: 's11-joberrors',
          },
          {
            q: 'You are asking somebody politely whether they are an engineer. Which is right?',
            format: 'mcq',
            opts: ['Vous êtes ingénieur ?', 'Vous es ingénieur ?', 'Vous êtes un ingénieur ?', 'C\'est vous ingénieur ?'],
            correct: 0,
            why: 'êtes for vous, and no article in front of the job. Both halves of this lesson in one four-word question.',
            ref: 's10-jobs',
          },
          {
            q: 'What goes between a form of être and a job noun?',
            format: 'mcq',
            opts: ['un or une', 'le or la', 'de', 'Nothing at all'],
            correct: 3,
            why: 'Nothing. a1.11 gave you this as a fact about professions; it is really a fact about what follows être.',
            ref: 's10-jobs',
          },
        ],
      },
      {
        id: 'r3-where-from',
        label: 'Where you are from',
        targets: ['err-origin-agreement', 'err-article-after-etre'],
        say: 'Two shapes, and only one of them agrees with you.',
        questions: [
          {
            q: 'A woman is saying she is French. Write the sentence.',
            format: 'typeIn',
            accept: ['Je suis française.', 'Je suis française'],
            answer: 'Je suis française.',
            why: 'The adjective agrees, and here you can hear it: the e wakes the s, so française and français are genuinely different sounds.',
            ref: 's12-origin',
          },
          {
            q: 'A woman is saying she is from Marseille. What changes compared to a man saying it?',
            format: 'mcq',
            opts: ['de becomes da', 'de becomes de la', 'An e is added to Marseille', 'Nothing changes at all'],
            correct: 3,
            why: 'de plus a place is a preposition and never agrees with anybody. Only the adjective shape of origin moves.',
            ref: 's12-origin',
          },
          {
            q: 'Fix this. A group of Canadians, and there is a man among them: « Ils sont canadien. »',
            format: 'errorSpot',
            accept: ['Ils sont canadiens', 'canadiens'],
            answer: 'Ils sont canadiens.',
            why: 'The adjective takes the group with it, so it needs the plural s. The s is silent, so this one exists only on the page.',
            ref: 's12-origin',
          },
          {
            q: 'Which pair sounds identical when said out loud?',
            format: 'mcq',
            opts: ['français and française', 'grand and grande', 'espagnol and espagnole', 'fatigué and fatiguée'],
            correct: 3,
            why: 'fatigué ends on a vowel, so adding the e changes nothing you can hear. The other three end on a consonant that the e wakes up.',
            ref: 's13-agreement',
          },
          {
            q: 'Tap the letter you do not say.',
            format: 'tapSilent',
            word: 'canadiens',
            correct: 's',
            why: 'The plural s is silent, which is why the agreement on a nationality is often invisible to the ear and only real in writing.',
            ref: 's12-origin',
          },
          {
            q: 'How do you ask somebody where they are from?',
            format: 'mcq',
            opts: ['Vous êtes qui ?', 'Vous êtes d\'où ?', 'Vous êtes de quoi ?', 'Vous êtes quel ?'],
            correct: 1,
            why: 'de plus où, elided to d\'où. It is the one question that gets you either shape of answer.',
            ref: 's12-origin',
          },
        ],
      },
      {
        id: 'r4-cest-or-il-est',
        label: "c'est or il est",
        targets: ['err-cest-vs-ilest', 'err-article-after-etre'],
        say: 'One test, run on the words after the verb.',
        questions: [
          {
            q: 'Fix this. He works as a doctor: « Il est un médecin. »',
            format: 'errorSpot',
            accept: ['Il est médecin', 'médecin', 'medecin'],
            answer: 'Il est médecin.',
            why: 'il est takes the noun bare. The other repair is just as good: keep the un and it becomes c\'est un médecin.',
            ref: 's16-contrast',
          },
          {
            q: 'You are pointing across the room at your sister. Which is right?',
            format: 'mcq',
            opts: ['Elle est ma sœur.', 'C\'est ma sœur.', 'Elle est une sœur.', 'Ce sont ma sœur.'],
            correct: 1,
            why: 'ma is a little word in front of the noun, so the sentence takes c\'est. Any of mon, ma, ton or votre does the same.',
            ref: 's09-identity',
          },
          {
            q: 'Fix this. You are introducing a friend called Marc: « Il est Marc. »',
            format: 'errorSpot',
            accept: ["C'est Marc", 'Cest Marc', "C'est"],
            answer: "C'est Marc.",
            why: 'A name cannot be made more specific, so it behaves like a noun that already has its little word. Pointing at a person takes c\'est.',
            ref: 's15-test',
          },
          {
            q: 'What decides between c\'est and il est?',
            format: 'mcq',
            opts: ['Whether it is a person or a thing', 'Whether you are being polite', 'Whether a little word sits in front of the noun', 'Whether the noun is masculine'],
            correct: 2,
            why: 'A determiner in front of the noun takes c\'est. A bare noun, or an adjective, takes il est. It is a question about the words, not about the meaning.',
            ref: 's15-test',
          },
          {
            q: 'Fix this. You are pointing at both your parents: « C\'est mes parents. »',
            format: 'errorSpot',
            accept: ['Ce sont mes parents', 'Ce sont'],
            answer: 'Ce sont mes parents.',
            why: 'The verb agrees even here. More than one person takes sont, and ce sont is the form almost everyone forgets exists.',
            ref: 's09-identity',
          },
          {
            q: 'Somebody proposes meeting at eight. You want to say that is a good idea. Which is right?',
            format: 'mcq',
            opts: ['C\'est une bonne idée.', 'Il est une bonne idée.', 'Elle est bonne idée.', 'Ce sont une bonne idée.'],
            correct: 0,
            why: 'il est needs somebody or something to point back to. A verdict on a situation always takes c\'est.',
            ref: 's17-cesterrors',
          },
        ],
      },
      {
        id: 'r5-by-ear',
        label: 'By ear',
        targets: ['err-hear-forms', 'err-cest-vs-ilest'],
        say: 'The letters you cannot hear are the ones doing the work.',
        questions: [
          {
            q: 'Listen. Which sentence is it?',
            format: 'listenChoose',
            audio: { mode: 'tts', lang: 'fr-FR', clip: 'Ils sont en retard.', recordingId: 'rec-a1-06-sont-ont' },
            opts: ['Ils ont un retard.', 'Ils sont en retard.', 'Il est en retard.', 'Ils étaient en retard.'],
            correct: 1,
            why: 'sont starts on an S. ils ont would give you a Z instead, and that single sound is the difference between this verb and the next lesson.',
            ref: 's08-ear',
          },
          {
            q: 'Listen. Is this one person or a group?',
            format: 'listenChoose',
            audio: { mode: 'tts', lang: 'fr-FR', clip: 'Vous êtes ici pour la conférence ?', recordingId: 'rec-a1-06-liaison' },
            opts: ['One person, certainly', 'A group, certainly', 'You cannot tell from the sound', 'Nobody, it is impersonal'],
            correct: 2,
            why: 'vous êtes is the same out loud either way. It is the polite singular and the plain plural at once, and only the room settles it.',
            ref: 's07-liaison',
          },
          {
            q: 'Listen. How is it said?',
            format: 'listenChoose',
            audio: { mode: 'tts', lang: 'fr-FR', clip: 'Vous êtes en retard.', recordingId: 'rec-a1-06-liaison' },
            opts: ['With a pause between vous and êtes', 'As one word, voo-ZET', 'With the S said as an S', 'With the final S of êtes sounded'],
            correct: 1,
            why: 'The silent S of vous wakes up as a Z in front of the vowel and the two words are said as one. A gap there is understood and marks you.',
            ref: 's07-liaison',
          },
          {
            q: 'Say it out loud, the way you would answer at a badge table.',
            format: 'speak',
            target: 'Je suis architecte, et je suis de Lyon.',
            ipa: '/ʒə sɥi aʁ.ʃi.tɛkt e ʒə sɥi də ljɔ̃/',
            why: 'Two uses in one breath and no article in either. Say it as two phrases, not seven separate words.',
            ref: 's19-speak',
          },
          {
            q: 'Out loud, « tu es » and « il est » end on the same sound. Why?',
            format: 'mcq',
            opts: ['They are the same form', 'The S of es and the T of est are both silent', 'Both end on a nasal vowel', 'The verb changes to match the pronoun'],
            correct: 1,
            why: 'Two different forms with two different silent letters, landing on one sound. Only the pronoun in front separates them.',
            ref: 's08-ear',
          },
          {
            q: 'Write what you would say to point at your colleague across the room.',
            format: 'typeIn',
            accept: ["C'est mon collègue.", "C'est mon collègue", 'Cest mon collegue'],
            answer: "C'est mon collègue.",
            why: 'mon is the little word in front, so the sentence takes c\'est. Il est mon collègue is the version to unlearn.',
            ref: 's16-contrast',
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
    say: 'Four things, and then the lesson that picks this up.',
    body: 'You can now introduce yourself completely: who you are, what you do, where you are from and how you are, all on one verb. The next unit is avoir, and it is irregular in exactly the same way and for exactly the same reason. These two are the most broken verbs in French because they are the most used, and no other verb will ask this of you again. One thing to carry across: ils sont belongs to this lesson and ils ont belongs to that one, and a single sound separates them.',
    points: [
      `${REFRAME} suis, es, est, sommes, êtes, sont, and nothing derives from anything.`,
      'Nothing goes between être and a job. Je suis architecte, never je suis un architecte.',
      'A little word in front of the noun takes c\'est. A bare noun or an adjective takes il est.',
      'A nationality agrees with you and de plus a town never does.',
    ],
  },
];

/* ─── The progress card counts the journey rather than restating it ────────
 *
 * Derived here rather than typed. It throws rather than degrades: a progress
 * card that silently reports "0 of 0" is worse than a build that stops.        */
{
  const ix = SECTIONS.findIndex((s) => (s as { id?: string }).id === 's24-progress');
  const card = SECTIONS[ix];
  const quiz = SECTIONS.find((s) => s.type === 'quiz');
  if (!card || card.type !== 'progressCheck' || !quiz || quiz.type !== 'quiz') {
    throw new Error('a1.06.l1: the progress card or the quiz is missing, so the card cannot count what is not there');
  }
  card.stats = [
    { k: 'Forms of être', v: String(THE_SIX.length) },
    { k: 'Things the verb does', v: String(THE_USES.length) },
    // `ix` is the count of sections BEFORE this one, which is exactly how many
    // missions the learner has finished when they reach it.
    { k: 'Missions done', v: `${ix} of ${SECTIONS.length}` },
    { k: 'Exam rounds ahead', v: String(quiz.rounds?.length ?? 0) },
  ];
}

/* ─── Acts ─────────────────────────────────────────────────────────────────
 *
 * Seven, which is the structure the brief proposed: the six forms, then the
 * uses, then c'est against il est, then prove it. The four uses are folded into
 * two acts rather than four, because identity and profession are one social move
 * and origin and description are both adjective-agreement problems.
 *
 * `estScreens` is what the mission actually costs, not a guess rounded to a nice
 * number, because it is divided by the rest points to check no stretch runs past
 * the checkpoint-spacing limit of 22.                                          */

const ACTS: LessonAct[] = [
  {
    id: 'act1',
    title: 'The verb that gives you nothing',
    sections: ['s01-scene', 's02-goals', 's03-nopattern'],
    milestone: 'You know there is no pattern here, and why that is the good news.',
    estScreens: 17,
    restPoints: ['s01-scene/after-break'],
  },
  {
    id: 'act2',
    title: 'The six forms',
    sections: ['s04-table', 's05-forms', 's06-sort', 's07-liaison', 's08-ear'],
    milestone: 'You have all six, and you can hear the two that hide behind silent letters.',
    estScreens: 26,
    restPoints: ['s05-forms/halfway'],
  },
  {
    id: 'act3',
    title: 'Who you are, and what you do',
    sections: ['s09-identity', 's10-jobs', 's11-joberrors'],
    milestone: 'You can name yourself, name your job, and point at somebody else.',
    estScreens: 15,
  },
  {
    id: 'act4',
    title: 'Where you are from, and how you are',
    sections: ['s12-origin', 's13-agreement', 's14-state'],
    milestone: 'You know which half of origin agrees with you and which half never moves.',
    estScreens: 16,
  },
  {
    id: 'act5',
    title: "c'est against il est",
    sections: ['s15-test', 's16-contrast', 's17-cesterrors', 's18-flash'],
    milestone: 'You have a test you can run in the moment instead of a feeling.',
    estScreens: 27,
    restPoints: ['s18-flash/halfway'],
  },
  {
    id: 'act6',
    title: 'Out in the world',
    sections: ['s19-speak', 's20-dictation', 's21-scenario', 's22-reading'],
    milestone: 'You have said all six out loud and spelled them from sound alone.',
    estScreens: 42,
    restPoints: ['s19-speak/halfway', 's20-dictation/halfway'],
  },
  {
    id: 'act7',
    title: 'Prove it',
    sections: ['s23-review', 's24-progress', 's25-quiz', 's26-roundup'],
    milestone: 'Lesson complete. avoir is next, and it breaks the same way.',
    estScreens: 48,
    restPoints: ['s23-review/halfway', 's25-quiz/after-r2', 's25-quiz/after-r4'],
  },
];

/* ─── Deck tranches ────────────────────────────────────────────────────────
 *
 * One slice per act, index-aligned. An item is released the act it is TAUGHT,
 * not the act it is first mentioned: releasing the whole set at mission one
 * turns the flashcard hub into a wall on the morning the learner is least able
 * to read it. Acts 6 and 7 release nothing because they teach nothing new; they
 * apply and test what acts 1 to 5 handed over.                                 */

const DECK_TRANCHE: string[][] = [
  // Act 1: only what the scene actually put in front of the learner.
  [m('275'), m('260')],
  // Act 2: the paradigm and the liaison pair.
  [...PARADIGM, m('279'), m('280'), 'fr.a1.cafe.160', 'fr.a1.cafe.177'],
  // Act 3: identity and profession.
  [
    m('255'), m('256'), m('257'), m('258'), m('259'),
    m('261'), m('262'), m('263'),
    'fr.a1.metiers.244', 'fr.a1.metiers.245', 'fr.a1.metiers.246',
  ],
  // Act 4: origin and description.
  [
    m('264'), m('265'), m('266'), m('267'), m('268'), m('269'), m('270'),
    m('271'), m('272'), m('273'),
    'fr.a1.corps.216',
  ],
  // Act 5: the contrast set, released once the test that sorts it has been given.
  [
    m('274'), m('276'), m('277'), m('278'),
    'fr.a1.metiers.247', 'fr.a1.metiers.014',
    'fr.a1.cafe.154', 'fr.a1.cafe.159', 'fr.a1.cafe.167', 'fr.a1.cafe.164', 'fr.a1.cafe.166',
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
 * FIVE triggers, five drills, five rounds, and each round leads on a DIFFERENT
 * trigger. That is deliberate and it is the one structural thing this lesson
 * does that a1.05 does not: `drillForRound` returns the first target that has a
 * drill and then stops, so a drill that is never named first can never fire.
 * a1.05 ships two such drills and its own test fails on them today.            */

const ERROR_TRIGGERS: ErrorTrigger[] = [
  {
    id: 'err-wrong-form',
    description: 'Reaches for the wrong row of the table: êtes for nous, es for vous, sommes for on.',
    detectOn: ['s04-table', 's06-sort', 's25-quiz/r1-the-six'],
    drill: 'drill-six-forms',
    retest: 'retest-six-forms',
  },
  {
    id: 'err-article-after-etre',
    description: 'Puts un or une in front of a job or a nationality, because English requires one there.',
    detectOn: ['s10-jobs', 's11-joberrors', 's25-quiz/r2-the-gap'],
    drill: 'drill-no-article',
    retest: 'retest-no-article',
  },
  {
    id: 'err-origin-agreement',
    description: 'Leaves a nationality unagreed, or tries to agree de plus a place with the speaker.',
    detectOn: ['s12-origin', 's13-agreement', 's25-quiz/r3-where-from'],
    drill: 'drill-origin-shape',
    retest: 'retest-origin-shape',
  },
  {
    id: 'err-cest-vs-ilest',
    description: 'Uses il est where a determiner is present, or c\'est where the noun is bare. The error that survives into B1.',
    detectOn: ['s15-test', 's16-contrast', 's17-cesterrors', 's25-quiz/r4-cest-or-il-est'],
    drill: 'drill-determiner-test',
    retest: 'retest-determiner-test',
  },
  {
    id: 'err-hear-forms',
    description: 'Cannot separate es from est, or ils sont from ils ont, because the letters that differ are silent.',
    detectOn: ['s08-ear', 's20-dictation', 's25-quiz/r5-by-ear'],
    drill: 'drill-hear-the-form',
    retest: 'retest-hear-the-form',
  },
];

const DRILLS: LessonDrill[] = [
  {
    id: 'drill-six-forms',
    title: 'Pronoun in, form out',
    format: 'flashcard',
    coach: 'The pronoun is on the left. Say the form out loud before you turn the card.',
    pairs: [
      ['je', 'suis'],
      ['tu', 'es'],
      ['il, elle, on', 'est'],
      ['nous', 'sommes'],
      ['vous', 'êtes'],
      ['ils, elles', 'sont'],
    ],
  },
  {
    id: 'retest-six-forms',
    title: 'One more time',
    format: 'mcq',
    q: 'You and one colleague are late. Which form?',
    opts: ['êtes', 'sommes', 'sont'],
    correct: 1,
    why: 'nous takes sommes. êtes is the vous form, and they sit next to each other in the table and nowhere else.',
  },
  {
    id: 'drill-no-article',
    title: 'Does anything go in front?',
    format: 'sort',
    buckets: ['Nothing goes in front', 'A little word goes in front'],
    // Item ids, not display strings: a drill scores against the corpus, so it
    // plays the same audio and reads the same spelling as every other card that
    // teaches these. Passing display strings here validates as broken ids.
    items: [
      m('260'), m('261'), m('262'), m('264'),
      'fr.a1.metiers.244', 'fr.a1.metiers.245',
      m('274'), m('276'), 'fr.a1.metiers.247', m('257'),
    ],
    coach: 'A job or a nationality after être takes nothing. Anything on a c\'est sentence takes its little word.',
  },
  {
    id: 'retest-no-article',
    title: 'One more time',
    format: 'mcq',
    q: 'She works as a lawyer. Which is right?',
    opts: ['Elle est une avocate.', 'Elle est avocate.', 'Elle est la avocate.'],
    correct: 1,
    why: 'Nothing in front of a job after être. The un would only be correct with c\'est in front instead.',
  },
  {
    id: 'drill-origin-shape',
    title: 'Does it agree, or not?',
    format: 'sort',
    buckets: ['Agrees with the speaker', 'Never changes'],
    items: [m('264'), m('265'), m('266'), m('267'), m('268'), m('269'), m('270')],
    coach: 'A nationality is an adjective and moves. de plus a place is a preposition and does not.',
  },
  {
    id: 'retest-origin-shape',
    title: 'One more time',
    format: 'mcq',
    q: 'A woman says she is from Marseille. What does she say?',
    opts: ['Je suis de Marseille.', 'Je suis de Marseillaise.', 'Je suis della Marseille.'],
    correct: 0,
    why: 'de plus a place never agrees with anybody. Only the nationality adjective would have moved.',
  },
  {
    id: 'drill-determiner-test',
    title: "c'est, or il est?",
    format: 'sort',
    buckets: ["c'est", 'il est'],
    items: [
      m('274'), m('276'), m('278'), m('256'), m('257'), 'fr.a1.metiers.247',
      m('275'), m('277'), m('273'), 'fr.a1.metiers.245', 'fr.a1.metiers.014',
    ],
    coach: 'Read what comes after the verb and ask one question: is there a little word in front of the noun?',
  },
  {
    id: 'retest-determiner-test',
    title: 'One more time',
    format: 'mcq',
    q: 'You are pointing at the director across the room. Which is right?',
    opts: ['Il est le directeur.', 'C\'est le directeur.', 'Il est un directeur.'],
    correct: 1,
    why: 'le is a little word in front of the noun, so the sentence takes c\'est. Il est directeur, with nothing in front, would also be correct.',
  },
  {
    id: 'drill-hear-the-form',
    title: 'What did the ending do?',
    format: 'flashcard',
    coach: 'Read the written form, then say what your ear actually gets from it.',
    pairs: [
      ['es', 'no S sound, same as est'],
      ['est', 'no T sound, same as es'],
      ['sont', 'a nasal vowel, no T'],
      ['êtes', 'binds to vous as voo-ZET'],
      ['sommes', 'a real M, and it sounds'],
      ['suis', 'one syllable, swee'],
    ],
  },
  {
    id: 'retest-hear-the-form',
    title: 'One more time',
    format: 'mcq',
    q: 'You hear a Z between the two words. Which did you hear?',
    opts: ['ils sont', 'vous êtes', 'nous sommes'],
    correct: 1,
    why: 'The silent S of vous wakes up as a Z in front of the vowel. ils sont starts on a clear S instead.',
  },
];

/* ─── Reference sheets ─────────────────────────────────────────────────────
 *
 * Two, and both exist for a layout reason as much as a pedagogical one.
 * `tapTable` is not in ownsLayout(), so the in-flow tables render inside a
 * scrolling page and anything longer than about six rows runs past the fold and
 * takes its chrome with it. The full versions live here.
 *
 * This is also where a learner will be a week from now, halfway through a1.07,
 * wanting the être table beside the avoir one. Layer 'deep' exempts these from
 * the core density caps, which is the point: a sheet is allowed to be dense, and
 * a `table` section is only legal here.                                        */

const SHEETS: ReferenceSheet[] = [
  {
    id: 'sheet.a1.06.paradigm',
    title: 'être, in full',
    layer: 'deep',
    contains: ['All nine pronouns with their form', 'What each form sounds like', 'The silent letters, listed'],
    sections: [
      {
        type: 'table',
        id: 'sheet-etre-table',
        title: 'The full paradigm',
        layer: 'deep',
        cols: ['Pronoun', 'être', 'Sounds like', 'English'],
        rows: [
          ["je / j'", 'suis', '[zhuh SWEE]', 'I am'],
          ['tu', 'es', '[tü EH]', 'you are, one person, close'],
          ['il', 'est', '[ee LEH]', 'he is, or it is'],
          ['elle', 'est', '[eh LEH]', 'she is'],
          ['on', 'est', '[ohⁿ NEH]', 'we are, said out loud'],
          ['nous', 'sommes', '[noo SOM]', 'we are, written'],
          ['vous', 'êtes', '[voo ZET]', 'you are, politely or plural'],
          ['ils', 'sont', '[eel SOHⁿ]', 'they are, any group with a man in it'],
          ['elles', 'sont', '[el SOHⁿ]', 'they are, all women'],
        ],
      },
      {
        type: 'teach',
        id: 'sheet-etre-silent',
        title: 'The letters you do not say',
        layer: 'deep',
        body: 'Four of the six end in something silent. The S of es and the T of est are both mute, which is why tu es and il est land on the same sound and only the pronoun separates them. The T of sont is mute and the vowel before it is nasal, so it is [SOHⁿ] and never [SONT]. The final S of vous is mute on its own and comes back as a Z in front of êtes, which is the one place in the paradigm where the pronoun and the verb are said as a single word. Only sommes ends on a consonant you really pronounce, and that is because the m is doubled in the spelling: a single m there would have made a nasal vowel instead.',
      },
      {
        type: 'teach',
        id: 'sheet-etre-next',
        title: 'What carries into avoir',
        layer: 'deep',
        // The avoir paradigm is NOT listed here. An earlier draft of this sheet
        // spelled out all six of its forms, which is a1.07's whole lesson given
        // away in a reference sheet, and a1-06-etre.test.ts caught it. What
        // survives is the SHAPE of the claim (it breaks the same way, for the
        // same reason) plus the one minimal pair that genuinely belongs to both.
        body: 'avoir is the next unit and it breaks in exactly the same way: six forms, no stem to lean on, nothing derivable from anything. That is not a coincidence. être and avoir are the two most used verbs in French and they are the two most broken, because a form said a hundred times a day is never smoothed out by analogy the way a rare verb is. One pair is worth keeping apart from the start, because it belongs to both lessons at once: ils sont opens on a clear S, and ils ont has a Z carried over from the silent S of ils. Everything else in the language after these two has a stem and endings, so this is the last time you will be asked to learn a verb outright.',
      },
    ],
  },
  {
    id: 'sheet.a1.06.uses',
    title: 'The four uses, and the c\'est test',
    layer: 'deep',
    contains: ['What each use looks like', 'The full c\'est against il est table', 'What counts as a little word'],
    sections: [
      {
        type: 'table',
        id: 'sheet-uses-table',
        title: 'What être is for',
        layer: 'deep',
        cols: ['Use', 'Example', 'What to watch'],
        rows: [
          ['Identity, yourself', 'Je suis Camille.', 'A name takes nothing in front of it'],
          ['Identity, somebody else', "C'est Marc.", "Pointing takes c'est, never il est"],
          ['Profession', 'Je suis architecte.', 'No article, ever, after être'],
          ['Origin, by country', 'Je suis française.', 'An adjective, and it agrees with you'],
          ['Origin, by town', 'Je suis de Lyon.', 'A preposition, and it never moves'],
          ['Description', 'Elle est grande.', 'An adjective, and it agrees again'],
        ],
      },
      {
        type: 'table',
        id: 'sheet-cest-table',
        title: "c'est against il est, in full",
        layer: 'deep',
        cols: ['What follows', "c'est", 'il est'],
        rows: [
          ['un or une plus a noun', "C'est un médecin.", 'not used'],
          ['le, la or les plus a noun', "C'est le directeur.", 'not used'],
          ['mon, ma or votre plus a noun', "C'est mon collègue.", 'not used'],
          ['A name', "C'est Marc.", 'not used'],
          ['A bare noun', 'not used', 'Il est médecin.'],
          ['An adjective', 'not used', 'Elle est grande.'],
          ['A thing, an idea, a verdict', "C'est une bonne idée.", 'not used'],
          ['More than one person', 'Ce sont mes parents.', 'Ils sont médecins.'],
        ],
      },
      {
        type: 'teach',
        id: 'sheet-cest-why',
        title: 'Why the test works',
        layer: 'deep',
        body: 'c\'est points and il est describes. Everything in the table follows from that, but a learner in the middle of a sentence has no time to decide whether they are pointing or describing, so the mechanical version is the one to carry: look at the words after the verb and ask whether a little word sits in front of the noun. If it does, c\'est. If the noun stands bare, or if what follows is an adjective, il est or elle est. A name counts as having one, because a name is already as specified as a word can be. The reason this is worth learning as a test rather than as a feeling is that it is the confusion that survives longest: learners who can hold a conversation still get it wrong, because at speed the meaning-based version is too slow to run and the mechanical one is not.',
      },
    ],
  },
];

const ETRE_LESSON_AUTHORED: Lesson = {
  id: 'a1.06.l1',
  unitId: 'a1.06',
  // The lesson's index WITHIN its unit, not its place in the track. Every lesson
  // in the seed is seq 1 because every unit ships exactly one so far, and the
  // `l1` in the id is this number.
  seq: 1,
  title: 'Le verbe être',
  level: 'a1',
  // Ten, not six. missions.ts derives the eyebrow from unit.seq at render time
  // (`${level} · LEÇON ${unit.seq}`), and a1.06 sits at seq 10. The stored value
  // is a fallback and has to agree with what the renderer computes, or the two
  // disagree the moment something reads this field instead. a1.04.l1 ships that
  // disagreement today: its stored tag says 04 and it renders as 06.
  tag: 'A1 · LEÇON 10',
  intro:
    'Six forms, no pattern behind them, and one of them in almost every sentence you will say. This is the verb that introduces you: who you are, what you do, where you are from and how you are, all on the same six words.',

  sections: SECTIONS,
  itemIds: ITEM_IDS,
  // v2, not v1. v1 was applied to Postgres on 2026-08-05 and its
  // sheet.a1.06.paradigm listed avoir's six forms as a run, which is a1.07's
  // lesson given away in a reference sheet. a1-06-etre.test.ts caught it, the
  // sheet was rewritten to keep only the shape of the claim and the ils sont /
  // ils ont pair, and the counter moves forward rather than restarting: a
  // rebuild that reuses its own number reads as a rollback in the log.
  //
  // v3 is the device pass on a Pixel 6, 2026-08-05, which found two things no
  // test could: the scene's break card pushed its own Continue below the fold on
  // first paint, and s16-contrast headed a column `il est` above a row whose
  // bare half is a1.11's first-person `Je suis professeur.` Both are content
  // fixes; see the notes at each site.
  version: 4,

  grammarAssumed: [
    'The nine subject pronouns, and the six verb forms they sit behind, introduced in a1.05',
    'on takes third-person-singular agreement, introduced in a1.05',
    'Gendered agreement on a bare adjective, introduced in a1.01 on enchanté and désolé',
    'No article after être in front of a profession, introduced in a1.11',
    'The indefinite and definite articles, introduced in a1.04 and a1.11',
  ],
  grammarIntroduced: [
    'The full present tense of être, as six forms with no derivable stem',
    'être for identity, profession, origin and description',
    'The determiner test: a little word in front of the noun takes c\'est, a bare noun or an adjective takes il est',
    'ce sont as the plural of c\'est',
    'Nationality adjectives, which agree, against de plus a place, which does not',
    'The obligatory liaison in vous êtes',
  ],

  features: ['roleplay', 'voiceflash'],
  scenarioId: undefined,

  overview: {
    titleEn: 'The Verb Être (To Be)',
    subFr: 'Le verbe être',
    introFr: "Six formes, aucun modèle, et l'une d'elles dans presque chaque phrase que vous direz.",
    minutes: 26,
    difficulty: 2,
    glyph: '🪪',
    screens: 191,
  },

  acts: ACTS,
  reframe: REFRAME,
  errorTriggers: ERROR_TRIGGERS,
  drills: DRILLS,
  sheets: SHEETS,
  deckTranche: DECK_TRANCHE,
  terms: ETRE_TERMS,

  audio: {
    defaultLang: 'fr-FR',
    speeds: [1.0, 0.65],
    coachVoice: 'coach-en-warm',
    interfaceSounds: ['correct', 'incorrect', 'checkpoint'],
    // ── The three audio decisions that cannot be recovered later ───────────
    //
    // Written here AND pinned by a1-06-etre.test.ts, the way sons.07's
    // rec-h-pairs pins its own, because a constraint on how something is
    // recorded becomes invisible the moment the clip is delivered.
    recorded: [
      {
        id: 'rec-a1-06-paradigm',
        desc: 'THE SIX FORMS AS ONE CONTINUOUS TAKE, IN PARADIGM ORDER, BY ONE VOICE AT ONE SPEED. This is the single most important instruction in this lesson. Six forms recorded in six sessions are six performances, and the learner is trying to hear a SET: any drift in pace, pitch or emphasis between them teaches a difference between the recordings rather than a difference in French. Read them at conversational pace with no pause for teaching between the rows, then the six full sentences in the same take. Do not stress the verb: these are the most frequent words in the language and they are never leaned on in speech.',
        clipIds: ['je suis', 'tu es', 'il est', 'nous sommes', 'vous êtes', 'ils sont', 'Je suis ici pour la conférence.', 'Tu es ici pour la conférence ?', 'Il est ici pour la conférence.', 'Nous sommes ici pour la conférence.', 'Vous êtes ici pour la conférence ?', 'Ils sont ici pour la conférence.'],
      },
      {
        id: 'rec-a1-06-liaison',
        desc: 'vous êtes WITH ITS LIAISON INTACT, never as two words with a gap. The S of vous must arrive as a Z bound to the front of êtes so the pair is one phonetic word, [voo-ZET]. Do not articulate the two halves separately even for the slow take: the slow version must be the same join stretched, not the join taken apart, because a learner who hears it separated once will produce it separated forever. Do not sound the final S of êtes.',
        clipIds: ['Vous êtes ici pour la conférence ?', 'Vous êtes en retard.', 'Vous êtes ingénieur ?', "Vous êtes d'où ?"],
      },
      {
        id: 'rec-a1-06-sont-ont',
        desc: 'ils sont AND ils ont RECORDED IN THE SAME TAKE, back to back, by one voice at one speed, so the contrast is real rather than an artefact of two sessions. ils sont opens on a clear S; ils ont carries a Z over from the silent S of ils. That single sound is the whole difference between this lesson and a1.07, so the two must be comparable against each other and not against a memory of a different recording. Do not sound the S of ils in either, and do not sound the T of sont.',
        clipIds: ['Ils sont en retard.', 'Ils ont un rendez-vous.', 'Ils sont ici pour la conférence.'],
      },
      {
        id: 'rec-a1-06-cest-pairs',
        desc: "The c'est and il est pairs, each PAIR in one take back to back so the appearing and disappearing determiner is audible against itself: « C'est un médecin. » then « Il est médecin. », then « C'est le directeur. » then « Il est directeur. » Both halves must sound like ordinary speech; the difference being taught is a word, not a level of care. Run est straight into the following noun with no pause, because a gap there is exactly where a learner inserts the un.",
        clipIds: ["C'est un médecin.", 'Il est médecin.', "C'est le directeur.", 'Il est directeur.', "C'est un professeur.", 'Je suis professeur.'],
      },
      {
        id: 'rec-a1-06-scene',
        desc: 'The opening scene, French bubbles only, in the voice of one woman in her forties at an ordinary conference-lobby pace. The beat where she says it back (« Ah, il est médecin. Très bien. ») must be warm and passing rather than corrective: the whole point of the scene is that nobody tells the learner they were wrong, so any hint of emphasis on médecin would destroy it.',
        clipIds: ['Bonjour ! Vous êtes ici pour la conférence ?', 'Et lui ?', 'Ah, il est médecin. Très bien.'],
      },
      {
        id: 'rec-a1-06-origin',
        desc: 'The origin set. français and française must be recorded in ONE take back to back, because the whole teaching is that the e wakes the s and the two are audibly different; recorded apart, the learner hears two words rather than one contrast. Same for fatigué and fatiguée, where the point is the opposite: they must be INDISTINGUISHABLE, so do not let a second take drift them apart and do not lean on the ending of either.',
        clipIds: ['Je suis français.', 'Je suis française.', 'Je suis de Lyon.', 'Elle est espagnole.', 'Ils sont canadiens.', 'Je suis fatigué.', 'Je suis fatiguée.', 'Elle est grande.'],
      },
    ],
    ambienceDefault: 'off',
  },
};

/** Exported for the authoring script, the merge script and the tests, so none of
 *  them restates a count that can drift out of agreement with the content. */
export const ETRE_ITEM_IDS = ITEM_IDS;
export const ETRE_SPEAK_IDS = SPEAK_IDS;
export const ETRE_DICTATION_IDS = DICTATION_IDS;
export const ETRE_PARADIGM_IDS = PARADIGM;
export const ETRE_USE_IDS: Record<(typeof THE_USES)[number], string[]> = {
  identity: useIds('identity'),
  profession: useIds('profession'),
  origin: useIds('origin'),
  description: useIds('description'),
};

// The role-play alternatives are NOT authored in this file. `userEn` and the
// accepted `alts[]` for this lesson's scenario live in data/scenario-alts.ts,
// and withScenarioAlts attaches them here so that every consumer — the batch
// that writes Postgres, the merge script that writes seed.json, and the tests
// that compare the two — sees the same enriched lesson.
//
// Before 2026-08-09 they lived in seed.json ONLY. apply-scenario-alts.ts wrote
// the seed and said so; nobody updated the fourteen authored sources, so each
// of their batches held a poorer copy of its own lesson and would have written
// it straight back. That is not hypothetical: re-rendering a1.03 destroyed five
// turns exactly this way on 2026-08-07.
export const ETRE_LESSON: Lesson = withScenarioAlts(ETRE_LESSON_AUTHORED);
