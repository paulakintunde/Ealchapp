// c1.19.l1 « Les figures et leur effet » — the authored corpus, the imports,
// the anchor texts, the quotations and the citation constants. DRAFT, to
// B1-WORKSHOP-AND-VOCAB-SHAPES.md §1 (the workshop shape: a TEXT and a MOVE
// per act) on top of B1-BUILD-PLAYBOOK.md, with the C1 rules of
// C1-BUILD-LOG.md (common block, wave 2 notes, wave 5 review lessons).
// Structural models: b2.30 (`../b2/lire-litterature-*`) and the reviewed C1
// workshop c1.08 (`./persuader-*`), which owns persuasion: cited, never
// re-taught.
//
// DRAFT. Nothing here is imported into Postgres or merged into seed.json.
//
// STABLE EXPORTS (later lessons may import REFRAME from this file and quote
// it; do not rename): REFRAME, REFRAME_EN, UNIT, LESSON_ID, THEME, LEVEL, E,
// ALL_ROWS, ROWS_BY_ACT, IMPORTED, IMPORT_IDS, Cap, refFr.
//
// ══════════════════════════════════════════════════════════════════════════
//  WHAT THIS UNIT OWNS
// ══════════════════════════════════════════════════════════════════════════
//
//   THE LITERARY EFFECT OF A FIGURE, WRITTEN IN ONE SENTENCE. The skill is
//   not the name: it is « repère, nomme, puis dis l’effet », with the words
//   of the text as proof, and other defensible readings accepted.
//
//     act 1   the problem: a commentary that only names figures; recap of
//             b2.30 act 7, b2.24, c1.06 and c1.08 by trail position
//     act 2   la litote as a FIGURE (Corneille, Le Cid III, 4)
//     act 3   l’antiphrase (Voltaire, Candide ch. 3), and the literary
//             prétérition in one card (c1.08 owns it in argument)
//     act 4   la gradation in literature, read by its point of arrival
//             (Corneille, Le Cid I, 5)
//     act 5   le chiasme, with antithèse and oxymore recalled (Molière,
//             L’Avare III; Corneille, Le Cid IV, 3)
//     act 6   le zeugme, and who defines it how (Hugo, « Booz endormi »)
//     act 7   l’hypallage, and Fontanier’s doubts (Hugo, « À Canaris »)
//     act 8   la métonymie et la synecdoque (original texts)
//     act 9   l’allitération et l’assonance, SHOWN IN TEXT (Racine,
//             Andromaque V, 5; Verlaine, « Chanson d’automne »)
//     act 10  le rythme: ternaire, cadence, the length of a sentence
//             (Pascal, Pensées)
//     act 11  les effets de rupture: anacoluthe, asyndète, rejet, phrase
//             nominale (Pascal, Pensées)
//     act 12  the task: a 250 to 400 word commentary on Rimbaud, « Le
//             Dormeur du val »
//
//   NOT OWNED, CITED BY TRAIL POSITION ONLY:
//     - b2.30 « Lire un texte littéraire » (« la leçon 30 du B2 »): act 7
//       owns comparaison, métaphore (filée), personnification with their
//       effect; acts 6, 8, 9, 11 tonalités, portrait, incipit and chute,
//       commentary formulas. Its rows .1504-.1507, .1511, .1512 reused.
//     - B2 term rows anaphore, oxymore, antithèse, hyperbole, euphémisme
//       (fr.b2.litterature.074-.078): reused as known, never re-taught.
//     - b2.24 « Lire de façon critique » (« la leçon 24 du B2 »): irony and
//       the word « antiphrase » (fr.b2.strategies-de-comprehension.1500);
//       act 3 goes past it (antiphrase as a figure of a word, irony as an
//       attitude).
//     - c1.06 « Nuancer à l’oral » (« la leçon 6 du C1 »): litote in speech
//       (row fr.c1.nuances-et-registres.1122). Act 2 takes it to the page.
//     - c1.08 « Persuader » (« la leçon 8 du C1 »): anaphore, gradation and
//       prétérition as PERSUASIVE figures, judged for fairness (rows .1128,
//       .1130, .1131, .1140, .1142). Acts 3 and 4 cite it and read the same
//       figures for their literary effect only.
//     - c1.17 « Synonymes et nuances »: litote as connotation (drafted in
//       wave 5, not in the seed: named in the header only, never on screen).
//     - c1.05 « L’ellipse et la reprise » owns verb ellipsis; act 6 names
//       the grammatical zeugma once and cites it.
//
// ══════════════════════════════════════════════════════════════════════════
//  §A. MEASURED (Postgres read 2026-10-06/07 inside BEGIN TRANSACTION READ
//      ONLY … COMMIT, no SET; the local seed is a cut)
// ══════════════════════════════════════════════════════════════════════════
//
//  1. THEME `rhetorique`: range c1-c2, sub_themes ['persuader', 'les figures
//     et leur effet'] (wave 6 setup, read back). 338 c1 rows: legacy
//     .001-.160 and c1.08’s .1000-.1177.
//
//  2. ID BLOCK: `fr.c1.rhetorique.1200` to `.1399` AND NOTHING ELSE (ledger).
//     Probed: 0 rows in 1200-1399 at any level. Used: .1200-.1338, one block
//     per act (§G).
//
//  3. REUSED ROWS (§F). In seedPlusPacks(): b2.30 rows .1482, .1498, .1504,
//     .1505, .1506, .1507, .1511, .1512; fr.b2.litterature.074; b2.24 rows
//     .1500, .1501, .1513; c1.06 rows .1110, .1122; c1.08 rows .1128,
//     .1130, .1131, .1140, .1142; c1.20 row .1963. PUBLISHED IN POSTGRES BUT
//     ABSENT FROM THE SEED CUT, carried in `PG_ROWS` with fr / en / drills
//     copied verbatim: fr.b2.litterature.075 « l'oxymore », .076
//     « l'antithèse », .078 « l'euphémisme » (all {flashcard, review}).
//     DECISION 13 TYPOGRAPHY EDIT NEEDED AT IMPORT (straight ' to ’): .075,
//     .076, .078. They are printed only through `src()`, never inside the
//     scenario.
//
//  4. TWIN CHECK: every authored `fr` folded (accents, case, punctuation,
//     apostrophes) and compared with ALL 64 066 Postgres rows (scratch
//     twins.mts, 2026-10-07): 0 twins; and with every b2 and c1 draft corpus
//     on disk (twins2.mts): 0 twins. « une antiphrase », « une gradation », « une
//     prétérition », « La litote dit moins pour faire entendre plus. » and
//     « Sans le contexte, l’ironie ne se voit pas. » are REUSED, not twinned.
//
//  5. RESPELLINGS SPELLED FOR THE NASAL CHECKER RATHER THAN THE EAR: a real
//     /n/ or /m/ after a vowel is doubled: Chimène shee-MENN, personne
//     pehr-SONN, donne DONN, homme OMM, aime EMM, automne oh-TONN,
//     monotone mo-no-TONN, plaine PLENN. No U+203F tie anywhere.
//
//  6. ANCHOR TEXTS (§I): each act’s reading is an ORIGINAL text written for
//     the lesson (the talk, notes and drafts of an invented reading circle,
//     « les Mardis du texte » of the invented bibliothèque des Tilleuls,
//     led by Mamadou Sarr, with Léa Tremblay, Inès Vautrin and Hugues
//     Dallaire, all invented), which QUOTES short public-domain extracts.
//     Every extract is listed in §A.7 with its edition and URL.
//
//  7. QUOTATIONS AND FACTS, FOR THE FACT CHECK. Every extract verified WORD
//     FOR WORD on French Wikisource on 2026-10-07 (pages fetched, text
//     compared character by character; scratch ws.sh):
//
//     Q_CHIMENE   Pierre Corneille (1606-1684), Le Cid, acte III, scène 4,
//                 Chimène, v. 963: « Va, je ne te hais point. » Preceded by
//                 Rodrigue, v. 961-962: « Ton malheureux amant aura bien
//                 moins de peine / À mourir par ta main qu’à vivre avec ta
//                 haine. » Édition Marty-Laveaux (Œuvres, Hachette, 1862),
//                 https://fr.wikisource.org/wiki/Le_Cid/%C3%89dition_Marty-Laveaux/Acte_III
//                 Larousse gives this very line as its example of litote.
//     Q_VENGE     Le Cid, acte I, scène 5, Don Diègue, v. 290: « Je vais les
//                 déplorer : va, cours, vole, et nous venge. » (1637-1656
//                 variant « Je m’en vais les pleurer », noted in the same
//                 edition), same edition, Acte_I.
//     Q_CLARTE    Le Cid, acte IV, scène 3, Rodrigue: « Cette obscure clarté
//                 qui tombe des étoiles », same edition, Acte_IV.
//     Q_CANDIDE   Voltaire (1694-1778), Candide, ou l’Optimisme (1759),
//                 chapitre III, first sentence and two phrases of the same
//                 paragraph: « Rien n’était si beau, si leste, si brillant,
//                 si bien ordonné que les deux armées. », « une harmonie telle
//                 qu’il n’y en eut jamais en enfer », « cette boucherie
//                 héroïque », and from the next paragraph « selon les lois du
//                 droit public ». Garnier, 1877, tome 21, p. 141,
//                 https://fr.wikisource.org/wiki/Candide,_ou_l%E2%80%99Optimisme/Garnier_1877/Chapitre_3
//                 (b2.30 used Candide’s FIRST sentence of chapter I; this
//                 is chapter III.)
//     Q_AVARE     Molière (1622-1673), L’Avare (1668), acte III, Valère to
//                 maître Jacques: « il faut manger pour vivre, et non pas
//                 vivre pour manger » ; Harpagon, botching it: « Il faut
//                 vivre pour manger, et non pas manger pour vi… Non, ce n’est
//                 pas cela. » Édition Louandre, 1910,
//                 https://fr.wikisource.org/wiki/L%E2%80%99Avare_(Moli%C3%A8re)/%C3%89dition_Louandre,_1910/Acte_III
//                 (scene number not stated on screen: editions differ.)
//     Q_BOOZ      Victor Hugo (1802-1885), « Booz endormi », La Légende des
//                 siècles, première série, Hetzel, 1859, t. 1, p. 35-40:
//                 « Vêtu de probité candide et de lin blanc ; »,
//                 https://fr.wikisource.org/wiki/Booz_endormi
//                 Larousse gives this line as its example of zeugme.
//     Q_CANARIS   Hugo, Les Chants du crépuscule, « À Canaris » (the poem
//                 dated 18 septembre 1835), Ollendorf, 1909, p. 229-232:
//                 « Ce marchand accoudé sur son comptoir avide, »,
//                 https://fr.wikisource.org/wiki/Les_Chants_du_cr%C3%A9puscule/%C3%80_Canaris_(2)
//                 Larousse gives this line as its example of hypallage.
//     Q_SERPENTS  Jean Racine (1639-1699), Andromaque (1667), acte V,
//                 scène 5, Oreste, v. 1638: « Pour qui sont ces serpents qui
//                 sifflent sur vos têtes ? » Édition Mesnard, 1865, t. 2,
//                 https://fr.wikisource.org/wiki/Andromaque/%C3%89dition_Mesnard,_1865/Acte_V
//     Q_VERLAINE  Paul Verlaine (1844-1896), « Chanson d’automne », Poèmes
//                 saturniens, Lemerre, 1866, p. 57-58, first stanza: « Les
//                 sanglots longs / Des violons / De l’automne / Blessent mon
//                 cœur / D’une langueur / Monotone. » (printed with line
//                 breaks, never « / »),
//                 https://fr.wikisource.org/wiki/Po%C3%A8mes_saturniens_(1866)/Chanson_d%E2%80%99automne
//     Q_SILENCE   Blaise Pascal (1623-1662), Pensées: « Le silence éternel
//                 de ces espaces infinis m’effraye. » Œuvres complètes,
//                 Hachette, 1871, vol. 1, Pensées, article 25, § 17 (that
//                 edition spells « m’effraye »; many modern editions
//                 « m’effraie »; the lesson quotes the edition),
//                 https://fr.wikisource.org/wiki/%C5%92uvres_compl%C3%A8tes_de_Blaise_Pascal_Hachette_1871,_vol1/Pens%C3%A9es/Article_25
//     Q_CLEOPATRE Pascal, Pensées: « Le nez de Cléopatre, s’il eût été plus
//                 court, toute la face de la terre auroit changé. » Same
//                 edition, article 6, § 46 (old spellings « Cléopatre »,
//                 « auroit » kept as printed),
//                 https://fr.wikisource.org/wiki/%C5%92uvres_compl%C3%A8tes_de_Blaise_Pascal_Hachette_1871,_vol1/Pens%C3%A9es/Article_06
//     Q_DORMEUR   Arthur Rimbaud (1854-1891), « Le Dormeur du val »
//                 (dated « Octobre 1870 »), whole sonnet, text of Œuvres,
//                 Mercure de France (page 53),
//                 https://fr.wikisource.org/wiki/%C5%92uvres_(Rimbaud)/Po%C3%A9sies/Le_Dormeur_du_Val
//                 Checked against the first edition in book form
//                 (Reliquaire, Genonceaux, 1891, p. 49-50), identical except
//                 v. 4 « petit aval » (a known misprint of that edition) and
//                 line-end spacing. The lesson prints « petit val ».
//
//     DEFINITIONS WHERE DICTIONARIES DIFFER (who says what, stated on the
//     sheet and in act 6 / act 7 cards with « selon »):
//       ZEUGME. Larousse: « Coordination de deux ou plusieurs éléments qui
//         ne sont pas sur le même plan syntaxique ou sémantique », example
//         Hugo « Vêtu de probité candide et de lin blanc ». TLFi (CNRTL,
//         « zeugma, zeugme »): A. GRAMM. sous-entendre dans un énoncé un
//         élément exprimé dans un énoncé voisin (Musset, « L’Océan était
//         vide et la plage déserte »); B. RHÉT. rattacher à un mot
//         polysémique deux compléments qui ne correspondent pas au même
//         emploi de ce mot; it notes that grammarians count the syntactic
//         kind as a fault. Fontanier (Les Figures du discours, 1821-1827)
//         ranks zeugme among the figures de construction par sous-entente,
//         beside ellipse: the grammatical sense. PRE-REVIEW 2026-10-07:
//         confirmed in a PRIMARY source, Fontanier's Commentaire raisonné
//         (1818, archive.org fre_b2063439, djvu text), whose classification
//         of the figures de construction lists « l'ellipse, la synthèse,
//         appelée aussi syllepse, le zeugme, et l'anacoluthe » in one group
//         (the group's label is illegible in the OCR; the « sous-entente »
//         label rests on the PUR study of Sévigné's zeugmes, OpenEdition).
//         Gallica was unreachable (timeout / 403), so the 1827 Figures
//         autres que tropes was not read. Le Robert: page refused automated access (403);
//         NOT checked, and the lesson cites no Robert wording.
//       HYPALLAGE. Larousse: « attribuer à certains mots d’une phrase ce qui
//         convient à d’autres mots de la même phrase », example Hugo « Ce
//         marchand accoudé sur son comptoir avide ». TLFi: same idea, « sans
//         qu’il soit possible de se méprendre sur le sens »; notes the word
//         is sometimes masculine (Gide). Académie (9e éd.): déplacer un
//         terme, « le plus souvent un adjectif ». Fontanier, Commentaire
//         raisonné on Dumarsais’s Tropes (1818, archive.org
//         fre_b2063439): sceptical; he brings most of Dumarsais’s Latin
//         hypallages back to ordinary construction or to metaphor, and
//         writes that we often see in Latin « des hypallages qui n’y sont
//         pas ». Le Robert: not checked (403).
//       LITOTE (Larousse): « affaiblir l’expression de la pensée pour
//         laisser entendre plus qu’on ne dit », example Chimène.
//       ANTIPHRASE (Larousse): a word meaning the opposite of what one
//         thinks, « par ironie ou euphémisme ».
//       PRÉTÉRITION (Larousse): « déclare passer sous silence une chose dont
//         on parle néanmoins par ce moyen ».
//       CHIASME (Larousse): « Disposition en ordre inverse de deux phrases
//         syntaxiquement identiques, formant une antithèse ou constituant un
//         parallèle ».
//       SYNECDOQUE (Larousse): « Variété de métonymie », example « une
//         voile » for a ship. MÉTONYMIE (Larousse): a concept named by a
//         term for another concept linked to it by a necessary relation.
//       CADENCE MAJEURE / MINEURE: the usual school terms of French
//         stylistics (members of rising / falling length); stated without
//         attribution.
//
//     OTHER FACTS: dates of the authors and works as above; « Le Dormeur du
//     val » is dated October 1870, during the Franco-Prussian war (stated
//     as « pendant la guerre de 1870 »).
//
//  8. APOSTROPHES: every authored French string uses the typographic ’,
//     quotations included (Wikisource prints ’ in all the pages above).
//
// ══════════════════════════════════════════════════════════════════════════

