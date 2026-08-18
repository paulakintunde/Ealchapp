// a2.08 audit. Reads the SHIPPED seed (not the source) and dumps every
// learner-facing French string, every scored key, and every tense marker, so a
// human can read what the guards cannot check: whether the French is right and
// whether the answers are the answers.
import { readFileSync } from 'node:fs';

const seed = JSON.parse(readFileSync(new URL('../../ealch-v2/src/content/seed.json', import.meta.url), 'utf8'));
const L = seed.lessons.find((l: { id: string }) => l.id === 'a2.08.l1');
const items = new Map(seed.items.map((i: { id: string }) => [i.id, i]));

const strs = (v: unknown, out: string[] = []): string[] => {
  if (typeof v === 'string') out.push(v);
  else if (Array.isArray(v)) v.forEach((x) => strs(x, out));
  else if (v && typeof v === 'object') Object.values(v).forEach((x) => strs(x, out));
  return out;
};

const arg = process.argv[2] ?? 'all';

if (arg === 'fr' || arg === 'all') {
  console.log('=== EVERY FRENCH STRING ON A LEARNER SURFACE, BY SECTION ===');
  // A crude but effective French detector: a string with a French function word
  // and no long run of English.
  const FR = /(^|\s)(est|sont|le|la|les|un|une|de|du|des|que|qui|plus|moins|aussi|c'est|ce|cette|il|elle|nous|vous|je|tu|on|mon|ma|mes|son|sa|ses)(\s|$)/i;
  const EN_ONLY = /\b(the|and|is|are|you|what|which|does|with|from|that|this)\b/i;
  for (const s of L.sections) {
    const hits = strs(s).filter((x) => FR.test(x) && !EN_ONLY.test(x) && x.length > 3);
    if (!hits.length) continue;
    console.log(`\n-- ${s.id} (${s.type})`);
    for (const h of [...new Set(hits)]) console.log(`   ${h}`);
  }
}

if (arg === 'quiz' || arg === 'all') {
  console.log('\n\n=== EVERY SCORED QUESTION, WITH ITS KEY ===');
  const rounds = L.sections.find((s: { type: string }) => s.type === 'quiz').rounds;
  let n = 0;
  for (const r of rounds) {
    console.log(`\n-- round ${r.id} (targets ${JSON.stringify(r.targets)})`);
    for (const q of r.questions) {
      n++;
      const key = Array.isArray(q.opts) ? `[${q.correct}] ${q.opts[q.correct]}` : q.answer;
      console.log(`  ${String(n).padStart(2)} ${String(q.format).padEnd(13)} ${q.q}`);
      if (q.prompt) console.log(`     prompt: ${q.prompt}`);
      if (q.say) console.log(`     say:    ${q.say}`);
      if (Array.isArray(q.opts)) console.log(`     opts:   ${q.opts.map((o: string, i: number) => `${i}:${o}`).join('  |  ')}`);
      console.log(`     KEY:    ${key}`);
      console.log(`     why:    ${q.why}`);
    }
  }
  // The option-slot spread, recomputed here rather than trusted.
  const closed = rounds.flatMap((r: { questions: Record<string, unknown>[] }) => r.questions)
    .filter((q: Record<string, unknown>) => Array.isArray(q.opts));
  const slots: Record<number, number> = {};
  for (const q of closed) slots[q.correct as number] = (slots[q.correct as number] ?? 0) + 1;
  console.log(`\n  closed-format questions: ${closed.length}`);
  for (const k of Object.keys(slots).sort()) {
    const pct = (slots[+k] / closed.length) * 100;
    console.log(`  slot ${k}: ${slots[+k]}  ${pct.toFixed(1)}%  ${pct > 40 ? '<-- OVER THE 40% LIMIT' : ''}`);
  }
}

if (arg === 'checks' || arg === 'all') {
  console.log('\n\n=== EVERY IN-MISSION CHECK (groupDrill, listening, trapDrill drill) ===');
  for (const s of L.sections) {
    for (const g of s.groups ?? []) {
      if (!g.check) continue;
      console.log(`\n-- ${s.id} / ${g.label}`);
      console.log(`   items: ${(g.items ?? []).map((i: { fr: string }) => i.fr).join(' | ') || '(control page)'}`);
      console.log(`   Q: ${g.check.q}`);
      console.log(`   opts: ${g.check.opts.map((o: string, i: number) => `${i}:${o}`).join('  |  ')}`);
      console.log(`   KEY: ${g.check.opts[g.check.correct]}`);
      console.log(`   why: ${g.check.why}`);
    }
    for (const q of s.questions ?? []) {
      if (!q.opts) continue;
      console.log(`\n-- ${s.id} listening`);
      console.log(`   Q: ${q.q}`);
      console.log(`   opts: ${q.opts.map((o: string, i: number) => `${i}:${o}`).join('  |  ')}`);
      console.log(`   KEY: ${q.opts[q.correct]}`);
    }
    for (const d of s.drill ?? []) {
      console.log(`   trap drill: "${d.promptSay}" -> ${d.opts[d.correct]}`);
    }
  }
}

if (arg === 'tense' || arg === 'all') {
  console.log('\n\n=== TENSE MARKERS ON PRODUCTION SURFACES ===');
  // The conditional and the imparfait are B1 and a2.31 respectively. A corpus
  // sentence may use a tense the lesson does not teach; a SCENARIO TURN THE
  // LEARNER MUST SAY may not.
  const COND = /\b\w+(rais|rait|rions|riez|raient)\b/gi;
  const SUBJ = /\b(soit|ait|puisse|fasse|aille|sache|veuille)\b/gi;
  const PRODUCTION = new Set(['scenario', 'practice', 'dictation', 'quiz', 'groupDrill', 'trapDrill']);
  for (const s of L.sections) {
    if (!PRODUCTION.has(s.type)) continue;
    for (const x of strs(s)) {
      const c = x.match(COND);
      const j = x.match(SUBJ);
      if (c) console.log(`  ${s.id}  CONDITIONAL ${JSON.stringify(c)}  in: ${x.slice(0, 90)}`);
      if (j) console.log(`  ${s.id}  SUBJUNCTIVE ${JSON.stringify(j)}  in: ${x.slice(0, 90)}`);
    }
  }
  console.log('\n=== DEMONSTRATIVE PRONOUNS (a2.33) AND POSSESSIVE PRONOUNS (a2.34) ===');
  const DEM = /\b(celui|celle|ceux|celles)(-ci|-là)?\b/gi;
  for (const s of L.sections) {
    for (const x of strs(s)) {
      const d = x.match(DEM);
      if (d) console.log(`  ${s.id}  ${JSON.stringify(d)}  in: ${x.slice(0, 90)}`);
    }
  }
}

if (arg === 'rows' || arg === 'all') {
  console.log('\n\n=== THE 31 AUTHORED ROWS, AS SHIPPED ===');
  for (let n = 133; n <= 163; n++) {
    const id = `fr.a2.comparaisons.${n}`;
    const r = items.get(id) as { fr: string; en: string; respell?: string; kind: string; drills: string[]; gender?: string } | undefined;
    if (!r) { console.log(`  ${id}  MISSING`); continue; }
    console.log(`  ${id}  ${r.kind.padEnd(8)} ${(r.respell ?? '-').padEnd(48)} ${r.fr}`);
    console.log(`  ${' '.repeat(28)} ${' '.repeat(48)} ${r.en}`);
  }
}
