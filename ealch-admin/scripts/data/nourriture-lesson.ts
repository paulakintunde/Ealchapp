// a1.23.l1 "La nourriture": the lesson body.
//
// Reads every French string, every transcription and every English gloss from
// nourriture-corpus.ts through frOf / enOf / sub. Nothing below restates one.
//
// ══════════════════════════════════════════════════════════════════════════
//  WHAT THIS LESSON IS, AND WHAT IT REFUSES TO BE
// ══════════════════════════════════════════════════════════════════════════
//
// Sixty food words is the easy half and it is not the lesson. Every article a
// food word can take is ALREADY TAUGHT: a1.03 gave gender, a1.04 gave
// le/la/les, a1.11 gave un/une/des, and a1.29 (the direct prerequisite) gave
// du/de la/des. A food lesson that teaches articles is the fifth lesson running
// to teach articles.
//
// So the weight sits on the one thing no shipped lesson owns, which is the
// second clause of this unit's own canDo:
//
//     J'aime le café.      the whole category
//     Je bois du café.     some of it, now
//
// Six sections name the sixty words. TWELVE make the learner choose between
// those two columns.
//
// ── The trap is made by the lesson immediately upstream ────────────────────
//
// a1.29 spends its whole length teaching that uncounted food takes `du`. A
// learner arriving here will say « j'aime du pain » on the first try, and they
// will be applying a rule they were correctly taught eight lessons ago. The
// lesson says a1.29 by name rather than letting the learner discover the
// contradiction alone, because a contradiction found alone is a language the
// learner decides is arbitrary.
//
// ── Layout decisions taken on the constraints, not in the editor ───────────
//
//   s19-pair IS THE LESSON and it is a `tapTable`, two columns, one screen.
//   Splitting the two verbs across two sections is how this decays into a word
//   list. The test asserts both verbs appear inside that one section.
//
//   Seven shelves, not one deck. `cardDeck` IS in ownsLayout(), so each deck
//   owns the viewport; sixty cards in one of them is a scroll with no sense of
//   progress. Six deck sections of five to fifteen let the learner see the end.
//
//   NO `size: 'xl'` ANYWHERE A SENTENCE APPEARS. density.logic.ts reads xl as a
//   12-word cap on every string in the section, which is right on a one-word
//   card and fatal on the contrast screens. This cost a1.01 a session.
//
//   NO imageRef. Nothing validates it, `lessonImage` is a static registry, and
//   an unregistered ref draws a blank box. If food should feel like food here it
//   is the audio and the transcriptions doing it.
//
//   The reference sheet uses `teach` and `table` ONLY. ReferenceSheet.tsx
//   switches on exactly three types (teach, letterGrid, table) and its default
//   branch draws the title and nothing else. a1.13 and a1.17 both shipped
//   `cheatSheet` sections in a sheet and both drew an empty heading.
//
// ── The quiz, and where randomising the answers actually matters ───────────
//
// QuizDeckView (LessonRich.tsx:1232) shuffles the options of every closed
// question per question per attempt, so the learner NEVER sees the authored
// order in the exam. MissionRich does NOT: every option surface in it renders
// `q.opts` in authored order and compares the tap against `q.correct` directly
// (lines 347, 732, 944, 1026, 1941, 1991). So the in-mission checks below are
// hand-spread, and no act places the correct option in the same slot twice
// running.
//
// The authored `correct` indices still matter in the exam because
// density.logic.ts caps any one slot at 40% of the closed questions, measured
// on the authored data. The A1 band sits at 24.3 / 28.9 / 26.0 / 20.9 across
// 350 closed questions, and this exam is spread to land inside that.

import type {
  ErrorTrigger, Lesson, LessonAct, LessonDrill, LessonSection, ReferenceSheet, SceneBeat,
} from '../../../ealch-v2/src/content/schema.ts';
import { NOURRITURE_TERMS, REFRAME, REFRAME_COUNT } from './nourriture-terms.ts';
import { unitRef } from './_unit-ref.ts';
import {
  ELIDED, EAT_COLUMN, FOODS, LIKE_COLUMN, NEGATION_PAIR, PLURAL_ONLY, SHELF_LABEL, SHELVES,
  THE_PAIR, enOf, food, frOf, onShelf, sub,
} from './nourriture-corpus.ts';

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

/** The sixty food headwords, in shelf order. NOT ONE of the 57 served rows is
 *  re-authored: flashhub-coverage.test.ts keys decks on `fr` per theme and a
 *  second `le pain` in `cuisine` is one card served twice. */
const FOOD_IDS = FOODS.map((f) => f.id);

/** The six deck sections, each naming one or two shelves. */
const DECK_GROUPS: { id: string; shelves: readonly (typeof SHELVES)[number][] }[] = [
  { id: 's05-bread', shelves: ['boulangerie', 'laitier'] },
  { id: 's06-meat', shelves: ['viande'] },
  { id: 's07-fruit', shelves: ['fruits'] },
  { id: 's08-veg', shelves: ['legumes'] },
  { id: 's09-drink', shelves: ['boissons'] },
  { id: 's10-cupboard', shelves: ['placard'] },
];

const idsForGroup = (g: (typeof DECK_GROUPS)[number]): string[] =>
  g.shelves.flatMap((s) => onShelf(s).map((f) => f.id));

/** The `l'` group. Six words whose article hides which kind they are. */
const ELIDED_IDS = ELIDED.map((f) => f.id);

/** The like column and the eat column, as published sentences. */
const LIKE_IDS = LIKE_COLUMN.map((s) => s.id);
const EAT_IDS = EAT_COLUMN.map((s) => s.id);

/** The two rows the whole lesson turns on, and the two that carry the negative.
 *  Borrowed from a1.29's block for EVIDENCE and never released to spaced
 *  repetition: see DECK_TRANCHE. */
const PAIR_IDS = [THE_PAIR.like.id, THE_PAIR.eat.id];
const NEGATION_IDS = [NEGATION_PAIR.like.id, NEGATION_PAIR.eat.id];

/** a1.29 owns these. Shown as evidence, released by no tranche. */
const BORROWED_NOT_RELEASED = [THE_PAIR.eat.id, NEGATION_PAIR.eat.id];

const PLURAL_IDS = PLURAL_ONLY.map((f) => f.id);

/** Everything the lesson puts on a screen. */
const ITEM_IDS = [...new Set([...FOOD_IDS, ...LIKE_IDS, ...EAT_IDS, ...NEGATION_IDS])];

/* Speak targets.
 *
 * NOT ONE BARE ARTICLE is in here: `du` on its own is an unstressed function
 * word and a clip of it teaches a stress the word never carries.
 *
 * ── Why the contrast sentences are NOT speak targets ───────────────────────
 *
 * `practice` with `skill: 'speak'` requires `voiceflash` on every item it
 * names, checked against POSTGRES rather than the seed. Measured 2026-08-07:
 * of the 76 rows this lesson serves, 58 carry voiceflash and EXACTLY ONE of
 * them is a sentence, `fr.sons.liaisons.139` « Nous aimons le café. »
 *
 * A first draft named « J'aime le café. » and « Je bois du café. » here and
 * both would have rendered a practice card with no voice to flash. Adding the
 * drill to a1.29's and the cafe theme's rows would be reaching into another
 * lesson's cards to make this section look fuller, so the section speaks the
 * WORDS instead and the CONTRAST is spoken in the exam, where the two `speak`
 * questions carry a `target` string rather than an itemId and are not bound by
 * the drill rule at all.                                                      */
const SPEAK_IDS = [
  LIKE_COLUMN[8].id, // Nous aimons le café. The one sentence that can be here.
  food('pain').id, food('eau').id, food('oignon').id, food('œuf').id,
  food('café').id, food('thé').id, food('pomme').id, food('fromage').id,
  food('poulet').id,
];

/* Dictation targets.
 *
 * `dictation` must be on the row, checked against POSTGRES rather than the
 * seed. Measured 2026-08-07: of the 76 rows this lesson serves, EIGHT carry the
 * dictation drill and all eight are sentences. A first draft named
 * « J'aime le café. », « Je bois du café. » and « Je mange du pain. », none of
 * which carries it, and all three would have rendered nothing at all.
 *
 * ── Only one of the eight stays in LETTERS mode ────────────────────────────
 *
 * Measured through the real `dicteeMode`:
 *
 *     LETTERS  16  fr.a1.cafe.150       « Je n'aime pas le café. »
 *     WORDS    18  fr.a1.cuisine.264    « Je ne mange pas de pain. »
 *     WORDS    28  fr.a1.cuisine.205    « Vous mangez du poulet rôti ce soir. »
 *     WORDS    33  fr.a1.marche.118     « Les enfants aiment les fraises sucrées. »
 *     WORDS    31  fr.a1.questions.077  « Est-ce que tu préfères le thé ou le café ? »
 *
 * In WORD mode the learner taps pre-spelled tiles rather than writing, so four
 * of these five do not make anybody produce the spelling of the little word.
 * They are kept anyway, because the bank is the sentence's own words shuffled
 * with decoys and PLACING `de` correctly among them is still the choice this
 * lesson teaches. The one target that genuinely makes the learner write it is
 * first in the list, and it is the negative where `le` survives.
 *
 * Named here so nobody "completes" the dictée by adding a target that silently
 * degrades, and so nobody deletes the four thinking they are dead weight.     */
const DICTATION_IDS = [
  NEGATION_PAIR.like.id,  // Je n'aime pas le café.   LETTERS
  NEGATION_PAIR.eat.id,   // Je ne mange pas de pain. WORDS
  EAT_COLUMN[4].id,       // Vous mangez du poulet rôti ce soir.
  LIKE_COLUMN[5].id,      // Les enfants aiment les fraises sucrées.
  LIKE_COLUMN[7].id,      // Est-ce que tu préfères le thé ou le café ?
];

/* ─── The scene ────────────────────────────────────────────────────────────
 *
 * An A1 scene opens on somebody being MISREAD AS A PERSON, not on being
 * misunderstood. Every word is correct and the evening still goes wrong.
 * Nobody is corrected and nobody is annoyed; the plan simply does not happen.
 *
 * The candidate that was rejected: a market stall, where the learner points and
 * the vendor bags it. Nothing goes wrong, so there is no scene.
 *
 * The break body is 31 words, inside the 24 to 40 band. Every beat carries its
 * own `size` and its own `audio`, prose at md and the choice at lg.           */

