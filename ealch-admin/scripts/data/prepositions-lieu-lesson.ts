

/** A citation that OPENS a sentence needs a capital, and the label is built at
 *  interpolation time rather than typed, so the capital has to be applied here.
 *  « lesson 22 said this first » is not a sentence. */
const Cap = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
import { unitRef } from './_unit-ref.ts';// a2.04.l1, « Prépositions de lieu », seq 13 on the A2 trail.
//
// 24 sections, 6 acts, 30 questions, two stepped trapDrills and one reference
// sheet. Every French string on every screen comes from
// prepositions-lieu-corpus.ts or from prepositions-lieu-imported.ts and none is
// typed twice.
//
// ── WHAT THIS LESSON OWNS, AND WHY IT IS NOT WHAT THE BRIEF ASKED FOR ─────
//
// The brief asks for a five-row grid of place types. THREE of those five rows
// are a1.22's, shipped at seq 25 with a hero grid, a reference sheet and seven
// clauses of `grammarIntroduced`, and the fourth is a1.21's, which says so in
// its own handover. Building the lesson as briefed would repeat two lessons the
// learner has done, which is the exact failure the brief itself warns about
// ("a vocabulary top-up wearing a grammar title").
//
// So the Owns is the thing neither predecessor could hold: WHAT EACH WORD DOES
// TO THE ARTICLE. À and de fold into it, en throws it away, chez leaves it
// alone, and chez is the only row of that table nobody owns. « au Japon » is
// « à » plus « le Japon » and no lesson in the course has ever said so.
//
// ── ACT WEIGHTS ──────────────────────────────────────────────────────────
//
//   the Owns          acts 2 and 3, TEN sections
//   the four kinds    act 1 s03 and act 4, FIVE sections
//
// Doctrine §B.5: if the act structure gives the paradigm more missions than the
// Owns, the wrong lesson got built.

import type {
  Lesson, LessonAct, LessonSection, ErrorTrigger, ReferenceSheet, SceneBeat,
} from '../../../ealch-v2/src/content/schema.ts';
import {
  ARTICLE_CLAIM, ARTICLE_TABLE, AUTHORED_IDS, A121_REFRAME, A122_REFRAME,
  CHEZ_CLAIM, CHEZ_FOLD_WRONG, CHEZ_WRONG, CONTRACTION_UNIT, COUNTRY_UNIT,
  DOCTOR_UNIT, ITEM_IMPORT_IDS, KIND_EXAMPLE, KIND_LABEL, KIND_ORDER, KIND_OWNER,
  KIND_WORD, LESSON_ID, NO_EAR_CLAIM, PARTITIVE_UNIT, PREPOSITIONS_LIEU,
  REFRAME, SHEET_ID, SHOP_CLAIM, SORT_CLAIM, THE_MOVE, TIME_UNIT,
  TRANSPORT_UNIT, UNIT, UNSEEN, UNSEEN_CLAIM, row, sortRow,
} from './prepositions-lieu-corpus.ts';
import {
  ARTICLE_ARITHMETIC, CARRY_FORWARD, CHEZ_ARITHMETIC, DOCTOR_LINE,
  NEXT_LESSON_LINE, NO_FOLD_CLAIM, OWED_CLAIM, PAYOFF_CLAIM,
  PREPOSITIONS_LIEU_TERMS, SORT_ARITHMETIC,
} from './prepositions-lieu-terms.ts';
import {
  displayRespell, impCard, importedEn, importedFr, rowCard, sub as impSub,
} from './prepositions-lieu-imported.ts';

/* ─── Reading the authored rows ────────────────────────────────────────────
 *
 * The lesson NEVER types a French string that is also a corpus row. `fr(id)`
 * and `en(id)` read it, so a screen and the card the learner is scored on
 * cannot drift apart. a2.13 §6.2 shipped a grid that disagreed with its own
 * cards and every host gate was green.                                       */

const BY_ID = new Map(PREPOSITIONS_LIEU.map((r) => [r.id, r]));

const fr = (id: string): string => {
  const r = BY_ID.get(id);
  if (!r) throw new Error(`a2.04: ${id} is not an authored row.`);
  return r.fr;
};
const en = (id: string): string => {
  const r = BY_ID.get(id);
  if (!r) throw new Error(`a2.04: ${id} is not an authored row.`);
  return r.en;
};
const bare = (id: string): string => {
  const r = BY_ID.get(id);
  if (!r) throw new Error(`a2.04: ${id} is not an authored row.`);
  return r.respell!;
};
const sub = (id: string): string => `[${bare(id)}]`;
const noStop = (s: string): string => s.replace(/[.?!]\s*$/u, '');

/** A groupDrill item at `lg` for an AUTHORED row. Draws `fr`, `ipa` and `note`
 *  and nothing else, so the respelling and the gloss go in `note`. */
const authoredCard = (id: string) => {
  const r = BY_ID.get(id);
  if (!r) throw new Error(`a2.04: ${id} is not an authored row.`);
  return { fr: r.fr, ipa: r.ipa!, note: `[${r.respell}] ${r.en}` };
};

const A = (n: number) => `fr.a2.prepositions-essentielles.${n}`;

/* ─── Section ids, as LITERALS ─────────────────────────────────────────────
 *
 * Literals rather than reads off a const declared below, because a
 * `export const X = SECTIONS[0].id` before SECTIONS is a temporal dead zone.  */

export const SCENE_SECTION_ID = 's01-scene';
export const GOALS_SECTION_ID = 's02-goals';
export const FOUR_SECTION_ID = 's03-four';
export const ARTICLE_SECTION_ID = 's04-article';
export const PAYOFF_SECTION_ID = 's05-payoff';
export const NOFOLD_SECTION_ID = 's06-nofold';
export const FOLD_SECTION_ID = 's07-fold';
export const PERSON_SECTION_ID = 's08-person';
export const PEOPLE_SECTION_ID = 's09-people';
export const SHOP_SECTION_ID = 's10-shop';
export const TRAP_SECTION_ID = 's11-trap';
export const ERRORS_SECTION_ID = 's12-errors';
export const READING_SECTION_ID = 's13-reading';
export const CITY_SECTION_ID = 's14-city';
export const COUNTRY_SECTION_ID = 's15-country';
export const BUILDING_SECTION_ID = 's16-building';
export const UNSEEN_SECTION_ID = 's17-unseen';
export const SCENARIO_SECTION_ID = 's18-scenario';
export const DICTATION_SECTION_ID = 's19-dictation';
export const SPEAK_SECTION_ID = 's20-speak';
export const REVIEW_SECTION_ID = 's21-review';
export const PROGRESS_SECTION_ID = 's22-progress';
export const QUIZ_SECTION_ID = 's23-quiz';
export const ROUNDUP_SECTION_ID = 's24-roundup';

/* ─── The item lists the guards read ───────────────────────────────────────*/

/** THE FIFTEEN GENDERED NOUNS ARE NOT ITEMS OF THIS LESSON.
 *
 *  They are printed on cards out of the manifest and they are not `itemIds`,
 *  because a1.03's ending population is measured off the SEED and carrying a
 *  gendered single-word noun through the cut adds it to that population. See
 *  DISPLAY_ONLY_IDS in the corpus for the four figures it moved and why this
 *  lesson withdraws rather than re-rendering a1.03 the way a1.22 had to. */
const ITEM_IDS: string[] = [...AUTHORED_IDS, ...ITEM_IMPORT_IDS];

/** Every authored row whose `dicteeMode` is LETTERS, which is the only mode
 *  that tests a spelling. Corrections §4. Derived rather than listed, so a row
 *  that stops qualifying cannot stay in the dictée. */
const DICTEE_IDS: string[] = PREPOSITIONS_LIEU
  .filter((r) => r.drills.includes('dictation'))
  .map((r) => r.id);

/** Spoken practice draws ONLY from rows carrying `voiceflash`. Every authored
 *  row carries it; the imported ones are a mixture and this build adds it to
 *  seven of them. These are the authored ones, which is what a1.21 did and for
 *  the same reason: an imported row without the drill renders a card the mic
 *  cannot score. */
const SPEAK_IDS: string[] = [
  A(129), A(130), A(131), A(132),
  A(133), A(135), A(136), A(137),
  A(141), A(142), A(144),
  A(145), A(146),
  A(152), A(153), A(154),
];

/* ══════════════════════════════════════════════════════════════════════════
 *  THE SCENE
 *
 *  Doctrine §B.2: an A2 scene opens on somebody who started a sentence they
 *  could not finish. She is friendly, she is not correcting anything, and the
 *  sentence dies in the middle while she waits. The learner has the noun and
 *  the verb and stalls on a word of four letters.
 * ═══════════════════════════════════════════════════════════════════════ */

