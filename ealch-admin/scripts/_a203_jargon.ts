/* Where is the jargon line, measured rather than guessed?
 *
 * a2.03's first JARGON list banned `adjective`, `feminine`, `plural` and
 * `masculine`, which is stricter than the house and which fights this lesson's
 * whole subject. The right line is the one a1.13, a1.14 and a1.16 already draw,
 * because those are the three lessons the learner has just done.
 *
 * This counts each candidate on the LEARNER SURFACES of those three, with
 * grammarAssumed and grammarIntroduced excluded — invariants §8 says those are
 * addressed to the curriculum and may use the precise words.
 */
import './env';
import { Pool } from 'pg';

const CANDIDATES = [
  'adjective', 'adjectives', 'noun', 'nouns', 'agreement', 'agree', 'agrees',
  'inflection', 'inflected', 'paradigm', 'declension', 'morpheme', 'morphology',
  'gender', 'grammatical', 'masculine', 'feminine', 'singular', 'plural',
  'attributive', 'predicative', 'prenominal', 'postnominal', 'suffix',
  'orthography', 'phoneme', 'lexeme', 'invariable', 'denominal',
  'first person', 'second person', 'third person', 'conjugation', 'conjugate',
  'verb', 'verbs', 'consonant', 'vowel', 'syllable', 'stem',
];

const isWord = (c: string) => /[\p{L}\p{N}'’-]/u.test(c);
function countPhrase(hay: string, needle: string): number {
  const h = hay.toLowerCase(); const n = needle.toLowerCase();
  let i = 0; let k = 0;
  while ((i = h.indexOf(n, i)) !== -1) {
    if (!isWord(i === 0 ? '' : h[i - 1]) && !isWord(h[i + n.length] ?? '')) k += 1;
    i += 1;
  }
  return k;
}
function strings(v: unknown, out: string[] = []): string[] {
  if (typeof v === 'string') out.push(v);
  else if (Array.isArray(v)) for (const x of v) strings(x, out);
  else if (v && typeof v === 'object') for (const x of Object.values(v)) strings(x, out);
  return out;
}

async function main() {
  const pool = new Pool({ connectionString: process.env.DATABASE_URL, max: 1 });
  const ids = ['a1.13.l1', 'a1.14.l1', 'a1.16.l1', 'a2.15.l1', 'a2.01.l1'];
  const r = await pool.query(
    "select body from content_units where kind='lesson' and body->>'id' = any($1)", [ids]);
  const surfaces = new Map<string, string>();
  for (const row of r.rows) {
    const b = row.body as Record<string, unknown>;
    const learner = [
      ...strings(b.sections), ...strings(b.sheets ?? []), ...strings(b.terms ?? {}),
      String(b.intro ?? ''), ...strings(b.overview ?? {}), ...strings(b.acts ?? []),
      ...strings(b.drills ?? []),
    ].join('\n');
    surfaces.set(String(b.id), learner);
  }
  const order = ids.filter((i) => surfaces.has(i));
  console.log(`\n  ${'word'.padEnd(16)} ${order.map((i) => i.padEnd(10)).join('')}`);
  console.log(`  ${'-'.repeat(16 + order.length * 10)}`);
  for (const w of CANDIDATES) {
    const counts = order.map((i) => countPhrase(surfaces.get(i) ?? '', w));
    if (counts.every((n) => n === 0)) continue;
    console.log(`  ${w.padEnd(16)} ${counts.map((n) => String(n).padEnd(10)).join('')}`);
  }
  console.log('\n  (a word with zeroes everywhere is omitted: the house avoids it and a2.03 should too)\n');
  const never = CANDIDATES.filter((w) => order.every((i) => countPhrase(surfaces.get(i) ?? '', w) === 0));
  console.log(`  NEVER USED by any of the five, so safe to ban outright (${never.length}):`);
  console.log(`    ${never.join(', ')}\n`);
  await pool.end();
}
main().catch((e) => { console.error(e); process.exit(1); });
