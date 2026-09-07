// DELF B2 tout public blanc-04 — shared constants and the paper's topic draw.
//
// ── The draw ────────────────────────────────────────────────────────────────
//
// Eleven topics from TOPICS-delf-b2.md, one per slot, exported as TOPICS at the
// foot of this file. `topicLedgerViolations` checks them against blanc-01's,
// blanc-02's and blanc-03's, so rule 1 — no topic reused across papers — is
// enforced rather than trusted.
//
//   CO-L  DELF-08  un fleuve doté d’une personnalité juridique          ecologie
//         DELF-02  des médiateurs de nuit, et ce qu’ils déplacent       voisinage
//   CO-S  DELF-39  le mot qui n’a pas d’équivalent                      decouvertes
//         DELF-49  un voyage scolaire annulé, et ce qu’on propose       rp-famille
//         DELF-57  le bureau qui a retiré ses horloges                  collegues
//   CE-T  DELF-76  la licence en quatre ans, vue comme un accident      universite
//         DELF-81  ce qu’on attend d’excuses officielles               conflits-reconciliation
//   CE-O  DELF-89  faut-il plafonner le nombre de visiteurs ?           tourisme
//   PE    DELF-105 une clinique remplace sa ligne par une application   systeme-de-sante
//   PO    DELF-115 un journal paie ses sources et le dit                journalisme
//         DELF-117 un propriétaire rénove jusqu’à vider l’immeuble      hebergement
//
// ── Eleven distinct themes, and no longer eleven UNUSED ones ────────────────
//
// blanc-03 drew eleven themes no earlier paper had touched. That is not
// available here and never was: the bank's 124 rows cover 41 themes, three
// papers have spent 33 of them, and eight remain. A fourth paper of eleven
// unused themes cannot exist.
//
// So the constraint drops back to what the ledger actually asks — no topic ROW
// twice — plus the one this paper can still keep: eleven DISTINCT themes within
// itself, so no candidate meets the same subject twice in one sitting. Six of
// the eleven below are themes an earlier paper also used, through different
// rows and different documents.
//
// ── The PE shape ────────────────────────────────────────────────────────────
//
// letter (blanc-01), debate (blanc-02), article (blanc-03), and letter again
// here. Three shapes over five papers means one repeats, and the letter is the
// one that repeats furthest apart. The situations share nothing else: blanc-01
// writes as a residents' representative to a council about a garden; this
// writes as a patients' advocate to a clinic director about a phone line.
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
export const VARIANT = 'blanc-04';
export const FORMAT_VERSION = 'delf-b2-2026.09';
export const PAPER_ID = `paper.${FORMAT}.${VARIANT}.4`;

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
 *  the theme name. `systeme-de-sante` is why: its published rows are 003, 005,
 *  006, 008, 009, 010, 012 and 016, and a paper that assumed 001-006 would cite
 *  three ids that do not exist. */
export const ITEMS = {
  ecologie: ['fr.b2.ecologie.001', 'fr.b2.ecologie.002', 'fr.b2.ecologie.003', 'fr.b2.ecologie.004', 'fr.b2.ecologie.005', 'fr.b2.ecologie.006'],
  voisinage: ['fr.b2.voisinage.001', 'fr.b2.voisinage.002', 'fr.b2.voisinage.003', 'fr.b2.voisinage.004', 'fr.b2.voisinage.005', 'fr.b2.voisinage.006'],
  decouvertes: ['fr.b2.decouvertes.001', 'fr.b2.decouvertes.002', 'fr.b2.decouvertes.003', 'fr.b2.decouvertes.004', 'fr.b2.decouvertes.005', 'fr.b2.decouvertes.006'],
  rpFamille: ['fr.b2.rp-famille.001', 'fr.b2.rp-famille.002', 'fr.b2.rp-famille.003', 'fr.b2.rp-famille.004', 'fr.b2.rp-famille.005', 'fr.b2.rp-famille.006'],
  collegues: ['fr.b2.collegues.001', 'fr.b2.collegues.002', 'fr.b2.collegues.003', 'fr.b2.collegues.004', 'fr.b2.collegues.005', 'fr.b2.collegues.006'],
  universite: ['fr.b2.universite.001', 'fr.b2.universite.002', 'fr.b2.universite.003', 'fr.b2.universite.004', 'fr.b2.universite.005', 'fr.b2.universite.006'],
  reconciliation: ['fr.b2.conflits-reconciliation.001', 'fr.b2.conflits-reconciliation.002', 'fr.b2.conflits-reconciliation.003', 'fr.b2.conflits-reconciliation.004', 'fr.b2.conflits-reconciliation.005', 'fr.b2.conflits-reconciliation.006'],
  tourisme: ['fr.b2.tourisme.001', 'fr.b2.tourisme.002', 'fr.b2.tourisme.003', 'fr.b2.tourisme.004', 'fr.b2.tourisme.005', 'fr.b2.tourisme.006'],
  santeSysteme: ['fr.b2.systeme-de-sante.003', 'fr.b2.systeme-de-sante.005', 'fr.b2.systeme-de-sante.006', 'fr.b2.systeme-de-sante.008', 'fr.b2.systeme-de-sante.009', 'fr.b2.systeme-de-sante.010'],
  journalisme: ['fr.b2.journalisme.001', 'fr.b2.journalisme.002', 'fr.b2.journalisme.003', 'fr.b2.journalisme.004', 'fr.b2.journalisme.005', 'fr.b2.journalisme.006'],
  hebergement: ['fr.b2.hebergement.001', 'fr.b2.hebergement.002', 'fr.b2.hebergement.003', 'fr.b2.hebergement.004', 'fr.b2.hebergement.005', 'fr.b2.hebergement.006'],
} as const;

/**
 * The eleven bank rows this paper spends, in slot order: CO-L ×2, CO-S ×3,
 * CE-T ×2, CE-O ×1, PE ×1, PO ×2.
 */
export const TOPICS = [
  'DELF-08', 'DELF-02',
  'DELF-39', 'DELF-49', 'DELF-57',
  'DELF-76', 'DELF-81',
  'DELF-89',
  'DELF-105',
  'DELF-115', 'DELF-117',
] as const;
