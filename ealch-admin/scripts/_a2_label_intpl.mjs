// THE CITATIONS THE CODEMOD COULD NOT SEE.
//
// The main codemod rewrites `${X_UNIT}` and whole quoted strings. Neither shape
// covers a raw id typed straight into the literal text of a template:
//
//   body: `... which a1.19 owns. And ... is a2.01's business ...`
//
// The quoted-string pass skips any line holding a backtick, because pairing
// apostrophes across a template corrupts it, so these survived. They are the
// last place a raw id reaches a learner.
//
// SAFE BECAUSE IT ONLY TOUCHES LITERAL TEXT. Within a line it walks the
// template spans, splits out every `${...}` expression, and rewrites ids in the
// remaining text only. An id already inside an interpolation is left alone,
// otherwise `${unitRef('a2.01')}` would become `${unitRef('${unitRef(...)}')}`.
//
//   node scripts/_a2_label_intpl.mjs <file...> [--write]

import { readFileSync, writeFileSync } from 'node:fs';

const args = process.argv.slice(2);
const WRITE = args.includes('--write');
const files = args.filter((a) => !a.startsWith('--'));

// A TRAILING DOT IS USUALLY A FULL STOP, NOT PART OF A LONGER ID.
// The first version excluded any following dot so that `fr.a1.noms.041` could
// never match, and that also excluded « ... since a2.01. » — a citation at the
// end of a sentence, which is where most of them sit. An item id always has a
// DIGIT or a LETTER after its dot, so exclude only that.
const RAW_ID = /(?<![\p{L}\p{N}.])((?:a1|a2|b1|b2|c1|sons)\.\d{2})(?![\p{L}\p{N}])(?!\.[\p{L}\p{N}])/gu;
const META = /(\b(grammarAssumed|grammarIntroduced|prereqUnitIds|unitId|slug|lessonIds|itemId|itemIds|items|retest|drill|tag)\b|(^|[\s,{])id\s*:)/;

/** Rewrite ids in the literal text of one template span, leaving every
 *  `${...}` expression in it untouched. */
function rewriteSpan(span) {
  let out = '';
  let i = 0;
  let n = 0;
  while (i < span.length) {
    const start = span.indexOf('${', i);
    if (start === -1) {
      const [t, c] = subIds(span.slice(i));
      out += t; n += c;
      break;
    }
    const [t, c] = subIds(span.slice(i, start));
    out += t; n += c;
    // Walk to the matching close brace, counting nesting.
    let depth = 0, j = start + 1;
    for (; j < span.length; j++) {
      if (span[j] === '{') depth++;
      else if (span[j] === '}') { depth--; if (depth === 0) break; }
    }
    out += span.slice(start, j + 1);
    i = j + 1;
  }
  return [out, n];
}

function subIds(text) {
  let n = 0;
  RAW_ID.lastIndex = 0;
  const t = text.replace(RAW_ID, (id) => { n++; return "${unitRef('" + id + "')}"; });
  return [t, n];
}

let grand = 0;
for (const f of files) {
  const src = readFileSync(f, 'utf8');
  let n = 0;

  const out = src.split('\n').map((line) => {
    if (/^\s*(\/\/|\*|\/\*)/.test(line)) return line;
    if (!line.includes('`') || META.test(line)) return line;

    // Template spans on this line: text between an odd and the next backtick.
    const parts = line.split('`');
    if (parts.length < 3) return line;
    for (let k = 1; k < parts.length; k += 2) {
      const [t, c] = rewriteSpan(parts[k]);
      parts[k] = t; n += c;
    }
    return parts.join('`');
  }).join('\n');

  if (n && WRITE) writeFileSync(f, out, 'utf8');
  if (n) console.log(`${WRITE ? 'wrote' : 'would change'} ${String(n).padStart(3)}  ${f}`);
  grand += n;
}
console.log(`\n${grand} in-template citation${grand === 1 ? '' : 's'}${WRITE ? '' : '  (dry run; pass --write)'}`);
