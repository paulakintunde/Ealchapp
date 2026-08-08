/* Assembles scripts/data/bilan-imported.ts from the generated manifest, so the
 * 99 named rows are never retyped. Run after _bilan_manifest.ts.
 *
 *   node scripts/_bilan_assemble.mjs
 */
import { readFileSync, writeFileSync } from 'node:fs';

const gen = readFileSync('scripts/data/_bilan-manifest.gen.txt', 'utf8');
const block = (name) => {
  const m = gen.match(new RegExp(`export const ${name}: \\w+\\[\\] = \\[([\\s\\S]*?)\\n\\];`));
  if (!m) { console.error(`no ${name} block in the generated manifest`); process.exit(1); }
  return m[1].trimEnd() + '\n';
};
const imported = block('KIT_IMPORTED');
const kitReused = block('KIT_REUSED');
const review = block('REVIEW');

const count = (s) => (s.match(/^  \{/gm) || []).length;
const nImp = count(imported); const nKitReu = count(kitReused); const nRev = count(review);

if (nRev !== 87) { console.error(`expected 87 review rows, got ${nRev}. The selector's rule has moved; re-read it before trusting this.`); process.exit(1); }
if (nImp < 8) { console.error(`only ${nImp} kit rows are outside the seed. If the kit has landed in the cut, a1.30 owns nothing and needs a rethink.`); process.exit(1); }

const header = `// a1.30's manifests: a RECORDED READ of Postgres taken on 2026-08-08 by
// scripts/_bilan_manifest.ts, classified against seed.json.
//
// NOTHING BELOW WAS RETYPED. Regenerate with:
//
//     pnpm tsx scripts/_bilan_manifest.ts > scripts/data/_bilan-manifest.gen.txt
//     node scripts/_bilan_assemble.mjs
//
// ── THREE ARRAYS, BECAUSE THE TWO HALVES OF THIS LESSON BEHAVE OPPOSITELY ────
//
// REVIEW (${nRev} rows) is the even-coverage selection: three contributions from each
// of the 29 A1 units, computed by scripts/_bilan_select.ts rather than chosen by
// hand. Every one is ALREADY IN THE SEED and ALREADY TAUGHT AND RELEASED by the
// unit that owns it. The generator exits 1 if that stops being true, because the
// whole tranche contract rests on it.
//
//   So a1.30 SHOWS all ${nRev} and RELEASES NONE of them. The SRS keys on
//   (itemId, modality); re-releasing would take two ratings for one card.
//
// KIT_IMPORTED (${nImp} rows) is the conversational repair kit: published in Postgres,
// ABSENT from the seed, and taught by NO lesson in the app. This is the only
// material a1.30 owns, and with the two authored rows it is the only material the
// tranches release.
//
// KIT_REUSED (${nKitReu} row) is « je ne sais pas », which the generator flagged: it is
// already taught by sons.07, so a1.30 may SHOW it and must not RELEASE it. That
// flag is the tranche contract catching itself, and it is why the kit is split.
//
// ── The review rows carry \`unit\` and \`reach\` ──────────────────────────────
//
// \`unit\` is which of the 29 the row represents, so a section can be checked for
// mixing rather than trusted to mix. \`reach\` is how many OTHER units' words the
// row drags in with it, which is what the selector ranked on. Twelve rows have a
// reach of zero (a1.07, a1.09, a1.18, a1.19, a1.28): numbers and months do not
// co-occur with much. They are kept because coverage is the rule, and the mixing
// in their sections has to come from their neighbours instead.

import type { Item } from '../../../ealch-v2/src/content/schema.ts';

export type ImportedRow = Item;
export type ReusedRow = { id: string; fr: string; en: string; respell: string | null; drills: string[] };
export type ReviewRow = {
  id: string; unit: string; fr: string; en: string;
  respell: string | null; kind: string; reach: number;
};

export const KIT_IMPORTED: ImportedRow[] = [
${imported}];

export const KIT_REUSED: ReusedRow[] = [
${kitReused}];

export const REVIEW: ReviewRow[] = [
${review}];
`;

writeFileSync('scripts/data/bilan-imported.ts', header);
console.log(`scripts/data/bilan-imported.ts written: ${nImp} kit imported, ${nKitReu} kit reused, ${nRev} review rows`);
