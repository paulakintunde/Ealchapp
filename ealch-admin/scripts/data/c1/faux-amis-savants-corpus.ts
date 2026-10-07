// c1.18.l1 « Les faux amis savants » — the authored corpus, the imports, the
// texts and the citation constants. DRAFT, to B1-WORKSHOP-AND-VOCAB-SHAPES.md
// §2 (THE VOCAB SHAPE: words in use, never isolated nouns) on top of
// B1-BUILD-PLAYBOOK.md, with the C1 rules of C1-BUILD-LOG.md (wave 6 and the
// wave 5 review lessons). Structural model: the reviewed c1.12 « Le
// vocabulaire des idées » (`./vocabulaire-idees-*`).
//
// DRAFT. Nothing here is imported into Postgres or merged into seed.json.
//
// STABLE EXPORTS (c1.22 and c1.23 may import REFRAME and the verdict table
// from this file; do not rename): REFRAME, REFRAME_EN, UNIT, LESSON_ID, THEME,
// LEVEL, E, ALL_ROWS, ROWS_BY_ACT, IMPORTED, IMPORT_IDS, PG_ROWS, VERDICTS,
// Cap, refFr.
//
// ══════════════════════════════════════════════════════════════════════════
//  WHAT THIS UNIT OWNS: lesson 18 of the C1 trail
// ══════════════════════════════════════════════════════════════════════════
//
//   THE LEARNED FALSE FRIENDS (« les calques de haut niveau »): fourteen
//   words that educated speakers really write under the influence of
//   English, each with WHO condemns it, WHO accepts it, and the safe French
//   word, always stated as « selon … », never as a single verdict where the
//   authorities differ.
//
//     act 1   le mot savant qui trompe: a reviser's comments on a report;
//             recap of b1.35, b1.37, b2.27, b2.28, b2.29 and b2.33 by trail
//             position, their rows reused by id; the faux-amis bank as known
//     act 2   initier (lancer, amorcer, être à l’origine de; initier qqn à)
//     act 3   opportunité (occasion, chance, perspectives, débouchés;
//             l’opportunité d’une mesure)
//     act 4   alternative (solution de rechange, option; l’alternative =
//             le choix entre deux)
//     act 5   impacter (toucher, affecter, avoir une incidence sur)
//     act 6   académique et versatile (universitaire, scolaire; polyvalent)
//     act 7   juridiction (tribunal; compétence, ressort, autorité)
//     act 8   éligible (admissible, avoir droit à; éligible à un mandat)
//     act 9   digital (numérique, numériser; empreintes digitales)
//     act 10  faire sens, questionner (avoir du sens; mettre en doute,
//             remettre en question; questionner qqn)
//     act 11  canceller, céduler, booker (annuler, fixer, réserver): the
//             spoken Québec hybrids
//     act 12  the task: revise a bilingual team's announcement and justify
//             four choices with their sources
//
//   BUILT ON, NEVER RE-TAUGHT (cited by trail position, rows reused by id):
//     la leçon 35 du B1  décevoir n’est pas tromper (row emotions .1046)
//     la leçon 37 du B1  un faux ami; actuellement, éventuellement
//                        (rows strategies-de-comprehension .1115 .1116 .1118)
//     la leçon 27 du B2  location, éventuellement in official French (rows
//                        droit .1079 .1176)
//     la leçon 28 du B2  drogue, physicien (row soins .1160)
//     la leçon 29 du B2  évidence, significatif (row methode-scientifique
//                        .1177)
//     la leçon 33 du B2  the three calque kinds and its ten words (attendre,
//                        prétendre, formation, introduire, achever, rester,
//                        supporter, adresser, définitivement, réaliser), and
//                        « faire du sens » (rows langue-soignee .1802 .1835
//                        .1856 .1869 .1872). Act 10 goes PAST it: the
//                        divided « faire sens » only.
//     la leçon 12 du C1  « une évidence » / evidence: cited in act 1, never
//                        re-taught (c1.12 is not yet published, so no row of
//                        it is reused; the b2.29 row carries the point)
//     the faux-amis bank (fr.sons.faux-amis .001-.111): actuellement,
//                        réaliser, supporter, assumer, postuler, délivrer
//                        reused BY ID as known words in act 1 (PG_ROWS)
//
//   LEFT TO OTHER LESSONS:
//     c1.22  ideas, paragraphs and register when translating (this lesson
//            owns WORDS only)
//     c1.23  tact at work: revenir vers vous, call; impacter, initier and
//            booker are taught here and c1.23 may cite « la leçon 18 du C1 »
//
// ══════════════════════════════════════════════════════════════════════════
//  §A. MEASURED (Postgres read 2026-10-06 inside BEGIN TRANSACTION READ ONLY
//      … COMMIT, no SET; the local seed is a cut)
// ══════════════════════════════════════════════════════════════════════════
//
//  1. THEME `faux-amis` (« Les faux amis », fondations). Read back: range
//     sons-c1 (decision 27 already applied at the wave 6 setup), sub-theme
//     « les calques de haut niveau ». 433 rows, all published: sons .001-.111
//     (headwords), a1 .001-.322 (dictation sentences). seedPlusPacks() holds
//     only a1 .152.
//
//  2. ID BLOCK: `fr.c1.faux-amis.1000` to `.1199` and nothing else. Probed
//     2026-10-06: 0 rows in 1000-1199 at any level. Authored rows run in one
//     sequence, act by act (see §G banners).
//
//  3. REUSED ROWS. Seed rows of b1.35, b1.37, b2.27, b2.28, b2.29, b2.33 are
//     in seedPlusPacks(). The six faux-amis bank rows are Postgres-only:
//     their fr / en / drills are copied VERBATIM into PG_ROWS from the
//     2026-10-06 read (straight apostrophes kept); the merge must carry them
//     and the gate preview needs them.
//
//  4. PUBLISHED ROWS THAT USE A SENSE THIS LESSON CALLS CRITICISED (read,
//     NOT reused, flagged for Paul): fr.b2.soins.1135 « Est-ce qu’il y a une
//     alternative ? » and fr.b2.ecologie.129 (alternative = option);
//     fr.b2.projets-et-futur.022 (opportunité = occasion); the b2 rows
//     « dossier académique », « parcours académique », « carrière
//     académique », « réseau académique » (examens-et-diplomes .113 .149,
//     recherche .112 .113); « impact » = effet in about a dozen b1/b2 rows.
//     None is wrong in every authority's eyes (see §A.7), so none needs a
//     fix; the lesson says « critiqué par … », never « faux ».
//
//  5. NO WRONG FORM IS EVER A ROW. Every criticised use (initier un projet,
//     une belle opportunité, une alternative, impacter, l’année académique,
//     versatile = polyvalent, d’autres juridictions, éligible à une bourse,
//     digital, faire sens, questionner une décision, canceller, céduler,
//     booker) lives only in a scene choice, a trapDrill.promptSound, a
//     commonErrors.wrong, a quiz errorSpot prompt, a tapTable cell, a draft
//     marked « brouillon à reprendre » or a question.
//
//  6. TWINS: every authored `fr`, folded (accents, case, punctuation,
//     apostrophes, spaces), was compared with every Postgres row
//     (scratch twins.mts): see the report; 0 twins at hand-off.
//
//  7. VERDICTS AND FACTS, FOR THE FACT CHECK. Every verdict below was read on
//     the named page on 2026-10-06 / 07. « BDL » = OQLF Banque de dépannage
//     linguistique (vitrinelinguistique.oqlf.gouv.qc.ca); « GDT » = Grand
//     dictionnaire terminologique; « DNP » = Académie française, Dire, Ne pas
//     dire (dictionnaire-academie.fr/article/DNPxxxx); « Ac. 9e » = the
//     Dictionnaire de l’Académie, 9e édition; « Robert » = Dico en ligne Le
//     Robert (dictionnaire.lerobert.com); « Usito » = usito.usherbrooke.ca.
//     The Belgian Service de la langue française (Fédération Wallonie-
//     Bruxelles) publishes no item-level verdict on these words that could
//     be found online (languefrancaise.cfwb.be now redirects to the general
//     portal livre.cfwb.be): it is cited nowhere as having a verdict.
//
//     a. INITIER (= lancer). BDL 21521 « déconseillé » au sens de
//        « commencer, être à l’origine de, amorcer »; replacements lancer,
//        amorcer, entamer, mettre sur pied, instaurer. DNP0936 (2/04/2020)
//        « on évitera ». Ac. 9e (A9I1328) remark: the use « n’est pas en soi
//        condamnable » but « se répand abusivement »; the 9e records the
//        sciences sense « Initier une réaction chimique ». Usito: anglicisme
//        critiqué ⇒ amorcer, lancer. Robert: no « commencer » sense. Correct
//        everywhere: initier qqn à, s’initier à.
//     b. OPPORTUNITÉ (= occasion). DNP0465 « est un anglicisme »; Ac. 9e
//        (A9O0572) « C’est à tort… ». BDL 23526: « critiqué dans plusieurs
//        ouvrages », « il peut être souhaitable de remplacer »; plural
//        « opportunités de carrière, d’emploi » déconseillé (perspectives,
//        débouchés). Robert: records it, marked « anglicisme » (Profiter
//        d’une opportunité). Usito: « parfois critiqué », attested in
//        dictionaries until the 19th century. DIVIDED: taught as
//        « critiqué par l’Académie et l’OQLF, enregistré par Le Robert ».
//        Correct everywhere: l’opportunité d’une mesure.
//     c. ALTERNATIVE (= une option, une solution de rechange). BDL 21127
//        « déconseillé »; Robert « (emploi critiqué) solution de
//        remplacement »; Usito « critiqué ». Ac. 9e (A9A1318) records only
//        « succession de deux états » and « choix nécessaire entre deux
//        propositions », with the example « Il n’y a pas d’alternative, il
//        n’y a qu’une solution ». BDL 21964: « deux alternatives » is a
//        pleonasm. Agreed by all four: criticised.
//     d. IMPACTER. DNP0328 « une forme verbale fautive »; BDL 23313
//        « déconseillé » (accepted only in medicine); Robert records it,
//        marked « anglicisme » (avoir un impact sur ➙ affecter); Usito
//        « parfois critiqué ». DIVIDED in tone. The NOUN « impact » = effet:
//        Ac. 9e (A9I0302) « extension abusive » for a diffuse influence; BDL
//        23312 « déconseillé au sens d’effet, influence », accepted as
//        « effet de choc »; named in the sheet only, never tested (published
//        rows use it).
//     e. ACADÉMIQUE (= universitaire, scolaire). DNP0741 (7/06/2018) « il
//        convient de ne pas ajouter » the sense « universitaire », « bien
//        que ces tours soient en train de se répandre »; BDL 21954
//        « déconseillé » (année scolaire, universitaire; dossier scolaire);
//        Usito Q/C critiqué. Robert: no such sense. USAGE FACT: Belgian
//        universities themselves write « calendrier académique » (UCLouvain,
//        uclouvain.be/fr/etudier/calendrier-academique.html): stated as
//        usage, never as an authority's verdict.
//     f. VERSATILE (= polyvalent). BDL 22331 « déconseillé »; Usito Q/C
//        critiqué ⇒ flexible, polyvalent, souple; Robert: only « qui change
//        facilement de parti, d’opinion ». Agreed.
//     g. JURIDICTION. Correct: tribunal, pouvoir de juger (GDT 1199406,
//        normalisé 1991; Usito « officialisé par l’OQLF »; Robert « pouvoir
//        de juger ; étendue de ce pouvoir ➙ compétence, ressort »).
//        Criticised: Usito Q/C « critiqué comme synonyme non standard de
//        autorité, compétence, ressort » (Les provinces canadiennes ont
//        compétence en matière d’éducation); GDT 1198702 « ressort »: the
//        term juridiction is marked « à éviter » for the territory of an
//        authority. DIVIDED at the edge (Robert lists « étendue de ce
//        pouvoir »): the lesson keeps juridiction for courts and teaches
//        compétence / ressort / pays / province elsewhere.
//     h. ÉLIGIBLE À (= admissible). DNP0305 « on se gardera bien » (dire
//        « avoir droit à », « remplir les conditions requises »); BDL 20994
//        « déconseillé » ⇒ admissible; Usito « critiqué au Québec », REM.
//        « n’est généralement pas critiqué en France »; Robert records
//        « Être éligible à : remplir les conditions requises pour
//        bénéficier de » with no mark (Les foyers éligibles à la fibre
//        optique). DIVIDED: the lesson's showcase case.
//     i. DIGITAL (= numérique). DNP0430 « on se gardera bien de
//        confondre »; Ac. 9e Digital (II) (A9D2486) recorded, « Le terme
//        Numérique doit être préféré »; FranceTerme INFO174 « numérique »
//        (Journal officiel); BDL 22953 « déconseillé » (and digitaliser ⇒
//        numériser); Robert: « anglicisme », « recommandation officielle
//        numérique ». Agreed: prefer numérique. Correct: empreintes
//        digitales.
//     j. FAIRE SENS (without du). BDL 23499: « faire du sens » déconseillé
//        (b2.33 owns it); « faire sens » « déjà en usage en moyen
//        français », « peu employée au Québec », no condemnation. DNP0105
//        criticises « l’emploi injustifié de constructions où faire était
//        directement suivi d’un substantif comme dans faire sens ».
//        DIVIDED.
//     k. QUESTIONNER qqch (= mettre en doute). BDL 22775 « déconseillé » ⇒
//        contester, douter de, mettre en doute, mettre en question,
//        s’interroger sur; Usito « parfois critiqué ». Ac. 9e (A9Q0195) and
//        Robert give only « interroger quelqu’un » (no remark either way).
//        Correct everywhere: questionner un témoin.
//     l. CANCELLER. BDL 20990 « déconseillé », « surtout à l’oral » ⇒
//        annuler; Usito Q/C critiqué ⇒ annuler.
//     m. CÉDULER. BDL 22412 « déconseillé » ⇒ fixer, prévoir, programmer,
//        inscrire à l’horaire; Usito Q/C critiqué (same list). « Cédule »
//        survives in finance and law (BDL 21475): named in the sheet only.
//     n. BOOKER. BDL 24410 « déconseillé » ⇒ réserver, retenir, faire une
//        réservation. Neither the Robert online nor Usito has an entry
//        (both checked 2026-10-07): the lesson says only « l’OQLF le
//        déconseille ; les dictionnaires courants ne l’enregistrent pas ».
//     QUOTATIONS: the DNP « on dit / on ne dit pas » pairs are paraphrased,
//     never quoted at length; the « selon » lines are the lesson's own
//     wording. Every person, agency, school and town is invented (§I).
//
//  8. RESPELLINGS SPELLED FOR THE NASAL CHECKER RATHER THAN THE EAR: a real
//     /n/ or /m/ after a vowel is written double: personne pehr-SONN, bonne
//     BONN, donne DONN, programme pro-GRAMM, semaine suh-MENN, prochaine
//     pro-SHENN, domaine do-MENN, moyenne mwa-YENN. No U+203F tie.
//
//  9. APOSTROPHES: every authored French string uses the typographic ’.
//     PG_ROWS keep their straight ' until the decision 13 pass.
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
  id: 'c1.18',
  seq: 18,
  title: 'Learned False Friends',
  sub: 'Les faux amis savants',
  canDo: 'Can recognise the learned semantic anglicisms of educated French (initier, opportunité, alternative, impacter, académique, versatile, juridiction, éligible, digital, faire sens, questionner, canceller, céduler, booker), say which authorities condemn or accept each and where France and Québec differ, and replace each with the precise French word in a text written for others',
  prereqUnitIds: ['b1.35', 'b1.37', 'b2.27', 'b2.28', 'b2.29', 'b2.33'],
} as const;

