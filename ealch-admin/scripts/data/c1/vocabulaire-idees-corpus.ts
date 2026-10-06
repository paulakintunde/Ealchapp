// c1.12.l1 « Le vocabulaire des idées » — the authored corpus, the imports,
// the texts and the citation constants. DRAFT, to B1-WORKSHOP-AND-VOCAB-SHAPES.md
// §2 (THE VOCAB SHAPE: families and collocations in use, never isolated nouns)
// on top of B1-BUILD-PLAYBOOK.md, with the C1 rules of C1-BUILD-LOG.md (« What
// is different at C1 », wave 4). Structural model: b2.27 « Le langage
// juridique et administratif » (`../b2/langage-juridique-*`), the B2 vocabulary
// lesson; C1 voice and Postgres-only rows as c1.08 (`./persuader-*`).
//
// DRAFT. Nothing here is imported into Postgres or merged into seed.json.
//
// STABLE EXPORTS (c1.15 and c1.16, the two other abstract-vocabulary lessons,
// may import REFRAME from this file and quote it; do not rename): REFRAME,
// REFRAME_EN, UNIT, LESSON_ID, THEME, LEVEL, E, PH, ALL_ROWS, ROWS_BY_ACT,
// IMPORTED, IMPORT_IDS, PG_ROWS, Cap, refFr.
//
// ══════════════════════════════════════════════════════════════════════════
//  WHAT THIS UNIT OWNS: lesson 12 of the C1 trail
// ══════════════════════════════════════════════════════════════════════════
//
//   THE EPISTEMIC AND LOGICAL PAIRS (wave 4 brief, research plan « Ownership
//   to settle »): the words with which an educated speaker talks ABOUT ideas,
//   each taught against its neighbour, with its collocations, never as a
//   bare noun and never by name-dropping.
//
//     act 1   le mot juste: a café-philo evening where « expliquer » is heard
//             as « justifier »; recap of b2.22, b2.23, b2.10 and c1.08 by
//             trail position, their rows reused by id
//     act 2   expliquer / justifier (rendre compte de, se justifier, the
//             administrative « justifier une absence »)
//     act 3   la cause / la raison / le motif / le prétexte (la raison pour
//             laquelle; « une cause » that one defends)
//     act 4   croire / savoir / connaître: croyance, connaissance, conviction,
//             certitude; à ma connaissance, en connaissance de cause, faire
//             la connaissance de
//     act 5   le nécessaire / le contingent / le fortuit / l’inévitable; the
//             everyday « nécessaire »; « contingent on » is « dépendre de »
//     act 6   condition nécessaire / condition suffisante; si et seulement
//             si; sine qua non; il ne suffit pas de… encore faut-il
//     act 7   prémisse / conclusion; valide / vrai; partir du principe que,
//             il s’ensuit que, conclure que / conclure à, découler de
//     act 8   le sophisme and its cousins: paralogisme, pétition de principe,
//             cercle vicieux, tautologie, contradiction, la faille
//     act 9   a priori / a posteriori, in philosophy and in everyday French
//             (à première vue; un a priori, invariable)
//     act 10  définir et distinguer: établir une distinction, distinguer A de
//             B, confondre A et B, au sens strict / large, par définition,
//             relever de, opposer A à B
//     act 11  prouver / démontrer / confirmer / infirmer / corroborer /
//             réfuter / nier / démentir; une évidence is not « evidence »
//     act 12  the task: a reply to a blog message that confuses the pairs
//
//   BUILT ON, NEVER RE-TAUGHT (cited by trail position, rows reused by id):
//     la leçon 22 du B2  style académique: « jamais plus sûr que tes
//                        preuves » (row universite .1076)
//     la leçon 23 du B2  argumenter: « un sophisme » and the six fallacies
//                        (rows opinions-et-avis .1611 .1770 .1775). Act 8
//                        goes PAST them (paralogisme, pétition de principe,
//                        cercle vicieux) and never re-lists the six.
//     la leçon 10 du B2  la nominalisation, -ité nouns (row langue-soignee
//                        .1471); the -ité / -isme headwords here are the
//                        b2 philosophie bank's, reused as known
//     la leçon 24 du B2  « une corrélation, pas une causalité » (row
//                        strategies-de-comprehension .1438), applied in act 3
//     la leçon 6 du C1   « à ma connaissance » (row nuances-et-registres
//                        .1015), cited in act 4 as the limit of what you know
//     la leçon 8 du C1   déduction / induction and the declared hypothesis
//                        (row rhetorique .1035): cited in acts 1 and 7, never
//                        re-taught
//
//   LEFT TO OTHER LESSONS (never taught here):
//     c1.15  political and social headwords (justice, liberté, identité,
//            pouvoir); c1.16 moral, aesthetic and memorial ones (morale /
//            éthique, vérité / véracité, le beau). « La vérité » and « la
//            morale » appear here only as plain words inside examples.
//     c1.10  the dissertation: defining the terms of a sujet, the
//            problématique, plans. Act 10 teaches the VERBS of distinction
//            (distinguer, confondre, au sens strict), not essay method.
//     c1.18  high-level false friends as a system. Act 11 carries ONE trap
//            the field cannot do without (une évidence / evidence), flagged
//            for Paul.
//     c1.20  présupposé / sous-entendu (never used here).
//
// ══════════════════════════════════════════════════════════════════════════
//  §A. MEASURED (Postgres read 2026-10-06 inside BEGIN TRANSACTION READ ONLY
//      … COMMIT, no SET; the local seed is a cut)
// ══════════════════════════════════════════════════════════════════════════
//
//  1. THEME `philosophie` (« La philosophie », domain concepts, b2-c1, exam
//     flag). Sub-theme « les concepts et leurs distinctions » set at the wave
//     4 setup and read back. 330 rows, all published: b2 .001-.320, c1
//     .001-.010. seedPlusPacks() holds only c1 .001-.006.
//
//  2. ID BLOCK: `fr.c1.philosophie.1000` to `.1199` and nothing else
//     (ledger). Re-probed 2026-10-06: 0 rows in 1000-1199 at any level.
//     Authored: `.1000`-`.1145`, 146 rows in twelve act blocks (§G).
//
//  3. THE B2 BANK. About 320 b2 philosophie rows were never taught by any
//     lesson (only .084, .136 and .174 are reused, by c1.20). This lesson
//     reuses 40 of them BY ID as known words and sentences, and teaches
//     their collocations and contrasts. ALL 40 ARE ABSENT FROM THE SEED CUT,
//     as is fr.b2.decouvertes.181 « tirer une conclusion » (reused instead
//     of an authored twin, §A.6): 41 rows in all, whose
//     fr / en / drills are copied VERBATIM into `PG_ROWS` (generated
//     from the Postgres read, not retyped), so `src()` can print them; the
//     merge must carry them into the seed and the gate preview needs them.
//     The other 9 reused rows (b2.22, b2.23, b2.10, b2.24, c1.06's « à ma
//     connaissance », c1.08, and fr.c1.philosophie.006 « la tautologie »)
//     are in seedPlusPacks().
//
//  4. ATTRIBUTIONS IN THE BANK, READ BEFORE REUSE. Rows naming a thinker in
//     their `fr` (.011 .013 .014 .016 .024 .027 .040 .043 .264, « Descartes,
//     Kant, Sartre, Platon, Aristote, Épicure, Nietzsche ») and rows whose
//     `example` names one (.049 Descartes, .055 Descartes, .060 Camus, .066
//     Sartre, .078 Zénon, .083 Aristote, .090 Kant, .096 Hobbes, .097
//     Schopenhauer, .113 Hegel, .121 Platon, .129 Kant, .142 Hume) are NOT
//     reused: the brief forbids name-dropping, and « la raison », « le
//     doute », « l’opinion » and « la causalité » are therefore not imported.
//     .284 « le doute est le commencement de la sagesse » (a line often
//     loosely given to Aristotle, unsourced) and .235 (Socrates, unnamed)
//     are not reused either. Every reused bank row was read in full,
//     example included: none names a person (.037 and .307 say « ce
//     philosophe », « le philosophe », unnamed).
//
//  5. TYPOGRAPHY OF THE REUSED POSTGRES ROWS (decision 13 pass at import,
//     straight ' to ’): PH .026 .101 .107 .115 .116 .123 .125 .128 .130 .133
//     .140 .202 .211 .225 .285 .286 .294 .307 .316 .319. ALSO (pre-review
//     2026-10-06): the Postgres `ipa` of .202, .225, .307 and .319 carries
//     the U+203F liaison tie, which renders as an underscore on the
//     Pixel 6: strip it in the same import pass. The seed rows
//     universite .1076 and the c1 bank row .006 are printed only through
//     `src()`, never inside the scenario.
//
//  6. NO AUTHORED ROW TWINS A PUBLISHED ROW. Every authored `fr`, folded
//     (accents, case, punctuation, apostrophes, spaces), was compared with
//     every Postgres row (scratch check `twins.mts`, 2026-10-06): 0 twins.
//     The first run found two (« à ma connaissance » = c1.06's
//     nuances-et-registres .1015; « tirer une conclusion » = b2 decouvertes
//     .181): both are now REUSED by id and the authored .1041 and .1077
//     became « avoir la certitude que » and « en conclure que ».
//     Bare headwords that the bank already holds are IMPORTED, never
//     re-authored (la cause, la croyance, la nécessité, la prémisse…); this
//     corpus authors collocations, families and sentences.
//
//  7. FACT CHECK LIST (for the pre-review). Every claim about the real world:
//       a. Sophisme / paralogisme: French dictionaries (Larousse, TLFi)
//          define the paralogisme as a faulty reasoning made in good faith
//          and the sophisme as one made to deceive (row .1093, act 8).
//       b. Pétition de principe: assuming as granted what is to be proved
//          (TLFi, Larousse) (rows .1090, .1094, act 8).
//       c. « Sine qua non »: Latin, « sans laquelle non », pronounced
//          [si.ne.kwa.nɔn] (row .1066).
//       d. A priori / a posteriori: in philosophy, independent of / derived
//          from experience; in everyday French « a priori » also means « à
//          première vue », and the noun « un a priori » (invariable) means a
//          preconception (Larousse, Le Robert). Spelling: traditional « a
//          priori » without accent. CHECKED 2026-10-06 (pre-review),
//          Académie 9e éd. « a priori », loc. adv.: sense 2 « au premier
//          abord » and « un a priori, des a priori » (subst. inv.); the 1990
//          rectifications give the noun as « apriori », pl. « aprioris »,
//          NOT « à priori » (also the Académie's list of recommended
//          spellings). « à priori » is the spelling of its 6e to 8e
//          editions. sheet-savoir corrected accordingly.
//       e. Cats cannot see in total darkness; they see well in low light
//          (act 4 text).
//       f. The tomato is botanically a fruit and treated as a vegetable in
//          cooking (row .1117).
//       g. « Réplique »: a copy of a work made by the artist or under the
//          artist's direction (Larousse) (act 10 text).
//       h. Valid vs true: a valid argument can have a false conclusion if a
//          premise is false; true premises and a valid form guarantee a true
//          conclusion (rows .1081, .1082, .1087). Standard logic.
//       i. « Confondre entre » is not standard; « distinguer entre A et B »
//          is (row .1122, act 10 commonErrors). Check against Larousse / BDL.
//       j. « Infirmer »: to show to be false, the opposite of confirmer
//          (also: to quash a judgment, in law); unrelated to « infirme »
//          (row .1125).
//       k. « Évidence » in French means obviousness; English « evidence »
//          is « des preuves, des éléments de preuve » (row .1135). Also in
//          every list of faux amis (OQLF BDL « évidence »).
//       l. « Le point d’ébullition de l’eau » known a posteriori (row .1107),
//          stated without a number.
//     QUOTATIONS: none. No line of Descartes, Pascal, Montaigne or Rousseau
//     is quoted; no thinker is named anywhere a learner reads. Every text is
//     « texte original écrit pour la leçon »; every person, venue, outlet,
//     town and figure is invented (§I).
//
//  8. RESPELLINGS SPELLED FOR THE NASAL CHECKER RATHER THAN THE EAR: a real
//     /n/ or /m/ after a vowel is written double: phénomène fay-no-MENN,
//     panne PANN, personne pehr-SONN, donne(s) DONN, raisonnement
//     reh-zonn-MAHⁿ, nomme NOMM, impressionnent preh-SYONN, sine qua non
//     kwa-NONN, bonne bonn. Every doubled consonant is really pronounced.
//     No U+203F tie anywhere.
//
//  9. APOSTROPHES: every authored French string uses the typographic ’, so
//     the scenario never mixes ’ and ' (the app check). Reused Postgres rows
//     keep their straight ' until the decision 13 pass.
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
  id: 'c1.12',
  seq: 12,
  title: 'The Vocabulary of Ideas',
  sub: 'Le vocabulaire des idées',
  canDo: 'Can define, distinguish and use the epistemic and logical pairs of abstract discussion (expliquer and justifier, cause and raison, croyance and connaissance, nécessaire and contingent, condition nécessaire and suffisante, prémisse and conclusion, valide and vrai, sophisme and paralogisme, a priori and a posteriori, confirmer, infirmer and réfuter) with their collocations, read them precisely in a text, and answer someone who confuses them',
  prereqUnitIds: ['b2.10', 'b2.22', 'b2.23', 'c1.08'],
} as const;

export const LESSON_ID = 'c1.12.l1';
export const THEME = 'philosophie';
export const LEVEL = 'c1' as const;

/** ONE block, by the brief (sub-theme « les concepts et leurs distinctions »). */
export const ID_RANGES = [[1000, 1199]] as const;

export const E = (n: number) => `fr.${LEVEL}.${THEME}.${String(n).padStart(3, '0')}`;

