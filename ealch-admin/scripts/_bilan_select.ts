/* a1.30's item selection, computed rather than judged.
 *
 *   pnpm tsx scripts/_bilan_select.ts
 *
 * TWO SETTLED DECISIONS HAVE TO BE SATISFIED AT ONCE and they pull in different
 * directions:
 *
 *   EVEN COVERAGE across all 29 units, three contributions each. Decides WHICH
 *   units contribute and guarantees none is forgotten.
 *
 *   MIXED TOPIC in every section. Decides WHICH item from each unit, and forbids
 *   a lesson organised one unit at a time.
 *
 * They reconcile if coverage picks the unit and MIXING picks the item. So each
 * candidate is scored by how much OTHER-UNIT material it drags in with it, and
 * the top three per unit win. A sentence that carries three other units' words
 * is worth more to this lesson than a commoner word that carries none.
 *
 * A contribution is a HEADWORD for a vocabulary unit and a SENTENCE for a
 * grammar unit, because a1.05 and a1.06 teach zero headwords between them and a
 * headword quota is not satisfiable there.
 */
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const here = dirname(fileURLToPath(import.meta.url));
const seed = JSON.parse(readFileSync(join(here, '../../ealch-v2/src/content/seed.json'), 'utf8')) as {
  items: { id: string; fr: string; en: string; kind: string; theme: string; respell?: string; drills?: string[] }[];
  lessons: { id: string; unitId: string; itemIds?: string[] }[];
  units: { id: string; title?: string; seq?: number }[];
};

const ITEM = new Map(seed.items.map((i) => [i.id, i] as const));
const A1 = seed.lessons.filter((l) => l.unitId.startsWith('a1.'))
  .sort((a, b) => (seed.units.find((u) => u.id === a.unitId)?.seq ?? 0) - (seed.units.find((u) => u.id === b.unitId)?.seq ?? 0));

/** Which unit teaches each item. First teacher wins, which matters because the
 *  tranche contract keys on who RELEASED it. */
const owner = new Map<string, string>();
for (const l of A1) for (const id of l.itemIds ?? []) if (!owner.has(id)) owner.set(id, l.unitId);

/** Every headword any A1 unit teaches, with its owner, so a sentence can be
 *  scored by how many OTHER units it reaches into. Longest first, so « le petit
 *  déjeuner » is matched before « le petit ». */
