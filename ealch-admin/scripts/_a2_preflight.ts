/* PRE-FLIGHT FOR EVERY UNDEVELOPED A2 LESSON, run once so sixteen authors do not
 * each rediscover the same four things.
 *
 * Every A2 build so far has spent its first hour finding that (a) its identity
 * block is swapped, (b) the vocabulary it was told to author already exists, and
 * (c) the unit it was told to hand something off to does not own it. This
 * measures all three for all sixteen remaining lessons in one pass.
 *
 *     pnpm tsx scripts/_a2_preflight.ts > /tmp/a2-preflight.txt
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

/** unit id -> the headwords its brief tells the author to probe. */
const WORDS: Record<string, string[]> = {
  'a2.02': ['aller', 'venir', 'tenir', 'revenir', 'devenir', 'obtenir', 'appartenir'],
  'a2.03': ['heureux', 'heureuse', 'sportif', 'sportive', 'sérieux', 'actif', 'marron', 'orange'],
  'a2.04': ['la France', 'le Japon', 'les États-Unis', 'le Canada', "l'Espagne", 'Paris', 'Londres'],
  'a2.05': ['manger', 'parler', 'finir', 'vendre', 'avoir'],
  'a2.12': ['faire', 'dire', 'lire', 'écrire'],
  'a2.13': ['vouloir', 'pouvoir', 'devoir', 'savoir'],
  'a2.14': ['savoir', 'connaître', 'reconnaître', 'paraître'],
  'a2.15': ['prendre', 'apprendre', 'comprendre', 'surprendre', 'mettre', 'permettre', 'promettre', 'remettre', 'battre', 'combattre'],
  'a2.16': ['beau', 'belle', 'nouveau', 'nouvelle', 'vieux', 'vieille'],
  'a2.17': ['lentement', 'rapidement', 'heureusement', 'vraiment', 'bien', 'mal', 'vite', 'souvent', 'toujours', 'évidemment', 'constamment'],
  'a2.18': ['depuis', 'pendant', 'dans', 'il y a', 'en', 'pour'],
  'a2.19': ['aller'],
  'a2.20': ['faire', 'prendre', 'voir', 'mettre', 'écrire', 'ouvrir'],
  'a2.21': ['aller', 'venir', 'partir', 'sortir', 'monter', 'descendre', 'rester', 'tomber', 'naître', 'mourir', 'entrer', 'rentrer', 'retourner', 'arriver', 'passer'],
  'a2.22': ['se lever', 'se coucher', 'se laver', "s'habiller", 'se réveiller', 'se brosser', 'se dépêcher', "s'appeler"],
  'a2.23': ['se lever', 'se laver'],
};

/** Things a brief says belong to another unit. Each is checked against EVERY
 *  unit body, because a2.10 and a2.11 both found hand-offs pointing at units
 *  that do not name the thing. */
const HANDOFFS: [string, string][] = [
  ['a2.19', 'futur proche'], ['a2.19', 'aller'],
  ['a2.04', 'chez'], ['a2.18', 'depuis'], ['a2.18', 'pendant'], ['a2.18', 'il y a'],
  ['a2.21', 'monter'], ['a2.21', 'descendre'], ['a2.21', 'accord'],
  ['a2.20', 'participe'], ['a2.05', 'participe'],
  ['a2.15', 'prendre'], ['a2.15', 'compos'],
  ['a2.24', 'lui'], ['a2.24', 'leur'],
  ['a2.16', 'beau'], ['a2.17', 'adverbe'],
  ['a2.22', 'pronominaux'], ['a2.23', 'pronominaux'],
  ['a2.03', 'accord'], ['a2.14', 'connaître'], ['a2.13', 'devoir'],
];