const SCENE_BEATS: SceneBeat[] = [
  {
    kind: 'narration',
    size: 'md',
    text: 'A Tuesday, in the corridor at work in Nantes. Somebody from your team catches you on the way past with a coffee in each hand.',
    audio: { mode: 'tts', voice: 'coach' },
  },
  {
    kind: 'bubble',
    from: 'them',
    reveal: 'tap',
    size: 'md',
    speaker: 'La collègue',
    fr: fr(A(148)),
    en: en(A(148)),
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a2-04-scene' },
  },
  {
    kind: 'bubble',
    from: 'you',
    reveal: 'auto',
    size: 'md',
    fr: 'Je vais... euh... à le médecin... au médecin...',
    en: 'I am going... er... to the doctor... to the doctor...',
    stage: 'You have the verb and you have the word for the person. What you do not have is the two letters in between, and you can hear yourself trying both of the ones you were taught.',
    audio: { mode: 'tts', lang: 'fr-FR' },
  },
  {
    kind: 'choice',
    size: 'lg',
    prompt: 'She is waiting, and one of the coffees is getting cold. What comes out?',
    options: [
      {
        fr: noStop(fr(A(129))),
        respell: sub(A(129)),
        en: 'the same words, with the one you were never given',
        outcome: 'works',
        audio: { mode: 'tts', lang: 'fr-FR' },
      },
      {
        fr: 'To the doctor.',
        en: 'and the sentence is over',
        outcome: 'breaks',
        audio: { mode: 'tts', lang: 'en-GB' },
      },
    ],
    followUp: {
      works: 'She says she has the same one, two floors down, and you talk about the waiting room for the rest of the corridor.',
      breaks: 'She nods and carries the coffees on. Nothing happened, and nothing happened next time either.',
    },
  },
  {
    kind: 'bubble',
    from: 'them',
    reveal: 'auto',
    size: 'md',
    speaker: 'La collègue',
    fr: fr(A(149)),
    en: en(A(149)),
    stage: 'She gives you the word without noticing she has given it to you, which is what makes it expensive: nobody corrected anything, so nothing was learned.',
    audio: { mode: 'tts', lang: 'fr-FR' },
  },
  {
    kind: 'break',
    size: 'lg',
    heading: 'Four kinds',
    body: 'You did not stall on a word you had never learned. You stalled on which of four small words the place in front of you wanted, and nobody has ever put the four in the same place.',
    wrong: {
      fr: 'Je vais au médecin.',
      ipa: '/ʒə vɛ o med.sɛ̃/',
      respell: '[zhuh veh oh mayd-SEHⁿ]',
      en: 'the fold you were taught, on a person',
    },
    right: {
      fr: fr(A(129)),
      ipa: '/ʒə vɛ ʃe lə med.sɛ̃/',
      respell: sub(A(129)),
      en: en(A(129)),
    },
    coach: REFRAME,
  },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  THE SECTIONS
 * ═══════════════════════════════════════════════════════════════════════ */

const SECTIONS: LessonSection[] = [
  /* ── Act 1: the word that stopped the sentence ───────────────────────────*/

  {
    type: 'scene',
    id: SCENE_SECTION_ID,
    title: 'Two Coffees, One Word',
    // NOT « Dans le couloir ». `dans` is one of a1.21's five and this lesson
    // may name them exactly once, in the roundup. A scene subtitle is not the
    // place to spend that.
    frSub: 'Le couloir',
    render: 'screens',
    layer: 'core',
    setting: { place: 'The corridor at work', city: 'Nantes', time: 'Tuesday morning' },
    beats: SCENE_BEATS,
    closing: { text: REFRAME, size: 'md' },
    terms: ['chez', 'fourKinds'],
  },

  {
    type: 'goals',
    id: GOALS_SECTION_ID,
    // 27 characters, the house heading that 36 lessons in the seed ship.
    title: 'What You Will Be Able To Do',
    frSub: 'Ce que vous saurez faire',
    layer: 'core',
    goals: [
      { t: 'Ask what kind of place it is', s: SORT_CLAIM },
      { t: 'Use chez, which is new', s: CHEZ_CLAIM },
      { t: 'Know what happens to the article', s: REFRAME },
      { t: 'Answer for a place nobody taught you', s: UNSEEN_CLAIM },
    ],
  },

  {
    /* THE FIRST LAYOUT CLAIM THE TEST ASSERTS ROW BY ROW.
       Four rows, three columns, and every cell is inside the ELEVEN characters
       a2.17 measured on a Pixel 6 for a three-column tapTable. a2.16 measured
       six at five columns, which is why this is three.

       TWO OF THE FOUR ROWS ARE CREDITED TO ANOTHER UNIT in their own detail
       text. That is the difference between a synthesis and a repeat, and it is
       asserted: KIND_OWNER carries the unit id and the guard checks that the
       named unit appears in the row the learner reads. */
    type: 'tapTable',
    id: FOUR_SECTION_ID,
    title: 'Four Kinds Of Place',
    frSub: 'Quatre sortes de lieu',
    layer: 'core',
    say: `${SORT_CLAIM} Tap a row to hear the whole sentence. Two of these four you already own.`,
    cols: ['The place', 'The word', 'Example'],
    rows: KIND_ORDER.map((k) => ({
      cells: [KIND_LABEL[k], KIND_WORD[k], KIND_EXAMPLE[k]],
      say: fr(sortRow(k).id),
      detail: {
        title: KIND_EXAMPLE[k],
        body: `« ${noStop(fr(sortRow(k).id))} » ${sub(sortRow(k).id)}. ${en(sortRow(k).id)} `
          + (KIND_OWNER[k] === null
            ? 'Nobody has taught you this one, and it is the reason this lesson exists.'
            : `${Cap(unitRef(KIND_OWNER[k]!))} taught you this one already.`),
        say: fr(sortRow(k).id),
      },
    })),
    terms: ['fourKinds', 'chez', 'noArticle'],
  },

  /* ── Act 2: what each word does to the article. The Owns, first half. ────*/

  {
    /* THE HERO, AND THE TABLE NEITHER PREDECESSOR COULD HOLD.
       a1.21 has rows one and two. a1.22 has row three. Row four is nobody's,
       and no screen in the course has ever carried all four.

       Three columns and every cell seven characters or fewer, which is well
       inside a2.17's measured eleven. A `table` here would be a table-in-core
       density failure (corrections §8); the full version with the examples is
       in the reference sheet. */
    type: 'tapTable',
    id: ARTICLE_SECTION_ID,
    title: 'What Happens To The Le',
    frSub: 'Ce qui arrive à l’article',
    layer: 'core',
    say: `${ARTICLE_CLAIM} ${REFRAME}`,
    cols: ['Word', '+ le', '+ la'],
    rows: ARTICLE_TABLE.map((r) => ({
      cells: [r.word, r.withLe, r.withLa],
      say: r.withLe === r.word ? fr(A(131)) : `${r.withLe}`,
      detail: {
        title: `${r.word} · ${r.withLe}`,
        body: r.detail,
        say: r.withLe,
      },
    })),
    terms: ['theArticle', 'aPlusLe', 'enDropsIt'],
  },

  {
    /* THE PAYOFF, AND THE REASON THIS LESSON IS AT seq 13.
       Two units eleven lessons apart taught the two halves of one operation and
       neither of them said so. Both are named by unit id, which corrections §7
       asks for and which a2.16 §3 says must be asserted as a LITERAL. */
    type: 'examples',
    id: PAYOFF_SECTION_ID,
    title: 'You Have Had This Twice',
    frSub: 'Vous l’avez déjà, deux fois',
    layer: 'core',
    say: PAYOFF_CLAIM,
    examples: [
      { fr: importedFr('fr.a1.routines.064'), en: importedEn('fr.a1.routines.064'), note: `À and le marché. ${Cap(unitRef(CONTRACTION_UNIT))} gave you this and somebody wrote the card for a routine lesson.` },
      { fr: fr(A(145)), en: en(A(145)), note: `À and le Japon, which is the same fold with a country behind it. ${Cap(unitRef(COUNTRY_UNIT))} gave you the country and called the word au.` },
      { fr: fr(A(131)), en: en(A(131)), note: `And the one that is not a fold at all. La France had an article and en got rid of it. ${A122_REFRAME}` },
      { fr: importedFr('fr.a1.routines.063'), en: importedEn('fr.a1.routines.063'), note: `And à l', which folds with nothing. ${A121_REFRAME}` },
    ],
    terms: ['aPlusLe', 'theArticle'],
  },

  {
    type: 'cardDeck',
    id: NOFOLD_SECTION_ID,
    title: 'The One That Does Nothing',
    frSub: 'Celui qui ne fait rien',
    layer: 'core',
    hint: 'Swipe. Four cards, and the whole of what chez does to an article is on the last one.',
    cards: [
      { label: 'the word', head: importedFr('fr.sons.muettes.009'), sub: impSub('fr.sons.muettes.009'), body: 'One syllable, and the z on the end has never been pronounced by anybody. It is the only place word in the language with no English word behind it.' },
      { label: 'with le', head: fr(A(133)), sub: sub(A(133)), body: `${en(A(133))} Three words on the page and three words in the mouth. Nothing folded and nothing disappeared.` },
      { label: 'with la', head: fr(A(134)), sub: sub(A(134)), body: `${en(A(134))} The same again with la, and dentiste is the same word whether the person is a man or a woman.` },
      { label: 'and the rule', head: 'chez le, chez la', body: NO_FOLD_CLAIM },
    ],
    terms: ['chez', 'theArticle'],
  },

  {
    /* TRAP ONE: THE FOLD THAT DOES NOT HAPPEN.
       A learner who has done a1.21 knows that à plus le is au, and applies it.
       That is not carelessness, it is the rule working where it should not, and
       it is why this trap comes before the chez-and-a-place one.

       THE STEPPED SHAPE. `lesson-contract.test.ts` requires every A2 trapDrill
       to walk rule > cards > audio > drill with `swipe`, a `say`, an audio spec
       and a GATED drill step, and `size` COMES OFF (ledger, the trapDrill sweep
       across seq 1..11: the stepped branch of MissionSection sizes off
       `steps?.length`). a2.03, a2.16 and a2.17 all shipped the stacked shape. */
    type: 'trapDrill',
    id: FOLD_SECTION_ID,
    title: 'The Fold That Does Not',
    frSub: 'La contraction qui n’a pas lieu',
    layer: 'core',
    swipe: true,
    say: 'Three cards and then six to prove it. Every wrong answer here is a rule you were taught, running where it should not.',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a2-04-fold' },
    steps: [
      { kind: 'rule', label: 'The rule', title: 'Chez Leaves It Alone' },
      { kind: 'cards', label: 'Three cards', title: 'Two Fold, One Does Not' },
      { kind: 'audio', label: 'Hear it', title: 'Two Words, Not One' },
      { kind: 'drill', label: 'Prove it', title: 'Fold Or Not', gate: true },
    ],
    rule: {
      title: 'The fold is à and de, and nothing else',
      body: NO_FOLD_CLAIM,
    },
    cards: [
      { promptLabel: 'folds', promptSound: fr(A(132)), fr: fr(A(132)), ipa: '/ʒə vɛ o maʁ.ʃe/', tip: 'À and le marché became au marché. One word on the page now.' },
      { promptLabel: 'folds', promptSound: fr(A(145)), fr: fr(A(145)), ipa: '/ʒə vɛ o ʒa.pɔ̃/', tip: 'À and le Japon, and the same thing happens. A country is not a special case here.' },
      { promptLabel: 'does not', promptSound: fr(A(129)), fr: fr(A(129)), ipa: '/ʒə vɛ ʃe lə med.sɛ̃/', tip: 'Chez and le médecin, and the le is still there. It always will be.' },
    ],
    // Hand-randomised: MissionRich renders authored order exactly, so a correct
    // answer sitting at index 0 six times running gives itself away.
    drill: [
      { promptSay: 'à + le marché', opts: ['au marché', 'à le marché', 'chez le marché'], correct: 0 },
      { promptSay: 'chez + le médecin', opts: ['chez au médecin', fr(A(133)).replace('chez ', 'chez '), 'chez du médecin'], correct: 1 },
      { promptSay: 'à + la gare', opts: ['à la gare', 'à gare', 'ale gare'], correct: 0 },
      { promptSay: 'chez + la dentiste', opts: ['chez à la dentiste', 'chez dentiste', fr(A(134))], correct: 2 },
      { promptSay: 'de + le Japon', opts: ['de le Japon', 'du Japon', 'chez le Japon'], correct: 1 },
      { promptSay: 'chez + les voisins', opts: ['chez les voisins', 'chez aux voisins', 'aux voisins'], correct: 0 },
    ],
    terms: ['theArticle', 'chez', 'aPlusLe'],
  },

  /* ── Act 3: chez. The heaviest act, and the Owns. ────────────────────────*/

  {
    type: 'examples',
    id: PERSON_SECTION_ID,
    title: 'A Person, Not A Place',
    frSub: 'Une personne, pas un lieu',
    layer: 'core',
    say: `${CHEZ_CLAIM} Seven sentences, and every one of them has a person behind the word.`,
    examples: [
      { fr: fr(A(141)), en: en(A(141)), note: 'Yourself counts as a person, which is why chez moi is the commonest one of all.' },
      { fr: fr(A(142)), en: en(A(142)), note: 'And somebody else. The word after chez is who, never where.' },
      { fr: fr(A(143)), en: en(A(143)), note: 'The same with a woman, and the two words sound almost identical on either side of chez.' },
      { fr: fr(A(144)), en: en(A(144)), note: 'A name, so there is no article at all. Nothing was dropped: there was never one there.' },
      { fr: importedFr('fr.a1.famille.124'), en: importedEn('fr.a1.famille.124'), note: `${impSub('fr.a1.famille.124')} Somebody wrote these three bare frames for a family lesson and they are the three verbs this word lives with.` },
      { fr: importedFr('fr.a1.famille.125'), en: importedEn('fr.a1.famille.125'), note: `${impSub('fr.a1.famille.125')} The second.` },
      { fr: importedFr('fr.a1.famille.126'), en: importedEn('fr.a1.famille.126'), note: `${impSub('fr.a1.famille.126')} And the third, which is the one the conversation at the end of this lesson needs.` },
    ],
    terms: ['chez', 'noArticle'],
  },

  {
    type: 'cardDeck',
    id: PEOPLE_SECTION_ID,
    title: 'Who You Can Go To',
    frSub: 'Chez qui',
    layer: 'core',
    hint: 'Swipe. Six people and five sentences, and not one of them was written for this lesson.',
    cards: [
      impCard('fr.a2.systeme-de-sante.001', 'a job', 'The person the whole lesson is about, and the one the corridor conversation stopped on.'),
      impCard('fr.a2.systeme-de-sante.042', 'a job', 'The same word for a man and for a woman, which is why chez le and chez la are both real here.'),
      impCard('fr.sons.muettes.038', 'a job', 'The man who bakes. Half of the pair on the next screen.'),
      impCard('fr.a1.animaux-domestiques.108', 'a job', 'And the one for the cat. Somebody wrote this for an animal lesson.'),
      impCard('fr.a1.amis.011', 'not a job', 'A person with no profession attached, so the rule is about people rather than about work.'),
      impCard('fr.a1.famille.025', 'family', 'And a relative, which is what the corpus puts behind this word more often than anything else.'),
      impCard('fr.a1.pronoms-essentiels.075', 'a pronoun', 'The person you are talking to. Written for a pronoun lesson years ago.'),
      impCard('fr.a2.pronoms-essentiels.055', 'a pronoun', 'And the two of you together.'),
      impCard('fr.a1.amis.030', 'a greeting', 'What you say at your own door, and it is a fixed phrase you can use tomorrow.'),
      impCard('fr.a1.amis.059', 'somebody', 'A person with no name at all, which still counts.'),
      impCard('fr.a1.animaux-domestiques.130', 'the whole shape', 'Verb, chez, article, person. This is the sentence this lesson exists to build and it was published for a lesson about pets.'),
      impCard('fr.a1.verbes-essentiels.026', 'a whole sentence', 'Staying rather than going, and the word does not change.'),
      impCard('fr.sons.nasales.157', 'a whole sentence', 'Somebody wrote this for a pronunciation lesson and it happens to be four people in one line.'),
      impCard('fr.sons.voyelles.449', 'a whole sentence', 'And this one, where chez is followed by a possessive and a grandmother.'),
    ],
    terms: ['chez', 'noArticle', 'manOrShop'],
  },

  {
    /* THE OWNS, MADE INTO A CHOICE.
       English has one phrase for both of these and lets you use either. This is
       doctrine §B.5's "the meaning" kind of Owns: a distinction English merges
       and French splits, and the learner has never been asked to make it. */
    type: 'examples',
    id: SHOP_SECTION_ID,
    title: 'The Man Or The Shop',
    frSub: 'L’homme ou la boutique',
    layer: 'core',
    say: SHOP_CLAIM,
    examples: [
      { fr: fr(A(135)), en: en(A(135)), note: `${sub(A(135))} The man. A person, so chez.` },
      { fr: fr(A(137)), en: en(A(137)), note: `${sub(A(137))} The shop. A place, so à, and à and la do not fold.` },
      { fr: fr(A(138)), en: en(A(138)), note: 'The whole sentence with the person in it.' },
      { fr: fr(A(139)), en: en(A(139)), note: 'And with the shop. Two sentences with two words in common.' },
      { fr: fr(A(140)), en: en(A(140)), note: `${sub(A(140))} And this is why it is hard. They are not two places.` },
    ],
    terms: ['manOrShop', 'chez'],
  },

  {
    /* TRAP TWO, AND THE BRIEF IS RIGHT THAT IT IS THE STRONGEST ONE.
       The corpus NEVER makes this error: 283 published rows hold chez and zero
       put it in front of a place, at any status. So the wrong forms below are
       DISPLAY STRINGS and never corpus rows, and the guard that forbids them
       anywhere else in the lesson is absolute rather than exempting anything.

       The one place a wrong form is permitted is here and in `s12-errors`, and
       the test scopes the assertion to exactly those two section ids. */
    type: 'trapDrill',
    id: TRAP_SECTION_ID,
    title: 'Chez Needs A Person',
    frSub: 'Chez veut quelqu’un',
    layer: 'core',
    swipe: true,
    say: 'Four cards and then six to prove it. Two of the six have two right answers and you have to pick the one that means what you meant.',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a2-04-trap' },
    steps: [
      { kind: 'rule', label: 'The rule', title: 'Who, Never Where' },
      { kind: 'cards', label: 'Four cards', title: 'The Man And The Shop' },
      { kind: 'audio', label: 'Hear it', title: 'Wrong, Then Right' },
      { kind: 'drill', label: 'Prove it', title: 'Person Or Place', gate: true },
    ],
    rule: {
      title: 'The word after chez is who',
      body: CHEZ_ARITHMETIC,
    },
    cards: [
      { promptLabel: 'the person', promptSound: fr(A(135)), fr: fr(A(135)), ipa: '/ʃe lə bu.lɑ̃.ʒe/', tip: 'A man, so chez, and the article stays.' },
      { promptLabel: 'the shop', promptSound: fr(A(137)), fr: fr(A(137)), ipa: '/a la bu.lɑ̃ʒ.ʁi/', tip: 'A building, so à, and à and la do not fold.' },
      { promptLabel: 'the person', promptSound: fr(A(133)), fr: fr(A(133)), ipa: '/ʃe lə med.sɛ̃/', tip: 'The doctor is a person. This is where you go for an appointment.' },
      { promptLabel: 'the building', promptSound: 'à l’hôpital', fr: 'à l’hôpital', ipa: '/a lɔ.pi.tal/', tip: 'And the hospital is a building. Different word, and genuinely a different place to be going.' },
    ],
    drill: [
      { promptSay: 'the bakery, the building', opts: ['chez la boulangerie', fr(A(137)), 'en la boulangerie'], correct: 1 },
      { promptSay: "the baker's, the man", opts: [fr(A(135)), 'à le boulanger', 'au boulanger'], correct: 0 },
      { promptSay: 'the bank', opts: ['chez la banque', 'en la banque', 'à la banque'], correct: 2 },
      { promptSay: "the dentist's", opts: ['à la dentiste', fr(A(134)), 'aux dentistes'], correct: 1 },
      { promptSay: "Marie's place", opts: ['à la Marie', 'chez la Marie', fr(A(136))], correct: 2 },
      { promptSay: 'the station', opts: [importedFr('fr.a1.deplacements.003'), 'chez la gare', 'à la gare'], correct: 2 },
    ],
    terms: ['chez', 'manOrShop', 'noArticle'],
  },

  {
    /* `commonErrors` WANTS `swipe: true` OR IT DRAWS A BLANK SCREEN. a1.01
       mission 5 and sons.08 mission 22 both shipped without it. */
    type: 'commonErrors',
    id: ERRORS_SECTION_ID,
    title: 'The Six You Will Make',
    frSub: 'Les six erreurs',
    layer: 'core',
    swipe: true,
    size: 'lg',
    errors: [
      ...CHEZ_WRONG.map((w) => ({ wrong: w.wrong, right: w.place, why: w.why })),
      ...CHEZ_FOLD_WRONG.map((w) => ({ wrong: w.wrong, right: w.right, why: w.why })),
    ],
    terms: ['chez', 'manOrShop', 'theArticle'],
  },

  {
    type: 'reading',
    id: READING_SECTION_ID,
    title: 'Saturday Morning',
    frSub: 'Le samedi matin',
    layer: 'core',
    questionsInModal: true,
    // ONE BLOCK. PassagePage splits on /(?<=[.!?»])\s+/ and an authored newline
    // is silently discarded. PRESENT TENSE ONLY, no temporal en and no temporal
    // dans anywhere: a2.18 is the very next lesson and it owns both.
    text: 'Le samedi matin, je vais chez le boulanger. Il s’appelle Marc et il travaille à la boulangerie de la rue Victor Hugo. Après, je vais à la pharmacie, puis à la banque. À midi, je mange chez ma tante : elle habite à côté de la gare. Mon frère, lui, n’est jamais là le samedi. Il est à Paris, ou chez des amis à Lyon, ou au Japon pour son travail. Ma tante dit toujours la même chose : « Chez qui, cette fois ? »',
    glossary: [
      { word: 's’appelle', en: 'is called', ipa: '/sa.pɛl/', note: 'His name, and it is a person, which is the whole reason the first sentence uses chez.' },
      { word: 'la rue', en: 'the street', ipa: '/la ʁy/', note: 'A street is a place and not a person, so it takes à like every other building here.' },
      { word: 'puis', en: 'then', ipa: '/pɥi/', note: 'Joins two errands. Nothing about it is this lesson.' },
      { word: 'jamais', en: 'never', ipa: '/ʒa.mɛ/', note: `From ${unitRef('a1.18')}, the negation lesson, and it is here because the passage needed one sentence that is not a list.` },
      { word: 'cette fois', en: 'this time', ipa: '/sɛt fwa/', note: 'Two words and a fixed phrase.' },
    ],
    questions: [
      { q: 'Six places are named in this passage. Which one of them takes chez, and why?', a: 'The baker, and the aunt. Both of them are people. Everything else in the passage is a building, a town or a country, and every one of those takes something else.' },
      { q: 'The baker and the bakery are both in the second sentence. What is different about the two words in front of them?', a: 'Chez in front of the man and à la in front of the shop. It is the same doorway and French will not let you use one word for both.' },
      { q: 'Three different words appear in front of a place in the sixth sentence. What are they, and what decided each one?', a: 'À Paris because a city has no article, chez des amis because they are people, and au Japon because a country with a le folds into au. Three kinds of place in one sentence.' },
      { q: 'The aunt asks « Chez qui ? » rather than « Où ? ». What does her choice of word already tell you?', a: 'That she is expecting a person. Chez cannot be followed by anything else, so the question itself carries the rule.' },
    ],
    terms: ['chez', 'manOrShop', 'fourKinds'],
  },

  /* ── Act 4: the other three kinds ────────────────────────────────────────*/

  {
    type: 'examples',
    id: CITY_SECTION_ID,
    title: 'A Town Has No Article',
    frSub: 'Une ville n’a pas d’article',
    layer: 'core',
    say: 'A city takes à and nothing else, because there is no article on it for anything to happen to. Five sentences and four of them were written for other lessons.',
    examples: [
      { fr: fr(A(130)), en: en(A(130)), note: `${sub(A(130))} À goes straight on. No fold, no article, nothing to decide.` },
      { fr: importedFr('fr.sons.muettes.004'), en: importedEn('fr.sons.muettes.004'), note: `${impSub('fr.sons.muettes.004')} The word on its own, published for a lesson about silent letters.` },
      { fr: importedFr('fr.sons.elision.062'), en: importedEn('fr.sons.elision.062'), note: `${impSub('fr.sons.elision.062')} A second city, so this is a rule rather than a fact about Paris.` },
      { fr: importedFr('fr.sons.elision.029'), en: importedEn('fr.sons.elision.029'), note: `${impSub('fr.sons.elision.029')} And coming from, which is de and nothing else for the same reason.` },
      { fr: importedFr('fr.a2.verbes.285'), en: importedEn('fr.a2.verbes.285'), note: `${impSub('fr.a2.verbes.285')} ${unitRef('a2.02')} published this one. De Paris, with no du in sight, because there is no le to fold with.` },
    ],
    terms: ['noArticle', 'fourKinds'],
  },

  {
    /* a1.22 OWNS COUNTRIES AND THIS SECTION SAYS SO ON THE CARD.
       Four countries, every one of them an imported id, and no country
       vocabulary section anywhere in the lesson. The gender rule, the
       nationalities, the continents and the -e ending are all a1.22's and none
       of them appears here. */
    type: 'examples',
    id: COUNTRY_SECTION_ID,
    title: 'The Country You Own',
    frSub: 'Le pays que vous avez',
    layer: 'core',
    say: `${Cap(unitRef(COUNTRY_UNIT))} taught you this row and this lesson is not teaching it again. What is new is where it sits: it is one of four, and the thing it has in common with the other three is the article.`,
    examples: [
      { fr: fr(A(131)), en: en(A(131)), note: `${sub(A(131))} ${importedFr('fr.a1.pays-et-nationalites.001')} ${impSub('fr.a1.pays-et-nationalites.001')} had an article and en threw it away.` },
      { fr: fr(A(145)), en: en(A(145)), note: `${sub(A(145))} ${importedFr('fr.a1.pays-et-nationalites.051')} ${impSub('fr.a1.pays-et-nationalites.051')} had a le and à folded into it. That is the same operation as au marché.` },
      { fr: importedFr('fr.a1.pays-et-nationalites.011'), en: importedEn('fr.a1.pays-et-nationalites.011'), note: `${impSub('fr.a1.pays-et-nationalites.011')} A plural, so aux, and the fold is à and les. Same rule, third form.` },
      { fr: importedFr('fr.sons.nasales.029'), en: importedEn('fr.sons.nasales.029'), note: `${impSub('fr.sons.nasales.029')} The only sentence in the whole course that puts en in front of a country and tells you how to say it. Written for a pronunciation lesson.` },
    ],
    terms: ['enDropsIt', 'aPlusLe', 'theArticle'],
  },

  {
    type: 'cardDeck',
    id: BUILDING_SECTION_ID,
    title: 'Everywhere Else',
    frSub: 'Tout le reste',
    layer: 'core',
    hint: 'Swipe. Seven buildings and four sentences, and the only question on any of them is what the article does.',
    cards: [
      impCard('fr.a2.courses.024', 'a shop', 'The shop half of the pair, and the article does not fold with à.'),
      impCard('fr.a1.la-ville.103', 'a building', 'À la banque, and there is no version of this one with a person in it.'),
      impCard('fr.a1.deplacements.003', 'a building', 'À la gare, and this is where the conversation at the end of the lesson goes.'),
      impCard('fr.a1.la-ville.012', 'a building', "À l', which folds with nothing at all."),
      impCard('fr.a1.au-restaurant.001', 'a building', 'Au restaurant. A le word, so it folds.'),
      impCard('fr.a1.marche.006', 'a place', 'Au marché, which is the fourth row of the grid on card one.'),
      impCard('fr.a1.la-ville.105', 'a shop', 'À la pharmacie, and there is no person behind this one in the whole corpus.'),
      { label: 'the fold', head: fr(A(132)), sub: sub(A(132)), body: `${en(A(132))} À and le marché, folded.` },
      { label: 'no fold', head: fr(A(146)), sub: sub(A(146)), body: `${en(A(146))} À and la gare, not folded, and that is half of ${unitRef(CONTRACTION_UNIT, 'a2')}'s rule.` },
      { label: "no fold, l'", head: fr(A(147)), sub: sub(A(147)), body: `${en(A(147))} And à l', which is the other half.` },
      impCard('fr.a1.routines.067', 'home', 'Home is a building here rather than a person, so it takes à like every other building. Chez moi is the version with a person in it, and it is a different sentence.'),
      impCard('fr.a2.verbes.261', 'the frame', `${Cap(unitRef('a2.02'))} published this sentence and the four cards on the first screen of this lesson are built on it.`),
    ],
    terms: ['theArticle', 'aPlusLe', 'fourKinds'],
  },

  {
    /* THE GENERALISATION TEST, IN THE FLOW.
       Doctrine §B.1: a mission that makes the learner produce the answer for a
       word the lesson never showed them has taught the system rather than the
       list. All four of these are published French words that this lesson does
       not import and does not name anywhere else, and the guards assert the
       absence in both directions. */
    type: 'groupDrill',
    id: UNSEEN_SECTION_ID,
    title: 'Places You Have Not Met',
    frSub: 'Des lieux nouveaux',
    layer: 'core',
    size: 'lg',
    say: `${UNSEEN_CLAIM} Ask what kind of place it is before you look at the options.`,
    // A `lg` groupDrill item draws `fr`, `ipa` AND `note` and nothing else
    // (MissionRich.tsx:439, schema.ts:899). a2.13 shipped 59 cards and a2.14 53
    // passing `respell` and `en`, which are read by nothing at this size, so
    // every card was a bare French sentence with no pronunciation and no
    // meaning. The respelling and the gloss go in `note`. Ledger §a2.14-12.
    groups: UNSEEN.map((u) => ({
      label: `${u.fr} · ${u.en}`,
      items: [authoredCard(sortRow(u.kind).id)],
      check: {
        q: `Vous allez ___ .   (${u.en})`,
        opts: u.kind === 'person'
          ? [`à ${u.fr}`, u.answer, `au ${u.fr.replace(/^le /, '')}`]
          : u.kind === 'city'
            ? [`en ${u.fr}`, `à la ${u.fr}`, u.answer]
            : u.kind === 'country'
              ? [u.answer, `en ${u.fr.replace(/^le /, '')}`, `à ${u.fr}`]
              : [`chez ${u.fr}`, u.answer, `en ${u.fr.replace(/^la /, '')}`],
        correct: u.kind === 'person' ? 1 : u.kind === 'city' ? 2 : u.kind === 'country' ? 0 : 1,
        why: `${KIND_LABEL[u.kind]}, so ${KIND_WORD[u.kind]}. Nobody showed you this word and you did not need to be shown.`,
      },
    })),
    terms: ['fourKinds', 'chez', 'noArticle'],
  },

  /* ── Act 5: out loud ─────────────────────────────────────────────────────*/

  {
    type: 'scenario',
    id: SCENARIO_SECTION_ID,
    title: 'The Same Corridor',
    frSub: 'Le même couloir',
    layer: 'core',
    setting: 'The corridor again, a week later, and she has put the coffees down. Every answer wants a place, and every place wants you to have decided what kind of place it is.',
    turns: [
      {
        ai: fr(A(148)),
        en: en(A(148)),
        user: fr(A(129)),
        userEn: en(A(129)),
        // TWO ALTERNATIVES MINIMUM ON EVERY TURN AND A `userEn`.
        // `scenario.logic.test.ts` is a SEED-WIDE test requiring both, and
        // a2.03 shipped three turns with one alt each with every gate green.
        alts: [
          { fr: 'Je vais chez la dentiste.', en: "I am going to the dentist's." },
          { fr: fr(A(147)), en: en(A(147)) },
        ],
      },
      {
        ai: 'Ah bon ? Rien de grave ?',
        en: 'Really? Nothing serious?',
        user: fr(A(150)),
        userEn: en(A(150)),
        alts: [
          { fr: 'Non, ça va.', en: 'No, it is fine.' },
          { fr: 'Non, rien du tout.', en: 'No, nothing at all.' },
        ],
      },
      {
        ai: 'Et après, tu rentres ?',
        en: 'And afterwards, are you going home?',
        user: fr(A(141)),
        userEn: en(A(141)),
        alts: [
          { fr: fr(A(146)), en: en(A(146)) },
          { fr: fr(A(132)), en: en(A(132)) },
        ],
      },
      {
        ai: fr(A(151)),
        en: en(A(151)),
        user: fr(A(152)),
        userEn: en(A(152)),
        alts: [
          { fr: 'Non, je vais chez Marie.', en: "No, I am going to Marie's." },
          { fr: 'Non, je vais chez le boulanger.', en: "No, I am going to the baker's." },
        ],
      },
      {
        ai: fr(A(153)),
        en: en(A(153)),
        user: fr(A(154)),
        userEn: en(A(154)),
        alts: [
          { fr: "D'accord, chez Marie.", en: 'All right, at Marie\'s.' },
          { fr: 'Oui, chez elle.', en: 'Yes, at her place.' },
        ],
      },
      {
        ai: 'Et le week-end, tu pars ?',
        en: 'And at the weekend, are you going away?',
        user: fr(A(131)),
        userEn: en(A(131)),
        alts: [
          { fr: fr(A(130)), en: en(A(130)) },
          { fr: fr(A(145)), en: en(A(145)) },
        ],
      },
    ],
    terms: ['chez', 'fourKinds', 'theArticle'],
  },

  {
    type: 'dictation',
    id: DICTATION_SECTION_ID,
    title: 'Spell What You Hear',
    frSub: 'La dictée',
    layer: 'core',
    // Every row here is in LETTERS mode through the REAL `dicteeMode`, checked
    // in the batch, the merge and the test. Word mode hands each real word over
    // pre-spelled, which for a lesson whose whole subject is a small word in
    // front of a noun would hand over the answer. Corrections §4.
    itemIds: DICTEE_IDS,
    say: 'Every line here is short enough to spell letter by letter. Five of them are the small word on its own with the place behind it, and those are the ones worth slowing down for.',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], maxPlays: 3, recordingId: 'rec-a2-04-dictee' },
    terms: ['chez', 'noArticle'],
  },

  {
    type: 'practice',
    id: SPEAK_SECTION_ID,
    title: 'Say It Out Loud',
    frSub: 'À voix haute',
    layer: 'core',
    // `speak`, NOT `write`. `practice` with skill 'write' draws no writing
    // surface at all. Every id here is an AUTHORED row and every authored row
    // carries `voiceflash`; the imported ones are a mixture, and a speak
    // mission naming one without the drill renders a card the mic cannot score.
    skill: 'speak',
    itemIds: SPEAK_IDS,
    terms: ['chez', 'fourKinds'],
  },

  {
    type: 'reviewDeck',
    id: REVIEW_SECTION_ID,
    title: 'The Whole Thing',
    frSub: 'Tout, en un paquet',
    layer: 'core',
    cards: [
      ...KIND_ORDER.map((k) => ({
        front: `${KIND_LABEL[k]} · which word?`,
        back: `${KIND_WORD[k]} · ${KIND_EXAMPLE[k]}`,
        say: fr(sortRow(k).id),
      })),
      { front: 'What does à do to the article?', back: ARTICLE_TABLE[0]!.detail, say: fr(A(132)) },
      { front: 'What does en do to it?', back: ARTICLE_TABLE[2]!.detail, say: fr(A(131)) },
      { front: 'What does chez do to it?', back: ARTICLE_TABLE[3]!.detail, say: fr(A(129)) },
      { front: 'The baker or the bakery?', back: SHOP_CLAIM, say: fr(A(140)) },
      { front: 'Why does à Paris have no article?', back: 'Because a town never had one. Nothing was dropped and nothing folded.', say: fr(A(130)) },
    ],
  },

  /* ── Act 6: prove it ─────────────────────────────────────────────────────*/

  {
    type: 'progressCheck',
    id: PROGRESS_SECTION_ID,
    title: 'Where You Stand',
    frSub: 'Où vous en êtes',
    layer: 'core',
    body: `${REFRAME} The exam has five rounds. One of them asks about four places this lesson never showed you, and that is the point rather than a cruelty: if the rule only works on the places you were given, it is a list.`,
    stats: [
      { k: 'Kinds of place', v: String(KIND_ORDER.length) },
      { k: 'New this lesson', v: '1. Chez.' },
      { k: 'New words to learn', v: '0. You had every noun already.' },
      { k: 'Asked by ear', v: NO_EAR_CLAIM },
    ],
  },

  {
    type: 'quiz',
    id: QUIZ_SECTION_ID,
    title: 'The Exam',
    frSub: 'L’examen',
    layer: 'core',
    passMark: 70,
    roundFailThreshold: 60,
    say: 'Five rounds of six. Miss too many in a round and you get a drill before the next one starts.',
    rounds: [
      {
        id: 'r1-which-kind',
        label: 'Which kind of place',
        // Round targets are ordered deliberately. drillForRound returns the
        // FIRST target that has a drill and then stops, so the first name here
        // is what a failing learner actually gets, and every round leads on a
        // DIFFERENT trigger. That is what makes all five drills reachable.
        targets: ['err-a-for-chez', 'err-chez-for-place'],
        say: 'Six on the sort. The place is in every question, because the place is what decides it.',
        questions: [
          {
            q: 'Vous allez voir le médecin. Which of these is French?',
            format: 'mcq',
            opts: [fr(A(129)), 'Je vais au médecin.', 'Je vais à le médecin.', 'Je vais en médecin.'],
            correct: 0,
            why: `${CHEZ_CLAIM} The other three are the three folds you were taught, running on a person.`,
            ref: FOUR_SECTION_ID,
          },
          {
            q: 'And the same errand at the hospital?',
            format: 'mcq',
            opts: ['chez l’hôpital', 'à l’hôpital', 'en hôpital', 'au hôpital'],
            correct: 1,
            why: 'A hospital is a building. It takes à, and à and l\' do not fold into anything.',
            ref: SHOP_SECTION_ID,
          },
          {
            q: `Je vais ___ Paris.`,
            format: 'typeIn',
            accept: ['à', 'a', fr(A(130))],
            answer: 'à',
            why: 'A town has no article, so nothing folds and nothing is thrown away. À goes straight on.',
            ref: CITY_SECTION_ID,
          },
          {
            q: 'Fix this.',
            format: 'errorSpot',
            prompt: 'Je vais chez la gare.',
            accept: [fr(A(146)), 'Je vais à la gare', 'à la gare'],
            answer: fr(A(146)),
            why: 'A station is a building and nobody lives in it. Chez needs a person.',
            ref: TRAP_SECTION_ID,
          },
          {
            q: 'Which one of these four is a person?',
            format: 'mcq',
            opts: ['la boulangerie', 'la pharmacie', 'le boulanger', 'la banque'],
            correct: 2,
            why: `${SHOP_CLAIM} Three shops and one man, and only the man takes chez.`,
            ref: SHOP_SECTION_ID,
          },
          {
            q: 'You are about to name a place and you have half a second. What do you ask yourself first?',
            format: 'mcq',
            // Hand-placed. `quiz-spread` caps any answer slot at 40% of the
            // closed questions and the first draft put eight of fourteen at
            // index 1.
            opts: [
              'What am I doing there',
              'Whether the verb is going or staying',
              'What kind of place it is',
              'Whether it is far away',
            ],
            correct: 2,
            why: `${REFRAME} ${THE_MOVE}`,
            ref: FOUR_SECTION_ID,
          },
        ],
      },
      {
        id: 'r2-the-article',
        label: 'What happens to the article',
        targets: ['err-fold-chez', 'err-keep-article'],
        say: 'Six on the Owns. Three things can happen to the article and there is no fourth.',
        questions: [
          {
            q: 'à + le marché',
            format: 'typeIn',
            accept: ['au marché', 'au marche', fr(A(132))],
            answer: 'au marché',
            why: `À and le fold into one word. ${Cap(unitRef(CONTRACTION_UNIT))} taught you this and it has not changed.`,
            ref: ARTICLE_SECTION_ID,
          },
          {
            q: 'chez + le médecin',
            format: 'typeIn',
            accept: [fr(A(133)), 'chez le medecin'],
            answer: fr(A(133)),
            why: NO_FOLD_CLAIM,
            ref: NOFOLD_SECTION_ID,
          },
          {
            q: 'Fix this.',
            format: 'errorSpot',
            prompt: 'Je vais en la France.',
            accept: [fr(A(131)), 'Je vais en France', 'en France'],
            answer: fr(A(131)),
            why: `En does not fold with the article, it gets rid of it. ${Cap(unitRef(COUNTRY_UNIT))} taught that and this is the same fact from the other side.`,
            ref: ARTICLE_SECTION_ID,
          },
          {
            q: 'Fix this.',
            format: 'errorSpot',
            prompt: 'Je vais chez au dentiste.',
            accept: ['Je vais chez la dentiste.', 'Je vais chez le dentiste.', fr(A(134)), 'chez le dentiste'],
            answer: 'Je vais chez le dentiste.',
            why: 'Two folds in one phrase, and chez does not do either of them. The article stays exactly as it was.',
            ref: FOLD_SECTION_ID,
          },
          {
            q: 'Which word gets rid of the article rather than doing something to it?',
            format: 'mcq',
            opts: ['à', 'de', 'en', 'chez'],
            correct: 2,
            why: ARTICLE_ARITHMETIC,
            ref: ARTICLE_SECTION_ID,
          },
          {
            q: 'de + le Japon',
            format: 'typeIn',
            accept: ['du Japon', 'du japon'],
            answer: 'du Japon',
            why: `The same fold coming back rather than going. ${Cap(unitRef(PARTITIVE_UNIT))} owns the other du, the one that means an amount.`,
            ref: ARTICLE_SECTION_ID,
          },
        ],
      },
      {
        id: 'r3-man-or-shop',
        label: 'The man or the shop',
        targets: ['err-chez-for-place', 'err-a-for-chez'],
        say: 'Six where English gives you one phrase and French wants two.',
        questions: [
          {
            q: 'You want bread. Which is French?',
            format: 'mcq',
            opts: ['chez la boulangerie', fr(A(137)), 'en la boulangerie', 'au boulangerie'],
            correct: 1,
            why: 'The shop is a building. If you meant the man it is chez le boulanger, and both of them are the same door.',
            ref: SHOP_SECTION_ID,
          },
          {
            q: 'And the man who baked it?',
            format: 'typeIn',
            accept: [fr(A(135)), 'chez le boulanger'],
            answer: fr(A(135)),
            why: 'A person, so chez, and the article stays where it was.',
            ref: SHOP_SECTION_ID,
          },
          {
            q: 'Fix this.',
            format: 'errorSpot',
            prompt: 'Je vais à le médecin.',
            accept: [fr(A(129)), 'chez le médecin', 'Je vais chez le médecin'],
            answer: fr(A(129)),
            why: 'This is the sentence the corridor stopped on, and the fold is not the problem: the word in front of it is.',
            ref: SCENE_SECTION_ID,
          },
          {
            q: 'Which of these four cannot follow chez?',
            format: 'mcq',
            opts: ['Marie', 'le dentiste', 'la pharmacie', 'mes parents'],
            correct: 2,
            why: `${CHEZ_CLAIM} A chemist's shop has no person in it as far as the grammar is concerned.`,
            ref: TRAP_SECTION_ID,
          },
          {
            q: 'Fix this.',
            format: 'errorSpot',
            prompt: 'Je vais chez la banque.',
            accept: ['Je vais à la banque.', 'à la banque', 'Je vais à la banque'],
            answer: 'Je vais à la banque.',
            why: 'A bank is a building. Nobody has ever gone chez la banque, and there is no person version of it either.',
            ref: ERRORS_SECTION_ID,
          },
          {
            q: 'Chez Marie has no article. Why?',
            format: 'mcq',
            opts: [
              'Because chez removes it',
              'Because Marie is feminine',
              'Because it comes after a verb',
              'Because a name never had one',
            ],
            correct: 3,
            why: 'Nothing was dropped. There was never an article on a name to begin with, which is why this row of the grid looks like the easiest and is the one people overthink.',
            ref: PERSON_SECTION_ID,
          },
        ],
      },
      {
        id: 'r4-say-it',
        label: 'Say the whole thing',
        targets: ['err-keep-article', 'err-fold-chez'],
        say: 'Six whole sentences. Every one of them is a place plus the word the place asked for.',
        questions: [
          {
            q: 'Say you are going to the market.',
            format: 'typeIn',
            accept: [fr(A(132)), 'Je vais au marché', 'au marché'],
            answer: fr(A(132)),
            why: 'Le marché, so à folds into it and you get au.',
            ref: BUILDING_SECTION_ID,
          },
          {
            q: 'Say you are going to France.',
            format: 'typeIn',
            accept: [fr(A(131)), 'Je vais en France', 'en France'],
            answer: fr(A(131)),
            why: 'La France has an article and en throws it away. There is no en la anything.',
            ref: COUNTRY_SECTION_ID,
          },
          {
            q: 'Say you are staying at your place.',
            format: 'typeIn',
            accept: [fr(A(141)), 'Je reste chez moi', 'chez moi'],
            answer: fr(A(141)),
            why: 'You are a person, which is why chez moi is the commonest one of all four kinds.',
            ref: PERSON_SECTION_ID,
          },
          {
            q: 'Which of these is a sentence a French speaker would say?',
            format: 'mcq',
            opts: [
              'Il est chez la maison.',
              importedFr('fr.a1.routines.067'),
              'Il est en la maison.',
              'Il est chez maison.',
            ],
            correct: 1,
            why: 'A house is a building here rather than a person. Chez moi is the version with a person in it, and it is a different sentence.',
            ref: BUILDING_SECTION_ID,
          },
          {
            q: 'Fix this.',
            format: 'errorSpot',
            prompt: 'On se retrouve à Marie.',
            accept: ['On se retrouve chez Marie.', 'chez Marie', fr(A(153)).replace(' ?', '.')],
            answer: 'On se retrouve chez Marie.',
            why: 'Marie is a person and à is for places. The name keeps its lack of an article either way.',
            ref: SCENARIO_SECTION_ID,
          },
          {
            q: 'Say you are going to the United States.',
            format: 'mcq',
            opts: [
              'Je vais en États-Unis.',
              'Je vais à les États-Unis.',
              'Je vais chez les États-Unis.',
              'Je vais aux États-Unis.',
            ],
            correct: 3,
            why: `À and les fold into aux, which is the third form of the same operation. ${Cap(unitRef(COUNTRY_UNIT))} taught the country and ${unitRef(CONTRACTION_UNIT)} taught the fold.`,
            ref: COUNTRY_SECTION_ID,
          },
        ],
      },
      {
        id: 'r5-unseen',
        label: 'Places nobody taught you',
        targets: ['err-en-for-city', 'err-a-for-chez'],
        say: 'Six, and four of them use places this lesson has never shown you. That is the whole difference between a rule and a list.',
        questions: [
          {
            q: `${UNSEEN[0]!.fr} · ${UNSEEN[0]!.en}. Where are you going?`,
            format: 'mcq',
            opts: [`à ${UNSEEN[0]!.fr}`, UNSEEN[0]!.answer, `au notaire`, `en notaire`],
            correct: 1,
            why: 'A solicitor is a person and you have never seen this word in this lesson. The rule did the work.',
            ref: UNSEEN_SECTION_ID,
          },
          {
            q: `${UNSEEN[1]!.fr} · ${UNSEEN[1]!.en}. Where are you going?`,
            format: 'mcq',
            opts: [`chez ${UNSEEN[1]!.fr}`, `en piscine`, UNSEEN[1]!.answer, `au piscine`],
            correct: 2,
            why: 'A swimming pool is a building and la does not fold with à.',
            ref: UNSEEN_SECTION_ID,
          },
          {
            q: `${UNSEEN[2]!.fr}. Where are you going?`,
            format: 'typeIn',
            accept: [UNSEEN[2]!.answer, 'a Marseille'],
            answer: UNSEEN[2]!.answer,
            why: 'A town, so à and nothing else. It has no article for anything to happen to.',
            ref: CITY_SECTION_ID,
          },
          {
            q: `${UNSEEN[3]!.fr} · ${UNSEEN[3]!.en}. Where are you going?`,
            format: 'mcq',
            opts: [UNSEEN[3]!.answer, 'en Portugal', 'à Portugal', 'chez le Portugal'],
            correct: 0,
            why: `A country with a le, so à folds into it. ${Cap(unitRef(COUNTRY_UNIT))} gave you the article and this lesson gave you the fold.`,
            ref: UNSEEN_SECTION_ID,
          },
          {
            q: 'Fix this.',
            format: 'errorSpot',
            prompt: 'Je vais en Marseille.',
            accept: ['Je vais à Marseille.', 'à Marseille', 'Je vais à Marseille'],
            answer: 'Je vais à Marseille.',
            why: 'En is for a country with an article on it. A town has neither.',
            ref: CITY_SECTION_ID,
          },
          {
            q: 'Somebody names a place you have never heard of. What do you need to know about it?',
            format: 'mcq',
            opts: [
              'Whether it is a person, a town, a country or a building',
              'Whether it is far',
              'Whether it is masculine',
              'Which verb you are using',
            ],
            correct: 0,
            why: `${THE_MOVE} The gender only matters once you know it is a country, which is ${unitRef(COUNTRY_UNIT, 'a2')}'s half.`,
            ref: UNSEEN_SECTION_ID,
          },
        ],
      },
    ],
  },

  {
    type: 'roundup',
    id: ROUNDUP_SECTION_ID,
    title: 'What You Can Do Now',
    frSub: 'Ce que vous savez faire',
    layer: 'core',
    body: CARRY_FORWARD,
    points: [
      SORT_ARITHMETIC,
      ARTICLE_ARITHMETIC,
      CHEZ_ARITHMETIC,
      SHOP_CLAIM,
      OWED_CLAIM,
      `${Cap(unitRef(CONTRACTION_UNIT))} owns sur, sous, dans, devant and derrière, and this lesson has not touched one of them.`,
      NEXT_LESSON_LINE,
      DOCTOR_LINE,
    ],
    terms: ['notYet', 'fourKinds', 'chez'],
  },
];

