/* a2.14 design checks, run BEFORE authoring so the design is decided by the real
 * functions rather than by a table in a brief.
 *
 *   1. DID a2.13 LEAK savoir? The brief marks this UNVERIFIED. Read the shipped
 *      lesson out of BOTH Postgres and the seed and count every form.
 *   2. THE RESPELLINGS, through the REAL hasPlainNasalFor. The brief claims
 *      connaissons/connaissez/connaissent hit the false-positive path. Measure it,
 *      and measure the INVISIBLE direction too (corrections §6): break each
 *      superscript back to a plain n and ask whether the checker notices.
 *   3. THE DICTÉE FRAME, through the real dicteeMode. Corrections §4: > 16 letters
 *      is WORD mode and word mode hands every word over pre-spelled.
 *   4. fold() / normalizeFr(): which of the questions I want are testable.
 *   5. `ne … que`: connaître legitimately precedes `que` in a restriction, so the
 *      "connaître never before que" guard has a real counterexample in the corpus.
 *   6. The house chrome collision: how many shipped lessons use `Ce que vous
 *      savez faire`, which is a form of savoir (a2.13 §1.4 hands this decision here).
 *
 *     pnpm tsx scripts/_a214_check.ts
 */
import './env';
import { Pool } from 'pg';
import { readFileSync } from 'node:fs';
import { hasPlainNasalFor, hasPlainNasal } from '../../ealch-v2/src/content/density.logic.ts';
import { dicteeMode, dicteeWords } from '../../ealch-v2/src/content/dictee.logic.ts';
import { fold } from '../../ealch-v2/src/content/answer.logic.ts';

const SAVOIR_FORMS = ['savoir', 'sais', 'sait', 'savons', 'savez', 'savent', 'saura', 'saurez', 'su'];
const CONN_FORMS = ['connaître', 'connais', 'connaît', 'connaissons', 'connaissez', 'connaissent', 'connu'];

