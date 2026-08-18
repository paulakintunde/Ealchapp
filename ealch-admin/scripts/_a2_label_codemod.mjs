// SOURCE-FIRST UNIT-LABEL CODEMOD.
//
// A learner surface must name a lesson by its trail position, not by its id.
// In source, a citation is ALWAYS one of two shapes:
//
//   prose      `... ${COMPARATIVE_UNIT} left this one here`   <- in a template literal
//   metadata   grammarAssumed: [COMPARATIVE_UNIT, 'a1.06']    <- a bare identifier
//
// Only the first reaches a learner. `grammarAssumed`, `grammarIntroduced` and
// `prereqUnitIds` are addressed to the curriculum and are resolved against
// content_units, so they MUST keep the raw id. That is why this transform is
// purely syntactic and safe: it rewrites `${X}` and quoted prose only, and
// never touches a bare identifier.
//
// A possessive takes the SHORT form. « lesson 22 in A2's line » puts a
// possessive on a prepositional phrase and repeats the track at a reader who is
// already inside it; « lesson 22's line » reads as English.
//
//   node scripts/_a2_label_codemod.mjs <file...> [--write]

import { readFileSync, writeFileSync } from 'node:fs';

const args = process.argv.slice(2);
const WRITE = args.includes('--write');
const files = args.filter((a) => !a.startsWith('--'));

