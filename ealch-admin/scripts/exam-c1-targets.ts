/**
 * What a missed C1 reading or listening task sends back to the learner's
 * review queue (`targetItemIds`), shared by all twelve C1 closed tasks.
 *
 * Paul, C1 wave 1 (2026-09-30): the C1 CE and CO tasks re-queue the rule cards
 * of the lessons built for them, c1.20 « Lire entre les lignes » and c1.21
 * « Débats et entretiens », instead of legacy topic words (TCF) or A1/A2 rows
 * (TEF blanc-01). The exam report also offers those two lessons by name
 * (EXAM_PREP_TARGETS in ealch-v2/src/store/progress.logic.ts). One list here,
 * so the twelve tasks cannot drift apart.
 */

/** c1.20's twelve rule cards (strategies-de-comprehension 1800-1999). */
export const C1_CE_TARGETS: readonly string[] = [
  1808, 1827, 1842, 1866, 1888, 1906, 1930, 1942, 1949, 1974, 1985, 1998,
].map((n) => `fr.c1.strategies-de-comprehension.${n}`);

/** c1.21's twelve rule cards (discours-dexamen 1400-1599). */
export const C1_CO_TARGETS: readonly string[] = [
  1404, 1416, 1429, 1443, 1453, 1467, 1479, 1495, 1505, 1516, 1525, 1545,
].map((n) => `fr.c1.discours-dexamen.${n}`);
