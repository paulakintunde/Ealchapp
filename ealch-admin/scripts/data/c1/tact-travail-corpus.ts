// c1.23.l1 « Le tact au travail » — the authored corpus, the imports, the
// anchor texts and the citation constants. DRAFT, to
// B1-WORKSHOP-AND-VOCAB-SHAPES.md §1 (the workshop shape) on top of
// B1-BUILD-PLAYBOOK.md, with the C1 rules of C1-BUILD-LOG.md (« What is
// different at C1 », decisions 1-40, the wave 2 notes, the wave 5 review
// lessons, the wave 6 brief). Structural models: b2.26
// (`../b2/reunions-negociation-*`) and the reviewed c1.11
// (`./rapports-comptes-rendus-*`), whose layout and helpers it copies.
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
//   TACT IN WRITING AND IN PRESENTING AT WORK (decision 1: past b2.26). The
//   learner refuses, announces bad news, says no upward, escalates, and
//   presents, keeping the message whole and choosing only the manner.
//
//     act 1   the problem: two drafts to a client, one that slaps and one
//             where the no disappears; ONE recap (B1 39, B2 26, C1 6, C1 9)
//     act 2   degrees of indirectness in WRITING: the dose tells the reader
//             whether he has a choice (je compte sur vous pour, merci de
//             bien vouloir, je vous serais reconnaissant·e de, serait-il
//             envisageable de, il serait souhaitable que + subjonctif)
//     act 3   the written refusal to a client: a no that is early, single,
//             motivated and followed by a next step (il ne nous est pas
//             possible de, nous ne sommes pas en mesure de, donner suite à);
//             no false hope
//     act 4   bad news: early, at the top, owned (nous avons sous-estimé vs
//             « des retards ont été constatés »), what it changes, what you
//             do; a client's voicemail heard once
//     act 5   saying no upward: make the boss arbitrate (je mesure, en
//             l’état, absorber, arbitrer entre, alerter)
//     act 6   relance and escalation: two relances, then faire remonter,
//             openly, facts dated, no culprit
//     act 7   when indirectness turns passive-aggressive: the barbed
//             formulas (comme indiqué dans mon précédent courriel, merci
//             d’avance pour votre réactivité) and their neutral rewrites
//     act 8   the contested office words: revenir vers vous, impacter,
//             initier, booker, un call, acter, escalader; who says what,
//             each verdict with its source (§A.7)
//     act 9   France and Québec: the same email, two readers; sourced
//             conventions only, no stereotype
//     act 10  presenting: the message title (titre-message), one idea per
//             slide, written and spoken signposting at work
//     act 11  the difficult question at work: the hostile, the loaded, the
//             off-topic and the confidential question
//     act 12  the task: a written refusal or bad-news message, 250 to 400
//             words, from facts given in the brief
//
//   NOT OWNED, CITED BY TRAIL POSITION ONLY (act 1 recaps, never re-teaches):
//     - « la leçon 39 du B1 »: the parts of an email, its formulas, and its
//       refusal shape « Refuser, c’est remercier, dire non, donner une raison
//       et proposer autre chose » (row reused); apologising (reconnaître,
//       expliquer, réparer).
//     - « la leçon 26 du B2 »: chairing, the floor, reformulating, softening
//       a disagreement, the conditional offer, closing; its meeting calques
//       (prochain item, adresser, céduler, vous revenir) and its France
//       « revenir vers quelqu’un » row, which act 8 revisits WITH SOURCES.
//     - « la leçon 6 du C1 »: politeness and distance in SPEECH, the dose,
//       je vous saurais gré de, sans vouloir, the hedged criticism. Its rows
//       are reused; nothing it teaches is re-taught.
//     - « la leçon 9 du C1 »: the exposé before a jury, signposting aloud,
//       reformulating a question, buying time, conceding. Acts 10 and 11 go
//       past it (slides, the workplace's hostile question), never re-teach.
//     - « la leçon 11 du C1 » (wave 4, same release): reports and minutes.
//       Cited by planned position (not yet in the seed), never reused.
//     - « la leçon 7 du C1 »: « suite à » and the contested connectors.
//
// ══════════════════════════════════════════════════════════════════════════
//  §A. MEASURED (Postgres read 2026-10-07 inside BEGIN TRANSACTION READ
//      ONLY … COMMIT, no SET; the local seed is a cut)
// ══════════════════════════════════════════════════════════════════════════
//
//  1. THEME `francais-professionnel-avance` (« Le français professionnel
//     avancé », travail, c1-c2), sub_themes read back as ["le rapport et le
//     compte rendu", "le tact au travail"] (wave 6 setup). Block 1000-1199
//     read at 0 rows at every level on 2026-10-07. The 165 legacy rows
//     (.001-.165) are all published, all kind sentence, all drills
//     {sentence, review}; 64 064 published rows in all.
//
//  2. ID BLOCK: this lesson owns `fr.c1.francais-professionnel-avance.1000`
//     to `.1199` AND NOTHING ELSE (c1.11 owns 1200-1399). Used: .1000-.1156,
//     155 rows; .1064 and .1110 left unused (the twin check found them
//     published as fr.b1.affaires.087 « la charge de travail » and
//     fr.b1.affaires.1161 « meilleures salutations », now reused instead).
//
//  3. REUSED ROWS (§F). Seed rows print through `src()`. Published-but-not-
//     in-the-seed rows ride in `DB_ONLY_ROWS`, fr / en / drills copied
//     verbatim from Postgres on 2026-10-07 (their straight apostrophes and
//     unspaced « ? » are left as published: decision 13's typography script
//     computes every Postgres-only reused row and fixes them at the import).
//     LEGACY c1 ROWS OF THIS THEME, all read one by one (§A.3 list in the
//     report). Reused NAMED ONLY ({sentence, review}, never released, never
//     spoken, never in the scenario): .010, .033, .051, .116, .118, .126,
//     .129, .151; plus the B1 bank row fr.b1.affaires.087 (Postgres only,
//     {voiceflash, review}). READ AND NOT REUSED: .024 « au cas où les tests dérapent »
//     (needs the conditionnel « déraperaient »); .004 and .107 « je reviens
//     vers vous » (rejected by c1.11's reviewer; act 8 treats the phrase
//     with its sources instead); .081 « qu’on acte ce point » (rejected;
//     act 8 cites the verdict); .064 « Commençons d’abord » (pleonasm); .108
//     (rejected by c1.11's reviewer); .030 and .134 (« franchement » as a
//     blunt marker, too close to c1.06); .140, .155, .156, .160, .163 (owned
//     by c1.06 and c1.04).
//
//  4. NO AUTHORED ROW TWINS A PUBLISHED ROW: every `fr` folded (fold() of
//     answer.logic) and compared with all 64 064 published Postgres rows and
//     with every drafted C1 corpus on disk (scratch check, 2026-10-07).
//     Result in the report.
//
//  5. RESPELLINGS SPELLED FOR THE NASAL CHECKER RATHER THAN THE EAR. A real
//     /n/ or /m/ closing a syllable is written double: semaine suh-MENN,
//     personne pehr-SONN, comme KOMM, même MEMM, une ÜNN, demande
//     duh-MAHⁿD (nasal), prochaine pro-SHENN, chaque SHAKK (no change),
//     aucune oh-KÜNN, domaine, problème pro-BLEMM, système see-STEMM,
//     programme, donne DONN, téléphone tay-lay-FONN. Every doubled consonant
//     is really pronounced. No U+203F tie.
//
//  6. THE ANCHOR TEXTS IN §I ARE ORIGINAL, WRITTEN FOR THE LESSON (« texte
//     original écrit pour la leçon »). Every person, company and figure is
//     INVENTED: Ardisque (an event-ticketing software firm, 85 employees,
//     head office in Québec City, a development team of twelve in Nantes);
//     the salle Morencie (a concert hall in Trois-Rivières, client);
//     Transvia Paiements (a payment provider); Isabelle Thériault, Olivier
//     Lapointe, Karim Haddad, Léa Rousseau, Marc-André Dion, Julie Lavoie,
//     Stéphane Morin. The task's case (the théâtre des Glaces, Rimouski) is
//     another invented client. Real places appear only as places (Québec,
//     Nantes, Trois-Rivières, Rimouski).
//
//  7. FACT CHECK LIST (for the pre-review). Every claim about the real world
//     and every norm verdict made anywhere in this lesson, with its source,
//     read on 2026-10-07. Académie pages are « Dire, ne pas dire » at
//     academie-francaise.fr/<slug>; OQLF pages are on
//     vitrinelinguistique.oqlf.gouv.qc.ca.
//
//     a. « JE REVIENS VERS VOUS ». Académie, DNP « Je reviens vers vous »
//        (academie-francaise.fr/je-reviens-vers-vous): « est incorrecte. Il
//        s’agit d’un anglicisme, traduction hasardeuse de I’ll get back to
//        you, devenu tic de langage, qu’il convient d’éviter » ; proposes « Je
//        reprends contact avec vous », « Je reprends notre échange, votre
//        dossier ». OQLF: no BDL article found (not in the BDL anglicism
//        index, 2026-10-07). Larousse: no sense quoted. « Très répandu dans
//        les bureaux en France » is a USAGE statement (GK), already made by
//        b2.26 (row fr.b2.affaires.1307, « Très courant en France au
//        travail »); the lesson keeps it as usage and adds the Académie's
//        verdict, never calls it a grammar error.
//     b. IMPACTER. Académie DNP « Impacter »: « C’est à tort qu’on a, en
//        s’inspirant de l’anglais, créé la forme verbale Impacter » ; on dit
//        « affecte, a des conséquences sur, touche ». OQLF BDL « L’emprunt
//        déconseillé impacter » (/23313/…): « En ce sens, impacter est
//        déconseillé en français » ; replacements include « avoir une
//        incidence sur », « se répercuter sur », « toucher » ; accepted only
//        in medicine. Larousse (impacter/10910409): « Familier. Avoir un
//        impact, une incidence, généralement négatifs, sur ». Usito: « parfois
//        critiqué comme synonyme non standard de avoir des conséquences ».
//     c. INITIER (= commencer). Académie DNP « Initier »: « on évitera
//        d’ajouter le sens de « prendre l’initiative de », qui s’est développé
//        récemment sous l’influence de l’anglais to initiate » ; proposes
//        « lancer, être à l’origine de, prendre l’initiative de ». OQLF BDL
//        « Emploi déconseillé de l’emprunt initier » (/21521/…): « est un
//        emprunt déconseillé à l’anglais » ; « Les parties ont entamé les
//        négociations ». Larousse (initier/43148) sense 5, no label: « Faire
//        démarrer un processus, une réaction, avoir l’initiative d’un
//        projet ». Usito: « ANGLICISME CRITIQUÉ ». So the lesson says « le
//        Larousse l’admet » and never calls it an error.
//     d. BOOKER. OQLF BDL « L’emprunt déconseillé booker » (/24410/…):
//        « Cet emprunt est déconseillé » ; réserver, retenir, engager, prendre
//        rendez-vous. Larousse: no entry (2026-10-07). No Académie DNP page
//        found (academie-francaise.fr/booker: 404).
//     e. UN CALL. No BDL article (not in the anglicism index); Larousse: no
//        entry; no Académie page found. The lesson says only that, and offers
//        « un appel, une réunion téléphonique, une visioconférence »; « réunion
//        téléphonique » and « conférence téléphonique » are the OQLF's
//        replacements for « appel conférence » (BDL /22323/…).
//     f. ACTER. Académie DNP « Acter »: « appartient au vocabulaire
//        juridique et ses emplois doivent rester limités à ce domaine ».
//        OQLF BDL « Emploi déconseillé de l’emprunt acter » (/23603/…):
//        déconseillé for « jouer, agir », but « Le verbe acter signifie en
//        français « prendre acte de, noter ». C’est un terme technique
//        employé en administration et en droit ». The lesson presents the
//        two verdicts side by side.
//     g. ESCALADE / FAIRE ESCALADER. OQLF GDT « escalade » (8352540):
//        « Procédure formelle qui consiste à demander l’intervention de ses
//        supérieurs… » ; the term « s’inscrit dans la norme
//        sociolinguistique du français au Québec ». GDT « faire monter »
//        (26557539): privileged « faire monter », « faire escalader » ; « faire
//        escalader […] est acceptable ». Larousse « escalader » lists only
//        the climbing senses. No Académie page found.
//     h. PRIORISER (mentioned in the sheet only). OQLF BDL « Les emprunts
//        acceptés prioriser et priorisation » (/23800/…): « l’Office […] les
//        considère désormais comme acceptables ». Académie DNP « Prioriser »:
//        « un barbarisme […] qu’il convient de proscrire ».
//     i. TUTOIEMENT. OQLF BDL « Vouvoiement et tutoiement : contextes
//        d’emploi » (/25140/…, mise à jour 2015): « Dans certaines aires
//        francophones, au Québec notamment, dire tu dès la première rencontre
//        est beaucoup plus fréquent que dans d’autres, où le tutoiement
//        spontané peut être ressenti comme une familiarité déplacée » ; « il
//        est plus prudent d’utiliser le vous jusqu’au moment où la question
//        est abordée ». This is the ONLY France / Québec contrast in
//        behaviour the lesson states. No source was found for a difference
//        in DIRECTNESS; the lesson says so (act 9 text) and refuses the
//        stereotype.
//     j. SALUTATIONS. OQLF BDL « Formules de salutation : la lettre »
//        (/22101/…, 2022): amorces « en ordre croissant de déférence :
//        Recevez (ou : Agréez), Veuillez recevoir (ou : Veuillez agréer), Je
//        vous prie de recevoir (ou : Je vous prie d’agréer) » ; « Cordialement
//        […] signifie « avec (une chaleureuse) » » and sits with the
//        « salutations à caractère personnel ». BDL « La salutation dans le
//        courriel » (/24946/…, 2022): brief formulas « Meilleures salutations,
//        Salutations distinguées, […] Au plaisir de vous voir, Bonne
//        journée » ; long letter formulas acceptable in a first or official
//        exchange ; « Cordialement » under « Formulations à caractère plus
//        personnel ». The same pages say the 2022 BDL prevails over the
//        seventh edition of « Le français au bureau ». « Beaucoup de nos
//        collègues de Nantes l’emploient comme une formule neutre » is an
//        in-story observation by the invented company, not a general claim.
//     k. COURRIEL. OQLF GDT « courriel » (privileged term). France:
//        Commission générale de terminologie et de néologie, recommendation
//        published in the Journal officiel of 20 June 2003 (« courriel »).
//        « On entend aussi mail » is usage (b1.39 row fr.b1.correspondance.1043
//        « un mail »).
//     l. FORMULE D’APPEL. OQLF BDL « Formules d’appel dans les courriels »
//        (/24944/…): « Madame, », « Monsieur, » et « Bonjour, » sont les
//        formules le plus souvent employées » ; first name reserved for
//        familiar correspondents.
//     m. SLIDES. OQLF BDL « Conception du diaporama : mise en page des
//        diapositives » (/24623/…): a slide has « une section pour le titre,
//        en haut; une section pour le message, au centre; une section
//        toujours vide, en bas de page […] parce qu’elle n’est parfois pas
//        visible pour tout l’auditoire ». GDT « diapositive » (26543699) as the
//        French term for slide. « Titre-message » (an assertion as slide
//        title) is presented as a technique, GK, with no authority claimed.
//     n. MOODS: « il serait souhaitable que » + subjonctif; « j’ai besoin
//        que » + subjonctif (arbitriez); « au cas où » + conditionnel (« se
//        serait perdu »); « je ne doute pas que » + indicatif or subjonctif
//        (both found; the row is recognition only). Grevisse, GK.
//
//     QUOTATIONS: none from literature or the press. Every text is original.
//
//  8. APOSTROPHES: every authored French string uses the typographic ’. The
//     seed rows with a straight ' and every DB_ONLY_ROWS entry are NEVER
//     quoted inside the scenario (app check « mixedApostrophes »).
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
  id: 'c1.23',
  seq: 23,
  title: 'Tact at Work',
  sub: 'Le tact au travail',
  canDo: 'Can refuse, announce bad news, say no to a superior and escalate a problem in writing with tact and precision, choosing the degree of indirectness that fits the reader and the stakes without blurring the message; can recognise when politeness turns passive-aggressive; can weigh contested office usage by its sources and write for a reader in France or in Québec; can title slides by their message and handle a hostile question at work',
  prereqUnitIds: ['b1.39', 'b2.26', 'c1.06', 'c1.09'],
} as const;

