// TEF Canada blanc-01 — the four SectionScoring tables.
//
// ── What these are, and what they are not ───────────────────────────────────
//
// The exam body does not publish its raw-to-scaled conversion, and it is not
// linear: they equate from live sitting data we do not have. So every map here
// is EXPERT-JUDGED, and every task's examinerNotes says so. What IS published
// is the IRCC conversion grid (BLUEPRINT §7.1), so the NCLC boundaries below
// are real; only the raw counts we hang them on are ours.
//
// ── How the CO and CE ladders were built ────────────────────────────────────
//
// Each published NCLC floor is anchored to a raw count, and the map
// interpolates between the anchors. The ladder is deliberately readable:
//
//     40%  →  NCLC 4      70%  →  NCLC 7      90%  →  NCLC 10
//     50%  →  NCLC 5      80%  →  NCLC 8
//     60%  →  NCLC 6      85%  →  NCLC 9
//
// ── The floor, and why it is left uncovered ─────────────────────────────────
//
// A four-option MCQ pays 25% for guessing, so ten of forty is what a candidate
// scores by touching nothing. Below the NCLC 4 anchor there is no level to
// report: the candidate has not demonstrated 4, and NCLC_MIN means the type
// cannot say "below 4". The rules below therefore stop at the floor, so
// `nclcFor` returns null and the report declines to estimate rather than
// awarding a level nobody earned. NCLC 4 is an immigration threshold; rounding
// up to it is not a rounding error.
//
// ── EE and EO are coarse on purpose ─────────────────────────────────────────
//
// Two tasks give three possible raw scores, so their spans are three levels
// wide rather than the usual two. That is not sloppiness, it is the resolution
// two marks actually carry, and pretending otherwise would be the dishonest
// choice. See §EE below.
import type { SectionScoring } from '../../../ealch-v2/src/content/schema.ts';

/** Anchors → the full 0..40 table, so the stored map needs no interpolation
 *  to be read by eye during review. */
function ladder(anchors: [number, number][]): { raw: number; scaled: number }[] {
  const out: { raw: number; scaled: number }[] = [];
  for (let raw = 0; raw <= 40; raw += 1) {
    let lo = anchors[0]!;
    let hi = anchors[anchors.length - 1]!;
    for (let i = 1; i < anchors.length; i += 1) {
      if (raw <= anchors[i]![0]) {
        lo = anchors[i - 1]!;
        hi = anchors[i]!;
        break;
      }
    }
    const [loRaw, loSc] = lo;
    const [hiRaw, hiSc] = hi;
    const t = hiRaw === loRaw ? 1 : (raw - loRaw) / (hiRaw - loRaw);
    out.push({ raw, scaled: Math.round(loSc + t * (hiSc - loSc)) });
  }
  return out;
}

/* ─── Compréhension orale — 40 raw on /360 ────────────────────────────────── */

export const CO_SCORING: SectionScoring = {
  scale: 360,
  // Anchored on the published NCLC floors: 145 / 181 / 217 / 249 / 280 / 298 / 316.
  map: ladder([[0, 0], [10, 90], [16, 145], [20, 181], [24, 217], [28, 249], [32, 280], [34, 298], [36, 316], [40, 360]]),
  // Ascending, because the validator reads the table in order and refuses a
  // raw score two spans could both claim.
  nclc: [
    { minRaw: 16, maxRaw: 21, nclcLow: 4, nclcHigh: 5 },
    { minRaw: 22, maxRaw: 25, nclcLow: 5, nclcHigh: 6 },
    { minRaw: 26, maxRaw: 29, nclcLow: 6, nclcHigh: 7 },
    { minRaw: 30, maxRaw: 32, nclcLow: 7, nclcHigh: 8 },
    { minRaw: 33, maxRaw: 35, nclcLow: 8, nclcHigh: 9 },
    { minRaw: 36, maxRaw: 40, nclcLow: 9, nclcHigh: 10 },
    // 0..15 deliberately uncovered. See the note at the top of this file.
  ],
};

/* ─── Compréhension écrite — 40 raw on /300 ───────────────────────────────── */

export const CE_SCORING: SectionScoring = {
  scale: 300,
  // Published NCLC floors on /300: 121 / 151 / 181 / 207 / 233 / 248 / 263.
  map: ladder([[0, 0], [10, 75], [16, 121], [20, 151], [24, 181], [28, 207], [32, 233], [34, 248], [36, 263], [40, 300]]),
  nclc: [
    { minRaw: 16, maxRaw: 21, nclcLow: 4, nclcHigh: 5 },
    { minRaw: 22, maxRaw: 25, nclcLow: 5, nclcHigh: 6 },
    { minRaw: 26, maxRaw: 29, nclcLow: 6, nclcHigh: 7 },
    { minRaw: 30, maxRaw: 32, nclcLow: 7, nclcHigh: 8 },
    { minRaw: 33, maxRaw: 35, nclcLow: 8, nclcHigh: 9 },
    { minRaw: 36, maxRaw: 40, nclcLow: 9, nclcHigh: 10 },
  ],
};

/* ─── Expression écrite and orale — 2 raw on /450 each ────────────────────── */
//
// Raw here is the number of tasks whose AI grade met the task's OWN target
// band, which is why the two EE tasks carry different targets: the fait divers
// is a B1 task and the lettre argumentée is a B2 one, and "passed" should not
// mean the same thing for both.
//
// Three raw points cannot resolve seven levels. The spans are therefore three
// wide, and the map has three anchors and no pretence of more.

const OPEN_MAP = [
  { raw: 0, scaled: 180 },
  { raw: 1, scaled: 300 },
  { raw: 2, scaled: 400 },
];

/** Both tasks met their target: the candidate wrote at the paper's own level. */
const OPEN_NCLC = [
  { minRaw: 0, maxRaw: 0, nclcLow: 4, nclcHigh: 5 },
  { minRaw: 1, maxRaw: 1, nclcLow: 5, nclcHigh: 7 },
  { minRaw: 2, maxRaw: 2, nclcLow: 7, nclcHigh: 9 },
];

export const EE_SCORING: SectionScoring = { scale: 450, map: OPEN_MAP, nclc: OPEN_NCLC };
export const EO_SCORING: SectionScoring = { scale: 450, map: OPEN_MAP, nclc: OPEN_NCLC };

/** The line every task in this paper carries, so no surface can present one of
 *  these numbers as an equated score. */
export const SCORING_NOTE =
  'Le barème brut vers échelle est une estimation experte, pas une équivalence officielle : ' +
  'le centre d’examen ne publie pas sa table de conversion. Les seuils NCLC proviennent de la grille IRCC.';
