import './env';
import { FOODS, LIKE_COLUMN, EAT_COLUMN, NEGATION_PAIR } from './data/nourriture-corpus.ts';
const arr=(v:unknown):string[]=>Array.isArray(v)?v as string[]:typeof v!=='string'?[]:v.replace(/^\{|\}$/g,'').split(',').map(s=>s.trim().replace(/^"|"$/g,'')).filter(Boolean);
async function main(){
  const {Pool}=await import('pg');
  const pool=new Pool({connectionString:process.env.DATABASE_URL,max:1});
  const c=await pool.connect();
  const ids=[...FOODS.map(f=>f.id),...LIKE_COLUMN.map(s=>s.id),...EAT_COLUMN.map(s=>s.id),NEGATION_PAIR.like.id,NEGATION_PAIR.eat.id];
  const {rows}=await c.query(`select id,fr,kind,drills from content_items where id=any($1::text[]) and status='published'`,[ids]);
  const vf=rows.filter(r=>arr(r.drills).includes('voiceflash'));
  const dict=rows.filter(r=>arr(r.drills).includes('dictation'));
  console.log(`voiceflash-capable: ${vf.length} of ${rows.length}`);
  console.log(`  sentences with voiceflash: ${vf.filter(r=>r.kind==='sentence').map(r=>r.id+'="'+r.fr+'"').join(' | ')||'NONE'}`);
  console.log(`\ndictation-capable: ${dict.length} of ${rows.length}`);
  for(const r of dict) console.log(`  ${r.id.padEnd(24)} ${r.kind.padEnd(9)} "${r.fr}"`);
  c.release();
}
main().catch(e=>{console.error(e);process.exit(1);});
