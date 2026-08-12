/* ONE-SHOT CODEMOD. Reconciles author-full-curriculum-spine.ts with the seed.
 *
 *     pnpm tsx scripts/_spine_reconcile.ts --dry-run
 *     pnpm tsx scripts/_spine_reconcile.ts
 *
 * Line-oriented rather than a regenerate, so the ~700 lines of hand-written
 * comment interleaved with the unit literals survive. Every value comes from the
 * seed, which is a published cut of the canonical database and is what learners
 * actually see.
 *
 * The one thing this does NOT throw away: the spine's old `sub` was an English
 * gloss ("the 26 letters & their French names") and the database keeps no such
 * field, so reconciling would silently delete 74 hand-written lines of copy. They
 * move to `gloss`, which is declared, never written and never rendered, so the
 * decision about whether the Den should show them stays open instead of being
 * made by a deletion.
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const here = dirname(fileURLToPath(import.meta.url));
const SPINE = join(here, 'author-full-curriculum-spine.ts');
const SEED = join(here, '../../ealch-v2/src/content/seed.json');
const DRY = process.argv.includes('--dry-run');

type U = { id: string; seq: number; title?: string; sub?: string; canDo?: string; themes?: string[]; prereqUnitIds?: string[] };
const seed = JSON.parse(readFileSync(SEED, 'utf8')) as { units: U[] };
const byId = new Map(seed.units.map((u) => [u.id, u]));

/** A TS string literal in the convention this file already uses: single quotes,
 *  switching to double when the value contains an apostrophe and no double quote
 *  (`"L'alphabet"`), which is how every such string in here is already written.
 *  Reproducing the convention keeps the diff to real content changes instead of
 *  churning 30 lines of quote style. */
const q = (s: string) => (s.includes("'") && !s.includes('"')
  ? `"${s}"`
  : `'${s.replace(/\\/g, '\\\\').replace(/'/g, "\\'")}'`);
const arr = (a: string[]) => `[${a.map(q).join(', ')}]`;

const src = readFileSync(SPINE, 'utf8');
/* LINE ENDINGS. This repo checks out CRLF on Windows, and a plain split('\n')
 * leaves a trailing \r on every line — which silently defeats the `$` in every
 * pattern below and makes the codemod a no-op that reports success. It did
 * exactly that once. Split on either, and rejoin with whatever the file already
 * used, so the diff stays about content and not about 950 line endings. */
const EOL = src.includes('\r\n') ? '\r\n' : '\n';
const lines = src.split(/\r?\n/);
const out: string[] = [];

let cur: U | undefined;          // the seed row for the unit being rewritten
let oldSub: string | null = null; // the English gloss we are preserving
let seen = new Set<string>();     // which fields this literal already carried
/** True while dropping the continuation lines of a MULTI-LINE array literal.
 *
 *  `sons.09` writes its nine prereqs across three lines. The first pass matched
 *  only the opening line, replaced it with a one-liner and left the continuation
 *  behind as syntax garbage. tsc caught it, but the lesson is that a line-oriented
 *  codemod has to know when a value does not end on its own line. */
let skipArray = false;
const stats = { units: 0, title: 0, sub: 0, canDo: 0, themes: 0, prereq: 0, glossAdded: 0, added: 0, removed: 0 };

const FIELD = /^(\s+)(id|seq|title|sub|canDo|themes|prereqUnitIds|gloss):\s*(.*)$/;

for (const line of lines) {
  // Swallow the tail of a multi-line array whose opening line we just replaced.
  if (skipArray) {
    if (/\],\s*$/.test(line)) skipArray = false;
    stats.removed++;
    continue;
  }

  const m = FIELD.exec(line);

  // Closing brace of a unit literal: flush anything the seed has and the
  // literal did not carry. `gloss` is deliberately NOT flushed here — it is
  // emitted by the `sub` branch or not at all, so it cannot be added twice.
  if (cur && /^\s*\},\s*$/.test(line)) {
    const pad = '    ';
    if (cur.themes?.length && !seen.has('themes')) { out.push(`${pad}themes: ${arr(cur.themes)},`); stats.added++; stats.themes++; }
    if (cur.prereqUnitIds?.length && !seen.has('prereqUnitIds')) { out.push(`${pad}prereqUnitIds: ${arr(cur.prereqUnitIds)},`); stats.added++; stats.prereq++; }
    cur = undefined; oldSub = null; seen = new Set();
    out.push(line);
    continue;
  }

  if (!m) { out.push(line); continue; }
  const [, pad, field, raw] = m;

  if (field === 'id') {
    const idm = /'([^']+)'/.exec(raw);
    cur = idm ? byId.get(idm[1]) : undefined;
    if (cur) stats.units++;
    oldSub = null; seen = new Set(['id']);
    out.push(line);
    continue;
  }

  if (!cur) { out.push(line); continue; }
  seen.add(field);

  switch (field) {
    case 'seq':
      out.push(`${pad}seq: ${cur.seq},`);
      break;
    case 'title': {
      const next = cur.title ?? '';
      if (!raw.startsWith(q(next))) stats.title++;
      out.push(`${pad}title: ${q(next)},`);
      break;
    }
    case 'sub': {
      // Capture the English gloss BEFORE overwriting it, then re-emit it as
      // `gloss` immediately after, so the copy is not lost.
      // BOTH quote styles. The English glosses that contain an apostrophe are
      // written with double quotes ("what's left when -er comes off"), and a
      // single-quote-only pattern silently dropped four of them.
      const om = /^'((?:[^'\\]|\\.)*)'/.exec(raw) ?? /^"((?:[^"\\]|\\.)*)"/.exec(raw);
      oldSub = om ? om[1].replace(/\\(['"\\])/g, '$1') : null;
      const next = cur.sub ?? '';
      if (!raw.startsWith(q(next))) stats.sub++;
      out.push(`${pad}sub: ${q(next)},`);
      if (oldSub !== null && oldSub !== next) { out.push(`${pad}gloss: ${q(oldSub)},`); stats.glossAdded++; seen.add('gloss'); }
      break;
    }
    case 'canDo': {
      const next = cur.canDo ?? '';
      if (!raw.startsWith(q(next))) stats.canDo++;
      out.push(`${pad}canDo: ${q(next)},`);
      break;
    }
    case 'themes':
      if (cur.themes?.length) { out.push(`${pad}themes: ${arr(cur.themes)},`); }
      else { stats.removed++; }   // the seed has none: drop the line entirely
      if (raw.includes('[') && !raw.includes(']')) skipArray = true;
      stats.themes++;
      break;
    case 'prereqUnitIds':
      if (cur.prereqUnitIds?.length) { out.push(`${pad}prereqUnitIds: ${arr(cur.prereqUnitIds)},`); }
      else { stats.removed++; }
      if (raw.includes('[') && !raw.includes(']')) skipArray = true;
      stats.prereq++;
      break;
    default:
      out.push(line);
  }
}

const next = out.join(EOL);
console.log(`  units rewritten: ${stats.units}`);
console.log(`  title changed ${stats.title} · sub changed ${stats.sub} · canDo changed ${stats.canDo}`);
console.log(`  themes touched ${stats.themes} · prereqUnitIds touched ${stats.prereq}`);
console.log(`  field lines added ${stats.added} · removed ${stats.removed} · gloss preserved ${stats.glossAdded}`);
console.log(`  ${src.length} bytes -> ${next.length} bytes`);

if (DRY) { console.log('\n  DRY RUN: nothing written.\n'); process.exit(0); }
writeFileSync(SPINE, next, 'utf8');
console.log('\n  author-full-curriculum-spine.ts rewritten.\n');
