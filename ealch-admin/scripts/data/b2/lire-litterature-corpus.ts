// b2.30.l1 « Lire un texte littéraire »: the authored corpus, the imports,
// the texts, the quotations and the citation constants. DRAFT, to
// B1-WORKSHOP-AND-VOCAB-SHAPES.md §1 (the workshop shape: a TEXT and a MOVE
// per act) on top of B1-BUILD-PLAYBOOK.md, with the B2 rules of
// B2-BUILD-LOG.md (« Reading at B2 », « What is different at B2 »).
//
// DRAFT. Nothing here is imported into Postgres or merged into seed.json.
//
// STABLE EXPORTS (later lessons may import REFRAME from this file and quote
// it; do not rename): REFRAME, REFRAME_EN, UNIT, LESSON_ID, THEME, LEVEL, E,
// ALL_ROWS, ROWS_BY_ACT, IMPORTED, IMPORT_IDS, Cap, refFr.
//
// ══════════════════════════════════════════════════════════════════════════
//  WHAT THIS UNIT OWNS: lesson 30 of the B2 trail, the first of Unit 6
// ══════════════════════════════════════════════════════════════════════════
//
//   READING A LITERARY TEXT AT B2, AND WRITING ABOUT IT.
//
//     act 1   the problem: a first-person narrator taken for the author
//     act 2   author and narrator; first and third person; the narrator who
//             is the hero, the witness, or outside the story; autobiography
//     act 3   focalisation: internal, external, zero (omniscient)
//     act 4   time in narration: foreground and background (lessons 8 in
//             B2 and 3 in B1, applied), présent de narration, analepse
//             (lesson 1 in B2, applied), ellipse, scène vs sommaire
//     act 5   reported words and thoughts: direct, indirect (lesson 19 in
//             B1, applied), and RECOGNISING the style indirect libre
//     act 6   tonalité: comique, ironique, lyrique, pathétique, dramatique,
//             neutre, and HOW each is produced (words, sentence length,
//             repetition, the gap between style and situation)
//     act 7   images: comparaison, métaphore (and filée), personnification,
//             always with the EFFECT named
//     act 8   description and portrait: order, detail, function (the
//             gérondif and the adjectif verbal of lessons 12 and 13 in B2,
//             read in a portrait)
//     act 9   the incipit and the chute
//     act 10  genres at recognition level: roman, nouvelle, conte, poème en
//             vers, poème en prose, théâtre (réplique, didascalie)
//     act 11  writing about a text: the formulas, quoting briefly, the
//             présent of analysis; a DELF B2-style literary extract
//     act 12  the task: a 200 to 250 word commentary on an extract
//
//   NOT OWNED, CITED ONLY:
//     - reading for the gist and « devine le sens » are lesson 37 in B1's;
//       stance, tone and irony in NON-FICTION are lesson 24 in B2's. Act 1
//       names both; act 6 goes past lesson 24 (literary tonalités, and the
//       means that make them).
//     - the passé simple as a FORM is lesson 8 in B2's (recognition only);
//       the literary subjunctive, lesson 9 in B2's. Here they are read, never
//       produced (§A.3).
//     - b2.08 already names first and third person, the child's point of
//       view and an ironic tone (its act 11); its rows are REUSED (§F), and
//       this lesson goes past them (witness narrator, the three
//       focalisations, the style indirect libre, the means of a tone).
//
// ══════════════════════════════════════════════════════════════════════════
//  §A. MEASURED, seed-checked (seedPlusPacks, read 2026-09-30), DB check
//      pending at import
// ══════════════════════════════════════════════════════════════════════════
//
//  1. THEME `litterature` (« La littérature », culture, levelRange b1-b2).
//     Sub-theme « le narrateur et le point de vue » is already set (read in
//     the seed's theme list). The seed holds 355 rows in the theme: fr.b1
//     001-006, fr.b2 001-006, b2.08 at .1000-.1198, b2.09 at .1200-.1396.
//     ZERO rows at .1400-.1599 (probed 2026-09-30, scratch/_b230-probe.mts).
//
//  2. ID BLOCK: `.1400` to `.1599` ONLY, assigned by the brief (1000-1399
//     are b2.08 and b2.09). Rows run in one sequence, act by act (see the
//     act banners). Nothing outside the block.
//
//  3. RECOGNITION ONLY FOR THE LITERARY FORMS (as b2.08 §A.3). A row whose
//     `fr` holds a passé simple is authored with `ps()`: the `sentence`
//     drill ONLY (word tiles, every form given), so no flashcard, voiceflash
//     or review screen ever asks the learner to PRODUCE it, and it never
//     enters a deck tranche or the `practice` speak list. No row holds an
//     imparfait du subjonctif. The readings contain both tenses; the quiz
//     never asks for one in a type-in.
//
//  4. NO TWIN, NO HEADWORD CLASH. Every authored `fr` was folded and
//     compared with the whole seed and with every other lesson corpus in
//     data/b1 and data/b2 (scratch/_b230-twins.mts): no exact twin. The
//     phrase rows (the headword rule applies to them) were checked against
//     the theme's published phrase and word rows (un roman, un écrivain,
//     elle lisait, il a écrit): no clash.
//
//  5. RESPELLINGS spelled for the nasal checker rather than the ear: a real
//     /n/ or /m/ is doubled where the checker would read a nasal vowel:
//     personne(s) pehr-SONN, personnage pehr-so-NAZH (no final n), jeune
//     ZHUHNN, donne DONN, homme NOM / LOM. No U+203F tie anywhere.
//
//  6. APOSTROPHES. Every authored French string, every text and every
//     quotation uses the typographic ’. The scenario never mixes ’ and '
//     (the app check). Reused seed rows keep their own straight ' and are
//     never quoted inside the scenario.
//
//  7. ATTRIBUTIONS AND QUOTATIONS, FOR THE FACT CHECK. Every real quotation
//     is SHORT (one sentence, or a line of verse), by an author dead more
//     than seventy years, and quoted word for word as I know it; each
//     needs a check against an edition before publish. Everything else is
//     an ORIGINAL passage, labelled « texte original écrit pour la leçon »
//     on screen, and attributed to NO real author.
//
//       Q_BOVARY      Gustave Flaubert (1821-1880), Madame Bovary (1857),
//                     first sentence: « Nous étions à l’Étude, quand le
//                     Proviseur entra, suivi d’un nouveau habillé en
//                     bourgeois et d’un garçon de classe qui portait un
//                     grand pupitre. » Claim made about it: the « nous » is
//                     a former classmate of Charles, a witness who then
//                     fades out of the novel.
//       Q_COEUR       Flaubert, « Un cœur simple », Trois Contes (1877),
//                     first sentence: « Pendant un demi-siècle, les
//                     bourgeoises de Pont-l’Évêque envièrent à Mme Aubain sa
//                     servante Félicité. »
//       Q_PROUST      Marcel Proust (1871-1922), Du côté de chez Swann
//                     (1913), first sentence: « Longtemps, je me suis couché
//                     de bonne heure. »
//       Q_PARURE_1    Guy de Maupassant (1850-1893), « La Parure » (1884),
//                     first sentence: « C’était une de ces jolies et
//                     charmantes filles, nées, comme par une erreur du
//                     destin, dans une famille d’employés. »
//       Q_PARURE_FIN  same story, from its last lines, spoken by Mme
//                     Forestier: « Mais la mienne était fausse. » Claim: the
//                     borrowed necklace was fake, revealed at the very end.
//       Q_SEGUIN_1    Alphonse Daudet (1840-1897), « La Chèvre de M.
//                     Seguin », Lettres de mon moulin (1869), first sentence
//                     of the tale: « M. Seguin n’avait jamais eu de bonheur
//                     avec ses chèvres. »
//       Q_SEGUIN_FIN  same tale: « Alors le loup se jeta sur la petite
//                     chèvre et la mangea. » Claim: it is how the tale of
//                     Blanquette ends, before the address to Gringoire.
//       Q_GERMINAL    Émile Zola (1840-1902), Germinal (1885), first
//                     sentence: « Dans la plaine rase, sous la nuit sans
//                     étoiles, d’une obscurité et d’une épaisseur d’encre, un
//                     homme suivait seul la grande route de Marchiennes à
//                     Montsou, dix kilomètres de pavé coupant tout droit, à
//                     travers les champs de betteraves. » Claim: the man is
//                     Étienne, a worker without a job, walking towards the
//                     mines of the Nord.
//       Q_NELLIGAN_1  Émile Nelligan (1879-1941, Montréal: the FRANCOPHONE,
//                     NON-FRANCE VOICE among the real authors), « Le Vaisseau
//                     d’or », first line: « Ce fut un grand Vaisseau taillé
//                     dans l’or massif » (published in Louis Dantin's
//                     edition, 1904). Claim: the whole sonnet is an extended
//                     metaphor of the poet's heart.
//       Q_NELLIGAN_2  same sonnet, near its end: « Qu’est devenu mon cœur,
//                     navire déserté ? »
//       Q_HUGO        Victor Hugo (1802-1885), « Demain, dès l’aube »,
//                     Les Contemplations (1856), opening: « Demain, dès
//                     l’aube, à l’heure où blanchit la campagne, / Je
//                     partirai. »
//       Q_BAUDELAIRE  Charles Baudelaire (1821-1867), « Enivrez-vous », Le
//                     Spleen de Paris (1869, posthumous): « Il faut être
//                     toujours ivre. Tout est là : c’est l’unique question. »
//       Q_CANDIDE     Voltaire (1694-1778), Candide (1759), first sentence:
//                     « Il y avait en Vestphalie, dans le château de M. le
//                     baron de Thunder-ten-tronckh, un jeune garçon à qui la
//                     nature avait donné les mœurs les plus douces. »
//
//     ORIGINAL passages (all invented, no real person): the act 1 novel
//     opening (M. Aubry and his neighbour, Montréal), M. Lambert near Namur
//     (act 2), Aminata in Dakar (act 3), Jeanne at the Anse-aux-Brumes
//     lighthouse (an invented Gaspésie village, act 4), Lise and Mathieu in
//     Montréal (act 5), three missed trains (act 6), Élise and the storm at
//     Ouchy, Lausanne (act 7), the ferryman of the Île aux Hérons (invented,
//     act 8), Mme Kaboré and the baker (act 9), Rose and Claire in Brussels
//     (theatre, act 10), the trainee journalist in Abidjan (act 11), Armand
//     Leduc's grocery (the task, act 12), and every « Dans un texte »
//     paragraph except act 8's (Zola's first sentence, framed). Real places
//     appear only as places (Montréal, Namur, Dakar, Ziguinchor, Lausanne,
//     Ouchy, Bruxelles, Abidjan, la Gaspésie, la rue Saint-Denis); nothing is
//     claimed about them beyond the plain facts (Dakar's taxis are yellow and
//     black, Ouchy is Lausanne's lakeside port, the Alps stand across Lake
//     Geneva).
//
// ══════════════════════════════════════════════════════════════════════════

import type { Item, Register } from '../../../../ealch-v2/src/content/schema.ts';
import { unitRef } from '../_unit-ref.ts';

/** A citation that OPENS a sentence needs a capital. */
export function Cap(s: string): string { return s.charAt(0).toUpperCase() + s.slice(1); }

/* ══════════════════════════════════════════════════════════════════════════
 *  §B. IDENTITY
 * ══════════════════════════════════════════════════════════════════════════ */

export const UNIT = {
  id: 'b2.30',
  seq: 30,
  title: 'Reading a Literary Text',
  sub: 'Lire un texte littéraire',
  canDo: 'Can tell the narrator from the author, identify who sees and who speaks in a literary text (first or third person, internal, external or omniscient focalisation, direct, indirect and free indirect speech), read how time, rhythm, tone, images and description produce an effect, recognise the main literary genres, and write a short commentary on an extract with brief quotations',
  prereqUnitIds: ['b1.37', 'b2.08', 'b2.24'],
} as const;

export const LESSON_ID = 'b2.30.l1';
export const THEME = 'litterature';
export const LEVEL = 'b2' as const;

/** ONE block, assigned by the brief. 1000-1399 are b2.08 and b2.09. */
export const ID_RANGES = [[1400, 1599]] as const;

export const E = (n: number) => `fr.${LEVEL}.${THEME}.${String(n).padStart(3, '0')}`;

/* ══════════════════════════════════════════════════════════════════════════
 *  §C. HOW THIS LESSON NAMES ITS NEIGHBOURS
 *
 *  B2 is taught in French, so every citation is French and built from the
 *  trail position (a unit id's number IS its position). Only occupied
 *  positions are cited: A1, A2 1-36, B1 1-39, B2 1-30. Never a raw id on
 *  screen.
 * ══════════════════════════════════════════════════════════════════════════ */

export function refFr(unitId: string): string {
  const m = /^(b1|b2)\.(\d{2})$/.exec(unitId);
  return m ? `la leçon ${Number(m[2])} du ${m[1].toUpperCase()}` : unitRef(unitId);
}

export const PC_IMP_UNIT = 'b1.03';
export const DISCOURS_UNIT = 'b1.19';
export const PORTRAIT_UNIT = 'b1.22';
export const REGISTRES_UNIT = 'b1.25';
export const LECTURE_B1_UNIT = 'b1.37';
export const PQP_UNIT = 'b2.01';
export const PASSE_SIMPLE_UNIT = 'b2.08';
export const SUBJ_LITT_UNIT = 'b2.09';
export const GERONDIF_UNIT = 'b2.12';
export const PARTICIPE_UNIT = 'b2.13';
export const CRITIQUE_UNIT = 'b2.24';

export const PC_IMP_REF = refFr(PC_IMP_UNIT);
export const DISCOURS_REF = refFr(DISCOURS_UNIT);
export const PORTRAIT_REF = refFr(PORTRAIT_UNIT);
export const REGISTRES_REF = refFr(REGISTRES_UNIT);
export const LECTURE_B1_REF = refFr(LECTURE_B1_UNIT);
export const PQP_REF = refFr(PQP_UNIT);
export const PASSE_SIMPLE_REF = refFr(PASSE_SIMPLE_UNIT);
export const SUBJ_LITT_REF = refFr(SUBJ_LITT_UNIT);
export const GERONDIF_REF = refFr(GERONDIF_UNIT);
export const PARTICIPE_REF = refFr(PARTICIPE_UNIT);
export const CRITIQUE_REF = refFr(CRITIQUE_UNIT);

/* ══════════════════════════════════════════════════════════════════════════
 *  §D. THE NEIGHBOURS' REFRAMES, RE-EXPORTED, NEVER RETYPED
 * ══════════════════════════════════════════════════════════════════════════ */

export { REFRAME as B103_REFRAME, REFRAME_EN as B103_REFRAME_EN } from '../b1/pc-imparfait-corpus.ts';
export { REFRAME as B119_REFRAME, REFRAME_EN as B119_REFRAME_EN } from '../b1/discours-indirect-corpus.ts';
export { REFRAME as B125_REFRAME, REFRAME_EN as B125_REFRAME_EN } from '../b1/registres-corpus.ts';
export { REFRAME as B137_REFRAME, REFRAME_EN as B137_REFRAME_EN } from '../b1/strategies-lecture-corpus.ts';
export { REFRAME as B201_REFRAME, REFRAME_EN as B201_REFRAME_EN } from './plus-que-parfait-corpus.ts';
export { REFRAME as B208_REFRAME, REFRAME_EN as B208_REFRAME_EN } from './passe-simple-corpus.ts';
export { REFRAME as B209_REFRAME, REFRAME_EN as B209_REFRAME_EN } from './subjonctif-litteraire-corpus.ts';
export { REFRAME as B212_REFRAME, REFRAME_EN as B212_REFRAME_EN } from './gerondif-corpus.ts';
export { REFRAME as B213_REFRAME, REFRAME_EN as B213_REFRAME_EN } from './participe-adjectif-corpus.ts';
export { REFRAME as B224_REFRAME, REFRAME_EN as B224_REFRAME_EN } from './lecture-critique-corpus.ts';

