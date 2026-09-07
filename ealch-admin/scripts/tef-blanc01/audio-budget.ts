// What E8 will actually cost for Examen 1, measured rather than estimated.
//
// The phase brief asks for the real character count after Examen 1 so E9's
// budget stops being a guess. This counts what the renderer will send to
// synthesis: the SPOKEN transcript of every listening part (labels stripped —
// they are stage directions, not speech), plus every interlocutor turn, which
// is the other thing in this paper that needs a voice.
//
// It does NOT count the reading documents, the prompts, the model answers or
// the rubrics. None of those are ever spoken.
import { PAPER, TASKS } from './paper.ts';
import { spokenTranscript } from '../../../ealch-v2/src/utils/coPlayback.logic.ts';

/** Turn a labelled transcript into the turn list the renderer will stitch. */
function turns(text: string): { speaker: string; text: string }[] {
  const out: { speaker: string; text: string }[] = [];
  for (const raw of text.split('\n')) {
    const line = raw.trim();
    if (!line) continue;
    const m = /^([A-ZÀ-Ý0-9'’ .-]{2,32})\s*:\s*(.*)$/.exec(line);
    if (m && m[2]) out.push({ speaker: m[1]!.trim(), text: m[2]! });
    else out.push({ speaker: out[out.length - 1]?.speaker ?? 'NARRATEUR', text: line });
  }
  return out;
}

const rows: { block: string; parts: number; turns: number; voices: number; chars: number }[] = [];

for (const t of TASKS.filter((x) => x.skill === 'CO')) {
  let parts = 0;
  let turnCount = 0;
  let chars = 0;
  const voices = new Set<string>();
  for (const p of t.parts ?? []) {
    if (!p.text) continue;
    parts += 1;
    const ts = turns(p.text);
    turnCount += ts.length;
    for (const turn of ts) voices.add(turn.speaker);
    chars += spokenTranscript(p.text).length;
  }
  rows.push({ block: t.label ?? t.id, parts, turns: turnCount, voices: voices.size, chars });
}

for (const t of TASKS.filter((x) => x.taskType === 'po_interaction')) {
  const b = t.interlocutor!;
  const all = [b.opening, ...b.answers, b.catchAll, b.closing];
  rows.push({
    block: `${t.label} · interlocuteur`,
    parts: all.length,
    turns: all.length,
    voices: 1,
    chars: all.reduce((n, turn) => n + turn.text.length, 0),
  });
}

const pad = (s: string | number, n: number) => String(s).padEnd(n);
const num = (s: string | number, n: number) => String(s).padStart(n);

console.log(`\n${PAPER.id} — what E8 must synthesise\n`);
console.log(`  ${pad('block', 28)}${num('docs', 6)}${num('turns', 7)}${num('voices', 8)}${num('chars', 9)}`);
console.log(`  ${'-'.repeat(58)}`);
for (const r of rows) {
  console.log(`  ${pad(r.block, 28)}${num(r.parts, 6)}${num(r.turns, 7)}${num(r.voices, 8)}${num(r.chars, 9)}`);
}

const docs = rows.reduce((n, r) => n + r.parts, 0);
const turnsTotal = rows.reduce((n, r) => n + r.turns, 0);
const chars = rows.reduce((n, r) => n + r.chars, 0);
console.log(`  ${'-'.repeat(58)}`);
console.log(`  ${pad('TOTAL', 28)}${num(docs, 6)}${num(turnsTotal, 7)}${num('', 8)}${num(chars, 9)}`);

console.log(`\n  ${docs} documents, ${turnsTotal} turns, ${chars.toLocaleString('en-GB')} characters.`);
console.log(`  Mean ${Math.round(chars / docs)} characters per document.`);
console.log(
  `\n  The brief estimated ~800 characters per document across ~170 documents for` +
  `\n  TEF's five papers. Measured here: ${Math.round(chars / docs)} per document,` +
  `\n  ${docs} documents in this paper, so roughly ${(docs * 5).toLocaleString('en-GB')} documents and` +
  `\n  ${(chars * 5).toLocaleString('en-GB')} characters for five papers.\n`
);
console.log(
  `  Turns, not documents, is the unit that costs: multi-speaker stitching sends` +
  `\n  ${turnsTotal} separate synthesis requests for this paper, not ${docs}.\n`
);