async function main() {
  const pool = new Pool({ connectionString: process.env.DATABASE_URL, max: 1 });
  const c = await pool.connect();

  const units = await c.query<{ body: Record<string, unknown> }>(
    "select body from content_units where kind = 'curriculum_unit'",
  );
  const byId = new Map(units.rows.map((r) => [String(r.body.id), r.body]));

  console.log('# A2 pre-flight, measured against Postgres');
  console.log(`# ${units.rowCount} curriculum units read\n`);

  /* ── 1. THE IDENTITY BLOCKS, verbatim ──────────────────────────────────── */
  console.log('## 1. Identity blocks, byte for byte from the database\n');
  for (const id of Object.keys(WORDS)) {
    const u = byId.get(id);
    if (!u) { console.log(`${id}  NOT IN content_units`); continue; }
    console.log(`${id}  seq ${JSON.stringify(u.seq)}  lessonIds ${JSON.stringify(u.lessonIds ?? [])}  prereq ${JSON.stringify(u.prereqUnitIds ?? [])}`);
    console.log(`      title  ${JSON.stringify(u.title)}`);
    console.log(`      sub    ${JSON.stringify(u.sub)}`);
    console.log(`      canDo  ${JSON.stringify(u.canDo)}`);
  }

  /* ── 2. DOES THE VOCABULARY ALREADY EXIST? ─────────────────────────────── */
  console.log('\n## 2. Headwords: how many rows already exist, and where\n');
  const rows = await c.query<{ id: string; fr: string; theme: string; respell: string | null; gender: string | null; drills: string[] }>(
    "select id, fr, theme, respell, gender, drills from content_items where kind <> 'sentence' and status = 'published'",
  );
  const ARTICLES = ['', 'le ', 'la ', "l'", 'les ', 'un ', 'une ', 'des ', 'du ', 'de la '];
  for (const [unit, words] of Object.entries(WORDS)) {
    console.log(`### ${unit}`);
    for (const w of words) {
      const hits = rows.rows.filter((r) => {
        const bare = r.fr.replace(/^(le |la |l'|les |un |une |des |du |de la )/i, '').toLowerCase();
        return ARTICLES.some((a) => (a + w).toLowerCase() === r.fr.toLowerCase()) || bare === w.toLowerCase();
      });
      const flag = hits.some((h) => h.respell && /[aeiouyàâéèêëîïôöûü]n(?![a-zàâéèêëîïôöûü])/i.test(h.respell) === false && /[ao]h?n[a-z]/i.test(h.respell));
      console.log(`  ${w.padEnd(16)} ${String(hits.length).padStart(2)} row(s)  ${hits.slice(0, 3).map((h) => `${h.id}[${h.theme}]${h.respell ? ' ' + h.respell : ''}${h.gender ? ' g=' + h.gender : ''}`).join('  ')}${flag ? '   ⚠ check nasal' : ''}`);
    }
  }

  /* ── 3. DO THE HAND-OFFS ACTUALLY LAND? ────────────────────────────────── */
  console.log('\n## 3. Hand-offs: does the named unit actually mention the thing?\n');
  for (const [unit, needle] of HANDOFFS) {
    const u = byId.get(unit);
    if (!u) { console.log(`  ${unit} ${needle.padEnd(14)} UNIT DOES NOT EXIST`); continue; }
    const inBody = hasPhrase(JSON.stringify(u), needle);
    const anywhere = units.rows.filter((r) => hasPhrase(JSON.stringify(r.body), needle)).map((r) => String(r.body.id));
    console.log(`  ${unit} ${needle.padEnd(14)} ${inBody ? 'YES' : 'NO '}   named by: ${anywhere.length ? anywhere.join(' ') : 'NO UNIT AT ANY LEVEL'}`);
  }

  /* ── 4. THE ID BLOCKS, and how much room is left ───────────────────────── */
  console.log('\n## 4. Themes the remaining lessons will write into\n');
  for (const t of ['verbes', 'verbes-essentiels', 'adjectifs', 'adverbes', 'routine', 'routines', 'pays', 'lieux', 'temps', 'temps-et-frequence']) {
    const r = await c.query<{ n: string }>('select count(*) n from content_items where theme = $1 and status = $2', [t, 'published']);
    const seq = await c.query<{ pre: string; n: string; mx: string }>(
      `select substring(id from '^(fr\\.[a-z0-9]+\\.)') pre, count(*) n, max(id) mx
         from content_items where theme = $1 group by 1 order by 1`, [t],
    );
    console.log(`  ${t.padEnd(20)} ${String(r.rows[0].n).padStart(4)} published   ${seq.rows.map((x) => `${x.pre}* n=${x.n} max=${x.mx.split('.').pop()}`).join('  ')}`);
  }

  c.release();
  await pool.end();
}
main().catch((e) => { console.error(e); process.exit(1); });