/* ─── Acts ─────────────────────────────────────────────────────────────── */

const ACTS: LessonAct[] = [
  {
    id: 'act1',
    title: 'The word that stopped it',
    sections: [SCENE_SECTION_ID, GOALS_SECTION_ID, FOUR_SECTION_ID],
    milestone: 'You know what stopped the sentence, and it was not a word you had never learned.',
    estScreens: 18,
    restPoints: [`${SCENE_SECTION_ID}/after-break`],
  },
  {
    id: 'act2',
    title: 'What it does to the article',
    sections: [ARTICLE_SECTION_ID, PAYOFF_SECTION_ID, NOFOLD_SECTION_ID, FOLD_SECTION_ID],
    milestone: 'You know the three things a place word can do to an article, and you know which one of them chez does.',
    estScreens: 30,
    restPoints: [`${ARTICLE_SECTION_ID}/after`, `${FOLD_SECTION_ID}/after`],
  },
  {
    id: 'act3',
    title: 'Chez',
    sections: [PERSON_SECTION_ID, PEOPLE_SECTION_ID, SHOP_SECTION_ID, TRAP_SECTION_ID, ERRORS_SECTION_ID, READING_SECTION_ID],
    milestone: 'You can put chez in front of anybody, you will not put it in front of a building, and you can tell the baker from the bakery.',
    estScreens: 52,
    restPoints: [`${PEOPLE_SECTION_ID}/after`, `${SHOP_SECTION_ID}/after`, `${TRAP_SECTION_ID}/after`],
  },
  {
    id: 'act4',
    title: 'The other three kinds',
    sections: [CITY_SECTION_ID, COUNTRY_SECTION_ID, BUILDING_SECTION_ID, UNSEEN_SECTION_ID],
    milestone: 'You can answer for a town, a country and a building, including four the lesson never showed you.',
    estScreens: 34,
    restPoints: [`${COUNTRY_SECTION_ID}/after`],
  },
  {
    id: 'act5',
    title: 'Out loud',
    sections: [SCENARIO_SECTION_ID, DICTATION_SECTION_ID, SPEAK_SECTION_ID, REVIEW_SECTION_ID],
    milestone: 'You held the conversation the corridor lost, and every answer in it wanted a decision you made before the verb finished.',
    estScreens: 38,
    restPoints: [`${SCENARIO_SECTION_ID}/after`, `${DICTATION_SECTION_ID}/halfway`],
  },
  {
    id: 'act6',
    title: 'Prove it',
    sections: [PROGRESS_SECTION_ID, QUIZ_SECTION_ID, ROUNDUP_SECTION_ID],
    milestone: 'You answered for four places this lesson never listed, which is the half of it a list could never have taught you.',
    estScreens: 38,
    restPoints: [`${QUIZ_SECTION_ID}/r3-man-or-shop`],
  },
];

