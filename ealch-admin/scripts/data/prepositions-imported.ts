// a1.21's IMPORTED rows: published sentences this lesson SHOWS and does not
// author.
//
// Split out the way a1.13 introduced and a1.16 and a1.17 kept, because a curated
// import is only auditable if the imported rows sit apart from the authored
// ones. This lesson needs the split more than its predecessors did: it is the
// first on the track to import from ELEVEN different themes, and the reason each
// row survived the filter is a judgement about MEANING that no count can carry.
//
// ── The filter, and why it is by reading rather than by counting ───────────
//
// `sur` also means ABOUT and `devant` also means BEFORE. The brief warns that
// both senses are "well represented" and that a raw import would teach the wrong
// meaning. Measured, the hazard is real and small:
//
//     sur      757 published sentences, 40 carry an ABOUT cue         5.3%
//     devant   197 published sentences,  3 are grammatical BEFORE     1.5%
//
// and NOT ONE of the 43 sits inside fr.a1.prepositions-essentielles. Every row
// below was still read individually rather than filtered by token, because the
// cost of reading 118 rows once is an hour and the cost of teaching `sur` =
// "about" on a spatial card is a learner who says « Le livre est sur le chat »
// meaning they have a book about cats.
//
// ── What was dropped, and it is 41% of the theme ───────────────────────────
//
// fr.a1.prepositions-essentielles is a GENERAL prepositions theme and not a
// place one. Of its 118 rows:
//
//     70   carry a place preposition
//     48   carry none: avec, pour, sans, avant, après, vers, par, pendant,
//          jusqu'à, contre, par-dessus, and bare de
//
// Two more are place-preposition SHAPES with a non-spatial reading and both were
// dropped by hand, because the token filter passes them:
//
//     .061  Le café est ouvert entre huit heures et minuit.   entre = TEMPORAL
//     .099  Les enfants jouent aux cartes.                    aux, and no place
//
// `.099` is the single exception and it is kept UNDER LABEL, in
// IMPORTED_CONTRACTION only, because it is the clearest published `aux` in the
// corpus and the contraction act needs to show `aux` firing in French nobody
// arranged. It never appears on a spatial surface and the test asserts that.
//
// ── The verbs, and why almost all of this is reading exposure ──────────────
//
// There is no regular-verb unit in A1. The corpus's spatial sentences are full
// of `dort`, `range`, `cache`, `monte`, `court`, `attend` and `se trouve`, and
// every one of those is a verb the learner cannot yet conjugate. So:
//
//     EVERY ROW IN THIS FILE IS READING EXPOSURE. Not one is a production
//     target. The lesson's speak, dictée and practice surfaces are built
//     exclusively from the authored être rows in prepositions-corpus.ts.
//
// That is not only a curriculum rule, it is forced by the data: not one
// published row in this theme carries `voiceflash`, so a speak mission built on
// them would render cards the learner cannot be scored on.

import type { Item } from '../../../ealch-v2/src/content/schema.ts';

/** A row this lesson shows and did not write. `fr` and `en` are copied here so
 *  the lesson body can print them without a database round trip, and the batch
 *  verifies every one against Postgres before anything is written: a copy that
 *  drifts from the published row is a card showing text nobody published. */
export type ImportedRow = {
  id: string;
  fr: string;
  en: string;
  /** Why this row survived the semantic filter. Not decoration: this is the
   *  audit trail for a curated import. */
  why: string;
};

/* ─── The five, in the wild ────────────────────────────────────────────────
 *
 * Spatial rows for the five prepositions the canDo names, chosen so that the
 * learner meets each one in French nobody arranged for them. Weighted towards
 * `être` rows, because those are the ones whose shape the learner can already
 * produce, and towards the cat, because a repeated character makes a spatial
 * deck cohere and the corpus is full of cats already.                        */

