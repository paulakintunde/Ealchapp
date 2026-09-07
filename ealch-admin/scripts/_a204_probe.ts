/* a2.04 pre-flight. Prépositions de lieu, seq 13.
 *
 * The brief assumes nearly all its vocabulary exists and says that assumption is
 * unmeasured. This measures it, and it measures the three things the brief lists
 * as UNVERIFIED: what a1.16 and a1.29 shipped about des = de + les, whether
 * a1.21 already covers chez, and what a1.21 actually covers.
 *
 *     pnpm tsx scripts/_a204_probe.ts
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

const pool = new Pool({ connectionString: process.env.DATABASE_URL });

/** Headwords and phrases to probe, with real orthography and accents. */
const WORDS = [
  // cities
  'Paris', 'Lyon', 'Marseille', 'Londres', 'Bordeaux', 'Toulouse', 'Nice', 'Genève', 'Bruxelles',
  // people you go chez
  'le médecin', 'le dentiste', 'le coiffeur', 'le boulanger', 'le pharmacien', 'le voisin',
  'un ami', 'mes parents', 'le docteur',
  // places you go à / au / aux
  'le restaurant', 'le cinéma', 'la banque', 'la poste', "l'école", "l'hôpital", 'la gare',
  'le musée', 'le parc', 'la piscine', 'le marché', 'la pharmacie', 'la boulangerie',
  'le bureau', 'la maison', 'le supermarché', 'la bibliothèque', 'les toilettes',
  // continents
  "l'Europe", "l'Afrique", "l'Asie", "l'Amérique",
  // countries the lesson may lean on
  'la France', 'le Japon', 'les États-Unis', 'le Canada', "l'Espagne", "l'Italie", 'le Portugal',
  "l'Iran", 'le Mexique', 'la Belgique', 'le Sénégal', "l'Allemagne",
];

/** Phrases: sentence evidence, which is a different question from a headword. */
const TOKENS = [
  'en France', 'au Japon', 'aux États-Unis', 'à Paris', 'de Paris',
  'chez moi', 'chez toi', 'chez nous', 'chez vous', 'chez lui', 'chez elle',
  'chez le médecin', 'chez le dentiste', 'chez le coiffeur', 'chez mes parents',
  'chez le boulanger', 'chez des amis', 'chez Marie',
  'au restaurant', 'au cinéma', 'à la banque', "à l'école", "à l'hôpital", 'aux toilettes',
  'au bureau', 'à la maison', 'à la gare', 'au parc', 'au marché',
  'en Europe', 'en Afrique', 'en Asie',
  'je viens de', 'du Japon', 'des États-Unis', "d'Espagne",
];