export const LESSON_ID = 'c1.23.l1';
export const THEME = 'francais-professionnel-avance';
export const LEVEL = 'c1' as const;

/** ONE block, by the brief (wave 6). */
export const ID_RANGES = [[1000, 1199]] as const;

export const E = (n: number) => `fr.${LEVEL}.${THEME}.${String(n).padStart(3, '0')}`;

/* ══════════════════════════════════════════════════════════════════════════
 *  §C. HOW THIS LESSON NAMES ITS NEIGHBOURS
 *
 *  B1, B2 and the C1 units already live are in the seed with their `seq`.
 *  c1.11 is drafted in wave 4 and publishes with this lesson (v87): its
 *  planned position is used until it is a row in `content_units`.
 * ══════════════════════════════════════════════════════════════════════════ */

type SeedUnit = { id: string; seq: number | string };
const SEQ = new Map((seed.units as unknown as SeedUnit[]).map((u) => [u.id, Number(u.seq)]));
/** TODO(import): drop once c1.11 is a row in `content_units`. */
const C1_SEQ_FROM_PLAN: Record<string, number> = { 'c1.11': 11 };

export function refFr(unitId: string): string {
  const band = unitId.slice(0, 2);
  if (band === 'b1' || band === 'b2' || band === 'c1') {
    const n = SEQ.get(unitId) ?? C1_SEQ_FROM_PLAN[unitId];
    if (!n) throw new Error(`c1.23: ${unitId} is not in the seed`);
    return `la leçon ${n} du ${band.toUpperCase()}`;
  }
  return unitRef(unitId);
}

export const COURRIELS_UNIT = 'b1.39';
export const REUNION_UNIT = 'b2.26';
export const NUANCER_UNIT = 'c1.06';
export const EXPOSE_UNIT = 'c1.09';
export const RAPPORTS_UNIT = 'c1.11';
export const REFORMULER_UNIT = 'c1.07';

export const COURRIELS_REF = refFr(COURRIELS_UNIT);
export const REUNION_REF = refFr(REUNION_UNIT);
export const NUANCER_REF = refFr(NUANCER_UNIT);
export const EXPOSE_REF = refFr(EXPOSE_UNIT);
export const RAPPORTS_REF = refFr(RAPPORTS_UNIT);
export const REFORMULER_REF = refFr(REFORMULER_UNIT);

/* ══════════════════════════════════════════════════════════════════════════
 *  §D. THE QUOTATIONS, IMPORTED (never retyped)
 * ══════════════════════════════════════════════════════════════════════════ */

export { REFRAME as B139_REFRAME } from '../b1/courriels-lettres-corpus.ts';
export { REFRAME as B226_REFRAME } from '../b2/reunions-negociation-corpus.ts';
export { REFRAME as C106_REFRAME } from './nuancer-oral-corpus.ts';
export { REFRAME as C109_REFRAME } from './expose-jury-corpus.ts';

/* ══════════════════════════════════════════════════════════════════════════
 *  §E. THE REFRAME AND THE ONE METAPHOR
 *
 *  THE PARCEL DELIVERED INTACT. Every message in this lesson carries
 *  something hard: a no, a delay, a limit, a criticism, a problem passed
 *  upward. Tact is the packing: enough that the thing arrives without
 *  breaking the relationship, never so much that the reader opens layer
 *  after layer and finds nothing (act 2, act 7). The content never
 *  changes; only the packing is chosen.
 *
 *  It is NOT « the more indirect, the more polite » (act 2: over-indirect
 *  reads as optional, act 7: as passive-aggressive), nor « being direct is
 *  rude » (acts 3 and 4 put the no and the bad news at the top), nor any
 *  national rule (act 9).
 * ══════════════════════════════════════════════════════════════════════════ */

export const REFRAME = 'Le tact n’adoucit pas le message : il le livre intact.';
export const REFRAME_EN = 'Tact does not water the message down: it delivers it intact.';