import type { Item } from '../../../../ealch-v2/src/content/schema.ts';
import { seedPlusPacks } from '../../../../ealch-v2/src/content/seed-plus-packs.ts';
const seed = seedPlusPacks();
import { unitRef } from '../_unit-ref.ts';

/** A citation that OPENS a sentence needs a capital. */
export function Cap(s: string): string { return s.charAt(0).toUpperCase() + s.slice(1); }

/* ══════════════════════════════════════════════════════════════════════════
 *  §B. IDENTITY
 * ══════════════════════════════════════════════════════════════════════════ */

export const UNIT = {
  id: 'c1.19',
  seq: 19,
  title: 'Figures of Speech and Their Effect',
  sub: 'Les figures et leur effet',
  canDo: 'Can identify a figure or a stylistic choice in a literary or argumentative text (litotes, antiphrasis, gradation, chiasmus, zeugma, hypallage, metonymy and synecdoche, alliteration and assonance, rhythm and cadence, effects of rupture) and write one precise sentence on its effect, proved by the words of the text, and can write a short commentary on an extract',
  prereqUnitIds: ['b2.30', 'b2.24', 'c1.06', 'c1.08'],
} as const;

export const LESSON_ID = 'c1.19.l1';
export const THEME = 'rhetorique';
export const LEVEL = 'c1' as const;

/** ONE block, by the brief (sub-theme « les figures et leur effet »). */
export const ID_RANGES = [[1200, 1399]] as const;

export const E = (n: number) => `fr.${LEVEL}.${THEME}.${String(n).padStart(3, '0')}`;

/* ══════════════════════════════════════════════════════════════════════════
 *  §C. HOW THIS LESSON NAMES ITS NEIGHBOURS (trail position, from the seed)
 * ══════════════════════════════════════════════════════════════════════════ */

type SeedUnit = { id: string; seq: number | string };
const SEQ = new Map((seed.units as unknown as SeedUnit[]).map((u) => [u.id, Number(u.seq)]));

export function refFr(unitId: string): string {
  const band = unitId.slice(0, 2);
  const n = SEQ.get(unitId);
  if (n) return `la leçon ${n} du ${band.toUpperCase()}`;
  if (band === 'b1' || band === 'b2' || band === 'c1') throw new Error(`c1.19: ${unitId} is not in the seed`);
  return unitRef(unitId);
}

export const LITT_UNIT = 'b2.30';
export const CRITIQUE_UNIT = 'b2.24';
export const NUANCER_UNIT = 'c1.06';
export const PERSUADER_UNIT = 'c1.08';
export const LIGNES_UNIT = 'c1.20';

export const LITT_REF = refFr(LITT_UNIT);             // la leçon 30 du B2
export const CRITIQUE_REF = refFr(CRITIQUE_UNIT);     // la leçon 24 du B2
export const NUANCER_REF = refFr(NUANCER_UNIT);       // la leçon 6 du C1
export const PERSUADER_REF = refFr(PERSUADER_UNIT);   // la leçon 8 du C1
export const LIGNES_REF = refFr(LIGNES_UNIT);         // la leçon 20 du C1

/* ══════════════════════════════════════════════════════════════════════════
 *  §D. THE QUOTATIONS, IMPORTED (never retyped)
 * ══════════════════════════════════════════════════════════════════════════ */

export { REFRAME as B230_REFRAME } from '../b2/lire-litterature-corpus.ts';
export { REFRAME as C108_REFRAME } from './persuader-corpus.ts';

/* ══════════════════════════════════════════════════════════════════════════
 *  §E. THE REFRAME AND THE ONE METAPHOR
 *
 *  THE PRISM. A figure is a prism held in the text: its name is the glass,
 *  its effect is the coloured band it throws on the wall. A commentary that
 *  names the glass and never looks at the wall has said nothing. Every act
 *  ends on one sentence about the band (« Pour ton commentaire »).
 *
 *  It is NOT « one figure, one effect »: acts 2, 5, 9 and 12 accept two
 *  readings when the words support both. And it is NOT « find as many
 *  figures as possible »: act 9 refuses an alliteration with no meaning to
 *  serve, act 6 lets the learner describe a figure whose name dictionaries
 *  dispute.
 * ══════════════════════════════════════════════════════════════════════════ */

export const REFRAME = 'Nommer la figure, c’est la question ; dire son effet, c’est la réponse.';
export const REFRAME_EN = 'Naming the figure is the question; saying its effect is the answer.';