export const IMPORTED_SPATIAL: ImportedRow[] = [
  // sur, spatial, être
  { id: 'fr.a1.prepositions-essentielles.002', fr: 'Les clés sont sur le bureau.', en: 'The keys are on the desk.', why: 'sur, plainly spatial, built on être, and the same keys as the scene.' },
  { id: 'fr.a1.prepositions-essentielles.017', fr: "Le livre est sur l'étagère.", en: 'The book is on the shelf.', why: "sur, spatial, être, and an l' noun so the learner sees the article survive." },
  { id: 'fr.a1.prepositions-essentielles.083', fr: 'Le chat dort sur le canapé.', en: 'The cat sleeps on the couch.', why: 'sur, spatial, and the cat the hero deck runs on. dort is reading exposure.' },
  { id: 'fr.a1.prepositions-essentielles.112', fr: 'Le professeur écrit sur le tableau.', en: 'The teacher writes on the board.', why: 'sur, spatial, and a useful counter to the ABOUT sense: writing ON a board, not about one.' },

  // sous, spatial, être
  { id: 'fr.a1.prepositions-essentielles.018', fr: 'Mon sac est sous le lit.', en: 'My bag is under the bed.', why: 'sous, spatial, être, and le lit is the noun the dictée pair uses.' },
  { id: 'fr.a1.prepositions-essentielles.084', fr: 'Le ballon est sous la table.', en: 'The ball is under the table.', why: 'sous, spatial, être.' },
  { id: 'fr.a1.prepositions-essentielles.001', fr: 'Le chat dort sous la table.', en: 'The cat is sleeping under the table.', why: 'sous, spatial, the cat again, and the direct partner of .083 above.' },
  { id: 'fr.a1.prepositions-essentielles.054', fr: 'Mon chat dort sous le canapé.', en: 'My cat sleeps under the sofa.', why: 'sous against .083 sur on the SAME sofa. An unarranged minimal pair in the published corpus.' },

  // dans, spatial
  { id: 'fr.a1.prepositions-essentielles.005', fr: 'Le pain est dans le sac.', en: 'The bread is in the bag.', why: 'dans, spatial, être, and a container that is genuinely a container.' },
  { id: 'fr.a1.prepositions-essentielles.078', fr: "Le nid est dans l'arbre.", en: 'The nest is in the tree.', why: 'dans, spatial, être.' },
  { id: 'fr.a1.prepositions-essentielles.082', fr: 'Les clés sont dans mon sac.', en: 'The keys are in my bag.', why: 'dans, spatial, être, and the keys once more.' },
  { id: 'fr.a1.prepositions-essentielles.067', fr: 'Il range les jouets dans la boîte.', en: 'He puts the toys away in the box.', why: 'dans, spatial, and THE BOX the hero deck runs on, in published French. range is reading exposure.' },

  // devant, spatial. Every one checked against the grammatical BEFORE sense.
  { id: 'fr.a1.prepositions-essentielles.034', fr: 'Le chien attend devant la porte.', en: 'The dog waits in front of the door.', why: 'devant, unambiguously spatial: a dog in a place, not a word before another word.' },
  { id: 'fr.a1.prepositions-essentielles.116', fr: 'Le chien reste devant la porte.', en: 'The dog stays in front of the door.', why: 'devant, spatial, same door, a near-minimal pair with .034.' },
  { id: 'fr.a1.mots-essentiels.116', fr: 'La voiture est garée devant la maison.', en: 'The car is parked in front of the house.', why: 'devant, spatial, and the derrière partner .117 below uses the SAME house.' },

  // derrière, spatial
  { id: 'fr.a1.prepositions-essentielles.092', fr: 'Le jardin est derrière la maison.', en: 'The garden is behind the house.', why: 'derrière, spatial, être.' },
  { id: 'fr.a1.mots-essentiels.117', fr: 'Le jardin se trouve derrière la maison.', en: 'The garden is behind the house.', why: 'derrière on the same house as .116 devant. The pair is the reason both are here.' },
  { id: 'fr.a1.prepositions-essentielles.028', fr: 'Mon vélo est derrière la maison.', en: 'My bike is behind the house.', why: 'derrière, spatial, être, same house again.' },
];

