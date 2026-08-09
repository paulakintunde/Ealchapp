import './env';
import { FOOD_IDS } from './data/nourriture-corpus.ts';
const arr=(v:unknown):string[]=>Array.isArray(v)?v as string[]:typeof v!=='string'?[]:v.replace(/^\{|\}$/g,'').split(',').map(s=>s.trim().replace(/^"|"$/g,'')).filter(Boolean);
async function main(){
  const {Pool}=await import('pg');
  const pool=new Pool({connectionString:process.env.DATABASE_URL,max:1});
  const c=await pool.connect();
  const {rows}=await c.query(`select id,fr,en,ipa,respell,gender,theme,tags,drills from content_items
    where status='published' and kind='word' and level='a1' and theme in ('cuisine','marche')
      and gender is not null order by id`);
  const served=new Set(FOOD_IDS);
  const out=rows.filter(r=>!served.has(r.id) && (arr(r.tags).includes('food')||arr(r.tags).includes('fruit')||arr(r.tags).includes('vegetable')||arr(r.tags).includes('meat')||arr(r.tags).includes('dessert')||arr(r.tags).includes('bakery')));
  console.log('UNSERVED food-tagged gendered words in cuisine/marche:',out.length);
  for(const r of out) console.log(`  ${r.id.padEnd(24)} ${String(r.fr).padEnd(22)} ${r.gender} ${String(r.respell??'-').padEnd(22)} tags=${arr(r.tags).join(',')}`);
  c.release();
}
main().catch(e=>{console.error(e);process.exit(1);});
