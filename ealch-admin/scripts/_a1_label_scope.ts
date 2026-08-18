import seed from '../../ealch-v2/src/content/seed.json' with { type: 'json' };
const CK = new Set(['grammarAssumed','grammarIntroduced','prereqUnitIds','id','lessonIds','unitId','itemId','itemIds','examples','slug']);
const RX = /(?<![\p{L}\p{N}.])((?:a1|a2|b1|b2|c1|sons)\.\d{2})(?![\p{L}\p{N}])(?!\.[\p{L}\p{N}])/gu;
const walk = (v: any, o: string[] = []): string[] => { if (typeof v === 'string') o.push(v); else if (Array.isArray(v)) v.forEach((x) => walk(x, o)); else if (v && typeof v === 'object') { for (const [k, x] of Object.entries(v)) if (!CK.has(k)) walk(x, o); } return o; };
const units = (seed as any).units as any[];
for (const u of units.filter((x) => /^(a1|sons)\./.test(x.id)).sort((a, b) => Number(a.seq) - Number(b.seq))) {
  for (const lid of u.lessonIds ?? []) {
    const L = (seed as any).lessons.find((l: any) => l.id === lid); if (!L) continue;
    const hits = walk(L).flatMap((s) => [...s.matchAll(RX)].map((m) => m[1]));
    if (hits.length) console.log(String(u.seq).padStart(2), lid, 'v' + L.version, 'ids=' + hits.length, '  cites=' + [...new Set(hits)].join(','));
  }
}