const SCENE_BEATS: SceneBeat[] = [
  {
    kind: 'narration',
    size: 'md',
    text: 'Salomé has been invited to dinner at a colleague\'s flat. She has been learning French for four months and she has been looking forward to this all week.',
    audio: { mode: 'tts', lang: 'en-GB' },
  },
  {
    kind: 'narration',
    size: 'md',
    text: 'Her host is cooking and wants to get it right, so he asks the ordinary question a host asks.',
    audio: { mode: 'tts', lang: 'en-GB' },
  },
  {
    kind: 'bubble',
    from: 'them',
    speaker: 'Malik',
    fr: 'Qu\'est-ce que vous aimez ?',
    en: 'What do you like?',
    respell: '[kess-kuh voo zeh-MAY]',
    reveal: 'auto',
    size: 'lg',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65] },
  },
  {
    kind: 'narration',
    size: 'md',
    text: 'She knows this one. She finished the partitive lesson two days ago and she knows exactly which word goes in front of food you have not counted.',
    audio: { mode: 'tts', lang: 'en-GB' },
  },
  {
    kind: 'bubble',
    from: 'you',
    fr: 'J\'aime du poulet.',
    en: 'I like some chicken.',
    respell: '[zhem dü poo-LEH]',
    stage: 'Every word is a real word.',
    reveal: 'tap',
    size: 'lg',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65] },
  },
  {
    kind: 'choice',
    prompt: 'One word is wrong. Which sentence should it have been?',
    size: 'lg',
    options: [
      {
        fr: 'J\'aime du poulet.',
        respell: '[zhem dü poo-LEH]',
        en: 'I like some chicken.',
        outcome: 'breaks',
      },
      {
        fr: 'J\'aime le poulet.',
        respell: '[zhem luh poo-LEH]',
        en: 'I like chicken.',
        outcome: 'works',
      },
    ],
    followUp: {
      works: 'Chicken as a whole idea rather than a portion of it. After aimer it is always le, la or les, and that is the whole lesson.',
      breaks: 'That is the sentence the evening turned on. Du is right for what you are eating and wrong for what you like, and the rule behind it was taught to you two lessons ago.',
    },
  },
  {
    kind: 'break',
    heading: 'He understood her perfectly',
    body:
      'Nothing was misheard and nothing was corrected. He heard somebody still assembling sentences, switched to English '
      + 'to make it easier for her, and the evening she had been looking forward to happened in English.',
    wrong: {
      fr: 'J\'aime du poulet.',
      ipa: '/ʒɛm dy pu.lɛ/',
      respell: '[zhem dü poo-LEH]',
      en: 'I like some chicken.',
    },
    right: {
      fr: 'J\'aime le poulet.',
      ipa: '/ʒɛm lə pu.lɛ/',
      respell: '[zhem luh poo-LEH]',
      en: 'I like chicken.',
    },
    coach: 'She had a rule, the rule was correct, and it does not reach this far. That is the only thing between these two lines.',
    size: 'lg',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65] },
  },
  {
    kind: 'resolve',
    size: 'md',
    text: 'Sixty food words is the easy half of this lesson. Choosing between those two little words is the half that decides which language the evening happens in.',
  },
];

/* ─── Sections ─────────────────────────────────────────────────────────────
 *
 * Twenty-eight, across six acts. Six of them name the sixty words and twelve
 * make the learner choose between the two columns, which is the weighting the
 * brief asks for.                                                            */

