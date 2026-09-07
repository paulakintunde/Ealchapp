/* a2.20 pre-flight, part 2.
 *
 *   - every candidate authored sentence through the REAL dicteeMode / letterCount
 *   - every candidate respelling through the REAL hasPlainNasalFor, in both
 *     directions (does it fire on the plain-n version, does it stay clean on mine)
 *   - the import candidates: published rows carrying a respelling for the four
 *     participles this lesson will not author (venu, né, mort, assis)
 *   - which of the planned imports are IN the seed cut
 *
 *     pnpm tsx scripts/_a220_probe2.ts
 */
import './env';
import { Pool } from 'pg';
import { readFileSync } from 'node:fs';
import { hasPlainNasalFor } from '../../ealch-v2/src/content/density.logic.ts';
import { dicteeMode, letterCount } from '../../ealch-v2/src/content/dictee.logic.ts';

const pool = new Pool({ connectionString: process.env.DATABASE_URL });

/** fr, respell, family. The whole authored set as currently drafted. */
const DRAFT: Array<[string, string, string]> = [
  ["J'ai pris le bus.", 'ZHAY PREE luh BÜSS', '-is'],
  ["J'ai mis la table.", 'ZHAY MEE la TABL', '-is'],
  ["J'ai appris le mot.", 'ZHAY ah-PREE luh MOH', '-is'],
  ["J'ai compris la question.", 'ZHAY kohⁿ-PREE la kehs-TYOHⁿ', '-is'],
  ["J'ai remis la clé.", 'ZHAY ruh-MEE la KLAY', '-is'],
  ["J'ai promis de venir.", 'ZHAY proh-MEE duh vuh-NEER', '-is'],
  ["J'ai dit oui.", 'ZHAY DEE WEE', '-it'],
  ["J'ai écrit une lettre.", 'ZHAY ay-KREE ün LEHTR', '-it'],
  ["J'ai conduit la voiture.", 'ZHAY kohⁿ-DWEE la vwa-TÜR', '-it'],
  ["J'ai construit un mur.", 'ZHAY kohⁿs-TRWEE uhⁿ MÜR', '-it'],
  ["J'ai vu Marie.", 'ZHAY VÜ ma-REE', '-u'],
  ["J'ai lu le journal.", 'ZHAY LÜ luh zhoor-NAL', '-u'],
  ["J'ai bu un café.", 'ZHAY BÜ uhⁿ ka-FAY', '-u'],
  ["J'ai su la réponse.", 'ZHAY SÜ la ray-POHⁿSS', '-u'],
  ["J'ai pu venir.", 'ZHAY PÜ vuh-NEER', '-u'],
  ["J'ai voulu partir.", 'ZHAY voo-LÜ par-TEER', '-u'],
  ["J'ai dû partir.", 'ZHAY DÜ par-TEER', '-u'],
  ["J'ai connu sa sœur.", 'ZHAY koh-NÜ sa SEUR', '-u'],
  ["J'ai tenu la porte.", 'ZHAY tuh-NÜ la PORT', '-u'],
  ["J'ai reçu ton message.", 'ZHAY ruh-SÜ tohⁿ meh-SAZH', '-u'],
  ["J'ai couru vite.", 'ZHAY koo-RÜ VEET', '-u'],
  ["J'ai cru ça.", 'ZHAY KRÜ SA', '-u'],
  ["J'ai ouvert la porte.", 'ZHAY oo-VEHR la PORT', '-ert'],
  ["J'ai offert des fleurs.", 'ZHAY oh-FEHR day FLEUR', '-ert'],
  ["J'ai couvert le plat.", 'ZHAY koo-VEHR luh PLA', '-ert'],
  ["J'ai beaucoup souffert.", 'ZHAY boh-KOO soo-FEHR', '-ert'],
  ["J'ai fait le ménage.", 'ZHAY FEH luh may-NAZH', 'odd'],
  ["J'ai été malade.", 'ZHAY ay-TAY ma-LAD', 'odd'],
  ["J'ai eu peur.", 'ZHAY Ü PUHR', 'odd'],
];

/** Extra strings the lesson will carry: the trap pairs and the dictée candidates. */
const EXTRA: Array<[string, string]> = [
  ["Je n'ai pas pris le bus.", "ZHUH NAY pa PREE luh BÜSS"],
  ["Il a pris le bus.", 'eel a PREE luh BÜSS'],
  ["Nous avons pris le bus.", 'noo za-VOHⁿ PREE luh BÜSS'],
  ["J'ai tout compris.", 'ZHAY too kohⁿ-PREE'],
  ["Tu as dû partir.", 'tü a DÜ par-TEER'],
  ["J'ai eu froid.", 'ZHAY Ü FRWA'],
];

