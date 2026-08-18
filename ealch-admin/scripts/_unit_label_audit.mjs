// AN INDEPENDENT AUDIT OF THE UNIT-LABEL MIGRATION.
//
// The shipped guard proves that no raw unit id reaches a learner. It cannot
// prove that the text around the citation survived, that the label points at
// the unit the id pointed at, or that a mechanical trim left readable English.
// Those are the ways this migration could have gone wrong quietly, so they are
// measured here against the seed as it stood BEFORE the first migration commit.
//
//   node scripts/_unit_label_audit.mjs <pre-seed.json>

import { readFileSync } from 'node:fs';

const preFile = process.argv[2];
const pre = JSON.parse(readFileSync(preFile, 'utf8'));
const now = JSON.parse(readFileSync('../ealch-v2/src/content/seed.json', 'utf8'));

const TRACK = { sons: 'Sounds', a1: 'A1', a2: 'A2', b1: 'B1', b2: 'B2', c1: 'C1' };
const seqOf = new Map();
for (const u of now.units) seqOf.set(u.id, Number(u.seq));

const RAW_ID = /(?<![\p{L}\p{N}.])((?:a1|a2|b1|b2|c1|sons)\.\d{2})(?![\p{L}\p{N}])(?!\.[\p{L}\p{N}])/gu;
const LABEL = /lesson (\d+) in (A1|A2|B1|B2|C1|Sounds)/gi;
const METADATA = new Set([
  'grammarAssumed', 'grammarIntroduced', 'prereqUnitIds',
  'id', 'unitId', 'lessonIds', 'itemId', 'itemIds', 'examples', 'slug',
]);

const learner = (v, out = []) => {
  if (typeof v === 'string') out.push(v);
  else if (Array.isArray(v)) v.forEach((x) => learner(x, out));
  else if (v && typeof v === 'object') {
    for (const [k, x] of Object.entries(v)) { if (!METADATA.has(k)) learner(x, out); }
  }
  return out;
};
/** Every string, including machine keys — for the corruption checks. */
const all = (v, out = []) => {
  if (typeof v === 'string') out.push(v);
  else if (Array.isArray(v)) v.forEach((x) => all(x, out));
  else if (v && typeof v === 'object') Object.values(v).forEach((x) => all(x, out));
  return out;
};

const byId = (s) => new Map(s.lessons.map((l) => [l.id, l]));
const A = byId(pre);
const B = byId(now);

const report = (title, rows) => {
  console.log(`\n── ${title} ${'─'.repeat(Math.max(0, 62 - title.length))}`);
  if (!rows.length) { console.log('   clean'); return 0; }
  for (const r of rows.slice(0, 10)) console.log(`   ${r}`);
  if (rows.length > 10) console.log(`   … and ${rows.length - 10} more`);
  return rows.length;
};

let total = 0;

/* 1. DOES THE LABEL POINT WHERE THE ID POINTED?
 *    The set of units a lesson cites must be unchanged. A citation that moved
 *    to a different lesson is the worst outcome available here and no other
 *    check would see it.
 *
 *    BOTH FORMS COUNT. A same-track citation is written short — « lesson 8 »,
 *    not « lesson 8 in A2 » — because a possessive on a prepositional phrase
 *    does not read as English. Matching only the full form reported fifteen
 *    lessons as having dropped a citation they had not dropped. */
{
  const bad = [];
  const seqIn = (track, n) => [...seqOf].find(([uid, sq]) => uid.startsWith(`${track}.`) && sq === n)?.[0];
  for (const [id, before] of A) {
    const after = B.get(id);
    if (!after) continue;
    const ownTrack = id.split('.')[0];

    const cited = new Set();
    for (const s of learner(before)) for (const m of s.matchAll(RAW_ID)) cited.add(m[1]);
    if (!cited.size) continue;

    const text = learner(after).join('  ');
    const names = (unit) => {
      const sq = seqOf.get(unit);
      if (sq === undefined) return false;
      const track = unit.split('.')[0];
      const full = `lesson ${sq} in ${TRACK[track]}`;
      // The short form is only unambiguous inside the citing lesson's own
      // track, which is exactly where the authoring side emits it.
      const short = track === ownTrack ? `lesson ${sq}` : null;
      const hay = text.toLowerCase();
      if (hay.includes(full.toLowerCase())) return true;
      if (short && new RegExp(`lesson ${sq}(?!\d)`, 'i').test(text)) return true;
      return RAW_ID.test(text) && text.includes(unit);
    };

    const lost = [...cited].filter((u) => !names(u));
    if (lost.length) bad.push(`${id}: cited ${lost.join(', ')} before and names ${lost.length === 1 ? 'it' : 'them'} nowhere now`);
  }
  total += report('1. every unit a lesson cited is still cited', bad);
}