const headwords: { fr: string; unit: string }[] = [];
for (const [id, unit] of owner) {
  const it = ITEM.get(id);
  if (!it || it.kind === 'sentence') continue;
  const bare = it.fr.replace(/^(le|la|les|l'|un|une|des|du|de la)\s*/i, '').trim();
  if (bare.length >= 3) headwords.push({ fr: bare.toLowerCase(), unit });
}
headwords.sort((a, b) => b.fr.length - a.fr.length);

const isWordChar = (c: string) => /[\p{L}\p{N}'’-]/u.test(c);
function contains(hay: string, needle: string): boolean {
  const h = hay.toLowerCase();
  let i = 0;
  while ((i = h.indexOf(needle, i)) !== -1) {
    const before = i === 0 ? '' : h[i - 1];
    const after = h[i + needle.length] ?? '';
    if (!isWordChar(before) && !isWordChar(after)) return true;
    i += 1;
  }
  return false;
}

/** How many OTHER units this item reaches into. */
function reach(id: string, ownUnit: string): { score: number; units: string[] } {
  const it = ITEM.get(id);
  if (!it) return { score: 0, units: [] };
  const hit = new Set<string>();
  if (it.kind === 'sentence') {
    for (const h of headwords) {
      if (h.unit === ownUnit || hit.has(h.unit)) continue;
      if (contains(it.fr, h.fr)) hit.add(h.unit);
    }
  } else {
    // A headword's reach is how many other units' SENTENCES carry it.
    const bare = it.fr.replace(/^(le|la|les|l'|un|une|des|du|de la)\s*/i, '').trim().toLowerCase();
    if (bare.length >= 3) {
      for (const [sid, sUnit] of owner) {
        if (sUnit === ownUnit || hit.has(sUnit)) continue;
        const s = ITEM.get(sid);
        if (s?.kind === 'sentence' && contains(s.fr, bare)) hit.add(sUnit);
      }
    }
  }
  return { score: hit.size, units: [...hit].sort() };
}

// Everything below goes to STDERR so the manifest generator can import
// CONTRIBUTION_IDS without this file's report landing in the generated output.
console.error('unit    seq  kind      pick  reach  id                              fr');
const chosen: { unit: string; id: string; fr: string; kind: string; reach: number }[] = [];
/** Every French string already spoken for, so no two units hand the learner the
 *  same card. Units are walked in curriculum order, so the earlier unit keeps
 *  the word, which is also the unit that taught it first. */
const claimed = new Set<string>();

for (const l of A1) {
  const unit = seed.units.find((u) => u.id === l.unitId);
  const mine = (l.itemIds ?? []).filter((id) => owner.get(id) === l.unitId);
  const words = mine.filter((id) => ITEM.get(id)?.kind !== 'sentence');
  const sents = mine.filter((id) => ITEM.get(id)?.kind === 'sentence');
  // A vocabulary unit contributes headwords. A unit with fewer than three
  // headwords contributes sentences instead, which is a1.05 and a1.06 and the
  // reason a headword quota was not satisfiable.
  const pool = (words.length >= 3 ? words : sents).filter((id) => {
    // NO ROW ABOVE a1. fr.a2.nombres.006 was ranked into a1.28's top three on
    // the first run: an A2 card in an A1 lesson's tranche, which is the trap
    // a1.22 documented and withdrew a row for. fr.sons.* is fine, it is the
    // pronunciation track and every A1 lesson already teaches from it.
    if (!/^fr\.(a1|sons)\./.test(id)) return false;
    // NO TWO CARDS WITH THE SAME FRENCH. `le café` was picked twice, by a1.03
    // out of `routines` and by a1.23 out of `au-restaurant`. flashhub keys on
    // fr PER THEME so nothing fires, and the learner still meets one card
    // twice. First unit to claim a word keeps it.
    const fr = ITEM.get(id)?.fr;
    return !fr || !claimed.has(fr.toLowerCase());
  });
  const kind = words.length >= 3 ? 'headword' : 'SENTENCE';
  const ranked = pool
    .map((id) => ({ id, ...reach(id, l.unitId) }))
    .sort((a, b) => b.score - a.score || a.id.localeCompare(b.id))
    .slice(0, 3);
  for (const r of ranked) { const fr = ITEM.get(r.id)?.fr; if (fr) claimed.add(fr.toLowerCase()); }
  for (const [n, r] of ranked.entries()) {
    const it = ITEM.get(r.id)!;
    chosen.push({ unit: l.unitId, id: r.id, fr: it.fr, kind: it.kind, reach: r.score });
    console.error(
      `${n === 0 ? l.unitId.padEnd(7) : ''.padEnd(7)} ${n === 0 ? String(unit?.seq ?? '').padStart(3) : '   '}  ${n === 0 ? kind.padEnd(9) : ''.padEnd(9)} ${String(n + 1).padStart(4)} ${String(r.score).padStart(6)}  ${r.id.padEnd(31)} ${it.fr.slice(0, 46)}`,
    );
  }
  if (ranked.length < 3) console.error(`  !! ${l.unitId} could only supply ${ranked.length}`);
}

/** The selection, exported so the manifest generator consumes it rather than
 *  anybody retyping eighty-seven ids. */
export const CONTRIBUTIONS = chosen;
export const CONTRIBUTION_IDS = chosen.map((c) => c.id);

console.error('\n=== themes these 87 sit in, which is what the unit binds to ===');
{
  const byTheme = new Map<string, number>();
  for (const c of chosen) {
    const t = ITEM.get(c.id)?.theme ?? '?';
    byTheme.set(t, (byTheme.get(t) ?? 0) + 1);
  }
  const sorted = [...byTheme.entries()].sort((a, b) => b[1] - a[1]);
  console.error(`  ${sorted.length} distinct themes`);
  console.error(`  ${sorted.map(([t, n]) => `${t}:${n}`).join('  ')}`);
}

console.error(`\n  ${chosen.length} contributions from ${A1.length} units`);
console.error(`  headwords ${chosen.filter((c) => c.kind !== 'sentence').length}, sentences ${chosen.filter((c) => c.kind === 'sentence').length}`);
const zero = chosen.filter((c) => c.reach === 0);
console.error(`  reaching NO other unit: ${zero.length}${zero.length ? ` (${zero.map((c) => c.unit).join(', ')})` : ''}`);
console.error(`  every id already released by its own unit: ${chosen.every((c) => owner.get(c.id) === c.unit)}`);