async function main() {
  const c = await pool.connect();
  const out: string[] = [];
  const say = (s = '') => { out.push(s); };

  /* ── 1. Units: who names what ─────────────────────────────────────────── */
  const units = await c.query(
    `select body from content_units where kind = 'curriculum_unit' order by body->>'id'`,
  );
  const bodies = units.rows.map((r) => r.body as Record<string, unknown>);
  say('## 1. Units, and which of them names the thing');
  say();
  for (const term of ['chez', 'lieu', 'ville', 'pays', 'préposition', 'preposition']) {
    const named = bodies
      .filter((b) => hasPhrase(JSON.stringify(b), term))
      .map((b) => `${b.id}(seq ${b.seq})`);
    say(`  ${term.padEnd(14)} ${named.length ? named.join(' ') : 'NO UNIT AT ANY LEVEL'}`);
  }
  say();
  for (const id of ['a2.04', 'a2.18', 'a2.27', 'a2.28', 'a2.29', 'a1.21', 'a1.22', 'a1.16', 'a1.29']) {
    const b = bodies.find((x) => x.id === id);
    if (!b) { say(`  ${id}  NOT FOUND`); continue; }
    say(`  ${id}  seq ${b.seq}  lessonIds ${JSON.stringify(b.lessonIds)}  prereq ${JSON.stringify(b.prereqUnitIds)}`);
    say(`        title "${b.title}"`);
    say(`        sub   "${b.sub}"`);
    say(`        canDo "${b.canDo}"`);
  }
  say();

  /* ── 2. Headwords ─────────────────────────────────────────────────────── */
  say('## 2. Headwords: rows that exist, at any status');
  say();
  for (const w of WORDS) {
    const bare = w.replace(/^(le |la |les |l')/, '');
    const r = await c.query(
      `select id, theme, respell, gender, status, kind
         from content_items
        where lower(fr) = lower($1) or lower(fr) = lower($2)
        order by id`,
      [w, bare],
    );
    const rows = r.rows as { id: string; theme: string; respell: string | null; gender: string | null; status: string; kind: string }[];
    if (!rows.length) { say(`  ${w.padEnd(18)} 0 rows   ABSENT`); continue; }
    const desc = rows
      .map((x) => `${x.id}[${x.respell ?? 'NO RESPELL'}${x.gender ? ` g=${x.gender}` : ''}${x.status !== 'published' ? ` ${x.status}` : ''}]`)
      .join('  ');
    say(`  ${w.padEnd(18)} ${String(rows.length).padStart(2)} rows   ${desc}`);
  }
  say();

  /* ── 3. Sentence evidence, and how much of it can reach a card ────────── */
  say('## 3. Phrase evidence. `all` is every published row, `card` carries a respell.');
  say();
  for (const t of TOKENS) {
    const r = await c.query(
      `select count(*)::int as all_n,
              count(*) filter (where respell is not null)::int as card_n
         from content_items
        where status = 'published' and fr ~* ('\\y' || $1 || '\\y')`,
      [t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')],
    );
    const { all_n, card_n } = r.rows[0];
    say(`  ${t.padEnd(20)} all ${String(all_n).padStart(4)}   card ${String(card_n).padStart(3)}`);
  }
  say();

  /* ── 4. Themes and next-free ids ──────────────────────────────────────── */
  say('## 4. Themes this lesson might write into');
  say();
  const THEMES = [
    'pays-et-nationalites', 'prepositions-essentielles', 'mots-essentiels',
    'lieux', 'lieux-de-ville', 'deplacements', 'transports-quotidiens', 'ville',
    'quebec-et-francophonie', 'adverbes-essentiels', 'adjectifs-essentiels',
  ];
  for (const th of THEMES) {
    const r = await c.query(
      `select split_part(id, '.', 2) as lvl, count(*)::int as n, max(id) as mx
         from content_items where theme = $1 and status = 'published'
        group by 1 order by 1`,
      [th],
    );
    const tot = r.rows.reduce((a: number, x: { n: number }) => a + x.n, 0);
    if (!tot) { say(`  ${th.padEnd(28)} 0 published   THEME DOES NOT EXIST`); continue; }
    const slices = r.rows.map((x: { lvl: string; n: number; mx: string }) => `fr.${x.lvl}.* n=${x.n} max=${x.mx.split('.').pop()}`).join('  ');
    say(`  ${th.padEnd(28)} ${String(tot).padStart(4)} published   ${slices}`);
  }
  say();

  /* ── 5. The exact block a2.04 would open ──────────────────────────────── */
  for (const prefix of ['fr.a2.pays-et-nationalites.', 'fr.a1.pays-et-nationalites.', 'fr.a2.prepositions-essentielles.', 'fr.a1.prepositions-essentielles.', 'fr.sons.mots-essentiels.']) {
    const r = await c.query(
      `select count(*)::int as n, max(id) as mx from content_items where id like $1 || '%'`,
      [prefix],
    );
    say(`  ${prefix.padEnd(38)} count=${r.rows[0].n}  max=${r.rows[0].mx ?? '-'}`);
  }
  say();

  /* ── 6. chez: what the corpus actually holds behind it ────────────────── */
  say('## 6. Every published row holding `chez`, with what follows it');
  say();
  const chez = await c.query(
    `select id, theme, fr, respell from content_items
      where status = 'published' and fr ~* '\\ychez\\y' order by id`,
  );
  say(`  ${chez.rowCount} rows`);
  const after = new Map<string, number>();
  for (const row of chez.rows as { fr: string }[]) {
    const m = row.fr.match(/\bchez\s+([\p{L}'’]+)/iu);
    if (m) after.set(m[1].toLowerCase(), (after.get(m[1].toLowerCase()) ?? 0) + 1);
  }
  say(`  what follows chez: ${[...after.entries()].sort((a, b) => b[1] - a[1]).map(([w, n]) => `${w}(${n})`).join(' ')}`);
  say();
  for (const row of (chez.rows as { id: string; theme: string; fr: string; respell: string | null }[]).slice(0, 40)) {
    say(`    ${row.id.padEnd(42)} ${row.fr}${row.respell ? `   [${row.respell}]` : '   NO RESPELL'}`);
  }
  say();

  /* ── 7. chez before a PLACE, which is the error the lesson forbids ────── */
  say('## 7. Does the corpus itself ever put chez before a place?');
  const bad = await c.query(
    `select id, fr from content_items
      where status = 'published'
        and fr ~* $q$\ychez\s+(le|la|les|un|une|l['’])\s*(boulangerie|banque|poste|restaurant|cinema|cinéma|gare|ecole|école|magasin|hopital|hôpital|pharmacie|maison)\y$q$
      order by id`,
  );
  say(`  ${bad.rowCount} rows`);
  for (const row of bad.rows as { id: string; fr: string }[]) say(`    ${row.id}  ${row.fr}`);
  say();

  /* ── 8. City evidence: à + a city, de + a city ────────────────────────── */
  say('## 8. Cities: published rows putting à or de straight onto a bare city name');
  for (const city of ['Paris', 'Lyon', 'Marseille', 'Bordeaux', 'Toulouse', 'Nice', 'Londres', 'Genève', 'Bruxelles', 'Montréal']) {
    const r = await c.query(
      `select count(*) filter (where fr ~* ('\\yà ' || $1 || '\\y'))::int as a_n,
              count(*) filter (where fr ~* ('\\yde ' || $1 || '\\y'))::int as de_n,
              count(*) filter (where fr ~* ('\\y' || $1 || '\\y'))::int as any_n
         from content_items where status = 'published'`,
      [city],
    );
    const { a_n, de_n, any_n } = r.rows[0];
    say(`  ${city.padEnd(12)} à ${String(a_n).padStart(3)}   de ${String(de_n).padStart(3)}   any ${String(any_n).padStart(4)}`);
  }
  say();

  /* ── 9. The `en` respelling, settled across the corpus ────────────────── */
  say('## 9. How the corpus respells the preposition `en`');
  const en = await c.query(
    `select respell, count(*)::int as n from content_items
      where status = 'published' and respell is not null and fr ~* '\\yen\\s'
      group by 1 order by n desc limit 1`,
  );
  const enForms = await c.query(
    `select
       count(*) filter (where respell ~ 'ahⁿ')::int as sup_lower,
       count(*) filter (where respell ~ 'AHⁿ')::int as sup_upper,
       count(*) filter (where respell ~* '\\yahn\\y')::int as plain
     from content_items where status = 'published' and respell is not null and fr ~* '\\yen\\y'`,
  );
  say(`  rows whose fr holds \`en\` and carry a respell: ${JSON.stringify(enForms.rows[0])}`);
  say(`  (sample) ${JSON.stringify(en.rows[0] ?? null)}`);
  say();

  console.log(out.join('\n'));
  c.release();
  await pool.end();
}

main().catch((e) => { console.error(e); process.exit(1); });
