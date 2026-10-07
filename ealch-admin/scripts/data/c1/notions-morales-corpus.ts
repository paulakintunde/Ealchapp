// c1.16.l1 « Mémoire, vérité, beauté, éthique » — the authored corpus, the
// imports, the texts and the citation constants. DRAFT, to
// B1-WORKSHOP-AND-VOCAB-SHAPES.md §2 (THE VOCAB SHAPE: families and
// collocations in use, never isolated nouns) on top of B1-BUILD-PLAYBOOK.md,
// with the C1 rules of C1-BUILD-LOG.md (« What is different at C1 », wave 5).
// Structural model: the reviewed C1 vocabulary lesson c1.12 « Le vocabulaire
// des idées » (`./vocabulaire-idees-*`): same act loop, same counts, same
// helpers, same Postgres-only row handling.
//
// DRAFT. Nothing here is imported into Postgres or merged into seed.json.
//
// STABLE EXPORTS (a later lesson may import REFRAME from this file and quote
// it; do not rename): REFRAME, REFRAME_EN, UNIT, LESSON_ID, THEME, LEVEL, E,
// PH, ALL_ROWS, ROWS_BY_ACT, IMPORTED, IMPORT_IDS, PG_ROWS, Cap, refFr.
//
// ══════════════════════════════════════════════════════════════════════════
//  WHAT THIS UNIT OWNS: lesson 16 of the C1 trail
// ══════════════════════════════════════════════════════════════════════════
//
//   THE MORAL, AESTHETIC AND MEMORIAL HEADWORDS (wave 5 brief, research plan
//   « Ownership to settle »): each taught against its neighbour, with its
//   collocations, never as a bare noun.
//
//     act 1   the evening of testimonies: « il ment » heard for « il se
//             trompe »; recap of b2.28, b2.29 and b1.34 by trail position,
//             their rows reused by id; c1.12 cited, never re-taught
//     act 2   sincère / véridique (la véracité) / vraisemblable
//     act 3   mentir / se tromper / tromper / induire en erreur; mentir par
//             omission, un pieux mensonge, de bonne ou de mauvaise foi
//     act 4   infox (FranceTerme) / fausse nouvelle (OQLF) / information
//             fallacieuse / nouvelle satirique / rumeur / erreur, past b1.34
//     act 5   morale / éthique / déontologie; faire la morale; le moral;
//             immoral / amoral
//     act 6   remords / regret / honte / culpabilité; avoir mauvaise
//             conscience, avoir conscience de, la conscience professionnelle
//     act 7   intègre / intégral; probité, scrupules, conflit d’intérêts,
//             cautionner
//     act 8   le joli / le beau / le sublime; un beau geste; Boileau
//     act 9   le goût et l’esthétique: de mauvais goût, kitsch, criard,
//             sobre, un esthète; avoir beau + infinitif (the false friend of
//             beauty)
//     act 10  mémoire / souvenir; se souvenir de, se rappeler quelque chose,
//             à la mémoire de, de mémoire d’homme, un trou de mémoire
//     act 11  commémorer / fêter / célébrer; histoire / mémoire; devoir et
//             travail de mémoire, lieu de mémoire, loi mémorielle (literacy
//             only); Ricœur cited, never quoted
//     act 12  the task: a written reply to a reader who confuses the pairs
//
//   BUILT ON, NEVER RE-TAUGHT (cited by trail position, rows reused by id):
//     la leçon 28 du B2  le français des soins: le consentement éclairé
//                        (rows soins .1144, .1146), cited in act 1 as an
//                        ethics of care
//     la leçon 29 du B2  la science pour tous: the withdrawn article (row
//                        methode-scientifique .1075), cited in act 1 as an
//                        ethics of research
//     la leçon 34 du B1  les médias: « une fausse nouvelle, une infox »
//                        (rows journalisme .1120, .1129). Act 4 goes PAST it:
//                        who recommends which word, information fallacieuse,
//                        nouvelle satirique, the intention that separates an
//                        infox from an error
//     la leçon 12 du C1  le vocabulaire des idées (wave 4, not yet in the
//                        seed, so typed from the plan): croire / savoir,
//                        sophisme / paralogisme and the verbs of proof are
//                        ITS pairs. Never re-taught here; its reframe is
//                        quoted in act 1 and in the recycling round
//
//   LEFT TO OTHER LESSONS (never taught here):
//     c1.12  croyance / connaissance, cause / raison, prouver / réfuter,
//            sophisme / paralogisme
//     c1.15  justice, équité, liberté, pouvoir, identité: political and
//            social headwords (la justice, l’équité and le bien commun are
//            not reused)
//     c1.17  intensity scales and connotation as a system
//     c1.13  the historical references themselves (1789, the 18 June
//            appeal...); act 11 names no event of real history except the
//            Canadian « jour du Souvenir » and, in a sheet, the 2001 French
//            law on the slave trade as an example of a « loi mémorielle »
//
// ══════════════════════════════════════════════════════════════════════════
//  §A. MEASURED (Postgres read 2026-10-06 inside BEGIN TRANSACTION READ ONLY
//      … COMMIT, no SET; the local seed is a cut)
// ══════════════════════════════════════════════════════════════════════════
//
//  1. THEME `philosophie` (« La philosophie », b2-c1). Sub-theme « les notions
//     morales et esthétiques » set at the wave 5 setup and read back (subs:
//     « les concepts et leurs distinctions », « les notions morales et
//     esthétiques »). 330 rows, all published: b2 .001-.320, c1 .001-.010.
//
//  2. ID BLOCK: `fr.c1.philosophie.1200` to `.1399` and nothing else. c1.12
//     owns 1000-1199. Re-probed 2026-10-06: 0 rows in 1200-1399 at any level.
//     Authored: `.1200`-`.1359`, 160 rows in twelve act blocks (§G).
//
//  3. REUSED ROWS: 48, every one read in Postgres first (fr, en, drills,
//     example, notes), all `published`. 43 are ABSENT FROM THE SEED CUT and
//     carried in `PG_ROWS` (generated from the read, not retyped; straight
//     apostrophes kept until the decision 13 pass). 5 are in seedPlusPacks():
//     soins .1144 .1146, methode-scientifique .1075, journalisme .1120 .1129.
//
//  4. ATTRIBUTIONS IN THE BANK, READ BEFORE REUSE. Not reused because their
//     `example` names a thinker: philosophie .083 « la vertu » (Aristote),
//     .174 « le beau » (Kant), .179 « l’imitation » (Platon). « La morale »
//     is reused from ethique .050, not philosophie .081 (same headword).
//     Every reused row was read in full: none names a person (.204 says « le
//     philosophe », unnamed).
//
//  5. TYPOGRAPHY OF THE REUSED POSTGRES ROWS (decision 13 pass at import,
//     straight ' to ’), 18 rows: b1 evenements-familiaux .021, litterature
//     .067, negation-et-restriction .172 .269, paysages .147; b2 ethique .025
//     .051 .071 .176, recherche .079, philosophie .152 .176 .178 .181 .204
//     .212 .228 .259. None is printed inside the scenario.
//
//  6. NO AUTHORED ROW TWINS A PUBLISHED ROW: every authored `fr`, folded
//     (accents, case, punctuation, apostrophes, spaces), compared with all
//     64,066 Postgres rows (scratch `twins.mts`, 2026-10-06): 0 twins, 0 id
//     collisions. The first run found one (« un conflit d’intérêts » = b2
//     recherche .079 and affaires .084): .079 is now REUSED by id and the
//     authored .1283 became « déclarer un conflit d’intérêts ». Also checked
//     against every other draft C1 corpus (c1.12, c1.15, c1.17 included): 0.
//     Bare headwords the bank already holds are IMPORTED, never re-authored
//     (la vérité, la morale, l’éthique, la déontologie, le remords, la
//     mémoire, le devoir de mémoire…).
//
//  7. FACT CHECK LIST (for the pre-review). Every claim about the real world,
//     with its source (all read 2026-10-06):
//       a. FranceTerme / Commission d’enrichissement de la langue française,
//          « Recommandation sur les équivalents français à donner à
//          l’expression fake news », Journal officiel du 4 octobre 2018,
//          texte 113 (NOR CTNR1826048K): « information fallacieuse » or the
//          neologism « infox », « forgé à partir des mots « information » et
//          « intoxication » », for « une information mensongère ou
//          délibérément biaisée »; in a legal frame also « nouvelle fausse »,
//          « fausse nouvelle », « information fausse », « fausse
//          information » (loi de 1881). Read on culture.gouv.fr (PDF of the
//          JO text). Rows .1240, .1245, .1247, .1250; act 4.
//       b. OQLF, Grand dictionnaire terminologique, fiche « fausse nouvelle »
//          (Office québécois de la langue française, 2018): privileged terms
//          « fausse nouvelle », « information fallacieuse », « infox » marked
//          as used in France; « fake news » discouraged (recent borrowing,
//          does not fit the French system); not to be confused with « nouvelle
//          satirique ». vitrinelinguistique.oqlf.gouv.qc.ca/fiche-gdt/fiche/
//          26542775. The GDT fiche « infox » (26558919) is the CELF's own,
//          reproduced. Rows .1241, .1246, .1253; act 4.
//       c. « Rien n’est beau que le vrai : le vrai seul est aimable ; »
//          Boileau, Épître IX, « Au marquis de Seignelay », verified word for
//          word on fr.wikisource.org/wiki/Épîtres_(Boileau)/09 (Œuvres,
//          Imprimerie générale, 1872, p. 309-315). The row (.1307) ends on a
//          full stop where the verse runs on with « ; »; the words are
//          identical. PD (Boileau died 1711).
//       d. « Se rappeler de quelque chose »: OQLF BDL « Préposition à employer
//          après les verbes se rappeler et se souvenir »: attested since the
//          18th century, built on « se souvenir de », grammarians still
//          reluctant; careful writing prefers « se rappeler quelque chose ».
//          The lesson NEVER marks it wrong: it is taught as a register
//          choice (row .1327, act 10 commonErrors reworded as « à l’écrit
//          soigné »).
//       e. Code des professions du Québec (RLRQ c. C-26), art. 87: the board
//          of each professional order adopts by regulation « un code de
//          déontologie ». Row .1255, act 5.
//       f. « Code d’éthique et de déontologie des membres de l’Assemblée
//          nationale » (RLRQ c. C-23.1, 2010): a real Québec law title that
//          joins both words (sheet-morale only), LégisQuébec.
//       g. Canada: 11 November is « le jour du Souvenir » (commemorating the
//          1918 armistice; the poppy), canada.ca (Défense nationale, Anciens
//          Combattants). Row .1345, act 11.
//       h. Paul Ricœur, « La Mémoire, l’histoire, l’oubli », Éditions du
//          Seuil, 2000: cited (sheet-memoire and act 11 card), NEVER quoted;
//          paraphrased as the search for a balance between too much and too
//          little memory (Universalis, Érudit review).
//       i. « Loi mémorielle »: French usage for a law that qualifies a past
//          event; example given in sheet-memoire only: loi n° 2001-434 du 21
//          mai 2001, which recognises the slave trade and slavery as a crime
//          against humanity (Légifrance; Assemblée nationale questions).
//          Literacy only, no verdict, no politician named.
//       j. 2008: an Assemblée nationale « mission d’information sur les
//          questions mémorielles » reflected on the distinction between
//          history and memory (assemblee-nationale.fr, cr-miqm 2007-2008).
//          Sheet-memoire only, stated without its conclusions.
//       k. Véracité: Larousse notes that véracité applies above all to what is
//          said (parole, récit, témoignage) and that vérité is the general
//          word; Larousse also gives « habitude de dire le vrai » (the
//          literary sense, for a person). Rows .1213, .1216.
//       l. Remords / regret, immoral / amoral, intègre / intégral, joli /
//          beau / sublime, kitsch, criard, avoir beau + infinitif, de mémoire
//          d’homme, lieu de mémoire: Larousse and Le Robert senses (standard).
//          « Lieu de mémoire » is given without its author.
//       m. 13 April 1976 was a Tuesday (computed: 1 January 1976 was a
//          Thursday; day 104), 11 April 1976 a Sunday: the invented flood's
//          peak and M. Lavoie's remembered Sunday are internally consistent.
//          The Soirée des témoins of 9 March 2026 (fiftieth year) is a
//          Monday: the act 1 scene says « lundi 9 mars » (pre-review fix; it
//          said « mardi »).
//       n. PRE-REVIEW 2026-10-06, re-verified a-m. Also: « un joli geste » is
//          correct French (Académie 9e éd., joli sense 2: « Il a eu un joli
//          geste »), so the act 8 trap tests the gender of geste instead;
//          the jour du Souvenir falls on the 1918 armistice date and honours
//          those who died in service (canada.ca), not « the armistice » alone;
//          « trou de mémoire » carries no register label in Larousse (now
//          courant, rows .1324 .1337).
//     QUOTATIONS: one, Boileau (c). Every other text is « texte original écrit
//     pour la leçon »; every person, town, outlet and institution is invented
//     (§I), except the OQLF, FranceTerme / the CELF, the Journal officiel,
//     the Québec laws above, the Assemblée nationale, Ricœur's book title and
//     the real places Gatineau, Namur, Dakar, Lausanne and Mopti, used as
//     settings only.
//
//  8. RESPELLINGS SPELLED FOR THE NASAL CHECKER RATHER THAN THE EAR: a real
//     /n/ or /m/ after a vowel is written double: personne pehr-SONN, bonne
//     bonn, drame DRAMM, homme DOMM, comme komm, somme(s) somm. Every doubled
//     consonant is really pronounced. No U+203F tie anywhere.
//
//  9. APOSTROPHES: every authored French string uses the typographic ’.
//     Reused Postgres rows keep their straight ' until the decision 13 pass;
//     none is printed inside the scenario.
//
// ══════════════════════════════════════════════════════════════════════════

import type { Item, Register } from '../../../../ealch-v2/src/content/schema.ts';
import { seedPlusPacks } from '../../../../ealch-v2/src/content/seed-plus-packs.ts';
import { unitRef } from '../_unit-ref.ts';

const seed = seedPlusPacks();

/** A citation that OPENS a sentence needs a capital. */
export function Cap(s: string): string { return s.charAt(0).toUpperCase() + s.slice(1); }

/* ══════════════════════════════════════════════════════════════════════════
 *  §B. IDENTITY
 * ══════════════════════════════════════════════════════════════════════════ */

export const UNIT = {
  id: 'c1.16',
  seq: 16,
  title: 'Memory, Truth, Beauty, Ethics',
  sub: 'Mémoire, vérité, beauté, éthique',
  canDo: 'Can choose precisely among the moral, aesthetic and memorial words of abstract discussion (sincère, véridique and vraisemblable; mentir and se tromper; infox, fausse nouvelle and erreur; morale, éthique and déontologie; remords and regret; intègre and intégral; joli, beau and sublime; goût and esthétique; souvenir and mémoire; commémorer and fêter; histoire and mémoire) with their collocations, read them precisely in a text, and answer someone who confuses them',
  prereqUnitIds: ['b1.34', 'b2.28', 'b2.29', 'c1.12'],
} as const;