const DICTEE_CANDIDATES = [
  "J'ai pris le bus.", "J'ai mis la table.", "J'ai dit oui.", "J'ai vu Marie.",
  "J'ai eu peur.", "J'ai dû partir.", "J'ai fait le ménage.", "J'ai ouvert la porte.",
  "J'ai bu un café.", "J'ai lu le journal.", "J'ai été malade.", "J'ai couru vite.",
  "J'ai cru ça.", "J'ai appris le mot.", "J'ai compris.", "J'ai tout compris.",
  "Je n'ai pas pris le bus.", "J'ai reçu ton message.", "J'ai tenu la porte.",
];

const IMPORT_CANDIDATES = [
  'fr.a1.cafe.112', 'fr.a1.presentation-personnelle.107', 'fr.a1.evenements-familiaux.003',
  'fr.a1.emotions.033', 'fr.a1.emotions.034', 'fr.sons.adjectifs-essentiels.161',
  'fr.sons.verbes-essentiels.012', 'fr.sons.verbes-essentiels.014',
  'fr.sons.verbes-essentiels.004', 'fr.sons.verbes-essentiels.005',
  'fr.sons.verbes-essentiels.011', 'fr.sons.verbes-essentiels.010',
  'fr.sons.verbes-essentiels.052', 'fr.sons.verbes-essentiels.006',
  'fr.sons.verbes-essentiels.007', 'fr.sons.verbes-essentiels.008',
  'fr.sons.verbes-essentiels.009', 'fr.sons.verbes-essentiels.048',
  'fr.sons.verbes-essentiels.034', 'fr.sons.verbes-essentiels.053',
  'fr.sons.verbes-essentiels.157', 'fr.sons.verbes-essentiels.081',
  'fr.sons.verbes-essentiels.082', 'fr.sons.verbes-essentiels.002',
  'fr.sons.verbes-essentiels.001', 'fr.sons.consonnes.107', 'fr.a2.verbes.423',
  'fr.sons.verbes-essentiels.191', 'fr.sons.consonnes.110', 'fr.sons.verbes-essentiels.118',
  'fr.sons.verbes-essentiels.045', 'fr.sons.verbes-essentiels.047',
  'fr.sons.verbes-essentiels.049', 'fr.sons.verbes-essentiels.100',
  'fr.a2.disciplines.051', 'fr.sons.verbes-essentiels.030', 'fr.sons.voyelles.603',
  'fr.sons.voyelles.454', 'fr.a1.deplacements.042',
];

