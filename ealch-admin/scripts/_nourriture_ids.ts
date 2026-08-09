import './env';
import { NOURRITURE_ITEM_IDS, NOURRITURE_SPEAK_IDS, NOURRITURE_DICTATION_IDS } from './data/nourriture-lesson.ts';
import { AUTHORED_ITEM_IDS } from './data/nourriture-corpus.ts';
const arr=(v:unknown):string[]=>Array.isArray(v)?v as string[]:typeof v!=='string'?[]:v.replace(/^\{|\}$/g,'').split(',').map(s=>s.trim().replace(/^"|"$/g,'')).filter(Boolean);
async function main(){
  const {Pool}=await import('pg');
  const pool=new Pool({connectionString:process.env.DATABASE_URL,max:1});
  const c=await pool.connect();
  const all=[...new Set([...NOURRITURE_ITEM_IDS,...NOURRITURE_SPEAK_IDS,...NOURRITURE_DICTATION_IDS])];
  const authored=new Set(AUTHORED_ITEM_IDS);
  const toCheck=all.filter(i=>!authored.has(i));
  const {rows}=await c.query(`select id,drills,kind from content_items where id=any($1::text[]) and status='published'`,[toCheck]);
  const found=new Map(rows.map(r=>[r.id,r]));
  const missing=toCheck.filter(i=>!found.has(i));
  console.log(`declared ${all.length} | authored ${authored.size} | to verify ${toCheck.length} | found ${rows.length}`);
  console.log(missing.length?`MISSING / UNPUBLISHED: ${missing.join(' ')}`:'every served id is published');
  // speak needs voiceflash, dictation needs dictation. Checked against PG, not the seed.
  const noVF=NOURRITURE_SPEAK_IDS.filter(i=>!authored.has(i)&&!arr(found.get(i)?.drills).includes('voiceflash'));
  const noDict=NOURRITURE_DICTATION_IDS.filter(i=>!authored.has(i)&&!arr(found.get(i)?.drills).includes('dictation'));
  console.log(noVF.length?`SPEAK targets WITHOUT voiceflash: ${noVF.join(' ')}`:'every speak target carries voiceflash');
  console.log(noDict.length?`DICTATION targets WITHOUT dictation: ${noDict.join(' ')}`:'every dictation target carries dictation');
  c.release();
}
main().catch(e=>{console.error(e);process.exit(1);});
