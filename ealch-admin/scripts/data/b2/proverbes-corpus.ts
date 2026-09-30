// b2.34.l1 « Les proverbes et les expressions figées » · the authored corpus,
// the imports, the long texts and the citation constants. DRAFT, to
// B1-BUILD-PLAYBOOK.md in the VOCAB SHAPE of B1-WORKSHOP-AND-VOCAB-SHAPES.md
// (§2, §2.2a), under the B2 rules of b2/B2-BUILD-LOG.md. THE LAST LESSON OF B2.
//
// DRAFT. Nothing here is imported into Postgres or merged into seed.json.
//
// STABLE EXPORTS (a later lesson may import REFRAME from this file; do not
// rename): REFRAME, REFRAME_EN, UNIT, LESSON_ID, THEME, LEVEL, E, ALL_ROWS,
// ROWS_BY_ACT, IMPORTED, IMPORT_IDS, Cap.
//
// ══════════════════════════════════════════════════════════════════════════
//  WHAT THIS UNIT OWNS: lesson 34 of the B2 trail (Unit 6, the last lesson)
// ══════════════════════════════════════════════════════════════════════════
//
//   PROVERBS AND FIXED EXPRESSIONS AT B2: what a proverb is (a general truth,
//   in the present, often with no article, often in two halves) against a
//   fixed expression (conjugated inside your sentence) and a locution (a
//   group that works as one word); the frequent proverbs by theme; how
//   proverbs are USED (quoted by half, announced, twisted, used as a hook,
//   never as proof); their register; their English equivalents, which are
//   often a different image (modulation); La Fontaine as a source; and a set
//   of B2 fixed expressions beyond the body, animal and colour families.
//
//     act 1   comme dit le proverbe: the half-quoted proverb; proverb,
//             fixed expression, locution; the task announced
//     act 2   the form: no article, the present, qui = celui qui, no verb,
//             two halves that rhyme (pierre qui roule, qui va lentement)
//     act 3   effort and patience: petit à petit, Paris / Rome ne s'est pas
//             fait(e) en un jour, qui va lentement, vouloir c'est pouvoir,
//             the bear's skin (lesson 28 in B1), c'est en forgeant
//     act 4   prudence: mieux vaut prévenir que guérir, chat échaudé,
//             Fontaine, les œufs dans le même panier, mieux vaut tard
//     act 5   people: qui se ressemble, tel père tel fils, telle mère telle
//             fille, l'habit ne fait pas le moine, les absents ont tort
//     act 6   causes and consequences: qui sème le vent, on récolte ce que
//             l'on sème, pas de fumée sans feu, après la pluie, la goutte
//             d'eau qui fait déborder le vase
//     act 7   La Fontaine: four morals quoted exactly, the fables behind them
//     act 8   the proverb in conversation: comme on dit, tu connais le
//             proverbe, the half quote, the ironic twist, the register
//     act 9   from one language to the other: same image, other image, no
//             equivalent (« when in Rome »), the calques
//     act 10  fixed expressions at work: faire d'une pierre deux coups,
//             plusieurs cordes à son arc, par quatre chemins, prendre son mal
//             en patience, se noyer dans un verre d'eau, tomber des nues
//     act 11  fixed expressions to negotiate: mettre de l'eau dans son vin,
//             jeter de l'huile sur le feu, le même bateau, un coup d'épée
//             dans l'eau, une tempête dans un verre d'eau, tirer son épingle
//     act 12  the opinion column (DELF B2 PE), the quiz, B2 complete
//
//   BUILT ON, NEVER RE-TAUGHT (cited by trail position, rows reused by id):
//     lessons 27, 28, 29 in B1   the body, animal and colour idioms; their
//                                rows are REUSED here (avoir du pain sur la
//                                planche, couper la poire en deux, vendre la
//                                peau de l'ours, se mettre le doigt dans
//                                l'œil), never re-authored
//     lesson 25 in B1            registers (familier, courant, soutenu)
//     lesson 8 in B2             the passé simple of the fables (a reused row)
//     lesson 11 in B2            soi after on (« un plus petit que soi »)
//     lesson 12 in B2            « C'est en forgeant qu'on devient forgeron »,
//                                « L'appétit vient en mangeant » (rows reused)
//     lesson 14 in B2            « avant de l'avoir tué », the past infinitive
//     lessons 16, 23 in B2       certes… mais, avoir beau, the opinion text
//     lesson 33 in B2            translation (written in parallel)
//
//   NO UNGRAMMATICAL OR CALQUED SENTENCE IS EVER A ROW. Every wrong form lives
//   in a `commonErrors.wrong`, a `trapDrill.promptSound`, a scene
//   `break.wrong`, a groupDrill `free()` quotation or a quiz `errorSpot`.
//
// ══════════════════════════════════════════════════════════════════════════
//  §A. MEASURED, seed-checked and Postgres probed READ-ONLY 2026-09-30
// ══════════════════════════════════════════════════════════════════════════
//
//  1. THEME `expressions-imagees` (« Les expressions imagées », fondations,
//     b1-b2). Sub-theme « les proverbes et les expressions figées » already
//     set in Postgres (read back 2026-09-30, with le corps, les animaux et la
//     nourriture, les couleurs).
//  2. POSTGRES: fr.b1.expressions-imagees .1002-.1589 (526, all published,
//     the three B1 idiom lessons); NOTHING at fr.b2 and nothing at 1600-1799
//     at any level. The seed carries the same 526.
//  3. ID BLOCK: b2.34 owns `fr.b2.expressions-imagees.1600`-`.1799` AND
//     NOTHING ELSE (1000-1599 are B1's). Used: see ALL_ROWS. Compare full
//     ids, never numbers. DB id check done read-only (no collision).
//  4. HEADWORDS THE SEED OR POSTGRES ALREADY HAS, so they are NEVER a row
//     here. SEED (reused by id): Rome ne s'est pas faite en un jour, Chaque
//     chose en son temps, Mieux vaut tard que jamais, C'est en forgeant qu'on
//     devient forgeron, L'appétit vient en mangeant, vendre la peau de l'ours
//     (+ two sentences), avoir du pain sur la planche, couper la poire en
//     deux, se mettre le doigt dans l'œil, la fable. POSTGRES ONLY (not in
//     the seed, so `src()` cannot name them, and NO twin is authored; they
//     appear only inside sentence rows or as free card text): « qui ne tente
//     rien n'a rien » (fr.sons.expressions-utiles.250), « tomber des nues »
//     (fr.b1.expressions-argot.027), « tirer son épingle du jeu »
//     (fr.b2.affaires.055), « mettre de l'eau dans son vin »
//     (fr.b2.collegues.088), « tourner autour du pot »
//     (fr.b1.expressions-argot.051), « c'est pas la mer à boire »
//     (fr.b1.expressions-argot.039), « remettre les pendules à l'heure »
//     (fr.b2.collegues.087), « le proverbe » (fr.b1.traditions.032).
//  5. APOSTROPHES. Every authored French string uses the typographic
//     apostrophe (’). Imported seed rows carry the straight one and are
//     therefore NEVER used in the scenario.
//  6. RESPELLINGS SPELLED FOR THE NASAL CHECKER RATHER THAN THE EAR, a real
//     /n/ or /m/ written double so `hasPlainNasal` cannot fire:
//       moine MWANN · Fontaine fohⁿ-TEHNN · sème SEHMM · peine PEHNN ·
//       comme KOMM · personne pehr-SONN · fonctionne fohⁿk-SYONN
//     « même » is MEM, the house spelling. No U+203F tie anywhere.
//  7. PROVERBS AND QUOTATIONS FOR A FACT CHECK (standard form as in Le Robert,
//     Larousse and Wiktionnaire; every one is a row, a text or a card):
//     a. Pierre qui roule n'amasse pas mousse.                     (.1612)
//        Its traditional sense, still the dictionary sense (Wiktionnaire: one
//        who keeps changing trade or country does not grow rich), and
//        « certains y entendent un éloge du mouvement » (.1615, .1616).
//     b. Petit à petit, l'oiseau fait son nid.                     (.1627)
//     c. Paris ne s'est pas fait en un jour. (.1629) / Rome ne s'est pas
//        faite en un jour. (seed fr.b1.heure-et-date.051). Both forms are
//        attested, and « fait » / « faite » both occur: the type-ins accept
//        all four.
//     d. Qui va lentement va sûrement.                             (.1617)
//     e. Il ne faut pas vendre la peau de l'ours avant de l'avoir tué.
//        (the B1 rows fr.b1.expressions-imagees .1360, .1365, .1369)
//     f. Mieux vaut prévenir que guérir.                           (.1642)
//     g. Il ne faut jamais dire : Fontaine, je ne boirai pas de ton eau.
//        (.1647; « il ne faut pas dire » is the other attested form, and
//        the type-ins accept it)
//     h. Chat échaudé craint l'eau froide.                         (.1645)
//     i. Il ne faut pas mettre tous ses œufs dans le même panier.  (.1650)
//     j. Qui se ressemble s'assemble.                              (.1654)
//     k. Tel père, tel fils. (.1655) / Telle mère, telle fille. (.1656)
//     l. L'habit ne fait pas le moine.                             (.1657)
//     m. Les absents ont toujours tort.                            (.1658)
//     n. Qui sème le vent récolte la tempête.                      (.1667)
//     o. On récolte ce que l'on sème. (.1668; « ce qu'on sème » accepted)
//     p. Il n'y a pas de fumée sans feu.                           (.1669)
//     q. Après la pluie, le beau temps.                            (.1670)
//     r. Qui ne tente rien n'a rien. (card text and .1601, .1711, .1724)
//     s. Vouloir, c'est pouvoir.                                   (.1634)
//     t. La fortune sourit aux audacieux ; Prudence est mère de sûreté.
//        (quoted in CHRONIQUE_TEXT only)
//     u. Seed rows: Mieux vaut tard que jamais ; Chaque chose en son temps ;
//        C'est en forgeant qu'on devient forgeron ; L'appétit vient en
//        mangeant ; Voyager forme la jeunesse.
//     LA FONTAINE, quoted word for word (Fables, first collection 1668, the
//     last book 1694; Jean de La Fontaine, 1621-1695; many fables retell
//     Aesop and Phaedrus):
//     v. « La raison du plus fort est toujours la meilleure » (Le Loup et
//        l'Agneau, I, 10; the verse ends with a colon in the original, the
//        row ends the sentence with a full stop).                 (.1682)
//     w. « Rien ne sert de courir ; il faut partir à point. » (Le Lièvre et
//        la Tortue, VI, 10).                                       (.1683)
//     x. « On a souvent besoin d'un plus petit que soi. » (Le Lion et le
//        Rat, II, 11).                                             (.1684)
//     y. « Apprenez que tout flatteur / Vit aux dépens de celui qui
//        l'écoute. » (Le Corbeau et le Renard, I, 2). THE ROW PRINTS THE TWO
//        LINES AS ONE SENTENCE (« …tout flatteur vit aux dépens… »), no
//        slash, for TTS: a reviewer decides.                      (.1685)
//     z. Story facts: in Le Loup et l'Agneau the wolf carries off and eats
//        the lamb; the tortoise wins against the hare; a rat frees the lion
//        from a net by gnawing it; the fox flatters the crow to get his
//        cheese.                                      (.1690-.1693, texts)
//     OTHER CLAIMS:
//     aa. « When in Rome, do as the Romans do » has no single fixed French
//         equivalent; « À Rome, fais comme les Romains » is heard and
//         understood (.1722); « Autres pays, autres mœurs » is close but only
//         observes that customs differ (en.wiktionary lists both). « Hurler
//         avec les loups » (Larousse, Robert, Wiktionnaire) means to side
//         with the majority, to conform to those around you though you do
//         not approve: near « when in Rome » but pejorative (.1723).
//         FACT-CHECKED 2026-09-30 (pre-review): La Fontaine v-y word for word
//         on Wikisource (éd. 1874), book and fable numbers right; « Rien ne
//         sert de courir ; » has the semicolon; « On a souvent besoin… » is
//         the SECOND verse of Le Lion et le Rat; the Corbeau moral ends with a
//         colon after « l'écoute ».
//     bb. English equivalents given in `en` (modulation): don't count your
//         chickens, once bitten twice shy, birds of a feather, like father
//         like son, clothes do not make the man, sow the wind reap the
//         whirlwind, you reap what you sow, no smoke without fire, every
//         cloud has a silver lining, nothing ventured nothing gained, where
//         there's a will there's a way, never say never, better safe than
//         sorry, don't put all your eggs in one basket, kill two birds with
//         one stone, beat around the bush, a storm in a teacup, the last
//         straw.
//     cc. « une tempête dans un verre d'eau » = a storm in a teacup;
//         « se noyer dans un verre d'eau » = to be overwhelmed by a trifle.
//     dd. Limoilou is a district of Québec City; « le syndic » manages a
//         copropriété in France; « tribune téléphonique » is the Québec term
//         for a radio phone-in.
//
// ══════════════════════════════════════════════════════════════════════════

import type { Item } from '../../../../ealch-v2/src/content/schema.ts';
import { unitRef } from '../_unit-ref.ts';

/** A citation that OPENS a sentence needs a capital. */
export function Cap(s: string): string { return s.charAt(0).toUpperCase() + s.slice(1); }

/* ══════════════════════════════════════════════════════════════════════════
 *  §B. IDENTITY
 * ══════════════════════════════════════════════════════════════════════════ */

export const UNIT = {
  id: 'b2.34',
  seq: 34,
  title: 'Proverbs and Fixed Expressions',
  sub: 'Les proverbes et les expressions figées',
  canDo: 'Can recognise, quote and use about twenty frequent French proverbs and a set of B2 fixed expressions, tell a proverb from a fixed expression and a locution, quote a proverb by half, twist it or use it as a hook in the right register, find the equivalent English proverb or explain that there is none, quote La Fontaine accurately, and write an opinion column that opens with a proverb and discusses whether it holds',
  prereqUnitIds: ['b1.27', 'b1.28', 'b1.29', 'b2.23'],
} as const;

export const LESSON_ID = 'b2.34.l1';
export const THEME = 'expressions-imagees';
export const LEVEL = 'b2' as const;

/** ONE block. fr.b1 .1000-.1599 are the B1 idiom lessons; b2.34 owns 1600-1799. */
export const ID_RANGES = [[1600, 1799]] as const;

export const E = (n: number) => `fr.b2.${THEME}.${String(n).padStart(3, '0')}`;

/* ══════════════════════════════════════════════════════════════════════════
 *  §C. HOW THIS LESSON NAMES ITS NEIGHBOURS
 *
 *  B1 and B2 labels are French, from the plan (a B1 or B2 unit id's number
 *  IS its trail position). A-level units resolve through `unitRef`.
 * ══════════════════════════════════════════════════════════════════════════ */

export const REGISTRES_UNIT = 'b1.25';
export const CORPS_UNIT = 'b1.27';
export const ANIMAUX_UNIT = 'b1.28';
export const COULEURS_UNIT = 'b1.29';
export const MODES_UNIT = 'b2.06';
export const PASSE_SIMPLE_UNIT = 'b2.08';
export const INSISTANCE_UNIT = 'b2.11';
export const GERONDIF_UNIT = 'b2.12';
export const INFINITIVES_UNIT = 'b2.14';
export const CONCESSION_UNIT = 'b2.16';
export const IMPERS_UNIT = 'b2.20';
export const ARGUMENTATION_UNIT = 'b2.23';
export const NEGOCIATION_UNIT = 'b2.26';
export const LITTERATURE_UNIT = 'b2.30';
export const TRADUCTION_UNIT = 'b2.33';