/* ─── Deck tranches ────────────────────────────────────────────────────────
 *
 * A tranche releases items into spaced repetition at the END of an act, and
 * nothing may be released before the act that puts it on a screen.            */

const DECK_TRANCHE: string[][] = [
  // Act 1: the four sort rows, which the grid has just shown.
  [A(129), A(130), A(131), A(132)],
  // Act 2: the preposition itself, the fold pair and the two à phrases the
  // payoff screen draws.
  ['fr.sons.muettes.009', A(133), A(134), A(145), 'fr.a1.routines.063', 'fr.a1.routines.064'],
  // Act 3: chez, in full. The six imported chez phrases, the four sentences and
  // this lesson's own pronoun and shop rows.
  //
  // THE SIX PEOPLE ARE NOT HERE. `le médecin`, `le dentiste`, `boulanger`,
  // `le vétérinaire`, `le copain` and `la tante` are gendered single-word nouns
  // and a tranche releases an item, which means carrying it through the seed
  // cut, which puts it in a1.03's measured ending population. They are printed
  // on the cards and owned by nobody here. See DISPLAY_ONLY_IDS.
  [
    'fr.a1.pronoms-essentiels.075', 'fr.a2.pronoms-essentiels.055',
    'fr.a1.amis.030', 'fr.a1.amis.059', 'fr.a1.animaux-domestiques.130',
    'fr.a1.verbes-essentiels.026', 'fr.sons.nasales.157', 'fr.sons.voyelles.449',
    'fr.a1.famille.124', 'fr.a1.famille.125', 'fr.a1.famille.126',
    A(141), A(142), A(143), A(144),
    A(135), A(137), A(138), A(139), A(140),
  ],
  // Act 4: the towns, the plural country and the two building sentences. The
  // seven building NOUNS and the two singular countries are display rows for
  // the same reason as the six people.
  [
    'fr.sons.muettes.004', 'fr.sons.elision.029', 'fr.sons.elision.062', 'fr.a2.verbes.285',
    'fr.a1.pays-et-nationalites.011', 'fr.sons.nasales.029',
    'fr.a1.routines.067', 'fr.a2.verbes.261',
    A(146), A(147),
  ],
  // Act 5: the scene rows and the conversation, which the role play has used.
  [A(148), A(149), A(150), A(151), A(152), A(153), A(154)],
  [],
];

