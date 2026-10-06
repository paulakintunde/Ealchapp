// DALF C1 blanc-02: shared constants and the paper's topic draw.
//
// ── The draw ────────────────────────────────────────────────────────────────
//
// Seven topics from TOPICS-dalf-c1.md, pre-assigned so this paper and blanc-01
// cannot overlap. Exported as TOPICS at the foot of this file, so
// `topicLedgerViolations` (scripts/dalf/paper-rules.ts) enforces rule 1 (no
// topic reused across DALF papers) rather than trusting it.
//
//   CO-L  DALF-02  an urbanist on the city at night: who it is lit,
//                  policed and timetabled for                        communaute
//   CO-S  DALF-12  advert: a cooperative lending tools by monthly
//                  subscription                                      economie
//         DALF-14  flash: a hospital trials live music in its
//                  waiting rooms                                     soins
//   CE    DALF-33  trust in expertise when experts disagree in
//                  public                                            methode-scientifique
//   PE    DALF-42  advertising in public space (dossier) and an
//                  open letter to the mayor on the billboard contract affaires
//   PO    DALF-51  L’art doit-il déranger ?                          musees
//         DALF-55  Vivre plus longtemps, est-ce vivre mieux ?        soins
//
// Six themes for seven rows: DALF-14 and DALF-55 are both `soins`, one a
// ninety-second flash and the other a speaking subject, so no candidate meets
// the same subject twice in one épreuve. The PO pair differs in theme
// (TOPICS-dalf-c1 rule 7: musees against soins), so the choice is real.
//
// Part 2 mixes genres as the bank asks: one advert, one flash.
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
// STANDARD-dalf-c1 §2): towns, outlets, institutes, hospitals, cooperatives,
// speakers. Every figure is invented and attributed to an invented source,
// and each is marked `INVENTED` in a comment beside the text that carries it.
// No real person, living or dead, is quoted, paraphrased or named. Nothing
// here comes from an FEI paper.

export const FORMAT = 'dalf_c1' as const;
export const VARIANT = 'blanc-02';
export const FORMAT_VERSION = 'dalf-c1-2026.10';
/** paper.<format>.<variant>.<paperNo>: the number is the paper's place in the
 *  pack, as on DELF blanc-02 (`paper.delf_b2.blanc-02.2`). */
export const PAPER_NO = 2;
export const PAPER_ID = `paper.${FORMAT}.${VARIANT}.${PAPER_NO}`;

export const taskId = (taskType: string, seq: string) =>
  `exam.${FORMAT}.${VARIANT}.${taskType}.${seq}`;

/** Carried by every closed task. The scoring disclaimer: pass/fail at 50/100
 *  with a floor of 5/25 per épreuve, no scale to convert to. */
export const NOTES_CLOSED = [
  'Épreuve blanche rédigée par Ealch d’après le format publié. Ce n’est pas un sujet officiel et aucun extrait ne provient d’un sujet réel.',
  'Le DALF C1 s’obtient à 50/100, avec un minimum de 5/25 à chacune des quatre épreuves. Un total suffisant ne compense pas une épreuve sous ce seuil.',
  'Réponses rédigées : l’orthographe et la syntaxe ne sont pas sanctionnées si le sens reste clair. Toute reformulation cohérente avec la question est acceptée. Les mots clés servent à valider vite ; une réponse qui les manque est relue, jamais comptée fausse d’office.',
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
  'DALF-02',
  'DALF-12', 'DALF-14',
  'DALF-33',
  'DALF-42',
  'DALF-51', 'DALF-55',
] as const;
