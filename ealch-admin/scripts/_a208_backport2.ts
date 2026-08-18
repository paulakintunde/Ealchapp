// Round 2: the three guards REFINED against what the corpus actually does, so
// the seed-wide version pins reality instead of reding thirty suites.
import { readFileSync } from 'node:fs';

const seed = JSON.parse(readFileSync(new URL('../../ealch-v2/src/content/seed.json', import.meta.url), 'utf8')) as {
  lessons: Array<Record<string, unknown> & { id: string; unitId?: string; level?: string; sections: Array<Record<string, unknown> & { type: string; id?: string }> }>;
  items: Array<{ id: string; fr: string }>;
  units: Array<{ id: string; seq?: number | string }>;
};
const byId = new Map(seed.items.map((i) => [i.id, i]));
const unitSeq = new Map(seed.units.map((u) => [u.id, Number(u.seq)]));
const strs = (v: unknown, out: string[] = []): string[] => {
  if (typeof v === 'string') out.push(v);
  else if (Array.isArray(v)) v.forEach((x) => strs(x, out));
  else if (v && typeof v === 'object') Object.values(v).forEach((x) => strs(x, out));
  return out;
};
const hasWord = (h: string, n: string) =>
  new RegExp(`(?<![\\p{L}\\p{N}-])${n.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}(?![\\p{L}\\p{N}'’-])`, 'iu').test(h);
const fold = (s: string) => s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9]/g, '');

/* 1. CARD-TO-ROW PARITY, refined: a groupDrill card legitimately shows the FORM
 *    being drilled while its itemId points at a whole sentence. What is never
 *    legitimate is a card whose text is not IN the row at all. */
console.log('=== 1. card fr NOT contained in the row it names ===');
const bad1: string[] = [];
let n1 = 0;
for (const L of seed.lessons) for (const s of L.sections ?? []) {
  for (const g of (s.groups ?? []) as Array<{ items?: Array<{ itemId?: string; fr?: string }> }>) {
    for (const it of g.items ?? []) {
      if (!it.itemId || !it.fr) continue;
      n1++;
      const row = byId.get(it.itemId);
      if (!row) { bad1.push(`${L.id} ${s.id} ${it.itemId} NOT IN SEED`); continue; }
      if (!fold(row.fr).includes(fold(it.fr))) bad1.push(`${L.id} ${s.id} ${it.itemId}  card "${it.fr}"  row "${row.fr}"`);
    }
  }
}
console.log(`  checked ${n1}, violations ${bad1.length}`);
bad1.forEach((b) => console.log(`    ${b}`));

/* 2. DEMONSTRATIVE PRONOUNS before seq 33. */
console.log('\n=== 2. demonstrative pronouns in an A2 lesson before seq 33 ===');
const DEM = ['celui', 'celle', 'ceux', 'celles'];
const bad2: string[] = [];
for (const L of seed.lessons) {
  if (String(L.level ?? '') !== 'a2') continue;
  const seq = unitSeq.get(String(L.unitId)) ?? 99;
  if (seq >= 33) continue;
  const text = strs(L.sections).join('\n');
  for (const d of DEM) {
    if (hasWord(text, d)) {
      const line = strs(L.sections).find((x) => hasWord(x, d)) ?? '';
      bad2.push(`${L.id} (seq ${seq}) ${d}  "${line.slice(0, 76)}"`);
    }
  }
}
console.log(`  violations ${bad2.length}`);
bad2.forEach((b) => console.log(`    ${b}`));

/* 3. OUT-OF-BAND TENSE, with the fixed polite forms exempted. `je voudrais` is
 *    lexis taught at A1, not the conditional as a tense. */
console.log('\n=== 3. conditional/subjunctive on a production surface, fixed forms exempted ===');
const LEXICAL = /(?<![\p{L}\p{N}-])(voudrai(s|t)|voudrions|voudriez|voudraient|pourrai(s|t)|aimerai(s|t)|saurai(s|t)|sache)(?![\p{L}\p{N}'’-])/giu;
const COND = /(?<![\p{L}\p{N}-])(je|tu|il|elle|on|nous|vous|ils|elles)\s+\w*(rais|rait|rions|riez|raient)(?![\p{L}\p{N}'’-])/iu;
const SUBJ = /(?<![\p{L}\p{N}-])(que|qu['’])(\s+[\p{L}'’-]+){0,3}\s*(soit|soient|ait|aient|puisse|puissent|fasse|fassent|aille|veuille)(?![\p{L}\p{N}'’-])/iu;
const PRODUCE = new Set(['scenario', 'practice', 'dictation', 'quiz', 'groupDrill', 'trapDrill']);
const bad3: string[] = [];
for (const L of seed.lessons) {
  if (String(L.level ?? '') !== 'a2') continue;
  for (const s of L.sections ?? []) {
    if (!PRODUCE.has(s.type)) continue;
    for (const x of strs(s)) {
      const stripped = x.replace(LEXICAL, 'X');
      if (COND.test(stripped)) bad3.push(`${L.id} ${s.id} COND "${x.slice(0, 76)}"`);
      else if (SUBJ.test(stripped)) bad3.push(`${L.id} ${s.id} SUBJ "${x.slice(0, 76)}"`);
    }
  }
}
console.log(`  violations ${bad3.length}`);
[...new Set(bad3)].forEach((b) => console.log(`    ${b}`));
