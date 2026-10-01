// c1.07.l1 « Reformuler et conclure » — the authored corpus, the imports, the
// anchor texts and the citation constants. DRAFT, to
// B1-WORKSHOP-AND-VOCAB-SHAPES.md §1 (the workshop shape) on top of
// B1-BUILD-PLAYBOOK.md, with the C1 rules of C1-BUILD-LOG.md (« What is
// different at C1 », decisions 17 to 19, the wave 3 brief). Structural model:
// b2.22 (`../b2/style-academique-*`).
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
//   EXPERT DISCOURSE MARKERS AS A SYSTEM OF GESTURES: REFRAMING, ADDING,
//   REASONING FROM THE STRONGER CASE, AND CLOSING, CHOSEN BY REGISTER AND
//   NEVER STACKED (Paul's refocus, past b2.15 and b2.16).
//
//     act 1   a talk that goes round in circles (the problem); ONE recap
//             card of the lessons it builds on, by trail position
//     act 2   rectifying while moving on: ou plutôt, plus exactement, pour
//             mieux dire
//     act 3   saying what you mean and naming the case: j’entends par là, en
//             l’occurrence, à cet égard
//     act 4   the candid turn and the scaled-down claim: à vrai dire, loin
//             s’en faut
//     act 5   adding the argument that weighs: qui plus est, sans compter que
//     act 6   the argument in passing: d’ailleurs, du reste, au demeurant;
//             the stacking trap
//     act 7   from the stronger case: a fortiori, à plus forte raison
//     act 8   dès lors, temporal or causal; dès lors que
//     act 9   accepting the price and settling: quitte à, en tout état de
//             cause
//     act 10  closing a text: tout bien considéré, somme toute, en guise de
//             conclusion; one closure only
//     act 11  the contested markers (decision 17): du coup, au final, suite
//             à, en termes de, voire même, par contre, au niveau de;
//             recognise them in speech, choose the safe form in writing
//     act 12  the task: a spoken intervention rewritten, reframed and closed
//             (250 to 400 words)
//
//   NOT OWNED, CITED BY TRAIL POSITION ONLY (act 1 recaps, never re-teaches):
//     - « les leçons 30, 31 et 32 du B1 »: coordination (c’est-à-dire, bref,
//       en revanche, par ailleurs), subordination, concession; rows reused.
//     - « la leçon 15 du B2 »: cause and consequence, du coup's register
//       ladder (du coup familier; donc, c’est pourquoi, par conséquent).
//     - « la leçon 16 du B2 »: concession, certes… mais, il n’en reste pas
//       moins, malgré que named as contested in writing, par contre « surtout
//       oral » against en revanche.
//     - « la leçon 22 du B2 » acts 3-4 and 7: announcing a plan, the B2
//       written connectors (en outre, toutefois, néanmoins, or, ainsi),
//       reprises.
//     - « la leçon 26 du B2 » acts 4 and 10: reformulating in a meeting (si
//       je vous suis bien, autrement dit) and closing it (récapituler).
//     - « la leçon 5 du C1 » (c1.05, wave 2, publishes at gate C1-2) OWNS
//       reprise and reference chains: à cet égard is taught here as a
//       connector only; no reprise is taught.
//     - en somme, en définitive, pour conclure are PUBLISHED rows (B2) and
//       appear as known contrasts in act 10, never re-taught.
//     - c1.10 (unbuilt) will own transitions inside an essay plan: NO plan
//       transition (premièrement, passons à, dans un second temps) is taught
//       here, and c1.10 is never cited.
//
// ══════════════════════════════════════════════════════════════════════════
//  §A. MEASURED (Postgres read 2026-10-01 inside BEGIN TRANSACTION READ
//      ONLY … COMMIT, no SET; the local seed is a cut)
// ══════════════════════════════════════════════════════════════════════════
//
//  1. THEME `connecteurs-logiques`: range a2-c1 (widened at wave 3 setup),
//     sub-themes end with « reformuler et conclure ». Block 2600-2799 read
//     at 0 rows at every level on 2026-10-01.
//
//  2. ID BLOCK: this lesson owns `fr.c1.connecteurs-logiques.2600` to
//     `.2799` AND NOTHING ELSE. Used: .2600-.2731 (§G), 132 rows, no gaps.
//
//  3. REUSED ROWS (§F). The seed rows (B1 and B2 lessons, live) print
//     through `src()`. FOURTEEN are PUBLISHED IN POSTGRES BUT ABSENT FROM THE
//     SEED CUT, and ride in `DB_ONLY_ROWS` with fr / en / drills copied
//     verbatim from Postgres on 2026-10-01. Twelve are the HEADWORDS of
//     this lesson's NEW markers, which Postgres already holds (so this
//     corpus does not twin them): qui plus est, en l’occurrence, en tout
//     état de cause, a fortiori, à cet égard, sans compter que (all
//     `fr.sons.*`), d’ailleurs (a2), au demeurant, à vrai dire, quitte à,
//     tout bien considéré (b2), dès lors (`fr.sons.*`). Two are LEGACY c1
//     rows read before reuse (`fr.c1.discours-dexamen.005` « Tout bien
//     considéré… », `.051` « En guise de conclusion… »): both carry a
//     straight apostrophe (decision 13's typography edit applies at the
//     import) and drills {sentence, review}, so they are named, never
//     released and never spoken. `fr.c1.discours-dexamen.009` (« Somme
//     toute… », « au delà » unhyphenated) was read and NOT reused.
//
//  4. NO AUTHORED ROW TWINS A PUBLISHED ROW. Every `fr` was folded and
//     compared with all 62 786 Postgres rows (scratch check, 2026-10-01).
//     Headwords authored here because Postgres has none: plus exactement,
//     ou plutôt, pour mieux dire, j’entends par là, loin s’en faut, du
//     reste, à plus forte raison, somme toute, en guise de conclusion.
//
//  5. RESPELLINGS SPELLED FOR THE NASAL CHECKER RATHER THAN THE EAR. A real
//     /n/ or /m/ after a vowel is written double: semaine suh-MENN, somme
//     SOMM, comme KOMM, personne pehr-SONN, donne DONN, une ÜNN, reine,
//     prochaine pro-SHENN, Anne, aime EMM, scène SENN, domaine do-MENN,
//     moyenne, ancienne ahⁿ-SYENN, même MEMM where a checker reads EM.
//     Every doubled consonant is really pronounced. No U+203F tie anywhere.
//
//  6. THE ANCHOR TEXTS IN §I ARE ORIGINAL, WRITTEN FOR THE LESSON (« texte
//     original écrit pour la leçon »). Every person, place, outlet,
//     association and figure is invented: the town of Valbrune (its
//     quartier des Tanneurs, rue des Tanneurs, médiathèque, théâtre
//     municipal, halles, rue Haute, place du Puits, rue des Lilas, avenue
//     du Stade, square Vauban, parc Bellevue, hôpital Sainte-Claire, école
//     Jean-Rostand as a school NAME only), the co-op Les Tilleuls at
//     Saint-Aubin-des-Ormes, La Gazette de Valbrune, the podcasts Le
//     Strapontin and Fournées, the Régie des transports de Valbrune, the
//     associations Les Jardins de la Brune and the Association des
//     commerçants du centre-ville, the bakery co-op Le Levain; Léa Marchand,
//     Sami, Hélène Saunier, Simon Arnaud, Martine Lecomte, Bastien Royer,
//     Odette Ravel, Ahmed Saïdi, Noah Petit, Karim Haddad. No living
//     politician, no real campaign, no real current event.
//
//  7. FACT CHECK LIST (for the pre-review). Every factual claim about the
//     real world, and every norm verdict, made anywhere in this lesson.
//
//     NORM VERDICTS ON THE CONTESTED MARKERS (decision 17: « recognise,
//     don't write », b2.16's pattern; each verdict quoted EXACTLY, read in
//     the raw page on 2026-10-01):
//
//     a. DU COUP.
//        Académie (Dire, Ne pas dire, « Du coup au sens de De ce fait »,
//        https://dictionnaire-academie.fr/article/DNP0077): « On ne peut donc
//        pas employer systématiquement du coup, ainsi qu’on l’entend souvent,
//        en lieu et place de donc, de ce fait, ou par conséquent. On évitera
//        également de faire de du coup un simple adverbe de discours sans
//        sens particulier. »
//        OQLF: NO fiche found in the Vitrine linguistique (searched
//        2026-10-01); « du coup » is absent from its « Liste de charnières »
//        (https://vitrinelinguistique.oqlf.gouv.qc.ca/25159/la-redaction-et-la-communication/organisation-textuelle/liste-de-charnieres).
//        The lesson says so and gives no OQLF verdict.
//     b. AU FINAL.
//        Académie (Au final, 7 juin 2012,
//        https://www.academie-francaise.fr/au-final): « On fait de
//        l’adjectif Final un substantif dans la construction Au final,
//        grammaticalement fautive, qui se répand sans que rien la justifie. »
//        OQLF (BDL, « L’adverbe composé au final », 2018,
//        https://vitrinelinguistique.oqlf.gouv.qc.ca/25429/banque-de-depannage-linguistique/le-vocabulaire/expressions-et-tournures-particulieres/ladverbe-compose-au-final):
//        « Parce que l’adverbe composé au final n’est pas tout à fait neutre,
//        il est déconseillé en langue standard ou soutenue, notamment à
//        l’écrit. » and « dans des situations de communication informelles,
//        notamment à l’oral, l’emploi de l’adverbe passe le plus souvent
//        inaperçu. »
//     c. SUITE À.
//        Académie (Dictionnaire, 9e édition, « suite », remarque,
//        https://dictionnaire-academie.fr/article/A9S3337): « La locution
//        abrégée Suite à est à réserver au domaine de la langue commerciale
//        et administrative. »
//        OQLF (BDL, « Emploi de suite à »,
//        https://vitrinelinguistique.oqlf.gouv.qc.ca/24017/banque-de-depannage-linguistique/le-vocabulaire/question-de-registre/emploi-de-suite-a):
//        « Comme formule d’introduction, au sens de « pour faire suite à »,
//        l’emploi de la préposition composée suite à est acceptable dans la
//        correspondance commerciale ou administrative. Dans d’autres types
//        d’écrits, suite à fait encore parfois l’objet de réserves […].
//        Enfin, pour exprimer la cause ou la temporalité, suite à est
//        déconseillée. »
//     d. EN TERMES DE.
//        Académie (En termes de, 3 janvier 2013,
//        https://www.academie-francaise.fr/en-termes-de): « En termes de, au
//        sens de « en matière de, quant à, pour ce qui est de, du point de
//        vue de », est un anglicisme à proscrire. »
//        OQLF (BDL, « Emploi de la locution en termes de »,
//        https://vitrinelinguistique.oqlf.gouv.qc.ca/23438/banque-de-depannage-linguistique/le-vocabulaire/expressions-et-tournures-particulieres/emploi-de-la-locution-en-termes-de):
//        « On ne saurait donc le déconseiller, du moins dans la langue
//        courante. Dans la langue soignée, on pourra, au besoin, lui préférer
//        d’autres expressions ». THE TWO DIFFER.
//     e. VOIRE MÊME.
//        Académie (Dictionnaire, 9e édition, « voire »,
//        https://www.dictionnaire-academie.fr/article/A9V1095): « Renforcé par
//        Même. Ce remède est inutile, voire même néfaste. » (recorded without
//        any warning).
//        OQLF (BDL, « Le pléonasme voire même »,
//        https://vitrinelinguistique.oqlf.gouv.qc.ca/22142/le-vocabulaire/pleonasmes/le-pleonasme-voire-meme):
//        « Voire même constitue un pléonasme qu’il convient de remplacer par
//        diverses formulations moins redondantes, surtout dans la langue
//        soignée. » THE TWO DIFFER.
//     f. PAR CONTRE.
//        Académie (Dictionnaire, 9e édition, « contre », remarque,
//        https://dictionnaire-academie.fr/article/A9C3899): « Elle ne peut donc
//        être considérée comme fautive, mais l’usage s’est établi de la
//        déconseiller, chaque fois que l’emploi d’un autre adverbe est
//        possible. »
//        OQLF (BDL, « L’adverbe par contre »,
//        https://vitrinelinguistique.oqlf.gouv.qc.ca/24258/la-grammaire/ladverbe/ladverbe-par-contre):
//        « Aujourd’hui, l’adverbe composé par contre est tout à fait correct,
//        et ce, même si quelques grammairiens continuent de le critiquer. »
//        THE TWO DIFFER. b2.16 already rules it « correct, surtout oral ; certains le
//        critiquent à l’écrit »: this lesson does not contradict it.
//     g. AU NIVEAU DE.
//        Académie (Au niveau de, 6 octobre 2011,
//        https://www.academie-francaise.fr/au-niveau-de): « Cette locution,
//        signifiant « à la hauteur de », décrit la position dans l’espace de
//        deux choses l’une par rapport à l’autre. » followed by « On ne dit
//        pas » Au niveau de l’horaire / Au niveau du salaire / Au niveau du
//        style.
//        OQLF (BDL, « Emploi de au niveau de »,
//        https://vitrinelinguistique.oqlf.gouv.qc.ca/22916/le-vocabulaire/tours-dhorizon-et-autres-explications/usages/emploi-de-au-niveau-de):
//        « La formule au niveau de est parfois surutilisée, là où en ce qui
//        concerne ou sur le plan de conviendrait mieux. »
//
//     THE LESSON'S OWN RULINGS (to check against Le Robert, TLFi, Grevisse):
//     h. ou plutôt REPLACES the first word; plus exactement NARROWS a first
//        statement that was true but vague; pour mieux dire (soutenu) swaps
//        in a more apt or stronger word. (act 2)
//     i. en l’occurrence designates the actual case at hand (« dans le cas
//        présent »), not one example among others. (act 3)
//     j. loin s’en faut reinforces a negative or restrictive statement (pas,
//        peu, tout n’est pas); after a plainly positive one it contradicts
//        it. (act 4)
//     k. sans compter que takes the indicative; sans compter + noun also
//        exists. (act 5)
//     l. au demeurant, soutenu, « au reste, tout bien considéré », often
//        after a reservation (« un peu austère, au demeurant fort utile »).
//        du reste, soutenu, close to d’ailleurs. (act 6)
//     m. a fortiori / à plus forte raison argue from the case where the
//        claim is LESS expected to the case where it is MORE expected;
//        « a fortiori » is written without an accent. (act 7)
//     n. dès lors: temporal (« à partir de ce moment ») in a narrative,
//        often with a causal shade; causal (« par conséquent, dans ces
//        conditions ») in an argument. dès lors que today mostly causal
//        (« du moment que, puisque »); the hedge « mostly » is deliberate.
//        (act 8)
//     o. quitte à + infinitive, « au risque de, en acceptant de »; the spoken
//        pattern « Quitte à + inf., autant + inf. ». en tout état de cause,
//        soutenu, « quoi qu’il en soit, en tout cas ». (act 9)
//     p. tout bien considéré gives a verdict after weighing; somme toute
//        sums up, often to relativise (« somme toute limité »); en guise de
//        conclusion announces a closing remark (literally « by way of »).
//        (act 10)
//
//     QUOTATIONS: none. No literary or press extract; every text and line
//     is original. Every figure is invented and internal to the lesson.
//
//  8. APOSTROPHES: every authored French string uses the typographic ’.
//     The seed rows and DB_ONLY_ROWS that carry a straight ' (c’est-à-dire,
//     d’ailleurs, en l’occurrence, malgré que…, the two legacy c1 rows) are
//     NEVER quoted inside the scenario (app check « mixedApostrophes »).
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
  id: 'c1.07',
  seq: 7,
  title: 'Reframing and Concluding',
  sub: 'Reformuler et conclure',
  canDo: 'Can steer a long text or talk with expert discourse markers: correct and narrow a statement while moving on, say what a word means here and name the actual case, add the argument that weighs, argue from the stronger case, read dès lors in time or in logic, accept a cost, close with one marker chosen by register, recognise the contested markers of speech and write their safe equivalents',
  prereqUnitIds: ['b1.30', 'b1.31', 'b1.32', 'b2.15', 'b2.16', 'b2.22', 'b2.26'],
} as const;

