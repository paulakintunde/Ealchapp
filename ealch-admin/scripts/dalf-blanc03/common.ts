// DALF C1 blanc-03: shared constants and the paper's topic draw.
//
// ── The draw ────────────────────────────────────────────────────────────────
//
// Seven topics from TOPICS-dalf-c1.md, pre-assigned so this paper cannot
// overlap blanc-01 or blanc-02. Exported as TOPICS at the foot of this file, so
// `topicLedgerViolations` (scripts/dalf/paper-rules.ts) enforces rule 1 (no
// topic reused across DALF papers) rather than trusting it.
//
//   CO-L  DALF-03  an economist on "free" services paid for with
//                  attention and data, and whether the price can be
//                  shown                                             reseaux-sociaux
//   CO-S  DALF-13  chronicle: night trains coming back, and who
//                  actually takes them                               tourisme
//         DALF-15  poll: trust in weather forecasts after a storm
//                  nobody predicted                                  rp-meteo-nature
//   CE    DALF-34  tourism that wears out what it comes to see, and
//                  whether the traveller or the destination is
//                  responsible                                       tourisme
//   PE    DALF-43  citizen science (dossier) and an opinion column
//                  by an amateur observer to a science magazine's
//                  readers on crediting volunteers                   recherche
//   PO    DALF-52  Le sport professionnel est-il encore du sport ?   rp-loisirs
//         DALF-56  Une tradition doit-elle changer pour survivre ?   traditions
//
// DALF-13 and DALF-34 share the `tourisme` theme, but one is a ninety-second
// chronicle about who rides a night train and the other a reading text about
// the wear tourism does to places; they sit in different épreuves, and no idea
// is shared between them. The PO pair differs in theme (rp-loisirs against
// traditions, TOPICS rule 7), so the choice is real.
//
// Part 2 mixes genres as the bank asks: one chronicle, one poll.
//
// ── Steering clear of the excluded topics ───────────────────────────────────
//
// TOPICS-dalf-c1 excludes the FEI demo's topics « nor approached sideways ».
// Three places in this paper sit near one, and each was steered:
//   DALF-03  an economist on free services could drift into « measuring
//            national wealth ». The interview never mentions any national
//            accounting; it prices one person's time.
//   DALF-43  most citizen science is species counting, which is the excluded
//            biodiversity theme. The dossier uses air-quality sensors and
//            archive transcription only; no animal or plant is named.
//   DALF-56  a tradition subject invites a regional language. The dossier is a
//            procession and a craft workshop; no language is mentioned.
//
// ── The shape is fixed, and it is NOT a ramp ────────────────────────────────
//
// Every comprehension item sits at C1. CO is 10 + 7 questions worth 18 + 7,
// CE is 12 questions worth 25, in three answer modes (MCQ with three options,
// short typed answer, vrai/faux with a copied quote). dalf/paper-rules.ts
// checks all of it; paper.test.ts asserts the list is empty.
//
// ── Integrity ───────────────────────────────────────────────────────────────
//
// Every proper noun in this paper is invented (STANDARD-common §6.1,
// STANDARD-dalf-c1 §2): towns, outlets, institutes, companies, speakers,
// authors. Every figure is invented and attributed to an invented source, and
// each is marked `INVENTED` in a comment beside the text that carries it. No
// real person, living or dead, is quoted, paraphrased or named. Nothing here
// comes from an FEI paper.

export const FORMAT = 'dalf_c1' as const;
export const VARIANT = 'blanc-03';
export const FORMAT_VERSION = 'dalf-c1-2026.10';
/** paper.<format>.<variant>.<paperNo>: the number is the paper's place in the
 *  pack, as on blanc-01 (`.1`) and blanc-02 (`.2`). */
export const PAPER_NO = 3;
export const PAPER_ID = `paper.${FORMAT}.${VARIANT}.${PAPER_NO}`;

export const taskId = (taskType: string, seq: string) =>
  `exam.${FORMAT}.${VARIANT}.${taskType}.${seq}`;

/** Carried by every closed task. The scoring disclaimer: pass/fail at 50/100
 *  with a floor of 5/25 per épreuve, no scale to convert to. */
export const NOTES_CLOSED = [
  'Épreuve blanche rédigée par Ealch d’après le format publié. Ce n’est pas un sujet officiel et aucun extrait ne provient d’un sujet réel.',
  'Le DALF C1 s’obtient à 50/100, avec un minimum de 5/25 à chacune des quatre épreuves. Un total suffisant ne compense pas une épreuve sous ce seuil.',
  'Réponses rédigées : l’orthographe et la syntaxe ne comptent pas tant que le sens reste clair. Toute reformulation cohérente avec la question est acceptée ; les mots clés valident d’abord, le correcteur IA tranche les cas incertains.',
  'Vrai ou faux justifié : les points exigent à la fois le bon choix et une citation exacte du passage qui le justifie.',
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
 * The seven bank rows this paper spends, in slot order: CO-L, CO-S ×2, CE, PE,
 * PO ×2. Data rather than a comment, so the ledger is enforced across the pack.
 */
export const TOPICS = [
  'DALF-03',
  'DALF-13', 'DALF-15',
  'DALF-34',
  'DALF-43',
  'DALF-52', 'DALF-56',
] as const;
