import { readFileSync } from 'node:fs';
const seed = JSON.parse(readFileSync('../ealch-v2/src/content/seed.json','utf8'));
const qs = (s) => (s.rounds?.length ? s.rounds.flatMap((r)=>r.questions??[]) : (s.questions??[]));
function mix(ids) {
  const m = {};
  let n = 0;
  for (const L of seed.lessons.filter((l)=>ids.some((p)=>l.id.startsWith(p)))) {
    for (const s of L.sections.filter((x)=>x.type==='quiz')) for (const q of qs(s)) { m[q.format??'mcq']=(m[q.format??'mcq']||0)+1; n++; }
  }
  return [n, m];
}
const [n1,m1] = mix(['a1.30.']);
console.log('a1.30 total', n1, JSON.stringify(m1));
const [n2,m2] = mix(['a2.']);
console.log('A2 band total', n2, JSON.stringify(m2));
const tot = Object.values(m2).reduce((a,b)=>a+b,0);
for (const [k,v] of Object.entries(m2).sort((a,b)=>b[1]-a[1])) console.log(`  ${k.padEnd(13)} ${String(v).padStart(4)}  ${(100*v/tot).toFixed(1)}%  -> of 230: ${Math.round(230*v/tot)}`);
