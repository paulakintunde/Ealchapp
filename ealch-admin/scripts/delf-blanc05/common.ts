// DELF B2 tout public blanc-05 — shared constants and the paper's topic draw.
//
// The last paper of the pack. Fifty-five bank rows spent across five papers,
// sixty-nine left, which is the margin TOPICS-delf-b2 was sized for.
//
// ── The draw ────────────────────────────────────────────────────────────────
//
//   CO-L  DELF-15  un budget fixé par un jury de citoyens                gouvernement
//         DELF-10  garder en librairie un livre qui ne se vend pas       litterature
//   CO-S  DELF-33  vendre en direct, et ce que faisait l’intermédiaire   economie
//         DELF-44  la piste qui s’arrête là où elle servirait            rp-quotidien
//         DELF-51  le diplôme qu’on exige et qu’on ne vérifie jamais     recherche-emploi
//   CE-T  DELF-71  le droit à l’oubli contre l’archive                   droit
//         DELF-79  enseigner avec ce que les étudiants contestent        ethique
//   CE-O  DELF-88  les réseaux aident-ils ou vident-ils l’info locale ?  reseaux-sociaux
//   PE    DELF-101 interdire le courriel interne après l’heure ?         rp-travail-etudes
//   PO    DELF-114 un musée fait payer une collection qu’on lui a donnée musees
//         DELF-122 un test de langue pour un titre de séjour             immigration-et-citoyennete
//
// Eleven distinct themes within the paper, which is the constraint that
// survived. blanc-03's stricter one — eleven themes no earlier paper had
// touched — stopped being possible at the fourth paper: the bank covers 41
// themes and four papers spend more than 41 between them.
//
// ── The PE shape, and the pack's final tally ────────────────────────────────
//
// debate. Across five papers: letter (blanc-01, blanc-04), debate (blanc-02,
// blanc-05), article (blanc-03). Two, two and one, which is as even as three
// shapes divide into five, and no two papers with the same shape are adjacent.
//
// ── The shape is fixed, and it is NOT a ramp ────────────────────────────────
//
// Every comprehension item sits at B2. Three exercises per épreuve worth 9, 9
// and 7, and inside them questions worth 0.5 to 2.5 — the weighting IS the
// instrument (BLUEPRINT-delf-b2 §3). delf/paper-rules.ts checks it.
//
// ── Integrity ───────────────────────────────────────────────────────────────
//
// Every proper noun below is invented (STANDARD-common §6.1). Every figure is
// either invented and attributed to an invented source, or a plain fact of the
// document itself. No real institution, business or person appears anywhere.

export const FORMAT = 'delf_b2' as const;
export const VARIANT = 'blanc-05';
export const FORMAT_VERSION = 'delf-b2-2026.09';
export const PAPER_ID = `paper.${FORMAT}.${VARIANT}.5`;

export const taskId = (taskType: string, seq: string) =>
  `exam.${FORMAT}.${VARIANT}.${taskType}.${seq}`;

/** Carried by every closed task. STANDARD-common §7, plus the scoring
 *  disclaimer. DELF is pass/fail at 50/100 with a floor of 5/25 per épreuve —
 *  there is no scale to convert to, unlike TCF's NCLC or TEF's levels. */
export const NOTES_CLOSED = [
  'Épreuve blanche rédigée par Ealch d’après le format publié. Ce n’est pas un sujet officiel et aucun extrait ne provient d’un sujet réel.',
  'Le DELF s’obtient à 50/100, avec un minimum de 5/25 à chacune des quatre épreuves. Un total suffisant ne compense pas une épreuve sous ce seuil.',
];

export const NOTES_OPEN = [
  'Épreuve blanche rédigée par Ealch d’après le format publié. Ce n’est pas un sujet officiel.',
  'La grille de correction est notre propre construction : le centre d’examen publie ses descripteurs, et les nôtres sont rédigés séparément.',
  'La correction est assistée par IA et s’appuie sur cette grille et sur cette réponse modèle. Le résultat est une estimation d’entraînement, jamais un score équivalent.',
];

