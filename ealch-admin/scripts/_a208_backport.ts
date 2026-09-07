// How much of a2.08's three guards can be made SEED-WIDE without breaking the
// build? Measure first: a backport that pins reality is worth having, one that
// reds thirty suites is not.
import { readFileSync } from 'node:fs';

const seed = JSON.parse(readFileSync(new URL('../../ealch-v2/src/content/seed.json', import.meta.url), 'utf8')) as {
  lessons: Array<Record<string, unknown> & { id: string; unitId?: string; level?: string; sections: Array<Record<string, unknown> & { type: string; id?: string }> }>;
  items: Array<{ id: string; fr: string }>;
  units: Array<{ id: string; seq?: number | string; level?: string }>;
};
const byId = new Map(seed.items.map((i) => [i.id, i]));
const unitSeq = new Map(seed.units.map((u) => [u.id, Number(u.seq)]));

const strs = (v: unknown, out: string[] = []): string[] => {
  if (typeof v === 'string') out.push(v);
  else if (Array.isArray(v)) v.forEach((x) => strs(x, out));
  else if (v && typeof v === 'object') Object.values(v).forEach((x) => strs(x, out));
  return out;
};
const hasWord = (hay: string, needle: string): boolean =>
  new RegExp(`(?<![\\p{L}\\p{N}-])${needle.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}(?![\\p{L}\\p{N}'’-])`, 'iu').test(hay);

/* ── 1. DISPLAY PARITY, generalised ─────────────────────────────────────────
 *  A groupDrill item carries BOTH an `itemId` and its own `fr`. If they
 *  disagree, the card shows one thing and the corpus holds another, and a
 *  corpus edit silently orphans the card. This is mechanical and universal. */
console.log('=== 1. groupDrill items whose `fr` disagrees with the row they name ===');
let checked = 0; const drift: string[] = [];
for (const L of seed.lessons) {
  for (const s of L.sections ?? []) {
    for (const g of (s.groups ?? []) as Array<{ items?: Array<{ itemId?: string; fr?: string }> }>) {
      for (const it of g.items ?? []) {
        if (!it.itemId || !it.fr) continue;
        checked++;
        const row = byId.get(it.itemId);
        if (!row) { drift.push(`${L.id} ${s.id} ${it.itemId} -> NOT IN SEED`); continue; }
        if (row.fr !== it.fr) drift.push(`${L.id} ${s.id} ${it.itemId}\n      card: "${it.fr}"\n      row:  "${row.fr}"`);
      }
    }
  }
}
console.log(`  checked ${checked} itemId-carrying group items across ${seed.lessons.length} lessons`);
console.log(`  DRIFTED: ${drift.length}`);
for (const d of drift.slice(0, 25)) console.log(`    ${d}`);

/* ── 2. a2.33's demonstrative pronouns, before seq 33 ────────────────────── */
console.log('\n=== 2. demonstrative PRONOUNS on a learner surface, in a lesson before seq 33 ===');
const DEM = ['celui', 'celle', 'ceux', 'celles'];
const demHits: string[] = [];
for (const L of seed.lessons) {
  const seq = unitSeq.get(String(L.unitId));
  const band = String(L.level ?? '');
  if (band !== 'a2') continue;
  const text = strs(L.sections).join('\n');
  const hit = DEM.filter((d) => hasWord(text, d) || hasWord(text, `${d}-ci`) || hasWord(text, `${d}-là`));
  if (hit.length) demHits.push(`${L.id} (seq ${seq}) [${hit.join(',')}]`);
}
console.log(`  A2 lessons carrying one: ${demHits.length}`);
for (const h of demHits) console.log(`    ${h}`);

/* ── 3. Out-of-band tense on a production surface ────────────────────────── */
console.log('\n=== 3. conditional / subjunctive on a PRODUCTION surface, A2 lessons ===');
const COND = /(?<![\p{L}\p{N}-])(je|tu|il|elle|on|nous|vous|ils|elles)\s+\w*(rais|rait|rions|riez|raient)(?![\p{L}\p{N}'’-])/iu;
const SUBJ = /(?<![\p{L}\p{N}-])(que|qu['’])(\s+[\p{L}'’-]+){0,3}\s*(soit|soient|ait|aient|puisse|puissent|fasse|fassent|aille|sache|veuille)(?![\p{L}\p{N}'’-])/iu;
const PRODUCE = new Set(['scenario', 'practice', 'dictation', 'quiz', 'groupDrill', 'trapDrill']);
const tense: string[] = [];
for (const L of seed.lessons) {
  if (String(L.level ?? '') !== 'a2') continue;
  for (const s of L.sections ?? []) {
    if (!PRODUCE.has(s.type)) continue;
    for (const x of strs(s)) {
      if (COND.test(x)) tense.push(`${L.id} ${s.id} COND  "${x.slice(0, 78)}"`);
      else if (SUBJ.test(x)) tense.push(`${L.id} ${s.id} SUBJ  "${x.slice(0, 78)}"`);
    }
  }
}
console.log(`  occurrences: ${tense.length}`);
for (const t of tense.slice(0, 30)) console.log(`    ${t}`);
const lessons = [...new Set(tense.map((t) => t.split(' ')[0]))];
console.log(`  across ${lessons.length} lesson(s): ${lessons.join(', ')}`);
