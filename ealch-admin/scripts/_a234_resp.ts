import './env';
import { Pool } from 'pg';
import { hasPlainNasalFor } from '../../ealch-v2/src/content/density.logic.ts';
async function main() {
const pool = new Pool({ connectionString: process.env.DATABASE_URL, max: 1 });
const c = await pool.connect();
console.log('=== published headwords ending -enne / -ienne, and how the house respells them ===');
const r = await c.query(`select id, fr, respell from content_items
  where status='published' and respell is not null and kind<>'sentence'
    and fr ~ '(enne|ienne)$' order by fr limit 40`);
for (const x of r.rows) console.log(`  ${hasPlainNasalFor(x.fr,x.respell)?'FLAG':'ok  '} ${x.id.padEnd(38)} "${x.fr}" -> ${x.respell}`);
console.log('\n=== any published row whose fr CONTAINS a -enne word, respelled ===');
const r2 = await c.query(`select id, fr, respell from content_items
  where status='published' and respell is not null
    and fr ~* '\m(mienne|tienne|sienne|ancienne|italienne|parisienne|chienne|europ√©enne|moyenne|antenne)\M' limit 25`);
for (const x of r2.rows) console.log(`  ${hasPlainNasalFor(x.fr,x.respell)?'FLAG':'ok  '} ${x.id.padEnd(38)} "${x.fr}"\n        ${x.respell}`);
await c.release(); await pool.end();
console.log('\n=== candidate respellings for the feminine forms, through the real checker ===');
const CAND: [string,string[]][] = [
  ['la mienne', ['lah MYEHN','lah MYENN','lah MYEN','lah myEHN','lah MYEH-NUH','lah mee-EHN','lah MYEHNN']],
  ['les miennes',['lay MYEHN','lay MYENN','lay MYEHNN']],
  ['la tienne', ['lah TYEHN','lah TYENN','lah TYEHNN']],
  ['la sienne', ['lah SYEHN','lah SYENN','lah SYEHNN']],
  ['les tiennes',['lay TYENN','lay TYEHNN']],
  ['les siennes',['lay SYENN','lay SYEHNN']],
];
for (const [fr, list] of CAND) for (const rs of list) console.log(`  ${hasPlainNasalFor(fr,rs)?'FLAG':'ok  '} ${fr.padEnd(13)} ${rs}`);
console.log('\n=== and the masculine, confirming the superscript passes ===');
for (const [fr,rs] of [['le mien','luh MYEHⁿ'],['les miens','lay MYEHⁿ'],['le tien','luh TYEHⁿ'],['les tiens','lay TYEHⁿ'],['le sien','luh SYEHⁿ'],['les siens','lay SYEHⁿ']] as [string,string][]) {
  console.log(`  ${hasPlainNasalFor(fr,rs)?'FLAG':'ok  '} ${fr.padEnd(11)} ${rs}`);
}
}
main();
