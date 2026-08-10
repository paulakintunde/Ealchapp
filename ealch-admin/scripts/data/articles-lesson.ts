// a1.04.l1 "Les articles définis" — the mission journey. A REBUILD.
//
// ── What was here before, and why none of it survives as shape ─────────────
//
// a1.04.l1 shipped at v2 as six sections: table, examples, audio, commonErrors,
// practice, quiz. Titled Reference / Examples / Listen / Common errors /
// Practice / Quiz, which is a table of contents rather than a journey. It
// declared four itemIds and its practice section named the same four, so the
// entire corpus footprint of the lesson was four items. It had no acts, and
// therefore no density validation at all, since isV2Lesson gates on acts.
//
// Four defects were live on a device and all four passed the suite:
//
//   Four em dashes, in `intro` and twice in `examples`. Nothing enforced the
//   ban on this lesson: sons-alphabet.test.ts carries a comment claiming its
//   em-dash check covers the whole seed and the code four lines below it walks
//   sons.01 only. The ban is enforced per lesson, by that lesson's own test.
//   a1-04-articles.test.ts is now that test.
//
//   Two U+203F tie characters, in « les‿amis ». That glyph renders as a low
//   underscore on a Pixel 6, so the learner read les_amis. Not carried forward.
//
//   commonErrors with no `swipe` and no `size`, so it drew a scrolling list
//   rather than one trap per screen.
//
//   A `table` section in the flow. It survived only because the section had no
//   `layer`, so table-in-core could not fire. This lesson has acts now, so the
//   grid moved to a sheet at layer 'deep' where a table belongs.
//
// It also taught "élision" and "liaison" by name to a learner who may never
// have opened the sons track. See the note on jargon below.
//
// ── What IS preserved, deliberately ────────────────────────────────────────
//
//   The four-way framing in `intro` (gender, number, first letter). It is
//   better than most textbooks give. The em dash is gone and a second sentence
//   now names the half the old intro left out.
//
//   Both commonErrors. « le eau » and « les ami » are real errors made by real
//   learners. They are kept, the third and worst one (the bare noun) is added,
//   the jargon is stripped out of the explanations, and the section finally
//   carries `swipe: true` and `size: 'lg'` so it draws one trap per screen.
//
//   le soleil et la lune. Two things whose gender is arbitrary and opposite,
//   which is the single best card in the shipped lesson. It is now the closing
//   card of the le/la deck rather than a line in an examples list.
//
//   All four original itemIds: fr.a1.objets.004, fr.a1.cafe.004,
//   fr.a1.dictee.002 and fr.a1.dictee.003. Nothing the old lesson taught is
//   dropped; it is joined by forty-six more.
//
// ── The teaching problem: use, not form ────────────────────────────────────
//
// The FORM is four cells and a learner has it in five minutes. Shipping that
// again with more sections around it rebuilds a reference card.
//
// The USE is where an English speaker fails every day for months, because
// French puts the definite article exactly where English puts nothing:
//
//   I like coffee.          J'aime le café.
//   Cats are independent.   Les chats sont indépendants.
//   French is difficult.    Le français est difficile.
//
// « J'aime café » is not a small error. It is not a sentence. And it is
// invisible from inside English, where the bare noun IS the general case. So
// the split in this lesson is roughly one third form and two thirds use: acts
// 2 to 4 are the machinery, acts 1 and 5 are the thing the machinery is for,
// and the exam weights production over recognition to match.
//
// ── A corpus claim in the brief that did not survive checking ──────────────
//
// The brief stated that the corpus holds essentially zero clean examples of the
// generic use, having found four sentences of the shape "I like / I prefer /
// I hate" + article, three of which translate the article into English anyway.
// That search was too narrow. Re-run on 2026-08-05 as "any a1 sentence whose
// French carries le/la/les and whose English gloss carries no article at all",
// it returns 178, and a large minority of them are exactly the target shape:
//
//   Nous aimons le français.              We like French.
//   Les chats adorent dormir au soleil.   Cats love sleeping in the sun.
//   Les oiseaux volent vers le sud.       Birds fly south.
//   Le sport rend les enfants plus forts. Sport makes children stronger.
//   Les abricots sont chers cette semaine. Apricots are expensive this week.
//
// So the main authoring job the brief budgeted for does not exist, and this
// lesson authors ZERO corpus entries. Every one of the sixteen generic-use
// sentences it teaches is quoted verbatim from an item that already ships, and
// the test asserts that verbatim against the corpus rather than trusting this
// file. That is strictly better than authoring them: an authored sentence is
// absent from the flashcard hub, the SRS and every other lesson, and these are
// already in all three.
//
// The one thing the brief was right about is the shape of the search. Looking
// for the article in the FRENCH finds 1,703 items and teaches nothing. Looking
// for its ABSENCE in the ENGLISH is what finds the lesson.
//
// ── Jargon, and why the sons track is not leaned on ────────────────────────
//
// sons.07 (Elision, 19 sections) and sons.10 (Liaison, 27 sections) own the two
// pronunciation facts this lesson touches, and both teach them far better than
// a mission here could. a1.04 declares a prerequisite on a1.03 and none on the
// sons track, so a learner arriving from noun gender may never have opened it.
// Neither word appears anywhere in this lesson. The behaviour is named plainly
// instead, exactly as a1.02 did with the consonant that appears before a vowel,
// and the roundup points forward in one line rather than in a mission.
//
// ── a1.03 exists, which the brief said it might not ───────────────────────
//
// The brief warned that a1.03 "may still be empty" and that this lesson should
// say what it assumed if so. It is not empty: a1.03.l1 "Le genre des noms"
// ships at v1 with 26 sections, 44 itemIds and the reframe "Learn the article,
// not the noun." It already teaches that l apostrophe conceals the gender and
// asks the learner to convert it back to un or une before storing.
//
// That changes this lesson for the better and the split is now clean. a1.03
// owns how gender is stored and retrieved, using un and une. This lesson owns
// what to do with it once you have it, plus the two branches where it stops
// mattering, plus the use. Nothing here re-teaches an ending or a reliability
// percentage.
//
// ── Section shapes with a history ─────────────────────────────────────────
//
//   The scene's beats are a named const, each with its own size and audio, and
//   the section sets no `size`: ownsLayout() ignores section size, but
//   density.logic.ts reads xl as one French unit at 56pt and caps every string
//   at 12 words, so prose cannot live there. Nothing in this lesson is xl.
//
//   commonErrors carries `swipe: true` and `size: 'lg'`, which is the fix for
//   the defect this lesson was the named example of.
//
//   `reading` carries questionsInModal WITH questions, the only path that
//   reaches PassagePage and therefore the only path that draws a glossary. The
//   passage is ONE BLOCK with no authored line breaks, because PassagePage
//   splits on sentence punctuation and renders the pieces inline, so a `\n` is
//   consumed as whitespace.
//
//   ONE quiz section. lessonPager.logic.ts appends exactly one quiz page and
//   resolves it with sections.find(s => s.type === 'quiz').
//
//   `autoplay` is not authored anywhere. It is declared in schema.ts and
//   implemented in no component. `audioFirst` is the one that works.
//
//   No `setting.image`. assets/lessons/ holds alphabet, muettes, rythme and
//   salutations and nothing for this lesson, and Metro resolves require()
//   statically, so registering a ref with no file breaks the bundle rather
//   than degrading to no image.
//
//   No U+203F anywhere. It renders as a low underscore on a Pixel 6, and where
//   two words join the lesson says so in words instead.
//
// ── A renderer finding that changed the design ────────────────────────────
//
// The brief recommends `practice` with `skill: 'write'`, prompted from English,
// as one of the two formats that genuinely test producing an article. It is
// not. LessonSection.tsx routes every practice section to PracticeVFView, and
// PracticeVFView is handed itemIds, sectionTitle and the grading callbacks and
// nothing else: `skill` never reaches it. The card shows the French with its
// article already on it, an audio chip, the line "Say it in French", and a
// self-graded Missed it / I knew it. Authoring skill 'write' would put an ÉCRIT
// label from missions.ts on a mission where nothing is written.
//
// So the speak practice is authored as `speak`, which is what the card
// actually asks for, and the production load moved to the two surfaces that
// really do make the learner supply the word from nothing: the typeIn and
// errorSpot questions in the exam, which draw a free-text box, and the dictée,
// where the learner assembles « Les chats adorent... » from word tiles and has
// to place Les themselves.

import type { Lesson, LessonAct, LessonDrill, LessonSection, ErrorTrigger, ReferenceSheet, SceneBeat } from '../../../ealch-v2/src/content/schema.ts';
import { REFRAME, ARTICLES_TERMS } from './articles-terms.ts';
import { withScenarioAlts } from '../scenario-alts.logic.ts';

export { REFRAME };

/* ─── The corpus this lesson draws on ──────────────────────────────────────
 *
 * Fifty ids, every one of them already published. Nothing is authored here.
 *
 * Cross-theme reference is deliberate and precedented (sons.04 draws on eight
 * themes, a1.02 on four). An article is not a topic, it is a thing that sits in
 * front of every noun in the language, so a set drawn from one theme would
 * teach the article as though it belonged to that theme.                     */

/** Masculine, consonant-initial. The branch where the gender is finally the
 *  thing that decides, which is the point of teaching it third rather than
 *  first. */
const LE = ['fr.a1.cuisine.011', 'fr.a1.objets.004', 'fr.a1.ecole.029', 'fr.a1.cuisine.002'];
/** Feminine, consonant-initial. fr.sons.voyelles.008 is la lune, which exists
 *  here so that le soleil et la lune survives the rebuild: two everyday things
 *  whose genders are arbitrary and opposite. */
const LA = ['fr.a1.maison.001', 'fr.sons.voyelles.008', 'fr.a1.maison.015', 'fr.a1.deplacements.018'];
/** Vowel-initial, so both le and la shorten and the gender goes invisible.
 *  Two are masculine and two are feminine and the cards look identical, which
 *  is the argument a1.03 already made and this lesson only has to point at.
 *  fr.a1.cafe.004 is one of the four ids the shipped lesson declared. */
const LAP = ['fr.a1.cuisine.010', 'fr.a1.ecole.013', 'fr.a1.maison.077', 'fr.a1.famille.020', 'fr.a1.cafe.004'];
/** Plural. Three masculine, two feminine, one that is neither because it is a
 *  phrase, and les for all of them. Deliberately more than the four forms
 *  needed: the corpus holds 794 items starting "le " and 69 starting "les ",
 *  so the plural is the form a learner has met least and would get four
 *  percent of the airtime if the set were drawn proportionally. */
const LES = ['fr.a1.famille.014', 'fr.a1.marche.056', 'fr.a1.corps.014', 'fr.a1.maison.011', 'fr.a1.ecole.044', 'fr.sons.liaisons.166'];

/** The h that behaves like a vowel, so the article shortens. Verified against
 *  each item's own `fr` in the corpus rather than against a list typed here;
 *  the test re-checks that, because a word on the wrong side of this split is
 *  the one error in the lesson a learner cannot detect for themselves. */
const H_MUET = ['fr.sons.elision.015', 'fr.sons.elision.016', 'fr.a1.ecole.132', 'fr.a1.cuisine.059', 'fr.a1.ecole.165', 'fr.sons.elision.012'];
/** The h that behaves like a consonant, so le and la stay whole. Same letter,
 *  opposite behaviour, no rule connecting them. fr.a1.cuisine.095 is plural as
 *  well, and is the one item in the lesson that answers two questions at once. */