/* ─── Error triggers and their drills ──────────────────────────────────────
 *
 * FIVE triggers, five drills, five retests, five rounds, and each round leads
 * on a DIFFERENT trigger. `drillForRound` fires the drill of the FIRST
 * resolving target only and then stops, so a drill never named first can never
 * fire. a1.05 shipped two such drills and a1.07's first draft a third.        */

const ERROR_TRIGGERS: ErrorTrigger[] = [
  {
    id: 'err-a-for-chez',
    description: `Uses à, au or aux in front of a person, because every place the learner has ever been taught took one of those. It is not a slip: it is ${unitRef('a1.21')} working exactly as taught, on the one kind of place ${unitRef('a1.21')} never covered, and it is the error the scene opens on.`,
    detectOn: [FOUR_SECTION_ID, TRAP_SECTION_ID, `${QUIZ_SECTION_ID}/r1-which-kind`],
    drill: 'drill-who-not-where',
    retest: 'retest-who-not-where',
  },
  {
    id: 'err-chez-for-place',
    description: 'Uses chez in front of a building, usually the shop belonging to a person the learner has just met. The corpus has never done it once in 283 rows and learners do it constantly, because English says the baker\'s for both.',
    detectOn: [SHOP_SECTION_ID, TRAP_SECTION_ID, `${QUIZ_SECTION_ID}/r3-man-or-shop`],
    drill: 'drill-man-or-shop',
    retest: 'retest-man-or-shop',
  },
  {
    id: 'err-fold-chez',
    description: `Folds the article after chez, producing chez au or chez du. A learner who does this has ${unitRef('a1.21')}\'s contraction rule and is applying it to the one word in the language that does not take it.`,
    detectOn: [NOFOLD_SECTION_ID, FOLD_SECTION_ID, `${QUIZ_SECTION_ID}/r2-the-article`],
    drill: 'drill-no-fold',
    retest: 'retest-no-fold',
  },
  {
    id: 'err-keep-article',
    description: 'Keeps the article after en, producing en la France. The mirror image of the one above: en is the only one of the four that removes the article rather than doing something to it, and a learner who has learned to fold expects something to be left.',
    detectOn: [ARTICLE_SECTION_ID, COUNTRY_SECTION_ID, `${QUIZ_SECTION_ID}/r4-say-it`],
    drill: 'drill-nothing-left',
    retest: 'retest-nothing-left',
  },
  {
    id: 'err-en-for-city',
    description: 'Puts en in front of a town or à in front of a country, which is the two rows of the grid that look alike being swapped. Both have a proper name and only one of them has an article, and that is the only difference between them.',
    detectOn: [CITY_SECTION_ID, UNSEEN_SECTION_ID, `${QUIZ_SECTION_ID}/r5-unseen`],
    drill: 'drill-town-or-country',
    retest: 'retest-town-or-country',
  },
];

