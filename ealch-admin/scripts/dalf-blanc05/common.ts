// DALF C1 blanc-05: shared constants and the paper's topic draw.
//
// ── The draw ────────────────────────────────────────────────────────────────
//
// Seven topics from TOPICS-dalf-c1.md, pre-assigned so this paper cannot
// overlap blanc-01 to blanc-04. Exported as TOPICS at the foot of this file, so
// `topicLedgerViolations` (scripts/dalf/paper-rules.ts) enforces rule 1 (no
// topic reused across DALF papers) across all five papers in paper.test.ts.
//
//   CO-L  DALF-05  a restorer on repairing a damaged work invisibly or
//                  letting the damage show                          musees
//   CO-S  DALF-18  chronicle: the unwritten etiquette of voice
//                  messages                                          rp-etiquette
//         DALF-19  flash: a court rules on who keeps the dog after a
//                  separation                                        droit
//   CE    DALF-36  can school teach creativity, or only avoid
//                  stifling it                                       examens-et-diplomes
//   PE    DALF-45  waste in mass catering (dossier) and a proposal
//                  from a student representative to a university
//                  catering service                                  universite
//   PO    DALF-58  Peut-on confier des décisions à des machines ?    ethique
//         DALF-60  La compétition a-t-elle sa place à l’école ?      examens-et-diplomes
//
// Six themes for seven rows. DALF-36 and DALF-60 are both
// `examens-et-diplomes` (the reading text and one speaking subject): never
// twice in one épreuve, the pattern blanc-02 and blanc-04 accepted. The PO pair
// differs in theme (TOPICS-dalf-c1 rule 7: ethique against
// examens-et-diplomes), so the choice is real.
//
// Part 2 mixes genres as the bank asks: one chronicle, one flash.
//
// ── Steering clear of the excluded topics ───────────────────────────────────
//
// DALF-58 (decisions given to machines) sits next to the FEI demo topic
// « automation shrinking work ». The dossier and the débat never discuss jobs
// lost to machines: their examples are the allocation of social housing, a
// pilot's instruments and a bank's loan software, and the question is who is
// responsible for a decision, not who keeps a job. DALF-05 (restoration) says
// nothing of species, nature or languages. DALF-36 never touches which
// languages schools teach.
//
// ── Integrity ───────────────────────────────────────────────────────────────
//
// Every proper noun in this paper is invented (STANDARD-common §6.1,
// STANDARD-dalf-c1 §2): towns, outlets, institutes, schools, the court, the
// association, speakers. Each invented place name was web-checked on
// 2026-10-06 against real French, Belgian, Swiss and Québec places, and the
// near-misses were dropped (Ravenac/Rouvenac, Coutrelles/Couvrelles,
// Valdrenne/La Drenne, Vauclérac/Vauclerc, Lambrésy/Lambres,
// Esquerdal/Esquerdes, Courvalle/Curvalle). Kept: Quérimont, Morvesse,
// Brasquelle, Mervanges, Sarnelle, Saint-Ivrance, Ostival. Every figure is
// invented and attributed to an invented source, and each is marked
// `INVENTED` in a comment beside the text that carries it. No real person,
// living or dead, is quoted, paraphrased or named. Nothing here comes from an
// FEI paper.

export const FORMAT = 'dalf_c1' as const;
export const VARIANT = 'blanc-05';
export const FORMAT_VERSION = 'dalf-c1-2026.10';
/** paper.<format>.<variant>.<paperNo>: the number is the paper's place in the
 *  pack, as on blanc-01 to blanc-04. */
export const PAPER_NO = 5;
export const PAPER_ID = `paper.${FORMAT}.${VARIANT}.${PAPER_NO}`;

export const taskId = (taskType: string, seq: string) =>
  `exam.${FORMAT}.${VARIANT}.${taskType}.${seq}`;

/** Carried by every closed task. The scoring disclaimer: pass/fail at 50/100
 *  with a floor of 5/25 per épreuve, no scale to convert to. */
export const NOTES_CLOSED = [
  'Épreuve blanche rédigée par Ealch d’après le format publié. Ce n’est pas un sujet officiel et aucun extrait ne provient d’un sujet réel.',
  'Le DALF C1 s’obtient à 50/100, avec un minimum de 5/25 à chacune des quatre épreuves. Un total suffisant ne compense pas une épreuve sous ce seuil.',
  'Réponses rédigées : l’orthographe et la syntaxe ne sont pas sanctionnées si le sens reste clair. Toute reformulation cohérente avec la question est acceptée. Chaque réponse rédigée est relue par le correcteur automatique ; les mots clés ne servent que lorsque cette relecture est impossible.',
  'Vrai ou faux justifié : les points exigent à la fois le bon choix et une citation du texte qui le justifie. Sinon, la question vaut zéro.',
];

export const NOTES_OPEN = [
  'Épreuve blanche rédigée par Ealch d’après le format publié. Ce n’est pas un sujet officiel.',
  'La grille de correction est notre propre construction : le centre d’examen publie ses grilles et ses descripteurs, et les nôtres sont rédigés séparément, sur les mêmes trois niveaux (en dessous du niveau visé, C1, C1+).',
  'La correction est assistée par IA et s’appuie sur cette grille et sur cette réponse modèle. Le résultat est une estimation d’entraînement, jamais un score équivalent.',
];

/**
 * The seven bank rows this paper spends, in slot order: CO-L, CO-S ×2, CE, PE,
 * PO ×2. Data rather than a comment, so the ledger is enforced across the pack.
 */
export const TOPICS = [
  'DALF-05',
  'DALF-18', 'DALF-19',
  'DALF-36',
  'DALF-45',
  'DALF-58', 'DALF-60',
] as const;