export const uniq = (...groups: readonly (readonly string[])[]) => [...new Set(groups.flat())];

/** Corpus items this paper routes misses back to. Every id was read out of the
 *  database — `level='b2' and status='published'` — rather than guessed from
 *  the theme name. Two themes are why: `recherche-emploi` publishes 001, 009,
 *  011, 018, 019 and 027, and `immigration-et-citoyennete` publishes 004, 007,
 *  013, 014, 016 and 017. A paper that assumed 001-006 would cite nine ids that
 *  do not exist between them. */
export const ITEMS = {
  gouvernement: ['fr.b2.gouvernement.001', 'fr.b2.gouvernement.002', 'fr.b2.gouvernement.003', 'fr.b2.gouvernement.004', 'fr.b2.gouvernement.005', 'fr.b2.gouvernement.006'],
  litterature: ['fr.b2.litterature.001', 'fr.b2.litterature.002', 'fr.b2.litterature.003', 'fr.b2.litterature.004', 'fr.b2.litterature.005', 'fr.b2.litterature.006'],
  economie: ['fr.b2.economie.001', 'fr.b2.economie.002', 'fr.b2.economie.003', 'fr.b2.economie.004', 'fr.b2.economie.005', 'fr.b2.economie.006'],
  rpQuotidien: ['fr.b2.rp-quotidien.001', 'fr.b2.rp-quotidien.002', 'fr.b2.rp-quotidien.003', 'fr.b2.rp-quotidien.004', 'fr.b2.rp-quotidien.005', 'fr.b2.rp-quotidien.006'],
  rechercheEmploi: ['fr.b2.recherche-emploi.001', 'fr.b2.recherche-emploi.009', 'fr.b2.recherche-emploi.011', 'fr.b2.recherche-emploi.018', 'fr.b2.recherche-emploi.019', 'fr.b2.recherche-emploi.027'],
  droit: ['fr.b2.droit.001', 'fr.b2.droit.002', 'fr.b2.droit.003', 'fr.b2.droit.004', 'fr.b2.droit.005', 'fr.b2.droit.006'],
  ethique: ['fr.b2.ethique.001', 'fr.b2.ethique.002', 'fr.b2.ethique.003', 'fr.b2.ethique.004', 'fr.b2.ethique.005', 'fr.b2.ethique.006'],
  reseauxSociaux: ['fr.b2.reseaux-sociaux.001', 'fr.b2.reseaux-sociaux.002', 'fr.b2.reseaux-sociaux.003', 'fr.b2.reseaux-sociaux.004', 'fr.b2.reseaux-sociaux.005', 'fr.b2.reseaux-sociaux.006'],
  travailEtudes: ['fr.b2.rp-travail-etudes.001', 'fr.b2.rp-travail-etudes.002', 'fr.b2.rp-travail-etudes.003', 'fr.b2.rp-travail-etudes.004', 'fr.b2.rp-travail-etudes.005', 'fr.b2.rp-travail-etudes.006'],
  musees: ['fr.b2.musees.001', 'fr.b2.musees.002', 'fr.b2.musees.003', 'fr.b2.musees.004', 'fr.b2.musees.005', 'fr.b2.musees.006'],
  immigration: ['fr.b2.immigration-et-citoyennete.004', 'fr.b2.immigration-et-citoyennete.007', 'fr.b2.immigration-et-citoyennete.013', 'fr.b2.immigration-et-citoyennete.014', 'fr.b2.immigration-et-citoyennete.016', 'fr.b2.immigration-et-citoyennete.017'],
} as const;

/**
 * The eleven bank rows this paper spends, in slot order: CO-L ×2, CO-S ×3,
 * CE-T ×2, CE-O ×1, PE ×1, PO ×2.
 */
export const TOPICS = [
  'DELF-15', 'DELF-10',
  'DELF-33', 'DELF-44', 'DELF-51',
  'DELF-71', 'DELF-79',
  'DELF-88',
  'DELF-101',
  'DELF-114', 'DELF-122',
] as const;
