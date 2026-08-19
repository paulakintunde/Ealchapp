// a1.10.l1 "Les saisons & la météo", the mission journey.
//
// The corpus findings that changed this build are in the header of
// meteo-corpus.ts and are not repeated here. In three lines: this lesson
// authors NOTHING, because every word it needs was already published including
// « Quel temps fait-il ? », which the brief says returns zero; fifteen rows it
// wanted are withdrawn because importing them moves seven of a1.03's printed
// figures; and the four seasons are taught from `jours-et-mois` because that is
// where the prepositional forms live and the preposition is the point.
//
// ── The teaching problem, which is one adjective and three verbs ───────────
//
// The canDo has two clauses and they are not the same size:
//
//     "Can name the seasons"          four words, one hook.  THREE missions.
//     "and describe today's weather"  the lesson.            THE REST.
//
// Describing weather in French means picking a frame, and English uses "is" for
// all three of them, so there is nothing to transfer:
//
//     il fait chaud        it is hot           the weather
//     j'ai chaud           I am hot            a person, from a1.07
//     le café est chaud    the coffee is hot   a thing, from a1.06
//
// The weighting follows the brief: "the weight belongs on the frames, not on
// the four season names. If naming the seasons takes two missions, that is
// correct." It takes three, and the frames take fourteen.
//
// ── faire is a2.12, and this lesson does not touch it ─────────────────────
//
// Verified: `faire` is taught in a2.12 "Irregular Verbs 2", a whole band away,
// and there is no regular-verb unit in A1 at all. A learner arriving here has
// être (a1.06) and avoir (a1.07) and nothing else.
//
// So `il fait` is taught as a FROZEN BLOCK and never conjugated. That is not a
// compromise, it is accurate: impersonal weather faire has exactly one form.
// There is no je fais beau, no nous faisons froid, no plural, no feminine. A
// learner who memorises `il fait` as two unanalysed words has learned
// everything there is to learn about this verb in this context.
//
//   s03-nobody's fourth card says so out loud, by name, and tells the learner
//   they will meet faire properly later. A learner who notices the gap and is
//   not told concludes the lesson is incomplete.
//
//   The batch, the merge and the test all assert that no authored surface
//   contains je fais, tu fais, nous faisons, vous faites, ils font or elles
//   font, so the lesson cannot leak a2.12 by accident later.
//
//   fr.a1.meteo.009 is the corpus row the brief points at, « Pour la météo, on
//   utilise « il fait » avec un adjectif. » It is NOT used. Paul's rule, set on
//   2026-08-04: in an A1 passage, anything not inside « » is English, and that
//   row is a French instruction sentence from end to end. The teaching it
//   carries is on s03-nobody instead, in English. Reported rather than quietly
//   dropped.
//
// ── The il is nobody, and the corpus proves the confusion is real ─────────
//
// In « il fait beau » the il points at nothing at all. The learner has just
// spent a1.05 learning that il means he, so every instinct is wrong here.
//
//   « Il fait du vent »  and  « Il fait du yoga »  are the same four words of
//   structure and share nothing else.
//
// Both are ALREADY IN THE SEED (fr.sons.nasales.018 and
// fr.a1.sports-et-loisirs.156), which is the happiest fact of this build: the
// sharpest teaching object in the lesson needed neither authoring nor
// importing. s04-collision puts them in two columns on ONE screen, because the
// whole value is that they look identical until you read the noun.
//
// ── What is deliberately left to its neighbours ───────────────────────────
//
//   THE MONTHS AND THE DAYS are a1.09's and a1.08's and both ship. No month and
//   no day name appears on any production surface. This costs something real:
//   « En avril, il pleut souvent à Paris » and « En été, il fait chaud en
//   juillet et en août » are both excellent weather sentences and both were
//   rejected for carrying a month.
//
//   THE CLOCK is a1.12. « Il fait nuit tôt en hiver » is a weather-frame
//   sentence and not an hour, so it stays; no time in figures appears anywhere.
//
//   CLOTHING is not a set this lesson teaches. Not one clothing card.
//
//   THE PASSÉ COMPOSÉ is recognition-only from a1.07 and « il a fait beau »
//   pulls hard toward it, especially since « il a » is one of the listening
//   contrasts. Past weather appears nowhere.
//
//   THE NEAR FUTURE is a2.02. « Il va pleuvoir » is how forecasts actually work
//   and it appears nowhere, not even as reading.
//
// ── Layout decisions, each of which is a bug someone else already shipped ──
//
//   `commonErrors` carries `swipe: true, size: 'lg'`. Without `swipe`,
//   MissionSection takes a fallback that returned undefined and drew a BLANK
//   mission (sons.08 m22, a1.01 m5).
//
//   `reading` carries `questionsInModal: true` WITH questions. That is the only
//   path that reaches PassagePage and so the only path that draws the glossary
//   underlines. a1.01 shipped five entries down the other path.
//
//   ONE `quiz` section. lessonPager.logic.ts appends exactly one quiz page.
//
//   No `autoplay` anywhere: declared in schema.ts, implemented in no component.
//   `audioFirst`, which ScenePlayer genuinely implements, is used on the break.
//
//   The reading passage is ONE BLOCK with no line breaks. PassagePage splits on
//   `/(?<=[.!?»])\s+/`, so an authored newline is silently discarded.
//
//   `tapTable` is NOT in ownsLayout(), so s04-collision, s06-enau and s09-three
//   all render inside a SCROLLING page. s09-three is the screen the brief calls
//   "the single most valuable screen in the lesson": three columns, one
//   adjective held constant, four rows, every cell four words or fewer, with
//   the teaching in the detail modal, which is a card and can hold prose.
//
//   `size` is not decoration. ownsLayout() ignores it; density.logic.ts reads
//   `xl` as a 12-WORD CAP ON EVERY STRING in the section. s05-seasons is the
//   only xl section here and every card is one French frame with a short gloss,
//   which is what makes xl correct there and fatal anywhere a sentence appears.
//
//   s13-shapes is a groupDrill and is deliberately NOT xl. At xl it would own
//   the layout and cap every string at 12 words, and four shapes with three
//   examples each want their labels readable side by side.
//
//   A `groupDrill` control page carries `items: []` explicitly, and no `size`.
//
//   NO WEATHER WIDGET. The brief is right that there is no section type that
//   draws a weather icon set, that there is no `color`, `swatch` or `icon`
//   field, and that an authored field no component reads renders nothing. The
//   weather is a `cardDeck` and three `tapTable`s, all of which exist and are
//   known to render.
//
//   NO U+203F. Four imported rows carry the tie in their own `ipa` and this
//   lesson displays none of them; every transcription on a screen comes from
//   RESPELL in meteo-corpus.ts, which is written without it. The batch greps
//   the authored half.
//
// ── The dictée targets were chosen by measurement ──────────────────────────
//
// Every target is asserted through the real `dicteeMode` and `wordDecoys` in
// the batch, the merge and the test rather than against a restated threshold.
// The set is built so that all three frames are spelled and so that at least
// one word-mode target hands the learner an `est` tile it does not want, which
// is this lesson's error made visible on the page.

import type {
  ErrorTrigger, Lesson, LessonAct, LessonDrill, LessonSection, ReferenceSheet, SceneBeat,
} from '../../../ealch-v2/src/content/schema.ts';
import { METEO_TERMS, REFRAME } from './meteo-terms.ts';
import { unitRef } from './_unit-ref.ts';
import {
  BORROWED_IDS, CLOCK_WORDS, DAY_WORDS, FAIRE_FORMS, IMPORTED_IDS, IN_ENGLISH, MONTH_WORDS,
  REUSED_IDS, SEASON_FRAME, SEASON_IDS, SHAPES, THE_FOUR, enFor, enOf, frOf, ipaOf, seasonsIn, sub,
} from './meteo-corpus.ts';

export { REFRAME };

/* ─── The corpus this lesson sequences ─────────────────────────────────────
 *
 * Grouped by the job the ids do, so a section names a GROUP and the tranche
 * slices read from the same groups rather than restating a word list.
 *
 * Every id below is SHOWN on a screen, or named by a drill or a term. a1.08
 * shipped 43 itemIds named by nothing at all, released to spaced repetition and
 * drawn by no component, and it was invisible until a check asked "did the
 * learner see it" rather than "does this id resolve". The same check runs here,
 * in the batch, the merge and the test.                                      */

/** The four season frames. The only vocabulary of act 2, and the four rows that
 *  carry the preposition on the card rather than beside it. */
const SEASONS = SEASON_IDS;

/** The weather frames themselves: shape 1, shape 3 and shape 4 as headwords.
 *  Eleven rows, every one a phrase or a spaceless-noun-free word, so not one of
 *  them joins a1.03's ending population. */
const FRAMES = [
  'fr.a1.meteo.027', // il fait beau
  'fr.a1.meteo.029', // il fait chaud          REUSED, already in the seed
  'fr.a1.meteo.028', // il fait froid
  'fr.a1.meteo.039', // il fait frais
  'fr.a1.meteo.038', // il fait doux
  'fr.a1.meteo.037', // il fait mauvais
  'fr.a1.meteo.006', // il pleut
  'fr.a1.meteo.034', // il neige
  'fr.a1.meteo.031', // il y a du soleil
  'fr.a1.meteo.035', // il y a du vent
  'fr.a1.meteo.183', // Quel temps fait-il ?
];

/** The three frames, one adjective. Nine rows, and the three that matter most
 *  (il fait chaud / J'ai chaud. / Le café est chaud.) were already in the seed
 *  before this lesson existed. */
const THREE_FRAMES = [
  'fr.a1.meteo.029',            // il fait chaud            the weather
  'fr.a1.famille.228',          // J'ai chaud.              a person
  'fr.sons.voyelles.414',       // Le café est chaud.       a thing
  'fr.a1.meteo.028',            // il fait froid            the weather
  'fr.a1.corps.107',            // J'ai froid aux pieds.    a person
  'fr.a1.rp-meteo-nature.091',  // Le vent est froid.       a thing
  'fr.a1.emotions.017',         // avoir froid
  'fr.a1.emotions.018',         // avoir chaud
  'fr.a1.famille.230',          // Tu as froid ?
  'fr.a1.emotions.091',         // Elle a chaud dans la salle d'attente.
  'fr.a1.mots-essentiels.045',  // Le café est chaud et le thé est froid.
];

/** The personal-il collision, both senses, six rows. Three weather and three a
 *  person, so neither reading can be dismissed as a one-off. */
const COLLISION = [
  'fr.sons.nasales.018',              // Il fait du vent dehors.               weather
  'fr.a1.rp-meteo-nature.078',        // Il fait du brouillard ce matin.       weather
  'fr.a1.mots-de-liaison.007',        // Il pleut, en plus il fait du vent.    weather
  'fr.a1.sports-et-loisirs.156',      // Il fait du yoga tous les matins.      a man
  'fr.a1.sports-et-loisirs.169',      // Il fait de la pêche près de la rivière. a man
  'fr.a2.presentation-personnelle.087', // Il fait du sport tous les jours.    a man
  'fr.a1.emotions.096',               // Il a froid dans le bureau.            a man
];

/** The seasons in the wild. One sentence per season at least, so no season is
 *  taught as a card with nothing to do. */
const WILD_SEASONS = [
  'fr.a1.faux-amis.152',                // Le village est très joli au printemps.
  'fr.a1.meteo.238',                    // Il fait bon vivre ici au printemps.
  'fr.a1.adjectifs-essentiels.254',     // Les jours sont chauds en été.
  'fr.a1.meteo.005',                    // Il pleut beaucoup en automne.
  'fr.a1.temps-et-frequence.032',       // Il pleut souvent en automne.
  'fr.a1.meteo.004',                    // Il fait froid en hiver.
  'fr.a1.meteo.257',                    // Il fait nuit tôt en hiver.
  'fr.a1.quebec-et-francophonie.088',   // Il neige beaucoup en hiver à Québec.
];

/** The weather in the wild, and the question that opens a conversation about
 *  it. Fourteen rows across five themes. */
const WILD_WEATHER = [
  'fr.a1.meteo.008',              // Il fait chaud aujourd'hui.
  'fr.a1.meteo.227',              // Le matin, il fait frais.
  'fr.a1.meteo.261',              // Il fait doux aujourd'hui.
  'fr.a1.meteo.262',              // Il fait frais ce soir.
  'fr.a1.meteo.067',              // Il pleut depuis ce matin, et le ciel est gris.
  'fr.a1.meteo.070',              // Il y a du soleil aujourd'hui.
  'fr.a1.meteo.268',              // Il y a du brouillard sur la route.
  'fr.a1.meteo.269',              // Il y a de l'orage cette nuit.
  'fr.a1.rp-meteo-nature.005',    // Il fait beau et il y a du soleil.
  'fr.a1.meteo.220',              // Il fait vingt degrés aujourd'hui.
  'fr.a1.rp-meteo-nature.006',    // Il fait vingt-cinq degrés.
  'fr.a1.nombres.061',            // Il fait moins cinq degrés ce matin.
  'fr.a1.expressions-frequentes.087', // Ça dépend du temps qu'il fait.
];

/** Asking, as sentences. The brief says this is the one thing to author from
 *  nothing. All four already existed. */
const ASKING = [
  'fr.a1.meteo.213',      // Quel temps fait-il aujourd'hui ?
  'fr.a1.questions.108',  // Quel temps fait-il aujourd'hui ?
  'fr.a1.questions.115',  // Fait-il beau à Paris en ce moment ?
  'fr.a1.questions.116',  // Est-ce qu'il y a du vent aujourd'hui ?
];

const ITEM_IDS = [
  ...new Set([...SEASONS, ...FRAMES, ...THREE_FRAMES, ...COLLISION, ...WILD_SEASONS, ...WILD_WEATHER, ...ASKING]),
];

/** Spoken practice draws ONLY from items carrying `voiceflash`, because that is
 *  the drill the mic-scored deck runs. An item without it renders as a card the
 *  learner cannot be scored on, which looks like a broken mission rather than a
 *  missing tag.
 *
 *  Verified against POSTGRES, not the seed, on 2026-08-06. The constraint bites
 *  in one place worth reporting: `il pleut` (fr.a1.meteo.006) carries
 *  `flashcard` only and `cardType: 'conjugation'`, and the only voiceflash
 *  « il pleut » anywhere is fr.b1.rp-meteo-nature.034, which is B1. So the
 *  spoken mission cannot include it. It is produced in the quiz instead, by the
 *  `speak` question in r5, whose target is a display string rather than an id. */
const SPEAK_IDS = [
  ...SEASONS,
  'fr.a1.meteo.027', 'fr.a1.meteo.028', 'fr.a1.meteo.029',
  'fr.a1.meteo.037', 'fr.a1.meteo.038', 'fr.a1.meteo.039',
  'fr.a1.meteo.034', 'fr.a1.meteo.031', 'fr.a1.meteo.035',
  'fr.a1.meteo.183',
  'fr.a1.emotions.017', 'fr.a1.emotions.018',
  'fr.a1.famille.228', 'fr.a1.famille.230',
];