/* A `LessonDrill` is `sort` with buckets and ITEM IDS, `flashcard` with pairs,
 * or a one-question `mcq` with `q`/`opts`/`correct`/`why`. `items` is a list of
 * corpus ids and NOT a list of questions: a drill scores against the corpus, so
 * it plays the same audio and reads the same spelling as every card that taught
 * the row. Passing display strings there validates as broken ids.             */

const DRILLS = [
  {
    id: 'drill-who-not-where',
    title: 'Who, not where',
    format: 'sort' as const,
    buckets: ['a person', 'a place'],
    items: [A(133), A(136), A(135), A(137), A(146), A(132)],
    coach: `${CHEZ_CLAIM} Read the word after the small one before you sort it. If it is somebody, the answer is chez and nothing else will do.`,
  },
  {
    id: 'retest-who-not-where',
    title: 'One more time',
    format: 'mcq' as const,
    q: 'Je vais ___ le dentiste.',
    opts: ['au', 'chez', 'à'],
    correct: 1,
    why: 'A person, so chez, and the le stays exactly where it was.',
  },
  {
    id: 'drill-man-or-shop',
    title: 'The man or the shop',
    format: 'flashcard' as const,
    coach: `${SHOP_CLAIM} The person is on the front. Say the place out loud before you turn it over.`,
    pairs: [
      ['le boulanger', 'chez le boulanger'],
      ['la boulangerie', 'à la boulangerie'],
      ['le médecin', 'chez le médecin'],
      ["l'hôpital", "à l'hôpital"],
    ] as [string, string][],
  },
  {
    id: 'retest-man-or-shop',
    title: 'One more time',
    format: 'mcq' as const,
    q: 'You want to go to the bank.',
    opts: ['chez la banque', 'à la banque', 'en banque'],
    correct: 1,
    why: 'A building, and nobody says the first one. There is no person version of a bank.',
  },
  {
    id: 'drill-no-fold',
    title: 'Nothing folds after chez',
    format: 'flashcard' as const,
    coach: NO_FOLD_CLAIM,
    pairs: [
      ['à + le marché', 'au marché'],
      ['de + le Japon', 'du Japon'],
      ['chez + le médecin', 'chez le médecin'],
      ['chez + la dentiste', 'chez la dentiste'],
    ] as [string, string][],
  },
  {
    id: 'retest-no-fold',
    title: 'One more time',
    format: 'mcq' as const,
    q: 'chez + le dentiste',
    opts: ['chez au dentiste', 'chez le dentiste', 'chez du dentiste'],
    correct: 1,
    why: 'Chez leaves it alone. Two words on the page and two words in the mouth.',
  },
  {
    id: 'drill-nothing-left',
    title: 'En leaves nothing behind',
    format: 'flashcard' as const,
    coach: `En is the only one of the four that gets rid of the article rather than doing something to it. ${A122_REFRAME}`,
    pairs: [
      ['la France', 'en France'],
      ['le Japon', 'au Japon'],
      ['les États-Unis', 'aux États-Unis'],
      ['le marché', 'au marché'],
    ] as [string, string][],
  },
  {
    id: 'retest-nothing-left',
    title: 'One more time',
    format: 'mcq' as const,
    q: 'Je vais ___ France.',
    opts: ['en', 'à la', 'en la'],
    correct: 0,
    why: 'A country with an article, so en, and the article goes rather than folding.',
  },
  {
    id: 'drill-town-or-country',
    title: 'A town or a country',
    format: 'flashcard' as const,
    coach: 'They look alike and one of them has an article. That is the only difference and it decides the whole thing.',
    pairs: [
      ['Paris', 'à Paris'],
      ['Lyon', 'à Lyon'],
      ['la France', 'en France'],
      ['le Japon', 'au Japon'],
    ] as [string, string][],
  },
  {
    id: 'retest-town-or-country',
    title: 'One more time',
    format: 'mcq' as const,
    q: 'Je vais ___ Lyon.',
    opts: ['à', 'en', 'au'],
    correct: 0,
    why: 'A town, and a town has no article for anything to happen to.',
  },
];