export const LESSON_ID = 'c1.07.l1';
export const THEME = 'connecteurs-logiques';
export const LEVEL = 'c1' as const;

/** ONE block, by the brief. */
export const ID_RANGES = [[2600, 2799]] as const;

export const E = (n: number) => `fr.${LEVEL}.${THEME}.${String(n).padStart(3, '0')}`;

/* ══════════════════════════════════════════════════════════════════════════
 *  §C. HOW THIS LESSON NAMES ITS NEIGHBOURS
 *
 *  B1 and B2 units are in the seed, with their `seq`; C1 units of later
 *  waves are not yet, so their positions come from the plan. Never a raw id
 *  on screen, always « la leçon N du B1 / B2 / C1 ».
 * ══════════════════════════════════════════════════════════════════════════ */

type SeedUnit = { id: string; seq: number | string };
const SEQ = new Map((seed.units as unknown as SeedUnit[]).map((u) => [u.id, Number(u.seq)]));

/** TODO(import): drop once the c1 units are rows in `content_units`. */
const C1_SEQ_FROM_PLAN: Record<string, number> = { 'c1.05': 5, 'c1.07': 7, 'c1.08': 8 };

export function refFr(unitId: string): string {
  const band = unitId.slice(0, 2);
  if (band === 'b1' || band === 'b2') {
    const n = SEQ.get(unitId);
    if (!n) throw new Error(`c1.07: ${unitId} is not in the seed`);
    return `la leçon ${n} du ${band.toUpperCase()}`;
  }
  const planned = C1_SEQ_FROM_PLAN[unitId];
  return planned ? `la leçon ${planned} du C1` : unitRef(unitId);
}

export const COORD_UNIT = 'b1.30';
export const SUBORD_UNIT = 'b1.31';
export const CONCESSION_UNIT = 'b1.32';
export const CAUSE_UNIT = 'b2.15';
export const CONCESSION2_UNIT = 'b2.16';
export const ACADEMIQUE_UNIT = 'b2.22';
export const REUNION_UNIT = 'b2.26';
export const REPRISE_UNIT = 'c1.05';
export const PERSUADER_UNIT = 'c1.08';

export const CAUSE_REF = refFr(CAUSE_UNIT);
export const CONCESSION2_REF = refFr(CONCESSION2_UNIT);
export const ACADEMIQUE_REF = refFr(ACADEMIQUE_UNIT);
export const REUNION_REF = refFr(REUNION_UNIT);
export const REPRISE_REF = refFr(REPRISE_UNIT);
export const PERSUADER_REF = refFr(PERSUADER_UNIT);
/** b1.30, b1.31, b1.32 in one phrase, checked against the seed. */
export const CONNECTEURS_B1_REF = (() => {
  const n = [COORD_UNIT, SUBORD_UNIT, CONCESSION_UNIT].map((u) => SEQ.get(u));
  if (n.some((x) => !x)) throw new Error('c1.07: a B1 connector lesson is not in the seed');
  return `les leçons ${n[0]}, ${n[1]} et ${n[2]} du B1`;
})();

/* ══════════════════════════════════════════════════════════════════════════
 *  §D. THE QUOTATIONS, IMPORTED (never retyped)
 * ══════════════════════════════════════════════════════════════════════════ */

export { REFRAME as B130_REFRAME } from '../b1/coordination-corpus.ts';
export { REFRAME as B215_REFRAME } from '../b2/cause-consequence-corpus.ts';
export { REFRAME as B216_REFRAME } from '../b2/concession-avancee-corpus.ts';
export { REFRAME as B222_REFRAME } from '../b2/style-academique-corpus.ts';
export { REFRAME as B226_REFRAME } from '../b2/reunions-negociation-corpus.ts';

/* ══════════════════════════════════════════════════════════════════════════
 *  §E. THE REFRAME AND THE ONE METAPHOR
 *
 *  THE CONDUCTOR'S GESTURE. A conductor does not play: each movement of the
 *  hand tells the orchestra what happens next (hold, sharpen, swell, stop).
 *  A discourse marker does the same for a reader: it announces what the
 *  writer is about to do with the idea (refine it, add to it, push it to
 *  the stronger case, close it). Two gestures at once and the orchestra
 *  does not know which to follow: the stacking trap. The contested markers
 *  are the gestures of rehearsal, fine in the room, risky on the night.
 *
 *  It is NOT « the more markers, the better the text »: acts 6, 10 and 11
 *  mark stacked and empty markers down.
 * ══════════════════════════════════════════════════════════════════════════ */

export const REFRAME = 'Chaque marqueur est un geste : préciser, ajouter ou conclure. Un geste à la fois.';
export const REFRAME_EN = 'Every marker is a gesture: refine, add or conclude. One gesture at a time.';