/* 2. THE FRENCH MUST NOT HAVE MOVED.
 *    This migration rewrites English prose only. Any change to a French string
 *    is either a corrupted apostrophe or content loss. */
{
  const frOf = (l) => {
    const out = [];
    const walk = (v) => {
      if (Array.isArray(v)) v.forEach(walk);
      else if (v && typeof v === 'object') {
        for (const [k, x] of Object.entries(v)) {
          if (k === 'fr' && typeof x === 'string') out.push(x);
          else walk(x);
        }
      }
    };
    walk(l);
    return out;
  };
  const bad = [];
  for (const [id, before] of A) {
    const after = B.get(id);
    if (!after) continue;
    // AS A SET, NOT BY INDEX. Pairing string i with string i misaligns the
    // moment one array grows or a section is reordered, and calls every string
    // after that point "changed" — which is how this first reported 40 lessons
    // with no French change in any of them.
    const xs = new Set(frOf(before));
    const ys = new Set(frOf(after));
    // A `fr` FIELD IS NOT ALWAYS FRENCH. A tapTable cell uses it for the row's
    // left-hand label, and a2.16's reads « sons.07 · Two vowels collide … ».
    // That one SHOULD have changed. Pairing the two by the text that follows
    // the citation tells a migrated label from a lost sentence.
    const tail = (v) => v.replace(RAW_ID, '').replace(/lesson \d+( in (A1|A2|B1|B2|C1|Sounds))?/gi, '').trim();
    const migrated = new Set();
    for (const v of xs) {
      RAW_ID.lastIndex = 0;
      if (!RAW_ID.test(v)) continue;
      const twin = [...ys].find((w) => !xs.has(w) && tail(w) === tail(v));
      if (twin) { migrated.add(v); migrated.add(twin); }
    }
    for (const v of xs) if (!ys.has(v) && !migrated.has(v)) bad.push(`${id}: French GONE — ${JSON.stringify(v.slice(0, 60))}`);
    for (const v of ys) if (!xs.has(v) && !migrated.has(v)) bad.push(`${id}: French NEW  — ${JSON.stringify(v.slice(0, 60))}`);
  }
  total += report('2. no French string changed', bad);
}

/* 3. CORRUPTION SIGNATURES a mechanical rewrite leaves behind.
 *    Measured as a DIFFERENCE against the pre-migration seed. A double space
 *    in an aligned column and a spaced full stop in a fill-in-the-blank are
 *    both deliberate and both older than this work; flagging them says nothing.
 *    Only a signature that is NEW belongs to the migration. */
{
  const sig = (s) => {
    if (s.includes('${')) return 'an uninterpolated ${…}';
    if (/`/.test(s)) return 'a backtick in shipped text';
    if (/\['"n]/.test(s)) return 'a literal escape sequence';
    return null;
  };
  const seen = new Set();
  for (const [, l] of A) for (const s of all(l)) if (sig(s)) seen.add(s);
  const bad = [];
  for (const [id, l] of B) {
    for (const s of all(l)) {
      const k = sig(s);
      if (k && !seen.has(s)) bad.push(`${id}: ${k} — ${JSON.stringify(s.slice(0, 60))}`);
    }
  }
  total += report('3. no NEW corruption signature in shipped text', bad);
}

/* 4. EVERY LABEL RESOLVES, and to a unit that exists at that position. */
{
  const bad = [];
  for (const [id, l] of B) {
    for (const s of learner(l)) {
      for (const m of s.matchAll(LABEL)) {
        const track = Object.keys(TRACK).find((t) => TRACK[t].toLowerCase() === m[2].toLowerCase());
        const hit = [...seqOf].some(([uid, sq]) => uid.startsWith(`${track}.`) && sq === Number(m[1]));
        if (!hit) bad.push(`${id}: "${m[0]}" is a position no unit occupies`);
      }
    }
  }
  total += report('4. every label resolves to a real unit', [...new Set(bad)]);
}

/* 5. DID A TRIM EAT A SENTENCE?
 *    A body that lost more than a third of its words is not a trim. */
{
  const bad = [];
  const words = (s) => s.split(/\s+/).filter(Boolean).length;
  for (const [id, before] of A) {
    const after = B.get(id);
    if (!after) continue;
    // A body that survived unchanged is not interesting. Only a string that
    // VANISHED and has no近 twin in the new set is a possible loss, so compare
    // totals per lesson and name the drop.
    const x = learner(before), y = learner(after);
    const wx = x.reduce((n, s) => n + words(s), 0);
    const wy = y.reduce((n, s) => n + words(s), 0);
    if (wx >= 200 && wy < wx * 0.9) bad.push(`${id}: ${wx} learner words before, ${wy} now (${Math.round((1 - wy / wx) * 100)}% shorter)`);
  }
  total += report('5. no body lost more than a third of its words', bad);
}

/* 6. A DIAGNOSTIC IS FOR AN AUTHOR. No label should appear in one. */
{
  const bad = [];
  for (const [id, l] of B) {
    for (const s of all(l)) {
      // `throw` also matches "thrown", and `die(` matches nothing a card
      // ever says. Only the literal shape of a thrown diagnostic counts.
      LABEL.lastIndex = 0;
      if (/throw new Error|die\(/.test(s) && LABEL.test(s)) bad.push(`${id}: ${JSON.stringify(s.slice(0, 60))}`);
    }
  }
  total += report('6. no lesson string looks like a leaked diagnostic', bad);
}

console.log(`\n${total ? `✗ ${total} finding(s)` : '✓ nothing found'}\n`);