export const LESSON_ID = 'c1.18.l1';
export const THEME = 'faux-amis';
export const LEVEL = 'c1' as const;

/** ONE block, by the brief (sub-theme « les calques de haut niveau »). */
export const ID_RANGES = [[1000, 1199]] as const;

export const E = (n: number) => `fr.${LEVEL}.${THEME}.${String(n).padStart(3, '0')}`;

/** The faux-amis bank: published, reused by id as known words. */
export const FA = (n: number) => `fr.sons.faux-amis.${String(n).padStart(3, '0')}`;

/* ══════════════════════════════════════════════════════════════════════════
 *  §C. HOW THIS LESSON NAMES ITS NEIGHBOURS (by trail position, in words)
 * ══════════════════════════════════════════════════════════════════════════ */

type SeedUnit = { id: string; seq: number | string };
const SEQ = new Map((seed.units as unknown as SeedUnit[]).map((u) => [u.id, Number(u.seq)]));

export function refFr(unitId: string): string {
  const band = unitId.slice(0, 2);
  const n = SEQ.get(unitId);
  if (n) return `la leçon ${n} du ${band.toUpperCase()}`;
  if (band === 'b1' || band === 'b2' || band === 'c1') throw new Error(`c1.18: ${unitId} is not in the seed`);
  return unitRef(unitId);
}

export const EMOTIONS_UNIT = 'b1.35';
export const LECTURE_UNIT = 'b1.37';
export const JURIDIQUE_UNIT = 'b2.27';
export const SOINS_UNIT = 'b2.28';
export const SCIENCE_UNIT = 'b2.29';
export const CALQUER_UNIT = 'b2.33';

export const EMOTIONS_REF = refFr(EMOTIONS_UNIT);     // la leçon 35 du B1
export const LECTURE_REF = refFr(LECTURE_UNIT);       // la leçon 37 du B1
export const JURIDIQUE_REF = refFr(JURIDIQUE_UNIT);   // la leçon 27 du B2
export const SOINS_REF = refFr(SOINS_UNIT);           // la leçon 28 du B2
export const SCIENCE_REF = refFr(SCIENCE_UNIT);       // la leçon 29 du B2
export const CALQUER_REF = refFr(CALQUER_UNIT);       // la leçon 33 du B2

/** c1.12 and c1.19 are drafted in waves 4 and 6, not yet in the seed: typed
 *  from the plan. TODO(import): drop if either slips. */
export const IDEES_REF_PLANNED = 'la leçon 12 du C1';
export const NEXT_REF_PLANNED = 'la leçon 19 du C1';

/* ══════════════════════════════════════════════════════════════════════════
 *  §D. THE QUOTATIONS, IMPORTED (never retyped)
 * ══════════════════════════════════════════════════════════════════════════ */

export { REFRAME as B233_REFRAME, REFRAME_EN as B233_REFRAME_EN } from '../b2/traduire-sans-calquer-corpus.ts';

/* ══════════════════════════════════════════════════════════════════════════
 *  §E. THE REFRAME AND THE ONE METAPHOR
 *
 *  LE SOSIE. A learned false friend is a lookalike: the same face as the
 *  English word, another life. Every act holds a lookalike and a lens; the
 *  lens is the question « selon qui ? ». The authorities are several lamps
 *  lighting the same object from different sides: where they agree, the
 *  shadow is sharp; where they differ, the lesson says so.
 *
 *  It is NOT « every word that looks English is wrong » (initier qqn à,
 *  l’opportunité d’une mesure, une juridiction civile, éligible à un mandat
 *  are correct everywhere), and it is NOT « the Académie decides » (éligible
 *  à is in Le Robert, unmarked).
 * ══════════════════════════════════════════════════════════════════════════ */

export const REFRAME = 'Un mot savant qui ressemble à l’anglais : vérifie son sens français, et qui l’accepte.';
export const REFRAME_EN = 'A learned word that looks like English: check its French meaning, and who accepts it.';

