/* Generates a1.30's IMPORTED / REUSED manifests as a RECORDED READ of Postgres,
 * classified against seed.json, so scripts/data/bilan-imported.ts is generated
 * rather than retyped.
 *
 *   pnpm tsx scripts/_bilan_manifest.ts > scripts/data/_bilan-manifest.gen.txt
 *   node scripts/_bilan_assemble.mjs
 *
 * The 87 review contributions come from _bilan_select.ts rather than a list
 * here, because they are COMPUTED and a hand list would drift from the rule that
 * produced it the first time the corpus moves.
 *
 * ── THE TWO HALVES BEHAVE OPPOSITELY, AND THAT IS THE LESSON ───────────────
 *
 * REVIEW HALF (87 rows). Every one is already taught AND already released by the
 * unit that owns it, so all 87 land in REUSED and the tranches release NONE of
 * them. Re-releasing would take two SRS ratings for one card.
 *
 * REPAIR KIT (12 rows + 2 authored). Published in Postgres, absent from the seed,
 * and taught by NO lesson in the app. This is the only material a1.30 owns and
 * the only material its tranches release.
 */
import './env';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { Pool } from 'pg';
import { CONTRIBUTIONS } from './_bilan_select.ts';

const here = dirname(fileURLToPath(import.meta.url));
const seed = JSON.parse(readFileSync(join(here, '../../ealch-v2/src/content/seed.json'), 'utf8')) as {
  items: { id: string; fr: string }[];
  lessons: { id: string; itemIds?: string[] }[];
};
const inSeed = new Map(seed.items.map((i) => [i.id, i.fr] as const));
const taughtBySomeone = new Set(seed.lessons.flatMap((l) => l.itemIds ?? []));

/** THE REPAIR KIT. Twenty-nine lessons teach a learner to produce French and not
 *  one teaches them what to say when they have not understood. These are the
 *  moves that keep a turn alive, and every one was found by probe rather than
 *  invented. Grouped by the job it does in a stalled exchange. */
export const REPAIR_KIT: Record<string, string[]> = {
  'saying you did not understand, which no lesson in the app teaches': [
    'fr.sons.expressions-utiles.038',   // je ne comprends pas
    'fr.a1.expressions-frequentes.079', // Excusez-moi, je ne comprends pas.
    'fr.sons.elision.033',              // je ne sais pas
  ],
  'buying yourself time': [
    'fr.sons.expressions-utiles.044',   // un instant
    'fr.a1.expressions-frequentes.118', // peut-être
  ],
  'getting somebody\'s attention, and apologising for it': [
    'fr.a1.rp-etiquette.016',           // excusez-moi
    'fr.a1.expressions-frequentes.099', // pardon
  ],
  'agreeing, so the other person keeps going': [
    'fr.a1.expressions-frequentes.106', // d'accord
    'fr.a1.expressions-frequentes.104', // bien sûr
    'fr.a1.expressions-frequentes.122', // voilà
  ],
  'closing the loop politely': [
    'fr.a1.expressions-frequentes.100', // de rien
    'fr.a1.expressions-frequentes.105', // pas de problème
  ],
};

const esc = (s: string) => JSON.stringify(s);

function pgArray(v: unknown): string[] {
  if (Array.isArray(v)) return v as string[];
  if (typeof v !== 'string') return [];
  return v.replace(/^\{|\}$/g, '').split(',').map((s) => s.trim().replace(/^"|"$/g, '')).filter(Boolean);
}