const UNIT_CONST = /\$\{\s*([A-Z][A-Z0-9_]*_UNIT)\s*\}/g;
// A TRAILING DOT IS USUALLY A FULL STOP, NOT PART OF A LONGER ID.
// The first version excluded any following dot so that `fr.a1.noms.041` could
// never match, and that also excluded « ... since a2.01. » — a citation at the
// end of a sentence, which is where most of them sit. An item id always has a
// DIGIT or a LETTER after its dot, so exclude only that.
const RAW_ID = /(?<![\p{L}\p{N}.])((?:a1|a2|b1|b2|c1|sons)\.\d{2})(?![\p{L}\p{N}])(?!\.[\p{L}\p{N}])/gu;
// EVERY `const` LINE IS SKIPPED, because a declaration usually IS the id:
//   export const STEM_UNIT = 'a2.09';
// A constant whose value is a SENTENCE containing an id is prose and does need
// rewriting, but loosening this rule to catch those also catches the label
// tables and the machine-generated probes, so those are fixed by hand when a
// lesson's own guard reports the citation missing.
const DECL = /^\s*(export\s+)?const\s+[A-Z][A-Z0-9_]*\s*(:[^=]+)?=/;
// A MACHINE KEY, not a learner surface. `id:` is on this list because the unit
// literal itself carries one, and rewriting it made the lesson claim a unitId
// of "Lesson 33 in A2", which is not a unit id at all.
// `unit:` is here beside `id:` because a corpus row can carry the owning unit
// as DATA — `{ form: 'vous faites', verb: 'faire', unit: 'a2.12' }` — which a
// guard then compares against `UNIT.id`. Rewriting it to a label broke that
// comparison while the card it feeds never showed the id at all.
const META = /(\b(grammarAssumed|grammarIntroduced|prereqUnitIds|unitId|slug|lessonIds|itemId|itemIds|items|retest|drill|tag)\b|(^|[\s,{])(?:id|unit|owner|track|level)\s*:)/;
// A SCANNER, NOT A REGEX. The regex form required the body to hold no quote of
// either kind, so on
//   body: "J'aime le café … That is a1.04's rule …"
// it could not match the double-quoted string, matched `'aime … a1.04'` inside
// it instead, and rewrapped that in backticks — two French apostrophes
// destroyed and a `${unitRef(…)}` left inside a plain string, where it never
// interpolates. It shipped to the seed before the band-wide guard caught it.
//
// This walks the line once, so a quote is only a delimiter when nothing else
// has opened, and returns each string's span with the quote that opened it.
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

// Does a MACHINE KEY sit immediately in front of this string? Anchored to the
// end, so it looks only at what the string is the value OF.
// The `[` is optional because a one-line array — `prereqUnitIds: ['a2.01']` —
// puts the key and its values on the same line, and the multi-line state
// machine below never sees it. Without it the prerequisite became a label and
// the unit stopped declaring a prerequisite it does declare.
const KEY_BEFORE = /(?:grammarAssumed|grammarIntroduced|prereqUnitIds|unitId|slug|lessonIds|itemId|itemIds|items|retest|drill|tag|id|unit|owner|track|level)\s*:\s*\[?\s*(?:(?:'[^']*'|"[^"]*")\s*,\s*)*$/;

// A CURRICULUM ARRAY SPANS LINES, so a line-scoped guard cannot see its key.
// `grammarAssumed: [` opens on one line and its ids sit on the next, which is
// how a1.06 was rewritten to a label inside metadata on the first run.
const META_OPEN = /\b(grammarAssumed|grammarIntroduced|prereqUnitIds)\s*:\s*\[/;
const META_CLOSE = /^\s*\]/;

// A CITATION THAT OPENS A SENTENCE NEEDS A CAPITAL. The label is built at
// interpolation time rather than typed, so the capital has to be applied there.
// « lesson 22 said this first » is not a sentence.
// `\}\s` is in here because a citation very often follows an interpolated
// constant that ENDS IN A FULL STOP, and the static pass can only see the
// literal text of the line: `${LEUR_RULE} ${unitRef(X)}` looks mid-sentence
// while LEUR_RULE closes a sentence. It over-capitalises occasionally, which
// `_a2_label_caps.ts` catches on the rendered string in both directions.
const SENTENCE_START = /(^|[`"'>]|[.!?…]\s+|«\s|\}\s)\$\{unitRef\(([^{}]*?)\)\}/g;

const insertAfterImports = (s, text) => {
  const imports = [...s.matchAll(/^import .*?;$/gm)];
  const at = imports.length ? imports[imports.length - 1].index + imports[imports.length - 1][0].length : 0;
  return s.slice(0, at) + text + s.slice(at);
};

let grand = 0;
for (const f of files) {
  const src = readFileSync(f, 'utf8');
  let n = 0;
  let inMeta = false;

  const out = src.split('\n').map((line) => {
    // A COMMENT IS NOT A LEARNER SURFACE. The build notes name units by id on
    // purpose, and rewriting them would erase the record of what was cited.
    if (/^\s*(\/\/|\*|\/\*)/.test(line)) return line;

    if (inMeta) {
      if (META_CLOSE.test(line)) inMeta = false;
      return line;
    }
    if (META_OPEN.test(line) && !/\]/.test(line.split(/:\s*\[/)[1] ?? '')) { inMeta = true; return line; }

    let L = line.replace(UNIT_CONST, (m, name, off, whole) => {
      const after = whole.slice(off + m.length);
      const poss = /^['’]s(?![\p{L}])/u.test(after);
      n++;
      return poss ? '${unitRef(' + name + ", 'a2')}" : '${unitRef(' + name + ')}';
    });

    // A RAW ID INSIDE A QUOTED PROSE STRING. An item id (fr.a1.noms.041) is
    // excluded by the lookbehind on the dot; a constant declaration and every
    // curriculum-addressed key are skipped by line.
    // NEVER ON A LINE THAT ALREADY HOLDS A TEMPLATE LITERAL. The quote-span
    // regex cannot see backticks, so on a line like
    //   `... ${X}'s rule on ${Y}'s tense ...`
    // it pairs the apostrophe of one possessive with the apostrophe of the
    // next, calls the text between them a string, and rewraps it in backticks.
    // That produced `}`s rule on ${...`, which does not parse.
    if (!DECL.test(L)) {
      // Right to left, so an earlier span's offsets stay valid as we rewrite.
      for (const sp of stringSpans(L).reverse()) {
        if (sp.quote === '`') continue;               // already a template
        RAW_ID.lastIndex = 0;
        if (!RAW_ID.test(sp.body)) continue;
        RAW_ID.lastIndex = 0;
        // PER STRING, NOT PER LINE. An examples row puts a machine key and a
        // note on the SAME line — `{ fr: '…', itemId: H(74), note: "a2.13's …" }`
        // — so skipping the whole line because `itemId` appears on it left the
        // note's citation as a raw id. Only the value of a machine key is
        // exempt, and that is decided by what sits immediately in front of it.
        if (KEY_BEFORE.test(L.slice(0, sp.start))) continue;
        // A QUOTED OBJECT KEY IS NOT PROSE, and it cannot become a template
        // literal without brackets: `'the thread, from sons.06': [` parses,
        // and its backtick form does not. Decided by what follows the string.
        if (/^\s*:/.test(L.slice(sp.end + 1))) continue;
        const rebuilt = sp.body.replace(RAW_ID, (id) => "${unitRef('" + id + "')}");
        L = L.slice(0, sp.start) + '`' + rebuilt.replace(/`/g, '\`') + '`' + L.slice(sp.end + 1);
        n++;
      }
    }

    // ONE REPLACEMENT, NOT TWO. Rewriting the opening `${unitRef(` and then
    // re-balancing the close in a second pass re-fired on interpolations that
    // were ALREADY `${Cap(unitRef(X))}`, adding a third paren and breaking the
    // file. Matching the whole interpolation cannot do that.
    L = L.replace(SENTENCE_START, '$1${Cap(unitRef($2))}');
    return L;
  }).join('\n');

  let final = out;
  if (n) {
    if (/\bunitRef\(/.test(final) && !/from '\.\/_unit-ref\.ts'/.test(final)) {
      final = insertAfterImports(final, "\nimport { unitRef } from './_unit-ref.ts';");
    }
    if (/\bCap\(unitRef\(/.test(final) && !/\bconst Cap\b/.test(final)) {
      final = insertAfterImports(final,
        '\n\n/** A citation that OPENS a sentence needs a capital, and the label is built at\n' +
        ' *  interpolation time rather than typed, so the capital has to be applied here.\n' +
        ' *  « lesson 22 said this first » is not a sentence. */\n' +
        'function Cap(s: string): string { return s.charAt(0).toUpperCase() + s.slice(1); }');
    }
  }

  if (n && WRITE) writeFileSync(f, final, 'utf8');
  if (n) console.log((WRITE ? 'wrote' : 'would change') + ' ' + String(n).padStart(3) + '  ' + f);
  grand += n;
}

const s = (x) => (x === 1 ? '' : 's');
console.log(
  '\n' + grand + ' citation' + s(grand) + ' across ' + files.length + ' file' + s(files.length) +
  (WRITE ? '' : '  (dry run; pass --write)'),
);
