import { readFileSync } from 'node:fs';

const seed = JSON.parse(readFileSync('../ealch-v2/src/content/seed.json', 'utf8'));

/** Every authored string with its dotted path. */
const walk = (v: unknown, p = '', out: { p: string; s: string }[] = []) => {
  if (typeof v === 'string') out.push({ p, s: v });
  else if (Array.isArray(v)) v.forEach((x, i) => walk(x, `${p}[${i}]`, out));
  else if (v && typeof v === 'object') for (const [k, x] of Object.entries(v)) walk(x, p ? `${p}.${k}` : k, out);
  return out;
};
const esc = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const has = (hay: string, n: string) =>
  new RegExp(`(?<![\\p{L}\\p{N}])${esc(n)}(?![\\p{L}\\p{N}])`, 'iu').test(hay);

const HUNT = ['clitic', 'clitics', 'paradigm', 'paradigms', 'auxiliary', 'referent', 'participle', 'participles', 'partitive', 'conjugate', 'conjugation'];

for (const L of seed.lessons.filter((l: any) => l.level === 'a2')) {
  const surfaces = [
    ...walk(L.sections, 'sections'),
    ...walk(L.sheets ?? [], 'sheets'),
    ...walk(L.terms ?? {}, 'terms'),
    ...walk(L.intro ?? '', 'intro'),
    ...walk(L.overview ?? {}, 'overview'),
    ...walk(L.drills ?? [], 'drills'),
  ];
  for (const { p, s } of surfaces) {
    for (const w of HUNT) {
      if (has(s, w)) {
        console.log(`${L.id}  ${w.toUpperCase().padEnd(12)} ${p}`);
        console.log(`     ${s.slice(0, 170)}`);
      }
    }
  }
}