/* ─── The compounds, in the wild ───────────────────────────────────────────
 *
 * Every one of these carries its `de`, which is the entire point of showing
 * them: the learner sees the rule holding in French nobody arranged, across
 * four different compound prepositions and all four article shapes.          */

export const IMPORTED_COMPOUND: ImportedRow[] = [
  { id: 'fr.a1.prepositions-essentielles.010', fr: 'Le café est à côté de la banque.', en: 'The café is next to the bank.', why: 'à côté de la. The de before a feminine noun, uncontracted.' },
  { id: 'fr.a1.prepositions-essentielles.057', fr: 'Le chien dort à côté du feu.', en: 'The dog sleeps next to the fire.', why: 'à côté du. The contraction firing inside a compound preposition.' },
  { id: 'fr.a1.prepositions-essentielles.096', fr: "La pharmacie est à côté de l'école.", en: 'The pharmacy is next to the school.', why: "à côté de l'. The third article shape, uncontracted, and built on être." },
  { id: 'fr.a1.maison.124', fr: 'La cuisine est à côté du salon.', en: 'The kitchen is next to the living room.', why: `à côté du, built on être. ALSO USED BY a1.29, which owns the de + le rule; shown here with a place behind it rather than re-taught.` },
  { id: 'fr.a1.objets.122', fr: 'Le stylo est à côté du cahier.', en: 'The pen is next to the notebook.', why: 'à côté du, être, and two objects a learner can see on a table.' },

  { id: 'fr.a1.prepositions-essentielles.009', fr: 'La pharmacie est en face de la boulangerie.', en: 'The pharmacy is across from the bakery.', why: 'en face de la, être.' },
  { id: 'fr.a1.prepositions-essentielles.097', fr: 'Le café est en face de la gare.', en: 'The cafe is across from the station.', why: 'en face de la, être. `en face du` returns 0 in the whole corpus, verified with a full phrase, so the du form is authored rather than imported.' },

  { id: 'fr.a1.prepositions-essentielles.020', fr: 'Nous habitons près de la gare.', en: 'We live near the station.', why: 'près de la. The most frequent compound in the corpus, 122 rows.' },
  { id: 'fr.a1.prepositions-essentielles.105', fr: 'La boulangerie est près de chez moi.', en: 'The bakery is near my house.', why: 'près de chez, être. Two prepositions in a row, and the de still there.' },

  { id: 'fr.a1.prepositions-essentielles.104', fr: "L'hôtel est loin de la plage.", en: 'The hotel is far from the beach.', why: 'loin de la, être. The opposite of près de on the same shape.' },
  { id: 'fr.a1.prepositions-essentielles.021', fr: 'Le supermarché est loin de chez moi.', en: 'The supermarket is far from my house.', why: 'loin de chez, être, and the direct partner of .105 above.' },

  { id: 'fr.a1.prepositions-essentielles.068', fr: 'La boulangerie est au coin de la rue.', en: 'The bakery is at the corner of the street.', why: 'au coin de: the contraction AND the de rule in one published line, on être.' },
];

/* ─── The contraction, in the wild ─────────────────────────────────────────
 *
 * `au`, `aux`, `à la` and `du` in published French. This is the group that
 * contains the ONE deliberately non-spatial row in this file.                */

export const IMPORTED_CONTRACTION: ImportedRow[] = [
  { id: 'fr.a1.prepositions-essentielles.118', fr: 'Elle habite au troisième étage.', en: 'She lives on the third floor.', why: 'au, spatial, and a place a learner will actually need to say.' },
  { id: 'fr.a1.prepositions-essentielles.098', fr: 'Je vais au marché le samedi.', en: 'I go to the market on Saturdays.', why: 'au, and a destination rather than a position. Labelled as such on the card.' },
  { id: 'fr.a1.prepositions-essentielles.113', fr: 'Mon frère travaille à la banque.', en: 'My brother works at the bank.', why: 'à la, NOT contracting, in published French. The non-contracting case matters as much as the contracting one.' },
  // THE ONE NON-SPATIAL ROW IN THIS FILE, kept deliberately and labelled.
  {
    id: 'fr.a1.prepositions-essentielles.099',
    fr: 'Les enfants jouent aux cartes.',
    en: 'The children are playing cards.',
    why: 'aux, and NOT A PLACE. Kept because it is the clearest published `aux` in the corpus and the contraction act needs one; `aux toilettes` returns 0. It appears ONLY on the contraction table, labelled as not being about position, and never on a spatial surface. The test asserts that.',
  },
  { id: 'fr.a1.prepositions-essentielles.100', fr: 'Il revient du travail à six heures.', en: 'He comes back from work at six o\'clock.', why: `du = de + le, in the wild, which is the a1.29 collision arriving from the direction this lesson cares about.` },
];

