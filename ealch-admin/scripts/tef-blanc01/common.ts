// TEF Canada blanc-01 — shared constants and the paper plan.
//
// ── The paper plan ──────────────────────────────────────────────────────────
//
// TOPICS-tef-canada.md rule 2: a situation must not appear twice in the same
// paper wearing two hats. This table is the record of what blanc-01 consumed,
// so paper 2 can avoid it. Within a block a topic may repeat; across blocks it
// may not.
//
//   CO-A  TEF-38 marché · TEF-28 gare · TEF-45 tri
//   CO-B  TEF-33 circulation · TEF-57 exposition · TEF-46 météo · TEF-23 permanence
//   CO-C  TEF-30 piétonnisation · TEF-20 téléconsultation
//   CO-D  TEF-32 covoiturage
//   CO-E  TEF-41 reprise d'études
//   CO-F  TEF-65 accueil des nouveaux arrivants
//   CO-G  TEF-15 · TEF-51 · TEF-48 · TEF-11 · TEF-55 · TEF-34 · TEF-01 · TEF-59
//         TEF-53 · TEF-29 · TEF-16 · TEF-05 · TEF-04 · TEF-60 · TEF-17 · TEF-27 · TEF-44
//   CE-A  TEF-03 · TEF-07 · TEF-18 · TEF-09 · TEF-56 · TEF-02 · TEF-25
//   CE-BC (no topic: gap-fill is written to the grammar point, per TOPICS)
//   CE-DE TEF-61 · TEF-49
//   CE-F  TEF-22 · TEF-35
//   CE-G  TEF-66
//   EE-A  TEF-31 accrochage et constat amiable
//   EE-B  TEF-06 encadrement des loyers
//   EO-A  TEF-40 inscription à un cours du soir
//   EO-B  TEF-58 club de course, bénévoles
//
// COUNTED, not estimated: 45 of the bank's situations, none of them twice.
//
// This comment used to say "37 of the bank's 66 ... paper 2 has 29 untouched
// ones to draw from". Both figures were wrong — the real counts are 45 spent
// and 21 left — and the error mattered, because 21 is less than one paper. Read
// literally it said paper 2 was buildable when it was not. `scripts/topic-
// demand.ts` now computes this from the ledger and the bank rather than anyone
// re-typing it, and the bank was expanded from 66 to 250 in phase E9 so that
// papers 2-5 have the breadth rule 1 assumes.
//
// EO-A note: TEF-56 (stage de poterie) is what the dev fixture used for this
// task. It appears here only as a 30-word CE-A poster, never as the EO-A
// document, so nobody who practised on the fixture meets the same interaction
// twice. The fixture is deleted in this phase in any case.
//
// ── Integrity ───────────────────────────────────────────────────────────────
//
// Every proper noun below is invented (STANDARD-common §6.1): Sainte-Ambre,
// Verlune, Pralet, Corbeny, Meillac. Every figure is either invented and
// attributed to an invented source, or is a plain fact of the document itself.
// No real institution, business or person appears in any stimulus.

export const FORMAT = 'tef_canada' as const;
export const VARIANT = 'blanc-01';
export const FORMAT_VERSION = 'tef-canada-2025.09';
export const PAPER_ID = `paper.${FORMAT}.${VARIANT}.1`;

export const taskId = (taskType: string, seq: string) =>
  `exam.${FORMAT}.${VARIANT}.${taskType}.${seq}`;

/** Carried by every task in the paper. The first two lines are required by
 *  STANDARD-common §7; the third is the scoring disclaimer. */
export const NOTES_CLOSED = [
  'Épreuve blanche rédigée par Ealch d’après le format publié. Ce n’est pas un sujet officiel et aucun extrait ne provient d’un sujet réel.',
  'Le barème brut vers échelle est une estimation experte, pas une équivalence officielle. Les seuils NCLC proviennent de la grille IRCC.',
];

export const NOTES_OPEN = [
  'Épreuve blanche rédigée par Ealch d’après le format publié. Ce n’est pas un sujet officiel.',
  'La grille de correction est notre propre construction : le centre d’examen ne publie pas le libellé de ses descripteurs.',
  'La correction est assistée par IA et s’appuie sur cette grille et sur cette réponse modèle. Le résultat est une estimation d’entraînement, jamais un score équivalent.',
];

