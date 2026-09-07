// DELF B2 tout public blanc-02 — shared constants and the paper's topic draw.
//
// ── The draw ────────────────────────────────────────────────────────────────
//
// Eleven topics from TOPICS-delf-b2.md, one per slot, exported as TOPICS at the
// foot of this file. `topicLedgerViolations` checks them against blanc-01's, so
// rule 1 — no topic is reused across papers — is enforced rather than trusted.
//
//   CO-L  DELF-18  a newsroom that leads with its corrections        journalisme
//         DELF-21  do rankings measure teaching, or measure wealth   universite
//   CO-S  DELF-29  coursework she suspects the student did not write examens-et-diplomes
//         DELF-47  a village that shares one car                     entraide
//         DELF-54  an appointment length unchanged in twenty years   soins
//   CE-T  DELF-69  short-term lets, and regulation that drives them under  hebergement
//         DELF-77  wellbeing programmes and the conditions they leave     bien-etre
//   CE-O  DELF-90  a citizens' assembly, or a referendum?            gouvernement
//   PE    DELF-104 a tourist tax consultation                        tourisme
//   PO    DELF-112 keystroke monitoring called a safety measure      droit
//         DELF-119 benches nobody can lie down on                    questions-sociales
//
// ELEVEN DISTINCT THEMES, and none of them blanc-01's. The ledger only forbids
// reusing a topic ROW, so two papers could legitimately share a theme from
// different rows — but a pack whose papers feel like each other is a weaker
// pack, and the bank is large enough that avoiding it costs nothing here.
//
// The PE shape is a `debate` (a consultation contribution). blanc-01's was a
// `letter`, and TOPICS-delf-b2 asks the shape to rotate so no pack defaults to
// one form of writing.
//
// ── The shape is fixed, and it is NOT a ramp ────────────────────────────────
//
// Every comprehension item sits at B2. Three exercises per épreuve worth 9, 9
// and 7, and inside them questions worth 0.5 to 2.5 — the weighting IS the
// instrument (BLUEPRINT-delf-b2 §3). A paper that splits 8/8/9, or that weights
// every question the same, is not this format. delf/paper-rules.ts checks it.
//
// ── Integrity ───────────────────────────────────────────────────────────────
//
// Every proper noun below is invented (STANDARD-common §6.1). Every figure is
// either invented and attributed to an invented source, or a plain fact of the
// document itself. No real institution, business or person appears anywhere.

export const FORMAT = 'delf_b2' as const;
export const VARIANT = 'blanc-02';
export const FORMAT_VERSION = 'delf-b2-2026.09';
export const PAPER_ID = `paper.${FORMAT}.${VARIANT}.2`;

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

/** Corpus items this paper routes misses back to.
 *
 *  Flat, not banded: DELF has one level, so unlike TCF there is no band to key
 *  by. Every id below was read out of the database — `level='b2' and
 *  status='published'` — rather than guessed from the theme name, which is the
 *  same posture blanc-01 took and the reason its ids all resolve. */
export const ITEMS = {
  journalisme: ['fr.b2.journalisme.001', 'fr.b2.journalisme.002', 'fr.b2.journalisme.003', 'fr.b2.journalisme.004', 'fr.b2.journalisme.005', 'fr.b2.journalisme.006'],
  universite: ['fr.b2.universite.001', 'fr.b2.universite.002', 'fr.b2.universite.003', 'fr.b2.universite.004', 'fr.b2.universite.005', 'fr.b2.universite.006'],
  examensEtDiplomes: ['fr.b2.examens-et-diplomes.001', 'fr.b2.examens-et-diplomes.004', 'fr.b2.examens-et-diplomes.005', 'fr.b2.examens-et-diplomes.006', 'fr.b2.examens-et-diplomes.007', 'fr.b2.examens-et-diplomes.008'],
  entraide: ['fr.b2.entraide.001', 'fr.b2.entraide.002', 'fr.b2.entraide.003', 'fr.b2.entraide.004', 'fr.b2.entraide.005', 'fr.b2.entraide.006'],
  soins: ['fr.b2.soins.001', 'fr.b2.soins.002', 'fr.b2.soins.003', 'fr.b2.soins.004', 'fr.b2.soins.005', 'fr.b2.soins.006'],
  hebergement: ['fr.b2.hebergement.001', 'fr.b2.hebergement.002', 'fr.b2.hebergement.003', 'fr.b2.hebergement.004', 'fr.b2.hebergement.005', 'fr.b2.hebergement.006'],
  bienEtre: ['fr.b2.bien-etre.001', 'fr.b2.bien-etre.002', 'fr.b2.bien-etre.003', 'fr.b2.bien-etre.004', 'fr.b2.bien-etre.005', 'fr.b2.bien-etre.006'],
  gouvernement: ['fr.b2.gouvernement.001', 'fr.b2.gouvernement.002', 'fr.b2.gouvernement.003', 'fr.b2.gouvernement.004', 'fr.b2.gouvernement.005', 'fr.b2.gouvernement.006'],
  tourisme: ['fr.b2.tourisme.001', 'fr.b2.tourisme.002', 'fr.b2.tourisme.003', 'fr.b2.tourisme.004', 'fr.b2.tourisme.005', 'fr.b2.tourisme.006'],
  droit: ['fr.b2.droit.001', 'fr.b2.droit.002', 'fr.b2.droit.003', 'fr.b2.droit.004', 'fr.b2.droit.005', 'fr.b2.droit.006'],
  questionsSociales: ['fr.b2.questions-sociales.001', 'fr.b2.questions-sociales.002', 'fr.b2.questions-sociales.003', 'fr.b2.questions-sociales.004', 'fr.b2.questions-sociales.005', 'fr.b2.questions-sociales.006'],
} as const;

/**
 * The eleven bank rows this paper spends, in slot order: CO-L ×2, CO-S ×3,
 * CE-T ×2, CE-O ×1, PE ×1, PO ×2.
 *
 * Data rather than a comment, so `topicLedgerViolations` can enforce
 * TOPICS-delf-b2 rule 1 across the whole pack instead of trusting that whoever
 * authors paper 3 reads paper 1's and paper 2's headers.
 */
export const TOPICS = [
  'DELF-18', 'DELF-21',
  'DELF-29', 'DELF-47', 'DELF-54',
  'DELF-69', 'DELF-77',
  'DELF-90',
  'DELF-104',
  'DELF-112', 'DELF-119',
] as const;
