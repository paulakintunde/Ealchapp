// WHICH OF a1.03's PRINTED ENDING FIGURES NO LONGER MATCH THE SEED, and rewrite
// them in `genre-endings.ts` with a note saying what moved them.
//
// a1.03 prints a population and an accuracy for 35 endings on cards a learner
// reads. They are constants, measured once against the seed, and any build that
// adds or removes a noun moves them. Three suites cross-check them, so a stale
// figure is a red band rather than a quiet inaccuracy.
//
// The remedy is always to RE-MEASURE, never to restore the row: the figure is a
// claim about the shipped corpus, and the corpus is what it is.
//
//   npx tsx scripts/_a1_genre_remeasure.ts          report
//   npx tsx scripts/_a1_genre_remeasure.ts --write  rewrite the moved figures

import { readFileSync, writeFileSync } from 'node:fs';
import { measureEnding } from '../../ealch-v2/src/content/gender.logic.ts';
import * as endings from './data/genre-endings.ts';

const WRITE = process.argv.includes('--write');
const WHY = process.argv.find((a) => a.startsWith('--why='))?.slice(6)
  ?? 'four orphan rows in `sons.jours-et-mois`, referenced by no lesson, were removed from the seed by their owning merges';

type Row = { ending: string; predicts: string; accuracy: number; items: number };
const seed = JSON.parse(
  readFileSync(new URL('../../ealch-v2/src/content/seed.json', import.meta.url), 'utf8'),
) as { items: Array<{ id: string; fr: string; theme?: string; kind?: string }> };

// THREE ARRAYS, not one. The ten rule endings a1.03 teaches, the ones it names
// as worthless, and the sheet's long tail — each prints its own population, and
// a1-15-famille.test.ts cross-checks the worthless `-e` specifically.
const E = endings as unknown as {
  ENDING_RULES: Row[]; WORTHLESS_ENDINGS: Row[]; MORE_ENDINGS: Row[];
};
const ALL: Row[] = [...(E.ENDING_RULES ?? []), ...(E.WORTHLESS_ENDINGS ?? []), ...(E.MORE_ENDINGS ?? [])];
if (!ALL.length) { console.error('could not find the endings arrays in genre-endings.ts'); process.exit(2); }

const moved: Array<{ ending: string; wasN: number; nowN: number; wasAcc: number; nowAcc: number }> = [];
for (const e of ALL) {
  const m = measureEnding(seed.items as never, e.ending) as { n: number; accuracy: number; predicts?: string };
  if (m.n !== e.items || Math.round(m.accuracy) !== e.accuracy) {
    moved.push({ ending: e.ending, wasN: e.items, nowN: m.n, wasAcc: e.accuracy, nowAcc: Math.round(m.accuracy) });
  }
}

if (!moved.length) { console.log('every printed ending figure matches the seed'); process.exit(0); }
for (const m of moved) {
  console.log(`  -${m.ending}: n ${m.wasN} -> ${m.nowN}, accuracy ${m.wasAcc}% -> ${m.nowAcc}%`);
}
if (!WRITE) { console.log(`\n${moved.length} moved (dry run; pass --write)`); process.exit(0); }

const p = 'scripts/data/genre-endings.ts';
let src = readFileSync(p, 'utf8');
const today = new Date().toISOString().slice(0, 10);

// TWO ROW FORMATS, and for a long time this only knew one of them.
//
// ENDING_RULES rows are multi-line and end `items: 58,`. MORE_ENDINGS and
// WORTHLESS_ENDINGS rows are single-line objects and end `items: 46 }` — no
// comma, because the comma belongs to the array. The block regex below looked
// for `items: N,` only, so on 2026-09-23 a remeasure of 23 moved figures died
// on the first single-line row (`-in`) with "could not locate the -in block"
// and wrote nothing at all. Fourteen of the twenty-seven rows were unreachable.
//
// Multi-line rows take a note on their own line above the figure. Single-line
// rows cannot, so they carry the same note appended to the trailing comment
// that format already uses for exactly this history.
for (const m of moved) {
  // Anchored to the ending's own block so a shared number cannot be rewritten
  // in the wrong entry.
  const block = new RegExp(`(ending: '${m.ending}',[\\s\\S]{0,9000}?)items: ${m.wasN},`);
  if (block.test(src)) {
    // Match the file's own terminator, or the inserted note turns a CRLF file
    // into a mixed one and every line reads as changed in the diff.
    const nl = src.includes('\r\n') ? '\r\n' : '\n';
    const note = `    // ${m.nowN} since ${today}: ${WHY}.${nl}`;
    src = src.replace(block, (_all, head: string) => `${head}${note}    items: ${m.nowN},`);
    if (m.nowAcc !== m.wasAcc) {
      const accBlock = new RegExp(`(ending: '${m.ending}',[\\s\\S]{0,9000}?)accuracy: ${m.wasAcc},`);
      src = src.replace(accBlock, (_all, head: string) => `${head}accuracy: ${m.nowAcc},`);
    }
    continue;
  }

  // Single-line row. Rewritten line-wise rather than with a spanning regex so
  // the edit cannot reach into a neighbouring entry.
  //
  // THE FILE IS CRLF. split('\n') therefore leaves a '\r' at the end of every
  // line, and appending after it puts the text BEYOND a carriage return — which
  // ECMAScript treats as a line terminator, so the `//` comment ends at the
  // '\r' and everything appended becomes code. That is a real break, not a
  // cosmetic one: it produced "Unexpected ;" at the first rewritten row. The
  // terminator is lifted off before the edit and put back after it.
  const lines = src.split('\n');
  const ix = lines.findIndex(
    (l) => l.includes(`ending: '${m.ending}',`) && new RegExp(`items: ${m.wasN}\\s*\\}`).test(l),
  );
  if (ix < 0) { console.error(`could not locate the -${m.ending} row in either format`); process.exit(3); }
  const eol = lines[ix].endsWith('\r') ? '\r' : '';
  let line = lines[ix].slice(0, lines[ix].length - eol.length);
  line = line.replace(new RegExp(`items: ${m.wasN}(\\s*\\})`), `items: ${m.nowN}$1`);
  if (m.nowAcc !== m.wasAcc) line = line.replace(`accuracy: ${m.wasAcc},`, `accuracy: ${m.nowAcc},`);
  const note = `${m.nowN} since ${today}: ${WHY}`;
  line = line.includes('//') ? `${line}; ${note}` : `${line}   // ${note}`;
  lines[ix] = line + eol;
  src = lines.join('\n');
}
writeFileSync(p, src, 'utf8');
console.log(`\n${moved.length} figure(s) re-measured in ${p}`);
