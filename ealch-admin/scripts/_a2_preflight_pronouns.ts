/* PRE-FLIGHT FOR SEQ 21..23 — a2.06, a2.24, a2.25 (the pronoun block).
 *
 * scripts/_a2_preflight.ts covers seq 5..20 only. This is the same three
 * measurements for the three units A2-BRIEF-CORRECTIONS.md §11 does not reach:
 * the identity blocks (§1 says all sixteen were swapped), what already exists,
 * and whether the hand-offs land.
 *
 *     pnpm tsx scripts/_a2_preflight_pronouns.ts
 */
import './env';
import { Pool } from 'pg';

const isWord = (c: string) => /[\p{L}\p{N}'’-]/u.test(c);
function hasPhrase(hay: string, needle: string): boolean {
  const h = hay.toLowerCase();
  const n = needle.toLowerCase();
  let i = 0;
  while ((i = h.indexOf(n, i)) !== -1) {
    const before = i === 0 ? '' : h[i - 1];
    const after = h[i + n.length] ?? '';
    if (!isWord(before) && !isWord(after)) return true;
    i += 1;
  }
  return false;
}

const UNITS = ['a2.06', 'a2.24', 'a2.25'];

/** The verbs each brief leans on. The pronouns themselves are function words and
 *  are probed as tokens in sentences, not as headwords. */
const WORDS: Record<string, string[]> = {
  'a2.06': ['voir', 'regarder', 'aimer', 'acheter', 'manger', 'connaître', 'inviter'],
  'a2.24': ['parler', 'donner', 'dire', 'téléphoner', 'répondre', 'demander', 'écrire', 'offrir', 'montrer', 'envoyer'],
  'a2.25': ['aller', 'penser', 'jouer', 'vouloir', 'avoir', 'boire', 'prendre'],
};

/** Tokens the lesson body is built out of. Counted inside published sentences. */
const TOKENS: Record<string, string[]> = {
  'a2.06': ['je le vois', 'je la vois', 'je les vois', 'tu le connais', 'je ne le vois pas'],
  'a2.24': ['je lui parle', 'je leur parle', 'je lui donne', 'il lui téléphone', 'je ne lui parle pas'],
  'a2.25': ["j'y vais", "il y a", "j'en veux", "j'en ai", "tu en as", "n'y va pas"],
};

const HANDOFFS: [string, string][] = [
  ['a2.24', 'lui'], ['a2.24', 'leur'], ['a2.24', 'indirect'],
  ['a2.25', 'y'], ['a2.25', 'en'],
  ['a2.06', 'direct'], ['a2.06', 'objet'],
  ['a2.23', 'accord'], ['a2.29', 'ordre'], ['a2.08', 'comparatif'],
];

const THEMES = [
  'verbes', 'verbes-essentiels', 'pronoms', 'pronoms-essentiels',
  'grammaire', 'grammaire-essentiels', 'routines', 'nourriture',
  'nourriture-essentiels', 'quantites', 'quantites-essentiels',
];

async function main() {
  const pool = new Pool({ connectionString: process.env.DATABASE_URL, max: 1 });
  const c = await pool.connect();

  const units = await c.query<{ body: Record<string, unknown> }>(
    "select body from content_units where kind = 'curriculum_unit'",
  );
  const byId = new Map(units.rows.map((r) => [String(r.body.id), r.body]));

  console.log('# A2 pre-flight, seq 21..23 (a2.06, a2.24, a2.25)');
  console.log(`# ${units.rowCount} curriculum units read\n`);

  console.log('## 1. Identity blocks, byte for byte from the database\n');
  for (const id of UNITS) {
    const u = byId.get(id);
    if (!u) { console.log(`${id}  NOT IN content_units`); continue; }
    console.log(`${id}  seq ${JSON.stringify(u.seq)}  level ${JSON.stringify(u.level)}  track ${JSON.stringify(u.track)}`);
    console.log(`      lessonIds ${JSON.stringify(u.lessonIds ?? [])}  prereq ${JSON.stringify(u.prereqUnitIds ?? [])}`);
    console.log(`      title  ${JSON.stringify(u.title)}`);
    console.log(`      sub    ${JSON.stringify(u.sub)}`);
    console.log(`      canDo  ${JSON.stringify(u.canDo)}`);
    console.log(`      themes ${JSON.stringify(u.themes ?? null)}`);
  }

  console.log('\n## 2. Headwords: how many rows already exist, and where\n');
  const rows = await c.query<{ id: string; fr: string; theme: string; respell: string | null; gender: string | null }>(
    "select id, fr, theme, respell, gender from content_items where kind <> 'sentence' and status = 'published'",
  );
  const ARTICLES = ['', 'le ', 'la ', "l'", 'les ', 'un ', 'une ', 'des ', 'du ', 'de la '];
  for (const [unit, words] of Object.entries(WORDS)) {
    console.log(`### ${unit}`);
    for (const w of words) {
      const hits = rows.rows.filter((r) => {
        const bare = r.fr.replace(/^(le |la |l'|les |un |une |des |du |de la )/i, '').toLowerCase();
        return ARTICLES.some((a) => (a + w).toLowerCase() === r.fr.toLowerCase()) || bare === w.toLowerCase();
      });
      console.log(`  ${w.padEnd(14)} ${String(hits.length).padStart(2)} row(s)  ${hits.slice(0, 3).map((h) => `${h.id}[${h.theme}]${h.respell ? ' ' + h.respell : ''}${h.gender ? ' g=' + h.gender : ''}`).join('  ')}`);
    }
  }

  console.log('\n## 3. Sentence evidence: does the construction occur at all?\n');
  const sents = await c.query<{ id: string; fr: string; theme: string }>(
    "select id, fr, theme from content_items where kind = 'sentence' and status = 'published'",
  );
  console.log(`  (${sents.rowCount} published sentences searched)\n`);
  for (const [unit, toks] of Object.entries(TOKENS)) {
    console.log(`### ${unit}`);
    for (const t of toks) {
      const hits = sents.rows.filter((r) => hasPhrase(r.fr, t));
      console.log(`  ${t.padEnd(18)} ${String(hits.length).padStart(3)}  ${hits.slice(0, 2).map((h) => `${h.id}[${h.theme}]`).join('  ')}`);
    }
  }

  console.log('\n## 4. Hand-offs: does the named unit actually mention the thing?\n');
  for (const [unit, needle] of HANDOFFS) {
    const u = byId.get(unit);
    if (!u) { console.log(`  ${unit} ${needle.padEnd(12)} UNIT DOES NOT EXIST`); continue; }
    const inBody = hasPhrase(JSON.stringify(u), needle);
    const anywhere = units.rows.filter((r) => hasPhrase(JSON.stringify(r.body), needle)).map((r) => String(r.body.id));
    console.log(`  ${unit} ${needle.padEnd(12)} ${inBody ? 'YES' : 'NO '}   named by: ${anywhere.length ? anywhere.join(' ') : 'NO UNIT AT ANY LEVEL'}`);
  }

  console.log('\n## 5. Themes, bare name and -essentiels (Corrections §14.2)\n');
  for (const t of THEMES) {
    const r = await c.query<{ n: string }>('select count(*) n from content_items where theme = $1 and status = $2', [t, 'published']);
    const seq = await c.query<{ pre: string; n: string; mx: string }>(
      `select substring(id from '^(fr\\.[a-z0-9]+\\.)') pre, count(*) n, max(id) mx
         from content_items where theme = $1 group by 1 order by 1`, [t],
    );
    console.log(`  ${t.padEnd(24)} ${String(r.rows[0].n).padStart(4)} published   ${seq.rows.map((x) => `${x.pre}* n=${x.n} max=${x.mx.split('.').pop()}`).join('  ')}`);
  }

  c.release();
  await pool.end();
}
main().catch((e) => { console.error(e); process.exit(1); });