/* ─── The reference sheet ──────────────────────────────────────────────────
 *
 * NO `cheatSheet`. ReferenceSheet.tsx draws `teach`, `letterGrid` and `table`
 * and nothing else, so a cheatSheet here would render its title and nothing
 * under it. a1.13 ships exactly that today.
 *
 * A `sheetId` resolves ONLY inside the lesson that declares it (schema.ts:3490,
 * lesson-contract.test.ts:91), so this cannot link a1.21's or a1.22's. What it
 * holds that neither of them could is the FOUR ROWS AT ONCE, which is the whole
 * reason the lesson exists.
 *
 * Four columns at most: a2.03's device pass found a five-column table inside a
 * sheet clipping at the right edge.                                          */

const SHEETS: ReferenceSheet[] = [
  {
    id: SHEET_ID,
    title: 'Four kinds of place, and what each word does to the article',
    layer: 'deep',
    contains: ['The four kinds', 'What happens to the article', 'Going and coming back', 'Chez'],
    sections: [
      /* THREE COLUMNS, AND BOTH OF THESE WERE FOUR UNTIL A DEVICE SAW THEM.
         a2.03's device pass recorded that a FIVE-column table inside a sheet
         clips at the right edge and scrolls horizontally per table, and this
         build read that as four being safe. It is not: on a Pixel 6 the fourth
         column of both tables was cut off (`TAU…`, `+ LE`, `aux`, `des`, and
         `a1.2…`), and scrolling to reach it pushed the FIRST column off the
         other side, so the two things a lookup exists to be read against each
         other were never on screen together.

         The fourth column of each is now a `teach` line underneath, which is
         the only shape a sheet has that cannot clip. */
      {
        type: 'table',
        id: 'sheet-kinds',
        title: 'The four kinds',
        layer: 'deep',
        cols: ['The place', 'The word', 'Example'],
        rows: KIND_ORDER.map((k) => [KIND_LABEL[k], KIND_WORD[k], KIND_EXAMPLE[k]]),
      },
      {
        type: 'teach',
        id: 'sheet-who-taught',
        title: 'Where each row came from',
        layer: 'deep',
        body: `${KIND_ORDER.map((k) => `${KIND_LABEL[k]} is ${KIND_OWNER[k] ? unitRef(KIND_OWNER[k]!) : 'this lesson'}`).join(', ')}. ${OWED_CLAIM}`,
      },
      {
        type: 'table',
        id: 'sheet-article',
        title: 'What happens to the article',
        layer: 'deep',
        cols: ['Word', '+ le', '+ la'],
        rows: ARTICLE_TABLE.map((r) => [r.word, r.withLe, r.withLa]),
      },
      {
        type: 'teach',
        id: 'sheet-plural',
        title: 'And with les',
        layer: 'deep',
        body: 'À and les give aux, de and les give des, en still gives en, and chez still gives chez les. The plural changes nothing about which of the three things happens.',
      },
      {
        type: 'table',
        id: 'sheet-both-ways',
        title: 'Going and coming back',
        layer: 'deep',
        cols: ['The place', 'Going', 'Coming from'],
        rows: [
          ['Marie', 'chez Marie', 'de chez Marie'],
          ['Paris', 'à Paris', 'de Paris'],
          ['la France', 'en France', 'de France'],
          ['le Japon', 'au Japon', 'du Japon'],
          ['le marché', 'au marché', 'du marché'],
          ['la gare', 'à la gare', 'de la gare'],
        ],
      },
      {
        type: 'teach',
        id: 'sheet-chez',
        title: 'Chez',
        layer: 'deep',
        body: `${CHEZ_ARITHMETIC} ${NO_FOLD_CLAIM} ${SHOP_CLAIM}`,
      },
      {
        type: 'teach',
        id: 'sheet-carries-forward',
        title: 'What carries forward',
        layer: 'deep',
        body: `${CARRY_FORWARD} ${OWED_CLAIM} ${NEXT_LESSON_LINE}`,
      },
    ],
  },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  THE LESSON
 * ═══════════════════════════════════════════════════════════════════════ */

export const PREPOSITIONS_LIEU_LESSON: Lesson = {
  id: LESSON_ID,
  unitId: UNIT.id,
  // The lesson's index WITHIN its unit, not its place on the trail.
  seq: 1,
  title: UNIT.sub,
  level: 'a2',
  // missions.ts derives the eyebrow from unit.seq at render time
  // (`${level} · LEÇON ${String(unit.seq).padStart(2, '0')}`) and a2.04 sits at
  // seq 13. The stored value is a fallback and has to agree with what the
  // renderer computes; the batch checks it against the live unit.
  tag: `A2 · LEÇON ${String(UNIT.seq).padStart(2, '0')}`,
  // `intro` IS A LEARNER SURFACE. It is drawn on the lesson overview card AND on
  // the lesson cover, and a2.11 shipped grammar jargon here in v1 because every
  // guard in the band walked `sections`, `sheets` and `terms` and not this. The
  // walk in the batch, the merge and the test includes `intro` and `overview`,
  // and this field is pinned by its own assertion.
  intro:
    'French has four small words for where somebody is or where they are going, and which one you use is decided by the place rather than by you. A town, a country, a building, a person: ask which of those four you are looking at and the word is already chosen. Three of the four you have met before without being told they were the same question. The fourth is chez, it takes a person and never a place, and English has nothing like it.',

  sections: SECTIONS,
  itemIds: ITEM_IDS,
  // v3: BOTH FOUR-COLUMN SHEET TABLES BECAME THREE COLUMNS, and the fourth
  // column of each is a `teach` line underneath.
  //
  // FOUND ON A PIXEL 6 AND BY NOTHING ELSE. a2.03's device pass recorded that a
  // FIVE-column table inside a reference sheet clips at the right edge, and this
  // build read four as safe on that authority and guarded it at four. Measured:
  // four clips too. `TAUGHT IN` rendered as `TAU…` with `a1.2…` under it and
  // `+ LES` as `+ LE` with `aux` and `des` cut, and the table does scroll
  // horizontally, which pushes the FIRST column off the other side. A lookup
  // whose two halves are never on screen together is not a lookup.
  //
  // v2: THE FIFTEEN GENDERED NOUNS CAME OUT OF `itemIds` AND OUT OF THE
  // TRANCHES, so 63 items became 48.
  //
  // v1 declared them, the merge carried them through the seed cut, and NINE of
  // them were absent from the seed and joined a1.03's measured ending
  // population the moment they arrived. Four of a1.03's printed figures moved
  // (-e 904 to 909, -in 45 to 47, -ant 18 to 19, -al 11 to 12) and
  // `a1-22-pays.test.ts` went red on the first full-suite run after the merge.
  //
  // Every host-side gate was green before that. The batch runs the REAL
  // `endingPopulation` and reported it unchanged, and it was right: in POSTGRES
  // those rows already exist, so importing them adds nothing. a1.03 measures
  // the population off THE SEED, and a CARRY is what puts a row into the seed.
  // No document in this band says so, because no A2 lesson before this one
  // imported a gendered noun.
  //
  // The counter moves rather than the body being corrected under v1: Postgres
  // held v1 with 63 itemIds and the seed would have held v1 with 48, which is
  // exactly the drift ledger §10 exists to prevent. a2.09 set the precedent of
  // moving it rather than relaxing the guard that caught it.
  version: 3,

  grammarAssumed: [
    'The definite article and its four forms, introduced in a1.04',
    'Noun gender, and that the article carries it, introduced in a1.03',
    'The prepositions of place sur, sous, dans, devant and derrière, introduced in a1.21',
    'The contraction of à and de with the definite article, including the two forms that do not contract, introduced in a1.21',
    'en, au and aux with a country name, selected by gender and number, introduced in a1.22',
    'de, du and des with a country name, introduced in a1.22',
    'The partitive du, de la and de l\', and the test that separates it from the locative du, introduced in a1.29',
    'aller and venir in the present, introduced in a2.02',
  ],
  grammarIntroduced: [
    'chez as a preposition taking an exclusively animate complement, drilled rather than named',
    'That chez is the only locative preposition in the language which neither contracts with nor suppresses a following definite article',
    'The unification of the à-contraction of a1.21 with the au and aux of a1.22 as one operation rather than two rules, so that au Japon is analysed as à plus le Japon',
    'The three-way opposition of article behaviour: contraction under à and de, suppression under en, and preservation under chez',
    'A four-way categorisation of the complement (person, city, country, common noun) as the sole selector of the locative preposition, applied productively to complements not presented in the lesson',
    'The lexical opposition between an agent noun and its place of business, which English neutralises, and the different prepositions the two require',
    'That a bare toponym takes à with no article, and that the absence is lexical rather than the result of a suppression rule',
  ],

  features: ['roleplay', 'voiceflash'],
  scenarioId: undefined,

  overview: {
    titleEn: UNIT.title,
    subFr: UNIT.sub,
    introFr: 'Quatre sortes de lieu, quatre petits mots, et c’est le lieu qui choisit.',
    minutes: 30,
    difficulty: 3,
    glyph: '🚪',
    screens: 210,
  },

  acts: ACTS,
  reframe: REFRAME,
  errorTriggers: ERROR_TRIGGERS,
  drills: DRILLS,
  sheets: SHEETS,
  deckTranche: DECK_TRANCHE,
  terms: PREPOSITIONS_LIEU_TERMS,

  audio: {
    defaultLang: 'fr-FR',
    speeds: [1.0, 0.65],
    coachVoice: 'coach-en-warm',
    interfaceSounds: ['correct', 'incorrect', 'checkpoint'],
    // ── The audio decisions that cannot be recovered later ─────────────────
    //
    // Written here AND pinned by a2-04-prepositions-lieu.test.ts, because a
    // constraint on how something is recorded becomes invisible the moment the
    // clip is delivered. Invariants §10: anything the learner must hear as a
    // CONTRAST is ONE TAKE with one voice, because two recordings are two
    // performances and the learner will hear the performance rather than the
    // language.
    //
    // Briefs only. Do NOT run pnpm audio:render: it spends real ElevenLabs
    // credits and ELEVENLABS_API_KEY is not set in ealch-admin/.env in any case.
    recorded: [
      {
        id: 'rec-a2-04-four',
        desc:
          'THE FOUR KINDS, ONE TAKE, ONE VOICE, IN THE ORDER THE GRID PRINTS THEM AND WITH NO GAP BETWEEN THEM: '
          + '« Je vais chez le médecin. », « Je vais à Paris. », « Je vais en France. », « Je vais au marché. » '
          + 'The claim the whole grid rests on is that these are four answers to ONE question, and four separate '
          + 'recordings are four performances: a reader who records them apart will give each one its own shape '
          + 'and the learner will hear four different sentences instead of one sentence with four endings. '
          + 'THE FIRST THREE WORDS OF ALL FOUR MUST BE IDENTICAL. « Je vais » is the constant and the only thing '
          + 'allowed to move is what comes after it. '
          + 'KEEP EVERY NASAL CLOSED: France is /fʁɑ̃s/ with no n sound behind the vowel, médecin ends /sɛ̃/ with '
          + 'none either, and a reader who lets an n out of either is teaching a sound the language does not have.',
        clipIds: KIND_ORDER.map((k) => fr(sortRow(k).id)),
      },
      {
        id: 'rec-a2-04-fold',
        desc:
          'THE AUDIO STEP OF THE FOLD DRILL, THREE LINES, ONE TAKE: « Je vais au marché. », « Je vais au Japon. », '
          + '« Je vais chez le médecin. » The first two are one word where the page had two and the third is two '
          + 'words that stay two, and THE WHOLE VALUE OF THE TAKE IS THAT THE THIRD ONE HAS A GAP THE FIRST TWO DO '
          + 'NOT. Do not exaggerate it and do not close it: read all three at ordinary conversational pace and let '
          + 'the difference be whatever it naturally is, which is a real and audible thing. '
          + 'A reader who separates « chez » and « le » with a pause is teaching that the phrase is hesitant, and '
          + 'a reader who runs them together is teaching that it folds. Neither is true.',
        clipIds: [fr(A(132)), fr(A(145)), fr(A(129))],
      },
      {
        id: 'rec-a2-04-trap',
        desc:
          'THE AUDIO STEP OF THE CHEZ TRAP, AND IT IS THE ONLY WRONG-THEN-RIGHT TAKE IN THIS LESSON. '
          + '« chez la boulangerie » then « à la boulangerie » then « chez le boulanger », one take, in that order. '
          + 'READ THE WRONG ONE PLAINLY AND AT ORDINARY PACE rather than comically or hesitantly: it is perfectly '
          + 'pronounceable, it sounds completely ordinary, and that is exactly why learners keep saying it. A '
          + 'reading that signals the error teaches that the error is audible, and it is not. '
          + 'The two right versions must sound like two ordinary things somebody would say on the same morning, '
          + 'because they are, and because the point of the pair is that they are not alternatives for one slot: '
          + 'they are two different places to be going. '
          + 'Also in this take, each whole: « chez le médecin », « chez la dentiste », « chez Marie », '
          + '« à l’hôpital ».',
        clipIds: [
          CHEZ_WRONG[0]!.wrong, CHEZ_WRONG[0]!.place, CHEZ_WRONG[0]!.person,
          fr(A(133)), fr(A(134)), fr(A(136)), 'à l’hôpital',
        ],
      },
      {
        id: 'rec-a2-04-scene',
        desc:
          'THE CORRIDOR IN NANTES. She has a coffee in each hand, she is friendly and slightly in a hurry, and '
          + 'her question is small talk rather than a request for information. '
          + 'THE LEARNER\'S OWN LINE IS THE TAKE THAT HAS TO BE RIGHT: « Je vais... euh... à le médecin... au '
          + 'médecin... » is somebody trying two forms of a rule they were taught, hearing that neither of them '
          + 'is what people say, and running out of sentence. It must sound like a correction beginning rather '
          + 'than like a forgotten word, and the difference is audible: the first two attempts should be '
          + 'confident and the stall should come after them, not before. '
          + 'HER RECOVERY LINE IS THE EXPENSIVE ONE. « Ah, chez le médecin. Rien de grave ? » is her supplying '
          + 'the word without noticing she has supplied it, and moving straight on to something else. Any hint '
          + 'of correction, emphasis or kindness-about-a-mistake in that line turns the scene into a telling-off '
          + 'and loses the whole point, which is that nothing visibly went wrong.',
        clipIds: [fr(A(148)), 'Je vais... euh... à le médecin... au médecin...', fr(A(149)), fr(A(150))],
      },
      {
        id: 'rec-a2-04-shop',
        desc:
          'THE MAN AND THE SHOP, ADJACENT, ONE TAKE, AND THEY MUST SOUND EQUALLY ORDINARY. '
          + '« Je vais chez le boulanger. » then « Je vais à la boulangerie. » then « C\'est la même porte. » '
          + 'Both of the first two are things people say every day and neither is more careful or more formal '
          + 'than the other, so any difference in weight between them teaches a distinction the language does '
          + 'not make. The third line is the punchline and should be read flatly, as a fact rather than as a '
          + 'joke. '
          + 'NOTE ON « même »: it is /mɛm/ with a real m and no nasal vowel at all. The app respells it `mem` '
          + 'deliberately rather than `MEHM`, and a reader who nasalises it is saying a different word.',
        clipIds: [fr(A(138)), fr(A(139)), fr(A(140))],
      },
      {
        id: 'rec-a2-04-people',
        desc:
          'THE SIX PEOPLE AND THE FIVE PHRASES, ONE TAKE, EVEN PACE, READ AS A LIST. '
          + 'le médecin, le dentiste, boulanger, le vétérinaire, le copain, la tante, then chez toi, chez nous, '
          + 'Bienvenue chez moi, passer chez quelqu\'un, aller chez le vétérinaire. '
          + 'EVERY ARTICLE IS ATTACHED AND NONE IS SEPARATED BY A PAUSE, because the learner is being asked to '
          + 'notice that chez does NOT take the article away, and a gap between chez and le would suggest the '
          + 'two words are being held apart on purpose. They are simply two words. '
          + 'THE VOWEL AT THE END OF « médecin » IS /ɛ̃/ AND THE APP WRITES IT EHⁿ, matching three published '
          + 'rows in the sons themes. Read it through the nose with no n behind it.',
        clipIds: [
          importedFr('fr.a2.systeme-de-sante.001'), importedFr('fr.a2.systeme-de-sante.042'),
          importedFr('fr.sons.muettes.038'), importedFr('fr.a1.animaux-domestiques.108'),
          importedFr('fr.a1.amis.011'), importedFr('fr.a1.famille.025'),
          importedFr('fr.a1.pronoms-essentiels.075'), importedFr('fr.a2.pronoms-essentiels.055'),
          importedFr('fr.a1.amis.030'), importedFr('fr.a1.amis.059'),
          importedFr('fr.a1.animaux-domestiques.130'),
        ],
      },
      {
        id: 'rec-a2-04-dictee',
        desc:
          'THE DICTÉE LINES, ONE TAKE EACH, CLEAN AND UNHURRIED, WITH NO CONTRAST INTENT AT ALL. This is the '
          + 'opposite instruction to every other take in this lesson: here the learner is spelling rather than '
          + 'comparing, and any pair-reading would hand them the answer. Read each line as though it were the '
          + 'only line. '
          + 'FIVE OF THEM ARE THE SMALL WORD PLUS A PLACE AND NOTHING ELSE, and those five matter most: the '
          + 'learner has to hear where one word ends and the next begins, so do not run « chez le » together '
          + 'into a single syllable and do not put a gap in it either. Say it the way somebody would say it.',
        clipIds: DICTEE_IDS.map((id) => fr(id)),
      },
      {
        id: 'rec-a2-04-talk',
        desc:
          'THE CONVERSATION, HER LINES ONLY, ONE TAKE, AS ONE CONTINUOUS EXCHANGE RATHER THAN AS SIX SEPARATE '
          + 'PROMPTS. She is the same colleague from the corridor a week later, she has more time, and she is '
          + 'enjoying the conversation. « Tu es chez toi ce soir ? » and « On se retrouve chez Marie ? » both '
          + 'use the word the learner has just spent half an hour on, and NEITHER MAY BE STRESSED: she is not '
          + 'testing anybody, and a lift on chez would turn a conversation into an exercise. '
          + 'Read « Et le week-end, tu pars ? » with genuine curiosity, because it is the turn where the learner '
          + 'gets to choose between three kinds of place and any of the three is a real answer.',
        clipIds: [fr(A(151)), fr(A(153)), 'Ah bon ? Rien de grave ?', 'Et après, tu rentres ?', 'Et le week-end, tu pars ?'],
      },
    ],
    ambienceDefault: 'off',
  },
};

/* ─── Arrays the guards read, exported at the FOOT of the file ─────────────
 *
 * These are reads off consts declared above, so they cannot live in the export
 * block near the top: `export const X = SPEAK_IDS` before SPEAK_IDS is declared
 * is a temporal dead zone and throws at import time rather than failing to
 * compile. The section ids up there are literals for exactly that reason.     */

export const PREPOSITIONS_LIEU_ITEM_IDS = ITEM_IDS;
export const PREPOSITIONS_LIEU_DICTEE_IDS = DICTEE_IDS;
export const PREPOSITIONS_LIEU_SPEAK_IDS = SPEAK_IDS;
export const PREPOSITIONS_LIEU_SECTIONS = SECTIONS;
export const PREPOSITIONS_LIEU_ACTS = ACTS;
export const PREPOSITIONS_LIEU_TRANCHES = DECK_TRANCHE;
export const PREPOSITIONS_LIEU_SHEETS = SHEETS;
export const PREPOSITIONS_LIEU_DRILLS = DRILLS;
export const PREPOSITIONS_LIEU_ERROR_TRIGGERS = ERROR_TRIGGERS;
export const PREPOSITIONS_LIEU_SCENE_BEATS = SCENE_BEATS;

/** The sections in which a wrong form may legally appear. Every other string in
 *  the lesson, and the sheet, the terms, the intro and the overview, is checked
 *  against CHEZ_WRONG and CHEZ_FOLD_WRONG and must not contain one.
 *
 *  THE SCENE IS ON THIS LIST AND IT HAS TO BE. Its break card is a wrong/right
 *  contrast and the learner's own stalling line is « à le médecin... au
 *  médecin... », which is the error the whole lesson exists to fix. A guard that
 *  refused it there would forbid the lesson from showing what went wrong. */
export const WRONG_FORM_SECTIONS = [
  SCENE_SECTION_ID, FOLD_SECTION_ID, TRAP_SECTION_ID, ERRORS_SECTION_ID,
  // THE GENERALISATION DRILL IS ON THE LIST, and it was added by the shape
  // guard rather than by anybody predicting it: every group offers « chez » in
  // front of its place as the distractor, which is the whole question. A drill
  // option is a place where the error is the content, exactly like a trap card.
  UNSEEN_SECTION_ID,
  QUIZ_SECTION_ID,
] as const;