export const LESSON_ID = 'c1.16.l1';
export const THEME = 'philosophie';
export const LEVEL = 'c1' as const;

/** ONE block, by the brief (sub-theme « les notions morales et esthétiques »). */
export const ID_RANGES = [[1200, 1399]] as const;

export const E = (n: number) => `fr.${LEVEL}.${THEME}.${String(n).padStart(3, '0')}`;

/** The b2 philosophie bank: published, never taught, reused by id. */
export const PH = (n: number) => `fr.b2.philosophie.${String(n).padStart(3, '0')}`;

/* ══════════════════════════════════════════════════════════════════════════
 *  §C. HOW THIS LESSON NAMES ITS NEIGHBOURS
 * ══════════════════════════════════════════════════════════════════════════ */

type SeedUnit = { id: string; seq: number | string };
const SEQ = new Map((seed.units as unknown as SeedUnit[]).map((u) => [u.id, Number(u.seq)]));

export function refFr(unitId: string): string {
  const band = unitId.slice(0, 2);
  const n = SEQ.get(unitId);
  if (n) return `la leçon ${n} du ${band.toUpperCase()}`;
  if (band === 'b1' || band === 'b2' || band === 'c1') throw new Error(`c1.16: ${unitId} is not in the seed`);
  return unitRef(unitId);
}

export const MEDIAS_UNIT = 'b1.34';
export const SOINS_UNIT = 'b2.28';
export const SCIENCE_UNIT = 'b2.29';
export const IDEES_UNIT = 'c1.12';

export const MEDIAS_REF = refFr(MEDIAS_UNIT);     // la leçon 34 du B1
export const SOINS_REF = refFr(SOINS_UNIT);       // la leçon 28 du B2
export const SCIENCE_REF = refFr(SCIENCE_UNIT);   // la leçon 29 du B2

/** c1.12 is written (wave 4) but not yet in the seed, so typed from the plan.
 *  TODO(import): replace with refFr('c1.12') once wave 4 is merged. */
export const IDEES_REF = 'la leçon 12 du C1';
/** The next lesson on the trail (c1.17, same wave). Typed from the plan. */
export const NEXT_REF_PLANNED = 'la leçon 17 du C1';

/* ══════════════════════════════════════════════════════════════════════════
 *  §D. THE QUOTATIONS, IMPORTED (never retyped)
 * ══════════════════════════════════════════════════════════════════════════ */

export { REFRAME as B134_REFRAME, REFRAME_EN as B134_REFRAME_EN } from '../b1/medias-corpus.ts';
export { REFRAME as B228_REFRAME, REFRAME_EN as B228_REFRAME_EN } from '../b2/francais-soins-corpus.ts';
export { REFRAME as B229_REFRAME, REFRAME_EN as B229_REFRAME_EN } from '../b2/science-pour-tous-corpus.ts';
export { REFRAME as C112_REFRAME, REFRAME_EN as C112_REFRAME_EN } from './vocabulaire-idees-corpus.ts';

/* ══════════════════════════════════════════════════════════════════════════
 *  §E. THE REFRAME AND THE ONE METAPHOR
 *
 *  LA BALANCE. A pair of scales: each word of the field weighs something
 *  different. Sincère weighs the speaker's intention, véridique the facts;
 *  the remords weighs a fault, the regret a loss; joli weighs a light
 *  pleasure, sublime an overwhelming grandeur; the souvenir weighs one life,
 *  the mémoire a group's. Choosing the word is saying what you put on the
 *  scales. Every act holds one balance; the task asks the learner to say,
 *  for someone else, what each of their words really weighed.
 *
 *  It is NOT « the noble word is better » (act 9: kitsch can be claimed with
 *  humour; act 8: beau often covers all three degrees) and NOT « judge
 *  harshly » (act 1: the whole point is NOT to accuse a sincere witness).
 *  c1.12's reframe (« Deux mots voisins, deux idées ») is the method; this
 *  one is the question to ask in this field, and it says WHAT to look for.
 * ══════════════════════════════════════════════════════════════════════════ */

export const REFRAME = 'Chaque mot pèse autre chose : dis ce que tu poses sur la balance.';
export const REFRAME_EN = 'Each word weighs something different: say what you are putting on the scales.';