export const REFRAME_REJECTED: readonly { text: string; why: string }[] = [
  {
    text: 'Un bon texte soutenu est plein de connecteurs.',
    why: 'False where acts 6, 10 and 11 have to hold: « Bref, en somme, au final » is three markers and no gesture, and a marker with the wrong relation breaks the thread more than none (b2.22).',
  },
  {
    text: 'Du coup, au final et par contre sont des fautes.',
    why: 'False and contrary to decision 17: in speech they are ordinary French, and the Académie and the OQLF disagree on several (en termes de, voire même, par contre). The lesson teaches « recognise, choose in writing », never « wrong ».',
  },
  {
    text: 'Reformuler, c’est dire la même chose autrement.',
    why: 'That is b1.30’s c’est-à-dire and b2.26’s autrement dit. At C1 a reformulation MOVES the idea: ou plutôt replaces, plus exactement narrows, pour mieux dire upgrades. Saying the same thing twice is what the act 1 draft does wrong.',
  },
  {
    text: 'Conclure, c’est résumer.',
    why: 'Too narrow for act 10: tout bien considéré weighs and decides, somme toute relativises, en guise de conclusion opens a final remark. A summary that decides nothing is the act 1 ending (« Voilà, c’est tout »).',
  },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §F. THE IMPORTS, BY ACT
 *
 *  Every id was read from Postgres on 2026-10-01 and, where present, from
 *  seedPlusPacks(); its French is in the trailing comment.
 * ══════════════════════════════════════════════════════════════════════════ */

export const IMPORTED = {
  act1: [
    'fr.b1.connecteurs-logiques.1135',            // c'est-à-dire  (lesson 30 in B1)
    'fr.b1.connecteurs-logiques.1205',            // Comme il neigeait, le bureau a fermé à midi.  (lesson 31 in B1)
    'fr.b1.connecteurs-logiques.1573',            // Certes, le projet coûte cher, mais il profite à tout le monde.  (lesson 32 in B1)
    'fr.b2.connecteurs-logiques.1904',            // On a raté le dernier métro, du coup on est rentrés à pied.  (lesson 15 in B2)
    'fr.b2.connecteurs-logiques.2140',            // Malgré le fait que prend l'indicatif ou le subjonctif ; malgré que reste critiqué à l'écrit.  (lesson 16 in B2; flashcard, review)
    'fr.b2.universite.1032',                      // Nous examinerons en premier lieu les avantages de l'ordinateur.  (lesson 22 in B2)
    'fr.b2.affaires.1264',                        // autrement dit  (lesson 26 in B2)
    'fr.b2.affaires.1362',                        // Nous arrivons à la fin ; je vous propose de récapituler.  (lesson 26 in B2)
  ],
  act2: [] as string[],
  act3: [
    'fr.sons.mots-de-liaison.072',                // en l'occurrence  (Postgres only)
    'fr.sons.mots-de-liaison.071',                // à cet égard  (Postgres only)
  ],
  act4: [
    'fr.b2.opinions-et-avis.044',                 // à vrai dire  (Postgres only)
  ],
  act5: [
    'fr.sons.mots-de-liaison.067',                // qui plus est  (Postgres only)
    'fr.sons.mots-de-liaison.068',                // sans compter que  (Postgres only)
  ],
  act6: [
    'fr.a2.expressions-frequentes.105',           // d'ailleurs  (Postgres only)
    'fr.b2.connecteurs-logiques.046',             // au demeurant  (Postgres only)
  ],
  act7: [
    'fr.sons.mots-de-liaison.085',                // a fortiori  (Postgres only)
  ],
  act8: [
    'fr.sons.adverbes-essentiels.121',            // dès lors  (Postgres only)
  ],
  act9: [
    'fr.b2.conseils-et-suggestions.043',          // quitte à  (Postgres only)
    'fr.sons.mots-de-liaison.088',                // en tout état de cause  (Postgres only)
  ],
  act10: [
    'fr.b2.opinions-et-avis.048',                 // tout bien considéré  (Postgres only)
    'fr.b2.opinions-et-avis.1780',                // en somme  (known contrast)
    'fr.b2.opinions-et-avis.1729',                // en définitive  (known contrast)
    'fr.c1.discours-dexamen.005',                 // Tout bien considéré, les bénéfices du bilinguisme dépassent largement les contraintes qu'il impose.  (legacy, Postgres only, named only)
    'fr.c1.discours-dexamen.051',                 // En guise de conclusion, j'insisterai sur la dimension humaine de ce dossier.  (legacy, Postgres only, named only)
  ],
  act11: [
    'fr.b1.strategies-de-comprehension.1303',     // du coup  (so, as a result (spoken))
    'fr.b2.connecteurs-logiques.2175',            // Le loyer est élevé ; par contre, les charges sont comprises.  (lesson 16 in B2)
  ],
  act12: [] as string[],
};

export const IMPORT_IDS = [...new Set(Object.values(IMPORTED).flat())];

/** Published in Postgres, absent from the local seed cut: fr / en / drills
 *  copied verbatim on 2026-10-01, so `src()` can print them. */
export const DB_ONLY_ROWS: { id: string; fr: string; en: string; drills: string[] }[] = [
  { id: 'fr.sons.mots-de-liaison.072', fr: "en l'occurrence", en: 'in this case; as it happens', drills: ['flashcard', 'voiceflash'] },
  { id: 'fr.sons.mots-de-liaison.071', fr: 'à cet égard', en: 'in this regard', drills: ['flashcard', 'voiceflash'] },
  { id: 'fr.b2.opinions-et-avis.044', fr: 'à vrai dire', en: 'to tell the truth', drills: ['flashcard', 'voiceflash'] },
  { id: 'fr.sons.mots-de-liaison.067', fr: 'qui plus est', en: 'what is more', drills: ['flashcard', 'voiceflash'] },
  { id: 'fr.sons.mots-de-liaison.068', fr: 'sans compter que', en: 'not to mention that', drills: ['flashcard', 'voiceflash'] },
  { id: 'fr.a2.expressions-frequentes.105', fr: "d'ailleurs", en: 'besides, moreover', drills: ['flashcard', 'voiceflash'] },
  { id: 'fr.b2.connecteurs-logiques.046', fr: 'au demeurant', en: 'that said, moreover', drills: ['flashcard', 'voiceflash'] },
  { id: 'fr.sons.mots-de-liaison.085', fr: 'a fortiori', en: 'all the more so', drills: ['flashcard', 'voiceflash'] },
  { id: 'fr.sons.adverbes-essentiels.121', fr: 'dès lors', en: 'from then on, from that point', drills: ['flashcard', 'voiceflash'] },
  { id: 'fr.b2.conseils-et-suggestions.043', fr: 'quitte à', en: 'even if it means', drills: ['flashcard', 'voiceflash'] },
  { id: 'fr.sons.mots-de-liaison.088', fr: 'en tout état de cause', en: 'in any case; whatever happens', drills: ['flashcard', 'voiceflash'] },
  { id: 'fr.b2.opinions-et-avis.048', fr: 'tout bien considéré', en: 'all things considered', drills: ['flashcard', 'voiceflash'] },
  { id: 'fr.c1.discours-dexamen.005', fr: "Tout bien considéré, les bénéfices du bilinguisme dépassent largement les contraintes qu'il impose.", en: 'All things considered, the benefits of bilingualism far outweigh the constraints it imposes.', drills: ['sentence', 'review'] },
  { id: 'fr.c1.discours-dexamen.051', fr: "En guise de conclusion, j'insisterai sur la dimension humaine de ce dossier.", en: 'By way of conclusion, I will insist on the human dimension of this issue.', drills: ['sentence', 'review'] },
];

/** No `flashcard` drill: nameable, never releasable. */
export const NOT_DECK_ABLE = [
  'fr.c1.discours-dexamen.005',                  // {sentence, review}
  'fr.c1.discours-dexamen.051',                  // {sentence, review}
];

/** No `voiceflash`: never in a `practice` speak section. */
export const NOT_SPEAKABLE = [
  ...NOT_DECK_ABLE,
  'fr.b2.connecteurs-logiques.2140',             // flashcard, review (a rule card)
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §G. THE AUTHORED ROWS, ONE BLOCK PER ACT
 *
 *  A WORKSHOP CORPUS HOLDS PHRASES THAT DO A JOB: the new markers where
 *  Postgres has no headword, sentences that show one gesture each, and one
 *  flashcard-only rule card per act (`rule()`). Rows that show a contested
 *  marker or a stacked line are RECOGNITION rows (`REC`): flashcard and
 *  review only, never spoken, never dictated.
 * ══════════════════════════════════════════════════════════════════════════ */

type Row = Item;

const FCVR = ['flashcard', 'voiceflash', 'review'] as Item['drills'];
const FCVDR = ['flashcard', 'voiceflash', 'dictation', 'review'] as Item['drills'];
const FC = ['flashcard'] as Item['drills'];
/** Recognised, never produced aloud: a contested marker heard in speech, or
 *  a stacked line shown as the problem. */
const REC = ['flashcard', 'review'] as Item['drills'];

const sent = (
  n: number, fr: string, en: string, ipa: string, respell: string, tags: string[],
  drills: Item['drills'] = FCVR, extra: Partial<Item> = {},
): Row => ({
  id: E(n), kind: 'sentence', level: LEVEL, theme: THEME, fr, en, ipa, respell,
  tags, drills, version: 1, grammarPoints: ['reformuler-conclure'], ...extra,
});

const phrase = (
  n: number, fr: string, en: string, ipa: string, respell: string, tags: string[],
  drills: Item['drills'] = FCVR, extra: Partial<Item> = {},
): Row => ({
  id: E(n), kind: 'phrase', level: LEVEL, theme: THEME, fr, en, ipa, respell,
  tags, drills, version: 1, ...extra,
});

/** A rule card: `prompt` is the situation, `fr` the move. */
const rule = (prompt: string, notes: string): Partial<Item> => ({ cardType: 'grammar', prompt, notes });

/* ── ACT 1 · LE DISCOURS QUI TOURNE EN ROND ─────────────────────────────── */

export const ACT1_ROWS: Row[] = [
  sent(2600, 'Du coup, au final, en fait, bref, je pense qu’il faut agir.', 'So, in the end, actually, anyway, I think we need to act.', '/dy ku o fi.nal ɑ̃ fɛt bʁɛf ʒə pɑ̃s kil fo a.ʒiʁ/', 'dü KOO | oh fee-NAL | ahⁿ FET | BREF | zhuh pahⁿss keel foh a-ZHEER', ['empilement', 'oral'], REC, { register: 'familier' }),
  sent(2601, 'Il faut agir, et plus exactement rouvrir la salle dès septembre.', 'We need to act, and more precisely reopen the hall from September.', '/il fo a.ʒiʁ e ply.zɛɡ.zak.tə.mɑ̃ ʁu.vʁiʁ la sal dɛ sɛp.tɑ̃bʁ/', 'eel foh a-ZHEER | ay plü-zeg-zak-tuh-MAHⁿ | roo-vreer la SAL | deh sep-TAHⁿBR', ['geste', 'preciser']),
  sent(2602, 'Un marqueur, un geste : je précise, j’ajoute ou je conclus.', 'One marker, one gesture: I refine, I add or I conclude.', '/œ̃ maʁ.kœʁ œ̃ ʒɛst ʒə pʁe.siz ʒa.ʒut u ʒə kɔ̃.kly/', 'uhⁿ mar-KUHR | uhⁿ ZHEST | zhuh pray-SEEZ | zha-ZHOOT | oo zhuh kohⁿ-KLÜ', ['geste'], FCVDR),
  sent(2603, REFRAME, REFRAME_EN, '/ʃak maʁ.kœʁ ɛ.tœ̃ ʒɛst pʁe.si.ze a.ʒu.te u kɔ̃.klyʁ œ̃ ʒɛst a la fwa/', 'shak mar-KUHR | eh-tuhⁿ ZHEST | pray-see-ZAY | a-zhoo-TAY | oo kohⁿ-KLÜR | uhⁿ ZHEST a la FWA', ['regle', 'geste'], FC,
    rule('Ton brouillon dit « du coup, au final, bref ». Que manque-t-il ?', 'Un geste clair. Chaque marqueur annonce ce que tu fais de ton idée : la préciser, y ajouter, ou la fermer. Un seul à la fois.')),
  sent(2604, 'Qu’est-ce que ce marqueur fait de mon idée ?', 'What does this marker do to my idea?', '/kɛs kə sə maʁ.kœʁ fɛ də mɔ̃.ni.de/', 'kess kuh suh mar-KUHR | feh duh moh-nee-DAY', ['question', 'geste']),
  sent(2605, 'Je ne répète pas mon idée : je la resserre.', 'I do not repeat my idea: I tighten it.', '/ʒə nə ʁe.pɛt pa mɔ̃.ni.de ʒə la ʁə.sɛʁ/', 'zhuh nuh ray-PET pa moh-nee-DAY | zhuh la ruh-SEHR', ['preciser']),
  sent(2606, 'À l’oral, ces petits mots passent ; à l’écrit, ils se voient.', 'In speech these little words slip by; in writing they show.', '/a lɔ.ʁal se pə.ti mo pas a le.kʁi il sə vwa/', 'a lo-RAL | say puh-tee MOH PASS | a lay-KREE | eel suh VWA', ['registre', 'conteste'], FCVDR),
  sent(2607, 'Je garde un marqueur par phrase, rarement deux.', 'I keep one marker per sentence, rarely two.', '/ʒə ɡaʁ.dœ̃ maʁ.kœʁ paʁ fʁaz ʁaʁ.mɑ̃ dø/', 'zhuh gar-DUHⁿ mar-KUHR par FRAHZ | rar-mahⁿ DEU', ['empilement']),
  sent(2608, 'Je finis sur une phrase qui ferme, pas sur une excuse.', 'I end on a sentence that closes, not on an apology.', '/ʒə fi.ni sy.ʁyn fʁaz ki fɛʁm pa sy.ʁy.nɛks.kyz/', 'zhuh fee-NEE sü-rünn FRAHZ kee FEHRM | pa sü-rü-neks-KÜZ', ['cloture']),
  sent(2609, 'Voilà, c’est tout, merci.', 'That’s it, that’s all, thank you.', '/vwa.la sɛ tu mɛʁ.si/', 'vwa-LA | seh TOO | mehr-SEE', ['cloture', 'oral'], REC, { register: 'familier' }),
];

/* ── ACT 2 · RECTIFIER EN AVANÇANT ──────────────────────────────────────── */

export const ACT2_ROWS: Row[] = [
  phrase(2610, 'plus exactement', 'more precisely', '/ply.zɛɡ.zak.tə.mɑ̃/', 'plü-zeg-zak-tuh-MAHⁿ', ['rectifier']),
  phrase(2611, 'ou plutôt', 'or rather', '/u ply.to/', 'oo plü-TOH', ['rectifier']),
  phrase(2612, 'pour mieux dire', 'to put it better, or rather (formal)', '/puʁ mjø diʁ/', 'poor myeu DEER', ['rectifier'], FCVR, { register: 'soutenu' }),
  sent(2613, 'Le public n’a pas diminué, ou plutôt il s’est déplacé.', 'The public has not shrunk, or rather it has moved.', '/lə py.blik na pa di.mi.nɥe u ply.to il sɛ de.pla.se/', 'luh pü-BLEEK | na pa dee-mee-NWAY | oo plü-TOH | eel seh day-pla-SAY', ['rectifier', 'remplacer'], FCVDR),
  sent(2614, 'Les étudiants viennent le soir, plus exactement entre dix-sept et vingt heures.', 'Students come in the evening, more precisely between five and eight.', '/le.ze.ty.djɑ̃ vjɛn lə swaʁ ply.zɛɡ.zak.tə.mɑ̃ ɑ̃.tʁə di.sɛt e vɛ̃.tœʁ/', 'lay-zay-tü-DYAHⁿ vyenn luh SWAR | plü-zeg-zak-tuh-MAHⁿ | ahⁿ-truh dee-SET ay vehⁿ-TUHR', ['rectifier', 'resserrer']),
  sent(2615, 'C’est un refuge, pour mieux dire une place publique couverte.', 'It is a refuge, or better put, a covered public square.', '/sɛ.tœ̃ ʁə.fyʒ puʁ mjø diʁ yn plas py.blik ku.vɛʁt/', 'seh-tuhⁿ ruh-FÜZH | poor myeu DEER | ünn PLASS pü-bleek koo-VEHRT', ['rectifier', 'mieux']),
  sent(2616, 'Ou plutôt remplace le premier mot ; plus exactement le resserre.', 'Ou plutôt replaces the first word; plus exactement narrows it.', '/u ply.to ʁɑ̃.plas lə pʁə.mje mo ply.zɛɡ.zak.tə.mɑ̃ lə ʁə.sɛʁ/', 'oo plü-TOH rahⁿ-PLASS luh pruh-myay MOH | plü-zeg-zak-tuh-MAHⁿ luh ruh-SEHR', ['regle', 'rectifier'], FC,
    rule('« Il est venu lundi, … lundi soir. » Ou plutôt, ou plus exactement ?', 'Plus exactement : lundi était vrai, lundi soir le resserre. Ou plutôt remplace un premier mot qui n’était pas juste : « lundi, ou plutôt mardi ».')),
  sent(2617, 'Je me corrige sans effacer : le premier mot reste visible.', 'I correct myself without erasing: the first word stays visible.', '/ʒə mə kɔ.ʁiʒ sɑ̃.ze.fa.se lə pʁə.mje mo ʁɛst vi.zibl/', 'zhuh muh ko-REEZH | sahⁿ-zay-fa-SAY | luh pruh-myay MOH | rest vee-ZEEBL', ['rectifier', 'methode'], FCVDR),
  sent(2618, 'Il est arrivé lundi, plus exactement lundi soir.', 'He arrived on Monday, more precisely Monday evening.', '/i.lɛ.ta.ʁi.ve lœ̃.di ply.zɛɡ.zak.tə.mɑ̃ lœ̃.di swaʁ/', 'ee-leh-ta-ree-VAY luhⁿ-DEE | plü-zeg-zak-tuh-MAHⁿ | luhⁿ-dee SWAR', ['resserrer']),
  sent(2619, 'Elle est partie en mai, ou plutôt début juin.', 'She left in May, or rather early June.', '/ɛ.lɛ paʁ.ti ɑ̃ mɛ u ply.to de.by ʒɥɛ̃/', 'eh-leh par-TEE ahⁿ MEH | oo plü-TOH | day-bü ZHWEHⁿ', ['remplacer']),
  sent(2620, 'Le projet coûte cher, plus exactement deux fois le budget prévu.', 'The project is expensive, more precisely twice the planned budget.', '/lə pʁɔ.ʒɛ kut ʃɛʁ ply.zɛɡ.zak.tə.mɑ̃ dø fwa lə byd.ʒɛ pʁe.vy/', 'luh pro-ZHEH koot SHEHR | plü-zeg-zak-tuh-MAHⁿ | deu FWA luh büd-zheh pray-VÜ', ['resserrer']),
  sent(2621, 'On ne lit pas moins, ou plutôt on lit autrement.', 'People do not read less, or rather they read differently.', '/ɔ̃ nə li pa mwɛ̃ u ply.to ɔ̃ li o.tʁə.mɑ̃/', 'ohⁿ nuh lee pa MWEHⁿ | oo plü-TOH | ohⁿ lee oh-truh-MAHⁿ', ['remplacer'], FCVDR),
  sent(2622, 'Il a été maladroit, pour mieux dire blessant.', 'He was clumsy, or rather, to put it better, hurtful.', '/i.la e.te ma.la.dʁwa puʁ mjø diʁ blɛ.sɑ̃/', 'ee-la ay-tay ma-la-DRWA | poor myeu DEER | bleh-SAHⁿ', ['mieux']),
];

/* ── ACT 3 · CE QUE J’ENTENDS PAR LÀ ────────────────────────────────────── */

export const ACT3_ROWS: Row[] = [
  phrase(2623, 'j’entends par là', 'by that I mean', '/ʒɑ̃.tɑ̃ paʁ la/', 'zhahⁿ-TAHⁿ par LA', ['preciser']),
  sent(2624, 'Je parle de sobriété ; j’entends par là garder nos appareils plus longtemps.', 'I am talking about restraint; by that I mean keeping our devices longer.', '/ʒə paʁl də sɔ.bʁi.je.te ʒɑ̃.tɑ̃ paʁ la ɡaʁ.de no.za.pa.ʁɛj ply lɔ̃.tɑ̃/', 'zhuh parl duh so-bree-yay-TAY | zhahⁿ-TAHⁿ par LA | gar-DAY noh-za-pa-REY | plü lohⁿ-TAHⁿ', ['preciser', 'definir'], FCVDR),
  sent(2625, 'Le responsable, en l’occurrence la mairie, n’a pas encore répondu.', 'The party responsible, in this case the town hall, has not replied yet.', '/lə ʁɛs.pɔ̃.sabl ɑ̃ lɔ.ky.ʁɑ̃s la mɛ.ʁi na pa.zɑ̃.kɔʁ ʁe.pɔ̃.dy/', 'luh ress-pohⁿ-SABL | ahⁿ lo-kü-RAHⁿSS la meh-REE | na pa-zahⁿ-kor ray-pohⁿ-DÜ', ['cas']),
  sent(2626, 'Le règlement prévoit une exception ; en l’occurrence, elle ne s’applique pas.', 'The rules provide for an exception; in this case, it does not apply.', '/lə ʁɛ.ɡlə.mɑ̃ pʁe.vwa y.nɛk.sɛp.sjɔ̃ ɑ̃ lɔ.ky.ʁɑ̃s ɛl nə sa.plik pa/', 'luh reh-gluh-MAHⁿ pray-VWA ü-nek-sep-SYOHⁿ | ahⁿ lo-kü-RAHⁿSS | el nuh sa-PLEEK PA', ['cas']),
  sent(2627, 'Le coût reste flou ; à cet égard, nous attendons le devis.', 'The cost is still unclear; in this respect, we are waiting for the quote.', '/lə ku ʁɛst flu a sɛ.te.ɡaʁ nu.za.tɑ̃.dɔ̃ lə də.vi/', 'luh KOO rest FLOO | a seh-tay-GAR | noo-za-tahⁿ-DOHⁿ luh duh-VEE', ['egard']),
  sent(2628, 'En l’occurrence désigne le cas réel ; par exemple n’en donne qu’un parmi d’autres.', 'En l’occurrence names the actual case; par exemple gives just one among others.', '/ɑ̃ lɔ.ky.ʁɑ̃s de.ziɲ lə ka ʁe.ɛl paʁ ɛɡ.zɑ̃pl nɑ̃ dɔn kœ̃ paʁ.mi do.tʁ/', 'ahⁿ lo-kü-RAHⁿSS day-ZEENY luh ka ray-EL | par eg-ZAHⁿPL nahⁿ donn kuhⁿ par-mee DOHTR', ['regle', 'cas'], FC,
    rule('« Un appareil, … l’imprimante de 2016, sera réparé. » En l’occurrence ou par exemple ?', 'En l’occurrence : la note parle de cette imprimante-là, et d’aucune autre. Par exemple laisserait entendre que d’autres appareils seront réparés aussi.')),
  sent(2629, 'Quand je dis « durable », j’entends par là réparable.', 'When I say "sustainable", by that I mean repairable.', '/kɑ̃ ʒə di dy.ʁabl ʒɑ̃.tɑ̃ paʁ la ʁe.pa.ʁabl/', 'kahⁿ zhuh dee dü-RABL | zhahⁿ-TAHⁿ par LA | ray-pa-RABL', ['definir']),
  sent(2630, 'Le bâtiment, en l’occurrence l’ancienne gare, sera rénové l’an prochain.', 'The building, in this case the old station, will be renovated next year.', '/lə ba.ti.mɑ̃ ɑ̃ lɔ.ky.ʁɑ̃s lɑ̃.sjɛn ɡaʁ sə.ʁa ʁe.nɔ.ve lɑ̃ pʁɔ.ʃɛ̃/', 'luh ba-tee-MAHⁿ | ahⁿ lo-kü-RAHⁿSS lahⁿ-syenn GAR | suh-ra ray-no-VAY | lahⁿ pro-SHEHⁿ', ['cas'], FCVDR),
  sent(2631, 'J’entends par là annonce ma définition, pas celle du dictionnaire.', 'J’entends par là announces my definition, not the dictionary’s.', '/ʒɑ̃.tɑ̃ paʁ la a.nɔ̃s ma de.fi.ni.sjɔ̃ pa sɛl dy dik.sjɔ.nɛʁ/', 'zhahⁿ-TAHⁿ par LA a-NOHⁿSS ma day-fee-nee-SYOHⁿ | pa sel dü deek-syo-NEHR', ['definir', 'methode']),
  sent(2632, 'Sur ce point, à cet égard, rien n’est décidé.', 'On this point, in this respect, nothing is decided.', '/syʁ sə pwɛ̃ a sɛ.te.ɡaʁ ʁjɛ̃ nɛ de.si.de/', 'sür suh PWEHⁿ | a seh-tay-GAR | ryehⁿ neh day-see-DAY', ['egard', 'empilement'], REC),
  sent(2633, 'Les enfants adorent l’atelier ; à cet égard, l’essai est réussi.', 'The children love the workshop; in this respect, the trial is a success.', '/le.zɑ̃.fɑ̃ a.dɔʁ la.tə.lje a sɛ.te.ɡaʁ le.sɛ ɛ ʁe.y.si/', 'lay-zahⁿ-FAHⁿ a-DOR la-tuh-LYAY | a seh-tay-GAR | lay-SEH eh ray-ü-SEE', ['egard']),
];

/* ── ACT 4 · À VRAI DIRE, LOIN S’EN FAUT ────────────────────────────────── */

export const ACT4_ROWS: Row[] = [
  phrase(2634, 'loin s’en faut', 'far from it', '/lwɛ̃ sɑ̃ fo/', 'lwehⁿ sahⁿ FOH', ['vraidire', 'doser'], FCVR, { register: 'soutenu' }),
  sent(2635, 'À vrai dire, je m’attendais au pire.', 'To tell the truth, I was expecting the worst.', '/a vʁɛ diʁ ʒə ma.tɑ̃.dɛ o piʁ/', 'a vreh DEER | zhuh ma-tahⁿ-DEH oh PEER', ['vraidire'], FCVDR),
  sent(2636, 'Tout n’est pas réussi, loin s’en faut.', 'Not everything is a success, far from it.', '/tu nɛ pa ʁe.y.si lwɛ̃ sɑ̃ fo/', 'too neh pa ray-ü-SEE | lwehⁿ sahⁿ FOH', ['doser'], FCVDR),
  sent(2637, 'La salle n’est pas encore pleine, loin s’en faut.', 'The hall is not yet full, far from it.', '/la sal nɛ pa.zɑ̃.kɔʁ plɛn lwɛ̃ sɑ̃ fo/', 'la SAL neh pa-zahⁿ-kor PLENN | lwehⁿ sahⁿ FOH', ['doser']),
  sent(2638, 'À vrai dire, le problème n’est pas le son, c’est le prix.', 'Actually, the problem is not the sound, it is the price.', '/a vʁɛ diʁ lə pʁɔ.blɛm nɛ pa lə sɔ̃ sɛ lə pʁi/', 'a vreh DEER | luh pro-BLEMM neh pa luh SOHⁿ | seh luh PREE', ['vraidire']),
  sent(2639, 'Loin s’en faut renforce une négation ou une restriction.', 'Loin s’en faut strengthens a negative or a restriction.', '/lwɛ̃ sɑ̃ fo ʁɑ̃.fɔʁs y.ne.ɡa.sjɔ̃ u yn ʁɛs.tʁik.sjɔ̃/', 'lwehⁿ sahⁿ FOH rahⁿ-FORSS ü-nay-ga-SYOHⁿ | oo ünn ress-treek-SYOHⁿ', ['regle', 'doser'], FC,
    rule('« Le spectacle est réussi, loin s’en faut. » Que comprend le lecteur ?', 'Le contraire de ce que tu voulais dire : loin s’en faut renforce une phrase négative ou restrictive (« pas », « peu », « tout n’est pas »). Après un éloge, il le renverse.')),
  sent(2640, 'Bonsoir, et bienvenue dans Le Strapontin.', 'Good evening, and welcome to Le Strapontin.', '/bɔ̃.swaʁ e bjɛ̃.və.ny dɑ̃ lə stʁa.pɔ̃.tɛ̃/', 'bohⁿ-SWAR | ay byehⁿ-vuh-NÜ | dahⁿ luh stra-pohⁿ-TEHⁿ', ['podcast', 'theatre']),
  sent(2641, 'Ce soir, nous parlons du théâtre municipal rénové.', 'Tonight we are talking about the renovated municipal theatre.', '/sə swaʁ nu paʁ.lɔ̃ dy te.atʁ my.ni.si.pal ʁe.nɔ.ve/', 'suh SWAR | noo par-LOHⁿ | dü tay-ATR mü-nee-see-PAL ray-no-VAY', ['podcast', 'theatre']),
  sent(2642, 'À vrai dire, j’y allais sans grand enthousiasme.', 'To be frank, I went without much enthusiasm.', '/a vʁɛ diʁ ʒi a.lɛ sɑ̃ ɡʁɑ̃.tɑ̃.tu.zjasm/', 'a vreh DEER | zhee a-LEH | sahⁿ grahⁿ-tahⁿ-too-ZYASM', ['podcast', 'vraidire']),
  sent(2643, 'Le foyer est superbe, et la salle respire enfin.', 'The foyer is superb, and the auditorium can finally breathe.', '/lə fwa.je ɛ sy.pɛʁb e la sal ʁɛs.pi.ʁɑ̃.fɛ̃/', 'luh fwa-YAY eh sü-PEHRB | ay la SAL | ress-pee-rahⁿ-FEHⁿ', ['podcast', 'theatre']),
  sent(2644, 'Mais tout n’est pas réglé, loin s’en faut.', 'But not everything is sorted, far from it.', '/mɛ tu nɛ pa ʁe.ɡle lwɛ̃ sɑ̃ fo/', 'meh too neh pa ray-GLAY | lwehⁿ sahⁿ FOH', ['podcast', 'doser']),
  sent(2645, 'Du balcon, on entend mal les voix.', 'From the balcony, you can hardly hear the voices.', '/dy bal.kɔ̃ ɔ̃.nɑ̃.tɑ̃ mal le vwa/', 'dü bal-KOHⁿ | ohⁿ-nahⁿ-TAHⁿ MAL lay VWA', ['podcast', 'theatre']),
  sent(2646, 'Et les places de côté ne voient qu’une partie de la scène.', 'And the side seats only see part of the stage.', '/e le plas də ko.te nə vwa kyn paʁ.ti də la sɛn/', 'ay lay PLASS duh ko-TAY | nuh vwa künn par-TEE duh la SENN', ['podcast', 'theatre']),
  sent(2647, 'Allez-y quand même, mais choisissez bien votre place.', 'Go anyway, but choose your seat carefully.', '/a.le.zi kɑ̃ mɛm mɛ ʃwa.zi.se bjɛ̃ vɔtʁ plas/', 'a-lay-ZEE kahⁿ MEMM | meh shwa-zee-SAY byehⁿ votr PLASS', ['podcast', 'theatre']),
];

/* ── ACT 5 · AJOUTER L’ARGUMENT QUI PÈSE ────────────────────────────────── */

export const ACT5_ROWS: Row[] = [
  sent(2648, 'Le bus de nuit est utile ; qui plus est, il coûte peu.', 'The night bus is useful; what is more, it costs little.', '/lə bys də nɥi ɛ.ty.til ki ply.zɛ il kut pø/', 'luh BÜSS duh NWEE eh-tü-TEEL | kee plü-ZEH | eel koot PEU', ['ajout'], FCVDR),
  sent(2649, 'La ligne rassure les familles, sans compter qu’elle évite bien des trajets en voiture.', 'The line reassures families, not to mention that it saves many car journeys.', '/la liɲ ʁa.syʁ le fa.mij sɑ̃ kɔ̃.te kɛl e.vit bjɛ̃ de tʁa.ʒɛ ɑ̃ vwa.tyʁ/', 'la LEENY ra-SÜR lay fa-MEEY | sahⁿ kohⁿ-TAY kel ay-VEET | byehⁿ day tra-ZHEH ahⁿ vwa-TÜR', ['ajout']),
  sent(2650, 'Sans compter que les cafés du centre ferment plus tard.', 'Not to mention that the cafés in the centre close later.', '/sɑ̃ kɔ̃.te kə le ka.fe dy sɑ̃tʁ fɛʁm ply taʁ/', 'sahⁿ kohⁿ-TAY kuh lay ka-FAY dü SAHⁿTR | fehrm plü TAR', ['ajout', 'oral']),
  sent(2651, 'Qui plus est ajoute un argument, souvent plus fort que le précédent.', 'Qui plus est adds an argument, often stronger than the one before.', '/ki ply.zɛ a.ʒu.tœ̃.naʁ.ɡy.mɑ̃ su.vɑ̃ ply fɔʁ kə lə pʁe.se.dɑ̃/', 'kee plü-ZEH a-zhoo-tuhⁿ-nar-gü-MAHⁿ | soo-vahⁿ plü FOR kuh luh pray-say-DAHⁿ', ['regle', 'ajout'], FC,
    rule('Tu as deux arguments pour la ligne de nuit. Où places-tu « qui plus est » ?', 'Devant le second, et de préférence devant le plus fort : qui plus est ajoute, et laisse entendre que ce qui suit pèse davantage.')),
  sent(2652, 'Sans compter que se construit avec l’indicatif.', 'Sans compter que takes the indicative.', '/sɑ̃ kɔ̃.te kə sə kɔ̃s.tʁɥi a.vɛ.k lɛ̃.di.ka.tif/', 'sahⁿ kohⁿ-TAY KUH | suh kohⁿss-TRWEE | a-vek lehⁿ-dee-ka-TEEF', ['regle', 'ajout'], FC,
    rule('« …sans compter que la ligne (soit / est) rentable. » Quel mode ?', 'L’indicatif : « sans compter que la ligne est rentable ». Ne le confonds pas avec « sans que », qui demande le subjonctif.')),
  sent(2653, 'Le trajet est long, et qui plus est mal éclairé.', 'The route is long, and what is more poorly lit.', '/lə tʁa.ʒɛ ɛ lɔ̃ e ki ply.zɛ mal e.klɛ.ʁe/', 'luh tra-ZHEH eh LOHⁿ | ay kee plü-ZEH | mal ay-kleh-RAY', ['ajout']),
  sent(2654, 'L’essai a duré six mois, sans compter les deux mois d’étude.', 'The trial lasted six months, not counting the two months of study.', '/le.sɛ a dy.ʁe si mwa sɑ̃ kɔ̃.te le dø mwa de.tyd/', 'lay-SEH a dü-RAY see MWA | sahⁿ kohⁿ-TAY lay deu MWA day-TÜD', ['ajout', 'nom']),
  sent(2655, 'Ce service est fiable et, qui plus est, il arrive à l’heure.', 'This service is reliable and, what is more, it arrives on time.', '/sə sɛʁ.vis ɛ fjabl e ki ply.zɛ i.la.ʁi.va lœʁ/', 'suh sehr-VEESS eh FYABL | ay kee plü-ZEH | ee-la-ree-va LUHR', ['ajout'], FCVDR),
  sent(2656, 'Les serveurs en profitent, sans compter que les infirmières de nuit la prennent aussi.', 'Waiters benefit from it, not to mention that night nurses take it too.', '/le sɛʁ.vœʁ ɑ̃ pʁɔ.fit sɑ̃ kɔ̃.te kə le.zɛ̃.fiʁ.mjɛʁ də nɥi la pʁɛn o.si/', 'lay sehr-VUHR ahⁿ pro-FEET | sahⁿ kohⁿ-TAY kuh lay-zehⁿ-feer-MYEHR duh NWEE | la prenn oh-SEE', ['ajout']),
];

/* ── ACT 6 · L’ARGUMENT EN PASSANT ──────────────────────────────────────── */

export const ACT6_ROWS: Row[] = [
  phrase(2657, 'du reste', 'besides, moreover (formal)', '/dy ʁɛst/', 'dü REST', ['aparte'], FCVR, { register: 'soutenu' }),
  sent(2658, 'Je ne suis pas contre les écrans ; j’en utilise d’ailleurs un tous les jours.', 'I am not against screens; in fact I use one every day.', '/ʒə nə sɥi pa kɔ̃tʁ le.ze.kʁɑ̃ ʒɑ̃.ny.ti.liz da.jœʁ œ̃ tu le ʒuʁ/', 'zhuh nuh swee pa kohⁿtr lay-zay-KRAHⁿ | zhahⁿ-nü-tee-LEEZ da-YUHR | uhⁿ too lay ZHOOR', ['aparte'], FCVDR),
  sent(2659, 'Mes élèves retenaient mieux ce qu’ils écrivaient ; du reste, ils le disaient eux-mêmes.', 'My pupils remembered better what they wrote; besides, they said so themselves.', '/me.ze.lɛv ʁə.tə.nɛ mjø sə kil.ze.kʁi.vɛ dy ʁɛst il lə di.zɛ ø.mɛm/', 'may-zay-LEV ruh-tuh-NEH MYEU | suh keel-zay-kree-VEH | dü REST | eel luh dee-ZEH euh-MEMM', ['aparte']),
  sent(2660, 'La méthode est un peu austère, au demeurant fort bien conçue.', 'The method is a little austere, otherwise very well designed.', '/la me.tɔd ɛ.tœ̃ pø os.tɛʁ o də.mœ.ʁɑ̃ fɔʁ bjɛ̃ kɔ̃.sy/', 'la may-TOD eh-tuhⁿ peu oss-TEHR | oh duh-muh-RAHⁿ | for byehⁿ kohⁿ-SÜ', ['aparte', 'reserve']),
  sent(2661, 'D’ailleurs ajoute une preuve en passant ; elle pèse autant que le reste.', 'D’ailleurs adds a proof in passing; it weighs as much as the rest.', '/da.jœʁ a.ʒut yn pʁœv ɑ̃ pa.sɑ̃ ɛl pɛz o.tɑ̃ kə lə ʁɛst/', 'da-YUHR a-ZHOOT ünn PRUHV ahⁿ pa-SAHⁿ | el pez oh-tahⁿ kuh luh REST', ['regle', 'aparte'], FC,
    rule('« Il a raison. D’ailleurs, les chiffres le confirment. » Que fait « d’ailleurs » ?', 'Il glisse une preuve de plus, comme en passant : le ton est léger, l’effet ne l’est pas. Du reste fait le même geste, en plus soutenu.')),
  sent(2662, 'D’ailleurs, du reste, et qui plus est : un seul suffit.', 'D’ailleurs, du reste, and qui plus est: one is enough.', '/da.jœʁ dy ʁɛst e ki ply.zɛ œ̃ sœl sy.fi/', 'da-YUHR | dü REST | ay kee plü-ZEH | uhⁿ SUHL sü-FEE', ['empilement'], FCVDR),
  sent(2663, 'L’essai était court ; il a d’ailleurs été prolongé.', 'The trial was short; it has in fact been extended.', '/le.sɛ e.tɛ kuʁ i.la da.jœʁ e.te pʁɔ.lɔ̃.ʒe/', 'lay-SEH ay-teh KOOR | ee-la da-YUHR | ay-tay pro-lohⁿ-ZHAY', ['aparte']),
  sent(2664, 'Ce débat n’est pas nouveau ; du reste, il revient à chaque rentrée.', 'This debate is not new; besides, it comes back every new school year.', '/sə de.ba nɛ pa nu.vo dy ʁɛst il ʁə.vjɛ̃ a ʃak ʁɑ̃.tʁe/', 'suh day-BA neh pa noo-VOH | dü REST | eel ruh-VYEHⁿ a shak rahⁿ-TRAY', ['aparte']),
  sent(2665, 'Un livre inégal, au demeurant passionnant.', 'An uneven book, otherwise gripping.', '/œ̃ livʁ i.ne.ɡal o də.mœ.ʁɑ̃ pa.sjɔ.nɑ̃/', 'uhⁿ LEEVR ee-nay-GAL | oh duh-muh-RAHⁿ | pa-syo-NAHⁿ', ['reserve']),
  sent(2666, 'D’ailleurs, tu as vu le message de la directrice ?', 'By the way, did you see the head teacher’s message?', '/da.jœʁ ty a vy lə me.saʒ də la di.ʁɛk.tʁis/', 'da-YUHR | tü a VÜ | luh may-SAZH duh la dee-rek-TREESS', ['aparte', 'oral']),
];

/* ── ACT 7 · DU CAS LE PLUS FORT ────────────────────────────────────────── */

export const ACT7_ROWS: Row[] = [
  phrase(2667, 'à plus forte raison', 'all the more so, even more so', '/a ply fɔʁt ʁɛ.zɔ̃/', 'a plü fort reh-ZOHⁿ', ['fortiori']),
  sent(2668, 'Si l’escalier fatigue un adulte en forme, il épuise a fortiori une personne âgée.', 'If the stairs tire a fit adult, they exhaust an elderly person all the more.', '/si lɛs.ka.lje fa.tiɡ œ̃.na.dylt ɑ̃ fɔʁm i.le.pɥiz a fɔʁ.sjɔ.ʁi yn pɛʁ.sɔn ɑ.ʒe/', 'see less-ka-LYAY fa-TEEG | uhⁿ-na-dült ahⁿ FORM | ee-lay-PWEEZ | a for-syo-REE | ünn pehr-SONN ah-ZHAY', ['fortiori'], FCVDR),
  sent(2669, 'Ces marches gênent les poussettes, et à plus forte raison les fauteuils roulants.', 'These steps hinder pushchairs, and even more so wheelchairs.', '/se maʁʃ ʒɛn le pu.sɛt e a ply fɔʁt ʁɛ.zɔ̃ le fo.tœj ʁu.lɑ̃/', 'say MARSH zhenn lay poo-SET | ay a plü fort reh-ZOHⁿ | lay foh-tuhy roo-LAHⁿ', ['fortiori']),
  sent(2670, 'A fortiori va du cas le moins attendu au cas le plus évident.', 'A fortiori goes from the least expected case to the most obvious one.', '/a fɔʁ.sjɔ.ʁi va dy ka lə mwɛ̃.za.tɑ̃.dy o ka lə ply.ze.vi.dɑ̃/', 'a for-syo-REE va dü KA | luh mwehⁿ-za-tahⁿ-DÜ | oh KA | luh plü-zay-vee-DAHⁿ', ['regle', 'fortiori'], FC,
    rule('« Si la rampe aide les cyclistes, elle aide a fortiori… » Qui vient ensuite ?', 'Le cas où c’est encore plus vrai : « les fauteuils roulants ». A fortiori part du cas où l’on s’y attend le moins et conclut au cas évident, jamais l’inverse.')),
  sent(2671, 'Si la rampe est utile en été, elle l’est a fortiori en hiver.', 'If the ramp is useful in summer, it is all the more so in winter.', '/si la ʁɑ̃p ɛ.ty.til ɑ̃.ne.te ɛl lɛ a fɔʁ.sjɔ.ʁi ɑ̃.ni.vɛʁ/', 'see la RAHⁿP eh-tü-TEEL ahⁿ-nay-TAY | el leh a for-syo-REE | ahⁿ-nee-VEHR', ['fortiori']),
  sent(2672, 'Personne ne lit ce panneau à pied, et à plus forte raison en voiture.', 'Nobody reads this sign on foot, and still less from a car.', '/pɛʁ.sɔn nə li sə pa.no a pje e a ply fɔʁt ʁɛ.zɔ̃ ɑ̃ vwa.tyʁ/', 'pehr-SONN nuh LEE suh pa-NOH a PYAY | ay a plü fort reh-ZOHⁿ | ahⁿ vwa-TÜR', ['fortiori', 'negation']),
  sent(2673, 'Il faut une rampe, à plus forte raison si l’école accueille des enfants en fauteuil.', 'A ramp is needed, all the more so if the school takes children in wheelchairs.', '/il fo yn ʁɑ̃p a ply fɔʁt ʁɛ.zɔ̃ si le.kɔl a.kœj de.zɑ̃.fɑ̃ ɑ̃ fo.tœj/', 'eel foh ünn RAHⁿP | a plü fort reh-ZOHⁿ | see lay-KOL a-KUHY | day-zahⁿ-FAHⁿ ahⁿ foh-TUHY', ['fortiori'], FCVDR),
  sent(2674, 'Si même les guides se perdent, à plus forte raison les visiteurs.', 'If even the guides get lost, then all the more so the visitors.', '/si mɛm le ɡid sə pɛʁd a ply fɔʁt ʁɛ.zɔ̃ le vi.zi.tœʁ/', 'see memm lay GEED suh PEHRD | a plü fort reh-ZOHⁿ | lay vee-zee-TUHR', ['fortiori']),
];

/* ── ACT 8 · DÈS LORS ───────────────────────────────────────────────────── */

export const ACT8_ROWS: Row[] = [
  sent(2675, 'Il a commencé à courir à trente ans ; dès lors, il n’a plus manqué un dimanche.', 'He took up running at thirty; from then on, he never missed a Sunday.', '/i.la kɔ.mɑ̃.se a ku.ʁiʁ a tʁɑ̃.tɑ̃ dɛ lɔʁ il na ply mɑ̃.ke œ̃ di.mɑ̃ʃ/', 'ee-la ko-mahⁿ-SAY a koo-REER a trahⁿ-TAHⁿ | deh LOR | eel na plü mahⁿ-KAY uhⁿ dee-MAHⁿSH', ['deslors', 'temps'], FCVDR),
  sent(2676, 'Les crédits ont été réduits ; dès lors, il faut choisir.', 'Funding has been cut; consequently, we have to choose.', '/le kʁe.di ɔ̃.te.te ʁe.dɥi dɛ lɔʁ il fo ʃwa.ziʁ/', 'lay kray-DEE | ohⁿ-tay-tay ray-DWEE | deh LOR | eel foh shwa-ZEER', ['deslors', 'cause'], FCVDR),
  sent(2677, 'Dès lors que le budget est voté, les travaux peuvent commencer.', 'Once the budget is voted, the works can begin.', '/dɛ lɔʁ kə lə byd.ʒɛ ɛ vɔ.te le tʁa.vo pœv kɔ.mɑ̃.se/', 'deh LOR kuh luh büd-ZHEH eh vo-TAY | lay tra-VOH puhv ko-mahⁿ-SAY', ['deslors', 'cause']),
  sent(2678, 'Dès lors : depuis ce moment, ou pour cette raison. Le contexte décide.', 'Dès lors: since that moment, or for that reason. The context decides.', '/dɛ lɔʁ də.pɥi sə mɔ.mɑ̃ u puʁ sɛt ʁɛ.zɔ̃ lə kɔ̃.tɛkst de.sid/', 'deh LOR | duh-pwee suh mo-MAHⁿ | oo poor set reh-ZOHⁿ | luh kohⁿ-TEKST day-SEED', ['regle', 'deslors'], FC,
    rule('« Le pont a ouvert en 1962 ; dès lors, le quartier a changé. » Temps ou cause ?', 'Surtout le temps : « à partir de ce moment ». Dans un récit daté, dès lors marque un départ, souvent avec une nuance de cause. Dans un raisonnement, il veut dire « par conséquent ».')),
  sent(2679, 'Dès lors que tu as signé, tu es engagé.', 'Since you have signed, you are committed.', '/dɛ lɔʁ kə ty a si.ɲe ty ɛ.zɑ̃.ɡa.ʒe/', 'deh LOR kuh tü a see-NYAY | tü eh-zahⁿ-ga-ZHAY', ['deslors', 'cause']),
  sent(2680, 'En 1974, la ville a fermé sa dernière ligne de tramway.', 'In 1974, the town closed its last tram line.', '/ɑ̃ mil nœf sɑ̃ swa.sɑ̃t.ka.tɔʁz la vil a fɛʁ.me sa dɛʁ.njɛʁ liɲ də tʁam.wɛ/', 'ahⁿ meel nuhf sahⁿ swa-sahⁿt-ka-TORZ | la VEEL a fehr-MAY | sa dehr-nyehr LEENY duh tramm-WEH', ['radio', 'tram']),
  sent(2681, 'Dès lors, les autobus ont pris toute la place.', 'From then on, buses took up all the space.', '/dɛ lɔʁ le.zo.to.bys ɔ̃ pʁi tut la plas/', 'deh LOR | lay-zo-to-BÜSS | ohⁿ pree toot la PLASS', ['radio', 'tram', 'temps']),
  sent(2682, 'Vingt ans plus tard, les rues du centre étaient saturées.', 'Twenty years later, the streets of the centre were jammed.', '/vɛ̃.tɑ̃ ply taʁ le ʁy dy sɑ̃tʁ e.tɛ sa.ty.ʁe/', 'vehⁿ-TAHⁿ plü TAR | lay RÜ dü SAHⁿTR | ay-teh sa-tü-RAY', ['radio', 'tram']),
  sent(2683, 'Le conseil a alors commandé une étude sur le retour du tram.', 'The council then commissioned a study on bringing back the tram.', '/lə kɔ̃.sɛj a a.lɔʁ kɔ.mɑ̃.de y.ne.tyd syʁ lə ʁə.tuʁ dy tʁam/', 'luh kohⁿ-SEY | a a-LOR ko-mahⁿ-DAY | ü-nay-TÜD | sür luh ruh-toor dü TRAMM', ['radio', 'tram']),
  sent(2684, 'L’étude a conclu que la ligne serait rentable.', 'The study concluded that the line would be profitable.', '/le.tyd a kɔ̃.kly kə la liɲ sə.ʁɛ ʁɑ̃.tabl/', 'lay-TÜD a kohⁿ-KLÜ | kuh la LEENY suh-reh rahⁿ-TABL', ['radio', 'tram']),
  sent(2685, 'Dès lors, il ne restait plus qu’à trouver le financement.', 'From that point, it only remained to find the funding.', '/dɛ lɔʁ il nə ʁɛs.tɛ ply ka tʁu.ve lə fi.nɑ̃s.mɑ̃/', 'deh LOR | eel nuh ress-TEH plü KA | troo-VAY luh fee-nahⁿss-MAHⁿ', ['radio', 'tram', 'cause']),
  sent(2686, 'Dès lors qu’un tiers des fonds était réuni, le chantier pouvait démarrer.', 'Once a third of the funds had been raised, the work could start.', '/dɛ lɔʁ kœ̃ tjɛʁ de fɔ̃ e.tɛ ʁe.y.ni lə ʃɑ̃.tje pu.vɛ de.ma.ʁe/', 'deh LOR kuhⁿ TYEHR day FOHⁿ | ay-teh ray-ü-NEE | luh shahⁿ-TYAY poo-VEH day-ma-RAY', ['radio', 'tram', 'cause']),
  sent(2687, 'La première rame a circulé en 2009.', 'The first train ran in 2009.', '/la pʁə.mjɛʁ ʁam a siʁ.ky.le ɑ̃ dø mil nœf/', 'la pruh-myehr RAMM | a seer-kü-LAY | ahⁿ deu meel NUHF', ['radio', 'tram']),
];

/* ── ACT 9 · ASSUMER LE PRIX, TRANCHER ──────────────────────────────────── */

export const ACT9_ROWS: Row[] = [
  sent(2688, 'Nous reportons la fête, quitte à décevoir quelques fidèles.', 'We are postponing the festival, even if it means disappointing a few regulars.', '/nu ʁə.pɔʁ.tɔ̃ la fɛt kit a de.sə.vwaʁ kɛl.kə fi.dɛl/', 'noo ruh-por-TOHⁿ la FET | keet a day-suh-VWAR | kel-kuh fee-DEL', ['quitte'], FCVDR),
  sent(2689, 'Quitte à attendre, autant attendre au chaud.', 'If we have to wait, we might as well wait somewhere warm.', '/kit a a.tɑ̃dʁ o.tɑ̃ a.tɑ̃dʁ o ʃo/', 'keet a a-TAHⁿDR | oh-TAHⁿ a-tahⁿdr oh SHOH', ['quitte', 'oral']),
  sent(2690, 'En tout état de cause, la décision sera prise avant juin.', 'In any case, the decision will be taken before June.', '/ɑ̃ tu.te.ta də koz la de.si.zjɔ̃ sə.ʁa pʁiz a.vɑ̃ ʒɥɛ̃/', 'ahⁿ too-tay-ta duh KOHZ | la day-see-ZYOHⁿ suh-ra PREEZ | a-vahⁿ ZHWEHⁿ', ['trancher'], FCVDR),
  sent(2691, 'Quitte à + infinitif : on accepte un prix pour obtenir mieux.', 'Quitte à + infinitive: you accept a cost to get something better.', '/kit a ɛ̃.fi.ni.tif ɔ̃.na.ksɛp.tœ̃ pʁi puʁ ɔp.tə.niʁ mjø/', 'keet a ehⁿ-fee-nee-TEEF | ohⁿ-nak-sep-tuhⁿ PREE | poor op-tuh-neer MYEU', ['regle', 'quitte'], FC,
    rule('« Je dis non tout de suite, … paraître sévère. » Quel marqueur ?', 'Quitte à : « quitte à paraître sévère ». Tu acceptes un prix, paraître sévère, pour obtenir mieux, une réponse claire. Il se construit avec l’infinitif.')),
  sent(2692, 'Je préfère dire non tout de suite, quitte à paraître sévère.', 'I prefer to say no straight away, even if I seem harsh.', '/ʒə pʁe.fɛʁ diʁ nɔ̃ tut sɥit kit a pa.ʁɛtʁ se.vɛʁ/', 'zhuh pray-FEHR deer NOHⁿ | toot SWEET | keet a pa-retr say-VEHR', ['quitte'], FCVDR),
  sent(2693, 'En tout état de cause, aucun bénévole ne tiendra seul un stand.', 'In any event, no volunteer will run a stall alone.', '/ɑ̃ tu.te.ta də koz o.kœ̃ be.ne.vɔl nə tjɛ̃.dʁa sœl œ̃ stɑ̃d/', 'ahⁿ too-tay-ta duh KOHZ | oh-kuhⁿ bay-nay-VOL | nuh tyehⁿ-dra SUHL uhⁿ STAHⁿD', ['trancher']),
  sent(2694, 'La date peut changer ; en tout état de cause, le lieu reste le même.', 'The date may change; whatever happens, the venue stays the same.', '/la dat pø ʃɑ̃.ʒe ɑ̃ tu.te.ta də koz lə ljø ʁɛst lə mɛm/', 'la DAT peu shahⁿ-ZHAY | ahⁿ too-tay-ta duh KOHZ | luh LYEU rest luh MEMM', ['trancher'], FCVDR),
  sent(2695, 'Quitte à refaire les plans, refaisons-les bien.', 'If we are going to redo the plans, let us do them properly.', '/kit a ʁə.fɛʁ le plɑ̃ ʁə.fə.zɔ̃ le bjɛ̃/', 'keet a ruh-FEHR lay PLAHⁿ | ruh-fuh-zohⁿ-lay BYEHⁿ', ['quitte']),
  sent(2696, 'En tout état de cause ferme le débat sur un point ferme.', 'En tout état de cause closes the debate on a firm point.', '/ɑ̃ tu.te.ta də koz fɛʁm lə de.ba sy.ʁœ̃ pwɛ̃ fɛʁm/', 'ahⁿ too-tay-ta duh KOHZ | fehrm luh day-BA | sü-ruhⁿ pwehⁿ FEHRM', ['trancher', 'methode']),
];

/* ── ACT 10 · FERMER LE TEXTE ───────────────────────────────────────────── */

export const ACT10_ROWS: Row[] = [
  phrase(2697, 'somme toute', 'all in all, when all is said and done', '/sɔm tut/', 'somm TOOT', ['cloture']),
  phrase(2698, 'en guise de conclusion', 'by way of conclusion', '/ɑ̃ ɡiz də kɔ̃.kly.zjɔ̃/', 'ahⁿ GEEZ duh kohⁿ-klü-ZYOHⁿ', ['cloture'], FCVR, { register: 'soutenu' }),
  sent(2699, 'Tout bien considéré, le projet mérite d’être poursuivi.', 'All things considered, the project deserves to be continued.', '/tu bjɛ̃ kɔ̃.si.de.ʁe lə pʁɔ.ʒɛ me.ʁit dɛtʁ puʁ.sɥi.vi/', 'too byehⁿ kohⁿ-see-day-RAY | luh pro-ZHEH may-REET | detr poor-swee-VEE', ['cloture', 'verdict'], FCVDR),
  sent(2700, 'Somme toute, l’essai a coûté peu et appris beaucoup.', 'All in all, the trial cost little and taught a lot.', '/sɔm tut le.sɛ a ku.te pø e a.pʁi bo.ku/', 'somm TOOT | lay-SEH a koo-TAY PEU | ay a-pree boh-KOO', ['cloture', 'relativiser']),
  sent(2701, 'En guise de conclusion, je voudrais revenir sur une question.', 'By way of conclusion, I would like to come back to one question.', '/ɑ̃ ɡiz də kɔ̃.kly.zjɔ̃ ʒə vu.dʁɛ ʁəv.niʁ sy.ʁyn kɛs.tjɔ̃/', 'ahⁿ GEEZ duh kohⁿ-klü-ZYOHⁿ | zhuh voo-DREH ruhv-NEER | sü-rünn kess-TYOHⁿ', ['cloture', 'annoncer']),
  sent(2702, 'Tout bien considéré tranche ; somme toute relativise.', 'Tout bien considéré decides; somme toute puts things in proportion.', '/tu bjɛ̃ kɔ̃.si.de.ʁe tʁɑ̃ʃ sɔm tut ʁə.la.ti.viz/', 'too byehⁿ kohⁿ-see-day-RAY TRAHⁿSH | somm TOOT ruh-la-tee-VEEZ', ['regle', 'cloture'], FC,
    rule('Ton rapport a pesé le pour et le contre. Comment ouvres-tu la phrase qui décide ?', 'Par « tout bien considéré » : il annonce un verdict après examen. « Somme toute » fait le compte et ramène souvent les choses à leur juste mesure (« somme toute limité »).')),
  sent(2703, 'Le retard, somme toute, n’a duré qu’une semaine.', 'The delay, all in all, lasted only a week.', '/lə ʁə.taʁ sɔm tut na dy.ʁe kyn sə.mɛn/', 'luh ruh-TAR | somm TOOT | na dü-RAY künn suh-MENN', ['relativiser']),
  sent(2704, 'Une seule clôture par texte : en somme ou somme toute, pas les deux.', 'One closing marker per text: en somme or somme toute, not both.', '/yn sœl klo.tyʁ paʁ tɛkst ɑ̃ sɔm u sɔm tut pa le dø/', 'ünn SUHL kloh-TÜR par TEKST | ahⁿ SOMM | oo somm TOOT | pa lay DEU', ['empilement', 'cloture'], FCVDR),
  sent(2705, 'Bref, en somme, pour conclure, au final, tout va bien.', 'Anyway, in short, to conclude, in the end, all is well.', '/bʁɛf ɑ̃ sɔm puʁ kɔ̃.klyʁ o fi.nal tu va bjɛ̃/', 'BREF | ahⁿ SOMM | poor kohⁿ-KLÜR | oh fee-NAL | too va BYEHⁿ', ['empilement', 'cloture'], REC, { register: 'familier' }),
  sent(2706, 'Tout bien considéré, nous recommandons de prolonger l’essai d’un an.', 'All things considered, we recommend extending the trial by a year.', '/tu bjɛ̃ kɔ̃.si.de.ʁe nu ʁə.kɔ.mɑ̃.dɔ̃ də pʁɔ.lɔ̃.ʒe le.sɛ dœ̃.nɑ̃/', 'too byehⁿ kohⁿ-see-day-RAY | noo ruh-ko-mahⁿ-DOHⁿ | duh pro-lohⁿ-ZHAY lay-SEH | duhⁿ-NAHⁿ', ['verdict']),
];

/* ── ACT 11 · LES MARQUEURS CONTESTÉS ───────────────────────────────────── */

export const ACT11_ROWS: Row[] = [
  sent(2707, 'Au final, on a gardé l’ancien logo.', 'In the end, we kept the old logo.', '/o fi.nal ɔ̃.na ɡaʁ.de lɑ̃.sjɛ̃ lo.ɡo/', 'oh fee-NAL | ohⁿ-na gar-DAY | lahⁿ-syehⁿ lo-GOH', ['conteste', 'oral'], REC, { register: 'familier' }),
  sent(2708, 'Suite à votre demande, nous vous adressons le formulaire.', 'Further to your request, we are sending you the form.', '/sɥi.t a vɔtʁ də.mɑ̃d nu vu.za.dʁɛ.sɔ̃ lə fɔʁ.my.lɛʁ/', 'SWEET a votr duh-MAHⁿD | noo voo-za-dreh-SOHⁿ | luh for-mü-LEHR', ['conteste', 'courrier']),
  sent(2709, 'En termes de budget, on est un peu justes.', 'In terms of budget, we are a bit tight.', '/ɑ̃ tɛʁm də byd.ʒɛ ɔ̃.nɛ.tœ̃ pø ʒyst/', 'ahⁿ TEHRM duh büd-ZHEH | ohⁿ-neh-tuhⁿ peu ZHÜST', ['conteste', 'oral'], REC, { register: 'familier' }),
  sent(2710, 'C’est difficile, voire même impossible.', 'It is difficult, or even impossible.', '/sɛ di.fi.sil vwaʁ mɛm ɛ̃.pɔ.sibl/', 'seh dee-fee-SEEL | vwar memm ehⁿ-po-SEEBL', ['conteste', 'oral'], REC),
  sent(2711, 'Au niveau des horaires, rien ne change.', 'As far as the timetable goes, nothing changes.', '/o ni.vo de.zɔ.ʁɛʁ ʁjɛ̃ nə ʃɑ̃ʒ/', 'oh nee-VOH day-zo-REHR | ryehⁿ nuh SHAHⁿZH', ['conteste', 'oral'], REC, { register: 'familier' }),
  sent(2712, 'Finalement, nous avons conservé l’ancien logo.', 'In the end, we kept the old logo.', '/fi.nal.mɑ̃ nu.za.vɔ̃ kɔ̃.sɛʁ.ve lɑ̃.sjɛ̃ lo.ɡo/', 'fee-nal-MAHⁿ | noo-za-vohⁿ kohⁿ-sehr-VAY | lahⁿ-syehⁿ lo-GOH', ['ecrit']),
  sent(2713, 'À la suite de la panne, le train a été supprimé.', 'Following the breakdown, the train was cancelled.', '/a la sɥit də la pan lə tʁɛ̃ a e.te sy.pʁi.me/', 'a la SWEET duh la PANN | luh TREHⁿ a ay-tay sü-pree-MAY', ['ecrit'], FCVDR),
  sent(2714, 'En matière de budget, la marge est étroite.', 'As regards the budget, the margin is narrow.', '/ɑ̃ ma.tjɛʁ də byd.ʒɛ la maʁʒ ɛ.te.tʁwat/', 'ahⁿ ma-TYEHR duh büd-ZHEH | la MARZH eh-tay-TRWAT', ['ecrit']),
  sent(2715, 'C’est difficile, voire impossible.', 'It is difficult, or even impossible.', '/sɛ di.fi.sil vwaʁ ɛ̃.pɔ.sibl/', 'seh dee-fee-SEEL | vwar ehⁿ-po-SEEBL', ['ecrit'], FCVDR),
  sent(2716, 'En ce qui concerne les horaires, rien ne change.', 'As regards the timetable, nothing changes.', '/ɑ̃ sə ki kɔ̃.sɛʁn le.zɔ.ʁɛʁ ʁjɛ̃ nə ʃɑ̃ʒ/', 'ahⁿ suh kee kohⁿ-SEHRN | lay-zo-REHR | ryehⁿ nuh SHAHⁿZH', ['ecrit']),
  sent(2717, 'En revanche, les tarifs ne changent pas.', 'On the other hand, the prices do not change.', '/ɑ̃ ʁə.vɑ̃ʃ le ta.ʁif nə ʃɑ̃ʒ pa/', 'ahⁿ ruh-VAHⁿSH | lay ta-REEF nuh shahⁿzh PA', ['ecrit']),
  sent(2718, 'À l’oral, je les reconnais ; dans mon texte écrit, je choisis la forme sûre.', 'In speech I recognise them; in my written text I choose the safe form.', '/a lɔ.ʁal ʒə le ʁə.kɔ.nɛ dɑ̃ mɔ̃ tɛkst e.kʁi ʒə ʃwa.zi la fɔʁm syʁ/', 'a lo-RAL | zhuh lay ruh-ko-NEH | dahⁿ mohⁿ TEKST ay-KREE | zhuh shwa-ZEE la form SÜR', ['regle', 'conteste'], FC,
    rule('Ton collègue dit « au final » en réunion. Est-ce une faute ?', 'Non : à l’oral, c’est du français courant, et les autorités ne s’accordent pas toutes. Dans ton texte écrit soutenu, choisis la forme que personne ne conteste : « finalement ».')),
  sent(2719, 'L’Académie et l’OQLF ne disent pas toujours la même chose.', 'The Académie and the OQLF do not always say the same thing.', '/la.ka.de.mi e lo.ky.ɛl.ɛf nə diz pa tu.ʒuʁ la mɛm ʃoz/', 'la-ka-day-MEE | ay loh-kü-el-EF | nuh deez pa too-ZHOOR | la memm SHOHZ', ['conteste', 'normes']),
  sent(2720, 'Suite à s’accepte dans un courrier administratif, pas pour dire une cause.', 'Suite à is accepted in an administrative letter, not to state a cause.', '/sɥi.t a sak.sɛpt dɑ̃.zœ̃ ku.ʁje ad.mi.nis.tʁa.tif pa puʁ diʁ yn koz/', 'SWEET a sak-SEPT | dahⁿ-zuhⁿ koo-RYAY ad-mee-neess-tra-TEEF | pa poor deer ünn KOHZ', ['conteste', 'normes']),
];

/* ── ACT 12 · TA VERSION ÉCRITE ─────────────────────────────────────────── */

export const ACT12_ROWS: Row[] = [
  sent(2721, 'À l’écrit, je mettrais « finalement » à la place de « au final ».', 'In writing, I would put « finalement » instead of « au final ».', '/a le.kʁi ʒə mɛ.tʁɛ fi.nal.mɑ̃ a la plas də o fi.nal/', 'a lay-KREE | zhuh meh-TREH fee-nal-MAHⁿ | a la PLASS duh oh fee-NAL', ['mission', 'conteste']),
  sent(2722, 'Le mot « culture » est vague : dis ce que tu entends par là.', 'The word "culture" is vague: say what you mean by it.', '/lə mo kyl.tyʁ ɛ vaɡ di sə kə ty ɑ̃.tɑ̃ paʁ la/', 'luh moh kül-TÜR eh VAG | dee suh kuh tü ahⁿ-tahⁿ par LA', ['mission', 'preciser']),
  sent(2723, 'Commence par ta proposition, puis précise-la.', 'Start with your proposal, then make it precise.', '/kɔ.mɑ̃s paʁ ta pʁɔ.pɔ.zi.sjɔ̃ pɥi pʁe.siz.la/', 'ko-MAHⁿSS par ta pro-po-zee-SYOHⁿ | pwee pray-seez-LA', ['mission', 'methode'], FCVDR),
  sent(2724, 'Garde « qui plus est » pour ton argument le plus fort.', 'Keep « qui plus est » for your strongest argument.', '/ɡaʁd ki ply.zɛ puʁ tɔ̃.naʁ.ɡy.mɑ̃ lə ply fɔʁ/', 'gard kee plü-ZEH | poor toh-nar-gü-MAHⁿ | luh plü FOR', ['mission', 'ajout']),
  sent(2725, 'Une seule conclusion suffit, si elle décide.', 'One conclusion is enough, if it decides.', '/yn sœl kɔ̃.kly.zjɔ̃ sy.fi si ɛl de.sid/', 'ünn SUHL kohⁿ-klü-ZYOHⁿ sü-FEE | see el day-SEED', ['mission', 'cloture'], FCVDR),
  sent(2726, 'Ce texte est écrit pour être lu, pas pour être entendu.', 'This text is written to be read, not to be heard.', '/sə tɛkst ɛ.te.kʁi puʁ ɛtʁ ly pa puʁ ɛ.tʁɑ̃.tɑ̃.dy/', 'suh TEKST eh-tay-KREE | poor etr LÜ | pa poor eh-trahⁿ-tahⁿ-DÜ', ['mission', 'registre']),
  sent(2727, 'La salle des fêtes doit rouvrir, et plus exactement dès septembre.', 'The community hall must reopen, and more precisely from September.', '/la sal de fɛt dwa ʁu.vʁiʁ e ply.zɛɡ.zak.tə.mɑ̃ dɛ sɛp.tɑ̃bʁ/', 'la sal day FET | dwa roo-VREER | ay plü-zeg-zak-tuh-MAHⁿ | deh sep-TAHⁿBR', ['mission', 'rectifier']),
  sent(2728, 'Qui plus est, la rénovation est déjà financée à moitié.', 'What is more, the renovation is already half funded.', '/ki ply.zɛ la ʁe.nɔ.va.sjɔ̃ ɛ de.ʒa fi.nɑ̃.se a mwa.tje/', 'kee plü-ZEH | la ray-no-va-SYOHⁿ | eh day-zha fee-nahⁿ-SAY a mwa-TYAY', ['mission', 'ajout']),
  sent(2729, 'Je garde le fond de Léa et je change la forme.', 'I keep Léa’s content and change the form.', '/ʒə ɡaʁd lə fɔ̃ də le.a e ʒə ʃɑ̃ʒ la fɔʁm/', 'zhuh gard luh FOHⁿ duh lay-A | ay zhuh shahⁿzh la FORM', ['mission', 'methode']),
  sent(2730, 'Je n’invente pas de chiffres : je précise ceux du texte.', 'I do not invent figures: I make the text’s own figures precise.', '/ʒə nɛ̃.vɑ̃t pa də ʃifʁ ʒə pʁe.siz sø dy tɛkst/', 'zhuh nehⁿ-VAHⁿT pa duh SHEEFR | zhuh pray-SEEZ seu dü TEKST', ['mission', 'methode']),
  sent(2731, 'Tout bien considéré, la salle doit rouvrir, par étapes s’il le faut.', 'All things considered, the hall must reopen, in stages if need be.', '/tu bjɛ̃ kɔ̃.si.de.ʁe la sal dwa ʁu.vʁiʁ paʁ e.tap sil lə fo/', 'too byehⁿ kohⁿ-see-day-RAY | la SAL dwa roo-VREER | par ay-TAP | seel luh FOH', ['mission', 'cloture']),
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
 *  §I. THE ANCHOR TEXTS
 *
 *  One per act from act 2, about 250 to 330 words, each « texte original
 *  écrit pour la leçon ». They live here so the reading, the quiz and the
 *  task cannot drift apart. Act 1 prints Léa's spoken draft, which the
 *  task brief prints again (no `source` field on `task`).
 * ══════════════════════════════════════════════════════════════════════════ */

/** Act 1 AND the task: Léa's spoken intervention, transcribed as said. */
export const LEA_TEXT =
  'Intervention de Léa Marchand au conseil de quartier des Tanneurs, transcrite telle qu’elle a été dite. Bonsoir à tous. Alors, du coup, je voulais vous parler de la salle des fêtes de la rue des Tanneurs, qui est fermée depuis trois ans. Au final, c’est quand même dommage, voire même un peu triste, parce qu’au niveau du quartier, on n’a plus vraiment d’endroit pour se retrouver. En fait, la salle, elle servait à plein de choses : la culture, les fêtes, tout ça. Suite à la fermeture, les associations se sont un peu dispersées, du coup les gens se voient moins. Par contre, je sais qu’en termes de coût, c’est compliqué. Mais bon, la mairie avait parlé d’une rénovation, et la moitié du budget serait déjà trouvée, grâce à une subvention régionale. Et puis, je veux dire, il y a aussi les jeunes, qui n’ont nulle part où répéter leur musique, et les anciens, qui ne sortent plus le soir. Bref, en somme, au final, je pense qu’il faudrait faire quelque chose, enfin, rouvrir, mais peut-être pas tout de suite, enfin, je ne sais pas. Voilà, c’est tout, merci.';

/** Act 2: a lecture, transcribed and revised by the speaker. */
export const CONF_TEXT =
  'Conférence d’Hélène Saunier, sociologue, à la médiathèque de Valbrune. Transcription revue par l’intervenante. On entend souvent dire que les bibliothèques se vident. Le public a diminué, dit-on. Ce n’est pas faux, mais c’est mal dit : chez nous, le public n’a pas diminué, ou plutôt il s’est déplacé. À Valbrune, les prêts de livres baissent depuis une dizaine d’années, c’est vrai ; la fréquentation, elle, se maintient, et elle progresse même le samedi. Les gens viennent pour autre chose, plus exactement pour trois choses : travailler au calme, se connecter, et rencontrer d’autres personnes sans avoir à consommer. Une bibliothèque est l’un des rares lieux chauffés où l’on peut rester des heures sans rien acheter. C’est ce que j’appelle un refuge, pour mieux dire une place publique couverte. Je me corrige, vous l’avez remarqué : je ne retire pas le premier mot, je le remplace par un mot plus juste, et je vous laisse voir le chemin. Prenez les étudiants. On imagine qu’ils viennent emprunter des manuels. Ils viennent surtout le soir, plus exactement entre dix-sept et vingt heures, chercher une table et une prise électrique. Prenez les retraités : ils lisent la presse, ou plutôt ils la discutent, car la lecture du journal est devenue chez eux une conversation. Faut-il s’en inquiéter ? Je ne le crois pas. Une bibliothèque n’a jamais été seulement un entrepôt de livres ; elle a toujours été, pour mieux dire, un lieu où l’on apprend en présence des autres. Ce qui change, c’est la part du livre dans ce lieu, non le lieu lui-même. Les bibliothécaires de Valbrune l’ont compris : ils ont ajouté des tables, des prises et des ateliers, sans retirer un seul rayon.';

/** Act 3: a co-op board's note that defines its terms. */
export const NOTE_TEXT =
  'Coopérative d’habitation Les Tilleuls, Saint-Aubin-des-Ormes. Note du conseil d’administration aux membres. Objet : la sobriété numérique dans nos espaces communs. Lors de la dernière assemblée, plusieurs membres ont demandé ce que le conseil entendait par « sobriété numérique ». Le terme est à la mode, et chacun y met ce qu’il veut. Nous voulons donc préciser le nôtre. Quand nous parlons de sobriété numérique, nous entendons par là trois gestes simples : garder nos appareils plus longtemps, partager ceux qui servent peu, et éteindre ce qui tourne pour rien. Il ne s’agit ni de renoncer à Internet ni de surveiller l’usage de chacun. Premier geste : réparer. L’imprimante de la salle commune, en l’occurrence un modèle de 2016, fonctionne encore très bien ; nous la ferons réviser plutôt que de la remplacer. Deuxième geste : prêter. La coopérative achètera une perceuse, un vidéoprojecteur et une liseuse, que les membres pourront emprunter. À cet égard, le comité des loisirs propose un cahier de réservation à l’entrée. Troisième geste : éteindre. Le routeur de la salle commune restera allumé, mais les écrans s’éteindront après vingt-deux heures. Certains membres travaillent la nuit ; en l’occurrence, deux d’entre eux nous ont écrit, et une solution sera trouvée avec eux. Le règlement prévoit qu’une mesure touchant les espaces communs soit votée en assemblée. En l’occurrence, il s’agit de simples recommandations : elles ne seront pas soumises au vote. Nous vous invitons à nous écrire d’ici la fin du mois. À cet égard, toute idée qui permet d’économiser sans compliquer la vie de chacun sera la bienvenue. Le conseil d’administration.';

/** Act 4: a theatre column, candid and scaled down. */
export const CHRONIQUE_TEXT =
  'La Gazette de Valbrune, rubrique Sorties. Théâtre municipal : une renaissance, pas encore une réussite. Par Simon Arnaud. À vrai dire, je suis entré dans le théâtre rénové avec une certaine méfiance. Trois ans de travaux, un budget qui a doublé en route, des réunions publiques houleuses : tout laissait craindre un chantier de prestige. Je me trompais, en partie. Le foyer est superbe. La vieille verrière, enfin nettoyée, laisse entrer une lumière douce, et le bar, installé là où s’entassaient autrefois les décors, est devenu l’endroit le plus agréable de la ville avant un spectacle. La salle, elle, respire : les fauteuils ont été espacés, la pente refaite, et l’on ne voit plus la nuque de son voisin. Tout n’est pas réglé pour autant, loin s’en faut. Du balcon, les voix arrivent étouffées ; samedi, pendant les scènes chuchotées, la moitié de la rangée penchait la tête comme pour mieux entendre. Les places de côté, les moins chères, ne voient qu’une partie du plateau. Et l’accès en fauteuil roulant, promis pour l’ouverture, passe encore par une porte de service. La direction parle de réglages et promet des corrections avant l’hiver. Dont acte. Mais, à vrai dire, le vrai sujet n’est pas technique. Un théâtre rénové pour tous ne devrait pas réserver le bon son aux places les plus chères. Le chantier est fini ; le projet, lui, ne l’est pas, loin s’en faut. Allez-y quand même : le lieu est beau, et la programmation de rentrée vaut le détour. Mais prenez une place au parterre.';

/** Act 5: an open letter that adds its arguments in order of weight. */
export const LETTRE_TEXT =
  'Lettre ouverte au conseil municipal de Valbrune, par l’Association des commerçants du centre-ville. Mesdames et Messieurs les conseillers, vous examinerez le mois prochain l’avenir de la ligne de nuit N2, mise en service à titre d’essai il y a un an. Nous vous demandons de la maintenir. Cette ligne est utile. Elle relie le centre aux quartiers de l’est jusqu’à une heure du matin, à l’heure où les derniers serveurs, cuisiniers et caissiers quittent leur travail. Avant elle, beaucoup rentraient à pied ou payaient un taxi qui leur coûtait une partie de leur soirée de travail. Qui plus est, elle coûte peu : selon les chiffres publiés par la Régie des transports de Valbrune elle-même, son déficit représente moins d’un pour cent du budget des transports. Elle profite aussi à d’autres que nous. Les infirmières de l’hôpital Sainte-Claire la prennent pour la relève de minuit, sans compter que de nombreux étudiants l’utilisent pour rentrer de la bibliothèque universitaire, ouverte tard en période d’examens. On nous objecte que les bus roulent parfois presque vides après minuit. C’est vrai le mardi ; c’est faux le vendredi et le samedi, où il faut souvent attendre le bus suivant. Une fréquentation inégale n’est pas une fréquentation faible et, qui plus est, elle progresse depuis l’automne. Supprimer la N2, ce serait renvoyer ces usagers vers la voiture, sans compter que les parkings du centre, déjà pleins le week-end, ne pourraient pas les accueillir. Nous ne demandons pas une extension ; nous demandons de ne pas revenir en arrière. Veuillez agréer, Mesdames et Messieurs les conseillers, l’expression de notre considération distinguée.';

/** Act 6: a retired teacher's blog, its supporting points slipped in. */
export const BLOG_TEXT =
  'Le blog de Martine Lecomte, institutrice à la retraite. Faut-il encore apprendre à écrire à la main ? On me pose souvent la question depuis que l’école de mon ancien quartier a équipé chaque classe de tablettes. Je ne suis pas contre les écrans ; j’en utilise d’ailleurs un tous les jours, ne serait-ce que pour écrire ce billet. Mais je reste attachée à l’écriture manuscrite, et je voudrais dire pourquoi, sans prétendre trancher un débat que les spécialistes n’ont pas fini de mener. Pendant trente ans, j’ai vu des enfants de six ans tracer leurs premières lettres. C’est lent, c’est maladroit, et c’est précisément ce qui m’intéresse : la main oblige à choisir chaque mot. Mes élèves retenaient mieux ce qu’ils avaient écrit eux-mêmes ; du reste, ils le disaient sans que je le leur demande. Je n’en tire pas une loi. Je constate. On m’objecte que le clavier est l’outil de leur avenir. C’est vrai, et je ne vois pas pourquoi il faudrait choisir. Une heure de cahier par jour n’a jamais empêché personne de taper vite ; mon petit-fils, d’ailleurs, fait les deux avec la même aisance. Ce qui m’inquiète davantage, c’est la tentation du tout ou rien. La nouvelle méthode de lecture de l’école, que j’ai feuilletée, est un peu austère, au demeurant fort bien conçue : elle garde une place à l’écriture. Le débat n’est pas nouveau ; du reste, il revient à chaque rentrée, avec chaque nouvel outil. Chaque génération a eu son instrument suspect. Alors, écrire à la main ? Oui, un peu, chaque jour. Le reste viendra.';

/** Act 7: an essay extract that argues from the stronger case. */
export const ESSAI_TEXT =
  'La ville à hauteur de poussette. Extrait d’un essai de Bastien Royer, urbaniste. Prenez le vieux quartier de Valbrune un mardi matin et suivez quelqu’un qui pousse un landau. Vous découvrirez une autre ville. Les trottoirs de la rue Haute mesurent à peine un mètre ; deux piétons s’y croisent en se frôlant, une poussette doit descendre sur la chaussée. Si un adulte valide trouve déjà ces trottoirs étroits, une personne en fauteuil roulant les trouvera a fortiori impraticables. Le raisonnement vaut pour chaque obstacle. L’escalier de la place du Puits essouffle un joggeur ; à plus forte raison, il arrête une personne qui marche avec une canne. Les bancs ont été retirés pour décourager les attroupements ; ils manquent à tout le monde, et à plus forte raison à ceux qui ne peuvent pas marcher dix minutes sans s’asseoir. On me dira que ces cas sont minoritaires. Ils le sont, si l’on compte les personnes ; ils ne le sont plus si l’on compte les moments. Chacun de nous, un jour, porte une valise lourde, se tord la cheville, accompagne un parent âgé ou pousse un enfant. Ce qui gêne la personne la plus fragile gêne tout le monde à un moment de sa vie. L’inverse est vrai aussi : une rampe pensée pour un fauteuil profite aux livreurs, aux voyageurs, aux parents. Si une rampe sert ceux qui marchent bien, elle sert a fortiori ceux qui marchent mal. Concevoir pour les plus fragiles n’est donc pas une faveur faite à quelques-uns. C’est, à plus forte raison dans un quartier vieillissant comme celui-ci, la façon la plus économique de construire pour tous.';

/** Act 8: a local history piece with both senses of dès lors. */
export const HALLES_TEXT =
  'Les halles de Valbrune, cent ans d’histoire. Supplément du bulletin municipal. Lorsque les halles ouvrent leurs portes en 1925, la ville compte à peine douze mille habitants. Le marché couvert attire aussitôt les maraîchers de toute la vallée ; dès lors, le samedi devient le grand jour de la semaine, et les cafés de la place s’y adaptent. En 1968, un supermarché s’installe à la sortie de la ville. Dès lors, la fréquentation des halles décline lentement, sans jamais s’effondrer. Les années quatre-vingt voient fermer la moitié des étals. En 2019, une étude commandée par la mairie fait un constat simple : la charpente est saine, mais la toiture fuit et l’installation électrique n’est plus aux normes. Il faut donc agir, et vite. Dès lors, la question n’est plus de savoir s’il faut intervenir, mais comment. Deux voies s’offrent au conseil : démolir pour construire un parking, ou rénover. Le conseil choisit de rénover. Dès lors que le bâtiment est inscrit au patrimoine communal, la démolition exigerait une procédure longue et incertaine ; et dès lors que la charpente tient, la rénovation coûte moins cher que prévu. Les travaux durent deux ans. Depuis la réouverture, les halles accueillent quarante étals le samedi et vingt en semaine. Reste une question, que le conseil devra trancher l’an prochain : faut-il ouvrir le dimanche ? Les commerçants sont partagés. La mairie s’est engagée à tenter l’essai pendant un été, dès lors qu’une majorité d’entre eux le demanderait.';

/** Act 9: board minutes that accept a cost and settle firm points. */
export const CR_TEXT =
  'Association Les Jardins de la Brune. Compte rendu du conseil d’administration du 12 mars. Présents : sept membres sur neuf. Point unique : la fête des récoltes de septembre. La présidente, Odette Ravel, rappelle la situation. La fête attire chaque année près de deux mille visiteurs, mais l’équipe bénévole s’est réduite de moitié, et le terrain du parc Bellevue sera en travaux jusqu’à la fin de l’été. Trois options sont présentées. Première option : maintenir la fête en septembre, sur un terrain de remplacement, quitte à réduire le programme à une seule journée. Deuxième option : la reporter au printemps, quitte à décevoir les exposants fidèles, qui réservent leur date un an à l’avance. Troisième option : l’annuler cette année. Plusieurs membres refusent l’annulation : une fête qui disparaît une année revient rarement l’année suivante. Le trésorier, Ahmed Saïdi, fait remarquer que le terrain de remplacement coûterait plus cher que le parc. « Quitte à payer davantage, autant le faire pour une fête complète », répond une bénévole, qui défend une fête de deux jours en septembre. Après discussion, le conseil adopte la deuxième option par cinq voix contre deux : la fête aura lieu au printemps, dans le parc rénové. La présidente écrira aux exposants pour leur expliquer ce choix, quitte à leur proposer un tarif réduit. En tout état de cause, aucun bénévole ne tiendra seul un stand, et un appel aux volontaires sera lancé dès avril. La date exacte reste à fixer ; en tout état de cause, elle sera annoncée avant la fin du mois de juin. La séance est levée à vingt et une heures trente.';

/** Act 10: the conclusion of a trial report, with three closing gestures. */
export const BILAN_TEXT =
  'Ville de Valbrune. Rue scolaire de l’école Jean-Rostand : bilan d’une année d’essai. Conclusion du rapport. Pendant un an, la rue des Lilas a été fermée aux voitures aux heures d’entrée et de sortie de l’école. Le présent rapport en a examiné les effets, point par point ; il reste à en tirer les leçons. En guise de conclusion, nous voudrions revenir sur la question qui a le plus divisé : le report de la circulation. Les comptages montrent que les rues voisines ont absorbé l’essentiel du trafic sans saturation, à l’exception de l’avenue du Stade, où les files se sont allongées de quelques minutes aux heures de pointe. Le désagrément est réel ; il est, somme toute, limité, et il pourrait être réduit par un meilleur réglage des feux. Le bilan pour les enfants est plus net. Deux parents interrogés sur trois laissent désormais leur enfant venir à pied ou à vélo, contre un sur trois avant l’essai. Les incidents signalés devant l’école sont passés de onze à deux. Les riverains, d’abord réservés, se disent en majorité satisfaits ; quelques-uns regrettent le manque de places de livraison, qu’il faudra prévoir. L’essai a demandé peu de moyens : deux barrières, des panneaux et la présence de bénévoles les premières semaines. Il a, somme toute, coûté moins cher qu’un seul ralentisseur. Tout bien considéré, les avantages l’emportent nettement sur les inconvénients. Nous recommandons donc de rendre la rue scolaire permanente, d’ajouter deux places de livraison et de revoir les feux de l’avenue du Stade. Une rue scolaire ne règle pas tout ; elle rappelle seulement à qui la rue appartient à huit heures du matin.';

/** Act 11: one passage said, then written. */
export const PODCAST_TEXT =
  'VERSION ORALE · Extrait du podcast « Fournées », épisode 12, transcrit tel quel. Noah Petit, cofondateur de la boulangerie coopérative Le Levain, répond à l’animatrice. « Alors, du coup, on a ouvert il y a deux ans. Au début, au niveau de la clientèle, c’était surtout les voisins. Par contre, depuis l’article dans le journal, on a des gens qui viennent de tout le département. En termes de production, on est passés de deux cents à six cents pains par jour, voire même huit cents le samedi. Suite à ça, on a embauché deux personnes. Au final, on a gardé le même four, mais on a ajouté une équipe de nuit. Du coup, c’est plus fatigant, mais on est contents. » VERSION ÉCRITE · Le même passage, rédigé pour la lettre d’information de la coopérative. Le Levain a ouvert ses portes il y a deux ans. Sa clientèle se composait d’abord surtout d’habitants du quartier ; depuis la parution d’un article dans la presse locale, elle vient en revanche de tout le département. En matière de production, la boulangerie est passée de deux cents à six cents pains par jour, voire huit cents le samedi. À la suite de cette croissance, la coopérative a embauché deux personnes. Elle a finalement conservé le même four, mais a créé une équipe de nuit. Le travail est donc plus fatigant, mais l’équipe s’en dit satisfaite. Rien n’a été retiré ni ajouté : seule la forme a changé.';

/** Act 12: the model, a spoken intervention rewritten for print. */
export const MODELE_TEXT =
  'Version écrite, pour le bulletin du quartier, de l’intervention de Karim Haddad au conseil de quartier du 4 mai. Je souhaite que le jardin partagé du square Vauban soit agrandi, et plus exactement qu’il occupe aussi la pelouse inutilisée qui le borde au nord. Ce jardin compte aujourd’hui trente parcelles, pour soixante familles inscrites sur la liste d’attente. On dit souvent que les jardins partagés sont un loisir ; j’y vois plutôt un service, et j’entends par là un lieu qui rend au quartier plus qu’il ne lui coûte. Les écoliers de la rue Vauban y suivent un atelier chaque semaine ; l’école a d’ailleurs demandé deux parcelles supplémentaires. Les retraités y trouvent une raison de sortir chaque jour, sans compter que les légumes récoltés alimentent en partie l’épicerie solidaire. L’agrandissement coûterait peu : une clôture et un point d’eau, soit, selon le devis demandé par l’association, moins de quatre mille euros. Qui plus est, les jardiniers se sont engagés à entretenir eux-mêmes la nouvelle surface. On m’objecte que la pelouse sert aux pique-niques. À vrai dire, on y voit rarement plus de deux familles le dimanche, et le projet en réserve une partie aux promeneurs. Si un jardin de trente parcelles anime déjà le square, un jardin de cinquante le fera a fortiori. Ce projet ne demande donc pas de choisir entre jardiniers et promeneurs. Tout bien considéré, il est modeste, peu coûteux et attendu : je propose qu’il soit étudié dès la prochaine séance.';
