// c1.06.l1 « Nuancer à l’oral » · the authored corpus, the imports, the
// long texts and the citation constants. DRAFT, to
// B1-WORKSHOP-AND-VOCAB-SHAPES.md §1 and §1.4 (the workshop shape) on top of
// B1-BUILD-PLAYBOOK.md, with the C1 rules of C1-BUILD-LOG.md (« What is
// different at C1 », decisions 1 and 16) and this lesson's section of
// C1-RESEARCH-PLAN.md. Structural model: b2.26 « Réunions et négociations »
// (../b2/reunions-negociation-*), whose file layout, helpers, act loop and
// spoken task shape it copies.
//
// DRAFT. Nothing here is imported into Postgres or merged into seed.json.
//
// STABLE EXPORTS (a later lesson may import REFRAME from this file; do not
// rename): REFRAME, REFRAME_EN, UNIT, LESSON_ID, THEME, LEVEL, E, ALL_ROWS,
// ROWS_BY_ACT, IMPORTED, IMPORT_IDS, PG_ROWS, Cap.
//
// ══════════════════════════════════════════════════════════════════════════
//  WHAT THIS UNIT OWNS
// ══════════════════════════════════════════════════════════════════════════
//
//   POLITENESS AND DISTANCE IN SPEECH, AT C1, AS A MATTER OF DOSAGE (Paul’s
//   refocus, decision 1: past b2.20 and b2.22). The learner softens,
//   distances and calibrates claims and requests out loud, disagrees and
//   criticises with regard, hears the hedges of others, and sets the dose.
//
//     act 1   the problem: the blunt remark and the remark wrapped until it
//             says nothing; the recap of the eight lessons it builds on
//     act 2   the softening aside: me semble-t-il, si je ne m’abuse, si je
//             ne me trompe, à ma connaissance; where the aside goes
//     act 3   betting without swearing: il y a fort à parier que, il est
//             permis de penser que (+ indicatif), rien n’indique que
//             (subjonctif le plus souvent), j’en mettrais ma main au feu,
//             je ne parierais pas là-dessus
//     act 4   epistemic devoir: il doit être, ça doit être, il devait être,
//             il doit y avoir un malentendu, vous devez faire erreur; the
//             ambiguity with obligation (« il a dû » and « devrait » are
//             cited from lessons 4 and 8 in B1)
//     act 5   the approximate word: en quelque sorte, à proprement parler,
//             pour ainsi dire, un tant soit peu
//     act 6   asking from a distance: je vous saurais gré de (never « je
//             vous serais gré »), être amené à, seriez-vous en mesure de
//     act 7   contradicting with regard: avec tout le respect que je vous
//             dois, sauf votre respect, loin de moi l’idée de, sans vouloir
//             + infinitif; what each one announces
//     act 8   the hedged criticism: acknowledge, one precise point, a
//             suggestion, the firm point left firm; gagnerait à, je me
//             demande si, ce qui me gêne un peu, je ne dis pas que... je dis
//             que; « sans vouloir te vexer » heard as an announcement
//     act 9   saying less to say more: litote and understatement in speech
//             (ce n’est pas mauvais du tout, il n’est pas bête, je ne dis
//             pas non, disons que); Québec « c’est pas pire », « pas
//             terrible » downward. Ownership: c1.17 owns connotation,
//             c1.19 litote as a literary figure (research plan)
//     act 10  the dose: hedge stacking, one hedge per doubt, what is never
//             hedged (a fact, a deadline, a safety limit, a request)
//     act 11  hearing the nuance of others: c’est intéressant, on en
//             reparlera, je vais y réfléchir, il faudrait voir, ce n’est
//             pas exclu, pourquoi pas
//     act 12  the task: a spoken voice message (120 to 240 s) to the
//             director, graded on dosage and register; the quiz
//
//   NOT OWNED, CITED BY TRAIL POSITION ONLY (act 1 recap, rows reused):
//     la leçon 9 du B1 (the request ladder, the imparfait de politesse),
//     la leçon 8 du B1 (the conditional), les leçons 25 et 26 du B1
//     (register, tu and vous), la leçon 20 du B2 (impersonal families: il
//     se pourrait, il semblerait), la leçon 22 du B2 acts 5-6 (hedging in
//     writing, the over-hedged sentence), la leçon 24 du B2 act 5 (the
//     writer’s distance: semble-t-il, prétendument), la leçon 26 du B2 act 5
//     (nuanced disagreement: je ne partage pas tout à fait, cela dit). Also
//     cited where a form reappears: la leçon 4 du B1 (« il a dû », a guess),
//     la leçon 15 du B2 (« tout porte à croire »), la leçon 21 du B2 (« je ne
//     saurais »), la leçon 19 du B2 (« sauf erreur de ma part »), la leçon
//     20 du C1 (« loin de moi l’idée », read there as false modesty), la
//     leçon 1 du C1 (row « Sans vouloir minimiser vos efforts »). ALREADY
//     TAUGHT, NEVER RE-TAUGHT: il semblerait que, il se pourrait que,
//     vraisemblablement, tout porte à croire, si je peux me permettre, je ne
//     saurais, prétendument, sauf erreur.
//
//   NO UNGRAMMATICAL SENTENCE IS EVER A ROW. A row may be correct French at
//   the wrong dose (the over-hedged message is free text in a reading and
//   in groupDrill `free()` quotations); every wrong FORM (« je vous serais
//   gré », « il y a fort à parier qu’il vienne ») lives in a
//   commonErrors.wrong, a trapDrill.promptSound or a quiz errorSpot.prompt.
//
// ══════════════════════════════════════════════════════════════════════════
//  §A. MEASURED. Postgres read 2026-10-01, read-only, inside
//      BEGIN TRANSACTION READ ONLY ... COMMIT (no plain SET).
// ══════════════════════════════════════════════════════════════════════════
//
//  1. THEME `nuances-et-registres` (« Les nuances et les registres »,
//     fondations, c1-c2), content_themes row created in C1 Phase 0;
//     sub_themes read back as ["nuancer à l'oral"]. No widening needed.
//
//  2. ID BLOCK: `fr.c1.nuances-et-registres.1000`-`.1199`, claimed for c1.06
//     in the ledger (wave 3 setup). Probed 2026-10-01: 0 rows in 1000-1199
//     at any level. The 165 legacy Speak rows are .001-.165. Used: .1000-
//     .1156 except .1004, .1005, .1097 (twins, §A.4); .1157-.1199 free.
//
//  3. REUSED ROWS.
//     - Act 1 recap: published B1 and B2 rows, all in seedPlusPacks() and
//       read there 2026-10-01 (§F, trailing comments).
//     - Acts 2 to 11: published rows that already carry one of this
//       lesson’s NEW moves, reused instead of a near twin: c1.20’s « Loin de
//       moi l’idée de me plaindre. », c1.01’s « Sans vouloir minimiser vos
//       efforts... », b2.15’s « Tout porte à croire que... », b1.04’s « Il a
//       dû oublier. », b1.08’s « Ils devraient arriver vers huit heures. ».
//     - TWENTY POSTGRES-ONLY rows (`PG_ROWS`): sixteen legacy c1 Speak
//       rows (nuances-et-registres, francais-professionnel-avance,
//       culture-profonde) and four b1/b2 phrase rows that are TWINS of what
//       this lesson would have authored (§A.4). Published, absent from the seed cut, fr/en
//       copied VERBATIM from Postgres. Each was read before reuse: straight
//       apostrophes (decision 13’s text edit at import applies), no spaced
//       « ? » problem, no wrong mood. Drills {sentence, review} for the legacy rows; the phrase rows
//       carry no flashcard or no ipa; so all twenty are
//       NOT_DECK_ABLE and NOT_SPEAKABLE: named in groupDrills and examples,
//       never released, never in a practice.
//     - REJECTED on reading: fr.c1.francais-professionnel-avance.160 « Il y a
//       fort à parier que la réponse officielle se fasse encore attendre. »
//       (WRONG MOOD: « il y a fort à parier que » takes the indicative, «
//       se fera »; flag for a text edit, open question 5);
//       nuances-et-registres .137 (« pas mal » = « excellent » overstated);
//       culture-profonde .127, .140, .157 (no space before « ? »);
//       nuances-et-registres .106 (a real city’s rents).
//
//  4. TWINS. Every authored row’s `fr` was compared, normalised (case,
//     accents, apostrophes, punctuation), with every Postgres row of every
//     theme and level on 2026-10-01 (scratch twin check). Four twins were
//     found and are REUSED instead (all Postgres-only, in PG_ROWS): « en
//     quelque sorte » (fr.b1.expressions-frequentes.073), « mettre les
//     formes » (fr.b2.rp-etiquette.048), « prendre des gants »
//     (fr.b2.rp-etiquette.049), « je me demande si »
//     (fr.b1.opinions-et-avis.106). After the swap: 0 twins. Their planned
//     ids .1004, .1005, .1097 stay unused.
//
//  5. APOSTROPHES. Every authored French string uses the typographic
//     apostrophe (’). Legacy and seed rows keep their own; none is used in a
//     scenario.
//
//  6. RESPELLINGS spelled for the nasal checker rather than the ear (the
//     consonant is really pronounced, written double): « semaine » SMENN,
//     « personne » pehr-SONN, « comme » KOMM, « même » MEM (house), «
//     reprenne » ruh-PRENN, « bonne » BONN, « donne » DONN, « problème »
//     pro-BLEMM, « thème » TEMM, « Hélène » ay-LENN, « gêne » ZHENN. No
//     U+203F tie anywhere.
//
//  7. FACT AND NORM CHECK (for the pre-review). Every person, institute,
//     museum, printer, street and figure is INVENTED: Institut Verlune
//     (house invention), the exhibition « Rivières sous la ville »,
//     l’Atelier des Berges (Lyon), l’Imprimerie du Pont-Rouge, Hélène
//     Marchand, Karim Benali, Sophie Lavoie, Théo Brunet, rue des
//     Tanneurs-Bleus, visitor and budget figures, the years 1890 / 1898 of
//     an invented creek. Every text is « texte original écrit pour la
//     leçon ». No quotation from any published text. Norm verdicts to
//     verify (R Le Robert, L Larousse, A Académie, Q OQLF/BDL, U Usito, G
//     Grevisse):
//       a. « je vous saurais gré de » (savoir gré); « je vous serais gré »
//          is an error (A, « Dire, ne pas dire »; Q; Clés de la rédaction,
//          Bureau de la traduction: « savoir gré et non être gré »).
//          Checked 2026-10-01 by web search (A fiche cited by several
//          sources; Bureau de la traduction page read in the results).
//       b. « il y a fort à parier que » + indicatif (R, L: « il est très
//          probable que »).
//       c. « il est permis de penser que » + indicatif (opinion presented
//          as reasonable).
//       d. « rien n’indique que »: the subjunctive is the usual mood after
//          a negated verb of declaration; the indicative is also found when
//          the fact is presented as real (G, the mood after a negated main
//          verb). The lesson says « le plus souvent le subjonctif » and
//          every typed answer accepts both.
//       e. « si je ne m’abuse » = « si je ne me trompe » (L, R), soutenu.
//       f. « me semble-t-il » as an incise with inversion and euphonic t.
//       g. « un tant soit peu » = « si peu que ce soit » (L), mostly in
//          hypothetical, interrogative or negative contexts; affirmative
//          use exists and is usually ironic (R). The lesson never calls the
//          affirmative wrong.
//       h. « à proprement parler » = « au sens strict » (L).
//       i. « en quelque sorte », « pour ainsi dire » = approximations (R).
//       j. « être amené à » + infinitif = être conduit à (L); in
//          administrative speech it often announces a constraint softly.
//       k. « sauf votre respect » = formula excusing a remark that might
//          offend (L); « avec tout le respect que je vous dois » often
//          introduces a firm disagreement (usage claim, hedged « souvent »).
//       l. « loin de moi l’idée de » (L: « je n’ai pas du tout l’intention
//          de »); c1.20 read it as false modesty, here a sincere caution
//          that often precedes « mais ».
//       m. « sans vouloir te vexer » often introduces exactly the remark
//          that may vex (usage claim, hedged « souvent »).
//       n. QUÉBEC: « c’est pas pire » = pretty good, a compliment (U: « pas pire », fam., Q, « plus ou moins bien », syn. pas mal, read 2026-10-01; legacy
//          row .105 says the same); « pas terrible » = mediocre in France
//          AND in Québec (R, U). The lesson never claims that one region is
//          more or less polite; it tags usages only.
//       o. Epistemic devoir: « il doit être en réunion » (probability),
//          ambiguity with obligation (G; b1.04 owns « il a dû », b1.08 «
//          devrait »).
//       p. « Vous devez faire erreur » and « il doit y avoir un malentendu »
//          as tactful ways to contradict (usage claim).
//
// ══════════════════════════════════════════════════════════════════════════

import type { Item } from '../../../../ealch-v2/src/content/schema.ts';
import { seedPlusPacks } from '../../../../ealch-v2/src/content/seed-plus-packs.ts';
const seed = seedPlusPacks();

/** A citation that OPENS a sentence needs a capital. */
export function Cap(s: string): string { return s.charAt(0).toUpperCase() + s.slice(1); }

/* ══════════════════════════════════════════════════════════════════════════
 *  §B. IDENTITY
 * ══════════════════════════════════════════════════════════════════════════ */

export const UNIT = {
  id: 'c1.06',
  seq: 6,
  title: 'Nuance in Speech',
  sub: 'Nuancer à l’oral',
  canDo: 'Can soften, distance and calibrate claims and requests in speech at C1: add a hedging aside where the doubt lies, grade a forecast from a firm bet to no evidence, make a supposition with devoir, approximate a word precisely, make a formal request, contradict and criticise with regard while keeping firm points firm, use and hear litote and understatement, decode the polite brush-off, and set the dose of hedging for the person and the stakes; can leave a two to four minute spoken message that does all of this',
  prereqUnitIds: ['b2.26', 'b2.20'],
} as const;

export const LESSON_ID = 'c1.06.l1';
export const THEME = 'nuances-et-registres';
export const LEVEL = 'c1' as const;

/** ONE block, claimed in the C1 build log ledger (wave 3). */
export const ID_RANGES = [[1000, 1199]] as const;

export const E = (n: number) => `fr.${LEVEL}.${THEME}.${String(n).padStart(3, '0')}`;

/* ══════════════════════════════════════════════════════════════════════════
 *  §C. HOW THIS LESSON NAMES ITS NEIGHBOURS
 *
 *  By trail position, in French words (« la leçon 26 du B2 »), never a raw
 *  unit id. The number is the unit's `seq` in seedPlusPacks() (read
 *  2026-10-01: b1.04 4, b1.08 8, b1.09 9, b1.25 25, b1.26 26, b2.15 15,
 *  b2.19 19, b2.20 20, b2.21 21, b2.22 22, b2.24 24, b2.26 26, c1.01 1,
 *  c1.20 20).
 * ══════════════════════════════════════════════════════════════════════════ */

const SEED_SEQ = new Map<string, number>(
  (seed as unknown as { units: { id: string; seq: number | string }[] }).units.map((u) => [u.id, Number(u.seq)]),
);

function seqOf(unitId: string): { n: number; band: string } {
  const n = SEED_SEQ.get(unitId);
  if (!n || !Number.isFinite(n)) throw new Error(`c1.06: no seq for ${unitId}`);
  return { n, band: unitId.slice(0, 2).toUpperCase() };
}
/** « la leçon 26 du B2 »: French surfaces. */
export function refFr(unitId: string): string { const { n, band } = seqOf(unitId); return `la leçon ${n} du ${band}`; }
/** « lesson 26 in B2 »: English surfaces (userEn, briefEn, grader notes). */
export function refEn(unitId: string): string { const { n, band } = seqOf(unitId); return `lesson ${n} in ${band}`; }