async function main() {
  const pool = new Pool({ connectionString: process.env.DATABASE_URL, max: 1 });
  const c = await pool.connect();

  const reviewIds = CONTRIBUTIONS.map((x) => x.id);
  const kitIds = Object.values(REPAIR_KIT).flat();
  const all = [...reviewIds, ...kitIds];

  const dupes = all.filter((id, i) => all.indexOf(id) !== i);
  if (dupes.length) { console.error(`ID NAMED TWICE: ${[...new Set(dupes)].join(', ')}`); process.exit(1); }

  const r = await c.query<{
    id: string; kind: string; level: string; theme: string; fr: string; en: string;
    ipa: string | null; respell: string | null; gender: string | null; notes: string | null;
    tags: string[]; drills: string[]; version: number; card_type: string | null; status: string;
  }>(
    `select id, kind, level, theme, fr, en, ipa, respell, gender, notes, tags, drills, version, card_type, status
       from content_items where id = any($1)`, [all],
  );
  const byId = new Map(r.rows.map((x) => [x.id, x] as const));

  const missing = all.filter((id) => !byId.has(id));
  if (missing.length) { console.error(`MISSING FROM POSTGRES: ${missing.join(', ')}`); process.exit(1); }
  const unpub = r.rows.filter((x) => x.status !== 'published');
  if (unpub.length) { console.error(`NOT PUBLISHED: ${unpub.map((x) => x.id).join(', ')}`); process.exit(1); }
  const tooHigh = r.rows.filter((x) => !['a1', 'sons'].includes(x.level));
  if (tooHigh.length) { console.error(`ABOVE a1: ${tooHigh.map((x) => `${x.id} (${x.level})`).join(', ')}`); process.exit(1); }

  const emitItem = (x: NonNullable<ReturnType<typeof byId.get>>) => {
    const f = [
      `id: ${esc(x.id)}`, `kind: ${esc(x.kind)}`, `level: ${esc(x.level)}`, `theme: ${esc(x.theme)}`,
      `fr: ${esc(x.fr)}`, `en: ${esc(x.en)}`,
    ];
    if (x.ipa) f.push(`ipa: ${esc(x.ipa)}`);
    if (x.respell) f.push(`respell: ${esc(x.respell)}`);
    if (x.gender) f.push(`gender: ${esc(x.gender)}`);
    if (x.notes) f.push(`notes: ${esc(x.notes)}`);
    f.push(`tags: ${JSON.stringify(pgArray(x.tags))}`, `drills: ${JSON.stringify(pgArray(x.drills))}`, `version: ${x.version}`);
    if (x.card_type) f.push(`cardType: ${esc(x.card_type)}`);
    return `  {\n    ${f.join(', ')},\n  },`;
  };

  /* ── The repair kit, grouped, split into imported and reused ───────────── */
  const impLines: string[] = [];
  const reuKitLines: string[] = [];
  for (const [group, ids] of Object.entries(REPAIR_KIT)) {
    const imp: string[] = []; const reu: string[] = [];
    for (const id of ids) {
      const x = byId.get(id)!;
      if (taughtBySomeone.has(id)) {
        console.error(`  ! ${id} "${x.fr}" IS already taught by a shipped lesson. It cannot be part of what a1.30 owns.`);
      }
      if (inSeed.has(id)) {
        if (inSeed.get(id) !== x.fr) { console.error(`SEED DRIFT ${id}`); process.exit(1); }
        reu.push(`  { id: ${esc(x.id)}, fr: ${esc(x.fr)}, en: ${esc(x.en)}, respell: ${x.respell ? esc(x.respell) : 'null'}, drills: ${JSON.stringify(pgArray(x.drills))} },`);
      } else imp.push(emitItem(x));
    }
    if (imp.length) impLines.push(`\n  // ── ${group} (${imp.length}) ──`, ...imp);
    if (reu.length) reuKitLines.push(`\n  // ── ${group} (${reu.length}) ──`, ...reu);
  }

  /* ── The 87 review contributions, grouped by the unit they represent ───── */
  const reviewLines: string[] = [];
  const strayed: string[] = [];
  let unit = '';
  for (const cont of CONTRIBUTIONS) {
    const x = byId.get(cont.id)!;
    if (!inSeed.has(cont.id)) strayed.push(`${cont.id} (${cont.unit})`);
    if (!taughtBySomeone.has(cont.id)) strayed.push(`${cont.id} NOT TAUGHT BY ANY LESSON`);
    if (cont.unit !== unit) { unit = cont.unit; reviewLines.push(`\n  // ── ${unit} ──`); }
    reviewLines.push(`  { id: ${esc(x.id)}, unit: ${esc(cont.unit)}, fr: ${esc(x.fr)}, en: ${esc(x.en)}, respell: ${x.respell ? esc(x.respell) : 'null'}, kind: ${esc(x.kind)}, reach: ${cont.reach} },`);
  }
  if (strayed.length) {
    console.error(`\n  ${strayed.length} REVIEW ROW(S) BREAK THE PREMISE, which is that every one is already in the seed AND already taught:\n    ${strayed.slice(0, 8).join('\n    ')}`);
    process.exit(1);
  }

  console.log('/* GENERATED by scripts/_bilan_manifest.ts. Do not hand-edit. */');
  console.log('export const KIT_IMPORTED: ImportedRow[] = [');
  console.log(impLines.join('\n'));
  console.log('];\n');
  console.log('export const KIT_REUSED: ReusedRow[] = [');
  console.log(reuKitLines.join('\n'));
  console.log('];\n');
  console.log('export const REVIEW: ReviewRow[] = [');
  console.log(reviewLines.join('\n'));
  console.log('];');

  const nImp = impLines.filter((l) => l.startsWith('  {')).length;
  const nReu = reuKitLines.filter((l) => l.startsWith('  {')).length;
  console.error(`\n  REPAIR KIT: ${nImp} IMPORTED (absent from the seed), ${nReu} REUSED`);
  console.error(`  REVIEW:     ${CONTRIBUTIONS.length} rows, all in the seed and all already taught, so all REUSED and NONE released`);
  console.error(`  TOTAL named: ${all.length}, plus 2 authored = ${all.length + 2}`);

  c.release();
  await pool.end();
}
main().catch((e) => { console.error(e); process.exit(1); });