export const REFRAME_REJECTED: readonly { text: string; why: string }[] = [
  {
    text: 'Chaque figure a son effet.',
    why: 'False where the lesson must hold: the same litote is restraint in Chimène and politeness elsewhere (act 2), a chiasm makes Valère a moralist and Harpagon a clown (act 5). An effect is read in context, and other readings are accepted.',
  },
  {
    text: 'Repère le plus de figures possible.',
    why: 'Rewards the list the lesson is built to cure (act 1). Act 9 refuses an alliteration that serves no meaning.',
  },
  {
    text: 'Nommer l’image ne suffit pas : dis ce qu’elle fait voir ou sentir.',
    why: 'b2.30’s rule card for comparison and metaphor, reused in act 1 by id. This lesson widens it to every figure, sounds and rhythm included, and asks for the effect on the MEANING, proved by the words.',
  },
  {
    text: 'Un procédé loyal résiste quand on le nomme.',
    why: 'c1.08’s reframe: it judges a persuasive move for fairness. Here a figure is read, not judged.',
  },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §F. THE IMPORTS, BY ACT (French in the trailing comment)
 * ══════════════════════════════════════════════════════════════════════════ */

const LIT = (n: number) => `fr.b2.litterature.${String(n).padStart(3, '0')}`;
const SC2 = (n: number) => `fr.b2.strategies-de-comprehension.${n}`;
const NR = (n: number) => `fr.c1.nuances-et-registres.${n}`;
const RH = (n: number) => `fr.c1.rhetorique.${n}`;

export const IMPORTED = {
  act1: [
    LIT(1512),                 // Nommer l’image ne suffit pas : dis ce qu’elle fait voir ou sentir.  (b2.30, flashcard only)
    LIT(1504),                 // Une comparaison rapproche deux choses avec un outil : comme, tel, pareil à.  (b2.30)
    LIT(1505),                 // La métaphore dit que l’un est l’autre, sans outil.  (b2.30)
    LIT(1506),                 // La personnification donne au vent des gestes humains.  (b2.30)
    LIT(1507),                 // Cette comparaison rend l’orage concret et presque vivant.  (b2.30)
    LIT(74),                   // l’anaphore  (B2 term row)
    SC2(1501),                 // L’ironie dit le contraire de ce qu’elle pense.  (b2.24, flashcard only)
    NR(1122),                  // La litote dit moins pour faire entendre plus.  (c1.06, flashcard only)
    RH(1128),                  // L’anaphore répète un même début ; la gradation, le plus souvent, fait monter l’intensité.  (c1.08, flashcard only)
    RH(1140),                  // La prétérition dit une chose en prétendant la taire.  (c1.08, flashcard only)
  ],
  act2: [
    NR(1110),                  // ce n’est pas mauvais du tout  (c1.06)
    LIT(78),                   // l'euphémisme  (Postgres only)
  ],
  act3: [
    SC2(1500),                 // une antiphrase  (b2.24)
    SC2(1513),                 // Sans le contexte, l’ironie ne se voit pas.  (b2.24, flashcard only)
    'fr.c1.strategies-de-comprehension.1963', // Les bons ironistes laissent dans le texte un détail qui contredit l’éloge.  (c1.20)
    RH(1142),                  // une prétérition  (c1.08)
  ],
  act4: [
    RH(1130),                  // une gradation  (c1.08)
  ],
  act5: [
    LIT(75),                   // l'oxymore  (Postgres only)
    LIT(76),                   // l'antithèse  (Postgres only)
  ],
  act6: [] as string[],
  act7: [] as string[],
  act8: [] as string[],
  act9: [] as string[],
  act10: [
    LIT(1482),                 // Les phrases courtes accélèrent le rythme et créent la tension.  (b2.30)
    RH(1131),                  // Le rythme fait retenir ; il ne fait pas preuve.  (c1.08)
  ],
  act11: [] as string[],
  act12: [
    LIT(1511),                 // une métaphore filée  (b2.30)
    LIT(1498),                 // Une tonalité se prouve par ses moyens : les mots, le rythme, les images.  (b2.30, flashcard only)
  ],
};

export const IMPORT_IDS = [...new Set(Object.values(IMPORTED).flat())];

/** Published in Postgres, absent from the local seed cut: fr / en / drills
 *  copied VERBATIM (straight apostrophes kept: the decision 13 edit happens
 *  at import), so `src()` can print them. */
export const PG_ROWS: { id: string; fr: string; en: string; drills: string[] }[] = [
  { id: LIT(75), fr: "l'oxymore", en: 'the oxymoron', drills: ['flashcard', 'review'] },
  { id: LIT(76), fr: "l'antithèse", en: 'the antithesis', drills: ['flashcard', 'review'] },
  { id: LIT(78), fr: "l'euphémisme", en: 'the euphemism', drills: ['flashcard', 'review'] },
];

/** No `flashcard` drill: nameable, never releasable. None among the imports. */
export const NOT_DECK_ABLE: string[] = [];

/** No `voiceflash`: never in a `practice` speak section. */
export const NOT_SPEAKABLE: string[] = [
  ...NOT_DECK_ABLE,
  LIT(1512), LIT(74), SC2(1501), NR(1122), RH(1128), RH(1140), // flashcard (and review) only
  LIT(78), SC2(1513), LIT(75), LIT(76), LIT(1498),              // flashcard (and review) only
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §G. THE AUTHORED ROWS, ONE BLOCK PER ACT
 *
 *  A FIGURES CORPUS HOLDS: the quoted line (a short public-domain extract,
 *  tagged `citation`, recognised and read aloud, never produced as a
 *  model of the learner’s own French), the one-sentence EFFECT the act
 *  teaches the learner to write, the rule card (`rule()`), and the
 *  « name only » sentences the lesson cures (tagged `contre-exemple`,
 *  drills ['review'] only).
 * ══════════════════════════════════════════════════════════════════════════ */

type Row = Item;

const FCVR = ['flashcard', 'voiceflash', 'review'] as Item['drills'];
const FCVDR = ['flashcard', 'voiceflash', 'dictation', 'review'] as Item['drills'];
const FC = ['flashcard'] as Item['drills'];
/** Recognised, never produced: name-only lines, archaic spellings. */
const RECO = ['review'] as Item['drills'];

const sent = (
  n: number, fr: string, en: string, ipa: string, respell: string, tags: string[],
  drills: Item['drills'] = FCVR, extra: Partial<Item> = {},
): Row => ({
  id: E(n), kind: 'sentence', level: LEVEL, theme: THEME, fr, en, ipa, respell,
  tags, drills, version: 1, grammarPoints: ['figures-effet'], ...extra,
});

const phrase = (
  n: number, fr: string, en: string, ipa: string, respell: string, tags: string[],
  drills: Item['drills'] = FCVR, extra: Partial<Item> = {},
): Row => ({
  id: E(n), kind: 'phrase', level: LEVEL, theme: THEME, fr, en, ipa, respell,
  tags, drills, version: 1, ...extra,
});

/** A rule card: `prompt` is the situation, `fr` the rule. */
const rule = (prompt: string, notes: string): Partial<Item> => ({ cardType: 'grammar', prompt, notes });

/* ── ACT 1 · LE NOM NE SUFFIT PAS ─────────────────────────────────────────── */

export const ACT1_ROWS: Row[] = [
  sent(1200, 'Dans ce vers, il y a une litote.', 'In this line, there is a litotes.', '/dɑ̃ sə vɛʁ il i a yn li.tɔt/', 'dahⁿ suh VEHR | eel ee a ün lee-TOT', ['nom-seul', 'contre-exemple'], RECO),
  sent(1201, 'En disant moins, Chimène avoue un amour qu’elle n’a pas le droit de dire.', 'By saying less, Chimène confesses a love she has no right to speak.', '/ɑ̃ di.zɑ̃ mwɛ̃ ʃi.mɛn a.vu œ̃.na.muʁ kɛl na pa lə dʁwa də diʁ/', 'ahⁿ dee-zahⁿ MWEHⁿ | shee-MENN a-voo uhⁿ-na-MOOR | kel na pa luh drwa duh DEER', ['effet', 'litote']),
  sent(1202, 'Une figure ne vaut que par son effet.', 'A figure is worth only what its effect is worth.', '/yn fi.ɡyʁ nə vo kə paʁ sɔ̃.ne.fɛ/', 'ün fee-GÜR nuh voh kuh par sohⁿ-nay-FEH', ['regle'], FCVDR),
  sent(1203, 'Que fait cette figure au sens du texte ?', 'What does this figure do to the meaning of the text?', '/kə fɛ sɛt fi.ɡyʁ o sɑ̃s dy tɛkst/', 'kuh feh set fee-GÜR | oh SAHⁿSS dü TEKST', ['question']),
  sent(1204, REFRAME, REFRAME_EN, '/nɔ.me la fi.ɡyʁ sɛ la kɛs.tjɔ̃ diʁ sɔ̃.ne.fɛ sɛ la ʁe.pɔ̃s/', 'no-may la fee-GÜR | seh la kes-TYOHⁿ | deer sohⁿ-nay-FEH | seh la ray-POHⁿSS', ['regle', 'reframe'], FC,
    rule('Ton commentaire dit : « Il y a une litote. » Est-ce fini ?', 'Non : tu as posé la question. Dis maintenant ce que la litote fait au sens, avec les mots du texte. Nommer la figure, c’est la question ; dire son effet, c’est la réponse.')),
  sent(1205, 'Repère, nomme, puis dis l’effet en une phrase.', 'Spot it, name it, then say the effect in one sentence.', '/ʁə.pɛʁ nɔm pɥi di le.fɛ ɑ̃.nyn fʁaz/', 'ruh-PEHR | NOMM | pwee dee lay-FEH | ahⁿ-nün FRAHZ', ['methode'], FCVDR),
  sent(1206, 'Cette lecture se défend, mais d’autres sont possibles.', 'This reading holds up, but others are possible.', '/sɛt lɛk.tyʁ sə de.fɑ̃ mɛ dotʁ sɔ̃ pɔ.sibl/', 'set lek-TÜR suh day-FAHⁿ | meh DOHTR sohⁿ po-SEEBL', ['interpretation']),
  phrase(1207, 'une figure de style', 'a figure of speech', '/yn fi.ɡyʁ də stil/', 'ün fee-GÜR duh STEEL', ['mot']),
  sent(1208, 'L’effet se prouve par les mots du texte.', 'The effect is proved by the words of the text.', '/le.fɛ sə pʁuv paʁ le mo dy tɛkst/', 'lay-FEH suh PROOV | par lay MOH dü TEKST', ['regle'], FCVDR),
  sent(1209, 'Une même figure peut produire plusieurs effets.', 'One and the same figure can produce several effects.', '/yn mɛm fi.ɡyʁ pø pʁɔ.dɥiʁ ply.zjœ.ʁe.fɛ/', 'ün mem fee-GÜR | peu pro-DWEER | plü-zyuh-ray-FEH', ['regle', 'interpretation']),
  phrase(1210, 'l’effet produit sur le lecteur', 'the effect produced on the reader', '/le.fɛ pʁɔ.dɥi syʁ lə lɛk.tœʁ/', 'lay-FEH pro-DWEE | sür luh lek-TUHR', ['mot']),
];

/* ── ACT 2 · LA LITOTE ───────────────────────────────────────────────────── */

export const ACT2_ROWS: Row[] = [
  sent(1211, 'Va, je ne te hais point.', 'Go, I do not hate you.', '/va ʒə nə tə ɛ pwɛ̃/', 'VA | zhuh nuh tuh eh PWEHⁿ', ['citation', 'corneille', 'litote']),
  sent(1212, 'Chimène nie la haine pour ne pas nommer l’amour.', 'Chimène denies hatred so as not to name love.', '/ʃi.mɛn ni la ɛn puʁ nə pa nɔ.me la.muʁ/', 'shee-MENN NEE la ENN | poor nuh pa no-MAY la-MOOR', ['effet', 'litote']),
  sent(1213, 'La litote affirme davantage en niant le contraire.', 'Litotes asserts more by denying the opposite.', '/la li.tɔt a.fiʁm da.vɑ̃.taʒ ɑ̃ njɑ̃ lə kɔ̃.tʁɛʁ/', 'la lee-TOT a-FEERM da-vahⁿ-TAZH | ahⁿ nyahⁿ luh kohⁿ-TREHR', ['regle', 'litote'], FC,
    rule('« Je ne te hais point » veut-il dire « je suis indifférente » ?', 'Non : en niant la haine, Chimène laisse entendre l’amour. La litote affirme davantage en niant le contraire.')),
  sent(1214, 'Ce n’est pas une petite affaire.', 'This is no small matter.', '/sə nɛ pa.zyn pə.ti.ta.fɛʁ/', 'suh neh pa-zün puh-tee-ta-FEHR', ['exemple', 'litote']),
  sent(1215, 'Il n’était pas sans savoir ce qu’il risquait.', 'He was well aware of what he was risking.', '/il ne.tɛ pa sɑ̃ sa.vwaʁ sə kil ʁis.kɛ/', 'eel nay-teh pa sahⁿ sa-VWAR | suh keel rees-KEH', ['exemple', 'litote', 'piege']),
  sent(1216, 'L’euphémisme adoucit ; la litote retient pour mieux faire entendre.', 'Euphemism softens; litotes holds back to make itself better heard.', '/lø.fe.mism a.du.si la li.tɔt ʁə.tjɛ̃ puʁ mjø fɛʁ ɑ̃.tɑ̃dʁ/', 'leu-fay-MEESM a-doo-SEE | la lee-TOT ruh-TYEHⁿ | poor myeu fehr ahⁿ-TAHⁿDR', ['regle', 'distinction'], FCVDR),
  sent(1217, 'Il nous a quittés cette nuit.', 'He left us last night.', '/il nu.za ki.te sɛt nɥi/', 'eel noo-za kee-TAY | set NWEE', ['exemple', 'euphemisme']),
  sent(1218, 'La retenue de la phrase laisse deviner la passion.', 'The restraint of the sentence lets the passion be guessed.', '/la ʁə.tə.ny də la fʁaz lɛs də.vi.ne la pa.sjɔ̃/', 'la ruh-tuh-NÜ duh la FRAHZ | less duh-vee-NAY la pa-SYOHⁿ', ['effet', 'litote'], FCVDR),
  sent(1219, 'Sous trois mots sobres, le lecteur entend un aveu.', 'Under three sober words, the reader hears a confession.', '/su tʁwa mo sɔbʁ lə lɛk.tœʁ ɑ̃.tɑ̃.tœ̃.na.vø/', 'soo trwa moh SOBR | luh lek-TUHR ahⁿ-tahⁿ-tuhⁿ-na-VEU', ['effet', 'litote']),
  phrase(1220, 'une litote', 'a litotes (an understatement that means more)', '/yn li.tɔt/', 'ün lee-TOT', ['mot', 'litote']),
  sent(1221, 'Pour qu’il y ait litote, le sens doit être plus fort que les mots.', 'For there to be litotes, the meaning must be stronger than the words.', '/puʁ kil i ɛ li.tɔt lə sɑ̃s dwa ɛtʁ ply fɔʁ kə le mo/', 'poor keel ee eh lee-TOT | luh SAHⁿSS dwa ehtr plü FOR | kuh lay MOH', ['regle', 'piege']),
  sent(1222, 'La litote suppose un lecteur qui comprend à demi-mot.', 'Litotes assumes a reader who takes the hint.', '/la li.tɔt sy.poz œ̃ lɛk.tœʁ ki kɔ̃.pʁɑ̃.ta də.mi.mo/', 'la lee-TOT sü-POHZ | uhⁿ lek-TUHR kee kohⁿ-prahⁿ-ta duh-mee-MOH', ['effet', 'lecteur']),
];

/* ── ACT 3 · L’ANTIPHRASE ────────────────────────────────────────────────── */

export const ACT3_ROWS: Row[] = [
  sent(1223, 'Rien n’était si beau, si leste, si brillant, si bien ordonné que les deux armées.', 'Nothing was so fine, so smart, so brilliant, so well drawn up as the two armies.', '/ʁjɛ̃ ne.tɛ si bo si lɛst si bʁi.jɑ̃ si bjɛ̃.nɔʁ.dɔ.ne kə le dø.zaʁ.me/', 'ryehⁿ nay-teh see BOH | see LEST | see bree-YAHⁿ | see byehⁿ-nor-do-NAY | kuh lay deu-zar-MAY', ['citation', 'voltaire', 'antiphrase']),
  phrase(1224, 'cette boucherie héroïque', 'this heroic butchery', '/sɛt bu.ʃʁi e.ʁɔ.ik/', 'set boo-shree ay-ro-EEK', ['citation', 'voltaire', 'oxymore']),
  sent(1225, 'Voltaire loue la bataille pour mieux la condamner.', 'Voltaire praises the battle the better to condemn it.', '/vɔl.tɛʁ lu la ba.taj puʁ mjø la kɔ̃.da.ne/', 'vol-TEHR loo la ba-TAHY | poor myeu la kohⁿ-da-NAY', ['effet', 'antiphrase'], FCVDR),
  sent(1226, 'L’antiphrase emploie un mot pour dire son contraire.', 'Antiphrasis uses a word to say its opposite.', '/lɑ̃.ti.fʁaz ɑ̃.plwa œ̃ mo puʁ diʁ sɔ̃ kɔ̃.tʁɛʁ/', 'lahⁿ-tee-FRAHZ ahⁿ-PLWA | uhⁿ MOH poor deer sohⁿ kohⁿ-TREHR', ['regle', 'antiphrase'], FC,
    rule('Voltaire appelle « héros » des soldats qui brûlent un village. Quelle figure ?', 'Une antiphrase : le mot dit l’éloge, le contexte dit l’horreur. L’antiphrase emploie un mot pour dire son contraire.')),
  sent(1227, 'Les « héros » qui brûlent un village ne sont pas des héros.', 'The “heroes” who burn a village are not heroes.', '/le e.ʁo ki bʁyl.tœ̃ vi.laʒ nə sɔ̃ pa de e.ʁo/', 'lay ay-ROH | kee brül-tuhⁿ vee-LAZH | nuh sohⁿ pa day ay-ROH', ['effet', 'antiphrase']),
  sent(1228, 'L’ironie est une attitude ; l’antiphrase est l’un de ses moyens.', 'Irony is an attitude; antiphrasis is one of its means.', '/li.ʁɔ.ni ɛ.ty.na.ti.tyd lɑ̃.ti.fʁaz ɛ lœ̃ də se mwa.jɛ̃/', 'lee-ro-NEE eh-tü-na-tee-TÜD | lahⁿ-tee-FRAHZ eh LUHⁿ duh say mwa-YEHⁿ', ['regle', 'distinction'], FCVDR),
  sent(1229, 'C’est réussi, bravo.', 'Well, that worked, well done (said of a disaster).', '/sɛ ʁe.y.si bʁa.vo/', 'seh ray-ü-SEE | bra-VOH', ['exemple', 'antiphrase']),
  sent(1230, 'Le décalage entre les mots et les faits fait naître l’indignation.', 'The gap between the words and the facts gives rise to indignation.', '/lə de.ka.laʒ ɑ̃tʁ le mo e le fɛ fɛ nɛtʁ lɛ̃.di.ɲa.sjɔ̃/', 'luh day-ka-LAZH | ahⁿtr lay MOH ay lay FEH | feh nehtr lehⁿ-dee-nya-SYOHⁿ', ['effet', 'antiphrase'], FCVDR),
  phrase(1231, 'selon les lois du droit public', 'according to the laws of public right', '/sə.lɔ̃ le lwa dy dʁwa py.blik/', 'suh-lohⁿ lay LWA | dü drwa pü-BLEEK', ['citation', 'voltaire', 'antiphrase']),
  sent(1232, 'Un seul détail atroce suffit à retourner l’éloge.', 'A single atrocious detail is enough to turn the praise inside out.', '/œ̃ sœl de.taj a.tʁɔs sy.fi.ta ʁə.tuʁ.ne le.lɔʒ/', 'uhⁿ suhl day-TAHY a-TROSS | sü-fee-ta ruh-toor-NAY lay-LOZH', ['effet', 'antiphrase']),
  sent(1233, 'Je ne peindrai pas la joie des vainqueurs, leurs chants, leurs verres levés sur les ruines.', 'I will not paint the victors’ joy, their songs, their glasses raised over the ruins.', '/ʒə nə pɛ̃.dʁe pa la ʒwa de vɛ̃.kœʁ lœʁ ʃɑ̃ lœʁ vɛʁ lə.ve syʁ le ʁɥin/', 'zhuh nuh pehⁿ-dray pa la ZHWA day vehⁿ-KUHR | luhr SHAHⁿ | luhr VEHR luh-VAY | sür lay RWEENN', ['exemple', 'preterition']),
  sent(1234, 'Dans un récit, la prétérition attire le regard sur ce qu’elle feint de cacher.', 'In a narrative, paralipsis draws the eye to what it pretends to hide.', '/dɑ̃.zœ̃ ʁe.si la pʁe.te.ʁi.sjɔ̃ a.tiʁ lə ʁə.ɡaʁ syʁ sə kɛl fɛ̃ də ka.ʃe/', 'dahⁿ-zuhⁿ ray-SEE | la pray-tay-ree-SYOHⁿ a-TEER luh ruh-GAR | sür suh kel fehⁿ duh ka-SHAY', ['regle', 'preterition'], FCVDR),
];

/* ── ACT 4 · LA GRADATION ────────────────────────────────────────────────── */

export const ACT4_ROWS: Row[] = [
  phrase(1235, 'va, cours, vole, et nous venge', 'go, run, fly, and avenge us', '/va kuʁ vɔl e nu vɑ̃ʒ/', 'VA | KOOR | VOL | ay noo VAHⁿZH', ['citation', 'corneille', 'gradation']),
  sent(1236, 'Chaque verbe va plus vite que le précédent.', 'Each verb goes faster than the one before.', '/ʃak vɛʁb va ply vit kə lə pʁe.se.dɑ̃/', 'shak VEHRB va plü VEET | kuh luh pray-say-DAHⁿ', ['effet', 'gradation']),
  sent(1237, 'Une gradation se lit par son point d’arrivée.', 'A gradation is read from its point of arrival.', '/yn ɡʁa.da.sjɔ̃ sə li paʁ sɔ̃ pwɛ̃ da.ʁi.ve/', 'ün gra-da-SYOHⁿ suh LEE | par sohⁿ pwehⁿ da-ree-VAY', ['regle', 'gradation'], FC,
    rule('« Va, cours, vole, et nous venge. » Où est le poids de la phrase ?', 'Sur le dernier terme : la vengeance. Les verbes de mouvement y mènent de plus en plus vite. Une gradation se lit par son point d’arrivée.')),
  sent(1238, 'Le dernier terme porte tout le poids de la phrase.', 'The last term carries the whole weight of the sentence.', '/lə dɛʁ.nje tɛʁm pɔʁt tu lə pwa də la fʁaz/', 'luh dehr-nyay TEHRM | port too luh PWA duh la FRAHZ', ['effet', 'gradation'], FCVDR),
  sent(1239, 'Don Diègue presse son fils : l’ordre devient urgence.', 'Don Diègue presses his son: the order becomes urgency.', '/dɔ̃ djɛɡ pʁɛs sɔ̃ fis lɔʁdʁ də.vjɛ̃ yʁ.ʒɑ̃s/', 'dohⁿ DYEG press sohⁿ FEESS | LORDR duh-vyehⁿ ür-ZHAHⁿSS', ['effet', 'gradation']),
  sent(1240, 'Il a perdu sa maison, puis sa chambre, puis son nom.', 'He lost his house, then his room, then his name.', '/i.la pɛʁ.dy sa mɛ.zɔ̃ pɥi sa ʃɑ̃bʁ pɥi sɔ̃ nɔ̃/', 'ee-la pehr-DÜ sa meh-ZOHⁿ | pwee sa SHAHⁿBR | pwee sohⁿ NOHⁿ', ['exemple', 'gradation', 'descendante']),
  sent(1241, 'Une gradation descendante fait sentir une chute.', 'A descending gradation makes you feel a fall.', '/yn ɡʁa.da.sjɔ̃ de.sɑ̃.dɑ̃t fɛ sɑ̃.tiʁ yn ʃyt/', 'ün gra-da-SYOHⁿ day-sahⁿ-DAHⁿT | feh sahⁿ-TEER ün SHÜT', ['regle', 'gradation']),
  phrase(1242, 'une gradation ascendante', 'a rising gradation (a climax)', '/yn ɡʁa.da.sjɔ̃ a.sɑ̃.dɑ̃t/', 'ün gra-da-SYOHⁿ a-sahⁿ-DAHⁿT', ['mot', 'gradation']),
  sent(1243, 'Une énumération sans ordre n’est pas une gradation.', 'A list in no order is not a gradation.', '/yn e.ny.me.ʁa.sjɔ̃ sɑ̃.zɔʁdʁ nɛ pa.zyn ɡʁa.da.sjɔ̃/', 'ün ay-nü-may-ra-SYOHⁿ sahⁿ-ZORDR | neh pa-zün gra-da-SYOHⁿ', ['regle', 'piege'], FCVDR),
  sent(1244, 'Quatre verbes brefs, de plus en plus pressants, imitent l’élan demandé.', 'Four short verbs, more and more urgent, imitate the rush being asked for.', '/katʁ vɛʁb bʁɛf də ply.zɑ̃ ply pʁɛ.sɑ̃ i.mit le.lɑ̃ də.mɑ̃.de/', 'katr vehrb BREF | duh plü-zahⁿ plü preh-SAHⁿ | ee-MEET lay-LAHⁿ duh-mahⁿ-DAY', ['effet', 'gradation', 'rythme']),
  sent(1245, 'C’est l’ordre des termes, et non leur nombre, qui fait la gradation.', 'It is the order of the terms, not their number, that makes the gradation.', '/sɛ lɔʁdʁ de tɛʁm e nɔ̃ lœʁ nɔ̃bʁ ki fɛ la ɡʁa.da.sjɔ̃/', 'seh LORDR day TEHRM | ay nohⁿ luhr NOHⁿBR | kee feh la gra-da-SYOHⁿ', ['regle', 'gradation']),
];

/* ── ACT 5 · LE CHIASME ──────────────────────────────────────────────────── */

export const ACT5_ROWS: Row[] = [
  phrase(1246, 'il faut manger pour vivre, et non pas vivre pour manger', 'one must eat to live, and not live to eat', '/il fo mɑ̃.ʒe puʁ vivʁ e nɔ̃ pa vivʁ puʁ mɑ̃.ʒe/', 'eel foh mahⁿ-ZHAY poor VEEVR | ay nohⁿ pa VEEVR poor mahⁿ-ZHAY', ['citation', 'moliere', 'chiasme']),
  sent(1247, 'Harpagon retourne la maxime et se trahit.', 'Harpagon turns the maxim round and gives himself away.', '/aʁ.pa.ɡɔ̃ ʁə.tuʁn la mak.sim e sə tʁa.i/', 'ar-pa-GOHⁿ ruh-TOORN la mak-SEEM | ay suh tra-EE', ['effet', 'chiasme', 'comique']),
  sent(1248, 'Le chiasme croise les termes : A et B, puis B et A.', 'Chiasmus crosses the terms: A and B, then B and A.', '/lə ki.asm kʁwaz le tɛʁm a e be pɥi be e a/', 'luh kee-ASM KRWAZ lay TEHRM | A ay BAY | pwee BAY ay A', ['regle', 'chiasme'], FC,
    rule('« Manger pour vivre, vivre pour manger » : que remarques-tu ?', 'Les mêmes mots reviennent dans l’ordre inverse : c’est un chiasme. Le chiasme croise les termes : A et B, puis B et A.')),
  sent(1249, 'Le croisement oppose deux façons de vivre.', 'The crossing sets two ways of living against each other.', '/lə kʁwaz.mɑ̃ ɔ.pɔz dø fa.sɔ̃ də vivʁ/', 'luh krwaz-MAHⁿ o-POHZ | deu fa-SOHⁿ duh VEEVR', ['effet', 'chiasme'], FCVDR),
  sent(1250, 'L’antithèse oppose ; le chiasme croise, souvent pour opposer.', 'Antithesis opposes; chiasmus crosses, often in order to oppose.', '/lɑ̃.ti.tɛz ɔ.pɔz lə ki.asm kʁwaz su.vɑ̃ puʁ ɔ.pɔ.ze/', 'lahⁿ-tee-TEZ o-POHZ | luh kee-ASM KRWAZ | soo-vahⁿ poor o-po-ZAY', ['regle', 'distinction'], FCVDR),
  sent(1251, 'Le jour, elle rêvait la nuit ; la nuit, elle rêvait le jour.', 'By day she dreamt of the night; by night she dreamt of the day.', '/lə ʒuʁ ɛl ʁɛ.vɛ la nɥi la nɥi ɛl ʁɛ.vɛ lə ʒuʁ/', 'luh ZHOOR | ehl reh-veh la NWEE | la NWEE | ehl reh-veh luh ZHOOR', ['exemple', 'chiasme']),
  sent(1252, 'Ici la fête, là-bas la faim.', 'Here the feast, over there hunger.', '/i.si la fɛt la.ba la fɛ̃/', 'ee-SEE la FET | la-BA la FEHⁿ', ['exemple', 'antithese']),
  phrase(1253, 'cette obscure clarté qui tombe des étoiles', 'this dark brightness that falls from the stars', '/sɛ.tɔps.kyʁ klaʁ.te ki tɔ̃b de.ze.twal/', 'seh-tops-kür klar-TAY | kee tohⁿb day-zay-TWAL', ['citation', 'corneille', 'oxymore']),
  sent(1254, 'Le chiasme donne à la phrase l’allure d’une maxime.', 'Chiasmus gives the sentence the look of a maxim.', '/lə ki.asm dɔn a la fʁaz la.lyʁ dyn mak.sim/', 'luh kee-ASM DONN a la FRAHZ | la-LÜR dün mak-SEEM', ['effet', 'chiasme']),
  sent(1255, 'Le comique naît de l’ordre inversé.', 'The comedy comes from the reversed order.', '/lə kɔ.mik nɛ də lɔʁ.dʁɛ̃.vɛʁ.se/', 'luh ko-MEEK neh | duh lor-drehⁿ-vehr-SAY', ['effet', 'comique']),
  phrase(1256, 'un chiasme', 'a chiasmus', '/œ̃ ki.asm/', 'uhⁿ kee-ASM', ['mot', 'chiasme']),
  sent(1257, 'Pour voir un chiasme, cherche les mots qui reviennent dans l’ordre inverse.', 'To see a chiasmus, look for the words that come back in reverse order.', '/puʁ vwaʁ œ̃ ki.asm ʃɛʁʃ le mo ki ʁə.vjɛn dɑ̃ lɔʁ.dʁɛ̃.vɛʁs/', 'poor vwar uhⁿ kee-ASM | shehrsh lay MOH kee ruh-VYENN | dahⁿ lor-drehⁿ-VEHRSS', ['methode', 'chiasme']),
];

/* ── ACT 6 · LE ZEUGME ───────────────────────────────────────────────────── */

export const ACT6_ROWS: Row[] = [
  phrase(1258, 'vêtu de probité candide et de lin blanc', 'clothed in candid probity and white linen', '/vɛ.ty də pʁɔ.bi.te kɑ̃.did e də lɛ̃ blɑ̃/', 'veh-TÜ duh pro-bee-TAY kahⁿ-DEED | ay duh lehⁿ BLAHⁿ', ['citation', 'hugo', 'zeugme']),
  sent(1259, 'Hugo attelle une vertu et un tissu au même mot.', 'Hugo yokes a virtue and a fabric to the same word.', '/y.ɡo a.tɛl y.nə vɛʁ.ty e œ̃ ti.sy o mɛm mo/', 'ü-GOH a-TEL | ün vehr-TÜ ay uhⁿ tee-SÜ | oh mem MOH', ['effet', 'zeugme']),
  sent(1260, 'Le zeugme rattache à un même mot deux termes de nature différente.', 'Zeugma attaches two terms of different kinds to one and the same word.', '/lə zøɡm ʁa.taʃ a œ̃ mɛm mo dø tɛʁm də na.tyʁ di.fe.ʁɑ̃t/', 'luh ZEUGM ra-TASH | a uhⁿ mem MOH | deu TEHRM duh na-TÜR dee-fay-RAHⁿT', ['regle', 'zeugme'], FC,
    rule('« Vêtu de probité candide et de lin blanc. » Qu’est-ce qui cloche, et pourquoi est-ce voulu ?', 'Un même mot, « vêtu », porte une vertu et un tissu. Le zeugme rattache à un même mot deux termes de nature différente.')),
  sent(1261, 'Le tissu blanc rend la vertu visible.', 'The white fabric makes the virtue visible.', '/lə ti.sy blɑ̃ ʁɑ̃ la vɛʁ.ty vi.zibl/', 'luh tee-sü BLAHⁿ | rahⁿ la vehr-TÜ vee-ZEEBL', ['effet', 'zeugme'], FCVDR),
  sent(1262, 'Elle a pris le train et une grande décision.', 'She took the train and a big decision.', '/ɛ.la pʁi lə tʁɛ̃ e yn ɡʁɑ̃d de.si.zjɔ̃/', 'eh-la pree luh TREHⁿ | ay ün grahⁿd day-see-ZYOHⁿ', ['exemple', 'zeugme']),
  sent(1263, 'Il a perdu ses clés et son sang-froid.', 'He lost his keys and his composure.', '/i.la pɛʁ.dy se kle e sɔ̃ sɑ̃.fʁwa/', 'ee-la pehr-DÜ say KLAY | ay sohⁿ sahⁿ-FRWA', ['exemple', 'zeugme']),
  sent(1264, 'Le zeugme surprend, puis fait sourire ou réfléchir.', 'Zeugma surprises, then makes you smile or think.', '/lə zøɡm syʁ.pʁɑ̃ pɥi fɛ su.ʁiʁ u ʁe.fle.ʃiʁ/', 'luh ZEUGM sür-PRAHⁿ | pwee feh soo-REER | oo ray-flay-SHEER', ['effet', 'zeugme'], FCVDR),
  sent(1265, 'Selon le TLFi, le mot a aussi un sens grammatical : un élément sous-entendu.', 'According to the TLFi, the word also has a grammatical sense: an element left understood.', '/sə.lɔ̃ lə te.ɛl.ɛf.i lə mo a o.si œ̃ sɑ̃s ɡʁa.ma.ti.kal œ̃.ne.le.mɑ̃ su.zɑ̃.tɑ̃.dy/', 'suh-lohⁿ luh tay-el-ef-EE | luh MOH a oh-see uhⁿ sahⁿss gra-ma-tee-KAL | uhⁿ-nay-lay-MAHⁿ soo-zahⁿ-tahⁿ-DÜ', ['dictionnaires', 'zeugme']),
  sent(1266, 'Le ciel était gris et la mer immobile.', 'The sky was grey and the sea still.', '/lə sjɛl e.tɛ ɡʁi e la mɛʁ i.mɔ.bil/', 'luh SYEL ay-teh GREE | ay la MEHR ee-mo-BEEL', ['exemple', 'zeugme-grammatical']),
  phrase(1267, 'un zeugme', 'a zeugma (also written zeugma in French)', '/œ̃ zøɡm/', 'uhⁿ ZEUGM', ['mot', 'zeugme']),
  sent(1268, 'Quand les dictionnaires divergent, décris ce que tu vois et dis l’effet.', 'When the dictionaries disagree, describe what you see and say the effect.', '/kɑ̃ le dik.sjɔ.nɛʁ di.vɛʁʒ de.kʁi sə kə ty vwa e di le.fɛ/', 'kahⁿ lay deek-syo-NEHR dee-VEHRZH | day-KREE suh kuh tü VWA | ay dee lay-FEH', ['methode', 'dictionnaires'], FCVDR),
];

/* ── ACT 7 · L’HYPALLAGE ─────────────────────────────────────────────────── */

export const ACT7_ROWS: Row[] = [
  phrase(1269, 'ce marchand accoudé sur son comptoir avide', 'this merchant leaning on his greedy counter', '/sə maʁ.ʃɑ̃ a.ku.de syʁ sɔ̃ kɔ̃.twa.ʁa.vid/', 'suh mar-SHAHⁿ a-koo-DAY | sür sohⁿ kohⁿ-twa-ra-VEED', ['citation', 'hugo', 'hypallage']),
  sent(1270, 'Le comptoir n’est pas avide : c’est le marchand.', 'The counter is not greedy: the merchant is.', '/lə kɔ̃.twaʁ nɛ pa.za.vid sɛ lə maʁ.ʃɑ̃/', 'luh kohⁿ-TWAR neh pa-za-VEED | seh luh mar-SHAHⁿ', ['effet', 'hypallage']),
  sent(1271, 'L’hypallage prête à un mot ce qui convient à un autre de la phrase.', 'Hypallage lends a word what belongs to another word in the sentence.', '/li.pa.laʒ pʁɛ.ta œ̃ mo sə ki kɔ̃.vjɛ̃.ta œ̃.notʁ də la fʁaz/', 'lee-pa-LAZH preh-ta uhⁿ MOH | suh kee kohⁿ-vyehⁿ-ta uhⁿ-NOHTR duh la FRAHZ', ['regle', 'hypallage'], FC,
    rule('« Son comptoir avide. » Qui est avide ?', 'Le marchand. L’adjectif est passé de l’homme à l’objet. L’hypallage prête à un mot ce qui convient à un autre de la phrase.')),
  sent(1272, 'L’avidité déborde de l’homme sur les choses qu’il touche.', 'The greed spills over from the man onto the things he touches.', '/la.vi.di.te de.bɔʁd də lɔm syʁ le ʃoz kil tuʃ/', 'la-vee-dee-TAY day-BORD | duh LOMM sür lay SHOHZ keel TOOSH', ['effet', 'hypallage'], FCVDR),
  sent(1273, 'Il fumait une pipe pensive.', 'He smoked a pensive pipe.', '/il fy.mɛ yn pip pɑ̃.siv/', 'eel fü-MEH | ün peep pahⁿ-SEEV', ['exemple', 'hypallage']),
  sent(1274, 'Il buvait un café distrait.', 'He was drinking an absent-minded coffee.', '/il by.vɛ œ̃ ka.fe dis.tʁɛ/', 'eel bü-VEH | uhⁿ ka-FAY dees-TREH', ['exemple', 'hypallage']),
  sent(1275, 'L’hypallage déplace un adjectif sans brouiller le sens.', 'Hypallage moves an adjective without blurring the meaning.', '/li.pa.laʒ de.plas œ̃.nad.ʒɛk.tif sɑ̃ bʁu.je lə sɑ̃s/', 'lee-pa-LAZH day-PLASS uhⁿ-nad-zhek-TEEF | sahⁿ broo-YAY luh SAHⁿSS', ['regle', 'hypallage']),
  sent(1276, 'Fontanier doutait de bien des hypallages que d’autres croyaient voir.', 'Fontanier doubted many of the hypallages that others thought they saw.', '/fɔ̃.ta.nje du.tɛ də bjɛ̃ de.zi.pa.laʒ kə dotʁ kʁwa.jɛ vwaʁ/', 'fohⁿ-ta-NYAY doo-TEH | duh byehⁿ day-zee-pa-LAZH | kuh DOHTR krwa-yeh VWAR', ['dictionnaires', 'hypallage']),
  phrase(1277, 'une hypallage', 'a hypallage (feminine; sometimes masculine)', '/y.ni.pa.laʒ/', 'ü-nee-pa-LAZH', ['mot', 'hypallage']),
  sent(1278, 'Le déplacement serre en deux mots ce qu’une description étalerait.', 'The shift packs into two words what a description would spread out.', '/lə de.plas.mɑ̃ sɛʁ ɑ̃ dø mo sə kyn dɛs.kʁip.sjɔ̃ e.tal.ʁɛ/', 'luh day-plass-MAHⁿ SEHR | ahⁿ deu MOH | suh kün des-kreep-SYOHⁿ ay-tal-REH', ['effet', 'hypallage']),
  sent(1279, 'La personnification fait agir une chose ; l’hypallage lui prête le trait d’un voisin.', 'Personification makes a thing act; hypallage lends it a neighbour’s trait.', '/la pɛʁ.sɔ.ni.fi.ka.sjɔ̃ fɛ.ta.ʒiʁ yn ʃoz li.pa.laʒ lɥi pʁɛt lə tʁɛ dœ̃ vwa.zɛ̃/', 'la pehr-so-nee-fee-ka-SYOHⁿ feh-ta-ZHEER ün SHOHZ | lee-pa-LAZH lwee PRET | luh TREH duhⁿ vwa-ZEHⁿ', ['regle', 'distinction', 'piege'], FCVDR),
];

/* ── ACT 8 · MÉTONYMIE ET SYNECDOQUE ─────────────────────────────────────── */

export const ACT8_ROWS: Row[] = [
  sent(1280, 'Toute la salle s’est levée.', 'The whole hall stood up.', '/tut la sal sɛ lə.ve/', 'toot la SAL | seh luh-VAY', ['exemple', 'metonymie']),
  sent(1281, 'Elle a lu tout Hugo cet été.', 'She read all of Hugo this summer.', '/ɛ.la ly tu y.ɡo sɛ.te.te/', 'eh-la lü too ü-GOH | seh-tay-TAY', ['exemple', 'metonymie']),
  sent(1282, 'On voyait une voile à l’horizon.', 'A sail could be seen on the horizon.', '/ɔ̃ vwa.jɛ yn vwal a lɔ.ʁi.zɔ̃/', 'ohⁿ vwa-YEH | ün VWAL | a lo-ree-ZOHⁿ', ['exemple', 'synecdoque']),
  sent(1283, 'La métonymie nomme une chose par une autre qui lui est liée.', 'Metonymy names a thing by another thing linked to it.', '/la me.tɔ.ni.mi nɔm yn ʃoz paʁ y.notʁ ki lɥi ɛ lje/', 'la may-to-nee-MEE NOMM ün SHOHZ | par ü-NOHTR kee lwee eh LYAY', ['regle', 'metonymie'], FC,
    rule('« Toute la salle s’est levée. » La salle a-t-elle des jambes ?', 'Non : le lieu nomme les gens qui l’occupent. La métonymie nomme une chose par une autre qui lui est liée.')),
  sent(1284, 'La synecdoque prend la partie pour le tout, ou le tout pour la partie.', 'Synecdoche takes the part for the whole, or the whole for the part.', '/la si.nɛk.dɔk pʁɑ̃ la paʁ.ti puʁ lə tu u lə tu puʁ la paʁ.ti/', 'la see-nek-DOK prahⁿ la par-TEE poor luh TOO | oo luh too poor la par-TEE', ['regle', 'synecdoque'], FC,
    rule('« Une voile à l’horizon. » Que voit-on vraiment ?', 'Un navire, dont on ne voit d’abord que la voile. La synecdoque prend la partie pour le tout, ou le tout pour la partie.')),
  sent(1285, 'Il y avait trois bouches à nourrir à la maison.', 'There were three mouths to feed at home.', '/il i a.vɛ tʁwa buʃ a nu.ʁiʁ a la mɛ.zɔ̃/', 'eel ee a-VEH trwa BOOSH | a noo-REER a la meh-ZOHⁿ', ['exemple', 'synecdoque']),
  sent(1286, 'Le quartier tout entier a signé la pétition.', 'The whole neighbourhood signed the petition.', '/lə kaʁ.tje tu.tɑ̃.tje a si.ɲe la pe.ti.sjɔ̃/', 'luh kar-TYAY too-tahⁿ-TYAY | a see-NYAY la pay-tee-SYOHⁿ', ['exemple', 'metonymie']),
  sent(1287, 'La métaphore saute vers une image ; la métonymie glisse vers un voisin.', 'Metaphor leaps to an image; metonymy slides to a neighbour.', '/la me.ta.fɔʁ sot vɛʁ y.ni.maʒ la me.tɔ.ni.mi ɡlis vɛʁ œ̃ vwa.zɛ̃/', 'la may-ta-FOR soht vehr ü-nee-MAZH | la may-to-nee-MEE GLEESS vehr uhⁿ vwa-ZEHⁿ', ['regle', 'distinction'], FCVDR),
  sent(1288, 'Dire « une bouche à nourrir », c’est réduire une personne à sa faim.', 'Saying “a mouth to feed” reduces a person to their hunger.', '/diʁ yn buʃ a nu.ʁiʁ sɛ ʁe.dɥiʁ yn pɛʁ.sɔn a sa fɛ̃/', 'deer ün BOOSH a noo-REER | seh ray-DWEER ün pehr-SONN | a sa FEHⁿ', ['effet', 'synecdoque'], FCVDR),
  phrase(1289, 'une métonymie', 'a metonymy', '/yn me.tɔ.ni.mi/', 'ün may-to-nee-MEE', ['mot', 'metonymie']),
  phrase(1290, 'une synecdoque', 'a synecdoche', '/yn si.nɛk.dɔk/', 'ün see-nek-DOK', ['mot', 'synecdoque']),
  sent(1291, 'La métonymie suit des liens réels : le lieu, l’auteur, le contenant, l’objet.', 'Metonymy follows real links: the place, the author, the container, the object.', '/la me.tɔ.ni.mi sɥi de ljɛ̃ ʁe.ɛl lə ljø lo.tœʁ lə kɔ̃t.nɑ̃ lɔb.ʒɛ/', 'la may-to-nee-MEE swee day lyehⁿ ray-EL | luh LYEU | loh-TUHR | luh kohⁿt-NAHⁿ | lob-ZHEH', ['regle', 'metonymie']),
];

/* ── ACT 9 · ALLITÉRATION ET ASSONANCE ──────────────────────────────────── */

export const ACT9_ROWS: Row[] = [
  sent(1292, 'Pour qui sont ces serpents qui sifflent sur vos têtes ?', 'For whom are those snakes hissing over your heads?', '/puʁ ki sɔ̃ se sɛʁ.pɑ̃ ki sifl syʁ vo tɛt/', 'poor kee sohⁿ say sehr-PAHⁿ | kee SEEFL sür voh TET', ['citation', 'racine', 'allitération']),
  sent(1293, 'Le son [s], cinq fois répété, fait entendre le sifflement.', 'The [s] sound, repeated five times, makes you hear the hissing.', '/lə sɔ̃ ɛs sɛ̃k fwa ʁe.pe.te fɛ.tɑ̃.tɑ̃dʁ lə si.flə.mɑ̃/', 'luh SOHⁿ ESS | sehⁿk FWA ray-pay-TAY | feh-tahⁿ-TAHⁿDR luh see-fluh-MAHⁿ', ['effet', 'allitération']),
  sent(1294, 'L’allitération répète une consonne ; l’assonance, une voyelle.', 'Alliteration repeats a consonant; assonance, a vowel.', '/la.li.te.ʁa.sjɔ̃ ʁe.pɛ.tyn kɔ̃.sɔn la.sɔ.nɑ̃s yn vwa.jɛl/', 'la-lee-tay-ra-SYOHⁿ ray-peh-tün kohⁿ-SONN | la-so-NAHⁿSS | ün vwa-YEL', ['regle', 'sons'], FC,
    rule('Dans « Les sanglots longs des violons », quelle voyelle revient ?', 'Le son [ɔ̃] de « longs » et « violons » : c’est une assonance. L’allitération répète une consonne ; l’assonance, une voyelle.')),
  sent(1295, 'Les sons [ɔ̃] s’étirent comme la plainte des violons.', 'The [ɔ̃] sounds draw out like the violins’ lament.', '/le sɔ̃ ɔ̃ se.tiʁ kɔm la plɛ̃t de vjɔ.lɔ̃/', 'lay SOHⁿ OHⁿ | say-TEER | kom la PLEHⁿT day vyo-LOHⁿ', ['effet', 'assonance'], FCVDR),
  sent(1296, 'Un son ne veut rien dire seul : il renforce ce que disent les mots.', 'A sound means nothing on its own: it reinforces what the words say.', '/œ̃ sɔ̃ nə vø ʁjɛ̃ diʁ sœl il ʁɑ̃.fɔʁs sə kə diz le mo/', 'uhⁿ SOHⁿ nuh veu ryehⁿ deer SUHL | eel rahⁿ-FORSS | suh kuh deez lay MOH', ['regle', 'piege'], FCVDR),
  sent(1297, 'Deux mots qui commencent par la même lettre ne font pas une allitération.', 'Two words starting with the same letter do not make an alliteration.', '/dø mo ki kɔ.mɑ̃s paʁ la mɛm lɛtʁ nə fɔ̃ pa.zy.na.li.te.ʁa.sjɔ̃/', 'deu MOH kee ko-MAHⁿSS | par la mem LETR | nuh fohⁿ pa-zü-na-lee-tay-ra-SYOHⁿ', ['regle', 'piege']),
  sent(1298, 'Le vent violent vrillait les volets.', 'The violent wind was twisting the shutters.', '/lə vɑ̃ vjɔ.lɑ̃ vʁi.jɛ le vɔ.lɛ/', 'luh VAHⁿ vyo-LAHⁿ | vree-YEH lay vo-LEH', ['exemple', 'allitération']),
  sent(1299, 'Tout est doux, tout est lourd, tout se tait autour.', 'Everything is soft, everything is heavy, everything falls silent around.', '/tu.tɛ du tu.tɛ luʁ tu sə tɛ o.tuʁ/', 'too-teh DOO | too-teh LOOR | too suh teh oh-TOOR', ['exemple', 'assonance']),
  phrase(1300, 'une allitération en [s]', 'an alliteration on [s]', '/y.na.li.te.ʁa.sjɔ̃ ɑ̃.nɛs/', 'ü-na-lee-tay-ra-SYOHⁿ ahⁿ-NESS', ['mot', 'allitération']),
  phrase(1301, 'une assonance', 'an assonance', '/y.na.sɔ.nɑ̃s/', 'ü-na-so-NAHⁿSS', ['mot', 'assonance']),
  sent(1302, 'À voix haute, l’oreille confirme ce que l’œil a repéré.', 'Read aloud, the ear confirms what the eye has spotted.', '/a vwa ot lɔ.ʁɛj kɔ̃.fiʁm sə kə lœj a ʁə.pe.ʁe/', 'a vwa OHT | lo-REY kohⁿ-FEERM | suh kuh LUHY a ruh-pay-RAY', ['methode', 'sons']),
  sent(1303, 'Compte les sons dans le texte écrit, pas seulement à l’oreille.', 'Count the sounds in the written text, not only by ear.', '/kɔ̃t le sɔ̃ dɑ̃ lə tɛk.ste.kʁi pa sœl.mɑ̃ a lɔ.ʁɛj/', 'kohⁿt lay SOHⁿ | dahⁿ luh tek-stay-KREE | pa suhl-MAHⁿ a lo-REY', ['methode', 'sons'], FCVDR),
];

/* ── ACT 10 · LE RYTHME ──────────────────────────────────────────────────── */

export const ACT10_ROWS: Row[] = [
  sent(1304, 'Le silence éternel de ces espaces infinis m’effraye.', 'The eternal silence of these infinite spaces frightens me.', '/lə si.lɑ̃s e.tɛʁ.nɛl də se.zɛs.pa.sɛ̃.fi.ni mɛ.fʁɛj/', 'luh see-LAHⁿSS ay-tehr-NEL | duh say-zes-pa-sehⁿ-fee-NEE | meh-FREY', ['citation', 'pascal', 'cadence'], RECO),
  sent(1305, 'La phrase s’étend longuement, puis tombe sur un verbe bref.', 'The sentence stretches out at length, then falls on a short verb.', '/la fʁaz se.tɑ̃ lɔ̃ɡ.mɑ̃ pɥi tɔ̃b syʁ œ̃ vɛʁb bʁɛf/', 'la FRAHZ say-TAHⁿ lohⁿg-MAHⁿ | pwee TOHⁿB | sür uhⁿ vehrb BREF', ['effet', 'cadence']),
  sent(1306, 'Un rythme ternaire groupe trois éléments.', 'A ternary rhythm groups three elements.', '/œ̃ ʁitm tɛʁ.nɛʁ ɡʁup tʁwa.ze.le.mɑ̃/', 'uhⁿ REETM tehr-NEHR | GROOP trwa-zay-lay-MAHⁿ', ['regle', 'ternaire'], FC,
    rule('« Il faut lire, relire, et lire encore. » Combien de temps forts ?', 'Trois : un rythme ternaire, qui donne une impression d’achèvement. Un rythme ternaire groupe trois éléments.')),
  sent(1307, 'La cadence majeure finit sur le membre le plus long ; la mineure, sur le plus court.', 'A major cadence ends on the longest member; a minor one, on the shortest.', '/la ka.dɑ̃s ma.ʒœʁ fi.ni syʁ lə mɑ̃bʁ lə ply lɔ̃ la mi.nœʁ syʁ lə ply kuʁ/', 'la ka-DAHⁿSS ma-ZHUHR | fee-NEE sür luh MAHⁿBR luh plü LOHⁿ | la mee-NUHR | sür luh plü KOOR', ['regle', 'cadence'], FC,
    rule('Une longue phrase qui finit sur « m’effraye ». Quelle cadence ?', 'Une cadence mineure : le dernier membre est le plus court, et il tombe. La cadence majeure finit sur le membre le plus long ; la mineure, sur le plus court.')),
  sent(1308, 'La chute brève fait entendre l’effroi.', 'The short fall makes the dread audible.', '/la ʃyt bʁɛv fɛ.tɑ̃.tɑ̃dʁ le.fʁwa/', 'la shüt BREV | feh-tahⁿ-TAHⁿDR lay-FRWA', ['effet', 'cadence'], FCVDR),
  sent(1309, 'Il faut lire, relire, et lire encore.', 'You have to read, reread, and read again.', '/il fo liʁ ʁə.liʁ e li.ʁɑ̃.kɔʁ/', 'eel foh LEER | ruh-LEER | ay lee-rahⁿ-KOR', ['exemple', 'ternaire']),
  sent(1310, 'Une phrase longue peut imiter l’étendue qu’elle décrit.', 'A long sentence can imitate the expanse it describes.', '/yn fʁaz lɔ̃ɡ pø i.mi.te le.tɑ̃.dy kɛl de.kʁi/', 'ün frahz LOHⁿG | peu ee-mee-TAY lay-tahⁿ-DÜ | kel day-KREE', ['effet', 'rythme']),
  phrase(1311, 'un rythme ternaire', 'a ternary rhythm (in three beats)', '/œ̃ ʁitm tɛʁ.nɛʁ/', 'uhⁿ REETM tehr-NEHR', ['mot', 'ternaire']),
  phrase(1312, 'une cadence mineure', 'a minor (falling) cadence', '/yn ka.dɑ̃s mi.nœʁ/', 'ün ka-DAHⁿSS mee-NUHR', ['mot', 'cadence']),
  sent(1313, 'Compte les syllabes de chaque membre avant de parler de cadence.', 'Count the syllables of each member before speaking of cadence.', '/kɔ̃t le si.lab də ʃak mɑ̃bʁ a.vɑ̃ də paʁ.le də ka.dɑ̃s/', 'kohⁿt lay see-LAB | duh shak MAHⁿBR | a-vahⁿ duh par-LAY duh ka-DAHⁿSS', ['methode', 'cadence']),
  sent(1314, 'Le rythme n’est pas un ornement : il fait sentir le sens.', 'Rhythm is not an ornament: it makes the meaning felt.', '/lə ʁitm nɛ pa.zœ̃.nɔʁ.nə.mɑ̃ il fɛ sɑ̃.tiʁ lə sɑ̃s/', 'luh REETM neh pa-zuhⁿ-nor-nuh-MAHⁿ | eel feh sahⁿ-TEER luh SAHⁿSS', ['regle', 'rythme'], FCVDR),
];

/* ── ACT 11 · LES EFFETS DE RUPTURE ──────────────────────────────────────── */

export const ACT11_ROWS: Row[] = [
  sent(1315, 'Le nez de Cléopatre, s’il eût été plus court, toute la face de la terre auroit changé.', 'Cleopatra’s nose, had it been shorter, the whole face of the earth would have changed.', '/lə ne də kle.ɔ.patʁ si.ly.te.te ply kuʁ tut la fas də la tɛʁ o.ʁɛ ʃɑ̃.ʒe/', 'luh NAY duh klay-o-PATR | see-lü-tay-TAY plü KOOR | toot la FASS duh la TEHR | oh-reh shahⁿ-ZHAY', ['citation', 'pascal', 'anacoluthe'], RECO),
  sent(1316, 'La phrase commence par un nez et finit par la face de la terre.', 'The sentence starts with a nose and ends with the face of the earth.', '/la fʁaz kɔ.mɑ̃s paʁ œ̃ ne e fi.ni paʁ la fas də la tɛʁ/', 'la FRAHZ ko-MAHⁿSS | par uhⁿ NAY | ay fee-NEE par la FASS duh la TEHR', ['effet', 'anacoluthe']),
  sent(1317, 'L’anacoluthe rompt la construction attendue.', 'Anacoluthon breaks the expected construction.', '/la.na.kɔ.lyt ʁɔ̃ la kɔ̃s.tʁyk.sjɔ̃ a.tɑ̃.dy/', 'la-na-ko-LÜT ROHⁿ | la kohⁿs-trük-SYOHⁿ a-tahⁿ-DÜ', ['regle', 'anacoluthe'], FC,
    rule('« Le nez de Cléopatre, […] toute la face de la terre auroit changé. » Où est le sujet du verbe ?', 'Ce n’est pas le nez : la phrase change de route en chemin. L’anacoluthe rompt la construction attendue.')),
  sent(1318, 'La rupture fait sentir la disproportion entre la cause et l’effet.', 'The break makes you feel the disproportion between cause and effect.', '/la ʁyp.tyʁ fɛ sɑ̃.tiʁ la dis.pʁɔ.pɔʁ.sjɔ̃ ɑ̃tʁ la koz e le.fɛ/', 'la rüp-TÜR feh sahⁿ-TEER | la dees-pro-por-SYOHⁿ | ahⁿtr la KOHZ ay lay-FEH', ['effet', 'anacoluthe'], FCVDR),
  sent(1319, 'L’asyndète supprime les mots de liaison entre les propositions.', 'Asyndeton removes the linking words between clauses.', '/la.zɛ̃.dɛt sy.pʁim le mo də lje.zɔ̃ ɑ̃tʁ le pʁɔ.pɔ.zi.sjɔ̃/', 'la-zehⁿ-DET sü-PREEM | lay MOH duh lyay-ZOHⁿ | ahⁿtr lay pro-po-zee-SYOHⁿ', ['regle', 'asyndete'], FCVDR),
  sent(1320, 'Il entre, il regarde, il se tait.', 'He comes in, he looks, he falls silent.', '/i.lɑ̃tʁ il ʁə.ɡaʁd il sə tɛ/', 'ee-LAHⁿTR | eel ruh-GARD | eel suh TEH', ['exemple', 'asyndete']),
  sent(1321, 'Sans liaison, les faits se heurtent et le lecteur fait les liens.', 'With no linking words, the facts collide and the reader makes the links.', '/sɑ̃ lje.zɔ̃ le fɛ sə œʁt e lə lɛk.tœʁ fɛ le ljɛ̃/', 'sahⁿ lyay-ZOHⁿ | lay FEH suh UHRT | ay luh lek-TUHR feh lay LYEHⁿ', ['effet', 'asyndete']),
  sent(1322, 'Le rejet fait déborder la phrase sur le vers suivant et met un mot en relief.', 'A rejet carries the sentence over onto the next line and throws one word into relief.', '/lə ʁə.ʒɛ fɛ de.bɔʁ.de la fʁaz syʁ lə vɛʁ sɥi.vɑ̃ e mɛ œ̃ mo ɑ̃ ʁə.ljɛf/', 'luh ruh-ZHEH feh day-bor-DAY la FRAHZ | sür luh vehr swee-VAHⁿ | ay meh uhⁿ MOH ahⁿ ruh-LYEF', ['regle', 'rejet'], FCVDR),
  sent(1323, 'Une phrase nominale arrête le mouvement.', 'A verbless sentence stops the movement.', '/yn fʁaz nɔ.mi.nal a.ʁɛt lə muv.mɑ̃/', 'ün FRAHZ no-mee-NAL | a-RET luh moov-MAHⁿ', ['regle', 'phrase-nominale']),
  phrase(1324, 'un effet de rupture', 'an effect of rupture, a deliberate break', '/œ̃.ne.fɛ də ʁyp.tyʁ/', 'uhⁿ-nay-FEH duh rüp-TÜR', ['mot', 'rupture']),
  phrase(1325, 'une anacoluthe', 'an anacoluthon (a broken construction)', '/y.na.na.kɔ.lyt/', 'ü-na-na-ko-LÜT', ['mot', 'anacoluthe']),
];

/* ── ACT 12 · TON COMMENTAIRE ────────────────────────────────────────────── */

export const ACT12_ROWS: Row[] = [
  sent(1326, 'Tout le sonnet prépare un dernier vers qui le retourne.', 'The whole sonnet prepares a last line that turns it over.', '/tu lə sɔ.nɛ pʁe.paʁ œ̃ dɛʁ.nje vɛʁ ki lə ʁə.tuʁn/', 'too luh so-NEH pray-PAR | uhⁿ dehr-nyay VEHR | kee luh ruh-TOORN', ['commentaire', 'dormeur']),
  sent(1327, 'Le rejet de « Dort » installe le sommeil, puis le doute.', 'The enjambed “Dort” sets up sleep, then doubt.', '/lə ʁə.ʒɛ də dɔʁ ɛ̃s.tal lə sɔ.mɛj pɥi lə dut/', 'luh ruh-ZHEH duh DOR | ehⁿs-TAL luh so-MEY | pwee luh DOOT', ['commentaire', 'rejet']),
  sent(1328, 'Je propose de lire ce poème comme un piège tendu au lecteur.', 'I suggest reading this poem as a trap set for the reader.', '/ʒə pʁɔ.poz də liʁ sə pɔ.ɛm kɔ.mœ̃ pjɛʒ tɑ̃.dy o lɛk.tœʁ/', 'zhuh pro-POHZ duh LEER | suh po-EMM | ko-muhⁿ PYEZH tahⁿ-DÜ oh lek-TUHR', ['commentaire', 'introduction']),
  sent(1329, 'On peut aussi y entendre une berceuse funèbre.', 'One can also hear in it a funeral lullaby.', '/ɔ̃ pø o.si i ɑ̃.tɑ̃dʁ yn bɛʁ.søz fy.nɛbʁ/', 'ohⁿ peu oh-SEE | ee ahⁿ-TAHⁿDR | ün behr-SEUZ fü-NEBR', ['commentaire', 'interpretation']),
  sent(1330, 'Cette lecture s’appuie sur trois indices du texte.', 'This reading rests on three clues in the text.', '/sɛt lɛk.tyʁ sa.pɥi syʁ tʁwa.zɛ̃.dis dy tɛkst/', 'set lek-TÜR sa-PWEE | sür trwa-zehⁿ-DEESS dü TEKST', ['commentaire', 'methode'], FCVDR),
  sent(1331, 'Le vers final change le sommeil en mort.', 'The final line turns sleep into death.', '/lə vɛʁ fi.nal ʃɑ̃ʒ lə sɔ.mɛj ɑ̃ mɔʁ/', 'luh vehr fee-NAL | SHAHⁿZH luh so-MEY ahⁿ MOR', ['commentaire', 'chute']),
  sent(1332, 'Les couleurs vives contrastent avec la pâleur du soldat.', 'The bright colours contrast with the soldier’s pallor.', '/le ku.lœʁ viv kɔ̃.tʁast a.vɛk la pa.lœʁ dy sɔl.da/', 'lay koo-luhr VEEV | kohⁿ-TRAST a-vek la pa-LUHR dü sol-DA', ['commentaire', 'antithese']),
  sent(1333, '« Il dort » revient, et la répétition devient inquiétante.', '“He sleeps” comes back, and the repetition becomes disturbing.', '/il dɔʁ ʁə.vjɛ̃ e la ʁe.pe.ti.sjɔ̃ də.vjɛ̃.tɛ̃.kje.tɑ̃t/', 'eel DOR ruh-VYEHⁿ | ay la ray-pay-tee-SYOHⁿ | duh-vyehⁿ-tehⁿ-kyay-TAHⁿT', ['commentaire', 'repetition']),
  sent(1334, 'Je cite peu, mais je cite juste.', 'I quote little, but I quote exactly.', '/ʒə sit pø mɛ ʒə sit ʒyst/', 'zhuh seet PEU | meh zhuh seet ZHÜST', ['methode', 'citation-courte'], FCVDR),
  sent(1335, 'L’effet tient à ce que le lecteur comprend trop tard.', 'The effect lies in what the reader understands too late.', '/le.fɛ tjɛ̃ a sə kə lə lɛk.tœʁ kɔ̃.pʁɑ̃ tʁo taʁ/', 'lay-FEH TYEHⁿ | a suh kuh luh lek-TUHR | kohⁿ-PRAHⁿ troh TAR', ['commentaire', 'chute']),
  sent(1336, 'Une interprétation se défend avec les mots du texte.', 'An interpretation is defended with the words of the text.', '/y.nɛ̃.tɛʁ.pʁe.ta.sjɔ̃ sə de.fɑ̃ a.vɛk le mo dy tɛkst/', 'ü-nehⁿ-tehr-pray-ta-SYOHⁿ | suh day-FAHⁿ | a-vek lay MOH dü TEKST', ['methode', 'interpretation'], FCVDR),
  sent(1337, 'Nature, berce-le chaudement : il a froid.', 'Nature, cradle him warmly: he is cold.', '/na.tyʁ bɛʁs lə ʃod.mɑ̃ i.la fʁwa/', 'na-TÜR | BEHRSS luh shohd-MAHⁿ | ee-la FRWA', ['citation', 'rimbaud']),
  sent(1338, 'Il a deux trous rouges au côté droit.', 'He has two red holes in his right side.', '/i.la dø tʁu ʁuʒ o ko.te dʁwa/', 'ee-la deu troo ROOZH | oh ko-tay DRWA', ['citation', 'rimbaud', 'chute']),
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §H. THE ROW INDEX
 * ══════════════════════════════════════════════════════════════════════════ */

export const ROWS_BY_ACT: Row[][] = [
  ACT1_ROWS, ACT2_ROWS, ACT3_ROWS, ACT4_ROWS, ACT5_ROWS, ACT6_ROWS,
  ACT7_ROWS, ACT8_ROWS, ACT9_ROWS, ACT10_ROWS, ACT11_ROWS, ACT12_ROWS,
];
export const ALL_ROWS: Row[] = ROWS_BY_ACT.flat();

export const dicteeFor = (act: number): string[] =>
  (ROWS_BY_ACT[act - 1] ?? []).filter((r) => (r.drills as string[]).includes('dictation')).map((r) => r.id);

/* ══════════════════════════════════════════════════════════════════════════
 *  §I. THE ANCHOR TEXTS
 *
 *  Original, written for the lesson: the talks, notes and drafts of « les
 *  Mardis du texte », an invented reading circle at the invented
 *  bibliothèque des Tilleuls. Every quotation inside them is verified (§A.7)
 *  and quoted word for word. Verse is printed with line breaks.
 * ══════════════════════════════════════════════════════════════════════════ */

/** Act 1: Léa’s draft and Mamadou’s note in the margin. */
export const BROUILLON_TEXT =
  'Le brouillon de Léa. « Dans la scène des aveux du Cid, Chimène dit à Rodrigue : “Va, je ne te hais point.” Il y a une litote. Dès l’acte I, Don Diègue s’écrie : “va, cours, vole, et nous venge”. Il y a une gradation. Enfin, l’auteur emploie beaucoup d’images. » '
  + 'La note de Mamadou, dans la marge. « Léa, tout est juste, et rien n’est dit. Tu as trouvé les figures, tu les as bien nommées : c’est le travail de l’enquêteur, pas encore celui du lecteur. Ton correcteur, lui, voudra savoir pourquoi Corneille fait parler Chimène ainsi. Une litote, d’accord ; mais que se passe-t-il quand une jeune femme, devant l’homme qui a tué son père, nie la haine au lieu d’avouer l’amour ? Que comprend Rodrigue ? Que comprend la salle ? Voilà ta vraie phrase. '
  + 'Fais toujours les trois gestes : repère, nomme, puis dis l’effet en une phrase, avec un mot du texte pour preuve. Et n’aie pas peur d’une lecture personnelle : si les mots la soutiennent, elle se défend, même si ton voisin en propose une autre. Ce que je ne veux plus lire, c’est « l’auteur emploie beaucoup d’images ». Lesquelles ? Pour faire quoi ? Mardi prochain, on reprend la litote, mot par mot. »';

/** Act 2: Mamadou on Chimène’s litote (Le Cid III, 4). */
export const LITOTE_TEXT =
  'Mardi, Mamadou ouvre Le Cid à l’acte III. Rodrigue a tué en duel le père de Chimène, et il vient chez elle lui offrir son épée : qu’elle le tue, plutôt que de le haïr. Il dit :\n'
  + '« Ton malheureux amant aura bien moins de peine\nÀ mourir par ta main qu’à vivre avec ta haine. »\n'
  + 'Et Chimène répond : « Va, je ne te hais point. »\n'
  + '« Écoutez ce qu’elle ne dit pas, commence Mamadou. L’honneur lui interdit de dire “je t’aime” à l’homme qui a tué son père. Alors elle nie le contraire : elle ne le hait pas. Sur le papier, c’est peu. Dans la salle, tout le monde entend l’aveu. C’est cela, une litote : on dit moins pour faire entendre plus. »\n'
  + 'Inès proteste : « Et si elle voulait seulement dire qu’elle ne le déteste pas ? » Mamadou sourit. « Regarde la réplique suivante. Rodrigue lui répond “Tu le dois”, elle répond “Je ne puis”. Elle ne peut pas le haïr. La retenue n’efface rien : elle laisse deviner une passion que les mots n’osent pas porter. Ta lecture plus froide se discute, mais les trois répliques penchent vers l’aveu. »\n'
  + 'Hugues note dans son carnet : « Trois mots sobres, un cri dessous. »';

/** Act 3: Hugues reads Voltaire’s battle (Candide, chapter III). */
export const CANDIDE_TEXT =
  'Le mardi suivant, Hugues lit à voix haute le début du chapitre III de Candide, où le héros assiste à une bataille : « Rien n’était si beau, si leste, si brillant, si bien ordonné que les deux armées. » Puis il s’arrête. « On croirait un compte rendu de parade. »\n'
  + '« Continue », dit Mamadou. La musique militaire forme « une harmonie telle qu’il n’y en eut jamais en enfer » ; des milliers d’hommes meurent ; Candide se cache « pendant cette boucherie héroïque ». Plus loin, un village a été brûlé « selon les lois du droit public », et ceux qui l’ont fait sont appelés des héros.\n'
  + '« Voltaire ne ment pas, explique Mamadou. Il emploie les mots de l’éloge, et il place à côté les faits qui les démentent. Le mot “héros” dit la gloire ; les femmes égorgées et les vieillards criblés de coups disent le contraire. Le lecteur fait le calcul lui-même, et c’est pour cela que l’indignation dure : on la lui a laissée. Le mot isolé qui dit son contraire, c’est l’antiphrase. L’ironie, c’est l’attitude de tout le chapitre. »\n'
  + 'Léa demande si ce n’est pas trop évident. « Ça l’est pour nous, répond-il. Sans le contexte, l’ironie ne se voit pas. Ici, il suffit d’un détail atroce pour retourner tout l’éloge. »';

/** Act 4: Inès on Don Diègue’s gradation (Le Cid I, 5). */
export const GRADATION_TEXT =
  'Inès a préparé la scène 5 de l’acte I du Cid. Don Diègue, trop vieux pour se battre, vient d’être giflé par le père de Chimène. Il confie sa vengeance à son fils et finit sa tirade par ce vers :\n'
  + '« Je vais les déplorer : va, cours, vole, et nous venge. »\n'
  + '« J’avais écrit “gradation”, dit-elle, et je m’étais arrêtée. Puis j’ai regardé l’ordre. Aller, c’est se mettre en route ; courir, c’est aller vite ; voler, c’est aller plus vite que la course. Chaque verbe dépasse le précédent. Et le dernier change de nature : venger. Toute la vitesse accumulée se jette sur ce mot. »\n'
  + 'Mamadou approuve. « Une gradation se lit par son point d’arrivée. Ici, le vieil homme ne peut plus courir : il court par la bouche de son fils, et l’ordre devient urgence. Remarque aussi le rythme : quatre impératifs brefs, presque sans liaison, qui imitent l’élan qu’il réclame. »\n'
  + 'Hugues ajoute qu’on avait vu la gradation au service d’un discours, dans une leçon sur la persuasion. « Oui, répond Mamadou. Là, on demandait si chaque marche était prouvée. Ici, on demande ce qu’elle fait sentir. »';

/** Act 5: Léa on L’Avare’s chiasmus. */
export const CHIASME_TEXT =
  'Léa a choisi une scène de L’Avare, à l’acte III. Harpagon, l’avare, prépare un souper et veut dépenser le moins possible. Valère, qui veut lui plaire, sermonne le cuisinier : « il faut manger pour vivre, et non pas vivre pour manger ». Harpagon, ravi, veut répéter la belle sentence, et la retourne : « Il faut vivre pour manger, et non pas manger pour vi… Non, ce n’est pas cela. »\n'
  + '« Chez Valère, explique Léa, les mêmes mots reviennent dans l’ordre inverse : manger, vivre, puis vivre, manger. C’est un chiasme. Le croisement oppose deux façons de vivre, et la phrase prend l’allure d’une maxime qu’on peut graver. »\n'
  + '« Et chez Harpagon ? » demande Mamadou. « Il croise à l’envers. Il dit, sans le vouloir, la phrase du glouton, lui qui ne pense qu’à ne pas dépenser. Le comique naît de l’ordre inversé : la figure se casse dans sa bouche, et le spectateur rit avant même qu’il se reprenne. »\n'
  + 'Mamadou rappelle que l’antithèse oppose, elle aussi, mais sans croiser, comme dans « ici la fête, là-bas la faim ». Et l’oxymore serre deux contraires dans un seul groupe : Corneille parle, dans la même pièce, de « cette obscure clarté qui tombe des étoiles ».';

/** Act 6: Hugues on Hugo’s zeugma (« Booz endormi »). */
export const ZEUGME_TEXT =
  'Hugues apporte « Booz endormi », de Victor Hugo, et lit le portrait du vieux Booz, un homme juste :\n'
  + '« Cet homme marchait pur loin des sentiers obliques,\nVêtu de probité candide et de lin blanc ; »\n'
  + '« Ça ne va pas, dit Inès. On est vêtu de lin, pas de probité. » « Justement, répond Hugues. Hugo accroche au même mot, “vêtu”, une vertu et un tissu. On lit d’abord une image morale, puis un vêtement réel, et les deux se mettent à briller ensemble : le lin blanc rend la probité visible, comme si la droiture du personnage se voyait sur lui. »\n'
  + 'Mamadou ajoute une précision. « Le dictionnaire Larousse appelle cela un zeugme et cite ce vers. Le TLFi distingue deux sens : un sens grammatical, où un mot exprimé une fois sert à deux propositions, et un sens rhétorique, où un même mot porte deux compléments qui ne vont pas avec lui de la même façon. Fontanier, au XIXe siècle, plaçait le zeugme près de l’ellipse. Les définitions varient ; ce qui ne varie pas, c’est l’effet que tu dois décrire. »\n'
  + 'Léa essaie : « Elle a pris le train et une grande décision. » Tout le monde rit. « Voilà, dit Mamadou. Le zeugme surprend, puis il fait sourire, ou réfléchir. »';

/** Act 7: Inès on Hugo’s hypallage (« À Canaris »). */
export const HYPALLAGE_TEXT =
  'Inès a trouvé, dans « À Canaris » de Victor Hugo, une liste de gens que le poète méprise. Elle lit un vers :\n'
  + '« Ce marchand accoudé sur son comptoir avide, »\n'
  + '« Un comptoir n’est pas avide, dit-elle. C’est le marchand. Hugo a fait passer l’adjectif de l’homme à l’objet. » Mamadou confirme : « C’est une hypallage. On prête à un mot ce qui convient à un autre mot de la même phrase, et personne ne se trompe sur le sens. »\n'
  + 'Hugues demande quel est l’intérêt. Inès réfléchit. « L’avidité ne reste pas dans l’homme. Elle déborde sur ce qu’il touche, son comptoir, son commerce, comme si tout chez lui était devenu avide. En deux mots, Hugo dit ce qu’une description mettrait une phrase à dire. »\n'
  + '« Attention à ne pas en voir partout, prévient Mamadou. Fontanier, qui commentait au XIXe siècle les exemples de Dumarsais, doutait de bien des hypallages que d’autres croyaient voir, et les expliquait autrement. Et ne confonds pas avec la personnification : si le comptoir agissait, s’il réclamait de l’argent, ce serait une personnification. Ici, il reçoit seulement le trait de son voisin. »';

/** Act 8: an original port chronicle, full of metonymies. */
export const METONYMIE_TEXT =
  'Pour l’atelier sur la métonymie, Mamadou distribue une chronique écrite par un ancien journaliste du club, Yvon Kerbrat, sur le petit port de Port-Saint-Ernel. Texte original écrit pour la leçon.\n'
  + '« Ce soir-là, toute la salle des fêtes s’est levée quand le maire a annoncé la fermeture de la conserverie. Trois cents emplois, et derrière eux, dans chaque maison, des bouches à nourrir. Le quartier tout entier a signé la pétition dès le lendemain. Paris, comme d’habitude, n’a pas répondu. Au port, on ne voyait plus qu’une voile ou deux à l’horizon, là où il y en avait cinquante autrefois. Ma voisine, qui a lu tout Hugo pendant ses années de chômage, m’a dit qu’on vivait la fin d’un monde. »\n'
  + '« Cherchez les mots qui en nomment un autre, demande Mamadou. Pas par ressemblance, comme la métaphore, mais par voisinage. » Léa trouve « la salle » pour les gens qui s’y trouvent, « Paris » pour le gouvernement, « tout Hugo » pour ses livres. Hugues trouve « une voile » pour un bateau, et « des bouches à nourrir ». « La partie pour le tout, dit Mamadou : une synecdoque. Et regarde ce qu’elle fait : réduire une famille à des bouches, c’est ne plus voir que sa faim. »';

/** Act 9: sounds, shown in the text (Racine, Verlaine). */
export const SONS_TEXT =
  'Ce mardi-là, Mamadou écrit au tableau le vers d’Oreste, dans Andromaque de Racine, quand le héros devient fou et croit voir les Furies :\n'
  + '« Pour qui sont ces serpents qui sifflent sur vos têtes ? »\n'
  + 'Il souligne chaque son [s] : « sont », « ces », « serpents », « sifflent », « sur ». « Cinq fois en un vers, sans compter les « s » muets que l’œil voit encore. On entend le sifflement des serpents dans la bouche de l’acteur. C’est une allitération : une consonne répétée. »\n'
  + 'Puis il écrit la première strophe de la « Chanson d’automne » de Verlaine :\n'
  + '« Les sanglots longs\nDes violons\nDe l’automne\nBlessent mon cœur\nD’une langueur\nMonotone. »\n'
  + 'Il entoure les voyelles nasales de « sanglots », « longs », « violons » et « mon », puis les « o » de « automne » et « monotone ». « Ici, ce sont surtout des voyelles qui reviennent, le son [ɔ̃] et ses voisins : une assonance. Les sons s’étirent, comme la plainte des violons. Certains entendent aussi les [l] de « sanglots longs » et de « langueur » : une allitération douce, qui se défend. »\n'
  + 'Hugues tente : « “Chanson” et “cœur” commencent tous les deux par un “c” : allitération ! » Mamadou secoue la tête. « L’un commence par [ʃ], l’autre par [k] : la même lettre, pas le même son. Deux mots qui commencent par la même lettre ne font pas une allitération. Et surtout, un son ne veut rien dire seul : il renforce ce que disent les mots. »';

/** Act 10: Pascal’s cadence, and the length of sentences. */
export const RYTHME_TEXT =
  'Pour parler du rythme, Mamadou choisit une phrase de Pascal, tirée des Pensées, et la fait lire trois fois :\n'
  + '« Le silence éternel de ces espaces infinis m’effraye. »\n'
  + '« Comptez les syllabes, dit-il. “Le silence éternel”, six. “De ces espaces infinis”, sept. “M’effraye”, deux, à peine. La phrase s’étend comme le ciel qu’elle décrit, puis elle tombe sur un verbe bref. Quand le dernier membre est le plus court, on parle de cadence mineure. Ici, la chute brève fait entendre l’effroi d’un homme seul devant l’immensité. »\n'
  + 'Léa remarque qu’on dirait une phrase moderne. « Le rythme n’a pas d’âge, répond-il. L’orthographe, si : l’édition que je cite écrit “m’effraye”, beaucoup d’éditions récentes “m’effraie”. »\n'
  + 'Il passe ensuite au rythme ternaire : trois éléments, comme dans « Il faut lire, relire, et lire encore. » Le troisième temps donne une impression d’achèvement. « On l’entend partout : dans les discours, dans les proverbes, chez Corneille. Mais ne le décris jamais comme un simple ornement. Le rythme n’est pas un ornement : il fait sentir le sens. »';

/** Act 11: effects of rupture (Pascal; asyndeton, verbless sentence). */
export const RUPTURE_TEXT =
  'Dernière séance avant le commentaire. Mamadou lit une autre pensée de Pascal, dans l’orthographe de l’édition :\n'
  + '« Le nez de Cléopatre, s’il eût été plus court, toute la face de la terre auroit changé. »\n'
  + '« Cherchez le sujet de “auroit changé”, dit-il. Ce n’est pas le nez. La phrase part sur le nez, s’interrompt, et repart sur toute la face de la terre. Cette construction brisée s’appelle une anacoluthe. Elle fait sentir la disproportion : un détail minuscule, et le monde entier qui bascule. »\n'
  + 'Puis il écrit trois phrases au tableau, texte original écrit pour la leçon : « Il entre, il regarde, il se tait. » « Sans aucun mot de liaison, dit Inès, les gestes se heurtent. » « C’est l’asyndète, répond Mamadou. Le lecteur fait lui-même les liens, et le silence final pèse davantage. »\n'
  + '« Et en poésie ? » demande Hugues. « Le rejet : la phrase déborde sur le vers suivant, et le mot rejeté se retrouve seul en tête de vers, en pleine lumière. Vous le verrez mardi prochain chez Rimbaud. Enfin, la phrase nominale, sans verbe, arrête le mouvement : “Silence. Puis la porte.” Une rupture n’est jamais une maladresse quand elle est voulue : dites ce qu’elle casse, et pourquoi. »';

/** Act 12, THE TASK EXTRACT: Rimbaud, « Le Dormeur du val » (Œuvres,
 *  Mercure de France), printed whole. Printed twice: as the act’s reading,
 *  and inside the task brief (no `source` field on `task`). */
export const DORMEUR_TEXT =
  'Arthur Rimbaud, « Le Dormeur du val » (octobre 1870)\n'
  + 'C’est un trou de verdure où chante une rivière\n'
  + 'Accrochant follement aux herbes des haillons\n'
  + 'D’argent ; où le soleil, de la montagne fière,\n'
  + 'Luit : c’est un petit val qui mousse de rayons.\n'
  + 'Un soldat jeune, bouche ouverte, tête nue,\n'
  + 'Et la nuque baignant dans le frais cresson bleu,\n'
  + 'Dort ; il est étendu dans l’herbe, sous la nue,\n'
  + 'Pâle dans son lit vert où la lumière pleut.\n'
  + 'Les pieds dans les glaïeuls, il dort. Souriant comme\n'
  + 'Sourirait un enfant malade, il fait un somme :\n'
  + 'Nature, berce-le chaudement : il a froid.\n'
  + 'Les parfums ne font pas frissonner sa narine ;\n'
  + 'Il dort dans le soleil, la main sur sa poitrine\n'
  + 'Tranquille. Il a deux trous rouges au côté droit.';