/** TODO(import): drop once the b1 and b2 units are rows the seed labels in French. */
export function refFr(unitId: string): string {
  const m = /^(b1|b2)\.(\d{2})$/.exec(unitId);
  return m ? `la leçon ${Number(m[2])} du ${m[1].toUpperCase()}` : unitRef(unitId);
}
/** English surfaces (grader notes, briefEn). */
export function refEn(unitId: string): string {
  const m = /^(b1|b2)\.(\d{2})$/.exec(unitId);
  return m ? `lesson ${Number(m[2])} in ${m[1].toUpperCase()}` : unitRef(unitId);
}

export const REGISTRES_REF = refFr(REGISTRES_UNIT);
export const CORPS_REF = refFr(CORPS_UNIT);
export const ANIMAUX_REF = refFr(ANIMAUX_UNIT);
export const COULEURS_REF = refFr(COULEURS_UNIT);
export const MODES_REF = refFr(MODES_UNIT);
export const PASSE_SIMPLE_REF = refFr(PASSE_SIMPLE_UNIT);
export const INSISTANCE_REF = refFr(INSISTANCE_UNIT);
export const GERONDIF_REF = refFr(GERONDIF_UNIT);
export const INFINITIVES_REF = refFr(INFINITIVES_UNIT);
export const CONCESSION_REF = refFr(CONCESSION_UNIT);
export const IMPERS_REF = refFr(IMPERS_UNIT);
export const ARGUMENTATION_REF = refFr(ARGUMENTATION_UNIT);
export const NEGOCIATION_REF = refFr(NEGOCIATION_UNIT);
export const LITTERATURE_REF = refFr(LITTERATURE_UNIT);
export const TRADUCTION_REF = refFr(TRADUCTION_UNIT);
export const REGISTRES_REF_EN = refEn(REGISTRES_UNIT);
export const ARGUMENTATION_REF_EN = refEn(ARGUMENTATION_UNIT);
export const CONCESSION_REF_EN = refEn(CONCESSION_UNIT);
export const ANIMAUX_REF_EN = refEn(ANIMAUX_UNIT);

/** Neighbour reframes, re-exported rather than retyped. */
export { REFRAME as B128_REFRAME, REFRAME_EN as B128_REFRAME_EN } from '../b1/expressions-animaux-corpus.ts';
export { REFRAME as B127_REFRAME, REFRAME_EN as B127_REFRAME_EN } from '../b1/expressions-corps-corpus.ts';
export { REFRAME as B129_REFRAME, REFRAME_EN as B129_REFRAME_EN } from '../b1/expressions-couleurs-corpus.ts';
export { REFRAME as B125_REFRAME, REFRAME_EN as B125_REFRAME_EN } from '../b1/registres-corpus.ts';
export { REFRAME as B206_REFRAME, REFRAME_EN as B206_REFRAME_EN } from './subjonctif-indicatif-corpus.ts';
export { REFRAME as B208_REFRAME, REFRAME_EN as B208_REFRAME_EN } from './passe-simple-corpus.ts';
export { REFRAME as B211_REFRAME, REFRAME_EN as B211_REFRAME_EN } from './pronoms-insistance-corpus.ts';
export { REFRAME as B212_REFRAME, REFRAME_EN as B212_REFRAME_EN } from './gerondif-corpus.ts';
export { REFRAME as B214_REFRAME, REFRAME_EN as B214_REFRAME_EN } from './constructions-infinitives-corpus.ts';
export { REFRAME as B216_REFRAME, REFRAME_EN as B216_REFRAME_EN } from './concession-avancee-corpus.ts';
export { REFRAME as B223_REFRAME, REFRAME_EN as B223_REFRAME_EN } from './argumentation-corpus.ts';

/* ══════════════════════════════════════════════════════════════════════════
 *  §E. THE REFRAME AND THE ONE METAPHOR
 *
 *  LA PIÈCE ANCIENNE: an old ochre coin, worn smooth, in every chapter
 *  image. A proverb passes from hand to hand like a coin: you hand it over
 *  whole (you QUOTE it), sometimes you only show one side (the half quote),
 *  sometimes you turn it to make people laugh (the twist). A fixed
 *  expression is the coin SPENT: it goes into your sentence and takes its
 *  place there (its verb conjugates, its possessive follows the subject).
 *
 *  It is NOT « a proverb is always true » (acts 1, 8 and the task say it
 *  opens a discussion and proves nothing), and NOT « never translate a
 *  proverb word for word » (tel père, tel fils IS like father, like son).
 * ══════════════════════════════════════════════════════════════════════════ */

export const REFRAME = 'Un proverbe se cite, une expression figée se conjugue.';
export const REFRAME_EN = 'A proverb is quoted; a fixed expression is conjugated.';

