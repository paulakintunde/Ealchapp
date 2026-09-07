// A `${…}` INSIDE A QUOTED STRING NEVER INTERPOLATES.
//
// It ships the placeholder to a learner verbatim. Six reached a2.34's cards
// this way — `${POSSESSIVE_ADJ_REF}` printed on a scene beat, a card body, a
// glossary note, a quiz `why` and two sheet rowDetails — because the pilot pass
// substituted the constant into single-quoted strings by hand, before the
// codemod existed to convert the quote as well.
//
// Uses the same scanner as the codemod, so a quote is only a delimiter when
// nothing else has opened: `"J'aime … a1.04's"` is ONE double-quoted string,
// not two single-quoted ones.
//
//   node scripts/_placeholder_scan.mjs [--fix]

import { readdirSync, readFileSync, writeFileSync } from 'node:fs';

const FIX = process.argv.includes('--fix');
const DIR = 'scripts/data';

function stringSpans(line) {
  const spans = [];
  let quote = null;
  let start = -1;
  for (let i = 0; i < line.length; i++) {
    const c = line[i];
    if (c === '\\') { i++; continue; }
    if (quote === null && (c === "'" || c === '"' || c === '`')) { quote = c; start = i; continue; }
    if (c === quote) { spans.push({ quote, start, end: i, body: line.slice(start + 1, i) }); quote = null; }
  }
  return spans;
}

let found = 0;
let fixed = 0;
for (const f of readdirSync(DIR).filter((x) => x.endsWith('.ts'))) {
  const p = `${DIR}/${f}`;
  const lines = readFileSync(p, 'utf8').split('\n');
  let touched = false;

  lines.forEach((line, i) => {
    if (/^\s*(\/\/|\*|\/\*)/.test(line)) return;
    // Right to left, so an earlier span's offsets survive a rewrite.
    for (const sp of stringSpans(line).reverse()) {
      if (sp.quote === '`' || !sp.body.includes('${')) continue;
      found++;
      console.log(`  ${f}:${i + 1}  ${sp.quote}…${sp.body.slice(0, 66)}…`);
      if (!FIX) continue;
      // The quote becomes a backtick so the placeholder resolves. Anything the
      // template would read as syntax is escaped first; an apostrophe or a
      // double quote inside is now ordinary text and its backslash goes.
      const body = sp.body
        .replace(/`/g, '\\`')
        .replace(new RegExp(`\\\\${sp.quote}`, 'g'), sp.quote);
      lines[i] = line.slice(0, sp.start) + '`' + body + '`' + line.slice(sp.end + 1);
      line = lines[i];
      touched = true;
      fixed++;
    }
  });

  if (touched) writeFileSync(p, lines.join('\n'), 'utf8');
}

console.log(`\n${found} uninterpolated placeholder(s)${FIX ? `, ${fixed} converted to template literals` : ' (pass --fix)'}`);
