import './env';
const IDS = ["fr.a1.cuisine.002","fr.a1.cuisine.115","fr.a1.cuisine.114","fr.a1.cuisine.062","fr.a1.cuisine.011","fr.a1.cuisine.012","fr.a1.cuisine.056","fr.a1.cuisine.055","fr.a1.cuisine.054","fr.a1.au-restaurant.088","fr.a1.cuisine.014","fr.a1.cuisine.015","fr.a1.cuisine.124","fr.a1.cuisine.123","fr.a1.cuisine.037","fr.a1.cuisine.016","fr.a1.cuisine.128","fr.a1.cuisine.017","fr.a1.cuisine.018","fr.a1.cuisine.019","fr.a1.cuisine.020","fr.a1.cafe.054","fr.a1.au-restaurant.069","fr.a1.marche.045","fr.a1.marche.047","fr.a1.marche.048","fr.a1.cuisine.035","fr.a1.cuisine.036","fr.a1.cuisine.047","fr.a1.cuisine.050","fr.a1.cuisine.048","fr.a1.cuisine.072","fr.a1.au-restaurant.077","fr.a1.cuisine.031","fr.a1.cuisine.033","fr.a1.cuisine.034","fr.a1.cuisine.053","fr.a1.cuisine.030","fr.a1.cuisine.101","fr.a1.cuisine.032","fr.a1.cuisine.010","fr.a1.au-restaurant.081","fr.a1.au-restaurant.082","fr.a1.cuisine.064","fr.a1.au-restaurant.007","fr.a1.au-restaurant.008","fr.a1.cuisine.023","fr.a1.cuisine.024","fr.a1.cuisine.058","fr.a1.cuisine.059","fr.a1.cuisine.057","fr.a1.cuisine.061","fr.a1.cuisine.038","fr.a1.cuisine.039","fr.a1.cuisine.040","fr.a1.mots-essentiels.004"];
const arr=(v:unknown):string[]=>Array.isArray(v)?v as string[]:typeof v!=='string'?[]:v.replace(/^\{|\}$/g,'').split(',').map(s=>s.trim().replace(/^"|"$/g,'')).filter(Boolean);
async function main(){
  const {Pool}=await import('pg');
  const pool=new Pool({connectionString:process.env.DATABASE_URL,max:1});
  const c=await pool.connect();
  const {rows}=await c.query(`select id,kind,level,theme,fr,en,ipa,respell,gender,notes,tags,drills,version,card_type from content_items where id = any($1::text[]) and status='published'`,[IDS]);
  const byId=new Map(rows.map(r=>[r.id,r]));
  for(const id of IDS){const r=byId.get(id);if(!r){console.log(`MISSING ${id}`);continue;}
  console.log(`  { id: ${JSON.stringify(r.id)}, kind: ${JSON.stringify(r.kind)}, level: ${JSON.stringify(r.level)}, theme: ${JSON.stringify(r.theme)}, fr: ${JSON.stringify(r.fr)}, en: ${JSON.stringify(r.en)}, ipa: ${JSON.stringify(r.ipa)}, respell: ${JSON.stringify(r.respell)}, gender: ${JSON.stringify(r.gender)}, tags: ${JSON.stringify(arr(r.tags))}, drills: ${JSON.stringify(arr(r.drills))}, version: ${r.version}${r.card_type?`, cardType: ${JSON.stringify(r.card_type)}`:''}${r.notes?`, notes: ${JSON.stringify(r.notes)}`:''} },`);}
  console.log(`\nfound ${rows.length} of ${IDS.length}`);
  c.release();

}
main().catch(e=>{console.error(e);process.exit(1);});