/* ─── The two that are shown and not drilled ───────────────────────────────
 *
 * `entre` needs a pair and `chez` has no English equivalent. Both are outside
 * the canDo and both are worth one card: a learner who meets them later without
 * having seen them here will assume they missed something.
 *
 * fr.a1.prepositions-essentielles.061 « Le café est ouvert entre huit heures et
 * minuit. » is the theme's TEMPORAL entre and is deliberately NOT here.       */

export const IMPORTED_BOUNDED: ImportedRow[] = [
  { id: 'fr.a1.prepositions-essentielles.090', fr: 'Le magasin est entre la banque et la poste.', en: 'The shop is between the bank and the post office.', why: 'entre, SPATIAL, on être, and it shows the two things the word requires. Chosen over .061, which is entre between two times.' },
  { id: 'fr.a1.prepositions-essentielles.039', fr: 'Mon école est entre la boulangerie et la pharmacie.', en: 'My school is between the bakery and the pharmacy.', why: 'entre, spatial, être, and a second pair so the two-things requirement reads as a rule rather than an accident.' },
  { id: 'fr.a1.prepositions-essentielles.023', fr: 'Je vais chez le médecin demain.', en: 'I am going to the doctor\'s tomorrow.', why: "chez + a person's premises, which is the only thing chez does and the reason it has no English word." },
  { id: 'fr.a1.prepositions-essentielles.073', fr: 'Nous restons chez nous ce week-end.', en: 'We are staying home this weekend.', why: 'chez + a pronoun. The same word with no building named at all.' },
];

export const IMPORTED: ImportedRow[] = [
  ...IMPORTED_SPATIAL, ...IMPORTED_COMPOUND, ...IMPORTED_CONTRACTION, ...IMPORTED_BOUNDED,
];

export const IMPORTED_IDS: string[] = IMPORTED.map((r) => r.id);

/** The one imported row that is deliberately not about position. Named as a
 *  constant so the test can assert it stays off every spatial surface rather
 *  than hardcoding the id in an assertion. */
export const NON_SPATIAL_BY_DESIGN = 'fr.a1.prepositions-essentielles.099';

/** The rows dropped by hand that a token filter would have let through. Kept as
 *  data so the next author does not re-import them, and so the test can assert
 *  they are absent. */
export const REJECTED: { id: string; fr: string; why: string }[] = [
  {
    id: 'fr.a1.prepositions-essentielles.061',
    fr: 'Le café est ouvert entre huit heures et minuit.',
    why: 'entre between two TIMES. A place-preposition token with a temporal reading, and the exact shape the brief warns about.',
  },
  {
    id: 'fr.a1.verbes-essentiels.138',
    fr: 'Il donne son avis sur le projet.',
    why: 'sur = ABOUT. The brief names this row and it is right to.',
  },
  {
    id: 'fr.a1.metiers.016',
    fr: "Après être, pas d'article devant la profession.",
    why: 'devant = BEFORE, grammatical, and a sentence about French rather than in it.',
  },
  {
    id: 'fr.a1.maison.008',
    fr: "Le pour le masculin, la pour le féminin, l' devant une voyelle.",
    why: 'devant = BEFORE. Found by the probe; the brief did not name this one.',
  },
  {
    id: 'fr.a1.amis.009',
    fr: 'Devant une voyelle, « ma » devient « mon », même pour un nom féminin.',
    why: `devant = BEFORE. Also unnamed by the brief, and it belongs to a1.17.`,
  },
];