export const DEVOIR_UNIT = 'b1.04';
export const COND_UNIT = 'b1.08';
export const POLITESSE_UNIT = 'b1.09';
export const REGISTRES_UNIT = 'b1.25';
export const TUVOUS_UNIT = 'b1.26';
export const CAUSE_UNIT = 'b2.15';
export const RESTRICTION_UNIT = 'b2.19';
export const IMPERSONNEL_UNIT = 'b2.20';
export const NEGATION_UNIT = 'b2.21';
export const ACADEMIQUE_UNIT = 'b2.22';
export const CRITIQUE_UNIT = 'b2.24';
export const REUNIONS_UNIT = 'b2.26';
export const BILAN_C1_UNIT = 'c1.01';
export const LIGNES_C1_UNIT = 'c1.20';

export const DEVOIR_REF = refFr(DEVOIR_UNIT);
export const COND_REF = refFr(COND_UNIT);
export const POLITESSE_REF = refFr(POLITESSE_UNIT);
export const REGISTRES_REF = refFr(REGISTRES_UNIT);
export const TUVOUS_REF = refFr(TUVOUS_UNIT);
export const CAUSE_REF = refFr(CAUSE_UNIT);
export const RESTRICTION_REF = refFr(RESTRICTION_UNIT);
export const IMPERSONNEL_REF = refFr(IMPERSONNEL_UNIT);
export const NEGATION_REF = refFr(NEGATION_UNIT);
export const ACADEMIQUE_REF = refFr(ACADEMIQUE_UNIT);
export const CRITIQUE_REF = refFr(CRITIQUE_UNIT);
export const REUNIONS_REF = refFr(REUNIONS_UNIT);
export const BILAN_C1_REF = refFr(BILAN_C1_UNIT);
export const LIGNES_C1_REF = refFr(LIGNES_C1_UNIT);
export const POLITESSE_REF_EN = refEn(POLITESSE_UNIT);
export const TUVOUS_REF_EN = refEn(TUVOUS_UNIT);
export const REUNIONS_REF_EN = refEn(REUNIONS_UNIT);
export const IMPERSONNEL_REF_EN = refEn(IMPERSONNEL_UNIT);

/* ══════════════════════════════════════════════════════════════════════════
 *  §D. THE QUOTATIONS, IMPORTED, never retyped
 * ══════════════════════════════════════════════════════════════════════════ */

export { REFRAME as B109_REFRAME, REFRAME_EN as B109_REFRAME_EN } from '../b1/politesse-corpus.ts';
export { REFRAME as B126_REFRAME, REFRAME_EN as B126_REFRAME_EN } from '../b1/tu-ou-vous-corpus.ts';
export { REFRAME as B220_REFRAME, REFRAME_EN as B220_REFRAME_EN } from '../b2/tournures-impersonnelles-corpus.ts';
export { REFRAME as B226_REFRAME, REFRAME_EN as B226_REFRAME_EN } from '../b2/reunions-negociation-corpus.ts';

/* ══════════════════════════════════════════════════════════════════════════
 *  §E. THE REFRAME AND THE ONE METAPHOR
 *
 *  THE DIMMER (le variateur). Every hedge, aside, litote or formula turns
 *  the light of a remark down a notch. Full light is the blunt remark that
 *  dazzles and closes the other person’s ears (act 1); turned too low, the
 *  remark goes dark and says nothing (act 1, act 10). The C1 speaker turns
 *  the dial to the person, the stakes and the room, and leaves some points
 *  at full light: a fact, a deadline, a safety limit.
 *
 *  It is NOT « be polite » (lesson 9 in B1’s ground), and NOT « always
 *  soften » (act 10 teaches what is never hedged).
 * ══════════════════════════════════════════════════════════════════════════ */

export const REFRAME = 'Nuancer, c’est doser : assez pour ménager l’autre, jamais au point d’éteindre ce que tu dis.';
export const REFRAME_EN = 'Hedging is a matter of dosage: enough to spare the other person, never so much that you switch off what you are saying.';

