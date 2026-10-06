// DALF C1 blanc-01 — shared constants and the paper's topic draw.
//
// ── The draw ────────────────────────────────────────────────────────────────
//
// Seven topics from TOPICS-dalf-c1.md, pre-assigned so that paper 2's author
// does not overlap, exported as TOPICS at the foot of this file and read by
// `topicLedgerViolations` (scripts/dalf/paper-rules.ts).
//
//   CO-L  DALF-01  remembering is reconstructing; eyewitness evidence   faits-et-procedures
//   CO-S  DALF-10  a city's first year at 30 km/h (flash)               questions-sociales
//         DALF-11  a local tax for a tram line, by age group (poll)     gouvernement
//   CE    DALF-32  collective forgetting and commemoration              conflits-reconciliation
//   PE    DALF-41  the connected home; essai to the landlord            rp-technologie
//   PO    DALF-50  Peut-on encore vivre sans téléphone ?                rp-technologie
//         DALF-53  Faut-il juger une œuvre indépendamment de son auteur ?  litterature
//
// DALF-41 and DALF-50 share the `rp-technologie` theme, but they sit in
// different épreuves (PE and PO). TOPICS rule 7 asks only that the two PO
// subjects drawn together differ in theme, which DALF-50 and DALF-53 do.
//
// ── The shape is fixed ──────────────────────────────────────────────────────
//
// One level (c1), no ramp. CO 10 + 7 questions worth 18 + 7, CE 12 questions
// worth 25, three answer kinds (MCQ with three options, short typed answer,
// vrai/faux with a copied quote). See BLUEPRINT-dalf-c1 §3-4.
//
// ── Integrity ───────────────────────────────────────────────────────────────
//
// Every proper noun in this paper is invented (STANDARD-common §6.1,
// STANDARD-dalf-c1 §2): people, towns, outlets, institutes, companies. Every
// figure is invented and attributed to an invented source; each one is marked
// `INVENTED` in a comment beside the text that carries it. No FEI text, topic
// or document was opened for content.

export const FORMAT = 'dalf_c1' as const;
export const VARIANT = 'blanc-01';
export const FORMAT_VERSION = 'dalf-c1-2026.10';
export const PAPER_ID = `paper.${FORMAT}.${VARIANT}.1`;

export const taskId = (taskType: string, seq: string) =>
  `exam.${FORMAT}.${VARIANT}.${taskType}.${seq}`;

/** Carried by every closed task. The DALF is pass/fail at 50/100 with a floor
 *  of 5/25 per épreuve, like the DELF; no scale to convert to. */
export const NOTES_CLOSED = [
  'Épreuve blanche rédigée par Ealch d’après le format publié. Ce n’est pas un sujet officiel et aucun extrait ne provient d’un sujet réel.',
  'Le DALF C1 s’obtient à 50/100, avec un minimum de 5/25 à chacune des quatre épreuves. Un total suffisant ne compense pas une épreuve sous ce seuil.',
  'Réponses rédigées : l’orthographe et la syntaxe ne comptent pas tant que le sens reste clair. Toute reformulation cohérente avec la question est acceptée ; les mots-clés valident d’abord, le correcteur IA tranche les cas incertains.',
  'Vrai/faux justifié : les points exigent à la fois le bon choix et une citation exacte du passage qui le justifie.',
];

export const NOTES_OPEN = [
  'Épreuve blanche rédigée par Ealch d’après le format publié. Ce n’est pas un sujet officiel.',
  'La grille de correction est notre propre construction : l’organisme certificateur publie ses grilles et ses descripteurs, et les nôtres sont rédigés séparément, sur les trois niveaux « en dessous du niveau visé / C1 / C1+ ».',
  'La correction est assistée par IA et s’appuie sur cette grille et sur cette réponse modèle. Le résultat est une estimation d’entraînement, jamais un score équivalent.',
];

/** Corpus items a missed closed task routes back to. The C1 convention
 *  (exam-c1-targets.ts): CE re-queues c1.20's rule cards, CO c1.21's. */
export { C1_CE_TARGETS, C1_CO_TARGETS } from '../exam-c1-targets.ts';

/** The C1 speech rate the length bands assume (STANDARD-common §2). */
export const WPM = 175;

/**
 * The seven bank rows this paper spends, in slot order: CO-L ×1, CO-S ×2,
 * CE ×1, PE ×1, PO ×2.
 */
export const TOPICS = [
  'DALF-01',
  'DALF-10', 'DALF-11',
  'DALF-32',
  'DALF-41',
  'DALF-50', 'DALF-53',
] as const;