const SECTIONS: LessonSection[] = [
  /* ── Act 1: the article is part of the word ────────────────────────────── */

  {
    type: 'scene',
    id: 's01-scene',
    title: 'The Dinner That Happened In English',
    frSub: 'J\'aime le poulet',
    render: 'screens',
    layer: 'core',
    terms: ['articleIsPartOfIt', 'wholeThing'],
    say: {
      text: 'Every word correct, one word wrong, and the evening switches language. Watch which word.',
      voice: 'coach',
      timing: 'onFirstVisitOnly',
    },
    setting: {
      place: 'A flat with something already in the oven',
      city: 'Nantes',
      time: 'Friday, just after eight',
      ambience: 'room-tone-kitchen',
    },
    beats: SCENE_BEATS,
    closing: {
      size: 'md',
      text: `${REFRAME} That is the next half hour, and sixty words to use it on.`,
    },
  },

  {
    type: 'goals',
    id: 's02-goals',
    title: 'What You Will Be Able To Do',
    frSub: 'Ce que vous saurez faire',
    layer: 'core',
    say: 'Four things. The first is a word list and the other three are one decision.',
    goals: [
      { t: 'Name sixty everyday foods', s: 'Each one stored with its article, because the article is the half you cannot work out later.' },
      { t: 'Say what you like', s: 'J\'aime le pain. The whole category, and the ordinary little word in front of it.' },
      { t: 'Say what you are eating', s: 'Je mange du pain. Some of it, using the word the last lesson gave you.' },
      { t: 'Keep them apart in a negative', s: 'One of the two changes when you say no and the other does not, which is where this gets tested.' },
    ],
  },

  {
    type: 'cardDeck',
    id: 's03-article',
    title: 'Half A Word Is Not A Word',
    frSub: 'L\'article fait partie du mot',
    hint: 'Four cards before any food list.',
    render: 'deck',
    layer: 'core',
    size: 'lg',
    terms: ['articleIsPartOfIt'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a1-23-articles' },
    say: 'Four cards before the shelves, because this habit is what the shelves are for.',
    cards: [
      {
        label: 'what you already do',
        head: 'You have been asked for this twice already',
        fr: `${food('pain').fr} · ${food('pomme').fr}`,
        sub: `${sub(food('pain').fr)} · ${sub(food('pomme').fr)}`,
        body: 'The noun gender lesson asked you to store the article rather than the noun. The countries lesson asked again. Food is where you will use it most often, because these are the words that come up every single day.',
      },
      {
        label: 'nothing in the word tells you',
        head: 'Two things from the same fridge',
        fr: `${food('lait').fr} · ${food('crème').fr}`,
        sub: `${sub(food('lait').fr)} · ${sub(food('crème').fr)}`,
        body: 'Milk is the le kind and cream is the la kind. Same shelf, both white, both poured into coffee, and nothing about either predicts its article. This is not a rule with exceptions. There is no rule underneath it.',
      },
      {
        label: 'the guess feels safe here',
        head: 'You know what a tomato is',
        fr: `${food('tomate').fr} · ${food('citron').fr}`,
        sub: `${sub(food('tomate').fr)} · ${sub(food('citron').fr)}`,
        body: 'Familiar objects are exactly where people stop storing the article, because the word feels like something they already own in English. La tomate and le citron. Knowing what the thing is has never once helped.',
      },
      {
        label: 'why it matters this much',
        head: 'One fact, and everything after it',
        fr: `${THE_PAIR.like.fr} · ${THE_PAIR.eat.fr}`,
        sub: `${enOf(THE_PAIR.like.id)} · ${enOf(THE_PAIR.eat.id)}`,
        body: `The same noun twice, with two different words in front. Which one you need depends on the verb, and you can only choose at all if the noun arrived with its article. ${REFRAME}`,
      },
    ],
  },

  {
    type: 'groupDrill',
    id: 's04-elided',
    title: 'The Ones That Hide It',
    frSub: 'l\'eau, l\'oignon, l\'huile',
    layer: 'core',
    terms: ['theApostropheHides'],
    say: 'Six words where the little word has shrunk to l\' and taken the answer with it. Commit before you tap.',
    groups: [
      {
        label: 'the la kind, hiding',
        items: ELIDED.filter((f) => f.gender === 'f').map((f) => ({ fr: f.fr, itemId: f.id, respell: `[${f.respell}]`, en: f.en })),
        check: {
          q: 'l\'eau and l\'huile are both the la kind. What on the card told you that?',
          opts: ['The spelling', 'The sound', 'Nothing did', 'The first letter'],
          correct: 2,
          why: 'Nothing did. Both start with a vowel, so the article shrank to l\' before you ever saw it, and the sound gives you nothing either. These are stored or they are guessed.',
        },
      },
      {
        label: 'the le kind, hiding',
        items: ELIDED.filter((f) => f.gender === 'm').map((f) => ({ fr: f.fr, itemId: f.id, respell: `[${f.respell}]`, en: f.en })),
        check: {
          q: 'Three of the six l\' words are the le kind. Which of these is one of them?',
          opts: [`${food('huile').fr}`, `${food('oignon').fr}`, `${food('eau').fr}`, 'all three are the la kind'],
          correct: 1,
          why: 'l\'oignon is the le kind, and so are l\'ail and l\'œuf. L\'eau and l\'huile are the la kind. Six words, split three and three, and the card looks identical either way.',
        },
      },
      {
        // A groupDrill control page carries items: [] explicitly and no size.
        // An xl drill must never stack words and a check in one group.
        label: 'the habit',
        items: [],
        check: {
          q: 'You meet a new food word beginning with a vowel. What do you write down?',
          opts: [
            'The word and what it means',
            'The word and how to say it',
            'The word and which kind it is',
            'The word on its own',
          ],
          correct: 2,
          why: 'Which kind it is, because the card will never tell you again. For every other noun the article is sitting there in front of it. For these six it has vanished into an apostrophe.',
        },
      },
    ],
  },

  /* ── Act 2: the shelves ─────────────────────────────────────────────────── */

  ...DECK_GROUPS.map((g, i) => {
    const items = g.shelves.flatMap((s) => onShelf(s));
    const titles = g.shelves.map((s) => SHELF_LABEL[s].en).join(' and ');
    const frTitles = g.shelves.map((s) => SHELF_LABEL[s].fr).join(' · ');
    return {
      type: 'cardDeck' as const,
      id: g.id,
      title: titles,
      frSub: frTitles,
      hint: `${items.length} cards.`,
      render: 'deck' as const,
      layer: 'core' as const,
      size: 'lg' as const,
      // Two chips, under the renderer's limit of three.
      terms: i === 0 ? ['articleIsPartOfIt'] : i === 5 ? ['noSingular'] : [],
      audio: { mode: 'tts' as const, lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: `rec-a1-23-${g.id}` },
      say: `${items.length} words, each with the article it is stored with.`,
      cards: items.map((f) => ({
        label: f.en,
        head: f.fr,
        fr: f.fr,
        sub: sub(f.fr),
        body: f.pluralOnly
          ? 'Plural in French with no everyday singular, so it takes les and it agrees as a plural everywhere it goes.'
          : f.elided
            ? `The article has shrunk to l’, so the card does not show you which kind it is. This one is the ${f.gender === 'f' ? 'la' : 'le'} kind.`
            : `The ${f.gender === 'f' ? 'la' : 'le'} kind. Store the two words together.`,
        itemId: f.id,
      })),
    };
  }),

  {
    type: 'groupDrill',
    id: 's11-check',
    title: 'Which Kind?',
    frSub: 'le ou la',
    layer: 'core',
    terms: ['articleIsPartOfIt', 'noSingular'],
    say: 'Three questions across the whole set. None of them is about what the food is.',
    groups: [
      {
        label: 'the ones that only come in plural',
        items: PLURAL_ONLY.map((f) => ({ fr: f.fr, itemId: f.id, respell: `[${f.respell}]`, en: f.en })),
        check: {
          q: 'Which of these would a French speaker never say?',
          opts: ['les pâtes', 'une pâte', 'des pâtes', 'les frites'],
          correct: 1,
          why: 'Une pâte is not a thing anybody orders, the way a spaghetti is not a thing in English. These words live in the plural and take les, or des when you are having some of them.',
        },
      },
      {
        label: 'no pattern to find',
        // `la crème` CARRIES NO respell HERE ON PURPOSE. Its stored value
        // lah KREHM is CORRECT (/kʁɛm/ has a real m and no nasal vowel), but
        // hasPlainNasalFor reads a vowel plus M at a token end as a nasal
        // without consulting the French spelling, and fails the whole lesson on
        // it. Invariant §3's second blind spot, the jaune case. The corpus keeps
        // the right value and a1-23-nourriture.test.ts pins it by name; this one
        // drill card shows the word without its transcription rather than
        // shipping a wrong one to satisfy a validator that is mistaken.
        items: [food('lait'), food('crème'), food('beurre'), food('farine')].map((f) => (
          f.bare === 'crème'
            ? { fr: f.fr, itemId: f.id, en: f.en }
            : { fr: f.fr, itemId: f.id, respell: `[${f.respell}]`, en: f.en }
        )),
        check: {
          q: 'le lait, la crème, le beurre, la farine. What decides which is which?',
          opts: [
            'Whether it is liquid',
            'Whether it comes from an animal',
            'Nothing you can see or hear',
            'The last letter of the word',
          ],
          correct: 2,
          why: 'Nothing you can see or hear. Two of those four end in an e and one of them is the le kind. Four things from one shelf and the only way to get them right is to have stored them.',
        },
      },
      {
        label: 'the whole set',
        items: [],
        check: {
          q: 'You have sixty food words now. What is the one thing worth checking about each of them?',
          opts: [
            'How it is spelled',
            'Whether you can hear the ending',
            'Whether English has the same word',
            'Which little word it arrived with',
          ],
          correct: 3,
          why: 'Which little word it arrived with. Everything the rest of this lesson asks you to do needs that one fact, and none of it can be worked out from the food.',
        },
      },
    ],
  },

  /* ── Act 3: what you like ──────────────────────────────────────────────── */

  {
    type: 'cardDeck',
    id: 's12-like',
    title: 'What You Like Is All Of It',
    frSub: 'J\'aime le pain',
    hint: 'The half nobody teaches.',
    render: 'deck',
    layer: 'core',
    size: 'lg',
    terms: ['wholeThing'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a1-23-like' },
    say: 'Five cards. This is the half of the lesson that the last lesson set you up to get wrong.',
    cards: [
      {
        label: 'the ordinary case',
        head: 'Coffee, as an idea',
        fr: frOf(THE_PAIR.like.id),
        sub: enOf(THE_PAIR.like.id),
        body: 'You are not talking about the cup in front of you. You are talking about coffee, everywhere, as a category, and French marks that with the same little word you learned for the bread on the table.',
      },
      {
        label: 'and in the plural',
        head: 'It works the same way for a plural food',
        fr: frOf(LIKE_COLUMN[2].id),
        sub: enOf(LIKE_COLUMN[2].id),
        body: 'Les pâtes, because pasta as a category is plural in French. The rule does not change when the food does.',
      },
      {
        label: 'not just aimer',
        head: 'Four verbs, one behaviour',
        fr: `${frOf(LIKE_COLUMN[4].id)}`,
        sub: enOf(LIKE_COLUMN[4].id),
        body: 'Préférer does exactly what aimer does, and so do adorer and détester. This is a small family of verbs that all point at the whole category, and they all take the ordinary article.',
      },
      {
        label: 'the trap, named',
        head: 'The last lesson taught you the other word',
        fr: 'J\'aime du pain.',
        sub: 'Not a sentence.',
        body: 'The partitive lesson spent its whole length teaching you that uncounted food takes du, and it was right. It does not reach aimer. This is the single most common thing to get wrong in this lesson and it is made by the lesson before it.',
      },
      {
        label: 'the line to keep',
        head: 'One sentence to carry out of here',
        fr: `${frOf(THE_PAIR.like.id)} · ${frOf(THE_PAIR.eat.id)}`,
        sub: `${enOf(THE_PAIR.like.id)} · ${enOf(THE_PAIR.eat.id)}`,
        body: REFRAME,
      },
    ],
  },

  {
    type: 'tapTable',
    id: 's13-like-table',
    title: 'Four Verbs, One Column',
    frSub: 'aimer, adorer, détester, préférer',
    layer: 'core',
    terms: ['wholeThing'],
    sheetId: 'sheet.a1.23.columns',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a1-23-like-table' },
    say: 'Nine sentences nobody wrote to teach this. Tap any row to hear it.',
    cols: ['what somebody said', 'what it means'],
    // TapRow is { cells, say?, detail? } and carries NO itemId, so the ids these
    // rows display are declared through ITEM_IDS and released by act 3.
    //
    // THE WHOLE LIKE COLUMN IS HERE except the negative, which belongs to act 4.
    // A first draft showed four of the ten and declared all ten, which left five
    // published sentences resolving perfectly and drawn by nothing: a1.08's
    // failure exactly, and this lesson's own tranche test caught it.
    rows: LIKE_COLUMN.filter((s) => s.id !== NEGATION_PAIR.like.id).map((s) => ({
      cells: [frOf(s.id), enOf(s.id)],
      say: frOf(s.id),
    })),
  },

  {
    type: 'groupDrill',
    id: 's14-like-drill',
    title: 'Whole Or Part?',
    frSub: 'le, la, les',
    layer: 'core',
    terms: ['wholeThing'],
    say: 'Two questions, and the second is the one that catches people.',
    groups: [
      {
        label: 'saying what you like',
        items: [LIKE_COLUMN[0], LIKE_COLUMN[2]].map((s) => ({ fr: frOf(s.id), itemId: s.id, en: enOf(s.id) })),
        check: {
          q: 'You want to say you like fish, in general. Which one?',
          opts: ['J\'aime du poisson.', 'J\'aime le poisson.', 'J\'aime de poisson.', 'J\'aime poisson.'],
          correct: 1,
          why: 'J\'aime le poisson. Fish as a whole category, so the ordinary little word. The first option is the sentence from the opening scene.',
        },
      },
      {
        label: 'and when you have just been taught otherwise',
        items: [],
        check: {
          q: 'The partitive lesson said uncounted food takes du. Why is that not the answer here?',
          opts: [
            'Because the rule was wrong',
            'Because aimer is irregular',
            'Because liking is about the whole thing, not an amount',
            'Because poisson is masculine',
          ],
          correct: 2,
          why: 'Because you are not talking about an amount at all. Du answers the question how much, and liking something has no how much in it. The partitive rule is correct and this is simply not a place it applies.',
        },
      },
    ],
  },

  /* ── Act 4: what you are eating ────────────────────────────────────────── */

  {
    type: 'cardDeck',
    id: 's15-eat',
    title: 'What You Are Eating Is Some Of It',
    frSub: 'Je mange du pain',
    hint: 'Nothing new to learn here.',
    render: 'deck',
    layer: 'core',
    size: 'lg',
    terms: ['aPartOfIt'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a1-23-eat' },
    say: 'Four cards, and you already know all of this. The only new thing is that it is now a choice.',
    cards: [
      {
        label: 'the word you already have',
        head: 'Some bread, not bread as an idea',
        fr: frOf(EAT_COLUMN[1].id),
        sub: enOf(EAT_COLUMN[1].id),
        body: 'This is the partitive lesson, unchanged. You are having an amount of bread, so the word in front says an amount of. Nothing here is new and nothing here has been revised.',
      },
      {
        label: 'all three shapes',
        head: 'du, de la, des, chosen the way they always were',
        fr: `${frOf(EAT_COLUMN[0].id)} · ${frOf(EAT_COLUMN[5].id)}`,
        sub: `${enOf(EAT_COLUMN[0].id)} · ${enOf(EAT_COLUMN[5].id)}`,
        body: 'Which of the three you use is decided by the noun, exactly as before. What is new in this lesson is that you had to decide to be in this column at all.',
      },
      {
        label: 'two in one sentence',
        head: 'An ordinary meal has several of these',
        fr: frOf(EAT_COLUMN[6].id),
        sub: enOf(EAT_COLUMN[6].id),
        body: 'Bread and butter, each with its own little word. Real sentences about food stack these up, which is why the choice has to be automatic rather than worked out.',
      },
      {
        label: 'the verb decides',
        head: 'The same noun, the other column',
        fr: `${frOf(THE_PAIR.eat.id)} · ${frOf(THE_PAIR.like.id)}`,
        sub: 'Two verbs. One noun. Two different words.',
        body: `Nothing about coffee changed between these two sentences. ${REFRAME}`,
      },
    ],
  },

  {
    type: 'tapTable',
    id: 's16-eat-table',
    title: 'Eating And Drinking',
    frSub: 'manger, boire, prendre',
    layer: 'core',
    terms: ['aPartOfIt'],
    sheetId: 'sheet.a1.23.columns',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a1-23-eat-table' },
    say: 'Eight more published sentences. Notice how many different people are speaking.',
    cols: ['what somebody said', 'what it means'],
    // The whole eat column, for the same reason act 3 shows the whole like
    // column. fr.a1.cuisine.268 is among them and is a1.29's: shown here as
    // evidence and released by no tranche.
    rows: EAT_COLUMN.map((s) => ({
      cells: [frOf(s.id), enOf(s.id)],
      say: frOf(s.id),
    })),
  },

  {
    type: 'groupDrill',
    id: 's17-negation',
    title: 'Saying No To Each',
    frSub: 'ne... pas',
    layer: 'core',
    terms: ['wholeThing', 'aPartOfIt'],
    say: 'One of the two columns changes when you say no. The other does not, and that is the test.',
    groups: [
      {
        label: 'the negative, both ways',
        items: [NEGATION_PAIR.like, NEGATION_PAIR.eat].map((s) => ({ fr: frOf(s.id), itemId: s.id, en: enOf(s.id) })),
        check: {
          q: 'One of those two kept its little word and one changed it. Which changed?',
          opts: [
            'The liking one changed',
            'The eating one changed',
            'Both changed',
            'Neither changed',
          ],
          correct: 1,
          why: 'The eating one. Du collapses to de after a negative, which the partitive lesson taught. Le does not collapse at all, so « Je n\'aime pas le café » keeps its le exactly as it was.',
        },
      },
      {
        label: 'and the other direction',
        items: [],
        check: {
          q: 'You do not like fish. Which is right?',
          opts: [
            'Je n\'aime pas de poisson.',
            'Je n\'aime pas du poisson.',
            'Je n\'aime pas le poisson.',
            'Je n\'aime pas poisson.',
          ],
          correct: 2,
          why: 'Je n\'aime pas le poisson. The collapse to de belongs to the amount words, and aimer never used one. Its little word is untouched by the negative.',
        },
      },
    ],
  },

  /* ── Act 5: at the table ───────────────────────────────────────────────── */

  {
    // THE LESSON. Two columns, one screen, the same noun on both sides.
    // Splitting these across two sections is how this decays into a word list,
    // and a1-23-nourriture.test.ts asserts that both verbs live in this one
    // section.
    type: 'tapTable',
    id: 's18-pair',
    title: 'The Same Food, Twice',
    frSub: 'J\'aime le café · Je bois du café',
    layer: 'core',
    terms: ['wholeThing', 'aPartOfIt'],
    sheetId: 'sheet.a1.23.columns',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a1-23-pair' },
    say: 'Left is what you like. Right is what you are having. Same food on every row.',
    cols: ['what you like', 'what you are having'],
    // TapRow is { cells, say?, detail? } and carries NO itemId. The ids these
    // rows display are declared through ITEM_IDS and released by acts 3 and 4.
    rows: [
      {
        cells: [frOf(THE_PAIR.like.id), frOf(THE_PAIR.eat.id)],
        say: `${frOf(THE_PAIR.like.id)} ${frOf(THE_PAIR.eat.id)}`,
        detail: {
          title: 'The same coffee, twice',
          body: 'Nothing about the coffee changed between these two sentences. The verb in front changed, and that is the entire decision.',
          say: `${frOf(THE_PAIR.like.id)} ${frOf(THE_PAIR.eat.id)}`,
        },
      },
      {
        cells: ["J'aime le pain.", frOf(EAT_COLUMN[1].id)],
        say: `J'aime le pain. ${frOf(EAT_COLUMN[1].id)}`,
        detail: {
          title: 'And the same bread',
          body: 'Bread as a category on the left, an amount of bread on the right. Both are ordinary sentences and neither is more formal than the other.',
          say: `J'aime le pain. ${frOf(EAT_COLUMN[1].id)}`,
        },
      },
      {
        cells: [frOf(NEGATION_PAIR.like.id), frOf(NEGATION_PAIR.eat.id)],
        say: `${frOf(NEGATION_PAIR.like.id)} ${frOf(NEGATION_PAIR.eat.id)}`,
        detail: {
          title: 'And in the negative, only one moves',
          body: 'The left keeps its le untouched. On the right du has collapsed to de. That asymmetry is the last thing this lesson tests.',
          say: `${frOf(NEGATION_PAIR.like.id)} ${frOf(NEGATION_PAIR.eat.id)}`,
        },
      },
    ],
  },

  {
    type: 'listening',
    id: 's19-ear',
    title: 'Which Column Was That?',
    frSub: 'À l\'oreille',
    layer: 'core',
    terms: ['theApostropheHides'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a1-23-ear' },
    // The ear has ONE job here and it is the l' words, where the article has
    // vanished and the sound gives nothing away. It is deliberately NOT used for
    // le against la, which is trivially audible and would certify nothing.
    say: 'Six words where the article has disappeared into the sound. Listen to all six, then answer.',
    // `listening` is { lines, questions }. The six lines are the whole elided
    // group read together, which is the only way the point lands: the article
    // sounds IDENTICAL across all six and a learner comparing them one at a time
    // is comparing six separate performances.
    lines: ELIDED.map((f) => ({ fr: f.fr, en: f.en })),
    questions: [
      {
        q: 'Three of those six are the la kind. Which of these is one of them?',
        opts: [food('oignon').fr, food('huile').fr, food('ail').fr, food('œuf').fr],
        correct: 1,
        why: "l'huile is the la kind, along with l'eau and l'orange. The other three are the le kind, and not one of the six tells you which it is.",
      },
      {
        q: 'What did the sound tell you about which kind each word was?',
        opts: ['The vowel was longer', 'Nothing at all', 'The l was softer', 'The stress moved'],
        correct: 1,
        why: 'Nothing at all. The elided article is the same sound either way, which is exactly why these six have to be stored rather than worked out.',
      },
    ],
  },

  {
    type: 'reading',
    id: 's20-reading',
    title: 'A Note On The Fridge',
    frSub: 'Le mot sur le frigo',
    layer: 'core',
    terms: ['wholeThing', 'aPartOfIt', 'noSingular'],
    // REQUIRED for the glossary to exist at all. MissionSection routes a reading
    // section to ReadingMission, and so to PassagePage which draws the
    // underlines, only when this flag is set WITH questions.
    questionsInModal: true,
    say: 'Four lines off a note, and both columns are in it.',
    // ONE BLOCK, NO LINE BREAKS. PassagePage splits on /(?<=[.!?»])\s+/ and an
    // authored newline is consumed as whitespace and silently discarded.
    // Anything not inside « » is in English.
    text:
      'Somebody has left a note on the fridge for the person cooking tonight, and between four short lines it uses both halves of this lesson. '
      + `« ${frOf(THE_PAIR.like.id)} » `
      + 'That is the first line, and it is about coffee in general rather than any particular cup. '
      + 'Underneath, a note about what is actually in the kitchen right now. '
      + `« ${frOf(EAT_COLUMN[6].id)} » `
      + 'Two foods, two small words, and both of them are amounts rather than categories. '
      + 'The third line is the one worth reading twice, because it is a negative and only one of its two halves behaves the way you would expect. '
      + `« ${frOf(NEGATION_PAIR.eat.id)} » `
      + 'And the last line answers a question the cook had asked earlier about what to buy. '
      + `« ${frOf(LIKE_COLUMN[7].id)} »`,
    // Matched by gloss.logic.ts, which folds punctuation and case on BOTH sides
    // and allows up to four words (MAX_GLOSS_WORDS). Longest match wins, so no
    // entry here is a prefix or substring of another.
    glossary: [
      { word: 'aime le café', en: 'likes coffee', note: 'Coffee as a whole category, so the ordinary little word. This is the half the scene got wrong.' },
      { word: 'du pain', en: 'some bread', note: 'An amount of bread rather than bread as an idea, which is the partitive lesson unchanged.' },
      { word: 'pas de pain', en: 'no bread', note: 'The amount word collapses to de after a negative. Aimer never had one, so it has nothing to collapse.' },
      // FOUR WORDS MAXIMUM. `le thé ou le café` is five and gloss.logic.ts can
      // never match it, so the entry would underline nothing at all.
      { word: 'préfères le thé', en: 'prefer tea', note: 'Both categories, both with the ordinary word, inside a question.' },
    ],
    questions: [
      { q: 'The first line says le and the second says du. What decided between them?', a: 'The verb in front. Liking something points at the whole category and takes le, la or les. Eating or drinking something points at an amount and takes du, de la or des. Nothing about the coffee or the bread came into it.' },
      { q: 'The third line is a negative. Why is it worth reading twice?', a: 'Because the amount word collapses to de after a negative, so du pain becomes de pain. That is the partitive rule and it is correct. What it does not do is reach the other column: a negative sentence about liking something keeps its le untouched.' },
      { q: 'The last line is a question rather than a statement. Does that change anything?', a: 'No. It is still about tea and coffee as categories, so it still takes the ordinary little word. The choice is made by the verb, not by whether the sentence is a question, a statement or a negative.' },
    ],
  },

  {
    type: 'commonErrors',
    id: 's21-traps',
    title: 'The Four Ways This Goes Wrong',
    frSub: 'Les erreurs',
    layer: 'core',
    // commonErrors wants swipe: true and size: 'lg', one error per screen.
    // Without swipe it hits a `break` that falls out of the switch and returns
    // undefined, which is how a1.01 shipped a fully blank mission.
    swipe: true,
    size: 'lg',
    terms: ['wholeThing', 'aPartOfIt'],
    say: 'Four, and the first one is made by the lesson you did before this one.',
    errors: [
      {
        wrong: 'J\'aime du pain.',
        right: 'J\'aime le pain.',
        why: 'The commonest error in this lesson by a distance, and it comes from applying the partitive rule correctly in a place it does not reach. Liking has no amount in it.',
      },
      {
        wrong: 'Je mange le pain.',
        right: 'Je mange du pain.',
        why: 'This is a real sentence and it means something else: the bread, a specific one you have both already talked about. If you mean some bread, it is du.',
      },
      {
        wrong: 'Je n\'aime pas de café.',
        right: 'Je n\'aime pas le café.',
        why: 'The collapse to de belongs to the amount words. Aimer never had one, so there is nothing there to collapse and the le stays exactly where it was.',
      },
      {
        wrong: 'Je voudrais une pâte.',
        right: 'Je voudrais des pâtes.',
        why: 'Pâtes lives in the plural in French and has no everyday singular, the way a spaghetti is not a thing in English. Frites and céréales behave the same way.',
      },
    ],
  },

  /* ── Act 6: prove it ───────────────────────────────────────────────────── */

  {
    type: 'flashcards',
    id: 's22-flash',
    title: 'Flip and Recall',
    frSub: 'Retournez la carte',
    render: 'deck',
    layer: 'core',
    say: 'English on the front. Every front asks for the article too, because a food word without one is half a card.',
    cards: [
      ...FOODS.map((f) => ({ front: `${f.en}, with its article`, back: f.fr, say: f.fr })),
      { front: 'You like coffee, in general.', back: frOf(THE_PAIR.like.id), say: frOf(THE_PAIR.like.id) },
      { front: 'You are drinking coffee.', back: frOf(THE_PAIR.eat.id), say: frOf(THE_PAIR.eat.id) },
      { front: 'You do not like coffee.', back: frOf(NEGATION_PAIR.like.id), say: frOf(NEGATION_PAIR.like.id) },
      { front: 'You do not eat bread.', back: frOf(NEGATION_PAIR.eat.id), say: frOf(NEGATION_PAIR.eat.id) },
    ],
  },

  {
    type: 'dictation',
    id: 's23-dictation',
    title: 'Spell What You Hear',
    frSub: 'La dictée',
    layer: 'core',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], maxPlays: 4 },
    // Every target is short enough to stay in LETTERS mode, which is the only
    // mode where the learner writes the little word rather than tapping it as a
    // pre-spelled tile. The whole point of these five is that the learner has to
    // produce the choice between le and du.
    say: 'Five lines. On every one of them the word you have to work out is two letters long.',
    itemIds: DICTATION_IDS,
  },

  {
    type: 'practice',
    id: 's24-speak',
    title: 'Say It Out Loud',
    frSub: 'À voix haute',
    layer: 'core',
    audio: { mode: 'mic', lang: 'fr-FR' },
    // `practice.skill` is authored and read by no component: PracticeVFView
    // takes itemIds and nothing else. NOT ONE BARE ARTICLE is in here. A clip of
    // `du` alone teaches a stress the word never carries in speech, which is
    // precisely the mispronunciation this lesson exists to prevent.
    say: 'Ten lines, and not one of them is a small word on its own. These words only exist attached to something.',
    skill: 'speak',
    itemIds: SPEAK_IDS,
  },

  {
    type: 'scenario',
    id: 's25-scenario',
    title: 'The Same Kitchen, A Month Later',
    frSub: 'La même cuisine',
    layer: 'core',
    terms: ['wholeThing', 'aPartOfIt'],
    say: 'The same host, the same question, and this time the evening stays in French.',
    setting: 'The same flat, a month on. He asks the same question he asked the first time.',
    // Every turn carries `userEn` and at least two `alts`, which
    // scenario.logic.ts requires of the whole seed. Apostrophes are STRAIGHT
    // throughout: the suite fails a conversation mixing straight and curly
    // apostrophes in one bubble stack.
    turns: [
      {
        ai: 'Alors, qu\'est-ce que vous aimez ?',
        en: 'So, what do you like?',
        user: 'J\'aime le poulet.',
        userEn: 'I like chicken.',
        alts: [
          { fr: 'Le poulet.', en: 'Chicken.' },
          { fr: 'J\'aime beaucoup le poulet.', en: 'I like chicken a lot.' },
        ],
      },
      {
        ai: 'Parfait. Et vous mangez du poisson ?',
        en: 'Perfect. And do you eat fish?',
        user: 'Non, je ne mange pas de poisson.',
        userEn: 'No, I do not eat fish.',
        alts: [
          { fr: 'Non, pas de poisson.', en: 'No, no fish.' },
          { fr: 'Je ne mange pas de poisson, non.', en: 'I do not eat fish, no.' },
        ],
      },
      {
        ai: 'D\'accord. Vous voulez boire quelque chose ?',
        en: 'All right. Do you want something to drink?',
        user: 'Je voudrais de l\'eau.',
        userEn: 'I would like some water.',
        alts: [
          { fr: 'De l\'eau, merci.', en: 'Some water, thank you.' },
          { fr: 'Un peu d\'eau, merci.', en: 'A little water, thank you.' },
        ],
      },
      {
        ai: 'Et comme dessert, vous preferez le gateau ou la glace ?',
        en: 'And for dessert, do you prefer cake or ice cream?',
        user: 'Je prefere la glace.',
        userEn: 'I prefer ice cream.',
        alts: [
          { fr: 'La glace.', en: 'Ice cream.' },
          { fr: 'Je prefere la glace, merci.', en: 'I prefer ice cream, thank you.' },
        ],
      },
      {
        ai: 'Tres bien. Il y a du fromage aussi, si vous voulez.',
        en: 'Very good. There is cheese as well, if you want.',
        user: 'Oui, j\'aime le fromage.',
        userEn: 'Yes, I like cheese.',
        alts: [
          { fr: 'Oui, je veux bien du fromage.', en: 'Yes, I would like some cheese.' },
          { fr: 'J\'adore le fromage.', en: 'I love cheese.' },
        ],
      },
    ],
  },

  {
    type: 'reviewDeck',
    id: 's26-review',
    title: 'The Whole Thing, One Deck',
    frSub: 'Révision',
    render: 'deck',
    layer: 'core',
    terms: ['wholeThing', 'aPartOfIt', 'theApostropheHides'],
    say: 'Rate each card as again, hard or easy. The ones you mark again come back.',
    cards: [
      { front: 'You like coffee, as a thing in the world.', back: `${frOf(THE_PAIR.like.id)} The whole category, so le.`, say: frOf(THE_PAIR.like.id) },
      { front: 'You are drinking coffee right now.', back: `${frOf(THE_PAIR.eat.id)} An amount of it, so du.`, say: frOf(THE_PAIR.eat.id) },
      { front: 'You do not like coffee.', back: `${frOf(NEGATION_PAIR.like.id)} The le is untouched by the negative.`, say: frOf(NEGATION_PAIR.like.id) },
      { front: 'You do not eat bread.', back: `${frOf(NEGATION_PAIR.eat.id)} Du collapses to de. This column does that and the other does not.`, say: frOf(NEGATION_PAIR.eat.id) },
      { front: 'Water, with its article.', back: `${food('eau').fr} ${sub(food('eau').fr)} The la kind, and the card will never show you that.`, say: food('eau').fr },
      { front: 'Onion, with its article.', back: `${food('oignon').fr} ${sub(food('oignon').fr)} The le kind, hidden the same way.`, say: food('oignon').fr },
      { front: 'Milk and cream, from the same shelf.', back: `${food('lait').fr} · ${food('crème').fr} One of each kind, and nothing predicts which.`, say: `${food('lait').fr}, ${food('crème').fr}` },
      { front: 'Pasta.', back: `${food('pâtes').fr} ${sub(food('pâtes').fr)} Plural in French, with no singular anybody uses.`, say: food('pâtes').fr },
      { front: 'Which verbs point at the whole category?', back: 'aimer, adorer, détester, préférer. All four take le, la or les.', say: frOf(LIKE_COLUMN[4].id) },
      { front: 'Which verbs point at an amount?', back: 'manger, boire, prendre. All three take du, de la or des.', say: frOf(EAT_COLUMN[1].id) },
      { front: 'What is the one line to carry out of this lesson?', back: REFRAME, say: `${frOf(THE_PAIR.like.id)} ${frOf(THE_PAIR.eat.id)}` },
    ],
  },

  {
    type: 'progressCheck',
    id: 's27-progress',
    title: 'Where You Stand',
    frSub: 'Votre progression',
    // The prose carries no counts. Every figure is in `stats`, derived from the
    // journey itself. Saying a number twice on one card is two chances to be
    // wrong and one card that reads as padded.
    say: 'One screen before the exam, so you know what you are walking into.',
    body: 'You have watched an evening move quietly into English over one small word, and nothing that was said in it was hard. Since then you have stored a set of everyday foods the way they are actually used, met the six whose article vanishes into an apostrophe, and learned to choose between two columns you already owned separately. What is left tells you whether the choice is automatic yet. Each round is tied to one of the mistakes this lesson exists to stop, and missing too many in a round gets you that round\'s drill before the next one starts. The drill is the teaching, not the penalty.',
    // Filled immediately after SECTIONS is built, from the journey itself.
    stats: [],
  },

  {
    type: 'quiz',
    id: 's28-quiz',
    title: 'The Exam',
    frSub: 'L\'examen',
    layer: 'core',
    passMark: 70,
    roundFailThreshold: 60,
    say: 'Six rounds. Miss too many in a round and you get that round\'s drill before the next one starts.',
    // EVERY QUESTION ABOUT THE CHOICE PUTS A VERB IN THE STEM. "Which article
    // goes with pain?" has four defensible answers and tests nothing. The verb
    // is the whole decision, so a stem without one is not a question.
    //
    // TWO ROUNDS USE FOODS THE LESSON NEVER DRILLED, which is the only way to
    // test the rule rather than the phrase: a learner can pass every question
    // about le café by having stored « j'aime le café » as one lump.
    //
    // QuizDeckView shuffles the options of every closed question per attempt, so
    // no option refers to a position and no two options in one question are
    // equal. The authored `correct` indices are still spread on purpose, because
    // quiz-spread caps any slot at 40% of the closed questions and the whole
    // answer space here is four short words.
    //
    // 26 questions: mcq 12 (46%, under the half ceiling), typeIn 6,
    // errorSpot 4, listenChoose 2, speak 2.
    // 14 closed questions, slots 0/1/2/3 at 4/4/3/3 = 29/29/21/21%.
    rounds: [
      {
        id: 'r1-the-article',
        label: 'The article',
        // The FIRST target is the one whose drill fires: drillForRound walks a
        // round's targets and stops at the first that resolves. Every drill this
        // lesson authors is the first resolving target of exactly one round.
        targets: ['err-no-article', 'err-elided-gender'],
        say: 'The fact everything else needs.',
        questions: [
          {
            q: 'Which of these is the way to store a food word?',
            format: 'mcq',
            opts: ['pain', 'pain (m)', 'du pain', 'le pain'],
            correct: 3,
            why: `le pain. The article is part of the word and it is the half you cannot recover later. ${REFRAME}`,
            ref: 's03-article',
          },
          {
            q: 'Write the word for cheese, with its article.',
            format: 'typeIn',
            accept: ['le fromage'],
            answer: 'le fromage',
            why: 'le fromage. Written whole rather than as a bare article, because a two-letter answer typed on its own is a coin toss rather than a test.',
            ref: 's05-bread',
          },
          {
            q: 'le lait and la crème sit on the same shelf. What decides which article each takes?',
            format: 'mcq',
            opts: [
              'Whether it is a liquid',
              'Nothing you can see or hear',
              'How many letters it has',
              'Whether English has the word',
            ],
            correct: 1,
            why: 'Nothing you can see or hear. There is no rule underneath this and no pattern to find. The two words are stored with their articles or they are guessed at.',
            ref: 's11-check',
          },
          {
            q: 'Write the word for grapes, with its article.',
            format: 'typeIn',
            accept: ['le raisin'],
            answer: 'le raisin',
            why: 'le raisin. Grapes are singular in French for the fruit as a whole, and it is the le kind while la banane and la cerise beside it on the same shelf are not.',
            ref: 's07-fruit',
          },
        ],
      },
      {
        id: 'r2-hidden',
        label: 'The ones that hide it',
        targets: ['err-elided-gender'],
        say: 'Six words, and the card tells you nothing.',
        questions: [
          {
            q: 'l\'eau. Which kind is it?',
            format: 'mcq',
            opts: ['the le kind', 'it has no kind', 'the la kind', 'both, depending'],
            correct: 2,
            why: 'The la kind. You cannot see it and you cannot hear it, which is exactly why these six are worth learning as a short list rather than one at a time.',
            ref: 's04-elided',
          },
          {
            q: 'l\'oignon. Which kind is it?',
            format: 'mcq',
            opts: ['the le kind', 'the la kind', 'it changes', 'neither'],
            correct: 0,
            why: 'The le kind, and it looks identical to l\'eau on the card. Three of the six are the le kind and three are the la kind.',
            ref: 's04-elided',
          },
          {
            q: 'Listen. Which kind is this one?',
            format: 'listenChoose',
            audio: { mode: 'tts', lang: 'fr-FR', clip: "l'huile" },
            opts: ['the le kind', 'the la kind'],
            correct: 1,
            why: 'l\'huile is the la kind. The sound gives you nothing at all here, which is the point of the whole group.',
            ref: 's19-ear',
          },
          {
            q: 'Why do these six words need learning differently from the other fifty-four?',
            format: 'mcq',
            opts: [
              'They are harder to pronounce',
              'They are less common',
              'Their article is not visible on the card',
              'They have two articles each',
            ],
            correct: 2,
            why: 'The article has shrunk to an apostrophe, so the one fact you need is not on the card and is not in the sound either. Every other food word shows you its article every time you look at it.',
            ref: 's04-elided',
          },
        ],
      },
      {
        id: 'r3-what-you-like',
        label: 'What you like',
        targets: ['err-like-partitive'],
        say: 'The half the lesson before this one set you up to get wrong.',
        questions: [
          {
            q: 'You are telling somebody that you like bread, in general.',
            format: 'mcq',
            opts: ['J\'aime du pain.', 'J\'aime de pain.', 'J\'aime le pain.', 'J\'aime pain.'],
            correct: 2,
            why: 'J\'aime le pain. Bread as a whole category, so the ordinary little word. The first option is the sentence the opening scene turned on.',
            ref: 's12-like',
          },
          {
            q: 'Correct this sentence: J\'adore du chocolat.',
            format: 'errorSpot',
            accept: ['J\'adore le chocolat.', 'j\'adore le chocolat'],
            answer: 'J\'adore le chocolat.',
            why: 'Adorer behaves exactly like aimer: it points at the whole category, so le. Du answers how much, and loving something has no how much in it.',
            ref: 's12-like',
          },
          {
            q: 'Which of these four verbs does NOT take le, la or les with a food?',
            format: 'mcq',
            opts: ['aimer', 'adorer', 'détester', 'boire'],
            correct: 3,
            why: 'boire. It points at an amount you are drinking, so it takes du, de la or des. The other three all point at the whole category.',
            ref: 's13-like-table',
          },
          {
            q: 'Write: I like fish.',
            format: 'typeIn',
            accept: ['J\'aime le poisson.', 'j\'aime le poisson', 'Jaime le poisson'],
            answer: 'J\'aime le poisson.',
            why: 'J\'aime le poisson. Fish as a category. Note that the spelling check ignores the apostrophe, so what is being tested here is the le.',
            ref: 's14-like-drill',
          },
          {
            q: 'The last lesson taught you that uncounted food takes du. Why does that not apply after aimer?',
            format: 'mcq',
            opts: [
              'Because liking has no amount in it',
              'Because the rule was wrong',
              'Because aimer is an irregular verb',
              'Because du is only for drinks',
            ],
            correct: 0,
            why: 'Because there is no amount involved. Du answers the question how much, and liking something is not a quantity of it. The partitive rule is correct and this is simply not a place it reaches.',
            ref: 's14-like-drill',
          },
        ],
      },
      {
        id: 'r4-what-you-eat',
        label: 'What you are having',
        targets: ['err-eat-definite'],
        say: 'The column you already owned, now that it is a choice.',
        questions: [
          {
            q: 'You are at a table and you are eating some bread.',
            format: 'mcq',
            opts: ['Je mange le pain.', 'Je mange du pain.', 'Je mange pain.', 'Je mange de pain.'],
            correct: 1,
            why: 'Je mange du pain. An amount of bread. The first option is a real sentence meaning the bread, a specific one you have both already mentioned.',
            ref: 's15-eat',
          },
          {
            q: 'Write: I am drinking some water.',
            format: 'typeIn',
            accept: ['Je bois de l\'eau.', 'je bois de leau', 'Je bois de leau'],
            answer: 'Je bois de l\'eau.',
            why: 'Je bois de l\'eau. Eau is the la kind and starts with a vowel, so de la shortens to de l\'. That shortening is the partitive lesson\'s and has not changed.',
            ref: 's16-eat-table',
          },
          {
            q: 'Correct this sentence: Je mange le fromage tous les jours.',
            format: 'errorSpot',
            accept: ['Je mange du fromage tous les jours.', 'je mange du fromage tous les jours'],
            answer: 'Je mange du fromage tous les jours.',
            why: 'Du, because you are eating an amount of cheese rather than one specific cheese you have both been discussing. With le it is grammatical and means something else.',
            ref: 's15-eat',
          },
          {
            q: 'Which sentence means you are having some chicken right now?',
            format: 'mcq',
            opts: ['J\'aime le poulet.', 'Je mange le poulet.', 'J\'aime du poulet.', 'Je mange du poulet.'],
            correct: 3,
            why: 'Je mange du poulet. The first is about liking chicken in general, the second is about one specific chicken you have both already mentioned, and the third is not a sentence.',
            ref: 's18-pair',
          },
          {
            q: 'Say it out loud: you are drinking some coffee.',
            format: 'speak',
            target: 'Je bois du café.',
            accept: ['Je bois du café.', 'je bois du cafe'],
            answer: 'Je bois du café.',
            why: 'Je bois du café. Du is unstressed and runs straight into the noun. It is never a word you stop on.',
            ref: 's24-speak',
          },
        ],
      },
      {
        id: 'r5-the-choice',
        label: 'Choosing between them',
        targets: ['err-negation-collapse'],
        say: 'Both columns in one round, including the negative.',
        questions: [
          {
            q: 'Same food, two sentences. Which pair is right?',
            format: 'mcq',
            opts: [
              'J\'aime du café. / Je bois le café.',
              'J\'aime le café. / Je bois du café.',
              'J\'aime le café. / Je bois le café.',
              'J\'aime du café. / Je bois du café.',
            ],
            correct: 1,
            why: 'Liking points at the whole category and drinking points at an amount, so le on the left and du on the right. Nothing about the coffee changed between the two.',
            ref: 's18-pair',
          },
          {
            q: 'You do not like cheese. Write it.',
            format: 'typeIn',
            accept: ['Je n\'aime pas le fromage.', 'je naime pas le fromage', 'Je naime pas le fromage'],
            answer: 'Je n\'aime pas le fromage.',
            why: 'The le survives the negative untouched. There is no amount word in the sentence, so there is nothing to collapse to de.',
            ref: 's17-negation',
          },
          {
            q: 'Correct this sentence: Je ne mange pas du poisson.',
            format: 'errorSpot',
            accept: ['Je ne mange pas de poisson.', 'je ne mange pas de poisson'],
            answer: 'Je ne mange pas de poisson.',
            why: 'Du collapses to de after a negative, which the partitive lesson taught. This is the column where that happens.',
            ref: 's17-negation',
          },
          {
            q: 'Write: I do not eat cheese.',
            format: 'typeIn',
            accept: ['Je ne mange pas de fromage.', 'je ne mange pas de fromage'],
            answer: 'Je ne mange pas de fromage.',
            why: 'Je ne mange pas de fromage. Du collapses to de after the negative. Compare the sentence two questions ago, where the liking column kept its le untouched.',
            ref: 's17-negation',
          },
          {
            q: 'Listen, and say which column this sentence is in.',
            format: 'listenChoose',
            audio: { mode: 'tts', lang: 'fr-FR', clip: "Je n'aime pas le café." },
            opts: ['what somebody likes', 'what somebody is eating'],
            correct: 0,
            why: 'It is a liking sentence, and you can tell from the le surviving the negative. An eating sentence would have collapsed to de.',
            ref: 's19-ear',
          },
        ],
      },
      {
        id: 'r6-the-set',
        label: 'The sixty',
        targets: ['err-plural-only', 'err-no-article'],
        say: 'The word list, and the three that behave differently.',
        questions: [
          {
            q: 'Which of these would a French speaker never say?',
            format: 'mcq',
            opts: ['une pâte', 'des pâtes', 'les frites', 'les céréales'],
            correct: 0,
            why: 'Une pâte. Pâtes lives in the plural with no everyday singular, the way a spaghetti is not a thing in English. Frites and céréales are the same.',
            ref: 's11-check',
          },
          {
            q: 'Correct this: Je voudrais une frite.',
            format: 'errorSpot',
            accept: ['Je voudrais des frites.', 'je voudrais des frites'],
            answer: 'Je voudrais des frites.',
            why: 'Frites is plural, and you are asking for an amount of them, so des. One chip is not what anybody is ordering.',
            ref: 's11-check',
          },
          {
            q: 'Write the word for water, with its article.',
            format: 'typeIn',
            accept: ['l\'eau', 'leau'],
            answer: 'l\'eau',
            why: 'l\'eau. The article shrank to l\', which is why this word has to be learned along with the fact that it is the la kind.',
            ref: 's04-elided',
          },
          {
            q: 'Say it out loud: you like bread.',
            format: 'speak',
            target: "J'aime le pain.",
            accept: ["J'aime le pain.", 'jaime le pain'],
            answer: "J'aime le pain.",
            why: 'The pattern is J\'aime le, and the little word runs straight into the noun without a stop. Say the whole thing as one run rather than three words.',
            ref: 's24-speak',
          },
        ],
      },
    ],
  },

  {
    type: 'roundup',
    id: 's29-roundup',
    title: 'What You Can Do Now',
    frSub: 'Ce que vous savez faire',
    say: 'Four things, and then what carries into the next unit.',
    body: 'You can name sixty everyday foods with the article each one is stored with, say what you like and what you are having and keep the two apart, handle the six words whose article has vanished into an apostrophe, and get the negative right in both columns when only one of them changes. The thing worth keeping underneath all of it is that the choice is made by the verb rather than by the food. Nothing about bread decides whether it is le pain or du pain, and once that is automatic you stop translating the sentence and start saying it.',
    points: [
      `${REFRAME} The verb decides, and the food never does.`,
      'aimer, adorer, détester and préférer take le, la or les. manger, boire and prendre take du, de la or des.',
      'In a negative the amount word collapses to de, and the other column does not move at all.',
      'Six food words hide their article in an apostrophe, and pâtes, frites and céréales have no singular.',
    ],
  },
];

/* ─── The progress card counts the journey rather than restating it ────────
 *
 * Derived here rather than typed. Every figure is a fact about the array above,
 * and a display string is validated against nothing, so the first mission added
 * would have left the card confidently wrong with the whole suite still green.
 * It throws rather than degrades.                                             */
{
  const ix = SECTIONS.findIndex((s) => (s as { id?: string }).id === 's27-progress');
  const card = SECTIONS[ix];
  const quiz = SECTIONS.find((s) => s.type === 'quiz');
  if (!card || card.type !== 'progressCheck' || !quiz || quiz.type !== 'quiz') {
    throw new Error('a1.23.l1: the progress card or the quiz is missing, so the card cannot count what is not there');
  }
  card.stats = [
    { k: 'Foods learned', v: String(FOODS.length) },
    { k: 'Hidden articles', v: String(ELIDED.length) },
    { k: 'Missions done', v: `${ix} of ${SECTIONS.length}` },
    { k: 'Exam rounds ahead', v: String(quiz.rounds?.length ?? 0) },
  ];
}

/* ─── Acts ─────────────────────────────────────────────────────────────────
 *
 * Six, and the weighting is the argument of the lesson. SIX sections name the
 * sixty words (s05 to s10). TWELVE make the learner choose between the two
 * columns (s12 to s21, plus the drills behind the quiz). That ratio is the
 * whole point: the word list is the half the learner needs least help with.
 *
 * `estScreens` is what the mission actually costs rather than a round number,
 * because it is divided by the rest points to check no stretch runs past the
 * checkpoint-spacing limit of 22.                                            */

const ACTS: LessonAct[] = [
  {
    id: 'act1',
    title: 'The article is part of the word',
    sections: ['s01-scene', 's02-goals', 's03-article', 's04-elided'],
    milestone: 'You have watched an evening switch language over one small word.',
    estScreens: 26,
    restPoints: ['s01-scene/after-break'],
  },
  {
    id: 'act2',
    title: 'The shelves',
    sections: ['s05-bread', 's06-meat', 's07-fruit', 's08-veg', 's09-drink', 's10-cupboard', 's11-check'],
    milestone: 'Sixty foods, each stored the way it is used, in seven groups you can see the end of.',
    estScreens: 22,
    restPoints: ['s07-fruit/halfway', 's10-cupboard/halfway'],
  },
  {
    id: 'act3',
    title: 'What you like',
    sections: ['s12-like', 's13-like-table', 's14-like-drill'],
    milestone: 'The whole category, and the rule from the last lesson that does not reach it.',
    estScreens: 20,
    restPoints: ['s12-like/halfway'],
  },
  {
    id: 'act4',
    title: 'What you are having',
    sections: ['s15-eat', 's16-eat-table', 's17-negation'],
    milestone: 'The column you already owned, and the negative that only moves one of them.',
    estScreens: 20,
    restPoints: ['s15-eat/halfway'],
  },
  {
    id: 'act5',
    title: 'At the table',
    sections: ['s18-pair', 's19-ear', 's20-reading', 's21-traps'],
    milestone: 'Both columns on one screen, with the same food on every row.',
    estScreens: 22,
    restPoints: ['s20-reading/halfway'],
  },
  {
    id: 'act6',
    title: 'Prove it',
    sections: [
      's22-flash', 's23-dictation', 's24-speak', 's25-scenario',
      's26-review', 's27-progress', 's28-quiz', 's29-roundup',
    ],
    milestone: 'Lesson complete. Everything here carries straight into any conversation that happens near food.',
    estScreens: 98,
    restPoints: [
      's22-flash/halfway', 's24-speak/halfway', 's26-review/halfway',
      's28-quiz/after-r2', 's28-quiz/after-r4',
    ],
  },
];

/* ─── Deck tranches ────────────────────────────────────────────────────────
 *
 * One slice per act, index-aligned. An item is released the act it is TAUGHT,
 * not the act it is first mentioned: releasing all sixty at mission one turns
 * the flashcard hub into a wall on the morning the learner is least able to read
 * it. Act 6 releases nothing new; it applies and tests what acts 1 to 5 handed
 * over.
 *
 * `once()` is not decoration. The groups above are built for TEACHING and they
 * legitimately overlap. The SRS keys on (itemId, modality), so releasing one
 * card from two tranches would take two ratings for one card. The first tranche
 * to name an id keeps it, which is also the pedagogically right answer.
 *
 * TWO IDS ARE SHOWN AND DELIBERATELY NEVER RELEASED: fr.a1.cuisine.268 and
 * fr.a1.cuisine.264 belong to a1.29's partitive block. This lesson displays
 * them as EVIDENCE on the contrast screens and does not put them into spaced
 * repetition, because a1.29 already did. See BORROWED_NOT_RELEASED.           */

const released = new Set<string>();
const once = (ids: string[]): string[] => {
  const out: string[] = [];
  for (const id of ids) {
    if (released.has(id)) continue;
    if (BORROWED_NOT_RELEASED.includes(id)) continue;
    released.add(id);
    out.push(id);
  }
  return out;
};

const DECK_TRANCHE: string[][] = [
  // Act 1: the six l' words, which s04-elided puts on a screen one at a time.
  // NOT the other fifty-four: they are taught in act 2, and a card released
  // before its mission is a card the learner is asked to rate before meeting it.
  once([...ELIDED_IDS]),
  // Act 2: the remaining fifty-four food headwords, each shown on its shelf.
  once([...FOOD_IDS]),
  // Act 3: the like column, all of which s13-like-table now shows, EXCEPT the
  // negative. « Je n'aime pas le café. » is not on a screen until s17-negation
  // in act 4, and a card released before its mission is a card the learner is
  // asked to rate before they have met it.
  once(LIKE_IDS.filter((id) => !NEGATION_IDS.includes(id))),
  // Act 4: the eat column and the negative pair. cuisine.268 and cuisine.264
  // are filtered out by once(): shown, not released.
  once([...EAT_IDS, ...NEGATION_IDS]),
  // Act 5: nothing new. Act 5 puts what acts 3 and 4 taught onto one screen.
  [],
  // Act 6: nothing new. Act 6 tests what acts 1 to 5 handed over, which is why
  // this slice is empty rather than padded.
  [],
];

/** Everything the lesson teaches is released exactly once, and nothing is
 *  released that the lesson does not teach. Checked HERE rather than only in
 *  the test, because a tranche that silently drops a card is a card that never
 *  reaches spaced repetition and nothing on a device would say so. */
{
  const taught = new Set(ITEM_IDS);
  const never = [...taught].filter((id) => !released.has(id) && !BORROWED_NOT_RELEASED.includes(id));
  if (never.length) {
    throw new Error(`a1.23.l1: item(s) taught but released by no tranche: ${never.join(', ')}`);
  }
  const stray = [...released].filter((id) => !taught.has(id));
  if (stray.length) {
    throw new Error(`a1.23.l1: tranche(s) release item(s) the lesson does not teach: ${stray.join(', ')}`);
  }
  for (const id of BORROWED_NOT_RELEASED) {
    if (released.has(id)) throw new Error(`a1.23.l1: ${id} belongs to ${unitRef('a1.29')} and must be shown but not released`);
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
 * `err-like-partitive` and `err-eat-definite` look like one error and are two.
 * The first is over-applying a1.29's rule into a column it does not reach. The
 * second is retreating from a1.29's rule in the column where it belongs. A
 * learner who has fixed the first still makes the second, and merging them would
 * remediate only one.                                                          */

const ERROR_TRIGGERS: ErrorTrigger[] = [
  {
    id: 'err-no-article',
    description: 'Stored the food without its article, so the fact every later choice needs is simply not available. The error that happens weeks before any of the others, and the one familiar objects invite most.',
    detectOn: ['s03-article', 's11-check', 's28-quiz/r1-the-article'],
    drill: 'drill-article',
    retest: 'retest-article',
  },
  {
    id: 'err-elided-gender',
    description: 'Cannot recover the gender of l\'eau, l\'huile, l\'oignon, l\'ail, l\'œuf or l\'orange, because the article vanished into an apostrophe and the sound carries nothing either.',
    detectOn: ['s04-elided', 's19-ear', 's28-quiz/r2-hidden'],
    drill: 'drill-elided',
    retest: 'retest-elided',
  },
  {
    id: 'err-like-partitive',
    description: `Says « j\'aime du pain », applying ${unitRef('a1.29')}\'s partitive rule to a verb it does not reach. THE CENTRAL ERROR OF THIS LESSON, and it is created by the lesson immediately upstream rather than by carelessness.`,
    detectOn: ['s12-like', 's14-like-drill', 's18-pair', 's28-quiz/r3-what-you-like'],
    drill: 'drill-like',
    retest: 'retest-like',
  },
  {
    id: 'err-eat-definite',
    description: 'Over-corrects after learning the rule above and says « je mange le pain » when meaning some bread. Grammatical, and a different sentence: it names a specific loaf both speakers already know about.',
    detectOn: ['s15-eat', 's16-eat-table', 's18-pair', 's28-quiz/r4-what-you-eat'],
    drill: 'drill-eat',
    retest: 'retest-eat',
  },
  {
    id: 'err-negation-collapse',
    description: 'Collapses the wrong column in a negative: « je n\'aime pas de café » (there was no amount word to collapse) or « je ne mange pas du pain » (there was one and it did not collapse).',
    detectOn: ['s17-negation', 's20-reading', 's28-quiz/r5-the-choice'],
    drill: 'drill-negation',
    retest: 'retest-negation',
  },
  {
    id: 'err-plural-only',
    description: 'Invents a singular for pâtes, frites or céréales, or treats the les on them as a definite article and reaches for a singular partitive.',
    detectOn: ['s11-check', 's21-traps', 's28-quiz/r6-the-set'],
    drill: 'drill-plural',
    retest: 'retest-plural',
  },
];

const DRILLS: LessonDrill[] = [
  {
    id: 'drill-article',
    title: 'Which little word came with it?',
    format: 'sort',
    buckets: ['the le kind', 'the la kind'],
    items: [
      food('pain').id, food('crème').id, food('lait').id, food('tomate').id,
      food('fromage').id, food('pomme').id,
    ],
    coach: 'None of these can be worked out. Two things from the same fridge take different articles, and two red things from the same shelf do too. The article is a fact about the word rather than about the food.',
  },
  {
    id: 'retest-article',
    title: 'One more time',
    format: 'mcq',
    q: 'You meet a new food word. What goes into your head with it?',
    opts: ['What it tastes like', 'Its article', 'Its plural', 'Its English word'],
    correct: 1,
    why: 'Its article, because every choice this lesson asks you to make needs it and none of them can be made without it.',
  },
  {
    id: 'drill-elided',
    title: 'The article is hiding',
    format: 'sort',
    buckets: ['the le kind', 'the la kind'],
    items: ELIDED_IDS,
    coach: 'Six words, three of each, and the card looks identical for all six. This is a short list and it is worth learning as a list, because you will not be able to reason your way to any of them.',
  },
  {
    id: 'retest-elided',
    title: 'One more time',
    format: 'mcq',
    q: 'l\'huile and l\'ail. Which is the la kind?',
    opts: ['l\'huile', 'l\'ail', 'both', 'neither'],
    correct: 0,
    why: 'l\'huile is the la kind and l\'ail is the le kind. Nothing in the spelling or the sound separates them, which is why the six are learned together.',
  },
  {
    id: 'drill-like',
    title: 'Liking is about all of it',
    format: 'sort',
    buckets: ['takes le, la or les', 'takes du, de la or des'],
    items: [
      THE_PAIR.like.id, LIKE_COLUMN[2].id, LIKE_COLUMN[4].id,
      THE_PAIR.eat.id, EAT_COLUMN[1].id,
    ],
    coach: 'Sort by the verb rather than by the food. Aimer, adorer, détester and préférer point at the whole category. Manger, boire and prendre point at an amount. Nothing about the food itself decides.',
  },
  {
    id: 'retest-like',
    title: 'One more time',
    format: 'mcq',
    q: 'You want to say you love cheese.',
    opts: ['J\'adore du fromage.', 'J\'adore le fromage.', 'J\'adore de fromage.', 'J\'adore fromage.'],
    correct: 1,
    why: 'J\'adore le fromage. Cheese as a whole category. Du answers how much, and loving something has no how much in it.',
  },
  {
    id: 'drill-eat',
    title: 'Eating is about some of it',
    format: 'sort',
    buckets: ['the whole category', 'an amount of it'],
    items: [
      THE_PAIR.like.id, LIKE_COLUMN[4].id,
      EAT_COLUMN[1].id, EAT_COLUMN[3].id, EAT_COLUMN[7].id,
    ],
    coach: 'The same test in the other direction. If you could put a quantity on it, you are in the amount column. If you are naming the thing as an idea, you are not.',
  },
  {
    id: 'retest-eat',
    title: 'One more time',
    format: 'mcq',
    q: 'You are eating some chicken right now.',
    opts: ['Je mange le poulet.', 'Je mange du poulet.', 'J\'aime le poulet.', 'Je mange poulet.'],
    correct: 1,
    why: 'Je mange du poulet. The first is grammatical and means the chicken, a specific one you have both already talked about.',
  },
  {
    id: 'drill-negation',
    title: 'Which one moves?',
    format: 'sort',
    buckets: ['keeps its little word', 'collapses to de'],
    items: [NEGATION_PAIR.like.id, NEGATION_PAIR.eat.id, THE_PAIR.like.id, EAT_COLUMN[1].id],
    coach: 'Only the amount column collapses. The category column never had an amount word in it, so a negative has nothing to act on and the le, la or les stays exactly where it was.',
  },
  {
    id: 'retest-negation',
    title: 'One more time',
    format: 'mcq',
    q: 'You do not like coffee.',
    opts: [
      'Je n\'aime pas de café.',
      'Je n\'aime pas du café.',
      'Je n\'aime pas le café.',
      'Je n\'aime pas café.',
    ],
    correct: 2,
    why: 'Je n\'aime pas le café. There is no amount word in the sentence, so the negative has nothing to collapse and the le is untouched.',
  },
  {
    id: 'drill-plural',
    title: 'No singular anybody uses',
    format: 'sort',
    buckets: ['only plural', 'has a singular'],
    items: [...PLURAL_IDS, food('pain').id, food('pomme').id],
    coach: 'Three of these live in the plural and have no everyday singular, the way a spaghetti is not a thing in English. The rest behave normally.',
  },
  {
    id: 'retest-plural',
    title: 'One more time',
    format: 'mcq',
    q: 'You want some chips.',
    opts: ['Je voudrais une frite.', 'Je voudrais des frites.', 'Je voudrais la frite.', 'Je voudrais du frite.'],
    correct: 1,
    why: 'Je voudrais des frites. Plural, and an amount of them, so des. One chip is not what anybody is asking for.',
  },
];

/* ─── Reference sheet ──────────────────────────────────────────────────────
 *
 * ONE, and it uses `table` and `teach` ONLY. ReferenceSheet.tsx:254 switches on
 * exactly three section types (teach, letterGrid, table) and its default branch
 * draws the section's TITLE AND NOTHING ELSE, deliberately, so a mis-authored
 * sheet is visible rather than silently thin. a1.13 and a1.17 both shipped a
 * `cheatSheet` here and both drew an empty heading.
 *
 * The sheet exists for a layout reason as well as a teaching one: `tapTable` is
 * not in ownsLayout(), so an in-flow table renders inside a scrolling page and a
 * sixty-row food list would run off the fold and take its chrome with it. The
 * full list lives here, where `layer: 'deep'` exempts it from the core density
 * caps and a `table` section is legal in the first place.                     */

const SHEETS: ReferenceSheet[] = [
  {
    id: 'sheet.a1.23.columns',
    title: 'Both columns, and all sixty words',
    layer: 'deep',
    contains: ['Which verb takes which word', 'The six that hide their article', 'Every food with its article'],
    sections: [
      {
        type: 'table',
        id: 'sheet-columns-table',
        title: 'The verb chooses, not the food',
        layer: 'deep',
        // SHORT CELLS ONLY. SheetTable sizes a column at max(110, 320 / cols),
        // so a full sentence in a three-column table lands in a 110-wide cell
        // and can only be read by dragging sideways. The prose below carries
        // the explanation.
        cols: ['the verb', 'what it points at', 'the word'],
        rows: [
          ['aimer', 'the whole category', 'le, la, les'],
          ['adorer', 'the whole category', 'le, la, les'],
          ['détester', 'the whole category', 'le, la, les'],
          ['préférer', 'the whole category', 'le, la, les'],
          ['manger', 'an amount', 'du, de la, des'],
          ['boire', 'an amount', 'du, de la, des'],
          ['prendre', 'an amount', 'du, de la, des'],
        ],
      },
      {
        type: 'teach',
        id: 'sheet-columns-why',
        title: 'What each column is doing, and the negative',
        layer: 'deep',
        body:
          'The choice is made by the verb and never by the food. Aimer, adorer, détester and préférer all point at a '
          + 'thing as a category, so they take the ordinary little word: j\'aime le pain, je déteste le poisson, je '
          + 'préfère les légumes. Manger, boire and prendre point at an amount of something, so they take the words '
          + 'the partitive lesson gave you: je mange du pain, je bois de l\'eau, je prends de la soupe. The same food '
          + 'appears in both columns with a different word in front of it, and nothing about the food has changed. '
          + 'The negative is where this gets tested, because only one of the two columns moves. After a negative, du, '
          + 'de la and des all collapse to a bare de: je ne mange pas de pain. The other column has no amount word in '
          + 'it at all, so there is nothing for the negative to act on and it stays exactly as it was: je n\'aime pas '
          + 'le pain, with the le untouched. Getting that asymmetry the wrong way round is the commonest mistake once '
          + 'the two columns themselves are secure.',
      },
      {
        type: 'teach',
        id: 'sheet-elided',
        title: 'The six that hide which kind they are',
        layer: 'deep',
        body:
          'In front of a vowel the little word shrinks to l\', and once it has shrunk the card cannot tell you which '
          + 'kind the word is and neither can the sound. There are six of them in this lesson and they split three '
          + 'and three. The la kind: l\'eau, l\'huile, l\'orange. The le kind: l\'oignon, l\'ail, l\'œuf. There is no '
          + 'pattern connecting the members of either group and there is nothing to work out, so these six are worth '
          + 'learning as a short list rather than one at a time as they turn up. The moment it matters is the moment '
          + 'something has to follow: de l\'eau against du poisson, or an adjective that has to agree behind them.',
      },
      {
        type: 'table',
        id: 'sheet-all-sixty',
        title: 'All sixty, with their articles',
        layer: 'deep',
        cols: ['the food', 'in English', 'how it sounds'],
        rows: FOODS.map((f) => [f.fr, f.en, f.respell]),
      },
    ],
  },
];

export const NOURRITURE_LESSON: Lesson = {
  id: 'a1.23.l1',
  unitId: 'a1.23',
  // The lesson's index WITHIN its unit, not its place in the track.
  seq: 1,
  title: 'La nourriture',
  level: 'a1',
  // TWENTY-SIX, from unit.seq. missions.ts derives the eyebrow at render time as
  // `${level} · LEÇON ${unit.seq}`, and a1.23 sits at seq 26. The stored value is
  // a fallback and has to agree with what the renderer computes, or the two
  // disagree the moment something reads this field instead. a1.03 shipped
  // exactly that bug (commit 56c79a7).
  tag: 'A1 · LEÇON 26',
  intro:
    'Sixty words you will use every day, each one stored with the little word it arrives with. Then the choice nobody teaches: what you like is all of it, and what you are eating is some of it, and the verb in front decides which one you need.',

  sections: SECTIONS,
  itemIds: ITEM_IDS,
  // The LESSON's own counter, not `seed.version`. seed.version is the OTA
  // snapshot number, derived by publish-content.ts as previous + 1, and a merge
  // must never hand-bump it.
  version: 1,

  grammarAssumed: [
    'Noun gender, and that the article in front of a noun is the choice that gender makes, introduced in a1.03',
    'le, la, l\' and les, and the elision of le and la in front of a vowel, introduced in a1.04',
    'un, une and des, and the difference between first mention and second, introduced in a1.11',
    'du, de la and des for an uncounted amount, and their collapse to de after a negative, introduced in a1.29',
    'ne ... pas around the verb, introduced in a1.18',
    'The full present of avoir, which j\'ai faim and j\'ai soif are built on, introduced in a1.07',
    'est-ce que as the safe question frame, introduced in a1.19',
  ],
  grammarIntroduced: [
    'That aimer, adorer, détester and préférer take the definite article with a food, because they name a category rather than a quantity',
    'That manger, boire and prendre take the partitive with a food, which is a1.29\'s rule applied rather than a new one',
    'That the negative collapse to de reaches the partitive column and not the definite one',
    'Sixty food nouns as a set, each stored with its article',
    'That an elided l\' conceals gender, and which six food nouns it conceals it on',
    'Plural-only food nouns, and that they have no singular in ordinary use',
  ],

  features: ['roleplay', 'voiceflash'],

  overview: {
    titleEn: 'Food Vocabulary',
    subFr: 'La nourriture',
    introFr: 'Soixante mots du quotidien, et un choix que le verbe fait à votre place.',
    minutes: 30,
    difficulty: 2,
    glyph: '🥖',
    screens: 208,
  },

  acts: ACTS,
  reframe: REFRAME,
  errorTriggers: ERROR_TRIGGERS,
  drills: DRILLS,
  sheets: SHEETS,
  deckTranche: DECK_TRANCHE,
  terms: NOURRITURE_TERMS,

  audio: {
    defaultLang: 'fr-FR',
    speeds: [1.0, 0.65],
    coachVoice: 'coach-en-warm',
    interfaceSounds: ['correct', 'incorrect', 'checkpoint'],
    // ── The audio decisions that cannot be recovered later ─────────────────
    //
    // Written here AND pinned by a1-23-nourriture.test.ts, because a constraint
    // on how something is recorded becomes invisible the moment the clip is
    // delivered.
    //
    // Briefs only. Do NOT run pnpm audio:render: it spends real ElevenLabs
    // credits and ELEVENLABS_API_KEY is not set in ealch-admin/.env in any case.
    // CLIP_MANIFEST is empty by design, so every card falls back to device TTS
    // until the studio delivers, and a recordingId resolving to nothing is the
    // correct shipping state.
    recorded: [
      {
        id: 'rec-a1-23-pair',
        desc:
          'THE SINGLE MOST IMPORTANT NOTE IN THIS LESSON. « J\'aime le café. » AND « Je bois du café. » ARE ONE '
          + 'TAKE, one voice, one pace, read straight through with no gap and no reset. Then, in the SAME take, '
          + '« Je n\'aime pas le café. » and « Je ne mange pas de pain. » '
          + 'The claim the whole lesson rests on is that these are one decision made two ways, and two separate '
          + 'recordings are two performances: a reader who records the liking column in its own session will lean '
          + 'on the le, and the learner will hear that lean as a difference in emphasis rather than as a difference '
          + 'in meaning. '
          + 'NEITHER LITTLE WORD IS STRESSED. Both le and du are unstressed and run straight into the noun. A reader '
          + 'who separates them is teaching the learner to stop on the word this lesson needs them to say without '
          + 'thinking.',
        clipIds: [
          'J\'aime le café.', 'Je bois du café.', 'aime-bois-pair',
          'Je n\'aime pas le café.', 'Je ne mange pas de pain.', 'negation-pair',
        ],
      },
      {
        id: 'rec-a1-23-ear',
        desc:
          'THE SIX ELIDED WORDS IN ONE TAKE, ADJACENT, ONE VOICE: l\'eau, l\'huile, l\'orange, l\'oignon, l\'ail, '
          + 'l\'œuf. The teaching point is that the elided article sounds IDENTICAL regardless of which kind the '
          + 'word is, and that only holds if one voice says all six in one pass. Recorded apart, the learner '
          + 'compares six performances and may hear a difference that is not in the language.',
        clipIds: ['l\'eau', 'l\'huile', 'l\'orange', 'l\'oignon', 'l\'ail', 'l\'œuf', 'elided-six'],
      },
      {
        id: 'rec-a1-23-nasals',
        desc:
          'EVERY NASAL CLOSED, NO N SOUND BEHIND IT. le pain is /pɛ̃/ and the app respells it luh PAⁿ deliberately; '
          + 'a reader who lets an n out of it is teaching the error the transcription repairs. The same applies to '
          + 'le croissant, le jambon (TWO nasals), le poisson, le citron, le raisin, le melon, l\'oignon, le '
          + 'champignon (TWO), le vin, la confiture, la viande, l\'orange and un sandwich. '
          + 'AND THE OPPOSITE, WHICH MATTERS AS MUCH: la crème, la banane, la farine and la pomme have REAL m and n '
          + 'sounds and must NOT be nasalised. Their transcriptions carry no superscript on purpose.',
        clipIds: [
          'le pain', 'le croissant', 'le jambon', 'le poisson', 'le citron', 'le raisin',
          'le melon', 'l\'oignon', 'le champignon', 'le vin', 'la confiture', 'la viande',
          'l\'orange', 'un sandwich', 'la crème', 'la banane', 'la farine', 'la pomme',
        ],
      },
      {
        id: 'rec-a1-23-shelves',
        desc:
          'The sixty food cards, read one per clip, at an even pace with no list intonation. A reader who performs '
          + 'these as a shopping list will drop the pitch on every word after the first, and each card is heard on '
          + 'its own rather than in sequence. le bœuf is ONE syllable in the noun, /bœf/, and must not be stretched '
          + 'into two.',
        clipIds: FOODS.map((f) => f.fr),
      },
    ],
  },
};

/* ─── Exports the scripts and the test read ────────────────────────────────
 *
 * So nothing downstream restates a list that lives here.                      */
export const NOURRITURE_ITEM_IDS = ITEM_IDS;
export const NOURRITURE_FOOD_IDS = FOOD_IDS;
export const NOURRITURE_SPEAK_IDS = SPEAK_IDS;
export const NOURRITURE_DICTATION_IDS = DICTATION_IDS;
export const NOURRITURE_TRANCHES = DECK_TRANCHE;
export const NOURRITURE_ELIDED_IDS = ELIDED_IDS;
export const NOURRITURE_LIKE_IDS = LIKE_IDS;
export const NOURRITURE_EAT_IDS = EAT_IDS;
export const NOURRITURE_PAIR_IDS = PAIR_IDS;
export const NOURRITURE_NEGATION_IDS = NEGATION_IDS;
export const NOURRITURE_BORROWED_NOT_RELEASED = BORROWED_NOT_RELEASED;
export const NOURRITURE_REFRAME_COUNT = REFRAME_COUNT;
export const NOURRITURE_SECTION_IDS = SECTIONS.map((s) => (s as { id?: string }).id ?? '');
export const NOURRITURE_ACT_COUNT = ACTS.length;