export const REFRAME_REJECTED: readonly { text: string; why: string }[] = [
  {
    text: 'Deux mots voisins, deux idées : nomme ce qui les sépare.',
    why: 'c1.12’s line, true here too and quoted in act 1, but it gives the method, not the question that this field needs. In moral and aesthetic words the separating feature is almost always WHAT is judged (intention or facts, fault or loss, one person or a group).',
  },
  {
    text: 'Le vrai, le beau, le bien : trois valeurs, trois vocabulaires.',
    why: 'False where the lesson has to hold: « un beau geste » is moral (act 8), « de mauvais goût » judges a joke (act 9), and memory is not a value at all (acts 10 and 11).',
  },
  {
    text: 'Avant de juger, demande-toi qui tu juges.',
    why: 'Only half true: véridique judges a statement, intégral a text, sublime a landscape. « Qui » sends the learner back to persons only.',
  },
  {
    text: 'Le mot savant est le plus juste.',
    why: 'False: « véracité » is often heavier than « exact », « joli » is the right word for a charming village, and « se rappeler de » is a register question, not an error (act 10).',
  },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §F. THE IMPORTS, BY ACT
 *
 *  Every id was read from Postgres on 2026-10-06; its French is in the
 *  trailing comment. `PG` marks a row absent from the seed cut, carried in
 *  PG_ROWS.
 * ══════════════════════════════════════════════════════════════════════════ */

export const IMPORTED = {
  act1: [
    'fr.b2.soins.1144',                         // donner son consentement éclairé  (b2.28)
    'fr.b2.soins.1146',                         // Je veux prendre une décision éclairée.  (b2.28)
    'fr.b2.methode-scientifique.1075',          // La revue a retiré l’article après la découverte d’erreurs graves.  (b2.29)
    PH(244),                                    // Que la vérité dérange ne devrait jamais dispenser quiconque de la rechercher.  (PG)
  ],
  act2: [
    PH(48),                                     // la vérité  (PG)
    'fr.b1.negation-et-restriction.172',        // Nous n'avons aucun doute sur sa sincérité.  (PG, dictation only)
    PH(270),                                    // Nul ne peut se targuer de détenir la vérité absolue.  (PG, dictation only)
  ],
  act3: [
    'fr.b2.ethique.081',                        // le mensonge  (PG)
    PH(299),                                    // Il arrive que la vérité soit plus difficile à accepter que le mensonge.  (PG, dictation only)
    PH(259),                                    // L'obligation morale de dire la vérité admet-elle des exceptions … ?  (PG)
    'fr.b2.ethique.043',                        // Cacher la vérité par pur intérêt personnel reste, à ses yeux, impardonnable.  (PG)
    'fr.b1.amis.044',                           // la franchise  (PG)
  ],
  act4: [
    'fr.b1.journalisme.1120',                   // une fausse nouvelle, une infox  (b1.34)
    'fr.b1.journalisme.1129',                   // Une fausse nouvelle circule sur les réseaux depuis hier.  (b1.34)
    'fr.b2.ethique.240',                        // La plateforme a été critiquée pour avoir laissé circuler de fausses informations pendant la campagne.  (PG)
  ],
  act5: [
    'fr.b2.ethique.050',                        // la morale  (PG)
    'fr.b2.ethique.051',                        // l'éthique  (PG)
    'fr.b2.ethique.072',                        // la déontologie  (PG)
    'fr.b2.ethique.047',                        // La déontologie médicale interdit au praticien de divulguer les informations de ses patients.  (PG)
    'fr.b2.ethique.176',                        // le comité d'éthique  (PG, voiceflash only)
    'fr.b1.litterature.067',                    // la morale de l'histoire  (PG)
    PH(297),                                    // Beaucoup ignorent encore ce que signifie vraiment le mot éthique.  (PG, dictation only)
  ],
  act6: [
    PH(91),                                     // la culpabilité  (PG)
    PH(92),                                     // le remords  (PG)
    PH(93),                                     // la faute  (PG)
    PH(88),                                     // la responsabilité morale  (PG)
  ],
  act7: [
    'fr.b2.ethique.071',                        // l'intégrité morale  (PG)
    'fr.b2.recherche.079',                      // un conflit d'intérêts  (PG; reused instead of an authored twin, §A.6)
    'fr.b1.negation-et-restriction.269',        // Elle n'a aucun scrupule à mentir.  (PG, dictation only)
    'fr.b2.ethique.025',                        // Ce cadre a démissionné plutôt que de cautionner une décision qu'il jugeait immorale.  (PG)
  ],
  act8: [
    PH(175),                                    // le sublime  (PG, voiceflash only)
    PH(176),                                    // l'œuvre d'art  (PG, voiceflash only)
    PH(181),                                    // l'harmonie  (PG, voiceflash only)
    PH(204),                                    // Le philosophe soutint que la beauté n'existe pas indépendamment du regard qui la contemple.  (PG)
    'fr.b1.paysages.147',                       // Quoi qu'il arrive, la beauté de ce paysage restera gravée dans ma mémoire.  (PG, dictation only)
  ],
  act9: [
    PH(177),                                    // le goût  (PG, voiceflash only)
    PH(178),                                    // l'esthétique  (PG, voiceflash only)
    PH(212),                                    // Certains soutiennent qu'une œuvre d'art n'a de valeur que par le sens que le spectateur lui prête.  (PG)
    PH(228),                                    // Il arrive que l'on préfère une belle illusion à une vérité inconfortable, …  (PG)
  ],
  act10: [
    PH(151),                                    // la mémoire  (PG, voiceflash only)
    PH(152),                                    // l'oubli  (PG, voiceflash only)
    'fr.b1.recherche.008',                      // Un mémoire est un travail de recherche ; la mémoire est la faculté de se souvenir.  (PG, flashcard only)
    PH(23),                                     // Que resterait-il de notre identité si la mémoire venait à disparaître ?  (PG)
  ],
  act11: [
    'fr.b1.les-fetes.042',                      // la commémoration  (PG)
    'fr.b1.les-fetes.043',                      // commémorer un événement  (PG)
    'fr.b2.valeurs.083',                        // le devoir de mémoire  (PG)
    PH(248),                                    // Comment pourrait-on prétendre juger une époque passée avec les seules valeurs de la nôtre ?  (PG)
    'fr.b1.evenements-familiaux.021',           // C'est en partageant ces souvenirs que la famille reste soudée malgré la distance.  (PG)
  ],
  act12: [] as string[],
};

export const IMPORT_IDS = [...new Set(Object.values(IMPORTED).flat())];

/** Published in Postgres, absent from the local seed cut: fr / en / drills
 *  copied VERBATIM from the 2026-10-06 read (straight apostrophes kept: the
 *  decision 13 edit happens at import), so `src()` can print them. */
export const PG_ROWS: { id: string; fr: string; en: string; drills: string[] }[] = [
  { id: "fr.b1.amis.044", fr: "la franchise", en: "the frankness, the candor", drills: ['flashcard', 'review'] },
  { id: "fr.b1.evenements-familiaux.021", fr: "C'est en partageant ces souvenirs que la famille reste soudée malgré la distance.", en: "It's by sharing these memories that the family stays close despite the distance.", drills: ['sentence', 'flashcard', 'review'] },
  { id: "fr.b1.les-fetes.042", fr: "la commémoration", en: "the commemoration", drills: ['flashcard', 'review'] },
  { id: "fr.b1.les-fetes.043", fr: "commémorer un événement", en: "to commemorate an event", drills: ['flashcard', 'review'] },
  { id: "fr.b1.litterature.067", fr: "la morale de l'histoire", en: "the moral of the story", drills: ['flashcard', 'review'] },
  { id: "fr.b1.negation-et-restriction.172", fr: "Nous n'avons aucun doute sur sa sincérité.", en: "We have no doubt about her sincerity.", drills: ['dictation'] },
  { id: "fr.b1.negation-et-restriction.269", fr: "Elle n'a aucun scrupule à mentir.", en: "She has no qualms about lying.", drills: ['dictation'] },
  { id: "fr.b1.paysages.147", fr: "Quoi qu'il arrive, la beauté de ce paysage restera gravée dans ma mémoire.", en: "Whatever happens, the beauty of this landscape will stay etched in my memory.", drills: ['dictation'] },
  { id: "fr.b1.recherche.008", fr: "Un mémoire est un travail de recherche ; la mémoire est la faculté de se souvenir.", en: "Un mémoire (masculine) is a dissertation; la mémoire (feminine) is memory.", drills: ['flashcard'] },
  { id: "fr.b2.ethique.025", fr: "Ce cadre a démissionné plutôt que de cautionner une décision qu'il jugeait immorale.", en: "This executive resigned rather than endorse a decision he considered immoral.", drills: ['sentence', 'dictation'] },
  { id: "fr.b2.ethique.043", fr: "Cacher la vérité par pur intérêt personnel reste, à ses yeux, impardonnable.", en: "Hiding the truth out of pure self-interest remains, in her eyes, unforgivable.", drills: ['sentence', 'dictation'] },
  { id: "fr.b2.ethique.047", fr: "La déontologie médicale interdit au praticien de divulguer les informations de ses patients.", en: "Medical ethics forbids the practitioner from disclosing patient information.", drills: ['sentence', 'dictation'] },
  { id: "fr.b2.ethique.050", fr: "la morale", en: "morals, ethics", drills: ['flashcard', 'voiceflash'] },
  { id: "fr.b2.ethique.051", fr: "l'éthique", en: "ethics", drills: ['flashcard', 'voiceflash'] },
  { id: "fr.b2.ethique.071", fr: "l'intégrité morale", en: "moral integrity", drills: ['flashcard', 'voiceflash'] },
  { id: "fr.b2.recherche.079", fr: "un conflit d'intérêts", en: "a conflict of interest", drills: ['flashcard', 'review'] },
  { id: "fr.b2.ethique.072", fr: "la déontologie", en: "professional ethics, code of conduct", drills: ['flashcard', 'voiceflash'] },
  { id: "fr.b2.ethique.081", fr: "le mensonge", en: "a lie", drills: ['flashcard', 'voiceflash'] },
  { id: "fr.b2.ethique.176", fr: "le comité d'éthique", en: "ethics committee", drills: ['voiceflash', 'review'] },
  { id: "fr.b2.ethique.240", fr: "La plateforme a été critiquée pour avoir laissé circuler de fausses informations pendant la campagne.", en: "The platform was criticized for letting false information circulate during the campaign.", drills: ['sentence', 'review'] },
  { id: "fr.b2.philosophie.023", fr: "Que resterait-il de notre identité si la mémoire venait à disparaître ?", en: "What would remain of our identity if memory were to disappear?", drills: ['sentence', 'dictation'] },
  { id: "fr.b2.philosophie.048", fr: "la vérité", en: "truth", drills: ['flashcard', 'voiceflash'] },
  { id: "fr.b2.philosophie.088", fr: "la responsabilité morale", en: "moral responsibility", drills: ['flashcard', 'review'] },
  { id: "fr.b2.philosophie.091", fr: "la culpabilité", en: "guilt", drills: ['flashcard', 'review'] },
  { id: "fr.b2.philosophie.092", fr: "le remords", en: "remorse", drills: ['flashcard', 'review'] },
  { id: "fr.b2.philosophie.093", fr: "la faute", en: "the fault / wrongdoing", drills: ['flashcard', 'review'] },
  { id: "fr.b2.philosophie.151", fr: "la mémoire", en: "memory", drills: ['voiceflash', 'review'] },
  { id: "fr.b2.philosophie.152", fr: "l'oubli", en: "forgetting", drills: ['voiceflash', 'review'] },
  { id: "fr.b2.philosophie.175", fr: "le sublime", en: "the sublime", drills: ['voiceflash', 'review'] },
  { id: "fr.b2.philosophie.176", fr: "l'œuvre d'art", en: "the work of art", drills: ['voiceflash', 'review'] },
  { id: "fr.b2.philosophie.177", fr: "le goût", en: "taste", drills: ['voiceflash', 'review'] },
  { id: "fr.b2.philosophie.178", fr: "l'esthétique", en: "aesthetics", drills: ['voiceflash', 'review'] },
  { id: "fr.b2.philosophie.181", fr: "l'harmonie", en: "harmony", drills: ['voiceflash', 'review'] },
  { id: "fr.b2.philosophie.204", fr: "Le philosophe soutint que la beauté n'existe pas indépendamment du regard qui la contemple.", en: "The philosopher argued that beauty does not exist independently of the gaze that contemplates it.", drills: ['sentence', 'review'] },
  { id: "fr.b2.philosophie.212", fr: "Certains soutiennent qu'une œuvre d'art n'a de valeur que par le sens que le spectateur lui prête.", en: "Some argue that a work of art has value only through the meaning the viewer lends it.", drills: ['sentence', 'review'] },
  { id: "fr.b2.philosophie.228", fr: "Il arrive que l'on préfère une belle illusion à une vérité inconfortable, et cela pose une vraie question morale.", en: "It happens that one prefers a beautiful illusion to an uncomfortable truth, and that raises a real moral question.", drills: ['sentence', 'review'] },
  { id: "fr.b2.philosophie.244", fr: "Que la vérité dérange ne devrait jamais dispenser quiconque de la rechercher.", en: "That the truth is disturbing should never excuse anyone from seeking it.", drills: ['sentence', 'review'] },
  { id: "fr.b2.philosophie.248", fr: "Comment pourrait-on prétendre juger une époque passée avec les seules valeurs de la nôtre ?", en: "How could one claim to judge a past era using only the values of our own?", drills: ['sentence', 'review'] },
  { id: "fr.b2.philosophie.259", fr: "L'obligation morale de dire la vérité admet-elle des exceptions lorsque la vérité risque de blesser gravement autrui ?", en: "Does the moral obligation to tell the truth allow exceptions when the truth risks seriously hurting others?", drills: ['sentence', 'review'] },
  { id: "fr.b2.philosophie.270", fr: "Nul ne peut se targuer de détenir la vérité absolue.", en: "No one can claim to hold the absolute truth.", drills: ['dictation'] },
  { id: "fr.b2.philosophie.297", fr: "Beaucoup ignorent encore ce que signifie vraiment le mot éthique.", en: "Many still do not know what the word ethics truly means.", drills: ['dictation'] },
  { id: "fr.b2.philosophie.299", fr: "Il arrive que la vérité soit plus difficile à accepter que le mensonge.", en: "It happens that the truth is harder to accept than the lie.", drills: ['dictation'] },
  { id: "fr.b2.valeurs.083", fr: "le devoir de mémoire", en: "the duty to remember", drills: ['flashcard', 'review'] },
];

const SEED_DRILLS = new Map((seed as unknown as { items: { id: string; drills?: string[] }[] }).items.map((i) => [i.id, i.drills ?? []]));
const drillsOf = (id: string): string[] => PG_ROWS.find((r) => r.id === id)?.drills ?? SEED_DRILLS.get(id) ?? [];

/** No `flashcard` drill: nameable, never releasable. */
export const NOT_DECK_ABLE: string[] = IMPORT_IDS.filter((id) => !drillsOf(id).includes('flashcard'));

/** No `voiceflash`: never in a `practice` speak section. */
export const NOT_SPEAKABLE: string[] = IMPORT_IDS.filter((id) => !drillsOf(id).includes('voiceflash'));

/* ══════════════════════════════════════════════════════════════════════════
 *  §G. THE AUTHORED ROWS, ONE BLOCK PER ACT
 *
 *  `col` a collocation; `fam` a word family in one card; `sent` a sentence;
 *  `rule` a grammar card whose prompt is a question and whose `fr` is the
 *  act’s balance. No wrong form is ever a row: misused words live only in
 *  the scene’s choice, trapDrill.promptSound, commonErrors.wrong and quiz
 *  errorSpots.
 * ══════════════════════════════════════════════════════════════════════════ */

type Row = Item;

const FCVR = ['flashcard', 'voiceflash', 'review'] as Item['drills'];
const FCVDR = ['flashcard', 'voiceflash', 'dictation', 'review'] as Item['drills'];
const FC = ['flashcard', 'review'] as Item['drills'];

const C: Register = 'courant';
const SO = { register: 'soutenu' as Register };
const FA = { register: 'familier' as Register };
const GP = ['notions-morales'];

const sent = (
  n: number, fr: string, en: string, ipa: string, respell: string, tags: string[],
  drills: Item['drills'] = FCVR, extra: Partial<Item> = {},
): Row => ({
  id: E(n), kind: 'sentence', level: LEVEL, theme: THEME, fr, en, ipa, respell,
  tags, drills, version: 1, register: C, grammarPoints: GP, ...extra,
});

/** A collocation: the word and what you do with it. */
const col = (
  n: number, fr: string, en: string, ipa: string, respell: string, tags: string[], notes: string,
  extra: Partial<Item> = {},
): Row => ({
  id: E(n), kind: 'phrase', level: LEVEL, theme: THEME, fr, en, ipa, respell,
  tags: ['collocation', ...tags], drills: FCVR, version: 1, register: C, grammarPoints: GP, notes, ...extra,
});

/** A word family: every member in one card. */
const fam = (
  n: number, fr: string, en: string, ipa: string, respell: string, tags: string[], notes: string,
): Row => ({
  id: E(n), kind: 'phrase', level: LEVEL, theme: THEME, fr, en, ipa, respell,
  tags: ['famille', ...tags], drills: FCVR, version: 1, register: C, grammarPoints: GP, notes,
});

const rule = (
  n: number, fr: string, en: string, ipa: string, respell: string, prompt: string, notes: string, tags: string[],
): Row => sent(n, fr, en, ipa, respell, ['regle', ...tags], FC, { cardType: 'grammar', prompt, notes });

/* ── ACT 1 · LE TÉMOIN SINCÈRE (.1200-.1211) ────────────────────────────── */

export const ACT1_ROWS: Row[] = [
  sent(1200, 'Il est sincère, mais son souvenir n’est pas exact.', 'He is sincere, but his memory of it is not accurate.',
    '/il ɛ sɛ̃.sɛʁ mɛ sɔ̃ su.və.niʁ nɛ pa.zɛɡ.za/', 'eel eh sehⁿ-SEHR | meh sohⁿ soo-vuh-NEER | neh pa-zeg-ZA', ['scene', 'sincere'], FCVDR),
  sent(1201, 'Il ne ment pas : il se trompe de date.', 'He is not lying: he has the date wrong.',
    '/il nə mɑ̃ pa il sə tʁɔ̃p də dat/', 'eel nuh mahⁿ PA | eel suh trohⁿp duh DAT', ['scene', 'mentir']),
  rule(1202, REFRAME, REFRAME_EN,
    '/ʃak mo pɛz otʁ ʃoz di sə kə ty poz syʁ la ba.lɑ̃s/', 'shak moh PEZ | ohtr SHOHZ | dee suh kuh tü POHZ | sür la ba-LAHⁿSS',
    'Deux mots jugent la même scène. Que fais-tu avant de choisir ?',
    'Tu te demandes ce que chacun pèse : l’intention ou les faits, une faute ou une perte, une personne ou un groupe. Sincère pèse l’intention du témoin ; exact pèse les faits.',
    ['reframe', 'balance']),
  sent(1203, 'Un témoin peut être sincère et se tromper.', 'A witness can be sincere and still be wrong.',
    '/œ̃ te.mwɛ̃ pø.tɛtʁ sɛ̃.sɛʁ e sə tʁɔ̃.pe/', 'uhⁿ tay-MWEHⁿ | peu-tetr sehⁿ-SEHR | ay suh trohⁿ-PAY', ['sincere'], FCVDR),
  sent(1204, 'Les archives disent mardi ; lui se souvient d’un dimanche.', 'The archives say Tuesday; he remembers a Sunday.',
    '/le.zaʁ.ʃiv diz maʁ.di lɥi sə su.vjɛ̃ dœ̃ di.mɑ̃ʃ/', 'lay-zar-SHEEV deez mar-DEE | lwee suh soo-VYEHⁿ | duhⁿ dee-MAHⁿSH', ['scene']),
  sent(1205, 'Son souvenir est le sien ; la mémoire du village est à tous.', 'His memory of it is his own; the village’s memory belongs to everyone.',
    '/sɔ̃ su.və.niʁ ɛ lə sjɛ̃ la me.mwaʁ dy vi.laʒ ɛ.ta tus/', 'sohⁿ soo-vuh-NEER | eh luh SYEHⁿ | la may-MWAR dü vee-LAZH | eh-ta TOOSS', ['memoire']),
  sent(1206, 'Ce mot-là accuse ; celui-ci décrit.', 'That word accuses; this one describes.',
    '/sə mo.la a.kyz sə.lɥi.si de.kʁi/', 'suh moh-LA a-KÜZ | suh-lwee-SEE day-KREE', ['balance']),
  sent(1207, 'Quel mot dit exactement ce que tu juges ?', 'Which word says exactly what you are judging?',
    '/kɛl mo di ɛɡ.zak.tə.mɑ̃ sə kə ty ʒyʒ/', 'kel moh dee eg-zak-tuh-MAHⁿ | suh kuh tü ZHÜZH', ['balance']),
  sent(1208, 'Juger une personne n’est pas juger un récit.', 'Judging a person is not judging an account.',
    '/ʒy.ʒe yn pɛʁ.sɔn nɛ pa ʒy.ʒe œ̃ ʁe.si/', 'zhü-ZHAY ün pehr-SONN | neh pa zhü-ZHAY uhⁿ ray-SEE', ['balance'], FCVDR),
  sent(1209, 'Pour la plaque, on garde les dates des archives.', 'For the plaque, we keep the dates from the archives.',
    '/puʁ la plak ɔ̃ ɡaʁd le dat de.zaʁ.ʃiv/', 'poor la PLAK | ohⁿ gard lay DAT | day-zar-SHEEV', ['memoire']),
  sent(1210, 'Son témoignage compte, même s’il n’est pas exact.', 'His testimony matters, even if it is not accurate.',
    '/sɔ̃ te.mwa.ɲaʒ kɔ̃t mɛm sil nɛ pa.zɛɡ.za/', 'sohⁿ tay-mwa-NYAZH KOHⁿT | mem seel neh pa-zeg-ZA', ['sincere']),
  sent(1211, 'Le mot juste ne blesse pas : il pèse.', 'The right word does not wound: it weighs.',
    '/lə mo ʒyst nə blɛs pa il pɛz/', 'luh moh ZHÜST | nuh bless PA | eel PEZ', ['balance']),
];

/* ── ACT 2 · SINCÈRE, VÉRIDIQUE, VRAISEMBLABLE (.1212-.1225) ─────────────── */

export const ACT2_ROWS: Row[] = [
  col(1212, 'un aveu sincère', 'a sincere confession', '/œ̃.na.vø sɛ̃.sɛʁ/', 'uhⁿ-na-VEU sehⁿ-SEHR', ['sincere'],
    'Sincère : on dit ce qu’on pense vraiment. La sincérité pèse la personne qui parle, pas les faits.'),
  col(1213, 'la véracité d’un témoignage', 'the truthfulness of a testimony', '/la ve.ʁa.si.te dœ̃ te.mwa.ɲaʒ/', 'la vay-ra-see-TAY | duhⁿ tay-mwa-NYAZH', ['sincere'],
    'La véracité : l’accord d’un récit avec les faits. Soutenu ; dans la langue littéraire, aussi l’habitude de dire vrai.', SO),
  col(1214, 'un récit vraisemblable', 'a plausible account', '/œ̃ ʁe.si vʁɛ.sɑ̃.blabl/', 'uhⁿ ray-SEE vreh-sahⁿ-BLABL', ['sincere'],
    'Vraisemblable : qui a l’air vrai. Un récit vraisemblable peut être faux ; un fait vrai peut sembler invraisemblable.'),
  fam(1215, 'sincère, la sincérité, sincèrement', 'sincere, sincerity, sincerely',
    '/sɛ̃.sɛʁ la sɛ̃.se.ʁi.te sɛ̃.sɛʁ.mɑ̃/', 'sehⁿ-SEHR, la sehⁿ-say-ree-TAY, sehⁿ-sehr-MAHⁿ', ['sincere'],
    'En toute sincérité : je te dis ce que je pense.'),
  fam(1216, 'vrai, véridique, la véracité', 'true, truthful (of an account), truthfulness',
    '/vʁɛ ve.ʁi.dik la ve.ʁa.si.te/', 'VREH, vay-ree-DEEK, la vay-ra-see-TAY', ['sincere'],
    'Véridique : conforme à ce qui s’est passé ; se dit d’un récit, d’un témoignage. Une histoire véridique.'),
  fam(1217, 'vraisemblable, la vraisemblance, invraisemblable', 'plausible, plausibility, implausible',
    '/vʁɛ.sɑ̃.blabl la vʁɛ.sɑ̃.blɑ̃s ɛ̃.vʁɛ.sɑ̃.blabl/', 'vreh-sahⁿ-BLABL, la vreh-sahⁿ-BLAHⁿSS, ehⁿ-vreh-sahⁿ-BLABL', ['sincere'],
    'La vraisemblance : l’apparence du vrai, rien de plus.'),
  sent(1218, 'Elle a parlé avec une grande sincérité.', 'She spoke with great sincerity.',
    '/ɛ.la paʁ.le a.vɛ.kyn ɡʁɑ̃d sɛ̃.se.ʁi.te/', 'eh-la par-LAY | a-veh-kün grahⁿd sehⁿ-say-ree-TAY', ['sincere']),
  sent(1219, 'Personne ne doute de sa sincérité ; on doute de la véracité de son récit.', 'Nobody doubts her sincerity; it is the truthfulness of her account that is in doubt.',
    '/pɛʁ.sɔn nə dut də sa sɛ̃.se.ʁi.te ɔ̃ dut də la ve.ʁa.si.te də sɔ̃ ʁe.si/', 'pehr-SONN nuh doot duh sa sehⁿ-say-ree-TAY | ohⁿ doot duh la vay-ra-see-TAY | duh sohⁿ ray-SEE', ['sincere'], FCVDR),
  sent(1220, 'Son histoire est vraisemblable, mais elle est fausse.', 'Her story is plausible, but it is false.',
    '/sɔ̃.nis.twaʁ ɛ vʁɛ.sɑ̃.blabl mɛ ɛ.lɛ fos/', 'sohⁿ-nees-TWAR | eh vreh-sahⁿ-BLABL | meh eh-leh FOHSS', ['sincere']),
  sent(1221, 'C’est invraisemblable, et pourtant c’est vrai.', 'It is implausible, and yet it is true.',
    '/sɛ.tɛ̃.vʁɛ.sɑ̃.blabl e puʁ.tɑ̃ sɛ vʁɛ/', 'seh-tehⁿ-vreh-sahⁿ-BLABL | ay poor-TAHⁿ seh VREH', ['sincere'], FCVDR),
  sent(1222, 'Le journaliste a vérifié la véracité des faits.', 'The journalist checked the truthfulness of the facts.',
    '/lə ʒuʁ.na.list a ve.ʁi.fje la ve.ʁa.si.te de fɛ/', 'luh zhoor-na-LEEST | a vay-ree-FYAY | la vay-ra-see-TAY day FEH', ['sincere']),
  rule(1223, 'Sincère dit que tu penses ce que tu dis ; véridique dit que c’est arrivé.', 'Sincere says you mean what you say; truthful says it happened.',
    '/sɛ̃.sɛʁ di kə ty pɑ̃s sə kə ty di ve.ʁi.dik di kə sɛ.ta.ʁi.ve/', 'sehⁿ-SEHR dee kuh tü PAHⁿSS suh kuh tü DEE | vay-ree-DEEK dee kuh seh-ta-ree-VAY',
    'Sincère, véridique : que pèse chacun ?',
    'Sincère pèse l’accord entre ta parole et ta pensée ; véridique, l’accord entre le récit et les faits. Vraisemblable ne pèse que l’apparence.',
    ['sincere']),
  sent(1224, 'Ce récit est véridique : tout s’est passé ainsi.', 'This account is truthful: everything happened that way.',
    '/sə ʁe.si ɛ ve.ʁi.dik tu sɛ pa.se ɛ̃.si/', 'suh ray-SEE eh vay-ree-DEEK | too seh pa-SAY ehⁿ-SEE', ['sincere']),
  sent(1225, 'En toute sincérité, je ne me souviens plus de la date.', 'In all sincerity, I no longer remember the date.',
    '/ɑ̃ tut sɛ̃.se.ʁi.te ʒə nə mə su.vjɛ̃ ply də la dat/', 'ahⁿ toot sehⁿ-say-ree-TAY | zhuh nuh muh soo-VYEHⁿ plü duh la DAT', ['sincere']),
];

/* ── ACT 3 · MENTIR, SE TROMPER, TROMPER (.1226-.1239) ──────────────────── */

export const ACT3_ROWS: Row[] = [
  col(1226, 'mentir par omission', 'to lie by omission', '/mɑ̃.tiʁ paʁ ɔ.mi.sjɔ̃/', 'mahⁿ-TEER | par o-mee-SYOHⁿ', ['mentir'],
    'Mentir sans rien dire de faux : en taisant ce qui compte.'),
  col(1227, 'un pieux mensonge', 'a white lie', '/œ̃ pjø mɑ̃.sɔ̃ʒ/', 'uhⁿ pyeu mahⁿ-SOHⁿZH', ['mentir'],
    'Un mensonge dit pour protéger quelqu’un ou lui épargner une peine. On le juge souvent avec indulgence.'),
  col(1228, 'induire en erreur', 'to mislead', '/ɛ̃.dɥiʁ ɑ̃.nɛ.ʁœʁ/', 'ehⁿ-DWEER | ahⁿ-neh-RUHR', ['mentir'],
    'Faire croire une chose fausse, avec ou sans intention. Un panneau mal placé peut induire en erreur.', SO),
  col(1229, 'être de bonne foi', 'to be in good faith', '/ɛtʁ də bɔn fwa/', 'etr duh bonn FWA', ['mentir'],
    'De bonne foi : on croit dire vrai. De mauvaise foi : on sait que c’est faux, ou l’on refuse de le voir.'),
  sent(1230, 'Se tromper n’est pas mentir : qui se trompe croit dire vrai.', 'Being wrong is not lying: whoever is wrong believes they are telling the truth.',
    '/sə tʁɔ̃.pe nɛ pa mɑ̃.tiʁ ki sə tʁɔ̃p kʁwa diʁ vʁɛ/', 'suh trohⁿ-PAY neh pa mahⁿ-TEER | kee suh TROHⁿP | krwa deer VREH', ['mentir']),
  sent(1231, 'Elle nous a trompés sur le prix.', 'She deceived us about the price.',
    '/ɛl nu.za tʁɔ̃.pe syʁ lə pʁi/', 'el noo-za trohⁿ-PAY | sür luh PREE', ['mentir']),
  sent(1232, 'Il a menti effrontément, les yeux dans les yeux.', 'He lied brazenly, looking straight at us.',
    '/i.la mɑ̃.ti e.fʁɔ̃.te.mɑ̃ le.zjø dɑ̃ le.zjø/', 'ee-la mahⁿ-TEE | ay-frohⁿ-tay-MAHⁿ | lay-ZYEU dahⁿ lay-ZYEU', ['mentir']),
  sent(1233, 'En taisant le défaut, le vendeur a menti par omission.', 'By keeping quiet about the defect, the seller lied by omission.',
    '/ɑ̃ tɛ.zɑ̃ lə de.fo lə vɑ̃.dœʁ a mɑ̃.ti paʁ ɔ.mi.sjɔ̃/', 'ahⁿ teh-ZAHⁿ luh day-FOH | luh vahⁿ-DUHR | a mahⁿ-TEE par o-mee-SYOHⁿ', ['mentir'], FCVDR),
  sent(1234, 'Ce panneau a induit les visiteurs en erreur.', 'This sign misled the visitors.',
    '/sə pa.no a ɛ̃.dɥi le vi.zi.tœʁ ɑ̃.nɛ.ʁœʁ/', 'suh pa-NOH | a ehⁿ-DWEE lay vee-zee-TUHR | ahⁿ-neh-RUHR', ['mentir']),
  sent(1235, 'Il est de mauvaise foi : il sait très bien que c’est faux.', 'He is arguing in bad faith: he knows perfectly well it is false.',
    '/i.lɛ də mo.vɛz fwa il sɛ tʁɛ bjɛ̃ kə sɛ fo/', 'ee-leh duh moh-vez FWA | eel seh treh BYEHⁿ | kuh seh FOH', ['mentir']),
  rule(1236, 'Mentir, c’est dire faux en le sachant ; se tromper, c’est dire faux en croyant dire vrai.', 'Lying is saying something false knowingly; being wrong is saying something false while believing it true.',
    '/mɑ̃.tiʁ sɛ diʁ fo ɑ̃ lə sa.ʃɑ̃ sə tʁɔ̃.pe sɛ diʁ fo ɑ̃ kʁwa.jɑ̃ diʁ vʁɛ/', 'mahⁿ-TEER | seh deer FOH | ahⁿ luh sa-SHAHⁿ | suh trohⁿ-PAY | seh deer FOH | ahⁿ krwa-YAHⁿ deer VREH',
    'Mentir, se tromper : où passe la frontière ?',
    'Dans l’intention. Le menteur sait ; celui qui se trompe croit. Tromper quelqu’un, c’est l’amener à croire le faux, souvent exprès.',
    ['mentir']),
  sent(1237, 'Elle a avoué son mensonge le lendemain.', 'She confessed to her lie the next day.',
    '/ɛ.la a.vwe sɔ̃ mɑ̃.sɔ̃ʒ lə lɑ̃d.mɛ̃/', 'eh-la a-VWAY | sohⁿ mahⁿ-SOHⁿZH | luh lahⁿd-MEHⁿ', ['mentir']),
  sent(1238, 'Dire à un malade qu’il a bonne mine : un pieux mensonge ?', 'Telling a sick person they look well: a white lie?',
    '/diʁ a œ̃ ma.lad kil a bɔn min œ̃ pjø mɑ̃.sɔ̃ʒ/', 'deer a uhⁿ ma-LAD | keel a bonn MEEN | uhⁿ pyeu mahⁿ-SOHⁿZH', ['mentir']),
  sent(1239, 'Je l’ai dit de bonne foi ; je ne savais pas que c’était faux.', 'I said it in good faith; I did not know it was false.',
    '/ʒə le di də bɔn fwa ʒə nə sa.vɛ pa kə se.tɛ fo/', 'zhuh lay DEE | duh bonn FWA | zhuh nuh sa-VEH pa | kuh say-teh FOH', ['mentir'], FCVDR),
];

/* ── ACT 4 · INFOX, FAUSSE NOUVELLE, ERREUR (.1240-.1253) ───────────────── */

export const ACT4_ROWS: Row[] = [
  col(1240, 'une information fallacieuse', 'a piece of disinformation (official term)', '/yn ɛ̃.fɔʁ.ma.sjɔ̃ fa.la.sjøz/', 'ün ehⁿ-for-ma-SYOHⁿ fa-la-SYEUZ', ['infox'],
    'Recommandé en France avec infox (Journal officiel, 4 octobre 2018), et retenu aussi par l’OQLF : une information mensongère ou délibérément biaisée.', SO),
  col(1241, 'une nouvelle satirique', 'a satirical news story', '/yn nu.vɛl sa.ti.ʁik/', 'ün noo-VEL sa-tee-REEK', ['infox'],
    'Une nouvelle exagérée pour faire rire, sans intention de tromper. L’OQLF demande de ne pas la confondre avec une fausse nouvelle.'),
  col(1242, 'une rumeur infondée', 'a baseless rumour', '/yn ʁy.mœʁ ɛ̃.fɔ̃.de/', 'ün rü-MUHR ehⁿ-fohⁿ-DAY', ['infox'],
    'Une rumeur : ce qui se répète sans source sûre. Elle peut être vraie, fausse ou les deux.'),
  col(1243, 'relayer une infox', 'to pass on a piece of fake news', '/ʁə.le.je y.nɛ̃.fɔks/', 'ruh-lay-YAY ü-nehⁿ-FOX', ['infox'],
    'Relayer : transmettre plus loin. On peut relayer une infox de bonne foi : l’intention est celle de l’auteur.'),
  col(1244, 'c’est de l’intox', 'it is propaganda, a smokescreen', '/sɛ d(ə) lɛ̃.tɔks/', 'seh duh lehⁿ-TOX', ['infox'],
    'Familier : une manœuvre pour tromper l’opinion. Infox est formé sur information et intoxication.', FA),
  sent(1245, 'Une infox est mensongère ou délibérément biaisée.', 'A piece of fake news is untrue or deliberately slanted.',
    '/y.nɛ̃.fɔks ɛ mɑ̃.sɔ̃.ʒɛʁ u de.li.be.ʁe.mɑ̃ bja.ze/', 'ü-nehⁿ-FOX | eh mahⁿ-sohⁿ-ZHEHR | oo day-lee-bay-ray-MAHⁿ bya-ZAY', ['infox'], FCVDR),
  sent(1246, 'Au Québec, l’OQLF privilégie « fausse nouvelle ».', 'In Québec, the OQLF favours « fausse nouvelle ».',
    '/o ke.bɛk lo.ky.ɛl.ɛf pʁi.vi.le.ʒi fos nu.vɛl/', 'oh kay-BEK | loh-kü-el-EF | pree-vee-lay-ZHEE | fohss noo-VEL', ['infox', 'quebec']),
  sent(1247, 'En France, « infox » fait partie des termes recommandés.', 'In France, « infox » is one of the recommended terms.',
    '/ɑ̃ fʁɑ̃s ɛ̃.fɔks fɛ paʁ.ti de tɛʁm ʁə.kɔ.mɑ̃.de/', 'ahⁿ FRAHⁿSS | ehⁿ-FOX | feh par-TEE | day tehrm ruh-ko-mahⁿ-DAY', ['infox', 'france']),
  sent(1248, 'Ce site satirique ne cherche pas à tromper.', 'This satirical site is not trying to deceive.',
    '/sə sit sa.ti.ʁik nə ʃɛʁʃ pa.za tʁɔ̃.pe/', 'suh SEET sa-tee-REEK | nuh shehrsh pa-za trohⁿ-PAY', ['infox']),
  sent(1249, 'Ma voisine a relayé l’infox de bonne foi.', 'My neighbour passed on the fake news in good faith.',
    '/ma vwa.zin a ʁə.le.je lɛ̃.fɔks də bɔn fwa/', 'ma vwa-ZEEN | a ruh-lay-YAY lehⁿ-FOX | duh bonn FWA', ['infox']),
  rule(1250, 'Infox et fausse nouvelle veulent tromper ; une erreur de bonne foi, non.', 'Fake news sets out to deceive; a good-faith error does not.',
    '/ɛ̃.fɔks e fos nu.vɛl vœl tʁɔ̃.pe yn ɛ.ʁœʁ də bɔn fwa nɔ̃/', 'ehⁿ-FOX ay fohss noo-VEL | vuhl trohⁿ-PAY | ün eh-RUHR duh bonn FWA | NOHⁿ',
    'Infox, fausse nouvelle, erreur : qu’est-ce qui les sépare ?',
    'L’intention de tromper. La France recommande infox et information fallacieuse ; l’OQLF privilégie fausse nouvelle et marque infox comme un mot de France. Une erreur reste une erreur, même quand elle circule.',
    ['infox']),
  sent(1251, 'Une rumeur n’est pas une information tant qu’on n’a pas de source.', 'A rumour is not information until you have a source.',
    '/yn ʁy.mœʁ nɛ pa.zyn ɛ̃.fɔʁ.ma.sjɔ̃ tɑ̃ kɔ̃ na pa də suʁs/', 'ün rü-MUHR | neh pa-zün ehⁿ-for-ma-SYOHⁿ | tahⁿ kohⁿ na pa duh SOORSS', ['infox']),
  sent(1252, 'Ce n’était pas une infox, juste une erreur de date.', 'It was not fake news, just a mistake in the date.',
    '/sə ne.tɛ pa.zy.nɛ̃.fɔks ʒyst y.nɛ.ʁœʁ də dat/', 'suh nay-teh pa-zü-nehⁿ-FOX | zhüst ü-neh-RUHR duh DAT', ['infox'], FCVDR),
  sent(1253, 'L’OQLF déconseille l’emprunt « fake news ».', 'The OQLF advises against the borrowing « fake news ».',
    '/lo.ky.ɛl.ɛf de.kɔ̃.sɛj lɑ̃.pʁœ̃ fɛjk njuz/', 'loh-kü-el-EF | day-kohⁿ-SEHY | lahⁿ-PRUHⁿ | fayk NYOOZ', ['infox', 'quebec']),
];

/* ── ACT 5 · MORALE, ÉTHIQUE, DÉONTOLOGIE (.1254-.1267) ──────────────────── */

export const ACT5_ROWS: Row[] = [
  col(1254, 'faire la morale à quelqu’un', 'to lecture someone (on right and wrong)', '/fɛʁ la mɔ.ʁal a kɛl.kœ̃/', 'fehr la mo-RAL | a kel-KUHⁿ', ['morale'],
    'Donner des leçons de bien et de mal, souvent sans qu’on l’ait demandé. Péjoratif.'),
  col(1255, 'un code de déontologie', 'a code of professional conduct', '/œ̃ kɔd də de.ɔ̃.tɔ.lɔ.ʒi/', 'uhⁿ KOD | duh day-ohⁿ-to-lo-ZHEE', ['morale'],
    'Les devoirs d’une profession, écrits. Au Québec, chaque ordre professionnel en adopte un (Code des professions, article 87).'),
  col(1256, 'une question d’éthique', 'a question of ethics', '/yn kɛs.tjɔ̃ de.tik/', 'ün kes-TYOHⁿ | day-TEEK', ['morale'],
    'L’éthique réfléchit à la bonne façon d’agir dans un domaine ou un cas précis : la fin de vie, la recherche, les affaires.'),
  col(1257, 'un manquement à la déontologie', 'a breach of professional ethics', '/œ̃ mɑ̃k.mɑ̃ a la de.ɔ̃.tɔ.lɔ.ʒi/', 'uhⁿ mahⁿk-MAHⁿ | a la day-ohⁿ-to-lo-ZHEE', ['morale'],
    'Ne pas respecter un devoir de sa profession. Le mot est administratif et précis.', SO),
  fam(1258, 'la morale, moral, moralement, moraliser', 'morality, moral, morally, to moralise',
    '/la mɔ.ʁal mɔ.ʁal mɔ.ʁal.mɑ̃ mɔ.ʁa.li.ze/', 'la mo-RAL, mo-RAL, mo-ral-MAHⁿ, mo-ra-lee-ZAY', ['morale'],
    'Moraliser : faire la morale. Moralisateur : qui en fait trop.'),
  fam(1259, 'l’éthique, éthique, la bioéthique', 'ethics, ethical, bioethics',
    '/le.tik e.tik la bjo.e.tik/', 'lay-TEEK, ay-TEEK, la byo-ay-TEEK', ['morale'],
    'Éthique, nom et adjectif : un choix éthique. La bioéthique : l’éthique de la médecine et du vivant.'),
  fam(1260, 'la déontologie, déontologique, un déontologue', 'professional ethics, deontological, an ethics officer',
    '/la de.ɔ̃.tɔ.lɔ.ʒi de.ɔ̃.tɔ.lɔ.ʒik œ̃ de.ɔ̃.tɔ.lɔɡ/', 'la day-ohⁿ-to-lo-ZHEE, day-ohⁿ-to-lo-ZHEEK, uhⁿ day-ohⁿ-to-LOG', ['morale'],
    'Un déontologue veille au respect d’un code de déontologie.'),
  sent(1261, 'La morale dit ce qui est bien ; l’éthique se demande comment agir ici.', 'Morality says what is right; ethics asks how to act here.',
    '/la mɔ.ʁal di sə ki ɛ bjɛ̃ le.tik sə də.mɑ̃d kɔ.mɑ̃.ta.ʒiʁ i.si/', 'la mo-RAL dee suh kee eh BYEHⁿ | lay-TEEK suh duh-MAHⁿD | ko-mahⁿ-ta-ZHEER ee-SEE', ['morale'], FCVDR),
  rule(1262, 'La morale vaut pour tous, l’éthique réfléchit à un cas, la déontologie lie une profession.', 'Morality applies to everyone, ethics reflects on a case, professional ethics binds a profession.',
    '/la mɔ.ʁal vo puʁ tus le.tik ʁe.fle.ʃi a œ̃ ka la de.ɔ̃.tɔ.lɔ.ʒi li yn pʁɔ.fɛ.sjɔ̃/', 'la mo-RAL voh poor TOOSS | lay-TEEK ray-flay-SHEE a uhⁿ KA | la day-ohⁿ-to-lo-ZHEE | lee ün pro-feh-SYOHⁿ',
    'Morale, éthique, déontologie : que pèse chacune ?',
    'C’est l’usage le plus courant, pas une loi : on dit souvent éthique pour morale, et les philosophes ne tracent pas tous la frontière au même endroit. La déontologie, elle, reste le mot d’un métier.',
    ['morale']),
  sent(1263, 'Ce médecin a manqué à la déontologie en parlant de son patient.', 'This doctor breached professional ethics by talking about his patient.',
    '/sə med.sɛ̃ a mɑ̃.ke a la de.ɔ̃.tɔ.lɔ.ʒi ɑ̃ paʁ.lɑ̃ də sɔ̃ pa.sjɑ̃/', 'suh mehd-SEHⁿ | a mahⁿ-KAY a la day-ohⁿ-to-lo-ZHEE | ahⁿ par-LAHⁿ | duh sohⁿ pa-SYAHⁿ', ['morale'], FCVDR),
  sent(1264, 'Le comité d’éthique a examiné le projet de recherche.', 'The ethics committee examined the research project.',
    '/lə kɔ.mi.te de.tik a ɛɡ.za.mi.ne lə pʁɔ.ʒɛ də ʁə.ʃɛʁʃ/', 'luh ko-mee-TAY day-TEEK | a eg-za-mee-NAY | luh pro-ZHEH duh ruh-SHEHRSH', ['morale']),
  sent(1265, 'Arrête de me faire la morale : je connais les règles.', 'Stop lecturing me: I know the rules.',
    '/a.ʁɛt də mə fɛʁ la mɔ.ʁal ʒə kɔ.nɛ le ʁɛɡl/', 'a-RET duh muh fehr la mo-RAL | zhuh ko-NEH lay REGL', ['morale']),
  sent(1266, 'Après la défaite, l’équipe n’a plus le moral.', 'After the defeat, the team’s spirits are low.',
    '/a.pʁɛ la de.fɛt le.kip na ply lə mɔ.ʁal/', 'a-PREH la day-FET | lay-KEEP | na plü luh mo-RAL', ['morale']),
  sent(1267, 'Un acte immoral va contre la morale ; un être amoral l’ignore.', 'An immoral act goes against morality; an amoral being knows nothing of it.',
    '/œ̃.nakt i.mɔ.ʁal va kɔ̃tʁ la mɔ.ʁal œ̃.nɛtʁ a.mɔ.ʁal li.ɲɔʁ/', 'uhⁿ-NAKT ee-mo-RAL | va kohⁿtr la mo-RAL | uhⁿ-NETR a-mo-RAL | lee-NYOR', ['morale']),
];

/* ── ACT 6 · REMORDS, REGRET, HONTE (.1268-.1280) ───────────────────────── */

export const ACT6_ROWS: Row[] = [
  col(1268, 'avoir des remords', 'to feel remorse', '/a.vwaʁ de ʁə.mɔʁ/', 'a-vwar day ruh-MOR', ['remords'],
    'Le remords : la douleur d’avoir mal agi. On ne l’éprouve que pour ses propres actes.'),
  col(1269, 'avoir des regrets', 'to have regrets', '/a.vwaʁ de ʁə.ɡʁɛ/', 'a-vwar day ruh-GREH', ['remords'],
    'Le regret : la peine de ce qu’on a perdu ou de ce qu’on n’a pas fait. Pas forcément une faute.'),
  col(1270, 'avoir mauvaise conscience', 'to have a guilty conscience', '/a.vwaʁ mo.vɛz kɔ̃.sjɑ̃s/', 'a-vwar moh-vez kohⁿ-SYAHⁿSS', ['remords'],
    'Se sentir coupable. Avoir bonne conscience : se sentir en paix avec ce qu’on a fait.'),
  col(1271, 'la conscience professionnelle', 'conscientiousness at work', '/la kɔ̃.sjɑ̃s pʁɔ.fɛ.sjɔ.nɛl/', 'la kohⁿ-SYAHⁿSS pro-feh-syo-NEL', ['remords'],
    'Le soin qu’on met à bien faire son travail. Ce n’est pas la déontologie écrite : c’est une qualité de la personne.'),
  col(1272, 'éprouver de la honte', 'to feel shame', '/e.pʁu.ve də la ɔ̃t/', 'ay-proo-VAY duh la OHⁿT', ['remords'],
    'La honte : on se sent diminué sous le regard des autres, parfois sans faute. La culpabilité : on se juge soi-même pour une faute.'),
  sent(1273, 'Il a des remords : il n’aurait jamais dû lui mentir.', 'He feels remorse: he should never have lied to her.',
    '/i.la de ʁə.mɔʁ i.lo.ʁɛ ʒa.mɛ dy lɥi mɑ̃.tiʁ/', 'ee-la day ruh-MOR | ee-loh-REH zha-meh DÜ | lwee mahⁿ-TEER', ['remords'], FCVDR),
  sent(1274, 'Je regrette de ne pas être allée à son mariage.', 'I regret not going to her wedding.',
    '/ʒə ʁə.ɡʁɛt də nə pa.zɛ.tʁa.le a sɔ̃ ma.ʁjaʒ/', 'zhuh ruh-GRET | duh nuh pa-zeh-tra-LAY | a sohⁿ ma-RYAZH', ['remords']),
  sent(1275, 'J’ai honte d’avoir oublié son anniversaire.', 'I am ashamed of having forgotten her birthday.',
    '/ʒe ɔ̃t da.vwaʁ u.bli.je sɔ̃.na.ni.vɛʁ.sɛʁ/', 'zhay OHⁿT | da-vwar oo-blee-YAY | sohⁿ-na-nee-vehr-SEHR', ['remords']),
  sent(1276, 'Elle fait son travail avec une grande conscience professionnelle.', 'She does her job with great conscientiousness.',
    '/ɛl fɛ sɔ̃ tʁa.vaj a.vɛ.kyn ɡʁɑ̃d kɔ̃.sjɑ̃s pʁɔ.fɛ.sjɔ.nɛl/', 'el feh sohⁿ tra-VY | a-veh-kün grahⁿd kohⁿ-SYAHⁿSS pro-feh-syo-NEL', ['remords']),
  sent(1277, 'Avoir conscience d’un risque, ce n’est pas avoir mauvaise conscience.', 'Being aware of a risk is not having a guilty conscience.',
    '/a.vwaʁ kɔ̃.sjɑ̃s dœ̃ ʁisk sə nɛ pa.za.vwaʁ mo.vɛz kɔ̃.sjɑ̃s/', 'a-vwar kohⁿ-SYAHⁿSS duhⁿ REESK | suh neh pa-za-vwar moh-vez kohⁿ-SYAHⁿSS', ['remords'], FCVDR),
  rule(1278, 'Le remords pèse une faute ; le regret peut peser une simple perte.', 'Remorse weighs a fault; regret can weigh a mere loss.',
    '/lə ʁə.mɔʁ pɛz yn fot lə ʁə.ɡʁɛ pø pə.ze yn sɛ̃pl pɛʁt/', 'luh ruh-MOR PEZ ün FOHT | luh ruh-GREH | peu puh-ZAY ün sehⁿpl PEHRT',
    'Remords ou regret : que pèse chacun ?',
    'Le remords suppose qu’on a mal agi. Le regret est plus large : on regrette un voyage manqué, et l’on peut aussi regretter une faute. Pour une faute qui ronge, le mot précis reste remords.',
    ['remords']),
  sent(1279, 'Il ne ressent ni honte ni remords.', 'He feels neither shame nor remorse.',
    '/il nə ʁə.sɑ̃ ni ɔ̃t ni ʁə.mɔʁ/', 'eel nuh ruh-SAHⁿ | nee OHⁿT | nee ruh-MOR', ['remords']),
  sent(1280, 'La culpabilité l’empêche de dormir.', 'Guilt keeps her from sleeping.',
    '/la kyl.pa.bi.li.te lɑ̃.pɛʃ də dɔʁ.miʁ/', 'la kül-pa-bee-lee-TAY | lahⁿ-PESH duh dor-MEER', ['remords']),
];

/* ── ACT 7 · INTÈGRE, PAS INTÉGRAL (.1281-.1294) ─────────────────────────── */

export const ACT7_ROWS: Row[] = [
  col(1281, 'une fonctionnaire intègre', 'a civil servant of integrity', '/yn fɔ̃k.sjɔ.nɛʁ ɛ̃.tɛɡʁ/', 'ün fohⁿk-syo-NEHR ehⁿ-TEGR', ['integre'],
    'Intègre : qu’on ne peut ni acheter ni corrompre. À ne pas confondre avec intégral : complet.'),
  col(1282, 'agir avec probité', 'to act with probity', '/a.ʒiʁ a.vɛk pʁɔ.bi.te/', 'a-ZHEER | a-vek pro-bee-TAY', ['integre'],
    'La probité : le respect rigoureux de ses devoirs, surtout avec l’argent et la parole donnée. Soutenu.', SO),
  col(1283, 'déclarer un conflit d’intérêts', 'to declare a conflict of interest', '/de.kla.ʁe œ̃ kɔ̃.fli dɛ̃.te.ʁɛ/', 'day-kla-RAY | uhⁿ kohⁿ-FLEE dehⁿ-tay-REH', ['integre'],
    'Un conflit d’intérêts : quand un intérêt personnel risque de peser sur une décision qu’on doit prendre pour d’autres. On le déclare, puis on se retire.'),
  col(1284, 'sans scrupules', 'unscrupulous', '/sɑ̃ skʁy.pyl/', 'sahⁿ skrü-PÜL', ['integre'],
    'Sans scrupules : prêt à tout. Avoir des scrupules : hésiter par souci moral.'),
  col(1285, 'cautionner une pratique', 'to endorse a practice', '/ko.sjɔ.ne yn pʁa.tik/', 'koh-syo-NAY ün pra-TEEK', ['integre'],
    'Cautionner : approuver, donner son appui, parfois par son seul silence.'),
  fam(1286, 'intègre, l’intégrité ; intégral, l’intégralité', 'of integrity, integrity; complete, entirety',
    '/ɛ̃.tɛɡʁ lɛ̃.te.ɡʁi.te ɛ̃.te.ɡʁal lɛ̃.te.ɡʁa.li.te/', 'ehⁿ-TEGR, lehⁿ-tay-gree-TAY ; ehⁿ-tay-GRAL, lehⁿ-tay-gra-lee-TAY', ['integre'],
    'Deux familles voisines : l’intégrité d’une personne, l’intégralité d’un texte.'),
  sent(1287, 'Elle s’est retirée du jury pour éviter un conflit d’intérêts.', 'She withdrew from the panel to avoid a conflict of interest.',
    '/ɛl sɛ ʁə.ti.ʁe dy ʒy.ʁi puʁ e.vi.te œ̃ kɔ̃.fli dɛ̃.te.ʁɛ/', 'el seh ruh-tee-RAY dü zhü-REE | poor ay-vee-TAY | uhⁿ kohⁿ-FLEE dehⁿ-tay-REH', ['integre'], FCVDR),
  sent(1288, 'Un juge intègre ne se laisse pas acheter.', 'A judge of integrity cannot be bought.',
    '/œ̃ ʒyʒ ɛ̃.tɛɡʁ nə sə lɛs pa.zaʃ.te/', 'uhⁿ ZHÜZH ehⁿ-TEGR | nuh suh less pa-zash-TAY', ['integre']),
  sent(1289, 'Il a des scrupules à accepter ce cadeau.', 'He has qualms about accepting this gift.',
    '/i.la de skʁy.pyl a ak.sɛp.te sə ka.do/', 'ee-la day skrü-PÜL | a ak-sep-TAY suh ka-DOH', ['integre']),
  sent(1290, 'Se taire, c’est parfois cautionner.', 'Keeping quiet is sometimes endorsing.',
    '/sə tɛʁ sɛ paʁ.fwa ko.sjɔ.ne/', 'suh TEHR | seh par-FWA koh-syo-NAY', ['integre'], FCVDR),
  sent(1291, 'Le texte intégral du rapport est en ligne.', 'The full text of the report is online.',
    '/lə tɛkst ɛ̃.te.ɡʁal dy ʁa.pɔʁ ɛ.tɑ̃ liɲ/', 'luh tekst ehⁿ-tay-GRAL | dü ra-POR | eh-tahⁿ LEENY', ['integre']),
  rule(1292, 'Intègre pèse une personne ; intégral pèse un tout.', 'Intègre weighs a person; intégral weighs a whole.',
    '/ɛ̃.tɛɡʁ pɛz yn pɛʁ.sɔn ɛ̃.te.ɡʁal pɛz œ̃ tu/', 'ehⁿ-TEGR PEZ ün pehr-SONN | ehⁿ-tay-GRAL PEZ uhⁿ TOO',
    'Intègre ou intégral ?',
    'Une personne intègre ne se laisse pas corrompre ; un texte intégral est complet. Les noms aussi diffèrent : l’intégrité, l’intégralité.',
    ['integre']),
  sent(1293, 'Elle a été promue pour sa probité, pas pour ses relations.', 'She was promoted for her probity, not for her connections.',
    '/ɛ.la e.te pʁɔ.my puʁ sa pʁɔ.bi.te pa puʁ se ʁə.la.sjɔ̃/', 'eh-la ay-TAY pro-MÜ | poor sa pro-bee-TAY | pa poor say ruh-la-SYOHⁿ', ['integre']),
  sent(1294, 'Il a toujours refusé les petits arrangements.', 'He has always refused cosy little deals.',
    '/i.la tu.ʒuʁ ʁə.fy.ze le pə.ti.za.ʁɑ̃ʒ.mɑ̃/', 'ee-la too-ZHOOR ruh-fü-ZAY | lay puh-tee-za-rahⁿzh-MAHⁿ', ['integre']),
];

/* ── ACT 8 · LE JOLI, LE BEAU, LE SUBLIME (.1295-.1308) ─────────────────── */

export const ACT8_ROWS: Row[] = [
  col(1295, 'un joli petit village', 'a pretty little village', '/œ̃ ʒɔ.li pə.ti vi.laʒ/', 'uhⁿ zho-LEE puh-tee vee-LAZH', ['sublime'],
    'Joli : plaisant, gracieux, souvent à petite échelle. On sourit ; on n’est pas bouleversé.'),
  col(1296, 'un beau geste', 'a fine gesture', '/œ̃ bo ʒɛst/', 'uhⁿ boh ZHEST', ['sublime'],
    'Beau dit aussi le bien : un beau geste est généreux. Le beau et le bien se croisent souvent dans la langue.'),
  col(1297, 'un paysage sublime', 'a sublime landscape', '/œ̃ pe.i.zaʒ sy.blim/', 'uhⁿ pay-ee-ZAZH sü-BLEEM', ['sublime'],
    'Sublime : d’une grandeur qui saisit et dépasse. Dans la langue courante, aussi « excellent » : un dessert sublime.'),
  col(1298, 'le sentiment du sublime', 'the feeling of the sublime', '/lə sɑ̃.ti.mɑ̃ dy sy.blim/', 'luh sahⁿ-tee-MAHⁿ | dü sü-BLEEM', ['sublime'],
    'Dans la tradition esthétique : un mélange d’admiration et d’effroi devant ce qui nous dépasse, l’océan en tempête, la haute montagne.', SO),
  fam(1299, 'beau, la beauté, embellir', 'beautiful, beauty, to make more beautiful',
    '/bo la bo.te ɑ̃.bɛ.liʁ/', 'BOH, la boh-TAY, ahⁿ-beh-LEER', ['sublime'],
    'Embellir : rendre plus beau, ou présenter mieux que nature : embellir un souvenir.'),
  sent(1300, 'C’est joli, sans plus.', 'It is pretty, nothing more.',
    '/sɛ ʒɔ.li sɑ̃ plys/', 'seh zho-LEE | sahⁿ PLÜSS', ['sublime'], FCVDR),
  sent(1301, 'Devant la chute, nous sommes restés sans voix : c’était sublime.', 'Before the waterfall we were speechless: it was sublime.',
    '/də.vɑ̃ la ʃyt nu sɔm ʁɛs.te sɑ̃ vwa se.tɛ sy.blim/', 'duh-vahⁿ la SHÜT | noo somm res-TAY sahⁿ VWA | say-teh sü-BLEEM', ['sublime']),
  sent(1302, 'Ce n’est pas joli : c’est beau, et c’est autre chose.', 'It is not pretty: it is beautiful, and that is something else.',
    '/sə nɛ pa ʒɔ.li sɛ bo e sɛ.to.tʁə ʃoz/', 'suh neh pa zho-LEE | seh BOH | ay seh-toh-truh SHOHZ', ['sublime']),
  sent(1303, 'Il a eu le beau geste de rendre l’argent.', 'He had the decency to give the money back.',
    '/i.la y lə bo ʒɛst də ʁɑ̃dʁ laʁ.ʒɑ̃/', 'ee-la ü luh boh ZHEST | duh rahⁿdr lar-ZHAHⁿ', ['sublime']),
  rule(1304, 'Le joli plaît, le beau s’admire, le sublime saisit.', 'The pretty pleases, the beautiful is admired, the sublime seizes you.',
    '/lə ʒɔ.li plɛ lə bo sad.miʁ lə sy.blim se.zi/', 'luh zho-LEE PLEH | luh boh sad-MEER | luh sü-BLEEM say-ZEE',
    'Joli, beau, sublime : que pèse chacun ?',
    'Le joli pèse un plaisir léger ; le beau, une harmonie qu’on admire ; le sublime, une grandeur qui dépasse et inquiète un peu. Un choix de précision, pas une règle : beau couvre souvent les trois.',
    ['sublime']),
  sent(1305, 'Cette chapelle est d’une beauté austère.', 'This chapel has an austere beauty.',
    '/sɛt ʃa.pɛl ɛ dyn bo.te os.tɛʁ/', 'set sha-PEL | eh dün boh-TAY ohs-TEHR', ['sublime']),
  sent(1306, 'Avec les années, il a embelli ses souvenirs.', 'Over the years he has prettied up his memories.',
    '/a.vɛk le.za.ne i.la ɑ̃.bɛ.li se su.və.niʁ/', 'a-vek lay-za-NAY | ee-la ahⁿ-beh-LEE | say soo-vuh-NEER', ['sublime'], FCVDR),
  sent(1307, 'Rien n’est beau que le vrai : le vrai seul est aimable.', 'Nothing is beautiful but the true: the true alone is worthy of love.',
    '/ʁjɛ̃ nɛ bo kə lə vʁɛ lə vʁɛ sœl ɛ.tɛ.mabl/', 'ryehⁿ neh BOH | kuh luh VREH | luh vreh SUHL | eh-teh-MABL', ['sublime', 'citation'], FC,
    { register: 'soutenu' as Register, notes: 'Boileau, Épître IX, au marquis de Seignelay (XVIIe siècle). Aimable : digne d’être aimé, au sens classique. Dans le texte, le vers continue après un point-virgule.' }),
  sent(1308, 'Une ville peut être jolie sans être belle.', 'A town can be pretty without being beautiful.',
    '/yn vil pø.tɛtʁ ʒɔ.li sɑ̃.zɛtʁ bɛl/', 'ün VEEL | peu-tetr zho-LEE | sahⁿ-zetr BEL', ['sublime']),
];

/* ── ACT 9 · LE GOÛT ET L’ESTHÉTIQUE (.1309-.1322) ──────────────────────── */

export const ACT9_ROWS: Row[] = [
  col(1309, 'une plaisanterie de mauvais goût', 'a joke in poor taste', '/yn plɛ.zɑ̃.tʁi də mo.vɛ ɡu/', 'ün pleh-zahⁿ-TREE | duh moh-veh GOO', ['gout'],
    'De mauvais goût : déplacé, choquant. Ici, le goût touche à la morale.'),
  col(1310, 'avoir du goût', 'to have taste', '/a.vwaʁ dy ɡu/', 'a-vwar dü GOO', ['gout'],
    'Avoir du goût : savoir juger du beau, choisir avec justesse. Avoir bon goût, avoir mauvais goût.'),
  col(1311, 'un décor kitsch', 'a kitsch decor', '/œ̃ de.kɔʁ kitʃ/', 'uhⁿ day-KOR KEETSH', ['gout'],
    'Kitsch : chargé, sentimental, d’un goût douteux, parfois revendiqué avec humour. Souvent invariable : des objets kitsch.'),
  col(1312, 'des couleurs criardes', 'garish colours', '/de ku.lœʁ kʁi.jaʁd/', 'day koo-LUHR kree-YARD', ['gout'],
    'Criard : qui choque l’œil par trop d’éclat. Le contraire : sobre.'),
  fam(1313, 'l’esthétique, esthétique, un esthète', 'aesthetics, aesthetic, an aesthete',
    '/lɛs.te.tik ɛs.te.tik œ̃.nɛs.tɛt/', 'les-tay-TEEK, es-tay-TEEK, uhⁿ-nes-TET', ['gout'],
    'L’esthétique : la réflexion sur le beau, ou le style d’une œuvre. Esthétique : qui concerne la beauté. Un esthète place le beau au-dessus de tout.'),
  sent(1314, 'Leur salon est kitsch, et ils l’assument avec humour.', 'Their living room is kitsch, and they embrace it with humour.',
    '/lœʁ sa.lɔ̃ ɛ kitʃ e il la.sym a.vɛ.ky.muʁ/', 'luhr sa-LOHⁿ eh KEETSH | ay eel la-SÜM | a-veh-kü-MOOR', ['gout']),
  sent(1315, 'Cette plaisanterie était d’un goût douteux.', 'That joke was in questionable taste.',
    '/sɛt plɛ.zɑ̃.tʁi e.tɛ dœ̃ ɡu du.tø/', 'set pleh-zahⁿ-TREE | ay-teh duhⁿ GOO doo-TEU', ['gout'], FCVDR),
  sent(1316, 'Elle a eu beau chercher, elle n’a rien trouvé.', 'However hard she looked, she found nothing.',
    '/ɛ.la y bo ʃɛʁ.ʃe ɛl na ʁjɛ̃ tʁu.ve/', 'eh-la ü BOH shehr-SHAY | el na ryehⁿ troo-VAY', ['gout']),
  sent(1317, 'Le pont est solide, mais il n’est pas très esthétique.', 'The bridge is sturdy, but it is not very attractive.',
    '/lə pɔ̃ ɛ sɔ.lid mɛ il nɛ pa tʁɛ.zɛs.te.tik/', 'luh POHⁿ eh so-LEED | meh eel neh pa treh-zes-tay-TEEK', ['gout']),
  sent(1318, 'Le goût se forme : on apprend à voir.', 'Taste can be trained: you learn to see.',
    '/lə ɡu sə fɔʁm ɔ̃.na.pʁɑ̃ a vwaʁ/', 'luh GOO suh FORM | ohⁿ-na-PRAHⁿ a VWAR', ['gout']),
  rule(1319, 'Un jugement de goût se discute ; il ne se démontre pas.', 'A judgement of taste can be argued; it cannot be proved.',
    '/œ̃ ʒyʒ.mɑ̃ də ɡu sə dis.kyt il nə sə de.mɔ̃tʁ pa/', 'uhⁿ zhüzh-MAHⁿ duh GOO | suh dees-KÜT | eel nuh suh day-MOHⁿTR PA',
    'Peut-on discuter des goûts ?',
    'Oui, avec des raisons : l’équilibre, la sobriété, l’effet produit. Mais on ne le prouve pas comme un fait. Le proverbe dit qu’on n’en discute pas ; la critique d’art en discute tous les jours.',
    ['gout']),
  sent(1320, 'Ses couleurs criardes fatiguent l’œil.', 'Its garish colours tire the eye.',
    '/se ku.lœʁ kʁi.jaʁd fa.tiɡ lœj/', 'say koo-LUHR kree-YARD | fa-teeg LUHY', ['gout']),
  sent(1321, 'Un esthète trouvera ce salon trop chargé.', 'An aesthete will find this living room too cluttered.',
    '/œ̃.nɛs.tɛt tʁu.və.ʁa sə sa.lɔ̃ tʁo ʃaʁ.ʒe/', 'uhⁿ-nes-TET | troo-vuh-RA suh sa-LOHⁿ | troh shar-ZHAY', ['gout']),
  sent(1322, 'J’ai beau essayer, je n’aime pas ce tableau.', 'Try as I might, I do not like this painting.',
    '/ʒe bo e.se.je ʒə nɛm pa sə ta.blo/', 'zhay BOH ay-say-YAY | zhuh nem pa suh ta-BLOH', ['gout'], FCVDR),
];

/* ── ACT 10 · MÉMOIRE ET SOUVENIR (.1323-.1337) ─────────────────────────── */

export const ACT10_ROWS: Row[] = [
  col(1323, 'garder le souvenir de', 'to keep the memory of', '/ɡaʁ.de lə su.və.niʁ də/', 'gar-DAY luh soo-vuh-NEER duh', ['souvenir'],
    'Le souvenir : ce qui revient d’un moment vécu. On garde le souvenir d’une personne, d’un voyage.'),
  col(1324, 'avoir un trou de mémoire', 'to have a memory lapse', '/a.vwaʁ œ̃ tʁu də me.mwaʁ/', 'a-vwar uhⁿ TROO | duh may-MWAR', ['souvenir'],
    'Un oubli soudain et passager. Courant, à l’oral comme à l’écrit.'),
  col(1325, 'de mémoire d’homme', 'in living memory', '/də me.mwaʁ dɔm/', 'duh may-MWAR DOMM', ['souvenir'],
    'Aussi loin qu’on se souvienne : de mémoire d’homme, on n’avait jamais vu ça.'),
  col(1326, 'à la mémoire de', 'in memory of', '/a la me.mwaʁ də/', 'a la may-MWAR duh', ['souvenir'],
    'Pour honorer quelqu’un de disparu : une plaque à la mémoire des victimes. En souvenir de : plus intime.'),
  col(1327, 'se rappeler quelque chose', 'to remember something', '/sə ʁa.ple kɛl.kə ʃoz/', 'suh ra-PLAY | kel-kuh SHOHZ', ['souvenir'],
    'À l’écrit soigné, se rappeler se construit sans de : je me rappelle cette journée. Se rappeler de est attesté depuis le XVIIIe siècle et courant à l’oral, mais les grammairiens restent réticents (OQLF).'),
  fam(1328, 'mémoire, mémorable, un mémorial, mémoriel', 'memory, memorable, a memorial, memorial (adj.)',
    '/me.mwaʁ me.mɔ.ʁabl œ̃ me.mɔ.ʁjal me.mɔ.ʁjɛl/', 'may-MWAR, may-mo-RABL, uhⁿ may-mo-RYAL, may-mo-RYEL', ['souvenir'],
    'Mémorable : dont on se souviendra. Un mémorial : un monument. Mémoriel : qui concerne la mémoire collective.'),
  sent(1329, 'Je me souviens de cette crue comme si c’était hier.', 'I remember that flood as if it were yesterday.',
    '/ʒə mə su.vjɛ̃ də sɛt kʁy kɔm si se.tɛ jɛʁ/', 'zhuh muh soo-VYEHⁿ | duh set KRÜ | komm see say-teh YEHR', ['souvenir']),
  sent(1330, 'Je me rappelle très bien cette journée.', 'I remember that day very well.',
    '/ʒə mə ʁa.pɛl tʁɛ bjɛ̃ sɛt ʒuʁ.ne/', 'zhuh muh ra-PEL | treh BYEHⁿ | set zhoor-NAY', ['souvenir']),
  sent(1331, 'De mémoire d’homme, l’eau n’était jamais montée si haut.', 'In living memory, the water had never risen so high.',
    '/də me.mwaʁ dɔm lo ne.tɛ ʒa.mɛ mɔ̃.te si o/', 'duh may-MWAR DOMM | loh nay-teh zha-meh mohⁿ-TAY | see OH', ['souvenir'], FCVDR),
  sent(1332, 'Cette plaque a été posée à la mémoire des sinistrés.', 'This plaque was put up in memory of the flood victims.',
    '/sɛt plak a e.te po.ze a la me.mwaʁ de si.nis.tʁe/', 'set PLAK | a ay-TAY poh-ZAY | a la may-MWAR day see-nees-TRAY', ['souvenir']),
  sent(1333, 'Mes souvenirs de la crue sont flous.', 'My memories of the flood are hazy.',
    '/me su.və.niʁ də la kʁy sɔ̃ flu/', 'may soo-vuh-NEER | duh la KRÜ | sohⁿ FLOO', ['souvenir']),
  rule(1334, 'Un souvenir est d’abord celui d’une personne ; la mémoire peut être celle d’un groupe.', 'A recollection (un souvenir) is first of all one person’s; memory can belong to a group.',
    '/œ̃ su.və.niʁ ɛ da.bɔʁ sə.lɥi dyn pɛʁ.sɔn la me.mwaʁ pø.tɛtʁ sɛl dœ̃ ɡʁup/', 'uhⁿ soo-vuh-NEER | eh da-BOR | suh-lwee dün pehr-SONN | la may-MWAR | peu-tetr sel duhⁿ GROOP',
    'Souvenir ou mémoire ?',
    'La mémoire est aussi la faculté de se souvenir. Le souvenir est ce qui revient : une image, un moment. On parle surtout de la mémoire d’un peuple ; le souvenir collectif existe aussi, dans quelques formules : le jour du Souvenir, garder le souvenir des disparus.',
    ['souvenir']),
  sent(1335, 'Ce fut une soirée mémorable.', 'It was a memorable evening.',
    '/sə fy.tyn swa.ʁe me.mɔ.ʁabl/', 'suh fü-TÜN swa-RAY | may-mo-RABL', ['souvenir']),
  sent(1336, 'Elle a dédié son livre à la mémoire de son père.', 'She dedicated her book to her father’s memory.',
    '/ɛ.la de.dje sɔ̃ livʁ a la me.mwaʁ də sɔ̃ pɛʁ/', 'eh-la day-DYAY sohⁿ LEEVR | a la may-MWAR duh sohⁿ PEHR', ['souvenir'], FCVDR),
  sent(1337, 'J’ai eu un trou de mémoire au milieu de mon discours.', 'My mind went blank in the middle of my speech.',
    '/ʒe y œ̃ tʁu də me.mwaʁ o mi.ljø də mɔ̃ dis.kuʁ/', 'zhay ü uhⁿ TROO duh may-MWAR | oh mee-LYEU duh mohⁿ dees-KOOR', ['souvenir'], FCVR),
];

/* ── ACT 11 · COMMÉMORER, LE DEVOIR DE MÉMOIRE (.1338-.1351) ────────────── */

export const ACT11_ROWS: Row[] = [
  col(1338, 'une cérémonie commémorative', 'a commemorative ceremony', '/yn se.ʁe.mɔ.ni kɔ.me.mɔ.ʁa.tiv/', 'ün say-ray-mo-NEE | ko-may-mo-ra-TEEV', ['commemorer'],
    'Commémorer : rappeler solennellement un événement, souvent grave. Commémoratif : qui sert à cela.'),
  col(1339, 'le travail de mémoire', 'the work of remembrance', '/lə tʁa.vaj də me.mwaʁ/', 'luh tra-VY duh may-MWAR', ['commemorer'],
    'Un effort pour comprendre et intégrer un passé difficile, plutôt que de seulement s’en souvenir. On le distingue souvent du devoir de mémoire.'),
  col(1340, 'un lieu de mémoire', 'a site of memory', '/œ̃ ljø də me.mwaʁ/', 'uhⁿ LYEU duh may-MWAR', ['commemorer'],
    'Un lieu, un objet, une date où un groupe reconnaît son passé : un monument, un drapeau, une fête.'),
  col(1341, 'une loi mémorielle', 'a memory law', '/yn lwa me.mɔ.ʁjɛl/', 'ün LWA may-mo-RYEL', ['commemorer'],
    'En France, une loi qui dit comment la République qualifie un fait du passé. Le mot sert à décrire : des historiens et des parlementaires en ont débattu.', SO),
  col(1342, 'commémorer un drame', 'to commemorate a tragedy', '/kɔ.me.mɔ.ʁe œ̃ dʁam/', 'ko-may-mo-RAY uhⁿ DRAMM', ['commemorer'],
    'On commémore un drame ou une victoire ; on fête un succès. Célébrer peut dire les deux : célébrer une victoire, célébrer la mémoire de quelqu’un.'),
  sent(1343, 'Le 13 avril, la ville commémorera la crue de 1976.', 'On 13 April the town will commemorate the 1976 flood.',
    '/lə tʁɛz a.vʁil la vil kɔ.me.mɔ.ʁə.ʁa la kʁy də mil nœf sɑ̃ swa.sɑ̃t.sɛz/', 'luh TREZ a-VREEL | la VEEL ko-may-mo-ruh-RA | la KRÜ duh meel nuhf sahⁿ swa-sahⁿt-SEZ', ['commemorer']),
  sent(1344, 'On ne fête pas un drame : on le commémore.', 'You do not celebrate a tragedy: you commemorate it.',
    '/ɔ̃ nə fɛt pa.zœ̃ dʁam ɔ̃ lə kɔ.me.mɔʁ/', 'ohⁿ nuh fet pa-zuhⁿ DRAMM | ohⁿ luh ko-may-MOR', ['commemorer'], FCVDR),
  sent(1345, 'Au Canada, le 11 novembre est le jour du Souvenir.', 'In Canada, 11 November is Remembrance Day.',
    '/o ka.na.da lə ɔ̃z nɔ.vɑ̃bʁ ɛ lə ʒuʁ dy su.və.niʁ/', 'oh ka-na-DA | luh OHⁿZ no-VAHⁿBR | eh luh zhoor dü soo-vuh-NEER', ['commemorer', 'canada']),
  sent(1346, 'Le devoir de mémoire ne dispense pas du travail d’historien.', 'The duty to remember does not excuse us from the historian’s work.',
    '/lə də.vwaʁ də me.mwaʁ nə dis.pɑ̃s pa dy tʁa.vaj dis.tɔ.ʁjɛ̃/', 'luh duh-VWAR duh may-MWAR | nuh dees-PAHⁿSS pa | dü tra-vy dees-to-RYEHⁿ', ['commemorer'], FCVDR),
  sent(1347, 'L’histoire cherche ce qui s’est passé ; la mémoire dit ce qu’un groupe en retient.', 'History looks for what happened; memory says what a group keeps of it.',
    '/lis.twaʁ ʃɛʁʃ sə ki sɛ pa.se la me.mwaʁ di sə kœ̃ ɡʁup ɑ̃ ʁə.tjɛ̃/', 'lees-TWAR SHEHRSH | suh kee seh pa-SAY | la may-MWAR dee | suh kuhⁿ GROOP | ahⁿ ruh-TYEHⁿ', ['commemorer']),
  rule(1348, 'L’histoire établit, la mémoire retient, la commémoration rappelle.', 'History establishes, memory retains, commemoration recalls.',
    '/lis.twaʁ e.ta.bli la me.mwaʁ ʁə.tjɛ̃ la kɔ.me.mɔ.ʁa.sjɔ̃ ʁa.pɛl/', 'lees-TWAR ay-ta-BLEE | la may-MWAR ruh-TYEHⁿ | la ko-may-mo-ra-SYOHⁿ ra-PEL',
    'Histoire, mémoire, commémoration : que pèse chacune ?',
    'L’histoire établit les faits par des sources ; la mémoire est ce qu’un groupe en garde, avec ses émotions ; la commémoration le rappelle en public, à date fixe.',
    ['commemorer']),
  sent(1349, 'Le monument aux morts se dresse au centre du village.', 'The war memorial stands in the middle of the village.',
    '/lə mɔ.ny.mɑ̃ o mɔʁ sə dʁɛs o sɑ̃tʁ dy vi.laʒ/', 'luh mo-nü-MAHⁿ oh MOR | suh dress oh SAHⁿTR dü vee-LAZH', ['commemorer']),
  sent(1350, 'Trop de mémoire enferme ; trop d’oubli efface.', 'Too much memory imprisons; too much forgetting erases.',
    '/tʁo də me.mwaʁ ɑ̃.fɛʁm tʁo du.bli e.fas/', 'troh duh may-MWAR ahⁿ-FEHRM | troh doo-BLEE ay-FASS', ['commemorer']),
  sent(1351, 'Les élèves ont recueilli les témoignages des anciens.', 'The pupils collected the elders’ testimonies.',
    '/le.ze.lɛv ɔ̃ ʁə.kœ.ji le te.mwa.ɲaʒ de.zɑ̃.sjɛ̃/', 'lay-zay-LEV | ohⁿ ruh-kuh-YEE | lay tay-mwa-NYAZH | day-zahⁿ-SYEHⁿ', ['commemorer']),
];

/* ── ACT 12 · TA RÉPONSE (.1352-.1359) ──────────────────────────────────── */

export const ACT12_ROWS: Row[] = [
  sent(1352, 'Merci pour votre lettre : elle touche un sujet qui compte.', 'Thank you for your letter: it touches on a subject that matters.',
    '/mɛʁ.si puʁ vɔtʁ lɛtʁ ɛl tuʃ œ̃ sy.ʒɛ ki kɔ̃t/', 'mehr-SEE poor votr LETR | el toosh uhⁿ sü-ZHEH | kee KOHⁿT', ['reponse']),
  sent(1353, 'Vous prenez ici la sincérité pour la vérité.', 'Here you are taking sincerity for truth.',
    '/vu pʁə.ne i.si la sɛ̃.se.ʁi.te puʁ la ve.ʁi.te/', 'voo pruh-NAY ee-SEE | la sehⁿ-say-ree-TAY | poor la vay-ree-TAY', ['reponse'], FCVDR),
  sent(1354, 'Ce mot juge la personne ; c’est le récit que vous vouliez juger.', 'That word judges the person; it was the account you meant to judge.',
    '/sə mo ʒyʒ la pɛʁ.sɔn sɛ lə ʁe.si kə vu vu.lje ʒy.ʒe/', 'suh moh ZHÜZH la pehr-SONN | seh luh ray-SEE | kuh voo voo-LYAY zhü-ZHAY', ['reponse']),
  sent(1355, 'Un souvenir est précieux ; il ne remplace pas les archives.', 'A memory is precious; it does not replace the archives.',
    '/œ̃ su.və.niʁ ɛ pʁe.sjø il nə ʁɑ̃.plas pa le.zaʁ.ʃiv/', 'uhⁿ soo-vuh-NEER eh pray-SYEU | eel nuh rahⁿ-PLASS pa | lay-zar-SHEEV', ['reponse']),
  sent(1356, 'Avec le mot juste, votre critique devient plus forte.', 'With the right word, your criticism becomes stronger.',
    '/a.vɛk lə mo ʒyst vɔtʁ kʁi.tik də.vjɛ̃ ply fɔʁt/', 'a-vek luh moh ZHÜST | votr kree-TEEK | duh-vyehⁿ plü FORT', ['reponse']),
  rule(1357, 'Dis ce que chaque mot pèse, puis choisis celui qui pèse ce que tu veux dire.', 'Say what each word weighs, then choose the one that weighs what you mean.',
    '/di sə kə ʃak mo pɛz pɥi ʃwa.zi sə.lɥi ki pɛz sə kə ty vø diʁ/', 'dee suh kuh shak moh PEZ | pwee shwa-ZEE | suh-LWEE kee PEZ | suh kuh tü veu DEER',
    'Quelqu’un emploie un mot qui pèse autre chose. Que fait ta réponse ?',
    'Elle nomme la confusion, montre ce que chaque mot pèse, dit ce que cela change, puis reformule avec le mot juste. Sans moquerie : la précision suffit.',
    ['reponse']),
  sent(1358, 'Ce n’est pas une question de morale, mais de déontologie.', 'It is not a question of morality, but of professional ethics.',
    '/sə nɛ pa.zyn kɛs.tjɔ̃ də mɔ.ʁal mɛ də de.ɔ̃.tɔ.lɔ.ʒi/', 'suh neh pa-zün kes-TYOHⁿ duh mo-RAL | meh duh day-ohⁿ-to-lo-ZHEE', ['reponse'], FCVDR),
  sent(1359, 'Je comprends votre colère ; je ne partage pas votre mot.', 'I understand your anger; I do not share your choice of word.',
    '/ʒə kɔ̃.pʁɑ̃ vɔtʁ kɔ.lɛʁ ʒə nə paʁ.taʒ pa vɔtʁ mo/', 'zhuh kohⁿ-PRAHⁿ votr ko-LEHR | zhuh nuh par-tazh pa votr MOH', ['reponse']),
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
 *  §I. THE TEXTS (all « texte original écrit pour la leçon »)
 *
 *  Every person, town, outlet and institution is invented: Sainte-Ondine-
 *  du-Lac and its Société d’histoire, the crue d’avril 1976, Gérard Lavoie,
 *  Fatoumata Diallo, Hélène Rioux, the Courrier de Sainte-Ondine, the école
 *  des Berges and Nadia Ferland, Léa, Raymond Tessier, Thérèse Gingras, the
 *  monument des sauveteurs; the magazine Pages d’ici and Claire Dumont, the
 *  book « Les Hivers de Mopti » and Aïssata Konaté; Radio Lac-Bleu; the site
 *  Le Fil de l’Estuaire; Dr Anne Leclercq and her clinic; the magazine
 *  Bonjour Lausanne and Jacques; Yvon Bélanger; the blog Pas à pas, Margot
 *  and the village of Port-Aubin; the site Arts d’ici, the exhibition
 *  « Couleurs du fleuve » and Ousmane. Real places are settings only.
 * ══════════════════════════════════════════════════════════════════════════ */

/** Act 1: Hélène's write-up of the evening of testimonies (about 270 words). */
export const LECTURE_TEMOINS =
  'Compte rendu de la Soirée des témoins du 9 mars, salle paroissiale de Sainte-Ondine-du-Lac. Pour les cinquante ans de la crue d’avril 1976, la Société d’histoire recueille les souvenirs des anciens. Une quarantaine de personnes étaient présentes. M. Gérard Lavoie, quatre-vingt-huit ans, a ouvert la soirée. Il se souvient d’un dimanche matin, de l’eau qui montait jusqu’aux marches de l’église, et de sa mère qui chargeait la barque du voisin. Son récit a ému toute la salle. Notre archiviste, Fatoumata Diallo, a pourtant rappelé ce que disent les archives du Courrier de Sainte-Ondine : la crue a atteint son plus haut niveau le mardi 13 avril, et l’eau s’est arrêtée devant le bureau de poste, à deux rues de l’église. Quelqu’un a lancé : « Alors, il ment ! » Le ton est monté. Il a fallu trouver les mots justes : M. Lavoie est sincère ; c’est son souvenir qui n’est pas exact. Il ne ment pas, il se trompe, comme chacun de nous se tromperait après cinquante ans. La discussion s’est ensuite élargie. Faut-il graver sur la plaque les souvenirs des témoins, ou les faits établis par les archives ? Plusieurs ont parlé de « devoir de mémoire » ; d’autres ont répondu que la mémoire d’un village n’est pas encore son histoire. Nous n’avons rien tranché, mais nous repartons avec une règle de conduite : avant de juger un témoignage, se demander si l’on juge la personne ou le récit. La prochaine soirée aura lieu le 6 avril, à la bibliothèque. Hélène Rioux, secrétaire de la Société d’histoire.';

/** Act 5: an invented local paper's code of conduct (about 180 words). */
export const LECTURE_CHARTE =
  'Charte de déontologie du Courrier de Sainte-Ondine (extrait). Préambule. Cette charte n’est pas une leçon de morale : elle dit ce que nos journalistes s’engagent à faire dans leur métier. Les questions d’éthique plus larges, comme la publication de la photo d’une victime, sont discutées chaque fois en comité. Article 1. Le journaliste vérifie les faits avant de les publier et cite ses sources. Article 2. Il distingue clairement l’information du commentaire. Article 3. Il corrige rapidement et visiblement toute erreur. Article 4. Il refuse tout cadeau ou avantage qui pourrait influencer son travail et déclare tout conflit d’intérêts. Article 5. Il respecte la vie privée des personnes, sauf si l’intérêt public l’exige. Article 6. Il ne présente jamais le souvenir d’un témoin comme un fait établi sans le dire. Tout manquement à la présente charte est examiné par le comité de rédaction, qui peut demander une rectification.';

/** Act 10: an article on the pupils' memory project (about 190 words). */
export const LECTURE_ECOLE =
  'Le Courrier de Sainte-Ondine, rubrique « Éducation ». Depuis janvier, les élèves de sixième année de l’école des Berges recueillent les souvenirs des aînés sur la crue de 1976. Chaque élève a enregistré un témoin. « Un souvenir, c’est ce qu’une personne garde d’un moment vécu, explique leur enseignante, Nadia Ferland. La mémoire du village, c’est ce que tous ces souvenirs finissent par former ensemble. » Les élèves ont découvert que deux témoins ne se rappellent jamais la même scène de la même façon. L’une se souvient de la barque des pompiers ; un autre jure qu’il n’y avait aucune barque. « On a appris à ne pas dire que quelqu’un ment, raconte Léa, onze ans. Parfois, c’est juste un trou de mémoire. » Les enregistrements seront versés aux archives de la Société d’histoire. De mémoire d’homme, l’eau n’était jamais montée aussi haut ; les élèves, eux, auront laissé une trace pour ceux qui ne s’en souviendront plus.';

/** Act 12: the model the learner imitates, Hélène's reply to a reader. */
export const LECTURE_MODELE =
  'Dans le Courrier de Sainte-Ondine, Hélène Rioux répond à un lecteur, Raymond Tessier, qui écrivait : « M. Lavoie a menti sur la crue : ses dates sont fausses, donc son témoignage est une infox. Et votre journal, en le citant, a manqué à la morale. » Voici sa réponse. « Monsieur, merci pour votre lettre : elle touche un sujet qui compte, mais trois de vos mots pèsent autre chose que ce que vous voulez dire. D’abord, M. Lavoie n’a pas menti. Mentir, c’est dire faux en le sachant ; lui croit ce qu’il raconte. Il est sincère, et son souvenir n’est pas exact : vous prenez ici la sincérité pour la vérité. Ensuite, son témoignage n’est pas une infox. Une infox, ou fausse nouvelle comme on dit plutôt chez nous, cherche à tromper ; une erreur de bonne foi, non. Enfin, notre journal n’a pas manqué à la morale, ni même à sa déontologie : notre charte demande de ne jamais présenter un souvenir comme un fait établi sans le dire, et l’article précisait que les archives donnent le mardi 13 avril. Ce n’est donc pas une question de morale, mais de déontologie, et elle a été respectée. Je comprends votre colère ; je ne partage pas vos mots. Avec les mots justes, votre critique deviendrait plus forte, et plus utile : « Le souvenir de M. Lavoie diffère des archives ; la plaque devra donner les dates établies. » C’est exactement ce que la Société d’histoire propose. Veuillez agréer, Monsieur, mes salutations distinguées. Hélène Rioux »';

/** The task: the reader's letter the learner answers (about 125 words). */
export const MESSAGE_THERESE =
  '« Je ne comprends pas l’enthousiasme pour le nouveau monument des sauveteurs. Il est laid, et dépenser l’argent public pour quelque chose d’aussi moche est tout simplement immoral. Ceux qui le trouvent sublime n’ont aucun goût : il est tout au plus joli. Ensuite, on nous parle de devoir de mémoire, mais la Ville a fait corriger les dates des témoins par des historiens : nos souvenirs sont notre mémoire, et personne n’a le droit d’y toucher. Enfin, organiser une cérémonie le 13 avril, c’est fêter un drame : il n’y a rien à célébrer dans une catastrophe. » Thérèse Gingras, Sainte-Ondine';

/** The ten « dans un texte » paragraphs (acts 2 to 11). */
export const TEXTE_A2 =
  'Une critique parue dans le magazine Pages d’ici. Repère ce qui est dit sincère, véridique ou vraisemblable. « Dans Les Hivers de Mopti, Aïssata Konaté raconte son enfance au Mali. Le ton est d’une grande sincérité : elle dit ce qu’elle a ressenti, sans pose. Mais plusieurs lecteurs ont relevé des dates impossibles, et l’éditeur a reconnu deux erreurs. Faut-il parler de mensonge ? Non. Le livre est sincère ; il n’est pas toujours véridique. Quant à la scène du lion au marché, elle est vraisemblable dans le récit, mais l’autrice précise en postface qu’elle l’a imaginée. Un récit de vie n’est pas un rapport d’enquête. » Claire Dumont';

export const TEXTE_A3 =
  'La chronique consommation de Radio Lac-Bleu. Trouve qui ment, qui se trompe, qui induit en erreur. « Cette semaine, une auditrice de Gatineau nous écrit. Le vendeur lui avait assuré que sa voiture d’occasion n’avait jamais eu d’accident. Il le savait pourtant : le rapport du garage le mentionnait. Il a donc menti. Le site d’annonces, lui, affichait un kilométrage erroné, recopié d’une ancienne fiche : il s’est trompé, mais il a induit l’acheteuse en erreur. Enfin, le vendeur n’a jamais dit que les freins étaient usés : c’est ce qu’on appelle mentir par omission. Notre conseil : faites toujours inspecter le véhicule. »';

export const TEXTE_A4 =
  'Une mise au point publiée par le site Le Fil de l’Estuaire. Trouve l’infox, l’erreur et la nouvelle satirique. « Trois messages ont circulé cette semaine. Le premier affirmait que l’eau du robinet serait coupée tout l’été : c’est faux, et son auteur, qui vend des filtres, le savait. C’est une infox, ce que l’on appelle plutôt au Québec une fausse nouvelle. Le deuxième annonçait le festival le 12 juillet au lieu du 19 : l’office de tourisme s’était trompé, et il s’en est excusé. Le troisième, publié par un site humoristique, prétendait que le maire allait remplacer les feux rouges par des chorales. C’est une nouvelle satirique : personne n’était censé la croire. »';

export const TEXTE_A5 =
  'Un courriel interne d’une clinique vétérinaire de Namur. Pour chaque phrase, demande-toi : morale, éthique ou déontologie ? « Chers collègues, plusieurs d’entre vous m’ont demandé si l’on pouvait refuser de soigner l’animal d’un client qui ne paie jamais. Sur le plan de la déontologie, le code que suit notre clinique est clair : une urgence est toujours prise en charge. Pour le reste, c’est une question d’éthique, que nous discuterons ensemble jeudi. Je vous demande seulement de ne pas faire la morale aux clients à l’accueil : ce n’est pas notre rôle. Bonne semaine, Anne Leclercq »';

export const TEXTE_A6 =
  'Une lettre au courrier des lecteurs du magazine Bonjour Lausanne. Trouve le regret, le remords et la honte. « J’ai quarante ans et je n’ai jamais appris le piano : c’est mon grand regret. Mais ce qui m’empêche de dormir, c’est autre chose. À vingt ans, j’ai laissé accuser une collègue d’une erreur que j’avais commise. Elle a perdu son poste. J’en ai des remords depuis vingt ans. Je n’ose pas en parler à ma femme : j’ai honte de celui que j’étais. Dois-je retrouver cette collègue ? Jacques » Réponse de la rédaction : « Un regret se porte ; un remords se répare, parfois. Écrivez-lui. »';

export const TEXTE_A7 =
  'Une brève du Courrier de Sainte-Ondine. Trouve le conflit d’intérêts, la personne intègre et ce qui a été cautionné. « Le conseil municipal a attribué mardi le chantier de la nouvelle digue. Le conseiller Yvon Bélanger, dont le beau-frère dirige l’une des entreprises candidates, s’est retiré du vote pour éviter tout conflit d’intérêts. La directrice générale, connue pour sa probité, a annoncé que le texte intégral des offres serait publié. Une conseillère de l’opposition regrette toutefois que le conseil ait cautionné, l’an dernier, un contrat signé sans appel d’offres. »';

export const TEXTE_A8 =
  'Un carnet de voyage publié sur le blog Pas à pas. Repère le joli, le beau et le sublime. « Le village de Port-Aubin est joli : des maisons colorées, des jardins fleuris, un petit café. On s’y promène avec plaisir, puis on l’oublie. L’église, elle, est belle : ses proportions sont justes, sa pierre grise donne une impression d’harmonie, et l’on reste longtemps à la regarder. Mais le soir, au bord de la falaise, devant le fleuve en tempête, nous n’avons plus parlé. Le vent, l’immensité, une pointe de peur : c’était sublime. » Margot';

export const TEXTE_A9 =
  'Un avis de visiteur publié par le site Arts d’ici, à Dakar. Repère les jugements de goût et ce qui les appuie. « J’ai visité l’exposition Couleurs du fleuve au centre culturel. Certains tableaux m’ont paru criards : trop de rouge, rien pour reposer l’œil. Mais je reconnais qu’ils ont une vraie esthétique, cohérente d’une salle à l’autre. La boutique, en revanche, vend des souvenirs franchement kitsch. On me dira que des goûts et des couleurs, on ne discute pas ; j’ai pourtant essayé de donner mes raisons. » Ousmane';

export const TEXTE_A10 =
  'Un avis affiché à la bibliothèque de Sainte-Ondine. Trouve le souvenir, la mémoire et « à la mémoire de ». « Vous avez chez vous des photos de la crue de 1976 ? Apportez-les avant le 30 mars : nous les numériserons et vous les rendrons le jour même. Chaque photo est un souvenir de famille ; ensemble, elles formeront la mémoire de notre ville. Une exposition ouvrira le 13 avril, jour anniversaire de la crue, à la mémoire des deux sauveteurs disparus cette nuit-là. Rappelez-vous : même une photo floue peut raviver le souvenir d’un voisin. »';

export const TEXTE_A11 =
  'Un communiqué de la Ville de Sainte-Ondine. Trouve ce qu’on commémore, ce qu’on célèbre, et la place de l’histoire. « Le 13 avril, la Ville commémorera les cinquante ans de la crue de 1976 par une cérémonie devant le nouveau monument des sauveteurs. Une plaque commémorative portera les dates établies par les historiens de la Société d’histoire ; les témoignages recueillis par les élèves seront présentés à part, sous le titre Nos souvenirs. Le 14 avril, la Ville célébrera aussi l’inauguration de la nouvelle digue, avec un concert sur la place. Mémoire et histoire ne s’opposent pas : l’une garde, l’autre vérifie. »';