/** The b2 philosophie bank: published, never taught, reused by id. */
export const PH = (n: number) => `fr.b2.philosophie.${String(n).padStart(3, '0')}`;

/* ══════════════════════════════════════════════════════════════════════════
 *  §C. HOW THIS LESSON NAMES ITS NEIGHBOURS
 *
 *  By trail position, in words, read from the seed units. A C1 surface is
 *  French: never a raw id on screen, always « la leçon N du B2 / C1 ».
 * ══════════════════════════════════════════════════════════════════════════ */

type SeedUnit = { id: string; seq: number | string };
const SEQ = new Map((seed.units as unknown as SeedUnit[]).map((u) => [u.id, Number(u.seq)]));

export function refFr(unitId: string): string {
  const band = unitId.slice(0, 2);
  const n = SEQ.get(unitId);
  if (n) return `la leçon ${n} du ${band.toUpperCase()}`;
  if (band === 'b1' || band === 'b2' || band === 'c1') throw new Error(`c1.12: ${unitId} is not in the seed`);
  return unitRef(unitId);
}

export const NOMINAL_UNIT = 'b2.10';
export const ACADEMIQUE_UNIT = 'b2.22';
export const ARGU_UNIT = 'b2.23';
export const CRITIQUE_UNIT = 'b2.24';
export const PERSUADER_UNIT = 'c1.08';
export const NUANCER_UNIT = 'c1.06';

export const NOMINAL_REF = refFr(NOMINAL_UNIT);         // la leçon 10 du B2
export const ACADEMIQUE_REF = refFr(ACADEMIQUE_UNIT);   // la leçon 22 du B2
export const ARGU_REF = refFr(ARGU_UNIT);               // la leçon 23 du B2
export const CRITIQUE_REF = refFr(CRITIQUE_UNIT);       // la leçon 24 du B2
export const PERSUADER_REF = refFr(PERSUADER_UNIT);     // la leçon 8 du C1
export const NUANCER_REF = refFr(NUANCER_UNIT);         // la leçon 6 du C1

/** The next lesson on the trail (c1.13, written in the same wave). Not in the
 *  seed yet, so typed from the plan. TODO(import): drop if c1.13 slips. */
export const NEXT_REF_PLANNED = 'la leçon 13 du C1';

/* ══════════════════════════════════════════════════════════════════════════
 *  §D. THE QUOTATIONS, IMPORTED (never retyped)
 * ══════════════════════════════════════════════════════════════════════════ */

export { REFRAME as B210_REFRAME, REFRAME_EN as B210_REFRAME_EN } from '../b2/nominalisation-corpus.ts';
export { REFRAME as B222_REFRAME, REFRAME_EN as B222_REFRAME_EN } from '../b2/style-academique-corpus.ts';
export { REFRAME as B223_REFRAME, REFRAME_EN as B223_REFRAME_EN } from '../b2/argumentation-corpus.ts';
export { REFRAME as B224_REFRAME, REFRAME_EN as B224_REFRAME_EN } from '../b2/lecture-critique-corpus.ts';
export { REFRAME as C108_REFRAME, REFRAME_EN as C108_REFRAME_EN } from './persuader-corpus.ts';

/* ══════════════════════════════════════════════════════════════════════════
 *  §E. THE REFRAME AND THE ONE METAPHOR
 *
 *  LA PAIRE. Two objects that look the same and differ by one decisive
 *  feature: two keys whose teeth differ by one notch, two glasses filled to
 *  different marks. Choosing the right word for an idea is finding that
 *  notch. Every act holds one pair (expliquer / justifier, cause / raison,
 *  croire / savoir…) and names what separates them; the task asks the
 *  learner to name it for someone else.
 *
 *  It is NOT « the learned word is more precise »: act 9 shows « a priori »
 *  meaning « à première vue » in an ordinary email, and act 5 the everyday
 *  « nécessaire ». And it is NOT « learn definitions »: a definition without
 *  its neighbour does not tell you which word to choose.
 * ══════════════════════════════════════════════════════════════════════════ */

export const REFRAME = 'Deux mots voisins, deux idées : nomme ce qui les sépare.';
export const REFRAME_EN = 'Two neighbouring words, two ideas: name what separates them.';

