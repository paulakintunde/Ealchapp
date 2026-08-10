// a1.17.l1 "Les adjectifs possessifs": the lesson body.
//
// Reads every French string, respelling and gloss from possessifs-corpus.ts and
// restates none of them. Before that convention one word's transcription was
// typed by hand in five sections and the five copies were free to drift.
//
// ── The layout decisions, each of which is a rule from A1-BUILD-INVARIANTS ──
//
// THE EIGHTEEN-CELL GRID IS SPLIT, AND THE SPLIT IS ALSO THE TEACHING ORDER.
// Six rows by three columns does not fit a Pixel 6 legibly, and `tapTable` is
// NOT in `ownsLayout()` (LessonPager.tsx:162), so it renders inside a scrolling
// page and the bottom rows fall below the fold with their chrome. So the grid is
// two tables:
//
//     s07-table-gender   3 rows x 3 columns   je / tu / il-elle    act 2
//     s09-table-relief   3 rows x 2 columns   nous / vous / ils    act 3
//
// The split is by WHETHER THE OWNER MAKES YOU CHECK THE THING'S KIND, which is
// the only question this lesson asks. Nine cells then six, and the second table
// is the relief: three of its six cells are the same word twice. The full
// eighteen live on sheet.a1.17.grid, where `layer: 'deep'` exempts them from the
// core density caps and a learner can scroll on purpose.
//
// NO groupDrill CARRIES `size`. The brief notes that a groupDrill owns the
// viewport at `xl` and not otherwise, which is true, and `xl` is unusable here:
// `density.logic.ts` reads it as a TWELVE-WORD CAP ON EVERY STRING IN THE
// SECTION, and every check in this lesson carries a `why` that has to teach the
// rule rather than name it. a1.13 made the same call for the same reason and
// shipped. The cost is that the sorting drills scroll, which is correct for a
// four-group section and wrong only if a group is one line tall.
//
// THE HIS/HER PAIR IS A tapTable WITH TWO COLUMNS, s04-hisher, and it is the one
// screen this lesson cannot do without. Identical French on both sides, different
// English, on ONE screen. Split across two missions it becomes two unremarkable
// sentences. The batch, the merge and the test all assert that a single section
// carries both readings.
//
// `ma sœur` against `mon amie` is the same shape, at s13-swap, for the same
// reason: without the pairing, `mon amie` just looks like a mistake.
//
// NO IMAGE IS AUTHORED. `imageRef` resolves through a statically enumerated
// registry in `lessonImages.ts` and `lesson-contract.test.ts` does NOT check it,
// despite a comment in `schema.ts` claiming a publish-time check that is
// conditional on an asset manifest which does not exist. An unregistered ref
// draws a blank box and nothing goes red. The brief also warns against inventing
// a possession diagram: no component draws one. So there is none, and the batch
// asserts there is none.
//
// ── The dictée, and why it is five short lines ─────────────────────────────
//
// `dicteeMode` switches to WORD mode above DICTEE_LETTER_LIMIT letters, and word
// mode hands the learner each whole word as a pre-spelled tile. Tapping a tile
// marked `mon` is not choosing between `mon` and `ma`, which is the entire thing
// this lesson teaches. Every target below is short enough to stay in LETTERS
// mode and each one is checked through the real `dicteeMode` in the batch, the
// merge and the test rather than against a restated threshold.
//
// The measured consequence, worth recording because the next possessive lesson
// will hit it: `Voici leurs filles.` is SEVENTEEN letters and lands in word mode,
// so the leurs half of the leur/leurs pair CANNOT be a dictée target while its
// partner can. The pair is tested by the quiz and by s16-leur instead. Named here
// so nobody "completes" the dictée by adding a target that silently degrades
// into tapping tiles.

import type {
  ErrorTrigger, Lesson, LessonAct, LessonDrill, LessonSection, ReferenceSheet, SceneBeat,
} from '../../../ealch-v2/src/content/schema.ts';
import { POSSESSIFS_TERMS, REFRAME } from './possessifs-terms.ts';
import {
  CONTRASTS, GENDERED_OWNERS, GRID_NOUNS, HEADWORD_OF, OWNERS, PARADIGM, PARADIGM_IDS,
  THE_FIFTEEN, UNGENDERED_OWNERS, cellSub, contrastIds, enOf, frOf, rowFor, sub,
} from './possessifs-corpus.ts';

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

/** The fifteen headword cards. Twelve are imported from the block somebody
 *  authored and stopped three cells short of; three are this lesson's. */
const HEADWORDS = THE_FIFTEEN.map((f) => HEADWORD_OF[f]);

/** The three nouns the grid runs on. Not authored: all three are published
 *  famille headwords carrying an explicit gender, which is what lets a learner
 *  CHECK the grid rather than take it. */
const GRID_NOUN_IDS = GRID_NOUNS.map((n) => n.headwordId);

/** mon ami and mon amie, authored as a pair with byte-identical transcriptions,
 *  because that identity is the claim rather than an accident. */
const HOMOPHONE_PAIR = ['fr.a1.famille.256', 'fr.a1.famille.257'];

/** The eighteen-cell paradigm. One frame, three nouns, six owners. */
const GRID = PARADIGM_IDS;

/** The four contrasts the paradigm cannot carry, each a minimal pair. */
const HIS_HER = contrastIds('his-her');
const VOWEL = contrastIds('vowel');
const EAR = contrastIds('ear');
const LEUR_LEURS = contrastIds('leur-leurs');
const SLOT = contrastIds('slot');

/** The possessives surviving outside anything this lesson wrote. Every one is
 *  a published sentence carrying a form the lesson teaches, so the learner sees
 *  the rule firing in French nobody arranged for them. */
const IN_THE_WILD = [
  'fr.a1.famille.083',            // Mon frère et ma sœur habitent à Lyon.   mon AND ma, one owner
  'fr.a1.dictee.001',             // Il a mangé ses croissants avec sa sœur. glossed "his" in the corpus
  'fr.a1.sports-et-loisirs.081',  // Il joue au football avec ses amis le week-end.
  'fr.sons.liaisons.081',         // Mon école ouvre tôt.                    the vowel rule, unarranged
  'fr.a1.dictee.188',             // Mon amie cherche sa trousse.            the vowel rule AND a sa
  'fr.a1.maison.101',             // Notre maison a un grand jardin.
  'fr.a1.cafe.132',               // Nous attendons nos amis au café.
  'fr.a1.dictee.210',             // Vous écrivez votre adresse.             votre before a vowel: no swap
  'fr.a1.dictee.321',             // Vous ouvrez vos livres à la page dix.
  'fr.a1.cafe.093',               // Les clients attendent leur commande.    several owners, ONE thing
  'fr.a1.dictee.184',             // Les élèves rangent leurs livres.        several owners, SEVERAL things
];

const ITEM_IDS = [
  ...new Set([
    ...HEADWORDS, ...GRID_NOUN_IDS, ...HOMOPHONE_PAIR, ...GRID,
    ...HIS_HER, ...VOWEL, ...EAR, ...LEUR_LEURS, ...SLOT, ...IN_THE_WILD,
  ]),
];

/** Spoken practice draws ONLY from items carrying `voiceflash`, because that is
 *  the drill the mic-scored deck runs. An item without it renders as a card the
 *  learner cannot be scored on, which looks like a broken mission rather than a
 *  missing tag.
 *
 *  NOT ONE BARE POSSESSIVE IS IN HERE, and that is a teaching decision rather
 *  than a technical one. The audio brief puts it plainly: `mon` alone carries no
 *  gender information and the whole lesson is about what follows it. A speak
 *  mission on the fifteen headwords would have the learner say fifteen words
 *  none of which can be right or wrong on its own. So the spoken mission is the
 *  eighteen grid sentences, the nine contrasts and the two homophones: every
 *  line has a thing in it, which is the only thing that makes a possessive a
 *  choice. All twenty-nine carry voiceflash, verified against the database in
 *  the batch and against the post-merge item set in the merge. */
const SPEAK_IDS = [...GRID, ...HIS_HER, ...VOWEL, ...EAR, ...LEUR_LEURS, ...SLOT, ...HOMOPHONE_PAIR];

/** The dictée, and every target was chosen by MEASUREMENT rather than taste.
 *
 *  Letters mode makes the learner write the form themselves, which is the entire
 *  point of a dictée in a lesson about choosing between two short words. Word
 *  mode would hand them `mon` on a tile. Every id below is short enough to stay
 *  in letters mode, verified through the real `dicteeMode` in the batch, the
 *  merge and the test.
 *
 *  The five between them cover: `ma` before a consonant, the vowel swap, a
 *  plural, `leur` with no s, and the slot. Two of the five are the cases where
 *  the learner has to make the decision rather than transcribe it. */
const DICTATION_IDS = [
  'fr.a1.famille.259', // Voici ma sœur.        ma, in front of a consonant
  'fr.a1.famille.278', // Voici mon amie.       the swap, and the learner writes mon rather than ma
  'fr.a1.famille.280', // Ce sont mes amis.     the plural, with the liaison in it
  'fr.a1.famille.282', // Voici leur fille.     leur, and the s that must NOT appear
  'fr.a1.famille.284', // C'est mon livre.      the slot, with nothing in front of mon
];

/* ─── Mission 1 · Scene ────────────────────────────────────────────────────
 *
 * The A1 register of stakes is being MISREAD AS A PERSON rather than being
 * corrected, and this lesson has the sharpest material on the track for it,
 * because the error produces a perfectly grammatical sentence with the wrong
 * meaning. Nobody corrects anything. The conversation continues about the wrong
 * person and it surfaces three exchanges later.
 *
 * Chloé is at a language exchange and has spent ten minutes talking about her
 * friend Amélie, using `sa` and `son` the whole time. Asked who she came with,
 * she means her own sister, reaches for the word she has been using, and says
 * « sa sœur ». Every word is real French and the sentence is well formed. The
 * host hears "Amélie's sister", introduces her that way all evening, and it
 * only comes out at the door.
 *
 * That slip is what a learner under load actually does: reaching for the form
 * you just used is not carelessness, it is what happens when the choice has not
 * become automatic. And it is undetectable from the inside, which is what makes
 * it worth a scene rather than a trap card.
 *
 * The weaker beat, and it is deliberately not the one: « ma amie », which is
 * simply not French and stops the conversation. A sentence that stops the
 * conversation gets repaired in the next breath. This one does not.
 *
 * The choice beat is `ma sœur` against `sa sœur`, which is the lesson's own
 * authored pair, so the beat, the grid, the drill and the dictée are all the
 * same rows.                                                                 */

const SCENE_BEATS: SceneBeat[] = [
  {
    kind: 'narration',
    size: 'md',
    text: 'A language exchange in a bar back room. You have been here an hour and you are doing well, which is exactly when this happens.',
    audio: { mode: 'tts', voice: 'coach' },
  },
  {
    kind: 'narration',
    size: 'md',
    text: 'For ten minutes you have been telling everybody about your friend Amélie. Her flat, her job, her brother. Ten minutes of son and sa.',
    audio: { mode: 'tts', voice: 'coach' },
  },
  {
    kind: 'bubble',
    from: 'them',
    reveal: 'auto',
    size: 'md',
    speaker: 'Hugo',
    fr: 'Et toi, tu es venue avec qui ce soir ?',
    en: 'And you, who did you come with tonight?',
    stage: 'He is refilling glasses and barely looking up. Nothing rides on this.',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a1-17-scene' },
  },
  {
    kind: 'choice',
    size: 'lg',
    prompt: 'You came with your own sister, and she is standing right there. Which line do you say?',
    options: [
      {
        fr: frOf('fr.a1.famille.265'),
        respell: cellSub('sa', 'f'),
        en: 'the word you have been using all evening',
        outcome: 'breaks',
        audio: { mode: 'tts', lang: 'fr-FR' },
      },
      {
        fr: frOf('fr.a1.famille.259'),
        respell: cellSub('ma', 'f'),
        en: 'the word for a thing that is yours',
        outcome: 'works',
        audio: { mode: 'tts', lang: 'fr-FR' },
      },
    ],
    followUp: {
      works: 'Yes. Watch what the other one does, because it is the one you reach for when you are tired.',
      breaks: 'That is the word you have said about twenty times in the last ten minutes. Watch where it goes.',
    },
  },
  {
    kind: 'bubble',
    from: 'you',
    reveal: 'auto',
    size: 'md',
    speaker: 'You',
    fr: frOf('fr.a1.famille.265'),
    en: '(This is his sister, or hers, and either way it is not yours)',
    audio: { mode: 'tts', lang: 'fr-FR' },
  },
  {
    kind: 'bubble',
    from: 'them',
    reveal: 'auto',
    size: 'md',
    speaker: 'Hugo',
    fr: 'Ah, enchanté ! Vous êtes la sœur d\'Amélie, alors ?',
    en: 'Ah, nice to meet you! So you are Amélie\'s sister?',
    stage: 'He shakes her hand warmly. Nothing at all has gone wrong yet, as far as anybody in the room can tell.',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a1-17-scene' },
  },
  {
    kind: 'break',
    size: 'lg',
    heading: 'Every word was a real word',
    // 34 words. The shipped scene breaks run 24 to 40 here.
    body: 'Nothing you said was wrong. Sa sœur is correct French and Hugo understood it perfectly, which is the problem: he understood it to mean Amélie\'s sister, because sa never meant yours in the first place.',
    wrong: {
      fr: frOf('fr.a1.famille.265'),
      ipa: '/vwa.si sa sœʁ/',
      respell: cellSub('sa', 'f'),
      en: 'This is his sister, or her sister. Somebody else\'s, either way',
    },
    right: {
      fr: frOf('fr.a1.famille.259'),
      ipa: '/vwa.si ma sœʁ/',
      respell: cellSub('ma', 'f'),
      en: 'This is my sister',
    },
    coach: `${REFRAME} A sister is a sister in both lines, and it was never the sister that had to change.`,
    // Audio-first: the ear gets the two lines before the eye can read the gloss,
    // and they differ by one syllable. `autoplay` is NOT set: it is declared in
    // schema.ts and implemented in no component.
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], audioFirst: true, recordingId: 'rec-a1-17-owners' },
  },
  {
    kind: 'bubble',
    from: 'you',
    reveal: 'tap',
    size: 'md',
    speaker: 'At the door, an hour later',
    fr: frOf('fr.a1.famille.259'),
    en: 'This is my sister.',
    stage: 'One syllable different, and it is the only syllable in the sentence that was ever about you.',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65] },
  },
  {
    kind: 'bubble',
    from: 'them',
    reveal: 'auto',
    size: 'md',
    speaker: 'Hugo',
    fr: 'Ta sœur ! Ah, pardon, j\'avais compris autre chose. Revenez toutes les deux.',
    en: 'Your sister! Oh, sorry, I had understood something else. Come back, both of you.',
    stage: 'Nobody minds. An hour of him thinking she was somebody else, and it cost nothing except the hour.',
    audio: { mode: 'tts', lang: 'fr-FR' },
  },
  {
    kind: 'resolve',
    size: 'md',
    text: 'One word out of five, and it was the only one carrying anything about you. The next twenty-five minutes are about choosing it.',
  },
];

