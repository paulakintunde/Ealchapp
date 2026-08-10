// a1.22.l1 "Pays & nationalités": the lesson body.
//
// Reads every French string, transcription and gloss from pays-corpus.ts and
// restates none of them.
//
// ── The layout decisions, each of which is a rule from A1-BUILD-INVARIANTS ──
//
// THE HERO IS s14-grid AND IT IS A tapTable WITH THREE ROWS AND TWO COLUMNS.
// Going to and coming from, ON ONE SCREEN, with a real country in every cell.
// That is the reframe made visible: one property of the noun answers both
// columns, and split across two missions the two systems stop looking like one
// decision. Three by two fits a Pixel 6 without scrolling, which matters because
// `tapTable` is NOT in `ownsLayout()` (LessonPager.tsx:162) and renders inside a
// scrolling page. The batch, the merge and the test all assert that a single
// section carries both directions and all three rows.
//
// s10-table-going shows the going-to column ALONE first, three rows by one
// column, because a learner meeting six cells cold reads a table rather than a
// decision. The hero then arrives in act 4 with the second column added and
// nothing else changed.
//
// NO groupDrill CARRIES `size`. A groupDrill owns the viewport at `xl` and not
// otherwise, which is true, and `xl` is unusable here: `density.logic.ts` reads
// it as a TWELVE-WORD CAP ON EVERY STRING IN THE SECTION, and every check in
// this lesson carries a `why` that has to teach the rule rather than name it.
// a1.13 and a1.17 both made the same call and shipped. Every control page
// carries `items: []` explicitly, so no xl groupDrill can stack words and a
// check in one group.
//
// COUNTRY AND NATIONALITY ARE A PAIR AND GET TWO COLUMNS, at s05-pairs. The
// corpus already pairs them by id (odd country, even nationality), so the deck
// writes itself and a learner can see that the two are separate words rather
// than one word with two shapes.
//
// « Il est français » AGAINST « C'est un Français » IS THE SECOND PAIR AND HAS
// ITS OWN TWO COLUMNS, at s19-capital, because the only difference is a capital
// letter and an article. Nothing else in the lesson looks like this, and split
// across two cards it is two unremarkable sentences.
//
// NO MAP AND NO FLAG IMAGE. No component draws a map, no section type positions
// anything geographically, and `imageRef` resolves through a statically
// enumerated registry in lessonImages.ts that `lesson-contract.test.ts` does NOT
// check, despite a comment in schema.ts claiming a publish-time check which is
// conditional on an asset manifest that does not exist. An unregistered ref
// draws a blank box and nothing goes red. So there is none, and the batch, the
// merge and the test all assert there is none.
//
// ── The dictée, and the target it cannot have ──────────────────────────────
//
// `dicteeMode` switches to WORD mode above DICTEE_LETTER_LIMIT letters, and word
// mode hands the learner each whole word as a pre-spelled tile. Tapping a tile
// marked `en` is not choosing between `en` and `au`, which is the entire thing
// this lesson teaches. Every target below is short enough to stay in LETTERS
// mode and each one is checked through the real `dicteeMode`.
//
// The measured consequence, worth recording because the next author will hit it:
//
//     « Elle est canadienne. »      20 letters   WORD MODE
//     « Je vais aux États-Unis. »   18 letters   WORD MODE
//     « Je viens des États-Unis. »  19 letters   WORD MODE
//
// So the feminine half of the ear pair and BOTH plural cells of the grid cannot
// be dictée targets while their partners can. They are tested by the quiz and by
// s18-ear instead. Named here so nobody "completes" the dictée by adding a
// target that silently degrades into tapping tiles.

import type {
  ErrorTrigger, Lesson, LessonAct, LessonDrill, LessonSection, ReferenceSheet, SceneBeat,
} from '../../../ealch-v2/src/content/schema.ts';
import { PAYS_TERMS, REFRAME } from './pays-terms.ts';
import {
  AUTHORED_SENTENCES, FEMININE, GRID_COUNTRY, GRID_SLOTS, MASCULINE, PLURAL, READING_ONLY_IDS,
  THE_TWELVE, VOWEL_MASCULINE, authoredIds, country, enOf, frOf, gridCell, sub,
} from './pays-corpus.ts';

export { REFRAME };

/* ─── The corpus this lesson sequences ─────────────────────────────────────
 *
 * Grouped by the job the ids do, so a section names a GROUP and the tranche
 * slices read from the same groups rather than restating a word list.
 *
 * Every id below is SHOWN on a screen, or named by a drill or a term. a1.08
 * shipped 43 itemIds named by nothing at all, released to spaced repetition and
 * drawn by no component, and it was invisible until a check asked "did the
 * learner see it" rather than "does this id resolve".                        */

/** The twelve country headwords. NOT ONE IS AUTHORED: every country and every
 *  nationality this lesson teaches is already published, and re-authoring one
 *  would fail flashhub-coverage.test.ts, which keys decks on `fr` per theme. */
const COUNTRY_IDS = THE_TWELVE.map((c) => c.id);

/** The twelve nationality headwords, adjacent to their country by id. */
const NAT_IDS = THE_TWELVE.map((c) => c.natId);

/** The six grid cells. Three authored, two imported, one already in the seed. */
const GRID_IDS = GRID_SLOTS.flatMap((s) => [
  gridCell(s as 'f' | 'm' | 'pl', 'to').id,
  gridCell(s as 'f' | 'm' | 'pl', 'from').id,
]);

const GOING_IDS = GRID_SLOTS.map((s) => gridCell(s as 'f' | 'm' | 'pl', 'to').id);
const COMING_IDS = GRID_SLOTS.map((s) => gridCell(s as 'f' | 'm' | 'pl', 'from').id);

const VOWEL_IDS = authoredIds('vowel');            // .313 en Iran, .314 d'Iran
const E_EXCEPTION_IDS = authoredIds('e-exception'); // .315 au Mexique
const AGREEMENT_IDS = authoredIds('agreement');     // .316 canadien, .317 canadienne
const CAPITAL_IDS = authoredIds('capital');         // .318 C'est un Français.
const SECOND_PAIR_IDS = authoredIds('second-pair'); // .319 en Belgique, .320 de Belgique

/** The corpus already carrying this lesson's rules, written by nobody teaching
 *  them. Three of these are third-person `vient` and are READING ONLY. */
const COMING_WILD = [
  'fr.a1.pays-et-nationalites.204', // Je viens du Sénégal.
  'fr.a1.pays-et-nationalites.216', // Je viens du Mexique.        the -e country, coming from
  'fr.a1.pays-et-nationalites.225', // Je viens d'Espagne.         de cut short before a vowel
  'fr.a1.pays-et-nationalites.218', // Il vient du Japon.          READING ONLY
  'fr.a1.pays-et-nationalites.226', // Elle vient d'Italie.        READING ONLY
  'fr.a1.pays-et-nationalites.233', // Il vient des États-Unis.    READING ONLY
];

const GOING_WILD = [
  'fr.a1.pays-et-nationalites.235', // J'habite au Canada depuis deux ans.
  'fr.sons.liaisons.059',           // Mon frère travaille aux États-Unis.
];

/** The article doing ordinary work, with no preposition in front of it at all.
 *  Act 1 needs these: the reframe is about STORAGE, and a learner shown la
 *  France only ever inside `en France` never sees the article on its own. */
const ARTICLE_WILD = [
  'fr.a1.pays-et-nationalites.254', // La France est un pays d'Europe.
  'fr.a1.pays-et-nationalites.255', // Le Canada est un grand pays.
  'fr.a1.pays-et-nationalites.288', // Les États-Unis sont grands.
];

/** The nationality after être, and the agreement the corpus already holds. */
const NATIONALITY_WILD = [
  'fr.a1.presentation-personnelle.012', // Il est français.
  'fr.a1.metiers.264',                  // Je suis français.
  'fr.a1.pays-et-nationalites.198',     // Je suis canadien.
  'fr.a1.pays-et-nationalites.199',     // Elle est française.
  'fr.a1.pays-et-nationalites.081',     // Elle est canadienne, mais elle habite en France.
  'fr.sons.muettes.051',                // française   the one right transcription in the area
];

const ITEM_IDS = [
  ...new Set([
    ...COUNTRY_IDS, ...ARTICLE_WILD, ...NAT_IDS,
    ...GRID_IDS, ...VOWEL_IDS, ...E_EXCEPTION_IDS, ...SECOND_PAIR_IDS,
    ...GOING_WILD, ...COMING_WILD,
    ...AGREEMENT_IDS, ...CAPITAL_IDS, ...NATIONALITY_WILD,
  ]),
];

/** Spoken practice draws ONLY from items carrying `voiceflash`, because that is
 *  the drill the mic-scored deck runs. An item without it renders as a card the
 *  learner cannot be scored on, which looks like a broken mission rather than a
 *  missing tag.
 *
 *  NOT ONE BARE PREPOSITION IS IN HERE, and no line is a preposition on its own.
 *  `en` and `au` are unstressed function words that only exist attached to a
 *  country: a speak mission on the six of them would have the learner say six
 *  sounds none of which can be right or wrong. So the spoken mission is the
 *  eleven authored sentences plus the one published `aux` line, every one of
 *  which has a country in it.
 *
 *  THE THIRD-PERSON ROWS ARE EXCLUDED BY CONSTRUCTION. `Il vient du Japon.` is
 *  legitimate reading exposure and must never be asked for as output, because
 *  `venir` is a2.02 and this lesson has one frozen person of it. */
const SPEAK_IDS = [
  ...AUTHORED_SENTENCES.map((s) => s.id),
  'fr.sons.liaisons.059',
];

/** The dictée. Every target was chosen by MEASUREMENT rather than taste: letters
 *  mode makes the learner write the preposition themselves, which is the entire
 *  point in a lesson about choosing between two short words. See the header for
 *  the three targets that cannot be here. */
const DICTATION_IDS = [
  'fr.a1.pays-et-nationalites.310',      // Je vais en France.      en, on a la country
  'fr.a1.presentation-personnelle.028',  // Je viens du Canada.     du, on a le country
  'fr.a1.pays-et-nationalites.313',      // Je vais en Iran.        the exception
  'fr.a1.pays-et-nationalites.315',      // Je vais au Mexique.     the e that is only a hint
  'fr.a1.pays-et-nationalites.316',      // Il est canadien.        no article, and the nasal
];

const FR = GRID_COUNTRY.f;   // la France
const CA = GRID_COUNTRY.m;   // le Canada
const US = GRID_COUNTRY.pl;  // les États-Unis
const IR = VOWEL_MASCULINE[0]; // l'Iran
const MX = country('Mexique');

/* ─── Mission 1 · Scene ────────────────────────────────────────────────────
 *
 * The A1 register of stakes is being MISREAD AS A PERSON rather than being
 * corrected, and the misreading here is about how much French you have.
 *
 * THE BRIEF'S SCENE IS NOT USED, AND THE REASON IS IN pays-corpus.ts. It
 * proposes « Je suis un français », with the article, as the opening beat.
 * a1.06.l1 ALREADY SHIPS THAT EXACT ERROR as a trap card, twice, with the
 * capital-F variant beside it: "Saying « Je suis un français. »" and "Writing
 * « Je suis Français. » with a capital F". Opening a1.22 on it would be the
 * second lesson in the course to run the same beat, and a learner who has done
 * a1.06 would recognise it as a repeat rather than as a scene.
 *
 * So the scene is built on this lesson's own material. Amina is a week into a
 * new job. Asked where she is from, she says « Je viens du France. » Every word
 * is a real word, the sentence is understood immediately, and nobody corrects
 * it. What happens instead is that Théo switches to English, kindly, and stays
 * there, and she never finds out why. That is the honest A1 cost of a wrong
 * preposition: not a breakdown, a conversation quietly moving to the other
 * language.
 *
 * The weaker beat, deliberately not the one: « Je vais en Canada », which is
 * understood and merely marks a beginner. It is on the traps card instead.
 *
 * The choice beat is `de France` against `du France`, which is the lesson's own
 * grid cell, so the beat, the table, the drill and the dictée are the same row.
 */

const SCENE_BEATS: SceneBeat[] = [
  {
    kind: 'narration',
    size: 'md',
    text: 'Your second week at a new job in Lyon. The coffee machine, ten past nine, and somebody you have not met yet.',
    audio: { mode: 'tts', voice: 'coach' },
  },
  {
    kind: 'narration',
    size: 'md',
    text: 'You have been doing well all week. You have ordered lunch, asked for the wifi password, and understood most of a meeting.',
    audio: { mode: 'tts', voice: 'coach' },
  },
  {
    kind: 'bubble',
    from: 'them',
    reveal: 'auto',
    size: 'md',
    speaker: 'Théo',
    fr: 'Vous venez d\'où, alors ?',
    en: 'So where are you from?',
    stage: 'He is waiting for the machine to finish. It is small talk and nothing rides on it.',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a1-22-scene' },
  },
  {
    kind: 'choice',
    size: 'lg',
    prompt: 'You are from France, and you have said this sentence in your head twice already. Which line comes out?',
    options: [
      {
        fr: 'Je viens du France.',
        respell: '[zhuh vyaⁿ dü FRAHⁿSS]',
        en: 'the word you use for most countries',
        outcome: 'breaks',
        audio: { mode: 'tts', lang: 'fr-FR' },
      },
      {
        fr: frOf(gridCell('f', 'from').id),
        respell: sub(FR.from).replace(/^\[/, '[zhuh vyaⁿ '),
        en: 'the word this country happens to take',
        outcome: 'works',
        audio: { mode: 'tts', lang: 'fr-FR' },
      },
    ],
    followUp: {
      works: 'Yes. Watch the other one, because it is understood perfectly and it still costs you something.',
      breaks: 'One letter. He understands you completely. Watch what he does next.',
    },
  },
  {
    kind: 'bubble',
    from: 'you',
    reveal: 'auto',
    size: 'md',
    speaker: 'You',
    fr: 'Je viens du France.',
    en: '(Understood. Every word real. One letter wrong)',
    audio: { mode: 'tts', lang: 'fr-FR' },
  },
  {
    kind: 'bubble',
    from: 'them',
    reveal: 'auto',
    size: 'md',
    speaker: 'Théo',
    fr: 'Oh, nice! And how are you finding Lyon?',
    en: 'Oh, nice! And how are you finding Lyon?',
    stage: 'He is being kind. He heard a learner, decided to make it easier, and switched. He will not switch back today.',
    audio: { mode: 'tts', lang: 'en-GB' },
  },
  {
    kind: 'break',
    size: 'lg',
    heading: 'Nothing went wrong, and the French stopped',
    // 33 words. The shipped scene breaks run 24 to 40 here.
    body: 'He understood you. He was not correcting you and he was not judging you. He heard one word that a French speaker would not have said, and quietly made the conversation easier for you.',
    wrong: {
      fr: 'Je viens du France.',
      ipa: '/ʒə vjɛ̃ dy fʁɑ̃s/',
      respell: '[zhuh vyaⁿ dü FRAHⁿSS]',
      en: 'Understood, and not something anybody says',
    },
    right: {
      fr: frOf(gridCell('f', 'from').id),
      ipa: '/ʒə vjɛ̃ də fʁɑ̃s/',
      respell: '[zhuh vyaⁿ duh FRAHⁿSS]',
      en: 'I come from France',
    },
    coach: `${REFRAME} The article on la France was the whole difference, and it was decided the day you learned the word.`,
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], audioFirst: true, recordingId: 'rec-a1-22-grid' },
  },
  {
    kind: 'bubble',
    from: 'you',
    reveal: 'tap',
    size: 'md',
    speaker: 'The next morning, same machine',
    fr: frOf(gridCell('f', 'from').id),
    en: 'I come from France.',
    stage: 'One letter different, and it is the only letter in the sentence that was ever carrying anything.',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65] },
  },
  {
    kind: 'bubble',
    from: 'them',
    reveal: 'auto',
    size: 'md',
    speaker: 'Théo',
    fr: 'Ah, de France ! Et vous êtes ici depuis longtemps ?',
    en: 'Ah, from France! And have you been here long?',
    stage: 'He stays in French this time, and neither of you mentions yesterday.',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a1-22-scene' },
  },
  {
    kind: 'resolve',
    size: 'md',
    text: 'One letter, and it was not a letter you could work out in the moment. The next half hour is about where it comes from.',
  },
];

