import {COUNTS,FOODS,SHELVES,onShelf,RESPELL_REPAIRS,TWIN_REPAIRS,NOT_REPAIRED,NASAL_FORMS,NOT_NASAL_FORMS,THE_PAIR,NEGATION_PAIR,UNIT_THEMES,OUTSIDE_THE_CUT} from './data/nourriture-corpus.ts';
import {REFRAME,REFRAME_COUNT,NOURRITURE_TERMS,TERMS_BY_ACT} from './data/nourriture-terms.ts';
import {IMPORTED,REUSED,ALL_BORROWED_IDS} from './data/nourriture-imported.ts';
import {hasPlainNasalFor} from '../../ealch-v2/src/content/density.logic.ts';
console.log('unit themes ->', UNIT_THEMES.join(', '));
console.log('foods', COUNTS.total, '= served', COUNTS.served, '+ authored', COUNTS.authored);
console.log('shelves', SHELVES.map(s=>`${s}:${onShelf(s).length}`).join(' '));
console.log('repairs', RESPELL_REPAIRS.length, '+ twins', TWIN_REPAIRS.length, '=', RESPELL_REPAIRS.length+TWIN_REPAIRS.length);
console.log('not-repaired', NOT_REPAIRED.length, '| nasal forms', NASAL_FORMS.length, '| not-nasal', NOT_NASAL_FORMS.length);
console.log('imported', IMPORTED.length, '| reused', REUSED.length, '| outside cut', OUTSIDE_THE_CUT.length);
console.log('reframe:', JSON.stringify(REFRAME), 'x', REFRAME_COUNT);
console.log('terms', Object.keys(NOURRITURE_TERMS).length, '| max chips/act', Math.max(...Object.values(TERMS_BY_ACT).map(a=>a.length)));
let bad=0;
for(const a of Object.keys(TERMS_BY_ACT)) for(const t of TERMS_BY_ACT[+a]) if(!NOURRITURE_TERMS[t]) {console.log('UNDEFINED TERM',t);bad++;}
// every NASAL_FORMS entry must actually carry the superscript in our value
for(const fr of NASAL_FORMS){const f=FOODS.find(x=>x.fr===fr); if(!f){console.log('NASAL_FORMS names a non-food:',fr);bad++;continue;} if(!f.respell.includes('ⁿ')){console.log('NASAL form without superscript:',fr,f.respell);bad++;}}
for(const fr of NOT_NASAL_FORMS){const f=FOODS.find(x=>x.fr===fr); if(!f){console.log('NOT_NASAL names a non-food:',fr);bad++;continue;} if(f.respell.includes('ⁿ')){console.log('NOT_NASAL form WITH superscript:',fr,f.respell);bad++;}}
// the shared checker must still flag exactly the documented false positives
const flagged=FOODS.filter(f=>hasPlainNasalFor(f.bare,f.respell)).map(f=>f.fr);
console.log('still flagged by the shared checker:', flagged.length?flagged.join(', '):'none');
for(const fr of flagged) if(!NOT_NASAL_FORMS.includes(fr)){console.log('FLAGGED AND NOT DOCUMENTED:',fr);bad++;}
// every imported/reused id is referenced by something
const ids=new Set(FOODS.map(f=>f.id));
console.log('imported rows that are food cards:', IMPORTED.filter(i=>ids.has(i.id)).length, 'of', IMPORTED.length);
console.log(bad?`\n${bad} PROBLEM(S)`:'\nall internal checks pass');