const SECTIONS: LessonSection[] = [
  /* ── Act 1: whose is it ────────────────────────────────────────────────── */

  {
    type: 'scene',
    id: 's01-scene',
    title: 'An Hour As Somebody Else\'s Sister',
    frSub: 'Ma sœur ou sa sœur ?',
    render: 'screens',
    layer: 'core',
    terms: ['whatIsOwned'],
    say: {
      text: 'One word wrong, nobody corrects it, and the conversation carries on about the wrong person. Watch which word.',
      voice: 'coach',
      timing: 'onFirstVisitOnly',
    },
    setting: {
      place: 'The back room of a bar, a language exchange, and a table of half-finished glasses',
      city: 'Nantes',
      time: 'Thursday evening',
      ambience: 'room-tone-lobby',
    },
    beats: SCENE_BEATS,
    closing: {
      size: 'md',
      text: `${REFRAME} That question is the next twenty-five minutes.`,
    },
  },

  {
    type: 'goals',
    id: 's02-goals',
    title: 'What You Will Be Able To Do',
    frSub: 'Ce que vous saurez faire',
    layer: 'core',
    say: 'Four things, and the first one is a habit rather than a list.',
    goals: [
      { t: 'Ask the right question before you speak', s: 'One question, asked about the thing rather than the person, and it answers all fifteen of these words.' },
      { t: 'Use all six owners', s: 'From mon to leurs. Three of the six make you check the thing and three do not, which is most of the good news.' },
      { t: 'Say mon amie without it looking like a mistake', s: 'A word you have already met twice under a different name, arriving here for the third time.' },
      { t: 'Tell leur from leurs', s: 'The one place where an s is counting something other than what you expect.' },
    ],
  },

  {
    type: 'cardDeck',
    id: 's03-inversion',
    title: 'English Marks You. French Marks It.',
    frSub: 'La chose, pas la personne',
    hint: 'Four cards before any of the fifteen words.',
    render: 'deck',
    layer: 'core',
    size: 'lg',
    terms: ['whatIsOwned'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a1-17-owners' },
    say: 'Four cards before any table, because this idea is what the table is for.',
    cards: [
      {
        // THE RECONCILIATION CARD. a1.15 landed while this lesson was being
        // written and gave the learner mon, ma and mes as three words with an
        // article-based rule for choosing between them. Re-teaching them as new
        // would tell a learner who has just used them that they had not. Naming
        // the earlier lesson and extending it is what a1.09 does with a1.08.
        label: 'What you already have',
        head: 'Three of these are already yours',
        fr: 'mon père · ma mère · mes parents',
        sub: 'my father · my mother · my parents',
        body: 'The family lesson gave you these three and one rule: mon with the le words, ma with the la words, mes with anything plural. That rule is right and it is about to get a reason. There are twelve more words behind it.',
      },
      {
        label: 'What that rule was really about',
        head: 'Things have a kind',
        fr: `${frOf('fr.a1.famille.003')} · ${frOf('fr.a1.famille.004')}`,
        sub: `${sub('le frère')} · ${sub('la sœur')} · the brother · the sister`,
        body: 'You met this already: every thing in French is either the un kind or the une kind, and the small word in front follows it. A brother is one, a sister is the other, and nothing about either person explains why.',
      },
      {
        label: 'What English does',
        head: 'The word changes with the person',
        body: 'His bag, her bag. The bag has not moved and the word did, because English is telling you who. That is so automatic for an English speaker that it does not feel like a choice at all, which is why it survives into French unexamined.',
      },
      {
        label: 'What French does',
        head: 'The word changes with the thing',
        fr: `${frOf('fr.a1.famille.264')} · ${frOf('fr.a1.famille.265')}`,
        sub: 'his brother, or her brother · his sister, or her sister',
        body: 'Son and sa, and what separates them is a brother against a sister. Not a man against a woman. Both lines can be said about the same person, and neither tells you anything about who that person is.',
      },
      {
        label: 'What that gives you',
        head: 'One question, fifteen words',
        body: `You never have to think about the owner again. Look at the thing: which kind is it, and is there one or several? ${REFRAME}`,
      },
    ],
  },

  {
    // THE SCREEN THIS LESSON CANNOT DO WITHOUT. Identical French in both cells
    // of a row, different English, ON ONE SCREEN. Two columns, two rows, so it
    // fits a Pixel 6 without scrolling even though tapTable is not in
    // ownsLayout(). The batch, the merge and the test all assert that a single
    // section carries both readings; split across two missions it becomes two
    // unremarkable sentences and the inversion is never visible.
    type: 'tapTable',
    id: 's04-hisher',
    title: 'The Same French, Twice',
    frSub: 'Deux sens, une phrase',
    layer: 'core',
    terms: ['whatIsOwned'],
    sheetId: 'sheet.a1.17.grid',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a1-17-hisher' },
    say: `${REFRAME} Read across a row. The French is the same word twice and the English is not.`,
    cols: ['when a man is speaking', 'when a woman is speaking'],
    rows: [
      {
        cells: ['sa sœur', 'sa sœur'],
        say: 'sa sœur, sa sœur',
        detail: {
          title: 'his sister, and her sister',
          body: `${frOf('fr.a1.famille.276')} ${enOf('fr.a1.famille.276')} ${frOf('fr.a1.famille.277')} ${enOf('fr.a1.famille.277')} One word changed and it was the first. Sa did not move: a sister is the une kind whoever she belongs to.`,
          say: `${frOf('fr.a1.famille.276')} ${frOf('fr.a1.famille.277')}`,
        },
      },
      {
        cells: ['son frère', 'son frère'],
        say: 'son frère, son frère',
        detail: {
          title: 'his brother, and her brother',
          body: `${frOf('fr.a1.famille.264')} The same again with the other kind of thing. Son is not the masculine of anybody: it is the word you use in front of a brother, and a brother stays the un kind no matter whose he is.`,
          say: frOf('fr.a1.famille.264'),
        },
      },
      {
        cells: ['ses parents', 'ses parents'],
        say: 'ses parents, ses parents',
        detail: {
          title: 'his parents, and her parents',
          body: `${frOf('fr.a1.famille.266')} With more than one thing the question about the kind is never even asked, so ses covers both and covers both owners as well. One word doing four English jobs.`,
          say: frOf('fr.a1.famille.266'),
        },
      },
    ],
  },

  /* ── Act 2: mon, ma, mes ───────────────────────────────────────────────── */

  {
    type: 'cardDeck',
    id: 's05-three',
    title: 'Three Words For My',
    frSub: 'mon, ma, mes',
    hint: 'Three cards, one for each shape.',
    render: 'deck',
    layer: 'core',
    size: 'lg',
    terms: ['whatIsOwned', 'theSlot'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a1-17-grid' },
    say: 'English has one word here and French has three. The three are not about you.',
    cards: [
      ...rowFor('je').map((c, i) => ({
        label: ['the un kind', 'the une kind', 'more than one'][i],
        head: c.form,
        fr: c.fr,
        sub: `${cellSub(c.form, c.slot)} · ${c.en}`,
        body: c.notes ?? '',
      })),
      {
        label: 'the whole idea',
        head: 'Nothing here is about you',
        fr: frOf('fr.a1.famille.083'),
        sub: `${enOf('fr.a1.famille.083')}`,
        body: `One speaker, one sentence, and the word for my is spelled two different ways inside it. Nobody changed between the brother and the sister. ${REFRAME}`,
      },
      {
        label: 'and there is nothing else',
        head: 'No le in front of it',
        fr: frOf('fr.a1.famille.284'),
        sub: `${sub('mon livre')} · ${enOf('fr.a1.famille.284')}`,
        body: 'Mon is standing exactly where le would have stood, so the two never appear together. There is no le mon livre and there never will be. Once you have chosen mon you are finished, and nothing else goes in front of the noun.',
      },
    ],
  },

  {
    type: 'groupDrill',
    id: 's06-choose',
    title: 'Which One Would You Say?',
    frSub: 'Vous choisissez',
    layer: 'core',
    terms: ['whatIsOwned'],
    say: 'Three decisions, and each one is answered by looking at the thing rather than at yourself.',
    groups: [
      {
        label: 'The un kind',
        items: [
          { fr: frOf('fr.a1.famille.258'), itemId: 'fr.a1.famille.258', respell: cellSub('mon', 'm'), en: enOf('fr.a1.famille.258') },
          { fr: frOf('fr.a1.famille.003'), itemId: 'fr.a1.famille.003', respell: sub('le frère'), en: enOf('fr.a1.famille.003') },
        ],
        check: {
          q: 'You want to say: my brother. Which word goes in front of it?',
          opts: ['ma', 'mon', 'mes', 'either mon or ma'],
          correct: 1,
          why: 'mon. A brother is the un kind, and that is the only fact the choice needed. If you found yourself thinking about who was speaking, that is the English habit and it is the one this lesson is here to break.',
        },
      },
      {
        label: 'The une kind',
        items: [
          { fr: frOf('fr.a1.famille.259'), itemId: 'fr.a1.famille.259', respell: cellSub('ma', 'f'), en: enOf('fr.a1.famille.259') },
          { fr: frOf('fr.a1.famille.004'), itemId: 'fr.a1.famille.004', respell: sub('la sœur'), en: enOf('fr.a1.famille.004') },
        ],
        check: {
          q: 'You want to say: my sister. Which word goes in front of it?',
          opts: ['mon', 'mes', 'ma', 'ma or mon, both work'],
          correct: 2,
          why: 'ma. A sister is the une kind. A man saying this sentence and a woman saying it produce exactly the same three words, because nothing in the sentence is reporting on the speaker.',
        },
      },
      {
        label: 'More than one',
        items: [
          { fr: frOf('fr.a1.famille.260'), itemId: 'fr.a1.famille.260', respell: cellSub('mes', 'pl'), en: enOf('fr.a1.famille.260') },
          { fr: frOf('fr.a1.famille.014'), itemId: 'fr.a1.famille.014', respell: sub('les parents'), en: enOf('fr.a1.famille.014') },
        ],
        check: {
          q: 'You want to say: my parents. Which word goes in front of it?',
          opts: ['mes', 'mon', 'ma', 'mons'],
          correct: 0,
          why: 'mes. Once there is more than one thing the question about the kind stops being asked at all, so there is one word rather than two. That is true of every owner in this lesson and it is a third of the grid gone.',
        },
      },
      {
        label: 'The one from the scene',
        items: [],
        check: {
          q: 'You want to say: my sister, and you have spent ten minutes talking about your friend. Which word?',
          opts: ['sa', 'ma', 'ta', 'la'],
          correct: 1,
          why: 'ma. This is the exact slip from the opening scene and it is worth making twice on purpose. Sa is correct French about somebody else, so nothing about it will feel wrong as you say it and nobody will stop you.',
        },
      },
    ],
  },

  {
    // NINE CELLS. Three rows by three columns is what fits a Pixel 6, and the
    // full eighteen live on sheet.a1.17.grid. tapTable is NOT in ownsLayout(),
    // so this renders inside a scrolling page: every cell is one word and the
    // teaching lives in the detail modal, which is a card and can hold prose.
    type: 'tapTable',
    id: 's07-table-gender',
    title: 'The Three That Ask About The Thing',
    frSub: 'Les trois premiers',
    layer: 'core',
    terms: ['whatIsOwned', 'theSlot'],
    sheetId: 'sheet.a1.17.grid',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a1-17-grid' },
    say: 'Nine cells. Read across a row and only the thing moves. Tap any cell to hear it.',
    cols: ['the un kind', 'the une kind', 'more than one'],
    rows: GENDERED_OWNERS.map((o) => {
      const row = rowFor(o.who);
      return {
        cells: [...o.forms],
        say: o.forms.join(', '),
        detail: {
          title: `${o.who}: ${o.en}`,
          body: `${row.map((c) => c.fr).join(' ')} Three sentences, one speaker, and the only thing that moved is what is being pointed at. ${
            o.who === 'il / elle'
              ? 'This is the row English speakers lose: English would have used two different words here.'
              : 'The word changed twice and the person speaking never did.'
          }`,
          say: row.map((c) => c.fr).join(' '),
        },
      };
    }),
  },

  /* ── Act 3: the rest, and the relief ───────────────────────────────────── */

  {
    type: 'cardDeck',
    id: 's08-son',
    title: 'The Row That Says Nothing About Who',
    frSub: 'son, sa, ses',
    hint: 'Four cards on the row that costs English speakers the most.',
    render: 'deck',
    layer: 'core',
    size: 'lg',
    terms: ['whatIsOwned', 'theOtherSon'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a1-17-hisher' },
    say: 'Three words covering six English ones, and none of them reports on the owner.',
    cards: [
      {
        label: 'his, and hers',
        head: 'One word, two English words',
        fr: frOf('fr.a1.famille.265'),
        sub: `${cellSub('sa', 'f')} · his sister, and her sister`,
        body: 'No French sentence distinguishes these. If it matters, French says it another way and names the person. The possessive itself will not do it, and waiting for it to is how an evening gets spent on the wrong person.',
      },
      {
        label: 'in the wild',
        head: 'Somebody already had to choose',
        fr: frOf('fr.a1.dictee.001'),
        sub: enOf('fr.a1.dictee.001'),
        body: 'That English was written by somebody translating this sentence, and they had to pick his or her out of nowhere. They picked his because the sentence starts with il. The French carries no such information and never did.',
      },
      {
        label: 'context does the work',
        head: 'The sentence around it tells you',
        fr: frOf('fr.a1.sports-et-loisirs.081'),
        sub: enOf('fr.a1.sports-et-loisirs.081'),
        body: 'Here you know whose friends they are, and it is not ses that told you. It was il, three words earlier. That is how French does it every time: the owner is established once and the possessive never repeats it.',
      },
      {
        label: 'the other one',
        head: 'son is also a noise',
        fr: 'le son',
        sub: 'the sound',
        body: 'Un son is a sound: the same three letters being a different word. You can tell them apart without thinking, because a possessive always has a thing straight behind it. Son frère, son sac. On its own or after le, it is the noise.',
      },
    ],
  },

  {
    // SIX CELLS, and the second half of the split grid. Two columns rather than
    // three, because these three owners collapse the first two columns into one
    // word: that collapse IS the teaching, so the table has to be a different
    // shape from s07 rather than the same shape with repeated cells.
    type: 'tapTable',
    id: 's09-table-relief',
    title: 'The Three That Ask Nothing',
    frSub: 'Les trois derniers',
    layer: 'core',
    terms: ['whatIsOwned', 'oneOrSeveral'],
    sheetId: 'sheet.a1.17.grid',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a1-17-grid' },
    say: 'Six cells instead of nine, because these three never ask which kind the thing is.',
    cols: ['one thing, either kind', 'more than one'],
    rows: UNGENDERED_OWNERS.map((o) => {
      const row = rowFor(o.who);
      return {
        cells: [o.forms[0], o.forms[2]],
        say: `${o.forms[0]}, ${o.forms[2]}`,
        detail: {
          title: `${o.who}: ${o.en}`,
          body: `${row[0].fr} ${row[1].fr} ${row[2].fr} The first two are the same word: one in front of a brother, one in front of a sister. ${
            o.who === 'ils / elles'
              ? 'The s on leurs counts the parents. There were already several owners without it.'
              : 'Only the count ever changes it.'
          }`,
          say: row.map((c) => c.fr).join(' '),
        },
      };
    }),
  },

  {
    type: 'groupDrill',
    id: 's10-sort',
    title: 'Does It Ask, Or Not?',
    frSub: 'Poser la question, ou pas',
    layer: 'core',
    terms: ['whatIsOwned', 'oneOrSeveral'],
    say: 'Four groups. The first three make you look at the thing and the last three do not.',
    groups: [
      {
        label: 'nous: our',
        items: rowFor('nous').map((c) => ({
          fr: c.fr, itemId: c.id, respell: cellSub(c.form, c.slot), en: c.en,
        })),
        check: {
          q: 'You want to say: our sister. Which word?',
          opts: ['nos', 'notra', 'notre', 'nous'],
          correct: 2,
          why: 'notre, exactly as it was for our brother. This row does not ask which kind the thing is, so the first two cells of it are the same word and you have one fewer decision than you had a minute ago.',
        },
      },
      {
        label: 'vous: your, polite or plural',
        items: ['fr.a1.famille.270', 'fr.a1.famille.271', 'fr.a1.famille.272'].map((id) => ({
          fr: frOf(id), itemId: id, en: enOf(id),
        })),
        check: {
          q: 'You want to say: your parents, speaking politely to one person. Which word?',
          opts: ['votre', 'vos', 'tes', 'vous'],
          correct: 1,
          why: 'vos. Politeness is not what the s is about: vos is the plural of votre and it counts the parents. Speaking politely to one person about one thing you would say votre, and about two things you still say vos.',
        },
      },
      {
        label: 'ils and elles: their',
        items: ['fr.a1.famille.273', 'fr.a1.famille.274', 'fr.a1.famille.275'].map((id) => ({
          fr: frOf(id), itemId: id, en: enOf(id),
        })),
        check: {
          q: 'You want to say: their sister, about two brothers. Which word?',
          opts: ['leurs', 'leur', 'sa', 'ses'],
          correct: 1,
          why: 'leur, with no s. There are two owners and one sister, and the s counts sisters. This is the one place in the lesson where an s is answering a question you did not think you were being asked.',
        },
      },
      {
        label: 'In the wild',
        items: [
          { fr: frOf('fr.a1.maison.101'), itemId: 'fr.a1.maison.101', en: enOf('fr.a1.maison.101') },
          { fr: frOf('fr.a1.cafe.132'), itemId: 'fr.a1.cafe.132', en: enOf('fr.a1.cafe.132') },
          { fr: frOf('fr.a1.dictee.210'), itemId: 'fr.a1.dictee.210', en: enOf('fr.a1.dictee.210') },
          { fr: frOf('fr.a1.dictee.321'), itemId: 'fr.a1.dictee.321', en: enOf('fr.a1.dictee.321') },
        ],
        check: {
          q: 'Two of those four say notre or votre and two say nos or vos. What separates them?',
          opts: [
            'Whether the speaker is being polite',
            'Whether the thing is the un kind or the une kind',
            'How many things there are',
            'Whether the owner is one person or several',
          ],
          correct: 2,
          why: 'How many things. A house and an address are one each, so notre and votre. Friends and books are several, so nos and vos. Nothing in any of the four sentences depends on the kind of thing or on how many owners there are.',
        },
      },
    ],
  },

  {
    type: 'groupDrill',
    id: 's11-check',
    title: 'Now Without The Tables',
    frSub: 'Sans les tableaux',
    layer: 'core',
    terms: ['whatIsOwned'],
    say: 'Same decisions, nothing to look at. This is the one that tells you whether it landed.',
    groups: [
      {
        // A groupDrill control page carries items: [] explicitly and no size.
        label: 'Owner or thing',
        items: [],
        check: {
          q: 'Marie is talking about her own father. Which word does she use?',
          opts: ['sa', 'son', 'ma', 'sons'],
          correct: 1,
          why: 'son. A father is the un kind, and that settles it. Marie being a woman has nothing to do with the choice, and reaching for sa here is the single most common possessive error an English speaker makes in their first year.',
        },
      },
      {
        label: 'The plural row',
        items: [],
        check: {
          q: 'You want to say: your parents, to a friend. Which word?',
          opts: ['ton', 'ta', 'tes', 'votre'],
          correct: 2,
          why: 'tes. More than one thing, so the kind is never asked about, and a friend takes the tu row rather than the vous row. Votre would be correct French said to somebody you were being careful with.',
        },
      },
      {
        label: 'Several owners',
        items: [],
        check: {
          q: 'Two women are talking about the one flat they share. Which word for their flat?',
          opts: ['leurs', 'leur', 'ses', 'nos'],
          correct: 1,
          why: 'leur. Two owners and one flat, and leur counts flats. If they had two flats it would be leurs, and the two women would still be exactly two women either way.',
        },
      },
      {
        label: 'The whole question',
        items: [],
        check: {
          q: 'Before you say a possessive out loud, what should you be looking at?',
          opts: [
            'Whether the owner is a man or a woman',
            'Whether you are being polite',
            'How many owners there are',
            'What the thing is, and how many of it',
          ],
          correct: 3,
          why: `${REFRAME} Which kind is the thing, and is there one or several. Those two answers pick the word every time. The owner only chooses which row you are standing in, and you knew that already.`,
        },
      },
    ],
  },

  /* ── Act 4: before a vowel ─────────────────────────────────────────────── */

  {
    type: 'cardDeck',
    id: 's12-vowel',
    title: 'The Third Time You Have Met This',
    frSub: 'Devant une voyelle',
    hint: 'Four cards, and the idea in them is not new.',
    render: 'deck',
    layer: 'core',
    size: 'lg',
    terms: ['beforeAVowel'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a1-17-vowel' },
    say: 'One old idea, one new repair. You have watched French dodge this collision twice already.',
    cards: [
      {
        label: 'the problem',
        head: 'Two vowels meeting',
        fr: 'ma amie',
        sub: 'not French, and it never has been',
        body: 'Say those two words at ordinary speed and they run into each other. French does not allow it, and the interesting part is that it has more than one way out. You have already seen one of them.',
      },
      {
        label: 'the repair you know',
        head: 'la amie became l\'amie',
        fr: 'la amie · l\'amie',
        sub: 'the small word gets cut short',
        body: 'That was the definite articles, and the silent-letters lesson before it. The little word in front loses its vowel and an apostrophe takes the place. Same collision, and the language solved it by taking something away.',
      },
      {
        label: 'the repair that is new',
        head: 'ma amie becomes mon amie',
        fr: frOf('fr.a1.famille.278'),
        sub: `${sub('mon amie')} · ${enOf('fr.a1.famille.278')}`,
        body: 'Here nothing is cut. The word is swapped for the other shape, which ends in a sound that carries straight into the vowel behind it. Une amie is still the une kind, and only this one word borrowed the other form.',
      },
      {
        label: 'how far it reaches',
        head: 'Three words, and only three',
        fr: frOf('fr.a1.dictee.210'),
        sub: enOf('fr.a1.dictee.210'),
        body: 'It reaches mon, ton and son and stops. Notre, votre and leur never change for anything, which that sentence shows: votre sits in front of a vowel and does not move. There is no votr\' adresse and there is no swap.',
      },
    ],
  },

  {
    // TWO COLUMNS ON ONE SCREEN, and the brief is right that without the pairing
    // `mon amie` just looks like a mistake. Both nouns are the une kind, one
    // takes ma and one takes mon, and the learner can CHECK both: `la sœur` is
    // a published famille headword with gender f, and `amie` carries gender f
    // on seven published headwords with `une amie` in four published sentences.
    // That checkability is what makes this a rule rather than a rote pair.
    type: 'tapTable',
    id: 's13-swap',
    title: 'Both The Une Kind',
    frSub: 'ma sœur · mon amie',
    layer: 'core',
    terms: ['beforeAVowel', 'whatIsOwned'],
    sheetId: 'sheet.a1.17.rules',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a1-17-vowel' },
    say: 'Left and right are the same kind of thing. Only one of them takes ma. Tap both and listen.',
    cols: ['takes ma', 'takes mon'],
    rows: [
      {
        cells: ['ma sœur', 'mon amie'],
        say: 'ma sœur, mon amie',
        detail: {
          title: 'Two things of the same kind',
          body: `${frOf('fr.a1.famille.279')} ${enOf('fr.a1.famille.279')} Both are the une kind, and you can check both on cards you have already seen. The only difference is the letter the second one starts with.`,
          say: frOf('fr.a1.famille.279'),
        },
      },
      {
        cells: ['ma maison', 'mon école'],
        say: 'ma maison, mon école',
        detail: {
          title: 'The same swap, on a word from the liaison lesson',
          body: `${frOf('fr.sons.liaisons.081')} ${enOf('fr.sons.liaisons.081')} Une école is the une kind and takes mon for the same reason. This sentence was in the corpus long before this lesson existed, so the rule is not a teaching device.`,
          say: frOf('fr.sons.liaisons.081'),
        },
      },
      {
        cells: ['sa trousse', 'mon amie'],
        say: 'sa trousse, mon amie',
        detail: {
          title: 'Both in one published sentence',
          body: `${frOf('fr.a1.dictee.188')} ${enOf('fr.a1.dictee.188')} Mon in front of a vowel and sa in front of a consonant, in one line nobody arranged. Note that sa tells you nothing: the English chose her, the French did not.`,
          say: frOf('fr.a1.dictee.188'),
        },
      },
    ],
  },

  {
    type: 'listening',
    id: 's14-ear',
    title: 'One Pair Your Ear Can Do',
    frSub: 'À l\'oreille',
    layer: 'core',
    terms: ['beforeAVowel', 'oneOrSeveral'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a1-17-ear' },
    // Exactly ONE genuine ear question exists in this lesson and it is the third
    // line. The first two are here to tell the learner, out loud, that their
    // ears are not the problem: mon ami and mon amie are homophones, and leur
    // and leurs are identical in front of a consonant. A learner who is not told
    // that spends months concluding something untrue about their own hearing.
    // No listenChoose question in the quiz tries to separate either pair, and
    // the batch, the merge and the test all assert that.
    say: 'Three pairs. Two of them are the same sound twice, and saying so is the point of this screen.',
    lines: [
      { fr: `${frOf('fr.a1.famille.256')} · ${frOf('fr.a1.famille.257')}`, en: 'these two are one sound, and only the page can tell them apart' },
      { fr: `${frOf('fr.a1.famille.282')} · ${frOf('fr.a1.famille.283')}`, en: 'these two are one sound as well: the s of leurs is silent here' },
      { fr: `${frOf('fr.a1.famille.280')} · ${frOf('fr.a1.famille.281')}`, en: 'this pair really does differ, in the vowel of the first syllable' },
    ],
    questions: [
      {
        q: 'mon ami and mon amie. How many sounds is that?',
        opts: ['two, and the second is longer', 'one, said twice', 'two, and the e is faintly there', 'it depends on the speaker'],
        correct: 1,
        why: 'One sound, said twice. The e on amie is written and never pronounced, so a recording of one is a recording of the other. There is nothing to listen for and no practice will produce it. If you need the difference, you read it.',
      },
      {
        q: 'leur fille and leurs filles, said out loud. What separates them?',
        opts: ['nothing at all', 'the s on leurs', 'the s on filles', 'a small pause'],
        correct: 0,
        why: 'Nothing at all. Both plural endings are silent here, so the two sentences are identical in the air. Leurs only becomes audible in front of a vowel, where its s wakes up as a z: leurs amis. In front of a consonant it never does.',
      },
      {
        q: 'mes amis and ses amis. What is different?',
        opts: [
          'the s at the end of mes and ses',
          'nothing, they are the same',
          'the vowel in the first syllable',
          'where the stress falls',
        ],
        correct: 2,
        why: 'The vowel in the first syllable, and that is all. Both carry the same z liaison into amis and the same stress, so the whole difference is one unstressed vowel. This is the one pair in this lesson your ear can be trained on.',
      },
    ],
  },

  {
    type: 'commonErrors',
    id: 's15-traps',
    // `swipe` and `size` are not decoration. MissionSection renders commonErrors
    // as its own swipe deck ONLY when `swipe` is set; without it the section
    // falls through to a path that drew a BLANK screen on sons.08 m22 and
    // a1.01 m5.
    swipe: true,
    size: 'lg',
    title: 'Five Traps',
    frSub: 'Cinq pièges',
    layer: 'core',
    terms: ['whatIsOwned', 'beforeAVowel', 'theSlot'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a1-17-traps' },
    say: `${REFRAME} Five things an English speaker writes in their first month, one per screen.`,
    errors: [
      {
        wrong: 'Saying « sa père » for her father.',
        right: 'Saying « son père ».',
        why: 'The highest-value one in the lesson. A father is the un kind and that is the whole decision. Picking sa because the owner is a woman is the English habit arriving intact, and it produces something that is not French at all.',
      },
      {
        wrong: 'Saying « son mère » for his mother.',
        right: 'Saying « sa mère ».',
        why: 'The same error going the other way, and the two arrive together. Once you are choosing from the owner you will get both of these wrong on alternate days, which is more confusing than getting them wrong consistently.',
      },
      {
        wrong: 'Writing « ma amie ».',
        right: 'Writing « mon amie ».',
        why: 'Two vowels colliding, and French will not have it. This is the same pressure that turned la amie into l\'amie, repaired a different way: nothing is cut, the word is swapped. Une amie is still the une kind throughout.',
      },
      {
        wrong: 'Writing « leurs enfants » about one child.',
        right: 'Writing « leur enfant ».',
        why: 'The s counts the children rather than the parents. There were already several owners before the s turned up, so it cannot be reporting on them. One child and any number of owners gives you leur.',
      },
      {
        wrong: 'Writing « le mon livre ».',
        right: 'Writing « mon livre ».',
        why: 'A possessive stands where le would have stood rather than beside it. English hides this, because the my in my book is not visibly replacing anything. Once you have chosen mon there is nothing else to add.',
      },
    ],
  },

  /* ── Act 5: leur or leurs, and the slot ────────────────────────────────── */

  {
    type: 'cardDeck',
    id: 's16-leur',
    title: 'The S That Counts Something Else',
    frSub: 'leur ou leurs',
    hint: 'Four cards on the one that looks like a different question.',
    render: 'deck',
    layer: 'core',
    size: 'lg',
    terms: ['oneOrSeveral'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a1-17-leur' },
    say: 'By the time you reach leur there are already several owners. So the s cannot be about them.',
    cards: [
      {
        label: 'one thing',
        head: 'leur',
        fr: frOf('fr.a1.famille.282'),
        sub: `${sub('leur fille')} · ${enOf('fr.a1.famille.282')}`,
        body: 'Several people, one daughter. Leur carries no s, and if you were counting owners that would look wrong, because there are clearly more than one of them.',
      },
      {
        label: 'more than one thing',
        head: 'leurs',
        fr: frOf('fr.a1.famille.283'),
        sub: `${sub('leurs filles')} · ${enOf('fr.a1.famille.283')}`,
        body: `The same several people, and now more than one daughter. That is the only thing that changed. ${REFRAME}`,
      },
      {
        label: 'in the wild, both ways',
        head: 'The corpus does it too',
        fr: `${frOf('fr.a1.cafe.093')} ${frOf('fr.a1.dictee.184')}`,
        sub: `${enOf('fr.a1.cafe.093')} · ${enOf('fr.a1.dictee.184')}`,
        body: 'Several customers and one order between each of them, so leur. Several students and several books each, so leurs. Neither sentence has any interest in how many people there are, and both have several.',
      },
      {
        label: 'and the other leur',
        head: 'A different word you will meet later',
        body: 'There is a second leur and it is not a possessive. It sits in front of a verb rather than in front of a thing. You will meet it later. The test is the same as always: a possessive has a thing behind it.',
      },
    ],
  },

  {
    type: 'cardDeck',
    id: 's17-slot',
    title: 'Nothing Else Goes In Front',
    frSub: 'La place de l\'article',
    hint: 'Three cards, and one of them saves a whole class of error.',
    render: 'deck',
    layer: 'core',
    size: 'lg',
    terms: ['theSlot', 'whatIsOwned'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a1-17-grid' },
    say: 'One card, and it prevents something no amount of grid practice touches.',
    cards: [
      {
        label: 'the slot',
        head: 'mon stands where le stood',
        fr: frOf('fr.a1.famille.284'),
        sub: `${sub('mon livre')} · ${enOf('fr.a1.famille.284')}`,
        body: 'Le livre is the book. Mon livre is my book. The two little words are competing for one position and only one of them can have it, so le mon livre is not a thing anybody would finish saying.',
      },
      {
        label: 'why English hides it',
        head: 'my is not replacing anything you can see',
        body: 'In English you say the book and my book, and my does not look like it took the place of the. So nothing in your first language warns you off putting both in. In French that position holds one word and always has.',
      },
      {
        label: 'what it saves you',
        head: 'Once you have chosen, you are finished',
        fr: `${frOf('fr.a1.famille.258')} · ${frOf('fr.a1.famille.269')}`,
        sub: `${enOf('fr.a1.famille.258')} · ${enOf('fr.a1.famille.269')}`,
        body: 'Neither of those has anything in front of the possessive and neither is missing anything. That is the whole rule, it holds for all fifteen words, and it is the only part of this lesson with no exceptions of any kind.',
      },
    ],
  },

  {
    type: 'reading',
    id: 's18-reading',
    title: 'The Group Photo',
    frSub: 'La photo de famille',
    layer: 'core',
    terms: ['whatIsOwned', 'beforeAVowel', 'oneOrSeveral'],
    // REQUIRED for the glossary to exist at all. MissionSection routes a reading
    // section to ReadingMission (and so to PassagePage, which draws the
    // underlines) only when this flag is set WITH questions.
    questionsInModal: true,
    say: 'One photo, four captions, and every one of them turns on a word two letters long.',
    // Paul's A1 rule: anything not inside « » is in English. ONE BLOCK, NO LINE
    // BREAKS. PassagePage splits on /(?<=[.!?»])\s+/ and an authored newline is
    // consumed as whitespace and silently discarded.
    text:
      'Somebody has printed a photo from the summer and pinned four captions round the edge of it, each one in a different hand, and between them they use most of what this lesson has covered. '
      + '« Voici ma sœur. » '
      + 'That one is written by the person on the left, about the person beside her, and it is the only caption on the board that tells you anything at all about who wrote it. '
      + 'Underneath it somebody has added a note about the two people at the back. '
      + '« Voici leurs parents. » '
      + 'Several people and two parents, so the s is there, and it is counting the parents rather than the children. '
      + 'A third caption is about the man on the right and the woman he is talking to, and it is the one that has caused an argument. '
      + '« Voici sa sœur. » '
      + 'Half the room reads that as his sister and half reads it as hers, and both halves are correct, because the sentence was never carrying that information. '
      + 'The last one is the shortest and is stuck on with a different colour of tape. '
      + '« Voici mon amie. »',
    // Every entry is matched by gloss.logic.ts, which folds punctuation and case
    // on BOTH sides and allows a phrase of up to four words (MAX_GLOSS_WORDS).
    // Longest match wins, WHICH MEANS AN ENTRY CAN BE SHADOWED OUT OF EXISTENCE:
    // a1.08 shipped two entries that could never underline anything because
    // every occurrence sat inside a longer key. Checked here by running the real
    // segmentSentence in the test and comparing matched KEYS rather than text.
    //
    // No entry is a prefix or substring of another: « ma sœur », « leurs
    // parents », « sa sœur » and « mon amie » do not overlap.
    glossary: [
      { word: 'ma sœur', en: 'my sister', note: 'A sister is the une kind, so ma. A man and a woman writing this caption would write the same two words.' },
      { word: 'leurs parents', en: 'their parents', note: 'Several owners and two parents. The s is counting the parents; the owners were already several without it.' },
      { word: 'sa sœur', en: 'his sister, or her sister', note: 'Both readings are correct and the French does not choose. This is the caption that started the argument.' },
      { word: 'mon amie', en: 'my friend', note: 'A woman friend, and une amie is the une kind. It takes mon anyway, to keep two vowels from colliding.' },
    ],
    questions: [
      { q: 'Two captions use a word beginning with m and one uses a word beginning with s. What decides between them?', a: 'Who is doing the owning, and that is the only thing in this lesson that ever depends on the owner. Ma and mon belong to the je row, sa belongs to the il and elle row. What the owner never decides is which shape within a row: that comes from the thing.' },
      { q: 'Why can the room not agree about the third caption?', a: 'Because sa sœur means his sister and her sister equally, and nothing in the sentence chooses. French marks what is owned rather than who owns it, so the information the room is arguing about was never written down. In English the writer would have been forced to pick one.' },
      { q: 'The last caption says mon amie about a woman. Is that a mistake?', a: 'No. Une amie is the une kind and would normally take ma, but ma amie would put two vowel sounds against each other and French avoids that. Mon is borrowed here only for the sound. Nothing about the friend has changed kind.' },
    ],
  },

  /* ── Act 6: prove it ───────────────────────────────────────────────────── */

  {
    type: 'vocabThemes',
    id: 's19-words',
    title: 'The Fifteen, Banked',
    frSub: 'Le vocabulaire',
    layer: 'core',
    terms: ['whatIsOwned', 'oneOrSeveral', 'beforeAVowel'],
    sheetId: 'sheet.a1.17.grid',
    say: 'Three decks. The ones that ask about the thing, the ones that do not, and the two that swap.',
    themes: [
      {
        title: 'they ask about the thing',
        cards: GENDERED_OWNERS.flatMap((o) => o.forms.map((f) => ({
          fr: f, sub: sub(f), en: `${o.en}, ${o.forms.indexOf(f) === 0 ? 'the un kind' : o.forms.indexOf(f) === 1 ? 'the une kind' : 'more than one'}`,
        }))),
      },
      {
        title: 'they ask nothing',
        cards: UNGENDERED_OWNERS.flatMap((o) => [
          { fr: o.forms[0], sub: sub(o.forms[0]), en: `${o.en}, one thing of either kind` },
          { fr: o.forms[2], sub: sub(o.forms[2]), en: `${o.en}, more than one thing` },
        ]),
      },
      {
        title: 'the pair that sounds identical',
        cards: [
          { fr: 'mon ami', sub: sub('mon ami'), en: 'my friend, a man' },
          { fr: 'mon amie', sub: sub('mon amie'), en: 'my friend, a woman. Same sound, same respelling' },
          { fr: 'mes amis', sub: sub('mes amis'), en: 'my friends' },
          { fr: 'ses amis', sub: sub('ses amis'), en: 'his friends, or hers. One vowel from mes amis' },
        ],
      },
    ],
  },

  {
    type: 'flashcards',
    id: 's20-flash',
    title: 'Flip and Recall',
    frSub: 'Retournez la carte',
    render: 'deck',
    layer: 'core',
    say: 'English on the front, and every front names both the owner and the thing. Say the French before you flip.',
    cards: [
      ...PARADIGM.map((c) => ({ front: c.en, back: c.fr, say: c.fr })),
      ...CONTRASTS.map((c) => ({ front: c.en, back: c.fr, say: c.fr })),
      { front: 'my friend, a man', back: 'mon ami', say: 'mon ami' },
      { front: 'my friend, a woman', back: 'mon amie', say: 'mon amie' },
    ],
  },

  {
    type: 'dictation',
    id: 's21-dictation',
    title: 'Spell What You Hear',
    frSub: 'La dictée',
    layer: 'core',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], maxPlays: 4 },
    // Every target is short enough to stay in LETTERS mode, which is the only
    // mode where the learner writes the possessive rather than tapping it as a
    // pre-spelled tile. Measured through the real dicteeMode in the batch, the
    // merge and the test. See the header.
    say: 'Five lines. On two of them the word you write is one you have to work out rather than hear.',
    itemIds: DICTATION_IDS,
  },

  {
    type: 'practice',
    id: 's22-speak',
    title: 'Say It Out Loud',
    frSub: 'À voix haute',
    layer: 'core',
    audio: { mode: 'mic', lang: 'fr-FR' },
    // The only practice mission in the lesson, deliberately: sons.06 ships two
    // doing the same job and it reads as a repeat. `practice.skill` is authored
    // and read by no component: PracticeVFView takes itemIds and nothing else.
    // NOT ONE BARE POSSESSIVE IS IN HERE. See the note on SPEAK_IDS.
    say: 'Twenty-nine lines, and not one of them is a possessive on its own. The word only means anything with a thing behind it.',
    skill: 'speak',
    itemIds: SPEAK_IDS,
  },

  {
    type: 'scenario',
    id: 's23-scenario',
    title: 'The Same Party, Going Better',
    frSub: 'La même soirée',
    layer: 'core',
    terms: ['whatIsOwned', 'beforeAVowel'],
    say: 'One exchange and you hold up your half. Every turn is a possessive with something behind it.',
    setting: 'The same back room, a fortnight later. Hugo is on the door again and this time he asks first.',
    // Every turn carries `userEn` and at least two `alts`, which
    // scenario.logic.ts requires of the whole seed. A reveal with no translation
    // shows the learner the one sentence comprehension matters on and asks them
    // to read it; a single accepted answer makes a conversation a cloze test.
    //
    // Apostrophes are straight throughout. The suite fails a conversation that
    // mixes straight and curly apostrophes in one bubble stack.
    turns: [
      {
        ai: 'Te revoilà ! Tu es venue accompagnée ce soir ?',
        en: 'You are back! Did you come with somebody tonight?',
        user: 'Oui. Voici ma soeur.',
        userEn: 'Yes. This is my sister.',
        alts: [
          { fr: 'Oui, je suis venue avec ma soeur.', en: 'Yes, I came with my sister.' },
          { fr: 'Oui. C\'est ma soeur.', en: 'Yes. This is my sister.' },
        ],
      },
      {
        ai: 'Enchante ! Et Amelie, elle vient aussi ?',
        en: 'Nice to meet you! And Amelie, is she coming too?',
        user: 'Elle arrive avec son frere.',
        userEn: 'She is coming with her brother.',
        alts: [
          { fr: 'Oui, avec son frere.', en: 'Yes, with her brother.' },
          { fr: 'Elle vient avec son frere.', en: 'She is coming with her brother.' },
        ],
      },
      {
        ai: 'Son frere ? Je ne le connais pas. Il vient avec quelqu\'un ?',
        en: 'Her brother? I do not know him. Is he coming with anyone?',
        user: 'Il vient avec mon amie.',
        userEn: 'He is coming with my friend.',
        alts: [
          { fr: 'Avec mon amie, oui.', en: 'With my friend, yes.' },
          { fr: 'Il arrive avec mon amie.', en: 'He is arriving with my friend.' },
        ],
      },
      {
        ai: 'Ah, et les parents d\'Amelie, ils sont la aussi ?',
        en: 'Ah, and Amelie\'s parents, are they here as well?',
        user: 'Non, leurs parents restent a la maison.',
        userEn: 'No, their parents are staying at home.',
        alts: [
          { fr: 'Non, leurs parents ne viennent pas.', en: 'No, their parents are not coming.' },
          { fr: 'Non. Ils restent chez eux.', en: 'No. They are staying at home.' },
        ],
      },
      {
        ai: 'Bon. Vous etes combien alors ? Je note vos noms.',
        en: 'Right. How many of you are there then? I am writing down your names.',
        user: 'Nous sommes cinq. Voici nos noms.',
        userEn: 'There are five of us. Here are our names.',
        alts: [
          { fr: 'Cinq. Je vous donne nos noms.', en: 'Five. I will give you our names.' },
          { fr: 'Nous sommes cinq personnes.', en: 'There are five of us.' },
        ],
      },
    ],
  },

  {
    type: 'reviewDeck',
    id: 's24-review',
    title: 'The Whole Thing, One Deck',
    frSub: 'Révision',
    render: 'deck',
    layer: 'core',
    terms: ['whatIsOwned', 'beforeAVowel', 'oneOrSeveral'],
    say: 'Rate each card as again, hard or easy. The ones you mark again come back.',
    cards: [
      { front: 'Marie is talking about her own father. Which word?', back: 'son père. A father is the un kind, and Marie being a woman changes nothing.', say: 'son père' },
      { front: 'Marc is talking about his own mother. Which word?', back: 'sa mère. A mother is the une kind, and Marc being a man changes nothing.', say: 'sa mère' },
      { front: 'You want to say: my sister.', back: `${frOf('fr.a1.famille.259')} The une kind, so ma.`, say: frOf('fr.a1.famille.259') },
      { front: 'You want to say: my brother.', back: `${frOf('fr.a1.famille.258')} The un kind, so mon.`, say: frOf('fr.a1.famille.258') },
      { front: 'You want to say: my parents.', back: `${frOf('fr.a1.famille.260')} More than one, so the kind is never asked.`, say: frOf('fr.a1.famille.260') },
      { front: 'What does sa sœur tell you about the owner?', back: 'Nothing at all. It means his sister and her sister equally.', say: 'sa sœur' },
      { front: 'A woman friend, and the word for her is the une kind. Why mon amie?', back: `${frOf('fr.a1.famille.278')} Ma amie would put two vowels together, so the word swaps.`, say: frOf('fr.a1.famille.278') },
      { front: 'Does votre swap in front of a vowel the way mon does?', back: `${frOf('fr.a1.dictee.210')} No. Only mon, ton and son ever swap.`, say: frOf('fr.a1.dictee.210') },
      { front: 'Several owners, one daughter.', back: `${frOf('fr.a1.famille.282')} leur, with no s.`, say: frOf('fr.a1.famille.282') },
      { front: 'Several owners, several daughters.', back: `${frOf('fr.a1.famille.283')} leurs. The s counts the daughters.`, say: frOf('fr.a1.famille.283') },
      { front: 'You want to say: our parents.', back: `${frOf('fr.a1.famille.269')} nos, and the kind never came into it.`, say: frOf('fr.a1.famille.269') },
      { front: 'You want to say: your parents, politely.', back: `${frOf('fr.a1.famille.272')} vos, which is the form tables lose.`, say: frOf('fr.a1.famille.272') },
      { front: 'Can you say le mon livre?', back: `No. ${frOf('fr.a1.famille.284')} The possessive is standing where le would have stood.`, say: frOf('fr.a1.famille.284') },
      { front: 'mon ami and mon amie, out loud.', back: 'One sound, said twice. Only the page can tell them apart.', say: 'mon ami, mon amie' },
      { front: 'What should you look at before saying a possessive?', back: `${REFRAME} Which kind, and how many.`, say: 'mon, ma, mes' },
    ],
  },

  {
    type: 'progressCheck',
    id: 's25-progress',
    title: 'Where You Stand',
    frSub: 'Votre progression',
    // The prose carries no counts. Every figure is in `stats`, derived from the
    // journey itself, and saying a number twice on one card is two chances to be
    // wrong and one card that reads as padded.
    say: 'One screen before the exam, so you know what you are walking into.',
    body: 'You have watched an evening go past with somebody being introduced as the wrong person, and nothing in the sentence that caused it was wrong. Since then you have taken a grid apart into the half that asks you a question and the half that does not, met a word that borrows the other shape purely to keep two vowels from running together, and found an s that counts something other than what it looks like it counts. Along the way you have seen the same French phrase carry two English meanings on one screen, which is the thing this whole lesson is built around. What is left tells you whether it stuck. Each round is tied to one of the mistakes this lesson exists to stop, and failing a round gets you its drill before the next one starts. The drill is the teaching, not the punishment.',
    // Filled immediately after SECTIONS is built, from the journey itself.
    stats: [],
  },

  {
    type: 'quiz',
    id: 's26-quiz',
    title: 'The Exam',
    frSub: 'L\'examen',
    layer: 'core',
    passMark: 70,
    roundFailThreshold: 60,
    say: 'Six rounds. Miss too many in a round and you get that round\'s drill before the next one starts.',
    // EVERY STEM NAMES BOTH THE OWNER AND THE THING. This is the assertion the
    // brief calls the most important sentence in its quiz section, and it is
    // right: "mon or ma?" is unanswerable, and a possessive question missing
    // either half tests nothing while looking exactly like one that does. The
    // batch, the merge and the test all check it, over every question, by
    // requiring an owner marker (my/your/his/her/our/their, or a named person)
    // AND a thing.
    //
    // QuizDeckView shuffles the options of every closed question per attempt, so
    // no option refers to a position and no two options within a question are
    // equal. `quiz-spread` still caps any authored `correct` slot at 40% of
    // closed questions, which is easy to breach when the whole answer space is
    // fifteen short words, so the indices below are spread on purpose.
    rounds: [
      {
        id: 'r1-whose-is-it',
        label: 'Whose is it',
        // The FIRST target is the one whose drill fires: drillForRound walks a
        // round's targets and stops at the first that resolves. Every drill this
        // lesson authors is the first resolving target of exactly one round, and
        // the batch, the merge and the test all assert it.
        targets: ['err-owner-not-thing', 'err-wrong-form'],
        say: 'The inversion, five times.',
        questions: [
          {
            q: 'Marie is talking about her own father. Which word does she use?',
            format: 'mcq',
            opts: ['son', 'sa', 'ses', 'ma'],
            correct: 0,
            why: 'son. A father is the un kind, and that is the whole decision. Marie being a woman never enters into it. This is the most common possessive error an English speaker makes and it survives because it is never corrected.',
            ref: 's03-inversion',
          },
          {
            // SPOKEN rather than picked, because sa and son genuinely differ out
            // loud: this is one of the few places in the lesson where the ear
            // can carry a decision, and it is worth using once.
            q: 'Marc is talking about his own mother. Say the two words he uses.',
            format: 'speak',
            target: 'sa mère',
            accept: ['sa mère', 'sa mere'],
            answer: 'sa mère',
            why: 'sa mère. A mother is the une kind. This is the same error as the question before it, arriving from the other direction, and the two turn up together: once you are choosing from the owner you get both wrong on alternate days.',
            ref: 's03-inversion',
          },
          {
            q: 'You hear « Voici sa sœur. » Who does the sister belong to?',
            format: 'mcq',
            opts: [
              'A man, because sa is the masculine form',
              'A woman, because a sister is feminine',
              'Either. The sentence does not say',
              'Whoever is being spoken to',
            ],
            correct: 2,
            why: `Either. ${REFRAME} Sa is chosen by the sister and reports nothing about the owner, so his sister and her sister are the same three words. French has other ways to say whose, and this is not one.`,
            ref: 's04-hisher',
          },
          {
            q: 'You want to say, in French: my brother. Write it.',
            format: 'typeIn',
            accept: ['mon frère', 'mon frere'],
            answer: 'mon frère',
            why: 'mon frère. A brother is the un kind. Written as a whole phrase rather than as a bare word, because a two-letter answer typed on its own is a coin toss rather than a test.',
            ref: 's05-three',
          },
          {
            q: 'Somebody writes « Elle parle avec son mère » about her own mother. Fix the sentence.',
            format: 'errorSpot',
            accept: ['Elle parle avec sa mère.', 'Elle parle avec sa mere', 'elle parle avec sa mère'],
            answer: 'Elle parle avec sa mère.',
            why: 'sa mère. The writer chose son because elle is a woman, which is the English habit exactly. A mother is the une kind and the owner was never being reported on.',
            ref: 's15-traps',
          },
        ],
      },
      {
        id: 'r2-the-three',
        label: 'Which of the three',
        targets: ['err-wrong-form', 'err-owner-not-thing'],
        say: 'The right shape for the thing in front of you.',
        questions: [
          {
            q: 'You want to say: my parents. Which word goes in front?',
            format: 'mcq',
            opts: ['mon', 'ma', 'mes', 'mon or ma, depending'],
            correct: 2,
            why: 'mes. More than one thing, so the question about the kind is never asked. That is true for every owner in the lesson and it removes a third of the grid at a stroke.',
            ref: 's07-table-gender',
          },
          {
            q: 'You want to say, to a friend: your sister. Which word?',
            format: 'mcq',
            opts: ['ta', 'ton', 'tes', 'votre'],
            correct: 0,
            why: 'ta. A sister is the une kind, and a friend takes the tu row. Votre would be correct French said to somebody you were being careful with, but it belongs to a different row rather than to a different kind of thing.',
            ref: 's07-table-gender',
          },
          {
            q: 'You want to say: our sister. Which word?',
            format: 'mcq',
            opts: ['nos', 'notre', 'nôtre', 'notra'],
            correct: 1,
            why: 'notre, exactly as it was for our brother. This row never asks which kind the thing is, so its first two cells are one word and there is one decision fewer to make.',
            ref: 's09-table-relief',
          },
          {
            q: 'You want to say, politely: your parents. Write the two words.',
            format: 'typeIn',
            accept: ['vos parents'],
            answer: 'vos parents',
            why: 'vos parents. Vos is the plural of votre and it counts the parents rather than measuring the politeness. It is also the form most tables quietly leave out, which is why it is worth writing rather than picking.',
            ref: 's09-table-relief',
          },
          {
            q: 'Somebody writes « Voici notre parents. » about their own two parents. Fix the sentence.',
            format: 'errorSpot',
            accept: ['Voici nos parents.', 'voici nos parents', 'Voici nos parents'],
            answer: 'Voici nos parents.',
            why: 'nos parents. More than one thing, so the plural of notre. Nos and vos are the two cells a grid looks complete without, which is why this lesson asks about each of them twice.',
            ref: 's09-table-relief',
          },
        ],
      },
      {
        id: 'r3-the-ear',
        label: 'What your ear can do',
        targets: ['err-hears-a-difference', 'err-wrong-form'],
        say: 'One real pair, and two that are not pairs at all.',
        questions: [
          {
            q: 'Listen. Is this my friends or his friends?',
            format: 'listenChoose',
            audio: { mode: 'tts', lang: 'fr-FR', clip: 'mes amis' },
            opts: ['mes amis', 'ses amis', 'tes amis', 'les amis'],
            correct: 0,
            why: 'mes amis. This is the one genuine listening question in the lesson: mes and ses carry the same z liaison into amis and the same stress, so the whole difference is the vowel of the first syllable.',
            ref: 's14-ear',
          },
          {
            q: 'You hear somebody say my friend out loud. Can you tell whether the friend is a man or a woman?',
            format: 'mcq',
            opts: [
              'Yes, mon amie is slightly longer',
              'Yes, you can hear the e at the end',
              'No. Mon ami and mon amie are the same sound',
              'Only if the speaker slows down',
            ],
            correct: 2,
            why: 'No. They are homophones: the e on amie is written and never pronounced, so one recording is the other. Slowing it down adds nothing, because there is nothing in the signal to slow down.',
            ref: 's14-ear',
          },
          {
            q: 'Two parents say « Voici leur fille. » and then « Voici leurs filles. » What separates their daughter from their daughters out loud?',
            format: 'mcq',
            opts: ['the s on leurs', 'nothing at all', 'the s on filles', 'the speaker pauses'],
            correct: 1,
            why: 'Nothing at all. Both plural endings are silent in front of a consonant, so the two sentences are identical in the air. Leurs only becomes audible in front of a vowel, where its s wakes as a z: leurs amis.',
            ref: 's14-ear',
          },
          {
            q: 'You want to say: his friends, meaning several of them. Write the two words.',
            format: 'typeIn',
            accept: ['ses amis'],
            answer: 'ses amis',
            why: 'ses amis. More than one thing, so the kind is never asked, and the s of ses wakes up as a z in front of the vowel. It also means her friends, which the French will not tell you either way.',
            ref: 's14-ear',
          },
        ],
      },
      {
        id: 'r4-before-a-vowel',
        label: 'In front of a vowel',
        targets: ['err-vowel-collision', 'err-owner-not-thing'],
        say: 'The swap, and how far it reaches.',
        questions: [
          {
            // A WHOLE PHRASE rather than a bare form. The brief is right that
            // typeIn looks strong here and is weak: fold() strips accents and
            // case, and a learner guesses `ma` against `mon` at even odds. Two
            // words is a test; two letters is a coin toss.
            q: 'You want to say: my friend, about a woman. Write the two words.',
            format: 'typeIn',
            accept: ['mon amie'],
            answer: 'mon amie',
            why: 'mon amie. Une amie is the une kind and would normally take ma, but ma amie would put two vowel sounds together and French avoids that. The word is swapped rather than cut, which is the difference from l\'amie.',
            ref: 's13-swap',
          },
          {
            q: 'Somebody writes « Voici ma amie. » Fix it.',
            format: 'errorSpot',
            accept: ['Voici mon amie.', 'voici mon amie', 'Voici mon amie'],
            answer: 'Voici mon amie.',
            why: 'mon amie. Two vowels colliding, repaired by swapping the word rather than cutting it. You have seen the other repair twice: la amie became l\'amie, where the little word lost its vowel instead.',
            ref: 's12-vowel',
          },
          {
            q: 'You want to say, politely: your address. Does votre change in front of the vowel?',
            format: 'mcq',
            opts: [
              'Yes, it becomes votr\'',
              'Yes, it becomes vos',
              'No. Votre never changes for anything',
              'Only in writing',
            ],
            correct: 2,
            why: 'No. The swap reaches mon, ton and son and stops there. Notre, votre and leur never change, which is why « Vous écrivez votre adresse. » looks exactly as you would expect it to.',
            ref: 's12-vowel',
          },
          {
            q: 'You want to say my sister and my friend, about a woman. Both nouns are the une kind, so why does only one of them take ma?',
            format: 'mcq',
            opts: [
              'Because amie is not really feminine',
              'Because amie starts with a vowel',
              'Because a friend is not family',
              'Because amie can also describe a man',
            ],
            correct: 1,
            why: 'Because amie starts with a vowel. That is the only difference between the two, and nothing about the kind of thing has changed: une amie is the une kind before and after the swap, and everything else in the sentence still agrees that way.',
            ref: 's13-swap',
          },
        ],
      },
      {
        id: 'r5-leur-or-leurs',
        label: 'leur or leurs',
        targets: ['err-leur-plural', 'err-wrong-form'],
        say: 'One s, and it is not counting who you think.',
        questions: [
          {
            q: 'Two parents, and one daughter between them. Which word for their daughter?',
            format: 'mcq',
            opts: ['leurs', 'leur', 'ses', 'sa'],
            correct: 1,
            why: 'leur. Two owners and one daughter, and the s counts daughters. The owners were already several before any s turned up, so it could never have been reporting on them.',
            ref: 's16-leur',
          },
          {
            q: 'Two parents, and three daughters between them. Which word for their daughters?',
            format: 'mcq',
            opts: ['leurs', 'leur', 'nos', 'ses'],
            correct: 0,
            why: 'leurs. Nothing about the parents changed between this question and the one before it. Only the daughters did, and that is the only thing the s has ever been about.',
            ref: 's16-leur',
          },
          {
            q: 'You want to say: their books, about a class of students. Write the two words.',
            format: 'typeIn',
            accept: ['leurs livres'],
            answer: 'leurs livres',
            why: 'leurs livres. Several books, so the s. A whole class of students is several owners either way and would not have changed the answer if there had been one book each.',
            ref: 's16-leur',
          },
          {
            q: 'Somebody writes « Les clients attendent leurs commande. » about one order each. Fix it.',
            format: 'errorSpot',
            accept: ['Les clients attendent leur commande.', 'les clients attendent leur commande'],
            answer: 'Les clients attendent leur commande.',
            why: 'leur commande. The writer put the s on because les clients is plural, which is exactly the trap. Count the orders rather than the customers: one each, so no s.',
            ref: 's16-leur',
          },
        ],
      },
      {
        id: 'r6-the-slot',
        label: 'Nothing else in front',
        targets: ['err-article-slot', 'err-leur-plural'],
        say: 'Two words competing for one position.',
        questions: [
          {
            q: 'You want to say: my book. Which of these is French?',
            format: 'mcq',
            opts: ['le mon livre', 'mon le livre', 'un mon livre', 'mon livre'],
            correct: 3,
            why: 'mon livre. A possessive stands where le would have stood rather than beside it, so the two never appear together. Once you have chosen mon there is nothing else to put in front of the noun.',
            ref: 's17-slot',
          },
          {
            q: 'Why does English not warn you off writing le mon livre for my book?',
            format: 'mcq',
            opts: [
              'English has the same rule and hides it',
              'The my in my book is not visibly replacing anything',
              'English allows the my book',
              'Because my is not a real word class',
            ],
            correct: 1,
            why: 'Because my is not visibly replacing anything. You say the book and my book, and nothing on the page shows that the two little words are competing for the same position, so nothing in your first language stops you putting both in.',
            ref: 's17-slot',
          },
          {
            q: 'You want to say: this is my book. Say it out loud.',
            format: 'speak',
            target: 'C\'est mon livre.',
            accept: ['C\'est mon livre.', 'c\'est mon livre'],
            answer: 'C\'est mon livre.',
            why: 'C\'est mon livre. Nothing in front of mon, and nothing missing either. A book is the un kind, so mon, and the possessive fills the slot on its own.',
            ref: 's17-slot',
          },
          {
            q: 'You want to say: our parents. Say it out loud.',
            format: 'speak',
            target: 'Voici nos parents.',
            accept: ['Voici nos parents.', 'voici nos parents'],
            answer: 'Voici nos parents',
            why: 'Voici nos parents. More than one thing, so nos rather than notre, and the kind of thing never came into it. Nos is one of the two forms this lesson asks about twice on purpose.',
            ref: 's09-table-relief',
          },
        ],
      },
    ],
  },

  {
    type: 'roundup',
    id: 's27-roundup',
    title: 'What You Can Do Now',
    frSub: 'Ce que vous savez faire',
    say: 'Four things, and then what carries into the next unit.',
    body: 'You can pick any of the fifteen words by looking at the thing rather than at the person, use all six owners including the two forms most tables lose, put mon in front of a vowel without it looking like a mistake, and tell leur from leurs by counting the right thing. The habit underneath all of that is the one worth keeping: French tends to mark what is being talked about rather than who is talking. You will meet a second leur in a later unit which is a completely different word, and a way of saying mine without naming the thing a good deal after that. Neither is needed for anything here.',
    points: [
      `${REFRAME} Which kind is the thing, and is there one or several.`,
      'son and sa say nothing at all about the owner, and no French sentence makes them.',
      'mon, ton and son borrow the other shape in front of a vowel. Notre, votre and leur never change.',
      'The s on leurs counts the things. There were already several owners without it.',
    ],
  },
];

/* ─── The progress card counts the journey rather than restating it ────────
 *
 * Derived here rather than typed by hand. Every figure is a fact about the array
 * directly above, and a display string is validated against nothing, so the
 * first mission added would have left the card confidently wrong with the whole
 * suite still green. It throws rather than degrades.                          */
{
  const ix = SECTIONS.findIndex((s) => (s as { id?: string }).id === 's25-progress');
  const card = SECTIONS[ix];
  const quiz = SECTIONS.find((s) => s.type === 'quiz');
  if (!card || card.type !== 'progressCheck' || !quiz || quiz.type !== 'quiz') {
    throw new Error('a1.17.l1: the progress card or the quiz is missing, so the card cannot count what is not there');
  }
  card.stats = [
    { k: 'Words learned', v: String(THE_FIFTEEN.length) },
    { k: 'Owners covered', v: String(OWNERS.length) },
    { k: 'Missions done', v: `${ix} of ${SECTIONS.length}` },
    { k: 'Exam rounds ahead', v: String(quiz.rounds?.length ?? 0) },
  ];
}

/* ─── Acts ─────────────────────────────────────────────────────────────────
 *
 * Six, and the weighting is the argument of the lesson. The brief is explicit
 * that "the weight belongs on choosing the form, not on displaying the grid",
 * and the count bears that out: ONE section shows the nine gendered cells and
 * one shows the six ungendered ones, while five sections make the learner
 * decide (s06, s10, s11, plus the drills behind the quiz).
 *
 * `estScreens` is what the mission actually costs rather than a round number,
 * because it is divided by the rest points to check no stretch runs past the
 * checkpoint-spacing limit of 22.                                            */

const ACTS: LessonAct[] = [
  {
    id: 'act1',
    title: 'Whose is it',
    sections: ['s01-scene', 's02-goals', 's03-inversion', 's04-hisher'],
    milestone: 'You have watched an hour go by with somebody introduced as the wrong person.',
    estScreens: 26,
    restPoints: ['s01-scene/after-break'],
  },
  {
    id: 'act2',
    title: 'mon, ma, mes',
    sections: ['s05-three', 's06-choose', 's07-table-gender'],
    milestone: 'Three words for one English one, and the thing picks between them.',
    estScreens: 22,
    restPoints: ['s06-choose/halfway'],
  },
  {
    id: 'act3',
    title: 'The rest, and the relief',
    sections: ['s08-son', 's09-table-relief', 's10-sort', 's11-check'],
    milestone: 'All six owners, and the bottom three ask you nothing at all.',
    estScreens: 28,
    restPoints: ['s10-sort/halfway'],
  },
  {
    id: 'act4',
    title: 'Before a vowel',
    sections: ['s12-vowel', 's13-swap', 's14-ear', 's15-traps'],
    milestone: 'mon amie, and the third time you have watched French dodge two vowels.',
    estScreens: 26,
    restPoints: ['s12-vowel/halfway', 's15-traps/halfway'],
  },
  {
    id: 'act5',
    title: 'leur, leurs, and the slot',
    sections: ['s16-leur', 's17-slot', 's18-reading'],
    milestone: 'An s that counts the things, and a position that only holds one word.',
    estScreens: 20,
    restPoints: ['s16-leur/halfway'],
  },
  {
    id: 'act6',
    title: 'Prove it',
    sections: [
      's19-words', 's20-flash', 's21-dictation', 's22-speak', 's23-scenario',
      's24-review', 's25-progress', 's26-quiz', 's27-roundup',
    ],
    milestone: 'Lesson complete. Everything here carries straight into describing people and places.',
    estScreens: 98,
    restPoints: [
      's20-flash/halfway', 's22-speak/halfway', 's24-review/halfway',
      's26-quiz/after-r2', 's26-quiz/after-r4',
    ],
  },
];

/* ─── Deck tranches ────────────────────────────────────────────────────────
 *
 * One slice per act, index-aligned. An item is released the act it is TAUGHT,
 * not the act it is first mentioned: releasing the whole set at mission one
 * turns the flashcard hub into a wall on the morning the learner is least able
 * to read it. Act 6 releases nothing new; it applies and tests what acts 1 to 5
 * handed over.
 *
 * `once()` is not decoration. The groups above are built for TEACHING and they
 * legitimately overlap: the scene's two sentences are also cells of the grid.
 * The SRS keys on (itemId, modality), so releasing one card from two tranches
 * would take two ratings for one sentence. The first tranche to name an id keeps
 * it and the rest drop it, which is also the pedagogically right answer: an item
 * belongs to the act that taught it.                                          */

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

const rowIds = (who: string) => rowFor(who).map((c) => c.id);

const DECK_TRANCHE: string[][] = [
  // Act 1: the his/her pair the scene turns on and the table shows, plus the
  // il/elle row of the paradigm, which s04-hisher puts in its detail cards.
  // NOT the fifteen words: they are taught in acts 2 and 3, and a card released
  // before its mission is a card the learner is asked to rate before they have
  // met it.
  //
  // fr.a1.famille.083 and fr.a1.dictee.001 WERE in this slice and were moved
  // out. Both are published sentences carrying the inversion and both looked
  // like act 1 material, and neither is SHOWN until act 2 and act 3 respectively.
  // a1-17-possessifs.test.ts caught it: the check is not "does this item belong
  // to this idea" but "has the learner seen it by the end of this act".
  once([...HIS_HER, ...rowIds('il / elle')]),
  // Act 2: the je and tu rows, the three grid nouns whose gender the learner
  // checks, the six headwords those two rows are made of, and the one published
  // sentence carrying mon AND ma on one owner, which s05-three shows.
  once([
    ...rowIds('je'), ...rowIds('tu'), ...GRID_NOUN_IDS, 'fr.a1.famille.083',
    ...['mon', 'ma', 'mes', 'ton', 'ta', 'tes'].map((f) => HEADWORD_OF[f]),
  ]),
  // Act 3: the bottom half of the grid, its six headwords including the three
  // this lesson authored, the son/sa/ses headwords the son act finally explains,
  // the two published sentences s08-son shows, and the four that put notre, nos,
  // votre and vos in ordinary French.
  once([
    ...rowIds('nous'), ...rowIds('vous'), ...rowIds('ils / elles'),
    ...['son', 'sa', 'ses', 'notre', 'nos', 'votre', 'vos', 'leur', 'leurs'].map((f) => HEADWORD_OF[f]),
    'fr.a1.dictee.001', 'fr.a1.sports-et-loisirs.081',
    'fr.a1.maison.101', 'fr.a1.cafe.132', 'fr.a1.dictee.210', 'fr.a1.dictee.321',
  ]),
  // Act 4: the vowel rule and the ear pair, released together with the two
  // homophone cards. Releasing mon ami without mon amie would put a card in the
  // hub that the lesson's whole claim about it is a comparison.
  once([...VOWEL, ...EAR, ...HOMOPHONE_PAIR, 'fr.sons.liaisons.081', 'fr.a1.dictee.188']),
  // Act 5: leur against leurs and the slot, with the two published rows that
  // show the same count in the wild.
  once([...LEUR_LEURS, ...SLOT, 'fr.a1.cafe.093', 'fr.a1.dictee.184']),
  // Act 6: nothing new. Act 6 tests what acts 1 to 5 handed over, which is why
  // this slice is empty rather than padded.
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
    throw new Error(`a1.17.l1: item(s) taught but released by no tranche: ${never.join(', ')}`);
  }
  const stray = [...released].filter((id) => !taught.has(id));
  if (stray.length) {
    throw new Error(`a1.17.l1: tranche(s) release item(s) the lesson does not teach: ${stray.join(', ')}`);
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
 * a1.05 shipped two unreachable drills for exactly this reason and a first draft
 * of a1.07 shipped a third. This lesson does not reopen it.
 *
 * `err-owner-not-thing` and `err-wrong-form` look like one error and are two.
 * The first is choosing from the owner at all, which produces « sa père ». The
 * second is choosing from the thing and getting the thing wrong, which produces
 * « mon sœur ». A learner who has fixed the first still makes the second, and
 * merging them would remediate only one.                                      */

const ERROR_TRIGGERS: ErrorTrigger[] = [
  {
    id: 'err-owner-not-thing',
    description: 'Picks the possessive from the owner\'s sex rather than from the thing: writes sa père for her father and son mère for his. The default error, and the one every English speaker starts with.',
    detectOn: ['s03-inversion', 's04-hisher', 's06-choose', 's11-check', 's26-quiz/r1-whose-is-it'],
    drill: 'drill-what-is-owned',
    retest: 'retest-what-is-owned',
  },
  {
    id: 'err-wrong-form',
    description: 'Asks the right question and gets the answer wrong: reaches for the wrong cell of the grid, most often between mon and mes or between notre and nos.',
    detectOn: ['s05-three', 's07-table-gender', 's09-table-relief', 's10-sort', 's26-quiz/r2-the-three'],
    drill: 'drill-the-grid',
    retest: 'retest-the-grid',
  },
  {
    id: 'err-hears-a-difference',
    description: 'Believes mon ami and mon amie, or leur and leurs, must be audibly different and concludes their listening is at fault. Costs confidence rather than accuracy, which is why it gets its own drill.',
    detectOn: ['s14-ear', 's26-quiz/r3-the-ear'],
    drill: 'drill-ear',
    retest: 'retest-ear',
  },
  {
    id: 'err-vowel-collision',
    description: 'Writes ma amie, or repairs it the wrong way with l\'amie or m\'amie. Also applies the swap where it does not reach, giving votr\' adresse.',
    detectOn: ['s12-vowel', 's13-swap', 's15-traps', 's26-quiz/r4-before-a-vowel'],
    drill: 'drill-vowel',
    retest: 'retest-vowel',
  },
  {
    id: 'err-leur-plural',
    description: 'Puts the s on leur because the owners are plural. The one error in the lesson where the learner is counting carefully and counting the wrong thing.',
    detectOn: ['s09-table-relief', 's16-leur', 's26-quiz/r5-leur-or-leurs'],
    drill: 'drill-leur',
    retest: 'retest-leur',
  },
  {
    id: 'err-article-slot',
    description: 'Writes le mon livre. Invisible to grid practice, because every cell of the grid is correct in isolation and the error is about what sits beside it.',
    detectOn: ['s05-three', 's17-slot', 's15-traps', 's26-quiz/r6-the-slot'],
    drill: 'drill-slot',
    retest: 'retest-slot',
  },
];

const DRILLS: LessonDrill[] = [
  {
    id: 'drill-what-is-owned',
    title: 'What is being owned?',
    format: 'sort',
    // Item ids, not display strings: a drill scores against the corpus, so it
    // plays the same audio and reads the same spelling as every other card that
    // teaches these. Passing display strings here validates as broken ids.
    //
    // Sorted by THE KIND OF THING, deliberately, with owners of both sexes
    // scattered across both buckets. A learner sorting these by the owner gets
    // roughly half of them wrong, which is the feedback the drill exists for.
    buckets: ['the un kind', 'the une kind'],
    items: [
      'fr.a1.famille.258', // Voici mon frère.
      'fr.a1.famille.259', // Voici ma sœur.
      'fr.a1.famille.264', // Voici son frère.
      'fr.a1.famille.265', // Voici sa sœur.
      'fr.a1.famille.261', // Voici ton frère.
      'fr.a1.famille.262', // Voici ta sœur.
    ],
    coach: 'Do not look at who is speaking. Look at the word after the possessive and ask which kind of thing it is. A brother is one kind and a sister is the other, and that is the whole sort.',
  },
  {
    id: 'retest-what-is-owned',
    title: 'One more time',
    format: 'mcq',
    q: 'Marie is talking about her own father. Which word?',
    opts: ['sa', 'son', 'ses'],
    correct: 1,
    why: 'son. A father is the un kind. Marie being a woman is not information the sentence carries and never was.',
  },
  {
    id: 'drill-the-grid',
    title: 'Find the cell',
    format: 'flashcard',
    // Every front names BOTH the owner and the thing, exactly as every quiz stem
    // does, because a possessive prompt missing either half has no single right
    // answer. Built from the paradigm rather than listed, so a change to the
    // grid moves the drill with it.
    pairs: PARADIGM.map((c) => [c.en, c.fr] as [string, string]),
    coach: 'The English front tells you the owner and the thing. The owner picks the row and the thing picks the shape, in that order, and neither of them can do the other one\'s job.',
  },
  {
    id: 'retest-the-grid',
    title: 'One more time',
    format: 'mcq',
    q: 'You want to say: our parents. Which word?',
    opts: ['notre', 'nos', 'nous'],
    correct: 1,
    why: 'nos. More than one thing, so the plural, and the kind of thing was never asked about in this row at all.',
  },
  {
    id: 'drill-ear',
    title: 'Same sound, or not?',
    format: 'sort',
    // Two buckets and six sentences, and the honest answer is that four of the
    // six go in the same bucket. That is the teaching: the learner has been
    // listening for differences that are not in the signal.
    buckets: ['these two sound identical', 'these two really differ'],
    items: [
      'fr.a1.famille.256', // mon ami
      'fr.a1.famille.257', // mon amie
      'fr.a1.famille.282', // Voici leur fille.
      'fr.a1.famille.283', // Voici leurs filles.
      'fr.a1.famille.280', // Ce sont mes amis.
      'fr.a1.famille.281', // Ce sont ses amis.
    ],
    coach: 'Say each pair out loud, twice, at ordinary speed. If you find yourself lengthening something to make a difference appear, that is the answer: it is not there. Only one of these three pairs has anything in it.',
  },
  {
    id: 'retest-ear',
    title: 'One more time',
    format: 'mcq',
    q: 'How much of the difference between mon ami and mon amie can you hear?',
    opts: ['all of it', 'a little, if the speaker is careful', 'none of it, ever'],
    correct: 2,
    why: 'None of it. The e is written and never pronounced, so the two are one sound and no recording could separate them. If it matters, you read it or you ask.',
  },
  {
    id: 'drill-vowel',
    title: 'Which shape in front of this word?',
    format: 'sort',
    // Both buckets hold feminine things, which is the only arrangement that
    // teaches anything: a bucket of masculine nouns taking mon would let the
    // learner sort by gender and score full marks without seeing the rule.
    buckets: ['takes ma', 'takes mon'],
    items: [
      'fr.a1.famille.259', // Voici ma sœur.
      'fr.a1.famille.278', // Voici mon amie.
      'fr.a1.famille.279', // Ma sœur et mon amie sont ici.
      'fr.sons.liaisons.081', // Mon école ouvre tôt.
      'fr.a1.dictee.188', // Mon amie cherche sa trousse.
    ],
    coach: 'Every thing in this drill is the une kind, so gender will not sort it. Look at the first letter of the noun instead. A vowel behind ma is a collision the language will not make, so the word swaps.',
  },
  {
    id: 'retest-vowel',
    title: 'One more time',
    format: 'mcq',
    q: 'You want to say: my friend, about a woman. Which word in front of amie?',
    opts: ['ma', 'mon', 'l\''],
    correct: 1,
    why: 'mon. The word swaps rather than being cut, which is the difference from l\'amie. Une amie is still the une kind throughout.',
  },
  {
    id: 'drill-leur',
    title: 'Count the things',
    format: 'sort',
    // Every sentence here has SEVERAL owners, without exception. That is the
    // point: the owner count is constant across the whole drill, so it cannot be
    // what separates the buckets, and the learner has nothing to sort on except
    // the thing.
    buckets: ['one thing, so leur', 'more than one thing, so leurs'],
    items: [
      'fr.a1.famille.282', // Voici leur fille.
      'fr.a1.famille.283', // Voici leurs filles.
      'fr.a1.famille.273', // Voici leur frère.
      'fr.a1.famille.275', // Voici leurs parents.
      'fr.a1.cafe.093',    // Les clients attendent leur commande.
      'fr.a1.dictee.184',  // Les élèves rangent leurs livres.
    ],
    coach: 'Every one of these has several owners, so counting people will get you nowhere: they all go in the same pile. Count what is owned instead. One of it and there is no s; more than one and there is.',
  },
  {
    id: 'retest-leur',
    title: 'One more time',
    format: 'mcq',
    q: 'Two parents and one daughter between them. Which word for their daughter?',
    opts: ['leurs', 'leur', 'ses'],
    correct: 1,
    why: 'leur. The s counts daughters and there is one. The parents were already two before the question was asked.',
  },
  {
    id: 'drill-slot',
    title: 'What fills the position?',
    format: 'sort',
    buckets: ['le, la or les fills it', 'a possessive fills it'],
    items: [
      'fr.a1.famille.284', // C'est mon livre.
      'fr.a1.famille.258', // Voici mon frère.
      'fr.a1.famille.003', // le frère
      'fr.a1.famille.004', // la sœur
      'fr.a1.famille.014', // les parents
    ],
    coach: 'Look at the position directly in front of the noun and ask what is standing in it. It holds one word and only one, which is why le mon livre is not something anybody would finish saying.',
  },
  {
    id: 'retest-slot',
    title: 'One more time',
    format: 'mcq',
    q: 'You want to say: my book. Which of these is French?',
    opts: ['le mon livre', 'mon livre', 'mon le livre'],
    correct: 1,
    why: 'mon livre. The possessive is standing where le would have stood, so there is nothing to add in front of it.',
  },
];

/* ─── Reference sheets ─────────────────────────────────────────────────────
 *
 * Two, and each exists for a layout reason as much as a pedagogical one.
 * `tapTable` is not in ownsLayout(), so the in-flow tables render inside a
 * scrolling page and eighteen cells would run off the fold and take their chrome
 * with it. s07 carries nine and s09 carries six; the full eighteen live here,
 * where `layer: 'deep'` exempts them from the core density caps and a `table`
 * section is only legal in the first place.
 *
 * The brief asks for exactly this and is right about why: "A reference sheet
 * with the full grid, the vowel rule and the leur/leurs split. It is the single
 * most returned-to sheet in A1." A learner will be here a week from now, halfway
 * through describing a family, wanting one screen with all fifteen words on it.
 * The `sheetId` is wired from six sections.                                   */

const SHEETS: ReferenceSheet[] = [
  {
    id: 'sheet.a1.17.grid',
    title: 'All fifteen, in one grid',
    layer: 'deep',
    contains: ['Every owner in all three shapes', 'Which rows ask about the thing', 'What each row is in English'],
    sections: [
      {
        type: 'table',
        id: 'sheet-grid-table',
        title: 'The eighteen cells',
        layer: 'deep',
        cols: ['owner', 'the un kind', 'the une kind', 'more than one'],
        rows: OWNERS.map((o) => [o.who, ...o.forms]),
      },
      {
        // `teach`, NOT `cheatSheet`, and the difference is not cosmetic.
        //
        // FOUND ON A DEVICE, and invisible to every test in the suite.
        // ReferenceSheet.tsx renders exactly three section types inside a sheet
        // (`teach`, `letterGrid`, `table`) and its `default` branch draws the
        // section's TITLE and nothing else, deliberately, "so a mis-authored
        // sheet is visible instead of silently thin". A `cheatSheet` here
        // therefore drew a heading with seven invisible rows under it. The
        // component's own comment says the set is small on purpose: a sheet
        // carries reference material, and anything interactive belongs in the
        // flow where progress is tracked.
        //
        // a1.13 has the same defect shipped, at sheet-forms-families and
        // sheet-invariable-rows. It is reported rather than fixed here: editing
        // another lesson's shipped body is that lesson's build's decision.
        //
        // The `say` on each row is the one thing lost in the conversion. It was
        // never reaching a learner either, because the rows were not drawn.
        type: 'teach',
        id: 'sheet-grid-rows',
        title: 'What each row is doing',
        layer: 'deep',
        body:
          'mon, ma and mes are my, in three shapes, and the thing picks between them: mon for the un kind, ma '
          + 'for the une kind, mes for more than one. ton, ta and tes are your, to somebody you would say tu to, '
          + 'and they ask exactly the same three questions. son, sa and ses are his AND her, one row covering '
          + 'both, because the possessive never reports on the owner at all; if it matters whose, French says it '
          + 'another way and names the person. notre and nos are our, in two shapes rather than three: notre for '
          + 'one thing of either kind, nos for more than one. votre and vos are your, politely or to several '
          + 'people, in the same two shapes, and the politeness has nothing to do with the s. leur and leurs are '
          + 'their, and by the time you reach them the owners are already several, so the s is counting the '
          + 'things instead: leur fille, leurs filles. One rule holds across every row. A possessive stands '
          + 'where le, la or les would have stood, so there is no le mon livre and there never will be.',
      },
    ],
  },
  {
    id: 'sheet.a1.17.rules',
    title: 'The three rules that are not in the grid',
    layer: 'deep',
    contains: ['mon in front of a vowel', 'leur against leurs', 'What your ear can and cannot do'],
    sections: [
      {
        // A `table`, which ReferenceSheet.tsx DOES draw, and it suits this
        // content better than the prose above: every row here is a short French
        // phrase against a short verdict, which is what a two-column table is
        // for. SheetTable is horizontally scrollable by design, and at two
        // columns it does not need to be. See the note on sheet-grid-rows.
        type: 'table',
        id: 'sheet-rules-rows',
        title: 'What to write, and what never to write',
        layer: 'deep',
        // SHORT CELLS ONLY, and that was decided on a device rather than in the
        // editor. A first version put the REASON in the second column, and
        // SheetTable sizes a column at max(110, 320 / cols), so a full sentence
        // landed in a 160-wide cell and could only be read by dragging the table
        // sideways. The reasons moved to the prose below, where they have the
        // width, and the table went back to being scannable: two short forms per
        // row, the right one against the wrong one, both visible at once.
        cols: ['write this', 'never this'],
        rows: [
          ['mon amie', 'ma amie'],
          ['mon école', 'ma école'],
          ['ma sœur', 'mon sœur'],
          ['votre adresse', "votr' adresse"],
          ['leur fille', 'leurs fille'],
          ['leurs filles', 'leur filles'],
          ['mon livre', 'le mon livre'],
        ],
      },
      {
        type: 'teach',
        id: 'sheet-rules-reasons',
        title: 'Why each of those is wrong',
        layer: 'deep',
        body:
          'ma amie and ma école put two vowel sounds against each other, which French will not do, so mon is '
          + 'borrowed for the sound alone. Both nouns are still the une kind and everything else about them '
          + 'agrees that way. mon sœur is the same rule misfiring in reverse: a consonant follows, so there is '
          + 'nothing to repair and ma is correct. votr\' adresse is the swap being applied where it does not '
          + 'reach, because only mon, ton and son have a second shape to reach for and notre, votre and leur '
          + 'never change for anything. leurs fille and leur filles both count the wrong thing: the owners were '
          + 'already several before any s arrived, so the s can only be counting the daughters, and it has to '
          + 'match the noun beside it. le mon livre puts two words in one position: a possessive stands where '
          + 'le, la or les would have stood rather than beside them, so once you have chosen mon you are '
          + 'finished and nothing else goes in front of the noun.',
      },
      {
        type: 'teach',
        id: 'sheet-rules-ear',
        title: 'What your ear can and cannot do',
        layer: 'deep',
        body:
          'Two of the pairs in this lesson are not pairs at all in the air, and knowing which is which stops you '
          + 'listening for something that was never recorded. mon ami and mon amie are ONE SOUND with two '
          + 'spellings: the e is written and never pronounced, so no recording could separate them and no amount '
          + 'of slowing one down will help. If you need to know which was meant, you read it or you ask. leur '
          + 'fille and leurs filles are the same situation: in front of a consonant both plural endings are '
          + 'silent, so the two are identical out loud. leurs only becomes audible in front of a vowel, where '
          + 'its s wakes up as a z, as in leurs amis. The one pair your ear can genuinely be trained on is mes '
          + 'amis against ses amis. Both carry the same z liaison into amis and both put the stress in the same '
          + 'place, so the whole difference between my friends and his friends is the vowel of the first '
          + 'syllable. That one is worth practising. The other two are worth knowing about so you stop trying.',
      },
      {
        type: 'teach',
        id: 'sheet-rules-why',
        title: 'Why mon amie is not an exception',
        layer: 'deep',
        body: 'Most courses hand you the vowel rule as a fourth thing to memorise, sitting beside the grid and unconnected to anything. It is not a fourth thing. French has a standing objection to two vowel sounds meeting with nothing between them, and you have already watched it deal with that objection twice. The first time was le and la turning into l apostrophe in front of a vowel, which the lesson on the definite articles taught and the silent letters lesson set up before it. The little word loses its own vowel and an apostrophe marks where it went. The second time was the liaison, where a consonant that had been sitting silent at the end of a word wakes up and attaches itself to the front of the next one, so that mon ami comes out as three syllables with an n in the middle of it. This is the third time, and it is the same objection with a third answer. Ma amie would put an a straight against an a, so instead of cutting anything the language reaches for the other shape of the same word, which happens to end in a sound that runs into a vowel without any trouble at all. Ma becomes mon, ta becomes ton, sa becomes son. Nothing else about the sentence moves. Une amie is the une kind before the swap and after it, and every other word in the sentence still treats her that way, which is the part that reassures people who think they have missed something. The rule reaches exactly three words and it is worth knowing where it stops: notre, votre and leur have no second shape to reach for and never change for anything. It applies in front of a vowel and in front of a silent h, which is the same set of words that took l apostrophe, so if you know which nouns those were you already know which nouns these are. The practical version is one sentence. If the noun starts with a vowel sound, use mon, ton or son whatever kind of thing it is.',
      },
    ],
  },
];

export const POSSESSIFS_LESSON: Lesson = {
  id: 'a1.17.l1',
  unitId: 'a1.17',
  // The lesson's index WITHIN its unit, not its place in the track. Every lesson
  // in the seed is seq 1 because every unit ships exactly one so far, and the
  // `l1` in the id is this number.
  seq: 1,
  title: 'Les adjectifs possessifs',
  level: 'a1',
  // TWENTY, from unit.seq. missions.ts derives the eyebrow at render time as
  // `${level} · LEÇON ${unit.seq}`, and a1.17 sits at seq 20. The stored value
  // is a fallback and has to agree with what the renderer computes, or the two
  // disagree the moment something reads this field instead. a1.03 shipped
  // exactly that bug (commit 56c79a7).
  tag: 'A1 · LEÇON 20',
  intro:
    'Fifteen words for what English does with five, and the choice between them has nothing to do with you. This is how to pick one by looking at the thing rather than the person, use all six owners, put mon in front of a vowel, and tell leur from leurs.',

  sections: SECTIONS,
  itemIds: ITEM_IDS,
  // The LESSON's own counter, not `seed.version`. seed.version is the OTA
  // snapshot number, derived by publish-content.ts as previous + 1, and a merge
  // must never hand-bump it.
  //
  // v1 was applied to Postgres and then a1-17-possessifs.test.ts found act 1
  // releasing two items to spaced repetition that no act 1 section shows:
  // fr.a1.famille.083, which s05-three shows in act 2, and fr.a1.dictee.001,
  // which s08-son shows in act 3. Both belong to the inversion idea and neither
  // is on a screen the learner has reached, which is the difference the check
  // exists to catch. v2 moves them to the acts that show them.
  //
  // v3 was found ON A DEVICE and by nothing else. Both reference sheets opened
  // with a heading and nothing under it, because ReferenceSheet.tsx draws only
  // `teach`, `letterGrid` and `table` inside a sheet and falls through to a
  // title-only branch for anything else. The two `cheatSheet` sections were
  // fourteen authored rows drawn by nothing. v3 converts them to the types the
  // component reads, and a1-17-possessifs.test.ts now parses the switch out of
  // the component so the next one goes red instead of shipping.
  //
  // v4, also from the device: the rules sheet's table carried its reasons in a
  // second column, and SheetTable sizes a column at max(110, 320/cols), so each
  // reason sat in a 160-wide cell that could only be read by dragging the table
  // sideways. The table is now two short forms per row and the reasons moved to
  // prose, which is what the width is for.
  version: 4,

  grammarAssumed: [
    'Noun gender, and that un and une follow it, introduced in a1.03',
    'le, la, l\' and les, and the elision of le and la in front of a vowel, introduced in a1.04',
    'The plural of a noun, introduced in a1.03',
    'mon, ma and mes as three words rather than a system, and the article-based rule for choosing between them, introduced in a1.15',
    'de for possession, and that it always reaches where a possessive will not, introduced in a1.15',
    'The nine subject pronouns, introduced in a1.05',
    'The full present of être, introduced in a1.06',
    'The full present of avoir, introduced in a1.07',
    'Liaison, and that a silent final consonant attaches to a following vowel, introduced in sons.10',
    'Elision as a repair for two vowels meeting, introduced in sons.07',
  ],
  grammarIntroduced: [
    'The possessive adjectives, introduced here for the first time in the course',
    'That a possessive agrees with the thing possessed rather than with the possessor',
    'All six persons across three forms: mon/ma/mes, ton/ta/tes, son/sa/ses, notre/nos, votre/vos, leur/leurs',
    'The syncretism of the first and second forms in the nous, vous and ils rows',
    'mon, ton and son in front of a feminine noun beginning with a vowel or a mute h',
    'That the anti-hiatus swap does not reach notre, votre or leur',
    'The number contrast in leur against leurs, where the plural marks the possessum and not the possessor',
    'That a possessive occupies the determiner slot and excludes the definite and indefinite articles',
  ],

  features: ['roleplay', 'voiceflash'],

  overview: {
    titleEn: 'Possessive Adjectives',
    subFr: 'Les adjectifs possessifs',
    introFr: 'Quinze mots pour dire à qui est quelque chose, et le choix ne dépend jamais de la personne.',
    minutes: 27,
    difficulty: 2,
    glyph: '🔑',
    screens: 220,
  },

  acts: ACTS,
  reframe: REFRAME,
  errorTriggers: ERROR_TRIGGERS,
  drills: DRILLS,
  sheets: SHEETS,
  deckTranche: DECK_TRANCHE,
  terms: POSSESSIFS_TERMS,

  audio: {
    defaultLang: 'fr-FR',
    speeds: [1.0, 0.65],
    coachVoice: 'coach-en-warm',
    interfaceSounds: ['correct', 'incorrect', 'checkpoint'],
    // ── The audio decisions that cannot be recovered later ─────────────────
    //
    // Written here AND pinned by a1-17-possessifs.test.ts, because a constraint
    // on how something is recorded becomes invisible the moment the clip is
    // delivered. All five of the brief's lesson-specific notes are written in
    // explicitly, and the fifth (never a bare possessive) also decides what the
    // speak mission contains: see SPEAK_IDS.
    //
    // Briefs only. Do NOT run pnpm audio:render: it spends real ElevenLabs
    // credits and ELEVENLABS_API_KEY is not set in ealch-admin/.env in any case.
    // CLIP_MANIFEST is empty by design, so every card falls back to device TTS
    // until the studio delivers, and a recordingId resolving to nothing is the
    // correct shipping state.
    recorded: [
      {
        id: 'rec-a1-17-vowel',
        desc:
          'THE SINGLE MOST IMPORTANT NOTE IN THIS LESSON. « ma sœur » AND « mon amie » ARE ONE TAKE, one voice, '
          + 'one pace, read straight through with no gap and no reset. The swap between them is the rule, and two '
          + 'separate recordings are two performances: a reader who records mon amie in its own session will '
          + 'lean on the mon, and the learner will hear that lean as a change of gender rather than as a change '
          + 'of sound. Read them as if reading one list. Also in this take, immediately after: « Ma sœur et mon '
          + 'amie sont ici. », which carries both halves in one line. '
          + 'THE LIAISON IN mon amie IS A REAL PRONOUNCED N and must be given its full value: the word comes out '
          + 'as three syllables, mohⁿ-na-MEE, with the n on the front of the second syllable rather than closing '
          + 'the first. Do NOT read it as mon, pause, amie. '
          + 'Finally « Vous écrivez votre adresse. » in the same take, because the whole point of that line is '
          + 'that votre does NOT swap in front of a vowel: read it plainly with no elision and no swap.',
        clipIds: [
          'ma sœur', 'mon amie', 'ma-soeur-mon-amie-pair',
          'Voici ma sœur.', 'Voici mon amie.', 'Ma sœur et mon amie sont ici.',
          'Mon école ouvre tôt.', 'Vous écrivez votre adresse.',
        ],
      },
      {
        id: 'rec-a1-17-ear',
        desc:
          'THE THREE PAIRS, AND TWO OF THEM MUST SOUND IDENTICAL. Read every pair as ONE TAKE, one voice. '
          + '« mes amis » / « ses amis » is the only pair with anything in it: identical z liaison, identical '
          + 'stress, and the whole difference is the vowel of the first syllable. Do not exaggerate it and do '
          + 'not lengthen either word. '
          + '« mon ami » / « mon amie » MUST BE READ AS THE SAME WORD TWICE, because that is what they are. This '
          + 'matters MORE than the pair that differs, not less. If a reader cannot resist marking the feminine, '
          + 'record mon ami twice and use it for both: that is a more truthful clip than a performed difference, '
          + 'and a learner who hears an invented difference will spend a year listening for it. '
          + '« Voici leur fille. » / « Voici leurs filles. » is the same instruction again. Both plural endings '
          + 'are silent in front of a consonant and the two sentences are one sound. No lengthening, no release '
          + 'on the s, no breath. '
          + 'Separately, and NOT beside those: « leurs amis », where the s of leurs DOES wake up as a z. That is '
          + 'the one place the pair is audible and it is worth a clip so the learner knows the s is not '
          + 'imaginary.',
        clipIds: [
          'mes amis', 'ses amis', 'mes-ses-amis-pair',
          'mon ami', 'mon amie', 'mon-ami-amie-identical',
          'Ce sont mes amis.', 'Ce sont ses amis.',
          'Voici leur fille.', 'Voici leurs filles.', 'leur-leurs-identical',
          'leurs amis',
        ],
      },
      {
        id: 'rec-a1-17-grid',
        desc:
          'THE EIGHTEEN GRID SENTENCES, READ ONE ROW AT A TIME AND ONE TAKE PER ROW. « Voici mon frère, voici '
          + 'ma sœur, voici mes parents », then the same three for tu, then for il and elle, then nous, vous and '
          + 'ils. Reading a row in one take is the entire point: the learner has to hear that only the '
          + 'possessive moves within a row, and that in the bottom three rows the first two sentences are the '
          + 'same word twice. Do not record these eighteen separately and do not vary the pace between rows, '
          + 'because the comparison is between rows as much as within them. '
          + 'KEEP EVERY NASAL CLOSED. mon, ton and son are nasal vowels with NO n sound behind them at all, and '
          + 'parents ends in a nasal the same way. The app respells them MOHⁿ, TOHⁿ, SOHⁿ and LAY pah-RAHⁿ '
          + 'deliberately. '
          + 'The s of mes, tes, ses, nos, vos and leurs is SILENT in every one of these eighteen lines, because '
          + 'a consonant follows it every time. Do not sound any of them.',
        clipIds: OWNERS.map((o) => `${o.who.replace(/ \/ /g, '-')}-row`),
      },
      {
        id: 'rec-a1-17-hisher',
        desc:
          'THE INVERSION, AND THE TWO LINES MUST BE ACOUSTICALLY IDENTICAL FROM THE THIRD WORD ON. « Il parle '
          + 'avec sa sœur. » immediately followed by « Elle parle avec sa sœur. », ONE TAKE, one voice. The only '
          + 'difference the learner may hear is il against elle at the very start. Everything after that is the '
          + 'same three words and must be read the same way: no shift in pitch on sa, no emphasis, nothing that '
          + 'would suggest the possessive is doing different work in the two sentences. It is not. That '
          + 'sameness IS the lesson, and a reader who colours the second one teaches the opposite of it. '
          + 'Then, in the same take, « Voici son frère. » and « Voici sa sœur. » back to back, so the learner '
          + 'hears that the change between them tracks the brother and the sister rather than anybody\'s sex.',
        clipIds: [
          'Il parle avec sa sœur.', 'Elle parle avec sa sœur.', 'his-her-pair',
          'Voici son frère.', 'Voici sa sœur.', 'Voici ses parents.',
        ],
      },
      {
        id: 'rec-a1-17-leur',
        desc:
          '« Voici leur fille. » and « Voici leurs filles. » ADJACENT, ONE TAKE, and read as the same sentence '
          + 'twice, because in front of a consonant that is exactly what they are. The difference is on the '
          + 'page and nowhere else. Then the two published lines in the same take: « Les clients attendent leur '
          + 'commande. » and « Les élèves rangent leurs livres. », where the difference is audible only in the '
          + 'noun. Read all four plainly. Nothing here should sound like a demonstration, and no s anywhere in '
          + 'this group is pronounced.',
        clipIds: [
          'Voici leur fille.', 'Voici leurs filles.',
          'Les clients attendent leur commande.', 'Les élèves rangent leurs livres.',
          'Voici leur frère.', 'Voici leurs parents.',
        ],
      },
      {
        id: 'rec-a1-17-owners',
        desc:
          'THE SCENE\'S CHOICE, AND THE ONE PLACE A BARE FORM COMES CLOSE TO BEING RECORDED ALONE. It is not: '
          + 'every clip here is a possessive WITH ITS THING. « Voici sa sœur. » and « Voici ma sœur. » in ONE '
          + 'TAKE, adjacent, read at the same pace with the same weight, because the whole beat turns on how '
          + 'small the difference is. Do not make the wrong one sound wrong: it is correct French about '
          + 'somebody else and it has to sound like it, or the scene stops being about a slip nobody catches. '
          + 'A BARE POSSESSIVE IS NEVER RECORDED IN THIS LESSON. mon on its own carries no information about '
          + 'the thing and the whole subject is what follows it, so there is no clip anywhere of mon, ma, mes, '
          + 'ton, ta, tes, son, sa, ses, notre, nos, votre, vos, leur or leurs alone. If a request for one '
          + 'arrives, it is a mistake in the request.',
        clipIds: ['Voici sa sœur.', 'Voici ma sœur.', 'ma-sa-soeur-pair', 'Voici mon frère.', 'Voici mes parents.'],
      },
      {
        id: 'rec-a1-17-traps',
        desc:
          'The five written traps, wrong version then right version, with a clear beat between them. Read EVERY '
          + 'wrong version plainly and at ordinary pace rather than comically. TWO OF THE FIVE ARE '
          + 'ACOUSTICALLY REAL ERRORS and should be read exactly as written: « sa père » and « son mère » are '
          + 'not French and sound wrong, which is the point. « ma amie » should be read with the two vowels '
          + 'genuinely colliding, slowly enough that the learner hears why the language refuses it. « leurs '
          + 'enfants » against « leur enfant » DOES differ audibly, because a vowel follows and the s wakes up '
          + 'as a z: this is the one trap in the group the ear can catch. « le mon livre » should be read '
          + 'flatly and without hesitation, because a learner writing it does not hesitate either.',
        clipIds: ['trap-sa-pere', 'trap-son-mere', 'trap-ma-amie', 'trap-leurs-enfant', 'trap-le-mon-livre'],
      },
      {
        id: 'rec-a1-17-scene',
        desc:
          'The opening scene, French bubbles only. Hugo is a man in his thirties running the door at a language '
          + 'exchange, half distracted, refilling glasses. His line « Ah, enchanté ! Vous êtes la sœur '
          + 'd\'Amélie, alors ? » MUST BE WARM AND COMPLETELY UNSUSPICIOUS. He has not noticed anything, '
          + 'because there is nothing to notice: the sentence he heard was correct. Any hint of a question in '
          + 'his voice turns the scene into a correction and loses the whole point, which is that the error is '
          + 'undetectable from both sides. His last line, where he realises and does not mind, is where warmth '
          + 'is allowed to show.',
        clipIds: [
          'Et toi, tu es venue avec qui ce soir ?',
          'Ah, enchanté ! Vous êtes la sœur d\'Amélie, alors ?',
          'Ta sœur ! Ah, pardon, j\'avais compris autre chose. Revenez toutes les deux.',
        ],
      },
    ],
    ambienceDefault: 'off',
  },
};

/** Exported for the authoring script, the merge script and the test, so none of
 *  them restates a count that can drift out of agreement with the content. */
export const POSSESSIFS_ITEM_IDS = ITEM_IDS;
export const POSSESSIFS_SPEAK_IDS = SPEAK_IDS;
export const POSSESSIFS_DICTATION_IDS = DICTATION_IDS;
export const POSSESSIFS_TRANCHES = DECK_TRANCHE;
export const POSSESSIFS_HEADWORD_IDS = HEADWORDS;
export const POSSESSIFS_GRID_IDS = GRID;
export const POSSESSIFS_WILD_IDS = IN_THE_WILD;
export const POSSESSIFS_HOMOPHONE_IDS = HOMOPHONE_PAIR;

/* ─── The handover ─────────────────────────────────────────────────────────
 *
 * The brief asks for this explicitly, and asks for it twice: once for a1.15,
 * whose own brief instructs its author to take mon, ma and mes as three frozen
 * words, and once for A2's object pronouns.
 *
 * FIRST, THE THING THE BRIEF ASKS TO BE REPORTED ON: a1.15 LANDED DURING THIS
 * BUILD, at 23:36 UTC on 2026-08-06, between the pre-flight probe and the first
 * batch dry run.
 *
 *   It took fr.a1.famille.235 to .252, which is exactly where these 32 rows had
 *   already been authored. Every id here was shifted by 18 and nothing else about
 *   the content changed. The collision was caught by the dry run reporting
 *   `famille` at 349 published rows against the probe's 331, and NOT by the
 *   next-free check, which passed cleanly because a1.15's highest id sits BELOW
 *   this batch's highest id. That hole is now closed: the batch checks for a
 *   foreign row anywhere inside its own range rather than only above it.
 *
 *   ITS HANDOVER WAS READ AND RECONCILED RATHER THAN DUPLICATED. a1.15 gave the
 *   learner mon, ma and mes as three words with an article-based rule (mon with
 *   the le words, ma with the la words, mes with anything plural) and no paradigm
 *   anywhere. So this lesson does not introduce them as new: the first card of
 *   s03-inversion names the earlier lesson, keeps its rule, and connects it to
 *   the kind of thing rather than replacing it. `grammarAssumed` credits a1.15 by
 *   name for that and for `de`.
 *
 *   a1.14 also started during this build (adjectifs-corpus.ts and its siblings)
 *   and does NOT share this id counter: it authors into
 *   fr.sons.adjectifs-essentiels and has rebound its unit off `famille`, which is
 *   what a1.13's handover recommended.
 *
 * THE ID RANGE, for whoever authors into famille next:
 *
 *     fr.a1.famille.001-.234    published before either build
 *     fr.a1.famille.235-.252    a1.15. Eighteen rows.
 *     fr.a1.famille.253-.284    a1.17. Thirty-two rows.
 *     fr.a1.famille.285+        FREE.
 *
 *   Re-run `pnpm corpus:probe --theme famille` before authoring rather than
 *   trusting that block. It was true of this session, and this session is the
 *   reason it needs saying: two lessons authored into one counter on one
 *   afternoon and only one of them found out.
 *
 * WHAT a1.15 MAY NOW REUSE, since a later revision of it is the likeliest thing
 * to read this:
 *
 *   ALL FIFTEEN POSSESSIVES ARE NOW TAUGHT, not just the three it froze. It no
 *   longer needs to hold anything back for a lesson that has shipped, and a later
 *   revision can use the other twelve freely. Every form has a headword card,
 *   twelve imported from fr.sons.mots-essentiels.093-104 and three authored here.
 *
 *   THE mon-BEFORE-A-VOWEL RULE IS BUILT. a1.15's s17-mine promises the learner
 *   "one wrinkle in the ma column that nobody can guess", and act 4 is it. The
 *   promise is kept and its wording is contradicted nowhere.
 *
 *   THE THREE GRID NOUNS ARE NOT AUTHORED HERE. `le frère`, `la sœur` and
 *   `les parents` are used as published famille headwords and nothing about them
 *   was changed except one respelling repair on fr.a1.famille.014, which closed
 *   the nasal of `parents` with a superscript. a1.15 owns family vocabulary in
 *   full and this lesson took none of it: it borrowed three nouns as a frame and
 *   taught nothing about them beyond which kind they are.
 *
 *   THE EIGHTEEN PARADIGM SENTENCES are built on `Voici` plus one of those three
 *   nouns. A fourth noun drops into the same frame unchanged.
 *
 *   `de` FOR POSSESSION IS a1.15's AND IS NOT RETAUGHT. This lesson names it
 *   twice, both times as the answer to "what if it matters whose", which is
 *   exactly the escape hatch a1.15's own handover offers. FAMILY_TEACHING guards
 *   against TEACHING it rather than against mentioning it, and was narrowed to
 *   that after an earlier version fired on one of this lesson's own cards.
 *
 * WHAT A2 STILL OWNS, UNTOUCHED:
 *
 *   `leur` AS AN INDIRECT OBJECT PRONOUN (a2.24) is a different word and this
 *   lesson says so once, on the last card of s16-leur, without teaching it. No
 *   production surface contains « je leur », « il leur », « leur dit », « leur
 *   parle » or any of the frames in OBJECT_PRONOUN_FRAMES, and the batch, the
 *   merge and the test all check it. The one card that names it is deliberate:
 *   a learner who meets « Je leur parle » next month and thinks they have
 *   forgotten a rule is worse off than one who was told there are two words.
 *
 *   POSSESSIVE PRONOUNS (`le mien`, `la tienne`) appear on no surface at all,
 *   not even as a mention. They are well beyond A1 and there is nothing to gain
 *   by half-opening them. POSSESSIVE_PRONOUNS in possessifs-corpus.ts is the
 *   list the guards run against.
 *
 * TWO THINGS THIS BUILD FOUND AND DID NOT FIX, because neither is its to fix:
 *
 *   a1.13.l1's `grammarAssumed` carries "mon, ma and mes, introduced in a1.05",
 *   and merge-couleurs-into-seed.ts repeats it. a1.05 introduces the subject
 *   pronouns and no possessive of any kind. Editing another lesson's shipped
 *   body to make a comment true is that lesson's build's decision.
 *
 *   `fr.sons.alphabet.116` "son" and `fr.a1.cinema.043` "le son" both close a
 *   nasal with a plain n. Both are the NOISE sense of son, in other lessons'
 *   themes, and neither appears on any screen here. See NOT_REPAIRED. */
export const HANDOVER_NEXT_FREE_ID = 'fr.a1.famille.285';

/** The range this lesson owns, exported so the batch can check that nobody else
 *  has landed INSIDE it rather than only above it. That distinction is not
 *  theoretical: a1.15 landed inside this range mid-build and a highest-id check
 *  passed it, because eighteen rows below this batch's top do not move the
 *  maximum. */
export const OWNED_ID_RANGE = { from: 'fr.a1.famille.253', to: 'fr.a1.famille.284' };

/** Family vocabulary teaching this lesson must never put on a learner surface.
 *  a1.15 owns all of it.
 *
 *  MULTI-WORD PHRASES ONLY, and that is deliberate. a1.13's first draft listed
 *  its neighbour's mnemonics as single words and the guard fired immediately on
 *  one of its own glosses. A single common word is not a safe probe for a
 *  teaching concept: `frère` and `sœur` are this lesson's own grid nouns and
 *  appear on almost every screen. What a1.15 owns is TEACHING about family, and
 *  these phrases are what that teaching sounds like. */
export const FAMILY_TEACHING = [
  'de possession', 'belongs to using de', 'de plus a name', 'how to say whose using de',
  'family tree', 'arbre généalogique', 'the whole family', 'extended family',
  'members of the family', 'family vocabulary',
];