/* ══════════════════════════════════════════════════════════════════════════
 *  §E. THE REFRAME AND THE ONE METAPHOR
 *
 *  LA VOIX, LE REGARD, LA PLUME. A literary text is read through three
 *  questions, and every act answers one of them: who speaks (the voice:
 *  narrator, witness, character, the lyrical je, the characters of a play),
 *  through whose eyes (the gaze: the focalisation, the portrait seen by
 *  someone), and with which words (the pen: tense and rhythm, tone, images,
 *  the incipit and the chute). The commentary says the three, quotation in
 *  hand.
 *
 *  It is NOT « what does the author feel » (acts 1 and 2 are built against
 *  that), and NOT « find the figures of speech » (act 7 refuses a device
 *  named without its effect).
 * ══════════════════════════════════════════════════════════════════════════ */

export const REFRAME = 'Qui parle, par quels yeux, avec quels mots : c’est ainsi qu’on lit un texte littéraire.';
export const REFRAME_EN = 'Who speaks, through whose eyes, with which words: that is how you read a literary text.';

export const REFRAME_REJECTED: readonly { text: string; why: string }[] = [
  {
    text: 'Le narrateur n’est pas l’auteur.',
    why: 'True, and the heart of acts 1 and 2, but silent on acts 3 to 10: it does not find a focalisation, a tonalité, an image or a chute. And in a play (act 10) there is no narrator at all.',
  },
  {
    text: 'Cherche les procédés.',
    why: 'Wrong for act 7 and the task: a list of devices with no effect is the commonest failing commentary. The lesson asks for the device AND what it makes the reader see or feel.',
  },
  {
    text: 'Demande-toi ce que l’auteur a voulu dire.',
    why: 'Sends the learner to the author’s intentions, which a text cannot prove (act 2), instead of to what the text does. The commentary formulas of act 11 (« le texte suggère », « on peut y voir ») are built on the text, not the person.',
  },
  {
    text: 'Le sens d’abord, puis le style.',
    why: 'Lesson 37 in B1’s order, quoted in act 1 and kept, but it splits what this lesson joins: the style IS how the meaning is made (a switch to the present, a comparison, a sentence of two words).',
  },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §F. THE IMPORTS, BY ACT (seed rows, read 2026-09-30, French in comment)
 * ══════════════════════════════════════════════════════════════════════════ */

const LIT = (n: number) => `fr.b2.litterature.${n}`;
const SC2 = (n: number) => `fr.b2.strategies-de-comprehension.${n}`;
export const RP = 'fr.b1.recits-au-passe.203';                 // Il pleuvait et la terrasse était vide.  (lesson 3 in B1)
export const PR = 'fr.b1.paroles-rapportees.1151';             // Elle a dit que ce matin-là, elle avait vu le directeur.  (lesson 19 in B1)
export const PR_RULE = 'fr.b1.paroles-rapportees.1004';        // Le message reste, le point de vue change.  (lesson 19 in B1, flashcard only)
export const PORTRAIT_RULE = 'fr.b1.description-personnes-objets.1177'; // Un bon portrait montre, puis décrit, puis raconte.  (lesson 22 in B1, flashcard only)
export const LECTURE_RULE = 'fr.b1.strategies-de-comprehension.1005';  // Le sens d'abord, les mots ensuite.  (lesson 37 in B1, flashcard only)
export const GER = 'fr.b2.connecteurs-logiques.1629';          // Il s'est endormi en lisant.  (lesson 12 in B2)
export const ADJ = 'fr.b2.langue-soignee.1697';                // Il nous a raconté une histoire émouvante.  (lesson 13 in B2, grammar card)

export const IMPORTED = {
  act1: [
    LECTURE_RULE,                    // Le sens d'abord, les mots ensuite.  (flashcard only)
  ],
  act2: [
    LIT(1180),                       // Le narrateur raconte l'histoire à la première personne.  (lesson 8 in B2)
    LIT(1181),                       // L'histoire est racontée à la troisième personne.  (lesson 8 in B2)
  ],
  act3: [
    LIT(1186),                       // Le point de vue est celui de l'enfant.  (lesson 8 in B2)
  ],
  act4: [
    LIT(1146),                       // Il pleuvait depuis trois jours quand la lettre est arrivée.  (lesson 8 in B2, map card)
    LIT(1152),                       // Le passé simple prend la place du passé composé ; l'imparfait ne bouge pas.  (rule, flashcard + review)
    RP,                              // Il pleuvait et la terrasse était vide.  (lesson 3 in B1)
  ],
  act5: [
    PR_RULE,                         // Le message reste, le point de vue change.  (flashcard only)
    PR,                              // Elle a dit que ce matin-là, elle avait vu le directeur.
  ],
  act6: [
    LIT(1182),                       // Le ton est ironique : le narrateur se moque de son père.
    LIT(1372),                       // Le style est solennel, mais la situation est comique.  (lesson 9 in B2)
    LIT(1373),                       // Ce décalage crée l'ironie.  (lesson 9 in B2)
    SC2(1503),                       // Le ton est ironique : elle critique la fermeture du guichet.  (lesson 24 in B2)
  ],
  act7: [
    LIT(1147),                       // La maison dormait ; seule une lampe brillait dans la cuisine.  (lesson 8 in B2)
    LIT(1300),                       // On aurait dit un château de conte.  (lesson 9 in B2, map card)
  ],
  act8: [
    PORTRAIT_RULE,                   // Un bon portrait montre, puis décrit, puis raconte.  (flashcard only)
    GER,                             // Il s'est endormi en lisant.
    ADJ,                             // Il nous a raconté une histoire émouvante.
  ],
  act9: [
    LIT(1191),                       // Au début, un homme arrive dans un village où personne ne le connaît.
    LIT(1198),                       // Ce qui m'a le plus frappé, c'est la fin.
  ],
  act10: [
    LIT(1024),                       // Il était une fois un roi qui n'avait pas d'enfant.  (lesson 8 in B2)
  ],
  act11: [
    LIT(1183),                       // Le texte laisse entendre que le père n'avait jamais vu la mer.
    LIT(1370),                       // Le narrateur se moque doucement de son personnage.  (lesson 9 in B2)
  ],
  act12: [
    LIT(1393),                       // Ce qui m'a plu, c'est le ton.  (lesson 9 in B2)
  ],
};

export const IMPORT_IDS = [...new Set(Object.values(IMPORTED).flat())];

/** No `flashcard` drill in the seed: nameable, never releasable. None. */
export const NOT_DECK_ABLE: readonly string[] = [];

/** No `voiceflash` in the seed: never in a `practice` speak section. */
export const NOT_SPEAKABLE: readonly string[] = [
  ...NOT_DECK_ABLE,
  LECTURE_RULE,                      // flashcard only
  PR_RULE,                           // flashcard only
  PORTRAIT_RULE,                     // flashcard only
  LIT(1152),                         // flashcard + review
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §G. THE AUTHORED ROWS
 *
 *  A WORKSHOP CORPUS HOLDS PHRASES THAT DO A JOB: a line of one of the
 *  lesson's texts (to hear, to place, to name), a question a reader asks a
 *  literary text, or a line of commentary the learner can reuse in the task.
 *  Each act has one flashcard-only rule card (`rule()`), whose prompt is a
 *  situation and whose `fr` is the act's move.
 *
 *  `ps()` rows hold a passé simple: the `sentence` drill only (§A.3).
 * ══════════════════════════════════════════════════════════════════════════ */

type Row = Item;

const FCVR = ['flashcard', 'voiceflash', 'review'] as Item['drills'];
const FCVDR = ['flashcard', 'voiceflash', 'dictation', 'review'] as Item['drills'];
const FC = ['flashcard'] as Item['drills'];
const PS_DRILLS = ['sentence'] as Item['drills'];
const S: Register = 'soutenu';
const GP = ['lire-litterature'];

const sent = (
  n: number, fr: string, en: string, ipa: string, respell: string, tags: string[],
  drills: Item['drills'] = FCVR, extra: Partial<Item> = {},
): Row => ({
  id: E(n), kind: 'sentence', level: LEVEL, theme: THEME, fr, en, ipa, respell,
  tags, drills, version: 1, grammarPoints: GP, ...extra,
});

const phrase = (
  n: number, fr: string, en: string, ipa: string, respell: string, tags: string[],
  drills: Item['drills'] = FCVR, extra: Partial<Item> = {},
): Row => ({
  id: E(n), kind: 'phrase', level: LEVEL, theme: THEME, fr, en, ipa, respell,
  tags, drills, version: 1, ...extra,
});

/** A line holding a passé simple: word tiles only, never produced. */
const ps = (n: number, fr: string, en: string, ipa: string, respell: string, tags: string[]): Row =>
  sent(n, fr, en, ipa, respell, ['passe-simple', ...tags], PS_DRILLS, { register: S });

/** A rule card: `prompt` is the situation, `fr` the move. */
const rule = (n: number, fr: string, en: string, ipa: string, respell: string, prompt: string, notes: string, tags: string[]): Row =>
  sent(n, fr, en, ipa, respell, ['regle', ...tags], FC, { cardType: 'grammar', prompt, notes });

/* ── ACT 1 · QUI RACONTE ? (.1400-.1412) ─────────────────────────────────── */

export const ACT1_ROWS: Row[] = [
  sent(1400, 'L’auteure trouve la nouvelle voisine insupportable.', 'The author finds the new neighbour unbearable.',
    '/lo.tœʁ tʁuv la nu.vɛl vwa.zin ɛ̃.sy.pɔʁ.tabl/', 'loh-TUHR troov la noo-vel vwa-ZEEN | ehⁿ-sü-por-TABL', ['naif', 'voisin']),
  sent(1401, 'Le narrateur trouve la voisine insupportable, mais le texte laisse entendre qu’il se trompe.', 'The narrator finds the neighbour unbearable, but the text implies that he is wrong.',
    '/lə na.ʁa.tœʁ tʁuv la vwa.zin ɛ̃.sy.pɔʁ.tabl mɛ lə tɛkst lɛs ɑ̃.tɑ̃dʁ kil sə tʁɔ̃p/', 'luh na-ra-TUHR troov la vwa-ZEEN ehⁿ-sü-por-TABL | meh luh TEKST less ahⁿ-TAHⁿDR | keel suh TROHⁿP', ['lecteur', 'voisin'], FCVDR),
  sent(1402, 'Je note tout dans un petit carnet.', 'I write everything down in a little notebook.',
    '/ʒə nɔt tu dɑ̃.zœ̃ pə.ti kaʁ.nɛ/', 'zhuh not TOO | dahⁿ-zuhⁿ puh-tee kar-NEH', ['texte', 'voisin']),
  sent(1403, 'Ce que font les autres ne m’a jamais intéressé.', 'What other people do has never interested me.',
    '/sə kə fɔ̃ le.zotʁ nə ma ʒa.mɛ ɛ̃.te.ʁɛ.se/', 'suh kuh fohⁿ lay-ZOHTR | nuh ma zha-meh ehⁿ-tay-reh-SAY', ['texte', 'voisin']),
  sent(1404, 'Personne ne vient me voir, et c’est très bien ainsi.', 'Nobody comes to see me, and that is just fine.',
    '/pɛʁ.sɔn nə vjɛ̃ mə vwaʁ e sɛ tʁɛ bjɛ̃.nɛ̃.si/', 'pehr-SONN nuh vyehⁿ muh VWAR | ay seh treh byehⁿ-nehⁿ-SEE', ['texte', 'voisin']),
  sent(1405, 'Ses actes contredisent ses mots.', 'His actions contradict his words.',
    '/se.zakt kɔ̃.tʁə.diz se mo/', 'say-ZAKT kohⁿ-truh-DEEZ say MOH', ['lecteur']),
  sent(1406, 'Le lecteur en voit plus que le narrateur.', 'The reader sees more than the narrator does.',
    '/lə lɛk.tœʁ ɑ̃ vwa plys kə lə na.ʁa.tœʁ/', 'luh lek-TUHR ahⁿ vwa PLÜSS | kuh luh na-ra-TUHR', ['lecteur'], FCVDR),
  sent(1407, 'Qui raconte cette histoire ?', 'Who is telling this story?',
    '/ki ʁa.kɔ̃t sɛ.tis.twaʁ/', 'kee ra-kohⁿt seh-tees-TWAR', ['question']),
  sent(1408, 'Par les yeux de qui voit-on la scène ?', 'Through whose eyes do we see the scene?',
    '/paʁ le.zjø də ki vwa.tɔ̃ la sɛn/', 'par lay-ZYEU duh KEE | vwa-tohⁿ la SEN', ['question']),
  sent(1409, 'Avec quels mots le texte produit-il cet effet ?', 'With which words does the text produce this effect?',
    '/a.vɛk kɛl mo lə tɛkst pʁɔ.dɥi.til sɛ.te.fɛ/', 'a-vek kel MOH | luh TEKST pro-dwee-TEEL seh-tay-FEH', ['question']),
  rule(1410, REFRAME, REFRAME_EN,
    '/ki paʁl paʁ kɛl.zjø a.vɛk kɛl mo sɛ.tɛ̃.si kɔ̃ li œ̃ tɛkst li.te.ʁɛʁ/', 'kee PARL | par kel-ZYEU | a-vek kel MOH | seh-tehⁿ-see kohⁿ lee uhⁿ TEKST lee-tay-REHR',
    'Tu ouvres un roman pour en parler. Quelles questions te poses-tu d’abord ?',
    'Qui raconte, par quels yeux on voit la scène, et avec quels mots le texte te fait ressentir ce qu’il veut.', ['reframe']),
  phrase(1411, 'un narrateur peu fiable', 'an unreliable narrator',
    '/œ̃ na.ʁa.tœʁ pø fjabl/', 'uhⁿ na-ra-TUHR | peu FYABL', ['lecteur']),
  sent(1412, 'Le narrateur est drôle, mais on comprend vite qu’il se ment à lui-même.', 'The narrator is funny, but you soon realise he is lying to himself.',
    '/lə na.ʁa.tœʁ ɛ dʁol mɛ ɔ̃ kɔ̃.pʁɑ̃ vit kil sə mɑ̃ a lɥi.mɛm/', 'luh na-ra-TUHR eh DROHL | meh ohⁿ kohⁿ-prahⁿ VEET | keel suh mahⁿ a lwee-MEM', ['lecteur']),
];

/* ── ACT 2 · LE NARRATEUR ET L’AUTEUR (.1413-.1427) ──────────────────────── */

export const ACT2_ROWS: Row[] = [
  sent(1413, 'L’auteur signe le livre ; le narrateur raconte l’histoire.', 'The author signs the book; the narrator tells the story.',
    '/lo.tœʁ siɲ lə livʁ lə na.ʁa.tœʁ ʁa.kɔ̃t lis.twaʁ/', 'loh-TUHR SEENY luh LEEVR | luh na-ra-TUHR ra-kohⁿt lees-TWAR', ['voix'], FCVDR),
  sent(1414, 'La narratrice raconte sa propre enfance.', 'The narrator tells the story of her own childhood.',
    '/la na.ʁa.tʁis ʁa.kɔ̃t sa pʁɔ.pʁɑ̃.fɑ̃s/', 'la na-ra-TREESS | ra-kohⁿt sa pro-prahⁿ-FAHⁿSS', ['voix']),
  sent(1415, 'Le narrateur ne fait pas partie de l’histoire : il dit il ou elle.', 'The narrator is not part of the story: the telling says he or she.',
    '/lə na.ʁa.tœʁ nə fɛ pa paʁ.ti də lis.twaʁ il di il u ɛl/', 'luh na-ra-TUHR nuh feh pa par-TEE duh lees-TWAR | eel DEE | eel oo EL', ['voix']),
  sent(1416, 'Monsieur Lambert est arrivé un lundi de septembre, avec une valise en carton.', 'Mr Lambert arrived one Monday in September, with a cardboard suitcase.',
    '/mə.sjø lɑ̃.bɛʁ ɛ.ta.ʁi.ve œ̃ lœ̃.di də sɛp.tɑ̃bʁ a.vɛk yn va.liz ɑ̃ kaʁ.tɔ̃/', 'muh-syeu lahⁿ-BEHR eh-ta-ree-VAY | uhⁿ luhⁿ-dee duh sep-TAHⁿBR | a-vek ün va-leez ahⁿ kar-TOHⁿ', ['texte', 'lambert']),
  sent(1417, 'Ma mère disait qu’il était un drôle de numéro.', 'My mother used to say he was an odd one.',
    '/ma mɛʁ di.zɛ ki.le.tɛ œ̃ dʁol də ny.me.ʁo/', 'ma MEHR dee-ZEH | kee-lay-teh uhⁿ drohl duh nü-may-ROH', ['texte', 'lambert']),
  sent(1418, 'Mon père ne disait rien, ce qui était pire.', 'My father said nothing, which was worse.',
    '/mɔ̃ pɛʁ nə di.zɛ ʁjɛ̃ sə ki e.tɛ piʁ/', 'mohⁿ PEHR nuh dee-zeh RYEHⁿ | suh kee ay-teh PEER', ['texte', 'lambert']),
  sent(1419, 'J’ai mis vingt ans à comprendre cette phrase.', 'It took me twenty years to understand that sentence.',
    '/ʒe mi vɛ̃.tɑ̃ a kɔ̃.pʁɑ̃dʁ sɛt fʁaz/', 'zhay mee vehⁿ-TAHⁿ | a kohⁿ-prahⁿdr set FRAHZ', ['texte', 'lambert']),
  sent(1420, 'La narratrice est aussi un témoin : elle raconte l’histoire d’un autre.', 'The narrator is also a witness: she tells someone else’s story.',
    '/la na.ʁa.tʁis ɛ.to.si œ̃ te.mwɛ̃ ɛl ʁa.kɔ̃t lis.twaʁ dœ̃.notʁ/', 'la na-ra-TREESS eh-toh-see uhⁿ tay-MWEHⁿ | el ra-kohⁿt lees-twar duhⁿ-NOHTR', ['voix', 'commentaire'], FCVDR),
  sent(1421, 'Ici, le je est celui d’une ancienne élève, pas celui de l’auteure.', 'Here the I belongs to a former pupil, not to the author.',
    '/i.si lə ʒə ɛ sə.lɥi dy.nɑ̃.sjɛ.ne.lɛv pa sə.lɥi də lo.tœʁ/', 'ee-SEE | luh ZHUH eh suh-lwee dü-nahⁿ-syeh-nay-LEV | pa suh-lwee duh loh-TUHR', ['voix', 'commentaire']),
  phrase(1422, 'un narrateur témoin', 'a witness narrator',
    '/œ̃ na.ʁa.tœʁ te.mwɛ̃/', 'uhⁿ na-ra-tuhr tay-MWEHⁿ', ['voix']),
  phrase(1423, 'un narrateur extérieur à l’histoire', 'a narrator outside the story',
    '/œ̃ na.ʁa.tœʁ ɛks.te.ʁjœʁ a lis.twaʁ/', 'uhⁿ na-ra-TUHR | eks-tay-RYUHR a lees-TWAR', ['voix']),
  rule(1424, 'Le je d’un roman n’est pas forcément l’auteur.', 'The I of a novel is not necessarily the author.',
    '/lə ʒə dœ̃ ʁɔ.mɑ̃ nɛ pa fɔʁ.se.mɑ̃ lo.tœʁ/', 'luh ZHUH duhⁿ ro-MAHⁿ | neh pa for-say-mahⁿ loh-TUHR',
    'Un roman dit « je ». Est-ce l’auteur qui parle ?',
    'Pas forcément : c’est le narrateur, une voix que l’auteur a créée. Seule l’autobiographie promet que l’auteur, le narrateur et le personnage ne font qu’un.', ['voix']),
  sent(1425, 'Au début de Madame Bovary, le narrateur est un ancien camarade de Charles.', 'At the start of Madame Bovary, the narrator is a former classmate of Charles.',
    '/o de.by də ma.dam bɔ.va.ʁi lə na.ʁa.tœʁ ɛ.tœ̃.nɑ̃.sjɛ̃ ka.ma.ʁad də ʃaʁl/', 'oh day-BÜ duh ma-dam bo-va-REE | luh na-ra-TUHR eh-tuhⁿ-nahⁿ-SYEHⁿ | ka-ma-RAD duh SHARL', ['voix', 'flaubert']),
  sent(1426, 'Dans une autobiographie, l’auteur, le narrateur et le personnage ne font qu’un.', 'In an autobiography, the author, the narrator and the main character are one and the same.',
    '/dɑ̃.zy.no.to.bjɔ.ɡʁa.fi lo.tœʁ lə na.ʁa.tœʁ e lə pɛʁ.sɔ.naʒ nə fɔ̃ kœ̃/', 'dahⁿ-zü-noh-toh-byo-gra-FEE | loh-TUHR luh na-ra-TUHR ay luh pehr-so-NAZH | nuh fohⁿ KUHⁿ', ['voix']),
  sent(1427, 'La narratrice, une ancienne élève, raconte l’arrivée de son instituteur.', 'The narrator, a former pupil, tells of her teacher’s arrival.',
    '/la na.ʁa.tʁis y.nɑ̃.sjɛ.ne.lɛv ʁa.kɔ̃t la.ʁi.ve də sɔ̃.nɛ̃s.ti.ty.tœʁ/', 'la na-ra-TREESS | ü-nahⁿ-syeh-nay-LEV | ra-kohⁿt la-ree-VAY duh sohⁿ-nehⁿs-tee-tü-TUHR', ['commentaire'], FCVDR),
];

/* ── ACT 3 · PAR QUELS YEUX (.1428-.1448) ────────────────────────────────── */

export const ACT3_ROWS: Row[] = [
  ps(1428, 'Par la vitre, Dakar lui parut immense.', 'Through the window, Dakar seemed huge to her.',
    '/paʁ la vitʁ da.kaʁ lɥi pa.ʁy i.mɑ̃s/', 'par la VEETR | da-KAR lwee pa-RÜ ee-MAHⁿSS', ['texte', 'aminata']),
  sent(1429, 'Tous les boubous lui semblaient verts.', 'All the boubous looked green to her.',
    '/tu le bu.bu lɥi sɑ̃.blɛ vɛʁ/', 'too lay boo-BOO | lwee sahⁿ-bleh VEHR', ['texte', 'aminata', 'interne']),
  sent(1430, 'Voulait-il l’aider, ou la voler ?', 'Did he want to help her, or rob her?',
    '/vu.lɛ.til lɛ.de u la vɔ.le/', 'voo-leh-teel leh-DAY | oo la vo-LAY', ['texte', 'aminata', 'interne']),
  ps(1431, 'L’homme haussa les épaules et s’éloigna.', 'The man shrugged and walked away.',
    '/lɔm o.sa le.ze.pol e se.lwa.ɲa/', 'LOM oh-SA lay-zay-POHL | ay say-lwa-NYA', ['texte', 'aminata', 'externe']),
  sent(1432, 'Elle ne savait pas encore qu’elle resterait vingt ans à Dakar.', 'She did not yet know she would stay in Dakar for twenty years.',
    '/ɛl nə sa.vɛ pa.zɑ̃.kɔʁ kɛl ʁɛs.tə.ʁɛ vɛ̃.tɑ̃ a da.kaʁ/', 'el nuh sa-veh pa-zahⁿ-KOR | kel res-tuh-REH vehⁿ-TAHⁿ a da-KAR', ['zero', 'ecoute']),
  sent(1433, 'On voit tout par les yeux d’Aminata.', 'We see everything through Aminata’s eyes.',
    '/ɔ̃ vwa tu paʁ le.zjø da.mi.na.ta/', 'ohⁿ vwa TOO | par lay-zyeu da-mee-na-TA', ['interne', 'commentaire']),
  phrase(1434, 'la focalisation interne', 'internal focalisation',
    '/la fɔ.ka.li.za.sjɔ̃ ɛ̃.tɛʁn/', 'la fo-ka-lee-za-SYOHⁿ | ehⁿ-TEHRN', ['interne']),
  phrase(1435, 'la focalisation externe', 'external focalisation',
    '/la fɔ.ka.li.za.sjɔ̃ ɛks.tɛʁn/', 'la fo-ka-lee-za-SYOHⁿ | eks-TEHRN', ['externe']),
  phrase(1436, 'un narrateur omniscient', 'an omniscient narrator',
    '/œ̃ na.ʁa.tœʁ ɔm.ni.sjɑ̃/', 'uhⁿ na-ra-TUHR | om-nee-SYAHⁿ', ['zero']),
  sent(1437, 'Le narrateur omniscient connaît les pensées de tous les personnages.', 'The omniscient narrator knows the thoughts of all the characters.',
    '/lə na.ʁa.tœʁ ɔm.ni.sjɑ̃ kɔ.nɛ le pɑ̃.se də tu le pɛʁ.sɔ.naʒ/', 'luh na-ra-tuhr om-nee-SYAHⁿ | ko-NEH lay pahⁿ-SAY | duh too lay pehr-so-NAZH', ['zero']),
  sent(1438, 'En focalisation externe, on ne voit que les gestes et on n’entend que les paroles.', 'In external focalisation, you see only the gestures and hear only the words spoken.',
    '/ɑ̃ fɔ.ka.li.za.sjɔ̃ ɛks.tɛʁn ɔ̃ nə vwa kə le ʒɛst e ɔ̃ nɑ̃.tɑ̃ kə le pa.ʁɔl/', 'ahⁿ fo-ka-lee-za-syohⁿ eks-TEHRN | ohⁿ nuh vwa kuh lay ZHEST | ay ohⁿ nahⁿ-tahⁿ kuh lay pa-ROL', ['externe']),
  sent(1439, 'Le passage est écrit en focalisation interne : on voit Dakar par les yeux d’Aminata.', 'The passage is written in internal focalisation: we see Dakar through Aminata’s eyes.',
    '/lə pa.saʒ ɛ.te.kʁi ɑ̃ fɔ.ka.li.za.sjɔ̃ ɛ̃.tɛʁn ɔ̃ vwa da.kaʁ paʁ le.zjø da.mi.na.ta/', 'luh pa-SAZH eh-tay-KREE | ahⁿ fo-ka-lee-za-syohⁿ ehⁿ-TEHRN | ohⁿ vwa da-KAR | par lay-zyeu da-mee-na-TA', ['interne', 'commentaire'], FCVDR),
  sent(1440, 'Le lecteur partage la peur d’Aminata, car il en sait aussi peu qu’elle.', 'The reader shares Aminata’s fear, because they know as little as she does.',
    '/lə lɛk.tœʁ paʁ.taʒ la pœʁ da.mi.na.ta kaʁ i.lɑ̃ sɛ o.si pø kɛl/', 'luh lek-TUHR par-TAZH la PUHR da-mee-na-TA | kar ee-lahⁿ seh oh-see PEU KEL', ['interne', 'commentaire']),
  rule(1441, 'Qui voit n’est pas toujours qui raconte.', 'Who sees is not always who tells.',
    '/ki vwa nɛ pa tu.ʒuʁ ki ʁa.kɔ̃t/', 'kee VWA | neh pa too-zhoor kee ra-KOHⁿT',
    'Le récit dit « elle », mais tu ne sais que ce qu’elle sait. Qui raconte, et qui voit ?',
    'Un narrateur raconte à la troisième personne, mais il voit par les yeux d’un seul personnage : c’est la focalisation interne.', ['interne']),
  sent(1442, 'Un homme s’approche de la jeune fille et tend la main vers son sac.', 'A man walks up to the girl and reaches for her bag.',
    '/œ̃.nɔm sa.pʁɔʃ də la ʒœn fij e tɑ̃ la mɛ̃ vɛʁ sɔ̃ sak/', 'uhⁿ-NOM sa-PROSH | duh la zhuhnn FEEY | ay tahⁿ la MEHⁿ vehr sohⁿ SAK', ['externe', 'ecoute']),
  sent(1443, 'Elle recule d’un pas. Il hausse les épaules et s’éloigne.', 'She steps back. He shrugs and walks away.',
    '/ɛl ʁə.kyl dœ̃ pa il os le.ze.pol e se.lwaɲ/', 'el ruh-kül duhⁿ PA | eel ohss lay-zay-POHL | ay say-LWANY', ['externe', 'ecoute']),
  sent(1444, 'Aminata voit un inconnu tendre la main : il veut sûrement lui prendre son sac.', 'Aminata sees a stranger reach out: he surely wants to take her bag.',
    '/a.mi.na.ta vwa œ̃.nɛ̃.kɔ.ny tɑ̃dʁ la mɛ̃ il vø syʁ.mɑ̃ lɥi pʁɑ̃dʁ sɔ̃ sak/', 'a-mee-na-TA vwa uhⁿ-nehⁿ-ko-NÜ | tahⁿdr la MEHⁿ | eel veu sür-MAHⁿ | lwee prahⁿdr sohⁿ SAK', ['interne', 'ecoute']),
  sent(1445, 'Son cœur bat si fort qu’elle n’entend plus les klaxons.', 'Her heart is pounding so hard that she no longer hears the horns.',
    '/sɔ̃ kœʁ ba si fɔʁ kɛl nɑ̃.tɑ̃ ply le klak.sɔ̃/', 'sohⁿ KUHR ba see FOR | kel nahⁿ-tahⁿ plü lay klak-SOHⁿ', ['interne', 'ecoute']),
  sent(1446, 'Moussa voit une jeune fille perdue ; il veut seulement l’aider à porter son sac.', 'Moussa sees a lost girl; he only wants to help her carry her bag.',
    '/mu.sa vwa yn ʒœn fij pɛʁ.dy il vø sœl.mɑ̃ lɛ.de a pɔʁ.te sɔ̃ sak/', 'moo-SA vwa ün zhuhnn feey pehr-DÜ | eel veu suhl-MAHⁿ | leh-DAY a por-tay sohⁿ SAK', ['interne', 'ecoute']),
  sent(1447, 'L’homme voulait l’aider ; Aminata, qui ne connaissait personne en ville, pensait qu’il voulait la voler.', 'The man wanted to help her; Aminata, who knew nobody in town, thought he wanted to rob her.',
    '/lɔm vu.lɛ lɛ.de a.mi.na.ta ki nə kɔ.nɛ.sɛ pɛʁ.sɔ.nɑ̃ vil pɑ̃.sɛ kil vu.lɛ la vɔ.le/', 'LOM voo-leh leh-DAY | a-mee-na-TA | kee nuh ko-neh-SEH pehr-so-NAHⁿ VEEL | pahⁿ-SEH keel voo-leh la vo-LAY', ['zero', 'ecoute']),
  sent(1448, 'Aucun des deux ne devinait ce que pensait l’autre.', 'Neither of them could guess what the other was thinking.',
    '/o.kœ̃ de dø nə də.vi.nɛ sə kə pɑ̃.sɛ lotʁ/', 'oh-kuhⁿ day DEU | nuh duh-vee-NEH | suh kuh pahⁿ-seh LOHTR', ['zero', 'ecoute']),
];

/* ── ACT 4 · LE TEMPS DU RÉCIT (.1449-.1464) ─────────────────────────────── */

export const ACT4_ROWS: Row[] = [
  ps(1449, 'Le phare était éteint depuis trente ans quand Jeanne revint au village.', 'The lighthouse had been dark for thirty years when Jeanne came back to the village.',
    '/lə faʁ e.tɛ.te.tɛ̃ də.pɥi tʁɑ̃.tɑ̃ kɑ̃ ʒan ʁə.vɛ̃ o vi.laʒ/', 'luh FAR ay-teh-tay-TEHⁿ | duh-pwee trahⁿ-TAHⁿ | kahⁿ ZHANN ruh-VEHⁿ oh vee-LAZH', ['texte', 'jeanne', 'plans']),
  sent(1450, 'Elle avait quitté la Gaspésie à dix-sept ans.', 'She had left the Gaspé Peninsula at seventeen.',
    '/ɛ.la.vɛ ki.te la ɡas.pe.zi a di.sɛ.tɑ̃/', 'eh-la-VEH kee-TAY la gas-pay-ZEE | a dee-seh-TAHⁿ', ['texte', 'jeanne', 'analepse']),
  ps(1451, 'Les années passèrent.', 'The years went by.',
    '/le.za.ne pa.sɛʁ/', 'lay-za-NAY pa-SEHR', ['texte', 'jeanne', 'rythme']),
  ps(1452, 'Elle vécut à Montréal, puis à Lyon, se maria, divorça, éleva deux filles.', 'She lived in Montréal, then in Lyon, married, divorced, raised two daughters.',
    '/ɛl ve.ky a mɔ̃.ʁe.al pɥi.za ljɔ̃ sə ma.ʁja di.vɔʁ.sa e.lə.va dø fij/', 'el vay-KÜ a mohⁿ-ray-AL | pwee-za LYOHⁿ | suh ma-RYA | dee-vor-SA | ay-luh-va deu FEEY', ['texte', 'jeanne', 'rythme']),
  ps(1453, 'Devant la porte, elle hésita longtemps, la clé à la main.', 'At the door, she hesitated for a long time, the key in her hand.',
    '/də.vɑ̃ la pɔʁt ɛ.le.zi.ta lɔ̃.tɑ̃ la kle a la mɛ̃/', 'duh-vahⁿ la PORT | eh-lay-zee-TA lohⁿ-TAHⁿ | la KLAY a la MEHⁿ', ['texte', 'jeanne', 'rythme']),
  sent(1454, 'Enfin, elle entre.', 'At last, she goes in.',
    '/ɑ̃.fɛ̃ ɛ.lɑ̃tʁ/', 'ahⁿ-FEHⁿ | eh-LAHⁿTR', ['texte', 'jeanne', 'present']),
  sent(1455, 'Son père l’avait donc regardée partir.', 'So her father had watched her leave.',
    '/sɔ̃ pɛʁ la.vɛ dɔ̃k ʁə.ɡaʁ.de paʁ.tiʁ/', 'sohⁿ PEHR | la-veh dohⁿk ruh-gar-day par-TEER', ['texte', 'jeanne', 'analepse'], FCVDR),
  sent(1456, 'Le village n’avait pas changé.', 'The village had not changed.',
    '/lə vi.laʒ na.vɛ pa ʃɑ̃.ʒe/', 'luh vee-LAZH | na-veh pa shahⁿ-ZHAY', ['texte', 'jeanne', 'plans']),
  sent(1457, 'Le passage au présent rend la scène plus vive.', 'The switch to the present makes the scene more vivid.',
    '/lə pa.saʒ o pʁe.zɑ̃ ʁɑ̃ la sɛn ply viv/', 'luh pa-SAZH oh pray-ZAHⁿ | rahⁿ la SEN plü VEEV', ['present', 'commentaire'], FCVDR),
  sent(1458, 'Le plus-que-parfait marque un retour en arrière.', 'The plus-que-parfait marks a flashback.',
    '/lə ply.kə.paʁ.fɛ maʁk œ̃ ʁə.tu.ʁɑ̃.na.ʁjɛʁ/', 'luh plü-kuh-par-FEH | mar-kuhⁿ ruh-too-rahⁿ-na-RYEHR', ['analepse', 'commentaire']),
  sent(1459, 'Trente ans tiennent en deux phrases : c’est un sommaire.', 'Thirty years fit into two sentences: it is a summary.',
    '/tʁɑ̃.tɑ̃ tjɛn ɑ̃ dø fʁaz sɛ.tœ̃ sɔ.mɛʁ/', 'trahⁿ-TAHⁿ TYENN ahⁿ deu FRAHZ | seh-tuhⁿ so-MEHR', ['rythme', 'commentaire']),
  sent(1460, 'Le texte saute trois ans : c’est une ellipse.', 'The text skips three years: it is an ellipsis.',
    '/lə tɛkst sot tʁwa.zɑ̃ sɛ.ty.ne.lips/', 'luh TEKST soht trwa-ZAHⁿ | seh-tü-nay-LEEPS', ['rythme', 'commentaire']),
  phrase(1461, 'un retour en arrière, une analepse', 'a flashback, an analepsis',
    '/œ̃ ʁə.tu.ʁɑ̃.na.ʁjɛʁ y.na.na.lɛps/', 'uhⁿ ruh-too-rahⁿ-na-RYEHR | ü-na-na-LEPS', ['analepse']),
  phrase(1462, 'le présent de narration', 'the narrative present',
    '/lə pʁe.zɑ̃ də na.ʁa.sjɔ̃/', 'luh pray-zahⁿ duh na-ra-SYOHⁿ', ['present']),
  rule(1463, 'Le récit accélère, ralentit ou saute : c’est son rythme.', 'A narrative speeds up, slows down or skips: that is its rhythm.',
    '/lə ʁe.si ak.se.lɛʁ ʁa.lɑ̃.ti u sot sɛ sɔ̃ ʁitm/', 'luh ray-SEE ak-say-LEHR | ra-lahⁿ-TEE | oo SOHT | seh sohⁿ REETM',
    'Trente ans en deux phrases, puis une minute en dix lignes. Pourquoi ?',
    'Le sommaire résume ce qui compte peu, la scène s’attarde sur ce qui compte, l’ellipse saute. Le rythme te dit ce que le texte juge important.', ['rythme']),
  sent(1464, 'La scène s’attarde sur une minute ; le sommaire résume des années.', 'The scene dwells on a minute; the summary sums up years.',
    '/la sɛn sa.taʁd syʁ yn mi.nyt lə sɔ.mɛʁ ʁe.zym de.za.ne/', 'la SEN sa-TARD sür ün mee-NÜT | luh so-MEHR ray-ZÜM day-za-NAY', ['rythme']),
];

/* ── ACT 5 · LES PAROLES ET LES PENSÉES (.1465-.1480) ────────────────────── */

export const ACT5_ROWS: Row[] = [
  sent(1465, 'Il avait ajouté : « Je t’appelle si j’ai un empêchement. »', 'He had added: “I will call you if something comes up.”',
    '/i.la.vɛ a.ʒu.te ʒə ta.pɛl si ʒe œ̃.nɑ̃.pɛʃ.mɑ̃/', 'ee-la-veh a-zhoo-TAY | zhuh ta-PEL | see zhay uhⁿ-nahⁿ-pesh-MAHⁿ', ['texte', 'lise', 'direct']),
  sent(1466, 'Elle avait répondu que ça ne la dérangeait pas d’attendre.', 'She had answered that she did not mind waiting.',
    '/ɛ.la.vɛ ʁe.pɔ̃.dy kə sa nə la de.ʁɑ̃.ʒɛ pa da.tɑ̃dʁ/', 'eh-la-veh ray-pohⁿ-DÜ | kuh sa nuh la day-rahⁿ-zheh pa da-TAHⁿDR', ['texte', 'lise', 'indirect']),
  sent(1467, 'Évidemment, il avait oublié.', 'Of course, he had forgotten.',
    '/e.vi.da.mɑ̃ i.la.vɛ u.bli.je/', 'ay-vee-da-MAHⁿ | ee-la-veh oo-blee-YAY', ['texte', 'lise', 'libre']),
  sent(1468, 'Non, elle n’allait pas l’appeler.', 'No, she was not going to call him.',
    '/nɔ̃ ɛl na.lɛ pa la.pə.le/', 'NOHⁿ | el na-leh pa la-puh-LAY', ['texte', 'lise', 'libre']),
  sent(1469, 'Elle se dit : « Il a encore oublié. »', 'She says to herself: “He has forgotten again.”',
    '/ɛl sə di i.la.ɑ̃.kɔ.ʁu.bli.je/', 'el suh DEE | ee-la-ahⁿ-ko-roo-blee-YAY', ['direct']),
  sent(1470, 'Elle se dit qu’il avait encore oublié.', 'She told herself he had forgotten again.',
    '/ɛl sə di ki.la.vɛ.tɑ̃.kɔ.ʁu.bli.je/', 'el suh DEE | kee-la-veh-tahⁿ-ko-roo-blee-YAY', ['indirect']),
  sent(1471, 'Il avait encore oublié, évidemment.', 'He had forgotten again, of course.',
    '/i.la.vɛ.tɑ̃.kɔ.ʁu.bli.je e.vi.da.mɑ̃/', 'ee-la-veh-tahⁿ-ko-roo-blee-YAY | ay-vee-da-MAHⁿ', ['libre']),
  sent(1472, 'C’est Lise qui pense que son fils a oublié, pas le narrateur.', 'It is Lise who thinks her son has forgotten, not the narrator.',
    '/sɛ liz ki pɑ̃s kə sɔ̃ fis a u.bli.je pa lə na.ʁa.tœʁ/', 'seh LEEZ kee pahⁿss kuh sohⁿ feess a oo-blee-YAY | pa luh na-ra-TUHR', ['libre', 'commentaire'], FCVDR),
  sent(1473, 'Le style indirect libre fait entendre la voix du personnage sans guillemets.', 'Free indirect style lets us hear the character’s voice without quotation marks.',
    '/lə stil ɛ̃.di.ʁɛkt libʁ fɛ.tɑ̃.tɑ̃dʁ la vwa dy pɛʁ.sɔ.naʒ sɑ̃ ɡij.mɛ/', 'luh STEEL ehⁿ-dee-rekt LEEBR | feh-tahⁿ-TAHⁿDR la VWA dü pehr-so-NAZH | sahⁿ geey-MEH', ['libre', 'commentaire']),
  sent(1474, 'Les exclamations montrent que la phrase vient du personnage.', 'The exclamations show that the sentence comes from the character.',
    '/le.zɛks.kla.ma.sjɔ̃ mɔ̃tʁ kə la fʁaz vjɛ̃ dy pɛʁ.sɔ.naʒ/', 'lay-zeks-kla-ma-SYOHⁿ MOHⁿTR | kuh la FRAHZ vyehⁿ dü pehr-so-NAZH', ['libre']),
  sent(1475, 'Le narrateur ne juge pas l’amie de Mathieu : c’est Lise qui la juge.', 'The narrator does not judge Mathieu’s girlfriend: Lise does.',
    '/lə na.ʁa.tœʁ nə ʒyʒ pa la.mi də ma.tjø sɛ liz ki la ʒyʒ/', 'luh na-ra-TUHR nuh zhüzh pa la-MEE duh ma-TYEU | seh LEEZ kee la ZHÜZH', ['libre', 'commentaire']),
  phrase(1476, 'le style indirect libre', 'free indirect style',
    '/lə stil ɛ̃.di.ʁɛkt libʁ/', 'luh STEEL | ehⁿ-dee-rekt LEEBR', ['libre']),
  rule(1477, 'Sans guillemets ni que, une phrase peut être la voix du personnage.', 'With no quotation marks and no que, a sentence can still be the character’s voice.',
    '/sɑ̃ ɡij.mɛ ni kə yn fʁaz pø.tɛtʁ la vwa dy pɛʁ.sɔ.naʒ/', 'sahⁿ geey-MEH nee KUH | ün FRAHZ peu-TEHTR | la VWA dü pehr-so-NAZH',
    '« Évidemment, il avait oublié. » Qui parle : le narrateur, ou Lise ?',
    'Lise : c’est sa colère et son « évidemment ». Le temps et la personne sont ceux du récit, mais la voix est la sienne. C’est le style indirect libre.', ['libre']),
  sent(1478, 'Sans verbe de parole, cherche les exclamations, les questions et les mots du personnage.', 'With no verb of saying, look for the character’s exclamations, questions and words.',
    '/sɑ̃ vɛʁb də pa.ʁɔl ʃɛʁʃ le.zɛks.kla.ma.sjɔ̃ le kɛs.tjɔ̃ e le mo dy pɛʁ.sɔ.naʒ/', 'sahⁿ VEHRB duh pa-ROL | SHEHRSH lay-zeks-kla-ma-SYOHⁿ | lay kes-TYOHⁿ | ay lay MOH dü pehr-so-NAZH', ['libre']),
  sent(1479, 'Au discours indirect, la parole passe par que et par un verbe comme dire.', 'In indirect speech, the words pass through que and a verb such as dire.',
    '/o dis.kuʁ ɛ̃.di.ʁɛkt la pa.ʁɔl pas paʁ kə e paʁ œ̃ vɛʁb kɔm diʁ/', 'oh dees-koor ehⁿ-dee-REKT | la pa-ROL pass par KUH | ay par uhⁿ VEHRB kom DEER', ['indirect']),
];

/* ── ACT 6 · LA TONALITÉ (.1480-.1500) ───────────────────────────────────── */

export const ACT6_ROWS: Row[] = [
  sent(1480, 'La tonalité est pathétique : le texte veut faire naître la pitié.', 'The tone is pathetic, in the literary sense: the text aims to stir pity.',
    '/la tɔ.na.li.te ɛ pa.te.tik lə tɛkst vø fɛʁ nɛtʁ la pi.tje/', 'la to-na-lee-TAY eh pa-tay-TEEK | luh TEKST veu fehr NEHTR la pee-TYAY', ['ton', 'commentaire'], FCVDR),
  sent(1481, 'Le comique naît du décalage entre la situation et les mots.', 'The comedy comes from the gap between the situation and the words.',
    '/lə kɔ.mik nɛ dy de.ka.laʒ ɑ̃tʁ la si.tɥa.sjɔ̃ e le mo/', 'luh ko-MEEK neh dü day-ka-LAZH | ahⁿtr la see-twa-SYOHⁿ ay lay MOH', ['ton', 'commentaire']),
  sent(1482, 'Les phrases courtes accélèrent le rythme et créent la tension.', 'Short sentences speed up the rhythm and create tension.',
    '/le fʁaz kuʁt ak.se.lɛʁ lə ʁitm e kʁe la tɑ̃.sjɔ̃/', 'lay frahz KOORT | ak-say-LEHR luh REETM | ay kray la tahⁿ-SYOHⁿ', ['ton', 'commentaire'], FCVDR),
  sent(1483, 'La phrase longue suit le mouvement lent des pensées.', 'The long sentence follows the slow movement of thought.',
    '/la fʁaz lɔ̃ɡ sɥi lə muv.mɑ̃ lɑ̃ de pɑ̃.se/', 'la frahz LOHⁿG | swee luh moov-mahⁿ LAHⁿ day pahⁿ-SAY', ['ton']),
  sent(1484, 'La répétition insiste sur la douleur du personnage.', 'The repetition dwells on the character’s pain.',
    '/la ʁe.pe.ti.sjɔ̃ ɛ̃.sist syʁ la du.lœʁ dy pɛʁ.sɔ.naʒ/', 'la ray-pay-tee-SYOHⁿ ehⁿ-SEEST | sür la doo-LUHR dü pehr-so-NAZH', ['ton']),
  sent(1485, 'Le texte fait naître la tristesse ; on ne sait rien de l’auteur.', 'The text stirs sadness; we know nothing about the author.',
    '/lə tɛkst fɛ nɛtʁ la tʁis.tɛs ɔ̃ nə sɛ ʁjɛ̃ də lo.tœʁ/', 'luh TEKST feh NEHTR la trees-TESS | ohⁿ nuh seh RYEHⁿ duh loh-TUHR', ['ton']),
  ps(1486, 'Il courut comme il n’avait pas couru depuis 1987.', 'He ran as he had not run since 1987.',
    '/il ku.ʁy kɔ.mil na.vɛ pa ku.ʁy də.pɥi mil nœf sɑ̃ ka.tʁə.vɛ̃.sɛt/', 'eel koo-RÜ | ko-meel na-veh pa koo-RÜ | duh-pwee meel nuhf sahⁿ ka-truh-vehⁿ-SET', ['texte', 'train', 'comique']),
  sent(1487, 'Deux hommes. Ils ne courent pas, eux.', 'Two men. They are not running.',
    '/dø.zɔm il nə kuʁ pa ø/', 'deu-ZOM | eel nuh koor PA | EU', ['texte', 'train', 'dramatique']),
  sent(1488, 'Je suis revenue sur la plage où nous marchions autrefois.', 'I have come back to the beach where we used to walk.',
    '/ʒə sɥi ʁə.və.ny syʁ la plaʒ u nu maʁ.ʃjɔ̃ o.tʁə.fwa/', 'zhuh swee ruh-vuh-NÜ | sür la PLAZH | oo noo mar-shyohⁿ oh-truh-FWA', ['ecoute', 'lyrique']),
  sent(1489, 'La mer est la même, grise et douce, et le vent a gardé ta voix.', 'The sea is the same, grey and gentle, and the wind has kept your voice.',
    '/la mɛʁ ɛ la mɛm ɡʁiz e dus e lə vɑ̃ a ɡaʁ.de ta vwa/', 'la MEHR eh la MEM | GREEZ ay DOOSS | ay luh VAHⁿ a gar-day ta VWA', ['ecoute', 'lyrique']),
  sent(1490, 'Chaque vague me rapporte un morceau de cet été-là.', 'Every wave brings me back a piece of that summer.',
    '/ʃak vaɡ mə ʁa.pɔʁ.tœ̃ mɔʁ.so də sɛ.te.te.la/', 'shak VAG | muh ra-por-tuhⁿ mor-SOH | duh seh-tay-tay-LA', ['ecoute', 'lyrique']),
  sent(1491, 'Je ne sais plus si je pleure ou si c’est le sel.', 'I no longer know if I am crying or if it is the salt.',
    '/ʒə nə sɛ ply si ʒə plœʁ u si sɛ lə sɛl/', 'zhuh nuh seh PLÜ | see zhuh PLUHR | oo see seh luh SEL', ['ecoute', 'lyrique']),
  sent(1492, 'Les mouettes tournent au-dessus de moi comme des pensées qui ne se posent pas.', 'The gulls circle above me like thoughts that never settle.',
    '/le mwɛt tuʁn o.də.sy də mwa kɔm de pɑ̃.se ki nə sə poz pa/', 'lay MWET toorn oh-duh-SÜ duh MWA | kom day pahⁿ-SAY | kee nuh suh pohz PA', ['ecoute', 'lyrique', 'image']),
  sent(1493, 'Le soleil monte lentement, et la plage devient d’or.', 'The sun rises slowly, and the beach turns to gold.',
    '/lə sɔ.lɛj mɔ̃t lɑ̃t.mɑ̃ e la plaʒ də.vjɛ̃ dɔʁ/', 'luh so-LEY mohⁿt lahⁿt-MAHⁿ | ay la PLAZH duh-vyehⁿ DOR', ['ecoute', 'lyrique']),
  sent(1494, 'Tout passe, dit-on ; rien ne passe tout à fait.', 'Everything passes, they say; nothing passes entirely.',
    '/tu pas di.tɔ̃ ʁjɛ̃ nə pas tu.ta.fɛ/', 'too PASS | dee-TOHⁿ | ryehⁿ nuh pass too-ta-FEH', ['ecoute', 'lyrique']),
  sent(1495, 'Je reste là jusqu’à ce que la marée efface mes pas.', 'I stay there until the tide wipes out my footprints.',
    '/ʒə ʁɛst la ʒys.ka sə kə la ma.ʁe e.fas me pa/', 'zhuh rest LA | zhüs-ka suh kuh la ma-RAY | ay-fass may PA', ['ecoute', 'lyrique']),
  sent(1496, 'La tonalité est lyrique : le je exprime ses émotions.', 'The tone is lyrical: the I expresses its emotions.',
    '/la tɔ.na.li.te ɛ li.ʁik lə ʒə ɛks.pʁim se.ze.mo.sjɔ̃/', 'la to-na-lee-TAY eh lee-REEK | luh ZHUH eks-PREEM say-zay-moh-SYOHⁿ', ['ton', 'lyrique', 'commentaire']),
  phrase(1497, 'la tonalité pathétique', 'the pathetic tone (stirring pity)',
    '/la tɔ.na.li.te pa.te.tik/', 'la to-na-lee-TAY | pa-tay-TEEK', ['ton']),
  rule(1498, 'Une tonalité se prouve par ses moyens : les mots, le rythme, les images.', 'A tone is proved by its means: the words, the rhythm, the images.',
    '/yn tɔ.na.li.te sə pʁuv paʁ se mwa.jɛ̃ le mo lə ʁitm le.zi.maʒ/', 'ün to-na-lee-TAY suh PROOV par say mwa-YEHⁿ | lay MOH | luh REETM | lay-zee-MAZH',
    '« Le ton est triste. » Est-ce un commentaire ?',
    'Pas encore : nomme la tonalité (pathétique, lyrique…), montre les moyens qui la créent, puis dis l’effet sur le lecteur.', ['ton']),
];

/* ── ACT 7 · LES IMAGES (.1499-.1513) ────────────────────────────────────── */

export const ACT7_ROWS: Row[] = [
  sent(1499, 'Le lac dormait sous le soleil comme un chat sur un coussin bleu.', 'The lake slept in the sun like a cat on a blue cushion.',
    '/lə lak dɔʁ.mɛ su lə sɔ.lɛj kɔ.mœ̃ ʃa syʁ œ̃ ku.sɛ̃ blø/', 'luh LAK dor-MEH | soo luh so-LEY | ko-muhⁿ SHA | sü-ruhⁿ koo-sehⁿ BLEU', ['texte', 'elise', 'comparaison']),
  sent(1500, 'Les voiliers tiraient sur leurs cordes comme des chiens impatients.', 'The sailing boats pulled at their ropes like impatient dogs.',
    '/le vwa.lje ti.ʁɛ syʁ lœʁ kɔʁd kɔm de ʃjɛ̃.zɛ̃.pa.sjɑ̃/', 'lay vwa-LYAY tee-REH | sür luhr KORD | kom day shyehⁿ-zehⁿ-pa-SYAHⁿ', ['texte', 'elise', 'comparaison'], FCVDR),
  sent(1501, 'Le ciel était une mer à l’envers.', 'The sky was an upside-down sea.',
    '/lə sjɛl e.tɛ.tyn mɛʁ a lɑ̃.vɛʁ/', 'luh SYEL ay-teh-tün MEHR | a lahⁿ-VEHR', ['texte', 'elise', 'metaphore']),
  ps(1502, 'Le vent courut dans les rues en renversant les chaises.', 'The wind ran through the streets, knocking over the chairs.',
    '/lə vɑ̃ ku.ʁy dɑ̃ le ʁy ɑ̃ ʁɑ̃.vɛʁ.sɑ̃ le ʃɛz/', 'luh VAHⁿ koo-RÜ | dahⁿ lay RÜ | ahⁿ rahⁿ-vehr-SAHⁿ lay SHEZ', ['texte', 'elise', 'personnification']),
  sent(1503, 'Le Léman était un vieux lion endormi.', 'Lake Geneva was an old sleeping lion.',
    '/lə le.mɑ̃ e.tɛ.tœ̃ vjø ljɔ̃ ɑ̃.dɔʁ.mi/', 'luh lay-MAHⁿ | ay-teh-tuhⁿ vyeu LYOHⁿ ahⁿ-dor-MEE', ['texte', 'elise', 'metaphore']),
  sent(1504, 'Une comparaison rapproche deux choses avec un outil : comme, tel, pareil à.', 'A comparison brings two things together with a linking word: comme, tel, pareil à.',
    '/yn kɔ̃.pa.ʁɛ.zɔ̃ ʁa.pʁɔʃ dø ʃoz a.vɛ.kœ̃.nu.ti kɔm tɛl pa.ʁɛj a/', 'ün kohⁿ-pa-reh-ZOHⁿ ra-PROSH deu SHOHZ | a-vek-uhⁿ-noo-TEE | KOM | TEL | pa-rey-A', ['comparaison']),
  sent(1505, 'La métaphore dit que l’un est l’autre, sans outil.', 'A metaphor says one thing is the other, with no linking word.',
    '/la me.ta.fɔʁ di kə lœ̃ ɛ lotʁ sɑ̃.zu.ti/', 'la may-ta-FOR | dee kuh LUHⁿ eh LOHTR | sahⁿ-zoo-TEE', ['metaphore'], FCVDR),
  sent(1506, 'La personnification donne au vent des gestes humains.', 'Personification gives the wind human gestures.',
    '/la pɛʁ.sɔ.ni.fi.ka.sjɔ̃ dɔn o vɑ̃ de ʒɛst y.mɛ̃/', 'la pehr-so-nee-fee-ka-SYOHⁿ | DONN oh VAHⁿ | day zhest ü-MEHⁿ', ['personnification']),
  sent(1507, 'Cette comparaison rend l’orage concret et presque vivant.', 'This comparison makes the storm concrete and almost alive.',
    '/sɛt kɔ̃.pa.ʁɛ.zɔ̃ ʁɑ̃ lɔ.ʁaʒ kɔ̃.kʁɛ e pʁɛsk vi.vɑ̃/', 'set kohⁿ-pa-reh-ZOHⁿ | rahⁿ lo-RAZH kohⁿ-KREH | ay presk vee-VAHⁿ', ['comparaison', 'commentaire'], FCVDR),
  sent(1508, 'L’orage réveille le lac comme il réveille Élise.', 'The storm wakes the lake as it wakes Élise.',
    '/lɔ.ʁaʒ ʁe.vɛj lə lak kɔ.mil ʁe.vɛj e.liz/', 'lo-RAZH ray-VEY luh LAK | ko-meel ray-vey ay-LEEZ', ['commentaire', 'elise']),
  sent(1509, 'Comme il pleuvait, Élise est rentrée.', 'As it was raining, Élise went home.',
    '/kɔ.mil plø.vɛ e.li.zɛ ʁɑ̃.tʁe/', 'ko-meel pleu-VEH | ay-lee-zeh rahⁿ-TRAY', ['piege', 'cause']),
  sent(1510, 'Son cœur était un tambour.', 'Her heart was a drum.',
    '/sɔ̃ kœʁ e.tɛ.tœ̃ tɑ̃.buʁ/', 'sohⁿ KUHR | ay-teh-tuhⁿ tahⁿ-BOOR', ['metaphore']),
  phrase(1511, 'une métaphore filée', 'an extended metaphor',
    '/yn me.ta.fɔʁ fi.le/', 'ün may-ta-for fee-LAY', ['metaphore']),
  rule(1512, 'Nommer l’image ne suffit pas : dis ce qu’elle fait voir ou sentir.', 'Naming the image is not enough: say what it makes you see or feel.',
    '/nɔ.me li.maʒ nə sy.fi pa di sə kɛl fɛ vwaʁ u sɑ̃.tiʁ/', 'no-may lee-MAZH nuh sü-fee PA | dee suh kel feh VWAR oo sahⁿ-TEER',
    '« Le texte contient une métaphore. » Est-ce assez ?',
    'Non : cite-la, nomme-la, puis donne son effet. « Le ciel, devenu une mer à l’envers, rend l’orage menaçant. »', ['image']),
  sent(1513, 'On aurait dit une mer à l’envers.', 'It looked like an upside-down sea.',
    '/ɔ̃.no.ʁɛ di yn mɛʁ a lɑ̃.vɛʁ/', 'ohⁿ-noh-reh DEE | ün MEHR a lahⁿ-VEHR', ['comparaison']),
];

/* ── ACT 8 · DÉCRIRE, FAIRE UN PORTRAIT (.1514-.1527) ────────────────────── */

export const ACT8_ROWS: Row[] = [
  sent(1514, 'C’était un homme petit et large, taillé comme une souche.', 'He was a short, broad man, built like a tree stump.',
    '/se.tɛ.tœ̃.nɔm pə.ti e laʁʒ ta.je kɔ.myn suʃ/', 'say-teh-tuhⁿ-NOM | puh-tee ay LARZH | ta-yay ko-mün SOOSH', ['texte', 'fortin', 'physique']),
  sent(1515, 'Deux yeux très bleus surveillaient le fleuve.', 'Two very blue eyes watched the river.',
    '/dø.zjø tʁɛ blø syʁ.vɛ.jɛ lə flœv/', 'deu-ZYEU treh BLEU | sür-veh-yeh luh FLUHV', ['texte', 'fortin', 'physique']),
  sent(1516, 'On le disait bourru ; les enfants savaient qu’il gardait des bonbons dans sa poche.', 'People called him gruff; the children knew he kept sweets in his pocket.',
    '/ɔ̃ lə di.zɛ bu.ʁy le.zɑ̃.fɑ̃ sa.vɛ kil ɡaʁ.dɛ de bɔ̃.bɔ̃ dɑ̃ sa pɔʃ/', 'ohⁿ luh dee-zeh boo-RÜ | lay-zahⁿ-FAHⁿ sa-veh keel gar-deh day bohⁿ-BOHⁿ dahⁿ sa POSH', ['texte', 'fortin', 'moral']),
  sent(1517, 'Il fumait une pipe qu’il n’allumait jamais.', 'He smoked a pipe he never lit.',
    '/il fy.mɛ yn pip kil na.ly.mɛ ʒa.mɛ/', 'eel fü-meh ün PEEP | keel na-lü-meh zha-MEH', ['texte', 'fortin', 'detail']),
  sent(1518, 'Les jours de grand vent, il restait au quai.', 'On days of high wind, he stayed at the quay.',
    '/le ʒuʁ də ɡʁɑ̃ vɑ̃ il ʁɛs.tɛ o ke/', 'lay zhoor duh grahⁿ VAHⁿ | eel res-teh oh KAY', ['texte', 'fortin', 'action']),
  sent(1519, 'Le portrait physique annonce le caractère.', 'The physical portrait announces the character.',
    '/lə pɔʁ.tʁɛ fi.zik a.nɔ̃s lə ka.ʁak.tɛʁ/', 'luh por-treh fee-ZEEK | a-nohⁿss luh ka-rak-TEHR', ['fonction', 'commentaire'], FCVDR),
  sent(1520, 'Un détail révèle un secret : la pipe qu’il n’allume jamais.', 'A detail reveals a secret: the pipe he never lights.',
    '/œ̃ de.taj ʁe.vɛl œ̃ sə.kʁɛ la pip kil na.lym ʒa.mɛ/', 'uhⁿ day-TAHY ray-VEL uhⁿ suh-KREH | la PEEP keel na-lüm zha-MEH', ['fonction', 'commentaire']),
  sent(1521, 'Ses gestes du matin disent sa rigueur mieux qu’un adjectif.', 'His morning routine shows his rigour better than an adjective.',
    '/se ʒɛst dy ma.tɛ̃ diz sa ʁi.ɡœʁ mjø kœ̃.na.dʒɛk.tif/', 'say zhest dü ma-TEHⁿ | deez sa ree-GUHR | myeu kuhⁿ-nad-zhek-TEEF', ['fonction', 'action']),
  sent(1522, 'La description ralentit le récit et installe une atmosphère.', 'The description slows the narrative down and sets a mood.',
    '/la dɛs.kʁip.sjɔ̃ ʁa.lɑ̃.ti lə ʁe.si e ɛ̃s.tal yn at.mɔs.fɛʁ/', 'la des-kreep-SYOHⁿ | ra-lahⁿ-TEE luh ray-SEE | ay ehⁿs-tal ün at-mos-FEHR', ['fonction', 'commentaire'], FCVDR),
  sent(1523, 'Le narrateur corrige l’image de l’homme bourru.', 'The narrator corrects the picture of the gruff man.',
    '/lə na.ʁa.tœʁ kɔ.ʁiʒ li.maʒ də lɔm bu.ʁy/', 'luh na-ra-TUHR ko-REEZH | lee-MAZH duh LOM boo-RÜ', ['moral', 'commentaire']),
  sent(1524, 'Les adjectifs mélioratifs montrent la tendresse du narrateur.', 'The appreciative adjectives show the narrator’s affection.',
    '/le.za.dʒɛk.tif me.ljɔ.ʁa.tif mɔ̃tʁ la tɑ̃.dʁɛs dy na.ʁa.tœʁ/', 'lay-zad-zhek-TEEF may-lyo-ra-TEEF | MOHⁿTR la tahⁿ-DRESS dü na-ra-TUHR', ['fonction', 'commentaire']),
  phrase(1525, 'un portrait en action', 'a portrait in action',
    '/œ̃ pɔʁ.tʁɛ ɑ̃.nak.sjɔ̃/', 'uhⁿ por-TREH | ahⁿ-nak-SYOHⁿ', ['action']),
  rule(1526, 'Un portrait ne se résume pas : il révèle.', 'A portrait is not something you summarise: it reveals.',
    '/œ̃ pɔʁ.tʁɛ nə sə ʁe.zym pa il ʁe.vɛl/', 'uhⁿ por-TREH | nuh suh ray-züm PA | eel ray-VEL',
    'Tu commentes un portrait. Que cherches-tu ?',
    'Ce que le corps, les gestes et les objets disent du personnage, et ce que le narrateur en pense.', ['fonction']),
  sent(1527, 'Il s’asseyait à l’arrière du bateau en fumant sa pipe.', 'He would sit at the back of the boat, smoking his pipe.',
    '/il sa.sɛ.jɛ a la.ʁjɛʁ dy ba.to ɑ̃ fy.mɑ̃ sa pip/', 'eel sa-seh-YEH | a la-RYEHR dü ba-TOH | ahⁿ fü-mahⁿ sa PEEP', ['action', 'gerondif']),
];

/* ── ACT 9 · L’INCIPIT ET LA CHUTE (.1528-.1540) ─────────────────────────── */

export const ACT9_ROWS: Row[] = [
  sent(1528, 'Vous êtes sûre que c’est lui ?', 'Are you sure it is him?',
    '/vu.zɛt syʁ kə sɛ lɥi/', 'voo-zet SÜR | kuh seh LWEE', ['texte', 'kabore', 'incipit']),
  sent(1529, 'Le monsieur du quatrième ne disait jamais bonjour.', 'The man on the fourth floor never said hello.',
    '/lə mə.sjø dy ka.tʁi.jɛm nə di.zɛ ʒa.mɛ bɔ̃.ʒuʁ/', 'luh muh-syeu dü ka-tree-YEM | nuh dee-zeh zha-meh bohⁿ-ZHOOR', ['texte', 'kabore']),
  sent(1530, 'Le sac contenait des baguettes et des croissants.', 'The bag contained baguettes and croissants.',
    '/lə sak kɔ̃t.nɛ de ba.ɡɛt e de kʁwa.sɑ̃/', 'luh SAK kohⁿt-NEH | day ba-GET ay day krwa-SAHⁿ', ['texte', 'kabore', 'chute']),
  sent(1531, 'L’incipit nous jette au milieu de l’action.', 'The opening throws us into the middle of the action.',
    '/lɛ̃.si.pit nu ʒɛt o mi.ljø də lak.sjɔ̃/', 'lehⁿ-see-PEET | noo zhet oh mee-lyeu duh lak-SYOHⁿ', ['incipit', 'commentaire'], FCVDR),
  phrase(1532, 'un début in medias res', 'an in medias res opening',
    '/œ̃ de.by in me.djas ʁɛs/', 'uhⁿ day-BÜ | een may-dyass RESS', ['incipit']),
  phrase(1533, 'une nouvelle à chute', 'a short story with a twist ending',
    '/yn nu.vɛl a ʃyt/', 'ün noo-vel a SHÜT', ['chute']),
  sent(1534, 'La chute renverse tout ce que le lecteur croyait.', 'The twist overturns everything the reader believed.',
    '/la ʃyt ʁɑ̃.vɛʁs tu sə kə lə lɛk.tœʁ kʁwa.jɛ/', 'la SHÜT rahⁿ-VEHRS | too suh kuh luh lek-TUHR krwa-YEH', ['chute', 'commentaire'], FCVDR),
  sent(1535, 'Un incipit informe, intrigue et donne le ton.', 'An opening informs, intrigues and sets the tone.',
    '/œ̃.nɛ̃.si.pit ɛ̃.fɔʁm ɛ̃.tʁiɡ e dɔn lə tɔ̃/', 'uhⁿ-nehⁿ-see-PEET | ehⁿ-FORM | ehⁿ-TREEG | ay DONN luh TOHⁿ', ['incipit']),
  sent(1536, 'On apprend qui, où et quand, mais pas pourquoi.', 'We learn who, where and when, but not why.',
    '/ɔ̃.na.pʁɑ̃ ki u e kɑ̃ mɛ pa puʁ.kwa/', 'ohⁿ-na-PRAHⁿ | KEE | OO | ay KAHⁿ | meh pa poor-KWA', ['incipit']),
  sent(1537, 'La fin nous oblige à relire le début autrement.', 'The ending makes us reread the beginning differently.',
    '/la fɛ̃ nu.zɔ.bliʒ a ʁə.liʁ lə de.by o.tʁə.mɑ̃/', 'la FEHⁿ | noo-zo-BLEEZH a ruh-LEER | luh day-BÜ oh-truh-MAHⁿ', ['chute']),
  sent(1538, 'Mme Kaboré s’était trompée de coupable.', 'Mrs Kaboré had got the wrong culprit.',
    '/ma.dam ka.bɔ.ʁe se.tɛ tʁɔ̃.pe də ku.pabl/', 'ma-dam ka-bo-RAY | say-teh trohⁿ-PAY duh koo-PABL', ['kabore', 'chute']),
  rule(1539, 'Le début promet ; la fin tient la promesse, ou la renverse.', 'The opening makes a promise; the ending keeps it, or overturns it.',
    '/lə de.by pʁɔ.mɛ la fɛ̃ tjɛ̃ la pʁɔ.mɛs u la ʁɑ̃.vɛʁs/', 'luh day-BÜ pro-MEH | la FEHⁿ tyehⁿ la pro-MESS | oo la rahⁿ-VEHRS',
    'Pourquoi commenter la première et la dernière phrase d’une nouvelle ?',
    'L’incipit pose un pacte : un ton, des personnages, une question. La chute y répond, souvent par surprise.', ['incipit', 'chute']),
];

/* ── ACT 10 · ROMAN, NOUVELLE, CONTE, POÈME, THÉÂTRE (.1540-.1552) ─────── */

export const ACT10_ROWS: Row[] = [
  sent(1540, 'Tu avais dit dix heures. Il est midi.', 'You said ten o’clock. It is noon.',
    '/ty a.vɛ di di.zœʁ i.lɛ mi.di/', 'tü a-veh DEE | dee-ZUHR | ee-leh mee-DEE', ['texte', 'theatre', 'replique']),
  sent(1541, 'C’est toujours plus petit quand c’est vide.', 'It is always smaller when it is empty.',
    '/sɛ tu.ʒuʁ ply pə.ti kɑ̃ sɛ vid/', 'seh too-zhoor plü puh-TEE | kahⁿ seh VEED', ['texte', 'theatre', 'replique']),
  sent(1542, 'Je n’ai jamais eu de place ici.', 'I never had a place here.',
    '/ʒə ne ʒa.mɛ y də plas i.si/', 'zhuh nay zha-meh Ü duh PLASS ee-SEE', ['texte', 'theatre', 'replique']),
  sent(1543, 'Elle disait que la pluie de Bruxelles lavait tout.', 'She used to say that Brussels rain washed everything clean.',
    '/ɛl di.zɛ kə la plɥi də bʁy.sɛl la.vɛ tu/', 'el dee-ZEH | kuh la plwee duh brü-SEL la-veh TOO', ['texte', 'theatre', 'replique']),
  sent(1544, 'La didascalie n’est pas dite : elle indique un geste, un ton ou un décor.', 'A stage direction is not spoken: it indicates a gesture, a tone or a set.',
    '/la di.das.ka.li nɛ pa dit ɛ.lɛ̃.dik œ̃ ʒɛst œ̃ tɔ̃ u œ̃ de.kɔʁ/', 'la dee-das-ka-LEE neh pa DEET | eh-lehⁿ-DEEK | uhⁿ ZHEST | uhⁿ TOHⁿ | oo uhⁿ day-KOR', ['theatre', 'didascalie'], FCVDR),
  sent(1545, 'Au théâtre, il n’y a pas de narrateur : les personnages parlent.', 'In the theatre there is no narrator: the characters speak.',
    '/o te.atʁ il nja pa də na.ʁa.tœʁ le pɛʁ.sɔ.naʒ paʁl/', 'oh tay-ATR | eel nya pa duh na-ra-TUHR | lay pehr-so-NAZH PARL', ['theatre', 'commentaire']),
  sent(1546, 'En littérature, une nouvelle est un récit court, souvent à chute.', 'In literature, a nouvelle is a short narrative, often with a twist.',
    '/ɑ̃ li.te.ʁa.tyʁ yn nu.vɛl ɛ.tœ̃ ʁe.si kuʁ su.vɑ̃ a ʃyt/', 'ahⁿ lee-tay-ra-TÜR | ün noo-VEL eh-tuhⁿ ray-see KOOR | soo-vahⁿ a SHÜT', ['genre']),
  sent(1547, 'Un poème en prose ne rime pas, mais il chante.', 'A prose poem does not rhyme, but it sings.',
    '/œ̃ pɔ.ɛm ɑ̃ pʁoz nə ʁim pa mɛ il ʃɑ̃t/', 'uhⁿ po-EM ahⁿ PROHZ | nuh reem PA | meh eel SHAHⁿT', ['genre']),
  phrase(1548, 'une réplique', 'a line of dialogue in a play',
    '/yn ʁe.plik/', 'ün ray-PLEEK', ['theatre', 'replique']),
  phrase(1549, 'une didascalie', 'a stage direction',
    '/yn di.das.ka.li/', 'ün dee-das-ka-LEE', ['theatre', 'didascalie']),
  sent(1550, 'Le conte s’ouvre souvent sur « Il était une fois ».', 'A tale often opens with “Once upon a time”.',
    '/lə kɔ̃t suvʁ su.vɑ̃ syʁ i.le.tɛ.tyn fwa/', 'luh KOHⁿT SOOVR soo-VAHⁿ | sür ee-lay-teh-tün FWA', ['genre']),
  rule(1551, 'Chaque genre a sa voix : un narrateur, un je lyrique, ou des personnages qui parlent.', 'Each genre has its voice: a narrator, a lyrical I, or characters who speak.',
    '/ʃak ʒɑ̃ʁ a sa vwa œ̃ na.ʁa.tœʁ œ̃ ʒə li.ʁik u de pɛʁ.sɔ.naʒ ki paʁl/', 'shak ZHAHⁿR a sa VWA | uhⁿ na-ra-TUHR | uhⁿ zhuh lee-REEK | oo day pehr-so-NAZH kee PARL',
    'Roman, poème, théâtre : qui parle ?',
    'Dans le roman et la nouvelle, un narrateur ; dans le poème, souvent un je lyrique ; au théâtre, personne ne raconte : les personnages parlent, et les didascalies guident.', ['genre']),
  sent(1552, 'Les didascalies disent ce que les personnages taisent.', 'The stage directions say what the characters keep quiet.',
    '/le di.das.ka.li diz sə kə le pɛʁ.sɔ.naʒ tɛz/', 'lay dee-das-ka-LEE DEEZ | suh kuh lay pehr-so-NAZH TEZ', ['theatre', 'didascalie', 'commentaire']),
];

/* ── ACT 11 · ÉCRIRE SUR UN TEXTE (.1553-.1566) ──────────────────────────── */

export const ACT11_ROWS: Row[] = [
  sent(1553, 'Le narrateur suggère que le père l’aimait sans le dire.', 'The narrator suggests that her father loved her without saying so.',
    '/lə na.ʁa.tœʁ syɡ.ʒɛʁ kə lə pɛʁ lɛ.mɛ sɑ̃ lə diʁ/', 'luh na-ra-TUHR süg-ZHEHR | kuh luh PEHR leh-MEH | sahⁿ luh DEER', ['formule', 'commentaire'], FCVDR),
  sent(1554, 'On peut y voir une critique des adultes du village.', 'One can read it as a criticism of the village adults.',
    '/ɔ̃ pø i vwaʁ yn kʁi.tik de.za.dylt dy vi.laʒ/', 'ohⁿ peu ee VWAR | ün kree-TEEK | day-za-DÜLT dü vee-LAZH', ['formule', 'commentaire']),
  sent(1555, 'L’auteure met en relief la solitude du personnage.', 'The author brings out the character’s loneliness.',
    '/lo.tœʁ mɛ.tɑ̃ ʁə.ljɛf la sɔ.li.tyd dy pɛʁ.sɔ.naʒ/', 'loh-TUHR meh-tahⁿ ruh-LYEF | la so-lee-TÜD dü pehr-so-NAZH', ['formule', 'commentaire'], FCVDR),
  sent(1556, 'Ce passage produit un effet de suspense.', 'This passage creates suspense.',
    '/sə pa.saʒ pʁɔ.dɥi.tœ̃.ne.fɛ də sys.pɛns/', 'suh pa-SAZH | pro-dwee-tuhⁿ-nay-FEH duh süs-PENSS', ['formule', 'commentaire']),
  sent(1557, 'La narratrice se décrit « droite comme une élève le jour de la rentrée ».', 'The narrator describes herself as “sitting up straight like a pupil on the first day of school”.',
    '/la na.ʁa.tʁis sə de.kʁi dʁwat kɔ.my.ne.lɛv lə ʒuʁ də la ʁɑ̃.tʁe/', 'la na-ra-TREESS suh day-KREE | DRWAT ko-mü-nay-LEV | luh zhoor duh la rahⁿ-TRAY', ['citer', 'commentaire']),
  sent(1558, 'Dans un commentaire, on écrit au présent.', 'In a commentary, you write in the present.',
    '/dɑ̃.zœ̃ kɔ.mɑ̃.tɛʁ ɔ̃.ne.kʁi o pʁe.zɑ̃/', 'dahⁿ-zuhⁿ ko-mahⁿ-TEHR | ohⁿ-nay-KREE oh pray-ZAHⁿ', ['methode']),
  sent(1559, 'Une idée, une citation courte, un effet.', 'One idea, one short quotation, one effect.',
    '/y.ni.de yn si.ta.sjɔ̃ kuʁt œ̃.ne.fɛ/', 'ü-nee-DAY | ün see-ta-syohⁿ KOORT | uhⁿ-nay-FEH', ['methode', 'citer'], FCVDR),
  sent(1560, 'La citation doit entrer dans la phrase sans la casser.', 'The quotation must fit into your sentence without breaking it.',
    '/la si.ta.sjɔ̃ dwa.tɑ̃.tʁe dɑ̃ la fʁaz sɑ̃ la ka.se/', 'la see-ta-SYOHⁿ | dwa-tahⁿ-TRAY dahⁿ la FRAHZ | sahⁿ la ka-SAY', ['citer']),
  sent(1561, 'Grâce à cette comparaison, la scène devient comique.', 'Thanks to this comparison, the scene becomes comic.',
    '/ɡʁa.sa sɛt kɔ̃.pa.ʁɛ.zɔ̃ la sɛn də.vjɛ̃ kɔ.mik/', 'gra-SA set kohⁿ-pa-reh-ZOHⁿ | la SEN duh-vyehⁿ ko-MEEK', ['formule', 'commentaire']),
  sent(1562, 'Il ne faut pas raconter l’histoire : il faut l’analyser.', 'You must not retell the story: you must analyse it.',
    '/il nə fo pa ʁa.kɔ̃.te lis.twaʁ il fo la.na.li.ze/', 'eel nuh foh pa ra-kohⁿ-TAY lees-TWAR | eel foh la-na-lee-ZAY', ['methode']),
  sent(1563, 'La narratrice porte un regard amusé sur la jeune femme qu’elle était.', 'The narrator looks with amusement at the young woman she used to be.',
    '/la na.ʁa.tʁis pɔʁ.tœ̃ ʁə.ɡa.ʁa.my.ze syʁ la ʒœn fam kɛ.le.tɛ/', 'la na-ra-TREESS | por-tuhⁿ ruh-ga-ra-mü-ZAY | sür la zhuhnn FAMM | keh-lay-TEH', ['formule', 'commentaire']),
  phrase(1564, 'mettre en relief', 'to bring out, to highlight',
    '/mɛ.tʁɑ̃ ʁə.ljɛf/', 'meh-trahⁿ ruh-LYEF', ['formule']),
  rule(1565, 'Commenter, c’est montrer comment le texte produit son effet.', 'Commenting means showing how the text creates its effect.',
    '/kɔ.mɑ̃.te sɛ mɔ̃.tʁe kɔ.mɑ̃ lə tɛkst pʁɔ.dɥi sɔ̃.ne.fɛ/', 'ko-mahⁿ-TAY | seh mohⁿ-TRAY ko-MAHⁿ | luh TEKST pro-dwee sohⁿ-nay-FEH',
    'Raconter l’histoire, est-ce commenter ?',
    'Non : ton lecteur connaît déjà l’histoire. Montre qui parle, par quels yeux, avec quels mots, et l’effet produit, citation à l’appui.', ['methode']),
  sent(1566, 'Je n’ai toujours rien compris au football.', 'I still have not understood a thing about football.',
    '/ʒə ne tu.ʒuʁ ʁjɛ̃ kɔ̃.pʁi o fut.bol/', 'zhuh nay too-zhoor RYEHⁿ | kohⁿ-pree oh foot-BOL', ['texte', 'stagiaire', 'chute']),
];

/* ── ACT 12 · TON COMMENTAIRE (.1567-.1580) ──────────────────────────────── */

export const ACT12_ROWS: Row[] = [
  sent(1567, 'Le narrateur raconte à la troisième personne, mais on voit tout par les yeux d’Armand.', 'The narrator tells the story in the third person, but we see everything through Armand’s eyes.',
    '/lə na.ʁa.tœʁ ʁa.kɔ̃.ta la tʁwa.zjɛm pɛʁ.sɔn mɛ ɔ̃ vwa tu paʁ le.zjø daʁ.mɑ̃/', 'luh na-ra-TUHR ra-kohⁿ-ta la trwa-zyem pehr-SONN | meh ohⁿ vwa TOO | par lay-zyeu dar-MAHⁿ', ['tache', 'commentaire'], FCVDR),
  sent(1568, 'Totale, vraiment.', 'Total, really.',
    '/tɔ.tal vʁɛ.mɑ̃/', 'to-TAL | vreh-MAHⁿ', ['tache', 'libre']),
  sent(1569, 'Ils s’en allaient, un peu gênés, comme on quitte un enterrement.', 'They went off, a little embarrassed, the way people leave a funeral.',
    '/il sɑ̃.na.lɛ œ̃ pø ʒɛ.ne kɔ.mɔ̃ kit œ̃.nɑ̃.tɛʁ.mɑ̃/', 'eel sahⁿ-na-LEH | uhⁿ peu zheh-NAY | ko-mohⁿ KEET uhⁿ-nahⁿ-tehr-MAHⁿ', ['tache', 'comparaison']),
  sent(1570, 'La tonalité est mélancolique, avec une pointe d’ironie.', 'The tone is melancholy, with a touch of irony.',
    '/la tɔ.na.li.te ɛ me.lɑ̃.kɔ.lik a.vɛk yn pwɛ̃t di.ʁɔ.ni/', 'la to-na-lee-TAY eh may-lahⁿ-ko-LEEK | a-vek ün pwehⁿt dee-ro-NEE', ['tache', 'ton', 'commentaire'], FCVDR),
  sent(1571, 'Le dernier geste d’Armand dit ce qu’il ne dit jamais.', 'Armand’s last gesture says what he never says.',
    '/lə dɛʁ.nje ʒɛst daʁ.mɑ̃ di sə kil nə di ʒa.mɛ/', 'luh dehr-nyay ZHEST dar-MAHⁿ | dee suh keel nuh dee zha-MEH', ['tache', 'commentaire']),
  sent(1572, 'Ce texte m’a touché, mais je dois montrer pourquoi.', 'This text moved me, but I have to show why.',
    '/sə tɛkst ma tu.ʃe mɛ ʒə dwa mɔ̃.tʁe puʁ.kwa/', 'suh TEKST ma too-SHAY | meh zhuh dwa mohⁿ-tray poor-KWA', ['methode']),
  sent(1573, 'Pour conclure, ce passage fait d’une fermeture de magasin un adieu.', 'To conclude, this passage turns a shop closing into a farewell.',
    '/puʁ kɔ̃.klyʁ sə pa.saʒ fɛ dyn fɛʁ.mə.tyʁ də ma.ɡa.zɛ̃ œ̃.na.djø/', 'poor kohⁿ-KLÜR | suh pa-SAZH feh dün fehr-muh-TÜR duh ma-ga-ZEHⁿ | uhⁿ-na-DYEU', ['tache', 'commentaire']),
  phrase(1574, 'un commentaire de texte', 'a text commentary',
    '/œ̃ kɔ.mɑ̃.tɛʁ də tɛkst/', 'uhⁿ ko-mahⁿ-TEHR duh TEKST', ['methode']),
  sent(1575, 'Il présente d’abord le texte, puis il l’analyse, citations à l’appui.', 'He first introduces the text, then analyses it, with quotations as support.',
    '/il pʁe.zɑ̃t da.bɔʁ lə tɛkst pɥi il la.na.liz si.ta.sjɔ̃ a la.pɥi/', 'eel pray-ZAHⁿT da-bor luh TEKST | pwee eel la-na-LEEZ | see-ta-SYOHⁿ a la-PWEE', ['methode']),
  sent(1576, 'Armand ne leur en voulait pas.', 'Armand did not hold it against them.',
    '/aʁ.mɑ̃ nə lœʁ ɑ̃ vu.lɛ pa/', 'ar-MAHⁿ | nuh luhr ahⁿ voo-leh PA', ['tache']),
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §H. THE ROW INDEX
 * ══════════════════════════════════════════════════════════════════════════ */

export const ROWS_BY_ACT: Row[][] = [
  ACT1_ROWS, ACT2_ROWS, ACT3_ROWS, ACT4_ROWS, ACT5_ROWS, ACT6_ROWS,
  ACT7_ROWS, ACT8_ROWS, ACT9_ROWS, ACT10_ROWS, ACT11_ROWS, ACT12_ROWS,
];

export const ALL_ROWS: Row[] = ROWS_BY_ACT.flat();

/** Rows a dictation mission can use, by act. */
export const dicteeFor = (act: number): string[] =>
  (ROWS_BY_ACT[act - 1] ?? []).filter((r) => (r.drills as string[]).includes('dictation')).map((r) => r.id);

/* ══════════════════════════════════════════════════════════════════════════
 *  §I. THE REAL QUOTATIONS (§A.7). Short, public domain, to check against an
 *  edition before publish. Each carries the line shown on screen as its
 *  source label, so the attribution is never retyped.
 * ══════════════════════════════════════════════════════════════════════════ */

export type Quote = { fr: string; en: string; source: string };

export const Q_BOVARY: Quote = {
  fr: 'Nous étions à l’Étude, quand le Proviseur entra, suivi d’un nouveau habillé en bourgeois et d’un garçon de classe qui portait un grand pupitre.',
  en: 'We were in the study hall when the headmaster came in, followed by a new boy dressed in ordinary clothes and a school servant carrying a large desk.',
  source: 'Gustave Flaubert, Madame Bovary, 1857',
};
export const Q_COEUR: Quote = {
  fr: 'Pendant un demi-siècle, les bourgeoises de Pont-l’Évêque envièrent à Mme Aubain sa servante Félicité.',
  en: 'For half a century, the middle-class ladies of Pont-l’Évêque envied Mme Aubain her servant Félicité.',
  source: 'Gustave Flaubert, « Un cœur simple », 1877',
};
export const Q_PROUST: Quote = {
  fr: 'Longtemps, je me suis couché de bonne heure.',
  en: 'For a long time, I went to bed early.',
  source: 'Marcel Proust, Du côté de chez Swann, 1913',
};
export const Q_PARURE_1: Quote = {
  fr: 'C’était une de ces jolies et charmantes filles, nées, comme par une erreur du destin, dans une famille d’employés.',
  en: 'She was one of those pretty and charming girls born, as if by a mistake of fate, into a family of clerks.',
  source: 'Guy de Maupassant, « La Parure », 1884',
};
export const Q_PARURE_FIN: Quote = {
  fr: 'Mais la mienne était fausse.',
  en: 'But mine was fake.',
  source: 'Guy de Maupassant, « La Parure », 1884, les dernières lignes',
};
export const Q_SEGUIN_1: Quote = {
  fr: 'M. Seguin n’avait jamais eu de bonheur avec ses chèvres.',
  en: 'Monsieur Seguin had never had any luck with his goats.',
  source: 'Alphonse Daudet, « La Chèvre de M. Seguin », Lettres de mon moulin, 1869',
};
export const Q_SEGUIN_FIN: Quote = {
  fr: 'Alors le loup se jeta sur la petite chèvre et la mangea.',
  en: 'Then the wolf threw himself on the little goat and ate her.',
  source: 'Alphonse Daudet, « La Chèvre de M. Seguin », 1869, la fin du conte',
};
export const Q_GERMINAL: Quote = {
  fr: 'Dans la plaine rase, sous la nuit sans étoiles, d’une obscurité et d’une épaisseur d’encre, un homme suivait seul la grande route de Marchiennes à Montsou, dix kilomètres de pavé coupant tout droit, à travers les champs de betteraves.',
  en: 'On the bare plain, under a starless night as dark and thick as ink, a man was walking alone along the main road from Marchiennes to Montsou, ten kilometres of paving cutting straight across the beet fields.',
  source: 'Émile Zola, Germinal, 1885',
};
export const Q_NELLIGAN_1: Quote = {
  fr: 'Ce fut un grand Vaisseau taillé dans l’or massif',
  en: 'It was a great Ship carved from solid gold',
  source: 'Émile Nelligan, « Le Vaisseau d’or », Montréal, publié en 1904',
};
export const Q_NELLIGAN_2: Quote = {
  fr: 'Qu’est devenu mon cœur, navire déserté ?',
  en: 'What has become of my heart, a deserted ship?',
  source: 'Émile Nelligan, « Le Vaisseau d’or »',
};
export const Q_HUGO: Quote = {
  fr: 'Demain, dès l’aube, à l’heure où blanchit la campagne, / Je partirai.',
  en: 'Tomorrow, at dawn, at the hour when the countryside whitens, / I will set out.',
  source: 'Victor Hugo, Les Contemplations, 1856',
};
export const Q_BAUDELAIRE: Quote = {
  fr: 'Il faut être toujours ivre. Tout est là : c’est l’unique question.',
  en: 'One must always be drunk. That is everything: it is the only question.',
  source: 'Charles Baudelaire, « Enivrez-vous », Le Spleen de Paris, 1869',
};
export const Q_CANDIDE: Quote = {
  fr: 'Il y avait en Vestphalie, dans le château de M. le baron de Thunder-ten-tronckh, un jeune garçon à qui la nature avait donné les mœurs les plus douces.',
  en: 'In Westphalia, in the castle of the Baron of Thunder-ten-tronckh, there lived a young boy whom nature had given the gentlest of manners.',
  source: 'Voltaire, Candide, 1759',
};

/* ══════════════════════════════════════════════════════════════════════════
 *  §J. THE TEXTS
 *
 *  The anchor readings (200 to 350 words, B2-BUILD-LOG « Reading at B2 »)
 *  and the « Dans un texte » paragraphs (60 to 120 words) that close acts 3
 *  to 11. ALL ORIGINAL, written for the lesson and labelled so on screen,
 *  except the act 8 paragraph (Zola's first sentence, framed). Word counts
 *  are asserted by scratch/_b230-words.mts. Every dialogue uses guillemets,
 *  never a dash.
 * ══════════════════════════════════════════════════════════════════════════ */

export const ORIGINAL = 'Texte original écrit pour la leçon.';

/** Act 1: the opening page of an invented novel. An unreliable « je ». */
export const TEXTE_VOISIN =
  `${ORIGINAL} Début d’un roman. Depuis qu’elle a emménagé au troisième, en septembre, je n’ai plus une minute de tranquillité. Je ne me plains pas, remarquez : je suis un homme discret, et ce que font les autres ne m’a jamais intéressé. Mais il faut bien que quelqu’un tienne les comptes. Je note donc tout dans un petit carnet, que je range dans le tiroir de la cuisine. Lundi : trois visites, dont un livreur qui a sonné chez moi par erreur, à 21 h 12. Mardi : de la musique jusqu’à 22 h. Mercredi : elle a descendu ses poubelles un jour trop tôt. Elle reçoit des visites à toute heure. Des amis, dit-elle, quand je la croise dans l’escalier et que je lui demande, poliment, qui sont tous ces gens. Des amis ! À son âge, on a des amis ; au mien, on a des voisins. Personne ne vient me voir, et c’est très bien ainsi. Ma fille m’appelle le dimanche, quand elle y pense. Hier, la jeune femme a frappé à ma porte avec une assiette de biscuits. « Pour vous remercier d’avoir gardé mon colis », a-t-elle dit. Je n’ai pas ouvert tout de suite : j’ai d’abord regardé par le judas, pour vérifier qu’elle était seule. Les biscuits étaient trop sucrés. J’en ai tout de même mangé quatre, par politesse, et j’ai noté l’heure de sa visite dans le carnet : 16 h 05. On ne sait jamais.`;

/** Act 2: a memoir, a witness narrator (near Namur). */
export const TEXTE_LAMBERT =
  `${ORIGINAL} Souvenir d’enfance. Monsieur Lambert est arrivé un lundi de septembre, avec une valise en carton et un accent que personne ne savait situer. Notre village, près de Namur, n’avait qu’une école, et une seule classe : nous étions onze élèves, du plus petit au plus grand, et j’étais la plus jeune. Je ne comprenais pas grand-chose à ce qui se passait chez les adultes, mais je voyais bien que notre nouvel instituteur les dérangeait. Il ne venait pas à la messe. Il faisait la classe dehors quand il faisait beau. Il nous lisait des livres qui n’étaient pas au programme, et il riait avec nous, ce qui, au village, ne se faisait pas. Ma mère disait qu’il était un drôle de numéro. Mon père ne disait rien, ce qui était pire. Au printemps, une pétition a circulé ; je l’ai vue sur la table de la cuisine, à côté du pain. Je ne savais pas encore lire les signatures, mais j’ai reconnu celle de mon père, parce qu’il signait toujours d’une grande boucle. Monsieur Lambert est parti en juin, sans faire d’adieux. Il m’a laissé un livre, avec une phrase écrite sur la première page. J’ai mis vingt ans à comprendre cette phrase. Aujourd’hui, c’est moi qui fais la classe, dans une autre école, et je lis à mes élèves des livres qui ne sont pas au programme.`;

/** Act 3: a novel page, internal focalisation (Dakar). */
export const TEXTE_AMINATA =
  `${ORIGINAL} Extrait d’un roman. Quand le car s’arrêta enfin, Aminata resta un moment assise, son sac serré contre elle. Par la vitre, Dakar lui parut immense, bruyante, pleine de gens qui savaient tous où ils allaient. Elle descendit la dernière. La chaleur la frappa au visage comme une porte qu’on ouvre sur un four. Autour d’elle, des vendeurs criaient des prix qu’elle ne comprenait pas, des taxis jaunes et noirs klaxonnaient sans raison, et une odeur de poisson grillé lui rappela brusquement la cuisine de sa grand-mère, à Ziguinchor. Elle avait promis de ne pas pleurer. Pas devant tous ces inconnus, pas le premier jour. Où était donc sa tante ? Elle chercha des yeux le boubou vert dont sa mère lui avait parlé au téléphone, mais tous les boubous lui semblaient verts. Un homme s’approcha, lui sourit et tendit la main vers son sac. Voulait-il l’aider, ou la voler ? Elle recula d’un pas, le cœur battant. L’homme haussa les épaules et s’éloigna. Alors une voix, derrière elle, prononça son prénom en entier, comme on ne le faisait qu’au village : « Aminata Diédhiou ! » Elle se retourna. La femme qui ouvrait les bras était plus petite qu’elle ne l’imaginait, et son boubou était bleu.`;

/** Act 4: foreground, background, flashback, summary, présent de narration. */
export const TEXTE_JEANNE =
  `${ORIGINAL} Extrait d’un roman. Le phare de l’Anse-aux-Brumes était éteint depuis trente ans quand Jeanne revint au village. Elle avait quitté la Gaspésie à dix-sept ans, un matin d’octobre, sans dire au revoir à son père. Elle se rappelait encore le bruit de ses bottes sur le quai, la brume qui mangeait les bateaux, la valise trop lourde. Ce matin-là, elle s’était juré de ne jamais revenir. Les années passèrent. Elle vécut à Montréal, puis à Lyon, se maria, divorça, éleva deux filles. Elle ne pensait presque plus au phare. Parfois, en hiver, elle rêvait d’une lumière qui tournait dans la nuit, et se réveillait sans savoir pourquoi. Puis une lettre du notaire arriva : son père était mort, et la maison lui revenait. Jeanne prit la route un lundi. Le village n’avait pas changé : les mêmes maisons blanches, le même vent, la même odeur de sel. Devant la porte, elle hésita longtemps, la clé à la main. Enfin, elle entre. La cuisine est intacte. Sur la table, il y a deux tasses, comme si quelqu’un l’attendait. Au mur, elle voit une photo qu’elle ne connaît pas : elle-même, à dix-sept ans, sur le quai, avec sa valise. Son père l’avait donc regardée partir. Il ne l’avait jamais dit.`;

/** Act 5: direct, indirect and free indirect speech (Montréal). */
export const TEXTE_LISE =
  `${ORIGINAL} Extrait d’une nouvelle. Le 24 décembre, à six heures, Lise avait déjà mis la table pour trois. Il neigeait sur Montréal depuis le matin, une neige fine et obstinée, et la rue Saint-Denis était presque vide. Elle regarda l’horloge, puis son téléphone. Rien. Mathieu avait dit qu’il viendrait vers six heures, six heures et demie. Il avait ajouté : « Je t’appelle si j’ai un empêchement. » Elle avait répondu que ça ne la dérangeait pas d’attendre. Sept heures. Elle sortit la tourtière du four. Évidemment, il avait oublié. Il oubliait toujours tout, depuis qu’il vivait à Québec avec cette fille. Et elle, elle était là, comme une idiote, avec sa tourtière et ses bougies ! Non, elle n’allait pas l’appeler. Qu’il se débrouille. À huit heures, elle souffla les bougies. Elle mit son manteau et descendit au dépanneur acheter du lait, pour avoir quelque chose à faire. Au coin de la rue, une voiture était arrêtée, les feux de détresse allumés, à moitié enfoncée dans un banc de neige. Un jeune homme pelletait autour des roues, sans gants. Il leva la tête. « Maman ! J’ai plus de batterie, j’ai pas pu t’appeler. » Elle resta un moment sans rien dire. Puis elle lui prit la pelle des mains.`;

/** Act 6: three short pages, one event, three tonalités. */
export const TEXTE_TRAINS =
  `Textes originaux écrits pour la leçon. Trois pages, un même train. A. Gérard courut. Il courut comme il n’avait pas couru depuis 1987, sa valise dans une main, son sandwich dans l’autre, son chapeau quelque part derrière lui. Sur le quai, les portes du train se fermèrent avec la lenteur polie d’un maître d’hôtel. Gérard frappa à la vitre. Un enfant, à l’intérieur, lui fit un signe de la main. Gérard, beau joueur, lui rendit son salut avec le sandwich. B. Elle arriva sur le quai au moment où le train partait. C’était le dernier de la journée, et le dernier, peut-être, qui aurait pu la conduire auprès de sa mère avant la fin. Elle ne courut pas. À quoi bon ? Elle resta là, immobile, sa petite valise à la main, à regarder les lumières rouges s’éloigner, puis disparaître. Le quai se vida. Personne ne remarqua cette femme qui pleurait sans bruit sous l’horloge. C. Vingt-deux heures cinquante-huit. Le train part à vingt-trois heures. Karim traverse le hall en courant. Derrière lui, des pas. Deux hommes. Ils ne courent pas, eux : ils savent qu’il ne peut aller nulle part ailleurs. Quai 4. Les portes sifflent. Il saute. Les portes se referment sur son sac, le lâchent. Le train démarre. Sur le quai, un des deux hommes sort son téléphone.`;

/** Act 7: a storm on Lake Geneva, full of images (Lausanne). */
export const TEXTE_ELISE =
  `${ORIGINAL} Extrait d’un roman. Vers cinq heures, le lac changea de visage. Le matin encore, il dormait sous le soleil comme un chat sur un coussin bleu ; à présent, il se ridait, se creusait, prenait une couleur d’ardoise. Les montagnes de l’autre rive avaient disparu derrière un rideau gris. Au port d’Ouchy, les voiliers tiraient sur leurs cordes comme des chiens impatients. Le vent arriva d’un coup. Il arracha les parasols des terrasses, fit claquer les drapeaux, courut dans les rues en renversant les chaises. Les premières gouttes tombèrent, lourdes, tièdes, pareilles à des pièces de monnaie. Élise était sortie sans parapluie. Autour d’elle, les passants couraient, le journal sur la tête. Elle ne chercha pas d’abri. Elle leva les yeux : le ciel était une mer à l’envers, noire et pleine de colère. Elle pensa à son père, qui disait que le Léman était un vieux lion endormi, qu’on ne réveillait jamais impunément. Une vague plus haute que les autres franchit le quai et vint mourir à ses pieds. Élise recula en riant. Depuis l’hiver, elle vivait comme derrière une vitre, polie, absente, sans rien sentir. Ce soir-là, trempée jusqu’aux os, pour la première fois depuis des mois, elle se sentit vivante.`;

/** Act 8: a portrait in action (an invented island on the St Lawrence). */
export const TEXTE_FORTIN =
  `${ORIGINAL} Extrait d’un roman. Le père Fortin était le passeur de l’île aux Hérons depuis si longtemps que personne ne se rappelait l’avoir vu jeune. C’était un homme petit et large, taillé comme une souche, avec des mains énormes, crevassées, qui semblaient appartenir à un géant. Sous sa casquette de laine, qu’il ne quittait ni l’été ni l’hiver, deux yeux très bleus, très vifs, surveillaient le fleuve sans jamais se poser sur les passagers. Il parlait peu, et ne riait presque jamais, sauf avec les mouettes, à qui il murmurait parfois quelques mots. Quand un touriste lui demandait combien de temps durait la traversée, il répondait : « Ça dépend du fleuve », et l’affaire était close. On le disait bourru ; les enfants de l’île savaient qu’il gardait toujours des bonbons à la menthe dans la poche de son ciré. Chaque matin, il arrivait au quai une heure avant le départ, vérifiait les cordages, essuyait les bancs, puis s’asseyait à l’arrière du bateau, les coudes sur les genoux, en fumant une pipe qu’il n’allumait jamais. Il avait perdu un frère dans une tempête, bien des années plus tôt ; il n’en parlait pas. Mais les jours de grand vent, il restait au quai, et personne, pas même le maire, ne l’aurait fait changer d’avis.`;

/** Act 9: a complete short story, in medias res, with a twist. */
export const TEXTE_KABORE =
  `${ORIGINAL} Une nouvelle. « Vous êtes sûre que c’est lui ? » La policière posa la photo sur la table. Mme Kaboré mit ses lunettes, regarda longtemps le visage de l’homme, puis hocha la tête. Oui, c’était lui. Le monsieur du quatrième, celui qui ne disait jamais bonjour. Depuis trois semaines, il sortait chaque nuit à deux heures et ne rentrait qu’à l’aube, avec un grand sac noir. Elle l’avait noté sur son calendrier, soir après soir, de son écriture appliquée d’ancienne institutrice. Et puis, il y avait eu les cambriolages : la boulangerie, la pharmacie, le tabac du coin. Toujours la nuit. La policière remercia Mme Kaboré et promit de vérifier. Le lendemain, deux agents attendirent l’homme au pied de l’immeuble. Il sortit à deux heures, comme prévu, avec son grand sac noir. Derrière son rideau, Mme Kaboré retint son souffle. Les agents l’arrêtèrent et ouvrirent le sac. Il contenait des baguettes, des croissants et une trentaine de pains au chocolat. L’homme du quatrième était le nouveau boulanger de la rue des Tilleuls : il livrait, chaque matin, les hôtels du quartier. Le soir même, un sachet de croissants attendait Mme Kaboré devant sa porte, avec un mot : « Pour ma voisine la plus attentive. » Elle alla le remercier le lendemain, un peu honteuse. Les croissants étaient excellents. Quant aux cambrioleurs, on les arrêta en mars : c’étaient les deux fils du pharmacien.`;

/** Act 10: a theatre scene (Brussels). Répliques and didascalies. */
export const TEXTE_SOEURS =
  `${ORIGINAL} Une scène de théâtre. Un appartement vide, à Bruxelles. Des cartons partout. Au fond, une fenêtre ouverte sur la pluie. ROSE, à genoux, emballe de la vaisselle dans du papier journal. CLAIRE entre, un parapluie à la main. CLAIRE : Tu as commencé sans moi. ROSE (sans lever la tête) : Tu avais dit dix heures. Il est midi. CLAIRE : Le train. Tu sais bien. (Elle pose le parapluie et regarde autour d’elle.) C’est plus petit que dans mon souvenir. ROSE : C’est toujours plus petit quand c’est vide. (Un temps.) J’ai gardé les assiettes bleues pour toi. CLAIRE : Je n’en veux pas. ROSE (elle se relève brusquement) : Maman les a gardées quarante ans pour que tu les aies, et tu n’en veux pas ? CLAIRE (doucement) : Je n’ai pas de place, Rose. Je n’ai jamais eu de place ici. (Silence. Rose la regarde, puis reprend une assiette et l’enveloppe lentement.) ROSE : Alors je les garde. (À elle-même.) Il faut bien que quelqu’un les garde. (Claire s’approche de la fenêtre et tend la main sous la pluie.) CLAIRE : Elle disait que la pluie de Bruxelles lavait tout. ROSE : Elle disait beaucoup de choses. (Elles rient toutes les deux, pour la première fois.)`;

/** Act 11: a DELF B2-style literary extract (Abidjan), first person. */
export const TEXTE_STAGIAIRE =
  `${ORIGINAL} Extrait d’un roman. Le premier jour, à Abidjan, j’arrivai au journal avec une heure d’avance, un stylo neuf et la certitude d’être attendue. Le gardien me regarda comme on regarde un colis livré à la mauvaise adresse. « La rédaction ? Troisième étage. Mais il n’y a personne avant dix heures. » Je montai quand même. La salle était immense, sombre, encombrée de piles de journaux jaunis qui sentaient la poussière et le café froid. Je m’assis sur la seule chaise libre et j’attendis, droite comme une élève le jour de la rentrée. À dix heures et quart, un homme entra, jeta sa veste sur un bureau et alluma la radio. Il ne me vit pas. Je toussai. Il me vit. « Ah, c’est vous, la stagiaire ? Parfait. Vous savez écrire vite ? » Je répondis que oui, bien sûr, ce qui n’était qu’à moitié vrai. Il me tendit une feuille couverte de chiffres : les résultats du championnat de football. « Deux mille signes pour midi. » Je ne connaissais rien au football. À midi moins cinq, je rendis mon texte. Il le lut sans un mot, barra la moitié des phrases, garda la dernière. Puis il leva les yeux vers moi et, pour la première fois, il sourit. Trente ans plus tard, je dirige ce journal. Je n’ai toujours rien compris au football.`;

/** Act 12: THE TASK EXTRACT. Printed twice: as the act's reading, and in
 *  the task brief (no `source` field on `task`). Third person, internal
 *  focalisation on Armand, free indirect style, two comparisons, a
 *  melancholy tone with a touch of irony, a closing gesture. */
export const TEXTE_ARMAND =
  `${ORIGINAL} Extrait d’une nouvelle. Ce samedi-là, Armand Leduc ouvrit son épicerie pour la dernière fois. Il leva le rideau de fer à sept heures, comme depuis quarante et un ans, et le bruit lui parut plus fort que d’habitude, presque indécent. Dans la vitrine, une affiche annonçait : « Liquidation totale ». Totale, vraiment. Il ne resterait rien, ni les conserves, ni les bocaux de bonbons, ni la vieille balance que son père avait achetée le jour de l’ouverture. Les clients vinrent nombreux. Ils disaient tous la même chose : que c’était bien dommage, qu’on ne trouvait plus de commerces comme le sien, qu’ils reviendraient le voir. Ils achetaient des boîtes de sardines à moitié prix et s’en allaient, un peu gênés, comme on quitte un enterrement. Où étaient-ils donc, tous ces gens, depuis que le supermarché avait ouvert au bout de la rue ? Armand ne leur en voulait pas. Il souriait, il rendait la monnaie, il disait « merci, bonne journée ». À dix-huit heures, il baissa le rideau. Dans le magasin vide, la balance était restée sur le comptoir : personne n’en avait voulu. Il posa la main dessus, doucement, comme sur l’épaule d’un vieil ami. Puis il éteignit la lumière.`;

/* The « Dans un texte » paragraphs (acts 3 to 11), 60 to 120 words. */

export const DANS_A3 =
  `${ORIGINAL} L’homme entra dans le café à huit heures précises. Il accrocha son manteau, s’assit près de la fenêtre et commanda un café noir. Il ne toucha pas au journal posé sur la table. Toutes les deux minutes, il regardait sa montre. À huit heures et demie, une femme en imperméable rouge passa devant la vitrine sans s’arrêter. L’homme posa une pièce sur la table, reprit son manteau et sortit. La serveuse ramassa la tasse : elle était encore pleine.`;

export const DANS_A4 =
  `${ORIGINAL} Le mariage eut lieu en juin, sous une pluie fine. Trois ans plus tard, Paul et Nadia ne se parlaient plus. Un soir de décembre, Nadia fait sa valise. Elle ne laisse pas de lettre. Paul rentre à minuit, voit la chambre vide et s’assied sur le lit. Il se souvient du jour où elle lui avait dit, en riant : « Un jour, je partirai sans bruit. » Il avait ri, lui aussi. Il ne rit plus.`;

export const DANS_A5 =
  `${ORIGINAL} M. Bélanger relut la lettre de la banque. Un refus. Encore un refus ! Trente ans qu’il payait ses factures à l’heure, et on lui refusait un prêt de cinq mille dollars ! Ces jeunes conseillers, avec leurs cravates et leurs écrans, qu’est-ce qu’ils connaissaient de la vie ? Il plia la lettre en quatre et la glissa dans sa poche. Sa femme, depuis la cuisine, lui demanda ce que c’était. « Rien, dit-il. De la publicité. »`;

export const DANS_A6 =
  `${ORIGINAL} Le directeur prononça son discours de fin d’année. Il remercia chaleureusement tout le personnel pour ses « efforts exceptionnels », annonça avec émotion la suppression de trois postes, puis leva son verre à « la grande famille de l’entreprise ». On applaudit. Il faut dire qu’on applaudissait toujours, dans la grande famille : c’était plus prudent. Le soir même, les trois salariés concernés rendaient leurs badges à l’accueil, où la grande famille leur souhaitait, par écrit, « une excellente continuation ».`;

export const DANS_A7 =
  `${ORIGINAL} La ville s’éveillait lentement. Les réverbères, fatigués d’avoir veillé toute la nuit, s’éteignaient un à un. Le boulanger ouvrait sa boutique, et l’odeur du pain chaud descendait la rue comme une rumeur heureuse. Sur la place, le vieux marronnier étirait ses branches vers le soleil. Mathilde traversa la place en courant : elle était en retard, comme toujours, et son cœur était un tambour. Au coin de la rue, elle s’arrêta net. Il était là.`;

export const DANS_A8 =
  `Voici la première phrase de Germinal, le roman d’Émile Zola publié en 1885. Un homme sans travail marche, de nuit, vers les mines du Nord de la France : « ${Q_GERMINAL.fr} »`;

export const DANS_A9 =
  `${ORIGINAL} Première page d’un roman. La veille de ses quarante ans, Hélène Morin vendit sa voiture, donna son chat à la voisine et acheta un aller simple pour Tunis. Elle n’avait jamais pris l’avion. Elle ne parlait pas l’arabe. Elle ne connaissait personne là-bas, à part un nom, écrit au dos d’une vieille photo : Salah. Sa mère lui avait dit, un jour : « Ne cherche jamais à savoir. » Hélène avait attendu vingt ans.`;

export const DANS_A10 =
  `${ORIGINAL} Un poème en prose. Il y a, au bout de ma rue, un arbre qui ne sait pas l’heure. Il fleurit en novembre quand il en a envie, il perd ses feuilles en mai pour rire, et les passants pressés le regardent comme on regarde un fou. Moi, je l’envie. Je voudrais, comme lui, désobéir aux saisons. Je voudrais fleurir le jour où l’on m’attend en hiver, et dormir le jour où l’on m’ordonne d’être printemps.`;

export const DANS_A11 =
  `Un paragraphe de commentaire, écrit pour la leçon, sur l’extrait de la stagiaire. Dans cet extrait, la narratrice, devenue directrice du journal, raconte son premier jour de stagiaire. Le récit est à la première personne, et l’adulte porte sur la jeune femme d’autrefois un regard amusé. La comparaison avec « un colis livré à la mauvaise adresse » souligne qu’elle n’était pas attendue. On peut y voir de l’autodérision : elle se moque de sa certitude de départ. Enfin, la chute, « Je n’ai toujours rien compris au football », confirme ce ton léger.`;
