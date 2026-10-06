// c1.11.l1 « Rapports et comptes rendus » — the authored corpus, the imports,
// the anchor texts and the citation constants. DRAFT, to
// B1-WORKSHOP-AND-VOCAB-SHAPES.md §1 (the workshop shape) on top of
// B1-BUILD-PLAYBOOK.md, with the C1 rules of C1-BUILD-LOG.md (« What is
// different at C1 », decisions 1-35, the wave 4 brief). Structural model:
// b2.22 (`../b2/style-academique-*`), through its C1 descendant c1.07.
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
//   THE WORKING DOCUMENTS OF AN ORGANISATION, WRITTEN FOR A READER WHO WAS
//   NOT THERE AND MUST DECIDE: the report (rapport), the case analysis, the
//   recommendation, the executive summary, the compte rendu, the
//   procès-verbal and the relevé de décisions, in an impersonal register.
//
//     act 1   the report nobody reads (the problem: a chronological draft);
//             ONE recap of the lessons it builds on, by trail position
//     act 2   the architecture: objet, contexte, constat, analyse,
//             recommandations, annexes; « le présent rapport »
//     act 3   the constat: facts with their source, never an impression
//             stated as a fact (il ressort de, selon, chiffres à l’appui)
//     act 4   the case analysis (1): from the symptom to the causes, ranked
//             (la cause principale, un facteur aggravant); a voicemail heard
//             once, facts sorted from opinions
//     act 5   the case analysis (2): options compared on the same criteria,
//             a justified choice (au regard de, présenter l’avantage de,
//             écarter, l’option retenue)
//     act 6   the recommendation register: nous préconisons, il conviendrait
//             de, il y aurait lieu de, il est recommandé que + subjonctif;
//             dosage, and who does what by when
//     act 7   the executive summary first (sommaire de gestion, OQLF; synthèse)
//     act 8   the compte rendu: the essence of the discussions and the
//             decisions, in the present, with reporting verbs, without
//             judging
//     act 9   the procès-verbal: official, tied to the agenda; adopter un
//             ordre du jour, approuver un procès-verbal; France and Québec;
//             « les minutes » déconseillé
//     act 10  the relevé de décisions and the office anglicisms (deadline,
//             implémenter, varia; item and adresser cited from B2)
//     act 11  rereading as a rapporteur: neutral words, the impersonal, one
//             figure everywhere, every annex cited
//     act 12  the task: a short report (250 to 400 words) from facts given
//             in the brief
//
//   NOT OWNED, CITED BY TRAIL POSITION ONLY (act 1 recaps, never re-teaches):
//     - « la leçon 39 du B1 »: the parts of an email and its formulas
//       (objet, formule d’appel, corps), « dis pourquoi tu écris ».
//     - « la leçon 22 du B2 »: the academic paragraph, hedging (il semble
//       que, les résultats suggèrent), reprises, the authorial nous, il
//       convient de. Its hedging is APPLIED in act 11, not re-taught.
//     - « la leçon 26 du B2 »: running a meeting, the agenda (s’en tenir à
//       l’ordre du jour), closing on decisions and owners, the calques
//       « prochain item » and « adresser » in a meeting.
//     - « la leçon 10 du B2 »: minutes condense into nouns (its act 9 and its
//       compte rendu task). Act 8 does NOT re-teach nominalisation; it adds
//       what a compte rendu is FOR, its tense and its reporting verbs.
//     - « la leçon 33 du B2 »: supporter, adresser, réaliser as calques;
//       its rows are reused in act 10, never re-listed as new.
//     - « la leçon 21 du C1 »: a written account of a debate (its task);
//       cited in act 8 as the account of a DEBATE, here of a MEETING.
//     - « la leçon 7 du C1 »: closure markers and the contested « suite à »;
//       cited once in act 10 for « suite à ».
//     - c1.10 (dissertation, same wave, unbuilt) is never cited; c1.23
//       (meetings and tact) is never cited.
//
// ══════════════════════════════════════════════════════════════════════════
//  §A. MEASURED (Postgres read 2026-10-06 inside BEGIN TRANSACTION READ
//      ONLY … COMMIT, no SET; the local seed is a cut)
// ══════════════════════════════════════════════════════════════════════════
//
//  1. THEME `francais-professionnel-avance` (« Le français professionnel
//     avancé », travail, c1-c2), sub_themes read back as ["le rapport et le
//     compte rendu"] (wave 4 setup). Block 1200-1399 read at 0 rows at every
//     level on 2026-10-06. The 165 legacy rows (.001-.165) are all
//     published, all kind sentence, all drills {sentence, review}.
//
//  2. ID BLOCK: this lesson owns `fr.c1.francais-professionnel-avance.1200`
//     to `.1399` AND NOTHING ELSE. Used: .1200-.1357 (§G), 158 rows, no gaps.
//
//  3. REUSED ROWS (§F). Seed rows (B1, B2 and C1 lessons, live) print
//     through `src()`. Published-but-not-in-the-seed rows ride in
//     `DB_ONLY_ROWS` with fr / en / drills copied verbatim from Postgres on
//     2026-10-06:
//       - `fr.b2.conseils-et-suggestions.040` « il conviendrait de », the
//         headword of act 6, so this corpus does not twin it;
//       - SEVEN LEGACY c1 ROWS of this theme, read one by one before reuse:
//         .003 (le rapport final), .011 (nos recommandations), .019 (je
//         consignerai nos décisions dans le compte rendu), .040 and .078 (le
//         procès-verbal), .086 (il figurera tel quel au compte rendu), .120
//         (le compte rendu mentionnera les trois options). All carry drills
//         {sentence, review}: NAMED ONLY, never released, never spoken.
//         .019 .040 .078 .086 .120 carry no apostrophe; .003 and .011 none
//         either. None is quoted inside the scenario.
//       - READ AND NOT REUSED: .024 « au cas où les tests dérapent » (needs
//         the conditionnel « déraperaient »: the known defect); .004 and .107
//         « je reviens vers vous » (the calque c1.09's pre-review removed);
//         .081 « qu’on acte ce point » (acter, criticised); .064
//         « Commençons d’abord » (pleonasm); .108 « le relevé de décisions? »
//         (good content, but the unspaced « ? » needs decision 13's typography
//         edit and act 10 authors its own headword row instead).
//
//  4. NO AUTHORED ROW TWINS A PUBLISHED ROW. Every `fr` was folded (fold()
//     of answer.logic) and compared with all 64 064 published Postgres rows
//     (scratch check, 2026-10-06): 0 twins. Headwords authored here because
//     Postgres has none: le présent rapport, chiffres à l’appui, il ressort
//     de… que, la cause principale, un facteur aggravant, retenir / écarter
//     une option, au regard de ce critère, l’option retenue, préconiser, il
//     est recommandé que, il y aurait lieu de, le sommaire de gestion,
//     souligner que, s’inquiéter de, le procès-verbal, adopter l’ordre du
//     jour, approuver le procès-verbal, les questions diverses, le relevé de
//     décisions, mettre en œuvre une mesure.
//
//  5. RESPELLINGS SPELLED FOR THE NASAL CHECKER RATHER THAN THE EAR. A real
//     /n/ or /m/ closing a syllable is written double: semaine suh-MENN,
//     personne pehr-SONN, comme KOMM, même MEMM, une ÜNN, cantine kahⁿ-TEENN,
//     menu muh-NÜ (no change), prochaine pro-SHENN, programme, examine,
//     domaine, aucune oh-KÜNN, chacune, économie, donne DONN, annonce
//     a-NOHⁿSS. Every doubled consonant is really pronounced. No U+203F tie.
//
//  6. THE ANCHOR TEXTS IN §I ARE ORIGINAL, WRITTEN FOR THE LESSON (« texte
//     original écrit pour la leçon »). Every person, company, committee and
//     figure is INVENTED: les Ateliers Corvelle (a furniture maker, 240
//     employees, head office and workshop in Sherbrooke, a second site in
//     Lyon), their canteen, the comité de la cantine, the conseil
//     d’administration, the shuttle of the Lyon site; Martine Pelletier,
//     Bruno Lachance, Aïcha Benali, Thomas Girard, Nora Demers, Paul-Émile
//     Roy, Lucie Vasseur, Hélène Fortin, Marc Dubé. Real places appear only as places (Sherbrooke,
//     Lyon). No real institution is said to have produced a figure. Every
//     figure is internal to the lesson and marked invented in the header of
//     the task brief.
//
//  7. FACT CHECK LIST (for the pre-review). Every claim about the real world
//     and every norm verdict made anywhere in this lesson, with its source,
//     read on 2026-10-06.
//
//     a. COMPTE RENDU, OQLF Grand dictionnaire terminologique, fiche
//        « compte rendu » (2019,
//        https://vitrinelinguistique.oqlf.gouv.qc.ca/fiche-gdt/fiche/8871623/compte-rendu):
//        « Rapport qui présente l’essentiel des discussions tenues et des
//        décisions prises lors d’une réunion ou d’une assemblée. » Note: the
//        procès-verbal is « plus étroitement lié à l’ordre du jour et […]
//        présente un caractère plus officiel et plus formel. »
//     b. PROCÈS-VERBAL, OQLF BDL « Rédaction d’un procès-verbal »
//        (https://vitrinelinguistique.oqlf.gouv.qc.ca/22821/…/redaction-dun-proces-verbal):
//        « Un procès-verbal se distingue du compte rendu surtout par son
//        caractère officiel. » ; « Il doit être approuvé par les membres de
//        l’assemblée, généralement lors de la prochaine réunion » ; « Il est
//        rédigé au temps présent et à la forme impersonnelle » ; it records
//        « l’essentiel des discussions et des décisions, ainsi que des
//        nominations, instructions, résolutions et engagements ».
//     c. « LES MINUTES », same BDL page: « l’emprunt à l’anglais minutes,
//        parfois utilisé au Québec pour désigner le procès-verbal, est
//        déconseillé. »
//     d. ADOPTER / APPROUVER, OQLF BDL « Rédaction d’un ordre du jour »
//        (https://vitrinelinguistique.oqlf.gouv.qc.ca/index.php?id=22817):
//        « On adopte – d’où adoption – un ordre du jour et on approuve – d’où
//        approbation – un procès-verbal et un compte rendu. » The same page
//        lists the usual points (ouverture de la séance ; lecture et
//        adoption de l’ordre du jour ; approbation du procès-verbal de la
//        dernière séance ; questions diverses ou divers ; clôture de la
//        séance).
//     e. VARIA, OQLF BDL « Emploi déconseillé de l’emprunt varia » (2018,
//        https://vitrinelinguistique.oqlf.gouv.qc.ca/22811/…/emploi-deconseille-de-lemprunt-varia):
//        « Varia est un emprunt à l’anglais qui n’est pas légitimé » ;
//        replacements « Questions diverses » or « Divers ».
//     f. SOMMAIRE DE GESTION, OQLF GDT fiche (2006,
//        https://vitrinelinguistique.oqlf.gouv.qc.ca/fiche-gdt/fiche/8869101/sommaire-de-gestion):
//        « Condensé d’un document, généralement un rapport, rédigé à
//        l’intention des gestionnaires » ; privileged « sommaire de gestion »,
//        « sommaire décisionnel » ; « termes utilisés dans certains
//        contextes » (wider sense, NOT « acceptés ») « résumé »,
//        « sommaire », « synthèse » (pre-review: act 7 card reworded); DÉCONSEILLÉ « sommaire exécutif » (in
//        French « exécutif » concerns the execution of laws); the note says
//        it usually runs to no more than 400 words. The lesson says « en
//        France comme au Québec, on dit aussi synthèse ou résumé » (synthèse
//        is accepted by the fiche; its use in France is general knowledge, GK).
//     g. DEADLINE, OQLF BDL « L’emprunt déconseillé deadline »
//        (https://vitrinelinguistique.oqlf.gouv.qc.ca/23668/…/lemprunt-deconseille-deadline):
//        déconseillé; date limite, échéance, date butoir, délai… proposed.
//     h. IMPLÉMENTER. Larousse (implémentation): « Mise en place sur un
//        ordinateur d’un système d’exploitation ou… » (a computing sense);
//        implémenter: « Réaliser l’implémentation ». The lesson says only
//        that the word comes from computing and that for a plan or a measure
//        a careful report writes « mettre en œuvre ». PRE-REVIEW (2026-10-06):
//        GDT « implémentation » (OQLF 2003, informatique) « Opération qui
//        consiste à réaliser la phase finale d’élaboration d’un système »,
//        privileged terms implémentation, MISE EN ŒUVRE; it warns not to
//        confuse it with « implantation » (installing software), so the
//        lesson no longer glosses it « installer un programme ». GDT
//        « implémenter » (FranceTerme 2007, informatique, langage
//        professionnel). No BDL verdict on the general sense; no Académie
//        entry found. The lesson keeps « mettre en œuvre » as the careful
//        choice for a measure, never calls implémenter an error.
//     i. ITEM and ADRESSER are cited from « la leçon 26 du B2 » and « la
//        leçon 33 du B2 » (BDL « Emploi déconseillé de l’emprunt adresser »,
//        quoted in b2.33's corpus header); no new claim here.
//     j. VERBS FOR A COMPTE RENDU, OQLF BDL « Verbes utilisés pour la
//        rédaction d’un compte rendu ou d’un procès-verbal »: souligner,
//        préciser, signaler, rappeler, proposer, recommander, s’inquiéter,
//        craindre, objecter, contester, approuver, appuyer are on the list
//        (PRE-REVIEW: « rappeler » is NOT on the list, which is « non
//        exhaustive »; it stays as GK; « estimer » is GK too). TENSE: BDL
//        « Rédaction d’un compte rendu » (22825): « Il est conseillé
//        d’utiliser le temps présent » (advised, not required); the same
//        page: « Il n’a pas à être soumis pour approbation lors d’une
//        prochaine réunion. Il s’agit plutôt d’un aide-mémoire à usage
//        interne. » The lesson now says the compte rendu's approval is
//        optional (act 8 check, act 9 table, sheet, term); the canteen
//        committee still chooses to approve its own.
//     j2. ADOPTER LE PROCÈS-VERBAL IN FRANCE: standard in the Sénat
//        (compte rendu intégral 28 April 2014: « Le procès-verbal est
//        adopté sous les réserves d’usage. »). The OQLF prefers approuver
//        but does not condemn adopter (not in its « Vocabulaire des
//        réunions » table of déconseillé forms). Every closed item keyed on
//        approuvé / adopté now opens « Selon l’Office québécois ».
//     k. FRANCE: « procès-verbal » first names an official written act
//        drawn up by a magistrate, an officer or an agent (Larousse: « Acte
//        écrit rédigé par un magistrat, un officier ou agent… »); « un PV »
//        colloquially means a fine (GK). The minutes of an association's
//        general meeting are signed and kept (GK, common practice; the line
//        says « se signe et se conserve », no legal claim). « Relevé de
//        décisions »: a list of decisions without the debate (GK, French
//        administrative usage).
//     l. QUÉBEC: « Sur proposition de…, appuyée par…, il est résolu
//        que… » as the shape of a resolution in a Québec procès-verbal (GK,
//        widespread in municipal and association minutes; the BDL page
//        mentions « résolutions »). PRE-REVIEW: the BDL model PV
//        (Proces-verbal.rtf) writes « Sur la proposition de M. Blais,
//        appuyée par Mme Girard, le procès-verbal est […] approuvé » and
//        « Il est proposé par Mme Costa que… » ; the BDL requires naming
//        « les personnes qui ont proposé et appuyé la proposition », so the
//        act 9 PV now names both (invented administrators), and the chair no
//        longer moves the resolution. « il est résolu » itself is GK.
//     m. MOODS: « il est recommandé que » + subjonctif; « nous préconisons
//        que » + subjonctif; « il conviendrait de », « il y aurait lieu de »
//        + infinitif (Grevisse, Le Bon usage, verbs of will and
//        recommendation; GK). « préconiser » = recommander vivement (Larousse
//        « Recommander vivement », GK).
//
//     QUOTATIONS: none. No literary or press extract; every text is original.
//
//  8. APOSTROPHES: every authored French string uses the typographic ’. The
//     seed rows with a straight ' (l'ordre du jour, l'a signé, L'objet…) and
//     DB_ONLY_ROWS are NEVER quoted inside the scenario (app check
//     « mixedApostrophes »).
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
  id: 'c1.11',
  seq: 11,
  title: 'Reports and Minutes',
  sub: 'Rapports et comptes rendus',
  canDo: 'Can write a report for a reader who must decide: an executive summary first, a sourced constat kept apart from the analysis, causes ranked, options compared on the same criteria, recommendations in the formal register with the right mood; can tell a compte rendu from a procès-verbal and a relevé de décisions, write each in the present and the impersonal, and replace the office anglicisms',
  prereqUnitIds: ['b1.39', 'b2.10', 'b2.22', 'b2.26', 'b2.33'],
} as const;

