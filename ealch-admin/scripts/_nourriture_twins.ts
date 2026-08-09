import './env';
import { FOODS } from './data/nourriture-corpus.ts';
const arr=(v:unknown):string[]=>Array.isArray(v)?v as string[]:typeof v!=='string'?[]:v.replace(/^\{|\}$/g,'').split(',').map(s=>s.trim().replace(/^"|"$/g,'')).filter(Boolean);
const strip=(f:string)=>f.replace(/^(le |la |les |l'|un |une |des |du |de la )/i,'').toLowerCase();
async function main(){
  const {Pool}=await import('pg');
  const pool=new Pool({connectionString:process.env.DATABASE_URL,max:1});
  const c=await pool.connect();
  const {rows}=await c.query(`select id,fr,respell,theme from content_items
    where status='published' and kind='word' and level='a1' and theme in ('cuisine','marche') order by id`);
  const servedIds=new Set(FOODS.map(f=>f.id));
  console.log('// Cross-theme twins: same word, both themes now in a1.23\'s unit, different transcription.');
  let n=0;
  for(const f of FOODS){
    if(!/^fr\.a1\.(cuisine|marche)\./.test(f.id)) continue;
    const twins=rows.filter(r=>r.id!==f.id && !servedIds.has(r.id) && strip(r.fr)===strip(f.fr));
    for(const t of twins){
      if((t.respell??'')===f.respell) continue;
      n++;
      console.log(`  { id: ${JSON.stringify(t.id)}, fr: ${JSON.stringify(t.fr)}, from: ${JSON.stringify(t.respell??'')}, to: to(${JSON.stringify(f.bare)}), theme: ${JSON.stringify(t.theme)} },`);
    }
  }
  console.log(`// ${n} twins disagree`);
  c.release();
}
main().catch(e=>{console.error(e);process.exit(1);});
