// DELF B2 tout public blanc-01 — shared constants and the paper's topic draw.
//
// ── The draw ────────────────────────────────────────────────────────────────
//
// Eleven topics from TOPICS-delf-b2.md, one per slot. Recorded here by id so a
// later paper can avoid them; there is no planner yet because a planner earns
// its keep when paper 2 has to avoid paper 1, and building one for a single
// paper is how the TCF topic ledger came to be implemented three times in ways
// that disagreed.
//
//   CO-L  DELF-01  four-day week: productivity, or who volunteered   rp-travail-etudes
//         DELF-05  ranking hospitals, or teaching them to select     systeme-de-sante
//   CO-S  DELF-25  a library extends its hours, and who came         communaute
//         DELF-31  a repair that took longer than the build          rp-technologie
//         DELF-40  a lake reopened for swimming after thirty years   rp-meteo-nature
//   CE-T  DELF-59  repair cafés: less waste, or a shift of blame     ecologie
//         DELF-66  a profession that abolished its entrance exam     recherche-emploi
//   CE-O  DELF-83  should a city make public transport free?         rp-voyage
//   PE    DELF-95  shared garden to parking: write to the council    voisinage
//   PO    DELF-107 a car-free centre and its shops' takings          economie
//         DELF-110 a charity refuses a donation on ethical grounds   ethique
//
// ── The shape is fixed, and it is NOT a ramp ────────────────────────────────
//
// Every comprehension item sits at B2. Three exercises per épreuve worth 9, 9
// and 7, and inside them questions worth 0.5 to 2.5 — the weighting IS the
// instrument (BLUEPRINT-delf-b2 §3). A paper that splits 8/8/9, or that weights
// every question the same, is not this format.
//
// ── Integrity ───────────────────────────────────────────────────────────────
//
// Every proper noun below is invented (STANDARD-common §6.1). Every figure is
// either invented and attributed to an invented source, or a plain fact of the
// document itself. No real institution, business or person appears anywhere.

export const FORMAT = 'delf_b2' as const;
export const VARIANT = 'blanc-01';
export const FORMAT_VERSION = 'delf-b2-2026.09';
export const PAPER_ID = `paper.${FORMAT}.${VARIANT}.1`;

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
 *  by. Every id below is a published B2 item, checked against the database
 *  rather than assumed. */
export const ITEMS = {
  rpTravailEtudes: ['fr.b2.rp-travail-etudes.001', 'fr.b2.rp-travail-etudes.002', 'fr.b2.rp-travail-etudes.003', 'fr.b2.rp-travail-etudes.004', 'fr.b2.rp-travail-etudes.005', 'fr.b2.rp-travail-etudes.006'],
  systemeDeSante: ['fr.b2.systeme-de-sante.003', 'fr.b2.systeme-de-sante.005', 'fr.b2.systeme-de-sante.006', 'fr.b2.systeme-de-sante.008', 'fr.b2.systeme-de-sante.009', 'fr.b2.systeme-de-sante.010'],
  communaute: ['fr.b2.communaute.001', 'fr.b2.communaute.002', 'fr.b2.communaute.003', 'fr.b2.communaute.004', 'fr.b2.communaute.005', 'fr.b2.communaute.006'],
  rpTechnologie: ['fr.b2.rp-technologie.001', 'fr.b2.rp-technologie.002', 'fr.b2.rp-technologie.003', 'fr.b2.rp-technologie.004', 'fr.b2.rp-technologie.005', 'fr.b2.rp-technologie.006'],
  rpMeteoNature: ['fr.b2.rp-meteo-nature.001', 'fr.b2.rp-meteo-nature.002', 'fr.b2.rp-meteo-nature.003', 'fr.b2.rp-meteo-nature.004', 'fr.b2.rp-meteo-nature.005', 'fr.b2.rp-meteo-nature.006'],
  ecologie: ['fr.b2.ecologie.001', 'fr.b2.ecologie.002', 'fr.b2.ecologie.003', 'fr.b2.ecologie.004', 'fr.b2.ecologie.005', 'fr.b2.ecologie.006'],
  rechercheEmploi: ['fr.b2.recherche-emploi.001', 'fr.b2.recherche-emploi.009', 'fr.b2.recherche-emploi.011', 'fr.b2.recherche-emploi.018', 'fr.b2.recherche-emploi.019', 'fr.b2.recherche-emploi.027'],
  rpVoyage: ['fr.b2.rp-voyage.001', 'fr.b2.rp-voyage.002', 'fr.b2.rp-voyage.003', 'fr.b2.rp-voyage.004', 'fr.b2.rp-voyage.005', 'fr.b2.rp-voyage.006'],
  voisinage: ['fr.b2.voisinage.001', 'fr.b2.voisinage.002', 'fr.b2.voisinage.003', 'fr.b2.voisinage.004', 'fr.b2.voisinage.005', 'fr.b2.voisinage.006'],
  economie: ['fr.b2.economie.001', 'fr.b2.economie.002', 'fr.b2.economie.003', 'fr.b2.economie.004', 'fr.b2.economie.005', 'fr.b2.economie.006'],
  ethique: ['fr.b2.ethique.001', 'fr.b2.ethique.002', 'fr.b2.ethique.003', 'fr.b2.ethique.004', 'fr.b2.ethique.005', 'fr.b2.ethique.006'],
} as const;
