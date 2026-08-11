/* Throwaway probe for the a2.01 build. Dumps the verbes theme and hunts the
 * thirty candidate infinitives across every theme, so the ledger records ids
 * rather than guesses. */
import './env';
import { Pool } from 'pg';

const CANDIDATES = [
  'parler', 'regarder', 'écouter', 'aimer', 'habiter', 'travailler', 'chercher', 'trouver',
  'donner', 'demander', 'penser', 'porter', 'entrer', 'rester', 'rentrer', 'arriver',
  'montrer', 'jouer', 'chanter', 'danser', 'visiter', 'inviter', 'étudier', 'adorer',
  'détester', 'fermer', 'marcher', 'téléphoner', 'oublier', 'laver', 'gagner', 'quitter',
  'passer', 'arrêter', 'continuer', 'expliquer', 'raconter', 'dîner', 'déjeuner', 'tomber',
  'aider', 'écouter', 'garder', 'rencontrer', 'organiser', 'préparer', 'réserver', 'louer',
];

async function main() {
  const pool = new Pool({ connectionString: process.env.DATABASE_URL, max: 1 });
  const c = await pool.connect();

  const theme = await c.query<{ id: string; kind: string; fr: string; en: string; drills: string[]; status: string; respell: string | null }>(
    "select id, kind, fr, en, drills, status, respell from content_items where theme = 'verbes' and id like 'fr.a2.%' order by id",
  );
  console.log(`=== theme verbes, fr.a2.* : ${theme.rowCount} rows ===`);
  for (const r of theme.rows) {
    console.log(`${r.id}  ${r.kind.padEnd(8)} ${r.status.padEnd(9)} ${JSON.stringify(r.fr)}  | ${r.en} | ${JSON.stringify(r.drills)} | respell=${r.respell ?? '-'}`);
  }

  console.log(`\n=== candidate infinitives: is each one already in theme 'verbes'? ===`);
  const inVerbes = await c.query<{ id: string; fr: string; kind: string; drills: string[]; respell: string | null; status: string }>(
    "select id, fr, kind, drills, respell, status from content_items where theme = 'verbes' and fr = any($1) order by fr",
    [[...new Set(CANDIDATES)]],
  );
  const have = new Set(inVerbes.rows.map((r) => r.fr));
  for (const r of inVerbes.rows) console.log(`  IN VERBES  ${r.fr.padEnd(14)} ${r.id}  ${r.kind} ${r.status} respell=${r.respell ?? '-'} ${JSON.stringify(r.drills)}`);
  console.log(`  NOT in verbes: ${[...new Set(CANDIDATES)].filter((w) => !have.has(w)).join(', ')}`);

  console.log(`\n=== best existing row per candidate, ranked: word-kind, has respell, flashcard drill ===`);
  const all = await c.query<{ id: string; fr: string; theme: string; kind: string; level: string; drills: string[]; respell: string | null; ipa: string | null; en: string; status: string }>(
    "select id, fr, theme, kind, level, drills, respell, ipa, en, status from content_items where fr = any($1) and kind = 'word' and status = 'published' order by fr, id",
    [[...new Set(CANDIDATES)]],
  );
  const byFr = new Map<string, typeof all.rows>();
  for (const r of all.rows) {
    const list = byFr.get(r.fr) ?? [];
    list.push(r);
    byFr.set(r.fr, list);
  }
  for (const [w, rows] of [...byFr.entries()].sort()) {
    const best = rows.slice().sort((a, b) => {
      const score = (r: typeof rows[number]) =>
        (r.theme === 'verbes' ? 8 : 0) + (r.respell ? 4 : 0) + (r.drills.includes('flashcard') ? 2 : 0) + (r.ipa ? 1 : 0);
      return score(b) - score(a);
    })[0];
    console.log(`  ${w.padEnd(14)} ${rows.length} row(s) | best ${best.id} theme=${best.theme} respell=${best.respell ?? '-'} ipa=${best.ipa ?? '-'} drills=${JSON.stringify(best.drills)} en=${JSON.stringify(best.en)}`);
  }

  c.release();
  await pool.end();
}
main().catch((e) => { console.error(e); process.exit(1); });