export const REFRAME_REJECTED: readonly { text: string; why: string }[] = [
  {
    text: 'À l’oral, adoucis toujours ce que tu dis.',
    why: 'False where act 10 has to hold: a safety limit, a date or a factual correction loses its force when it is softened, and act 8’s model keeps one point unhedged on purpose. « Toujours » is the stacking the lesson fights.',
  },
  {
    text: 'La politesse mesure le service que tu demandes, et à qui.',
    why: 'Lesson 9 in B1’s reframe, quoted in act 1. True for requests, too small here: the lesson is about claims, disagreement and criticism as much as requests.',
  },
  {
    text: 'Nuancer, ce n’est pas douter : c’est dire jusqu’où va ta preuve.',
    why: 'Lesson 22 in B2’s line about WRITING (row reused in act 1). In speech the hedge also protects the listener’s face, which evidence does not cover: « sauf votre respect » measures no evidence.',
  },
  {
    text: 'Plus tu nuances, plus tu es poli.',
    why: 'The opposite of act 10: four softeners on one sentence read as embarrassment or irony, and the listener stops hearing the request.',
  },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §F. THE IMPORTS, BY ACT
 *
 *  Seed rows (seedPlusPacks(), read 2026-10-01) carry their French in the
 *  trailing comment. Postgres-only rows: `PG_ROWS` below.
 * ══════════════════════════════════════════════════════════════════════════ */

export const IMPORTED = {
  act1: [
    'fr.b1.conseils-et-suggestions.1003',     // Est-ce que tu pourrais me donner le dossier ?  (b1.09)
    'fr.b1.conseils-et-suggestions.1060',     // Auriez-vous la gentillesse de me rappeler ?  (b1.09)
    'fr.b1.rp-etiquette.1003',                // Tu ou vous règle la distance. La personne, elle, ne change pas.  (b1.26, flashcard only)
    'fr.b2.opinions-et-avis.2069',            // Il se pourrait que la tempête fasse des dégâts sur la côte.  (b2.20)
    'fr.b2.universite.1073',                  // il semblerait que  (b2.22)
    'fr.b2.universite.1076',                  // Nuancer, ce n'est pas douter : c'est dire jusqu'où va ta preuve.  (b2.22, flashcard only)
    'fr.b2.strategies-de-comprehension.1476', // semble-t-il  (b2.24)
    'fr.b2.affaires.1285',                    // Je ne partage pas tout à fait votre analyse du marché.  (b2.26)
    'fr.b2.affaires.1283',                    // Vous n’avez pas tort ; cela dit, le volume ne suffit pas.  (b2.26)
    'fr.b2.rp-etiquette.048',                 // mettre les formes  (Postgres only; a twin, reused)
    'fr.b2.rp-etiquette.049',                 // prendre des gants  (Postgres only; a twin, reused)
  ],
  act2: [
    'fr.b2.negation-et-restriction.1212',     // Sauf erreur de ma part, votre abonnement expire le trente juin.  (b2.19)
    'fr.c1.francais-professionnel-avance.156',// Si je ne m'abuse, c'est vous qui aviez proposé cette solution en premier.  (Postgres only)
    'fr.c1.francais-professionnel-avance.163',// On aurait pu, me semble-t-il, présenter les choses avec un peu plus de tact.  (Postgres only)
  ],
  act3: [
    'fr.b2.connecteurs-logiques.1967',        // Tout porte à croire que la fuite provient du toit.  (b2.15)
  ],
  act4: [
    'fr.b1.recits-au-passe.1207',             // Il a dû oublier.  (b1.04)
    'fr.b1.projets-et-futur.740',             // Ils devraient arriver vers huit heures.  (b1.08)
  ],
  act5: [
    'fr.b1.expressions-frequentes.073',       // en quelque sorte  (Postgres only, flashcard + voiceflash, no ipa)
  ],
  act6: [
    'fr.b1.conseils-et-suggestions.1005',     // Auriez-vous la gentillesse de me donner le dossier ?  (b1.09)
    'fr.b2.negation-et-restriction.1537',     // Je ne saurais accepter ces frais.  (b2.21)
  ],
  act7: [
    'fr.c1.strategies-de-comprehension.1948', // Loin de moi l’idée de me plaindre.  (c1.20)
    'fr.c1.discours-dexamen.1014',            // Sans vouloir minimiser vos efforts, nous ne pouvons pas accepter ce délai.  (c1.01)
    'fr.c1.nuances-et-registres.070',         // Sauf votre respect, cette décision me semble pour le moins discutable.  (Postgres only)
    'fr.c1.culture-profonde.145',             // Loin de moi l'idée de freiner le projet, mais certains chiffres m'inquiètent.  (Postgres only)
    'fr.c1.culture-profonde.135',             // Sans vouloir contredire personne, je crois qu'on sous-estime les risques opérationnels.  (Postgres only)
  ],
  act8: [
    'fr.b1.opinions-et-avis.106',             // je me demande si  (Postgres only; a twin, reused)
    'fr.c1.nuances-et-registres.081',         // Sans vouloir te vexer, ta présentation aurait mérité un peu plus de préparation.  (Postgres only)
    'fr.c1.nuances-et-registres.085',         // Je ne dis pas que c'est raté, je dis simplement qu'on peut faire mieux.  (Postgres only)
    'fr.c1.nuances-et-registres.101',         // Ne le prends pas mal, mais ton texte gagnerait à être relu une dernière fois.  (Postgres only)
    'fr.c1.francais-professionnel-avance.155',// Je ne dirais pas que c'est raté, disons que le résultat reste perfectible.  (Postgres only)
  ],
  act9: [
    'fr.c1.nuances-et-registres.065',         // Disons que sa ponctualité laisse un peu à désirer.  (Postgres only)
    'fr.c1.nuances-et-registres.067',         // Son gâteau n'était pas sa plus grande réussite, disons.  (Postgres only)
    'fr.c1.nuances-et-registres.089',         // Dire que la réunion a été longue, c'est le moins qu'on puisse dire.  (Postgres only)
    'fr.c1.nuances-et-registres.105',         // Un Québécois qui te répond que c'est pas pire est souvent en train de te faire un compliment.  (Postgres only)
  ],
  act10: [
    'fr.b2.universite.1095',                  // Il semblerait peut-être que cela puisse éventuellement jouer un rôle.  (b2.22, review only)
  ],
  act11: [
    'fr.c1.nuances-et-registres.096',         // Quand elle dit que c'est intéressant, il faut comprendre qu'elle n'y croit pas.  (Postgres only)
    'fr.c1.nuances-et-registres.124',         // Quand ma mère dit qu'on en reparlera, c'est que la réponse est déjà non.  (Postgres only)
    'fr.c1.francais-professionnel-avance.140',// Ce n'est pas faux, mais ce n'est pas entièrement vrai.  (Postgres only)
  ],
  act12: [] as string[],
};

export const IMPORT_IDS = [...new Set(Object.values(IMPORTED).flat())];

/** Published in Postgres, absent from the seed cut: fr/en copied VERBATIM
 *  from Postgres on 2026-10-01 (read-only), so `src()` can resolve them. */
export const PG_ROWS: Record<string, { id: string; fr: string; en: string; drills: string[] }> = Object.fromEntries([
  { id: 'fr.b1.opinions-et-avis.106', fr: 'je me demande si', en: 'I wonder whether', drills: ['flashcard', 'voiceflash'] },
  { id: 'fr.b2.rp-etiquette.048', fr: 'mettre les formes', en: 'to do something tactfully', drills: ['voiceflash', 'review'] },
  { id: 'fr.b2.rp-etiquette.049', fr: 'prendre des gants', en: 'to handle delicately, with kid gloves', drills: ['voiceflash', 'review'] },
  { id: 'fr.b1.expressions-frequentes.073', fr: 'en quelque sorte', en: 'in a way', drills: ['flashcard', 'voiceflash'] },
  { id: 'fr.c1.culture-profonde.135', fr: "Sans vouloir contredire personne, je crois qu'on sous-estime les risques opérationnels.", en: "Without wanting to contradict anyone, I think we're underestimating the operational risks.", drills: ['sentence', 'review'] },
  { id: 'fr.c1.culture-profonde.145', fr: "Loin de moi l'idée de freiner le projet, mais certains chiffres m'inquiètent.", en: 'Far be it from me to slow the project down, but some numbers worry me.', drills: ['sentence', 'review'] },
  { id: 'fr.c1.francais-professionnel-avance.140', fr: "Ce n'est pas faux, mais ce n'est pas entièrement vrai.", en: 'That is not wrong, but it is not entirely true either.', drills: ['sentence', 'review'] },
  { id: 'fr.c1.francais-professionnel-avance.155', fr: "Je ne dirais pas que c'est raté, disons que le résultat reste perfectible.", en: "I would not say it failed, let's say the result leaves room for improvement.", drills: ['sentence', 'review'] },
  { id: 'fr.c1.francais-professionnel-avance.156', fr: "Si je ne m'abuse, c'est vous qui aviez proposé cette solution en premier.", en: 'If I am not mistaken, you were the one who proposed this solution first.', drills: ['sentence', 'review'] },
  { id: 'fr.c1.francais-professionnel-avance.163', fr: 'On aurait pu, me semble-t-il, présenter les choses avec un peu plus de tact.', en: 'We could, it seems to me, have presented things with a little more tact.', drills: ['sentence', 'review'] },
  { id: 'fr.c1.nuances-et-registres.065', fr: 'Disons que sa ponctualité laisse un peu à désirer.', en: "Let's just say his punctuality leaves a little to be desired.", drills: ['sentence', 'review'] },
  { id: 'fr.c1.nuances-et-registres.067', fr: "Son gâteau n'était pas sa plus grande réussite, disons.", en: 'Her cake was not her greatest success, let\'s say.', drills: ['sentence', 'review'] },
  { id: 'fr.c1.nuances-et-registres.070', fr: 'Sauf votre respect, cette décision me semble pour le moins discutable.', en: 'With all due respect, this decision strikes me as questionable to say the least.', drills: ['sentence', 'review'] },
  { id: 'fr.c1.nuances-et-registres.081', fr: 'Sans vouloir te vexer, ta présentation aurait mérité un peu plus de préparation.', en: 'No offense intended, but your presentation deserved a bit more preparation.', drills: ['sentence', 'review'] },
  { id: 'fr.c1.nuances-et-registres.085', fr: "Je ne dis pas que c'est raté, je dis simplement qu'on peut faire mieux.", en: "I'm not saying it failed, I'm simply saying we can do better.", drills: ['sentence', 'review'] },
  { id: 'fr.c1.nuances-et-registres.089', fr: "Dire que la réunion a été longue, c'est le moins qu'on puisse dire.", en: 'To say the meeting ran long is putting it mildly.', drills: ['sentence', 'review'] },
  { id: 'fr.c1.nuances-et-registres.096', fr: "Quand elle dit que c'est intéressant, il faut comprendre qu'elle n'y croit pas.", en: "When she says it's interesting, you should understand she doesn't believe in it.", drills: ['sentence', 'review'] },
  { id: 'fr.c1.nuances-et-registres.101', fr: 'Ne le prends pas mal, mais ton texte gagnerait à être relu une dernière fois.', en: "Don't take it the wrong way, but your text would benefit from one last read-through.", drills: ['sentence', 'review'] },
  { id: 'fr.c1.nuances-et-registres.105', fr: "Un Québécois qui te répond que c'est pas pire est souvent en train de te faire un compliment.", en: "A Quebecer who tells you it's not bad is often actually paying you a compliment.", drills: ['sentence', 'review'] },
  { id: 'fr.c1.nuances-et-registres.124', fr: "Quand ma mère dit qu'on en reparlera, c'est que la réponse est déjà non.", en: "When my mother says we'll talk about it later, it means the answer is already no.", drills: ['sentence', 'review'] },
].map((r) => [r.id, r]));

/** Not releasable as a flashcard: the Postgres-only rows (no ipa, mostly no
 *  flashcard drill) and the seed rows with no flashcard drill. */
export const NOT_DECK_ABLE: string[] = [...Object.keys(PG_ROWS), 'fr.b2.universite.1095'];

/** No voiceflash, or never spoken in a practice: every NOT_DECK_ABLE id, and
 *  the two flashcard-only reframe rows. */
export const NOT_SPEAKABLE: string[] = [...NOT_DECK_ABLE, 'fr.b1.rp-etiquette.1003', 'fr.b2.universite.1076'];

/* ══════════════════════════════════════════════════════════════════════════
 *  §G. THE AUTHORED ROWS, ONE BLOCK PER ACT
 *
 *  Two kinds: a MOVE row (kind phrase, tag formule) and sentence rows that
 *  put it in speech. Listening lines are sentence rows, so the ear mission
 *  and the SRS deck quote the same French.
 * ══════════════════════════════════════════════════════════════════════════ */

type Row = Item;
type Reg = NonNullable<Item['register']>;

const FCVR = ['flashcard', 'voiceflash', 'review'] as Item['drills'];
const FCVDR = ['flashcard', 'voiceflash', 'dictation', 'review'] as Item['drills'];
const GP = ['nuance-oral'];

/** A move: the formula and what it does in speech. */
const mv = (n: number, fr: string, en: string, ipa: string, respell: string, tags: string[], notes?: string, register: Reg = 'courant'): Row => ({
  id: E(n), kind: 'phrase', level: LEVEL, theme: THEME, fr, en, ipa, respell,
  tags: ['formule', ...tags], drills: FCVR, version: 1, register, grammarPoints: GP,
  ...(notes ? { notes } : {}),
});

const sent = (
  n: number, fr: string, en: string, ipa: string, respell: string,
  tags: string[], drills: Item['drills'] = FCVR, extra: Partial<Item> = {},
): Row => ({
  id: E(n), kind: 'sentence', level: LEVEL, theme: THEME, fr, en, ipa, respell,
  tags, drills, version: 1, register: 'courant', grammarPoints: GP, ...extra,
});

/** A rule card: `prompt` is the question, `fr` the rule. */
const rule = (prompt: string, notes: string): Partial<Item> => ({ cardType: 'grammar', prompt, notes });

/* ── ACT 1 · LA REMARQUE DE TROP ──────────────────────────────────────────── */

export const ACT1_ROWS: Row[] = [
  sent(1000, 'Ta présentation tient la route ; il me semble seulement que la troisième partie gagnerait à être raccourcie.', 'Your presentation holds up; it just seems to me that the third part would benefit from being shortened.', '/ta pʁe.zɑ̃.ta.sjɔ̃ tjɛ̃ la ʁut il mə sɑ̃bl sœl.mɑ̃ kə la tʁwa.zjɛm paʁ.ti ga.ɲə.ʁɛ a ɛtʁ ʁa.kuʁ.si/', 'ta pray-zahⁿ-ta-SYOHⁿ | tyehⁿ la ROOT | eel muh SAHⁿBL suhl-MAHⁿ | kuh la trwa-zyemm par-TEE | ga-nyuh-REH a ehtr ra-koor-SEE', ['scene', 'dosage'], FCVDR),
  sent(1001, REFRAME, REFRAME_EN, '/nɥɑ̃.se sɛ do.ze a.se puʁ me.na.ʒe lotʁ ʒa.mɛ o pwɛ̃ de.tɛ̃dʁ sə kə ty di/', 'nwahⁿ-SAY | seh doh-ZAY | a-SAY poor may-na-ZHAY LOHTR | zha-MEH oh pwehⁿ day-TEHⁿDR | suh kuh tü DEE', ['rule', 'reframe'], ['flashcard'],
    rule('Une remarque brutale, ou une remarque si enrobée qu’elle ne dit plus rien : que manque-t-il aux deux ?', 'Le dosage : assez de nuance pour ménager l’autre, pas au point d’éteindre le message.')),
  mv(1002, 'doser une critique', 'to measure out a criticism', '/do.ze yn kʁi.tik/', 'doh-ZAY ün kree-TEEK', ['dosage'], 'Ni trop, ni trop peu : la quantité de nuance qui convient à la personne et à l’enjeu.'),
  mv(1003, 'ménager quelqu’un', 'to spare someone’s feelings, to handle someone tactfully', '/me.na.ʒe kɛl.kœ̃/', 'may-na-ZHAY kehl-KUHⁿ', ['dosage'], 'Le traiter avec égards, sans le blesser inutilement.'),
  sent(1006, 'Sur le fond, tu n’avais pas tort ; c’est la manière qui m’a blessé.', 'On the substance you were not wrong; it was the way you said it that hurt me.', '/syʁ lə fɔ̃ ty na.vɛ pa tɔʁ sɛ la ma.njɛʁ ki ma ble.se/', 'sür luh FOHⁿ | tü na-veh pa TOR | seh la ma-NYEHR | kee ma blay-SAY', ['scene', 'dosage']),
  sent(1007, 'Au bout de deux minutes, je ne savais toujours pas ce qu’elle me reprochait.', 'After two minutes, I still did not know what she was criticising me for.', '/o bu də dø mi.nyt ʒə nə sa.vɛ tu.ʒuʁ pa sə kɛl mə ʁə.pʁɔ.ʃɛ/', 'oh boo duh deu mee-NÜT | zhuh nuh sa-veh too-ZHOOR PA | suh kehl muh ruh-pro-SHEH', ['scene', 'trop']),
  sent(1008, 'Il faut mettre les formes, mais le message doit passer.', 'You have to put things tactfully, but the message has to get through.', '/il fo mɛtʁ le fɔʁm mɛ lə me.saʒ dwa pa.se/', 'eel foh mehtr lay FORM | meh luh may-SAZH dwa pa-SAY', ['dosage'], FCVDR),
  sent(1009, 'Une critique trop brutale ferme les oreilles ; trop enrobée, elle ne dit plus rien.', 'A criticism that is too blunt closes people’s ears; too sugar-coated, it says nothing at all.', '/yn kʁi.tik tʁo bʁy.tal fɛʁm le.zɔ.ʁɛj tʁo.pɑ̃.ʁɔ.be ɛl nə di ply ʁjɛ̃/', 'ün kree-TEEK tro brü-TAL | fehrm lay-zo-REHY | tro-pahⁿ-ro-BAY | ehl nuh dee plü RYEHⁿ', ['rule', 'dosage'], ['flashcard'],
    rule('Où se trouve la bonne critique ?', 'Entre les deux excès : assez douce pour être écoutée, assez nette pour être comprise.')),
  sent(1010, 'Mets un peu de gants, mais juste ce qu’il faut.', 'Use a bit of tact, but just what is needed.', '/mɛ œ̃ pø də gɑ̃ mɛ ʒyst sə kil fo/', 'meh uhⁿ PEU duh GAHⁿ | meh zhüst suh keel FOH', ['dosage'], FCVR, { register: 'familier' }),
  sent(1011, 'Je refais la troisième partie ce soir et je te la montre demain.', 'I will redo the third part this evening and show it to you tomorrow.', '/ʒə ʁə.fɛ la tʁwa.zjɛm paʁ.ti sə swaʁ e ʒə tə la mɔ̃tʁ də.mɛ̃/', 'zhuh ruh-FEH la trwa-zyemm par-TEE suh SWAR | ay zhuh tuh la mohⁿtr duh-MEHⁿ', ['scene']),
];

/* ── ACT 2 · L’INCISE QUI ADOUCIT ─────────────────────────────────────────── */

export const ACT2_ROWS: Row[] = [
  mv(1012, 'me semble-t-il', 'it seems to me (an aside)', '/mə sɑ̃bl.til/', 'muh sahⁿbl-TEEL', ['incise'], 'Une incise : ton avis, présenté comme une impression. Elle se glisse dans la phrase (après le sujet ou le verbe) ou à la fin, jamais en tête.', 'soutenu'),
  mv(1013, 'si je ne m’abuse', 'if I am not mistaken', '/si ʒə nə ma.byz/', 'see zhuh nuh ma-BÜZ', ['incise'], 'Soutenu : pour un fait dont tu crois te souvenir, une date, un nom, un chiffre.', 'soutenu'),
  mv(1014, 'si je ne me trompe', 'if I am not wrong', '/si ʒə nə mə tʁɔ̃p/', 'see zhuh nuh muh TROHⁿP', ['incise'], 'Le même rôle que si je ne m’abuse, en courant.'),
  mv(1015, 'à ma connaissance', 'to my knowledge, as far as I know', '/a ma kɔ.nɛ.sɑ̃s/', 'a ma ko-neh-SAHⁿSS', ['incise'], 'Tu limites ton affirmation à ce que tu sais.'),
  // The meeting, line by line (the hidden listening of act 2).
  sent(1016, 'Bon, commençons par le calendrier de l’exposition.', 'Right, let us start with the exhibition schedule.', '/bɔ̃ kɔ.mɑ̃.sɔ̃ paʁ lə ka.lɑ̃.dʁi.je də lɛks.po.zi.sjɔ̃/', 'BOHⁿ | ko-mahⁿ-SOHⁿ par luh ka-lahⁿ-dree-YAY | duh lehks-po-zee-SYOHⁿ', ['reunion']),
  sent(1017, 'L’ouverture est prévue le douze mai, si je ne m’abuse.', 'The opening is planned for the twelfth of May, if I am not mistaken.', '/lu.vɛʁ.tyʁ ɛ pʁe.vy lə duz mɛ si ʒə nə ma.byz/', 'loo-vehr-TÜR eh pray-VÜ | luh dooz MEH | see zhuh nuh ma-BÜZ', ['incise'], FCVDR),
  sent(1018, 'C’est bien ça, le douze, un vendredi.', 'That is right, the twelfth, a Friday.', '/sɛ bjɛ̃ sa lə duz œ̃ vɑ̃.dʁə.di/', 'seh byehⁿ SA | luh DOOZ | uhⁿ vahⁿ-druh-DEE', ['reunion']),
  sent(1019, 'Le vendredi, me semble-t-il, n’est pas le meilleur jour pour les écoles.', 'Friday, it seems to me, is not the best day for schools.', '/lə vɑ̃.dʁə.di mə sɑ̃bl.til nɛ pa lə mɛ.jœʁ ʒuʁ puʁ le.ze.kɔl/', 'luh vahⁿ-druh-DEE | muh sahⁿbl-TEEL | neh pa luh meh-yuhr ZHOOR | poor lay-zay-KOL', ['incise'], FCVDR),
  sent(1020, 'Les classes viennent plutôt en semaine, en effet.', 'Classes tend to come on weekdays, indeed.', '/le klas vjɛn ply.to ɑ̃ sə.mɛn ɑ̃.ne.fɛ/', 'lay KLASS | vyenn plü-TOH ahⁿ SMENN | ahⁿ-nay-FEH', ['reunion']),
  sent(1021, 'À ma connaissance, aucune école n’a encore réservé.', 'To my knowledge, no school has booked yet.', '/a ma kɔ.nɛ.sɑ̃s o.kyn e.kɔl na ɑ̃.kɔʁ ʁe.zɛʁ.ve/', 'a ma ko-neh-SAHⁿSS | oh-kün ay-KOL | na ahⁿ-kor ray-zehr-VAY', ['incise']),
  sent(1022, 'Si je ne me trompe, la lettre aux écoles part lundi.', 'If I am not wrong, the letter to the schools goes out on Monday.', '/si ʒə nə mə tʁɔ̃p la lɛ.tʁo.ze.kɔl paʁ lœ̃.di/', 'see zhuh nuh muh TROHⁿP | la leh-troh-zay-KOL | par luhⁿ-DEE', ['incise']),
  sent(1023, 'Elle part lundi, oui, mais on peut l’envoyer plus tôt.', 'It goes on Monday, yes, but we can send it earlier.', '/ɛl paʁ lœ̃.di wi mɛ ɔ̃ pø lɑ̃.vwa.je ply to/', 'ehl par luhⁿ-DEE | WEE | meh ohⁿ peu lahⁿ-vwa-YAY plü TOH', ['reunion']),
  sent(1024, 'Dans ce cas, le plus sage serait, me semble-t-il, de garder le vendredi pour le vernissage.', 'In that case, the wisest thing, it seems to me, would be to keep the Friday for the opening night.', '/dɑ̃ sə ka lə ply saʒ sə.ʁɛ mə sɑ̃bl.til də gaʁ.de lə vɑ̃.dʁə.di puʁ lə vɛʁ.ni.saʒ/', 'dahⁿ suh KA | luh plü SAZH suh-REH | muh sahⁿbl-TEEL | duh gar-DAY luh vahⁿ-druh-DEE | poor luh vehr-nee-SAZH', ['incise']),
  sent(1025, 'Et d’ouvrir aux classes dès le lundi suivant. Ça me paraît raisonnable.', 'And to open to classes from the following Monday. That seems reasonable to me.', '/e du.vʁiʁ o klas dɛ lə lœ̃.di sɥi.vɑ̃ sa mə pa.ʁɛ ʁɛ.zɔ.nabl/', 'ay doo-VREER oh KLASS | deh luh luhⁿ-dee swee-VAHⁿ | sa muh pa-REH reh-zo-NABL', ['reunion']),
  sent(1026, 'L’incise se glisse là où se trouve le doute, jamais devant chaque phrase.', 'The aside slips in exactly where the doubt is, never in front of every sentence.', '/lɛ̃.siz sə glis la u sə tʁuv lə dut ʒa.mɛ də.vɑ̃ ʃak fʁaz/', 'lehⁿ-SEEZ suh GLEESS | la oo suh TROOV luh DOOT | zha-MEH duh-vahⁿ shak FRAZ', ['rule', 'incise'], ['flashcard'],
    rule('Tu doutes de la date, pas du lieu. Où mets-tu « si je ne m’abuse » ?', 'Près de la date : l’ouverture est le douze, si je ne m’abuse, à la grande salle.')),
  sent(1027, 'Me semble-t-il nuance un avis ; si je ne m’abuse nuance un souvenir.', 'Me semble-t-il softens an opinion; si je ne m’abuse softens a memory.', '/mə sɑ̃bl.til nɥɑ̃s œ̃.na.vi si ʒə nə ma.byz nɥɑ̃s œ̃ suv.niʁ/', 'muh sahⁿbl-TEEL NWAHⁿSS uhⁿ-na-VEE | see zhuh nuh ma-BÜZ NWAHⁿSS uhⁿ soov-NEER', ['rule', 'incise'], ['flashcard'],
    rule('« Le budget n’est pas voté, si je ne m’abuse. » Avis ou fait ?', 'Un fait dont tu crois te souvenir. Pour un avis : c’est, me semble-t-il, trop tôt.')),
  sent(1028, 'Le budget, si je ne m’abuse, n’a pas encore été voté.', 'The budget, if I am not mistaken, has not been voted yet.', '/lə by.dʒɛ si ʒə nə ma.byz na pa.zɑ̃.kɔ.ʁe.te vɔ.te/', 'luh bü-DZHEH | see zhuh nuh ma-BÜZ | na pa-zahⁿ-ko-ray-TAY vo-TAY', ['incise']),
  sent(1029, 'C’est, me semble-t-il, la meilleure option pour le public.', 'It is, it seems to me, the best option for the public.', '/sɛ mə sɑ̃bl.til la mɛ.jœʁ ɔp.sjɔ̃ puʁ lə py.blik/', 'SEH | muh sahⁿbl-TEEL | la meh-yuhr op-SYOHⁿ | poor luh pü-BLEEK', ['incise']),
];

/* ── ACT 3 · PARIER SANS JURER ────────────────────────────────────────────── */

export const ACT3_ROWS: Row[] = [
  mv(1030, 'il y a fort à parier que', 'it is a safe bet that, the odds are that', '/il ja fɔʁ a pa.ʁje kə/', 'eel ya FOR a pa-RYAY kuh', ['certitude'], 'Très probable, présenté comme un pari. Suivi de l’indicatif : il y a fort à parier qu’ils viendront.'),
  mv(1031, 'il est permis de penser que', 'one may reasonably think that', '/i.lɛ pɛʁ.mi də pɑ̃.se kə/', 'ee-leh pehr-MEE duh pahⁿ-SAY kuh', ['certitude'], 'Une opinion présentée comme raisonnable, sans preuve définitive. Suivi de l’indicatif.', 'soutenu'),
  mv(1032, 'rien n’indique que', 'there is no sign that, nothing suggests that', '/ʁjɛ̃ nɛ̃.dik kə/', 'ryehⁿ nehⁿ-DEEK kuh', ['certitude'], 'Aucun indice. Le plus souvent suivi du subjonctif ; l’indicatif se rencontre quand le fait est présenté comme réel.'),
  mv(1033, 'j’en mettrais ma main au feu', 'I would bet my life on it', '/ʒɑ̃ mɛ.tʁɛ ma mɛ̃ o fø/', 'zhahⁿ meh-treh ma MEHⁿ oh FEU', ['certitude'], 'Familier : tu es presque certain.', 'familier'),
  mv(1034, 'je ne parierais pas là-dessus', 'I would not bet on it', '/ʒə nə pa.ʁi.ʁɛ pa lad.sy/', 'zhuh nuh pa-ree-reh PA | lad-SÜ', ['certitude'], 'Tu doutes, poliment.'),
  sent(1035, 'Il y a fort à parier que nous dépasserons ce chiffre.', 'The odds are that we will beat that figure.', '/il ja fɔʁ a pa.ʁje kə nu de.pa.sʁɔ̃ sə ʃifʁ/', 'eel ya FOR a pa-RYAY | kuh noo day-pass-ROHⁿ suh SHEEFR', ['certitude'], FCVDR),
  sent(1036, 'Il est permis de penser que le thème attirera des familles.', 'One may reasonably think the theme will attract families.', '/i.lɛ pɛʁ.mi də pɑ̃.se kə lə tɛm a.ti.ʁə.ʁa de fa.mij/', 'ee-leh pehr-MEE duh pahⁿ-SAY | kuh luh TEMM a-tee-ruh-RA day fa-MEEY', ['certitude']),
  sent(1037, 'Pour l’instant, rien n’indique que les travaux bloquent l’entrée du public.', 'For now there is no sign that the works are blocking the public entrance.', '/puʁ lɛ̃s.tɑ̃ ʁjɛ̃ nɛ̃.dik kə le tʁa.vo blɔk lɑ̃.tʁe dy py.blik/', 'poor lehⁿss-TAHⁿ | ryehⁿ nehⁿ-DEEK | kuh lay tra-VOH BLOK | lahⁿ-tray dü pü-BLEEK', ['certitude'], FCVDR),
  sent(1038, 'Je ne mettrais pas ma main au feu sur le chiffre exact.', 'I would not swear to the exact figure.', '/ʒə nə mɛ.tʁɛ pa ma mɛ̃ o fø syʁ lə ʃi.fʁɛg.zakt/', 'zhuh nuh meh-treh PA | ma MEHⁿ oh FEU | sür luh shee-frehg-ZAKT', ['certitude']),
  sent(1039, 'Rien n’indique que le public soit moins nombreux cette année.', 'Nothing suggests the public will be smaller this year.', '/ʁjɛ̃ nɛ̃.dik kə lə py.blik swa mwɛ̃ nɔ̃.bʁø sɛ.ta.ne/', 'ryehⁿ nehⁿ-DEEK | kuh luh pü-BLEEK swa mwehⁿ nohⁿ-BREU | seh-ta-NAY', ['certitude']),
  sent(1040, 'Le festival tombe le même mois ; là, je ne parierais pas dans un sens ou dans l’autre.', 'The festival falls in the same month; there, I would not bet either way.', '/lə fɛs.ti.val tɔ̃b lə mɛm mwa la ʒə nə pa.ʁi.ʁɛ pa dɑ̃.zœ̃ sɑ̃s u dɑ̃ lotʁ/', 'luh fehs-tee-VAL TOHⁿB luh mem MWA | LA | zhuh nuh pa-ree-REH PA | dahⁿ-zuhⁿ SAHⁿSS oo dahⁿ LOHTR', ['certitude']),
  sent(1041, 'Il y a fort à parier et il est permis de penser gardent l’indicatif.', 'Il y a fort à parier and il est permis de penser keep the indicative.', '/il ja fɔʁ a pa.ʁje e i.lɛ pɛʁ.mi də pɑ̃.se gaʁd lɛ̃.di.ka.tif/', 'eel ya FOR a pa-RYAY | ay ee-leh pehr-MEE duh pahⁿ-SAY | GARD lehⁿ-dee-ka-TEEF', ['rule', 'certitude'], ['flashcard'],
    rule('Il y a fort à parier qu’ils (venir) : quel mode ?', 'L’indicatif, souvent le futur : qu’ils viendront. Le pari est une probabilité, pas un doute.')),
  sent(1042, 'D’ici là, tout porte à croire que la salle principale suffira.', 'Until then, everything suggests the main hall will be enough.', '/di.si la tu pɔʁt a kʁwaʁ kə la sal pʁɛ̃.si.pal sy.fi.ʁa/', 'dee-see LA | too PORT a KRWAR | kuh la SAL prehⁿ-see-PAL sü-fee-RA', ['certitude']),
  sent(1043, 'Une prévision reste une prévision : je préfère être prudent.', 'A forecast is still a forecast: I prefer to be careful.', '/yn pʁe.vi.zjɔ̃ ʁɛst yn pʁe.vi.zjɔ̃ ʒə pʁe.fɛʁ ɛtʁ pʁy.dɑ̃/', 'ün pray-vee-ZYOHⁿ | rehst ün pray-vee-ZYOHⁿ | zhuh pray-FEHR ehtr prü-DAHⁿ', ['certitude']),
];

/* ── ACT 4 · LE DEVOIR QUI SUPPOSE ────────────────────────────────────────── */

export const ACT4_ROWS: Row[] = [
  // The phone call, line by line (the hidden listening of act 4).
  sent(1044, 'Bonjour, je vous appelle au sujet d’une livraison pour l’Institut Verlune.', 'Hello, I am calling about a delivery for the Institut Verlune.', '/bɔ̃.ʒuʁ ʒə vu.za.pɛl o sy.ʒɛ dyn li.vʁɛ.zɔ̃ puʁ lɛ̃s.ti.ty vɛʁ.lyn/', 'bohⁿ-ZHOOR | zhuh voo-za-PEHL oh sü-ZHEH | dün lee-vreh-ZOHⁿ | poor lehⁿss-tee-TÜ vehr-LÜN', ['appel']),
  sent(1045, 'Les caisses devaient arriver ce matin, et nous n’avons rien reçu.', 'The crates were supposed to arrive this morning, and we have received nothing.', '/le kɛs də.vɛ.ta.ʁi.ve sə ma.tɛ̃ e nu na.vɔ̃ ʁjɛ̃ ʁə.sy/', 'lay KEHSS | duh-veh-ta-ree-VAY suh ma-TEHⁿ | ay noo na-vohⁿ RYEHⁿ ruh-SÜ', ['appel']),
  sent(1046, 'Le livreur a dû se tromper d’entrée : il y en a deux.', 'The driver must have gone to the wrong entrance: there are two.', '/lə li.vʁœʁ a dy sə tʁɔ̃.pe dɑ̃.tʁe il jɑ̃.na dø/', 'luh lee-VRUHR a DÜ | suh trohⁿ-PAY dahⁿ-TRAY | eel yahⁿ-na DEU', ['devoir'], FCVDR),
  sent(1047, 'Il doit être devant l’entrée nord, celle des bureaux.', 'He must be in front of the north entrance, the office one.', '/il dwa.tɛtʁ də.vɑ̃ lɑ̃.tʁe nɔʁ sɛl de by.ʁo/', 'eel dwa-TEHTR duh-vahⁿ lahⁿ-tray NOR | sehl day bü-ROH', ['devoir'], FCVDR),
  sent(1048, 'Ça doit être lui, le camion blanc sur le trottoir.', 'That must be him, the white truck on the pavement.', '/sa dwa.tɛtʁ lɥi lə ka.mjɔ̃ blɑ̃ syʁ lə tʁɔ.twaʁ/', 'sa dwa-tehtr LWEE | luh ka-myohⁿ BLAHⁿ | sür luh tro-TWAR', ['devoir']),
  sent(1049, 'Sur le bon de livraison, il y a l’adresse de Lyon, et le transport n’est pas encore payé.', 'The delivery note has the Lyon address on it, and the transport has not been paid yet.', '/syʁ lə bɔ̃ də li.vʁɛ.zɔ̃ il ja la.dʁɛs də ljɔ̃ e lə tʁɑ̃s.pɔʁ nɛ pa.zɑ̃.kɔʁ pe.je/', 'sür luh BOHⁿ duh lee-vreh-ZOHⁿ | eel ya la-DREHSS duh LYOHⁿ | ay luh trahⁿss-POR | neh pa-zahⁿ-kor pay-YAY', ['appel']),
  sent(1050, 'Il doit y avoir un malentendu sur l’adresse.', 'There must be a misunderstanding about the address.', '/il dwa.ti.ja.vwaʁ œ̃ ma.lɑ̃.tɑ̃.dy syʁ la.dʁɛs/', 'eel dwa-tee-ya-VWAR | uhⁿ ma-lahⁿ-tahⁿ-DÜ | sür la-DREHSS', ['devoir', 'tact'], FCVDR),
  sent(1051, 'Vous devez faire erreur : nous avons payé le transport hier.', 'You must be mistaken: we paid for the transport yesterday.', '/vu də.ve fɛ.ʁɛ.ʁœʁ nu.za.vɔ̃ pe.je lə tʁɑ̃s.pɔʁ jɛʁ/', 'voo duh-VAY feh-reh-RUHR | noo-za-vohⁿ pay-YAY luh trahⁿss-POR | YEHR', ['devoir', 'tact']),
  sent(1052, 'Ah, pardon, vous avez raison : je devais avoir l’ancien dossier sous les yeux.', 'Ah, sorry, you are right: I must have had the old file in front of me.', '/a paʁ.dɔ̃ vu.za.ve ʁɛ.zɔ̃ ʒə də.vɛ.za.vwaʁ lɑ̃.sjɛ̃ dɔ.sje su le.zjø/', 'A | par-DOHⁿ | voo-za-vay reh-ZOHⁿ | zhuh duh-veh-za-VWAR | lahⁿ-syehⁿ do-SYAY | soo lay-ZYEU', ['devoir']),
  sent(1053, 'Il était midi passé quand le camion est enfin arrivé.', 'It was past noon when the truck finally arrived.', '/i.lɛ.tɛ mi.di pa.se kɑ̃ lə ka.mjɔ̃ ɛ.tɑ̃.fɛ̃ a.ʁi.ve/', 'ee-leh-TEH mee-dee pa-SAY | kahⁿ luh ka-MYOHⁿ | eh-tahⁿ-FEHⁿ a-ree-VAY', ['appel']),
  sent(1054, 'Il doit être en réunion : il ne répond jamais avant onze heures.', 'He must be in a meeting: he never answers before eleven.', '/il dwa.tɛ.tʁɑ̃ ʁe.y.njɔ̃ il nə ʁe.pɔ̃ ʒa.mɛ a.vɑ̃ ɔ̃.zœʁ/', 'eel dwa-teh-trahⁿ ray-ü-NYOHⁿ | eel nuh ray-POHⁿ zha-MEH | a-vahⁿ ohⁿ-ZUHR', ['devoir']),
  sent(1055, 'Il devait être sept heures quand elle a quitté le bureau.', 'It must have been about seven when she left the office.', '/il də.vɛ.tɛ.tʁə sɛ.tœʁ kɑ̃.tɛ.la ki.te lə by.ʁo/', 'eel duh-veh-teh-truh seh-TUHR | kahⁿ-teh-la kee-TAY luh bü-ROH', ['devoir']),
  sent(1056, 'Devoir peut supposer au lieu d’obliger : il doit être en réunion.', 'Devoir can suppose instead of oblige: he must be in a meeting.', '/də.vwaʁ pø sy.po.ze o ljø dɔ.bli.ʒe il dwa.tɛ.tʁɑ̃ ʁe.y.njɔ̃/', 'duh-VWAR peu sü-po-ZAY | oh lyeu do-blee-ZHAY | eel dwa-teh-trahⁿ ray-ü-NYOHⁿ', ['rule', 'devoir'], ['flashcard'],
    rule('« Il doit partir. » Obligation ou supposition ?', 'Les deux sont possibles : le contexte tranche. « Il doit être parti, sa veste n’est plus là » : une supposition.')),
  sent(1057, 'Accuser un malentendu plutôt que la personne, c’est lui laisser une porte de sortie.', 'Blaming a misunderstanding rather than the person leaves them a way out.', '/a.ky.ze œ̃ ma.lɑ̃.tɑ̃.dy ply.to kə la pɛʁ.sɔn sɛ lɥi lɛ.se yn pɔʁt də sɔʁ.ti/', 'a-kü-ZAY uhⁿ ma-lahⁿ-tahⁿ-DÜ | plü-TOH kuh la pehr-SONN | seh lwee leh-SAY ün PORT duh sor-TEE', ['rule', 'tact'], ['flashcard'],
    rule('Le fournisseur se trompe d’adresse. Tu dis « vous vous trompez » ?', 'Plutôt : il doit y avoir un malentendu, ou vous devez faire erreur. L’autre corrige sans perdre la face.')),
];

/* ── ACT 5 · LE MOT À PEU PRÈS JUSTE ──────────────────────────────────────── */

export const ACT5_ROWS: Row[] = [
  mv(1058, 'à proprement parler', 'strictly speaking', '/a pʁɔ.pʁə.mɑ̃ paʁ.le/', 'a pro-pruh-MAHⁿ par-LAY', ['approximation'], 'Au sens strict du mot. Souvent pour dire qu’un mot ne convient pas tout à fait : ce n’est pas, à proprement parler, une carte.'),
  mv(1059, 'pour ainsi dire', 'so to speak', '/puʁ ɛ̃.si diʁ/', 'poor ehⁿ-see DEER', ['approximation'], 'Tu préviens que le mot est une image, à peu près juste.'),
  mv(1060, 'un tant soit peu', 'even slightly, the least bit', '/œ̃ tɑ̃ swa pø/', 'uhⁿ TAHⁿ swa PEU', ['approximation'], 'Si peu que ce soit. Surtout dans une hypothèse, une question ou une négation ; à l’affirmative, il est souvent ironique.', 'soutenu'),
  sent(1061, 'L’affiche est, en quelque sorte, une coupe de la ville.', 'The poster is, in a way, a cross-section of the city.', '/la.fi.ʃɛ ɑ̃ kɛl.kə sɔʁt yn kup də la vil/', 'la-fee-SHEH | ahⁿ kehl-kuh SORT | ün KOOP duh la VEEL', ['approximation'], FCVDR),
  sent(1062, 'Ce n’est pas, à proprement parler, une carte : les rivières ne sont pas à l’échelle.', 'It is not, strictly speaking, a map: the rivers are not to scale.', '/sə nɛ pa a pʁɔ.pʁə.mɑ̃ paʁ.le yn kaʁt le ʁi.vjɛʁ nə sɔ̃ pa.za le.ʃɛl/', 'suh neh PA | a pro-pruh-MAHⁿ par-LAY | ün KART | lay ree-VYEHR nuh sohⁿ pa-za lay-SHEHL', ['approximation'], FCVDR),
  sent(1063, 'La bande bleue est, pour ainsi dire, le personnage principal.', 'The blue band is, so to speak, the main character.', '/la bɑ̃d blø ɛ puʁ ɛ̃.si diʁ lə pɛʁ.sɔ.naʒ pʁɛ̃.si.pal/', 'la bahⁿd BLEU EH | poor ehⁿ-see DEER | luh pehr-so-NAZH prehⁿ-see-PAL', ['approximation']),
  sent(1064, 'Si le passant s’intéresse un tant soit peu à son quartier, il cherchera sa rue.', 'If passers-by are even slightly interested in their neighbourhood, they will look for their street.', '/si lə pa.sɑ̃ sɛ̃.te.ʁɛs œ̃ tɑ̃ swa pø a sɔ̃ kaʁ.tje il ʃɛʁ.ʃə.ʁa sa ʁy/', 'see luh pa-SAHⁿ | sehⁿ-tay-REHSS uhⁿ TAHⁿ swa PEU | a sohⁿ kar-TYAY | eel shehr-shuh-RA sa RÜ', ['approximation']),
  sent(1065, 'Ce n’est pas une vidéo à proprement parler, plutôt une respiration.', 'It is not a video strictly speaking, more of a breath.', '/sə nɛ pa.zyn vi.de.o a pʁɔ.pʁə.mɑ̃ paʁ.le ply.to yn ʁɛs.pi.ʁa.sjɔ̃/', 'suh neh pa-zün vee-day-OH | a pro-pruh-MAHⁿ par-LAY | plü-TOH ün rehs-pee-ra-SYOHⁿ', ['approximation']),
  sent(1066, 'Est-ce qu’il te reste un tant soit peu de temps cette semaine ?', 'Do you have even a little time left this week?', '/ɛs.kil tə ʁɛst œ̃ tɑ̃ swa pø də tɑ̃ sɛt sə.mɛn/', 'ehs-keel tuh REHST | uhⁿ TAHⁿ swa PEU duh TAHⁿ | seht SMENN', ['approximation']),
  sent(1067, 'Je n’ai pas d’avis tranché : les deux fonctionnent.', 'I do not have a firm opinion: both work.', '/ʒə ne pa da.vi tʁɑ̃.ʃe le dø fɔ̃k.sjɔn/', 'zhuh nay pa da-vee trahⁿ-SHAY | lay DEU fohⁿk-SYONN', ['approximation']),
  sent(1068, 'L’approximation avoue que le mot est à peu près juste ; elle le rend plus précis.', 'The approximation admits that the word is roughly right; that makes it more precise.', '/la.pʁɔk.si.ma.sjɔ̃ a.vu kə lə mo ɛ.ta pø pʁɛ ʒyst ɛl lə ʁɑ̃ ply pʁe.si/', 'la-prok-see-ma-SYOHⁿ a-VOO | kuh luh MOH eh-ta peu preh ZHÜST | ehl luh rahⁿ plü pray-SEE', ['rule', 'approximation'], ['flashcard'],
    rule('« En quelque sorte » rend-il ta phrase plus vague ?', 'Non : il prévient que le mot est une image. L’auditeur sait exactement jusqu’où le prendre.')),
  sent(1069, 'Un tant soit peu vit surtout dans une hypothèse, une question ou une négation.', 'Un tant soit peu mostly lives in a hypothesis, a question or a negation.', '/œ̃ tɑ̃ swa pø vi syʁ.tu dɑ̃.zy.ni.po.tɛz yn kɛs.tjɔ̃ u yn ne.ga.sjɔ̃/', 'uhⁿ TAHⁿ swa PEU | vee sür-TOO | dahⁿ-zü-nee-po-TEHZ | ün kehs-TYOHⁿ | oo ün nay-ga-SYOHⁿ', ['rule', 'approximation'], ['flashcard'],
    rule('Où entends-tu le plus souvent « un tant soit peu » ?', 'Après si, dans une question ou une négation : s’il était un tant soit peu prudent... À l’affirmative, il devient souvent ironique : un tant soit peu vexé, c’est-à-dire très vexé.')),
];

/* ── ACT 6 · DEMANDER DE LOIN ─────────────────────────────────────────────── */

export const ACT6_ROWS: Row[] = [
  mv(1070, 'je vous saurais gré de', 'I would be grateful if you would', '/ʒə vu so.ʁɛ gʁe də/', 'zhuh voo soh-reh GRAY duh', ['distance'], 'Savoir gré : être reconnaissant. Très soutenu ; à l’oral, au téléphone avec un partenaire, une administration.', 'soutenu'),
  mv(1071, 'être amené à', 'to be led to, to end up having to', '/ɛ.tʁa.mə.ne a/', 'eh-tra-muh-NAY a', ['distance'], 'Annonce une contrainte sans brutalité : nous serons amenés à fermer plus tôt.'),
  mv(1072, 'seriez-vous en mesure de', 'would you be in a position to', '/sə.ʁje.vu ɑ̃ mə.zyʁ də/', 'suh-ryay-VOO ahⁿ muh-ZÜR duh', ['distance'], 'Demande si l’autre PEUT, sans supposer qu’il VEUT.', 'soutenu'),
  sent(1073, 'Je vous saurais gré de bien vouloir me confirmer cette date.', 'I would be grateful if you would kindly confirm this date.', '/ʒə vu so.ʁɛ gʁe də bjɛ̃ vu.lwaʁ mə kɔ̃.fiʁ.me sɛt dat/', 'zhuh voo soh-reh GRAY | duh byehⁿ voo-LWAR | muh kohⁿ-feer-MAY seht DAT', ['distance'], FCVDR, { register: 'soutenu' }),
  sent(1074, 'Seriez-vous en mesure de nous transmettre ces chiffres d’ici la fin du mois ?', 'Would you be in a position to send us these figures by the end of the month?', '/sə.ʁje.vu ɑ̃ mə.zyʁ də nu tʁɑ̃s.mɛtʁ se ʃifʁ di.si la fɛ̃ dy mwa/', 'suh-ryay-VOO ahⁿ muh-ZÜR | duh noo trahⁿss-MEHTR say SHEEFR | dee-see la FEHⁿ dü MWA', ['distance'], FCVR, { register: 'soutenu' }),
  sent(1075, 'Pour des raisons de sécurité, nous serons amenés à exposer les maquettes sous vitrine.', 'For safety reasons, we will have to display the models in glass cases.', '/puʁ de ʁɛ.zɔ̃ də se.ky.ʁi.te nu sə.ʁɔ̃.za.mə.ne a ɛks.po.ze le ma.kɛt su vi.tʁin/', 'poor day reh-ZOHⁿ duh say-kü-ree-TAY | noo suh-rohⁿ-za-muh-NAY | a ehks-po-ZAY lay ma-KEHT | soo vee-TREEN', ['distance'], FCVDR),
  sent(1076, 'Il se pourrait que nous soyons amenés à prolonger l’exposition.', 'We may end up extending the exhibition.', '/il sə pu.ʁɛ kə nu swa.jɔ̃.za.mə.ne a pʁɔ.lɔ̃.ʒe lɛks.po.zi.sjɔ̃/', 'eel suh poo-REH | kuh noo swa-yohⁿ-za-muh-NAY | a pro-lohⁿ-ZHAY lehks-po-zee-SYOHⁿ', ['distance']),
  sent(1077, 'J’aurais trois demandes, si vous le permettez.', 'I would have three requests, if you will allow me.', '/ʒo.ʁɛ tʁwa də.mɑ̃d si vu lə pɛʁ.mɛ.te/', 'zhoh-REH trwa duh-MAHⁿD | see voo luh pehr-meh-TAY', ['distance']),
  sent(1078, 'Si cela pose un problème, je préfère le savoir dès maintenant.', 'If that is a problem, I would rather know right now.', '/si sə.la po.zœ̃ pʁɔ.blɛm ʒə pʁe.fɛʁ lə sa.vwaʁ dɛ mɛ̃t.nɑ̃/', 'see suh-LA po-zuhⁿ pro-BLEMM | zhuh pray-FEHR luh sa-VWAR | deh mehⁿt-NAHⁿ', ['distance']),
  sent(1079, 'Je vous saurais gré de me rappeler avant vendredi.', 'I would be grateful if you could call me back before Friday.', '/ʒə vu so.ʁɛ gʁe də mə ʁa.pə.le a.vɑ̃ vɑ̃.dʁə.di/', 'zhuh voo soh-reh GRAY | duh muh ra-puh-LAY | a-vahⁿ vahⁿ-druh-DEE', ['distance'], FCVR, { register: 'soutenu' }),
  sent(1080, 'On dit je vous saurais gré, du verbe savoir, jamais je vous serais gré.', 'You say je vous saurais gré, from the verb savoir, never je vous serais gré.', '/ɔ̃ di ʒə vu so.ʁɛ gʁe dy vɛʁb sa.vwaʁ ʒa.mɛ ʒə vu sə.ʁɛ gʁe/', 'ohⁿ DEE | zhuh voo soh-reh GRAY | dü vehrb sa-VWAR | zha-MEH zhuh voo suh-reh GRAY', ['rule', 'distance'], ['flashcard'],
    rule('Je vous ... gré de me répondre. Saurais ou serais ?', 'Saurais : l’expression est savoir gré à quelqu’un. Être gré n’existe pas.')),
  sent(1081, 'Entre amis, je vous saurais gré sonne ironique.', 'Among friends, je vous saurais gré sounds ironic.', '/ɑ̃.tʁa.mi ʒə vu so.ʁɛ gʁe sɔn i.ʁɔ.nik/', 'ahⁿ-tra-MEE | zhuh voo soh-reh GRAY | sonn ee-ro-NEEK', ['rule', 'distance'], ['flashcard'],
    rule('Ta colocataire laisse traîner sa vaisselle. Je vous saurais gré de la ranger ?', 'C’est de l’ironie : la formule est trop haute pour la situation. Tu pourrais la ranger ? suffit.')),
];

/* ── ACT 7 · CONTREDIRE AVEC ÉGARDS ───────────────────────────────────────── */

export const ACT7_ROWS: Row[] = [
  mv(1082, 'avec tout le respect que je vous dois', 'with all due respect', '/a.vɛk tu lə ʁɛs.pɛ kə ʒə vu dwa/', 'a-vehk too luh rehs-PEH | kuh zhuh voo DWA', ['egards'], 'Annonce un désaccord ferme, souvent avec un supérieur. Dit d’un ton appuyé, elle peut sonner ironique.', 'soutenu'),
  mv(1083, 'loin de moi l’idée de', 'far be it from me to', '/lwɛ̃ də mwa li.de də/', 'lwehⁿ duh MWA | lee-DAY duh', ['egards'], 'Tu écartes d’avance une intention qu’on pourrait te prêter. Souvent suivi de mais.'),
  mv(1084, 'sans vouloir vous contredire', 'without wishing to contradict you', '/sɑ̃ vu.lwaʁ vu kɔ̃.tʁə.diʁ/', 'sahⁿ voo-LWAR | voo kohⁿ-truh-DEER', ['egards'], 'Sans vouloir + infinitif : annonce le geste même qu’on prétend éviter.'),
  // The meeting, line by line (the hidden listening of act 7).
  sent(1085, 'Hélène, j’ai une réserve sur le choix du vendredi.', 'Hélène, I have a reservation about choosing the Friday.', '/e.lɛn ʒe yn ʁe.zɛʁv syʁ lə ʃwa dy vɑ̃.dʁə.di/', 'ay-LENN | zhay ün ray-ZEHRV | sür luh SHWA dü vahⁿ-druh-DEE', ['reunion']),
  sent(1086, 'Loin de moi l’idée de remettre en cause tout le calendrier.', 'Far be it from me to call the whole schedule into question.', '/lwɛ̃ də mwa li.de də ʁə.mɛ.tʁɑ̃ koz tu lə ka.lɑ̃.dʁi.je/', 'lwehⁿ duh MWA lee-DAY | duh ruh-meh-trahⁿ KOZ | too luh ka-lahⁿ-dree-YAY', ['egards'], FCVDR),
  sent(1087, 'Mais un vernissage le vendredi soir, c’est la soirée où les familles sortent le moins.', 'But an opening on a Friday evening is the night when families go out least.', '/mɛ œ̃ vɛʁ.ni.saʒ lə vɑ̃.dʁə.di swaʁ sɛ la swa.ʁe u le fa.mij sɔʁt lə mwɛ̃/', 'meh uhⁿ vehr-nee-SAZH | luh vahⁿ-druh-dee SWAR | seh la swa-RAY | oo lay fa-MEEY SORT luh MWEHⁿ', ['reunion']),
  sent(1088, 'Sans vouloir vous contredire, les chiffres de l’an dernier vont plutôt dans l’autre sens.', 'Without wishing to contradict you, last year’s figures rather point the other way.', '/sɑ̃ vu.lwaʁ vu kɔ̃.tʁə.diʁ le ʃifʁ də lɑ̃ dɛʁ.nje vɔ̃ ply.to dɑ̃ lotʁ sɑ̃s/', 'sahⁿ voo-LWAR voo kohⁿ-truh-DEER | lay SHEEFR duh lahⁿ dehr-NYAY | vohⁿ plü-TOH dahⁿ LOHTR SAHⁿSS', ['egards'], FCVDR),
  sent(1089, 'Avec tout le respect que je vous dois, Hélène, ces chiffres concernaient une autre exposition.', 'With all due respect, Hélène, those figures were about another exhibition.', '/a.vɛk tu lə ʁɛs.pɛ kə ʒə vu dwa e.lɛn se ʃifʁ kɔ̃.sɛʁ.nɛ.ty.notʁ ɛks.po.zi.sjɔ̃/', 'a-vehk too luh rehs-PEH kuh zhuh voo DWA | ay-LENN | say SHEEFR kohⁿ-sehr-neh-tü-NOHTR ehks-po-zee-SYOHⁿ', ['egards']),
  sent(1090, 'C’est juste, mais le public des familles reste le même.', 'That is fair, but the family audience stays the same.', '/sɛ ʒyst mɛ lə py.blik de fa.mij ʁɛst lə mɛm/', 'seh ZHÜST | meh luh pü-BLEEK day fa-MEEY | rehst luh MEM', ['reunion']),
  sent(1091, 'Je vous rejoins sur le public ; je ne vous suis pas sur la date.', 'I agree with you on the audience; I do not follow you on the date.', '/ʒə vu ʁə.ʒwɛ̃ syʁ lə py.blik ʒə nə vu sɥi pa syʁ la dat/', 'zhuh voo ruh-ZHWEHⁿ | sür luh pü-BLEEK | zhuh nuh voo swee PA | sür la DAT', ['egards']),
  sent(1092, 'Et si nous gardions le vendredi pour les partenaires, et le samedi pour le public ?', 'And what if we kept the Friday for the partners and the Saturday for the public?', '/e si nu gaʁ.djɔ̃ lə vɑ̃.dʁə.di puʁ le paʁ.tə.nɛʁ e lə sam.di puʁ lə py.blik/', 'ay see noo gar-DYOHⁿ | luh vahⁿ-druh-DEE poor lay par-tuh-NEHR | ay luh sam-DEE poor luh pü-BLEEK', ['reunion']),
  sent(1093, 'Voilà une proposition qui mérite qu’on s’y arrête.', 'Now that is a proposal worth considering.', '/vwa.la yn pʁɔ.po.zi.sjɔ̃ ki me.ʁit kɔ̃ si.a.ʁɛt/', 'vwa-LA ün pro-po-zee-SYOHⁿ | kee may-REET | kohⁿ see-a-REHT', ['reunion']),
  sent(1094, 'Ces formules annoncent un désaccord : celui qui les entend se prépare à la suite.', 'These formulas announce a disagreement: whoever hears them braces for what follows.', '/se fɔʁ.myl a.nɔ̃s œ̃ de.za.kɔʁ sə.lɥi ki le.zɑ̃.tɑ̃ sə pʁe.paʁ a la sɥit/', 'say for-MÜL a-NOHⁿSS uhⁿ day-za-KOR | suh-LWEE kee lay-zahⁿ-TAHⁿ | suh pray-PAR a la SWEET', ['rule', 'egards'], ['flashcard'],
    rule('Ton collègue commence par « avec tout le respect que je vous dois ». Qu’attends-tu ?', 'Un désaccord, souvent ferme. La formule ne l’adoucit pas : elle le prépare.')),
  sent(1095, 'Une seule formule d’égards par désaccord ; deux, et l’on entend de l’ironie.', 'One formula of regard per disagreement; two, and people hear irony.', '/yn sœl fɔʁ.myl de.gaʁ paʁ de.za.kɔʁ dø e lɔ̃.nɑ̃.tɑ̃ də li.ʁɔ.ni/', 'ün suhl for-MÜL day-GAR | par day-za-KOR | DEU | ay lohⁿ-nahⁿ-TAHⁿ duh lee-ro-NEE', ['rule', 'egards'], ['flashcard'],
    rule('« Sauf votre respect, avec tout le respect que je vous dois, sans vouloir vous contredire... » Effet ?', 'L’accumulation sonne faux, voire moqueuse. Une formule, puis l’argument.')),
];

/* ── ACT 8 · LA CRITIQUE ENVELOPPÉE ───────────────────────────────────────── */

export const ACT8_ROWS: Row[] = [
  mv(1096, 'gagner à', 'to benefit from, to be the better for', '/ga.ɲe a/', 'ga-NYAY A', ['critique'], 'Ton texte gagnerait à être plus court : une critique dite comme une amélioration possible.'),
  mv(1098, 'ce qui me gêne un peu, c’est', 'what bothers me a little is', '/sə ki mə ʒɛn œ̃ pø sɛ/', 'suh kee muh ZHENN uhⁿ PEU | SEH', ['critique'], 'Tu nommes UN point précis, et tu le prends à ton compte.'),
  sent(1099, 'J’ai lu votre texte deux fois, et il y a de très bonnes choses.', 'I read your text twice, and there are some very good things in it.', '/ʒe ly vɔ.tʁə tɛkst dø fwa e il ja də tʁɛ bɔn ʃoz/', 'zhay LÜ vo-truh TEHKST deu FWA | ay eel ya duh treh BONN SHOZ', ['critique']),
  sent(1100, 'Ce qui me gêne un peu, c’est la longueur : les visiteurs lisent debout.', 'What bothers me a little is the length: visitors read standing up.', '/sə ki mə ʒɛn œ̃ pø sɛ la lɔ̃.gœʁ le vi.zi.tœʁ liz də.bu/', 'suh kee muh ZHENN uhⁿ PEU | seh la lohⁿ-GUHR | lay vee-zee-TUHR leez duh-BOO', ['critique'], FCVDR),
  sent(1101, 'Je me demande si on ne gagnerait pas à couper le deuxième paragraphe.', 'I wonder whether we would not be better off cutting the second paragraph.', '/ʒə mə də.mɑ̃d si ɔ̃ nə ga.ɲə.ʁɛ pa a ku.pe lə dø.zjɛm pa.ʁa.gʁaf/', 'zhuh muh duh-MAHⁿD | see ohⁿ nuh ga-nyuh-REH PA | a koo-PAY luh deu-zyemm pa-ra-GRAF', ['critique'], FCVDR),
  sent(1102, 'Je ne dis pas qu’il est inutile, je dis qu’il serait mieux sur le deuxième panneau.', 'I am not saying it is useless, I am saying it would be better on the second panel.', '/ʒə nə di pa ki.lɛ.ti.ny.til ʒə di kil sə.ʁɛ mjø syʁ lə dø.zjɛm pa.no/', 'zhuh nuh dee PA | kee-leh-tee-nü-TEEL | zhuh DEE | keel suh-REH MYEU | sür luh deu-zyemm pa-NOH', ['critique']),
  sent(1103, 'La fin, me semble-t-il, gagnerait à être plus nette.', 'The ending, it seems to me, would be better for being sharper.', '/la fɛ̃ mə sɑ̃bl.til ga.ɲə.ʁɛ a ɛtʁ ply nɛt/', 'la FEHⁿ | muh sahⁿbl-TEEL | ga-nyuh-REH a ehtr plü NEHT', ['critique']),
  sent(1104, 'Mais c’est votre texte ; choisissez la question qui vous ressemble.', 'But it is your text; choose the question that sounds like you.', '/mɛ sɛ vɔ.tʁə tɛkst ʃwa.zi.se la kɛs.tjɔ̃ ki vu ʁə.sɑ̃bl/', 'meh seh vo-truh TEHKST | shwa-zee-SAY la kehs-TYOHⁿ | kee voo ruh-SAHⁿBL', ['critique']),
  sent(1105, 'Un détail, et celui-là n’est pas négociable : la date est fausse.', 'One detail, and that one is not negotiable: the date is wrong.', '/œ̃ de.taj e sə.lɥi.la nɛ pa ne.gɔ.sjabl la da.tɛ fos/', 'uhⁿ day-TAHY | ay suh-lwee-LA neh pa nay-go-SYABL | la da-teh FOHSS', ['critique', 'ferme'], FCVDR),
  sent(1106, 'Pour le reste, vous avez fait le plus dur.', 'As for the rest, you have done the hardest part.', '/puʁ lə ʁɛst vu.za.ve fɛ lə ply dyʁ/', 'poor luh REHST | voo-za-VAY feh luh plü DÜR', ['critique']),
  sent(1107, 'Reconnaître, préciser, suggérer : et le point ferme reste ferme.', 'Acknowledge, pinpoint, suggest: and the firm point stays firm.', '/ʁə.kɔ.nɛtʁ pʁe.si.ze syg.ʒe.ʁe e lə pwɛ̃ fɛʁm ʁɛst fɛʁm/', 'ruh-ko-NEHTR | pray-see-ZAY | süg-zhay-RAY | ay luh pwehⁿ FEHRM rehst FEHRM', ['rule', 'critique'], ['flashcard'],
    rule('Une critique enveloppée, en quatre temps ?', 'Ce qui marche, un point précis, une suggestion au conditionnel ; et l’erreur de fait dite sans détour.')),
  sent(1108, 'Sans vouloir te vexer annonce souvent exactement ce qui va vexer.', 'Sans vouloir te vexer often announces exactly what is going to hurt.', '/sɑ̃ vu.lwaʁ tə vɛk.se a.nɔ̃s su.vɑ̃ ɛg.zak.tə.mɑ̃ sə ki va vɛk.se/', 'sahⁿ voo-LWAR tuh vehk-SAY | a-NOHⁿSS soo-VAHⁿ | ehg-zak-tuh-MAHⁿ | suh kee va vehk-SAY', ['rule', 'critique'], ['flashcard'],
    rule('On te dit « sans vouloir te vexer ». Que se passe-t-il dans ta tête ?', 'Tu te prépares à une critique. La formule ne protège pas : elle prévient. Mieux vaut une critique précise et juste.')),
  sent(1109, 'Si tu avais été un tant soit peu attentif, tu l’aurais vu.', 'If you had been the least bit attentive, you would have seen it.', '/si ty a.vɛ.e.te œ̃ tɑ̃ swa pø a.tɑ̃.tif ty lo.ʁɛ vy/', 'see tü a-veh-ay-TAY | uhⁿ TAHⁿ swa PEU a-tahⁿ-TEEF | tü loh-reh VÜ', ['critique', 'reproche']),
];

/* ── ACT 9 · DIRE MOINS POUR DIRE PLUS ────────────────────────────────────── */

export const ACT9_ROWS: Row[] = [
  mv(1110, 'ce n’est pas mauvais du tout', 'it is not bad at all (= it is good)', '/sə nɛ pa mo.vɛ dy tu/', 'suh neh pa moh-VEH dü TOO', ['litote'], 'Une litote : on nie le contraire pour dire, avec retenue, que c’est bien.'),
  mv(1111, 'je ne dis pas non', 'I would not say no (= yes, probably)', '/ʒə nə di pa nɔ̃/', 'zhuh nuh dee pa NOHⁿ', ['litote'], 'Un oui prudent, qui laisse une porte ouverte.'),
  mv(1112, 'c’est pas pire', 'it is pretty good (Québec)', '/sɛ pa piʁ/', 'seh pa PEER', ['litote', 'quebec'], 'Québec, familier : un compliment, souvent sincère. Ailleurs, on pourrait le prendre pour une réserve.', 'familier'),
  mv(1113, 'ce n’est pas terrible', 'it is not great (= it is mediocre)', '/sə nɛ pa tɛ.ʁibl/', 'suh neh pa teh-REEBL', ['litote'], 'Une litote vers le bas, en France comme au Québec : c’est médiocre.'),
  // After the opening night, line by line (the hidden listening of act 9).
  sent(1114, 'Alors, cette soirée d’ouverture, tu en as pensé quoi ?', 'So, this opening night, what did you think of it?', '/a.lɔʁ sɛt swa.ʁe du.vɛʁ.tyʁ ty ɑ̃.na pɑ̃.se kwa/', 'a-LOR | seht swa-RAY doo-vehr-TÜR | tü ahⁿ-na pahⁿ-say KWA', ['soiree']),
  sent(1115, 'Ce n’était pas mauvais du tout. Les gens sont restés jusqu’au bout.', 'It was not bad at all. People stayed until the end.', '/sə ne.tɛ pa mo.vɛ dy tu le ʒɑ̃ sɔ̃ ʁɛs.te ʒys.ko bu/', 'suh nay-teh pa moh-VEH dü TOO | lay ZHAHⁿ sohⁿ rehs-TAY | zhüs-koh BOO', ['litote'], FCVDR),
  sent(1116, 'Le discours d’Hélène était, disons, un peu long.', 'Hélène’s speech was, let us say, a little long.', '/lə dis.kuʁ de.lɛn e.tɛ di.zɔ̃ œ̃ pø lɔ̃/', 'luh dees-KOOR day-LENN | ay-TEH | dee-ZOHⁿ | uhⁿ peu LOHⁿ', ['litote']),
  sent(1117, 'Un peu long, c’est gentil : j’ai vu des gens regarder leur montre.', 'A little long is kind: I saw people looking at their watches.', '/œ̃ pø lɔ̃ sɛ ʒɑ̃.ti ʒe vy de ʒɑ̃ ʁə.gaʁ.de lœʁ mɔ̃tʁ/', 'uhⁿ peu LOHⁿ | seh zhahⁿ-TEE | zhay VÜ day ZHAHⁿ | ruh-gar-DAY luhr MOHⁿTR', ['litote']),
  sent(1118, 'Et l’affiche de Sophie, sur le grand mur ? C’est pas pire, hein.', 'And Sophie’s poster on the big wall? It is pretty good, eh.', '/e la.fiʃ də sɔ.fi syʁ lə gʁɑ̃ myʁ sɛ pa piʁ ɛ̃/', 'ay la-FEESH duh so-FEE | sür luh grahⁿ MÜR | seh pa PEER | EHⁿ', ['litote', 'quebec'], FCVR, { register: 'familier' }),
  sent(1119, 'Elle n’est pas bête, cette idée de bande bleue.', 'It is not a stupid idea, that blue band.', '/ɛl nɛ pa bɛt sɛ.ti.de də bɑ̃d blø/', 'ehl neh pa BEHT | seh-tee-DAY duh bahⁿd BLEU', ['litote']),
  sent(1120, 'Le buffet, par contre, ce n’était pas terrible.', 'The buffet, on the other hand, was not great.', '/lə by.fɛ paʁ kɔ̃tʁ sə ne.tɛ pa tɛ.ʁibl/', 'luh bü-FEH | par KOHⁿTR | suh nay-teh pa teh-REEBL', ['litote']),
  sent(1121, 'On refait une soirée le mois prochain ? Je ne dis pas non.', 'Shall we do another evening next month? I would not say no.', '/ɔ̃ ʁə.fɛ yn swa.ʁe lə mwa pʁɔ.ʃɛ̃ ʒə nə di pa nɔ̃/', 'ohⁿ ruh-FEH ün swa-RAY | luh mwa pro-SHEHⁿ | zhuh nuh dee pa NOHⁿ', ['litote']),
  sent(1122, 'La litote dit moins pour faire entendre plus.', 'Litotes says less to make you hear more.', '/la li.tɔt di mwɛ̃ puʁ fɛʁ ɑ̃.tɑ̃dʁ plys/', 'la lee-TOT | dee MWEHⁿ | poor fehr ahⁿ-TAHⁿDR PLÜSS', ['rule', 'litote'], ['flashcard'],
    rule('« Ce n’est pas mauvais du tout. » Combien ça vaut ?', 'C’est bon, parfois très bon : on nie le contraire, par retenue.')),
  sent(1123, 'La retenue adoucit un reproche : un peu long veut parfois dire beaucoup trop long.', 'Understatement softens a reproach: a little long sometimes means far too long.', '/la ʁə.tə.ny a.du.si œ̃ ʁə.pʁɔʃ œ̃ pø lɔ̃ vø paʁ.fwa diʁ bo.ku tʁo lɔ̃/', 'la ruh-tuh-NÜ a-doo-SEE uhⁿ ruh-PROSH | uhⁿ peu LOHⁿ | veu par-fwa DEER boh-koo tro LOHⁿ', ['rule', 'litote'], ['flashcard'],
    rule('« Le discours était un peu long. » Que comprends-tu ?', 'Selon le ton et la personne : un peu, ou beaucoup trop. Le contexte et la voix décident.')),
];

/* ── ACT 10 · LA BONNE DOSE ───────────────────────────────────────────────── */

export const ACT10_ROWS: Row[] = [
  sent(1124, 'Le bleu est nettement plus foncé que sur l’épreuve que nous avions validée.', 'The blue is clearly darker than on the proof we had approved.', '/lə blø ɛ nɛt.mɑ̃ ply fɔ̃.se kə syʁ le.pʁœv kə nu.za.vjɔ̃ va.li.de/', 'luh BLEU eh neht-MAHⁿ plü fohⁿ-SAY | kuh sür lay-PRUHV | kuh noo-za-vyohⁿ va-lee-DAY', ['dose', 'ferme'], FCVDR),
  sent(1125, 'Il doit y avoir eu un souci de réglage, et ce sont des choses qui arrivent.', 'There must have been a setting problem, and these things happen.', '/il dwa.ti.ja.vwa.ʁy œ̃ su.si də ʁe.glaʒ e sə sɔ̃ de ʃoz ki a.ʁiv/', 'eel dwa-tee-ya-vwa-RÜ | uhⁿ soo-SEE duh ray-GLAZH | ay suh sohⁿ day SHOZ kee a-REEV', ['dose', 'devoir']),
  sent(1126, 'En revanche, l’exposition ouvre le douze : nous aurions besoin d’un nouveau tirage avant le huit.', 'On the other hand, the exhibition opens on the twelfth: we would need a new print run before the eighth.', '/ɑ̃ ʁə.vɑ̃ʃ lɛks.po.zi.sjɔ̃ uvʁ lə duz nu.zo.ʁjɔ̃ bə.zwɛ̃ dœ̃ nu.vo ti.ʁaʒ a.vɑ̃ lə ɥit/', 'ahⁿ ruh-VAHⁿSH | lehks-po-zee-SYOHⁿ OOVR luh DOOZ | noo-zoh-ryohⁿ buh-ZWEHⁿ | duhⁿ noo-voh tee-RAZH | a-vahⁿ luh WEET', ['dose', 'ferme']),
  sent(1127, 'Je vous saurais gré de me rappeler aujourd’hui, si possible.', 'I would be grateful if you could call me back today, if possible.', '/ʒə vu so.ʁɛ gʁe də mə ʁa.pə.le o.ʒuʁ.dɥi si pɔ.sibl/', 'zhuh voo soh-reh GRAY | duh muh ra-puh-LAY oh-zhoor-DWEE | see po-SEEBL', ['dose', 'distance'], FCVR, { register: 'soutenu' }),
  sent(1128, 'Une nuance par doute, pas une par mot.', 'One hedge per doubt, not one per word.', '/yn nɥɑ̃s paʁ dut pa yn paʁ mo/', 'ün NWAHⁿSS par DOOT | pa ün par MOH', ['rule', 'dose'], ['flashcard'],
    rule('« Il me semble que, peut-être, ce serait un petit peu foncé. » Combien de doutes ?', 'Un seul, sur la couleur. Une seule nuance suffit : le bleu me semble plus foncé que prévu.')),
  sent(1129, 'Un fait établi, une date ferme ou une limite de sécurité ne se nuancent pas.', 'An established fact, a firm date or a safety limit is not something you hedge.', '/œ̃ fɛ e.ta.bli yn dat fɛʁm u yn li.mit də se.ky.ʁi.te nə sə nɥɑ̃s pa/', 'uhⁿ feh ay-ta-BLEE | ün dat FEHRM | oo ün lee-MEET duh say-kü-ree-TAY | nuh suh NWAHⁿSS PA', ['rule', 'dose', 'ferme'], ['flashcard'],
    rule('La salle accueille cent quatre-vingts personnes au maximum. Tu dis « il me semble que » ?', 'Non : c’est une norme, tu la dis nettement. Tu peux nuancer ce que tu proposes ensuite.')),
  sent(1130, 'Le premier message n’a reçu aucune réponse ; le second a été rappelé dans l’heure.', 'The first message got no answer; the second was returned within the hour.', '/lə pʁə.mje me.saʒ na ʁə.sy o.kyn ʁe.pɔ̃s lə sə.gɔ̃ a e.te ʁa.pə.le dɑ̃ lœʁ/', 'luh pruh-myay may-SAZH | na ruh-SÜ oh-kün ray-POHⁿSS | luh suh-GOHⁿ a ay-tay ra-puh-LAY | dahⁿ LUHR', ['dose']),
  sent(1131, 'Trop de précautions font croire que tu n’es pas sûr de toi, ou que tu ironises.', 'Too many precautions make people think you are unsure of yourself, or being ironic.', '/tʁo də pʁe.ko.sjɔ̃ fɔ̃ kʁwaʁ kə ty nɛ pa syʁ də twa u kə ty i.ʁɔ.niz/', 'troh duh pray-koh-SYOHⁿ | fohⁿ KRWAR | kuh tü neh pa SÜR duh TWA | oo kuh tü ee-ro-NEEZ', ['dose']),
  sent(1132, 'Je vous appelle au sujet des affiches livrées ce matin.', 'I am calling about the posters delivered this morning.', '/ʒə vu.za.pɛl o sy.ʒɛ de.za.fiʃ li.vʁe sə ma.tɛ̃/', 'zhuh voo-za-PEHL oh sü-ZHEH | day-za-FEESH lee-VRAY | suh ma-TEHⁿ', ['dose']),
  sent(1133, 'Je reste disponible tout l’après-midi.', 'I am available all afternoon.', '/ʒə ʁɛst dis.pɔ.nibl tu la.pʁɛ.mi.di/', 'zhuh rehst dees-po-NEEBL | too la-preh-mee-DEE', ['dose']),
];

/* ── ACT 11 · ENTENDRE LA NUANCE DES AUTRES ───────────────────────────────── */

export const ACT11_ROWS: Row[] = [
  mv(1134, 'il faudrait voir', 'we would have to see', '/il fo.dʁɛ vwaʁ/', 'eel foh-dreh VWAR', ['decoder'], 'Souvent une réserve, parfois un refus poli : rien n’est promis.'),
  mv(1135, 'ce n’est pas exclu', 'it is not ruled out', '/sə nɛ pa.zɛk.skly/', 'suh neh pa-zehk-SKLÜ', ['decoder'], 'Une possibilité faible, présentée comme ouverte.'),
  // The call from Lyon, line by line (the hidden listening of act 11).
  sent(1136, 'Merci pour votre message, madame Marchand, je l’ai bien reçu.', 'Thank you for your message, Madame Marchand, I did receive it.', '/mɛʁ.si puʁ vɔtʁ me.saʒ ma.dam maʁ.ʃɑ̃ ʒə le bjɛ̃ ʁə.sy/', 'mehr-SEE poor votr may-SAZH | ma-dam mar-SHAHⁿ | zhuh lay byehⁿ ruh-SÜ', ['appel']),
  sent(1137, 'Pour la date du vingt avril, c’est entendu, aucun problème.', 'For the date of the twentieth of April, that is agreed, no problem.', '/puʁ la dat dy vɛ̃.ta.vʁil sɛ.tɑ̃.tɑ̃.dy o.kœ̃ pʁɔ.blɛm/', 'poor la DAT dü vehⁿ-ta-VREEL | seh-tahⁿ-tahⁿ-DÜ | oh-kuhⁿ pro-BLEMM', ['appel']),
  sent(1138, 'Les vitrines, en revanche… c’est intéressant comme idée.', 'The glass cases, on the other hand… it is an interesting idea.', '/le vi.tʁin ɑ̃ ʁə.vɑ̃ʃ sɛ.tɛ̃.te.ʁɛ.sɑ̃ kɔm i.de/', 'lay vee-TREEN | ahⁿ ruh-VAHⁿSH | seh-tehⁿ-tay-reh-SAHⁿ komm ee-DAY', ['decoder']),
  sent(1139, 'Il faudrait voir avec notre conservatrice ; je vais y réfléchir.', 'We would have to see with our curator; I will think about it.', '/il fo.dʁɛ vwaʁ a.vɛk nɔtʁ kɔ̃.sɛʁ.va.tʁis ʒə vɛ i ʁe.fle.ʃiʁ/', 'eel foh-dreh VWAR | a-vehk notr kohⁿ-sehr-va-TREESS | zhuh veh ee ray-flay-SHEER', ['decoder'], FCVDR),
  sent(1140, 'Une prolongation de deux semaines, ce n’est pas exclu, mais pas avant l’été.', 'A two-week extension is not ruled out, but not before the summer.', '/yn pʁɔ.lɔ̃.ga.sjɔ̃ də dø smɛn sə nɛ pa.zɛk.skly mɛ pa.za.vɑ̃ le.te/', 'ün pro-lohⁿ-ga-SYOHⁿ duh deu SMENN | suh neh pa-zehk-SKLÜ | meh pa-za-vahⁿ lay-TAY', ['decoder']),
  sent(1141, 'Pour les valeurs d’assurance, nous en reparlerons.', 'As for the insurance values, we will talk about it again.', '/puʁ le va.lœʁ da.sy.ʁɑ̃s nu.zɑ̃ ʁə.paʁ.lə.ʁɔ̃/', 'poor lay va-LUHR da-sü-RAHⁿSS | noo-zahⁿ ruh-par-luh-ROHⁿ', ['decoder']),
  sent(1142, 'Je vous rappelle dès que j’ai un peu plus de visibilité.', 'I will call you back as soon as I can see a little more clearly.', '/ʒə vu ʁa.pɛl dɛ kə ʒe œ̃ pø ply də vi.zi.bi.li.te/', 'zhuh voo ra-PEHL | deh kuh zhay uhⁿ peu PLÜ | duh vee-zee-bee-lee-TAY', ['decoder']),
  sent(1143, 'Une date ferme, un oui net ; le reste, entre les lignes, ressemble plutôt à un non.', 'A firm date, a clear yes; the rest, between the lines, sounds more like a no.', '/yn dat fɛʁm œ̃ wi nɛt lə ʁɛst ɑ̃.tʁə le liɲ ʁə.sɑ̃bl ply.to a œ̃ nɔ̃/', 'ün dat FEHRM | uhⁿ wee NEHT | luh REHST | ahⁿ-truh lay LEENY | ruh-sahⁿbl plü-TOH a uhⁿ NOHⁿ', ['decoder']),
  sent(1144, 'Je vais y réfléchir peut vouloir dire oui plus tard, ou non tout de suite.', 'I will think about it can mean yes later, or no right now.', '/ʒə vɛ i ʁe.fle.ʃiʁ pø vu.lwaʁ diʁ wi ply taʁ u nɔ̃ tut sɥit/', 'zhuh veh ee ray-flay-SHEER | peu voo-lwar DEER | wee plü TAR | oo nohⁿ toot SWEET', ['rule', 'decoder'], ['flashcard'],
    rule('« Je vais y réfléchir », sans date. Que fais-tu ?', 'Tu reformules et tu demandes une date : je vous rappelle jeudi, cela vous laisse le temps ? Le flou s’éclaircit.')),
  sent(1145, 'Devant une réponse floue, reformule et demande une date.', 'Faced with a vague answer, rephrase it and ask for a date.', '/də.vɑ̃ yn ʁe.pɔ̃s flu ʁə.fɔʁ.myl e də.mɑ̃d yn dat/', 'duh-vahⁿ ün ray-pohⁿss FLOO | ruh-for-MÜL | ay duh-MAHⁿD ün DAT', ['rule', 'decoder'], ['flashcard'],
    rule('Ton partenaire dit « ce n’est pas exclu ». Tu considères que c’est oui ?', 'Non : c’est une porte entrouverte. Tu demandes à quelles conditions, et pour quand.')),
  sent(1146, 'Si je vous comprends bien, les vitrines posent un problème à votre conservatrice ?', 'If I understand you correctly, the glass cases are a problem for your curator?', '/si ʒə vu kɔ̃.pʁɑ̃ bjɛ̃ le vi.tʁin poz œ̃ pʁɔ.blɛm a vɔtʁ kɔ̃.sɛʁ.va.tʁis/', 'see zhuh voo kohⁿ-PRAHⁿ BYEHⁿ | lay vee-TREEN POZ uhⁿ pro-BLEMM | a votr kohⁿ-sehr-va-TREESS', ['decoder']),
];

/* ── ACT 12 · À TOI DE NUANCER ────────────────────────────────────────────── */

export const ACT12_ROWS: Row[] = [
  sent(1147, 'Merci d’abord : la notice est riche, précise, et la partie sur la fabrication est passionnante.', 'Thank you first of all: the note is rich and precise, and the part on how the models were made is fascinating.', '/mɛʁ.si da.bɔʁ la nɔ.tis ɛ ʁiʃ pʁe.siz e la paʁ.ti syʁ la fa.bʁi.ka.sjɔ̃ ɛ pa.sjɔ.nɑ̃t/', 'mehr-SEE da-BOR | la no-TEESS eh REESH | pray-SEEZ | ay la par-TEE sür la fa-bree-ka-SYOHⁿ | eh pa-syo-NAHⁿT', ['modele']),
  sent(1148, 'Il me semble que la partie historique gagnerait à être resserrée.', 'It seems to me that the historical part would benefit from being tightened.', '/il mə sɑ̃bl kə la paʁ.ti is.tɔ.ʁik ga.ɲə.ʁɛ a ɛtʁ ʁə.se.ʁe/', 'eel muh SAHⁿBL | kuh la par-TEE ees-to-REEK | ga-nyuh-REH a ehtr ruh-say-RAY', ['modele'], FCVDR),
  sent(1149, 'Je ne dis pas qu’il faut simplifier le propos ; je dis qu’il faut ouvrir la porte au visiteur.', 'I am not saying the content should be simplified; I am saying the door should be opened to the visitor.', '/ʒə nə di pa kil fo sɛ̃.pli.fje lə pʁɔ.po ʒə di kil fo u.vʁiʁ la pɔʁt o vi.zi.tœʁ/', 'zhuh nuh dee PA | keel foh sehⁿ-plee-FYAY luh pro-POH | zhuh DEE | keel foh oo-VREER la PORT | oh vee-zee-TUHR', ['modele']),
  sent(1150, 'Le transport partira le cinq avril, pas le quinze : nous ne pouvons pas déplacer cette date.', 'The shipment will leave on the fifth of April, not the fifteenth: we cannot move that date.', '/lə tʁɑ̃s.pɔʁ paʁ.ti.ʁa lə sɛ̃.ka.vʁil pa lə kɛ̃z nu nə pu.vɔ̃ pa de.pla.se sɛt dat/', 'luh trahⁿss-POR par-tee-RA | luh sehⁿ-ka-VREEL | pa luh KEHⁿZ | noo nuh poo-vohⁿ PA | day-pla-SAY seht DAT', ['modele', 'ferme']),
  sent(1151, 'La date du quinze doit venir d’un ancien calendrier.', 'The date of the fifteenth must come from an old schedule.', '/la dat dy kɛ̃z dwa və.niʁ dœ̃.nɑ̃.sjɛ̃ ka.lɑ̃.dʁi.je/', 'la DAT dü KEHⁿZ | dwa vuh-NEER | duhⁿ-nahⁿ-syehⁿ ka-lahⁿ-dree-YAY', ['modele', 'devoir']),
  sent(1152, 'Je vous saurais gré de nous transmettre deux ou trois photos d’ici la fin de la semaine.', 'I would be grateful if you could send us two or three photos by the end of the week.', '/ʒə vu so.ʁɛ gʁe də nu tʁɑ̃s.mɛtʁ dø u tʁwa fɔ.to di.si la fɛ̃ də la sə.mɛn/', 'zhuh voo soh-reh GRAY | duh noo trahⁿss-MEHTR | deu oo trwa fo-TOH | dee-see la FEHⁿ duh la SMENN', ['modele', 'distance'], FCVR, { register: 'soutenu' }),
  sent(1153, 'Si cela vous pose un problème, n’hésitez pas à me le dire.', 'If that is a problem for you, do not hesitate to tell me.', '/si sə.la vu po.zœ̃ pʁɔ.blɛm ne.zi.te pa a mə lə diʁ/', 'see suh-LA voo po-zuhⁿ pro-BLEMM | nay-zee-tay PA | a muh luh DEER', ['modele']),
  sent(1154, 'La capacité de la salle, elle, ne se discute pas : cent quatre-vingts personnes.', 'The capacity of the hall is not up for discussion: one hundred and eighty people.', '/la ka.pa.si.te də la sal ɛl nə sə dis.kyt pa sɑ̃ ka.tʁə.vɛ̃ pɛʁ.sɔn/', 'la ka-pa-see-TAY duh la SAL | EHL | nuh suh dees-KÜT PA | sahⁿ ka-truh-VEHⁿ pehr-SONN', ['modele', 'ferme'], FCVDR),
  sent(1155, 'Le chiffre de deux cent cinquante doit venir de l’ancienne salle.', 'The figure of two hundred and fifty must come from the old hall.', '/lə ʃifʁ də dø sɑ̃ sɛ̃.kɑ̃t dwa və.niʁ də lɑ̃.sjɛn sal/', 'luh SHEEFR duh deu sahⁿ sehⁿ-KAHⁿT | dwa vuh-NEER | duh lahⁿ-syenn SAL', ['modele', 'devoir']),
  sent(1156, 'Je me demande si nous ne gagnerions pas à garder la visite des écoles.', 'I wonder whether we would not be better off keeping the school visit.', '/ʒə mə də.mɑ̃d si nu nə ga.ɲə.ʁjɔ̃ pa a gaʁ.de la vi.zit de.ze.kɔl/', 'zhuh muh duh-MAHⁿD | see noo nuh ga-nyuh-RYOHⁿ PA | a gar-DAY la vee-ZEET | day-zay-KOL', ['modele']),
];

export const ROWS_BY_ACT: Row[][] = [
  ACT1_ROWS, ACT2_ROWS, ACT3_ROWS, ACT4_ROWS, ACT5_ROWS, ACT6_ROWS,
  ACT7_ROWS, ACT8_ROWS, ACT9_ROWS, ACT10_ROWS, ACT11_ROWS, ACT12_ROWS,
];

export const ALL_ROWS: Row[] = ROWS_BY_ACT.flat();

/** Rows a dictation mission can use, by act. */
export const dicteeFor = (act: number): string[] =>
  (ROWS_BY_ACT[act - 1] ?? []).filter((r) => (r.drills as string[]).includes('dictation')).map((r) => r.id);

/* ══════════════════════════════════════════════════════════════════════════
 *  §I. THE LONG TEXTS
 *
 *  Every reading lives here so the reading, the quiz and the task agree.
 *  C1 length (about 250 to 330 words), measured by the scratch check. One
 *  apostrophe style, the typographic one. All texts are « texte original
 *  écrit pour la leçon ».
 * ══════════════════════════════════════════════════════════════════════════ */

/** Act 1: Karim’s voice message, transcribed. Both excesses in one text. */
export const KARIM_TEXT =
  'Message vocal de Karim Benali, mardi, 18 h 12. Salut, c’est Karim. Je t’appelle à propos de la répétition de ce matin. Je ne t’en veux pas, rassure-toi, mais j’ai besoin de te le dire : quand tu as lancé devant tout le monde « c’est trop long et les chiffres sont faux », j’ai eu l’impression de recevoir une douche froide. Sur le fond, tu n’avais pas tort ; c’est la manière qui m’a blessé. La troisième partie traîne, c’est vrai, et le chiffre de fréquentation venait de l’ancien rapport. Hélène n’a rien dit, et j’ai passé le reste de la réunion à me défendre au lieu d’écouter. Le plus bête, c’est que je sentais moi-même que la troisième partie était trop longue : dit autrement, ton avis m’aurait fait gagner une soirée. ' +
  'Remarque, j’ai aussi connu l’excès inverse. Sophie m’a parlé après toi, avec mille précautions : « je ne sais pas, c’est peut-être moi, mais il se pourrait éventuellement que, enfin, je dis ça comme ça… » Au bout de deux minutes, je ne savais toujours pas ce qu’elle me reprochait. Elle a été adorable, et je n’ai rien appris. ' +
  'Entre ta phrase et la sienne, il y a sûrement un juste milieu. Quelqu’un qui me dirait : « Ta présentation tient la route ; il me semble seulement que la troisième partie gagnerait à être raccourcie, et, si je ne m’abuse, le chiffre de fréquentation date de l’ancien rapport. » Là, j’aurais entendu les deux problèmes, et j’aurais eu envie de les corriger au lieu de me justifier. ' +
  'Bref, je refais la troisième partie ce soir et je te la montre demain, si tu as dix minutes, avant de l’envoyer à Hélène. Et la prochaine fois, mets un peu de gants, mais juste ce qu’il faut. Bonne soirée.';

/** Act 3: Karim’s forecast at the Monday team meeting, transcribed. */
export const PREVISION_TEXT =
  'Point d’équipe du lundi, Institut Verlune. Karim présente la fréquentation attendue pour l’exposition « Rivières sous la ville ». Transcription de son intervention. ' +
  '« Je vais être prudent, parce qu’une prévision reste une prévision. L’an dernier, l’exposition sur les toits verts a reçu un peu plus de onze mille visiteurs en huit semaines. Cette année, nous ouvrons plus tôt et nous restons ouverts dix semaines. Il y a fort à parier que nous dépasserons ce chiffre : les réservations de groupes ont déjà doublé par rapport à la même date l’an dernier. Il est permis de penser, aussi, que le thème attirera des familles : les rivières enfouies sous la ville, ça parle aux enfants. Je ne mettrais pas ma main au feu sur le chiffre exact, évidemment ; disons entre treize et quinze mille. ' +
  'Deux inquiétudes ont été soulevées la semaine dernière. La première concerne les travaux de la rue des Tanneurs-Bleus. Pour l’instant, rien n’indique que les travaux bloquent l’entrée du public : la Ville parle d’un chantier côté nord, et notre entrée est au sud. La seconde concerne le festival de l’eau, qui tombe le même mois. Là, je ne parierais pas dans un sens ou dans l’autre : les deux publics se recoupent peut-être, mais nous n’avons aucune donnée. ' +
  'Je vous rappelle enfin que nos chiffres de l’an dernier comptaient aussi les visites scolaires, qui représentaient à peu près un tiers du total ; si les écoles réservent moins, la prévision baissera d’autant. Ce que je propose, c’est de refaire le point à la mi-avril, quand nous aurons les réponses des écoles. D’ici là, tout porte à croire que la salle principale suffira. Si les réservations continuent à ce rythme, en revanche, il faudra sans doute ouvrir la petite salle le samedi. Je vous enverrai les chiffres détaillés mercredi. »';

/** Act 5: Sophie rehearses her poster presentation, transcribed. */
export const AFFICHE_TEXT =
  'Répétition de Sophie Lavoie, graphiste de l’Institut, la veille de la réunion avec la directrice. Elle présente l’affiche de l’exposition. ' +
  '« L’idée de départ, c’est de montrer ce qu’on ne voit pas. Les rivières dont parle l’exposition coulent sous nos pieds, et personne ne les remarque. L’affiche est donc, en quelque sorte, une coupe de la ville : en haut, la rue, les passants, un autobus ; en bas, sous le trottoir, une bande bleue qui serpente. Ce n’est pas, à proprement parler, une carte : les rivières ne sont pas à l’échelle, et leur tracé est simplifié. C’est une image plutôt qu’une information. ' +
  'J’ai essayé une version plus réaliste, avec les vrais égouts et les vraies canalisations, mais elle était illisible à trois mètres : on aurait dit un plan technique. Pour les couleurs, j’ai gardé le bleu ardoise de l’Institut et j’ai ajouté un ocre pour la ville. Le titre est court, trois mots, et il tient sur une ligne. Si le passant s’intéresse un tant soit peu à son quartier, il cherchera sa rue sur l’affiche : c’est le pari. ' +
  'Il reste une question, et je préfère la poser maintenant. La bande bleue est, pour ainsi dire, le personnage principal, mais elle est en bas, là où l’œil arrive en dernier. Est-ce qu’on l’assume, ou est-ce qu’on la remonte ? Je n’ai pas d’avis tranché : les deux fonctionnent ; ce qui change, c’est l’ordre de lecture. ' +
  'Enfin, pour la version numérique, j’ai prévu une petite animation : la bande bleue bouge, très lentement. Ce n’est pas une vidéo à proprement parler, plutôt une respiration. On pourra la couper si elle distrait. Voilà ; si vous avez un tant soit peu de temps après la réunion, je vous montre les deux versions. »';

/** Act 6: Hélène’s voice message to the partner museum in Lyon. */
export const APPEL_TEXT =
  'Message vocal laissé par Hélène Marchand, directrice de l’Institut Verlune, à Théo Brunet, responsable des collections à l’Atelier des Berges, à Lyon. ' +
  '« Bonjour Monsieur Brunet, Hélène Marchand, de l’Institut Verlune, à Montréal. Je vous appelle au sujet du prêt des maquettes pour notre exposition. Tout d’abord, merci encore pour votre accord de principe : toute l’équipe s’en réjouit. ' +
  'J’aurais trois demandes, si vous le permettez. La première concerne les dates. Les maquettes devraient arriver à Montréal au plus tard le vingt avril. Je vous saurais gré de bien vouloir me confirmer cette date. La deuxième concerne l’assurance. Notre assureur demande la valeur de chaque pièce : seriez-vous en mesure de nous transmettre ces chiffres d’ici la fin du mois ? La troisième est plus délicate. Pour des raisons de sécurité, nous serons amenés à exposer les maquettes sous vitrine, et non en accès libre comme à Lyon. Je sais que ce n’est pas ce que vous aviez imaginé, et je comprends que vous teniez à ce que le public puisse voir les pièces de près. Les vitrines que nous avons choisies sont basses et ouvertes sur trois côtés. Si cela pose un problème, je préfère le savoir dès maintenant, pour que nous cherchions ensemble une solution. ' +
  'Une précision, enfin. Il se pourrait que nous soyons amenés à prolonger l’exposition de deux semaines. Rien n’est décidé ; je vous en parle pour que vous ne soyez pas pris de court. ' +
  'Je vous saurais gré de me rappeler avant vendredi, quand vous en aurez l’occasion. Mon numéro figure dans mon dernier courriel. Je vous remercie d’avance, et je vous souhaite une excellente journée. »';

/** Act 8: Hélène’s feedback to Karim on the first panel, transcribed. */
export const RETOUR_TEXT =
  'Bureau d’Hélène, jeudi. Karim lui a envoyé le texte du premier panneau de l’exposition. Elle lui fait ses commentaires. ' +
  'Hélène : Merci, Karim. J’ai lu votre texte deux fois, et il y a de très bonnes choses. L’ouverture sur le ruisseau disparu de votre enfance, j’aime beaucoup : on entre tout de suite dans le sujet. ' +
  'Karim : Tant mieux. J’avais peur que ce soit trop personnel. ' +
  'Hélène : Non, au contraire. Ce qui me gêne un peu, c’est la longueur : les visiteurs lisent debout. Le panneau fait quatre cents mots. Je me demande si on ne gagnerait pas à couper le deuxième paragraphe. ' +
  'Karim : Celui sur l’histoire des égouts ? Il est un peu technique, c’est vrai. ' +
  'Hélène : Je ne dis pas qu’il est inutile, je dis qu’il serait mieux sur le deuxième panneau. Ici, il ralentit l’entrée. ' +
  'Karim : D’accord. Et le reste ? ' +
  'Hélène : La fin, me semble-t-il, gagnerait à être plus nette. Vous terminez sur trois questions ; une seule suffirait, et ce serait plus fort. ' +
  'Karim : Laquelle garderiez-vous ? ' +
  'Hélène : La dernière, peut-être : « Et si la rivière revenait ? » Mais c’est votre texte ; choisissez la question qui vous ressemble. ' +
  'Karim : Je vais essayer. Autre chose ? ' +
  'Hélène : Un détail, et celui-là n’est pas négociable : la date est fausse. Le ruisseau a été couvert en 1898, pas en 1890. Les visiteurs vérifient ce genre de choses. ' +
  'Karim : Oups. Je corrige tout de suite. ' +
  'Hélène : Pour le reste, vous avez fait le plus dur. Le ton est juste, on a envie de lire la suite, et c’est exactement ce qu’on attend d’un premier panneau. Vous me renvoyez une version lundi ? Karim : Lundi matin, promis.';

/** Act 10: two versions of one voice message to the printer. */
export const DOSE_TEXT =
  'Deux versions du même message vocal. Sophie appelle l’Imprimerie du Pont-Rouge : les affiches livrées ce matin ont un défaut. ' +
  'Version A. « Oui, bonjour, c’est Sophie, de l’Institut Verlune… Je ne voudrais surtout pas vous déranger, et c’est peut-être moi qui me trompe, mais il me semble que, peut-être, les affiches seraient un petit peu, comment dire, un peu plus foncées que prévu. Enfin, je dis ça, je ne suis pas spécialiste… Ce n’est sans doute pas très grave, mais si jamais vous aviez éventuellement un moment, à l’occasion, pour regarder… Voilà. Désolée encore. Bonne journée. » ' +
  'Version B. « Bonjour, Sophie Lavoie, de l’Institut Verlune. Je vous appelle au sujet des affiches livrées ce matin. Le bleu est nettement plus foncé que sur l’épreuve que nous avions validée : la bande de la rivière se confond presque avec le noir. Il doit y avoir eu un souci de réglage, et ce sont des choses qui arrivent. En revanche, l’exposition ouvre le douze : nous aurions besoin d’un nouveau tirage avant le huit. Je vous saurais gré de me rappeler aujourd’hui, si possible, pour que nous trouvions une solution. Je reste disponible tout l’après-midi. Merci d’avance. » ' +
  'La différence ne tient pas à la politesse : les deux messages sont polis. Elle tient à la dose. Le lendemain, Sophie compare. Le premier message n’a reçu aucune réponse ; le second a été rappelé dans l’heure. L’imprimeur a reconnu l’erreur et proposé un nouveau tirage, sans frais, pour le six. Dans la version A, les quatre précautions du début ont noyé la seule information utile ; et la demande, enveloppée de « si jamais » et d’« éventuellement », ne disait ni quoi faire ni pour quand.';

/** Act 12: the model message, on a DIFFERENT case from the task. */
export const MODELE_TEXT =
  'Message vocal laissé à Théo Brunet, de l’Atelier des Berges, au sujet de sa notice pour le catalogue. ' +
  '« Bonjour Monsieur Brunet, je vous appelle de l’Institut Verlune, de la part d’Hélène Marchand, au sujet de la notice que vous nous avez envoyée pour le catalogue. Merci d’abord : la notice est riche, précise, et la partie sur la fabrication est passionnante. ' +
  'J’aurais deux remarques et une précision. La première remarque porte sur la longueur. La notice fait deux pages ; le catalogue prévoit une page par pièce. Il me semble que la partie historique gagnerait à être resserrée, quitte à garder la version longue pour notre site. La deuxième touche au vocabulaire. Certains termes, comme « exutoire » ou « collecteur », risquent, me semble-t-il, d’arrêter le grand public ; une courte définition entre parenthèses suffirait. Je ne dis pas qu’il faut simplifier le propos ; je dis qu’il faut ouvrir la porte au visiteur. ' +
  'La précision, maintenant, et celle-là ne dépend pas de nous. Le transport partira le cinq avril, pas le quinze : nous ne pouvons pas déplacer cette date. La date du quinze doit venir d’un ancien calendrier ; il y a fort à parier que notre dernier courriel ne vous est pas parvenu. Je vous le renvoie aujourd’hui, avec le calendrier complet, pour que nous travaillions enfin sur la même version. ' +
  'Enfin, je vous saurais gré de nous transmettre deux ou trois photos des maquettes d’ici la fin de la semaine, pour la mise en page. Si cela vous pose un problème, n’hésitez pas à me le dire. Je reste joignable tout l’après-midi. Merci encore pour ce beau travail, et bonne fin de journée. »';

/** The task's document: Hélène's message, printed in the brief (no
 *  `source` field on `task`, shapes doc §1.4). */
export const TASK_DOC =
  'MESSAGE D’HÉLÈNE MARCHAND, directrice. Objet : la soirée d’ouverture. Bonjour à tous, voici mon projet pour l’ouverture de « Rivières sous la ville », le vendredi 12 mai. 1. Nous invitons 250 personnes dans la salle principale. 2. Discours de bienvenue de vingt minutes, puis visite libre. 3. Pour alléger le week-end, nous supprimons la visite réservée aux écoles le samedi matin. 4. Le budget du buffet passe de 2 000 à 4 000 dollars. J’aimerais vos réactions avant mercredi. Hélène';

/** What the learner knows and Hélène’s message does not say. */
export const TASK_FACTS =
  'Ce que tu sais : selon les normes de sécurité, la salle principale accueille au maximum 180 personnes ; trois écoles ont déjà réservé la visite du samedi ; il te faut la signature d’Hélène sur le formulaire d’assurance des maquettes avant jeudi.';

/** The annotated model answer to the task, about two and a half minutes. */
export const TASK_MODEL =
  'Bonjour Hélène, c’est moi, au sujet de votre message sur la soirée d’ouverture. Merci de nous consulter. Le programme me plaît beaucoup, et l’idée d’une visite libre après le discours est excellente : les invités verront l’exposition à leur rythme.\n' +
  'J’ai un point ferme, et deux suggestions. Le point ferme d’abord. La capacité de la salle, elle, ne se discute pas : cent quatre-vingts personnes, selon les normes de sécurité. Le chiffre de deux cent cinquante doit venir de l’ancienne salle. Il faudrait donc réduire la liste, ou ouvrir la petite salle en même temps, avec un écran pour le discours ; une deuxième séance, à vingt heures, serait aussi possible. Je peux vous préparer les deux options pour lundi.\n' +
  'Première suggestion, sur les écoles. Trois classes ont déjà réservé le samedi matin. Je me demande si nous ne gagnerions pas à garder la visite des écoles, quitte à la raccourcir. Annuler maintenant risquerait, me semble-t-il, de nous fâcher avec des enseignants qui viennent chaque année. Une visite d’une heure, à onze heures, laisserait l’après-midi libre à l’équipe, et je peux m’en charger.\n' +
  'Deuxième suggestion, plus modeste : le discours. Vingt minutes debout, c’est un peu long, disons. Dix minutes suffiraient sans doute, et la visite commencerait plus tôt. Quant au buffet, il y a fort à parier qu’avec moins d’invités, le budget actuel suffira ; je ne doublerais donc pas la somme tout de suite.\n' +
  'Enfin, une demande : je vous saurais gré de signer le formulaire d’assurance des maquettes avant jeudi ; je le dépose sur votre bureau ce soir.\n' +
  'Si vous le souhaitez, nous pouvons en parler demain matin. Bonne fin de journée, Hélène.';