export const LESSON_ID = 'c1.11.l1';
export const THEME = 'francais-professionnel-avance';
export const LEVEL = 'c1' as const;

/** ONE block, by the brief (decision 25). */
export const ID_RANGES = [[1200, 1399]] as const;

export const E = (n: number) => `fr.${LEVEL}.${THEME}.${String(n).padStart(3, '0')}`;

/* ══════════════════════════════════════════════════════════════════════════
 *  §C. HOW THIS LESSON NAMES ITS NEIGHBOURS
 *
 *  B1, B2 and the C1 units already live are in the seed with their `seq`.
 *  Never a raw id on screen, always « la leçon N du B1 / B2 / C1 ».
 * ══════════════════════════════════════════════════════════════════════════ */

type SeedUnit = { id: string; seq: number | string };
const SEQ = new Map((seed.units as unknown as SeedUnit[]).map((u) => [u.id, Number(u.seq)]));

export function refFr(unitId: string): string {
  const band = unitId.slice(0, 2);
  if (band === 'b1' || band === 'b2' || band === 'c1') {
    const n = SEQ.get(unitId);
    if (!n) throw new Error(`c1.11: ${unitId} is not in the seed`);
    return `la leçon ${n} du ${band.toUpperCase()}`;
  }
  return unitRef(unitId);
}

export const COURRIELS_UNIT = 'b1.39';
export const NOMINAL_UNIT = 'b2.10';
export const ACADEMIQUE_UNIT = 'b2.22';
export const REUNION_UNIT = 'b2.26';
export const CALQUES_UNIT = 'b2.33';
export const DEBATS_UNIT = 'c1.21';
export const REFORMULER_UNIT = 'c1.07';

export const COURRIELS_REF = refFr(COURRIELS_UNIT);
export const NOMINAL_REF = refFr(NOMINAL_UNIT);
export const ACADEMIQUE_REF = refFr(ACADEMIQUE_UNIT);
export const REUNION_REF = refFr(REUNION_UNIT);
export const CALQUES_REF = refFr(CALQUES_UNIT);
export const DEBATS_REF = refFr(DEBATS_UNIT);
export const REFORMULER_REF = refFr(REFORMULER_UNIT);

/* ══════════════════════════════════════════════════════════════════════════
 *  §D. THE QUOTATIONS, IMPORTED (never retyped)
 * ══════════════════════════════════════════════════════════════════════════ */

export { REFRAME as B139_REFRAME, REFRAME_EN as B139_REFRAME_EN } from '../b1/courriels-lettres-corpus.ts';
export { REFRAME as B210_REFRAME } from '../b2/nominalisation-corpus.ts';
export { REFRAME as B222_REFRAME } from '../b2/style-academique-corpus.ts';
export { REFRAME as B226_REFRAME } from '../b2/reunions-negociation-corpus.ts';
export { REFRAME as B233_REFRAME } from '../b2/traduire-sans-calquer-corpus.ts';

/* ══════════════════════════════════════════════════════════════════════════
 *  §E. THE REFRAME AND THE ONE METAPHOR
 *
 *  THE ABSENT READER. Every document in this lesson travels from a room to
 *  someone who was not in it: the director who reads one page, the board
 *  that approves the minutes a month later, the colleague in Lyon. The
 *  writer's job is to let that reader decide without the writer: the
 *  essentials first, the facts that prove them, and the writer's own
 *  proposals kept in their own place (the recommendations), never mixed
 *  into the facts. A compte rendu and a procès-verbal have NO
 *  recommendations at all: « à part » there means « absent ».
 *
 *  It is NOT « a report is a story told in order » (act 1's draft), nor
 *  « the more detail, the more serious » (act 2 sends detail to the annexes).
 * ══════════════════════════════════════════════════════════════════════════ */

export const REFRAME = 'Écris pour qui n’était pas là : l’essentiel d’abord, puis les faits, et tes recommandations à part.';
export const REFRAME_EN = 'Write for someone who was not there: the essentials first, then the facts, and your recommendations kept apart.';