export const REFRAME_REJECTED: readonly { text: string; why: string }[] = [
  {
    text: 'Méfie-toi de tout mot qui ressemble à l’anglais.',
    why: 'False where the lesson has to hold: initier quelqu’un à, l’opportunité d’une mesure, une juridiction civile, éligible à un mandat are correct in every authority. A blanket suspicion makes the learner avoid good French.',
  },
  {
    text: 'Ce que dit l’Académie est la règle.',
    why: 'False for the brief: Le Robert records « éligible à » with no mark and Usito says it is generally not criticised in France; the OQLF and the Académie also differ on « faire sens ». The lesson must say « selon … ».',
  },
  {
    text: 'Le mot français juste existe toujours.',
    why: 'True as a habit, too weak as a line: it says nothing about who condemns what, which is the C1 skill the task grades.',
  },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §F. THE IMPORTS, BY ACT
 *
 *  Every id was read from Postgres on 2026-10-06/07 and, where present, from
 *  seedPlusPacks(); its French is in the trailing comment. `PG` marks a row
 *  absent from the seed cut, carried in PG_ROWS.
 * ══════════════════════════════════════════════════════════════════════════ */

export const IMPORTED = {
  act1: [
    'fr.b1.strategies-de-comprehension.1115',   // un faux ami  (b1.37)
    'fr.b1.strategies-de-comprehension.1116',   // Actuellement, je loge chez mes parents.  (b1.37)
    'fr.b1.strategies-de-comprehension.1118',   // Éventuellement, je pourrais partager un appartement.  (b1.37)
    'fr.b1.emotions.1046',                      // Décevoir, ce n'est pas tromper.  (b1.35, flashcard only)
    'fr.b2.droit.1079',                         // La location, c'est le fait de louer ; le lieu, c'est l'emplacement.  (b2.27)
    'fr.b2.droit.1176',                         // Éventuellement veut dire peut-être, jamais finalement.  (b2.27)
    'fr.b2.soins.1160',                         // Un physicien fait de la physique ; un médecin soigne.  (b2.28)
    'fr.b2.methode-scientifique.1177',          // Evidence se dit preuves ou données ; une évidence, c'est ce qui saute aux yeux.  (b2.29)
    'fr.b2.langue-soignee.1802',                // Un calque de mot donne à un mot français le sens du mot anglais.  (b2.33)
    'fr.b2.langue-soignee.1835',                // Un mot qui ressemble à l'anglais n'a pas forcément le même sens.  (b2.33, flashcard only)
    FA(2),                                      // actuellement  (PG)
    FA(72),                                     // réaliser  (PG)
    FA(46),                                     // supporter  (PG)
    FA(83),                                     // assumer  (PG)
    FA(84),                                     // postuler  (PG)
    FA(81),                                     // délivrer  (PG)
  ],
  act2: [] as string[],
  act3: [] as string[],
  act4: [] as string[],
  act5: [] as string[],
  act6: [] as string[],
  act7: [
    'fr.b2.droit.140',                          // La juridiction compétente a été déterminée après plusieurs mois.  (PG, dictation only)
  ],
  act8: [] as string[],
  act9: [
    'fr.b2.immigration-et-citoyennete.014',     // l'empreinte digitale  (seed)
    'fr.b2.questions-sociales.041',             // la fracture numérique  (PG)
    'fr.b2.rp-technologie.025',                 // la transformation numérique  (PG)
  ],
  act10: [
    'fr.b2.langue-soignee.1872',                // Ça a du sens de commencer par les nouveaux employés.  (b2.33)
    'fr.b2.langue-soignee.1856',                // Ce que tu dis est tout à fait sensé.  (b2.33)
    'fr.b1.affaires.1139',                      // Votre idée a du sens, mais le budget ne suffit pas.  (b1.36)
  ],
  act11: [] as string[],
  act12: [] as string[],
};

export const IMPORT_IDS = [...new Set(Object.values(IMPORTED).flat())];

/** Published in Postgres, absent from the local seed cut: fr / en / drills
 *  copied VERBATIM from the 2026-10-07 read (straight apostrophes kept). */
export const PG_ROWS: { id: string; fr: string; en: string; drills: string[] }[] = [
  { id: FA(2), fr: 'actuellement', en: 'currently', drills: ['flashcard', 'voiceflash'] },
  { id: FA(72), fr: 'réaliser', en: 'to carry out, to achieve, to make happen', drills: ['flashcard', 'voiceflash'] },
  { id: FA(46), fr: 'supporter', en: 'to put up with', drills: ['flashcard', 'voiceflash'] },
  { id: FA(83), fr: 'assumer', en: 'to take on, to accept (a responsibility)', drills: ['flashcard', 'voiceflash'] },
  { id: FA(84), fr: 'postuler', en: 'to apply (for a job)', drills: ['flashcard', 'voiceflash'] },
  { id: FA(81), fr: 'délivrer', en: 'to free, to release (also: to issue a document)', drills: ['flashcard', 'voiceflash'] },
  { id: 'fr.b2.droit.140', fr: 'La juridiction compétente a été déterminée après plusieurs mois.', en: 'The competent jurisdiction was determined after several months.', drills: ['dictation'] },
  { id: 'fr.b2.questions-sociales.041', fr: 'la fracture numérique', en: 'the digital divide', drills: ['flashcard', 'voiceflash'] },
  { id: 'fr.b2.rp-technologie.025', fr: 'la transformation numérique', en: 'digital transformation', drills: ['flashcard', 'review'] },
];

const SEED_DRILLS = new Map((seed as unknown as { items: { id: string; drills?: string[] }[] }).items.map((i) => [i.id, i.drills ?? []]));
const drillsOf = (id: string): string[] => PG_ROWS.find((r) => r.id === id)?.drills ?? SEED_DRILLS.get(id) ?? [];

/** No `flashcard` drill: nameable, never releasable. */
export const NOT_DECK_ABLE: string[] = IMPORT_IDS.filter((id) => !drillsOf(id).includes('flashcard'));

/** No `voiceflash`: never in a `practice` speak section. */
export const NOT_SPEAKABLE: string[] = IMPORT_IDS.filter((id) => !drillsOf(id).includes('voiceflash'));

/* ══════════════════════════════════════════════════════════════════════════
 *  §F'. THE VERDICT TABLE (one line per headword; sheets and report print
 *  it). `split` marks a case where the authorities differ.
 * ══════════════════════════════════════════════════════════════════════════ */

export const VERDICTS: readonly { mot: string; emploi: string; sur: string; critique: string; accepte: string; split: boolean }[] = [
  { mot: 'initier', emploi: 'initier un projet (= lancer)', sur: 'lancer, amorcer, entamer, être à l’origine de', critique: 'OQLF (BDL), Académie (Dire, ne pas dire), Usito', accepte: 'l’Académie juge l’emploi « pas en soi condamnable » mais abusif ; initier qqn à : correct partout', split: false },
  { mot: 'opportunité', emploi: 'une belle opportunité (= occasion)', sur: 'occasion, chance ; perspectives, débouchés', critique: 'Académie (un anglicisme), OQLF (BDL)', accepte: 'Le Robert l’enregistre, marqué anglicisme ; Usito : parfois critiqué', split: true },
  { mot: 'alternative', emploi: 'une alternative (= une option)', sur: 'solution de rechange, option, possibilité', critique: 'OQLF (BDL), Le Robert (emploi critiqué), Usito', accepte: 'l’alternative = le choix entre deux : correct partout', split: false },
  { mot: 'impacter', emploi: 'impacter les ventes', sur: 'toucher, affecter, avoir une incidence sur', critique: 'Académie (forme fautive), OQLF (BDL)', accepte: 'Le Robert l’enregistre, marqué anglicisme ; Usito : parfois critiqué', split: true },
  { mot: 'académique', emploi: 'l’année académique (= universitaire)', sur: 'universitaire, scolaire', critique: 'Académie (Dire, ne pas dire), OQLF (BDL), Usito', accepte: 'usage courant des universités belges ; un discours académique : correct', split: false },
  { mot: 'versatile', emploi: 'un outil versatile (= polyvalent)', sur: 'polyvalent, souple, flexible', critique: 'OQLF (BDL), Usito', accepte: 'versatile = qui change d’avis : correct partout', split: false },
  { mot: 'juridiction', emploi: 'les autres juridictions (= pays, provinces)', sur: 'compétence, ressort, autorité ; pays, province', critique: 'Usito, OQLF (GDT, fiche ressort)', accepte: 'un tribunal, le pouvoir de juger : correct partout ; Le Robert admet l’étendue de ce pouvoir', split: true },
  { mot: 'éligible', emploi: 'éligible à une bourse (= admissible)', sur: 'admissible à, avoir droit à, remplir les conditions', critique: 'Académie (Dire, ne pas dire), OQLF (BDL)', accepte: 'Le Robert, sans marque ; Usito : généralement pas critiqué en France', split: true },
  { mot: 'digital', emploi: 'la transformation digitale', sur: 'numérique, numériser', critique: 'Académie, FranceTerme, OQLF (BDL), Le Robert (recommandation : numérique)', accepte: 'empreintes digitales : correct partout', split: false },
  { mot: 'faire sens', emploi: 'ça fait sens', sur: 'avoir du sens, être logique', critique: 'Académie (Dire, ne pas dire)', accepte: 'OQLF : tour ancien, peu employé au Québec, non condamné', split: true },
  { mot: 'questionner', emploi: 'questionner une décision', sur: 'remettre en question, mettre en doute, contester', critique: 'OQLF (BDL) ; Usito : parfois critiqué', accepte: 'questionner qqn : correct partout', split: false },
  { mot: 'canceller', emploi: 'canceller un rendez-vous', sur: 'annuler', critique: 'OQLF (BDL), Usito', accepte: 'aucune', split: false },
  { mot: 'céduler', emploi: 'céduler une réunion', sur: 'fixer, prévoir, programmer', critique: 'OQLF (BDL), Usito', accepte: 'aucune', split: false },
  { mot: 'booker', emploi: 'booker une salle', sur: 'réserver, retenir', critique: 'OQLF (BDL)', accepte: 'absent du Robert en ligne et d’Usito', split: false },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §G. THE AUTHORED ROWS, ONE BLOCK PER ACT
 *
 *  `col` a collocation (kind phrase); `sent` a sentence; `rule` a grammar
 *  card whose prompt is a question and whose `fr` is the act's verdict.
 *  Every row carries fr, en, ipa and respell; corpus respellings carry no
 *  brackets. No criticised use is ever a row.
 * ══════════════════════════════════════════════════════════════════════════ */

type Row = Item;

const FCVR = ['flashcard', 'voiceflash', 'review'] as Item['drills'];
const FCVDR = ['flashcard', 'voiceflash', 'dictation', 'review'] as Item['drills'];
const FC = ['flashcard', 'review'] as Item['drills'];

const C: Register = 'courant';
const SO = { register: 'soutenu' as Register };
const GP = ['faux-amis-savants'];

const sent = (
  n: number, fr: string, en: string, ipa: string, respell: string, tags: string[],
  drills: Item['drills'] = FCVR, extra: Partial<Item> = {},
): Row => ({
  id: E(n), kind: 'sentence', level: LEVEL, theme: THEME, fr, en, ipa, respell,
  tags, drills, version: 1, register: C, grammarPoints: GP, ...extra,
});

/** A collocation: the safe word and what it goes with. */
const col = (
  n: number, fr: string, en: string, ipa: string, respell: string, tags: string[], notes: string,
  extra: Partial<Item> = {},
): Row => ({
  id: E(n), kind: 'phrase', level: LEVEL, theme: THEME, fr, en, ipa, respell,
  tags: ['collocation', ...tags], drills: FCVR, version: 1, register: C, grammarPoints: GP, notes, ...extra,
});

const rule = (
  n: number, fr: string, en: string, ipa: string, respell: string, prompt: string, notes: string, tags: string[],
): Row => sent(n, fr, en, ipa, respell, ['regle', ...tags], FC, { cardType: 'grammar', prompt, notes });

/* ── ACT 1 · LE MOT SAVANT QUI TROMPE (.1000-.1011) ─────────────────────── */

export const ACT1_ROWS: Row[] = [
  sent(1000, 'Ce mot ressemble à l’anglais, mais il ne dit pas la même chose.', 'This word looks like English, but it does not say the same thing.',
    '/sə mo ʁə.sɑ̃bl a lɑ̃.ɡlɛ mɛ il nə di pa la mɛm ʃoz/', 'suh MOH | ruh-SAHⁿBL a lahⁿ-GLEH | meh eel nuh dee pa la mem SHOHZ', ['methode'], FCVDR),
  sent(1001, 'Avant de l’écrire, vérifie son sens en français.', 'Before you write it, check its meaning in French.',
    '/a.vɑ̃ d(ə) le.kʁiʁ ve.ʁi.fi sɔ̃ sɑ̃s ɑ̃ fʁɑ̃.sɛ/', 'a-vahⁿ duh lay-KREER | vay-ree-FEE sohⁿ SAHⁿSS | ahⁿ frahⁿ-SEH', ['methode']),
  sent(1002, 'Selon l’Office québécois de la langue française, cet emploi est déconseillé.', 'According to the Office québécois de la langue française, this use is not recommended.',
    '/sə.lɔ̃ lɔ.fis ke.be.kwa d(ə) la lɑ̃ɡ fʁɑ̃.sɛz sɛ.tɑ̃.plwa ɛ de.kɔ̃.sɛ.je/', 'suh-lohⁿ lo-FEESS | kay-bay-KWA | duh la lahⁿg frahⁿ-SEZ | seh-tahⁿ-PLWA | eh day-kohⁿ-seh-YAY', ['selon']),
  sent(1003, 'Selon l’Académie française, c’est un anglicisme.', 'According to the Académie française, it is an anglicism.',
    '/sə.lɔ̃ la.ka.de.mi fʁɑ̃.sɛz sɛ.tœ̃.nɑ̃.ɡli.sism/', 'suh-lohⁿ la-ka-day-MEE frahⁿ-SEZ | seh-tuhⁿ-nahⁿ-glee-SEESM', ['selon']),
  sent(1004, 'Le Robert enregistre cet emploi, avec la marque « anglicisme ».', 'Le Robert records this use, with the label « anglicisme ».',
    '/lə ʁɔ.bɛʁ ɑ̃ʁ.ʒis.tʁə sɛ.tɑ̃.plwa a.vɛk la maʁk ɑ̃.ɡli.sism/', 'luh ro-BEHR | ahⁿr-ZHEESTR seh-tahⁿ-PLWA | a-vek la MARK | ahⁿ-glee-SEESM', ['selon']),
  sent(1005, 'Sur ce mot, les ouvrages de référence ne sont pas d’accord.', 'On this word, the reference works do not agree.',
    '/syʁ sə mo le.zu.vʁaʒ də ʁe.fe.ʁɑ̃s nə sɔ̃ pa da.kɔʁ/', 'sür suh MOH | lay-zoo-VRAZH duh ray-fay-RAHⁿSS | nuh sohⁿ pa da-KOR', ['selon'], FCVDR),
  rule(1006, REFRAME, REFRAME_EN,
    '/œ̃ mo sa.vɑ̃ ki ʁə.sɑ̃bl a lɑ̃.ɡlɛ ve.ʁi.fi sɔ̃ sɑ̃s fʁɑ̃.sɛ e ki la.ksɛpt/', 'uhⁿ moh sa-VAHⁿ | kee ruh-SAHⁿBL a lahⁿ-GLEH | vay-ree-FEE sohⁿ sahⁿss frahⁿ-SEH | ay kee lak-SEPT',
    'Un mot savant ressemble à l’anglais. Que vérifies-tu avant de l’écrire ?',
    'Deux choses : son sens en français, et qui accepte l’emploi que tu en fais. Quand les ouvrages ne sont pas d’accord, tu le dis : selon l’OQLF, selon l’Académie, selon Le Robert.',
    ['reframe', 'selon']),
  sent(1007, 'Un calque savant passe inaperçu dans un rapport.', 'A learned calque goes unnoticed in a report.',
    '/œ̃ kalk sa.vɑ̃ pa.si.na.pɛʁ.sy dɑ̃.zœ̃ ʁa.pɔʁ/', 'uhⁿ KALK sa-VAHⁿ | pa-see-na-pehr-SÜ | dahⁿ-zuhⁿ ra-POR', ['methode']),
  sent(1008, 'La réviseure a souligné six mots dans mon rapport.', 'The reviser underlined six words in my report.',
    '/la ʁe.vi.zœʁ a su.li.ɲe si mo dɑ̃ mɔ̃ ʁa.pɔʁ/', 'la ray-vee-ZUHR | a soo-lee-NYAY see MOH | dahⁿ mohⁿ ra-POR', ['scene']),
  sent(1009, 'Dans un texte soigné, choisis le mot que personne ne conteste.', 'In a careful text, choose the word nobody disputes.',
    '/dɑ̃.zœ̃ tɛkst swa.ɲe ʃwa.zi lə mo kə pɛʁ.sɔn nə kɔ̃.tɛst/', 'dahⁿ-zuhⁿ TEKST swa-NYAY | shwa-ZEE luh MOH | kuh pehr-SONN nuh kohⁿ-TEST', ['methode'], FCVDR),
  col(1010, 'un emprunt sémantique', 'a semantic borrowing', '/œ̃.nɑ̃.pʁœ̃ se.mɑ̃.tik/', 'uhⁿ-nahⁿ-PRUHⁿ say-mahⁿ-TEEK', ['methode'],
    'Un mot français prend le sens d’un mot anglais qui lui ressemble : initier pour lancer, opportunité pour occasion.'),
  col(1011, 'un emploi critiqué', 'a criticised use', '/œ̃.nɑ̃.plwa kʁi.ti.ke/', 'uhⁿ-nahⁿ-PLWA kree-tee-KAY', ['selon'],
    'Critiqué : au moins un ouvrage de référence le déconseille. Ce n’est pas toujours une faute aux yeux de tous.'),
];

/* ── ACT 2 · INITIER (.1012-.1023) ─────────────────────────────────────── */

export const ACT2_ROWS: Row[] = [
  col(1012, 'lancer un projet', 'to launch a project', '/lɑ̃.se œ̃ pʁɔ.ʒɛ/', 'lahⁿ-SAY uhⁿ pro-ZHEH', ['initier'],
    'Lancer : donner le départ. C’est le verbe le plus courant pour un projet, une campagne, une idée.'),
  col(1013, 'amorcer des négociations', 'to begin negotiations', '/a.mɔʁ.se de ne.ɡɔ.sja.sjɔ̃/', 'a-mor-SAY | day nay-go-sya-SYOHⁿ', ['initier'],
    'Amorcer : faire les premiers pas d’un processus. Registre soigné.', SO),
  col(1014, 'être à l’origine d’une idée', 'to be the source of an idea', '/ɛtʁ a lɔ.ʁi.ʒin dyn i.de/', 'etr a lo-ree-ZHEEN | dün ee-DAY', ['initier'],
    'Être à l’origine de : en être l’auteur, le point de départ.'),
  col(1015, 'initier quelqu’un à la poterie', 'to introduce someone to pottery', '/i.ni.sje kɛl.kœ̃ a la pɔ.tʁi/', 'ee-nee-SYAY kel-KUHⁿ | a la po-TREE', ['initier'],
    'Le sens français, correct partout : faire découvrir un art, une science, une pratique à quelqu’un.'),
  sent(1016, 'C’est Léa qui a lancé ce projet de jardin partagé.', 'It was Léa who launched this shared garden project.',
    '/sɛ le.a ki a lɑ̃.se sə pʁɔ.ʒɛ d(ə) ʒaʁ.dɛ̃ paʁ.ta.ʒe/', 'seh lay-A | kee a lahⁿ-SAY | suh pro-zheh duh zhar-DEHⁿ par-ta-ZHAY', ['initier'], FCVDR),
  sent(1017, 'Les deux syndicats ont entamé les négociations lundi.', 'The two unions began the negotiations on Monday.',
    '/le dø sɛ̃.di.ka ɔ̃.tɑ̃.ta.me le ne.ɡɔ.sja.sjɔ̃ lœ̃.di/', 'lay deu sehⁿ-dee-KA | ohⁿ-tahⁿ-ta-MAY | lay nay-go-sya-SYOHⁿ | luhⁿ-DEE', ['initier']),
  sent(1018, 'Elle est à l’origine de la pétition.', 'She is the one behind the petition.',
    '/ɛ.lɛ.ta lɔ.ʁi.ʒin də la pe.ti.sjɔ̃/', 'eh-leh-ta lo-ree-ZHEEN | duh la pay-tee-SYOHⁿ', ['initier']),
  sent(1019, 'Mon grand-père m’a initiée aux échecs.', 'My grandfather introduced me to chess.',
    '/mɔ̃ ɡʁɑ̃.pɛʁ ma i.ni.sje o.ze.ʃɛk/', 'mohⁿ grahⁿ-PEHR | ma ee-nee-SYAY | oh-zay-SHEK', ['initier']),
  sent(1020, 'En chimie, on dit qu’une étincelle initie la réaction.', 'In chemistry, a spark is said to initiate the reaction.',
    '/ɑ̃ ʃi.mi ɔ̃ di kyn e.tɛ̃.sɛl i.ni.si la ʁe.ak.sjɔ̃/', 'ahⁿ shee-MEE | ohⁿ DEE | kün ay-tehⁿ-SEL | ee-nee-SEE | la ray-ak-SYOHⁿ', ['initier'], FCVR, SO),
  rule(1021, 'Initier quelqu’un à une pratique, oui ; pour un projet, dis lancer.', 'Introduce someone to a practice, yes; for a project, say lancer.',
    '/i.ni.sje kɛl.kœ̃ a yn pʁa.tik wi puʁ œ̃ pʁɔ.ʒɛ di lɑ̃.se/', 'ee-nee-SYAY kel-KUHⁿ | a ün pra-TEEK | WEE | poor uhⁿ pro-ZHEH | dee lahⁿ-SAY',
    'Initier un projet : qui le déconseille ?',
    'Selon l’OQLF et l’Académie, initier au sens de lancer vient de l’anglais to initiate : dis lancer, amorcer, entamer. Le Dictionnaire de l’Académie ajoute que l’emploi n’est pas en soi condamnable, mais qu’il se répand abusivement.',
    ['initier']),
  sent(1022, 'La ville a mis sur pied un programme d’aide aux aînés.', 'The city set up an assistance programme for seniors.',
    '/la vil a mi syʁ pje œ̃ pʁɔ.ɡʁam dɛd o.ze.ne/', 'la VEEL | a mee sür PYAY | uhⁿ pro-GRAMM | ded oh-zay-NAY', ['initier']),
  sent(1023, 'Qui a pris l’initiative de cette rencontre ?', 'Who took the initiative for this meeting?',
    '/ki a pʁi li.ni.sja.tiv də sɛt ʁɑ̃.kɔ̃tʁ/', 'kee a PREE | lee-nee-sya-TEEV | duh set rahⁿ-KOHⁿTR', ['initier']),
];

/* ── ACT 3 · OPPORTUNITÉ (.1024-.1035) ─────────────────────────────────── */

export const ACT3_ROWS: Row[] = [
  col(1024, 'saisir l’occasion', 'to seize the opportunity', '/se.ziʁ lɔ.ka.zjɔ̃/', 'say-ZEER lo-ka-ZYOHⁿ', ['opportunite'],
    'Une occasion : une circonstance qui tombe bien. On la saisit, on la guette, on la laisse passer.'),
  col(1025, 'avoir la chance de', 'to have the chance to', '/a.vwaʁ la ʃɑ̃s də/', 'a-vwar la SHAHⁿSS duh', ['opportunite'],
    'Avoir la chance de + infinitif : la circonstance heureuse qui a permis quelque chose.'),
  col(1026, 'des perspectives de carrière', 'career prospects', '/de pɛʁs.pɛk.tiv də ka.ʁjɛʁ/', 'day pehrs-pek-TEEV | duh ka-RYEHR', ['opportunite'],
    'Au pluriel, pour l’avenir professionnel : des perspectives, des débouchés, des possibilités d’avancement.'),
  col(1027, 'discuter l’opportunité d’une mesure', 'to debate whether a measure is timely', '/dis.ky.te lɔ.pɔʁ.ty.ni.te dyn mə.zyʁ/', 'dees-kü-TAY | lo-por-tü-nee-TAY | dün muh-ZÜR', ['opportunite'],
    'Le sens français, correct partout : le caractère de ce qui vient à propos. On juge de l’opportunité d’une décision.', SO),
  sent(1028, 'C’était une belle occasion de montrer ce que je sais faire.', 'It was a fine opportunity to show what I can do.',
    '/se.tɛ yn bɛl ɔ.ka.zjɔ̃ d(ə) mɔ̃.tʁe s(ə) kə ʒə sɛ fɛʁ/', 'say-TEH | ün bel o-ka-ZYOHⁿ | duh mohⁿ-TRAY | skuh zhuh seh FEHR', ['opportunite'], FCVDR),
  sent(1029, 'J’ai eu la chance de lui parler avant son départ.', 'I had the chance to speak to him before he left.',
    '/ʒe y la ʃɑ̃s də lɥi paʁ.le a.vɑ̃ sɔ̃ de.paʁ/', 'zhay ü la SHAHⁿSS | duh lwee par-LAY | a-vahⁿ sohⁿ day-PAR', ['opportunite']),
  sent(1030, 'Ce secteur offre beaucoup de débouchés aux jeunes diplômés.', 'This sector offers many openings to young graduates.',
    '/sə sɛk.tœʁ ɔfʁ bo.ku d(ə) de.bu.ʃe o ʒœn di.plo.me/', 'suh sek-TUHR | OFR boh-KOO | duh day-boo-SHAY | oh zhuhnn dee-ploh-MAY', ['opportunite']),
  sent(1031, 'Le conseil doute de l’opportunité de cette dépense.', 'The council doubts whether this expense is timely.',
    '/lə kɔ̃.sɛj dut də lɔ.pɔʁ.ty.ni.te d(ə) sɛt de.pɑ̃s/', 'luh kohⁿ-SEY | DOOT | duh lo-por-tü-nee-TAY | duh set day-PAHⁿSS', ['opportunite'], FCVR, SO),
  sent(1032, 'Je suis heureuse d’avoir l’occasion de vous rencontrer.', 'I am glad to have the opportunity to meet you.',
    '/ʒə sɥi.zœ.ʁøz da.vwaʁ lɔ.ka.zjɔ̃ d(ə) vu ʁɑ̃.kɔ̃.tʁe/', 'zhuh swee-zuh-REUZ | da-vwar lo-ka-ZYOHⁿ | duh voo rahⁿ-kohⁿ-TRAY', ['opportunite']),
  rule(1033, 'Une occasion se saisit ; l’opportunité d’une mesure se discute.', 'An occasion is seized; the timeliness of a measure is debated.',
    '/yn ɔ.ka.zjɔ̃ sə se.zi lɔ.pɔʁ.ty.ni.te dyn mə.zyʁ sə dis.kyt/', 'ün o-ka-ZYOHⁿ suh say-ZEE | lo-por-tü-nee-TAY dün muh-ZÜR | suh dees-KÜT',
    'Une belle opportunité : que disent les ouvrages ?',
    'Selon l’Académie, opportunité au sens d’occasion est un anglicisme ; l’OQLF rappelle que l’emploi est critiqué. Le Robert l’enregistre, marqué « anglicisme », et Usito le dit parfois critiqué. Dans un texte soigné, occasion ne prête à aucune critique.',
    ['opportunite']),
  sent(1034, 'Ne laisse pas passer une occasion pareille.', 'Do not let an opportunity like that slip by.',
    '/nə lɛs pa pa.se yn ɔ.ka.zjɔ̃ pa.ʁɛj/', 'nuh LESS pa pa-SAY | ün o-ka-ZYOHⁿ pa-REY', ['opportunite']),
  col(1035, 'un moment propice', 'the right moment', '/œ̃ mɔ.mɑ̃ pʁɔ.pis/', 'uhⁿ mo-MAHⁿ pro-PEESS', ['opportunite'],
    'Propice : favorable. Pour window of opportunity, Usito propose moment propice, occasion rêvée.'),
];

/* ── ACT 4 · ALTERNATIVE (.1036-.1047) ─────────────────────────────────── */

export const ACT4_ROWS: Row[] = [
  col(1036, 'une solution de rechange', 'a fallback solution', '/yn sɔ.ly.sjɔ̃ d(ə) ʁə.ʃɑ̃ʒ/', 'ün so-lü-SYOHⁿ | duh ruh-SHAHⁿZH', ['alternative'],
    'De rechange : prévu pour remplacer. Une roue de rechange, une solution de rechange.'),
  col(1037, 'une autre option', 'another option', '/y.no.tʁɔp.sjɔ̃/', 'ü-noh-trop-SYOHⁿ', ['alternative'],
    'Une option : une des possibilités entre lesquelles on choisit.'),
  col(1038, 'se trouver devant une alternative', 'to face a choice between two options', '/sə tʁu.ve d(ə).vɑ̃ y.nal.tɛʁ.na.tiv/', 'suh troo-VAY | duh-vahⁿ ü-nal-tehr-na-TEEV', ['alternative'],
    'Le sens français, correct partout : l’alternative est le choix entre deux solutions qui s’excluent.', SO),
  col(1039, 'une solution de remplacement', 'a substitute solution', '/yn sɔ.ly.sjɔ̃ d(ə) ʁɑ̃.plas.mɑ̃/', 'ün so-lü-SYOHⁿ | duh rahⁿ-plass-MAHⁿ', ['alternative'],
    'De remplacement : qui prend la place de l’autre. Proposé par l’OQLF et Le Robert pour l’emploi critiqué.'),
  sent(1040, 'Si le train est annulé, quelle est la solution de rechange ?', 'If the train is cancelled, what is the fallback?',
    '/si lə tʁɛ̃ ɛ.ta.ny.le kɛ.lɛ la sɔ.ly.sjɔ̃ d(ə) ʁə.ʃɑ̃ʒ/', 'see luh TREHⁿ | eh-ta-nü-LAY | keh-LEH | la so-lü-SYOHⁿ duh ruh-SHAHⁿZH', ['alternative'], FCVDR),
  sent(1041, 'Nous avons trois options, et aucune n’est parfaite.', 'We have three options, and none is perfect.',
    '/nu.za.vɔ̃ tʁwa.zɔp.sjɔ̃ e o.kyn nɛ paʁ.fɛt/', 'noo-za-vohⁿ trwa-zop-SYOHⁿ | ay oh-KÜNN | neh par-FET', ['alternative']),
  sent(1042, 'L’alternative est simple : partir ce soir ou attendre lundi.', 'The choice is simple: leave tonight or wait until Monday.',
    '/lal.tɛʁ.na.tiv ɛ sɛ̃pl paʁ.tiʁ sə swaʁ u a.tɑ̃dʁ lœ̃.di/', 'lal-tehr-na-TEEV eh SEHⁿPL | par-teer suh SWAR | oo a-tahⁿdr luhⁿ-DEE', ['alternative']),
  sent(1043, 'Je n’ai pas le choix : il n’y a pas d’autre solution.', 'I have no choice: there is no other solution.',
    '/ʒə nɛ pa lə ʃwa il nja pa dotʁ sɔ.ly.sjɔ̃/', 'zhuh neh pa luh SHWA | eel nya pa dohtr so-lü-SYOHⁿ', ['alternative']),
  rule(1044, 'Une alternative, c’est un choix entre deux ; chaque branche est une option.', 'An alternative is a choice between two; each branch is an option.',
    '/y.nal.tɛʁ.na.tiv sɛ.tœ̃ ʃwa ɑ̃tʁ dø ʃak bʁɑ̃ʃ ɛ.ty.nɔp.sjɔ̃/', 'ü-nal-tehr-na-TEEV | seh-tuhⁿ SHWA | ahⁿtr DEU | shak BRAHⁿSH | eh-tü-nop-SYOHⁿ',
    'Trois alternatives : est-ce possible ?',
    'Au sens strict, non : l’alternative est le choix lui-même, entre deux solutions. Selon l’OQLF, Le Robert et Usito, alternative au sens d’option est critiqué ; l’OQLF ajoute que deux alternatives est un pléonasme. Dis trois options, trois solutions.',
    ['alternative']),
  sent(1045, 'Cette crème végétale remplace bien le beurre.', 'This plant-based cream is a good substitute for butter.',
    '/sɛt kʁɛm ve.ʒe.tal ʁɑ̃.plas bjɛ̃ lə bœʁ/', 'set KREM vay-zhay-TAL | rahⁿ-PLASS | byehⁿ luh BUHR', ['alternative']),
  sent(1046, 'Le comité propose deux solutions possibles.', 'The committee is proposing two possible solutions.',
    '/lə kɔ.mi.te pʁɔ.poz dø sɔ.ly.sjɔ̃ pɔ.sibl/', 'luh ko-mee-TAY | pro-POHZ | deu so-lü-SYOHⁿ po-SEEBL', ['alternative']),
  sent(1047, 'La clinique offre une autre possibilité de traitement.', 'The clinic offers another treatment option.',
    '/la kli.nik ɔfʁ y.notʁ pɔ.si.bi.li.te d(ə) tʁɛt.mɑ̃/', 'la klee-NEEK | OFR | ü-NOHTR po-see-bee-lee-TAY | duh tret-MAHⁿ', ['alternative']),
];

/* ── ACT 5 · IMPACTER (.1048-.1059) ────────────────────────────────────── */

export const ACT5_ROWS: Row[] = [
  col(1048, 'toucher les petits commerces', 'to hit small shops', '/tu.ʃe le p(ə).ti kɔ.mɛʁs/', 'too-SHAY | lay ptee ko-MEHRSS', ['impacter'],
    'Toucher : atteindre, concerner. Le verbe le plus simple pour ce que fait une crise.'),
  col(1049, 'avoir une incidence sur les prix', 'to have an effect on prices', '/a.vwaʁ yn ɛ̃.si.dɑ̃s syʁ le pʁi/', 'a-vwar ün ehⁿ-see-DAHⁿSS | sür lay PREE', ['impacter'],
    'Une incidence : une conséquence, un effet. Registre soigné, très courant dans la presse.', SO),
  col(1050, 'se répercuter sur les ventes', 'to have knock-on effects on sales', '/sə ʁe.pɛʁ.ky.te syʁ le vɑ̃t/', 'suh ray-pehr-kü-TAY | sür lay VAHⁿT', ['impacter'],
    'Se répercuter : se transmettre par contrecoup, d’un point à un autre.'),
  col(1051, 'peser sur le budget', 'to weigh on the budget', '/pə.ze syʁ lə byd.ʒɛ/', 'puh-ZAY sür luh büd-ZHEH', ['impacter'],
    'Peser sur : charger, rendre plus difficile.'),
  sent(1052, 'La hausse du carburant touche d’abord les livreurs.', 'The rise in fuel prices hits delivery drivers first.',
    '/la os dy kaʁ.by.ʁɑ̃ tuʃ da.bɔʁ le li.vʁœʁ/', 'la OHSS dü kar-bü-RAHⁿ | TOOSH | da-BOR lay lee-VRUHR', ['impacter'], FCVDR),
  sent(1053, 'Les travaux ont eu une incidence sur la fréquentation du marché.', 'The roadworks had an effect on the number of people visiting the market.',
    '/le tʁa.vo ɔ̃.ty yn ɛ̃.si.dɑ̃s syʁ la fʁe.kɑ̃.ta.sjɔ̃ dy maʁ.ʃe/', 'lay tra-VOH | ohⁿ-TÜ | ün ehⁿ-see-DAHⁿSS | sür la fray-kahⁿ-ta-SYOHⁿ | dü mar-SHAY', ['impacter']),
  sent(1054, 'La grève s’est répercutée sur tout le réseau.', 'The strike had knock-on effects across the whole network.',
    '/la ɡʁɛv sɛ ʁe.pɛʁ.ky.te syʁ tu l(ə) ʁe.zo/', 'la GREV | seh ray-pehr-kü-TAY | sür tool ray-ZOH', ['impacter']),
  sent(1055, 'Cette décision concerne directement les locataires.', 'This decision directly concerns the tenants.',
    '/sɛt de.si.zjɔ̃ kɔ̃.sɛʁn di.ʁɛk.tə.mɑ̃ le lɔ.ka.tɛʁ/', 'set day-see-ZYOHⁿ | kohⁿ-SEHRN | dee-rek-tuh-MAHⁿ | lay lo-ka-TEHR', ['impacter']),
  sent(1056, 'Le froid a ralenti les chantiers tout l’hiver.', 'The cold slowed down the building sites all winter.',
    '/lə fʁwa a ʁa.lɑ̃.ti le ʃɑ̃.tje tu li.vɛʁ/', 'luh FRWA | a ra-lahⁿ-TEE lay shahⁿ-TYAY | too lee-VEHR', ['impacter']),
  rule(1057, 'Dans un texte soigné, une crise touche ou pèse : impacter reste critiqué.', 'In a careful text a crisis touches or weighs: impacter is still criticised.',
    '/dɑ̃.zœ̃ tɛkst swa.ɲe yn kʁiz tuʃ u pɛz ɛ̃.pak.te ʁɛst kʁi.ti.ke/', 'dahⁿ-zuhⁿ TEKST swa-NYAY | ün KREEZ | TOOSH oo PEZ | ehⁿ-pak-TAY | rest kree-tee-KAY',
    'Impacter : accepté ou non ?',
    'Selon l’Académie, c’est une forme verbale fautive ; l’OQLF le déconseille. Le Robert l’enregistre, marqué « anglicisme », et Usito le dit parfois critiqué. Le verbe précis dit d’ailleurs plus : toucher, ralentir, faire baisser.',
    ['impacter']),
  sent(1058, 'Quel effet cette mesure aura-t-elle sur les familles ?', 'What effect will this measure have on families?',
    '/kɛ.lɛ.fɛ sɛt mə.zyʁ o.ʁa.tɛl syʁ le fa.mij/', 'keh-leh-FEH | set muh-ZÜR | oh-ra-TEL | sür lay fa-MEEY', ['impacter']),
  sent(1059, 'La pluie a fait baisser la fréquentation de moitié.', 'The rain cut attendance by half.',
    '/la plɥi a fɛ be.se la fʁe.kɑ̃.ta.sjɔ̃ də mwa.tje/', 'la PLWEE | a feh bay-SAY | la fray-kahⁿ-ta-SYOHⁿ | duh mwa-TYAY', ['impacter'], FCVDR),
];

/* ── ACT 6 · ACADÉMIQUE ET VERSATILE (.1060-.1071) ─────────────────────── */

export const ACT6_ROWS: Row[] = [
  col(1060, 'l’année universitaire', 'the academic year (university)', '/la.ne y.ni.vɛʁ.si.tɛʁ/', 'la-NAY ü-nee-vehr-see-TEHR', ['academique'],
    'À l’université : l’année universitaire. À l’école : l’année scolaire. L’OQLF a officialisé les deux.'),
  col(1061, 'le dossier scolaire', 'the school record', '/lə do.sje skɔ.lɛʁ/', 'luh do-SYAY sko-LEHR', ['academique'],
    'Scolaire : de l’école. Le dossier scolaire réunit notes et bulletins.'),
  col(1062, 'une formation universitaire', 'a university education', '/yn fɔʁ.ma.sjɔ̃ y.ni.vɛʁ.si.tɛʁ/', 'ün for-ma-SYOHⁿ | ü-nee-vehr-see-TEHR', ['academique'],
    'Pour academic background : formation universitaire, ou parcours universitaire.'),
  col(1063, 'un employé polyvalent', 'a versatile employee', '/œ̃.nɑ̃.plwa.je pɔ.li.va.lɑ̃/', 'uhⁿ-nahⁿ-plwa-YAY | po-lee-va-LAHⁿ', ['versatile'],
    'Polyvalent : capable de plusieurs tâches, de plusieurs usages.'),
  sent(1064, 'L’année universitaire commence début septembre.', 'The academic year starts at the beginning of September.',
    '/la.ne y.ni.vɛʁ.si.tɛʁ kɔ.mɑ̃s de.by sɛp.tɑ̃bʁ/', 'la-NAY ü-nee-vehr-see-TEHR | ko-MAHⁿSS | day-bü sep-TAHⁿBR', ['academique'], FCVDR),
  sent(1065, 'Elle a publié des travaux universitaires remarqués.', 'She has published notable academic work.',
    '/ɛ.la py.bli.je de tʁa.vo y.ni.vɛʁ.si.tɛʁ ʁə.maʁ.ke/', 'eh-la pü-blee-YAY | day tra-VOH ü-nee-vehr-see-TEHR | ruh-mar-KAY', ['academique']),
  sent(1066, 'Son style est un peu trop académique à mon goût.', 'His style is a little too academic for my taste.',
    '/sɔ̃ stil ɛ.tœ̃ pø tʁo.pa.ka.de.mik a mɔ̃ ɡu/', 'sohⁿ STEEL | eh-tuhⁿ PEU | troh-pa-ka-day-MEEK | a mohⁿ GOO', ['academique']),
  sent(1067, 'Ce robot culinaire est vraiment polyvalent.', 'This food processor is really versatile.',
    '/sə ʁɔ.bo ky.li.nɛʁ ɛ vʁɛ.mɑ̃ pɔ.li.va.lɑ̃/', 'suh ro-BOH kü-lee-NEHR | eh vreh-MAHⁿ | po-lee-va-LAHⁿ', ['versatile']),
  sent(1068, 'L’opinion publique s’est montrée versatile tout l’été.', 'Public opinion proved fickle all summer.',
    '/lɔ.pi.njɔ̃ py.blik sɛ mɔ̃.tʁe vɛʁ.sa.til tu le.te/', 'lo-pee-NYOHⁿ pü-BLEEK | seh mohⁿ-TRAY vehr-sa-TEEL | too lay-TAY', ['versatile']),
  rule(1069, 'Académique renvoie à une académie ; pour l’université, dis universitaire.', 'Académique refers to an academy; for the university, say universitaire.',
    '/a.ka.de.mik ʁɑ̃.vwa a y.na.ka.de.mi puʁ ly.ni.vɛʁ.si.te di y.ni.vɛʁ.si.tɛʁ/', 'a-ka-day-MEEK | rahⁿ-VWA | a ü-na-ka-day-MEE | poor lü-nee-vehr-see-TAY | dee ü-nee-vehr-see-TEHR',
    'L’année académique : qui le critique ?',
    'L’Académie et l’OQLF déconseillent académique au sens d’universitaire ou de scolaire, et Usito aussi. En Belgique, les universités écrivent pourtant calendrier académique : c’est un usage, pas un avis d’autorité. Dans un texte pour tous, universitaire passe partout.',
    ['academique']),
  rule(1070, 'Versatile veut dire changeant ; pour un outil à plusieurs usages, dis polyvalent.', 'Versatile means fickle; for a tool with several uses, say polyvalent.',
    '/vɛʁ.sa.til vø diʁ ʃɑ̃.ʒɑ̃ puʁ œ̃.nu.ti a ply.zjœʁ.zy.zaʒ di pɔ.li.va.lɑ̃/', 'vehr-sa-TEEL veu deer shahⁿ-ZHAHⁿ | poor uhⁿ-noo-TEE | a plü-zyuhr-zü-ZAZH | dee po-lee-va-LAHⁿ',
    'Un outil versatile : polyvalent, ou changeant ?',
    'En français, versatile se dit de qui change souvent d’avis (Le Robert). Selon l’OQLF et Usito, l’emploi au sens de polyvalent vient de l’anglais et est critiqué.',
    ['versatile']),
  sent(1071, 'Il nous faut quelqu’un de souple, capable de passer d’une tâche à l’autre.', 'We need someone adaptable, able to switch from one task to another.',
    '/il nu fo kɛl.kœ̃ d(ə) supl ka.pabl də pa.se dyn taʃ a lotʁ/', 'eel noo FOH | kel-kuhⁿ duh SOOPL | ka-PABL | duh pa-SAY dün TASH a LOHTR', ['versatile']),
];

/* ── ACT 7 · JURIDICTION (.1072-.1083) ─────────────────────────────────── */

export const ACT7_ROWS: Row[] = [
  col(1072, 'avoir compétence en matière de', 'to have jurisdiction over', '/a.vwaʁ kɔ̃.pe.tɑ̃s ɑ̃ ma.tjɛʁ də/', 'a-vwar kohⁿ-pay-TAHⁿSS | ahⁿ ma-TYEHR duh', ['juridiction'],
    'La compétence : le domaine où une autorité peut décider. Les provinces, les États, les ministères ont des compétences.', SO),
  col(1073, 'relever de la compétence de', 'to fall within the powers of', '/ʁə.lə.ve d(ə) la kɔ̃.pe.tɑ̃s də/', 'ruh-luh-VAY | duh la kohⁿ-pay-TAHⁿSS duh', ['juridiction'],
    'Relever de : dépendre de. Cette question relève de la compétence des communes.'),
  col(1074, 'le ressort d’un tribunal', 'the territorial jurisdiction of a court', '/lə ʁə.sɔʁ dœ̃ tʁi.by.nal/', 'luh ruh-SOR | duhⁿ tree-bü-NAL', ['juridiction'],
    'Le ressort : le territoire où une autorité est compétente. Ce n’est pas de mon ressort : ce n’est pas mon domaine.', SO),
  col(1075, 'une juridiction civile', 'a civil court', '/yn ʒy.ʁi.dik.sjɔ̃ si.vil/', 'ün zhü-ree-deek-SYOHⁿ see-VEEL', ['juridiction'],
    'Le sens français, correct partout : un tribunal, ou l’ensemble des tribunaux d’une même nature.'),
  sent(1076, 'Au Canada, la santé relève surtout de la compétence des provinces.', 'In Canada, health falls mainly under provincial jurisdiction.',
    '/o ka.na.da la sɑ̃.te ʁə.lɛv syʁ.tu d(ə) la kɔ̃.pe.tɑ̃s de pʁɔ.vɛ̃s/', 'oh ka-na-DA | la sahⁿ-TAY | ruh-LEV sür-TOO | duh la kohⁿ-pay-TAHⁿSS | day pro-VEHⁿSS', ['juridiction'], FCVDR),
  sent(1077, 'Cette affaire sera jugée par une juridiction pénale.', 'This case will be tried by a criminal court.',
    '/sɛ.ta.fɛʁ sə.ʁa ʒy.ʒe paʁ yn ʒy.ʁi.dik.sjɔ̃ pe.nal/', 'seh-ta-FEHR | suh-ra zhü-ZHAY | par ün zhü-ree-deek-SYOHⁿ pay-NAL', ['juridiction']),
  sent(1078, 'Dans d’autres pays, la règle est différente.', 'In other countries, the rule is different.',
    '/dɑ̃ do.tʁə pe.i la ʁɛɡl ɛ di.fe.ʁɑ̃t/', 'dahⁿ doh-truh pay-EE | la REGL | eh dee-fay-RAHⁿT', ['juridiction']),
  sent(1079, 'Cette question n’est pas du ressort de la mairie.', 'This question is not a matter for the town hall.',
    '/sɛt kɛs.tjɔ̃ nɛ pa dy ʁə.sɔʁ d(ə) la mɛ.ʁi/', 'set kes-TYOHⁿ | neh pa dü ruh-SOR | duh la meh-REE', ['juridiction']),
  rule(1080, 'Une juridiction juge ; une province ou un ministère a des compétences.', 'A court judges; a province or a ministry has powers.',
    '/yn ʒy.ʁi.dik.sjɔ̃ ʒyʒ yn pʁɔ.vɛ̃s u œ̃ mi.nis.tɛʁ a de kɔ̃.pe.tɑ̃s/', 'ün zhü-ree-deek-SYOHⁿ ZHÜZH | ün pro-VEHⁿSS | oo uhⁿ mee-nees-TEHR | a day kohⁿ-pay-TAHⁿSS',
    'D’autres juridictions : pour dire d’autres pays ?',
    'Pour un tribunal ou le pouvoir de juger, juridiction est juste partout. Pour l’autorité d’un gouvernement ou pour des pays, Usito le critique comme calque de jurisdiction, et le GDT le marque à éviter au sens de ressort ; Le Robert admet l’étendue du pouvoir de juger. Dis compétence, ressort, pays, province.',
    ['juridiction']),
  sent(1081, 'Le ministère n’a pas l’autorité nécessaire pour trancher.', 'The ministry does not have the authority to decide.',
    '/lə mi.nis.tɛʁ na pa lo.tɔ.ʁi.te ne.se.sɛʁ puʁ tʁɑ̃.ʃe/', 'luh mee-nees-TEHR | na pa lo-to-ree-TAY nay-say-SEHR | poor trahⁿ-SHAY', ['juridiction']),
  sent(1082, 'Plusieurs provinces ont déjà adopté une loi semblable.', 'Several provinces have already passed a similar law.',
    '/ply.zjœʁ pʁɔ.vɛ̃s ɔ̃ de.ʒa a.dɔp.te yn lwa sɑ̃.blabl/', 'plü-zyuhr pro-VEHⁿSS | ohⁿ day-ZHA a-dop-TAY | ün LWA sahⁿ-BLABL', ['juridiction']),
  col(1083, 'dans les autres provinces', 'in the other provinces', '/dɑ̃ le.zo.tʁə pʁɔ.vɛ̃s/', 'dahⁿ lay-zoh-truh pro-VEHⁿSS', ['juridiction'],
    'Pour other jurisdictions : nomme la réalité, les autres provinces, les autres pays, les autres États.'),
];

/* ── ACT 8 · ÉLIGIBLE (.1084-.1095) ────────────────────────────────────── */

export const ACT8_ROWS: Row[] = [
  col(1084, 'être admissible à une bourse', 'to be eligible for a grant', '/ɛtʁ ad.mi.sibl a yn buʁs/', 'etr ad-mee-SEEBL | a ün BOORSS', ['eligible'],
    'Admissible : qui remplit les conditions pour être admis, pour recevoir quelque chose.'),
  col(1085, 'avoir droit à une prestation', 'to be entitled to a benefit', '/a.vwaʁ dʁwa a yn pʁɛs.ta.sjɔ̃/', 'a-vwar DRWA | a ün press-ta-SYOHⁿ', ['eligible'],
    'Avoir droit à : la tournure que propose l’Académie pour une aide, une retraite, une prestation.'),
  col(1086, 'remplir les conditions requises', 'to meet the requirements', '/ʁɑ̃.pliʁ le kɔ̃.di.sjɔ̃ ʁə.kiz/', 'rahⁿ-PLEER | lay kohⁿ-dee-SYOHⁿ ruh-KEEZ', ['eligible'],
    'La tournure la plus sûre, valable partout.'),
  col(1087, 'être éligible au conseil municipal', 'to be eligible for the town council', '/ɛ.tʁe.li.ʒi.blo kɔ̃.sɛj my.ni.si.pal/', 'eh-tray-lee-ZHEEBL | oh kohⁿ-SEY mü-nee-see-PAL', ['eligible'],
    'Le sens français, correct partout : qui peut être élu.'),
  sent(1088, 'Tu es admissible à cette bourse si tu as moins de trente ans.', 'You are eligible for this grant if you are under thirty.',
    '/ty ɛ ad.mi.sibl a sɛt buʁs si ty a mwɛ̃ d(ə) tʁɑ̃.tɑ̃/', 'tü eh ad-mee-SEEBL | a set BOORSS | see tü a mwehⁿ duh trahⁿ-TAHⁿ', ['eligible'], FCVDR),
  sent(1089, 'Les familles qui remplissent les conditions recevront l’aide en mars.', 'Families who meet the requirements will receive the aid in March.',
    '/le fa.mij ki ʁɑ̃.plis le kɔ̃.di.sjɔ̃ ʁə.sə.vʁɔ̃ lɛd ɑ̃ maʁs/', 'lay fa-MEEY | kee rahⁿ-PLEESS lay kohⁿ-dee-SYOHⁿ | ruh-suh-VROHⁿ LED | ahⁿ MARSS', ['eligible']),
  sent(1090, 'À soixante-cinq ans, Martine aura droit à sa pension complète.', 'At sixty-five, Martine will be entitled to her full pension.',
    '/a swa.sɑ̃t.sɛ̃.kɑ̃ maʁ.tin o.ʁa dʁwa a sa pɑ̃.sjɔ̃ kɔ̃.plɛt/', 'a swa-sahⁿt-sehⁿ-KAHⁿ | mar-TEEN | oh-ra DRWA | a sa pahⁿ-syohⁿ kohⁿ-PLET', ['eligible']),
  sent(1091, 'À dix-sept ans, on n’est pas encore éligible aux élections municipales.', 'At seventeen, you cannot yet stand in municipal elections.',
    '/a di.sɛ.tɑ̃ ɔ̃ nɛ pa.zɑ̃.kɔʁ e.li.ʒibl o.ze.lɛk.sjɔ̃ my.ni.si.pal/', 'a dee-seh-TAHⁿ | ohⁿ neh pa-zahⁿ-KOR ay-lee-ZHEEBL | oh-zay-lek-SYOHⁿ mü-nee-see-PAL', ['eligible']),
  rule(1092, 'Éligible, c’est pouvoir être élu ; pour une aide, admissible passe partout.', 'Éligible means able to be elected; for an aid, admissible works everywhere.',
    '/e.li.ʒibl sɛ pu.vwaʁ ɛtʁ e.ly puʁ y.nɛd ad.mi.sibl pas paʁ.tu/', 'ay-lee-ZHEEBL | seh poo-vwar etr ay-LÜ | poor ü-NED | ad-mee-SEEBL | pass par-TOO',
    'Éligible à une bourse : faute ou non ?',
    'Cela dépend de l’ouvrage. L’Académie et l’OQLF le déconseillent ; Usito le dit critiqué au Québec, mais généralement pas en France ; Le Robert l’enregistre sans marque. Avec admissible ou avoir droit à, personne ne te reprendra.',
    ['eligible']),
  sent(1093, 'Seuls les dossiers complets seront jugés admissibles.', 'Only complete applications will be deemed eligible.',
    '/sœl le do.sje kɔ̃.plɛ sə.ʁɔ̃ ʒy.ʒe ad.mi.sibl/', 'suhl lay do-SYAY kohⁿ-PLEH | suh-rohⁿ zhü-ZHAY ad-mee-SEEBL', ['eligible']),
  sent(1094, 'Ces travaux ouvrent droit à un crédit d’impôt.', 'This work qualifies for a tax credit.',
    '/se tʁa.vo uvʁ dʁwa a œ̃ kʁe.di dɛ̃.po/', 'say tra-VOH | OOVR DRWA | a uhⁿ kray-DEE dehⁿ-POH', ['eligible']),
  col(1095, 'les critères d’admissibilité', 'the eligibility criteria', '/le kʁi.tɛʁ dad.mi.si.bi.li.te/', 'lay kree-TEHR | dad-mee-see-bee-lee-TAY', ['eligible'],
    'Pour eligibility : l’admissibilité. L’éligibilité reste le droit d’être candidat à une élection.'),
];

/* ── ACT 9 · DIGITAL OU NUMÉRIQUE (.1096-.1107) ────────────────────────── */

export const ACT9_ROWS: Row[] = [
  col(1096, 'les outils numériques', 'digital tools', '/le.zu.ti ny.me.ʁik/', 'lay-zoo-TEE nü-may-REEK', ['digital'],
    'Numérique : qui représente les données par des nombres. L’adjectif recommandé par FranceTerme et l’OQLF.'),
  col(1097, 'numériser des archives', 'to digitise archives', '/ny.me.ʁi.ze de.zaʁ.ʃiv/', 'nü-may-ree-ZAY | day-zar-SHEEV', ['digital'],
    'Numériser, la numérisation : pour digitize. L’OQLF déconseille digitaliser.'),
  col(1098, 'la stratégie numérique', 'the digital strategy', '/la stʁa.te.ʒi ny.me.ʁik/', 'la stra-tay-ZHEE nü-may-REEK', ['digital'],
    'Pour digital strategy, dans une entreprise ou une administration.'),
  col(1099, 'la communication numérique', 'digital communications', '/la kɔ.my.ni.ka.sjɔ̃ ny.me.ʁik/', 'la ko-mü-nee-ka-SYOHⁿ | nü-may-REEK', ['digital'],
    'Pour digital communications, dans une offre d’emploi ou un organigramme.'),
  sent(1100, 'La bibliothèque a numérisé ses plus vieux journaux.', 'The library has digitised its oldest newspapers.',
    '/la bi.bli.jɔ.tɛk a ny.me.ʁi.ze se ply vjø ʒuʁ.no/', 'la bee-blee-yo-TEK | a nü-may-ree-ZAY | say plü vyeu zhoor-NOH', ['digital'], FCVDR),
  sent(1101, 'Nous cherchons un responsable de la communication numérique.', 'We are looking for a digital communications manager.',
    '/nu ʃɛʁ.ʃɔ̃.zœ̃ ʁɛs.pɔ̃.sabl də la kɔ.my.ni.ka.sjɔ̃ ny.me.ʁik/', 'noo shehr-shohⁿ-zuhⁿ res-pohⁿ-SABL | duh la ko-mü-nee-ka-SYOHⁿ nü-may-REEK', ['digital']),
  sent(1102, 'Les empreintes digitales sont prises au guichet.', 'Fingerprints are taken at the counter.',
    '/le.zɑ̃.pʁɛ̃t di.ʒi.tal sɔ̃ pʁiz o ɡi.ʃɛ/', 'lay-zahⁿ-PREHⁿT dee-zhee-TAL | sohⁿ PREEZ | oh ghee-SHEH', ['digital']),
  sent(1103, 'L’école a investi dans des tablettes et des outils numériques.', 'The school has invested in tablets and digital tools.',
    '/le.kɔl a ɛ̃.vɛs.ti dɑ̃ de ta.blɛt e de.zu.ti ny.me.ʁik/', 'lay-KOL | a ehⁿ-ves-TEE | dahⁿ day ta-BLET | ay day-zoo-TEE nü-may-REEK', ['digital']),
  rule(1104, 'Digital renvoie aux doigts ; pour les données et les écrans, dis numérique.', 'Digital refers to fingers; for data and screens, say numérique.',
    '/di.ʒi.tal ʁɑ̃.vwa o dwa puʁ le dɔ.ne e le.ze.kʁɑ̃ di ny.me.ʁik/', 'dee-zhee-TAL | rahⁿ-VWA oh DWA | poor lay do-NAY | ay lay-zay-KRAHⁿ | dee nü-may-REEK',
    'La transformation digitale : qui recommande quoi ?',
    'L’Académie, FranceTerme (au Journal officiel) et l’OQLF recommandent numérique ; Le Robert enregistre digital, marqué anglicisme, et renvoie à numérique. Le mot est fréquent dans le jargon du marketing ; les empreintes digitales, elles, restent digitales.',
    ['digital']),
  sent(1105, 'Sur un cadran numérique, l’heure s’affiche en chiffres.', 'On a digital display, the time appears in figures.',
    '/syʁ œ̃ ka.dʁɑ̃ ny.me.ʁik lœʁ sa.fiʃ ɑ̃ ʃifʁ/', 'sür uhⁿ ka-DRAHⁿ nü-may-REEK | LUHR | sa-FEESH ahⁿ SHEEFR', ['digital']),
  sent(1106, 'Le service passe au tout numérique en janvier.', 'The service goes fully digital in January.',
    '/lə sɛʁ.vis pa.so tu ny.me.ʁik ɑ̃ ʒɑ̃.vje/', 'luh sehr-VEESS | pass oh too nü-may-REEK | ahⁿ zhahⁿ-VYAY', ['digital']),
  col(1107, 'la numérisation des dossiers', 'the digitisation of files', '/la ny.me.ʁi.za.sjɔ̃ de do.sje/', 'la nü-may-ree-za-SYOHⁿ | day do-SYAY', ['digital'],
    'Le nom de numériser. FranceTerme et l’OQLF le préfèrent à digitalisation.'),
];

/* ── ACT 10 · FAIRE SENS, QUESTIONNER (.1108-.1119) ────────────────────── */

export const ACT10_ROWS: Row[] = [
  col(1108, 'remettre en question une décision', 'to call a decision into question', '/ʁə.mɛtʁ ɑ̃ kɛs.tjɔ̃ yn de.si.zjɔ̃/', 'ruh-METR ahⁿ kes-TYOHⁿ | ün day-see-ZYOHⁿ', ['questionner'],
    'Remettre en question : réexaminer ce qu’on tenait pour acquis.'),
  col(1109, 'mettre en doute un chiffre', 'to cast doubt on a figure', '/mɛtʁ ɑ̃ dut œ̃ ʃifʁ/', 'metr ahⁿ DOOT | uhⁿ SHEEFR', ['questionner'],
    'Mettre en doute : ne pas tenir pour certain.'),
  col(1110, 's’interroger sur une méthode', 'to wonder about a method', '/sɛ̃.tɛ.ʁɔ.ʒe syʁ yn me.tɔd/', 'sehⁿ-teh-ro-ZHAY | sür ün may-TOD', ['questionner'],
    'S’interroger sur : se poser des questions, sans encore contester.'),
  col(1111, 'questionner un témoin', 'to question a witness', '/kɛs.tjɔ.ne œ̃ te.mwɛ̃/', 'kes-tyo-NAY | uhⁿ tay-MWEHⁿ', ['questionner'],
    'Le sens français, correct partout : poser des questions à quelqu’un.'),
  sent(1112, 'Ta proposition est logique, et elle coûte peu.', 'Your proposal makes sense, and it costs little.',
    '/ta pʁɔ.pɔ.zi.sjɔ̃ ɛ lɔ.ʒik e ɛl kut pø/', 'ta pro-po-zee-SYOHⁿ | eh lo-ZHEEK | ay el koot PEU', ['faire-sens'], FCVDR),
  sent(1113, 'Plusieurs chercheurs mettent en doute ces résultats.', 'Several researchers cast doubt on these results.',
    '/ply.zjœʁ ʃɛʁ.ʃœʁ mɛ.tɑ̃ dut se ʁe.zyl.ta/', 'plü-zyuhr shehr-SHUHR | meh-tahⁿ DOOT | say ray-zül-TA', ['questionner']),
  sent(1114, 'Les élus ont contesté le choix du site.', 'The councillors challenged the choice of site.',
    '/le.ze.ly ɔ̃ kɔ̃.tɛs.te lə ʃwa dy sit/', 'lay-zay-LÜ | ohⁿ kohⁿ-tes-TAY | luh SHWA dü SEET', ['questionner']),
  sent(1115, 'L’enquêtrice a questionné les voisins un par un.', 'The investigator questioned the neighbours one by one.',
    '/lɑ̃.kɛ.tʁis a kɛs.tjɔ.ne le vwa.zɛ̃ œ̃ paʁ œ̃/', 'lahⁿ-keh-TREESS | a kes-tyo-NAY | lay vwa-ZEHⁿ | uhⁿ par UHⁿ', ['questionner']),
  rule(1116, 'Questionne une personne ; une décision, remets-la en question.', 'Question a person; a decision, call it into question.',
    '/kɛs.tjɔn yn pɛʁ.sɔn yn de.si.zjɔ̃ ʁə.mɛ.la ɑ̃ kɛs.tjɔ̃/', 'kes-TYONN ün pehr-SONN | ün day-see-ZYOHⁿ | ruh-meh-LA ahⁿ kes-TYOHⁿ',
    'Questionner une décision : que dit l’OQLF ?',
    'L’OQLF déconseille questionner au sens de mettre en doute, qui vient de to question ; Usito le dit parfois critiqué. L’Académie et Le Robert ne donnent que le sens interroger quelqu’un. Dis contester, mettre en doute, remettre en question.',
    ['questionner']),
  rule(1117, 'Faire sens divise : l’OQLF le juge ancien, l’Académie le critique.', 'Faire sens divides: the OQLF calls it old, the Académie criticises it.',
    '/fɛʁ sɑ̃s di.viz lɔ.ky.ɛl.ɛf lə ʒyʒ ɑ̃.sjɛ̃ la.ka.de.mi lə kʁi.tik/', 'fehr SAHⁿSS dee-VEEZ | lo-kü-el-EF luh zhüzh ahⁿ-SYEHⁿ | la-ka-day-MEE luh kree-TEEK',
    'Faire sens, sans du : accepté ?',
    'Selon l’OQLF, faire sens existe depuis le moyen français et reste peu employé au Québec ; c’est faire du sens qu’il déconseille. L’Académie critique faire sens. Avoir du sens ou être logique ne divisent personne.',
    ['faire-sens']),
  sent(1118, 'Cette explication tient debout, mais elle ne suffit pas.', 'This explanation holds up, but it is not enough.',
    '/sɛ.tɛks.pli.ka.sjɔ̃ tjɛ̃ d(ə).bu mɛ ɛl nə sy.fi pa/', 'seh-tek-splee-ka-SYOHⁿ | tyehⁿ duh-BOO | meh el nuh sü-fee PA', ['faire-sens']),
  sent(1119, 'Je m’interroge sur la date choisie.', 'I have doubts about the date chosen.',
    '/ʒə mɛ̃.tɛ.ʁɔʒ syʁ la dat ʃwa.zi/', 'zhuh mehⁿ-teh-ROZH | sür la DAT shwa-ZEE', ['questionner']),
];

/* ── ACT 11 · CANCELLER, CÉDULER, BOOKER (.1120-.1131) ─────────────────── */

export const ACT11_ROWS: Row[] = [
  col(1120, 'annuler une réservation', 'to cancel a booking', '/a.ny.le yn ʁe.zɛʁ.va.sjɔ̃/', 'a-nü-LAY | ün ray-zehr-va-SYOHⁿ', ['quebec'],
    'Annuler : le verbe français pour to cancel, à l’oral comme à l’écrit.'),
  col(1121, 'fixer une réunion', 'to schedule a meeting', '/fik.se yn ʁe.y.njɔ̃/', 'feek-SAY | ün ray-ü-NYOHⁿ', ['quebec'],
    'Fixer : arrêter une date, une heure. Aussi prévoir, programmer.'),
  col(1122, 'réserver une salle de réunion', 'to book a meeting room', '/ʁe.zɛʁ.ve yn sal də ʁe.y.njɔ̃/', 'ray-zehr-VAY | ün sal duh ray-ü-NYOHⁿ', ['quebec'],
    'Réserver, retenir, faire une réservation : pour to book.'),
  col(1123, 'inscrire à l’horaire', 'to put on the schedule', '/ɛ̃s.kʁiʁ a lɔ.ʁɛʁ/', 'ehⁿs-KREER | a lo-REHR', ['quebec'],
    'Proposé par l’OQLF à la place de céduler, avec fixer et programmer.'),
  sent(1124, 'Le spectacle de ce soir est annulé à cause de la tempête.', 'Tonight’s show is cancelled because of the storm.',
    '/lə spɛk.takl də sə swaʁ ɛ.ta.ny.le a koz də la tɑ̃.pɛt/', 'luh spek-TAKL | duh suh SWAR | eh-ta-nü-LAY | a kohz duh la tahⁿ-PET', ['quebec'], FCVDR),
  sent(1125, 'On a fixé la réunion à jeudi, dix heures.', 'We have set the meeting for Thursday at ten.',
    '/ɔ̃.na fik.se la ʁe.y.njɔ̃ a ʒø.di di.zœʁ/', 'ohⁿ-na feek-SAY | la ray-ü-NYOHⁿ | a zheu-DEE | dee-ZUHR', ['quebec']),
  sent(1126, 'J’ai réservé la grande salle pour la formation.', 'I have booked the large room for the training.',
    '/ʒe ʁe.zɛʁ.ve la ɡʁɑ̃d sal puʁ la fɔʁ.ma.sjɔ̃/', 'zhay ray-zehr-VAY | la grahⁿd SAL | poor la for-ma-SYOHⁿ', ['quebec']),
  sent(1127, 'Le cours de yoga a été inscrit à l’horaire du mardi.', 'The yoga class has been put on the Tuesday schedule.',
    '/lə kuʁ də jɔ.ɡa a e.te ɛ̃s.kʁi a lɔ.ʁɛʁ dy maʁ.di/', 'luh koor duh yo-GA | a ay-TAY ehⁿs-KREE | a lo-REHR dü mar-DEE', ['quebec']),
  rule(1128, 'À l’oral, on entend canceller, céduler, booker ; à l’écrit, dis annuler, fixer, réserver.', 'In speech you hear canceller, céduler, booker; in writing, say annuler, fixer, réserver.',
    '/a lɔ.ʁal ɔ̃.nɑ̃.tɑ̃ kɑ̃.se.le se.dy.le bu.ke a le.kʁi di a.ny.le fik.se ʁe.zɛʁ.ve/', 'a lo-RAL | ohⁿ-nahⁿ-TAHⁿ | kahⁿ-say-LAY say-dü-LAY boo-KAY | a lay-KREE | dee a-nü-LAY feek-SAY ray-zehr-VAY',
    'Céduler une rencontre : quel verbe au bureau ?',
    'L’OQLF déconseille ces trois emprunts, et Usito marque canceller et céduler comme anglicismes critiqués du Québec. Booker n’est ni dans Le Robert en ligne ni dans Usito. Pour une réunion : fixer, prévoir, programmer.',
    ['quebec']),
  sent(1129, 'Peux-tu retenir une table pour six personnes ?', 'Can you book a table for six?',
    '/pø.ty ʁə.tə.niʁ yn tabl puʁ si pɛʁ.sɔn/', 'peu-TÜ ruh-tuh-NEER | ün TABL | poor see pehr-SONN', ['quebec']),
  sent(1130, 'Le congrès est prévu pour la mi-mai.', 'The conference is scheduled for mid-May.',
    '/lə kɔ̃.ɡʁɛ ɛ pʁe.vy puʁ la mi.mɛ/', 'luh kohⁿ-GREH | eh pray-VÜ | poor la mee-MEH', ['quebec']),
  sent(1131, 'L’annulation a été annoncée la veille.', 'The cancellation was announced the day before.',
    '/la.ny.la.sjɔ̃ a e.te a.nɔ̃.se la vɛj/', 'la-nü-la-SYOHⁿ | a ay-TAY a-nohⁿ-SAY | la VEY', ['quebec']),
];

/* ── ACT 12 · TA NOTE DE RÉVISION (.1132-.1139) ────────────────────────── */

export const ACT12_ROWS: Row[] = [
  sent(1132, 'J’ai remplacé six mots, et voici pourquoi.', 'I replaced six words, and here is why.',
    '/ʒe ʁɑ̃.pla.se si mo e vwa.si puʁ.kwa/', 'zhay rahⁿ-pla-SAY see MOH | ay vwa-see poor-KWA', ['note']),
  sent(1133, 'Selon l’OQLF, ce mot est déconseillé ; Le Robert l’enregistre.', 'According to the OQLF this word is not recommended; Le Robert records it.',
    '/sə.lɔ̃ lɔ.ky.ɛl.ɛf sə mo ɛ de.kɔ̃.sɛ.je lə ʁɔ.bɛʁ lɑ̃ʁ.ʒistʁ/', 'suh-lohⁿ lo-kü-el-EF | suh MOH eh day-kohⁿ-seh-YAY | luh ro-BEHR | lahⁿr-ZHEESTR', ['note'], FCVDR),
  sent(1134, 'Les ouvrages se partagent : j’ai pris le mot que personne ne conteste.', 'The reference works are divided: I took the word nobody disputes.',
    '/le.zu.vʁaʒ sə paʁ.taʒ ʒe pʁi lə mo kə pɛʁ.sɔn nə kɔ̃.tɛst/', 'lay-zoo-VRAZH suh par-TAZH | zhay PREE luh MOH | kuh pehr-SONN nuh kohⁿ-TEST', ['note']),
  sent(1135, 'Ce n’était pas une faute pour tout le monde, seulement un risque.', 'It was not a mistake in everyone’s eyes, only a risk.',
    '/sə ne.tɛ pa.zyn fot puʁ tu l(ə) mɔ̃d sœl.mɑ̃ œ̃ ʁisk/', 'suh nay-TEH pa-zün FOHT | poor tool MOHⁿD | suhl-mahⁿ uhⁿ REESK', ['note']),
  sent(1136, 'Pour un public des deux côtés de l’Atlantique, j’ai choisi le mot commun.', 'For readers on both sides of the Atlantic, I chose the shared word.',
    '/puʁ œ̃ py.blik de dø ko.te d(ə) la.tlɑ̃.tik ʒe ʃwa.zi lə mo kɔ.mœ̃/', 'poor uhⁿ pü-BLEEK | day deu koh-TAY duh la-tlahⁿ-TEEK | zhay shwa-ZEE luh moh ko-MUHⁿ', ['note']),
  rule(1137, 'Remplace, cite la source, dis si les ouvrages se partagent.', 'Replace, cite the source, say whether the reference works are divided.',
    '/ʁɑ̃.plas sit la suʁs di si le.zu.vʁaʒ sə paʁ.taʒ/', 'rahⁿ-PLASS | seet la SOORSS | dee see lay-zoo-VRAZH suh par-TAZH',
    'Tu corriges le texte d’un collègue. Que contient ta note ?',
    'Pour chaque mot remplacé : le mot choisi, qui critique l’emploi d’origine, et si d’autres l’acceptent. Pas de verdict unique quand les ouvrages se partagent, et pas de leçon de morale.',
    ['note']),
  sent(1138, 'Merci pour ton brouillon : il est clair, et presque prêt.', 'Thanks for your draft: it is clear, and almost ready.',
    '/mɛʁ.si puʁ tɔ̃ bʁu.jɔ̃ i.lɛ klɛʁ e pʁɛsk pʁɛ/', 'mehr-SEE poor tohⁿ broo-YOHⁿ | ee-leh KLEHR | ay presk PREH', ['note']),
  sent(1139, 'Dis-moi si tu préfères garder un mot ; on en discutera.', 'Tell me if you would rather keep a word; we will talk it over.',
    '/di.mwa si ty pʁe.fɛʁ ɡaʁ.de œ̃ mo ɔ̃.nɑ̃ dis.ky.tə.ʁa/', 'dee-MWA | see tü pray-FEHR gar-DAY uhⁿ MOH | ohⁿ-nahⁿ dees-kü-tuh-RA', ['note']),
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
 *  The reviser's note of act 1, ten « Dans un texte » paragraphs (acts 2 to
 *  11; the drafts among them are labelled « brouillon à reprendre » on
 *  screen and in their studio brief), the model note of act 12 and the draft
 *  the task revises. Every person, agency, foundation, school and town is
 *  invented: l’Atelier Brière-Sorel (Montréal and Lyon), Odile Marchand,
 *  Benoît Lacasse, Maxime Ouellet, Nadia Ferhat, Samuel Tremblay, Aurélie
 *  Vandamme, la Fondation Rive-Claire, le cégep de la Haute-Rivière, la
 *  Coopérative du Vieux-Pressoir, Saint-Ours-des-Prés, la Ressourcerie
 *  Le Grand Soin, le journal L’Écho des Prés. Real places appear only as
 *  places (Montréal, Lyon, Liège, Genève, Québec).
 * ══════════════════════════════════════════════════════════════════════════ */

/** Act 1: Odile's revision note on Benoît's report (about 240 words). */
export const LECTURE_REVISION =
  'Note de révision, Atelier Brière-Sorel. De : Odile Marchand, Lyon. À : Benoît Lacasse, Montréal. Objet : ton rapport sur le projet de bibliothèque mobile. Benoît, ton rapport est solide et bien construit ; je n’ai touché ni au plan ni aux chiffres. J’ai souligné six mots, tous savants, tous d’allure anglaise. Aucun ne gêne la compréhension, et c’est justement le problème : ils passent inaperçus. Tu écris que la ville a « initié » le projet ; je propose « lancé ». Tu parles d’une « belle opportunité » pour les quartiers ; « occasion » ne prête à aucune critique. Tu écris que les compressions « impacteront » le service ; « toucheront » dit la même chose, en plus simple. Pour les trois autres, l’affaire est moins tranchée, et je te le dis franchement. « Éligible » pour les écoles qui peuvent recevoir le camion : l’OQLF et l’Académie le déconseillent, mais Le Robert l’enregistre sans réserve ; j’ai mis « admissible », qui ne divise personne. « Digital » : la recommandation officielle est « numérique », en France comme au Québec. Enfin, « faire sens » : l’Académie le critique, l’OQLF le juge ancien et non fautif. Comme ton rapport sera lu à Montréal et à Lyon, j’ai choisi chaque fois le mot que personne ne conteste. Ce n’est pas une question de pureté : un lecteur qui bute sur un mot cesse un instant de lire tes arguments. Dis-moi si tu tiens à l’un de ces mots ; on en parlera. Odile';

/** Acts 2 to 11, « Dans un texte » (each about 100 to 130 words). */
export const TEXTE_A2 =
  'Le bulletin de la Coopérative du Vieux-Pressoir, à Saint-Ours-des-Prés. Repère qui a lancé quoi, et le seul verbe initier employé au sens français. « Ce printemps, c’est Nadia Ferhat qui a lancé l’idée d’un atelier de réparation de vélos. Le conseil a aussitôt amorcé des discussions avec la mairie, qui prête une salle le samedi matin. Samuel Tremblay, mécanicien retraité, a accepté d’initier les bénévoles aux réglages de base. Les premières séances ont attiré plus de monde que prévu ; nous avons donc mis sur pied un système d’inscription. Merci à tous ceux qui sont à l’origine de ce beau succès. Prochaine étape : un atelier pour les enfants, à l’automne. »';

export const TEXTE_A3 =
  'Brouillon à reprendre : une offre de stage écrite par une association de Liège. Repère les deux emplois critiqués, et l’emploi correct d’opportunité. « Vous cherchez une opportunité de vous former au journalisme ? Notre stage de trois mois vous donnera la chance d’écrire chaque semaine pour notre site. Il offre aussi de réelles opportunités de carrière : plusieurs anciens stagiaires travaillent aujourd’hui dans des rédactions. Le comité discutera en juin de l’opportunité d’ouvrir une deuxième place. Envoyez votre candidature avant le 15 mai. »';

export const TEXTE_A4 =
  'Un courriel de la direction d’un cégep, au Québec. Repère la vraie alternative, au sens strict, et les options proposées. « Bonjour à tous, la panne de chauffage du pavillon B nous place devant une alternative : fermer le pavillon trois jours ou déplacer tous les cours. Nous avons choisi la seconde solution. Pour les laboratoires, il n’y a pas de solution de rechange : ils sont reportés à la semaine prochaine. Pour les autres cours, trois options s’offrent aux enseignants : la bibliothèque, la grande salle ou un cours à distance. Merci de nous indiquer votre choix d’ici demain midi. La direction du cégep de la Haute-Rivière »';

export const TEXTE_A5 =
  'Un article de L’Écho des Prés, journal local. Repère les verbes qui disent l’effet des travaux, et dis lequel est le plus précis. « Les travaux de la rue Principale ont eu une incidence nette sur les commerces du centre. Selon l’association des marchands, la fréquentation a baissé d’un tiers en juillet. La fermeture du stationnement a surtout touché la boulangerie et la quincaillerie, dont la clientèle vient en voiture. Le retard du chantier se répercute aussi sur le budget de la ville, qui devra payer des heures supplémentaires. Les marchands demandent un calendrier ferme ; la mairie promet une réouverture complète à la fin d’août. »';

export const TEXTE_A6 =
  'Brouillon à reprendre : l’annonce d’un poste dans un centre de recherche, à Genève. Repère les deux mots à changer et l’emploi juste d’académique. « Le centre recrute un assistant de recherche versatile, capable de gérer à la fois les bases de données et l’accueil des visiteurs. Le candidat aura une solide formation académique, idéalement une maîtrise en sociologie. Le poste commence avec la nouvelle année universitaire, en septembre. Les candidatures d’un style trop académique, qui récitent un manuel, nous intéressent moins que celles qui racontent une expérience. »';

export const TEXTE_A7 =
  'Brouillon à reprendre : un résumé de politique publique, rédigé par un stagiaire à Québec. Repère l’emploi juste de juridiction et les deux emplois critiqués. « En matière de logement, la juridiction appartient surtout aux provinces, mais les villes ont aussi un rôle. Plusieurs autres juridictions, comme la Colombie-Britannique, ont déjà encadré la location de courte durée. En cas de litige entre un propriétaire et un locataire, c’est le Tribunal administratif du logement, une juridiction spécialisée, qui tranche. »';

export const TEXTE_A8 =
  'L’appel à candidatures de la Fondation Rive-Claire. Repère les tournures qui disent qui peut recevoir la bourse. « La bourse Rive-Claire aide chaque année vingt étudiants à financer un stage à l’étranger. Sont admissibles les étudiants inscrits à temps plein dans un établissement d’enseignement supérieur. Les candidats doivent remplir les conditions suivantes : avoir terminé une première année d’études et présenter un projet de stage confirmé. Les étudiants qui ont déjà reçu la bourse n’y ont pas droit une seconde fois. Seuls les dossiers complets seront jugés admissibles. Les critères d’admissibilité sont détaillés sur notre site. »';

export const TEXTE_A9 =
  'Le message d’une directrice de musée à son équipe, à Lyon. Repère les mots de la famille de numérique, et l’emploi correct de digital. « Chers collègues, notre projet de numérisation entre dans sa deuxième phase : d’ici l’été, toutes les photographies anciennes seront numérisées et consultables en ligne. Nous recrutons pour cela une personne chargée de la stratégie numérique. Petit rappel pratique : l’entrée des réserves se fait désormais par lecteur d’empreintes digitales ; pensez à enregistrer les vôtres auprès de l’accueil. Merci à tous pour ce chantier exigeant. Aurélie Vandamme »';

export const TEXTE_A10 =
  'Brouillon à reprendre : un courriel interne d’une entreprise montréalaise. Repère les deux tournures discutées, et dis par quoi tu les remplacerais. « Bonjour l’équipe, plusieurs d’entre vous ont questionné la nouvelle procédure de remboursement. C’est normal : elle ne fait pas encore sens pour tout le monde. Je propose une séance d’information jeudi. J’ai demandé à notre comptable de vous expliquer le circuit d’une note de frais ; si, après cela, la procédure ne tient toujours pas debout, nous la remettrons en question ensemble. »';

export const TEXTE_A11 =
  'Brouillon à reprendre : un message vocal transcrit, laissé par un adjoint à Montréal. Repère les trois emprunts et propose les verbes de l’écrit. « Salut Maxime, c’est Samuel. La rencontre avec le fournisseur est cancellée, il est malade. J’ai essayé de la céduler à mardi prochain, mais la salle du troisième est prise. Est-ce que tu peux booker la petite salle à la place ? Sinon, on la fait par téléphone. Rappelle-moi. »';

/** Act 12: the model the learner imitates, Odile's note on Maxime's draft
 *  (about 200 words, the revised text quoted first). */
export const LECTURE_MODELE =
  'Note de révision, Atelier Brière-Sorel. De : Odile Marchand. À : Maxime Ouellet. Objet : l’annonce de la ressourcerie. Maxime, merci pour ton brouillon : il est clair, et presque prêt. Voici la version révisée de la phrase clé : « La Ressourcerie Le Grand Soin a lancé un service de réparation ; les familles admissibles pourront en profiter gratuitement dès mars. » J’ai remplacé deux mots, et voici pourquoi. « Initié » : selon l’OQLF et l’Académie, initier au sens de lancer vient de l’anglais ; même le Dictionnaire de l’Académie, qui ne juge pas l’emploi condamnable en soi, le dit abusif. « Lancé » ne divise personne. « Éligibles » : ici, les ouvrages se partagent. L’Académie et l’OQLF le déconseillent ; Le Robert l’enregistre sans marque, et Usito note qu’il est généralement accepté en France. Ce n’était donc pas une faute pour tout le monde, seulement un risque. Pour un public des deux côtés de l’Atlantique, j’ai choisi le mot commun. Dis-moi si tu préfères garder un mot ; on en discutera. Odile';

/** The task: Maxime's draft announcement the learner revises (about 130
 *  words, labelled « brouillon à reprendre » in the brief). */
export const BROUILLON_TACHE =
  '« L’Atelier Brière-Sorel est fier d’annoncer qu’il a initié, avec la Ressourcerie Le Grand Soin, un service de réparation pour les familles du quartier. Ce projet est une belle opportunité de prolonger la vie des objets. La hausse des prix a impacté beaucoup de ménages : la réparation gratuite offre une alternative à l’achat neuf. Les familles éligibles pourront prendre rendez-vous sur notre plateforme digitale. Les ateliers sont cédulés le samedi matin ; si vous devez canceller, prévenez-nous la veille. Notre équipe, très versatile, répare aussi bien les grille-pain que les vélos. Cette initiative fait sens dans une ville qui veut réduire ses déchets, et nous espérons que d’autres juridictions s’en inspireront. »';