export const REFRAME_REJECTED: readonly { text: string; why: string }[] = [
  {
    text: 'Les philosophes parlent une langue à part.',
    why: 'False where the lesson has to hold: every pair here turns up in a newspaper, a work email or an exam text (act 9’s « a priori » is in an email about a meeting). It would also tell the learner the vocabulary is optional.',
  },
  {
    text: 'Apprends la définition de chaque mot.',
    why: 'Necessary and not sufficient, which is act 6’s own point: a learner who can define « cause » and « raison » separately still writes « elle a ses causes » for a person’s motives. The choice comes from the contrast, not the definition.',
  },
  {
    text: 'Le mot savant est toujours le plus précis.',
    why: 'False: « a priori » in an email means « in principle », « nécessaire » on a restaurant door means « needed », and « paralogisme » is often less useful than « une erreur de raisonnement » because intent cannot be proved (act 8).',
  },
  {
    text: 'Expliquer n’est pas justifier.',
    why: 'True, and only one pair: it is act 2’s rule card (row .1023), not the lesson’s line. It says nothing about croire / savoir or nécessaire / suffisant.',
  },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §F. THE IMPORTS, BY ACT
 *
 *  Every id was read from Postgres on 2026-10-06 and, where present, from
 *  seedPlusPacks(); its French is in the trailing comment. `PG` marks a row
 *  absent from the seed cut, carried in PG_ROWS.
 * ══════════════════════════════════════════════════════════════════════════ */

export const IMPORTED = {
  act1: [
    'fr.b2.universite.1076',                    // Nuancer, ce n'est pas douter : c'est dire jusqu'où va ta preuve.  (b2.22, flashcard only)
    'fr.b2.opinions-et-avis.1611',              // Une opinion dit ce que tu penses ; un argument dit pourquoi.  (b2.23, flashcard only)
    'fr.b2.opinions-et-avis.1770',              // un sophisme  (b2.23)
    'fr.b2.langue-soignee.1471',                // rapide, la rapidité  (b2.10)
    'fr.c1.rhetorique.1035',                    // Une déduction va de la règle au cas ; une induction, des cas à la règle.  (c1.08, flashcard only)
    PH(37),                                     // Ce philosophe distingue soigneusement le savoir de la simple croyance.  (PG)
  ],
  act2: [
    PH(211),                                    // Avant d'accepter une opinion comme vraie, encore faudrait-il se demander sur quels fondements elle repose.  (PG)
  ],
  act3: [
    PH(139),                                    // la cause  (PG)
    PH(140),                                    // l'effet  (PG)
    PH(141),                                    // la finalité  (PG, voiceflash only)
    'fr.b2.strategies-de-comprehension.1438',   // une corrélation, pas une causalité  (b2.24)
    'fr.b2.opinions-et-avis.1775',              // Deux faits qui se suivent ne sont pas forcément une cause et son effet.  (b2.23, flashcard only)
  ],
  act4: [
    PH(120),                                    // la croyance  (PG)
    PH(57),                                     // la connaissance  (PG)
    PH(56),                                     // la certitude  (PG)
    PH(123),                                    // l'intuition  (PG)
    'fr.c1.nuances-et-registres.1015',          // à ma connaissance  (c1.06)
    PH(316),                                    // Ce que l'on croit savoir avec certitude mérite parfois d'être réexaminé.  (PG)
  ],
  act5: [
    PH(63),                                     // la nécessité  (PG)
    PH(64),                                     // la contingence  (PG)
    PH(62),                                     // le hasard  (PG)
    PH(72),                                     // le déterminisme  (PG)
    PH(61),                                     // le destin  (PG)
  ],
  act6: [
    PH(225),                                    // Pour bien argumenter, il ne suffit pas d'avoir raison, il faut encore savoir convaincre son interlocuteur.  (PG)
    PH(202),                                    // Pour qu'une société soit juste, il ne suffit pas que les lois soient égales, encore faut-il qu'elles soient appliquées équitablement.  (PG)
  ],
  act7: [
    PH(102),                                    // la prémisse  (PG)
    PH(103),                                    // la conclusion  (PG)
    'fr.b2.decouvertes.181',                    // tirer une conclusion  (PG, voiceflash only)
    PH(101),                                    // l'argument  (PG)
    PH(107),                                    // l'inférence  (PG)
    PH(114),                                    // le postulat  (PG)
    PH(115),                                    // l'axiome  (PG)
    PH(285),                                    // Cet argument repose sur une prémisse qu'on pourrait facilement contester.  (PG)
  ],
  act8: [
    PH(105),                                    // la contradiction  (PG)
    PH(106),                                    // la cohérence  (PG)
    'fr.c1.philosophie.006',                    // la tautologie  (seed, voiceflash only)
    PH(294),                                    // Ce raisonnement, bien qu'élégant, comporte une faille logique importante.  (PG)
    PH(26),                                     // Ce n'est pas parce qu'une idée est ancienne qu'elle est nécessairement fausse.  (PG)
  ],
  act9: [
    PH(130),                                    // l'empirisme  (PG)
    PH(131),                                    // le rationalisme  (PG)
    PH(128),                                    // l'apparence  (PG)
  ],
  act10: [
    PH(133),                                    // l'abstraction  (PG)
    PH(124),                                    // la subjectivité  (PG)
    PH(125),                                    // l'objectivité  (PG)
    PH(307),                                    // Le philosophe s'est efforcé de clarifier des concepts que d'autres jugeaient trop flous.  (PG)
  ],
  act11: [
    PH(108),                                    // la démonstration  (PG)
    PH(109),                                    // la réfutation  (PG)
    PH(116),                                    // l'hypothèse  (PG)
    PH(286),                                    // Rien ne prouve que nos souvenirs correspondent exactement à ce qui s'est passé.  (PG)
    PH(319),                                    // Il n'est pas certain que ce raisonnement résiste à un examen approfondi.  (PG)
  ],
  act12: [] as string[],
};

export const IMPORT_IDS = [...new Set(Object.values(IMPORTED).flat())];

/** Published in Postgres, absent from the local seed cut: fr / en / drills
 *  copied VERBATIM from the 2026-10-06 read (straight apostrophes kept: the
 *  decision 13 edit happens at import), so `src()` can print them. */
export const PG_ROWS: { id: string; fr: string; en: string; drills: string[] }[] = [
  { id: PH(37), fr: "Ce philosophe distingue soigneusement le savoir de la simple croyance.", en: "This philosopher carefully distinguishes knowledge from mere belief.", drills: ['sentence', 'dictation'] },
  { id: PH(211), fr: "Avant d'accepter une opinion comme vraie, encore faudrait-il se demander sur quels fondements elle repose.", en: "Before accepting an opinion as true, one would still need to ask what foundations it rests on.", drills: ['sentence', 'review'] },
  { id: PH(139), fr: "la cause", en: "the cause", drills: ['flashcard', 'review'] },
  { id: PH(140), fr: "l'effet", en: "the effect", drills: ['flashcard', 'review'] },
  { id: PH(141), fr: "la finalité", en: "finality / purpose", drills: ['voiceflash', 'review'] },
  { id: PH(120), fr: "la croyance", en: "the belief", drills: ['flashcard', 'review'] },
  { id: PH(57), fr: "la connaissance", en: "knowledge", drills: ['flashcard', 'voiceflash'] },
  { id: PH(56), fr: "la certitude", en: "certainty", drills: ['flashcard', 'voiceflash'] },
  { id: PH(123), fr: "l'intuition", en: "the intuition", drills: ['flashcard', 'review'] },
  { id: PH(316), fr: "Ce que l'on croit savoir avec certitude mérite parfois d'être réexaminé.", en: "What we think we know with certainty sometimes deserves to be reexamined.", drills: ['dictation'] },
  { id: PH(63), fr: "la nécessité", en: "necessity", drills: ['flashcard', 'voiceflash'] },
  { id: PH(64), fr: "la contingence", en: "contingency", drills: ['flashcard', 'voiceflash'] },
  { id: PH(62), fr: "le hasard", en: "chance, randomness", drills: ['flashcard', 'voiceflash'] },
  { id: PH(72), fr: "le déterminisme", en: "determinism", drills: ['flashcard', 'voiceflash'] },
  { id: PH(61), fr: "le destin", en: "destiny, fate", drills: ['flashcard', 'voiceflash'] },
  { id: PH(225), fr: "Pour bien argumenter, il ne suffit pas d'avoir raison, il faut encore savoir convaincre son interlocuteur.", en: "To argue well, it is not enough to be right, one must also know how to convince the other person.", drills: ['sentence', 'review'] },
  { id: PH(202), fr: "Pour qu'une société soit juste, il ne suffit pas que les lois soient égales, encore faut-il qu'elles soient appliquées équitablement.", en: "For a society to be just, it is not enough for laws to be equal, they must also be applied fairly.", drills: ['sentence', 'review'] },
  { id: PH(102), fr: "la prémisse", en: "the premise", drills: ['flashcard', 'review'] },
  { id: PH(103), fr: "la conclusion", en: "the conclusion", drills: ['flashcard', 'review'] },
  { id: 'fr.b2.decouvertes.181', fr: "tirer une conclusion", en: "to draw a conclusion", drills: ['voiceflash', 'review'] },
  { id: PH(101), fr: "l'argument", en: "the argument", drills: ['flashcard', 'review'] },
  { id: PH(107), fr: "l'inférence", en: "the inference", drills: ['flashcard', 'review'] },
  { id: PH(114), fr: "le postulat", en: "the postulate", drills: ['flashcard', 'review'] },
  { id: PH(115), fr: "l'axiome", en: "the axiom", drills: ['flashcard', 'review'] },
  { id: PH(285), fr: "Cet argument repose sur une prémisse qu'on pourrait facilement contester.", en: "This argument rests on a premise that could easily be contested.", drills: ['dictation'] },
  { id: PH(105), fr: "la contradiction", en: "the contradiction", drills: ['flashcard', 'review'] },
  { id: PH(106), fr: "la cohérence", en: "coherence", drills: ['flashcard', 'review'] },
  { id: PH(294), fr: "Ce raisonnement, bien qu'élégant, comporte une faille logique importante.", en: "This reasoning, though elegant, contains a significant logical flaw.", drills: ['dictation'] },
  { id: PH(26), fr: "Ce n'est pas parce qu'une idée est ancienne qu'elle est nécessairement fausse.", en: "It's not because an idea is old that it is necessarily false.", drills: ['sentence', 'dictation'] },
  { id: PH(130), fr: "l'empirisme", en: "empiricism", drills: ['flashcard', 'review'] },
  { id: PH(131), fr: "le rationalisme", en: "rationalism", drills: ['flashcard', 'review'] },
  { id: PH(128), fr: "l'apparence", en: "appearance", drills: ['flashcard', 'review'] },
  { id: PH(133), fr: "l'abstraction", en: "abstraction", drills: ['flashcard', 'review'] },
  { id: PH(124), fr: "la subjectivité", en: "subjectivity", drills: ['flashcard', 'review'] },
  { id: PH(125), fr: "l'objectivité", en: "objectivity", drills: ['flashcard', 'review'] },
  { id: PH(307), fr: "Le philosophe s'est efforcé de clarifier des concepts que d'autres jugeaient trop flous.", en: "The philosopher strove to clarify concepts that others found too vague.", drills: ['dictation'] },
  { id: PH(108), fr: "la démonstration", en: "the demonstration / proof", drills: ['flashcard', 'review'] },
  { id: PH(109), fr: "la réfutation", en: "the refutation", drills: ['flashcard', 'review'] },
  { id: PH(116), fr: "l'hypothèse", en: "the hypothesis", drills: ['flashcard', 'review'] },
  { id: PH(286), fr: "Rien ne prouve que nos souvenirs correspondent exactement à ce qui s'est passé.", en: "Nothing proves that our memories exactly match what actually happened.", drills: ['dictation'] },
  { id: PH(319), fr: "Il n'est pas certain que ce raisonnement résiste à un examen approfondi.", en: "It is not certain that this reasoning holds up under close examination.", drills: ['dictation'] },
];

const SEED_DRILLS = new Map((seed as unknown as { items: { id: string; drills?: string[] }[] }).items.map((i) => [i.id, i.drills ?? []]));
const drillsOf = (id: string): string[] => PG_ROWS.find((r) => r.id === id)?.drills ?? SEED_DRILLS.get(id) ?? [];

/** No `flashcard` drill: nameable, never releasable. Computed from the rows
 *  above and the seed, so it cannot drift from the drills read. */
export const NOT_DECK_ABLE: string[] = IMPORT_IDS.filter((id) => !drillsOf(id).includes('flashcard'));

/** No `voiceflash`: never in a `practice` speak section. */
export const NOT_SPEAKABLE: string[] = IMPORT_IDS.filter((id) => !drillsOf(id).includes('voiceflash'));

/* ══════════════════════════════════════════════════════════════════════════
 *  §G. THE AUTHORED ROWS, ONE BLOCK PER ACT
 *
 *  `col` a collocation (kind phrase: the word with what you do with it);
 *  `fam` a word family in one card; `sent` a sentence; `rule` a grammar card
 *  whose prompt is a question and whose `fr` is the act’s distinction. Every
 *  row carries fr, en, ipa and respell; corpus respellings carry no brackets.
 *  No wrong form is ever a row: the misused words live only in the scene’s
 *  choice, trapDrill.promptSound, commonErrors.wrong and quiz errorSpots.
 * ══════════════════════════════════════════════════════════════════════════ */

type Row = Item;

const FCVR = ['flashcard', 'voiceflash', 'review'] as Item['drills'];
const FCVDR = ['flashcard', 'voiceflash', 'dictation', 'review'] as Item['drills'];
const FC = ['flashcard', 'review'] as Item['drills'];

const C: Register = 'courant';
const SO = { register: 'soutenu' as Register };
const GP = ['vocabulaire-idees'];

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

/* ── ACT 1 · LE MOT JUSTE (.1000-.1011) ─────────────────────────────────── */

export const ACT1_ROWS: Row[] = [
  sent(1000, 'Arnaud explique ce mensonge ; il ne le justifie pas.', 'Arnaud is explaining this lie; he is not justifying it.',
    '/aʁ.no ɛks.plik sə mɑ̃.sɔ̃ʒ il nə lə ʒys.ti.fi pa/', 'ar-NOH eks-PLEEK suh mahⁿ-SOHⁿZH | eel nuh luh zhüs-tee-FEE PA', ['scene', 'expliquer'], FCVDR),
  sent(1001, 'Ce mensonge s’explique par la peur ; il ne se justifie pas pour autant.', 'This lie is explained by fear; that does not make it justified.',
    '/sə mɑ̃.sɔ̃ʒ sɛks.plik paʁ la pœʁ il nə sə ʒys.ti.fi pa puʁ o.tɑ̃/', 'suh mahⁿ-SOHⁿZH | sek-SPLEEK par la PUHR | eel nuh suh zhüs-tee-FEE pa poor oh-TAHⁿ', ['scene', 'expliquer']),
  sent(1002, 'Ce soir, la question est simple : peut-on tout expliquer ?', 'Tonight the question is simple: can everything be explained?',
    '/sə swaʁ la kɛs.tjɔ̃ ɛ sɛ̃pl pø.tɔ̃ tu.tɛks.pli.ke/', 'suh SWAR | la kes-TYOHⁿ eh SEHⁿPL | peu-TOHⁿ too-tek-splee-KAY', ['scene']),
  rule(1003, REFRAME, REFRAME_EN,
    '/dø mo vwa.zɛ̃ dø.zi.de nɔm sə ki le se.paʁ/', 'deu moh vwa-ZEHⁿ | deu-zee-DAY | NOMM suh kee lay say-PAR',
    'Deux mots se ressemblent. Que fais-tu avant de choisir ?',
    'Tu nommes ce qui les sépare : la question à laquelle chacun répond. Expliquer dit pourquoi c’est arrivé, justifier dit pourquoi c’était légitime. Le mot juste suit.',
    ['reframe', 'paire']),
  sent(1004, 'Comprendre une décision, ce n’est pas l’approuver.', 'Understanding a decision is not approving of it.',
    '/kɔ̃.pʁɑ̃dʁ yn de.si.zjɔ̃ sə nɛ pa la.pʁu.ve/', 'kohⁿ-PRAHⁿDR ün day-see-ZYOHⁿ | suh neh pa la-proo-VAY', ['expliquer'], FCVDR),
  sent(1005, 'Je ne dis pas qu’elle a eu raison, je dis pourquoi elle l’a fait.', 'I am not saying she was right; I am saying why she did it.',
    '/ʒə nə di pa kɛ.la.y ʁɛ.zɔ̃ ʒə di puʁ.kwa ɛl la fɛ/', 'zhuh nuh dee pa keh-la-ü reh-ZOHⁿ | zhuh dee poor-KWA el la FEH', ['scene', 'expliquer']),
  sent(1006, 'Tu confonds deux idées voisines.', 'You are mixing up two neighbouring ideas.',
    '/ty kɔ̃.fɔ̃ dø.zi.de vwa.zin/', 'tü kohⁿ-FOHⁿ | deu-zee-day vwa-ZEEN', ['paire']),
  sent(1007, 'Quelle différence fais-tu entre les deux ?', 'What difference do you draw between the two?',
    '/kɛl di.fe.ʁɑ̃s fɛ.ty ɑ̃.tʁə le dø/', 'kel dee-fay-RAHⁿSS | feh-TÜ | ahⁿ-truh lay DEU', ['paire']),
  sent(1008, 'Les deux mots se ressemblent, mais ils ne disent pas la même chose.', 'The two words look alike, but they do not say the same thing.',
    '/le dø mo sə ʁə.sɑ̃bl mɛ il nə diz pa la mɛm ʃoz/', 'lay deu MOH | suh ruh-SAHⁿBL | meh eel nuh deez pa la mem SHOHZ', ['paire']),
  sent(1009, 'Sur ce point, il faut distinguer deux questions.', 'On this point, we need to separate two questions.',
    '/syʁ sə pwɛ̃ il fo dis.tɛ̃.ɡe dø kɛs.tjɔ̃/', 'sür suh PWEHⁿ | eel foh dees-tehⁿ-GAY deu kes-TYOHⁿ', ['paire'], FCVDR),
  sent(1010, 'Tout dépend du sens que tu donnes à ce mot.', 'It all depends on the meaning you give this word.',
    '/tu de.pɑ̃ dy sɑ̃s kə ty dɔn a sə mo/', 'too day-PAHⁿ | dü SAHⁿSS | kuh tü DONN a suh MOH', ['paire']),
  sent(1011, 'Voilà la distinction qui fait avancer le débat.', 'That is the distinction that moves the debate forward.',
    '/vwa.la la dis.tɛ̃k.sjɔ̃ ki fɛ a.vɑ̃.se lə de.ba/', 'vwa-LA la dees-tehⁿk-SYOHⁿ | kee feh a-vahⁿ-SAY luh day-BA', ['paire']),
];

/* ── ACT 2 · EXPLIQUER N’EST PAS JUSTIFIER (.1012-.1025) ───────────────── */

export const ACT2_ROWS: Row[] = [
  col(1012, 'expliquer un phénomène', 'to explain a phenomenon', '/ɛks.pli.ke œ̃ fe.nɔ.mɛn/', 'eks-plee-KAY uhⁿ fay-no-MENN', ['expliquer'],
    'Expliquer : dire pourquoi c’est arrivé, par quelles causes. On explique un phénomène, un résultat, un comportement.'),
  col(1013, 'justifier une décision', 'to justify a decision', '/ʒys.ti.fje yn de.si.zjɔ̃/', 'zhüs-tee-FYAY ün day-see-ZYOHⁿ', ['expliquer'],
    'Justifier : montrer qu’une chose était légitime, défendable. On justifie un choix, une dépense, une décision.'),
  col(1014, 'rendre compte d’un fait', 'to account for a fact', '/ʁɑ̃dʁ kɔ̃t dœ̃ fɛ/', 'rahⁿdr kohⁿt duhⁿ FEH', ['expliquer'],
    'Soutenu : une théorie rend compte des faits quand elle les explique. Rendre compte à quelqu’un, c’est lui faire un rapport.', SO),
  fam(1015, 'expliquer, une explication, explicable, inexplicable', 'to explain, an explanation, explicable, inexplicable',
    '/ɛks.pli.ke yn ɛks.pli.ka.sjɔ̃ ɛks.pli.kabl i.nɛks.pli.kabl/', 'eks-plee-KAY, ün eks-plee-ka-SYOHⁿ, eks-plee-KABL, ee-nek-splee-KABL', ['expliquer'],
    'Un geste inexplicable : on n’en voit pas la cause.'),
  fam(1016, 'justifier, une justification, justifiable, injustifiable', 'to justify, a justification, justifiable, unjustifiable',
    '/ʒys.ti.fje yn ʒys.ti.fi.ka.sjɔ̃ ʒys.ti.fjabl ɛ̃.ʒys.ti.fjabl/', 'zhüs-tee-FYAY, ün zhüs-tee-fee-ka-SYOHⁿ, zhüs-tee-FYABL, ehⁿ-zhüs-tee-FYABL', ['expliquer'],
    'Un retard injustifiable : rien ne le rend légitime. Il peut pourtant être très explicable.'),
  sent(1017, 'La hausse des prix explique la baisse des ventes.', 'The rise in prices explains the fall in sales.',
    '/la os de pʁi ɛks.plik la bɛs de vɑ̃t/', 'la OHSS day PREE | eks-PLEEK | la BESS day VAHⁿT', ['expliquer'], FCVDR),
  sent(1018, 'Rien ne justifie qu’on parle ainsi à un collègue.', 'Nothing justifies speaking to a colleague like that.',
    '/ʁjɛ̃ nə ʒys.ti.fi kɔ̃ paʁl ɛ̃.si a œ̃ kɔ.lɛɡ/', 'ryehⁿ nuh zhüs-tee-FEE | kohⁿ parl ehⁿ-SEE | a uhⁿ ko-LEG', ['expliquer']),
  sent(1019, 'Son absence est explicable ; elle n’est pas pour autant justifiée.', 'His absence can be explained; that does not make it justified.',
    '/sɔ̃.nap.sɑ̃s ɛ.tɛks.pli.kabl ɛl nɛ pa puʁ o.tɑ̃ ʒys.ti.fje/', 'sohⁿ-nap-SAHⁿSS | eh-tek-splee-KABL | el neh pa poor oh-TAHⁿ zhüs-tee-FYAY', ['expliquer']),
  sent(1020, 'Expliquer un geste, ce n’est pas l’excuser.', 'Explaining an act is not excusing it.',
    '/ɛks.pli.ke œ̃ ʒɛst sə nɛ pa lɛks.ky.ze/', 'eks-plee-KAY uhⁿ ZHEST | suh neh pa lek-skü-ZAY', ['expliquer'], FCVDR),
  sent(1021, 'Elle a dû se justifier devant toute l’équipe.', 'She had to justify herself in front of the whole team.',
    '/ɛl a dy sə ʒys.ti.fje də.vɑ̃ tut le.kip/', 'el a DÜ suh zhüs-tee-FYAY | duh-vahⁿ toot lay-KEEP', ['expliquer']),
  sent(1022, 'Cette théorie rend compte de la plupart des cas observés.', 'This theory accounts for most of the cases observed.',
    '/sɛt te.ɔ.ʁi ʁɑ̃ kɔ̃t də la ply.paʁ de ka ɔp.sɛʁ.ve/', 'set tay-o-REE | rahⁿ KOHⁿT | duh la plü-PAR day KA op-sehr-VAY', ['expliquer'], FCVR, SO),
  rule(1023, 'Expliquer dit pourquoi c’est arrivé ; justifier dit pourquoi c’était légitime.', 'Explaining says why it happened; justifying says why it was legitimate.',
    '/ɛks.pli.ke di puʁ.kwa sɛ.ta.ʁi.ve ʒys.ti.fje di puʁ.kwa se.tɛ le.ʒi.tim/', 'eks-plee-KAY dee poor-KWA seh-ta-ree-VAY | zhüs-tee-FYAY dee poor-KWA say-teh lay-zhee-TEEM',
    'Expliquer, justifier : à quelle question chacun répond-il ?',
    'Expliquer cherche les causes ; justifier cherche une raison qui rend le geste acceptable. On peut expliquer sans justifier.',
    ['expliquer']),
  sent(1024, 'Tu dois justifier ton absence par un certificat.', 'You have to support your absence with a certificate.',
    '/ty dwa ʒys.ti.fje tɔ̃.nap.sɑ̃s paʁ œ̃ sɛʁ.ti.fi.ka/', 'tü dwa zhüs-tee-FYAY | tohⁿ-nap-SAHⁿSS | par uhⁿ sehr-tee-fee-KA', ['expliquer']),
  sent(1025, 'Ce choix, je peux te l’expliquer, sans te demander de l’approuver.', 'I can explain this choice to you without asking you to approve of it.',
    '/sə ʃwa ʒə pø tə lɛks.pli.ke sɑ̃ tə də.mɑ̃.de də la.pʁu.ve/', 'suh SHWA | zhuh peu tuh lek-splee-KAY | sahⁿ tuh duh-mahⁿ-DAY duh la-proo-VAY', ['expliquer']),
];

/* ── ACT 3 · LA CAUSE ET LA RAISON (.1026-.1038) ────────────────────────── */

export const ACT3_ROWS: Row[] = [
  col(1026, 'chercher la cause d’une panne', 'to look for the cause of a breakdown', '/ʃɛʁ.ʃe la koz dyn pan/', 'shehr-SHAY la KOHZ | dün PANN', ['cause'],
    'La cause : ce qui produit un fait. Une panne, un incendie, une maladie ont des causes.'),
  col(1027, 'avoir ses raisons', 'to have one’s reasons', '/a.vwaʁ se ʁɛ.zɔ̃/', 'a-vwar say reh-ZOHⁿ', ['cause'],
    'Une raison : ce qu’une personne donne, ou pourrait donner, pour justifier son choix.'),
  col(1028, 'le motif d’un départ', 'the motive for leaving', '/lə mɔ.tif dœ̃ de.paʁ/', 'luh mo-TEEF | duhⁿ day-PAR', ['cause'],
    'Le motif : la raison d’agir, souvent dans un dossier : le motif d’une visite, d’une démission, d’un refus.'),
  col(1029, 'un simple prétexte', 'a mere pretext', '/œ̃ sɛ̃pl pʁe.tɛkst/', 'uhⁿ sehⁿpl pray-TEKST', ['cause'],
    'Un prétexte : une raison donnée à la place de la vraie.'),
  sent(1030, 'La cause de l’incendie reste inconnue.', 'The cause of the fire remains unknown.',
    '/la koz də lɛ̃.sɑ̃.di ʁɛst ɛ̃.kɔ.ny/', 'la KOHZ duh lehⁿ-sahⁿ-DEE | rest ehⁿ-ko-NÜ', ['cause'], FCVDR),
  sent(1031, 'Elle a ses raisons, même si elle ne les dit pas.', 'She has her reasons, even if she does not say what they are.',
    '/ɛl a se ʁɛ.zɔ̃ mɛm si ɛl nə le di pa/', 'el a say reh-ZOHⁿ | mem see el nuh lay dee PA', ['cause']),
  sent(1032, 'Quel est le motif de votre visite ?', 'What is the reason for your visit?',
    '/kɛ.lɛ lə mɔ.tif də vɔtʁ vi.zit/', 'keh-leh luh mo-TEEF | duh votr vee-ZEET', ['cause']),
  sent(1033, 'La pluie n’a été qu’un prétexte pour annuler la sortie.', 'The rain was only a pretext for cancelling the outing.',
    '/la plɥi na e.te kœ̃ pʁe.tɛkst puʁ a.ny.le la sɔʁ.ti/', 'la PLWEE | na ay-TAY kuhⁿ pray-TEKST | poor a-nü-LAY la sor-TEE', ['cause']),
  sent(1034, 'La raison pour laquelle il est parti nous échappe encore.', 'The reason why he left still escapes us.',
    '/la ʁɛ.zɔ̃ puʁ la.kɛl i.lɛ paʁ.ti nu.ze.ʃa.pɑ̃.kɔʁ/', 'la reh-ZOHⁿ poor la-KEL | ee-leh par-TEE | noo-zay-sha-pahⁿ-KOR', ['cause'], FCVDR),
  rule(1035, 'Une cause produit un effet ; une raison justifie un choix.', 'A cause produces an effect; a reason justifies a choice.',
    '/yn koz pʁɔ.dɥi œ̃.ne.fɛ yn ʁɛ.zɔ̃ ʒys.ti.fi œ̃ ʃwa/', 'ün KOHZ pro-DWEE | uhⁿ-nay-FEH | ün reh-ZOHⁿ zhüs-tee-FEE | uhⁿ SHWA',
    'Cause ou raison : laquelle produit, laquelle justifie ?',
    'Dans une analyse, une personne a des raisons et un phénomène a des causes : le verglas est la cause d’un accident. Dans la conversation, « la raison de l’accident » se dit aussi ; le mot précis reste cause.',
    ['cause']),
  sent(1036, 'Le verglas a causé l’accident.', 'Black ice caused the accident.',
    '/lə vɛʁ.ɡla a ko.ze lak.si.dɑ̃/', 'luh vehr-GLA | a koh-ZAY lak-see-DAHⁿ', ['cause']),
  sent(1037, 'Il s’est battu toute sa vie pour cette cause.', 'He fought all his life for this cause.',
    '/il sɛ ba.ty tut sa vi puʁ sɛt koz/', 'eel seh ba-TÜ | toot sa VEE | poor set KOHZ', ['cause']),
  sent(1038, 'Les deux phénomènes vont ensemble, mais l’un n’est pas la cause de l’autre.', 'The two phenomena go together, but one is not the cause of the other.',
    '/le dø fe.nɔ.mɛn vɔ̃.tɑ̃.sɑ̃bl mɛ lœ̃ nɛ pa la koz də lotʁ/', 'lay deu fay-no-MENN | vohⁿ-tahⁿ-SAHⁿBL | meh LUHⁿ neh pa la KOHZ duh LOHTR', ['cause']),
];

/* ── ACT 4 · CROIRE, SAVOIR, CONNAÎTRE (.1039-.1051) ────────────────────── */

export const ACT4_ROWS: Row[] = [
  col(1039, 'une croyance infondée', 'an unfounded belief', '/yn kʁwa.jɑ̃s ɛ̃.fɔ̃.de/', 'ün krwa-YAHⁿSS ehⁿ-fohⁿ-DAY', ['croyance'],
    'Infondée : sans fondement, sans raison solide. Une croyance peut être sincère et fausse.'),
  col(1040, 'agir en connaissance de cause', 'to act with full knowledge of the facts', '/a.ʒiʁ ɑ̃ kɔ.nɛ.sɑ̃s də koz/', 'a-ZHEER | ahⁿ ko-neh-SAHⁿSS duh KOHZ', ['croyance'],
    'En connaissance de cause : en sachant ce qu’on fait et ce que cela implique.'),
  col(1041, 'avoir la certitude que', 'to be certain that', '/a.vwaʁ la sɛʁ.ti.tyd kə/', 'a-vwar la sehr-tee-TÜD kuh', ['croyance'],
    'Avoir la certitude que + indicatif : être sûr. La certitude est un état de l’esprit ; elle ne garantit pas la vérité.'),
  col(1042, 'une conviction profonde', 'a deep conviction', '/yn kɔ̃.vik.sjɔ̃ pʁɔ.fɔ̃d/', 'ün kohⁿ-veek-SYOHⁿ pro-FOHⁿD', ['croyance'],
    'Une conviction : ce dont on est persuadé. Elle dit ta certitude, pas la vérité.'),
  sent(1043, 'Je crois qu’il viendra, mais je n’en sais rien.', 'I believe he will come, but I do not actually know.',
    '/ʒə kʁwa kil vjɛ̃.dʁa mɛ ʒə nɑ̃ sɛ ʁjɛ̃/', 'zhuh KRWA keel vyehⁿ-DRA | meh zhuh nahⁿ seh RYEHⁿ', ['croyance'], FCVDR),
  rule(1044, 'On peut croire le faux ; on ne sait que le vrai.', 'You can believe what is false; you can only know what is true.',
    '/ɔ̃ pø kʁwaʁ lə fo ɔ̃ nə sɛ kə lə vʁɛ/', 'ohⁿ peu KRWAR luh FOH | ohⁿ nuh seh kuh luh VREH',
    'Peut-on savoir une chose fausse ?',
    'Non : si c’est faux, tu le croyais, tu ne le savais pas. Savoir suppose que c’est vrai, et que tu as de quoi le montrer.',
    ['croyance']),
  sent(1045, 'Elle était persuadée d’avoir raison, et elle se trompait.', 'She was convinced she was right, and she was wrong.',
    '/ɛ.le.tɛ pɛʁ.sɥa.de da.vwaʁ ʁɛ.zɔ̃ e ɛl sə tʁɔ̃.pɛ/', 'eh-lay-TEH pehr-swa-DAY | da-vwar reh-ZOHⁿ | ay el suh trohⁿ-PEH', ['croyance']),
  sent(1046, 'Une croyance vraie n’est pas encore une connaissance.', 'A true belief is not yet knowledge.',
    '/yn kʁwa.jɑ̃s vʁɛ nɛ pa.zɑ̃.kɔʁ yn kɔ.nɛ.sɑ̃s/', 'ün krwa-yahⁿss VREH | neh pa-zahⁿ-KOR | ün ko-neh-SAHⁿSS', ['croyance'], FCVDR),
  sent(1047, 'Il a signé en connaissance de cause.', 'He signed knowing exactly what he was doing.',
    '/i.la si.ɲe ɑ̃ kɔ.nɛ.sɑ̃s də koz/', 'ee-la see-NYAY | ahⁿ ko-neh-SAHⁿSS duh KOHZ', ['croyance']),
  sent(1048, 'J’ai fait sa connaissance à Dakar l’an dernier.', 'I met her in Dakar last year.',
    '/ʒe fɛ sa kɔ.nɛ.sɑ̃s a da.kaʁ lɑ̃ dɛʁ.nje/', 'zhay feh sa ko-neh-SAHⁿSS | a da-KAR | lahⁿ dehr-NYAY', ['croyance']),
  sent(1049, 'Ses connaissances en chimie m’impressionnent.', 'Her knowledge of chemistry impresses me.',
    '/se kɔ.nɛ.sɑ̃s ɑ̃ ʃi.mi mɛ̃.pʁɛ.sjɔn/', 'say ko-neh-SAHⁿSS ahⁿ shee-MEE | mehⁿ-preh-SYONN', ['croyance']),
  sent(1050, 'Une conviction, même sincère, n’est pas une preuve.', 'A conviction, however sincere, is not proof.',
    '/yn kɔ̃.vik.sjɔ̃ mɛm sɛ̃.sɛʁ nɛ pa.zyn pʁœv/', 'ün kohⁿ-veek-SYOHⁿ | mem sehⁿ-SEHR | neh pa-zün PRUHV', ['croyance']),
  sent(1051, 'Je ne le crois pas, je le sais : j’ai vu les chiffres.', 'I do not believe it, I know it: I have seen the figures.',
    '/ʒə nə lə kʁwa pa ʒə lə sɛ ʒe vy le ʃifʁ/', 'zhuh nuh luh krwa PA | zhuh luh SEH | zhay vü lay SHEEFR', ['croyance']),
];

/* ── ACT 5 · LE NÉCESSAIRE ET LE CONTINGENT (.1052-.1063) ───────────────── */

export const ACT5_ROWS: Row[] = [
  col(1052, 'une conséquence inévitable', 'an inevitable consequence', '/yn kɔ̃.se.kɑ̃s i.ne.vi.tabl/', 'ün kohⁿ-say-KAHⁿSS ee-nay-vee-TABL', ['contingent'],
    'Inévitable : qui ne pouvait pas ne pas arriver, vu les causes.'),
  col(1053, 'une rencontre fortuite', 'a chance encounter', '/yn ʁɑ̃.kɔ̃tʁ fɔʁ.tɥit/', 'ün rahⁿ-KOHⁿTR for-TWEET', ['contingent'],
    'Fortuit : dû au hasard, sans intention. Une découverte fortuite.'),
  fam(1054, 'nécessaire, la nécessité, nécessairement', 'necessary, necessity, necessarily',
    '/ne.se.sɛʁ la ne.se.si.te ne.se.sɛʁ.mɑ̃/', 'nay-say-SEHR, la nay-say-see-TAY, nay-say-sehr-MAHⁿ', ['contingent'],
    'Deux sens : dans la vie courante, ce dont on a besoin ; en philosophie, ce qui ne peut pas être autrement.'),
  fam(1055, 'contingent, contingente, la contingence', 'contingent (masculine, feminine), contingency',
    '/kɔ̃.tɛ̃.ʒɑ̃ kɔ̃.tɛ̃.ʒɑ̃t la kɔ̃.tɛ̃.ʒɑ̃s/', 'kohⁿ-tehⁿ-ZHAHⁿ, kohⁿ-tehⁿ-ZHAHⁿT, la kohⁿ-tehⁿ-ZHAHⁿSS', ['contingent'],
    'Contingent : qui aurait pu ne pas être. Le nom un contingent (un quota, un groupe) est un autre mot.'),
  sent(1056, 'Qu’un triangle ait trois côtés, c’est nécessaire : cela ne peut pas être autrement.', 'That a triangle has three sides is necessary: it cannot be otherwise.',
    '/kœ̃ tʁi.jɑ̃ɡl ɛ tʁwa ko.te sɛ ne.se.sɛʁ sə.la nə pø pa.zɛtʁ o.tʁə.mɑ̃/', 'kuhⁿ tree-YAHⁿGL | eh trwa koh-TAY | seh nay-say-SEHR | suh-LA nuh peu pa-ZETR oh-truh-MAHⁿ', ['contingent'], FCVR, SO),
  sent(1057, 'Que je sois né à Liège est contingent : j’aurais pu naître ailleurs.', 'That I was born in Liège is contingent: I could have been born elsewhere.',
    '/kə ʒə swa ne a ljɛʒ ɛ kɔ̃.tɛ̃.ʒɑ̃ ʒɔ.ʁɛ py nɛtʁ a.jœʁ/', 'kuh zhuh swa NAY a LYEZH | eh kohⁿ-tehⁿ-ZHAHⁿ | zho-reh pü netr a-YUHR', ['contingent'], FCVDR, SO),
  sent(1058, 'C’est arrivé, mais cela aurait pu ne pas arriver.', 'It happened, but it might not have happened.',
    '/sɛ.ta.ʁi.ve mɛ sə.la o.ʁɛ py nə pa.za.ʁi.ve/', 'seh-ta-ree-VAY | meh suh-LA oh-reh PÜ | nuh pa-za-ree-VAY', ['contingent']),
  sent(1059, 'Leur rencontre était fortuite : ils ont pris le même train par hasard.', 'Their meeting was by chance: they happened to take the same train.',
    '/lœʁ ʁɑ̃.kɔ̃tʁ e.tɛ fɔʁ.tɥit il.zɔ̃ pʁi lə mɛm tʁɛ̃ paʁ a.zaʁ/', 'luhr rahⁿ-KOHⁿTR | ay-teh for-TWEET | eel-zohⁿ pree luh mem TREHⁿ | par a-ZAR', ['contingent']),
  sent(1060, 'La suite du projet dépend du vote du conseil.', 'The next stage of the project is contingent on the council vote.',
    '/la sɥit dy pʁɔ.ʒɛ de.pɑ̃ dy vɔt dy kɔ̃.sɛj/', 'la SWEET dü pro-ZHEH | day-PAHⁿ | dü VOT dü kohⁿ-SEY', ['contingent']),
  rule(1061, 'Le nécessaire ne peut pas ne pas être ; le contingent aurait pu ne pas être.', 'What is necessary cannot fail to be; what is contingent might not have been.',
    '/lə ne.se.sɛʁ nə pø pa nə pa.zɛtʁ lə kɔ̃.tɛ̃.ʒɑ̃ o.ʁɛ py nə pa.zɛtʁ/', 'luh nay-say-SEHR | nuh peu pa nuh pa-ZETR | luh kohⁿ-tehⁿ-ZHAHⁿ | oh-reh pü nuh pa-ZETR',
    'Nécessaire ou contingent : lequel aurait pu ne pas être ?',
    'Le contingent. Le test : peux-tu imaginer le monde sans lui, sans contradiction ? Alors il n’était pas nécessaire.',
    ['contingent']),
  sent(1062, 'Une réservation est nécessaire pour ce restaurant.', 'A reservation is needed for this restaurant.',
    '/yn ʁe.zɛʁ.va.sjɔ̃ ɛ ne.se.sɛʁ puʁ sə ʁɛs.to.ʁɑ̃/', 'ün ray-zehr-va-SYOHⁿ | eh nay-say-SEHR | poor suh res-toh-RAHⁿ', ['contingent']),
  sent(1063, 'Ce résultat n’avait rien d’inévitable.', 'There was nothing inevitable about this result.',
    '/sə ʁe.zyl.ta na.vɛ ʁjɛ̃ di.ne.vi.tabl/', 'suh ray-zül-TA | na-veh ryehⁿ dee-nay-vee-TABL', ['contingent']),
];

/* ── ACT 6 · NÉCESSAIRE OU SUFFISANT (.1064-.1075) ──────────────────────── */

export const ACT6_ROWS: Row[] = [
  col(1064, 'une condition nécessaire', 'a necessary condition', '/yn kɔ̃.di.sjɔ̃ ne.se.sɛʁ/', 'ün kohⁿ-dee-SYOHⁿ nay-say-SEHR', ['condition'],
    'Nécessaire : sans elle, la chose n’arrive pas. Avec elle, rien n’est encore sûr.'),
  col(1065, 'une condition suffisante', 'a sufficient condition', '/yn kɔ̃.di.sjɔ̃ sy.fi.zɑ̃t/', 'ün kohⁿ-dee-SYOHⁿ sü-fee-ZAHⁿT', ['condition'],
    'Suffisante : dès qu’elle est remplie, la chose arrive, même si d’autres chemins y mènent aussi.'),
  col(1066, 'la condition sine qua non', 'the indispensable condition', '/la kɔ̃.di.sjɔ̃ si.ne.kwa.nɔn/', 'la kohⁿ-dee-SYOHⁿ | see-nay-kwa-NONN', ['condition'],
    'Latin : « sans laquelle non ». Une condition sans laquelle rien n’est possible : c’est une condition nécessaire.', SO),
  sent(1067, 'Le billet est nécessaire pour entrer, mais il n’est pas suffisant.', 'The ticket is necessary to get in, but it is not sufficient.',
    '/lə bi.jɛ ɛ ne.se.sɛʁ puʁ ɑ̃.tʁe mɛ il nɛ pa sy.fi.zɑ̃/', 'luh bee-YEH | eh nay-say-SEHR poor ahⁿ-TRAY | meh eel neh pa sü-fee-ZAHⁿ', ['condition'], FCVDR),
  sent(1068, 'Il suffit d’appuyer sur ce bouton pour éteindre l’appareil.', 'All you need to do is press this button to switch the device off.',
    '/il sy.fi da.pɥi.je syʁ sə bu.tɔ̃ puʁ e.tɛ̃dʁ la.pa.ʁɛj/', 'eel sü-FEE | da-pwee-YAY sür suh boo-TOHⁿ | poor ay-tehⁿdr la-pa-REY', ['condition']),
  sent(1069, 'Un diplôme ne suffit pas à trouver un emploi.', 'A degree is not enough to find a job.',
    '/œ̃ di.plom nə sy.fi pa a tʁu.ve œ̃.nɑ̃.plwa/', 'uhⁿ dee-PLOHM | nuh sü-fee PA | a troo-VAY uhⁿ-nahⁿ-PLWA', ['condition'], FCVDR),
  sent(1070, 'L’eau est une condition nécessaire de la vie, pas une condition suffisante.', 'Water is a necessary condition for life, not a sufficient one.',
    '/lo ɛ.tyn kɔ̃.di.sjɔ̃ ne.se.sɛʁ də la vi pa.zyn kɔ̃.di.sjɔ̃ sy.fi.zɑ̃t/', 'LOH | eh-tün kohⁿ-dee-SYOHⁿ nay-say-SEHR duh la VEE | pa-zün kohⁿ-dee-SYOHⁿ sü-fee-ZAHⁿT', ['condition']),
  sent(1071, 'Le dossier est accepté si et seulement si toutes les pièces sont jointes.', 'The application is accepted if and only if all the documents are attached.',
    '/lə do.sje ɛ.tak.sɛp.te si e sœl.mɑ̃ si tut le pjɛs sɔ̃ ʒwɛ̃t/', 'luh do-SYAY eh-tak-sep-TAY | see ay suhl-MAHⁿ SEE | toot lay PYESS sohⁿ ZHWEHⁿT', ['condition'], FCVR, SO),
  rule(1072, 'Nécessaire : sans elle, rien. Suffisante : avec elle, c’est sûr.', 'Necessary: without it, nothing. Sufficient: with it, it is certain.',
    '/ne.se.sɛʁ sɑ̃.zɛl ʁjɛ̃ sy.fi.zɑ̃t a.vɛ.kɛl sɛ syʁ/', 'nay-say-SEHR | sahⁿ-ZEL RYEHⁿ | sü-fee-ZAHⁿT | a-veh-KEL seh SÜR',
    'Une condition nécessaire suffit-elle ?',
    'Non. Sans billet, tu n’entres pas : le billet est nécessaire. Mais un billet seul ne suffit pas si l’on demande aussi une pièce d’identité.',
    ['condition']),
  sent(1073, 'La confiance est la condition sine qua non de tout travail d’équipe.', 'Trust is the indispensable condition for any teamwork.',
    '/la kɔ̃.fjɑ̃s ɛ la kɔ̃.di.sjɔ̃ si.ne.kwa.nɔn də tu tʁa.vaj de.kip/', 'la kohⁿ-FYAHⁿSS | eh la kohⁿ-dee-SYOHⁿ see-nay-kwa-NONN | duh too tra-VAHY day-KEEP', ['condition'], FCVR, SO),
  sent(1074, 'C’est nécessaire, mais loin d’être suffisant.', 'It is necessary, but far from sufficient.',
    '/sɛ ne.se.sɛʁ mɛ lwɛ̃ dɛtʁ sy.fi.zɑ̃/', 'seh nay-say-SEHR | meh lwehⁿ detr sü-fee-ZAHⁿ', ['condition']),
  sent(1075, 'Pour emprunter, il ne suffit pas d’être inscrit : encore faut-il avoir rendu ses livres.', 'To borrow, being registered is not enough: you also need to have returned your books.',
    '/puʁ ɑ̃.pʁœ̃.te il nə sy.fi pa dɛ.tʁɛ̃s.kʁi ɑ̃.kɔʁ fo.til a.vwaʁ ʁɑ̃.dy se livʁ/', 'poor ahⁿ-pruhⁿ-TAY | eel nuh sü-fee pa deh-trehⁿs-KREE | ahⁿ-kor foh-TEEL | a-vwar rahⁿ-dü say LEEVR', ['condition']),
];

/* ── ACT 7 · PRÉMISSES ET CONCLUSION (.1076-.1088) ──────────────────────── */

export const ACT7_ROWS: Row[] = [
  col(1076, 'partir d’une prémisse', 'to start from a premise', '/paʁ.tiʁ dyn pʁe.mis/', 'par-TEER dün pray-MEESS', ['premisse'],
    'Une prémisse : une proposition de départ d’un raisonnement. On part d’une prémisse, on la pose, on la conteste.'),
  col(1077, 'en conclure que', 'to conclude from it that', '/ɑ̃ kɔ̃.klyʁ kə/', 'ahⁿ kohⁿ-KLÜR kuh', ['premisse'],
    'En conclure que + indicatif : tirer une conclusion de ce qui précède. Conclure à + nom : juger qu’une chose est établie.'),
  col(1078, 'une conclusion hâtive', 'a hasty conclusion', '/yn kɔ̃.kly.zjɔ̃ a.tiv/', 'ün kohⁿ-klü-ZYOHⁿ a-TEEV', ['premisse'],
    'Hâtive : tirée trop vite, avant d’avoir assez de raisons.'),
  col(1079, 'un raisonnement valide', 'a valid piece of reasoning', '/œ̃ ʁɛ.zɔn.mɑ̃ va.lid/', 'uhⁿ reh-zonn-MAHⁿ va-LEED', ['premisse'],
    'Valide : la conclusion suit des prémisses. Cela dit la forme, pas la vérité des prémisses.'),
  sent(1080, 'Tout repose sur une prémisse que personne n’a vérifiée.', 'Everything rests on a premise nobody has checked.',
    '/tu ʁə.poz sy.ʁyn pʁe.mis kə pɛʁ.sɔn na ve.ʁi.fje/', 'too ruh-POHZ | sü-rün pray-MEESS | kuh pehr-SONN na vay-ree-FYAY', ['premisse'], FCVDR),
  sent(1081, 'Si les prémisses sont vraies et le raisonnement valide, la conclusion est vraie.', 'If the premises are true and the reasoning valid, the conclusion is true.',
    '/si le pʁe.mis sɔ̃ vʁɛ e lə ʁɛ.zɔn.mɑ̃ va.lid la kɔ̃.kly.zjɔ̃ ɛ vʁɛ/', 'see lay pray-MEESS sohⁿ VREH | ay luh reh-zonn-mahⁿ va-LEED | la kohⁿ-klü-ZYOHⁿ eh VREH', ['premisse']),
  sent(1082, 'Un raisonnement peut être valide et sa conclusion fausse, si une prémisse est fausse.', 'Reasoning can be valid and its conclusion false, if a premise is false.',
    '/œ̃ ʁɛ.zɔn.mɑ̃ pø.tɛtʁ va.lid e sa kɔ̃.kly.zjɔ̃ fos si yn pʁe.mis ɛ fos/', 'uhⁿ reh-zonn-MAHⁿ | peu-tetr va-LEED | ay sa kohⁿ-klü-zyohⁿ FOHSS | see ün pray-MEESS eh FOHSS', ['premisse']),
  sent(1083, 'Il s’ensuit que le projet coûtera plus cher que prévu.', 'It follows that the project will cost more than planned.',
    '/il sɑ̃.sɥi kə lə pʁɔ.ʒɛ ku.tə.ʁa ply ʃɛʁ kə pʁe.vy/', 'eel sahⁿ-SWEE | kuh luh pro-ZHEH | koo-tuh-RA plü SHEHR kuh pray-VÜ', ['premisse'], FCVR, SO),
  sent(1084, 'Tu pars du principe que tout le monde a une voiture.', 'You are assuming that everyone has a car.',
    '/ty paʁ dy pʁɛ̃.sip kə tu lə mɔ̃d a yn vwa.tyʁ/', 'tü par dü prehⁿ-SEEP | kuh too luh MOHⁿD | a ün vwa-TÜR', ['premisse']),
  sent(1085, 'Le jury a conclu à l’absence de faute.', 'The panel concluded that there had been no fault.',
    '/lə ʒy.ʁi a kɔ̃.kly a lap.sɑ̃s də fot/', 'luh zhü-REE | a kohⁿ-KLÜ | a lap-SAHⁿSS duh FOHT', ['premisse'], FCVR, SO),
  sent(1086, 'De ces deux constats, elle conclut que la méthode doit changer.', 'From these two observations, she concludes that the method must change.',
    '/də se dø kɔ̃s.ta ɛl kɔ̃.kly kə la me.tɔd dwa ʃɑ̃.ʒe/', 'duh say deu kohⁿs-TA | el kohⁿ-KLÜ | kuh la may-TOD dwa shahⁿ-ZHAY', ['premisse']),
  rule(1087, 'Valide, c’est la forme ; vrai, c’est le contenu.', 'Valid is about form; true is about content.',
    '/va.lid sɛ la fɔʁm vʁɛ sɛ lə kɔ̃t.ny/', 'va-LEED | seh la FORM | VREH | seh luh kohⁿt-NÜ',
    'Un raisonnement valide donne-t-il toujours une conclusion vraie ?',
    'Non : il garantit seulement que la conclusion suit. Si une prémisse est fausse, la conclusion peut l’être aussi.',
    ['premisse']),
  sent(1088, 'Cette conclusion ne découle pas de tes prémisses.', 'This conclusion does not follow from your premises.',
    '/sɛt kɔ̃.kly.zjɔ̃ nə de.kul pa də te pʁe.mis/', 'set kohⁿ-klü-ZYOHⁿ | nuh day-KOOL PA | duh tay pray-MEESS', ['premisse'], FCVDR),
];

/* ── ACT 8 · LE SOPHISME ET SES COUSINS (.1089-.1100) ───────────────────── */

export const ACT8_ROWS: Row[] = [
  col(1089, 'commettre un paralogisme', 'to make a faulty inference in good faith', '/kɔ.mɛtʁ œ̃ pa.ʁa.lɔ.ʒism/', 'ko-METR uhⁿ pa-ra-lo-ZHEESM', ['sophisme'],
    'Un paralogisme : un raisonnement faux fait de bonne foi. Le mot est savant ; on dit aussi une erreur de raisonnement.', SO),
  col(1090, 'une pétition de principe', 'begging the question', '/yn pe.ti.sjɔ̃ də pʁɛ̃.sip/', 'ün pay-tee-SYOHⁿ duh prehⁿ-SEEP', ['sophisme'],
    'Poser comme acquis ce qu’il faudrait démontrer. Rien à voir avec une pétition qu’on signe.', SO),
  col(1091, 'un cercle vicieux', 'a vicious circle', '/œ̃ sɛʁkl vi.sjø/', 'uhⁿ sehrkl vee-SYEU', ['sophisme'],
    'Deux sens : en logique, prouver A par B et B par A ; dans la vie, une situation qui s’entretient elle-même.'),
  col(1092, 'une faille dans le raisonnement', 'a flaw in the reasoning', '/yn faj dɑ̃ lə ʁɛ.zɔn.mɑ̃/', 'ün FAHY | dahⁿ luh reh-zonn-MAHⁿ', ['sophisme'],
    'La faille : l’endroit précis où le raisonnement ne tient plus.'),
  rule(1093, 'Un sophisme veut tromper ; un paralogisme se trompe.', 'A sophism sets out to deceive; a paralogism is simply mistaken.',
    '/œ̃ sɔ.fism vø tʁɔ̃.pe œ̃ pa.ʁa.lɔ.ʒism sə tʁɔ̃p/', 'uhⁿ so-FEESM veu trohⁿ-PAY | uhⁿ pa-ra-lo-ZHEESM suh TROHⁿP',
    'Sophisme ou paralogisme : lequel cherche à tromper ?',
    'Le sophisme. Les deux raisonnent mal ; la différence est l’intention. Souvent, on ne peut pas la connaître : dis alors une erreur de raisonnement.',
    ['sophisme']),
  sent(1094, 'Ce remède est efficace puisqu’il marche : c’est une pétition de principe.', 'This remedy is effective since it works: that is begging the question.',
    '/sə ʁə.mɛd ɛ.te.fi.kas pɥis.kil maʁʃ sɛ.ty.ne pe.ti.sjɔ̃ də pʁɛ̃.sip/', 'suh ruh-MED eh-tay-fee-KASS | pwees-keel MARSH | seh-tü-nay pay-tee-SYOHⁿ duh prehⁿ-SEEP', ['sophisme']),
  sent(1095, 'Pas d’emploi sans expérience, pas d’expérience sans emploi : c’est un cercle vicieux.', 'No job without experience, no experience without a job: it is a vicious circle.',
    '/pa dɑ̃.plwa sɑ̃.zɛks.pe.ʁjɑ̃s pa dɛks.pe.ʁjɑ̃s sɑ̃.zɑ̃.plwa sɛ.tœ̃ sɛʁkl vi.sjø/', 'pa dahⁿ-PLWA | sahⁿ-zeks-pay-RYAHⁿSS | pa dek-spay-RYAHⁿSS | sahⁿ-zahⁿ-PLWA | seh-tuhⁿ sehrkl vee-SYEU', ['sophisme'], FCVDR),
  sent(1096, 'Dire qu’une loi est juste parce qu’elle est la loi, c’est tourner en rond.', 'Saying a law is fair because it is the law is going round in circles.',
    '/diʁ kyn lwa ɛ ʒyst paʁs.kɛ.lɛ la lwa sɛ tuʁ.ne ɑ̃ ʁɔ̃/', 'deer kün LWA eh ZHÜST | pars-keh-leh la LWA | seh toor-nay ahⁿ ROHⁿ', ['sophisme']),
  sent(1097, 'Ton argument suppose déjà ce qu’il veut prouver.', 'Your argument already assumes what it sets out to prove.',
    '/tɔ̃.naʁ.ɡy.mɑ̃ sy.poz de.ʒa sə kil vø pʁu.ve/', 'tohⁿ-nar-gü-MAHⁿ | sü-POHZ day-ZHA | suh keel veu proo-VAY', ['sophisme'], FCVDR),
  sent(1098, 'Il s’est contredit deux fois dans le même paragraphe.', 'He contradicted himself twice in the same paragraph.',
    '/il sɛ kɔ̃.tʁə.di dø fwa dɑ̃ lə mɛm pa.ʁa.ɡʁaf/', 'eel seh kohⁿ-truh-DEE | deu FWA | dahⁿ luh mem pa-ra-GRAF', ['sophisme']),
  sent(1099, 'La faille, c’est que la conclusion ne suit pas des prémisses.', 'The flaw is that the conclusion does not follow from the premises.',
    '/la faj sɛ kə la kɔ̃.kly.zjɔ̃ nə sɥi pa de pʁe.mis/', 'la FAHY | seh kuh la kohⁿ-klü-ZYOHⁿ | nuh swee PA | day pray-MEESS', ['sophisme']),
  sent(1100, 'Elle était de bonne foi : c’était une erreur, pas une manipulation.', 'She was acting in good faith: it was a mistake, not manipulation.',
    '/ɛ.le.tɛ də bɔn fwa se.tɛ.ty.nɛ.ʁœʁ pa.zyn ma.ni.py.la.sjɔ̃/', 'eh-lay-TEH duh bonn FWA | say-teh-tü-neh-RUHR | pa-zün ma-nee-pü-la-SYOHⁿ', ['sophisme']),
];

/* ── ACT 9 · A PRIORI, A POSTERIORI (.1101-.1111) ───────────────────────── */

export const ACT9_ROWS: Row[] = [
  col(1101, 'avoir des a priori', 'to have preconceptions', '/a.vwaʁ de.za pʁi.jɔ.ʁi/', 'a-vwar day-za pree-yo-REE', ['apriori'],
    'Le nom un a priori : une idée toute faite, un préjugé. Il reste invariable : des a priori.'),
  col(1102, 'justifier a posteriori', 'to justify after the fact', '/ʒys.ti.fje a pɔs.te.ʁjɔ.ʁi/', 'zhüs-tee-FYAY | a pos-tay-ryo-REE', ['apriori'],
    'Dans la vie courante, a posteriori : après coup, une fois que c’est fait.'),
  col(1103, 'une connaissance a priori', 'a priori knowledge', '/yn kɔ.nɛ.sɑ̃s a pʁi.jɔ.ʁi/', 'ün ko-neh-SAHⁿSS | a pree-yo-REE', ['apriori'],
    'En philosophie : une connaissance qui ne dépend pas de l’expérience. A posteriori : qui en vient.', SO),
  sent(1104, 'A priori, la réunion est maintenue ; je te le confirme demain.', 'In principle the meeting is still on; I will confirm tomorrow.',
    '/a pʁi.jɔ.ʁi la ʁe.y.njɔ̃ ɛ mɛ̃t.ny ʒə tə lə kɔ̃.fiʁm də.mɛ̃/', 'a pree-yo-REE | la ray-ü-NYOHⁿ eh mehⁿt-NÜ | zhuh tuh luh kohⁿ-FEERM duh-MEHⁿ', ['apriori'], FCVDR),
  sent(1105, 'Il a beaucoup d’a priori sur les gens de la ville.', 'He has a lot of preconceptions about city people.',
    '/i.la bo.ku da pʁi.jɔ.ʁi syʁ le ʒɑ̃ də la vil/', 'ee-la boh-KOO | da pree-yo-REE | sür lay ZHAHⁿ duh la VEEL', ['apriori']),
  sent(1106, 'On sait a priori que deux et deux font quatre, sans rien mesurer.', 'We know a priori that two and two make four, without measuring anything.',
    '/ɔ̃ sɛ a pʁi.jɔ.ʁi kə dø e dø fɔ̃ katʁ sɑ̃ ʁjɛ̃ mə.zy.ʁe/', 'ohⁿ SEH | a pree-yo-REE | kuh deu ay deu fohⁿ KATR | sahⁿ ryehⁿ muh-zü-RAY', ['apriori'], FCVR, SO),
  sent(1107, 'Le point d’ébullition de l’eau, on le connaît a posteriori : par l’expérience.', 'We know the boiling point of water a posteriori: from experience.',
    '/lə pwɛ̃ de.by.li.sjɔ̃ də lo ɔ̃ lə kɔ.nɛ a pɔs.te.ʁjɔ.ʁi paʁ lɛks.pe.ʁjɑ̃s/', 'luh pwehⁿ day-bü-lee-SYOHⁿ duh LOH | ohⁿ luh ko-NEH | a pos-tay-ryo-REE | par lek-spay-RYAHⁿSS', ['apriori'], FCVR, SO),
  sent(1108, 'Il a trouvé ses raisons a posteriori, une fois la décision prise.', 'He found his reasons after the fact, once the decision had been made.',
    '/i.la tʁu.ve se ʁɛ.zɔ̃ a pɔs.te.ʁjɔ.ʁi yn fwa la de.si.zjɔ̃ pʁiz/', 'ee-la troo-VAY say reh-ZOHⁿ | a pos-tay-ryo-REE | ün FWA la day-see-zyohⁿ PREEZ', ['apriori']),
  rule(1109, 'A priori : avant l’expérience ; a posteriori : à partir d’elle.', 'A priori: prior to experience; a posteriori: drawn from it.',
    '/a pʁi.jɔ.ʁi a.vɑ̃ lɛks.pe.ʁjɑ̃s a pɔs.te.ʁjɔ.ʁi a paʁ.tiʁ dɛl/', 'a pree-yo-REE | a-vahⁿ lek-spay-RYAHⁿSS | a pos-tay-ryo-REE | a par-teer DEL',
    'A priori ou a posteriori : lequel attend l’expérience ?',
    'A posteriori. Dans la conversation, a priori veut souvent dire « à première vue », et un a priori est un préjugé : lis le contexte.',
    ['apriori']),
  sent(1110, 'Je n’ai aucun a priori contre ce projet.', 'I have no preconceived objection to this project.',
    '/ʒə ne o.kœ̃.na pʁi.jɔ.ʁi kɔ̃tʁ sə pʁɔ.ʒɛ/', 'zhuh nay oh-kuhⁿ-na pree-yo-REE | kohⁿtr suh pro-ZHEH', ['apriori']),
  sent(1111, 'À première vue, ce chiffre paraît énorme.', 'At first sight, this figure looks huge.',
    '/a pʁə.mjɛʁ vy sə ʃifʁ pa.ʁɛ.te.nɔʁm/', 'a pruh-myehr VÜ | suh SHEEFR | pa-reh-tay-NORM', ['apriori']),
];

/* ── ACT 10 · DÉFINIR ET DISTINGUER (.1112-.1123) ───────────────────────── */

export const ACT10_ROWS: Row[] = [
  col(1112, 'établir une distinction', 'to draw a distinction', '/e.ta.bliʁ yn dis.tɛ̃k.sjɔ̃/', 'ay-ta-BLEER ün dees-tehⁿk-SYOHⁿ', ['definir'],
    'On établit, on fait, on marque une distinction entre deux notions.'),
  col(1113, 'confondre deux notions', 'to confuse two notions', '/kɔ̃.fɔ̃dʁ dø no.sjɔ̃/', 'kohⁿ-FOHⁿDR deu noh-SYOHⁿ', ['definir'],
    'On confond A et B, ou A avec B ; jamais « confondre entre ».'),
  col(1114, 'au sens strict', 'in the strict sense', '/o sɑ̃s stʁikt/', 'oh sahⁿss STREEKT', ['definir'],
    'Au sens strict : en prenant le mot dans sa définition exacte.'),
  col(1115, 'au sens large', 'in the broad sense', '/o sɑ̃s laʁʒ/', 'oh sahⁿss LARZH', ['definir'],
    'Au sens large : en étendant le mot à des cas voisins.'),
  sent(1116, 'Il ne faut pas confondre la solitude et l’isolement.', 'You must not confuse solitude with isolation.',
    '/il nə fo pa kɔ̃.fɔ̃dʁ la sɔ.li.tyd e li.zɔl.mɑ̃/', 'eel nuh foh pa kohⁿ-FOHⁿDR | la so-lee-TÜD | ay lee-zol-MAHⁿ', ['definir'], FCVDR),
  sent(1117, 'Au sens strict, la tomate est un fruit ; en cuisine, on la traite comme un légume.', 'Strictly speaking, the tomato is a fruit; in cooking it is treated as a vegetable.',
    '/o sɑ̃s stʁikt la tɔ.mat ɛ.tœ̃ fʁɥi ɑ̃ kɥi.zin ɔ̃ la tʁɛt kɔ.mœ̃ le.ɡym/', 'oh sahⁿss STREEKT | la to-MAT eh-tuhⁿ FRWEE | ahⁿ kwee-ZEEN | ohⁿ la TRET ko-muhⁿ lay-GÜM', ['definir']),
  sent(1118, 'Cette question relève de la morale, pas du droit.', 'This question is a matter of morality, not of law.',
    '/sɛt kɛs.tjɔ̃ ʁə.lɛv də la mɔ.ʁal pa dy dʁwa/', 'set kes-TYOHⁿ | ruh-LEV duh la mo-RAL | pa dü DRWA', ['definir']),
  sent(1119, 'Par définition, un célibataire n’est pas marié.', 'By definition, a bachelor is not married.',
    '/paʁ de.fi.ni.sjɔ̃ œ̃ se.li.ba.tɛʁ nɛ pa ma.ʁje/', 'par day-fee-nee-SYOHⁿ | uhⁿ say-lee-ba-TEHR | neh pa ma-RYAY', ['definir']),
  sent(1120, 'On oppose souvent la nature à la culture.', 'Nature is often contrasted with culture.',
    '/ɔ̃.nɔ.pɔz su.vɑ̃ la na.tyʁ a la kyl.tyʁ/', 'ohⁿ-no-POHZ soo-VAHⁿ | la na-TÜR | a la kül-TÜR', ['definir']),
  sent(1121, 'Définissons d’abord ce que nous entendons par réussite.', 'Let us first define what we mean by success.',
    '/de.fi.ni.sɔ̃ da.bɔʁ sə kə nu.zɑ̃.tɑ̃.dɔ̃ paʁ ʁe.y.sit/', 'day-fee-nee-SOHⁿ da-BOR | suh kuh noo-zahⁿ-tahⁿ-DOHⁿ | par ray-ü-SEET', ['definir'], FCVDR),
  rule(1122, 'On distingue A de B ; on confond A et B, ou A avec B.', 'You distinguish A from B; you confuse A and B, or A with B.',
    '/ɔ̃ dis.tɛ̃ɡ a də be ɔ̃ kɔ̃.fɔ̃ a e be u a a.vɛk be/', 'ohⁿ dees-TEHⁿG a duh BAY | ohⁿ kohⁿ-FOHⁿ a ay BAY | oo a a-vek BAY',
    'Distinguer, confondre : avec quelles prépositions ?',
    'Distinguer A de B, ou distinguer entre A et B ; confondre A et B, ou A avec B. « Confondre entre » ne se dit pas.',
    ['definir']),
  sent(1123, 'Il faut distinguer le fait de son interprétation.', 'You have to distinguish the fact from its interpretation.',
    '/il fo dis.tɛ̃.ɡe lə fɛ də sɔ̃.nɛ̃.tɛʁ.pʁe.ta.sjɔ̃/', 'eel foh dees-tehⁿ-GAY luh FEH | duh sohⁿ-nehⁿ-tehr-pray-ta-SYOHⁿ', ['definir']),
];

/* ── ACT 11 · PROUVER, CONFIRMER, RÉFUTER (.1124-.1137) ─────────────────── */

export const ACT11_ROWS: Row[] = [
  col(1124, 'apporter la preuve de', 'to provide proof of', '/a.pɔʁ.te la pʁœv də/', 'a-por-TAY la PRUHV duh', ['preuve'],
    'On apporte, on fournit, on donne la preuve de quelque chose. La charge de la preuve : à qui revient-il de prouver ?'),
  col(1125, 'infirmer une hypothèse', 'to invalidate a hypothesis', '/ɛ̃.fiʁ.me y.ni.pɔ.tɛz/', 'ehⁿ-feer-MAY | ü-nee-po-TEZ', ['preuve'],
    'Infirmer : ôter son crédit à une chose, montrer qu’elle est fausse. C’est le contraire de confirmer. Rien à voir avec infirme.', SO),
  col(1126, 'corroborer un témoignage', 'to corroborate a testimony', '/kɔ.ʁɔ.bɔ.ʁe œ̃ te.mwa.ɲaʒ/', 'ko-ro-bo-RAY | uhⁿ tay-mwa-NYAZH', ['preuve'],
    'Corroborer : confirmer par un autre élément, indépendant du premier.', SO),
  col(1127, 'réfuter un argument', 'to refute an argument', '/ʁe.fy.te œ̃.naʁ.ɡy.mɑ̃/', 'ray-fü-TAY | uhⁿ-nar-gü-MAHⁿ', ['preuve'],
    'Réfuter : montrer, preuves à l’appui, qu’un argument est faux. Nier, c’est seulement dire non.'),
  sent(1128, 'Les nouvelles mesures confirment l’hypothèse de départ.', 'The new measurements confirm the initial hypothesis.',
    '/le nu.vɛl mə.zyʁ kɔ̃.fiʁm li.pɔ.tɛz də de.paʁ/', 'lay noo-vel muh-ZÜR | kohⁿ-FEERM | lee-po-TEZ duh day-PAR', ['preuve']),
  sent(1129, 'Une seule observation contraire suffit à infirmer cette règle.', 'A single contrary observation is enough to invalidate this rule.',
    '/yn sœl ɔp.sɛʁ.va.sjɔ̃ kɔ̃.tʁɛʁ sy.fi a ɛ̃.fiʁ.me sɛt ʁɛɡl/', 'ün suhl op-sehr-va-SYOHⁿ kohⁿ-TREHR | sü-FEE | a ehⁿ-feer-MAY set REGL', ['preuve'], FCVDR),
  sent(1130, 'Deux témoins indépendants corroborent sa version.', 'Two independent witnesses corroborate her version.',
    '/dø te.mwɛ̃ ɛ̃.de.pɑ̃.dɑ̃ kɔ.ʁɔ.bɔʁ sa vɛʁ.sjɔ̃/', 'deu tay-MWEHⁿ ehⁿ-day-pahⁿ-DAHⁿ | ko-ro-BOR sa vehr-SYOHⁿ', ['preuve']),
  sent(1131, 'Elle a réfuté l’objection point par point.', 'She refuted the objection point by point.',
    '/ɛ.la ʁe.fy.te lɔb.ʒɛk.sjɔ̃ pwɛ̃ paʁ pwɛ̃/', 'eh-la ray-fü-TAY | lob-zhek-SYOHⁿ | pwehⁿ par PWEHⁿ', ['preuve']),
  sent(1132, 'Il a nié les faits, mais il ne les a pas réfutés.', 'He denied the facts, but he did not refute them.',
    '/il a nje le fɛ mɛ il nə le.za pa ʁe.fy.te/', 'eel a NYAY lay FEH | meh eel nuh lay-za pa ray-fü-TAY', ['preuve'], FCVDR),
  sent(1133, 'Qu’il faille agir vite, c’est une évidence pour tout le monde.', 'That we must act fast is obvious to everyone.',
    '/kil faj a.ʒiʁ vit sɛ.ty.ne.vi.dɑ̃s puʁ tu lə mɔ̃d/', 'keel FAHY | a-zheer VEET | seh-tü-nay-vee-DAHⁿSS | poor too luh MOHⁿD', ['preuve']),
  sent(1134, 'Les preuves manquent encore pour conclure.', 'There is still not enough evidence to conclude.',
    '/le pʁœv mɑ̃k.tɑ̃.kɔʁ puʁ kɔ̃.klyʁ/', 'lay PRUHV | mahⁿk-tahⁿ-KOR | poor kohⁿ-KLÜR', ['preuve']),
  rule(1135, 'Une évidence n’a pas besoin de preuve.', 'Something obvious (une évidence) needs no proof.',
    '/y.ne.vi.dɑ̃s na pa bə.zwɛ̃ də pʁœv/', 'ü-nay-vee-DAHⁿSS | na pa buh-zwehⁿ duh PRUHV',
    '« There is no evidence » : il n’y a pas d’évidence ?',
    'Non : il n’y a pas de preuve. Une évidence, c’est ce qui saute aux yeux, sans démonstration. Evidence se dit des preuves, ou des éléments de preuve.',
    ['preuve']),
  sent(1136, 'Démontrer, c’est prouver par un raisonnement rigoureux.', 'To demonstrate is to prove by rigorous reasoning.',
    '/de.mɔ̃.tʁe sɛ pʁu.ve paʁ œ̃ ʁɛ.zɔn.mɑ̃ ʁi.ɡu.ʁø/', 'day-mohⁿ-TRAY | seh proo-VAY | par uhⁿ reh-zonn-MAHⁿ ree-goo-REU', ['preuve']),
  sent(1137, 'Le démenti de la mairie n’a convaincu personne.', 'The town hall’s denial convinced nobody.',
    '/lə de.mɑ̃.ti də la mɛ.ʁi na kɔ̃.vɛ̃.ky pɛʁ.sɔn/', 'luh day-mahⁿ-TEE duh la meh-REE | na kohⁿ-vehⁿ-KÜ pehr-SONN', ['preuve']),
];

/* ── ACT 12 · TA RÉPONSE (.1138-.1145) ──────────────────────────────────── */

export const ACT12_ROWS: Row[] = [
  sent(1138, 'Tu confonds ici deux choses : croire et savoir.', 'Here you are confusing two things: believing and knowing.',
    '/ty kɔ̃.fɔ̃ i.si dø ʃoz kʁwaʁ e sa.vwaʁ/', 'tü kohⁿ-FOHⁿ ee-SEE | deu SHOHZ | KRWAR ay sa-VWAR', ['reponse']),
  sent(1139, 'Ta conclusion va plus loin que tes prémisses.', 'Your conclusion goes further than your premises.',
    '/ta kɔ̃.kly.zjɔ̃ va ply lwɛ̃ kə te pʁe.mis/', 'ta kohⁿ-klü-ZYOHⁿ | va plü LWEHⁿ | kuh tay pray-MEESS', ['reponse'], FCVDR),
  sent(1140, 'Ce que tu décris explique son geste ; cela ne le justifie pas.', 'What you describe explains his act; it does not justify it.',
    '/sə kə ty de.kʁi ɛks.plik sɔ̃ ʒɛst sə.la nə lə ʒys.ti.fi pa/', 'suh kuh tü day-KREE | eks-PLEEK sohⁿ ZHEST | suh-LA nuh luh zhüs-tee-FEE PA', ['reponse']),
  sent(1141, 'Avec cette distinction, ta thèse devient plus juste.', 'With this distinction, your thesis becomes more accurate.',
    '/a.vɛk sɛt dis.tɛ̃k.sjɔ̃ ta tɛz də.vjɛ̃ ply ʒyst/', 'a-vek set dees-tehⁿk-SYOHⁿ | ta TEZ duh-vyehⁿ plü ZHÜST', ['reponse']),
  sent(1142, 'Ce n’est pas faux ; c’est seulement insuffisant.', 'It is not false; it is merely insufficient.',
    '/sə nɛ pa fo sɛ sœl.mɑ̃ ɛ̃.sy.fi.zɑ̃/', 'suh neh pa FOH | seh suhl-mahⁿ ehⁿ-sü-fee-ZAHⁿ', ['reponse']),
  sent(1143, 'Si l’on distingue la cause de la raison, ta question devient plus claire.', 'If you separate the cause from the reason, your question becomes clearer.',
    '/si lɔ̃ dis.tɛ̃ɡ la koz də la ʁɛ.zɔ̃ ta kɛs.tjɔ̃ də.vjɛ̃ ply klɛʁ/', 'see LOHⁿ dees-TEHⁿG | la KOHZ duh la reh-ZOHⁿ | ta kes-TYOHⁿ duh-vyehⁿ plü KLEHR', ['reponse']),
  rule(1144, 'Nomme la confusion, montre la différence, reformule la thèse.', 'Name the confusion, show the difference, restate the thesis.',
    '/nɔm la kɔ̃.fy.zjɔ̃ mɔ̃tʁ la di.fe.ʁɑ̃s ʁə.fɔʁ.myl la tɛz/', 'NOMM la kohⁿ-fü-ZYOHⁿ | MOHⁿTR la dee-fay-RAHⁿSS | ruh-for-MÜL la TEZ',
    'Quelqu’un confond deux mots dans un message. Que fait ta réponse ?',
    'Elle nomme la confusion, montre en quoi les deux mots diffèrent, puis reformule la thèse avec le mot juste. Sans moquerie : la distinction suffit.',
    ['reponse']),
  sent(1145, 'Merci pour ton message : il pose une vraie question.', 'Thank you for your message: it raises a real question.',
    '/mɛʁ.si puʁ tɔ̃ mɛ.saʒ il poz yn vʁɛ kɛs.tjɔ̃/', 'mehr-SEE poor tohⁿ meh-SAZH | eel POHZ | ün vreh kes-TYOHⁿ', ['reponse']),
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
 *  Three long readings (the café-philo write-up, a grant's rules, a
 *  municipal article), the model reply of act 12, the reader's message the
 *  task answers, and ten « Dans un texte » paragraphs that close acts 2 to
 *  11. Every person, venue, outlet, town and figure is invented: La Tasse
 *  Oblique and its soirées Oblique (Montréal), Mireille Joncas, Arnaud,
 *  Soraya, Édouard, Inès, Fatou, Hugo, Bastien, Lucien; the magazine Le Fil
 *  des idées, Radio Rivière-Haute, Sainte-Aube-du-Lac, the blog « Pensées de
 *  quai », the Fondation des Trois-Rives and its bourse Lucienne-Tardif, the
 *  librairie Le Grand Tilleul (Liège), the méthode Parlavite (Lausanne),
 *  the Courrier des Trois-Rives, the site Le Relais du Nord, the passerelle
 *  des Moulins and its bronze heron.
 * ══════════════════════════════════════════════════════════════════════════ */

/** Act 1: Mireille's write-up of the last soirée Oblique (about 270 words). */
export const LECTURE_SOIREE =
  'Compte rendu de la soirée Oblique du 3 mars, à La Tasse Oblique, Montréal. Thème : « Peut-on tout expliquer ? ». Une trentaine de personnes, et une discussion vive. Arnaud a ouvert le débat avec une histoire de bureau : une collègue avait menti à sa directrice sur un retard de livraison, par peur de perdre son poste. « Je l’explique, a-t-il dit, je ne la défends pas. » Plusieurs participants ont pourtant compris qu’il l’excusait, et le ton est monté. Soraya a proposé une distinction qui a calmé la salle : expliquer, c’est dire pourquoi une chose est arrivée ; justifier, c’est dire qu’elle était légitime. On peut faire l’un sans l’autre. La suite a montré combien nos mots sont glissants. Édouard affirmait savoir que le télétravail rend les gens moins efficaces ; on lui a demandé d’où il le savait, et il a reconnu qu’il le croyait, d’après deux ou trois collègues. Inès soutenait que la volonté suffit pour réussir ; Fatou lui a répondu que la volonté est sans doute nécessaire, mais qu’elle ne garantit rien. Quant à la question du soir, nous ne l’avons pas tranchée. Mais nous sommes repartis avec une règle de conduite : avant de répondre à quelqu’un, vérifier qu’on parle de la même chose. La prochaine soirée aura lieu le 7 avril, sur le thème « Le hasard existe-t-il ? ». Apportez vos questions ; les certitudes, elles, peuvent rester au vestiaire. Mireille Joncas, pour l’équipe des soirées Oblique.';

/** Act 6: the rules of an invented study grant (about 190 words). */
export const LECTURE_BOURSE =
  'Règlement de la bourse Lucienne-Tardif, Fondation des Trois-Rives (extrait). Article 1. La bourse aide chaque année dix étudiants de premier cycle à financer un semestre d’études dans un pays francophone. Article 2. Pour être recevable, le dossier doit comporter une lettre de motivation, un relevé de notes et une lettre d’acceptation de l’université d’accueil. L’absence de l’une de ces pièces entraîne le rejet du dossier. Article 3. Le dépôt d’un dossier complet ne garantit pas l’obtention de la bourse : les dossiers recevables sont classés par un jury selon la qualité du projet et les résultats universitaires. Article 4. Tout candidat dont la moyenne atteint dix-huit sur vingt et dont le projet est jugé excellent par deux membres du jury reçoit la bourse sans passer par le classement. Article 5. Les décisions du jury sont communiquées par courriel au plus tard le 30 juin. Les candidats non retenus peuvent présenter un nouveau dossier l’année suivante.';

/** Act 10: an article from an invented municipal magazine (about 190 words). */
export const LECTURE_SOLITUDE =
  'Le Courrier des Trois-Rives, rubrique « Vivre ensemble ». Solitude et isolement : deux mots, deux réalités. On confond souvent la solitude et l’isolement. Pourtant, au sens strict, ce ne sont pas les mêmes choses. La solitude est un état : on est seul, et on peut l’avoir choisi, pour lire, marcher ou réfléchir. L’isolement est une situation : on est coupé des autres, le plus souvent sans l’avoir voulu. On peut donc vivre seul sans être isolé, et se sentir isolé au milieu d’une famille. La distinction n’est pas un jeu de mots. Si l’on traite la solitude comme un problème, on risque de déranger des personnes qui vont très bien. Si l’on traite l’isolement comme un choix, on risque d’abandonner celles qui souffrent. C’est pourquoi le service des aînés de la ville a cessé de compter les personnes qui vivent seules ; il compte désormais celles qui n’ont parlé à personne depuis une semaine.';

/** Act 12: the model the learner imitates, Fatou's reply on the blog. */
export const LECTURE_MODELE =
  'Sur le blog des soirées Oblique, Fatou répond à un lecteur, Lucien, qui écrivait : « Les élèves qui prennent un petit-déjeuner ont de meilleures notes. Je sais donc que le petit-déjeuner fait réussir : il suffit de manger le matin pour avoir de bons résultats. » Voici sa réponse. « Cher Lucien, merci pour ton message : il pose une vraie question, mais il mélange trois distinctions. D’abord, tu confonds une corrélation et une cause. Que deux choses aillent ensemble ne prouve pas que l’une produise l’autre : les familles où l’on prend un petit-déjeuner sont peut-être aussi celles où l’on se couche tôt. Ensuite, tu écris « je sais » là où tu pourrais seulement dire « je crois ». Tu as lu un chiffre ; tu n’as pas de quoi exclure les autres explications. Enfin, et c’est le plus important, tu passes du nécessaire au suffisant. Admettons que bien manger aide à apprendre : ce serait au mieux une condition favorable, peut-être nécessaire pour certains enfants, mais certainement pas suffisante. Personne ne réussit un examen avec un bol de céréales. Ce n’est pas faux ; c’est seulement insuffisant. Avec ces distinctions, ta thèse devient plus juste, et plus intéressante : « Un petit-déjeuner pourrait faire partie des conditions qui aident à apprendre ; reste à savoir lesquelles, et pour qui. » Voilà une question qu’on peut étudier. Au plaisir de te lire, Fatou. »';

/** The task: the reader's message the learner answers (about 120 words). */
export const MESSAGE_BASTIEN =
  '« On m’a toujours dit qu’il fallait travailler dur pour réussir. Mon voisin a travaillé dur toute sa vie et il n’a jamais réussi : donc c’est faux, le travail ne sert à rien. D’ailleurs, je sais que la réussite, c’est surtout de la chance : tous les gens qui ont réussi autour de moi ont eu de la chance à un moment. Et si quelqu’un triche pour réussir, on peut comprendre : quand on explique pourquoi il l’a fait, on voit bien que c’était justifié. Bref, la réussite ne dépend pas de nous, et ceux qui disent le contraire n’ont qu’à le prouver. » Bastien';

/** The ten « dans un texte » paragraphs (acts 2 to 11). */
export const TEXTE_A2 =
  'Le courrier des lecteurs du magazine Le Fil des idées. Pour chaque phrase de l’article cité, demande-toi si elle explique ou si elle justifie. « Madame, votre article sur la fermeture de la piscine municipale m’a déçu. Vous écrivez que la mairie l’a fermée parce que les réparations coûtaient trop cher : c’est exact, et cela explique sa décision. Mais vous ajoutez que cette fermeture était « la seule décision raisonnable ». Là, vous ne l’expliquez plus : vous la justifiez, et vous prenez parti. Un journaliste peut rendre compte des causes d’une décision ; il n’a pas à la défendre. Je vous saurais gré, à l’avenir, de séparer les deux. » Robert Lemieux, Trois-Rivières.';

export const TEXTE_A3 =
  'Une brève de Radio Rivière-Haute. Trouve la cause, la raison invoquée et ce que certains appellent un prétexte. « Panne générale à Sainte-Aube-du-Lac mardi soir : selon le distributeur, la cause en est un transformateur frappé par la foudre. Le courant est revenu vers minuit. Le conseil municipal, qui devait se réunir à vingt heures, a reporté sa séance. Le maire a invoqué la panne ; plusieurs élus de l’opposition y voient un simple prétexte, car l’ordre du jour comportait le vote, très contesté, du nouveau budget. Interrogée sur les raisons réelles de ce report, la mairie n’a pas répondu. La séance aura lieu jeudi. »';

export const TEXTE_A4 =
  'Sur un forum d’amis des animaux. Pour chaque phrase, demande-toi : savoir, ou croire ? « Lou : Je sais que les chats voient dans le noir complet : le mien trouve sa gamelle en pleine nuit. Karim : Tu le crois, mais tu ne le sais pas. Ton chat voit très bien quand il y a peu de lumière, et c’est déjà beaucoup ; dans le noir absolu, aucun œil ne voit, le sien non plus. Pour trouver sa gamelle, il a aussi son odorat et sa mémoire des lieux. Lou : Donc j’avais une croyance, pas une connaissance. Karim : Une croyance fausse, oui, mais raisonnable : tu avais une observation, il te manquait une explication. »';

export const TEXTE_A5 =
  'Un billet du blog « Pensées de quai », écrit à Genève. Repère ce qui est présenté comme nécessaire, et ce qui est contingent. « On me demande souvent si ma rencontre avec Paul « était écrite ». Je réponds que non. Nous avons pris le même train un mardi de novembre parce que le mien avait été annulé : rien de plus fortuit. Elle aurait pu ne jamais avoir lieu, et c’est justement ce qui me la rend précieuse. Ce qui, en revanche, n’avait rien de contingent à mes yeux, c’est la suite : deux personnes qui se parlent trois heures, qui se rappellent et qui se revoient finissent forcément par se connaître. Le hasard ouvre la porte ; c’est nous qui entrons. » Noémie';

export const TEXTE_A6 =
  'Une offre d’emploi affichée à Liège. Classe chaque exigence : condition nécessaire, ou simple atout. « La librairie Le Grand Tilleul recherche un ou une libraire à mi-temps. Le permis de conduire est indispensable : les livraisons aux écoles font partie du poste. Une expérience en librairie est un atout, sans être exigée. La maîtrise du néerlandais est souhaitée. Les candidatures sans lettre de motivation ne seront pas examinées. Attention : remplir toutes ces conditions ne garantit pas un entretien, car nous recevons beaucoup de candidatures. »';

export const TEXTE_A7 =
  'Une lettre de lecteur, dans le journal d’un quartier de Lyon. Trouve les prémisses, la conclusion, et la prémisse que l’auteur ne dit pas. « Le marché du samedi attire chaque semaine des centaines de visiteurs. Or, nous dit-on, ces visiteurs viennent presque tous en voiture. J’en conclus qu’il faut agrandir le parking de la place du marché : sans places, pas de visiteurs, et sans visiteurs, pas de marché. Certains proposent plutôt une navette ; c’est oublier que les gens veulent repartir avec leurs courses. » Albert Mauduit';

export const TEXTE_A8 =
  'Un prospectus glissé dans les boîtes aux lettres, à Lausanne. Trouve la pétition de principe et le cercle vicieux. « La méthode Parlavite est la meilleure méthode pour apprendre une langue. Pourquoi ? Parce qu’aucune autre méthode n’est aussi bonne. Nos élèves réussissent parce qu’ils sont motivés, et ils sont motivés parce qu’ils réussissent. Rejoignez-les : 94 % de nos élèves recommandent la méthode Parlavite à leurs amis (enquête menée auprès des élèves réinscrits pour une deuxième année). »';

export const TEXTE_A9 =
  'Un courriel de Hugo à son équipe, à Montréal. Pour chaque a priori, dis s’il veut dire « à première vue », « un préjugé » ou « avant l’expérience ». « Bonjour à tous, a priori, l’atelier de jeudi est maintenu ; je vous le confirme demain matin. J’ai lu vos commentaires sur le nouveau logiciel. Plusieurs d’entre vous ont des a priori contre lui sans l’avoir ouvert : je vous propose de l’essayer une semaine avant de juger. Nous verrons a posteriori s’il nous fait gagner du temps : pour le savoir, il faut l’expérience, pas un raisonnement. Bonne fin de journée, Hugo »';

export const TEXTE_A10 =
  'Dans le glossaire d’un musée, à Bruxelles. Repère les mots qui définissent, distinguent ou opposent. « Copie, réplique, faux. Au sens large, toute œuvre qui en reproduit une autre est une copie. Au sens strict, on distingue la réplique, réalisée par l’artiste ou sous sa direction, de la copie, réalisée par un autre. Le faux, lui, ne relève pas de l’histoire de l’art, mais du droit : ce qui le définit, ce n’est pas la ressemblance, c’est l’intention de tromper. On ne confondra donc pas une copie d’étude, signée par l’élève, avec un faux. »';

export const TEXTE_A11 =
  'Une dépêche du site d’information Le Relais du Nord. Trouve ce qui confirme, ce qui infirme et ce qui dément. « Le héron de la passerelle n’a pas été volé. Depuis samedi, une rumeur affirmait que la statue en bronze du héron, sur la passerelle des Moulins, avait disparu dans la nuit. La mairie a publié dimanche un démenti : la statue a été déposée pour restauration. Deux employés municipaux, interrogés séparément, corroborent cette version, et le bon de commande de l’atelier, que nous avons pu consulter, la confirme. Les auteurs de la rumeur n’ont apporté aucune preuve. La statue retrouvera sa place au printemps. »';