/** The dictée. Five targets, and between them the learner spells all three
 *  frames, both readings of `il`, and one season.
 *
 *  Every id carries the `dictation` drill, verified against Postgres. The modes
 *  are printed by the batch and the merge through the real `dicteeMode` rather
 *  than guessed from length. */
const DICTATION_IDS = [
  'fr.a1.meteo.262',              // Il fait frais ce soir.            the weather
  'fr.a1.emotions.096',           // Il a froid dans le bureau.        a person, and the personal il
  'fr.a1.rp-meteo-nature.091',    // Le vent est froid.                a thing
  'fr.a1.temps-et-frequence.032', // Il pleut souvent en automne.      shape 3, and a season
  'fr.a1.questions.108',          // Quel temps fait-il aujourd'hui ?  asking
];

/* ─── Mission 1 · Scene ────────────────────────────────────────────────────
 *
 * The A1 register of stakes is being misread as a person rather than being
 * misunderstood, and the brief names the sharper of two options: "Someone says
 * `il fait du vent` and the learner hears a man doing something. The sharper
 * beat, because it dramatises the exact confusion the lesson exists to fix."
 *
 * Nadia is showing the learner round the roof of her building. She says it is
 * windy up there. The learner has done a1.05, knows il means he, and answers
 * about a man. Nobody is corrected and nobody is annoyed: she just answers the
 * question she was asked, which is about a person who is not there, and the
 * conversation goes somewhere neither of them meant.
 *
 * The choice beat is « j'ai chaud » against « il fait chaud », which is the
 * pair the brief asks for, and it is the one the learner will actually need in
 * the next five minutes of the same conversation.                            */

const SCENE_BEATS: SceneBeat[] = [
  {
    kind: 'narration',
    size: 'md',
    text: 'Nadia has a flat with a roof terrace, and she has been promising to show you it since March.',
    audio: { mode: 'tts', voice: 'coach' },
  },
  {
    kind: 'narration',
    size: 'md',
    text: 'Six floors up, one door, and a view over the whole street. She pushes it open and stops on the step.',
    audio: { mode: 'tts', voice: 'coach' },
  },
  {
    kind: 'bubble',
    from: 'them',
    reveal: 'tap',
    size: 'md',
    speaker: 'Nadia',
    fr: frOf('fr.sons.nasales.018'),
    en: 'It is windy outside.',
    respell: sub('il fait du vent'),
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a1-10-collision' },
  },
  {
    kind: 'narration',
    size: 'md',
    text: 'You have four words of that and you know three of them. Il means he. So somebody is doing something.',
    audio: { mode: 'tts', voice: 'coach' },
  },
  {
    kind: 'bubble',
    from: 'you',
    reveal: 'auto',
    size: 'md',
    fr: 'Ah bon ? Qui ?',
    en: '(Oh really? Who?)',
    audio: { mode: 'tts', lang: 'fr-FR' },
  },
  {
    kind: 'bubble',
    from: 'them',
    reveal: 'tap',
    size: 'md',
    speaker: 'Nadia',
    fr: 'Qui ? Personne. Le vent !',
    en: 'Who? Nobody. The wind!',
    stage: 'She laughs, points at the sky, and you spend a while working out what just happened.',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a1-10-scene' },
  },
  {
    kind: 'narration',
    size: 'md',
    text: 'It is warm out here, and the sun is straight on you. You want to say so before she offers you a jumper.',
    audio: { mode: 'tts', voice: 'coach' },
  },
  {
    kind: 'choice',
    size: 'lg',
    prompt: 'You are the one who is hot, not the terrace. What goes out?',
    options: [
      {
        fr: 'Je suis chaud.',
        respell: '[zhuh SWEE SHOH]',
        en: 'the one built the English way',
        outcome: 'breaks',
        audio: { mode: 'tts', lang: 'fr-FR' },
      },
      {
        fr: frOf('fr.a1.famille.228'),
        respell: sub("j'ai chaud"),
        en: 'the one that says you have hot',
        outcome: 'works',
        audio: { mode: 'tts', lang: 'fr-FR' },
      },
    ],
    followUp: {
      works: 'Yes. A person HAS hot in French, and that is two words you can reuse forever.',
      breaks: 'Every word in that is a real French word. Watch what the sentence turns into.',
    },
  },
  {
    kind: 'break',
    size: 'lg',
    // 36 words. The shipped scene breaks run 24 to 40 here.
    heading: 'Two sentences, and neither was about what you meant',
    body: 'She said the weather and you heard a man. Then you reached for the word English uses and said something about yourself that you did not mean. Nothing was mispronounced, and nothing got corrected either time.',
    wrong: {
      fr: 'Je suis chaud.',
      ipa: '/ʒə sɥi ʃo/',
      respell: '[zhuh SWEE SHOH]',
      en: 'Says something about you that is not the temperature',
    },
    right: {
      fr: frOf('fr.a1.famille.228'),
      ipa: ipaOf("j'ai chaud"),
      respell: sub("j'ai chaud"),
      en: 'I am hot, which is what you meant',
    },
    coach: `${REFRAME} Three verbs, one adjective, and English hands you the wrong one twice.`,
    // Audio-first: the ear answers before the eye can. `autoplay` is NOT set. It
    // is declared in schema.ts and implemented in no component.
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], audioFirst: true, recordingId: 'rec-a1-10-frames' },
  },
  {
    kind: 'bubble',
    from: 'you',
    reveal: 'tap',
    size: 'md',
    speaker: 'Second try',
    fr: frOf('fr.a1.famille.228'),
    en: 'I am hot.',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65] },
  },
  {
    kind: 'bubble',
    from: 'them',
    reveal: 'auto',
    size: 'md',
    speaker: 'Nadia',
    fr: 'Oui, il fait chaud ici. On rentre ?',
    en: 'Yes, it is hot here. Shall we go in?',
    stage: 'She says the weather version straight back at you, and now you can hear the difference.',
    audio: { mode: 'tts', lang: 'fr-FR' },
  },
  {
    kind: 'resolve',
    size: 'md',
    text: 'One adjective, three sentences, and which one you want depends on what is hot.',
  },
];

