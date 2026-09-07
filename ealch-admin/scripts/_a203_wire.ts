/* WHAT IS ACTUALLY ON THE WIRE, fetched rather than inferred.
 *
 * Ledger §13: a publish log says what was UPLOADED. It does not say what is
 * being served, at what rollout, or what a lesson body inside it contains. This
 * downloads the live manifest and the live snapshot and reads a2.03 out of them,
 * so the answer comes from the bytes a device would receive.
 *
 *   pnpm tsx scripts/_a203_wire.ts
 */
import './env';
import { downloadFromStorage } from './snapshot-utils.ts';

type Item = { id: string; fr: string; respell?: string | null; gender?: string | null; drills?: string[] };
type Lesson = {
  id: string; version?: number; itemIds?: string[];
  sections?: { id?: string; type?: string; title?: string; terms?: string[] }[];
  terms?: Record<string, { term: string }>;
};

async function main() {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) { console.error('needs SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY'); process.exit(1); }

  const manifest = JSON.parse(await downloadFromStorage(url, key, 'manifest.json')) as
    { version: number; path: string; rollout?: number; publishedAt?: string };
  console.log('\n## The live manifest\n');
  console.log(`  version    v${manifest.version}`);
  console.log(`  rollout    ${manifest.rollout ?? 100}%`);
  console.log(`  path       ${manifest.path}`);
  console.log(`  published  ${manifest.publishedAt ?? '?'}`);

  const snap = JSON.parse(await downloadFromStorage(url, key, manifest.path)) as
    { version: number; lessons: Lesson[]; items: Item[] };
  const byId = new Map(snap.items.map((i) => [i.id, i] as const));

  console.log('\n## a2.03 inside that snapshot\n');
  const L = snap.lessons.find((l) => l.id === 'a2.03.l1');
  if (!L) { console.log('  a2.03.l1 is NOT in the live snapshot at all.'); return; }
  console.log(`  lesson body   v${L.version}`);
  console.log(`  sections      ${(L.sections ?? []).length}`);
  console.log(`  itemIds       ${(L.itemIds ?? []).length}`);

  /* EVERY itemId RESOLVES IN THE BYTES A DEVICE WOULD GET. A lesson whose
     itemIds resolve to nothing renders empty cards, and the seed cut is applied
     by publish rather than by the merge, so this is the first time the two have
     been compared on the wire. */
  const missing = (L.itemIds ?? []).filter((id) => !byId.has(id));
  console.log(`  unresolved    ${missing.length}${missing.length ? `  ${missing.join(' ')}` : '  (every card has a row)'}`);

  /* THE SIXTEEN GRID CELLS, READ OFF THE WIRE. */
  console.log('\n## The grid, as served\n');
  const PATTERNS = ['default', 'eux', 'if', 'invariable'];
  for (let p = 0; p < 4; p += 1) {
    const cells = [0, 1, 2, 3].map((c) => byId.get(`fr.a2.adjectifs-essentiels.${String(p * 4 + c + 1).padStart(3, '0')}`));
    console.log(`  ${PATTERNS[p].padEnd(11)} ${cells.map((x) => (x ? x.fr.split(' ').slice(-1)[0].replace('.', '') : '??')).map((s) => s.padEnd(10)).join('')}`);
  }

  /* THE REPAIRS AND THE SUPPLIED RESPELLINGS. */
  console.log('\n## The rows this build changed, as served\n');
  const CHANGED: [string, string][] = [
    ['fr.sons.couleurs.032', 'KREM'],
    ['fr.sons.adjectifs-essentiels.052', 'dahⁿ-zhuh-RUH'],
    ['fr.sons.adjectifs-essentiels.118', 'nohⁿ-BRUH'],
    ['fr.sons.adjectifs-essentiels.261', 'aⁿ-pewl-SEEF'],
    ['fr.sons.couleurs.022', 'VEHR fohⁿ-SAY'],
    ['fr.sons.muettes.053', 'uh-REUZ'],
    ['fr.a2.description-personnes-objets.003', 'lay zhü-MOH sohⁿ spor-TEEF'],
    ['fr.a2.description-personnes-objets.004', 'lay zhü-MEL sohⁿ spor-TEEV'],
  ];
  for (const [id, want] of CHANGED) {
    const got = byId.get(id)?.respell ?? '(absent)';
    console.log(`  ${got === want ? 'ok  ' : 'WRONG'}  ${id.padEnd(40)} ${got}`);
  }

  /* THE TERM CHIPS THE DEVICE PASS SHORTENED. */
  console.log('\n## The term chips, as served\n');
  for (const [k, v] of Object.entries(L.terms ?? {})) console.log(`  ${String(v.term.length).padStart(2)}  ${k.padEnd(24)} ${v.term}`);
  const worst = (L.sections ?? []).map((s) => ({
    id: s.id, w: (s.terms ?? []).reduce((n, t) => n + ((L.terms ?? {})[t]?.term.length ?? 0), 0),
  })).sort((a, b) => b.w - a.w)[0];
  console.log(`  widest row: ${worst?.id} at ${worst?.w} characters (budget 37)`);

  /* THE THREE COLD ADJECTIVES ARE STILL COLD IN THE SERVED BYTES.
   *
   * SCOPED TO THE LEARNER SURFACES, and the first version of this script was not.
   * It walked the whole lesson body and reported `vieux` as a leak; the single
   * use is in `grammarAssumed`, which invariants §8 says is addressed to the
   * CURRICULUM and may use the precise words, and which corrections §9 says in
   * as many words must NOT be in this walk. Reporting it would have been the
   * same class of false positive as measuring an absence against the whole
   * bundle instead of against the lesson. */
  console.log('\n## The cold adjectives, on the LEARNER SURFACES a device draws\n');
  const strings = (v: unknown, out: string[] = []): string[] => {
    if (typeof v === 'string') out.push(v);
    else if (Array.isArray(v)) for (const x of v) strings(x, out);
    else if (v && typeof v === 'object') for (const x of Object.values(v)) strings(x, out);
    return out;
  };
  const LL = L as unknown as Record<string, unknown>;
  const body = [
    ...strings(LL.sections), ...strings(LL.sheets ?? []), ...strings(LL.terms ?? {}),
    String(LL.intro ?? ''), ...strings(LL.overview ?? {}), ...strings(LL.acts ?? []),
    ...strings(LL.drills ?? []),
    ...(L.itemIds ?? []).filter((id) => id.startsWith('fr.a2.adjectifs-essentiels.'))
      .flatMap((id) => [byId.get(id)?.fr ?? '', (byId.get(id) as { en?: string })?.en ?? '', (byId.get(id) as { notes?: string })?.notes ?? '']),
  ].join('\n');
  const isWord = (c: string) => /[\p{L}\p{N}'’-]/u.test(c);
  const count = (hay: string, n: string) => {
    let i = 0; let k = 0; const h = hay.toLowerCase(); const q = n.toLowerCase();
    while ((i = h.indexOf(q, i)) !== -1) { if (!isWord(i === 0 ? '' : h[i - 1]) && !isWord(h[i + q.length] ?? '')) k += 1; i += 1; }
    return k;
  };
  for (const w of ['courageux', 'actif', 'turquoise']) {
    const homes = (L.sections ?? []).filter((s) => count(JSON.stringify(s), w) > 0).map((s) => s.id);
    console.log(`  ${w.padEnd(11)} ${count(body, w)} uses, in ${homes.join(', ') || '(nowhere)'}`);
  }
  console.log('');
  for (const w of ['beau', 'belle', 'beaux', 'nouveau', 'nouvelle', 'nouvel', 'vieux', 'vieille', 'vieil']) {
    const n = count(body, w);
    console.log(`  ${w.padEnd(11)} ${n === 0 ? 'absent, so a2.16 still has a lesson' : `${n} USES, and a2.16's lesson has leaked`}`);
  }
  /* And the one place `vieux` legitimately IS, so nobody re-reports it. */
  const curriculum = [...strings(LL.grammarAssumed ?? []), ...strings(LL.grammarIntroduced ?? [])].join('\n');
  console.log(`\n  (grammarAssumed/grammarIntroduced name vieux ${count(curriculum, 'vieux')}x, which invariants §8 permits:`);
  console.log('   those two fields are addressed to the curriculum and may use the precise words.)');
}
main().catch((e) => { console.error(e); process.exit(1); });