/**
 * Where a miss in this block routes back to for review.
 *
 * The schema carries `targetItemIds` on the TASK, not on the question, so the
 * decomposition is per block rather than per item. With one task per named
 * block that is a real grouping — a missed block G listening item routes to
 * block G's themes — but it is coarser than the authoring standard asks for,
 * and it is recorded as such in the phase notes.
 */
export const ITEMS = {
  marche: ['fr.a1.marche.006', 'fr.a1.marche.007', 'fr.a1.marche.008', 'fr.a1.marche.009', 'fr.a1.marche.010'],
  transports: ['fr.a1.transports-quotidiens.001', 'fr.a1.transports-quotidiens.002', 'fr.a1.transports-quotidiens.003', 'fr.a1.transports-quotidiens.004', 'fr.a1.transports-quotidiens.005'],
  ecologie: ['fr.b1.ecologie.001', 'fr.b1.ecologie.002', 'fr.b1.ecologie.036', 'fr.b1.ecologie.037', 'fr.b1.ecologie.039'],
  laVille: ['fr.a1.la-ville.001', 'fr.a1.la-ville.002', 'fr.a1.la-ville.003', 'fr.a1.la-ville.004', 'fr.a1.la-ville.005'],
  sante: ['fr.a2.systeme-de-sante.001', 'fr.a2.systeme-de-sante.002', 'fr.a2.systeme-de-sante.003', 'fr.a2.systeme-de-sante.004', 'fr.a2.systeme-de-sante.006'],
  musees: ['fr.b1.musees.001', 'fr.b1.musees.002', 'fr.b1.musees.029', 'fr.b1.musees.030', 'fr.b1.musees.031'],
  meteo: ['fr.a1.meteo.001', 'fr.a1.meteo.002', 'fr.a1.meteo.003', 'fr.a1.meteo.012', 'fr.a1.meteo.013'],
  droit: ['fr.b1.droit.020', 'fr.b1.droit.021', 'fr.b1.droit.022', 'fr.b1.droit.023', 'fr.b1.droit.024'],
  universite: ['fr.b1.universite.001', 'fr.b1.universite.033', 'fr.b1.universite.034', 'fr.b1.universite.035', 'fr.b1.universite.036'],
  emploi: ['fr.a2.recherche-emploi.001', 'fr.a2.recherche-emploi.003', 'fr.a2.recherche-emploi.005', 'fr.a2.recherche-emploi.006', 'fr.a2.recherche-emploi.007'],
  bureau: ['fr.a2.bureau.001', 'fr.a2.bureau.002', 'fr.a2.bureau.003', 'fr.a2.bureau.004', 'fr.a2.bureau.015'],
  collegues: ['fr.a2.collegues.001', 'fr.a2.collegues.002', 'fr.a2.collegues.003', 'fr.a2.collegues.012', 'fr.a2.collegues.013'],
  maison: ['fr.a1.maison.001', 'fr.a1.maison.002', 'fr.a1.maison.003', 'fr.a1.maison.010', 'fr.a1.maison.011'],
  internet: ['fr.a2.internet.001', 'fr.a2.internet.002', 'fr.a2.internet.003', 'fr.a2.internet.012', 'fr.a2.internet.013'],
  communaute: ['fr.a2.communaute.001', 'fr.a2.communaute.002', 'fr.a2.communaute.012', 'fr.a2.communaute.013', 'fr.a2.communaute.014'],
  immigration: ['fr.a2.immigration-et-citoyennete.001', 'fr.a2.immigration-et-citoyennete.002', 'fr.a2.immigration-et-citoyennete.003', 'fr.a2.immigration-et-citoyennete.004', 'fr.a2.immigration-et-citoyennete.005'],
  courses: ['fr.a2.courses.001', 'fr.a2.courses.002', 'fr.a2.courses.009', 'fr.a2.courses.010', 'fr.a2.courses.011'],
  appareils: ['fr.a1.appareils.001', 'fr.a1.appareils.002', 'fr.a1.appareils.003', 'fr.a1.appareils.004', 'fr.a1.appareils.005'],
} as const;

export const uniq = (...groups: readonly (readonly string[])[]) => [...new Set(groups.flat())];