const SECTIONS: LessonSection[] = [
  /* ── Act 1: the sentence with nobody in it ────────────────────────────── */

  {
    type: 'scene',
    id: 's01-scene',
    title: 'Nobody On The Roof',
    frSub: 'Personne sur le toit',
    render: 'screens',
    layer: 'core',
    terms: ['emptyIl', 'weatherFrame', 'personFrame'],
    say: {
      text: 'Four words, and you know three of them. That is what makes this one worth watching.',
      voice: 'coach',
      timing: 'onFirstVisitOnly',
    },
    setting: {
      place: 'A roof terrace six floors up, one door, and a view over the street',
      city: 'Lyon',
      time: 'Late afternoon, early spring',
      ambience: 'room-tone-lobby',
    },
    beats: SCENE_BEATS,
    // Referenced, never retyped, so this appearance cannot drift out of
    // agreement with the seven others the density validator counts.
    closing: {
      size: 'md',
      text: `${REFRAME} That is the whole of the next twenty-five minutes.`,
    },
  },

  {
    type: 'goals',
    id: 's02-goals',
    title: 'What You Will Be Able To Do',
    frSub: 'Ce que vous saurez faire',
    layer: 'core',
    say: 'Four things, and the third one is where almost everybody goes wrong.',
    goals: [
      { t: 'Name the four seasons', s: 'And the small word each one takes, because three take the same one and spring does not.' },
      { t: 'Say what the weather is doing', s: 'Two words in front, and they never change no matter what follows them.' },
      { t: 'Say who is hot and what is hot', s: 'Three ways to build the same sentence, and English gives you no help choosing.' },
      { t: 'Ask somebody about the weather', s: 'The one question that opens more conversations in French than anything else you know.' },
    ],
  },

  {
    type: 'cardDeck',
    id: 's03-nobody',
    title: 'The Sentence With Nobody In It',
    frSub: 'Il ne désigne personne',
    hint: 'Swipe through the four cards.',
    render: 'deck',
    layer: 'core',
    size: 'lg',
    terms: ['emptyIl', 'weatherFrame'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a1-10-collision' },
    say: 'Read this one properly. It undoes something the pronouns lesson taught you, in one place only.',
    cards: [
      {
        label: 'This is new',
        head: 'il, pointing at nothing',
        fr: 'il fait beau',
        sub: `${sub('il fait beau')} · the weather is nice`,
        body: 'The pronouns lesson taught you that il means he, and that is true everywhere except here. In a weather sentence il points at nobody: not a man, not a thing, not something said earlier. It is holding a space open.',
      },
      {
        label: 'The frame',
        head: 'il fait, then what it is like',
        fr: frOf('fr.a1.meteo.008'),
        sub: `${sub('il fait chaud')} · it is hot today`,
        body: 'Two words in front, then the word for what the weather is like. Il fait chaud, il fait froid, il fait beau, il fait frais. Nothing agrees with anything and nothing changes.',
      },
      {
        label: 'It never changes',
        head: 'There is only ever il fait',
        fr: 'il fait',
        sub: 'one form, no others',
        body: 'This is the only shape this verb has when it is talking about the weather. There is no other person and no plural, so you can learn these two words as one block and use them for the rest of your life.',
      },
      {
        // The a2.12 handover, by name. A learner who notices the gap and is not
        // told concludes the lesson is incomplete. See the header.
        label: 'What comes later',
        head: 'You will meet this verb properly',
        fr: 'il fait beau',
        sub: 'for now, one block',
        body: 'The verb behind il fait has other shapes, and they are taught in their own lesson higher up. You need none of them for the weather, which only ever uses this one. Learn the block now and the rest will fit around it later.',
      },
    ],
  },

  {
    // The pair the brief calls the sharpest teaching object in the lesson. Two
    // columns, ONE screen, and the whole value is that they look identical
    // until you read the noun. tapTable is not in ownsLayout(), so this scrolls.
    type: 'tapTable',
    id: 's04-collision',
    title: 'Same Four Words, Two Different Sentences',
    frSub: 'Le vent ou un homme ?',
    layer: 'core',
    terms: ['emptyIl', 'weatherFrame'],
    sheetId: 'sheet.a1.10.frames',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a1-10-collision' },
    say: 'Read a row across, not down. The word after du is the only thing telling you who this is about.',
    cols: ['The weather, il is nobody', 'A person, il is a man', 'What decides it'],
    rows: [
      {
        cells: ['Il fait du vent.', 'Il fait du yoga.', 'vent or yoga'],
        say: `${frOf('fr.sons.nasales.018')} ${frOf('fr.a1.sports-et-loisirs.156')}`,
        detail: {
          title: `${sub('il fait du vent')} · ${sub('il fait du yoga')}`,
          body: `${frOf('fr.sons.nasales.018')} is the sky. ${frOf('fr.a1.sports-et-loisirs.156')} is a man in a room. Four words of identical shape, and the noun at the end is the entire difference between them.`,
          say: `${frOf('fr.sons.nasales.018')} ${frOf('fr.a1.sports-et-loisirs.156')}`,
        },
      },
      {
        cells: ['Il fait du brouillard.', 'Il fait de la pêche.', 'weather or hobby'],
        say: `${frOf('fr.a1.rp-meteo-nature.078')} ${frOf('fr.a1.sports-et-loisirs.169')}`,
        detail: {
          title: 'It is not a one-off',
          body: `${frOf('fr.a1.rp-meteo-nature.078')} is fog. ${frOf('fr.a1.sports-et-loisirs.169')} is a man with a rod. Both are ordinary, both are common, and neither one marks itself.`,
          say: `${frOf('fr.a1.rp-meteo-nature.078')} ${frOf('fr.a1.sports-et-loisirs.169')}`,
        },
      },
      {
        cells: ['Il pleut.', 'Il fait du sport.', 'no noun at all'],
        say: `${frOf('fr.a1.mots-de-liaison.007')} ${frOf('fr.a2.presentation-personnelle.087')}`,
        detail: {
          title: 'When there is nothing after it',
          body: `${frOf('fr.a1.mots-de-liaison.007')} has two weather sentences in it and no person anywhere. ${frOf('fr.a2.presentation-personnelle.087')} is a man who exercises. Read to the end before you decide who il is.`,
          say: `${frOf('fr.a1.mots-de-liaison.007')} ${frOf('fr.a2.presentation-personnelle.087')}`,
        },
      },
      {
        cells: ['Il fait froid.', 'Il a froid.', 'fait or a'],
        say: `${frOf('fr.a1.meteo.004')} ${frOf('fr.a1.emotions.096')}`,
        detail: {
          title: `${sub('il fait froid')} · ${sub('il a froid')}`,
          body: `${frOf('fr.a1.meteo.004')} is the season. ${frOf('fr.a1.emotions.096')} is a man who wants his coat. Here il really is a person, and the verb is what tells you so.`,
          say: `${frOf('fr.a1.meteo.004')} ${frOf('fr.a1.emotions.096')}`,
        },
      },
    ],
  },

  /* ── Act 2: four seasons ──────────────────────────────────────────────── */

  {
    // The only xl section in the lesson. density.logic.ts caps EVERY string
    // here at 12 words, which is correct because each card is one short French
    // frame with a gloss. THE PREPOSITION IS ON THE CARD: the brief is explicit
    // that splitting it off makes the deck decorative.
    type: 'cardDeck',
    id: 's05-seasons',
    title: 'Four Seasons, One Screen Each',
    frSub: 'Les quatre saisons',
    hint: 'Swipe. Say each one out loud.',
    render: 'deck',
    layer: 'core',
    size: 'xl',
    terms: ['seasonIn'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a1-10-seasons' },
    say: 'Four screens, one season each, and the small word is part of the card rather than a footnote.',
    cards: THE_FOUR.map((s, i) => ({
      label: `${i + 1} of 4`,
      fr: SEASON_FRAME[s],
      sub: sub(SEASON_FRAME[s]),
      body: `In ${IN_ENGLISH[s]}. ${s === 'printemps' ? 'The only au.' : 'One of the three en.'}`,
    })),
  },

  {
    // ALL FOUR PREPOSITIONS ON ONE SCREEN. The brief: "at least one section
    // shows all four prepositions together. Splitting them across screens is
    // how the exception gets lost."
    type: 'tapTable',
    id: 's06-enau',
    title: 'Three En, And One Au',
    frSub: 'En ou au ?',
    layer: 'core',
    terms: ['seasonIn'],
    sheetId: 'sheet.a1.10.seasons',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a1-10-seasons' },
    say: 'All four here together on purpose. The odd one out is only obvious while you can see the other three.',
    cols: ['The season', 'In it', 'Sounds like'],
    rows: [
      // Each row's detail QUOTES a real sentence carrying that season, so the
      // eight corpus rows act 2's tranche releases are shown in act 2 rather
      // than first appearing in a drill three acts later. A card released
      // before its mission is a card the learner is asked to rate before they
      // have met it, and a1.08 shipped exactly that and had to move five.
      ...THE_FOUR.map((s) => ({
        cells: [
          s === 'printemps' ? 'le printemps' : s === 'été' ? "l'été" : s === 'automne' ? "l'automne" : "l'hiver",
          SEASON_FRAME[s],
          sub(SEASON_FRAME[s]),
        ],
        say: SEASON_FRAME[s],
        detail: {
          title: `${SEASON_FRAME[s]} · in ${IN_ENGLISH[s]}`,
          body: {
            printemps: `The one that is different, and the only one to remember separately. ${frOf('fr.a1.faux-amis.152')} ${frOf('fr.a1.meteo.238')}`,
            été: `Like the other two that take en. Say it as one piece rather than two words. ${frOf('fr.a1.adjectifs-essentiels.254')}`,
            automne: `The n at the end is real and the m is silent. ${frOf('fr.a1.meteo.005')} ${frOf('fr.a1.temps-et-frequence.032')}`,
            hiver: `The h is silent, so en runs straight into it. ${frOf('fr.a1.meteo.004')} ${frOf('fr.a1.meteo.257')} ${frOf('fr.a1.quebec-et-francophonie.088')}`,
          }[s],
          say: SEASON_FRAME[s],
        },
      })),
      {
        cells: ['the hook', 'vowel or not', 'works on these four'],
        say: 'au printemps, en été, en automne, en hiver',
        detail: {
          title: 'A hook for exactly these four words',
          body: 'The three that take en all begin on a vowel sound, and printemps begins on a consonant. That is completely reliable for these four and it is not a rule about French generally, so use it to hold the set and nothing wider.',
          say: 'au printemps, en été, en automne, en hiver',
        },
      },
      {
        cells: ['automne', 'the silent m', sub('automne')],
        say: 'automne',
        detail: {
          title: 'The m in automne is not there',
          body: 'Written au-t-o-m-n-e and said with no m at all: it comes out close to oh-TONN. The n at the end is a real n that you do pronounce, which is unusual and worth thirty seconds on its own.',
          say: 'automne',
        },
      },
    ],
  },

  {
    type: 'groupDrill',
    id: 's07-check',
    title: 'Which Season Is Different?',
    frSub: 'Contrôle',
    layer: 'core',
    terms: ['seasonIn'],
    // A control page: one group, one question, no words. `items: []` is set
    // EXPLICITLY, and no `size`. GroupDrillView reads this shape as
    // `controlOnly` and holds the pager until the learner answers, which is the
    // whole reason a check is worth a page of its own.
    say: 'One question, and it is the only thing about the seasons you can get wrong.',
    groups: [
      {
        label: 'One question, then on',
        items: [],
        check: {
          q: 'You are telling somebody the garden is best in spring. Which one is right?',
          opts: ['en printemps', 'au printemps', 'à printemps', 'le printemps'],
          correct: 1,
          why: 'au printemps. Spring is the one season that does not take en, and the version with en is the one nobody says, so it is the one worth fixing now while there are only four words to hold.',
        },
      },
    ],
  },

  /* ── Act 3: weather makes, people have, things are ────────────────────── */

  {
    type: 'cardDeck',
    id: 's08-frames',
    title: 'Three Ways To Say Hot',
    frSub: 'Trois cadres, un adjectif',
    hint: 'Swipe through the four cards.',
    render: 'deck',
    layer: 'core',
    size: 'lg',
    terms: ['weatherFrame', 'personFrame', 'thingFrame'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a1-10-frames' },
    say: 'One adjective, three sentences. English uses is for all three, so there is nothing to carry across.',
    cards: [
      {
        label: 'The weather',
        head: 'il fait chaud',
        fr: frOf('fr.a1.meteo.029'),
        sub: `${sub('il fait chaud')} · it is hot out`,
        body: `${REFRAME} The sky, the street, the day: all of it takes il fait, and the il is nobody. This is the one you want when you are talking about being outside.`,
      },
      {
        label: 'A person',
        head: "j'ai chaud",
        fr: frOf('fr.a1.famille.228'),
        sub: `${sub("j'ai chaud")} · I am hot`,
        body: 'A person HAS hot in French. You met this in the avoir lesson as a fixed expression and nothing about it changes here. J\'ai chaud, tu as froid, elle a chaud.',
      },
      {
        label: 'A thing',
        head: 'le café est chaud',
        fr: frOf('fr.sons.voyelles.414'),
        sub: `${sub('le café est chaud')} · the coffee is hot`,
        body: 'An object is what it is, so this one takes être and matches English word for word. That is exactly why it gets used in the other two places, where it is wrong.',
      },
      {
        label: 'The one that stings',
        head: 'Never je suis chaud',
        fr: frOf('fr.a1.famille.228'),
        sub: 'not je suis chaud',
        body: `${REFRAME} Reaching for être about yourself produces a sentence that is real French and means something else entirely. Nobody will explain why they are laughing, so it is worth getting now.`,
      },
    ],
  },

  {
    // THE screen. Three columns, ONE adjective held constant across the row, so
    // the only thing changing is the frame. The brief calls it "the single most
    // valuable screen in the lesson" and requires the test to assert it.
    type: 'tapTable',
    id: 's09-three',
    title: 'One Adjective, Three Frames',
    frSub: 'Chaud, trois fois',
    layer: 'core',
    terms: ['weatherFrame', 'personFrame', 'thingFrame'],
    sheetId: 'sheet.a1.10.frames',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a1-10-frames' },
    say: `${REFRAME} Read across. Only the verb moves, and the adjective sits still.`,
    cols: ['The weather makes', 'A person has', 'A thing is'],
    rows: [
      {
        cells: ['il fait chaud', "j'ai chaud", 'le café est chaud'],
        say: `${frOf('fr.a1.meteo.029')}. ${frOf('fr.a1.famille.228')} ${frOf('fr.sons.voyelles.414')}`,
        detail: {
          title: 'chaud, three times, three verbs',
          body: `${frOf('fr.a1.meteo.029')} is the day. ${frOf('fr.a1.famille.228')} is you. ${frOf('fr.sons.voyelles.414')} is the cup. One adjective, and the verb carries the whole meaning.`,
          say: `${frOf('fr.a1.meteo.029')}. ${frOf('fr.a1.famille.228')} ${frOf('fr.sons.voyelles.414')}`,
        },
      },
      {
        cells: ['il fait froid', "j'ai froid", 'le vent est froid'],
        say: `${frOf('fr.a1.meteo.028')}. ${frOf('fr.a1.corps.107')} ${frOf('fr.a1.rp-meteo-nature.091')}`,
        detail: {
          title: `${sub("j'ai froid")} · ${sub('le vent est froid')}`,
          body: `${frOf('fr.a1.corps.107')} is about you rather than the room. ${frOf('fr.a1.rp-meteo-nature.091')} is the wind itself, which is a thing. Swap the adjective and nothing else about the rule moves.`,
          say: `${frOf('fr.a1.meteo.028')}. ${frOf('fr.a1.corps.107')} ${frOf('fr.a1.rp-meteo-nature.091')}`,
        },
      },
      {
        cells: ['il fait', 'avoir', 'être'],
        say: `${frOf('fr.a1.emotions.018')}, ${frOf('fr.a1.emotions.017')}`,
        detail: {
          title: 'The three, named',
          body: `${REFRAME} That line decides every sentence in this lesson and a great many it never shows you. Ask what is hot before you start, and the rest follows with no judgement in it.`,
          say: `${frOf('fr.a1.emotions.018')}, ${frOf('fr.a1.emotions.017')}`,
        },
      },
      {
        cells: ['a room', 'a person in it', 'a drink on the table'],
        say: `${frOf('fr.a1.emotions.091')} ${frOf('fr.a1.mots-essentiels.045')}`,
        detail: {
          title: 'All three in one room',
          body: `${frOf('fr.a1.emotions.091')} is a person, so avoir. ${frOf('fr.a1.mots-essentiels.045')} is two things, so être twice. The room itself would take il fait, and none of the three can borrow another one's verb.`,
          say: `${frOf('fr.a1.emotions.091')} ${frOf('fr.a1.mots-essentiels.045')}`,
        },
      },
    ],
  },

  {
    type: 'listening',
    id: 's10-ear',
    title: 'il fait, il a, il est',
    frSub: "À l'oreille",
    layer: 'core',
    questionsInModal: true,
    terms: ['weatherFrame', 'personFrame'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a1-10-frames' },
    // The brief: "listenChoose has one job and it is not the seasons. The four
    // season names sound nothing like each other. Use it on `il fait` against
    // `il a` and against `il est`, which is where the ear actually fails."
    say: 'These three all start the same and none of them is stressed. Slow the audio down before you answer.',
    lines: [
      { fr: 'il fait chaud', en: 'it is hot out' },
      { fr: 'il a chaud', en: 'he is hot' },
      { fr: 'il est chaud', en: 'it is hot, said about a thing' },
      { fr: 'il fait froid', en: 'it is cold out' },
      { fr: 'il a froid', en: 'he is cold' },
      { fr: 'il pleut', en: 'it is raining' },
    ],
    questions: [
      {
        q: 'Lines one and two are one syllable apart. Which one is about a person?',
        opts: ['line one, il fait chaud', 'line two, il a chaud', 'both of them', 'neither of them'],
        correct: 1,
        why: 'il a chaud. The verb is the only thing carrying that information, it is unstressed, and it is the shortest word in the sentence, which is exactly the combination that makes it easy to miss.',
      },
      {
        q: 'Line three is the one a learner produces about the weather by mistake. What is it actually about?',
        opts: ['the weather', 'a person', 'a thing', 'nothing, it is not French'],
        correct: 2,
        why: 'A thing. Il est chaud is a perfectly good sentence about an object, which is what makes it dangerous: it does not fail, it just stops being about the weather and starts being about something else.',
      },
      {
        q: 'Line six has nothing after the verb at all. Who or what is it about?',
        opts: ['a man', 'the sky, and nobody', 'whoever was mentioned before', 'you cannot tell'],
        correct: 1,
        why: 'Nobody. Il pleut is the whole sentence and its il points at nothing. There is no other way to say this in French, which is why the verb only ever appears in this one shape.',
      },
    ],
  },

  {
    type: 'groupDrill',
    id: 's11-sort',
    title: 'Who Or What Is Hot?',
    frSub: 'Les trois cadres',
    layer: 'core',
    terms: ['weatherFrame', 'personFrame', 'thingFrame'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a1-10-frames' },
    // Three groups, words only, no check. The check is s12, a page of its own,
    // which is the pattern sons.05, sons.06, a1.03, a1.07, a1.08 and a1.09 all
    // use. No size is set, so this is the plain stacked branch.
    say: 'Read down each column and say what the sentence is about before you read the verb.',
    groups: [
      {
        label: 'The weather makes',
        items: ['fr.a1.meteo.008', 'fr.a1.meteo.004', 'fr.a1.meteo.227', 'fr.a1.meteo.262', 'fr.a1.meteo.220']
          .map((id) => ({ fr: frOf(id), itemId: id, en: enOf(id) })),
      },
      {
        label: 'A person has',
        items: ['fr.a1.famille.228', 'fr.a1.famille.230', 'fr.a1.corps.107', 'fr.a1.emotions.091', 'fr.a1.emotions.096']
          .map((id) => ({ fr: frOf(id), itemId: id, en: enOf(id) })),
      },
      {
        label: 'A thing is',
        items: ['fr.sons.voyelles.414', 'fr.a1.rp-meteo-nature.091', 'fr.a1.mots-essentiels.045', 'fr.a1.meteo.067']
          .map((id) => ({ fr: frOf(id), itemId: id, en: enOf(id) })),
      },
    ],
  },

  {
    type: 'groupDrill',
    id: 's12-check',
    title: 'Which One Do You Want?',
    frSub: 'Contrôle',
    layer: 'core',
    terms: ['personFrame'],
    say: 'One question, and it is the one the opening scene turned on.',
    groups: [
      {
        label: 'One question, then on',
        items: [],
        check: {
          q: 'You have just come in from the snow and you want to say that YOU are cold. What do you say?',
          opts: ['Je suis froid.', "J'ai froid.", 'Il fait froid.', "C'est froid."],
          correct: 1,
          why: 'A person has cold in French. The third is true about the weather and is not an answer about you, and the first and fourth are the two ways an English speaker builds this sentence out of être.',
        },
      },
    ],
  },

  /* ── Act 4: four shapes, not one ──────────────────────────────────────── */

  {
    // Four shapes with three or four examples each, which is what a groupDrill
    // is for. Deliberately NOT xl: at xl it owns the layout and caps every
    // string at 12 words, and these labels have to be readable side by side.
    type: 'groupDrill',
    id: 's13-shapes',
    title: 'Four Shapes, Not One',
    frSub: 'Quatre structures',
    layer: 'core',
    terms: ['weatherFrame', 'emptyIl'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a1-10-shapes' },
    say: 'Four ways to build a weather sentence, then the question that gets you any of them.',
    groups: [
      // Each shape carries its bare frames AND, where the corpus has one, a
      // real sentence with an itemId. The frames teach the shape; the sentences
      // are what the SRS gets, and an itemId on no screen is the failure this
      // project keeps shipping.
      ...SHAPES.map((shape) => ({
        label: shape.label,
        items: [
          ...shape.frames.map((fr) => ({ fr, respell: sub(fr), en: enFor(fr) })),
          ...({
            adjective: ['fr.a1.meteo.261'],
            partitive: [] as string[],
            verb: ['fr.a1.quebec-et-francophonie.088'],
            ilya: ['fr.a1.meteo.268', 'fr.a1.meteo.269'],
          }[shape.key] ?? []).map((id) => ({ fr: frOf(id), itemId: id, en: enOf(id) })),
        ],
      })),
      {
        // The temperature, which is where a1.02 and a1.27 pay off inside this
        // lesson. It is not a fifth shape: every line here is shape 1 with a
        // number where the describing word goes.
        label: 'the same first shape, with a number in it',
        items: ['fr.a1.meteo.220', 'fr.a1.rp-meteo-nature.006', 'fr.a1.nombres.061']
          .map((id) => ({ fr: frOf(id), itemId: id, en: enOf(id) })),
      },
      {
        // And how to ask for any of the above. s16-ask teaches the question as
        // a block; this is where the three real sentences carrying it live.
        label: 'and how to ask for any of them',
        items: ASKING.map((id) => ({ fr: frOf(id), itemId: id, en: enOf(id) })),
      },
    ],
  },

  {
    type: 'cardDeck',
    id: 's14-overlap',
    title: 'Two Of Them Overlap',
    frSub: 'Il fait du vent ou il y a du vent',
    hint: 'Swipe through the four cards.',
    render: 'deck',
    layer: 'core',
    size: 'lg',
    terms: ['weatherFrame'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a1-10-shapes' },
    say: 'Two of the four shapes say the same thing, and you need telling before you meet both.',
    cards: [
      {
        label: 'Both are right',
        head: 'il fait du vent · il y a du vent',
        fr: 'il fait du vent',
        sub: `${sub('il fait du vent')} · ${sub('il y a du vent')}`,
        body: 'These two mean the same thing and both are ordinary French. Nobody prefers one. If you meet both and nobody says so, you will assume one of them is a mistake and spend a year avoiding it.',
      },
      {
        label: 'What follows',
        head: 'A thing, not a describing word',
        fr: frOf('fr.a1.meteo.070'),
        sub: `${sub('il y a du soleil')} · it is sunny`,
        body: 'Both of these shapes take du or de la and then a thing: du vent, du soleil, du brouillard. That is the small word the partitive lesson gave you, doing exactly the job it was taught for.',
      },
      {
        label: 'The short shape',
        head: 'il pleut · il neige',
        fr: 'il pleut',
        sub: `${sub('il pleut')} · ${sub('il neige')}`,
        body: 'Two of them are the whole sentence on their own. Nothing goes in front and nothing goes after, and there is no version of these with il fait attached to them.',
      },
      {
        label: 'The trap',
        head: 'Never il fait pleut',
        fr: 'il pleut',
        sub: 'not il fait pleut',
        body: 'Welding the first shape onto the third is what a learner produces after being told that il fait is the weather phrase. It is one or the other, never both, and this is the error worth being warned about in advance.',
      },
    ],
  },

  {
    type: 'commonErrors',
    id: 's15-traps',
    // `swipe` and `size` are not decoration. MissionSection renders
    // commonErrors as its own swipe deck ONLY when `swipe` is set; without it
    // the section falls through to a path that drew a BLANK screen on sons.08
    // m22 and a1.01 m5.
    swipe: true,
    size: 'lg',
    title: 'Five Traps',
    frSub: 'Cinq pièges',
    layer: 'core',
    terms: ['weatherFrame', 'personFrame', 'seasonIn'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a1-10-traps' },
    say: `${REFRAME} Five sentences an English speaker produces in their first month, one per screen.`,
    errors: [
      {
        wrong: 'Saying « Je suis chaud » when you are too warm.',
        right: 'Saying « J\'ai chaud ».',
        why: 'A person has hot in French. The version with être is a real sentence about something else, so nobody corrects it and nobody forgets it either. This is the one that actually embarrasses people.',
      },
      {
        wrong: 'Saying « Il est chaud aujourd\'hui » about the weather.',
        right: 'Saying « Il fait chaud aujourd\'hui ».',
        why: 'Être belongs to things. Used about the day it turns a weather report into a remark about some object nobody has mentioned, and it survives because the sentence still parses perfectly well.',
      },
      {
        wrong: 'Saying « En printemps, il fait doux ».',
        right: 'Saying « Au printemps, il fait doux ».',
        why: 'Three seasons take en and spring takes au. Nobody says the version with en, so this one stops rather than shifting, and it is the only thing about the four seasons you can get wrong.',
      },
      {
        wrong: 'Saying « Il fait pleut depuis ce matin ».',
        right: 'Saying « Il pleut depuis ce matin ».',
        why: 'Il pleut is the whole sentence already. Bolting il fait onto it is what comes out after a lesson that teaches il fait as the weather phrase, and it is one shape or the other, never both.',
      },
      {
        wrong: 'Hearing « Il fait du vent » as a man doing something.',
        right: 'Hearing it as the sky, with nobody in the sentence.',
        why: 'The pronouns lesson taught you that il means he and this is the place it stops. Read the noun at the end before you decide: vent is the weather and yoga is a man, and nothing else in the two sentences differs.',
      },
    ],
  },

  {
    type: 'cardDeck',
    id: 's16-ask',
    title: 'Asking About It',
    frSub: 'Quel temps fait-il ?',
    hint: 'Swipe through the three cards.',
    render: 'deck',
    layer: 'core',
    size: 'lg',
    terms: ['weatherFrame'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a1-10-asking' },
    say: 'One question, learned as a block. It opens more conversations in French than anything else you have.',
    cards: [
      {
        label: 'The question',
        head: 'Quel temps fait-il ?',
        fr: frOf('fr.a1.meteo.183'),
        sub: `${sub('Quel temps fait-il ?')} · what is the weather like?`,
        body: 'Learn these four words as one block, the way you learned il fait. The pieces of it are taken apart in a later lesson and you do not need any of that to use it today.',
      },
      {
        label: 'The answer',
        head: 'Any shape you like',
        fr: frOf('fr.a1.rp-meteo-nature.005'),
        sub: `${sub('il fait beau')} · ${sub('il y a du soleil')}`,
        body: 'All four shapes are legal answers and this one uses two of them in a single sentence. There is nothing to match and nothing to agree with, so answer with whichever comes to you first.',
      },
      {
        label: 'Why it is worth it',
        head: 'The most useful small talk there is',
        fr: frOf('fr.a1.expressions-frequentes.087'),
        sub: 'it depends on the weather',
        body: 'Weather is what people talk about when there is nothing to say, which makes it the one subject you can raise with anybody on your first day. This is a question you will use more than any sentence in the last three lessons.',
      },
    ],
  },

  {
    type: 'reading',
    id: 's17-reading',
    title: 'The Balcony Downstairs',
    frSub: 'Le balcon du dessous',
    layer: 'core',
    terms: ['weatherFrame', 'personFrame', 'seasonIn'],
    // REQUIRED for the glossary to exist at all. MissionSection routes a
    // reading section to ReadingMission (and so to PassagePage, which draws the
    // underlines and the tap-for-translation sheet) only when this flag is set
    // WITH questions. a1.01 shipped five entries down the other path.
    questionsInModal: true,
    say: 'Three people, one building, and all three frames in the space of a morning.',
    // Paul's A1 rule, set on a1.01's passage: anything not inside « » is in
    // English. ONE BLOCK, NO LINE BREAKS. See the header.
    text:
      'The woman on the second floor puts her plants out the same week every year and takes them in again the same week every autumn. '
      + 'She has a sentence for it that she says to anybody on the stairs. '
      + '« Au printemps, je sors les plantes. » '
      + 'This morning she is out there at seven, and it is not warm. '
      + '« Il fait frais ce matin. » '
      + 'The man from the flat above her comes down in a coat and disagrees with her about it, in the way neighbours do. '
      + '« Moi, j\'ai froid. » '
      + 'Both of them are describing the same eleven degrees and neither of them is contradicting the other, because they are not talking about the same thing. '
      + 'She is describing the morning and he is describing himself, and French makes you choose which one you meant before you open your mouth. '
      + 'Then the coffee arrives from somewhere upstairs, and the third sentence turns up on its own. '
      + '« Le café est chaud. » '
      + 'Three sentences, three verbs, and one thermometer between them.',
    // Every entry is matched by gloss.logic.ts, which folds punctuation and case
    // on BOTH sides and allows a phrase of up to four words (MAX_GLOSS_WORDS).
    // Longest match wins, WHICH MEANS AN ENTRY CAN BE SHADOWED OUT OF EXISTENCE:
    // a1.08 shipped two entries that could never underline anything, because
    // every occurrence was already inside a longer key. Checked here by running
    // the real segmentSentence in the test rather than by comparing matched
    // text, which is the mistake that let a1.08's shadowed entries pass.
    //
    // None of the five is a prefix or a suffix of another: « au printemps »
    // stops before « je », « il fait frais » stops before « ce », and
    // « j'ai froid » shares no boundary with either.
    glossary: [
      { word: 'au printemps', en: 'in spring', note: 'The one season that takes au. The other three take en.' },
      { word: 'il fait frais', en: 'it is cool out', note: 'The weather, and the il here points at nobody at all.' },
      { word: "j'ai froid", en: 'I am cold', note: 'A person, so avoir. He is describing himself and not the morning.' },
      { word: 'le café est chaud', en: 'the coffee is hot', note: 'A thing, so être. This is the frame English speakers already have.' },
      { word: 'je sors les plantes', en: 'I put the plants out', note: 'Read this as a whole phrase. The verb behind it is not one you have been given yet.' },
    ],
    questions: [
      { q: 'Two neighbours describe the same morning and use different verbs. Are they disagreeing?', a: 'No. She says il fait frais, which is about the morning, and he says j\'ai froid, which is about himself. Both can be true at once, and French makes you decide which one you mean before you start the sentence.' },
      { q: 'Three sentences in this passage use three different verbs on the same kind of adjective. What decides which verb?', a: 'What the sentence is about. The weather takes il fait, a person takes avoir, and a thing takes être. The adjective does not change and neither does the temperature; only the subject does.' },
      { q: 'The woman says au printemps rather than en printemps. Would en have worked?', a: 'No. Spring is the only one of the four seasons that takes au, and en printemps is not something a French speaker says. Summer, autumn and winter all take en.' },
    ],
  },

  /* ── Act 5: say it, spell it, use it ──────────────────────────────────── */

  {
    type: 'vocabThemes',
    id: 's18-words',
    title: 'The Weather, Banked',
    frSub: 'Le vocabulaire',
    layer: 'core',
    terms: ['weatherFrame', 'seasonIn', 'personFrame'],
    sheetId: 'sheet.a1.10.weather',
    say: 'Three decks. The four seasons, the frames, and the words for what is actually outside.',
    themes: [
      {
        title: 'the four seasons',
        cards: THE_FOUR.map((s) => ({
          fr: SEASON_FRAME[s],
          sub: sub(SEASON_FRAME[s]),
          en: `in ${IN_ENGLISH[s]}`,
        })),
      },
      {
        title: 'what the weather is doing',
        cards: [
          { fr: 'il fait beau', sub: sub('il fait beau'), en: 'the weather is nice' },
          { fr: 'il fait chaud', sub: sub('il fait chaud'), en: 'it is hot' },
          { fr: 'il fait froid', sub: sub('il fait froid'), en: 'it is cold' },
          { fr: 'il fait frais', sub: sub('il fait frais'), en: 'it is cool' },
          { fr: 'il fait doux', sub: sub('il fait doux'), en: 'it is mild' },
          { fr: 'il fait mauvais', sub: sub('il fait mauvais'), en: 'the weather is bad' },
          { fr: 'il pleut', sub: sub('il pleut'), en: 'it is raining' },
          { fr: 'il neige', sub: sub('il neige'), en: 'it is snowing' },
          { fr: 'il y a du vent', sub: sub('il y a du vent'), en: 'it is windy' },
          { fr: 'il y a du soleil', sub: sub('il y a du soleil'), en: 'it is sunny' },
          { fr: 'Quel temps fait-il ?', sub: sub('Quel temps fait-il ?'), en: 'what is the weather like?' },
        ],
      },
      {
        title: 'what is out there',
        cards: [
          { fr: 'le vent', sub: sub('le vent'), en: 'the wind' },
          { fr: 'la pluie', sub: sub('la pluie'), en: 'the rain' },
          { fr: 'la neige', sub: sub('la neige'), en: 'the snow' },
          { fr: 'le soleil', sub: sub('le soleil'), en: 'the sun' },
          { fr: 'un nuage', sub: sub('un nuage'), en: 'a cloud' },
          { fr: "l'orage", sub: sub("l'orage"), en: 'the storm' },
          { fr: 'le brouillard', sub: sub('le brouillard'), en: 'the fog' },
          { fr: 'le ciel', sub: sub('le ciel'), en: 'the sky' },
          { fr: 'la météo', sub: sub('la météo'), en: 'the forecast' },
          { fr: 'le degré', sub: sub('le degré'), en: 'the degree' },
          { fr: 'la saison', sub: sub('la saison'), en: 'the season' },
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
      ...THE_FOUR.map((s) => ({ front: `in ${IN_ENGLISH[s]}`, back: SEASON_FRAME[s], say: SEASON_FRAME[s] })),
      { front: 'It is hot out.', back: 'il fait chaud', say: 'il fait chaud' },
      { front: 'I am hot.', back: frOf('fr.a1.famille.228'), say: frOf('fr.a1.famille.228') },
      { front: 'The coffee is hot.', back: frOf('fr.sons.voyelles.414'), say: frOf('fr.sons.voyelles.414') },
      { front: 'It is cold out.', back: 'il fait froid', say: 'il fait froid' },
      { front: 'I am cold.', back: "j'ai froid", say: "j'ai froid" },
      { front: 'The wind is cold.', back: frOf('fr.a1.rp-meteo-nature.091'), say: frOf('fr.a1.rp-meteo-nature.091') },
      { front: 'It is raining.', back: 'il pleut', say: 'il pleut' },
      { front: 'It is snowing.', back: 'il neige', say: 'il neige' },
      { front: 'It is windy. (two ways)', back: 'il fait du vent · il y a du vent', say: 'il fait du vent, il y a du vent' },
      { front: 'It is sunny.', back: 'il y a du soleil', say: 'il y a du soleil' },
      { front: 'The weather is nice.', back: 'il fait beau', say: 'il fait beau' },
      { front: 'What is the weather like?', back: frOf('fr.a1.meteo.183'), say: frOf('fr.a1.meteo.183') },
      { front: 'It is cold in winter.', back: frOf('fr.a1.meteo.004'), say: frOf('fr.a1.meteo.004') },
      { front: 'It rains a lot in autumn.', back: frOf('fr.a1.meteo.005'), say: frOf('fr.a1.meteo.005') },
    ],
  },

  {
    type: 'dictation',
    id: 's20-dictation',
    title: 'Spell What You Hear',
    frSub: 'La dictée',
    layer: 'core',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], maxPlays: 4 },
    say: 'Five lines, and between them all three verbs. One of them offers you a word you must decide not to use.',
    itemIds: DICTATION_IDS,
  },

  {
    type: 'practice',
    id: 's21-speak',
    title: 'Say It Out Loud',
    frSub: 'À voix haute',
    layer: 'core',
    audio: { mode: 'mic', lang: 'fr-FR' },
    // The only practice mission in the lesson, deliberately. sons.06 ships two
    // doing the same job and it reads as a repeat. `practice.skill` is authored
    // and read by no component: PracticeVFView takes itemIds and nothing else.
    say: 'The four seasons, the frames, and both halves of the contrast. The mic is listening for the verb.',
    skill: 'speak',
    itemIds: SPEAK_IDS,
  },

  {
    type: 'scenario',
    id: 's22-scenario',
    title: 'Back On The Roof',
    frSub: 'On parle du temps',
    layer: 'core',
    terms: ['weatherFrame', 'personFrame', 'seasonIn'],
    say: 'One exchange, and you hold up your half. Every turn turns on which of the three you mean.',
    setting: 'The same roof terrace, a week later, and this time you know which il is which.',
    // Every turn carries `userEn` and at least two `alts`, which
    // scenario.logic.ts requires of the whole seed. A reveal with no
    // translation shows the learner the one sentence comprehension matters on
    // and asks them to read it; a single accepted answer makes a conversation a
    // cloze test. `stt` scores against all of them.
    //
    // Apostrophes are straight throughout. The suite fails a conversation that
    // mixes straight and curly apostrophes in one bubble stack.
    turns: [
      {
        ai: 'Alors, tu montes ? Quel temps fait-il chez toi ?',
        en: 'So, are you coming up? What is the weather like where you are?',
        user: 'Il fait beau, il y a du soleil.',
        userEn: 'The weather is nice, it is sunny.',
        alts: [
          { fr: 'Il fait beau.', en: 'The weather is nice.' },
          { fr: 'Il fait chaud et il y a du soleil.', en: 'It is hot and it is sunny.' },
        ],
      },
      {
        ai: 'Ici aussi. Mais il fait du vent sur le toit, attention.',
        en: 'Here too. But it is windy on the roof, careful.',
        user: 'Du vent ? Personne, alors.',
        userEn: 'Wind? Nobody, then.',
        alts: [
          { fr: 'Ah, le vent. Pas un homme.', en: 'Ah, the wind. Not a man.' },
          { fr: 'Oui, il fait du vent, je sais.', en: 'Yes, it is windy, I know.' },
        ],
      },
      {
        ai: 'Tu as froid ? Je prends une veste pour toi ?',
        en: 'Are you cold? Shall I bring a jacket for you?',
        user: "Non, j'ai chaud. C'est le soleil.",
        userEn: 'No, I am hot. It is the sun.',
        alts: [
          { fr: "Non, j'ai chaud.", en: 'No, I am hot.' },
          { fr: "Non merci, j'ai chaud ici.", en: 'No thanks, I am hot here.' },
        ],
      },
      {
        ai: "J'ai fait du café. Attention, il est très chaud.",
        en: 'I made coffee. Careful, it is very hot.',
        user: 'Le café est chaud, oui. Merci !',
        userEn: 'The coffee is hot, yes. Thank you!',
        alts: [
          { fr: 'Merci ! Le café est chaud.', en: 'Thank you! The coffee is hot.' },
          { fr: "D'accord, le café est chaud.", en: 'All right, the coffee is hot.' },
        ],
      },
      {
        ai: "En hiver, c'est impossible ici. Et au printemps ?",
        en: 'In winter it is impossible up here. And in spring?',
        user: 'Au printemps, il fait doux. Parfait.',
        userEn: 'In spring it is mild. Perfect.',
        alts: [
          { fr: 'Au printemps, il fait beau.', en: 'In spring the weather is nice.' },
          { fr: "Au printemps c'est parfait, il fait doux.", en: 'In spring it is perfect, it is mild.' },
        ],
      },
    ],
  },

  /* ── Act 6: prove it ──────────────────────────────────────────────────── */

  {
    type: 'reviewDeck',
    id: 's23-review',
    title: 'The Whole Thing, One Deck',
    frSub: 'Révision',
    render: 'deck',
    layer: 'core',
    terms: ['weatherFrame', 'personFrame', 'thingFrame'],
    say: 'Rate each card as again, hard or easy. The ones you mark again come back.',
    cards: [
      { front: 'You have just come in from the snow and you are cold. Say it.', back: `J'ai froid. A person has cold, not is cold. ${REFRAME}`, say: "J'ai froid." },
      { front: 'You want to say the day is cold. Say it.', back: `${frOf('fr.a1.meteo.028')}. The weather makes cold, and the il is nobody.`, say: 'il fait froid' },
      { front: 'You want to warn somebody about a cup of coffee.', back: `${frOf('fr.sons.voyelles.414')} A thing is what it is, so être.`, say: frOf('fr.sons.voyelles.414') },
      { front: 'Which season takes au rather than en?', back: 'au printemps. The other three take en, and this is the only exception.', say: 'au printemps' },
      { front: 'How do you say "in autumn"?', back: 'en automne. The m is silent, so it ends on a plain n sound.', say: 'en automne' },
      { front: 'Somebody says « Il fait du vent ». Who is doing something?', back: 'Nobody. It is the sky. « Il fait du yoga » is the one with a man in it.', say: 'il fait du vent, il fait du yoga' },
      { front: 'Two ways to say it is windy.', back: 'il fait du vent, and il y a du vent. Both are ordinary and neither is preferred.', say: 'il fait du vent, il y a du vent' },
      { front: 'You reach for « il fait pleut ». What is wrong with it?', back: 'il pleut is already the whole sentence. It is one shape or the other, never both.', say: 'il pleut' },
      { front: 'You want to ask somebody what it is like outside.', back: `${frOf('fr.a1.meteo.183')} Four words, learned as one block.`, say: frOf('fr.a1.meteo.183') },
      { front: 'Why is « je suis chaud » worth avoiding?', back: 'It is real French about something else. A person has hot: j\'ai chaud.', say: "j'ai chaud" },
      { front: 'How do you say it is twenty degrees?', back: `${frOf('fr.a1.meteo.220')} The weather frame, carrying a number.`, say: frOf('fr.a1.meteo.220') },
      { front: 'The three verbs, in order: the weather, a person, a thing.', back: `${REFRAME} il fait, avoir, être.`, say: 'il fait chaud, j\'ai chaud, le café est chaud' },
    ],
  },

  {
    type: 'progressCheck',
    id: 's24-progress',
    title: 'Where You Stand',
    frSub: 'Votre progression',
    // The prose carries no counts. Every figure is in `stats`, derived from the
    // journey itself, and saying a number twice on one card is two chances to
    // be wrong and one card that reads as padded.
    say: 'One screen before the exam, so you know what you are walking into.',
    body: 'You have watched a conversation quietly go sideways because a word that means he meant nobody at all, then watched it go sideways again over a verb English does not have. You have the four seasons and the one that is different, you have seen the same adjective sitting in three sentences with three verbs on one screen, and you have sorted four ways of building a weather sentence that a lot of people carry around as one. You can also ask somebody what it is like outside, which is the sentence that will actually start conversations. What is left tells you whether it stuck. Each round is tied to one of the mistakes this lesson exists to stop, and failing a round gets you its drill before the next one starts. The drill is the teaching, not the punishment.',
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
    say: 'Six rounds. Miss too many in a round and you get that round\'s drill before the next one starts.',
    rounds: [
      {
        id: 'r1-il-fait',
        label: 'The sentence with nobody in it',
        // The FIRST target is the one whose drill fires: drillForRound walks a
        // round's targets and stops at the first that resolves. Every drill
        // this lesson authors is the first resolving target of exactly one
        // round, and the batch, the merge and the test all assert it.
        targets: ['err-etre-for-weather', 'err-il-fait-pleut'],
        say: 'The frame the weather uses, and who is in it.',
        questions: [
          {
            q: 'You are texting a friend about the day you are having outside. It is hot. What do you send?',
            format: 'mcq',
            opts: [
              'Il est chaud aujourd\'hui.',
              'Il fait chaud aujourd\'hui.',
              'Il a chaud aujourd\'hui.',
              'C\'est chaud aujourd\'hui.',
            ],
            correct: 1,
            why: `${REFRAME} The weather takes il fait and the il points at nobody. The other three are all real French sentences about a thing, a man, or something nobody has mentioned.`,
            ref: 's03-nobody',
          },
          {
            q: 'Listen. Which one is it?',
            format: 'listenChoose',
            audio: { mode: 'tts', lang: 'fr-FR', clip: 'il fait chaud' },
            opts: ['il a chaud', 'il est chaud', 'il fait chaud', 'il y a chaud'],
            correct: 2,
            why: 'il fait chaud. The verb is one short unstressed syllable and it is the only thing in the sentence carrying who this is about, which is exactly the combination the ear loses at speed.',
            ref: 's10-ear',
          },
          {
            q: 'In « il fait beau », who or what does the word il refer to?',
            format: 'mcq',
            opts: [
              'Nobody and nothing at all',
              'A man mentioned earlier',
              'The sky, as a thing',
              'The weather forecast',
            ],
            correct: 0,
            why: 'Nothing. It is holding a space open because a French sentence needs something in that position. The pronouns lesson taught you il means he, and this is the one place that stops being true.',
            ref: 's03-nobody',
          },
          {
            q: 'Somebody asks what it is like outside and the weather is nice. Write the three words.',
            format: 'typeIn',
            accept: ['il fait beau', 'ilfaitbeau'],
            answer: 'il fait beau',
            why: 'il fait beau. Two words of frame that never change, then the word for what the weather is like. You now have a sentence that works for every kind of weather there is.',
            ref: 's03-nobody',
          },
        ],
      },
      {
        id: 'r2-seasons',
        label: 'Three en, and one au',
        targets: ['err-en-printemps', 'err-etre-for-weather'],
        say: 'Four seasons, and only one thing to get wrong.',
        questions: [
          {
            q: 'You are telling somebody the village is at its best in spring. Which is right?',
            format: 'mcq',
            opts: ['en printemps', 'dans le printemps', 'au printemps', 'à printemps'],
            correct: 2,
            why: 'au printemps. It is the only one of the four that does not take en, and nobody says the version with en, so this stops the sentence rather than shifting what it means.',
            ref: 's06-enau',
          },
          {
            q: 'Your holiday is in summer. Fix this. « Je pars au été. »',
            format: 'errorSpot',
            accept: ['Je pars en été.', 'je pars en ete', 'en été', 'en ete'],
            answer: 'Je pars en été.',
            why: 'Summer takes en, like autumn and winter. Only spring takes au, so carrying au across to the other three is the over-correction that arrives the week after the exception lands.',
            ref: 's06-enau',
          },
          {
            q: 'Write the French for "in autumn".',
            format: 'typeIn',
            accept: ['en automne', 'enautomne'],
            answer: 'en automne',
            why: 'en automne. The m in automne is silent, so it comes out ending on a plain n sound, and that is the part a learner gets wrong long after the spelling is solid.',
            ref: 's05-seasons',
          },
          {
            q: 'Three of the four seasons take the same small word. What do those three have in common?',
            format: 'mcq',
            opts: [
              'They are all masculine',
              'They all begin on a vowel sound',
              'They are all two syllables',
              'Nothing, it is arbitrary',
            ],
            correct: 1,
            why: 'été, automne and hiver all open on a vowel sound and printemps does not. That is completely reliable for these four words and it is not a rule about French generally, so use it to hold this set and nothing wider.',
            ref: 's06-enau',
          },
        ],
      },
      {
        id: 'r3-people-have',
        label: 'A person has',
        targets: ['err-suis-chaud', 'err-etre-for-weather'],
        say: 'When it is you who is hot.',
        questions: [
          {
            q: 'You have just come in from the snow and you want to say that you are cold. What do you say?',
            format: 'mcq',
            opts: ['Je suis froid.', 'Il fait froid.', "C'est froid ici.", "J'ai froid."],
            correct: 3,
            why: `${REFRAME} A person has cold. The second is true about the weather and is not an answer about you, and the first and third are the two ways an English speaker reaches for être here.`,
            ref: 's12-check',
          },
          {
            q: 'You are the one who is too warm. Fix this. « Je suis chaud. »',
            format: 'errorSpot',
            accept: ["J'ai chaud.", 'j ai chaud', "j'ai chaud", 'ai chaud'],
            answer: "J'ai chaud.",
            why: 'A person has hot in French. The version with être is real French about something else, which is why nobody corrects it and why it is the error people remember having made.',
            ref: 's08-frames',
          },
          {
            q: 'Listen. Is this about the weather or about a person?',
            format: 'listenChoose',
            audio: { mode: 'tts', lang: 'fr-FR', clip: 'il a froid' },
            opts: ['the weather', 'a person', 'a thing', 'you cannot tell'],
            correct: 1,
            why: 'A person. Il a froid is a man who wants his coat, and il fait froid is the season. One short unstressed word apart, and that word is the only thing telling you which.',
            ref: 's10-ear',
          },
          {
            q: 'A friend asks « Tu as froid ? » and you are fine. Which answer is built correctly?',
            format: 'mcq',
            opts: [
              "Non, je ne suis pas froid.",
              "Non, il ne fait pas froid pour moi.",
              "Non, ça va, je n'ai pas froid.",
              "Non, je ne fais pas froid.",
            ],
            correct: 2,
            why: 'The question was built with avoir, so the answer is too. The others swap in être or il fait, and the second one is about the weather rather than about you, which was what you were asked.',
            ref: 's11-sort',
          },
        ],
      },
      {
        id: 'r4-things-are',
        label: 'A thing is',
        targets: ['err-fait-for-thing', 'err-suis-chaud'],
        say: 'The one that matches English, and the two places it does not belong.',
        questions: [
          {
            q: 'You want to warn somebody that the coffee will burn them. What do you say?',
            format: 'mcq',
            opts: ['Le café fait chaud.', 'Le café a chaud.', 'Il fait chaud, le café.', 'Le café est chaud.'],
            correct: 3,
            why: `${REFRAME} A cup of coffee is a thing, so it takes être, and this is the one of the three that matches English word for word. That is also why it gets borrowed for the other two.`,
            ref: 's09-three',
          },
          {
            q: 'The wind itself is cold, not the day. Fix this. « Le vent fait froid. »',
            format: 'errorSpot',
            accept: ['Le vent est froid.', 'le vent est froid', 'est froid'],
            answer: 'Le vent est froid.',
            why: 'The wind is a thing here rather than the weather, so it takes être. Il fait du vent is a weather report; le vent est froid is a remark about the wind you are standing in.',
            ref: 's09-three',
          },
          {
            q: 'Which sentence in this list is about a THING rather than the weather or a person?',
            format: 'mcq',
            opts: ['Il fait chaud.', "J'ai chaud.", 'Le thé est froid.', 'Il fait du vent.'],
            correct: 2,
            why: 'Le thé est froid. A cup of tea is an object, so être. The first and last are the weather with nobody in them, and the second is a person, which is the whole three-way split this lesson turns on.',
            ref: 's09-three',
          },
          {
            q: 'Write the French for "the coffee is hot".',
            format: 'typeIn',
            accept: ['le café est chaud', 'le cafe est chaud', 'lecaféestchaud', 'lecafeestchaud'],
            answer: 'le café est chaud',
            why: 'le café est chaud. A thing, so être, and the accent on the e is the part a spellchecker will not put back for you.',
            ref: 's09-three',
          },
        ],
      },
      {
        id: 'r5-four-shapes',
        label: 'Four shapes, not one',
        targets: ['err-il-fait-pleut', 'err-fait-for-thing'],
        say: 'Four ways to build it, and one way to build it wrong.',
        questions: [
          {
            q: 'It has been raining all morning. Fix this. « Il fait pleut depuis ce matin. »',
            format: 'errorSpot',
            accept: ['Il pleut depuis ce matin.', 'il pleut depuis ce matin', 'il pleut'],
            answer: 'Il pleut depuis ce matin.',
            why: 'Il pleut is already the whole sentence. Welding il fait onto it is what comes out after being told that il fait is the weather phrase, and it is one shape or the other, never both.',
            ref: 's14-overlap',
          },
          {
            q: 'It is raining right now. Say it out loud.',
            format: 'speak',
            target: 'Il pleut.',
            scoreSegment: 'il pleut',
            accept: ['Il pleut.'],
            answer: 'Il pleut.',
            why: 'Two words and nothing else. The mic is listening for the fact that you stopped, because the commonest thing to add here is a word this shape does not take.',
            ref: 's14-overlap',
          },
          {
            q: 'Somebody tells you « Il fait du vent » and somebody else tells you « Il y a du vent ». Which is right?',
            format: 'mcq',
            opts: [
              'Both, and neither is preferred',
              'Only il fait du vent',
              'Only il y a du vent',
              'Neither, you need le vent est fort',
            ],
            correct: 0,
            why: 'Both are ordinary French and mean the same thing. If nobody tells you that, meeting both makes you assume one is a mistake and avoid it, which costs you a sentence you had already learned.',
            ref: 's14-overlap',
          },
          {
            q: 'Which of these is NOT how French builds a weather sentence?',
            format: 'mcq',
            opts: [
              'il fait plus a word for what it is like',
              'il fait du plus a thing',
              'il plus one word that is the whole sentence',
              'il est plus a word for what it is like',
            ],
            correct: 3,
            why: 'The last one. Être belongs to things, so il est chaud is a remark about some object rather than about the day. The other three are the shapes this lesson sorted, and they all work.',
            ref: 's13-shapes',
          },
        ],
      },
      {
        id: 'r6-who-is-it-about',
        label: 'Who is it about?',
        targets: ['err-personal-il', 'err-personal-il-2'],
        say: 'The four words that mean two completely different things.',
        questions: [
          {
            q: 'You hear « Il fait du yoga tous les matins. » What is this about?',
            format: 'mcq',
            opts: ['The weather every morning', 'A man, every morning', 'A yoga studio', 'Nobody, like il fait beau'],
            correct: 1,
            why: 'A man. The shape is identical to il fait du vent and the noun at the end is the entire difference, which is why you read to the end of the sentence before deciding who il is.',
            ref: 's04-collision',
          },
          {
            q: 'Listen. Is the il in this sentence a person, or nobody at all?',
            format: 'listenChoose',
            audio: { mode: 'tts', lang: 'fr-FR', clip: 'il fait du vent' },
            opts: ['a person', 'nobody', 'a thing mentioned earlier', 'you cannot tell from the sound'],
            correct: 1,
            why: 'Nobody. This is the sky, and the sentence has no person in it anywhere. Il fait du yoga sounds the same for four words and then does not.',
            ref: 's04-collision',
          },
          {
            q: 'You want to ask somebody what it is like outside. Fix this. « Quel temps il fait ? »',
            format: 'errorSpot',
            accept: ['Quel temps fait-il ?', 'quel temps fait il', 'quel temps fait-il'],
            answer: 'Quel temps fait-il ?',
            why: 'The two words swap round and take a hyphen between them. Learn the four as one block: it is the question that will start more conversations for you than any sentence in the last three lessons.',
            ref: 's16-ask',
          },
          {
            q: 'Write the French for "I am hot", meaning you personally.',
            format: 'typeIn',
            accept: ["j'ai chaud", 'jai chaud', 'jaichaud', "j’ai chaud"],
            answer: "j'ai chaud",
            why: 'j\'ai chaud. A person has hot. Reaching for the English verb here produces a sentence that is real French about something else, and nobody will explain to you why it is funny.',
            ref: 's08-frames',
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
    body: 'You can name the four seasons with the small word each one takes, describe what the weather is doing four different ways, put the right verb in front of the right subject, and ask somebody what it is like outside. The third of those is the one that matters most and the one nobody would ever correct you on, which is why it is worth having drilled. Telling the time is next, and it uses a frame with nobody in it too.',
    points: [
      `${REFRAME} Ask what is hot before you start the sentence.`,
      'il fait never changes. Two words, one shape, every kind of weather.',
      'Three seasons take en. Spring takes au, and that is the whole exception.',
      'il fait du vent is the sky. il fait du yoga is a man. Read to the end.',
    ],
  },
];

/* ─── The progress card counts the journey rather than restating it ────────
 *
 * Derived here rather than typed by hand. Every figure is a fact about the
 * array directly above, and a display string is validated against nothing, so
 * the first mission added would have left the card confidently wrong with the
 * whole suite still green. It throws rather than degrades: a progress card
 * silently reporting "0 of 0" is worse than a build that stops.              */
{
  const ix = SECTIONS.findIndex((s) => (s as { id?: string }).id === 's24-progress');
  const card = SECTIONS[ix];
  const quiz = SECTIONS.find((s) => s.type === 'quiz');
  if (!card || card.type !== 'progressCheck' || !quiz || quiz.type !== 'quiz') {
    throw new Error('a1.10.l1: the progress card or the quiz is missing, so the card cannot count what is not there');
  }
  card.stats = [
    { k: 'Seasons learned', v: String(THE_FOUR.length) },
    { k: 'Weather shapes sorted', v: String(SHAPES.length) },
    // `ix` is the count of sections BEFORE this one, which is exactly how many
    // missions the learner has finished when they reach it.
    { k: 'Missions done', v: `${ix} of ${SECTIONS.length}` },
    { k: 'Exam rounds ahead', v: String(quiz.rounds?.length ?? 0) },
  ];
}

/* ─── Acts ─────────────────────────────────────────────────────────────────
 *
 * Six, and the weighting is the argument of the lesson: three missions on the
 * four season names and fourteen on the frames and their consequences. The
 * brief is explicit: "the weight belongs on the frames, not on the four season
 * names. If naming the seasons takes two missions, that is correct. Do not
 * stretch it to five because the deck looks thin beside the weather half."
 *
 * `estScreens` is what the mission actually costs rather than a round number,
 * because it is divided by the rest points to check no stretch runs past the
 * checkpoint-spacing limit of 22. A flattering estimate buys a lesson that
 * passes the validator and exhausts the learner.                             */

const ACTS: LessonAct[] = [
  {
    id: 'act1',
    title: 'The sentence with nobody in it',
    sections: ['s01-scene', 's02-goals', 's03-nobody', 's04-collision'],
    milestone: 'You have watched four words mean two completely different things.',
    estScreens: 30,
    restPoints: ['s01-scene/after-break'],
  },
  {
    id: 'act2',
    title: 'Four seasons',
    sections: ['s05-seasons', 's06-enau', 's07-check'],
    milestone: 'You have the four, and the one that is different.',
    estScreens: 20,
    restPoints: ['s05-seasons/halfway'],
  },
  {
    id: 'act3',
    title: 'Weather makes, people have, things are',
    sections: ['s08-frames', 's09-three', 's10-ear', 's11-sort', 's12-check'],
    milestone: 'One adjective, three verbs, side by side on one screen.',
    estScreens: 40,
    restPoints: ['s09-three/after', 's11-sort/halfway'],
  },
  {
    id: 'act4',
    title: 'Four shapes, not one',
    sections: ['s13-shapes', 's14-overlap', 's15-traps', 's16-ask', 's17-reading'],
    milestone: 'You can build a weather sentence four ways and ask about one.',
    estScreens: 40,
    restPoints: ['s15-traps/halfway', 's16-ask/after'],
  },
  {
    id: 'act5',
    title: 'Say it, spell it, use it',
    sections: ['s18-words', 's19-flash', 's20-dictation', 's21-speak', 's22-scenario'],
    milestone: 'You have said all three frames out loud and spelled the difference.',
    estScreens: 62,
    restPoints: ['s19-flash/halfway', 's21-speak/halfway', 's21-speak/three-quarters'],
  },
  {
    id: 'act6',
    title: 'Prove it',
    sections: ['s23-review', 's24-progress', 's25-quiz', 's26-roundup'],
    milestone: 'Lesson complete. Telling the time is next, and it has a frame with nobody in it too.',
    estScreens: 44,
    restPoints: ['s23-review/halfway', 's25-quiz/after-r2', 's25-quiz/after-r4'],
  },
];

/* ─── Deck tranches ────────────────────────────────────────────────────────
 *
 * One slice per act, index-aligned. An item is released the act it is TAUGHT,
 * not the act it is first mentioned: releasing the whole set at mission one
 * turns the flashcard hub into a wall on the morning the learner is least able
 * to read it. Act 6 releases nothing new; it tests what acts 1 to 5 handed over.
 *
 * `once()` is not decoration. The groups above are built for TEACHING and they
 * legitimately overlap: the scene's two sentences are also half the collision
 * table. The SRS keys on (itemId, modality), so releasing one card from two
 * tranches would take two ratings for one sentence. The first tranche to name
 * an id keeps it and the rest drop it, which is also the pedagogically right
 * answer: an item belongs to the act that taught it.                          */

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
  // Act 1: the collision, both senses, plus the two sentences the scene shows.
  // NOT the weather frames: those are taught in act 3 and act 4, and a card
  // released before its mission is a card the learner is asked to rate before
  // they have met it.
  once([...COLLISION, 'fr.a1.famille.228', 'fr.a1.meteo.008', 'fr.a1.meteo.004']),
  // Act 2: the four seasons, released the act that puts one on each screen,
  // together with the season sentences the table and the check are built on.
  once([...SEASONS, ...WILD_SEASONS]),
  // Act 3: the three frames, every row of the contrast, both halves together.
  // Releasing one column is worse than releasing none: a sentence with an avoir
  // frame and nothing to compare it against reads as the only way to say it.
  once([...THREE_FRAMES, 'fr.a1.meteo.227', 'fr.a1.meteo.262', 'fr.a1.meteo.220', 'fr.a1.meteo.067']),
  // Act 4: the four shapes and the question, which act 4 is the first surface
  // to put in front of a learner.
  once([...FRAMES, ...ASKING, ...WILD_WEATHER]),
  // Act 5: nothing new. Act 5 works what acts 1 to 4 released, which is why
  // this slice is empty rather than padded.
  [],
  [],
];

/** Everything the lesson teaches is released exactly once, and nothing is
 *  released that the lesson does not teach. Checked HERE rather than only in
 *  the test, because a tranche that silently drops a card is a card that never
 *  reaches spaced repetition and nothing on a device would say so. */
{
  const taught = new Set(ITEM_IDS);
  const never = [...taught].filter((id) => !released.has(id));
  if (never.length) {
    throw new Error(`a1.10.l1: item(s) taught but released by no tranche: ${never.join(', ')}`);
  }
  const stray = [...released].filter((id) => !taught.has(id));
  if (stray.length) {
    throw new Error(`a1.10.l1: tranche(s) release item(s) the lesson does not teach: ${stray.join(', ')}`);
  }
}

/* ─── Error triggers and their drills ──────────────────────────────────────
 *
 * Six triggers, six drills, six retests, six quiz rounds, and that is not a
 * coincidence. `drillForRound` walks a round's `targets` and fires the drill of
 * the FIRST one that has any, then stops. So a drill named only in second place
 * never runs. Each drill below is the first target of exactly one round, which
 * is what makes all six reachable; the batch, the merge and the test all assert
 * it rather than trusting the ordering to survive an edit.
 *
 * a1.05 shipped two unreachable drills for exactly this reason and a first
 * draft of a1.07 shipped a third. This lesson does not reopen it.
 *
 * `err-etre-for-weather` and `err-fait-for-thing` are the SAME confusion
 * running in opposite directions, and both get their own trigger and drill. A
 * lesson that merged them would only ever remediate one of the two, and the
 * second is the one that arrives after the first has been fixed.
 *
 * `err-personal-il-2` exists so round 6 has a second target and so the two
 * halves of the collision are detected separately: misreading a weather
 * sentence as a person and misreading a person as the weather are different
 * failures with different consequences, and the second one is the quieter of
 * the two.                                                                    */

const ERROR_TRIGGERS: ErrorTrigger[] = [
  {
    id: 'err-etre-for-weather',
    description: 'Says « il est chaud » or « c\'est chaud » about the weather. Reaches for être because English uses is, and produces a sentence about some object instead.',
    detectOn: ['s03-nobody', 's08-frames', 's10-ear', 's15-traps', 's25-quiz/r1-il-fait'],
    drill: 'drill-weather-makes',
    retest: 'retest-weather-makes',
  },
  {
    id: 'err-en-printemps',
    description: 'Says « en printemps », or carries au across to the other three seasons once the exception has landed.',
    detectOn: ['s05-seasons', 's06-enau', 's07-check', 's15-traps', 's25-quiz/r2-seasons'],
    drill: 'drill-seasons',
    retest: 'retest-seasons',
  },
  {
    id: 'err-suis-chaud',
    description: 'Says « je suis chaud » or « je suis froid » about themselves. The error that actually embarrasses people, because it is real French about something else.',
    detectOn: ['s01-scene', 's08-frames', 's11-sort', 's12-check', 's25-quiz/r3-people-have'],
    drill: 'drill-people-have',
    retest: 'retest-people-have',
  },
  {
    id: 'err-fait-for-thing',
    description: 'Says « le café fait chaud » or « le vent fait froid ». The over-correction that arrives once il fait has landed, and it spreads to objects that never wanted it.',
    detectOn: ['s09-three', 's11-sort', 's25-quiz/r4-things-are'],
    drill: 'drill-things-are',
    retest: 'retest-things-are',
  },
  {
    id: 'err-il-fait-pleut',
    description: 'Welds the first shape onto the third and produces « il fait pleut ». Exactly what a learner says after being taught il fait as the weather phrase.',
    detectOn: ['s13-shapes', 's14-overlap', 's15-traps', 's25-quiz/r5-four-shapes'],
    drill: 'drill-shapes',
    retest: 'retest-shapes',
  },
  {
    id: 'err-personal-il',
    description: `Reads « il fait du vent » as a man doing something, because ${unitRef('a1.05')} taught that il means he and nothing has said where that stops.`,
    detectOn: ['s01-scene', 's03-nobody', 's04-collision', 's15-traps', 's25-quiz/r6-who-is-it-about'],
    drill: 'drill-collision',
    retest: 'retest-collision',
  },
  {
    id: 'err-personal-il-2',
    description: 'The mirror of the one above: reads « il fait du yoga » as the weather once the empty il has landed, and loses the man in the sentence.',
    detectOn: ['s04-collision', 's25-quiz/r6-who-is-it-about'],
    drill: 'drill-collision',
    retest: 'retest-collision',
  },
];

const DRILLS: LessonDrill[] = [
  {
    id: 'drill-weather-makes',
    title: 'What the weather takes',
    format: 'sort',
    buckets: ['The weather', 'Not the weather'],
    // Item ids, not display strings: a drill scores against the corpus, so it
    // plays the same audio and reads the same spelling as every other card that
    // teaches these. Passing display strings here validates as broken ids.
    items: [
      'fr.a1.meteo.008', 'fr.a1.meteo.227',
      'fr.sons.voyelles.414', 'fr.a1.rp-meteo-nature.091',
      'fr.a1.meteo.262', 'fr.a1.mots-essentiels.045',
    ],
    coach: 'Look at what the sentence is about rather than at the adjective. If it is the day or the sky, it takes il fait. If it is an object sitting somewhere, it takes être.',
  },
  {
    id: 'retest-weather-makes',
    title: 'One more time',
    format: 'mcq',
    q: 'You are describing the day you are having outside. Which is right?',
    opts: ['Il est chaud aujourd\'hui.', 'Il fait chaud aujourd\'hui.', 'C\'est chaud aujourd\'hui.'],
    correct: 1,
    why: 'The weather takes il fait, and the il in it points at nobody. The other two are real sentences about an object that nobody has mentioned.',
  },
  {
    id: 'drill-seasons',
    title: 'en, or au',
    format: 'sort',
    buckets: ['Takes en', 'Takes au'],
    items: [
      'fr.sons.jours-et-mois.120', 'fr.sons.jours-et-mois.121',
      'fr.sons.jours-et-mois.123', 'fr.sons.jours-et-mois.122',
      'fr.a1.faux-amis.152', 'fr.a1.adjectifs-essentiels.254',
    ],
    coach: 'Three of the four take en and spring takes au. If you are stuck, say the season out loud: the three that take en all open on a vowel sound.',
  },
  {
    id: 'retest-seasons',
    title: 'One more time',
    format: 'mcq',
    q: 'The garden is at its best in spring. Which is right?',
    opts: ['en printemps', 'au printemps', 'à printemps'],
    correct: 1,
    why: 'Spring is the only one of the four that takes au. Nobody says the version with en, so this one stops the sentence rather than changing what it means.',
  },
  {
    id: 'drill-people-have',
    title: 'A person has',
    format: 'flashcard',
    coach: 'Read the English on the left. Say the French on the right, and notice that every one of them is built on avoir rather than on the verb English uses.',
    pairs: [
      ['I am hot.', "J'ai chaud."],
      ['I am cold.', "J'ai froid."],
      ['Are you cold?', 'Tu as froid ?'],
      ['He is cold.', 'Il a froid.'],
      ['She is hot in the waiting room.', "Elle a chaud dans la salle d'attente."],
    ],
  },
  {
    id: 'retest-people-have',
    title: 'One more time',
    format: 'mcq',
    q: 'You have just come in from the snow and you are cold. Which is right?',
    opts: ['Je suis froid.', "J'ai froid.", 'Il fait froid.'],
    correct: 1,
    why: 'A person has cold in French. The third one is true about the weather and is not an answer about you, and the first is the sentence English hands you.',
  },
  {
    id: 'drill-things-are',
    title: 'A thing is what it is',
    format: 'sort',
    buckets: ['A thing, so être', 'The weather, so il fait'],
    items: [
      'fr.sons.voyelles.414', 'fr.a1.rp-meteo-nature.091',
      'fr.a1.mots-essentiels.045', 'fr.a1.meteo.008',
      'fr.a1.meteo.004', 'fr.a1.meteo.220',
    ],
    coach: 'Every line here is correct French, which is the point. Ask what the sentence is about: a cup and the wind are things, and a day and a season are the weather.',
  },
  {
    id: 'retest-things-are',
    title: 'One more time',
    format: 'mcq',
    q: 'You want to warn somebody that the coffee will burn them. Which is right?',
    opts: ['Le café fait chaud.', 'Le café est chaud.', 'Il fait chaud, le café.'],
    correct: 1,
    why: 'A cup of coffee is a thing, so it takes être. This is the one of the three frames that matches English word for word, which is also why it gets borrowed for the other two.',
  },
  {
    id: 'drill-shapes',
    title: 'Four shapes, one sentence',
    format: 'sort',
    buckets: ['A real weather sentence', 'Two shapes welded together'],
    items: [
      'fr.a1.meteo.006', 'fr.a1.meteo.034',
      'fr.a1.meteo.035', 'fr.a1.meteo.031',
      'fr.a1.meteo.027', 'fr.a1.meteo.070',
    ],
    coach: 'Il pleut and il neige are already whole sentences and take nothing in front of them. Il fait and il y a both want something after them. Pick one shape and finish it.',
  },
  {
    id: 'retest-shapes',
    title: 'One more time',
    format: 'mcq',
    q: 'It has been raining all morning. Which is right?',
    opts: ['Il fait pleut depuis ce matin.', 'Il pleut depuis ce matin.', 'Il y a pleut depuis ce matin.'],
    correct: 1,
    why: 'Il pleut is the whole sentence already. Both of the others bolt a second shape onto the front of it, which is what comes out after being told that il fait is the weather phrase.',
  },
  {
    id: 'drill-collision',
    title: 'Who is il?',
    format: 'sort',
    buckets: ['Nobody, it is the weather', 'A man'],
    items: [
      'fr.sons.nasales.018', 'fr.a1.rp-meteo-nature.078',
      'fr.a1.mots-de-liaison.007', 'fr.a1.sports-et-loisirs.156',
      'fr.a1.sports-et-loisirs.169', 'fr.a2.presentation-personnelle.087',
    ],
    coach: 'Every line opens the same way, so the opening tells you nothing. Read to the noun at the end: if it is something in the sky, il is nobody, and if it is something a person does, il is a person.',
  },
  {
    id: 'retest-collision',
    title: 'One more time',
    format: 'mcq',
    q: 'You hear « Il fait du vent ». Who is doing something?',
    opts: ['A man', 'Nobody, it is the sky', 'Whoever was mentioned before'],
    correct: 1,
    why: 'Nobody. Il fait du yoga is the one with a man in it, and the two are identical for four words. The noun at the end is the whole difference.',
  },
];

/* ─── Reference sheets ─────────────────────────────────────────────────────
 *
 * Three, and each exists for a layout reason as much as a pedagogical one.
 * `tapTable` is not in ownsLayout(), so the in-flow tables render inside a
 * scrolling page and anything past about nine rows runs off the fold and takes
 * its chrome with it. The full versions live here.
 *
 * This is also where a learner will be a week from now, halfway through telling
 * the time or the near future, wanting the three frames beside each other.
 * Layer 'deep' exempts these from the core density caps, which is the point: a
 * sheet is allowed to be dense, and a `table` section is only legal here.
 *
 * The brief asks for exactly this: "A reference sheet with the four seasons,
 * their prepositions and the three frames. It is what a learner returns to
 * during a1.12 and a1.25. Wire the sheetId early." All three are wired from
 * sections in acts 1 to 5, and the batch refuses a sheetId with no sheet.     */

const SHEETS: ReferenceSheet[] = [
  {
    id: 'sheet.a1.10.frames',
    title: 'Weather makes, people have, things are',
    layer: 'deep',
    contains: ['All three frames on one adjective', 'Which il is nobody', 'The five errors, and which you can hear'],
    sections: [
      {
        type: 'table',
        id: 'sheet-frames-table',
        title: 'One adjective, three frames',
        layer: 'deep',
        cols: ['The weather makes', 'A person has', 'A thing is', 'English says'],
        rows: [
          ['il fait chaud', "j'ai chaud", 'le café est chaud', 'is hot'],
          ['il fait froid', "j'ai froid", 'le vent est froid', 'is cold'],
          ['il fait frais', 'tu as froid ?', "l'eau est froide", 'is cool'],
          ['il fait doux', 'elle a chaud', 'le thé est froid', 'is mild'],
          ['il fait beau', 'il a froid', 'le pain est chaud', 'is nice'],
        ],
      },
      {
        type: 'cheatSheet',
        id: 'sheet-frames-errors',
        title: 'The five errors, and which you can hear',
        layer: 'deep',
        rows: [
          { k: 'être about yourself', v: 'je suis chaud. Audible, real French, and about something else entirely.', say: "j'ai chaud" },
          { k: 'être about the day', v: 'il est chaud aujourd\'hui. Audible, and it turns a weather report into a remark about an object.', say: 'il fait chaud' },
          { k: 'il fait about an object', v: 'le café fait chaud. Audible, and it is the over-correction that follows the weather rule.', say: 'le café est chaud' },
          { k: 'two shapes welded', v: 'il fait pleut. Audible, and it is not French at all, so it stops.', say: 'il pleut' },
          { k: 'the wrong il', v: 'hearing il fait du vent as a man. Silent, because nothing about it is wrong, so nobody corrects it.', say: 'il fait du vent' },
        ],
      },
      {
        // Every person-frame transcription this lesson stands behind, in one
        // place. Without this the avoir forms are authored in the corpus file
        // and rendered by no component, which is the failure §1 of
        // A1-BUILD-INVARIANTS.md documents seven times over.
        type: 'cheatSheet',
        id: 'sheet-frames-sounds',
        title: 'How each one sounds',
        layer: 'deep',
        rows: [
          { k: 'the weather', v: `il fait chaud ${sub('il fait chaud')} · il fait froid ${sub('il fait froid')}`, say: 'il fait chaud, il fait froid' },
          { k: 'a person, as a set phrase', v: `avoir chaud ${sub('avoir chaud')} · avoir froid ${sub('avoir froid')}`, say: 'avoir chaud, avoir froid' },
          { k: 'a person, in a sentence', v: `j'ai chaud ${sub("j'ai chaud")} · j'ai froid ${sub("j'ai froid")}`, say: "j'ai chaud, j'ai froid" },
          { k: 'a person, asked about', v: `tu as froid ? ${sub('tu as froid')} · il a froid ${sub('il a froid')}`, say: 'tu as froid, il a froid' },
          { k: 'a thing', v: `le café est chaud ${sub('le café est chaud')} · le vent est froid ${sub('le vent est froid')}`, say: 'le café est chaud, le vent est froid' },
        ],
      },
      {
        type: 'teach',
        id: 'sheet-frames-why',
        title: 'Why there is nothing to carry across',
        layer: 'deep',
        body: 'English uses one verb for all three of these and French uses three, which is the whole reason this is hard rather than merely new. English says it is hot, I am hot and the coffee is hot, and the verb is the same word every time, so a learner reaching for a translation finds one French verb and uses it in all three places. It happens to be the wrong one twice. The weather takes il fait and the il in front of it refers to nothing whatsoever: not a man, not a thing, not something said earlier. A person takes avoir, which you already met as a fixed expression, and the useful way to hold it is that a person HAS hot rather than being it. A thing takes être, and that is the one that lines up with English, which is exactly why it gets borrowed for the other two. The good news is that the choice is never a matter of taste. Decide what the sentence is about before you start it and the verb follows with no judgement involved: the sky, a person, or an object. The second thing worth knowing is that the two errors run in opposite directions and the second one arrives after the first is fixed. A learner told to use il fait for the weather starts putting it in front of cups of coffee within a week, which is why the drills here sort both ways rather than only asking you to add il fait. Finally, the empty il is not a quirk of the weather. French uses the same trick elsewhere and you will meet it again, so the habit of asking who il actually is, rather than assuming, is worth more than this lesson alone.',
      },
    ],
  },
  {
    id: 'sheet.a1.10.seasons',
    title: 'The four seasons',
    layer: 'deep',
    contains: ['All four with their sound', 'Which small word each takes', 'The silent m in automne'],
    sections: [
      {
        type: 'table',
        id: 'sheet-seasons-table',
        title: 'The four, both ways',
        layer: 'deep',
        cols: ['The season', 'In it', 'The name alone', 'Watch for'],
        // Both transcriptions per row: the bare name and the frame. A learner
        // returning to this sheet during a1.12 wants the noun as well as the
        // phrase, and an authored respelling that no column renders is the
        // "authored, valid, invisible" failure this project keeps shipping.
        rows: [
          ['le printemps', `au printemps ${sub('au printemps')}`, sub('le printemps'), 'the only au'],
          ["l'été", `en été ${sub('en été')}`, sub("l'été"), 'one n sound links the two words'],
          ["l'automne", `en automne ${sub('en automne')}`, sub("l'automne"), 'the m is silent, the n is real'],
          ["l'hiver", `en hiver ${sub('en hiver')}`, sub("l'hiver"), 'the h is silent, so en links straight in'],
        ],
      },
      {
        type: 'cheatSheet',
        id: 'sheet-seasons-notes',
        title: 'What is worth thirty seconds',
        layer: 'deep',
        rows: [
          { k: 'the hook', v: 'The three that take en all open on a vowel sound. printemps does not. Reliable for these four words only.', say: 'au printemps, en été, en automne, en hiver' },
          { k: 'automne', v: `Written with an m and said with none: ${sub('automne')}. The n at the end is a real n you do pronounce.`, say: 'automne' },
          { k: 'printemps', v: `Two nasal sounds and a silent ps at the end: ${sub('le printemps')}.`, say: 'le printemps' },
          { k: 'hiver', v: 'The h is silent, so en runs straight into it and the two words come out as one piece.', say: 'en hiver' },
          { k: 'the exception', v: 'au printemps is the only one. There is no reason behind it and no wider rule to learn.', say: 'au printemps' },
        ],
      },
    ],
  },
  {
    id: 'sheet.a1.10.weather',
    title: 'Describing the weather',
    layer: 'deep',
    contains: ['The four shapes, with examples', 'Which two overlap', 'The words for what is outside'],
    sections: [
      {
        type: 'table',
        id: 'sheet-weather-shapes',
        title: 'Four shapes, not one',
        layer: 'deep',
        cols: ['The shape', 'Examples', 'What follows il fait or il y a'],
        rows: SHAPES.map((s) => [s.label, s.frames.join(' · '), s.key === 'adjective' ? 'a word for what it is like' : s.key === 'verb' ? 'nothing at all' : 'du, de la or des, then a thing']),
      },
      {
        type: 'cheatSheet',
        id: 'sheet-weather-words',
        title: 'What is out there',
        layer: 'deep',
        rows: [
          { k: 'le vent · la pluie · la neige', v: `${sub('le vent')} · ${sub('la pluie')} · ${sub('la neige')}`, say: 'le vent, la pluie, la neige' },
          { k: 'le soleil · un nuage · le ciel', v: `${sub('le soleil')} · ${sub('un nuage')} · ${sub('le ciel')}`, say: 'le soleil, un nuage, le ciel' },
          { k: "l'orage · le brouillard", v: `${sub("l'orage")} · ${sub('le brouillard')}`, say: "l'orage, le brouillard" },
          { k: 'la météo · le degré · la saison', v: `${sub('la météo')} · ${sub('le degré')} · ${sub('la saison')}`, say: 'la météo, le degré, la saison' },
          { k: 'asking about it', v: `Quel temps fait-il ? ${sub('Quel temps fait-il ?')}`, say: 'Quel temps fait-il ?' },
        ],
      },
      {
        type: 'teach',
        id: 'sheet-weather-overlap',
        title: 'Why two of the four say the same thing',
        layer: 'deep',
        body: 'Il fait du vent and il y a du vent both mean it is windy, both are ordinary, and neither is preferred by anybody. That is worth saying out loud because a learner who meets both without being told will assume one of them is a mistake and spend a year avoiding a sentence they already knew how to build. The same is true of du soleil and du brouillard: either opening works. What the two shapes have in common is what comes after them, which is du or de la and then a thing rather than a word describing what the weather is like. That small word is the one the partitive lesson gave you and it is doing exactly the job it was taught for, so there is nothing new to learn here beyond noticing that the weather is a place it turns up constantly. The two shapes that do not overlap with anything are the first and the third. Il fait takes a describing word straight after it with no small word in between, and il pleut and il neige take nothing at all, because each of those is already a complete sentence on its own. That last point is the one worth holding, because the commonest error in this whole lesson is bolting il fait onto the front of il pleut, and it comes from exactly the right instinct applied one step too far.',
      },
    ],
  },
];

export const METEO_LESSON: Lesson = {
  id: 'a1.10.l1',
  unitId: 'a1.10',
  // The lesson's index WITHIN its unit, not its place in the track. Every
  // lesson in the seed is seq 1 because every unit ships exactly one so far,
  // and the `l1` in the id is this number.
  seq: 1,
  title: 'Les saisons & la météo',
  level: 'a1',
  // FOURTEEN, not ten. missions.ts derives the eyebrow from unit.seq at render
  // time (`${level} · LEÇON ${unit.seq}`), and a1.10 sits at seq 14. The stored
  // value is a fallback and has to agree with what the renderer computes, or
  // the two disagree the moment something reads this field instead. a1.03
  // shipped exactly that bug (commit 56c79a7) and a1.04 ships it today.
  tag: 'A1 · LEÇON 14',
  intro:
    'One adjective, three verbs, and English gives you no help choosing between them. This is how you name the seasons, say what the weather is doing, and ask somebody else the same thing.',

  sections: SECTIONS,
  itemIds: ITEM_IDS,
  // The unit shipped with lessonIds: [], so this is the first lesson here. It
  // moves forward on every rebuild: the merge script prints both sides, and
  // "replacing v3 with v1" reads as a rollback.
  //
  // v2: the first build shipped eleven itemIds that resolved, were released to
  // spaced repetition, and were named by no section and drawn by nothing, plus
  // an act-2 tranche releasing eight season sentences that act 2 never showed.
  // Both are the same failure a1.08 shipped and both were caught by this
  // lesson's own test rather than on a device. s06-enau now quotes a real
  // sentence per season in its detail cards, and s13-shapes carries the
  // sentences, the temperature lines and the three asking questions as itemIds
  // beside the bare frames. v3 adds `il fait doux` and `il fait mauvais` to
  // shape 1, which act 4 released and only act 5's vocabulary deck showed.
  //
  // NOT seed.version. That is the OTA snapshot number, derived by
  // publish-content.ts as previous + 1, and a merge must never hand-bump it.
  // v4: ten authored respellings were rendered by nothing, which the schema,
  // the density validator and the whole suite were all happy with. Found by
  // grepping the served Metro bundle for them. The seasons sheet now shows the
  // bare name as well as the frame, the frames sheet carries a "how each one
  // sounds" cheat sheet, and two tapTable detail titles carry the pair they
  // describe. a1-10-meteo.test.ts now refuses a RESPELL entry no section
  // displays.
  version: 4,

  grammarAssumed: [
    'The full present of être, introduced in a1.06',
    'The full present of avoir, and its fixed expressions including avoir chaud and avoir froid, introduced in a1.07',
    'du, de la and de l\' in front of an uncountable noun, introduced in a1.29',
    'il, elle and the rest of the subject pronouns, introduced in a1.05',
    'The numbers from one to twenty, introduced in a1.02',
    'The numbers from twenty-one to a hundred, introduced in a1.27',
    'le, la, l\' and les, introduced in a1.04',
  ],
  grammarIntroduced: [
    'The impersonal expression il fait plus an adjective, taught as one frozen form and never conjugated',
    'The impersonal subject pronoun il, referring to no antecedent',
    'The impersonal verbs pleuvoir and neiger in the third person singular',
    'il y a plus a partitive article as a weather expression, and its overlap with il fait du',
    'The preposition en in front of été, automne and hiver, and au in front of printemps',
    'The three-way split between impersonal faire, avoir and être for one predicate adjective',
    'The set question Quel temps fait-il, taught as an unanalysed block',
  ],

  features: ['roleplay', 'voiceflash'],

  overview: {
    titleEn: 'Seasons and Weather',
    subFr: 'Les saisons & la météo',
    introFr: 'Un adjectif, trois verbes, et un « il » qui ne désigne personne du tout.',
    minutes: 26,
    difficulty: 2,
    glyph: '🌤️',
    screens: 236,
  },

  acts: ACTS,
  reframe: REFRAME,
  errorTriggers: ERROR_TRIGGERS,
  drills: DRILLS,
  sheets: SHEETS,
  deckTranche: DECK_TRANCHE,
  terms: METEO_TERMS,

  audio: {
    defaultLang: 'fr-FR',
    speeds: [1.0, 0.65],
    coachVoice: 'coach-en-warm',
    interfaceSounds: ['correct', 'incorrect', 'checkpoint'],
    // ── The audio decisions that cannot be recovered later ─────────────────
    //
    // Written here AND pinned by a1-10-meteo.test.ts, the way sons.07's
    // rec-h-pairs and a1.09's rec-a1-09-pairs pin their own, because a
    // constraint on how something is recorded becomes invisible the moment the
    // clip is delivered.
    //
    // Briefs only. Do NOT run pnpm audio:render: it spends real ElevenLabs
    // credits and ELEVENLABS_API_KEY is not set in ealch-admin/.env in any
    // case. CLIP_MANIFEST is empty by design, so every card falls back to
    // device TTS until the studio delivers, and a recordingId resolving to
    // nothing is the correct shipping state.
    //
    // All four of the brief's weather-specific notes are written in explicitly.
    recorded: [
      {
        id: 'rec-a1-10-frames',
        desc:
          'THE THREE FRAMES AS ONE TAKE PER ADJECTIVE, BY ONE VOICE AT ONE PACE. « Il fait chaud », « J\'ai chaud » and '
          + '« Le café est chaud » spoken CONSECUTIVELY IN THE SAME TAKE, in that order, so the only thing the learner '
          + 'hears changing is the verb. Recorded apart they compare three performances instead of three meanings and '
          + 'the whole teaching is lost. Then the same three on froid: « Il fait froid », « J\'ai froid », « Le vent '
          + 'est froid ». Do not lean on the verb to make it clearer. Fait, ai and est are all unstressed in ordinary '
          + 'speech, and a learner who only hears the difference when it is emphasised will not hear it in a café. '
          + 'ALSO IN THIS TAKE, adjacent and in this order: « il fait chaud », « il a chaud », « il est chaud ». Those '
          + 'three are the listening mission and the quiz round built on it, they differ by one short unstressed '
          + 'syllable, and they must be one performance or the exercise is testing the recording rather than the ear.',
        clipIds: [
          'il fait chaud', "j'ai chaud", 'le café est chaud',
          'il fait froid', "j'ai froid", 'le vent est froid',
          'il a chaud', 'il est chaud', 'il a froid',
          'three-frames-chaud', 'three-frames-froid', 'il-fait-il-a-il-est',
        ],
      },
      {
        id: 'rec-a1-10-collision',
        desc:
          '« IL FAIT DU VENT » AND « IL FAIT DU YOGA » ADJACENT IN THE SAME TAKE, in that order, because the pair IS '
          + 'the lesson and two recordings are two performances. Read BOTH completely straight and at the same pace: '
          + 'the entire teaching is that they are identical for four words and then are not, so any difference in '
          + 'delivery before the final noun destroys it. Do NOT pause before the noun and do not lean on it. Then the '
          + 'same treatment for « Il fait du brouillard ce matin » against « Il fait de la pêche près de la rivière », '
          + 'and for « Il fait froid » against « Il a froid », which is the same collision one letter apart. The scene '
          + 'line « Il fait du vent dehors » is Nadia speaking to somebody she likes, standing in wind, and it should '
          + 'sound like a remark rather than a demonstration.',
        clipIds: [
          'il fait du vent', 'il fait du yoga',
          'Il fait du vent dehors.', 'Il fait du yoga tous les matins.',
          'Il fait du brouillard ce matin.', 'Il fait de la pêche près de la rivière.',
          'il fait froid', 'il a froid',
        ],
      },
      {
        id: 'rec-a1-10-seasons',
        desc:
          'THE FOUR SEASONS IN CALENDAR ORDER, ONE TAKE, ONE VOICE, WITH THE PREPOSITION ATTACHED: « au printemps », '
          + '« en été », « en automne », « en hiver ». Four bare nouns teach nothing this lesson needs, and the small '
          + 'word in front is the entire content of the mission. Read them with an even beat, the way somebody lists '
          + 'things, then again slowly in the same take. « au printemps » comes FIRST so the exception is heard '
          + 'against the three that follow it rather than buried among them. Keep every nasal closed: printemps '
          + 'carries TWO nasal vowels and NO n sound in either, and en carries one in all three of the others. The '
          + 'liaison in « en été », « en automne » and « en hiver » is a real linking n and it should sound like one '
          + 'smooth piece rather than two words. SEPARATELY IN THIS TAKE, RECORD « automne » SLOWLY ONCE IN ISOLATION. '
          + 'The m is SILENT and the n at the end is a REAL PRONOUNCED CONSONANT, close to oh-TONN with no nasal vowel '
          + 'anywhere in the word. That is the pronunciation the learner will get wrong, the deck is the only place '
          + 'the word is heard alone, and a reader who nasalises it teaches the opposite of what this lesson says.',
        clipIds: [
          'au printemps', 'en été', 'en automne', 'en hiver',
          'automne', 'seasons-in-order',
        ],
      },
      {
        id: 'rec-a1-10-shapes',
        desc:
          'The four shapes, grouped by shape rather than by weather, so the learner hears the STRUCTURE repeating. '
          + 'First « il fait beau », « il fait chaud », « il fait froid », « il fait frais » straight through with the '
          + 'same two opening words each time and no pause after them: the frame is one block and a reader who '
          + 'breathes between fait and the adjective teaches the learner that something belongs there. Then « il fait '
          + 'du vent », « il fait du soleil », « il fait du brouillard ». Then « il pleut » and « il neige », both '
          + 'short and both complete, with a clear silence after each so it is audible that nothing follows. Then « il '
          + 'y a du vent », « il y a du soleil », « il y a des nuages », « il y a de l\'orage ». FINALLY, adjacent and '
          + 'in one breath: « il fait du vent » immediately followed by « il y a du vent », at the same pace and with '
          + 'no emphasis on either, because the learner has to hear that these are two ordinary ways of saying one '
          + 'thing rather than a correction of one by the other.',
        clipIds: [
          'il fait beau', 'il fait chaud', 'il fait froid', 'il fait frais',
          'il fait du vent', 'il fait du soleil', 'il fait du brouillard',
          'il pleut', 'il neige',
          'il y a du vent', 'il y a du soleil', 'il y a des nuages', "il y a de l'orage",
          'vent-both-ways',
        ],
      },
      {
        id: 'rec-a1-10-asking',
        desc:
          '« Quel temps fait-il ? » as ONE BLOCK at ordinary conversational speed, the way somebody actually asks it, '
          + 'then once more slowly in the same take. It is four words and the learner is being taught it as a single '
          + 'unit, so do not separate them and do not put a rise on temps. The t of fait links into il and that link '
          + 'is the reason this sounds like three syllables rather than four: keep it. Then « Quel temps fait-il '
          + 'aujourd\'hui ? » and « Fait-il beau à Paris en ce moment ? » so the shape is heard surviving inside a '
          + 'longer question. Finish with two ordinary answers, « Il fait beau et il y a du soleil » and « Il fait '
          + 'vingt degrés aujourd\'hui », read as replies rather than as examples.',
        clipIds: [
          'Quel temps fait-il ?', 'Quel temps fait-il aujourd\'hui ?',
          'Fait-il beau à Paris en ce moment ?',
          'Il fait beau et il y a du soleil.', 'Il fait vingt degrés aujourd\'hui.',
        ],
      },
      {
        id: 'rec-a1-10-traps',
        desc:
          'The five traps, wrong version then right version, with a clear beat between them so the learner hears a '
          + 'difference rather than a correction. Read EVERY wrong version plainly and at ordinary pace rather than '
          + 'comically. Three of the five are real French sentences that mean something else, and a performance that '
          + 'marks them as errors removes the reason they are dangerous: « Je suis chaud » is grammatical and lands '
          + 'somewhere the learner did not intend, « Il est chaud aujourd\'hui » parses perfectly as a remark about an '
          + 'object, and hearing « Il fait du vent » as a man is not an error of production at all. « Il fait pleut » '
          + 'and « En printemps » are the two that genuinely stop, and they still get read straight.',
        clipIds: ['trap-je-suis-chaud', 'trap-il-est-chaud', 'trap-en-printemps', 'trap-il-fait-pleut', 'trap-personal-il'],
      },
      {
        id: 'rec-a1-10-scene',
        desc:
          'The opening scene, French bubbles only, in the voice of a woman in her thirties on her own roof, talking to '
          + 'a friend rather than to a class. The beat where she explains that nobody is doing anything '
          + '(« Qui ? Personne. Le vent ! ») must be AMUSED AND WARM rather than corrective or exasperated: the whole '
          + 'point of the scene is that the misunderstanding costs nothing socially and is simply funny, and any edge '
          + 'on that line turns it into a telling-off. The closing line, where she says the weather version straight '
          + 'back at the learner, is the one that has to be perfectly ordinary, because the learner is meant to '
          + 'notice they can now hear it.',
        clipIds: ['Il fait du vent dehors.', 'Qui ? Personne. Le vent !', 'Oui, il fait chaud ici. On rentre ?'],
      },
    ],
    ambienceDefault: 'off',
  },
};

/** Exported for the authoring script, the merge script and the test, so none of
 *  them restates a count that can drift out of agreement with the content. */
export const METEO_ITEM_IDS = ITEM_IDS;
export const METEO_SPEAK_IDS = SPEAK_IDS;
export const METEO_DICTATION_IDS = DICTATION_IDS;
export const METEO_TRANCHES = DECK_TRANCHE;
export const METEO_SEASON_IDS = SEASONS;
export const METEO_FRAME_IDS = FRAMES;
export const METEO_THREE_FRAME_IDS = THREE_FRAMES;
export const METEO_COLLISION_IDS = COLLISION;
export const METEO_WILD_SEASON_IDS = WILD_SEASONS;
export const METEO_WILD_WEATHER_IDS = WILD_WEATHER;
export const METEO_ASKING_IDS = ASKING;
/** Every id this lesson names that it did not author. All of them: a1.10
 *  authors nothing. */
export const METEO_BORROWED_IDS = BORROWED_IDS;
export const METEO_IMPORTED_IDS = IMPORTED_IDS;
export const METEO_REUSED_IDS = REUSED_IDS;
/** Re-exported so the batch, the merge and the test all check one list. */
export { FAIRE_FORMS, MONTH_WORDS, DAY_WORDS, CLOCK_WORDS, seasonsIn };