function strings(v: unknown, out: string[] = []): string[] {
  if (typeof v === 'string') out.push(v);
  else if (Array.isArray(v)) for (const x of v) strings(x, out);
  else if (v && typeof v === 'object') for (const x of Object.values(v)) strings(x, out);
  return out;
}
const isWord = (c: string) => /[\p{L}\p{N}'’-]/u.test(c);
function hasPhrase(hay: string, needle: string): boolean {
  const h = hay.toLowerCase(); const n = needle.toLowerCase();
  let i = 0;
  while ((i = h.indexOf(n, i)) !== -1) {
    if (!isWord(i === 0 ? '' : h[i - 1]) && !isWord(h[i + n.length] ?? '')) return true;
    i += 1;
  }
  return false;
}

async function main() {
  const pool = new Pool({ connectionString: process.env.DATABASE_URL, max: 1 });
  const c = await pool.connect();

  /* ── 1. DID a2.13 LEAK savoir? ─────────────────────────────────────────── */
  console.log('## 1. a2.13 and savoir: was the brief obeyed?\n');
  const db = await c.query<{ body: Record<string, unknown> }>(
    "select body from content_units where kind = 'lesson' and slug = 'a2.13.l1'",
  );
  const seed = JSON.parse(readFileSync('../ealch-v2/src/content/seed.json', 'utf8')) as {
    lessons: Array<Record<string, unknown>>;
  };
  const seedLesson = seed.lessons.find((l) => l.id === 'a2.13.l1');
  for (const [where, body] of [['postgres', db.rows[0]?.body], ['seed    ', seedLesson]] as const) {
    if (!body) { console.log(`  ${where}  NOT FOUND`); continue; }
    console.log(`  ${where}  v${body.version}  ${(body.sections as unknown[])?.length} sections`);
    // The learner surface, walked the corrections §9 way: + intro + overview.
    const L = body as Record<string, unknown>;
    const surface = [
      ...strings(L.sections), ...strings(L.sheets ?? []), ...strings(L.terms ?? {}),
      String(L.intro ?? ''), ...strings(L.overview ?? {}),
    ].join('\n');
    for (const f of [...SAVOIR_FORMS, ...CONN_FORMS]) {
      if (hasPhrase(surface, f)) {
        const lines = surface.split('\n').filter((s) => hasPhrase(s, f));
        console.log(`      LEAK  ${f.padEnd(12)} ${lines.length} string(s):`);
        for (const l of lines.slice(0, 4)) console.log(`              ${JSON.stringify(l.slice(0, 130))}`);
      }
    }
    // curriculum-facing fields are exempt (invariants §8) but reported
    for (const f of ['grammarIntroduced', 'grammarAssumed']) {
      const s = strings(L[f] ?? []).join(' | ');
      if (SAVOIR_FORMS.concat(CONN_FORMS).some((x) => hasPhrase(s, x))) console.log(`      (curriculum field ${f}: ${JSON.stringify(s)})`);
    }
  }

  /* ── 2. THE RESPELLINGS, BOTH DIRECTIONS ───────────────────────────────── */
  console.log('\n## 2. hasPlainNasalFor on every form this lesson prints\n');
  const CAND: Array<[string, string]> = [
    ['savoir', 'sah-VWAR'],
    ['je sais', 'zhuh SEH'], ['tu sais', 'tü SEH'], ['il sait', 'eel SEH'],
    ['nous savons', 'noo sa-VOHⁿ'], ['vous savez', 'voo sa-VAY'], ['ils savent', 'eel SAV'],
    ['connaître', 'koh-NEHTR'], ['connaître', 'koh-NETR'], ['connaître', 'kon-NETR'],
    ['je connais', 'zhuh koh-NEH'], ['tu connais', 'tü koh-NEH'], ['il connaît', 'eel koh-NEH'],
    ['nous connaissons', 'noo koh-neh-SOHⁿ'], ['vous connaissez', 'voo koh-neh-SAY'],
    ['ils connaissent', 'eel koh-NEHS'],
    ['reconnaître', 'ruh-koh-NEHTR'], ['paraître', 'pah-REHTR'],
    ['je peux', 'zhuh PUH'], ['tu peux', 'tü PUH'], ['il peut', 'eel PUH'],
    ['Je sais nager.', 'zhuh seh na-ZHAY'],
    ['Je connais Paris.', 'zhuh koh-neh pa-REE'],
    ['Je ne sais pas.', 'zhuh nuh seh PA'],
    ['Je connais ce quartier.', 'zhuh koh-neh suh kar-TYAY'],
    ['Tu connais mon voisin ?', 'tü koh-neh mohⁿ vwah-ZEHⁿ'],
    ['Il sait où elle habite.', 'eel seh oo ehl ah-BEET'],
    ['Nous connaissons ce restaurant.', 'noo koh-neh-sohⁿ suh rehs-toh-RAHⁿ'],
    ['Vous savez la réponse.', 'voo sa-vay la ray-POHⁿS'],
  ];
  for (const [fr, re] of CAND) {
    const flagged = hasPlainNasalFor(fr, re);
    console.log(`  ${flagged ? 'FLAGGED' : '  ok   '}  ${fr.padEnd(32)} [${re}]`);
  }

  console.log('\n  the INVISIBLE direction (corrections §6): break each ⁿ to a plain n\n');
  let seen = 0; let missed = 0;
  for (const [fr, re] of CAND) {
    if (!re.includes('ⁿ')) continue;
    // one at a time
    for (let i = 0; i < re.length; i += 1) {
      if (re[i] !== 'ⁿ') continue;
      const broken = re.slice(0, i) + 'n' + re.slice(i + 1);
      const noticed = hasPlainNasalFor(fr, broken);
      if (noticed) seen += 1; else missed += 1;
      console.log(`    ${noticed ? 'SEEN   ' : 'MISSED '} ${fr.padEnd(32)} [${broken}]`);
    }
  }
  console.log(`\n    seen ${seen}   MISSED ${missed}`);

  /* ── 3. THE DICTÉE FRAME ───────────────────────────────────────────────── */
  console.log('\n## 3. dicteeMode, through the real function\n');
  const DICTEE: string[] = [
    'Je sais nager.', 'Je connais Paris.', 'Je ne sais pas.', 'Tu sais nager.',
    'Il connaît Paris.', 'Elle sait nager.', 'Nous savons.', 'Vous savez.',
    'Je connais ce film.', 'Tu connais mon voisin ?', 'Il sait où elle habite.',
    'Nous connaissons ce restaurant.', 'Ils connaissent la ville.',
    'Je sais cuisiner.', 'Je connais la ville.', 'Tu connais la ville.',
    'Il sait la réponse.', 'Je peux nager.', 'Elle connaît la ville.',
    'Vous connaissez Paris.', 'Nous savons la réponse.',
  ];
  for (const s of DICTEE) {
    const letters = s.replace(/[^\p{L}]/gu, '').length;
    console.log(`  ${dicteeMode(s) === 'letters' ? 'LETTERS' : ' words '}  ${String(letters).padStart(2)}  ${dicteeWords(s).length}w  ${JSON.stringify(s)}`);
  }

  /* ── 4. fold() ─────────────────────────────────────────────────────────── */
  console.log('\n## 4. fold(): which questions are writable\n');
  const PAIRS: Array<[string, string, string]> = [
    ['connaît vs connait (circumflex)', 'Il connaît Paris.', 'Il connait Paris.'],
    ['sais vs sait (the ear pair)', 'Je sais nager.', 'Je sait nager.'],
    ['connais vs connait', 'Tu connais Paris.', 'Tu connait Paris.'],
    ['savoir vs connaître', 'Je sais nager.', 'Je connais nager.'],
    ['connaissent vs connaissons', 'Ils connaissent la ville.', 'Ils connaissons la ville.'],
    ['the clause error', 'Je sais où il habite.', 'Je connais où il habite.'],
    ['double s', 'Nous connaissons Paris.', 'Nous connaisons Paris.'],
  ];
  for (const [label, a, b] of PAIRS) {
    const same = fold(a) === fold(b);
    console.log(`  ${same ? 'INDISTINGUISHABLE' : 'testable         '}  ${label.padEnd(34)} ${JSON.stringify(a)} / ${JSON.stringify(b)}`);
  }

  /* ── 5. `ne … que` ─────────────────────────────────────────────────────── */
  console.log('\n## 5. connaître before `que`: the legitimate counterexample\n');
  const s = await c.query<{ id: string; fr: string; level: string }>(
    `select id, fr, level from content_items
      where kind='sentence' and status='published'
        and fr ~* '(connais|connaît|connaissons|connaissez|connaissent|connaître)\\s+(que|qu'')'
      order by id`,
  );
  console.log(`  ${s.rowCount} published sentences put a connaître form immediately before que/qu'`);
  for (const r of s.rows) console.log(`    ${r.id.padEnd(36)} [${r.level}] ${JSON.stringify(r.fr)}`);

  /* ── 6. THE CHROME COLLISION ───────────────────────────────────────────── */
  console.log('\n## 6. `Ce que vous savez faire`: how much chrome is a form of savoir\n');
  const heads = new Map<string, string[]>();
  for (const l of seed.lessons) {
    for (const str of strings(l)) {
      if (/\bsav(ez|ons|ent|oir)\b|\bsaur(ez|a|ai|ons)\b|\bsais\b|\bsait\b/i.test(str)) {
        const k = str.trim();
        if (k.length > 90) continue;
        heads.set(k, [...(heads.get(k) ?? []), String(l.id)]);
      }
    }
  }
  const sorted = [...heads.entries()].sort((a, b) => b[1].length - a[1].length);
  for (const [k, ids] of sorted.slice(0, 14)) {
    console.log(`  ${String(ids.length).padStart(3)}x  ${JSON.stringify(k)}`);
    if (ids.length <= 3) console.log(`         ${ids.join(' ')}`);
  }
  console.log(`\n  ${sorted.length} distinct strings in the SEED hold a savoir form across ${seed.lessons.length} lessons`);

  c.release();
  await pool.end();
}
main().catch((e) => { console.error(e); process.exit(1); });
