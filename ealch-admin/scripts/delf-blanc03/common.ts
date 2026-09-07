// DELF B2 tout public blanc-03 — shared constants and the paper's topic draw.
//
// ── The draw ────────────────────────────────────────────────────────────────
//
// Eleven topics from TOPICS-delf-b2.md, one per slot, exported as TOPICS at the
// foot of this file. `topicLedgerViolations` checks them against blanc-01's and
// blanc-02's, so rule 1 — no topic reused across papers — is enforced rather
// than trusted.
//
//   CO-L  DELF-04  un musée qui restitue, et ce que « provenance » règle   musees
//         DELF-06  la dernière agence d’un village, et le distributeur     argent-quotidien
//   CO-S  DELF-35  une rue rebaptisée, et le vote qui a suivi              traditions
//         DELF-43  un résultat non reproduit, publié quand même            methode-scientifique
//         DELF-46  un commerçant qui ne lit plus ses avis                  reseaux-sociaux
//   CE-T  DELF-70  la relecture par les pairs, défendue par ses défauts    recherche
//         DELF-74  les tests de naturalisation : ce qu’ils mesurent        immigration-et-citoyennete
//   CE-O  DELF-85  le sport à l’école doit-il rester obligatoire ?         rp-loisirs
//   PE    DELF-106 une chronique sur les langues régionales ; répondre     quebec-et-francophonie
//   PO    DELF-118 un festival financé par une entreprise critiquée        affaires
//         DELF-124 une bibliothèque retire un livre et publie les plaintes litterature
//
// ELEVEN DISTINCT THEMES, and none used by blanc-01 or blanc-02. Across three
// papers that is thirty-three rows and thirty-three themes, no repeats
// anywhere. The ledger only forbids reusing a topic ROW, so this is stricter
// than it has to be — but the bank has 124 rows and the pack reads better when
// its papers do not circle the same subjects.
//
// The PE shape rotates again: blanc-01 wrote a letter, blanc-02 a consultation
// contribution, and this one is an `article` replying to a published column.
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
export const VARIANT = 'blanc-03';
export const FORMAT_VERSION = 'delf-b2-2026.09';
export const PAPER_ID = `paper.${FORMAT}.${VARIANT}.3`;

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
 *  the theme name. */
export const ITEMS = {
  musees: ['fr.b2.musees.001', 'fr.b2.musees.002', 'fr.b2.musees.003', 'fr.b2.musees.004', 'fr.b2.musees.005', 'fr.b2.musees.006'],
  argentQuotidien: ['fr.b2.argent-quotidien.001', 'fr.b2.argent-quotidien.002', 'fr.b2.argent-quotidien.003', 'fr.b2.argent-quotidien.004', 'fr.b2.argent-quotidien.005', 'fr.b2.argent-quotidien.006'],
  traditions: ['fr.b2.traditions.001', 'fr.b2.traditions.002', 'fr.b2.traditions.003', 'fr.b2.traditions.004', 'fr.b2.traditions.005', 'fr.b2.traditions.006'],
  methodeScientifique: ['fr.b2.methode-scientifique.001', 'fr.b2.methode-scientifique.002', 'fr.b2.methode-scientifique.003', 'fr.b2.methode-scientifique.004', 'fr.b2.methode-scientifique.005', 'fr.b2.methode-scientifique.006'],
  reseauxSociaux: ['fr.b2.reseaux-sociaux.001', 'fr.b2.reseaux-sociaux.002', 'fr.b2.reseaux-sociaux.003', 'fr.b2.reseaux-sociaux.004', 'fr.b2.reseaux-sociaux.005', 'fr.b2.reseaux-sociaux.006'],
  recherche: ['fr.b2.recherche.001', 'fr.b2.recherche.002', 'fr.b2.recherche.003', 'fr.b2.recherche.004', 'fr.b2.recherche.005', 'fr.b2.recherche.006'],
  immigration: ['fr.b2.immigration-et-citoyennete.004', 'fr.b2.immigration-et-citoyennete.007', 'fr.b2.immigration-et-citoyennete.013', 'fr.b2.immigration-et-citoyennete.014', 'fr.b2.immigration-et-citoyennete.016', 'fr.b2.immigration-et-citoyennete.017'],
  rpLoisirs: ['fr.b2.rp-loisirs.001', 'fr.b2.rp-loisirs.002', 'fr.b2.rp-loisirs.003', 'fr.b2.rp-loisirs.004', 'fr.b2.rp-loisirs.005', 'fr.b2.rp-loisirs.006'],
  quebec: ['fr.b2.quebec-et-francophonie.003', 'fr.b2.quebec-et-francophonie.006', 'fr.b2.quebec-et-francophonie.007', 'fr.b2.quebec-et-francophonie.008', 'fr.b2.quebec-et-francophonie.009', 'fr.b2.quebec-et-francophonie.010'],
  affaires: ['fr.b2.affaires.001', 'fr.b2.affaires.002', 'fr.b2.affaires.003', 'fr.b2.affaires.004', 'fr.b2.affaires.005', 'fr.b2.affaires.006'],
  litterature: ['fr.b2.litterature.001', 'fr.b2.litterature.002', 'fr.b2.litterature.003', 'fr.b2.litterature.004', 'fr.b2.litterature.005', 'fr.b2.litterature.006'],
} as const;

/**
 * The eleven bank rows this paper spends, in slot order: CO-L ×2, CO-S ×3,
 * CE-T ×2, CE-O ×1, PE ×1, PO ×2.
 */
export const TOPICS = [
  'DELF-04', 'DELF-06',
  'DELF-35', 'DELF-43', 'DELF-46',
  'DELF-70', 'DELF-74',
  'DELF-85',
  'DELF-106',
  'DELF-118', 'DELF-124',
] as const;
