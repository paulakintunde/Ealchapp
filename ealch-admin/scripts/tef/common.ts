// What every TEF Canada paper carries, whichever paper it is.
//
// Extracted from blanc-01 when blanc-02 started, along with scoring.ts and
// finalise.ts. The reason is not tidiness: two papers with their own copies of
// the scoring table would eventually disagree, and then the same raw score
// would report different NCLC bands depending on which paper a candidate sat.
// The same goes for these notices — they are the disclaimers that say this is
// not an official paper, and a paper that quietly carried a different wording
// would be making a different claim.

export const FORMAT = 'tef_canada' as const;
export const FORMAT_VERSION = 'tef-canada-2025.09';

/** Carried by every closed task. The first two lines are required by
 *  STANDARD-common §7; the second is the scoring disclaimer. */
export const NOTES_CLOSED = [
  'Épreuve blanche rédigée par Ealch d’après le format publié. Ce n’est pas un sujet officiel et aucun extrait ne provient d’un sujet réel.',
  'Le barème brut vers échelle est une estimation experte, pas une équivalence officielle. Les seuils NCLC proviennent de la grille IRCC.',
];

export const NOTES_OPEN = [
  'Épreuve blanche rédigée par Ealch d’après le format publié. Ce n’est pas un sujet officiel.',
  'La grille de correction est notre propre construction : le centre d’examen ne publie pas le libellé de ses descripteurs.',
  'La correction est assistée par IA et s’appuie sur cette grille et sur cette réponse modèle. Le résultat est une estimation d’entraînement, jamais un score équivalent.',
];

/** `exam.tef_canada.<variant>.<taskType>.<seq>` */
export const taskIdFor = (variant: string) => (taskType: string, seq: string) =>
  `exam.${FORMAT}.${variant}.${taskType}.${seq}`;

export const paperIdFor = (variant: string, n: number) => `paper.${FORMAT}.${variant}.${n}`;

export const uniq = (...groups: readonly (readonly string[])[]) => [...new Set(groups.flat())];