export const REFRAME_REJECTED: readonly { text: string; why: string }[] = [
  {
    text: 'Un bon rapport raconte tout, dans l’ordre.',
    why: 'This is exactly act 1’s failing draft. The reader who must decide reads the first page; chronology buries the answer on the last one. Order serves the decision, not the calendar.',
  },
  {
    text: 'La conclusion à la fin, comme dans une dissertation.',
    why: 'False for a working document (act 7): the sommaire de gestion puts the conclusion first. The dissertation’s order belongs to another genre, which a later C1 lesson owns.',
  },
  {
    text: 'Un rapport est objectif : il ne propose rien.',
    why: 'Too strong. A report RECOMMENDS (act 6); it is the compte rendu and the procès-verbal that do not. Objectivity is about keeping the constat free of opinion, not about having no opinion.',
  },
  {
    text: 'Plus il y a de détails, plus le rapport est sérieux.',
    why: 'Act 2 sends the detail to the annexes and act 7 holds the summary to a page; detail in the body hides the decision.',
  },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §F. THE IMPORTS, BY ACT
 *
 *  Every id was read from Postgres on 2026-10-06 and, where present, from
 *  seedPlusPacks(); its French is in the trailing comment.
 * ══════════════════════════════════════════════════════════════════════════ */

export const IMPORTED = {
  act1: [
    'fr.b1.correspondance.1025',                  // L'objet annonce, le corps explique, la fin demande et remercie.  (lesson 39 in B1; flashcard only)
    'fr.b2.universite.1042',                      // il convient de  (lesson 22 in B2)
    'fr.b2.affaires.1218',                        // Kim prendra des notes et vous enverra le compte rendu demain.  (lesson 26 in B2)
    'fr.b2.affaires.1378',                        // Une réunion se termine sur trois choses : ce qui est décidé, qui s’en charge, et pour quand.  (lesson 26 in B2; flashcard only)
    'fr.b2.langue-soignee.1581',                  // Un bon compte rendu condense les faits en noms et garde des verbes pour les faire avancer.  (lesson 10 in B2; flashcard, review)
    'fr.b2.langue-soignee.1833',                  // s’attaquer à un problème  (lesson 33 in B2)
  ],
  act2: [
    'fr.c1.francais-professionnel-avance.003',    // Le rapport final sera déposé lundi matin, sans faute.  (legacy, Postgres only, named only)
  ],
  act3: [
    'fr.b2.strategies-de-comprehension.1654',     // le constat  (B2 seed row)
  ],
  act4: [] as string[],
  act5: [] as string[],
  act6: [
    'fr.b2.conseils-et-suggestions.040',          // il conviendrait de  (Postgres only)
    'fr.c1.discours-dexamen.1051',                // Le cabinet recommande le recrutement de deux techniciens.  (lesson 1 in C1)
    'fr.c1.francais-professionnel-avance.011',    // Le comité attend nos recommandations au plus tard vendredi.  (legacy, Postgres only, named only)
  ],
  act7: [] as string[],
  act8: [
    'fr.b1.affaires.1038',                        // rédiger un compte rendu  (lesson 36 in B1)
    'fr.c1.discours-dexamen.1540',                // un compte rendu  (lesson 21 in C1)
    'fr.c1.francais-professionnel-avance.019',    // Pour éviter tout malentendu, je consignerai nos décisions dans le compte rendu.  (legacy, named only)
    'fr.c1.francais-professionnel-avance.086',    // Je note votre désaccord, il figurera tel quel au compte rendu.  (legacy, named only)
    'fr.c1.francais-professionnel-avance.120',    // Le compte rendu mentionnera les trois options étudiées et les raisons de notre choix final.  (legacy, named only)
  ],
  act9: [
    'fr.b2.connecteurs-logiques.2569',            // Après avoir relu le procès-verbal, la présidente l'a signé.  (B2 seed row)
    'fr.b1.affaires.1035',                        // l'ordre du jour  (lesson 36 in B1)
    'fr.c1.francais-professionnel-avance.040',    // Le procès-verbal précisera les responsables, les livrables et les dates convenues pour chacune des décisions prises.  (legacy, named only)
    'fr.c1.francais-professionnel-avance.078',    // Le procès-verbal vous sera transmis au plus tard demain midi.  (legacy, named only)
  ],
  act10: [
    'fr.b1.affaires.1056',                        // un échéancier  (lesson 36 in B1)
    'fr.b2.langue-soignee.1817',                  // Nous vous adresserons la facture par courriel.  (lesson 33 in B2)
  ],
  act11: [] as string[],
  act12: [] as string[],
};

export const IMPORT_IDS = [...new Set(Object.values(IMPORTED).flat())];

/** Published in Postgres, absent from the local seed cut: fr / en / drills
 *  copied verbatim on 2026-10-06, so `src()` can print them. */
export const DB_ONLY_ROWS: { id: string; fr: string; en: string; drills: string[] }[] = [
  { id: 'fr.b2.conseils-et-suggestions.040', fr: 'il conviendrait de', en: 'it would be advisable to', drills: ['flashcard', 'voiceflash'] },
  { id: 'fr.c1.francais-professionnel-avance.003', fr: 'Le rapport final sera déposé lundi matin, sans faute.', en: 'The final report will be submitted Monday morning, without fail.', drills: ['sentence', 'review'] },
  { id: 'fr.c1.francais-professionnel-avance.011', fr: 'Le comité attend nos recommandations au plus tard vendredi.', en: 'The committee expects our recommendations by Friday at the latest.', drills: ['sentence', 'review'] },
  { id: 'fr.c1.francais-professionnel-avance.019', fr: 'Pour éviter tout malentendu, je consignerai nos décisions dans le compte rendu.', en: 'To avoid any misunderstanding, I will record our decisions in the minutes.', drills: ['sentence', 'review'] },
  { id: 'fr.c1.francais-professionnel-avance.040', fr: 'Le procès-verbal précisera les responsables, les livrables et les dates convenues pour chacune des décisions prises.', en: 'The minutes will specify the owners, deliverables and agreed dates for each decision made.', drills: ['sentence', 'review'] },
  { id: 'fr.c1.francais-professionnel-avance.078', fr: 'Le procès-verbal vous sera transmis au plus tard demain midi.', en: 'The minutes will be sent to you by noon tomorrow at the latest.', drills: ['sentence', 'review'] },
  { id: 'fr.c1.francais-professionnel-avance.086', fr: 'Je note votre désaccord, il figurera tel quel au compte rendu.', en: 'I am noting your disagreement, it will appear as such in the minutes.', drills: ['sentence', 'review'] },
  { id: 'fr.c1.francais-professionnel-avance.120', fr: 'Le compte rendu mentionnera les trois options étudiées et les raisons de notre choix final.', en: 'The minutes will note the three options considered and the reasons for our final choice.', drills: ['sentence', 'review'] },
];

/** No `flashcard` drill: nameable, never releasable. */
export const NOT_DECK_ABLE = [
  'fr.c1.francais-professionnel-avance.003',     // {sentence, review}
  'fr.c1.francais-professionnel-avance.011',     // {sentence, review}
  'fr.c1.francais-professionnel-avance.019',     // {sentence, review}
  'fr.c1.francais-professionnel-avance.040',     // {sentence, review}
  'fr.c1.francais-professionnel-avance.078',     // {sentence, review}
  'fr.c1.francais-professionnel-avance.086',     // {sentence, review}
  'fr.c1.francais-professionnel-avance.120',     // {sentence, review}
];

/** No `voiceflash`: never in a `practice` speak section. */
export const NOT_SPEAKABLE = [
  ...NOT_DECK_ABLE,
  'fr.b1.correspondance.1025',                   // flashcard only (a rule card)
  'fr.b2.affaires.1378',                         // flashcard only (a rule card)
  'fr.b2.langue-soignee.1581',                   // flashcard, review (a rule card)
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §G. THE AUTHORED ROWS, ONE BLOCK PER ACT
 *
 *  A WORKSHOP CORPUS HOLDS PHRASES THAT DO A JOB: the headwords Postgres
 *  lacks, sentences that show one move each, and one flashcard-only rule
 *  card per act (`rule()`). Rows that show the PROBLEM (a chronological
 *  opening, an impression stated as fact, an opinion in a compte rendu, a
 *  loaded word) are RECOGNITION rows (`REC`): flashcard and review only,
 *  never spoken, never dictated. No anglicism is ever a row: « deadline »,
 *  « implémenter », « les minutes », « varia » live only in commonErrors,
 *  trapDrill prompts, free() quotations and errorSpot prompts.
 * ══════════════════════════════════════════════════════════════════════════ */

type Row = Item;

const FCVR = ['flashcard', 'voiceflash', 'review'] as Item['drills'];
const FCVDR = ['flashcard', 'voiceflash', 'dictation', 'review'] as Item['drills'];
const FC = ['flashcard'] as Item['drills'];
/** Recognised, never produced aloud: the problem shown. */
const REC = ['flashcard', 'review'] as Item['drills'];

const sent = (
  n: number, fr: string, en: string, ipa: string, respell: string, tags: string[],
  drills: Item['drills'] = FCVR, extra: Partial<Item> = {},
): Row => ({
  id: E(n), kind: 'sentence', level: LEVEL, theme: THEME, fr, en, ipa, respell,
  tags, drills, version: 1, grammarPoints: ['rapports-comptes-rendus'], ...extra,
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

/* ── ACT 1 · LE RAPPORT QU’ON NE LIT PAS ────────────────────────────────── */

export const ACT1_ROWS: Row[] = [
  sent(1200, 'Madame Pelletier lit la première page, et rarement la suite.', 'Ms Pelletier reads the first page, and rarely the rest.', '/ma.dam pɛ.lə.tje li la pʁə.mjɛʁ paʒ e ʁaʁ.mɑ̃ la sɥit/', 'ma-DAMM peh-luh-TYAY | lee la pruh-myehr PAZH | ay rar-MAHⁿ la SWEET', ['lecteur']),
  sent(1201, 'Mon rapport raconte tout dans l’ordre, mais il ne dit pas quoi décider.', 'My report tells everything in order, but it does not say what to decide.', '/mɔ̃ ʁa.pɔʁ ʁa.kɔ̃t tu dɑ̃ lɔʁdʁ mɛ il nə di pa kwa de.si.de/', 'mohⁿ ra-POR | ra-kohⁿt TOO dahⁿ LORDR | meh eel nuh dee PA | kwa day-see-DAY', ['chronologie']),
  sent(1202, 'Je commence par ce que la direction doit décider.', 'I start with what management has to decide.', '/ʒə kɔ.mɑ̃s paʁ sə kə la di.ʁɛk.sjɔ̃ dwa de.si.de/', 'zhuh ko-MAHⁿSS par suh kuh | la dee-rek-SYOHⁿ | dwa day-see-DAY', ['lecteur', 'essentiel'], FCVDR),
  sent(1203, REFRAME, REFRAME_EN, '/e.kʁi puʁ ki nɛ.tɛ pa la lɛ.sɑ̃.sjɛl da.bɔʁ pɥi le fɛ e te ʁə.kɔ.mɑ̃.da.sjɔ̃ a paʁ/', 'ay-KREE poor kee neh-teh pa LA | leh-sahⁿ-SYEL da-BOR | pwee lay FEH | ay tay ruh-ko-mahⁿ-da-SYOHⁿ a PAR', ['regle', 'lecteur'], FC,
    rule('Ton rapport suit le calendrier, du lundi au vendredi. Que manque-t-il ?', 'Le lecteur. Il n’était pas là et il doit décider : donne-lui l’essentiel d’abord, puis les faits qui le prouvent, et garde tes recommandations dans leur partie.')),
  sent(1204, 'Qui va lire ce document, et pour décider de quoi ?', 'Who is going to read this document, and to decide what?', '/ki va liʁ sə dɔ.ky.mɑ̃ e puʁ de.si.de də kwa/', 'kee va LEER suh do-kü-MAHⁿ | ay poor day-see-DAY duh KWA', ['lecteur', 'question']),
  sent(1205, 'Les faits d’abord, les opinions à part.', 'The facts first, opinions kept apart.', '/le fɛ da.bɔʁ le.zɔ.pi.njɔ̃ a paʁ/', 'lay FEH da-BOR | lay-zo-pee-NYOHⁿ a PAR', ['faits'], FCVDR),
  sent(1206, 'Un rapport n’est pas un journal de bord.', 'A report is not a logbook.', '/œ̃ ʁa.pɔʁ nɛ pa.zœ̃ ʒuʁ.nal də bɔʁ/', 'uhⁿ ra-POR | neh pa-zuhⁿ zhoor-NAL duh BOR', ['chronologie']),
  sent(1207, 'La direction veut une réponse, pas un récit.', 'Management wants an answer, not a story.', '/la di.ʁɛk.sjɔ̃ vø yn ʁe.pɔ̃s pa.zœ̃ ʁe.si/', 'la dee-rek-SYOHⁿ veu ünn ray-POHⁿSS | pa-zuhⁿ ray-SEE', ['essentiel']),
  sent(1208, 'Ce document doit pouvoir se lire sans moi.', 'This document must be readable without me.', '/sə dɔ.ky.mɑ̃ dwa pu.vwaʁ sə liʁ sɑ̃ mwa/', 'suh do-kü-MAHⁿ | dwa poo-VWAR suh LEER sahⁿ MWA', ['lecteur']),
  sent(1209, 'Le lundi 3 mars, j’ai rencontré le gérant de la cantine.', 'On Monday 3 March, I met the canteen manager.', '/lə lœ̃.di tʁwa maʁs ʒe ʁɑ̃.kɔ̃.tʁe lə ʒe.ʁɑ̃ də la kɑ̃.tin/', 'luh luhⁿ-DEE trwa MARSS | zhay rahⁿ-kohⁿ-TRAY | luh zhay-RAHⁿ duh la kahⁿ-TEENN', ['chronologie'], REC),
  sent(1210, 'En conclusion, il faudrait peut-être changer quelque chose.', 'In conclusion, perhaps something should change.', '/ɑ̃ kɔ̃.kly.zjɔ̃ il fo.dʁɛ pø.tɛtʁ ʃɑ̃.ʒe kɛl.kə ʃoz/', 'ahⁿ kohⁿ-klü-ZYOHⁿ | eel foh-DREH peu-TETR | shahⁿ-ZHAY kel-kuh SHOZ', ['chronologie', 'vague'], REC),
];

/* ── ACT 2 · L’ARCHITECTURE D’UN RAPPORT ────────────────────────────────── */

export const ACT2_ROWS: Row[] = [
  phrase(1211, 'le présent rapport', 'this report (formal)', '/lə pʁe.zɑ̃ ʁa.pɔʁ/', 'luh pray-zahⁿ ra-POR', ['architecture']),
  sent(1212, 'Objet : l’occupation du stationnement du site de Sherbrooke', 'Subject: use of the car park at the Sherbrooke site', '/ɔb.ʒɛ lɔ.ky.pa.sjɔ̃ dy sta.sjɔ.nə.mɑ̃ dy sit də ʃɛʁ.bʁuk/', 'ob-ZHEH | lo-kü-pa-SYOHⁿ | dü sta-syonn-MAHⁿ | dü SEET duh sher-BROOK', ['architecture', 'objet']),
  sent(1213, 'Le présent rapport a pour objet de proposer une nouvelle répartition des places.', 'The purpose of this report is to propose a new allocation of spaces.', '/lə pʁe.zɑ̃ ʁa.pɔʁ a puʁ ɔb.ʒɛ də pʁɔ.po.ze yn nu.vɛl ʁe.paʁ.ti.sjɔ̃ de plas/', 'luh pray-zahⁿ ra-POR | a poor ob-ZHEH | duh pro-poh-ZAY | ünn noo-vel ray-par-tee-SYOHⁿ day PLASS', ['architecture', 'objet']),
  sent(1214, 'Le contexte rappelle ce que le lecteur doit savoir, et rien de plus.', 'The background recalls what the reader needs to know, and nothing more.', '/lə kɔ̃.tɛkst ʁa.pɛl sə kə lə lɛk.tœʁ dwa sa.vwaʁ e ʁjɛ̃ də plys/', 'luh kohⁿ-TEKST ra-PEL | suh kuh luh lek-TUHR dwa sa-VWAR | ay ryehⁿ duh PLÜSS', ['architecture']),
  sent(1215, 'Le constat décrit la situation telle qu’elle est, chiffres à l’appui.', 'The findings describe the situation as it is, backed by figures.', '/lə kɔ̃s.ta de.kʁi la si.tɥa.sjɔ̃ tɛl kɛ.lɛ ʃifʁ a la.pɥi/', 'luh kohⁿs-TA day-KREE | la see-twa-SYOHⁿ tel keh-LEH | SHEEFR a la-PWEE', ['architecture', 'constat'], FCVDR),
  sent(1216, 'L’analyse explique pourquoi la situation est ce qu’elle est.', 'The analysis explains why the situation is what it is.', '/la.na.liz ɛks.plik puʁ.kwa la si.tɥa.sjɔ̃ ɛ sə kɛ.lɛ/', 'la-na-LEEZ ex-PLEEK | poor-KWA la see-twa-SYOHⁿ | eh suh keh-LEH', ['architecture', 'analyse']),
  sent(1217, 'Les recommandations disent ce qu’il faut faire, par qui et pour quand.', 'The recommendations say what must be done, by whom and by when.', '/le ʁə.kɔ.mɑ̃.da.sjɔ̃ diz sə kil fo fɛʁ paʁ ki e puʁ kɑ̃/', 'lay ruh-ko-mahⁿ-da-SYOHⁿ | DEEZ suh keel foh FEHR | par KEE ay poor KAHⁿ', ['architecture', 'recommandation']),
  sent(1218, 'Les annexes contiennent le détail : tableaux, questionnaire, devis.', 'The appendices hold the detail: tables, questionnaire, quotes.', '/le.za.nɛks kɔ̃.tjɛn lə de.taj ta.blo kɛs.tjɔ.nɛʁ də.vi/', 'lay-za-NEKS kohⁿ-TYENN luh day-TAÏ | ta-BLOH | kes-tyo-NEHR | duh-VEE', ['architecture', 'annexe']),
  sent(1219, 'Objet, contexte, constat, analyse, recommandations, annexes.', 'Subject, background, findings, analysis, recommendations, appendices.', '/ɔb.ʒɛ kɔ̃.tɛkst kɔ̃s.ta a.na.liz ʁə.kɔ.mɑ̃.da.sjɔ̃ a.nɛks/', 'ob-ZHEH | kohⁿ-TEKST | kohⁿs-TA | a-na-LEEZ | ruh-ko-mahⁿ-da-SYOHⁿ | a-NEKS', ['regle', 'architecture'], FC,
    rule('Dans quel ordre ranges-tu les six parties d’un rapport ?', 'Objet, contexte, constat, analyse, recommandations, annexes : de ce qu’on te demande à ce que tu proposes, et le détail à la fin.')),
  sent(1220, 'Le tableau complet figure en annexe 2.', 'The full table is in appendix 2.', '/lə ta.blo kɔ̃.plɛ fi.ɡyʁ ɑ̃.na.nɛks dø/', 'luh ta-BLOH kohⁿ-PLEH | fee-GÜR | ahⁿ-na-nex DEU', ['annexe']),
  sent(1221, 'Une recommandation glissée dans le constat brouille la lecture.', 'A recommendation slipped into the findings muddles the reading.', '/yn ʁə.kɔ.mɑ̃.da.sjɔ̃ ɡli.se dɑ̃ lə kɔ̃s.ta bʁuj la lɛk.tyʁ/', 'ünn ruh-ko-mahⁿ-da-SYOHⁿ | glee-SAY dahⁿ luh kohⁿs-TA | BROOY la lek-TÜR', ['architecture', 'melange']),
  phrase(1222, 'chiffres à l’appui', 'backed by figures', '/ʃifʁ a la.pɥi/', 'SHEEFR a la-PWEE', ['constat']),
  sent(1223, 'Chaque partie répond à une seule question.', 'Each part answers one question only.', '/ʃak paʁ.ti ʁe.pɔ̃ a yn sœl kɛs.tjɔ̃/', 'shak par-TEE | ray-POHⁿ a ünn suhl kes-TYOHⁿ', ['architecture'], FCVDR),
];

/* ── ACT 3 · LE CONSTAT ─────────────────────────────────────────────────── */

export const ACT3_ROWS: Row[] = [
  sent(1224, 'On constate une baisse de la fréquentation depuis janvier.', 'A drop in attendance has been observed since January.', '/ɔ̃ kɔ̃s.tat yn bɛs də la fʁe.kɑ̃.ta.sjɔ̃ də.pɥi ʒɑ̃.vje/', 'ohⁿ kohⁿs-TAT | ünn BESS duh la fray-kahⁿ-ta-SYOHⁿ | duh-pwee zhahⁿ-VYAY', ['constat']),
  sent(1225, 'Il ressort de l’enquête que les équipes du soir ne mangent plus sur place.', 'The survey shows that the evening teams no longer eat on site.', '/il ʁə.sɔʁ də lɑ̃.kɛt kə le.ze.kip dy swaʁ nə mɑ̃ʒ ply syʁ plas/', 'eel ruh-SOR duh lahⁿ-KET | kuh lay-zay-KEEP dü SWAR | nuh mahⁿzh plü sür PLASS', ['constat', 'source']),
  phrase(1226, 'il ressort de… que', 'it emerges from… that', '/il ʁə.sɔʁ də kə/', 'eel ruh-SOR DUH | KUH', ['constat', 'source']),
  sent(1227, 'Selon le registre des caisses, la cantine sert soixante-dix repas par jour.', 'According to the till records, the canteen serves seventy meals a day.', '/sə.lɔ̃ lə ʁə.ʒistʁ de kɛs la kɑ̃.tin sɛʁ swa.sɑ̃t.dis ʁə.pa paʁ ʒuʁ/', 'suh-LOHⁿ luh ruh-ZHEESTR day KESS | la kahⁿ-TEENN sehr | swa-sahⁿt-DEESS ruh-PA par ZHOOR', ['constat', 'source']),
  sent(1228, 'Les données montrent une baisse ; elles n’en donnent pas la cause.', 'The data show a drop; they do not give its cause.', '/le dɔ.ne mɔ̃tʁ yn bɛs ɛl nɑ̃ dɔn pa la koz/', 'lay do-NAY MOHⁿTR ünn BESS | el nahⁿ DONN pa la KOHZ', ['constat', 'analyse']),
  sent(1229, 'Le constat dit ce qu’on observe ; l’analyse dit pourquoi.', 'The findings say what is observed; the analysis says why.', '/lə kɔ̃s.ta di sə kɔ̃.nɔp.sɛʁv la.na.liz di puʁ.kwa/', 'luh kohⁿs-TA dee suh koh-nop-SEHRV | la-na-LEEZ dee poor-KWA', ['constat', 'analyse'], FCVDR),
  sent(1230, 'Le personnel boude la cantine.', 'Staff are shunning the canteen.', '/lə pɛʁ.sɔ.nɛl bud la kɑ̃.tin/', 'luh pehr-so-NEL BOOD la kahⁿ-TEENN', ['impression'], REC),
  sent(1231, 'La fréquentation a baissé de plus d’un tiers en un an.', 'Attendance has fallen by more than a third in a year.', '/la fʁe.kɑ̃.ta.sjɔ̃ a be.se də ply dœ̃ tjɛʁ ɑ̃.nœ̃.nɑ̃/', 'la fray-kahⁿ-ta-SYOHⁿ | a beh-SAY | duh plü duhⁿ TYEHR | ahⁿ-nuhⁿ-NAHⁿ', ['constat', 'chiffre']),
  sent(1232, 'Chaque chiffre doit avoir sa source.', 'Every figure must have its source.', '/ʃak ʃifʁ dwa a.vwaʁ sa suʁs/', 'shak SHEEFR | dwa a-VWAR sa SOORSS', ['source'], FCVDR),
  sent(1233, 'Un fait se vérifie ; une impression se signale comme telle.', 'A fact can be checked; an impression is flagged as such.', '/œ̃ fɛ sə ve.ʁi.fi yn ɛ̃.pʁɛ.sjɔ̃ sə si.ɲal kɔm tɛl/', 'uhⁿ FEH suh vay-ree-FEE | ünn ehⁿ-preh-SYOHⁿ | suh see-NYAL komm TEL', ['regle', 'impression'], FC,
    rule('« Le personnel boude la cantine » : constat ou interprétation ?', 'Une interprétation. Le constat dit : soixante-dix repas par jour contre cent dix l’an dernier, selon le registre des caisses.')),
  sent(1234, 'Environ un quart des plats préparés est jeté chaque jour.', 'About a quarter of the dishes prepared are thrown away every day.', '/ɑ̃.vi.ʁɔ̃ œ̃ kaʁ de pla pʁe.pa.ʁe ɛ ʒə.te ʃak ʒuʁ/', 'ahⁿ-vee-ROHⁿ uhⁿ KAR | day PLA pray-pa-RAY | eh zhuh-TAY shak ZHOOR', ['constat', 'chiffre']),
  sent(1235, 'D’après l’enquête interne, six répondants sur dix jugent les horaires inadaptés.', 'According to the internal survey, six respondents in ten find the opening hours unsuitable.', '/da.pʁɛ lɑ̃.kɛt ɛ̃.tɛʁn si ʁe.pɔ̃.dɑ̃ syʁ dis ʒyʒ le.zɔ.ʁɛʁ i.na.dap.te/', 'da-PREH lahⁿ-KET ehⁿ-TEHRN | see ray-pohⁿ-DAHⁿ sür DEESS | ZHÜZH lay-zo-REHR | ee-na-dap-TAY', ['constat', 'source']),
];

/* ── ACT 4 · DU SYMPTÔME AUX CAUSES ─────────────────────────────────────── */

export const ACT4_ROWS: Row[] = [
  phrase(1236, 'la cause principale', 'the main cause', '/la koz pʁɛ̃.si.pal/', 'la KOHZ prehⁿ-see-PAL', ['cause']),
  phrase(1237, 'un facteur aggravant', 'an aggravating factor', '/œ̃ fak.tœʁ a.ɡʁa.vɑ̃/', 'uhⁿ fak-TUHR a-gra-VAHⁿ', ['cause']),
  sent(1238, 'La baisse de fréquentation est un symptôme, pas une cause.', 'The drop in attendance is a symptom, not a cause.', '/la bɛs də fʁe.kɑ̃.ta.sjɔ̃ ɛ.tœ̃ sɛ̃p.tom pa.zyn koz/', 'la BESS duh fray-kahⁿ-ta-SYOHⁿ | eh-tuhⁿ sehⁿp-TOHMM | pa-zünn KOHZ', ['cause', 'symptome'], FCVDR),
  sent(1239, 'La cause principale tient aux nouveaux horaires de travail.', 'The main cause lies in the new working hours.', '/la koz pʁɛ̃.si.pal tjɛ̃ o nu.vo.zɔ.ʁɛʁ də tʁa.vaj/', 'la KOHZ prehⁿ-see-PAL | TYEHⁿ oh noo-voh-zo-REHR | duh tra-VAÏ', ['cause']),
  sent(1240, 'La hausse des prix a joué comme facteur aggravant.', 'The price rise acted as an aggravating factor.', '/la os de pʁi a ʒwe kɔm fak.tœʁ a.ɡʁa.vɑ̃/', 'la OHSS day PREE | a ZHWAY | komm fak-TUHR a-gra-VAHⁿ', ['cause']),
  sent(1241, 'Le menu unique n’explique pas tout, mais il pèse.', 'The single menu does not explain everything, but it weighs.', '/lə mə.ny y.nik nɛks.plik pa tu mɛ il pɛz/', 'luh muh-NÜ ü-NEEK | nex-PLEEK pa TOO | meh eel PEZ', ['cause']),
  sent(1242, 'Une analyse remonte du symptôme aux causes, et les classe.', 'An analysis works back from the symptom to the causes, and ranks them.', '/yn a.na.liz ʁə.mɔ̃t dy sɛ̃p.tom o koz e le klas/', 'ünn a-na-LEEZ ruh-MOHⁿT | dü sehⁿp-TOHMM oh KOHZ | ay lay KLASS', ['regle', 'cause'], FC,
    rule('« Les gens ne viennent plus » : est-ce une cause ?', 'Non, c’est le symptôme. Les causes l’expliquent : les horaires, le prix, le menu, rangés du plus lourd au plus léger.')),
  sent(1243, 'Bonjour, c’est Bruno, de la cantine. Je vous rappelle pour votre rapport.', 'Hello, it is Bruno, from the canteen. I am calling you back about your report.', '/bɔ̃.ʒuʁ sɛ bʁy.no də la kɑ̃.tin ʒə vu ʁa.pɛl puʁ vɔtʁ ʁa.pɔʁ/', 'bohⁿ-ZHOOR | seh brü-NOH | duh la kahⁿ-TEENN | zhuh voo ra-PEL | poor votr ra-POR', ['ecoute']),
  sent(1244, 'Depuis janvier, l’équipe du soir commence à quatorze heures.', 'Since January, the evening team has started at two in the afternoon.', '/də.pɥi ʒɑ̃.vje le.kip dy swaʁ kɔ.mɑ̃s a ka.tɔʁ.zœʁ/', 'duh-pwee zhahⁿ-VYAY | lay-KEEP dü SWAR | ko-MAHⁿSS a ka-tor-ZUHR', ['ecoute', 'fait']),
  sent(1245, 'Et nous, on ferme à treize heures trente.', 'And we close at half past one.', '/e nu ɔ̃ fɛʁm a tʁɛ.zœʁ tʁɑ̃t/', 'ay NOO | ohⁿ FEHRM | a treh-zuhr TRAHⁿT', ['ecoute', 'fait']),
  sent(1246, 'Donc ces gens-là ne passent même plus devant nos portes.', 'So those people no longer even walk past our doors.', '/dɔ̃k se ʒɑ̃.la nə pas mɛm ply də.vɑ̃ no pɔʁt/', 'dohⁿk say zhahⁿ-LA | nuh PASS memm PLÜ | duh-vahⁿ noh PORT', ['ecoute', 'fait']),
  sent(1247, 'Le prix, oui, il a augmenté, mais ce n’est pas le fond du problème.', 'The price, yes, it went up, but that is not the heart of the problem.', '/lə pʁi wi i.la ɔɡ.mɑ̃.te mɛ sə nɛ pa lə fɔ̃ dy pʁɔ.blɛm/', 'luh PREE | WEE | ee-la og-mahⁿ-TAY | meh suh neh pa luh FOHⁿ dü pro-BLEMM', ['ecoute', 'avis']),
  sent(1248, 'Moi, je pense que le menu unique décourage aussi les jeunes.', 'Personally, I think the single menu also puts the young ones off.', '/mwa ʒə pɑ̃s kə lə mə.ny y.nik de.ku.ʁaʒ o.si le ʒœn/', 'MWA | zhuh pahⁿss kuh luh muh-NÜ ü-NEEK | day-koo-RAZH oh-SEE lay ZHUHNN', ['ecoute', 'avis']),
  sent(1249, 'Ça, je n’ai pas de chiffres, c’est une impression.', 'That, I have no figures for, it is an impression.', '/sa ʒə ne pa də ʃifʁ sɛ.tyn ɛ̃.pʁɛ.sjɔ̃/', 'SA | zhuh nay pa duh SHEEFR | seh-tünn ehⁿ-preh-SYOHⁿ', ['ecoute', 'avis']),
  sent(1250, 'Rappelez-moi si vous voulez les relevés de caisse.', 'Call me back if you want the till records.', '/ʁa.ple.mwa si vu vu.le le ʁəl.ve də kɛs/', 'ra-play-MWA | see voo voo-LAY | lay ruhl-VAY duh KESS', ['ecoute']),
  sent(1251, 'Avant d’analyser, on sépare ce que Bruno sait de ce qu’il pense.', 'Before analysing, you separate what Bruno knows from what he thinks.', '/a.vɑ̃ da.na.li.ze ɔ̃ se.paʁ sə kə bʁy.no sɛ də sə kil pɑ̃s/', 'a-vahⁿ da-na-lee-ZAY | ohⁿ say-PAR | suh kuh brü-NOH SEH | duh suh keel PAHⁿSS', ['fait', 'avis'], FCVDR),
];

/* ── ACT 5 · LES OPTIONS ET LES CRITÈRES ────────────────────────────────── */

export const ACT5_ROWS: Row[] = [
  phrase(1252, 'retenir une option', 'to choose an option', '/ʁət.niʁ y.nɔp.sjɔ̃/', 'ruht-NEER | ü-nop-SYOHⁿ', ['option']),
  phrase(1253, 'écarter une option', 'to rule out an option', '/e.kaʁ.te y.nɔp.sjɔ̃/', 'ay-kar-TAY | ü-nop-SYOHⁿ', ['option']),
  phrase(1254, 'au regard de ce critère', 'in the light of this criterion', '/o ʁə.ɡaʁ də sə kʁi.tɛʁ/', 'oh ruh-GAR | duh suh kree-TEHR', ['critere']),
  sent(1255, 'Trois options ont été étudiées.', 'Three options were examined.', '/tʁwa.zɔp.sjɔ̃ ɔ̃.te.te e.ty.dje/', 'trwa-zop-SYOHⁿ | ohⁿ-tay-TAY | ay-tü-DYAY', ['option'], FCVDR),
  sent(1256, 'L’option A présente l’avantage d’être la moins coûteuse.', 'Option A has the advantage of being the least costly.', '/lɔp.sjɔ̃ a pʁe.zɑ̃t la.vɑ̃.taʒ dɛtʁ la mwɛ̃ ku.tøz/', 'lop-SYOHⁿ A | pray-ZAHⁿT la-vahⁿ-TAZH | DETR la mwehⁿ koo-TEUZ', ['option', 'critere']),
  sent(1257, 'Elle a toutefois l’inconvénient de supprimer un lieu de pause apprécié.', 'It does, however, have the drawback of removing a popular place to take a break.', '/ɛ.la tut.fwa lɛ̃.kɔ̃.ve.njɑ̃ də sy.pʁi.me œ̃ ljø də poz a.pʁe.sje/', 'eh-la toot-FWA | lehⁿ-kohⁿ-vay-NYAHⁿ | duh sü-pree-MAY | uhⁿ lyeu duh POHZ a-pray-SYAY', ['option', 'critere']),
  sent(1258, 'Au regard du gaspillage, l’option C est la plus efficace.', 'As regards waste, option C is the most effective.', '/o ʁə.ɡaʁ dy ɡas.pi.jaʒ lɔp.sjɔ̃ se ɛ la ply.ze.fi.kas/', 'oh ruh-GAR dü gas-pee-YAZH | lop-SYOHⁿ SAY | eh la plü-zay-fee-KASS', ['critere']),
  sent(1259, 'Nous avons retenu quatre critères : le coût, l’accès, le gaspillage et le délai.', 'We used four criteria: cost, access, waste and lead time.', '/nu.za.vɔ̃ ʁət.ny katʁ kʁi.tɛʁ lə ku lak.sɛ lə ɡas.pi.jaʒ e lə de.lɛ/', 'noo-za-vohⁿ ruht-NÜ | katr kree-TEHR | luh KOO | lak-SEH | luh gas-pee-YAZH | ay luh day-LEH', ['critere']),
  sent(1260, 'L’option B est écartée, faute de traiteur disponible le soir.', 'Option B is ruled out, for lack of a caterer available in the evening.', '/lɔp.sjɔ̃ be ɛ.te.kaʁ.te fot də tʁɛ.tœʁ dis.pɔ.nibl lə swaʁ/', 'lop-SYOHⁿ BAY | eh-tay-kar-TAY | foht duh treh-TUHR | dees-po-NEEBL luh SWAR', ['option']),
  sent(1261, 'On choisit une option pour ses résultats, pas pour sa nouveauté.', 'You choose an option for its results, not for its novelty.', '/ɔ̃ ʃwa.zi y.nɔp.sjɔ̃ puʁ se ʁe.zyl.ta pa puʁ sa nu.vo.te/', 'ohⁿ shwa-ZEE ü-nop-SYOHⁿ | poor say ray-zül-TA | pa poor sa noo-voh-TAY', ['option', 'critere']),
  sent(1262, 'Les mêmes critères pour toutes les options, puis un choix justifié.', 'The same criteria for every option, then a justified choice.', '/le mɛm kʁi.tɛʁ puʁ tut le.zɔp.sjɔ̃ pɥi œ̃ ʃwa ʒys.ti.fje/', 'lay memm kree-TEHR | poor toot lay-zop-SYOHⁿ | pwee uhⁿ SHWA zhüs-tee-FYAY', ['regle', 'critere'], FC,
    rule('Comment justifies-tu le choix d’une option ?', 'Tu la compares aux autres sur les mêmes critères, tu dis où elle gagne et ce qu’elle coûte, puis tu écris « l’option retenue ».')),
  phrase(1263, 'l’option retenue', 'the option chosen', '/lɔp.sjɔ̃ ʁət.ny/', 'lop-SYOHⁿ ruht-NÜ', ['option']),
  sent(1264, 'Aucune option n’est parfaite ; l’option C est la moins risquée.', 'No option is perfect; option C is the least risky.', '/o.kyn ɔp.sjɔ̃ nɛ paʁ.fɛt lɔp.sjɔ̃ se ɛ la mwɛ̃ ʁis.ke/', 'oh-KÜNN op-SYOHⁿ | neh par-FET | lop-SYOHⁿ SAY | eh la mwehⁿ rees-KAY', ['option'], FCVDR),
];

/* ── ACT 6 · RECOMMANDER ────────────────────────────────────────────────── */

export const ACT6_ROWS: Row[] = [
  phrase(1265, 'préconiser', 'to recommend, to advocate (formal)', '/pʁe.kɔ.ni.ze/', 'pray-ko-nee-ZAY', ['recommander'], FCVR, { register: 'soutenu' }),
  phrase(1266, 'il est recommandé que', 'it is recommended that', '/i.lɛ ʁə.kɔ.mɑ̃.de kə/', 'ee-leh ruh-ko-mahⁿ-DAY KUH', ['recommander', 'subjonctif']),
  phrase(1267, 'il y aurait lieu de', 'there would be grounds to', '/i.li.jɔ.ʁɛ ljø də/', 'ee-lee-yo-REH LYEU DUH', ['recommander'], FCVR, { register: 'soutenu' }),
  sent(1268, 'Nous préconisons un essai de six mois.', 'We recommend a six-month trial.', '/nu pʁe.kɔ.ni.zɔ̃ œ̃.ne.sɛ də si mwa/', 'noo pray-ko-nee-ZOHⁿ | uhⁿ-nay-SEH | duh see MWA', ['recommander'], FCVDR),
  sent(1269, 'Il est recommandé que la cantine soit ouverte jusqu’à dix-neuf heures.', 'It is recommended that the canteen be open until seven in the evening.', '/i.lɛ ʁə.kɔ.mɑ̃.de kə la kɑ̃.tin swa.tu.vɛʁt ʒys.ka diz.nœ.vœʁ/', 'ee-leh ruh-ko-mahⁿ-DAY | kuh la kahⁿ-TEENN | swa-too-VEHRT | zhüs-ka deez-nuh-VUHR', ['recommander', 'subjonctif']),
  sent(1270, 'Il conviendrait de proposer deux plats au lieu d’un.', 'It would be advisable to offer two dishes instead of one.', '/il kɔ̃.vjɛ̃.dʁɛ də pʁɔ.po.ze dø pla o ljø dœ̃/', 'eel kohⁿ-vyehⁿ-DREH | duh pro-poh-ZAY | deu PLA | oh lyeu DUHⁿ', ['recommander']),
  sent(1271, 'Il y aurait lieu de revoir les prix à la baisse.', 'There would be grounds to lower the prices.', '/i.li.jɔ.ʁɛ ljø də ʁə.vwaʁ le pʁi a la bɛs/', 'ee-lee-yo-REH LYEU | duh ruh-VWAR lay PREE | a la BESS', ['recommander']),
  sent(1272, 'Nous recommandons de mettre en place la précommande en ligne.', 'We recommend setting up online pre-ordering.', '/nu ʁə.kɔ.mɑ̃.dɔ̃ də mɛ.tʁɑ̃ plas la pʁe.kɔ.mɑ̃d ɑ̃ liɲ/', 'noo ruh-ko-mahⁿ-DOHⁿ | duh meh-trahⁿ PLASS | la pray-ko-MAHⁿD | ahⁿ LEENY', ['recommander']),
  sent(1273, 'Il est recommandé que chaque salarié puisse commander la veille.', 'It is recommended that every employee be able to order the day before.', '/i.lɛ ʁə.kɔ.mɑ̃.de kə ʃak sa.la.ʁje pɥis kɔ.mɑ̃.de la vɛj/', 'ee-leh ruh-ko-mahⁿ-DAY | kuh shak sa-la-RYAY | PWEESS ko-mahⁿ-DAY | la VEY', ['recommander', 'subjonctif'], FCVDR),
  sent(1274, 'Une recommandation dit qui fait quoi, et pour quand.', 'A recommendation says who does what, and by when.', '/yn ʁə.kɔ.mɑ̃.da.sjɔ̃ di ki fɛ kwa e puʁ kɑ̃/', 'ünn ruh-ko-mahⁿ-da-SYOHⁿ | dee kee feh KWA | ay poor KAHⁿ', ['recommander']),
  sent(1275, 'Il faut absolument fermer la cantine.', 'The canteen absolutely must close.', '/il fo ap.sɔ.ly.mɑ̃ fɛʁ.me la kɑ̃.tin/', 'eel foh ap-so-lü-MAHⁿ | fehr-MAY la kahⁿ-TEENN', ['dosage'], REC),
  sent(1276, 'Après « il est recommandé que », le subjonctif.', 'After « il est recommandé que », the subjunctive.', '/a.pʁɛ i.lɛ ʁə.kɔ.mɑ̃.de kə lə syb.ʒɔ̃k.tif/', 'a-PREH | ee-leh ruh-ko-mahⁿ-DAY KUH | luh süb-zhohⁿk-TEEF', ['regle', 'subjonctif'], FC,
    rule('« Il est recommandé que la cantine … (être) ouverte le soir. »', 'soit : après « il est recommandé que », le subjonctif, comme après « il faut que ». Après « il conviendrait de », l’infinitif.')),
  sent(1277, 'Un bilan sera présenté en juin pour décider de la suite.', 'A review will be presented in June to decide what comes next.', '/œ̃ bi.lɑ̃ sə.ʁa pʁe.zɑ̃.te ɑ̃ ʒɥɛ̃ puʁ de.si.de də la sɥit/', 'uhⁿ bee-LAHⁿ | suh-ra pray-zahⁿ-TAY ahⁿ ZHWEHⁿ | poor day-see-DAY duh la SWEET', ['recommander', 'suivi']),
  sent(1278, 'Nous préconisons que l’essai fasse l’objet d’un bilan en juin.', 'We recommend that the trial be reviewed in June.', '/nu pʁe.kɔ.ni.zɔ̃ kə le.sɛ fas lɔb.ʒɛ dœ̃ bi.lɑ̃ ɑ̃ ʒɥɛ̃/', 'noo pray-ko-nee-ZOHⁿ | kuh lay-SEH FASS | lob-ZHEH duhⁿ bee-LAHⁿ | ahⁿ ZHWEHⁿ', ['recommander', 'subjonctif']),
];

/* ── ACT 7 · LA SYNTHÈSE EN TÊTE ────────────────────────────────────────── */

export const ACT7_ROWS: Row[] = [
  phrase(1279, 'le sommaire de gestion', 'the executive summary (Québec, OQLF)', '/lə sɔ.mɛʁ də ʒɛs.tjɔ̃/', 'luh so-MEHR | duh zhes-TYOHⁿ', ['synthese', 'quebec']),
  sent(1280, 'La synthèse se place en tête du rapport.', 'The summary goes at the head of the report.', '/la sɛ̃.tɛz sə plas ɑ̃ tɛt dy ʁa.pɔʁ/', 'la sehⁿ-TEZ | suh PLASS ahⁿ TET | dü ra-POR', ['synthese']),
  sent(1281, 'En une page, la direction doit savoir quoi décider.', 'In one page, management must know what to decide.', '/ɑ̃.nyn paʒ la di.ʁɛk.sjɔ̃ dwa sa.vwaʁ kwa de.si.de/', 'ahⁿ-nünn PAZH | la dee-rek-SYOHⁿ | dwa sa-VWAR | kwa day-see-DAY', ['synthese', 'lecteur']),
  sent(1282, 'Le sommaire ne présente pas le rapport : il le résume.', 'The summary does not introduce the report: it sums it up.', '/lə sɔ.mɛʁ nə pʁe.zɑ̃t pa lə ʁa.pɔʁ il lə ʁe.zym/', 'luh so-MEHR | nuh pray-ZAHⁿT pa luh ra-POR | eel luh ray-ZÜMM', ['synthese'], FCVDR),
  sent(1283, 'Ce rapport va présenter la situation de la cantine.', 'This report will present the situation of the canteen.', '/sə ʁa.pɔʁ va pʁe.zɑ̃.te la si.tɥa.sjɔ̃ də la kɑ̃.tin/', 'suh ra-POR | va pray-zahⁿ-TAY | la see-twa-SYOHⁿ | duh la kahⁿ-TEENN', ['synthese', 'annonce'], REC),
  sent(1284, 'La cantine perd de l’argent parce que ses horaires ne suivent plus ceux des équipes.', 'The canteen is losing money because its opening hours no longer match the teams’ hours.', '/la kɑ̃.tin pɛʁ də laʁ.ʒɑ̃ paʁs kə se.zɔ.ʁɛʁ nə sɥiv ply sø de.ze.kip/', 'la kahⁿ-TEENN | pehr duh lar-ZHAHⁿ | parss kuh say-zo-REHR | nuh SWEEV plü | seu day-zay-KEEP', ['synthese', 'cause']),
  sent(1285, 'Nous recommandons un essai de six mois, avec un bilan en juin.', 'We recommend a six-month trial, with a review in June.', '/nu ʁə.kɔ.mɑ̃.dɔ̃ œ̃.ne.sɛ də si mwa a.vɛk œ̃ bi.lɑ̃ ɑ̃ ʒɥɛ̃/', 'noo ruh-ko-mahⁿ-DOHⁿ | uhⁿ-nay-SEH duh see MWA | a-vek uhⁿ bee-LAHⁿ | ahⁿ ZHWEHⁿ', ['synthese', 'recommander']),
  sent(1286, 'On écrit la synthèse en dernier, et on la place en premier.', 'You write the summary last, and put it first.', '/ɔ̃.ne.kʁi la sɛ̃.tɛz ɑ̃ dɛʁ.nje e ɔ̃ la plas ɑ̃ pʁə.mje/', 'oh-nay-KREE la sehⁿ-TEZ | ahⁿ dehr-NYAY | ay ohⁿ la PLASS | ahⁿ pruh-MYAY', ['synthese'], FCVDR),
  sent(1287, 'Une synthèse tient seule : le problème, la cause, la recommandation.', 'A summary stands alone: the problem, the cause, the recommendation.', '/yn sɛ̃.tɛz tjɛ̃ sœl lə pʁɔ.blɛm la koz la ʁə.kɔ.mɑ̃.da.sjɔ̃/', 'ünn sehⁿ-TEZ | tyehⁿ SUHL | luh pro-BLEMM | la KOHZ | la ruh-ko-mahⁿ-da-SYOHⁿ', ['regle', 'synthese'], FC,
    rule('Quelles trois choses ta synthèse doit-elle dire ?', 'Le problème, sa cause principale et ce que tu recommandes. Le lecteur pressé s’arrête là, et il doit pouvoir décider.')),
  sent(1288, 'Le terme « sommaire exécutif » est un calque à éviter.', 'The term « sommaire exécutif » is a calque to avoid.', '/lə tɛʁm sɔ.mɛʁ ɛɡ.ze.ky.tif ɛ.tœ̃ kalk a e.vi.te/', 'luh TEHRM | so-mehr eg-zay-kü-TEEF | eh-tuhⁿ KALK | a ay-vee-TAY', ['synthese', 'calque']),
  sent(1289, 'Pas un chiffre dans la synthèse qui ne soit dans le rapport.', 'Not one figure in the summary that is not in the report.', '/pa.zœ̃ ʃifʁ dɑ̃ la sɛ̃.tɛz ki nə swa dɑ̃ lə ʁa.pɔʁ/', 'pa-zuhⁿ SHEEFR | dahⁿ la sehⁿ-TEZ | kee nuh SWA | dahⁿ luh ra-POR', ['synthese', 'chiffre']),
];

/* ── ACT 8 · LE COMPTE RENDU ────────────────────────────────────────────── */

export const ACT8_ROWS: Row[] = [
  sent(1290, 'Le compte rendu présente l’essentiel des discussions et des décisions.', 'The compte rendu sets out the essence of the discussions and the decisions.', '/lə kɔ̃t ʁɑ̃.dy pʁe.zɑ̃t le.sɑ̃.sjɛl de dis.ky.sjɔ̃ e de de.si.zjɔ̃/', 'luh kohⁿt rahⁿ-DÜ | pray-ZAHⁿT | leh-sahⁿ-SYEL | day dees-kü-SYOHⁿ | ay day day-see-ZYOHⁿ', ['compte-rendu'], FCVDR),
  sent(1291, 'Bruno Lachance rappelle que la cantine ferme à treize heures trente.', 'Bruno Lachance points out that the canteen closes at half past one.', '/bʁy.no la.ʃɑ̃s ʁa.pɛl kə la kɑ̃.tin fɛʁm a tʁɛ.zœʁ tʁɑ̃t/', 'brü-NOH la-SHAHⁿSS | ra-PEL | kuh la kahⁿ-TEENN FEHRM | a treh-zuhr TRAHⁿT', ['compte-rendu', 'verbe']),
  sent(1292, 'Aïcha Benali souligne que l’équipe du soir n’a pas été consultée.', 'Aïcha Benali stresses that the evening team was not consulted.', '/a.i.ʃa be.na.li su.liɲ kə le.kip dy swaʁ na pa.ze.te kɔ̃.syl.te/', 'a-ee-SHA bay-na-LEE | soo-LEENY | kuh lay-KEEP dü SWAR | na pa-zay-TAY kohⁿ-sül-TAY', ['compte-rendu', 'verbe']),
  sent(1293, 'Plusieurs membres s’inquiètent du coût d’un second service.', 'Several members are concerned about the cost of a second sitting.', '/ply.zjœʁ mɑ̃bʁ sɛ̃.kjɛt dy ku dœ̃ sə.ɡɔ̃ sɛʁ.vis/', 'plü-ZYUHR MAHⁿBR | sehⁿ-KYET | dü KOO | duhⁿ suh-gohⁿ sehr-VEESS', ['compte-rendu', 'verbe']),
  sent(1294, 'Le comité propose un essai de précommande dès avril.', 'The committee proposes a pre-ordering trial from April.', '/lə kɔ.mi.te pʁɔ.poz œ̃.ne.sɛ də pʁe.kɔ.mɑ̃d dɛ.za.vʁil/', 'luh ko-mee-TAY pro-POHZ | uhⁿ-nay-SEH | duh pray-ko-MAHⁿD | deh-za-VREEL', ['compte-rendu', 'decision']),
  sent(1295, 'Le compte rendu est rédigé au présent.', 'The compte rendu is written in the present tense.', '/lə kɔ̃t ʁɑ̃.dy ɛ ʁe.di.ʒe o pʁe.zɑ̃/', 'luh kohⁿt rahⁿ-DÜ | eh ray-dee-ZHAY | oh pray-ZAHⁿ', ['compte-rendu']),
  sent(1296, 'Je trouve que Bruno a eu raison de se fâcher.', 'I think Bruno was right to get angry.', '/ʒə tʁuv kə bʁy.no a y ʁɛ.zɔ̃ də sə fa.ʃe/', 'zhuh TROOV | kuh brü-NOH a ü reh-ZOHⁿ | duh suh fa-SHAY', ['avis'], REC),
  phrase(1297, 'souligner que', 'to stress that', '/su.li.ɲe kə/', 'soo-lee-NYAY KUH', ['verbe']),
  phrase(1298, 's’inquiéter de', 'to be concerned about', '/sɛ̃.kje.te də/', 'sehⁿ-kyay-TAY DUH', ['verbe']),
  sent(1299, 'Le secrétaire ne donne pas son avis : il rapporte celui des autres.', 'The secretary does not give his own view: he reports other people’s.', '/lə sə.kʁe.tɛʁ nə dɔn pa sɔ̃.na.vi il ʁa.pɔʁt sə.lɥi de.zotʁ/', 'luh suh-kray-TEHR | nuh DONN pa soh-na-VEE | eel ra-PORT | suh-lwee day-ZOHTR', ['compte-rendu', 'neutre'], FCVDR),
  sent(1300, 'Un compte rendu rapporte, au présent, sans juger.', 'A compte rendu reports, in the present, without judging.', '/œ̃ kɔ̃t ʁɑ̃.dy ʁa.pɔʁt o pʁe.zɑ̃ sɑ̃ ʒy.ʒe/', 'uhⁿ kohⁿt rahⁿ-DÜ | ra-PORT | oh pray-ZAHⁿ | sahⁿ zhü-ZHAY', ['regle', 'compte-rendu'], FC,
    rule('Dans un compte rendu, « Bruno s’est fâché et il avait raison » : que corriges-tu ?', 'Ton avis et le ton du récit. Écris : « Bruno Lachance conteste le chiffre avancé » : un verbe qui rapporte, au présent, sans juger.')),
  sent(1301, 'Le compte rendu sera soumis à l’approbation du comité.', 'The compte rendu will be submitted to the committee for approval.', '/lə kɔ̃t ʁɑ̃.dy sə.ʁa su.mi a la.pʁɔ.ba.sjɔ̃ dy kɔ.mi.te/', 'luh kohⁿt rahⁿ-DÜ | suh-ra soo-MEE | a la-pro-ba-SYOHⁿ | dü ko-mee-TAY', ['compte-rendu', 'approbation']),
  sent(1302, 'Personne ne s’oppose à la proposition.', 'Nobody objects to the proposal.', '/pɛʁ.sɔn nə sɔ.poz a la pʁɔ.po.zi.sjɔ̃/', 'pehr-SONN | nuh so-POHZ | a la pro-poh-zee-SYOHⁿ', ['compte-rendu', 'decision']),
];

/* ── ACT 9 · LE PROCÈS-VERBAL ───────────────────────────────────────────── */

export const ACT9_ROWS: Row[] = [
  phrase(1303, 'le procès-verbal', 'the official minutes', '/lə pʁɔ.sɛ.vɛʁ.bal/', 'luh pro-seh-vehr-BAL', ['proces-verbal']),
  phrase(1304, 'adopter l’ordre du jour', 'to adopt the agenda', '/a.dɔp.te lɔʁ.dʁə dy ʒuʁ/', 'a-dop-TAY | lor-druh dü ZHOOR', ['proces-verbal', 'adopter']),
  phrase(1305, 'approuver le procès-verbal', 'to approve the minutes', '/a.pʁu.ve lə pʁɔ.sɛ.vɛʁ.bal/', 'a-proo-VAY | luh pro-seh-vehr-BAL', ['proces-verbal', 'approuver']),
  phrase(1306, 'les questions diverses', 'any other business', '/le kɛs.tjɔ̃ di.vɛʁs/', 'lay kes-TYOHⁿ dee-VEHRSS', ['proces-verbal']),
  sent(1307, 'Le procès-verbal a un caractère officiel.', 'The procès-verbal is an official record.', '/lə pʁɔ.sɛ.vɛʁ.bal a œ̃ ka.ʁak.tɛʁ ɔ.fi.sjɛl/', 'luh pro-seh-vehr-BAL | a uhⁿ ka-rak-TEHR | o-fee-SYEL', ['proces-verbal']),
  sent(1308, 'Le procès-verbal suit l’ordre du jour, point par point.', 'The procès-verbal follows the agenda, item by item.', '/lə pʁɔ.sɛ.vɛʁ.bal sɥi lɔʁ.dʁə dy ʒuʁ pwɛ̃ paʁ pwɛ̃/', 'luh pro-seh-vehr-BAL | SWEE | lor-druh dü ZHOOR | pwehⁿ par PWEHⁿ', ['proces-verbal'], FCVDR),
  sent(1309, 'Le procès-verbal de la dernière séance est approuvé à l’unanimité.', 'The minutes of the last meeting are approved unanimously.', '/lə pʁɔ.sɛ.vɛʁ.bal də la dɛʁ.njɛʁ se.ɑ̃s ɛ.ta.pʁu.ve a ly.na.ni.mi.te/', 'luh pro-seh-vehr-BAL | duh la dehr-nyehr say-AHⁿSS | eh-ta-proo-VAY | a lü-na-nee-mee-TAY', ['proces-verbal', 'approuver']),
  sent(1310, 'Il est résolu de prolonger l’essai jusqu’en décembre.', 'It is resolved to extend the trial until December.', '/i.lɛ ʁe.zɔ.ly də pʁɔ.lɔ̃.ʒe le.sɛ ʒys.kɑ̃ de.sɑ̃bʁ/', 'ee-leh ray-zo-LÜ | duh pro-lohⁿ-ZHAY lay-SEH | zhüs-kahⁿ day-SAHⁿBR', ['proces-verbal', 'resolution']),
  sent(1311, 'On adopte un ordre du jour, on approuve un procès-verbal.', 'You adopt an agenda; you approve the minutes.', '/ɔ̃.na.dɔpt œ̃.nɔʁ.dʁə dy ʒuʁ ɔ̃.na.pʁuv œ̃ pʁɔ.sɛ.vɛʁ.bal/', 'oh-na-DOPT | uhⁿ-nor-druh dü ZHOOR | oh-na-PROOV | uhⁿ pro-seh-vehr-BAL', ['regle', 'adopter', 'approuver'], FC,
    rule('L’ordre du jour, le procès-verbal : adopter ou approuver ?', 'On adopte l’ordre du jour, en début de séance ; on approuve le procès-verbal de la séance précédente (Office québécois de la langue française).')),
  sent(1312, 'Ici, à Lyon, on dit aussi procès-verbal, mais pas toujours pour la même chose.', 'Here in Lyon we also say procès-verbal, but not always for the same thing.', '/i.si a ljɔ̃ ɔ̃ di o.si pʁɔ.sɛ.vɛʁ.bal mɛ pa tu.ʒuʁ puʁ la mɛm ʃoz/', 'ee-SEE | a LYOHⁿ | ohⁿ dee oh-SEE pro-seh-vehr-BAL | meh pa too-ZHOOR | poor la memm SHOHZ', ['ecoute', 'france']),
  sent(1313, 'Un procès-verbal, c’est d’abord un document officiel.', 'A procès-verbal is first and foremost an official document.', '/œ̃ pʁɔ.sɛ.vɛʁ.bal sɛ da.bɔʁ œ̃ dɔ.ky.mɑ̃ ɔ.fi.sjɛl/', 'uhⁿ pro-seh-vehr-BAL | seh da-BOR | uhⁿ do-kü-MAHⁿ o-fee-SYEL', ['ecoute', 'france']),
  sent(1314, 'Celui d’une assemblée générale, par exemple, se signe et se conserve.', 'That of a general meeting, for example, is signed and kept.', '/sə.lɥi dyn a.sɑ̃.ble ʒe.ne.ʁal paʁ.ɛɡ.zɑ̃pl sə siɲ e sə kɔ̃.sɛʁv/', 'suh-LWEE | dünn a-sahⁿ-blay zhay-nay-RAL | par-eg-ZAHⁿPL | suh SEENY | ay suh kohⁿ-SEHRV', ['ecoute', 'france']),
  sent(1315, 'Dans la rue, en revanche, un PV, c’est souvent une amende.', 'In the street, on the other hand, a PV is often a fine.', '/dɑ̃ la ʁy ɑ̃ ʁə.vɑ̃ʃ œ̃ pe.ve sɛ su.vɑ̃.tyn a.mɑ̃d/', 'dahⁿ la RÜ | ahⁿ ruh-VAHⁿSH | uhⁿ pay-VAY | seh soo-vahⁿ-tünn a-MAHⁿD', ['ecoute', 'france']),
  sent(1316, 'Pour nos réunions d’équipe, on fait plutôt un compte rendu.', 'For our team meetings, we tend to write a compte rendu.', '/puʁ no ʁe.y.njɔ̃ de.kip ɔ̃ fɛ ply.to œ̃ kɔ̃t ʁɑ̃.dy/', 'poor noh ray-ü-NYOHⁿ day-KEEP | ohⁿ feh plü-TOH | uhⁿ kohⁿt rahⁿ-DÜ', ['ecoute', 'france']),
  sent(1317, 'Et quand on manque de temps, un simple relevé de décisions.', 'And when time is short, a simple record of decisions.', '/e kɑ̃.tɔ̃ mɑ̃k də tɑ̃ œ̃ sɛ̃pl ʁəl.ve də de.si.zjɔ̃/', 'ay kahⁿ-tohⁿ MAHⁿK duh TAHⁿ | uhⁿ SEHⁿPL | ruhl-VAY duh day-see-ZYOHⁿ', ['ecoute', 'france']),
  sent(1318, 'Ce qu’on ne dit pas, en tout cas, c’est « les minutes ».', 'What we do not say, in any case, is « les minutes ».', '/sə kɔ̃ nə di pa ɑ̃ tu ka sɛ le mi.nyt/', 'suh kohⁿ nuh dee PA | ahⁿ too KA | seh lay mee-NÜT', ['ecoute', 'anglicisme']),
  sent(1319, 'À Sherbrooke, on l’entend parfois, mais l’Office le déconseille.', 'In Sherbrooke you sometimes hear it, but the Office advises against it.', '/a ʃɛʁ.bʁuk ɔ̃ lɑ̃.tɑ̃ paʁ.fwa mɛ lɔ.fis lə de.kɔ̃.sɛj/', 'a sher-BROOK | ohⁿ lahⁿ-TAHⁿ par-FWA | meh lo-FEESS | luh day-kohⁿ-SEY', ['ecoute', 'quebec']),
  sent(1320, 'Pour désigner le procès-verbal, l’emprunt « minutes » est déconseillé.', 'To refer to the minutes, the borrowing « minutes » is advised against.', '/puʁ de.zi.ɲe lə pʁɔ.sɛ.vɛʁ.bal lɑ̃.pʁœ̃ mi.nyt ɛ de.kɔ̃.se.je/', 'poor day-zee-NYAY | luh pro-seh-vehr-BAL | lahⁿ-PRUHⁿ mee-NÜT | eh day-kohⁿ-say-YAY', ['anglicisme', 'quebec']),
];

/* ── ACT 10 · LE RELEVÉ DE DÉCISIONS ET LES MOTS DU BUREAU ──────────────── */

export const ACT10_ROWS: Row[] = [
  phrase(1321, 'le relevé de décisions', 'the record of decisions', '/lə ʁəl.ve də de.si.zjɔ̃/', 'luh ruhl-VAY | duh day-see-ZYOHⁿ', ['releve']),
  sent(1322, 'La date limite est fixée au 30 avril.', 'The deadline is set for 30 April.', '/la dat li.mit ɛ fik.se o tʁɑ̃.ta.vʁil/', 'la DAT lee-MEET | eh feek-SAY | oh trahⁿ-ta-VREEL', ['echeance']),
  phrase(1323, 'mettre en œuvre une mesure', 'to implement a measure', '/mɛ.tʁɑ̃.nœvʁ yn mə.zyʁ/', 'meh-trahⁿ-NUHVR | ünn muh-ZÜR', ['mise-en-oeuvre']),
  sent(1324, 'La mesure sera mise en œuvre dès le mois prochain.', 'The measure will be implemented as early as next month.', '/la mə.zyʁ sə.ʁa mi.zɑ̃.nœvʁ dɛ lə mwa pʁɔ.ʃɛ̃/', 'la muh-ZÜR | suh-ra mee-zahⁿ-NUHVR | deh luh MWA pro-SHEHⁿ', ['mise-en-oeuvre']),
  sent(1325, 'Il nous faut une échéance claire pour chaque action.', 'We need a clear due date for every action.', '/il nu fo yn e.ʃe.ɑ̃s klɛʁ puʁ ʃak ak.sjɔ̃/', 'eel noo FOH | ünn ay-shay-AHⁿSS KLEHR | poor shak ak-SYOHⁿ', ['echeance']),
  sent(1326, 'Le point suivant porte sur les horaires.', 'The next item concerns the opening hours.', '/lə pwɛ̃ sɥi.vɑ̃ pɔʁt syʁ le.zɔ.ʁɛʁ/', 'luh pwehⁿ swee-VAHⁿ | PORT sür lay-zo-REHR', ['point']),
  sent(1327, 'Le comité traitera la question du gaspillage en mai.', 'The committee will deal with the question of waste in May.', '/lə kɔ.mi.te tʁɛ.tə.ʁa la kɛs.tjɔ̃ dy ɡas.pi.jaʒ ɑ̃ mɛ/', 'luh ko-mee-TAY | treh-tuh-RA | la kes-TYOHⁿ dü gas-pee-YAZH | ahⁿ MEH', ['traiter']),
  sent(1328, 'Questions diverses : aucune.', 'Any other business: none.', '/kɛs.tjɔ̃ di.vɛʁs o.kyn/', 'kes-TYOHⁿ dee-VEHRSS | oh-KÜNN', ['point']),
  sent(1329, 'Date limite, mettre en œuvre, procès-verbal.', 'Deadline, implement, minutes.', '/dat li.mit mɛ.tʁɑ̃.nœvʁ pʁɔ.sɛ.vɛʁ.bal/', 'dat lee-MEET | meh-trahⁿ-NUHVR | pro-seh-vehr-BAL', ['regle', 'anglicisme'], FC,
    rule('« Deadline », « implémenter », « les minutes » : que mets-tu dans un rapport soigné ?', 'Date limite ou échéance ; mettre en œuvre ; procès-verbal ou compte rendu.')),
  sent(1330, 'Pour un plan ou une mesure, on écrit « mettre en œuvre ».', 'For a plan or a measure, you write « mettre en œuvre ».', '/puʁ œ̃ plɑ̃ u yn mə.zyʁ ɔ̃.ne.kʁi mɛ.tʁɑ̃.nœvʁ/', 'poor uhⁿ PLAHⁿ | oo ünn muh-ZÜR | oh-nay-KREE | meh-trahⁿ-NUHVR', ['mise-en-oeuvre']),
  sent(1331, 'Responsable : Bruno Lachance. Échéance : 15 avril.', 'Owner: Bruno Lachance. Due date: 15 April.', '/ʁɛs.pɔ̃.sabl bʁy.no la.ʃɑ̃s e.ʃe.ɑ̃s kɛ̃.za.vʁil/', 'res-pohⁿ-SABL | brü-NOH la-SHAHⁿSS | ay-shay-AHⁿSS | kehⁿ-za-VREEL', ['releve', 'echeance']),
  sent(1332, 'Un relevé de décisions ne garde que ce qui a été décidé.', 'A record of decisions keeps only what was decided.', '/œ̃ ʁəl.ve də de.si.zjɔ̃ nə ɡaʁd kə sə ki a e.te de.si.de/', 'uhⁿ ruhl-VAY duh day-see-ZYOHⁿ | nuh GARD kuh | suh kee a ay-TAY day-see-DAY', ['releve'], FCVDR),
  sent(1333, 'Chaque décision a un responsable et une échéance.', 'Every decision has an owner and a due date.', '/ʃak de.si.zjɔ̃ a œ̃ ʁɛs.pɔ̃.sabl e yn e.ʃe.ɑ̃s/', 'shak day-see-ZYOHⁿ | a uhⁿ res-pohⁿ-SABL | ay ünn ay-shay-AHⁿSS', ['releve', 'echeance']),
  sent(1334, 'L’Office québécois déconseille « varia » : écris « questions diverses ».', 'The Office québécois advises against « varia »: write « questions diverses ».', '/lɔ.fis ke.be.kwa de.kɔ̃.sɛj va.ʁja e.kʁi kɛs.tjɔ̃ di.vɛʁs/', 'lo-FEESS kay-bay-KWA | day-kohⁿ-SEY va-RYA | ay-KREE kes-tyohⁿ dee-VEHRSS', ['anglicisme', 'quebec']),
  sent(1335, 'La mise en œuvre commence le 2 avril.', 'Implementation begins on 2 April.', '/la mi.zɑ̃.nœvʁ kɔ.mɑ̃s lə dø.za.vʁil/', 'la mee-zahⁿ-NUHVR | ko-MAHⁿSS | luh deu-za-VREEL', ['mise-en-oeuvre'], FCVDR),
];

/* ── ACT 11 · RELIRE EN RAPPORTEUR ──────────────────────────────────────── */

export const ACT11_ROWS: Row[] = [
  sent(1336, 'Dans un constat, « je pense » n’a pas sa place.', 'In a set of findings, « je pense » has no place.', '/dɑ̃.zœ̃ kɔ̃s.ta ʒə pɑ̃s na pa sa plas/', 'dahⁿ-zuhⁿ kohⁿs-TA | zhuh PAHⁿSS | na pa sa PLASS', ['neutre']),
  sent(1337, 'Les chiffres du rapport doivent être les mêmes partout.', 'The figures in the report must be the same everywhere.', '/le ʃifʁ dy ʁa.pɔʁ dwa.vɛtʁ le mɛm paʁ.tu/', 'lay SHEEFR dü ra-POR | dwa-VETR | lay memm par-TOO', ['relire', 'chiffre'], FCVDR),
  sent(1338, 'Il apparaît que les prix ne sont pas la cause principale.', 'It appears that prices are not the main cause.', '/i.la.pa.ʁɛ kə le pʁi nə sɔ̃ pa la koz pʁɛ̃.si.pal/', 'ee-la-pa-REH | kuh lay PREE | nuh sohⁿ PA | la KOHZ prehⁿ-see-PAL', ['impersonnel']),
  sent(1339, 'Les résultats suggèrent un lien avec les horaires.', 'The results suggest a link with the opening hours.', '/le ʁe.zyl.ta syɡ.ʒɛʁ œ̃ ljɛ̃ a.vɛk le.zɔ.ʁɛʁ/', 'lay ray-zül-TA | süg-ZHEHR | uhⁿ LYEHⁿ | a-vek lay-zo-REHR', ['nuance']),
  sent(1340, 'Le gérant a été dépassé par les événements.', 'The manager was overwhelmed by events.', '/lə ʒe.ʁɑ̃ a e.te de.pa.se paʁ le.ze.vɛn.mɑ̃/', 'luh zhay-RAHⁿ | a ay-TAY day-pa-SAY | par lay-zay-venn-MAHⁿ', ['charge'], REC),
  sent(1341, 'Le gérant n’a pas été consulté sur les nouveaux horaires.', 'The manager was not consulted about the new hours.', '/lə ʒe.ʁɑ̃ na pa.ze.te kɔ̃.syl.te syʁ le nu.vo.zɔ.ʁɛʁ/', 'luh zhay-RAHⁿ | na pa-zay-TAY kohⁿ-sül-TAY | sür lay noo-voh-zo-REHR', ['neutre']),
  sent(1342, 'Le « nous » du rapport engage le service, pas une personne.', 'The « nous » of the report commits the department, not one person.', '/lə nu dy ʁa.pɔʁ ɑ̃.ɡaʒ lə sɛʁ.vis pa.zyn pɛʁ.sɔn/', 'luh NOO dü ra-POR | ahⁿ-GAZH luh sehr-VEESS | pa-zünn pehr-SONN', ['impersonnel']),
  sent(1343, 'Chaque annexe est citée dans le texte.', 'Every appendix is referred to in the text.', '/ʃa.ka.nɛks ɛ si.te dɑ̃ lə tɛkst/', 'sha-ka-NEKS | eh see-TAY | dahⁿ luh TEKST', ['relire', 'annexe']),
  sent(1344, 'Un mot chargé juge ; un mot neutre décrit.', 'A loaded word judges; a neutral word describes.', '/œ̃ mo ʃaʁ.ʒe ʒyʒ œ̃ mo nøtʁ de.kʁi/', 'uhⁿ MOH shar-ZHAY ZHÜZH | uhⁿ MOH NEUTR day-KREE', ['neutre', 'charge'], FCVDR),
  sent(1345, 'Avant d’envoyer, je vérifie les chiffres, les annexes et les mots.', 'Before sending, I check the figures, the appendices and the words.', '/a.vɑ̃ dɑ̃.vwa.je ʒə ve.ʁi.fi le ʃifʁ le.za.nɛks e le mo/', 'a-vahⁿ dahⁿ-vwa-YAY | zhuh vay-ree-FEE | lay SHEEFR | lay-za-NEKS | ay lay MOH', ['regle', 'relire'], FC,
    rule('Avant d’envoyer ton rapport, que vérifies-tu en dernier ?', 'Que chaque chiffre est le même partout, que chaque annexe est citée, et qu’aucun mot ne juge à ta place.')),
  sent(1346, 'Le présent rapport ne porte que sur le site de Sherbrooke.', 'This report covers only the Sherbrooke site.', '/lə pʁe.zɑ̃ ʁa.pɔʁ nə pɔʁt kə syʁ lə sit də ʃɛʁ.bʁuk/', 'luh pray-zahⁿ ra-POR | nuh PORT kuh | sür luh SEET duh sher-BROOK', ['impersonnel', 'architecture']),
  sent(1347, 'Ce point reste à vérifier.', 'This point remains to be checked.', '/sə pwɛ̃ ʁɛst a ve.ʁi.fje/', 'suh PWEHⁿ | rest a vay-ree-FYAY', ['nuance']),
];

/* ── ACT 12 · TON RAPPORT ───────────────────────────────────────────────── */

export const ACT12_ROWS: Row[] = [
  sent(1348, 'Je commence par la synthèse, en trois phrases.', 'I start with the summary, in three sentences.', '/ʒə kɔ.mɑ̃s paʁ la sɛ̃.tɛz ɑ̃ tʁwa fʁaz/', 'zhuh ko-MAHⁿSS | par la sehⁿ-TEZ | ahⁿ trwa FRAHZ', ['mission', 'synthese'], FCVDR),
  sent(1349, 'Je sépare le constat de l’analyse.', 'I keep the findings apart from the analysis.', '/ʒə se.paʁ lə kɔ̃s.ta də la.na.liz/', 'zhuh say-PAR | luh kohⁿs-TA | duh la-na-LEEZ', ['mission', 'constat']),
  sent(1350, 'Je compare les options sur les mêmes critères.', 'I compare the options on the same criteria.', '/ʒə kɔ̃.paʁ le.zɔp.sjɔ̃ syʁ le mɛm kʁi.tɛʁ/', 'zhuh kohⁿ-PAR | lay-zop-SYOHⁿ | sür lay memm kree-TEHR', ['mission', 'critere']),
  sent(1351, 'Je garde mes recommandations pour la fin.', 'I keep my recommendations for the end.', '/ʒə ɡaʁd me ʁə.kɔ.mɑ̃.da.sjɔ̃ puʁ la fɛ̃/', 'zhuh GARD | may ruh-ko-mahⁿ-da-SYOHⁿ | poor la FEHⁿ', ['mission', 'recommandation']),
  sent(1352, 'Je n’invente aucun chiffre : je prends ceux de la fiche.', 'I invent no figures: I take the ones in the fact sheet.', '/ʒə nɛ̃.vɑ̃t o.kœ̃ ʃifʁ ʒə pʁɑ̃ sø də la fiʃ/', 'zhuh nehⁿ-VAHⁿT oh-kuhⁿ SHEEFR | zhuh PRAHⁿ | seu duh la FEESH', ['mission', 'chiffre']),
  sent(1353, 'La navette coûte cher pour le nombre de personnes transportées.', 'The shuttle is expensive for the number of people carried.', '/la na.vɛt kut ʃɛʁ puʁ lə nɔ̃bʁ də pɛʁ.sɔn tʁɑ̃s.pɔʁ.te/', 'la na-VET | koot SHEHR | poor luh NOHⁿBR | duh pehr-SONN trahⁿs-por-TAY', ['mission', 'constat']),
  sent(1354, 'Nous préconisons de garder la navette du soir et de supprimer celle du midi.', 'We recommend keeping the evening shuttle and removing the midday one.', '/nu pʁe.kɔ.ni.zɔ̃ də ɡaʁ.de la na.vɛt dy swaʁ e də sy.pʁi.me sɛl dy mi.di/', 'noo pray-ko-nee-ZOHⁿ | duh gar-DAY la na-VET dü SWAR | ay duh sü-pree-MAY | sel dü mee-DEE', ['mission', 'recommander']),
  sent(1355, 'Le détail des coûts figure en annexe.', 'The breakdown of costs is in the appendix.', '/lə de.taj de ku fi.ɡyʁ ɑ̃.na.nɛks/', 'luh day-TAÏ day KOO | fee-GÜR | ahⁿ-na-NEKS', ['mission', 'annexe'], FCVDR),
  sent(1356, 'Ce rapport s’adresse à la direction du site de Lyon.', 'This report is addressed to the management of the Lyon site.', '/sə ʁa.pɔʁ sa.dʁɛs a la di.ʁɛk.sjɔ̃ dy sit də ljɔ̃/', 'suh ra-POR | sa-DRESS | a la dee-rek-SYOHⁿ | dü SEET duh LYOHⁿ', ['mission', 'lecteur']),
  sent(1357, 'Quoi, pourquoi, quelles options, quoi faire : quatre questions.', 'What, why, which options, what to do: four questions.', '/kwa puʁ.kwa kɛl.zɔp.sjɔ̃ kwa fɛʁ katʁ kɛs.tjɔ̃/', 'KWA | poor-KWA | kel-zop-SYOHⁿ | kwa FEHR | katr kes-TYOHⁿ', ['mission', 'architecture']),
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
 *  One per act, about 230 to 330 words, each « texte original écrit pour la
 *  leçon ». They live here so the reading, the quiz and the task cannot
 *  drift apart. The canteen case runs from act 1 to act 11 and its figures
 *  never change: 240 employees on the Sherbrooke site; 110 meals a day last
 *  year, 70 now; a deficit of 38 000 $; about a quarter of the dishes
 *  thrown away; opening 11 h 30 to 13 h 30; the evening team starts at
 *  14 h since January; price up from 6,50 $ to 8,25 $; internal survey,
 *  150 respondents, six in ten find the hours unsuitable. Options: A close
 *  and pay a meal allowance; B hand over to a caterer; C keep it in house
 *  with online pre-ordering, a second sitting until 19 h and two dishes.
 *  The task (act 12) uses ANOTHER case, the Lyon shuttle, printed in the
 *  brief (`NAVETTE_FICHE`).
 * ══════════════════════════════════════════════════════════════════════════ */

/** Act 1: the learner's first draft, chronological. */
export const BROUILLON_TEXT =
  'Note à Martine Pelletier, directrice générale des Ateliers Corvelle. Premier jet, rédigé par toi. Le lundi 3 mars, j’ai rencontré le gérant de la cantine, Bruno Lachance, qui m’a fait visiter les cuisines. Il était assez découragé. Le mardi, j’ai consulté les relevés de caisse des deux dernières années, ce qui m’a pris presque toute la journée. Le mercredi, j’ai lancé un petit sondage auprès du personnel ; cent cinquante personnes ont répondu, ce qui est beaucoup. Le jeudi, j’ai mangé à la cantine à midi et j’ai trouvé le plat du jour plutôt bon, mais la salle était à moitié vide. J’ai aussi appris que les cuisiniers jettent beaucoup de nourriture, peut-être un quart des plats, je ne sais pas exactement. Le vendredi, j’ai parlé avec des collègues de l’équipe du soir : ils ne viennent plus, parce qu’ils commencent à quatorze heures et que la cantine ferme avant. D’après les relevés, on est passé de cent dix repas par jour l’an dernier à soixante-dix cette année, et le déficit atteint trente-huit mille dollars. Bruno pense que le menu unique décourage les jeunes. Moi, je pense que le prix de 8,25 $ est trop élevé, mais d’autres disent que non. Il y a plusieurs solutions possibles : fermer, prendre un traiteur, ou changer les horaires. En conclusion, il faudrait peut-être changer quelque chose, mais c’est à la direction de voir.';

/** Act 2: a model report from another department (the car park). */
export const STATIONNEMENT_TEXT =
  'Ateliers Corvelle, service des installations. Rapport sur le stationnement du site de Sherbrooke. Objet : l’occupation du stationnement du site de Sherbrooke. Le présent rapport a pour objet de proposer une nouvelle répartition des places. Contexte. Depuis l’ouverture du nouvel atelier de finition, en septembre, le site accueille quarante salariés de plus ; le stationnement, lui, compte toujours cent quatre-vingts places. La direction a demandé en janvier un état de la situation. Constat. Selon les relevés du gardien, le stationnement est complet chaque matin dès 7 h 40. Douze places réservées aux visiteurs restent vides en moyenne neuf jours sur dix. Une vingtaine de voitures se garent chaque jour dans la rue voisine, où le stationnement est limité à deux heures. Analyse. La pénurie ne tient pas au nombre total de places, mais à leur répartition : les places des visiteurs ont été calculées pour l’ancien bâtiment d’accueil, fermé l’an dernier. Les horaires décalés de l’équipe du soir aggravent la tension au moment de la relève, entre 13 h 30 et 14 h 30. Recommandations. Nous recommandons de réduire de douze à quatre les places réservées aux visiteurs, dès le mois d’avril. Il conviendrait en outre de réserver dix places au covoiturage. Un nouveau relevé sera présenté en juin. Annexes. Annexe 1 : relevés quotidiens d’occupation (janvier et février). Annexe 2 : plan du stationnement, répartition actuelle et répartition proposée.';

/** Act 3: the constat section of the canteen report. */
export const CONSTAT_TEXT =
  'Rapport sur la cantine du site de Sherbrooke. Deuxième partie : le constat. Trois sources ont été utilisées : le registre des caisses des deux dernières années, les relevés de production de la cuisine et une enquête interne menée du 5 au 12 mars auprès des 240 salariés du site, à laquelle 150 personnes ont répondu. Selon le registre des caisses, la cantine sert aujourd’hui soixante-dix repas par jour en moyenne, contre cent dix l’an dernier à la même période : la fréquentation a donc baissé de plus d’un tiers en un an. La baisse commence en janvier, au moment où les nouveaux horaires de travail entrent en vigueur. Le déficit de l’exercice atteint 38 000 $. D’après les relevés de production, environ un quart des plats préparés est jeté chaque jour, le menu étant le même pour tous et la quantité fixée à l’avance. Le prix du repas est passé de 6,50 $ à 8,25 $ en septembre. Il ressort de l’enquête que les équipes du soir ne mangent plus sur place : la cantine ferme à 13 h 30, alors que leur poste commence à 14 h. D’après l’enquête interne, six répondants sur dix jugent les horaires inadaptés ; un sur quatre cite le prix ; un sur cinq souhaiterait un second plat. On entend souvent dire, dans les ateliers, que le personnel boude la cantine. Le constat ne retient pas cette formule : elle juge au lieu de décrire, et aucune donnée ne permet d’affirmer que les salariés évitent la cantine par choix. Le détail des chiffres figure en annexe 1.';

/** Act 4: the analysis of causes. */
export const ANALYSE_TEXT =
  'Rapport sur la cantine du site de Sherbrooke. Troisième partie : l’analyse. La baisse de fréquentation est un symptôme ; il faut en chercher les causes et les classer. La cause principale tient aux nouveaux horaires de travail. Depuis janvier, une équipe d’environ soixante personnes commence à 14 h et termine à 22 h. Ces salariés arrivent après la fermeture de la cantine et repartent bien après son dernier service : pour eux, la cantine n’existe plus. Cette seule cause explique l’essentiel de la perte, puisque l’équipe du soir représentait plus d’un tiers des repas servis. La hausse des prix a joué comme facteur aggravant. Elle n’explique pas, à elle seule, la chute de janvier, puisque les prix ont augmenté dès septembre sans effet visible sur la fréquentation de l’automne. Elle pèse toutefois sur les salariés de jour, dont une partie apporte désormais son repas. Le menu unique n’explique pas tout, mais il pèse : un répondant sur cinq souhaiterait un second plat, et l’absence de choix oblige la cuisine à préparer une quantité fixe, ce qui explique en grande partie le gaspillage constaté. Enfin, le gérant n’a pas été consulté sur les nouveaux horaires ; la cantine n’a donc pas pu s’adapter à temps. Il ne s’agit pas d’une faute, mais d’un défaut de coordination entre services. En résumé, une cause principale, les horaires, et deux facteurs aggravants, le prix et le menu unique, auxquels s’ajoute un manque de coordination. Les options présentées dans la partie suivante sont évaluées au regard de ces causes.';

/** Act 5: the options compared. */
export const OPTIONS_TEXT =
  'Rapport sur la cantine du site de Sherbrooke. Quatrième partie : les options. Trois options ont été étudiées. Nous les avons comparées au regard de quatre critères : le coût pour l’entreprise, l’accès des deux équipes à un repas chaud, le gaspillage et le délai de mise en place. L’option A consiste à fermer la cantine et à verser à chaque salarié une indemnité de repas. Elle présente l’avantage d’être la moins coûteuse et la plus rapide à mettre en place. Elle a toutefois l’inconvénient de supprimer un lieu de pause apprécié, et elle ne garantit à personne un repas chaud sur place. L’option B consiste à confier la cantine à un traiteur extérieur. Au regard du coût, elle est intéressante, car le traiteur assume le risque. Elle est cependant écartée, faute de traiteur disponible le soir dans la région : elle laisserait l’équipe du soir sans solution, c’est-à-dire sans réponse à la cause principale. L’option C consiste à garder la cantine en régie, avec trois changements : une précommande en ligne la veille, un second service jusqu’à 19 h et deux plats au choix. Son coût est le plus élevé la première année, en raison du personnel supplémentaire du soir. Au regard du gaspillage, l’option C est la plus efficace, puisque les quantités suivent les commandes. Elle est aussi la seule à répondre à la cause principale. Aucune option n’est parfaite ; l’option C est la moins risquée, à condition d’en mesurer les effets. C’est l’option retenue. Le tableau comparatif complet figure en annexe 2.';

/** Act 6: the recommendations. */
export const RECOMMANDATIONS_TEXT =
  'Rapport sur la cantine du site de Sherbrooke. Cinquième partie : les recommandations. Au vu de l’analyse et de la comparaison des options, nous préconisons un essai de six mois de l’option C, d’avril à septembre. Première recommandation : nous recommandons de mettre en place la précommande en ligne dès le 1er avril. Il est recommandé que chaque salarié puisse commander la veille, jusqu’à 16 h, depuis son téléphone ou depuis la borne de l’entrée. La cuisine préparera ainsi des quantités ajustées. Deuxième recommandation : il est recommandé que la cantine soit ouverte jusqu’à 19 h, afin que l’équipe du soir puisse y prendre son repas pendant sa pause. Ce second service exige l’embauche d’un cuisinier à temps partiel ; le service des ressources humaines en est chargé. Troisième recommandation : il conviendrait de proposer deux plats au lieu d’un, dont un plat végétarien, sans augmenter les quantités totales. Quatrième recommandation : il y aurait lieu de revoir les prix à la baisse pour les salariés qui précommandent, à titre d’essai ; le service des finances en évaluera l’effet. Enfin, nous préconisons que l’essai fasse l’objet d’un bilan en juin, présenté au comité de direction par le gérant et par le service des installations, sur trois indicateurs : le nombre de repas servis, la part des plats jetés et le résultat financier. Un bilan sera présenté en juin pour décider de la suite. Si les résultats ne sont pas au rendez-vous, l’option A sera réexaminée.';

/** Act 7: the executive summary (sommaire de gestion). */
export const SOMMAIRE_TEXT =
  'Rapport sur la cantine du site de Sherbrooke. Sommaire de gestion. Problème. La cantine du site de Sherbrooke sert soixante-dix repas par jour, contre cent dix l’an dernier ; le déficit atteint 38 000 $ et environ un quart des plats est jeté. Cause. La cantine perd de l’argent parce que ses horaires ne suivent plus ceux des équipes : depuis janvier, l’équipe du soir commence à 14 h, après la fermeture. La hausse des prix et le menu unique aggravent la situation. Options. Trois options ont été comparées sur le coût, l’accès à un repas chaud, le gaspillage et le délai : fermer la cantine, la confier à un traiteur, ou la garder en la réorganisant. Recommandation. Nous recommandons un essai de six mois, avec un bilan en juin : précommande en ligne, second service jusqu’à 19 h, deux plats au choix. Décision attendue. La direction est invitée à valider l’essai et le budget d’un cuisinier à temps partiel avant le 20 mars. Note de Martine Pelletier, jointe au dossier. Merci pour cette nouvelle version. La première page me suffit pour décider, et c’est exactement ce que j’attendais : je sais ce qui ne va pas, pourquoi, et ce que vous me demandez. Le reste du rapport me servira si le conseil d’administration pose des questions. Une remarque : votre ancien titre, « sommaire exécutif », est un calque de l’anglais ; au Québec, l’Office recommande « sommaire de gestion », et en France on dirait plutôt « synthèse ».';

/** Act 8: the compte rendu of the canteen committee. */
export const CR_TEXT =
  'Ateliers Corvelle. Comité de la cantine. Compte rendu de la réunion du 18 mars. Présents : Bruno Lachance, gérant de la cantine ; Aïcha Benali, ressources humaines, en visioconférence depuis Lyon ; Nora Demers et Paul-Émile Roy, représentants du personnel ; Thomas Girard, secrétaire. Point 1. Les horaires. Bruno Lachance rappelle que la cantine ferme à 13 h 30 et que son équipe ne peut pas assurer un second service sans renfort. Aïcha Benali souligne que l’équipe du soir n’a pas été consultée lors du changement d’horaires et propose de l’associer à l’essai. Nora Demers estime qu’un service jusqu’à 19 h suffirait, la pause du soir ayant lieu entre 18 h et 19 h. Plusieurs membres s’inquiètent du coût d’un second service. Bruno Lachance conteste le chiffre de deux cuisiniers avancé dans une première estimation : selon lui, un cuisinier à temps partiel suffit. Point 2. La précommande. Le comité propose un essai de précommande dès avril. Paul-Émile Roy demande que la borne de l’entrée reste disponible pour les salariés sans téléphone. Personne ne s’oppose à la proposition. Point 3. Les prix. La question est reportée à la prochaine réunion, en attendant l’évaluation du service des finances. Décisions. Le comité recommande à la direction l’essai de six mois. Aïcha Benali prépare l’offre d’emploi du cuisinier à temps partiel pour le 25 mars. Thomas Girard diffuse le présent compte rendu aux membres avant la prochaine réunion. Prochaine réunion : le 15 avril, à 15 h. Le compte rendu sera soumis à l’approbation du comité au début de cette réunion.';

/** Act 9: an extract from the board's procès-verbal. */
export const PV_TEXT =
  'Ateliers Corvelle. Procès-verbal de la séance du conseil d’administration tenue le 26 mars, au siège social de Sherbrooke. Sont présents : Lucie Vasseur, présidente ; cinq administrateurs ; Martine Pelletier, directrice générale ; Thomas Girard, secrétaire de séance. 1. Ouverture de la séance. La présidente constate le quorum et ouvre la séance à 18 h. 2. Adoption de l’ordre du jour. L’ordre du jour est adopté tel que présenté. 3. Approbation du procès-verbal de la séance du 20 février. Le procès-verbal de la dernière séance est approuvé à l’unanimité, sans modification. 4. Cantine du site de Sherbrooke. La directrice générale présente le rapport sur la cantine et sa recommandation d’un essai de six mois. Un administrateur demande ce qui se passera si l’essai échoue ; la directrice générale répond que la fermeture sera alors réexaminée. Sur proposition d’Hélène Fortin, administratrice, appuyée par Marc Dubé, administrateur, il est résolu d’autoriser l’essai d’avril à septembre et d’en confier le suivi à la directrice générale. La résolution est adoptée à l’unanimité. 5. Questions diverses. Aucune. 6. Clôture de la séance. L’ordre du jour étant épuisé, la séance est levée à 19 h 10. Note du secrétaire, en marge du procès-verbal. Contrairement au compte rendu du comité, ce document ne rapporte pas toutes les opinions : il consigne les décisions officielles, point par point, en suivant l’ordre du jour. Il sera approuvé à la prochaine séance, signé par la présidente et par le secrétaire, puis conservé. Je l’ai intitulé « procès-verbal », et non « minutes », comme le recommande l’Office québécois de la langue française.';

/** Act 10: the record of decisions, rewritten. */
export const RELEVE_TEXT =
  'Courriel d’Aïcha Benali, du site de Lyon, à Thomas Girard. Objet : ton relevé de décisions. Bonjour Thomas, merci pour ton relevé. Je te propose quelques retouches avant diffusion, parce que plusieurs mots viennent tout droit de l’anglais. Ton titre, « Minutes de la rencontre », devient « Relevé de décisions de la réunion du 18 mars » : ce n’est ni un procès-verbal ni un compte rendu complet, puisque tu ne gardes que ce qui a été décidé. Tu écris « deadline : 30 avril » ; en français, on écrit date limite ou échéance. « Implémenter la précommande » : le verbe vient de l’informatique ; pour une mesure, écris « mettre en œuvre la précommande ». Tu écris aussi « prochain item » : en réunion comme à l’écrit, c’est le point suivant. Et « adresser la question du gaspillage » : on traite une question, on l’aborde, on s’y attaque ; on adresse une lettre ou une facture. Enfin, ton dernier point s’intitule « varia » : l’Office québécois le déconseille ; écris questions diverses. Voici la version corrigée. Relevé de décisions, réunion du 18 mars. Décision 1 : essai de précommande en ligne. Responsable : Bruno Lachance. Échéance : 15 avril. La mise en œuvre commence le 2 avril. Décision 2 : offre d’emploi d’un cuisinier à temps partiel. Responsable : Aïcha Benali. Échéance : 25 mars. Décision 3 : la question des prix est reportée ; le comité traitera la question du gaspillage en mai. Questions diverses : aucune. Un relevé de décisions ne garde que ce qui a été décidé : chaque décision a un responsable et une échéance, et rien d’autre. Bonne journée, Aïcha.';

/** Act 11: Martine's rereading notes. */
export const RELECTURE_TEXT =
  'Notes de relecture de Martine Pelletier sur la dernière version du rapport. Votre rapport est clair ; voici ce qu’il reste à revoir avant de l’envoyer au conseil. Premièrement, le ton. Dans le constat, vous écrivez que « le gérant a été dépassé par les événements ». C’est un jugement, et il est injuste : rien dans vos données ne le montre. Le fait vérifiable est que le gérant n’a pas été consulté sur les nouveaux horaires. Un mot chargé juge ; un mot neutre décrit. Deuxièmement, la voix. Dans un constat, « je pense » n’a pas sa place. Écrivez « il apparaît que », « les résultats suggèrent », ou, pour une recommandation, « nous recommandons » : le « nous » du rapport engage le service, pas une personne. Ne forcez pas non plus vos conclusions. Vous écrivez que les prix « n’ont joué aucun rôle » ; vos chiffres montrent seulement qu’ils ne sont pas la cause principale. Troisièmement, les chiffres. Le déficit vaut 38 000 $ page 2 et 36 000 $ dans la synthèse ; les chiffres du rapport doivent être les mêmes partout. Si un point n’est pas établi, dites-le : ce point reste à vérifier. Quatrièmement, les annexes. Votre annexe 3, le questionnaire, n’est citée nulle part. Chaque annexe est citée dans le texte, sinon personne ne l’ouvre. Enfin, le périmètre : précisez dès l’introduction que le présent rapport ne porte que sur le site de Sherbrooke ; le site de Lyon a sa propre cantine et ses propres chiffres. Une dernière lecture, à voix haute, vous dira si chaque phrase peut être lue par quelqu’un qui n’était pas là.';

/** Act 12: the model, the canteen report as sent (about 330 words). */
export const MODELE_TEXT =
  'Ateliers Corvelle. Rapport à la direction générale. Objet : l’avenir de la cantine du site de Sherbrooke. Synthèse. La cantine sert soixante-dix repas par jour, contre cent dix l’an dernier, et affiche un déficit de 38 000 $. La cause principale est un décalage d’horaires : l’équipe du soir commence après la fermeture. Nous recommandons un essai de six mois d’une cantine réorganisée, avec un bilan en juin. Contexte. Depuis janvier, une équipe d’environ soixante salariés travaille de 14 h à 22 h. La direction a demandé en février un état de la situation. Constat. Selon le registre des caisses, la fréquentation a baissé de plus d’un tiers en un an ; d’après les relevés de la cuisine, environ un quart des plats est jeté. Le prix du repas est passé de 6,50 $ à 8,25 $. Il ressort de l’enquête interne (150 répondants) que six salariés sur dix jugent les horaires inadaptés. Analyse. La cause principale tient aux horaires : la cantine ferme à 13 h 30, l’équipe du soir arrive à 14 h. Le prix et le menu unique jouent comme facteurs aggravants ; le menu unique explique aussi le gaspillage. Trois options ont été comparées sur le coût, l’accès à un repas chaud, le gaspillage et le délai. La fermeture (A) est la moins coûteuse mais supprime le service ; le traiteur (B) est écarté, faute d’offre le soir ; la réorganisation (C) coûte davantage la première année, mais elle est la seule à répondre à la cause principale. C’est l’option retenue. Recommandations. Nous préconisons de mettre en œuvre dès avril la précommande en ligne et deux plats au choix. Il est recommandé que la cantine soit ouverte jusqu’à 19 h, ce qui suppose l’embauche d’un cuisinier à temps partiel. Un bilan sera présenté en juin sur trois indicateurs : repas servis, plats jetés, résultat financier. Annexes. 1 : chiffres de fréquentation. 2 : tableau comparatif des options. 3 : questionnaire de l’enquête.';

/** The task brief's fact sheet: the Lyon shuttle. Every figure invented. */
export const NAVETTE_FICHE =
  'Fiche de faits, site de Lyon des Ateliers Corvelle (faits et chiffres inventés pour l’exercice). Le site compte 120 salariés. Depuis 2019, une navette privée relie la gare au site, trois fois par jour : départ de la gare à 7 h 15, aller-retour à 12 h 30, retour du site à 17 h 30. Elle compte 30 places. Coût annuel : 48 000 €, payés au transporteur. Fréquentation moyenne relevée par le chauffeur en février : 9 personnes le matin, 2 le midi, 24 le soir. Enquête interne de mars, 70 répondants : 41 viennent en voiture ; 18 disent qu’ils prendraient la navette si elle les déposait au site avant 6 h 30, l’heure où commence l’équipe du matin ; 12 trouvent la navette du soir indispensable. Une ligne de bus régulière passe à 400 mètres du site toutes les 20 minutes, de 7 h à 19 h. Le contrat avec le transporteur se renouvelle le 1er septembre ; il peut être modifié avec un préavis de trois mois. La direction du site attend une recommandation avant la fin du mois.';