export const REFRAME_REJECTED: readonly { text: string; why: string }[] = [
  {
    text: 'Les proverbes ont toujours raison.',
    why: 'False where acts 1, 8 and the task have to hold: every proverb has its opposite (la fortune sourit aux audacieux / prudence est mère de sûreté), and a B2 writer discusses whether it holds. A proverb opens a discussion; it proves nothing.',
  },
  {
    text: 'Ne traduis jamais un proverbe mot à mot.',
    why: 'False in act 9: tel père, tel fils is like father, like son, and il n’y a pas de fumée sans feu is no smoke without fire. The rule is to translate by a proverb when one exists, and by the sense when none does.',
  },
  {
    text: 'Garde l’image, traduis le sens.',
    why: 'Lesson 28 in B1’s reframe (quoted, never retyped). True, but it says nothing about what is new at B2: the difference between quoting a proverb and conjugating an expression, and how a proverb is used in speech.',
  },
  {
    text: 'Un proverbe ne change jamais.',
    why: 'False in act 8: a proverb is cut in half (« comme on dit, après la pluie… ») and twisted for a laugh (« qui va lentement… arrive en retard »), and the possessive of « il ne faut pas mettre tous ses œufs » becomes « tes œufs » when you speak to someone.',
  },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §F. THE IMPORTS, BY ACT
 *
 *  Every id was read from the seed (seedPlusPacks) on 2026-09-30 and its
 *  French is in the trailing comment. None is used in the scenario (straight
 *  apostrophes). The lesson file checks each one at load.
 * ══════════════════════════════════════════════════════════════════════════ */

export const IMPORTED = {
  act1: [
    'fr.b1.expressions-imagees.1307',        // avoir du pain sur la planche
    'fr.b1.expressions-imagees.1343',        // couper la poire en deux
    'fr.b1.heure-et-date.051',               // Rome ne s'est pas faite en un jour.  (flashcard only)
    'fr.a2.heure-et-date.150',               // Mieux vaut tard que jamais.  (flashcard only)
  ],
  act2: [
    'fr.b1.expressions-de-quantite.1152',    // Une expression figée ne s'accorde pas : tout à fait, tout à l'heure, tout le temps.  (flashcard only)
  ],
  act3: [
    'fr.b1.heure-et-date.051',               // Rome ne s'est pas faite en un jour.
    'fr.b1.expressions-imagees.1360',        // vendre la peau de l'ours avant de l'avoir tué
    'fr.b1.expressions-imagees.1365',        // Ne vends pas la peau de l'ours avant de l'avoir tué.
    'fr.b1.expressions-imagees.1369',        // Il n'a pas encore signé, ne vendons pas la peau de l'ours.
    'fr.b2.connecteurs-logiques.1679',       // C'est en forgeant qu'on devient forgeron.
  ],
  act4: [
    'fr.a2.heure-et-date.150',               // Mieux vaut tard que jamais.
    'fr.b1.heure-et-date.050',               // Chaque chose en son temps.  (flashcard only)
  ],
  act5: [] as string[],
  act6: [
    'fr.b2.connecteurs-logiques.1748',       // L'appétit vient en mangeant.
  ],
  act7: [
    'fr.b2.litterature.1020',                // Le renard s’approcha du corbeau et lui parla doucement.  (sentence only)
    'fr.a1.ecole.091',                       // la fable
  ],
  act8: [
    'fr.b2.connecteurs-logiques.2129',       // On a beau dire, ce vieux téléphone marche encore très bien.
  ],
  act9: [] as string[],
  act10: [
    'fr.b1.expressions-imagees.1307',        // avoir du pain sur la planche
    'fr.b1.expressions-imagees.1314',        // Cette semaine, j'ai du pain sur la planche.
    'fr.b1.expressions-imagees.1129',        // se mettre le doigt dans l'œil
  ],
  act11: [
    'fr.b1.expressions-imagees.1343',        // couper la poire en deux
    'fr.b1.expressions-imagees.1349',        // Tu veux quarante dollars, moi trente : coupons la poire en deux.
    'fr.b1.expressions-imagees.1353',        // On a coupé la poire en deux : chacun paie la moitié.
  ],
  act12: [
    'fr.b2.faits-et-procedures.1371',        // Voyager forme la jeunesse.
  ],
};

export const IMPORT_IDS = [...new Set(Object.values(IMPORTED).flat())];

/** No `flashcard` drill in the seed: nameable, never releasable. */
export const NOT_DECK_ABLE: string[] = [
  'fr.b2.litterature.1020',
];

/** No `voiceflash`: never in a `practice` speak section. */
export const NOT_SPEAKABLE: string[] = [
  ...NOT_DECK_ABLE,
  'fr.b1.heure-et-date.051', 'fr.b1.heure-et-date.050', 'fr.a2.heure-et-date.150',
  'fr.b1.expressions-de-quantite.1152',
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §G. THE AUTHORED ROWS, ONE BLOCK PER ACT
 *
 *  Three kinds: a PROVERB is a sentence row tagged `proverbe` (capital and
 *  full stop, as it is quoted); a FIXED EXPRESSION is a phrase row (the
 *  infinitive, lowercase); the rest are SENTENCE rows that use them in a
 *  situation. Listening lines are sentence rows, so the ear mission and the
 *  deck quote the same French.
 * ══════════════════════════════════════════════════════════════════════════ */

type Row = Item;
type Reg = NonNullable<Item['register']>;

const FCVR = ['flashcard', 'voiceflash', 'review'] as Item['drills'];
const FCVDR = ['flashcard', 'voiceflash', 'dictation', 'review'] as Item['drills'];
const GP = ['proverbes-expressions-figees'];

/** A fixed expression or a formula: the headword and what it does. */
const ph = (n: number, fr: string, en: string, ipa: string, respell: string, tags: string[], notes?: string, register: Reg = 'courant'): Row => ({
  id: E(n), kind: 'phrase', level: LEVEL, theme: THEME, fr, en, ipa, respell,
  tags: ['expression', ...tags], drills: FCVR, version: 1, register, grammarPoints: GP,
  ...(notes ? { notes } : {}),
});

const sent = (
  n: number, fr: string, en: string, ipa: string, respell: string,
  tags: string[], drills: Item['drills'] = FCVR, extra: Partial<Item> = {},
): Row => ({
  id: E(n), kind: 'sentence', level: LEVEL, theme: THEME, fr, en, ipa, respell,
  tags, drills, version: 1, register: 'courant', grammarPoints: GP, ...extra,
});

/** A rule card: `prompt` is the question, `notes` the answer. */
const rule = (prompt: string, notes: string): Partial<Item> => ({ cardType: 'grammar', prompt, notes });

/* ── ACT 1 · COMME DIT LE PROVERBE ──────────────────────────────────────── */

export const ACT1_ROWS: Row[] = [
  sent(1600, 'Tu sais ce qu’on dit : qui ne tente rien…', 'You know what they say: nothing ventured…', '/ty sɛ sə kɔ̃ di ki nə tɑ̃t ʁjɛ̃/', 'tü seh suh kohⁿ DEE | kee nuh tahⁿt RYEHⁿ', ['scene', 'citation']),
  sent(1601, 'Je sais : qui ne tente rien n’a rien. Je vais envoyer ma candidature.', 'I know: nothing ventured, nothing gained. I am going to send my application.', '/ʒə sɛ ki nə tɑ̃t ʁjɛ̃ na ʁjɛ̃ ʒə vɛ ɑ̃.vwa.je ma kɑ̃.di.da.tyʁ/', 'zhuh SEH | kee nuh tahⁿt RYEHⁿ na RYEHⁿ | zhuh veh ahⁿ-vwa-YAY ma kahⁿ-dee-da-TÜR', ['scene', 'citation'], FCVDR),
  sent(1602, 'Un proverbe dit une vérité générale, au présent, souvent sans article.', 'A proverb states a general truth, in the present, often with no article.', '/œ̃ pʁɔ.vɛʁb di yn ve.ʁi.te ʒe.ne.ʁal o pʁe.zɑ̃ su.vɑ̃ sɑ̃.zaʁ.tikl/', 'uhⁿ pro-VEHRB | dee ün vay-ree-TAY zhay-nay-RAL | oh pray-ZAHⁿ | soo-vahⁿ sahⁿ-zar-TEEKL', ['rule', 'forme'], ['flashcard'],
    rule('Qu’est-ce qu’un proverbe ?', 'Une phrase courte et anonyme qui dit une vérité générale, au présent, souvent sans article : Pierre qui roule n’amasse pas mousse.')),
  sent(1603, 'Une expression figée garde ses mots, mais son verbe se conjugue.', 'A fixed expression keeps its words, but its verb is conjugated.', '/yn ɛk.spʁɛ.sjɔ̃ fi.ʒe gaʁd se mo mɛ sɔ̃ vɛʁb sə kɔ̃.ʒyg/', 'ün ehk-spreh-SYOHⁿ fee-ZHAY | gard say MOH | meh sohⁿ VEHRB | suh kohⁿ-ZHÜG', ['rule', 'figee'], ['flashcard'],
    rule('Coûter les yeux de la tête : que peux-tu changer ?', 'Le temps et la personne du verbe : ça m’a coûté les yeux de la tête. Les autres mots restent.')),
  sent(1604, 'L’an dernier, nous avions du pain sur la planche ; cette année, c’est pire.', 'Last year we had a lot on our plate; this year it is worse.', '/lɑ̃ dɛʁ.nje nu.za.vjɔ̃ dy pɛ̃ syʁ la plɑ̃ʃ sɛ.ta.ne sɛ piʁ/', 'lahⁿ dehr-NYAY | noo-za-vyohⁿ dü pehⁿ sür la PLAHⁿSH | seh-ta-NAY seh PEER', ['figee']),
  sent(1605, 'Une locution fonctionne comme un seul mot : à la fois, tout de suite, au fur et à mesure.', 'A locution works like a single word: à la fois, tout de suite, au fur et à mesure.', '/yn lɔ.ky.sjɔ̃ fɔ̃k.sjɔn kɔm œ̃ sœl mo a la fwa tut sɥit o fyʁ e a mə.zyʁ/', 'ün lo-kü-SYOHⁿ | fohⁿk-SYONN komm uhⁿ suhl MOH | a la FWA | toot SWEET | oh für ay a muh-ZÜR', ['rule', 'locution'], ['flashcard'],
    rule('Tout de suite, c’est un proverbe ?', 'Non, une locution : un groupe de mots figé qui joue le rôle d’un seul mot, ici un adverbe.')),
  sent(1606, REFRAME, REFRAME_EN, '/œ̃ pʁɔ.vɛʁb sə sit yn ɛk.spʁɛ.sjɔ̃ fi.ʒe sə kɔ̃.ʒyg/', 'uhⁿ pro-VEHRB suh SEET | ün ehk-spreh-SYOHⁿ fee-ZHAY suh kohⁿ-ZHÜG', ['rule', 'reframe'], ['flashcard'],
    rule('Proverbe ou expression figée : que fais-tu de chacun ?', 'Le proverbe, tu le cites, souvent tel quel ; l’expression figée, tu la places dans ta phrase et tu conjugues son verbe.')),
  ph(1607, 'comme on dit', 'as they say', '/kɔ.mɔ̃ di/', 'ko-mohⁿ DEE', ['citation'], 'Pour annoncer un proverbe ou une expression que tout le monde connaît.'),
  ph(1608, 'comme dit le proverbe', 'as the saying goes', '/kɔm di lə pʁɔ.vɛʁb/', 'komm dee luh pro-VEHRB', ['citation'], 'La même annonce, en nommant le proverbe.'),
  sent(1609, 'Ma grand-mère cite un proverbe à chaque repas.', 'My grandmother quotes a proverb at every meal.', '/ma gʁɑ̃.mɛʁ sit œ̃ pʁɔ.vɛʁb a ʃak ʁə.pa/', 'ma grahⁿ-MEHR | seet uhⁿ pro-VEHRB | a shak ruh-PA', ['citation'], FCVDR),
  sent(1610, 'Un proverbe se dit souvent à moitié : la suite, tout le monde la connaît.', 'A proverb is often said by half: everyone knows the rest.', '/œ̃ pʁɔ.vɛʁb sə di su.vɑ̃ a mwa.tje la sɥit tu lə mɔ̃d la kɔ.nɛ/', 'uhⁿ pro-VEHRB suh DEE | soo-vahⁿ a mwa-TYAY | la SWEET | too luh mohⁿd la ko-NEH', ['citation']),
];

/* ── ACT 2 · LA FORME D'UN PROVERBE ─────────────────────────────────────── */

export const ACT2_ROWS: Row[] = [
  sent(1611, 'Bonjour à tous, et voici le proverbe du lundi.', 'Hello everyone, and here is Monday’s proverb.', '/bɔ̃.ʒu.ʁa tus e vwa.si lə pʁɔ.vɛʁb dy lœ̃.di/', 'bohⁿ-zhoo-ra TOOS | ay vwa-SEE | luh pro-VEHRB dü luhⁿ-DEE', ['ecoute']),
  sent(1612, 'Pierre qui roule n’amasse pas mousse.', 'A rolling stone gathers no moss.', '/pjɛʁ ki ʁul na.mas pa mus/', 'pyehr kee ROOL | na-mass pa MOOSS', ['proverbe', 'forme'], FCVDR),
  sent(1613, 'Remarquez d’abord qu’il n’y a aucun article : pierre, et pas une pierre.', 'Notice first that there is no article: pierre, not une pierre.', '/ʁə.maʁ.ke da.bɔʁ kil nja o.kœ̃.naʁ.tikl pjɛʁ e pa yn pjɛʁ/', 'ruh-mar-KAY da-BOR | keel nya oh-kuhⁿ-nar-TEEKL | PYEHR | ay pa ün PYEHR', ['ecoute', 'forme']),
  sent(1614, 'Le verbe est au présent, parce que le proverbe parle de tous les temps.', 'The verb is in the present, because the proverb speaks for all times.', '/lə vɛʁb ɛ.to pʁe.zɑ̃ paʁs kə lə pʁɔ.vɛʁb paʁl də tu le tɑ̃/', 'luh VEHRB | eh-toh pray-ZAHⁿ | pars kuh luh pro-VEHRB | parl duh too lay TAHⁿ', ['ecoute', 'forme']),
  sent(1615, 'Au sens classique, il veut dire : qui change sans cesse de métier ne s’enrichit pas.', 'In its traditional sense it means: someone who keeps changing trade does not grow rich.', '/o sɑ̃s kla.sik il vø diʁ ki ʃɑ̃ʒ sɑ̃ sɛs də me.tje nə sɑ̃.ʁi.ʃi pa/', 'oh sahⁿss kla-SEEK | eel vuh DEER | kee shahⁿzh sahⁿ SESS duh may-TYAY | nuh sahⁿ-ree-SHEE PA', ['ecoute', 'sens']),
  sent(1616, 'Aujourd’hui, certains y entendent plutôt un éloge du mouvement.', 'Today some hear it rather as praise of moving on.', '/o.ʒuʁ.dɥi sɛʁ.tɛ̃ i ɑ̃.tɑ̃d ply.to œ̃.ne.lɔʒ dy muv.mɑ̃/', 'oh-zhoor-DWEE | sehr-tehⁿ ee ahⁿ-TAHⁿD | plü-TOH | uhⁿ-nay-LOZH dü moov-MAHⁿ', ['ecoute', 'sens']),
  sent(1617, 'Qui va lentement va sûrement.', 'Slow and steady wins the race.', '/ki va lɑ̃t.mɑ̃ va syʁ.mɑ̃/', 'kee va lahⁿt-MAHⁿ | va sür-MAHⁿ', ['proverbe', 'forme', 'patience'], FCVDR),
  sent(1618, 'Ici, qui veut dire celui qui : celui qui va lentement va sûrement.', 'Here qui means celui qui: the one who goes slowly goes surely.', '/i.si ki vø diʁ sə.lɥi ki sə.lɥi ki va lɑ̃t.mɑ̃ va syʁ.mɑ̃/', 'ee-SEE | KEE vuh deer suh-lwee KEE | suh-lwee kee va lahⁿt-MAHⁿ | va sür-MAHⁿ', ['ecoute', 'forme']),
  sent(1619, 'Il y a aussi des proverbes sans verbe, comme tel père, tel fils.', 'There are also proverbs with no verb, like tel père, tel fils.', '/il.ja o.si de pʁɔ.vɛʁb sɑ̃ vɛʁb kɔm tɛl pɛʁ tɛl fis/', 'eel-ya oh-SEE | day pro-VEHRB sahⁿ VEHRB | komm tehl PEHR tehl FEESS', ['ecoute', 'forme']),
  sent(1620, 'Et souvent, deux moitiés qui riment : qui se ressemble s’assemble.', 'And often two halves that rhyme: birds of a feather flock together.', '/e su.vɑ̃ dø mwa.tje ki ʁim ki sə ʁə.sɑ̃bl sa.sɑ̃bl/', 'ay soo-VAHⁿ | deu mwa-tyay kee REEM | kee suh ruh-SAHⁿBL | sa-SAHⁿBL', ['ecoute', 'forme']),
  sent(1621, 'À lundi prochain, et d’ici là, prenez votre temps.', 'Until next Monday, and in the meantime, take your time.', '/a lœ̃.di pʁɔ.ʃɛ̃ e di.si la pʁə.ne vɔtʁ tɑ̃/', 'a luhⁿ-dee pro-SHEHⁿ | ay dee-see LA | pruh-nay votr TAHⁿ', ['ecoute']),
  sent(1622, 'En tête de proverbe, qui veut dire celui qui.', 'At the start of a proverb, qui means “the one who”.', '/ɑ̃ tɛt də pʁɔ.vɛʁb ki vø diʁ sə.lɥi ki/', 'ahⁿ TEHT duh pro-VEHRB | KEE vuh DEER | suh-lwee KEE', ['rule', 'forme'], ['flashcard'],
    rule('Dans « Qui sème le vent récolte la tempête », qui est-ce ?', 'Celui qui sème le vent, n’importe qui : le proverbe parle de tout le monde, et le verbe reste au singulier.')),
  sent(1623, 'Quand tu cites un proverbe, garde ses mots : pas d’article ajouté, pas de temps changé.', 'When you quote a proverb, keep its words: no article added, no tense changed.', '/kɑ̃ ty sit œ̃ pʁɔ.vɛʁb gaʁd se mo pa daʁ.tikl a.ʒu.te pa d(ə) tɑ̃ ʃɑ̃.ʒe/', 'kahⁿ tü SEET uhⁿ pro-VEHRB | gard say MOH | pa dar-teekl a-zhoo-TAY | pa duh tahⁿ shahⁿ-ZHAY', ['forme'], FCVDR),
  ph(1624, 'une vérité générale', 'a general truth', '/yn ve.ʁi.te ʒe.ne.ʁal/', 'ün vay-ree-TAY zhay-nay-RAL', ['forme'], 'Vraie pour tout le monde et à toute époque : c’est ce que prétend un proverbe.'),
  ph(1625, 'le présent de vérité générale', 'the present of general truth', '/lə pʁe.zɑ̃ d(ə) ve.ʁi.te ʒe.ne.ʁal/', 'luh pray-ZAHⁿ | duh vay-ree-TAY zhay-nay-RAL', ['forme'], 'Le présent des proverbes et des définitions : l’eau bout à cent degrés.'),
];

/* ── ACT 3 · L'EFFORT ET LA PATIENCE ───────────────────────────────────── */

export const ACT3_ROWS: Row[] = [
  sent(1626, 'On vend à peine trente baguettes par jour.', 'We barely sell thirty baguettes a day.', '/ɔ̃ vɑ̃ a pɛn tʁɑ̃t ba.gɛt paʁ ʒuʁ/', 'ohⁿ vahⁿ a PEHNN | trahⁿt ba-GEHT | par ZHOOR', ['histoire']),
  sent(1627, 'Petit à petit, l’oiseau fait son nid.', 'Little by little, the bird builds its nest.', '/pə.ti.ta pə.ti lwa.zo fɛ sɔ̃ ni/', 'puh-tee-ta puh-TEE | lwa-ZOH | feh sohⁿ NEE', ['proverbe', 'patience'], FCVDR),
  sent(1628, 'Je sais, mais j’aimerais que ça aille plus vite.', 'I know, but I would like things to move faster.', '/ʒə sɛ mɛ ʒɛm.ʁɛ kə sa aj ply vit/', 'zhuh SEH | meh zhehm-REH | kuh sa AHY | plü VEET', ['histoire']),
  sent(1629, 'Paris ne s’est pas fait en un jour.', 'Rome was not built in a day.', '/pa.ʁi nə sɛ pa fɛ ɑ̃.nœ̃ ʒuʁ/', 'pa-REE | nuh seh pa FEH | ahⁿ-nuhⁿ ZHOOR', ['proverbe', 'patience'], FCVDR),
  sent(1630, 'Je pense ouvrir aussi le dimanche.', 'I am thinking of opening on Sundays too.', '/ʒə pɑ̃s u.vʁiʁ o.si lə di.mɑ̃ʃ/', 'zhuh PAHⁿSS | oo-VREER | oh-see luh dee-MAHⁿSH', ['histoire']),
  sent(1631, 'Qui va lentement va sûrement : essaie d’abord un dimanche par mois.', 'Slow and steady wins the race: try one Sunday a month first.', '/ki va lɑ̃t.mɑ̃ va syʁ.mɑ̃ e.sɛ da.bɔʁ œ̃ di.mɑ̃ʃ paʁ mwa/', 'kee va lahⁿt-MAHⁿ va sür-MAHⁿ | eh-seh da-BOR | uhⁿ dee-MAHⁿSH par MWA', ['histoire', 'patience']),
  sent(1632, 'Un client m’a promis une grosse commande pour Noël.', 'A customer promised me a big order for Christmas.', '/œ̃ kli.jɑ̃ ma pʁɔ.mi yn gʁos kɔ.mɑ̃d puʁ nɔ.ɛl/', 'uhⁿ klee-YAHⁿ | ma pro-MEE | ün gross ko-MAHⁿD | poor no-EHL', ['histoire']),
  sent(1633, 'Je lis dix pages en français par jour : petit à petit, l’oiseau fait son nid.', 'I read ten pages in French a day: little by little, the bird builds its nest.', '/ʒə li di paʒ ɑ̃ fʁɑ̃.sɛ paʁ ʒuʁ pə.ti.ta pə.ti lwa.zo fɛ sɔ̃ ni/', 'zhuh lee dee PAZH | ahⁿ frahⁿ-SEH par ZHOOR | puh-tee-ta puh-TEE | lwa-zoh feh sohⁿ NEE', ['patience'], FCVDR),
  sent(1634, 'Vouloir, c’est pouvoir.', 'Where there is a will, there is a way.', '/vu.lwaʁ sɛ pu.vwaʁ/', 'voo-LWAR | seh poo-VWAR', ['proverbe', 'effort'], FCVDR),
  sent(1635, 'Ton projet ne sera pas prêt demain : Paris ne s’est pas fait en un jour.', 'Your project will not be ready tomorrow: Rome was not built in a day.', '/tɔ̃ pʁɔ.ʒɛ nə sə.ʁa pa pʁɛ d(ə).mɛ̃ pa.ʁi nə sɛ pa fɛ ɑ̃.nœ̃ ʒuʁ/', 'tohⁿ pro-ZHEH | nuh suh-ra pa PREH duh-MEHⁿ | pa-REE nuh seh pa FEH | ahⁿ-nuhⁿ ZHOOR', ['patience']),
  sent(1636, 'Elle a repris ses études à cinquante ans : vouloir, c’est pouvoir.', 'She went back to studying at fifty: where there is a will, there is a way.', '/ɛ.la ʁə.pʁi se.ze.tyd a sɛ̃.kɑ̃.tɑ̃ vu.lwaʁ sɛ pu.vwaʁ/', 'eh-la ruh-PREE | say-zay-TÜD | a sehⁿ-kahⁿ-TAHⁿ | voo-LWAR seh poo-VWAR', ['effort'], FCVDR),
  sent(1637, 'Les proverbes de la patience disent tous la même chose : le temps travaille pour toi.', 'The proverbs of patience all say the same thing: time is working for you.', '/le pʁɔ.vɛʁb də la pa.sjɑ̃s diz tus la mɛm ʃoz lə tɑ̃ tʁa.vaj puʁ twa/', 'lay pro-VEHRB duh la pa-SYAHⁿSS | deez TOOSS | la mem SHOZ | luh TAHⁿ | tra-vahy poor TWA', ['rule', 'patience'], ['flashcard'],
    rule('Petit à petit, Paris, qui va lentement : quelle idée commune ?', 'Le résultat vient avec le temps : il ne faut ni se presser ni se décourager.')),
  sent(1638, 'Le jury n’a pas encore voté : ne sors pas le champagne, il ne faut pas vendre la peau de l’ours.', 'The jury has not voted yet: do not open the champagne, do not count your chickens.', '/lə ʒy.ʁi na pa.zɑ̃.kɔʁ vo.te nə sɔʁ pa lə ʃɑ̃.paɲ il nə fo pa vɑ̃dʁ la po d(ə) luʁs/', 'luh zhü-REE | na pa-zahⁿ-kor vo-TAY | nuh sor pa luh shahⁿ-PAHNY | eel nuh foh pa vahⁿdr la POH duh LOORS', ['patience']),
];

/* ── ACT 4 · LA PRUDENCE ────────────────────────────────────────────────── */

export const ACT4_ROWS: Row[] = [
  sent(1639, 'Je vais mettre toutes mes économies dans le restaurant de Max.', 'I am going to put all my savings into Max’s restaurant.', '/ʒə vɛ mɛtʁ tut me.ze.kɔ.nɔ.mi dɑ̃ lə ʁɛs.tɔ.ʁɑ̃ d(ə) maks/', 'zhuh veh mehtr TOOT | may-zay-ko-no-MEE | dahⁿ luh rehs-to-RAHⁿ duh MAX', ['ecoute']),
  sent(1640, 'Fais au moins relire le contrat par quelqu’un.', 'At least have someone read the contract over.', '/fɛ o mwɛ̃ ʁə.liʁ lə kɔ̃.tʁa paʁ kɛl.kœ̃/', 'feh oh MWEHⁿ | ruh-LEER luh kohⁿ-TRA | par kehl-KUHⁿ', ['ecoute']),
  sent(1641, 'Pas besoin : c’est mon meilleur ami.', 'No need: he is my best friend.', '/pa bə.zwɛ̃ sɛ mɔ̃ mɛ.jœ.ʁa.mi/', 'pa buh-ZWEHⁿ | seh mohⁿ meh-yuh-ra-MEE', ['ecoute']),
  sent(1642, 'Mieux vaut prévenir que guérir.', 'Better safe than sorry.', '/mjø vo pʁe.v(ə).niʁ kə ge.ʁiʁ/', 'myuh voh prayv-NEER | kuh gay-REER', ['proverbe', 'prudence'], FCVDR),
  sent(1643, 'L’an dernier, tu as bien signé un bail sans le lire.', 'Last year, you did sign a lease without reading it.', '/lɑ̃ dɛʁ.nje ty a bjɛ̃ si.ɲe œ̃ baj sɑ̃ l(ə) liʁ/', 'lahⁿ dehr-NYAY | tü a byehⁿ see-NYAY uhⁿ BAHY | sahⁿ luh LEER', ['ecoute']),
  sent(1644, 'Justement : chat échaudé craint l’eau froide. Depuis, je lis tout.', 'Exactly: once bitten, twice shy. Since then I read everything.', '/ʒys.tə.mɑ̃ ʃa e.ʃo.de kʁɛ̃ lo fʁwad də.pɥi ʒə li tu/', 'zhüs-tuh-MAHⁿ | sha ay-shoh-DAY krehⁿ loh FRWAD | duh-PWEE | zhuh lee TOO', ['ecoute', 'prudence']),
  sent(1645, 'Chat échaudé craint l’eau froide.', 'Once bitten, twice shy.', '/ʃa e.ʃo.de kʁɛ̃ lo fʁwad/', 'sha ay-shoh-DAY | krehⁿ loh FRWAD', ['proverbe', 'prudence'], FCVDR),
  sent(1646, 'Moi, me faire avoir par un ami ? Jamais.', 'Me, get conned by a friend? Never.', '/mwa mə fɛʁ a.vwaʁ paʁ œ̃.na.mi ʒa.mɛ/', 'MWA | muh fehr a-VWAR | par uhⁿ-na-MEE | zha-MEH', ['ecoute']),
  sent(1647, 'Il ne faut jamais dire : Fontaine, je ne boirai pas de ton eau.', 'Never say never.', '/il nə fo ʒa.mɛ diʁ fɔ̃.tɛn ʒə nə bwa.ʁɛ pa d(ə) tɔ̃.no/', 'eel nuh foh zha-meh DEER | fohⁿ-TEHNN | zhuh nuh bwa-REH pa duh toh-NOH', ['proverbe', 'prudence'], FCVDR),
  sent(1648, 'Et ne mets pas tous tes œufs dans le même panier.', 'And do not put all your eggs in one basket.', '/e nə mɛ pa tu te.zø dɑ̃ lə mɛm pa.nje/', 'ay nuh meh pa TOO | tay-ZUH | dahⁿ luh mem pa-NYAY', ['ecoute', 'prudence']),
  sent(1649, 'D’accord, je fais relire le contrat et je garde la moitié.', 'All right, I will have the contract read and keep half.', '/da.kɔʁ ʒə fɛ ʁə.liʁ lə kɔ̃.tʁa e ʒə gaʁd la mwa.tje/', 'da-KOR | zhuh feh ruh-LEER luh kohⁿ-TRA | ay zhuh gard la mwa-TYAY', ['ecoute']),
  sent(1650, 'Il ne faut pas mettre tous ses œufs dans le même panier.', 'Do not put all your eggs in one basket.', '/il nə fo pa mɛtʁ tu se.zø dɑ̃ lə mɛm pa.nje/', 'eel nuh foh pa mehtr TOO | say-ZUH | dahⁿ luh mem pa-NYAY', ['proverbe', 'prudence'], FCVDR),
  sent(1651, 'Les proverbes de la prudence regardent vers l’avant : ils conseillent d’agir avant le problème.', 'The proverbs of caution look ahead: they advise acting before the problem.', '/le pʁɔ.vɛʁb də la pʁy.dɑ̃s ʁə.gaʁd vɛʁ la.vɑ̃ il kɔ̃.sɛj da.ʒiʁ a.vɑ̃ lə pʁɔ.blɛm/', 'lay pro-VEHRB duh la prü-DAHⁿSS | ruh-GARD vehr la-VAHⁿ | eel kohⁿ-SEHY da-ZHEER | a-vahⁿ luh pro-BLEM', ['rule', 'prudence'], ['flashcard'],
    rule('Chat échaudé, Fontaine, les œufs, prévenir : quel conseil commun ?', 'Prévoir le risque avant qu’il arrive, et ne jamais se croire à l’abri.')),
  sent(1652, 'Échaudé par son dernier contrat, il relit tout deux fois.', 'Burned by his last contract, he rereads everything twice.', '/e.ʃo.de paʁ sɔ̃ dɛʁ.nje kɔ̃.tʁa il ʁə.li tu dø fwa/', 'ay-shoh-DAY | par sohⁿ dehr-nyay kohⁿ-TRA | eel ruh-lee TOO | deu FWA', ['prudence'], FCVDR),
  sent(1653, 'Mieux vaut prévenir que guérir : j’ai fait vérifier les freins avant de partir.', 'Better safe than sorry: I had the brakes checked before leaving.', '/mjø vo pʁe.v(ə).niʁ kə ge.ʁiʁ ʒe fɛ ve.ʁi.fje le fʁɛ̃ a.vɑ̃ d(ə) paʁ.tiʁ/', 'myuh voh prayv-NEER kuh gay-REER | zhay feh vay-ree-FYAY lay FREHⁿ | a-vahⁿ duh par-TEER', ['prudence']),
];

/* ── ACT 5 · LES AUTRES ET NOUS ─────────────────────────────────────────── */

export const ACT5_ROWS: Row[] = [
  sent(1654, 'Qui se ressemble s’assemble.', 'Birds of a feather flock together.', '/ki sə ʁə.sɑ̃bl sa.sɑ̃bl/', 'kee suh ruh-SAHⁿBL | sa-SAHⁿBL', ['proverbe', 'gens'], FCVDR),
  sent(1655, 'Tel père, tel fils.', 'Like father, like son.', '/tɛl pɛʁ tɛl fis/', 'tehl PEHR | tehl FEESS', ['proverbe', 'gens'], FCVDR),
  sent(1656, 'Telle mère, telle fille.', 'Like mother, like daughter.', '/tɛl mɛʁ tɛl fij/', 'tehl MEHR | tehl FEEY', ['proverbe', 'gens']),
  sent(1657, 'L’habit ne fait pas le moine.', 'Clothes do not make the man.', '/la.bi nə fɛ pa lə mwan/', 'la-BEE | nuh feh pa luh MWANN', ['proverbe', 'gens'], FCVDR),
  sent(1658, 'Les absents ont toujours tort.', 'The absent are always in the wrong.', '/le.zap.sɑ̃ ɔ̃ tu.ʒuʁ tɔʁ/', 'lay-zap-SAHⁿ | ohⁿ too-zhoor TOR', ['proverbe', 'gens'], FCVDR),
  sent(1659, 'Ils adorent tous les deux la randonnée et les vieux films : qui se ressemble s’assemble.', 'They both love hiking and old films: birds of a feather flock together.', '/il.za.dɔʁ tu le dø la ʁɑ̃.dɔ.ne e le vjø film ki sə ʁə.sɑ̃bl sa.sɑ̃bl/', 'eel-za-DOR too lay DEU | la rahⁿ-do-NAY | ay lay vyuh FEELM | kee suh ruh-SAHⁿBL sa-SAHⁿBL', ['gens'], FCVDR),
  sent(1660, 'Il est aussi têtu que son père : tel père, tel fils.', 'He is as stubborn as his father: like father, like son.', '/i.lɛ.to.si tɛ.ty kə sɔ̃ pɛʁ tɛl pɛʁ tɛl fis/', 'ee-leh-toh-SEE teh-TÜ | kuh sohⁿ PEHR | tehl PEHR tehl FEESS', ['gens']),
  sent(1661, 'Avec son vieux pull, on le prenait pour un stagiaire : c’était le directeur.', 'In his old jumper, people took him for an intern: he was the director.', '/a.vɛk sɔ̃ vjø pyl ɔ̃ l(ə) pʁə.nɛ puʁ œ̃ sta.ʒjɛʁ se.tɛ lə di.ʁɛk.tœʁ/', 'a-vehk sohⁿ vyuh PÜL | ohⁿ luh pruh-NEH | poor uhⁿ sta-ZHYEHR | say-teh luh dee-rehk-TUHR', ['gens'], FCVDR),
  sent(1662, 'Tu n’étais pas à la réunion, alors on t’a donné le pire dossier : les absents ont toujours tort.', 'You were not at the meeting, so they gave you the worst file: the absent are always in the wrong.', '/ty ne.tɛ pa.za la ʁe.y.njɔ̃ a.lɔʁ ɔ̃ ta dɔ.ne lə piʁ do.sje le.zap.sɑ̃ ɔ̃ tu.ʒuʁ tɔʁ/', 'tü nay-teh pa-za la ray-ü-NYOHⁿ | a-lor ohⁿ ta do-NAY | luh peer do-SYAY | lay-zap-SAHⁿ ohⁿ too-zhoor TOR', ['gens']),
  sent(1663, 'Il change de pays tous les deux ans : pierre qui roule n’amasse pas mousse, dit sa mère.', 'He moves country every two years: a rolling stone gathers no moss, says his mother.', '/il ʃɑ̃ʒ də pe.i tu le dø.zɑ̃ pjɛʁ ki ʁul na.mas pa mus di sa mɛʁ/', 'eel shahⁿzh duh pay-EE | too lay deu-ZAHⁿ | pyehr kee ROOL na-mass pa MOOSS | dee sa MEHR', ['gens']),
  ph(1664, 'se fier aux apparences', 'to trust appearances', '/sə fje o.za.pa.ʁɑ̃s/', 'suh FYAY | oh-za-pa-RAHⁿSS', ['gens'], 'Juger quelqu’un sur ce qu’on voit ; l’habit ne fait pas le moine dit de s’en méfier.'),
  sent(1665, 'Les proverbes sur les gens jugent vite : cite-les avec un sourire, pas comme une sentence.', 'Proverbs about people judge fast: quote them with a smile, not as a verdict.', '/le pʁɔ.vɛʁb syʁ le ʒɑ̃ ʒyʒ vit sit.le a.vɛk œ̃ su.ʁiʁ pa kɔm yn sɑ̃.tɑ̃s/', 'lay pro-VEHRB sür lay ZHAHⁿ | zhüzh VEET | seet-LAY a-vehk uhⁿ soo-REER | pa komm ün sahⁿ-TAHⁿSS', ['rule', 'gens'], ['flashcard'],
    rule('Tel père, tel fils : un fait ou une impression ?', 'Une impression, souvent vraie, parfois injuste : on la cite avec prudence, et souvent avec humour.')),
  sent(1666, 'Contrairement au proverbe, elle ne ressemble pas du tout à sa mère.', 'Contrary to the proverb, she is nothing like her mother.', '/kɔ̃.tʁɛʁ.mɑ̃ o pʁɔ.vɛʁb ɛl nə ʁə.sɑ̃bl pa dy tu a sa mɛʁ/', 'kohⁿ-trehr-MAHⁿ oh pro-VEHRB | ehl nuh ruh-SAHⁿBL | pa dü TOO | a sa MEHR', ['gens']),
];

/* ── ACT 6 · SEMER ET RÉCOLTER ──────────────────────────────────────────── */

export const ACT6_ROWS: Row[] = [
  sent(1667, 'Qui sème le vent récolte la tempête.', 'Sow the wind, reap the whirlwind.', '/ki sɛm lə vɑ̃ ʁe.kɔlt la tɑ̃.pɛt/', 'kee SEHMM luh VAHⁿ | ray-KOLT la tahⁿ-PEHT', ['proverbe', 'consequence'], FCVDR),
  sent(1668, 'On récolte ce que l’on sème.', 'You reap what you sow.', '/ɔ̃ ʁe.kɔlt sə kə lɔ̃ sɛm/', 'ohⁿ ray-KOLT | suh kuh lohⁿ SEHMM', ['proverbe', 'consequence'], FCVDR),
  sent(1669, 'Il n’y a pas de fumée sans feu.', 'There is no smoke without fire.', '/il nja pa d(ə) fy.me sɑ̃ fø/', 'eel nya pa duh fü-MAY | sahⁿ FUH', ['proverbe', 'consequence'], FCVDR),
  sent(1670, 'Après la pluie, le beau temps.', 'Every cloud has a silver lining.', '/a.pʁɛ la plɥi lə bo tɑ̃/', 'a-preh la PLWEE | luh boh TAHⁿ', ['proverbe', 'consequence'], FCVDR),
  ph(1671, 'la goutte d’eau qui fait déborder le vase', 'the last straw', '/la gut do ki fɛ de.bɔʁ.de lə vaz/', 'la goot DOH | kee feh day-bor-DAY luh VAHZ', ['figee', 'consequence'], 'Le petit détail de trop, après beaucoup d’autres.'),
  sent(1672, 'Mon voisin s’est d’abord plaint du bruit, poliment.', 'My neighbour first complained about the noise, politely.', '/mɔ̃ vwa.zɛ̃ sɛ da.bɔʁ plɛ̃ dy bʁɥi pɔ.li.mɑ̃/', 'mohⁿ vwa-ZEHⁿ | seh da-bor PLEHⁿ dü BRWEE | po-lee-MAHⁿ', ['histoire']),
  sent(1673, 'Moi, je lui ai répondu par un mot sec sur sa porte.', 'I answered with a curt note on his door.', '/mwa ʒə lɥi e ʁe.pɔ̃.dy paʁ œ̃ mo sɛk syʁ sa pɔʁt/', 'MWA | zhuh lwee ay ray-pohⁿ-DÜ | par uhⁿ moh SEHK | sür sa PORT', ['histoire']),
  sent(1674, 'Depuis, il ne me salue plus, et ses amis m’évitent.', 'Since then he no longer greets me, and his friends avoid me.', '/də.pɥi il nə mə sa.ly ply e se.za.mi me.vit/', 'duh-PWEE | eel nuh muh sa-lü PLÜ | ay say-za-MEE may-VEET', ['histoire']),
  sent(1675, 'Et on raconte dans l’immeuble que je fais la fête toutes les nuits.', 'And people in the building say I party every night.', '/e ɔ̃ ʁa.kɔ̃t dɑ̃ li.mœbl kə ʒə fɛ la fɛt tut le nɥi/', 'ay ohⁿ ra-KOHⁿT dahⁿ lee-MUHBL | kuh zhuh feh la FEHT | toot lay NWEE', ['histoire']),
  sent(1676, 'Il n’y a pas de fumée sans feu : tu as fait une fête, une fois.', 'No smoke without fire: you did throw a party, once.', '/il nja pa d(ə) fy.me sɑ̃ fø ty a fɛ yn fɛt yn fwa/', 'eel nya pa duh fü-may sahⁿ FUH | tü a feh ün FEHT | ün FWA', ['histoire', 'consequence']),
  sent(1677, 'Une seule fois. Et son dernier mot, c’est la goutte d’eau qui fait déborder le vase.', 'Just once. And his last note is the last straw.', '/yn sœl fwa e sɔ̃ dɛʁ.nje mo sɛ la gut do ki fɛ de.bɔʁ.de lə vaz/', 'ün suhl FWA | ay sohⁿ dehr-nyay MOH | seh la goot DOH | kee feh day-bor-DAY luh VAHZ', ['histoire']),
  sent(1678, 'Va lui parler demain. Après la pluie, le beau temps.', 'Go and talk to him tomorrow. Every cloud has a silver lining.', '/va lɥi paʁ.le d(ə).mɛ̃ a.pʁɛ la plɥi lə bo tɑ̃/', 'va lwee par-LAY duh-MEHⁿ | a-preh la PLWEE | luh boh TAHⁿ', ['histoire']),
  sent(1679, 'Il a menti à tout le monde, et plus personne ne le croit : on récolte ce que l’on sème.', 'He lied to everyone, and now nobody believes him: you reap what you sow.', '/i.la mɑ̃.ti a tu lə mɔ̃d e ply pɛʁ.sɔn nə lə kʁwa ɔ̃ ʁe.kɔlt sə kə lɔ̃ sɛm/', 'ee-la mahⁿ-TEE | a too luh MOHⁿD | ay plü pehr-SONN nuh luh KRWA | ohⁿ ray-KOLT suh kuh lohⁿ SEHMM', ['consequence'], FCVDR),
  sent(1680, 'Pas de fumée sans feu : une rumeur a souvent une cause, pas toujours une raison.', 'No smoke without fire: a rumour often has a cause, not always a basis.', '/pa d(ə) fy.me sɑ̃ fø yn ʁy.mœʁ a su.vɑ̃ yn koz pa tu.ʒuʁ yn ʁɛ.zɔ̃/', 'pa duh fü-may sahⁿ FUH | ün rü-MUHR a soo-vahⁿ ün KOHZ | pa too-zhoor ün reh-ZOHⁿ', ['rule', 'consequence'], ['flashcard'],
    rule('Il n’y a pas de fumée sans feu : faut-il croire toutes les rumeurs ?', 'Non. Le proverbe dit qu’une rumeur vient de quelque part ; il ne prouve pas qu’elle est vraie. Cite-le avec prudence.')),
  sent(1681, 'Ces trois jours de retard, c’est la goutte d’eau qui fait déborder le vase.', 'These three days’ delay are the last straw.', '/se tʁwa ʒuʁ də ʁə.taʁ sɛ la gut do ki fɛ de.bɔʁ.de lə vaz/', 'say trwa ZHOOR duh ruh-TAR | seh la goot DOH | kee feh day-bor-DAY luh VAHZ', ['consequence'], FCVDR),
];

/* ── ACT 7 · LA FONTAINE, FABRIQUE DE PROVERBES ─────────────────────────── */

export const ACT7_ROWS: Row[] = [
  sent(1682, 'La raison du plus fort est toujours la meilleure.', 'The strongest always wins the argument: might makes right.', '/la ʁɛ.zɔ̃ dy ply fɔʁ ɛ tu.ʒuʁ la mɛ.jœʁ/', 'la reh-ZOHⁿ dü plü FOR | eh too-zhoor la meh-YUHR', ['lafontaine', 'citation'], FCVDR),
  sent(1683, 'Rien ne sert de courir ; il faut partir à point.', 'There is no point running; you have to set off in good time.', '/ʁjɛ̃ nə sɛʁ də ku.ʁiʁ il fo paʁ.tiʁ a pwɛ̃/', 'ryehⁿ nuh sehr duh koo-REER | eel foh par-teer a PWEHⁿ', ['lafontaine', 'citation'], FCVDR),
  sent(1684, 'On a souvent besoin d’un plus petit que soi.', 'We often need someone smaller than ourselves.', '/ɔ̃.na su.vɑ̃ bə.zwɛ̃ dœ̃ ply pə.ti kə swa/', 'ohⁿ-na soo-VAHⁿ buh-ZWEHⁿ | duhⁿ plü puh-tee kuh SWA', ['lafontaine', 'citation'], FCVDR),
  sent(1685, 'Apprenez que tout flatteur vit aux dépens de celui qui l’écoute.', 'Learn that every flatterer lives at the expense of whoever listens to him.', '/a.pʁə.ne kə tu fla.tœʁ vi o de.pɑ̃ də sə.lɥi ki le.kut/', 'a-pruh-NAY kuh too fla-TUHR | vee oh day-PAHⁿ | duh suh-lwee kee lay-KOOT', ['lafontaine', 'citation']),
  ph(1686, 'la morale d’une fable', 'the moral of a fable', '/la mɔ.ʁal dyn fabl/', 'la mo-RAL | dün FABL', ['lafontaine'], 'La leçon que la fable tire de son histoire, souvent en un ou deux vers.'),
  sent(1687, 'La Fontaine a publié ses Fables entre 1668 et 1694.', 'La Fontaine published his Fables between 1668 and 1694.', '/la fɔ̃.tɛn a py.bli.je se fabl ɑ̃tʁ mil si sɑ̃ swa.sɑ̃t.ɥit e mil si sɑ̃ ka.tʁə.vɛ̃.ka.tʁ/', 'la fohⁿ-TEHNN | a pü-blee-YAY say FABL | ahⁿtr meel see sahⁿ swa-sahⁿt-WEET | ay meel see sahⁿ ka-truh-vehⁿ-KATR', ['lafontaine'], ['flashcard', 'review']),
  sent(1688, 'Beaucoup de ses fables reprennent des histoires d’Ésope.', 'Many of his fables retell stories by Aesop.', '/bo.ku də se fabl ʁə.pʁɛn de.zis.twaʁ de.zɔp/', 'boh-koo duh say FABL | ruh-PREHNN | day-zees-TWAR day-ZOP', ['lafontaine']),
  sent(1689, 'Aujourd’hui, on cite la raison du plus fort pour dénoncer un abus de pouvoir.', 'Today people quote « la raison du plus fort » to denounce an abuse of power.', '/o.ʒuʁ.dɥi ɔ̃ sit la ʁɛ.zɔ̃ dy ply fɔʁ puʁ de.nɔ̃.se œ̃.na.by d(ə) pu.vwaʁ/', 'oh-zhoor-DWEE | ohⁿ SEET | la reh-zohⁿ dü plü FOR | poor day-nohⁿ-SAY | uhⁿ-na-BÜ duh poo-VWAR', ['lafontaine', 'usage'], FCVDR),
  sent(1690, 'Dans la fable, le loup mange l’agneau : La Fontaine décrit le monde, il ne l’approuve pas.', 'In the fable the wolf eats the lamb: La Fontaine describes the world, he does not approve of it.', '/dɑ̃ la fabl lə lu mɑ̃ʒ la.ɲo la fɔ̃.tɛn de.kʁi lə mɔ̃d il nə la.pʁuv pa/', 'dahⁿ la FABL | luh LOO mahⁿzh la-NYOH | la fohⁿ-TEHNN day-KREE luh MOHⁿD | eel nuh la-PROOV PA', ['lafontaine']),
  sent(1691, 'Dans la fable, la tortue part à temps et gagne la course contre le lièvre.', 'In the fable, the tortoise sets off in time and wins the race against the hare.', '/dɑ̃ la fabl la tɔʁ.ty paʁ a tɑ̃ e gaɲ la kuʁs kɔ̃tʁ lə ljɛvʁ/', 'dahⁿ la FABL | la tor-TÜ par a TAHⁿ | ay gahny la KOORSS | kohⁿtr luh LYEHVR', ['lafontaine']),
  sent(1692, 'Dans « Le Lion et le Rat », un petit rat libère le lion pris dans un filet.', 'In « The Lion and the Rat », a little rat frees the lion caught in a net.', '/dɑ̃ lə ljɔ̃ e lə ʁa œ̃ pə.ti ʁa li.bɛʁ lə ljɔ̃ pʁi dɑ̃.zœ̃ fi.lɛ/', 'dahⁿ luh LYOHⁿ ay luh RA | uhⁿ puh-tee RA | lee-BEHR luh LYOHⁿ | pree dahⁿ-zuhⁿ fee-LEH', ['lafontaine']),
  sent(1693, 'Le renard flatte le corbeau pour lui prendre son fromage.', 'The fox flatters the crow to take his cheese.', '/lə ʁə.naʁ flat lə kɔʁ.bo puʁ lɥi pʁɑ̃dʁ sɔ̃ fʁɔ.maʒ/', 'luh ruh-NAR FLAT luh kor-BOH | poor lwee prahⁿdr sohⁿ fro-MAZH', ['lafontaine'], FCVDR),
  sent(1694, 'Sans la stagiaire, le dossier n’aurait jamais été prêt : on a souvent besoin d’un plus petit que soi.', 'Without the intern, the file would never have been ready: we often need someone smaller than ourselves.', '/sɑ̃ la sta.ʒjɛʁ lə do.sje no.ʁɛ ʒa.mɛ e.te pʁɛ ɔ̃.na su.vɑ̃ bə.zwɛ̃ dœ̃ ply pə.ti kə swa/', 'sahⁿ la sta-ZHYEHR | luh do-SYAY no-reh zha-meh ay-tay PREH | ohⁿ-na soo-vahⁿ buh-zwehⁿ duhⁿ plü puh-tee kuh SWA', ['lafontaine', 'usage']),
  sent(1695, 'Elle a fini son mémoire en avance, sans stress : rien ne sert de courir ; il faut partir à point.', 'She finished her dissertation early, without stress: there is no point running; set off in good time.', '/ɛ.la fi.ni sɔ̃ me.mwaʁ ɑ̃.na.vɑ̃s sɑ̃ stʁɛs ʁjɛ̃ nə sɛʁ də ku.ʁiʁ il fo paʁ.tiʁ a pwɛ̃/', 'eh-la fee-NEE sohⁿ may-MWAR | ahⁿ-na-VAHⁿSS sahⁿ STRESS | ryehⁿ nuh sehr duh koo-REER | eel foh par-teer a PWEHⁿ', ['lafontaine', 'usage'], FCVDR),
  sent(1696, 'Une morale de La Fontaine se cite mot pour mot : c’est une citation, pas un proverbe anonyme.', 'A La Fontaine moral is quoted word for word: it is a quotation, not an anonymous proverb.', '/yn mɔ.ʁal də la fɔ̃.tɛn sə sit mo puʁ mo sɛ.tyn si.ta.sjɔ̃ pa.zœ̃ pʁɔ.vɛʁb a.nɔ.nim/', 'ün mo-RAL duh la fohⁿ-TEHNN | suh SEET moh poor MOH | seh-tün see-ta-SYOHⁿ | pa-zuhⁿ pro-VEHRB a-no-NEEMM', ['rule', 'lafontaine'], ['flashcard'],
    rule('Rien ne sert de courir : proverbe ou citation ?', 'Une citation de La Fontaine, devenue proverbiale : on la cite exactement, et on peut nommer son auteur.')),
];

/* ── ACT 8 · LE PROVERBE DANS LA CONVERSATION ──────────────────────────── */

export const ACT8_ROWS: Row[] = [
  sent(1697, 'Alors, cette promotion, tu l’as eue ?', 'So, did you get that promotion?', '/a.lɔʁ sɛt pʁɔ.mo.sjɔ̃ ty la y/', 'a-LOR | seht pro-mo-SYOHⁿ | tü la Ü', ['ecoute']),
  sent(1698, 'Non, c’est Kevin qui l’a eue. Il était à la réunion, pas moi.', 'No, Kevin got it. He was at the meeting, I was not.', '/nɔ̃ sɛ ke.vin ki la y i.lɛ.tɛ.ta la ʁe.y.njɔ̃ pa mwa/', 'NOHⁿ | seh kay-VEENN kee la Ü | ee-leh-teh-ta la ray-ü-NYOHⁿ | pa MWA', ['ecoute']),
  sent(1699, 'Eh oui, les absents ont toujours tort.', 'Well yes, the absent are always in the wrong.', '/e wi le.zap.sɑ̃ ɔ̃ tu.ʒuʁ tɔʁ/', 'ay WEE | lay-zap-SAHⁿ ohⁿ too-zhoor TOR', ['ecoute', 'citation']),
  sent(1700, 'Bon, comme on dit, après la pluie…', 'Well, as they say, after the rain…', '/bɔ̃ kɔ.mɔ̃ di a.pʁɛ la plɥi/', 'BOHⁿ | ko-mohⁿ DEE | a-preh la PLWEE', ['ecoute', 'citation']),
  sent(1701, 'Le beau temps, oui, je connais la chanson.', 'The sunshine, yes, I have heard it all before.', '/lə bo tɑ̃ wi ʒə kɔ.nɛ la ʃɑ̃.sɔ̃/', 'luh boh TAHⁿ | WEE | zhuh ko-neh la shahⁿ-SOHⁿ', ['ecoute', 'citation'], FCVR, { register: 'familier' }),
  sent(1702, 'Et puis, qui va lentement va sûrement, non ?', 'And anyway, slow and steady wins the race, right?', '/e pɥi ki va lɑ̃t.mɑ̃ va syʁ.mɑ̃ nɔ̃/', 'ay PWEE | kee va lahⁿt-MAHⁿ va sür-MAHⁿ | NOHⁿ', ['ecoute', 'citation']),
  sent(1703, 'Qui va lentement arrive en retard, surtout aux réunions.', 'Slow and steady gets there late, especially to meetings.', '/ki va lɑ̃t.mɑ̃ a.ʁiv ɑ̃ ʁə.taʁ syʁ.tu o ʁe.y.njɔ̃/', 'kee va lahⁿt-MAHⁿ | a-reev ahⁿ ruh-TAR | sür-too oh ray-ü-NYOHⁿ', ['ecoute', 'ironie'], FCVDR),
  sent(1704, 'Comme dirait ta grand-mère, petit à petit, l’oiseau fait son nid.', 'As your grandmother would say, little by little, the bird builds its nest.', '/kɔm di.ʁɛ ta gʁɑ̃.mɛʁ pə.ti.ta pə.ti lwa.zo fɛ sɔ̃ ni/', 'komm dee-REH ta grahⁿ-MEHR | puh-tee-ta puh-TEE | lwa-zoh feh sohⁿ NEE', ['ecoute', 'citation']),
  sent(1705, 'Oui, et Paris ne s’est pas fait en un jour. Merci, maman.', 'Yes, and Rome was not built in a day. Thanks, Mum.', '/wi e pa.ʁi nə sɛ pa fɛ ɑ̃.nœ̃ ʒuʁ mɛʁ.si ma.mɑ̃/', 'WEE | ay pa-REE nuh seh pa FEH ahⁿ-nuhⁿ ZHOOR | mehr-SEE ma-MAHⁿ', ['ecoute', 'ironie']),
  ph(1706, 'tu connais le proverbe', 'you know the saying', '/ty kɔ.nɛ lə pʁɔ.vɛʁb/', 'tü ko-NEH | luh pro-VEHRB', ['citation'], 'Pour citer un proverbe à quelqu’un que tu tutoies ; avec vous : vous connaissez le proverbe.'),
  ph(1707, 'comme dirait ma grand-mère', 'as my grandmother would say', '/kɔm di.ʁɛ ma gʁɑ̃.mɛʁ/', 'komm dee-REH | ma grahⁿ-MEHR', ['citation'], 'Le conditionnel prend ses distances : c’est sa phrase à elle, avec un sourire.'),
  ph(1708, 'si l’on en croit le proverbe', 'if the proverb is to be believed', '/si lɔ̃.nɑ̃ kʁwa lə pʁɔ.vɛʁb/', 'see lohⁿ-nahⁿ KRWA | luh pro-VEHRB', ['citation', 'ecrit'], 'Soutenu, pour l’écrit : on cite le proverbe pour le discuter.', 'soutenu'),
  ph(1709, 'je connais la chanson', 'I have heard it all before', '/ʒə kɔ.nɛ la ʃɑ̃.sɔ̃/', 'zhuh ko-NEH | la shahⁿ-SOHⁿ', ['citation'], 'Familier : tu as déjà entendu ce discours, et tu le fais savoir.', 'familier'),
  sent(1710, 'Le proverbe a beau dire, cette fois, la prudence ne nous a pas protégés.', 'Whatever the proverb says, this time caution did not protect us.', '/lə pʁɔ.vɛʁb a bo diʁ sɛt fwa la pʁy.dɑ̃s nə nu.za pa pʁɔ.te.ʒe/', 'luh pro-VEHRB a boh DEER | seht FWA | la prü-DAHⁿSS | nuh noo-za pa pro-tay-ZHAY', ['ecrit']),
  sent(1711, 'Certes, qui ne tente rien n’a rien ; encore faut-il savoir ce que l’on tente.', 'Admittedly, nothing ventured, nothing gained; still, you need to know what you are venturing.', '/sɛʁt ki nə tɑ̃t ʁjɛ̃ na ʁjɛ̃ ɑ̃.kɔʁ fo.til sa.vwaʁ sə kə lɔ̃ tɑ̃t/', 'SEHRT | kee nuh tahⁿt RYEHⁿ na RYEHⁿ | ahⁿ-kor foh-TEEL sa-VWAR | suh kuh lohⁿ TAHⁿT', ['ecrit'], FCVDR, { register: 'soutenu' }),
  sent(1712, 'Dans un texte formel, un proverbe sert d’accroche ou de conclusion, jamais de preuve.', 'In a formal text, a proverb serves as a hook or a conclusion, never as proof.', '/dɑ̃.zœ̃ tɛkst fɔʁ.mɛl œ̃ pʁɔ.vɛʁb sɛʁ da.kʁɔʃ u d(ə) kɔ̃.kly.zjɔ̃ ʒa.mɛ d(ə) pʁœv/', 'dahⁿ-zuhⁿ tehkst for-MEHL | uhⁿ pro-VEHRB sehr da-KROSH | oo duh kohⁿ-klü-ZYOHⁿ | zha-meh duh PRUHV', ['rule', 'ecrit'], ['flashcard'],
    rule('Dans ta chronique, le proverbe peut-il prouver ton idée ?', 'Non. Il ouvre ou ferme le texte ; tes arguments et tes exemples font la preuve.')),
];

/* ── ACT 9 · D'UNE LANGUE À L'AUTRE ────────────────────────────────────── */

export const ACT9_ROWS: Row[] = [
  sent(1713, 'Ici, le père cite un proverbe anglais sur des poussins.', 'Here the father quotes an English proverb about chickens.', '/i.si lə pɛʁ sit œ̃ pʁɔ.vɛʁb ɑ̃.glɛ syʁ de pu.sɛ̃/', 'ee-SEE | luh PEHR seet uhⁿ pro-VEHRB ahⁿ-GLEH | sür day poo-SEHⁿ', ['histoire', 'traduire']),
  sent(1714, 'En français, on ne compte pas les poussins : on vend la peau de l’ours.', 'In French, you do not count chickens: you sell the bear’s skin.', '/ɑ̃ fʁɑ̃.sɛ ɔ̃ nə kɔ̃t pa le pu.sɛ̃ ɔ̃ vɑ̃ la po d(ə) luʁs/', 'ahⁿ frahⁿ-SEH | ohⁿ nuh kohⁿt pa lay poo-SEHⁿ | ohⁿ VAHⁿ la POH duh LOORS', ['histoire', 'traduire'], FCVDR),
  sent(1715, 'Plus loin, sa fille a été trompée une fois, et elle se méfie de tout.', 'Further on, his daughter was cheated once, and now she distrusts everything.', '/ply lwɛ̃ sa fij a e.te tʁɔ̃.pe yn fwa e ɛl sə me.fi də tu/', 'plü LWEHⁿ | sa FEEY a ay-tay trohⁿ-PAY ün FWA | ay ehl suh may-FEE duh TOO', ['histoire', 'traduire']),
  sent(1716, 'Chat échaudé craint l’eau froide : même idée, autre image.', 'Once bitten, twice shy: same idea, another image.', '/ʃa e.ʃo.de kʁɛ̃ lo fʁwad mɛ.mi.de o.tʁi.maʒ/', 'sha ay-shoh-DAY krehⁿ loh FRWAD | meh-mee-DAY | oh-tree-MAZH', ['histoire', 'traduire']),
  sent(1717, 'Et à la fin, il lui conseille de suivre les usages du pays.', 'And at the end he advises her to follow the local customs.', '/e a la fɛ̃ il lɥi kɔ̃.sɛj də sɥivʁ le.zy.zaʒ dy pe.i/', 'ay a la FEHⁿ | eel lwee kohⁿ-SEHY | duh sweevr lay-zü-ZAZH dü pay-EE', ['histoire', 'traduire']),
  sent(1718, 'Là, pas d’équivalent unique : on traduit le sens.', 'There, no single equivalent: you translate the meaning.', '/la pa de.ki.va.lɑ̃ y.nik ɔ̃ tʁa.dɥi lə sɑ̃s/', 'LA | pa day-kee-va-lahⁿ ü-NEEK | ohⁿ tra-dwee luh SAHⁿSS', ['histoire', 'traduire']),
  sent(1719, 'Traduis un proverbe par un proverbe ; s’il n’y en a pas, traduis son sens.', 'Translate a proverb with a proverb; if there is none, translate its meaning.', '/tʁa.dɥi œ̃ pʁɔ.vɛʁb paʁ œ̃ pʁɔ.vɛʁb sil njɑ̃.na pa tʁa.dɥi sɔ̃ sɑ̃s/', 'tra-DWEE uhⁿ pro-VEHRB | par uhⁿ pro-VEHRB | seel nyahⁿ-na PA | tra-dwee sohⁿ SAHⁿSS', ['rule', 'traduire'], ['flashcard'],
    rule('Don’t count your chickens : comment le traduire ?', 'Par le proverbe français qui dit la même chose : il ne faut pas vendre la peau de l’ours avant de l’avoir tué. Pas par les poussins.')),
  sent(1720, 'Parfois, les deux langues ont la même image : tel père, tel fils.', 'Sometimes the two languages have the same image: like father, like son.', '/paʁ.fwa le dø lɑ̃g ɔ̃ la mɛm i.maʒ tɛl pɛʁ tɛl fis/', 'par-FWA | lay deu LAHⁿG | ohⁿ la mem ee-MAZH | tehl PEHR tehl FEESS', ['traduire']),
  ph(1721, 'traduire mot à mot', 'to translate word for word', '/tʁa.dɥiʁ mo.ta.mo/', 'tra-DWEER | moh-ta-MOH', ['traduire'], 'Garder chaque mot : parfois juste, souvent un calque.'),
  sent(1722, 'On entend parfois « à Rome, fais comme les Romains », mais aucune formule ne s’est imposée.', 'You sometimes hear « à Rome, fais comme les Romains », but no single phrase has become standard.', '/ɔ̃.nɑ̃.tɑ̃ paʁ.fwa a ʁɔm fɛ kɔm le ʁɔ.mɛ̃ mɛ o.kyn fɔʁ.myl nə sɛ.tɛ̃.po.ze/', 'ohⁿ-nahⁿ-tahⁿ par-FWA | a ROMM feh komm lay ro-MEHⁿ | meh oh-kün for-MÜL | nuh seh-tehⁿ-poh-ZAY', ['traduire']),
  ph(1723, 'hurler avec les loups', 'to go along with the crowd', '/yʁ.le a.vɛk le lu/', 'ür-LAY | a-vehk lay LOO', ['traduire'], 'Faire comme le groupe, souvent contre son propre jugement : plus péjoratif que when in Rome, qui est un conseil neutre.'),
  sent(1724, 'Un bon traducteur cherche d’abord le proverbe qui existe déjà.', 'A good translator first looks for the proverb that already exists.', '/œ̃ bɔ̃ tʁa.dyk.tœʁ ʃɛʁʃ da.bɔʁ lə pʁɔ.vɛʁb ki ɛg.zist de.ʒa/', 'uhⁿ bohⁿ tra-dük-TUHR | shehrsh da-BOR | luh pro-VEHRB kee ehg-zeest day-ZHA', ['traduire']),
  sent(1725, 'Il faut s’adapter aux usages du pays où l’on vit.', 'You have to adapt to the customs of the country you live in.', '/il fo sa.dap.te o.zy.zaʒ dy pe.i u lɔ̃ vi/', 'eel foh sa-dap-TAY | oh-zü-ZAZH dü pay-EE | oo lohⁿ VEE', ['traduire'], FCVDR),
  sent(1726, 'Même image, autre image ou pas d’équivalent : pose-toi toujours la question.', 'Same image, another image or no equivalent: always ask yourself the question.', '/mɛ.mi.maʒ o.tʁi.maʒ u pa de.ki.va.lɑ̃ poz.twa tu.ʒuʁ la kɛs.tjɔ̃/', 'meh-mee-MAZH | oh-tree-MAZH | oo pa day-kee-va-LAHⁿ | poz-TWA too-zhoor la kehs-TYOHⁿ', ['traduire']),
  sent(1727, 'Cette réplique n’a pas besoin de proverbe : une phrase simple suffit.', 'This line does not need a proverb: a simple sentence is enough.', '/sɛt ʁe.plik na pa bə.zwɛ̃ d(ə) pʁɔ.vɛʁb yn fʁaz sɛ̃pl sy.fi/', 'seht ray-PLEEK | na pa buh-zwehⁿ duh pro-VEHRB | ün fraz SEHⁿPL sü-FEE', ['traduire']),
];

/* ── ACT 10 · DES EXPRESSIONS FIGÉES POUR LE TRAVAIL ─────────────────────── */

export const ACT10_ROWS: Row[] = [
  ph(1728, 'faire d’une pierre deux coups', 'to kill two birds with one stone', '/fɛʁ dyn pjɛʁ dø ku/', 'fehr dün PYEHR | deu KOO', ['travail'], 'Atteindre deux buts avec une seule action.'),
  sent(1729, 'En passant à la banque, j’ai posté le colis : j’ai fait d’une pierre deux coups.', 'I posted the parcel on my way to the bank: I killed two birds with one stone.', '/ɑ̃ pa.sɑ̃ a la bɑ̃k ʒe pɔs.te lə kɔ.li ʒe fɛ dyn pjɛʁ dø ku/', 'ahⁿ pa-SAHⁿ a la BAHⁿK | zhay pos-TAY luh ko-LEE | zhay feh dün PYEHR deu KOO', ['travail'], FCVDR),
  ph(1730, 'avoir plusieurs cordes à son arc', 'to have more than one string to your bow', '/a.vwaʁ ply.zjœʁ kɔʁd a sɔ̃.naʁk/', 'a-vwar plü-zyuhr KORD | a sohⁿ-NARK', ['travail'], 'Savoir faire plusieurs choses, avoir plusieurs solutions.'),
  sent(1731, 'Elle parle trois langues et sait coder : elle a plusieurs cordes à son arc.', 'She speaks three languages and can code: she has more than one string to her bow.', '/ɛl paʁl tʁwa lɑ̃g e sɛ kɔ.de ɛ.la ply.zjœʁ kɔʁd a sɔ̃.naʁk/', 'ehl parl trwa LAHⁿG | ay seh ko-DAY | eh-la plü-zyuhr KORD a sohⁿ-NARK', ['travail'], FCVDR),
  ph(1732, 'ne pas y aller par quatre chemins', 'to get straight to the point', '/nə pa.zi a.le paʁ ka.tʁə ʃə.mɛ̃/', 'nuh pa-zee a-LAY | par ka-truh shuh-MEHⁿ', ['travail'], 'Dire les choses directement, sans détour ; au passé : elle n’y est pas allée par quatre chemins.'),
  sent(1733, 'Je ne vais pas y aller par quatre chemins : le projet a deux mois de retard.', 'I will get straight to the point: the project is two months behind.', '/ʒə nə vɛ pa.zi a.le paʁ ka.tʁə ʃə.mɛ̃ lə pʁɔ.ʒɛ a dø mwa d(ə) ʁə.taʁ/', 'zhuh nuh veh pa-zee a-LAY par ka-truh shuh-MEHⁿ | luh pro-ZHEH a deu MWA duh ruh-TAR', ['travail'], FCVDR),
  ph(1734, 'prendre son mal en patience', 'to grin and bear it', '/pʁɑ̃dʁ sɔ̃ mal ɑ̃ pa.sjɑ̃s/', 'prahⁿdr sohⁿ MAL | ahⁿ pa-SYAHⁿSS', ['travail'], 'Supporter une situation désagréable en attendant qu’elle passe.'),
  sent(1735, 'Le train a une heure de retard : je prends mon mal en patience.', 'The train is an hour late: I am grinning and bearing it.', '/lə tʁɛ̃ a yn œʁ də ʁə.taʁ ʒə pʁɑ̃ mɔ̃ mal ɑ̃ pa.sjɑ̃s/', 'luh TREHⁿ a ün UHR duh ruh-TAR | zhuh prahⁿ mohⁿ MAL ahⁿ pa-SYAHⁿSS', ['travail'], FCVDR),
  ph(1736, 'se noyer dans un verre d’eau', 'to be thrown by the smallest problem', '/sə nwa.je dɑ̃.zœ̃ vɛʁ do/', 'suh nwa-YAY | dahⁿ-zuhⁿ vehr DOH', ['travail'], 'Être dépassé par une difficulté toute petite.'),
  sent(1737, 'Ne te noie pas dans un verre d’eau : il manque juste une signature.', 'Do not get thrown by a trifle: only one signature is missing.', '/nə tə nwa pa dɑ̃.zœ̃ vɛʁ do il mɑ̃k ʒyst yn si.ɲa.tyʁ/', 'nuh tuh NWA pa dahⁿ-zuhⁿ vehr DOH | eel mahⁿk zhüst ün see-nya-TÜR', ['travail'], FCVDR),
  sent(1738, 'Arrête de tourner autour du pot et dis-moi ce qui ne va pas.', 'Stop beating around the bush and tell me what is wrong.', '/a.ʁɛt də tuʁ.ne o.tuʁ dy po e di.mwa sə ki nə va pa/', 'a-REHT duh toor-NAY oh-toor dü POH | ay dee-MWA suh kee nuh va PA', ['travail'], FCVDR),
  sent(1739, 'Quand la directrice a annoncé la fusion, toute l’équipe est tombée des nues.', 'When the director announced the merger, the whole team was flabbergasted.', '/kɑ̃ la di.ʁɛk.tʁis a a.nɔ̃.se la fy.zjɔ̃ tut le.kip ɛ tɔ̃.be de ny/', 'kahⁿ la dee-rehk-TREESS | a a-nohⁿ-SAY la fü-ZYOHⁿ | toot lay-KEEP | eh tohⁿ-bay day NÜ', ['travail'], FCVDR),
  sent(1740, 'Dans une expression figée, le possessif suit le sujet : je prends mon mal en patience, elle prend son mal en patience.', 'In a fixed expression, the possessive follows the subject: je prends mon mal en patience, elle prend son mal en patience.', '/dɑ̃.zyn ɛk.spʁɛ.sjɔ̃ fi.ʒe lə pɔ.se.sif sɥi lə sy.ʒɛ ʒə pʁɑ̃ mɔ̃ mal ɑ̃ pa.sjɑ̃s ɛl pʁɑ̃ sɔ̃ mal ɑ̃ pa.sjɑ̃s/', 'dahⁿ-zün ehk-spreh-SYOHⁿ fee-ZHAY | luh po-say-SEEF swee luh sü-ZHEH | zhuh prahⁿ mohⁿ MAL ahⁿ pa-SYAHⁿSS | ehl prahⁿ sohⁿ MAL ahⁿ pa-SYAHⁿSS', ['rule', 'figee'], ['flashcard'],
    rule('Avoir plusieurs cordes à son arc, avec nous ?', 'Nous avons plusieurs cordes à notre arc : le possessif suit le sujet, le reste ne bouge pas.')),
  sent(1741, 'Tomber des nues, c’est être très surpris, comme si l’on tombait du ciel.', 'Tomber des nues means being astounded, as if you had fallen from the sky.', '/tɔ̃.be de ny sɛ.tɛtʁ tʁɛ syʁ.pʁi kɔm si lɔ̃ tɔ̃.bɛ dy sjɛl/', 'tohⁿ-bay day NÜ | seh-tehtr treh sür-PREE | komm see lohⁿ tohⁿ-BEH dü SYEHL', ['travail', 'sens']),
  sent(1742, 'Avec trois projets en même temps, elle a du pain sur la planche.', 'With three projects at once, she has a lot on her plate.', '/a.vɛk tʁwa pʁɔ.ʒɛ ɑ̃ mɛm tɑ̃ ɛ.la dy pɛ̃ syʁ la plɑ̃ʃ/', 'a-vehk trwa pro-ZHEH | ahⁿ mem TAHⁿ | eh-la dü pehⁿ sür la PLAHⁿSH', ['travail']),
];

/* ── ACT 11 · NÉGOCIER, APAISER, TRANCHER ──────────────────────────────── */

export const ACT11_ROWS: Row[] = [
  sent(1743, 'Je ne vais pas tourner autour du pot : refaire la façade coûte cher.', 'I will not beat around the bush: redoing the facade is expensive.', '/ʒə nə vɛ pa tuʁ.ne o.tuʁ dy po ʁə.fɛʁ la fa.sad kut ʃɛʁ/', 'zhuh nuh veh pa toor-NAY oh-toor dü POH | ruh-fehr la fa-SAD | koot SHEHR', ['ecoute', 'negocier']),
  sent(1744, 'Si on vote contre, on jette de l’huile sur le feu avec le syndic.', 'If we vote against, we add fuel to the fire with the managing agent.', '/si ɔ̃ vɔt kɔ̃tʁ ɔ̃ ʒɛt də lɥil syʁ lə fø a.vɛk lə sɛ̃.dik/', 'see ohⁿ vot KOHⁿTR | ohⁿ zheht duh LWEEL sür luh FUH | a-vehk luh sehⁿ-DEEK', ['ecoute', 'negocier']),
  sent(1745, 'Nous sommes tous dans le même bateau : l’immeuble est à nous tous.', 'We are all in the same boat: the building belongs to all of us.', '/nu sɔm tus dɑ̃ lə mɛm ba.to li.mœbl ɛ.ta nu tus/', 'noo somm TOOSS | dahⁿ luh mem ba-TOH | lee-MUHBL eh-ta noo TOOSS', ['ecoute', 'negocier'], FCVDR),
  sent(1746, 'Moi, je veux bien mettre de l’eau dans mon vin, mais pas payer le double.', 'I am willing to soften my position, but not to pay double.', '/mwa ʒə vø bjɛ̃ mɛtʁ də lo dɑ̃ mɔ̃ vɛ̃ mɛ pa pe.je lə dubl/', 'MWA | zhuh vuh byehⁿ mehtr duh LOH dahⁿ mohⁿ VEHⁿ | meh pa pay-YAY luh DOOBL', ['ecoute', 'negocier'], FCVDR),
  sent(1747, 'Alors coupons la poire en deux : la façade cette année, le toit l’an prochain.', 'Then let us split the difference: the facade this year, the roof next year.', '/a.lɔʁ ku.pɔ̃ la pwaʁ ɑ̃ dø la fa.sad sɛ.ta.ne lə twa lɑ̃ pʁɔ.ʃɛ̃/', 'a-LOR koo-POHⁿ la PWAR ahⁿ DEU | la fa-SAD seh-ta-NAY | luh TWA lahⁿ pro-SHEHⁿ', ['ecoute', 'negocier']),
  sent(1748, 'Voter sans devis, ce serait un coup d’épée dans l’eau.', 'Voting without quotes would be a wasted effort.', '/vɔ.te sɑ̃ də.vi sə sə.ʁɛ œ̃ ku de.pe dɑ̃ lo/', 'vo-TAY sahⁿ duh-VEE | suh suh-REH | uhⁿ koo day-PAY dahⁿ LOH', ['ecoute', 'negocier'], FCVDR),
  sent(1749, 'Et M. Roux, comme toujours, tire son épingle du jeu : son appartement donne sur la cour.', 'And Mr Roux, as always, comes out of it well: his flat looks onto the courtyard.', '/e mə.sjø ʁu kɔm tu.ʒuʁ tiʁ sɔ̃.ne.pɛ̃gl dy ʒø sɔ̃.na.paʁ.tə.mɑ̃ dɔn syʁ la kuʁ/', 'ay muh-syuh ROO | komm too-ZHOOR | teer sohⁿ-nay-PEHⁿGL dü ZHUH | sohⁿ-na-par-tuh-MAHⁿ | donn sür la KOOR', ['ecoute', 'negocier']),
  sent(1750, 'Allons, ce n’est pas la mer à boire : trois devis, et on revote en juin.', 'Come on, it is not that hard: three quotes, and we vote again in June.', '/a.lɔ̃ sə nɛ pa la mɛʁ a bwaʁ tʁwa də.vi e ɔ̃ ʁə.vɔt ɑ̃ ʒɥɛ̃/', 'a-LOHⁿ | suh neh pa la MEHR a BWAR | trwa duh-VEE | ay ohⁿ ruh-VOT ahⁿ ZHWEHⁿ', ['ecoute', 'negocier']),
  ph(1751, 'jeter de l’huile sur le feu', 'to add fuel to the fire', '/ʒə.te d(ə) lɥil syʁ lə fø/', 'zhuh-TAY duh LWEEL | sür luh FUH', ['negocier'], 'Aggraver une dispute ou une tension.'),
  ph(1752, 'un coup d’épée dans l’eau', 'a wasted effort', '/œ̃ ku de.pe dɑ̃ lo/', 'uhⁿ koo day-PAY | dahⁿ LOH', ['negocier'], 'Une action qui ne sert à rien.'),
  ph(1753, 'être dans le même bateau', 'to be in the same boat', '/ɛtʁ dɑ̃ lə mɛm ba.to/', 'ehtr dahⁿ luh mem ba-TOH', ['negocier'], 'Partager la même situation, souvent difficile.'),
  ph(1754, 'une tempête dans un verre d’eau', 'a storm in a teacup', '/yn tɑ̃.pɛt dɑ̃.zœ̃ vɛʁ do/', 'ün tahⁿ-PEHT | dahⁿ-zuhⁿ vehr DOH', ['negocier'], 'Une grosse agitation pour une chose sans importance.'),
  sent(1755, 'Il a fini par mettre de l’eau dans son vin, et nous avons signé.', 'He ended up softening his position, and we signed.', '/i.la fi.ni paʁ mɛtʁ də lo dɑ̃ sɔ̃ vɛ̃ e nu.za.vɔ̃ si.ɲe/', 'ee-la fee-NEE par mehtr duh LOH dahⁿ sohⁿ VEHⁿ | ay noo-za-vohⁿ see-NYAY', ['negocier'], FCVDR),
  sent(1756, 'Toute l’équipe a perdu sa prime, mais elle a tiré son épingle du jeu.', 'The whole team lost its bonus, but she came out of it well.', '/tut le.kip a pɛʁ.dy sa pʁim mɛ ɛ.la ti.ʁe sɔ̃.ne.pɛ̃gl dy ʒø/', 'toot lay-KEEP a pehr-DÜ sa PREEMM | meh eh-la tee-RAY | sohⁿ-nay-PEHⁿGL dü ZHUH', ['negocier'], FCVDR),
  sent(1757, 'La dispute sur le local à vélos ? Une tempête dans un verre d’eau.', 'The row about the bike room? A storm in a teacup.', '/la dis.pyt syʁ lə lɔ.kal a ve.lo yn tɑ̃.pɛt dɑ̃.zœ̃ vɛʁ do/', 'la dees-PÜT sür luh lo-KAL a vay-LOH | ün tahⁿ-PEHT dahⁿ-zuhⁿ vehr DOH', ['negocier'], FCVDR),
  sent(1758, 'Pour négocier, une expression figée adoucit : elle dit le conflit avec une image.', 'In a negotiation, a fixed expression softens things: it names the conflict with an image.', '/puʁ ne.gɔ.sje yn ɛk.spʁɛ.sjɔ̃ fi.ʒe a.du.si ɛl di lə kɔ̃.fli a.vɛk y.ni.maʒ/', 'poor nay-go-SYAY | ün ehk-spreh-SYOHⁿ fee-ZHAY a-doo-SEE | ehl dee luh kohⁿ-FLEE | a-vehk ü-nee-MAZH', ['rule', 'negocier'], ['flashcard'],
    rule('Pourquoi dire « mettons de l’eau dans notre vin » plutôt que « cédez » ?', 'L’image adoucit : elle propose un compromis sans accuser personne.')),
];

/* ── ACT 12 · À TOI D'ÉCRIRE, ET LE B2 EST BOUCLÉ ──────────────────────── */

export const ACT12_ROWS: Row[] = [
  sent(1759, 'Les absents ont toujours tort, dit le proverbe. Est-ce encore vrai aujourd’hui ?', 'The absent are always in the wrong, says the proverb. Is it still true today?', '/le.zap.sɑ̃ ɔ̃ tu.ʒuʁ tɔʁ di lə pʁɔ.vɛʁb ɛs ɑ̃.kɔʁ vʁɛ o.ʒuʁ.dɥi/', 'lay-zap-SAHⁿ ohⁿ too-zhoor TOR | dee luh pro-VEHRB | ehs ahⁿ-kor VREH oh-zhoor-DWEE', ['ecrit'], FCVDR),
  sent(1760, 'Certes, le proverbe contient une part de vérité.', 'Admittedly, the proverb contains some truth.', '/sɛʁt lə pʁɔ.vɛʁb kɔ̃.tjɛ̃ yn paʁ də ve.ʁi.te/', 'SEHRT | luh pro-VEHRB kohⁿ-TYEHⁿ | ün par duh vay-ree-TAY', ['ecrit']),
  sent(1761, 'Pourtant, il oublie une chose essentielle.', 'Yet it forgets one essential thing.', '/puʁ.tɑ̃ il u.bli yn ʃo.zɛ.sɑ̃.sjɛl/', 'poor-TAHⁿ | eel oo-BLEE | ün sho-zeh-sahⁿ-SYEHL', ['ecrit']),
  sent(1762, 'Pour ma part, je ne crois pas qu’un proverbe suffise à trancher.', 'For my part, I do not think a proverb is enough to settle it.', '/puʁ ma paʁ ʒə nə kʁwa pa kœ̃ pʁɔ.vɛʁb sy.fiz a tʁɑ̃.ʃe/', 'poor ma PAR | zhuh nuh krwa PA | kuhⁿ pro-VEHRB sü-FEEZ | a trahⁿ-SHAY', ['ecrit'], FCVDR),
  sent(1763, 'Bref, le proverbe ouvre la discussion ; il ne la ferme pas.', 'In short, the proverb opens the discussion; it does not close it.', '/bʁɛf lə pʁɔ.vɛʁb uvʁ la dis.ky.sjɔ̃ il nə la fɛʁm pa/', 'BREHF | luh pro-VEHRB oovr la dees-kü-SYOHⁿ | eel nuh la fehrm PA', ['ecrit'], FCVDR),
  sent(1764, 'Petit à petit, l’oiseau a fait son nid : le B2 est bouclé.', 'Little by little, the bird has built its nest: B2 is done.', '/pə.ti.ta pə.ti lwa.zo a fɛ sɔ̃ ni lə be.dø ɛ bu.kle/', 'puh-tee-ta puh-TEE | lwa-ZOH a feh sohⁿ NEE | luh bay-DEU eh boo-KLAY', ['fete', 'ironie']),
  sent(1765, 'Tu sais maintenant citer un proverbe, le discuter et le traduire.', 'You can now quote a proverb, discuss it and translate it.', '/ty sɛ mɛ̃t.nɑ̃ si.te œ̃ pʁɔ.vɛʁb lə dis.ky.te e lə tʁa.dɥiʁ/', 'tü seh mehⁿt-NAHⁿ | see-TAY uhⁿ pro-VEHRB | luh dees-kü-TAY | ay luh tra-DWEER', ['fete']),
];

export const ROWS_BY_ACT: Row[][] = [
  ACT1_ROWS, ACT2_ROWS, ACT3_ROWS, ACT4_ROWS, ACT5_ROWS, ACT6_ROWS,
  ACT7_ROWS, ACT8_ROWS, ACT9_ROWS, ACT10_ROWS, ACT11_ROWS, ACT12_ROWS,
];
export const ALL_ROWS: Row[] = ROWS_BY_ACT.flat();
export const dicteeFor = (act: number): string[] =>
  (ROWS_BY_ACT[act - 1] ?? []).filter((r) => (r.drills as string[]).includes('dictation')).map((r) => r.id);

/* ══════════════════════════════════════════════════════════════════════════
 *  §H. THE LONG TEXTS (readings 200 to 350 words; act texts 60 to 120)
 *  Every person, magazine, radio and company is invented.
 * ══════════════════════════════════════════════════════════════════════════ */

/** Act 1: the opinion column that opens with a proverb (the task's genre). */
export const CHRONIQUE_TEXT =
  'Qui ne tente rien… Ma grand-mère le répétait chaque fois que j’hésitais, et je dois reconnaître qu’elle avait souvent raison. À vingt ans, c’est ce proverbe qui m’a poussée à partir étudier à Québec, sans connaître personne. Je ne l’ai jamais regretté. ' +
  'Pourtant, avec les années, je me méfie un peu de ces phrases toutes faites. Un proverbe a l’air d’une vérité éternelle : il parle au présent, sans article, sans nuance, comme si la question était réglée d’avance. « Qui ne tente rien n’a rien », d’accord ; mais qui tente tout, sans réfléchir, risque aussi de tout perdre. D’ailleurs, la sagesse populaire se contredit volontiers : on nous dit que la fortune sourit aux audacieux, puis que prudence est mère de sûreté. ' +
  'Chaque proverbe a son contraire, et c’est peut-être ce qui les rend si utiles. On ne les cite pas pour prouver quelque chose ; on les cite pour ouvrir une discussion, pour faire sourire, pour rappeler une expérience que d’autres ont faite avant nous. ' +
  'Alors oui, je continuerai à les employer, à table comme au travail, et souvent à moitié : « Comme on dit, qui ne tente rien… » Tout le monde connaît la suite. Mais je garderai une règle : le proverbe donne un conseil, il ne prend pas la décision à ma place. Nadia Béland';

/** Act 3, the text beat: Awa's post on her bakery's page. */
export const TEXTE_A3 =
  'Un an déjà ! Au début, nous vendions à peine trente baguettes par jour, et certains soirs, j’avais envie de tout arrêter. Mon oncle Moussa me répétait : « Petit à petit, l’oiseau fait son nid. » J’ai fini par l’écouter. Au lieu d’ouvrir sept jours sur sept, nous avons testé un dimanche par mois ; qui va lentement va sûrement, paraît-il. Aujourd’hui, nous en vendons quatre-vingts, et les clients du dimanche reviennent en semaine. Nous ne fêtons pas encore la grosse commande de Noël : rien n’est signé, et il ne faut pas vendre la peau de l’ours. Merci à vous, fidèles clients de Limoilou.';

/** Act 4, the text beat: a money column. Not financial advice, and says so. */
export const TEXTE_A4 =
  'Avant d’investir, trois réflexes. D’abord, faites relire tout contrat par quelqu’un de neutre, même si l’affaire vous est proposée par un ami : mieux vaut prévenir que guérir. Ensuite, ne misez jamais toutes vos économies sur un seul projet ; il ne faut pas mettre tous ses œufs dans le même panier. Enfin, méfiez-vous de la phrase « ça ne peut pas rater ». Beaucoup l’ont prononcée juste avant de perdre gros, et il ne faut jamais dire : Fontaine, je ne boirai pas de ton eau. Si vous avez déjà été échaudé, tant mieux : vous relirez tout deux fois. Ces réflexes ne remplacent pas l’avis d’un professionnel.';

/** Act 5: the advice column. */
export const COURRIER_TEXT =
  'Chère Solange, je viens de commencer dans une agence de publicité à Bruxelles. Je m’habille simplement, souvent en jean, et j’ai l’impression que mes collègues me prennent pour la stagiaire. En plus, comme je travaille à distance deux jours par semaine, on décide souvent sans moi. Mon compagnon me dit de ne pas m’en faire ; ma mère me répète que l’habit ne fait pas le moine et que je dois rester moi-même. Qui a raison ? Clara, 27 ans. ' +
  'Chère Clara, votre mère a raison, et votre compagnon aussi, à moitié. L’habit ne fait pas le moine : vos idées finiront par parler plus fort que votre jean. Mais soyons lucides : au début, les gens se fient aux apparences, et le proverbe dit justement qu’ils ont tort de le faire, pas qu’ils ne le font pas. Rien ne vous oblige à changer de style ; soignez plutôt les moments où l’on vous voit : une présentation claire, une remarque juste en réunion. ' +
  'Quant aux décisions prises sans vous, un autre proverbe devrait vous alerter : les absents ont toujours tort. Les jours où vous travaillez à distance, demandez à suivre les réunions en visio, et envoyez vos idées par écrit avant. Enfin, entourez-vous des collègues qui partagent votre façon de travailler : qui se ressemble s’assemble, et un petit groupe d’alliés vaut mieux qu’une garde-robe neuve. Solange';

/** Act 5, the text beat: a short blog post. */
export const TEXTE_A5 =
  'Mon père est comptable, méticuleux, silencieux. Moi, je suis musicien, bavard et désordonné. Pendant des années, les amis de la famille ont répété « tel père, tel fils » en riant, comme pour me rappeler d’où je venais, et je levais les yeux au ciel. Pourtant, en vieillissant, je découvre que le proverbe n’avait pas tout à fait tort : comme lui, je relis trois fois mes contrats, et comme lui, je ne supporte pas d’arriver en retard. L’habit ne fait pas le moine, dit un autre proverbe ; le métier non plus. Ce qui nous rapproche ne se voit pas : c’est une façon de tenir parole.';

/** Act 6, the text beat: Nathalie's note to her neighbour. */
export const TEXTE_A6 =
  'Monsieur Girard, je vous écris après notre petit conflit de la semaine dernière. Je reconnais que mon mot sur votre porte était sec, et je le regrette : qui sème le vent récolte la tempête, et j’ai récolté ce que j’avais semé. On raconte aussi dans l’immeuble que je fais la fête chaque nuit ; ce n’est pas le cas, même s’il n’y a pas de fumée sans feu : il y a eu une soirée, un samedi, et je m’en excuse. Je vous propose un café dimanche, chez moi ou chez vous. Après la pluie, le beau temps, j’espère. Nathalie, quatrième étage';

/** Act 7: the magazine page on La Fontaine. Quotations exact (§A.7 v to z). */
export const LAFONTAINE_TEXT =
  'Pourquoi citons-nous encore La Fontaine ? Il y a plus de trois siècles que Jean de La Fontaine a publié ses Fables, et pourtant nous le citons tous les jours, souvent sans le savoir. Quand un collègue arrive en retard à une réunion qu’il avait tout le temps de préparer, quelqu’un murmure : « Rien ne sert de courir ; il faut partir à point. » Quand un puissant impose sa volonté sans se justifier, on soupire : « La raison du plus fort est toujours la meilleure. » ' +
  'La phrase semble approuver l’injustice. En réalité, La Fontaine la place au début d’une fable où un loup dévore un agneau innocent. Il ne dit pas que c’est juste : il décrit le monde tel qu’il fonctionne, et laisse au lecteur le soin de s’indigner. C’est tout l’art du fabuliste. ' +
  'Beaucoup de ses histoires viennent d’Ésope, le conteur grec, mais La Fontaine leur donne des vers si nets qu’ils se retiennent comme des proverbes. Des générations d’écoliers ont appris « Le Corbeau et le Renard » par cœur, et tout le monde sait qu’on a souvent besoin d’un plus petit que soi, même si peu de gens se rappellent le lion pris dans un filet et le rat qui le délivre. ' +
  'Une différence, pourtant : un proverbe n’a pas d’auteur, chacun l’arrange à sa façon ; une morale de La Fontaine est une citation. Si vous la citez, citez-la exactement. Ou alors, dites clairement que vous la détournez.';

/** Act 7, the text beat: a teacher's note. */
export const TEXTE_A7 =
  'Cette semaine, en classe de français, nous avons lu « Le Lièvre et la Tortue ». Les élèves ont d’abord trouvé le lièvre sympathique : il est rapide, drôle, sûr de lui. Puis la tortue a gagné, et la morale a fait réagir : « Rien ne sert de courir ; il faut partir à point. » Une élève a protesté : dans la vraie vie, dit-elle, les plus rapides gagnent souvent. Un autre lui a répondu que le lièvre n’avait pas perdu faute de vitesse, mais par excès de confiance. Nous n’avons pas tranché. C’est peut-être la meilleure façon de lire La Fontaine.';

/** Act 8, the text beat: a residents' newsletter that opens on a proverb. */
export const TEXTE_A8 =
  'Le mot de la présidente. « Mieux vaut tard que jamais », dit le proverbe. Après trois ans de discussions, la mairie a enfin installé des bancs dans le parc. Faut-il s’en réjouir ? Certes, nous n’allons pas bouder notre plaisir. Mais le proverbe a beau dire, trois ans, c’est long pour cinq bancs, et les aînés du quartier auraient aimé s’asseoir plus tôt. Si l’on en croit un autre proverbe, qui ne tente rien n’a rien : l’association a tenté, et elle a obtenu. Nous continuerons donc à tenter, poliment mais fermement. Rendez-vous à la prochaine réunion.';

/** Act 9, the text beat: the subtitler's note. */
export const TEXTE_A9 =
  'Note de la traductrice. Dans cet épisode, le père accumule les proverbes anglais. Je ne les ai pas traduits mot à mot. Quand un proverbe français disait la même chose, je l’ai choisi, même si l’image changeait : ses poussins sont devenus la peau de l’ours, et sa morsure, un chat échaudé. Quand l’image était la même, je l’ai gardée : tel père, tel fils. Pour « when in Rome », aucune formule française ne s’impose ; j’ai donc écrit simplement : « Ici, fais comme les gens d’ici. » Le spectateur ne doit jamais sentir la traduction ; il doit entendre un père qui parle.';

/** Act 10: the team lead's email (Geneva). */
export const COURRIEL_TEXT =
  'Objet : le point sur le projet Lumen. Bonjour à toutes et à tous, je ne vais pas y aller par quatre chemins : le projet a deux mois de retard, et le client l’a appris hier. Je sais que certains d’entre vous sont tombés des nues en lisant son message ; moi aussi. Inutile pourtant de nous noyer dans un verre d’eau : la situation est sérieuse, pas désespérée. Le client ne nous quitte pas ; il veut simplement un calendrier réaliste, et il a raison. ' +
  'Nous avons du pain sur la planche, c’est vrai. Voici ce que je propose. D’abord, Léa reprend les tests : elle a plusieurs cordes à son arc, et elle connaît le code mieux que personne. Ensuite, la réunion de jeudi servira à la fois à faire le point et à préparer la démonstration pour le client ; nous ferons ainsi d’une pierre deux coups. Je vous demande aussi de ne pas tourner autour du pot dans vos comptes rendus : si une tâche bloque, dites-le tout de suite. Je préfère une mauvaise nouvelle aujourd’hui à une catastrophe en décembre. ' +
  'Enfin, pour les congés prévus en novembre, je vous demande de prendre votre mal en patience : je ne peux rien promettre avant la fin du mois. Merci de votre confiance, et à jeudi. Sophie';

/** Act 10, the text beat: Léa's reply. */
export const TEXTE_A10 =
  'Sophie, merci pour ton message : au moins, tu n’as pas tourné autour du pot. Je reprends les tests dès demain, et je te préviens tout de suite : je ne ferai pas de miracle en une semaine. Pour jeudi, bonne idée de faire d’une pierre deux coups, mais attention à ne pas vouloir tout montrer au client ; il vaut mieux une démonstration courte qui marche. Quant aux congés, je prendrai mon mal en patience, comme tout le monde. Nous sommes tous tombés des nues, mais personne n’a baissé les bras. Léa';

/** Act 11, the text beat: the minutes of the residents' meeting (Lyon). */
export const TEXTE_A11 =
  'Compte rendu de l’assemblée du 12 mai. Le ravalement de la façade a été longuement discuté. Plusieurs copropriétaires jugent le devis trop élevé ; d’autres rappellent que nous sommes tous dans le même bateau. Pour éviter de jeter de l’huile sur le feu avec le syndic, l’assemblée a préféré ne pas voter contre. Chacun a mis de l’eau dans son vin : la façade sera refaite cette année, le toit l’an prochain. M. Roux, dont l’appartement donne sur la cour, s’est abstenu. Trois nouveaux devis seront demandés avant un second vote en juin, un vote sans devis étant jugé inutile.';

/** Act 12: the model column (a DIFFERENT proverb from the task's model; this
 *  proverb is excluded from the task's choice). */
export const MODELE_TEXT =
  'Les absents ont toujours tort, dit le proverbe. Est-ce encore vrai aujourd’hui ? Tant de salariés travaillent désormais une partie de la semaine à distance que la question mérite d’être posée. ' +
  'Certes, le proverbe contient une part de vérité. Celui qui n’est pas dans la pièce ne peut ni défendre son idée ni corriger un malentendu, et bien des décisions se prennent entre deux portes, à la machine à café. Plus d’un télétravailleur est tombé des nues en découvrant qu’un projet avait changé de main sans qu’on le consulte. ' +
  'Pourtant, il oublie une chose essentielle : on peut être absent sans être muet. Une note envoyée avant la réunion, une question posée par écrit, un appel au bon moment valent souvent mieux qu’une présence silencieuse. Ceux qui ont plusieurs cordes à leur arc savent se faire entendre de loin. ' +
  'Pour ma part, je ne crois pas qu’un proverbe suffise à trancher. Celui-ci décrit un risque réel ; il ne dit pas qu’on ne peut pas l’éviter. Aux entreprises de ne pas réserver les décisions à ceux qui sont sur place ; aux salariés à distance de ne pas se noyer dans un verre d’eau à chaque réunion manquée. ' +
  'Bref, le proverbe ouvre la discussion ; il ne la ferme pas. Les absents n’ont pas toujours tort : ils ont surtout intérêt à ne pas se taire.';

/** The task's model answer (situation B, the reply to Malik), annotated after
 *  the signature (outside the word count). */
export const TASK_MODEL =
  'Objet : Re : Moncton ou pas Moncton ?\n\n' +
  'Cher Malik,\n\n' +
  '« Qui ne tente rien n’a rien », vous dit votre ami ; « Pierre qui roule n’amasse pas mousse », répond votre mère. Vous voilà coincé entre deux proverbes, et c’est plutôt bon signe : chacun contient une part de vérité, mais aucun ne décidera à votre place.\n\n' +
  'Votre ami a raison sur un point. Un poste comme celui-ci ne se présente pas tous les ans, et si vous le refusez par peur, vous risquez de vous en mordre les doigts. Pourtant, votre mère n’a pas tort non plus : changer de ville trop souvent, c’est perdre ses amis, ses repères et parfois ses économies. Mais vous ne parlez pas de courir le monde ; vous parlez d’un poste, dans une ville précise, pour quelques années.\n\n' +
  'À votre place, je n’y irais pas par quatre chemins avec votre employeur : demandez une période d’essai de six mois et la possibilité de revenir si l’expérience ne vous convient pas. Vous ferez ainsi d’une pierre deux coups : vous tenterez votre chance sans tout risquer. Et si la distance vous pèse, prenez votre mal en patience les premiers mois ; Moncton ne s’est pas faite en un jour, votre nouvelle vie non plus.\n\n' +
  'En somme, les proverbes ouvrent la réflexion ; c’est à vous de la conclure. Bonne route, peut-être.\n\n' +
  'Solange\n\n' +
  'Les repères de la correctrice (hors décompte) :\n' +
  '1. Tâche : deux proverbes en ouverture, ce qu’ils ont de vrai, leurs limites, un conseil précis, une conclusion.\n' +
  '2. Cohérence : quatre paragraphes (le dilemme, le pour et le contre, le conseil, la conclusion) ; pourtant, mais, ainsi, en somme.\n' +
  '3. Étendue : quatre expressions figées placées naturellement (s’en mordre les doigts, ne pas y aller par quatre chemins, faire d’une pierre deux coups, prendre son mal en patience) et un proverbe détourné pour conclure.\n' +
  '4. Correction : le possessif qui suit le sujet (votre mal), le conditionnel du conseil (à votre place, je n’y irais pas…).\n' +
  '5. Registre : le vouvoiement du courrier des lecteurs, un ton chaleureux mais soigné, aucun proverbe employé comme preuve.';