const H_ASPIRE = ['fr.a1.animaux.044', 'fr.a1.animaux.051', 'fr.a1.sports-et-loisirs.084', 'fr.a1.animaux.140', 'fr.a1.corps.059', 'fr.a1.cuisine.095'];

/** The generic use, which is the lesson.
 *
 *  Every one of these is an existing corpus sentence whose FRENCH carries a
 *  definite article and whose ENGLISH gloss carries none, so the pair is the
 *  claim rather than an illustration of it. fr.a1.metiers.120 is the
 *  counterexample and sits here on purpose: it runs the other way, and without
 *  one the lesson reads as "always add le". */
const GENERIC = [
  'fr.a1.dictee.215',            // Nous aimons le français.              We like French.
  'fr.a1.dictee.217',            // Ils aiment la musique.                They like music.
  'fr.a1.dictee.216',            // Vous aimez les mathématiques.         You like math.
  'fr.a1.dictee.218',            // Elles aiment le dessin.               They like drawing.
  'fr.a1.sports-et-loisirs.149', // Elle aime beaucoup le tennis.         She likes tennis a lot.
  'fr.a1.cafe.104',              // Elle aime le café au lait.            She likes coffee with milk.
  'fr.a1.cuisine.257',           // Il aime les plats épicés.             He likes spicy dishes.
  'fr.a1.marche.159',            // Je préfère les légumes bio.           I prefer organic vegetables.
  'fr.a1.sports-et-loisirs.158', // Je préfère le sport en équipe.        I prefer team sports.
  'fr.a1.animaux.093',           // Les chats adorent dormir au soleil.   Cats love sleeping in the sun.
  'fr.a1.marche.114',            // Les abricots sont chers cette semaine. Apricots are expensive this week.
  'fr.a1.sports-et-loisirs.114', // Les enfants adorent le sport collectif. Children love team sports.
  'fr.a1.sports-et-loisirs.119', // Le sport rend les enfants plus forts. Sport makes children stronger.
  'fr.a1.famille.156',           // Ma sœur apprend le piano.             My sister is learning piano.
  'fr.a1.animaux.096',           // Les oiseaux volent vers le sud en hiver. Birds fly south in winter.
  'fr.a1.metiers.120',           // Elle est infirmière et elle travaille la nuit. She's a nurse and she works nights.
];

/** The dictée: six sentences, one per claim the lesson makes.
 *
 *  Every one carries the `dictation` drill and every one lands in WORD mode
 *  (over 16 letters, more than one word), so the learner assembles word tiles
 *  with decoys mixed in rather than spelling letter by letter. Checked against
 *  dictee.logic.ts in the test rather than assumed.
 *
 *  This is the strongest production surface the app has for this lesson. A
 *  learner building « Les chats adorent dormir au soleil » has to place Les
 *  themselves, from an English prompt they would have written without it.
 *  fr.a1.dictee.002 and .003 are two of the four ids the shipped lesson
 *  declared, and both put an article inside a sentence rather than on a card,
 *  which is the actual skill. */
const DICTATION = [
  'fr.a1.animaux.093',           // Les chats adorent dormir au soleil.
  'fr.a1.sports-et-loisirs.114', // Les enfants adorent le sport collectif.
  'fr.a1.cafe.104',              // Elle aime le café au lait.
  'fr.a1.animaux.094',           // L'oiseau chante tous les matins.
  'fr.a1.dictee.002',            // Nous allons à la plage demain.
  'fr.a1.dictee.003',            // J’achète du pain à la boulangerie.
];

/** Said out loud and self-graded. Every one carries the voiceflash drill; an
 *  item without it renders a card the mic cannot score, which reads as a broken
 *  mission rather than a missing tag. Four of each form plus the two h's, so
 *  the deck rehearses the whole decision rather than one branch of it.
 *
 *  fr.a1.ecole.132, fr.a1.ecole.165 and fr.a1.animaux.140 are taught elsewhere
 *  in the lesson and deliberately absent here: they carry flashcard and review
 *  and no voiceflash. */
const SPEAK_IDS = [
  ...LE,
  ...LA,
  'fr.a1.cuisine.010', 'fr.a1.ecole.013', 'fr.a1.maison.077', 'fr.a1.famille.020',
  ...LES,
  'fr.sons.elision.015', 'fr.sons.elision.016',
  'fr.a1.animaux.044', 'fr.a1.corps.059',
];

const ITEM_IDS = [...new Set([...GENERIC, ...LE, ...LA, ...LAP, ...LES, ...H_MUET, ...H_ASPIRE, ...DICTATION])];

/* ─── Mission 1 · Scene ───────────────────────────────────────────────────
 *
 * The A1 register of stakes is being misread as a person, not being
 * misunderstood. Nobody here fails to follow the learner: every word they say
 * is a real French word and the meaning arrives intact. What happens is that
 * the host repeats the sentence back with the word that was missing, in the
 * tone you use with a child, and the learner hears themselves placed.
 *
 * The choice beat is the learner's own line and both options are plausible,
 * because « J'aime café » is exactly what an English speaker produces when
 * they know both words and have never been told about the third one.
 *
 * Second person, present tense, one learner.                                  */

const SCENE_BEATS: SceneBeat[] = [
  {
    kind: 'narration',
    size: 'md',
    text: 'Lunch is finished and the plates are still on the table. Claire is filling the cafetière and asking everyone what they want.',
    audio: { mode: 'tts', voice: 'coach' },
  },
  {
    kind: 'bubble',
    from: 'them',
    reveal: 'tap',
    size: 'md',
    speaker: 'Claire',
    fr: 'Et toi, qu\'est-ce que tu aimes ?',
    en: 'And you, what do you like?',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a1-04-scene' },
  },
  {
    kind: 'narration',
    size: 'md',
    text: 'You have known the word for coffee since your first week. This is the easiest question anyone will ask you all afternoon.',
    audio: { mode: 'tts', voice: 'coach' },
  },
  {
    kind: 'choice',
    size: 'lg',
    prompt: 'You answer her. Which one?',
    options: [
      {
        fr: 'J\'aime café.',
        en: 'the words you actually need',
        outcome: 'breaks',
        audio: { mode: 'tts', lang: 'fr-FR' },
      },
      {
        fr: 'J\'aime le café.',
        en: 'the same words, and one more',
        outcome: 'works',
        audio: { mode: 'tts', lang: 'fr-FR' },
      },
    ],
    followUp: {
      works: 'Right, and the extra word is not politeness or emphasis. French has no version of that sentence without it.',
      breaks: 'Every word there is a real French word, and the sentence is not French. Watch what Claire does next.',
    },
  },
  {
    kind: 'bubble',
    from: 'them',
    reveal: 'auto',
    size: 'md',
    speaker: 'Claire',
    fr: 'Ah, tu aimes le café.',
    en: 'Ah, you like coffee.',
    stage: 'She says it back to you with the word you left out, gently, the way you would to a child.',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a1-04-scene' },
  },
  {
    kind: 'break',
    size: 'lg',
    heading: 'The word you left out',
    body: 'Every word you said was a French word. The sentence was not, because English lets you drop the article in front of a general idea and French has no way to do that at all.',
    wrong: {
      fr: 'J\'aime café.',
      ipa: '/ʒɛm ka.fe/',
      en: 'what you said',
    },
    right: {
      fr: 'J\'aime le café.',
      ipa: '/ʒɛm lə ka.fe/',
      en: 'what French requires',
    },
    coach: 'Nobody misunderstood you. They heard a learner.',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], audioFirst: true, recordingId: 'rec-a1-04-bare' },
  },
  {
    kind: 'bubble',
    from: 'you',
    reveal: 'tap',
    size: 'md',
    fr: 'Oui. J\'aime le café.',
    en: 'Yes. I like coffee.',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65] },
  },
  {
    kind: 'bubble',
    from: 'them',
    reveal: 'auto',
    size: 'md',
    speaker: 'Claire',
    fr: 'Le matin, le café. Le soir, le thé.',
    en: 'Coffee in the morning. Tea in the evening.',
    stage: 'Four nouns in one breath, and every one of them arrives with a word English would not have used.',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a1-04-scene' },
  },
  {
    kind: 'resolve',
    size: 'md',
    text: 'You were not misunderstood, and you were not corrected. You were repeated back to.',
  },
];