const SECTIONS: LessonSection[] = [
  /* ── Act 1: the article travels with the word ──────────────────────────── */

  {
    type: 'scene',
    id: 's01-scene',
    title: 'The Morning The French Stopped',
    frSub: 'De France ou du France ?',
    render: 'screens',
    layer: 'core',
    terms: ['articleTravels'],
    say: {
      text: 'One letter wrong, understood perfectly, and the conversation moves to English. Watch which letter.',
      voice: 'coach',
      timing: 'onFirstVisitOnly',
    },
    setting: {
      place: 'An office kitchen with a coffee machine that takes its time',
      city: 'Lyon',
      time: 'Tuesday, ten past nine',
      ambience: 'room-tone-lobby',
    },
    beats: SCENE_BEATS,
    closing: {
      size: 'md',
      text: `${REFRAME} That is the next half hour.`,
    },
  },

  {
    type: 'goals',
    id: 's02-goals',
    title: 'What You Will Be Able To Do',
    frSub: 'Ce que vous saurez faire',
    layer: 'core',
    say: 'Four things, and the first is a habit rather than a list.',
    goals: [
      { t: 'Store a country the way it is used', s: 'With its article, every time, because that one fact settles everything you will do with it afterwards.' },
      { t: 'Say where you are going', s: 'en, au and aux, chosen by the article and by nothing else.' },
      { t: 'Say where you are from', s: 'de, du and des, chosen by the same fact all over again. One decision, two systems.' },
      { t: 'Say what you are', s: 'A nationality with nothing in front of it, agreeing the way colours agree, and one capital letter that is not where English puts it.' },
    ],
  },

  {
    type: 'cardDeck',
    id: 's03-article',
    title: 'Half A Word Is Not A Word',
    frSub: "L'article fait partie du mot",
    hint: 'Five cards before any country list.',
    render: 'deck',
    layer: 'core',
    size: 'lg',
    terms: ['articleTravels', 'theEndingIsAHint'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a1-22-articles' },
    say: 'Five cards before any table, because this habit is what the tables are for.',
    cards: [
      {
        label: 'what you already do',
        head: 'You have been asked for this before',
        fr: `${FR.fr} · ${CA.fr}`,
        sub: `${sub(FR.fr)} · ${sub(CA.fr)}`,
        body: 'The noun gender lesson asked you to learn the article rather than the noun, and said the payoff would come later. This is later. Countries are where the habit pays for itself inside one sentence.',
      },
      {
        label: 'the article is not optional',
        head: 'A country is almost never bare',
        fr: frOf('fr.a1.pays-et-nationalites.254'),
        sub: enOf('fr.a1.pays-et-nationalites.254'),
        body: 'French says la France where English says France, and the la is not there for emphasis. It is part of how the word is stored and part of how it is used, and it turns up in ordinary sentences nobody wrote to teach you anything.',
      },
      {
        label: 'the same, the other kind',
        head: 'And le for the others',
        fr: `${frOf('fr.a1.pays-et-nationalites.255')} ${frOf('fr.a1.pays-et-nationalites.288')}`,
        sub: `${enOf('fr.a1.pays-et-nationalites.255')} · ${enOf('fr.a1.pays-et-nationalites.288')}`,
        body: 'Le Canada, and les États-Unis with a plural article because the name is plural. Three kinds of country in three ordinary sentences, and the only thing separating them is the little word in front.',
      },
      {
        label: 'the hint',
        head: 'Most la countries end in an e',
        fr: `${FR.fr} · ${country('Belgique').fr} · ${country('Italie').fr} · ${country('Espagne').fr}`,
        sub: 'and so do Allemagne, Chine, Russie, Suisse',
        body: 'A good hint, and not a rule. The noun gender lesson measured that ending across the whole app and found it right about seven times in ten. On countries it does better, which is exactly what makes people stop checking.',
      },
      {
        label: 'why it matters this much',
        head: 'One fact, four words',
        fr: `${FR.to} · ${FR.from} · ${CA.to} · ${CA.from}`,
        sub: `${sub(FR.to)} · ${sub(FR.from)} · ${sub(CA.to)} · ${sub(CA.from)}`,
        body: `Going to a country and coming from one are two questions with one answer between them, and the answer is the article. ${REFRAME}`,
      },
    ],
  },

  {
    type: 'groupDrill',
    id: 's04-sort',
    title: 'Which Little Word?',
    frSub: 'la, le ou les',
    layer: 'core',
    terms: ['articleTravels', 'theEndingIsAHint'],
    say: 'Three groups of countries and one question about each. Nothing here is about where they are.',
    groups: [
      {
        label: 'the la kind',
        items: FEMININE.map((c) => ({ fr: c.fr, itemId: c.id, respell: `[${c.respell}]`, en: c.en })),
        check: {
          q: 'Four of those five end in an e. Which one does not?',
          opts: ['la France', 'la Belgique', "l'Italie", "l'Espagne"],
          correct: 0,
          why: 'la France ends in an e as well, so all five do. That is what makes the ending such a good hint here and such a bad rule: it works often enough that you stop checking, and then le Mexique arrives.',
        },
      },
      {
        label: 'the le kind',
        items: MASCULINE.map((c) => ({ fr: c.fr, itemId: c.id, respell: `[${c.respell}]`, en: c.en })),
        check: {
          q: 'One of those five ends in an e and still takes le. Which one?',
          opts: ['le Canada', 'le Japon', 'le Mexique', 'le Portugal'],
          correct: 2,
          why: 'le Mexique. It ends in an e, it takes le, and it is the country most likely to catch you out because the hint is so reliable everywhere else. Le Cambodge and le Zimbabwe do the same thing.',
        },
      },
      {
        label: 'the les kind, and the one with a vowel',
        items: [...PLURAL, ...VOWEL_MASCULINE].map((c) => ({
          fr: c.fr, itemId: c.id, respell: `[${c.respell}]`, en: c.en,
        })),
        check: {
          q: 'les États-Unis takes a plural article. What decides that?',
          opts: [
            'It is a large country',
            'The name itself is plural',
            'It is far away',
            'It begins with a vowel',
          ],
          correct: 1,
          why: 'The name is plural. États-Unis is literally united states, more than one of them, so it takes les the way any plural noun does. That plural follows the country everywhere it goes and gives it its own row in everything this lesson does next.',
        },
      },
      {
        label: 'the whole habit',
        items: [],
        check: {
          q: 'You meet a new country word for the first time. What should you write down?',
          opts: [
            'The country and where it is',
            'The country and its nationality',
            'The country with its article',
            'The country and how to say it',
          ],
          correct: 2,
          why: `${REFRAME} Everything this lesson does after this point is decided by that one word, and you cannot work it out later from the country itself. Store it now or guess forever.`,
        },
      },
    ],
  },

  /* ── Act 2: the countries ──────────────────────────────────────────────── */

  {
    type: 'tapTable',
    id: 's05-pairs',
    title: 'Two Words, Not One',
    frSub: 'Le pays et la nationalité',
    layer: 'core',
    terms: ['nationalityIsAWord', 'articleTravels'],
    sheetId: 'sheet.a1.22.countries',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a1-22-pairs' },
    say: 'The place on the left and what you are on the right. Two separate words. Tap any cell to hear it.',
    cols: ['the country', 'what you are'],
    rows: [FR, CA, country('Espagne'), country('Japon')].map((c) => ({
      cells: [c.fr, c.nat],
      say: `${c.fr}, ${c.nat}`,
      detail: {
        title: `${c.en} and ${c.natEn}`,
        body: `${c.fr} ${sub(c.fr)} is the place. ${c.nat} ${c.natRespell} is what a person is. `
          + 'They are stored separately and only one of them carries an article: a nationality never takes '
          + 'one at all.',
        say: `${c.fr}, ${c.nat}`,
      },
    })),
  },

  {
    type: 'cardDeck',
    id: 's06-hint',
    title: 'The Hint And The One That Breaks It',
    frSub: "Le e final n'est qu'un indice",
    hint: 'Four cards on an ending you are about to over-trust.',
    render: 'deck',
    layer: 'core',
    size: 'lg',
    terms: ['theEndingIsAHint', 'articleTravels'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a1-22-articles' },
    say: 'A hint worth having, and the country that will make you regret trusting it.',
    cards: [
      {
        label: 'the hint working',
        head: 'e on the end, la in front',
        fr: `${country('Italie').fr} · ${country('Espagne').fr} · ${country('Allemagne').fr}`,
        sub: `${sub(country('Italie').fr)} · ${sub(country('Espagne').fr)} · ${sub(country('Allemagne').fr)}`,
        body: 'Three la countries and all three end in an e. The l apostrophe hides which article it was, which is the same thing the noun gender lesson warned you about, and it is worth saying out loud: those are la words wearing a shortened article.',
      },
      {
        label: 'the hint working the other way',
        head: 'No e, le in front',
        fr: `${CA.fr} · ${country('Japon').fr} · ${country('Sénégal').fr} · ${country('Portugal').fr}`,
        sub: 'Canada, Japon, Sénégal, Portugal',
        body: 'Four le countries and not an e among them. So far the ending has told you the truth eight times out of eight, which is exactly how a hint turns into a habit you stop questioning.',
      },
      {
        label: 'the one that breaks it',
        head: MX.fr,
        fr: MX.fr,
        sub: `${sub(MX.fr)} · ${MX.en}`,
        body: 'Ends in an e and takes le. So do le Cambodge and le Zimbabwe. There are only a few of them and this is the one you will meet, which is why it is on a card of its own rather than in a footnote.',
      },
      {
        label: 'what to do about it',
        head: 'Guess with the ending, store the article',
        body: `The ending is for the moment somebody says a country you have never met and you have to answer anyway. It is not a substitute for knowing. ${REFRAME}`,
      },
    ],
  },

  {
    type: 'vocabThemes',
    id: 's07-words',
    title: 'Twelve Countries, Banked',
    frSub: 'Le vocabulaire',
    layer: 'core',
    terms: ['articleTravels', 'nationalityIsAWord'],
    sheetId: 'sheet.a1.22.countries',
    say: 'Three decks. Every card carries the article, because a card without it is half a card.',
    themes: [
      {
        title: 'the la kind',
        cards: FEMININE.flatMap((c) => [
          { fr: c.fr, sub: `${c.respell} · ${c.en}`, en: c.en },
          { fr: c.nat, sub: `${c.natRespell.replace(/^\[|\]$/g, '')} · ${c.natEn}`, en: c.natEn },
        ]),
      },
      {
        title: 'the le kind',
        cards: MASCULINE.flatMap((c) => [
          { fr: c.fr, sub: `${c.respell} · ${c.en}`, en: c.en },
          { fr: c.nat, sub: `${c.natRespell.replace(/^\[|\]$/g, '')} · ${c.natEn}`, en: c.natEn },
        ]),
      },
      {
        title: 'the two that behave differently',
        cards: [...PLURAL, ...VOWEL_MASCULINE].flatMap((c) => [
          { fr: c.fr, sub: `${c.respell} · ${c.en}`, en: c.en },
          { fr: c.nat, sub: `${c.natRespell.replace(/^\[|\]$/g, '')} · ${c.natEn}`, en: c.natEn },
        ]),
      },
    ],
  },

  {
    type: 'groupDrill',
    id: 's08-check',
    title: 'Now Without The Deck',
    frSub: 'Sans les cartes',
    layer: 'core',
    terms: ['articleTravels', 'theEndingIsAHint'],
    say: 'Four questions, nothing to look at. This is the one that tells you whether the articles landed.',
    groups: [
      {
        label: 'A country you have met',
        items: [],
        check: {
          q: 'Which article goes with Japon?',
          opts: ['la', 'le', 'les', "l'"],
          correct: 1,
          why: 'le Japon. No e on the end, and the article is the fact everything else in this lesson is about to ask you for.',
        },
      },
      {
        label: 'A country you have not',
        items: [],
        check: {
          q: 'You meet la Chine for the first time. Which kind is it?',
          opts: ['the le kind', 'the la kind', 'the les kind', 'it has no article'],
          correct: 1,
          why: 'the la kind, and the article told you rather than the country. Chine ends in an e as well, so the hint and the article agree here, which is the ordinary case.',
        },
      },
      {
        label: 'The one that breaks the hint',
        items: [],
        check: {
          q: 'Mexique ends in an e. Which article does it take?',
          opts: ['la', 'le', 'les', 'either'],
          correct: 1,
          why: 'le Mexique. The ending was wrong here and the article was not, which is the whole argument for storing the article rather than the ending.',
        },
      },
      {
        label: 'The country and the person',
        items: [],
        check: {
          q: 'la France is the country. What is the word for a person from there?',
          opts: ['la France', 'français', 'la français', 'le France'],
          correct: 1,
          why: 'français, with no article at all. A nationality is a different word from the country and it never carries le or la in front of it. The country keeps its article and the nationality never had one.',
        },
      },
    ],
  },

  /* ── Act 3: going there ────────────────────────────────────────────────── */

  {
    type: 'cardDeck',
    id: 's09-going',
    title: 'Ask The Article Before The Preposition',
    frSub: 'en, au, aux',
    hint: 'Five cards, and one of them is about a verb you are not learning yet.',
    render: 'deck',
    layer: 'core',
    size: 'lg',
    terms: ['goingAndComing', 'articleTravels'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a1-22-going' },
    say: 'Three words for one English one, and the country picks between them before you open your mouth.',
    cards: [
      {
        label: 'the la kind',
        head: 'en',
        fr: frOf(gridCell('f', 'to').id),
        sub: `${sub(FR.to)} · ${enOf(gridCell('f', 'to').id)}`,
        body: 'la France, so en France. There is no la left in the sentence: en has taken its place, exactly as a possessive takes the place of le. You never say en la France.',
      },
      {
        label: 'the le kind',
        head: 'au',
        fr: frOf(gridCell('m', 'to').id),
        sub: `${sub(CA.to)} · ${enOf(gridCell('m', 'to').id)}`,
        body: 'le Canada, so au Canada. That au is the le folded into the preposition, which is the same fold you met in the indefinite articles lesson: à plus le is au and it is never written any other way.',
      },
      {
        label: 'the les kind',
        head: 'aux',
        fr: frOf(gridCell('pl', 'to').id),
        sub: `${sub(US.to)} · ${enOf(gridCell('pl', 'to').id)}`,
        body: 'les États-Unis, so aux États-Unis. The x wakes up as a z in front of the vowel, so this comes out as one long word rather than two. It is worth learning as a single sound.',
      },
      {
        label: 'in the wild',
        head: 'Nobody arranged these',
        fr: `${frOf('fr.a1.pays-et-nationalites.235')} ${frOf('fr.sons.liaisons.059')}`,
        sub: `${enOf('fr.a1.pays-et-nationalites.235')} · ${enOf('fr.sons.liaisons.059')}`,
        body: 'Two published sentences with no interest in teaching you a preposition, both doing exactly what the cards above said. The second one is from the liaison lesson, where aux États-Unis is already an example of something else.',
      },
      {
        label: 'the verb',
        head: 'Je vais is a phrase for now',
        fr: 'Je vais',
        sub: 'I am going, I go',
        body: 'The verb behind this is aller, and you meet it properly a whole band from here. Until then take je vais as one piece, the way you took il fait in the weather lesson. You need one person of it and it is your own.',
      },
    ],
  },

  {
    type: 'tapTable',
    id: 's10-table-going',
    title: 'Three Rows, One Column',
    frSub: 'Où allez-vous ?',
    layer: 'core',
    terms: ['goingAndComing'],
    sheetId: 'sheet.a1.22.grid',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a1-22-going' },
    say: 'One column for now. The second one arrives in a few minutes and it is the same decision again.',
    cols: ['going there'],
    rows: (['f', 'm', 'pl'] as const).map((s) => {
      const c = GRID_COUNTRY[s];
      return {
        cells: [c.to],
        say: c.to,
        detail: {
          title: `${c.fr}, so ${c.to.split(' ')[0]}`,
          body: `${frOf(gridCell(s, 'to').id)} ${sub(c.to)} The article on ${c.fr} chose that first word and `
            + 'nothing else in the sentence had any say in it. Change the country and only that word moves.',
          say: frOf(gridCell(s, 'to').id),
        },
      };
    }),
  },

  {
    type: 'cardDeck',
    id: 's11-vowel',
    title: 'The Sixth Time You Have Met This',
    frSub: 'Devant une voyelle',
    hint: 'Four cards, and the idea in them is not new.',
    render: 'deck',
    layer: 'core',
    size: 'lg',
    terms: ['vowelRepair', 'goingAndComing'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a1-22-vowel' },
    say: 'One old idea, one new place it turns up. You have watched French dodge this collision five times already.',
    cards: [
      {
        label: 'the problem',
        head: 'au Iran',
        fr: 'au Iran',
        sub: 'not French, and it never has been',
        body: 'Say those two at ordinary speed and the o runs straight into the i. French has a standing objection to two vowel sounds meeting with nothing between them, and you have watched it deal with that objection five times now.',
      },
      {
        label: 'the five you have seen',
        head: 'Always the same objection',
        fr: "l'amie · mon amie · n'ai · est-ce qu'il · combien d'ans",
        sub: 'the definite articles, the possessives, the negative, the question, the counting',
        body: 'Every one of those was two vowels being kept apart, and each lesson solved it slightly differently: some cut the little word short, one swapped it for another shape. Six rules, one idea behind them.',
      },
      {
        label: 'the repair here',
        head: 'The le kind borrows en',
        fr: frOf(VOWEL_IDS[0]),
        sub: `${sub(IR.to)} · ${enOf(VOWEL_IDS[0])}`,
        body: `${IR.fr} is the le kind and ought to take au. It takes en instead, purely for the sound. The n of en arrives on the front of Iran and is fully pronounced, so this is three syllables rather than a pause.`,
      },
      {
        label: 'how far it reaches',
        head: 'Only the going-to column',
        fr: frOf(VOWEL_IDS[1]),
        sub: `${sub(IR.from)} · ${enOf(VOWEL_IDS[1])}`,
        body: 'Coming the other way the exception is over. This is the ordinary de of a le country, cut short in front of a vowel like every other de. So one country and one column, not one country and a whole new set of rules.',
      },
    ],
  },

  {
    type: 'groupDrill',
    id: 's12-drill-going',
    title: 'Where Are You Going?',
    frSub: 'en, au ou aux',
    layer: 'core',
    terms: ['goingAndComing', 'vowelRepair'],
    say: 'Four decisions and each one is answered by the article rather than by the country.',
    groups: [
      {
        label: 'the la kind',
        items: [
          { fr: frOf(gridCell('f', 'to').id), itemId: gridCell('f', 'to').id, respell: sub(FR.to), en: enOf(gridCell('f', 'to').id) },
          { fr: frOf(SECOND_PAIR_IDS[0]), itemId: SECOND_PAIR_IDS[0], respell: sub(country('Belgique').to), en: enOf(SECOND_PAIR_IDS[0]) },
        ],
        check: {
          q: 'You are going to Italy, and it is l\'Italie. Which word?',
          opts: ['au', 'en', 'aux', 'à la'],
          correct: 1,
          why: 'en Italie. The l apostrophe is hiding a la, so this is the la kind and takes en. If you cannot tell which article an l apostrophe country carries, that is the thing to go and look up rather than something to reason out.',
        },
      },
      {
        label: 'the le kind',
        items: [
          { fr: frOf(gridCell('m', 'to').id), itemId: gridCell('m', 'to').id, respell: sub(CA.to), en: enOf(gridCell('m', 'to').id) },
          { fr: frOf(E_EXCEPTION_IDS[0]), itemId: E_EXCEPTION_IDS[0], respell: sub(MX.to), en: enOf(E_EXCEPTION_IDS[0]) },
        ],
        check: {
          q: 'You are going to Portugal, and it is le Portugal. Which word?',
          opts: ['en', 'aux', 'au', 'du'],
          correct: 2,
          why: 'au Portugal. The le has folded into the preposition and disappeared, which is why there is no le anywhere in the finished sentence. Every le country in this lesson does the same.',
        },
      },
      {
        label: 'the les kind',
        items: [
          { fr: frOf(gridCell('pl', 'to').id), itemId: gridCell('pl', 'to').id, respell: sub(US.to), en: enOf(gridCell('pl', 'to').id) },
          { fr: frOf('fr.sons.liaisons.059'), itemId: 'fr.sons.liaisons.059', en: enOf('fr.sons.liaisons.059') },
        ],
        check: {
          q: 'aux États-Unis, said out loud. How many words does it sound like?',
          opts: ['three, clearly separated', 'one long word', 'two, with a pause', 'it depends on the speaker'],
          correct: 1,
          why: 'One long word. The x of aux wakes up as a z and attaches to the front of États, so the whole thing runs together. This is why a recording of aux on its own would teach you nothing at all.',
        },
      },
      {
        label: 'the exception',
        items: [
          { fr: frOf(VOWEL_IDS[0]), itemId: VOWEL_IDS[0], respell: sub(IR.to), en: enOf(VOWEL_IDS[0]) },
        ],
        check: {
          q: 'l\'Iran is the le kind. Why is it en Iran rather than au Iran?',
          opts: [
            'Iran is not really a country',
            'Because it starts with a vowel',
            'Because it is far away',
            'Because Iran has no article',
          ],
          correct: 1,
          why: 'Because it starts with a vowel. Au Iran would put two vowel sounds against each other, so the going-to column borrows en. Nothing about the country changed kind: it is still the le kind and it still takes du coming back.',
        },
      },
    ],
  },

  /* ── Act 4: coming from ────────────────────────────────────────────────── */

  {
    type: 'cardDeck',
    id: 's13-coming',
    title: 'The Same Decision, Again',
    frSub: 'de, du, des',
    hint: 'Five cards, and you have already done the hard part of all of them.',
    render: 'deck',
    layer: 'core',
    size: 'lg',
    terms: ['goingAndComing', 'articleTravels'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a1-22-grid' },
    say: 'Three more words, chosen by the fact you already looked up. Nothing new is being asked of you here.',
    cards: [
      {
        label: 'the la kind',
        head: 'de',
        fr: frOf(gridCell('f', 'from').id),
        sub: `${sub(FR.from)} · ${enOf(gridCell('f', 'from').id)}`,
        body: 'la France, so de France, and the la disappears exactly as it did with en. This is the sentence from the opening scene and the whole thing turned on one letter of it.',
      },
      {
        label: 'the le kind',
        head: 'du',
        fr: frOf(gridCell('m', 'from').id),
        sub: `${sub(CA.from)} · ${enOf(gridCell('m', 'from').id)}`,
        body: 'le Canada, so du Canada. Du is de plus le folded together, the same fold that gave you au, and you met it in the partitive lesson as well. One fold, three places.',
      },
      {
        label: 'the les kind',
        head: 'des',
        fr: frOf(gridCell('pl', 'from').id),
        sub: `${sub(US.from)} · ${enOf(gridCell('pl', 'from').id)}`,
        body: 'les États-Unis, so des États-Unis, and the s wakes up as a z for the same reason the x did. Aux and des behave identically here, which is the tidiest thing in the lesson.',
      },
      {
        label: 'cut short before a vowel',
        head: "d'Espagne, d'Italie",
        fr: `${frOf('fr.a1.pays-et-nationalites.225')} ${frOf('fr.a1.pays-et-nationalites.226')}`,
        sub: `${enOf('fr.a1.pays-et-nationalites.225')} · ${enOf('fr.a1.pays-et-nationalites.226')}`,
        body: 'Both of those are la countries and both take de. In front of a vowel the de is cut short to d apostrophe, which is the ordinary elision you have had since the silent letters lesson rather than anything new here.',
      },
      {
        label: 'in the wild',
        head: 'The corpus does it without being asked',
        fr: `${frOf('fr.a1.pays-et-nationalites.204')} ${frOf('fr.a1.pays-et-nationalites.218')} ${frOf('fr.a1.pays-et-nationalites.233')}`,
        sub: `${enOf('fr.a1.pays-et-nationalites.204')} · ${enOf('fr.a1.pays-et-nationalites.218')} · ${enOf('fr.a1.pays-et-nationalites.233')}`,
        body: 'du, du and des, on three countries, in three published sentences. The last two use a form of the verb you are not learning here: read them and leave them, because the only thing you need from them is the small word in the middle.',
      },
    ],
  },

  {
    // THE HERO. Three rows, two columns, a real country in every cell, and both
    // directions ON ONE SCREEN. This is the layout the test asserts: split
    // across two missions the two systems stop looking like one decision, which
    // is the entire claim of the lesson.
    type: 'tapTable',
    id: 's14-grid',
    title: 'Both Columns, One Fact',
    frSub: 'Aller et venir',
    layer: 'core',
    terms: ['goingAndComing', 'articleTravels'],
    sheetId: 'sheet.a1.22.grid',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a1-22-grid' },
    say: `${REFRAME} Read across a row. Both cells were chosen by the same article. Tap any cell to hear it.`,
    cols: ['going there', 'coming from'],
    rows: (['f', 'm', 'pl'] as const).map((s) => {
      const c = GRID_COUNTRY[s];
      return {
        cells: [c.to, c.from],
        say: `${c.to}, ${c.from}`,
        detail: {
          title: `${c.fr}: ${c.to.split(' ')[0]} and ${c.from.split(' ')[0]}`,
          body: `${frOf(gridCell(s, 'to').id)} ${frOf(gridCell(s, 'from').id)} `
            + `${sub(c.to)} ${sub(c.from)} Two sentences, one country, and the same article picked both `
            + 'small words. Read the row above and the row below: only the country moved.',
          say: `${frOf(gridCell(s, 'to').id)} ${frOf(gridCell(s, 'from').id)}`,
        },
      };
    }),
  },

  {
    type: 'groupDrill',
    id: 's15-drill-coming',
    title: 'Where Are You From?',
    frSub: 'de, du ou des',
    layer: 'core',
    terms: ['goingAndComing', 'vowelRepair'],
    say: 'Four more, and the article you look at is the same one you looked at going the other way.',
    groups: [
      {
        label: 'the la kind',
        items: [
          { fr: frOf(gridCell('f', 'from').id), itemId: gridCell('f', 'from').id, respell: sub(FR.from), en: enOf(gridCell('f', 'from').id) },
          { fr: frOf(SECOND_PAIR_IDS[1]), itemId: SECOND_PAIR_IDS[1], respell: sub(country('Belgique').from), en: enOf(SECOND_PAIR_IDS[1]) },
          { fr: frOf('fr.a1.pays-et-nationalites.225'), itemId: 'fr.a1.pays-et-nationalites.225', en: enOf('fr.a1.pays-et-nationalites.225') },
        ],
        check: {
          q: 'You are from Belgium, and it is la Belgique. Which word?',
          opts: ['du', 'des', 'de', 'de la'],
          correct: 2,
          why: 'de Belgique, with nothing between de and the country. This is the sentence the opening scene turned on, on a different country: du Belgique would be understood and it is not something anybody says.',
        },
      },
      {
        label: 'the le kind',
        items: [
          { fr: frOf(gridCell('m', 'from').id), itemId: gridCell('m', 'from').id, respell: sub(CA.from), en: enOf(gridCell('m', 'from').id) },
          { fr: frOf('fr.a1.pays-et-nationalites.204'), itemId: 'fr.a1.pays-et-nationalites.204', en: enOf('fr.a1.pays-et-nationalites.204') },
          { fr: frOf('fr.a1.pays-et-nationalites.216'), itemId: 'fr.a1.pays-et-nationalites.216', en: enOf('fr.a1.pays-et-nationalites.216') },
        ],
        check: {
          q: 'You are from Mexico, and it is le Mexique. Which word?',
          opts: ['de', 'du', 'des', "d'"],
          correct: 1,
          why: 'du Mexique. The e on the end of Mexique has nothing to do with it: the article said le, so the answer is du, and this country is the one that will keep testing whether you trusted the ending or the article.',
        },
      },
      {
        label: 'the les kind',
        items: [
          { fr: frOf(gridCell('pl', 'from').id), itemId: gridCell('pl', 'from').id, respell: sub(US.from), en: enOf(gridCell('pl', 'from').id) },
          { fr: frOf('fr.a1.pays-et-nationalites.233'), itemId: 'fr.a1.pays-et-nationalites.233', en: enOf('fr.a1.pays-et-nationalites.233') },
        ],
        check: {
          q: 'The country is les États-Unis. Going there was aux États-Unis, so coming from there is which word?',
          opts: ['des', 'de', 'du', 'aux'],
          correct: 0,
          why: 'des États-Unis. Aux and des are the same fold made twice, on à plus les and on de plus les. The s of des wakes up as a z exactly as the x of aux did, so the two are mirror images.',
        },
      },
      {
        label: 'both columns at once',
        items: [
          { fr: frOf(VOWEL_IDS[1]), itemId: VOWEL_IDS[1], respell: sub(IR.from), en: enOf(VOWEL_IDS[1]) },
          { fr: frOf('fr.a1.pays-et-nationalites.226'), itemId: 'fr.a1.pays-et-nationalites.226', en: enOf('fr.a1.pays-et-nationalites.226') },
        ],
        check: {
          q: 'You looked up an article once. How many of the six small words does it choose for you?',
          opts: ['one', 'two', 'three', 'all six'],
          correct: 1,
          why: `Two: one for going and one for coming. ${REFRAME} That is why the article is worth the two seconds it takes to store, and why working the ending out later never gets you there.`,
        },
      },
    ],
  },

  {
    type: 'commonErrors',
    // `swipe` and `size` are not decoration. MissionSection renders commonErrors
    // as its own swipe deck ONLY when `swipe` is set; without it the section
    // falls through to a path that drew a BLANK screen on sons.08 m22 and
    // a1.01 m5.
    swipe: true,
    size: 'lg',
    id: 's16-traps',
    title: 'Five Traps',
    frSub: 'Cinq pièges',
    layer: 'core',
    terms: ['goingAndComing', 'vowelRepair', 'articleTravels'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a1-22-traps' },
    say: `${REFRAME} Five things an English speaker says in their first month, one per screen.`,
    errors: [
      {
        wrong: 'Saying « Je viens du France. »',
        right: `Saying « ${frOf(gridCell('f', 'from').id)} »`,
        why: 'The one from the opening scene, and the one that costs the most. Du is right for most countries, which is exactly why it comes out here: the la countries are the smaller group and France is the one you will say most often.',
      },
      {
        wrong: 'Saying « Je vais en Canada. »',
        right: `Saying « ${frOf(gridCell('m', 'to').id)} »`,
        why: 'En is the first of the three you meet and it becomes the default. Le Canada is the le kind, so it takes au. This is understood immediately and simply marks you as new: a smaller cost than the first trap, and a commoner mistake.',
      },
      {
        wrong: 'Saying « Je vais au Iran. »',
        right: `Saying « ${frOf(VOWEL_IDS[0])} »`,
        why: 'Iran is the le kind, so this looks right. Two vowel sounds hard against each other is the one thing French will not do, so the going-to column borrows en. Coming back, d apostrophe Iran is the right one.',
      },
      {
        wrong: 'Saying « Je vais en la France. »',
        right: `Saying « ${frOf(gridCell('f', 'to').id)} »`,
        why: 'The article has already been used up. En, au, aux, de, du and des have all swallowed the article, which is why none of them is ever followed by one. There is no en la, no au le and no des les.',
      },
      {
        wrong: 'Storing a country as France, Canada, Japon.',
        right: `Storing it as ${FR.fr}, ${CA.fr}, ${country('Japon').fr}.`,
        why: 'This is the trap behind the other four and it happens weeks before any of them. A country stored without its article cannot tell you anything later, and there is nothing in the word itself to work it out from when you need it.',
      },
    ],
  },

  /* ── Act 5: what you are ───────────────────────────────────────────────── */

  {
    type: 'cardDeck',
    id: 's17-agreement',
    title: 'You Already Have This One',
    frSub: 'français, française',
    hint: 'Five cards, and four of them are revision.',
    render: 'deck',
    layer: 'core',
    size: 'lg',
    terms: ['nationalityIsAWord'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a1-22-pairs' },
    say: 'The colours lesson taught how these change and the être lesson taught what goes in front of them. Nothing here is new except one letter.',
    // EVERY CARD SHOWS A WHOLE SENTENCE rather than a bare pair of words. The
    // four rows this act releases to spaced repetition are sentences, and a
    // tranche may only release what the learner has actually SEEN: a1.17 shipped
    // two cards released before their mission and its own test caught it.
    cards: [
      {
        label: 'what you already have',
        head: 'A nationality behaves like a colour',
        fr: `${frOf('fr.a1.presentation-personnelle.012')} ${frOf('fr.a1.pays-et-nationalites.199')}`,
        sub: `${FR.natRespell} · ${sub('française')}`,
        body: 'The colours lesson gave you the shape: an e arrives for a woman, and sometimes that e wakes up a letter that had been silent. This is exactly that. The s on the end of français is silent until the e turns up behind it.',
      },
      {
        label: 'the other shape',
        head: 'And the nasal that collapses',
        fr: `${frOf(AGREEMENT_IDS[0])} ${frOf(AGREEMENT_IDS[1])}`,
        sub: `${CA.natRespell} · ${sub('canadienne')}`,
        body: 'The colours lesson had this one too, on brun and brune. The nasal vowel at the end of canadien collapses into a plain one with a real n behind it. Two shapes, both of them already met, arriving on a new set of words.',
      },
      {
        label: 'in the wild',
        head: 'Nobody arranged this one',
        fr: frOf('fr.a1.pays-et-nationalites.081'),
        sub: enOf('fr.a1.pays-et-nationalites.081'),
        body: 'A published sentence with no interest in teaching you anything, carrying the feminine ending and a country with its own small word in front of it. She is one thing and lives somewhere else, and it needs both halves of this lesson to read.',
      },
      {
        label: 'what goes in front',
        head: 'Nothing at all',
        fr: `${frOf('fr.a1.presentation-personnelle.012')} ${frOf('fr.a1.metiers.264')}`,
        sub: `${enOf('fr.a1.presentation-personnelle.012')} · ${enOf('fr.a1.metiers.264')}`,
        body: 'The être lesson said this about jobs and nationalities together, and it holds without exception. English needs an article there and French does not, so a nationality after être stands on its own.',
      },
      {
        label: 'the ones that never change',
        head: 'belge, for anybody',
        fr: country('Belgique').nat,
        sub: `${country('Belgique').natRespell} · Belgian`,
        body: 'It already ends in an e, so there is nothing for another e to do. Russe, suisse and tchèque are the same. A handful of nationalities are one word for everybody, and they are the ones that already look feminine.',
      },
    ],
  },

  {
    type: 'listening',
    id: 's18-ear',
    title: 'The One Pair Your Ear Can Do',
    frSub: "À l'oreille",
    layer: 'core',
    terms: ['nationalityIsAWord'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a1-22-pairs' },
    // The genuine ear work in this lesson is the AGREEMENT and nothing else. The
    // prepositions sound nothing alike: en and au share no sound at all, so an
    // ear question on them would test whether the learner was awake. Every
    // listenChoose question in the quiz is an agreement question and the batch,
    // the merge and the test all assert that.
    say: 'Three pairs, and every one of them is about the ending rather than about the small word in front.',
    lines: [
      { fr: `${FR.nat} · ${sub('française').replace(/^\[|\]$/g, '')}`, en: 'the s wakes up when the e arrives behind it' },
      { fr: `${CA.nat} · ${sub('canadienne').replace(/^\[|\]$/g, '')}`, en: 'the nasal collapses and a real n appears' },
      { fr: `${FR.to} · ${CA.to}`, en: 'these two share no sound at all, which is why nothing here tests them by ear' },
    ],
    questions: [
      {
        q: 'français and française. What changes?',
        opts: [
          'nothing, they are the same',
          'the vowel gets longer',
          'an s appears at the end',
          'the first syllable moves',
        ],
        correct: 2,
        why: 'An s appears at the end. It was written in français all along and silent; the e behind it wakes it up. This is the same thing the colours lesson called out on gris and grise, so your ear has met it before.',
      },
      {
        q: 'canadien and canadienne. What changes?',
        opts: [
          'the nasal at the end turns into a plain vowel with an n after it',
          'nothing, they are the same',
          'the stress moves to the front',
          'the first syllable gets longer',
        ],
        correct: 0,
        why: 'The nasal collapses. Canadien ends in a sound made through the nose with no n behind it; canadienne has a plain vowel and then a real n. Brun and brune do exactly the same thing and you met them in the colours lesson.',
      },
      {
        q: 'en France and au Canada. Is there any point listening carefully to tell en from au?',
        opts: [
          'Yes, they are close',
          'Yes, if the speaker is careful',
          'No. They share no sound at all',
          'Only at speed',
        ],
        correct: 2,
        why: 'No. En and au have nothing in common to confuse, so hearing them apart is not a skill worth building. The decision they come from is the hard part, and that happens before you speak rather than while you listen.',
      },
    ],
  },

  {
    // THE SECOND PAIR, and it needs two columns for the same reason the grid
    // does: the only difference between the two cells is a capital letter and an
    // article, and split across two cards it is two unremarkable sentences.
    type: 'tapTable',
    id: 's19-capital',
    title: 'One Capital Letter',
    frSub: 'français ou Français',
    layer: 'core',
    terms: ['nationalityIsAWord'],
    sheetId: 'sheet.a1.22.grid',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a1-22-capital' },
    say: 'Left is a description and right is a name for a person. Out loud they are identical, so this one is read rather than heard.',
    cols: ['describing somebody', 'naming somebody'],
    rows: [
      {
        cells: [frOf('fr.a1.presentation-personnelle.012'), frOf(CAPITAL_IDS[0])],
        say: `${frOf('fr.a1.presentation-personnelle.012')} ${frOf(CAPITAL_IDS[0])}`,
        detail: {
          title: 'Small f, and capital F',
          body: `${sub('Il est français.')} ${sub("C'est un Français.")} `
            + 'The être lesson already told you this: English capitalises both and French keeps the capital '
            + 'for the person. The left one describes and takes nothing in front. The right one names, so it '
            + 'takes un and a capital.',
          say: `${frOf('fr.a1.presentation-personnelle.012')} ${frOf(CAPITAL_IDS[0])}`,
        },
      },
      {
        cells: [frOf(AGREEMENT_IDS[0]), frOf('fr.a1.pays-et-nationalites.198')],
        say: `${frOf(AGREEMENT_IDS[0])} ${frOf('fr.a1.pays-et-nationalites.198')}`,
        detail: {
          title: 'And with a country you have just met',
          body: `${frOf(AGREEMENT_IDS[0])} ${enOf(AGREEMENT_IDS[0])} ${frOf('fr.a1.pays-et-nationalites.198')} `
            + `${enOf('fr.a1.pays-et-nationalites.198')} Both of these describe rather than name, so both take `
            + 'a small letter and nothing in front. That is the ordinary case and the one you will use most.',
          say: `${frOf(AGREEMENT_IDS[0])} ${frOf('fr.a1.pays-et-nationalites.198')}`,
        },
      },
    ],
  },

  {
    type: 'reading',
    id: 's20-reading',
    title: 'The Form At The Desk',
    frSub: 'Le formulaire',
    layer: 'core',
    terms: ['articleTravels', 'goingAndComing', 'nationalityIsAWord'],
    // REQUIRED for the glossary to exist at all. MissionSection routes a reading
    // section to ReadingMission (and so to PassagePage, which draws the
    // underlines) only when this flag is set WITH questions.
    questionsInModal: true,
    say: 'Four lines off a form, and every one of them turns on a word two letters long.',
    // Paul's A1 rule: anything not inside « » is in English. ONE BLOCK, NO LINE
    // BREAKS. PassagePage splits on /(?<=[.!?»])\s+/ and an authored newline is
    // consumed as whitespace and silently discarded.
    text:
      'Somebody at a residence office has a form in front of them with four handwritten answers on it, and between them they use most of what this lesson has covered. '
      + `« ${frOf(gridCell('f', 'from').id)} » `
      + 'That is the first line, and the two letters in the middle of it were decided by an article that is nowhere on the page. '
      + 'Underneath it, in a different hand, somebody has written where they are going next. '
      + `« ${frOf(gridCell('m', 'to').id)} » `
      + 'A different country, a different small word, and the same single question answered behind both of them. '
      + 'The third line is the one the clerk had to read twice, because the country in it starts with a vowel and does not do what the others do. '
      + `« ${frOf(VOWEL_IDS[0])} » `
      + 'The last line is not about a place at all, and it is the only one on the form with nothing in front of the word that matters. '
      + `« ${frOf('fr.a1.presentation-personnelle.012')} »`,
    // Every entry is matched by gloss.logic.ts, which folds punctuation and case
    // on BOTH sides and allows a phrase of up to four words (MAX_GLOSS_WORDS).
    // Longest match wins, WHICH MEANS AN ENTRY CAN BE SHADOWED OUT OF EXISTENCE.
    // No entry here is a prefix or substring of another.
    glossary: [
      { word: 'de France', en: 'from France', note: 'la France is the la kind, so de with nothing after it. Du France is the sentence the opening scene turned on.' },
      { word: 'au Canada', en: 'to Canada', note: 'le Canada is the le kind, so au, which is à and le folded into one word.' },
      { word: 'en Iran', en: 'to Iran', note: 'The le kind, taking en because au Iran would put two vowel sounds against each other.' },
      { word: 'est français', en: 'is French', note: 'No article in front of a nationality after être, and a small f because this describes rather than names.' },
    ],
    questions: [
      { q: 'The first line says de and the second says au. What decided between them?', a: 'The article each country carries. La France gives de and le Canada gives du or au depending on which direction you are going. Nothing about the countries themselves came into it, and nothing about the person filling in the form did either.' },
      { q: 'Why did the clerk have to read the third line twice?', a: 'Because Iran is the le kind and would normally take au, and it takes en instead. The reason is only about sound: au Iran puts two vowel sounds hard against each other and French avoids that everywhere. Coming from Iran, it goes back to behaving like every other le country.' },
      { q: 'The last line has no article in it anywhere. Is something missing?', a: 'No. A nationality after être stands on its own, which the être lesson already covered along with jobs. English needs an article there and French does not. If the word were naming a person rather than describing one, it would take un and a capital letter, and that would be a different sentence.' },
    ],
  },

  /* ── Act 6: prove it ───────────────────────────────────────────────────── */

  {
    type: 'flashcards',
    id: 's21-flash',
    title: 'Flip and Recall',
    frSub: 'Retournez la carte',
    render: 'deck',
    layer: 'core',
    say: 'English on the front. Every country front names the article you are being asked for, because a country without one is half a card.',
    cards: [
      ...THE_TWELVE.map((c) => ({ front: `${c.en}, with its article`, back: c.fr, say: c.fr })),
      ...THE_TWELVE.map((c) => ({ front: c.natEn, back: c.nat, say: c.nat })),
      ...AUTHORED_SENTENCES.map((s) => ({ front: s.en, back: s.fr, say: s.fr })),
    ],
  },

  {
    type: 'dictation',
    id: 's22-dictation',
    title: 'Spell What You Hear',
    frSub: 'La dictée',
    layer: 'core',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], maxPlays: 4 },
    // Every target is short enough to stay in LETTERS mode, which is the only
    // mode where the learner writes the preposition rather than tapping it as a
    // pre-spelled tile. Measured through the real dicteeMode. See the header for
    // the three targets that cannot be here.
    say: 'Five lines. On four of them the word you write is one you have to work out rather than hear.',
    itemIds: DICTATION_IDS,
  },

  {
    type: 'practice',
    id: 's23-speak',
    title: 'Say It Out Loud',
    frSub: 'À voix haute',
    layer: 'core',
    audio: { mode: 'mic', lang: 'fr-FR' },
    // `practice.skill` is authored and read by no component: PracticeVFView
    // takes itemIds and nothing else. NOT ONE BARE PREPOSITION IS IN HERE, and
    // no third-person form of venir either. See the note on SPEAK_IDS.
    say: 'Twelve lines, and not one of them is a small word on its own. These words only exist attached to a country.',
    skill: 'speak',
    itemIds: SPEAK_IDS,
  },

  {
    type: 'scenario',
    id: 's24-scenario',
    title: 'The Same Coffee Machine',
    frSub: 'La même machine à café',
    layer: 'core',
    terms: ['articleTravels', 'goingAndComing'],
    say: 'One exchange and you hold up your half. Every turn is a country with the right small word in front of it.',
    setting: 'The same office kitchen, a fortnight later. Théo asks first this time, and stays in French.',
    // Every turn carries `userEn` and at least two `alts`, which
    // scenario.logic.ts requires of the whole seed. Apostrophes are straight
    // throughout: the suite fails a conversation that mixes straight and curly
    // apostrophes in one bubble stack.
    turns: [
      {
        ai: 'Vous venez d\'ou, alors ?',
        en: 'So where are you from?',
        user: 'Je viens de France.',
        userEn: 'I come from France.',
        // NO CITY. « Je viens de Lyon » is correct French and it is a DIFFERENT
        // rule: a city takes de with no article at all, and the article is what
        // this whole lesson is about. a1.21 owns places that are not countries,
        // and an alternative answer is an answer the learner is being told is
        // right, so it teaches whatever it contains.
        alts: [
          { fr: 'De France.', en: 'From France.' },
          { fr: 'Je viens de France, oui.', en: 'I come from France, yes.' },
        ],
      },
      {
        ai: 'Ah, et votre collegue ? Il est d\'ou ?',
        en: 'Ah, and your colleague? Where is he from?',
        user: 'Il est canadien.',
        userEn: 'He is Canadian.',
        alts: [
          { fr: 'Canadien.', en: 'Canadian.' },
          { fr: 'Il est canadien, je crois.', en: 'He is Canadian, I think.' },
        ],
      },
      {
        ai: 'Et vous partez quelque part cet ete ?',
        en: 'And are you going anywhere this summer?',
        user: 'Je vais au Mexique.',
        userEn: 'I am going to Mexico.',
        alts: [
          { fr: 'Au Mexique.', en: 'To Mexico.' },
          { fr: 'Je vais au Mexique en juillet.', en: 'I am going to Mexico in July.' },
        ],
      },
      {
        ai: 'Super. Et l\'annee prochaine ?',
        en: 'Great. And next year?',
        user: 'Je vais aux Etats-Unis.',
        userEn: 'I am going to the United States.',
        alts: [
          { fr: 'Aux Etats-Unis.', en: 'To the United States.' },
          { fr: 'Peut-etre aux Etats-Unis.', en: 'Maybe to the United States.' },
        ],
      },
      {
        ai: 'Vous voyagez beaucoup ! Et votre famille, elle est ou ?',
        en: 'You travel a lot! And your family, where are they?',
        user: 'Ils sont en Belgique.',
        userEn: 'They are in Belgium.',
        alts: [
          { fr: 'En Belgique.', en: 'In Belgium.' },
          { fr: 'Ma famille est en Belgique.', en: 'My family is in Belgium.' },
        ],
      },
    ],
  },

  {
    type: 'reviewDeck',
    id: 's25-review',
    title: 'The Whole Thing, One Deck',
    frSub: 'Révision',
    render: 'deck',
    layer: 'core',
    terms: ['articleTravels', 'goingAndComing', 'nationalityIsAWord'],
    say: 'Rate each card as again, hard or easy. The ones you mark again come back.',
    cards: [
      { front: 'You are going to France.', back: `${frOf(gridCell('f', 'to').id)} ${sub(FR.to)} la France, so en.`, say: frOf(gridCell('f', 'to').id) },
      { front: 'You are coming from France.', back: `${frOf(gridCell('f', 'from').id)} ${sub(FR.from)} The same article, the other column.`, say: frOf(gridCell('f', 'from').id) },
      { front: 'You are going to Canada.', back: `${frOf(gridCell('m', 'to').id)} ${sub(CA.to)} le Canada, so au.`, say: frOf(gridCell('m', 'to').id) },
      { front: 'You are coming from Canada.', back: `${frOf(gridCell('m', 'from').id)} ${sub(CA.from)} du, which is de and le folded together.`, say: frOf(gridCell('m', 'from').id) },
      { front: 'You are going to the United States.', back: `${frOf(gridCell('pl', 'to').id)} ${sub(US.to)} A plural name, so aux.`, say: frOf(gridCell('pl', 'to').id) },
      { front: 'You are coming from the United States.', back: `${frOf(gridCell('pl', 'from').id)} ${sub(US.from)} des, and the s wakes up as a z.`, say: frOf(gridCell('pl', 'from').id) },
      { front: 'Which article does Mexique take?', back: `${MX.fr} ${sub(MX.fr)} It ends in an e and takes le anyway.`, say: MX.fr },
      { front: 'You are going to Iran, and Iran is the le kind.', back: `${frOf(VOWEL_IDS[0])} ${sub(IR.to)} en, because au Iran would put two vowels together.`, say: frOf(VOWEL_IDS[0]) },
      { front: 'And coming from Iran?', back: `${frOf(VOWEL_IDS[1])} ${sub(IR.from)} The exception does not reach this column.`, say: frOf(VOWEL_IDS[1]) },
      { front: 'A man from France, described rather than named.', back: `${frOf('fr.a1.presentation-personnelle.012')} Small f, nothing in front.`, say: frOf('fr.a1.presentation-personnelle.012') },
      { front: 'The same man, named rather than described.', back: `${frOf(CAPITAL_IDS[0])} Capital F, and un in front of it.`, say: frOf(CAPITAL_IDS[0]) },
      { front: 'A woman from France.', back: `${frOf('fr.a1.pays-et-nationalites.199')} The e wakes the s up.`, say: frOf('fr.a1.pays-et-nationalites.199') },
      { front: 'A woman from Canada.', back: `${frOf(AGREEMENT_IDS[1])} The nasal collapses and a real n appears.`, say: frOf(AGREEMENT_IDS[1]) },
      { front: 'What should you store when you meet a new country?', back: `${REFRAME}`, say: `${FR.fr}, ${CA.fr}` },
      { front: 'How many small words does one article choose for you?', back: 'Two. One for going and one for coming, and you look the article up once.', say: `${FR.to}, ${FR.from}` },
    ],
  },

  {
    type: 'progressCheck',
    id: 's26-progress',
    title: 'Where You Stand',
    frSub: 'Votre progression',
    // The prose carries no counts. Every figure is in `stats`, derived from the
    // journey itself, and saying a number twice on one card is two chances to be
    // wrong and one card that reads as padded.
    say: 'One screen before the exam, so you know what you are walking into.',
    body: 'You have watched a conversation move quietly into English over one letter, and nothing that was said in it was hard. Since then you have stored a set of countries the way they are actually used, taken one fact from each of them and watched it answer two separate questions, met the one country that breaks the ending hint and the one that borrows a word from the other column, and picked up a capital letter that sits somewhere English does not put it. What is left tells you whether it stuck. Each round is tied to one of the mistakes this lesson exists to stop, and failing a round gets you its drill before the next one starts. The drill is the teaching, not the punishment.',
    // Filled immediately after SECTIONS is built, from the journey itself.
    stats: [],
  },

  {
    type: 'quiz',
    id: 's27-quiz',
    title: 'The Exam',
    frSub: "L'examen",
    layer: 'core',
    passMark: 70,
    roundFailThreshold: 60,
    say: 'Six rounds. Miss too many in a round and you get that round\'s drill before the next one starts.',
    // EVERY PREPOSITION STEM NAMES THE COUNTRY WITH ITS ARTICLE. "en or au?" is
    // unanswerable, and a question that names the country without its article
    // tests whether the learner memorised a phrase rather than whether they know
    // the rule. The batch, the merge and the test all check it over every
    // preposition question.
    //
    // TWO ROUNDS USE COUNTRIES THE LESSON NEVER DRILLED (la Chine, le Maroc, la
    // Suisse, le Brésil), which is the only way to test the rule rather than the
    // phrase: a learner can pass every question about au Canada by having stored
    // au Canada as one word.
    //
    // QuizDeckView shuffles the options of every closed question per attempt, so
    // no option refers to a position and no two options within a question are
    // equal. `quiz-spread` still caps any authored `correct` slot at 40% of the
    // closed questions, which is easy to breach when the whole answer space is
    // six short words, so the indices below are spread on purpose.
    rounds: [
      {
        id: 'r1-the-article',
        label: 'The article',
        // The FIRST target is the one whose drill fires: drillForRound walks a
        // round's targets and stops at the first that resolves. Every drill this
        // lesson authors is the first resolving target of exactly one round.
        targets: ['err-no-article', 'err-going-preposition'],
        say: 'The fact everything else is built on.',
        questions: [
          {
            q: 'Which of these is the way to store a country?',
            format: 'mcq',
            opts: ['la France', 'France', 'France (f)', 'français'],
            correct: 0,
            why: `la France. ${REFRAME} The article is not decoration and it is not something you can work out from the word later, which is the whole reason it goes in with the word rather than beside it.`,
            ref: 's03-article',
          },
          {
            q: 'Write the country word for Canada, with its article.',
            format: 'typeIn',
            accept: ['le Canada', 'le canada'],
            answer: 'le Canada',
            why: 'le Canada. Written as a whole rather than as a bare article, because a two-letter answer typed on its own is a coin toss rather than a test.',
            ref: 's07-words',
          },
          {
            q: 'la Suisse, la Chine, le Maroc. Which of those three is the odd one out for this lesson?',
            format: 'mcq',
            opts: ['la Suisse', 'la Chine', 'le Maroc', 'none of them behave differently'],
            correct: 2,
            why: 'le Maroc, because it is the le kind and the other two are the la kind. None of the three was drilled in this lesson and you could still answer, which is the point: the article told you and the country did not have to.',
            ref: 's04-sort',
          },
          {
            q: 'le Mexique ends in an e and takes le. What does that tell you about the ending?',
            format: 'mcq',
            opts: [
              'The ending is always wrong on countries',
              'Mexique is not really a country',
              'The ending only works on short words',
              'The ending is a hint rather than a rule',
            ],
            correct: 3,
            why: 'A hint rather than a rule. It is right often enough on countries that people stop checking, and le Mexique, le Cambodge and le Zimbabwe are what happens next. Guess with it when you must and store the article anyway.',
            ref: 's06-hint',
          },
        ],
      },
      {
        id: 'r2-going',
        label: 'Going there',
        targets: ['err-going-preposition', 'err-no-article'],
        say: 'en, au and aux, chosen by the article.',
        questions: [
          {
            q: 'You are going to Japan, and it is le Japon. Write the two words after Je vais.',
            format: 'typeIn',
            accept: ['au Japon', 'au japon'],
            answer: 'au Japon',
            why: 'au Japon. The le has folded into the preposition, which is why there is no le anywhere in the finished sentence. À plus le is au and it is never written any other way.',
            ref: 's10-table-going',
          },
          {
            q: 'You are going to Spain, and it is l\'Espagne. Which word?',
            format: 'mcq',
            opts: ['au', 'en', 'aux', 'du'],
            correct: 1,
            why: 'en Espagne. The l apostrophe is hiding a la, so this is the la kind. If you cannot tell which article an l apostrophe country carries, that is a thing to look up rather than to reason out.',
            ref: 's12-drill-going',
          },
          {
            q: 'You are going to les États-Unis. Write the two words after Je vais.',
            format: 'typeIn',
            accept: ['aux États-Unis', 'aux Etats-Unis', 'aux etats-unis'],
            answer: 'aux États-Unis',
            why: 'aux États-Unis. The name is plural, so the article is les and the preposition folds with it into aux. Said out loud it is one long word, because the x wakes up as a z in front of the vowel.',
            ref: 's09-going',
          },
          {
            q: 'Somebody writes « Je vais en Canada. » It is le Canada. Fix the sentence.',
            format: 'errorSpot',
            accept: ['Je vais au Canada.', 'je vais au canada', 'Je vais au Canada'],
            answer: 'Je vais au Canada.',
            why: 'au Canada. En is the first of the three you meet and it becomes the default. Le Canada is the le kind, so it takes au, and this sentence is understood immediately while marking you as new.',
            ref: 's16-traps',
          },
        ],
      },
      {
        id: 'r3-coming',
        label: 'Coming from',
        targets: ['err-coming-preposition', 'err-going-preposition'],
        say: 'The same decision, the other direction.',
        questions: [
          {
            q: 'You are from Portugal, and it is le Portugal. Say where you are from.',
            format: 'speak',
            target: 'Je viens du Portugal.',
            accept: ['Je viens du Portugal.', 'je viens du portugal'],
            answer: 'Je viens du Portugal.',
            why: 'Je viens du Portugal. Du is de and le folded together, the same fold that gave you au, and it is the answer for every le country in the lesson.',
            ref: 's13-coming',
          },
          {
            q: 'You are from France, and it is la France. Write the two words after Je viens.',
            format: 'typeIn',
            accept: ['de France', 'de france'],
            answer: 'de France',
            why: 'de France, with nothing between de and the country. This is the sentence the opening scene turned on: du France is understood perfectly and it is not something anybody says.',
            ref: 's14-grid',
          },
          {
            q: 'Somebody writes « Je viens du Belgique. » It is la Belgique. Fix the sentence.',
            format: 'errorSpot',
            accept: ['Je viens de Belgique.', 'je viens de belgique', 'Je viens de Belgique'],
            answer: 'Je viens de Belgique.',
            why: 'de Belgique. La Belgique is the la kind, so de with nothing after it. The writer reached for du because du is right for most countries, which is exactly why this error is the common one.',
            ref: 's15-drill-coming',
          },
          {
            q: 'The country is les États-Unis. Going there was aux États-Unis, so coming from there is which word?',
            format: 'mcq',
            opts: ['des', 'du', 'de', 'aux'],
            correct: 0,
            why: 'des États-Unis. Aux and des are the same fold made twice, on à plus les and on de plus les, and both wake their last letter up as a z in front of the vowel.',
            ref: 's14-grid',
          },
        ],
      },
      {
        id: 'r4-one-decision',
        label: 'One decision, two systems',
        targets: ['err-one-decision', 'err-coming-preposition'],
        say: 'Both columns, on countries this lesson never drilled.',
        questions: [
          {
            q: 'la Chine is the la kind. You are going there. Write the two words after Je vais.',
            format: 'typeIn',
            accept: ['en Chine', 'en chine'],
            answer: 'en Chine',
            why: 'en Chine. This country was never drilled in the lesson and the article still answered it, which is the difference between knowing the rule and having memorised en France as one word.',
            ref: 's14-grid',
          },
          {
            q: 'le Brésil is the le kind. You are coming from there. Which word?',
            format: 'mcq',
            opts: ['de', 'des', 'en', 'du'],
            correct: 3,
            why: 'du Brésil. Another country the lesson never showed you. One article, looked up once, answers both directions for a country you have never used.',
            ref: 's14-grid',
          },
          {
            q: 'You look up a country\'s article once. How many of the six small words does it settle?',
            format: 'mcq',
            opts: ['one', 'all six', 'two', 'three'],
            correct: 2,
            why: `Two: one for going and one for coming. ${REFRAME} That is the return on the two seconds it takes to store, and it is why working the ending out afterwards never gets you there.`,
            ref: 's14-grid',
          },
          {
            q: 'Somebody writes « Je vais en la France. » Fix the sentence.',
            format: 'errorSpot',
            accept: ['Je vais en France.', 'je vais en france', 'Je vais en France'],
            answer: 'Je vais en France.',
            why: 'en France. The article has already been used up: en, au, aux, de, du and des have all swallowed it, so none of them is ever followed by one. There is no en la, no au le and no des les.',
            ref: 's16-traps',
          },
        ],
      },
      {
        id: 'r5-the-vowel',
        label: 'The one that borrows en',
        targets: ['err-vowel-country', 'err-going-preposition'],
        say: 'One country, one column, one old idea.',
        questions: [
          {
            q: 'l\'Iran is the le kind. You are going there. Which word?',
            format: 'mcq',
            opts: ['en', 'au', 'aux', 'du'],
            correct: 0,
            why: 'en Iran. Au Iran would put two vowel sounds hard against each other and French will not do it, so the going-to column borrows en. En Israël, en Uruguay and en Afghanistan all work the same way.',
            ref: 's11-vowel',
          },
          {
            q: 'And coming from Iran? Write the two words after Je viens.',
            format: 'typeIn',
            accept: ["d'Iran", 'd Iran', 'dIran'],
            answer: "d'Iran",
            why: 'd\'Iran. The exception reaches the going-to column and stops. This is the ordinary de of a le country, cut short in front of a vowel exactly as le and la were in the definite articles lesson.',
            ref: 's11-vowel',
          },
          {
            q: 'What is the reason for en Iran?',
            format: 'mcq',
            opts: [
              'Iran is the la kind after all',
              'Iran has no article',
              'Iran is a large country',
              'Two vowel sounds cannot meet',
            ],
            correct: 3,
            why: 'Two vowel sounds cannot meet. It is the same objection behind l\'amie, mon amie, n\'ai, est-ce qu\'il and combien d\'ans. Six rules, one idea, and this is the sixth time you have watched it fire.',
            ref: 's11-vowel',
          },
          {
            q: "Say where you are going, for l'Iran.",
            format: 'speak',
            target: 'Je vais en Iran.',
            accept: ['Je vais en Iran.', 'je vais en iran'],
            answer: 'Je vais en Iran.',
            why: 'Je vais en Iran. The n of en arrives on the front of Iran and is fully pronounced, so this comes out as three syllables rather than two words with a gap between them.',
            ref: 's11-vowel',
          },
        ],
      },
      {
        id: 'r6-what-you-are',
        label: 'What you are',
        // SEVEN ROUNDS, not six, and the seventh exists for a mechanical reason
        // rather than a pedagogical one. `drillForRound` fires the drill of a
        // round's FIRST resolving target and then stops, so two drills cannot
        // share a round. The agreement and the capital are two different errors
        // with two different drills, and folding them into one round would have
        // left drill-capital unreachable, which is exactly the defect a1.05
        // shipped twice.
        targets: ['err-agreement', 'err-going-preposition'],
        say: 'The nationality and its ending.',
        questions: [
          {
            q: 'Listen. Is this a man or a woman being described?',
            format: 'listenChoose',
            audio: { mode: 'tts', lang: 'fr-FR', clip: 'française' },
            opts: ['française, a woman', 'français, a man', 'either, you cannot hear it', 'canadienne, a woman'],
            correct: 0,
            why: 'française. The s at the end was written in français all along and silent; the e behind it wakes it up. This is the pair your ear can genuinely be trained on, and it is the colours lesson\'s idea arriving on a new word.',
            ref: 's18-ear',
          },
          {
            q: 'Listen. Which one is this?',
            format: 'listenChoose',
            audio: { mode: 'tts', lang: 'fr-FR', clip: 'canadienne' },
            opts: ['canadien, a man', 'canadienne, a woman', 'canadiens, several men', 'you cannot hear the difference'],
            correct: 1,
            why: 'canadienne. The nasal at the end of canadien collapses into a plain vowel with a real n behind it, which is exactly what brun does when it becomes brune.',
            ref: 's18-ear',
          },
          {
            q: 'A woman from Canada. Write the one word that describes her.',
            format: 'typeIn',
            accept: ['canadienne'],
            answer: 'canadienne',
            why: 'canadienne. fold() keeps a final e, so this is one of the few places free text can genuinely test an agreement. The nasal at the end of canadien collapses and a real n appears behind the vowel.',
            ref: 's17-agreement',
          },
        ],
      },
      {
        id: 'r7-the-capital',
        label: 'The capital letter',
        targets: ['err-capital-and-article', 'err-agreement'],
        // EVERY QUESTION HERE IS mcq, AND THAT IS NOT A PREFERENCE. fold()
        // strips case, so `français` and `Français` fold together and no
        // free-text format can distinguish them. errorSpot runs the SAME
        // matchesAccept path as typeIn, which is why both the a1.08 and a1.09
        // briefs recommended it for a capital and both were wrong. mcq options
        // are picked rather than typed, and quiz-duplicate-option compares them
        // case-sensitively.
        say: 'A letter shape, and no free-text question can test it.',
        questions: [
          {
            q: 'Which of these is written correctly?',
            format: 'mcq',
            opts: ['Il est Français.', 'Il est un français.', 'Il est français.', 'Il est le français.'],
            correct: 2,
            why: 'Il est français, small f and nothing in front. The être lesson already gave you both halves of this: a nationality after être takes no article, and French keeps the capital for the name of a person rather than the description of one.',
            ref: 's19-capital',
          },
          {
            q: 'Which of these is written correctly?',
            format: 'mcq',
            opts: ["C'est un français.", "C'est Français.", "C'est le Français.", "C'est un Français."],
            correct: 3,
            why: 'C\'est un Français, with un and a capital F. Here the word names a person rather than describing one, which is the one place French does capitalise it. Out loud this is identical to the sentence with a small f.',
            ref: 's19-capital',
          },
          {
            q: 'Why can no dictation ever test the difference between français and Français?',
            format: 'mcq',
            opts: [
              'Because the two words mean the same thing',
              'Because the two are identical out loud',
              'Because dictation only tests short words',
              'Because French does not really use capitals',
            ],
            correct: 1,
            why: 'Because they are identical out loud. The capital is a written-only difference with no signal in the air at all, exactly like the small letter on the days of the week and the months. It is read and written, never heard.',
            ref: 's19-capital',
          },
        ],
      },
    ],
  },

  {
    type: 'roundup',
    id: 's28-roundup',
    title: 'What You Can Do Now',
    frSub: 'Ce que vous savez faire',
    say: 'Four things, and then what carries into the next unit.',
    body: 'You can store a country the way it is actually used, say where you are going and where you are from using one fact you looked up once, handle the country that breaks the ending hint and the one that borrows a word from the other column, and say what somebody is with nothing in front of it and the right letter at the start. The habit underneath all of that is the one worth keeping: French stores a noun with its article because the article is doing work the noun cannot do. You will meet the verbs behind je vais and je viens properly a whole band from here, and the same two verbs will let you say a good deal more than this. Neither is needed for anything in this lesson.',
    points: [
      `${REFRAME} Which article, and everything else falls out of it.`,
      'The la kind takes en and de. The le kind takes au and du. The les kind takes aux and des.',
      'A le country starting with a vowel borrows en for going, and nothing else changes.',
      'A nationality after être takes nothing in front of it, and the capital belongs to the person rather than the description.',
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
  const ix = SECTIONS.findIndex((s) => (s as { id?: string }).id === 's26-progress');
  const card = SECTIONS[ix];
  const quiz = SECTIONS.find((s) => s.type === 'quiz');
  if (!card || card.type !== 'progressCheck' || !quiz || quiz.type !== 'quiz') {
    throw new Error('a1.22.l1: the progress card or the quiz is missing, so the card cannot count what is not there');
  }
  card.stats = [
    { k: 'Countries learned', v: String(THE_TWELVE.length) },
    { k: 'Small words covered', v: '6' },
    { k: 'Missions done', v: `${ix} of ${SECTIONS.length}` },
    { k: 'Exam rounds ahead', v: String(quiz.rounds?.length ?? 0) },
  ];
}

/* ─── Acts ─────────────────────────────────────────────────────────────────
 *
 * Six, and the weighting is the argument of the lesson. The brief is explicit
 * that "the weight belongs on the gender decision, not on the country list",
 * and the count bears it out: ONE section lists the twelve countries (s07) and
 * one pairs four of them with their nationalities, while SEVEN sections make the
 * learner decide (s04, s08, s12, s15, plus the three drills behind the quiz).
 *
 * `estScreens` is what the mission actually costs rather than a round number,
 * because it is divided by the rest points to check no stretch runs past the
 * checkpoint-spacing limit of 22.                                            */

const ACTS: LessonAct[] = [
  {
    id: 'act1',
    title: 'The article travels with the word',
    sections: ['s01-scene', 's02-goals', 's03-article', 's04-sort'],
    milestone: 'You have watched a conversation move into English over one letter.',
    estScreens: 26,
    restPoints: ['s01-scene/after-break'],
  },
  {
    id: 'act2',
    title: 'The countries',
    sections: ['s05-pairs', 's06-hint', 's07-words', 's08-check'],
    milestone: 'Twelve countries, each stored the way it is used, and the one that breaks the hint.',
    estScreens: 24,
    restPoints: ['s06-hint/halfway'],
  },
  {
    id: 'act3',
    title: 'Going there',
    sections: ['s09-going', 's10-table-going', 's11-vowel', 's12-drill-going'],
    milestone: 'en, au and aux, and the country that borrows one of them.',
    estScreens: 26,
    restPoints: ['s09-going/halfway', 's12-drill-going/halfway'],
  },
  {
    id: 'act4',
    title: 'Coming from',
    sections: ['s13-coming', 's14-grid', 's15-drill-coming', 's16-traps'],
    milestone: 'Both columns on one screen, and the same fact chose all six words.',
    estScreens: 26,
    restPoints: ['s13-coming/halfway', 's16-traps/halfway'],
  },
  {
    id: 'act5',
    title: 'What you are',
    sections: ['s17-agreement', 's18-ear', 's19-capital', 's20-reading'],
    milestone: 'A nationality with nothing in front of it, and one capital letter.',
    estScreens: 22,
    restPoints: ['s17-agreement/halfway'],
  },
  {
    id: 'act6',
    title: 'Prove it',
    sections: [
      's21-flash', 's22-dictation', 's23-speak', 's24-scenario',
      's25-review', 's26-progress', 's27-quiz', 's28-roundup',
    ],
    milestone: 'Lesson complete. Everything here carries straight into talking about where anybody is from.',
    estScreens: 96,
    restPoints: [
      's21-flash/halfway', 's23-speak/halfway', 's25-review/halfway',
      's27-quiz/after-r2', 's27-quiz/after-r4',
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
 * legitimately overlap. The SRS keys on (itemId, modality), so releasing one
 * card from two tranches would take two ratings for one sentence. The first
 * tranche to name an id keeps it, which is also the pedagogically right answer:
 * an item belongs to the act that taught it.                                  */

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
  // Act 1: the twelve country headwords, which s04-sort puts on a screen one by
  // one, and the three published sentences s03-article shows carrying an
  // article with no preposition in front of it. NOT the nationalities: they are
  // taught in act 2 and a card released before its mission is a card the learner
  // is asked to rate before they have met it.
  once([...COUNTRY_IDS, ...ARTICLE_WILD]),
  // Act 2: the twelve nationalities, four of them paired with their country at
  // s05-pairs and all twelve banked at s07-words.
  //
  // NOT fr.sons.muettes.051 (« française »), which act 2 never shows: the
  // feminine forms belong to act 5, where s17-agreement puts them on a card.
  // A card released before its mission is a card the learner is asked to rate
  // before they have met it, which is the check a1.17's test caught twice.
  once([...NAT_IDS]),
  // Act 3: the going-to column, the vowel exception's going-to half, the -e
  // country going to, the second clean la country, and the two published lines
  // s09-going shows.
  once([...GOING_IDS, VOWEL_IDS[0], ...E_EXCEPTION_IDS, SECOND_PAIR_IDS[0], ...GOING_WILD]),
  // Act 4: the coming-from column, the vowel exception's other half, the second
  // la country coming back, and the six published coming-from lines. Three of
  // those six are third person and are reading exposure only: they are released
  // to the deck as READING cards, which is what a flashcard is.
  once([...COMING_IDS, VOWEL_IDS[1], SECOND_PAIR_IDS[1], ...COMING_WILD]),
  // Act 5: the agreement pair, the capital pair, and the published nationality
  // sentences the act is built on.
  once([...AGREEMENT_IDS, ...CAPITAL_IDS, ...NATIONALITY_WILD]),
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
    throw new Error(`a1.22.l1: item(s) taught but released by no tranche: ${never.join(', ')}`);
  }
  const stray = [...released].filter((id) => !taught.has(id));
  if (stray.length) {
    throw new Error(`a1.22.l1: tranche(s) release item(s) the lesson does not teach: ${stray.join(', ')}`);
  }
}

/* ─── Error triggers and their drills ──────────────────────────────────────
 *
 * Six triggers, six drills, six retests, six quiz rounds, and that is not a
 * coincidence. `drillForRound` walks a round's `targets` and fires the drill of
 * the FIRST one that has any, then stops. So a drill named only in second place
 * never runs. Each drill below is the first target of exactly one round.
 *
 * a1.05 shipped two unreachable drills for exactly this reason and a first draft
 * of a1.07 shipped a third.
 *
 * `err-no-article` and `err-going-preposition` look like one error and are two.
 * The first is not having the fact at all, which produces a guess. The second is
 * having the fact and reaching for the wrong word with it. A learner who has
 * fixed the first still makes the second, and merging them would remediate only
 * one.                                                                        */

const ERROR_TRIGGERS: ErrorTrigger[] = [
  {
    id: 'err-no-article',
    description: 'Stored the country without its article, so the fact the preposition needs is simply not available and every answer is a guess. The error that happens weeks before any of the others.',
    detectOn: ['s03-article', 's04-sort', 's08-check', 's27-quiz/r1-the-article'],
    drill: 'drill-article',
    retest: 'retest-article',
  },
  {
    id: 'err-going-preposition',
    description: 'Has the article and reaches for the wrong going-to word, most often en for a le country: « Je vais en Canada. » Understood immediately, and it marks the speaker as new.',
    detectOn: ['s09-going', 's10-table-going', 's12-drill-going', 's16-traps', 's27-quiz/r2-going'],
    drill: 'drill-going',
    retest: 'retest-going',
  },
  {
    id: 'err-coming-preposition',
    description: 'The same error in the other column, and the expensive one: « Je viens du France. » Du is right for most countries, so it comes out by default on the smaller group, which includes France.',
    detectOn: ['s13-coming', 's14-grid', 's15-drill-coming', 's27-quiz/r3-coming'],
    drill: 'drill-coming',
    retest: 'retest-coming',
  },
  {
    id: 'err-one-decision',
    description: 'Learns the two columns as two unrelated tables and looks the country up twice, or gets one column right and the other wrong on the same country. Costs confidence rather than accuracy, which is why it has its own drill.',
    detectOn: ['s14-grid', 's15-drill-coming', 's27-quiz/r4-one-decision'],
    drill: 'drill-both-columns',
    retest: 'retest-both-columns',
  },
  {
    id: 'err-vowel-country',
    description: 'Writes « au Iran », or over-applies the repair and writes « en Portugal », or carries the exception into the other column and writes « de Iran » rather than d apostrophe Iran.',
    detectOn: ['s11-vowel', 's12-drill-going', 's16-traps', 's27-quiz/r5-the-vowel'],
    drill: 'drill-vowel',
    retest: 'retest-vowel',
  },
  {
    id: 'err-agreement',
    description: 'Leaves the nationality unchanged for a woman, or adds an article after être, or capitalises the description. All three were introduced in a1.06 and all three survive into this lesson on a new set of words.',
    detectOn: ['s17-agreement', 's18-ear', 's19-capital', 's27-quiz/r6-what-you-are'],
    drill: 'drill-agreement',
    retest: 'retest-agreement',
  },
  {
    id: 'err-capital-and-article',
    description: 'Writes « Il est Français » with a capital, or « C\'est un français » without one. A written-only distinction with no audible signal, exactly like the lowercase days and months.',
    detectOn: ['s19-capital', 's27-quiz/r7-the-capital'],
    drill: 'drill-capital',
    retest: 'retest-capital',
  },
];

const DRILLS: LessonDrill[] = [
  {
    id: 'drill-article',
    title: 'Which little word?',
    format: 'sort',
    // Item ids, not display strings: a drill scores against the corpus, so it
    // plays the same audio and reads the same spelling as every other card that
    // teaches these. Passing display strings here validates as broken ids.
    //
    // Sorted by ARTICLE, with the -e ending scattered across both buckets on
    // purpose: le Mexique ends in an e and la Belgique does too, so a learner
    // sorting by the ending gets one wrong and finds out why.
    buckets: ['the la kind', 'the le kind'],
    items: [
      country('France').id, country('Belgique').id, country('Italie').id,
      country('Canada').id, country('Mexique').id, country('Japon').id,
    ],
    coach: 'Do not sort by the ending. Four of these six end in an e and only three of those four are the la kind. Sort by the word you stored in front of the country, and if you did not store one, that is the finding.',
  },
  {
    id: 'retest-article',
    title: 'One more time',
    format: 'mcq',
    q: 'Which article goes with Mexique?',
    opts: ['la', 'le', 'les'],
    correct: 1,
    why: 'le Mexique. It ends in an e and takes le anyway, which is the one country in this lesson where the ending and the article disagree.',
  },
  {
    id: 'drill-going',
    title: 'Where are you going?',
    format: 'flashcard',
    // Every front names the country WITH its article, exactly as every quiz stem
    // does, because a preposition prompt missing the article has no single right
    // answer. Built from the twelve rather than listed, so a change to the set
    // moves the drill with it.
    pairs: THE_TWELVE.map((c) => [`${c.fr}, going there`, c.to] as [string, string]),
    coach: 'The front gives you the article. La gives en, le gives au, les gives aux, and a le country starting with a vowel borrows en. Nothing about the country itself is ever consulted.',
  },
  {
    id: 'retest-going',
    title: 'One more time',
    format: 'mcq',
    q: 'You are going to Japan, and it is le Japon. Which word?',
    opts: ['en', 'au', 'aux'],
    correct: 1,
    why: 'au Japon. The le has folded into the preposition and vanished, which is why there is no le left anywhere in the sentence.',
  },
  {
    id: 'drill-coming',
    title: 'Where are you from?',
    format: 'flashcard',
    pairs: THE_TWELVE.map((c) => [`${c.fr}, coming from`, c.from] as [string, string]),
    coach: 'The same article, the other column. La gives de, le gives du, les gives des, and in front of a vowel de is cut short to d apostrophe the way le and la always were.',
  },
  {
    id: 'retest-coming',
    title: 'One more time',
    format: 'mcq',
    q: 'You are from France, and it is la France. Which word?',
    opts: ['du', 'de', 'des'],
    correct: 1,
    why: 'de France. Du is right for most countries and France is not one of them, which is exactly why this is the error that costs the most.',
  },
  {
    id: 'drill-both-columns',
    title: 'Same country, both directions',
    format: 'sort',
    // Two buckets and six sentences, and the honest shape is that the buckets
    // do not separate the countries at all: France appears in both, Canada
    // appears in both. That is the teaching. The learner cannot sort by country
    // and has to read the small word.
    buckets: ['going there', 'coming from'],
    items: [
      gridCell('f', 'to').id, gridCell('f', 'from').id,
      gridCell('m', 'to').id, gridCell('m', 'from').id,
      gridCell('pl', 'to').id, gridCell('pl', 'from').id,
    ],
    coach: 'Every country in this drill turns up twice, once in each bucket, so knowing the country will not sort it. Read the small word instead. En, au and aux go one way and de, du and des go the other.',
  },
  {
    id: 'retest-both-columns',
    title: 'One more time',
    format: 'mcq',
    q: 'How many of the six small words does one country\'s article settle?',
    opts: ['one', 'two', 'all six'],
    correct: 1,
    why: 'Two. One for going and one for coming, and you look the article up once rather than twice.',
  },
  {
    id: 'drill-vowel',
    title: 'Which one in front of this country?',
    format: 'sort',
    // Both buckets hold le countries, which is the only arrangement that teaches
    // anything: a bucket of la countries taking en would let the learner sort by
    // article and score full marks without seeing the repair.
    buckets: ['takes au', 'borrows en'],
    items: [
      gridCell('m', 'to').id,
      VOWEL_IDS[0],
      E_EXCEPTION_IDS[0],
    ],
    coach: 'Every country in this drill is the le kind, so the article will not sort it. Look at the first letter of the country instead. A vowel behind au is a collision the language will not make, so the word swaps.',
  },
  {
    id: 'retest-vowel',
    title: 'One more time',
    format: 'mcq',
    q: 'l\'Iran is the le kind. You are going there. Which word?',
    opts: ['au', 'en', 'aux'],
    correct: 1,
    why: 'en Iran. The swap is about the sound and nothing else: Iran is still the le kind and still takes d apostrophe Iran coming back.',
  },
  {
    id: 'drill-agreement',
    title: 'A man or a woman?',
    format: 'sort',
    buckets: ['said of a man', 'said of a woman'],
    items: [
      'fr.a1.presentation-personnelle.012', // Il est français.
      'fr.a1.pays-et-nationalites.199',     // Elle est française.
      AGREEMENT_IDS[0],                     // Il est canadien.
      AGREEMENT_IDS[1],                     // Elle est canadienne.
    ],
    coach: 'The ending carries it and you can hear all four. Français gains an s when the e arrives; canadien loses its nasal and gains a real n. Neither of those is new: the colours lesson taught both shapes.',
  },
  {
    id: 'retest-agreement',
    title: 'One more time',
    format: 'mcq',
    q: 'A woman from Canada. Which word?',
    opts: ['canadien', 'canadienne', 'canadiens'],
    correct: 1,
    why: 'canadienne. The nasal collapses into a plain vowel with a real n behind it, which is the same thing brun does when it becomes brune.',
  },
  {
    id: 'drill-capital',
    title: 'Describing, or naming?',
    format: 'sort',
    buckets: ['describes, so a small letter', 'names, so a capital'],
    items: [
      'fr.a1.presentation-personnelle.012', // Il est français.
      'fr.a1.metiers.264',                  // Je suis français.
      CAPITAL_IDS[0],                       // C'est un Français.
    ],
    coach: 'Ask what the word is doing. After être it is describing somebody, so it takes a small letter and nothing in front. After c\'est un it is naming them, so it takes a capital. Out loud the two are identical.',
  },
  {
    id: 'retest-capital',
    title: 'One more time',
    format: 'mcq',
    q: 'Which of these is written correctly?',
    opts: ['Il est Français.', 'Il est français.', 'Il est un français.'],
    correct: 1,
    why: 'Il est français. Small f, because this describes rather than names, and nothing in front of it, because a nationality after être never takes an article.',
  },
];

/* ─── Reference sheets ─────────────────────────────────────────────────────
 *
 * Two, and each exists for a layout reason as much as a pedagogical one.
 * `tapTable` is not in ownsLayout(), so the in-flow tables render inside a
 * scrolling page and a twelve-row country list would run off the fold and take
 * its chrome with it. The full list lives here, where `layer: 'deep'` exempts it
 * from the core density caps and a `table` section is only legal in the first
 * place.
 *
 * `teach`, `letterGrid` and `table` are THE ONLY THREE SECTION TYPES
 * ReferenceSheet.tsx draws inside a sheet. Its `default` branch draws the
 * section's TITLE and nothing else, deliberately, "so a mis-authored sheet is
 * visible instead of silently thin". a1.13 and a1.17 both shipped `cheatSheet`
 * sections here and both drew a heading with nothing under it. Neither of these
 * sheets uses one, and the test parses the switch out of the component rather
 * than restating the list.                                                    */

const SHEETS: ReferenceSheet[] = [
  {
    id: 'sheet.a1.22.grid',
    title: 'Both columns, and the two exceptions',
    layer: 'deep',
    contains: ['en, au, aux and de, du, des', 'The country that borrows en', 'The capital letter'],
    sections: [
      {
        type: 'table',
        id: 'sheet-grid-table',
        title: 'One article, two columns',
        layer: 'deep',
        // SHORT CELLS ONLY, decided on a device rather than in the editor.
        // SheetTable sizes a column at max(110, 320 / cols), so a full sentence
        // in a four-column table lands in a 110-wide cell and can only be read
        // by dragging sideways. The reasons live in the prose below.
        cols: ['the country', 'going there', 'coming from'],
        rows: [
          ...GRID_SLOTS.map((s) => {
            const c = GRID_COUNTRY[s as 'f' | 'm' | 'pl'];
            return [c.fr, c.to, c.from];
          }),
          [IR.fr, IR.to, IR.from],
          [MX.fr, MX.to, MX.from],
        ],
      },
      {
        type: 'teach',
        id: 'sheet-grid-rows',
        title: 'What each row is doing',
        layer: 'deep',
        body:
          'The la kind takes en for going and de for coming, and neither of them is ever followed by an '
          + 'article: en France and de France, never en la France or de la France. The le kind takes au and '
          + 'du, and both of those already contain the article, because au is à plus le folded into one word '
          + 'and du is de plus le folded the same way. The les kind takes aux and des, folded from the plural '
          + 'article, and both wake their last letter up as a z in front of a vowel, which is why aux '
          + 'États-Unis and des États-Unis each come out as one long word rather than two. l\'Iran is the '
          + 'exception and it is a narrow one: it is the le kind, it borrows en for the going-to column only '
          + 'because au Iran would put two vowel sounds against each other, and it goes straight back to '
          + 'behaving like a le country coming the other way. le Mexique is not an exception at all, it just '
          + 'looks like one: it ends in an e, which usually means the la kind, and it takes le. The article '
          + 'is right and the ending is a hint.',
      },
      {
        type: 'teach',
        id: 'sheet-grid-capital',
        title: 'The nationality, and the one capital letter',
        layer: 'deep',
        body:
          'A nationality is a separate word from the country and it never carries an article of its own. '
          + 'After être it takes nothing in front of it at all, which the être lesson covered alongside jobs: '
          + 'Il est français, not Il est un français. It agrees the way a colour agrees, so an e arrives for '
          + 'a woman and sometimes wakes up a letter that had been silent: français becomes française and you '
          + 'can hear the s arrive, while canadien becomes canadienne and the nasal collapses into a plain '
          + 'vowel with a real n after it. A few nationalities already end in an e and never change at all: '
          + 'belge, russe, suisse, tchèque. The capital letter is the one thing here that is not a rule you '
          + 'already have. French writes the description with a small letter and the name of a person with a '
          + 'capital, so Il est français describes and C\'est un Français names, and the two are identical '
          + 'out loud. English capitalises both, which is why this one has to be read rather than reasoned '
          + 'out. It is the same kind of written-only distinction as the lowercase days of the week and the '
          + 'lowercase months.',
      },
    ],
  },
  {
    id: 'sheet.a1.22.countries',
    title: 'The twelve, with their articles',
    layer: 'deep',
    contains: ['Every country with its article', 'Every nationality beside it', 'Both prepositions for each'],
    sections: [
      {
        type: 'table',
        id: 'sheet-countries-table',
        title: 'Country, nationality, and both small words',
        layer: 'deep',
        cols: ['the country', 'a person', 'going', 'coming'],
        rows: THE_TWELVE.map((c) => [c.fr, c.nat, c.to, c.from]),
      },
      {
        type: 'teach',
        id: 'sheet-countries-why',
        title: 'Why the article is stored and the ending is not',
        layer: 'deep',
        body:
          'Most courses hand you the rule as en for feminine and au for masculine and leave it there, which '
          + 'is true and unusable, because the gender is the part you do not have. The gender of a country is '
          + 'not something you can hear, work out or reason towards in the half second before you speak. It '
          + 'is something you either stored or did not. So the practical version of this whole lesson is a '
          + 'habit rather than a rule: when a country word goes into your head, the article goes in with it, '
          + 'attached, as though it were one word. La France. Le Canada. Les États-Unis. Do that and you will '
          + 'never think about en against au again, because the answer arrives with the country. The ending '
          + 'is worth knowing about for the moment somebody names a country you have never met and you have '
          + 'to answer anyway. Most la countries end in an e: France, Belgique, Espagne, Italie, Allemagne, '
          + 'Chine, Russie, Suisse. Most others do not: Canada, Japon, Portugal, Sénégal, Maroc, Brésil. It '
          + 'is a good guess and a bad rule, and the countries where it fails are exactly the ones you will '
          + 'meet: le Mexique, le Cambodge, le Zimbabwe. Use it when you are cornered and store the article '
          + 'the rest of the time. One more thing worth knowing about the six small words: every one of them '
          + 'has already swallowed the article, so none of them is ever followed by another. There is no en '
          + 'la France, no au le Canada and no des les États-Unis, and if one of those is trying to come out '
          + 'of your mouth the fix is to delete the second word rather than to change the first.',
      },
    ],
  },
];

export const PAYS_LESSON: Lesson = {
  id: 'a1.22.l1',
  unitId: 'a1.22',
  // The lesson's index WITHIN its unit, not its place in the track.
  seq: 1,
  title: 'Pays & nationalités',
  level: 'a1',
  // TWENTY-FIVE, from unit.seq. missions.ts derives the eyebrow at render time
  // as `${level} · LEÇON ${unit.seq}`, and a1.22 sits at seq 25. The stored
  // value is a fallback and has to agree with what the renderer computes, or the
  // two disagree the moment something reads this field instead. a1.03 shipped
  // exactly that bug (commit 56c79a7).
  tag: 'A1 · LEÇON 25',
  intro:
    'Six small words for what English does with two, and the choice between them was made the day you learned the country. This is how to store a country the way it is used, say where you are going and where you are from, and say what somebody is with nothing in front of it.',

  sections: SECTIONS,
  itemIds: ITEM_IDS,
  // The LESSON's own counter, not `seed.version`. seed.version is the OTA
  // snapshot number, derived by publish-content.ts as previous + 1, and a merge
  // must never hand-bump it.
  //
  // v1 was applied to Postgres and then a1-22-pays.test.ts found three defects
  // that every other check had passed:
  //
  //   act 5 released four rows to spaced repetition that no act 5 section
  //   SHOWED. s17-agreement was displaying bare words (`français · française`)
  //   where the tranche was releasing whole sentences, so the learner would
  //   have been asked to rate « Elle est française. » having never seen it.
  //   The cards now show the sentences. `fr.sons.muettes.051` moved from act 2
  //   to act 5 for the same reason.
  //
  //   fr.a1.pays-et-nationalites.081 was declared in itemIds, resolved
  //   perfectly and was drawn by nothing at all. It is now the third card of
  //   s17-agreement. This is a1.08's failure exactly: 43 ids that resolved and
  //   appeared on no screen.
  //
  //   the role play offered « Je viens de France, de Lyon. » as an alternative
  //   answer. A city takes de with NO article, which is a different rule and
  //   a1.21's, and an alternative is an answer the learner is told is right.
  version: 2,

  grammarAssumed: [
    'Noun gender, and that the article in front of a noun is the choice that gender makes, introduced in a1.03',
    'le, la, l\' and les, and the elision of le and la in front of a vowel, introduced in a1.04',
    'The full present of être, and that a nationality after it takes no article, introduced in a1.06',
    'That a nationality is written with a small letter when it describes and a capital when it names, introduced in a1.06',
    'Adjective agreement, and that a final e can wake a silent consonant, introduced in a1.13',
    'The nasal that collapses when an e arrives behind it, as in brun and brune, introduced in a1.13',
    'à plus le folding into au, and de plus le folding into du, introduced in a1.11 and a1.29',
    'Elision as a repair for two vowels meeting, introduced in sons.07',
    'Liaison, and that a silent final consonant attaches to a following vowel, introduced in sons.10',
  ],
  grammarIntroduced: [
    'en, au and aux with a country name, selected by the country\'s gender and number',
    'de, du and des with a country name, selected by the same property',
    'That the preposition absorbs the definite article, so no article follows it',
    'en rather than au before a masculine country beginning with a vowel',
    'That the -e ending predicts a feminine country reliably but not without exception',
    'Nationality adjectives as a class, and their agreement applied from a1.13',
    'je vais and je viens as frozen first-person frames, with aller and venir reserved for a2.02',
  ],

  features: ['roleplay', 'voiceflash'],

  overview: {
    titleEn: 'Countries and Nationalities',
    subFr: 'Pays & nationalités',
    introFr: 'Un seul fait, appris avec le mot, qui choisit six petits mots à votre place.',
    minutes: 28,
    difficulty: 2,
    glyph: '🌍',
    screens: 220,
  },

  acts: ACTS,
  reframe: REFRAME,
  errorTriggers: ERROR_TRIGGERS,
  drills: DRILLS,
  sheets: SHEETS,
  deckTranche: DECK_TRANCHE,
  terms: PAYS_TERMS,

  audio: {
    defaultLang: 'fr-FR',
    speeds: [1.0, 0.65],
    coachVoice: 'coach-en-warm',
    interfaceSounds: ['correct', 'incorrect', 'checkpoint'],
    // ── The audio decisions that cannot be recovered later ─────────────────
    //
    // Written here AND pinned by a1-22-pays.test.ts, because a constraint on how
    // something is recorded becomes invisible the moment the clip is delivered.
    // All five of the brief's lesson-specific notes are written in explicitly.
    //
    // Briefs only. Do NOT run pnpm audio:render: it spends real ElevenLabs
    // credits and ELEVENLABS_API_KEY is not set in ealch-admin/.env in any case.
    // CLIP_MANIFEST is empty by design, so every card falls back to device TTS
    // until the studio delivers, and a recordingId resolving to nothing is the
    // correct shipping state.
    recorded: [
      {
        id: 'rec-a1-22-grid',
        desc:
          'THE SINGLE MOST IMPORTANT NOTE IN THIS LESSON. « en France » AND « de France » ARE ONE TAKE, one '
          + 'voice, one pace, read straight through with no gap and no reset. Then, in the SAME take, « au '
          + 'Canada » and « du Canada ». The claim the whole lesson rests on is that going and coming are one '
          + 'decision, and two separate recordings are two performances: a reader who records the coming-from '
          + 'column in its own session will lean on the de, and the learner will hear that lean as a '
          + 'difference between the two systems rather than as one system read twice. '
          + 'Then the four whole sentences in the same take: « Je vais en France. », « Je viens de France. », '
          + '« Je vais au Canada. », « Je viens du Canada. » '
          + 'KEEP EVERY NASAL CLOSED. France is /fʁɑ̃s/ with a nasal vowel and NO n sound behind it: the app '
          + 'respells it FRAHⁿSS deliberately, and a reader who lets an n out of it is teaching the error the '
          + 'opening scene is about.',
        clipIds: [
          'en France', 'de France', 'en-de-france-pair',
          'au Canada', 'du Canada', 'au-du-canada-pair',
          'Je vais en France.', 'Je viens de France.',
          'Je vais au Canada.', 'Je viens du Canada.',
        ],
      },
      {
        id: 'rec-a1-22-aux',
        desc:
          '« aux États-Unis » AND « des États-Unis » RECORDED WHOLE, never as a preposition plus a country. '
          + 'The liaison IS the word: aux États-Unis is /o.ze.ta.zy.ni/ and comes out as one long run of '
          + 'syllables, and a clip of « aux » on its own teaches nothing at all because the sound the learner '
          + 'needs does not exist until the country is attached. Same for des. Both in ONE take, adjacent, so '
          + 'the learner hears that the two behave identically. '
          + 'Then the two whole sentences and the published line: « Je vais aux États-Unis. », « Je viens des '
          + 'États-Unis. », « Mon frère travaille aux États-Unis. » The last of those is fr.sons.liaisons.059 '
          + 'and is already in the seed, so it may already have a clip: if it does, reuse it rather than '
          + 'recording a second performance of the same row.',
        clipIds: [
          'aux États-Unis', 'des États-Unis', 'aux-des-etats-unis-pair',
          'Je vais aux États-Unis.', 'Je viens des États-Unis.',
          'Mon frère travaille aux États-Unis.',
        ],
      },
      {
        id: 'rec-a1-22-pairs',
        desc:
          'THE TWO AGREEMENT PAIRS, EACH ADJACENT IN ONE TAKE WITH ONE VOICE. « français » immediately '
          + 'followed by « française », then « canadien » immediately followed by « canadienne ». The whole '
          + 'point is that only the ending changes, so any difference in pace, pitch or weight between the two '
          + 'halves teaches something that is not there. '
          + 'BOTH PAIRS ARE GENUINELY AUDIBLE AND THEY DIFFER IN DIFFERENT WAYS. In français / française an s '
          + 'that was silent WAKES UP: give it full value, and do not lengthen the vowel to compensate. In '
          + 'canadien / canadienne a NASAL VOWEL COLLAPSES: canadien ends /djɛ̃/, through the nose with no n '
          + 'behind it, and canadienne ends /djɛn/, a plain vowel with a real n. Reading the masculine with an '
          + 'n on the end destroys the pair. '
          + 'Then the four sentences, in the same take, in this order: « Il est français. », « Elle est '
          + 'française. », « Il est canadien. », « Elle est canadienne. »',
        clipIds: [
          'français', 'française', 'francais-francaise-pair',
          'canadien', 'canadienne', 'canadien-canadienne-pair',
          'Il est français.', 'Elle est française.',
          'Il est canadien.', 'Elle est canadienne.',
        ],
      },
      {
        id: 'rec-a1-22-going',
        desc:
          '« en France » AND « au Canada » ADJACENT IN ONE TAKE, so the two prepositions are heard against '
          + 'each other in identical frames. This is the only comparison in the going-to column that carries '
          + 'any information: the two words share no sound, and hearing them side by side is what makes that '
          + 'obvious rather than something the learner has to be told. '
          + 'NEVER RECORD A PREPOSITION IN ISOLATION. There is no clip anywhere in this lesson of en, au, aux, '
          + 'de, du or des alone. They are unstressed function words that only exist attached to a country, '
          + 'and a clip of one on its own is a sound the learner will never hear again. If a request for one '
          + 'arrives, it is a mistake in the request. '
          + 'Also in this take: « au Japon », « au Portugal », « en Belgique », « en Espagne », each whole.',
        clipIds: [
          'en-france-au-canada-pair',
          'au Japon', 'au Portugal', 'en Belgique', 'en Espagne',
          'Je vais en Belgique.', 'Je vais au Mexique.',
        ],
      },
      {
        id: 'rec-a1-22-vowel',
        desc:
          '« au Iran » AND « en Iran » ADJACENT, ONE TAKE, and the first of them is the error. Read the wrong '
          + 'one slowly enough that the learner hears the two vowels genuinely colliding, which is the whole '
          + 'reason the language refuses it, and then the right one at ordinary pace. '
          + 'THE LIAISON IN « en Iran » IS A REAL PRONOUNCED N and must be given its full value: the phrase '
          + 'comes out as three syllables, ahⁿ-nee-RAHⁿ, with the n on the front of the second syllable rather '
          + 'than closing the first. Do NOT read it as en, pause, Iran. It is the same shape as mon ami from '
          + 'the possessives lesson. '
          + 'Then « d\'Iran » and the two whole sentences: « Je vais en Iran. », « Je viens d\'Iran. » The '
          + 'second is here so the learner hears that the exception stops at the going-to column.',
        clipIds: ['trap-au-iran', 'en Iran', "d'Iran", 'Je vais en Iran.', "Je viens d'Iran."],
      },
      {
        id: 'rec-a1-22-articles',
        desc:
          'THE TWELVE COUNTRIES, EACH READ WITH ITS ARTICLE ATTACHED AND NEVER WITHOUT IT. la France, le '
          + 'Canada, la Belgique, les États-Unis, le Sénégal, l\'Allemagne, l\'Espagne, l\'Italie, le '
          + 'Portugal, le Japon, le Mexique, l\'Iran. Read as ONE LIST in one take, at an even pace, because '
          + 'the learner is being asked to store the article as part of the word and a pause between the '
          + 'article and the country teaches the opposite. '
          + 'NO COUNTRY IS EVER RECORDED BARE in this lesson. There is no clip of « France » or « Canada » on '
          + 'their own, deliberately: a bare country is the thing the opening scene is about not storing. '
          + 'Then the three published sentences: « La France est un pays d\'Europe. », « Le Canada est un '
          + 'grand pays. », « Les États-Unis sont grands. »',
        clipIds: [
          ...THE_TWELVE.map((c) => c.fr),
          'les-douze-pays',
          "La France est un pays d'Europe.", 'Le Canada est un grand pays.', 'Les États-Unis sont grands.',
        ],
      },
      {
        id: 'rec-a1-22-capital',
        desc:
          '« Il est français. » AND « C\'est un Français. » IN ONE TAKE, AND THEY MUST SOUND THE SAME FROM THE '
          + 'NATIONALITY ONWARDS. The capital letter is invisible to the ear and the whole teaching is that '
          + 'the learner cannot hear it, so a reader who gives the capitalised one any extra weight is '
          + 'inventing a signal the language does not have. Read both plainly at the same pace. '
          + 'Then « Je suis français. » in the same take, which is fr.a1.metiers.264 and is already in the '
          + 'seed: reuse an existing clip if one has been delivered.',
        clipIds: [
          'Il est français.', "C'est un Français.", 'francais-Francais-identical',
          'Je suis français.',
        ],
      },
      {
        id: 'rec-a1-22-traps',
        desc:
          'The five written traps, wrong version then right version, with a clear beat between them. Read '
          + 'EVERY wrong version plainly and at ordinary pace rather than comically, because a learner saying '
          + 'them does not hesitate either. « Je viens du France. » and « Je vais en Canada. » are both '
          + 'perfectly pronounceable and sound completely ordinary, which is the point: nothing about them '
          + 'signals an error, which is why they survive. « Je vais au Iran. » is the one trap in the group '
          + 'that sounds uncomfortable, and it should: read it with the two vowels genuinely meeting. « Je '
          + 'vais en la France. » should be read flatly, with the extra word given no emphasis at all.',
        clipIds: [
          'trap-du-france', 'trap-en-canada', 'trap-au-iran-2', 'trap-en-la-france',
          'trap-bare-country',
        ],
      },
      {
        id: 'rec-a1-22-scene',
        desc:
          'The opening scene, French bubbles only. Théo is a colleague in his thirties waiting for a coffee '
          + 'machine, half distracted, being friendly. His switch to English MUST BE WARM AND COMPLETELY '
          + 'UNREMARKABLE. He has not noticed an error and he is not making a point: he heard a learner and '
          + 'decided to make things easier, which is a kindness rather than a judgement. Any hint of '
          + 'correction in his voice turns the scene into a telling-off and loses the whole point, which is '
          + 'that nothing visibly went wrong. His last line the following morning, where he stays in French '
          + 'and neither of them mentions it, is where warmth is allowed to show.',
        clipIds: [
          "Vous venez d'où, alors ?",
          'Ah, de France ! Et vous êtes ici depuis longtemps ?',
        ],
      },
    ],
    ambienceDefault: 'off',
  },
};

/** Exported for the authoring script, the merge script and the test, so none of
 *  them restates a count that can drift out of agreement with the content. */
export const PAYS_ITEM_IDS = ITEM_IDS;
export const PAYS_SPEAK_IDS = SPEAK_IDS;
export const PAYS_DICTATION_IDS = DICTATION_IDS;
export const PAYS_TRANCHES = DECK_TRANCHE;
export const PAYS_COUNTRY_IDS = COUNTRY_IDS;
export const PAYS_NAT_IDS = NAT_IDS;
export const PAYS_GRID_IDS = GRID_IDS;
export const PAYS_WILD_IDS = [...GOING_WILD, ...COMING_WILD, ...ARTICLE_WILD, ...NATIONALITY_WILD];
export const PAYS_READING_ONLY_IDS = READING_ONLY_IDS;

/* ─── The handover ─────────────────────────────────────────────────────────
 *
 * The brief asks for this explicitly and asks for it twice: once for a1.21
 * (Prepositions of Place), which reserved `en` plus a country for this lesson
 * and is briefed but unbuilt, and once for whoever builds the
 * `quebec-et-francophonie` content.
 *
 * FOR a1.21, PREPOSITIONS OF PLACE, WHICH HAS NOT LANDED:
 *
 *   a1.21 DID NOT LAND DURING THIS BUILD. Its brief reserves `en` plus a country
 *   for a1.22 and instructs its author to write a handover; that handover still
 *   does not exist, so nothing was read from it and nothing was reconciled
 *   against it. Checked at the start of this build and again at the end.
 *
 *   WHAT a1.22 HAS TAKEN, AND ONLY THIS: `en`, `au`, `aux`, `de`, `du` and `des`
 *   IN FRONT OF A COUNTRY NAME. Nothing else. This lesson teaches no preposition
 *   of place with a city, a region, a building, a continent or an address, and
 *   FORBIDDEN_FORMS in pays-corpus.ts does not guard against them because they
 *   are simply absent.
 *
 *   WHAT a1.21 STILL OWNS AND SHOULD TAKE FREELY:
 *
 *     `en` with a means of transport (en voiture, en avion), with a season (en
 *     été), with a material and with a language. None appears here.
 *
 *     `à` with a city (à Paris, à Lyon), which is a different rule from all six
 *     of this lesson's words and is deliberately untaught: a1.22 names it in one
 *     clause on no card at all. `fr.a1.rencontres.039` « Je viens de Toulouse,
 *     et toi ? » is in WITHDRAWN_IDS for exactly this reason.
 *
 *     `au` and `aux` with anything that is not a country (au restaurant, au
 *     cinéma, aux toilettes). The fold from à plus le is named here as a fact
 *     the learner already has from a1.11 and a1.29, not taught.
 *
 *     Continents. `l'Europe`, `l'Afrique`, `l'Asie` and `l'Amérique` are all
 *     published headwords in this theme (.072 to .076) and are NOT imported: a
 *     continent takes en the way a feminine country does, and teaching it here
 *     would have doubled the country list to say the same thing twice.
 *
 *   WHAT a1.21 MAY NOW REUSE FROM HERE: the twelve country headwords are in the
 *   seed as of this build, with their articles and with ten repaired
 *   transcriptions. `sheet.a1.22.grid` holds both prepositional columns and can
 *   be linked from a1.21 rather than duplicated.
 *
 * FOR WHOEVER BUILDS quebec-et-francophonie:
 *
 *   593 published rows, 162 of them at fr.a1, NEXT FREE fr.a1.quebec-et-
 *   francophonie.165 with gaps at 29 and 62. NONE of it is touched here.
 *
 *   IT HOLDS A SECOND COPY OF TWO OF THIS LESSON'S HEADWORDS: .002 « le Canada »
 *   and .003 « la France », both with different transcriptions from the
 *   pays-et-nationalites rows (`luh ka-na-DA` against `LUH kah-nah-DAH`, `la
 *   FRAHNS` against `LAH FRAHNSS`). flashhub-coverage.test.ts keys on `fr` PER
 *   THEME, so the two copies are two cards in two decks rather than one card
 *   served twice, and neither is a defect. But a learner who reaches both decks
 *   will see two transcriptions of France, one of which this lesson has now
 *   repaired to `LAH FRAHⁿSS` and one of which is still `la FRAHNS`. That is
 *   worth resolving in whichever direction, and it is that build's call.
 *
 *   IT ALSO HOLDS TWO BROKEN NASALS THIS LESSON DID NOT REPAIR: .022 « le
 *   français » (`luh frahn-SAY`) and .033 « un Canadien » (`uhn ka-na-DYAN`,
 *   two plain nasals in one row). See NOT_REPAIRED.
 *
 *   a1.22 TEACHES NO QUÉBEC CONTENT AT ALL. `le Québec` and `québécois` are
 *   published at .005 and .006 in this lesson's own theme and are deliberately
 *   not imported. QUEBEC_TEACHING in pays-corpus.ts guards every surface.
 *
 * THE ID RANGE, for whoever authors into pays-et-nationalites next:
 *
 *     fr.a1.pays-et-nationalites.001-.309   published before this build, NO GAPS
 *     fr.a1.pays-et-nationalites.310-.320   a1.22. Eleven rows.
 *     fr.a1.pays-et-nationalites.321+       FREE.
 *
 *   Re-run `pnpm corpus:probe --theme pays-et-nationalites` before authoring
 *   rather than trusting that block.
 *
 * WHAT a2.02 STILL OWNS, UNTOUCHED:
 *
 *   `aller` and `venir` AS VERBS. This lesson has `je vais` and `je viens` as
 *   frozen frames and says on a card that the full verbs arrive later. No
 *   production surface carries a conjugated form of either: CONJUGATED_FORMS in
 *   pays-corpus.ts is the list and the batch, the merge and the test all check
 *   it. Three imported rows carry `il vient` or `elle vient` and all three are
 *   confined to reading surfaces by READING_ONLY_IDS.
 *
 *   `venir de` + INFINITIVE, the recent past. 45 of the corpus's 134 matching
 *   sentences are this construction rather than origin, and none is imported.
 *
 * THREE THINGS THIS BUILD FOUND AND DID NOT FIX, because none is its to fix:
 *
 *   a1.06.l1 ALREADY TEACHES the no-article rule, the capital rule and the
 *   français / française agreement, in more detail than its own brief suggests
 *   and in more detail than a1.22's brief knew. a1.22 extends it by name rather
 *   than repeating it. Nothing in a1.06 was edited.
 *
 *   THE fr.a1.* RESPELLINGS ARE SYSTEMATICALLY BROKEN AND THE fr.sons.* ONES ARE
 *   NOT, on every nasal-carrying row this build touched. Nine out of nine in
 *   this theme alone. That is a corpus migration rather than a lesson build; ten
 *   rows are repaired here and the rest are named in NOT_REPAIRED.
 *
 *   SIX IMPORTED ROWS CARRY U+203F and five keep it. See IPA_REPAIRS for which
 *   one was repaired and why the other five were not. 961 of the seed's 7,542
 *   rows already carry the glyph.                                             */
export const PAYS_HANDOVER_NEXT_FREE_ID = 'fr.a1.pays-et-nationalites.321';