export const REFRAME_REJECTED: readonly { text: string; why: string }[] = [
  {
    text: 'Plus c’est indirect, plus c’est poli.',
    why: 'Act 2 shows over-indirectness reads as optional (the reader thinks he may refuse) and act 7 shows it reads as passive-aggressive. Indirectness is a dose, not a virtue.',
  },
  {
    text: 'Être direct, c’est être impoli.',
    why: 'False where the lesson must hold: acts 3 and 4 put the no and the bad news in the first lines, on purpose. Directness about the content is the courtesy; tact is in the manner.',
  },
  {
    text: 'Au Québec, on est direct ; en France, on est indirect.',
    why: 'A stereotype, and act 9 refuses it: the lesson only states sourced conventions (formulas, terms) and says that individuals and companies vary more than countries.',
  },
  {
    text: 'Un bon refus se cache derrière de bonnes excuses.',
    why: 'Act 3: one true reason beats five excuses, and an excuse that can be answered reopens the negotiation.',
  },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §F. THE IMPORTS, BY ACT
 *
 *  Every id was read from Postgres on 2026-10-07 and, where present, from
 *  seedPlusPacks(); its French is in the trailing comment.
 * ══════════════════════════════════════════════════════════════════════════ */

export const IMPORTED = {
  act1: [
    'fr.b1.correspondance.1076',                  // Refuser, c'est remercier, dire non, donner une raison et proposer autre chose.  (lesson 39 in B1; flashcard only)
    'fr.b1.correspondance.1140',                  // Reconnaître, expliquer en une phrase, réparer.  (lesson 39 in B1; flashcard only)
    'fr.b2.affaires.1204',                        // Négocier, ce n’est pas dire oui ou non : c’est dire à quelles conditions.  (lesson 26 in B2; flashcard only)
    'fr.b2.affaires.1283',                        // Vous n’avez pas tort ; cela dit, le volume ne suffit pas.  (lesson 26 in B2)
    'fr.c1.nuances-et-registres.1008',            // Il faut mettre les formes, mais le message doit passer.  (lesson 6 in C1)
    'fr.c1.discours-dexamen.1291',                // Devant un jury, on vouvoie, on reformule, on répond, puis on vérifie.  (lesson 9 in C1; flashcard only)
  ],
  act2: [
    'fr.b1.correspondance.1172',                  // Pourriez-vous me répondre avant vendredi ?  (lesson 39 in B1)
    'fr.c1.nuances-et-registres.1073',            // Je vous saurais gré de bien vouloir me confirmer cette date.  (lesson 6 in C1)
  ],
  act3: [
    'fr.b2.affaires.1317',                        // Là, nous ne pouvons pas vous suivre.  (lesson 26 in B2)
  ],
  act4: [
    'fr.b1.correspondance.1137',                  // Je comprends votre mécontentement.  (lesson 39 in B1)
    'fr.c1.francais-professionnel-avance.051',    // Je préférerais annoncer un report aujourd'hui plutôt qu'une mauvaise surprise le jour de la livraison.  (legacy, Postgres only, named only)
  ],
  act5: [
    'fr.c1.francais-professionnel-avance.116',    // Ce montant dépasse mon mandat, je dois consulter ma direction avant de vous répondre.  (legacy, named only)
    'fr.b1.affaires.087',                         // la charge de travail  (B1 bank row, Postgres only; {voiceflash, review})
  ],
  act6: [
    'fr.c1.francais-professionnel-avance.010',    // Je note l'engagement et je vous relance jeudi matin.  (legacy, named only)
    'fr.c1.francais-professionnel-avance.033',    // Relancez-les poliment aujourd'hui, puis plus fermement s'il le faut jeudi.  (legacy, named only)
    'fr.c1.francais-professionnel-avance.129',    // Si nous n'arrivons pas à un terrain d'entente aujourd'hui, il faudra remonter le dossier au comité de direction.  (legacy, named only)
  ],
  act7: [
    'fr.c1.francais-professionnel-avance.151',    // C'est surtout le ton du courriel qui m'a paru un peu sec.  (legacy, named only)
    'fr.c1.francais-professionnel-avance.126',    // Le silence de votre équipe sur ce point m'inquiète un peu, je ne vous le cache pas.  (legacy, named only)
  ],
  act8: [
    'fr.b2.affaires.1307',                        // revenir vers quelqu’un  (lesson 26 in B2)
    'fr.b2.affaires.1310',                        // Je vous donne des nouvelles demain matin.  (lesson 26 in B2)
  ],
  act9: [
    'fr.b1.correspondance.1036',                  // Veuillez agréer, Madame, Monsieur, mes salutations distinguées.  (lesson 39 in B1)
    'fr.b1.correspondance.1102',                  // Dans l'attente de votre réponse, je vous prie d'agréer mes salutations distinguées.  (lesson 39 in B1)
    'fr.b1.affaires.1161',                        // meilleures salutations  (lesson 36 in B1)
  ],
  act10: [
    'fr.c1.discours-dexamen.1222',                // À l’oral, le jury ne peut pas revenir en arrière : dis-lui où tu vas.  (lesson 9 in C1; flashcard only)
    'fr.c1.discours-dexamen.1270',                // Pour ne pas dépasser mon temps, je passerai vite sur ce point.  (lesson 9 in C1)
  ],
  act11: [
    'fr.c1.discours-dexamen.1295',                // Permettez-moi d’y réfléchir un instant.  (lesson 9 in C1)
    'fr.c1.discours-dexamen.1300',                // Le dossier ne donne pas ce chiffre, et je préfère ne pas l’inventer.  (lesson 9 in C1)
    'fr.c1.francais-professionnel-avance.118',    // Sur la question des pénalités, laissez-moi vérifier ce que notre service juridique peut accepter.  (legacy, named only)
  ],
  act12: [] as string[],
};

export const IMPORT_IDS = [...new Set(Object.values(IMPORTED).flat())];

/** Published in Postgres, absent from the local seed cut: fr / en / drills
 *  copied verbatim on 2026-10-07, so `src()` can print them. */
export const DB_ONLY_ROWS: { id: string; fr: string; en: string; drills: string[] }[] = [
  { id: 'fr.b1.affaires.087', fr: 'la charge de travail', en: 'the workload', drills: ['voiceflash', 'review'] },
  { id: 'fr.c1.francais-professionnel-avance.010', fr: 'Je note l\'engagement et je vous relance jeudi matin.', en: 'I am noting the commitment and I will follow up with you Thursday morning.', drills: ['sentence', 'review'] },
  { id: 'fr.c1.francais-professionnel-avance.033', fr: 'Relancez-les poliment aujourd\'hui, puis plus fermement s\'il le faut jeudi.', en: 'Follow up with them politely today, then more firmly on Thursday if needed.', drills: ['sentence', 'review'] },
  { id: 'fr.c1.francais-professionnel-avance.051', fr: 'Je préférerais annoncer un report aujourd\'hui plutôt qu\'une mauvaise surprise le jour de la livraison.', en: 'I would rather announce a postponement today than a bad surprise on delivery day.', drills: ['sentence', 'review'] },
  { id: 'fr.c1.francais-professionnel-avance.116', fr: 'Ce montant dépasse mon mandat, je dois consulter ma direction avant de vous répondre.', en: 'That amount exceeds my mandate, I have to consult my leadership before I answer you.', drills: ['sentence', 'review'] },
  { id: 'fr.c1.francais-professionnel-avance.118', fr: 'Sur la question des pénalités, laissez-moi vérifier ce que notre service juridique peut accepter.', en: 'On the question of penalties, let me check what our legal department can accept.', drills: ['sentence', 'review'] },
  { id: 'fr.c1.francais-professionnel-avance.126', fr: 'Le silence de votre équipe sur ce point m\'inquiète un peu, je ne vous le cache pas.', en: 'Your team\'s silence on this point worries me a little, I will not hide it from you.', drills: ['sentence', 'review'] },
  { id: 'fr.c1.francais-professionnel-avance.129', fr: 'Si nous n\'arrivons pas à un terrain d\'entente aujourd\'hui, il faudra remonter le dossier au comité de direction.', en: 'If we cannot find common ground today, the file will have to go up to the executive committee.', drills: ['sentence', 'review'] },
  { id: 'fr.c1.francais-professionnel-avance.151', fr: 'C\'est surtout le ton du courriel qui m\'a paru un peu sec.', en: 'It was mainly the tone of the email that struck me as a bit curt.', drills: ['sentence', 'review'] },
];

/** No `flashcard` drill: nameable, never releasable. */
export const NOT_DECK_ABLE = DB_ONLY_ROWS.map((r) => r.id);   // legacy {sentence, review}; .087 {voiceflash, review}

/** No `voiceflash`: never in a `practice` speak section. */
export const NOT_SPEAKABLE = [
  ...NOT_DECK_ABLE,
  'fr.b1.correspondance.1076',                   // flashcard only (a rule card)
  'fr.b1.correspondance.1140',                   // flashcard only (a rule card)
  'fr.b2.affaires.1204',                         // flashcard only (a rule card)
  'fr.c1.discours-dexamen.1291',                 // flashcard only (a rule card)
  'fr.c1.discours-dexamen.1222',                 // flashcard only (a rule card)
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §G. THE AUTHORED ROWS, ONE BLOCK PER ACT
 *
 *  A WORKSHOP CORPUS HOLDS PHRASES THAT DO A JOB: the headwords Postgres
 *  lacks, sentences that show one move each, and one flashcard-only rule
 *  card per act (`rule()`). Rows that show the PROBLEM (the slap, the fog,
 *  the dodge, the barb) are RECOGNITION rows (`REC`): flashcard and review
 *  only, never spoken, never dictated. No contested office word (impacter,
 *  booker, un call…) is ever a row: they live only in sections, quoted.
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
  tags, drills, version: 1, grammarPoints: ['tact-travail'], ...extra,
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

/* ── ACT 1 · LE NON QUI BLESSE ──────────────────────────────────────────── */

export const ACT1_ROWS: Row[] = [
  sent(1000, 'Votre demande ne fait pas partie du contrat, donc c’est non.', 'Your request is not part of the contract, so the answer is no.', '/vɔtʁ də.mɑ̃d nə fɛ pa paʁ.ti dy kɔ̃.tʁa dɔ̃k sɛ nɔ̃/', 'votr duh-MAHⁿD | nuh feh pa par-TEE dü kohⁿ-TRA | dohⁿk seh NOHⁿ', ['sec'], REC),
  sent(1001, 'Nous ne sommes pas en mesure d’ajouter cette fonction sans frais, et je vous explique pourquoi.', 'We are not able to add this feature free of charge, and I will explain why.', '/nu nə sɔm pa.zɑ̃ mə.zyʁ da.ʒu.te sɛt fɔ̃k.sjɔ̃ sɑ̃ fʁɛ e ʒə vu.zɛk.splik puʁ.kwa/', 'noo nuh somm pa-zahⁿ muh-ZÜR | da-zhoo-TAY set fohⁿk-SYOHⁿ sahⁿ FREH | ay zhuh voo-zek-SPLEEK poor-KWA', ['refus', 'clair']),
  sent(1002, REFRAME, REFRAME_EN, '/lə takt na.du.si pa lə me.saʒ il lə livʁ ɛ̃.takt/', 'luh TAKT | na-doo-SEE pa luh may-SAZH | eel luh LEEVR ehⁿ-TAKT', ['regle', 'tact'], FC,
    rule('Ton premier brouillon dit non comme une gifle ; le second est si doux que le client croit à un oui. Que faire ?', 'Garder le message entier et ne travailler que la manière : un non clair, une raison, une suite.')),
  sent(1003, 'Il ne serait peut-être pas impossible d’envisager éventuellement quelque chose.', 'It might perhaps not be impossible to possibly consider something.', '/il nə sə.ʁɛ pø.tɛtʁ pa.zɛ̃.pɔ.sibl dɑ̃.vi.za.ʒe e.vɑ̃.tɥɛl.mɑ̃ kɛl.kə ʃoz/', 'eel nuh suh-REH peu-TETR | pa-zehⁿ-po-SEEBL | dahⁿ-vee-za-ZHAY ay-vahⁿ-twel-MAHⁿ kel-kuh SHOZ', ['flou'], REC),
  sent(1004, 'Un refus clair n’a pas besoin d’être sec.', 'A clear refusal does not need to be curt.', '/œ̃ ʁə.fy klɛʁ na pa bə.zwɛ̃ dɛtʁ sɛk/', 'uhⁿ ruh-FÜ KLEHR | na pa buh-zwehⁿ detr SEK', ['refus', 'tact'], FCVDR),
  sent(1005, 'Qui va lire ce message, et dans quel état d’esprit ?', 'Who is going to read this message, and in what frame of mind?', '/ki va liʁ sə me.saʒ e dɑ̃ kɛl e.ta dɛs.pʁi/', 'kee va LEER suh may-SAZH | ay dahⁿ kel ay-ta des-PREE', ['lecteur']),
  sent(1006, 'Un client mécontent relit chaque mot.', 'An unhappy client rereads every word.', '/œ̃ kli.jɑ̃ me.kɔ̃.tɑ̃ ʁə.li ʃak mo/', 'uhⁿ klee-YAHⁿ may-kohⁿ-TAHⁿ | ruh-LEE shak MOH', ['lecteur']),
  sent(1007, 'Un courriel ne transmet ni le ton ni le sourire.', 'An email conveys neither the tone nor the smile.', '/œ̃ ku.ʁjɛl nə tʁɑ̃s.mɛ ni lə tɔ̃ ni lə su.ʁiʁ/', 'uhⁿ koo-RYEL | nuh trahⁿs-MEH | nee luh TOHⁿ | nee luh soo-REER', ['ecrit'], FCVDR),
  sent(1008, 'À l’écrit, personne ne peut te demander ce que tu voulais dire.', 'In writing, nobody can ask you what you meant.', '/a le.kʁi pɛʁ.sɔn nə pø tə də.mɑ̃.de sə kə ty vu.lɛ diʁ/', 'a lay-KREE | pehr-SONN nuh PEU | tuh duh-mahⁿ-DAY | suh kuh tü voo-leh DEER', ['ecrit']),
  sent(1009, 'Je relis mon message avec les yeux du destinataire.', 'I reread my message through the recipient’s eyes.', '/ʒə ʁə.li mɔ̃ me.saʒ a.vɛk le.zjø dy dɛs.ti.na.tɛʁ/', 'zhuh ruh-LEE mohⁿ may-SAZH | a-vek lay-ZYEU | dü des-tee-na-TEHR', ['lecteur', 'relire']),
  sent(1010, 'Le fond ne bouge pas ; seule la forme se travaille.', 'The substance does not move; only the form is worked on.', '/lə fɔ̃ nə buʒ pa sœl la fɔʁm sə tʁa.vaj/', 'luh FOHⁿ nuh BOOZH pa | sul la FORM suh tra-VAÏ', ['tact']),
  sent(1011, 'Je ne réponds jamais à chaud à un courriel qui m’agace.', 'I never reply in the heat of the moment to an email that annoys me.', '/ʒə nə ʁe.pɔ̃ ʒa.mɛ a ʃo a œ̃ ku.ʁjɛl ki ma.gas/', 'zhuh nuh ray-POHⁿ zha-MEH a SHOH | a uhⁿ koo-RYEL kee ma-GASS', ['ecrit', 'relire']),
];

/* ── ACT 2 · LES DEGRÉS DE L’INDIRECT ───────────────────────────────────── */

export const ACT2_ROWS: Row[] = [
  sent(1012, 'Envoyez-moi les résultats des tests vendredi.', 'Send me the test results on Friday.', '/ɑ̃.vwa.je mwa le ʁe.zyl.ta de tɛst vɑ̃.dʁə.di/', 'ahⁿ-vwa-yay-MWA | lay ray-zül-TA day TEST | vahⁿ-druh-DEE', ['direct', 'echelle']),
  sent(1013, 'Je compte sur vous pour m’envoyer les résultats vendredi.', 'I am counting on you to send me the results on Friday.', '/ʒə kɔ̃t syʁ vu puʁ mɑ̃.vwa.je le ʁe.zyl.ta vɑ̃.dʁə.di/', 'zhuh KOHⁿT sür VOO | poor mahⁿ-vwa-YAY lay ray-zül-TA | vahⁿ-druh-DEE', ['ferme', 'echelle']),
  sent(1014, 'Merci de bien vouloir m’envoyer les résultats avant vendredi midi.', 'Please kindly send me the results before Friday noon.', '/mɛʁ.si də bjɛ̃ vu.lwaʁ mɑ̃.vwa.je le ʁe.zyl.ta a.vɑ̃ vɑ̃.dʁə.di mi.di/', 'mehr-SEE duh byehⁿ voo-LWAR | mahⁿ-vwa-YAY lay ray-zül-TA | a-vahⁿ vahⁿ-druh-dee mee-DEE', ['consigne', 'echelle']),
  sent(1015, 'Je vous serais reconnaissante de m’envoyer les résultats d’ici vendredi.', 'I would be grateful if you could send me the results by Friday.', '/ʒə vu sə.ʁɛ ʁə.kɔ.nɛ.sɑ̃t də mɑ̃.vwa.je le ʁe.zyl.ta di.si vɑ̃.dʁə.di/', 'zhuh voo suh-REH ruh-ko-neh-SAHⁿT | duh mahⁿ-vwa-YAY lay ray-zül-TA | dee-see vahⁿ-druh-DEE', ['faveur', 'echelle']),
  sent(1016, 'Serait-il envisageable de recevoir les résultats d’ici vendredi ?', 'Would it be conceivable to receive the results by Friday?', '/sə.ʁɛ.til ɑ̃.vi.za.ʒabl də ʁə.sə.vwaʁ le ʁe.zyl.ta di.si vɑ̃.dʁə.di/', 'suh-reh-TEEL ahⁿ-vee-za-ZHABL | duh ruh-suh-VWAR lay ray-zül-TA | dee-see vahⁿ-druh-DEE', ['faveur', 'echelle']),
  sent(1017, 'Il serait souhaitable que les résultats nous parviennent avant vendredi.', 'It would be desirable for the results to reach us before Friday.', '/il sə.ʁɛ swɛ.tabl kə le ʁe.zyl.ta nu paʁ.vjɛn a.vɑ̃ vɑ̃.dʁə.di/', 'eel suh-REH sweh-TABL | kuh lay ray-zül-TA | noo par-VYENN | a-vahⁿ vahⁿ-druh-DEE', ['subjonctif', 'echelle']),
  sent(1018, 'Plus la phrase est indirecte, plus le lecteur se croit libre de refuser.', 'The more indirect the sentence, the more free the reader thinks he is to refuse.', '/ply la fʁaz ɛ.tɛ̃.di.ʁɛkt ply lə lɛk.tœʁ sə kʁwa libʁ də ʁə.fy.ze/', 'plü la FRAHZ | eh-tehⁿ-dee-REKT | plü luh lek-TUR | suh KRWA LEEBR | duh ruh-fü-ZAY', ['echelle', 'choix'], FCVDR),
  sent(1019, 'Le degré d’indirect dit au lecteur s’il a le choix.', 'The degree of indirectness tells the reader whether he has a choice.', '/lə də.ɡʁe dɛ̃.di.ʁɛkt di o lɛk.tœʁ sil a lə ʃwa/', 'luh duh-GRAY dehⁿ-dee-REKT | dee oh lek-TUR | seel a luh SHWA', ['regle', 'echelle'], FC,
    rule('Tu demandes à Karim des résultats indispensables, avec « Serait-il éventuellement envisageable… ». Il ne les envoie pas. Pourquoi ?', 'Ta phrase lui laissait le choix. Pour une obligation, une forme ferme et polie ; pour une faveur, une forme qui laisse vraiment le choix.')),
  sent(1020, 'Si c’est obligatoire, je le dis ; si c’est une faveur, je laisse le choix.', 'If it is compulsory, I say so; if it is a favour, I leave the choice.', '/si sɛ.tɔ.bli.ɡa.twaʁ ʒə lə di si sɛ.ty.nə fa.vœʁ ʒə lɛs lə ʃwa/', 'see seh-to-blee-ga-TWAR | zhuh luh DEE | see seh-tünn fa-VUR | zhuh LESS luh SHWA', ['choix']),
  sent(1021, 'Je me permets de vous demander un dernier effort sur ce dossier.', 'I take the liberty of asking you for one last effort on this file.', '/ʒə mə pɛʁ.mɛ də vu də.mɑ̃.de œ̃ dɛʁ.nje.ʁe.fɔʁ syʁ sə dɔ.sje/', 'zhuh muh pehr-MEH | duh voo duh-mahⁿ-DAY | uhⁿ dehr-nyay-ray-FOR | sür suh do-SYAY', ['faveur']),
  sent(1022, 'Serait-il éventuellement possible, si cela ne vous dérange pas trop, d’envisager peut-être un envoi ?', 'Would it possibly be possible, if it does not bother you too much, to perhaps consider sending it?', '/sə.ʁɛ.til e.vɑ̃.tɥɛl.mɑ̃ pɔ.sibl si sə.la nə vu de.ʁɑ̃ʒ pa tʁo dɑ̃.vi.za.ʒe pø.tɛtʁ œ̃.nɑ̃.vwa/', 'suh-reh-TEEL ay-vahⁿ-twel-MAHⁿ po-SEEBL | see suh-LA nuh voo day-RAHⁿZH pa TROH | dahⁿ-vee-za-ZHAY peu-TETR uhⁿ-nahⁿ-VWA', ['flou', 'echelle'], REC),
  sent(1023, 'La date de vendredi est ferme : sans les résultats, nous ne pourrons pas livrer.', 'The Friday date is firm: without the results, we will not be able to deliver.', '/la dat də vɑ̃.dʁə.di ɛ fɛʁm sɑ̃ le ʁe.zyl.ta nu nə pu.ʁɔ̃ pa li.vʁe/', 'la DAT duh vahⁿ-druh-DEE eh FEHRM | sahⁿ lay ray-zül-TA | noo nuh poo-ROHⁿ pa lee-VRAY', ['ferme']),
];

/* ── ACT 3 · REFUSER PAR ÉCRIT ──────────────────────────────────────────── */

export const ACT3_ROWS: Row[] = [
  sent(1024, 'Nous avons étudié avec attention votre demande de plan de salle personnalisé.', 'We have carefully studied your request for a customised seating plan.', '/nu.za.vɔ̃ e.ty.dje a.vɛk a.tɑ̃.sjɔ̃ vɔtʁ də.mɑ̃d də plɑ̃ də sal pɛʁ.sɔ.na.li.ze/', 'noo-za-vohⁿ ay-tü-DYAY | a-vek a-tahⁿ-SYOHⁿ | votr duh-MAHⁿD | duh plahⁿ duh SAL pehr-so-na-lee-ZAY', ['refus', 'accueil']),
  sent(1025, 'Il ne nous est pas possible d’ajouter cette fonction dans le cadre du contrat actuel.', 'It is not possible for us to add this feature under the current contract.', '/il nə nu.zɛ pa pɔ.sibl da.ʒu.te sɛt fɔ̃k.sjɔ̃ dɑ̃ lə kadʁ dy kɔ̃.tʁa ak.tɥɛl/', 'eel nuh noo-zeh pa po-SEEBL | da-zhoo-TAY set fohⁿk-SYOHⁿ | dahⁿ luh KADR | dü kohⁿ-tra ak-TWEL', ['refus', 'clair'], FCVDR),
  sent(1026, 'Nous ne sommes pas en mesure de répondre favorablement à votre demande.', 'We are not in a position to respond favourably to your request.', '/nu nə sɔm pa.zɑ̃ mə.zyʁ də ʁe.pɔ̃dʁ fa.vɔ.ʁa.blə.mɑ̃ a vɔtʁ də.mɑ̃d/', 'noo nuh somm pa-zahⁿ muh-ZÜR | duh ray-POHⁿDR fa-vo-ra-bluh-MAHⁿ | a votr duh-MAHⁿD', ['refus', 'clair']),
  sent(1027, 'À notre grand regret, nous ne pourrons pas donner suite à cette demande.', 'To our great regret, we will not be able to act on this request.', '/a nɔtʁ ɡʁɑ̃ ʁə.ɡʁɛ nu nə pu.ʁɔ̃ pa dɔ.ne sɥit a sɛt də.mɑ̃d/', 'a notr grahⁿ ruh-GREH | noo nuh poo-ROHⁿ pa | do-nay SWEET | a set duh-MAHⁿD', ['refus']),
  sent(1028, 'Votre demande est légitime, et nous mesurons ce qu’elle représente pour votre équipe.', 'Your request is legitimate, and we appreciate what it means for your team.', '/vɔtʁ də.mɑ̃d ɛ le.ʒi.tim e nu mə.zy.ʁɔ̃ sə kɛl ʁə.pʁe.zɑ̃t puʁ vɔ.tʁe.kip/', 'votr duh-MAHⁿD eh lay-zhee-TEEMM | ay noo muh-zü-ROHⁿ | suh kel ruh-pray-ZAHⁿT | poor vo-tray-KEEP', ['accueil']),
  sent(1029, 'Cette fonction demanderait six semaines de développement que le budget ne couvre pas.', 'This feature would take six weeks of development that the budget does not cover.', '/sɛt fɔ̃k.sjɔ̃ də.mɑ̃.də.ʁɛ si sə.mɛn də de.vlɔp.mɑ̃ kə lə byd.ʒɛ nə kuvʁ pa/', 'set fohⁿk-SYOHⁿ | duh-mahⁿ-duh-REH see suh-MENN | duh day-vlop-MAHⁿ | kuh luh büd-ZHEH nuh KOOVR pa', ['raison']),
  sent(1030, 'En revanche, deux solutions s’offrent à vous.', 'On the other hand, two solutions are open to you.', '/ɑ̃ ʁə.vɑ̃ʃ dø so.ly.sjɔ̃ sɔfʁ a vu/', 'ahⁿ ruh-VAHⁿSH | deu so-lü-SYOHⁿ | SOFR a VOO', ['suite']),
  sent(1031, 'Ce plan de salle fera partie de la version standard du printemps.', 'This seating plan will be part of the standard spring release.', '/sə plɑ̃ də sal fə.ʁa paʁ.ti də la vɛʁ.sjɔ̃ stɑ̃.daʁ dy pʁɛ̃.tɑ̃/', 'suh plahⁿ duh SAL | fuh-ra par-TEE | duh la vehr-SYOHⁿ stahⁿ-DAR | dü prehⁿ-TAHⁿ', ['suite']),
  sent(1032, 'Une seule raison solide vaut mieux que cinq excuses.', 'One solid reason is worth more than five excuses.', '/yn sœl ʁɛ.zɔ̃ sɔ.lid vo mjø kə sɛ̃.kɛks.kyz/', 'ünn sul reh-ZOHⁿ so-LEED | voh MYEU | kuh sehⁿ-keks-KÜZ', ['raison'], FCVDR),
  sent(1033, 'Refuser une demande, ce n’est pas rejeter la personne.', 'Refusing a request is not rejecting the person.', '/ʁə.fy.ze yn də.mɑ̃d sə nɛ pa ʁəʒ.te la pɛʁ.sɔn/', 'ruh-fü-ZAY ünn duh-MAHⁿD | suh neh pa ruhzh-TAY la pehr-SONN', ['accueil', 'tact']),
  sent(1034, 'Un refus écrit dit non tôt, une seule fois, avec une raison vraie et une suite.', 'A written refusal says no early, only once, with a true reason and a next step.', '/œ̃ ʁə.fy e.kʁi di nɔ̃ to yn sœl fwa a.vɛk yn ʁɛ.zɔ̃ vʁɛ e yn sɥit/', 'uhⁿ ruh-FÜ ay-KREE | dee NOHⁿ TOH | ünn sul FWA | a-vek ünn reh-zohⁿ VREH | ay ünn SWEET', ['regle', 'refus'], FC,
    rule(`Tu as déjà écrit des refus (${COURRIELS_REF}). Qu’ajoute un refus à un client, au travail ?`, 'Le non arrive tôt et une seule fois, sans faux espoir ; une seule raison vraie, qu’on ne peut pas discuter ; une suite concrète.')),
  sent(1035, 'Pour l’instant, ce n’est malheureusement pas possible.', 'For the moment, it is unfortunately not possible.', '/puʁ lɛ̃s.tɑ̃ sə nɛ ma.lœ.ʁøz.mɑ̃ pa pɔ.sibl/', 'poor lehⁿs-TAHⁿ | suh neh ma-luh-reuz-MAHⁿ pa po-SEEBL', ['espoir'], REC),
  sent(1036, 'Je reste à votre disposition pour en parler de vive voix.', 'I remain available to discuss it in person.', '/ʒə ʁɛst a vɔtʁ dis.po.zi.sjɔ̃ puʁ ɑ̃ paʁ.le də viv vwa/', 'zhuh REST a votr dees-po-zee-SYOHⁿ | poor ahⁿ par-LAY | duh veev VWA', ['suite']),
];

/* ── ACT 4 · ANNONCER UNE MAUVAISE NOUVELLE ─────────────────────────────── */

export const ACT4_ROWS: Row[] = [
  sent(1037, 'Je dois vous informer d’un changement dans notre calendrier.', 'I must inform you of a change in our schedule.', '/ʒə dwa vu.zɛ̃.fɔʁ.me dœ̃ ʃɑ̃ʒ.mɑ̃ dɑ̃ nɔtʁ ka.lɑ̃.dʁi.je/', 'zhuh DWA voo-zehⁿ-for-MAY | duhⁿ shahⁿzh-MAHⁿ | dahⁿ notr ka-lahⁿ-dree-YAY', ['annonce']),
  sent(1038, 'La mise en service est reportée du 15 au 29 novembre.', 'Go-live is postponed from 15 to 29 November.', '/la mi.zɑ̃ sɛʁ.vis ɛ ʁə.pɔʁ.te dy kɛ̃z o vɛ̃t.nœf nɔ.vɑ̃bʁ/', 'la mee-zahⁿ sehr-VEESS | eh ruh-por-TAY | dü KEHⁿZ | oh vehⁿt-NUF no-VAHⁿBR', ['annonce', 'fait'], FCVDR),
  sent(1039, 'Contrairement à ce que nous vous avions annoncé, le module ne sera pas prêt à temps.', 'Contrary to what we had told you, the module will not be ready in time.', '/kɔ̃.tʁɛʁ.mɑ̃ a sə kə nu vu.za.vjɔ̃ a.nɔ̃.se lə mɔ.dyl nə sə.ʁa pa pʁɛ a tɑ̃/', 'kohⁿ-trehr-MAHⁿ a suh kuh | noo voo-za-vyohⁿ a-nohⁿ-SAY | luh mo-DÜL | nuh suh-ra pa PREH a TAHⁿ', ['annonce']),
  sent(1040, 'Nous avons sous-estimé le temps nécessaire aux tests.', 'We underestimated the time needed for testing.', '/nu.za.vɔ̃ su.zɛs.ti.me lə tɑ̃ ne.se.sɛʁ o tɛst/', 'noo-za-vohⁿ soo-zes-tee-MAY | luh TAHⁿ nay-say-SEHR oh TEST', ['assumer'], FCVDR),
  sent(1041, 'Des retards ont été constatés.', 'Delays have been observed.', '/de ʁə.taʁ ɔ̃.te.te kɔ̃s.ta.te/', 'day ruh-TAR | ohⁿ-tay-TAY kohⁿs-ta-TAY', ['esquive'], REC),
  sent(1042, 'Concrètement, votre billetterie actuelle restera en service deux semaines de plus.', 'In practical terms, your current ticketing system will stay in service two more weeks.', '/kɔ̃.kʁɛt.mɑ̃ vɔtʁ bi.jɛt.ʁi ak.tɥɛl ʁɛs.tə.ʁa ɑ̃ sɛʁ.vis dø sə.mɛn də plys/', 'kohⁿ-kret-MAHⁿ | votr bee-yet-REE ak-TWEL | res-tuh-RA ahⁿ sehr-VEESS | deu suh-MENN duh PLÜSS', ['impact']),
  sent(1043, 'Afin de limiter la gêne, nous prendrons en charge la formation de votre équipe.', 'To limit the inconvenience, we will cover the training of your team.', '/a.fɛ̃ də li.mi.te la ʒɛn nu pʁɑ̃.dʁɔ̃ ɑ̃ ʃaʁʒ la fɔʁ.ma.sjɔ̃ də vɔ.tʁe.kip/', 'a-FEHⁿ duh lee-mee-TAY la ZHENN | noo prahⁿ-DROHⁿ ahⁿ SHARZH | la for-ma-SYOHⁿ duh vo-tray-KEEP', ['plan']),
  sent(1044, 'Je vous ferai un point d’étape chaque vendredi jusqu’à la livraison.', 'I will give you a progress update every Friday until delivery.', '/ʒə vu fə.ʁe œ̃ pwɛ̃ de.tap ʃak vɑ̃.dʁə.di ʒys.ka la li.vʁɛ.zɔ̃/', 'zhuh voo fuh-RAY | uhⁿ pwehⁿ day-TAP | shak vahⁿ-druh-DEE | zhüs-ka la lee-vreh-ZOHⁿ', ['plan', 'engagement']),
  sent(1045, 'Une mauvaise nouvelle s’annonce tôt, en tête, assumée, avec ce qu’elle change et ce que tu fais.', 'Bad news is announced early, at the top, owned, with what it changes and what you are doing.', '/yn mo.vɛz nu.vɛl sa.nɔ̃s to ɑ̃ tɛt a.sy.me a.vɛk sə kɛl ʃɑ̃ʒ e sə kə ty fɛ/', 'ünn moh-vez noo-VEL | sa-NOHⁿSS TOH | ahⁿ TET | a-sü-MAY | a-vek suh kel SHAHⁿZH | ay suh kuh tü FEH', ['regle', 'annonce'], FC,
    rule('Tu dois annoncer un retard de deux semaines à un client. Où mets-tu la nouvelle, et que mets-tu autour ?', 'Dans les premières lignes, sans détour ; tu l’assumes, tu dis ce qu’elle change pour lui, puis ce que tu fais et quand tu reviens vers lui avec du neuf.')),
  // The client's voicemail, line by line (the hidden listening of act 4).
  sent(1046, 'Bonjour, c’est Marc-André Dion, de la salle Morencie.', 'Hello, this is Marc-André Dion, from the salle Morencie.', '/bɔ̃.ʒuʁ sɛ maʁk.ɑ̃.dʁe djɔ̃ də la sal mɔ.ʁɑ̃.si/', 'bohⁿ-ZHOOR | seh mark-ahⁿ-dray DYOHⁿ | duh la SAL mo-rahⁿ-SEE', ['ecoute']),
  sent(1047, 'J’ai bien reçu votre courriel de ce matin, merci de m’avoir prévenu aussi vite.', 'I did get your email this morning, thank you for letting me know so quickly.', '/ʒe bjɛ̃ ʁə.sy vɔtʁ ku.ʁjɛl də sə ma.tɛ̃ mɛʁ.si də ma.vwaʁ pʁe.və.ny o.si vit/', 'zhay byehⁿ ruh-SÜ | votr koo-RYEL duh suh ma-TEHⁿ | mehr-SEE duh ma-VWAR pray-vuh-NÜ | oh-see VEET', ['ecoute']),
  sent(1048, 'Je ne vous cache pas que la nouvelle tombe mal.', 'I will not hide from you that the news comes at a bad time.', '/ʒə nə vu kaʃ pa kə la nu.vɛl tɔ̃b mal/', 'zhuh nuh voo KASH pa | kuh la noo-VEL | tohⁿb MAL', ['ecoute']),
  sent(1049, 'La prévente de notre saison commence le 25 novembre.', 'The presale for our season starts on 25 November.', '/la pʁe.vɑ̃t də nɔtʁ sɛ.zɔ̃ kɔ.mɑ̃s lə vɛ̃t.sɛ̃k nɔ.vɑ̃bʁ/', 'la pray-VAHⁿT | duh notr seh-ZOHⁿ | ko-MAHⁿSS | luh vehⁿt-SEHⁿK no-VAHⁿBR', ['ecoute']),
  sent(1050, 'Avec votre nouvelle date, elle se fera donc sur l’ancien système.', 'With your new date, it will therefore run on the old system.', '/a.vɛk vɔtʁ nu.vɛl dat ɛl sə fə.ʁa dɔ̃k syʁ lɑ̃.sjɛ̃ sis.tɛm/', 'a-vek votr noo-vel DAT | el suh fuh-RA dohⁿk | sür lahⁿ-SYEHⁿ see-STEMM', ['ecoute']),
  sent(1051, 'Ce n’est pas idéal, mais nous pouvons faire avec, à une condition.', 'It is not ideal, but we can live with it, on one condition.', '/sə nɛ pa.zi.de.al mɛ nu pu.vɔ̃ fɛ.ʁa.vɛk a yn kɔ̃.di.sjɔ̃/', 'suh neh pa-zee-day-AL | meh noo poo-VOHⁿ feh-ra-VEK | a ünn kohⁿ-dee-SYOHⁿ', ['ecoute']),
  sent(1052, 'Il me faut une date ferme, par écrit, avant vendredi.', 'I need a firm date, in writing, before Friday.', '/il mə fo yn dat fɛʁm paʁ e.kʁi a.vɑ̃ vɑ̃.dʁə.di/', 'eel muh FOH | ünn dat FEHRM | par ay-KREE | a-vahⁿ vahⁿ-druh-DEE', ['ecoute', 'engagement']),
  sent(1053, 'Rappelez-moi quand vous pourrez, je suis au bureau tout l’après-midi.', 'Call me back when you can, I am in the office all afternoon.', '/ʁa.ple mwa kɑ̃ vu pu.ʁe ʒə sɥi.zo by.ʁo tu la.pʁɛ.mi.di/', 'ra-play-MWA | kahⁿ voo poo-RAY | zhuh swee-zoh bü-ROH | too la-preh-mee-DEE', ['ecoute']),
];

/* ── ACT 5 · DIRE NON À SA HIÉRARCHIE ───────────────────────────────────── */

export const ACT5_ROWS: Row[] = [
  sent(1054, 'Je mesure l’importance de ce salon pour Ardisque.', 'I appreciate how important this trade show is for Ardisque.', '/ʒə mə.zyʁ lɛ̃.pɔʁ.tɑ̃s də sə sa.lɔ̃ puʁ aʁ.disk/', 'zhuh muh-ZÜR | lehⁿ-por-TAHⁿSS | duh suh sa-LOHⁿ | poor ar-DEESK', ['reconnaitre']),
  sent(1055, 'En l’état, mon équipe ne peut pas absorber ce projet en plus du reste.', 'As things stand, my team cannot absorb this project on top of everything else.', '/ɑ̃ le.ta mɔ̃.ne.kip nə pø pa ab.sɔʁ.be sə pʁɔ.ʒɛ ɑ̃ ply dy ʁɛst/', 'ahⁿ lay-TA | mohⁿ-nay-KEEP nuh peu pa | ab-sor-BAY suh pro-ZHEH | ahⁿ plü dü REST', ['limite'], FCVDR),
  sent(1056, 'Si nous prenons la démonstration, la livraison de Morencie glisse encore d’une semaine.', 'If we take on the demo, the Morencie delivery slips by another week.', '/si nu pʁə.nɔ̃ la de.mɔ̃s.tʁa.sjɔ̃ la li.vʁɛ.zɔ̃ də mɔ.ʁɑ̃.si ɡli.sɑ̃.kɔʁ dyn sə.mɛn/', 'see noo pruh-NOHⁿ | la day-mohⁿs-tra-SYOHⁿ | la lee-vreh-ZOHⁿ duh mo-rahⁿ-SEE | glee-sahⁿ-KOR | dünn suh-MENN', ['cout']),
  sent(1057, 'J’ai besoin que vous arbitriez entre ces deux priorités.', 'I need you to decide between these two priorities.', '/ʒe bə.zwɛ̃ kə vu.zaʁ.bi.tʁi.je ɑ̃tʁ se dø pʁi.jɔ.ʁi.te/', 'zhay buh-ZWEHⁿ | kuh voo-zar-bee-tree-YAY | ahⁿtr say DEU pree-yo-ree-TAY', ['arbitrer', 'subjonctif'], FCVDR),
  sent(1058, 'Je vous propose deux options, avec ce que chacune coûte.', 'I am proposing two options, with what each one costs.', '/ʒə vu pʁɔ.poz dø.zɔp.sjɔ̃ a.vɛk sə kə ʃa.kyn kut/', 'zhuh voo pro-POZ | deu-zop-SYOHⁿ | a-vek suh kuh sha-KÜNN KOOT', ['options']),
  sent(1059, 'Laquelle de ces deux échéances compte le plus pour vous ?', 'Which of these two deadlines matters most to you?', '/la.kɛl də se dø.ze.ʃe.ɑ̃s kɔ̃t lə plys puʁ vu/', 'la-KEL duh say deu-zay-shay-AHⁿSS | kohⁿt luh PLÜSS poor VOO', ['arbitrer']),
  sent(1060, 'Non, on n’a pas le temps.', 'No, we do not have time.', '/nɔ̃ ɔ̃ na pa lə tɑ̃/', 'NOHⁿ | ohⁿ na pa luh TAHⁿ', ['sec'], REC),
  sent(1061, 'Oui, bien sûr, on s’en occupe.', 'Yes, of course, we will take care of it.', '/wi bjɛ̃ syʁ ɔ̃ sɑ̃.nɔ.kyp/', 'WEE | byehⁿ SÜR | ohⁿ sahⁿ-no-KÜP', ['oui-fragile'], REC),
  sent(1062, 'Dire non à sa hiérarchie, c’est lui donner de quoi choisir.', 'Saying no to your superiors means giving them what they need to choose.', '/diʁ nɔ̃ a sa jɛ.ʁaʁ.ʃi sɛ lɥi dɔ.ne də kwa ʃwa.ziʁ/', 'DEER NOHⁿ | a sa yeh-rar-SHEE | seh lwee do-NAY | duh KWA shwa-ZEER', ['regle', 'arbitrer'], FC,
    rule('Ta directrice te confie un projet urgent ; ton équipe est déjà pleine. Que réponds-tu ?', 'Ni un non sec ni un oui intenable : tu reconnais l’enjeu, tu chiffres ce que le projet coûte, tu proposes des options et tu lui demandes d’arbitrer.')),
  phrase(1063, 'arbitrer entre deux priorités', 'to decide between two priorities', '/aʁ.bi.tʁe ɑ̃tʁ dø pʁi.jɔ.ʁi.te/', 'ar-bee-TRAY | ahⁿtr deu pree-yo-ree-TAY', ['arbitrer']),
  sent(1065, 'Je préfère vous alerter maintenant plutôt que de manquer les deux dates.', 'I would rather alert you now than miss both dates.', '/ʒə pʁe.fɛʁ vu.za.lɛʁ.te mɛ̃t.nɑ̃ ply.to kə də mɑ̃.ke le dø dat/', 'zhuh pray-FEHR | voo-za-lehr-TAY mehⁿt-NAHⁿ | plü-TOH kuh duh mahⁿ-KAY | lay deu DAT', ['alerter']),
];

/* ── ACT 6 · RELANCER, PUIS FAIRE REMONTER ──────────────────────────────── */

export const ACT6_ROWS: Row[] = [
  sent(1066, 'Je me permets de vous relancer au sujet de ma demande du 3 octobre.', 'I am following up on my request of 3 October.', '/ʒə mə pɛʁ.mɛ də vu ʁə.lɑ̃.se o sy.ʒɛ də ma də.mɑ̃d dy tʁwa ɔk.tɔbʁ/', 'zhuh muh pehr-MEH | duh voo ruh-lahⁿ-SAY | oh sü-ZHEH | duh ma duh-MAHⁿD | dü trwa ok-TOBR', ['relance'], FCVDR),
  sent(1067, 'Faute de réponse d’ici jeudi, je devrai faire remonter le dossier.', 'Failing a reply by Thursday, I will have to escalate the matter.', '/fot də ʁe.pɔ̃s di.si ʒø.di ʒə də.vʁe fɛʁ ʁə.mɔ̃.te lə dɔ.sje/', 'foht duh ray-POHⁿSS | dee-see zheu-DEE | zhuh duh-VRAY | fehr ruh-mohⁿ-TAY luh do-SYAY', ['relance', 'remonter']),
  sent(1068, 'Je mets Stéphane Morin en copie, par souci de transparence.', 'I am copying in Stéphane Morin, for the sake of transparency.', '/ʒə mɛ ste.fan mɔ.ʁɛ̃ ɑ̃ kɔ.pi paʁ su.si də tʁɑ̃s.pa.ʁɑ̃s/', 'zhuh meh stay-FANN mo-REHⁿ | ahⁿ ko-PEE | par soo-SEE duh trahⁿs-pa-RAHⁿSS', ['copie', 'transparence']),
  sent(1069, 'Je souhaite porter à votre attention un blocage qui dure depuis trois semaines.', 'I wish to bring to your attention a blockage that has lasted three weeks.', '/ʒə swɛt pɔʁ.te a vɔ.tʁa.tɑ̃.sjɔ̃ œ̃ blɔ.kaʒ ki dyʁ də.pɥi tʁwa sə.mɛn/', 'zhuh SWET por-TAY | a vo-tra-tahⁿ-SYOHⁿ | uhⁿ blo-KAZH kee DÜR | duh-pwee trwa suh-MENN', ['remonter'], FCVDR),
  sent(1070, 'Voici les faits, dans l’ordre : trois demandes, deux relances, aucune réponse.', 'Here are the facts, in order: three requests, two follow-ups, no reply.', '/vwa.si le fɛ dɑ̃ lɔʁdʁ tʁwa də.mɑ̃d dø ʁə.lɑ̃s o.kyn ʁe.pɔ̃s/', 'vwa-SEE lay FEH | dahⁿ LORDR | trwa duh-MAHⁿD | deu ruh-LAHⁿSS | oh-künn ray-POHⁿSS', ['faits']),
  sent(1071, 'Ce que j’attends : une réponse technique avant le 24 octobre.', 'What I expect: a technical answer before 24 October.', '/sə kə ʒa.tɑ̃ yn ʁe.pɔ̃s tɛk.nik a.vɑ̃ lə vɛ̃t.katʁ ɔk.tɔbʁ/', 'suh kuh zha-TAHⁿ | ünn ray-pohⁿss tek-NEEK | a-vahⁿ luh vehⁿt-KATR ok-TOBR', ['demande']),
  sent(1072, 'Votre équipe ne fait strictement rien depuis trois semaines.', 'Your team has done strictly nothing for three weeks.', '/vɔ.tʁe.kip nə fɛ stʁik.tə.mɑ̃ ʁjɛ̃ də.pɥi tʁwa sə.mɛn/', 'vo-tray-KEEP | nuh feh strik-tuh-MAHⁿ RYEHⁿ | duh-pwee trwa suh-MENN', ['accusation'], REC),
  sent(1073, 'Je préviens mon interlocuteur avant de passer au-dessus de lui.', 'I warn my contact before going over his head.', '/ʒə pʁe.vjɛ̃ mɔ̃.nɛ̃.tɛʁ.lɔ.ky.tœʁ a.vɑ̃ də pa.se o.də.sy də lɥi/', 'zhuh pray-VYEHⁿ | mohⁿ-nehⁿ-tehr-lo-kü-TUR | a-vahⁿ duh pa-SAY | oh-duh-SÜ duh LWEE', ['transparence']),
  phrase(1074, 'faire remonter un problème', 'to escalate a problem, to pass it up the line', '/fɛʁ ʁə.mɔ̃.te œ̃ pʁɔ.blɛm/', 'fehr ruh-mohⁿ-TAY | uhⁿ pro-BLEMM', ['remonter']),
  phrase(1075, 'mettre quelqu’un en copie', 'to copy someone in', '/mɛtʁ kɛl.kœ̃ ɑ̃ kɔ.pi/', 'metr kel-KUHⁿ | ahⁿ ko-PEE', ['copie']),
  sent(1076, 'On relance deux fois, poliment puis fermement ; ensuite on fait remonter, en le disant.', 'You follow up twice, politely then firmly; then you escalate, and you say so.', '/ɔ̃ ʁə.lɑ̃s dø fwa pɔ.li.mɑ̃ pɥi fɛʁ.mə.mɑ̃ ɑ̃.sɥit ɔ̃ fɛ ʁə.mɔ̃.te ɑ̃ lə di.zɑ̃/', 'ohⁿ ruh-LAHⁿSS deu FWA | po-lee-MAHⁿ | pwee fehr-muh-MAHⁿ | ahⁿ-SWEET | ohⁿ feh ruh-mohⁿ-TAY | ahⁿ luh dee-ZAHⁿ', ['regle', 'remonter'], FC,
    rule('Ton fournisseur ne répond plus depuis trois semaines et ta livraison en dépend. Comment t’y prends-tu ?', 'Deux relances, la seconde plus ferme et datée ; puis tu fais remonter le dossier à son supérieur, en prévenant ton interlocuteur, avec des faits datés et une demande précise, sans chercher de coupable.')),
  sent(1077, 'En toute transparence, je transmets aussi ce message à votre directrice.', 'In full transparency, I am also forwarding this message to your director.', '/ɑ̃ tut tʁɑ̃s.pa.ʁɑ̃s ʒə tʁɑ̃s.mɛ o.si sə me.saʒ a vɔtʁ di.ʁɛk.tʁis/', 'ahⁿ toot trahⁿs-pa-RAHⁿSS | zhuh trahⁿs-MEH oh-SEE | suh may-SAZH | a votr dee-rek-TREESS', ['transparence', 'copie']),
  sent(1078, 'Mon objectif n’est pas de trouver un coupable, mais de débloquer la situation.', 'My aim is not to find a culprit, but to unblock the situation.', '/mɔ̃.nɔb.ʒɛk.tif nɛ pa də tʁu.ve œ̃ ku.pabl mɛ də de.blɔ.ke la si.tɥa.sjɔ̃/', 'mohⁿ-nob-zhek-TEEF neh pa | duh troo-VAY uhⁿ koo-PABL | meh duh day-blo-KAY | la see-twa-SYOHⁿ', ['transparence'], FCVDR),
];

/* ── ACT 7 · QUAND LA POLITESSE PIQUE ───────────────────────────────────── */

export const ACT7_ROWS: Row[] = [
  sent(1079, 'Comme indiqué dans mon précédent courriel, le fichier était joint.', 'As stated in my previous email, the file was attached.', '/kɔ.mɛ̃.di.ke dɑ̃ mɔ̃ pʁe.se.dɑ̃ ku.ʁjɛl lə fi.ʃje e.tɛ ʒwɛ̃/', 'ko-mehⁿ-dee-KAY | dahⁿ mohⁿ pray-say-dahⁿ koo-RYEL | luh fee-SHYAY | ay-teh ZHWEHⁿ', ['pique'], REC),
  sent(1080, 'Je vous renvoie le fichier, au cas où le premier envoi se serait perdu.', 'I am sending the file again, in case the first one went astray.', '/ʒə vu ʁɑ̃.vwa lə fi.ʃje o ka u lə pʁə.mje.ʁɑ̃.vwa sə sə.ʁɛ pɛʁ.dy/', 'zhuh voo rahⁿ-VWA luh fee-SHYAY | oh ka OO | luh pruh-myay-rahⁿ-VWA | suh suh-REH pehr-DÜ', ['neutre'], FCVDR),
  sent(1081, 'Merci d’avance pour votre réactivité.', 'Thank you in advance for your prompt response.', '/mɛʁ.si da.vɑ̃s puʁ vɔtʁ ʁe.ak.ti.vi.te/', 'mehr-SEE da-VAHⁿSS | poor votr ray-ak-tee-vee-TAY', ['pique'], REC),
  sent(1082, 'Pourriez-vous me dire quand vous pensez pouvoir le traiter ?', 'Could you tell me when you think you can deal with it?', '/pu.ʁje vu mə diʁ kɑ̃ vu pɑ̃.se pu.vwaʁ lə tʁɛ.te/', 'poo-ryay-VOO muh DEER | kahⁿ voo pahⁿ-SAY | poo-VWAR luh treh-TAY', ['neutre']),
  sent(1083, 'Je ne doute pas que vous trouverez un moment.', 'I have no doubt you will find a moment.', '/ʒə nə dut pa kə vu tʁu.və.ʁe œ̃ mɔ.mɑ̃/', 'zhuh nuh DOOT pa | kuh voo troo-vuh-RAY | uhⁿ mo-MAHⁿ', ['pique'], REC),
  sent(1084, 'Pour rappel, la date limite était hier.', 'As a reminder, the deadline was yesterday.', '/puʁ ʁa.pɛl la dat li.mit e.tɛ.tjɛʁ/', 'poor ra-PEL | la dat lee-MEET | ay-teh-TYEHR', ['pique'], REC),
  sent(1085, 'Une formule polie peut devenir une arme.', 'A polite formula can become a weapon.', '/yn fɔʁ.myl pɔ.li pø də.və.niʁ y.naʁm/', 'ünn for-MÜL po-LEE | peu duh-vuh-NEER | ü-NARM', ['pique']),
  sent(1086, 'Quand la politesse sert à piquer, reviens aux faits, à la demande, ou au téléphone.', 'When politeness is used to sting, go back to the facts, to the request, or to the phone.', '/kɑ̃ la pɔ.li.tɛs sɛʁ a pi.ke ʁə.vjɛ̃ o fɛ a la də.mɑ̃d u o te.le.fɔn/', 'kahⁿ la po-lee-TESS | sehr a pee-KAY | ruh-VYEHⁿ oh FEH | a la duh-MAHⁿD | oo oh tay-lay-FONN', ['regle', 'neutre'], FC,
    rule('Ton dernier courriel commence par « Comme indiqué dans mon précédent courriel ». Que va lire ta collègue ?', 'Un reproche poli : « vous ne m’avez pas lu ». Renvoie le fichier sans commentaire, pose ta question, ou appelle-la.')),
  sent(1087, 'Au troisième échange tendu, je décroche le téléphone.', 'At the third tense exchange, I pick up the phone.', '/o tʁwa.zjɛ.me.ʃɑ̃ʒ tɑ̃.dy ʒə de.kʁɔʃ lə te.le.fɔn/', 'oh trwa-zyeh-may-SHAHⁿZH tahⁿ-DÜ | zhuh day-KROSH | luh tay-lay-FONN', ['canal'], FCVDR),
  phrase(1088, 'un ton passif-agressif', 'a passive-aggressive tone', '/œ̃ tɔ̃ pa.si.fa.ɡʁɛ.sif/', 'uhⁿ TOHⁿ | pa-see-fa-greh-SEEF', ['pique']),
  sent(1089, 'Je comprends que la demande est arrivée au mauvais moment.', 'I understand the request came at a bad time.', '/ʒə kɔ̃.pʁɑ̃ kə la də.mɑ̃d ɛ.ta.ʁi.ve o mo.vɛ mɔ.mɑ̃/', 'zhuh kohⁿ-PRAHⁿ | kuh la duh-MAHⁿD | eh-ta-ree-VAY | oh moh-veh mo-MAHⁿ', ['neutre']),
  sent(1090, 'Que puis-je faire pour vous faciliter la tâche ?', 'What can I do to make things easier for you?', '/kə pɥiʒ fɛʁ puʁ vu fa.si.li.te la taʃ/', 'kuh PWEEZH FEHR | poor voo fa-see-lee-TAY la TASH', ['neutre']),
];

/* ── ACT 8 · LES MOTS QUI DIVISENT ──────────────────────────────────────── */

export const ACT8_ROWS: Row[] = [
  sent(1091, 'Je reprends contact avec vous jeudi, avec une proposition révisée.', 'I will get back in touch with you on Thursday, with a revised proposal.', '/ʒə ʁə.pʁɑ̃ kɔ̃.takt a.vɛk vu ʒø.di a.vɛk yn pʁɔ.pɔ.zi.sjɔ̃ ʁe.vi.ze/', 'zhuh ruh-prahⁿ kohⁿ-TAKT a-vek VOO | zheu-DEE | a-vek ünn pro-po-zee-SYOHⁿ ray-vee-ZAY', ['conteste', 'revenir'], FCVDR),
  sent(1092, 'Ce report a une incidence sur votre calendrier.', 'This postponement has an effect on your schedule.', '/sə ʁə.pɔʁ a yn ɛ̃.si.dɑ̃s syʁ vɔtʁ ka.lɑ̃.dʁi.je/', 'suh ruh-POR | a ünn ehⁿ-see-DAHⁿSS | sür votr ka-lahⁿ-dree-YAY', ['conteste', 'impacter']),
  sent(1093, 'Ce report touche directement votre prévente.', 'This postponement directly affects your presale.', '/sə ʁə.pɔʁ tuʃ di.ʁɛk.tə.mɑ̃ vɔtʁ pʁe.vɑ̃t/', 'suh ruh-POR | toosh dee-rek-tuh-MAHⁿ | votr pray-VAHⁿT', ['conteste', 'impacter']),
  sent(1094, 'C’est Léa qui a lancé ce projet.', 'It was Léa who started this project.', '/sɛ le.a ki a lɑ̃.se sə pʁɔ.ʒɛ/', 'seh lay-A kee a lahⁿ-SAY | suh pro-ZHEH', ['conteste', 'initier']),
  sent(1095, 'Nous avons entamé les tests lundi.', 'We began the tests on Monday.', '/nu.za.vɔ̃ ɑ̃.ta.me le tɛst lœ̃.di/', 'noo-za-vohⁿ ahⁿ-ta-MAY | lay TEST luhⁿ-DEE', ['conteste', 'initier']),
  sent(1096, 'J’ai réservé la grande salle pour jeudi.', 'I have booked the large room for Thursday.', '/ʒe ʁe.zɛʁ.ve la ɡʁɑ̃d sal puʁ ʒø.di/', 'zhay ray-zehr-VAY | la grahⁿd SAL | poor zheu-DEE', ['conteste', 'booker']),
  sent(1097, 'Je vous propose une réunion téléphonique de vingt minutes.', 'I suggest a twenty-minute phone meeting.', '/ʒə vu pʁɔ.poz yn ʁe.y.njɔ̃ te.le.fɔ.nik də vɛ̃ mi.nyt/', 'zhuh voo pro-POZ | ünn ray-ü-NYOHⁿ tay-lay-fo-NEEK | duh vehⁿ mee-NÜT', ['conteste', 'call']),
  sent(1098, 'Nous avons pris acte de votre décision.', 'We have taken note of your decision.', '/nu.za.vɔ̃ pʁi akt də vɔtʁ de.si.zjɔ̃/', 'noo-za-vohⁿ pree AKT | duh votr day-see-ZYOHⁿ', ['conteste', 'acter']),
  phrase(1099, 'faire monter un dossier', 'to escalate a file (Québec, OQLF)', '/fɛʁ mɔ̃.te œ̃ dɔ.sje/', 'fehr mohⁿ-TAY | uhⁿ do-SYAY', ['conteste', 'escalade', 'quebec']),
  sent(1100, 'Devant un mot contesté, je regarde qui le condamne, qui l’accepte, et qui va me lire.', 'Faced with a contested word, I look at who condemns it, who accepts it, and who is going to read me.', '/də.vɑ̃ œ̃ mo kɔ̃.tɛs.te ʒə ʁə.ɡaʁd ki lə kɔ̃.dan ki lak.sɛpt e ki va mə liʁ/', 'duh-VAHⁿ uhⁿ MOH kohⁿ-tes-TAY | zhuh ruh-GARD | kee luh kohⁿ-DANN | kee lak-SEPT | ay kee va muh LEER', ['regle', 'conteste'], FC,
    rule('Ton collègue écrit « impacter » et « booker » dans un courriel au client. Il te dit : « tout le monde parle comme ça ». Que réponds-tu ?', 'Que l’usage existe, mais que l’Académie et l’Office québécois les déconseillent ; à l’écrit soigné et avec un lecteur qui y tient, prends le mot que personne ne conteste.')),
  sent(1101, 'Dans un message soigné, je choisis le mot que personne ne conteste.', 'In a careful message, I choose the word nobody disputes.', '/dɑ̃.zœ̃ me.saʒ swa.ɲe ʒə ʃwa.zi lə mo kə pɛʁ.sɔn nə kɔ̃.tɛst/', 'dahⁿ-zuhⁿ may-SAZH swa-NYAY | zhuh shwa-ZEE luh MOH | kuh pehr-SONN nuh kohⁿ-TEST', ['conteste'], FCVDR),
  phrase(1102, 'avoir une incidence sur', 'to have an effect on', '/a.vwaʁ yn ɛ̃.si.dɑ̃s syʁ/', 'a-VWAR ünn ehⁿ-see-DAHⁿSS SÜR', ['impacter']),
  phrase(1103, 'prendre l’initiative de', 'to take the initiative of', '/pʁɑ̃dʁ li.ni.sja.tiv də/', 'prahⁿdr lee-nee-sya-TEEV duh', ['initier']),
  sent(1104, 'Je vous donne des nouvelles dès que les tests sont terminés.', 'I will update you as soon as the tests are finished.', '/ʒə vu dɔn de nu.vɛl dɛ kə le tɛst sɔ̃ tɛʁ.mi.ne/', 'zhuh voo DONN day noo-VEL | deh kuh lay TEST | sohⁿ tehr-mee-NAY', ['revenir']),
];

/* ── ACT 9 · UN COURRIEL, DEUX LECTEURS ─────────────────────────────────── */

export const ACT9_ROWS: Row[] = [
  sent(1105, 'Au Québec, dire tu dès la première rencontre est plus fréquent qu’ailleurs.', 'In Québec, saying tu from the first meeting is more frequent than elsewhere.', '/o ke.bɛk diʁ ty dɛ la pʁə.mjɛʁ ʁɑ̃.kɔ̃tʁ ɛ ply fʁe.kɑ̃ ka.jœʁ/', 'oh kay-BEK | deer TÜ | deh la pruh-myehr rahⁿ-KOHⁿTR | eh plü fray-KAHⁿ | ka-YUR', ['tutoiement', 'quebec']),
  sent(1106, 'Dans le doute, je vouvoie jusqu’à ce que la question soit abordée.', 'When in doubt, I use vous until the question is raised.', '/dɑ̃ lə dut ʒə vu.vwa ʒys.ka sə kə la kɛs.tjɔ̃ swa.ta.bɔʁ.de/', 'dahⁿ luh DOOT | zhuh voo-VWA | zhüs-ka suh kuh la kes-TYOHⁿ | swa-ta-bor-DAY', ['tutoiement'], FCVDR),
  sent(1107, 'On pourrait se tutoyer, si vous le voulez bien.', 'We could use tu with each other, if you are happy to.', '/ɔ̃ pu.ʁɛ sə ty.twa.je si vu lə vu.le bjɛ̃/', 'ohⁿ poo-REH suh tü-twa-YAY | see voo luh voo-lay BYEHⁿ', ['tutoiement']),
  sent(1108, 'Je vous prie d’agréer, Madame, mes salutations distinguées.', 'Yours faithfully (I ask you to accept, Madam, my distinguished greetings).', '/ʒə vu pʁi da.ɡʁe.e ma.dam me sa.ly.ta.sjɔ̃ dis.tɛ̃.ɡe/', 'zhuh voo PREE da-gray-AY | ma-DAMM | may sa-lü-ta-SYOHⁿ dees-tehⁿ-GAY', ['salutation', 'deference']),
  sent(1109, 'Recevez, Monsieur, mes salutations distinguées.', 'Yours sincerely (Receive, Sir, my distinguished greetings).', '/ʁə.sə.ve mə.sjø me sa.ly.ta.sjɔ̃ dis.tɛ̃.ɡe/', 'ruh-suh-VAY | muh-SYEU | may sa-lü-ta-SYOHⁿ dees-tehⁿ-GAY', ['salutation', 'deference']),
  phrase(1111, 'Au plaisir de vous lire,', 'Looking forward to hearing from you,', '/o plɛ.ziʁ də vu liʁ/', 'oh pleh-ZEER | duh voo LEER', ['salutation']),
  sent(1112, 'Entre deux pays, je vérifie les formules ; je ne présume pas du caractère des gens.', 'Between two countries, I check the formulas; I make no assumptions about people’s character.', '/ɑ̃tʁ dø pe.i ʒə ve.ʁi.fi le fɔʁ.myl ʒə nə pʁe.zym pa dy ka.ʁak.tɛʁ de ʒɑ̃/', 'ahⁿtr deu pay-EE | zhuh vay-ree-FEE lay for-MÜL | zhuh nuh pray-ZÜMM pa | dü ka-rak-TEHR day ZHAHⁿ', ['regle', 'cliche'], FC,
    rule('Une collègue de Nantes te dit : « Les Québécois sont directs, ne prends pas de gants. » Que fais-tu ?', 'Tu n’en fais pas une règle : tu vérifies les formules et le tutoiement d’usage, puis tu lis la personne, pas le pays.')),
  sent(1113, 'Pour un premier échange officiel, je garde la formule longue.', 'For a first official exchange, I keep the long formula.', '/puʁ œ̃ pʁə.mje.ʁe.ʃɑ̃ʒ ɔ.fi.sjɛl ʒə ɡaʁd la fɔʁ.myl lɔ̃ɡ/', 'poor uhⁿ pruh-myay-ray-SHAHⁿZH o-fee-SYEL | zhuh GARD | la for-mül LOHⁿG', ['salutation']),
  sent(1114, 'Je m’aligne sur le registre que mon correspondant a choisi.', 'I match the register my correspondent has chosen.', '/ʒə ma.liɲ syʁ lə ʁə.ʒistʁ kə mɔ̃ kɔ.ʁɛs.pɔ̃.dɑ̃ a ʃwa.zi/', 'zhuh ma-LEEGN | sür luh ruh-ZHEESTR | kuh mohⁿ ko-res-pohⁿ-DAHⁿ | a shwa-ZEE', ['registre']),
  sent(1115, 'La distance se lit dans les formules, pas dans le passeport.', 'Distance is read in the formulas, not in the passport.', '/la dis.tɑ̃s sə li dɑ̃ le fɔʁ.myl pa dɑ̃ lə pas.pɔʁ/', 'la dees-TAHⁿSS suh LEE | dahⁿ lay for-MÜL | pa dahⁿ luh pas-POR', ['cliche'], FCVDR),
];

/* ── ACT 10 · PRÉSENTER : DES TITRES QUI DISENT QUELQUE CHOSE ───────────── */

export const ACT10_ROWS: Row[] = [
  sent(1116, 'Une diapositive, une idée.', 'One slide, one idea.', '/yn dja.pɔ.zi.tiv y.ni.de/', 'ünn dya-po-zee-TEEV | ü-nee-DAY', ['diapositive']),
  sent(1117, 'Le titre d’une diapositive dit ce qu’il faut en retenir.', 'A slide’s title says what to take away from it.', '/lə titʁ dyn dja.pɔ.zi.tiv di sə kil fo ɑ̃ ʁə.tə.niʁ/', 'luh TEETR | dünn dya-po-zee-TEEV | dee suh keel FOH | ahⁿ ruh-tuh-NEER', ['titre'], FCVDR),
  sent(1118, 'Le report de deux semaines ne touche pas votre saison.', 'The two-week postponement does not affect your season.', '/lə ʁə.pɔʁ də dø sə.mɛn nə tuʃ pa vɔtʁ sɛ.zɔ̃/', 'luh ruh-POR | duh deu suh-MENN | nuh TOOSH pa | votr seh-ZOHⁿ', ['titre']),
  sent(1119, 'Ce qu’il faut retenir de ce graphique, c’est la baisse des erreurs.', 'What to take away from this chart is the fall in errors.', '/sə kil fo ʁə.tə.niʁ də sə ɡʁa.fik sɛ la bɛs de.zɛ.ʁœʁ/', 'suh keel FOH ruh-tuh-NEER | duh suh gra-FEEK | seh la BESS | day-zeh-RUR', ['balise']),
  sent(1120, 'J’en viens au point qui vous concerne directement : la prévente.', 'I now come to the point that concerns you directly: the presale.', '/ʒɑ̃ vjɛ̃ o pwɛ̃ ki vu kɔ̃.sɛʁn di.ʁɛk.tə.mɑ̃ la pʁe.vɑ̃t/', 'zhahⁿ VYEHⁿ oh PWEHⁿ | kee voo kohⁿ-SEHRN dee-rek-tuh-MAHⁿ | la pray-VAHⁿT', ['balise']),
  sent(1121, 'Je vais vous montrer trois choses, et je garde dix minutes pour vos questions.', 'I am going to show you three things, and I am keeping ten minutes for your questions.', '/ʒə vɛ vu mɔ̃.tʁe tʁwa ʃoz e ʒə ɡaʁd di mi.nyt puʁ vo kɛs.tjɔ̃/', 'zhuh veh voo mohⁿ-TRAY | trwa SHOZ | ay zhuh GARD | dee mee-NÜT | poor voh kes-TYOHⁿ', ['balise'], FCVDR),
  sent(1122, 'Avant de passer à vos questions, je résume en une phrase.', 'Before moving on to your questions, I will sum up in one sentence.', '/a.vɑ̃ də pa.se a vo kɛs.tjɔ̃ ʒə ʁe.zym ɑ̃.ny.nə fʁaz/', 'a-vahⁿ duh pa-SAY | a voh kes-TYOHⁿ | zhuh ray-ZÜMM | ahⁿ-nünn FRAHZ', ['balise']),
  sent(1123, 'Je ne lis pas mes diapositives : je les commente.', 'I do not read my slides out: I comment on them.', '/ʒə nə li pa me dja.pɔ.zi.tiv ʒə le kɔ.mɑ̃t/', 'zhuh nuh LEE pa | may dya-po-zee-TEEV | zhuh lay ko-MAHⁿT', ['diapositive']),
  sent(1124, 'Un titre-message donne la conclusion ; la diapositive la prouve ; ta voix la relie au public.', 'A message title gives the conclusion; the slide proves it; your voice connects it to the audience.', '/œ̃ titʁ.me.saʒ dɔn la kɔ̃.kly.zjɔ̃ la dja.pɔ.zi.tiv la pʁuv ta vwa la ʁə.li o py.blik/', 'uhⁿ teetr-may-SAZH | donn la kohⁿ-klü-ZYOHⁿ | la dya-po-zee-TEEV la PROOV | ta VWA | la ruh-LEE oh pü-BLEEK', ['regle', 'titre'], FC,
    rule('Ta diapositive s’intitule « Calendrier » et montre un tableau de dates. Que voit le client ?', 'Un tableau, sans savoir quoi en penser. Écris en titre la conclusion, « Le report ne touche pas votre saison », et laisse le tableau la prouver.')),
  phrase(1125, 'un titre-message', 'a message title (a slide title that states the point)', '/œ̃ titʁ.me.saʒ/', 'uhⁿ teetr-may-SAZH', ['titre']),
  sent(1126, 'Si vous ne deviez retenir qu’une chose, ce serait celle-ci.', 'If you were to remember only one thing, it would be this.', '/si vu nə də.vje ʁə.tə.niʁ kyn ʃoz sə sə.ʁɛ sɛl.si/', 'see voo nuh duh-VYAY ruh-tuh-NEER | künn SHOZ | suh suh-REH sel-SEE', ['balise']),
  sent(1127, 'Le bas de la diapositive reste vide : tout le monde ne le voit pas.', 'The bottom of the slide stays empty: not everyone can see it.', '/lə ba də la dja.pɔ.zi.tiv ʁɛst vid tu lə mɔ̃d nə lə vwa pa/', 'luh BA duh la dya-po-zee-TEEV | rest VEED | too luh MOHⁿD | nuh luh VWA pa', ['diapositive']),
  sent(1128, 'Le détail figure dans le document que je vous laisse.', 'The detail is in the document I am leaving with you.', '/lə de.taj fi.ɡyʁ dɑ̃ lə dɔ.ky.mɑ̃ kə ʒə vu lɛs/', 'luh day-TAÏ fee-GÜR | dahⁿ luh do-kü-MAHⁿ | kuh zhuh voo LESS', ['diapositive']),
];

/* ── ACT 11 · LA QUESTION QUI FÂCHE ─────────────────────────────────────── */

export const ACT11_ROWS: Row[] = [
  sent(1129, 'C’est une question légitime, et je vais y répondre directement.', 'It is a legitimate question, and I will answer it directly.', '/sɛ.ty.nə kɛs.tjɔ̃ le.ʒi.tim e ʒə vɛ.zi ʁe.pɔ̃dʁ di.ʁɛk.tə.mɑ̃/', 'seh-tünn kes-TYOHⁿ lay-zhee-TEEMM | ay zhuh veh-zee ray-POHⁿDR | dee-rek-tuh-MAHⁿ', ['hostile'], FCVDR),
  sent(1130, 'Je comprends votre agacement ; voici ce que nous avons fait.', 'I understand your annoyance; here is what we have done.', '/ʒə kɔ̃.pʁɑ̃ vɔ.tʁa.ɡas.mɑ̃ vwa.si sə kə nu.za.vɔ̃ fɛ/', 'zhuh kohⁿ-PRAHⁿ vo-tra-gass-MAHⁿ | vwa-SEE suh kuh noo-za-vohⁿ FEH', ['hostile']),
  sent(1131, 'Je ne suis pas en mesure de vous répondre sur ce point aujourd’hui.', 'I am not in a position to answer you on this point today.', '/ʒə nə sɥi pa.zɑ̃ mə.zyʁ də vu ʁe.pɔ̃dʁ syʁ sə pwɛ̃ o.ʒuʁ.dɥi/', 'zhuh nuh swee pa-zahⁿ muh-ZÜR | duh voo ray-POHⁿDR | sür suh PWEHⁿ oh-zhoor-DWEE', ['confidentiel']),
  sent(1132, 'Ce point relève du contrat ; je vous propose qu’on l’examine après la séance.', 'This point is a contract matter; I suggest we look at it after the meeting.', '/sə pwɛ̃ ʁə.lɛv dy kɔ̃.tʁa ʒə vu pʁɔ.poz kɔ̃ lɛg.za.min a.pʁɛ la se.ɑ̃s/', 'suh PWEHⁿ ruh-LEV dü kohⁿ-TRA | zhuh voo pro-POZ | kohⁿ leg-za-MEENN | a-preh la say-AHⁿSS', ['hors-sujet']),
  sent(1133, 'Votre question en contient deux ; je commence par la seconde.', 'Your question contains two; I will start with the second.', '/vɔtʁ kɛs.tjɔ̃ ɑ̃ kɔ̃.tjɛ̃ dø ʒə kɔ.mɑ̃s paʁ la sə.ɡɔ̃d/', 'votr kes-TYOHⁿ | ahⁿ kohⁿ-TYEHⁿ DEU | zhuh ko-MAHⁿSS | par la suh-GOHⁿD', ['piege']),
  sent(1134, 'Je reconnais notre retard, mais je ne laisserai pas dire que l’équipe n’a rien fait.', 'I acknowledge our delay, but I will not let it be said that the team did nothing.', '/ʒə ʁə.kɔ.nɛ nɔtʁ ʁə.taʁ mɛ ʒə nə lɛ.sə.ʁe pa diʁ kə le.kip na ʁjɛ̃ fɛ/', 'zhuh ruh-ko-NEH notr ruh-TAR | meh zhuh nuh leh-suh-RAY pa DEER | kuh lay-KEEP na ryehⁿ FEH', ['hostile', 'fermete']),
  sent(1135, 'Je vous réponds par écrit d’ici demain midi, chiffres à l’appui.', 'I will answer you in writing by noon tomorrow, with the figures.', '/ʒə vu ʁe.pɔ̃ paʁ e.kʁi di.si də.mɛ̃ mi.di ʃifʁ a la.pɥi/', 'zhuh voo ray-POHⁿ par ay-KREE | dee-see duh-mehⁿ mee-DEE | SHEEFR a la-PWEE', ['differer']),
  sent(1136, 'Vous êtes donc incapables de tenir une date.', 'So you are incapable of keeping to a date.', '/vu.zɛt dɔ̃k ɛ̃.ka.pabl də tə.niʁ yn dat/', 'voo-ZET dohⁿk | ehⁿ-ka-PABL | duh tuh-NEER ünn DAT', ['hostile'], REC),
  sent(1137, 'Devant une question hostile, je réponds au fond, jamais au ton.', 'Faced with a hostile question, I answer the substance, never the tone.', '/də.vɑ̃ yn kɛs.tjɔ̃ ɔs.til ʒə ʁe.pɔ̃ o fɔ̃ ʒa.mɛ o tɔ̃/', 'duh-VAHⁿ ünn kes-TYOHⁿ os-TEEL | zhuh ray-POHⁿ oh FOHⁿ | zha-MEH oh TOHⁿ', ['regle', 'hostile'], FC,
    rule('Une administratrice te lance, devant tout le comité : « Vous êtes donc incapables de tenir une date ? » Que fais-tu ?', 'Tu ne réponds pas au ton : tu reconnais ce qui est juste (le retard), tu donnes la cause et le plan, et tu tiens ce qui est juste aussi (le travail de l’équipe).')),
  sent(1138, 'Je préfère vous donner un chiffre exact demain qu’un chiffre faux maintenant.', 'I would rather give you an exact figure tomorrow than a wrong one now.', '/ʒə pʁe.fɛʁ vu dɔ.ne œ̃ ʃifʁ ɛɡ.zakt də.mɛ̃ kœ̃ ʃifʁ fo mɛ̃t.nɑ̃/', 'zhuh pray-FEHR voo do-NAY | uhⁿ SHEEFR eg-ZAKT duh-MEHⁿ | kuhⁿ SHEEFR FOH | mehⁿt-NAHⁿ', ['differer']),
  // The steering-committee exchange, line by line (the hidden listening of act 11).
  sent(1139, 'Merci, monsieur Lapointe. Madame Tardif, vous avez une question.', 'Thank you, Mr Lapointe. Ms Tardif, you have a question.', '/mɛʁ.si mə.sjø la.pwɛ̃t ma.dam taʁ.dif vu.za.ve yn kɛs.tjɔ̃/', 'mehr-SEE | muh-syeu la-PWEHⁿT | ma-damm tar-DEEF | voo-za-VAY | ünn kes-TYOHⁿ', ['ecoute']),
  sent(1140, 'Oui : deux semaines de retard, est-ce ainsi que vous traitez tous vos clients ?', 'Yes: two weeks late, is this how you treat all your clients?', '/wi dø sə.mɛn də ʁə.taʁ ɛs ɛ̃.si kə vu tʁɛ.te tu vo kli.jɑ̃/', 'WEE | deu suh-MENN duh ruh-TAR | ess ehⁿ-SEE | kuh voo treh-TAY | too voh klee-YAHⁿ', ['ecoute']),
  sent(1141, 'C’est une question directe, et elle mérite une réponse directe.', 'It is a direct question, and it deserves a direct answer.', '/sɛ.ty.nə kɛs.tjɔ̃ di.ʁɛkt e ɛl me.ʁit yn ʁe.pɔ̃s di.ʁɛkt/', 'seh-tünn kes-TYOHⁿ dee-REKT | ay el may-REET | ünn ray-POHⁿSS dee-REKT', ['ecoute']),
  sent(1142, 'Le retard vient de nous : nos tests ont trouvé une erreur dans le calcul des taxes.', 'The delay is our doing: our tests found an error in the tax calculation.', '/lə ʁə.taʁ vjɛ̃ də nu no tɛst ɔ̃ tʁu.ve y.nɛ.ʁœʁ dɑ̃ lə kal.kyl de taks/', 'luh ruh-TAR vyehⁿ duh NOO | noh TEST ohⁿ troo-VAY | ü-neh-RUR | dahⁿ luh kal-KÜL day TAKS', ['ecoute']),
  sent(1143, 'Nous avons préféré la corriger avant la saison plutôt que devant vos spectateurs.', 'We preferred to fix it before the season rather than in front of your audience.', '/nu.za.vɔ̃ pʁe.fe.ʁe la kɔ.ʁi.ʒe a.vɑ̃ la sɛ.zɔ̃ ply.to kə də.vɑ̃ vo spɛk.ta.tœʁ/', 'noo-za-vohⁿ pray-fay-RAY | la ko-ree-ZHAY | a-vahⁿ la seh-ZOHⁿ | plü-TOH kuh duh-VAHⁿ | voh spek-ta-TUR', ['ecoute']),
  sent(1144, 'Et qui nous garantit que la nouvelle date sera tenue ?', 'And who guarantees us that the new date will be kept?', '/e ki nu ɡa.ʁɑ̃.ti kə la nu.vɛl dat sə.ʁa tə.ny/', 'ay KEE noo ga-rahⁿ-TEE | kuh la noo-vel DAT | suh-ra tuh-NÜ', ['ecoute']),
  sent(1145, 'Je ne peux pas vous le garantir par une phrase ; je peux vous le montrer chaque vendredi.', 'I cannot guarantee it to you in a sentence; I can show it to you every Friday.', '/ʒə nə pø pa vu lə ɡa.ʁɑ̃.tiʁ paʁ yn fʁaz ʒə pø vu lə mɔ̃.tʁe ʃak vɑ̃.dʁə.di/', 'zhuh nuh peu pa voo luh ga-rahⁿ-TEER | par ünn FRAHZ | zhuh peu voo luh mohⁿ-TRAY | shak vahⁿ-druh-DEE', ['ecoute']),
  sent(1146, 'Vous recevrez un point d’étape écrit chaque semaine jusqu’au 29 novembre.', 'You will receive a written progress update every week until 29 November.', '/vu ʁə.sə.vʁe œ̃ pwɛ̃ de.ta.pe.kʁi ʃak sə.mɛn ʒys.ko vɛ̃t.nœf nɔ.vɑ̃bʁ/', 'voo ruh-suh-VRAY | uhⁿ pwehⁿ day-ta-pay-KREE | shak suh-MENN | zhüs-koh vehⁿt-NUF no-VAHⁿBR', ['ecoute']),
];

/* ── ACT 12 · TON MESSAGE ───────────────────────────────────────────────── */

export const ACT12_ROWS: Row[] = [
  sent(1147, 'Je commence par la nouvelle, pas par les excuses.', 'I start with the news, not with the apologies.', '/ʒə kɔ.mɑ̃s paʁ la nu.vɛl pa paʁ le.zɛks.kyz/', 'zhuh ko-MAHⁿSS | par la noo-VEL | pa par lay-zeks-KÜZ', ['mission', 'annonce'], FCVDR),
  sent(1148, 'Je donne une seule raison, la vraie.', 'I give one reason only, the true one.', '/ʒə dɔn yn sœl ʁɛ.zɔ̃ la vʁɛ/', 'zhuh DONN ünn sul reh-ZOHⁿ | la VREH', ['mission', 'raison']),
  sent(1149, 'Je dis ce qui change pour mon lecteur.', 'I say what changes for my reader.', '/ʒə di sə ki ʃɑ̃ʒ puʁ mɔ̃ lɛk.tœʁ/', 'zhuh DEE suh kee SHAHⁿZH | poor mohⁿ lek-TUR', ['mission', 'impact']),
  sent(1150, 'Je propose une suite concrète et datée.', 'I propose a concrete, dated next step.', '/ʒə pʁɔ.poz yn sɥit kɔ̃.kʁɛt e da.te/', 'zhuh pro-POZ | ünn SWEET kohⁿ-KRET | ay da-TAY', ['mission', 'suite']),
  sent(1151, 'Je choisis mes formules selon la personne qui me lit.', 'I choose my formulas according to the person reading me.', '/ʒə ʃwa.zi me fɔʁ.myl sə.lɔ̃ la pɛʁ.sɔn ki mə li/', 'zhuh shwa-ZEE may for-MÜL | suh-lohⁿ la pehr-SONN | kee muh LEE', ['mission', 'salutation']),
  sent(1152, 'Avant d’envoyer, je cherche le mot qui pique.', 'Before sending, I look for the word that stings.', '/a.vɑ̃ dɑ̃.vwa.je ʒə ʃɛʁʃ lə mo ki pik/', 'a-vahⁿ dahⁿ-vwa-YAY | zhuh SHEHRSH | luh MOH kee PEEK', ['mission', 'relire']),
  sent(1153, 'Le report touche votre campagne de réabonnement, et je le mesure.', 'The postponement affects your renewal campaign, and I appreciate that.', '/lə ʁə.pɔʁ tuʃ vɔtʁ kɑ̃.paɲ də ʁe.a.bɔn.mɑ̃ e ʒə lə mə.zyʁ/', 'luh ruh-POR | toosh votr kahⁿ-PAGN | duh ray-a-bonn-MAHⁿ | ay zhuh luh muh-ZÜR', ['mission', 'impact']),
  sent(1154, 'Voici ce que nous proposons pour limiter les conséquences.', 'Here is what we propose to limit the consequences.', '/vwa.si sə kə nu pʁɔ.po.zɔ̃ puʁ li.mi.te le kɔ̃.se.kɑ̃s/', 'vwa-SEE suh kuh noo pro-po-ZOHⁿ | poor lee-mee-TAY | lay kohⁿ-say-KAHⁿSS', ['mission', 'plan']),
  sent(1155, 'Je reste joignable toute la semaine pour en parler.', 'I remain reachable all week to talk about it.', '/ʒə ʁɛst ʒwa.ɲabl tut la sə.mɛn puʁ ɑ̃ paʁ.le/', 'zhuh REST zhwa-NYABL | toot la suh-MENN | poor ahⁿ par-LAY', ['mission', 'suite']),
  sent(1156, 'Un non clair et une date ferme valent mieux qu’un oui flou.', 'A clear no and a firm date are worth more than a vague yes.', '/œ̃ nɔ̃ klɛʁ e yn dat fɛʁm val mjø kœ̃ wi flu/', 'uhⁿ NOHⁿ KLEHR | ay ünn dat FEHRM | val MYEU | kuhⁿ WEE FLOO', ['mission', 'tact'], FCVDR),
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
 *  One per act, about 220 to 330 words, each « texte original écrit pour la
 *  leçon ». They live here so the reading, the quiz and the task cannot
 *  drift apart. The Morencie case runs from act 1 to act 11 and its facts
 *  never change: a new ticketing module promised for 15 November, moved to
 *  29 November (payment tests found a tax error on season packages); a
 *  free custom seating plan for four balconies refused (six weeks of work
 *  outside the June budget), offered free in the standard spring release
 *  (pilot site) or now, paid, by contract amendment; presale on 25
 *  November; Transvia's block on instalment payments over 500 $. The task
 *  (act 12) uses ANOTHER case, the théâtre des Glaces (`GLACES_FICHE`).
 * ══════════════════════════════════════════════════════════════════════════ */

/** Act 1: the learner's two drafts to the client. */
export const BROUILLONS_TEXT =
  'Courriels préparés pour Marc-André Dion, directeur administratif de la salle Morencie, à Trois-Rivières. La semaine dernière, il a demandé que le nouveau module de billetterie comprenne un plan de salle interactif, conçu sur mesure pour ses quatre balcons, sans frais supplémentaires. Ta directrice, Isabelle Thériault, veut lire ta réponse avant l’envoi. Tu as écrit deux brouillons. Premier brouillon. « Monsieur Dion, votre demande ne fait pas partie du contrat, donc c’est non. Le plan de salle sur mesure représente six semaines de développement, et nous ne travaillons pas gratuitement. Par ailleurs, la livraison prévue le 15 novembre est maintenant compromise, entre autres à cause des changements que votre équipe a demandés en septembre. Nous vous tiendrons au courant. Cordialement. » Deuxième brouillon. « Cher Monsieur Dion, je vous remercie infiniment pour votre message, qui nous a beaucoup intéressés. Votre idée de plan de salle est vraiment excellente, et toute l’équipe l’a trouvée très inspirante. Il ne serait peut-être pas impossible d’envisager éventuellement quelque chose dans ce sens, même si, bien entendu, certaines contraintes pourraient compliquer un peu les choses, notamment sur le plan budgétaire. Par ailleurs, quelques petits ajustements de calendrier sont à prévoir, rien d’inquiétant. Nous restons naturellement à votre entière disposition et nous vous souhaitons une excellente journée. » Isabelle te rend les deux brouillons avec une seule question : « Après avoir lu chacun d’eux, que croit Marc-André Dion ? »';

/** Act 2: a page of the company's internal writing guide. */
export const GUIDE_TEXT =
  'Ardisque. Guide de rédaction interne, fiche 4 : demander par écrit. Une demande écrite dit deux choses à la fois : ce que tu veux, et la marge que tu laisses au lecteur. Cette marge se règle par le degré d’indirect. Prenons une même demande, des résultats de tests attendus vendredi, et descendons l’échelle. « Envoyez-moi les résultats vendredi » : l’impératif ne laisse aucun choix ; entre collègues proches et dans l’urgence, il passe, mais adressé à une autre équipe, il sonne comme un ordre. « Je compte sur vous pour m’envoyer les résultats vendredi » : la demande reste ferme, mais elle s’appuie sur la confiance. « Merci de bien vouloir m’envoyer les résultats avant vendredi midi » : c’est la consigne polie des courriels administratifs ; le remerciement d’avance laisse entendre que la chose est acquise. « Pourriez-vous m’envoyer les résultats d’ici vendredi ? » : la question polie au conditionnel, que tu connais depuis longtemps ; elle convient presque partout. « Je vous serais reconnaissante de… » : on demande un service, et l’on reconnaît une dette. « Serait-il envisageable de… » : on demande si la chose est seulement possible ; le lecteur entend qu’il peut dire non. Deux erreurs reviennent dans nos courriels. La première consiste à empiler les précautions (« serait-il éventuellement possible, si cela ne vous dérange pas trop… ») pour une chose indispensable : le lecteur, à juste titre, la prend pour une faveur facultative. La seconde consiste à donner un ordre sec à quelqu’un qui ne te doit rien. La règle de la maison tient en une ligne : si c’est obligatoire, dis-le, et dis pourquoi ; si c’est une faveur, laisse vraiment le choix.';

/** Act 3: the refusal Olivier sent. */
export const REFUS_TEXT =
  'Courriel envoyé le 4 novembre par Olivier Lapointe, chef de produit chez Ardisque, à Marc-André Dion. Objet : votre demande de plan de salle personnalisé. Monsieur Dion, nous avons étudié avec attention votre demande de plan de salle interactif conçu pour vos quatre balcons. Votre demande est légitime, et nous mesurons ce qu’elle représente pour votre équipe : vos spectateurs pourraient choisir leur place en voyant la scène depuis leur fauteuil. Il ne nous est toutefois pas possible d’ajouter cette fonction dans le cadre du contrat actuel. Elle demanderait six semaines de développement que le budget convenu en juin ne couvre pas, et ce travail retarderait la mise en service de toute votre billetterie. En revanche, deux solutions s’offrent à vous. La première : ce plan de salle fera partie de la version standard du printemps, sans frais ; votre salle pourrait servir de site pilote, et vos quatre balcons seraient pris en compte dès la conception. La seconde : nous pouvons le réaliser sur mesure dès cet hiver, par un avenant au contrat ; vous trouverez une estimation en pièce jointe. Je reste à votre disposition pour en parler de vive voix et je vous propose un appel jeudi ou vendredi, à l’heure qui vous conviendra. Je vous prie d’agréer, Monsieur Dion, mes salutations distinguées. Olivier Lapointe, chef de produit, Ardisque.';

/** Act 4: the bad-news email. */
export const RETARD_TEXT =
  'Courriel envoyé le 6 novembre par Olivier Lapointe à Marc-André Dion. Objet : report de la mise en service au 29 novembre. Monsieur Dion, je dois vous informer d’un changement dans notre calendrier : la mise en service de votre nouvelle billetterie est reportée du 15 au 29 novembre. Contrairement à ce que nous vous avions annoncé, le module ne sera pas prêt à temps. La raison tient à nous : nous avons sous-estimé le temps nécessaire aux tests de paiement, qui ont révélé une erreur dans le calcul des taxes sur les forfaits de saison. Nous préférons la corriger avant la mise en service plutôt que devant vos spectateurs. Concrètement, votre billetterie actuelle restera en service deux semaines de plus, et vos données seront transférées le 28 novembre au soir, en dehors des heures de vente. Afin de limiter la gêne, nous prendrons en charge la formation de votre équipe, prévue en décembre, sans frais. Je vous ferai un point d’étape chaque vendredi jusqu’à la livraison, et je vous appellerai dès que les tests seront terminés. Je mesure le désagrément que ce report représente à l’approche de votre saison. Si une date de votre calendrier pose un problème particulier, dites-le-moi : nous chercherons ensemble une solution. Je reste joignable à tout moment. Je vous prie d’agréer, Monsieur Dion, mes salutations distinguées. Olivier Lapointe.';

/** Act 5: Karim says no upward. */
export const KARIM_TEXT =
  'Courriel de Karim Haddad, responsable de l’équipe de développement à Nantes, à Isabelle Thériault, directrice générale d’Ardisque. Objet : démonstration pour le salon de Montréal, ma réponse. Bonjour Isabelle, merci pour votre confiance. Je mesure l’importance de ce salon pour Ardisque : c’est notre meilleure occasion de l’année de rencontrer les festivals. Avant de dire oui, je préfère vous donner une image juste de notre charge de travail. En l’état, mon équipe ne peut pas absorber ce projet en plus du reste. Les douze développeurs sont mobilisés sur la billetterie de la salle Morencie, déjà reportée au 29 novembre, et sur la mise à jour de sécurité exigée par notre banque pour le 15 décembre. Une démonstration solide demande deux personnes pendant trois semaines. Si nous la prenons, la livraison de Morencie glisse encore d’une semaine, et je ne peux pas faire cela à Olivier, qui vient de donner une date ferme au client. Je vous propose donc deux options. Première option : nous préparons une démonstration simple, à partir de la version actuelle, avec une seule personne pendant une semaine ; elle montrera moins de choses, mais sans risque pour les livraisons. Seconde option : nous faisons la démonstration complète, et vous acceptez de demander à la banque un report de la mise à jour de sécurité à la mi-janvier. J’ai besoin que vous arbitriez entre ces deux priorités d’ici lundi. Je préfère vous alerter maintenant plutôt que de manquer les deux dates en décembre. Bonne journée, Karim.';

/** Act 6: two relances, then the escalation. */
export const ESCALADE_TEXT =
  'Fil de courriels entre Karim Haddad, chez Ardisque, et Stéphane Morin, chargé de compte chez Transvia Paiements, le prestataire qui traite les paiements par carte de la billetterie. Premier message, le 3 octobre : « Bonjour Monsieur Morin, nos tests montrent que votre service refuse les paiements en plusieurs fois au-delà de 500 $. Pourriez-vous nous dire s’il s’agit d’un réglage de notre compte ou d’une limite de votre côté ? Merci d’avance. » Pas de réponse. Première relance, le 10 octobre : « Bonjour Monsieur Morin, je me permets de vous relancer au sujet de ma demande du 3 octobre, que vous trouverez ci-dessous. Une réponse avant le 17 nous aiderait beaucoup. » Pas de réponse. Seconde relance, le 17 octobre : « Monsieur Morin, sans nouvelles de votre part, je vous écris une dernière fois : cette limite bloque la mise en service d’un client, prévue le 29 novembre. Faute de réponse d’ici jeudi, je devrai faire remonter le dossier. » Pas de réponse. Le 21 octobre, Karim écrit à Julie Lavoie, directrice du service à la clientèle de Transvia : « Madame Lavoie, je souhaite porter à votre attention un blocage qui dure depuis trois semaines. J’en ai informé Stéphane Morin, que je mets en copie, par souci de transparence. Voici les faits, dans l’ordre : trois demandes, deux relances, aucune réponse ; nos messages sont joints. Ce blocage retarde la mise en service d’un client. Ce que j’attends : une réponse technique avant le 24 octobre, ou le nom d’une personne à joindre. Mon objectif n’est pas de trouver un coupable, mais de débloquer la situation. Je vous remercie de votre aide. Karim Haddad. »';

/** Act 7: a thread that sours, and the director's note. */
export const PIQUE_TEXT =
  'Fil de courriels entre Olivier Lapointe, à Québec, et Léa Rousseau, développeuse à Nantes, au sujet des captures d’écran du guide d’utilisation destiné à la salle Morencie. Lundi, Olivier : « Bonjour Léa, pourrais-tu m’envoyer les captures d’écran du nouveau module d’ici mercredi ? Merci ! » Mardi, Léa : « Bonjour Olivier, elles sont dans le dossier partagé, sous Morencie. Bonne journée. » Mercredi, Olivier : « Léa, je ne trouve que les anciennes. Merci d’avance pour votre réactivité. » Jeudi, Léa : « Olivier, comme indiqué dans mon précédent courriel, les captures sont dans le dossier partagé. Je ne doute pas que vous trouverez le bon. Cordialement. » Vendredi, Olivier, avec Isabelle Thériault en copie : « Léa, pour rappel, la date limite était mercredi. Je me permets de relancer pour la troisième fois. Cdt. » Le soir même, Isabelle leur écrit à tous les deux, sans copie : « Bonsoir à vous deux. Relisez votre fil : chaque formule est polie, et pourtant vous vous piquez à chaque ligne. Le passage du tu au vous, le « comme indiqué », le merci d’avance, la copie à la direction, l’abréviation sèche à la fin : tout cela dit « vous m’agacez » sans le dire. Le vrai problème est simple : il existe deux dossiers Morencie, l’un à Nantes, l’autre à Québec, et chacun regarde le sien. Au troisième échange tendu, on décroche le téléphone. Appelez-vous lundi, dix minutes, et revenez au sujet. Merci à tous les deux pour le travail sur ce guide. »';

/** Act 8: the director's note on contested office words. Every verdict is
 *  in §A.7 with its source. */
export const MOTS_TEXT =
  'Note d’Isabelle Thériault à toute l’équipe d’Ardisque, à Québec et à Nantes. Objet : les mots qui divisent. Plusieurs d’entre vous m’ont demandé si l’on peut écrire « impacter » ou « booker » à un client. Voici une réponse en trois temps : ce que disent les ouvrages de référence, ce que fait l’usage, et ce que nous choisissons. « Impacter » : l’Académie française le condamne et l’Office québécois de la langue française le déconseille ; le Larousse l’enregistre, avec la marque « familier ». Dans un courriel à un client, écrivons « avoir une incidence sur », « toucher » ou « se répercuter sur ». « Initier » au sens de commencer : l’Académie et l’Office le déconseillent, alors que le Larousse l’admet. Nous écrirons « lancer », « entamer », « prendre l’initiative de ». « Booker » : l’Office le déconseille ; on réserve une salle, on prend rendez-vous, on engage un artiste. « Un call » : le Larousse ne l’enregistre pas, et l’Office n’en traite pas ; nous disons un appel, une réunion téléphonique ou une visioconférence. « Je reviens vers vous » : très répandu dans les bureaux en France, il est jugé incorrect par l’Académie, qui y voit une traduction hasardeuse de « I’ll get back to you » ; préférons « je reprends contact avec vous » ou « je vous donne des nouvelles ». Deux cas montrent que les autorités ne disent pas toujours la même chose. « Acter » : l’Académie veut le limiter au vocabulaire juridique, alors que l’Office l’accepte au sens de « prendre acte de », comme terme d’administration et de droit. « Faire escalader un problème » : l’Office l’accepte en gestion, à côté de « faire monter un dossier ». Ma règle tient en deux phrases. À l’oral, entre nous, je ne corrige personne. À l’écrit, devant un client, prenons le mot que personne ne conteste.';

/** Act 9: the onboarding page on writing between the two offices. */
export const PAYS_TEXT =
  'Ardisque. Page d’accueil des nouvelles recrues, rubrique « Écrire entre Nantes et Québec ». Nos deux bureaux écrivent le même français, mais pas toujours avec les mêmes habitudes. Voici ce que nous savons, sources à l’appui, et ce que nous refusons de croire. Le tutoiement. Selon l’Office québécois de la langue française, dire tu dès la première rencontre est beaucoup plus fréquent au Québec que dans d’autres régions francophones, où ce tutoiement spontané peut être ressenti comme une familiarité déplacée. L’Office conseille, dans le doute, de vouvoyer jusqu’à ce que la question soit abordée. À Nantes, si un collègue de Québec vous tutoie dès le premier courriel, ce n’est pas un manque de respect ; à Québec, si un collègue de Nantes vous vouvoie longtemps, ce n’est pas de la froideur. Les formules. L’Office classe les amorces des formules de salutation en ordre croissant de déférence : « Recevez », « Veuillez recevoir », « Je vous prie de recevoir ». Pour un premier échange officiel, la formule longue reste la plus sûre, des deux côtés de l’Atlantique. Dans un courriel, une formule brève suffit souvent : « Meilleures salutations », « Bonne journée », « Au plaisir de vous lire ». Attention à « Cordialement » : l’Office le range parmi les formules à caractère plus personnel, alors que beaucoup de nos collègues de Nantes l’emploient comme une formule neutre. Le mot lui-même. « Courriel » est le terme recommandé au Québec par l’Office, et en France par la Commission générale de terminologie depuis 2003 ; à Nantes, on entend aussi « mail ». Ce que nous refusons de croire : qu’un pays serait direct et l’autre détourné. Nous n’avons trouvé aucune source sérieuse pour l’affirmer, et l’écart entre deux personnes de la même équipe est souvent plus grand. Lisez la personne, pas le passeport.';

/** Act 10: a slide plan with the director's comments. */
export const DIAPOS_TEXT =
  'Plan de la présentation d’Olivier Lapointe au comité de suivi de la salle Morencie, quinze minutes, avec les commentaires d’Isabelle Thériault. Diapositive 1, « Ordre du jour ». Commentaire : remplace-la par une phrase dite à voix haute : « Je vais vous montrer trois choses, et je garde dix minutes pour vos questions. » Diapositive 2, « Calendrier », un tableau de vingt dates. Commentaire : ce titre ne dit rien. Le comité veut savoir une seule chose : sa saison est-elle menacée ? Écris la réponse en titre : « Le report de deux semaines ne touche pas votre saison ». Garde trois dates dans le tableau et mets les autres dans le document que tu laisseras. Diapositive 3, « Tests », un graphique et huit puces. Commentaire : une diapositive, une idée. Le titre devient « Les erreurs de paiement ont baissé de 90 % en trois semaines », et tu supprimes les puces : tu les diras. Diapositive 4, « Prévente ». Commentaire : c’est le point qui inquiète Marc-André Dion ; annonce-le : « J’en viens au point qui vous concerne directement : la prévente. » Diapositive 5, « Questions ? ». Commentaire : avant les questions, résume en une phrase ce qu’il faut retenir. Deux remarques générales. Ne lis pas tes diapositives : le comité lit plus vite que tu ne parles, et il cesse de t’écouter. Garde le bas de chaque diapositive vide, comme le recommande l’Office québécois de la langue française : dans une salle, tout le monde ne le voit pas. Enfin, prépare un document à laisser après la séance ; c’est là que va le détail, pas sur l’écran.';

/** Act 11: the director's note before the question session. */
export const QUESTIONS_TEXT =
  'Note d’Isabelle Thériault à Olivier Lapointe, la veille du comité de suivi. Objet : la séance de questions. Olivier, demain, Monique Tardif, administratrice de la salle, sera là. Elle est exigeante, et elle a le droit de l’être : nous sommes en retard. Voici comment je te propose de recevoir les questions difficiles. La question hostile, d’abord, celle qui attaque plus qu’elle ne demande : « Vous êtes donc incapables de tenir une date ? » Ne réponds pas au ton, réponds au fond. Reconnais ce qui est juste, le retard ; donne la cause, en une phrase ; puis le plan. Et tiens ce qui est juste aussi : tu peux dire que l’équipe a travaillé, sans élever la voix. La question piège, ensuite, qui en contient deux, ou qui t’enferme dans un faux choix : sépare-les, et dis par laquelle tu commences. La question hors sujet, comme le prix du contrat de l’an prochain : elle relève d’une autre réunion ; propose de l’examiner après la séance, et note-la devant tout le monde, pour qu’on voie que tu ne l’esquives pas. La question confidentielle, enfin, sur nos autres clients ou sur nos marges : tu n’es pas en mesure d’y répondre, dis-le simplement, sans te justifier. Si tu n’as pas un chiffre, ne l’invente pas : promets-le par écrit, avec une heure, et tiens ta promesse. Ce que tu as appris pour l’exposé reste vrai : reformuler la question, prendre un instant avant de répondre, vérifier qu’on a répondu. Une dernière chose : ne commence jamais par « Bonne question ». Devant une question hostile, cela sonne comme une esquive. Bon courage, et appelle-moi en sortant.';

/** Act 12: the model, a refusal and a bad-news message in one. */
export const MODELE_TEXT =
  'Courriel envoyé le 2 décembre par Olivier Lapointe à Marc-André Dion. Objet : borne d’impression et nouvelle date de formation. Monsieur Dion, merci pour la réunion de vendredi et pour vos deux messages. Je vous réponds sur les deux points, en commençant par le plus urgent. La formation de votre équipe, prévue le 3 décembre, doit être déplacée au 10 décembre. Notre formatrice est malade cette semaine, et je préfère reporter plutôt que de vous envoyer une personne qui ne connaît pas votre salle. Concrètement, vos guichetiers continueront d’utiliser le guide imprimé jusqu’au 10 ; notre service d’assistance restera ouvert jusqu’à 22 h tous les soirs de spectacle d’ici là. La formation reste gratuite, comme convenu, et je vous propose d’y ajouter une heure consacrée aux forfaits de saison. Quant à la borne d’impression de billets dans le hall, nous ne pourrons pas la fournir sans frais. Elle ne fait pas partie du contrat, et son installation demande un technicien sur place pendant deux jours. Deux possibilités s’offrent à vous : la location d’une borne à partir de janvier, dont vous trouverez le tarif en pièce jointe, ou l’impression des billets à domicile, déjà comprise dans votre module, que nous pouvons mettre en avant dans vos courriels aux spectateurs. Je mesure que ces deux réponses ne sont pas celles que vous espériez, en plein début de saison. Je vous appellerai jeudi pour confirmer l’heure de la formation et, si vous le souhaitez, pour parler de la borne. Je vous prie d’agréer, Monsieur Dion, mes salutations distinguées. Olivier Lapointe, chef de produit, Ardisque.';

/** The task brief's fact sheet: the théâtre des Glaces. Every fact invented. */
export const GLACES_FICHE =
  'Fiche de faits, théâtre des Glaces, à Rimouski, client d’Ardisque (faits et chiffres inventés pour l’exercice). Destinataire : Sylvie Bouchard, directrice générale du théâtre ; vous vous vouvoyez. Tu es chargé·e de compte chez Ardisque. Contrat signé en septembre : une nouvelle billetterie et le transfert du fichier des 3 400 abonnés, prévu le 1er mars. Première nouvelle : le transfert est reporté au 15 mars. Cause : l’export fourni par l’ancien logiciel du théâtre est incomplet (l’historique de 2019 à 2021 manque) ; Ardisque n’a pas testé cet export assez tôt et a sous-estimé le temps de vérification. Conséquence : la campagne de réabonnement, prévue le 5 mars, devra commencer sur l’ancien système ou être décalée. Ce qu’Ardisque peut offrir : une personne pour aider l’équipe du théâtre à vérifier les fiches la semaine du 8 mars ; une séance de formation supplémentaire, gratuite ; un point d’étape écrit chaque lundi jusqu’au transfert. Deuxième sujet : Sylvie Bouchard demande d’ajouter, sans frais, une billetterie pour le festival d’été en plein air du théâtre (places debout, bracelets), en juillet. Cette fonction n’est pas au contrat. Le module « Événements extérieurs » existe : installation 1 200 $, disponible dès avril. Il sera aussi inclus sans frais dans la version standard de septembre, trop tard pour le festival de juillet.';