const SECTIONS: LessonSection[] = [
  /* ── Act 1: the word English leaves out ───────────────────────────────── */

  {
    type: 'scene',
    id: 's01-scene',
    title: 'The Coffee You Left Bare',
    frSub: 'J\'aime le café',
    render: 'screens',
    layer: 'core',
    terms: ['zero'],
    say: {
      text: 'Watch this happen. You know both words, you say both words, and the sentence still is not French.',
      voice: 'coach',
      timing: 'onFirstVisitOnly',
    },
    setting: {
      place: 'A friend\'s kitchen table',
      city: 'Lyon',
      time: 'Sunday, just after lunch',
      ambience: 'room-tone-kitchen',
    },
    beats: SCENE_BEATS,
    // The reframe is referenced, never retyped, so this appearance cannot drift
    // out of agreement with the eight others the density validator counts.
    closing: {
      size: 'md',
      text: `${REFRAME} That is the decision, and you make it before you open your mouth.`,
    },
  },

  {
    type: 'goals',
    id: 's02-goals',
    title: 'What You Will Be Able To Do',
    frSub: 'Ce que vous saurez faire',
    layer: 'core',
    say: `${REFRAME} By the end of this you will hear the gap before you fall into it.`,
    goals: [
      { t: 'Never leave a noun bare', s: 'Put the article where English gives you nothing, which is where you currently lose the sentence.' },
      { t: 'Pick between the four', s: 'Choose le, la, l apostrophe or les for any noun you know, in three questions.' },
      { t: 'Know when gender stops counting', s: 'Two of those three questions never ask what a1.03 taught you to store.' },
      { t: 'Recognise the h that lies', s: 'Tell l heure from le hibou, which is the only place the difference ever shows.' },
    ],
  },

  {
    type: 'cardDeck',
    id: 's03-nothing',
    title: 'Where English Says Nothing',
    frSub: 'Là où l\'anglais ne dit rien',
    hint: 'Swipe through the five cards.',
    render: 'deck',
    layer: 'core',
    size: 'lg',
    terms: ['zero'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a1-04-bare' },
    say: `${REFRAME} Here is what that looks like in four sentences you would get wrong today.`,
    cards: [
      {
        label: 'A thing in general',
        head: 'Coffee, all coffee',
        fr: 'Elle aime le café au lait.',
        sub: 'She likes coffee with milk',
        body: 'English says coffee. French says le café. The English sentence has nothing at all in front of the noun, and that empty slot is the whole problem, because there is no gap on the page for you to notice.',
      },
      {
        label: 'A whole category',
        head: 'Cats, meaning cats',
        fr: 'Les chats adorent dormir au soleil.',
        sub: 'Cats love sleeping in the sun',
        body: 'Not these cats. Cats as a species. English marks that by removing a word and French marks it by keeping one, which is the same idea running in opposite directions.',
      },
      {
        label: 'A subject you study',
        head: 'A language, a skill',
        fr: 'Nous aimons le français.',
        sub: 'We like French',
        body: 'Languages, school subjects, sports and instruments all behave this way. Le français, les mathématiques, le tennis, le piano. English drops the word in front of every one of them.',
      },
      {
        label: 'The other direction',
        head: 'Where French drops it',
        fr: 'Elle est infirmière et elle travaille la nuit.',
        sub: 'She is a nurse and she works nights',
        body: 'This one runs both ways in a single sentence. French refuses an article in front of a job after être, where English insists on one, and then adds la in front of a time where English gives nothing. a1.11 owns the first half.',
      },
      {
        label: 'What le stands for',
        head: 'One line, four words',
        fr: 'le · la · l\' · les',
        sub: 'the same job, four shapes',
        body: `${REFRAME} Le there is shorthand for whichever of the four the noun actually takes. Working out which is the next act, and it is the easy half.`,
      },
    ],
  },

  {
    type: 'examples',
    id: 's04-generic',
    title: 'The Rule In Twelve Lines',
    frSub: 'Douze phrases, une règle',
    layer: 'core',
    terms: ['zero', 'storeIt'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a1-04-generic' },
    say: 'Read the English first, then the French. Every English line is missing a word the French line has.',
    // Every `fr` and `en` here is quoted VERBATIM from a corpus item. The test
    // asserts that against the seed rather than trusting this file, which is
    // what stops the claim being illustrated with French this lesson invented.
    examples: [
      { fr: 'Nous aimons le français.', en: 'We like French.', note: 'A language. English has nothing in front of it and French has le.' },
      { fr: 'Ils aiment la musique.', en: 'They like music.', note: 'Feminine, so la. The English still has nothing.' },
      { fr: 'Vous aimez les mathématiques.', en: 'You like math.', note: 'Plural in French, singular in English, and only French marks it at all.' },
      { fr: 'Elles aiment le dessin.', en: 'They like drawing.', note: 'An activity. Same shape, same missing word.' },
      { fr: 'Elle aime beaucoup le tennis.', en: 'She likes tennis a lot.', note: 'Sports take the article every time, and English never gives them one.' },
      { fr: 'Il aime les plats épicés.', en: 'He likes spicy dishes.', note: 'A type of food rather than particular plates on a table.' },
      { fr: 'Je préfère les légumes bio.', en: 'I prefer organic vegetables.', note: 'Preferring a kind of thing is the most common place this catches people.' },
      { fr: 'Je préfère le sport en équipe.', en: 'I prefer team sports.', note: 'English plural, French singular, and the article arrives anyway.' },
      { fr: 'Les chats adorent dormir au soleil.', en: 'Cats love sleeping in the sun.', note: 'A whole species as the subject of the sentence.' },
      { fr: 'Les abricots sont chers cette semaine.', en: 'Apricots are expensive this week.', note: 'Apricots as a thing you buy, not the ones in your bag.' },
      { fr: 'Les oiseaux volent vers le sud en hiver.', en: 'Birds fly south in winter.', note: 'Birds in general. Two articles here, and English has neither.' },
      { fr: 'Le sport rend les enfants plus forts.', en: 'Sport makes children stronger.', note: 'Two bare nouns in the English and two articles in the French, in one short line.' },
    ],
  },

  /* ── Act 2: which one to reach for ────────────────────────────────────── */

  {
    type: 'cardDeck',
    id: 's05-four',
    title: 'Le, La, L\' and Les',
    frSub: 'Les quatre formes',
    hint: 'Swipe through the four cards.',
    render: 'deck',
    layer: 'core',
    size: 'lg',
    terms: ['pick', 'storeIt'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a1-04-forms' },
    say: 'Four cards, one form each. This is the part you will have from a single reading, and it is the smaller half of the lesson.',
    cards: [
      {
        label: 'Masculine singular',
        head: 'le',
        fr: 'le fromage',
        sub: 'the cheese',
        body: 'For a masculine noun that starts on a consonant sound. This is the form the corpus shows you most: nearly eight hundred entries in this app begin with it, which is why it feels like the default even though it is one of four.',
      },
      {
        label: 'Feminine singular',
        head: 'la',
        fr: 'la maison',
        sub: 'the house',
        body: 'For a feminine noun that starts on a consonant sound. Nothing in the word maison tells you it is feminine, which is a1.03\'s whole subject and the reason you were asked to store the article with the noun.',
      },
      {
        label: 'Before a vowel sound',
        head: 'l\'',
        fr: 'l\'eau',
        sub: 'the water',
        body: 'Le and la both shorten to this in front of a vowel sound, and the two become one word. Water is feminine and the card no longer says so, which is exactly the concealment a1.03 warned about.',
      },
      {
        label: 'Any plural',
        head: 'les',
        fr: 'le soleil et la lune',
        sub: 'one masculine, one feminine',
        body: 'Put those two in the plural and both take les. The sun is masculine and the moon is feminine for no reason anyone can give you, and les is the one form that never asks.',
      },
    ],
  },

  {
    type: 'steps',
    id: 's06-order',
    title: 'Three Questions In Order',
    frSub: 'Trois questions, dans l\'ordre',
    layer: 'core',
    terms: ['pick'],
    say: 'Three questions, and you stop at the first one that answers yes. Two of the three never ask about gender.',
    steps: [
      'Is the noun plural? Then it is les, whatever its gender. You are done, and you never had to know whether it was masculine or feminine.',
      'Does the noun start on a vowel sound? Then it is l apostrophe, whatever its gender. Done again, and again the gender never came up.',
      'Neither? Then it is le or la, and only now do you need the gender you stored in a1.03. This is the one branch of the three that asks.',
    ],
  },

  {
    type: 'tapTable',
    id: 's07-grid',
    title: 'The Grid, Row By Row',
    frSub: 'La grille',
    layer: 'core',
    terms: ['pick', 'plural'],
    sheetId: 'sheet.a1.04.grid',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a1-04-forms' },
    say: 'The same four forms as a table. Tap any row for the case it covers and the one it does not.',
    cols: ['The noun', 'The word', 'Example'],
    rows: [
      {
        cells: ['Masculine, consonant', 'le', 'le livre'],
        say: 'le livre',
        detail: {
          title: 'le',
          body: 'The third question, masculine answer. You reach this row only after the noun turned out to be singular and to start on a consonant sound, which is why the gender matters here and nowhere else.',
          say: 'le livre',
        },
      },
      {
        cells: ['Feminine, consonant', 'la', 'la table'],
        say: 'la table',
        detail: {
          title: 'la',
          body: 'The third question, feminine answer. The same row as le with the other answer, and the only thing separating them is a fact about the noun that you cannot see on the page.',
          say: 'la table',
        },
      },
      {
        cells: ['Any gender, vowel sound', 'l\'', 'l\'école'],
        say: 'l\'école',
        detail: {
          title: 'l\'',
          body: 'The second question. School is feminine and the card will not tell you, because la and le both arrive here as the same two letters. Store it as une école the moment you meet it.',
          say: 'l\'école',
        },
      },
      {
        cells: ['Any gender, plural', 'les', 'les parents'],
        say: 'les parents',
        detail: {
          title: 'les',
          body: 'The first question, and the shortest route through. Masculine, feminine or a mixture, it makes no difference. The S on the end of the noun is usually silent, so les is the only part a listener hears carrying the plural.',
          say: 'les parents',
        },
      },
    ],
  },

  /* ── Act 3: where gender stops mattering ──────────────────────────────── */

  {
    type: 'cardDeck',
    id: 's08-plural',
    title: 'When Les Takes Over',
    frSub: 'Le pluriel efface le genre',
    hint: 'Swipe through the three cards.',
    render: 'deck',
    layer: 'core',
    size: 'lg',
    terms: ['plural'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a1-04-plural' },
    say: 'One form, and it is the only place in the language where the gender you worked to store is simply not consulted.',
    cards: [
      {
        label: 'Masculine plural',
        head: 'les',
        fr: 'les devoirs',
        sub: 'the homework',
        body: 'Masculine, and it takes les. Nothing about the article records that, and nothing later will ask you to.',
      },
      {
        label: 'Feminine plural',
        head: 'les again',
        fr: 'les toilettes',
        sub: 'the toilet',
        body: 'Feminine, and it takes exactly the same word. Put those two cards side by side and there is no way to tell which is which, which is the point of this mission.',
      },
      {
        label: 'The one you hear',
        head: 'Where the plural lives',
        fr: 'les amis',
        sub: 'the friends',
        body: 'The S on the end of a French noun is usually silent, so les is doing all the work out loud. Drop it and a listener hears one friend. Nothing else in the phrase corrects that.',
      },
    ],
  },

  {
    type: 'vocabThemes',
    id: 's09-plural-deck',
    title: 'Plurals, Both Genders',
    frSub: 'Masculin et féminin',
    layer: 'core',
    terms: ['plural', 'storeIt'],
    say: 'Two decks. The line under each word is the gender it is hiding, and les is identical on both sides.',
    themes: [
      {
        title: 'Masculine, and it says les',
        cards: [
          { fr: 'les parents', sub: 'un parent', en: 'the parents' },
          { fr: 'les légumes', sub: 'un légume', en: 'the vegetables' },
          { fr: 'les cheveux', sub: 'un cheveu', en: 'the hair' },
          { fr: 'les devoirs', sub: 'un devoir', en: 'the homework' },
        ],
      },
      {
        title: 'Feminine, and it says les',
        cards: [
          { fr: 'les toilettes', sub: 'une toilette', en: 'the toilet' },
          { fr: 'les vacances', sub: 'une vacance', en: 'the holidays' },
          { fr: 'les fleurs', sub: 'une fleur', en: 'the flowers' },
          { fr: 'les cartes', sub: 'une carte', en: 'the cards' },
        ],
      },
    ],
  },

  {
    type: 'listening',
    id: 's10-listen',
    title: 'Hearing The Plural',
    frSub: 'Écoutez le pluriel',
    layer: 'core',
    questionsInModal: true,
    terms: ['plural'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a1-04-plural' },
    say: 'Nothing on screen to work it out from. Listen for what happens at the join between the two words.',
    lines: [
      { fr: 'les livres', en: 'the books' },
      { fr: 'les amis', en: 'the friends' },
      { fr: 'les parents', en: 'the parents' },
      { fr: 'les enfants', en: 'the children' },
    ],
    questions: [
      {
        q: 'In « les livres », how many separate sounds do you hear before the noun?',
        opts: ['The two words run together', 'The two words stay apart', 'The article disappears', 'The noun starts with a Z'],
        correct: 1,
        why: 'Livres starts on a consonant, so les ends and livres begins. Two words, two starts, nothing joining them.',
      },
      {
        q: 'In « les amis », what do you hear between the two words?',
        opts: ['nothing at all', 'a Z sound', 'an S sound', 'a short pause'],
        correct: 1,
        why: 'Amis starts on a vowel, so the silent S of les wakes up as a Z and is said with the noun rather than with the article.',
      },
      {
        q: 'You hear a Z at the join. What does that tell you about the noun?',
        opts: ['It is feminine', 'It is masculine', 'It starts on a vowel sound', 'It is singular'],
        correct: 2,
        why: 'Only a vowel sound pulls that Z out. It says nothing about gender, because les never did.',
      },
    ],
  },

  /* ── Act 4: the vowel sound, and the letter that lies ─────────────────── */

  {
    type: 'cardDeck',
    id: 's11-vowel',
    title: 'When Le And La Vanish',
    frSub: 'Devant une voyelle',
    hint: 'Swipe through the three cards.',
    render: 'deck',
    layer: 'core',
    size: 'lg',
    terms: ['vowelSound', 'storeIt'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a1-04-vowel' },
    say: 'Two forms collapse into one, and the thing they were carrying goes with them.',
    cards: [
      {
        label: 'Both become one',
        head: 'le and la, gone',
        fr: 'l\'appartement · l\'école',
        sub: 'one masculine, one feminine',
        body: 'The flat is masculine and the school is feminine, and in front of a vowel sound both articles shorten to the same two letters. The words are now indistinguishable and the gender is still there, unrecorded.',
      },
      {
        label: 'Sound, not letter',
        head: 'What counts as a vowel',
        fr: 'l\'heure',
        sub: 'the hour',
        body: 'This is about the SOUND the noun starts on, not the letter it is spelled with. Heure begins with an h on the page and with a vowel in the mouth, so it shortens. The next mission is where that bites.',
      },
      {
        label: 'The habit',
        head: 'Convert it as it arrives',
        fr: 'l\'huile',
        sub: 'so which is it?',
        body: 'a1.03 asked you to switch a new l apostrophe noun to un or une in your head before storing it. This is where that pays: oil is feminine, you will need la for it eventually, and nothing on this card says so.',
      },
    ],
  },

  {
    type: 'vocabThemes',
    id: 's12-h',
    title: 'The Letter H, Two Ways',
    frSub: 'Deux sortes de h',
    layer: 'core',
    terms: ['hSplit', 'vowelSound'],
    sheetId: 'sheet.a1.04.h',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a1-04-h' },
    say: 'Same letter, two behaviours, and no rule joining them. These are two lists to recognise, not a pattern to work out.',
    themes: [
      {
        title: 'Behaves like a vowel',
        cards: [
          { fr: 'l\'hôtel', sub: 'un hôtel', en: 'the hotel' },
          { fr: 'l\'heure', sub: 'une heure', en: 'the hour' },
          { fr: 'l\'histoire', sub: 'une histoire', en: 'history, the story' },
          { fr: 'l\'huile', sub: 'une huile', en: 'the oil' },
          { fr: 'l\'horloge', sub: 'une horloge', en: 'the clock' },
          { fr: 'l\'homme', sub: 'un homme', en: 'the man' },
        ],
      },
      {
        title: 'Behaves like a consonant',
        cards: [
          { fr: 'le hibou', sub: 'un hibou', en: 'the owl' },
          { fr: 'le hamster', sub: 'un hamster', en: 'the hamster' },
          { fr: 'le hockey', sub: 'un hockey', en: 'hockey' },
          { fr: 'le homard', sub: 'un homard', en: 'the lobster' },
          { fr: 'la hanche', sub: 'une hanche', en: 'the hip' },
          { fr: 'les haricots verts', sub: 'des haricots', en: 'the green beans' },
        ],
      },
    ],
  },

  {
    type: 'flashcards',
    id: 's13-hflash',
    title: 'Which H Is It?',
    frSub: 'Quel h ?',
    render: 'deck',
    layer: 'core',
    terms: ['hSplit'],
    say: 'The bare noun on the front. Say the whole thing, article included, before you flip it.',
    cards: [
      { front: 'hotel', back: 'l\'hôtel', say: 'l\'hôtel' },
      { front: 'owl', back: 'le hibou', say: 'le hibou' },
      { front: 'hour, time', back: 'l\'heure', say: 'l\'heure' },
      { front: 'hamster', back: 'le hamster', say: 'le hamster' },
      { front: 'history, story', back: 'l\'histoire', say: 'l\'histoire' },
      { front: 'hockey', back: 'le hockey', say: 'le hockey' },
      { front: 'oil', back: 'l\'huile', say: 'l\'huile' },
      { front: 'lobster', back: 'le homard', say: 'le homard' },
      { front: 'clock', back: 'l\'horloge', say: 'l\'horloge' },
      { front: 'hip', back: 'la hanche', say: 'la hanche' },
      { front: 'man', back: 'l\'homme', say: 'l\'homme' },
      { front: 'green beans', back: 'les haricots verts', say: 'les haricots verts' },
    ],
  },

  /* ── Act 5: banked, and used ──────────────────────────────────────────── */

  {
    type: 'commonErrors',
    id: 's14-traps',
    title: 'Three Traps',
    frSub: 'Trois pièges',
    // swipe + lg is the fix for the defect this lesson was the named example
    // of. Without swipe it drew a scrolling list rather than one trap per
    // screen, and on a1.01 the same shape hit a break that fell out of the
    // switch and rendered a blank mission.
    swipe: true,
    size: 'lg',
    layer: 'core',
    terms: ['zero', 'vowelSound'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a1-04-traps' },
    say: 'Three, and the first one is the one you will make today.',
    errors: [
      {
        wrong: '« J\'aime café »',
        right: '« J\'aime le café »',
        why: `${REFRAME} English lets a general noun stand bare and French does not, so this is not a missing flourish, it is a missing part of the sentence.`,
      },
      {
        wrong: '« le eau »',
        right: '« l\'eau »',
        why: 'Two vowel sounds cannot sit next to each other here, so the e of le drops out and the two words join. This is not optional and there is no version of French that says le eau.',
      },
      {
        wrong: '« les ami »',
        right: '« les amis »',
        why: 'The S of the noun is silent, so les is carrying the plural alone. Say it in front of a vowel and the S of LES comes back as a Z, joined onto the noun.',
      },
    ],
  },

  {
    type: 'flashcards',
    id: 's15-flash',
    title: 'Flip And Recall',
    frSub: 'Retournez la carte',
    render: 'deck',
    layer: 'core',
    say: 'English on the front, and it gives you no article at all. Supply the French one before you flip.',
    cards: [
      { front: 'the cheese', back: 'le fromage', say: 'le fromage' },
      { front: 'the sun', back: 'le soleil', say: 'le soleil' },
      { front: 'the book', back: 'le livre', say: 'le livre' },
      { front: 'the bread', back: 'le pain', say: 'le pain' },
      { front: 'the house', back: 'la maison', say: 'la maison' },
      { front: 'the moon', back: 'la lune', say: 'la lune' },
      { front: 'the table', back: 'la table', say: 'la table' },
      { front: 'the car', back: 'la voiture', say: 'la voiture' },
      { front: 'the water', back: 'l\'eau', say: 'l\'eau' },
      { front: 'the school', back: 'l\'école', say: 'l\'école' },
      { front: 'the flat', back: 'l\'appartement', say: 'l\'appartement' },
      { front: 'the child', back: 'l\'enfant', say: 'l\'enfant' },
      { front: 'the parents', back: 'les parents', say: 'les parents' },
      { front: 'the vegetables', back: 'les légumes', say: 'les légumes' },
      { front: 'the homework', back: 'les devoirs', say: 'les devoirs' },
      { front: 'the friends', back: 'les amis', say: 'les amis' },
    ],
  },

  {
    type: 'dictation',
    id: 's16-dictation',
    title: 'Write What You Hear',
    frSub: 'La dictée',
    layer: 'core',
    terms: ['zero', 'plural'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], maxPlays: 4, recordingId: 'rec-a1-04-dictee' },
    say: 'Six sentences, built from word tiles, and some of the tiles do not belong. The article is a tile like any other, so you have to place it.',
    itemIds: DICTATION,
  },

  {
    type: 'practice',
    id: 's17-speak',
    title: 'Say The Whole Thing',
    frSub: 'À voix haute',
    layer: 'core',
    skill: 'speak',
    say: 'Sixteen nouns, and none of them is a word on its own. Say the article and the noun as one piece.',
    itemIds: SPEAK_IDS,
  },

  {
    type: 'useCases',
    id: 's18-cases',
    title: 'Six Moments This Week',
    frSub: 'Dans la vraie vie',
    layer: 'core',
    terms: ['zero'],
    say: 'Six real moments, and in five of them English would have given you nothing to say.',
    cases: [
      { situation: 'Someone asks what you drink', fr: 'J\'aime le thé.', en: 'I like tea.' },
      { situation: 'Saying what you are learning', fr: 'J\'apprends le français.', en: 'I am learning French.' },
      { situation: 'Turning down a whole food group', fr: 'Je n\'aime pas les champignons.', en: 'I do not like mushrooms.' },
      { situation: 'Asking where something is', fr: 'Où sont les toilettes ?', en: 'Where is the toilet?' },
      { situation: 'Ordering the thing on the counter', fr: 'Le pain, s\'il vous plaît.', en: 'The bread, please.' },
      { situation: 'Asking for the bill', fr: 'L\'addition, s\'il vous plaît.', en: 'The bill, please.' },
    ],
  },

  {
    type: 'scenario',
    id: 's19-scenario',
    title: 'Your Turn At The Counter',
    frSub: 'Au café',
    layer: 'core',
    terms: ['zero', 'pick'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a1-04-scenario' },
    say: 'A café in the middle of the afternoon. Every line you say has an article in it, and one of them is the one you would drop.',
    setting: 'A café counter in Bordeaux, mid-afternoon.',
    turns: [
      { ai: 'Bonjour ! Qu\'est-ce que je vous sers ?', en: 'Hello! What can I get you?', user: 'Bonjour. Le café au lait, s\'il vous plaît.' },
      { ai: 'Et avec ça ? Nous avons des tartes.', en: 'Anything with that? We have tarts.', user: 'Non merci. Je n\'aime pas les tartes.' },
      { ai: 'Très bien. Vous êtes en vacances ?', en: 'Very good. Are you on holiday?', user: 'Non, j\'apprends le français ici.' },
      { ai: 'Ah, bravo ! C\'est difficile, le français.', en: 'Ah, well done! French is hard.', user: 'Oui, mais j\'aime la langue.' },
      { ai: 'Voilà votre café. L\'addition est sur la table.', en: 'Here is your coffee. The bill is on the table.', user: 'Merci beaucoup.' },
    ],
  },

  {
    type: 'reading',
    id: 's20-reading',
    title: 'The Flat Above The Bakery',
    frSub: 'Au-dessus de la boulangerie',
    layer: 'core',
    terms: ['zero', 'storeIt'],
    // REQUIRED for the glossary to exist at all. MissionSection routes reading
    // to ReadingMission, and so to PassagePage which draws the underlines, only
    // when this flag is set WITH questions. Five entries shipped without it on
    // a1.01 and rendered nowhere.
    questionsInModal: true,
    say: 'Read it once for the shape. Tap any word you do not know, and notice how few nouns arrive on their own.',
    // Paul's A1 rule: anything not inside « » is English. Stage directions are
    // context, and context is instruction.
    //
    // ONE BLOCK, NO LINE BREAKS. PassagePage splits with
    // text.split(/(?<=[.!?»])\s+/) and renders the pieces inline in a single
    // <TX>, so an authored `\n` is consumed as ordinary whitespace. a1.02 found
    // this on a device; the English narration between the quotes does the work
    // the breaks were doing.
    text:
      'Marc has just moved into a flat above a bakery in Toulouse, and his neighbour Sylvie has come up with two cups. ' +
      'She wants to know how he is settling in. ' +
      '« Alors, l\'appartement te plaît ? » ' +
      'He says it is small, and then he says the part he actually likes. ' +
      '« Oui, beaucoup. La cuisine est petite, mais j\'aime la lumière. » ' +
      'Sylvie points at the floor and grins, because everyone in the building asks this eventually. ' +
      '« Et le pain ? Tu entends le boulanger à quatre heures ? » ' +
      'He admits that he does, every single morning. ' +
      '« Je l\'entends. Mais j\'aime le pain, alors ça va. » ' +
      'She asks whether he has met anyone on the stairs yet. ' +
      '« Tu connais les voisins ? » ' +
      'He has met the two from the third floor and nobody else. ' +
      '« Les voisins du troisième, oui. Ils sont gentils. » ' +
      'Sylvie stands up to leave and gives him the one piece of advice that matters in this building. ' +
      '« Une chose. L\'été, ouvre les fenêtres tôt. Après huit heures, il fait trop chaud. »',
    // Every entry is matched by gloss.logic.ts, which folds punctuation and case
    // on BOTH sides and allows a phrase of up to four words.
    //
    // `été` is authored as the BARE noun on purpose, against a passage that
    // says l'été. This is the one lesson where that is the entire teaching: the
    // learner taps the noun and the entry tells them the article they can see
    // is the part English would never have said.
    glossary: [
      { word: 'l\'appartement', en: 'the flat', note: 'Masculine, and the card refuses to say so. Store it as un appartement, the way a1.03 asked.' },
      { word: 'le boulanger', en: 'the baker', note: 'The baker is masculine and the shop downstairs is la boulangerie, which is feminine. Nobody can tell you why.' },
      { word: 'les voisins', en: 'the neighbours', note: 'Plural, so les, and the gender never entered into it.' },
      { word: 'été', en: 'summer', note: 'The passage says l\'été. The noun on its own is été, and the article in front of it is the word an English speaker would not have said at all.' },
      { word: 'les fenêtres', en: 'the windows', note: 'Feminine and plural. Les does not care which, which is the whole of that mission in two words.' },
    ],
    questions: [
      { q: 'What does Marc like about the flat, and what does he not?', a: 'He likes the light. The kitchen is small.' },
      { q: 'In « j\'aime le pain », why is there a word there that English would not have?', a: 'Because it means bread in general, and French keeps the article where English drops it.' },
      { q: 'The passage says l\'été. What is the noun on its own, and what is its gender?', a: 'The noun is été, and it is masculine. The article hides that.' },
    ],
  },

  /* ── Act 6: prove it ──────────────────────────────────────────────────── */

  {
    type: 'reviewDeck',
    id: 's21-review',
    title: 'The Whole Thing, One Deck',
    frSub: 'Révision',
    render: 'deck',
    layer: 'core',
    terms: ['pick', 'zero', 'hSplit'],
    say: 'Rate each card as again, hard or easy. The ones you mark again come back.',
    cards: [
      { front: 'I like coffee.', back: 'J\'aime le café. English gives you nothing; French needs le.', say: 'J\'aime le café.' },
      { front: 'The first question to ask', back: 'Is it plural? If yes, les, and stop.', say: 'les parents' },
      { front: 'The second question', back: 'Does it start on a vowel sound? If yes, l apostrophe.', say: 'l\'école' },
      { front: 'The third question', back: 'Only now, le or la, and only now do you need the gender.', say: 'le livre' },
      { front: 'Which form ignores gender?', back: 'Two of them. les always, and l apostrophe in the singular.', say: 'les amis' },
      { front: 'the hour', back: 'l\'heure. The h behaves like a vowel.', say: 'l\'heure' },
      { front: 'the owl', back: 'le hibou. The same letter, behaving like a consonant.', say: 'le hibou' },
      { front: 'the green beans', back: 'les haricots verts. Plural, so les settles it either way.', say: 'les haricots verts' },
      { front: 'Cats love sleeping in the sun.', back: 'Les chats adorent dormir au soleil.', say: 'Les chats adorent dormir au soleil.' },
      { front: 'What does the S in les do before a vowel?', back: 'It comes back as a Z and joins onto the noun.', say: 'les amis' },
      { front: 'the sun and the moon', back: 'le soleil et la lune. Arbitrary, opposite, and worth storing together.', say: 'le soleil et la lune' },
      { front: 'She is a nurse.', back: 'Elle est infirmière. Here French drops what English keeps.', say: 'Elle est infirmière.' },
    ],
  },

  {
    type: 'progressCheck',
    id: 's22-progress',
    title: 'Where You Stand',
    frSub: 'Votre progression',
    say: 'One screen before the exam, so you know what you are walking into.',
    // The prose deliberately carries no figures. Every number this card states
    // is a fact about the array above it, derived below rather than typed, and
    // a display string is validated against nothing.
    body: 'You have put the article where English gave you nothing, worked the three questions in order, and found the one letter that behaves two ways. What is left is the part that tells you whether it stuck. Each round is tied to one of the mistakes this lesson exists to stop, and failing a round gets you its drill before the next one starts.',
    stats: [],
  },

  {
    type: 'quiz',
    id: 's23-quiz',
    title: 'The Exam',
    frSub: 'L\'examen',
    layer: 'core',
    passMark: 70,
    roundFailThreshold: 60,
    // Weighted hard towards production. A four-option question offering le, la,
    // l' and les can be answered by elimination three times out of four, and it
    // never once asks the learner to supply a word from nothing, which is the
    // exact moment they currently fail. Five of these twenty-two are mcq.
    //
    // Every miss here is logged as a `genre` weakness on the home screen
    // (curriculum.ts maps a1.04.l1 to it), so a round that fails for a bad
    // reason teaches the classifier something false about the learner.
    say: 'Four rounds. Most of these ask you to write the answer rather than pick it, because picking was never the hard part.',
    rounds: [
      {
        id: 'r1-the-missing-word',
        label: 'The missing word',
        targets: ['err-bare-noun'],
        say: 'The half of this lesson that is not about which article. It is about whether there is one.',
        questions: [
          // On `accept` lists: fold() strips accents, case, punctuation,
          // apostrophes and whitespace before comparing, so an entry differing
          // only by those is redundant at runtime. What is NOT redundant is
          // that `answer` itself appears in the list: the card shows `answer`
          // after a wrong attempt, and showing a learner a form the grader
          // would have rejected is the worst thing this screen can do. The
          // shorter fragment is listed alongside it because a learner told to
          // "fix this" reasonably types only the part that was wrong.
          {
            q: 'Write in French: I like coffee.',
            format: 'typeIn',
            accept: ['J\'aime le café.', 'j\'aime le café', 'jaime le cafe'],
            answer: 'J\'aime le café.',
            why: `${REFRAME} Coffee in general still takes le, and without it this is not a sentence.`,
            ref: 's03-nothing',
          },
          {
            q: 'Fix this: « Nous aimons français. »',
            format: 'errorSpot',
            accept: ['Nous aimons le français.', 'nous aimons le français', 'le français'],
            answer: 'Nous aimons le français.',
            why: 'A language is a general idea, so French keeps the article. English drops it, which is why the gap is invisible.',
            ref: 's04-generic',
          },
          {
            q: 'Cats love sleeping in the sun. What does the French sentence start with?',
            format: 'mcq',
            opts: ['Les chats', 'Chats', 'Des chats', 'Un chat'],
            correct: 0,
            why: 'Cats as a species is the general case. French marks that by keeping a word where English removes one.',
            ref: 's04-generic',
          },
          {
            q: 'Write in French: I am learning French.',
            format: 'typeIn',
            accept: ['J\'apprends le français.', 'j\'apprends le français', 'japprends le francais'],
            answer: 'J\'apprends le français.',
            why: 'School subjects, languages, sports and instruments all take the article, and English gives none of them one.',
            ref: 's18-cases',
          },
          {
            q: 'Fix this: « Elle aime musique. »',
            format: 'errorSpot',
            accept: ['Elle aime la musique.', 'elle aime la musique', 'la musique'],
            answer: 'Elle aime la musique.',
            why: 'Music is feminine, so la, but the reason a word is needed at all has nothing to do with gender.',
            ref: 's04-generic',
          },
          {
            q: 'English says "Sport makes children stronger". How many articles does the French have?',
            format: 'mcq',
            opts: ['None, like the English', 'One', 'Two', 'Three'],
            correct: 2,
            why: 'Le sport and les enfants. Both nouns are general, and English happens to mark neither of them.',
            ref: 's04-generic',
          },
        ],
      },
      {
        id: 'r2-le-or-la',
        label: 'Le or la',
        targets: ['err-wrong-gender-article'],
        say: 'The third question, and the only one of the three that needs the gender.',
        questions: [
          {
            q: 'Maison is feminine. Write "the house".',
            format: 'typeIn',
            accept: ['la maison'],
            answer: 'la maison',
            why: 'Feminine, singular, and it starts on a consonant sound, so you reach the third question and answer it with la.',
            ref: 's05-four',
          },
          {
            q: 'You need the gender of a noun in order to choose:',
            format: 'mcq',
            opts: ['always', 'only for le or la', 'only for les', 'never'],
            correct: 1,
            why: 'Les and l apostrophe both settle it without asking. Only the third branch needs the gender.',
            ref: 's06-order',
          },
          {
            q: 'Livre is masculine. Write "the book".',
            format: 'typeIn',
            accept: ['le livre'],
            answer: 'le livre',
            why: 'Masculine, singular, consonant sound. The one branch of the three where what a1.03 taught you is doing the work.',
            ref: 's07-grid',
          },
          {
            q: 'Fix this: « le maison »',
            format: 'errorSpot',
            accept: ['la maison'],
            answer: 'la maison',
            why: 'Nothing in the word maison says it is feminine. That is why the article is stored with it.',
            ref: 's05-four',
          },
          {
            q: 'Lune is feminine and soleil is masculine. Write "the sun and the moon".',
            format: 'typeIn',
            accept: ['le soleil et la lune'],
            answer: 'le soleil et la lune',
            why: 'Two everyday things with opposite genders and no reason behind either. This pair is worth storing as one card.',
            ref: 's05-four',
          },
        ],
      },
      {
        id: 'r3-when-gender-stops',
        label: 'When gender stops counting',
        targets: ['err-plural-vowel'],
        say: 'Two branches, and neither of them asks you a thing about the noun\'s gender.',
        questions: [
          {
            q: 'Listen. Which one is it?',
            format: 'listenChoose',
            audio: { mode: 'tts', lang: 'fr-FR', clip: 'les amis' },
            opts: ['les amis', 'les livres', 'l\'ami', 'les parents'],
            correct: 0,
            why: 'The Z at the join gives it away. It appears only when the noun starts on a vowel sound.',
            ref: 's10-listen',
          },
          {
            q: 'Toilettes is feminine and plural. Write "the toilet".',
            format: 'typeIn',
            accept: ['les toilettes'],
            answer: 'les toilettes',
            why: 'Plural, so the first question already answered it and the gender was never consulted.',
            ref: 's08-plural',
          },
          {
            q: 'Listen. Which one is it?',
            format: 'listenChoose',
            audio: { mode: 'tts', lang: 'fr-FR', clip: 'les livres' },
            opts: ['les amis', 'les livres', 'le livre', 'l\'heure'],
            correct: 1,
            why: 'Livres starts on a consonant, so the two words stay apart and there is no Z. Le livre would be one word shorter.',
            ref: 's10-listen',
          },
          {
            q: 'École is feminine. Which is right?',
            format: 'mcq',
            opts: ['la école', 'le école', 'les école', 'l\'école'],
            correct: 3,
            why: 'A vowel sound follows, so la shortens and the gender goes invisible before you needed it.',
            ref: 's07-grid',
          },
          {
            q: 'Eau is feminine. Write "the water".',
            format: 'typeIn',
            accept: ['l\'eau', 'leau'],
            answer: 'l\'eau',
            why: 'La cannot sit in front of a vowel sound, so it shortens. There is no French that says la eau.',
            ref: 's11-vowel',
          },
          {
            q: 'Listen. Which one is it?',
            format: 'listenChoose',
            audio: { mode: 'tts', lang: 'fr-FR', clip: 'l\'heure' },
            opts: ['le heure', 'les heures', 'l\'heure', 'la hanche'],
            correct: 2,
            why: 'One word, not two. Heure starts on a vowel sound despite the h, so the article shortens and joins onto it.',
            ref: 's12-h',
          },
        ],
      },
      {
        id: 'r4-the-two-h',
        label: 'The two kinds of h',
        targets: ['err-h-guess'],
        say: 'A closed list, not a rule. The article is the only place the difference is ever visible.',
        questions: [
          {
            q: 'Write "the owl". Hibou is masculine.',
            format: 'typeIn',
            accept: ['le hibou'],
            answer: 'le hibou',
            why: 'This h behaves like a consonant, so le stays whole. Nothing on the page distinguishes it from the other kind.',
            ref: 's12-h',
          },
          {
            q: 'Both hôtel and hibou start with h. Why does only one take l apostrophe?',
            format: 'mcq',
            opts: ['One is masculine', 'One is plural', 'One is longer', 'There is no rule; the two are separate lists'],
            correct: 3,
            why: 'The split is a leftover of where the words came from. It is two lists, and gender is not in it.',
            ref: 's12-h',
          },
          {
            q: 'Fix this: « le heure »',
            format: 'errorSpot',
            accept: ['l\'heure', 'lheure'],
            answer: 'l\'heure',
            why: 'Heure behaves like a vowel, so the article shortens. Store the pair together and you never have to work it out.',
            ref: 's13-hflash',
          },
          {
            q: 'Write "the green beans".',
            format: 'typeIn',
            accept: ['les haricots verts'],
            answer: 'les haricots verts',
            why: 'It is plural, so the first question settles it and the h never gets a chance to matter.',
            ref: 's12-h',
          },
          {
            q: 'Say it out loud: I like coffee.',
            format: 'speak',
            target: 'J\'aime le café.',
            ipa: '/ʒɛm lə ka.fe/',
            why: `${REFRAME} If you said three words, the missing one is this lesson.`,
            ref: 's01-scene',
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
    say: 'Six things, and one that a later lesson finishes for you.',
    body: 'You can pick the right article for any noun you know, in three questions, and two of those three never ask you about gender. More usefully, you can hear the place where English gave you nothing and French wants a word, which is the error that marks a beginner more reliably than any accent does.',
    points: [
      `${REFRAME} Say it to yourself before a general noun and you will stop losing the sentence.`,
      'Plural takes les, whatever the gender. A vowel sound takes l apostrophe, whatever the gender.',
      'Only le and la need the gender, which makes it one branch of three rather than the whole decision.',
      'Every French h is silent, and only the article ever tells you which kind you are holding.',
      'Store the noun with its article, the way a1.03 asked. This lesson is where that habit gets paid.',
      'The Z you heard in les amis is a system of its own, and the sons track has a whole lesson on it.',
      'du, au and aux are these same articles wearing a disguise. a1.29 takes them apart.',
    ],
  },
];

/* ─── The progress card counts the journey rather than restating it ────────
 *
 * Four figures, every one a fact about the array directly above. Typed by hand
 * they would have been left confidently wrong by the first mission added, with
 * the whole suite still green: a display string is validated against nothing.
 *
 * It throws rather than degrades. A progress card silently reporting "0 of 0"
 * is worse than a build that stops.                                          */
{
  const ix = SECTIONS.findIndex((s) => (s as { id?: string }).id === 's22-progress');
  const card = SECTIONS[ix];
  const quiz = SECTIONS.find((s) => s.type === 'quiz');
  if (!card || card.type !== 'progressCheck' || !quiz || quiz.type !== 'quiz') {
    throw new Error('a1.04.l1: the progress card or the quiz is missing, so the card cannot count what is not there');
  }
  card.stats = [
    { k: 'Nouns met', v: String(ITEM_IDS.length) },
    // `ix` is the count of sections BEFORE this one, which is exactly how many
    // missions the learner has finished when they reach it.
    { k: 'Missions done', v: `${ix} of ${SECTIONS.length}` },
    { k: 'Exam rounds ahead', v: String(quiz.rounds?.length ?? 0) },
    { k: 'Pass mark', v: `${quiz.passMark}%` },
  ];
}

/* ─── Acts ─────────────────────────────────────────────────────────────────
 *
 * `estScreens` is what the mission actually costs, not a guess rounded to a
 * nice number, because it is divided by the rest points to check that no
 * stretch runs past the checkpoint-spacing limit of 22. A flattering estimate
 * buys a lesson that passes the validator and exhausts the learner.
 *
 * Act 1 is the use and act 6 tests it. Acts 2 to 4 are the machinery, and they
 * are the middle of the lesson rather than the start of it on purpose: a
 * learner who meets the grid first learns a reference card, and a learner who
 * meets the failure first has a reason to want the grid.                     */

const ACTS: LessonAct[] = [
  {
    id: 'act1',
    title: 'The word English leaves out',
    sections: ['s01-scene', 's02-goals', 's03-nothing', 's04-generic'],
    milestone: 'You have seen the mistake you cannot see from inside English.',
    estScreens: 17,
    restPoints: ['s01-scene/after-break'],
  },
  {
    id: 'act2',
    title: 'Which one to reach for',
    sections: ['s05-four', 's06-order', 's07-grid'],
    milestone: 'Four forms, and three questions that pick between them.',
    estScreens: 6,
  },
  {
    id: 'act3',
    title: 'Where gender stops counting',
    sections: ['s08-plural', 's09-plural-deck', 's10-listen'],
    milestone: 'Les settles the plural without ever asking about gender.',
    estScreens: 8,
  },
  {
    id: 'act4',
    title: 'The sound, and the letter that lies',
    sections: ['s11-vowel', 's12-h', 's13-hflash'],
    milestone: 'You can tell l heure from le hibou, which nothing else in the language will tell you.',
    estScreens: 16,
  },
  {
    id: 'act5',
    title: 'Banked, and used',
    sections: ['s14-traps', 's15-flash', 's16-dictation', 's17-speak', 's18-cases', 's19-scenario', 's20-reading'],
    milestone: 'You have written them, said them, ordered with them and read them.',
    estScreens: 47,
    restPoints: ['s15-flash/halfway', 's16-dictation/halfway', 's17-speak/halfway'],
  },
  {
    id: 'act6',
    title: 'Prove it',
    sections: ['s21-review', 's22-progress', 's23-quiz', 's24-roundup'],
    milestone: 'Lesson complete.',
    estScreens: 38,
    restPoints: ['s21-review/halfway', 's23-quiz/after-r2'],
  },
];

/* ─── Deck tranches ────────────────────────────────────────────────────────
 *
 * One slice per act, index-aligned. An item is released the act it is TAUGHT.
 *
 * Act 1 releases the sixteen generic-use sentences, which is the largest
 * tranche and is deliberately first: they are the lesson's actual claim, and a
 * learner who abandons after one act should still have them in review.
 *
 * Act 6 releases nothing because it tests.                                   */

const DECK_TRANCHE: string[][] = [
  [...GENERIC],
  [...LE, ...LA],
  [...LES],
  [...LAP, ...H_MUET, ...H_ASPIRE],
  ['fr.a1.animaux.094', 'fr.a1.dictee.002', 'fr.a1.dictee.003'],
  [],
];

/* ─── Error triggers and their drills ──────────────────────────────────────
 *
 * Each round names exactly one target, so drillForRound (which fires the drill
 * of the FIRST target and stops) reaches every drill authored here. Nothing is
 * dead weight and nothing is unreachable.                                    */

const ERROR_TRIGGERS: ErrorTrigger[] = [
  {
    id: 'err-bare-noun',
    description: 'Leaves a general noun bare, the way English does: J\'aime café, Les chats becomes Chats, Le français becomes Français.',
    detectOn: ['s01-scene', 's03-nothing', 's04-generic', 's23-quiz/r1-the-missing-word'],
    drill: 'drill-supply-the-word',
    retest: 'retest-supply-the-word',
  },
  {
    id: 'err-wrong-gender-article',
    description: 'Reaches the third question and answers it with the wrong gender: le maison, la livre.',
    detectOn: ['s05-four', 's07-grid', 's23-quiz/r2-le-or-la'],
    drill: 'drill-le-or-la',
    retest: 'retest-le-or-la',
  },
  {
    id: 'err-plural-vowel',
    description: 'Keeps le or la where the noun is plural or starts on a vowel sound: le eau, la école, le parents.',
    detectOn: ['s06-order', 's08-plural', 's11-vowel', 's23-quiz/r3-when-gender-stops'],
    drill: 'drill-three-questions',
    retest: 'retest-three-questions',
  },
  {
    id: 'err-h-guess',
    description: 'Guesses at an h word rather than recognising which list it is on: l\'hibou, le heure.',
    detectOn: ['s12-h', 's13-hflash', 's23-quiz/r4-the-two-h'],
    drill: 'drill-h-sort',
    retest: 'retest-h-sort',
  },
];

const DRILLS: LessonDrill[] = [
  {
    id: 'drill-supply-the-word',
    title: 'The word that is not there',
    format: 'flashcard',
    coach: 'Read the English. It has nothing in front of the noun. Say the French, which does.',
    pairs: [
      ['I like coffee.', 'J\'aime le café.'],
      ['We like French.', 'Nous aimons le français.'],
      ['They like music.', 'Ils aiment la musique.'],
      ['Cats love sleeping in the sun.', 'Les chats adorent dormir au soleil.'],
      ['Birds fly south in winter.', 'Les oiseaux volent vers le sud en hiver.'],
      ['I prefer organic vegetables.', 'Je préfère les légumes bio.'],
    ],
  },
  {
    id: 'retest-supply-the-word',
    title: 'One more time',
    format: 'mcq',
    q: 'English says "I like tea". The French is:',
    opts: ['J\'aime thé', 'J\'aime le thé', 'J\'aime un thé'],
    correct: 1,
    why: 'Tea in general takes le. J\'aime un thé would mean one particular cup, which is not what the English said.',
  },
  {
    id: 'drill-le-or-la',
    title: 'Which one is it?',
    format: 'sort',
    buckets: ['le', 'la'],
    // Item ids, not display strings: a drill scores against the corpus, so it
    // plays the same audio and reads the same spelling as every other card
    // teaching these. Display strings here validate as broken ids.
    items: [...LE, ...LA],
    coach: 'Nothing in the word tells you. This is the fact you stored in a1.03, being asked for.',
  },
  {
    id: 'retest-le-or-la',
    title: 'One more time',
    format: 'mcq',
    q: 'Table is feminine. You want "the table".',
    opts: ['le table', 'la table', 'l\'table'],
    correct: 1,
    why: 'Feminine, singular, starts on a consonant sound, so the third question applies and the answer is la.',
  },
  {
    id: 'drill-three-questions',
    title: 'Plural, vowel, or neither',
    format: 'sort',
    buckets: ['les', 'l\'', 'le or la'],
    items: [...LES, ...LAP, ...LE],
    coach: 'Ask them in order. Plural first, vowel sound second, and only then reach for the gender.',
  },
  {
    id: 'retest-three-questions',
    title: 'One more time',
    format: 'mcq',
    q: 'A noun is feminine, singular, and starts on a vowel sound. Which article?',
    opts: ['la', 'les', 'l\''],
    correct: 2,
    why: 'The second question fired before the third one could. A vowel sound takes l apostrophe whatever the gender is.',
  },
  {
    id: 'drill-h-sort',
    title: 'Two lists, one letter',
    format: 'sort',
    buckets: ['Takes l apostrophe', 'Keeps le or la'],
    items: [...H_MUET, ...H_ASPIRE],
    coach: 'There is nothing to work out here. Either you have stored it with its article or you have not.',
  },
  {
    id: 'retest-h-sort',
    title: 'One more time',
    format: 'mcq',
    q: 'Which of these keeps its article whole?',
    opts: ['heure', 'hibou', 'homme'],
    correct: 1,
    why: 'Le hibou. Heure and homme both behave like vowels and take l apostrophe, and only the article ever shows you the difference.',
  },
];

/* ─── Reference sheets ─────────────────────────────────────────────────────
 *
 * The material a learner wants AFTER the lesson, not during it. Layer 'deep'
 * exempts these from the core density caps, which is the point: a sheet is
 * allowed to be dense, and a table in a core section fails the validator by
 * design. The shipped a1.04 opened on that table, which is what moved it here. */

const SHEETS: ReferenceSheet[] = [
  {
    id: 'sheet.a1.04.grid',
    title: 'The four forms, on one screen',
    layer: 'deep',
    contains: ['All four articles', 'The three questions', 'What each branch ignores'],
    sections: [
      {
        type: 'table',
        id: 'sheet-grid-table',
        title: 'Gender, number, first sound',
        layer: 'deep',
        // No empty column header: validateSection rejects a blank string in
        // `cols`, and a corner cell with nothing in it reads as a rendering
        // failure rather than as a deliberate gap.
        cols: ['The noun', 'Consonant sound', 'Vowel sound'],
        rows: [
          ['Masculine singular', 'le', 'l\''],
          ['Feminine singular', 'la', 'l\''],
          ['Any plural', 'les', 'les'],
        ],
      },
      {
        type: 'teach',
        id: 'sheet-grid-note',
        title: 'How to read it',
        layer: 'deep',
        body: 'Read the table by column rather than by row and the lesson falls out of it. The right-hand column is one word twice, and the bottom row is one word twice, so five of the six cells are settled before gender is mentioned. Only the top two cells of the left-hand column need it, which is why the three questions are asked in the order they are: plural first, vowel sound second, gender last and only if the first two came back no. Most textbooks draw this as a two by two grid with gender along the top, which puts the one thing you cannot see on the page in charge of a decision that usually does not need it.',
      },
    ],
  },
  {
    id: 'sheet.a1.04.h',
    title: 'The h words, both lists',
    layer: 'deep',
    contains: ['The h that lets the article shorten', 'The h that does not', 'Why there is no rule'],
    sections: [
      {
        type: 'cheatSheet',
        id: 'sheet-h-lists',
        title: 'Both lists, side by side',
        layer: 'deep',
        rows: [
          { k: 'l\'hôtel', v: 'the hotel. Behaves like a vowel.', say: 'l\'hôtel' },
          { k: 'l\'heure', v: 'the hour. Behaves like a vowel.', say: 'l\'heure' },
          { k: 'l\'histoire', v: 'history. Behaves like a vowel.', say: 'l\'histoire' },
          { k: 'l\'huile', v: 'the oil. Behaves like a vowel.', say: 'l\'huile' },
          { k: 'l\'horloge', v: 'the clock. Behaves like a vowel.', say: 'l\'horloge' },
          { k: 'l\'homme', v: 'the man. Behaves like a vowel.', say: 'l\'homme' },
          { k: 'l\'hôpital', v: 'the hospital. Behaves like a vowel.', say: 'l\'hôpital' },
          { k: 'l\'habitude', v: 'the habit. Behaves like a vowel.', say: 'l\'habitude' },
          { k: 'le hibou', v: 'the owl. Behaves like a consonant.', say: 'le hibou' },
          { k: 'le hamster', v: 'the hamster. Behaves like a consonant.', say: 'le hamster' },
          { k: 'le hockey', v: 'hockey. Behaves like a consonant.', say: 'le hockey' },
          { k: 'le homard', v: 'the lobster. Behaves like a consonant.', say: 'le homard' },
          { k: 'la hanche', v: 'the hip. Behaves like a consonant.', say: 'la hanche' },
          { k: 'le hasard', v: 'chance. Behaves like a consonant.', say: 'le hasard' },
          { k: 'le héros', v: 'the hero. Behaves like a consonant.', say: 'le héros' },
          { k: 'les haricots verts', v: 'the green beans. Consonant, and plural anyway.', say: 'les haricots verts' },
        ],
      },
      {
        type: 'teach',
        id: 'sheet-h-note',
        title: 'Why there is no rule',
        layer: 'deep',
        body: 'Every h in French is silent, so nothing you can hear in the noun itself separates these two columns. The split is historical: one group came into French from Latin, where the h had already stopped being pronounced, and the other arrived later from Germanic and Frankish words where it still was. That h is gone now too, but the behaviour it left behind is not, and no feature of the modern spelling records it. So this is a list, and the reason it is a short and manageable list is that the second group is small. The practical consequence is the one this lesson keeps returning to: the article is the only place the difference is ever visible, so a noun stored on its own has thrown the fact away. Store le hibou, not hibou.',
      },
    ],
  },
];

const ARTICLES_LESSON_AUTHORED: Lesson = {
  id: 'a1.04.l1',
  unitId: 'a1.04',
  seq: 1,
  title: 'Les articles définis',
  level: 'a1',
  tag: 'A1 · LEÇON 04',
  // The four-way framing is the shipped intro's, which was the one line in it
  // worth keeping. The em dash is gone and the second sentence names the half
  // the old lesson mentioned once, in half a gloss, on one example card.
  intro:
    'French has four ways to say the, and which one you need depends on the noun\'s gender, its number and the sound it starts with. The harder half is that English lets you use none of them and French never does.',

  sections: SECTIONS,
  itemIds: ITEM_IDS,
  // The shipped lesson is v2, so this rebuild is v3. The counter moves forward
  // rather than restarting: the merge script prints "replacing vX with vY" and
  // a rebuild that renumbers itself reads as a rollback in the log.
  version: 3,

  grammarAssumed: [
    'Every noun carries a gender, and it is stored with the noun rather than derived from it',
    'The indefinite articles un and une, as the form gender is stored in',
  ],
  grammarIntroduced: [
    'The definite articles le, la, l apostrophe and les, and the order of the three questions that choose between them',
    'The definite article in front of a general noun, where English uses no article at all',
    'Nouns beginning with h splitting into two groups, distinguishable only by the article they take',
  ],

  features: ['narrated', 'roleplay', 'voiceflash'],

  overview: {
    // The shipped titleEn was "The Definite Articles: Le, La, L' and Les" at 41
    // characters, which the missions list truncates. This is 21.
    titleEn: 'The Definite Articles',
    subFr: 'Les articles définis',
    introFr: 'Le français a quatre façons de dire the, selon le genre, le nombre et le son du nom. Le plus dur, c\'est que l\'anglais peut n\'en mettre aucun et le français jamais.',
    minutes: 30,
    difficulty: 2,
    glyph: 'Le',
    screens: 132,
  },

  acts: ACTS,
  reframe: REFRAME,
  errorTriggers: ERROR_TRIGGERS,
  drills: DRILLS,
  sheets: SHEETS,
  deckTranche: DECK_TRANCHE,
  terms: ARTICLES_TERMS,

  /* ─── Audio ───────────────────────────────────────────────────────────────
   *
   * Briefs only. CLIP_MANIFEST is empty by design, so every card falls back to
   * device TTS until the studio delivers, and a recordingId that resolves to
   * nothing is the correct shipping state rather than a bug.
   *
   * Two instructions matter here and both are written into the briefs rather
   * than assumed.
   *
   * ONE TAKE for every contrast. This lesson's contrasts are one unstressed
   * syllable: le against la, les amis against les livres, le hibou against
   * l'hôtel. Across two takes those are not comparable and a learner told to
   * listen for a difference will hear the difference between the recordings.
   *
   * DO NOT OVER-ARTICULATE. In real speech le is a schwa that half disappears,
   * and a careful reading of it teaches a pronunciation the learner will never
   * hear again anywhere. The article being small and fast is part of why it is
   * dropped, so a brief that hides that makes the lesson easier and wronger.  */
  audio: {
    defaultLang: 'fr-FR',
    speeds: [1.0, 0.65],
    coachVoice: 'coach-en-warm',
    interfaceSounds: ['correct', 'incorrect', 'checkpoint'],
    ambienceDefault: 'off',
    recorded: [
      {
        id: 'rec-a1-04-bare',
        desc: 'The central contrast: « J\'aime café » then « J\'aime le café », in that order, one voice, one speed, ONE TAKE. The wrong version must be read at the same natural pace as the right one and not slowed or flagged, because the whole point is that it sounds almost fine. Do NOT over-articulate le; it is a schwa and it should half disappear, which is exactly why learners leave it out.',
        clipIds: ['J\'aime café.', 'J\'aime le café.'],
      },
      {
        id: 'rec-a1-04-forms',
        desc: 'The four forms on their example nouns: le fromage, la maison, l\'eau, les parents, then le livre, la table, l\'école. ONE TAKE straight through so the pace is even and the four articles are directly comparable. le and la differ by one unstressed vowel and across two takes that difference is not audible.',
        clipIds: ['le fromage', 'la maison', 'l\'eau', 'les parents', 'le livre', 'la table', 'l\'école'],
      },
      {
        id: 'rec-a1-04-plural',
        desc: 'The plural pairs, each pair in ONE TAKE: les livres then les amis, les parents then les enfants. The join is the entire teaching, so les amis must be said as one piece at natural speed and never separated into two words for clarity. Also supplies the listening mission.',
        clipIds: ['les livres', 'les amis', 'les parents', 'les enfants'],
      },
      {
        id: 'rec-a1-04-vowel',
        desc: 'l\'appartement, l\'école, l\'heure, l\'huile, and for contrast le appartement is NOT to be recorded: there is no such thing and a clip of it would be teaching a form that does not exist. One take, natural pace, and the article and noun joined as a single word throughout.',
        clipIds: ['l\'appartement', 'l\'école', 'l\'heure', 'l\'huile'],
      },
      {
        id: 'rec-a1-04-h',
        desc: 'The two h lists as PAIRS, one take per pair, so each contrast is comparable: l\'heure then le hibou, l\'hôtel then le hockey, l\'homme then le homard, l\'huile then la hanche. Every h is silent in all of them, so nothing should be aspirated; the difference the learner is listening for is whether the article joins on or stands alone.',
        clipIds: ['l\'heure', 'le hibou', 'l\'hôtel', 'le hockey', 'l\'homme', 'le homard', 'l\'huile', 'la hanche'],
      },
      {
        id: 'rec-a1-04-generic',
        desc: 'The twelve example sentences, each read straight through at natural conversational pace and again at 0.65 from the same take. Never assembled from separately recorded words: the article runs into the noun and that join is what the mission is showing.',
        clipIds: ['Nous aimons le français.', 'Ils aiment la musique.', 'Vous aimez les mathématiques.', 'Elles aiment le dessin.', 'Elle aime beaucoup le tennis.', 'Il aime les plats épicés.', 'Je préfère les légumes bio.', 'Je préfère le sport en équipe.', 'Les chats adorent dormir au soleil.', 'Les abricots sont chers cette semaine.', 'Les oiseaux volent vers le sud en hiver.', 'Le sport rend les enfants plus forts.'],
      },
      {
        id: 'rec-a1-04-scene',
        desc: 'The kitchen scene. A warm adult female voice for Claire, unhurried and friendly rather than corrective: the line « Ah, tu aimes le café. » is the pivot of the whole lesson and it must not sound like a telling-off. She is repeating it back, not marking it wrong. « Le matin, le café. Le soir, le thé. » is four articles in one breath and should be said at full speed, so they are as small as they really are.',
        clipIds: ['Et toi, qu\'est-ce que tu aimes ?', 'Ah, tu aimes le café.', 'Le matin, le café. Le soir, le thé.'],
      },
      {
        id: 'rec-a1-04-traps',
        desc: 'The three traps, wrong then right for each, ONE TAKE per pair: « J\'aime café » then « J\'aime le café », « le eau » then « l\'eau », « les ami » then « les amis ». The wrong readings must be spoken naturally rather than mangled, because the point is that a learner cannot hear their own error.',
        clipIds: ['J\'aime café.', 'J\'aime le café.', 'le eau', 'l\'eau', 'les ami', 'les amis'],
      },
      {
        id: 'rec-a1-04-dictee',
        desc: 'The six dictation sentences at natural pace, and again at 0.65 from the same take so the slow version is a slowing rather than a re-reading. No exaggerated word separation, which would give the tile boundaries away, and specifically no pause after the article: the learner has to hear that les chats is two words without being handed the gap.',
        clipIds: ['Les chats adorent dormir au soleil.', 'Les enfants adorent le sport collectif.', 'Elle aime le café au lait.', 'L\'oiseau chante tous les matins.', 'Nous allons à la plage demain.', 'J\'achète du pain à la boulangerie.'],
      },
      {
        id: 'rec-a1-04-scenario',
        desc: 'The café counter exchange, server lines only, brisk and friendly. « C\'est difficile, le français. » carries the article on a subject noun in a throwaway aside, which is the most natural example in the lesson, so it must sound offhand rather than demonstrated.',
        clipIds: ['Bonjour ! Qu\'est-ce que je vous sers ?', 'Et avec ça ? Nous avons des tartes.', 'Très bien. Vous êtes en vacances ?', 'Ah, bravo ! C\'est difficile, le français.', 'Voilà votre café. L\'addition est sur la table.'],
      },
    ],
  },

  /* ─── Narration ───────────────────────────────────────────────────────────
   *
   * The Phase 7 spoken script, in the fixed warm → focus → input → practice →
   * produce → check → cheat order. ratioEnFr 0.7 is the a1 target.
   *
   * Every interaction names an item id, which validateCorpus resolves the same
   * way it resolves a practice section's, because a narration stage that drills
   * a dangling item is the same silent blank-drill failure.                   */
  narration: {
    camilleVoiceId: 'camille-fr-ca-01',
    ratioEnFr: 0.7,
    stages: [
      {
        stage: 'warm',
        segments: [
          { voice: 'en', text: 'I am Camille. Today is the four little words in front of French nouns, and the reason you keep leaving them out.' },
          { voice: 'fr', text: 'J\'aime le café.' },
          { voice: 'en', text: 'Four words. In English that sentence has three, and the one you do not have is the one we are here for.' },
        ],
      },
      {
        stage: 'focus',
        segments: [
          { voice: 'en', text: 'English gives you three ways to introduce a noun. The coffee. A coffee. And plain coffee, meaning coffee in general.' },
          { voice: 'en', text: 'French has the first two and not the third. When English says nothing, French says le. That is the whole lesson.' },
          { voice: 'fr', text: 'Les chats adorent dormir au soleil.' },
          { voice: 'en', text: 'Cats, meaning cats everywhere. English marks that by taking a word away and French marks it by keeping one.' },
        ],
      },
      {
        stage: 'input',
        segments: [
          { voice: 'en', text: 'Now which one. Three questions, and you stop at the first yes. Is it plural?' },
          { voice: 'fr', text: 'Les parents. Les toilettes.' },
          { kind: 'repeat', itemId: 'fr.a1.famille.014' },
          { voice: 'en', text: 'One of those is masculine and one is feminine and you could not tell, because les never asks.' },
          { voice: 'en', text: 'Second question. Does the noun start on a vowel sound?' },
          { voice: 'fr', text: 'L\'eau. L\'école. L\'appartement.' },
          { kind: 'repeat', itemId: 'fr.a1.cuisine.010' },
          { voice: 'en', text: 'Again the gender is hidden, and again you did not need it. Only if both answers were no do you reach the third question.' },
          { voice: 'fr', text: 'Le fromage. La maison.' },
          { kind: 'repeat', itemId: 'fr.a1.cuisine.011' },
          { kind: 'repeat', itemId: 'fr.a1.maison.001' },
        ],
      },
      {
        stage: 'practice',
        segments: [
          { voice: 'en', text: 'One letter behaves two ways, and the article is the only place you will ever see it. Listen.' },
          { voice: 'fr', text: 'L\'heure. Le hibou.' },
          { kind: 'repeat', itemId: 'fr.sons.elision.016' },
          { kind: 'repeat', itemId: 'fr.a1.animaux.044' },
          { voice: 'en', text: 'Both spelled with an h, both silent, and only one of them lets the article shorten. There is no rule. Store the pair.' },
        ],
      },
      {
        stage: 'produce',
        segments: [
          { voice: 'en', text: 'Your turn, with nothing in front of you. Say that you like coffee.' },
          { kind: 'produce', itemId: 'fr.a1.cafe.104', expected: 'J\'aime le café.', gradeAs: 'produce' },
          { voice: 'en', text: 'Now the green beans. Careful, this one answers two questions at once.' },
          { kind: 'produce', itemId: 'fr.a1.cuisine.095', expected: 'les haricots verts', gradeAs: 'produce' },
          { voice: 'en', text: 'And the school. It is feminine, and I want to know whether that changed anything.' },
          { kind: 'produce', itemId: 'fr.a1.ecole.013', expected: 'l\'école', gradeAs: 'produce' },
        ],
      },
      {
        stage: 'check',
        segments: [
          { voice: 'en', text: 'One question. I will say a sentence and you tell me what English would have left out.' },
          { voice: 'fr', text: 'Nous aimons le français.' },
          { kind: 'check', itemId: 'fr.a1.dictee.215', expected: 'le', gradeAs: 'recognise' },
          { voice: 'en', text: 'Le. In English you would have said we like French, with nothing in front of it, and that gap is the one thing no course points at.' },
        ],
      },
      {
        stage: 'cheat',
        segments: [
          { voice: 'en', text: 'Three things to keep. When English says nothing, French says le.' },
          { voice: 'en', text: 'Plural takes les and a vowel sound takes l apostrophe, and neither of them asks about gender. Only le and la do.' },
          { voice: 'en', text: 'And the h words are two lists, not a rule. Store the article with the noun and you never have to choose.' },
          { voice: 'fr', text: 'À bientôt.' },
        ],
      },
    ],
  },
};

/** Exported for the authoring script, the merge script and the tests, so none
 *  of them restates a list or a count that can drift from the content. */
export const ARTICLES_ITEM_IDS = ITEM_IDS;
export const ARTICLES_SPEAK_IDS = SPEAK_IDS;
export const ARTICLES_DICTATION_IDS = DICTATION;
/** The sixteen corpus sentences whose FRENCH carries a definite article and
 *  whose ENGLISH gloss carries none. Exported so the test can assert each one
 *  verbatim against the seed rather than trusting this file's copy of it: the
 *  pair IS the lesson's claim, and a paraphrase on either side would quietly
 *  turn the evidence into an illustration. */
export const ARTICLES_GENERIC_IDS = GENERIC;

/** The generic-use claim, made precisely enough to be checkable.
 *
 *  A blanket "the English gloss contains no the" is the obvious assertion and
 *  it is wrong: « Les chats adorent dormir au soleil » glosses as "Cats love
 *  sleeping in the sun", which has a `the` in it, on a DIFFERENT noun. The
 *  claim was never about the whole sentence. It is about one noun, which
 *  carries an article in French and stands bare in English.
 *
 *  So the pair is named. `fr` is the article and noun as they appear in the
 *  corpus item, `enBare` is the English noun phrase that has nothing in front
 *  of it. The test resolves the id, checks both substrings really are in the
 *  item's own `fr` and `en`, and checks `enBare` is not preceded by the, a or
 *  an. That is a check the content can fail, which is the only kind worth
 *  writing.                                                                  */
export const ARTICLES_GENERIC_PAIRS: { id: string; fr: string; enBare: string }[] = [
  { id: 'fr.a1.dictee.215', fr: 'le français', enBare: 'French' },
  { id: 'fr.a1.dictee.217', fr: 'la musique', enBare: 'music' },
  { id: 'fr.a1.dictee.216', fr: 'les mathématiques', enBare: 'math' },
  { id: 'fr.a1.dictee.218', fr: 'le dessin', enBare: 'drawing' },
  { id: 'fr.a1.sports-et-loisirs.149', fr: 'le tennis', enBare: 'tennis' },
  { id: 'fr.a1.cafe.104', fr: 'le café', enBare: 'coffee' },
  { id: 'fr.a1.cuisine.257', fr: 'les plats', enBare: 'spicy dishes' },
  { id: 'fr.a1.marche.159', fr: 'les légumes', enBare: 'organic vegetables' },
  { id: 'fr.a1.sports-et-loisirs.158', fr: 'le sport', enBare: 'team sports' },
  { id: 'fr.a1.animaux.093', fr: 'Les chats', enBare: 'Cats' },
  { id: 'fr.a1.marche.114', fr: 'Les abricots', enBare: 'Apricots' },
  { id: 'fr.a1.sports-et-loisirs.114', fr: 'Les enfants', enBare: 'Children' },
  { id: 'fr.a1.sports-et-loisirs.119', fr: 'Le sport', enBare: 'Sport' },
  { id: 'fr.a1.famille.156', fr: 'le piano', enBare: 'piano' },
  { id: 'fr.a1.animaux.096', fr: 'Les oiseaux', enBare: 'Birds' },
  { id: 'fr.a1.metiers.120', fr: 'la nuit', enBare: 'nights' },
];
/** The two h lists, so the test can check every noun is on the correct side by
 *  reading the article out of the corpus item's own `fr` rather than out of a
 *  second copy of the list. */
export const ARTICLES_H_MUET_IDS = H_MUET;
export const ARTICLES_H_ASPIRE_IDS = H_ASPIRE;
/** The four ids the shipped v2 lesson declared. Exported so the test can assert
 *  the rebuild dropped none of them. */
export const ARTICLES_PRESERVED_IDS = ['fr.a1.objets.004', 'fr.a1.cafe.004', 'fr.a1.dictee.002', 'fr.a1.dictee.003'];

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
export const ARTICLES_LESSON: Lesson = withScenarioAlts(ARTICLES_LESSON_AUTHORED);
