// Draw a TEF paper plan from the topic bank, deterministically.
//
// E9 requires the plan to be "deterministic, generated, human-approved before
// authoring". Generated matters for a reason paper 1 demonstrated: its ledger
// was typed by hand and both its figures were wrong (it claimed 37 of 66 spent
// and 29 left; the truth was 45 and 21), which made paper 2 look buildable when
// the bank could not supply it.
//
// Three constraints, all of them binding:
//
//   1. NO REUSE across papers (TOPICS rule 1). Every id any earlier paper spent
//      is off the table, and this script reads those ledgers rather than being
//      told.
//   2. The `Suits` tag must match the block. Soft in the file's own words — "a
//      suggestion, not a constraint" — but a suggestion the planner should
//      follow unless it has to reach.
//   3. The BAND must fit. A block has a target band measured from the gold
//      paper, and a situation carries the range it supports. A C1 reportage
//      topic in block A is not a block A document.
//
// SCARCITY FIRST. Blocks are allocated in order of how tight their candidate
// pool is, not in paper order. Allocating CO-A last, after CO-G has taken 17
// situations, is how a block with five candidates ends up with none.
//
//   pnpm tsx scripts/plan-paper.ts 2          plan paper 2, print it
//   pnpm tsx scripts/plan-paper.ts 2 --write  also write the plan file
import { readFileSync, writeFileSync, readdirSync, existsSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = dirname(fileURLToPath(import.meta.url));

type Situation = { id: string; text: string; bands: string; theme: string; suits: string[] };

/** Bands a block will accept, measured from Examen 1's own choices rather than
 *  assumed from the blueprint's prose. */
type Block = {
  code: string; label: string; count: number; bands: string[];
  subTypes?: [string, number][];
  /** Codes this block may borrow from once its own tag pool is dry.
   *
   *  Not a loosening of the rules — TOPICS rule 2 says the Suits column is "a
   *  suggestion, not a constraint", and Examen 1 already did this: its block G
   *  micro-trottoirs are CO-C-tagged situations, because a vox-pop is a vox-pop
   *  whichever block it lands in. Every borrowed pick is MARKED in the plan, so
   *  a reviewer sees the reach rather than having it disappear into a table. */
  fallback?: string[];
};

const BLOCKS: Block[] = [
  // FOUR, not three. This said three because PER_PAPER was measured from
  // blanc-01's ledger, and that ledger under-recorded: block A has four
  // documents (échange 1-4) but only three topics were written down, so
  // «Échange 4 · à la boulangerie» appears against no situation at all.
  // The blueprint's published count is 4 questions, one document each.
  { code: 'CO-A', label: 'Conversations avec dessins', count: 4, bands: ['A1', 'A2', 'B1'] },
  { code: 'CO-B', label: 'Annonces publiques', count: 4, bands: ['A2', 'B1'] },
  { code: 'CO-C', label: 'Micros-trottoirs', count: 2, bands: ['B1', 'B2'] },
  { code: 'CO-D', label: 'Chroniques radio', count: 1, bands: ['B2', 'C1'] },
  { code: 'CO-E', label: 'Interviews', count: 1, bands: ['B1', 'B2', 'C1'] },
  { code: 'CO-F', label: 'Reportage', count: 1, bands: ['B2', 'C1'] },
  // The G-elastic fill rule: 17 documents, mixed sub-types, ordered so no two
  // consecutive items share one.
  {
    code: 'CO-G', label: 'Documents divers', count: 17, bands: ['A1', 'A2', 'B1', 'B2'],
    subTypes: [['échange', 4], ['répondeur', 3], ['information', 3], ['micro-trottoir', 4], ['consignes', 3]],
    // Block G's vox-pops come from the micro-trottoir pool, which is tagged
    // CO-C. Examen 1 drew them the same way.
    fallback: ['CO-C'],
  },
  { code: 'CE-A', label: 'Documents de la vie quotidienne', count: 7, bands: ['A1', 'A2', 'B1', 'B2'] },
  { code: 'CE-DE', label: 'Lecture rapide', count: 2, bands: ['A2', 'B1', 'B2'] },
  { code: 'CE-F', label: 'Documents administratifs et professionnels', count: 2, bands: ['B1', 'B2'] },
  { code: 'CE-G', label: 'Articles de presse', count: 1, bands: ['B2', 'C1'] },
  { code: 'EE-A', label: 'Fait divers', count: 1, bands: ['A2', 'B1'] },
  { code: 'EE-B', label: 'Lettre argumentée', count: 1, bands: ['B2', 'C1'] },
  { code: 'EO-A', label: 'Obtenir de l’information', count: 1, bands: ['A2', 'B1'] },
  { code: 'EO-B', label: 'Convaincre', count: 1, bands: ['A2', 'B1', 'B2'] },
];

function bank(): Situation[] {
  const md = readFileSync(resolve(HERE, '../exam-blueprints/TOPICS-tef-canada.md'), 'utf8');
  const out: Situation[] = [];
  for (const line of md.split('\n')) {
    const m = line.match(/^\|\s*(TEF-\d+)\s*\|([^|]*)\|([^|]*)\|\s*`([^`]+)`\s*\|([^|]*)\|/);
    if (!m) continue;
    out.push({
      id: m[1]!, text: m[2]!.trim(), bands: m[3]!.trim(), theme: m[4]!,
      suits: m[5]!.split(',').map((s) => s.trim()).filter(Boolean),
    });
  }
  return out.sort((a, b) => Number(a.id.slice(4)) - Number(b.id.slice(4)));
}

/**
 * Ids any OTHER paper has already spent.
 *
 * `exclude` is the paper being planned, and leaving it out is not a nicety.
 * Once blanc-02 had a ledger, re-running the planner for paper 2 treated paper
 * 2's own draw as unavailable and produced a completely different paper — so
 * regenerating a plan was not idempotent, and the second run silently disagreed
 * with the approved one.
 *
 * Every other ledger is read from disk, so a new paper directory counts without
 * editing this script.
 */
function spent(exclude: string): Map<string, string> {
  const out = new Map<string, string>();
  for (const dir of readdirSync(HERE, { withFileTypes: true })) {
    if (!dir.isDirectory() || !/^tef-blanc\d+$/.test(dir.name)) continue;
    if (dir.name === exclude) continue;
    const f = resolve(HERE, dir.name, 'common.ts');
    if (!existsSync(f)) continue;
    const head = readFileSync(f, 'utf8').split('── Integrity')[0] ?? '';
    for (const id of head.match(/TEF-\d+/g) ?? []) out.set(id, dir.name);
  }
  return out;
}

/** The band range a situation supports, as a set. "A2–B1" spans both. */
const ORDER = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
function spans(bands: string): string[] {
  const parts = bands.split(/[–-]/).map((s) => s.trim()).filter(Boolean);
  if (parts.length === 1) return parts;
  const a = ORDER.indexOf(parts[0]!);
  const b = ORDER.indexOf(parts[parts.length - 1]!);
  if (a < 0 || b < 0) return parts;
  return ORDER.slice(Math.min(a, b), Math.max(a, b) + 1);
}

const fits = (s: Situation, b: Block) => spans(s.bands).some((x) => b.bands.includes(x));

/**
 * Which CO-G sub-type a situation reads as, or null when it does not say.
 *
 * Returning null matters. An earlier version defaulted everything unmatched to
 * 'échange', which quietly labelled "Un jardin partagé fixe ses règles" — a
 * notice — as a two-turn conversation, and the plan then asserted a sub-type it
 * had actually guessed. A reviewer cannot approve what they cannot see, so an
 * unclassified situation is filled in explicitly and MARKED as assigned rather
 * than inferred.
 */
function subTypeOf(s: Situation): string | null {
  const t = s.text.toLowerCase();
  if (t.startsWith('micro-trottoir')) return 'micro-trottoir';
  if (/répondeur|messagerie/.test(t)) return 'répondeur';
  if (/^des consignes|^une notice|^un règlement|^un guide/.test(t)) return 'consignes';
  if (/^une annonce|^un panneau|^un bulletin|^une affiche|^un avis|^un appel/.test(t)) return 'information';
  // A two-turn exchange needs two parties and something at issue between them.
  if (/demande|conteste|signale|réclame|propose|oublié|perdu|refus|désaccord|contrôle|cassé|panne|bloqué/.test(t)) {
    return 'échange';
  }
  return null;
}

function main() {
  const paperNo = Number(process.argv[2] ?? '2');
  if (!Number.isInteger(paperNo) || paperNo < 2) throw new Error('give a paper number of 2 or more');

  const all = bank();
  const used = spent(`tef-blanc0${paperNo}`);
  const free = all.filter((s) => !used.has(s.id));

  console.log(`\n  bank ${all.length} · spent by earlier papers ${used.size} · free ${free.length}`);
  console.log(`  planning paper ${paperNo}\n`);

  const taken = new Set<string>();
  const borrowedFrom = new Map<string, string>();
  const assigned = new Set<string>();
  const plan = new Map<string, Situation[]>();

  // Scarcity first: the block with the tightest ratio of candidates to need
  // picks before a block that can draw from ninety.
  const order = [...BLOCKS].sort((a, b) => {
    const ca = free.filter((s) => s.suits.includes(a.code) && fits(s, a)).length / a.count;
    const cb = free.filter((s) => s.suits.includes(b.code) && fits(s, b)).length / b.count;
    return ca - cb;
  });

  const shortfalls: string[] = [];
  for (const block of order) {
    const pool = free.filter((s) => !taken.has(s.id) && s.suits.includes(block.code) && fits(s, block));
    let chosen: Situation[];

    if (block.subTypes) {
      // Fill each sub-type from situations that READ as that sub-type, so the
      // plan does not ask an author to turn a vox-pop line into a voicemail.
      chosen = [];
      for (const [type, n] of block.subTypes) {
        const own = pool.filter((s) => !taken.has(s.id) && subTypeOf(s) === type);
        const pick = own.slice(0, n);
        // Reach into the fallback codes only for the shortfall, and record it.
        if (pick.length < n && block.fallback) {
          const borrowed = free.filter(
            (s) => !taken.has(s.id) && !pick.includes(s) && fits(s, block)
              && subTypeOf(s) === type && s.suits.some((c) => block.fallback!.includes(c))
          ).slice(0, n - pick.length);
          for (const s of borrowed) borrowedFrom.set(s.id, s.suits.filter((c) => block.fallback!.includes(c))[0]!);
          pick.push(...borrowed);
        }
        // Still short? Fill from situations the classifier could not read, and
        // say so. Better a marked assignment a reviewer can reject than a
        // shortfall that stops the plan or a silent default that hides it.
        if (pick.length < n) {
          const vague = pool.filter((s) => !taken.has(s.id) && !pick.includes(s) && subTypeOf(s) === null)
            .slice(0, n - pick.length);
          for (const s of vague) assigned.add(s.id);
          pick.push(...vague);
        }
        if (pick.length < n) shortfalls.push(`${block.code}/${type}: needed ${n}, found ${pick.length}`);
        for (const s of pick) taken.add(s.id);
        chosen.push(...pick.map((s) => ({ ...s, text: `[${type}] ${s.text}` })));
      }
      chosen = interleave(chosen, block.subTypes.map(([t]) => t));
    } else {
      chosen = pool.slice(0, block.count);
      if (chosen.length < block.count) shortfalls.push(`${block.code}: needed ${block.count}, found ${chosen.length}`);
      for (const s of chosen) taken.add(s.id);
    }
    plan.set(block.code, chosen);
  }

  for (const block of BLOCKS) {
    const rows = plan.get(block.code) ?? [];
    console.log(`  ${block.code}  ${block.label}  (${rows.length}/${block.count}, bands ${block.bands.join('/')})`);
    for (const s of rows) {
      const b = borrowedFrom.get(s.id);
      const note = b ? `   (tagged ${b}, borrowed)` : assigned.has(s.id) ? '   (sub-type ASSIGNED, not inferred)' : '';
      console.log(`      ${s.id.padEnd(7)} ${s.bands.padEnd(6)} ${s.theme.padEnd(28)} ${s.text}${note}`);
    }
    console.log('');
  }

  if (shortfalls.length) {
    console.log('  ! the bank could not satisfy every block:');
    for (const s of shortfalls) console.log(`      ${s}`);
    console.log('');
  } else {
    console.log(`  ✓ every block filled · ${taken.size} situations spent · ${free.length - taken.size} left for later papers\n`);
  }

  if (process.argv.includes('--write')) {
    const out = resolve(HERE, `../exam-blueprints/PLAN-tef-blanc-0${paperNo}.md`);
    writeFileSync(out, render(paperNo, plan, taken.size, free.length - taken.size, borrowedFrom), 'utf8');
    console.log(`  wrote ${out}\n`);
  }
}

/** Round-robin the sub-types so no two consecutive documents share one. */
function interleave(rows: Situation[], types: string[]): Situation[] {
  const buckets = new Map(types.map((t) => [t, rows.filter((r) => r.text.startsWith(`[${t}]`))]));
  const out: Situation[] = [];
  let guard = 0;
  while (out.length < rows.length && guard++ < 1000) {
    for (const t of types) {
      const b = buckets.get(t)!;
      if (b.length) out.push(b.shift()!);
    }
  }
  return out;
}

function render(no: number, plan: Map<string, Situation[]>, spentN: number, leftN: number, borrowed: Map<string, string>): string {
  const lines = [
    `# PLAN — TEF Canada Examen ${no}`,
    '',
    `**Blueprint:** \`tef-canada-2025.09+G-elastic\` · **Generated** by \`scripts/plan-paper.ts ${no}\``,
    '',
    'Do not edit by hand. Regenerate instead — a hand-typed ledger is how Examen 1',
    'ended up recording the wrong count of what it had spent.',
    '',
    `Spends **${spentN}** situations; **${leftN}** remain for later papers.`,
    '',
    '| Block | | Topic | Bands | Theme | Situation |',
    '|---|---|---|---|---|---|',
  ];
  for (const b of BLOCKS) {
    (plan.get(b.code) ?? []).forEach((s, i) => {
      const from = borrowed.get(s.id);
      lines.push(`| ${i === 0 ? `\`${b.code}\`` : ''} | ${i + 1} | ${s.id}${from ? ` <sub>via ${from}</sub>` : ''} | ${s.bands} | \`${s.theme}\` | ${s.text} |`);
    });
  }
  lines.push('', '`CE-BC` takes no topic: gap-fill is written to a grammar point, not a situation.', '');
  return lines.join('\n');
}

main();
