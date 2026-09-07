import { FOODS, COUNTS, SHELVES, onShelf, RESPELL_REPAIRS, NOT_REPAIRED, OUTSIDE_THE_CUT, ELIDED, PLURAL_ONLY, AUTHORED_FOODS } from './data/nourriture-corpus.ts';
import { hasPlainNasalFor } from '../../ealch-v2/src/content/density.logic.ts';
console.log('COUNTS', JSON.stringify(COUNTS, null, 1));
const ids = FOODS.map(f => f.id);
const dupId = ids.filter((v,i)=>ids.indexOf(v)!==i);
console.log('duplicate ids:', dupId.length ? dupId : 'none');
const bares = FOODS.map(f => f.bare);
const dupBare = bares.filter((v,i)=>bares.indexOf(v)!==i);
console.log('duplicate bare nouns:', dupBare.length ? dupBare : 'none');
console.log('\nshelf sizes:');
for (const s of SHELVES) console.log('  ', s.padEnd(14), onShelf(s).length);
console.log('  TOTAL', SHELVES.reduce((n,s)=>n+onShelf(s).length,0));
console.log('\nelided:', ELIDED.map(f=>f.fr).join(', '));
console.log('pluralOnly:', PLURAL_ONLY.map(f=>f.fr).join(', '));
console.log('authored:', AUTHORED_FOODS.map(f=>f.fr).join(', '));
// every repair target is a food we serve
for (const r of RESPELL_REPAIRS) if (!ids.includes(r.id)) console.log('REPAIR ON A ROW WE DO NOT SERVE:', r.id, r.fr);
// no repair `to` still carries a plain nasal
let bad = 0;
for (const f of FOODS) if (hasPlainNasalFor(f.bare, f.respell)) { console.log('STILL FLAGGED:', f.fr, f.respell); bad++; }
console.log('\nrows the shared checker still flags after repair:', bad);
// NOT_REPAIRED rows must not be in the repair list
for (const n of NOT_REPAIRED) if (RESPELL_REPAIRS.some(r=>r.id===n.id && r.kind!=='shouted')) console.log('CONTRADICTION: repaired AND not-repaired:', n.id);
console.log('outside cut:', OUTSIDE_THE_CUT.length, OUTSIDE_THE_CUT.filter(i=>!ids.includes(i)));
import { TWIN_REPAIRS } from './data/nourriture-corpus.ts';
console.log('\ntwin repairs:', TWIN_REPAIRS.length);
const seen = new Set<string>();
for (const t of TWIN_REPAIRS) { if (seen.has(t.id)) console.log('DUP TWIN', t.id); seen.add(t.id); if (t.from === t.to) console.log('NO-OP TWIN', t.id); }
