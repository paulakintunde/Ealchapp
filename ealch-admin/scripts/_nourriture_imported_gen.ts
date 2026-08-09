import './env';
import { OUTSIDE_THE_CUT, LIKE_COLUMN, EAT_COLUMN, NEGATION_PAIR } from './data/nourriture-corpus.ts';
const arr=(v:unknown):string[]=>Array.isArray(v)?v as string[]:typeof v!=='string'?[]:v.replace(/^\{|\}$/g,'').split(',').map(s=>s.trim().replace(/^"|"$/g,'')).filter(Boolean);
async function main(){
  const {Pool}=await import('pg');
  const pool=new Pool({connectionString:process.env.DATABASE_URL,max:1});
  const c=await pool.connect();
  const seed=JSON.parse(require('node:fs').readFileSync(new URL('../../ealch-v2/src/content/seed.json',import.meta.url),'utf8'));
  const inSeed=new Set<string>(seed.items.map((i:{id:string})=>i.id));
  const sentenceIds=[...LIKE_COLUMN,...EAT_COLUMN,NEGATION_PAIR.like,NEGATION_PAIR.eat].map(s=>s.id);
  const all=[...new Set([...OUTSIDE_THE_CUT,...sentenceIds])];
  const {rows}=await c.query(`select id,kind,level,theme,fr,en,ipa,respell,gender,notes,tags,drills,version,card_type from content_items where id=any($1::text[]) and status='published' order by id`,[all]);
  const need=rows.filter(r=>!inSeed.has(r.id));
  const have=rows.filter(r=>inSeed.has(r.id));
  console.log(`// ${rows.length} rows referenced, ${need.length} NOT in the seed (must be carried), ${have.length} already there.`);
  console.log('\n/* ---- IMPORTED: published in Postgres, ABSENT from the seed ---- */');
  for(const r of need) console.log(`  { id: ${JSON.stringify(r.id)}, kind: ${JSON.stringify(r.kind)}, level: ${JSON.stringify(r.level)}, theme: ${JSON.stringify(r.theme)}, fr: ${JSON.stringify(r.fr)}, en: ${JSON.stringify(r.en)}, ipa: ${JSON.stringify(r.ipa)}, respell: ${JSON.stringify(r.respell)}, gender: ${JSON.stringify(r.gender)}, tags: ${JSON.stringify(arr(r.tags))}, drills: ${JSON.stringify(arr(r.drills))}, version: ${r.version}${r.card_type?`, cardType: ${JSON.stringify(r.card_type)}`:''}${r.notes?`, notes: ${JSON.stringify(r.notes)}`:''} },`);
  console.log('\n/* ---- REUSED: already in the seed, untouched ---- */');
  for(const r of have) console.log(`  { id: ${JSON.stringify(r.id)}, fr: ${JSON.stringify(r.fr)}, en: ${JSON.stringify(r.en)} },`);
  const missing=all.filter(i=>!rows.some(r=>r.id===i));
  if(missing.length) console.log('\n// !! NOT PUBLISHED / NOT FOUND:', missing.join(' '));
  c.release();
}
main().catch(e=>{console.error(e);process.exit(1);});