async function main() {
  // ── 1. THE DICTÉE ─────────────────────────────────────────────────────────
  console.log('### 1. dicteeMode / letterCount ON EVERY CANDIDATE (>16 letters = WORD mode = useless here)');
  for (const s of DICTEE_CANDIDATES) {
    console.log(`  ${s.padEnd(30)} letters=${String(letterCount(s)).padStart(2)}  mode=${dicteeMode(s)}`);
  }

  console.log('\n### 1b. EVERY AUTHORED SENTENCE, mode');
  for (const [fr] of DRAFT) {
    console.log(`  ${dicteeMode(fr).padEnd(8)} ${String(letterCount(fr)).padStart(2)}  ${fr}`);
  }

  // ── 2. THE NASAL CHECKER, BOTH DIRECTIONS ────────────────────────────────
  console.log('\n### 2. hasPlainNasalFor ON EVERY PLANNED RESPELLING (must be clean)');
  let dirty = 0;
  for (const [fr, re] of [...DRAFT.map((d) => [d[0], d[1]] as [string, string]), ...EXTRA]) {
    const flagged = hasPlainNasalFor(fr, re);
    if (flagged) dirty += 1;
    console.log(`  ${flagged ? 'FLAGGED' : 'clean  '} ${fr.padEnd(28)} ${re}`);
  }
  console.log(`  ${dirty} flagged`);

  console.log('\n### 2b. BREAK EACH ⁿ BACK TO A PLAIN n: does the checker SEE it?');
  let seen = 0, missed = 0;
  const missedRows: string[] = [];
  for (const [fr, re] of [...DRAFT.map((d) => [d[0], d[1]] as [string, string]), ...EXTRA]) {
    const idx: number[] = [];
    for (let i = 0; i < re.length; i += 1) if (re[i] === 'ⁿ') idx.push(i);
    for (const i of idx) {
      const broken = re.slice(0, i) + 'n' + re.slice(i + 1);
      if (hasPlainNasalFor(fr, broken)) seen += 1;
      else { missed += 1; missedRows.push(`${fr}  ${broken}`); }
    }
  }
  console.log(`  seen=${seen}  missed=${missed}`);
  for (const m of missedRows) console.log(`  MISSED  ${m}`);

  console.log('\n### 2c. THE FALSE-POSITIVE PATH: a control that MUST fire');
  for (const [fr, re] of [['le problème', 'luh proh-BLEHM'], ['la pomme', 'la POM'], ['jaune', 'ZHOHN']] as Array<[string, string]>) {
    console.log(`  ${hasPlainNasalFor(fr, re) ? 'FIRES  ' : 'clean  '} ${fr.padEnd(16)} ${re}`);
  }

  // ── 3. THE IMPORT CANDIDATES ─────────────────────────────────────────────
  const { rows } = await pool.query(
    `select id, fr, en, respell, ipa, theme, level, status, kind, gender, drills
       from content_items where id = any($1) order by id`,
    [IMPORT_CANDIDATES] as never[],
  );
  console.log('\n### 3. THE IMPORT CANDIDATES, every field that matters');
  for (const r of rows) {
    console.log(`  ${r.id.padEnd(40)} ${String(r.fr).padEnd(42)} [${r.respell ?? ''}]`);
    console.log(`      en=${r.en}  theme=${r.theme} level=${r.level} status=${r.status} kind=${r.kind} g=${r.gender ?? '-'} d=${JSON.stringify(r.drills)}`);
  }
  const got = new Set(rows.map((r) => r.id as string));
  console.log(`  MISSING IDS: ${IMPORT_CANDIDATES.filter((i) => !got.has(i)).join(', ') || '(none)'}`);

  console.log('\n### 3b. RESPELL OF EACH IMPORT UNDER hasPlainNasalFor');
  for (const r of rows) {
    if (!r.respell) { console.log(`  (no respell) ${r.id}`); continue; }
    console.log(`  ${hasPlainNasalFor(r.fr as string, r.respell as string) ? 'FLAGGED' : 'clean  '} ${String(r.fr).padEnd(42)} ${r.respell}`);
  }

  // ── 4. RESPELLED PUBLISHED SENTENCES CARRYING ONE OF THE FORTY ───────────
  const { rows: ev } = await pool.query(
    `select id, fr, en, respell, theme, level from content_items
      where status='published' and respell is not null and respell <> '' and fr ~ ' '
        and level in ('a1','a2')
        and fr ~* '(^|[^[:alpha:]])(ai|as|a|avons|avez|ont|suis|es|est|sommes|sont) +(pris|mis|appris|compris|assis|remis|promis|dit|écrit|conduit|construit|vu|lu|bu|su|pu|voulu|dû|connu|venu|venue|tenu|reçu|couru|cru|ouvert|offert|couvert|souffert|fait|été|eu|né|née|mort)([^[:alpha:]]|$)'
      order by id`,
  );
  console.log(`\n### 4. RESPELLED a1/a2 PUBLISHED SENTENCES WITH ONE OF THE FORTY: ${ev.length}`);
  for (const r of ev) console.log(`  ${r.id.padEnd(40)} ${String(r.fr).padEnd(48)} ${r.respell}`);

  // ── 5. SEED CUT ──────────────────────────────────────────────────────────
  const seed = JSON.parse(readFileSync('../ealch-v2/src/content/seed.json', 'utf8')) as {
    version: number; items: Array<{ id: string }>; lessons: Array<{ id: string }>;
  };
  const inSeed = new Set(seed.items.map((i) => i.id));
  console.log(`\n### 5. THE SEED CUT (version ${seed.version}, ${seed.items.length} items, ${seed.lessons.length} lessons)`);
  const absent = IMPORT_CANDIDATES.filter((i) => !inSeed.has(i));
  console.log(`  ${IMPORT_CANDIDATES.length - absent.length} of ${IMPORT_CANDIDATES.length} import candidates are already in the seed`);
  console.log(`  ABSENT, so the merge must carry them:`);
  for (const a of absent) console.log(`    ${a}`);

  await pool.end();
}

main().catch((e) => { console.error(e); process.exit(1); });
